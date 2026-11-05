// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: (footer) range:11766973..12268774
// basis: webpack-container confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
}, __webpack_module_cache__ = {}, leafPrototypes, getProto;
  function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var r = __webpack_module_cache__[e] = { exports: {} };
    return __webpack_modules__[e].call(r.exports, r, r.exports, __webpack_require__), r.exports;
  }
  __webpack_require__.m = __webpack_modules__, __webpack_require__.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return __webpack_require__.d(t, { a: t }), t;
  }, getProto = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__, __webpack_require__.t = function(e, t) {
    if (1 & t && (e = this(e)), 8 & t) return e;
    if ("object" == typeof e && e) {
      if (4 & t && e.__esModule) return e;
      if (16 & t && "function" == typeof e.then) return e;
    }
    var r = /* @__PURE__ */ Object.create(null);
    __webpack_require__.r(r);
    var n = {};
    leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
    for (var s = 2 & t && e; "object" == typeof s && !~leafPrototypes.indexOf(s); s = getProto(s)) Object.getOwnPropertyNames(s).forEach((t2) => n[t2] = () => e[t2]);
    return n.default = () => e, __webpack_require__.d(r, n), r;
  }, __webpack_require__.d = (e, t) => {
    for (var r in t) __webpack_require__.o(t, r) && !__webpack_require__.o(e, r) && Object.defineProperty(e, r, { enumerable: true, get: t[r] });
  }, __webpack_require__.f = {}, __webpack_require__.e = (e) => Promise.all(Object.keys(__webpack_require__.f).reduce((t, r) => (__webpack_require__.f[r](e, t), t), [])), __webpack_require__.u = (e) => e + ".js", __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), __webpack_require__.r = (e) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: true });
  }, __webpack_require__.p = "", (() => {
    __webpack_require__.b = require("url").pathToFileURL(__filename);
    var e = { 792: 1 };
    __webpack_require__.f.require = (t, r) => {
      e[t] || ((t2) => {
        var r2 = t2.modules, n = t2.ids, s = t2.runtime;
        for (var o in r2) __webpack_require__.o(r2, o) && (__webpack_require__.m[o] = r2[o]);
        s && s(__webpack_require__);
        for (var i = 0; i < n.length; i++) e[n[i]] = 1;
      })(require("./" + __webpack_require__.u(t)));
    };
  })();
  var __webpack_exports__ = {};
  (() => {
    "use strict";
    __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, { activate: () => Vu, activateCursorAgentRuntime: () => Gu, deactivate: () => Yu, deactivateCursorAgentRuntime: () => zu, registerAgentExecProviderDuringActivation: () => wu });
    var e = __webpack_require__(27998);
    const t = "cursor-agent-exec.mountAgentStore", r = "cursor-agent-exec.resolveAgentStoreReferences", n = "cursor-agent-exec.resolveAgentStoreScopePaths", s = "cursor-agent-exec.syncAgentStorePath", o = "cursor-agent-exec.refreshAgentStorePeerPaths", i = "cursor-agent-exec.getMountedAgentStores", a = "cursor-agent-exec.getAgentStoreSkillRoots", c = "cursor-agent-exec.getAgentStoreSkillTargetDirs", l = "cursor-agent-exec.refreshUserAgentStoreSkillsSyncSetting", u = "cursor.skillStore.agentStoreSkillTargetDirsChanged", d = "cursor-agent-exec.applySubagentAgentStoreMounts", p = "cursor-agent-exec.clearSubagentAgentStoreMounts", m = "cursor-agent-exec.flushAgentStoreForSubagent";
    var h = __webpack_require__(98875), f = __webpack_require__(33002), g = __webpack_require__(37949), y = __webpack_require__(76849), w = __webpack_require__(31421), v = __webpack_require__(76760), _ = __webpack_require__(10493), b = __webpack_require__(95339);
    const S = { BadConfigFile: "BadConfigFile", AuthenticationFailed: "AuthenticationFailed", NoUserNameConfigured: "NoUserNameConfigured", NoUserEmailConfigured: "NoUserEmailConfigured", NoRemoteRepositorySpecified: "NoRemoteRepositorySpecified", NotAGitRepository: "NotAGitRepository", NotAtRepositoryRoot: "NotAtRepositoryRoot", Conflict: "Conflict", StashConflict: "StashConflict", UnmergedChanges: "UnmergedChanges", PushRejected: "PushRejected", ForcePushWithLeaseRejected: "ForcePushWithLeaseRejected", ForcePushWithLeaseIfIncludesRejected: "ForcePushWithLeaseIfIncludesRejected", RemoteConnectionError: "RemoteConnectionError", DirtyWorkTree: "DirtyWorkTree", CantOpenResource: "CantOpenResource", GitNotFound: "GitNotFound", CantCreatePipe: "CantCreatePipe", PermissionDenied: "PermissionDenied", CantAccessRemote: "CantAccessRemote", RepositoryNotFound: "RepositoryNotFound", RepositoryIsLocked: "RepositoryIsLocked", BranchNotFullyMerged: "BranchNotFullyMerged", NoRemoteReference: "NoRemoteReference", InvalidBranchName: "InvalidBranchName", BranchAlreadyExists: "BranchAlreadyExists", NoLocalChanges: "NoLocalChanges", NoStashFound: "NoStashFound", LocalChangesOverwritten: "LocalChangesOverwritten", NoUpstreamBranch: "NoUpstreamBranch", IsInSubmodule: "IsInSubmodule", WrongCase: "WrongCase", CantLockRef: "CantLockRef", CantRebaseMultipleBranches: "CantRebaseMultipleBranches", PatchDoesNotApply: "PatchDoesNotApply", NoPathFound: "NoPathFound", UnknownPath: "UnknownPath", EmptyCommitMessage: "EmptyCommitMessage", BranchFastForwardRejected: "BranchFastForwardRejected", BranchNotYetBorn: "BranchNotYetBorn", TagConflict: "TagConflict", CherryPickEmpty: "CherryPickEmpty", CherryPickConflict: "CherryPickConflict", WorktreeContainsChanges: "WorktreeContainsChanges", WorktreeAlreadyExists: "WorktreeAlreadyExists", WorktreeBranchAlreadyUsed: "WorktreeBranchAlreadyUsed" };
    class k extends Error {
      constructor(e2) {
        super(e2.error?.message || e2.message || "Git error"), this.error = e2.error, this.stdout = e2.stdout, this.stderr = e2.stderr, this.exitCode = e2.exitCode, this.gitErrorCode = e2.gitErrorCode, this.gitCommand = e2.gitCommand, this.gitArgs = e2.gitArgs;
      }
      toString() {
        let e2 = this.message + " " + JSON.stringify({ exitCode: this.exitCode, gitErrorCode: this.gitErrorCode, gitCommand: this.gitCommand, stdout: this.stdout, stderr: this.stderr }, null, 2);
        return this.error && (e2 += this.error.stack), (0, b.ix)(e2);
      }
    }
    function x(e2) {
      return (t2) => {
        /ENOENT/.test(t2.message) && (t2 = new k({ error: t2, message: "Failed to execute git (ENOENT)", gitErrorCode: S.NotAGitRepository })), e2(t2);
      };
    }
    var E = __webpack_require__(44016);
    const I = -86, T = ["/usr/bin/git", "/opt/homebrew/bin/git"];
    function C(e2) {
      return new Promise((t2, r2) => {
        let n2;
        try {
          n2 = w.spawn(e2, ["--version"]);
        } catch (t3) {
          return void r2(new Error((function(e3, t4) {
            const r3 = t4?.errno;
            return "darwin" === process.platform && r3 === I ? `"${e3}" cannot run on this CPU architecture (EBADARCH). It is likely an Intel-only binary and Rosetta is not installed.` : `Executing "${e3} --version" failed: ${t4 instanceof Error ? t4.message : String(t4)}`;
          })(e2, t3)));
        }
        const s2 = [];
        n2.stdout.on("data", (e3) => s2.push(e3)), n2.on("error", x(r2)), n2.on("close", (n3, o2) => 0 !== n3 ? r2(new Error(`Executing "${e2} --version" failed with code ${n3}, signal ${o2}`)) : t2({ path: e2, version: (0, E.ot)(Buffer.concat(s2).toString("utf8").trim()) }));
      });
    }
    function P(e2, t2) {
      return t2(e2) ? C(e2) : Promise.reject(new Error(`Path "${e2}" is invalid.`));
    }
    async function A(e2, t2) {
      if ("/usr/bin/git" === e2) {
        const { error: e3 } = await new Promise((e4) => {
          w.exec("xcode-select -p", (t3, r2) => e4({ error: t3, stdout: r2.toString() }));
        });
        if (e3 && 2 === e3.code) throw new Error('Executing "xcode-select -p" failed with error code 2.');
      }
      return P(e2, t2);
    }
    async function R(e2, t2) {
      const { error: r2, stdout: n2 } = await new Promise((e3) => {
        w.exec("which git", (t3, r3) => e3({ error: t3, stdout: r3.toString() }));
      });
      if (r2) throw new Error(`Executing "which git" failed: ${r2.message}`);
      const s2 = n2.trim();
      try {
        return await A(s2, e2);
      } catch (r3) {
        t2?.warn(`Unable to use git from the PATH: "${s2}". Error: ${r3.message}. Trying well-known native git installs.`);
        for (const r4 of T) if (r4 !== s2) try {
          const n3 = await A(r4, e2);
          return t2?.info(`Using git from "${n3.path}" instead of "${s2}".`), n3;
        } catch (e3) {
          t2?.info(`Unable to use git from "${r4}". Error: ${e3.message}`);
        }
        throw r3;
      }
    }
    function M(e2, t2) {
      return e2 ? P(v.join(e2, "Git", "cmd", "git.exe"), t2) : Promise.reject("Not found");
    }
    async function J(e2) {
      return M(process.env.ProgramW6432, e2).then(void 0, () => M(process.env["ProgramFiles(x86)"], e2)).then(void 0, () => M(process.env.ProgramFiles, e2)).then(void 0, () => M(v.join(process.env.LocalAppData, "Programs"), e2)).then(void 0, () => (async function(e3) {
        return P(await _("git.exe"), e3);
      })(e2));
    }
    async function O(e2) {
      return (async function(e3, t2, r2) {
        for (const n3 of e3) try {
          return await P(n3, t2);
        } catch (e4) {
          r2?.info(`Unable to find git on the PATH: "${n3}". Error: ${e4.message}`);
        }
        let n2;
        try {
          switch (process.platform) {
            case "darwin":
              return await R(t2, r2);
            case "win32":
              return await J(t2);
            default:
              return await P(await _("git"), t2);
          }
        } catch (e4) {
          n2 = e4?.message ?? String(e4), r2?.warn(`Unable to find git. Error: ${n2}`);
        }
        throw new Error(n2 ? `Git installation not found. ${n2}` : "Git installation not found.");
      })([], () => true, e2);
    }
    var B = __webpack_require__(78474), D = __webpack_require__(73136), q = __webpack_require__(66058), N = __webpack_require__(30913);
    class F extends Error {
      constructor() {
        super("Operation cancelled"), this.name = "CancelledError";
      }
    }
    class U {
      get onOutput() {
        return this._onOutput;
      }
      constructor(e2) {
        this._onOutput = new B.EventEmitter(), this.path = e2.gitPath, this.env = e2.env || {}, this.repoConfigExecution = e2.repoConfigExecution ?? "block", e2.onLog && this._onOutput.on("log", e2.onLog);
      }
      async exec(e2, t2, r2 = {}) {
        const n2 = { cwd: e2, ...r2 };
        return await this._exec(t2, n2);
      }
      async exec2(e2, t2 = {}) {
        return await this._exec(e2, t2);
      }
      stream(e2, t2, r2 = {}) {
        const n2 = { cwd: e2, ...r2 }, s2 = this.spawn(t2, n2);
        if (false !== r2.log) {
          const e3 = Date.now();
          s2.on("exit", () => {
            this.log(`> ${(0, b.Fh)(t2)} [${Date.now() - e3}ms]${s2.killed ? " (cancelled)" : ""}${this.policyLogSuffix()}
`);
          });
        }
        return s2;
      }
      policyLogSuffix() {
        return "allow-hooks" === this.repoConfigExecution ? " (hooks)" : "";
      }
      async _exec(e2, t2 = {}) {
        const r2 = this.spawn(e2, t2);
        t2.onSpawn?.(r2), t2.input && r2.stdin.end(t2.input, "utf8");
        const n2 = Date.now();
        let s2;
        try {
          s2 = await (async function(e3, t3) {
            if (!e3.stdout || !e3.stderr) throw new k({ message: "Failed to get stdout or stderr from git process." });
            if (t3?.aborted) throw new F();
            const r3 = [], n3 = (e4, t4, n4) => {
              e4.once(t4, n4), r3.push((0, E.s)(() => e4.removeListener(t4, n4)));
            }, s3 = (e4, t4, n4) => {
              e4.on(t4, n4), r3.push((0, E.s)(() => e4.removeListener(t4, n4)));
            };
            let o3 = Promise.all([new Promise((t4, r4) => {
              n3(e3, "error", x(r4)), n3(e3, "exit", t4);
            }), new Promise((t4) => {
              const r4 = [];
              s3(e3.stdout, "data", (e4) => r4.push(e4)), n3(e3.stdout, "close", () => t4(Buffer.concat(r4)));
            }), new Promise((t4) => {
              const r4 = [];
              s3(e3.stderr, "data", (e4) => r4.push(e4)), n3(e3.stderr, "close", () => t4(Buffer.concat(r4).toString("utf8")));
            })]);
            if (t3) {
              const n4 = new Promise((n5, s4) => {
                const o4 = () => {
                  try {
                    e3.kill();
                  } catch {
                  }
                  s4(new F());
                };
                t3.aborted ? o4() : (t3.addEventListener("abort", o4, { once: true }), r3.push((0, E.s)(() => t3.removeEventListener("abort", o4))));
              });
              o3 = Promise.race([o3, n4]);
            }
            try {
              const [e4, t4, r4] = await o3;
              return { exitCode: e4, stdout: t4, stderr: r4 };
            } finally {
              (0, E.AS)(r3);
            }
          })(r2, t2.signal);
        } catch (t3) {
          throw t3 instanceof F && this.log(`> ${(0, b.Fh)(e2)} [${Date.now() - n2}ms] (cancelled)
`), t3;
        }
        false !== t2.log && (this.log(`> ${(0, b.Fh)(e2)} [${Date.now() - n2}ms] ${t2.caller ? `(${t2.caller})` : ""}${this.policyLogSuffix()}
`), s2.stderr.length > 0 && this.log(`${(0, b.ix)(s2.stderr)}
`));
        const o2 = { exitCode: s2.exitCode, stdout: s2.stdout.toString("utf8"), stderr: s2.stderr };
        return s2.exitCode ? Promise.reject(new k({ message: "Failed to execute git", stdout: o2.stdout, stderr: o2.stderr, exitCode: o2.exitCode, gitErrorCode: (i2 = o2.stderr, /Another git process seems to be running in this repository|If no other git process is currently running/.test(i2) ? S.RepositoryIsLocked : /Authentication failed/i.test(i2) ? S.AuthenticationFailed : /Not a git repository/i.test(i2) ? S.NotAGitRepository : /bad config file/.test(i2) ? S.BadConfigFile : /cannot make pipe for command substitution|cannot create standard input pipe/.test(i2) ? S.CantCreatePipe : /Repository not found/.test(i2) ? S.RepositoryNotFound : /unable to access/.test(i2) ? S.CantAccessRemote : /branch '.+' is not fully merged/.test(i2) ? S.BranchNotFullyMerged : /Couldn't find remote ref/.test(i2) ? S.NoRemoteReference : /A branch named '.+' already exists/.test(i2) ? S.BranchAlreadyExists : /'.+' is not a valid branch name/.test(i2) ? S.InvalidBranchName : /Please,? commit your changes or stash them/.test(i2) ? S.DirtyWorkTree : /contains modified or untracked files|use --force to delete it/.test(i2) ? S.WorktreeContainsChanges : /fatal: '[^']+' already exists/.test(i2) ? S.WorktreeAlreadyExists : /is already used by worktree at/.test(i2) ? S.WorktreeBranchAlreadyUsed : void 0), gitCommand: (0, q.s7)(e2) ?? e2[0], gitArgs: e2 })) : o2;
        var i2;
      }
      spawn(e2, t2 = {}) {
        if (!this.path) throw new Error("git could not be found in the system.");
        const r2 = { ...t2 };
        r2.stdio || t2.input || (r2.stdio = ["ignore", null, null]), r2.env = (0, N.J)({ command: (0, q.s7)(e2), spawnerEnv: this.env, optionsEnv: t2.env, repoConfigExecution: this.repoConfigExecution });
        const n2 = this.getCwd(t2);
        return n2 && (r2.cwd = (0, E.vn)(n2)), w.spawn(this.path, e2, r2);
      }
      getCwd(e2) {
        const t2 = e2.cwd;
        return void 0 === t2 || "string" == typeof t2 ? t2 : t2 instanceof URL && "file:" === t2.protocol ? (0, D.fileURLToPath)(t2) : void 0;
      }
      log(e2) {
        this._onOutput.emit("log", e2);
      }
    }
    var L = __webpack_require__(62249), $ = __webpack_require__(13807), j = __webpack_require__(28242), G = __webpack_require__(25925), z = __webpack_require__(68388), W = __webpack_require__(51455);
    const H = require("vscode"), K = "canvas", V = ["EEXIST", "ENOTEMPTY", "ENOENT"];
    const Y = /* @__PURE__ */ new Map();
    async function Q(e2) {
      const t2 = e2.skillsDir ?? (0, L.T2h)(), r2 = (function(e3 = (0, L.T2h)()) {
        return (0, v.join)(e3, K, "sdk");
      })(t2), n2 = Y.get(r2);
      if (void 0 !== n2) return n2;
      const s2 = (async function(e3, t3, r3) {
        const n3 = (function(e4) {
          return (0, v.join)(e4, "dist", "agent-sdk", "cursor", "canvas");
        })(e3), s3 = (0, v.join)(t3, K);
        try {
          await (0, W.access)(n3);
        } catch (e4) {
          if ("ENOENT" === e4.code) return false;
          throw e4;
        }
        try {
          await (0, W.access)(s3);
        } catch (e4) {
          if ("ENOENT" === e4.code) return false;
          throw e4;
        }
        return await (0, W.mkdir)(s3, { recursive: true }), await (0, W.rm)(r3, { recursive: true, force: true }), await (0, W.cp)(n3, r3, { force: true, recursive: true }), true;
      })(e2.extensionPath, t2, r2);
      Y.set(r2, s2);
      try {
        return await s2;
      } finally {
        Y.delete(r2);
      }
    }
    const X = { symbol: /* @__PURE__ */ Symbol.for("cursor.agentStreamMetadata"), defaultValue: void 0 };
    var Z = ((e2) => (e2.FREE = "free", e2.PRO = "pro", e2.PRO_PLUS = "pro_plus", e2.ENTERPRISE = "enterprise", e2.FREE_TRIAL = "free_trial", e2.ULTRA = "ultra", e2.PRO_STUDENT = "pro_student", e2.EXPRESS = "express", e2.PREMIUM = "premium", e2.PLUS = "plus", e2.SUPER = "super", e2.UNIFIED_ULTRA = "unified_ultra", e2))(Z || {});
    new Set(Object.values(Z));
    const ee = (0, g.h)("cursor-agent-exec"), te = X;
    var re;
    function ne(e2) {
      const t2 = re[e2];
      return "string" != typeof t2 ? e2.toString() : t2[0].toLowerCase() + t2.substring(1).replace(/[A-Z]/g, (e3) => "_" + e3.toLowerCase());
    }
    !(function(e2) {
      e2[e2.Canceled = 1] = "Canceled", e2[e2.Unknown = 2] = "Unknown", e2[e2.InvalidArgument = 3] = "InvalidArgument", e2[e2.DeadlineExceeded = 4] = "DeadlineExceeded", e2[e2.NotFound = 5] = "NotFound", e2[e2.AlreadyExists = 6] = "AlreadyExists", e2[e2.PermissionDenied = 7] = "PermissionDenied", e2[e2.ResourceExhausted = 8] = "ResourceExhausted", e2[e2.FailedPrecondition = 9] = "FailedPrecondition", e2[e2.Aborted = 10] = "Aborted", e2[e2.OutOfRange = 11] = "OutOfRange", e2[e2.Unimplemented = 12] = "Unimplemented", e2[e2.Internal = 13] = "Internal", e2[e2.Unavailable = 14] = "Unavailable", e2[e2.DataLoss = 15] = "DataLoss", e2[e2.Unauthenticated = 16] = "Unauthenticated";
    })(re || (re = {}));
    class se extends Error {
      constructor(e2, t2 = re.Unknown, r2, n2, s2) {
        super((function(e3, t3) {
          return e3.length ? `[${ne(t3)}] ${e3}` : `[${ne(t3)}]`;
        })(e2, t2)), this.name = "ConnectError", Object.setPrototypeOf(this, new.target.prototype), this.rawMessage = e2, this.code = t2, this.metadata = new Headers(null != r2 ? r2 : {}), this.details = null != n2 ? n2 : [], this.cause = s2;
      }
      static from(e2, t2 = re.Unknown) {
        return e2 instanceof se ? e2 : e2 instanceof Error ? "AbortError" == e2.name ? new se(e2.message, re.Canceled) : new se(e2.message, t2, void 0, void 0, e2) : new se(String(e2), t2, void 0, void 0, e2);
      }
      static [Symbol.hasInstance](e2) {
        return e2 instanceof Error && (Object.getPrototypeOf(e2) === se.prototype || "ConnectError" === e2.name && "code" in e2 && "number" == typeof e2.code && "metadata" in e2 && "details" in e2 && Array.isArray(e2.details) && "rawMessage" in e2 && "string" == typeof e2.rawMessage && "cause" in e2);
      }
      findDetails(e2) {
        const t2 = "typeName" in e2 ? { findMessage: (t3) => t3 === e2.typeName ? e2 : void 0 } : e2, r2 = [];
        for (const e3 of this.details) {
          if ("getType" in e3) {
            t2.findMessage(e3.getType().typeName) && r2.push(e3);
            continue;
          }
          const n2 = t2.findMessage(e3.type);
          if (n2) try {
            r2.push(n2.fromBinary(e3.value));
          } catch (e4) {
          }
        }
        return r2;
      }
    }
    function oe(e2) {
      if (e2 instanceof se) return e2.code === re.Canceled;
      if (!(e2 instanceof Error)) return false;
      if ("Canceled" === e2.name && "Canceled" === e2.message) return true;
      if ("ConnectError" !== e2.name) return false;
      const t2 = e2.code;
      return t2 === re.Canceled || "Canceled" === t2 || ("Canceled" === e2.message || e2.message.startsWith("Canceled:"));
    }
    const ie = (0, $.v5)("vscode.agent_exec.canvas_sdk_mirror_duration_ms", { description: "Time to sync the canvas SDK mirror to the builtin skills directory" }), ae = (0, $.Pu)("vscode.agent_exec.canvas_sdk_mirror_failures", { description: "Number of canvas SDK mirror sync failures" }), ce = 18e5, le = 4e3, ue = "anysphere.cursor-agent-exec", de = "agent_skills_batch_update";
    function pe(e2) {
      return { scopedTo: e2.scopedTo, disabledEnvironments: e2.disabledEnvironments, disableModelInvocation: e2.disableModelInvocation, description: e2.description, environments: e2.environments, fullPath: e2.fullPath, gitRemoteOrigin: e2.gitRemoteOrigin, globs: e2.globs, marketplace: e2.marketplace, marketplaceId: e2.marketplaceId, parseError: e2.parseError, plugin: e2.plugin, pluginId: e2.pluginId, argumentHint: e2.argumentHint, disableUserInvocation: e2.disableUserInvocation };
    }
    function me(e2, t2) {
      const r2 = (e3, t3, r3) => {
        var n3;
        oe(r3) || (n3 = r3) instanceof Error && n3.message.includes("No Connect transport provider registered") ? ee.debug(e3, t3, { error: String(r3) }) : ee.warn(e3, t3, { error: String(r3) });
      }, n2 = async (e3) => {
        const t3 = H.extensions.getExtension(ue)?.extensionPath;
        if (!t3) return void ee.warn(e3, "Skipping canvas SDK mirror: extension path unavailable");
        const r3 = Date.now();
        try {
          await Q({ extensionPath: t3 });
        } catch (t4) {
          !(function(e4) {
            const t5 = e4?.code;
            if ("string" == typeof t5 && V.includes(t5)) return true;
            const r4 = e4 instanceof Error ? e4.message : "string" == typeof e4 ? e4 : "";
            return V.some((e5) => r4.includes(e5));
          })(t4) ? (ae.increment(e3), ee.warn(e3, "Canvas SDK mirror failed", { error: String(t4) })) : ee.debug(e3, "Canvas SDK mirror skipped: raced a concurrent sync", { error: String(t4) });
        } finally {
          ie.record(e3, Date.now() - r3);
        }
      }, s2 = (function(e3) {
        const t3 = e3.setTimeoutFn ?? setTimeout, r3 = e3.clearTimeoutFn ?? clearTimeout;
        let n3, s3 = false;
        const o3 = () => {
          void 0 !== n3 && (r3(n3), n3 = void 0);
        };
        return { schedule() {
          s3 || (o3(), n3 = t3(() => {
            n3 = void 0, e3.run().catch(() => {
            });
          }, e3.intervalMs));
        }, dispose() {
          s3 = true, o3();
        } };
      })({ intervalMs: ce, run: async () => {
        try {
          await o2();
        } catch (t3) {
          r2(e2, "Failed to refresh Cursor-managed skills on schedule", t3);
        }
      } });
      t2.push(() => s2.dispose());
      const o2 = async () => {
        try {
          if (!H.cursor.getCursorAuthToken()) return void await n2(e2);
          const t3 = await H.cursor.getManagedSkills();
          await (async (e3, t4) => {
            await (0, L.Rhp)(e3, t4), await n2(e3);
          })(e2, { managedSkills: t3.skills ?? [] });
        } catch (t3) {
          r2(e2, "Failed to sync managed skills from dashboard", t3), await n2(e2);
        } finally {
          s2.schedule();
        }
      }, i2 = o2().catch((t3) => {
        r2(e2, "Failed to sync Cursor-managed skills", t3);
      }), a2 = H.cursor.onDidChangeCursorAuthToken(() => {
        o2().catch((t3) => {
          r2(e2, "Failed to refresh Cursor-managed skills after auth change", t3);
        });
      });
      return t2.push(() => a2.dispose()), { initialBuiltinSkillsSyncPromise: i2 };
    }
    function he(e2) {
      const { mergedAgentSkillsService: t2, serviceCtx: r2, deactivateTasks: n2 } = e2;
      let s2, o2 = Promise.resolve();
      const i2 = (e3) => {
        const t3 = o2.then(async () => {
          const t4 = (function(e4) {
            return e4.map((e5) => JSON.stringify(pe(e5))).sort().join("\n");
          })(e3);
          if (t4 === s2) return;
          const r3 = e3.map(pe);
          s2 = void 0;
          await Promise.resolve(H.cursor.checkFeatureGate(de)).catch(() => false) ? await H.cursor.updateAgentSkillsInBatches(r3) : await H.cursor.updateAgentSkills(r3), s2 = t4;
        });
        return o2 = t3.catch(() => {
        }), t3;
      };
      let a2;
      t2.getAllAgentSkills(r2).then((e3) => {
        i2(e3);
      });
      const c2 = t2.onDidChangeSkills(() => {
        void 0 !== a2 && clearTimeout(a2), a2 = setTimeout(() => {
          a2 = void 0, (async () => {
            const e3 = await t2.getAllAgentSkills(r2);
            await i2(e3);
          })().catch((e3) => {
            ee.warn(r2, "mergedAgentSkillsService.onDidChangeSkills failed", { error: String(e3) });
          });
        }, le);
      });
      n2.push(c2), n2.push(() => {
        void 0 !== a2 && clearTimeout(a2);
      });
    }
    var fe = __webpack_require__(48161), ge = __webpack_require__(4008);
    async function ye(e2) {
      const t2 = H.Uri.file(e2).fsPath, r2 = t2.endsWith(v.sep) ? t2 : `${t2}${v.sep}`, n2 = (await Promise.all(H.workspace.textDocuments.filter((e3) => e3.isDirty && "file" === e3.uri.scheme && e3.uri.fsPath.startsWith(r2)).map(async (e3) => ({ path: e3.uri.fsPath, saved: await e3.save() })))).filter(({ saved: e3 }) => !e3).map(({ path: e3 }) => e3);
      if (n2.length > 0) throw new Error(`Unsaved edits could not be written to disk (${n2.join(", ")}).`);
    }
    const we = 5, ve = 500;
    function _e(e2) {
      return "cursor-first-party" === e2.identifier.source || "cursor-third-party" === e2.identifier.source ? e2.identifier.sourceInfo : void 0;
    }
    async function be(e2, t2) {
      return (await e2.getAllEnabledPlugins()).find((e3) => _e(e3)?.pluginDbId === t2);
    }
    function Se(e2) {
      return new Promise((t2) => setTimeout(t2, e2));
    }
    async function ke(e2, t2, r2, n2) {
      for (let s2 = 0; s2 < we; s2++) {
        let o2;
        try {
          o2 = await e2.reloadPlugin({ name: t2.pluginName, pluginDbId: t2.pluginId });
        } catch (e3) {
          return void n2(e3);
        }
        if (r2(o2)) return o2;
        s2 < we - 1 && await Se(ve);
      }
    }
    function xe(e2, t2) {
      return void 0 !== e2 && void 0 === e2.loadError && _e(e2)?.version === t2;
    }
    class Ee extends Error {
      constructor(e2) {
        super(`Refusing to remove "${e2}": it is not a skill folder under the user's .cursor/skills`), this.skillDir = e2, this.name = "PublishSkillGuardViolationError";
      }
    }
    function Ie(e2) {
      return e2.replace(/\\/g, "/");
    }
    function Te(e2) {
      const t2 = (0, v.resolve)((0, v.join)(e2.userHomeDirectory, ".cursor", "skills")), r2 = (0, v.relative)(t2, (0, v.resolve)(e2.skillDir));
      if ("" !== r2 && !(0, v.isAbsolute)(r2) && ".." !== r2.split(v.sep)[0]) return Ie(r2);
    }
    async function Ce(e2, t2) {
      const { pluginsService: r2 } = e2, n2 = (0, v.dirname)(t2.skillFilePath), s2 = Te({ skillDir: n2, userHomeDirectory: e2.userHomeDirectory });
      if (void 0 === s2) throw new Ee(n2);
      const o2 = await ke(r2, { pluginName: t2.pluginName, pluginId: t2.pluginId }, (e3) => (function(e4, t3) {
        if (void 0 === e4 || !xe(e4, t3.commitSha)) return false;
        const r3 = `skills/${t3.skillPath}/SKILL.md`;
        return e4.skills.some((e5) => {
          const t4 = Ie(e5.path);
          return t4 === r3 || t4.endsWith(`/${r3}`);
        });
      })(e3, { commitSha: t2.commitSha, skillPath: s2 }), (e3) => ee.warn((0, f.q6)(), "Publish skill: plugin reload failed", { error: String(e3) }));
      if (void 0 === o2) return { confirmed: false, deleted: false };
      if (!await (async function(e3) {
        try {
          return await (0, W.stat)(e3), true;
        } catch {
          return false;
        }
      })(t2.skillFilePath)) return ee.warn((0, f.q6)(), "Publish skill: local skill vanished before cleanup", { skillDir: n2 }), { confirmed: true, deleted: false };
      try {
        return await e2.deleteDirectoryToTrash(n2), { confirmed: true, deleted: true, filesMove: { previousDir: n2, nextDir: (0, v.join)(o2.installPath, "skills", s2) } };
      } catch (e3) {
        return ee.warn((0, f.q6)(), "Publish skill: confirmed plugin loaded but failed to trash local skill", { skillDir: n2, error: String(e3) }), { confirmed: true, deleted: false };
      }
    }
    const Pe = "cursor.publishSkill.packSkillPlugin", Ae = "cursor.publishSkill.reloadConfirmAndDeleteLocalSkill";
    async function Re(e2) {
      await H.workspace.fs.delete(H.Uri.file(e2), { recursive: true, useTrash: true });
    }
    function Me(e2, t2) {
      e2.subscriptions.push(H.commands.registerCommand(Pe, (e3) => {
        if (void 0 === e3 || "string" != typeof e3.skillFilePath || "" === e3.skillFilePath.trim() || "string" != typeof e3.pluginName || "" === e3.pluginName.trim()) throw new Error("packSkillPlugin requires a non-empty skillFilePath and pluginName");
        return (async function(e4) {
          const t3 = (0, v.dirname)(e4.skillFilePath), r2 = Te({ skillDir: t3, userHomeDirectory: (0, fe.homedir)() });
          if (void 0 === r2) throw new Error(`Only skills under ~/.cursor/skills can be published; "${t3}" is not one.`);
          await ye(t3);
          const n2 = await (0, W.mkdtemp)((0, v.join)((0, fe.tmpdir)(), "publish-skill-"));
          try {
            const s2 = await (0, ge.ALO)({ skills: [{ dir: t3, relativePath: r2 }], targetDir: n2, pluginName: e4.pluginName }), o2 = await (0, W.readFile)((0, v.join)(s2, "plugin.json"), "utf-8"), i2 = JSON.parse(o2), a2 = "string" == typeof i2.name && "" !== i2.name.trim() ? i2.name : e4.pluginName;
            return { tarGzBase64: (await (0, ge.Jwk)(s2)).toString("base64"), pluginName: a2 };
          } finally {
            await (0, W.rm)(n2, { recursive: true, force: true }).catch(() => {
            });
          }
        })(e3);
      }), H.commands.registerCommand(Ae, async (e3) => {
        if (void 0 === e3 || "string" != typeof e3.skillFilePath || "" === e3.skillFilePath.trim() || "string" != typeof e3.pluginName || "" === e3.pluginName.trim() || "string" != typeof e3.pluginId || "" === e3.pluginId.trim() || "string" != typeof e3.commitSha || "" === e3.commitSha.trim()) throw new Error("reloadConfirmAndDeleteLocalSkill requires skillFilePath, pluginName, pluginId, and commitSha");
        let r2;
        try {
          r2 = await t2;
        } catch {
          return { confirmed: false, deleted: false };
        }
        try {
          return await Ce(r2, e3);
        } catch (e4) {
          if (e4 instanceof Ee) return { confirmed: false, deleted: false, guardViolation: true };
          throw e4;
        }
      }));
    }
    async function Je(e2, t2) {
      let r2;
      try {
        r2 = await be(e2.pluginsService, t2.pluginId);
      } catch (e3) {
        return Oe(`Could not read the installed plugins: ${De(e3)}`, t2);
      }
      if (void 0 === r2) return Oe("The published plugin is not installed locally, so its skill files cannot be restored.", t2);
      const n2 = (function(e3) {
        const t3 = e3.skills.map((e4) => (0, v.dirname)(e4.path)).filter((e4) => "" !== e4 && "." !== e4 && ".." !== e4).map((t4) => (0, v.join)(e3.installPath, t4));
        return [...new Set(t3)];
      })(r2);
      if (0 === n2.length) return Oe("The published plugin has no skill folder to restore.", t2);
      const s2 = (0, v.join)(r2.installPath, "skills"), o2 = (0, v.join)(e2.userHomeDirectory, ".cursor", "skills");
      try {
        return { restored: true, skillPaths: await (0, ge.V3H)({ skillDirs: n2, pluginSkillsRoot: s2, skillsRoot: o2 }), filesMove: { previousDir: s2, nextDir: o2 } };
      } catch (e3) {
        return Oe(De(e3), t2);
      }
    }
    function Oe(e2, t2) {
      return ee.warn((0, f.q6)(), "Unpublish skill: restore failed", { pluginId: t2.pluginId, error: e2 }), { restored: false, skillPaths: [], error: e2 };
    }
    function Be(e2, t2) {
      return ee.warn((0, f.q6)(), "Unpublish skill: cache removal skipped", { pluginId: t2.pluginId, error: e2 }), { removed: false };
    }
    function De(e2) {
      return e2 instanceof Error ? e2.message : String(e2);
    }
    const qe = "cursor.unpublishSkill.restoreLocalSkill", Ne = "cursor.unpublishSkill.removePluginCache";
    function Fe(e2) {
      const t2 = e2;
      if (void 0 === t2 || "string" != typeof t2.pluginId || "" === t2.pluginId.trim()) throw new Error("unpublishSkill commands require a non-empty pluginId");
      return { pluginId: t2.pluginId };
    }
    function Ue(e2, t2) {
      e2.subscriptions.push(H.commands.registerCommand(qe, async (e3) => {
        const r2 = Fe(e3);
        let n2;
        try {
          n2 = await t2;
        } catch {
          return { restored: false, skillPaths: [], error: "The plugin subsystem is unavailable, so the skill files cannot be restored." };
        }
        return Je(n2, r2);
      }), H.commands.registerCommand(Ne, async (e3) => {
        const r2 = Fe(e3);
        let n2;
        try {
          n2 = await t2;
        } catch {
          return { removed: false };
        }
        return (async function(e4, t3) {
          let r3;
          try {
            const n4 = await be(e4.pluginsService, t3.pluginId);
            r3 = void 0 === n4 ? void 0 : _e(n4);
          } catch (e5) {
            return Be(De(e5), t3);
          }
          const n3 = r3?.marketplace;
          if (void 0 === r3 || void 0 === n3) return Be("plugin is no longer loaded from a marketplace", t3);
          try {
            return await e4.cacheManager.removeAllVersions({ marketplaceSlug: n3, pluginId: r3.name }), await e4.pluginsService.reload(), { removed: true };
          } catch (e5) {
            return Be(De(e5), t3);
          }
        })(n2, r2);
      }));
    }
    async function Le(e2, t2) {
      const r2 = await be(e2.pluginsService, t2.pluginId);
      if (void 0 === r2) throw new Error("The published plugin is not installed locally, so its edits cannot be synced.");
      const n2 = _e(r2)?.name;
      if (void 0 === n2 || "" === n2) throw new Error("The installed plugin has no marketplace name to sync to.");
      if ((0, ge.UDB)(n2) !== n2) throw new Error(`Cannot sync "${n2}": its published name is not in the form a plugin manifest can carry.`);
      const s2 = (function(e3) {
        const t3 = (0, v.join)(e3.installPath, "skills"), r3 = /* @__PURE__ */ new Map();
        for (const n3 of e3.skills) {
          const s3 = (0, v.join)(e3.installPath, (0, v.dirname)(n3.path)), o3 = (0, v.relative)(t3, s3);
          "" === o3 || o3.startsWith("..") || (0, v.join)(t3, o3) !== s3 || r3.set(s3, { dir: s3, relativePath: o3 });
        }
        return [...r3.values()];
      })(r2);
      if (0 === s2.length) throw new Error("The published plugin has no skill folder to sync.");
      await e2.saveDirtyDocumentsUnder(r2.installPath);
      const o2 = await (0, W.mkdtemp)((0, v.join)((0, fe.tmpdir)(), "resync-skill-"));
      try {
        const e3 = await (0, ge.ALO)({ skills: s2, targetDir: o2, pluginName: n2, displayName: t2.displayName });
        return { tarGzBase64: (await (0, ge.Jwk)(e3)).toString("base64"), pluginName: n2, installPath: r2.installPath };
      } finally {
        await (0, W.rm)(o2, { recursive: true, force: true }).catch(() => {
        });
      }
    }
    const $e = "cursor.resyncSkill.packInstalledSkillPlugin", je = "cursor.resyncSkill.reloadAndConfirmResync";
    function Ge(e2, t2) {
      e2.subscriptions.push(H.commands.registerCommand($e, async (e3) => {
        const r2 = (function(e4) {
          const t3 = e4;
          if (void 0 === t3 || "string" != typeof t3.pluginId || "" === t3.pluginId.trim() || "string" != typeof t3.displayName || "" === t3.displayName.trim()) throw new Error("packInstalledSkillPlugin requires a non-empty pluginId and displayName");
          return { pluginId: t3.pluginId, displayName: t3.displayName };
        })(e3);
        return Le(await t2, r2);
      }), H.commands.registerCommand(je, async (e3) => {
        const r2 = (function(e4) {
          const t3 = e4;
          if (void 0 === t3 || "string" != typeof t3.pluginName || "" === t3.pluginName.trim() || "string" != typeof t3.pluginId || "" === t3.pluginId.trim() || "string" != typeof t3.commitSha || "" === t3.commitSha.trim()) throw new Error("reloadAndConfirmResync requires pluginName, pluginId, and commitSha");
          return { pluginName: t3.pluginName, pluginId: t3.pluginId, commitSha: t3.commitSha };
        })(e3);
        let n2;
        try {
          n2 = await t2;
        } catch {
          return { confirmed: false };
        }
        return (async function(e4, t3) {
          const r3 = await ke(e4.pluginsService, { pluginName: t3.pluginName, pluginId: t3.pluginId }, (e5) => xe(e5, t3.commitSha), (e5) => ee.warn((0, f.q6)(), "Resync skill: plugin reload failed", { pluginId: t3.pluginId, error: String(e5) }));
          return void 0 === r3 ? { confirmed: false } : { confirmed: true, installPath: r3.installPath };
        })(n2, r2);
      }));
    }
    const ze = "cursor.installSkills.runSkillsCliAdd", We = /^[A-Za-z0-9@._~:/?=+\\][A-Za-z0-9@._~:/#?=+\\-]*$/, He = /^[A-Za-z0-9._][A-Za-z0-9._-]*$/, Ke = /^[A-Za-z0-9._][A-Za-z0-9._-]*$/, Ve = "skills@1.5.23", Ye = /* @__PURE__ */ new Set(["PATH", "HOME", "USER", "LOGNAME", "SHELL", "TMPDIR", "LANG", "LC_ALL", "LC_CTYPE", "SSH_AUTH_SOCK", "XDG_CACHE_HOME", "XDG_CONFIG_HOME", "XDG_DATA_HOME", "HTTP_PROXY", "HTTPS_PROXY", "NO_PROXY", "http_proxy", "https_proxy", "no_proxy"]), Qe = 3e5, Xe = 65536, Ze = 320, et = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]|(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)|\x1b(?:[ #%()*+\-./]?[a-zA-Z0-9|}~@])/g, tt = /[\r\n│┃└┌├─╭╮╯╰→◇◆■□●○◒◐◓◑▲▼]+/;
    function rt(e2) {
      return /^[A-Za-z0-9-][A-Za-z0-9@.=-]*$/.test(e2) ? e2 : `"${e2.replace(/\\+$/, (e3) => e3 + e3)}"`;
    }
    function nt(e2) {
      return ["npx", ...e2.map(rt)].join(" ");
    }
    function st(e2) {
      const t2 = { NO_COLOR: "1" };
      for (const [r2, n2] of Object.entries(e2)) void 0 !== n2 && (Ye.has(r2) || r2.startsWith("GIT_")) && (t2[r2] = n2);
      return t2;
    }
    async function ot(e2) {
      try {
        const t2 = await (0, W.readdir)(e2, { withFileTypes: true });
        return new Set(t2.filter((e3) => !e3.isFile()).map((e3) => e3.name));
      } catch {
        return /* @__PURE__ */ new Set();
      }
    }
    function it(e2) {
      return new Promise((t2) => {
        const r2 = (0, w.spawn)("npx", e2, { cwd: (0, fe.homedir)(), env: st(process.env), stdio: ["ignore", "pipe", "pipe"], detached: true });
        let n2 = "";
        const s2 = (e3) => {
          n2 = (n2 + e3.toString()).slice(-Xe);
        };
        r2.stdout.on("data", s2), r2.stderr.on("data", s2);
        let o2 = false;
        const i2 = (e3) => {
          o2 || (o2 = true, clearTimeout(a2), t2({ ...e3, output: n2.replace(et, "") }));
        }, a2 = setTimeout(() => {
          !(function(e3) {
            if (void 0 !== e3.pid) try {
              return void process.kill(-e3.pid, "SIGKILL");
            } catch {
            }
            e3.kill("SIGKILL");
          })(r2), i2({ exitCode: void 0, reason: "Timed out after 5 minutes" });
        }, Qe);
        r2.on("error", (t3) => {
          const r3 = "ENOENT" === t3.code;
          i2({ exitCode: void 0, reason: r3 ? `npx was not found. Install Node.js (https://nodejs.org), then run: ${nt(e2)}` : `Could not run npx: ${t3.message}` });
        }), r2.on("close", (e3, t3) => {
          i2(null === e3 ? { exitCode: void 0, reason: `The skills CLI was stopped by ${t3 ?? "a signal"}` } : { exitCode: e3 });
        });
      });
    }
    function at(e2) {
      const t2 = [];
      for (const r3 of e2.split(tt)) {
        const e3 = r3.replace(/\s+/g, " ").trim();
        e3.length > 0 && e3 !== t2[t2.length - 1] && t2.push(e3);
      }
      const r2 = t2.join(" ");
      return r2.length <= Ze ? r2 : r2.slice(-Ze).replace(/^\S+\s+/, "");
    }
    async function ct(e2) {
      const t2 = (function(e3) {
        return ["-y", void 0 === e3.version ? Ve : `skills@${e3.version}`, "add", e3.source, ...e3.skills.flatMap((e4) => ["--skill", e4]), "-g", "-a", "cursor", "-y"];
      })(e2);
      if ("win32" === process.platform) return { ok: false, exitCode: void 0, output: "", errorMessage: `Automatic install isn't supported on Windows yet. Run this in a terminal: ${nt(t2)}`, unsupportedPlatform: true };
      const r2 = (function() {
        const e3 = (0, fe.homedir)();
        return [(0, v.join)(e3, ".agents", "skills"), (0, v.join)(e3, ".cursor", "skills")];
      })(), n2 = await Promise.all(r2.map(ot)), s2 = await it(t2);
      if (0 !== s2.exitCode) return { ok: false, exitCode: s2.exitCode, output: s2.output, errorMessage: void 0 === s2.exitCode ? s2.reason : at(s2.output) || `The skills CLI exited with code ${s2.exitCode}` };
      const o2 = await Promise.all(r2.map(ot)), i2 = /* @__PURE__ */ new Set();
      return o2.forEach((e3, t3) => {
        for (const r3 of e3) n2[t3].has(r3) || i2.add(r3);
      }), { ok: true, installedSkills: [...i2].sort(), output: s2.output };
    }
    function lt(e2) {
      e2.subscriptions.push(H.commands.registerCommand(ze, async (e3) => ((function(e4) {
        if (void 0 === e4 || "string" != typeof e4.source || !We.test(e4.source) || !Array.isArray(e4.skills) || e4.skills.some((e5) => "string" != typeof e5 || !He.test(e5)) || void 0 !== e4.version && ("string" != typeof e4.version || !Ke.test(e4.version))) throw new Error("runSkillsCliAdd requires a source, skill filters, and version made of URL-safe characters");
      })(e3), await ct(e3))));
    }
    var ut = __webpack_require__(83737);
    const dt = /* @__PURE__ */ Symbol.for("anysphere.agent-store-sync.local-subagent-store-mounters.v1");
    function pt() {
      const e2 = Reflect.get(globalThis, dt);
      if (e2 instanceof Set) return e2;
      const t2 = /* @__PURE__ */ new Set();
      return Reflect.set(globalThis, dt, t2), t2;
    }
    var mt = __webpack_require__(52810);
    const ht = "agentStore.skillRoots.v1", ft = 6048e5;
    let gt = Promise.resolve();
    function yt(e2) {
      return Array.isArray(e2) && 2 === e2.length && ("user" === e2[0] || "team" === e2[0]) && "string" == typeof e2[1] && e2[1].length > 0;
    }
    function wt(e2, t2, r2 = Date.now()) {
      if (void 0 === t2.authId) return;
      const n2 = e2.get(ht);
      return !(function(e3) {
        if ("object" != typeof e3 || null === e3) return false;
        const t3 = e3;
        return "string" == typeof t3.authId && ("number" == typeof t3.teamId || null === t3.teamId) && "boolean" == typeof t3.enabled && Array.isArray(t3.mountKeys) && t3.mountKeys.every(yt) && "number" == typeof t3.writtenAt && Number.isFinite(t3.writtenAt);
      })(n2) || n2.authId !== t2.authId || n2.teamId !== (t2.teamId ?? null) || Math.abs(r2 - n2.writtenAt) > ft ? void 0 : { enabled: n2.enabled, mountKeys: n2.mountKeys };
    }
    var vt = __webpack_require__(61933), _t = __webpack_require__(36038), bt = __webpack_require__(8592);
    const St = "aiserver.v1.";
    class kt extends bt.HL {
      static get runtime() {
        return (0, bt.kU)(this, "runtime", _t.proto3);
      }
      static $p() {
        return St;
      }
    }
    var xt = (0, bt.QT)(_t.proto3, St, "UnifyEligibilityReason", [[0, "UNSPECIFIED"], [1, "BLOCKLISTED"], [2, "ENTERPRISE"], [3, "REQUEST_BASED_PRICING"], [4, "OUTSTANDING_INVOICE"], [5, "STRIPE_CREDIT_BALANCE"], [6, "CURSOR_CREDIT_GRANTS"], [7, "UNSAFE_SUBSCRIPTION_STATUS"], [8, "ALIPAY_PAYMENT_METHOD"]], 1);
    class Et extends kt {
      constructor(e2) {
        super(), _t.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Et().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Et().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Et().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return _t.proto3.util.equals(Et, e2, t2);
      }
      static $() {
        return ["IndividualUnifyEligibilitySubject"];
      }
    }
    class It extends kt {
      constructor(e2) {
        super(), this.subject = { case: void 0 }, _t.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new It().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new It().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new It().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return _t.proto3.util.equals(It, e2, t2);
      }
      static $() {
        return ["GetUnifyEligibilityRequest|1 individual #0 subject|2 cursor_team_id 5 subject", Et];
      }
    }
    class Tt extends kt {
      constructor(e2) {
        super(), this.eligible = false, this.reason = xt.UNSPECIFIED, this.userFacingMessage = "", this.reasons = [], this.canOptInToNewPricing = false, _t.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Tt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Tt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Tt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return _t.proto3.util.equals(Tt, e2, t2);
      }
      static $() {
        return ["GetUnifyEligibilityResponse|1 eligible 8|2 reason #0|3 user_facing_message 9|4 reasons #0*|5 can_opt_in_to_new_pricing 8", xt];
      }
    }
    class Ct extends bt.HL {
      static get runtime() {
        return (0, bt.kU)(this, "runtime", _t.proto3);
      }
      static $p() {
        return "aiserver.v1.";
      }
    }
    class Pt extends Ct {
      constructor(e2) {
        super(), this.subjectKey = "", this.score = 0, this.sampleCount = 0, _t.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Pt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Pt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Pt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return _t.proto3.util.equals(Pt, e2, t2);
      }
      static $() {
        return ["SubjectScore|1 subject_key 9|2 score 1|3 sample_count 1"];
      }
    }
    class At extends Ct {
      constructor(e2) {
        super(), this.sourceWatermarkMs = _t.protoInt64.zero, this.generatedAtMs = _t.protoInt64.zero, this.expiresAtMs = _t.protoInt64.zero, this.scores = [], _t.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new At().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new At().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new At().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return _t.proto3.util.equals(At, e2, t2);
      }
      static $() {
        return ["ProjectionScoreSet|1 source_watermark_ms 3|2 generated_at_ms 3|3 expires_at_ms 3|4 scores #0*", Pt];
      }
    }
    class Rt extends Ct {
      constructor(e2) {
        super(), this.policyId = "", this.knownSnapshotVersion = _t.protoInt64.zero, _t.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Rt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Rt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Rt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return _t.proto3.util.equals(Rt, e2, t2);
      }
      static $() {
        return ["GetProjectionSnapshotRequest|1 policy_id 9|2 known_snapshot_version 4"];
      }
    }
    class Mt extends Ct {
      constructor(e2) {
        super(), this.policyId = "", this.policyVersion = 0, this.snapshotVersion = _t.protoInt64.zero, this.notModified = false, _t.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Mt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Mt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Mt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return _t.proto3.util.equals(Mt, e2, t2);
      }
      static $() {
        return ["GetProjectionSnapshotResponse|1 policy_id 9|2 policy_version 13|3 snapshot_version 4|4 team #0|5 not_modified 8", At];
      }
    }
    class Jt extends bt.HL {
      static get runtime() {
        return (0, bt.kU)(this, "runtime", _t.proto3);
      }
      static $p() {
        return "aiserver.v1.";
      }
    }
    class Ot extends Jt {
      constructor(e2) {
        super(), this.teamId = 0, _t.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ot().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ot().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ot().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return _t.proto3.util.equals(Ot, e2, t2);
      }
      static $() {
        return ["ListRepoLearnedRulesRequest|1 team_id 5"];
      }
    }
    class Bt extends Jt {
      constructor(e2) {
        super(), this.enabled = false, this.items = [], this.truncated = false, this.hiddenCount = 0, this.live = false, this.canEdit = false, _t.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Bt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Bt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Bt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return _t.proto3.util.equals(Bt, e2, t2);
      }
      static $() {
        return ["ListRepoLearnedRulesResponse|1 enabled 8|2 items #0*|3 truncated 8|4 hidden_count 5|5 live 8|6 can_edit 8", Dt];
      }
    }
    class Dt extends Jt {
      constructor(e2) {
        super(), this.id = "", this.repoId = "", this.gitRemoteOrigin = "", this.title = "", this.appliesWhen = "", this.content = "", this.kind = "", this.scopedPaths = [], this.status = "", this.importance = 0, _t.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Dt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Dt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Dt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return _t.proto3.util.equals(Dt, e2, t2);
      }
      static $() {
        return ["RepoLearnedRule|1 id 9|2 repo_id 9|3 git_remote_origin 9|4 title 9|5 applies_when 9|6 content 9|7 kind 9|8 item_class 9?|9 scoped_paths 9*|10 status 9|11 importance 5|12 would_promote_at #0|13 archived_at #0|14 archived_reason 9?|15 created_at #0|16 updated_at #0|17 source 9?", _t.Timestamp];
      }
    }
    class qt extends Jt {
      constructor(e2) {
        super(), this.teamId = 0, this.id = "", _t.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return _t.proto3.util.equals(qt, e2, t2);
      }
      static $() {
        return ["RemoveRepoLearnedRuleRequest|1 team_id 5|2 id 9"];
      }
    }
    class Nt extends Jt {
      constructor(e2) {
        super(), _t.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Nt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Nt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Nt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return _t.proto3.util.equals(Nt, e2, t2);
      }
      static $() {
        return ["RemoveRepoLearnedRuleResponse"];
      }
    }
    class Ft extends bt.HL {
      static get runtime() {
        return (0, bt.kU)(this, "runtime", _t.proto3);
      }
      static $p() {
        return "aiserver.v1.";
      }
    }
    class Ut extends Ft {
      constructor(e2) {
        super(), this.teamId = 0, this.serviceAccountId = "", _t.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ut().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ut().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ut().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return _t.proto3.util.equals(Ut, e2, t2);
      }
      static $() {
        return ["SuspendTeamServiceAccountRequest|1 team_id 5|2 service_account_id 9"];
      }
    }
    class Lt extends Ft {
      constructor(e2) {
        super(), _t.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Lt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Lt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Lt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return _t.proto3.util.equals(Lt, e2, t2);
      }
      static $() {
        return ["SuspendTeamServiceAccountResponse"];
      }
    }
    class $t extends Ft {
      constructor(e2) {
        super(), this.teamId = 0, this.serviceAccountId = "", _t.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $t().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $t().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $t().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return _t.proto3.util.equals($t, e2, t2);
      }
      static $() {
        return ["ResumeTeamServiceAccountRequest|1 team_id 5|2 service_account_id 9"];
      }
    }
    class jt extends Ft {
      constructor(e2) {
        super(), _t.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new jt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new jt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new jt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return _t.proto3.util.equals(jt, e2, t2);
      }
      static $() {
        return ["ResumeTeamServiceAccountResponse"];
      }
    }
    const Gt = { typeName: "aiserver.v1.DashboardService", methods: { getTeams: { name: "GetTeams", I: j.EZo, O: j.m0q, kind: _t.MethodKind.Unary }, getMe: { name: "GetMe", I: j.Ewt, O: j.S7I, kind: _t.MethodKind.Unary }, getUnificationLegacySuperGrokPlan: { name: "GetUnificationLegacySuperGrokPlan", I: j.BLW, O: j.jpO, kind: _t.MethodKind.Unary }, getUnifyEligibility: { name: "GetUnifyEligibility", I: It, O: Tt, kind: _t.MethodKind.Unary }, listCollapseCandidates: { name: "ListCollapseCandidates", I: j.jlg, O: j.xL7, kind: _t.MethodKind.Unary }, getUnificationIntent: { name: "GetUnificationIntent", I: j.jiH, O: j.fTn, kind: _t.MethodKind.Unary }, getStoreSubscriptionsToCancel: { name: "GetStoreSubscriptionsToCancel", I: j.I2q, O: j.YeL, kind: _t.MethodKind.Unary }, getIndividualUnificationPrepaidPreview: { name: "GetIndividualUnificationPrepaidPreview", I: j.XB2, O: j.FTr, kind: _t.MethodKind.Unary }, upsertUnificationIntent: { name: "UpsertUnificationIntent", I: j.M4l, O: j.M_7, kind: _t.MethodKind.Unary }, startUnifyGrokOAuth: { name: "StartUnifyGrokOAuth", I: j.VMe, O: j.BRO, kind: _t.MethodKind.Unary }, completeUnifyGrokOAuth: { name: "CompleteUnifyGrokOAuth", I: j.O78, O: j.azJ, kind: _t.MethodKind.Unary }, parkUnifyGrokOAuthForAppSheet: { name: "ParkUnifyGrokOAuthForAppSheet", I: j.oZm, O: j.CKQ, kind: _t.MethodKind.Unary }, completeUnifyGrokOAuthFromAppSheet: { name: "CompleteUnifyGrokOAuthFromAppSheet", I: j.obd, O: j.azJ, kind: _t.MethodKind.Unary }, startUnifyXLogin: { name: "StartUnifyXLogin", I: j.GMY, O: j.eQV, kind: _t.MethodKind.Unary }, completeUnifyXLogin: { name: "CompleteUnifyXLogin", I: j.VE0, O: j.hbz, kind: _t.MethodKind.Unary }, parkUnifyXLoginForAppSheet: { name: "ParkUnifyXLoginForAppSheet", I: j.ziZ, O: j.TjJ, kind: _t.MethodKind.Unary }, completeUnifyXLoginFromAppSheet: { name: "CompleteUnifyXLoginFromAppSheet", I: j.ZP$, O: j.hbz, kind: _t.MethodKind.Unary }, startCollapseSourceProof: { name: "StartCollapseSourceProof", I: j.kQE, O: j.G$Z, kind: _t.MethodKind.Unary }, completeCollapseSourceProof: { name: "CompleteCollapseSourceProof", I: j.x$b, O: j.N_h, kind: _t.MethodKind.Unary }, provisionUnifyGrokAccount: { name: "ProvisionUnifyGrokAccount", I: j.I7k, O: j.O8p, kind: _t.MethodKind.Unary }, finalizeIndividualUnification: { name: "FinalizeIndividualUnification", I: j.mpn, O: j.UsM, kind: _t.MethodKind.Unary }, getUnifyCta: { name: "GetUnifyCta", I: j.bfP, O: j.Jvy, kind: _t.MethodKind.Unary }, startUnifiedCheckout: { name: "StartUnifiedCheckout", I: j.gR6, O: j.aIw, kind: _t.MethodKind.Unary }, resolveUnifiedTeamStart: { name: "ResolveUnifiedTeamStart", I: j.nQN, O: j.tWf, kind: _t.MethodKind.Unary }, startUnifiedTeamCheckout: { name: "StartUnifiedTeamCheckout", I: j.ToG, O: j.Hx0, kind: _t.MethodKind.Unary }, createGrokSignInLink: { name: "CreateGrokSignInLink", I: j.lqG, O: j.Ps6, kind: _t.MethodKind.Unary }, getOrCreateXaiUnificationIntent: { name: "GetOrCreateXaiUnificationIntent", I: j.GCT, O: j.CG1, kind: _t.MethodKind.Unary }, getXaiUnificationIntent: { name: "GetXaiUnificationIntent", I: j.djX, O: j.pww, kind: _t.MethodKind.Unary }, selectXaiUnificationCursorAccount: { name: "SelectXaiUnificationCursorAccount", I: j.gpr, O: j.QV4, kind: _t.MethodKind.Unary }, deselectXaiUnificationCursorAccount: { name: "DeselectXaiUnificationCursorAccount", I: j.dv2, O: j.dSk, kind: _t.MethodKind.Unary }, listXaiUnificationCollapseCandidates: { name: "ListXaiUnificationCollapseCandidates", I: j.K28, O: j.xL7, kind: _t.MethodKind.Unary }, startXaiUnificationCursorAccountProof: { name: "StartXaiUnificationCursorAccountProof", I: j.wQY, O: j.M8c, kind: _t.MethodKind.Unary }, completeXaiUnificationCursorAccountProof: { name: "CompleteXaiUnificationCursorAccountProof", I: j.lWf, O: j.Tm1, kind: _t.MethodKind.Unary }, advanceXaiUnificationIntent: { name: "AdvanceXaiUnificationIntent", I: j.Tnz, O: j.lVO, kind: _t.MethodKind.Unary }, startXaiCursorAccountLink: { name: "StartXaiCursorAccountLink", I: j.vRE, O: j.N7y, kind: _t.MethodKind.Unary }, completeXaiCursorAccountLink: { name: "CompleteXaiCursorAccountLink", I: j.UmB, O: j.Ie5, kind: _t.MethodKind.Unary }, getAgenticOnboardingConfig: { name: "GetAgenticOnboardingConfig", I: j.CQB, O: j.WQf, kind: _t.MethodKind.Unary }, getUserOrganizations: { name: "GetUserOrganizations", I: j.V2d, O: j.NjL, kind: _t.MethodKind.Unary }, getTeamLinkedOrganization: { name: "GetTeamLinkedOrganization", I: j.Pxo, O: j.RR2, kind: _t.MethodKind.Unary }, setUserDefaultTeam: { name: "SetUserDefaultTeam", I: j.tol, O: j.b0C, kind: _t.MethodKind.Unary }, getOrganizationMembers: { name: "GetOrganizationMembers", I: j.cF_, O: j.SY0, kind: _t.MethodKind.Unary }, getOrganizationMember: { name: "GetOrganizationMember", I: j.lN3, O: j.vBH, kind: _t.MethodKind.Unary }, listOrganizationIdentityProviders: { name: "ListOrganizationIdentityProviders", I: j.rq6, O: j.dSe, kind: _t.MethodKind.Unary }, updateOrganizationIdentityProviderSsoSettings: { name: "UpdateOrganizationIdentityProviderSsoSettings", I: j.XwO, O: j.BDH, kind: _t.MethodKind.Unary }, setOrganizationIdentityProviderAllowDomainJoin: { name: "SetOrganizationIdentityProviderAllowDomainJoin", I: j.bpP, O: j.BDH, kind: _t.MethodKind.Unary }, addOrganizationIdentityProviderDomainJoin: { name: "AddOrganizationIdentityProviderDomainJoin", I: j.$n5, O: j.BDH, kind: _t.MethodKind.Unary }, removeOrganizationIdentityProviderDomainJoin: { name: "RemoveOrganizationIdentityProviderDomainJoin", I: j.SFI, O: j.BDH, kind: _t.MethodKind.Unary }, mergeOrganizationIdentityProvider: { name: "MergeOrganizationIdentityProvider", I: j.SAH, O: j.mOD, kind: _t.MethodKind.Unary }, preflightMergeOrganizationIdentityProvider: { name: "PreflightMergeOrganizationIdentityProvider", I: j.FMO, O: j.PUH, kind: _t.MethodKind.Unary }, getOrganizationMergeIdpRequest: { name: "GetOrganizationMergeIdpRequest", I: j.bXT, O: j.TQ7, kind: _t.MethodKind.Unary }, listOrganizationMergeIdpRequests: { name: "ListOrganizationMergeIdpRequests", I: j.Y1Y, O: j.G2s, kind: _t.MethodKind.Unary }, moveOrganizationMemberToTeam: { name: "MoveOrganizationMemberToTeam", I: j.kiI, O: j.gqE, kind: _t.MethodKind.Unary }, setOrganizationMemberTeams: { name: "SetOrganizationMemberTeams", I: j.NW8, O: j.tP0, kind: _t.MethodKind.Unary }, removeOrganizationMember: { name: "RemoveOrganizationMember", I: j.rLu, O: j.Puo, kind: _t.MethodKind.Unary }, bulkMoveOrganizationMembers: { name: "BulkMoveOrganizationMembers", I: j.VN4, O: j.nPy, kind: _t.MethodKind.Unary }, startBulkMoveOrganizationMembers: { name: "StartBulkMoveOrganizationMembers", I: j.piC, O: j.T_o, kind: _t.MethodKind.Unary }, getBackgroundJob: { name: "GetBackgroundJob", I: j.Nbg, O: j.xel, kind: _t.MethodKind.Unary }, setOrganizationMemberRole: { name: "SetOrganizationMemberRole", I: j.xBJ, O: j.jFq, kind: _t.MethodKind.Unary }, updateOrganization: { name: "UpdateOrganization", I: j.SC0, O: j.kz1, kind: _t.MethodKind.Unary }, updateOrganizationTeam: { name: "UpdateOrganizationTeam", I: j.Dmk, O: j.RAD, kind: _t.MethodKind.Unary }, createOrganizationTeam: { name: "CreateOrganizationTeam", I: j.iQx, O: j.uYE, kind: _t.MethodKind.Unary }, startEnterpriseGrokMigration: { name: "StartEnterpriseGrokMigration", I: j.uRp, O: j.Cf7, kind: _t.MethodKind.Unary }, getEnterpriseGrokMigrationStatus: { name: "GetEnterpriseGrokMigrationStatus", I: j.OyF, O: j.igd, kind: _t.MethodKind.Unary }, previewOrganizationTeamSettingsCopy: { name: "PreviewOrganizationTeamSettingsCopy", I: j.CrG, O: j.YQr, kind: _t.MethodKind.Unary }, copyOrganizationTeamSettingsToTeam: { name: "CopyOrganizationTeamSettingsToTeam", I: j.ign, O: j.WSJ, kind: _t.MethodKind.Unary }, listOrganizationTeamSettingsCopySources: { name: "ListOrganizationTeamSettingsCopySources", I: j.YNI, O: j.yaP, kind: _t.MethodKind.Unary }, getOrganizationTeamAdminCandidates: { name: "GetOrganizationTeamAdminCandidates", I: j.rgp, O: j.xa_, kind: _t.MethodKind.Unary }, getDirectoryGroups: { name: "GetDirectoryGroups", I: j.LYo, O: j.PJy, kind: _t.MethodKind.Unary }, updateDirectoryGroupSettings: { name: "UpdateDirectoryGroupSettings", I: j.kFu, O: j.Mpk, kind: _t.MethodKind.Unary }, getOrganizationGroups: { name: "GetOrganizationGroups", I: j.f5k, O: j.ZJV, kind: _t.MethodKind.Unary }, getOrganizationGroup: { name: "GetOrganizationGroup", I: j.wH4, O: j.uwp, kind: _t.MethodKind.Unary }, getOrganizationGroupMembers: { name: "GetOrganizationGroupMembers", I: j.nQH, O: j.rd8, kind: _t.MethodKind.Unary }, createOrganizationGroup: { name: "CreateOrganizationGroup", I: j.ed4, O: j.urU, kind: _t.MethodKind.Unary }, updateOrganizationGroup: { name: "UpdateOrganizationGroup", I: j.Bhj, O: j.LBR, kind: _t.MethodKind.Unary }, deleteOrganizationGroup: { name: "DeleteOrganizationGroup", I: j.pe4, O: j.Huq, kind: _t.MethodKind.Unary }, addOrganizationGroupMembers: { name: "AddOrganizationGroupMembers", I: j.U8V, O: j.mf3, kind: _t.MethodKind.Unary }, removeOrganizationGroupMembers: { name: "RemoveOrganizationGroupMembers", I: j.xQP, O: j.TGX, kind: _t.MethodKind.Unary }, updateOrganizationGroupMember: { name: "UpdateOrganizationGroupMember", I: j.rj1, O: j.jWT, kind: _t.MethodKind.Unary }, getOrganizationGroupServiceAccountMembers: { name: "GetOrganizationGroupServiceAccountMembers", I: j.bPz, O: j.H0j, kind: _t.MethodKind.Unary }, getOrganizationServiceAccounts: { name: "GetOrganizationServiceAccounts", I: j.Exr, O: j.aYg, kind: _t.MethodKind.Unary }, addOrganizationGroupServiceAccounts: { name: "AddOrganizationGroupServiceAccounts", I: j.ggo, O: j.aHm, kind: _t.MethodKind.Unary }, removeOrganizationGroupServiceAccounts: { name: "RemoveOrganizationGroupServiceAccounts", I: j.dSX, O: j.nS1, kind: _t.MethodKind.Unary }, getOrganizationGroupAutorunSettings: { name: "GetOrganizationGroupAutorunSettings", I: j.ZKL, O: j.f43, kind: _t.MethodKind.Unary }, updateOrganizationGroupAutorunSettings: { name: "UpdateOrganizationGroupAutorunSettings", I: j.Cwp, O: j._i8, kind: _t.MethodKind.Unary }, getOrganizationGroupMcpSettings: { name: "GetOrganizationGroupMcpSettings", I: j.z1R, O: j.Jrb, kind: _t.MethodKind.Unary }, updateOrganizationGroupMcpSettings: { name: "UpdateOrganizationGroupMcpSettings", I: j.qMG, O: j.AbB, kind: _t.MethodKind.Unary }, exportOrganizationGroupMcpAllowlist: { name: "ExportOrganizationGroupMcpAllowlist", I: j.DI3, O: j.zhf, kind: _t.MethodKind.Unary }, importOrganizationGroupMcpAllowlist: { name: "ImportOrganizationGroupMcpAllowlist", I: j.YJq, O: j.WWg, kind: _t.MethodKind.Unary }, exportTeamMcpAllowlist: { name: "ExportTeamMcpAllowlist", I: j.m0D, O: j.wpF, kind: _t.MethodKind.Unary }, importTeamMcpAllowlist: { name: "ImportTeamMcpAllowlist", I: j.fVs, O: j.xxr, kind: _t.MethodKind.Unary }, resetOrganizationGroupAgentRunModeToAutoReview: { name: "ResetOrganizationGroupAgentRunModeToAutoReview", I: j.ePV, O: j.EuD, kind: _t.MethodKind.Unary }, getOrganizationGroupModelAllowlist: { name: "GetOrganizationGroupModelAllowlist", I: j.M89, O: j.qlA, kind: _t.MethodKind.Unary }, updateOrganizationGroupModelAllowlist: { name: "UpdateOrganizationGroupModelAllowlist", I: j.$bH, O: j.nCl, kind: _t.MethodKind.Unary }, getOrganizationGroupAutoReviewSettings: { name: "GetOrganizationGroupAutoReviewSettings", I: j.QOh, O: j.qbQ, kind: _t.MethodKind.Unary }, updateOrganizationGroupAutoReviewSettings: { name: "UpdateOrganizationGroupAutoReviewSettings", I: j.DtR, O: j.dDc, kind: _t.MethodKind.Unary }, getOrganizationGroupSmartAutoSettings: { name: "GetOrganizationGroupSmartAutoSettings", I: j.H8G, O: j.rt0, kind: _t.MethodKind.Unary }, updateOrganizationGroupSmartAutoSettings: { name: "UpdateOrganizationGroupSmartAutoSettings", I: j.Yir, O: j.GDG, kind: _t.MethodKind.Unary }, createOrganizationGroupAnthropicCyberEnrollmentUrl: { name: "CreateOrganizationGroupAnthropicCyberEnrollmentUrl", I: j.C1F, O: j.wqi, kind: _t.MethodKind.Unary }, requestOrganizationGroupAnthropicEfs: { name: "RequestOrganizationGroupAnthropicEfs", I: j.rF_, O: j.DmQ, kind: _t.MethodKind.Unary }, requestOrganizationAnthropicEfs: { name: "RequestOrganizationAnthropicEfs", I: j.Y6P, O: j.QeE, kind: _t.MethodKind.Unary }, getOrganizationAnthropicEfsStatus: { name: "GetOrganizationAnthropicEfsStatus", I: j.BHf, O: j.lqZ, kind: _t.MethodKind.Unary }, reviewAnthropicEfsRequestInternal: { name: "ReviewAnthropicEfsRequestInternal", I: j.ovZ, O: j.gdR, kind: _t.MethodKind.Unary }, getTeamGroups: { name: "GetTeamGroups", I: j.JbB, O: j.nrv, kind: _t.MethodKind.Unary }, getTeamGroup: { name: "GetTeamGroup", I: j.UQh, O: j.cUB, kind: _t.MethodKind.Unary }, getTeamGroupMembers: { name: "GetTeamGroupMembers", I: j.J67, O: j.VBR, kind: _t.MethodKind.Unary }, createTeamGroup: { name: "CreateTeamGroup", I: j.cbD, O: j.CiW, kind: _t.MethodKind.Unary }, updateTeamGroup: { name: "UpdateTeamGroup", I: j.NS0, O: j.JL8, kind: _t.MethodKind.Unary }, deleteTeamGroup: { name: "DeleteTeamGroup", I: j.p9b, O: j.VyS, kind: _t.MethodKind.Unary }, addTeamGroupMembers: { name: "AddTeamGroupMembers", I: j.yqO, O: j.Gc8, kind: _t.MethodKind.Unary }, removeTeamGroupMembers: { name: "RemoveTeamGroupMembers", I: j.rA4, O: j.lER, kind: _t.MethodKind.Unary }, updateTeamGroupMember: { name: "UpdateTeamGroupMember", I: j.jG, O: j.jFj, kind: _t.MethodKind.Unary }, getTeamGroupAutorunSettings: { name: "GetTeamGroupAutorunSettings", I: j.bK1, O: j.bJ, kind: _t.MethodKind.Unary }, updateTeamGroupAutorunSettings: { name: "UpdateTeamGroupAutorunSettings", I: j.KTu, O: j._$O, kind: _t.MethodKind.Unary }, getTeamGroupMcpSettings: { name: "GetTeamGroupMcpSettings", I: j.P6l, O: j.zL5, kind: _t.MethodKind.Unary }, updateTeamGroupMcpSettings: { name: "UpdateTeamGroupMcpSettings", I: j.uFn, O: j.mjT, kind: _t.MethodKind.Unary }, listBuiltinMcpServerTools: { name: "ListBuiltinMcpServerTools", I: j.FXL, O: j.hiE, kind: _t.MethodKind.Unary }, exportTeamGroupMcpAllowlist: { name: "ExportTeamGroupMcpAllowlist", I: j.dMQ, O: j.$gS, kind: _t.MethodKind.Unary }, importTeamGroupMcpAllowlist: { name: "ImportTeamGroupMcpAllowlist", I: j.sMu, O: j.osZ, kind: _t.MethodKind.Unary }, resetTeamGroupAgentRunModeToAutoReview: { name: "ResetTeamGroupAgentRunModeToAutoReview", I: j.I3c, O: j.Qnc, kind: _t.MethodKind.Unary }, getTeamGroupModelAllowlist: { name: "GetTeamGroupModelAllowlist", I: j.s$M, O: j.MJ, kind: _t.MethodKind.Unary }, updateTeamGroupModelAllowlist: { name: "UpdateTeamGroupModelAllowlist", I: j.pbs, O: j.PD$, kind: _t.MethodKind.Unary }, getTeamGroupAutoReviewSettings: { name: "GetTeamGroupAutoReviewSettings", I: j.Mx4, O: j.gDX, kind: _t.MethodKind.Unary }, updateTeamGroupAutoReviewSettings: { name: "UpdateTeamGroupAutoReviewSettings", I: j.dXc, O: j.zF8, kind: _t.MethodKind.Unary }, getTeamSandNetworkSettings: { name: "GetTeamSandNetworkSettings", I: j.oTS, O: j.eU6, kind: _t.MethodKind.Unary }, getTeamGrokBotTrial: { name: "GetTeamGrokBotTrial", I: j.ve, O: j.HDB, kind: _t.MethodKind.Unary }, listTeamGrokBotAgentsAdmin: { name: "ListTeamGrokBotAgentsAdmin", I: j.Kbt, O: j.kAL, kind: _t.MethodKind.Unary }, updateTeamSandNetworkSettings: { name: "UpdateTeamSandNetworkSettings", I: j.NNm, O: j.pII, kind: _t.MethodKind.Unary }, getTeamGroupSandNetworkSettings: { name: "GetTeamGroupSandNetworkSettings", I: j.pfR, O: j.rDR, kind: _t.MethodKind.Unary }, updateTeamGroupSandNetworkSettings: { name: "UpdateTeamGroupSandNetworkSettings", I: j.owH, O: j.KVq, kind: _t.MethodKind.Unary }, getTeamGroupGrokBotCapabilities: { name: "GetTeamGroupGrokBotCapabilities", I: j.gsc, O: j.Eyr, kind: _t.MethodKind.Unary }, updateTeamGroupGrokBotCapabilities: { name: "UpdateTeamGroupGrokBotCapabilities", I: j.Nl7, O: j.lu1, kind: _t.MethodKind.Unary }, getTeamGroupSmartAutoSettings: { name: "GetTeamGroupSmartAutoSettings", I: j.hu7, O: j.BPt, kind: _t.MethodKind.Unary }, updateTeamGroupSmartAutoSettings: { name: "UpdateTeamGroupSmartAutoSettings", I: j.Gor, O: j.WWO, kind: _t.MethodKind.Unary }, createTeamGroupAnthropicCyberEnrollmentUrl: { name: "CreateTeamGroupAnthropicCyberEnrollmentUrl", I: j.oJv, O: j.UPX, kind: _t.MethodKind.Unary }, requestTeamGroupAnthropicEfs: { name: "RequestTeamGroupAnthropicEfs", I: j.be7, O: j.THz, kind: _t.MethodKind.Unary }, getTeamAnthropicEfsStatus: { name: "GetTeamAnthropicEfsStatus", I: j.TdK, O: j.v6H, kind: _t.MethodKind.Unary }, listTeamGroupScimDirectories: { name: "ListTeamGroupScimDirectories", I: j.DEE, O: j.xUt, kind: _t.MethodKind.Unary }, listTeamGroupScimGroupsFromUpstream: { name: "ListTeamGroupScimGroupsFromUpstream", I: j.nsd, O: j.xYI, kind: _t.MethodKind.Unary }, listTeamGroupScimTargetMappings: { name: "ListTeamGroupScimTargetMappings", I: j.QE, O: j.gsU, kind: _t.MethodKind.Unary }, createTeamGroupScimTargetMapping: { name: "CreateTeamGroupScimTargetMapping", I: j.lW, O: j.$a1, kind: _t.MethodKind.Unary }, deleteTeamGroupScimTargetMapping: { name: "DeleteTeamGroupScimTargetMapping", I: j.mA, O: j.U1k, kind: _t.MethodKind.Unary }, getGroups: { name: "GetGroups", I: j.CY$, O: j.WsC, kind: _t.MethodKind.Unary }, getGroupMembers: { name: "GetGroupMembers", I: j.i$e, O: j.StO, kind: _t.MethodKind.Unary }, createGroup: { name: "CreateGroup", I: j.p8r, O: j.Dsz, kind: _t.MethodKind.Unary }, updateGroup: { name: "UpdateGroup", I: j.Eh9, O: j.wrT, kind: _t.MethodKind.Unary }, deleteGroup: { name: "DeleteGroup", I: j.SBx, O: j.uDb, kind: _t.MethodKind.Unary }, addGroupMembers: { name: "AddGroupMembers", I: j.Hcr, O: j.he9, kind: _t.MethodKind.Unary }, removeGroupMembers: { name: "RemoveGroupMembers", I: j.im6, O: j.SSe, kind: _t.MethodKind.Unary }, bulkAssignGroupMembers: { name: "BulkAssignGroupMembers", I: j.t3S, O: j.PXK, kind: _t.MethodKind.Unary }, previewAttachGroupToDirectory: { name: "PreviewAttachGroupToDirectory", I: j.OeX, O: j.Wow, kind: _t.MethodKind.Unary }, detachGroupFromDirectory: { name: "DetachGroupFromDirectory", I: j.tm2, O: j.prK, kind: _t.MethodKind.Unary }, getScimConflicts: { name: "GetScimConflicts", I: j.l9M, O: j.nPZ, kind: _t.MethodKind.Unary }, listScimDirectories: { name: "ListScimDirectories", I: j.Dxu, O: j.LM8, kind: _t.MethodKind.Unary }, getOrganizationScimConfigurationLinks: { name: "GetOrganizationScimConfigurationLinks", I: j.Dxu, O: j.C61, kind: _t.MethodKind.Unary }, createScimDirectory: { name: "CreateScimDirectory", I: j.BwS, O: j.dnd, kind: _t.MethodKind.Unary }, updateScimDirectorySyncSettings: { name: "UpdateScimDirectorySyncSettings", I: j.Spq, O: j.YCH, kind: _t.MethodKind.Unary }, deleteScimDirectory: { name: "DeleteScimDirectory", I: j.gwk, O: j.CN_, kind: _t.MethodKind.Unary }, listScimGroupsFromUpstream: { name: "ListScimGroupsFromUpstream", I: j.lmw, O: j.na4, kind: _t.MethodKind.Unary }, listScimTargetMappings: { name: "ListScimTargetMappings", I: j.OWn, O: j.c3u, kind: _t.MethodKind.Unary }, listOrganizationGroupTargetMappings: { name: "ListOrganizationGroupTargetMappings", I: j.UTl, O: j.i4X, kind: _t.MethodKind.Unary }, createScimTargetMapping: { name: "CreateScimTargetMapping", I: j.PwZ, O: j.vFW, kind: _t.MethodKind.Unary }, deleteScimTargetMapping: { name: "DeleteScimTargetMapping", I: j.gFI, O: j.c7s, kind: _t.MethodKind.Unary }, getActivationCheckoutUrl: { name: "GetActivationCheckoutUrl", I: j.hWx, O: j.dr7, kind: _t.MethodKind.Unary }, checkPromotionEligibility: { name: "CheckPromotionEligibility", I: j.yD0, O: j.MEI, kind: _t.MethodKind.Unary }, activatePromotion: { name: "ActivatePromotion", I: j.uHx, O: j.yDS, kind: _t.MethodKind.Unary }, getTeamCustomerPortalUrl: { name: "GetTeamCustomerPortalUrl", I: j.qjo, O: j.M_, kind: _t.MethodKind.Unary }, cancelPendingTeamSubscriptionNow: { name: "CancelPendingTeamSubscriptionNow", I: j.v_r, O: j.$n, kind: _t.MethodKind.Unary }, createPendingTeamProCheckout: { name: "CreatePendingTeamProCheckout", I: j.PTe, O: j.pF3, kind: _t.MethodKind.Unary }, getTeamPrepaidBilling: { name: "GetTeamPrepaidBilling", I: j.FcH, O: j.$qn, kind: _t.MethodKind.Unary }, setTeamPrepaidAutoTopUp: { name: "SetTeamPrepaidAutoTopUp", I: j.$ty, O: j.VN6, kind: _t.MethodKind.Unary }, createPrepaidTopUp: { name: "CreatePrepaidTopUp", I: j.XAW, O: j.bTQ, kind: _t.MethodKind.Unary }, getUserPrepaidBilling: { name: "GetUserPrepaidBilling", I: j.b4u, O: j.$H_, kind: _t.MethodKind.Unary }, setUserPrepaidAutoTopUp: { name: "SetUserPrepaidAutoTopUp", I: j.h3x, O: j.D9s, kind: _t.MethodKind.Unary }, createUserPrepaidTopUp: { name: "CreateUserPrepaidTopUp", I: j.uDD, O: j.EO4, kind: _t.MethodKind.Unary }, getTeamMembers: { name: "GetTeamMembers", I: j.Imd, O: j.QI7, kind: _t.MethodKind.Unary }, sendTeamInvite: { name: "SendTeamInvite", I: j.cn, O: j.YBJ, kind: _t.MethodKind.Unary }, getTeamInviteLink: { name: "GetTeamInviteLink", I: j.C4p, O: j.gRj, kind: _t.MethodKind.Unary }, acceptInvite: { name: "AcceptInvite", I: j.LRJ, O: j.bCe, kind: _t.MethodKind.Unary }, getTeamInviteMetadata: { name: "GetTeamInviteMetadata", I: j.h1G, O: j.doQ, kind: _t.MethodKind.Unary }, listContactImportConnections: { name: "ListContactImportConnections", I: j.Ezc, O: j.cDB, kind: _t.MethodKind.Unary }, getGoogleContactImportAuthUrl: { name: "GetGoogleContactImportAuthUrl", I: j.$7Y, O: j.LoC, kind: _t.MethodKind.Unary }, connectGoogleContactImportCallback: { name: "ConnectGoogleContactImportCallback", I: j.X38, O: j.tZA, kind: _t.MethodKind.Unary }, listContactImportContacts: { name: "ListContactImportContacts", I: j.gNW, O: j.SuV, kind: _t.MethodKind.Unary }, getContactImportAvatar: { name: "GetContactImportAvatar", I: j.mPq, O: j.i5j, kind: _t.MethodKind.Unary }, disconnectContactImportConnection: { name: "DisconnectContactImportConnection", I: j.jzf, O: j.zu1, kind: _t.MethodKind.Unary }, createTeam: { name: "CreateTeam", I: j.nxO, O: j.vgA, kind: _t.MethodKind.Unary }, getJoinableTeamsByDomain: { name: "GetJoinableTeamsByDomain", I: j.ND4, O: j.Rkv, kind: _t.MethodKind.Unary }, joinTeamByDomain: { name: "JoinTeamByDomain", I: j.E2N, O: j.iX6, kind: _t.MethodKind.Unary }, updateTeamDomainJoinSetting: { name: "UpdateTeamDomainJoinSetting", I: j.yog, O: j.K_o, kind: _t.MethodKind.Unary }, getTeamMemberDomains: { name: "GetTeamMemberDomains", I: j.Obu, O: j.S5H, kind: _t.MethodKind.Unary }, getTeamIdForReactivation: { name: "GetTeamIdForReactivation", I: j._CN, O: j.Kww, kind: _t.MethodKind.Unary }, changeSeat: { name: "ChangeSeat", I: j.HZm, O: j.lRG, kind: _t.MethodKind.Unary }, changeTeamSubscription: { name: "ChangeTeamSubscription", I: j.oOo, O: j.MIx, kind: _t.MethodKind.Unary }, connectGithubCallback: { name: "ConnectGithubCallback", I: j.SH9, O: j._$M, kind: _t.MethodKind.Unary }, registerGithubCursorCode: { name: "RegisterGithubCursorCode", I: j.H1p, O: j.DUo, kind: _t.MethodKind.Unary }, prepareGithubConnectFlow: { name: "PrepareGithubConnectFlow", I: j.uif, O: j.EJq, kind: _t.MethodKind.Unary }, completeGithubConnectFlow: { name: "CompleteGithubConnectFlow", I: j.OjU, O: j.Ohd, kind: _t.MethodKind.Unary }, disconnectGithub: { name: "DisconnectGithub", I: j.D57, O: j.llV, kind: _t.MethodKind.Unary }, prepareSetupGithubEnterpriseApp: { name: "PrepareSetupGithubEnterpriseApp", I: j.jPV, O: j.lP, kind: _t.MethodKind.Unary }, finishSetupGithubEnterpriseApp: { name: "FinishSetupGithubEnterpriseApp", I: j.jiB, O: j.Z48, kind: _t.MethodKind.Unary }, listGithubEnterpriseApps: { name: "ListGithubEnterpriseApps", I: j.k6E, O: j.a$2, kind: _t.MethodKind.Unary }, deleteGithubEnterpriseApp: { name: "DeleteGithubEnterpriseApp", I: j.mZ$, O: j.WBx, kind: _t.MethodKind.Unary }, setupGitlabEnterpriseInstance: { name: "SetupGitlabEnterpriseInstance", I: j.MS0, O: j.k09, kind: _t.MethodKind.Unary }, listGitlabEnterpriseInstances: { name: "ListGitlabEnterpriseInstances", I: j.gvC, O: j.WaG, kind: _t.MethodKind.Unary }, setGitlabEnterpriseHostControlledServiceAccountToken: { name: "SetGitlabEnterpriseHostControlledServiceAccountToken", I: j.Rns, O: j.PFp, kind: _t.MethodKind.Unary }, rotateGitlabEnterpriseWebhookSecret: { name: "RotateGitlabEnterpriseWebhookSecret", I: j.eor, O: j.oTi, kind: _t.MethodKind.Unary }, deleteGitlabEnterpriseInstance: { name: "DeleteGitlabEnterpriseInstance", I: j.iVu, O: j.wuD, kind: _t.MethodKind.Unary }, setupBitbucketServerInstance: { name: "SetupBitbucketServerInstance", I: j.w9j, O: j.c1o, kind: _t.MethodKind.Unary }, listBitbucketServerInstances: { name: "ListBitbucketServerInstances", I: j.Q3t, O: j.Oef, kind: _t.MethodKind.Unary }, updateBitbucketServerInstanceToken: { name: "UpdateBitbucketServerInstanceToken", I: j.fKS, O: j.tkR, kind: _t.MethodKind.Unary }, deleteBitbucketServerInstance: { name: "DeleteBitbucketServerInstance", I: j.opt, O: j.ABq, kind: _t.MethodKind.Unary }, syncGitlabRepos: { name: "SyncGitlabRepos", I: j.ZrD, O: j.ffl, kind: _t.MethodKind.Unary }, getGitlabReposSyncStatus: { name: "GetGitlabReposSyncStatus", I: j.jp5, O: j.dpH, kind: _t.MethodKind.Unary }, updateRole: { name: "UpdateRole", I: j.$ht, O: j.BrS, kind: _t.MethodKind.Unary }, removeMember: { name: "RemoveMember", I: j.mig, O: j.sX9, kind: _t.MethodKind.Unary }, getMemberRemovalInsights: { name: "GetMemberRemovalInsights", I: j.BF8, O: j.t__, kind: _t.MethodKind.Unary }, getSignUpType: { name: "GetSignUpType", I: j.u_Q, O: j.WsA, kind: _t.MethodKind.Unary }, getHardLimit: { name: "GetHardLimit", I: j.g6R, O: j.oyU, kind: _t.MethodKind.Unary }, setHardLimit: { name: "SetHardLimit", I: j.yL5, O: j.se9, kind: _t.MethodKind.Unary }, getSpendLimitPolicy: { name: "GetSpendLimitPolicy", I: j.zEV, O: j.pig, kind: _t.MethodKind.Unary }, setSpendLimitPolicy: { name: "SetSpendLimitPolicy", I: j.LMY, O: j.LLB, kind: _t.MethodKind.Unary }, getOrgTeamBudgets: { name: "GetOrgTeamBudgets", I: j.DXb, O: j.D42, kind: _t.MethodKind.Unary }, setOrgTeamBudget: { name: "SetOrgTeamBudget", I: j.yWy, O: j.as5, kind: _t.MethodKind.Unary }, getOrgDailySpendByCategory: { name: "GetOrgDailySpendByCategory", I: j.ubJ, O: j.GlZ, kind: _t.MethodKind.Unary }, enableOnDemandSpend: { name: "EnableOnDemandSpend", I: j.toG, O: j.V$m, kind: _t.MethodKind.Unary }, deleteAccount: { name: "DeleteAccount", I: j.gqj, O: j.wER, kind: _t.MethodKind.Unary }, getAccountSettings: { name: "GetAccountSettings", I: j.oNu, O: j.Hdf, kind: _t.MethodKind.Unary }, createAccountHandoff: { name: "CreateAccountHandoff", I: j.vaB, O: j.rzz, kind: _t.MethodKind.Unary }, startAccountCollapseRun: { name: "StartAccountCollapseRun", I: j.Dyp, O: j.V4V, kind: _t.MethodKind.Unary }, getAccountCollapseRun: { name: "GetAccountCollapseRun", I: j.DSj, O: j.LZR, kind: _t.MethodKind.Unary }, startAccountCollapseRunInternal: { name: "StartAccountCollapseRunInternal", I: j.Dyp, O: j.V4V, kind: _t.MethodKind.Unary }, getAccountCollapseRunInternal: { name: "GetAccountCollapseRunInternal", I: j.DSj, O: j.LZR, kind: _t.MethodKind.Unary }, startCursorAccountCollapse: { name: "StartCursorAccountCollapse", I: j.o9R, O: j.Kot, kind: _t.MethodKind.Unary }, getCursorAccountCollapseByTarget: { name: "GetCursorAccountCollapseByTarget", I: j.EBP, O: j.m85, kind: _t.MethodKind.Unary }, startCursorSessionAccountCollapse: { name: "StartCursorSessionAccountCollapse", I: j.kgd, O: j.Kot, kind: _t.MethodKind.Unary }, getCursorSessionAccountCollapse: { name: "GetCursorSessionAccountCollapse", I: j.kYK, O: j.m85, kind: _t.MethodKind.Unary }, listCursorSessionAccountCollapseCandidates: { name: "ListCursorSessionAccountCollapseCandidates", I: j.SFZ, O: j.xL7, kind: _t.MethodKind.Unary }, startCursorSessionAccountCollapseProof: { name: "StartCursorSessionAccountCollapseProof", I: j.CHM, O: j.G$Z, kind: _t.MethodKind.Unary }, completeCursorSessionAccountCollapseProof: { name: "CompleteCursorSessionAccountCollapseProof", I: j.baZ, O: j.N_h, kind: _t.MethodKind.Unary }, sendDownloadEmail: { name: "SendDownloadEmail", I: j.e5r, O: j.C3d, kind: _t.MethodKind.Unary }, getMonthlyInvoice: { name: "GetMonthlyInvoice", I: j.yO3, O: j.Si_, kind: _t.MethodKind.Unary }, listInvoiceCycles: { name: "ListInvoiceCycles", I: j.yMo, O: j.G8V, kind: _t.MethodKind.Unary }, getDailySpendByCategory: { name: "GetDailySpendByCategory", I: j.irI, O: j.GlZ, kind: _t.MethodKind.Unary }, getPricingHistory: { name: "GetPricingHistory", I: j.Akd, O: j.i7t, kind: _t.MethodKind.Unary }, listBackgroundComposerSecrets: { name: "ListBackgroundComposerSecrets", I: j.$F$, O: j.dnq, kind: _t.MethodKind.Unary }, createBackgroundComposerSecret: { name: "CreateBackgroundComposerSecret", I: j.sJl, O: j.ukh, kind: _t.MethodKind.Unary }, createBackgroundComposerSecretBatch: { name: "CreateBackgroundComposerSecretBatch", I: j.S3E, O: j.o6Z, kind: _t.MethodKind.Unary }, revokeBackgroundComposerSecret: { name: "RevokeBackgroundComposerSecret", I: j.AU3, O: j.keR, kind: _t.MethodKind.Unary }, updateBackgroundComposerSecret: { name: "UpdateBackgroundComposerSecret", I: j.zYv, O: j.FmW, kind: _t.MethodKind.Unary }, getMcpConfig: { name: "GetMcpConfig", I: j.glW, O: j.o9t, kind: _t.MethodKind.Unary }, getEffectiveMcpConfigForUser: { name: "GetEffectiveMcpConfigForUser", I: j.trz, O: j.J43, kind: _t.MethodKind.Unary }, getAvailableMcpServers: { name: "GetAvailableMcpServers", I: j.J$f, O: j.Bw0, kind: _t.MethodKind.Unary }, getMcpServerUsageSummary: { name: "GetMcpServerUsageSummary", I: j.YVG, O: j.czg, kind: _t.MethodKind.Unary }, setMcpConfig: { name: "SetMcpConfig", I: j.mK6, O: j.EZs, kind: _t.MethodKind.Unary }, updateUserDefaultMcpSettings: { name: "UpdateUserDefaultMcpSettings", I: j.osn, O: j.Acq, kind: _t.MethodKind.Unary }, markMcpServersSeen: { name: "MarkMcpServersSeen", I: j.umz, O: j.Mdf, kind: _t.MethodKind.Unary }, storeMcpOAuthToken: { name: "StoreMcpOAuthToken", I: j.vg1, O: j.dWE, kind: _t.MethodKind.Unary }, getMcpOAuthTokens: { name: "GetMcpOAuthTokens", I: j.h3R, O: j.bhd, kind: _t.MethodKind.Unary }, listSandMcpTools: { name: "ListSandMcpTools", I: j.Hrg, O: j.ZbR, kind: _t.MethodKind.Unary }, previewTeamMcpTools: { name: "PreviewTeamMcpTools", I: j.wCe, O: j.Q87, kind: _t.MethodKind.Unary }, executeSandMcpTool: { name: "ExecuteSandMcpTool", I: j.BCh, O: j.xPw, kind: _t.MethodKind.Unary }, readSandMcpResource: { name: "ReadSandMcpResource", I: j.cOC, O: j.wu6, kind: _t.MethodKind.Unary }, classifySandAutoReview: { name: "ClassifySandAutoReview", I: j.jaI, O: j.lSE, kind: _t.MethodKind.Unary }, recordSandAuditEvents: { name: "RecordSandAuditEvents", I: j.b7M, O: j.J$G, kind: _t.MethodKind.Unary }, mcpOAuthRefreshLockBegin: { name: "McpOAuthRefreshLockBegin", I: j.yoJ, O: j.mIz, kind: _t.MethodKind.Unary }, mcpOAuthRefreshLockRelease: { name: "McpOAuthRefreshLockRelease", I: j.iCJ, O: j.sZ0, kind: _t.MethodKind.Unary }, deleteMcpOAuthToken: { name: "DeleteMcpOAuthToken", I: j.f8d, O: j.pO3, kind: _t.MethodKind.Unary }, validateMcpOAuthTokens: { name: "ValidateMcpOAuthTokens", I: j.jQX, O: j.ANG, kind: _t.MethodKind.Unary }, checkHttpMcpStatus: { name: "CheckHttpMcpStatus", I: j.esH, O: j.A3J, kind: _t.MethodKind.Unary }, storeMcpOAuthPendingState: { name: "StoreMcpOAuthPendingState", I: j._tH, O: j.IeM, kind: _t.MethodKind.Unary }, getMcpOAuthPendingState: { name: "GetMcpOAuthPendingState", I: j.RSA, O: j.veH, kind: _t.MethodKind.Unary }, renameMcpOAuthAccount: { name: "RenameMcpOAuthAccount", I: j.kX, O: j.qon, kind: _t.MethodKind.Unary }, deleteMcpOAuthAccount: { name: "DeleteMcpOAuthAccount", I: j.Bg_, O: j.nEl, kind: _t.MethodKind.Unary }, completeMcpOAuth: { name: "CompleteMcpOAuth", I: j.Ag, O: j.qdS, kind: _t.MethodKind.Unary }, getPluginMcpConfig: { name: "GetPluginMcpConfig", I: j.RTM, O: j.v90, kind: _t.MethodKind.Unary }, batchGetPluginMcpConfig: { name: "BatchGetPluginMcpConfig", I: j.XRL, O: j.Jxy, kind: _t.MethodKind.Unary }, addMcpServersFromPlugin: { name: "AddMcpServersFromPlugin", I: j.awl, O: j.GG3, kind: _t.MethodKind.Unary }, moveUserMcpServerToTeam: { name: "MoveUserMcpServerToTeam", I: j.Jfv, O: j.FcC, kind: _t.MethodKind.Unary }, getTeamMcpPlacementDefault: { name: "GetTeamMcpPlacementDefault", I: j.dXJ, O: j.D5E, kind: _t.MethodKind.Unary }, updateTeamMcpPlacementDefault: { name: "UpdateTeamMcpPlacementDefault", I: j.eEB, O: j.yEd, kind: _t.MethodKind.Unary }, migrateTeamMcpServersToDefaultMarketplace: { name: "MigrateTeamMcpServersToDefaultMarketplace", I: j.dLd, O: j.lWb, kind: _t.MethodKind.Unary }, probeMcpUrl: { name: "ProbeMcpUrl", I: j.due, O: j.BpA, kind: _t.MethodKind.Unary }, createTeamWithFreeTrial: { name: "CreateTeamWithFreeTrial", I: j.LAq, O: j.x2A, kind: _t.MethodKind.Unary }, createTeamWithOrg: { name: "CreateTeamWithOrg", I: j.BlC, O: j.Dd7, kind: _t.MethodKind.Unary }, getTeamHasValidPaymentMethod: { name: "GetTeamHasValidPaymentMethod", I: j.MrA, O: j.gJp, kind: _t.MethodKind.Unary }, getTeamPrivacyModeForced: { name: "GetTeamPrivacyModeForced", I: j.lKh, O: j.rsP, kind: _t.MethodKind.Unary }, switchTeamPrivacyMode: { name: "SwitchTeamPrivacyMode", I: j.SmK, O: j.kjp, kind: _t.MethodKind.Unary }, updateFastRequests: { name: "UpdateFastRequests", I: j.rjZ, O: j.FFm, kind: _t.MethodKind.Unary }, getFastRequests: { name: "GetFastRequests", I: j.iSm, O: j.aUJ, kind: _t.MethodKind.Unary }, getDownloadLink: { name: "GetDownloadLink", I: j.Upy, O: j.AlS, kind: _t.MethodKind.Unary }, getCliDownloadUrl: { name: "GetCliDownloadUrl", I: j.Xhp, O: j.JRd, kind: _t.MethodKind.Unary }, getSsoConfigurationLinks: { name: "GetSsoConfigurationLinks", I: j._$o, O: j.Opj, kind: _t.MethodKind.Unary }, getScimConfigurationLinks: { name: "GetScimConfigurationLinks", I: j.n$I, O: j.fMg, kind: _t.MethodKind.Unary }, setAdminOnlyUsagePricing: { name: "SetAdminOnlyUsagePricing", I: j.SAF, O: j.Ix8, kind: _t.MethodKind.Unary }, getYearlyUpgradeEligibility: { name: "GetYearlyUpgradeEligibility", I: j.DLp, O: j.R$$, kind: _t.MethodKind.Unary }, upgradeToYearly: { name: "UpgradeToYearly", I: j.bBp, O: j.rk2, kind: _t.MethodKind.Unary }, getEnterpriseCTAEligibility: { name: "GetEnterpriseCTAEligibility", I: j.i6G, O: j.i0P, kind: _t.MethodKind.Unary }, getUsageBasedPremiumRequests: { name: "GetUsageBasedPremiumRequests", I: j.nDb, O: j.n8L, kind: _t.MethodKind.Unary }, setUsageBasedPremiumRequests: { name: "SetUsageBasedPremiumRequests", I: j.ZU_, O: j.X8H, kind: _t.MethodKind.Unary }, getReferrals: { name: "GetReferrals", I: j.Gch, O: j.gBX, kind: _t.MethodKind.Unary }, getReferralCodes: { name: "GetReferralCodes", I: j.bT6, O: j.D2n, kind: _t.MethodKind.Unary }, createP2PReferralLink: { name: "CreateP2PReferralLink", I: j.bhY, O: j.XEQ, kind: _t.MethodKind.Unary }, getP2PReferralStatus: { name: "GetP2PReferralStatus", I: j.pGh, O: j.XWY, kind: _t.MethodKind.Unary }, sendP2PReferralInvites: { name: "SendP2PReferralInvites", I: j.ZKX, O: j.tZb, kind: _t.MethodKind.Unary }, getP2PReferralHistory: { name: "GetP2PReferralHistory", I: j.EcQ, O: j.nd7, kind: _t.MethodKind.Unary }, checkReferralAllowlist: { name: "CheckReferralAllowlist", I: j.ukN, O: j.cRU, kind: _t.MethodKind.Unary }, checkReferralCode: { name: "CheckReferralCode", I: j.MRM, O: j.wb2, kind: _t.MethodKind.Unary }, redeemGiftCode: { name: "RedeemGiftCode", I: j.ziV, O: j.lme, kind: _t.MethodKind.Unary }, getEventCodeInfo: { name: "GetEventCodeInfo", I: j.RiQ, O: j.XUY, kind: _t.MethodKind.Unary }, redeemEventCode: { name: "RedeemEventCode", I: j.VF8, O: j.Djf, kind: _t.MethodKind.Unary }, getTeamRepos: { name: "GetTeamRepos", I: j.aYW, O: j.k1F, kind: _t.MethodKind.Unary }, getTeamReposOrEmptyIfNotInTeam: { name: "GetTeamReposOrEmptyIfNotInTeam", I: j.aYW, O: j.k1F, kind: _t.MethodKind.Unary }, getTeamRules: { name: "GetTeamRules", I: j.yds, O: j.KZ$, kind: _t.MethodKind.Unary }, createTeamRule: { name: "CreateTeamRule", I: j.J7F, O: j.vZv, kind: _t.MethodKind.Unary }, updateTeamRule: { name: "UpdateTeamRule", I: j.qEG, O: j.CMB, kind: _t.MethodKind.Unary }, deleteTeamRule: { name: "DeleteTeamRule", I: j.Ch8, O: j.uzD, kind: _t.MethodKind.Unary }, getTeamGroupRules: { name: "GetTeamGroupRules", I: j.vdM, O: j.Xu9, kind: _t.MethodKind.Unary }, createTeamGroupRule: { name: "CreateTeamGroupRule", I: j.WxI, O: j.AkX, kind: _t.MethodKind.Unary }, updateTeamGroupRule: { name: "UpdateTeamGroupRule", I: j.dpZ, O: j.Lxb, kind: _t.MethodKind.Unary }, deleteTeamGroupRule: { name: "DeleteTeamGroupRule", I: j.lIO, O: j.jqE, kind: _t.MethodKind.Unary }, getTeamHooks: { name: "GetTeamHooks", I: j.$kg, O: j.PtB, kind: _t.MethodKind.Unary }, createTeamHook: { name: "CreateTeamHook", I: j.wT7, O: j.a4I, kind: _t.MethodKind.Unary }, updateTeamHook: { name: "UpdateTeamHook", I: j.TeW, O: j.$lk, kind: _t.MethodKind.Unary }, deleteTeamHook: { name: "DeleteTeamHook", I: j.x4u, O: j.FNs, kind: _t.MethodKind.Unary }, getTeamCommands: { name: "GetTeamCommands", I: j.XDt, O: j.lzR, kind: _t.MethodKind.Unary }, createTeamCommand: { name: "CreateTeamCommand", I: j.Ctq, O: j.CXw, kind: _t.MethodKind.Unary }, updateTeamCommand: { name: "UpdateTeamCommand", I: j.XQ_, O: j.DZr, kind: _t.MethodKind.Unary }, deleteTeamCommand: { name: "DeleteTeamCommand", I: j.xo6, O: j.atP, kind: _t.MethodKind.Unary }, getGlobalCommands: { name: "GetGlobalCommands", I: j.YSR, O: j.rL_, kind: _t.MethodKind.Unary }, getRepoSlashCommands: { name: "GetRepoSlashCommands", I: j.LM4, O: j.hcQ, kind: _t.MethodKind.Unary }, getBackgroundComposerSlashCommands: { name: "GetBackgroundComposerSlashCommands", I: j.T1q, O: j.RNi, kind: _t.MethodKind.Unary }, getCloudAgentPluginsSnapshot: { name: "GetCloudAgentPluginsSnapshot", I: j.G24, O: j.gNl, kind: _t.MethodKind.Unary }, getBugbotTeamRules: { name: "GetBugbotTeamRules", I: j.N8K, O: j.RP_, kind: _t.MethodKind.Unary }, createBugbotTeamRule: { name: "CreateBugbotTeamRule", I: j.CHh, O: j.GL9, kind: _t.MethodKind.Unary }, updateBugbotTeamRule: { name: "UpdateBugbotTeamRule", I: j.rtb, O: j.v0c, kind: _t.MethodKind.Unary }, deleteBugbotTeamRule: { name: "DeleteBugbotTeamRule", I: j.pj7, O: j.rP9, kind: _t.MethodKind.Unary }, getBugbotLearnedRules: { name: "GetBugbotLearnedRules", I: j.hp9, O: j.z7W, kind: _t.MethodKind.Unary }, updateBugbotLearnedRule: { name: "UpdateBugbotLearnedRule", I: j.BIT, O: j.Xmf, kind: _t.MethodKind.Unary }, deleteBugbotLearnedRule: { name: "DeleteBugbotLearnedRule", I: j.hnR, O: j.Ld4, kind: _t.MethodKind.Unary }, createBugbotManualRepositoryRule: { name: "CreateBugbotManualRepositoryRule", I: j.Bdx, O: j.Zk6, kind: _t.MethodKind.Unary }, getBugbotManualRepositoryRules: { name: "GetBugbotManualRepositoryRules", I: j.qF$, O: j.azW, kind: _t.MethodKind.Unary }, updateBugbotManualRepositoryRule: { name: "UpdateBugbotManualRepositoryRule", I: j.UBx, O: j.ead, kind: _t.MethodKind.Unary }, deleteBugbotManualRepositoryRule: { name: "DeleteBugbotManualRepositoryRule", I: j.ONG, O: j.YYN, kind: _t.MethodKind.Unary }, runDiamondToBugbotMigration: { name: "RunDiamondToBugbotMigration", I: j.rb7, O: j.DkK, kind: _t.MethodKind.Unary }, getBugbotRuleAnalytics: { name: "GetBugbotRuleAnalytics", I: j.lvI, O: j.RK5, kind: _t.MethodKind.Unary }, getBugbotRuleById: { name: "GetBugbotRuleById", I: j.TOm, O: j.tkD, kind: _t.MethodKind.Unary }, createTeamRepo: { name: "CreateTeamRepo", I: j.J4c, O: j.fCO, kind: _t.MethodKind.Unary }, deleteTeamRepo: { name: "DeleteTeamRepo", I: j.m0x, O: j.Cw0, kind: _t.MethodKind.Unary }, addRepoPattern: { name: "AddRepoPattern", I: j.pji, O: j.D3c, kind: _t.MethodKind.Unary }, removeRepoPattern: { name: "RemoveRepoPattern", I: j.MEU, O: j.U0s, kind: _t.MethodKind.Unary }, setTeamRepoType: { name: "SetTeamRepoType", I: j.HeY, O: j.V_5, kind: _t.MethodKind.Unary }, getTeamAdminSettings: { name: "GetTeamAdminSettings", I: j.Byz, O: j.V5U, kind: _t.MethodKind.Unary }, getTeamAdminSettingsOrEmptyIfNotInTeam: { name: "GetTeamAdminSettingsOrEmptyIfNotInTeam", I: j.Byz, O: j.V5U, kind: _t.MethodKind.Unary }, getBaseTeamAdminSettings: { name: "GetBaseTeamAdminSettings", I: j.Qrr, O: j.V5U, kind: _t.MethodKind.Unary }, getTeamOriginDisabled: { name: "GetTeamOriginDisabled", I: j.NES, O: j.Fj9, kind: _t.MethodKind.Unary }, updateTeamAdminSettings: { name: "UpdateTeamAdminSettings", I: j.sCz, O: j.aP5, kind: _t.MethodKind.Unary }, getTeamCustomerTelemetryDestinations: { name: "GetTeamCustomerTelemetryDestinations", I: j.n$w, O: j.R9K, kind: _t.MethodKind.Unary }, createTeamCustomerTelemetryDestination: { name: "CreateTeamCustomerTelemetryDestination", I: j.qxp, O: j.uts, kind: _t.MethodKind.Unary }, updateTeamCustomerTelemetryDestination: { name: "UpdateTeamCustomerTelemetryDestination", I: j.LJ3, O: j.Hen, kind: _t.MethodKind.Unary }, deleteTeamCustomerTelemetryDestination: { name: "DeleteTeamCustomerTelemetryDestination", I: j.t1u, O: j.rFi, kind: _t.MethodKind.Unary }, testTeamCustomerTelemetryDestinationConnection: { name: "TestTeamCustomerTelemetryDestinationConnection", I: j.ybE, O: j.YiF, kind: _t.MethodKind.Unary }, getTeamCustomerTelemetryDestinationHealth: { name: "GetTeamCustomerTelemetryDestinationHealth", I: j.mD_, O: j.wGo, kind: _t.MethodKind.Unary }, getTeamCustomerTelemetryContentExportOptIn: { name: "GetTeamCustomerTelemetryContentExportOptIn", I: j.LWe, O: j.F8Y, kind: _t.MethodKind.Unary }, updateTeamCustomerTelemetryContentExportOptIn: { name: "UpdateTeamCustomerTelemetryContentExportOptIn", I: j.UvX, O: j.G8P, kind: _t.MethodKind.Unary }, getTeamInferenceHookConfig: { name: "GetTeamInferenceHookConfig", I: j.TB_, O: j.nE8, kind: _t.MethodKind.Unary }, updateTeamInferenceHookConfig: { name: "UpdateTeamInferenceHookConfig", I: j.qJd, O: j.IIB, kind: _t.MethodKind.Unary }, rotateTeamInferenceHookSigningSecret: { name: "RotateTeamInferenceHookSigningSecret", I: j.B8P, O: j.HQR, kind: _t.MethodKind.Unary }, getTeamInferenceHookHealth: { name: "GetTeamInferenceHookHealth", I: j.lax, O: j.rM7, kind: _t.MethodKind.Unary }, resetTeamInferenceHookBreaker: { name: "ResetTeamInferenceHookBreaker", I: j._dj, O: j.Mob, kind: _t.MethodKind.Unary }, getTeamLlmGatewayCredentialStatus: { name: "GetTeamLlmGatewayCredentialStatus", I: j.v8R, O: j.dsv, kind: _t.MethodKind.Unary }, setTeamLlmGatewayCredential: { name: "SetTeamLlmGatewayCredential", I: j.JQv, O: j.LQe, kind: _t.MethodKind.Unary }, replaceTeamLlmGatewayCredential: { name: "ReplaceTeamLlmGatewayCredential", I: j.Bwq, O: j.nUL, kind: _t.MethodKind.Unary }, clearTeamLlmGatewayCredential: { name: "ClearTeamLlmGatewayCredential", I: j.uBx, O: j._rf, kind: _t.MethodKind.Unary }, updateTeamLlmGatewayModelDiscovery: { name: "UpdateTeamLlmGatewayModelDiscovery", I: j.i_X, O: j.wBS, kind: _t.MethodKind.Unary }, setTeamNoZdrModelConsent: { name: "SetTeamNoZdrModelConsent", I: j.HOq, O: j.xEn, kind: _t.MethodKind.Unary }, setOrganizationNoZdrModelConsent: { name: "SetOrganizationNoZdrModelConsent", I: j.xO$, O: j.b07, kind: _t.MethodKind.Unary }, getOrganizationOnDemandSpendDisabled: { name: "GetOrganizationOnDemandSpendDisabled", I: j.Twg, O: j.$H2, kind: _t.MethodKind.Unary }, setOrganizationOnDemandSpendDisabled: { name: "SetOrganizationOnDemandSpendDisabled", I: j.zYy, O: j.dwD, kind: _t.MethodKind.Unary }, getOrganizationCreditRequestButtonHidden: { name: "GetOrganizationCreditRequestButtonHidden", I: j.jIe, O: j.JEj, kind: _t.MethodKind.Unary }, setOrganizationCreditRequestButtonHidden: { name: "SetOrganizationCreditRequestButtonHidden", I: j.v_8, O: j.VgQ, kind: _t.MethodKind.Unary }, getOrganizationSsoJitAutoEnrollment: { name: "GetOrganizationSsoJitAutoEnrollment", I: j._v$, O: j.yj0, kind: _t.MethodKind.Unary }, setOrganizationSsoJitAutoEnrollment: { name: "SetOrganizationSsoJitAutoEnrollment", I: j.yjV, O: j.c4k, kind: _t.MethodKind.Unary }, getTeamSsoJitAutoEnrollment: { name: "GetTeamSsoJitAutoEnrollment", I: j.WsN, O: j.Afl, kind: _t.MethodKind.Unary }, setTeamSsoJitAutoEnrollment: { name: "SetTeamSsoJitAutoEnrollment", I: j.O8H, O: j.wDw, kind: _t.MethodKind.Unary }, getOrganizationRemoteControlSettings: { name: "GetOrganizationRemoteControlSettings", I: j.ZPB, O: j.vfT, kind: _t.MethodKind.Unary }, updateOrganizationRemoteControlSettings: { name: "UpdateOrganizationRemoteControlSettings", I: j.AL, O: j.EDv, kind: _t.MethodKind.Unary }, setUserNoZdrModelConsent: { name: "SetUserNoZdrModelConsent", I: j.hk4, O: j.ZpC, kind: _t.MethodKind.Unary }, setTeamMemberNoZdrModelConsent: { name: "SetTeamMemberNoZdrModelConsent", I: j.npU, O: j.PGd, kind: _t.MethodKind.Unary }, getNoZdrModelConsentStatus: { name: "GetNoZdrModelConsentStatus", I: j.Udp, O: j._am, kind: _t.MethodKind.Unary }, updateTeamInviteLinkTTLSetting: { name: "UpdateTeamInviteLinkTTLSetting", I: j.Lr1, O: j.Bpu, kind: _t.MethodKind.Unary }, updateTeamMemberInviteSetting: { name: "UpdateTeamMemberInviteSetting", I: j.tdz, O: j.N4Y, kind: _t.MethodKind.Unary }, updateTeamDefaultMemberBillingTier: { name: "UpdateTeamDefaultMemberBillingTier", I: j.gPk, O: j.wZY, kind: _t.MethodKind.Unary }, updateTeamSandOnboardingCompleted: { name: "UpdateTeamSandOnboardingCompleted", I: j.s9W, O: j.sZP, kind: _t.MethodKind.Unary }, updateTeamSandSetupChecklistItem: { name: "UpdateTeamSandSetupChecklistItem", I: j.aQI, O: j.sHw, kind: _t.MethodKind.Unary }, markTeamSandOnboardingSeen: { name: "MarkTeamSandOnboardingSeen", I: j.mNt, O: j.mnS, kind: _t.MethodKind.Unary }, getTeamGrokBotEligibleUserIds: { name: "GetTeamGrokBotEligibleUserIds", I: j.R$Q, O: j.LRw, kind: _t.MethodKind.Unary }, sendTeamSandOnboardingInvites: { name: "SendTeamSandOnboardingInvites", I: j.u$0, O: j.CrU, kind: _t.MethodKind.Unary }, getProtectedGitScopes: { name: "GetProtectedGitScopes", I: j.TXH, O: j.P_k, kind: _t.MethodKind.Unary }, createProtectedGitScope: { name: "CreateProtectedGitScope", I: j.IW3, O: j.wmn, kind: _t.MethodKind.Unary }, deleteProtectedGitScope: { name: "DeleteProtectedGitScope", I: j.tE7, O: j.R1c, kind: _t.MethodKind.Unary }, createTeamFreeTrialCode: { name: "CreateTeamFreeTrialCode", I: j.Qx5, O: j.M3e, kind: _t.MethodKind.Unary }, createTeamFreeTrialCodeInternal: { name: "CreateTeamFreeTrialCodeInternal", I: j.Qx5, O: j.M3e, kind: _t.MethodKind.Unary }, setTrialSpendLimitOverrideInternal: { name: "SetTrialSpendLimitOverrideInternal", I: j.IHq, O: j.qks, kind: _t.MethodKind.Unary }, getTrialSpendLimitInternal: { name: "GetTrialSpendLimitInternal", I: j.yIy, O: j.C2K, kind: _t.MethodKind.Unary }, getOrganizationEnterpriseTrialExtendContextInternal: { name: "GetOrganizationEnterpriseTrialExtendContextInternal", I: j.Yeg, O: j.eBq, kind: _t.MethodKind.Unary }, applyOrganizationEnterpriseTrialEndInternal: { name: "ApplyOrganizationEnterpriseTrialEndInternal", I: j.mi9, O: j.Izq, kind: _t.MethodKind.Unary }, getXaiUserUsageSnapshot: { name: "GetXaiUserUsageSnapshot", I: j.WAE, O: j.qSX, kind: _t.MethodKind.Unary }, getXaiUserPrepaidBilling: { name: "GetXaiUserPrepaidBilling", I: j.b4u, O: j.$H_, kind: _t.MethodKind.Unary }, setXaiUserPrepaidAutoTopUp: { name: "SetXaiUserPrepaidAutoTopUp", I: j.h3x, O: j.D9s, kind: _t.MethodKind.Unary }, getXaiCommerceBearerToken: { name: "GetXaiCommerceBearerToken", I: j.hD2, O: j.ZoF, kind: _t.MethodKind.Unary }, getTeamOffboardingConfigInternal: { name: "GetTeamOffboardingConfigInternal", I: j.XRZ, O: j.pv1, kind: _t.MethodKind.Unary }, updateTeamOffboardingConfigInternal: { name: "UpdateTeamOffboardingConfigInternal", I: j.AKO, O: j.C7S, kind: _t.MethodKind.Unary }, createTeamCreditGrantInternal: { name: "CreateTeamCreditGrantInternal", I: j.BEg, O: j.Rz7, kind: _t.MethodKind.Unary }, listTeamCreditGrantsInternal: { name: "ListTeamCreditGrantsInternal", I: j.CAc, O: j.GYk, kind: _t.MethodKind.Unary }, createTeamsTrialV2ReferralCode: { name: "CreateTeamsTrialV2ReferralCode", I: j.cj_, O: j.SyP, kind: _t.MethodKind.Unary }, getTeamAnalytics: { name: "GetTeamAnalytics", I: j.FFq, O: j.LLA, kind: _t.MethodKind.Unary }, getUserAnalytics: { name: "GetUserAnalytics", I: j.dcL, O: j.n24, kind: _t.MethodKind.Unary }, getTeamRawData: { name: "GetTeamRawData", I: j.hUh, O: j.dZ5, kind: _t.MethodKind.Unary }, getClientUsageData: { name: "GetClientUsageData", I: j.u_0, O: j.gHM, kind: _t.MethodKind.Unary }, getCurrentPeriodUsage: { name: "GetCurrentPeriodUsage", I: j.Dl4, O: j.bO3, kind: _t.MethodKind.Unary }, useSandBankedReset: { name: "UseSandBankedReset", I: j.RMZ, O: j.rWQ, kind: _t.MethodKind.Unary }, listSandBankedResets: { name: "ListSandBankedResets", I: j.pE6, O: j.pfj, kind: _t.MethodKind.Unary }, getSandUsageStatus: { name: "GetSandUsageStatus", I: j.rAv, O: j.Pb2, kind: _t.MethodKind.Unary }, startSandTrial: { name: "StartSandTrial", I: j.Go7, O: j.yuQ, kind: _t.MethodKind.Unary }, claimSandTrialWithDeviceAttestation: { name: "ClaimSandTrialWithDeviceAttestation", I: j.yLo, O: j.KzH, kind: _t.MethodKind.Unary }, resetSandTrialDeviceAttestation: { name: "ResetSandTrialDeviceAttestation", I: j.BXh, O: j.nnW, kind: _t.MethodKind.Unary }, isEligibleForSandTrial: { name: "IsEligibleForSandTrial", I: j.wfW, O: j.q4z, kind: _t.MethodKind.Unary }, getSandTrialClaimStatus: { name: "GetSandTrialClaimStatus", I: j.i0h, O: j._OB, kind: _t.MethodKind.Unary }, cancelSandTrial: { name: "CancelSandTrial", I: j.qu8, O: j.of0, kind: _t.MethodKind.Unary }, getSandAccessStatus: { name: "GetSandAccessStatus", I: j.o0l, O: j.Wxf, kind: _t.MethodKind.Unary }, getSandMarketingIdentity: { name: "GetSandMarketingIdentity", I: j.M2r, O: j.Grk, kind: _t.MethodKind.Unary }, registerSandMachine: { name: "RegisterSandMachine", I: j.aQT, O: j.sHN, kind: _t.MethodKind.Unary }, listSandMachines: { name: "ListSandMachines", I: j.yXx, O: j.k0O, kind: _t.MethodKind.Unary }, updateSandMachineLabel: { name: "UpdateSandMachineLabel", I: j.wJL, O: j.IVI, kind: _t.MethodKind.Unary }, updateSandMachineLocalToolPermission: { name: "UpdateSandMachineLocalToolPermission", I: j.s1d, O: j.eq0, kind: _t.MethodKind.Unary }, getSandMachineMessagesEnabled: { name: "GetSandMachineMessagesEnabled", I: j.cnC, O: j.cJ_, kind: _t.MethodKind.Unary }, updateSandMachineMessagesEnabled: { name: "UpdateSandMachineMessagesEnabled", I: j.dAp, O: j.nox, kind: _t.MethodKind.Unary }, removeSandMachine: { name: "RemoveSandMachine", I: j.hEd, O: j.VbN, kind: _t.MethodKind.Unary }, requestSandTeamAccess: { name: "RequestSandTeamAccess", I: j.y_T, O: j.yGu, kind: _t.MethodKind.Unary }, listPendingUserAccessRequests: { name: "ListPendingUserAccessRequests", I: j._YH, O: j._i_, kind: _t.MethodKind.Unary }, getUsageSignalsProjectionSnapshot: { name: "GetUsageSignalsProjectionSnapshot", I: Rt, O: Mt, kind: _t.MethodKind.Unary }, getPlanInfo: { name: "GetPlanInfo", I: j.V4G, O: j.noV, kind: _t.MethodKind.Unary }, verifyAppleTransaction: { name: "VerifyAppleTransaction", I: j.Ll_, O: j.rKG, kind: _t.MethodKind.Unary }, verifyGooglePlayPurchase: { name: "VerifyGooglePlayPurchase", I: j.rG0, O: j.lWs, kind: _t.MethodKind.Unary }, getGooglePlayBillingAccountId: { name: "GetGooglePlayBillingAccountId", I: j.wcH, O: j.cQ7, kind: _t.MethodKind.Unary }, inventoryGooglePlayPurchaseTokens: { name: "InventoryGooglePlayPurchaseTokens", I: j.WCl, O: j.GYE, kind: _t.MethodKind.Unary }, restoreCommerceStorePurchases: { name: "RestoreCommerceStorePurchases", I: j.Eg0, O: j.c6S, kind: _t.MethodKind.Unary }, inspectGooglePlaySubscriptionInternal: { name: "InspectGooglePlaySubscriptionInternal", I: j.NNb, O: j.Zm8, kind: _t.MethodKind.Unary }, inspectGooglePlayTransactionsInternal: { name: "InspectGooglePlayTransactionsInternal", I: j.B5B, O: j.bh8, kind: _t.MethodKind.Unary }, getCursorReviewEntitlement: { name: "GetCursorReviewEntitlement", I: j.pmk, O: j.LwP, kind: _t.MethodKind.Unary }, searchOriginReviewPeople: { name: "SearchOriginReviewPeople", I: j.PBS, O: j.JZ6, kind: _t.MethodKind.Unary }, getOriginReviewPreferences: { name: "GetOriginReviewPreferences", I: j.q9G, O: j.MQS, kind: _t.MethodKind.Unary }, setOriginReviewPreferences: { name: "SetOriginReviewPreferences", I: j.CLT, O: j.q5s, kind: _t.MethodKind.Unary }, listRepoLearnedRules: { name: "ListRepoLearnedRules", I: Ot, O: Bt, kind: _t.MethodKind.Unary }, removeRepoLearnedRule: { name: "RemoveRepoLearnedRule", I: qt, O: Nt, kind: _t.MethodKind.Unary }, getUsageLimitPolicyStatus: { name: "GetUsageLimitPolicyStatus", I: j.qhH, O: j.I_D, kind: _t.MethodKind.Unary }, getUsageLimitStatusAndActiveGrants: { name: "GetUsageLimitStatusAndActiveGrants", I: j.S9t, O: j._ty, kind: _t.MethodKind.Unary }, getCreditGrantsBalance: { name: "GetCreditGrantsBalance", I: j.MjR, O: j.CkD, kind: _t.MethodKind.Unary }, getClientVisibleCreditGrants: { name: "GetClientVisibleCreditGrants", I: j.V8e, O: j.Pqo, kind: _t.MethodKind.Unary }, getAdvancedAnalyticsEnabled: { name: "GetAdvancedAnalyticsEnabled", I: j.P1T, O: j.VxL, kind: _t.MethodKind.Unary }, getTokenUsage: { name: "GetTokenUsage", I: j.SK5, O: j.I9h, kind: _t.MethodKind.Unary }, validateBedrockIamRole: { name: "ValidateBedrockIamRole", I: j.Z8m, O: j.mzW, kind: _t.MethodKind.Unary }, getTeamSpend: { name: "GetTeamSpend", I: j.$Sc, O: j.R2E, kind: _t.MethodKind.Unary }, getTeamSeatUpgradeRecommendations: { name: "GetTeamSeatUpgradeRecommendations", I: j.Y$T, O: j.o35, kind: _t.MethodKind.Unary }, getPendingSeatTierUpgradeRequests: { name: "GetPendingSeatTierUpgradeRequests", I: j.qWG, O: j.YJY, kind: _t.MethodKind.Unary }, getTeamSeatCapacity: { name: "GetTeamSeatCapacity", I: j.e6P, O: j.SuY, kind: _t.MethodKind.Unary }, startMergedTeamSeatChange: { name: "StartMergedTeamSeatChange", I: j.IFS, O: j.UpX, kind: _t.MethodKind.Unary }, changeMergedTeamSeat: { name: "ChangeMergedTeamSeat", I: j._1N, O: j.yPU, kind: _t.MethodKind.Unary }, getMergedTeamSeatChanges: { name: "GetMergedTeamSeatChanges", I: j.JOC, O: j.DOt, kind: _t.MethodKind.Unary }, getXaiTeamPlanManagement: { name: "GetXaiTeamPlanManagement", I: j.jq0, O: j.f1t, kind: _t.MethodKind.Unary }, changeXaiTeamPlan: { name: "ChangeXaiTeamPlan", I: j.IV$, O: j.yW5, kind: _t.MethodKind.Unary }, getCurrentBillingCycle: { name: "GetCurrentBillingCycle", I: j.yI7, O: j.cTj, kind: _t.MethodKind.Unary }, getMonthlyBillingCycle: { name: "GetMonthlyBillingCycle", I: j.iaP, O: j.KuC, kind: _t.MethodKind.Unary }, getBugbotSettings: { name: "GetBugbotSettings", I: j.Ioc, O: j.GNy, kind: _t.MethodKind.Unary }, getBugbotAnalyticsV2: { name: "GetBugbotAnalyticsV2", I: j.JWI, O: j.NXG, kind: _t.MethodKind.Unary }, getBugBotPRAnalytics: { name: "GetBugBotPRAnalytics", I: j.Jns, O: j.Fkp, kind: _t.MethodKind.Unary }, getGithubInstallations: { name: "GetGithubInstallations", I: j.kcC, O: j.UYU, kind: _t.MethodKind.Unary }, getGithubInstallationTenantGrants: { name: "GetGithubInstallationTenantGrants", I: j.Owv, O: j.yq_, kind: _t.MethodKind.Unary }, grantGithubInstallationTenant: { name: "GrantGithubInstallationTenant", I: j.hvD, O: j.p84, kind: _t.MethodKind.Unary }, revokeGithubInstallationTenant: { name: "RevokeGithubInstallationTenant", I: j.Rig, O: j.neC, kind: _t.MethodKind.Unary }, getBugbotSuggestedRepos: { name: "GetBugbotSuggestedRepos", I: j.nTs, O: j.ZJ6, kind: _t.MethodKind.Unary }, getScmConnectionStatus: { name: "GetScmConnectionStatus", I: j.Lys, O: j.VS9, kind: _t.MethodKind.Unary }, getGithubRepoAccessStatus: { name: "GetGithubRepoAccessStatus", I: j.XT3, O: j.HyV, kind: _t.MethodKind.Unary }, getScmConnectionStatuses: { name: "GetScmConnectionStatuses", I: j.tJ9, O: j.lIF, kind: _t.MethodKind.Unary }, getInstallationRepos: { name: "GetInstallationRepos", I: j.L$Y, O: j.ljc, kind: _t.MethodKind.Unary }, fetchAllInstallationRepos: { name: "FetchAllInstallationRepos", I: j.UfC, O: j.gJO, kind: _t.MethodKind.Unary }, getInstallationGithubUsers: { name: "GetInstallationGithubUsers", I: j.toQ, O: j.P4d, kind: _t.MethodKind.Unary }, getUserAdminOrganizations: { name: "GetUserAdminOrganizations", I: j._V, O: j.KLX, kind: _t.MethodKind.Unary }, getTeamGithubUsers: { name: "GetTeamGithubUsers", I: j.yk8, O: j.ecN, kind: _t.MethodKind.Unary }, addGithubUsersToTeam: { name: "AddGithubUsersToTeam", I: j.gMg, O: j.yD7, kind: _t.MethodKind.Unary }, resolveGithubIdentities: { name: "ResolveGithubIdentities", I: j.lpG, O: j.LlT, kind: _t.MethodKind.Unary }, getUserPullRequests: { name: "GetUserPullRequests", I: j.Mq, O: j.M2w, kind: _t.MethodKind.Unary }, getUserReviewRequests: { name: "GetUserReviewRequests", I: j.Jjk, O: j.$DS, kind: _t.MethodKind.Unary }, getPullRequestForBranch: { name: "GetPullRequestForBranch", I: j.xGV, O: j.$EH, kind: _t.MethodKind.Unary }, updateGithubRepoSettings: { name: "UpdateGithubRepoSettings", I: j.NZ_, O: j.l8$, kind: _t.MethodKind.Unary }, updateGithubInstallationSettings: { name: "UpdateGithubInstallationSettings", I: j.J9i, O: j.T1W, kind: _t.MethodKind.Unary }, updateAllGithubRepoSettings: { name: "UpdateAllGithubRepoSettings", I: j.CNn, O: j.QOJ, kind: _t.MethodKind.Unary }, updateGithubInstallationTeamScope: { name: "UpdateGithubInstallationTeamScope", I: j.hxG, O: j.Lre, kind: _t.MethodKind.Unary }, updateSelfGithubAllowlist: { name: "UpdateSelfGithubAllowlist", I: j.pNh, O: j.vTx, kind: _t.MethodKind.Unary }, getTeamBugbotSettings: { name: "GetTeamBugbotSettings", I: j.LRN, O: j.Lg7, kind: _t.MethodKind.Unary }, updateTeamBugbotSettings: { name: "UpdateTeamBugbotSettings", I: j.sNl, O: j.Mlf, kind: _t.MethodKind.Unary }, migrateTeamBugbotToUsageBasedBilling: { name: "MigrateTeamBugbotToUsageBasedBilling", I: j.LIs, O: j.lW1, kind: _t.MethodKind.Unary }, getBugbotMergedPrScanSummary: { name: "GetBugbotMergedPrScanSummary", I: j.wS2, O: j.sWv, kind: _t.MethodKind.Unary }, getBugbotMode: { name: "GetBugbotMode", I: j.sVJ, O: j.YHh, kind: _t.MethodKind.Unary }, updateBugbotMode: { name: "UpdateBugbotMode", I: j.NQP, O: j.LK4, kind: _t.MethodKind.Unary }, getBugBotProUserMode: { name: "GetBugBotProUserMode", I: j.meH, O: j.ym8, kind: _t.MethodKind.Unary }, updateBugBotProUserMode: { name: "UpdateBugBotProUserMode", I: j.dj5, O: j.PFI, kind: _t.MethodKind.Unary }, getBugbotUserSettings: { name: "GetBugbotUserSettings", I: j.BHX, O: j.DLm, kind: _t.MethodKind.Unary }, updateBugbotUserSettings: { name: "UpdateBugbotUserSettings", I: j.QWx, O: j.Qsl, kind: _t.MethodKind.Unary }, getFullSelfDrivingUserSettings: { name: "GetFullSelfDrivingUserSettings", I: j.y$W, O: j.Ik0, kind: _t.MethodKind.Unary }, updateFullSelfDrivingUserSettings: { name: "UpdateFullSelfDrivingUserSettings", I: j.DrI, O: j.BRX, kind: _t.MethodKind.Unary }, listFullSelfDrivingRepoSettings: { name: "ListFullSelfDrivingRepoSettings", I: j.LdP, O: j.l1H, kind: _t.MethodKind.Unary }, setFullSelfDrivingRepoEnabled: { name: "SetFullSelfDrivingRepoEnabled", I: j.V6X, O: j.tJA, kind: _t.MethodKind.Unary }, getFullSelfDrivingTeamSettings: { name: "GetFullSelfDrivingTeamSettings", I: j.i20, O: j.M7A, kind: _t.MethodKind.Unary }, updateFullSelfDrivingTeamSettings: { name: "UpdateFullSelfDrivingTeamSettings", I: j.zuZ, O: j.Dfi, kind: _t.MethodKind.Unary }, listFullSelfDrivingTeamRepoSettings: { name: "ListFullSelfDrivingTeamRepoSettings", I: j.CXL, O: j.ybH, kind: _t.MethodKind.Unary }, setFullSelfDrivingTeamRepoEnabled: { name: "SetFullSelfDrivingTeamRepoEnabled", I: j.YBO, O: j.Soi, kind: _t.MethodKind.Unary }, listFullSelfDrivingActiveAgents: { name: "ListFullSelfDrivingActiveAgents", I: j.KHx, O: j.GPC, kind: _t.MethodKind.Unary }, listFullSelfDrivingTeamActiveAgents: { name: "ListFullSelfDrivingTeamActiveAgents", I: j.Hrn, O: j.pxf, kind: _t.MethodKind.Unary }, updateFullSelfDrivingPrConfig: { name: "UpdateFullSelfDrivingPrConfig", I: j.DWR, O: j.pGw, kind: _t.MethodKind.Unary }, getBugBotProUserSettings: { name: "GetBugBotProUserSettings", I: j.I6A, O: j.aBI, kind: _t.MethodKind.Unary }, updateBugBotProUserSettings: { name: "UpdateBugBotProUserSettings", I: j.hSh, O: j.P8G, kind: _t.MethodKind.Unary }, migrateBugBotProUserToUsageBasedBilling: { name: "MigrateBugBotProUserToUsageBasedBilling", I: j.E3$, O: j.MPB, kind: _t.MethodKind.Unary }, getGlassEarlyPreviewEnrollment: { name: "GetGlassEarlyPreviewEnrollment", I: j.Ryr, O: j.FPs, kind: _t.MethodKind.Unary }, enrollInGlassEarlyPreview: { name: "EnrollInGlassEarlyPreview", I: j.Cul, O: j.Y9v, kind: _t.MethodKind.Unary }, unenrollFromGlassEarlyPreview: { name: "UnenrollFromGlassEarlyPreview", I: j.UHP, O: j.UBK, kind: _t.MethodKind.Unary }, recordBugbotDeeplinkEvent: { name: "RecordBugbotDeeplinkEvent", I: j.sDp, O: j.Uj4, kind: _t.MethodKind.Unary }, recordBugbotDeeplinkEventUnauthenticated: { name: "RecordBugbotDeeplinkEventUnauthenticated", I: j.sDp, O: j.Uj4, kind: _t.MethodKind.Unary }, revokeBugBotLicenses: { name: "RevokeBugBotLicenses", I: j.H5R, O: j.Tcn, kind: _t.MethodKind.Unary }, revokeUserBugbotLicense: { name: "RevokeUserBugbotLicense", I: j.Z$K, O: j.FOE, kind: _t.MethodKind.Unary }, startBugbotBackfillLearning: { name: "StartBugbotBackfillLearning", I: j.NS4, O: j.xx6, kind: _t.MethodKind.Unary }, getBugbotBackfillStatus: { name: "GetBugbotBackfillStatus", I: j.Nux, O: j.hxv, kind: _t.MethodKind.Unary }, setSlackAuth: { name: "SetSlackAuth", I: j.WKP, O: j.mys, kind: _t.MethodKind.Unary }, getSlackTeamSettings: { name: "GetSlackTeamSettings", I: j.YAE, O: j.YyD, kind: _t.MethodKind.Unary }, updateSlackTeamSettings: { name: "UpdateSlackTeamSettings", I: j.HFD, O: j.Fr4, kind: _t.MethodKind.Unary }, getSlackSettings: { name: "GetSlackSettings", I: j.tcG, O: j.no, kind: _t.MethodKind.Unary }, getSlackModelOptions: { name: "GetSlackModelOptions", I: j.lym, O: j.ddf, kind: _t.MethodKind.Unary }, getSlackInstallUrl: { name: "GetSlackInstallUrl", I: j.St, O: j.QKj, kind: _t.MethodKind.Unary }, getSlackInstallUrlPublic: { name: "GetSlackInstallUrlPublic", I: j.Xoe, O: j.ZoZ, kind: _t.MethodKind.Unary }, getSlackInstallUrlPublicWithUserScopes: { name: "GetSlackInstallUrlPublicWithUserScopes", I: j.Vqj, O: j.pty, kind: _t.MethodKind.Unary }, getFilteredUsageEvents: { name: "GetFilteredUsageEvents", I: j.FHO, O: j.TpA, kind: _t.MethodKind.Unary }, getAggregatedUsageEvents: { name: "GetAggregatedUsageEvents", I: j.l4W, O: j.JZY, kind: _t.MethodKind.Unary }, getAuditLogs: { name: "GetAuditLogs", I: j.Mq$, O: j.mTp, kind: _t.MethodKind.Unary }, getOrganizationAuditLogs: { name: "GetOrganizationAuditLogs", I: j.dIX, O: j.fIK, kind: _t.MethodKind.Unary }, listTeamDataExports: { name: "ListTeamDataExports", I: j.qC3, O: j.wHV, kind: _t.MethodKind.Unary }, createTeamDataExportDownloadUrl: { name: "CreateTeamDataExportDownloadUrl", I: j.eW$, O: j.eQk, kind: _t.MethodKind.Unary }, getUserPrivacyMode: { name: "GetUserPrivacyMode", I: j.KoG, O: j.mWk, kind: _t.MethodKind.Unary }, setUserPrivacyMode: { name: "SetUserPrivacyMode", I: j.eWf, O: j.Wig, kind: _t.MethodKind.Unary }, webAcknowledgeGracePeriodDisclaimer: { name: "WebAcknowledgeGracePeriodDisclaimer", I: j.sRz, O: j.mEf, kind: _t.MethodKind.Unary }, skipPrivacyModeGracePeriod: { name: "SkipPrivacyModeGracePeriod", I: j.jOB, O: j.dGI, kind: _t.MethodKind.Unary }, needsPrivacyModeMigration: { name: "NeedsPrivacyModeMigration", I: j.WWi, O: j.U5k, kind: _t.MethodKind.Unary }, updateTeamPrivacyModeMigrationOptOut: { name: "UpdateTeamPrivacyModeMigrationOptOut", I: j.es2, O: j.CKk, kind: _t.MethodKind.Unary }, shareConversation: { name: "ShareConversation", I: j.kHo, O: j.QhI, kind: _t.MethodKind.Unary }, getSharedConversation: { name: "GetSharedConversation", I: j.MyJ, O: j.mvz, kind: _t.MethodKind.Unary }, getPublicSharedConversation: { name: "GetPublicSharedConversation", I: j.ROu, O: j.xfP, kind: _t.MethodKind.Unary }, listSharedConversations: { name: "ListSharedConversations", I: j.R28, O: j.nMz, kind: _t.MethodKind.Unary }, deleteSharedConversation: { name: "DeleteSharedConversation", I: j.FUz, O: j.Z36, kind: _t.MethodKind.Unary }, updateSharedConversationVisibility: { name: "UpdateSharedConversationVisibility", I: j.NPW, O: j.JAL, kind: _t.MethodKind.Unary }, shareCanvas: { name: "ShareCanvas", I: j.tE3, O: j.lL7, kind: _t.MethodKind.Unary }, getSharedCanvas: { name: "GetSharedCanvas", I: j.JF, O: j.B2G, kind: _t.MethodKind.Unary }, getPublicSharedCanvas: { name: "GetPublicSharedCanvas", I: j.aE$, O: j.OCF, kind: _t.MethodKind.Unary }, listSharedCanvases: { name: "ListSharedCanvases", I: j.xos, O: j.xTz, kind: _t.MethodKind.Unary }, deleteSharedCanvas: { name: "DeleteSharedCanvas", I: j.shm, O: j._Md, kind: _t.MethodKind.Unary }, lookupSharedCanvasByKey: { name: "LookupSharedCanvasByKey", I: j.ptC, O: j.$bK, kind: _t.MethodKind.Unary }, listUserCanvases: { name: "ListUserCanvases", I: j.P_7, O: j.H1r, kind: _t.MethodKind.Unary }, getCanvasMetadata: { name: "GetCanvasMetadata", I: j.zyT, O: j.hcJ, kind: _t.MethodKind.Unary }, getCanvasPayload: { name: "GetCanvasPayload", I: j.gDx, O: j.K6f, kind: _t.MethodKind.Unary }, getDocumentPayload: { name: "GetDocumentPayload", I: j.r$m, O: j.ZB$, kind: _t.MethodKind.Unary }, setCanvasVisibility: { name: "SetCanvasVisibility", I: j.uKx, O: j._w7, kind: _t.MethodKind.Unary }, deleteCanvas: { name: "DeleteCanvas", I: j.J5_, O: j.xQH, kind: _t.MethodKind.Unary }, getTeamSharedConversationSettings: { name: "GetTeamSharedConversationSettings", I: j._b6, O: j.yTb, kind: _t.MethodKind.Unary }, updateTeamSharedConversationSettings: { name: "UpdateTeamSharedConversationSettings", I: j.TIw, O: j.rRJ, kind: _t.MethodKind.Unary }, getTeamSharedCanvasSettings: { name: "GetTeamSharedCanvasSettings", I: j.LWu, O: j.fZU, kind: _t.MethodKind.Unary }, updateTeamSharedCanvasSettings: { name: "UpdateTeamSharedCanvasSettings", I: j.iXm, O: j.k8Q, kind: _t.MethodKind.Unary }, getTeamProjectsSettings: { name: "GetTeamProjectsSettings", I: j.aJE, O: j.SRO, kind: _t.MethodKind.Unary }, updateTeamProjectsSettings: { name: "UpdateTeamProjectsSettings", I: j.xvP, O: j.nhk, kind: _t.MethodKind.Unary }, getTeamPublicProfileSettings: { name: "GetTeamPublicProfileSettings", I: j.K$9, O: j.yVw, kind: _t.MethodKind.Unary }, updateTeamPublicProfileSettings: { name: "UpdateTeamPublicProfileSettings", I: j.VIg, O: j.lxh, kind: _t.MethodKind.Unary }, getTeamSandShareBotExportSettings: { name: "GetTeamSandShareBotExportSettings", I: j.Goo, O: j.yut, kind: _t.MethodKind.Unary }, updateTeamSandShareBotExportSettings: { name: "UpdateTeamSandShareBotExportSettings", I: j.D$M, O: j.zGC, kind: _t.MethodKind.Unary }, updateTeamGrokBotCapabilities: { name: "UpdateTeamGrokBotCapabilities", I: j.ybT, O: j.y$h, kind: _t.MethodKind.Unary }, getTeamSandHibernatedOwnerVmTerminationSettings: { name: "GetTeamSandHibernatedOwnerVmTerminationSettings", I: j.W2U, O: j.iSU, kind: _t.MethodKind.Unary }, updateTeamSandHibernatedOwnerVmTerminationSettings: { name: "UpdateTeamSandHibernatedOwnerVmTerminationSettings", I: j.BMC, O: j.jK0, kind: _t.MethodKind.Unary }, listTeamGrokBotDefaultAgents: { name: "ListTeamGrokBotDefaultAgents", I: j.S8L, O: j.ayS, kind: _t.MethodKind.Unary }, setTeamGrokBotDefaultAudience: { name: "SetTeamGrokBotDefaultAudience", I: j.GP0, O: j.qN3, kind: _t.MethodKind.Unary }, getTeamSmartAutoSettings: { name: "GetTeamSmartAutoSettings", I: j.WjG, O: j.OBF, kind: _t.MethodKind.Unary }, updateTeamSmartAutoSettings: { name: "UpdateTeamSmartAutoSettings", I: j.Xtc, O: j.bIg, kind: _t.MethodKind.Unary }, getTeamPromptCachingSettings: { name: "GetTeamPromptCachingSettings", I: j.H1L, O: j.P8_, kind: _t.MethodKind.Unary }, updateTeamPromptCachingSettings: { name: "UpdateTeamPromptCachingSettings", I: j.omy, O: j.wgB, kind: _t.MethodKind.Unary }, resetTeamAgentRunModeToAutoReview: { name: "ResetTeamAgentRunModeToAutoReview", I: j.L2q, O: j.Jiu, kind: _t.MethodKind.Unary }, getUserSmartAutoSettings: { name: "GetUserSmartAutoSettings", I: j.c$y, O: j.cHR, kind: _t.MethodKind.Unary }, updateUserSmartAutoSettings: { name: "UpdateUserSmartAutoSettings", I: j.ZVF, O: j.zri, kind: _t.MethodKind.Unary }, getTeamBackgroundAgentSettings: { name: "GetTeamBackgroundAgentSettings", I: j.fQ, O: j.bNb, kind: _t.MethodKind.Unary }, updateTeamBackgroundAgentSettings: { name: "UpdateTeamBackgroundAgentSettings", I: j.QRZ, O: j.Iz5, kind: _t.MethodKind.Unary }, getRepoSourcePreference: { name: "GetRepoSourcePreference", I: j.qc8, O: j.Mtj, kind: _t.MethodKind.Unary }, updateUserRepoSourcePreference: { name: "UpdateUserRepoSourcePreference", I: j.G6u, O: j._E_, kind: _t.MethodKind.Unary }, updateTeamRepoSourcePreference: { name: "UpdateTeamRepoSourcePreference", I: j.gez, O: j.MYI, kind: _t.MethodKind.Unary }, resolvePrCreationForge: { name: "ResolvePrCreationForge", I: j.OaX, O: j.MX_, kind: _t.MethodKind.Unary }, revokeTeamInviteLink: { name: "RevokeTeamInviteLink", I: j.yKm, O: j.mmN, kind: _t.MethodKind.Unary }, listTeamInviteLinks: { name: "ListTeamInviteLinks", I: j.$WS, O: j.Rc0, kind: _t.MethodKind.Unary }, listTeamPendingInvites: { name: "ListTeamPendingInvites", I: j.E7o, O: j.MLT, kind: _t.MethodKind.Unary }, revokeTeamPendingInvite: { name: "RevokeTeamPendingInvite", I: j.BaU, O: j.tRU, kind: _t.MethodKind.Unary }, resendTeamPendingInvite: { name: "ResendTeamPendingInvite", I: j.Y53, O: j.Ip9, kind: _t.MethodKind.Unary }, updateUserName: { name: "UpdateUserName", I: j.bjc, O: j.lLB, kind: _t.MethodKind.Unary }, uploadUserProfilePicture: { name: "UploadUserProfilePicture", I: j.J3_, O: j.jzZ, kind: _t.MethodKind.Unary }, updateUserProfilePicture: { name: "UpdateUserProfilePicture", I: j.hLX, O: j.lYk, kind: _t.MethodKind.Unary }, listInvoices: { name: "ListInvoices", I: j.WXZ, O: j.YeS, kind: _t.MethodKind.Unary }, listUnifiedInvoices: { name: "ListUnifiedInvoices", I: j.sAj, O: j.eD4, kind: _t.MethodKind.Unary }, listBlockingCheckoutInvoices: { name: "ListBlockingCheckoutInvoices", I: j.hHX, O: j.D7O, kind: _t.MethodKind.Unary }, listPayableTeamInvoices: { name: "ListPayableTeamInvoices", I: j.Z_i, O: j.jiy, kind: _t.MethodKind.Unary }, listUnpaidUsageInvoices: { name: "ListUnpaidUsageInvoices", I: j.QBt, O: j.SQ3, kind: _t.MethodKind.Unary }, getRemainingRefunds: { name: "GetRemainingRefunds", I: j.Xdv, O: j.hzd, kind: _t.MethodKind.Unary }, getServiceAccountSpendLimit: { name: "GetServiceAccountSpendLimit", I: j.f_r, O: j.bJx, kind: _t.MethodKind.Unary }, setServiceAccountSpendLimit: { name: "SetServiceAccountSpendLimit", I: j.bkm, O: j.Vau, kind: _t.MethodKind.Unary }, setUserHardLimit: { name: "SetUserHardLimit", I: j.H16, O: j.Tw9, kind: _t.MethodKind.Unary }, setUserMonthlyLimit: { name: "SetUserMonthlyLimit", I: j.lEN, O: j.Z1Y, kind: _t.MethodKind.Unary }, toggleMarketingEmailOpt: { name: "ToggleMarketingEmailOpt", I: j.bQB, O: j.Z6E, kind: _t.MethodKind.Unary }, getMarketingEmailOpt: { name: "GetMarketingEmailOpt", I: j.fZH, O: j.hBo, kind: _t.MethodKind.Unary }, getGlobalLeaderboardOptIn: { name: "GetGlobalLeaderboardOptIn", I: j.A9x, O: j.u01, kind: _t.MethodKind.Unary }, setGlobalLeaderboardOptIn: { name: "SetGlobalLeaderboardOptIn", I: j.AB3, O: j.IXm, kind: _t.MethodKind.Unary }, createTeamApiKey: { name: "CreateTeamApiKey", I: j._C2, O: j.Mdl, kind: _t.MethodKind.Unary }, revokeTeamApiKey: { name: "RevokeTeamApiKey", I: j._Rg, O: j.ubM, kind: _t.MethodKind.Unary }, listTeamApiKeys: { name: "ListTeamApiKeys", I: j.dMs, O: j.Tsf, kind: _t.MethodKind.Unary }, listGrokApiKeys: { name: "ListGrokApiKeys", I: j.V5S, O: j.lc$, kind: _t.MethodKind.Unary }, getPersonalGrokApiKeyTeam: { name: "GetPersonalGrokApiKeyTeam", I: j.jWS, O: j.J41, kind: _t.MethodKind.Unary }, listGrokApiKeyAclOptions: { name: "ListGrokApiKeyAclOptions", I: j.yeW, O: j.ANW, kind: _t.MethodKind.Unary }, getGrokApiKeyAccess: { name: "GetGrokApiKeyAccess", I: j.Muw, O: j.OFG, kind: _t.MethodKind.Unary }, getGrokApiKeyPropagation: { name: "GetGrokApiKeyPropagation", I: j.yED, O: j._2X, kind: _t.MethodKind.Unary }, createGrokApiKey: { name: "CreateGrokApiKey", I: j.m5V, O: j.MSw, kind: _t.MethodKind.Unary }, deleteGrokApiKey: { name: "DeleteGrokApiKey", I: j.nG3, O: j.T78, kind: _t.MethodKind.Unary }, updateGrokApiKey: { name: "UpdateGrokApiKey", I: j.laE, O: j.TCm, kind: _t.MethodKind.Unary }, setGrokApiKeyAcls: { name: "SetGrokApiKeyAcls", I: j.RDD, O: j.lmF, kind: _t.MethodKind.Unary }, rotateGrokApiKey: { name: "RotateGrokApiKey", I: j.pTw, O: j.DZc, kind: _t.MethodKind.Unary }, getGrokAdminFeatureControls: { name: "GetGrokAdminFeatureControls", I: j._NS, O: j.eTm, kind: _t.MethodKind.Unary }, updateGrokAdminFeatureControls: { name: "UpdateGrokAdminFeatureControls", I: j.XKz, O: j.H7s, kind: _t.MethodKind.Unary }, getGrokUserDataControls: { name: "GetGrokUserDataControls", I: j.eNQ, O: j.efP, kind: _t.MethodKind.Unary }, updateGrokUserDataControls: { name: "UpdateGrokUserDataControls", I: j.$yS, O: j.XrM, kind: _t.MethodKind.Unary }, getGrokAdminTeamSettings: { name: "GetGrokAdminTeamSettings", I: j.SuU, O: j.yms, kind: _t.MethodKind.Unary }, updateGrokAdminTeamSettings: { name: "UpdateGrokAdminTeamSettings", I: j.rCL, O: j.nbk, kind: _t.MethodKind.Unary }, getGrokAdminOrganizationControls: { name: "GetGrokAdminOrganizationControls", I: j.lxC, O: j.nxh, kind: _t.MethodKind.Unary }, updateGrokAdminOrganizationControls: { name: "UpdateGrokAdminOrganizationControls", I: j.GKl, O: j.GIW, kind: _t.MethodKind.Unary }, listGrokAdminGuardrails: { name: "ListGrokAdminGuardrails", I: j.OOr, O: j.iwb, kind: _t.MethodKind.Unary }, getGrokAdminGuardrail: { name: "GetGrokAdminGuardrail", I: j.nxD, O: j.Hux, kind: _t.MethodKind.Unary }, createGrokAdminGuardrail: { name: "CreateGrokAdminGuardrail", I: j.ZN0, O: j.DdV, kind: _t.MethodKind.Unary }, updateGrokAdminGuardrail: { name: "UpdateGrokAdminGuardrail", I: j.uuc, O: j.eo$, kind: _t.MethodKind.Unary }, removeGrokAdminGuardrail: { name: "RemoveGrokAdminGuardrail", I: j.RJA, O: j.$ph, kind: _t.MethodKind.Unary }, setGrokAdminGuardrailActive: { name: "SetGrokAdminGuardrailActive", I: j.dhe, O: j.PjD, kind: _t.MethodKind.Unary }, deactivateGrokAdminGuardrail: { name: "DeactivateGrokAdminGuardrail", I: j.rhR, O: j.RVM, kind: _t.MethodKind.Unary }, getGrokAdminBlockedUrls: { name: "GetGrokAdminBlockedUrls", I: j.ovf, O: j._oI, kind: _t.MethodKind.Unary }, uploadGrokAdminBlockedUrls: { name: "UploadGrokAdminBlockedUrls", I: j.fRF, O: j.TkS, kind: _t.MethodKind.Unary }, deleteGrokAdminBlockedUrls: { name: "DeleteGrokAdminBlockedUrls", I: j.nc6, O: j.Hdd, kind: _t.MethodKind.Unary }, listGrokAdminOnboardingPrompts: { name: "ListGrokAdminOnboardingPrompts", I: j.cl3, O: j.cf9, kind: _t.MethodKind.Unary }, createGrokAdminOnboardingPrompt: { name: "CreateGrokAdminOnboardingPrompt", I: j.byf, O: j.vXf, kind: _t.MethodKind.Unary }, updateGrokAdminOnboardingPrompt: { name: "UpdateGrokAdminOnboardingPrompt", I: j.wOq, O: j.M2G, kind: _t.MethodKind.Unary }, deleteGrokAdminOnboardingPrompt: { name: "DeleteGrokAdminOnboardingPrompt", I: j.aW7, O: j._yh, kind: _t.MethodKind.Unary }, listXaiManagementApiKeys: { name: "ListXaiManagementApiKeys", I: j.ruw, O: j.xAe, kind: _t.MethodKind.Unary }, createXaiManagementApiKey: { name: "CreateXaiManagementApiKey", I: j.azC, O: j.cSQ, kind: _t.MethodKind.Unary }, updateXaiManagementApiKey: { name: "UpdateXaiManagementApiKey", I: j.dR6, O: j.P1K, kind: _t.MethodKind.Unary }, deleteXaiManagementApiKey: { name: "DeleteXaiManagementApiKey", I: j.hSg, O: j.rGX, kind: _t.MethodKind.Unary }, listXaiManagementApiKeyEndpointAcls: { name: "ListXaiManagementApiKeyEndpointAcls", I: j._Br, O: j.ylO, kind: _t.MethodKind.Unary }, createOrganizationApiKey: { name: "CreateOrganizationApiKey", I: j.KFb, O: j.WRW, kind: _t.MethodKind.Unary }, revokeOrganizationApiKey: { name: "RevokeOrganizationApiKey", I: j.W6d, O: j.G0c, kind: _t.MethodKind.Unary }, listOrganizationApiKeys: { name: "ListOrganizationApiKeys", I: j.bC9, O: j.Xtv, kind: _t.MethodKind.Unary }, createAutomationWebhookApiKey: { name: "CreateAutomationWebhookApiKey", I: j.nL6, O: j.rEt, kind: _t.MethodKind.Unary }, createTeamServiceAccount: { name: "CreateTeamServiceAccount", I: j.HYO, O: j.loJ, kind: _t.MethodKind.Unary }, listTeamServiceAccounts: { name: "ListTeamServiceAccounts", I: j.SMM, O: j.AhK, kind: _t.MethodKind.Unary }, deleteTeamServiceAccount: { name: "DeleteTeamServiceAccount", I: j.IaO, O: j.WLQ, kind: _t.MethodKind.Unary }, archiveTeamServiceAccount: { name: "ArchiveTeamServiceAccount", I: j.X2v, O: j.B6m, kind: _t.MethodKind.Unary }, updateTeamServiceAccount: { name: "UpdateTeamServiceAccount", I: j.Ca8, O: j.m6C, kind: _t.MethodKind.Unary }, suspendTeamServiceAccount: { name: "SuspendTeamServiceAccount", I: Ut, O: Lt, kind: _t.MethodKind.Unary }, resumeTeamServiceAccount: { name: "ResumeTeamServiceAccount", I: $t, O: jt, kind: _t.MethodKind.Unary }, rotateServiceAccountApiKey: { name: "RotateServiceAccountApiKey", I: j.OCy, O: j.sJP, kind: _t.MethodKind.Unary }, getTeamRepositoriesForServiceAccountScope: { name: "GetTeamRepositoriesForServiceAccountScope", I: j.EwB, O: j.Eav, kind: _t.MethodKind.Unary }, updateServiceAccountRepoScope: { name: "UpdateServiceAccountRepoScope", I: j.RZf, O: j.d6k, kind: _t.MethodKind.Unary }, createUserApiKey: { name: "CreateUserApiKey", I: j.cEg, O: j.Aa9, kind: _t.MethodKind.Unary }, revokeUserApiKey: { name: "RevokeUserApiKey", I: j.GOY, O: j.yQR, kind: _t.MethodKind.Unary }, listUserApiKeys: { name: "ListUserApiKeys", I: j.juR, O: j.ZCs, kind: _t.MethodKind.Unary }, createServiceToken: { name: "CreateServiceToken", I: j.C10, O: j.e7b, kind: _t.MethodKind.Unary }, listServiceTokens: { name: "ListServiceTokens", I: j.v0n, O: j.X1$, kind: _t.MethodKind.Unary }, updateServiceTokenPermissions: { name: "UpdateServiceTokenPermissions", I: j.Fo6, O: j.rA8, kind: _t.MethodKind.Unary }, revokeServiceToken: { name: "RevokeServiceToken", I: j.yYY, O: j.w$r, kind: _t.MethodKind.Unary }, rotateServiceToken: { name: "RotateServiceToken", I: j.Rbl, O: j.t8U, kind: _t.MethodKind.Unary }, confirmGithubInstallation: { name: "ConfirmGithubInstallation", I: j.tI8, O: j.xpT, kind: _t.MethodKind.Unary }, updateTeamName: { name: "UpdateTeamName", I: j.l5I, O: j.FsH, kind: _t.MethodKind.Unary }, updateTeamDashboardAnalyticsSetting: { name: "UpdateTeamDashboardAnalyticsSetting", I: j.CoZ, O: j.YZV, kind: _t.MethodKind.Unary }, updateTeamOriginSetting: { name: "UpdateTeamOriginSetting", I: j.YgU, O: j.G3W, kind: _t.MethodKind.Unary }, updateTeamScimRequireUserDirectorySetting: { name: "UpdateTeamScimRequireUserDirectorySetting", I: j.zul, O: j.L5U, kind: _t.MethodKind.Unary }, getTeamScimRequireUserDirectoryPreview: { name: "GetTeamScimRequireUserDirectoryPreview", I: j.Uto, O: j.EHd, kind: _t.MethodKind.Unary }, getEffectiveUserAgentStoreSkillsSettings: { name: "GetEffectiveUserAgentStoreSkillsSettings", I: j.hVj, O: j.b$E, kind: _t.MethodKind.Unary }, updateUserAgentStoreSkillsSettings: { name: "UpdateUserAgentStoreSkillsSettings", I: j.Vry, O: j.nNe, kind: _t.MethodKind.Unary }, getSlackUserSettings: { name: "GetSlackUserSettings", I: j.e0r, O: j.ewI, kind: _t.MethodKind.Unary }, updateSlackUserSettings: { name: "UpdateSlackUserSettings", I: j.F5_, O: j.Lt9, kind: _t.MethodKind.Unary }, getSlackRepoRoutingRules: { name: "GetSlackRepoRoutingRules", I: j.hE5, O: j.LGY, kind: _t.MethodKind.Unary }, createSlackRepoRoutingRule: { name: "CreateSlackRepoRoutingRule", I: j.EMn, O: j.QEY, kind: _t.MethodKind.Unary }, updateSlackRepoRoutingRule: { name: "UpdateSlackRepoRoutingRule", I: j.xcI, O: j.hbx, kind: _t.MethodKind.Unary }, deleteSlackRepoRoutingRule: { name: "DeleteSlackRepoRoutingRule", I: j.Bz7, O: j.Tfn, kind: _t.MethodKind.Unary }, getSlackDefaultWorkerRules: { name: "GetSlackDefaultWorkerRules", I: j.eOv, O: j.gpX, kind: _t.MethodKind.Unary }, setSlackDefaultWorkerRule: { name: "SetSlackDefaultWorkerRule", I: j.dn0, O: j.P7l, kind: _t.MethodKind.Unary }, deleteSlackDefaultWorkerRule: { name: "DeleteSlackDefaultWorkerRule", I: j.CGB, O: j.sHT, kind: _t.MethodKind.Unary }, isOnNewPricing: { name: "IsOnNewPricing", I: j.HxK, O: j.jAL, kind: _t.MethodKind.Unary }, getLinearAuthUrl: { name: "GetLinearAuthUrl", I: j._9N, O: j.wet, kind: _t.MethodKind.Unary }, connectLinearCallback: { name: "ConnectLinearCallback", I: j.wlK, O: j.Adp, kind: _t.MethodKind.Unary }, getMicrosoftTeamsLinkContext: { name: "GetMicrosoftTeamsLinkContext", I: j.vDB, O: j.bIf, kind: _t.MethodKind.Unary }, setMicrosoftTeamsAuth: { name: "SetMicrosoftTeamsAuth", I: j.ak0, O: j.YrR, kind: _t.MethodKind.Unary }, getLinearStatus: { name: "GetLinearStatus", I: j.xGO, O: j.zOq, kind: _t.MethodKind.Unary }, disconnectLinear: { name: "DisconnectLinear", I: j.Xqi, O: j.vXd, kind: _t.MethodKind.Unary }, getLinearTeams: { name: "GetLinearTeams", I: j.v5z, O: j.HMD, kind: _t.MethodKind.Unary }, getLinearSettings: { name: "GetLinearSettings", I: j.MFi, O: j.C0g, kind: _t.MethodKind.Unary }, updateLinearTeamSetting: { name: "UpdateLinearTeamSetting", I: j.$H8, O: j.XMd, kind: _t.MethodKind.Unary }, updateLinearProjectSetting: { name: "UpdateLinearProjectSetting", I: j.tJW, O: j.RYJ, kind: _t.MethodKind.Unary }, getLinearLabels: { name: "GetLinearLabels", I: j.a3w, O: j.eZU, kind: _t.MethodKind.Unary }, getLinearIssues: { name: "GetLinearIssues", I: j.PG$, O: j.bBu, kind: _t.MethodKind.Unary }, batchGetLinearIssueSummaries: { name: "BatchGetLinearIssueSummaries", I: j.aFD, O: j.W5r, kind: _t.MethodKind.Unary }, getXaiTeamLinkStatus: { name: "GetXaiTeamLinkStatus", I: j.$TS, O: j.$0p, kind: _t.MethodKind.Unary }, startXaiTeamLink: { name: "StartXaiTeamLink", I: j.ptw, O: j.zlM, kind: _t.MethodKind.Unary }, confirmXaiTeamLink: { name: "ConfirmXaiTeamLink", I: j.bWR, O: j.FQR, kind: _t.MethodKind.Unary }, cancelXaiTeamLinkProposal: { name: "CancelXaiTeamLinkProposal", I: j.pAq, O: j.LOM, kind: _t.MethodKind.Unary }, unlinkXaiTeam: { name: "UnlinkXaiTeam", I: j.GTA, O: j.ev7, kind: _t.MethodKind.Unary }, getXaiCursorTeamMergeStatus: { name: "GetXaiCursorTeamMergeStatus", I: j.GhV, O: j.XLd, kind: _t.MethodKind.Unary }, getXaiCursorTeamMembershipPreview: { name: "GetXaiCursorTeamMembershipPreview", I: j.R0Z, O: j.JNH, kind: _t.MethodKind.Unary }, updateXaiCursorTeamMemberRoles: { name: "UpdateXaiCursorTeamMemberRoles", I: j.XJ2, O: j.HcF, kind: _t.MethodKind.Unary }, startXaiCursorTeamMerge: { name: "StartXaiCursorTeamMerge", I: j.hoi, O: j.lhf, kind: _t.MethodKind.Unary }, getXaiCursorTeamMergeGrokTeams: { name: "GetXaiCursorTeamMergeGrokTeams", I: j.IPQ, O: j.Ood, kind: _t.MethodKind.Unary }, selectXaiCursorTeamMergeGrokTeam: { name: "SelectXaiCursorTeamMergeGrokTeam", I: j.TTI, O: j.pPp, kind: _t.MethodKind.Unary }, confirmXaiCursorTeamMerge: { name: "ConfirmXaiCursorTeamMerge", I: j.RqP, O: j.X2R, kind: _t.MethodKind.Unary }, prepareXaiCursorTeamMergeCheckout: { name: "PrepareXaiCursorTeamMergeCheckout", I: j.Ybi, O: j.kBz, kind: _t.MethodKind.Unary }, unprepareXaiCursorTeamMergeCheckout: { name: "UnprepareXaiCursorTeamMergeCheckout", I: j.xbn, O: j.jrF, kind: _t.MethodKind.Unary }, finalizeXaiCursorTeamMergeCheckout: { name: "FinalizeXaiCursorTeamMergeCheckout", I: j.hih, O: j.bCj, kind: _t.MethodKind.Unary }, ensureXaiCursorTeamForMerge: { name: "EnsureXaiCursorTeamForMerge", I: j._nC, O: j.kgP, kind: _t.MethodKind.Unary }, getXaiCursorTeamMergePrepaidPreview: { name: "GetXaiCursorTeamMergePrepaidPreview", I: j.AQb, O: j.aNf, kind: _t.MethodKind.Unary }, cancelXaiCursorTeamMergeProposal: { name: "CancelXaiCursorTeamMergeProposal", I: j.pX4, O: j.j9U, kind: _t.MethodKind.Unary }, transferXaiCredits: { name: "TransferXaiCredits", I: j.hDl, O: j.hWK, kind: _t.MethodKind.Unary }, getXaiCreditTransferStatus: { name: "GetXaiCreditTransferStatus", I: j.yq2, O: j.hWK, kind: _t.MethodKind.Unary }, listXaiCreditTransfers: { name: "ListXaiCreditTransfers", I: j.R_i, O: j.hN$, kind: _t.MethodKind.Unary }, getPagerDutyAuthUrl: { name: "GetPagerDutyAuthUrl", I: j.Ig_, O: j.Esv, kind: _t.MethodKind.Unary }, connectPagerDutyCallback: { name: "ConnectPagerDutyCallback", I: j.ecT, O: j.YdR, kind: _t.MethodKind.Unary }, getPagerDutyStatus: { name: "GetPagerDutyStatus", I: j.JmO, O: j.bUD, kind: _t.MethodKind.Unary }, getPagerDutyServices: { name: "GetPagerDutyServices", I: j.bo4, O: j.twU, kind: _t.MethodKind.Unary }, disconnectPagerDuty: { name: "DisconnectPagerDuty", I: j.dBq, O: j.VS, kind: _t.MethodKind.Unary }, getJiraInstallUrl: { name: "GetJiraInstallUrl", I: j.m8H, O: j.G4o, kind: _t.MethodKind.Unary }, linkJiraInstallation: { name: "LinkJiraInstallation", I: j.Uao, O: j.Gdv, kind: _t.MethodKind.Unary }, getJiraStatus: { name: "GetJiraStatus", I: j.CJ0, O: j.qZs, kind: _t.MethodKind.Unary }, listJiraInstallations: { name: "ListJiraInstallations", I: j.LuE, O: j.VG3, kind: _t.MethodKind.Unary }, getBitbucketForgeStatus: { name: "GetBitbucketForgeStatus", I: j.y90, O: j.YmN, kind: _t.MethodKind.Unary }, disconnectJira: { name: "DisconnectJira", I: j.KQv, O: j.S0I, kind: _t.MethodKind.Unary }, disconnectBitbucketForge: { name: "DisconnectBitbucketForge", I: j.I5D, O: j.e0h, kind: _t.MethodKind.Unary }, getJiraProjects: { name: "GetJiraProjects", I: j.k0s, O: j.EGh, kind: _t.MethodKind.Unary }, getJiraTeamSettings: { name: "GetJiraTeamSettings", I: j.WCk, O: j.CyC, kind: _t.MethodKind.Unary }, updateJiraTeamSettings: { name: "UpdateJiraTeamSettings", I: j.Fuf, O: j.HCj, kind: _t.MethodKind.Unary }, getJiraRoutingRules: { name: "GetJiraRoutingRules", I: j.XUt, O: j.ZU4, kind: _t.MethodKind.Unary }, createJiraRoutingRule: { name: "CreateJiraRoutingRule", I: j.OoP, O: j.gZI, kind: _t.MethodKind.Unary }, updateJiraRoutingRule: { name: "UpdateJiraRoutingRule", I: j.zFs, O: j.bQQ, kind: _t.MethodKind.Unary }, deleteJiraRoutingRule: { name: "DeleteJiraRoutingRule", I: j.XeB, O: j.zNr, kind: _t.MethodKind.Unary }, linkJiraUser: { name: "LinkJiraUser", I: j.DWb, O: j.Fi2, kind: _t.MethodKind.Unary }, listJiraUserLinks: { name: "ListJiraUserLinks", I: j.KaV, O: j.ySt, kind: _t.MethodKind.Unary }, unlinkJiraUser: { name: "UnlinkJiraUser", I: j.ceB, O: j.WXO, kind: _t.MethodKind.Unary }, deleteBedrockIamRole: { name: "DeleteBedrockIamRole", I: j.o0f, O: j.mTO, kind: _t.MethodKind.Unary }, unlinkSlackAccess: { name: "UnlinkSlackAccess", I: j.h0F, O: j.dTt, kind: _t.MethodKind.Unary }, listSlackConversations: { name: "ListSlackConversations", I: j.iHk, O: j.gsv, kind: _t.MethodKind.Unary }, listMicrosoftTeamsChannels: { name: "ListMicrosoftTeamsChannels", I: j.wLf, O: j.Sot, kind: _t.MethodKind.Unary }, getSlackConversationsByIds: { name: "GetSlackConversationsByIds", I: j.BaG, O: j.zYR, kind: _t.MethodKind.Unary }, logSlackbotAuthConversionFunnel: { name: "LogSlackbotAuthConversionFunnel", I: j.HOD, O: j.pQL, kind: _t.MethodKind.Unary }, logClickedConnectSlack: { name: "LogClickedConnectSlack", I: j.Not, O: j.T0x, kind: _t.MethodKind.Unary }, checkUserApiKeyAccess: { name: "CheckUserApiKeyAccess", I: j.QKN, O: j.wmq, kind: _t.MethodKind.Unary }, isAllowedFreeTrialUsage: { name: "IsAllowedFreeTrialUsage", I: j.p$r, O: j.Jag, kind: _t.MethodKind.Unary }, isNextSetupRunFree: { name: "IsNextSetupRunFree", I: j.vfb, O: j.$8m, kind: _t.MethodKind.Unary }, completedLinkSlackAccount: { name: "CompletedLinkSlackAccount", I: j.wm7, O: j.O$A, kind: _t.MethodKind.Unary }, notifyBugbotTeamAdmins: { name: "NotifyBugbotTeamAdmins", I: j.anf, O: j.WJW, kind: _t.MethodKind.Unary }, getAdminNotificationStatus: { name: "GetAdminNotificationStatus", I: j.gJU, O: j.mib, kind: _t.MethodKind.Unary }, optOutNewPricing: { name: "OptOutNewPricing", I: j.P4, O: j.HdK, kind: _t.MethodKind.Unary }, submitFeedback: { name: "SubmitFeedback", I: j.h5c, O: j.b9h, kind: _t.MethodKind.Unary }, submitFeedbackAnon: { name: "SubmitFeedbackAnon", I: j.h5c, O: j.b9h, kind: _t.MethodKind.Unary }, submitRepositoryProtectionClaim: { name: "SubmitRepositoryProtectionClaim", I: j.zuj, O: j.NMG, kind: _t.MethodKind.Unary }, activateRepositoryProtectionInvite: { name: "ActivateRepositoryProtectionInvite", I: j.bo5, O: j.xWW, kind: _t.MethodKind.Unary }, getActiveOffboardingBanner: { name: "GetActiveOffboardingBanner", I: j.pg$, O: j.fSY, kind: _t.MethodKind.Unary }, clientAction: { name: "ClientAction", I: j.H5i, O: j.zah, kind: _t.MethodKind.Unary }, listUsageAlerts: { name: "ListUsageAlerts", I: j.dUM, O: j.UB9, kind: _t.MethodKind.Unary }, createUsageAlerts: { name: "CreateUsageAlerts", I: j.Q1P, O: j.kJb, kind: _t.MethodKind.Unary }, deleteUsageAlerts: { name: "DeleteUsageAlerts", I: j.LME, O: j.rJY, kind: _t.MethodKind.Unary }, updateUsageAlerts: { name: "UpdateUsageAlerts", I: j.D3G, O: j.rew, kind: _t.MethodKind.Unary }, requestIndividualLimitsOptOut: { name: "RequestIndividualLimitsOptOut", I: j.JrS, O: j.HJo, kind: _t.MethodKind.Unary }, listMarketplacePlugins: { name: "ListMarketplacePlugins", I: j.ZMX, O: j.vEP, kind: _t.MethodKind.Unary }, listPublisherPublicPlugins: { name: "ListPublisherPublicPlugins", I: j.nMU, O: j.lqq, kind: _t.MethodKind.Unary }, getUserProfile: { name: "GetUserProfile", I: j.mH6, O: j.CZF, kind: _t.MethodKind.Unary }, updateUserProfile: { name: "UpdateUserProfile", I: j.LjR, O: j.Hoz, kind: _t.MethodKind.Unary }, claimUserProfileHandle: { name: "ClaimUserProfileHandle", I: j.iOH, O: j.g5C, kind: _t.MethodKind.Unary }, getPublicProfileByHandle: { name: "GetPublicProfileByHandle", I: j.dwF, O: j.t5n, kind: _t.MethodKind.Unary }, getViewableProfileByHandle: { name: "GetViewableProfileByHandle", I: j.hsE, O: j.vuk, kind: _t.MethodKind.Unary }, getTeamMemberProfileByHandle: { name: "GetTeamMemberProfileByHandle", I: j.jcw, O: j.X5_, kind: _t.MethodKind.Unary }, getPlugin: { name: "GetPlugin", I: j.vVx, O: j.fAb, kind: _t.MethodKind.Unary }, createPlugin: { name: "CreatePlugin", I: j.hzU, O: j.rfl, kind: _t.MethodKind.Unary }, updatePluginMcpConfig: { name: "UpdatePluginMcpConfig", I: j.oVF, O: j.GcM, kind: _t.MethodKind.Unary }, publishPlugin: { name: "PublishPlugin", I: j.qkO, O: j.YPJ, kind: _t.MethodKind.Unary }, unpublishPlugin: { name: "UnpublishPlugin", I: j.VJo, O: j.ZuH, kind: _t.MethodKind.Unary }, parseGitHubRepoForPlugins: { name: "ParseGitHubRepoForPlugins", I: j.ggh, O: j.nXe, kind: _t.MethodKind.Unary }, parsePluginPublisherRepoInternal: { name: "ParsePluginPublisherRepoInternal", I: j.VWM, O: j.HiH, kind: _t.MethodKind.Unary }, previewReindexPluginRepoInternal: { name: "PreviewReindexPluginRepoInternal", I: j.dOz, O: j.smL, kind: _t.MethodKind.Unary }, applyReindexPluginRepoInternal: { name: "ApplyReindexPluginRepoInternal", I: j.flJ, O: j.SZm, kind: _t.MethodKind.Unary }, previewMigrateReindexPluginRepoInternal: { name: "PreviewMigrateReindexPluginRepoInternal", I: j.Q66, O: j.b48, kind: _t.MethodKind.Unary }, applyMigrateReindexPluginRepoInternal: { name: "ApplyMigrateReindexPluginRepoInternal", I: j.GJd, O: j.LmS, kind: _t.MethodKind.Unary }, updateTeamMarketplaceOriginDistributionInternal: { name: "UpdateTeamMarketplaceOriginDistributionInternal", I: j.WFw, O: j.gqu, kind: _t.MethodKind.Unary }, getXaiEmailEligibilityInternal: { name: "GetXaiEmailEligibilityInternal", I: j.SCd, O: j.YDS, kind: _t.MethodKind.Unary }, createSupportImpersonationSessionInternal: { name: "CreateSupportImpersonationSessionInternal", I: j.Cbz, O: j.Gf$, kind: _t.MethodKind.Unary }, removeOrganizationMemberInternal: { name: "RemoveOrganizationMemberInternal", I: j.sw6, O: j.qVu, kind: _t.MethodKind.Unary }, submitPluginForApproval: { name: "SubmitPluginForApproval", I: j.vCC, O: j.D7h, kind: _t.MethodKind.Unary }, approvePlugin: { name: "ApprovePlugin", I: j.c2n, O: j.ISv, kind: _t.MethodKind.Unary }, rejectPlugin: { name: "RejectPlugin", I: j.WZo, O: j.oGE, kind: _t.MethodKind.Unary }, listUserPluginInstalls: { name: "ListUserPluginInstalls", I: j.OHt, O: j.UgB, kind: _t.MethodKind.Unary }, installUserPlugin: { name: "InstallUserPlugin", I: j.Bi3, O: j.jsr, kind: _t.MethodKind.Unary }, updateUserPluginInstall: { name: "UpdateUserPluginInstall", I: j.__V, O: j.c3q, kind: _t.MethodKind.Unary }, uninstallUserPlugin: { name: "UninstallUserPlugin", I: j.w66, O: j.Mmr, kind: _t.MethodKind.Unary }, getTeamPluginPopularity: { name: "GetTeamPluginPopularity", I: j.LGu, O: j.PnF, kind: _t.MethodKind.Unary }, getTeamPluginPrimitiveUsage: { name: "GetTeamPluginPrimitiveUsage", I: j.i9d, O: j.sev, kind: _t.MethodKind.Unary }, listTeamAvailableMarketplacePlugins: { name: "ListTeamAvailableMarketplacePlugins", I: j.$_i, O: j.B0l, kind: _t.MethodKind.Unary }, getTeamPinnedMarketplacePlugins: { name: "GetTeamPinnedMarketplacePlugins", I: j.ax8, O: j._lt, kind: _t.MethodKind.Unary }, updateTeamPinnedMarketplacePlugins: { name: "UpdateTeamPinnedMarketplacePlugins", I: j.hLv, O: j.VCH, kind: _t.MethodKind.Unary }, installTeamPlugin: { name: "InstallTeamPlugin", I: j.Jjf, O: j.hsS, kind: _t.MethodKind.Unary }, updateTeamPluginInstall: { name: "UpdateTeamPluginInstall", I: j.iRP, O: j.y13, kind: _t.MethodKind.Unary }, uninstallTeamPlugin: { name: "UninstallTeamPlugin", I: j.m, O: j.E3F, kind: _t.MethodKind.Unary }, getEffectiveUserPlugins: { name: "GetEffectiveUserPlugins", I: j.EwF, O: j.KhO, kind: _t.MethodKind.Unary }, resolvePluginsByRef: { name: "ResolvePluginsByRef", I: j.WvV, O: j.UgI, kind: _t.MethodKind.Unary }, listMarketplaces: { name: "ListMarketplaces", I: j.iPX, O: j.A8F, kind: _t.MethodKind.Unary }, addMarketplace: { name: "AddMarketplace", I: j.Y9_, O: j.CeW, kind: _t.MethodKind.Unary }, getOrCreateDefaultTeamMarketplace: { name: "GetOrCreateDefaultTeamMarketplace", I: j.q$3, O: j.mht, kind: _t.MethodKind.Unary }, updateMarketplace: { name: "UpdateMarketplace", I: j.UJO, O: j.Cel, kind: _t.MethodKind.Unary }, removeMarketplace: { name: "RemoveMarketplace", I: j.Bqo, O: j.PQd, kind: _t.MethodKind.Unary }, refreshMarketplace: { name: "RefreshMarketplace", I: j.YDo, O: j.cBR, kind: _t.MethodKind.Unary }, reindexAndApplyTeamMarketplaceChanges: { name: "ReindexAndApplyTeamMarketplaceChanges", I: j.BRM, O: j.loc, kind: _t.MethodKind.Unary }, registerMarketplaceAndPlugins: { name: "RegisterMarketplaceAndPlugins", I: j.Dxc, O: j.ZHm, kind: _t.MethodKind.Unary }, updateTeamMarketplaceConfig: { name: "UpdateTeamMarketplaceConfig", I: j.Vpq, O: j.vfz, kind: _t.MethodKind.Unary }, setTeamMarketplaceRepository: { name: "SetTeamMarketplaceRepository", I: j.kMn, O: j.YOY, kind: _t.MethodKind.Unary }, setMarketplaceOriginDistribution: { name: "SetMarketplaceOriginDistribution", I: j.xHb, O: j.fxk, kind: _t.MethodKind.Unary }, getMarketplaceOriginDistributionStatus: { name: "GetMarketplaceOriginDistributionStatus", I: j.pUz, O: j.hHr, kind: _t.MethodKind.Unary }, setTeamMarketplacePluginPolicies: { name: "SetTeamMarketplacePluginPolicies", I: j.rJW, O: j.RZJ, kind: _t.MethodKind.Unary }, completeSharepointOauth: { name: "CompleteSharepointOauth", I: j.vJq, O: j.PaT, kind: _t.MethodKind.Unary }, getTeamSharepointConnector: { name: "GetTeamSharepointConnector", I: j.FO$, O: j.hFv, kind: _t.MethodKind.Unary }, disconnectTeamSharepoint: { name: "DisconnectTeamSharepoint", I: j.sg4, O: j.a3K, kind: _t.MethodKind.Unary }, setTeamSharepointAllowedSites: { name: "SetTeamSharepointAllowedSites", I: j.kau, O: j.YMP, kind: _t.MethodKind.Unary }, setTeamMarketplacePluginPolicyVariables: { name: "SetTeamMarketplacePluginPolicyVariables", I: j.sst, O: j.Kfp, kind: _t.MethodKind.Unary }, linkPluginsToTeamMarketplace: { name: "LinkPluginsToTeamMarketplace", I: j.PuH, O: j.n1r, kind: _t.MethodKind.Unary }, unlinkPluginsFromTeamMarketplace: { name: "UnlinkPluginsFromTeamMarketplace", I: j.nun, O: j.bzo, kind: _t.MethodKind.Unary }, previewTeamMarketplaceMcpImpact: { name: "PreviewTeamMarketplaceMcpImpact", I: j.ObP, O: j.qdL, kind: _t.MethodKind.Unary }, getManagedSkills: { name: "GetManagedSkills", I: j.X8g, O: j.p_E, kind: _t.MethodKind.Unary }, getCursorUserState: { name: "GetCursorUserState", I: j.y4P, O: j.WY9, kind: _t.MethodKind.Unary }, setJobData: { name: "SetJobData", I: j.B$8, O: j.JgL, kind: _t.MethodKind.Unary }, listFinancialConnections: { name: "ListFinancialConnections", I: j.mbE, O: j.y5v, kind: _t.MethodKind.Unary }, listFinancialAccounts: { name: "ListFinancialAccounts", I: j.bHh, O: j.jWD, kind: _t.MethodKind.Unary }, deleteFinancialConnection: { name: "DeleteFinancialConnection", I: j.Yiy, O: j.YY6, kind: _t.MethodKind.Unary }, startFinancialLink: { name: "StartFinancialLink", I: j.tVV, O: j.zHj, kind: _t.MethodKind.Unary }, updateBitbucketServerInstanceOauthApp: { name: "UpdateBitbucketServerInstanceOauthApp", I: j.KEO, O: j.qA0, kind: _t.MethodKind.Unary } } };
    var zt = function(e2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t2, r2 = e2[Symbol.asyncIterator];
      return r2 ? r2.call(e2) : (e2 = "function" == typeof __values ? __values(e2) : e2[Symbol.iterator](), t2 = {}, n2("next"), n2("throw"), n2("return"), t2[Symbol.asyncIterator] = function() {
        return this;
      }, t2);
      function n2(r3) {
        t2[r3] = e2[r3] && function(t3) {
          return new Promise(function(n3, s2) {
            (function(e3, t4, r4, n4) {
              Promise.resolve(n4).then(function(t5) {
                e3({ value: t5, done: r4 });
              }, t4);
            })(n3, s2, (t3 = e2[r3](t3)).done, t3.value);
          });
        };
      }
    }, Wt = function(e2) {
      return this instanceof Wt ? (this.v = e2, this) : new Wt(e2);
    }, Ht = function(e2, t2, r2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n2, s2 = r2.apply(e2, t2 || []), o2 = [];
      return n2 = {}, i2("next"), i2("throw"), i2("return", function(e3) {
        return function(t3) {
          return Promise.resolve(t3).then(e3, l2);
        };
      }), n2[Symbol.asyncIterator] = function() {
        return this;
      }, n2;
      function i2(e3, t3) {
        s2[e3] && (n2[e3] = function(t4) {
          return new Promise(function(r3, n3) {
            o2.push([e3, t4, r3, n3]) > 1 || a2(e3, t4);
          });
        }, t3 && (n2[e3] = t3(n2[e3])));
      }
      function a2(e3, t3) {
        try {
          (r3 = s2[e3](t3)).value instanceof Wt ? Promise.resolve(r3.value.v).then(c2, l2) : u2(o2[0][2], r3);
        } catch (e4) {
          u2(o2[0][3], e4);
        }
        var r3;
      }
      function c2(e3) {
        a2("next", e3);
      }
      function l2(e3) {
        a2("throw", e3);
      }
      function u2(e3, t3) {
        e3(t3), o2.shift(), o2.length && a2(o2[0][0], o2[0][1]);
      }
    }, Kt = function(e2) {
      var t2, r2;
      return t2 = {}, n2("next"), n2("throw", function(e3) {
        throw e3;
      }), n2("return"), t2[Symbol.iterator] = function() {
        return this;
      }, t2;
      function n2(n3, s2) {
        t2[n3] = e2[n3] ? function(t3) {
          return (r2 = !r2) ? { value: Wt(e2[n3](t3)), done: false } : s2 ? s2(t3) : t3;
        } : s2;
      }
    };
    var Vt = function(e2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t2, r2 = e2[Symbol.asyncIterator];
      return r2 ? r2.call(e2) : (e2 = "function" == typeof __values ? __values(e2) : e2[Symbol.iterator](), t2 = {}, n2("next"), n2("throw"), n2("return"), t2[Symbol.asyncIterator] = function() {
        return this;
      }, t2);
      function n2(r3) {
        t2[r3] = e2[r3] && function(t3) {
          return new Promise(function(n3, s2) {
            (function(e3, t4, r4, n4) {
              Promise.resolve(n4).then(function(t5) {
                e3({ value: t5, done: r4 });
              }, t4);
            })(n3, s2, (t3 = e2[r3](t3)).done, t3.value);
          });
        };
      }
    }, Yt = function(e2) {
      return this instanceof Yt ? (this.v = e2, this) : new Yt(e2);
    }, Qt = function(e2) {
      var t2, r2;
      return t2 = {}, n2("next"), n2("throw", function(e3) {
        throw e3;
      }), n2("return"), t2[Symbol.iterator] = function() {
        return this;
      }, t2;
      function n2(n3, s2) {
        t2[n3] = e2[n3] ? function(t3) {
          return (r2 = !r2) ? { value: Yt(e2[n3](t3)), done: false } : s2 ? s2(t3) : t3;
        } : s2;
      }
    }, Xt = function(e2, t2, r2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n2, s2 = r2.apply(e2, t2 || []), o2 = [];
      return n2 = {}, i2("next"), i2("throw"), i2("return", function(e3) {
        return function(t3) {
          return Promise.resolve(t3).then(e3, l2);
        };
      }), n2[Symbol.asyncIterator] = function() {
        return this;
      }, n2;
      function i2(e3, t3) {
        s2[e3] && (n2[e3] = function(t4) {
          return new Promise(function(r3, n3) {
            o2.push([e3, t4, r3, n3]) > 1 || a2(e3, t4);
          });
        }, t3 && (n2[e3] = t3(n2[e3])));
      }
      function a2(e3, t3) {
        try {
          (r3 = s2[e3](t3)).value instanceof Yt ? Promise.resolve(r3.value.v).then(c2, l2) : u2(o2[0][2], r3);
        } catch (e4) {
          u2(o2[0][3], e4);
        }
        var r3;
      }
      function c2(e3) {
        a2("next", e3);
      }
      function l2(e3) {
        a2("throw", e3);
      }
      function u2(e3, t3) {
        e3(t3), o2.shift(), o2.length && a2(o2[0][0], o2[0][1]);
      }
    };
    function Zt(e2, t2) {
      return (function(e3, t3) {
        const r2 = {};
        for (const [n2, s2] of Object.entries(e3.methods)) {
          const o2 = t3(Object.assign(Object.assign({}, s2), { localName: n2, service: e3 }));
          null != o2 && (r2[n2] = o2);
        }
        return r2;
      })(e2, (r2) => {
        switch (r2.kind) {
          case _t.MethodKind.Unary:
            return /* @__PURE__ */ (function(e3, t3, r3) {
              return async function(n2, s2) {
                var o2, i2;
                const a2 = await e3.unary(t3, r3, null == s2 ? void 0 : s2.signal, null == s2 ? void 0 : s2.timeoutMs, null == s2 ? void 0 : s2.headers, n2, null == s2 ? void 0 : s2.contextValues);
                return null === (o2 = null == s2 ? void 0 : s2.onHeader) || void 0 === o2 || o2.call(s2, a2.header), null === (i2 = null == s2 ? void 0 : s2.onTrailer) || void 0 === i2 || i2.call(s2, a2.trailer), a2.message;
              };
            })(t2, e2, r2);
          case _t.MethodKind.ServerStreaming:
            return /* @__PURE__ */ (function(e3, t3, r3) {
              return function(n2, s2) {
                return er(e3.stream(t3, r3, null == s2 ? void 0 : s2.signal, null == s2 ? void 0 : s2.timeoutMs, null == s2 ? void 0 : s2.headers, (function(e4) {
                  return Ht(this, arguments, function* () {
                    yield Wt(yield* Kt(zt(e4)));
                  });
                })([n2]), null == s2 ? void 0 : s2.contextValues), s2);
              };
            })(t2, e2, r2);
          case _t.MethodKind.ClientStreaming:
            return /* @__PURE__ */ (function(e3, t3, r3) {
              return async function(n2, s2) {
                var o2, i2, a2, c2, l2, u2;
                const d2 = await e3.stream(t3, r3, null == s2 ? void 0 : s2.signal, null == s2 ? void 0 : s2.timeoutMs, null == s2 ? void 0 : s2.headers, n2, null == s2 ? void 0 : s2.contextValues);
                let p2;
                null === (l2 = null == s2 ? void 0 : s2.onHeader) || void 0 === l2 || l2.call(s2, d2.header);
                let m2 = 0;
                try {
                  for (var h2, f2 = true, g2 = Vt(d2.message); !(o2 = (h2 = await g2.next()).done); f2 = true) {
                    c2 = h2.value, f2 = false;
                    p2 = c2, m2++;
                  }
                } catch (e4) {
                  i2 = { error: e4 };
                } finally {
                  try {
                    f2 || o2 || !(a2 = g2.return) || await a2.call(g2);
                  } finally {
                    if (i2) throw i2.error;
                  }
                }
                if (!p2) throw new se("protocol error: missing response message", re.Unimplemented);
                if (m2 > 1) throw new se("protocol error: received extra messages for client streaming method", re.Unimplemented);
                return null === (u2 = null == s2 ? void 0 : s2.onTrailer) || void 0 === u2 || u2.call(s2, d2.trailer), p2;
              };
            })(t2, e2, r2);
          case _t.MethodKind.BiDiStreaming:
            return /* @__PURE__ */ (function(e3, t3, r3) {
              return function(n2, s2) {
                return er(e3.stream(t3, r3, null == s2 ? void 0 : s2.signal, null == s2 ? void 0 : s2.timeoutMs, null == s2 ? void 0 : s2.headers, n2, null == s2 ? void 0 : s2.contextValues), s2);
              };
            })(t2, e2, r2);
          default:
            return null;
        }
      });
    }
    function er(e2, t2) {
      const r2 = (function() {
        return Xt(this, arguments, function* () {
          var r3, n2;
          const s2 = yield Yt(e2);
          null === (r3 = null == t2 ? void 0 : t2.onHeader) || void 0 === r3 || r3.call(t2, s2.header), yield Yt(yield* Qt(Vt(s2.message))), null === (n2 = null == t2 ? void 0 : t2.onTrailer) || void 0 === n2 || n2.call(t2, s2.trailer);
        });
      })()[Symbol.asyncIterator]();
      return { [Symbol.asyncIterator]: () => ({ next: () => r2.next() }) };
    }
    var tr = __webpack_require__(77598), rr = __webpack_require__(73024);
    const nr = /https?:\/\/[^\s'")]+/g;
    function sr(e2) {
      return (e2 instanceof Error ? e2.message : String(e2)).replace(nr, (e3) => {
        try {
          const t2 = new URL(e3);
          return `${t2.protocol}//${t2.host}${t2.pathname}`;
        } catch {
          return "<unparseable-presigned-url>";
        }
      });
    }
    let or;
    function ir() {
      return or ??= (async () => {
        try {
          return (0, mt.agentStoreRpcServiceFromDedicatedGate)(await H.cursor.checkFeatureGate(vt.QT, { disableExposureLog: true }));
        } catch {
          return mt.DEFAULT_AGENT_STORE_RPC_SERVICE;
        }
      })(), or;
    }
    const ar = v.join(__dirname, "node_modules", "better-sqlite3", "build", "Release", "better_sqlite3.node");
    const cr = { getConnectTransport: () => H.cursor.connectTransport, getCursorCreds: () => H.cursor.getCursorCreds(), getDynamicConfigValue: (e2) => H.cursor.getDynamicConfigValue(e2), showWarningMessage: (e2) => H.window.showWarningMessage(e2), loadSqlite: async function() {
      return (function(e2) {
        if (!rr.existsSync(ar)) return e2;
        const t2 = function(t3, r2) {
          return new e2(t3, { ...r2, nativeBinding: r2?.nativeBinding ?? ar });
        };
        return Object.setPrototypeOf(t2, e2), t2.prototype = e2.prototype, t2;
      })((await Promise.resolve().then(__webpack_require__.t.bind(__webpack_require__, 87550, 23))).default);
    }, sanitizeLogMessage: sr, loadSyncModule: async () => await Promise.resolve().then(__webpack_require__.bind(__webpack_require__, 52810)), getAgentStoreRpcService: () => ir() };
    class lr extends mt.AgentStoreSyncRuntimeController {
      constructor(e2, t2, r2, n2, s2, o2 = mt.AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS, i2) {
        super(e2, t2, r2, cr, n2, s2, o2, i2);
      }
    }
    const ur = "agentStoreSync.pathHashSalt";
    async function dr(e2) {
      const t2 = e2.globalState.get(ur);
      if ("string" == typeof t2 && t2.length > 0) return t2;
      const r2 = (0, tr.randomUUID)();
      await e2.globalState.update(ur, r2);
      const n2 = e2.globalState.get(ur);
      return "string" == typeof n2 && n2.length > 0 ? n2 : r2;
    }
    const pr = "agent_store_principal_local_mounts", mr = "agent_store_local_user_mount", hr = "agent_store_sync_client", fr = "agent_store_citation_index_tier";
    function gr(e2) {
      if (void 0 === e2.storeBase) return [];
      const t2 = e2.principalMountKeys.get("user");
      if (void 0 === t2) return [];
      try {
        return [(0, ut.yA)((0, ut.WX)(e2.storeBase, t2))];
      } catch (t3) {
        return e2.onError(t3), [];
      }
    }
    const yr = [5e3, 15e3, 3e4, 6e4];
    function wr(e2, t2) {
      return e2.length === t2.length && e2.every((e3, r2) => e3 === t2[r2]);
    }
    function vr(e2, t2) {
      const r2 = [];
      for (const n2 of e2) t2(n2) && r2.push(n2);
      return r2;
    }
    function _r(e2) {
      if (0 === e2.conversationId.trim().length) return [];
      const t2 = [], r2 = /* @__PURE__ */ new Set();
      if (void 0 !== e2.selfFilesDir && e2.selfFilesDir.length > 0 && t2.push({ path: e2.selfFilesDir, kind: "self" }), void 0 !== e2.inherited) for (const n2 of e2.inherited) r2.has(n2.alias) || (r2.add(n2.alias), t2.push({ path: n2.filesDir, kind: "peer", alias: n2.alias, readOnly: n2.readOnly }));
      for (const n2 of e2.registry) {
        if (r2.has(n2.alias)) continue;
        let e3;
        switch (r2.add(n2.alias), n2.kind) {
          case "peer":
            e3 = "peer";
            break;
          case "share":
            e3 = "share";
            break;
          case "principal":
            e3 = "principal";
            break;
          default:
            return n2.kind;
        }
        t2.push({ path: n2.filesDir, kind: e3, alias: n2.alias, readOnly: "share" === n2.kind });
      }
      return t2;
    }
    function br(e2, t2) {
      return e2.ensureFilesDir(t2);
    }
    function Sr(e2, t2, r2) {
      e2.requestMount(t2, r2);
    }
    function kr(e2, t2, r2) {
      return { scope: e2, path: t2, rootLinkPolicy: r2 };
    }
    const xr = ["team", "user", "agent"];
    function Er(e2, t2) {
      const r2 = (function(e3, t3) {
        const r3 = e3.getHarness();
        if (void 0 !== r3) try {
          (0, ut._b)(t3);
          const e4 = (0, ut.f$)((0, ut.WX)(r3, t3));
          return (0, ut.rs)(e4), e4;
        } catch {
          return;
        }
      })(e2, t2);
      if (void 0 === r2) return { kind: "unavailable" };
      const n2 = (function(e3, t3) {
        const r3 = e3.handoutPins, n3 = e3.windowId;
        if (void 0 === r3 || void 0 === n3) return "skipped";
        if (r3.has(t3)) return "reused";
        const s2 = e3.getHarness();
        if (void 0 === s2) return "skipped";
        const o2 = (0, mt.acquireStorePinSync)({ store: s2, mountKey: t3, windowId: n3, purpose: "foreground" });
        if ("evicting" === o2.kind) return "evicting";
        if (!o2.handle.acquired) {
          const r4 = void 0 !== o2.handle.error ? `: ${String(o2.handle.error)}` : "";
          e3.warn?.(`agent store pin not acquired for ${t3}${r4}`);
        }
        return r3.set(t3, o2.handle), "new";
      })(e2, t2);
      if ("evicting" === n2) return { kind: "evicting" };
      try {
        rr.mkdirSync(r2, { recursive: true, mode: ut.qH });
        try {
          rr.chmodSync(r2, ut.qH);
        } catch {
        }
        return { kind: "ready", filesDir: r2 };
      } catch {
        if ("new" === n2) {
          const r3 = e2.handoutPins?.get(t2);
          e2.handoutPins?.delete(t2), r3?.release();
        }
        return { kind: "unavailable" };
      }
    }
    function Ir(e2, t2) {
      const r2 = Er(e2, t2);
      return "ready" === r2.kind ? r2.filesDir : void 0;
    }
    async function Tr(e2) {
      const t2 = e2.handoutPins;
      if (void 0 === t2) return;
      const r2 = [...t2.values()];
      t2.clear(), await Promise.all(r2.map((e3) => e3.release()));
    }
    function Cr(e2, t2) {
      const r2 = { scope: "agent", reason: t2 };
      return { scopes: e2.scopes.filter((e3) => "agent" !== e3.scope), unavailableScopes: [...e2.unavailableScopes ?? [], r2] };
    }
    function Pr(e2, t2) {
      return async (r2) => {
        let n2;
        if (void 0 !== r2?.syncAgentPath) try {
          n2 = (0, mt.normalizeRelPath)(r2.syncAgentPath);
        } catch {
          return;
        }
        if (void 0 === r2 || "string" != typeof r2.agentId || void 0 !== r2.mount && "self" !== r2.mount && "peer" !== r2.mount || void 0 !== r2.syncAgentPath && "string" != typeof r2.syncAgentPath || void 0 !== n2 && "peer" !== r2.mount) return;
        const s2 = r2.mount ?? "self", o2 = e2.getHarness();
        if (void 0 === o2) return i2 = true === e2.isHarnessSettling?.() ? "sync-starting" : "sync-unavailable", { scopes: [], unavailableScopes: xr.map((e3) => ({ scope: e3, reason: i2 })) };
        var i2;
        const a2 = e2.getPrincipalMountKeys(), c2 = e2.getController(), l2 = (function(e3, t3, r3) {
          return { ...e3, scopes: e3.scopes.map((e4) => {
            const n3 = "agent" === e4.scope ? void 0 : t3.get(e4.scope);
            return void 0 === n3 ? e4 : { ...e4, syncState: r3?.getMountSyncState(n3) ?? "opening" };
          }) };
        })((function(e3) {
          const t3 = e3.agentId.trim(), { localStoreBase: r3, localStoreTmpDirName: n3 } = e3, s3 = (e4) => (0, ut.f$)({ base: r3, agentId: e4, tmpDirName: n3 }), o3 = e3.localPrincipalSourceIds?.user, i3 = e3.localPrincipalSourceIds?.team;
          return { scopes: [...void 0 === i3 ? [] : [kr("team", s3(i3), "reject")], ...void 0 === o3 ? [] : [kr("user", s3(o3), "reject")], ...(0, vt.v8)(t3) ? [kr("agent", s3(t3), "reject")] : []] };
        })({ agentId: r2.agentId, localStoreBase: o2.base, localStoreTmpDirName: o2.tmpDirName, localPrincipalSourceIds: { user: a2.get("user"), team: a2.get("team") } }), a2, c2);
        if (void 0 === l2.scopes.find((e3) => "agent" === e3.scope)) return l2;
        const u2 = Er(e2, r2.agentId);
        if ("evicting" === u2.kind) return Cr(l2, "sync-starting");
        if ("ready" !== u2.kind) return Cr(l2, "mount-failed");
        let d2;
        if ("peer" === s2) {
          if (void 0 === c2) return Cr(l2, "sync-unavailable");
          if (void 0 === n2) {
            const e3 = await c2.ensureMountedPeer({ peerAgentId: r2.agentId, isProjectStore: true === r2.isProjectStore, awaitInitialRound: false !== r2.awaitInitialRound }).catch(() => {
            });
            if (void 0 === e3 || "mounted" !== e3.outcome && "already-present" !== e3.outcome) return Cr(l2, "mount-failed");
            d2 = e3.syncState;
          } else if ("served" !== await c2.resolveCitedPath({ mountKey: r2.agentId, relPath: n2, indexTierEnabled: e2.isCitationIndexTierEnabled(), isProjectStore: true === r2.isProjectStore, ...void 0 !== t2?.citedFileWait ? { waitBudget: t2.citedFileWait } : {} })) return Cr(l2, "mount-failed");
        } else if (void 0 !== c2 && "lazy" === c2.mountPolicy()) if (c2.hasSelfMount(r2.agentId)) e2.releaseLazySelfWatch?.(r2.agentId);
        else {
          const t3 = (0, mt.admitLocalAgentStore)({ agentId: r2.agentId, policy: "lazy", reason: "prompt_inventory", indexPopulated: c2.localStoreIndexIsPopulated(r2.agentId), resumeRequested: true === r2.resume || c2.hasAdmittedResume(r2.agentId) });
          if ("mount" === t3.action) {
            const n3 = () => {
              c2.hasSelfMount(r2.agentId) || c2.hasNonSelfMount(r2.agentId) ? e2.releaseLazySelfWatch?.(r2.agentId) : e2.noteLazySelfStore?.(r2.agentId, u2.filesDir);
            };
            Promise.resolve(c2.openAdmittedLazySelf(r2.agentId, t3.reason)).then(n3, n3);
          } else e2.noteLazySelfStore?.(r2.agentId, u2.filesDir);
        }
        else c2?.ensureMounted(r2.agentId);
        return { ...l2, scopes: l2.scopes.map((e3) => "agent" === e3.scope ? { ...e3, path: u2.filesDir, ...void 0 === d2 ? {} : { syncState: d2 } } : e3) };
      };
    }
    const Ar = { outcome: "unavailable", pushed: 0, pulled: 0 };
    const Rr = "user", Mr = "team", Jr = 5e3, Or = 6e4, Br = "Agent store sync is currently disabled; it resumes automatically when re-enabled.";
    let Dr, qr, Nr, Fr, Ur, Lr = mt.NEVER_STARTED_HARNESS_PHASE, $r = 0, jr = [];
    const Gr = /* @__PURE__ */ new Map();
    let zr, Wr, Hr, Kr, Vr, Yr, Qr, Xr, Zr, en, tn, rn, nn = false, sn = 0, on = [], an = true, cn = mt.DEFAULT_HARNESS_RECOVERY_CONFIG, ln = Promise.resolve();
    function un(e2) {
      Promise.resolve(ln).then(() => {
        (0, mt.isHarnessInactive)(Lr) || e2();
      });
    }
    const dn = /* @__PURE__ */ new Map(), pn = /* @__PURE__ */ new Map();
    const mn = new class {
      constructor(e2) {
        this.current = e2;
      }
      ready() {
        const e2 = this.current();
        if (e2.length > 0) return Promise.resolve(e2);
        if (void 0 === this.pending) {
          let e3;
          const t2 = new Promise((t3) => {
            e3 = t3;
          });
          this.pending = { promise: t2, resolve: e3 };
        }
        return this.pending.promise;
      }
      settle(e2) {
        const t2 = this.pending;
        this.pending = void 0, t2?.resolve([e2]);
      }
    }(function() {
      if (void 0 === Dr) return [];
      const e2 = yn.mountKeys.get("user");
      if (void 0 === e2) return [];
      try {
        const t2 = (0, ut.f$)((0, ut.WX)(Dr, e2));
        return (0, ut.rs)(t2), [t2];
      } catch {
        return [];
      }
    });
    function hn() {
      return mn.ready();
    }
    function fn() {
      return [.../* @__PURE__ */ new Set([...[...dn.values()].filter((e2) => "peer" === e2.kind).map((e2) => e2.filesDir), ...pn.values()])];
    }
    function gn(e2) {
      Yr?.appendLine(`[cursor-agent-exec] ${e2}`);
    }
    const yn = new class {
      constructor(e2) {
        this.deps = e2, this.mountKeysByAlias = /* @__PURE__ */ new Map(), this.listeners = /* @__PURE__ */ new Set(), this.targetDirsListeners = /* @__PURE__ */ new Set(), this.enabled = false, this.enabledResolved = false, this.refreshGeneration = 0, this.retryPending = false, this.retryAttempts = 0, this.published = [], this.publishedTargetDirs = [];
      }
      get mountKeys() {
        return this.mountKeysByAlias;
      }
      get() {
        return (e2 = { enabled: this.enabled, storeBase: this.deps.getStoreBase(), principalMountKeys: this.mountKeysByAlias, onError: (e3) => {
          this.deps.log(`Agent store skills root unavailable: ${sr(e3)}`);
        } }).enabled ? gr(e2) : [];
        var e2;
      }
      targetDirs() {
        return gr({ storeBase: this.deps.getStoreBase(), principalMountKeys: this.mountKeysByAlias, onError: (e2) => {
          this.deps.log(`Agent store skills target unavailable: ${sr(e2)}`);
        } });
      }
      onDidChange(e2) {
        return this.listeners.add(e2), () => {
          this.listeners.delete(e2);
        };
      }
      onDidChangeTargetDirs(e2) {
        return this.targetDirsListeners.add(e2), () => {
          this.targetDirsListeners.delete(e2);
        };
      }
      setMountKey(e2, t2) {
        this.mountKeysByAlias.set(e2, t2), this.publishIfChanged();
      }
      deleteMountKey(e2) {
        this.mountKeysByAlias.delete(e2), this.publishIfChanged();
      }
      clearMountKeys() {
        this.mountKeysByAlias.clear(), this.publishIfChanged();
      }
      deleteMountKeyByValue(e2) {
        for (const [t2, r2] of this.mountKeysByAlias) if (r2 === e2) return this.deleteMountKey(t2), t2;
      }
      restore(e2) {
        this.enabled = e2.enabled, this.enabledResolved = false, this.mountKeysByAlias.clear();
        for (const [t2, r2] of e2.mountKeys) this.mountKeysByAlias.set(t2, r2);
        this.publishTargetDirsIfChanged(), this.publishRootsIfChanged();
      }
      forgetResolution() {
        this.refreshGeneration += 1, this.enabledResolved = false, this.enabled = false, this.publishRootsIfChanged();
      }
      async refreshGate() {
        const e2 = ++this.refreshGeneration;
        let t2;
        try {
          t2 = await this.deps.resolveEnabled();
        } catch (e3) {
          t2 = void 0, this.deps.log(`skills sync setting resolve failed: ${sr(e3)}`);
        }
        e2 === this.refreshGeneration && (void 0 !== t2 ? (this.retryAttempts = 0, this.enabled = t2, this.enabledResolved = true, this.publishIfChanged()) : this.scheduleIndeterminateRetry());
      }
      scheduleIndeterminateRetry() {
        if (this.retryPending) return;
        if (void 0 === this.deps.getStoreBase()) return void (this.retryAttempts = 0);
        const e2 = yr[Math.min(this.retryAttempts, yr.length - 1)];
        this.retryAttempts += 1, this.retryPending = true, this.deps.scheduleRetry(() => (this.retryPending = false, this.refreshGate()), e2);
      }
      publishIfChanged() {
        this.publishTargetDirsIfChanged(), this.publishRootsIfChanged(), this.enabledResolved && this.deps.persist?.({ enabled: this.enabled, mountKeys: [...this.mountKeysByAlias] });
      }
      publishTargetDirsIfChanged() {
        const e2 = this.targetDirs();
        if (!wr(e2, this.publishedTargetDirs)) {
          this.publishedTargetDirs = e2;
          for (const e3 of this.targetDirsListeners) try {
            e3();
          } catch (e4) {
            this.deps.log(`Agent store skills target listener failed: ${sr(e4)}`);
          }
        }
      }
      publishRootsIfChanged() {
        const e2 = this.get();
        if (!wr(e2, this.published)) {
          this.published = e2;
          for (const t2 of e2) this.ensureSkillsDirExists(t2);
          this.deps.log(`Agent store skills roots: count=${e2.length} enabled=${this.enabled ? "on" : "off"} user=${this.mountKeysByAlias.get("user") ?? "<none>"}`);
          for (const e3 of this.listeners) try {
            e3();
          } catch (e4) {
            this.deps.log(`Agent store skills root listener failed: ${sr(e4)}`);
          }
        }
      }
      ensureSkillsDirExists(e2) {
        try {
          this.deps.ensureDirectory(e2);
        } catch (e3) {
          this.deps.log(`Agent store skills dir could not be created: ${sr(e3)}`);
        }
      }
    }({ resolveEnabled: function() {
      return (async function(e2) {
        try {
          return "object" == typeof (t2 = await e2.getEffectiveSettings()) && null !== t2 && true === t2.enabled;
        } catch (t3) {
          return void e2.log(`skills sync setting read failed: ${sr(t3)}`);
        }
        var t2;
      })({ getEffectiveSettings: () => Zt(Gt, H.cursor.connectTransport).getEffectiveUserAgentStoreSkillsSettings({}), log: gn });
    }, getStoreBase: () => Dr, ensureDirectory: ut.Ew, scheduleRetry: function(e2, t2) {
      setTimeout(() => {
        e2();
      }, t2).unref();
    }, log: gn, persist: (e2) => {
      void 0 !== tn && void 0 !== rn && (function(e3, t2, r2, n2 = Date.now()) {
        if (void 0 === t2.authId) return Promise.resolve();
        const s2 = { authId: t2.authId, teamId: t2.teamId ?? null, enabled: r2.enabled, mountKeys: r2.mountKeys, writtenAt: n2 };
        return gt = gt.catch(() => {
        }).then(() => e3.update(ht, s2)), gt;
      })(tn, rn, e2).then(void 0, (e3) => {
        gn(`Agent store skills roots cache write failed: ${sr(e3)}`);
      });
    } });
    let wn, vn, _n = false, bn = true, Sn = 0, kn = 0, xn = Promise.resolve();
    const En = /* @__PURE__ */ new Map();
    function In(e2, t2, r2) {
      dn.set(t2, r2), "user" === r2.alias && mn.settle(r2.filesDir), e2.appendLine(`[cursor-agent-exec] mount alias add kind=${r2.kind} mountKey=${t2} alias=${r2.alias}`);
    }
    function Tn() {
      return void 0 !== Dr && void 0 !== qr;
    }
    function Cn() {
      void 0 !== Wr && (clearTimeout(Wr), Wr = void 0);
      const e2 = Hr;
      Hr = void 0, e2?.();
    }
    function Pn(e2, t2, r2) {
      const n2 = Lr;
      "stopping" === t2.kind && Cn(), "starting" === t2.kind ? (an = false, "down" === n2.kind && "server_disabled" === n2.reason && (Zr = n2.attempts)) : "up" === t2.kind ? an = 0 === on.length : "down" === t2.kind && "server_disabled" !== t2.reason && (Zr = void 0), Lr = t2, e2.appendLine(`[cursor-agent-exec] agent store harness ${(0, mt.formatHarnessTransition)({ from: n2, to: t2, reason: r2 })}`), Rn(e2);
    }
    function An() {
      void 0 !== en && (clearTimeout(en), en = void 0);
    }
    function Rn(e2) {
      An();
      const t2 = (0, mt.harnessProbeDelayMs)({ phase: Lr, now: Date.now(), config: cn });
      if (void 0 === t2 || t2 <= 0 || void 0 === Qr) return;
      en = setTimeout(() => {
        en = void 0, Mn(e2);
      }, Math.min(t2, 2147483647));
    }
    async function Mn(e2) {
      "down" === Lr.kind && (Date.now() < Lr.nextProbeAtMs ? Rn(e2) : void 0 !== Qr && await ps(Qr, e2, "probe_timer"));
    }
    function Jn(e2) {
      "down" === Lr.kind && ("touch" === e2 && (0, mt.harnessTouchIsCoolingDown)({ phase: Lr, now: Date.now(), config: cn }) || void 0 !== Qr && void 0 !== Xr && ps(Qr, Xr, e2));
    }
    function On() {
      const e2 = jr;
      jr = [];
      for (const t2 of e2) t2.dispose();
    }
    function Bn(e2) {
      return "starting" !== Lr.kind || $r !== e2;
    }
    function Dn() {
      return "stopping" === Lr.kind || "down" === Lr.kind && "extension_deactivate" === Lr.reason;
    }
    function qn() {
      H.window.showInformationMessage(Br);
    }
    async function Nn(e2) {
      try {
        const e3 = await H.cursor.getDynamicConfigValue(mt.AGENT_STORE_SYNC_CLIENT_CONFIG_NAME);
        return (0, mt.resolveAgentStoreSyncClientConfig)(e3 ?? void 0, "ide");
      } catch (t2) {
        return e2.appendLine(`[cursor-agent-exec] Agent store sync config read failed, using defaults: ${sr(t2)}`), (0, mt.agentStoreSyncClientCodeDefaults)("ide");
      }
    }
    async function Fn(e2) {
      const t2 = qr, r2 = yn.mountKeys.get("user");
      return void 0 === t2 || void 0 === r2 ? "absent" : await t2.forceSyncPathsForConflictNotices({ mountKey: r2, absPaths: e2 });
    }
    function Un(e2) {
      const t2 = qr, r2 = [...yn.mountKeys];
      yn.clearMountKeys();
      for (const [, e3] of r2) dn.delete(e3);
      const n2 = xn.then(async () => {
        await Promise.allSettled(r2.map(async ([r3, n3]) => {
          void 0 !== t2 && await t2.unmountPrincipal(n3), e2.appendLine(`[cursor-agent-exec] principal mount removed alias=${r3}`);
        }));
      });
      return xn = n2.catch(() => {
      }), n2;
    }
    function Ln(e2) {
      Sn += 1, bn = true, (function() {
        for (const e3 of yn.mountKeys.values()) dn.delete(e3);
      })(), void 0 !== vn && (clearTimeout(vn), vn = void 0), kn = 0;
      const t2 = Un(e2);
      un(() => {
        t2.finally(() => {
          Hn(e2);
        });
      });
    }
    function $n(e2, t2) {
      var r2, n2;
      (r2 = t2, n2 = rn, r2?.authId !== n2?.authId || r2?.teamId !== n2?.teamId) && (rn = t2, yn.forgetResolution(), Ln(e2), jn(t2), un(() => {
        yn.refreshGate();
      }));
    }
    function jn(e2) {
      if (void 0 === tn || void 0 === Dr) return;
      const t2 = wt(tn, e2);
      void 0 !== t2 && (function(e3, t3) {
        const r2 = new Map(t3.mountKeys).get("user");
        if (void 0 === r2) return true;
        try {
          return true === rr.statSync((0, ut.yA)((0, ut.WX)(e3, r2)), { throwIfNoEntry: false })?.isDirectory();
        } catch {
          return false;
        }
      })(Dr, t2) && yn.restore(t2);
    }
    function Gn(e2, t2) {
      const r2 = /* @__PURE__ */ new Set([Rr, Mr]);
      for (const [n2, s2] of dn) if (n2 !== t2) {
        if (s2.alias === e2) {
          const t3 = Xn(`${e2}_mounted`, r2);
          dn.set(n2, { ...s2, alias: t3 });
          continue;
        }
        r2.add(s2.alias);
      }
    }
    async function zn(e2) {
      const t2 = Sn;
      if (!Tn() || void 0 === Dr || void 0 === qr) return false;
      if (await xn, t2 !== Sn) return false;
      const r2 = await (async function(e3) {
        try {
          return await H.cursor.checkFeatureGate(pr) ? ["user", "team"] : await H.cursor.checkFeatureGate(mr) ? ["user"] : [];
        } catch (t3) {
          return e3.appendLine(`[cursor-agent-exec] Principal agent-store mount gate check failed, defaulting to disabled: ${String(t3)}`), [];
        }
      })(e2);
      if (0 === r2.length) return t2 !== Sn || await Un(e2), false;
      const n2 = await H.cursor.getUserId();
      if (t2 !== Sn) return false;
      if (void 0 === n2) return void 0 === H.cursor.getCursorAuthToken() || bn ? await Un(e2) : e2.appendLine("[cursor-agent-exec] principal mount refresh kept existing mounts because user lookup was unavailable"), void 0 !== H.cursor.getCursorAuthToken();
      const s2 = rn?.teamId ?? H.cursor.getTeamId(), o2 = new Map((function(e3) {
        const t3 = [];
        return e3.mountAliases.includes("user") && t3.push({ alias: "user", sourceId: (0, vt._N)({ userId: e3.userId, teamId: e3.teamId }) }), void 0 !== e3.teamId && e3.mountAliases.includes("team") && t3.push({ alias: "team", sourceId: (0, vt.Ko)(e3.teamId) }), t3;
      })({ userId: n2, teamId: s2, mountAliases: r2 }).map((e3) => [e3.alias, e3.sourceId])), i2 = [...yn.mountKeys].filter(([e3, t3]) => o2.get(e3) !== t3);
      for (const [e3, t3] of i2) yn.deleteMountKey(e3), dn.delete(t3);
      if (await Promise.allSettled(i2.map(async ([, e3]) => {
        await qr?.unmountPrincipal(e3);
      })), t2 !== Sn) return false;
      bn = false;
      let a2 = false;
      for (const [r3, n3] of o2) {
        const { outcome: s3, reason: o3 } = await qr.ensureMountedPrincipal({ sourceId: n3, alias: r3 });
        if (t2 !== Sn) return await qr.unmountPrincipal(n3), false;
        "mounted" === s3 || "already-present" === s3 ? (Gn(r3, n3), yn.setMountKey(r3, n3), In(e2, n3, { alias: r3, filesDir: (0, ut.f$)((0, ut.WX)(Dr, n3)), kind: "principal" })) : (e2.appendLine(`[cursor-agent-exec] principal mount skipped alias=${r3} outcome=${s3} reason=${o3}`), a2 = true);
      }
      return a2;
    }
    function Wn(e2) {
      if (void 0 !== vn || (0, mt.isHarnessInactive)(Lr)) return;
      kn += 1;
      const t2 = Math.min(Or, Jr * 2 ** Math.min(kn - 1, 4));
      vn = setTimeout(() => {
        vn = void 0, Hn(e2);
      }, t2);
    }
    function Hn(e2) {
      (0, mt.isHarnessInactive)(Lr) || (_n = true, void 0 === wn && (wn = (async () => {
        for (; _n; ) {
          _n = false;
          let t2 = false;
          try {
            t2 = await zn(e2);
          } catch (r2) {
            e2.appendLine(`[cursor-agent-exec] principal mount refresh failed: ${sr(r2)}`), bn && await Un(e2), t2 = true;
          }
          t2 ? Wn(e2) : (kn = 0, void 0 !== vn && (clearTimeout(vn), vn = void 0));
        }
      })().finally(() => {
        wn = void 0, _n && Hn(e2);
      })));
    }
    async function Kn(e2) {
      return (async function(e3) {
        const t2 = await Zn(e3);
        return "enabled" === t2;
      })(e2);
    }
    async function Vn(e2) {
      try {
        return await H.cursor.checkFeatureGate(hr);
      } catch (t2) {
        return e2.appendLine(`[cursor-agent-exec] Agent store subagent inherit gate check failed, defaulting to disabled: ${String(t2)}`), false;
      }
    }
    async function Yn(e2, t2) {
      if (Jn("touch"), !await Vn(e2) || !Tn() || void 0 === Dr) return { applied: false, inheritedSourceIds: [] };
      const r2 = t2.parentConversationId.trim(), n2 = t2.childConversationId.trim();
      if (0 === r2.length || 0 === n2.length || !(0, ut.v8)(r2)) return { applied: false, inheritedSourceIds: [] };
      const s2 = /* @__PURE__ */ new Map();
      qr?.ensureMounted(r2);
      const o2 = (0, ut.f$)((0, ut.WX)(Dr, r2));
      try {
        (0, ut.rs)(o2), s2.set(vt._u, { alias: vt._u, filesDir: o2, readOnly: false });
      } catch (t3) {
        e2.appendLine(`[cursor-agent-exec] subagent inherit skip parent store: ${sr(t3)}`);
      }
      if (0 === s2.size) return { applied: false, inheritedSourceIds: [] };
      const i2 = false !== t2.registerLocalShellMounts;
      return i2 && En.set(n2, s2), qr?.noteInheritedConflictNoticeMounts(n2, [r2]), e2.appendLine(`[cursor-agent-exec] subagent inherit applied child=${n2} parent=${r2} mounts=${s2.size} registerLocalShellMounts=${i2}`), { applied: true, inheritedSourceIds: [r2] };
    }
    function Qn(e2, t2) {
      const r2 = t2.childConversationId.trim();
      if (0 === r2.length) return;
      const n2 = En.delete(r2);
      qr?.clearInheritedConflictNoticeMounts(r2), n2 && e2.appendLine(`[cursor-agent-exec] subagent inherit cleared child=${r2}`);
    }
    function Xn(e2, t2) {
      return (0, mt.allocateUniqueAgentStoreMountAlias)({ preferred: e2, usedAliases: t2 });
    }
    async function Zn(e2) {
      try {
        return await H.cursor.checkFeatureGate(hr) ? "enabled" : void 0 === await H.cursor.getAuthId() ? "unknown" : "disabled";
      } catch (t2) {
        return e2.appendLine(`[cursor-agent-exec] Agent store sync gate check failed: ${String(t2)}`), "unknown";
      }
    }
    async function es(e2, t2) {
      if (!await Kn(e2) || !Tn()) return t2.silent || qn(), { mounted: false, reason: "disabled" };
      if (!(function(e3) {
        if ("object" != typeof e3 || null === e3 || Array.isArray(e3)) return false;
        const t3 = e3;
        return !(void 0 !== t3.input && "string" != typeof t3.input || void 0 !== t3.storeId && "string" != typeof t3.storeId || void 0 !== t3.shareId && "string" != typeof t3.shareId || void 0 !== t3.alias && "string" != typeof t3.alias || void 0 !== t3.silent && "boolean" != typeof t3.silent);
      })(t2)) return { mounted: false, reason: "invalid-mount" };
      const r2 = (0, ut.j6)(t2);
      if (void 0 === r2) return { mounted: false, reason: "invalid-mount" };
      const n2 = "share" === r2.kind ? r2.shareId : r2.agentId, s2 = dn.get(n2);
      if (void 0 !== s2) return { mounted: true, kind: s2.kind, mountKey: n2, storeId: "peer" === r2.kind ? r2.agentId : void 0, shareId: "share" === r2.kind ? r2.shareId : void 0, alias: s2.alias, filesDir: s2.filesDir, reason: "already-mounted" };
      const o2 = t2.alias?.trim(), i2 = (a2 = o2 && (0, mt.isValidAgentStoreMountAlias)(o2) ? o2 : (0, mt.defaultAgentStoreMountAlias)(r2.kind, n2), (0, mt.allocateUniqueAgentStoreMountAlias)({ preferred: a2, usedAliases: /* @__PURE__ */ new Set([Rr, Mr, ...[...dn.values()].map((e3) => e3.alias)]) }));
      var a2;
      if (void 0 === qr || void 0 === Dr) return t2.silent || qn(), { mounted: false, kind: r2.kind, mountKey: n2, alias: i2, reason: "disabled" };
      const { outcome: c2 } = "share" === r2.kind ? await qr.ensureMountedShare({ shareId: r2.shareId, alias: i2 }) : await qr.ensureMountedPeer({ peerAgentId: r2.agentId, alias: i2 });
      if ("mounted" !== c2 && "already-present" !== c2) return { mounted: false, kind: r2.kind, mountKey: n2, storeId: "peer" === r2.kind ? r2.agentId : void 0, shareId: "share" === r2.kind ? r2.shareId : void 0, alias: i2, reason: "mount-not-started" };
      const l2 = (0, ut.f$)((0, ut.WX)(Dr, n2));
      return In(e2, n2, { alias: i2, filesDir: l2, kind: r2.kind }), t2.silent || H.window.showInformationMessage(`Mounted ${r2.kind} ${n2} as ${i2}`), { mounted: true, kind: r2.kind, mountKey: n2, storeId: "peer" === r2.kind ? r2.agentId : void 0, shareId: "share" === r2.kind ? r2.shareId : void 0, alias: i2, filesDir: l2 };
    }
    let ts = `${process.pid}-${(0, tr.randomUUID)()}`;
    const rs = /* @__PURE__ */ new Map(), ns = { getHarness: () => Dr, getController: () => qr, getPrincipalMountKeys: () => yn.mountKeys, isCitationIndexTierEnabled: () => nn, isHarnessSettling: function() {
      return !Dn() && (void 0 !== zr || !(0, mt.isHarnessInactive)(Lr) && sn > 0);
    }, get windowId() {
      return ts;
    }, handoutPins: rs, warn: (e2) => gn(e2), noteLazySelfStore: (e2, t2) => {
      qr?.noteDeferredLocalStore(e2, "prompt_inventory"), ys(e2, t2);
    }, releaseLazySelfWatch: (e2) => {
      gs(e2);
    } }, ss = Pr(ns), os = (function(e2) {
      const t2 = Pr(e2);
      return async (r2) => {
        if (void 0 === r2 || "string" != typeof r2.agentId || "string" != typeof r2.relPath) return { outcome: "invalid" };
        let n2;
        try {
          n2 = (0, mt.normalizeRelPath)(r2.relPath);
        } catch {
          return { outcome: "invalid" };
        }
        const s2 = await t2({ agentId: r2.agentId, mount: "self" }), o2 = s2?.scopes.find((e3) => "agent" === e3.scope)?.path, i2 = e2.getController();
        if (void 0 === o2 || void 0 === i2) return { outcome: "absent" };
        if ("lazy" === i2.mountPolicy?.()) {
          if ("absent" === await i2.prepareExplicitSelfSync(r2.agentId, "explicit_sync", { openEmpty: true })) return { outcome: "absent" };
        } else {
          const { outcome: e3 } = await i2.ensureMountedSelfAwaited(r2.agentId);
          if ("mounted" !== e3 && "already-present" !== e3) return { outcome: "absent" };
        }
        return { outcome: await i2.forceSyncPathForConflictNotices({ mountKey: r2.agentId, absPath: v.join(o2, n2) }) };
      };
    })(ns), is = (as = ns, async (e2) => {
      if (void 0 === e2 || "string" != typeof e2.agentId || true !== e2.isProjectStore || !Array.isArray(e2.relPaths) || 0 === e2.relPaths.length || e2.relPaths.length > 8) return { outcome: "invalid", pushed: 0, pulled: 0 };
      const t2 = [];
      for (const r3 of e2.relPaths) {
        if ("string" != typeof r3) return { outcome: "invalid", pushed: 0, pulled: 0 };
        try {
          t2.push((0, mt.normalizeRelPath)(r3));
        } catch {
          return { outcome: "invalid", pushed: 0, pulled: 0 };
        }
      }
      if (void 0 === as.getHarness()) return Ar;
      if (void 0 === Ir(as, e2.agentId)) return Ar;
      const r2 = as.getController();
      if (void 0 === r2) return Ar;
      let n2;
      try {
        n2 = await r2.refreshPeerPaths({ peerAgentId: e2.agentId, relPaths: t2, isProjectStore: true });
      } catch {
        return { outcome: "error", pushed: 0, pulled: 0 };
      }
      switch (n2.kind) {
        case "ran":
          return { outcome: n2.errors > 0 ? "error" : "refreshed", pushed: n2.pushed, pulled: n2.pulled };
        case "holder-owns-fetch":
          return { outcome: "passive", pushed: 0, pulled: 0 };
        case "throttled":
          return { outcome: "throttled", pushed: 0, pulled: 0 };
        case "unavailable":
          return Ar;
        case "failed":
          return { outcome: "error", pushed: 0, pulled: 0 };
      }
    });
    var as;
    async function cs(e2, u2, h2, f2) {
      Qr = e2, Xr = u2, void 0 !== f2?.whenProviderRegistered && (ln = f2.whenProviderRegistered), tn = e2.globalState, e2.subscriptions.push(H.commands.registerCommand(t, (e3) => void 0 === e3 ? Promise.resolve({ mounted: false, reason: "invalid-mount" }) : es(u2, e3)), H.commands.registerCommand(r, (e3) => (function(e4) {
        if (void 0 === Dr) return [];
        const t2 = new Set([...dn.values()].map((e5) => e5.alias)), r2 = [], n2 = /* @__PURE__ */ new Set();
        for (const s3 of e4?.storeIds ?? []) {
          const e5 = s3.trim();
          if (!(0, ut.Y6)(e5) && !(0, ut.v8)(e5) || n2.has(e5)) continue;
          n2.add(e5);
          const o2 = dn.get(e5), i2 = o2?.alias ?? Xn((0, mt.defaultAgentStoreMountAlias)("peer", e5), t2), a2 = o2?.filesDir ?? (0, ut.f$)((0, ut.WX)(Dr, e5));
          r2.push({ kind: "mine", storeId: e5, alias: i2, filesDir: a2 });
        }
        const s2 = /* @__PURE__ */ new Set();
        for (const n3 of e4?.shareIds ?? []) {
          const e5 = n3.trim();
          if (!(0, ut.A8)(e5) || s2.has(e5)) continue;
          s2.add(e5);
          const o2 = dn.get(e5), i2 = o2?.alias ?? Xn((0, mt.defaultAgentStoreMountAlias)("share", e5), t2), a2 = o2?.filesDir ?? (0, ut.f$)((0, ut.WX)(Dr, e5));
          r2.push({ kind: "shared", shareId: e5, alias: i2, filesDir: a2 });
        }
        return r2;
      })(e3)), H.commands.registerCommand(a, () => yn.get()), H.commands.registerCommand(c, () => yn.targetDirs()), H.commands.registerCommand(l, () => yn.refreshGate()), H.commands.registerCommand(n, async (e3) => {
        Jn("touch");
        const t2 = await ss(e3);
        if ("peer" === e3?.mount) {
          const r2 = t2?.scopes.find((e4) => "agent" === e4.scope)?.path;
          void 0 === r2 ? pn.delete(e3.agentId) : pn.set(e3.agentId, r2);
        }
        return t2;
      }), H.commands.registerCommand(s, (e3) => os(e3)), H.commands.registerCommand(o, (e3) => is(e3)), H.commands.registerCommand(i, (e3) => void 0 === e3 || 0 === e3.conversationId.trim().length ? { stores: [] } : (function(e4, t2) {
        if (!Dr) return { stores: [] };
        const r2 = e4.trim();
        try {
          (0, ut._b)(r2);
        } catch {
          return { stores: [] };
        }
        const n2 = (e5, t3) => {
          try {
            return (0, ut.rs)(e5), true;
          } catch (e6) {
            return Yr?.appendLine(`[cursor-agent-exec] omitting ${t3} from prompt inventory: ${sr(e6)}`), false;
          }
        };
        let s2 = ws(r2, "prompt_inventory", true === t2?.resume);
        void 0 === s2 || n2(s2, `self mount ${r2}`) || (s2 = void 0);
        const o2 = vr(En.get(r2)?.values() ?? [], (e5) => n2(e5.filesDir, `inherited mount alias ${e5.alias}`));
        return { stores: _r({ conversationId: r2, selfFilesDir: s2, registry: vr(dn.values(), (e5) => n2(e5.filesDir, `mount alias ${e5.alias}`)), inherited: o2 }) };
      })(e3.conversationId, { resume: true === e3.resume })), H.commands.registerCommand(d, (e3) => Yn(u2, e3)), H.commands.registerCommand(p, (e3) => Qn(u2, e3)), H.commands.registerCommand(m, (e3) => (async function(e4, t2) {
        if (!await Vn(e4) || !Tn()) return;
        const r2 = /* @__PURE__ */ new Set();
        for (const n2 of t2.agentIds) {
          const t3 = n2.trim();
          if (0 === t3.length || r2.has(t3) || !(0, ut.v8)(t3)) continue;
          r2.add(t3);
          const s2 = await qr?.forceSyncMountedIfPresent(t3);
          if ("synced" === s2?.kind) {
            const { summary: t4 } = s2;
            e4.appendLine(`[cursor-agent-exec] subagent-pre-cloud-sync mounted done: pushed=${t4.filesPushed} pulled=${t4.filesPulled} skipped=${t4.filesSkipped} refusals=${t4.refusals} errors=${t4.errors.length} (${t4.durationMs}ms)`);
            for (const r3 of t4.errors) e4.appendLine(`[cursor-agent-exec]   error ${r3.code} on ${r3.relPath ?? "<unknown>"}: ${sr(r3.message)}`);
            continue;
          }
          "mounted-no-summary" !== s2?.kind ? e4.appendLine(`[cursor-agent-exec] subagent-pre-cloud-sync skipped unmounted store ${t3}`) : e4.appendLine(`[cursor-agent-exec] subagent-pre-cloud-sync mounted failed without summary for ${t3}`);
        }
      })(u2, e3)));
      const g2 = { applySubagentStoreMounts: async (e3) => {
        try {
          await Yn(u2, { parentConversationId: e3.parentStoreId, childConversationId: e3.childStoreId });
        } catch (e4) {
          u2.appendLine(`[cursor-agent-exec] local subagent store mount apply failed: ${sr(e4)}`);
        }
      }, clearSubagentStoreMounts: async (e3) => {
        try {
          Qn(u2, { childConversationId: e3.childStoreId });
        } catch (e4) {
          u2.appendLine(`[cursor-agent-exec] local subagent store mount clear failed: ${sr(e4)}`);
        }
      } };
      var y2;
      y2 = g2, pt().add(y2), h2.push(async () => {
        !(function(e3) {
          pt().delete(e3);
        })(g2), await hs(u2, { reason: "extension_deactivate" }), An(), Qr = void 0, Xr = void 0;
      }), "down" === Lr.kind && "extension_deactivate" === Lr.reason || (e2.subscriptions.push(H.cursor.onDidChangeGates((t2) => {
        var r2;
        (void 0 === (r2 = t2.changedGates) || r2.includes(hr)) && ps(e2, u2), (function(e3) {
          return void 0 === e3 || e3.includes(fr);
        })(t2.changedGates) && ls(u2);
      })), await ls(u2), await ps(e2, u2));
    }
    async function ls(e2) {
      try {
        nn = await H.cursor.checkFeatureGate(fr);
      } catch (t2) {
        nn = false, e2.appendLine(`[cursor-agent-exec] Agent store citation index tier gate check failed, defaulting to disabled: ${String(t2)}`);
      }
    }
    const us = { enabled: "Agent store harness enabled by agent_store_sync_client", disabled: "Agent store harness disabled by agent_store_sync_client", unknown: "Agent store sync gate unknown; leaving the harness as it is" };
    function ds(e2, t2) {
      Vr !== t2 && (Vr = t2, e2.appendLine(`[cursor-agent-exec] ${us[t2]}`));
    }
    async function ps(e2, t2, r2 = "gate_change") {
      if ("starting" === Lr.kind && void 0 !== zr) {
        if (await zr, !(0, mt.shouldReconcileAfterParkedHarnessStart)({ coreReady: Tn(), phase: Lr })) return;
        return ps(e2, t2, r2);
      }
      if ("stopping" === Lr.kind && void 0 !== Kr) return await Kr, ps(e2, t2, r2);
      if ("starting" === Lr.kind || "stopping" === Lr.kind) return;
      let n2;
      sn++;
      try {
        n2 = await Zn(t2);
      } finally {
        sn--;
      }
      const s2 = Vr;
      if (ds(t2, n2), "disabled" === n2 && "down" === Lr.kind && void 0 !== Wr && (Cn(), $r += 1), void 0 !== zr && (await zr, !(0, mt.shouldReconcileAfterParkedHarnessStart)({ coreReady: Tn(), phase: Lr, gateState: n2 }))) return;
      cn = (0, mt.harnessRecoveryConfigFromClient)(await Nn(t2));
      switch ((0, mt.planHarnessAction)({ phase: Lr, gateState: n2, trigger: r2, now: Date.now(), config: cn, previousGateState: s2 })) {
        case "start":
          return void await (async function(e3, t3, r3 = "gate_change", n3) {
            if (void 0 !== zr) {
              if (await zr, !(0, mt.shouldReconcileAfterParkedHarnessStart)({ coreReady: Tn(), phase: Lr })) return;
              return ps(e3, t3, r3);
            }
            if (Tn() || Dn()) return;
            const s3 = (async function(e4, t4, r4, n4) {
              const s4 = Lr, o2 = $r;
              "down" === s4.kind && "gate_change" !== r4 && t4.appendLine(`[cursor-agent-exec] agent store harness probe attempt=${s4.attempts + 1} (${r4})`);
              const i2 = "gate_change" === r4 ? (0, mt.harnessRecoveryStartDelayMs)({ fromPhase: s4, jitterMs: cn.startJitterMs }) : 0;
              if (i2 > 0) {
                if (await (function(e6) {
                  return new Promise((t5) => {
                    Hr = t5, Wr = setTimeout(() => {
                      Wr = void 0, Hr = void 0, t5();
                    }, e6);
                  });
                })(i2), Tn() || Dn()) return;
                if ($r !== o2) return void queueMicrotask(() => {
                  void 0 !== Qr && ("down" !== Lr.kind || "server_disabled" !== Lr.reason || hs(t4, { reason: "gate_off" }));
                });
                cn = (0, mt.harnessRecoveryConfigFromClient)(await Nn(t4));
                const e5 = Date.now(), a3 = (0, mt.settleHarnessTriggerAfterJitter)({ trigger: r4, phase: Lr, now: e5, config: cn }), c2 = await Zn(t4);
                ds(t4, c2);
                const l2 = (0, mt.planHarnessAction)({ phase: Lr, gateState: c2, trigger: a3, now: e5, config: cn, previousGateState: n4 });
                if (!(0, mt.shouldContinueHarnessStartAfterJitter)({ action: l2, gateState: c2, trigger: a3, policy: cn.policy, phase: Lr, fromPhase: s4 })) return void queueMicrotask(() => {
                  void 0 !== Qr && ("stand-down" !== l2 ? ps(Qr, t4, a3) : hs(t4, { reason: "gate_off" }));
                });
              }
              if (Dn() || $r !== o2) return;
              $r += 1;
              const a2 = $r;
              Pn(t4, { kind: "starting" }, (0, mt.harnessStartTransitionReason)(s4)), bn = true, kn = 0, Sn += 1;
              try {
                const r5 = Promise.all([Promise.resolve(H.cursor.getAuthId()).catch(() => {
                }), Promise.resolve(H.cursor.getActiveTeamId()).catch(() => {
                })]).then(([e5, t5]) => ({ authId: e5, teamId: t5 })), n5 = (0, ut.v5)({ urlProtocol: H.env.uriScheme });
                if (await (async function({ base: e5, tmpDirName: t5 }) {
                  const r6 = v.join(e5, t5);
                  await rr.promises.mkdir(r6, { recursive: true, mode: ut.qH });
                  try {
                    await rr.promises.chmod(r6, ut.qH);
                  } catch {
                  }
                })({ base: n5.base, tmpDirName: n5.tmpDirName }), Bn(a2)) return;
                const o3 = await (async function(e5) {
                  return (0, mt.createAgentStoreSyncMetrics)({ sink: { increment(e6, t5, r6) {
                    H.cursor.metricsIncrement({ stat: e6, value: t5, tags: { ...r6 } });
                  }, distribution(e6, t5, r6) {
                    H.cursor.metricsDistribution({ stat: e6, value: t5, tags: { ...r6 } });
                  }, gauge(e6, t5, r6) {
                    H.cursor.metricsGauge({ stat: e6, value: t5, tags: { ...r6 } });
                  } }, surface: "ide", extraTags: { os: process.platform }, pathHashSalt: await dr(e5), service: await ir(), breadcrumbs: { addBreadcrumb(e6) {
                    H.tracing.addBreadcrumb({ category: e6.category, level: e6.level, message: e6.message, data: e6.data });
                  } } });
                })(e4);
                if (Bn(a2)) return;
                const i3 = await Nn(t4);
                if (Bn(a2)) return;
                const c2 = await r5;
                if (Bn(a2)) return;
                const l2 = `${process.pid}-${(0, tr.randomUUID)()}`, u2 = new lr(n5, l2, t4, ({ mountKey: e5, mountKind: r6 }) => {
                  if (dn.delete(e5), "principal" !== r6) return;
                  const n6 = yn.deleteMountKeyByValue(e5);
                  t4.appendLine(`[cursor-agent-exec] principal mount invalidated alias=${n6 ?? "<unknown>"}`), Wn(t4);
                }, o3, i3, (e5, r6) => {
                  qr === u2 && hs(t4, { reason: `server_disabled:${e5}`, retryAfterMs: r6?.retryAfterMs });
                });
                if (Bn(a2)) return void u2.dispose();
                if (ts = l2, Dr = n5, Yr = t4, qr = u2, (function() {
                  ms();
                  const e5 = new mt.AgentStoreConversationActivityTracker({ idleQuiesceMs: () => qr?.idleQuiesceMs() ?? 0, setActivity: (e6, t5) => {
                    qr?.setConversationActivity(e6, t5);
                  }, quiesceSelfSessions: () => {
                    qr?.quiesceIdleSelfSessions();
                  }, schedule: (e6, t5) => {
                    const r6 = setTimeout(e6, t5);
                    return { dispose() {
                      clearTimeout(r6);
                    } };
                  } });
                  Nr = e5, qr?.setIdleQuiesceEnabledListener(() => {
                    const t5 = false !== H.window.state?.focused;
                    t5 && qr?.releaseNewSelfSessionHold(), e5.noteWindowFocused(t5);
                  }), Fr = (0, mt.setAgentStoreConversationTurnListener)((t5, r6) => {
                    e5.noteTurn(t5, r6);
                  }), Ur = H.window.onDidChangeWindowState((t5) => {
                    t5.focused && qr?.releaseNewSelfSessionHold(), e5.noteWindowFocused(t5.focused);
                  }), false === H.window.state?.focused && e5.noteWindowFocused(false);
                })(), t4.appendLine(`[cursor-agent-exec] Agent store sync ready at ${v.join(n5.base, n5.tmpDirName)} (source=${n5.source}, ephemeral=${n5.ephemeralOnLogout}, uriScheme=${H.env.uriScheme})`), (0, mt.isNonDefaultAgentStoreSyncClientConfig)(i3) && t4.appendLine(`[cursor-agent-exec] Agent store sync client config (non-default): ${JSON.stringify(i3)}`), Bn(a2)) return;
                if (rn = c2, jn(c2), jr.push(H.cursor.onDidChangeCursorAuthToken((e5) => {
                  const r6 = (function(e6) {
                    const t5 = e6?.split(".")[1];
                    if (void 0 !== t5) try {
                      const e7 = JSON.parse(Buffer.from(t5, "base64url").toString("utf8")), r7 = "object" == typeof e7 && null !== e7 ? e7.sub : void 0;
                      return "string" == typeof r7 && r7.length > 0 ? r7 : void 0;
                    } catch {
                      return;
                    }
                  })(e5);
                  void 0 === r6 && void 0 === rn?.authId || $n(t4, { authId: r6, teamId: rn?.teamId ?? H.cursor.getTeamId() });
                }), H.cursor.onDidChangeActiveTeamId((e5) => {
                  $n(t4, { authId: rn?.authId, teamId: e5 });
                }), H.cursor.onDidChangeGates((e5) => {
                  var r6;
                  (void 0 === (r6 = e5.changedGates) || r6.includes(pr) || r6.includes(mr)) && un(() => {
                    Hn(t4);
                  });
                })), Bn(a2)) return;
                Pn(t4, { kind: "up" }, "down" === s4.kind ? (0, mt.harnessStartTransitionReason)(s4) : "started"), un(() => {
                  "up" === Lr.kind && $r === a2 && (yn.refreshGate(), Hn(t4), (async function(e5, t5) {
                    const r6 = on;
                    if (0 === r6.length) return void ($r === t5 && (an = true));
                    e5.appendLine(`[cursor-agent-exec] agent store harness replaying ${r6.length} remembered mount(s)`);
                    const n6 = (0, mt.rememberedMountsOldestFirst)(r6);
                    let s5 = true;
                    for (let e6 = 0; e6 < n6.length; e6++) {
                      const r7 = n6[e6];
                      if (void 0 === r7) continue;
                      if ("up" !== Lr.kind || void 0 === qr || $r !== t5) return;
                      const o4 = (0, mt.rememberedMountReplay)(r7);
                      if (void 0 === o4) continue;
                      const i4 = (0, mt.harnessRecoveryStartDelayMs)({ fromPhase: (0, mt.createDownPhase)({ reason: "gate_off", since: 0 }), jitterMs: cn.startJitterMs });
                      if (i4 > 0 && await new Promise((e7) => setTimeout(e7, i4)), "up" !== Lr.kind || void 0 === qr || $r !== t5) return;
                      const a3 = "self" === o4.kind ? await qr.ensureMountedSelfAwaited(o4.agentId) : "peer" === o4.kind ? await qr.ensureMountedPeer({ peerAgentId: o4.agentId, ...void 0 !== o4.alias ? { alias: o4.alias } : {}, ...true === o4.isProjectStore ? { isProjectStore: true } : {} }) : await qr.ensureMountedShare({ shareId: o4.shareId, ...void 0 !== o4.alias ? { alias: o4.alias } : {} });
                      if ("mounted" === a3.outcome || "already-present" === a3.outcome) {
                        if ("up" !== Lr.kind || void 0 === qr || $r !== t5) return;
                      } else s5 = false;
                    }
                    $r === t5 && s5 && (on = [], an = true);
                  })(t4, a2));
                });
              } catch (e5) {
                if (t4.appendLine(`[cursor-agent-exec] Failed to resolve agent store base: ${String(e5)}`), "starting" === Lr.kind && $r === a2) {
                  const e6 = qr;
                  qr = void 0, Dr = void 0, Yr = void 0, On(), void 0 !== e6 && e6.dispose(), Pn(t4, (0, mt.startFailedHarnessPhase)({ previous: s4, now: Date.now(), config: cn }), "start_failed");
                }
              }
            })(e3, t3, r3, n3);
            zr = s3;
            try {
              await s3;
            } finally {
              zr = void 0;
            }
          })(e2, t2, r2, s2);
        case "stand-down":
          return void await hs(t2, { reason: "gate_off" });
        case "none":
          return (0, mt.shouldPromoteDueNoneToProbe)({ trigger: r2, phase: Lr, now: Date.now(), config: cn }) ? void queueMicrotask(() => {
            Mn(t2);
          }) : void Rn(t2);
      }
    }
    function ms() {
      qr?.setIdleQuiesceEnabledListener(void 0), Ur?.dispose(), Ur = void 0, Fr?.(), Fr = void 0, Nr?.dispose(), Nr = void 0;
    }
    async function hs(e2, t2) {
      const r2 = (0, mt.classifyHarnessDownReason)(t2.reason), n2 = "extension_deactivate" !== r2;
      if (void 0 !== Kr && await Kr, n2 && (0, mt.isHarnessLatchedDown)(Lr) && void 0 === qr && void 0 === Dr) {
        const n3 = (0, mt.remintAlreadyDownPhase)({ phase: Lr, downReason: r2, now: Date.now(), config: cn, retryAfterMs: t2.retryAfterMs, previousDownAttempts: Zr });
        return Cn(), $r += 1, void 0 !== n3 && (Cn(), $r += 1, Pn(e2, n3, t2.reason)), void await Tr(ns);
      }
      if (void 0 !== Kr) return;
      const s2 = (async function(e3, t3, r3, n3) {
        try {
          $r += 1, Pn(e3, { kind: "stopping", next: r3 }, t3), On(), _n = false, void 0 !== vn && (clearTimeout(vn), vn = void 0), await wn?.catch(() => {
          }), await xn, cn = (0, mt.harnessRecoveryConfigFromClient)(await Nn(e3)), ms();
          const s3 = qr;
          "extension_deactivate" === r3 || "latch" === cn.policy ? (on = [], an = true) : on = (0, mt.snapshotRememberedHarnessMounts)({ live: s3?.listMounts() ?? [], pending: on, replayComplete: an, max: cn.rememberedMountsMax }), qr = void 0, Dr = void 0, Yr = void 0, pn.clear(), En.clear(), (function() {
            for (const e4 of [...Gr.keys()]) gs(e4);
          })(), yn.forgetResolution(), yn.clearMountKeys();
          for (const [e4, t4] of dn) "principal" === t4.kind && dn.delete(e4);
          if (e3.appendLine(`[cursor-agent-exec] Agent store harness stood down (${t3})`), void 0 !== s3) try {
            await s3.dispose();
          } catch (t4) {
            e3.appendLine(`[cursor-agent-exec] controller dispose failed: ${String(t4)}`);
          }
          Pn(e3, (0, mt.createDownPhase)({ reason: r3, since: Date.now(), attempts: (0, mt.nextDownAttempts)({ reason: r3, previousDownAttempts: Zr }), retryAfterMs: n3, config: cn }), t3);
        } finally {
          await Tr(ns);
        }
      })(e2, t2.reason, r2, t2.retryAfterMs);
      Kr = s2;
      try {
        await s2;
      } finally {
        Kr = void 0;
      }
    }
    function fs() {
      return { ensureFilesDir: (e2) => Ir(ns, e2), requestMount: (e2, t2) => {
        const r2 = () => {
          true !== qr?.hasSelfMount(e2) && true !== qr?.hasNonSelfMount(e2) || gs(e2);
        };
        let n2;
        "write_detected" === t2 ? n2 = qr?.requestDeferredSelfMount(e2, t2) : "resume" === t2 ? n2 = qr?.openAdmittedLazySelf(e2, t2) : (qr?.recordMountRequested(e2, t2), qr?.ensureMounted(e2)), r2(), void 0 !== n2 && n2.then(r2, r2);
      } };
    }
    function gs(e2) {
      const t2 = Gr.get(e2);
      if (void 0 !== t2) {
        Gr.delete(e2);
        try {
          t2.close();
        } catch {
        }
      }
    }
    function ys(e2, t2) {
      if (Gr.has(e2) || true === qr?.hasSelfMount(e2) || true === qr?.hasNonSelfMount(e2)) return;
      const r2 = (function(e3, t3, r3 = rr.watch) {
        try {
          return r3(e3, { recursive: true }, t3);
        } catch {
          try {
            return r3(e3, t3);
          } catch {
            return;
          }
        }
      })(t2, () => {
        !(function(e3, t3) {
          Jn("touch"), Sr(fs(), e3, t3);
        })(e2, "write_detected");
      });
      void 0 !== r2 && (Gr.set(e2, r2), r2.on("error", () => {
        gs(e2);
      }));
    }
    function ws(e2, t2, r2) {
      if (void 0 === qr) return vs(e2);
      const n2 = (0, mt.admitLocalAgentStore)({ agentId: e2, policy: qr.mountPolicy(), reason: t2, indexPopulated: qr.localStoreIndexIsPopulated(e2), resumeRequested: r2 });
      if ("mount" === n2.action) {
        "resume" !== n2.reason && gs(e2);
        const t3 = (function(e3, t4) {
          return Jn("touch"), (function(e4, t5, r3) {
            const n3 = br(e4, t5);
            if (void 0 !== n3) return Sr(e4, t5, r3), n3;
          })(fs(), e3, t4);
        })(e2, n2.reason);
        return "resume" === n2.reason && void 0 !== t3 && true !== qr.hasSelfMount(e2) && true !== qr.hasNonSelfMount(e2) && ys(e2, t3), t3;
      }
      const s2 = vs(e2);
      return void 0 !== s2 ? (qr?.noteDeferredLocalStore(e2, t2), ys(e2, s2), s2) : void 0;
    }
    function vs(e2) {
      return Jn("touch"), br(fs(), e2);
    }
    function _s(e2 = () => true, t2) {
      return { listJournalRefs: () => {
        if (!e2()) return [];
        const r2 = "function" == typeof t2 ? t2() : t2, n2 = r2?.trim();
        return void 0 === n2 || 0 === n2.length ? [] : qr?.listConflictJournalRefs(n2) ?? [];
      } };
    }
    function bs(e2 = () => true, t2) {
      return async (r2) => {
        const n2 = qr;
        if (void 0 === n2 || !e2()) return "not_store_path";
        const s2 = t2?.(), o2 = n2.resolveConflictNoticeMountKeyForPath({ absPath: r2, basePaths: s2 });
        if (void 0 === o2) return "not_store_path";
        const i2 = await n2.forceSyncPathForConflictNotices({ mountKey: o2, absPath: r2, basePaths: s2 });
        return "synced-path" === i2 ? "synced_path" : i2;
      };
    }
    function Ss() {
      return () => qr?.writeBarrierTimeoutMs() ?? mt.AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS.writeBarrierTimeoutMs;
    }
    function ks() {
      return (e2) => {
        qr?.recordWriteBarrier(e2);
      };
    }
    function xs(e2 = () => true, t2) {
      return { listMounts: (t3) => e2() ? qr?.listConflictNoticeMounts(t3) ?? [] : [], resolveMountKeyForPath: (e3) => qr?.resolveConflictNoticeMountKeyForPath({ absPath: e3, basePaths: t2?.() }), resolveWrittenPathAbs: (e3) => qr?.resolveConflictNoticeWrittenPath({ absPath: e3, basePaths: t2?.() }), isMountDirty: (e3) => qr?.isConflictNoticeMountDirty(e3) ?? false, forceSyncMount: async (e3) => await qr?.forceSyncForConflictNotices(e3) ?? "absent", forceSyncMountPath: async ({ mountKey: e3, absPath: r2, timeoutMs: n2 }) => await qr?.forceSyncPathForConflictNotices({ mountKey: e3, absPath: r2, basePaths: t2?.(), timeoutMs: n2 }) ?? "absent" };
    }
    function Es(e2) {
      const t2 = /* @__PURE__ */ new Map();
      return (r2) => {
        if (!Dr) return {};
        const n2 = r2.get(te), s2 = n2?.conversationId, o2 = s2 ?? e2.sessionId;
        try {
          (0, ut._b)(o2);
        } catch {
          return {};
        }
        let i2 = t2.get(o2);
        if (void 0 === i2 || !rs.has(o2)) {
          t2.delete(o2);
          const e3 = void 0 !== qr;
          if (i2 = ws(o2, "env_provider", true === n2?.resumeAgentStore), void 0 === i2) return {};
          e3 && t2.set(o2, i2);
        }
        const a2 = { [vt.jO]: i2 }, c2 = En.has(o2);
        return (dn.size > 0 || c2) && void 0 !== Yr && (a2[vt.eX] = (function(e3, t3) {
          const r3 = /* @__PURE__ */ Object.create(null), n3 = void 0 !== t3 ? En.get(t3) : void 0;
          if (void 0 !== n3) for (const t4 of n3.values()) {
            try {
              (0, ut.rs)(t4.filesDir);
            } catch (r4) {
              e3.appendLine(`[cursor-agent-exec] omitting inherited mount alias ${t4.alias} from env: ${sr(r4)}`);
              continue;
            }
            r3[t4.alias] = { path: t4.filesDir, readOnly: t4.readOnly };
          }
          for (const [t4, n4] of dn) if (void 0 === r3[n4.alias]) {
            try {
              (0, ut.rs)(n4.filesDir);
            } catch (r4) {
              e3.appendLine(`[cursor-agent-exec] omitting mount alias ${n4.alias} (${t4}) from env: ${sr(r4)}`);
              continue;
            }
            r3[n4.alias] = { path: n4.filesDir, readOnly: "share" === n4.kind };
          }
          return JSON.stringify(r3);
        })(Yr, o2)), a2;
      };
    }
    var Is = __webpack_require__(65716);
    class Ts extends Error {
      constructor(e2, t2) {
        super(`Refusing to move "${e2}": it is not a skill folder under "${t2}"`), this.skillDir = e2, this.expectedRoot = t2, this.name = "StoreSkillGuardViolationError";
      }
    }
    function Cs(e2) {
      const t2 = e2?.code;
      return "string" == typeof t2 ? t2 : e2 instanceof Error ? e2.name : "unknown";
    }
    function Ps(e2, t2) {
      if (!(0, v.isAbsolute)(t2) || !(0, v.isAbsolute)(e2)) return;
      const r2 = (0, v.relative)((0, v.resolve)(t2), (0, v.resolve)(e2));
      return "" === r2 || (0, v.isAbsolute)(r2) || ".." === r2.split(v.sep)[0] ? void 0 : (function(e3) {
        return e3.replace(/\\/g, "/");
      })(r2);
    }
    function As(e2) {
      return (0, v.join)(e2, ".cursor", "skills");
    }
    async function Rs(e2) {
      try {
        return await (0, W.stat)(e2), true;
      } catch {
        return false;
      }
    }
    async function Ms(e2) {
      const t2 = [];
      let r2;
      try {
        r2 = await (0, W.readdir)(e2, { withFileTypes: true });
      } catch {
        return t2;
      }
      for (const n2 of r2) {
        const r3 = (0, v.join)(e2, n2.name);
        n2.isDirectory() ? t2.push(...await Ms(r3)) : n2.isFile() && t2.push(r3);
      }
      return t2;
    }
    async function Js(e2) {
      let t2 = 0;
      for (const r2 of await Ms(e2)) try {
        t2 = Math.max(t2, (await (0, W.stat)(r2)).mtimeMs);
      } catch {
      }
      return t2;
    }
    function Os(e2) {
      return { confirmed: false, deleted: false, reason: e2 };
    }
    async function Bs(e2, t2, r2) {
      if (!await Rs(r2.sourceSkillFilePath)) return { confirmed: false, reason: t2.sourceMissingReason };
      await e2.saveDirtyDocumentsUnder(t2.sourceDir);
      const n2 = void 0 === r2.clearExistingDestination ? void 0 : { clear: r2.clearExistingDestination, stagingDir: (s2 = t2.destinationDir, (0, v.join)((0, v.dirname)(s2), `.${(0, v.basename)(s2)}.copy-${(0, tr.randomUUID)().slice(0, 8)}`)) };
      var s2;
      const o2 = void 0 !== n2;
      if (void 0 === n2 && await (async function(e3) {
        try {
          return await (0, W.lstat)(e3), true;
        } catch {
          return false;
        }
      })(t2.destinationDir)) return { confirmed: false, reason: "destination-exists" };
      const i2 = n2?.stagingDir ?? t2.destinationDir;
      try {
        await (0, W.mkdir)((0, v.dirname)(i2), { recursive: true }), await (0, W.cp)(t2.sourceDir, i2, { recursive: true, dereference: true, force: false, errorOnExist: true });
      } catch (r3) {
        return (function(e3) {
          const t3 = e3?.code;
          return "ERR_FS_CP_EEXIST" === t3 || "ERR_FS_CP_DIR_TO_NON_DIR" === t3;
        })(r3) ? { confirmed: false, reason: "destination-exists" } : (e2.logWarning(`${t2.label}: copy failed`, { code: Cs(r3) }), await Fs({ deps: e2, copyTarget: i2, label: t2.label }), { confirmed: false, reason: "copy-failed" });
      }
      if (!await Rs((0, v.join)(i2, "SKILL.md"))) return await Fs({ deps: e2, copyTarget: i2, label: t2.label }), { confirmed: false, reason: "destination-missing" };
      if (void 0 !== n2) {
        const r3 = await n2.clear();
        if (void 0 !== r3) return await Fs({ deps: e2, copyTarget: n2.stagingDir, label: t2.label }), { confirmed: false, reason: r3 };
        try {
          await (0, W.rename)(n2.stagingDir, t2.destinationDir);
        } catch (r4) {
          return e2.logWarning(`${t2.label}: could not move the staged copy in`, { code: Cs(r4) }), { confirmed: false, reason: "copy-failed" };
        }
      }
      const a2 = await Ms(t2.destinationDir);
      if (0 === a2.length) return await Fs({ deps: e2, copyTarget: t2.destinationDir, label: t2.label }), { confirmed: false, reason: "destination-missing" };
      let c2;
      try {
        c2 = await t2.confirmDurable(a2);
      } catch (r3) {
        e2.logWarning(`${t2.label}: durability check failed`, { code: Cs(r3) }), c2 = "not-synced";
      }
      if (void 0 !== c2) return e2.logWarning(`${t2.label}: destination not durable, keeping source`, { code: c2 }), o2 || await Fs({ deps: e2, copyTarget: t2.destinationDir, label: t2.label }), { confirmed: false, reason: c2 };
      for (const r3 of a2) if (!await Rs(r3)) return e2.logWarning(`${t2.label}: destination vanished during the round`, { code: "destination-missing" }), { confirmed: false, reason: "destination-missing" };
      return { confirmed: true, copiedFiles: a2 };
    }
    async function Ds(e2, t2, r2) {
      if (!await Rs(r2)) return { confirmed: true, deleted: false, reason: t2.sourceMissingReason };
      try {
        await e2.deleteDirectoryToTrash(t2.sourceDir);
      } catch (r3) {
        return e2.logWarning(`${t2.label}: confirmed but failed to trash the source`, { code: Cs(r3) }), { confirmed: true, deleted: false, reason: "delete-failed" };
      }
      return { confirmed: true, deleted: true, filesMove: { previousDir: t2.sourceDir, nextDir: t2.destinationDir } };
    }
    async function qs(e2, t2, r2) {
      if (!await Rs(r2.skillFilePath)) return Os(t2.sourceMissingReason);
      const n2 = await Rs(t2.destinationDir);
      if (n2 && true !== r2.overwriteAlreadyApproved) {
        const r3 = await (async function(e3) {
          const [t3, r4] = await Promise.all([Js(e3.destinationDir), Js(e3.sourceDir)]);
          return { relativePath: e3.relativePath, destinationModifiedMs: t3, sourceModifiedMs: r4, newerCopy: t3 === r4 ? "same" : t3 > r4 ? "destination" : "source" };
        })({ relativePath: t2.relativePath, destinationDir: t2.destinationDir, sourceDir: t2.sourceDir });
        if (!await e2.confirmStoreOverwrite(r3)) return Os("destination-declined");
      }
      const s2 = await Bs(e2, t2, { sourceSkillFilePath: r2.skillFilePath, clearExistingDestination: n2 ? Ns({ deps: e2, destinationDir: t2.destinationDir, label: t2.label }) : void 0 });
      return s2.confirmed ? await Ds(e2, t2, r2.skillFilePath) : Os(s2.reason);
    }
    function Ns(e2) {
      return async () => {
        try {
          return void await e2.deps.deleteDirectoryToTrash(e2.destinationDir);
        } catch (t2) {
          return e2.deps.logWarning(`${e2.label}: failed to trash the copy being replaced`, { code: Cs(t2) }), "delete-failed";
        }
      };
    }
    async function Fs(e2) {
      const t2 = await (0, W.lstat)(e2.copyTarget).catch(() => {
      });
      if (void 0 !== t2 && t2.isDirectory()) try {
        await (0, W.rm)(e2.copyTarget, { recursive: true, force: true });
      } catch (t3) {
        e2.deps.logWarning(`${e2.label}: failed to clean up a partial copy`, { code: Cs(t3) });
      }
    }
    async function Us(e2, t2) {
      const r2 = (0, v.dirname)(t2.skillFilePath), n2 = (function(e3) {
        if ((0, v.isAbsolute)(e3.userHomeDirectory)) return Ps(e3.skillDir, As(e3.userHomeDirectory));
      })({ skillDir: r2, userHomeDirectory: e2.userHomeDirectory });
      if (void 0 === n2) throw new Ts(r2, As(e2.userHomeDirectory));
      if (!(0, v.isAbsolute)(e2.agentStoreSkillsDir)) throw new Ts(r2, e2.agentStoreSkillsDir);
      return await qs(e2, { sourceDir: r2, destinationDir: (0, v.join)(e2.agentStoreSkillsDir, ...n2.split("/")), relativePath: n2, sourceMissingReason: "source-missing", confirmDurable: async (t3) => /* @__PURE__ */ (function(e3) {
        return "synced-path" === e3;
      })(await e2.requestScopedSync(t3)) ? void 0 : "not-synced", label: "Move skill to store" }, t2);
    }
    async function Ls(e2, t2) {
      const r2 = (0, v.dirname)(t2.skillFilePath), n2 = (function(e3) {
        return Ps(e3.skillDir, e3.agentStoreSkillsDir);
      })({ skillDir: r2, agentStoreSkillsDir: e2.agentStoreSkillsDir });
      if (void 0 === n2) throw new Ts(r2, e2.agentStoreSkillsDir);
      if (!(0, v.isAbsolute)(e2.userHomeDirectory)) throw new Ts(r2, e2.userHomeDirectory);
      return await qs(e2, { sourceDir: r2, destinationDir: (0, v.join)(As(e2.userHomeDirectory), ...n2.split("/")), relativePath: n2, sourceMissingReason: "nothing-to-move", confirmDurable: async () => {
      }, label: "Move skill out of store" }, t2);
    }
    const $s = 4;
    async function js(e2) {
      const t2 = [];
      return await Gs(e2, e2, t2), t2;
    }
    async function Gs(e2, t2, r2) {
      let n2;
      try {
        n2 = await (0, W.readdir)(t2, { withFileTypes: true });
      } catch (e3) {
        if ("ENOENT" === Cs(e3)) return;
        throw e3;
      }
      n2.sort((e3, t3) => e3.name < t3.name ? -1 : e3.name > t3.name ? 1 : 0);
      for (const s2 of n2) {
        if (!s2.isDirectory() || s2.name.startsWith(".")) continue;
        const n3 = (0, v.join)(t2, s2.name), o2 = Ps(n3, e2);
        void 0 !== o2 && (await Rs((0, v.join)(n3, "SKILL.md")) ? r2.push(o2) : await Gs(e2, n3, r2));
      }
    }
    async function zs(e2, t2, r2) {
      for (const e3 of [t2.sourceRoot, t2.destinationRoot]) if (!(0, v.isAbsolute)(e3)) throw new Ts(t2.sourceRoot, e3);
      const n2 = await js(t2.sourceRoot), s2 = n2.length, o2 = [], i2 = [];
      return await (0, Is.up)(n2, async (n3) => {
        if (true === r2.isCancelled?.()) return;
        const a2 = await (async function(e3, t3, r3) {
          const n4 = r3.split("/"), s3 = (0, v.join)(t3.destinationRoot, ...n4);
          for (let r4 = 1; r4 < n4.length; r4++) {
            const s4 = (0, v.join)(t3.destinationRoot, ...n4.slice(0, r4));
            if (await Rs((0, v.join)(s4, "SKILL.md"))) return e3.logWarning(`${t3.label}: destination path is inside an existing skill`, { code: "destination-exists" }), { status: "failed", reason: "destination-exists" };
          }
          const o3 = await Rs((0, v.join)(s3, "SKILL.md")), i3 = (0, v.join)(t3.sourceRoot, ...n4);
          try {
            const n5 = await Bs(e3, { sourceDir: i3, destinationDir: s3, relativePath: r3, sourceMissingReason: t3.sourceMissingReason, confirmDurable: t3.confirmDurable, label: t3.label }, { sourceSkillFilePath: (0, v.join)(i3, "SKILL.md"), clearExistingDestination: o3 ? Ns({ deps: e3, destinationDir: s3, label: t3.label }) : void 0 });
            return n5.confirmed ? { status: "copied" } : { status: "failed", reason: n5.reason };
          } catch (r4) {
            return e3.logWarning(`${t3.label}: copy threw`, { code: Cs(r4) }), { status: "failed", reason: "copy-failed" };
          }
        })(e2, t2, n3);
        switch (a2.status) {
          case "copied":
            o2.push(n3);
            break;
          case "failed":
            i2.push({ relativePath: n3, reason: a2.reason });
        }
        r2.onProgress?.({ total: s2, done: o2.length });
      }, { max: $s }), { complete: o2.length === s2, copied: o2, failed: i2 };
    }
    async function Ws(e2, t2) {
      for (const e3 of [t2.sourceRoot, t2.destinationRoot]) if (!(0, v.isAbsolute)(e3)) throw new Ts(t2.sourceRoot, e3);
      const r2 = t2.relativePaths.map((e3) => {
        const r3 = e3.split("/"), n3 = (0, v.join)(t2.sourceRoot, ...r3);
        if (void 0 === Ps(n3, t2.sourceRoot)) throw new Ts(n3, t2.sourceRoot);
        return r3;
      }), n2 = await (0, Is.up)(r2, async (r3) => await Ds(e2, { sourceDir: (0, v.join)(t2.sourceRoot, ...r3), destinationDir: (0, v.join)(t2.destinationRoot, ...r3), sourceMissingReason: t2.sourceMissingReason, label: t2.label }, (0, v.join)(t2.sourceRoot, ...r3, "SKILL.md")), { max: $s }), s2 = [];
      let o2 = 0;
      for (const e3 of n2) {
        const t3 = "fulfilled" === e3.status ? e3.value.filesMove : void 0;
        void 0 !== t3 ? s2.push(t3) : o2++;
      }
      return { moves: s2, failedCount: o2 };
    }
    const Hs = "cursor.skillStore.copySkillsToStore", Ks = "cursor.skillStore.copySkillsFromStore", Vs = "cursor.skillStore.confirmStoreSkillsSynced", Ys = "cursor.skillStore.trashMigratedHomeSkills", Qs = "cursor.skillStore.trashMigratedStoreSkills", Xs = "cursor.skillStore.reportMigrationProgress", Zs = "cursor.skillStore.isMigrationCancelled", eo = Object.freeze({ complete: false, doneCount: 0, total: 0, failed: Object.freeze([Object.freeze({ reason: "store-unavailable" })]) }), to = "Move skill to store", ro = "Move skill out of store";
    function no() {
      const [e2] = yn.targetDirs();
      return e2;
    }
    function so() {
      const e2 = no();
      if (void 0 !== e2) return { deleteDirectoryToTrash: Re, requestScopedSync: Fn, saveDirtyDocumentsUnder: ye, confirmStoreOverwrite: async () => false, userHomeDirectory: (0, fe.homedir)(), agentStoreSkillsDir: e2, logWarning: (e3, t2) => {
        ee.warn((0, f.q6)(), e3, { code: t2.code });
      } };
    }
    let oo;
    async function io(e2) {
      const t2 = oo;
      if (void 0 !== t2) return await t2;
      const r2 = (async function(e3) {
        const t3 = so();
        if (void 0 === t3) return eo;
        const r3 = e3(t3);
        let n2 = false;
        const s2 = () => {
          (async () => {
            try {
              n2 = true === await H.commands.executeCommand(Zs);
            } catch {
            }
          })();
        };
        s2();
        let o2 = 0;
        const i2 = await zs(t3, r3, { isCancelled: () => n2, onProgress: (e4) => {
          o2 = e4.total, s2(), H.commands.executeCommand(Xs, { done: e4.done, total: e4.total }).then(void 0, () => {
          });
        } }), a2 = i2.copied.length;
        if (!i2.complete) return { complete: false, doneCount: a2, total: Math.max(o2, a2 + i2.failed.length), failed: i2.failed.map((e4) => ({ reason: e4.reason })) };
        return { complete: true, doneCount: a2, total: Math.max(o2, a2), migratedRelativePaths: [...i2.copied].sort() };
      })(e2);
      oo = r2;
      try {
        return await r2;
      } finally {
        oo === r2 && (oo = void 0);
      }
    }
    function ao(e2) {
      return { sourceRoot: As(e2.userHomeDirectory), destinationRoot: e2.agentStoreSkillsDir, confirmDurable: async (t2) => "synced-path" === await e2.requestScopedSync(t2) ? void 0 : "not-synced", sourceMissingReason: "source-missing", label: to };
    }
    function co(e2) {
      return { sourceRoot: e2.agentStoreSkillsDir, destinationRoot: As(e2.userHomeDirectory), confirmDurable: async () => {
      }, sourceMissingReason: "nothing-to-move", label: ro };
    }
    function lo(e2, t2) {
      if (void 0 === t2 || !Array.isArray(t2.relativePaths) || t2.relativePaths.some((e3) => "string" != typeof e3 || "" === e3.trim())) throw new Error(`${e2} requires relativePaths, a list of non-empty strings`);
    }
    function uo(e2) {
      e2.subscriptions.push(H.commands.registerCommand(Hs, async () => await io(ao)), H.commands.registerCommand(Ks, async () => await io(co)), H.commands.registerCommand(Vs, async () => await (async function() {
        const e3 = no();
        if (void 0 === e3) return { confirmed: false, reason: "store-unavailable" };
        const t2 = await Ms(e3), r2 = await Fn(t2);
        return "synced-path" === r2 || 0 === t2.length && "synced" === r2 ? { confirmed: true } : { confirmed: false, reason: r2 };
      })()), H.commands.registerCommand(Ys, async (e3) => (lo("trashMigratedHomeSkills", e3), await (async function(e4) {
        const t2 = so();
        return void 0 === t2 ? { moves: [], failedCount: e4.relativePaths.length } : await Ws(t2, { sourceRoot: As(t2.userHomeDirectory), destinationRoot: t2.agentStoreSkillsDir, relativePaths: e4.relativePaths, sourceMissingReason: "source-missing", label: to });
      })(e3))), H.commands.registerCommand(Qs, async (e3) => (lo("trashMigratedStoreSkills", e3), await (async function(e4) {
        const t2 = so();
        return void 0 === t2 ? { moves: [], failedCount: e4.relativePaths.length } : await Ws(t2, { sourceRoot: t2.agentStoreSkillsDir, destinationRoot: As(t2.userHomeDirectory), relativePaths: e4.relativePaths, sourceMissingReason: "nothing-to-move", label: ro });
      })(e3))));
    }
    const po = "cursor.skillStore.moveSkillToStore", mo = "cursor.skillStore.moveSkillOutOfStore", ho = "cursor.skillStore.confirmOverwrite", fo = { confirmed: false, deleted: false, storeUnavailable: true };
    function go(e2) {
      const [t2] = yn.get();
      if (void 0 !== t2) return { deleteDirectoryToTrash: Re, requestScopedSync: Fn, saveDirtyDocumentsUnder: ye, confirmStoreOverwrite: async (t3) => await (async function(e3, t4) {
        try {
          return true === await H.commands.executeCommand(ho, { kind: e3, collision: t4 });
        } catch (e4) {
          return ee.warn((0, f.q6)(), "Skill store move: overwrite prompt failed", { error: String(e4) }), false;
        }
      })(e2, t3), userHomeDirectory: (0, fe.homedir)(), agentStoreSkillsDir: t2, logWarning: (e3, t3) => {
        ee.warn((0, f.q6)(), e3, { code: t3.code });
      } };
    }
    async function yo(e2, t2) {
      const r2 = go(e2);
      if (void 0 === r2) return fo;
      const n2 = "moveToStore" === e2 ? Us : Ls;
      try {
        return await n2(r2, { skillFilePath: t2.skillFilePath });
      } catch (e3) {
        if (e3 instanceof Ts) return { confirmed: false, deleted: false, guardViolation: true };
        throw e3;
      }
    }
    function wo(e2, t2) {
      if (void 0 === t2 || "string" != typeof t2.skillFilePath || "" === t2.skillFilePath.trim()) throw new Error(`${e2} requires a non-empty skillFilePath`);
    }
    var vo = __webpack_require__(43955);
    const _o = "You are in the user's home directory—the starting point, not a project workspace. Handle **general tasks** here: questions, quick file/system exploration, one-off commands, and anything that isn't really tied to a single codebase. Use your judgment.\n\nWhen the work belongs in a **project workspace**, infer or confirm the folder (recent paths, ~/Projects/, ~/Developer/, ~/repos/, and what the user said). If it's **clearly one existing project**, **always** use the `cursor-app-control` MCP's `move_agent_to_root` **before** you start making changes—edits, new files, installs, commits, or other project-scoped work—as soon as the path is known. Do that work only **after** the move; don't begin from home and relocate later. Working inside the project beats staying on home. If **which project or path is unclear**, use the ask question tool first. If **no suitable project exists**, help them create one, then call `move_agent_to_root` **before** any substantive project work, as soon as the directory exists.\n\n## Questions About Cursor\n\nWhen users ask how to use Cursor, configure settings, or have questions about Cursor features, use the cursor-guide skill to provide accurate, up-to-date answers.\n\n## Creating New Projects\n\nWhen a user wants to build something, help them get set up in a new project:\n\n1. Use the ask question tool to confirm the project name. Suggest a sensible default based on what they described. Include a brief \"any preferences for setup?\" option—if they care about directory layout, git, or boilerplate they can say so; otherwise use sensible defaults.\n2. Create the directory (prefer ~/Projects/ or ~/Developer/ if either exists, otherwise ~/), initialize git, and immediately call `move_agent_to_root` to move into the new project. Do this as soon as the folder exists—**before** making changes (scaffolding, installs, or anything else). Do not start project work from home and move afterward. Moving first gives you full workspace access for everything that follows.\n3. Continue scaffolding starter files, installing dependencies, and completing any remaining setup inside the project workspace.\n\nKeep setup frictionless by default—handle git, structure, and boilerplate without forcing decisions on things they may not care about. If they state preferences, respect them and go as deep as they want.";
    function bo() {
      return new vo.DX({ fullPath: "Home workspace guidance", content: _o, type: new vo.f5({ type: { case: "global", value: new vo.i9() } }), source: vo.gv.TEAM });
    }
    var So = __webpack_require__(70857), ko = __webpack_require__(16928);
    const xo = "sandbox_read_control_portal";
    function Eo(e2) {
      let t2 = false, r2 = 0;
      const n2 = () => {
        const n3 = ++r2;
        Promise.resolve(e2.checkFeatureGate()).then((e3) => {
          n3 === r2 && (t2 = e3);
        }, () => {
          n3 === r2 && (t2 = false);
        });
      };
      n2();
      const s2 = e2.onDidChangeGates((e3) => {
        var t3;
        (void 0 === (t3 = e3.changedGates) || t3.includes(xo)) && n2();
      });
      return { getEnabled: () => t2, dispose: () => s2.dispose() };
    }
    const Io = "agent_exec", To = "mcp", Co = { disableConsoleFallback: true }, Po = (async () => {
      try {
        return await H.cursor.checkFeatureGate("mcp_structured_logging");
      } catch {
        return false;
      }
    })();
    function Ao(e2) {
      Po.then((t2) => {
        t2 && e2();
      });
    }
    function Ro(e2) {
      Ao(() => {
        H.cursor.logStructuredInfo(To, e2.message, { mcpMeta: { ...e2.metadata, subkey: e2.subkey, mcp_version: "snapshots" } }, Co);
      });
    }
    class Mo {
      log(e2, t2) {
        const { level: r2, message: n2, metadata: s2, error: o2 } = t2, i2 = o2 instanceof Error ? o2 : void 0;
        switch (r2) {
          case "debug":
            H.cursor.logStructuredDebug(Io, n2, s2);
            break;
          case "info":
            H.cursor.logStructuredInfo(Io, n2, s2);
            break;
          case "warn":
            H.cursor.logStructuredWarn(Io, n2, s2);
            break;
          case "error":
            H.cursor.logStructuredError(Io, n2, i2, s2);
            break;
          default:
            throw new Error(`Unhandled log level: ${r2}`);
        }
      }
    }
    class Jo {
      constructor(e2) {
        this.options = e2;
      }
      log(e2, t2) {
        Ao(() => {
          const e3 = this.buildMcpMetadata(t2.metadata), r2 = t2.error instanceof Error ? t2.error : void 0;
          switch (t2.level) {
            case "debug":
              H.cursor.logStructuredDebug(To, t2.message, e3, Co);
              break;
            case "info":
              H.cursor.logStructuredInfo(To, t2.message, e3, Co);
              break;
            case "warn":
              H.cursor.logStructuredWarn(To, t2.message, e3, Co);
              break;
            case "error":
              H.cursor.logStructuredError(To, t2.message, r2, e3, Co);
              break;
            default: {
              const e4 = t2.level;
              throw new Error(`Unhandled log level: ${e4}`);
            }
          }
        });
      }
      buildMcpMetadata(e2) {
        const t2 = { subkey: this.options.subkey, mcp_version: this.options.mcpVersion };
        if (void 0 !== this.options.identifier && (t2.identifier = this.options.identifier), e2) for (const [r2, n2] of Object.entries(e2)) t2[r2] = n2;
        return { mcpMeta: t2 };
      }
    }
    class Oo {
      constructor(e2, t2 = L.utt) {
        this.backend = e2, this.metadataKey = t2;
      }
      log(e2, t2) {
        if (true !== t2.metadata?.[this.metadataKey]) return;
        const r2 = { ...t2.metadata ?? {} };
        delete r2[this.metadataKey], this.backend.log(e2, { ...t2, metadata: r2 });
      }
    }
    class Bo {
      constructor(e2) {
        this.outputChannel = e2;
      }
      log(e2, t2) {
        const { level: r2, message: n2, metadata: s2, error: o2 } = t2;
        let i2 = n2;
        switch (s2 && Object.keys(s2).length > 0 && (i2 += ` ${JSON.stringify(s2)}`), r2) {
          case "debug":
            this.outputChannel.debug(i2), o2 && this.outputChannel.debug(this.formatError(o2));
            break;
          case "info":
            this.outputChannel.info(i2), o2 && this.outputChannel.info(this.formatError(o2));
            break;
          case "warn":
            this.outputChannel.warn(i2), o2 && this.outputChannel.warn(this.formatError(o2));
            break;
          case "error":
            this.outputChannel.error(i2), o2 && this.outputChannel.error(this.formatError(o2));
            break;
          default:
            throw new Error(`Unhandled log level: ${r2}`);
        }
      }
      formatError(e2) {
        return e2 instanceof Error ? `${e2.message}
${e2.stack ?? ""}` : String(e2);
      }
    }
    class Do {
      constructor(e2) {
        this.backends = e2;
      }
      log(e2, t2) {
        for (const r2 of this.backends) r2.log(e2, t2);
      }
    }
    class qo {
      record(e2, t2, r2, n2) {
        H.cursor.metricsGauge({ stat: t2.name, value: r2, tags: n2 });
      }
      increment(e2, t2, r2, n2) {
        H.cursor.metricsIncrement({ stat: t2.name, value: r2 ?? 1, tags: n2 });
      }
      gauge(e2, t2, r2, n2) {
        H.cursor.metricsGauge({ stat: t2.name, value: r2, tags: n2 });
      }
      histogram(e2, t2, r2, n2) {
        H.cursor.metricsDistribution({ stat: t2.name, value: r2, tags: n2 });
      }
    }
    var No = __webpack_require__(91022);
    function Fo(e2) {
      const t2 = (0, h.mJ)(e2), r2 = e2.get(te);
      return { spanContext: t2 ? { traceId: t2.traceId, spanId: t2.spanId, traceFlags: t2.traceFlags } : void 0, name: e2.name, conversationId: r2?.conversationId, composerId: r2?.composerId };
    }
    function Uo(e2) {
      const t2 = Fo(e2), r2 = new H.CancellationTokenSource(), n2 = () => {
        r2.cancel();
      };
      return e2.signal.aborted ? r2.cancel() : e2.signal.addEventListener("abort", n2), { serializableContext: t2, cancellationTokenSource: r2, dispose: () => {
        e2.signal.removeEventListener("abort", n2), r2.dispose();
      } };
    }
    var Lo = (e2, t2) => (t2 = Symbol[e2]) ? t2 : /* @__PURE__ */ Symbol.for("Symbol." + e2), $o = (e2) => {
      throw TypeError(e2);
    }, jo = (e2, t2, r2) => {
      var n2, s2;
      null != t2 ? ("object" != typeof t2 && "function" != typeof t2 && $o("Object expected"), r2 && (n2 = t2[Lo("asyncDispose")]), void 0 === n2 && (n2 = t2[Lo("dispose")], r2 && (s2 = n2)), "function" != typeof n2 && $o("Object not disposable"), s2 && (n2 = function() {
        try {
          s2.call(this);
        } catch (e3) {
          return Promise.reject(e3);
        }
      }), e2.push([r2, n2, t2])) : r2 && e2.push([r2]);
      return t2;
    }, Go = (e2, t2, r2) => {
      var n2 = "function" == typeof SuppressedError ? SuppressedError : function(e3, t3, r3, n3) {
        return (n3 = Error(r3)).name = "SuppressedError", n3.error = e3, n3.suppressed = t3, n3;
      }, s2 = (e3) => t2 = r2 ? new n2(e3, t2, "An error was suppressed during disposal") : (r2 = true, e3), o2 = (n3) => {
        for (; n3 = e2.pop(); ) try {
          var i2 = n3[1] && n3[1].call(n3[2]);
          if (n3[0]) return Promise.resolve(i2).then(o2, (e3) => (s2(e3), o2()));
        } catch (e3) {
          s2(e3);
        }
        if (r2) throw t2;
      };
      return o2();
    };
    class zo {
      constructor(e2) {
        this.configuredHooks = [], this.configuredSteps = /* @__PURE__ */ new Set(), this.subscription = H.cursor.onDidChangeHooks((e3) => {
          this.configuredHooks = e3, this.configuredSteps = new Set(e3.map((e4) => e4.step));
        }), this.initPromise = (async () => {
          var t2 = [];
          try {
            const r3 = e2 ? e2.withName("HooksConfigTracker.constructorInit") : (0, f.q6)().withName("HooksConfigTracker.constructorInit"), n3 = Fo(jo(t2, (0, h.VI)(r3)).ctx), s2 = await H.cursor.getConfiguredHooks(n3);
            this.configuredHooks = s2, this.configuredSteps = new Set(s2.map((e3) => e3.step));
          } catch (e3) {
            var r2 = e3, n2 = true;
          } finally {
            Go(t2, r2, n2);
          }
        })();
      }
      async initialize(e2) {
        var t2 = [];
        try {
          jo(t2, (0, h.VI)(e2.withName("HooksConfigTracker.initialize")));
          await this.initPromise;
        } catch (e3) {
          var r2 = e3, n2 = true;
        } finally {
          Go(t2, r2, n2);
        }
      }
      hasHookForStep(e2) {
        return this.configuredSteps.has(e2);
      }
      hasHookForRequest(e2, t2) {
        const r2 = (0, No.bi)(e2, t2);
        return this.configuredHooks.some((t3) => t3.step === e2 && (0, No.Qk)(t3.scripts, r2).length > 0);
      }
      getConfiguredHooks() {
        return [...this.configuredHooks];
      }
      getConfiguredSteps() {
        return new Set(this.configuredSteps);
      }
      dispose() {
        this.subscription.dispose();
      }
    }
    const Wo = require("perf_hooks"), Ho = (0, $.v5)("vscode.agent_exec.event_loop_delay_ms", { description: "Event loop delay in milliseconds" }), Ko = (0, $.wt)("vscode.agent_exec.event_loop_delay_min_ms", { description: "Minimum event loop delay in milliseconds" }), Vo = (0, $.wt)("vscode.agent_exec.event_loop_delay_max_ms", { description: "Maximum event loop delay in milliseconds" }), Yo = (0, $.wt)("vscode.agent_exec.event_loop_delay_mean_ms", { description: "Mean event loop delay in milliseconds" }), Qo = (0, $.wt)("vscode.agent_exec.memory_heap_used_mb", { description: "V8 heap used memory in megabytes" }), Xo = (0, $.wt)("vscode.agent_exec.memory_heap_total_mb", { description: "V8 heap total memory in megabytes" }), Zo = (0, $.wt)("vscode.agent_exec.memory_rss_mb", { description: "Resident set size memory in megabytes" }), ei = (0, $.wt)("vscode.agent_exec.memory_external_mb", { description: "External memory usage in megabytes" }), ti = (0, $.wt)("vscode.agent_exec.memory_array_buffers_mb", { description: "ArrayBuffers memory usage in megabytes" }), ri = (0, $.wt)("vscode.agent_exec.cpu_user_percent", { description: "CPU user time percentage" }), ni = (0, $.wt)("vscode.agent_exec.cpu_system_percent", { description: "CPU system time percentage" }), si = 1048576;
    function oi(e2) {
      return Number.isFinite(e2) ? e2 / 1e6 : 0;
    }
    class ii {
      constructor(e2 = () => Wo.monitorEventLoopDelay({ resolution: 20 })) {
        this.createMonitor = e2;
      }
      start() {
        if (void 0 !== this.monitor) throw new Error("Event-loop delay measurement is already running");
        this.monitor = this.createMonitor(), this.monitor.enable();
      }
      finish() {
        const e2 = this.monitor;
        if (void 0 === e2) throw new Error("Event-loop delay measurement is not running");
        return this.monitor = void 0, e2.disable(), { maxMs: oi(e2.max), meanMs: oi(e2.mean), p95Ms: oi(e2.percentile(95)) };
      }
      dispose() {
        this.monitor?.disable(), this.monitor = void 0;
      }
    }
    class ai {
      constructor(e2, t2 = 1e4) {
        this.intervalId = null, this.lastCpuUsage = null, this.lastCpuTime = 0, this.getContext = e2, this.intervalMs = t2, this.eventLoopMonitor = Wo.monitorEventLoopDelay({ resolution: 20 });
      }
      start() {
        null === this.intervalId && (this.eventLoopMonitor.enable(), this.lastCpuUsage = process.cpuUsage(), this.lastCpuTime = Date.now(), this.collectMetrics(), this.intervalId = setInterval(() => {
          this.collectMetrics();
        }, this.intervalMs));
      }
      stop() {
        null !== this.intervalId && (clearInterval(this.intervalId), this.intervalId = null), this.eventLoopMonitor.disable();
      }
      collectMetrics() {
        const e2 = this.getContext();
        this.collectEventLoopMetrics(e2), this.collectMemoryMetrics(e2), this.collectCpuMetrics(e2);
      }
      collectEventLoopMetrics(e2) {
        Ho.histogram(e2, oi(this.eventLoopMonitor.mean)), Ko.gauge(e2, oi(this.eventLoopMonitor.min)), Vo.gauge(e2, oi(this.eventLoopMonitor.max)), Yo.gauge(e2, oi(this.eventLoopMonitor.mean)), this.eventLoopMonitor.reset();
      }
      collectMemoryMetrics(e2) {
        const t2 = process.memoryUsage();
        Qo.gauge(e2, t2.heapUsed / si), Xo.gauge(e2, t2.heapTotal / si), Zo.gauge(e2, t2.rss / si), ei.gauge(e2, t2.external / si), ti.gauge(e2, t2.arrayBuffers / si);
      }
      collectCpuMetrics(e2) {
        const t2 = process.cpuUsage(), r2 = Date.now();
        if (null !== this.lastCpuUsage) {
          const n2 = 1e3 * (r2 - this.lastCpuTime), s2 = (t2.user - this.lastCpuUsage.user) / n2 * 100, o2 = (t2.system - this.lastCpuUsage.system) / n2 * 100;
          ri.gauge(e2, s2), ni.gauge(e2, o2);
        }
        this.lastCpuUsage = t2, this.lastCpuTime = r2;
      }
    }
    var ci = __webpack_require__(79896);
    const li = "ripgrep_invocation_monitor", ui = "ripgrep_invocation_monitor_config", di = { windowMs: 1e4, threshold: 50, maxRecords: 100, cooldownMs: 3e5, reportToSentry: true };
    async function pi(e2, t2) {
      let r2 = false;
      try {
        r2 = await H.cursor.checkFeatureGate(li);
      } catch {
        r2 = false;
      }
      if (!r2) return;
      let n2 = di;
      try {
        const e3 = await H.cursor.getDynamicConfigValue(ui);
        e3 && (n2 = { windowMs: e3.window_ms ?? di.windowMs, threshold: e3.threshold ?? di.threshold, maxRecords: e3.max_records ?? di.maxRecords, cooldownMs: e3.cooldown_ms ?? di.cooldownMs, reportToSentry: e3.report_to_sentry ?? di.reportToSentry });
      } catch {
        n2 = di;
      }
      const s2 = [];
      let o2 = 0;
      (0, L.o9_)((e3) => {
        try {
          s2.push(e3);
          const r3 = Math.max(1, n2.maxRecords, n2.threshold);
          s2.length > r3 && s2.splice(0, s2.length - r3);
          const i2 = e3.timestamp, a2 = i2 - n2.windowMs;
          let c2 = 0;
          for (let e4 = s2.length - 1; e4 >= 0 && s2[e4].timestamp >= a2; e4--) c2++;
          if (c2 < n2.threshold) return;
          if (!n2.reportToSentry) return;
          if (i2 - o2 < n2.cooldownMs) return;
          o2 = i2, ((e4, r4) => {
            const o3 = r4 - n2.windowMs, i3 = s2.filter((e5) => e5.timestamp >= o3), a3 = {}, c3 = {};
            for (const e5 of i3) a3[e5.source] = (a3[e5.source] ?? 0) + 1, c3[e5.mode] = (c3[e5.mode] ?? 0) + 1;
            const l2 = Object.entries(a3).sort((e5, t3) => t3[1] - e5[1])[0]?.[0] ?? "unknown", u2 = i3.length > 0 ? i3[0].timestamp : r4, d2 = n2.windowMs > 0 ? e4 / n2.windowMs * 1e3 : 0;
            try {
              H.cursor.captureException(new Error(`Excessive ripgrep invocations (agent-exec): ${e4} spawns in ${n2.windowMs}ms`), { client_error_type: "ripgrep_invocation_storm", force_upload: "forced", top_source: l2, "event.process": "extension-host" }, { level: "warning", fingerprint: ["ripgrep-invocation-storm", "agent-exec", l2], extra: { windowCount: e4, windowMs: n2.windowMs, threshold: n2.threshold, maxRecords: n2.maxRecords, bufferSize: s2.length, distinctSources: Object.keys(a3).length, windowSpanMs: r4 - u2, ratePerSec: d2.toFixed(1), sourceCounts: JSON.stringify(a3), modeCounts: JSON.stringify(c3) }, jsonAttachments: [{ filename: "ripgrep-invocations.json", json: JSON.stringify({ schemaVersion: 1, description: "Most recent ripgrep spawns from the agent-exec paths (agent grep/glob tool + ripwalk) before the storm threshold was crossed. No raw query text or paths are included.", windowMs: n2.windowMs, threshold: n2.threshold, windowCount: e4, sourceCounts: a3, modeCounts: c3, records: s2 }, null, 2) }] }), t2?.(`[ripgrep-monitor] reported storm: ${e4} spawns in ${n2.windowMs}ms (top=${l2})`);
            } catch (e5) {
              t2?.(`[ripgrep-monitor] report failed: ${String(e5)}`);
            }
          })(c2, i2);
        } catch {
        }
      }), e2.push(() => (0, L.o9_)(void 0)), t2?.(`[ripgrep-monitor] enabled (window=${n2.windowMs}ms threshold=${n2.threshold} maxRecords=${n2.maxRecords} report=${n2.reportToSentry})`);
    }
    var mi = __webpack_require__(47859), hi = __webpack_require__(91943), fi = __webpack_require__(87016);
    const gi = 1, yi = 2, wi = 3;
    function vi(e2) {
      switch (e2.installMode) {
        case gi:
        case "EFFECTIVE_PLUGIN_INSTALL_MODE_USER":
          return "user";
        case yi:
        case "EFFECTIVE_PLUGIN_INSTALL_MODE_TEAM_DEFAULT":
          return "team-default";
        case wi:
        case "EFFECTIVE_PLUGIN_INSTALL_MODE_TEAM_REQUIRED":
          return "team-required";
        default:
          return true === e2.isTeamRequired ? "team-required" : "user";
      }
    }
    const _i = "plugin_mcp_census", bi = "mcp_plugin_census", Si = "MCP plugin census", ki = "local";
    class xi {
      constructor(e2) {
        this.emit = e2;
      }
      report(e2) {
        const t2 = (function(e3) {
          return [e3.execHostRemoteName, e3.pluginHomeDirHash, e3.pluginsLoaded, e3.retainedFromPreviousLoad, e3.wasFirstLoad, e3.sourceUnavailable, e3.mcpDescriptorsProduced].join("|");
        })(e2);
        t2 !== this.lastSignature && (this.lastSignature = t2, this.emit(e2));
      }
    }
    async function Ei(e2) {
      return { plugins: await e2.getAllEnabledPlugins(), loadFailures: e2.getLoadFailures(), pluginSetIncomplete: e2.isPluginSetIncomplete() };
    }
    function Ii(e2) {
      return void 0 !== e2 && "config" in e2 ? Object.keys(e2.config.hooks) : [];
    }
    async function Ti(e2) {
      try {
        const t2 = await (0, hi.readFile)(e2, "utf-8");
        return JSON.parse(t2);
      } catch {
        return null;
      }
    }
    function Ci(e2) {
      const { pluginsService: t2, pluginMcpService: r2, pluginHooksService: n2, pluginCommandsService: s2, githubPluginsStore: o2, refreshPlugins: i2, pluginMetricsLogger: a2, backendMarketplaceClient: c2, workspacePaths: l2, requestRefreshSchedule: u2, secretStorage: d2, primitiveAuthorshipResolver: p2, sparsePluginClones: m2 } = e2, h2 = "localPluginVariables:", f2 = new xi((e3) => {
        a2.log("info", Si, { ...e3 }), Ro({ subkey: _i, message: Si, metadata: { event: bi, ...e3 } });
      }), g2 = async (e3) => Promise.all(e3.map(async (e4) => {
        const t3 = e4.identifier.sourceInfo.name, r3 = e4.identifier.source, n3 = (0, ge.xJd)(e4.identifier) ?? (0, ge.s4m)(e4.identifier), s3 = "cursor-first-party" === e4.identifier.source || "cursor-third-party" === e4.identifier.source || "claude-plugin" === e4.identifier.source ? e4.identifier.sourceInfo.version : void 0, o3 = "extension" === e4.identifier.source ? e4.identifier.sourceInfo.localPath : void 0, i3 = "extension" === e4.identifier.source ? e4.identifier.sourceInfo.extensionId : void 0;
        let a3;
        if ("user-local" === r3) try {
          const e5 = await d2.get(`${h2}${t3}`);
          e5 && (a3 = JSON.parse(e5));
        } catch {
        }
        const c3 = (0, ge.R3Q)(e4.identifier), l3 = void 0 !== e4.hooks && "config" in e4.hooks, u3 = Ii(e4.hooks);
        return { id: n3, name: t3, source: r3, version: s3, manifestVersion: e4.version, homepageUrl: e4.homepage, repositoryUrl: e4.repository, ...void 0 !== c3 && { marketplace: c3 }, installPath: e4.installPath, localPath: o3, extensionId: i3, loadError: e4.loadError, logoUrl: e4.logoUrl, skillsCount: e4.skills.length, agentsCount: e4.agents.length, commandsCount: e4.commands.length, hasHooks: l3, hooksCount: u3.length, mcpServersCount: e4.mcpConfig?.mcpServers ? Object.keys(e4.mcpConfig.mcpServers).length : 0, skillNames: e4.skills.map((e5) => e5.name ?? e5.path), agentNames: e4.agents.map((e5) => e5.name), ruleNames: e4.rules.map((e5) => e5.name), commandNames: e4.commands.map((e5) => e5.name), hookNames: u3, mcpServerNames: e4.mcpConfig?.mcpServers ? Object.keys(e4.mcpConfig.mcpServers) : [], capabilities: e4.capabilities, variablesSchema: e4.variablesSchema, configuredVariables: a3 };
      })), y2 = (e3, t3, r3) => {
        const n3 = e3.identifier.sourceInfo, s3 = e3.hooks && "config" in e3.hooks ? e3.hooks.sourcePath : void 0;
        return { rawIdentifier: t3, name: n3.name, displayName: e3.displayName ?? n3.name, description: e3.description ?? "", sources: r3, projectInstallKey: r3.includes("project") ? t3 : void 0, publisherName: e3.authorName, skills: e3.skills.map((e4) => ({ name: e4.name || e4.path, description: e4.description, sourcePath: e4.path })), subagents: e3.agents.map((e4) => ({ name: e4.name, description: e4.description, sourcePath: e4.path })), rules: e3.rules.map((e4) => ({ name: e4.name, description: e4.description, sourcePath: e4.path })), commands: e3.commands.map((e4) => ({ name: e4.name, description: e4.description, sourcePath: e4.path })), hooks: Ii(e3.hooks).map((e4) => ({ name: e4, sourcePath: s3 })), mcpServers: e3.mcpConfig?.mcpServers ? Object.keys(e3.mcpConfig.mcpServers).map((t4) => ({ name: t4, sourcePath: e3.mcpConfig?.mcpServerSourcePaths?.[t4] })) : [] };
      }, w2 = (e3, t3 = 0) => (e3.sort((e4, t4) => e4.rawIdentifier.localeCompare(t4.rawIdentifier)), e3.map((e4, r3) => ({ plugin: { id: -(t3 + r3 + 1), name: e4.name, displayName: e4.displayName, description: e4.description, ...void 0 !== e4.publisherName && e4.publisherName.trim().length > 0 && { publisher: { name: e4.publisherName, displayName: e4.publisherName } }, skills: e4.skills, subagents: e4.subagents, rules: e4.rules, commands: e4.commands, hooks: e4.hooks, mcpServers: e4.mcpServers }, scopes: e4.sources, projectInstallKey: e4.projectInstallKey }))), v2 = async () => {
        const e3 = [], r3 = /* @__PURE__ */ new Set();
        try {
          const { userEnabledPluginIds: n3, projectEnabledPluginIds: s3 } = await (async function(e4, t3) {
            const r4 = (0, ko.join)(e4, ".claude", "settings.json"), [n4, s4] = await Promise.all([Ti(r4), Promise.all(t3.map(async (e5) => {
              const [t4, r5] = await Promise.all([Ti((0, ko.join)(e5, ".claude", "settings.json")), Ti((0, ko.join)(e5, ".claude", "settings.local.json"))]);
              return { ...t4?.enabledPlugins ?? {}, ...r5?.enabledPlugins ?? {} };
            }))]), o4 = new Set(Object.entries(n4?.enabledPlugins ?? {}).filter(([, e5]) => true === e5).map(([e5]) => e5)), i3 = /* @__PURE__ */ new Set();
            for (const e5 of s4) for (const [t4, r5] of Object.entries(e5)) true === r5 && i3.add(t4);
            return { userEnabledPluginIds: o4, projectEnabledPluginIds: i3 };
          })(So.homedir(), l2), o3 = await t2.getAllEnabledPlugins();
          for (const t3 of o3) {
            if ("claude-plugin" !== t3.identifier.source) continue;
            const o4 = t3.identifier.sourceInfo, i3 = "raw" in o4 && "string" == typeof o4.raw ? o4.raw : o4.name;
            if (r3.has(i3)) continue;
            r3.add(i3);
            const a3 = [];
            n3.has(i3) && a3.push("user"), s3.has(i3) && a3.push("project"), 0 === a3.length && a3.push("user"), e3.push(y2(t3, i3, a3));
          }
        } catch (e4) {
          console.error("[cursor-agent-exec] Failed to get imported external plugins:", e4);
        }
        return w2(e3, 0);
      }, _2 = async () => {
        const e3 = [], r3 = /* @__PURE__ */ new Set();
        try {
          const n3 = await (0, ge.JJ1)(l2), s3 = await t2.getAllEnabledPlugins();
          for (const t3 of s3) {
            if ("cursor-third-party" !== t3.identifier.source) continue;
            const s4 = t3.identifier.sourceInfo, o3 = s4.name;
            if (r3.has(o3)) continue;
            r3.add(o3);
            const i3 = n3.find(({ key: e4 }) => {
              const t4 = (0, ge.kXx)(e4);
              return t4.name === s4.name && t4.marketplaceName === s4.marketplace;
            });
            if (!i3) continue;
            const a3 = y2(t3, i3.key, ["project"]);
            a3.projectInstallKey = i3.key, e3.push(a3);
          }
        } catch (e4) {
          console.error("[cursor-agent-exec] Failed to get cursor third-party plugins:", e4);
        }
        return w2(e3, 1e6);
      }, b2 = async (e3) => {
        const t3 = [];
        try {
          const r4 = await H.cursor.getEffectiveUserPlugins(e3);
          for (const e4 of r4?.plugins ?? []) e4.plugin && e4.isEnabled && t3.push({ plugin: e4.plugin, source: e4.isTeamRequired ? "team" : "user", isTeamRequired: e4.isTeamRequired, installMode: vi(e4), pinnedGitRef: e4.pinnedGitRef, configuredVariables: e4.configuredVariables, hasTeamConfiguredVariables: e4.hasTeamConfiguredVariables });
        } catch (e4) {
          throw oe(e4) || console.error("[cursor-agent-exec] Failed to get effective user plugins for installed list:", e4), e4;
        }
        try {
          const e4 = (await (0, ge.JJ1)(l2)).filter((e5) => !e5.entry.gitUrl);
          if (e4.length > 0) {
            const r4 = e4.map((e5) => (0, ge.kXx)(e5.key)), n4 = await H.cursor.resolveProjectPlugins(r4.map((e5) => ({ name: e5.name, marketplaceName: e5.marketplaceName })));
            for (const r5 of n4?.plugins ?? []) {
              const n5 = e4.find((e5) => {
                const t4 = (0, ge.kXx)(e5.key);
                return t4.name === r5.name && t4.marketplaceName === r5.marketplace?.name;
              });
              t3.push({ plugin: r5, source: "project", projectInstallKey: n5?.key });
            }
          }
        } catch (e4) {
          console.error("[cursor-agent-exec] Failed to resolve project plugins for installed list:", e4);
        }
        const r3 = { project: 0, team: 1, user: 2 }, n3 = /* @__PURE__ */ new Map();
        for (const e4 of t3) {
          const t4 = void 0 !== e4.plugin.id ? String(e4.plugin.id) : void 0;
          if (!t4) continue;
          const s3 = n3.get(t4);
          if (!s3) {
            n3.set(t4, { plugin: e4.plugin, scopes: [e4.source], projectInstallKey: e4.projectInstallKey, isTeamRequired: e4.isTeamRequired, installMode: e4.installMode, pinnedGitRef: e4.pinnedGitRef, configuredVariables: e4.configuredVariables, hasTeamConfiguredVariables: e4.hasTeamConfiguredVariables });
            continue;
          }
          s3.scopes.includes(e4.source) || s3.scopes.push(e4.source);
          const o3 = s3.scopes[0];
          (void 0 === o3 || r3[e4.source] < r3[o3]) && (s3.isTeamRequired = e4.isTeamRequired, s3.pinnedGitRef = e4.pinnedGitRef), void 0 !== e4.installMode && (s3.installMode = e4.installMode), void 0 !== e4.hasTeamConfiguredVariables && (s3.hasTeamConfiguredVariables = e4.hasTeamConfiguredVariables), void 0 !== e4.projectInstallKey && (s3.projectInstallKey = e4.projectInstallKey), n3.set(t4, s3);
        }
        return Array.from(n3.values()).map((e4) => ({ ...e4, scopes: [...e4.scopes].sort((e5, t4) => r3[e5] - r3[t4]) }));
      };
      return { getPluginMcpServers: async () => {
        const e3 = await r2.getPluginMcpServers();
        var n3, s3;
        return f2.report({ execHostRemoteName: (n3 = { diagnostics: t2.getLoadDiagnostics(), mcpDescriptorsProduced: e3.length, execHostRemoteName: H.env.remoteName }).execHostRemoteName ?? ki, pluginHomeDirHash: (s3 = n3.diagnostics.userHomeDirectory, (0, tr.createHash)("sha256").update(s3).digest("hex")), pluginsLoaded: n3.diagnostics.pluginsLoaded, retainedFromPreviousLoad: n3.diagnostics.retainedFromPreviousLoad, wasFirstLoad: n3.diagnostics.wasFirstLoad, sourceUnavailable: n3.diagnostics.sourceUnavailable, mcpDescriptorsProduced: n3.mcpDescriptorsProduced }), e3.map((e4) => ({ ...e4, plugin: e4.pluginName, pluginSource: "cursor-third-party" === e4.pluginSource ? "cursor-first-party" : e4.pluginSource }));
      }, getPluginHooks: async () => n2.getPluginHooks(), getPluginCommands: async () => s2.getPluginCommands(), getLoadedPluginsSummary: async () => g2((await Ei(t2)).plugins), getPluginLoadFailures: async () => (await Ei(t2)).loadFailures, getPluginSetIncomplete: async () => (await Ei(t2)).pluginSetIncomplete, getInstalledGitHubPlugins: async () => o2.listPlugins(), addGitHubPlugin: async (e3) => {
        throw new Error("Direct GitHub plugin installs are no longer supported. Use a marketplace instead.");
      }, removeGitHubPlugin: async (e3) => {
        await o2.removePlugin(e3), await i2();
      }, removeLocalPlugin: async (e3) => {
        await (0, ge._fm)(e3, { userHomeDir: So.homedir(), log: a2 }), await i2();
      }, saveLocalPluginVariables: async (e3, t3) => {
        if ((r3 = e3).includes("/") || r3.includes("\\") || ".." === r3 || "." === r3) throw new Error(`Invalid local plugin variables key: ${e3}`);
        var r3;
        await d2.store(`${h2}${e3}`, JSON.stringify(t3)), u2();
      }, discoverMarketplacePlugins: async (e3, t3, r3) => c2.discoverMarketplacePlugins(e3, t3, r3), parseGitHubRepoForPluginsLocally: async (e3, t3) => {
        try {
          const r3 = (0, ge.z4A)(e3) ? (0, fi.fileURLToPath)(e3.trim()) : void 0, n3 = (0, ko.join)(So.homedir(), ".cursor", "plugins", "marketplaces"), s3 = void 0 !== r3 ? await (0, ge.e1t)({ localPath: r3, pluginMetricsLogger: a2 }) : await (0, ge.U27)({ gitUrl: e3, gitRef: t3, marketplaceCacheRoot: n3, allowNonGitHubHosts: true, pluginMetricsLogger: a2, sparsePluginClones: m2 }), o3 = (e4) => new j.ngG({ name: e4.name, description: e4.description }), i3 = (e4) => new j.Vdt({ name: e4.name, description: e4.description }), c3 = (e4) => new j.$el({ name: e4.name, description: e4.description }), l3 = (e4) => new j.Q63({ name: e4.name, description: e4.description }), u3 = (e4) => new j.UCU({ name: e4.name, description: e4.description }), d3 = (e4) => new j.tlS({ name: e4.name, description: e4.description });
          return (0, _t.toPlainMessage)(new j.nXe({ marketplaceName: s3.marketplaceName, marketplaceDescription: s3.marketplaceDescription, defaultBranch: s3.defaultBranch, repositoryUrl: s3.repositoryUrl, commitSha: s3.commitSha, plugins: s3.plugins.map((e4) => new j.HvA({ name: e4.name, displayName: e4.displayName, description: e4.description, gitPath: e4.gitPath, logoUrl: e4.logoUrl, variables: e4.variables ? _t.Struct.fromJson(e4.variables) : void 0, sourceGitUrl: e4.externalUrl, sourceGitRef: e4.externalRef, skills: e4.skills.map(o3), subagents: e4.subagents.map(i3), hooks: e4.hooks.map(c3), rules: e4.rules.map(l3), mcpServers: e4.mcpServers.map(u3), commands: e4.commands.map(d3), parseError: e4.parseError })) }));
        } catch (e4) {
          throw a2.captureException(e4, { error_type: "parse_github_repo_for_plugins_locally" }), e4;
        }
      }, discoverClaudeMarketplacePayloads: async (e3) => {
        const t3 = { log: (e4, t4) => {
          a2.log("info", `[cc-marketplace-import] ${e4}`, t4 ?? {});
        } };
        try {
          const { payloads: r3 } = await (0, ge.kxb)({ existingUserMarketplaceNames: e3, logger: t3 });
          return r3.map((e4) => ({ gitUrl: e4.gitUrl, gitRef: e4.gitRef, marketplaceName: e4.marketplaceName, commitSha: e4.commitSha, plugins: e4.plugins.map((e5) => ({ name: e5.name, displayName: e5.displayName, description: e5.description, gitPath: e5.gitPath, gitUrl: e5.gitUrl, gitRef: e5.gitRef, skills: e5.skills, subagents: e5.subagents, hooks: e5.hooks, rules: e5.rules, mcpServers: e5.mcpServers, commands: e5.commands, logoUrl: e5.logoUrl, variables: e5.variables })) }));
        } catch (e4) {
          throw a2.captureException(e4, { error_type: "discover_claude_marketplace_payloads" }), e4;
        }
      }, installProjectPlugin: async (e3) => {
        const t3 = l2[0];
        if (!t3) throw new Error("No workspace path available for project plugin installation");
        "third-party" === e3.type ? await (0, ge.YUn)(t3, e3.key, e3.gitInfo) : await (0, ge.QOY)(t3, e3.key), await i2();
      }, removeProjectPlugin: async (e3) => {
        if (0 === l2.length) throw new Error("No workspace path available for project plugin removal");
        await (0, ge.Lsv)(l2, e3), await i2();
      }, getEffectiveInstalledPlugins: b2, getPluginsSnapshot: async (e3) => (async function(e4) {
        const [t3, r3, n3, s3, o3] = await Promise.all([e4.getEffectiveInstalledPlugins(), e4.getImportedExternalPlugins(), e4.getCursorThirdPartyPlugins(), e4.getInstalledGitHubPlugins(), e4.readLoadedPlugins()]);
        return { effectiveInstalledPlugins: t3, importedExternalPlugins: r3, installedCursorThirdPartyPlugins: n3, installedGitHubPlugins: s3, ...o3 };
      })({ getEffectiveInstalledPlugins: () => b2(e3), getImportedExternalPlugins: v2, getCursorThirdPartyPlugins: _2, getInstalledGitHubPlugins: () => o2.listPlugins(), readLoadedPlugins: async () => {
        const { plugins: e4, loadFailures: r3, pluginSetIncomplete: n3 } = await Ei(t2);
        return { loadedPluginsSummary: await g2(e4), loadFailures: r3, pluginSetIncomplete: n3 };
      } }), getPluginComponentFiles: async () => {
        const e3 = await t2.getAllEnabledPlugins();
        let r3 = [];
        try {
          r3 = await b2(false);
        } catch (e4) {
          oe(e4) || a2.log("error", "Failed to resolve installed plugins for component metadata", { error: String(e4) });
        }
        const n3 = /* @__PURE__ */ new Map();
        for (const e4 of r3) {
          const t3 = e4.plugin;
          if (void 0 === t3.name) continue;
          n3.set(t3.name, t3);
          const r4 = t3.marketplace?.name;
          void 0 !== r4 && "cursor-public" !== r4 && n3.set(`${t3.name}@${r4}`, t3);
        }
        return Promise.all(e3.map(async (e4) => {
          const t3 = e4.identifier.sourceInfo.name, r4 = e4.identifier.source, s3 = e4.identifier.sourceInfo;
          let o3 = t3;
          if ("claude-plugin" === e4.identifier.source) {
            const r5 = e4.identifier.sourceInfo.marketplace;
            r5 && "cursor-public" !== r5 && (o3 = `${t3}@${r5}`);
          } else "cursor-first-party" !== e4.identifier.source && "cursor-third-party" !== e4.identifier.source || !("marketplace" in s3) || "string" != typeof s3.marketplace || "cursor-public" === s3.marketplace || (o3 = `${t3}@${s3.marketplace}`);
          const i3 = n3.get(o3) ?? n3.get(t3), a3 = [], c3 = (e5) => {
            const t4 = e5.split("/");
            return t4.length >= 2 ? t4[t4.length - 2] : t4[0] ?? e5;
          };
          for (const t4 of e4.skills) a3.push({ type: "Skills", name: c3(t4.path), filePath: (0, ko.join)(e4.installPath, t4.path), description: t4.description });
          for (const t4 of e4.rules) a3.push({ type: "Rules", name: t4.name, filePath: (0, ko.join)(e4.installPath, t4.path), description: t4.description });
          for (const t4 of e4.agents) a3.push({ type: "Subagents", name: t4.name, filePath: (0, ko.join)(e4.installPath, t4.path), description: t4.description });
          for (const t4 of e4.commands) a3.push({ type: "Commands", name: t4.name, filePath: (0, ko.join)(e4.installPath, t4.path), description: t4.description });
          if (e4.hooks && "config" in e4.hooks && a3.push({ type: "Hooks", name: "hooks.json", filePath: e4.hooks.sourcePath ?? (0, ko.join)(e4.installPath, "hooks", "hooks.json") }), e4.mcpConfig?.mcpServers) {
            const t4 = (0, ko.join)(e4.installPath, ".mcp.json");
            let r5 = (0, ko.join)(e4.installPath, "mcp.json");
            try {
              await (0, hi.access)(t4), r5 = t4;
            } catch {
            }
            for (const t5 of Object.keys(e4.mcpConfig.mcpServers)) a3.push({ type: "MCPs", name: t5, filePath: e4.mcpConfig.mcpServerSourcePaths?.[t5] ?? r5 });
          }
          return { pluginName: t3, pluginId: i3?.id?.toString(), marketplaceId: i3?.marketplace?.id?.toString(), pluginKey: o3, pluginSource: r4, publisherName: e4.authorName, components: a3 };
        }));
      }, getPrimitiveAuthorship: async (e3) => p2.getPrimitiveAuthorship(e3), requestRefresh: async () => {
        u2();
      }, addExtensionPlugin: async ({ path: e3, extensionId: r3 }) => {
        await t2.registerExtensionPlugin({ path: e3, extensionId: r3 }), await i2();
      }, removeExtensionPlugin: async ({ path: e3, extensionId: r3 }) => {
        await t2.unregisterExtensionPlugin({ path: e3, extensionId: r3 }) && await i2();
      } };
    }
    const Pi = 5e3;
    async function Ai(e2, t2, r2) {
      const n2 = [];
      let s2 = 0;
      const o2 = Array.from({ length: Math.min(t2, e2.length) }, () => (async function() {
        for (; s2 < e2.length; ) {
          const t3 = s2;
          s2 += 1;
          const o3 = e2[t3];
          void 0 !== o3 && (n2[t3] = await r2(o3));
        }
      })());
      return await Promise.all(o2), n2;
    }
    class Ri {
      constructor(e2) {
        this.options = e2;
      }
      async getPrimitiveAuthorship(e2) {
        return Ai(e2, 4, async (e3) => {
          const t2 = (function(e4) {
            if (void 0 === e4.pluginSource) return;
            const t3 = e4.publisherName?.trim();
            return t3 ? { label: t3, kind: "publisher", authorName: t3 } : void 0;
          })(e3) ?? await this.resolveGitAuthorship(e3);
          return { sourceId: e3.sourceId, authorship: t2 };
        });
      }
      async resolveGitAuthorship(e2) {
        if (void 0 === e2.pluginSource) try {
          const t2 = await this.options.gitExecutorPromise, r2 = (0, f.q6)(), n2 = (0, ko.dirname)(e2.filePath), s2 = await (0, L.ky5)(r2, t2, n2);
          if (null === s2) return;
          const o2 = (0, ko.relative)(s2, e2.filePath);
          if (".." === o2 || o2.startsWith(`..${ko.sep}`)) return;
          return (function(e3) {
            const t3 = [...e3.split("\n")].reverse().find((e4) => e4.trim().length > 0);
            if (void 0 === t3) return;
            const [r3, n3, s3, o3] = t3.trim().split("\0");
            return r3 && n3 ? { label: n3, kind: "git", authorName: n3, ...void 0 !== s3 && s3.length > 0 && { authorEmail: s3 }, commitSha: r3, ...void 0 !== o3 && o3.length > 0 && { committedAt: o3 } } : void 0;
          })((await t2.exec(r2, s2, ["log", "--follow", "--diff-filter=AR", "--format=%H%x00%an%x00%ae%x00%aI", "--", o2], { timeout: 3e4, caller: "primitiveAuthorship" })).stdout);
        } catch (e3) {
          return void this.options.logDebug?.(`[primitive-authorship] git authorship failed: ${String(e3)}`);
        }
      }
    }
    async function Mi(e2) {
      try {
        await e2.reload(), e2.notifyPluginsChanged();
      } catch (t2) {
        throw e2.onFailure?.(t2), t2;
      }
    }
    async function Ji(e2) {
      try {
        await Mi(e2);
      } catch {
      }
    }
    function Oi(e2, t2) {
      let r2;
      return { schedule: () => {
        r2 && clearTimeout(r2), r2 = setTimeout(async () => {
          r2 = void 0, await t2();
        }, e2);
      }, dispose: () => {
        r2 && (clearTimeout(r2), r2 = void 0);
      } };
    }
    async function Bi() {
      delete process.env.CURSOR_PLUGIN_ROOT, delete process.env.CLAUDE_PLUGIN_ROOT;
    }
    async function Di(e2) {
      const { workspacePaths: t2, getThirdPartyExtensibilityEnabled: r2, getAllowUserLocalPluginImports: n2, deactivateTasks: s2, context: o2, gitExecutorPromise: i2 } = e2, a2 = new ge.KYw(So.homedir()), c2 = await H.cursor.getAuthId() ?? "anonymous", l2 = await H.cursor.checkFeatureGate("enable_marketplace_plugin_logging"), u2 = H.window.createOutputChannel("Cursor Plugins", { log: true }), d2 = { log: (e3, t3, r3) => {
        const n3 = `[pluginsSubsystem] ${t3}`, s3 = (/* @__PURE__ */ new Date()).toISOString();
        if (u2?.appendLine(`[${s3}] [${e3}] ${t3}`), l2) try {
          switch (e3) {
            case "debug":
              H.cursor.logStructuredDebug("agent_exec", n3, r3, { disableConsoleFallback: true });
              break;
            case "info":
              H.cursor.logStructuredInfo("agent_exec", n3, r3, { disableConsoleFallback: true });
              break;
            case "warn":
              H.cursor.logStructuredWarn("agent_exec", n3, r3, { disableConsoleFallback: true });
              break;
            case "error":
              H.cursor.logStructuredError("agent_exec", n3, void 0, r3, { disableConsoleFallback: true });
              break;
            default:
              throw new Error(`Unhandled plugin metrics log level: ${e3}`);
          }
        } catch (e4) {
          console.error("[cursor-agent-exec] Failed to log plugin metrics:", e4);
        }
      }, increment: (e3, t3, r3) => {
        l2 && H.cursor.metricsIncrement({ stat: e3, value: t3, tags: r3 });
      }, distribution: (e3, t3, r3) => {
        l2 && H.cursor.metricsDistribution({ stat: e3, value: t3, tags: r3 });
      }, captureException: (e3, t3) => {
        l2 && H.cursor.captureException(e3, t3);
      } }, p2 = (0, ko.join)(So.homedir(), ".cursor", "plugins", "marketplaces"), m2 = await H.cursor.checkFeatureGate("team_marketplace_mcps"), h2 = await H.cursor.checkFeatureGate("enable_sparse_plugin_clones"), g2 = await H.cursor.checkFeatureGate("marketplace_origin_distribution");
      let y2;
      const w2 = g2 ? () => (y2 ??= (async () => {
        const e3 = Date.now();
        await (function(e4) {
          if (void 0 !== e4.getToken()) return Promise.resolve();
          const t3 = e4.timeoutMs ?? Pi;
          return new Promise((r3) => {
            let n3 = false;
            const s3 = () => {
              n3 || (n3 = true, clearTimeout(o3), i3.dispose(), r3());
            }, o3 = setTimeout(s3, t3), i3 = e4.onDidChangeToken((e5) => {
              void 0 !== e5 && s3();
            });
            void 0 !== e4.getToken() && s3();
          });
        })({ getToken: () => H.cursor.getCursorAuthToken(), onDidChangeToken: (e4) => H.cursor.onDidChangeCursorAuthToken(e4) }), (async (e4) => {
          try {
            if (d2.distribution("marketplace.origin_distribution.auth_wait", Math.min(e4, Pi)), void 0 !== H.cursor.getCursorAuthToken()) return;
            const t3 = await H.cursor.getAuthId();
            d2.increment("marketplace.origin_distribution.auth_wait.error", 1, { reason: void 0 === t3 ? "logged_out" : "exthost_lag" });
          } catch {
          }
        })(Date.now() - e3);
      })(), y2) : void 0, v2 = (0, ge.NwZ)(async () => {
        d2.increment("backend_marketplace_client.get_effective_user_plugins.count", 1);
        try {
          return await H.cursor.getEffectiveUserPlugins(true) ?? { plugins: [] };
        } catch (e3) {
          throw oe(e3) || (d2.log("error", "Failed to get effective user plugins", { error: String(e3) }), d2.increment("backend_marketplace_client.get_effective_user_plugins.error", 1)), e3;
        }
      }, { marketplaceCacheRoot: p2, pluginLogger: d2, extraGitConfig: () => {
        const e3 = (0, mi.w)(H.cursor.getCursorCreds()?.originBackendUrl);
        return (0, ge.kdU)(H.cursor.getCursorAuthToken(), void 0 !== e3 ? [e3] : []);
      }, awaitAuthReady: w2, listOptions: { enableInlinePlugins: m2 }, sparsePluginClones: h2 }), _2 = [{ client: v2, userId: c2, cacheManager: new ge.WCg(So.homedir()) }, { client: (0, ge.NwZ)(async () => {
        try {
          const e3 = await (0, ge.JJ1)(t2);
          if (0 === e3.length) return { plugins: [] };
          const r3 = e3.filter((e4) => e4.entry.gitUrl), n3 = e3.filter((e4) => !e4.entry.gitUrl), s3 = r3.filter(({ key: e4, entry: t3 }) => {
            const r4 = t3.gitUrl;
            return !(r4 && !(0, ge.QY1)(r4)) || (console.warn(`[cursor-agent-exec] Ignoring project plugin with invalid gitUrl in .cursor/settings.json: key=${JSON.stringify(e4)} gitUrl=${JSON.stringify(r4)}`), false);
          }).map(({ key: e4, entry: t3 }) => {
            const r4 = (0, ge.kXx)(e4);
            return { plugin: { name: r4.name, gitUrl: t3.gitUrl, gitRef: t3.gitRef, gitPath: t3.gitPath, marketplace: { name: r4.marketplaceName, gitUrl: t3.gitUrl, gitRef: t3.gitRef } }, isEnabled: true };
          }), o3 = n3.length > 0 ? (await H.cursor.resolveProjectPlugins(n3.map((e4) => (0, ge.kXx)(e4.key)).map((e4) => ({ name: e4.name, marketplaceName: e4.marketplaceName }))))?.plugins?.map((e4) => ({ plugin: e4, isEnabled: true })) ?? [] : [];
          return { plugins: [...s3, ...o3] };
        } catch (e3) {
          throw console.error("[cursor-agent-exec] Failed to resolve project plugins:", e3), e3;
        }
      }, { marketplaceCacheRoot: p2, pluginLogger: d2, extraGitConfig: () => {
        const e3 = (0, mi.w)(H.cursor.getCursorCreds()?.originBackendUrl);
        return (0, ge.kdU)(H.cursor.getCursorAuthToken(), void 0 !== e3 ? [e3] : []);
      }, awaitAuthReady: w2, listOptions: { enableInlinePlugins: m2 }, sparsePluginClones: h2 }), userId: c2, cacheManager: new ge.WCg(So.homedir()), pruneOldVersions: true }], b2 = new L.Npg(t2, So.homedir(), () => ({ importThirdPartyPlugins: r2(), loadUserLocalPlugins: n2(), loadCursorFirstParty: true }), _2, d2, async (e3) => {
        try {
          const t3 = await o2.secrets.get(`localPluginVariables:${e3}`);
          if (t3) return JSON.parse(t3);
        } catch {
        }
      }), S2 = new L.gRo(b2), k2 = new L.aAA(b2), x2 = new L.O0K(b2), E2 = { reload: async () => {
        await b2.reload();
      }, notifyPluginsChanged: () => {
        H.cursor.notifyPluginsChanged();
      }, onFailure: (e3) => {
        ee.warn((0, f.q6)(), "Failed to refresh plugins", { error: String(e3) });
      } }, I2 = /* @__PURE__ */ (function(e3) {
        let t3;
        const r3 = (e4, r4) => {
          void 0 !== r4 && t3 === e4 && (t3 = r4);
        };
        return { initializeLastSeenUserTeamPluginSignature: async () => {
          const n3 = t3, s3 = await e3.getUserTeamPluginSignatureFromBackend();
          r3(n3, s3);
        }, refreshPlugins: async () => {
          const n3 = t3, s3 = await e3.getUserTeamPluginSignatureFromBackend();
          await e3.refreshPluginsStrict(), r3(n3, s3);
        }, refreshPluginsOnWindowFocus: async () => {
          const n3 = await e3.getUserTeamPluginSignatureFromBackend();
          if (void 0 === n3) return void await e3.refreshPluginsBestEffort();
          const s3 = t3;
          s3 !== n3 && (await e3.refreshPluginsStrict(), r3(s3, n3));
        }, getLastSeenUserTeamPluginSignature: () => t3 };
      })({ getUserTeamPluginSignatureFromBackend: async () => {
        try {
          return (function(e3, t3 = {}) {
            const { enableInlinePlugins: r3 = false } = t3, n3 = [], s3 = e3?.marketplaces ?? [];
            for (const t4 of e3?.plugins ?? []) {
              if (!t4.isEnabled) continue;
              const e4 = t4.plugin;
              if (e4?.name) if (e4.gitUrl) n3.push(JSON.stringify([t4.isTeamRequired ? "team" : "user", e4.name, e4.gitUrl, (0, ge.gFi)(t4, s3), e4.gitPath ?? "", e4.releaseRepo ?? "", e4.releaseAsset ?? "", e4.releaseTag ?? ""]));
              else {
                if (!r3) continue;
                n3.push(JSON.stringify([t4.isTeamRequired ? "team" : "user", e4.name, `inline:${e4.id ?? ""}`, String(e4.updatedAt ?? "")]));
              }
            }
            return n3.sort(), JSON.stringify(n3);
          })(await H.cursor.getEffectiveUserPlugins(true) ?? { plugins: [] }, { enableInlinePlugins: m2 });
        } catch (e3) {
          return void (oe(e3) || ee.warn((0, f.q6)(), "Failed to fetch effective user/team plugins for focus refresh", { error: String(e3) }));
        }
      }, refreshPluginsStrict: async () => {
        await Mi(E2);
      }, refreshPluginsBestEffort: async () => {
        await Ji(E2);
      } });
      I2.initializeLastSeenUserTeamPluginSignature();
      const T2 = async () => {
        await I2.refreshPlugins();
      }, C2 = /* @__PURE__ */ (function(e3, t3) {
        let r3, n3 = 0, s3 = false, o3 = false, i3 = false;
        const a3 = async () => {
          if (!i3 && !s3) {
            s3 = true, n3 = Date.now();
            try {
              await t3();
            } finally {
              s3 = false, o3 && !i3 && (o3 = false, c3());
            }
          }
        }, c3 = () => {
          if (i3) return;
          const t4 = Date.now(), c4 = e3 - (t4 - n3);
          if (c4 <= 0) return s3 ? void (o3 = true) : void a3();
          r3 || (r3 = setTimeout(() => {
            r3 = void 0, i3 || (s3 ? o3 = true : a3());
          }, c4));
        };
        return { schedule: c3, dispose: () => {
          i3 = true, o3 = false, r3 && (clearTimeout(r3), r3 = void 0);
        } };
      })(5e3, async () => {
        try {
          await I2.refreshPluginsOnWindowFocus();
        } catch {
        }
      }), P2 = Oi(2e3, async () => {
        try {
          await T2();
        } catch {
        }
      });
      let A2, R2 = false;
      const M2 = () => {
        A2 ? R2 = true : A2 = (async () => {
          do {
            R2 = false, await T2();
          } while (R2);
        })().catch((e3) => {
          console.error("[cursor-agent-exec] Failed to refresh plugins after project settings change:", e3);
        }).finally(() => {
          A2 = void 0;
        });
      }, J2 = H.workspace.createFileSystemWatcher("**/.cursor/settings.json");
      J2.onDidCreate(() => {
        M2();
      }), J2.onDidChange(() => {
        M2();
      }), J2.onDidDelete(() => {
        M2();
      }), s2.push(() => {
        J2.dispose();
      });
      const O2 = (0, ko.join)(So.homedir(), ".cursor", "plugins", ge.DDg), B2 = Oi(1e3, async () => {
        n2() && await Ji(E2);
      });
      (async () => {
        if (n2()) try {
          await (0, hi.mkdir)(O2, { recursive: true });
          const e3 = (0, ci.watch)(O2, { recursive: true }, () => {
            B2.schedule();
          });
          s2.push(() => {
            e3.close(), B2.dispose();
          });
        } catch (e3) {
          ee.warn((0, f.q6)(), "Failed to watch user-local plugins directory", { error: String(e3) });
        }
      })();
      const D2 = /* @__PURE__ */ new Map(), q2 = Oi(1e3, async () => {
        await Ji(E2);
      }), N2 = Ci({ pluginsService: b2, pluginMcpService: S2, pluginHooksService: k2, pluginCommandsService: x2, githubPluginsStore: a2, refreshPlugins: T2, pluginMetricsLogger: d2, backendMarketplaceClient: v2, workspacePaths: t2, requestRefreshSchedule: () => P2.schedule(), secretStorage: o2.secrets, primitiveAuthorshipResolver: new Ri({ gitExecutorPromise: i2, logDebug: (e3) => ee.debug((0, f.q6)(), e3) }), sparsePluginClones: h2 }), F2 = H.cursor.registerPluginsProvider({ ...N2, addExtensionPlugin: async (e3) => {
        let t3;
        await N2.addExtensionPlugin(e3);
        try {
          t3 = await (0, hi.realpath)(e3.path);
        } catch {
          t3 = e3.path;
        }
        if (!D2.has(t3)) try {
          const e4 = (0, ci.watch)(t3, { recursive: true }, () => {
            q2.schedule();
          });
          D2.set(t3, e4);
        } catch (e4) {
          ee.warn((0, f.q6)(), "Failed to watch extension plugin directory", { path: t3, error: String(e4) });
        }
      }, removeExtensionPlugin: async (e3) => {
        let t3;
        await N2.removeExtensionPlugin(e3);
        try {
          t3 = await (0, hi.realpath)(e3.path);
        } catch {
          t3 = e3.path;
        }
        const r3 = D2.get(t3);
        r3 && (r3.close(), D2.delete(t3));
      } });
      o2.subscriptions.push(F2), s2.push(() => {
        for (const e3 of D2.values()) e3.close();
        D2.clear(), q2.dispose();
      });
      const U2 = H.window.onDidChangeWindowState((e3) => {
        e3.focused && C2.schedule();
      }), $2 = H.cursor.onDidChangeAllowUserLocalPluginImports(() => {
        Ji(E2);
      });
      return o2.subscriptions.push({ dispose: () => {
        U2.dispose(), $2.dispose(), C2.dispose(), P2.dispose();
      } }), { pluginsService: b2, refreshPluginHooks: Bi };
    }
    var qi = __webpack_require__(47462);
    class Ni {
      constructor(e2) {
        this.onChange = e2;
      }
      async trackChange(e2, t2, r2, n2) {
        const s2 = { path: e2, before: t2, after: r2, metadata: n2 };
        this.onChange && await this.onChange(s2);
      }
    }
    function Fi(e2) {
      if ("insecure_none" === e2.type) return e2;
      const { networkAccess: t2, skipStatsigDefaults: r2, ...n2 } = e2;
      return { ...n2, networkPolicy: t2 ? (0, G.T6)() : (0, G.Po)(), skipStatsigDefaults: r2 };
    }
    function Ui(e2) {
      return { ...e2, userConfiguredPolicy: Fi(e2.userConfiguredPolicy) };
    }
    class Li {
      constructor(e2, t2) {
        this.fetchPermissions = e2, this.onDidChangePermissions = t2, this.cachedPermissions = e2().then(Ui), this.cachedPermissions.then((e3) => {
          this.latestPermissions ??= e3;
        }, () => {
        }), this.permissionsSubscription = this.onDidChangePermissions((e3) => {
          const t3 = Ui(e3);
          this.latestPermissions = t3, this.cachedPermissions = Promise.resolve(t3);
        });
      }
      async getPermissions() {
        return this.cachedPermissions;
      }
      getPermissionsSnapshot() {
        return this.latestPermissions;
      }
      async updatePermissions(e2) {
      }
      dispose() {
        this.permissionsSubscription.dispose();
      }
    }
    class $i {
      constructor() {
        this._isDisposed = false, this._disposables = [];
      }
      dispose() {
        this._isDisposed || (this._isDisposed = true, (function(e2) {
          for (; e2.length; ) {
            const t2 = e2.pop();
            t2?.dispose();
          }
        })(this._disposables));
      }
      _register(e2) {
        return this._isDisposed ? e2.dispose() : this._disposables.push(e2), e2;
      }
      get isDisposed() {
        return this._isDisposed;
      }
    }
    class ji extends $i {
      constructor() {
        super(...arguments), this.writeEmitter = this._register(new H.EventEmitter()), this.onDidWrite = this.writeEmitter.event, this.writeBufferEmitter = this._register(new H.EventEmitter()), this.onDidWriteBuffer = this.writeBufferEmitter.event, this.closeEmitter = this._register(new H.EventEmitter()), this.onDidClose = this.closeEmitter.event, this.isStarted = false, this.isFirstCommand = true, this.outputQueue = [], this.isOutputPaused = false, this.pauseWaiters = [];
      }
      open(e2) {
        this.isStarted || (this.isStarted = true, this.writeBufferEmitter.fire(Buffer.from(this.osc633("P", "HasRichCommandDetection=True"))), this.ensureOutputDrained());
      }
      pause() {
        this.isOutputPaused = true;
      }
      resume() {
        if (this.isOutputPaused) {
          this.isOutputPaused = false;
          const e2 = this.pauseWaiters;
          this.pauseWaiters = [];
          for (const t2 of e2) t2();
        }
        this.outputQueue.length > 0 && this.ensureOutputDrained();
      }
      async awaitUnpaused() {
        for (; this.isOutputPaused; ) await new Promise((e2) => this.pauseWaiters.push(e2));
      }
      close() {
        this.resume(), this.closeEmitter.fire();
      }
      dispose() {
        this.resume(), super.dispose();
      }
      async showCommand(e2, t2) {
        const r2 = [];
        this.isFirstCommand || r2.push("\r\n"), this.isFirstCommand = false, r2.push(this.osc633("A"));
        const n2 = t2 ? "🔒 " : "";
        r2.push(`${n2}$ `), r2.push(this.osc633("B"));
        const s2 = e2.split("\n")[0];
        r2.push(this.osc633("E", this.escapeOscValue(s2))), r2.push(`${s2}\r
`), r2.push(this.osc633("C")), await this.emitBufferedData(Buffer.from(r2.join("")));
      }
      async handleEvent(e2) {
        switch (e2.type) {
          case "stdout":
          case "stderr":
            await this.handleShellOutput(e2.data);
            break;
          case "exit":
            await this.handleExit(e2.code ?? 0);
            break;
          case "stdin_ready":
          case "sandbox_denies":
            break;
          case "suppressed_output":
            await this.handleShellOutput(Buffer.from(G.Ls));
            break;
          default:
            throw new Error(`Unhandled event type: ${e2.type}`);
        }
      }
      async handleShellOutput(e2) {
        await this.emitBufferedData(e2);
      }
      async handleExit(e2) {
        await this.showCommandCompleted(e2);
      }
      async showCommandCompleted(e2) {
        await this.emitBufferedData(Buffer.from(this.osc633("D", e2.toString())));
      }
      async emitBufferedData(e2) {
        this.outputQueue.push(e2), this.isStarted && await this.ensureOutputDrained();
      }
      async ensureOutputDrained() {
        if (this.isStarted) for (; ; ) {
          if (this.outputDrainPromise) {
            await this.outputDrainPromise;
            continue;
          }
          if (0 === this.outputQueue.length || this.isOutputPaused) return;
          const e2 = this.runOutputDrain();
          this.outputDrainPromise = e2;
          try {
            await e2;
          } finally {
            this.outputDrainPromise === e2 && (this.outputDrainPromise = void 0);
          }
        }
      }
      async runOutputDrain() {
        for (; !this.isOutputPaused && this.outputQueue.length > 0; ) {
          const e2 = this.outputQueue.shift();
          this.writeBufferEmitter.fire(e2), await new Promise((e3) => setImmediate(e3));
        }
      }
      escapeOscValue(e2) {
        return e2.replace(/\\/g, "\\\\").replace(/;/g, "\\x3b").replace(/[\x00-\x1f]/g, (e3) => `\\x${e3.charCodeAt(0).toString(16).padStart(2, "0")}`);
      }
      osc633(e2, ...t2) {
        return `\x1B]633;${[e2, ...t2].filter((e3) => void 0 !== e3).join(";")}\x07`;
      }
    }
    class Gi extends $i {
      constructor(e2, t2 = {}) {
        super(), this.inner = e2, this.shouldSuppressTerminalUiStreaming = t2.shouldSuppressTerminalUiStreaming ?? (async () => false), this.shellExecOutputBackpressureEnabled = t2.shellExecOutputBackpressureEnabled ?? false, this.shellExecOutputSuppressionOptions = t2.shellExecOutputSuppressionOptions, this.pty = this._register(new ji());
      }
      ensureTerminal(e2) {
        this.terminal || this.isDisposed || (this.terminal = H.window.createTerminal({ name: "Agent Terminal", pty: this.pty, convertEol: true, iconPath: new H.ThemeIcon("infinity"), hideFromUser: true, metadata: { conversationId: e2, agentOwned: true } }));
      }
      getTerminal() {
        return this.terminal;
      }
      async *execute(e2, t2, r2) {
        if (this.isDisposed) return;
        if (await this.shouldSuppressTerminalUiStreaming()) {
          for await (const n3 of this.inner.execute(e2, t2, r2)) yield n3;
          return;
        }
        const n2 = e2.get(te), s2 = n2?.conversationId;
        if (void 0 === s2) {
          for await (const n3 of this.inner.execute(e2, t2, r2)) yield n3;
          return;
        }
        const o2 = r2?.sandboxPolicy?.perRepo?.type ?? r2?.sandboxPolicy?.perUser?.type ?? r2?.sandboxPolicy?.teamAdmin?.type, i2 = "workspace_readonly" === o2 || "workspace_readwrite" === o2;
        this.ensureTerminal(s2), await this.pty.showCommand(t2, i2);
        const a2 = this.shellExecOutputBackpressureEnabled ? new G.vu({ ...this.shellExecOutputSuppressionOptions }) : void 0;
        try {
          for await (const n3 of this.inner.execute(e2, t2, r2)) {
            if (void 0 !== a2 && ("stdout" === n3.type || "stderr" === n3.type)) {
              const e3 = a2.record(n3.data.length);
              if (e3.noticeJustTriggered) {
                const e4 = { type: "stdout", data: Buffer.from(G.Ls) };
                await this.pty.awaitUnpaused(), await this.pty.handleEvent(e4), yield { type: "suppressed_output" };
              }
              if (!e3.shouldForward) {
                yield n3;
                continue;
              }
            }
            await this.pty.awaitUnpaused(), await this.pty.handleEvent(n3), yield n3;
          }
        } finally {
          a2?.dispose();
        }
      }
      async getCwd() {
        return this.inner.getCwd();
      }
      clone(e2) {
        return this.inner.clone(e2);
      }
      dispose() {
        this.isDisposed || (this.terminal && (this.terminal.dispose(), this.terminal = void 0), super.dispose());
      }
    }
    class zi {
      constructor(e2, t2) {
        this.vscodeHookExecutor = e2, this.configTracker = t2;
      }
      async executeHookForStep(e2, t2) {
        if (!this.configTracker.hasHookForRequest(e2, t2)) return;
        return await this.vscodeHookExecutor.executeHookForStep(e2, t2);
      }
    }
    class Wi {
      constructor(e2) {
        this.approvalHandler = e2;
      }
      async requestApproval(e2) {
        if (e2.toolCallId) {
          const t2 = { toolCallId: e2.toolCallId, operation: { type: e2.type, details: e2.details } };
          return this.approvalHandler(t2);
        }
        return { approved: true };
      }
      async requestReadApproval(e2) {
        if (e2.toolCallId) {
          const t2 = { toolCallId: e2.toolCallId, operation: { type: e2.type, details: e2.details } };
          return this.approvalHandler(t2);
        }
        return { approved: true };
      }
    }
    const Hi = /* @__PURE__ */ new WeakSet();
    function Ki(t2) {
      if (t2 instanceof e.R10) return t2.getWakeupRevision();
    }
    class Vi {
      constructor(e2) {
        this.elicitationHandler = e2;
      }
      createProvider(e2, t2, r2) {
        return new Yi(this.elicitationHandler, e2, t2, r2);
      }
    }
    class Yi {
      constructor(e2, t2, r2, n2) {
        this.elicitationHandler = e2, this.serverName = t2, this.toolName = r2, this.toolCallId = n2;
      }
      async elicit(e2) {
        return this.elicitationHandler(this.serverName, this.toolName, this.toolCallId, e2);
      }
    }
    const Qi = ko.join(So.homedir(), ".cursor", "sandbox.json");
    class Xi {
      constructor(e2) {
        this.conflictNoticeSessions = /* @__PURE__ */ new Map(), this.retainedConflictNoticeKeys = /* @__PURE__ */ new Set(), this.conflictNoticeKeyOwners = /* @__PURE__ */ new Map(), this.conflictNoticeSessionStarts = /* @__PURE__ */ new Map(), this.sharedConflictClaimState = (0, mt.createConflictNoticeClaimState)(), this.ignoreService = e2.ignoreService, this.teamSettingsService = e2.teamSettingsService, this.terminalProvider = e2.terminalProvider, this.createTerminalExecutor = e2.createTerminalExecutor, this.projectDir = e2.projectDir, this.workspacePaths = e2.workspacePaths, this.gitExecutor = e2.gitExecutor, this.grepProvider = e2.grepProvider, this.diagnosticsProvider = e2.diagnosticsProvider, this.getCanvasDiagnostics = e2.getCanvasDiagnostics, this.mcpLease = e2.mcpLease, this.getOrCreateMcpStateAccessor = e2.getOrCreateMcpStateAccessor, this.cursorRulesService = e2.cursorRulesService, this.subagentsService = e2.subagentsService, this.codebaseReferenceProvider = e2.codebaseReferenceProvider, this.getOrCreateSharedRequestContextExecutor = e2.getOrCreateSharedRequestContextExecutor, this.terminalPathHint = e2.terminalPathHint, this.hooksConfigTracker = e2.hooksConfigTracker, this.adminNetworkControlsEnabled = e2.adminNetworkControlsEnabled, this.configuredMcpMetaToolEnabled = e2.mcpMetaToolEnabled, this.mcpMetaToolSlimDescriptors = e2.mcpMetaToolSlimDescriptors, this.alwaysExposeVirtualMcpAuthTool = e2.alwaysExposeVirtualMcpAuthTool, this.mcpAllowlistLog = e2.mcpAllowlistLog, this.getMcpFileSystemOptions = e2.getMcpFileSystemOptions, this.shellOutputBackpressureOptions = e2.shellOutputBackpressureOptions, this.shellExecOutputSuppressionOptions = e2.shellExecOutputSuppressionOptions, this.powershellUtf8Console = e2.powershellUtf8Console, this.createSessionExecManager = this.createSessionExecManager.bind(this), this.perUserSandboxPolicy = (function(e3, t2) {
          try {
            const r2 = ci.readFileSync(e3, "utf-8"), n2 = JSON.parse(r2), s2 = (0, G.$6)(n2);
            return (0, G.l7)(s2, t2);
          } catch {
            return;
          }
        })(Qi, So.homedir());
      }
      createSessionExecManager(t2, r2, n2, s2, o2, i2, a2, c2, l2, u2) {
        const d2 = u2?.mcpMetaToolEnabled ?? this.configuredMcpMetaToolEnabled, p2 = u2?.mcpLease ?? this.mcpLease, m2 = (function(t3, r3) {
          const n3 = r3.filter((t4) => t4.providerIdentifier !== e.iKs);
          if (0 === n3.length) return t3;
          const s3 = { getState: async (e2) => {
            const r4 = await t3.getState(e2), s4 = r4.servers.map((e3) => ({ ...e3, tools: [...e3.tools] }));
            let o4 = false;
            for (const e3 of n3) {
              let t4 = s4.find((t5) => t5.serverIdentifier === e3.clientKey);
              void 0 === t4 && (t4 = { serverName: e3.providerIdentifier, serverIdentifier: e3.clientKey, tools: [], instructions: [] }, s4.push(t4), o4 = true), t4.tools.some((t5) => t5.toolName === e3.toolName) || (t4.tools.push(e3), o4 = true);
            }
            return o4 ? { servers: s4 } : r4;
          } }, o3 = t3.onDidChange?.bind(t3);
          return void 0 !== o3 && (s3.onDidChange = o3), s3;
        })(this.getOrCreateMcpStateAccessor(), u2?.mcpTools ?? []), h2 = 0 === o2.length ? [So.homedir()] : o2, g2 = i2 ? { mainWorktreePath: i2 } : void 0;
        this.grepProvider.setWorktreeGuardInfo?.(h2, g2);
        const y2 = new Wi(r2), w2 = new Li(a2, c2), v2 = new L.khl(this.ignoreService, y2, w2, this.teamSettingsService, h2, this.adminNetworkControlsEnabled, this.mcpAllowlistLog ? { mcpAllowlistLog: this.mcpAllowlistLog } : void 0), _2 = new Ni(async (e2) => {
          e2.metadata?.toolCallId && await s2({ path: e2.path, before: e2.before, after: e2.after, metadata: { toolCallId: e2.metadata.toolCallId } });
        }), b2 = new Vi(n2), S2 = (function() {
          let e2, t3;
          const r3 = () => (void 0 === e2 && (e2 = (async () => {
            try {
              return await H.cursor.checkFeatureGate("disable_terminal_output_ui_streaming");
            } catch {
              return false;
            }
          })().then((e3) => (t3 = e3, e3))), e2);
          return r3.getResolvedValue = () => t3, r3;
        })();
        S2();
        const k2 = (function() {
          if (H.cursor.isGlass && void 0 === H.env.remoteName) return (e2) => {
            H.commands.executeCommand("glass.headlessShellEvent", e2).then(void 0, (e3) => {
              ee.warn((0, f.q6)(), "Failed to report a headless shell event to Glass", { error: String(e3) });
            });
          };
        })(), x2 = { onShellCreated: ({ shellId: e2, command: t3, cwd: r3, registerEventHandler: n3, conversationId: s3, abortShell: o3, description: i3, toolCallId: a3 }) => true === S2.getResolvedValue() ? (k2 && n3((0, L.BQk)(e2, k2)), this.terminalProvider.trackHeadlessShell({ shellId: e2, command: t3, conversationId: s3, abortShell: o3, description: i3, toolCallId: a3, onCleanup: k2 && (() => k2({ kind: "exit", shellId: e2 })) })) : this.terminalProvider.createTerminal({ shellId: e2, command: t3, cwd: r3, registerEventHandler: n3, conversationId: s3, abortShell: o3, description: i3, isShellExecOutputBackpressureEnabled: () => void 0 !== this.shellOutputBackpressureOptions, getShellExecOutputSuppressionOptions: () => this.shellExecOutputSuppressionOptions, toolCallId: a3 }) }, E2 = (0, L.hQM)(this.projectDir, x2, (e2) => e2.get(te)?.conversationId), I2 = (function(e2, t3) {
          if (Hi.has(e2)) return e2;
          Hi.add(e2);
          const r3 = e2.enqueue.bind(e2);
          return e2.enqueue = (n3) => {
            const s3 = Ki(e2);
            r3(n3);
            const o3 = Ki(e2), i3 = void 0 === s3 || void 0 === o3 || o3 > s3, a3 = n3.payload;
            i3 && "shell" === a3.kind && t3.shouldForwardShellOutputCompletion(a3) && ("task_progress" === a3.reason && e2.suppress(n3.conversationId, a3.taskId), t3.enqueueShellOutputCompletion(a3));
          }, e2;
        })(u2?.backgroundWorkRegistry ?? new e.R10(), this.terminalProvider), T2 = this.createTerminalExecutor().clone(h2[0]), C2 = Es({ sessionId: t2 }), P2 = new Gi(T2, { shouldSuppressTerminalUiStreaming: S2, shellExecOutputBackpressureEnabled: void 0 !== this.shellOutputBackpressureOptions, shellExecOutputSuppressionOptions: this.shellExecOutputSuppressionOptions }), A2 = l2 ? [So.homedir()] : this.workspacePaths, R2 = h2.length === A2.length && h2.every((e2, t3) => e2 === A2[t3]), M2 = this.perUserSandboxPolicy ? { perUser: this.perUserSandboxPolicy } : void 0, J2 = l2 ? [bo()] : [], O2 = R2 ? this.getOrCreateSharedRequestContextExecutor(l2 ?? false) : void 0, B2 = new L.DvK({ pendingDecisionStore: y2, fileChangeTracker: _2, gitExecutor: u2?.gitExecutor ?? this.gitExecutor, ignoreService: this.ignoreService, grepProvider: this.grepProvider, permissionsService: v2, workspacePaths: h2, worktreeMainPath: i2, diagnosticsProvider: this.diagnosticsProvider, getCanvasDiagnostics: this.getCanvasDiagnostics, mcpLease: p2, mcpStateAccessor: m2, mcpMetaToolEnabled: d2, mcpMetaToolSlimDescriptors: this.mcpMetaToolSlimDescriptors, alwaysExposeVirtualMcpAuthTool: this.alwaysExposeVirtualMcpAuthTool, cursorRulesService: this.cursorRulesService, subagentsService: this.subagentsService, repositoryProvider: this.codebaseReferenceProvider, projectDir: this.projectDir, shellManager: void 0, _sandboxPolicyResolver: void 0, _defaultSandboxPolicy: { type: "insecure_none" }, _defaultSandboxPolicySources: M2, mcpFileOutputThresholdBytes: void 0, backgroundShellFactory: E2, backgroundWorkRegistry: I2, mcpElicitationFactory: b2, createFileWatcher: void 0, sharedRequestContextExecutor: O2, getSandboxEnabled: () => {
          const e2 = w2.getPermissionsSnapshot()?.userConfiguredPolicy;
          return void 0 !== e2 && "insecure_none" !== e2.type;
        }, terminalExecutor: P2, shellExtraEnvProvider: C2, userTerminalHint: this.terminalPathHint, additionalRules: 0 === J2.length ? void 0 : J2, getMcpFileSystemOptions: this.getMcpFileSystemOptions, shellOutputBackpressureOptions: this.shellOutputBackpressureOptions, powershellUtf8Console: this.powershellUtf8Console }), D2 = new zi(H.cursor.getHookExecutor(), this.hooksConfigTracker), q2 = new qi.ae(B2, D2, (e2) => {
          const t3 = e2.get(te);
          return { conversation_id: t3?.conversationId ?? "", generation_id: t3?.requestId ?? "", model: t3?.modelName ?? "", ...t3?.parentToolCallId ? { parent_tool_call_id: t3.parentToolCallId } : {} };
        }, p2);
        let N2 = q2;
        const F2 = () => true, U2 = u2?.conflictNoticeSessionKey?.trim() || void 0, $2 = U2 || t2, j2 = /* @__PURE__ */ new Set(), G2 = true === u2?.acquireResolvedConflictNoticeKeys, z2 = h2.length > 0 ? h2 : [this.projectDir], W2 = () => {
          const e2 = H.workspace.workspaceFolders?.map((e3) => e3.uri.fsPath) ?? [], t3 = /* @__PURE__ */ new Set(), r3 = [];
          for (const n3 of [...z2, ...e2]) 0 === n3.length || t3.has(n3) || (t3.add(n3), r3.push(n3));
          return r3.length > 0 ? r3 : z2;
        };
        this.getOrCreateConflictNoticeSession({ sessionKey: $2, isEnabled: F2, initialConversationId: U2, getBasePaths: W2 });
        const K2 = (e2) => {
          if ("object" == typeof e2 && null !== e2 && "get" in e2 && "function" == typeof e2.get) return e2.get(te)?.conversationId?.trim();
        }, V2 = (e2) => {
          const t3 = K2(e2);
          return void 0 !== t3 && t3.length > 0 ? t3 : $2;
        }, Y2 = void 0 !== U2, Q2 = new qi.OJ(q2, (e2) => {
          const t3 = V2(e2);
          return G2 && !j2.has(t3) && (j2.add(t3), this.acquireConflictNoticeKey(t3)), this.getOrCreateConflictNoticeSession({ sessionKey: t3, isEnabled: F2, initialConversationId: K2(e2) ?? U2, getBasePaths: W2 }).drain;
        }, /* @__PURE__ */ (function(e2 = () => true, t3) {
          return { wakeForWrittenPath: (r3) => {
            e2() && qr?.wakeForWrittenPath({ writtenPath: r3, basePaths: t3?.() });
          }, wakeExposedMounts: () => {
            e2() && qr?.wakeAllRunningSessions();
          } };
        })(F2, W2), { skipPathWriteDrain: () => Y2 && void 0 !== this.conflictNoticeSessions.get($2)?.host, forceWrittenPathBeforeDrain: bs(F2, W2), resolveWriteBarrierTimeoutMs: Ss(), onWriteBarrier: ks(), onWakeWrittenPath: (e2, t3) => {
          try {
            const r3 = V2(t3);
            this.getOrCreateConflictNoticeSession({ sessionKey: r3, isEnabled: F2, initialConversationId: K2(t3) ?? U2, getBasePaths: W2 }).host.noteDeferredWrittenPaths([e2]);
          } catch {
          }
        } }), X2 = { execute: (e2, t3, r3) => {
          const n3 = ("conversationId" in t3 && "string" == typeof t3.conversationId && t3.conversationId.trim().length > 0 ? t3.conversationId.trim() : void 0) ?? $2, { host: s3 } = this.getOrCreateConflictNoticeSession({ sessionKey: n3, isEnabled: F2, initialConversationId: n3 === $2 ? U2 : n3, getBasePaths: W2 });
          return s3.execute(e2, t3, r3);
        } };
        N2 = new e.dwX(Q2, [(0, e.VNS)(e.YhQ, X2)]);
        return { manager: e.n6O.fromResources(N2), baseResources: B2, resources: N2, unsubscribe: () => {
          w2.dispose();
        }, terminalExecutor: P2, acquiredConflictNoticeKeys: j2 };
      }
      clearConflictDrain(e2) {
        const t2 = e2.trim();
        0 !== t2.length && (this.releaseConflictNoticeSessionLeases(t2), this.conflictNoticeSessions.delete(t2), this.retainedConflictNoticeKeys.delete(t2), this.conflictNoticeKeyOwners.delete(t2), this.conflictNoticeSessionStarts.delete(t2));
      }
      releaseConflictNoticeSessionLeases(e2) {
        const t2 = this.conflictNoticeSessions.get(e2);
        void 0 !== t2 && (t2.drain.releaseAllLeased(), t2.host.releaseAllLeased());
      }
      noteConflictNoticeSessionStart(e2) {
        this.conflictNoticeSessionStarts.has(e2) || this.conflictNoticeSessionStarts.set(e2, Date.now());
      }
      stampConflictNoticeFloor(e2) {
        const t2 = e2.trim();
        0 !== t2.length && this.noteConflictNoticeSessionStart(t2);
      }
      inheritConflictNoticeFloor(e2) {
        const t2 = e2.fromKey.trim(), r2 = e2.toKey.trim();
        if (0 === t2.length || 0 === r2.length) return;
        const n2 = this.conflictNoticeSessionStarts.get(t2);
        void 0 === n2 || this.conflictNoticeSessionStarts.has(r2) ? this.noteConflictNoticeSessionStart(r2) : this.conflictNoticeSessionStarts.set(r2, n2);
      }
      retainConflictNoticeKey(e2) {
        const t2 = e2.trim();
        0 !== t2.length && (this.noteConflictNoticeSessionStart(t2), this.retainedConflictNoticeKeys.add(t2));
      }
      claimConflictNoticeKey(e2) {
        const t2 = e2.trim();
        0 !== t2.length && (this.noteConflictNoticeSessionStart(t2), this.retainedConflictNoticeKeys.delete(t2));
      }
      acquireConflictNoticeKey(e2) {
        const t2 = e2.trim();
        0 !== t2.length && (this.noteConflictNoticeSessionStart(t2), this.conflictNoticeKeyOwners.set(t2, (this.conflictNoticeKeyOwners.get(t2) ?? 0) + 1), this.retainedConflictNoticeKeys.delete(t2));
      }
      releaseConflictNoticeKey(e2) {
        const t2 = e2.trim();
        if (0 === t2.length) return;
        const r2 = this.conflictNoticeKeyOwners.get(t2) ?? 0;
        if (r2 <= 0) return void this.conflictNoticeKeyOwners.delete(t2);
        const n2 = r2 - 1;
        n2 > 0 ? this.conflictNoticeKeyOwners.set(t2, n2) : (this.conflictNoticeKeyOwners.delete(t2), this.retainedConflictNoticeKeys.add(t2));
      }
      bindConflictNoticeConversation(e2) {
        const t2 = e2.sessionKey.trim(), r2 = e2.conversationId.trim();
        0 !== t2.length && 0 !== r2.length && (this.inheritConflictNoticeFloor({ fromKey: t2, toKey: r2 }), this.conflictNoticeSessions.get(t2)?.bindConversationId(r2));
      }
      clearRetainedConflictNoticeKeys() {
        for (const e2 of this.retainedConflictNoticeKeys) this.releaseConflictNoticeSessionLeases(e2), this.conflictNoticeSessions.delete(e2), this.conflictNoticeKeyOwners.delete(e2), this.conflictNoticeSessionStarts.delete(e2);
        this.retainedConflictNoticeKeys.clear();
      }
      getOrCreateConflictNoticeSession({ sessionKey: e2, isEnabled: t2, initialConversationId: r2, getBasePaths: n2 }) {
        const s2 = this.conflictNoticeSessions.get(e2);
        if (void 0 !== s2) return void 0 !== r2 && r2.length > 0 && s2.bindConversationId(r2), s2;
        let o2 = this.conflictNoticeSessionStarts.get(e2);
        void 0 === o2 && (o2 = Date.now(), this.conflictNoticeSessionStarts.set(e2, o2));
        const i2 = { current: r2 }, a2 = { drain: new mt.AgentStoreConflictDrain({ sources: [_s(t2, () => i2.current)], sessionStartedAtMs: o2, claimState: this.sharedConflictClaimState, quotaNoticesEnabled: true }), host: new qi.ng({ driver: xs(t2, n2), sessionStartedAtMs: o2, claimState: this.sharedConflictClaimState, quotaNoticesEnabled: true, resolveForceGraceTimeoutMs: Ss() }), bindConversationId: (e3) => {
          const t3 = e3.trim();
          t3.length > 0 && (i2.current = t3);
        } };
        return this.conflictNoticeSessions.set(e2, a2), a2;
      }
    }
    var Zi = __webpack_require__(98995);
    function ea(e2) {
      const t2 = (function(e3) {
        return e3.includes("PillTone") || (function(e4, t3, r2) {
          return e4.includes(r2) && e4.includes(t3);
        })(e3, "tone", "PillProps") ? 'Pill.tone is ignored (pills always render neutral) and has no "danger" member. Use Stat, Callout, Chart, or Table rowTone for semantic color.' : e3.includes("CardVariant") ? 'Card.variant is only "default" | "borderless". There is no accent variant — use Callout for emphasis.' : e3.includes("TableProps") && (e3.includes("does not exist") || e3.includes("is not assignable") || e3.includes("rowHeaderColumn")) ? "Table has no rowHeaderColumn. Props are headers, rows, columnAlign, rowTone, framed, striped, stickyHeader, emptyMessage, and style." : e3.includes("CanvasHostTheme") && (e3.includes("'colors'") || e3.includes('"colors"')) ? "useHostTheme() has no colors group. Use theme.bg.editor, theme.fill.primary, theme.text.primary, theme.stroke.secondary, or theme.accent.primary." : (function(e4) {
          return !(!e4.includes("ChartSeries") && !e4.includes("ChartDataPoint")) && (e4.includes("data: string") || e4.includes("value: string") || e4.includes("string[]") || /Type ['"]string['"] is not assignable to type ['"]number['"]/.test(e4));
        })(e3) ? "Chart series data and ChartDataPoint.value must be numbers, not strings." : void 0;
      })(e2);
      return void 0 === t2 ? e2 : `${e2} ${t2}`;
    }
    const ta = "node_modules", ra = ".node_modules.staging-", na = ".node_modules.old-";
    const sa = "tsconfig.json", oa = { target: "ES2021", module: "ESNext", moduleResolution: "bundler", jsx: "react-jsx", strict: true, noEmit: true, skipLibCheck: true, lib: ["ESNext", "DOM"] }, ia = JSON.stringify({ compilerOptions: oa, include: ["*.canvas.tsx"] }, null, 2);
    JSON.stringify({ compilerOptions: { ...oa, types: [] }, include: ["*.canvas.tsx"] }, null, 2);
    async function aa(e2) {
      const t2 = await ca(e2.sdkSourceDir);
      if (void 0 === t2) return;
      await (async function(e3) {
        await (0, W.mkdir)(e3, { recursive: true });
        if ((await (0, W.lstat)(e3)).isSymbolicLink()) throw new Error(`Refusing to bootstrap canvas SDK into symlinked directory: ${e3}`);
      })(e2.canvasesDir);
      const r2 = (0, v.join)(e2.canvasesDir, ta), n2 = (0, v.join)(e2.canvasesDir, sa), s2 = e2.tsconfigContent ?? ia, o2 = await ca(r2) === t2, i2 = await (async function(e3, t3) {
        try {
          return await (0, W.readFile)(e3, "utf-8") === t3;
        } catch {
          return false;
        }
      })(n2, s2);
      return o2 || await (async function(e3, t3, r3) {
        const n3 = (0, v.join)(t3, ta), s3 = `${process.pid}.${++ua}`, o3 = (0, v.join)(t3, `${ra}${s3}`), i3 = (0, v.join)(t3, `${na}${s3}`);
        await (0, W.cp)(e3, o3, { recursive: true });
        try {
          let e4 = false;
          try {
            await (0, W.rename)(n3, i3), e4 = true;
          } catch (e5) {
            if ("ENOENT" !== e5.code) throw e5;
          }
          try {
            await (0, W.rename)(o3, n3);
          } catch (t4) {
            e4 && await (0, W.rename)(i3, n3).catch(da);
            for (let e5 = 0; e5 < 20; e5++) {
              if (await ca(n3) === r3) return;
              await new Promise((e6) => setTimeout(e6, 5));
            }
            throw t4;
          }
          e4 && await (0, W.rm)(i3, { recursive: true, force: true }).catch(da);
        } finally {
          await (0, W.rm)(o3, { recursive: true, force: true }).catch(da);
        }
      })(e2.sdkSourceDir, e2.canvasesDir, t2), i2 || await (async function(e3, t3) {
        const r3 = `${e3}.tmp.${process.pid}.${++la}`;
        await (0, W.writeFile)(r3, t3, "utf-8"), await (0, W.rename)(r3, e3);
      })(n2, s2), { canvasesDir: e2.canvasesDir, tsconfigPath: n2 };
    }
    async function ca(e2) {
      try {
        return (await (0, W.readFile)((0, v.join)(e2, "canvas-sdk-version"), "utf-8")).trim();
      } catch {
        return;
      }
    }
    let la = 0;
    let ua = 0;
    function da() {
    }
    function pa(e2) {
      return e2.replace(/\\/g, "/");
    }
    class ma {
      constructor(e2) {
        this.canvasesDir = (0, v.normalize)(e2.canvasesDir), this.canvasesDirPrefix = this.canvasesDir.endsWith(v.sep) ? this.canvasesDir : `${this.canvasesDir}${v.sep}`;
        const t2 = void 0 === e2.extraMatchRoot ? [] : "string" == typeof e2.extraMatchRoot ? [e2.extraMatchRoot] : e2.extraMatchRoot;
        this.extraMatchRootPrefixes = t2.map((e3) => {
          const t3 = (0, v.normalize)(e3);
          return t3.endsWith(v.sep) ? t3 : `${t3}${v.sep}`;
        }), this.getExtraMatchRoots = e2.getExtraMatchRoots, this.tsResolveAnchor = e2.tsResolveAnchor;
        const r2 = (function(e3) {
          const t3 = (0, v.join)(e3, "cursor"), r3 = (0, v.join)(e3, "@types", "react");
          return { cursorPackageJson: (0, v.join)(t3, "package.json"), cursorCanvasIndex: (0, v.join)(t3, "canvas", "index.d.ts"), reactRoot: r3, reactIndex: (0, v.join)(r3, "index.d.ts"), reactJsxRuntime: (0, v.join)(r3, "jsx-runtime.d.ts") };
        })((0, v.join)(this.canvasesDir, ta));
        this.resolutionTable = /* @__PURE__ */ new Map([["cursor/canvas", r2.cursorCanvasIndex], ["react", r2.reactIndex], ["react/jsx-runtime", r2.reactJsxRuntime], ["react/jsx-dev-runtime", r2.reactJsxRuntime]]), this.bootstrapReady = aa({ canvasesDir: this.canvasesDir, sdkSourceDir: e2.sdkSourceDir });
      }
      async getDiagnostics(e2) {
        return (await this.getDiagnosticsSnapshot(e2))?.diagnostics;
      }
      async getDiagnosticsSnapshot(e2) {
        const t2 = (0, v.normalize)(e2);
        if (!t2.endsWith(".canvas.tsx") || !this.matchesRoot(t2)) return;
        let r2;
        try {
          r2 = await this.bootstrapReady;
        } catch {
          return;
        }
        if (void 0 === r2) return;
        const n2 = this.loadTypeScript();
        if (!n2) return;
        const s2 = await this.getOrInitCompilerSetup(n2);
        if (!s2) return;
        let o2;
        try {
          o2 = await (0, W.readFile)(t2);
        } catch {
          return;
        }
        if (!this.matchesRoot(t2)) return;
        const i2 = o2.toString("utf8"), a2 = this.buildProgram(n2, s2, t2, i2), c2 = a2.getSourceFile(t2) ?? a2.getSourceFile(pa(t2));
        if (!c2) return;
        return { diagnostics: [...a2.getSyntacticDiagnostics(c2), ...a2.getSemanticDiagnostics(c2)].map((e3) => this.mapDiagnostic(n2, e3, c2)), sourceSha256: (0, tr.createHash)("sha256").update(o2).digest("hex") };
      }
      matchesRoot(e2) {
        if (e2.startsWith(this.canvasesDirPrefix)) return true;
        if (this.extraMatchRootPrefixes.some((t3) => e2.startsWith(t3))) return true;
        let t2;
        try {
          t2 = this.getExtraMatchRoots?.();
        } catch {
          return false;
        }
        if (void 0 === t2) return false;
        return ("string" == typeof t2 ? [t2] : t2).some((t3) => {
          const r2 = (0, v.normalize)(t3), n2 = r2.endsWith(v.sep) ? r2 : `${r2}${v.sep}`;
          return e2.startsWith(n2);
        });
      }
      loadTypeScript() {
        return this.tsModule || (this.tsModule = (function(e2) {
          try {
            return (0, Zi.createRequire)((0, v.join)(e2, "package.json"))("typescript");
          } catch {
          }
          try {
            if ("function" == typeof require) return require("typescript");
          } catch {
          }
        })(this.tsResolveAnchor)), this.tsModule;
      }
      getOrInitCompilerSetup(e2) {
        if (this.compilerSetup) return this.compilerSetup;
        const t2 = (async () => {
          const t3 = (0, v.join)(this.canvasesDir, sa);
          let r2;
          try {
            r2 = await (0, W.readFile)(t3, "utf-8");
          } catch {
            return;
          }
          const n2 = e2.readConfigFile(t3, () => r2);
          if (n2.error) return;
          const s2 = e2.parseJsonConfigFileContent(n2.config, e2.sys, this.canvasesDir);
          return { options: s2.options, sdkSourceFileCache: /* @__PURE__ */ new Map(), moduleResolutionCache: e2.createModuleResolutionCache(this.canvasesDir, (e3) => e3, s2.options) };
        })();
        return this.compilerSetup = t2, t2.then((e3) => {
          void 0 === e3 && this.compilerSetup === t2 && (this.compilerSetup = void 0);
        }, () => {
          this.compilerSetup === t2 && (this.compilerSetup = void 0);
        }), t2;
      }
      buildProgram(e2, t2, r2, n2) {
        const s2 = e2.createCompilerHost(t2.options), o2 = s2.getSourceFile.bind(s2), i2 = t2.sdkSourceFileCache, a2 = t2.moduleResolutionCache, c2 = this.resolutionTable, l2 = pa(r2);
        return s2.getSourceFile = (t3, s3, a3, c3) => {
          if (t3 === r2 || pa(t3) === l2) return e2.createSourceFile(t3, n2, s3, true, e2.ScriptKind.TSX);
          if (i2.has(t3)) return i2.get(t3);
          const u2 = o2(t3, s3, a3, c3);
          return i2.set(t3, u2), u2;
        }, s2.resolveModuleNameLiterals = (t3, r3, n3, o3) => t3.map((t4) => {
          const i3 = c2.get(t4.text);
          return void 0 !== i3 ? { resolvedModule: { resolvedFileName: i3, extension: e2.Extension.Dts, isExternalLibraryImport: true } } : e2.resolveModuleName(t4.text, r3, o3, s2, a2, n3);
        }), e2.createProgram({ rootNames: [r2], options: t2.options, host: s2 });
      }
      mapDiagnostic(e2, t2, r2) {
        const n2 = e2.flattenDiagnosticMessageText(t2.messageText, "\n"), s2 = void 0 !== t2.code ? `TS${t2.code}` : void 0;
        let o2 = { line: 0, character: 0 }, i2 = { line: 0, character: 0 };
        if (void 0 !== t2.start) {
          const e3 = r2.getLineAndCharacterOfPosition(t2.start);
          o2 = { line: e3.line, character: e3.character };
          const n3 = t2.start + (t2.length ?? 0), s3 = r2.getLineAndCharacterOfPosition(n3);
          i2 = { line: s3.line, character: s3.character };
        }
        let a2 = 1;
        switch (t2.category) {
          case e2.DiagnosticCategory.Error:
            a2 = 1;
            break;
          case e2.DiagnosticCategory.Warning:
            a2 = 2;
            break;
          case e2.DiagnosticCategory.Message:
          case e2.DiagnosticCategory.Suggestion:
            a2 = 3;
        }
        return { range: { start: o2, end: i2 }, severity: a2, code: s2, message: ea(n2) };
      }
    }
    var ha = __webpack_require__(37067), fa = __webpack_require__(38522);
    const ga = String.fromCodePoint(39), ya = (e2) => `${ga}${e2}${ga}`, wa = ya("none"), va = ya("unsafe-inline");
    [["default-src", wa], ["script-src", va, "blob:"], ["sandbox", "allow-scripts"], ["style-src", va], ["img-src", "data:", "blob:"], ["font-src", "data:"], ["connect-src", wa], ["worker-src", wa], ["child-src", wa], ["frame-src", wa], ["object-src", wa], ["base-uri", wa], ["form-action", wa]].map((e2) => e2.join(" ")).join("; "), ["accelerometer", "camera", "geolocation", "gyroscope", "magnetometer", "microphone", "payment", "usb", "clipboard-read", "clipboard-write"].map((e2) => `${e2}=()`).join(", "), String.raw`\u003c`, String.raw`\u003e`, String.raw`\u0026`, String.raw`\u2028`, String.raw`\u2029`;
    const _a = '-apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI", system-ui, "Ubuntu", "Droid Sans", sans-serif';
    __webpack_require__(13405), __webpack_require__(67592), __webpack_require__(31293), __webpack_require__(87492), __webpack_require__(35100), __webpack_require__(41403);
    var ba = __webpack_require__(49038), Sa = __webpack_require__(81208);
    function ka(e2) {
      return "number" == typeof e2 && Number.isInteger(e2) && e2 > 0 ? e2 : void 0;
    }
    function xa(e2) {
      if ("object" != typeof e2 || null === e2) return;
      const t2 = e2;
      switch (t2.type) {
        case "openAgent":
          return "string" == typeof t2.agentId && t2.agentId.length > 0 ? { type: "openAgent", agentId: t2.agentId } : void 0;
        case "newComposerChat": {
          if (void 0 === t2.userPrompt) return { type: "newComposerChat" };
          if ("string" != typeof t2.userPrompt) return;
          const e3 = t2.userPrompt.trim();
          return e3.length > 0 ? { type: "newComposerChat", userPrompt: e3 } : { type: "newComposerChat" };
        }
        case "openFile": {
          if ("string" != typeof t2.path) return;
          const e3 = t2.path.trim();
          if (0 === e3.length) return;
          const r2 = (function(e4) {
            if (void 0 === e4) return;
            if ("object" != typeof e4 || null === e4) return;
            const t3 = e4, r3 = ka(t3.startLineNumber);
            if (void 0 === r3) return;
            const n2 = ka(t3.startColumn), s2 = ka(t3.endLineNumber), o2 = ka(t3.endColumn);
            return void 0 !== t3.startColumn && void 0 === n2 || void 0 !== t3.endLineNumber && void 0 === s2 || void 0 !== t3.endColumn && void 0 === o2 ? void 0 : { startLineNumber: r3, ...void 0 !== n2 ? { startColumn: n2 } : {}, ...void 0 !== s2 ? { endLineNumber: s2 } : {}, ...void 0 !== o2 ? { endColumn: o2 } : {} };
          })(t2.selection);
          if (void 0 !== t2.selection && void 0 === r2) return;
          return { type: "openFile", path: e3, ...void 0 !== r2 ? { selection: r2 } : {} };
        }
        default:
          return;
      }
    }
    var Ea = __webpack_require__(76576);
    const Ia = "canvases", Ta = ".canvas.bundle.gz", Ca = 5e6, Pa = 1;
    function Aa(e2) {
      return { version: Pa, runtimeEsm: e2.runtimeEsm, userModule: e2.userModule };
    }
    function Ra(e2) {
      const t2 = e2.trimStart();
      if (!t2.startsWith("{")) return { kind: "legacy-esm", source: e2 };
      try {
        const e3 = JSON.parse(t2);
        if ((function(e4) {
          if (!e4 || "object" != typeof e4) return false;
          const t3 = e4;
          return t3.version === Pa && "string" == typeof t3.runtimeEsm && "string" == typeof t3.userModule;
        })(e3)) return { kind: "bundle-v1", bundle: e3 };
      } catch {
      }
      return { kind: "legacy-esm", source: e2 };
    }
    function Ma(e2) {
      return e2.toLowerCase().endsWith(Ta);
    }
    function Ja(e2, t2, r2 = Ca) {
      return (function(e3, t3) {
        const r3 = Buffer.byteLength(JSON.stringify(t3), "utf-8");
        return e3.length + r3 + 64;
      })(e2, t2) <= r2;
    }
    (0, __webpack_require__(57975).promisify)(fa.gzip);
    const Oa = { level: 9 };
    function Ba(e2) {
      return Buffer.from(JSON.stringify(e2), "utf-8");
    }
    function Da(e2) {
      return t2 = Ba(e2), (0, fa.gzipSync)(t2, Oa);
      var t2;
    }
    const qa = "--cursor-canvas-viewport-height";
    function Na() {
      const e2 = "calc(100vh - 48px)", t2 = (function({ viewportHeight: e3, legacyPreviewViewportHeight: t3 }) {
        return `#root{${qa}:${e3}}${void 0 === t3 ? "" : `#root:is([style*="min-height:0"],[style*="min-height: 0"]){${qa}:${t3}}`}#root>:only-child:is([style^="height:100%;"],[style^="height: 100%;"],[style*=";height:100%;"],[style*="; height: 100%;"]){min-height:var(${qa})!important}`;
      })({ viewportHeight: e2, legacyPreviewViewportHeight: "100vh" });
      return `html,body{min-height:100vh}body{padding:24px 32px}#root{min-height:${e2};width:100%;margin:0 auto;overflow-x:auto;position:relative;contain:paint}${t2}${(function({ inlinePadding: e3, extraRules: t3 = "" } = {}) {
        const r2 = "calc(100vh - 32px)";
        return `@media (max-width: 479.98px){body{padding:${void 0 === e3 ? "16px" : `16px ${e3}`}}#root{min-height:${r2};${qa}:${r2}}${t3}}`;
      })()}:root{--cursor-canvas-focus-ring-width:1px;--cursor-canvas-focus-ring-offset:2px;--cursor-canvas-focus-ring-radius:4px}*:focus,*:focus-visible{outline:none}*:focus-visible{outline:var(--cursor-canvas-focus-ring-width) solid var(--cursor-canvas-focus-ring-color,currentColor);outline-offset:var(--cursor-canvas-focus-ring-offset)}:where(a[href],[role="link"]):focus-visible{border-radius:var(--cursor-canvas-focus-ring-radius)}`;
    }
    function Fa(e2) {
      return e2.replace(/^\s*import\b[\s\S]*?;\s*$/gm, "");
    }
    const Ua = (0, g.h)("canvas-server:http-server");
    let La;
    async function $a() {
      return La ??= await Promise.resolve().then(__webpack_require__.t.bind(__webpack_require__, 41503, 19)), La;
    }
    const ja = /spawn\s+\S+\s+(ENOENT|EACCES|EPERM|ENOEXEC|ENOTDIR)\b/;
    let Ga, za = 0, Wa = false;
    function Ha(e2, t2) {
      if (Wa) return;
      Wa = true;
      const r2 = (function() {
        const e3 = (function() {
          const e4 = process.env.PATH;
          if (!e4) return;
          const t4 = "win32" === process.platform ? ["node.exe", "node.cmd"] : ["node"];
          for (const r3 of e4.split(v.delimiter)) if (r3) for (const e5 of t4) {
            const t5 = v.join(r3, e5);
            try {
              if (rr.existsSync(t5)) return t5;
            } catch {
            }
          }
          return;
        })();
        if (!e3) return "absent";
        const t3 = (function(e4) {
          try {
            const t4 = (0, w.execFileSync)(e4, ["--version"], { cwd: fe.tmpdir(), encoding: "utf8", timeout: 2e3, stdio: ["ignore", "pipe", "ignore"] }).trim(), r3 = /^v?(\d+)\./.exec(t4);
            return r3 ? Number.parseInt(r3[1], 10) : void 0;
          } catch {
            return;
          }
        })(e3);
        return void 0 === t3 ? "unusable" : t3 >= 18 ? "satisfies" : "unusable";
      })();
      if ("satisfies" === r2) return;
      if (!e2) return;
      const n2 = v.dirname(e2), s2 = process.env.PATH ?? "";
      if ("absent" === r2) {
        if (s2.split(v.delimiter).includes(n2)) return;
        return process.env.PATH = s2 ? `${s2}${v.delimiter}${n2}` : n2, void Ua.info(t2, "Appended bundled node to PATH for esbuild-wasm (no node found on PATH)");
      }
      const o2 = s2.split(v.delimiter).filter((e3) => e3 && e3 !== n2);
      process.env.PATH = [n2, ...o2].join(v.delimiter), Ua.info(t2, "Prepended bundled node to PATH for esbuild-wasm (resolved node is too old or unusable from an arbitrary directory)", { requiredMajor: 18 });
    }
    const Ka = "canvas-runtime.esm.js", Va = `/runtime/${Ka}`, Ya = 1048576, Qa = 5e6, Xa = 2e7;
    function Za(e2, t2, r2) {
      return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Canvas</title>
  <style>*{margin:0;padding:0;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:rgba(121,121,121,0.4) transparent}${Na()}::-webkit-scrollbar{width:8px;height:8px;background:transparent}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(121,121,121,0.4);border-radius:4px}::-webkit-scrollbar-thumb:hover{background:rgba(121,121,121,0.7)}::-webkit-scrollbar-corner{background:transparent}</style>
</head>
<body>
  <div id="root"></div>
  ${(function(e3, t3) {
        const r3 = t3 ? `?token=${t3}` : "";
        return `
<script>
(function() {
  var canvasId = ${JSON.stringify(e3)};
  var tokenParam = ${JSON.stringify(r3)};
  var isPreview = false;
  try {
    isPreview = new URLSearchParams(window.location.search).has('preview');
  } catch (_) {}
  var isReloading = false;
  var isDisposed = false;
  var ws = null;

  // Preview-mode iframes auto-mount in chat without a user gesture, so we
  // close the canvas-action API surface by not exposing canvasId / tokenParam
  // on window.__cursorCanvas. dispatchCanvasAction() in canvas-components
  // early-returns when canvasId is missing, neutering the SDK end-to-end.
  // The closure-local canvasId / tokenParam stay available to the runtime's
  // own WebSocket connection (read-only: only forwards reload events).
  window.__cursorCanvas = {
    canvasId: isPreview ? undefined : canvasId,
    tokenParam: isPreview ? '' : tokenParam,
    state: new Map(),
    data: new Map(),
    reportError: function(message) {
      if (isPreview) return;
      fetch('/canvas/' + canvasId + '/report-error' + tokenParam, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: String(message) })
      }).catch(function() {});
    }
  };

  function connectHostState() {
    if (isDisposed || ws) return;
    var loc = window.location;
    var proto = loc.protocol === 'https:' ? 'wss:' : 'ws:';
    ws = new WebSocket(proto + '//' + loc.host + '/canvas/' + canvasId + '/ws' + tokenParam);
    ws.onmessage = function(e) {
      try {
        var msg = JSON.parse(e.data);
        if (msg.type === 'reload') { triggerReload(); return; }
        if (msg.type === 'state') {
          window.__cursorCanvas.state.set(msg.channel, msg.payload);
          document.dispatchEvent(
            new CustomEvent('cursor-canvas-state-change', { detail: { channel: msg.channel } })
          );
          return;
        }
        // Preview iframes are read-only; canvas-data round-trips through a
        // missing canvasId, so drop rather than partially apply.
        if (isPreview) return;
        if (msg.type === 'canvas-data') {
          if (msg.value === undefined) {
            window.__cursorCanvas.data.delete(msg.key);
          } else {
            window.__cursorCanvas.data.set(msg.key, msg.value);
          }
          document.dispatchEvent(
            new CustomEvent('cursor-canvas-data-change', { detail: { key: msg.key } })
          );
        }
      } catch (_) {}
    };
    ws.onclose = function() {
      ws = null;
      if (!isDisposed) setTimeout(connectHostState, 1000);
    };
  }

  function disconnectHostState() {
    if (!ws) return;
    ws.close();
    ws = null;
  }

  function cleanup() {
    if (isDisposed) return;
    isDisposed = true;
    disconnectHostState();
    window.removeEventListener('beforeunload', cleanup);
    window.removeEventListener('pagehide', cleanup);
  }

  function triggerReload() {
    if (isDisposed || isReloading) return;
    isReloading = true;
    window.location.reload();
  }

  window.addEventListener('beforeunload', cleanup);
  window.addEventListener('pagehide', cleanup);
  connectHostState();
})();
<\/script>
`;
      })(e2, t2)}
  <script type="module">
    import { mountCanvas } from "${r2}?token=${t2}";
    mountCanvas("/canvas/${e2}/app.js?token=${t2}");
  <\/script>
</body>
</html>`;
    }
    function ec(e2) {
      return tr.createHash("sha256").update(`canvas:${e2}`).digest("hex").slice(0, 12);
    }
    function tc(e2) {
      const t2 = v.dirname(e2), r2 = v.basename(e2, v.extname(e2));
      return v.join(t2, `${r2}.status.json`);
    }
    function rc(e2) {
      const t2 = v.dirname(e2), r2 = v.basename(e2, v.extname(e2));
      return v.join(t2, `${r2}.data.json`);
    }
    class nc extends Error {
      constructor() {
        super("Request body too large");
      }
    }
    class sc extends Error {
      constructor() {
        super(`Canvas bundle exceeds the ${Qa}-byte compressed size limit.`);
      }
    }
    class oc extends Error {
      constructor() {
        super("Canvas bundle exceeds the 20000000-byte decompressed size limit.");
      }
    }
    function ic(e2) {
      let t2;
      try {
        t2 = JSON.parse(e2);
      } catch {
        throw new Error("Canvas bundle must contain a valid strict v1 JSON payload; legacy ESM is not supported.");
      }
      if (!(function(e3) {
        if ("object" != typeof e3 || null === e3 || Array.isArray(e3)) return false;
        const t3 = Object.keys(e3).sort();
        return 3 === t3.length && "runtimeEsm" === t3[0] && "userModule" === t3[1] && "version" === t3[2] && "version" in e3 && 1 === e3.version && "runtimeEsm" in e3 && "string" == typeof e3.runtimeEsm && "userModule" in e3 && "string" == typeof e3.userModule;
      })(t2)) throw new Error('Canvas bundle must have exactly { "version": 1, "runtimeEsm": string, "userModule": string }; legacy ESM is not supported.');
      return t2;
    }
    class ac {
      constructor(e2) {
        this._registrations = /* @__PURE__ */ new Map(), this._dataWriteTimers = /* @__PURE__ */ new Map(), this.logContext = e2.logContext ?? (0, f.q6)(), this._runtimeDir = e2.runtimeDir, this._nodeExecPath = e2.nodeExecPath;
      }
      onAction(e2) {
        this._actionCallback = e2;
      }
      onError(e2) {
        this._errorCallback = e2;
      }
      onErrorCleared(e2) {
        this._errorClearedCallback = e2;
      }
      _readBody(e2, t2) {
        return new Promise((r2, n2) => {
          let s2 = "", o2 = 0, i2 = false;
          e2.on("data", (e3) => {
            o2 += e3.length, o2 > t2 ? i2 = true : i2 || (s2 += e3.toString());
          }), e2.on("end", () => {
            i2 ? n2(new nc()) : r2(s2);
          }), e2.on("error", n2);
        });
      }
      get registeredCanvasCount() {
        return this._registrations.size;
      }
      get sessionToken() {
        return this._sessionToken;
      }
      async start() {
        if (this._server) return { port: this._port, sessionToken: this._sessionToken };
        Ha(this._nodeExecPath, this.logContext);
        const e2 = Date.now();
        this._sessionToken = tr.randomBytes(32).toString("hex"), this._runtimeModule ??= await fc(this._runtimeDir);
        const t2 = ha.createServer((e3, t3) => {
          this._handleRequest(e3, t3);
        }), r2 = new Sa({ noServer: true });
        t2.on("upgrade", (e3, t3, n2) => {
          const s2 = new URL(e3.url ?? "/", "http://127.0.0.1"), o2 = s2.pathname;
          if (!this._isValidOrigin(e3.headers.origin)) return void t3.destroy();
          if (s2.searchParams.get("token") !== this._sessionToken) return void t3.destroy();
          const i2 = o2.match(/^\/canvas\/([a-f0-9]{12})\/ws$/);
          if (!i2) return void t3.destroy();
          const a2 = this._registrations.get(i2[1]);
          a2 ? r2.handleUpgrade(e3, t3, n2, (e4) => {
            a2.eventClients.add(e4);
            for (const [t4, r3] of a2.hostState) e4.send(`{"type":"state","channel":${JSON.stringify(t4)},"payload":${r3}}`);
            for (const [t4, r3] of Object.entries(a2.canvasData)) e4.send(JSON.stringify({ type: "canvas-data", key: t4, value: r3 }));
            e4.on("close", () => {
              a2.eventClients.delete(e4);
            }), e4.on("error", () => {
              a2.eventClients.delete(e4);
            });
          }) : t3.destroy();
        });
        try {
          this._port = await this._listen(t2);
        } catch (e3) {
          throw t2.close(), e3;
        }
        return this._server = t2, this._wss = r2, Ua.info(this.logContext, "Canvas server started", { port: this._port, startDurationMs: Date.now() - e2 }), { port: this._port, sessionToken: this._sessionToken };
      }
      async stop() {
        await this._flushPendingDataWrites();
        for (const e2 of this._registrations.values()) this._stopFileWatcher(e2), this._stopDataFileWatcher(e2), this._closeEventClients(e2), "source" === e2.kind && this._deleteStatusFile(e2);
        this._registrations.clear(), this._wss?.close(), this._wss = void 0, this._server?.close(), this._server = void 0, this._port = void 0, this._sessionToken = void 0, Ua.info(this.logContext, "Canvas server stopped");
      }
      _validateId(e2) {
        return /^[a-f0-9]{12}$/.test(e2);
      }
      getUrl(e2, t2) {
        if (!this._validateId(e2)) return;
        if (!this._port || !this._sessionToken) return;
        if (!this._registrations.has(e2)) return;
        const r2 = `http://localhost:${this._port}/canvas/${e2}/`, n2 = new URL(r2);
        return n2.searchParams.set("token", this._sessionToken), t2 && n2.searchParams.set("preview", "1"), n2.toString();
      }
      async _registerCanvas(e2) {
        if (void 0 === this._port) throw new Error("CanvasServer.start() must be called before registerCanvas()");
        const t2 = (function(e3) {
          return "bundle" === e3.kind ? e3 : { kind: "source", path: e3.path };
        })(e2);
        if ("bundle" === t2.kind && (!Ma(r2 = v.basename(t2.path)) && r2 !== Ea.Rj)) throw new Error(`Canvas bundle path must end with ".canvas.bundle.gz" or be a user-store "canvas.bundle.gz": ${t2.path}`);
        var r2;
        const n2 = ec(t2.path);
        if (!this._validateId(n2)) throw new Error(`Invalid canvas ID: ${n2}`);
        const s2 = this._registrations.get(n2);
        if (s2 && (this._stopFileWatcher(s2), this._stopDataFileWatcher(s2), this._closeEventClients(s2)), "bundle" === t2.kind) {
          const e3 = this._dataWriteTimers.get(n2);
          void 0 !== e3 && (clearTimeout(e3), this._dataWriteTimers.delete(n2));
        }
        const o2 = { kind: t2.kind, canvasId: n2, path: t2.path, eventClients: /* @__PURE__ */ new Set(), hostState: /* @__PURE__ */ new Map(), canvasData: "source" === t2.kind ? await this._readDataFile(t2.path) : {}, pendingBuild: false, notifyClientsOnBuild: false };
        return this._startFileWatcher(o2), "source" === o2.kind && this._startDataFileWatcher(o2), this._registrations.set(n2, o2), n2;
      }
      async registerCanvas(e2) {
        return { canvasId: await this._registerCanvas(e2), path: e2.path };
      }
      getRegisteredCanvasPath(e2) {
        if (this._validateId(e2)) return this._registrations.get(e2)?.path;
      }
      async getShareArtifact(e2) {
        const t2 = ec(e2.path), r2 = this._registrations.get(t2);
        if (!r2) return { appJs: "", dataJson: {}, status: { status: "canvas-missing" } };
        const n2 = await this._ensureBuildState(r2), s2 = lc(n2);
        if ("rendered" !== s2.status) return { appJs: "", dataJson: {}, status: s2 };
        const o2 = { ...r2.canvasData };
        let i2 = n2.runtimeModule;
        void 0 === i2 && (this._runtimeModule ??= await fc(this._runtimeDir), i2 = this._runtimeModule);
        const a2 = Da(Aa({ runtimeEsm: i2, userModule: n2.appModule }));
        return Ja(a2, o2) ? { appJs: a2.toString("base64"), dataJson: o2, status: s2 } : { appJs: "", dataJson: {}, status: { status: "content-too-large" } };
      }
      pushState(e2) {
        if (!this._validateId(e2.canvasId)) return false;
        const t2 = this._registrations.get(e2.canvasId);
        return !!t2 && (t2.hostState.set(e2.channel, e2.jsonPayload), this._sendStateEvent(t2, e2.channel, e2.jsonPayload), true);
      }
      pushStateAll(e2) {
        for (const t2 of this._registrations.values()) t2.hostState.set(e2.channel, e2.jsonPayload), this._sendStateEvent(t2, e2.channel, e2.jsonPayload);
      }
      _sendStateEvent(e2, t2, r2) {
        const n2 = `{"type":"state","channel":${JSON.stringify(t2)},"payload":${r2}}`;
        for (const t3 of e2.eventClients) try {
          t3.readyState === ba.OPEN && t3.send(n2);
        } catch {
          e2.eventClients.delete(t3);
        }
      }
      _sendCanvasDataEvent(e2, t2, r2) {
        const n2 = JSON.stringify({ type: "canvas-data", key: t2, value: r2 });
        for (const t3 of e2.eventClients) try {
          t3.readyState === ba.OPEN && t3.send(n2);
        } catch {
          e2.eventClients.delete(t3);
        }
      }
      async destroyCanvas(e2) {
        if (!this._validateId(e2.canvasId)) return;
        const t2 = this._registrations.get(e2.canvasId);
        t2 && ("source" === t2.kind && await this._flushDataWriteForCanvas(e2.canvasId, t2), this._registrations.delete(e2.canvasId), this._stopFileWatcher(t2), this._stopDataFileWatcher(t2), this._closeEventClients(t2), "source" === t2.kind && this._deleteStatusFile(t2));
      }
      _startFileWatcher(e2) {
        const t2 = e2.fileWatcherSnapshot;
        this._stopFileWatcher(e2);
        try {
          const r2 = this._captureFileWatcherSnapshot(e2.path);
          e2.fileWatcherSnapshot = r2;
          const n2 = rr.watch(e2.path, { persistent: false }, (t3) => {
            this._registrations.get(e2.canvasId) === e2 && (e2.fileWatcherSnapshot = this._captureFileWatcherSnapshot(e2.path), this._requestBuild(e2, { notifyClients: true }), "rename" === t3 && (this._startParentDirectoryFileWatcher(e2), this._scheduleFileWatcherReattach(e2)));
          });
          e2.fileWatcher = n2;
          const s2 = this._captureFileWatcherSnapshot(e2.path);
          e2.fileWatcherSnapshot = s2, (r2 !== s2 || void 0 !== t2 && t2 !== s2) && this._registrations.get(e2.canvasId) === e2 && this._requestBuild(e2, { notifyClients: true }), n2.on("error", () => {
            e2.fileWatcher === n2 && this._startParentDirectoryFileWatcher(e2);
          });
        } catch {
          this._startParentDirectoryFileWatcher(e2);
        }
      }
      _startParentDirectoryFileWatcher(e2) {
        const t2 = e2.fileWatcherSnapshot;
        this._stopFileWatcher(e2);
        const r2 = v.basename(e2.path);
        try {
          const n2 = this._captureFileWatcherSnapshot(e2.path);
          e2.fileWatcherSnapshot = n2;
          const s2 = rr.watch(v.dirname(e2.path), { persistent: false }, (t3, n3) => {
            if (this._registrations.get(e2.canvasId) === e2) {
              if (null !== n3) {
                if (n3.toString() !== r2) return;
                e2.fileWatcherSnapshot = this._captureFileWatcherSnapshot(e2.path);
              } else {
                const t4 = this._captureFileWatcherSnapshot(e2.path);
                if (t4 === e2.fileWatcherSnapshot) return;
                e2.fileWatcherSnapshot = t4;
              }
              this._requestBuild(e2, { notifyClients: true }), this._scheduleFileWatcherReattach(e2);
            }
          });
          e2.fileWatcher = s2;
          const o2 = this._captureFileWatcherSnapshot(e2.path);
          e2.fileWatcherSnapshot = o2, (n2 !== o2 || void 0 !== t2 && t2 !== o2) && this._registrations.get(e2.canvasId) === e2 && this._requestBuild(e2, { notifyClients: true }), s2.on("error", () => {
            e2.fileWatcher === s2 && this._stopFileWatcher(e2);
          });
        } catch {
        }
      }
      _captureFileWatcherSnapshot(e2) {
        try {
          const t2 = rr.statSync(e2, { bigint: true });
          return [t2.dev, t2.ino, t2.size, t2.mtimeNs].join(":");
        } catch {
          return "missing";
        }
      }
      _scheduleFileWatcherReattach(e2) {
        void 0 !== e2.fileWatcherReattachTimer && clearTimeout(e2.fileWatcherReattachTimer), e2.fileWatcherReattachTimer = setTimeout(() => {
          e2.fileWatcherReattachTimer = void 0, this._registrations.get(e2.canvasId) === e2 && this._startFileWatcher(e2);
        }, 100);
      }
      _stopFileWatcher(e2) {
        void 0 !== e2.fileWatcherReattachTimer && (clearTimeout(e2.fileWatcherReattachTimer), e2.fileWatcherReattachTimer = void 0), e2.fileWatcher && (e2.fileWatcher.close(), e2.fileWatcher = void 0);
      }
      _startDataFileWatcher(e2) {
        this._stopDataFileWatcher(e2);
        const t2 = rc(e2.path);
        try {
          e2.dataFileWatcher = rr.watch(t2, { persistent: false }, (t3) => {
            this._dataWriteTimers.has(e2.canvasId) || this._reloadDataFile(e2), "rename" === t3 && setTimeout(() => {
              this._registrations.get(e2.canvasId) === e2 && this._startDataFileWatcher(e2);
            }, 100);
          }), e2.dataFileWatcher.on("error", () => {
            this._stopDataFileWatcher(e2);
          });
        } catch {
        }
      }
      _stopDataFileWatcher(e2) {
        e2.dataFileWatcher && (e2.dataFileWatcher.close(), e2.dataFileWatcher = void 0);
      }
      async _reloadDataFile(e2) {
        const t2 = await this._readDataFile(e2.path);
        if (JSON.stringify(e2.canvasData) === JSON.stringify(t2)) return;
        const r2 = e2.canvasData;
        e2.canvasData = t2;
        const n2 = /* @__PURE__ */ new Set([...Object.keys(r2), ...Object.keys(t2)]);
        for (const s2 of n2) JSON.stringify(r2[s2]) !== JSON.stringify(t2[s2]) && this._sendCanvasDataEvent(e2, s2, t2[s2]);
      }
      _notifyReload(e2) {
        for (const t2 of e2.eventClients) try {
          t2.readyState === ba.OPEN && t2.send('{"type":"reload"}');
        } catch {
          e2.eventClients.delete(t2);
        }
      }
      _closeEventClients(e2) {
        for (const t2 of e2.eventClients) try {
          t2.close();
        } catch {
        }
        e2.eventClients.clear();
      }
      async _requestBuild(e2, t2) {
        return e2.pendingBuild = true, e2.notifyClientsOnBuild = e2.notifyClientsOnBuild || t2.notifyClients, e2.buildPromise || (e2.buildPromise = (async () => {
          for (; e2.pendingBuild; ) {
            const t3 = e2.notifyClientsOnBuild;
            e2.pendingBuild = false, e2.notifyClientsOnBuild = false;
            const r2 = e2.buildState?.status, n2 = Date.now();
            e2.buildState = await this._buildCanvas(e2);
            const s2 = Date.now() - n2;
            this._logBuildOutcome(e2.path, r2, e2.buildState, s2), "source" === e2.kind && this._writeStatusFile(e2, lc(e2.buildState)), "compile-error" === e2.buildState.status ? this._errorCallback?.({ canvasId: e2.canvasId, canvasPath: e2.path, error: e2.buildState.diagnosticsText ?? "Unknown compile error", errorKind: "compile-error" }) : "canvas-missing" === e2.buildState.status ? this._errorCallback?.({ canvasId: e2.canvasId, canvasPath: e2.path, error: "", errorKind: "canvas-missing" }) : "ready" === e2.buildState.status && this._errorClearedCallback?.(e2.canvasId, e2.path), t3 && this._notifyReload(e2);
          }
        })().finally(() => {
          e2.buildPromise = void 0, e2.pendingBuild && this._requestBuild(e2, { notifyClients: false });
        })), e2.buildPromise;
      }
      async _ensureBuildState(e2) {
        return e2.buildState || e2.buildPromise ? e2.buildPromise && await e2.buildPromise : await this._requestBuild(e2, { notifyClients: false }), e2.buildState ?? uc("Canvas build did not produce any output.");
      }
      _serve404(e2, t2) {
        const r2 = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Canvas not found</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:${_a};background:#1e1e1e;color:#ccc;display:flex;align-items:center;justify-content:center;min-height:100vh}
.c{text-align:center;padding:40px}
h1{font-size:18px;color:#888;margin-bottom:8px}
p{font-size:13px;color:#666}
code{background:#2a2a2a;padding:2px 6px;border-radius:4px;font-size:12px}
</style></head><body><div class="c">
<h1>Canvas not found</h1>
<p>${t2 ? `<code>${t2}</code> may have been deleted or expired.` : "Invalid canvas URL."}</p>
</div></body></html>`;
        e2.writeHead(404, { "Content-Type": "text/html; charset=utf-8" }), e2.end(r2);
      }
      _isValidOrigin(e2) {
        if (!e2) return true;
        try {
          const t2 = new URL(e2).hostname;
          return "localhost" === t2 || "127.0.0.1" === t2;
        } catch {
          return false;
        }
      }
      _rejectForbidden(e2) {
        e2.writeHead(403, { "Content-Type": "application/json" }), e2.end('{"error":"forbidden"}');
      }
      _rejectReadOnly(e2) {
        e2.writeHead(403, { "Content-Type": "application/json" }), e2.end('{"error":"canvas bundle is read only"}');
      }
      async _handleRequest(e2, t2) {
        const r2 = new URL(e2.url ?? "/", "http://127.0.0.1"), n2 = r2.pathname;
        if (!this._isValidOrigin(e2.headers.origin)) return void this._rejectForbidden(t2);
        if (r2.searchParams.get("token") !== this._sessionToken) return void this._rejectForbidden(t2);
        if (n2 === Va) return void this._serveRuntimeModule(t2);
        const s2 = n2.match(/^\/canvas\/([a-z0-9]+)\/runtime\.js$/);
        if (s2) return void await this._serveBundleRuntimeModule(t2, s2[1]);
        if (/^\/canvas\/([a-z0-9]+)\/(data|version)\.json$/.test(n2)) return t2.writeHead(404, { "Content-Type": "application/json" }), void t2.end('{"error":"not found"}');
        const o2 = n2.match(/^\/canvas\/([a-z0-9]+)\/state$/);
        if (o2) return "GET" === e2.method ? void this._handleStateGet(t2, o2[1]) : "POST" === e2.method ? void await this._handleStatePost(t2, o2[1], e2) : (t2.writeHead(405, { "Content-Type": "application/json" }), void t2.end('{"error":"method not allowed"}'));
        const i2 = n2.match(/^\/canvas\/([a-z0-9]+)\/report-error$/);
        if (i2 && "POST" === e2.method) return void await this._handleErrorReport(t2, i2[1], e2);
        const a2 = n2.match(/^\/canvas\/([a-z0-9]+)\/action$/);
        if (a2 && "POST" === e2.method) return void await this._handleAction(t2, a2[1], e2);
        const c2 = n2.match(/^\/canvas\/([a-z0-9]+)\/app\.js$/);
        if (c2) return void await this._serveCanvasApp(t2, c2[1]);
        const l2 = n2.match(/^\/canvas\/([a-z0-9]+)\/?$/);
        if (!l2) return void this._serve404(t2);
        const u2 = l2[1], d2 = this._registrations.get(u2);
        if (!d2) return void this._serve404(t2, u2);
        const p2 = ["default-src 'self'", "script-src 'self' 'unsafe-inline'", "style-src 'self' 'unsafe-inline'", "font-src 'self'", "img-src 'self' data: blob:", "connect-src 'self'"].join("; ");
        t2.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Content-Security-Policy": p2, "Cache-Control": "no-store" });
        const m2 = "bundle" === d2.kind ? `/canvas/${u2}/runtime.js` : Va;
        t2.end(Za(u2, this._sessionToken, m2));
      }
      _serveRuntimeModule(e2) {
        if (!this._runtimeModule) return e2.writeHead(503, { "Content-Type": "application/json" }), void e2.end('{"error":"server not started"}');
        e2.writeHead(200, { "Content-Type": "text/javascript; charset=utf-8", "Cache-Control": "public, max-age=31536000, immutable" }), e2.end(this._runtimeModule);
      }
      async _serveBundleRuntimeModule(e2, t2) {
        const r2 = this._registrations.get(t2);
        if (!r2 || "bundle" !== r2.kind) return e2.writeHead(404, { "Content-Type": "application/json" }), void e2.end('{"error":"not found"}');
        const n2 = await this._ensureBuildState(r2);
        if ("ready" !== n2.status || void 0 === n2.runtimeModule) return e2.writeHead(422, { "Content-Type": "application/json" }), void e2.end(JSON.stringify({ error: n2.diagnosticsText ?? "Canvas bundle is not available." }));
        e2.writeHead(200, { "Content-Type": "text/javascript; charset=utf-8", "Cache-Control": "no-store" }), e2.end(n2.runtimeModule);
      }
      async _handleErrorReport(e2, t2, r2) {
        const n2 = this._registrations.get(t2);
        if (!n2) return e2.writeHead(404, { "Content-Type": "application/json" }), void e2.end('{"error":"not found"}');
        let s2;
        try {
          s2 = await this._readBody(r2, Ya);
        } catch (t3) {
          if (t3 instanceof nc) return e2.writeHead(413, { "Content-Type": "application/json" }), void e2.end('{"error":"request body too large"}');
          throw t3;
        }
        let o2 = "Unknown runtime error";
        try {
          const e3 = JSON.parse(s2);
          null != e3.message && (o2 = String(e3.message));
        } catch {
          const e3 = s2.trim();
          e3 && (o2 = e3.slice(0, 500));
        }
        "source" === n2.kind && this._writeStatusFile(n2, { status: "runtime-error", error: o2 }), this._errorCallback?.({ canvasId: t2, canvasPath: n2.path, error: o2, errorKind: "runtime-error" }), Ua.warn(this.logContext, "Canvas runtime error reported", { canvasId: t2, path: n2.path, errorSummary: o2.split("\n")[0]?.slice(0, 200) }), e2.writeHead(200, { "Content-Type": "application/json" }), e2.end('{"ok":true}');
      }
      async _handleAction(e2, t2, r2) {
        const n2 = this._registrations.get(t2);
        if (!n2) return e2.writeHead(404, { "Content-Type": "application/json" }), void e2.end('{"error":"not found"}');
        if ("bundle" === n2.kind) return void this._rejectReadOnly(e2);
        let s2, o2;
        try {
          s2 = await this._readBody(r2, Ya);
        } catch (t3) {
          if (t3 instanceof nc) return e2.writeHead(413, { "Content-Type": "application/json" }), void e2.end('{"error":"request body too large"}');
          throw t3;
        }
        try {
          o2 = JSON.parse(s2);
        } catch {
          return e2.writeHead(400, { "Content-Type": "application/json" }), void e2.end('{"error":"invalid JSON body"}');
        }
        const i2 = xa(o2);
        if (!i2) return e2.writeHead(400, { "Content-Type": "application/json" }), void e2.end('{"error":"invalid action"}');
        if (this._actionCallback) try {
          this._actionCallback(t2, i2);
        } catch (e3) {
          Ua.warn(this.logContext, "Canvas action callback error", { canvasId: t2, actionType: i2.type, error: e3 instanceof Error ? e3.message : String(e3) });
        }
        e2.writeHead(200, { "Content-Type": "application/json" }), e2.end('{"ok":true}');
      }
      _handleStateGet(e2, t2) {
        const r2 = this._registrations.get(t2);
        if (!r2) return e2.writeHead(404, { "Content-Type": "application/json" }), void e2.end('{"error":"not found"}');
        e2.writeHead(200, { "Content-Type": "application/json", "Cache-Control": "no-store" }), e2.end(JSON.stringify(r2.canvasData));
      }
      async _handleStatePost(e2, t2, r2) {
        const n2 = this._registrations.get(t2);
        if (!n2) return e2.writeHead(404, { "Content-Type": "application/json" }), void e2.end('{"error":"not found"}');
        if ("bundle" === n2.kind) return void this._rejectReadOnly(e2);
        let s2, o2;
        try {
          s2 = await this._readBody(r2, Ya);
        } catch (t3) {
          if (t3 instanceof nc) return e2.writeHead(413, { "Content-Type": "application/json" }), void e2.end('{"error":"request body too large"}');
          throw t3;
        }
        try {
          o2 = JSON.parse(s2);
        } catch {
          return e2.writeHead(400, { "Content-Type": "application/json" }), void e2.end('{"error":"invalid JSON body"}');
        }
        if ("string" != typeof o2.key) return e2.writeHead(400, { "Content-Type": "application/json" }), void e2.end('{"error":"key must be a string"}');
        const i2 = o2.key, a2 = o2.value;
        if (void 0 === a2) delete n2.canvasData[i2];
        else {
          const t3 = n2.canvasData[i2];
          n2.canvasData[i2] = a2;
          const r3 = JSON.stringify(n2.canvasData);
          if (Buffer.byteLength(r3, "utf-8") > 1048576) return n2.canvasData[i2] = t3, void 0 === t3 && delete n2.canvasData[i2], e2.writeHead(413, { "Content-Type": "application/json" }), void e2.end('{"error":"canvas state size limit exceeded"}');
        }
        this._scheduleDataFileWrite(n2.canvasId, n2.path, n2.canvasData), this._sendCanvasDataEvent(n2, i2, a2), e2.writeHead(200, { "Content-Type": "application/json" }), e2.end('{"ok":true}');
      }
      async _serveCanvasApp(e2, t2) {
        const r2 = this._registrations.get(t2);
        if (!r2) return e2.writeHead(404, { "Content-Type": "application/json" }), void e2.end('{"error":"not found"}');
        const n2 = await this._ensureBuildState(r2);
        e2.writeHead(200, { "Content-Type": "text/javascript; charset=utf-8", "Cache-Control": "no-store" }), e2.end(n2.appModule);
      }
      _listen(e2) {
        return new Promise((t2, r2) => {
          e2.listen(0, "127.0.0.1", () => {
            const n2 = e2.address();
            n2 && "object" == typeof n2 ? t2(n2.port) : r2(new Error("Failed to bind canvas server"));
          }), e2.on("error", r2);
        });
      }
      async _buildCanvas(e2) {
        switch (e2.kind) {
          case "source":
            return this._buildCanvasSource(e2.path);
          case "bundle":
            return this._buildCanvasBundle(e2.path);
          default:
            return e2.kind;
        }
      }
      async _buildCanvasSource(e2) {
        try {
          const t2 = await rr.promises.readFile(e2, "utf-8"), r2 = await this._transformCanvasSource(t2, e2);
          if (!r2.code) return uc("Canvas build completed without producing output.");
          return { appModule: Fa(r2.code), status: "ready" };
        } catch (e3) {
          if (pc(e3)) return { appModule: "export default function CanvasMissing() { return null; }\n", status: "canvas-missing" };
          return uc(await mc(e3));
        }
      }
      async _buildCanvasBundle(e2) {
        try {
          const t2 = await (async function(e3, t3) {
            const r3 = "number" == typeof rr.constants.O_NOFOLLOW ? rr.constants.O_NOFOLLOW : 0, n3 = await rr.promises.open(e3, rr.constants.O_RDONLY | r3), s2 = [];
            let o2 = 0;
            try {
              if (!(await n3.stat()).isFile()) throw new Error("Canvas bundle must be a regular file.");
              for (; ; ) {
                const e4 = Buffer.allocUnsafe(Math.min(65536, t3 + 1 - o2)), { bytesRead: r4 } = await n3.read(e4, 0, e4.length, null);
                if (0 === r4) return Buffer.concat(s2, o2);
                if (o2 += r4, o2 > t3) throw new sc();
                s2.push(e4.subarray(0, r4));
              }
            } finally {
              await n3.close();
            }
          })(e2, Qa), r2 = await (function(e3, t3) {
            return new Promise((r3, n3) => {
              const s2 = fa.createGunzip(), o2 = [];
              let i2 = 0, a2 = false;
              s2.on("data", (e4) => {
                if (!a2) {
                  if (i2 += e4.length, i2 > t3) return a2 = true, o2.length = 0, void s2.destroy(new oc());
                  o2.push(e4);
                }
              }), s2.once("error", n3), s2.once("end", () => {
                r3(Buffer.concat(o2, i2));
              }), s2.end(e3);
            });
          })(t2, Xa), n2 = ic(r2.toString("utf-8"));
          return { appModule: n2.userModule, runtimeModule: n2.runtimeEsm, status: "ready" };
        } catch (e3) {
          if (pc(e3)) return { appModule: "export default function CanvasMissing() { return null; }\n", status: "canvas-missing" };
          return uc(await mc(e3));
        }
      }
      async _transformCanvasSource(e2, t2) {
        const r2 = za;
        try {
          return await this._runCanvasTransform(e2, t2);
        } catch (n2) {
          const s2 = (function(e3) {
            const t3 = e3 instanceof Error ? e3.message : String(e3);
            if (ja.test(t3)) return "nonretryable-startup";
            return t3.includes("The service is no longer running") || "The service was stopped" === t3 || t3.includes("write EPIPE") || t3.includes("ECONNRESET") ? "retryable-disconnect" : void 0;
          })(n2);
          if ("retryable-disconnect" !== s2) throw n2;
          const o2 = await (async function(e3) {
            if (e3 !== za) return "restart-already-complete";
            if (Ga) return await Ga, "reused-inflight-restart";
            let t3 = false;
            return Ga = (async () => {
              if (e3 !== za) return;
              const r3 = await $a();
              await r3.stop(), za += 1, t3 = true;
            })().finally(() => {
              Ga = void 0;
            }), await Ga, t3 ? "performed-restart" : "restart-already-complete";
          })(r2);
          "performed-restart" === o2 && Ua.warn(this.logContext, "Canvas build service disconnected; restarting esbuild and retrying", { path: t2, error: n2 instanceof Error ? n2.message : String(n2) });
          try {
            const r3 = await this._runCanvasTransform(e2, t2);
            return "performed-restart" === o2 && Ua.info(this.logContext, "Canvas build recovered after restarting esbuild", { path: t2 }), r3;
          } catch (e3) {
            throw Ua.warn(this.logContext, "Canvas build retry failed after recovery", { path: t2, recoveryResult: o2, error: e3 instanceof Error ? e3.message : String(e3) }), e3;
          }
        }
      }
      async _runCanvasTransform(e2, t2) {
        return (await $a()).transform(e2, { loader: cc(t2), jsx: "transform", jsxFactory: "React.createElement", jsxFragment: "React.Fragment", format: "esm", target: "es2022", sourcefile: v.basename(t2), logLevel: "silent" });
      }
      _logBuildOutcome(e2, t2, r2, n2) {
        "compile-error" !== r2.status ? "canvas-missing" !== r2.status ? "compile-error" !== t2 && "canvas-missing" !== t2 || Ua.info(this.logContext, "Canvas build recovered", { path: e2, buildDurationMs: n2 }) : Ua.info(this.logContext, "Canvas source file missing", { path: e2, buildDurationMs: n2 }) : Ua.warn(this.logContext, "Canvas build failed", { path: e2, diagnosticsSummary: hc(r2.diagnosticsText), buildDurationMs: n2 });
      }
      _writeStatusFile(e2, t2) {
        const r2 = tc(e2.path);
        try {
          const n2 = JSON.stringify(t2);
          if (e2.lastStatusJson === n2 && rr.existsSync(r2)) return;
          rr.writeFileSync(r2, n2, "utf-8"), e2.lastStatusJson = n2;
        } catch {
          Ua.warn(this.logContext, "Failed to write canvas status file", { path: r2 });
        }
      }
      _deleteStatusFile(e2) {
        e2.lastStatusJson = void 0;
        const t2 = tc(e2.path);
        try {
          rr.unlinkSync(t2);
        } catch {
        }
      }
      async _readDataFile(e2) {
        const t2 = rc(e2);
        try {
          const e3 = await rr.promises.readFile(t2, "utf-8"), r2 = JSON.parse(e3);
          if (r2 && "object" == typeof r2 && !Array.isArray(r2)) return r2;
        } catch {
        }
        return {};
      }
      _scheduleDataFileWrite(e2, t2, r2) {
        const n2 = this._dataWriteTimers.get(e2);
        void 0 !== n2 && clearTimeout(n2);
        const s2 = JSON.stringify(r2, null, 2);
        this._dataWriteTimers.set(e2, setTimeout(() => {
          this._dataWriteTimers.delete(e2);
          const r3 = rc(t2);
          rr.promises.writeFile(r3, s2, "utf-8").catch(() => {
            Ua.warn(this.logContext, "Failed to write canvas data file", { path: r3 });
          });
        }, 300));
      }
      async _flushDataWriteForCanvas(e2, t2) {
        const r2 = this._dataWriteTimers.get(e2);
        if (void 0 === r2) return;
        clearTimeout(r2), this._dataWriteTimers.delete(e2);
        const n2 = rc(t2.path);
        try {
          await rr.promises.writeFile(n2, JSON.stringify(t2.canvasData, null, 2), "utf-8");
        } catch {
          Ua.warn(this.logContext, "Failed to flush canvas data file", { path: n2 });
        }
      }
      async _flushPendingDataWrites() {
        const e2 = [];
        for (const [t2, r2] of this._dataWriteTimers) {
          clearTimeout(r2);
          const n2 = this._registrations.get(t2);
          if (!n2 || "source" !== n2.kind) continue;
          const s2 = rc(n2.path);
          e2.push(rr.promises.writeFile(s2, JSON.stringify(n2.canvasData, null, 2), "utf-8").catch(() => {
            Ua.warn(this.logContext, "Failed to flush canvas data file", { path: s2 });
          }));
        }
        this._dataWriteTimers.clear(), await Promise.all(e2);
      }
    }
    function cc(e2) {
      switch (v.extname(e2).toLowerCase()) {
        case ".tsx":
        default:
          return "tsx";
        case ".ts":
          return "ts";
        case ".jsx":
          return "jsx";
        case ".js":
          return "js";
      }
    }
    function lc(e2) {
      switch (e2.status) {
        case "compile-error":
          return { status: "compile-error", diagnostics: e2.diagnosticsText ?? "" };
        case "canvas-missing":
          return { status: "canvas-missing" };
        case "ready":
          return { status: "rendered" };
        default:
          return e2.status;
      }
    }
    function uc(e2) {
      return { appModule: dc(e2), status: "compile-error", diagnosticsText: e2 };
    }
    function dc(e2) {
      return `
var diagnostics = ${JSON.stringify(e2)};

export default function CanvasCompileError() {
  return React.createElement("div", {
    style: {
      minHeight: "100vh",
      padding: "24px 32px",
      boxSizing: "border-box",
      background: ${JSON.stringify("#181818")},
      color: ${JSON.stringify("#E4E4E4EB")},
      fontFamily: ${JSON.stringify(_a)},
    },
  },
    React.createElement("h1", {
      style: { margin: "0 0 12px 0", fontSize: "20px", fontWeight: "700" },
    }, "Canvas Compile Error"),
    React.createElement("p", {
      style: {
        margin: "0 0 16px 0",
        color: ${JSON.stringify("#E4E4E48D")},
        lineHeight: "1.5",
      },
    }, "Cursor could not compile this canvas. Fix the errors below and save again."),
    React.createElement("pre", {
      style: {
        margin: "0",
        padding: "16px",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        overflowX: "auto",
        borderRadius: "12px",
        border: "1px solid #E4E4E426",
        background: ${JSON.stringify("#1e1e1e")},
        color: ${JSON.stringify("#f5c2c7")},
        fontFamily: ${JSON.stringify('ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace')},
        fontSize: "13px",
        lineHeight: "1.6",
      },
    }, diagnostics)
  );
}
`;
    }
    function pc(e2) {
      return "object" == typeof e2 && null !== e2 && "ENOENT" === e2.code;
    }
    async function mc(e2) {
      if ((function(e3) {
        return "object" == typeof e3 && null !== e3 && "errors" in e3 && Array.isArray(e3.errors);
      })(e2)) {
        const t2 = await $a(), r2 = await t2.formatMessages(e2.errors, { color: false, kind: "error", terminalWidth: 100 });
        if (r2.length > 0) return r2.join("\n\n");
      }
      return e2 instanceof Error ? e2.message : String(e2);
    }
    function hc(e2) {
      const t2 = e2?.trim();
      if (t2) return t2.split("\n")[0];
    }
    async function fc(e2) {
      const t2 = v.join(e2, Ka);
      try {
        return await rr.promises.readFile(t2, "utf-8");
      } catch {
        throw new Error(`Missing canvas runtime module "${Ka}" in ${e2}.`);
      }
    }
    const gc = /(?:^|[\\/])\.cursor[\\/]projects[\\/][^\\/]+[\\/]canvases[\\/][^\\/]+\.canvas\.tsx$/i, yc = /^[A-Za-z]:[\\/]/, wc = /^[a-f0-9]{64}\.canvas\.tsx$/i, vc = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    function _c(e2) {
      return v.isAbsolute(e2) || yc.test(e2);
    }
    function bc(e2) {
      return gc.test(e2);
    }
    function Sc(e2) {
      return wc.test(e2);
    }
    function kc(e2, t2) {
      return "" !== e2 && !e2.startsWith(`..${v.sep}`) && ".." !== e2 && !v.isAbsolute(e2) && !e2.includes(v.sep) && t2(e2);
    }
    async function xc(e2) {
      let t2, r2;
      try {
        t2 = await (0, W.lstat)(e2), r2 = await (0, W.realpath)(e2);
      } catch (e3) {
        return { status: "invalid", reason: e3 instanceof Error && "code" in e3 ? `stat-${String(e3.code)}` : "stat-failed" };
      }
      return !t2.isFile() || t2.isSymbolicLink() ? { status: "invalid", reason: "path-not-regular-file" } : { stats: t2, realPath: r2 };
    }
    async function Ec(e2, t2) {
      try {
        for (const t3 of e2) {
          const e3 = await (0, W.lstat)(t3);
          if (!e3.isDirectory() || e3.isSymbolicLink()) return;
        }
        return await (0, W.realpath)(t2);
      } catch {
        return;
      }
    }
    function Ic(e2) {
      const t2 = v.resolve(e2.path);
      if (v.basename(t2) === Ea.Rj) for (const r2 of e2.replicaFilesDirs) {
        const e3 = v.resolve(r2, vt.sz), n2 = v.relative(e3, t2).split(v.sep);
        if (2 !== n2.length || void 0 === n2[0] || !vc.test(n2[0]) || n2[1] !== Ea.Rj) continue;
        const s2 = n2[0].toLowerCase(), o2 = v.join(e3, s2);
        return { filesDir: v.resolve(r2), canvasId: s2, canvasDir: o2, sourcePath: v.join(o2, vt.EN), bundlePath: t2 };
      }
    }
    function Tc(e2) {
      const t2 = v.dirname(e2.canvasDir);
      return Ec([e2.filesDir, t2, e2.canvasDir], t2);
    }
    async function Cc(e2) {
      if (!_c(e2) || !bc(e2)) return { status: "invalid", reason: "path-not-managed-canvas" };
      const t2 = await xc(e2);
      return "status" in t2 ? t2 : _c(t2.realPath) && bc(t2.realPath) ? { status: "valid", stats: t2.stats, realPath: t2.realPath } : { status: "invalid", reason: "realpath-not-managed-canvas" };
    }
    const Pc = (0, g.h)("canvas-server");
    class Ac {
      constructor(e2) {
        this._started = false, this.logContext = e2.logContext ?? (0, f.q6)(), this.canvasServer = new ac({ logContext: this.logContext, runtimeDir: e2.runtimeDir, nodeExecPath: e2.nodeExecPath });
      }
      onAction(e2) {
        this.canvasServer.onAction(e2);
      }
      onError(e2) {
        this.canvasServer.onError(e2);
      }
      onErrorCleared(e2) {
        this.canvasServer.onErrorCleared(e2);
      }
      async _ensureStarted() {
        this._started || (this._startPromise || (this._startPromise = this.canvasServer.start().then(() => {
          this._started = true;
        }).catch((e2) => {
          throw this._startPromise = void 0, e2;
        })), await this._startPromise);
      }
      get sessionToken() {
        return this.canvasServer.sessionToken;
      }
      async stop() {
        this._startPromise && !this._started && await this._startPromise.catch(() => {
        }), this._started && (await this.canvasServer.stop(), this._started = false, this._startPromise = void 0, Pc.info(this.logContext, "Canvas server stopped"));
      }
      async registerCanvas(e2) {
        await this._ensureStarted();
        const t2 = await this.canvasServer.registerCanvas(e2);
        return Pc.info(this.logContext, "Registered canvas", { path: e2.path, kind: e2.kind ?? "source", canvasId: t2.canvasId }), t2;
      }
      getCanvasUrl(e2) {
        return this.canvasServer.getUrl(e2.canvasId, e2.preview);
      }
      async destroyCanvas(e2) {
        await this.canvasServer.destroyCanvas({ canvasId: e2.canvasId });
      }
      getRegisteredCanvasPath(e2) {
        return this.canvasServer.getRegisteredCanvasPath(e2);
      }
      async getShareArtifact(e2) {
        return await this._ensureStarted(), this.canvasServer.getShareArtifact({ path: e2.path });
      }
      pushState(e2) {
        return this.canvasServer.pushState({ canvasId: e2.canvasId, channel: e2.channel, jsonPayload: e2.payload });
      }
      pushStateAll(e2) {
        this.canvasServer.pushStateAll({ channel: e2.channel, jsonPayload: e2.payload });
      }
      get isRunning() {
        return this._started;
      }
    }
    const Rc = "cursor/canvas", Mc = "grok/canvas", Jc = /* @__PURE__ */ new Map([[Rc, "cursor"], [Mc, "grok"]]), Oc = /^\s*(?:import|export)(\s+type)?\s+(?!default\b)((?:[\w\s*,{}]+)\s+from\s+|(?=["']))["']([^"']+)["']/gm;
    function Bc(e2) {
      const t2 = [];
      Oc.lastIndex = 0;
      for (const r2 of e2.matchAll(Oc)) {
        const e3 = r2[1], n2 = r2[2] ?? "", s2 = r2[3];
        void 0 !== s2 && t2.push({ specifier: s2, isTypeOnly: void 0 !== e3 || qc(n2) });
      }
      return t2;
    }
    function Dc(e2) {
      const t2 = /* @__PURE__ */ new Set();
      for (const { specifier: r2 } of e2) {
        const e3 = Jc.get(r2);
        void 0 !== e3 && t2.add(e3);
      }
      return t2;
    }
    function qc(e2) {
      const t2 = e2.replace(/\s+from\s+$/u, "").trim();
      if (!t2.startsWith("{") || !t2.endsWith("}")) return false;
      const r2 = t2.slice(1, -1).split(",").map((e3) => e3.trim()).filter((e3) => e3.length > 0);
      return r2.length > 0 && r2.every((e3) => /^type\s+\S/u.test(e3));
    }
    function Nc(e2) {
      let t2 = "", r2 = 0;
      for (; r2 < e2.length; ) {
        const n2 = e2[r2], s2 = e2[r2 + 1];
        if ("/" !== n2 || "/" !== s2) if ("/" !== n2 || "*" !== s2) t2 += n2 ?? "", r2 += 1;
        else {
          for (r2 += 2; r2 < e2.length && ("*" !== e2[r2] || "/" !== e2[r2 + 1]); ) "\n" === e2[r2] && (t2 += "\n"), r2 += 1;
          r2 += 2;
        }
        else for (r2 += 2; r2 < e2.length && "\n" !== e2[r2]; ) r2 += 1;
      }
      return t2;
    }
    async function Fc(e2) {
      const t2 = await Promise.resolve().then(__webpack_require__.t.bind(__webpack_require__, 41503, 19)), r2 = Fa((await t2.transform(e2.source, { loader: Uc(e2.canvasPath), jsx: "transform", jsxFactory: "React.createElement", jsxFragment: "React.Fragment", format: "esm", target: "es2022", sourcefile: v.basename(e2.canvasPath), logLevel: "silent" })).code);
      var n2;
      const s2 = Da(Aa({ runtimeEsm: await (async function(e3, t3) {
        const r3 = /* @__PURE__ */ (function(e4) {
          return "grok" === e4 ? "canvas-runtime-grok.esm.js" : "canvas-runtime.esm.js";
        })(t3), n3 = v.join(e3 ?? v.join(v.dirname((0, D.fileURLToPath)(require("url").pathToFileURL(__filename).href)), "runtime"), r3);
        try {
          const e4 = await Promise.resolve().then(__webpack_require__.t.bind(__webpack_require__, 51455, 19));
          return await e4.readFile(n3, "utf-8");
        } catch (e4) {
          throw new Error(`Missing canvas runtime module "${r3}" in ${v.dirname(n3)}.`, { cause: e4 });
        }
      })(e2.runtimeDir, e2.kit ?? (n2 = e2.source, Dc(Bc(Nc(n2))).has("grok") ? "grok" : "cursor")), userModule: r2 }));
      if (!Ja(s2, {})) throw new Error("Canvas share exceeds content limits.");
      return { appJs: new Uint8Array(s2), userModule: r2 };
    }
    function Uc(e2) {
      switch (v.extname(e2).toLowerCase()) {
        case ".tsx":
        default:
          return "tsx";
        case ".ts":
          return "ts";
        case ".jsx":
          return "jsx";
        case ".js":
          return "js";
      }
    }
    (0, v.resolve)((0, D.fileURLToPath)(new URL(__webpack_require__(35669), __webpack_require__.b)), "..");
    const Lc = 2e7, $c = [30, 120, 300];
    function jc(e2) {
      const t2 = e2?.code;
      return "EPERM" === t2 || "EACCES" === t2 || "EBUSY" === t2;
    }
    const Gc = (e2) => new Promise((t2) => setTimeout(t2, e2));
    async function zc(e2) {
      const { filePath: t2, contents: r2, mode: n2 } = e2, s2 = `${t2}.tmp-${(0, tr.randomBytes)(6).toString("hex")}`;
      try {
        await (0, W.writeFile)(s2, r2, { mode: n2 });
        try {
          return void await (0, W.rename)(s2, t2);
        } catch (e3) {
          if (!jc(e3)) throw e3;
          for (const e4 of $c) {
            await Gc(e4);
            try {
              return void await (0, W.rename)(s2, t2);
            } catch (e5) {
              if (!jc(e5)) throw e5;
            }
          }
          await (0, W.writeFile)(t2, r2, { mode: n2 }), await (0, W.unlink)(s2).catch(() => {
          });
        }
      } catch (e3) {
        throw await (0, W.unlink)(s2).catch(() => {
        }), e3;
      }
    }
    async function Wc(e2) {
      const t2 = await (async function(e3, t3) {
        try {
          const r2 = Ra((0, fa.gunzipSync)(e3, { maxOutputLength: Lc }).toString("utf8")), n2 = "bundle-v1" === r2.kind ? r2.bundle.userModule : r2.source;
          return await zc({ filePath: t3, contents: n2 }), t3;
        } catch {
          return;
        }
      })(e2.bundleGzip, e2.sourcePath);
      return void 0 === t2 ? { bundlePath: e2.bundlePath } : { bundlePath: e2.bundlePath, sourcePath: t2 };
    }
    const Hc = 12096e5, Kc = 268435456;
    (0, $.Pu)("canvas.compile.result", { description: "compileCanvasSource outcomes by result", labelNames: ["result"] }), (0, $.v5)("canvas.compile.phase_ms", { description: "Wall time for each compileCanvasSource phase (bootstrap, queue_wait, typecheck, bundle, total)", labelNames: ["phase"] }), (0, $.v5)("canvas.compile.source_bytes", { description: "UTF-8 byte length of canvas source at compile start" }), (0, $.v5)("canvas.compile.bundle_bytes", { description: "UTF-8 byte length of the uncompressed canvas share bundle before gzip" }), (0, $.v5)("canvas.compile.gzip_bytes", { description: "Byte length of the gzipped canvas share bundle (appJs)" });
    /* @__PURE__ */ new Map();
    (0, v.resolve)((0, D.fileURLToPath)(new URL(__webpack_require__(35669), __webpack_require__.b)), ".."), /* @__PURE__ */ new Map();
    const Vc = /^\s*\/\/\s*cursor-canvas-title:[ \t]*(.*)$/m, Yc = 120;
    const Qc = 200;
    function Xc(e2) {
      return (0, tr.createHash)("sha256").update(e2, "utf8").digest("hex");
    }
    class Zc extends Error {
      constructor() {
        super("Canvas source changed after diagnostics; save again to type-check the new source"), this.name = "CanvasDiagnosticsSourceMismatchError";
      }
    }
    async function el(e2) {
      try {
        const t2 = JSON.parse(await (0, W.readFile)(v.join(e2, Ea._g), "utf8"));
        if (null === t2 || "object" != typeof t2 || Array.isArray(t2)) return;
        const r2 = t2, n2 = (e3) => "string" == typeof e3 ? e3 : void 0;
        return { createdAt: n2(r2.createdAt), title: n2(r2.title), sourceSha256: n2(r2.sourceSha256) };
      } catch {
        return;
      }
    }
    async function tl(e2) {
      const t2 = v.join(e2.layout.canvasDir, Ea._g);
      for (const r3 of [e2.layout.bundlePath, t2]) {
        const e3 = await (0, W.lstat)(r3).catch(() => {
        });
        if (e3?.isSymbolicLink()) throw new Error(`Refusing to write replica canvas artifact through a symlink: ${v.basename(r3)}`);
      }
      const r2 = await (0, W.readFile)(e2.layout.sourcePath);
      if (void 0 !== e2.expectedSourceSha256 && (function(e3) {
        return (0, tr.createHash)("sha256").update(e3).digest("hex");
      })(r2) !== e2.expectedSourceSha256) throw new Zc();
      const n2 = r2.toString("utf8"), s2 = await Fc({ source: n2, canvasPath: e2.layout.sourcePath, runtimeDir: e2.runtimeDir }), o2 = await (0, W.readFile)(e2.layout.sourcePath);
      if (!r2.equals(o2)) throw new Zc();
      await zc({ filePath: e2.layout.bundlePath, contents: Buffer.from(s2.appJs), mode: 438 });
      const i2 = (/* @__PURE__ */ new Date()).toISOString(), a2 = await el(e2.layout.canvasDir), c2 = (function(e3) {
        const t3 = Vc.exec(e3)?.[1]?.trim();
        if (void 0 !== t3 && 0 !== t3.length) return t3.slice(0, Yc);
      })(n2) ?? a2?.title, l2 = { version: 1, canvasId: e2.layout.canvasId, ...void 0 !== c2 ? { title: c2 } : {}, createdAt: a2?.createdAt ?? i2, updatedAt: i2, sourceSha256: Xc(n2), compiledAt: i2 };
      await zc({ filePath: t2, contents: JSON.stringify(l2), mode: 438 });
    }
    function rl(e2, t2) {
      const r2 = e2.split(/\r?\n/).find((e3) => new RegExp(`^\\s*${t2}\\s*:`).test(e3)), n2 = r2?.replace(new RegExp(`^\\s*${t2}\\s*:\\s*`), "");
      if (!n2) return;
      const s2 = (function(e3) {
        let t3;
        for (let r3 = 0; r3 < e3.length; r3++) {
          const n3 = e3[r3];
          if ('"' !== n3 && "'" !== n3 || 0 !== r3 && "\\" === e3[r3 - 1]) {
            if ("#" === n3 && void 0 === t3) return e3.slice(0, r3);
          } else t3 = t3 === n3 ? void 0 : t3 ?? n3;
        }
        return e3;
      })(n2).trim(), o2 = s2.match(/^(['"])(.*)\1$/);
      return o2 ? o2[2]?.trim() : s2;
    }
    function nl(e2) {
      return e2.map((e3) => {
        if ("agentFetched" !== e3.type?.type.case || !e3.content) return e3;
        if ((function(e4) {
          const t3 = e4.match(/^\s*---\r?\n([\s\S]*?)\r?\n---/);
          if (!t3) return false;
          const r2 = t3[1] ?? "";
          return "true" === rl(r2, "mode")?.toLowerCase() && ["icon", "color", "reminder"].every((e5) => {
            const t4 = rl(r2, e5);
            return void 0 !== t4 && t4.length > 0;
          });
        })(e3.content)) return e3;
        const t2 = e3.clone();
        return t2.content = "", t2;
      });
    }
    function sl(e2, t2) {
      const r2 = [[t2.canvasesDir, "<canvasesDir>"], [t2.sdkSourceDir, "<sdkSourceDir>"], [(0, fe.homedir)(), "~"]];
      r2.sort((e3, t3) => t3[0].length - e3[0].length);
      let n2 = e2;
      for (const [e3, t3] of r2) 0 !== e3.length && n2.includes(e3) && (n2 = n2.split(e3).join(t3));
      return n2;
    }
    function ol(e2, t2) {
      return e2 ? (0, v.join)(e2, "terminals", `${t2}.txt`) : void 0;
    }
    class il {
      constructor() {
        this.tail = Promise.resolve();
      }
      queue(e2) {
        const t2 = this.tail.then(async () => {
          await e2();
        });
        this.tail = t2.catch(() => {
        });
      }
    }
    class al extends $i {
      constructor(e2, t2, r2, n2, s2 = () => false, o2 = () => {
      }) {
        super(), this.command = e2, this.cwd = t2, this.abortShell = r2, this.onExit = n2, this.isShellExecOutputBackpressureEnabled = s2, this.getShellExecOutputSuppressionOptions = o2, this.writeEmitter = this._register(new H.EventEmitter()), this.onDidWrite = this.writeEmitter.event, this.writeBufferEmitter = this._register(new H.EventEmitter()), this.onDidWriteBuffer = this.writeBufferEmitter.event, this.closeEmitter = this._register(new H.EventEmitter()), this.onDidClose = this.closeEmitter.event, this.isStarted = false, this.hasExited = false, this.hasClosed = false, this.abortRequestedByUser = false, this.pendingOutput = [], this.isOutputPaused = false, this.pauseWaiters = [];
      }
      handleInput(e2) {
        "" !== e2 || this.hasExited || (this.abortRequestedByUser = true, this.abortShell());
      }
      getEventHandler() {
        return { onStdout: (e2) => this.handleShellOutput(e2), onStderr: (e2) => this.handleShellOutput(e2), onExit: (e2) => this.handleExit(e2), onStart: () => this.handleStart() };
      }
      open(e2) {
        if (!(this.isStarted || this.hasExited || this.isDisposed)) {
          this.isStarted = true, this.emitImmediate(this.osc633("P", `Cwd=${this.escapeOscValue(this.cwd)}`)), this.emitImmediate(this.osc633("P", "HasRichCommandDetection=True")), this.showPrompt(), this.showCommand(this.command);
          for (const e3 of this.pendingOutput) this.writeBufferEmitter.fire(e3);
          this.pendingOutput = [];
        }
      }
      pause() {
        this.isOutputPaused = true;
      }
      resume(e2) {
        if (!this.isOutputPaused && !e2?.force) return;
        this.isOutputPaused = false;
        const t2 = this.pauseWaiters;
        this.pauseWaiters = [];
        for (const e3 of t2) e3();
      }
      async awaitUnpaused() {
        for (; this.isOutputPaused; ) await new Promise((e2) => this.pauseWaiters.push(e2));
      }
      close() {
        this.resume(), this.hasClosed || (this.hasClosed = true, this.hasExited || this.emitImmediate("\r\n[Terminal closing]\r\n"), this.closeEmitter.fire());
      }
      dispose() {
        this.resume(), super.dispose();
      }
      handleStart() {
      }
      async handleShellOutput(e2) {
        this.isTerminalClosed() || this.isDisposed || (await this.awaitUnpaused(), this.isTerminalClosed() || this.isDisposed || this.writeShellStreamOutput(e2));
      }
      writeShellStreamOutput(e2) {
        if (!this.isShellExecOutputBackpressureEnabled()) return void this.emitShellOutput(e2);
        if (this.isDisposed) return;
        void 0 === this.outputSuppressor && (this.outputSuppressor = this._register(new G.vu(this.getShellExecOutputSuppressionOptions())));
        const t2 = this.outputSuppressor.record(Buffer.byteLength(e2, "utf8"));
        t2.noticeJustTriggered && this.emitShellOutput(G.Ls), t2.shouldForward && this.emitShellOutput(e2);
      }
      emitShellOutput(e2) {
        const t2 = Buffer.from(e2);
        this.isStarted ? this.writeBufferEmitter.fire(t2) : this.pendingOutput.push(t2);
      }
      emitImmediate(e2) {
        this.emitShellOutput(e2);
      }
      handleExit(e2) {
        if (!this.hasExited && !this.isDisposed) {
          if (this.resume({ force: true }), !this.isStarted) return this.hasExited = true, void this.onExit({ code: e2, aborted: this.abortRequestedByUser || null === e2 });
          this._completeExit(e2);
        }
      }
      _completeExit(e2) {
        this.hasExited = true, this.showCommandCompleted(e2 ?? 0), this.emitImmediate("\r\n"), this.hasClosed || (this.hasClosed = true, this.closeEmitter.fire(e2 ?? 0)), this.onExit({ code: e2, aborted: this.abortRequestedByUser || null === e2 });
      }
      hasExitOccurred() {
        return this.hasExited;
      }
      acknowledgeExternalTeardown() {
        this.hasExited = true, this.resume({ force: true });
      }
      isTerminalClosed() {
        return this.hasExited || this.hasClosed;
      }
      showPrompt() {
        this.emitImmediate(this.osc633("A")), this.emitImmediate("$ "), this.emitImmediate(this.osc633("B"));
      }
      showCommand(e2) {
        this.emitImmediate(this.osc633("E", this.escapeOscValue(e2))), this.emitImmediate(`${e2}\r
`), this.emitImmediate(this.osc633("C"));
      }
      showCommandCompleted(e2) {
        this.emitImmediate(this.osc633("D", e2.toString()));
      }
      escapeOscValue(e2) {
        return e2.replace(/\\/g, "\\\\").replace(/;/g, "\\x3b").replace(/[\x00-\x1f]/g, (e3) => `\\x${e3.charCodeAt(0).toString(16).padStart(2, "0")}`);
      }
      osc633(e2, ...t2) {
        return `\x1B]633;${[e2, ...t2].filter((e3) => void 0 !== e3).join(";")}\x07`;
      }
    }
    class cl extends $i {
      constructor(e2) {
        super(), this.projectDir = e2, this.terminals = /* @__PURE__ */ new Map(), this.pseudoTerminals = /* @__PURE__ */ new Map(), this.abortFunctions = /* @__PURE__ */ new Map(), this.closeListeners = /* @__PURE__ */ new Map(), this.trackedWork = /* @__PURE__ */ new Map(), this.headlessShells = /* @__PURE__ */ new Map(), this.completionPublishedShellIds = /* @__PURE__ */ new Set(), this.shellWorkNotificationQueue = new il();
      }
      async createTerminal(e2) {
        const { shellId: t2, command: r2, cwd: n2, registerEventHandler: s2, conversationId: o2, abortShell: i2, description: a2, toolCallId: c2, isShellExecOutputBackpressureEnabled: l2 = () => false, getShellExecOutputSuppressionOptions: u2 = () => {
        } } = e2, d2 = `Cursor (${this.extractCommandDescription(r2)})`;
        let p2;
        const m2 = new al(r2, n2, i2, (e3) => {
          const r3 = e3.aborted ? "aborted" : 0 === e3.code ? "success" : "error", n3 = e3.aborted || 0 === e3.code || null === e3.code ? void 0 : `exit_code=${e3.code}`;
          this.enqueueShellCompletion(t2, r3, n3), this.disposeShellTerminal(t2);
        }, l2, u2);
        this.pseudoTerminals.set(t2, m2), p2 = H.window.createTerminal({ name: d2, pty: m2, convertEol: true, iconPath: new H.ThemeIcon("infinity"), hideFromUser: false, metadata: { backgroundShellId: t2, conversationId: o2, agentOwned: true } }), this.terminals.set(t2, p2), this.abortFunctions.set(t2, i2);
        const h2 = this.createShellWorkItem({ shellId: t2, command: r2, conversationId: o2, description: a2, toolCallId: c2 });
        this.trackedWork.set(t2, h2), this.shellWorkNotificationQueue.queue(() => this.notifyShellUpserted(h2)), s2(m2.getEventHandler());
        const f2 = H.window.onDidCloseTerminal((e3) => {
          if (e3 === p2) {
            m2.hasExitOccurred() || this.enqueueShellCompletion(t2, "aborted", "terminated_by_user");
            const e4 = this.abortFunctions.get(t2);
            e4 && e4(), this.cleanupShell(t2);
          }
        });
        this.closeListeners.set(t2, f2);
      }
      async trackHeadlessShell(e2) {
        const { shellId: t2, command: r2, conversationId: n2, abortShell: s2, description: o2, toolCallId: i2, onCleanup: a2 } = e2;
        this.abortFunctions.set(t2, s2), this.headlessShells.set(t2, a2);
        const c2 = this.createShellWorkItem({ shellId: t2, command: r2, conversationId: n2, description: o2, toolCallId: i2 });
        this.trackedWork.set(t2, c2), this.shellWorkNotificationQueue.queue(() => this.notifyShellUpserted(c2));
      }
      shouldForwardShellOutputCompletion(e2) {
        if ("task_progress" === e2.reason) return true;
        if ("task_finished" !== e2.reason) return false;
        const t2 = this.getShellIdFromCompletionTaskId(e2.taskId);
        return void 0 !== t2 && (this.headlessShells.has(t2) || this.terminals.has(t2));
      }
      enqueueShellOutputCompletion(e2) {
        if ("shell" !== e2.kind) return;
        const t2 = this.getShellIdFromCompletionTaskId(e2.taskId);
        if (void 0 === t2) return;
        const r2 = this.trackedWork.get(t2);
        if ("task_finished" === e2.reason) return this.completionPublishedShellIds.has(t2) || !r2?.composerId || (this.completionPublishedShellIds.add(t2), this.forwardShellOutputCompletion(t2, r2.composerId, e2.toolCallId ?? r2.toolCallId, e2)), void this.backupDisposeShellTerminal(t2);
        r2?.composerId && this.forwardShellOutputCompletion(t2, r2.composerId, e2.toolCallId ?? r2.toolCallId, e2);
      }
      backupDisposeShellTerminal(e2) {
        if (this.headlessShells.has(e2)) return void this.cleanupShell(e2);
        const t2 = this.pseudoTerminals.get(e2);
        t2?.hasExitOccurred() || (t2?.acknowledgeExternalTeardown(), this.disposeShellTerminal(e2));
      }
      disposeShellTerminal(e2) {
        const t2 = this.terminals.get(e2), r2 = this.pseudoTerminals.get(e2);
        this.cleanupShell(e2, { disposePty: false }), (t2 || r2) && queueMicrotask(() => {
          r2?.dispose(), this.pseudoTerminals.delete(e2), t2?.dispose();
        });
      }
      createShellWorkItem(e2) {
        return { id: String(e2.shellId), kind: "shell", composerId: e2.conversationId ?? "", title: e2.description || e2.command, startTimeMs: Date.now(), ...void 0 !== e2.toolCallId ? { toolCallId: e2.toolCallId } : {} };
      }
      async notifyShellUpserted(e2) {
        try {
          await H.cursor.upsertBackgroundShellWork(e2);
        } catch {
        }
      }
      async notifyShellCleared(e2) {
        try {
          await H.cursor.clearBackgroundShellWork(String(e2));
        } catch {
        }
      }
      async notifyBackgroundTaskCompletion(e2) {
        try {
          await H.cursor.enqueueBackgroundWakeup({ conversationId: e2.composerId, id: e2.taskId, source: "shell", payload: e2 });
        } catch {
        }
      }
      async getLongRunningJobsEnabled() {
        return void 0 !== this.longRunningJobsEnabled ? this.longRunningJobsEnabled : (this.longRunningJobsEnabledPromise || (this.longRunningJobsEnabledPromise = Promise.resolve(H.cursor.checkFeatureGate("long_running_jobs")).then((e2) => (this.longRunningJobsEnabled = e2, e2), () => (this.longRunningJobsEnabled = false, false))), this.longRunningJobsEnabledPromise);
      }
      enqueueShellCompletion(e2, t2, r2) {
        if (this.completionPublishedShellIds.has(e2)) return;
        const n2 = this.trackedWork.get(e2);
        n2 && n2.composerId && (this.completionPublishedShellIds.add(e2), this.shellWorkNotificationQueue.queue(() => this.getLongRunningJobsEnabled().then((s2) => {
          if (s2) return this.notifyBackgroundTaskCompletion((function(e3) {
            const t3 = ol(e3.projectDir, e3.shellId);
            return { composerId: e3.composerId, taskId: String(e3.shellId), ...void 0 !== e3.toolCallId ? { toolCallId: e3.toolCallId } : {}, kind: "shell", status: e3.status, title: e3.title, ...e3.detail ? { detail: e3.detail } : {}, ...t3 ? { outputPath: t3 } : {}, reason: "task_finished" };
          })({ projectDir: this.projectDir, shellId: e2, composerId: n2.composerId, toolCallId: n2.toolCallId, title: n2.title, status: t2, ...r2 ? { detail: r2 } : {} }));
        })));
      }
      forwardShellOutputCompletion(e2, t2, r2, n2) {
        this.shellWorkNotificationQueue.queue(() => this.getLongRunningJobsEnabled().then((s2) => {
          if (!s2) return;
          const o2 = n2.outputPath ?? ol(this.projectDir, e2);
          return this.notifyBackgroundTaskCompletion({ composerId: t2, taskId: n2.taskId, ...void 0 !== r2 ? { toolCallId: r2 } : {}, kind: n2.kind, status: n2.status, title: n2.title, ...n2.detail ? { detail: n2.detail } : {}, ...o2 ? { outputPath: o2 } : {}, ...n2.reason ? { reason: n2.reason } : {} });
        }));
      }
      getShellIdFromCompletionTaskId(e2) {
        const t2 = e2.trim().split(":", 1)[0];
        if (!t2) return;
        const r2 = Number(t2);
        return Number.isInteger(r2) ? r2 : void 0;
      }
      cleanupShell(e2, t2) {
        const r2 = t2?.disposePty ?? true;
        this.terminals.delete(e2), r2 && (this.pseudoTerminals.get(e2)?.dispose(), this.pseudoTerminals.delete(e2)), this.abortFunctions.delete(e2), this.headlessShells.get(e2)?.(), this.headlessShells.delete(e2), this.disposeCloseListener(e2), this.trackedWork.has(e2) && (this.trackedWork.delete(e2), this.shellWorkNotificationQueue.queue(() => this.notifyShellCleared(e2)));
      }
      disposeCloseListener(e2) {
        const t2 = this.closeListeners.get(e2);
        t2 && (t2.dispose(), this.closeListeners.delete(e2));
      }
      async listBackgroundShellWork(e2) {
        const t2 = [...this.trackedWork.values()];
        return e2 ? t2.filter((t3) => t3.composerId === e2) : t2;
      }
      async killBackgroundShell(e2) {
        const t2 = Number(e2);
        if (!Number.isInteger(t2)) return false;
        const r2 = this.abortFunctions.get(t2);
        return !!r2 && (this.disposeCloseListener(t2), this.terminals.get(t2)?.dispose(), this.enqueueShellCompletion(t2, "aborted", "terminated_by_user"), r2(), this.cleanupShell(t2), true);
      }
      async showBackgroundShell(e2) {
        const t2 = Number(e2);
        if (!Number.isInteger(t2)) return false;
        const r2 = this.terminals.get(t2);
        if (r2) return r2.show(false), true;
        if (this.headlessShells.has(t2) && this.projectDir) {
          const e3 = ol(this.projectDir, t2);
          if (void 0 === e3) return false;
          const r3 = H.Uri.file(e3);
          return H.cursor.isGlass ? (await H.commands.executeCommand("glass.openFileInStableTab", { uri: { scheme: r3.scheme, path: r3.path } }), true) : (await H.commands.executeCommand("vscode.open", r3, { preview: false }), true);
        }
        return false;
      }
      extractCommandDescription(e2) {
        const t2 = e2.split("\n")[0];
        return (t2.length > 50 ? t2.substring(0, 47) + "..." : t2) || "Shell";
      }
      getTerminal(e2) {
        return this.terminals.get(e2);
      }
      dispose() {
        if (!this.isDisposed) {
          for (const e2 of this.abortFunctions.values()) e2();
          for (const e2 of this.terminals.values()) e2.dispose();
          for (const e2 of [...this.trackedWork.keys()]) this.cleanupShell(e2);
          for (const e2 of this.pseudoTerminals.values()) e2.dispose();
          this.terminals.clear(), this.pseudoTerminals.clear(), this.abortFunctions.clear(), this.closeListeners.clear(), this.trackedWork.clear(), super.dispose();
        }
      }
    }
    var ll = __webpack_require__(59903);
    class ul {
      constructor(e2, t2) {
        this.ignoreService = e2, this.provider = t2, this.worktreeGuardByRootsKey = /* @__PURE__ */ new Map();
      }
      setWorktreeGuardInfo(e2, t2) {
        const r2 = this.getRootsKey(e2);
        void 0 !== t2 ? this.worktreeGuardByRootsKey.set(r2, t2) : this.worktreeGuardByRootsKey.delete(r2);
      }
      getWorktreeGuardInfo(e2) {
        return this.worktreeGuardByRootsKey.get(this.getRootsKey(e2));
      }
      getRootsKey(e2) {
        return e2.slice().sort().join("|");
      }
      async executeIndexedGrep(e2, t2, r2) {
        const n2 = await this.provider();
        if (void 0 === n2) return;
        const s2 = this.getWorktreeGuardInfo(t2);
        if ((0, z.fl)({ targetPath: r2.path, workspacePaths: t2, mainWorktreePath: s2?.mainWorktreePath })) throw new Error(z.PS);
        const o2 = r2.outputMode ?? "content", i2 = { path: r2.path, context: r2.context, contextBefore: r2.contextBefore, contextAfter: r2.contextAfter, literal: false, caseInsensitive: r2.caseInsensitive, multiline: r2.multiline, sort: r2.sort, includes: void 0 !== r2.glob ? [r2.glob] : void 0, excludes: void 0 };
        try {
          return "content" === o2 ? await this.executeContentMode(n2, t2, r2.pattern, i2) : "files_with_matches" === o2 ? await this.executeFilesMode(n2, t2, r2.pattern, i2) : "count" === o2 ? await this.executeCountMode(n2, t2, r2.pattern, i2) : void 0;
        } catch (e3) {
          return;
        }
      }
      async executeContentMode(e2, t2, r2, n2) {
        const s2 = await e2.queryContent(t2, r2, n2);
        if (null === s2) return;
        const o2 = {};
        for (const [e3, t3] of Object.entries(s2)) {
          const r3 = [];
          let n3 = t3.totalLines, s3 = t3.totalMatchedLines;
          for (const o3 of t3.byFile) {
            const t4 = o3.matches ?? [], i3 = await (0, L.yeE)((0, z.o1)(o3.file, e3));
            if (null === i3 || await this.ignoreService.isIgnoredByAny(i3)) {
              n3 -= t4.length, s3 -= t4.filter((e4) => !e4.isContextLine).length;
              continue;
            }
            const a2 = new ll.uI({ file: o3.file, matches: t4.map((e4) => new ll.dx({ lineNumber: e4.lineNumber, content: e4.content, isContextLine: e4.isContextLine })) });
            r3.push(a2);
          }
          const i2 = new ll.Zp({ matches: r3, totalLines: n3, totalMatchedLines: s3, clientTruncated: t3.truncated });
          o2[e3] = new ll.vD({ result: { case: "content", value: i2 } });
        }
        return o2;
      }
      async executeFilesMode(e2, t2, r2, n2) {
        const s2 = await e2.queryContent(t2, r2, { ...n2, mode: "files_only" });
        if (null === s2) return;
        const o2 = {};
        for (const [e3, t3] of Object.entries(s2)) {
          const r3 = [];
          let n3 = 0;
          for (const s4 of t3.byFile) {
            const t4 = await (0, L.yeE)((0, z.o1)(s4.file, e3));
            null === t4 || await this.ignoreService.isIgnoredByAny(t4) ? n3++ : r3.push(s4.file);
          }
          const s3 = new ll.T7({ files: r3, totalFiles: t3.totalFiles - n3, clientTruncated: t3.truncated });
          o2[e3] = new ll.vD({ result: { case: "files", value: s3 } });
        }
        return o2;
      }
      async executeCountMode(e2, t2, r2, n2) {
        const s2 = await e2.queryContent(t2, r2, { ...n2, mode: "count" });
        if (null === s2) return;
        const o2 = {};
        for (const [e3, t3] of Object.entries(s2)) {
          const r3 = [];
          let n3 = 0, s3 = 0;
          for (const o3 of t3.byFile) {
            const t4 = o3.count ?? 0, i3 = await (0, L.yeE)((0, z.o1)(o3.file, e3));
            null === i3 || await this.ignoreService.isIgnoredByAny(i3) ? s3++ : (r3.push(new ll.sS({ file: o3.file, count: t4 })), n3 += t4);
          }
          const i2 = new ll.xA({ counts: r3, totalFiles: t3.totalFiles - s3, totalMatches: n3, clientTruncated: t3.truncated });
          o2[e3] = new ll.vD({ result: { case: "count", value: i2 } });
        }
        return o2;
      }
      async getTrackedState(e2) {
        const t2 = this.provider();
        if (void 0 !== t2) try {
          const r2 = await t2.getTrackedState(e2);
          if (null === r2) return;
          const n2 = {};
          for (const [e3, t3] of Object.entries(r2)) n2[e3] = { gitStatus: t3.gitStatus, gitBranchName: t3.gitBranchName };
          return n2;
        } catch {
          return;
        }
      }
    }
    var dl = __webpack_require__(99286), pl = __webpack_require__(34175);
    function ml(e2, t2) {
      const r2 = [], n2 = /* @__PURE__ */ new Set();
      for (const s2 of t2) {
        n2.add(s2.serverIdentifier);
        const t3 = e2.get(s2.serverIdentifier);
        void 0 !== t3 && t3 === s2.snapshotGeneration || r2.push(s2), e2.set(s2.serverIdentifier, s2.snapshotGeneration);
      }
      for (const t3 of Array.from(e2.keys())) n2.has(t3) || e2.delete(t3);
      return r2;
    }
    var hl = (e2, t2) => (t2 = Symbol[e2]) ? t2 : /* @__PURE__ */ Symbol.for("Symbol." + e2), fl = (e2) => {
      throw TypeError(e2);
    }, gl = (e2, t2, r2) => {
      var n2, s2;
      null != t2 ? ("object" != typeof t2 && "function" != typeof t2 && fl("Object expected"), r2 && (n2 = t2[hl("asyncDispose")]), void 0 === n2 && (n2 = t2[hl("dispose")], r2 && (s2 = n2)), "function" != typeof n2 && fl("Object not disposable"), s2 && (n2 = function() {
        try {
          s2.call(this);
        } catch (e3) {
          return Promise.reject(e3);
        }
      }), e2.push([r2, n2, t2])) : r2 && e2.push([r2]);
      return t2;
    }, yl = (e2, t2, r2) => {
      var n2 = "function" == typeof SuppressedError ? SuppressedError : function(e3, t3, r3, n3) {
        return (n3 = Error(r3)).name = "SuppressedError", n3.error = e3, n3.suppressed = t3, n3;
      }, s2 = (e3) => t2 = r2 ? new n2(e3, t2, "An error was suppressed during disposal") : (r2 = true, e3), o2 = (n3) => {
        for (; n3 = e2.pop(); ) try {
          var i2 = n3[1] && n3[1].call(n3[2]);
          if (n3[0]) return Promise.resolve(i2).then(o2, (e3) => (s2(e3), o2()));
        } catch (e3) {
          s2(e3);
        }
        if (r2) throw t2;
      };
      return o2();
    };
    const wl = H.env.remoteName ? `lease_connection:${H.env.remoteName}` : "lease_connection:local";
    let vl = "unknown";
    function _l(e2, t2, r2 = "distribution", n2) {
      try {
        const s2 = n2?.some((e3) => e3.startsWith("mcp_version:")), o2 = [wl, ...s2 ? [] : ["mcp_version:snapshots"], ...n2 ?? []];
        "distribution" === r2 ? H.cursor.metricsDistribution({ stat: e2, value: t2, tags: o2 }) : H.cursor.metricsIncrement({ stat: e2, value: t2, tags: o2 });
      } catch {
      }
    }
    function bl(e2, t2, r2, n2) {
      return (0, h.uj)((r2 ?? (0, f.q6)()).withName(e2), async (r3, s2) => {
        const o2 = Date.now();
        s2.setAttribute("mcp.op.name", e2), s2.setAttribute("mcp.lease.type", vl), s2.setAttribute("mcp.lease.connection", wl);
        try {
          const r4 = await Promise.resolve(t2()), i2 = Date.now() - o2;
          return s2.setAttribute("mcp.op.duration_ms", String(i2)), s2.setAttribute("mcp.op.outcome", "success"), _l("mcp.ipc.duration_ms", i2, "distribution", [`name:${e2}`, "outcome:success", ...n2 ?? []]), _l("mcp.ipc.count", 1, "increment", [`name:${e2}`, "outcome:success", ...n2 ?? []]), r4;
        } catch (t3) {
          const r4 = Date.now() - o2;
          throw s2.setAttribute("mcp.op.duration_ms", String(r4)), s2.setAttribute("mcp.op.outcome", "error"), _l("mcp.ipc.duration_ms", r4, "distribution", [`name:${e2}`, "outcome:error", ...n2 ?? []]), _l("mcp.ipc.count", 1, "increment", [`name:${e2}`, "outcome:error", ...n2 ?? []]), t3;
        }
      });
    }
    const Sl = ["mcp_version:vscode_lease"];
    function kl(e2) {
      return void 0 === e2 ? { serverIdentifiers: void 0, reason: H.cursor.McpLeaseChangeReason.Unknown } : { serverIdentifiers: e2.serverIdentifiers ? [...e2.serverIdentifiers] : void 0, reason: e2.reason };
    }
    class xl {
      constructor() {
        this.changeListeners = /* @__PURE__ */ new Set(), this.mainThreadLeaseRegistration = H.cursor.registerMcpLeaseChangeListener(), this.mcpLeasePromise = (async () => {
          const e2 = H.extensions.getExtension("anysphere.cursor-mcp");
          if (!e2) throw new Error("cursor-mcp extension is not installed or not available");
          e2.isActive || await e2.activate();
          const t2 = e2.exports;
          if (!t2) throw new Error("cursor-mcp extension API is not available");
          const r2 = t2.getMcpLease();
          return this.leaseChangeDisposable = r2.onDidChange((e3) => {
            this.fireDidChange(e3);
          }), r2;
        })();
      }
      onDidChange(e2) {
        return this.changeListeners.add(e2), { dispose: () => {
          this.changeListeners.delete(e2);
        } };
      }
      fireDidChange(e2) {
        for (const t2 of this.changeListeners) try {
          t2(e2);
        } catch (e3) {
          console.error("Error in MCP change listener:", e3);
        }
      }
      async getMcpLease() {
        return this.mcpLeasePromise;
      }
      async getClients(e2) {
        return bl("vscode_lease.get_clients", async () => (await this.getMcpLease()).getClients(e2), e2, Sl);
      }
      async getClient(e2, t2) {
        return bl("vscode_lease.get_client", async () => (await this.getMcpLease()).getClient(e2, t2), e2, Sl);
      }
      async getInstructions(e2) {
        return bl("vscode_lease.get_instructions", async () => (await this.getMcpLease()).getInstructions(e2), e2, Sl);
      }
      async getTools(e2) {
        return bl("vscode_lease.get_tools", async () => (await this.getMcpLease()).getTools(e2), e2, Sl);
      }
      async getToolsForServers(e2, t2) {
        return bl("vscode_lease.get_tools_for_servers", async () => {
          const r2 = await this.getMcpLease();
          if ("getToolsForServers" in r2 && "function" == typeof r2.getToolsForServers) return r2.getToolsForServers(e2, t2);
          const n2 = new Set(t2);
          return (await r2.getTools(e2)).filter((e3) => n2.has(e3.clientKey));
        }, e2, Sl);
      }
      async getToolSet(e2) {
        return bl("vscode_lease.get_tool_set", async () => (await this.getMcpLease()).getToolSet(e2), e2, Sl);
      }
      dispose() {
        this.leaseChangeDisposable && (this.leaseChangeDisposable.dispose(), this.leaseChangeDisposable = void 0), this.mainThreadLeaseRegistration.dispose(), this.changeListeners.clear();
      }
    }
    function El(e2) {
      if (e2) return e2.command ? { command: e2.command, args: e2.args } : e2.url ? { url: e2.url } : void 0;
    }
    class Il {
      constructor(e2, t2, r2) {
        this.tools = e2, this.ctx = t2, this.extraMetricTags = r2 ?? [];
      }
      async execute(e2, t2, r2, n2) {
        const s2 = this.tools.find((t3) => t3.name === e2);
        if (!s2) throw new dl.U$(e2, this.tools.map((e3) => e3.name));
        return bl("workbench_toolset.execute", async () => {
          const e3 = n2?.createProvider(s2.providerIdentifier, s2.toolName, r2), o2 = e3 ? async (t3) => await e3.elicit({ message: t3.message, requestedSchema: t3.requestedSchema }) : void 0, { serializableContext: i2, cancellationTokenSource: a2, dispose: c2 } = Uo(this.ctx);
          try {
            const e4 = await H.cursor.callMcpLeaseTool(s2.clientKey, s2.toolName, t2, r2, i2, a2.token, o2, i2.composerId);
            return { content: e4.content, isError: e4.isError, structuredContent: e4.structuredContent };
          } finally {
            c2();
          }
        }, this.ctx, this.extraMetricTags);
      }
      getTools() {
        return this.tools;
      }
    }
    class Tl {
      constructor(e2, t2) {
        this.serverIdentifier = e2.serverIdentifier, this.serverName = e2.serverName, this.snapshot = e2, this.config = El(t2);
      }
      async getTools(e2) {
        return this.snapshot.tools.map((e3) => ({ name: e3.name, description: e3.description, inputSchema: e3.inputSchema, outputSchema: e3.outputSchema, annotations: e3.annotations }));
      }
      async callTool(e2, t2, r2, n2, s2) {
        return bl("snapshot_client.call_tool", async () => {
          const { serializableContext: o2, cancellationTokenSource: i2, dispose: a2 } = Uo(e2);
          try {
            const e3 = s2 ? async (e4) => await s2.elicit({ message: e4.message, requestedSchema: e4.requestedSchema }) : void 0, a3 = await H.cursor.callMcpLeaseTool(this.serverIdentifier, t2, r2, n2, o2, i2.token, e3, o2.composerId);
            return { content: a3.content, isError: a3.isError, structuredContent: a3.structuredContent };
          } finally {
            a2();
          }
        }, e2, ["mcp_version:snapshots"]);
      }
      async getInstructions(e2) {
        return this.snapshot.instructions ?? void 0;
      }
      async getState(e2) {
        switch (this.snapshot.status) {
          case "connected":
          case "degraded":
            return { kind: "ready" };
          case "needsAuth":
            return { kind: "requires_authentication", url: this.snapshot.statusDetail ?? "", callback: async () => {
            } };
          case "error":
            return { kind: "error", message: this.snapshot.statusDetail };
          default:
            return { kind: "loading" };
        }
      }
      async listResources(e2) {
        return { resources: this.snapshot.resources };
      }
      async readResource(e2, t2) {
        return bl("snapshot_client.read_resource", async () => {
          const { serializableContext: r2, cancellationTokenSource: n2, dispose: s2 } = Uo(e2);
          try {
            return await H.cursor.readMcpLeaseResource(this.serverIdentifier, t2.uri, r2, n2.token);
          } finally {
            s2();
          }
        }, e2, ["mcp_version:snapshots"]);
      }
      async listPrompts(e2) {
        return this.snapshot.prompts;
      }
      async getPrompt(e2, t2, r2) {
        return bl("snapshot_client.get_prompt", async () => {
          const { serializableContext: n2, cancellationTokenSource: s2, dispose: o2 } = Uo(e2);
          try {
            return await H.cursor.getMcpLeasePrompt(this.serverIdentifier, t2, r2, n2, s2.token);
          } finally {
            o2();
          }
        }, e2, ["mcp_version:snapshots"]);
      }
    }
    class Cl {
      constructor() {
        this.changeListeners = /* @__PURE__ */ new Set(), this._mergedNotifyFlush = false, this._disposed = false, this._snapshotProvider = new Pl(), this.leaseChangeDisposable = H.cursor.registerMcpLeaseChangeListener();
        const e2 = H.cursor.onDidChangeMcpLease((e3) => {
          this.serverConfigsPromise = void 0, this.scheduleMergedNotify(kl(e3));
        }), t2 = H.cursor.onDidChangeMcpSnapshots((e3) => {
          this.serverConfigsPromise = void 0, this.scheduleMergedNotify({ serverIdentifiers: e3 ? [...e3] : void 0, reason: H.cursor.McpLeaseChangeReason.Snapshots });
        }), r2 = this.leaseChangeDisposable.dispose.bind(this.leaseChangeDisposable);
        this.leaseChangeDisposable = { dispose: () => {
          r2(), e2.dispose(), t2.dispose();
        } };
      }
      get snapshotProvider() {
        return this._snapshotProvider;
      }
      scheduleMergedNotify(t2) {
        this._disposed || (this._mergedNotifyPending = (0, e.sfj)(this._mergedNotifyPending, t2), this._mergedNotifyFlush || (this._mergedNotifyFlush = true, queueMicrotask(() => {
          if (this._mergedNotifyFlush = false, this._disposed) return;
          const e2 = this._mergedNotifyPending;
          this._mergedNotifyPending = void 0, void 0 !== e2 && this.fireDidChange(e2);
        })));
      }
      onDidChange(e2) {
        return this.changeListeners.add(e2), { dispose: () => {
          this.changeListeners.delete(e2);
        } };
      }
      fireDidChange(e2) {
        for (const t2 of this.changeListeners) try {
          t2(e2);
        } catch (e3) {
          console.error("Error in MCP snapshot change listener:", e3);
        }
      }
      getServerConfigs(e2) {
        if (!this.serverConfigsPromise) {
          let t2;
          t2 = (async () => {
            const r2 = /* @__PURE__ */ new Map();
            try {
              const t3 = await H.cursor.getMcpLeaseServers(e2);
              for (const e3 of t3) e3.config && r2.set(e3.identifier, e3.config);
            } catch (e3) {
              _l("mcp.snapshot.server_config_resolve_error", 1, "increment"), Ro({ subkey: "agent_exec", message: "Failed to resolve MCP server configs for hook payloads", metadata: { event: "mcp_snapshot_server_config_resolve_error", error: e3 instanceof Error ? e3.message : String(e3) } }), this.serverConfigsPromise === t2 && (this.serverConfigsPromise = void 0);
            }
            return r2;
          })(), this.serverConfigsPromise = t2;
        }
        return this.serverConfigsPromise;
      }
      async getClients(e2) {
        return bl("snapshot_lease.get_clients", async () => {
          const t2 = Uo(e2);
          try {
            const [e3, r2] = await Promise.all([H.cursor.getMcpSnapshots(t2.serializableContext), this.getServerConfigs(t2.serializableContext)]), n2 = {};
            for (const t3 of e3) n2[t3.serverIdentifier] = new Tl(t3, r2.get(t3.serverIdentifier));
            return n2;
          } finally {
            t2.dispose();
          }
        }, e2, ["mcp_version:snapshots"]);
      }
      async getClient(e2, t2) {
        return bl("snapshot_lease.get_client", async () => {
          const r2 = Uo(e2);
          try {
            const [e3, n2] = await Promise.all([H.cursor.getMcpSnapshot(t2, r2.serializableContext), this.getServerConfigs(r2.serializableContext)]);
            let s2 = e3;
            if (!s2) {
              s2 = (await H.cursor.getMcpSnapshots(r2.serializableContext)).find((e4) => e4.serverName === t2);
            }
            return s2 ? new Tl(s2, n2.get(s2.serverIdentifier)) : void 0;
          } finally {
            r2.dispose();
          }
        }, e2, ["mcp_version:snapshots"]);
      }
      async getInstructions(e2) {
        return bl("snapshot_lease.get_instructions", async () => {
          const { serializableContext: t2, dispose: r2 } = Uo(e2);
          try {
            return (await H.cursor.getMcpSnapshots(t2)).filter((e3) => void 0 !== e3.instructions && e3.instructions.trim().length > 0).map((e3) => new pl.I0({ serverName: e3.serverName, instructions: e3.instructions.trim(), serverIdentifier: e3.serverIdentifier }));
          } finally {
            r2();
          }
        }, e2, ["mcp_version:snapshots"]);
      }
      async getTools(e2) {
        return bl("snapshot_lease.get_tools", async () => {
          const { serializableContext: t2, dispose: r2 } = Uo(e2);
          try {
            const e3 = await H.cursor.getMcpSnapshotTools(t2), r3 = [];
            for (const t3 of e3) for (const e4 of t3.tools) r3.push({ name: `${t3.serverIdentifier}-${e4.name}`, description: e4.description, inputSchema: e4.inputSchema, outputSchema: e4.outputSchema, clientKey: t3.serverIdentifier, providerIdentifier: t3.serverName, plugin: t3.plugin, marketplace: t3.marketplace, pluginId: t3.pluginId, marketplaceId: t3.marketplaceId, toolName: e4.name, ..."internal" === t3.source ? { source: "internal" } : {} });
            return r3;
          } finally {
            r2();
          }
        }, e2, ["mcp_version:snapshots"]);
      }
      async getToolsForServers(e2, t2) {
        const r2 = new Set(t2);
        return (await this.getTools(e2)).filter((e3) => r2.has(e3.clientKey));
      }
      async getToolSet(e2) {
        const t2 = await this.getTools(e2);
        return new Il(t2, e2, ["mcp_version:snapshots"]);
      }
      dispose() {
        this._disposed || (this._disposed = true, this.serverConfigsPromise = void 0, this.leaseChangeDisposable && (this.leaseChangeDisposable.dispose(), this.leaseChangeDisposable = void 0), this.changeListeners.clear());
      }
    }
    class Pl {
      constructor() {
        this._knownGenerations = /* @__PURE__ */ new Map();
      }
      async getSnapshot(e2, t2) {
        return bl("snapshot_provider.get_snapshot", async () => {
          const r2 = Uo(e2);
          try {
            const e3 = await H.cursor.getMcpSnapshot(t2, r2.serializableContext);
            return e3 ? this._knownGenerations.set(e3.serverIdentifier, e3.snapshotGeneration) : this._knownGenerations.delete(t2), e3 ? Al(e3) : void 0;
          } finally {
            r2.dispose();
          }
        }, e2, ["mcp_version:snapshots"]);
      }
      async getAllSnapshots(e2) {
        return bl("snapshot_provider.get_all_snapshots", async () => {
          const t2 = Uo(e2);
          try {
            const e3 = await H.cursor.getMcpSnapshots(t2.serializableContext);
            return ml(this._knownGenerations, e3), e3.map(Al);
          } finally {
            t2.dispose();
          }
        }, e2, ["mcp_version:snapshots"]);
      }
      onDidChange(e2) {
        return H.cursor.onDidChangeMcpSnapshots(async (t2) => {
          const r2 = Date.now(), n2 = await H.cursor.getMcpSnapshots(), s2 = Date.now() - r2, o2 = ml(this._knownGenerations, n2);
          _l("mcp.ipc.duration_ms", s2, "distribution", ["name:snapshot_provider.notify_pull", "outcome:success", "mcp_version:snapshots"]), _l("mcp.ipc.count", 1, "increment", ["name:snapshot_provider.notify_pull", "outcome:success", "mcp_version:snapshots"]), _l("mcp.snapshot.notify_pull_changed_count", o2.length, "distribution", ["mcp_version:snapshots"]);
          for (const t3 of o2) e2(Al(t3));
        });
      }
    }
    function Al(e2) {
      return { serverIdentifier: e2.serverIdentifier, serverName: e2.serverName, plugin: e2.plugin, marketplace: e2.marketplace, pluginId: e2.pluginId, marketplaceId: e2.marketplaceId, status: e2.status, statusDetail: e2.statusDetail, tools: e2.tools.map((e3) => ({ name: e3.name, description: e3.description, inputSchema: e3.inputSchema, outputSchema: e3.outputSchema, annotations: e3.annotations })), resources: e2.resources, prompts: e2.prompts, instructions: e2.instructions, snapshotGeneration: e2.snapshotGeneration };
    }
    function Rl(e2, t2, r2) {
      Ro({ subkey: "agent_exec", message: "MCP agent-exec lease selected", metadata: { event: "mcp_agent_exec_lease_selected", lease_type: e2, lease_reason: t2, lease_connection: wl, ...r2 } });
    }
    function Ml(e2, t2) {
      return vl = "snapshot", _l("mcp.agent_exec.lease_selected", 1, "increment", ["lease_type:snapshot", `reason:${e2}`]), Rl("snapshot", e2, t2), new Cl();
    }
    async function Jl(e2) {
      var t2 = [];
      try {
        const r3 = gl(t2, (0, h.VI)(e2.withName("getVscodeMcpLease"))).span;
        if (void 0 === H.env.remoteName) return r3.setAttribute("mcp.lease.type", "snapshot"), r3.setAttribute("mcp.lease.reason", "local"), Ml("local");
        try {
          const e3 = await (async function() {
            const e4 = H.extensions.getExtension("anysphere.cursor-mcp");
            if (!e4) return;
            return e4.isActive || await e4.activate(), e4.exports ? new xl() : void 0;
          })();
          if (e3) return vl = "vscode", r3.setAttribute("mcp.lease.type", "vscode"), _l("mcp.agent_exec.lease_selected", 1, "increment", ["lease_type:vscode"]), Rl("vscode", "vscode_lease_available", { shared_process_gate_enabled: false }), e3;
        } catch {
        }
        return r3.setAttribute("mcp.lease.type", "snapshot"), r3.setAttribute("mcp.lease.reason", "vscode_lease_unavailable"), Ml("vscode_lease_unavailable");
      } catch (e3) {
        var r2 = e3, n2 = true;
      } finally {
        yl(t2, r2, n2);
      }
    }
    const Ol = /* @__PURE__ */ Symbol.for("anysphere.cursor.canvasPeerAgentStoreFilesDirs");
    function Bl() {
      return globalThis[Ol];
    }
    const Dl = "canvas.getHostThemeState";
    class ql {
      constructor() {
        this._providers = /* @__PURE__ */ new Map(), this._providerListeners = /* @__PURE__ */ new Map(), this._changeListeners = [], this._disposed = false;
      }
      onDidChangeState(e2) {
        return this._changeListeners.push(e2), { dispose: () => {
          const t2 = this._changeListeners.indexOf(e2);
          t2 >= 0 && this._changeListeners.splice(t2, 1);
        } };
      }
      registerStateProvider(e2) {
        if (this._disposed) return e2.dispose(), { dispose() {
        } };
        const t2 = this._providers.get(e2.channel);
        t2 && (this._providerListeners.get(e2.channel)?.dispose(), t2.dispose()), this._providers.set(e2.channel, e2);
        const r2 = e2.onDidChange(() => {
          this._emitProvider(e2);
        });
        return this._providerListeners.set(e2.channel, r2), this._emitProvider(e2), { dispose: () => {
          this._providers.get(e2.channel) === e2 && (this._providerListeners.get(e2.channel)?.dispose(), this._providerListeners.delete(e2.channel), this._providers.delete(e2.channel), e2.dispose());
        } };
      }
      getAllState() {
        const e2 = [];
        for (const t2 of this._providers.values()) {
          const r2 = Nl(t2.getState());
          void 0 !== r2 && e2.push({ channel: t2.channel, payload: r2 });
        }
        return e2;
      }
      dispose() {
        if (!this._disposed) {
          this._disposed = true;
          for (const e2 of this._providerListeners.values()) e2.dispose();
          this._providerListeners.clear();
          for (const e2 of this._providers.values()) e2.dispose();
          this._providers.clear(), this._changeListeners.length = 0;
        }
      }
      _emitProvider(e2) {
        const t2 = Nl(e2.getState());
        if (void 0 !== t2) for (const r2 of this._changeListeners) r2(e2.channel, t2);
      }
    }
    function Nl(e2) {
      try {
        return JSON.stringify(e2);
      } catch {
        return;
      }
    }
    const Fl = (0, g.h)("canvas-server-provider");
    function Ul(e2) {
      H.commands.executeCommand("canvas.handleCanvasError", e2.canvasId, e2.error, e2.errorKind);
    }
    function Ll(e2) {
      H.commands.executeCommand("canvas.handleCanvasErrorCleared", e2);
    }
    const $l = 1e4, jl = 100;
    function Gl(e2) {
      return "function" == typeof e2?.then;
    }
    function zl(e2, t2) {
      let r2;
      const n2 = new Promise((e3) => {
        r2 = setTimeout(() => e3(void 0), Math.max(0, t2));
      });
      return Promise.race([Promise.resolve(e2), n2]).finally(() => {
        void 0 !== r2 && clearTimeout(r2);
      });
    }
    function Wl(e2, t2) {
      const r2 = "string" == typeof e2 ? { runtimeDir: e2, logContext: t2 } : e2, { runtimeDir: n2 } = r2, s2 = new Ac({ runtimeDir: n2, logContext: r2.logContext, nodeExecPath: r2.nodeExecPath }), o2 = new ql(), i2 = o2.registerStateProvider((function() {
        const e3 = (0, f.q6)(), t3 = [];
        let r3 = Hl();
        const n3 = () => {
          for (const r4 of t3) try {
            r4();
          } catch (t4) {
            Fl.warn(e3, "Canvas theme listener threw during broadcast", { errorType: t4 instanceof Error ? t4.name : typeof t4 });
          }
        };
        let s3 = 0;
        const o3 = async () => {
          const e4 = ++s3;
          let t4;
          try {
            const e5 = await H.commands.executeCommand(Dl);
            e5 && "string" == typeof e5.kind && (t4 = { kind: e5.kind, ...e5.primary ? { primary: e5.primary } : {}, ...e5.editorBackground ? { editorBackground: e5.editorBackground } : {}, ...e5.editorForeground ? { editorForeground: e5.editorForeground } : {} });
          } catch {
            t4 = void 0;
          }
          if (e4 === s3) {
            if (void 0 === t4) {
              const e5 = Hl().kind;
              return void (e5 !== r3.kind && (r3 = { ...r3, kind: e5 }, n3()));
            }
            r3 = t4, n3();
          }
        }, i3 = H.window.onDidChangeActiveColorTheme(() => {
          o3();
        });
        return o3(), { channel: "theme", getState: () => r3, onDidChange: (e4) => (t3.push(e4), { dispose() {
          const r4 = t3.indexOf(e4);
          r4 >= 0 && t3.splice(r4, 1);
        } }), dispose() {
          i3.dispose(), t3.length = 0;
        } };
      })());
      s2.onAction((e3, t3) => (function(e4, t4, r3, n3) {
        switch (Fl.info(n3, "Canvas action dispatched", { canvasId: t4, actionType: r3.type }), r3.type) {
          case "openAgent":
            H.commands.executeCommand("canvas.openAgentByConversationId", r3.agentId);
            break;
          case "newComposerChat": {
            const s3 = e4.getRegisteredCanvasPath(t4);
            if (!s3) {
              Fl.warn(n3, "newComposerChat: unknown canvasId", { canvasId: t4 });
              break;
            }
            H.commands.executeCommand("canvas.newComposerChat", s3, r3.userPrompt);
            break;
          }
          case "openFile": {
            const e5 = [r3.path];
            void 0 !== r3.selection && e5.push(r3.selection), H.commands.executeCommand("canvas.openFileInWorkbench", ...e5);
            break;
          }
        }
      })(s2, e3, t3, a2)), s2.onError(Ul), s2.onErrorCleared(Ll);
      const a2 = r2.logContext ?? (0, f.q6)(), c2 = /* @__PURE__ */ new Map(), l2 = (e3) => {
        const t3 = c2.get(e3);
        void 0 !== t3 && (c2.delete(e3), t3.close());
      }, u2 = o2.onDidChangeState((e3, t3) => {
        s2.pushStateAll({ channel: e3, payload: t3 });
      });
      return void 0 !== r2.cloudCanvasCacheDir && (async function(e3) {
        let t3;
        try {
          t3 = await (0, W.readdir)(e3);
        } catch {
          return;
        }
        const r3 = async (e4, t4) => {
          try {
            const r4 = await (0, W.lstat)(e4);
            return r4.mtimeMs > t4 ? 0 : (await (0, W.unlink)(e4), r4.size);
          } catch {
            return 0;
          }
        }, n3 = [];
        for (const r4 of t3) {
          const t4 = v.join(e3, r4);
          try {
            const e4 = await (0, W.lstat)(t4);
            e4.isFile() && !e4.isSymbolicLink() && n3.push({ path: t4, mtimeMs: e4.mtimeMs, size: e4.size });
          } catch {
          }
        }
        const s3 = Date.now(), o3 = [];
        for (const e4 of n3) s3 - e4.mtimeMs > Hc ? await r3(e4.path, e4.mtimeMs) : o3.push(e4);
        o3.sort((e4, t4) => e4.mtimeMs - t4.mtimeMs);
        let i3 = o3.reduce((e4, t4) => e4 + t4.size, 0);
        for (const e4 of o3) {
          if (i3 <= Kc) break;
          i3 -= await r3(e4.path, e4.mtimeMs);
        }
      })(r2.cloudCanvasCacheDir), { async registerCanvas(e3) {
        const t3 = (t4) => {
          throw Fl.warn(a2, "Rejected canvas registration for invalid path", { kind: e3.kind, reason: t4 }), new Error(`Invalid Canvas registration path: ${t4}`);
        }, i3 = "bundle" === e3.kind && (function(e4) {
          const t4 = v.resolve(e4);
          return void 0 !== Ic({ path: t4, replicaFilesDirs: [v.dirname(v.dirname(v.dirname(t4)))] });
        })(e3.path) ? await (async function(e4) {
          if (void 0 === e4) return [];
          const t4 = Date.now() + $l;
          for (; ; ) {
            const r3 = t4 - Date.now(), n3 = Math.min(jl, r3), s3 = e4(), o3 = Gl(s3) ? await zl(s3, n3) : s3;
            if (void 0 !== o3 && o3.length > 0) return o3;
            if (Date.now() >= t4) return o3 ?? [];
            void 0 !== o3 && await new Promise((e5) => setTimeout(e5, n3));
          }
        })(r2.getReplicaAgentStoreFilesDirs) : [];
        let u3;
        if ("bundle" === e3.kind && (u3 = Ic({ path: e3.path, replicaFilesDirs: i3 }), void 0 !== u3)) {
          void 0 === await Tc(u3) && t3("realpath-not-replica-canvas-store");
          await (async function(e4) {
            const t4 = await (0, W.lstat)(e4.layout.bundlePath).catch(() => {
            }), r3 = true === t4?.isFile() && !t4.isSymbolicLink();
            let n3;
            try {
              const t5 = await (0, W.lstat)(e4.layout.sourcePath);
              if (!t5.isFile() || t5.isSymbolicLink()) return r3;
              n3 = await (0, W.readFile)(e4.layout.sourcePath, "utf8");
            } catch {
              return r3;
            }
            if (r3) {
              const t5 = await el(e4.layout.canvasDir);
              if (t5?.sourceSha256 === Xc(n3)) return true;
            }
            try {
              return await tl(e4), true;
            } catch {
              return r3;
            }
          })({ layout: u3, runtimeDir: n2 }) || t3("replica-source-missing");
        }
        const d2 = "bundle" === e3.kind ? await (async function(e4) {
          const { path: t4, peerAgentStoreFilesDirs: r3, replicaAgentStoreFilesDirs: n3, cloudCanvasCacheDir: s3 } = e4, o3 = v.basename(t4);
          if (!_c(t4) || !Ma(o3) && o3 !== Ea.Rj) return { status: "invalid", reason: "path-not-canvas-bundle" };
          const i4 = await xc(t4);
          if ("status" in i4) return i4;
          const a3 = { status: "valid", stats: i4.stats, realPath: i4.realPath };
          if (void 0 !== s3) {
            const e5 = await Ec([s3], s3);
            if (void 0 !== e5 && kc(v.relative(e5, i4.realPath), Ma)) return a3;
          }
          const c3 = Ic({ path: t4, replicaFilesDirs: n3 });
          if (void 0 !== c3) {
            const e5 = await Tc(c3), t5 = void 0 === e5 ? void 0 : v.relative(e5, i4.realPath).split(v.sep);
            return void 0 === t5 || 2 !== t5.length || t5[0]?.toLowerCase() !== c3.canvasId || t5[1] !== o3 ? { status: "invalid", reason: "realpath-not-replica-canvas-store" } : a3;
          }
          for (const e5 of r3) {
            const t5 = v.join(e5, "artifacts"), r4 = v.join(t5, ...Ia.split("/")), n4 = await Ec([e5, t5, r4], r4);
            if (void 0 !== n4 && kc(v.relative(n4, i4.realPath), Ma)) return a3;
          }
          return { status: "invalid", reason: "realpath-not-peer-canvas-store" };
        })({ path: e3.path, peerAgentStoreFilesDirs: r2.getPeerAgentStoreFilesDirs?.() ?? [], replicaAgentStoreFilesDirs: i3, cloudCanvasCacheDir: r2.cloudCanvasCacheDir }) : await (async () => {
          const t4 = await Cc(e3.path);
          return "valid" === t4.status ? t4 : (async function(e4) {
            const { path: t5, cloudCanvasCacheDir: r3 } = e4;
            if (void 0 === r3 || !_c(t5) || !Sc(v.basename(t5))) return { status: "invalid", reason: "path-not-managed-canvas" };
            const n3 = await xc(t5);
            if ("status" in n3) return n3;
            const s3 = await Ec([r3], r3);
            return void 0 !== s3 && kc(v.relative(s3, n3.realPath), Sc) ? { status: "valid", stats: n3.stats, realPath: n3.realPath } : { status: "invalid", reason: "path-not-managed-canvas" };
          })({ path: e3.path, cloudCanvasCacheDir: r2.cloudCanvasCacheDir });
        })();
        "invalid" === d2.status && t3(d2.reason);
        const p2 = { kind: e3.kind, path: d2.realPath }, m2 = await s2.registerCanvas(p2).catch((e4) => {
          throw Fl.error(a2, "Failed to start canvas server", { errorType: e4 instanceof Error ? e4.name : typeof e4 }), e4;
        });
        for (const e4 of o2.getAllState()) s2.pushState({ canvasId: m2.canvasId, channel: e4.channel, payload: e4.payload });
        if (l2(m2.canvasId), void 0 !== u3) try {
          c2.set(m2.canvasId, (function(e4) {
            let t4;
            const r3 = v.basename(e4.layout.sourcePath), n3 = (0, rr.watch)(e4.layout.canvasDir, { persistent: false }, (n4, s3) => {
              s3 === r3 && (clearTimeout(t4), t4 = setTimeout(() => {
                tl({ layout: e4.layout, runtimeDir: e4.runtimeDir }).catch((t5) => {
                  e4.onError?.(t5);
                });
              }, Qc));
            });
            return n3.on("error", (t5) => {
              e4.onError?.(t5);
            }), { close() {
              clearTimeout(t4), t4 = void 0, n3.close();
            } };
          })({ layout: u3, runtimeDir: n2, onError: (e4) => {
            Fl.warn(a2, "Replica canvas persist failed", { errorType: e4 instanceof Error ? e4.name : typeof e4 });
          } }));
        } catch (e4) {
          Fl.warn(a2, "Replica canvas watch unavailable", { errorType: e4 instanceof Error ? e4.name : typeof e4 });
        }
        return m2;
      }, getCanvasUrl: async (e3, t3) => s2.getCanvasUrl({ canvasId: e3, preview: t3 }), async destroyCanvas(e3) {
        l2(e3), await s2.destroyCanvas({ canvasId: e3 });
      }, async stageCloudCanvasBundle(e3) {
        const t3 = r2.cloudCanvasCacheDir;
        if (void 0 === t3) throw new Error("Cloud canvas cache is not configured");
        return (async function(e4) {
          const { bundleGzip: t4, cacheDir: r3 } = e4;
          if (t4.byteLength > Qa) throw new Error("Cloud canvas bundle exceeds the compressed size limit");
          if (!(0, Ea.IR)(t4)) throw new Error("Cloud canvas bundle is not gzip data");
          const n3 = (0, tr.createHash)("sha256").update(t4).digest("hex"), s3 = v.join(r3, `${n3}.canvas.bundle.gz`), o3 = v.join(r3, `${n3}.canvas.tsx`);
          try {
            const e5 = /* @__PURE__ */ new Date();
            await (0, W.utimes)(s3, e5, e5);
            try {
              return await (0, W.utimes)(o3, e5, e5), { bundlePath: s3, sourcePath: o3 };
            } catch (e6) {
              if ("ENOENT" !== e6.code) throw e6;
              return Wc({ bundleGzip: t4, bundlePath: s3, sourcePath: o3 });
            }
          } catch (e5) {
            if ("ENOENT" !== e5.code) throw e5;
          }
          return await (0, W.mkdir)(r3, { recursive: true }), await zc({ filePath: s3, contents: t4 }), Wc({ bundleGzip: t4, bundlePath: s3, sourcePath: o3 });
        })({ bundleGzip: e3, cacheDir: t3 });
      }, async shareCanvas(e3, t3, r3) {
        const n3 = () => {
          if (r3?.isCancellationRequested) throw new H.CancellationError();
        };
        n3();
        const o3 = await Cc(e3);
        if ("invalid" === o3.status) return Fl.warn(a2, "Rejected canvas share for invalid source path", { reason: o3.reason }), { status: "canvas-missing" };
        let i3;
        try {
          i3 = await s2.getShareArtifact({ path: o3.realPath }), n3();
        } catch (e4) {
          if (e4 instanceof H.CancellationError) throw e4;
          throw Fl.error(a2, "Failed to build canvas share artifact for upload", { errorType: e4 instanceof Error ? e4.name : typeof e4 }), e4;
        }
        switch (i3.status.status) {
          case "rendered": {
            const r4 = await Cc(e3);
            if ("invalid" === r4.status) return Fl.warn(a2, "Rejected canvas share after source path changed", { reason: r4.reason }), { status: "canvas-missing" };
            if (o3.realPath !== r4.realPath || (function({ before: e4, after: t4 }) {
              return e4.dev !== t4.dev || e4.ino !== t4.ino || e4.size !== t4.size || e4.mtimeMs !== t4.mtimeMs;
            })({ before: o3.stats, after: r4.stats })) return Fl.warn(a2, "Rejected canvas share after source file changed during artifact build"), { status: "canvas-missing" };
            n3();
            try {
              return { status: "shared", shareUrl: (await H.cursor.shareCanvasArtifact({ title: t3.title, visibility: t3.visibility, appJs: i3.appJs, dataJson: i3.dataJson, canvasPath: e3 })).shareUrl };
            } catch (e4) {
              throw Fl.error(a2, "Failed to upload canvas share artifact", { errorType: e4 instanceof Error ? e4.name : typeof e4 }), e4;
            }
          }
          case "compile-error":
          case "runtime-error":
          case "canvas-missing":
          case "content-too-large":
            return i3.status;
          default:
            return i3.status;
        }
      }, dispose() {
        for (const e3 of [...c2.keys()]) l2(e3);
        u2.dispose(), i2.dispose(), o2.dispose(), s2.stop();
      } };
    }
    function Hl() {
      const { kind: e2 } = H.window.activeColorTheme;
      switch (e2) {
        case H.ColorThemeKind.Light:
          return { kind: "light" };
        case H.ColorThemeKind.Dark:
          return { kind: "dark" };
        case H.ColorThemeKind.HighContrast:
          return { kind: "hc-dark" };
        case H.ColorThemeKind.HighContrastLight:
          return { kind: "hc-light" };
        default:
          return { kind: "dark" };
      }
    }
    function Kl(e2) {
      const t2 = H.env.bundledNodePath?.() ?? (process.versions.electron ? void 0 : process.execPath), r2 = Wl({ runtimeDir: (0, ko.join)(e2.runtimeExtensionPath, "dist", "canvas-runtime"), logContext: e2.serviceCtx, nodeExecPath: t2, getPeerAgentStoreFilesDirs: () => (function(e3) {
        const t3 = Bl();
        return "function" == typeof t3?.getPeerAgentStoreFilesDirs ? t3.getPeerAgentStoreFilesDirs() : e3();
      })(fn), getReplicaAgentStoreFilesDirs: () => (function(e3) {
        const t3 = Bl();
        return "function" == typeof t3?.getReplicaAgentStoreFilesDirs ? t3.getReplicaAgentStoreFilesDirs() : e3();
      })(hn), cloudCanvasCacheDir: (0, ko.join)(e2.context.globalStorageUri.fsPath, "cloud-canvas-cache") }), n2 = H.cursor.registerCanvasServerProvider(r2);
      return e2.context.subscriptions.push(n2), { disposeProvider: () => {
        r2.dispose();
      } };
    }
    var Vl = __webpack_require__(69584), Yl = __webpack_require__(91434);
    const Ql = (0, g.h)("ControlledConversationActionManager");
    class Xl {
      get signal() {
        return this.abortController.signal;
      }
      get abortRequested() {
        return this.abortCalled;
      }
      constructor() {
        this.abortCallbacks = [], this.abortController = new AbortController(), this.acceptsActions = true, this.disposed = false, this.abortStarted = false, this.abortCalled = false, this.runActive = false, this.unprocessedUserMessages = [], this.clientStream = (0, Yl.Jt)();
      }
      addAbortCallback(e2) {
        this.abortCallbacks.push(e2);
      }
      abort(e2, t2) {
        this.abortCalled = true;
        if (this.abortController.signal.aborted || this.abortStarted) return;
        const r2 = t2?.interruptedPendingToolCallResolutions;
        if (this.abortStarted = true, !this.runActive) {
          this.abortController.abort(e2);
          for (const e3 of this.abortCallbacks) e3();
          return void (this.abortCallbacks.length = 0);
        }
        const n2 = this.abortController, s2 = [...this.abortCallbacks];
        this.abortCallbacks.length = 0, this.submitConversationAction(new Vl.QFf({ action: { case: "cancelAction", value: new Vl.TTG({ reason: e2, interruptedPendingToolCallResolutions: r2 }) } })).catch(() => {
        }).finally(() => {
          n2.abort(e2);
          for (const e3 of s2) e3();
          if (this.abortController === n2) {
            const e3 = [...this.abortCallbacks];
            this.abortCallbacks.length = 0;
            for (const t3 of e3) t3();
          }
        });
      }
      async submitConversationAction(e2) {
        if (!this.acceptsActions) throw new Yl.W2("ControlledConversationActionManager is not accepting actions");
        if ("userMessageAction" === e2.action.case) {
          const t2 = e2.action.value.userMessage;
          t2 && this.unprocessedUserMessages.push(t2);
        }
        await this.clientStream.write(e2);
      }
      queueFollowUpUserMessage(e2) {
        if (this.disposed || this.abortStarted) throw new Yl.W2("ControlledConversationActionManager run was aborted or disposed");
        this.unprocessedUserMessages.push(e2);
      }
      async enqueueReplayableConversationAction(e2) {
        if ("asyncAskQuestionCompletionAction" !== e2.action.case) throw new TypeError("Only asyncAskQuestionCompletionAction can use enqueue acknowledgement");
        if (!this.acceptsActions) throw new Yl.W2("ControlledConversationActionManager is not accepting actions");
        this.clientStream.write(e2).catch(() => {
        });
      }
      markMessageAsProcessed(e2) {
        this.unprocessedUserMessages = this.unprocessedUserMessages.filter((t2) => t2.messageId !== e2.messageId);
      }
      requeueMessage(e2) {
        this.unprocessedUserMessages.some((t2) => t2.messageId === e2.messageId) || this.unprocessedUserMessages.unshift(e2);
      }
      getUnprocessedUserMessages() {
        return [...this.unprocessedUserMessages];
      }
      hasUnprocessedMessages() {
        return this.unprocessedUserMessages.length > 0;
      }
      close() {
        this.acceptsActions = false, this.clientStream.close();
      }
      reopen() {
        this.disposed || this.acceptsActions || this.resetStream();
      }
      resetStream() {
        if (this.disposed) throw new Yl.W2("ControlledConversationActionManager disposed");
        this.acceptsActions = false, this.clientStream.close(), this.clientStream = (0, Yl.Jt)(), this.acceptsActions = true, this.abortController = new AbortController(), this.abortStarted = false;
        for (const e2 of this.unprocessedUserMessages) this.clientStream.write(new Vl.QFf({ action: { case: "userMessageAction", value: new Vl.Vtf({ userMessage: e2 }) } })).catch(() => {
        });
      }
      async run(e2, t2) {
        const r2 = this.clientStream;
        this.runActive = true;
        try {
          for await (const n2 of r2) try {
            await t2.write(n2);
          } catch (t3) {
            Ql.error(e2, "Error writing conversation action", t3);
          }
        } catch (e3) {
          if (!(e3 instanceof Yl.W2)) throw e3;
        } finally {
          this.clientStream === r2 && (this.runActive = false);
        }
      }
      dispose() {
        this.disposed || (this.disposed = true, this.abortCallbacks.length = 0, this.acceptsActions = false, this.clientStream.throw(new Yl.W2("ControlledConversationActionManager disposed")));
      }
    }
    var Zl = __webpack_require__(55094), eu = __webpack_require__(86209), tu = __webpack_require__(12544), ru = (e2, t2) => (t2 = Symbol[e2]) ? t2 : /* @__PURE__ */ Symbol.for("Symbol." + e2), nu = (e2) => {
      throw TypeError(e2);
    }, su = (e2, t2, r2) => {
      var n2, s2;
      null != t2 ? ("object" != typeof t2 && "function" != typeof t2 && nu("Object expected"), r2 && (n2 = t2[ru("asyncDispose")]), void 0 === n2 && (n2 = t2[ru("dispose")], r2 && (s2 = n2)), "function" != typeof n2 && nu("Object not disposable"), s2 && (n2 = function() {
        try {
          s2.call(this);
        } catch (e3) {
          return Promise.reject(e3);
        }
      }), e2.push([r2, n2, t2])) : r2 && e2.push([r2]);
      return t2;
    };
    let ou;
    const iu = (0, g.h)("cursor-agent-exec-provider"), au = (0, g.h)("cursor-agent-exec-subagent-proxy"), cu = (0, g.h)("cursor-agent-exec-prompt-quality-upload"), lu = (0, g.h)("cursor-agent-exec-gateway-request");
    function uu() {
      return ou ??= Promise.resolve().then(__webpack_require__.bind(__webpack_require__, 79049)), ou;
    }
    const du = 1e6;
    function pu(e2, t2) {
      return t2 <= du ? e2 : e2.slice(0, du) + `
[truncated: showing the first 1000000 of ${t2} characters]`;
    }
    class mu {
      constructor(e2) {
        this.callbacks = e2;
      }
      getBlob(e2, t2) {
        return this.callbacks.getBlob(t2);
      }
      setBlob(e2, t2, r2) {
        return this.callbacks.setBlob(t2, r2, false);
      }
      setBlobLocallyOnly(e2, t2, r2) {
        return this.callbacks.setBlob(t2, r2, true);
      }
      flush(e2) {
        return Promise.resolve();
      }
    }
    class hu {
      constructor(e2) {
        this.callbacks = e2, this.postTurnEndedWorkQueue = [];
      }
      async sendUpdate(e2, t2) {
        await this.callbacks.sendInteractionUpdate(t2.toBinary());
      }
      async query(e2, t2) {
        const r2 = await this.callbacks.queryInteraction(t2.toBinary());
        return Vl.Y5.fromBinary(r2);
      }
      enqueuePostTurnEndedWork(e2) {
        this.postTurnEndedWorkQueue.push(e2);
      }
      async flushPostTurnEndedWork(e2) {
        const t2 = this.postTurnEndedWorkQueue.splice(0);
        for (const e3 of t2) await e3();
      }
    }
    class fu {
      constructor(e2, t2, r2, n2, s2, o2) {
        this.factory = e2, this.teamSettingsService = t2, this.createTerminalExecutor = r2, this.workspacePaths = n2, this.loggerBackend = s2, this.metricsBackend = o2, this.sessions = /* @__PURE__ */ new Map(), this.sessionConflictNoticeKeys = /* @__PURE__ */ new Map();
      }
      invalidateTeamSettingsCache() {
        this.teamSettingsService.invalidateCache();
      }
      async spawn(e2, t2) {
        const r2 = t2.cwd ?? this.workspacePaths[0] ?? So.homedir(), n2 = this.createTerminalExecutor().clone(r2);
        try {
          const t3 = (0, f.q6)().with(g._O, this.loggerBackend).with($.Fm, this.metricsBackend), s2 = await n2.execute(t3, e2, { workingDirectory: r2, env: { CURSOR_AGENT: "1" } });
          let o2 = "", i2 = "", a2 = 0, c2 = 0, l2 = 0;
          for await (const e3 of s2) if ("stdout" === e3.type) {
            const t4 = e3.data.toString("utf8");
            a2 += t4.length, o2.length < du && (o2 += t4.slice(0, du - o2.length));
          } else if ("stderr" === e3.type) {
            const t4 = e3.data.toString("utf8");
            c2 += t4.length, i2.length < du && (i2 += t4.slice(0, du - i2.length));
          } else "exit" === e3.type && (l2 = e3.code ?? 0);
          return { stdout: pu(o2, a2), stderr: pu(i2, c2), code: l2 };
        } catch (e3) {
          const t3 = e3.message ?? String(e3);
          return { stdout: "", stderr: pu(t3, t3.length), code: e3.exitCode ?? 1 };
        }
      }
      createSession(e2, t2, r2, n2, s2, o2) {
        const i2 = crypto.randomUUID(), { manager: a2, baseResources: c2, unsubscribe: l2, terminalExecutor: u2 } = this.factory.createSessionExecManager(i2, e2, t2, r2, n2.workspacePaths, n2.worktreeMainPath, s2, o2, n2.isGlassRoot), d2 = this.loggerBackend, p2 = this.metricsBackend, m2 = this.factory, y2 = this.sessions, w2 = /* @__PURE__ */ new Set();
        this.sessionConflictNoticeKeys.set(i2, w2), m2.stampConflictNoticeFloor(i2);
        const v2 = { createStream(e3, t3, r3) {
          const n3 = e3.conversationId?.trim();
          void 0 !== n3 && n3.length > 0 && (m2.inheritConflictNoticeFloor({ fromKey: i2, toKey: n3 }), w2.has(n3) || (w2.add(n3), m2.acquireConflictNoticeKey(n3)), m2.bindConflictNoticeConversation({ sessionKey: i2, conversationId: n3 }), m2.claimConflictNoticeKey(n3));
          return (async function* () {
            var n4, s3, o3, i3, c3, l3, u3 = [];
            try {
              const n5 = Zl.Ye.fromBinary(t3);
              let s4, o4;
              if (n5.spanContext) {
                const e4 = n5.spanContext;
                s4 = (0, h.V5)({ traceId: e4.traceId, spanId: e4.spanId, traceFlags: e4.traceFlags ?? 1 }, "exec.handle").with(g._O, d2).with($.Fm, p2), o4 = (0, h.fU)(s4);
              } else s4 = (0, f.q6)().with(g._O, d2).with($.Fm, p2);
              s4 = s4.with(te, e3), e3.requestId && (s4 = (0, h.Mf)(s4, "requestId", e3.requestId)), e3.composerId && (s4 = (0, h.Mf)(s4, "composerId", e3.composerId));
              const [i4, c4] = s4.withCancel();
              r3.aborted ? c4() : r3.addEventListener("abort", () => {
                c4();
              }, { once: true });
              su(u3, o4 ? new h.r2(i4, o4) : void 0);
              const l4 = su(u3, (0, h.VI)(i4.withName("controlledExecManager.handle"))), m4 = a2.handle(l4.ctx, n5);
              for await (const e4 of m4) {
                const t4 = (() => {
                  if (e4 instanceof Zl.yT) return "M";
                  if (e4 instanceof Zl.$Y) return "C";
                  throw new Error("Invalid message type");
                })(), r4 = e4.toBinary(), n6 = new Uint8Array(r4.length + 1);
                n6[0] = t4.charCodeAt(0), n6.set(r4, 1), yield n6;
              }
            } catch (e4) {
              var m3 = e4, y3 = true;
            } finally {
              n4 = u3, s3 = m3, o3 = y3, i3 = "function" == typeof SuppressedError ? SuppressedError : function(e4, t4, r4, n5) {
                return (n5 = Error(r4)).name = "SuppressedError", n5.error = e4, n5.suppressed = t4, n5;
              }, c3 = (e4) => s3 = o3 ? new i3(e4, s3, "An error was suppressed during disposal") : (o3 = true, e4), (l3 = (e4) => {
                for (; e4 = n4.pop(); ) try {
                  var t4 = e4[1] && e4[1].call(e4[2]);
                  if (e4[0]) return Promise.resolve(t4).then(l3, (e5) => (c3(e5), l3()));
                } catch (e5) {
                  c3(e5);
                }
                if (o3) throw s3;
              })();
            }
          })();
        }, dispose: () => {
          try {
            l2(), c2.dispose(), u2.dispose();
          } finally {
            m2.clearConflictDrain(i2);
            for (const e3 of w2) m2.releaseConflictNoticeKey(e3);
            this.sessionConflictNoticeKeys.delete(i2), y2.delete(i2);
          }
        } };
        return this.sessions.set(i2, v2), v2;
      }
      async runLocalAgent(t2, r2, n2) {
        await __lcpExt.register(t2);
        const s2 = crypto.randomUUID(), o2 = new H.EventEmitter();
        let i2, a2, c2, l2;
        void 0 !== r2.getPermissions || iu.warn((0, f.q6)().with(g._O, this.loggerBackend), "runLocalAgent: no bridged exec session for local run; failing closed (tools require approval and are denied)", { conversationId: t2.runOptions.conversationId, conversationGroupId: t2.runOptions.conversationGroupId });
        const u2 = r2.requestApproval ?? (async () => ({ approved: false, reason: "No exec session is available for this local agent run, so the tool call was denied." })), d2 = r2.requestElicitation ?? (async () => ({ action: "cancel" })), p2 = r2.notifyFileChange ?? (async () => {
        }), m2 = r2.getPermissions ?? (async () => ({ allow: [], deny: [], approvalMode: "ask-every-time", userConfiguredPolicy: { type: "insecure_none" } })), h2 = r2.onDidChangePermissions ?? o2.event;
        try {
          ({ resources: i2, baseResources: a2, unsubscribe: c2, terminalExecutor: l2 } = this.factory.createSessionExecManager(s2, u2, d2, p2, t2.agentExecOptions.workspacePaths, t2.agentExecOptions.worktreeMainPath, m2, h2, t2.agentExecOptions.isGlassRoot, { mcpMetaToolEnabled: true, mcpTools: t2.mcpTools, conflictNoticeSessionKey: t2.runOptions.conversationId }));
        } catch (e2) {
          throw o2.dispose(), e2;
        }
        const y2 = t2.runOptions.conversationId?.trim();
        if (void 0 !== y2 && y2.length > 0) {
          for (const e3 of this.sessionConflictNoticeKeys.keys()) this.factory.inheritConflictNoticeFloor({ fromKey: e3, toKey: y2 });
          let e2 = false;
          for (const t3 of this.sessionConflictNoticeKeys.values()) if (t3.has(y2)) {
            e2 = true;
            break;
          }
          e2 ? this.factory.claimConflictNoticeKey(y2) : this.factory.retainConflictNoticeKey(y2);
        }
        if (void 0 !== r2.executeSubagent) {
          const t3 = r2.executeSubagent, n3 = { execute: async (e2, r3) => {
            au.info(e2, "subagent proxy: delegating to renderer", { subagentType: r3.subagentType, toolCallId: r3.toolCallId, runInBackground: true === r3.runInBackground });
            try {
              const n4 = await t3(r3.toBinary(), e2.signal), s3 = tu.vS.fromBinary(n4);
              return au.info(e2, "subagent proxy: renderer settled", { toolCallId: r3.toolCallId, resultCase: s3.result.case }), s3;
            } catch (t4) {
              const n4 = t4 instanceof Error ? t4.message : String(t4);
              return au.error(e2, "subagent proxy: RPC failed", void 0, { toolCallId: r3.toolCallId, errorType: t4 instanceof Error ? t4.name : "unknown" }), new tu.vS({ result: { case: "error", value: new tu.od({ error: n4 }) } });
            }
          } };
          a2.register(e.ZnQ, n3);
        }
        if (void 0 !== r2.forceBackgroundSubagent) {
          const t3 = r2.forceBackgroundSubagent, n3 = { execute: async (e2, r3) => {
            au.info(e2, "forceBackground subagent proxy: delegating to renderer", { toolCallId: r3.toolCallId });
            try {
              const e3 = await t3(r3.toBinary());
              return tu.a3.fromBinary(e3);
            } catch (t4) {
              return au.error(e2, "forceBackground subagent proxy: RPC failed", void 0, { toolCallId: r3.toolCallId, errorType: t4 instanceof Error ? t4.name : "unknown" }), new tu.a3({ status: tu.jh.NOT_FOUND });
            }
          } };
          a2.register(e.I2x, n3);
        }
        if (void 0 !== r2.awaitSubagent) {
          const t3 = r2.awaitSubagent, n3 = { execute: async (e2, r3) => {
            au.info(e2, "subagent await proxy: delegating to renderer", { agentId: r3.agentId, timeoutMs: r3.timeoutMs });
            try {
              const n4 = await t3(r3.toBinary(), e2.signal), s3 = tu.zJ.fromBinary(n4);
              return au.info(e2, "subagent await proxy: renderer settled", { agentId: r3.agentId, resultCase: s3.result.case }), s3;
            } catch (t4) {
              const n4 = t4 instanceof Error ? t4.message : String(t4);
              return au.error(e2, "subagent await proxy: RPC failed", void 0, { agentId: r3.agentId, errorType: t4 instanceof Error ? t4.name : "unknown" }), new tu.zJ({ result: { case: "error", value: new tu.Y({ agentId: r3.agentId, error: n4 }) } });
            }
          } };
          a2.register(e.rz0, n3);
        }
        let w2, v2, _2;
        try {
          w2 = t2.modelDetails ? Vl.Gmx.fromBinary(t2.modelDetails) : void 0, v2 = Vl.Gmx.fromBinary(t2.defaultModel), _2 = { ...t2.runOptions, requestedModel: t2.runOptions.requestedModel ? eu.G4.fromBinary(t2.runOptions.requestedModel) : void 0, subagentModelOverrides: t2.runOptions.subagentModelOverrides?.map((e2) => Vl.Bjv.fromBinary(e2)) };
        } catch (e2) {
          throw o2.dispose(), c2(), a2.dispose(), l2.dispose(), e2;
        }
        const b2 = { conversationId: t2.runOptions.conversationId, composerId: t2.runOptions.conversationGroupId ?? t2.runOptions.conversationId, requestId: t2.runOptions.generationUUID ?? crypto.randomUUID(), modelName: w2?.modelId ?? v2.modelId ?? "" }, S2 = (0, f.q6)().with(g._O, this.loggerBackend).with($.Fm, this.metricsBackend).with(te, b2), [k2, x2] = S2.withCancel();
        void 0 !== n2 && (n2.aborted ? x2() : n2.addEventListener("abort", () => {
          au.info(k2, "runLocalAgent: abort signal fired -> cancelling local run ctx"), x2();
        }, { once: true }));
        try {
          const { LocalAgentClient: n3 } = await uu(), s3 = "cursor-dev" === t2.urlProtocol ? r2.uploadPromptQualitySnapshot : void 0, o3 = new n3({ localProvider: { kind: "http", endpoints: [{ baseUrl: t2.baseUrl, ...void 0 !== t2.apiKey ? { apiKey: t2.apiKey } : {} }] }, userAgent: t2.userAgent, customHeaders: t2.customHeaders, urlProtocol: t2.urlProtocol, onPromptQualitySnapshot: void 0 === s3 ? void 0 : (e2) => {
            s3(e2.generationUUID, e2.capabilityNonce).catch((e3) => {
              cu.error(k2, "Automatic Prompt Quality upload failed", e3);
            });
          }, defaultModel: v2, availableModels: () => t2.availableModelIds.map((e2) => new Vl.Gmx({ modelId: e2 })), privacyMode: t2.privacyMode, maxRetries: void 0 !== t2.cursorLocalProvider ? 1 : 10, enableSmartModeClassifier: true, enableAgentStoreConflictNotices: true, getWriteBarrierTimeoutMs: Ss(), recordAgentStoreWriteBarrier: ks() }), a3 = (e2) => {
            lu.info(k2, "Gateway request settled", { ...e2 });
          }, c3 = Vl.QFf.fromBinary(t2.action), l3 = Vl.Y9z.fromBinary(t2.conversationState), u3 = "userMessageAction" === c3.action.case ? c3.action.value.userMessage?.mode : void 0, d3 = void 0 !== u3 && u3 !== Vl.xyI.UNSPECIFIED ? u3 : l3.mode, p3 = d3 === Vl.xyI.ASK ? (0, e.uaw)(i2) : i2;
          (0, mt.notifyAgentStoreConversationTurn)(t2.runOptions.conversationId, "start");
          try {
            await o3.run(k2, l3, c3, w2, new hu(r2), p3, new mu(r2), new Xl(), { async handleCheckpoint(e2, t3) {
              await r2.handleCheckpoint(t3.toBinary());
            }, getLatestCheckpoint() {
            } }, t2.mcpTools, { ..._2, onGatewayRequest: a3 });
          } finally {
            (0, mt.notifyAgentStoreConversationTurn)(t2.runOptions.conversationId, "end");
          }
        } finally {
          o2.dispose(), c2(), a2.dispose(), l2.dispose();
        }
      }
      async runLocalInference(e2) {
        await __lcpExt.register(e2);
        const t2 = await uu();
        switch (e2.kind) {
          case "agentName":
            return t2.generateLocalAgentName({ modelId: e2.modelId, baseUrl: e2.baseUrl, apiKey: e2.apiKey, userAgent: e2.userAgent, customHeaders: e2.customHeaders, userMessage: e2.userMessage ?? "" });
          case "commitMessage":
            return t2.generateLocalCommitMessage({ modelId: e2.modelId, baseUrl: e2.baseUrl, apiKey: e2.apiKey, userAgent: e2.userAgent, customHeaders: e2.customHeaders, diffs: e2.diffs ?? [], previousCommitMessages: e2.previousCommitMessages, explicitContext: e2.explicitContext });
          case "branchName":
            return t2.generateLocalBranchName({ modelId: e2.modelId, baseUrl: e2.baseUrl, apiKey: e2.apiKey, userAgent: e2.userAgent, customHeaders: e2.customHeaders, diffs: e2.diff ?? e2.diffs?.join("\n\n") ?? "", context: e2.context });
          default: {
            const t3 = e2.kind;
            throw new Error(`Unknown local inference kind: ${t3}`);
          }
        }
      }
      async fetchLocalProviderModels(e2) {
        if (true === e2?.cursorLocalProvider?.listing) return __lcpExt.listModels(e2);
        if (void 0 !== e2?.cursorLocalSubscriptions) return __lcpExt.subscriptions(e2.cursorLocalSubscriptions);
        const t2 = await uu(), r2 = await t2.fetchLocalProviderModels({ baseUrl: e2.baseUrl, apiKey: e2.apiKey, userAgent: e2.userAgent, customHeaders: e2.customHeaders }), n2 = t2.buildBottlerocketPickerModels(r2.models, { defaultEffortTier: "curated" }).map((e3) => e3.toJson()), s2 = t2.findUnsupportedReasoningModelIds(r2.models);
        return { allProviderModelIds: r2.allModelIds, pickerModels: n2, unsupportedReasoningModelIds: s2 };
      }
      dispose() {
        for (const e2 of this.sessions.values()) e2.dispose();
        this.sessions.clear(), this.sessionConflictNoticeKeys.clear(), this.factory.clearRetainedConflictNoticeKeys();
      }
    }
    var gu = __webpack_require__(43081);
    function yu(e2 = {}) {
      return false !== e2.registerAgentExecProvider;
    }
    function wu(e2, t2, r2) {
      const n2 = (function(e3 = {}) {
        return yu(e3) ? "agent-exec-provider" : "noop";
      })(t2);
      let s2;
      const o2 = r2.registerAgentExecProvider ?? ((e3) => H.cursor.registerAgentExecProvider(e3));
      var i2;
      return { registered: !!yu((i2 = { options: t2, register: () => {
        s2 = new fu(r2.factory, r2.teamSettingsService, r2.createTerminalExecutor, r2.workspacePaths, r2.loggerBackend, r2.metricsBackend), e2.subscriptions.push(s2);
        const t3 = o2(s2);
        e2.subscriptions.push(t3);
      } }).options) && (i2.register(), true), invalidateChannel: n2, provider: s2 };
    }
    var vu = (e2, t2) => (t2 = Symbol[e2]) ? t2 : /* @__PURE__ */ Symbol.for("Symbol." + e2), _u = (e2) => {
      throw TypeError(e2);
    }, bu = (e2, t2, r2) => {
      var n2, s2;
      null != t2 ? ("object" != typeof t2 && "function" != typeof t2 && _u("Object expected"), r2 && (n2 = t2[vu("asyncDispose")]), void 0 === n2 && (n2 = t2[vu("dispose")], r2 && (s2 = n2)), "function" != typeof n2 && _u("Object not disposable"), s2 && (n2 = function() {
        try {
          s2.call(this);
        } catch (e3) {
          return Promise.reject(e3);
        }
      }), e2.push([r2, n2, t2])) : r2 && e2.push([r2]);
      return t2;
    }, Su = (e2, t2, r2) => {
      var n2 = "function" == typeof SuppressedError ? SuppressedError : function(e3, t3, r3, n3) {
        return (n3 = Error(r3)).name = "SuppressedError", n3.error = e3, n3.suppressed = t3, n3;
      }, s2 = (e3) => t2 = r2 ? new n2(e3, t2, "An error was suppressed during disposal") : (r2 = true, e3), o2 = (n3) => {
        for (; n3 = e2.pop(); ) try {
          var i2 = n3[1] && n3[1].call(n3[2]);
          if (n3[0]) return Promise.resolve(i2).then(o2, (e3) => (s2(e3), o2()));
        } catch (e3) {
          s2(e3);
        }
        if (r2) throw t2;
      };
      return o2();
    };
    const ku = "mcp_always_expose_auth_tool";
    let xu, Eu;
    const Iu = "mcp_access_network_allowlist", Tu = "mcp_settings_overhaul", Cu = "mcp_user_extension_stdio_unsandboxed_win32", Pu = "admin_command_denylist_enforcement_killswitch", Au = "cursor_rules_batch_update", Ru = "cursor_agent_host_move_exec", Mu = "agent_host_local_loop", Ju = "reduce_context_hot_path", Ou = "skill_catalog_ide_cache";
    function Bu(e2) {
      if ("string" != typeof e2) return;
      const t2 = e2.trim();
      return t2.length > 0 ? t2 : void 0;
    }
    const Du = (0, $.Pu)("vscode.agent_exec.activate_calls", {}), qu = { sessionExecManagerFactory: void 0, activeGitExecutor: void 0, activeMcpProvider: void 0 };
    class Nu {
      constructor(e2) {
        this.vscodeGitExtension = e2;
      }
      async exec(t2, r2, n2, s2) {
        var o2 = [];
        try {
          if (!this.vscodeGitExtension) throw new e.YH2("Failed to execute git command because there is no available Git API. Ensure there is a reachable git installation on the workspace system.");
          bu(o2, (0, h.VI)(t2.withName("VscodeGitExecutor.exec"), { attributes: { "git.cwd": r2, "git.args": n2, "git.caller": s2?.caller } }));
          return await this.vscodeGitExtension.rawGit.exec(r2, n2, s2);
        } catch (e2) {
          var i2 = e2, a2 = true;
        } finally {
          Su(o2, i2, a2);
        }
      }
    }
    class Fu {
      constructor(e2) {
        this.spawnerPromise = e2;
      }
      async exec(t2, r2, n2, s2) {
        var o2 = [];
        try {
          let l3;
          var i2 = [];
          try {
            bu(i2, (0, h.VI)(t2.withName("GitCoreVscodeGitExecutor await git spawner")));
            l3 = await this.spawnerPromise;
          } catch (e2) {
            var a2 = e2, c2 = true;
          } finally {
            Su(i2, a2, c2);
          }
          if (void 0 === l3) throw new e.YH2("Failed to execute git command because there is no available GitSpawner. Ensure there is a reachable git installation on the workspace system.");
          bu(o2, (0, h.VI)(t2.withName("VscodeGitExecutor.exec"), { attributes: { "git.cwd": r2, "git.args": n2, "git.caller": s2?.caller } }));
          return await l3.exec(r2, n2, s2);
        } catch (e2) {
          var l2 = e2, u2 = true;
        } finally {
          Su(o2, l2, u2);
        }
      }
    }
    const Uu = [];
    class Lu {
      async open(e2, t2) {
      }
      async getDiagnostics(e2, t2) {
        return [];
      }
    }
    class $u {
      constructor(e2) {
        this.disposables = [], this.watcher = H.workspace.createFileSystemWatcher(e2 ?? "**");
      }
      onDidChange(e2) {
        const t2 = this.watcher.onDidChange((t3) => {
          e2(t3.fsPath);
        });
        this.disposables.push(t2);
      }
      onDidCreate(e2) {
        const t2 = this.watcher.onDidCreate((t3) => {
          e2(t3.fsPath);
        });
        this.disposables.push(t2);
      }
      onDidDelete(e2) {
        const t2 = this.watcher.onDidDelete((t3) => {
          e2(t3.fsPath);
        });
        this.disposables.push(t2);
      }
      dispose() {
        this.disposables.forEach((e2) => e2.dispose()), this.watcher.dispose();
      }
    }
    class ju {
      async getCodebaseReference(e2, t2) {
        const [r2, n2] = await Promise.all([H.cursor.getRepoInfo(), H.cursor.getPathEncryptionKey()]);
        if (r2 && n2) return { relativeWorkspacePath: r2.relativeWorkspacePath, repoName: r2.repoName, repoOwner: r2.repoOwner, isTracked: false, isLocal: true, numFiles: 0, orthogonalTransformSeed: r2.orthogonalTransformSeed ?? 0, pathEncryptionKey: n2 };
      }
    }
    async function Gu(t2, r2 = {}) {
      var n2 = [];
      try {
        const d3 = Date.now(), p3 = r2.runtimeExtensionPath ?? t2.extensionPath, m2 = H.window.createOutputChannel("Cursor Agent Exec", { log: true });
        let w2;
        t2.subscriptions.push(m2);
        const _2 = new Promise((e2) => {
          w2 = e2;
        });
        let b2 = false;
        _2.then(() => {
          b2 = true;
        });
        const S2 = cs(t2, m2, Uu, { whenProviderRegistered: _2 }).catch((e2) => {
          m2.appendLine(`[cursor-agent-exec] Agent store harness activation failed: ${String(e2)}`);
        }), k2 = new Do([new Mo(), new Bo(m2)]), x2 = new qo(), E2 = (0, f.q6)().with(g._O, k2).with($.Fm, x2);
        Du.increment(E2);
        const I2 = bu(n2, (0, h.VI)(E2.withName("CursorAgentExec.activate"))).ctx, { initialBuiltinSkillsSyncPromise: T2 } = me(E2, Uu);
        let C2;
        let P2;
        Me(t2, new Promise((e2) => {
          C2 = e2;
        }));
        let A2;
        Ue(t2, new Promise((e2) => {
          P2 = e2;
        }));
        Ge(t2, new Promise((e2) => {
          A2 = e2;
        })), (function(e2) {
          e2.subscriptions.push(H.commands.registerCommand(po, async (e3) => (wo("moveSkillToStore", e3), await yo("moveToStore", e3))), H.commands.registerCommand(mo, async (e3) => (wo("moveSkillOutOfStore", e3), await yo("moveOutOfStore", e3))));
        })(t2), uo(t2), lt(t2);
        const R2 = new ai(() => (0, f.q6)().with(g._O, k2).with($.Fm, x2));
        R2.start(), Uu.push(() => R2.stop());
        const M2 = new ii(), J2 = H.commands.registerCommand("cursorAgentExec.startEventLoopDelayMeasurementForTesting", () => M2.start()), B2 = H.commands.registerCommand("cursorAgentExec.finishEventLoopDelayMeasurementForTesting", () => M2.finish());
        Uu.push(() => J2.dispose(), () => B2.dispose(), () => M2.dispose()), (function(e2, t3) {
          const r3 = H.cursor.rgPath;
          if (r3) {
            const n3 = (0, ci.existsSync)(r3), s3 = (0, ko.dirname)(r3), o3 = (0, ci.existsSync)(s3);
            (0, G.J)(r3);
            const i3 = { rgPath: r3, rgPathExists: n3, rgParentDirExists: o3, platform: process.platform, arch: process.arch, nodeVersion: process.version, extensionPath: t3.extensionPath, execPath: process.execPath, remoteName: H.env.remoteName, uiKind: H.env.uiKind === H.UIKind.Desktop ? "desktop" : "web" };
            if (n3) try {
              const e3 = (0, ci.statSync)(r3);
              i3.rgFileSize = e3.size, i3.rgFileMode = e3.mode.toString(8), i3.rgIsFile = e3.isFile();
            } catch (e3) {
              i3.rgStatError = e3 instanceof Error ? e3.message : String(e3);
            }
            const a3 = 50;
            if (o3) try {
              i3.parentDirContents = (0, ci.readdirSync)(s3).slice(0, a3);
            } catch (e3) {
              i3.parentDirListError = e3 instanceof Error ? e3.message : String(e3);
            }
            const c3 = (0, ko.dirname)(s3);
            try {
              i3.grandparentDirExists = (0, ci.existsSync)(c3), i3.grandparentDirExists && (i3.grandparentDirContents = (0, ci.readdirSync)(c3).slice(0, a3));
            } catch (e3) {
              i3.grandparentDirError = e3 instanceof Error ? e3.message : String(e3);
            }
            const l3 = "node_modules.asar.unpacked";
            if (r3.includes(l3)) {
              const e3 = r3.split(l3)[0];
              if (e3) {
                try {
                  i3.asarExists = (0, ci.existsSync)(e3.concat("node_modules.asar"));
                } catch {
                  i3.asarExists = "check_failed";
                }
                const t4 = e3.concat(l3);
                try {
                  if (i3.asarUnpackedDirExists = (0, ci.existsSync)(t4), i3.asarUnpackedDirExists) {
                    const e4 = (0, ko.join)(t4, "@vscode", "ripgrep");
                    i3.ripgrepPkgDirExists = (0, ci.existsSync)(e4);
                  }
                } catch {
                  i3.asarUnpackedDirExists = "check_failed";
                }
              }
            }
            ee.info(e2, "rg_diagnostics.startup", i3), n3 || ee.warn(e2, "rg_diagnostics.startup.missing_binary", i3);
          } else ee.error(e2, "rg_diagnostics.startup.no_path", { platform: process.platform, arch: process.arch, nodeVersion: process.version, extensionPath: t3.extensionPath, execPath: process.execPath, remoteName: H.env.remoteName, uiKind: H.env.uiKind === H.UIKind.Desktop ? "desktop" : "web" });
        })(E2, t2), pi(Uu, (e2) => m2.appendLine(e2)).catch((e2) => m2.appendLine(`[cursor-agent-exec] ripgrep invocation monitor failed: ${String(e2)}`));
        const D2 = (function(e2) {
          if ("linux" !== process.platform && "win32" !== process.platform && "darwin" !== process.platform) return void console.log(`[cursor-agent-exec] Sandbox helper: unsupported platform ${process.platform}`);
          const t3 = "win32" === process.platform ? "cursorsandbox.exe" : "cursorsandbox", r3 = process.resourcesPath, n3 = ko.dirname(process.execPath);
          console.log("[cursor-agent-exec] Sandbox helper resolution:"), console.log(`[cursor-agent-exec]   platform=${process.platform}`), console.log(`[cursor-agent-exec]   resourcesPath=${r3}`), console.log(`[cursor-agent-exec]   execPath=${process.execPath}`), console.log(`[cursor-agent-exec]   execDir=${n3}`), console.log(`[cursor-agent-exec]   extensionRoot=${e2}`), console.log(`[cursor-agent-exec]   VSCODE_DEV=${process.env.VSCODE_DEV}`);
          const s3 = [];
          s3.push({ name: "extensionRoot relative (../../resources/helpers)", path: ko.join(e2, "../../resources/helpers", t3) }), r3 && (s3.push({ name: "resourcesPath/app/resources/helpers", path: ko.join(r3, "app", "resources", "helpers", t3) }), s3.push({ name: "resourcesPath/resources/helpers", path: ko.join(r3, "resources", "helpers", t3) })), s3.push({ name: "execDir/resources/helpers", path: ko.join(n3, "resources", "helpers", t3) }), s3.push({ name: "execDir/resources/app/resources/helpers", path: ko.join(n3, "resources", "app", "resources", "helpers", t3) }), "1" === process.env.VSCODE_DEV && s3.push({ name: "dev node_modules", path: ko.join(e2, "../../node_modules/@anysphere/sandbox-helper/bin", t3) });
          for (const e3 of s3) try {
            const t4 = ci.existsSync(e3.path);
            if (console.log(`[cursor-agent-exec]   candidate (${e3.name}): ${e3.path}, exists=${t4}`), !t4) {
              const t5 = ko.dirname(e3.path);
              try {
                if (ci.existsSync(t5)) {
                  const e4 = ci.readdirSync(t5);
                  console.log(`[cursor-agent-exec]     parent dir ${t5} contents: ${JSON.stringify(e4)}`);
                } else console.log(`[cursor-agent-exec]     parent dir ${t5} does not exist`);
              } catch (e4) {
                console.log(`[cursor-agent-exec]     failed to list parent dir: ${e4}`);
              }
            }
            if (t4) return console.log(`[cursor-agent-exec]   FOUND sandbox helper at: ${e3.path}`), e3.path;
          } catch (t4) {
            console.log(`[cursor-agent-exec]   candidate (${e3.name}): error checking ${e3.path}: ${t4}`);
          }
          console.log(`[cursor-agent-exec] Sandbox helper: no candidate found after checking ${s3.length} paths`);
        })(p3);
        if (D2) try {
          const e2 = Eo({ checkFeatureGate: () => H.cursor.checkFeatureGate("sandbox_read_control_portal"), onDidChangeGates: (e3) => H.cursor.onDidChangeGates(e3) });
          Uu.push(() => e2.dispose()), (0, G.St)({ sandboxBinaryPath: D2, workspaceReadEnabled: () => e2.getEnabled() }), console.log(`[cursor-agent-exec] Sandbox configured: binary=${D2}`);
        } catch (e2) {
          console.error("[cursor-agent-exec] Failed to configure sandbox:", e2);
        }
        else console.warn("[cursor-agent-exec] Sandbox helper path not found, sandboxing will be unavailable");
        const q2 = (H.workspace.workspaceFolders ?? []).map((e2) => e2.uri.fsPath);
        ee.info(E2, "cursor_agent_exec.startup.workspace_paths", { workspacePathCount: q2.length, workspacePaths: q2 });
        const N2 = q2.at(0), F2 = (0, z.yn)(N2, So.homedir()), K2 = (function() {
          let e2 = H.env.shell ?? "";
          try {
            const t3 = H.workspace.getConfiguration("terminal.integrated"), r3 = "win32" === process.platform ? "windows" : "darwin" === process.platform ? "osx" : "linux", n3 = t3.get(`defaultProfile.${r3}`);
            if (n3) {
              const s3 = t3.get(`profiles.${r3}`), o3 = s3?.[n3]?.path;
              o3 && (e2 = o3);
            }
          } catch (e3) {
            console.warn("[cursor-agent-exec] Failed to read terminal config", e3);
          }
          return e2;
        })();
        let V2 = false;
        H.cursor.getUseLegacyTerminalTool().then((e2) => {
          V2 = e2;
        });
        const Y2 = H.cursor.onDidChangeUseLegacyTerminalTool((e2) => {
          V2 = e2;
        });
        Uu.push(() => Y2.dispose());
        const Q2 = { env: { CURSOR_AGENT: "1" } }, X2 = (0, G.Fn)({ ...Q2, userTerminalHint: K2 }), Z2 = (0, G.fi)({ ...Q2, shell: (0, G.WE)((0, G.G6)(K2)) }), te2 = () => V2 ? Z2 : X2, re2 = (0, y.m4)(), ne2 = async () => {
          try {
            const e2 = Date.now(), t3 = await (async function(e3) {
              await (0, W.mkdir)(e3.projectsDir, { recursive: true });
              const t4 = await (0, W.realpath)(e3.projectsDir), r3 = Date.now(), n3 = new Date(r3).toISOString().slice(0, 10), s3 = (0, v.join)(t4, `.agent-data-cleanup-${n3}`);
              try {
                const e4 = await (0, W.open)(s3, "wx", 384);
                await e4.close();
              } catch (e4) {
                if (e4 instanceof Error && "code" in e4 && "EEXIST" === e4.code) return;
                throw e4;
              }
              return await (0, L.r5P)({ projectsDir: t4, nowMs: r3 });
            })({ projectsDir: re2 });
            if (void 0 === t3) return;
            ee.debug(E2, "Agent data cleanup completed", { ...t3, projectsDir: re2, durationMs: Date.now() - e2 });
          } catch (e2) {
            ee.warn(E2, "Agent data cleanup failed", { projectsDir: re2, error: String(e2) });
          }
        }, se2 = setTimeout(() => {
          ne2();
        }, 3e4), oe2 = setInterval(() => {
          ne2();
        }, L.BNF);
        Uu.push(() => {
          clearTimeout(se2), clearInterval(oe2);
        });
        const ie2 = { getTeamAdminSettings: async () => {
          const e2 = await H.cursor.getTeamAdminSettings();
          return e2 ? j.V5U.fromJson(e2, { ignoreUnknownFields: true }) : void 0;
        }, getTeamRepos: async () => {
          try {
            const e2 = await H.cursor.getTeamRepos();
            return e2 ? new j.k1F(e2) : void 0;
          } catch {
            return;
          }
        } }, ae2 = { getDefaultNetworkAllowlist: async () => {
          try {
            const e2 = await H.cursor.getDynamicConfigValue("sandbox_default_network_allowlist");
            return e2?.allowlist ?? [];
          } catch {
            return [];
          }
        } }, ce2 = new L.waD(ie2, ae2, { isMcpAccessNetworkAllowlistEnabled: () => H.cursor.checkFeatureGate(Iu), isMcpSettingsOverhaulEnabled: (e2) => H.cursor.checkFeatureGate(Tu, e2), isWin32UserExtensionStdioUnsandboxEnabled: (e2) => H.cursor.checkFeatureGate(Cu, e2), isAdminCommandDenylistEnforcementKilled: () => H.cursor.checkFeatureGate(Pu), isReadControlEnabled: () => H.cursor.checkFeatureGate(xo) });
        let le2, ue2;
        const de2 = new Promise((e2) => {
          ue2 = e2;
        }), pe2 = () => H.cursor.getThirdPartyExtensibilityEnabled(), fe2 = () => H.cursor.getAllowUserLocalPluginImports(), we2 = { subscribe: (e2, t3, r3) => {
          const n3 = [], s3 = (e3) => {
            "git" !== e3.scheme && r3(e3.fsPath);
          };
          for (const r4 of t3) {
            const t4 = new H.RelativePattern(e2, r4), o3 = H.workspace.createFileSystemWatcher(t4);
            o3.onDidCreate(s3), o3.onDidChange(s3), o3.onDidDelete(s3), n3.push(o3);
          }
          return () => {
            for (const e3 of n3) e3.dispose();
          };
        } }, ve2 = "rootWorkspace" === H.cursor.glassWorkspaceRole ? H.cursor.workspaceId() : (0, ko.join)(So.tmpdir(), crypto.randomUUID()), _e2 = (0, y.Xq)(N2 ?? ve2), be2 = (void 0 === Eu && (Eu = Promise.resolve(H.cursor.getPushRequestContextEnabled()).catch(() => false)), Eu);
        H.cursor.pushMcpWorkspaceProjectDir(_e2), H.cursor.pushEnvStaticData({ osVersion: `${So.platform()} ${So.release()}`, shell: (0, G.G6)(K2), projectDir: _e2, isWorkingDirHomeDir: F2 });
        const Se2 = new zo(I2);
        Uu.push(() => {
          Se2.dispose();
        });
        const ke2 = Di({ workspacePaths: q2, getThirdPartyExtensibilityEnabled: pe2, getAllowUserLocalPluginImports: fe2, deactivateTasks: Uu, context: t2, gitExecutorPromise: de2 });
        if (void 0 !== r2.mcpProvider && !(function(t3) {
          if (!(0, e.anv)(t3)) return false;
          const r3 = t3;
          return "function" == typeof r3.dispose && (void 0 === r3.snapshotProvider || (0, e.Yg2)(r3.snapshotProvider));
        })(r2.mcpProvider)) throw new Error("cursor-agent-host injected an MCP provider that does not satisfy the DisposableMcpLease contract");
        const [xe2, Ee2, Ie2, Te2, Ce2, Pe2, Ae2, Je2, Oe2, Be2, De2, qe2] = await Promise.all([(void 0 === xu && (xu = Promise.resolve(H.cursor.getCursorExtensionsIsolationEnabled()).catch(() => false)), xu), r2.mcpProvider ?? Jl(I2), ke2, H.cursor.checkFeatureGate("meta_mcp_tool"), H.cursor.checkFeatureGate("mcp_meta_tool_slim_descriptors"), H.cursor.checkFeatureGate(ku), Promise.resolve(H.cursor.getDynamicConfigValue("mcp_auth_status_copy_config")).catch(() => {
        }), Se2.initialize(I2), be2, Promise.resolve(H.cursor.checkFeatureGate("rules_discovery_respect_cursorignore")).catch(() => false), Promise.resolve(H.cursor.checkFeatureGate("subagents_discovery_allow_external_symlinks")).catch(() => false), Promise.resolve(H.cursor.checkFeatureGate(Ju)).catch(() => false), S2]);
        qu.activeMcpProvider = Ee2, (0, L.ba_)(Be2), void 0 === r2.mcpProvider && Uu.push(() => {
          Ee2.dispose();
        });
        const { pluginsService: Ne2, refreshPluginHooks: Fe2 } = Ie2;
        if (C2?.({ pluginsService: Ne2, deleteDirectoryToTrash: Re, userHomeDirectory: So.homedir() }), P2?.({ pluginsService: Ne2, cacheManager: new ge.WCg(So.homedir()), userHomeDirectory: So.homedir() }), A2?.({ pluginsService: Ne2, saveDirtyDocumentsUnder: ye }), void 0 !== r2.gitExecutor) le2 = r2.gitExecutor;
        else if (xe2) {
          var s2 = [];
          try {
            bu(s2, (0, h.VI)(I2.withName("fetch git (isolation)")));
            const e2 = (async () => {
              try {
                const e3 = await O(m2);
                return new U({ gitPath: e3.path, onLog: (e4) => m2.debug(`[git] ${e4.trimEnd()}`) });
              } catch (e3) {
                return void m2.error(e3);
              }
            })();
            le2 = new Fu(e2);
          } catch (e2) {
            var o2 = e2, i2 = true;
          } finally {
            Su(s2, o2, i2);
          }
        } else {
          var a2 = [];
          try {
            bu(a2, (0, h.VI)(I2.withName("fetch git (no isolation)")));
            const e2 = await (async function() {
              const e3 = H.extensions.getExtension("vscode.git");
              if (!e3) return;
              const t3 = e3.isActive ? e3.exports : await e3.activate();
              return t3 && t3.enabled ? t3.getAPI(1) : void 0;
            })();
            void 0 === e2 && m2.error("Failed to find a Git API."), le2 = new Nu(e2);
          } catch (e2) {
            var c2 = e2, l2 = true;
          } finally {
            Su(a2, c2, l2);
          }
        }
        ue2(le2), qu.activeGitExecutor = le2;
        const Le2 = new L.E1e(le2, ce2, q2);
        !(function(e2, t3) {
          const r3 = H.workspace.createFileSystemWatcher("**/.cursorignore");
          r3.onDidCreate(async (t4) => {
            const r4 = await (0, L.yeE)(t4.fsPath);
            null !== r4 && e2.handleCursorIgnoreCreated(r4).catch(() => {
            });
          }), r3.onDidChange(async (t4) => {
            const r4 = await (0, L.yeE)(t4.fsPath);
            null !== r4 && e2.handleCursorIgnoreChanged(r4).catch(() => {
            });
          }), r3.onDidDelete(async (t4) => {
            const r4 = await (0, L.yeE)(t4.fsPath) ?? (0, L.gMI)(t4.fsPath);
            e2.handleCursorIgnoreDeleted(r4).catch(() => {
            });
          }), t3.push(() => {
            r3.dispose();
          });
        })(Le2, Uu);
        const $e2 = new Lu(), je2 = new ju(), ze2 = q2.map((e2) => new L.KOV(E2, le2, e2, true, pe2, we2, Le2)), We2 = () => ({ agentStoreSkillsDirs: yn.get(), userHomeDirectory: So.homedir() }), He2 = () => ({ ...We2(), workspacePaths: q2 }), Ke2 = await Promise.resolve(H.cursor.checkFeatureGate(Ou)).catch(() => false), Ve2 = new L.EVC(E2, q2, So.homedir(), le2, true, we2, pe2, T2, "ide", void 0, () => yn.get(), Ke2 ? (0, L.V2h)(t2.globalStorageUri.fsPath) : void 0), Ye2 = new L.Rxj(E2, () => ({ importThirdPartyPlugins: pe2() }), we2, Ne2), Qe2 = new L.Px0([...ze2, Ve2, Ye2], We2), Xe2 = new L.NB([Ve2, Ye2], () => [], He2);
        Uu.push(yn.onDidChange(() => {
          b2 ? Ve2.reloadSkillRoots() : _2.then(() => {
            Ve2.reloadSkillRoots();
          });
        })), Uu.push(yn.onDidChangeTargetDirs(() => {
          H.commands.executeCommand(u).then(void 0, () => {
          });
        }));
        const Ze2 = q2.map((e2) => new L.VzO(e2, pe2, "workspace", De2)), et2 = new L.VzO(So.homedir(), pe2, "user", De2), tt2 = new L._Ji(() => ({ importThirdPartyPlugins: pe2() }), Ne2), rt2 = new L.o_K([...Ze2, et2, tt2]);
        Uu.push(() => {
          Qe2.dispose();
        });
        const nt2 = Oe2 && "rootWorkspace" === H.cursor.glassWorkspaceRole && 0 === q2.length, st2 = (e2) => {
          if (!nt2) return e2;
          const t3 = bo();
          return e2.some((e3) => e3.fullPath === t3.fullPath) ? e2 : [t3, ...e2];
        };
        let ot2, it2 = Promise.resolve();
        const at2 = (e2, t3 = false) => {
          const r3 = it2.then(async () => {
            const r4 = nl(st2(e2));
            if (!t3 && void 0 !== ot2 && (s3 = r4, (n3 = ot2).length === s3.length && n3.every((e3, t4) => e3.equals(s3[t4])))) return;
            var n3, s3;
            ot2 = void 0;
            await Promise.resolve(H.cursor.checkFeatureGate(Au)).catch(() => false) ? await H.cursor.updateCursorRulesInBatches(r4) : await H.cursor.updateCursorRules(r4), ot2 = r4;
          });
          return it2 = r3.catch(() => {
          }), r3;
        }, ct2 = Qe2.getAllCursorRules(E2).then(async (e2) => {
          m2.appendLine("cursorRulesService.getAllCursorRules"), await at2(e2);
        });
        ct2.catch((e2) => {
          m2.appendLine(`Failed to load or push initial cursor rules: ${String(e2)}`);
        });
        const ut2 = H.commands.registerCommand("cursorAgentExec.waitForInitialRulesReadyForTesting", async () => {
          await ct2;
        });
        Uu.push(() => ut2.dispose()), he({ mergedAgentSkillsService: Xe2, serviceCtx: E2, deactivateTasks: Uu, pushRequestContextEnabled: Oe2 }), Fe2();
        const dt2 = 4e3;
        let pt2;
        const mt2 = Qe2.onDidChangeRules(() => {
          void 0 !== pt2 && clearTimeout(pt2), pt2 = setTimeout(() => {
            pt2 = void 0, (async () => {
              const e2 = await Qe2.getAllCursorRules(E2);
              await at2(e2);
            })().catch((e2) => {
              m2.appendLine(`cursorRulesService.onDidChangeRules failed: ${String(e2)}`);
            });
          }, dt2);
        });
        Uu.push(mt2), Uu.push(() => {
          void 0 !== pt2 && clearTimeout(pt2);
        });
        const ht2 = H.cursor.registerCursorRulesProvider({ reloadRules: async () => {
          var e2 = [];
          try {
            const t4 = (0, f.q6)().with(g._O, k2).with($.Fm, x2), r4 = bu(e2, (0, h.VI)(t4.withName("cursorRulesProvider.reloadRules")));
            Qe2.reload(r4.ctx);
            const n3 = await Qe2.getAllCursorRules(r4.ctx);
            void 0 !== pt2 && (clearTimeout(pt2), pt2 = void 0), await at2(n3, true);
          } catch (e3) {
            var t3 = e3, r3 = true;
          } finally {
            Su(e2, t3, r3);
          }
        } });
        Uu.push(() => ht2.dispose());
        const ft2 = H.cursor.registerSubagentsProvider({ getAllSubagents: async () => rt2.getAllSubagents(), reload: async () => {
          await rt2.reload();
        }, reloadAndGetAllSubagents: async () => await rt2.reload() });
        Uu.push(() => ft2.dispose());
        const gt2 = "snapshots", yt2 = H.window.createOutputChannel("Mcp FileSystem Writer", { log: true });
        Uu.push(() => {
          yt2.dispose();
        });
        const wt2 = new Bo(yt2), vt2 = new Oo(new Jo({ subkey: "agent_exec_mcp_file_writer", mcpVersion: gt2 })), _t2 = new Do([wt2, vt2]);
        let bt2;
        try {
          bt2 = (function(e2) {
            if (null === e2 || "object" != typeof e2 || Array.isArray(e2)) return;
            const t3 = e2, r3 = { authToolDescription: Bu(t3.authToolDescription), errorStatusMessage: Bu(t3.errorStatusMessage), needsAuthStatusMessageWithAuthTool: Bu(t3.needsAuthStatusMessageWithAuthTool) };
            return Object.values(r3).every((e3) => void 0 === e3) ? void 0 : r3;
          })(Ae2);
        } catch {
          bt2 = void 0;
        }
        const St2 = new L.x7h(Ee2, _e2, { loggerBackend: _t2, mcpAuthCopyOverrides: bt2, alwaysExposeVirtualMcpAuthTool: Pe2, snapshotProvider: Ee2.snapshotProvider, mcpVersion: gt2, onDidWrite: Oe2 ? (e2) => {
          H.cursor.pushMcpFileSystemDescriptors(e2);
        } : void 0 });
        Uu.push(() => {
          St2.dispose();
        });
        const kt2 = new cl(_e2);
        Uu.push(() => {
          kt2.dispose();
        });
        const xt2 = H.cursor.registerBackgroundShellProvider({ listBackgroundShellWork: async (e2) => kt2.listBackgroundShellWork(e2), killBackgroundShell: async (e2) => kt2.killBackgroundShell(e2), showBackgroundShell: async (e2) => kt2.showBackgroundShell(e2) });
        Uu.push(() => xt2.dispose());
        const Et2 = new ul(Le2, () => H.cursor.getGrepProvider());
        let It2, Tt2, Ct2;
        const Pt2 = () => Ct2 || (Ct2 = new L.aZ7(Ee2), Ct2), At2 = (e2, t3) => {
          const r3 = new L.d2r(Qe2, void 0, rt2, je2, Et2, Pt2(), le2, e2, { projectDir: _e2, isWorkingDirHomeDir: (0, z.yn)(e2.at(0), So.homedir()), createFileWatcher: Oe2 ? void 0 : (e3) => new $u(e3), getSandboxEnabled: void 0, getNetworkAllowlistInfo: () => (0, L.mAh)(ce2, So.homedir(), e2[0]), userTerminalHint: K2, getMcpFileSystemOptions: (e3, t4) => St2.getMcpFileSystemOptions(e3, t4), mcpMetaToolEnabled: Te2, mcpMetaToolSlimDescriptors: Ce2, alwaysExposeVirtualMcpAuthTool: Pe2, getAgentSkills: (e3) => Xe2.getAllAgentSkills(e3), additionalRules: t3, reduceContextHotPath: qe2 }), n3 = Qe2.onDidChangeRules(() => {
            r3.rebuildAllCaches();
          });
          return Uu.push(n3), r3;
        }, Rt2 = (e2) => e2 ? (Tt2 ??= At2([So.homedir()], [bo()]), Tt2) : (It2 ??= At2(q2, void 0), It2);
        if (Uu.push(() => {
          It2?.dispose(), Tt2?.dispose(), Ct2?.dispose();
        }), Oe2) {
          const e2 = (0, f.q6)().with(g._O, k2);
          Promise.all(q2.map(async (t3) => {
            let r3;
            try {
              r3 = (await le2.exec(e2, t3, ["rev-parse", "--show-toplevel"], { caller: "pushGitWorkspaceCaches" })).stdout.trim();
            } catch {
              r3 = void 0;
            }
            const n3 = r3 ? await (0, L.gTO)(e2, le2, r3) : void 0;
            return { workspacePath: t3, repoPath: r3, remoteUrl: n3, isOriginBacked: (0, L.a82)(n3) };
          })).then((e3) => H.cursor.pushGitWorkspaceCaches(e3)).catch((e3) => {
            console.warn("[cursor-agent-exec] Failed to push git workspace caches", e3);
          });
        }
        const Mt2 = H.cursor.onDidChangeThirdPartyExtensibilityEnabled(() => {
          var e2 = [];
          try {
            const t4 = (0, f.q6)().with(g._O, k2).with($.Fm, x2), r4 = bu(e2, (0, h.VI)(t4.withName("thirdPartyExtensibilityEnabledChanged")));
            Qe2.reload(r4.ctx), rt2.reload();
          } catch (e3) {
            var t3 = e3, r3 = true;
          } finally {
            Su(e2, t3, r3);
          }
        });
        Uu.push(() => Mt2.dispose());
        const Jt2 = (function(e2, t3) {
          const r3 = [];
          let n3;
          const s3 = async () => {
            try {
              const r4 = await (0, L.myO)(e2, t3);
              H.cursor.pushSandboxNetworkFileEntries(r4);
            } catch (e3) {
              console.warn("[cursor-agent-exec] Failed to read sandbox network file entries", e3);
            }
          }, o3 = () => {
            void 0 !== n3 && clearTimeout(n3), n3 = setTimeout(() => {
              n3 = void 0, s3();
            }, 500);
          }, i3 = (e3) => {
            const t4 = H.workspace.createFileSystemWatcher(new H.RelativePattern(H.Uri.file((0, ko.join)(e3, ".cursor")), "sandbox.json"));
            t4.onDidChange(o3), t4.onDidCreate(o3), t4.onDidDelete(o3), r3.push(t4);
          };
          return i3(e2), t3 && i3(t3), s3(), { dispose() {
            void 0 !== n3 && clearTimeout(n3);
            for (const e3 of r3) e3.dispose();
          } };
        })(So.homedir(), q2[0]);
        let Ot2, Bt2;
        Uu.push(() => Jt2.dispose());
        try {
          if (await H.cursor.checkFeatureGate("shell_exec_output_backpressure")) {
            const e2 = await H.cursor.getDynamicConfigValue("shell_exec_output_backpressure_config");
            e2 && (Ot2 = { bufferOutputEvents: true, outputLimiterOptions: { flushIntervalMs: e2.outputLimiterFlushIntervalMs, maxBufferedBytes: e2.outputLimiterMaxBufferedBytes } }, Bt2 = { windowMs: e2.outputSuppressionWindowMs, minimumThresholdCharsPerSecond: e2.outputSuppressionThresholdCharsPerSecond, minChars: e2.outputSuppressionMinChars });
          }
        } catch {
          Ot2 = void 0, Bt2 = void 0;
        }
        let Dt2 = false;
        try {
          Dt2 = await H.cursor.checkFeatureGate("shell_exec_powershell_utf8_console");
        } catch {
        }
        const qt2 = (0, ko.join)(_e2, "canvases"), Nt2 = (0, ko.join)(p3, "dist", "agent-sdk"), Ft2 = new ma({ canvasesDir: qt2, sdkSourceDir: Nt2, tsResolveAnchor: p3 });
        Ft2.bootstrapReady.then((e2) => {
          void 0 === e2 && ee.error(E2, "Canvas SDK source missing from extension bundle");
        }, (e2) => {
          const t3 = (function(e3, t4) {
            return { errorName: e3 instanceof Error && e3.name.length > 0 ? e3.name : "UnknownError", errorMessage: sl(e3 instanceof Error ? e3.message : String(e3), t4) };
          })(e2, { canvasesDir: qt2, sdkSourceDir: Nt2 });
          ee.warn(E2, "Canvas dir bootstrap failed", { errorName: t3.errorName, errorMessage: t3.errorMessage });
        });
        const Ut2 = new Xi({ ignoreService: Le2, teamSettingsService: ce2, terminalProvider: kt2, createTerminalExecutor: te2, projectDir: _e2, workspacePaths: q2, gitExecutor: le2, grepProvider: Et2, diagnosticsProvider: $e2, getCanvasDiagnostics: (e2) => Ft2.getDiagnostics(e2), mcpLease: Ee2, getOrCreateMcpStateAccessor: Pt2, cursorRulesService: Qe2, subagentsService: rt2, codebaseReferenceProvider: je2, getOrCreateSharedRequestContextExecutor: Rt2, terminalPathHint: K2, hooksConfigTracker: Se2, adminNetworkControlsEnabled: true, mcpMetaToolEnabled: Te2, mcpMetaToolSlimDescriptors: Ce2, alwaysExposeVirtualMcpAuthTool: Pe2, mcpAllowlistLog: (e2) => H.cursor.logMcpAllowlist(e2), getMcpFileSystemOptions: (e2, t3) => St2.getMcpFileSystemOptions(e2, t3), shellOutputBackpressureOptions: Ot2, shellExecOutputSuppressionOptions: Bt2, powershellUtf8Console: Dt2 });
        !(function(e2) {
          qu.sessionExecManagerFactory = e2;
        })(Ut2), wu(t2, r2, { factory: Ut2, teamSettingsService: ce2, createTerminalExecutor: te2, workspacePaths: q2, loggerBackend: k2, metricsBackend: x2 }), w2();
        const { disposeProvider: Lt2 } = Kl({ context: t2, runtimeExtensionPath: p3, serviceCtx: E2 });
        Uu.push(Lt2), ee.info(E2, "cursor_agent_exec.startup.activation_latency", { durationMs: Date.now() - d3 });
      } catch (e2) {
        var d2 = e2, p2 = true;
      } finally {
        Su(n2, d2, p2);
      }
    }
    async function zu() {
      const e2 = Uu.splice(0);
      for (const t3 of e2) {
        const e3 = t3();
        if (e3 instanceof Promise) try {
          await e3;
        } catch {
        }
      }
      var t2;
      (t2 = qu).sessionExecManagerFactory = void 0, t2.activeGitExecutor = void 0, t2.activeMcpProvider = void 0;
    }
    const Wu = { activate: (Hu = { state: qu, activate: Gu, deactivate: zu }).activate, deactivate: Hu.deactivate, getGitExecutor: () => Hu.state.activeGitExecutor, getMcpProvider: () => Hu.state.activeMcpProvider, createAgentHostResourceProvider: (t2) => (function(t3, r2) {
      if (void 0 === t3) throw new Error("Cursor agent runtime is not active");
      if (void 0 !== r2.mcpLease && !(0, e.boZ)(r2.mcpLease)) throw new Error("createAgentHostResourceProvider received an mcpLease that does not satisfy the McpLease contract");
      const n2 = t3;
      n2.stampConflictNoticeFloor(r2.sessionId);
      const s2 = n2.createSessionExecManager(r2.sessionId, r2.approvalHandler, r2.elicitationHandler, r2.notifyFileChange, r2.sessionWorkspacePaths, r2.worktreeMainPath, r2.getPermissions, r2.onDidChangePermissions, r2.isGlassRoot, { acquireResolvedConflictNoticeKeys: true, backgroundWorkRegistry: r2.backgroundWorkRegistry, ...void 0 === r2.gitExecutor ? {} : { gitExecutor: r2.gitExecutor }, ...void 0 === r2.mcpLease ? {} : { mcpLease: r2.mcpLease } });
      return s2.baseResources.register(e.ryB, { execute: async (e2, t4) => gu.pT.fromBinary(await r2.conversationSearchHandler(t4.toBinary())) }), { register: (e2, t4) => s2.baseResources.register(e2, t4), get: (e2) => s2.resources.get(e2), entries: () => s2.resources.entries(), dispose: async () => {
        try {
          s2.unsubscribe(), s2.baseResources.dispose(), s2.terminalExecutor.dispose();
        } finally {
          n2.clearConflictDrain(r2.sessionId);
          for (const e2 of s2.acquiredConflictNoticeKeys) n2.releaseConflictNoticeKey(e2);
        }
      } };
    })(Hu.state.sessionExecManagerFactory, t2) };
    var Hu;
    let Ku = false;
    async function Vu(e2) {
      if (H.cursor.cursorAgentHostEnabled) {
        const n2 = (t2 = Wu, r2 = e2.extensionPath, { ...t2, extensionPath: r2 });
        e2.subscriptions.push(H.cursor.registerAgentHostRuntime(n2));
        if ((function(e3) {
          return e3.localLoopEnabled && !e3.moveExecEnabled;
        })({ moveExecEnabled: await Promise.resolve(H.cursor.checkFeatureGate(Ru)).catch(() => false), localLoopEnabled: await Promise.resolve(H.cursor.checkFeatureGate(Mu)).catch(() => false) })) {
          const { disposeProvider: t3 } = Kl({ context: e2, runtimeExtensionPath: e2.extensionPath, serviceCtx: (0, f.q6)() });
          e2.subscriptions.push({ dispose: t3 });
        }
        return;
      }
      var t2, r2;
      H.cursor.cursorAgentHostEnabled || (await Gu(e2), Ku = true);
    }
    async function Yu() {
      Ku && (Ku = false, await zu());
    }
  })();
  var __webpack_export_target__ = exports;
  for (var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
  __webpack_exports__.__esModule && Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
})();
