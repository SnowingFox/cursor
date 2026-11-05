// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PullRequestRepositoryService.js range:33582328..33631984
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.942Z
mce = L({ "PullRequestRepositoryService.js"() {
  "use strict";
  E(), nl(), qn(), wm(), Rn(), It(), Ks(), wu(), Zi(), Ji(), Gt(), du(), Kf(), Mk(), Zzf(), zze(), dp(), sC(), Kws(), py(), EE(), PB(), DJr(), pTt(), $fg(), sme(), ERi(), pd(), TRi(), sZr(), XS(), BBl(), e9e(), FBl(), WUl(), WUl(), Kie = n9e, eVf = 8, tVf = 256, nVf = 4, iVf = 12e4, wAt = class {
    constructor(t, e, n, i, r, s, o, a) {
      this.instantiationService = t, this.pullRequestCacheService = e, this.agentExecProviderService = n, this.storageService = i, this.notificationService = r, this.cursorCredsService = s, this.logService = o, this.privateInferenceEnablementService = a, this.metadataReactivesByPrUrl = /* @__PURE__ */ new Map(), this.latestAppliedMetadataByPrUrl = new kv(tVf), this.locallyAppliedTitleByPrUrl = /* @__PURE__ */ new Map(), this.pendingMetadataOverrideByPrUrl = /* @__PURE__ */ new Map(), this.latestAppliedFilesByPrUrl = new kv(eVf), this.filesLoadReactivesByPrUrl = /* @__PURE__ */ new Map(), this.filesLoadRefreshGenerationByPrUrl = /* @__PURE__ */ new Map(), this.inFlightFilesFetchByPrUrl = /* @__PURE__ */ new Map(), this.rerunFailures = new Qzf(), this.onDidChangeRerunFailures = this.rerunFailures.onDidChange, this._onDidApplyPullRequestMetadata = new tt(), this.onDidApplyPullRequestMetadata = this._onDidApplyPullRequestMetadata.event, this.lastDevScmErrorNotificationAtMsByOp = /* @__PURE__ */ new Map(), this._metadataBatchRateLimitedUntilMs = 0, this.singlePrMetadataFallbackLimiter = new xI(nVf), this.scmBackendClient = this.instantiationService.createInstance(cb, { service: W2n }), this.backgroundComposerBackendClient = this.instantiationService.createInstance(cb, { service: TKt });
    }
    getPullRequestMetadata(t, e) {
      const n = this.latestAppliedMetadataByPrUrl.get(t), i = new ca(n !== void 0 ? Qh.resolved(n) : Qh.pending());
      let r = false, s = false;
      const o = this.metadataReactivesByPrUrl.get(t) ?? /* @__PURE__ */ new Set();
      o.add(i), this.metadataReactivesByPrUrl.set(t, o);
      const a = this.pullRequestCacheService.loadPullRequestMetadata(t).catch(() => {
      }), l = (c) => {
        if (r || c === void 0) return;
        const u = Qh.isResolved(i.value) ? i.value.value : void 0;
        s && u !== void 0 || this._applyMetadataReactiveValue(t, c);
      };
      return e?.skipCachedValue || a.then(l), this._refreshMetadataReactiveValue(t, { ...e, callsite: e?.callsite ?? "pr_tab_init" }).then(() => {
        s = true, a.then((c) => {
          l(c), !r && !Qh.isResolved(i.value) && i.set(Qh.resolved(void 0));
        });
      }).catch((c) => {
        if (s = true, this._applyStaleMetadataAfterScmRateLimit(t, c)) return;
        const u = this.latestAppliedMetadataByPrUrl.get(t);
        if (u) {
          this._applyMetadataReactiveValue(t, u);
          return;
        }
        a.then((d) => {
          l(d), !r && !Qh.isResolved(i.value) && i.set(Qh.resolved(void 0));
        });
      }), { get value() {
        return i.value;
      }, onChange(c) {
        return i.onChange(c);
      }, dispose: () => {
        if (r) return;
        r = true;
        const c = this.metadataReactivesByPrUrl.get(t);
        c && (c.delete(i), c.size === 0 && this.metadataReactivesByPrUrl.delete(t));
      } };
    }
    async refreshPullRequestMetadata(t, e) {
      const n = t.trim();
      if (n) try {
        await this._refreshMetadataReactiveValue(n, { ...e, skipCache: true, callsite: e?.callsite ?? "pr_tab_refresh" });
      } catch (i) {
        if (this._applyStaleMetadataAfterScmRateLimit(n, i)) return;
        const r = this.latestAppliedMetadataByPrUrl.get(n);
        r && this._applyMetadataReactiveValue(n, r);
      }
    }
    async getPullRequestMetadataBatch(t, e) {
      const n = [...new Set(t)], i = n.length > 0 ? await this._fetchPullRequestMetadataBatch(n, e) : /* @__PURE__ */ new Map();
      for (const [r, s] of i) {
        if (s && this._isStaleMetadata(r, s)) {
          const o = this.latestAppliedMetadataByPrUrl.get(r);
          i.set(r, o), this._applyMetadataReactiveValue(r, o);
          continue;
        }
        if (s !== void 0) {
          const o = this._stabilizeMetadataFields(r, s, true);
          i.set(r, o);
          try {
            o !== void 0 && this.pullRequestCacheService.savePullRequestMetadata(r, o);
          } catch {
          }
        } else {
          const o = this.latestAppliedMetadataByPrUrl.get(r);
          if (o) {
            i.set(r, o), this._applyMetadataReactiveValue(r, o);
            continue;
          }
        }
        this._applyMetadataReactiveValue(r, s);
      }
      for (const r of n) i.has(r) || i.set(r, this._applyRateLimitDegradedMetadata(r));
      return t.map((r) => i.get(r));
    }
    async getPullRequestStatusBatch(t, e) {
      const n = [...new Set(t)];
      if (n.length === 0) return /* @__PURE__ */ new Map();
      const i = await this.scmBackendClient.get(), r = n.length > 3 ? `${n.slice(0, 3).join(", ")}, …` : n.join(", "), s = this._metadataCallsite(e, "pr_status_poll");
      let o;
      try {
        o = await this._runScmCall("batchGetPullRequestStatus", s, r, (c) => i.batchGetPullRequestStatus({ prUrls: n, skipCache: e?.skipCache ?? false }, c));
      } catch (c) {
        throw this._shouldReportScmError(c) && this.logService.warn("[scm] batchGetPullRequestStatus failed", { callsite: s, prCount: n.length, error: this._describeScmError(c) }), c;
      }
      const a = new Set(o.failedPrUrls ?? []);
      a.size > 0 && this.logService.warn("[scm] batchGetPullRequestStatus soft-failed PRs", { callsite: s, failed: a.size, total: n.length });
      const l = /* @__PURE__ */ new Map();
      for (const c of n) {
        if (a.has(c)) {
          l.set(c, void 0);
          continue;
        }
        l.set(c, this._toPullRequestStatus(c, this._getBatchPullRequestStatusByUrl(o, c)));
      }
      return l;
    }
    _getBatchPullRequestStatusByUrl(t, e) {
      if (Object.prototype.hasOwnProperty.call(t.statuses, e)) return t.statuses[e];
    }
    _toPullRequestStatus(t, e) {
      if (e) return { prUrl: t, title: e.title, state: this._mapScmPullRequestState(e.state, e.isMerged), isMerged: e.isMerged, isDraft: e.isDraft, degradedByRateLimit: e.degradedByRateLimit ?? void 0, updatedAt: e.updatedAt ?? void 0 };
    }
    async getPullRequestLifecycle(t, e) {
      const n = t.trim();
      if (!n) return;
      const [i] = await this.getPullRequestMetadataBatch([n], e);
      let r = i, s;
      if (!r && !this._isMetadataBatchRateLimited()) try {
        r = await this._fetchPullRequestMetadata(n, e);
      } catch (o) {
        r = void 0, this._isScmMetadataRateLimitedError(o) && (s = o);
      }
      if (!r) {
        if (s) throw s;
        if (this._isMetadataBatchRateLimited()) throw new Us("Pull request metadata is rate limited", pr.ResourceExhausted);
        return;
      }
      return hIi(n, r, void 0);
    }
    async _fetchPullRequestMetadataBatch(t, e) {
      const n = /* @__PURE__ */ new Map();
      for (let i = 0; i < t.length && !this._isMetadataBatchRateLimited(); i += oQn) {
        const r = t.slice(i, i + oQn);
        let s;
        try {
          s = await this._fetchPullRequestMetadataBatchViaRpc(r, e);
        } catch (o) {
          if (this._noteMetadataBatchRateLimit(o)) break;
          s = await this._fetchPullRequestMetadataBatchViaFanOut(r, e);
        }
        for (const [o, a] of s) n.set(o, a);
      }
      return n;
    }
    _isMetadataBatchRateLimited() {
      return Date.now() < this._metadataBatchRateLimitedUntilMs;
    }
    _noteMetadataBatchRateLimit(t) {
      if (!Ufg(t)) return false;
      const e = jfg(t, Date.now(), this._isScmMetadataRateLimitedError(t) ? cnl : void 0);
      return e === void 0 ? false : (this._metadataBatchRateLimitedUntilMs = Math.max(this._metadataBatchRateLimitedUntilMs, Math.min(e, Date.now() + iVf)), true);
    }
    async _fetchPullRequestMetadataBatchViaRpc(t, e) {
      const n = a9(await this.scmBackendClient.get(), "scm"), i = t.length > 3 ? `${t.slice(0, 3).join(", ")}, …` : t.join(", "), r = await this._runScmCall("batchGetPullRequests", this._metadataCallsite(e, "pr_metadata_refresh"), i, (a) => n.batchGetPullRequests({ prUrls: t, skipCache: e?.skipCache ?? false }, a), e?.signal), s = new Set(r.failedPrUrls ?? []), o = /* @__PURE__ */ new Map();
      for (const a of t) {
        if (s.has(a)) {
          o.set(a, void 0);
          continue;
        }
        const l = this._getBatchPullRequestByUrl(r, a);
        o.set(a, this._toPullRequestMetadata(l));
      }
      return o;
    }
    async _fetchPullRequestMetadataBatchViaFanOut(t, e) {
      const n = /* @__PURE__ */ new Map();
      return await Promise.all(t.map((i) => this.singlePrMetadataFallbackLimiter.queue(async () => {
        if (!this._isMetadataBatchRateLimited()) try {
          n.set(i, await this._fetchPullRequestMetadata(i, e));
        } catch (r) {
          this._noteMetadataBatchRateLimit(r) || n.set(i, void 0);
        }
      }))), n;
    }
    _getBatchPullRequestByUrl(t, e) {
      if (Object.prototype.hasOwnProperty.call(t.pullRequests, e)) return t.pullRequests[e];
    }
    async _fetchPullRequestMetadata(t, e) {
      const n = a9(await this.scmBackendClient.get(), "scm"), i = await this._runScmCall("getPullRequest", this._metadataCallsite(e, "pr_tab_init"), t, (r) => n.getPullRequest({ prUrl: t, skipCache: e?.skipCache ?? false }, r), e?.signal);
      return this._toPullRequestMetadata(i.pullRequest);
    }
    async getPullRequestStack(t, e) {
      const n = t.trim();
      if (!n) return null;
      const i = a9(await this.scmBackendClient.get(), "scm"), r = await this._runScmCall("getPullRequestStack", "pr_tab_init", n, (s) => i.getPullRequestStack({ prUrl: n }, s), e?.signal);
      return this._toPullRequestStack(r.stack);
    }
    _notifyDevAboutScmError(t, e, n) {
      if (!(vl.extensionIsDev || vl.developmentTooling) || !this._shouldReportScmError(n)) return;
      const i = Date.now(), r = this.lastDevScmErrorNotificationAtMsByOp.get(t) ?? 0;
      i - r < wAt.DEV_SCM_ERROR_NOTIFICATION_THROTTLE_MS || (this.lastDevScmErrorNotificationAtMsByOp.set(t, i), this.notificationService.notify({ severity: Yn.Error, message: `Internal: SCM ${this._getScmOperationLabel(t)} failed (${e}). ${this._describeScmError(n)}`, source: "Cursor (dev)" }));
    }
    _shouldReportScmError(t) {
      return !(this._isRunningAgainstLocalBackend() || t instanceof Us && t.code === pr.Canceled);
    }
    _describeScmError(t) {
      const e = t instanceof Error && t.message.trim().length > 0 ? t.message : String(t ?? "");
      return t instanceof Us ? `[${pr[t.code] ?? t.code}] ${e}` : e;
    }
    _isRunningAgainstLocalBackend() {
      try {
        return dYa(this.cursorCredsService.getBackendUrl());
      } catch {
        return false;
      }
    }
    _getScmOperationLabel(t) {
      const e = { batchGetPullRequests: "batch get PRs", batchGetPullRequestStatus: "batch get PR statuses", getPullRequest: "get PR", getPullRequestCodeowners: "get codeowners", getPullRequestFileContents: "get PR file contents", makePullRequestReady: "mark ready", updatePullRequestTitle: "update title", mergePullRequest: "merge", closePullRequest: "close", reopenPullRequest: "reopen", enablePullRequestAutoMerge: "enable auto-merge", disablePullRequestAutoMerge: "disable auto-merge", removePullRequestFromMergeQueue: "remove from merge queue", getPullRequestChecks: "get checks", getSCMPullRequestTimelineEvents: "get timeline events", getSCMPullRequestCommits: "get commits", getPullRequestCheckLogExcerpt: "get check log", getPullRequestDiff: "get PR diff", getBranchComparison: "get branch comparison" };
      if (e[t] !== void 0) return e[t];
      const n = t.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
      return n === t ? t : n.charAt(0).toUpperCase() + n.slice(1);
    }
    _assertScmIntegrationOn() {
      if (!aN(this.privateInferenceEnablementService, "scm-integration")) throw new hCe("scm-integration");
    }
    async _prDiscussionsClient() {
      return this._assertScmIntegrationOn(), this.backgroundComposerBackendClient.get();
    }
    async _runScmCall(t, e, n, i, r) {
      this._assertScmIntegrationOn();
      const s = { headers: { [afr]: e }, signal: r };
      this._maybeThrowDevSimulatedScmRateLimitError(t);
      try {
        return await i(s);
      } catch (o) {
        throw this._notifyDevAboutScmError(t, n, o), o;
      }
    }
    _metadataCallsite(t, e) {
      return t?.callsite ?? e;
    }
    _toPullRequestMetadata(t) {
      if (t) return { id: t.id, stackParentId: t.stackParentId ?? void 0, stackId: t.stackId ?? void 0, stackPosition: t.stackPosition ?? void 0, stackSource: this._mapScmPullRequestStackSource(t.stackSource), prUrl: t.prUrl, number: t.number, title: t.title, state: this._mapScmPullRequestState(t.state, t.isMerged), isMerged: t.isMerged, isDraft: t.isDraft, repository: t.repository, headRefName: t.headRefName ?? void 0, baseRefName: t.baseRefName ?? void 0, mergeable: this._mapScmMergeability(t.mergeable), mergeStateStatus: t.mergeStateStatus ?? "UNKNOWN", reviewDecision: t.reviewDecision ?? void 0, ciStatus: this._mapScmCiStatus(t.ciStatus, t.ciFailuresAwaitAction), authorLogin: t.authorLogin ?? void 0, authorAvatarUrl: t.authorAvatarUrl ?? void 0, createdAt: t.createdAt ?? "", updatedAt: t.updatedAt ?? "", mergedAt: t.mergedAt ?? void 0, closedAt: t.closedAt ?? void 0, isAutoMergeEnabled: t.isAutoMergeEnabled, viewerCanEnableAutoMerge: t.viewerCanEnableAutoMerge, requiresMergeQueue: t.requiresMergeQueue, isInMergeQueue: t.isInMergeQueue, mergeStatusDegradedByRateLimit: t.mergeStatusDegradedByRateLimit, body: t.body ?? void 0, commitCount: t.commitCount, reviewCount: t.reviewCount, reviewers: (t.reviewers ?? []).map((e) => ({ login: e.login, name: e.name, avatarUrl: e.avatarUrl, state: e.state })), requestedReviewers: (t.requestedReviewers ?? []).map((e) => ({ login: e.login, name: e.name, avatarUrl: e.avatarUrl, kind: e.kind })) };
    }
    _toPullRequestStack(t) {
      if (t === void 0) return null;
      const e = this._mapScmPullRequestStackSource(t.source);
      if (e === void 0) return null;
      const n = /* @__PURE__ */ new Map();
      for (const o of t.members) {
        const a = this._toPullRequestMetadata(o.pullRequest);
        if (a === void 0) continue;
        const l = Zp(a.prUrl);
        !l || n.has(l) || n.set(l, { pullRequest: a, position: o.position ?? void 0 });
      }
      const i = [...n.values()];
      if (i.length < 2) return null;
      const r = /* @__PURE__ */ new Set(), s = [];
      for (const o of t.edges) {
        const a = Zp(o.parentPrUrl), l = Zp(o.childPrUrl), c = n.get(a), u = n.get(l), d = `${a}\0${l}`;
        c === void 0 || u === void 0 || a === l || r.has(d) || (r.add(d), s.push({ parentPrUrl: c.pullRequest.prUrl, childPrUrl: u.pullRequest.prUrl }));
      }
      return s.length === 0 ? null : { source: e, members: i, edges: s, baseRefName: t.baseRefName ?? void 0 };
    }
    _mapScmPullRequestStackSource(t) {
      switch (t) {
        case UGt.SCM_PULL_REQUEST_STACK_SOURCE_ORIGIN:
          return "origin";
        case UGt.SCM_PULL_REQUEST_STACK_SOURCE_GRAPHITE:
          return "graphite";
        case UGt.SCM_PULL_REQUEST_STACK_SOURCE_GITHUB_NATIVE:
          return "github_native";
        case UGt.SCM_PULL_REQUEST_STACK_SOURCE_UNSPECIFIED:
          return;
      }
    }
    getPullRequestFilesLoadState(t, e) {
      const n = t.trim(), i = new ca({ status: "pending" });
      let r = false;
      const s = this.filesLoadReactivesByPrUrl.get(n) ?? /* @__PURE__ */ new Set();
      this.filesLoadReactivesByPrUrl.set(n, s), s.add(i), ((l) => {
        if (r) return;
        let c = false;
        const u = this.filesLoadRefreshGenerationByPrUrl.get(n) ?? 0;
        i.set(this._createPendingPullRequestFilesLoadState(n));
        const d = this._loadCachedPullRequestFiles(n), h = (p) => {
          r || c || !CLi(p) || (this.filesLoadRefreshGenerationByPrUrl.get(n) ?? 0) !== u || (c = true, this.latestAppliedFilesByPrUrl.set(n, p), TLi(i, { status: "resolved", value: p }));
        };
        l?.skipCachedValue || d.then(h), this._fetchPullRequestFilesLoadState(n, () => !r && (this.filesLoadRefreshGenerationByPrUrl.get(n) ?? 0) === u).then((p) => {
          if (!(r || (this.filesLoadRefreshGenerationByPrUrl.get(n) ?? 0) !== u)) {
            if (Jzf(p)) {
              d.then((g) => {
                if (!(r || (this.filesLoadRefreshGenerationByPrUrl.get(n) ?? 0) !== u)) {
                  if (c = true, p.status === "error") {
                    CLi(g) ? (this.latestAppliedFilesByPrUrl.set(n, g), i.set({ ...p, fallback: g })) : i.set(p);
                    return;
                  }
                  if (CLi(g)) {
                    this.latestAppliedFilesByPrUrl.set(n, g), TLi(i, { status: "resolved", value: g });
                    return;
                  }
                  i.set(p.status === "resolved" && p.value === void 0 ? this._createPullRequestFilesErrorLoadState(n, new Error("Pull request files were unavailable.")) : p);
                }
              });
              return;
            }
            c = true, TLi(i, p);
          }
        });
      })(e);
      const a = this;
      return { get value() {
        return i.value;
      }, onChange(l) {
        return i.onChange(l);
      }, dispose() {
        r = true, s.delete(i), s.size === 0 && a.filesLoadReactivesByPrUrl.delete(n);
      } };
    }
    peekPullRequestFilesLoadState(t) {
      return this._createPendingPullRequestFilesLoadState(t.trim());
    }
    refreshPullRequestFiles(t, e) {
      const n = t.trim();
      if (!n) return;
      const i = (this.filesLoadRefreshGenerationByPrUrl.get(n) ?? 0) + 1;
      this.filesLoadRefreshGenerationByPrUrl.set(n, i);
      const r = i, s = this.filesLoadReactivesByPrUrl.get(n), o = this.latestAppliedFilesByPrUrl.get(n), a = this._loadCachedPullRequestFiles(n), l = (c) => {
        if (!(!CLi(c) || this.filesLoadRefreshGenerationByPrUrl.get(n) !== r) && (this.latestAppliedFilesByPrUrl.set(n, c), !!s)) for (const u of s) {
          if (this.filesLoadRefreshGenerationByPrUrl.get(n) !== r) return;
          TLi(u, { status: "resolved", value: c });
        }
      };
      if (s && s.size > 0) {
        for (const c of s) {
          const u = c.value;
          if (o === void 0 && (u.status === "error" || u.status === "retrying") && u.fallback === void 0) {
            c.set({ status: "retrying", error: u.error });
            continue;
          }
          c.set(this._createPendingPullRequestFilesLoadState(n));
        }
        e?.skipCachedValue || a.then(l);
      }
      this._fetchPullRequestFilesLoadState(n, () => this.filesLoadRefreshGenerationByPrUrl.get(n) === r, true).then((c) => {
        if (this.filesLoadRefreshGenerationByPrUrl.get(n) === r) {
          if (Jzf(c)) {
            a.then((u) => {
              if (this.filesLoadRefreshGenerationByPrUrl.get(n) === r) {
                if (CLi(u)) {
                  l(u);
                  return;
                }
                this._applyFilesLoadReactiveValue(n, c);
              }
            });
            return;
          }
          this._applyFilesLoadReactiveValue(n, c);
        }
      }).finally(() => {
        this.filesLoadRefreshGenerationByPrUrl.get(n) === r && !this.filesLoadReactivesByPrUrl.has(n) && this.filesLoadRefreshGenerationByPrUrl.delete(n);
      });
    }
    _createPendingPullRequestFilesLoadState(t) {
      const e = this.latestAppliedFilesByPrUrl.get(t);
      return e !== void 0 ? { status: "pending", fallback: e } : { status: "pending" };
    }
    async _loadCachedPullRequestFiles(t) {
      try {
        return await this.pullRequestCacheService.loadPullRequestFiles(t);
      } catch {
        return this.latestAppliedFilesByPrUrl.get(t);
      }
    }
    async _fetchPullRequestFilesLoadState(t, e = () => true, n = false) {
      try {
        const i = await this._fetchPullRequestFiles(t, n);
        if (i !== void 0) {
          if (!e()) return { status: "resolved", value: this.latestAppliedFilesByPrUrl.get(t) };
          try {
            this.pullRequestCacheService.savePullRequestFiles(t, i);
          } catch {
          }
          return this.latestAppliedFilesByPrUrl.set(t, i), { status: "resolved", value: i };
        }
        return this._createPullRequestFilesErrorLoadState(t, new Error("Pull request files were unavailable."));
      } catch (i) {
        return this._createPullRequestFilesErrorLoadState(t, i);
      }
    }
    _createPullRequestFilesErrorLoadState(t, e) {
      const n = BUf(e), i = this.latestAppliedFilesByPrUrl.get(t);
      return i !== void 0 ? { status: "error", error: n, fallback: i } : { status: "error", error: n };
    }
    _applyFilesLoadReactiveValue(t, e) {
      const n = this.filesLoadReactivesByPrUrl.get(t);
      if (n) for (const i of n) TLi(i, e);
    }
    getPullRequestFiles(t, e) {
      const n = this.getPullRequestFilesLoadState(t, e), i = new ca(this._toPromiseStateFromFilesLoadState(n.value)), r = n.onChange((s) => {
        i.set(this._toPromiseStateFromFilesLoadState(s));
      });
      return { get value() {
        return i.value;
      }, onChange(s) {
        return i.onChange(s);
      }, dispose() {
        r.dispose(), n.dispose();
      } };
    }
    _toPromiseStateFromFilesLoadState(t) {
      switch (t.status) {
        case "pending":
          return t.fallback !== void 0 ? Qh.resolved(t.fallback) : Qh.pending();
        case "retrying":
          return t.fallback !== void 0 ? Qh.resolved(t.fallback) : Qh.pending();
        case "resolved":
          return Qh.resolved(t.value);
        case "error":
          return t.fallback !== void 0 ? Qh.resolved(t.fallback) : Qh.pending();
        default:
          return t;
      }
    }
    async fetchPullRequestFilesOnce(t) {
      const e = t.trim();
      if (e) return this._fetchPullRequestFiles(e);
    }
    async fetchPullRequestCodeownersOnce(t, e, n) {
      const i = t.trim(), r = [...new Set(e.map((l) => l.replace(/^\/+/, "").trim()).filter((l) => l.length > 0))];
      if (!i || r.length === 0) return /* @__PURE__ */ new Map();
      const s = a9(await this.scmBackendClient.get(), "scm"), o = await this._runScmCall("getPullRequestCodeowners", "pr_diff_view", i, (l) => s.getPullRequestCodeowners({ prUrl: i, paths: r, skipCache: n?.skipCache ?? false }, l)), a = /* @__PURE__ */ new Map();
      for (const l of o.entries ?? []) {
        const c = l.path.replace(/^\/+/, "");
        a.set(c, l.owners ?? []);
      }
      for (const l of r) a.has(l) || a.set(l, []);
      return a;
    }
    async fetchPullRequestFileContentsOnce(t, e) {
      const n = t.prUrl.trim(), i = t.path.replace(/^\/+/, "").trim(), r = t.ref.trim();
      if (!n || !i || !r) return { status: "unavailable" };
      const s = a9(await this.scmBackendClient.get(), "scm"), o = await this._runScmCall("getPullRequestFileContents", "pr_diff_view", n, (a) => s.getPullRequestFileContents({ prUrl: n, path: i, ref: r, ...t.maxBytes !== void 0 ? { maxBytes: t.maxBytes } : {} }, a), e?.signal);
      if (o.status === gEn.OK) return { status: "ok", contentBase64: o.contentBase64 };
      if (o.status === gEn.NOT_FOUND || o.status === gEn.TOO_LARGE || o.status === gEn.NOT_SUPPORTED) return { status: "unavailable" };
      throw new Error(`SCM file-content request failed with status ${o.status}`);
    }
    getBranchComparison(t, e) {
      return this._createReactiveRequestWithCache(async () => {
      }, () => this._fetchBranchComparison(t), () => {
      }, void 0, e);
    }
    async markPullRequestReady(t) {
      const e = a9(await this.scmBackendClient.get(), "scm"), n = await this._runScmCall("makePullRequestReady", "pr_tab_refresh", t, (r) => e.makePullRequestReady({ prUrl: t }, r));
      if (!n.success) throw new Error(n.error || "Failed to mark pull request as ready");
      this.pendingMetadataOverrideByPrUrl.delete(t);
      const i = this.latestAppliedMetadataByPrUrl.get(t);
      if (i) {
        const r = { ...i, isDraft: false, mergeStateStatus: "UNKNOWN", viewerCanEnableAutoMerge: void 0, mergeStatusDegradedByRateLimit: void 0 };
        this.latestAppliedMetadataByPrUrl.set(t, r);
        try {
          this.pullRequestCacheService.savePullRequestMetadata(t, r);
        } catch {
        }
        const s = this.metadataReactivesByPrUrl.get(t);
        for (const o of s ?? []) o.set(Qh.resolved(r));
      }
      await this._refreshMetadataReactiveValue(t, { skipCache: true });
    }
    async updatePullRequestTitle(t) {
      const e = t.prUrl.trim(), n = t.title.trim();
      if (!e) throw new Error("Pull request URL is required");
      if (!n) throw new Error("Pull request title is required");
      const i = this.latestAppliedMetadataByPrUrl.get(e);
      this._applyPullRequestTitleMetadataOverride(e, n);
      const r = a9(await this.scmBackendClient.get(), "scm");
      let s;
      try {
        s = await this._runScmCall("updatePullRequestTitle", "pr_tab_refresh", e, (o) => r.updatePullRequestTitle({ prUrl: e, title: n }, o));
      } catch (o) {
        throw this.locallyAppliedTitleByPrUrl.delete(e), i && this._applyPullRequestTitleMetadataOverride(e, i.title), o;
      }
      if (!s.success) throw this.locallyAppliedTitleByPrUrl.delete(e), i && this._applyPullRequestTitleMetadataOverride(e, i.title), new Error(s.error || "Failed to update pull request title");
      try {
        await this._refreshMetadataReactiveValue(e, { skipCache: true });
      } catch {
      }
    }
    async mergePullRequest(t, e, n) {
      const i = a9(await this.scmBackendClient.get(), "scm"), r = await this._runScmCall("mergePullRequest", "pr_tab_refresh", t, (s) => i.mergePullRequest({ prUrl: t, mergeMethod: this._toScmMergeMethod(e), useMergeQueue: n?.useMergeQueue ?? false }, s));
      if (!r.success) throw new Error(r.error || "Failed to merge pull request");
      return r.wasEnqueued ? this._applyPendingMetadataOverride(t, { isInMergeQueue: true }) : this._applyPendingMetadataOverride(t, { isMerged: true, state: "merged" }), await this._refreshMetadataReactiveValue(t, { skipCache: true }), { wasEnqueued: r.wasEnqueued };
    }
    async closePullRequest(t) {
      const e = a9(await this.scmBackendClient.get(), "scm"), n = await this._runScmCall("closePullRequest", "pr_tab_refresh", t, (i) => e.closePullRequest({ prUrl: t }, i));
      if (!n.success) throw new Error(n.error || "Failed to close pull request");
      this.pendingMetadataOverrideByPrUrl.delete(t), await this._refreshMetadataReactiveValue(t, { skipCache: true });
    }
    async reopenPullRequest(t) {
      const e = a9(await this.scmBackendClient.get(), "scm"), n = await this._runScmCall("reopenPullRequest", "pr_tab_refresh", t, (i) => e.reopenPullRequest({ prUrl: t }, i));
      if (!n.success) throw new Error(n.error || "Failed to reopen pull request");
      this.pendingMetadataOverrideByPrUrl.delete(t), await this._refreshMetadataReactiveValue(t, { skipCache: true });
    }
    async enablePullRequestAutoMerge(t, e) {
      const n = a9(await this.scmBackendClient.get(), "scm"), i = await this._runScmCall("enablePullRequestAutoMerge", "pr_tab_refresh", t, (s) => n.enablePullRequestAutoMerge({ prUrl: t, mergeMethod: this._toScmMergeMethod(e) }, s));
      if (!i.success) {
        if (this._isAutoMergeAlreadyEnabledResponse(i.error)) {
          this._applyPendingMetadataOverride(t, { isAutoMergeEnabled: true });
          return;
        }
        const s = new Error(i.error || "Failed to enable pull request auto-merge");
        throw this._notifyDevAboutScmError("enablePullRequestAutoMerge", t, s), s;
      }
      this._applyPendingMetadataOverride(t, { isAutoMergeEnabled: true }), await this._refreshMetadataReactiveValue(t, { skipCache: true });
      const r = this.latestAppliedMetadataByPrUrl.get(t)?.isAutoMergeEnabled;
      r !== true && (this._notifyDevAboutScmError("enablePullRequestAutoMerge", t, new Error(`Enable auto-merge returned success, but refreshed metadata still reports auto-merge as ${String(r)}.`)), this._applyPendingMetadataOverride(t, { isAutoMergeEnabled: true }));
    }
    async disablePullRequestAutoMerge(t) {
      const e = a9(await this.scmBackendClient.get(), "scm"), n = await this._runScmCall("disablePullRequestAutoMerge", "pr_tab_refresh", t, (r) => e.disablePullRequestAutoMerge({ prUrl: t }, r));
      if (!n.success) {
        if (this._isAutoMergeNotEnabledResponse(n.error)) {
          this._applyPendingMetadataOverride(t, { isAutoMergeEnabled: false });
          return;
        }
        const r = new Error(n.error || "Failed to disable pull request auto-merge");
        throw this._notifyDevAboutScmError("disablePullRequestAutoMerge", t, r), r;
      }
      this._applyPendingMetadataOverride(t, { isAutoMergeEnabled: false }), await this._refreshMetadataReactiveValue(t, { skipCache: true });
      const i = this.latestAppliedMetadataByPrUrl.get(t)?.isAutoMergeEnabled;
      i !== false && (this._notifyDevAboutScmError("disablePullRequestAutoMerge", t, new Error(`Disable auto-merge returned success, but refreshed metadata still reports auto-merge as ${String(i)}.`)), this._applyPendingMetadataOverride(t, { isAutoMergeEnabled: false }));
    }
    async removePullRequestFromMergeQueue(t) {
      const e = a9(await this.scmBackendClient.get(), "scm"), n = await this._runScmCall("removePullRequestFromMergeQueue", "pr_tab_refresh", t, (i) => e.removePullRequestFromMergeQueue({ prUrl: t }, i));
      if (!n.success) {
        const i = new Error(n.error || "Failed to remove pull request from merge queue");
        throw this._notifyDevAboutScmError("removePullRequestFromMergeQueue", t, i), i;
      }
      this._applyPendingMetadataOverride(t, { isInMergeQueue: false }), await this._refreshMetadataReactiveValue(t, { skipCache: true });
    }
    markPendingAutoMergeIntent(t, e) {
      const n = t.trim();
      !n || this.latestAppliedMetadataByPrUrl.get(n)?.isAutoMergeEnabled === e || this._applyPendingMetadataOverride(n, { isAutoMergeEnabled: e });
    }
    _applyPendingMetadataOverride(t, e) {
      this.pendingMetadataOverrideByPrUrl.set(t, e);
      const n = this.latestAppliedMetadataByPrUrl.get(t);
      if (!n) return;
      const i = this._applyMetadataPatch(n, e);
      if (i === n) return;
      this.latestAppliedMetadataByPrUrl.set(t, i);
      try {
        this.pullRequestCacheService.savePullRequestMetadata(t, i);
      } catch {
      }
      const r = this.metadataReactivesByPrUrl.get(t);
      for (const s of r ?? []) s.set(Qh.resolved(i));
    }
    _applyMetadataPatch(t, e) {
      for (const n of Object.keys(e)) if (t[n] !== e[n]) return { ...t, ...e };
      return t;
    }
    _applyPullRequestTitleMetadataOverride(t, e) {
      const n = this.latestAppliedMetadataByPrUrl.get(t);
      if (!n) return;
      const i = n.title === e ? n : { ...n, title: e };
      this.locallyAppliedTitleByPrUrl.set(t, e), this.latestAppliedMetadataByPrUrl.set(t, i);
      try {
        this.pullRequestCacheService.savePullRequestMetadata(t, i);
      } catch {
      }
      const r = this.metadataReactivesByPrUrl.get(t);
      for (const s of r ?? []) s.set(Qh.resolved(i));
    }
    _isAutoMergeAlreadyEnabledResponse(t) {
      return t?.toLowerCase().includes("auto-merge is already enabled") === true;
    }
    _isAutoMergeNotEnabledResponse(t) {
      return t?.toLowerCase().includes("auto-merge is not enabled") === true;
    }
    async getPullRequestChecks(t, e) {
      const n = t.trim();
      if (!n) return;
      const i = a9(await this.scmBackendClient.get(), "scm");
      return (await this._runScmCall("getPullRequestChecks", "pr_status_pill", n, (s) => i.getPullRequestChecks({ prUrl: n, skipCache: e?.skipCache ?? false }, s))).checkStatus;
    }
    async getPullRequestTimelineEvents(t, e) {
      const n = t.trim();
      if (!n) return;
      const i = a9(await this.scmBackendClient.get(), "scm"), r = await this._runScmCall("getSCMPullRequestTimelineEvents", e?.callsite ?? "pr_tab_init", n, (s) => i.getSCMPullRequestTimelineEvents({ prUrl: n, ...e?.page !== void 0 ? { page: e.page } : {}, skipCache: e?.skipCache ?? false }, s), e?.signal);
      return { events: r.events.map((s) => ({ id: s.id, eventType: s.eventType, createdAt: s.createdAt, actor: s.actor ? { login: s.actor.login, avatarUrl: s.actor.avatarUrl, name: s.actor.name } : void 0, label: s.label, body: s.body })), hasNextPage: r.hasNextPage, nextPage: r.nextPage };
    }
    async getPullRequestDiscussions(t, e) {
      const n = t.trim();
      if (!n) return;
      const r = await a9(await this._prDiscussionsClient(), "bg-composer").getPullRequestDiscussions(new AGa({ prUrl: n, skipCache: e?.skipCache ?? false }), { signal: e?.signal });
      return { threads: r.threads.map((s) => this._mapPullRequestReviewThread(s)), topLevelComments: r.topLevelComments.map((s) => ({ id: s.id, authorLogin: s.authorLogin, avatarUrl: s.avatarUrl, body: s.body, createdAt: s.createdAt, bodyHtml: s.bodyHtml, authorName: s.authorName })) };
    }
    async replyToReviewThread(t) {
      const e = t.prUrl.trim(), n = t.threadId.trim(), i = t.body.trim();
      if (!e || !n || !i) return;
      const s = await a9(await this._prDiscussionsClient(), "bg-composer").replyToReviewThread(new RGa({ prUrl: e, threadId: n, body: i }));
      return s.thread ? this._mapPullRequestReviewThread(s.thread) : void 0;
    }
    async resolveReviewThread(t) {
      const e = t.prUrl.trim(), n = t.threadId.trim();
      return !e || !n ? false : (await a9(await this._prDiscussionsClient(), "bg-composer").resolveReviewThread(new PGa({ prUrl: e, threadId: n }))).success;
    }
    async unresolveReviewThread(t) {
      const e = t.prUrl.trim(), n = t.threadId.trim();
      return !e || !n ? false : (await a9(await this._prDiscussionsClient(), "bg-composer").unresolveReviewThread(new MGa({ prUrl: e, threadId: n }))).success;
    }
    async deletePullRequestComment(t) {
      const e = t.prUrl.trim(), n = t.commentId.trim();
      return !e || !n ? false : (await a9(await this._prDiscussionsClient(), "bg-composer").deletePullRequestReviewComment(new DGa({ prUrl: e, commentId: n, commentKind: t.commentKind }))).success;
    }
    _mapPullRequestReviewThread(t) {
      return { id: t.id, path: t.path, line: t.line, startLine: t.startLine, originalLine: t.originalLine, originalStartLine: t.originalStartLine, diffSide: t.diffSide, isResolved: t.isResolved, isOutdated: t.isOutdated, pullRequestReviewId: t.pullRequestReviewId, comments: t.comments.map((e) => ({ id: e.id, authorLogin: e.authorLogin, avatarUrl: e.avatarUrl, body: e.body, createdAt: e.createdAt, bodyHtml: e.bodyHtml, diffHunk: e.diffHunk, authorName: e.authorName })) };
    }
    async getPullRequestCommits(t, e) {
      const n = t.trim();
      if (!n) return;
      const i = a9(await this.scmBackendClient.get(), "scm"), r = await this._runScmCall("getSCMPullRequestCommits", "pr_tab_init", n, (s) => i.getSCMPullRequestCommits({ prUrl: n, ...e?.afterCursor ? { afterCursor: e.afterCursor } : {}, skipCache: e?.skipCache ?? false }, s));
      return { commits: r.commits.map((s) => ({ sha: s.sha, message: s.message, committedDate: s.committedDate, additions: s.additions, deletions: s.deletions, changedFiles: s.changedFiles, author: s.author ? { name: s.author.name, email: s.author.email, avatarUrl: s.author.avatarUrl } : void 0, committer: s.committer ? { name: s.committer.name, email: s.committer.email, avatarUrl: s.committer.avatarUrl } : void 0, authors: s.authors.map((o) => ({ name: o.name, email: o.email, avatarUrl: o.avatarUrl })) })), hasNextPage: r.hasNextPage, endCursor: r.endCursor };
    }
    async fetchPullRequestCheckLogExcerptOnce(t, e, n) {
      const i = t.trim();
      if (!i) return;
      const r = e.provider?.trim(), s = e.providerCheckId?.trim();
      if (!r || !s) return;
      const o = n?.maxBytes;
      let a;
      try {
        const l = a9(await this.scmBackendClient.get(), "scm");
        a = await this._runScmCall("getPullRequestCheckLogExcerpt", "pr_diff_view", i, (c) => l.getPullRequestCheckLogExcerpt({ prUrl: i, provider: r, providerCheckId: s, ...o !== void 0 ? { maxBytes: o } : {} }, c));
      } catch {
        return;
      }
      return this._mapCheckLogExcerptResponse(a);
    }
    _mapCheckLogExcerptResponse(t) {
      const e = (() => {
        switch (t.status) {
          case kot.OK:
            return "ok";
          case kot.NOT_SUPPORTED:
            return "not_supported";
          case kot.NOT_FOUND:
            return "not_found";
          case kot.INSUFFICIENT_PERMISSIONS:
            return "insufficient_permissions";
          case kot.AUTH_REQUIRED:
            return "auth_required";
          case kot.ERROR:
            return "error";
          case kot.UNSPECIFIED:
            return;
          default:
            return t.status;
        }
      })();
      if (e === void 0) return;
      let n = 0;
      try {
        const i = Number(t.totalBytes);
        Number.isFinite(i) && (n = i);
      } catch {
        n = 0;
      }
      return { kind: e, excerpt: t.excerpt, totalBytes: n, truncated: t.truncated, message: t.message };
    }
    async isGhCliAvailable() {
      this.ghCliAvailabilityPromise === void 0 && (this.ghCliAvailabilityPromise = this._probeGhCli());
      const t = await this.ghCliAvailabilityPromise;
      return t || (this.ghCliAvailabilityPromise = void 0), t;
    }
    async _probeGhCli() {
      try {
        return await this.agentExecProviderService.waitForProviderRegistration(), (await this.agentExecProviderService.spawn("gh --version", {})).code === 0;
      } catch {
        return false;
      }
    }
    getRerunFailureMessage(t, e) {
      return this.rerunFailures.getFailureMessage(t, e);
    }
    getRerunFailures(t) {
      return this.rerunFailures.getFailures(t);
    }
    clearRerunFailure(t, e) {
      this.rerunFailures.clear(t, e);
    }
    _failRerun(t, e, n) {
      throw this.rerunFailures.record(t, e, n), new Error(n);
    }
    async _fetchGhRerunFailureDiagnostics(t) {
      const { hostname: e, owner: n, repo: i, jobId: r } = t, s = FNi("gh api", ["--hostname", e, `repos/${n}/${i}/actions/jobs/${r}`]);
      if (s !== void 0) try {
        const o = await this.agentExecProviderService.spawn(s, {});
        if (o.code !== 0) return;
        const a = D6w(o.stdout);
        return a === void 0 ? void 0 : N6w(a);
      } catch {
        return;
      }
    }
    async rerunPullRequestCheck(t) {
      const e = t.prUrl.trim();
      if (!e) return;
      const n = fxn(e);
      if (!n) throw new Error("Could not parse pull request URL.");
      const { hostname: i, owner: r, repo: s } = n, o = t.check, a = P6w(o);
      if (!a) throw new Error("This check was not identified as a rerunnable GitHub Actions job.");
      const l = FNi("gh run rerun", ["--job", a.jobId, "--repo", `${i}/${r}/${s}`]);
      l === void 0 && this._failRerun(e, o, "Could not execute GitHub CLI: the repository cannot be passed to the shell safely.");
      let c;
      try {
        c = await this.agentExecProviderService.spawn(l, {});
      } catch (u) {
        const d = u instanceof Error ? u.message : String(u);
        this._failRerun(e, o, `Could not execute GitHub CLI: ${d}`);
      }
      if (c.code !== 0) {
        const u = M6w(c), d = await this._fetchGhRerunFailureDiagnostics({ hostname: i, owner: r, repo: s, jobId: a.jobId });
        this._failRerun(e, o, L6w(u, d, o.detailsUrl));
      }
      this.clearRerunFailure(e, o);
    }
    async _fetchBranchComparison(t) {
      const e = t.branchName.trim();
      if (!e) return;
      const n = a9(await this.scmBackendClient.get(), "scm"), i = await this._runScmCall("getBranchComparison", "pr_branch_poll", `${t.repoUrl}#${t.branchName}`, (o) => n.getBranchComparison({ repoUrl: t.repoUrl, branchName: e, baseBranch: t.baseBranch?.trim() || void 0 }, o)), r = i.baseBranch?.trim() || "";
      if (!r || r === e) return;
      const s = (i.files ?? []).map((o) => ({ filename: o.filename, previousFilename: o.previousFilename ?? void 0, status: this._mapScmDiffFileStatus(o.status), originalContents: o.originalContents ?? void 0, modifiedContents: o.modifiedContents ?? void 0, patch: o.patch ?? void 0, isGenerated: o.isGenerated ?? void 0 }));
      return { baseBranch: r, files: s, baseSha: i.baseSha ?? r, headSha: i.headSha ?? e };
    }
    _maybeThrowDevSimulatedScmRateLimitError(t) {
      if (!wAt._DEV_RATE_LIMIT_SIMULATED_READ_OPERATIONS.has(t)) return;
      const e = Dh(this.storageService, "glassDevSimulatePrScmRateLimitPct");
      e <= 0 || Math.random() * 100 >= e || HMw(t);
    }
    _fetchPullRequestFiles(t, e = false) {
      const n = this.inFlightFilesFetchByPrUrl.get(t);
      if (!e && n !== void 0) return n;
      const i = this._fetchPullRequestFilesFromBackend(t);
      this.inFlightFilesFetchByPrUrl.set(t, i);
      const r = () => {
        this.inFlightFilesFetchByPrUrl.get(t) === i && this.inFlightFilesFetchByPrUrl.delete(t);
      };
      return i.then(r, r), i;
    }
    async _fetchPullRequestFilesFromBackend(t) {
      const e = a9(await this.scmBackendClient.get(), "scm"), n = await qMw(() => this._runScmCall("getPullRequestDiff", "pr_diff_view", t, (i) => e.getPullRequestDiff({ prUrl: t }, i)));
      if (n) return { files: (n.files ?? []).map((i) => ({ filename: i.filename, previousFilename: i.previousFilename ?? void 0, status: this._mapScmDiffFileStatus(i.status), originalContents: i.originalContents ?? void 0, modifiedContents: i.modifiedContents ?? void 0, patch: i.patch ?? void 0, isGenerated: i.isGenerated ?? void 0 })), baseSha: n.baseSha ?? "", headSha: n.headSha ?? "" };
    }
    _mapScmPullRequestState(t, e) {
      return e || t === BGt.SCM_PULL_REQUEST_STATE_MERGED ? "merged" : t === BGt.SCM_PULL_REQUEST_STATE_OPEN ? "open" : t === BGt.SCM_PULL_REQUEST_STATE_CLOSED ? "closed" : "unknown";
    }
    _mapScmMergeability(t) {
      return t === nZr.SCM_MERGEABILITY_MERGEABLE ? "MERGEABLE" : t === nZr.SCM_MERGEABILITY_CONFLICTING ? "CONFLICTING" : "UNKNOWN";
    }
    _mapScmCiStatus(t, e) {
      return t === Swi.SCM_CI_STATUS_SUCCESS ? "success" : t === Swi.SCM_CI_STATUS_FAILURE ? e ? "action_required" : "failure" : t === Swi.SCM_CI_STATUS_PENDING ? "pending" : "unknown";
    }
    _mapScmDiffFileStatus(t) {
      return t === mEn.SCM_PULL_REQUEST_DIFF_FILE_STATUS_ADDED ? "added" : t === mEn.SCM_PULL_REQUEST_DIFF_FILE_STATUS_DELETED ? "deleted" : t === mEn.SCM_PULL_REQUEST_DIFF_FILE_STATUS_RENAMED ? "renamed" : (t === mEn.SCM_PULL_REQUEST_DIFF_FILE_STATUS_MODIFIED, "modified");
    }
    _toScmMergeMethod(t) {
      switch (t) {
        case void 0:
          return bCt.SCM_MERGE_METHOD_UNSPECIFIED;
        case "merge":
          return bCt.SCM_MERGE_METHOD_MERGE;
        case "squash":
          return bCt.SCM_MERGE_METHOD_SQUASH;
        case "rebase":
          return bCt.SCM_MERGE_METHOD_REBASE;
        default: {
          const e = t;
          throw new Error(`Unsupported merge method: ${e}`);
        }
      }
    }
    async _refreshMetadataReactiveValue(t, e) {
      try {
        const n = await this._fetchPullRequestMetadata(t, e);
        if (n && this._isStaleMetadata(t, n)) {
          this._applyMetadataReactiveValue(t, this.latestAppliedMetadataByPrUrl.get(t));
          return;
        }
        if (n !== void 0) {
          const i = this._stabilizeMetadataFields(t, n, true);
          try {
            i !== void 0 && this.pullRequestCacheService.savePullRequestMetadata(t, i);
          } catch {
          }
        } else {
          const i = this.latestAppliedMetadataByPrUrl.get(t);
          if (i) {
            this._applyMetadataReactiveValue(t, i);
            return;
          }
          return;
        }
        this._applyMetadataReactiveValue(t, n);
      } catch (n) {
        if (this._applyStaleMetadataAfterScmRateLimit(t, n)) return;
        throw n;
      }
    }
    _applyMetadataReactiveValue(t, e) {
      if (e === void 0 && (e = this.latestAppliedMetadataByPrUrl.get(t)), e && this._isStaleMetadata(t, e)) return;
      const n = this.latestAppliedMetadataByPrUrl.get(t);
      e = this._stabilizeMetadataFields(t, e), e && (this.latestAppliedMetadataByPrUrl.set(t, e), e !== n && this._onDidApplyPullRequestMetadata.fire({ prUrl: t, metadata: e }));
      const i = this.metadataReactivesByPrUrl.get(t);
      if (i) for (const r of i) r.set(Qh.resolved(e));
    }
    _applyStaleMetadataAfterScmRateLimit(t, e) {
      return this._isScmMetadataRateLimitedError(e) ? this._applyRateLimitDegradedMetadata(t) !== void 0 : false;
    }
    _applyRateLimitDegradedMetadata(t) {
      const e = this.latestAppliedMetadataByPrUrl.get(t);
      if (!e) return;
      const n = e.mergeStatusDegradedByRateLimit === true ? e : { ...e, mergeStatusDegradedByRateLimit: true };
      return this._applyMetadataReactiveValue(t, n), n;
    }
    _isScmMetadataRateLimitedError(t) {
      return t instanceof Us && t.code === pr.ResourceExhausted;
    }
    _isStaleMetadata(t, e) {
      const n = this.latestAppliedMetadataByPrUrl.get(t);
      return n ? this._compareMetadataUpdatedAt(e, n) === "older" : false;
    }
    _stabilizeMetadataFields(t, e, n = false) {
      return this._mergeStableReviewMetadataFields(t, this._preserveKnownStatusMetadataFields(t, e, n));
    }
    _preserveKnownStatusMetadataFields(t, e, n) {
      if (!e) return e;
      const i = this.pendingMetadataOverrideByPrUrl.get(t);
      if (i !== void 0) {
        const a = this._applyMetadataPatch(e, i);
        a === e ? n && this.pendingMetadataOverrideByPrUrl.delete(t) : e = a;
      }
      const r = this.latestAppliedMetadataByPrUrl.get(t);
      if (!r || this._compareMetadataUpdatedAt(e, r) === "newer") return this.locallyAppliedTitleByPrUrl.delete(t), e;
      const s = {};
      r.isDraft !== e.isDraft && (s.isDraft = r.isDraft, !r.isDraft && e.isDraft && ((e.mergeStateStatus.trim().toUpperCase() !== "DIRTY" || this._isKnownMergeStateStatus(r.mergeStateStatus)) && (s.mergeStateStatus = r.mergeStateStatus), s.viewerCanEnableAutoMerge = r.viewerCanEnableAutoMerge)), iw(t)?.provider !== "origin" && r.isAutoMergeEnabled !== void 0 && r.isAutoMergeEnabled !== e.isAutoMergeEnabled && (s.isAutoMergeEnabled = r.isAutoMergeEnabled), r.viewerCanEnableAutoMerge !== void 0 && r.viewerCanEnableAutoMerge !== e.viewerCanEnableAutoMerge && (s.viewerCanEnableAutoMerge = r.viewerCanEnableAutoMerge), this._isKnownMergeStateStatus(r.mergeStateStatus) && !this._isKnownMergeStateStatus(e.mergeStateStatus) && (s.mergeStateStatus = r.mergeStateStatus);
      const o = this.locallyAppliedTitleByPrUrl.get(t);
      return o !== void 0 && (e.title === o ? this.locallyAppliedTitleByPrUrl.delete(t) : s.title = o), Object.keys(s).length === 0 ? e : { ...e, ...s };
    }
    _compareMetadataUpdatedAt(t, e) {
      const n = this._parseMetadataUpdatedAt(t), i = this._parseMetadataUpdatedAt(e);
      return n === void 0 || i === void 0 ? "unknown" : n < i ? "older" : n > i ? "newer" : "same";
    }
    _parseMetadataUpdatedAt(t) {
      if (!t.updatedAt) return;
      const e = Date.parse(t.updatedAt);
      return Number.isFinite(e) ? e : void 0;
    }
    _isKnownMergeStateStatus(t) {
      const e = t.trim().toUpperCase();
      return e !== "" && e !== "UNKNOWN";
    }
    _mergeStableReviewMetadataFields(t, e) {
      if (!e) return e;
      const n = this.latestAppliedMetadataByPrUrl.get(t);
      return !n || !((n.reviewCount ?? 0) > 0 || (n.reviewers?.length ?? 0) > 0 || (n.requestedReviewers?.length ?? 0) > 0 || n.reviewDecision !== void 0) || (e.reviewCount ?? 0) > 0 || (e.reviewers?.length ?? 0) > 0 || (e.requestedReviewers?.length ?? 0) > 0 || e.reviewDecision !== void 0 ? e : { ...e, reviewCount: n.reviewCount, reviewers: n.reviewers, requestedReviewers: n.requestedReviewers, reviewDecision: n.reviewDecision };
    }
    _createReactiveRequestWithCache(t, e, n, i, r) {
      const s = new ca(Qh.pending());
      let o = false, a = false, l = false;
      return r?.skipCachedValue || t().then((c) => {
        o || l || c === void 0 || (a = true, i?.setLatest(c), s.set(Qh.resolved(c)));
      }).catch(() => {
      }), e().then((c) => {
        if (l = true, c !== void 0) {
          try {
            n(c);
          } catch {
          }
          i?.setLatest(c);
        } else c = i?.getLatest();
        o || (a = true, s.set(Qh.resolved(c)));
      }).catch(() => {
        l = true, !(o || a) && (a = true, s.set(Qh.resolved(i?.getLatest())));
      }), { get value() {
        return s.value;
      }, onChange(c) {
        return s.onChange(c);
      }, dispose() {
        o = true;
      } };
    }
  }, wAt.DEV_SCM_ERROR_NOTIFICATION_THROTTLE_MS = 15e3, wAt._DEV_RATE_LIMIT_SIMULATED_READ_OPERATIONS = /* @__PURE__ */ new Set(["batchGetPullRequests", "batchGetPullRequestStatus", "getPullRequest", "getPullRequestDiff", "getPullRequestFileContents", "getBranchComparison", "getPullRequestChecks", "getPullRequestCheckLogExcerpt", "getSCMPullRequestCommits", "getSCMPullRequestTimelineEvents", "getPullRequestCodeowners"]), wAt = Re([F(0, dn), F(1, jUl), F(2, rme), F(3, ki), F(4, Wr), F(5, Ub), F(6, Li), F(7, mT)], wAt), bn(Kie, wAt, 1, 1);
} }), 