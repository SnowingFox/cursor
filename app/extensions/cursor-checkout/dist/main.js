(() => {
  "use strict";
  var t = { d: (e2, r2) => {
    for (var i2 in r2) t.o(r2, i2) && !t.o(e2, i2) && Object.defineProperty(e2, i2, { enumerable: true, get: r2[i2] });
  }, o: (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), r: (t2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
  } }, e = {};
  t.r(e), t.d(e, { activate: () => x, deactivate: () => k });
  const r = require("vscode"), i = require("node:fs/promises"), a = require("node:os"), n = require("node:path"), s = 2, o = 29;
  function c(t2) {
    const e2 = t2?.trim().toLowerCase();
    if (e2) return /^(?:[0-9a-f]{40}|[0-9a-f]{64})$/.test(e2) ? e2 : void 0;
  }
  const h = /https?:\/\/\S+/gi, l = /[)"'<>,.;:\]}]$/;
  function u(t2) {
    const { url: e2, wrappers: r2 } = (function(t3) {
      let e3 = t3.length;
      for (; e3 > 0 && l.test(t3.slice(e3 - 1, e3)); ) e3 -= 1;
      return { url: t3.slice(0, e3), wrappers: t3.slice(e3) };
    })(t2), i2 = e2.search(/[?#]/), a2 = -1 === i2 ? e2 : e2.slice(0, i2), n2 = a2.indexOf("//") + 2, s2 = a2.slice(n2).search(/[/?#]/), o2 = -1 === s2 ? a2.length : n2 + s2, c2 = a2.lastIndexOf("@", o2 - 1);
    return c2 < n2 ? a2 + r2 : a2.slice(0, n2) + a2.slice(c2 + 1) + r2;
  }
  function d(t2) {
    return t2.replace(h, u);
  }
  function m(t2) {
    return `git ${t2.map(d).join(" ")}`;
  }
  const f = require("node:child_process"), w = require("node:util"), g = [["safe.bareRepository", "explicit"]], C = [["core.fsmonitor", "false"], ["core.hooksPath", a.devNull], ["core.attributesFile", a.devNull]];
  function b(t2, e2) {
    const r2 = (function(t3) {
      const e3 = t3.GIT_CONFIG_COUNT;
      if (void 0 === e3 || "" === e3) return 0;
      const r3 = Number.parseInt(String(e3), 10);
      return !Number.isFinite(r3) || r3 < 0 ? 0 : r3;
    })(t2), i2 = { ...t2 }, a2 = /* @__PURE__ */ new Set();
    for (let t3 = 0; t3 < r2; t3++) {
      const r3 = i2[`GIT_CONFIG_KEY_${t3}`];
      for (const [n3, s2] of e2) r3 === n3 && (i2[`GIT_CONFIG_VALUE_${t3}`] = s2, a2.add(n3));
    }
    let n2 = r2;
    for (const [t3, r3] of e2) a2.has(t3) || (i2[`GIT_CONFIG_KEY_${n2}`] = t3, i2[`GIT_CONFIG_VALUE_${n2}`] = r3, n2++);
    return n2 !== r2 && (i2.GIT_CONFIG_COUNT = String(n2)), i2;
  }
  function p(t2) {
    const e2 = { ...process.env, ...t2.spawnerEnv, LC_ALL: "en_US.UTF-8", LANG: "en_US.UTF-8", GIT_PAGER: "cat", ...t2.optionsEnv };
    return void 0 !== t2.command ? e2.VSCODE_GIT_COMMAND = t2.command : delete e2.VSCODE_GIT_COMMAND, b(e2, (function(t3) {
      const e3 = "allow-hooks" === t3 ? C.filter(([t4]) => "core.hooksPath" !== t4) : C;
      return [...g, ...e3];
    })(t2.repoConfigExecution ?? "block"));
  }
  const y = (0, w.promisify)(f.execFile);
  function v(t2) {
    const e2 = /* @__PURE__ */ new Set(["-c", "-C", "--git-dir", "--work-tree"]);
    for (let r2 = 0; r2 < t2.length; r2++) {
      const i2 = t2[r2];
      if (e2.has(i2)) r2++;
      else if (!i2.startsWith("-")) return i2;
    }
  }
  function S(t2, e2) {
    return p({ command: v(t2), optionsEnv: e2 });
  }
  const G = ["--no-optional-locks", "status", "--porcelain"];
  class E {
    constructor(t2) {
      this.workspacePaths = t2, this.recentlyWarmedBranches = /* @__PURE__ */ new Map();
    }
    getCwd() {
      return this.workspacePaths[0] ?? r.workspace.workspaceFolders?.[0]?.uri.fsPath ?? a.homedir();
    }
    normalizeRemoteName(t2) {
      const e2 = t2?.trim() || "origin";
      if (e2.startsWith("-")) throw new Error(`Invalid remote name: ${e2}`);
      return e2;
    }
    gitLocaleEnv(t2) {
      return { ...process.env, LC_ALL: "en_US.UTF-8", LANG: "en_US.UTF-8", ...t2 };
    }
    formatGitCommandError(t2, e2) {
      const r2 = e2 instanceof Error ? e2.message : String(e2), i2 = new Error(`${m(t2)}: ${r2}`);
      if (e2 && "object" == typeof e2) {
        const t3 = e2;
        "string" == typeof t3.stderr && Object.assign(i2, { stderr: t3.stderr }), "string" == typeof t3.stdout && Object.assign(i2, { stdout: t3.stdout }), void 0 !== t3.code && Object.assign(i2, { code: t3.code });
      }
      return i2;
    }
    async executeGitCommandStable(t2, e2, r2, i2) {
      try {
        const { stdout: a2 } = await (async function(t3, e3, r3) {
          const { env: i3, encoding: a3 = "utf8", ...n2 } = r3 ?? {}, s2 = await y(t3, e3, { ...n2, encoding: a3, env: S(e3, i3) });
          return { stdout: String(s2.stdout), stderr: String(s2.stderr) };
        })("git", e2, { cwd: t2, env: this.gitLocaleEnv(i2), maxBuffer: 67108864, signal: r2 });
        return a2 ?? "";
      } catch (t3) {
        throw this.formatGitCommandError(e2, t3);
      }
    }
    async workingTreeIsDirty(t2, e2) {
      const r2 = [...G];
      return await new Promise((i2, a2) => {
        const n2 = (function(t3, e3, r3) {
          const { env: i3, ...a3 } = r3 ?? {};
          return (0, f.spawn)(t3, e3, { ...a3, env: S(e3, i3) });
        })("git", r2, { cwd: t2, env: this.gitLocaleEnv() });
        let s2 = false, o2 = false, c2 = "";
        const h2 = (t3) => {
          s2 || (s2 = true, e2?.removeEventListener("abort", l2), t3());
        }, l2 = () => {
          n2.kill("SIGTERM");
        };
        e2?.aborted ? n2.kill("SIGTERM") : e2?.addEventListener("abort", l2);
        const u2 = (t3) => "string" == typeof t3 ? t3 : t3.toString("utf8");
        n2.stderr.on("data", (t3) => {
          c2.length >= 65536 || (c2 += u2(t3), c2.length > 65536 && (c2 = c2.slice(0, 65536)));
        }), n2.stdout.on("data", (t3) => {
          o2 || "" !== u2(t3).trim() && (o2 = true, n2.stdout.destroy(), n2.kill("SIGTERM"));
        }), n2.on("error", (t3) => {
          h2(o2 ? () => i2(true) : () => a2(this.formatGitCommandError(r2, t3)));
        }), n2.on("close", (t3, n3) => {
          if (o2) return void h2(() => i2(true));
          if (e2?.aborted) return void h2(() => a2(new Error("Aborting checkout")));
          if (0 === t3) return void h2(() => i2(false));
          const s3 = c2.trim() || `exited ${t3 ?? n3 ?? "unknown"}`;
          h2(() => a2(this.formatGitCommandError(r2, Object.assign(new Error(s3), { stderr: c2, code: t3 }))));
        });
      });
    }
    isNonFastForwardPushError(t2) {
      if (!(t2 instanceof Error && "stderr" in t2 && "string" == typeof t2.stderr)) return false;
      const e2 = t2.stderr;
      return e2.includes("[rejected]") && (e2.includes("(non-fast-forward)") || e2.includes("(fetch first)"));
    }
    normalizeBranchName(t2) {
      let e2 = t2.trim();
      if (e2.startsWith("refs/heads/") ? e2 = e2.slice(11) : e2.startsWith("heads/") ? e2 = e2.slice(6) : e2.startsWith("remotes/") && (e2 = e2.slice(8)), e2.startsWith("origin/") && (e2 = e2.slice(7)), e2.startsWith("-")) throw new Error(`Invalid branch name: ${e2}`);
      if (0 === e2.length) throw new Error("Invalid branch name: empty");
      return e2;
    }
    throwIfCancelled(t2) {
      if (t2?.isCancellationRequested) throw new Error("Aborting checkout");
    }
    resolveCurrentBranchName(t2) {
      const e2 = t2.trim();
      if (!e2 || "HEAD" === e2) throw new Error("Current checkout is detached; cannot push without a branch");
      return this.normalizeBranchName(e2);
    }
    normalizeCurrentBranchRef(t2) {
      let e2 = t2.trim();
      return e2.startsWith("refs/remotes/") && (e2 = e2.slice(13)), e2;
    }
    setBranchWarmTimestamp(t2) {
      this.recentlyWarmedBranches.set(t2, Date.now());
    }
    wasBranchWarmedRecently(t2) {
      const e2 = this.recentlyWarmedBranches.get(t2);
      return void 0 !== e2 && (!(Date.now() - e2 >= 3e4) || (this.recentlyWarmedBranches.delete(t2), false));
    }
    async commitExistsLocally(t2, e2, r2) {
      try {
        return await this.executeGitCommandStable(t2, ["cat-file", "-e", `${e2}^{commit}`], r2), true;
      } catch (t3) {
        if (r2.aborted) throw t3;
        return false;
      }
    }
    async resolveGitSupportsNoWriteFetchHead(t2, e2) {
      if (void 0 !== this.gitSupportsNoWriteFetchHeadCached) return this.gitSupportsNoWriteFetchHeadCached;
      try {
        const r2 = await this.executeGitCommandStable(t2, ["--version"], e2);
        return this.gitSupportsNoWriteFetchHeadCached = (function(t3) {
          if (!t3) return false;
          const e3 = /git version (\d+)\.(\d+)/.exec(t3);
          if (!e3) return false;
          const r3 = Number(e3[1]), i2 = Number(e3[2]);
          return r3 > s || r3 === s && i2 >= o;
        })(r2), this.gitSupportsNoWriteFetchHeadCached;
      } catch (t3) {
        if (e2?.aborted) throw t3;
        return false;
      }
    }
    async gitFetchArgs(t2, e2, r2) {
      return await this.resolveGitSupportsNoWriteFetchHead(t2, r2) ? [...e2, "--no-write-fetch-head"] : [...e2];
    }
    async fetchCommitSha(t2, e2, r2) {
      if (await this.commitExistsLocally(t2, e2, r2)) return true;
      try {
        return await this.executeGitCommandStable(t2, await this.gitFetchArgs(t2, ["fetch", "origin", e2, "--no-tags", "--recurse-submodules=no"], r2), r2), true;
      } catch (t3) {
        if (r2.aborted) throw t3;
        return false;
      }
    }
    async getLocalBranchSha(t2, e2, r2) {
      try {
        return c(await this.executeGitCommandStable(t2, ["rev-parse", "--verify", `refs/heads/${e2}`], r2));
      } catch (t3) {
        if (r2.aborted) throw t3;
        return;
      }
    }
    async isCommitAncestor(t2, e2, r2, i2) {
      try {
        return await this.executeGitCommandStable(t2, ["merge-base", "--is-ancestor", e2, r2], i2), true;
      } catch (t3) {
        if (i2.aborted) throw t3;
        return false;
      }
    }
    async checkoutFetchedCommit(t2, e2, r2, i2) {
      const a2 = await this.getLocalBranchSha(t2, e2, i2);
      if (a2 !== r2) return a2 ? await this.isCommitAncestor(t2, a2, r2, i2) ? void await this.executeGitCommandStable(t2, ["checkout", "--quiet", "-B", e2, r2], i2) : void await this.executeGitCommandStable(t2, ["checkout", "--quiet", "--detach", r2], i2) : void await this.executeGitCommandStable(t2, ["checkout", "--quiet", "-b", e2, r2], i2);
      await this.executeGitCommandStable(t2, ["checkout", "--quiet", e2], i2);
    }
    async warmCheckoutBranch(t2, e2) {
      const r2 = this.getCwd(), i2 = this.normalizeBranchName(t2);
      this.throwIfCancelled(e2);
      const a2 = new AbortController(), n2 = e2?.onCancellationRequested(() => {
        a2.abort();
      });
      e2?.isCancellationRequested && a2.abort();
      try {
        await this.executeGitCommandStable(r2, await this.gitFetchArgs(r2, ["fetch", "origin", `+refs/heads/${i2}:refs/remotes/origin/${i2}`, "--no-tags", "--recurse-submodules=no"], a2.signal), a2.signal), this.setBranchWarmTimestamp(i2);
      } finally {
        n2?.dispose();
      }
    }
    async checkoutBranch(t2, e2, r2, i2) {
      const a2 = this.getCwd(), n2 = this.normalizeBranchName(e2), s2 = c(r2?.commitSha), o2 = new AbortController(), h2 = i2?.onCancellationRequested(() => {
        o2.abort();
      });
      i2?.isCancellationRequested && o2.abort();
      try {
        if (this.throwIfCancelled(i2), await this.workingTreeIsDirty(a2, o2.signal)) {
          const r3 = await t2.resolveConflict();
          if (this.throwIfCancelled(i2), "stash" === r3) await this.executeGitCommandStable(a2, ["stash", "--include-untracked"], o2.signal);
          else if ("commit" === r3) await this.executeGitCommandStable(a2, ["add", "-A"], o2.signal), await this.executeGitCommandStable(a2, ["commit", "-m", `checkpoint before checking out ${e2}`], o2.signal);
          else {
            if ("discard" !== r3) throw new Error("Aborting checkout");
            await this.executeGitCommandStable(a2, ["reset", "--quiet", "--hard", "HEAD"], o2.signal), await this.executeGitCommandStable(a2, ["clean", "--quiet", "-fd"], o2.signal);
          }
        }
        if (r2?.localOnly) {
          const t3 = `refs/heads/${n2}`;
          return await this.executeGitCommandStable(a2, ["rev-parse", "--verify", t3], o2.signal), void await this.executeGitCommandStable(a2, ["checkout", "--quiet", n2], o2.signal);
        }
        if (s2 && await this.fetchCommitSha(a2, s2, o2.signal)) return void await this.checkoutFetchedCommit(a2, n2, s2, o2.signal);
        this.wasBranchWarmedRecently(n2) || (await this.executeGitCommandStable(a2, await this.gitFetchArgs(a2, ["fetch", "origin", `+refs/heads/${n2}:refs/remotes/origin/${n2}`, "--no-tags", "--recurse-submodules=no"], o2.signal), o2.signal), this.setBranchWarmTimestamp(n2));
        let c2 = false;
        const h3 = `refs/heads/${n2}`, l2 = `refs/remotes/origin/${n2}`;
        try {
          await this.executeGitCommandStable(a2, ["rev-parse", "--verify", h3], o2.signal), c2 = true;
        } catch {
          c2 = false;
        }
        if (c2) await this.executeGitCommandStable(a2, ["checkout", "--quiet", n2], o2.signal);
        else {
          let t3 = false;
          try {
            await this.executeGitCommandStable(a2, ["rev-parse", "--verify", l2], o2.signal), t3 = true;
          } catch {
            t3 = false;
          }
          if (!t3) throw new Error(`Remote branch not found on origin: ${n2}`);
          await this.executeGitCommandStable(a2, ["checkout", "--quiet", "-b", n2, `origin/${n2}`], o2.signal);
        }
        await this.executeGitCommandStable(a2, ["merge", "--ff-only", "--quiet", `origin/${n2}`], o2.signal);
      } finally {
        h2?.dispose();
      }
    }
    async ensureCurrentBranchPushed(t2, e2) {
      const r2 = t2?.cwd?.trim() || this.getCwd(), i2 = this.normalizeRemoteName(t2?.remoteName), a2 = new AbortController(), n2 = e2?.onCancellationRequested(() => {
        a2.abort();
      });
      e2?.isCancellationRequested && a2.abort();
      try {
        this.throwIfCancelled(e2);
        const n3 = t2?.branchName?.trim(), s2 = n3 || this.resolveCurrentBranchName(this.normalizeCurrentBranchRef(await this.executeGitCommandStable(r2, ["rev-parse", "--abbrev-ref", "HEAD"], a2.signal))), o2 = ["push", i2, `${n3 ? `refs/heads/${s2}` : "HEAD"}:refs/heads/${s2}`];
        if (true === t2?.forcePush && o2.push("--force-with-lease"), !n3) {
          const t3 = `refs/remotes/${i2}/${s2}`;
          let e3 = false;
          try {
            const i3 = await this.executeGitCommandStable(r2, ["rev-list", "--count", `${t3}..HEAD`], a2.signal);
            e3 = Number(i3.trim()) > 0;
          } catch {
            e3 = true;
          }
          if (!e3) return;
        }
        try {
          await this.executeGitCommandStable(r2, o2, a2.signal, { LC_ALL: "C" });
        } catch (t3) {
          if (this.isNonFastForwardPushError(t3)) throw new Error(`Your branch "${s2}" is behind ${i2}. Pull the latest changes, then try moving to cloud again.`);
          throw t3;
        }
      } finally {
        n2?.dispose();
      }
    }
    async snapshotAndPushCurrentBranch(t2, e2) {
      const r2 = t2?.cwd?.trim() || this.getCwd(), s2 = this.normalizeRemoteName(t2?.remoteName), o2 = t2?.commitMessage ?? "Cursor: Apply local changes for cloud agent", c2 = new AbortController(), h2 = e2?.onCancellationRequested(() => {
        c2.abort();
      });
      e2?.isCancellationRequested && c2.abort();
      try {
        this.throwIfCancelled(e2);
        const h3 = await this.executeGitCommandStable(r2, ["rev-parse", "--abbrev-ref", "HEAD"], c2.signal), l2 = (this.resolveCurrentBranchName(this.normalizeCurrentBranchRef(h3)), Date.now()), u2 = Math.random().toString(36).substring(2, 7), d2 = `${t2?.branchPrefix?.trim() || "cursor/"}cloud-agent-${l2}-${u2}`, m2 = n.join(a.tmpdir(), `cursor-index-${d2.replace(/\//g, "-")}-${process.pid}-${u2}`), f2 = { GIT_INDEX_FILE: m2 };
        try {
          await this.executeGitCommandStable(r2, ["read-tree", "HEAD"], c2.signal, f2), await this.executeGitCommandStable(r2, ["add", "-A", "--", "."], c2.signal, f2);
          const t3 = (await this.executeGitCommandStable(r2, ["write-tree"], c2.signal, f2)).trim();
          if (t3 === (await this.executeGitCommandStable(r2, ["rev-parse", "HEAD^{tree}"], c2.signal)).trim()) throw new Error("No changes were captured in the snapshot worktree");
          const e3 = (await this.executeGitCommandStable(r2, ["commit-tree", t3, "-p", "HEAD", "-m", o2], c2.signal)).trim();
          await this.executeGitCommandStable(r2, ["update-ref", `refs/heads/${d2}`, e3], c2.signal), await this.executeGitCommandStable(r2, ["push", "--set-upstream", s2, d2], c2.signal);
        } finally {
          try {
            await (0, i.unlink)(m2);
          } catch {
          }
        }
        if (t2?.stashLocalChangesAfterPush) try {
          const e3 = t2.stashMessage ?? "Cursor: moved local changes to cloud agent";
          await this.executeGitCommandStable(r2, ["stash", "push", "--include-untracked", "-m", e3], c2.signal);
        } catch {
        }
        return d2;
      } finally {
        h2?.dispose();
      }
    }
    async hasDirtyWorkingTree(t2) {
      const e2 = this.getCwd();
      return this.throwIfCancelled(t2), this.workingTreeIsDirty(e2);
    }
  }
  function x(t2) {
    const e2 = (r.workspace.workspaceFolders ?? []).map((t3) => t3.uri.fsPath), i2 = new E(e2), a2 = r.cursor.registerCheckoutProvider(i2);
    t2.subscriptions.push(a2);
  }
  function k() {
  }
  var N = exports;
  for (var $ in e) N[$] = e[$];
  e.__esModule && Object.defineProperty(N, "__esModule", { value: true });
})();
