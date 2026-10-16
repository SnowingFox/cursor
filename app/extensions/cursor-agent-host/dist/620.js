"use strict";
exports.id = 620, exports.ids = [620], exports.modules = { 80620: (e, t, r) => {
  r.d(t, { createIdeGrepSessionOverrides: () => u });
  var o = r(91398), n = r(91105), i = r(59903), s = r(68388), a = r(65716);
  class c {
    constructor(e2, t2, r2 = 5e3) {
      this.ignoreService = e2, this.provider = t2, this.trackedStateTimeoutMs = r2, this.worktreeGuardByRootsKey = /* @__PURE__ */ new Map();
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
      const o2 = await this.provider();
      if (void 0 === o2) return;
      if (r2.type || true === r2.multiline || "count" === (r2.outputMode ?? "content")) return;
      const n2 = r2.sort ?? "modified";
      if (true === r2.sortAscending || "modified" !== n2 && "none" !== n2) return;
      const i2 = this.getWorktreeGuardInfo(t2);
      if ((0, s.fl)({ targetPath: r2.path, workspacePaths: t2, mainWorktreePath: i2?.mainWorktreePath })) throw new Error(s.PS);
      const a2 = r2.outputMode ?? "content", c2 = { path: r2.path, context: r2.context, contextBefore: r2.contextBefore, contextAfter: r2.contextAfter, literal: false, caseInsensitive: r2.caseInsensitive, multiline: r2.multiline, sort: "none" === n2 ? void 0 : n2, includes: void 0 !== r2.glob ? [r2.glob] : void 0, excludes: void 0 };
      try {
        if (await this.hasCursorIgnoreNegation()) return;
        return "content" === a2 ? await this.executeContentMode(o2, t2, r2.pattern, c2) : "files_with_matches" === a2 ? await this.executeFilesMode(o2, t2, r2.pattern, c2) : void 0;
      } catch {
        return;
      }
    }
    async executeContentMode(e2, t2, r2, o2) {
      const a2 = await e2.queryContent(t2, r2, o2);
      if (null === a2) return;
      const c2 = {};
      for (const [e3, t3] of Object.entries(a2)) {
        if (t3.truncated) return;
        const r3 = [];
        let o3 = t3.totalLines, a3 = t3.totalMatchedLines;
        for (const c3 of t3.byFile) {
          const t4 = c3.matches ?? [], u3 = await (0, n.yeE)((0, s.o1)(c3.file, e3));
          if (null !== u3 && await this.ignoreService.isGitIgnored(u3)) return;
          if (null === u3 || await this.isIndexedResultBlocked(u3)) {
            o3 -= t4.length, a3 -= t4.filter((e4) => !e4.isContextLine).length;
            continue;
          }
          const l = new i.uI({ file: c3.file, matches: t4.map((e4) => new i.dx({ lineNumber: e4.lineNumber, content: e4.content, isContextLine: e4.isContextLine })) });
          r3.push(l);
        }
        const u2 = new i.Zp({ matches: r3, totalLines: o3, totalMatchedLines: a3, clientTruncated: t3.truncated });
        c2[e3] = new i.vD({ result: { case: "content", value: u2 } });
      }
      return c2;
    }
    async executeFilesMode(e2, t2, r2, o2) {
      const a2 = await e2.queryContent(t2, r2, { ...o2, mode: "files_only" });
      if (null === a2) return;
      const c2 = {};
      for (const [e3, t3] of Object.entries(a2)) {
        if (t3.truncated) return;
        const r3 = [];
        let o3 = 0;
        for (const i2 of t3.byFile) {
          const t4 = await (0, n.yeE)((0, s.o1)(i2.file, e3));
          if (null !== t4 && await this.ignoreService.isGitIgnored(t4)) return;
          null === t4 || await this.isIndexedResultBlocked(t4) ? o3++ : r3.push(i2.file);
        }
        const a3 = new i.T7({ files: r3, totalFiles: t3.totalFiles - o3, clientTruncated: t3.truncated });
        c2[e3] = new i.vD({ result: { case: "files", value: a3 } });
      }
      return c2;
    }
    async isIndexedResultBlocked(e2) {
      const [t2, r2] = await Promise.all([this.ignoreService.isCursorIgnored(e2), this.ignoreService.isRepoBlocked(e2)]);
      return t2 || r2;
    }
    async hasCursorIgnoreNegation() {
      const e2 = await this.ignoreService.getCursorIgnoreMapping?.();
      if (void 0 === e2) return false;
      for (const t2 of Object.values(e2)) if (t2.some((e3) => e3.startsWith("!"))) return true;
      return false;
    }
    async getTrackedState(e2) {
      const t2 = this.provider();
      if (void 0 !== t2) try {
        const r2 = await (0, a.wj)(Promise.resolve(t2.getTrackedState(e2)), this.trackedStateTimeoutMs);
        if (null === r2) return;
        const o2 = {};
        for (const [e3, t3] of Object.entries(r2)) o2[e3] = { gitStatus: t3.gitStatus, gitBranchName: t3.gitBranchName };
        return o2;
      } catch {
        return;
      }
    }
  }
  function u(e2) {
    const t2 = new c(e2.ignoreService, () => o.cursor.getGrepProvider()), r2 = [...e2.workspacePaths];
    return t2.setWorktreeGuardInfo(r2, e2.worktreeMainPath ? { mainWorktreePath: e2.worktreeMainPath } : void 0), { overrides: { grepProvider: t2, ...e2.worktreeMainPath ? { worktreeMainPath: e2.worktreeMainPath } : {} } };
  }
} };
