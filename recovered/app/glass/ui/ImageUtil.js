// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ImageUtil.js range:25723439..25737960
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.732Z
qJ = L({ "ImageUtil.js"() {
  "use strict";
  E(), Ga(), tB(), Ki(), Di(), Lr(), fn(), Xo(), Uig(), ras = 1024 * 1024, tfg = 10 * 1024 * 1024, SIi = 1024, sas = "image/svg+xml", RAn = "image/png", eul = /* @__PURE__ */ new Set(["image/heic", "image/heif", "image/heic-sequence", "image/heif-sequence"]);
} });
function nfg(t, e) {
  const n = t.workspaceIdentifier;
  if (!$l(n)) return;
  const i = n.uri.scheme === Ot.vscodeRemote ? KR(n.uri, true, true) : n.uri.fsPath || n.uri.path, r = (s) => gGt(s, { trimTrailingSlashes: true, lowercaseOnWindows: true, emptyPathFallback: "/" });
  return r(e) === r(i) ? i : void 0;
}
function tul(t) {
  switch (t.kind) {
    case "ineligible":
      return false;
    case "eligible":
      return t.offered;
    default:
      return t;
  }
}
function ifg(t) {
  return { phase: t.phase, agentBranchExistsLocally: t.agentBranchExistsLocally, hasRepoLabel: t.copy?.repoLabel !== void 0, hasCustomTitle: t.copy?.title !== void 0, hasCustomDescription: t.copy?.description !== void 0, respectDontAskAgain: t.respectDontAskAgain, allowAncestorShortCircuit: t.allowAncestorShortCircuit, explicitTarget: t.explicitTarget, offeredMoveToCloud: tul(t.moveToCloud) };
}
function rfg(t, e) {
  t.trackEvent("glass.branch_mismatch_tray.shown", ifg(e));
}
function uVt(t, e, n, i) {
  t.trackEvent("glass.branch_mismatch_tray.action", { ...ifg(n), action: e, ...i !== void 0 ? { conflictResolution: i } : {} });
}
async function Z1k({ branchAncestryCache: t, gitContextService: e, normalizedAgentBranch: n, repoPath: i }) {
  const r = t.value?.agentBranchExistsLocally;
  return r !== void 0 ? r : i !== void 0 ? await sfg({ gitContextService: e, normalizedBranch: n, repoPath: i }) ?? true : true;
}
async function Q1k(t, e, n, i, r) {
  let s;
  try {
    const { IAgentHostService: l } = await Promise.resolve().then(() => (SAn(), Vll));
    s = t.instantiationService.invokeFunction((c) => c.get(l));
  } catch (l) {
    return e.warn("composer", "stopHostTurn: agent host service unavailable", { composerId: n, turnId: i, error: String(l) }), false;
  }
  s.noteLocalStop(n, i);
  const o = jJ.USER_STOP;
  let a = false;
  try {
    const l = await s.cancelQueuedTurn(new jTt({ sessionId: n, turnId: i, reason: r, initiatedBy: o }).toBinary());
    a ||= qrs.fromBinary(l).cancelled;
  } catch (l) {
    e.warn("composer", "stopHostTurn: cancelling the queued host turn failed", { composerId: n, turnId: i, error: String(l) });
  }
  try {
    const l = await s.interruptTurn(new JPe({ sessionId: n, turnId: i, reason: r, initiatedBy: o }).toBinary());
    a ||= fEi.fromBinary(l).interrupted;
  } catch (l) {
    e.warn("composer", "stopHostTurn: interrupting the host turn failed", { composerId: n, turnId: i, error: String(l) });
  }
  return a;
}
function J1k(t) {
  const e = t instanceof Error ? t.message : String(t);
  return e.includes("Needed a single revision") || e.includes("not a valid object name") || e.includes("unknown revision or path not in the working tree") || e.includes("ambiguous argument");
}
async function sfg({ gitContextService: t, normalizedBranch: e, repoPath: n }) {
  if (n === void 0 || e === "") return false;
  try {
    return await t.resolveGitRevision({ cwd: n, revision: `refs/heads/${e}`, verify: true }), true;
  } catch (i) {
    return J1k(i) ? false : void 0;
  }
}
function ekk(t) {
  return typeof t == "object" && t !== null && "type" in t && t.type === mo.QUEUING;
}
async function kIi(t) {
  const e = t.workspace.value;
  if (e !== void 0) return e;
  try {
    return await _$(t, Lc.Git, hfg);
  } catch {
    return;
  }
}
function nul(t, e) {
  return oS(Uqr({ repoPath: e, trackedGitRepos: t.data.trackedGitRepos })?.branchName);
}
async function wIi({ loadedAgent: t, branchMismatchReactive: e, workspace: n, copy: i, explicitTarget: r, moveToCloud: s }) {
  const o = t.composerDataHandle.data.workspaceIdentifier, a = n.instantiationService.invokeFunction((y) => y.get(aC)), l = r?.repoPath.trim() || (o && $l(o) ? a.getRepository(o.uri)?.provider.rootUri?.fsPath : void 0), c = oS(r?.branchName) ?? nul(t.composerDataHandle, l);
  if (!c || !l) throw new Error("This agent is not associated with a branch yet.");
  const { analyticsService: u, checkoutProviderService: d, gitContextService: h } = n.instantiationService.invokeFunction((y) => ({ analyticsService: y.get(Qr), checkoutProviderService: y.get(Rze), gitContextService: y.get(Jv) })), p = oS(l ? h.getCachedCurrentBranch({ cwd: l }) : h.getCachedCurrentBranch()) ?? "", g = oas(i, r?.repoPath), f = (y) => {
    e.set({ currentBranch: p, agentBranch: c, agentBranchExistsLocally: true, phase: "checking-out", checkingOutOperation: y, copy: g, moveToCloud: s, dismiss: () => {
    }, resolve: () => {
    } });
  };
  f("checkout");
  const _ = await sfg({ gitContextService: h, normalizedBranch: c, repoPath: l }) ?? false;
  let b = false;
  try {
    await d.checkout({ resolveConflict: () => new Promise((y) => {
      const S = { agentBranchExistsLocally: _, allowAncestorShortCircuit: false, copy: g, explicitTarget: r !== void 0, moveToCloud: s, phase: "conflict", respectDontAskAgain: false };
      rfg(u, S);
      const k = () => {
        uVt(u, "conflict_cancel", S, "abort"), e.set(null), y("abort");
      };
      e.set({ currentBranch: p, agentBranch: c, agentBranchExistsLocally: _, phase: "conflict", copy: g, moveToCloud: s, dismiss: k, resolve: () => {
      }, conflictResolve: (C) => {
        if (!(C === "cloud" && !tul(s))) {
          if (uVt(u, C === "abort" ? "conflict_cancel" : C === "cloud" ? "move_to_cloud" : "conflict_continue", S, C), C === "cloud") {
            b = true, e.set(null), y("abort");
            return;
          }
          C === "abort" ? e.set(null) : f(C), y(C);
        }
      } });
    }) }, c, _ ? { localOnly: true } : void 0);
  } catch (y) {
    if (b) return { status: "movedToCloud" };
    const S = y instanceof Error ? y.message : String(y), k = ofg(S), { notificationService: C, structuredLogService: T } = n.instantiationService.invokeFunction((A) => ({ notificationService: A.get(Wr), structuredLogService: A.get(wh) })), I = afg(k, c);
    throw I !== void 0 && C.error(I), k.category !== "user_aborted" && T.error("git", `checkoutAssociatedBranch: ${k.category}`, void 0, { category: k.category, localOnly: _, branchExistsLocally: _, hasRepoPath: l !== void 0, source: "checkoutAssociatedBranchWithTrayConflictResolution" }), y;
  } finally {
    e.set(null);
  }
  return b ? { status: "movedToCloud" } : { status: "checkedOut" };
}
function ofg(t) {
  if (t === "Aborting checkout") return { category: "user_aborted" };
  const e = wcg(t);
  return e !== void 0 ? { category: "worktree_conflict", worktreePath: e } : Tal(t) ? { category: "remote_not_found" } : Eal(t) ? { category: "diverged_no_ff" } : Ial(t) ? { category: "dirty_working_tree" } : { category: "unknown" };
}
function afg(t, e) {
  switch (t.category) {
    case "user_aborted":
      return;
    case "worktree_conflict":
      return `Branch "${e}" is already checked out in another worktree at ${t.worktreePath}.`;
    case "remote_not_found":
      return `Branch "${e}" does not exist on the origin remote.`;
    case "diverged_no_ff":
      return `Branch "${e}" has diverged from origin and cannot be fast-forwarded.`;
    case "dirty_working_tree":
    case "unknown":
      return `Failed to checkout branch "${e}".`;
  }
}
async function lfg(t, e = t.workspaceFactory.workspace.value) {
  if (!e) throw new Error(`Agent ${t.agentId} has no workbench`);
  const n = t.composerDataHandle.data.workspaceIdentifier;
  if (!n || !$l(n)) throw new Error("This agent is not associated with a branch yet.");
  const r = e.instantiationService.invokeFunction((c) => c.get(aC)).getRepository(n.uri)?.provider.rootUri?.fsPath, s = nul(t.composerDataHandle, r);
  if (!s) throw new Error("This agent is not associated with a branch yet.");
  const { checkoutProviderService: o, notificationService: a, quickInputService: l } = e.instantiationService.invokeFunction((c) => ({ checkoutProviderService: c.get(Rze), notificationService: c.get(Wr), quickInputService: c.get(Cl) }));
  try {
    await o.checkout({ resolveConflict: async () => {
      const c = [{ label: "Stash Changes", description: "Save changes to a stash and restore them later", id: "stash" }, { label: "Commit Changes", description: "Create a checkpoint commit with your current changes", id: "commit" }, { label: "Discard Changes", description: "Permanently discard your current changes before switching branches", id: "discard" }, { label: "Cancel", description: "Cancel the checkout operation", id: CHe }], u = `Local changes detected before checking out ${s}.`, d = { description: u, placeHolder: u, ignoreFocusLost: true };
      return (await l.pick(c, d))?.id ?? CHe;
    } }, s);
  } catch (c) {
    console.error("[LocalAgentControllers] Failed to checkout branch", c);
    const u = c instanceof Error ? c.message : String(c), d = ofg(u), h = afg(d, s);
    throw h !== void 0 && a.error(h), c;
  }
}
async function tkk(t, e, n = t.workspaceFactory.workspace.value) {
  if (!n) throw new Error(`Agent ${t.agentId} has no workbench`);
  const { gitContextService: i, scmService: r } = n.instantiationService.invokeFunction((l) => ({ gitContextService: l.get(Jv), scmService: l.get(aC) }));
  let s = e?.trim();
  if (!s) {
    const l = t.composerDataHandle.data.workspaceIdentifier;
    if (!l || !$l(l)) throw new Error("Select a repository in the Changes panel before linking a branch.");
    s = r.getRepository(l.uri)?.provider.rootUri?.fsPath;
  }
  if (!s) throw new Error("Could not resolve a git repository for this workspace.");
  const o = oS(await i.getCurrentBranch({ cwd: s }));
  if (!o) throw new Error("Could not determine the current branch.");
  const a = $ae(s, o, Date.now(), t.composerDataHandle.data.trackedGitRepos);
  t.composerDataHandle.setData("trackedGitRepos", a);
}
function iul(t, e, n) {
  try {
    t.instantiationService.invokeFunction((r) => r.get(wh)).warn("composer", "postBranchSuccessSideEffect", { sideEffect: e, hasRepoPath: n.length > 0 });
  } catch {
  }
}
function cfg(t, e, n, i) {
  try {
    t.composerDataHandle.setData("trackedGitRepos", $ae(n, i, Date.now(), t.composerDataHandle.data.trackedGitRepos));
  } catch {
    iul(e, "composerBranchSelection", n);
  }
  try {
    t.agentEnvironment.recordBranchSelection?.(n, i);
  } catch {
    iul(e, "environmentBranchSelection", n);
  }
}
async function nkk(t, e, n) {
  try {
    await t.agentEnvironment.refreshBranchOptions?.(n);
  } catch {
    iul(e, "refreshBranchOptions", n);
  }
}
function ikk(t) {
  const e = t?.trim();
  if (!e) return;
  const n = Ku(e);
  return n.length > 0 ? n : e;
}
function oas(t, e) {
  const n = ikk(e);
  return n ? { ...t, repoLabel: t?.repoLabel ?? n } : t;
}
function ufg(t) {
  switch (t.status) {
    case "checkedOut":
      return { success: true, status: "checked-out" };
    case "movedToCloud":
      return { success: true, status: "move-to-cloud" };
    default:
      return t;
  }
}
function rkk(t) {
  switch (t.kind) {
    case "ineligible":
      return t;
    case "eligible":
      return { kind: "eligible", offered: false };
    default:
      return t;
  }
}
async function rul(t, e, n, i, r, s) {
  const o = t.composerDataHandle.data.workspaceIdentifier, { scmService: a } = n.instantiationService.invokeFunction((b) => ({ scmService: b.get(aC) })), l = s?.repoPath.trim() || (o && $l(o) ? a.getRepository(o.uri)?.provider.rootUri?.fsPath : void 0), c = oS(s?.agentBranch) ?? nul(t.composerDataHandle, l);
  if (!c) return { kind: "no-mismatch" };
  const { analyticsService: u, gitContextService: d, reactiveStorageService: h } = n.instantiationService.invokeFunction((b) => ({ analyticsService: b.get(Qr), gitContextService: b.get(Jv), reactiveStorageService: b.get(sa) })), p = oS(l ? await d.getCurrentBranch({ cwd: l }).catch(() => {
  }) : await d.getCurrentBranch().catch(() => {
  }));
  if (!p || p === c) return { kind: "no-mismatch" };
  if (r.allowAncestorShortCircuit && !s) {
    const b = i.value;
    if (b == null) return { kind: "no-mismatch" };
    if (b.isAncestor === true) return { kind: "no-mismatch" };
  }
  if (r.respectDontAskAgain && h.applicationUserPersistentStorage.dialogDontAskAgainPreferences?.[sul]) return { kind: "no-mismatch" };
  const g = await Z1k({ branchAncestryCache: i, gitContextService: d, normalizedAgentBranch: c, repoPath: l }), f = r.moveToCloud, _ = r.onDismiss === "cancel" ? { kind: "cancel" } : { kind: "continue" };
  return new Promise((b) => {
    const y = oas(r.copy, s?.repoPath), S = { agentBranchExistsLocally: g, allowAncestorShortCircuit: r.allowAncestorShortCircuit, copy: y, explicitTarget: s !== void 0, moveToCloud: f, phase: "decision", respectDontAskAgain: r.respectDontAskAgain }, k = () => {
      const C = e.value;
      if (C) {
        if (C.conflictResolve?.("abort"), C.phase === "decision") {
          uVt(u, "dismiss", S, void 0), e.set(null), b(_);
          return;
        }
        e.set(null), b(_);
      }
    };
    rfg(u, S), e.set({ currentBranch: p, agentBranch: c, agentBranchExistsLocally: g, phase: "decision", copy: y, respectDontAskAgain: r.respectDontAskAgain, moveToCloud: f, dismiss: k, resolve: (C) => {
      C.kind === "move-to-cloud" && !tul(f) || (C.kind === "checkout" ? (uVt(u, "checkout", S, void 0), e.set({ currentBranch: p, agentBranch: c, agentBranchExistsLocally: g, phase: "checking-out", checkingOutOperation: "checkout", copy: y, respectDontAskAgain: r.respectDontAskAgain, moveToCloud: f, dismiss: k, resolve: () => {
      } }), b(C)) : (C.kind === "continue" ? uVt(u, "stay_current", S, void 0) : C.kind === "dont-ask-again" ? uVt(u, "dont_ask_again", S, void 0) : C.kind === "move-to-cloud" && uVt(u, "move_to_cloud", S, void 0), e.set(null), b(C)));
    } });
  });
}
async function dfg(t, e, n, i) {
  if (n === i) return { repoPath: e, currentBranch: i, isAncestor: true, agentBranchExistsLocally: true };
  if (await t.executeGitCommand(e, ["merge-base", "--is-ancestor", n, "HEAD"]).then(() => true, () => false)) return { repoPath: e, currentBranch: i, isAncestor: true, agentBranchExistsLocally: true };
  const s = await t.resolveGitRevision({ cwd: e, revision: `refs/heads/${n}`, verify: true }).then(() => true, () => false);
  return { repoPath: e, currentBranch: i, isAncestor: false, agentBranchExistsLocally: s };
}
var QTt, hfg, sul, pfg, mfg, oul, 