// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 52810 range:3855806..4543562
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
52810: (e, t, r) => {
    "use strict";
    function n({ value: e2, name: t2, context: r2 }) {
      if (!Number.isFinite(e2) || e2 <= 0) throw new RangeError(`${r2} ${t2} must be a finite positive number, got ${e2}`);
      return e2;
    }
    r.r(t), r.d(t, { AGENT_STORE_CLIENT_METRIC_PREFIX: () => Ht, AGENT_STORE_CONFLICT_EVENTS_FILE_NAME: () => Wt.Ai, AGENT_STORE_CONFLICT_HOOK_EVENT_NAME: () => Gt.MG, AGENT_STORE_CONTROL_DIR_NAME: () => Wt.AD, AGENT_STORE_EVICTED_DIR_NAME: () => Wt.Jl, AGENT_STORE_EVICTION_MODES: () => nu, AGENT_STORE_EXCLUSIVE_MUTATION_LOCK_FILE_NAME: () => Pr, AGENT_STORE_FILES_DIR_NAME: () => Wt._L, AGENT_STORE_MINT_RETRY_POLICY_VERSION: () => ds, AGENT_STORE_MOUNT_CONFIG_VERSION: () => Ss, AGENT_STORE_MOUNT_POLICIES: () => ru, AGENT_STORE_MOUNT_REQUEST_REASONS: () => su, AGENT_STORE_PATH_SYNC_REQUESTS_DIR_NAME: () => Qs, AGENT_STORE_PUSH_ORDERS: () => ou, AGENT_STORE_RECOVERED_DIR_NAME: () => Wt.qA, AGENT_STORE_ROOT_ID_FILE_NAME: () => Uo, AGENT_STORE_RPC_SERVICE_TAG: () => it, AGENT_STORE_SYNC_CLIENT_CONFIG_DEFAULTS: () => cu, AGENT_STORE_SYNC_CLIENT_CONFIG_KEYS: () => iu, AGENT_STORE_SYNC_CLIENT_CONFIG_NAME: () => Yn.$8, AGENT_STORE_SYNC_DIR_NAME: () => Wt.kR, AGENT_STORE_TMP_DIR_NAME: () => Wt.EJ, AGENT_STORE_TMP_DIR_NAME_DEV: () => Wt.OE, AgentStoreConflictDrain: () => Gt.Ri, AgentStoreConversationActivityTracker: () => ns, AgentStoreDirectoryListingError: () => c, AgentStoreDirectoryNotEmptyError: () => a, AgentStoreMintFailedError: () => ye, AgentStoreMintGate: () => ls, AgentStoreMintRetryBudget: () => us, AgentStorePathError: () => Wt.y$, AgentStoreProtocolError: () => l, AgentStoreSyncEngine: () => ya, AgentStoreSyncError: () => ga, AgentStoreSyncRuntimeController: () => Vu, AgentStoreSyncSession: () => hd, AgentStoreSyncSessionController: () => gd, AgentStoreTombstoneMode: () => o.hw, AgentStoreUnauthorizedError: () => i, AgentStoreVersionProbeBatcher: () => zu, AggregatingAgentStoreMetricsEmitter: () => rs, BCS_AGENT_STORE_BUCKET_HOSTS: () => Ds, BackoffScheduler: () => s, BcsAgentStoreTransport: () => ht, BoundedConcurrencyQueue: () => Lt, CONFLICT_JOURNAL_ROTATE_BYTES: () => $t.hJ, CURRENT_SCHEMA_VERSION: () => vn, CoalescingScheduler: () => fi, ConflictJournal: () => $t.aJ, DEFAULT_AGENT_STORE_RPC_SERVICE: () => ot, DEFAULT_BLOB_IDLE_TIMEOUT_MS: () => ea, DEFAULT_HARNESS_RECOVERY_CONFIG: () => Jr, DEFAULT_MAX_FILE_SIZE_BYTES: () => Qi, DEFAULT_MAX_RENDERED_CONFLICTS: () => zt.zD, DEFAULT_RPC_TIMEOUT_MS: () => dt, DEFAULT_TOMBSTONE_FULL_REFRESH_INTERVAL_MS: () => sa, DEFAULT_TOMBSTONE_FULL_REFRESH_ROUNDS: () => na, DEFAULT_TOMBSTONE_PRUNE_SLACK_MS: () => oa, DEFAULT_VERSION_FULL_LIST_INTERVAL_MS: () => ha, DEFAULT_VERSION_PROBE_TIMEOUT_MS: () => Gu, DELETION_ARMED_META_KEY: () => ia, DISK_FULL_REPEAT_WINDOW_MS: () => ts, DogStatsdAgentStoreMetricsEmitter: () => Qt, FILES_ROOT_DEV_META_KEY: () => aa, FILES_ROOT_INO_META_KEY: () => ca, HARNESS_RECOVERY_MAX_RETRY_AFTER_MS: () => qr, HARNESS_RECOVERY_PROBE_BASE_MS: () => Br, HARNESS_RECOVERY_PROBE_MAX_MS: () => Dr, HARNESS_RECOVERY_START_JITTER_MS: () => Or, HARNESS_REMEMBERED_MOUNTS_MAX: () => Yr, HttpAgentStoreBlobTransfer: () => pc, INDEX_CREATED_MS_META_KEY: () => ua, LAST_COMPLETE_ROUND_MS_META_KEY: () => da, LocalAgentStoreIndex: () => On, LocalIndexError: () => Mn, MAX_ANNOUNCED_EVENT_IDS: () => jt.z7, MAX_CONFLICT_NOTICE_CHARS: () => zt.HA, META_INDEX_CREATED_MS: () => In, META_LAST_COMPLETE_ROUND_MS: () => xn, META_ROOT_ID: () => Tn, META_TOMBSTONE_CURSOR_MS: () => kn, META_TOMBSTONE_LAST_INCLUDE_MS: () => Pn, META_TOMBSTONE_ROUNDS_SINCE_INCLUDE: () => Cn, MountScopedAgentStoreClient: () => As, MountSyncRequestCoalescer: () => ju, NEVER_STARTED_HARNESS_PHASE: () => Fr, NOOP_METRICS_EMITTER: () => Xn, NOOP_RESILIENCE_LISTENER: () => ho, PATH_SYNC_REQUEST_POLL_MS: () => Zs, PATH_SYNC_REQUEST_STALE_MS: () => Xs, PATH_SYNC_REQUEST_WAIT_POLL_MS: () => eo, PRIVATE_DIR_MODE: () => Wt.qH, PendingConflictJournal: () => $t.Tj, PerSessionTimerScheduler: () => hi, PresignedUrlRejectedError: () => Rs, REMOTE_VERSION_LISTED_MS_META_KEY: () => ma, REMOTE_VERSION_META_KEY: () => pa, RESILIENCE_DISPATCHED_CODES: () => ji, RetryingAgentStoreClient: () => Ro, STORE_EVICTION_MARK_TTL_MS: () => Rc, STORE_LOCK_MTIME_UPDATE_MS: () => ur, STORE_LOCK_STALE_MS: () => dr, STORE_PIN_MARK_POLL_MS: () => Mc, StoreLock: () => hr, StoreLockError: () => mr, SyncRoundScheduler: () => Yi, TOMBSTONE_CURSOR_MS_META_KEY: () => la, TOMBSTONE_ROW_RETENTION_MS: () => ra, TokenCachingAgentStoreClient: () => So, UnsafeAgentStorePathError: () => f, ackPathSyncRequests: () => po, acquireAgentStoreExclusiveMutationClaim: () => Rr, acquireStorePin: () => Lc, acquireStorePinSync: () => $c, adaptFlatAgentStoreList: () => L, admitLocalAgentStore: () => Qn, agentStoreBackgroundPinsDir: () => Fc, agentStoreConflictEventsPath: () => Wt.VN, agentStoreConflictPendingEventsPath: () => Wt.AC, agentStoreControlDir: () => Wt.ve, agentStoreEvictingMarkPath: () => Uc, agentStoreFilesDir: () => Wt.f$, agentStoreIndexPath: () => Wt.mD, agentStoreLockPath: () => Wt.N1, agentStoreMintRetryAfterMs: () => Ue, agentStoreMountConfigPath: () => Wt.BE, agentStoreOwnerPath: () => Wt.Dr, agentStorePathParts: () => Wt.WX, agentStorePinsDir: () => Nc, agentStoreRoot: () => Wt.dv, agentStoreRootIdPath: () => Wt.$t, agentStoreRpcServiceFromDedicatedGate: () => at, agentStoreSkillsDir: () => Wt.yA, agentStoreSyncClientCodeDefaults: () => uu, agentStoreSyncDir: () => Wt.Du, agentStoreSyncRemoteVersionFromClientConfig: () => qu, agentStoreSyncSessionOptionsFromClientConfig: () => Bu, agentStoreSyncTombstoneTimingFromClientConfig: () => Du, agentStoreTmpDir: () => Wt.DE, agentStoreTmpDirNameForUrlProtocol: () => Wt.Wo, allocateUniqueAgentStoreMountAlias: () => fs, announceConflictEventIds: () => jt._3, assertNoSymlinkInPath: () => Wt.rs, assertSafeAgentId: () => Wt._b, assertSafeMountKey: () => Wt.qh, assertWindowsMaterializableRelPath: () => k, assertWindowsStoreAcl: () => Wt.PE, buildConflictNoticeCarriers: () => Gt._G, buildRoundCompletedEvent: () => Zn, ceilToGrid: () => yi, checkAgentStoreRootClean: () => bc, clampMintRetryAfterHeaderMs: () => Io, classifyAgentStoreMountFailureReason: () => Ps, classifyAgentStoreSourceId: () => Wt.Pz, classifyHarnessDownReason: () => jr, clearEvictingMark: () => Wc, conflictEventsCursorAfterForeignLeaseBarrier: () => $t.$U, conflictJournalPathForFilesDir: () => $t.KD, conflictPendingJournalPathForFilesDir: () => $t.Zz, connectServiceForAgentStoreRpc: () => ut, createAgentStorePeriodicScheduler: () => gi, createAgentStorePresignedUrlValidatorForBackend: () => Us, createAgentStoreSyncMetrics: () => cs, createAgentStoreSyncQueues: () => Nu, createBcsPresignedUrlValidator: () => Ns, createConflictNoticeClaimState: () => jt.cM, createDefaultAgentStoreSyncQueues: () => fa, createDownPhase: () => Ur, createHostAllowlistValidator: () => Bs, createPeerMountSpec: () => ws, createPrincipalMountSpec: () => _s, createSelfMountSpec: () => ys, createShareMountSpec: () => vs, decodeAgentStoreMountConfig: () => Is, defaultAgentStoreMountAlias: () => hs, defaultPresignedUrlValidator: () => Ms, defaultProcessExists: () => Ir, encodeAgentStoreMountConfig: () => Es, enqueuePathSyncRequest: () => io, ensureAgentStoreRootId: () => Vo, ensureSecureDirectoryChain: () => Wt.Ew, evictIdleAgentStoreRoots: () => Ul, exclusiveMutationLockPathForFilesDir: () => Ar, filterConflictEventsBySessionFloor: () => $t.tN, formatHarnessPhase: () => dn, formatHarnessTransition: () => pn, getAgentStoreConnectCode: () => fe, getCurrentStoreLockIdentity: () => yr, hardenPathForNotice: () => zt.p1, harnessProbeDelayMs: () => rn, harnessRecoveryConfigFromClient: () => Fu, harnessRecoveryStartDelayMs: () => Hr, harnessStartTransitionReason: () => Kr, harnessTouchIsCoolingDown: () => nn, hasAgentStoreMintFailureInChain: () => ve, hasWindowsIncompatibleFilenameChars: () => S, hashRelPath: () => Li, inspectPathSyncRequest: () => lo, isAgentStoreAbortError: () => Ye, isAgentStoreConnectCode: () => ge, isAgentStoreDirNotEmptyConnectError: () => ze, isAgentStoreDirectoryNotEmptyError: () => d, isAgentStoreId: () => Wt.Y6, isAgentStoreMintFailedError: () => we, isAgentStoreMintNegativeCacheable: () => be, isAgentStoreMintTerminalDenial: () => Se, isAgentStoreMintTransient: () => Ve, isAgentStoreRetryableHttpStatus: () => Qe, isAgentStoreShareMountKey: () => Wt.A8, isAgentStoreSourceDirectoryName: () => Wt.kM, isAgentStoreSourceId: () => Wt.v8, isAgentStoreSyncDisabledError: () => Ie, isAgentStoreTransientNetworkError: () => Xe, isAgentStoreUnauthorized: () => Ao, isAgentStoreUnauthorizedError: () => u, isAwsS3Hostname: () => Js, isCloudAgentStoreId: () => Wt.PZ, isConflictEventUnresolved: () => $t.O9, isConflictEventUnresolvedSync: () => $t.pc, isConflictFileUnresolved: () => $t.Y, isConflictFileUnresolvedSync: () => $t.Bw, isEqualOrParent: () => E, isHarnessInactive: () => un, isHarnessLatchedDown: () => cn, isLocalAgentStoreBackendUrl: () => Fs, isNonDefaultAgentStoreSyncClientConfig: () => Uu, isPathSyncRequestAcked: () => uo, isPathWithin: () => eu, isReservedRelPath: () => Wt.TM, isSharedAgentStoreMount: () => gs, isValidAgentStoreMountAlias: () => ms, isValidBareUuid: () => Wt.Ae, listLiveStorePins: () => jc, listPathSyncRequests: () => co, localhostPermissivePresignedUrlValidator: () => Ls, nextDownAttempts: () => Vr, nextHarnessProbeAtMs: () => $r, normalizeRelPath: () => v, normalizeS3Etag: () => st, notifyAgentStoreConversationTurn: () => as, notifySummaryMetrics: () => Gi, notifySummaryResult: () => Fi, openAgentStoreIndexForAudit: () => zn, openAgentStoreLocalIndex: () => Dn, parseAgentStoreBackendThrottled: () => Ge, parseAgentStoreQuotaExceeded: () => qe, parseAgentStoreSyncDisabledRetryAfter: () => je, parseConflictEvent: () => $t.Mi, parseConflictJournalLines: () => $t.kL, parsePendingConflictEmit: () => $t.EG, pathSyncRequestsDirForFilesDir: () => no, pendingConflictEmitKey: () => $t.Gm, planAgentStoreHarnessGateAction: () => an, planHarnessAction: () => Gr, probeAgentStoreObject: () => Vs, probeAgentStoreRootId: () => Ho, probeStoreBaseSource: () => Wt.QQ, readActiveStoreLockOwner: () => gr, readAgentStoreExclusiveMutationClaimOwner: () => Mr, readAgentStoreRootId: () => Ko, readConflictEvents: () => $t.Ob, readLiveEvictingMark: () => Gc, reconcileMountCollision: () => bs, redactPresignedUrlString: () => js, releaseStoreEvictionClaim: () => ql, remainingRememberedMountsAfterOldestFirstAbort: () => Zr, rememberHarnessMounts: () => Qr, rememberedMountReplay: () => tn, rememberedMountsOldestFirst: () => Xr, remintAlreadyDownPhase: () => ln, renderConflictNotice: () => zt.dN, renderEagerConflictNotice: () => zt.pq, resolveAgentStoreSyncClientConfig: () => Au, resolveSafeChildPath: () => x, resolveScopedConflictNoticeOutcome: () => $u, resolveStoreBase: () => Wt.v5, resolveStoreMountForPath: () => tu, rmdirLocalEmptyAncestors: () => P, rootIdleAgeMs: () => Vc, runOnConflictNoticeClaimChain: () => jt.Y$, safeAddBreadcrumb: () => es, safeNotifyListener: () => fo, safeWalk: () => I, sanitizeAgentStoreMetricTagValue: () => Yt, selectConflictEventsAfterCursor: () => $t.y5, setAgentStoreConversationTurnListener: () => is, setWindowsStoreAcl: () => Wt.xD, settleHarnessTriggerAfterJitter: () => on, shouldContinueHarnessStartAfterJitter: () => zr, shouldEmitPassiveTookOverLockEvent: () => Ku, shouldPromoteDueNoneToProbe: () => sn, shouldReconcileAfterParkedHarnessStart: () => Wr, shouldRunStoreEviction: () => Dl, snapshotRememberedHarnessMounts: () => en, startFailedHarnessPhase: () => Lr, sweepStaleAgentStoreRoots: () => _i, tryAcquireStoreLock: () => fr, validateRawSegmentName: () => _, waitForPathSyncRequestAck: () => mo, writeEvictingMarkExclusive: () => zc });
    class s {
      constructor(e2) {
        this.consecutiveFailures = 0;
        const t2 = n({ value: e2.baseDelayMs, name: "baseDelayMs", context: "BackoffScheduler" }), r2 = n({ value: e2.maxDelayMs, name: "maxDelayMs", context: "BackoffScheduler" });
        if (t2 > r2) throw new RangeError(`BackoffScheduler baseDelayMs (${t2}) must be <= maxDelayMs (${r2})`);
        const s2 = e2.multiplier ?? 2;
        if (!Number.isFinite(s2) || s2 < 1) throw new RangeError(`BackoffScheduler multiplier must be >= 1, got ${s2}`);
        const o2 = e2.jitter ?? 0;
        if (!Number.isFinite(o2) || o2 < 0 || o2 > 1) throw new RangeError(`BackoffScheduler jitter must be in [0, 1], got ${o2}`);
        this.baseDelayMs = t2, this.maxDelayMs = r2, this.multiplier = s2, this.jitter = o2, this.random = e2.random ?? Math.random;
      }
      recordSuccess() {
        this.consecutiveFailures = 0;
      }
      recordFailure() {
        return this.consecutiveFailures += 1, this.computeDelayMs(this.consecutiveFailures, true);
      }
      peekNextDelayMs() {
        return this.computeDelayMs(this.consecutiveFailures + 1, false);
      }
      lastDelayMs() {
        return this.computeDelayMs(this.consecutiveFailures, false);
      }
      get failures() {
        return this.consecutiveFailures;
      }
      restoreFailures(e2) {
        this.consecutiveFailures = e2 <= 0 ? 0 : Math.floor(e2);
      }
      computeDelayMs(e2, t2) {
        if (e2 <= 0) return 0;
        const r2 = this.multiplier ** (e2 - 1), n2 = Math.min(this.baseDelayMs * r2, this.maxDelayMs), s2 = t2 ? this.applyJitter(n2) : n2, o2 = Math.max(1, Math.floor(s2));
        return Math.min(this.maxDelayMs, o2);
      }
      applyJitter(e2) {
        if (0 === this.jitter) return e2;
        const t2 = this.random(), r2 = Number.isFinite(t2) ? Math.max(0, Math.min(t2, 1)) : 0;
        return e2 * (1 - this.jitter + 2 * r2 * this.jitter);
      }
    }
    var o = r(85932);
    class i extends Error {
      constructor(e2 = "Agent store token is unauthorized", t2) {
        super(e2, t2), this.name = "AgentStoreUnauthorizedError";
      }
    }
    class a extends Error {
      constructor(e2 = "Agent store directory is not empty") {
        super(e2), this.name = "AgentStoreDirectoryNotEmptyError";
      }
    }
    class c extends Error {
      constructor(e2) {
        super(e2), this.name = "AgentStoreDirectoryListingError";
      }
    }
    class l extends Error {
      constructor(e2) {
        super(e2), this.name = "AgentStoreProtocolError";
      }
    }
    function u(e2) {
      return e2 instanceof i;
    }
    function d(e2) {
      return e2 instanceof a;
    }
    var p = r(73024), m = r.t(p, 2), h = r(76760);
    class f extends Error {
      constructor(e2) {
        super(e2.message), this.name = "UnsafeAgentStorePathError", this.code = e2.code, this.relPath = e2.relPath, this.failedPath = e2.failedPath;
      }
    }
    const g = 255, y = /* @__PURE__ */ new Set(["con", "prn", "aux", "nul", "com1", "com2", "com3", "com4", "com5", "com6", "com7", "com8", "com9", "lpt1", "lpt2", "lpt3", "lpt4", "lpt5", "lpt6", "lpt7", "lpt8", "lpt9"]), w = /[<>:"|?*]/;
    function v(e2) {
      if ("string" != typeof e2 || 0 === e2.length) throw new f({ code: "empty_path", message: "Agent store relative path must be a non-empty string", relPath: e2 });
      if (e2.includes("\0")) throw new f({ code: "invalid_segment", message: "Agent store relative path must not contain NUL bytes", relPath: e2 });
      if (h.posix.isAbsolute(e2) || h.win32.isAbsolute(e2)) throw new f({ code: "invalid_segment", message: `Agent store relative path must not be absolute: ${e2}`, relPath: e2 });
      const t2 = e2.replaceAll("\\", "/").split("/"), r2 = [];
      for (const n2 of t2) if (0 !== n2.length && "." !== n2) {
        if (".." === n2) throw new f({ code: "invalid_segment", message: `Agent store relative path must not contain '..': ${e2}`, relPath: e2 });
        b({ segment: n2, relPath: e2 }), r2.push(n2);
      }
      if (0 === r2.length) throw new f({ code: "empty_path", message: `Agent store relative path resolved to empty: ${e2}`, relPath: e2 });
      return r2.join("/");
    }
    function _(e2) {
      if ("string" != typeof e2 || 0 === e2.length) throw new f({ code: "empty_path", message: "Agent store segment name must be a non-empty string", relPath: e2 });
      if ("." === e2 || ".." === e2) throw new f({ code: "invalid_segment", message: `Agent store segment name must not be '.' or '..': ${e2}`, relPath: e2 });
      if (e2.includes("/")) throw new f({ code: "invalid_segment", message: `Agent store segment name must not contain '/': ${e2}`, relPath: e2 });
      if (e2.includes("\\")) throw new f({ code: "invalid_segment", message: `Agent store segment name must not contain '\\\\': ${e2}`, relPath: e2 });
      return b({ segment: e2, relPath: e2 }), e2;
    }
    function b({ segment: e2, relPath: t2 }) {
      if (Buffer.byteLength(e2, "utf8") > g) throw new f({ code: "invalid_segment", message: `Agent store path segment exceeds ${g} bytes: ${e2}`, relPath: t2 });
      for (let r3 = 0; r3 < e2.length; r3++) {
        const n3 = e2.charCodeAt(r3);
        if (n3 < 32 || 127 === n3) throw new f({ code: "invalid_segment", message: `Agent store path segment contains control character (0x${n3.toString(16)}): ${e2}`, relPath: t2 });
      }
      const r2 = e2.charAt(e2.length - 1);
      if ("." === r2 || " " === r2) throw new f({ code: "invalid_segment", message: `Agent store path segment must not end with '.' or space (Windows trims these): ${e2}`, relPath: t2 });
      const n2 = e2.toLowerCase().split(".")[0];
      if (void 0 !== n2 && y.has(n2)) throw new f({ code: "reserved_name", message: `Agent store path segment uses a reserved device name: ${e2}`, relPath: t2 });
    }
    function S(e2) {
      for (const t2 of e2.split("/")) if (t2.length > 0 && w.test(t2)) return true;
      return false;
    }
    function k({ relPath: e2, platform: t2 = process.platform }) {
      if ("win32" === t2 && S(e2)) throw new f({ code: "windows_incompatible", message: `Agent store path is not materializable on Windows (illegal filename character < > : " | ? *): ${e2}`, relPath: e2 });
    }
    function x({ base: e2, relPath: t2 }) {
      if (!h.isAbsolute(e2)) throw new f({ code: "outside_base", message: `Agent store base must be absolute: ${e2}`, relPath: t2 });
      const r2 = v(t2), n2 = h.resolve(e2), s2 = h.resolve(n2, r2);
      if (!E({ parent: n2, candidate: s2 })) throw new f({ code: "outside_base", message: `Agent store relative path resolves outside the base: ${t2}`, relPath: t2, failedPath: s2 });
      return s2;
    }
    function E({ parent: e2, candidate: t2 }) {
      if (t2 === e2) return true;
      const r2 = e2.endsWith(h.sep) ? e2 : e2 + h.sep;
      return t2.startsWith(r2);
    }
    function I(e2, t2 = {}) {
      const r2 = t2.fs ?? m;
      if (!h.isAbsolute(e2)) throw new f({ code: "outside_base", message: `safeWalk base must be absolute: ${e2}`, failedPath: e2 });
      const n2 = h.resolve(e2);
      F(n2, r2);
      const s2 = r2.lstatSync(n2);
      if (s2.isSymbolicLink()) throw new f({ code: "symlink_refused", message: `Refusing to walk symlinked agent store base: ${n2}`, failedPath: n2 });
      if (!s2.isDirectory()) throw new f({ code: "not_regular_file", message: `safeWalk base is not a directory: ${n2}`, failedPath: n2 });
      const o2 = { files: [], refusals: [] };
      return D({ fsModule: r2, absDir: n2, relDir: "", base: n2, result: o2, expectedDev: s2.dev, expectedIno: s2.ino }), o2;
    }
    function T({ base: e2, relPath: t2, fs: r2 }) {
      const n2 = r2 ?? m, s2 = x({ base: e2, relPath: t2 }), o2 = h.resolve(e2);
      F(o2, n2);
      const i2 = n2.lstatSync(o2);
      if (i2.isSymbolicLink()) throw new f({ code: "symlink_refused", message: `Refusing to stat under symlinked agent store base: ${o2}`, failedPath: o2 });
      if (!i2.isDirectory()) throw new f({ code: "not_regular_file", message: `Agent store base is not a directory: ${o2}`, failedPath: o2 });
      const a2 = v(t2), c2 = a2.split("/");
      let l2 = o2, u2 = "";
      const d2 = [];
      for (const e3 of c2.slice(0, -1)) {
        let t3;
        l2 = h.join(l2, e3), u2 = 0 === u2.length ? e3 : `${u2}/${e3}`;
        try {
          t3 = n2.lstatSync(l2);
        } catch (e4) {
          if (N(e4) && "ENOENT" === e4.code) return { kind: "absent" };
          throw e4;
        }
        if (t3.isSymbolicLink()) return { kind: "refused", refusal: { relPath: u2, reason: "symlink_refused" } };
        if (!t3.isDirectory()) return { kind: "refused", refusal: { relPath: u2, reason: "not_regular_file" } };
        d2.push({ abs: l2, rel: u2, dev: t3.dev, ino: t3.ino });
      }
      for (const e3 of d2) {
        let t3;
        try {
          t3 = n2.lstatSync(e3.abs);
        } catch (e4) {
          if (N(e4) && "ENOENT" === e4.code) return { kind: "absent" };
          throw e4;
        }
        if (t3.isSymbolicLink() || !t3.isDirectory() || t3.dev !== e3.dev || t3.ino !== e3.ino) return { kind: "refused", refusal: { relPath: e3.rel, reason: t3.isSymbolicLink() ? "symlink_refused" : "not_regular_file" } };
      }
      let p2;
      try {
        p2 = n2.lstatSync(s2);
      } catch (e3) {
        if (N(e3) && "ENOENT" === e3.code) return { kind: "absent" };
        throw e3;
      }
      return p2.isSymbolicLink() ? { kind: "refused", refusal: { relPath: a2, reason: "symlink_refused" } } : p2.isFile() ? { kind: "file", entry: { relPath: a2, absPath: s2, size: p2.size, mtimeMs: p2.mtimeMs, dev: p2.dev, ino: p2.ino } } : { kind: "refused", refusal: { relPath: a2, reason: "not_regular_file" } };
    }
    function C({ base: e2, relPath: t2, fs: r2 }) {
      const n2 = r2 ?? m;
      x({ base: e2, relPath: t2 });
      const s2 = h.resolve(e2);
      F(s2, n2);
      const o2 = n2.lstatSync(s2);
      if (o2.isSymbolicLink()) throw new f({ code: "symlink_refused", message: `Refusing to stat under symlinked agent store base: ${s2}`, failedPath: s2 });
      if (!o2.isDirectory()) throw new f({ code: "not_regular_file", message: `Agent store base is not a directory: ${s2}`, failedPath: s2 });
      const i2 = v(t2), a2 = i2.split("/"), c2 = a2[a2.length - 1];
      if (void 0 === c2) return { kind: "refused", refusal: { relPath: i2, reason: "not_regular_file" } };
      let l2 = s2, u2 = "";
      const d2 = [];
      for (const e3 of a2.slice(0, -1)) {
        let t3;
        l2 = h.join(l2, e3), u2 = 0 === u2.length ? e3 : `${u2}/${e3}`;
        try {
          t3 = n2.lstatSync(l2);
        } catch (e4) {
          if (N(e4) && "ENOENT" === e4.code) return { kind: "absent" };
          throw e4;
        }
        if (t3.isSymbolicLink()) return { kind: "refused", refusal: { relPath: u2, reason: "symlink_refused" } };
        if (!t3.isDirectory()) return { kind: "refused", refusal: { relPath: u2, reason: "not_regular_file" } };
        d2.push({ abs: l2, rel: u2, dev: t3.dev, ino: t3.ino });
      }
      for (const e3 of d2) {
        let t3;
        try {
          t3 = n2.lstatSync(e3.abs);
        } catch (e4) {
          if (N(e4) && "ENOENT" === e4.code) return { kind: "absent" };
          throw e4;
        }
        if (t3.isSymbolicLink() || !t3.isDirectory() || t3.dev !== e3.dev || t3.ino !== e3.ino) return { kind: "refused", refusal: { relPath: e3.rel, reason: t3.isSymbolicLink() ? "symlink_refused" : "not_regular_file" } };
      }
      const p2 = d2[d2.length - 1];
      if (void 0 !== p2) {
        let e3;
        try {
          e3 = n2.lstatSync(p2.abs);
        } catch (e4) {
          if (N(e4) && "ENOENT" === e4.code) return { kind: "absent" };
          throw e4;
        }
        if (e3.isSymbolicLink() || !e3.isDirectory() || e3.dev !== p2.dev || e3.ino !== p2.ino) return { kind: "refused", refusal: { relPath: p2.rel, reason: e3.isSymbolicLink() ? "symlink_refused" : "not_regular_file" } };
      }
      const g2 = h.join(l2, c2);
      if (!E({ parent: s2, candidate: g2 })) return { kind: "refused", refusal: { relPath: i2, reason: "not_regular_file" } };
      let y2;
      try {
        y2 = n2.lstatSync(g2);
      } catch (e3) {
        if (N(e3) && "ENOENT" === e3.code) return { kind: "absent" };
        throw e3;
      }
      return y2.isSymbolicLink() ? { kind: "refused", refusal: { relPath: i2, reason: "symlink_refused" } } : y2.isDirectory() ? { kind: "directory", absPath: g2 } : { kind: "refused", refusal: { relPath: i2, reason: "not_regular_file" } };
    }
    function P(e2) {
      let t2 = e2.dirRelPath, r2 = 0;
      for (; void 0 !== t2 && "" !== t2; ) {
        let n2;
        try {
          n2 = C({ base: e2.base, relPath: t2 });
        } catch {
          return { removedCount: r2 };
        }
        if ("refused" === n2.kind) return { removedCount: r2 };
        try {
          if ("absent" === n2.kind) t2 === e2.dirRelPath && (r2 += 1);
          else {
            if (!A({ base: e2.base, relPath: t2, recursive: t2 === e2.dirRelPath })) return { removedCount: r2 };
            r2 += 1;
          }
        } catch (e3) {
          if (!N(e3)) return { removedCount: r2 };
          if ("ENOTEMPTY" === e3.code) return { removedCount: r2 };
          if ("ENOENT" !== e3.code) return { removedCount: r2 };
        }
        if ("" === t2) return { removedCount: r2 };
        const s2 = t2.lastIndexOf("/");
        t2 = s2 < 0 ? "" : t2.slice(0, s2);
      }
      return { removedCount: r2 };
    }
    function A(e2) {
      const t2 = h.resolve(e2.base), r2 = v(e2.relPath);
      x({ base: e2.base, relPath: r2 });
      const n2 = false !== e2.recursive, s2 = r2.split("/").filter((e3) => e3.length > 0);
      return 0 !== s2.length && ("linux" === process.platform ? (function(e3) {
        const t3 = R();
        let r3;
        try {
          r3 = p.openSync(e3.resolvedBase, t3);
        } catch {
          return false;
        }
        const n3 = [r3];
        try {
          for (const r5 of e3.segments.slice(0, -1)) {
            const e4 = n3[n3.length - 1];
            if (void 0 === e4) return false;
            let s4;
            try {
              s4 = p.openSync(J(e4, r5), t3);
            } catch {
              return false;
            }
            n3.push(s4);
          }
          const r4 = n3[n3.length - 1], s3 = e3.segments[e3.segments.length - 1];
          return void 0 !== r4 && void 0 !== s3 && O({ parentFd: r4, name: s3, recursive: e3.recursive });
        } finally {
          for (const e4 of n3.reverse()) try {
            p.closeSync(e4);
          } catch {
          }
        }
      })({ resolvedBase: t2, segments: s2, recursive: n2 }) : B({ resolvedBase: t2, relPath: r2, recursive: n2 }));
    }
    function R() {
      const e2 = p.constants;
      let t2 = e2.O_RDONLY ?? 0;
      return "number" == typeof e2.O_DIRECTORY && (t2 |= e2.O_DIRECTORY), "number" == typeof e2.O_NOFOLLOW && (t2 |= e2.O_NOFOLLOW), "number" == typeof e2.O_CLOEXEC && (t2 |= e2.O_CLOEXEC), t2;
    }
    function M(e2) {
      return `/proc/self/fd/${e2}`;
    }
    function J(e2, t2) {
      return `${M(e2)}/${t2}`;
    }
    function O(e2) {
      const t2 = R();
      let r2;
      try {
        r2 = p.openSync(J(e2.parentFd, e2.name), t2);
      } catch (e3) {
        return N(e3) && "ENOENT" === e3.code;
      }
      try {
        if (e2.recursive) {
          let e3;
          try {
            e3 = p.readdirSync(M(r2), { withFileTypes: true });
          } catch {
            return false;
          }
          for (const t3 of e3) {
            if (t3.isSymbolicLink() || !t3.isDirectory()) return false;
            if (!O({ parentFd: r2, name: t3.name, recursive: true })) return false;
          }
        }
      } finally {
        try {
          p.closeSync(r2);
        } catch {
        }
      }
      try {
        return p.rmdirSync(J(e2.parentFd, e2.name)), true;
      } catch (e3) {
        return N(e3) && "ENOENT" === e3.code;
      }
    }
    function B(e2) {
      const t2 = C({ base: e2.resolvedBase, relPath: e2.relPath });
      if ("absent" === t2.kind) return true;
      if ("directory" !== t2.kind) return false;
      if (e2.recursive) {
        let r3;
        try {
          r3 = p.readdirSync(t2.absPath, { withFileTypes: true });
        } catch {
          return false;
        }
        const n3 = C({ base: e2.resolvedBase, relPath: e2.relPath });
        if ("directory" !== n3.kind || n3.absPath !== t2.absPath) return false;
        for (const t3 of r3) {
          if (t3.isSymbolicLink() || !t3.isDirectory()) return false;
          const r4 = "" === e2.relPath ? t3.name : `${e2.relPath}/${t3.name}`;
          if (!B({ resolvedBase: e2.resolvedBase, relPath: r4, recursive: true })) return false;
        }
      }
      const r2 = e2.relPath.lastIndexOf("/"), n2 = -1 === r2 ? "" : e2.relPath.slice(0, r2), s2 = -1 === r2 ? e2.relPath : e2.relPath.slice(r2 + 1);
      let o2 = e2.resolvedBase;
      if (n2.length > 0) {
        const t3 = C({ base: e2.resolvedBase, relPath: n2 });
        if ("directory" !== t3.kind) return false;
        o2 = t3.absPath;
      } else try {
        const t3 = p.lstatSync(e2.resolvedBase);
        if (t3.isSymbolicLink() || !t3.isDirectory()) return false;
      } catch {
        return false;
      }
      try {
        return p.rmdirSync(h.join(o2, s2)), true;
      } catch (e3) {
        return N(e3) && "ENOENT" === e3.code;
      }
    }
    function D({ fsModule: e2, absDir: t2, relDir: r2, base: n2, result: s2, expectedDev: o2, expectedIno: i2 }) {
      let a2, c2;
      try {
        a2 = e2.readdirSync(t2, { withFileTypes: true });
      } catch (e3) {
        if (N(e3) && "ENOENT" === e3.code) return void s2.refusals.push({ relPath: 0 === r2.length ? "." : r2, reason: "not_regular_file" });
        throw e3;
      }
      try {
        c2 = e2.lstatSync(t2);
      } catch (e3) {
        if (N(e3) && "ENOENT" === e3.code) return void s2.refusals.push({ relPath: 0 === r2.length ? "." : r2, reason: "not_regular_file" });
        throw e3;
      }
      if (!c2.isSymbolicLink() && c2.isDirectory() && c2.dev === o2 && c2.ino === i2) for (const o3 of a2) {
        if ("." === o3.name || ".." === o3.name) continue;
        let i3;
        try {
          i3 = _(o3.name);
        } catch {
          s2.refusals.push({ relPath: q({ dir: r2, segment: o3.name }), reason: "not_regular_file" });
          continue;
        }
        const a3 = q({ dir: r2, segment: i3 }), c3 = h.join(t2, i3);
        if (!E({ parent: n2, candidate: c3 })) {
          s2.refusals.push({ relPath: a3, reason: "not_regular_file" });
          continue;
        }
        let l2;
        try {
          l2 = e2.lstatSync(c3);
        } catch (e3) {
          if (N(e3) && "ENOENT" === e3.code) continue;
          throw e3;
        }
        l2.isSymbolicLink() ? s2.refusals.push({ relPath: a3, reason: "symlink_refused" }) : l2.isDirectory() ? D({ fsModule: e2, absDir: c3, relDir: a3, base: n2, result: s2, expectedDev: l2.dev, expectedIno: l2.ino }) : l2.isFile() ? s2.files.push({ relPath: a3, absPath: c3, size: l2.size, mtimeMs: l2.mtimeMs, dev: l2.dev, ino: l2.ino }) : s2.refusals.push({ relPath: a3, reason: "not_regular_file" });
      }
      else s2.refusals.push({ relPath: 0 === r2.length ? "." : r2, reason: c2.isSymbolicLink() ? "symlink_refused" : "not_regular_file" });
    }
    function q({ dir: e2, segment: t2 }) {
      return 0 === e2.length ? t2 : `${e2}/${t2}`;
    }
    function N(e2) {
      return e2 instanceof Error && "string" == typeof e2.code;
    }
    function F(e2, t2) {
      const r2 = h.parse(e2), n2 = e2.slice(r2.root.length).split(h.sep).filter((e3) => e3.length > 0);
      let s2 = r2.root;
      for (const e3 of n2) {
        let r3;
        s2 = h.join(s2, e3);
        try {
          r3 = t2.lstatSync(s2);
        } catch (e4) {
          if (N(e4) && "ENOENT" === e4.code) return;
          throw e4;
        }
        if (r3.isSymbolicLink()) throw new f({ code: "symlink_refused", message: `Refusing to walk agent store path whose ancestor is a symlink: ${s2}`, failedPath: s2 });
      }
    }
    function U({ relPath: e2, listedDir: t2, removed: r2 }) {
      for (const n2 of r2) if (e2 !== n2 && e2.startsWith(`${n2}/`)) return t2 !== n2 && !t2.startsWith(`${n2}/`);
      return false;
    }
    function L({ files: e2, relPath: t2, tombstones: r2, listingComplete: n2, removedSubdirs: s2, tombstoneWatermarkMs: o2, tombstoneFloorMs: i2, version: a2, notModified: c2 }) {
      if (true === c2) throw new Error("adaptFlatAgentStoreList: a notModified answer is not a listing");
      const l2 = (function(e3) {
        if ("" === e3) return "";
        return v(e3);
      })(t2), u2 = (function(e3) {
        if (0 === e3.length) return "";
        return `${e3.replace(/\/$/, "")}/`;
      })(l2), d2 = /* @__PURE__ */ new Set(), p2 = [];
      let m2 = 0;
      const h2 = /* @__PURE__ */ new Set();
      for (const e3 of s2 ?? []) try {
        h2.add(v(e3));
      } catch {
        m2 += 1;
      }
      for (const t3 of e2) {
        let e3;
        try {
          e3 = v(t3.relPath);
        } catch {
          m2 += 1;
          continue;
        }
        $({ prefix: u2, relObjectPath: e3, subdirs: d2 }), e3.startsWith(u2) && (U({ relPath: e3, listedDir: l2, removed: h2 }) || p2.push({ ...t3, relPath: e3 }));
      }
      for (const e3 of h2) d2.delete(e3);
      return { files: p2.sort((e3, t3) => e3.relPath.localeCompare(t3.relPath)), subdirs: [...d2].sort(), ...void 0 !== r2 ? { tombstones: r2 } : {}, ...void 0 !== n2 ? { listingComplete: n2 } : {}, ...h2.size > 0 ? { removedSubdirs: [...h2].sort() } : {}, ...void 0 !== o2 ? { tombstoneWatermarkMs: o2 } : {}, ...void 0 !== i2 ? { tombstoneFloorMs: i2 } : {}, ...void 0 !== a2 && "" !== a2 ? { version: a2 } : {}, skippedUnsafeEntries: m2 };
    }
    function $({ prefix: e2, relObjectPath: t2, subdirs: r2 }) {
      if (!t2.startsWith(e2)) return;
      const n2 = t2.slice(e2.length), s2 = n2.indexOf("/");
      s2 > 0 && r2.add(`${e2}${n2.slice(0, s2)}`);
    }
    var j = r(36038);
    const G = { typeName: "aiserver.v1.AgentStoreService", methods: { listAgentStores: { name: "ListAgentStores", I: o.vz, O: o.xL, kind: j.MethodKind.Unary }, listAgentStoreEntries: { name: "ListAgentStoreEntries", I: o.uH, O: o.i1, kind: j.MethodKind.Unary }, readAgentStoreFile: { name: "ReadAgentStoreFile", I: o.uj, O: o.Em, kind: j.MethodKind.Unary }, writeAgentStoreDocument: { name: "WriteAgentStoreDocument", I: o.Hr, O: o._I, kind: j.MethodKind.Unary }, setAgentStoreDocumentVisibility: { name: "SetAgentStoreDocumentVisibility", I: o.V8, O: o.ph, kind: j.MethodKind.Unary }, mintAgentStoreToken: { name: "MintAgentStoreToken", I: o.dy, O: o.Nj, kind: j.MethodKind.Unary }, listAgentStoreFiles: { name: "ListAgentStoreFiles", I: o.JN, O: o.NS, kind: j.MethodKind.Unary }, listAgentStoreDirectory: { name: "ListAgentStoreDirectory", I: o.zc, O: o.p0, kind: j.MethodKind.Unary }, checkAgentStoreVersions: { name: "CheckAgentStoreVersions", I: o.rX, O: o.X8, kind: j.MethodKind.Unary }, presignAgentStoreReads: { name: "PresignAgentStoreReads", I: o.xN, O: o.tK, kind: j.MethodKind.Unary }, presignAgentStoreWrites: { name: "PresignAgentStoreWrites", I: o.WJ, O: o.GL, kind: j.MethodKind.Unary }, completeAgentStoreMultipartWrites: { name: "CompleteAgentStoreMultipartWrites", I: o.bB, O: o.t3, kind: j.MethodKind.Unary }, abortAgentStoreMultipartWrites: { name: "AbortAgentStoreMultipartWrites", I: o.mr, O: o.U4, kind: j.MethodKind.Unary }, acquireAgentStoreFileLock: { name: "AcquireAgentStoreFileLock", I: o.rd, O: o.N5, kind: j.MethodKind.Unary }, renewAgentStoreFileLock: { name: "RenewAgentStoreFileLock", I: o.a1, O: o.aZ, kind: j.MethodKind.Unary }, releaseAgentStoreFileLock: { name: "ReleaseAgentStoreFileLock", I: o.sc, O: o.qZ, kind: j.MethodKind.Unary }, getAgentStoreFileLock: { name: "GetAgentStoreFileLock", I: o.bH, O: o.Hm, kind: j.MethodKind.Unary }, deleteAgentStoreFiles: { name: "DeleteAgentStoreFiles", I: o.uM, O: o.OM, kind: j.MethodKind.Unary }, rmdirAgentStore: { name: "RmdirAgentStore", I: o.q5, O: o.q$, kind: j.MethodKind.Unary }, undeleteAgentStoreFiles: { name: "UndeleteAgentStoreFiles", I: o.FF, O: o.xQ, kind: j.MethodKind.Unary }, listAgentStoreTombstones: { name: "ListAgentStoreTombstones", I: o.I1, O: o.aU, kind: j.MethodKind.Unary }, shareAgentStore: { name: "ShareAgentStore", I: o.FT, O: o.fp, kind: j.MethodKind.Unary }, unshareAgentStore: { name: "UnshareAgentStore", I: o.Og, O: o.Qv, kind: j.MethodKind.Unary }, listSharedAgentStores: { name: "ListSharedAgentStores", I: o.WQ, O: o.op, kind: j.MethodKind.Unary } } };
    var z = r(62337), W = r(67918), H = r(8592);
    const K = "agent.v1.";
    class V extends H.HL {
      static get runtime() {
        return (0, H.kU)(this, "runtime", j.proto3);
      }
      static $p() {
        return K;
      }
    }
    j.proto3, j.proto3, j.proto3, j.proto3, j.proto3, j.proto3, j.proto3, j.proto3, j.proto3, j.proto3;
    var Y = (0, H.QT)(j.proto3, K, "ResourceScope", [[0, "UNSPECIFIED"], [1, "POD_VM"], [2, "CONTAINER"], [3, "HOST"]], 1), Q = (0, H.QT)(j.proto3, K, "ResourcePressure", [[0, "UNSPECIFIED"], [1, "NONE"], [2, "HIGH"]], 1);
    class X extends V {
      constructor(e2) {
        super(), this.scope = Y.UNSPECIFIED, this.memoryLimitBytes = j.protoInt64.zero, this.cpuLimitMcores = 0, this.diskLimitBytes = j.protoInt64.zero, this.workspacePath = "", j.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new X().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new X().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new X().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return j.proto3.util.equals(X, e2, t2);
      }
      static $() {
        return ["ResourceLimits|1 scope #0|2 memory_limit_bytes 4|3 cpu_limit_mcores 13|4 disk_limit_bytes 4|5 workspace_path 9|6 display_label 9?", Y];
      }
    }
    class Z extends V {
      constructor(e2) {
        super(), this.sampledAtMs = j.protoInt64.zero, this.memoryUsedBytes = j.protoInt64.zero, this.memoryAvailableBytes = j.protoInt64.zero, this.cpuUsedMcores = 0, this.diskUsedBytes = j.protoInt64.zero, this.pressure = Q.UNSPECIFIED, j.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Z().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Z().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Z().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return j.proto3.util.equals(Z, e2, t2);
      }
      static $() {
        return ["ResourceSample|1 sampled_at_ms 3|2 memory_used_bytes 4|3 memory_available_bytes 4|4 cpu_used_mcores 13|5 disk_used_bytes 4|6 pressure #0", Q];
      }
    }
    class ee extends V {
      constructor(e2) {
        super(), this.history = [], this.nextCursor = "", j.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ee().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ee().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ee().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return j.proto3.util.equals(ee, e2, t2);
      }
      static $() {
        return ["GetResourceUsageResponse|1 limits #0|2 current #1|3 history #1*|4 next_cursor 9", X, Z];
      }
    }
    var te = r(28242);
    const re = { typeName: "aiserver.v1.BackgroundComposerService", methods: { listBackgroundComposers: { name: "ListBackgroundComposers", I: z.D3X, O: z.Lgg, kind: j.MethodKind.Unary }, listPrBackgroundComposers: { name: "ListPrBackgroundComposers", I: z.Xmo, O: z.TXq, kind: j.MethodKind.Unary }, pinBackgroundComposers: { name: "PinBackgroundComposers", I: z.CqU, O: z.wR3, kind: j.MethodKind.Unary }, unpinBackgroundComposers: { name: "UnpinBackgroundComposers", I: z.rzE, O: z.FVE, kind: j.MethodKind.Unary }, attachBackgroundComposer: { name: "AttachBackgroundComposer", I: z.R3$, O: z.RkD, kind: j.MethodKind.ServerStreaming }, streamConversation: { name: "StreamConversation", I: z.D23, O: z.HNK, kind: j.MethodKind.ServerStreaming }, getLatestAgentConversationState: { name: "GetLatestAgentConversationState", I: z.Ww7, O: z.OCy, kind: j.MethodKind.Unary }, getBlobForAgentKV: { name: "GetBlobForAgentKV", I: z.Wt4, O: z.KVC, kind: j.MethodKind.Unary }, getConversationPage: { name: "GetConversationPage", I: z.gTv, O: z.IDA, kind: j.MethodKind.Unary }, attachBackgroundComposerLogs: { name: "AttachBackgroundComposerLogs", I: z.ok9, O: z.uZB, kind: j.MethodKind.ServerStreaming }, attachAgentStartupTrace: { name: "AttachAgentStartupTrace", I: z.UlU, O: z.sR0, kind: j.MethodKind.ServerStreaming }, startBackgroundComposerFromSnapshot: { name: "StartBackgroundComposerFromSnapshot", I: z.IU4, O: z.Uc$, kind: j.MethodKind.Unary }, startCloudOnboarding: { name: "StartCloudOnboarding", I: z.OzJ, O: z.Uc$, kind: j.MethodKind.Unary }, startChangeMonitorOnboarding: { name: "StartChangeMonitorOnboarding", I: z.txy, O: z.Uc$, kind: j.MethodKind.Unary }, startCloudOnboardingHeuristicEnvSetup: { name: "StartCloudOnboardingHeuristicEnvSetup", I: z.yEn, O: z.ScJ, kind: j.MethodKind.Unary }, forkBackgroundComposer: { name: "ForkBackgroundComposer", I: z.sDv, O: z.EHS, kind: j.MethodKind.Unary }, startSideChatBackgroundComposer: { name: "StartSideChatBackgroundComposer", I: z.$50, O: z.x1k, kind: j.MethodKind.Unary }, listBackgroundComposerChildren: { name: "ListBackgroundComposerChildren", I: z.r$A, O: z.Nn7, kind: j.MethodKind.Unary }, makePRBackgroundComposer: { name: "MakePRBackgroundComposer", I: z.w17, O: z.eAP, kind: j.MethodKind.Unary }, openPRBackgroundComposer: { name: "OpenPRBackgroundComposer", I: z.WZ5, O: z._3r, kind: j.MethodKind.Unary }, getBackgroundComposerStatus: { name: "GetBackgroundComposerStatus", I: z.SUj, O: z.M9t, kind: j.MethodKind.Unary }, addAsyncFollowupBackgroundComposer: { name: "AddAsyncFollowupBackgroundComposer", I: z.FFs, O: z.FE5, kind: j.MethodKind.Unary }, injectBackgroundComposerContext: { name: "InjectBackgroundComposerContext", I: z.oSm, O: z.Sv6, kind: j.MethodKind.Unary }, submitInteractionResponseBackgroundComposer: { name: "SubmitInteractionResponseBackgroundComposer", I: z.jeP, O: z.$5K, kind: j.MethodKind.Unary }, listPendingFollowups: { name: "ListPendingFollowups", I: z.oQP, O: z.c_Y, kind: j.MethodKind.Unary }, updatePendingFollowup: { name: "UpdatePendingFollowup", I: z.Sgj, O: z.k$2, kind: j.MethodKind.Unary }, deletePendingFollowup: { name: "DeletePendingFollowup", I: z.AIj, O: z.o6Z, kind: j.MethodKind.Unary }, reorderPendingFollowup: { name: "ReorderPendingFollowup", I: z.wP9, O: z.E$E, kind: j.MethodKind.Unary }, submitPendingFollowupNow: { name: "SubmitPendingFollowupNow", I: z.$te, O: z.pxd, kind: j.MethodKind.Unary }, markFollowupEditing: { name: "MarkFollowupEditing", I: z.XLg, O: z.NxT, kind: j.MethodKind.Unary }, getCursorServerUrl: { name: "GetCursorServerUrl", I: z.OUA, O: z.Q9S, kind: j.MethodKind.Unary }, warmCursorServerDownload: { name: "WarmCursorServerDownload", I: z.SX, O: z.I63, kind: j.MethodKind.Unary }, preWarmPod: { name: "PreWarmPod", I: z.FLZ, O: z.x8R, kind: j.MethodKind.Unary }, wakeBackgroundComposer: { name: "WakeBackgroundComposer", I: z.oXL, O: z.wF7, kind: j.MethodKind.Unary }, pauseBackgroundComposer: { name: "PauseBackgroundComposer", I: z.O6D, O: z.aWc, kind: j.MethodKind.Unary }, cancelBackgroundComposerToolCall: { name: "CancelBackgroundComposerToolCall", I: z._in, O: z.WOU, kind: j.MethodKind.Unary }, resumeBackgroundComposer: { name: "ResumeBackgroundComposer", I: z.Htf, O: z.NbP, kind: j.MethodKind.Unary }, archiveBackgroundComposer: { name: "ArchiveBackgroundComposer", I: z.wj9, O: z.CYG, kind: j.MethodKind.Unary }, archiveRepoBackgroundComposers: { name: "ArchiveRepoBackgroundComposers", I: z.BCP, O: z.Vf5, kind: j.MethodKind.Unary }, deleteBackgroundComposer: { name: "DeleteBackgroundComposer", I: z.jNw, O: z.vCd, kind: j.MethodKind.Unary }, getBackgroundComposerInfo: { name: "GetBackgroundComposerInfo", I: z.Y_J, O: z.C1Z, kind: j.MethodKind.Unary }, getBackgroundComposerEnvironmentVersion: { name: "GetBackgroundComposerEnvironmentVersion", I: z.RH3, O: z.j7u, kind: j.MethodKind.Unary }, getEnvironmentHistory: { name: "GetEnvironmentHistory", I: z.rhe, O: z.RVb, kind: j.MethodKind.Unary }, getBackgroundComposerTimings: { name: "GetBackgroundComposerTimings", I: z.LNj, O: z.plY, kind: j.MethodKind.Unary }, getBackgroundComposerRepositoryInfo: { name: "GetBackgroundComposerRepositoryInfo", I: z.M4E, O: z.s83, kind: j.MethodKind.Unary }, getMachine: { name: "GetMachine", I: z.BIY, O: z.zWh, kind: j.MethodKind.Unary }, listWorkspaceFiles: { name: "ListWorkspaceFiles", I: z.Y2v, O: z.Cnl, kind: j.MethodKind.Unary }, desktopLease: { name: "DesktopLease", I: z.IYi, O: z.oUQ, kind: j.MethodKind.Unary }, getMachineResourceUsage: { name: "GetMachineResourceUsage", I: z.yu1, O: ee, kind: j.MethodKind.Unary }, listDetailedBackgroundComposers: { name: "ListDetailedBackgroundComposers", I: z.tUz, O: z.VF_, kind: j.MethodKind.Unary }, listCloudAgentRunsForDashboard: { name: "ListCloudAgentRunsForDashboard", I: z.Buh, O: z.DiD, kind: j.MethodKind.Unary }, aggregateCloudAgentRunsForDashboard: { name: "AggregateCloudAgentRunsForDashboard", I: z.O7b, O: z._RQ, kind: j.MethodKind.Unary }, getCloudAgentRunForDashboard: { name: "GetCloudAgentRunForDashboard", I: z.oNB, O: z.i_b, kind: j.MethodKind.Unary }, listCloudAgentRunEventsForDashboard: { name: "ListCloudAgentRunEventsForDashboard", I: z.h_J, O: z.VHt, kind: j.MethodKind.Unary }, listNamedAgents: { name: "ListNamedAgents", I: z.F8D, O: z.fUo, kind: j.MethodKind.Unary }, listNamedAgentSessions: { name: "ListNamedAgentSessions", I: z.Vpr, O: z.rR8, kind: j.MethodKind.Unary }, listEventSubscriptions: { name: "ListEventSubscriptions", I: z.YXu, O: z.oLL, kind: j.MethodKind.Unary }, closeEventSubscription: { name: "CloseEventSubscription", I: z.jhQ, O: z.Hk1, kind: j.MethodKind.Unary }, getGithubAccessTokenForRepos: { name: "GetGithubAccessTokenForRepos", I: z.IlY, O: z.ERi, kind: j.MethodKind.Unary }, makeGithubRequest: { name: "MakeGithubRequest", I: z.cgv, O: z.W3_, kind: j.MethodKind.Unary }, getBackgroundComposerDiffDetails: { name: "GetBackgroundComposerDiffDetails", I: z.n93, O: z.Vzb, kind: j.MethodKind.Unary }, getOptimizedDiffDetails: { name: "GetOptimizedDiffDetails", I: z.WMw, O: z.WGk, kind: j.MethodKind.Unary }, getBackgroundComposerChangesHash: { name: "GetBackgroundComposerChangesHash", I: z.fob, O: z.Fw9, kind: j.MethodKind.Unary }, getBackgroundComposerPullRequest: { name: "GetBackgroundComposerPullRequest", I: z.mSm, O: z.ayY, kind: j.MethodKind.Unary }, refreshGithubAccessTokenInBackgroundComposer: { name: "RefreshGithubAccessTokenInBackgroundComposer", I: z.iqf, O: z.a6F, kind: j.MethodKind.Unary }, createBackgroundComposerPod: { name: "CreateBackgroundComposerPod", I: z.vSW, O: z.BE6, kind: j.MethodKind.Unary }, attachBackgroundComposerPod: { name: "AttachBackgroundComposerPod", I: z.QkZ, O: z.QWd, kind: j.MethodKind.ServerStreaming }, createBackgroundComposerPodSnapshot: { name: "CreateBackgroundComposerPodSnapshot", I: z.JHC, O: z.bJ8, kind: j.MethodKind.Unary }, changeBackgroundComposerSnapshotVisibility: { name: "ChangeBackgroundComposerSnapshotVisibility", I: z.W0U, O: z.Ql7, kind: j.MethodKind.Unary }, getBackgroundComposerSnapshotInfo: { name: "GetBackgroundComposerSnapshotInfo", I: z.iHR, O: z.K1R, kind: j.MethodKind.Unary }, listBackgroundComposerSnapshotsByBcId: { name: "ListBackgroundComposerSnapshotsByBcId", I: z.mOw, O: z.Af5, kind: j.MethodKind.Unary }, listBackgroundComposerSnapshotStatusesByBcIds: { name: "ListBackgroundComposerSnapshotStatusesByBcIds", I: z.G4v, O: z.e4W, kind: j.MethodKind.Unary }, getBackgroundComposerSnapshotState: { name: "GetBackgroundComposerSnapshotState", I: z.RT7, O: z.zxZ, kind: j.MethodKind.Unary }, watchBackgroundComposerSnapshotState: { name: "WatchBackgroundComposerSnapshotState", I: z.yu$, O: z.Mfv, kind: j.MethodKind.ServerStreaming }, getBackgroundComposerConversation: { name: "GetBackgroundComposerConversation", I: z.JTH, O: z.rVE, kind: j.MethodKind.Unary }, renameBackgroundComposer: { name: "RenameBackgroundComposer", I: z.M_M, O: z.SNB, kind: j.MethodKind.Unary }, saveCloudAgentVoiceCall: { name: "SaveCloudAgentVoiceCall", I: z.DFD, O: z.FhA, kind: j.MethodKind.Unary }, updateProjectAppearance: { name: "UpdateProjectAppearance", I: z.ULg, O: z.CY3, kind: j.MethodKind.Unary }, seedStagedProjects: { name: "SeedStagedProjects", I: z.FAs, O: z.$OW, kind: j.MethodKind.Unary }, listStagedProjects: { name: "ListStagedProjects", I: z.Iw0, O: z.C19, kind: j.MethodKind.Unary }, dismissStagedProject: { name: "DismissStagedProject", I: z.VPh, O: z.VCP, kind: j.MethodKind.Unary }, previewStagedProjects: { name: "PreviewStagedProjects", I: z.KoR, O: z._01, kind: j.MethodKind.Unary }, deleteStagedProjects: { name: "DeleteStagedProjects", I: z.lJm, O: z.$Fb, kind: j.MethodKind.Unary }, publishBackgroundComposerTempRepo: { name: "PublishBackgroundComposerTempRepo", I: z.vvP, O: z.xPH, kind: j.MethodKind.Unary }, reparentBackgroundComposer: { name: "ReparentBackgroundComposer", I: z.jif, O: z.hAr, kind: j.MethodKind.Unary }, setWorkerManager: { name: "SetWorkerManager", I: z.By2, O: z.$aD, kind: j.MethodKind.Unary }, createProjectWorker: { name: "CreateProjectWorker", I: z.x_A, O: z.RFI, kind: j.MethodKind.Unary }, clearWorkerManager: { name: "ClearWorkerManager", I: z.QhE, O: z.Y1$, kind: j.MethodKind.Unary }, listWorkersForManager: { name: "ListWorkersForManager", I: z.R1T, O: z.Ph9, kind: j.MethodKind.Unary }, listProjectSubtrees: { name: "ListProjectSubtrees", I: z.goT, O: z.m3n, kind: j.MethodKind.Unary }, streamBackgroundComposerUpdates: { name: "StreamBackgroundComposerUpdates", I: z.mGK, O: z.wJN, kind: j.MethodKind.ServerStreaming }, updateBackgroundComposerExperimentalModelOptOut: { name: "UpdateBackgroundComposerExperimentalModelOptOut", I: z.vE8, O: z.jpr, kind: j.MethodKind.Unary }, commitBackgroundComposer: { name: "CommitBackgroundComposer", I: z.HAL, O: z.xKX, kind: j.MethodKind.Unary }, setPersonalEnvironmentJson: { name: "SetPersonalEnvironmentJson", I: z.dzi, O: z.jFM, kind: j.MethodKind.Unary }, getPersonalEnvironmentJson: { name: "GetPersonalEnvironmentJson", I: z.Hsh, O: z.tIW, kind: j.MethodKind.Unary }, getEnvironmentJsonCandidates: { name: "GetEnvironmentJsonCandidates", I: z.xY2, O: z.llv, kind: j.MethodKind.Unary }, listPersonalEnvironments: { name: "ListPersonalEnvironments", I: z.eol, O: z.g53, kind: j.MethodKind.Unary }, deletePersonalEnvironmentJson: { name: "DeletePersonalEnvironmentJson", I: z._lu, O: z.Cvk, kind: j.MethodKind.Unary }, publishEnvironment: { name: "PublishEnvironment", I: z.k4t, O: z.kAu, kind: j.MethodKind.Unary }, publishPersonalEnvironment: { name: "PublishPersonalEnvironment", I: z.g2F, O: z._Js, kind: j.MethodKind.Unary }, listTeamEnvironments: { name: "ListTeamEnvironments", I: z.d9E, O: z.rpb, kind: j.MethodKind.Unary }, deleteTeamEnvironment: { name: "DeleteTeamEnvironment", I: z.LtT, O: z.JHS, kind: j.MethodKind.Unary }, setTeamEnvironmentJson: { name: "SetTeamEnvironmentJson", I: z.Q6X, O: z.Mgd, kind: j.MethodKind.Unary }, restoreEnvironmentVersion: { name: "RestoreEnvironmentVersion", I: z.Vbg, O: z.d29, kind: j.MethodKind.Unary }, listEnvironments: { name: "ListEnvironments", I: z.Cwe, O: z.A$2, kind: j.MethodKind.Unary }, getEnvironment: { name: "GetEnvironment", I: z.pgg, O: z.$KW, kind: j.MethodKind.Unary }, renameEnvironment: { name: "RenameEnvironment", I: z.JAJ, O: z.V7U, kind: j.MethodKind.Unary }, migrateEnvironmentToOrigin: { name: "MigrateEnvironmentToOrigin", I: z.Ppp, O: z.fSg, kind: j.MethodKind.Unary }, duplicateEnvironment: { name: "DuplicateEnvironment", I: z.cRl, O: z.GiL, kind: j.MethodKind.Unary }, listEnvironmentBuilds: { name: "ListEnvironmentBuilds", I: z.KwZ, O: z.c3J, kind: j.MethodKind.Unary }, getEnvironmentActiveBuild: { name: "GetEnvironmentActiveBuild", I: z.nqG, O: z.Xfg, kind: j.MethodKind.Unary }, getEnvironmentPersistentRecurringBuildFailures: { name: "GetEnvironmentPersistentRecurringBuildFailures", I: z.YNC, O: z.kfr, kind: j.MethodKind.Unary }, getEnvironmentBuild: { name: "GetEnvironmentBuild", I: z.VgC, O: z.rQh, kind: j.MethodKind.Unary }, getEnvironmentBuildConfig: { name: "GetEnvironmentBuildConfig", I: z.$2f, O: z.leV, kind: j.MethodKind.Unary }, updateEnvironmentBuild: { name: "UpdateEnvironmentBuild", I: z.eqt, O: z.oRi, kind: j.MethodKind.Unary }, triggerEnvironmentBuild: { name: "TriggerEnvironmentBuild", I: z.D7y, O: z.tTg, kind: j.MethodKind.Unary }, attachEnvironmentBuildLog: { name: "AttachEnvironmentBuildLog", I: z.mmt, O: z.iSl, kind: j.MethodKind.ServerStreaming }, cancelEnvironmentBuild: { name: "CancelEnvironmentBuild", I: z.XXX, O: z.ZzM, kind: j.MethodKind.Unary }, getEnvironmentBuildSettings: { name: "GetEnvironmentBuildSettings", I: z.Ctm, O: z.I4r, kind: j.MethodKind.Unary }, updateEnvironmentBuildSettings: { name: "UpdateEnvironmentBuildSettings", I: z.nk$, O: z.xQ, kind: j.MethodKind.Unary }, resolveOrCreateMultiRepoEnvironment: { name: "ResolveOrCreateMultiRepoEnvironment", I: z.fTZ, O: z.LKF, kind: j.MethodKind.Unary }, resolveOrCreateDraftEnvironment: { name: "ResolveOrCreateDraftEnvironment", I: z.DuM, O: z.brK, kind: j.MethodKind.Unary }, snapshotAndSaveEnvironment: { name: "SnapshotAndSaveEnvironment", I: z.jnd, O: z.Dkj, kind: j.MethodKind.Unary }, listReposWithLocalEnvironment: { name: "ListReposWithLocalEnvironment", I: z.T_4, O: z.XVt, kind: j.MethodKind.Unary }, markBackgroundComposerRead: { name: "MarkBackgroundComposerRead", I: z.FZx, O: z.t8V, kind: j.MethodKind.Unary }, markBackgroundComposerUnread: { name: "MarkBackgroundComposerUnread", I: z.qfW, O: z.WZT, kind: j.MethodKind.Unary }, advanceBackgroundComposerReadCursor: { name: "AdvanceBackgroundComposerReadCursor", I: z.A6L, O: z.UcJ, kind: j.MethodKind.Unary }, notifyBackgroundComposerShown: { name: "NotifyBackgroundComposerShown", I: z.emS, O: z.Ckz, kind: j.MethodKind.Unary }, fetchBackgroundComposer: { name: "FetchBackgroundComposer", I: z.STY, O: z.IUx, kind: j.MethodKind.Unary }, getTurnSummaryBackgroundComposer: { name: "GetTurnSummaryBackgroundComposer", I: z.zoE, O: z.lEW, kind: j.MethodKind.Unary }, getBackgroundComposerName: { name: "GetBackgroundComposerName", I: z.t19, O: z.lym, kind: j.MethodKind.Unary }, getBackgroundComposerPrompt: { name: "GetBackgroundComposerPrompt", I: z.ETN, O: z.YrB, kind: j.MethodKind.Unary }, readBinaryFile: { name: "ReadBinaryFile", I: z.nSy, O: z.TV9, kind: j.MethodKind.Unary }, listBackgroundComposerArtifacts: { name: "ListBackgroundComposerArtifacts", I: z.bGX, O: z.dKy, kind: j.MethodKind.Unary }, getBackgroundComposerArtifact: { name: "GetBackgroundComposerArtifact", I: z.QN3, O: z.m_2, kind: j.MethodKind.Unary }, getBackgroundComposerArtifactBytes: { name: "GetBackgroundComposerArtifactBytes", I: z.tnE, O: z.fPH, kind: j.MethodKind.Unary }, streamBackgroundComposerArtifact: { name: "StreamBackgroundComposerArtifact", I: z.etb, O: z.qho, kind: j.MethodKind.ServerStreaming }, listSharedBackgroundComposerArtifacts: { name: "ListSharedBackgroundComposerArtifacts", I: z.s6$, O: z.Eg9, kind: j.MethodKind.Unary }, shareBackgroundComposerArtifact: { name: "ShareBackgroundComposerArtifact", I: z.Bs6, O: z.p$w, kind: j.MethodKind.Unary }, unshareBackgroundComposerArtifact: { name: "UnshareBackgroundComposerArtifact", I: z.WdU, O: z._hK, kind: j.MethodKind.Unary }, getPublicBackgroundComposerArtifact: { name: "GetPublicBackgroundComposerArtifact", I: z.dBV, O: z.lcJ, kind: j.MethodKind.Unary }, updateBackgroundComposerUserSettings: { name: "UpdateBackgroundComposerUserSettings", I: z.rtk, O: z.B70, kind: j.MethodKind.Unary }, getBackgroundComposerUserSettings: { name: "GetBackgroundComposerUserSettings", I: z.knx, O: z.c3R, kind: j.MethodKind.Unary }, updateBackgroundComposerEnvironment: { name: "UpdateBackgroundComposerEnvironment", I: z.aSW, O: z.yMG, kind: j.MethodKind.Unary }, getRepositoryBranches: { name: "GetRepositoryBranches", I: z.wfJ, O: z.Y11, kind: j.MethodKind.Unary }, getRepositoryDefaultBranch: { name: "GetRepositoryDefaultBranch", I: z.tUI, O: z.VFP, kind: j.MethodKind.Unary }, getPullRequestMergeStatus: { name: "GetPullRequestMergeStatus", I: z.O9v, O: z.Kjz, kind: j.MethodKind.Unary }, getDetailedPullRequestStatus: { name: "GetDetailedPullRequestStatus", I: z.G6j, O: z.kT7, kind: j.MethodKind.Unary }, checkPullRequestMergeability: { name: "CheckPullRequestMergeability", I: z.kz7, O: z.IRR, kind: j.MethodKind.Unary }, getPullRequestDiscussions: { name: "GetPullRequestDiscussions", I: z.VDi, O: z.Lh4, kind: j.MethodKind.Unary }, getPullRequestCommits: { name: "GetPullRequestCommits", I: z.W$u, O: z.KtS, kind: j.MethodKind.Unary }, getPullRequestTimelineEvents: { name: "GetPullRequestTimelineEvents", I: z.EtC, O: z.kNC, kind: j.MethodKind.Unary }, replyToReviewThread: { name: "ReplyToReviewThread", I: z.Paz, O: z.RS3, kind: j.MethodKind.Unary }, resolveReviewThread: { name: "ResolveReviewThread", I: z.YJS, O: z.I10, kind: j.MethodKind.Unary }, unresolveReviewThread: { name: "UnresolveReviewThread", I: z.f6P, O: z.mAw, kind: j.MethodKind.Unary }, deletePullRequestReviewComment: { name: "DeletePullRequestReviewComment", I: z.uG2, O: z.Wq8, kind: j.MethodKind.Unary }, addPullRequestReviewComment: { name: "AddPullRequestReviewComment", I: z._hm, O: z.IWb, kind: j.MethodKind.Unary }, mergePullRequest: { name: "MergePullRequest", I: z.Iu7, O: z.o0u, kind: j.MethodKind.Unary }, enablePullRequestAutoMerge: { name: "EnablePullRequestAutoMerge", I: z.uor, O: z.eep, kind: j.MethodKind.Unary }, disablePullRequestAutoMerge: { name: "DisablePullRequestAutoMerge", I: z.LIf, O: z.JmB, kind: j.MethodKind.Unary }, convertPullRequestFromDraft: { name: "ConvertPullRequestFromDraft", I: z.MjE, O: z.Wmt, kind: j.MethodKind.Unary }, updatePullRequestBranch: { name: "UpdatePullRequestBranch", I: z.RU, O: z.NNE, kind: j.MethodKind.Unary }, registerPushNotificationToken: { name: "RegisterPushNotificationToken", I: z.nL3, O: z.pXc, kind: j.MethodKind.Unary }, deletePushNotificationToken: { name: "DeletePushNotificationToken", I: z.dbI, O: z.bt2, kind: j.MethodKind.Unary }, resolveOriginAgentApproval: { name: "ResolveOriginAgentApproval", I: z.c2F, O: z._bb, kind: j.MethodKind.Unary }, getOriginAgentApproval: { name: "GetOriginAgentApproval", I: z.Ugu, O: z.mZT, kind: j.MethodKind.Unary }, syncLiveActivity: { name: "SyncLiveActivity", I: z._ps, O: z.Kft, kind: j.MethodKind.Unary }, deleteLiveActivity: { name: "DeleteLiveActivity", I: z.ccq, O: z.car, kind: j.MethodKind.Unary }, verifyBackgroundComposerAccess: { name: "VerifyBackgroundComposerAccess", I: z.BUE, O: z.LIp, kind: j.MethodKind.Unary }, startSlackStreamingForFollowup: { name: "StartSlackStreamingForFollowup", I: z.d$o, O: z.Dtj, kind: j.MethodKind.Unary }, startGithubStreamingForFollowup: { name: "StartGithubStreamingForFollowup", I: z.Mng, O: z.WO7, kind: j.MethodKind.Unary }, startLinearStreamingForFollowup: { name: "StartLinearStreamingForFollowup", I: z.Onu, O: z.ej_, kind: j.MethodKind.Unary }, getGithubInstallations: { name: "GetGithubInstallations", I: te.kcC, O: te.UYU, kind: j.MethodKind.Unary }, fetchAllInstallationRepos: { name: "FetchAllInstallationRepos", I: te.UfC, O: te.gJO, kind: j.MethodKind.Unary }, getBackgroundComposerVmUsage: { name: "GetBackgroundComposerVmUsage", I: z.aw2, O: z.usA, kind: j.MethodKind.Unary }, getCloudAgentDebugDetails: { name: "GetCloudAgentDebugDetails", I: z.jC6, O: z.b$5, kind: j.MethodKind.Unary }, getCloudAgentMemoryDbLogs: { name: "GetCloudAgentMemoryDbLogs", I: z.CkI, O: z.wbS, kind: j.MethodKind.Unary }, createAgentShare: { name: "CreateAgentShare", I: z.I2o, O: z.S93, kind: j.MethodKind.Unary }, getAgentSharePreview: { name: "GetAgentSharePreview", I: z.qtI, O: z.Y6D, kind: j.MethodKind.Unary }, listPrivateWorkers: { name: "ListPrivateWorkers", I: z.eQJ, O: z.Kqy, kind: j.MethodKind.Unary }, listPrivateWorkerPools: { name: "ListPrivateWorkerPools", I: z.skc, O: z.A8n, kind: j.MethodKind.Unary }, listPlacementGrants: { name: "ListPlacementGrants", I: z.chA, O: z.iWX, kind: j.MethodKind.Unary }, updatePlacementGrants: { name: "UpdatePlacementGrants", I: z.pYO, O: z.BF4, kind: j.MethodKind.Unary }, registerPrivateWorkerPool: { name: "RegisterPrivateWorkerPool", I: z.__2, O: z.Cak, kind: j.MethodKind.Unary }, deregisterPrivateWorkerPool: { name: "DeregisterPrivateWorkerPool", I: z.TwX, O: z.d8w, kind: j.MethodKind.Unary }, adminListUserPrivateWorkers: { name: "AdminListUserPrivateWorkers", I: z.kAU, O: z.AOw, kind: j.MethodKind.Unary }, adminKillBackgroundComposer: { name: "AdminKillBackgroundComposer", I: z.tBI, O: z.hGF, kind: j.MethodKind.Unary }, adminSettleInteraction: { name: "AdminSettleInteraction", I: z.wcy, O: z._pH, kind: j.MethodKind.Unary }, adminUnparkFollowups: { name: "AdminUnparkFollowups", I: z.fHd, O: z.n0f, kind: j.MethodKind.Unary }, adminListActiveBackgroundComposers: { name: "AdminListActiveBackgroundComposers", I: z.Uig, O: z.Qm7, kind: j.MethodKind.Unary }, adminKillAllActiveBackgroundComposers: { name: "AdminKillAllActiveBackgroundComposers", I: z.Z26, O: z.pNw, kind: j.MethodKind.Unary }, listPendingPrivateWorkerRequests: { name: "ListPendingPrivateWorkerRequests", I: z.eUR, O: z.uuM, kind: j.MethodKind.Unary }, streamPendingPrivateWorkerRequests: { name: "StreamPendingPrivateWorkerRequests", I: z.uic, O: z.ucH, kind: j.MethodKind.ServerStreaming }, claimPendingPrivateWorkerRequest: { name: "ClaimPendingPrivateWorkerRequest", I: z.vv1, O: z.xPf, kind: j.MethodKind.Unary }, releasePrivateWorkerClaim: { name: "ReleasePrivateWorkerClaim", I: z.evp, O: z.QwO, kind: j.MethodKind.Unary }, getPrivateWorkersSummary: { name: "GetPrivateWorkersSummary", I: z.WcO, O: z.EpF, kind: j.MethodKind.Unary }, getPrivateWorker: { name: "GetPrivateWorker", I: z.p4E, O: z.Jnn, kind: j.MethodKind.Unary }, releasePrivateWorker: { name: "ReleasePrivateWorker", I: z.EJE, O: z.sRE, kind: j.MethodKind.Unary }, batchRefreshPullRequestStatus: { name: "BatchRefreshPullRequestStatus", I: z.FCY, O: z.B9R, kind: j.MethodKind.Unary }, listAgentStores: { name: "ListAgentStores", I: o.vz, O: o.xL, kind: j.MethodKind.Unary }, listAgentStoreEntries: { name: "ListAgentStoreEntries", I: o.uH, O: o.i1, kind: j.MethodKind.Unary }, readAgentStoreFile: { name: "ReadAgentStoreFile", I: o.uj, O: o.Em, kind: j.MethodKind.Unary }, writeAgentStoreDocument: { name: "WriteAgentStoreDocument", I: o.Hr, O: o._I, kind: j.MethodKind.Unary }, setAgentStoreDocumentVisibility: { name: "SetAgentStoreDocumentVisibility", I: o.V8, O: o.ph, kind: j.MethodKind.Unary }, mintAgentStoreToken: { name: "MintAgentStoreToken", I: o.dy, O: o.Nj, kind: j.MethodKind.Unary }, writeCanvas: { name: "WriteCanvas", I: z.rFS, O: z.sa6, kind: j.MethodKind.Unary }, readCanvas: { name: "ReadCanvas", I: z.yVw, O: z.MuG, kind: j.MethodKind.Unary }, listAgentStoreFiles: { name: "ListAgentStoreFiles", I: o.JN, O: o.NS, kind: j.MethodKind.Unary }, listAgentStoreDirectory: { name: "ListAgentStoreDirectory", I: o.zc, O: o.p0, kind: j.MethodKind.Unary }, checkAgentStoreVersions: { name: "CheckAgentStoreVersions", I: o.rX, O: o.X8, kind: j.MethodKind.Unary }, presignAgentStoreReads: { name: "PresignAgentStoreReads", I: o.xN, O: o.tK, kind: j.MethodKind.Unary }, presignAgentStoreWrites: { name: "PresignAgentStoreWrites", I: o.WJ, O: o.GL, kind: j.MethodKind.Unary }, completeAgentStoreMultipartWrites: { name: "CompleteAgentStoreMultipartWrites", I: o.bB, O: o.t3, kind: j.MethodKind.Unary }, abortAgentStoreMultipartWrites: { name: "AbortAgentStoreMultipartWrites", I: o.mr, O: o.U4, kind: j.MethodKind.Unary }, presignPromptUpload: { name: "PresignPromptUpload", I: z.Nox, O: z.pr, kind: j.MethodKind.Unary }, completePromptUpload: { name: "CompletePromptUpload", I: z.mz8, O: z.kwT, kind: j.MethodKind.Unary }, abortPromptUpload: { name: "AbortPromptUpload", I: z.VPy, O: z.r5i, kind: j.MethodKind.Unary }, acquireAgentStoreFileLock: { name: "AcquireAgentStoreFileLock", I: o.rd, O: o.N5, kind: j.MethodKind.Unary }, renewAgentStoreFileLock: { name: "RenewAgentStoreFileLock", I: o.a1, O: o.aZ, kind: j.MethodKind.Unary }, releaseAgentStoreFileLock: { name: "ReleaseAgentStoreFileLock", I: o.sc, O: o.qZ, kind: j.MethodKind.Unary }, getAgentStoreFileLock: { name: "GetAgentStoreFileLock", I: o.bH, O: o.Hm, kind: j.MethodKind.Unary }, deleteAgentStoreFiles: { name: "DeleteAgentStoreFiles", I: o.uM, O: o.OM, kind: j.MethodKind.Unary }, rmdirAgentStore: { name: "RmdirAgentStore", I: o.q5, O: o.q$, kind: j.MethodKind.Unary }, undeleteAgentStoreFiles: { name: "UndeleteAgentStoreFiles", I: o.FF, O: o.xQ, kind: j.MethodKind.Unary }, listAgentStoreTombstones: { name: "ListAgentStoreTombstones", I: o.I1, O: o.aU, kind: j.MethodKind.Unary }, shareAgentStore: { name: "ShareAgentStore", I: o.FT, O: o.fp, kind: j.MethodKind.Unary }, unshareAgentStore: { name: "UnshareAgentStore", I: o.Og, O: o.Qv, kind: j.MethodKind.Unary }, listSharedAgentStores: { name: "ListSharedAgentStores", I: o.WQ, O: o.op, kind: j.MethodKind.Unary }, provisionSyntheticsServiceAccounts: { name: "ProvisionSyntheticsServiceAccounts", I: z.aCR, O: z.euU, kind: j.MethodKind.Unary }, startCloudAgentLoadTest: { name: "StartCloudAgentLoadTest", I: z.O3Q, O: z.k_c, kind: j.MethodKind.Unary }, ensureModelRoutingLoadTestStarted: { name: "EnsureModelRoutingLoadTestStarted", I: z.ELT, O: z.qmY, kind: j.MethodKind.Unary }, cancelModelRoutingLoadTest: { name: "CancelModelRoutingLoadTest", I: z.rOM, O: z.jlp, kind: j.MethodKind.Unary }, mintCustomerPrivatelinkProxyToken: { name: "MintCustomerPrivatelinkProxyToken", I: z.Ghl, O: z.ODu, kind: j.MethodKind.Unary }, listCustomerPrivatelinkAllowedHosts: { name: "ListCustomerPrivatelinkAllowedHosts", I: z.sHj, O: z.U1W, kind: j.MethodKind.Unary }, adminListTeamNamedAgents: { name: "AdminListTeamNamedAgents", I: z.hgq, O: z.Zd1, kind: j.MethodKind.Unary }, adminDeleteNamedAgent: { name: "AdminDeleteNamedAgent", I: z.E6n, O: z.gaC, kind: j.MethodKind.Unary }, listKeyrings: { name: "ListKeyrings", I: z.wLB, O: z.QHD, kind: j.MethodKind.Unary }, getKeyring: { name: "GetKeyring", I: z.jL$, O: z.x7$, kind: j.MethodKind.Unary }, createKeyring: { name: "CreateKeyring", I: z.xRg, O: z.ZGp, kind: j.MethodKind.Unary }, createKeyringFromTeamSecrets: { name: "CreateKeyringFromTeamSecrets", I: z.$bT, O: z.fOq, kind: j.MethodKind.Unary }, copyTeamSecretsToKeyring: { name: "CopyTeamSecretsToKeyring", I: z.dKf, O: z.T0_, kind: j.MethodKind.Unary }, renameKeyring: { name: "RenameKeyring", I: z.BmM, O: z.n4S, kind: j.MethodKind.Unary }, deleteKeyring: { name: "DeleteKeyring", I: z.u_9, O: z.OEK, kind: j.MethodKind.Unary }, listKeyringSecrets: { name: "ListKeyringSecrets", I: z.kpM, O: z.Ell, kind: j.MethodKind.Unary }, createKeyringSecret: { name: "CreateKeyringSecret", I: z.HWL, O: z.LHM, kind: j.MethodKind.Unary }, updateKeyringSecret: { name: "UpdateKeyringSecret", I: z.Ohy, O: z.koZ, kind: j.MethodKind.Unary }, revokeKeyringSecret: { name: "RevokeKeyringSecret", I: z.VyU, O: z.Zfl, kind: j.MethodKind.Unary }, listKeyringGrants: { name: "ListKeyringGrants", I: z.yRi, O: z.cEv, kind: j.MethodKind.Unary }, grantKeyringPermissions: { name: "GrantKeyringPermissions", I: z.z8w, O: z.Vcn, kind: j.MethodKind.Unary }, updateKeyringPermissions: { name: "UpdateKeyringPermissions", I: z.OAc, O: z.iec, kind: j.MethodKind.Unary }, revokeKeyringPermissions: { name: "RevokeKeyringPermissions", I: z.dcP, O: z.n2e, kind: j.MethodKind.Unary } } };
    var ne = r(99152), se = r(8032), oe = function(e2) {
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
    }, ie = function(e2) {
      return this instanceof ie ? (this.v = e2, this) : new ie(e2);
    }, ae = function(e2, t2, r2) {
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
          (r3 = s2[e3](t3)).value instanceof ie ? Promise.resolve(r3.value.v).then(c2, l2) : u2(o2[0][2], r3);
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
    }, ce = function(e2) {
      var t2, r2;
      return t2 = {}, n2("next"), n2("throw", function(e3) {
        throw e3;
      }), n2("return"), t2[Symbol.iterator] = function() {
        return this;
      }, t2;
      function n2(n3, s2) {
        t2[n3] = e2[n3] ? function(t3) {
          return (r2 = !r2) ? { value: ie(e2[n3](t3)), done: false } : s2 ? s2(t3) : t3;
        } : s2;
      }
    };
    var le = function(e2) {
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
    }, ue = function(e2) {
      return this instanceof ue ? (this.v = e2, this) : new ue(e2);
    }, de = function(e2) {
      var t2, r2;
      return t2 = {}, n2("next"), n2("throw", function(e3) {
        throw e3;
      }), n2("return"), t2[Symbol.iterator] = function() {
        return this;
      }, t2;
      function n2(n3, s2) {
        t2[n3] = e2[n3] ? function(t3) {
          return (r2 = !r2) ? { value: ue(e2[n3](t3)), done: false } : s2 ? s2(t3) : t3;
        } : s2;
      }
    }, pe = function(e2, t2, r2) {
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
          (r3 = s2[e3](t3)).value instanceof ue ? Promise.resolve(r3.value.v).then(c2, l2) : u2(o2[0][2], r3);
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
    function me(e2, t2) {
      return (function(e3, t3) {
        const r2 = {};
        for (const [n2, s2] of Object.entries(e3.methods)) {
          const o2 = t3(Object.assign(Object.assign({}, s2), { localName: n2, service: e3 }));
          null != o2 && (r2[n2] = o2);
        }
        return r2;
      })(e2, (r2) => {
        switch (r2.kind) {
          case j.MethodKind.Unary:
            return /* @__PURE__ */ (function(e3, t3, r3) {
              return async function(n2, s2) {
                var o2, i2;
                const a2 = await e3.unary(t3, r3, null == s2 ? void 0 : s2.signal, null == s2 ? void 0 : s2.timeoutMs, null == s2 ? void 0 : s2.headers, n2, null == s2 ? void 0 : s2.contextValues);
                return null === (o2 = null == s2 ? void 0 : s2.onHeader) || void 0 === o2 || o2.call(s2, a2.header), null === (i2 = null == s2 ? void 0 : s2.onTrailer) || void 0 === i2 || i2.call(s2, a2.trailer), a2.message;
              };
            })(t2, e2, r2);
          case j.MethodKind.ServerStreaming:
            return /* @__PURE__ */ (function(e3, t3, r3) {
              return function(n2, s2) {
                return he(e3.stream(t3, r3, null == s2 ? void 0 : s2.signal, null == s2 ? void 0 : s2.timeoutMs, null == s2 ? void 0 : s2.headers, (function(e4) {
                  return ae(this, arguments, function* () {
                    yield ie(yield* ce(oe(e4)));
                  });
                })([n2]), null == s2 ? void 0 : s2.contextValues), s2);
              };
            })(t2, e2, r2);
          case j.MethodKind.ClientStreaming:
            return /* @__PURE__ */ (function(e3, t3, r3) {
              return async function(n2, s2) {
                var o2, i2, a2, c2, l2, u2;
                const d2 = await e3.stream(t3, r3, null == s2 ? void 0 : s2.signal, null == s2 ? void 0 : s2.timeoutMs, null == s2 ? void 0 : s2.headers, n2, null == s2 ? void 0 : s2.contextValues);
                let p2;
                null === (l2 = null == s2 ? void 0 : s2.onHeader) || void 0 === l2 || l2.call(s2, d2.header);
                let m2 = 0;
                try {
                  for (var h2, f2 = true, g2 = le(d2.message); !(o2 = (h2 = await g2.next()).done); f2 = true) {
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
                if (!p2) throw new ne.T("protocol error: missing response message", se.C.Unimplemented);
                if (m2 > 1) throw new ne.T("protocol error: received extra messages for client streaming method", se.C.Unimplemented);
                return null === (u2 = null == s2 ? void 0 : s2.onTrailer) || void 0 === u2 || u2.call(s2, d2.trailer), p2;
              };
            })(t2, e2, r2);
          case j.MethodKind.BiDiStreaming:
            return /* @__PURE__ */ (function(e3, t3, r3) {
              return function(n2, s2) {
                return he(e3.stream(t3, r3, null == s2 ? void 0 : s2.signal, null == s2 ? void 0 : s2.timeoutMs, null == s2 ? void 0 : s2.headers, n2, null == s2 ? void 0 : s2.contextValues), s2);
              };
            })(t2, e2, r2);
          default:
            return null;
        }
      });
    }
    function he(e2, t2) {
      const r2 = (function() {
        return pe(this, arguments, function* () {
          var r3, n2;
          const s2 = yield ue(e2);
          null === (r3 = null == t2 ? void 0 : t2.onHeader) || void 0 === r3 || r3.call(t2, s2.header), yield ue(yield* de(le(s2.message))), null === (n2 = null == t2 ? void 0 : t2.onTrailer) || void 0 === n2 || n2.call(t2, s2.trailer);
        });
      })()[Symbol.asyncIterator]();
      return { [Symbol.asyncIterator]: () => ({ next: () => r2.next() }) };
    }
    function fe(e2) {
      return e2 instanceof ye ? e2.connectCode : e2 instanceof ne.T ? e2.code : "object" == typeof e2 && null !== e2 && "code" in e2 ? rt(e2.code) : void 0;
    }
    function ge(e2, t2) {
      return fe(e2) === t2;
    }
    class ye extends Error {
      constructor(e2) {
        const t2 = Te(e2.cause);
        super(t2.length > 0 ? t2 : "Agent store mint failed", { cause: e2.cause }), this.name = "AgentStoreMintFailedError", this.cause = e2.cause, this.connectCode = (function(e3) {
          if (e3 instanceof ne.T) return e3.code;
          if ("object" != typeof e3 || null === e3 || !("code" in e3)) return;
          return rt(e3.code);
        })(e2.cause), this.retryAfterMs = e2.retryAfterMs, this.attempts = e2.attempts;
      }
    }
    function we(e2) {
      return e2 instanceof ye;
    }
    function ve(e2) {
      const t2 = /* @__PURE__ */ new Set();
      let r2 = e2;
      for (; null != r2 && !t2.has(r2); ) {
        if (we(r2)) return true;
        if (t2.add(r2), "object" != typeof r2 || !("cause" in r2)) return false;
        r2 = r2.cause;
      }
      return false;
    }
    function _e(e2) {
      return e2 instanceof ye ? e2.cause : e2;
    }
    function be(e2) {
      const t2 = fe(e2);
      return t2 === se.C.InvalidArgument || t2 === se.C.NotFound || t2 === se.C.FailedPrecondition;
    }
    function Se(e2) {
      if ((function(e3) {
        for (const t2 of Ee(e3)) if (t2 instanceof ne.T && t2.findDetails(W.vj).some((e4) => ke.has(e4.error))) return true;
        return false;
      })(e2) || (function(e3) {
        for (const t2 of Ee(e3)) for (const e4 of Je(t2)) {
          const t3 = e4.toLowerCase();
          if (xe.some((e5) => t3.includes(e5))) return true;
        }
        return false;
      })(e2)) return false;
      for (const t2 of Ee(e2)) {
        if (t2 instanceof i) return true;
        if (Ie(t2)) return true;
        const e3 = fe(t2);
        if (e3 === se.C.Unauthenticated || e3 === se.C.PermissionDenied) return true;
      }
      return false;
    }
    const ke = /* @__PURE__ */ new Set([W.yM.NOT_LOGGED_IN, W.yM.INVALID_AUTH_ID, W.yM.AUTH_TOKEN_NOT_FOUND, W.yM.AUTH_TOKEN_EXPIRED]), xe = ["private worker is not connected", "private worker does not match the authenticated caller", "background composer is not live for private worker agent-store minting", "private worker is not assigned to this background composer"];
    function Ee(e2) {
      const t2 = [], r2 = /* @__PURE__ */ new Set();
      let n2 = e2;
      for (; null != n2 && "object" == typeof n2 && !r2.has(n2); ) r2.add(n2), t2.push(n2), n2 = "cause" in n2 ? n2.cause : void 0;
      return t2;
    }
    function Ie(e2) {
      if (!(function(e3) {
        const t3 = e3.toLowerCase();
        return t3.includes("agent store sync is not enabled") || t3.includes("agent store sync is not available in legacy privacy mode") || t3.includes("private worker agent-store sync is not enabled");
      })(Te(e2))) return false;
      const t2 = fe(e2);
      return void 0 === t2 || t2 === se.C.InvalidArgument || t2 === se.C.PermissionDenied;
    }
    function Te(e2) {
      return e2 instanceof Error ? e2.message : "string" == typeof e2 ? e2 : "";
    }
    const Ce = "agent_store_quota_exceeded", Pe = "agent_store_backend_throttled", Ae = 1e3, Re = "agent_store_dir_not_empty";
    function Me(e2) {
      const t2 = `${e2.key}=`, r2 = e2.haystack.indexOf(t2);
      if (r2 < 0) return;
      const n2 = e2.haystack.slice(r2 + t2.length), s2 = n2.search(/\s/), o2 = (s2 < 0 ? n2 : n2.slice(0, s2)).trim();
      return o2.length > 0 ? o2 : void 0;
    }
    function Je(e2) {
      const t2 = [], r2 = Te(e2);
      if (r2.length > 0 && t2.push(r2), e2 instanceof ne.T) for (const r3 of e2.findDetails(W.vj)) {
        const e3 = r3.details?.detail;
        "string" == typeof e3 && e3.length > 0 && t2.push(e3);
        const n2 = r3.details?.title;
        "string" == typeof n2 && n2.length > 0 && t2.push(n2);
      }
      return t2;
    }
    function Oe(e2) {
      const t2 = e2.trim();
      return "Error" === t2 || "[failed_precondition] Error" === t2 || /^\[[^\]]+\] Error$/.test(t2);
    }
    function Be(e2) {
      const t2 = e2.indexOf(". marker=");
      if (t2 > 0) return e2.slice(0, t2 + 1).trim();
      const r2 = e2.indexOf(" marker=");
      return r2 > 0 ? e2.slice(0, r2).trim() : e2;
    }
    function De(e2, t2) {
      const r2 = _e(e2), n2 = Te(r2).trim();
      if (n2.length > 0 && !Oe(n2)) return Be(n2);
      if (r2 instanceof ne.T) {
        const e3 = r2.rawMessage.trim();
        if (e3.length > 0 && !Oe(e3)) return Be(e3);
        for (const e4 of r2.findDetails(W.vj)) {
          const t3 = e4.details?.title?.trim();
          if (void 0 !== t3 && t3.length > 0 && !Oe(t3)) return Be(t3);
          const r3 = e4.details?.detail?.trim();
          if (void 0 !== r3 && r3.length > 0 && !Oe(r3)) return Be(r3);
        }
      }
      return t2;
    }
    function qe(e2) {
      const t2 = _e(e2);
      if (!ge(t2, se.C.FailedPrecondition) && !ge(t2, se.C.InvalidArgument)) return;
      const r2 = Je(t2).find((e3) => e3.includes(Ce));
      if (void 0 === r2) return;
      const n2 = Me({ haystack: r2, key: "limit_bytes" }), s2 = Me({ haystack: r2, key: "usage_bytes" });
      return { scopeKind: Me({ haystack: r2, key: "scope" }) ?? "store", resource: Me({ haystack: r2, key: "resource" }) ?? "storage_bytes", limitBytes: void 0 !== n2 ? Number(n2) : 0, usageBytes: void 0 !== s2 ? Number(s2) : 0, storeId: Me({ haystack: r2, key: "store_id" }) ?? "" };
    }
    function Ne(e2) {
      const t2 = Le(e2, "Retry-After");
      if (void 0 === t2) return;
      const r2 = Number.parseInt(t2.trim(), 10);
      return !Number.isFinite(r2) || r2 < 0 ? void 0 : 1e3 * r2;
    }
    const Fe = "x-cursor-agent-store-retry-after-ms";
    function Ue(e2) {
      const t2 = Le(e2, Fe);
      if (void 0 === t2) return;
      const r2 = Number.parseInt(t2.trim(), 10);
      return !Number.isFinite(r2) || r2 < 0 ? void 0 : r2;
    }
    function Le(e2, t2) {
      for (const r2 of Ee(e2)) {
        const e3 = $e(r2, t2);
        if (void 0 !== e3) return e3;
      }
    }
    function $e(e2, t2) {
      if (e2 instanceof ne.T) {
        const r3 = e2.metadata.get(t2);
        if (null !== r3 && r3.length > 0) return r3;
      }
      if ("object" != typeof e2 || null === e2 || !("metadata" in e2)) return;
      const r2 = e2.metadata;
      if (r2 instanceof Headers) {
        const e3 = r2.get(t2);
        if (null !== e3 && e3.length > 0) return e3;
      }
    }
    function je(e2) {
      if (Ie(e2)) return Ne(e2);
    }
    function Ge(e2) {
      const t2 = _e(e2), r2 = fe(t2), n2 = (function(e3) {
        if ("object" == typeof e3 && null !== e3) {
          for (const t3 of ["status", "statusCode"]) if (t3 in e3) {
            const r3 = e3[t3];
            if ("number" == typeof r3 && Number.isFinite(r3)) return r3;
          }
        }
      })(t2);
      if (!(r2 === se.C.ResourceExhausted || r2 === se.C.Unavailable || 429 === n2 || 503 === n2)) return;
      const s2 = Je(t2).find((e3) => e3.includes(Pe));
      return { retryAfterMs: Ne(t2) ?? Ae, scope: void 0 !== s2 ? Me({ haystack: s2, key: "scope" }) ?? "" : "", storeId: void 0 !== s2 ? Me({ haystack: s2, key: "store_id" }) ?? "" : "" };
    }
    function ze(e2) {
      return !!ge(e2, se.C.FailedPrecondition) && Je(e2).some((e3) => e3.includes(Re));
    }
    const We = /* @__PURE__ */ new Set([se.C.Unavailable, se.C.ResourceExhausted, se.C.Internal, se.C.DeadlineExceeded]), He = /* @__PURE__ */ new Set(["ECONNREFUSED", "ECONNRESET", "EHOSTUNREACH", "ENETDOWN", "ENETUNREACH", "ENOTFOUND", "EPIPE", "EAI_AGAIN", "ETIMEDOUT", "UND_ERR_CONNECT_TIMEOUT", "UND_ERR_HEADERS_TIMEOUT", "UND_ERR_SOCKET"]), Ke = ["connection reset", "fetch failed", "network error", "other side closed", "socket hang up"];
    function Ve(e2) {
      const t2 = _e(e2);
      if (Ye(t2) || Ie(t2)) return false;
      if (be(t2)) return false;
      if ((function(e3) {
        const t3 = fe(e3);
        if (t3 === se.C.Unauthenticated || t3 === se.C.PermissionDenied) return true;
        if ("object" != typeof e3 || null === e3) return false;
        if ("status" in e3) {
          const t4 = e3.status;
          if (401 === t4 || 403 === t4) return true;
        }
        return false;
      })(t2)) return false;
      const r2 = fe(t2);
      return void 0 !== r2 ? !!We.has(r2) || r2 === se.C.Unknown && (Qe(t2) || Xe(t2)) : Qe(t2) || Xe(t2);
    }
    function Ye(e2) {
      const t2 = _e(e2);
      return t2 instanceof Error && "AbortError" === t2.name || fe(e2) === se.C.Canceled;
    }
    function Qe(e2) {
      for (const t2 of Ze(e2)) {
        const e3 = et(t2, "status") ?? et(t2, "statusCode");
        if (429 === e3 || void 0 !== e3 && e3 >= 500 && e3 < 600) return true;
      }
      return false;
    }
    function Xe(e2) {
      for (const t2 of Ze(e2)) {
        if (!(t2 instanceof Error) || "AbortError" === t2.name) continue;
        const e3 = tt(t2);
        if (void 0 !== e3 && He.has(e3)) return true;
        const r2 = t2.message.toLowerCase();
        if (Ke.some((e4) => r2.includes(e4))) return true;
      }
      return false;
    }
    function* Ze(e2) {
      const t2 = /* @__PURE__ */ new Set(), r2 = [e2];
      for (; r2.length > 0; ) {
        const e3 = r2.pop();
        if (void 0 !== e3 && !t2.has(e3) && (t2.add(e3), yield e3, "object" == typeof e3 && null !== e3 && ("cause" in e3 && void 0 !== e3.cause && r2.push(e3.cause), e3 instanceof AggregateError))) for (const t3 of e3.errors) r2.push(t3);
      }
    }
    function et(e2, t2) {
      if ("object" != typeof e2 || null === e2) return;
      let r2;
      if ("status" === t2 && "status" in e2) r2 = e2.status;
      else {
        if ("statusCode" !== t2 || !("statusCode" in e2)) return;
        r2 = e2.statusCode;
      }
      return "number" == typeof r2 && Number.isFinite(r2) ? r2 : void 0;
    }
    function tt(e2) {
      if (!("code" in e2)) return;
      const t2 = e2.code;
      return "string" == typeof t2 ? t2 : void 0;
    }
    function rt(e2) {
      if ("number" == typeof e2 && "string" == typeof se.C[e2]) return e2;
      if ("string" == typeof e2 && 0 !== e2.length) {
        for (const t2 of Object.values(se.C)) if ("number" == typeof t2 && se.C[t2] === e2) return t2;
      }
    }
    function nt(e2) {
      const t2 = e2?.trim();
      return void 0 === t2 || 0 === t2.length ? "" : t2.startsWith('"') && t2.endsWith('"') ? t2.slice(1, -1) : t2;
    }
    function st(e2) {
      return nt(e2).toLowerCase();
    }
    const ot = "background-composer", it = "rpc_service";
    function at(e2) {
      return true === e2 ? "agent-store" : ot;
    }
    const ct = "x-agent-store-token", lt = 1e4;
    function ut(e2 = ot) {
      return "agent-store" === e2 ? G : re;
    }
    const dt = 6e4, pt = 18e5, mt = 864e5;
    class ht {
      constructor(e2) {
        if (this.directoryListCache = /* @__PURE__ */ new Map(), this.completeFlatListCache = /* @__PURE__ */ new Map(), this.listCacheGenerationByTarget = /* @__PURE__ */ new Map(), this.knownLargeTargets = /* @__PURE__ */ new Map(), this.now = e2.now ?? Date.now, this.directoryListCacheTtlMs = e2.flatFileListCacheTtlMs ?? 1e3, this.mintTokenHeaders = e2.mintTokenHeaders, this.rpcTimeoutMs = (function(e3) {
          if (void 0 === e3) return dt;
          if (!Number.isFinite(e3) || e3 < 0) return dt;
          return Math.floor(e3);
        })(e2.rpcTimeoutMs), this.largeTargetTtlMs = (function(e3) {
          if (void 0 === e3 || !Number.isFinite(e3)) return pt;
          return Math.min(mt, Math.max(6e4, Math.floor(e3)));
        })(e2.largeTargetTtlMs), void 0 !== e2.client) this.client = e2.client;
        else {
          if (void 0 === e2.transport) throw new Error("BcsAgentStoreTransport requires either `client` or `transport`.");
          this.client = me(ut(e2.service), e2.transport);
        }
      }
      async mintToken(e2, t2) {
        try {
          const r2 = await this.invokeRpc((t3) => this.client.mintAgentStoreToken((function(e3) {
            switch (e3.kind) {
              case "share":
                return new o.dy({ shareId: e3.shareId });
              case "store":
                return new o.dy({ storeId: e3.storeId });
              case "source":
                return new o.dy({ source: new o.x$({ kind: vt(e3.sourceKind), sourceId: e3.sourceId }) });
            }
          })(e2), t3), { ...void 0 === this.mintTokenHeaders ? {} : { headers: { ...this.mintTokenHeaders } }, ...void 0 === t2?.signal ? {} : { signal: t2.signal } });
          return { token: r2.token, expiresAtMs: Number(r2.expiresAtMs), storeIds: [...r2.storeIds.length > 0 ? r2.storeIds : r2.agentIds] };
        } catch (e3) {
          throw Ut(e3);
        }
      }
      async listFiles({ token: e2, storeId: t2, relPath: r2, shareId: n2, signal: s2, tombstoneMode: o2, tombstonesSinceMs: i2, ifVersionEqual: a2 }) {
        return await this.fetchCachedDirectoryList({ token: e2, storeId: t2, relPath: r2, shareId: n2, signal: s2, tombstoneMode: o2, tombstonesSinceMs: i2, ..."" === r2 && void 0 !== a2 && "" !== a2 ? { ifVersionEqual: a2 } : {} });
      }
      async presignReads({ token: e2, storeId: t2, relPaths: r2, shareId: n2, signal: s2 }) {
        try {
          return (await this.invokeRpc((e3) => this.client.presignAgentStoreReads(new o.xN(void 0 !== n2 ? { shareId: n2, relPaths: [...r2] } : { storeId: t2, relPaths: [...r2] }), e3), _t(e2.token, s2))).instructions.map((e3) => ({ relPath: e3.relPath, url: e3.url, expiresAtMs: Number(e3.expiresAtMs) }));
        } catch (e3) {
          throw Ut(e3);
        }
      }
      async presignWrites({ token: e2, storeId: t2, files: r2, signal: n2 }) {
        this.invalidateListCache({ storeId: t2 });
        const s2 = new Map(r2.map((e3) => [v(e3.relPath), e3.sha]));
        for (const e3 of r2) {
          if (void 0 !== e3.baseEtag && true === e3.expectAbsent) throw new Error(`Agent store write for ${e3.relPath} sets both baseEtag and expectAbsent; they are mutually exclusive`);
          if (void 0 !== e3.baseEtag && 0 === st(e3.baseEtag).length) throw new Error(`Agent store write for ${e3.relPath} carries an empty baseEtag`);
        }
        try {
          return (await this.invokeRpc((e3) => this.client.presignAgentStoreWrites(new o.WJ({ storeId: t2, supportsSignedContentLength: true, files: r2.map((e4) => new o.Mx({ relPath: e4.relPath, sizeBytes: BigInt(e4.size), sha: e4.sha, multipartParts: e4.multipartParts?.map((e5) => new o.Ws({ partNumber: e5.partNumber, offsetBytes: BigInt(e5.offsetBytes), sizeBytes: BigInt(e5.sizeBytes), checksumSha256: new Uint8Array(e5.checksumSha256) })), ...void 0 !== e4.baseEtag ? { precondition: { case: "baseEtag", value: st(e4.baseEtag) } } : true === e4.expectAbsent ? { precondition: { case: "expectAbsent", value: true } } : {} })) }), e3), _t(e2.token, n2))).instructions.map((e3, t3) => {
            const n3 = e3.relPath;
            let o2 = r2[t3]?.sha;
            try {
              o2 = s2.get(v(n3)) ?? o2;
            } catch {
            }
            if (void 0 === o2) throw new Error(`BCS presign write response missing requested file: ${n3}`);
            return { relPath: n3, sha: o2, url: e3.url, headers: { ...e3.headers }, expiresAtMs: Number(e3.expiresAtMs), ...void 0 !== e3.multipart ? { multipart: St(e3.multipart) } : {}, ...e3.primaryPreconditionFailed ? { primaryPreconditionFailed: true } : {}, ...void 0 !== e3.lockRedirect ? { lockRedirect: { conflictRelPath: e3.lockRedirect.conflictRelPath, lockExpiresAtMs: Number(e3.lockRedirect.lockExpiresAtMs) } } : {}, ...void 0 !== e3.conflict ? { conflict: bt(e3.conflict) } : {} };
          });
        } catch (e3) {
          throw Ut(e3);
        }
      }
      async completeMultipartWrites({ token: e2, storeId: t2, completions: r2, signal: n2 }) {
        this.invalidateListCache({ storeId: t2 });
        try {
          const s2 = await this.invokeRpc((e3) => this.client.completeAgentStoreMultipartWrites(new o.bB({ storeId: t2, completions: r2.map((e4) => (function(e5) {
            return new o.kk({ context: xt(e5.context), parts: e5.parts.map((e6) => new o.OQ({ partNumber: e6.partNumber, etag: e6.etag, checksumSha256: new Uint8Array(e6.checksumSha256) })) });
          })(e4)) }), e3), _t(e2.token, n2));
          return (function({ inputs: e3, results: t3 }) {
            const r3 = Array.from({ length: e3.length });
            for (const n3 of t3) {
              const t4 = Et({ inputCount: e3.length, inputIndex: n3.inputIndex, kind: "complete" });
              if (void 0 !== r3[t4]) throw new l(`BCS multipart complete response repeated inputIndex ${t4}`);
              const s3 = v(e3[t4].context.relPath), o2 = It({ relPath: n3.relPath, inputIndex: t4, kind: "complete" });
              if (o2 !== s3) throw new l(`BCS multipart complete response relPath mismatch at inputIndex ${t4}`);
              r3[t4] = Ct({ result: n3, relPath: o2 });
            }
            return Tt({ ordered: r3, kind: "complete" });
          })({ inputs: r2, results: s2.results });
        } catch (e3) {
          throw Ut(e3);
        } finally {
          this.invalidateListCache({ storeId: t2 });
        }
      }
      async abortMultipartWrites({ token: e2, storeId: t2, uploads: r2, signal: n2 }) {
        try {
          const s2 = await this.invokeRpc((e3) => this.client.abortAgentStoreMultipartWrites(new o.mr({ storeId: t2, uploads: r2.map((e4) => (function(e5) {
            return new o.Sz({ context: xt(e5.context) });
          })(e4)) }), e3), _t(e2.token, n2));
          return (function({ inputs: e3, results: t3 }) {
            const r3 = Array.from({ length: e3.length });
            for (const n3 of t3) {
              const t4 = Et({ inputCount: e3.length, inputIndex: n3.inputIndex, kind: "abort" });
              if (void 0 !== r3[t4]) throw new l(`BCS multipart abort response repeated inputIndex ${t4}`);
              const s3 = v(e3[t4].context.relPath), o2 = It({ relPath: n3.relPath, inputIndex: t4, kind: "abort" });
              if (o2 !== s3) throw new l(`BCS multipart abort response relPath mismatch at inputIndex ${t4}`);
              r3[t4] = Pt({ result: n3, relPath: o2 });
            }
            return Tt({ ordered: r3, kind: "abort" });
          })({ inputs: r2, results: s2.results });
        } catch (e3) {
          throw Ut(e3);
        }
      }
      invalidateListCache({ storeId: e2, shareId: t2 }) {
        const r2 = /* @__PURE__ */ new Set([`self:${e2}`]);
        void 0 !== t2 && r2.add(`share:${t2}`);
        for (const e3 of r2) this.listCacheGenerationByTarget.set(e3, (this.listCacheGenerationByTarget.get(e3) ?? 0) + 1), this.knownLargeTargets.delete(e3);
        for (const e3 of this.directoryListCache.keys()) {
          const t3 = e3.split("\0", 1)[0];
          void 0 !== t3 && r2.has(t3) && this.directoryListCache.delete(e3);
        }
        for (const e3 of this.completeFlatListCache.keys()) {
          const t3 = e3.split("\0", 1)[0];
          void 0 !== t3 && r2.has(t3) && this.completeFlatListCache.delete(e3);
        }
      }
      async checkVersions({ entries: e2, signal: t2 }) {
        const r2 = e2[0];
        if (void 0 === r2) return [];
        const n2 = this.client.checkAgentStoreVersions;
        if (void 0 === n2) throw new l("Agent store client cannot check listing versions");
        try {
          const s2 = await this.invokeRpc((t3) => n2.call(this.client, new o.rX({ entries: e2.map((e3, t4) => new o.eH({ requestId: String(t4), ...void 0 !== e3.shareId ? { shareId: e3.shareId } : { storeId: e3.storeId }, token: e3.token, version: e3.version, preferCompleteFlatStore: e3.preferCompleteFlatStore })) }), t3), _t(r2.token, t2));
          if (s2.results.length !== e2.length || s2.results.some((e3, t3) => e3.requestId !== String(t3))) throw new l(`Agent store version check answered ${s2.results.length} of ${e2.length} entries out of order`);
          return s2.results.map((e3) => ({ status: yt(e3.status), version: e3.version }));
        } catch (e3) {
          throw Ut(e3);
        }
      }
      rootListingPrefersCompleteFlatStore(e2) {
        return !this.isKnownLargeTarget(Dt(e2));
      }
      fetchCachedDirectoryList(e2) {
        if (true === e2.signal?.aborted) {
          const t3 = e2.signal.reason;
          return Promise.reject(t3 instanceof Error ? t3 : new DOMException("The operation was aborted", "AbortError"));
        }
        const t2 = this.now();
        for (const [e3, r3] of this.completeFlatListCache) r3.expiresAtMs <= t2 && this.completeFlatListCache.delete(e3);
        const r2 = Rt(e2), n2 = this.completeFlatListCache.get(r2);
        if (void 0 !== n2) return Promise.resolve(L({ files: n2.files, relPath: e2.relPath, tombstones: n2.tombstones, listingComplete: true, removedSubdirs: n2.removedSubdirs, tombstoneWatermarkMs: n2.tombstoneWatermarkMs, tombstoneFloorMs: n2.tombstoneFloorMs, version: n2.version }));
        const s2 = (function({ token: e3, storeId: t3, relPath: r3, shareId: n3, tombstoneMode: s3, tombstonesSinceMs: o3, ifVersionEqual: i2 }) {
          return `${Dt({ storeId: t3, shareId: n3 })}\0${e3.token}\0${qt(r3)}\0${Mt({ tombstoneMode: s3, tombstonesSinceMs: o3 })}\0${i2 ?? ""}`;
        })(e2);
        let o2 = this.directoryListCache.get(s2);
        if (void 0 === o2 || o2.expiresAtMs <= t2) {
          for (const [e3, r4] of this.directoryListCache) r4.expiresAtMs <= t2 && this.directoryListCache.delete(e3);
          const r3 = this.fetchDirectoryList(e2).then((e3) => (Ft(e3) && this.directoryListCache.get(s2)?.promise === r3 && this.directoryListCache.delete(s2), e3)).catch((e3) => {
            throw this.directoryListCache.get(s2)?.promise === r3 && this.directoryListCache.delete(s2), e3;
          });
          o2 = { promise: r3, expiresAtMs: t2 + this.directoryListCacheTtlMs }, this.directoryListCache.set(s2, o2);
        }
        return o2.promise;
      }
      isKnownLargeTarget(e2) {
        const t2 = this.knownLargeTargets.get(e2);
        return void 0 !== t2 && (!(t2 <= this.now()) || (this.knownLargeTargets.delete(e2), false));
      }
      async fetchDirectoryList({ token: e2, storeId: t2, relPath: r2, shareId: n2, signal: s2, tombstoneMode: i2, tombstonesSinceMs: a2, ifVersionEqual: l2 }) {
        try {
          const u2 = /* @__PURE__ */ new Map(), d2 = /* @__PURE__ */ new Set(), p2 = /* @__PURE__ */ new Map(), m2 = /* @__PURE__ */ new Set(), h2 = /* @__PURE__ */ new Set(), f2 = Dt({ storeId: t2, shareId: n2 }), g2 = this.listCacheGenerationByTarget.get(f2) ?? 0, y2 = "" === r2 && !this.isKnownLargeTarget(f2), w2 = (function({ tombstoneMode: e3, tombstonesSinceMs: t3 }) {
            switch (e3) {
              case o.hw.OMIT:
                return { tombstoneMode: o.hw.OMIT };
              case o.hw.SINCE: {
                const e4 = Jt(t3);
                return void 0 === e4 ? {} : { tombstoneMode: o.hw.SINCE, tombstonesSinceMs: BigInt(e4) };
              }
              default:
                return {};
            }
          })({ tombstoneMode: i2, tombstonesSinceMs: a2 });
          let v2, _2, b2, S2 = "", k2 = 0, x2 = false;
          const E2 = void 0 !== l2 && "" !== l2, I2 = (e3) => {
            const t3 = Ot(e3.tombstoneWatermarkMs), r3 = Ot(e3.tombstoneFloorMs);
            if (!x2) return v2 = t3, _2 = r3, void (x2 = true);
            v2 = Bt(v2, t3), _2 = Bt(_2, r3);
          };
          do {
            if (k2 += 1, k2 > 10) throw new c("Agent store directory listing exceeded 10 pages");
            const x3 = await this.invokeRpc((e3) => this.client.listAgentStoreDirectory(new o.zc({ ...void 0 !== n2 ? { shareId: n2 } : { storeId: t2 }, relativePath: r2, pageSize: 1e3, pageToken: S2, preferCompleteFlatStore: y2 && "" === S2, ...w2, ...E2 && "" === S2 ? { ifVersionEqual: l2 } : {} }), e3), _t(e2.token, s2));
            if (I2(x3), x3.notModified) {
              if ("" !== S2 || !E2) throw new c("Agent store directory listing answered not_modified without a matching condition");
              return { files: [], subdirs: [], tombstones: [], removedSubdirs: [], listingComplete: false, notModified: true, version: "" === x3.version ? l2 : x3.version, ...void 0 !== v2 ? { tombstoneWatermarkMs: v2 } : {}, ...void 0 !== _2 ? { tombstoneFloorMs: _2 } : {} };
            }
            if ("" === S2 && (b2 = "" === x3.version ? void 0 : x3.version), x3.mode === o.NG.COMPLETE_FLAT_STORE) {
              const r3 = x3.files.map((e3) => ({ relPath: e3.relPath, etag: st(e3.etag), size: Number(e3.sizeBytes), serverMtimeMs: Number(e3.lastModifiedMs) })), s3 = wt(x3.tombstones);
              if (r3.length + s3.length > lt) throw new c("Agent store directory listing exceeded 10000 entries");
              const o2 = L({ files: r3, relPath: "", tombstones: s3, listingComplete: true, removedSubdirs: x3.removedSubdirs, tombstoneWatermarkMs: v2, tombstoneFloorMs: _2, version: b2 });
              return (this.listCacheGenerationByTarget.get(f2) ?? 0) !== g2 || Ft(o2) || this.completeFlatListCache.set(Rt({ token: e2, storeId: t2, shareId: n2, tombstoneMode: i2, tombstonesSinceMs: a2 }), { files: r3, tombstones: s3, removedSubdirs: o2.removedSubdirs ?? [], tombstoneWatermarkMs: v2, tombstoneFloorMs: _2, version: b2, expiresAtMs: this.now() + this.directoryListCacheTtlMs }), (this.listCacheGenerationByTarget.get(f2) ?? 0) === g2 && this.knownLargeTargets.delete(f2), o2;
            }
            y2 && "" === S2 && (this.listCacheGenerationByTarget.get(f2) ?? 0) === g2 && this.knownLargeTargets.set(f2, this.now() + this.largeTargetTtlMs);
            for (const e3 of x3.files) u2.set(e3.relPath, { relPath: e3.relPath, etag: st(e3.etag), size: Number(e3.sizeBytes), serverMtimeMs: Number(e3.lastModifiedMs) });
            for (const e3 of x3.subdirs) {
              const t3 = Nt(e3);
              "" !== t3 && d2.add(t3);
            }
            for (const e3 of wt(x3.tombstones)) p2.set(e3.relPath, e3);
            for (const e3 of x3.removedSubdirs) {
              const t3 = Nt(e3);
              "" !== t3 && m2.add(t3);
            }
            for (const e3 of [...d2]) m2.has(e3) && d2.delete(e3);
            if (u2.size + d2.size + p2.size > lt) throw new c("Agent store directory listing exceeded 10000 entries");
            if (S2 = x3.nextPageToken, "" !== S2 && h2.has(S2)) throw new c("Agent store directory listing repeated a page token");
            "" !== S2 && h2.add(S2);
          } while ("" !== S2);
          return { files: [...u2.values()].sort((e3, t3) => e3.relPath.localeCompare(t3.relPath)), subdirs: [...d2].sort(), tombstones: [...p2.values()].sort((e3, t3) => e3.relPath.localeCompare(t3.relPath)), removedSubdirs: [...m2].sort(), listingComplete: true, ...void 0 !== v2 ? { tombstoneWatermarkMs: v2 } : {}, ...void 0 !== _2 ? { tombstoneFloorMs: _2 } : {}, ...void 0 !== b2 ? { version: b2 } : {} };
        } catch (e3) {
          throw Ut(e3);
        }
      }
      async deleteFiles({ token: e2, storeId: t2, files: r2, signal: n2 }) {
        for (const e3 of r2) if (0 === st(e3.baseEtag).length) throw new Error(`Agent store delete for ${e3.relPath} carries an empty baseEtag`);
        this.invalidateListCache({ storeId: t2 });
        try {
          const s2 = (await this.invokeRpc((e3) => this.client.deleteAgentStoreFiles(new o.uM({ storeId: t2, files: r2.map((e4) => new o.gu({ relPath: e4.relPath, baseEtag: st(e4.baseEtag), ...void 0 !== e4.mutationId ? { mutationId: e4.mutationId } : {} })) }), e3), _t(e2.token, n2))).results.map((e3) => {
            const t3 = qt(e3.relPath), r3 = st(e3.tombstoneEtag);
            switch (e3.status) {
              case o._O.DELETED:
                return { relPath: t3, status: "deleted", tombstoneEtag: r3 };
              case o._O.ALREADY_DELETED:
                return { relPath: t3, status: "already_deleted", ...r3.length > 0 ? { tombstoneEtag: r3 } : {} };
              case o._O.CONFLICT: {
                const r4 = st(e3.currentEtag);
                return { relPath: t3, status: "conflict", ...r4.length > 0 ? { currentEtag: r4 } : {} };
              }
              case o._O.UNSPECIFIED:
                throw new Error(`BCS delete returned UNSPECIFIED status for ${t3}`);
              default:
                throw new Error(`BCS delete returned an unknown status for ${t3}: ${e3.status}`);
            }
          });
          return this.invalidateListCache({ storeId: t2 }), s2;
        } catch (e3) {
          throw Ut(e3);
        }
      }
      async rmdir({ token: e2, storeId: t2, relPath: r2, signal: n2 }) {
        this.invalidateListCache({ storeId: t2 });
        try {
          await this.invokeRpc((e3) => this.client.rmdirAgentStore(new o.q5({ storeId: t2, relPath: r2 }), e3), _t(e2.token, n2)), this.invalidateListCache({ storeId: t2 });
        } catch (e3) {
          throw Ut(e3);
        }
      }
      buildCallOptions(e2) {
        if (this.rpcTimeoutMs <= 0) return { options: e2, timeoutSignal: void 0 };
        const t2 = AbortSignal.timeout(this.rpcTimeoutMs), r2 = void 0 !== e2?.signal ? AbortSignal.any([e2.signal, t2]) : t2;
        return { options: { ...e2, timeoutMs: this.rpcTimeoutMs, signal: r2 }, timeoutSignal: t2 };
      }
      async invokeRpc(e2, t2) {
        const { options: r2, timeoutSignal: n2 } = this.buildCallOptions(t2);
        return await (function(e3, { signal: t3, timeoutSignal: r3 }) {
          if (void 0 === t3) return e3;
          if (t3.aborted) return Promise.reject(ft({ signal: t3, timeoutSignal: r3 }));
          return new Promise((n3, s2) => {
            const o2 = () => {
              i2(), s2(ft({ signal: t3, timeoutSignal: r3 }));
            }, i2 = () => {
              t3.removeEventListener("abort", o2);
            };
            t3.addEventListener("abort", o2, { once: true }), e3.then((e4) => {
              i2(), n3(e4);
            }, (e4) => {
              i2(), r3?.aborted && (function(e5) {
                if (e5 instanceof Error && "AbortError" === e5.name) return true;
                if (e5 instanceof ne.T) return e5.code === se.C.Canceled || e5.code === se.C.DeadlineExceeded;
                return false;
              })(e4) ? s2(gt(r3)) : s2(e4);
            });
          });
        })(e2(r2), { signal: r2?.signal, timeoutSignal: n2 });
      }
    }
    function ft({ signal: e2, timeoutSignal: t2 }) {
      if (t2?.aborted) return gt(t2);
      const r2 = e2.reason;
      if (r2 instanceof ne.T) return r2;
      if (r2 instanceof Error && "AbortError" === r2.name) return new ne.T(r2.message, se.C.Canceled);
      const n2 = r2 instanceof Error && r2.message.length > 0 ? r2.message : "agent store RPC canceled";
      return new ne.T(n2, se.C.Canceled);
    }
    function gt(e2) {
      const t2 = e2.reason;
      if (t2 instanceof ne.T) return t2;
      const r2 = t2 instanceof Error && t2.message.length > 0 ? t2.message : "agent store RPC deadline exceeded";
      return new ne.T(r2, se.C.DeadlineExceeded);
    }
    function yt(e2) {
      switch (e2) {
        case o.UI.UNCHANGED:
          return "unchanged";
        case o.UI.CHANGED:
          return "changed";
        case o.UI.UNAUTHORIZED:
          return "unauthorized";
        default:
          return "error";
      }
    }
    function wt(e2) {
      return (e2 ?? []).map((e3) => ({ relPath: qt(e3.relPath), tombstoneEtag: st(e3.tombstoneEtag), deletedAtMs: Number(e3.deletedAtMs) }));
    }
    function vt(e2) {
      switch (e2) {
        case "cloud":
          return o.as.CLOUD;
        case "local":
          return o.as.LOCAL;
        case "user":
          return o.as.USER;
        case "team":
          return o.as.TEAM;
        case "automation":
          return o.as.AUTOMATION;
      }
    }
    function _t(e2, t2) {
      return { headers: { [ct]: e2 }, ...void 0 !== t2 ? { signal: t2 } : {} };
    }
    function bt(e2) {
      return { relPath: e2.relPath, url: e2.url, headers: { ...e2.headers }, expiresAtMs: Number(e2.expiresAtMs), ...void 0 !== e2.multipart ? { multipart: St(e2.multipart) } : {} };
    }
    function St(e2) {
      if (void 0 === e2.context) throw new l("BCS multipart write instruction is missing context");
      return { context: (t2 = e2.context, { uploadId: t2.uploadId, storeId: t2.storeId, relPath: t2.relPath, sizeBytes: Number(t2.sizeBytes), sha: t2.sha, expectedPartCount: t2.expectedPartCount, precondition: kt(t2.precondition), sessionId: t2.sessionId }), parts: e2.parts.map((e3) => ({ partNumber: e3.partNumber, url: e3.url, headers: { ...e3.headers }, offsetBytes: Number(e3.offsetBytes), sizeBytes: Number(e3.sizeBytes) })), partUrlsExpiresAtMs: Number(e2.partUrlsExpiresAtMs) };
      var t2;
    }
    function kt(e2) {
      switch (e2.case) {
        case "baseEtag":
          return { case: "baseEtag", value: e2.value };
        case "expectAbsent":
          return { case: "expectAbsent", value: e2.value };
        case void 0:
          return { case: void 0 };
      }
    }
    function xt(e2) {
      return new o.jU({ uploadId: e2.uploadId, storeId: e2.storeId, relPath: e2.relPath, sizeBytes: BigInt(e2.sizeBytes), sha: e2.sha, expectedPartCount: e2.expectedPartCount, precondition: kt(e2.precondition), sessionId: e2.sessionId });
    }
    function Et({ inputCount: e2, inputIndex: t2, kind: r2 }) {
      if (!Number.isInteger(t2) || t2 < 0 || t2 >= e2) throw new l(`BCS multipart ${r2} response returned out-of-range inputIndex ${t2}`);
      return t2;
    }
    function It(e2) {
      try {
        return v(e2.relPath);
      } catch {
        throw new l(`BCS multipart ${e2.kind} response returned an invalid relPath at inputIndex ${e2.inputIndex}`);
      }
    }
    function Tt({ ordered: e2, kind: t2 }) {
      const r2 = [];
      for (const [n2, s2] of e2.entries()) {
        if (void 0 === s2) throw new l(`BCS multipart ${t2} response missing result for inputIndex ${n2}`);
        r2.push(s2);
      }
      return r2;
    }
    function Ct({ result: e2, relPath: t2 }) {
      switch (e2.outcome.case) {
        case "success":
          return { kind: "success", relPath: t2, etag: st(e2.outcome.value.etag) };
        case "failure":
          return { kind: "failure", relPath: t2, code: At(e2.outcome.value.code) };
        case void 0:
          return { kind: "failure", relPath: t2, code: "internal" };
      }
    }
    function Pt({ result: e2, relPath: t2 }) {
      switch (e2.outcome.case) {
        case "success":
          return { kind: "success", relPath: t2, alreadyFinished: e2.outcome.value.alreadyFinished };
        case "failure":
          return { kind: "failure", relPath: t2, code: At(e2.outcome.value.code) };
        case void 0:
          return { kind: "failure", relPath: t2, code: "internal" };
      }
    }
    function At(e2) {
      switch (e2) {
        case o.l4.UNSPECIFIED:
          return "internal";
        case o.l4.PRECONDITION_FAILED:
          return "precondition_failed";
        case o.l4.UPLOAD_NOT_FOUND:
          return "upload_not_found";
        case o.l4.INVALID_PARTS:
          return "invalid_parts";
        case o.l4.CHECKSUM_MISMATCH:
          return "checksum_mismatch";
        case o.l4.TRANSIENT:
          return "transient";
        case o.l4.INTERNAL:
          return "internal";
        case o.l4.RESTART_REQUIRED:
          return "restart_required";
        default:
          return "unknown";
      }
    }
    function Rt({ token: e2, storeId: t2, shareId: r2, tombstoneMode: n2, tombstonesSinceMs: s2 }) {
      return `${Dt({ storeId: t2, shareId: r2 })}\0${e2.token}\0${Mt({ tombstoneMode: n2, tombstonesSinceMs: s2 })}`;
    }
    function Mt({ tombstoneMode: e2, tombstonesSinceMs: t2 }) {
      switch (e2) {
        case o.hw.OMIT:
          return "omit";
        case o.hw.SINCE:
          return void 0 === Jt(t2) ? "include" : `since:${t2}`;
        default:
          return "include";
      }
    }
    function Jt(e2) {
      if (void 0 !== e2 && Number.isSafeInteger(e2) && !(e2 <= 0)) return e2;
    }
    function Ot(e2) {
      if (void 0 !== e2) {
        if ("bigint" == typeof e2) {
          if (e2 <= BigInt(0) || e2 > BigInt(Number.MAX_SAFE_INTEGER)) return;
          return Number(e2);
        }
        if (Number.isSafeInteger(e2) && !(e2 <= 0)) return e2;
      }
    }
    function Bt(e2, t2) {
      if (void 0 !== e2 && void 0 !== t2) return Math.min(e2, t2);
    }
    function Dt({ storeId: e2, shareId: t2 }) {
      return void 0 !== t2 ? `share:${t2}` : `self:${e2}`;
    }
    function qt(e2) {
      return e2.replaceAll("\\", "/").replace(/^\/+/, "").replace(/\/+$/, "");
    }
    function Nt(e2) {
      return e2.replace(/\/+$/, "");
    }
    function Ft(e2) {
      return (e2.skippedUnsafeEntries ?? 0) > 0 && 0 === e2.files.length;
    }
    function Ut(e2) {
      return e2 instanceof ne.T ? e2.code === se.C.Unauthenticated || e2.code === se.C.PermissionDenied ? new i(e2.message, { cause: e2 }) : ze(e2) ? new a(e2.message) : e2 : e2;
    }
    class Lt {
      constructor(e2 = {}) {
        this.inFlight = 0, this.waiting = [], this.priorityWaiting = [];
        const t2 = e2.max ?? 4;
        if (!Number.isInteger(t2) || t2 <= 0) throw new Error(`BoundedConcurrencyQueue max must be a positive integer, got ${t2}`);
        const r2 = e2.reservedForPriority ?? 0;
        if (!Number.isInteger(r2) || r2 < 0) throw new Error(`BoundedConcurrencyQueue reservedForPriority must be a non-negative integer, got ${r2}`);
        this.max = t2, this.reservedForPriority = Math.min(r2, t2 - 1);
      }
      async enqueue(e2) {
        return await this.run(e2, false);
      }
      async enqueuePriority(e2) {
        return await this.run(e2, true);
      }
      async run(e2, t2) {
        await this.acquire(t2);
        try {
          return await e2();
        } finally {
          this.inFlight--, this.drain();
        }
      }
      acquire(e2) {
        return this.inFlight < this.limitFor(e2) ? (this.inFlight++, Promise.resolve()) : new Promise((t2) => {
          (e2 ? this.priorityWaiting : this.waiting).push(t2);
        });
      }
      limitFor(e2) {
        return e2 ? this.max : this.max - this.reservedForPriority;
      }
      drain() {
        for (; ; ) {
          const e2 = this.inFlight < this.max ? this.priorityWaiting.shift() : void 0;
          if (void 0 !== e2) {
            this.inFlight++, e2();
            continue;
          }
          const t2 = this.inFlight < this.limitFor(false) ? this.waiting.shift() : void 0;
          if (void 0 === t2) return;
          this.inFlight++, t2();
        }
      }
    }
    var $t = r(93181), jt = r(90393), Gt = r(84683), zt = r(75149), Wt = r(83737);
    const Ht = "agent_store_sync.client.", Kt = 64, Vt = /^[a-zA-Z0-9_.:\-/]+$/;
    function Yt(e2) {
      if (0 === e2.length) return "other";
      const t2 = e2.length > Kt ? e2.slice(0, Kt) : e2;
      return Vt.test(t2) ? t2 : "other";
    }
    class Qt {
      constructor(e2) {
        this.sink = e2.sink, this.baseTags = { ...e2.extraTags ?? {}, surface: e2.surface, [it]: e2.service ?? ot };
      }
      bindRpcService(e2) {
        this.baseTags = { ...this.baseTags, [it]: e2 };
      }
      onDiskFull(e2) {
        this.increment({ name: "disk_full", value: 1, agentId: e2.agentId, tags: { op: Yt(e2.op) } });
      }
      onSymlinkRefused(e2) {
        this.increment({ name: "symlink_refused", value: 1, agentId: e2.agentId, tags: { op: Yt(e2.op) } });
      }
      onNetworkError(e2) {
        this.increment({ name: "network_error", value: 1, agentId: e2.agentId, tags: { op: Yt(e2.op), error_class: Yt(e2.errorClass), exhausted: e2.exhausted ? "true" : "false" } });
      }
      onMintGateStateChanged(e2) {
        this.increment({ name: "mint_gate_state", value: 1, agentId: "process", tags: { from: Yt(e2.from), to: Yt(e2.to), reason: Yt(e2.reason) } });
      }
      onThrottled(e2) {
        this.increment({ name: "throttled", value: 1, agentId: e2.agentId, tags: { op: Yt(e2.op), error_class: Yt(e2.errorClass), exhausted: e2.exhausted ? "true" : "false", scope: Yt(e2.scope.length > 0 ? e2.scope : "unknown") } });
      }
      onSyncRound(e2) {
        this.increment({ name: "sync_round", value: 1, agentId: e2.agentId, tags: { schedule: Yt(e2.schedule) } });
      }
      onSessionState(e2) {
        const t2 = "active" === e2.state ? 1 : 0;
        this.gauge({ name: "session_state", value: t2, agentId: e2.agentId, tags: { state: "active" } }), this.gauge({ name: "session_state", value: 1 === t2 ? 0 : 1, agentId: e2.agentId, tags: { state: "idle" } });
      }
      recordMultipartAbandoned(e2) {
        const t2 = { round_aborted: e2.roundAborted ? "true" : "false" }, r2 = e2.agentId;
        this.increment({ name: "multipart_abandoned", value: 1, agentId: r2, tags: t2 }), this.distribution({ name: "multipart_abandoned.bytes", value: e2.bytes, agentId: r2, tags: t2 });
      }
      onRoundCompleted(e2) {
        const t2 = { failed: e2.failed ? "true" : "false", scope: Yt(e2.scope) }, r2 = e2.agentId;
        this.increment({ name: "round", value: 1, agentId: r2, tags: t2 }), this.increment({ name: "round_completed", value: 1, agentId: r2, tags: t2 }), void 0 !== e2.sinceLastSuccessMs && this.distribution({ name: "round_completed.since_last_success_ms", value: e2.sinceLastSuccessMs, agentId: r2, tags: t2 }), this.distributionIfPositive({ name: "round.duration_ms", value: e2.durationMs, agentId: r2, tags: t2 }), this.distributionIfPositive({ name: "round.walk_ms", value: e2.walkMs, agentId: r2, tags: t2 }), this.distributionIfPositive({ name: "round.hash_ms", value: e2.hashMs, agentId: r2, tags: t2 }), this.distributionIfPositive({ name: "round.presign_ms", value: e2.presignMs, agentId: r2, tags: t2 }), this.distributionIfPositive({ name: "round.upload_ms", value: e2.uploadMs, agentId: r2, tags: t2 }), this.distributionIfPositive({ name: "round.list_ms", value: e2.listMs, agentId: r2, tags: t2 }), this.distributionIfPositive({ name: "round.download_ms", value: e2.downloadMs, agentId: r2, tags: t2 }), this.distributionIfPositive({ name: "round.files_pushed", value: e2.filesPushed, agentId: r2, tags: t2 }), this.distributionIfPositive({ name: "round.files_pulled", value: e2.filesPulled, agentId: r2, tags: t2 }), this.distributionIfPositive({ name: "round.bytes_pushed", value: e2.bytesPushed, agentId: r2, tags: t2 }), this.distributionIfPositive({ name: "round.bytes_pulled", value: e2.bytesPulled, agentId: r2, tags: t2 }), this.increment({ name: "round.files_skipped", value: e2.filesSkipped, agentId: r2, tags: t2 }), this.increment({ name: "round.refusals", value: e2.refusals, agentId: r2, tags: t2 }), this.increment({ name: "round.files_conflicted", value: e2.filesConflicted, agentId: r2, tags: t2 }), this.increment({ name: "round.identical_content_conflicts_suppressed", value: e2.identicalContentConflictsSuppressed ?? 0, agentId: r2, tags: t2 }), this.increment({ name: "round.conflict_protection_downgrades", value: e2.conflictProtectionDowngrades, agentId: r2, tags: t2 }), this.increment({ name: "round.legacy_probes", value: e2.legacyProbes, agentId: r2, tags: t2 }), this.increment({ name: "round.push_entries_parked", value: e2.pushEntriesParked, agentId: r2, tags: t2 }), this.increment({ name: "round.pulls_deferred", value: e2.pullsDeferred, agentId: r2, tags: t2 }), this.increment({ name: "round.pulls_skipped_pending_delete", value: e2.pullsSkippedPendingDelete, agentId: r2, tags: t2 }), this.increment({ name: "round.files_deleted_remote", value: e2.filesDeletedRemote, agentId: r2, tags: t2 }), this.increment({ name: "round.files_deleted_local", value: e2.filesDeletedLocal, agentId: r2, tags: t2 }), this.increment({ name: "round.delete_conflicts", value: e2.deleteConflicts, agentId: r2, tags: t2 }), this.increment({ name: "round.scan_deletes_journaled", value: e2.scanDeletesJournaled, agentId: r2, tags: t2 }), this.increment({ name: "rmdir_pushed", value: e2.rmdirPushed ?? 0, agentId: r2, tags: t2 }), this.increment({ name: "removed_dirs_applied", value: e2.removedDirsApplied ?? 0, agentId: r2, tags: t2 }), this.increment({ name: "round.recovery_disarms", value: e2.recoveryDisarms, agentId: r2, tags: t2 }), this.increment({ name: "round.legacy_rows_restored", value: e2.legacyRowsRestored, agentId: r2, tags: t2 }), void 0 !== e2.tombstonesReceived && this.increment({ name: "round.tombstones_received", value: e2.tombstonesReceived, agentId: r2, tags: t2 }), void 0 !== e2.tombstoneCursorAdvancedMs && this.distributionIfPositive({ name: "round.tombstone_cursor_advanced_ms", value: e2.tombstoneCursorAdvancedMs, agentId: r2, tags: t2 }), void 0 !== e2.absenceDeletesApplied && this.increment({ name: "round.absence_deletes_applied", value: e2.absenceDeletesApplied, agentId: r2, tags: t2 }), void 0 !== e2.absenceDeletesSkippedModified && this.increment({ name: "round.absence_deletes_skipped_modified", value: e2.absenceDeletesSkippedModified, agentId: r2, tags: t2 }), e2.identityRecoveryWipeFailed && this.increment({ name: "round.identity_recovery_wipe_failed", value: 1, agentId: r2, tags: t2 }), this.increment({ name: "round.errors", value: e2.errorCount, agentId: r2, tags: t2 }), void 0 !== e2.pullOutcome && this.increment({ name: "pull", value: 1, agentId: r2, tags: { outcome: e2.pullOutcome } });
        for (const t3 of e2.remoteVersionEvents ?? []) this.increment({ name: "version", value: 1, agentId: r2, tags: { event: t3.event, reason: t3.reason } });
        void 0 !== e2.versionAudit && this.increment({ name: "version_audit", value: 1, agentId: r2, tags: { result: e2.versionAudit } });
      }
      syncRoundSkipped(e2) {
        this.increment({ name: "sync_round_skipped", value: 1, agentId: e2.agentId, tags: { reason: Yt(e2.reason) } });
      }
      onRoundLifecycle(e2) {
        const t2 = { ...void 0 !== e2.late ? { late: e2.late ? "true" : "false" } : {}, ...void 0 !== e2.reason ? { reason: e2.reason } : {} }, r2 = Object.keys(t2).length > 0;
        this.increment({ name: `round_${e2.kind}`, value: 1, agentId: e2.agentId, ...r2 ? { tags: t2 } : {} }), void 0 !== e2.durationMs && this.distributionIfPositive({ name: `round_${e2.kind}.duration_ms`, value: e2.durationMs, agentId: e2.agentId, ...r2 ? { tags: t2 } : {} }), void 0 !== e2.lateMs && this.distributionIfPositive({ name: `round_${e2.kind}.late_ms`, value: e2.lateMs, agentId: e2.agentId });
      }
      onLockEvent(e2) {
        const t2 = {};
        void 0 !== e2.cause && (t2.cause = e2.cause), void 0 !== e2.holderKind && (t2.holder_kind = Yt(e2.holderKind)), void 0 !== e2.samePid && (t2.same_pid = e2.samePid ? "true" : "false"), this.increment({ name: e2.kind, value: 1, agentId: e2.agentId, ...Object.keys(t2).length > 0 ? { tags: t2 } : {} });
      }
      onBlobTransferTiming(e2) {
        this.distribution({ name: `blob_put.${e2.phase}_ms`, value: e2.durationMs, agentId: "process", tags: { reused_socket: e2.reusedSocket ? "true" : "false", outcome: e2.outcome } });
      }
      onResumeDetected(e2) {
        this.increment({ name: "resume_detected", value: 1, agentId: e2.agentId }), this.distributionIfPositive({ name: "resume_detected.gap_ms", value: e2.gapMs, agentId: e2.agentId });
      }
      onSchedulerTick(e2) {
        this.distribution({ name: "scheduler_tick", value: e2.sessions, agentId: "process" });
      }
      onVersionProbeBatch(e2) {
        this.distributionIfPositive({ name: "probe_batch_size", value: e2.entries.length, agentId: "process" });
        for (const t2 of e2.entries) this.increment({ name: "probe", value: 1, agentId: t2.agentId, tags: { status: t2.status } });
      }
      onDirtyPassiveStalled(e2) {
        this.increment({ name: "dirty_passive_stalled", value: 1, agentId: e2.agentId }), this.distributionIfPositive({ name: "dirty_passive_stalled.stalled_ms", value: e2.stalledMs, agentId: e2.agentId });
      }
      recordIndexLookupClosed(e2) {
        this.increment({ name: "index_lookup_closed", value: 1, agentId: e2.agentId });
      }
      onError(e2) {
        this.increment({ name: "error", value: 1, agentId: e2.agentId, tags: { op: Yt(e2.op), error_class: Yt(e2.errorClass), ...void 0 === e2.errorName ? {} : { error_name: Yt(e2.errorName) } } }), void 0 !== e2.timeoutClass && this.increment({ name: "operation_timeout", value: 1, agentId: e2.agentId, tags: { op: Yt(e2.op), timeout_class: e2.timeoutClass } });
      }
      onConflict(e2) {
        this.safe(() => {
          this.sink.increment(`${Ht}conflict`, 1, { ...this.baseTags, store_kind: e2.storeKind });
        });
      }
      recordStorePin(e2) {
        "acquire_failed" !== e2.kind ? "waited" === e2.kind && void 0 !== e2.waitMs && this.distribution({ name: "store_pin.wait_ms", value: e2.waitMs, agentId: "store-pin" }) : this.increment({ name: "store_pin.acquire_failed", value: 1, agentId: "store-pin" });
      }
      recordStoreEviction(e2) {
        const t2 = { outcome: Yt(e2.outcome), reason: Yt(e2.reason ?? "none"), mode: Yt(e2.mode) };
        this.increment({ name: "store_eviction.outcome", value: 1, agentId: e2.mountKey, tags: t2 }), this.distribution({ name: "store_eviction.hashed_bytes", value: e2.hashedBytes, agentId: e2.mountKey, tags: t2 }), this.distribution({ name: "store_eviction.duration_ms", value: e2.durationMs, agentId: e2.mountKey, tags: t2 });
      }
      recordMountOutcome(e2) {
        const t2 = { outcome: Yt(e2.outcome), reason: Yt(e2.reason), mount_kind: Yt(e2.mountKind) };
        this.increment({ name: "mount.outcome", value: 1, agentId: e2.agentId, tags: t2 }), this.distribution({ name: "mount.duration_ms", value: e2.durationMs, agentId: e2.agentId, tags: t2 });
      }
      recordMountRequested(e2) {
        this.increment({ name: "mount_requested", value: 1, agentId: e2.agentId, tags: { reason: Yt(e2.reason), policy: Yt(e2.policy) } });
      }
      recordWriteBarrier(e2) {
        const t2 = { outcome: Yt(e2.outcome) };
        this.distributionIfPositive({ name: "write_barrier.duration_ms", value: e2.durationMs, agentId: e2.agentId, tags: t2 }), this.increment({ name: "write_barrier.outcome", value: 1, agentId: e2.agentId, tags: t2 });
      }
      recordCitationStarted(e2) {
        this.increment({ name: "citation.started", value: 1, agentId: e2.agentId });
      }
      recordCitationResolution(e2) {
        const t2 = { tier: Yt(e2.tier), outcome: Yt(e2.outcome), reason: Yt(e2.reason) };
        this.distribution({ name: "citation.duration_ms", value: e2.durationMs, agentId: e2.agentId, tags: t2 }), this.increment({ name: "citation.resolved", value: 1, agentId: e2.agentId, tags: t2 });
      }
      recordStatFastPath(e2) {
        this.increment({ name: "stat_fast_path", value: 1, agentId: e2.agentId, tags: { result: e2.result } });
      }
      recordCitationStaleness(e2) {
        this.increment({ name: "citation.served_staleness", value: 1, agentId: e2.agentId, tags: { state: Yt(e2.state) } });
      }
      tokenMinted(e2) {
        this.increment({ name: "token_minted", value: 1, agentId: e2.agentId, tags: { reason: e2.reason } });
      }
      tokenRefreshUnauthorized(e2) {
        this.increment({ name: "token_refresh_unauthorized", value: 1, agentId: e2.agentId, tags: { op: Yt(e2.op) } });
      }
      tokenMintNegativeCached(e2) {
        this.increment({ name: "token_mint_negative_cached", value: 1, agentId: e2.agentId, tags: { until_finite: Number.isFinite(e2.untilMs) ? "true" : "false", reason: e2.reason } });
      }
      tokenMintFailureCached(e2) {
        this.increment({ name: "token_mint_failure_cached", value: 1, agentId: e2.agentId, tags: { kind: e2.kind } });
      }
      tokenMintRetried(e2) {
        this.increment({ name: "token_mint_retried", value: 1, agentId: e2.agentId, tags: { attempt: String(e2.attempt) } }), Number.isFinite(e2.delayMs) && e2.delayMs >= 0 && this.distribution({ name: "token_mint_retry_delay_ms", value: e2.delayMs, agentId: e2.agentId });
      }
      tokenMintRetryDenied(e2) {
        this.increment({ name: "token_mint_retry_denied", value: 1, agentId: e2.agentId, tags: { reason: e2.reason } });
      }
      tokenRefreshFailedKeptExisting(e2) {
        this.increment({ name: "token_refresh_failed_kept_existing", value: 1, agentId: e2.agentId }), Number.isFinite(e2.remainingMs) && e2.remainingMs >= 0 && this.distribution({ name: "token_refresh_failed_kept_existing_remaining_ms", value: e2.remainingMs, agentId: e2.agentId });
      }
      increment(e2) {
        !Number.isFinite(e2.value) || e2.value <= 0 || this.safe(() => {
          this.sink.increment(`${Ht}${e2.name}`, e2.value, this.mergeTags({ agentId: e2.agentId, tags: e2.tags ?? {} }));
        });
      }
      gauge(e2) {
        Number.isFinite(e2.value) && this.safe(() => {
          this.sink.gauge?.(`${Ht}${e2.name}`, e2.value, this.mergeTags({ agentId: e2.agentId, tags: e2.tags ?? {} }));
        });
      }
      distribution(e2) {
        !Number.isFinite(e2.value) || e2.value < 0 || this.safe(() => {
          this.sink.distribution(`${Ht}${e2.name}`, e2.value, this.mergeTags({ agentId: e2.agentId, tags: e2.tags ?? {} }));
        });
      }
      distributionIfPositive(e2) {
        e2.value > 0 && this.distribution(e2);
      }
      mergeTags(e2) {
        return { ...this.baseTags, store_kind: (0, Wt.Pz)(e2.agentId), ...e2.tags };
      }
      safe(e2) {
        try {
          e2();
        } catch {
        }
      }
    }
    var Xt = r(48161);
    function Zt(e2, t2) {
      return tr(e2, () => (function(e3, t3) {
        return nr(e3, (function() {
          const e4 = p.constants;
          let t4 = e4.O_RDWR ?? 0;
          "number" == typeof e4.O_CREAT && (t4 |= e4.O_CREAT);
          "number" == typeof e4.O_NOFOLLOW && (t4 |= e4.O_NOFOLLOW);
          "number" == typeof e4.O_CLOEXEC && (t4 |= e4.O_CLOEXEC);
          return t4;
        })(), t3);
      })(e2, t2));
    }
    function er(e2) {
      return tr(e2, () => nr(e2, (function() {
        const e3 = p.constants;
        let t2 = e3.O_RDWR ?? 0;
        return "number" == typeof e3.O_NOFOLLOW && (t2 |= e3.O_NOFOLLOW), "number" == typeof e3.O_CLOEXEC && (t2 |= e3.O_CLOEXEC), t2;
      })()));
    }
    function tr(e2, t2) {
      const r2 = h.dirname(e2), n2 = (function(e3) {
        const t3 = (function() {
          const e4 = p.constants;
          let t4 = e4.O_RDONLY ?? 0;
          "number" == typeof e4.O_DIRECTORY && (t4 |= e4.O_DIRECTORY);
          "number" == typeof e4.O_NOFOLLOW && (t4 |= e4.O_NOFOLLOW);
          "number" == typeof e4.O_CLOEXEC && (t4 |= e4.O_CLOEXEC);
          return t4;
        })();
        try {
          return p.openSync(e3, t3);
        } catch (t4) {
          if (cr(t4) || lr(t4) && "ENOTDIR" === t4.code && (function(e4) {
            try {
              return p.lstatSync(e4).isSymbolicLink();
            } catch {
              return false;
            }
          })(e3)) throw new Wt.y$({ code: "symlink_refused", message: `Refusing to open sqlite under symlinked parent: ${e3}`, failedPath: e3 });
          throw t4;
        }
      })(r2);
      let s2 = true;
      try {
        const o2 = p.fstatSync(n2);
        if (!o2.isDirectory()) throw new Wt.y$({ code: "symlink_refused", message: `Refusing to open sqlite under non-directory parent: ${r2}`, failedPath: r2 });
        const i2 = { dev: o2.dev, ino: o2.ino };
        or(i2, r2);
        const a2 = t2();
        let c2;
        try {
          const t3 = p.fstatSync(a2);
          if (!t3.isFile()) throw new Wt.y$({ code: "symlink_refused", message: `Refusing to open non-regular sqlite path: ${e2}`, failedPath: e2 });
          sr(e2), c2 = { dev: t3.dev, ino: t3.ino };
        } finally {
          p.closeSync(a2);
        }
        let l2 = false, u2 = false;
        const d2 = () => {
          l2 || (or(i2, r2), (function(e3, t3) {
            const r3 = ir();
            let n3;
            try {
              n3 = p.openSync(e3, r3);
            } catch (t4) {
              if (cr(t4)) throw new Wt.y$({ code: "symlink_refused", message: `Sqlite path became symlinked between open and verification: ${e3}`, failedPath: e3 });
              throw t4;
            }
            try {
              const r4 = p.fstatSync(n3);
              if (sr(e3), r4.dev !== t3.dev || r4.ino !== t3.ino) throw new Wt.y$({ code: "symlink_refused", message: `Sqlite path inode drifted between open and verification (expected dev=${t3.dev} ino=${t3.ino}, got dev=${r4.dev} ino=${r4.ino}): ${e3}`, failedPath: e3 });
            } finally {
              p.closeSync(n3);
            }
          })(e2, c2), l2 = true);
        };
        return s2 = false, { sqlitePath: e2, verifyOpenedInode: d2, close: () => {
          u2 || (u2 = true, p.closeSync(n2));
        } };
      } finally {
        s2 && p.closeSync(n2);
      }
    }
    async function rr(e2, t2, r2) {
      const n2 = ar();
      let s2;
      try {
        s2 = await p.promises.open(e2, n2, r2), sr(e2), await s2.writeFile(t2, { encoding: "utf8" });
      } catch (t3) {
        if (cr(t3)) throw new Wt.y$({ code: "symlink_refused", message: `Refusing to create lockfile at symlinked path: ${e2}`, failedPath: e2 });
        throw t3;
      } finally {
        await s2?.close();
      }
    }
    function nr(e2, t2, r2) {
      try {
        return void 0 === r2 ? p.openSync(e2, t2) : p.openSync(e2, t2, r2);
      } catch (t3) {
        if (cr(t3)) throw new Wt.y$({ code: "symlink_refused", message: `Refusing to open symlinked path: ${e2}`, failedPath: e2 });
        throw t3;
      }
    }
    function sr(e2) {
      (0, Wt.rs)(e2);
    }
    function or(e2, t2) {
      let r2;
      try {
        r2 = p.lstatSync(t2);
      } catch (e3) {
        throw new Wt.y$({ code: "symlink_refused", message: `Unable to lstat parent directory ${t2}: ${e3 instanceof Error ? e3.message : String(e3)}`, failedPath: t2 });
      }
      if (r2.isSymbolicLink()) throw new Wt.y$({ code: "symlink_refused", message: `Parent directory became symlinked between open and verification: ${t2}`, failedPath: t2 });
      if (r2.dev !== e2.dev || r2.ino !== e2.ino) throw new Wt.y$({ code: "symlink_refused", message: `Parent directory inode drifted between open and verification (expected dev=${e2.dev} ino=${e2.ino}, got dev=${r2.dev} ino=${r2.ino}): ${t2}`, failedPath: t2 });
    }
    function ir() {
      const e2 = p.constants;
      let t2 = e2.O_RDONLY ?? 0;
      return "number" == typeof e2.O_NOFOLLOW && (t2 |= e2.O_NOFOLLOW), "number" == typeof e2.O_CLOEXEC && (t2 |= e2.O_CLOEXEC), t2;
    }
    function ar() {
      const e2 = p.constants;
      let t2 = e2.O_WRONLY ?? 0;
      return "number" == typeof e2.O_CREAT && (t2 |= e2.O_CREAT), "number" == typeof e2.O_EXCL && (t2 |= e2.O_EXCL), "number" == typeof e2.O_NOFOLLOW && (t2 |= e2.O_NOFOLLOW), "number" == typeof e2.O_CLOEXEC && (t2 |= e2.O_CLOEXEC), t2;
    }
    function cr(e2) {
      return !!lr(e2) && ("ELOOP" === e2.code || "EMLINK" === e2.code || "EPERM" === e2.code && "number" == typeof p.constants.O_NOFOLLOW);
    }
    function lr(e2) {
      return e2 instanceof Error && "string" == typeof e2.code;
    }
    const ur = 1e3, dr = 6e5, pr = 384;
    class mr extends Error {
      constructor(e2) {
        super(e2.message), this.code = e2.code, this.lockPath = e2.lockPath, this.name = "StoreLockError";
      }
    }
    class hr {
      constructor(e2, t2) {
        this.options = e2, this.owner = t2, this.disposed = false, this.unhealthy = false, e2.mtimeUpdateMs > 0 && (this.timer = setInterval(() => {
          this.refreshMtime().catch(() => {
            this.clearTimer();
          });
        }, e2.mtimeUpdateMs), this.timer.unref?.());
      }
      async verifyStillOwned() {
        if (this.disposed) return false;
        const e2 = await _r(this.options.lockPath, { fs: this.options.fs, throwOnInvalid: false });
        return void 0 !== e2 && kr(e2, this.owner);
      }
      markUnhealthy() {
        this.unhealthy = true, this.clearTimer();
      }
      async dispose() {
        if (this.disposed) return;
        this.disposed = true, this.clearTimer();
        const e2 = await _r(this.options.lockPath, { fs: this.options.fs, throwOnInvalid: false });
        void 0 !== e2 && kr(e2, this.owner) && await Tr(() => this.options.fs.unlink(this.options.lockPath));
      }
      async refreshMtime() {
        if (this.disposed || this.unhealthy) return;
        const e2 = await _r(this.options.lockPath, this.options);
        if (this.disposed || this.unhealthy) return;
        if (void 0 === e2 || !kr(e2, this.owner)) return void this.clearTimer();
        const t2 = new Date(this.options.now());
        await Tr(() => this.options.fs.utimes(this.options.lockPath, t2, t2));
      }
      clearTimer() {
        void 0 !== this.timer && clearInterval(this.timer);
      }
    }
    async function fr(e2) {
      const t2 = xr(e2);
      return (0, Wt.Ew)(h.dirname(t2.lockPath)), (0, Wt.rs)(t2.lockPath), wr(t2, false);
    }
    async function gr(e2) {
      const t2 = xr({ ...e2, windowId: "read-active-owner", mtimeUpdateMs: 0 });
      (0, Wt.rs)(t2.lockPath);
      const r2 = await _r(t2.lockPath, { fs: t2.fs, throwOnInvalid: false });
      if (void 0 === r2) return;
      if (Sr(r2, t2), !t2.processExists(r2.pid)) return;
      if (t2.now() - await br(t2) > t2.staleLockMs) return;
      const n2 = await _r(t2.lockPath, { fs: t2.fs, throwOnInvalid: false });
      return void 0 !== n2 && kr(r2, n2) ? r2 : void 0;
    }
    function yr(e2 = process.platform) {
      if ("win32" === e2) return { sid: Er() };
      const t2 = process.geteuid?.();
      if (void 0 === t2) throw new mr({ code: "missing_identity", message: "Could not determine current uid for store lock", lockPath: "" });
      return { uid: t2 };
    }
    async function wr(e2, t2) {
      const r2 = (function(e3) {
        return { uid: e3.identity.uid, sid: e3.identity.sid, pid: e3.pid, hostname: e3.hostname, windowId: e3.windowId, acquiredAt: e3.now(), ...void 0 === e3.ownerKind || 0 === e3.ownerKind.length ? {} : { kind: e3.ownerKind } };
      })(e2);
      try {
        return await e2.fs.writeLockExclusive(e2.lockPath, JSON.stringify(r2), pr), { kind: "acquired", lock: new hr(e2, r2) };
      } catch (e3) {
        if (!(e3 instanceof Error) || "EEXIST" !== Cr(e3)) throw e3;
      }
      const n2 = await _r(e2.lockPath, { fs: e2.fs, throwOnInvalid: false });
      if (void 0 === n2) return t2 ? { kind: "held", owner: void 0 } : await vr(e2);
      if (Sr(n2, e2), t2) return { kind: "held", owner: n2 };
      if (!e2.processExists(n2.pid)) return await vr(e2);
      if (e2.now() - await br(e2) <= e2.staleLockMs) return { kind: "held", owner: n2 };
      await (async function(e3) {
        if (e3 <= 0) return;
        await new Promise((t3) => {
          setTimeout(t3, e3);
        });
      })(e2.staleRecheckDelayMs);
      return e2.now() - await br(e2) <= e2.staleLockMs ? { kind: "held", owner: n2 } : await vr(e2);
    }
    async function vr(e2) {
      return await Tr(() => e2.fs.unlink(e2.lockPath)), await wr(e2, true);
    }
    async function _r(e2, t2) {
      let r2, n2;
      try {
        r2 = await t2.fs.readFile(e2, "utf8");
      } catch (r3) {
        if (r3 instanceof Error && "ENOENT" === Cr(r3)) return;
        if (r3 instanceof Error && ("EACCES" === Cr(r3) || "EPERM" === Cr(r3))) {
          if (false === t2.throwOnInvalid) return;
          throw new mr({ code: "invalid_lockfile", message: `Unreadable agent store lockfile: ${e2}`, lockPath: e2 });
        }
        throw r3;
      }
      try {
        n2 = JSON.parse(r2);
      } catch {
        if (false === t2.throwOnInvalid) return;
        throw new mr({ code: "invalid_lockfile", message: `Invalid agent store lockfile JSON: ${e2}`, lockPath: e2 });
      }
      const s2 = (function(e3) {
        if (!(function(e4) {
          return "object" == typeof e4 && null !== e4 && !Array.isArray(e4);
        })(e3)) return;
        const { pid: t3, hostname: r3, windowId: n3, acquiredAt: s3, kind: o2, uid: i2, sid: a2 } = e3;
        if ("number" != typeof t3 || "string" != typeof r3 || "string" != typeof n3 || "number" != typeof s3 || void 0 !== i2 && "number" != typeof i2 || void 0 !== a2 && "string" != typeof a2) return;
        return { pid: t3, hostname: r3, windowId: n3, acquiredAt: s3, ..."string" == typeof o2 ? { kind: o2 } : {}, uid: i2, sid: a2 };
      })(n2);
      if (void 0 === s2) {
        if (false === t2.throwOnInvalid) return;
        throw new mr({ code: "invalid_lockfile", message: `Invalid agent store lockfile contents: ${e2}`, lockPath: e2 });
      }
      return s2;
    }
    async function br(e2) {
      try {
        return (await e2.fs.stat(e2.lockPath)).mtimeMs;
      } catch (e3) {
        if (e3 instanceof Error && "ENOENT" === Cr(e3)) return 0;
        throw e3;
      }
    }
    function Sr(e2, t2) {
      if (e2.uid !== t2.identity.uid) throw new mr({ code: "foreign_identity_lock", message: `Agent store lock is held by uid ${e2.uid}, expected ${t2.identity.uid}`, lockPath: t2.lockPath });
      if (e2.sid !== t2.identity.sid) throw new mr({ code: "foreign_identity_lock", message: `Agent store lock is held by sid ${e2.sid}, expected ${t2.identity.sid}`, lockPath: t2.lockPath });
    }
    function kr(e2, t2) {
      return e2.pid === t2.pid && e2.hostname === t2.hostname && e2.windowId === t2.windowId && e2.acquiredAt === t2.acquiredAt;
    }
    function xr(e2) {
      return { lockPath: h.resolve(e2.lockPath), windowId: e2.windowId, ownerKind: e2.ownerKind, hostname: e2.hostname ?? Xt.hostname(), identity: e2.identity ?? yr(), now: e2.now ?? Date.now, pid: e2.pid ?? process.pid, processExists: e2.processExists ?? Ir, staleLockMs: e2.staleLockMs ?? dr, staleRecheckDelayMs: e2.staleRecheckDelayMs ?? 2e3, mtimeUpdateMs: e2.mtimeUpdateMs ?? ur, fs: e2.fs ?? { readFile: (e3, t2) => p.promises.readFile(e3, t2), stat: (e3) => p.promises.stat(e3), unlink: (e3) => p.promises.unlink(e3), utimes: (e3, t2, r2) => p.promises.utimes(e3, t2, r2), writeLockExclusive: (e3, t2, r2) => rr(e3, t2, r2) } };
    }
    function Er() {
      const e2 = (0, Wt.Yy)()?.sid;
      if (void 0 === e2) throw new mr({ code: "missing_identity", message: "Could not determine current Windows lock identity", lockPath: "" });
      return e2;
    }
    function Ir(e2) {
      try {
        return process.kill(e2, 0), true;
      } catch (e3) {
        return e3 instanceof Error && "EPERM" === Cr(e3);
      }
    }
    async function Tr(e2) {
      try {
        await e2();
      } catch (e3) {
        if (!(e3 instanceof Error) || "ENOENT" !== Cr(e3)) throw e3;
      }
    }
    function Cr(e2) {
      if ("code" in e2 && "string" == typeof e2.code) return e2.code;
    }
    const Pr = "exclusive-mutation.lock";
    function Ar(e2) {
      return h.join(h.dirname(h.resolve(e2)), Wt.kR, Pr);
    }
    async function Rr(e2) {
      const t2 = Ar(e2.filesDir);
      (0, Wt.Ew)(h.dirname(t2));
      const r2 = await fr({ lockPath: t2, windowId: e2.ownerId });
      return "acquired" === r2.kind ? r2.lock : void 0;
    }
    async function Mr(e2) {
      return await gr({ lockPath: Ar(e2.filesDir) });
    }
    const Jr = Object.freeze({ policy: "recover", startJitterMs: 3e4, probeBaseMs: 3e5, probeMaxMs: 36e5, rememberedMountsMax: 16 }), Or = 3e4, Br = 3e5, Dr = 36e5, qr = 864e5, Nr = 0.2, Fr = { kind: "never-started" };
    function Ur(e2) {
      const t2 = e2.attempts ?? 0;
      return { kind: "down", reason: e2.reason, since: e2.since, attempts: t2, nextProbeAtMs: $r({ since: e2.since, attempts: t2, retryAfterMs: e2.retryAfterMs, config: e2.config, random: e2.random }) };
    }
    function Lr(e2) {
      return "down" !== e2.previous.kind ? e2.previous : Ur({ reason: e2.previous.reason, since: e2.now, attempts: e2.previous.attempts + 1, config: e2.config, random: e2.random });
    }
    function $r(e2) {
      const t2 = e2.config ?? Jr, r2 = Math.max(1, t2.probeBaseMs), n2 = Math.max(r2, t2.probeMaxMs), s2 = Math.max(0, Math.floor(e2.attempts)), o2 = Math.min(r2 * 2 ** s2, n2), i2 = void 0 !== e2.retryAfterMs ? Math.min(qr, Math.max(0, Math.floor(e2.retryAfterMs))) : void 0, a2 = void 0 !== i2 ? Math.max(o2, i2) : o2, c2 = (l2 = (e2.random ?? Math.random)(), Number.isFinite(l2) ? Math.min(Math.max(l2, 0), 1) : 0);
      var l2;
      const u2 = a2 * (1 - Nr + 2 * c2 * Nr);
      let d2 = Math.max(1, Math.floor(u2));
      return void 0 !== i2 && (d2 = Math.max(d2, i2)), e2.since + d2;
    }
    function jr(e2) {
      return "extension_deactivate" === e2 ? "extension_deactivate" : "gate_off" === e2 || e2.startsWith("gate_off:") ? "gate_off" : "server_disabled";
    }
    function Gr(e2) {
      switch (e2.phase.kind) {
        case "starting":
        case "stopping":
          return "none";
        case "down": {
          if ("extension_deactivate" === e2.phase.reason) return "none";
          const t2 = e2.config ?? Jr;
          if ("disabled" === e2.gateState && "server_disabled" === e2.phase.reason) return "stand-down";
          if ("latch" === t2.policy) return "none";
          if ("disabled" === e2.gateState) return "none";
          if ("gate_off" === e2.phase.reason) return "enabled" === e2.gateState ? "start" : "none";
          if ("enabled" === e2.gateState && "disabled" === e2.previousGateState) return "start";
          if ("gate_change" === (e2.trigger ?? "gate_change") && "enabled" !== e2.gateState) return "none";
          return (e2.now ?? 0) >= e2.phase.nextProbeAtMs ? "start" : "none";
        }
        case "never-started":
          return "enabled" === e2.gateState ? "start" : "none";
        case "up":
          return "disabled" === e2.gateState ? "stand-down" : "none";
        default:
          return e2.phase;
      }
    }
    function zr(e2) {
      return "start" === e2.action || ("down" !== e2.phase?.kind || "gate_off" !== e2.phase.reason || "down" !== e2.fromPhase?.kind || "gate_off" === e2.fromPhase.reason) && ("unknown" === e2.gateState && "latch" !== e2.policy && "gate_change" === (e2.trigger ?? "gate_change"));
    }
    function Wr(e2) {
      return "disabled" === e2.gateState || "stopping" !== e2.phase.kind && (("down" !== e2.phase.kind || "extension_deactivate" !== e2.phase.reason) && (("down" !== e2.phase.kind || "server_disabled" !== e2.phase.reason) && (!e2.coreReady || void 0 === e2.gateState)));
    }
    function Hr(e2) {
      if ("down" !== e2.fromPhase.kind) return 0;
      const t2 = e2.jitterMs ?? Or;
      if (t2 <= 0) return 0;
      const r2 = (e2.random ?? Math.random)(), n2 = Number.isFinite(r2) ? Math.min(Math.max(r2, 0), 1) : 0;
      return Math.floor(n2 * t2);
    }
    function Kr(e2) {
      return "down" !== e2.kind ? "start" : "gate_off" === e2.reason ? "recovered_gate_change" : "recovered_server_disabled";
    }
    function Vr(e2) {
      return "server_disabled" !== e2.reason || void 0 === e2.previousDownAttempts ? 0 : e2.previousDownAttempts + 1;
    }
    const Yr = 16;
    function Qr(e2) {
      const t2 = Math.max(0, e2.max ?? Yr), r2 = [], n2 = /* @__PURE__ */ new Set(), s2 = [...[...e2.mounts].reverse(), ...e2.remembered ?? []];
      for (const e3 of s2) {
        if (r2.length >= t2) break;
        "self" !== e3.mountKind && "peer" !== e3.mountKind && "share" !== e3.mountKind || n2.has(e3.mountKey) || (n2.add(e3.mountKey), r2.push(e3));
      }
      return r2;
    }
    function Xr(e2) {
      return e2.slice().reverse();
    }
    function Zr(e2, t2) {
      return Xr(e2).slice(t2).reverse();
    }
    function en(e2) {
      const t2 = /* @__PURE__ */ new Set();
      for (const r3 of e2.pending) t2.add(r3.mountKey);
      const r2 = [], n2 = /* @__PURE__ */ new Map();
      for (const s2 of e2.live) n2.set(s2.mountKey, s2), t2.has(s2.mountKey) || r2.push(s2);
      return Qr({ mounts: r2, remembered: (e2.replayComplete ? e2.pending.filter((e3) => n2.has(e3.mountKey)) : e2.pending).map((e3) => n2.get(e3.mountKey) ?? e3), max: e2.max });
    }
    function tn(e2) {
      switch (e2.mountKind) {
        case "self":
          return { kind: "self", agentId: e2.remoteTarget.agentId };
        case "peer":
          return { kind: "peer", agentId: e2.remoteTarget.agentId, ...void 0 !== e2.alias ? { alias: e2.alias } : {}, ...true === e2.isProjectStore ? { isProjectStore: true } : {} };
        case "share":
          return { kind: "share", shareId: e2.remoteTarget.shareId, ...void 0 !== e2.alias ? { alias: e2.alias } : {} };
        default:
          return;
      }
    }
    function rn(e2) {
      if ("latch" !== (e2.config ?? Jr).policy && "down" === e2.phase.kind && "extension_deactivate" !== e2.phase.reason && "gate_off" !== e2.phase.reason) return Math.max(0, e2.phase.nextProbeAtMs - e2.now);
    }
    function nn(e2) {
      const t2 = rn(e2);
      return void 0 !== t2 && t2 > 0;
    }
    function sn(e2) {
      if ("probe_timer" === e2.trigger) return false;
      const t2 = rn(e2);
      return void 0 !== t2 && t2 <= 0;
    }
    function on(e2) {
      const t2 = rn(e2);
      return void 0 !== t2 && t2 <= 0 ? "probe_timer" : e2.trigger;
    }
    function an(e2) {
      return Gr({ phase: e2.stoodDownForSession ? Ur({ reason: "gate_off", since: 0 }) : e2.coreUp ? { kind: "up" } : Fr, gateState: e2.gateState });
    }
    function cn(e2) {
      return "down" === e2.kind && ("gate_off" === e2.reason || "server_disabled" === e2.reason);
    }
    function ln(e2) {
      if ("down" === e2.phase.kind && "server_disabled" === e2.phase.reason && "gate_off" === e2.downReason) return Ur({ reason: "gate_off", since: e2.now, attempts: Vr({ reason: e2.downReason, previousDownAttempts: e2.previousDownAttempts }), retryAfterMs: e2.retryAfterMs, config: e2.config });
    }
    function un(e2) {
      return "stopping" === e2.kind || "down" === e2.kind;
    }
    function dn(e2) {
      switch (e2.kind) {
        case "never-started":
        case "starting":
        case "up":
          return e2.kind;
        case "stopping":
          return "stopping";
        case "down":
          return "down";
        default:
          return e2;
      }
    }
    function pn(e2) {
      return `${dn(e2.from)} -> ${dn(e2.to)} (${e2.reason})`;
    }
    const mn = BigInt(1e6);
    function hn(e2, t2) {
      return "all" === e2 || "posix" === e2 && "win32" !== t2;
    }
    function fn(e2) {
      return hn(e2.mode, e2.platform) ? (function(e3) {
        const t2 = e3.recorded, r2 = e3.live;
        if (!e3.synced || void 0 === t2 || 1 !== r2.nlink || void 0 === r2.mtimeNs || void 0 === r2.ctimeNs || void 0 === r2.inoNs || void 0 === r2.devNs) return false;
        if (void 0 !== e3.indexSize && e3.indexSize !== t2.size) return false;
        if (r2.size !== t2.size || r2.mtimeNs !== t2.mtimeNs || r2.ctimeNs !== t2.ctimeNs || r2.inoNs !== t2.ino || r2.devNs !== t2.dev) return false;
        const n2 = Number.isFinite(e3.racyMarginMs) ? e3.racyMarginMs : 0, s2 = Number(r2.ctimeNs / mn);
        return t2.recordedMs - s2 >= n2;
      })(e2) ? { action: "skip" } : { action: "hash" } : { action: "off" };
    }
    function gn(e2) {
      if (null === e2.stat_size || null === e2.stat_mtime_ns || null === e2.stat_ctime_ns || null === e2.stat_ino || null === e2.stat_dev || null === e2.stat_recorded_ms) return;
      if (!Number.isSafeInteger(e2.stat_size) || e2.stat_size < 0) return;
      if (!Number.isSafeInteger(e2.stat_recorded_ms)) return;
      const t2 = yn(e2.stat_mtime_ns), r2 = yn(e2.stat_ctime_ns), n2 = yn(e2.stat_ino), s2 = yn(e2.stat_dev);
      return void 0 !== t2 && void 0 !== r2 && void 0 !== n2 && void 0 !== s2 ? { size: e2.stat_size, mtimeNs: t2, ctimeNs: r2, ino: n2, dev: s2, recordedMs: e2.stat_recorded_ms } : void 0;
    }
    function yn(e2) {
      if (/^\d+$/.test(e2)) return BigInt(e2);
    }
    function wn(e2) {
      if (!Number.isSafeInteger(e2.expectedSize) || e2.expectedSize < 0) return;
      let t2;
      try {
        t2 = p.lstatSync(e2.absPath, { bigint: true });
      } catch {
        return;
      }
      return t2.isSymbolicLink() || !t2.isFile() || t2.size !== BigInt(e2.expectedSize) || void 0 !== e2.expectedIno && t2.ino !== e2.expectedIno || void 0 !== e2.expectedDev && t2.dev !== e2.expectedDev ? void 0 : { size: e2.expectedSize, mtimeNs: t2.mtimeNs, ctimeNs: t2.ctimeNs, ino: t2.ino, dev: t2.dev, recordedMs: e2.recordedMs };
    }
    const vn = 5, _n = "deletion_armed", bn = "files_root_dev", Sn = "files_root_ino", kn = "tombstone_cursor_ms", xn = "last_complete_round_ms", En = "last_listing_applied_ms", In = "index_created_ms", Tn = "root_id", Cn = "tombstone_rounds_since_include", Pn = "tombstone_last_include_ms", An = "remote_version", Rn = "remote_version_listed_ms";
    class Mn extends Error {
      constructor(e2, t2) {
        super(t2), this.code = e2, this.name = "LocalIndexError";
      }
    }
    const Jn = /* @__PURE__ */ new Map();
    class On {
      constructor(e2, t2) {
        this.indexPath = e2, this.core = t2, this.closed = false;
      }
      static open(e2, t2) {
        const r2 = h.resolve(e2), n2 = Jn.get(r2);
        if (void 0 !== n2) return On.attach(n2, true === t2.statSchemaEnabled);
        const s2 = Bn.openNew(r2, t2);
        try {
          return On.attach(s2, true === t2.statSchemaEnabled);
        } catch (e3) {
          throw s2.abandon(), e3;
        }
      }
      close() {
        this.closed || (this.closed = true, this.core.release(this));
      }
      isClosed() {
        return this.closed;
      }
      setStatSchemaEnabled(e2) {
        this.closed || this.core.setVote(this, e2);
      }
      getFile(e2) {
        return this.withCore((t2) => t2.getFile(e2));
      }
      listFiles() {
        return this.withCore((e2) => e2.listFiles());
      }
      hasLiveDescendantFiles(e2) {
        return this.withCore((t2) => t2.hasLiveDescendantFiles(e2));
      }
      hasLiveFilesUnder(e2) {
        return this.withCore((t2) => t2.hasLiveFilesUnder(e2));
      }
      upsertFile(e2) {
        this.withCore((t2) => t2.upsertFile(e2));
      }
      listPendingDeletes() {
        return this.withCore((e2) => e2.listPendingDeletes());
      }
      hasPendingDelete(e2) {
        return this.withCore((t2) => t2.hasPendingDelete(e2));
      }
      hasPendingDeletesUnder(e2) {
        return this.withCore((t2) => t2.hasPendingDeletesUnder(e2));
      }
      upsertPendingDelete(e2) {
        this.withCore((t2) => t2.upsertPendingDelete(e2));
      }
      removePendingDelete(e2) {
        return this.withCore((t2) => t2.removePendingDelete(e2));
      }
      listPendingRmdirs() {
        return this.withCore((e2) => e2.listPendingRmdirs());
      }
      hasPendingRmdir(e2) {
        return this.withCore((t2) => t2.hasPendingRmdir(e2));
      }
      upsertPendingRmdir(e2) {
        this.withCore((t2) => t2.upsertPendingRmdir(e2));
      }
      removePendingRmdir(e2) {
        return this.withCore((t2) => t2.removePendingRmdir(e2));
      }
      clearPendingDeletes() {
        return this.withCore((e2) => e2.clearPendingDeletes());
      }
      disarmDeletionAndClearPending() {
        return this.withCore((e2) => e2.disarmDeletionAndClearPending());
      }
      bindRootId(e2) {
        return this.withCore((t2) => t2.bindRootId(e2));
      }
      armDeletionWithIdentity(e2) {
        this.withCore((t2) => t2.armDeletionWithIdentity(e2));
      }
      deleteFile(e2) {
        return this.withCore((t2) => t2.deleteFile(e2));
      }
      clearRecordedStat(e2) {
        this.withCore((t2) => t2.clearRecordedStat(e2));
      }
      getMeta(e2) {
        return this.withCore((t2) => t2.getMeta(e2));
      }
      setMeta(e2) {
        this.withCore((t2) => t2.setMeta(e2));
      }
      deleteMeta(e2) {
        return this.withCore((t2) => t2.deleteMeta(e2));
      }
      static attach(e2, t2) {
        const r2 = new On(e2.indexPath, e2);
        return e2.register(r2, t2), Jn.set(e2.indexPath, e2), r2;
      }
      assertOpen() {
        if (this.closed) throw new Mn("closed", "agent store local index is closed");
      }
      withCore(e2) {
        return this.assertOpen(), e2(this.core);
      }
    }
    class Bn {
      static openNew(e2, t2) {
        let r2;
        (0, Wt.rs)(e2), (0, Wt.Ew)(h.dirname(e2)), (0, Wt.rs)(e2);
        try {
          const t3 = p.statSync(e2).mtimeMs;
          Number.isFinite(t3) && t3 > 0 && (r2 = Math.floor(t3));
        } catch {
        }
        const n2 = Zt(e2, 384);
        let s2, o2;
        try {
          return s2 = new t2.sqlite(n2.sqlitePath), n2.verifyOpenedInode(), Gn(e2), o2 = new Bn(e2, s2, n2), s2 = void 0, o2.migrate(r2), o2;
        } catch (e3) {
          throw void 0 !== o2 ? o2.abandon() : (s2?.close(), n2.close()), e3;
        }
      }
      constructor(e2, t2, r2) {
        this.indexPath = e2, this.db = t2, this.connectionClosed = false, this.statSchemaEnabled = false, this.leases = /* @__PURE__ */ new Set(), this.votes = /* @__PURE__ */ new Map(), this.opened = r2;
      }
      register(e2, t2) {
        this.leases.add(e2), this.votes.set(e2, t2);
        try {
          this.applyVotes(), 1 === this.leases.size && this.restrictFileModes();
        } catch (t3) {
          if (this.leases.delete(e2), this.votes.delete(e2), this.leases.size > 0) try {
            this.applyVotes();
          } catch {
          }
          throw t3;
        }
      }
      setVote(e2, t2) {
        if (!this.leases.has(e2)) return;
        const r2 = true === this.votes.get(e2);
        this.votes.set(e2, t2);
        try {
          this.applyVotes();
        } catch (t3) {
          this.votes.set(e2, r2);
          try {
            this.applyVotes();
          } catch {
          }
          throw t3;
        }
      }
      release(e2) {
        this.leases.delete(e2) && (this.votes.delete(e2), 0 !== this.leases.size ? this.applyVotes() : this.closeConnection());
      }
      abandon() {
        this.leases.clear(), this.votes.clear(), this.closeConnection();
      }
      applyVotes() {
        let e2 = false;
        if (this.votes.size > 0) {
          e2 = true;
          for (const t2 of this.votes.values()) if (!t2) {
            e2 = false;
            break;
          }
        }
        this.applyStatSchema(e2);
      }
      closeConnection() {
        if (!this.connectionClosed) {
          this.connectionClosed = true, Jn.get(this.indexPath) === this && Jn.delete(this.indexPath);
          try {
            this.db.close();
          } finally {
            this.opened?.close(), this.opened = void 0;
          }
        }
      }
      getFile(e2) {
        const t2 = this.db.prepare(`SELECT ${qn} FROM files WHERE rel_path = ?`).get(e2);
        return void 0 === t2 ? void 0 : $n(t2);
      }
      listFiles() {
        return this.db.prepare(`SELECT ${qn} FROM files ORDER BY rel_path ASC`).all().map($n);
      }
      hasLiveDescendantFiles(e2) {
        if ("" === e2) return this.hasLiveFilesUnder("");
        const t2 = jn(e2);
        return void 0 !== this.db.prepare("SELECT 1 AS ok FROM files\n         WHERE state != 'tombstoned'\n           AND rel_path >= ? AND rel_path < ?\n         LIMIT 1").get(t2.start, t2.end);
      }
      hasLiveFilesUnder(e2) {
        if ("" === e2) {
          return void 0 !== this.db.prepare("SELECT 1 AS ok FROM files WHERE state != 'tombstoned' LIMIT 1").get();
        }
        const t2 = jn(e2);
        return void 0 !== this.db.prepare("SELECT 1 AS ok FROM files\n         WHERE state != 'tombstoned'\n           AND (rel_path = ? OR (rel_path >= ? AND rel_path < ?))\n         LIMIT 1").get(e2, t2.start, t2.end);
      }
      upsertFile(e2) {
        const t2 = e2.state ?? "live", r2 = "tombstoned" === t2 ? e2.tombstoneEtag : null, n2 = "tombstoned" === t2 ? e2.deletedAtMs : null, s2 = "tombstoned" !== t2 && this.statSchemaEnabled ? e2.recordedStat : void 0, o2 = this.statSchemaEnabled ? `stat_size = ${Un},
          stat_mtime_ns = ${Ln("stat_mtime_ns")},
          stat_ctime_ns = ${Ln("stat_ctime_ns")},
          stat_ino = ${Ln("stat_ino")},
          stat_dev = ${Ln("stat_dev")},
          stat_recorded_ms = ${Ln("stat_recorded_ms")}` : "stat_size = NULL,\n          stat_mtime_ns = NULL,\n          stat_ctime_ns = NULL,\n          stat_ino = NULL,\n          stat_dev = NULL,\n          stat_recorded_ms = NULL";
        this.db.prepare(`
        INSERT INTO files (
          rel_path,
          last_synced_sha,
          last_seen_etag,
          size,
          last_synced_ms,
          direction,
          state,
          tombstone_etag,
          deleted_at_ms,
          stat_size,
          stat_mtime_ns,
          stat_ctime_ns,
          stat_ino,
          stat_dev,
          stat_recorded_ms
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(rel_path) DO UPDATE SET
          last_synced_sha = excluded.last_synced_sha,
          last_seen_etag = excluded.last_seen_etag,
          size = excluded.size,
          last_synced_ms = excluded.last_synced_ms,
          direction = excluded.direction,
          state = excluded.state,
          tombstone_etag = excluded.tombstone_etag,
          deleted_at_ms = excluded.deleted_at_ms,
          ${o2}
      `).run(e2.relPath, e2.lastSyncedSha, e2.lastSeenEtag ?? null, e2.size, e2.lastSyncedMs, e2.direction, t2, r2 ?? null, n2 ?? null, s2?.size ?? null, void 0 === s2 ? null : s2.mtimeNs.toString(), void 0 === s2 ? null : s2.ctimeNs.toString(), void 0 === s2 ? null : s2.ino.toString(), void 0 === s2 ? null : s2.dev.toString(), s2?.recordedMs ?? null), this.restrictFileModes();
      }
      listPendingDeletes() {
        return this.db.prepare("SELECT rel_path, base_etag, requested_at_ms, mutation_id FROM pending_deletes ORDER BY rel_path ASC").all().map((e2) => ({ relPath: e2.rel_path, baseEtag: e2.base_etag, requestedAtMs: e2.requested_at_ms, mutationId: e2.mutation_id ?? void 0 }));
      }
      hasPendingDelete(e2) {
        return void 0 !== this.db.prepare("SELECT rel_path FROM pending_deletes WHERE rel_path = ?").get(e2);
      }
      hasPendingDeletesUnder(e2) {
        if ("" === e2) {
          return void 0 !== this.db.prepare("SELECT 1 AS ok FROM pending_deletes LIMIT 1").get();
        }
        const t2 = jn(e2);
        return void 0 !== this.db.prepare("SELECT 1 AS ok FROM pending_deletes\n         WHERE rel_path = ? OR (rel_path >= ? AND rel_path < ?)\n         LIMIT 1").get(e2, t2.start, t2.end);
      }
      upsertPendingDelete(e2) {
        this.db.prepare("\n        INSERT INTO pending_deletes (\n          rel_path,\n          base_etag,\n          requested_at_ms,\n          mutation_id\n        ) VALUES (?, ?, ?, ?)\n        ON CONFLICT(rel_path) DO UPDATE SET\n          base_etag = excluded.base_etag,\n          requested_at_ms = excluded.requested_at_ms,\n          mutation_id = excluded.mutation_id\n      ").run(e2.relPath, e2.baseEtag, e2.requestedAtMs, e2.mutationId ?? null), this.restrictFileModes();
      }
      removePendingDelete(e2) {
        return this.db.prepare("DELETE FROM pending_deletes WHERE rel_path = ?").run(e2).changes > 0;
      }
      listPendingRmdirs() {
        return this.db.prepare("SELECT rel_path, requested_at_ms FROM pending_rmdirs ORDER BY (LENGTH(rel_path) - LENGTH(REPLACE(rel_path, '/', ''))) DESC, rel_path ASC").all().map((e2) => ({ relPath: e2.rel_path, requestedAtMs: e2.requested_at_ms }));
      }
      hasPendingRmdir(e2) {
        return void 0 !== this.db.prepare("SELECT rel_path FROM pending_rmdirs WHERE rel_path = ?").get(e2);
      }
      upsertPendingRmdir(e2) {
        this.db.prepare("\n        INSERT INTO pending_rmdirs (rel_path, requested_at_ms)\n        VALUES (?, ?)\n        ON CONFLICT(rel_path) DO UPDATE SET\n          requested_at_ms = excluded.requested_at_ms\n      ").run(e2.relPath, e2.requestedAtMs), this.restrictFileModes();
      }
      removePendingRmdir(e2) {
        return this.db.prepare("DELETE FROM pending_rmdirs WHERE rel_path = ?").run(e2).changes > 0;
      }
      clearPendingDeletes() {
        const e2 = this.db.prepare("DELETE FROM pending_deletes").run();
        return this.db.prepare("DELETE FROM pending_rmdirs").run(), e2.changes;
      }
      disarmDeletionAndClearPending() {
        const e2 = this.db.transaction(() => this.clearDeletionRights())();
        return this.restrictFileModes(), e2;
      }
      clearDeletionRights() {
        return this.db.prepare("\n        INSERT INTO meta (key, value)\n        VALUES (?, ?)\n        ON CONFLICT(key) DO UPDATE SET value = excluded.value\n      ").run(_n, "0"), this.db.prepare("DELETE FROM meta WHERE key = ?").run(bn), this.db.prepare("DELETE FROM meta WHERE key = ?").run(Sn), this.db.prepare("DELETE FROM meta WHERE key = ?").run(An), this.db.prepare("DELETE FROM meta WHERE key = ?").run(Rn), this.db.prepare("DELETE FROM pending_rmdirs").run(), this.db.prepare("DELETE FROM pending_deletes").run().changes;
      }
      bindRootId(e2) {
        const t2 = this.getMeta(Tn);
        return void 0 === t2 ? (this.setMeta({ key: Tn, value: e2 }), "adopted") : t2 === e2 ? "bound" : (this.db.transaction(() => {
          this.clearDeletionRights(), this.db.prepare("\n          INSERT INTO meta (key, value)\n          VALUES (?, ?)\n          ON CONFLICT(key) DO UPDATE SET value = excluded.value\n        ").run(Tn, e2);
        })(), this.restrictFileModes(), "rebound");
      }
      armDeletionWithIdentity(e2) {
        this.db.transaction(() => {
          const t2 = this.db.prepare("\n        INSERT INTO meta (key, value)\n        VALUES (?, ?)\n        ON CONFLICT(key) DO UPDATE SET value = excluded.value\n      ");
          t2.run(_n, "1"), t2.run(bn, String(e2.dev)), t2.run(Sn, String(e2.ino));
        })(), this.restrictFileModes();
      }
      deleteFile(e2) {
        const t2 = this.db.prepare("DELETE FROM files WHERE rel_path = ?").run(e2);
        return t2.changes > 0 && this.restrictFileModes(), t2.changes > 0;
      }
      clearRecordedStat(e2) {
        this.db.prepare("UPDATE files SET\n          stat_size = NULL,\n          stat_mtime_ns = NULL,\n          stat_ctime_ns = NULL,\n          stat_ino = NULL,\n          stat_dev = NULL,\n          stat_recorded_ms = NULL\n        WHERE rel_path = ?").run(e2).changes > 0 && this.restrictFileModes();
      }
      getMeta(e2) {
        const t2 = this.db.prepare("SELECT value FROM meta WHERE key = ?").get(e2);
        return t2?.value;
      }
      setMeta(e2) {
        this.db.prepare("\n        INSERT INTO meta (key, value)\n        VALUES (?, ?)\n        ON CONFLICT(key) DO UPDATE SET value = excluded.value\n      ").run(e2.key, e2.value), this.restrictFileModes();
      }
      deleteMeta(e2) {
        const t2 = this.db.prepare("DELETE FROM meta WHERE key = ?").run(e2);
        return t2.changes > 0 && this.restrictFileModes(), t2.changes > 0;
      }
      applyStatSchema(e2) {
        if (this.ensureStatColumns(), e2) return this.getMeta("schema_version") !== String(vn) && this.setMeta({ key: "schema_version", value: String(vn) }), void (this.statSchemaEnabled = true);
        const t2 = this.getMeta("schema_version"), r2 = this.db.prepare(`SELECT 1 AS ok FROM files WHERE ${Nn} LIMIT 1`).get();
        t2 !== String(4) || void 0 !== r2 ? (this.restrictFileModes(), this.db.transaction(() => {
          void 0 !== r2 && this.db.exec(Fn), t2 !== String(4) && this.db.prepare("\n            INSERT INTO meta (key, value)\n            VALUES (?, ?)\n            ON CONFLICT(key) DO UPDATE SET value = excluded.value\n          ").run("schema_version", String(4));
        })(), this.statSchemaEnabled = false) : this.statSchemaEnabled = false;
      }
      migrate(e2) {
        this.db.pragma("journal_mode = WAL"), this.db.pragma("synchronous = NORMAL"), this.db.pragma("busy_timeout = 5000"), this.db.exec("\n      CREATE TABLE IF NOT EXISTS meta (\n        key TEXT PRIMARY KEY,\n        value TEXT NOT NULL\n      );\n    ");
        const t2 = this.getMeta("schema_version");
        if (void 0 === t2) return this.createCurrentSchema(), void this.ensureIndexCreatedMs(e2);
        const r2 = Number(t2);
        if (!Number.isInteger(r2) || r2 < 1 || r2 > vn) throw new Mn("unsupported_schema_version", `Unsupported agent store index schema version: ${t2}`);
        this.createFilesTableIfNeeded(), r2 < 4 && (this.deleteMeta(An), this.deleteMeta(Rn)), r2 < 2 && this.migrateV1ToV2(), r2 < 3 && this.migrateV2ToV3(), r2 < 4 && this.migrateV3ToV4(), this.ensureStatColumns(), this.ensureIndexCreatedMs(e2);
      }
      ensureIndexCreatedMs(e2) {
        const t2 = this.getMeta(In);
        if (void 0 !== t2 && "" !== t2) {
          const e3 = Number(t2);
          if (Number.isSafeInteger(e3) && e3 > 0) return;
        }
        const r2 = void 0 !== e2 && e2 > 0 ? e2 : Date.now();
        this.setMeta({ key: In, value: String(r2) });
      }
      createCurrentSchema() {
        this.createFilesTableIfNeeded(), this.createPendingDeletesTableIfNeeded(), this.createPendingRmdirsTableIfNeeded(), this.setMeta({ key: "schema_version", value: String(4) });
      }
      createFilesTableIfNeeded() {
        this.db.exec("\n      CREATE TABLE IF NOT EXISTS files (\n        rel_path TEXT PRIMARY KEY,\n        last_synced_sha TEXT NOT NULL,\n        last_seen_etag TEXT,\n        size INTEGER NOT NULL,\n        last_synced_ms INTEGER NOT NULL,\n        direction TEXT NOT NULL CHECK(direction IN ('pulled', 'pushed')),\n        state TEXT NOT NULL DEFAULT 'live' CHECK(state IN ('live', 'tombstoned')),\n        tombstone_etag TEXT,\n        deleted_at_ms INTEGER,\n        stat_size INTEGER,\n        stat_mtime_ns TEXT,\n        stat_ctime_ns TEXT,\n        stat_ino TEXT,\n        stat_dev TEXT,\n        stat_recorded_ms INTEGER\n      );\n    ");
      }
      createPendingDeletesTableIfNeeded() {
        this.db.exec("\n      CREATE TABLE IF NOT EXISTS pending_deletes (\n        rel_path TEXT PRIMARY KEY,\n        base_etag TEXT NOT NULL,\n        requested_at_ms INTEGER NOT NULL,\n        mutation_id TEXT\n      );\n    ");
      }
      migrateV1ToV2() {
        const e2 = this.db.prepare("PRAGMA table_info(files)").all();
        e2.some((e3) => "last_seen_sha" === e3.name) && this.db.exec("ALTER TABLE files RENAME COLUMN last_seen_sha TO last_synced_sha"), e2.some((e3) => "last_seen_etag" === e3.name) || this.db.exec("ALTER TABLE files ADD COLUMN last_seen_etag TEXT"), this.setMeta({ key: "schema_version", value: "2" });
      }
      migrateV2ToV3() {
        const e2 = this.db.prepare("PRAGMA table_info(files)").all();
        e2.some((e3) => "state" === e3.name) || this.db.exec("ALTER TABLE files ADD COLUMN state TEXT NOT NULL DEFAULT 'live' CHECK(state IN ('live', 'tombstoned'))"), e2.some((e3) => "tombstone_etag" === e3.name) || this.db.exec("ALTER TABLE files ADD COLUMN tombstone_etag TEXT"), e2.some((e3) => "deleted_at_ms" === e3.name) || this.db.exec("ALTER TABLE files ADD COLUMN deleted_at_ms INTEGER"), this.createPendingDeletesTableIfNeeded(), this.setMeta({ key: "schema_version", value: "3" });
      }
      migrateV3ToV4() {
        this.createPendingRmdirsTableIfNeeded(), this.setMeta({ key: "schema_version", value: "4" });
      }
      ensureStatColumns() {
        const e2 = this.db.prepare("PRAGMA table_info(files)").all(), t2 = new Set(e2.map((e3) => e3.name)), r2 = (e3, r3) => {
          t2.has(e3) || this.db.exec(`ALTER TABLE files ADD COLUMN ${e3} ${r3}`);
        };
        r2("stat_size", "INTEGER"), r2("stat_mtime_ns", "TEXT"), r2("stat_ctime_ns", "TEXT"), r2("stat_ino", "TEXT"), r2("stat_dev", "TEXT"), r2("stat_recorded_ms", "INTEGER");
      }
      createPendingRmdirsTableIfNeeded() {
        this.db.exec("\n      CREATE TABLE IF NOT EXISTS pending_rmdirs (\n        rel_path TEXT PRIMARY KEY,\n        requested_at_ms INTEGER NOT NULL\n      );\n    ");
      }
      restrictFileModes() {
        Gn(this.indexPath);
      }
    }
    function Dn(e2, t2) {
      return On.open(e2, t2);
    }
    const qn = "rel_path, last_synced_sha, last_seen_etag, size, last_synced_ms, direction, state, tombstone_etag, deleted_at_ms, stat_size, stat_mtime_ns, stat_ctime_ns, stat_ino, stat_dev, stat_recorded_ms", Nn = "stat_size IS NOT NULL OR stat_mtime_ns IS NOT NULL OR stat_ctime_ns IS NOT NULL OR stat_ino IS NOT NULL OR stat_dev IS NOT NULL OR stat_recorded_ms IS NOT NULL", Fn = `UPDATE files SET
  stat_size = NULL,
  stat_mtime_ns = NULL,
  stat_ctime_ns = NULL,
  stat_ino = NULL,
  stat_dev = NULL,
  stat_recorded_ms = NULL
 WHERE ${Nn}`, Un = "CASE\n            WHEN excluded.state = 'tombstoned' THEN NULL\n            WHEN excluded.stat_size IS NOT NULL THEN excluded.stat_size\n            WHEN excluded.last_synced_sha = files.last_synced_sha AND excluded.size = files.size THEN files.stat_size\n            ELSE NULL\n          END";
    function Ln(e2) {
      return `CASE
            WHEN excluded.state = 'tombstoned' THEN NULL
            WHEN excluded.stat_size IS NOT NULL THEN excluded.${e2}
            WHEN excluded.last_synced_sha = files.last_synced_sha AND excluded.size = files.size THEN files.${e2}
            ELSE NULL
          END`;
    }
    function $n(e2) {
      const t2 = gn(e2);
      return { relPath: e2.rel_path, lastSyncedSha: e2.last_synced_sha, lastSeenEtag: e2.last_seen_etag ?? void 0, size: e2.size, lastSyncedMs: e2.last_synced_ms, direction: e2.direction, state: e2.state, tombstoneEtag: e2.tombstone_etag ?? void 0, deletedAtMs: e2.deleted_at_ms ?? void 0, ...void 0 === t2 ? {} : { recordedStat: t2 } };
    }
    function jn(e2) {
      return { start: `${e2}/`, end: `${e2}0` };
    }
    function Gn(e2) {
      for (const t2 of [e2, `${e2}-wal`, `${e2}-shm`]) p.existsSync(t2) && p.chmodSync(t2, 384);
    }
    function zn(e2, t2) {
      const r2 = h.resolve(e2);
      let n2;
      try {
        n2 = p.lstatSync(r2);
      } catch (e3) {
        if (Vn(e3) && "ENOENT" === e3.code) return { kind: "absent" };
        throw e3;
      }
      if (n2.isSymbolicLink() || !n2.isFile()) throw new Wt.y$({ code: "symlink_refused", message: `Refusing to audit a non-regular index: ${r2}`, failedPath: r2 });
      if (0 === n2.size && !(function(e3) {
        try {
          const t3 = p.lstatSync(`${e3}-wal`);
          return !t3.isFile() || t3.size > 0;
        } catch (e4) {
          if (Vn(e4) && "ENOENT" === e4.code) return false;
          throw e4;
        }
      })(r2)) return { kind: "absent" };
      (0, Wt.rs)(r2);
      const s2 = er(r2);
      let o2;
      try {
        o2 = new t2.sqlite(s2.sqlitePath, { fileMustExist: true }), s2.verifyOpenedInode();
        const e3 = (function(e4) {
          const t3 = e4.prepare("SELECT value FROM meta WHERE key = 'schema_version'").get(), r4 = t3?.value ?? "", n3 = Number(r4);
          if (!Number.isInteger(n3) || n3 < 1 || n3 > vn) return { kind: "unsupported", raw: r4 };
          return { kind: "ok", version: n3 };
        })(o2);
        if ("unsupported" === e3.kind) return o2.close(), s2.close(), o2 = void 0, { kind: "unsupported_schema", version: e3.raw };
        const r3 = new Wn(o2, s2, e3.version);
        return o2 = void 0, { kind: "open", index: r3 };
      } catch (e3) {
        throw o2?.close(), s2.close(), e3;
      }
    }
    class Wn {
      constructor(e2, t2, r2) {
        this.db = e2, this.opened = t2, this.version = r2, this.closed = false;
      }
      journalMode() {
        this.assertOpen();
        const e2 = this.db.pragma("journal_mode", { simple: true });
        return "string" == typeof e2 ? e2 : "";
      }
      getMeta(e2) {
        this.assertOpen();
        const t2 = this.db.prepare("SELECT value FROM meta WHERE key = ?").get(e2);
        return t2?.value;
      }
      listFiles() {
        if (this.assertOpen(), !this.hasTable("files")) throw new Kn("agent store index has no files table");
        const e2 = this.columnNames("files"), t2 = e2.has("last_synced_sha") ? "last_synced_sha" : e2.has("last_seen_sha") ? "last_seen_sha" : void 0;
        if (void 0 === t2 || !e2.has("rel_path") || !e2.has("size")) throw new Kn("agent store index files table is missing its content columns");
        return this.db.prepare(`
      SELECT
        rel_path,
        ${t2} AS last_synced_sha,
        ${e2.has("last_seen_etag") ? "last_seen_etag" : "NULL"} AS last_seen_etag,
        size,
        ${e2.has("last_synced_ms") ? "last_synced_ms" : "0"} AS last_synced_ms,
        ${e2.has("direction") ? "direction" : "'pulled'"} AS direction,
        ${e2.has("state") ? "state" : "'live'"} AS state,
        ${e2.has("tombstone_etag") ? "tombstone_etag" : "NULL"} AS tombstone_etag,
        ${e2.has("deleted_at_ms") ? "deleted_at_ms" : "NULL"} AS deleted_at_ms,
        ${e2.has("stat_size") ? "stat_size" : "NULL"} AS stat_size,
        ${e2.has("stat_mtime_ns") ? "stat_mtime_ns" : "NULL"} AS stat_mtime_ns,
        ${e2.has("stat_ctime_ns") ? "stat_ctime_ns" : "NULL"} AS stat_ctime_ns,
        ${e2.has("stat_ino") ? "stat_ino" : "NULL"} AS stat_ino,
        ${e2.has("stat_dev") ? "stat_dev" : "NULL"} AS stat_dev,
        ${e2.has("stat_recorded_ms") ? "stat_recorded_ms" : "NULL"} AS stat_recorded_ms
      FROM files
      ORDER BY rel_path ASC
    `).all().map(Hn);
      }
      listPendingDeletes() {
        if (this.assertOpen(), !this.hasTable("pending_deletes")) return [];
        const e2 = this.columnNames("pending_deletes");
        if (!e2.has("rel_path") || !e2.has("base_etag")) throw new Kn("agent store index pending_deletes table is missing its columns");
        return this.db.prepare(`
      SELECT
        rel_path,
        base_etag,
        ${e2.has("requested_at_ms") ? "requested_at_ms" : "0"} AS requested_at_ms,
        ${e2.has("mutation_id") ? "mutation_id" : "NULL"} AS mutation_id
      FROM pending_deletes
      ORDER BY rel_path ASC
    `).all().map((e3) => ({ relPath: e3.rel_path, baseEtag: e3.base_etag, requestedAtMs: e3.requested_at_ms, ...null === e3.mutation_id ? {} : { mutationId: e3.mutation_id } }));
      }
      listPendingRmdirs() {
        if (this.assertOpen(), !this.hasTable("pending_rmdirs")) return [];
        return this.db.prepare("\n      SELECT rel_path, requested_at_ms\n      FROM pending_rmdirs\n      ORDER BY rel_path ASC\n    ").all().map((e2) => ({ relPath: e2.rel_path, requestedAtMs: e2.requested_at_ms }));
      }
      close() {
        this.closed || (this.closed = true, this.db.close(), this.opened.close());
      }
      assertOpen() {
        if (this.closed) throw new Error("agent store audit index is closed");
      }
      hasTable(e2) {
        return void 0 !== this.db.prepare("SELECT 1 AS ok FROM sqlite_master WHERE type = 'table' AND name = ?").get(e2);
      }
      columnNames(e2) {
        const t2 = "files" === e2 ? "PRAGMA table_info(files)" : "pending_deletes" === e2 ? "PRAGMA table_info(pending_deletes)" : "PRAGMA table_info(pending_rmdirs)", r2 = this.db.prepare(t2).all();
        return new Set(r2.map((e3) => e3.name));
      }
    }
    function Hn(e2) {
      if ("pulled" !== e2.direction && "pushed" !== e2.direction) throw new Kn(`agent store index has an unknown direction: ${e2.direction}`);
      if ("live" !== e2.state && "tombstoned" !== e2.state) throw new Kn(`agent store index has an unknown file state: ${e2.state}`);
      const t2 = gn(e2);
      return { relPath: e2.rel_path, lastSyncedSha: e2.last_synced_sha, lastSeenEtag: e2.last_seen_etag ?? void 0, size: e2.size, lastSyncedMs: e2.last_synced_ms, direction: e2.direction, state: e2.state, tombstoneEtag: e2.tombstone_etag ?? void 0, deletedAtMs: e2.deleted_at_ms ?? void 0, ...void 0 === t2 ? {} : { recordedStat: t2 } };
    }
    class Kn extends Error {
      constructor(e2) {
        super(e2), this.code = "audit_unreadable", this.name = "AuditReadError";
      }
    }
    function Vn(e2) {
      return e2 instanceof Error && "string" == typeof e2.code;
    }
    var Yn = r(61933);
    function Qn(e2) {
      return "lazy" !== e2.policy ? { action: "mount", reason: e2.reason } : true === e2.resumeRequested || e2.indexPopulated || (0, Yn.PZ)(e2.agentId) ? { action: "mount", reason: "resume" } : { action: "defer" };
    }
    const Xn = Object.freeze({ onDiskFull() {
    }, onSymlinkRefused() {
    }, onNetworkError() {
    }, onThrottled() {
    }, onMintGateStateChanged() {
    }, onRoundCompleted() {
    }, onSyncRound() {
    }, onSessionState() {
    }, onRoundLifecycle() {
    }, syncRoundSkipped() {
    }, onLockEvent() {
    }, onBlobTransferTiming() {
    }, onResumeDetected() {
    }, onDirtyPassiveStalled() {
    }, onSchedulerTick() {
    }, onVersionProbeBatch() {
    }, onError() {
    }, recordIndexLookupClosed() {
    }, onConflict() {
    }, recordMountRequested() {
    }, recordMountOutcome() {
    }, recordWriteBarrier() {
    }, recordCitationStarted() {
    }, recordCitationResolution() {
    }, recordCitationStaleness() {
    }, recordStatFastPath() {
    }, recordMultipartAbandoned() {
    }, recordStorePin() {
    }, recordStoreEviction() {
    }, tokenMinted() {
    }, tokenRefreshUnauthorized() {
    }, tokenMintNegativeCached() {
    }, tokenMintFailureCached() {
    }, tokenMintRetried() {
    }, tokenMintRetryDenied() {
    }, tokenRefreshFailedKeptExisting() {
    } });
    function Zn({ agentId: e2, summary: t2, sinceLastSuccessMs: r2 }) {
      return { agentId: e2, durationMs: t2.durationMs, filesPushed: t2.filesPushed, filesPulled: t2.filesPulled, filesSkipped: t2.filesSkipped, bytesPushed: t2.bytesPushed, bytesPulled: t2.bytesPulled, refusals: t2.refusals, filesConflicted: t2.filesConflicted, identicalContentConflictsSuppressed: t2.identicalContentConflictsSuppressed ?? 0, conflictProtectionDowngrades: t2.conflictProtectionDowngrades, legacyProbes: t2.legacyProbes, pushEntriesParked: t2.pushEntriesParked, pullsDeferred: t2.pullsDeferred, pullsSkippedPendingDelete: t2.pullsSkippedPendingDelete, filesDeletedRemote: t2.filesDeletedRemote, filesDeletedLocal: t2.filesDeletedLocal, ...void 0 !== t2.tombstonesReceived ? { tombstonesReceived: t2.tombstonesReceived } : {}, ...void 0 !== t2.tombstoneCursorAdvancedMs ? { tombstoneCursorAdvancedMs: t2.tombstoneCursorAdvancedMs } : {}, ...void 0 !== t2.absenceDeletesApplied ? { absenceDeletesApplied: t2.absenceDeletesApplied } : {}, ...void 0 !== t2.absenceDeletesSkippedModified ? { absenceDeletesSkippedModified: t2.absenceDeletesSkippedModified } : {}, deleteConflicts: t2.deleteConflicts, scanDeletesJournaled: t2.scanDeletesJournaled, rmdirPushed: t2.rmdirPushed ?? 0, removedDirsApplied: t2.removedDirsApplied ?? 0, recoveryDisarms: t2.recoveryDisarms, identityRecoveryWipeFailed: t2.identityRecoveryWipeFailed, legacyRowsRestored: t2.legacyRowsRestored, listingComplete: t2.listingComplete, ...void 0 !== r2 ? { sinceLastSuccessMs: r2 } : {}, errorCount: t2.errors.length, failed: t2.errors.length > 0, walkMs: t2.walkMs ?? 0, hashMs: t2.hashMs ?? 0, presignMs: t2.presignMs ?? 0, uploadMs: t2.uploadMs ?? 0, listMs: t2.listMs ?? 0, downloadMs: t2.downloadMs ?? 0, scope: t2.scope ?? "full", ...void 0 !== t2.pullOutcome ? { pullOutcome: t2.pullOutcome } : {}, ...void 0 !== t2.remoteVersionEvents && t2.remoteVersionEvents.length > 0 ? { remoteVersionEvents: [...t2.remoteVersionEvents] } : {}, ...void 0 !== t2.versionAudit ? { versionAudit: t2.versionAudit } : {} };
    }
    function es(e2, t2) {
      if (void 0 !== e2) try {
        e2.addBreadcrumb(t2);
      } catch {
      }
    }
    const ts = 3e5;
    class rs {
      constructor(e2 = {}) {
        if (this.diskFullLastEmittedMs = /* @__PURE__ */ new Map(), this.emitter = e2.emitter ?? {}, this.breadcrumbs = e2.breadcrumbs, this.diskFullRepeatMs = e2.diskFullRepeatMs ?? ts, this.now = e2.now ?? Date.now, !Number.isFinite(this.diskFullRepeatMs) || this.diskFullRepeatMs < 0) throw new RangeError("AggregatingAgentStoreMetricsEmitter diskFullRepeatMs must be finite and >= 0");
      }
      bindRpcService(e2) {
        this.emitter instanceof Qt && this.emitter.bindRpcService(e2);
      }
      onDiskFull(e2) {
        const t2 = this.diskFullLastEmittedMs.get(e2.agentId), r2 = this.now();
        void 0 !== t2 && r2 - t2 < this.diskFullRepeatMs || (this.emitter.onDiskFull?.(e2), this.diskFullLastEmittedMs.set(e2.agentId, r2), this.warnBreadcrumb("disk_full", { agentId: e2.agentId, op: e2.op }));
      }
      onSymlinkRefused(e2) {
        this.emitter.onSymlinkRefused?.(e2), this.warnBreadcrumb("symlink_refused", { agentId: e2.agentId, op: e2.op, relPathHash: e2.relPathHash });
      }
      onNetworkError(e2) {
        this.emitter.onNetworkError?.(e2), e2.exhausted && this.warnBreadcrumb("network_error_exhausted", { agentId: e2.agentId, op: e2.op, errorClass: e2.errorClass, attempt: e2.attempt });
      }
      onMintGateStateChanged(e2) {
        this.emitter.onMintGateStateChanged?.(e2);
      }
      onThrottled(e2) {
        this.emitter.onThrottled?.(e2), e2.exhausted && this.warnBreadcrumb("throttled_exhausted", { agentId: e2.agentId, op: e2.op, errorClass: e2.errorClass, attempt: e2.attempt, retryAfterMs: e2.retryAfterMs, scope: e2.scope });
      }
      onRoundCompleted(e2) {
        this.emitter.onRoundCompleted?.(e2);
      }
      recordMultipartAbandoned(e2) {
        this.emitter.recordMultipartAbandoned?.(e2);
      }
      onSyncRound(e2) {
        this.emitter.onSyncRound?.(e2);
      }
      onSessionState(e2) {
        this.emitter.onSessionState?.(e2);
      }
      syncRoundSkipped(e2) {
        this.emitter.syncRoundSkipped?.(e2);
      }
      onRoundLifecycle(e2) {
        this.emitter.onRoundLifecycle?.(e2), "rearmed" !== e2.kind ? "timeout" === e2.kind && this.warnBreadcrumb("round_timeout", { agentId: e2.agentId, durationMs: e2.durationMs, lateMs: e2.lateMs, late: e2.late, ...void 0 !== e2.reason ? { reason: e2.reason } : {} }) : this.emit("info", "round_rearmed", { agentId: e2.agentId, durationMs: e2.durationMs, lateMs: e2.lateMs });
      }
      onBlobTransferTiming(e2) {
        this.emitter.onBlobTransferTiming?.(e2);
      }
      onLockEvent(e2) {
        this.emitter.onLockEvent?.(e2), "passive_took_over" !== e2.kind ? "lock_contended" !== e2.kind ? "lock_relinquished" !== e2.kind ? this.warnBreadcrumb(e2.kind, { agentId: e2.agentId }) : this.emit("exclusive_claim" === e2.cause ? "info" : "warning", e2.kind, { agentId: e2.agentId, cause: e2.cause }) : this.emit("info", e2.kind, { agentId: e2.agentId, holderKind: e2.holderKind, samePid: e2.samePid }) : this.emit("info", e2.kind, { agentId: e2.agentId });
      }
      onResumeDetected(e2) {
        this.emitter.onResumeDetected?.(e2), this.warnBreadcrumb("resume_detected", { agentId: e2.agentId, gapMs: e2.gapMs });
      }
      onDirtyPassiveStalled(e2) {
        this.emitter.onDirtyPassiveStalled?.(e2), this.warnBreadcrumb("dirty_passive_stalled", { agentId: e2.agentId, stalledMs: e2.stalledMs });
      }
      onSchedulerTick(e2) {
        this.emitter.onSchedulerTick?.(e2);
      }
      onVersionProbeBatch(e2) {
        this.emitter.onVersionProbeBatch?.(e2);
      }
      onError(e2) {
        this.emitter.onError?.(e2), this.errorBreadcrumb("error", { agentId: e2.agentId, op: e2.op, errorClass: e2.errorClass });
      }
      recordIndexLookupClosed(e2) {
        this.emitter.recordIndexLookupClosed?.(e2);
      }
      recordMountRequested(e2) {
        this.emitter.recordMountRequested?.(e2);
      }
      recordMountOutcome(e2) {
        this.emitter.recordMountOutcome?.(e2);
      }
      recordWriteBarrier(e2) {
        this.emitter.recordWriteBarrier?.(e2);
      }
      recordCitationStarted(e2) {
        this.emitter.recordCitationStarted?.(e2);
      }
      recordCitationResolution(e2) {
        this.emitter.recordCitationResolution?.(e2);
      }
      recordCitationStaleness(e2) {
        this.emitter.recordCitationStaleness?.(e2);
      }
      recordStatFastPath(e2) {
        this.emitter.recordStatFastPath?.(e2);
      }
      recordStorePin(e2) {
        this.emitter.recordStorePin?.(e2);
      }
      recordStoreEviction(e2) {
        this.emitter.recordStoreEviction?.(e2);
      }
      onConflict(e2) {
        this.emitter.onConflict?.(e2), this.emit("info", "conflict_file", { agentId: e2.agentId, storeKind: e2.storeKind, relPathHash: e2.relPathHash, conflictRelPathHash: e2.conflictRelPathHash });
      }
      tokenMinted(e2) {
        this.emitter.tokenMinted?.(e2);
      }
      tokenRefreshUnauthorized(e2) {
        this.emitter.tokenRefreshUnauthorized?.(e2), this.warnBreadcrumb("token_refresh_unauthorized", { agentId: e2.agentId, op: e2.op });
      }
      tokenMintNegativeCached(e2) {
        this.emitter.tokenMintNegativeCached?.(e2);
      }
      tokenMintFailureCached(e2) {
        this.emitter.tokenMintFailureCached?.(e2);
      }
      tokenMintRetried(e2) {
        this.emitter.tokenMintRetried?.(e2);
      }
      tokenMintRetryDenied(e2) {
        this.emitter.tokenMintRetryDenied?.(e2);
      }
      tokenRefreshFailedKeptExisting(e2) {
        this.emitter.tokenRefreshFailedKeptExisting?.(e2);
      }
      warnBreadcrumb(e2, t2) {
        this.emit("warning", e2, t2);
      }
      errorBreadcrumb(e2, t2) {
        this.emit("error", e2, t2);
      }
      emit(e2, t2, r2) {
        es(this.breadcrumbs, { category: "agent_store_sync", level: e2, message: t2, data: r2 });
      }
    }
    class ns {
      constructor(e2) {
        this.options = e2, this.inFlight = /* @__PURE__ */ new Map(), this.quiesceTimers = /* @__PURE__ */ new Map(), this.windowHidden = false, this.disposed = false;
      }
      noteTurn(e2, t2) {
        if (this.disposed) return;
        const r2 = e2.trim();
        if (0 === r2.length) return;
        const n2 = this.options.idleQuiesceMs() > 0;
        if ("start" === t2) return this.clearQuiesceTimer(r2), this.inFlight.set(r2, (this.inFlight.get(r2) ?? 0) + 1), void (n2 && this.options.setActivity(r2, this.windowHidden ? "idle" : "active"));
        const s2 = (this.inFlight.get(r2) ?? 0) - 1;
        if (s2 > 0) return void this.inFlight.set(r2, s2);
        if (s2 < 0) return;
        if (this.inFlight.delete(r2), !n2) return;
        if (this.windowHidden) return void this.options.setActivity(r2, "idle");
        this.clearQuiesceTimer(r2);
        const o2 = this.options.idleQuiesceMs();
        let i2;
        i2 = this.options.schedule(() => {
          this.quiesceTimers.get(r2) === i2 && this.quiesceTimers.delete(r2), this.inFlight.has(r2) || this.disposed || this.options.setActivity(r2, "idle");
        }, o2), this.quiesceTimers.set(r2, i2);
      }
      noteWindowFocused(e2) {
        if (this.disposed) return;
        const t2 = this.options.idleQuiesceMs() > 0;
        if (!e2) {
          if (this.windowHidden = true, !t2) return;
          return this.clearAllQuiesceTimers(), void this.options.quiesceSelfSessions();
        }
        const r2 = this.windowHidden;
        if (this.windowHidden = false, t2 && r2) for (const e3 of this.inFlight.keys()) this.options.setActivity(e3, "active");
      }
      dispose() {
        this.disposed = true, this.clearAllQuiesceTimers(), this.inFlight.clear();
      }
      clearQuiesceTimer(e2) {
        this.quiesceTimers.get(e2)?.dispose(), this.quiesceTimers.delete(e2);
      }
      clearAllQuiesceTimers() {
        for (const e2 of this.quiesceTimers.values()) e2.dispose();
        this.quiesceTimers.clear();
      }
    }
    const ss = /* @__PURE__ */ Symbol.for("cursor.agentStoreConversationTurnListeners");
    function os() {
      const e2 = globalThis;
      let t2 = e2[ss];
      return void 0 === t2 && (t2 = /* @__PURE__ */ new Set(), e2[ss] = t2), t2;
    }
    function is(e2) {
      const t2 = os();
      return t2.add(e2), () => {
        t2.delete(e2);
      };
    }
    function as(e2, t2) {
      for (const r2 of os()) try {
        r2(e2, t2);
      } catch {
      }
    }
    function cs(e2) {
      const t2 = new Qt({ sink: e2.sink, surface: e2.surface, extraTags: e2.extraTags, service: e2.service });
      return { emitter: new rs({ emitter: t2, breadcrumbs: e2.breadcrumbs, diskFullRepeatMs: e2.diskFullRepeatMs }), pathHashSalt: e2.pathHashSalt };
    }
    class ls {
      constructor(e2 = {}) {
        this.state = "closed", this.untilMs = 0, this.probeInFlight = false, this.failures = [], this.enabled = true, this.generation = 0;
        const t2 = e2.openThreshold ?? 5;
        if (!Number.isInteger(t2) || t2 < 1) throw new RangeError(`AgentStoreMintGate openThreshold must be an integer >= 1, got ${t2}`);
        this.openThreshold = t2, this.windowMs = n({ value: e2.windowMs ?? 3e4, name: "windowMs", context: "AgentStoreMintGate" });
        const r2 = n({ value: e2.openBaseMs ?? 5e3, name: "openBaseMs", context: "AgentStoreMintGate" }), s2 = n({ value: e2.openMaxMs ?? 12e4, name: "openMaxMs", context: "AgentStoreMintGate" });
        if (r2 > s2) throw new RangeError(`AgentStoreMintGate openBaseMs (${r2}) must be <= openMaxMs (${s2})`);
        this.openBaseMs = r2, this.openMaxMs = s2, this.now = e2.now ?? Date.now, this.random = e2.random ?? Math.random, this.onStateChanged = e2.onStateChanged, this.resolveEnabled = e2.enabled, this.openBackoff = this.createOpenBackoff(), this.syncEnabledFromResolver();
      }
      get remainingMs() {
        return this.refreshState(), this.enabled && "closed" !== this.state ? Math.max(0, this.untilMs - this.now()) : 0;
      }
      get currentState() {
        return this.refreshState(), this.state;
      }
      setTimings(e2) {
        if (this.syncEnabledFromResolver(), void 0 !== e2.openThreshold) {
          if (!Number.isInteger(e2.openThreshold) || e2.openThreshold < 1) throw new RangeError(`AgentStoreMintGate openThreshold must be an integer >= 1, got ${e2.openThreshold}`);
          this.openThreshold = e2.openThreshold;
        }
        void 0 !== e2.windowMs && (this.windowMs = n({ value: e2.windowMs, name: "windowMs", context: "AgentStoreMintGate" }));
        const t2 = e2.openBaseMs ?? this.openBaseMs, r2 = e2.openMaxMs ?? this.openMaxMs, s2 = n({ value: t2, name: "openBaseMs", context: "AgentStoreMintGate" }), o2 = n({ value: r2, name: "openMaxMs", context: "AgentStoreMintGate" });
        if (s2 > o2) throw new RangeError(`AgentStoreMintGate openBaseMs (${s2}) must be <= openMaxMs (${o2})`);
        if (s2 !== this.openBaseMs || o2 !== this.openMaxMs) {
          const e3 = this.openBackoff.failures;
          this.openBaseMs = s2, this.openMaxMs = o2, this.openBackoff = this.createOpenBackoff(), this.openBackoff.restoreFailures(e3);
        }
        this.enabled && "closed" === this.state && (this.prune(), this.failures.length >= this.openThreshold && this.open("threshold", this.lastError?.retryAfterMs));
      }
      setEnabled(e2) {
        this.enabled = e2, e2 || (this.failures = [], this.lastError = void 0, this.generation += 1, this.probeInFlight = false, this.untilMs = 0, this.openBackoff.recordSuccess(), "closed" !== this.state && this.transition("closed", "probe_succeeded"));
      }
      createOpenBackoff() {
        return new s({ baseDelayMs: this.openBaseMs, maxDelayMs: this.openMaxMs, jitter: 0.2, random: this.random });
      }
      peek() {
        return this.refreshState(), this.enabled ? "open" === this.state || "half_open" === this.state && this.probeInFlight || "closed" === this.state && (this.prune(), this.failures.length >= this.openThreshold) ? { allowed: false, error: this.blockedError() } : { allowed: true, probe: "half_open" === this.state, generation: this.generation } : { allowed: true, probe: false, generation: this.generation };
      }
      begin() {
        const e2 = this.peek();
        return e2.allowed && this.enabled ? (e2.probe && (this.probeInFlight = true), e2) : e2;
      }
      end(e2, t2) {
        if (this.syncEnabledFromResolver(), !this.enabled) return;
        if (void 0 !== t2 && t2.generation !== this.generation) return;
        if (e2.ok) return this.probeInFlight = false, void this.close("probe_succeeded");
        if (!(false !== e2.transient)) return this.probeInFlight = false, void ("half_open" === this.state && this.close("probe_succeeded"));
        if (this.lastError = e2.error, "open" !== this.state) {
          if ("half_open" === this.state) {
            if (void 0 !== t2 && !t2.probe) return;
            return this.probeInFlight = false, void this.open("probe_failed", e2.error.retryAfterMs);
          }
          this.failures.push(this.now()), this.prune(), this.failures.length >= this.openThreshold && this.open("threshold", e2.error.retryAfterMs);
        } else true === t2?.probe && (this.probeInFlight = false);
      }
      syncEnabledFromResolver() {
        if (void 0 === this.resolveEnabled) return;
        let e2;
        try {
          e2 = this.resolveEnabled();
        } catch {
          return;
        }
        e2 !== this.enabled && this.setEnabled(e2);
      }
      refreshState() {
        this.syncEnabledFromResolver(), "open" === this.state && this.now() >= this.untilMs && this.transition("half_open", "retry_after");
      }
      prune() {
        const e2 = this.now() - this.windowMs;
        this.failures.length > 0 && this.failures[0] <= e2 && (this.failures = this.failures.filter((t2) => t2 > e2));
      }
      open(e2, t2) {
        const r2 = this.openBackoff.recordFailure(), n2 = void 0 !== t2 ? Math.max(r2, t2) : r2;
        this.untilMs = this.now() + Math.max(1, Math.min(this.openMaxMs, n2)), this.generation += 1, this.transition("open", e2);
      }
      close(e2) {
        this.failures = [], this.openBackoff.recordSuccess(), this.untilMs = 0, this.lastError = void 0, this.generation += 1, this.transition("closed", e2);
      }
      transition(e2, t2) {
        const r2 = this.state;
        if (r2 !== e2) {
          this.state = e2;
          try {
            this.onStateChanged?.({ from: r2, to: e2, reason: t2, untilMs: this.untilMs });
          } catch {
          }
        }
      }
      blockedError() {
        const e2 = this.remainingMs, t2 = e2 > 0 ? e2 : void 0;
        return void 0 !== this.lastError ? new ye({ cause: this.lastError.cause, attempts: this.lastError.attempts, retryAfterMs: t2 }) : new ye({ cause: new Error("Agent store mint gate is open"), attempts: 0, retryAfterMs: t2 });
      }
    }
    class us {
      constructor(e2 = {}) {
        this.attempts = [], this.retries = [], this.windowMs = n({ value: e2.windowMs ?? 6e4, name: "windowMs", context: "AgentStoreMintRetryBudget" });
        const t2 = e2.ratio ?? 0.1;
        if (!Number.isFinite(t2) || t2 < 0 || t2 > 1) throw new RangeError(`AgentStoreMintRetryBudget ratio must be in [0, 1], got ${t2}`);
        this.ratio = t2;
        const r2 = e2.floor ?? 3;
        if (!Number.isInteger(r2) || r2 < 0) throw new RangeError(`AgentStoreMintRetryBudget floor must be a non-negative integer, got ${r2}`);
        this.floor = r2;
        const s2 = e2.minAttempts ?? 1;
        if (!Number.isInteger(s2) || s2 < 1) throw new RangeError(`AgentStoreMintRetryBudget minAttempts must be an integer >= 1, got ${s2}`);
        this.minAttempts = s2, this.now = e2.now ?? Date.now;
      }
      setTimings(e2) {
        if (void 0 !== e2.ratio) {
          if (!Number.isFinite(e2.ratio) || e2.ratio < 0 || e2.ratio > 1) throw new RangeError(`AgentStoreMintRetryBudget ratio must be in [0, 1], got ${e2.ratio}`);
          this.ratio = e2.ratio;
        }
        if (void 0 !== e2.floor) {
          if (!Number.isInteger(e2.floor) || e2.floor < 0) throw new RangeError(`AgentStoreMintRetryBudget floor must be a non-negative integer, got ${e2.floor}`);
          this.floor = e2.floor;
        }
      }
      recordAttempt() {
        this.prune(), this.attempts.push(this.now());
      }
      tryConsumeRetry() {
        if (this.prune(), this.retries.length < this.floor) return this.retries.push(this.now()), true;
        const e2 = Math.max(this.attempts.length, this.minAttempts);
        return this.retries.length / e2 < this.ratio && (this.retries.push(this.now()), true);
      }
      prune() {
        const e2 = this.now() - this.windowMs;
        this.attempts.length > 0 && this.attempts[0] <= e2 && (this.attempts = this.attempts.filter((t2) => t2 > e2)), this.retries.length > 0 && this.retries[0] <= e2 && (this.retries = this.retries.filter((t2) => t2 > e2));
      }
    }
    const ds = 1, ps = /^[A-Za-z_][A-Za-z0-9_]*$/;
    function ms(e2) {
      return ps.test(e2) && !Object.hasOwn(Object.prototype, e2);
    }
    function hs(e2, t2) {
      const r2 = "peer" === e2 ? "agent_store" : "shared_store", n2 = `${r2}_${t2.slice(-8).replace(/[^A-Za-z0-9_]/g, "_").replace(/^[0-9]/, "_")}`;
      return ps.test(n2) ? n2 : r2;
    }
    function fs({ preferred: e2, usedAliases: t2, reservedAliases: r2 }) {
      if (!ms(e2)) throw new Error(`invalid agent store mount alias: ${e2}`);
      const n2 = new Set(t2);
      if (void 0 !== r2) for (const e3 of r2) n2.add(e3);
      let s2 = e2, o2 = 2;
      for (; n2.has(s2); ) s2 = `${e2}_${o2}`, o2 += 1;
      return t2.add(s2), s2;
    }
    function gs(e2) {
      return "principal" === e2.mountKind || "share" === e2.mountKind;
    }
    function ys(e2) {
      if (!(0, Yn.v8)(e2)) throw new Error(`invalid self agent store source id: ${e2}`);
      return (0, Wt._b)(e2), { mountKey: e2, mountKind: "self", remoteTarget: { kind: "direct", agentId: e2 }, syncMode: "readWrite" };
    }
    function ws(e2, t2) {
      if (!(0, Yn.v8)(e2) && !(0, Yn.Y6)(e2)) throw new Error(`invalid peer agent store id: ${e2}`);
      if ((0, Wt._b)(e2), void 0 !== t2?.alias && !ms(t2.alias)) throw new Error(`invalid agent store mount alias: ${t2.alias}`);
      return { mountKey: e2, mountKind: "peer", remoteTarget: { kind: "direct", agentId: e2 }, syncMode: "readWrite", ...void 0 !== t2?.alias ? { alias: t2.alias } : {}, ...true === t2?.isProjectStore ? { isProjectStore: true } : {} };
    }
    function vs(e2, t2) {
      if (!(0, Yn.A8)(e2)) throw new Error(`invalid agent store share mount key: ${e2}`);
      if ((0, Wt.qh)(e2), void 0 !== t2?.alias && !ms(t2.alias)) throw new Error(`invalid agent store mount alias: ${t2.alias}`);
      return { mountKey: e2, mountKind: "share", remoteTarget: { kind: "share", shareId: e2 }, syncMode: "readOnly", ...void 0 !== t2?.alias ? { alias: t2.alias } : {} };
    }
    function _s(e2, t2) {
      if ("user" !== t2.alias && "team" !== t2.alias && "automation" !== t2.alias) throw new Error(`invalid principal mount alias: ${t2.alias}`);
      if ("user" === t2.alias && void 0 === (0, Yn.Z6)(e2) || "team" === t2.alias && void 0 === (0, Yn.ZJ)(e2) || "automation" === t2.alias && !(0, Yn.Ae)(e2)) throw new Error(`principal source id does not match alias ${t2.alias}: ${e2}`);
      if ("automation" !== t2.alias && !(0, Yn.XW)(e2)) throw new Error(`invalid principal agent store source id: ${e2}`);
      if (void 0 !== t2.syncMode && "readOnly" !== t2.syncMode && "readWrite" !== t2.syncMode) throw new Error(`invalid principal sync mode: ${t2.syncMode}`);
      return (0, Wt.qh)(e2), { mountKey: e2, mountKind: "principal", remoteTarget: { kind: "direct", agentId: e2, sourceKind: t2.alias }, syncMode: t2.syncMode ?? "readWrite", alias: t2.alias };
    }
    function bs({ existing: e2, incoming: t2 }) {
      if (e2.mountKey !== t2.mountKey) return { result: "unchanged", canonical: e2 };
      if ("self" !== t2.mountKind || "self" === e2.mountKind) return "peer" === e2.mountKind && "peer" === t2.mountKind && true === t2.isProjectStore && true !== e2.isProjectStore ? { result: "unchanged", canonical: { ...e2, isProjectStore: true } } : { result: "unchanged", canonical: e2 };
      if ("share" === e2.mountKind) return { result: "refused", canonical: e2 };
      return { result: "promoted", canonical: { mountKey: e2.mountKey, mountKind: "self", remoteTarget: t2.remoteTarget, syncMode: "readWrite" } };
    }
    const Ss = 1;
    function ks(e2) {
      return e2 ? "readOnly" : "readWrite";
    }
    function xs(e2) {
      return "share" === e2.remoteTarget.kind ? e2.remoteTarget.shareId : e2.remoteTarget.agentId;
    }
    function Es(e2) {
      return (function(e3) {
        switch (e3.mountKind) {
          case "self":
            if ("readWrite" !== e3.syncMode || "direct" !== e3.remoteTarget.kind || e3.remoteTarget.agentId !== e3.mountKey) throw new Error("invalid self Agent Store mount spec");
            return void ys(e3.mountKey);
          case "peer":
            if ("readWrite" !== e3.syncMode || "direct" !== e3.remoteTarget.kind || e3.remoteTarget.agentId !== e3.mountKey) throw new Error("invalid peer Agent Store mount spec");
            return void ws(e3.mountKey, { ...void 0 !== e3.alias ? { alias: e3.alias } : {}, ...true === e3.isProjectStore ? { isProjectStore: true } : {} });
          case "share":
            if ("readOnly" !== e3.syncMode || "share" !== e3.remoteTarget.kind || e3.remoteTarget.shareId !== e3.mountKey) throw new Error("invalid share Agent Store mount spec");
            return void vs(e3.mountKey, { ...void 0 !== e3.alias ? { alias: e3.alias } : {} });
          case "principal":
            if ("direct" !== e3.remoteTarget.kind || e3.remoteTarget.agentId !== e3.mountKey) throw new Error("invalid principal Agent Store mount spec");
            _s(e3.mountKey, { alias: e3.alias, syncMode: e3.syncMode });
        }
      })(e2), JSON.stringify((function(e3) {
        const t2 = e3.mountKey;
        switch (e3.mountKind) {
          case "self":
            return { version: Ss, kind: "self", mountKey: t2, readOnly: false };
          case "peer":
            return { version: Ss, kind: "peer", mountKey: t2, readOnly: false, remoteId: xs(e3), ...void 0 !== e3.alias ? { alias: e3.alias } : {} };
          case "share":
            return { version: Ss, kind: "share", mountKey: t2, readOnly: true, remoteId: xs(e3), ...void 0 !== e3.alias ? { alias: e3.alias } : {} };
          case "principal":
            return { version: Ss, kind: "principal", mountKey: t2, readOnly: (r2 = e3.syncMode, "readOnly" === r2), remoteId: xs(e3), alias: e3.alias };
        }
        var r2;
      })(e2), void 0, 2);
    }
    function Is(e2) {
      let t2;
      try {
        t2 = JSON.parse(e2);
      } catch {
        return;
      }
      if ("object" != typeof (r2 = t2) || null === r2 || Array.isArray(r2)) return;
      var r2;
      if (t2.version !== Ss) return;
      const n2 = t2.kind, s2 = t2.mountKey, o2 = t2.readOnly;
      if ("string" != typeof n2 || "string" != typeof s2 || "boolean" != typeof o2) return;
      if (void 0 !== t2.remoteId && "string" != typeof t2.remoteId) return;
      if (void 0 !== t2.alias && "string" != typeof t2.alias) return;
      const i2 = t2.remoteId, a2 = { mountKey: s2, remoteId: i2, readOnly: o2, alias: t2.alias };
      if (void 0 !== i2 || "self" === n2) switch (n2) {
        case "self":
          return (function({ mountKey: e3, remoteId: t3, readOnly: r3, alias: n3 }) {
            if (void 0 === t3 && !r3 && void 0 === n3) try {
              return ys(e3);
            } catch {
              return;
            }
          })(a2);
        case "peer":
          return (function({ mountKey: e3, remoteId: t3, readOnly: r3, alias: n3 }) {
            if (!r3 && void 0 !== t3 && t3 === e3) try {
              return ws(e3, { ...void 0 !== n3 ? { alias: n3 } : {} });
            } catch {
              return;
            }
          })(a2);
        case "share":
          return (function({ mountKey: e3, remoteId: t3, readOnly: r3, alias: n3 }) {
            if (r3 && void 0 !== t3 && t3 === e3) try {
              return vs(e3, { ...void 0 !== n3 ? { alias: n3 } : {} });
            } catch {
              return;
            }
          })(a2);
        case "principal":
          return (function({ mountKey: e3, remoteId: t3, readOnly: r3, alias: n3 }) {
            if (void 0 !== t3 && t3 === e3 && ("user" === n3 || "team" === n3 || "automation" === n3)) try {
              return _s(e3, { alias: n3, syncMode: ks(r3) });
            } catch {
              return;
            }
          })(a2);
        default:
          return;
      }
    }
    const Ts = { symlink_refused: "store-path-symlink", insecure_permissions: "store-path-insecure-permissions", foreign_uid: "store-path-foreign-uid", missing_uid: "store-path-missing-uid", not_directory: "store-path-not-directory", acl_refused: "store-path-acl-refused", invalid_store_base: "store-path-invalid-base", invalid_agent_id: "store-path-invalid-agent-id", missing_homedir: "store-path-missing-homedir", unsupported_platform: "store-path-unsupported-platform" };
    function Cs(e2, t2, r2) {
      return void 0 === r2 ? { outcome: e2, reason: t2 } : { outcome: e2, reason: t2, syncState: r2 };
    }
    function Ps(e2) {
      if (e2 instanceof ye) return Ps(e2.cause);
      if (Ie(e2)) return "mint-sync-disabled";
      if (e2 instanceof Mn && "unsupported_schema_version" === e2.code) return "index-schema-unsupported";
      if (e2 instanceof mr) switch (e2.code) {
        case "foreign_identity_lock":
          return "lock-foreign-identity";
        case "invalid_lockfile":
          return "lock-unreadable";
        case "missing_identity":
          return "lock-identity-missing";
      }
      if (e2 instanceof Wt.y$) return Ts[e2.code];
      if (e2 instanceof f) return "unsafe-relative-path";
      if (void 0 !== qe(e2)) return "quota-exceeded";
      if (void 0 !== Ge(e2)) return "backend-throttled";
      if (e2 instanceof i) return "mint-unauthorized";
      const t2 = fe(e2);
      return t2 === se.C.Unauthenticated || t2 === se.C.PermissionDenied ? "mint-unauthorized" : t2 === se.C.NotFound ? "mint-not-found" : "ENOSPC" === (function(e3) {
        if ("object" != typeof e3 || null === e3 || !("code" in e3)) return;
        const t3 = e3.code;
        return "string" == typeof t3 ? t3 : void 0;
      })(e2) ? "disk-full" : "other";
    }
    class As {
      constructor(e2) {
        if (this.inner = e2.inner, this.target = e2.target, "direct" === this.target.kind) {
          const e3 = this.inner.completeMultipartWrites;
          void 0 !== e3 && (this.completeMultipartWrites = (t3) => e3.call(this.inner, this.rewriteWriteMutation(t3)));
          const t2 = this.inner.abortMultipartWrites;
          void 0 !== t2 && (this.abortMultipartWrites = (e4) => t2.call(this.inner, this.rewriteWriteMutation(e4)));
          const r2 = this.inner.rmdir;
          void 0 !== r2 && (this.rmdir = (e4) => r2.call(this.inner, this.rewriteWriteMutation(e4)));
        }
      }
      getResolvedStoreId(e2) {
        return "share" === this.target.kind ? this.inner.getResolvedStoreId?.({ agentId: this.target.shareId, shareId: this.target.shareId }) : this.inner.getResolvedStoreId?.({ agentId: this.target.agentId });
      }
      async listFiles(e2) {
        return await this.inner.listFiles(this.rewriteRead(e2));
      }
      async presignReads(e2) {
        return await this.inner.presignReads(this.rewriteRead(e2));
      }
      async presignWrites(e2) {
        if ("share" === this.target.kind) throw new Error("MountScopedAgentStoreClient: presignWrites is not supported on share mounts.");
        return await this.inner.presignWrites(this.rewriteWriteMutation(e2));
      }
      async deleteFiles(e2) {
        if ("share" === this.target.kind) throw new Error("MountScopedAgentStoreClient: deleteFiles is not supported on share mounts.");
        const t2 = this.inner.deleteFiles?.bind(this.inner);
        if (void 0 === t2) throw new Error("MountScopedAgentStoreClient: inner client does not support deleteFiles");
        return await t2(this.rewriteWriteMutation(e2));
      }
      invalidateListCache(e2) {
        "share" !== this.target.kind ? this.inner.invalidateListCache?.({ ...e2, agentId: this.target.agentId }) : this.inner.invalidateListCache?.({ agentId: this.target.shareId, shareId: this.target.shareId });
      }
      versionProbeTarget(e2) {
        return "share" === this.target.kind ? this.inner.versionProbeTarget?.({ agentId: this.target.shareId, shareId: this.target.shareId }) : this.inner.versionProbeTarget?.({ agentId: this.target.agentId });
      }
      rewriteRead(e2) {
        if ("share" === this.target.kind) return { ...e2, agentId: this.target.shareId, shareId: this.target.shareId };
        return { ...e2, agentId: this.target.agentId, ...void 0 !== this.target.sourceKind ? { mintSourceKind: this.target.sourceKind } : {} };
      }
      rewriteWriteMutation(e2) {
        if ("share" === this.target.kind) throw new Error("MountScopedAgentStoreClient: write mutations are not supported on share mounts.");
        return { ...e2, agentId: this.target.agentId, ...void 0 !== this.target.sourceKind ? { mintSourceKind: this.target.sourceKind } : {} };
      }
    }
    class Rs extends Error {
      constructor(e2) {
        super(e2.message), this.name = "PresignedUrlRejectedError", this.code = e2.code, this.url = e2.url;
      }
    }
    function Ms(e2) {
      if ($s(e2), "https:" !== e2.protocol) throw new Rs({ code: "scheme_not_allowed", message: `Refused presigned URL with non-https scheme: ${e2.protocol}`, url: js(e2) });
      const t2 = Ws(e2.hostname);
      if ((function(e3) {
        if (0 === e3.length) return true;
        if (zs(e3)) return true;
        if (Hs(e3)) return Ks(e3);
        if ((function(e4) {
          return e4.includes(":");
        })(e3)) return (function(e4) {
          const t3 = e4.toLowerCase();
          if ("::" === t3 || "::1" === t3) return true;
          const r2 = (function(e5) {
            const t4 = e5.match(/^(?:0:0:0:0:0|::):?ffff:(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/i);
            if (t4) return t4[1];
            if (e5.startsWith("::ffff:")) {
              const t5 = e5.slice(7);
              if (Hs(t5)) return t5;
              const r3 = t5.match(/^([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i);
              if (r3) {
                const e6 = Number.parseInt(r3[1], 16), t6 = Number.parseInt(r3[2], 16);
                if (Number.isFinite(e6) && Number.isFinite(t6) && e6 >= 0 && e6 <= 65535 && t6 >= 0 && t6 <= 65535) return `${e6 >> 8 & 255}.${255 & e6}.${t6 >> 8 & 255}.${255 & t6}`;
              }
            }
            return;
          })(t3);
          if (void 0 !== r2) return Ks(r2);
          if (t3.startsWith("fc") || t3.startsWith("fd")) return true;
          if (t3.startsWith("fe8") || t3.startsWith("fe9")) return true;
          if (t3.startsWith("fea") || t3.startsWith("feb")) return true;
          if (t3.startsWith("ff")) return true;
          return false;
        })(e3);
        return false;
      })(t2)) throw new Rs({ code: "private_host_not_allowed", message: `Refused https presigned URL with private/internal host: ${t2}`, url: js(e2) });
      if (!Js(t2)) throw new Rs({ code: "host_not_allowed", message: `Refused presigned URL whose host is not an AWS S3 endpoint: ${t2}`, url: js(e2) });
    }
    function Js(e2) {
      const t2 = e2.toLowerCase();
      if ("amazonaws.com" !== t2 && !t2.endsWith(".amazonaws.com")) return false;
      return t2.split(".").some((e3) => Os.has(e3));
    }
    const Os = /* @__PURE__ */ new Set(["s3", "s3-accelerate", "s3-fips"]);
    function Bs(e2) {
      const t2 = new Set(e2.map((e3) => e3.toLowerCase()));
      return (e3) => {
        if (Ms(e3), !t2.has(e3.hostname.toLowerCase())) throw new Rs({ code: "host_not_allowed", message: `Refused presigned URL whose host is not in the allowlist: ${e3.hostname}`, url: js(e3) });
      };
    }
    const Ds = ["agent-stores.s3.us-east-1.amazonaws.com", "agent-stores.s3.amazonaws.com"], qs = ["agent-stores-928182716709-us-west-2-an.s3.us-west-2.amazonaws.com", "agent-stores-928182716709-us-west-2-an.s3.amazonaws.com"];
    function Ns() {
      return Bs(Ds);
    }
    function Fs(e2) {
      const t2 = e2.trim();
      return "" !== t2 && (t2.includes("localhost") || t2.includes("lclhst.build"));
    }
    function Us(e2) {
      return Fs(e2) ? (function() {
        const e3 = Ns();
        return (t2) => {
          $s(t2);
          const r2 = Ws(t2.hostname);
          "http:" === t2.protocol && zs(r2) || e3(t2);
        };
      })() : (function(e3) {
        try {
          const t2 = new URL(e3).hostname.toLowerCase();
          return "playground.cursor.sh" === t2 || t2.endsWith(".playground.cursor.sh");
        } catch {
          return false;
        }
      })(e2) ? Bs(qs) : Ns();
    }
    function Ls(e2) {
      $s(e2);
      const t2 = Ws(e2.hostname);
      "http:" === e2.protocol && zs(t2) || Ms(e2);
    }
    function $s(e2) {
      if ("" !== e2.username || "" !== e2.password) throw new Rs({ code: "userinfo_not_allowed", message: "Refused presigned URL with embedded userinfo", url: js(e2) });
    }
    function js(e2) {
      try {
        const t2 = "string" == typeof e2 ? new URL(e2) : e2;
        return `${t2.protocol}//${t2.host}${t2.pathname}`;
      } catch {
        return "<unparseable-presigned-url>";
      }
    }
    function Gs(e2) {
      let t2;
      try {
        t2 = new URL(e2.rawUrl);
      } catch {
        throw new Error(`Refusing unparseable presigned URL for ${e2.relPath}`);
      }
      try {
        e2.validatePresignedUrl(t2);
      } catch (t3) {
        throw new Error(`Refusing presigned URL for ${e2.relPath}: ${t3 instanceof Error ? t3.message : String(t3)}`, { cause: t3 instanceof Error ? t3 : void 0 });
      }
    }
    function zs(e2) {
      const t2 = e2.toLowerCase();
      return "localhost" === t2 || "ip6-localhost" === t2 || "127.0.0.1" === t2 || "::1" === t2 || "0:0:0:0:0:0:0:1" === t2;
    }
    function Ws(e2) {
      return e2.startsWith("[") && e2.endsWith("]") ? e2.slice(1, -1) : e2;
    }
    function Hs(e2) {
      const t2 = e2.split(".");
      return 4 === t2.length && t2.every((e3) => {
        if (0 === e3.length || e3.length > 3) return false;
        if (!/^\d+$/.test(e3)) return false;
        const t3 = Number(e3);
        return Number.isInteger(t3) && t3 >= 0 && t3 <= 255;
      });
    }
    function Ks(e2) {
      const [t2, r2] = e2.split(".").map(Number);
      return void 0 === t2 || void 0 === r2 || (0 === t2 || (10 === t2 || (127 === t2 || (169 === t2 && 254 === r2 || (172 === t2 && r2 >= 16 && r2 <= 31 || (192 === t2 && 168 === r2 || (100 === t2 && r2 >= 64 && r2 <= 127 || (t2 >= 224 && t2 <= 239 || t2 >= 240))))))));
    }
    async function Vs(e2) {
      const t2 = e2.runPresign ?? (async (e3) => e3()), r2 = e2.runS3 ?? (async (e3) => e3()), [n2] = await t2(() => e2.client.presignReads({ agentId: e2.agentId, relPaths: [e2.relPath], signal: e2.signal }));
      if (void 0 === n2) throw new Error(`agent-store baseline probe returned no read for ${e2.relPath}`);
      let s2, o2;
      try {
        s2 = v(e2.relPath), o2 = v(n2.relPath);
      } catch (t3) {
        throw new Error(`agent-store baseline probe relPath mismatch for ${e2.relPath}: ${t3 instanceof Error ? t3.message : String(t3)}`);
      }
      if (o2 !== s2) throw new Error(`agent-store baseline probe relPath mismatch for ${e2.relPath} (got ${n2.relPath})`);
      Gs({ rawUrl: n2.url, relPath: e2.relPath, validatePresignedUrl: e2.validatePresignedUrl });
      const i2 = async (t3) => e2.fetchImpl(n2.url, { redirect: "error", ...void 0 !== e2.signal ? { signal: e2.signal } : {}, ...t3 ? { headers: { Range: "bytes=0-0" } } : {} });
      let a2 = await r2(() => i2(true));
      416 === a2.status && (await a2.body?.cancel(), a2 = await r2(() => i2(false)));
      try {
        if (404 === a2.status) return { kind: "absent" };
        if (200 !== a2.status && 206 !== a2.status) throw new Error(`agent-store baseline probe failed for ${e2.relPath}: ${a2.status}`);
        const t3 = st(a2.headers.get("etag") ?? void 0);
        if (0 === t3.length) throw new Error(`agent-store baseline probe for ${e2.relPath} returned no usable etag`);
        return { kind: "exists", etag: t3 };
      } finally {
        await a2.body?.cancel();
      }
    }
    var Ys = r(77598);
    const Qs = "path-sync-requests", Xs = 6e4, Zs = 250, eo = 50, to = 384, ro = 1;
    function no(e2) {
      return h.join(h.dirname(h.resolve(e2)), Wt.kR, Qs);
    }
    function so(e2, t2) {
      return h.join(e2, `${t2}.json`);
    }
    function oo(e2) {
      const t2 = [], r2 = /* @__PURE__ */ new Set();
      for (const n2 of e2) {
        let e3;
        try {
          e3 = v(n2);
        } catch {
          return;
        }
        r2.has(e3) || (r2.add(e3), t2.push(e3));
      }
      return t2;
    }
    async function io(e2) {
      const t2 = oo(e2.relPaths);
      if (void 0 === t2 || 0 === t2.length) return;
      const r2 = no(e2.filesDir);
      try {
        (0, Wt.Ew)(r2);
      } catch {
        return;
      }
      const n2 = (0, Ys.randomBytes)(16).toString("hex"), s2 = { v: ro, id: n2, relPaths: t2, createdAtMs: (e2.now ?? Date.now)(), kind: e2.kind ?? "push" }, o2 = so(r2, n2);
      try {
        await rr(o2, `${JSON.stringify(s2)}
`, to);
      } catch {
        return;
      }
      return n2;
    }
    function ao(e2) {
      let t2;
      try {
        t2 = JSON.parse(e2);
      } catch {
        return;
      }
      if ("object" != typeof t2 || null === t2) return;
      const r2 = t2;
      if (r2.v !== ro) return;
      if ("string" != typeof r2.id || 0 === r2.id.length) return;
      if (!Array.isArray(r2.relPaths)) return;
      if ("number" != typeof r2.createdAtMs || !Number.isFinite(r2.createdAtMs)) return;
      const n2 = oo(r2.relPaths.filter((e3) => "string" == typeof e3));
      return void 0 !== n2 && 0 !== n2.length ? { v: ro, id: r2.id, relPaths: n2, createdAtMs: r2.createdAtMs, kind: "pull" === r2.kind ? "pull" : "push" } : void 0;
    }
    function co(e2) {
      const t2 = no(e2.filesDir);
      let r2;
      try {
        r2 = p.readdirSync(t2);
      } catch {
        return [];
      }
      const n2 = (e2.now ?? Date.now)(), s2 = e2.staleMs ?? Xs, o2 = [];
      for (const e3 of r2) {
        if (!e3.endsWith(".json")) continue;
        const r3 = h.join(t2, e3);
        let i2, a2;
        try {
          i2 = p.lstatSync(r3);
        } catch {
          continue;
        }
        if (i2.isSymbolicLink() || !i2.isFile()) {
          try {
            p.unlinkSync(r3);
          } catch {
          }
          continue;
        }
        try {
          a2 = p.readFileSync(r3, "utf8");
        } catch {
          continue;
        }
        const c2 = ao(a2);
        if (void 0 !== c2) if (n2 - c2.createdAtMs > s2) try {
          p.unlinkSync(r3);
        } catch {
        }
        else o2.push(c2);
        else try {
          p.unlinkSync(r3);
        } catch {
        }
      }
      return o2;
    }
    function lo(e2) {
      const t2 = so(no(e2.filesDir), e2.requestId);
      let r2, n2;
      try {
        r2 = p.lstatSync(t2);
      } catch (e3) {
        return "object" == typeof e3 && null !== e3 && "code" in e3 && "ENOENT" === e3.code ? "acked" : "pending";
      }
      if (r2.isSymbolicLink() || !r2.isFile()) {
        try {
          p.unlinkSync(t2);
        } catch {
        }
        return "stale";
      }
      try {
        n2 = p.readFileSync(t2, "utf8");
      } catch {
        return "pending";
      }
      const s2 = ao(n2);
      if (void 0 === s2) {
        try {
          p.unlinkSync(t2);
        } catch {
        }
        return "stale";
      }
      const o2 = (e2.now ?? Date.now)(), i2 = e2.staleMs ?? Xs;
      if (o2 - s2.createdAtMs > i2) {
        try {
          p.unlinkSync(t2);
        } catch {
        }
        return "stale";
      }
      return "pending";
    }
    function uo(e2) {
      return "acked" === lo(e2);
    }
    function po(e2) {
      const t2 = no(e2.filesDir);
      for (const r2 of e2.requestIds) if (/^[0-9a-f]+$/i.test(r2)) try {
        p.unlinkSync(so(t2, r2));
      } catch {
      }
    }
    async function mo(e2) {
      const t2 = e2.pollMs ?? eo, r2 = e2.delay ?? ((e3) => new Promise((t3) => setTimeout(t3, e3)));
      for (; ; ) {
        const n2 = lo(e2);
        if ("acked" === n2) return "acked";
        if ("stale" === n2) return "stale";
        if (true === e2.shouldAbort?.()) return "aborted";
        await r2(t2);
      }
    }
    const ho = Object.freeze({ onDiskFull() {
    }, onSymlinkRefused() {
    }, onNetworkError() {
    }, onThrottled() {
    }, onMintGateStateChanged() {
    } });
    function fo(e2, t2, r2) {
      if (void 0 === e2) return;
      const n2 = e2[t2];
      if ("function" != typeof n2) return;
      let s2;
      try {
        s2 = n2.call(e2, r2);
      } catch {
        return;
      }
      null != s2 && "function" == typeof s2.then && s2.then(go, go);
    }
    function go() {
    }
    const yo = 18e5, wo = 6e4, vo = 864e5, _o = Number.POSITIVE_INFINITY, bo = { tokenMinted() {
    }, tokenRefreshUnauthorized() {
    } };
    class So {
      constructor(e2, t2 = {}) {
        if (this.transport = e2, this.tokens = /* @__PURE__ */ new Map(), this.refreshAtMs = /* @__PURE__ */ new Map(), this.resolvedStoreIds = /* @__PURE__ */ new Map(), this.inFlightMints = /* @__PURE__ */ new Map(), this.mintNegativeCache = /* @__PURE__ */ new Map(), this.metrics = t2.metrics ?? bo, this.now = t2.now ?? Date.now, this.refreshBufferMs = t2.refreshBufferMs ?? 6e4, this.tokenRefreshJitterRatio = xo({ value: t2.tokenRefreshJitterRatio ?? 0.5, name: "tokenRefreshJitterRatio", context: "TokenCachingAgentStoreClient" }), this.minTokenSlackMs = n({ value: t2.minTokenSlackMs ?? 5e3, name: "minTokenSlackMs", context: "TokenCachingAgentStoreClient" }), this.mintNegativeCacheBaseMs = t2.mintNegativeCacheBaseMs ?? 3e4, this.mintNegativeCacheMaxMs = t2.mintNegativeCacheMaxMs ?? 9e5, this.mintTerminalDenialCacheMs = t2.mintTerminalDenialCacheMs ?? yo, this.resolveTransientNegativeCacheBaseMs = ko({ value: t2.mintTransientNegativeCacheBaseMs, fallback: 5e3, name: "mintTransientNegativeCacheBaseMs" }), this.resolveTransientNegativeCacheMaxMs = ko({ value: t2.mintTransientNegativeCacheMaxMs, fallback: 12e4, name: "mintTransientNegativeCacheMaxMs" }), this.resolveMintRetryPolicyVersion = (function(e3) {
          if ("function" == typeof e3) return e3;
          const t3 = e3 ?? ds;
          return () => t3;
        })(t2.mintRetryPolicyVersion), this.mintRetryMaxAttempts = t2.mintRetryMaxAttempts ?? 2, !Number.isInteger(this.mintRetryMaxAttempts) || this.mintRetryMaxAttempts < 1) throw new RangeError(`TokenCachingAgentStoreClient mintRetryMaxAttempts must be a positive integer, got ${this.mintRetryMaxAttempts}`);
        if (this.mintRetryBaseDelayMs = n({ value: t2.mintRetryBaseDelayMs ?? 250, name: "mintRetryBaseDelayMs", context: "TokenCachingAgentStoreClient" }), this.mintRetryMaxDelayMs = n({ value: t2.mintRetryMaxDelayMs ?? 2e3, name: "mintRetryMaxDelayMs", context: "TokenCachingAgentStoreClient" }), this.mintRetryBaseDelayMs > this.mintRetryMaxDelayMs) throw new RangeError(`TokenCachingAgentStoreClient mintRetryBaseDelayMs (${this.mintRetryBaseDelayMs}) must be <= mintRetryMaxDelayMs (${this.mintRetryMaxDelayMs})`);
        this.sleep = t2.sleep ?? Eo, this.random = t2.random ?? Math.random, this.mintRetryBudget = t2.mintRetryBudget ?? new us({ now: this.now }), this.mintGate = t2.mintGate, this.onResolvedStoreIdChanged = t2.onResolvedStoreIdChanged, this.onSyncDisabledMint = t2.onSyncDisabledMint, this.onMintDenied = t2.onMintDenied;
        const r2 = e2.completeMultipartWrites;
        void 0 !== r2 && (this.completeMultipartWrites = (t3) => this.callWithRefresh({ cacheKey: t3.agentId, mintAgentId: t3.agentId, mintSourceKind: t3.mintSourceKind, opName: "completeMultipartWrites", op: (n2, s3) => r2.call(e2, { completions: t3.completions, storeId: s3, token: n2, signal: t3.signal }) }));
        const s2 = e2.abortMultipartWrites;
        void 0 !== s2 && (this.abortMultipartWrites = (t3) => this.callWithRefresh({ cacheKey: t3.agentId, mintAgentId: t3.agentId, mintSourceKind: t3.mintSourceKind, opName: "abortMultipartWrites", op: (r3, n2) => s2.call(e2, { uploads: t3.uploads, storeId: n2, token: r3, signal: t3.signal }) }));
        const o2 = e2.rmdir;
        void 0 !== o2 && (this.rmdir = (t3) => this.callWithRefresh({ cacheKey: t3.agentId, mintAgentId: t3.agentId, mintSourceKind: t3.mintSourceKind, opName: "rmdir", signal: t3.signal, op: (r3, n2) => o2.call(e2, { relPath: t3.relPath, storeId: n2, token: r3, signal: t3.signal }) }));
      }
      getResolvedStoreId(e2) {
        return this.resolvedStoreIds.get(Po(e2));
      }
      async listFiles(e2) {
        return await this.callWithRefresh({ cacheKey: Po(e2), mintAgentId: e2.agentId, shareId: e2.shareId, mintSourceKind: e2.mintSourceKind, opName: "listFiles", signal: e2.signal, op: (t2, r2) => this.transport.listFiles({ relPath: e2.relPath, shareId: e2.shareId, storeId: r2, token: t2, signal: e2.signal, tombstoneMode: e2.tombstoneMode, tombstonesSinceMs: e2.tombstonesSinceMs, ifVersionEqual: e2.ifVersionEqual }) });
      }
      async presignReads(e2) {
        return await this.callWithRefresh({ cacheKey: Po(e2), mintAgentId: e2.agentId, shareId: e2.shareId, mintSourceKind: e2.mintSourceKind, opName: "presignReads", signal: e2.signal, op: (t2, r2) => this.transport.presignReads({ relPaths: e2.relPaths, shareId: e2.shareId, storeId: r2, token: t2, signal: e2.signal }) });
      }
      async presignWrites(e2) {
        return await this.callWithRefresh({ cacheKey: e2.agentId, mintAgentId: e2.agentId, mintSourceKind: e2.mintSourceKind, opName: "presignWrites", signal: e2.signal, op: (t2, r2) => this.transport.presignWrites({ files: e2.files, storeId: r2, token: t2, signal: e2.signal }) });
      }
      async deleteFiles(e2) {
        const t2 = this.transport.deleteFiles?.bind(this.transport);
        if (void 0 === t2) throw new Error("TokenCachingAgentStoreClient: transport does not support deleteFiles");
        return await this.callWithRefresh({ cacheKey: e2.agentId, mintAgentId: e2.agentId, mintSourceKind: e2.mintSourceKind, opName: "deleteFiles", signal: e2.signal, op: (r2, n2) => t2({ files: e2.files, storeId: n2, token: r2, signal: e2.signal }) });
      }
      versionProbeTarget(e2) {
        const t2 = this.transport.rootListingPrefersCompleteFlatStore;
        if (void 0 === t2) return;
        const r2 = Po(e2), n2 = this.tokens.get(r2);
        if (void 0 === n2 || this.shouldRefreshToken(r2, n2)) return;
        const s2 = n2.storeIds[0];
        return void 0 !== s2 && "" !== s2 ? { ...void 0 !== e2.shareId ? { shareId: e2.shareId } : { storeId: s2 }, token: n2.token, preferCompleteFlatStore: t2.call(this.transport, { storeId: s2, shareId: e2.shareId }) } : void 0;
      }
      invalidateListCache(e2) {
        const t2 = this.tokens.get(Po(e2));
        if (void 0 === t2) return;
        const r2 = t2.storeIds[0];
        void 0 !== r2 && "" !== r2 && this.transport.invalidateListCache?.({ storeId: r2, shareId: e2.shareId });
      }
      async callWithRefresh(e2) {
        const t2 = await this.getValidToken({ cacheKey: e2.cacheKey, mintAgentId: e2.mintAgentId, shareId: e2.shareId, mintSourceKind: e2.mintSourceKind, signal: e2.signal }), r2 = Co(t2);
        this.setResolvedStoreId(e2, r2);
        try {
          return await e2.op(t2, r2);
        } catch (t3) {
          if (!(t3 instanceof Error && Ao(t3) || "object" == typeof t3 && null !== t3 && Ao(t3))) throw t3;
          this.metrics.tokenRefreshUnauthorized({ agentId: e2.mintAgentId, op: e2.opName }), this.evictCachedToken(e2.cacheKey), this.setResolvedStoreId(e2, void 0);
          const r3 = await this.getValidToken({ cacheKey: e2.cacheKey, mintAgentId: e2.mintAgentId, shareId: e2.shareId, mintSourceKind: e2.mintSourceKind, mintReason: "after_unauthorized", signal: e2.signal }), n2 = Co(r3);
          this.setResolvedStoreId(e2, n2);
          try {
            return await e2.op(r3, n2);
          } catch (t4) {
            throw (t4 instanceof Error && Ao(t4) || "object" == typeof t4 && null !== t4 && Ao(t4)) && (this.evictCachedToken(e2.cacheKey), this.setResolvedStoreId(e2, void 0)), t4;
          }
        }
      }
      setResolvedStoreId(e2, t2) {
        if (this.resolvedStoreIds.get(e2.cacheKey) !== t2) {
          void 0 === t2 ? this.resolvedStoreIds.delete(e2.cacheKey) : this.resolvedStoreIds.set(e2.cacheKey, t2);
          try {
            this.onResolvedStoreIdChanged?.({ agentId: e2.mintAgentId, shareId: e2.shareId, storeId: t2 });
          } catch {
          }
        }
      }
      async getValidToken(e2) {
        const { cacheKey: t2, mintAgentId: r2, shareId: n2, mintSourceKind: s2, mintReason: o2, signal: i2 } = e2, a2 = this.tokens.get(t2), c2 = this.stillValidTokenDespiteTerminalDenial(t2, a2);
        if (void 0 !== c2) return c2;
        if (void 0 !== a2 && "after_unauthorized" !== o2 && !this.shouldRefreshToken(t2, a2)) return a2;
        const l2 = this.tryKeepThroughTransientNegativeCache({ cacheKey: t2, mintAgentId: r2, existing: a2, mintReason: o2 });
        if (void 0 !== l2) return l2;
        this.throwIfMintNegativeCached({ cacheKey: t2, mintAgentId: r2, mintReason: o2 });
        let u2 = this.inFlightMints.get(t2);
        if (void 0 === u2) {
          const e3 = this.throwIfMintGateBlockedUnlessKept({ cacheKey: t2, mintAgentId: r2, existing: a2, mintReason: o2 });
          if (void 0 !== e3) return e3;
          const i3 = o2 ?? (void 0 === a2 ? "cold" : "near_expiry");
          u2 = this.mintWithRetries({ cacheKey: t2, mintAgentId: r2, shareId: n2, mintSourceKind: s2, reason: i3 }).finally(() => {
            this.inFlightMints.delete(t2);
          }), this.inFlightMints.set(t2, u2);
        }
        try {
          return await (async function(e3, t3) {
            if (void 0 === t3) return await e3;
            if (t3.aborted) throw To(t3);
            return await new Promise((r3, n3) => {
              const s3 = () => {
                o3(), n3(To(t3));
              }, o3 = () => {
                t3.removeEventListener("abort", s3);
              };
              t3.addEventListener("abort", s3, { once: true }), e3.then((e4) => {
                o3(), r3(e4);
              }, (e4) => {
                o3(), n3(e4);
              });
            });
          })(u2, i2);
        } catch (e3) {
          if (Ye(e3)) throw e3;
          if (Ve(e3)) {
            const n4 = this.tryKeepExistingToken({ cacheKey: t2, mintAgentId: r2, existing: a2, mintReason: o2, emitMetric: true, error: e3 });
            if (void 0 !== n4) return n4;
          }
          const n3 = e3 instanceof ye ? e3.cause : e3;
          if (Se(e3) && !Ie(n3) && void 0 !== a2 && a2.expiresAtMs > this.now() && this.tokens.get(t2) === a2) return a2;
          throw e3;
        }
      }
      setMintTiming(e2) {
        let t2 = false;
        if (void 0 !== e2.refreshBufferMs) {
          const r2 = (function({ value: e3, name: t3, context: r3 }) {
            if (!Number.isFinite(e3) || e3 < 0) throw new RangeError(`${r3} ${t3} must be a finite non-negative number, got ${e3}`);
            return e3;
          })({ value: e2.refreshBufferMs, name: "refreshBufferMs", context: "TokenCachingAgentStoreClient" });
          r2 !== this.refreshBufferMs && (this.refreshBufferMs = r2, t2 = true);
        }
        if (void 0 !== e2.tokenRefreshJitterRatio) {
          const r2 = xo({ value: e2.tokenRefreshJitterRatio, name: "tokenRefreshJitterRatio", context: "TokenCachingAgentStoreClient" });
          r2 !== this.tokenRefreshJitterRatio && (this.tokenRefreshJitterRatio = r2, t2 = true);
        }
        if (t2 && this.rescheduleCachedTokenRefreshes(), void 0 !== e2.minTokenSlackMs && (this.minTokenSlackMs = n({ value: e2.minTokenSlackMs, name: "minTokenSlackMs", context: "TokenCachingAgentStoreClient" })), void 0 !== e2.mintRetryMaxAttempts) {
          if (!Number.isInteger(e2.mintRetryMaxAttempts) || e2.mintRetryMaxAttempts < 1) throw new RangeError(`TokenCachingAgentStoreClient mintRetryMaxAttempts must be a positive integer, got ${e2.mintRetryMaxAttempts}`);
          this.mintRetryMaxAttempts = e2.mintRetryMaxAttempts;
        }
        if (void 0 !== e2.mintRetryBaseDelayMs && (this.mintRetryBaseDelayMs = n({ value: e2.mintRetryBaseDelayMs, name: "mintRetryBaseDelayMs", context: "TokenCachingAgentStoreClient" })), void 0 !== e2.mintRetryMaxDelayMs && (this.mintRetryMaxDelayMs = n({ value: e2.mintRetryMaxDelayMs, name: "mintRetryMaxDelayMs", context: "TokenCachingAgentStoreClient" })), (void 0 !== e2.mintRetryBaseDelayMs || void 0 !== e2.mintRetryMaxDelayMs) && this.mintRetryBaseDelayMs > this.mintRetryMaxDelayMs) throw new RangeError(`TokenCachingAgentStoreClient mintRetryBaseDelayMs (${this.mintRetryBaseDelayMs}) must be <= mintRetryMaxDelayMs (${this.mintRetryMaxDelayMs})`);
      }
      rescheduleCachedTokenRefreshes() {
        for (const [e2, t2] of this.tokens) this.refreshAtMs.set(e2, this.computeRefreshAtMs(t2));
      }
      retuneTransientMintBackoffs() {
        for (const [e2, t2] of this.mintNegativeCache) {
          if ("transient" !== t2.kind) continue;
          const r2 = this.createMintNegativeCacheBackoff("transient");
          r2.restoreFailures(t2.backoff.failures), this.mintNegativeCache.set(e2, { ...t2, backoff: r2 });
        }
      }
      shouldRefreshToken(e2, t2) {
        if (this.resolveMintRetryPolicyVersion() < 1) return t2.expiresAtMs - this.now() <= this.refreshBufferMs;
        let r2 = this.refreshAtMs.get(e2);
        return void 0 === r2 && (r2 = this.computeRefreshAtMs(t2), this.refreshAtMs.set(e2, r2)), this.now() >= r2;
      }
      canKeepExistingToken(e2, t2, r2) {
        return this.resolveMintRetryPolicyVersion() >= 1 && "after_unauthorized" !== t2 && (void 0 === r2 || !Ie(r2)) && e2.expiresAtMs > this.now() + this.minTokenSlackMs;
      }
      throwIfMintGateBlockedUnlessKept(e2) {
        if (this.resolveMintRetryPolicyVersion() < 1 || void 0 === this.mintGate) return;
        const t2 = this.mintGate.peek();
        if (t2.allowed) return;
        const r2 = this.tryKeepExistingToken({ ...e2, emitMetric: false });
        if (void 0 !== r2) return r2;
        throw this.metrics.tokenMintRetryDenied?.({ agentId: e2.mintAgentId, reason: "gate" }), t2.error;
      }
      tryKeepExistingToken(e2) {
        const { cacheKey: t2, mintAgentId: r2, existing: n2, mintReason: s2, emitMetric: o2, error: i2 } = e2;
        if (void 0 !== n2 && this.tokens.get(t2) === n2 && this.canKeepExistingToken(n2, s2, i2)) return this.deferRefreshAfterKeep(t2, n2), o2 && this.metrics.tokenRefreshFailedKeptExisting?.({ agentId: r2, remainingMs: n2.expiresAtMs - this.now() }), n2;
      }
      tryKeepThroughTransientNegativeCache(e2) {
        const t2 = this.mintNegativeCache.get(e2.cacheKey);
        if (!(void 0 === t2 || "transient" !== t2.kind || this.now() >= t2.untilMs)) return this.tryKeepExistingToken({ ...e2, emitMetric: true });
      }
      computeRefreshAtMs(e2) {
        const t2 = this.tokenRefreshJitterRatio, r2 = 1 - t2 + 2 * this.unitRandom() * t2;
        return e2.expiresAtMs - Math.floor(this.refreshBufferMs * r2);
      }
      deferRefreshAfterKeep(e2, t2) {
        const r2 = this.now();
        this.refreshAtMs.set(e2, Math.min(t2.expiresAtMs - this.minTokenSlackMs, r2 + this.minTokenSlackMs));
      }
      evictCachedToken(e2) {
        this.tokens.delete(e2), this.refreshAtMs.delete(e2);
      }
      throwIfMintNegativeCached(e2) {
        const { cacheKey: t2, mintAgentId: r2 } = e2, n2 = this.mintNegativeCache.get(t2);
        if (void 0 !== n2) if ("terminal" !== n2.kind || 0 !== this.terminalDenialCacheMs()) {
          if (!(this.now() >= n2.untilMs || this.resolveMintRetryPolicyVersion() < 1 && "transient" === n2.kind)) {
            if ("after_unauthorized" !== e2.mintReason || "transient" !== n2.kind) {
              if ("transient" === n2.kind && this.resolveMintRetryPolicyVersion() >= 1 && void 0 !== this.mintGate) {
                const e3 = this.mintGate.peek();
                if (e3.allowed && e3.probe) return void this.mintNegativeCache.delete(t2);
              }
              throw this.metrics.tokenMintNegativeCached?.({ agentId: r2, untilMs: n2.untilMs, reason: n2.kind }), n2.error;
            }
            this.mintNegativeCache.delete(t2);
          }
        } else this.mintNegativeCache.delete(t2);
      }
      async mintWithRetries(e2) {
        const t2 = this.resolveMintRetryPolicyVersion();
        let r2 = t2 >= 1 ? this.mintRetryMaxAttempts : 1;
        const n2 = (function(e3) {
          if (void 0 !== e3.shareId) return { kind: "share", shareId: e3.shareId };
          if (void 0 !== e3.sourceKind) return { kind: "source", sourceKind: e3.sourceKind, sourceId: e3.agentId };
          if (Yn.hG.test(e3.agentId)) return { kind: "store", storeId: e3.agentId };
          if ((0, Yn.PZ)(e3.agentId)) return { kind: "source", sourceKind: "cloud", sourceId: e3.agentId };
          if ((0, Yn.Ae)(e3.agentId)) return { kind: "source", sourceKind: "local", sourceId: e3.agentId };
          if (void 0 !== (0, Yn.Z6)(e3.agentId)) return { kind: "source", sourceKind: "user", sourceId: e3.agentId };
          if (void 0 !== (0, Yn.ZJ)(e3.agentId)) return { kind: "source", sourceKind: "team", sourceId: e3.agentId };
          throw new i("Agent store target is not a valid store or source id");
        })({ agentId: e2.mintAgentId, shareId: e2.shareId, sourceKind: e2.mintSourceKind });
        let s2, o2, a2 = 0, c2 = false;
        const l2 = t2 >= 1 ? this.mintGate : void 0, u2 = l2?.begin();
        if (void 0 !== u2 && !u2.allowed) throw this.metrics.tokenMintRetryDenied?.({ agentId: e2.mintAgentId, reason: "gate" }), u2.error;
        true === u2?.probe && (r2 = 1);
        try {
          for (; a2 < r2 && (void 0 === u2 || u2.allowed); ) {
            a2 += 1, t2 >= 1 && this.mintRetryBudget.recordAttempt();
            try {
              const t3 = await this.transport.mintToken(n2);
              return this.mintNegativeCache.delete(e2.cacheKey), this.tokens.set(e2.cacheKey, t3), this.refreshAtMs.set(e2.cacheKey, this.computeRefreshAtMs(t3)), this.metrics.tokenMinted({ agentId: e2.mintAgentId, reason: e2.reason }), c2 = true, true === u2?.allowed && l2?.end({ ok: true }, u2), t3;
            } catch (n3) {
              s2 = n3, o2 = Ge(n3)?.retryAfterMs;
              const i2 = this.classifyMintRetry({ error: n3, attempt: a2, maxAttempts: r2, policy: t2, retryAfterMs: o2 });
              if ("stop" === i2.kind) {
                void 0 !== i2.denied && this.metrics.tokenMintRetryDenied?.({ agentId: e2.mintAgentId, reason: i2.denied });
                break;
              }
              if (t2 >= 1 && !this.mintRetryBudget.tryConsumeRetry()) {
                this.metrics.tokenMintRetryDenied?.({ agentId: e2.mintAgentId, reason: "budget" });
                break;
              }
              this.metrics.tokenMintRetried?.({ agentId: e2.mintAgentId, attempt: a2, delayMs: i2.delayMs }), await this.sleep(i2.delayMs);
            }
          }
        } finally {
          true !== u2?.allowed || c2 || void 0 === s2 || l2?.end({ ok: false, error: new ye({ cause: s2, attempts: a2, retryAfterMs: o2 }), transient: Ve(s2) }, u2);
        }
        if (Ye(s2)) throw s2;
        const d2 = t2 < 1 ? s2 : new ye({ cause: s2, attempts: a2, retryAfterMs: o2 });
        throw this.recordMintFailure({ cacheKey: e2.cacheKey, agentId: e2.mintAgentId, error: d2 }), d2;
      }
      classifyMintRetry(e2) {
        if (e2.policy < 1) return { kind: "stop" };
        if (Ye(e2.error)) return { kind: "stop" };
        if (!Ve(e2.error)) return { kind: "stop" };
        if (void 0 !== e2.retryAfterMs && e2.retryAfterMs > this.mintRetryMaxDelayMs) return { kind: "stop", denied: "retry_after" };
        if (e2.attempt >= e2.maxAttempts) return { kind: "stop", denied: "max_attempts" };
        return { kind: "retry", delayMs: void 0 !== e2.retryAfterMs ? e2.retryAfterMs : this.jitteredMintRetryDelayMs() };
      }
      unitRandom() {
        const e2 = this.random();
        return Number.isFinite(e2) ? Math.max(0, Math.min(e2, 1)) : 0;
      }
      jitteredMintRetryDelayMs() {
        const e2 = 0.8 + 2 * this.unitRandom() * 0.2;
        return Math.max(1, Math.min(this.mintRetryMaxDelayMs, Math.floor(this.mintRetryBaseDelayMs * e2)));
      }
      terminalDenialCacheMs() {
        const e2 = this.mintTerminalDenialCacheMs, t2 = "function" == typeof e2 ? e2() : e2;
        return 0 === t2 ? 0 : "number" != typeof t2 || !Number.isFinite(t2) || t2 < 0 ? yo : t2;
      }
      mintDeniedUntilMs(e2) {
        const t2 = this.now();
        let r2;
        const n2 = (e3, n3) => {
          "terminal" !== n3.kind && "stand_down" !== n3.kind || "terminal" === n3.kind && 0 === this.terminalDenialCacheMs() || n3.untilMs > t2 && !this.hasUnexpiredToken(e3) && (void 0 === r2 || n3.untilMs > r2) && (r2 = n3.untilMs);
        };
        if (void 0 !== e2) {
          const t3 = this.mintNegativeCache.get(e2);
          return void 0 !== t3 && n2(e2, t3), r2;
        }
        for (const [e3, t3] of this.mintNegativeCache) n2(e3, t3);
        return r2;
      }
      hasUnexpiredToken(e2) {
        const t2 = this.tokens.get(e2);
        return void 0 !== t2 && t2.expiresAtMs > this.now();
      }
      stillValidTokenDespiteTerminalDenial(e2, t2) {
        if (void 0 === t2 || t2.expiresAtMs <= this.now()) return;
        const r2 = this.mintNegativeCache.get(e2);
        return void 0 === r2 || "terminal" !== r2.kind || this.now() >= r2.untilMs || 0 === this.terminalDenialCacheMs() ? void 0 : t2;
      }
      recordMintFailure(e2) {
        const { cacheKey: t2, agentId: r2, error: n2 } = e2, s2 = n2 instanceof ye ? n2.cause : n2, o2 = Ie(s2), i2 = this.terminalDenialCacheMs();
        if (Se(s2) && i2 > 0) {
          const e3 = Ue(s2), a2 = void 0 === e3 ? i2 : Io(e3);
          o2 && this.evictCachedToken(t2);
          const c2 = this.now() + a2;
          return this.mintNegativeCache.set(t2, { error: n2, untilMs: c2, backoff: this.createMintNegativeCacheBackoff("terminal"), kind: "terminal" }), this.metrics.tokenMintFailureCached?.({ agentId: r2, kind: "terminal" }), this.safeNotifyMintDenied({ agentId: r2, error: n2, untilMs: c2, kind: "terminal" }), void (o2 && this.safeNotifySyncDisabledMint({ agentId: r2, message: s2 instanceof Error ? s2.message : String(s2), retryAfterMs: je(s2) }));
        }
        if (o2) {
          this.evictCachedToken(t2);
          const e3 = this.mintNegativeCache.get(t2), o3 = "stand_down" === e3?.kind ? e3.backoff : this.createMintNegativeCacheBackoff("stand_down");
          return this.mintNegativeCache.set(t2, { error: n2, untilMs: _o, backoff: o3, kind: "stand_down" }), this.metrics.tokenMintFailureCached?.({ agentId: r2, kind: "stand_down" }), this.safeNotifyMintDenied({ agentId: r2, error: n2, untilMs: _o, kind: "stand_down" }), void this.safeNotifySyncDisabledMint({ agentId: r2, message: s2 instanceof Error ? s2.message : String(s2), retryAfterMs: je(s2) });
        }
        be(s2) ? this.writeMintNegativeCache({ cacheKey: t2, agentId: r2, error: n2, kind: "backoff" }) : this.resolveMintRetryPolicyVersion() >= 1 && Ve(s2) && this.writeMintNegativeCache({ cacheKey: t2, agentId: r2, error: n2, kind: "transient", retryAfterMs: n2 instanceof ye ? n2.retryAfterMs : Ge(s2)?.retryAfterMs });
      }
      writeMintNegativeCache(e2) {
        const t2 = this.mintNegativeCache.get(e2.cacheKey), r2 = t2?.kind === e2.kind ? t2.backoff : this.createMintNegativeCacheBackoff(e2.kind), n2 = r2.recordFailure(), s2 = e2.retryAfterMs, o2 = void 0 !== s2 ? Math.max(n2, this.jitteredRetryAfterMs(s2)) : n2;
        this.mintNegativeCache.set(e2.cacheKey, { error: e2.error, untilMs: this.now() + o2, backoff: r2, kind: e2.kind }), this.metrics.tokenMintFailureCached?.({ agentId: e2.agentId, kind: e2.kind });
      }
      createMintNegativeCacheBackoff(e2) {
        const t2 = "transient" === e2;
        return new s({ baseDelayMs: t2 ? this.resolveTransientNegativeCacheBaseMs() : this.mintNegativeCacheBaseMs, maxDelayMs: t2 ? this.resolveTransientNegativeCacheMaxMs() : this.mintNegativeCacheMaxMs, jitter: 0.2, random: this.random });
      }
      jitteredRetryAfterMs(e2) {
        const t2 = 0.8 + 2 * this.unitRandom() * 0.2;
        return Math.max(e2, Math.floor(e2 * t2));
      }
      safeNotifySyncDisabledMint(e2) {
        this.safeNotifyCallback(this.onSyncDisabledMint, e2);
      }
      safeNotifyMintDenied(e2) {
        this.safeNotifyCallback(this.onMintDenied, e2);
      }
      safeNotifyCallback(e2, t2) {
        if (void 0 === e2) return;
        let r2;
        try {
          r2 = e2(t2);
        } catch {
          return;
        }
        null != r2 && "function" == typeof r2.then && r2.then(() => {
        }, () => {
        });
      }
    }
    function ko(e2) {
      if ("function" == typeof e2.value) return e2.value;
      const t2 = n({ value: e2.value ?? e2.fallback, name: e2.name, context: "TokenCachingAgentStoreClient" });
      return () => t2;
    }
    function xo(e2) {
      const { value: t2, name: r2, context: n2 } = e2;
      if (!Number.isFinite(t2) || t2 < 0 || t2 > 1) throw new RangeError(`${n2} ${r2} must be a finite number in [0, 1], got ${t2}`);
      return t2;
    }
    function Eo(e2) {
      return e2 <= 0 ? Promise.resolve() : new Promise((t2) => {
        setTimeout(t2, e2);
      });
    }
    function Io(e2) {
      return Math.min(Math.max(Math.floor(e2), wo), vo);
    }
    function To(e2) {
      const t2 = e2.reason;
      return t2 instanceof Error ? t2 : new DOMException("The operation was aborted", "AbortError");
    }
    function Co(e2) {
      const t2 = e2.storeIds[0];
      if (void 0 === t2 || "" === t2) throw new i("Agent store token did not include a scoped store id");
      return t2;
    }
    function Po(e2) {
      return e2.shareId ?? e2.agentId;
    }
    function Ao(e2) {
      if (e2 instanceof ye && e2.cause instanceof Error) return Ao(e2.cause);
      if (e2 instanceof i) return true;
      const t2 = "status" in e2 ? e2.status : void 0;
      if (401 === t2 || 403 === t2) return true;
      const r2 = "code" in e2 ? e2.code : void 0;
      return 7 === r2 || 16 === r2 || "PermissionDenied" === r2 || "Unauthenticated" === r2 || "PERMISSION_DENIED" === r2 || "UNAUTHENTICATED" === r2;
    }
    class Ro {
      constructor(e2, t2 = {}) {
        if (this.inner = e2, this.throttleGates = /* @__PURE__ */ new Map(), this.maxAttempts = t2.maxAttempts ?? 3, !Number.isInteger(this.maxAttempts) || this.maxAttempts < 1) throw new RangeError(`RetryingAgentStoreClient maxAttempts must be a positive integer, got ${this.maxAttempts}`);
        if (this.baseDelayMs = n({ value: t2.baseDelayMs ?? 250, name: "baseDelayMs", context: "RetryingAgentStoreClient" }), this.maxDelayMs = n({ value: t2.maxDelayMs ?? 5e3, name: "maxDelayMs", context: "RetryingAgentStoreClient" }), this.baseDelayMs > this.maxDelayMs) throw new RangeError(`RetryingAgentStoreClient baseDelayMs (${this.baseDelayMs}) must be <= maxDelayMs (${this.maxDelayMs})`);
        const r2 = t2.multiplier ?? 2;
        if (!Number.isFinite(r2) || r2 < 1) throw new RangeError(`RetryingAgentStoreClient multiplier must be >= 1, got ${r2}`);
        var s2;
        this.multiplier = r2, this.sleep = t2.sleep ?? Fo, this.currentMintRetryPolicyVersion = () => Jo(t2.mintRetryPolicyVersion), this.shouldRetry = t2.shouldRetry ?? (s2 = t2.mintRetryPolicyVersion, (e3) => e3 instanceof ye && Jo(s2) < 1 ? Oo(e3.cause) : Oo(e3)), this.listener = t2.listener, this.now = t2.now ?? Date.now, this.random = t2.random ?? Math.random;
        const o2 = e2.completeMultipartWrites;
        void 0 !== o2 && (this.completeMultipartWrites = (t3) => this.callWithRetries({ agentId: t3.agentId, op: "complete_multipart_writes", signal: t3.signal }, () => o2.call(e2, t3)));
        const i2 = e2.abortMultipartWrites;
        void 0 !== i2 && (this.abortMultipartWrites = (t3) => this.callWithRetries({ agentId: t3.agentId, op: "abort_multipart_writes", signal: t3.signal }, () => i2.call(e2, t3)));
        const a2 = e2.rmdir;
        void 0 !== a2 && (this.rmdir = (t3) => this.callWithRetries({ agentId: t3.agentId, op: "rmdir", signal: t3.signal }, () => a2.call(e2, t3)));
      }
      getResolvedStoreId(e2) {
        return this.inner.getResolvedStoreId?.(e2);
      }
      async listFiles(e2) {
        return await this.callWithRetries({ agentId: e2.agentId, op: "list", signal: e2.signal }, () => this.inner.listFiles(e2));
      }
      async presignReads(e2) {
        return await this.callWithRetries({ agentId: e2.agentId, op: "presign_reads", signal: e2.signal }, () => this.inner.presignReads(e2));
      }
      async presignWrites(e2) {
        return await this.callWithRetries({ agentId: e2.agentId, op: "presign_writes", signal: e2.signal }, () => this.inner.presignWrites(e2));
      }
      async deleteFiles(e2) {
        const t2 = this.inner.deleteFiles?.bind(this.inner);
        if (void 0 === t2) throw new Error("RetryingAgentStoreClient: inner client does not support deleteFiles");
        return await this.callWithRetries({ agentId: e2.agentId, op: "delete_files", signal: e2.signal }, () => t2(e2));
      }
      invalidateListCache(e2) {
        this.inner.invalidateListCache?.(e2);
      }
      versionProbeTarget(e2) {
        return this.inner.versionProbeTarget?.(e2);
      }
      async callWithRetries(e2, t2) {
        let r2, n2 = 0;
        for (; n2 < this.maxAttempts; ) {
          n2 += 1;
          try {
            await this.awaitThrottleGate(e2);
          } catch (t3) {
            this.rethrowThrottleWait({ context: e2, waitError: t3, lastError: r2, attempt: n2 });
          }
          try {
            const r3 = await t2();
            return this.clearThrottleGate(e2.agentId), r3;
          } catch (t3) {
            t3 instanceof ye && this.currentMintRetryPolicyVersion() >= 1 && this.rethrowMintFailure({ context: e2, error: t3, attempt: n2 }), r2 = t3;
            const s2 = this.shouldRetry(t3) && true !== e2.signal?.aborted, o2 = s2 && n2 < this.maxAttempts, i2 = Ge(t3);
            if (s2 && (void 0 !== i2 ? this.notifyThrottled({ context: e2, error: t3, attempt: n2, exhausted: !o2, retryAfterMs: i2.retryAfterMs, scope: i2.scope }) : this.notifyNetworkError({ context: e2, error: t3, attempt: n2, exhausted: !o2 })), void 0 !== i2 && this.armThrottleGate(e2.agentId, i2.retryAfterMs), !o2) throw t3;
            if (void 0 !== i2) continue;
            try {
              await this.sleep(this.computeAttemptDelayMs(n2));
            } catch {
              throw s2 && this.notifyNetworkError({ context: e2, error: t3, attempt: n2, exhausted: true }), t3;
            }
          }
        }
        throw r2 ?? new Error("RetryingAgentStoreClient: no result");
      }
      rethrowMintFailure({ context: e2, error: t2, attempt: r2 }) {
        const n2 = Ge(t2);
        throw void 0 !== n2 ? (this.notifyThrottled({ context: e2, error: t2, attempt: r2, exhausted: true, retryAfterMs: t2.retryAfterMs ?? n2.retryAfterMs, scope: n2.scope }), this.armThrottleGate(e2.agentId, t2.retryAfterMs ?? n2.retryAfterMs)) : Ve(t2) && this.notifyNetworkError({ context: e2, error: t2, attempt: r2, exhausted: true }), t2;
      }
      notifyNetworkError({ context: e2, error: t2, attempt: r2, exhausted: n2 }) {
        const s2 = { agentId: e2.agentId, op: e2.op, errorClass: qo(t2), attempt: r2, exhausted: n2 };
        fo(this.listener, "onNetworkError", s2);
      }
      notifyThrottled({ context: e2, error: t2, attempt: r2, exhausted: n2, retryAfterMs: s2, scope: o2 }) {
        const i2 = { agentId: e2.agentId, op: e2.op, errorClass: Do(t2), attempt: r2, exhausted: n2, retryAfterMs: s2, scope: o2 };
        fo(this.listener, "onThrottled", i2);
      }
      computeAttemptDelayMs(e2) {
        const t2 = this.baseDelayMs * this.multiplier ** (e2 - 1);
        return Math.max(0, Math.min(this.maxDelayMs, Math.floor(t2)));
      }
      rethrowThrottleWait({ context: e2, waitError: t2, lastError: r2, attempt: n2 }) {
        if (!(Bo(t2) || true === e2.signal?.aborted)) throw r2 ?? t2;
        if (void 0 !== r2) {
          const t3 = Ge(r2);
          void 0 !== t3 ? this.notifyThrottled({ context: e2, error: r2, attempt: n2, exhausted: true, retryAfterMs: t3.retryAfterMs, scope: t3.scope }) : this.shouldRetry(r2) && this.notifyNetworkError({ context: e2, error: r2, attempt: n2, exhausted: true });
        }
        if (Bo(t2)) throw t2;
        if (void 0 !== e2.signal) throw No(e2.signal);
        throw t2;
      }
      async awaitThrottleGate(e2) {
        const t2 = this.throttleGates.get(e2.agentId);
        if (void 0 === t2) return;
        const r2 = t2.untilMs - this.now();
        r2 <= 0 || await (async function(e3, t3) {
          if (void 0 === t3) return await e3;
          if (t3.aborted) throw No(t3);
          return await new Promise((r3, n2) => {
            const s2 = () => {
              o2(), n2(No(t3));
            }, o2 = () => {
              t3.removeEventListener("abort", s2);
            };
            t3.addEventListener("abort", s2, { once: true }), e3.then((e4) => {
              o2(), r3(e4);
            }, (e4) => {
              o2(), n2(e4);
            });
          });
        })(this.sleep(r2), e2.signal);
      }
      armThrottleGate(e2, t2) {
        const r2 = this.now();
        let n2 = this.throttleGates.get(e2);
        void 0 === n2 && (n2 = { untilMs: r2, backoff: new s({ baseDelayMs: this.baseDelayMs, maxDelayMs: this.maxDelayMs, multiplier: this.multiplier, jitter: 0.2, random: this.random }) }, this.throttleGates.set(e2, n2));
        const o2 = n2.untilMs > r2 ? n2.untilMs - r2 : n2.backoff.recordFailure(), i2 = Math.max(o2, this.jitterDelayMs(t2));
        return n2.untilMs = Math.max(n2.untilMs, r2 + i2), n2.untilMs - r2;
      }
      jitterDelayMs(e2) {
        const t2 = this.random(), r2 = 0.8 + 2 * (Number.isFinite(t2) ? Math.max(0, Math.min(t2, 1)) : 0) * 0.2;
        return Math.max(1, Math.floor(e2 * r2));
      }
      clearThrottleGate(e2) {
        const t2 = this.throttleGates.get(e2);
        void 0 !== t2 && t2.untilMs <= this.now() && this.throttleGates.delete(e2);
      }
    }
    const Mo = /* @__PURE__ */ new Set([se.C.Unavailable, se.C.ResourceExhausted, se.C.Internal, se.C.Aborted, se.C.DeadlineExceeded]);
    function Jo(e2) {
      return "function" == typeof e2 ? e2() : e2 ?? ds;
    }
    function Oo(e2) {
      if (e2 instanceof ye) return false;
      if (e2 instanceof c || e2 instanceof a || e2 instanceof l) return false;
      if ((function(e3) {
        return "object" == typeof e3 && null !== e3 && "code" in e3 && "round_aborted" === e3.code;
      })(e2) || Bo(e2)) return false;
      if ((function(e3) {
        if (e3 instanceof Error) return Ao(e3);
        if ("object" == typeof e3 && null !== e3) return Ao(e3);
        return false;
      })(e2)) return false;
      const t2 = fe(e2);
      return void 0 !== t2 ? !!Mo.has(t2) || t2 === se.C.Unknown && (Qe(e2) || Xe(e2)) : !(!Qe(e2) && !Xe(e2)) || (e2 instanceof TypeError || e2 instanceof RangeError || e2 instanceof SyntaxError || ReferenceError, false);
    }
    function Bo(e2) {
      if (e2 instanceof Error && "AbortError" === e2.name) return true;
      return fe(e2) === se.C.Canceled;
    }
    function Do(e2) {
      const t2 = fe(e2);
      return t2 === se.C.ResourceExhausted ? "resource_exhausted" : t2 === se.C.Unavailable ? "unavailable" : qo(e2);
    }
    function qo(e2) {
      if (e2 instanceof ye) return qo(e2.cause);
      if (e2 instanceof Error) {
        const t2 = e2.code;
        return "string" == typeof t2 && t2.length > 0 ? t2 : "number" == typeof t2 && Number.isFinite(t2) ? `code_${t2}` : e2.name;
      }
      if ("object" == typeof e2 && null !== e2) {
        const t2 = e2.code;
        if ("string" == typeof t2 && t2.length > 0) return t2;
      }
      return "unknown";
    }
    function No(e2) {
      const t2 = e2.reason;
      return t2 instanceof Error ? t2 : new DOMException("The operation was aborted", "AbortError");
    }
    function Fo(e2) {
      return e2 <= 0 ? Promise.resolve() : new Promise((t2) => {
        setTimeout(t2, e2);
      });
    }
    const Uo = "root-id", Lo = 384, $o = 128, jo = 50, Go = new Int32Array(new SharedArrayBuffer(4));
    let zo = 0;
    const Wo = /* @__PURE__ */ new Set(["ENOENT", "ENOTDIR", "ELOOP"]);
    function Ho(e2) {
      const t2 = ti(e2);
      return "id" === t2.kind ? { kind: "present", rootId: t2.id } : "refused" === t2.kind ? { kind: "unreadable" } : { kind: "missing" };
    }
    function Ko(e2) {
      const t2 = ti(e2);
      return "id" === t2.kind ? t2.id : void 0;
    }
    function Vo(e2) {
      const t2 = ti(e2);
      if ("id" === t2.kind) return t2.id;
      if ("absent" === t2.kind) {
        try {
          (0, Wt.rs)(e2);
        } catch {
          return;
        }
        return (function(e3, t3) {
          if (zo > 0) return t3();
          const r2 = `${e3}.lock`, n2 = (function(e4) {
            const t4 = Xo(e4);
            if ("notadb" !== t4) return t4;
            Atomics.wait(Go, 0, 0, 2);
            const r3 = Xo(e4);
            if ("notadb" !== r3) return r3;
            !(function(e5) {
              let t5;
              try {
                t5 = p.openSync(e5, (function() {
                  const e6 = p.constants;
                  let t6 = e6.O_RDWR ?? 0;
                  "number" == typeof e6.O_NOFOLLOW && (t6 |= e6.O_NOFOLLOW);
                  "number" == typeof e6.O_CLOEXEC && (t6 |= e6.O_CLOEXEC);
                  return t6;
                })());
                const r4 = p.fstatSync(t5);
                if (!r4.isFile() || r4.size > 1048576) return;
                const n4 = p.lstatSync(e5);
                if (!n4.isFile() || n4.dev !== r4.dev || n4.ino !== r4.ino) return;
                p.ftruncateSync(t5, 0), p.fsyncSync(t5);
              } catch {
                return;
              } finally {
                if (void 0 !== t5) try {
                  p.closeSync(t5);
                } catch {
                }
              }
            })(e4);
            const n3 = Xo(e4);
            return "notadb" === n3 ? "failed" : n3;
          })(r2);
          if ("busy" === n2) return ei(e3);
          if ("failed" === n2) return;
          zo += 1;
          try {
            return t3();
          } finally {
            zo -= 1;
            try {
              n2.close();
            } catch {
            }
          }
        })(e2, () => {
          const t3 = ti(e2);
          return "id" === t3.kind ? t3.id : "absent" === t3.kind && (function(e3) {
            let t4;
            try {
              t4 = p.openSync(e3, ir());
            } catch (e4) {
              return ri(e4) && "ENOENT" === e4.code;
            }
            let r2 = false;
            try {
              const e4 = p.fstatSync(t4);
              if (!e4.isFile()) return false;
              r2 = 0 === e4.size;
            } catch {
              return false;
            } finally {
              p.closeSync(t4);
            }
            if (!r2) return true;
            try {
              return p.unlinkSync(e3), true;
            } catch (e4) {
              return ri(e4) && "ENOENT" === e4.code;
            }
          })(e2) ? (function(e3) {
            const t4 = (0, Ys.randomUUID)();
            let r2;
            try {
              return r2 = p.openSync(e3, ar(), Lo), p.writeFileSync(r2, t4, { encoding: "utf8" }), p.fsyncSync(r2), p.fchmodSync(r2, Lo), t4;
            } catch (t5) {
              if (void 0 !== r2) try {
                p.unlinkSync(e3);
              } catch {
              }
              return ri(t5) && "EEXIST" === t5.code ? ei(e3) : void 0;
            } finally {
              if (void 0 !== r2) try {
                p.closeSync(r2);
              } catch {
              }
            }
          })(e2) : void 0;
        });
      }
    }
    const Yo = /* @__PURE__ */ new Set([5, 6]), Qo = 26;
    function Xo(e2) {
      try {
        (0, Wt.rs)(e2);
      } catch {
        return "failed";
      }
      if (!(function(e3) {
        try {
          const t4 = p.openSync(e3, ar(), Lo);
          return p.closeSync(t4), true;
        } catch (e4) {
          if (!ri(e4) || "EEXIST" !== e4.code) return false;
        }
        let t3;
        try {
          return t3 = p.openSync(e3, ir()), p.fstatSync(t3).isFile();
        } catch {
          return false;
        } finally {
          if (void 0 !== t3) try {
            p.closeSync(t3);
          } catch {
          }
        }
      })(e2)) return "failed";
      let t2, r2;
      try {
        t2 = p.lstatSync(e2);
      } catch {
        return "failed";
      }
      if (!t2.isFile()) return "failed";
      try {
        r2 = (function(e3) {
          return new (process.getBuiltinModule("node:sqlite")).DatabaseSync(e3);
        })(e2);
        const n2 = p.lstatSync(e2);
        return n2.isFile() && n2.dev === t2.dev && n2.ino === t2.ino ? (r2.exec("PRAGMA busy_timeout = 0"), r2.exec("PRAGMA journal_mode = OFF"), r2.exec("BEGIN EXCLUSIVE"), r2) : (r2.close(), "failed");
      } catch (e3) {
        try {
          r2?.close();
        } catch {
        }
        return (function(e4) {
          const t3 = Zo(e4);
          return void 0 !== t3 && Yo.has(t3);
        })(e3) ? "busy" : Zo(e3) === Qo ? "notadb" : "failed";
      }
    }
    function Zo(e2) {
      if (e2 instanceof Error && "errcode" in e2) return "number" == typeof e2.errcode ? e2.errcode : void 0;
    }
    function ei(e2) {
      const t2 = Date.now() + jo;
      for (; ; ) {
        const r2 = ti(e2);
        if ("id" === r2.kind) return r2.id;
        if ("absent" !== r2.kind || Date.now() >= t2) return;
        Atomics.wait(Go, 0, 0, 2);
      }
    }
    function ti(e2) {
      let t2;
      try {
        t2 = p.openSync(e2, ir());
      } catch (e3) {
        return ri(e3) && Wo.has(e3.code ?? "") ? { kind: "absent" } : { kind: "refused" };
      }
      try {
        const e3 = p.fstatSync(t2);
        if (!e3.isFile() || e3.size > $o) return { kind: "invalid" };
        if (0 === e3.size) return { kind: "absent" };
        const r2 = p.readFileSync(t2, "utf8").trim();
        return (0, Yn.Ae)(r2) ? { kind: "id", id: r2 } : { kind: "invalid" };
      } catch {
        return { kind: "refused" };
      } finally {
        p.closeSync(t2);
      }
    }
    function ri(e2) {
      return e2 instanceof Error && "code" in e2;
    }
    var ni = r(65716), si = r(68388);
    const oi = { totalMs: 6e3, pollMs: 200 };
    function ii(e2, t2) {
      return "passive" !== t2 || e2.listingComplete ? { kind: "ran", summary: e2 } : { kind: "holder-owns-fetch" };
    }
    function ai(e2) {
      try {
        (0, Wt.rs)(e2);
        const t2 = p.statSync(e2);
        return t2.isFile() ? t2.size : void 0;
      } catch {
        return;
      }
    }
    function ci(e2) {
      return void 0 !== ai(e2);
    }
    async function li(e2) {
      const { citedPath: t2, relPath: r2, mountReady: n2, indexTierEnabled: s2, waitBudget: o2, lookupIndex: i2, pullPaths: a2, onStaleness: c2 } = e2;
      if (!n2) return { tier: "mirror", outcome: ci(t2) ? "served" : "unavailable", reason: "mount-not-ready" };
      const l2 = s2 ? (function(e3, t3, r3) {
        if ("unavailable" === e3.kind) return "index-unavailable";
        if ("miss" === e3.kind) return "index-miss";
        if ("tombstoned" === e3.entry.state) return "index-tombstoned";
        if (ai(t3) !== e3.entry.size) return "index-size-mismatch";
        return (function(e4, t4) {
          try {
            const r4 = t4.split("/").at(-1);
            return void 0 !== r4 && "" !== r4 && p.readdirSync((0, h.dirname)(e4)).includes(r4);
          } catch {
            return false;
          }
        })(t3, r3) ? "index-hit" : "index-case-mismatch";
      })(i2(), t2, r2) : "index-gate-off";
      if ("index-hit" === l2) return a2([r2]).then((e3) => {
        c2((function(e4) {
          if ("ran" !== e4.kind) return "unknown";
          const { summary: t3 } = e4;
          if (t3.errors.length > 0 || t3.refusals > 0) return "unknown";
          if (t3.filesPulled > 0) return "behind";
          if (t3.filesSkipped > 0) return "current";
          if (!t3.listingComplete || t3.pullsSkippedPendingDelete > 0 || t3.pullsDeferred > 0) return "unknown";
          return "orphaned";
        })(e3));
      }).catch(() => {
        c2("unknown");
      }), { tier: "index", outcome: "served", reason: "index-hit" };
      const u2 = await a2([r2]);
      if (ci(t2)) return { tier: "pull", outcome: "served", reason: l2 };
      if ("holder-owns-fetch" !== u2.kind) return { tier: "pull", outcome: "unavailable", reason: ui(u2) };
      const d2 = await (async function(e3, t3) {
        const r3 = Date.now() + t3.totalMs;
        for (; ; ) {
          if (ci(e3)) return true;
          if (Date.now() >= r3) return false;
          await (0, ni.cb)(t3.pollMs);
        }
      })(t2, o2);
      return { tier: "holder-wait", outcome: d2 ? "served" : "unavailable", reason: d2 ? "holder-served" : "holder-timeout" };
    }
    function ui(e2) {
      if ("failed" === e2.kind) return "pull-failed";
      if ("ran" !== e2.kind) return "pull-unavailable";
      const { summary: t2 } = e2;
      return t2.errors.length > 0 ? "pull-failed" : t2.listingComplete ? t2.pullsSkippedPendingDelete > 0 ? "pull-unavailable" : "absent" : "pull-unavailable";
    }
    const di = /* @__PURE__ */ Symbol.for("anysphere.agent-store-sync.cloud-subagent-store-preparers.v1");
    function pi() {
      const e2 = Reflect.get(globalThis, di);
      if (e2 instanceof Set) return e2;
      const t2 = /* @__PURE__ */ new Set();
      return Reflect.set(globalThis, di, t2), t2;
    }
    function mi() {
      return performance.now();
    }
    class hi {
      constructor() {
        this.timers = /* @__PURE__ */ new Map(), this.disposed = false;
      }
      schedule(e2, t2, r2, n2) {
        if (this.disposed) return;
        this.cancel(e2);
        const s2 = Math.max(0, t2 - Date.now()), o2 = setTimeout(() => {
          this.timers.get(e2) === o2 && (this.timers.delete(e2), r2());
        }, s2);
        o2.unref?.(), this.timers.set(e2, o2);
      }
      cancel(e2) {
        const t2 = this.timers.get(e2);
        void 0 !== t2 && (clearTimeout(t2), this.timers.delete(e2));
      }
      dispose() {
        this.disposed = true;
        for (const e2 of [...this.timers.keys()]) this.cancel(e2);
      }
    }
    class fi {
      constructor(e2) {
        this.entries = /* @__PURE__ */ new Map(), this.timerToken = 0, this.firing = false, this.disposed = false, this.coalesceMs = vi(e2.coalesceMs), this.onTick = e2.onTick;
      }
      setCoalesceMs(e2) {
        const t2 = vi(e2);
        if (t2 !== this.coalesceMs) {
          this.coalesceMs = t2;
          for (const [e3, t3] of this.entries) {
            const r2 = this.gridMsFor(t3.requestedDueAtMs);
            this.entries.set(e3, { ...t3, gridMs: r2, dueAtMs: this.placedDueAtMs(t3.requestedDueAtMs, r2) });
          }
          this.firing || this.arm();
        }
      }
      schedule(e2, t2, r2, n2) {
        if (this.disposed) return;
        const s2 = this.gridMsFor(t2);
        this.entries.set(e2, { requestedDueAtMs: t2, dueAtMs: this.placedDueAtMs(t2, s2), gridMs: s2, run: r2, group: n2 ?? e2 }), this.firing || this.arm();
      }
      cancel(e2) {
        this.entries.delete(e2) && (this.firing || this.arm());
      }
      dispose() {
        this.disposed = true, this.entries.clear(), this.clearTimer();
      }
      placedDueAtMs(e2, t2) {
        return e2 <= Date.now() ? e2 : yi(e2, t2);
      }
      gridMsFor(e2) {
        const t2 = e2 - Date.now();
        return t2 > 0 && t2 < this.coalesceMs ? 0 : this.coalesceMs;
      }
      arm() {
        let e2;
        for (const t3 of this.entries.values()) (void 0 === e2 || t3.dueAtMs < e2) && (e2 = t3.dueAtMs);
        if (void 0 === e2) return void this.clearTimer();
        if (void 0 !== this.timer && this.timerDueAtMs === e2) return;
        this.clearTimer(), this.timerDueAtMs = e2;
        const t2 = Math.max(0, e2 - Date.now()), r2 = this.timerToken;
        this.timer = setTimeout(() => {
          r2 === this.timerToken && this.fire();
        }, t2), this.timer.unref?.();
      }
      fire() {
        this.timer = void 0, this.timerDueAtMs = void 0, this.timerToken += 1;
        const e2 = Date.now() + this.coalesceMs, t2 = [];
        for (const [r2, n2] of this.entries) n2.dueAtMs <= e2 && t2.push([r2, n2]);
        t2.sort((e3, t3) => e3[1].dueAtMs - t3[1].dueAtMs), this.firing = true;
        try {
          const e3 = /* @__PURE__ */ new Set();
          for (const [r2, n2] of t2) if (this.entries.get(r2) === n2) {
            this.entries.delete(r2), e3.add(n2.group);
            try {
              n2.run();
            } catch {
            }
          }
          if (e3.size > 0) try {
            this.onTick?.(e3.size);
          } catch {
          }
        } finally {
          this.firing = false, this.arm();
        }
      }
      clearTimer() {
        this.timerToken += 1, void 0 !== this.timer && (clearTimeout(this.timer), this.timer = void 0), this.timerDueAtMs = void 0;
      }
    }
    function gi(e2, t2) {
      return e2.sharedScheduler ? new fi({ coalesceMs: e2.periodicCoalesceMs, onTick: t2 }) : new hi();
    }
    function yi(e2, t2) {
      if (!Number.isFinite(e2) || t2 <= 1) return e2;
      const r2 = e2 % t2;
      return 0 === r2 ? e2 : e2 + (t2 - r2);
    }
    function wi(e2) {
      const t2 = e2.nowMs ?? Date.now();
      if (void 0 === e2.previousDueAtMs) return t2 + e2.intervalMs;
      const r2 = e2.previousDueAtMs + e2.intervalMs;
      return r2 <= t2 ? t2 + e2.intervalMs : r2;
    }
    function vi(e2) {
      return !Number.isFinite(e2) || e2 < 1 ? 1 : Math.floor(e2);
    }
    async function _i(e2) {
      if (!Number.isFinite(e2.maxIdleMs) || e2.maxIdleMs <= 0) return [];
      const t2 = e2.now ?? Date.now, r2 = e2.isMountLive ?? (() => false), n2 = e2.windowId ?? `stale-root-sweep-${process.pid}`, s2 = e2.lockIdentity ?? yr(), o2 = h.join(e2.store.base, e2.store.tmpDirName);
      let i2;
      try {
        i2 = await p.promises.readdir(o2, { withFileTypes: true });
      } catch (e3) {
        if (xi(e3) && "ENOENT" === e3.code) return [];
        throw e3;
      }
      const a2 = [];
      for (const c2 of i2) {
        const i3 = c2.name;
        if (!c2.isDirectory() || c2.isSymbolicLink()) continue;
        if (i3.startsWith(bi)) {
          await Si(h.join(o2, i3));
          continue;
        }
        try {
          (0, Wt.qh)(i3);
        } catch {
          continue;
        }
        if (r2(i3)) continue;
        const l2 = (0, Wt.WX)(e2.store, i3), u2 = (0, Wt.dv)(l2);
        try {
          (0, Wt.rs)(u2);
          const r3 = ki(h.join(u2, Wt.kR));
          if (void 0 === r3 || !r3.isDirectory()) continue;
          if (t2() - r3.mtimeMs < e2.maxIdleMs) continue;
          const c3 = await fr({ lockPath: (0, Wt.N1)(l2), windowId: n2, identity: s2, now: t2, staleLockMs: Number.POSITIVE_INFINITY, mtimeUpdateMs: 0 });
          if ("acquired" !== c3.kind) continue;
          try {
            (0, Wt.rs)(u2);
            const e3 = h.join(o2, `${bi}${i3}-${(0, Ys.randomUUID)()}`);
            await p.promises.rename(u2, e3), a2.push(i3), await p.promises.rm(e3, { recursive: true, force: true });
          } finally {
            await c3.lock.dispose().catch(() => {
            });
          }
        } catch {
        }
      }
      return a2;
    }
    const bi = ".sweep-trash-";
    async function Si(e2) {
      try {
        (0, Wt.rs)(e2), await p.promises.rm(e2, { recursive: true, force: true });
      } catch {
      }
    }
    function ki(e2) {
      try {
        return p.lstatSync(e2);
      } catch (e3) {
        if (xi(e3) && "ENOENT" === e3.code) return;
        throw e3;
      }
    }
    function xi(e2) {
      return e2 instanceof Error && "string" == typeof e2.code;
    }
    const Ei = require("node:timers");
    var Ii = r(37067), Ti = r.t(Ii, 2), Ci = r(44708), Pi = r.t(Ci, 2);
    const Ai = require("node:tls");
    var Ri = r(57075), Mi = r(46466);
    const Ji = "The database connection is not open", Oi = "agent store local index is closed", Bi = "agent store audit index is closed";
    function Di(e2) {
      let t2 = e2;
      const r2 = /* @__PURE__ */ new Set();
      for (; "object" == typeof t2 && null !== t2 && !r2.has(t2); ) {
        if (r2.add(t2), void 0 !== qi(t2)) return true;
        t2 = "cause" in t2 ? t2.cause : void 0;
      }
      return false;
    }
    function qi(e2) {
      if (!("message" in e2) || "string" != typeof e2.message) return;
      const t2 = e2.message;
      return t2 === Ji ? e2 instanceof TypeError ? t2 : void 0 : t2 === Oi || t2 === Bi ? t2 : void 0;
    }
    function Ni(e2) {
      return e2 === Ji || e2 === Oi || e2 === Bi;
    }
    function Fi({ agentId: e2, summary: t2, listener: r2, pathHashSalt: n2 }) {
      if (void 0 === r2) return;
      let s2;
      for (const o2 of t2.errors) try {
        Ui({ agentId: e2, error: o2, listener: r2, pathHashSalt: n2 });
      } catch (e3) {
        void 0 === s2 && (s2 = e3);
      }
      if (void 0 !== s2) throw s2;
    }
    function Ui({ agentId: e2, error: t2, listener: r2, pathHashSalt: n2 }) {
      "symlink_refused" !== t2.code && "toctou_swap_refused" !== t2.code ? (function(e3) {
        return "fs_write_failed" === e3.code || "fs_read_failed" === e3.code;
      })(t2) && fo(r2, "onDiskFull", { agentId: e2, op: "fs_read_failed" === t2.code ? "fs_read" : "fs_write" }) : fo(r2, "onSymlinkRefused", { agentId: e2, op: "fs_read", relPathHash: Li({ relPath: t2.relPath, salt: $i(n2) }) });
    }
    function Li({ relPath: e2, salt: t2 }) {
      return (0, Ys.createHash)("sha256").update(t2).update("\0").update(e2 ?? "<unknown>").digest("hex").slice(0, 32);
    }
    function $i(e2) {
      if (void 0 === e2 || 0 === e2.length) throw new Error("notifySummaryResult: pathHashSalt is required when emitting symlink-refused events");
      return e2;
    }
    const ji = /* @__PURE__ */ new Set(["symlink_refused", "toctou_swap_refused", "fs_write_failed", "fs_read_failed"]);
    function Gi({ agentId: e2, summary: t2, listener: r2, metricsEmitter: n2, pathHashSalt: s2, sinceLastSuccessMs: o2 }) {
      let i2;
      if (void 0 !== n2) try {
        !(function({ agentId: e3, summary: t3, metricsEmitter: r3, pathHashSalt: n3, sinceLastSuccessMs: s3 }) {
          let o3;
          const i3 = (e4) => {
            void 0 === o3 && (o3 = e4);
          };
          try {
            r3.onRoundCompleted?.(Zn({ agentId: e3, summary: t3, sinceLastSuccessMs: s3 }));
          } catch (e4) {
            i3(e4);
          }
          const a2 = void 0 !== n3 && n3.length > 0 ? n3 : void 0;
          if (void 0 !== r3.onError) for (const n4 of t3.errors) {
            const t4 = { agentId: e3, op: zi(n4.code), errorClass: Ni(n4.message) ? "index_closed" : n4.code, relPathHash: void 0 === n4.relPath || void 0 === a2 ? void 0 : Li({ relPath: n4.relPath, salt: a2 }), ...void 0 === n4.timeoutClass ? {} : { timeoutClass: n4.timeoutClass } };
            try {
              r3.onError(t4);
            } catch (e4) {
              i3(e4);
            }
          }
          if (void 0 !== r3.onConflict && t3.conflicts.length > 0) {
            const n4 = (0, Wt.Pz)(e3);
            for (const s4 of t3.conflicts) {
              const t4 = { agentId: e3, storeKind: n4, relPathHash: void 0 === a2 ? void 0 : Li({ relPath: s4.relPath, salt: a2 }), conflictRelPathHash: void 0 === a2 ? void 0 : Li({ relPath: s4.conflictRelPath, salt: a2 }) };
              try {
                r3.onConflict(t4);
              } catch (e4) {
                i3(e4);
              }
            }
          }
          if (void 0 !== o3) throw o3;
        })({ agentId: e2, summary: t2, metricsEmitter: n2, pathHashSalt: s2, sinceLastSuccessMs: o2 });
      } catch (e3) {
        i2 = e3;
      }
      try {
        Fi({ agentId: e2, summary: t2, listener: r2, pathHashSalt: s2 });
      } catch (e3) {
        void 0 === i2 && (i2 = e3);
      }
      if (void 0 !== i2) throw i2;
    }
    function zi(e2) {
      switch (e2) {
        case "symlink_refused":
        case "toctou_swap_refused":
        case "fs_read_failed":
          return "fs_read";
        case "fs_write_failed":
          return "fs_write";
        case "upload_failed":
        case "write_conflict":
          return "blob_put";
        case "delete_failed":
          return "delete_files";
        case "download_failed":
          return "blob_get";
        default:
          return "unknown";
      }
    }
    const Wi = /* @__PURE__ */ Symbol("sync-round-abandoned");
    class Hi extends Error {
      constructor() {
        super("Agent store full sync stood aside for path sync"), this.name = "SyncRoundStoodAsideError";
      }
    }
    function Ki(e2) {
      return e2 instanceof Hi;
    }
    function Vi(e2) {
      return "path" === e2 || "path-yield" === e2;
    }
    class Yi {
      constructor() {
        this.pending = [], this.yielding = false;
      }
      enqueue(e2, t2) {
        return new Promise((r2, n2) => {
          const s2 = { kind: e2, run: t2, resolve: r2, reject: n2 };
          if (Vi(e2)) {
            "path" === e2 && this.fullRoundStandAside?.abort(new Hi());
            const t3 = this.pending.findIndex((e3) => "full" === e3.kind);
            -1 === t3 ? this.pending.push(s2) : this.pending.splice(t3, 0, s2);
          } else this.pending.push(s2);
          this.ensurePump();
        });
      }
      hasPendingPathRounds() {
        return this.pending.some((e2) => Vi(e2.kind));
      }
      async yieldToPathRounds() {
        if (void 0 !== this.fullRoundStandAside && !this.yielding && this.hasPendingPathRounds()) {
          this.yielding = true;
          try {
            for (; ; ) {
              if (true === this.fullRoundStandAside?.signal.aborted) return;
              const e2 = this.pending.findIndex((e3) => Vi(e3.kind));
              if (-1 === e2) return;
              const [t2] = this.pending.splice(e2, 1);
              try {
                t2.resolve(await t2.run(void 0));
              } catch (e3) {
                t2.reject(e3);
              }
            }
          } finally {
            this.yielding = false;
          }
        }
      }
      abandonInFlight() {
        const e2 = this.pending.splice(0);
        for (const t2 of e2) t2.reject(new Error("Agent store sync round abandoned by watchdog"));
        this.abandonInFlightReject?.(Wi), this.abandonInFlightReject = void 0, this.fullRoundStandAside = void 0;
      }
      async drain() {
        for (; this.pending.length > 0 || void 0 !== this.pumping; ) await (this.pumping ?? Promise.resolve());
      }
      ensurePump() {
        void 0 === this.pumping && (this.pumping = this.pump().finally(() => {
          this.pumping = void 0, this.pending.length > 0 && this.ensurePump();
        }));
      }
      async pump() {
        for (; this.pending.length > 0; ) {
          const e2 = this.pending.shift(), t2 = "full" === e2.kind ? new AbortController() : void 0;
          void 0 !== t2 && (this.fullRoundStandAside = t2);
          const r2 = e2.run(t2?.signal), n2 = new Promise((e3, t3) => {
            this.abandonInFlightReject = t3;
          });
          try {
            const t3 = await Promise.race([r2, n2]);
            e2.resolve(t3);
          } catch (t3) {
            if (t3 === Wi) {
              r2.then(e2.resolve, e2.reject);
              break;
            }
            e2.reject(t3);
          } finally {
            void 0 !== this.abandonInFlightReject && (this.abandonInFlightReject = void 0), this.fullRoundStandAside === t2 && (this.fullRoundStandAside = void 0);
          }
        }
      }
    }
    const Qi = Yn.EO, Xi = 67108864, Zi = 16777216, ea = 6e4, ta = 16777216, ra = 2592e6, na = 2880, sa = 864e5, oa = 2592e5, ia = _n, aa = bn, ca = Sn, la = kn, ua = In, da = xn, pa = An, ma = Rn, ha = 864e5;
    function fa() {
      return { s3: new Lt({ max: 8, reservedForPriority: 1 }), list: new Lt({ max: 4 }), hash: new Lt({ max: 4, reservedForPriority: 1 }), presign: new Lt({ max: 4, reservedForPriority: 1 }) };
    }
    class ga extends Error {
      constructor(e2) {
        super(e2.message), this.name = "AgentStoreSyncError", this.code = e2.code, this.relPath = e2.relPath, this.cause = e2.cause, this.httpStatus = e2.httpStatus, this.retryable = e2.retryable, this.timeoutClass = e2.timeoutClass;
      }
    }
    class ya {
      constructor(e2) {
        if (this.remoteVersionStaleFromPathWrite = false, this.lockOwnershipCheckedAtMs = 0, this.lockOwnershipCached = true, this.stateMutation = Promise.resolve(), this.inFlightRounds = /* @__PURE__ */ new Set(), this.pendingLockLost = false, this.orphanedRounds = /* @__PURE__ */ new Set(), this.roundScheduler = new Yi(), this.roundChainAbandoned = false, this.passiveRetryHandle = {}, this.passiveIndexHandle = {}, this.disposed = false, this.closeFlushPending = false, this.closing = false, this.lockReleaseDeferred = false, this.lastDisposeReleasedLock = false, this.lastPullListingComplete = false, this.recoveryDisarmed = false, this.pathHashSalt = (0, Ys.randomBytes)(16).toString("hex"), this.roundJournaledConflictEmits = [], this.pushParkedUntilMs = /* @__PURE__ */ new Map(), this.pushParkBackoff = /* @__PURE__ */ new Map(), this.roundByteBudgets = /* @__PURE__ */ new Map(), this.unboundByteBudgets = /* @__PURE__ */ new Map(), this.roundQueueActivity = /* @__PURE__ */ new Map(), this.onPassiveRetryDue = () => {
          const e3 = this.passiveRetryDueAtMs;
          this.passiveRetryDueAtMs = void 0, this.disposed || this.closing || "passive" !== this.state || this.passiveRetryIntervalMs <= 0 || void 0 === this.periodicScheduler || (this.passiveRetryDueAtMs = this.armPassiveDeadline(this.passiveRetryHandle, wi({ previousDueAtMs: e3, intervalMs: this.passiveRetryIntervalMs }), this.onPassiveRetryDue), this.unpause().catch(() => {
          }));
        }, this.onPassiveIndexDue = () => {
          const e3 = this.passiveIndexDueAtMs;
          this.passiveIndexDueAtMs = void 0, this.disposed || "passive" !== this.state || this.passiveIndexPollIntervalMs <= 0 || void 0 === this.periodicScheduler || void 0 === this.onPassiveIndexUpdated || void 0 === this.indexFilePath || (this.passiveIndexDueAtMs = this.armPassiveDeadline(this.passiveIndexHandle, wi({ previousDueAtMs: e3, intervalMs: this.passiveIndexPollIntervalMs }), this.onPassiveIndexDue), this.checkPassiveIndexProgress());
        }, this.activeRoundLane = "full", this.fullRoundParkedForYield = false, this.pathsRefreshedDuringFullRound = /* @__PURE__ */ new Set(), !h.isAbsolute(e2.filesDir)) throw new Error(`AgentStoreSyncEngine.filesDir must be absolute: ${e2.filesDir}`);
        if (!h.isAbsolute(e2.tmpDir)) throw new Error(`AgentStoreSyncEngine.tmpDir must be absolute: ${e2.tmpDir}`);
        if (this.agentId = e2.agentId, this.filesDir = h.resolve(e2.filesDir), this.tmpDir = h.resolve(e2.tmpDir), this.client = e2.client, this.index = e2.index, this.queues = e2.queues, this.maxFileSizeBytes = e2.maxFileSizeBytes ?? Qi, this.multipartUploadThresholdBytes = e2.multipartUploadThresholdBytes ?? Xi, this.multipartPartSizeBytes = e2.multipartPartSizeBytes ?? Zi, this.multipartPresignWindowSize = e2.multipartPresignWindowSize ?? 8, this.pushOrder = e2.pushOrder ?? "scan", this.pullPresignWindowSize = e2.pullPresignWindowSize ?? 500, this.listWalkConcurrency = e2.listWalkConcurrency ?? 4, this.multipartCompleteMaxAttempts = e2.multipartCompleteMaxAttempts ?? 3, this.multipartMaxRestarts = e2.multipartMaxRestarts ?? 1, this.multipartMaxConflictRenames = e2.multipartMaxConflictRenames ?? 1, this.multipartMaxExpiryRefreshes = e2.multipartMaxExpiryRefreshes ?? 1, !Number.isSafeInteger(this.multipartUploadThresholdBytes) || this.multipartUploadThresholdBytes < 1 || !Number.isSafeInteger(this.multipartPartSizeBytes) || this.multipartPartSizeBytes < 1 || !Number.isSafeInteger(this.multipartPresignWindowSize) || this.multipartPresignWindowSize < 1 || !Number.isSafeInteger(this.pullPresignWindowSize) || this.pullPresignWindowSize < 1 || !Number.isSafeInteger(this.listWalkConcurrency) || this.listWalkConcurrency < 1 || !Number.isSafeInteger(this.multipartCompleteMaxAttempts) || this.multipartCompleteMaxAttempts < 1 || !Number.isSafeInteger(this.multipartMaxRestarts) || this.multipartMaxRestarts < 0 || !Number.isSafeInteger(this.multipartMaxConflictRenames) || this.multipartMaxConflictRenames < 0 || !Number.isSafeInteger(this.multipartMaxExpiryRefreshes) || this.multipartMaxExpiryRefreshes < 0) throw new RangeError("AgentStoreSyncEngine multipart/pull-presign/list-walk controls must be safe integers within their minimums");
        this.blobIdleTimeoutMs = mc(e2.blobIdleTimeoutMs), this.blobConnectTimeoutMs = hc(e2.blobConnectTimeoutMs), this.resumeLockCallTimeoutMs = Math.max(0, e2.resumeLockCallTimeoutMs ?? 0), this.tombstoneFullRefreshRoundsValue = Wa(e2.tombstoneFullRefreshRounds), this.tombstoneFullRefreshIntervalMsValue = Ha(e2.tombstoneFullRefreshIntervalMs), this.tombstonePruneSlackMsValue = Ka(e2.tombstonePruneSlackMs), this.remoteVersionEnabledValue = true === e2.remoteVersionEnabled, this.versionFullListIntervalMsValue = Ya(e2.versionFullListIntervalMs), this.versionAuditSampleRateValue = Qa(e2.versionAuditSampleRate), void 0 !== e2.blobTransfer ? (this.blobTransfer = e2.blobTransfer, this.blobTransfer instanceof pc && (this.blobTransfer.setBlobIdleTimeoutMs(this.blobIdleTimeoutMs), this.blobTransfer.setBlobConnectTimeoutMs(this.blobConnectTimeoutMs))) : this.blobTransfer = new pc({ maxFileSizeBytes: this.maxFileSizeBytes, blobIdleTimeoutMs: this.blobIdleTimeoutMs, blobConnectTimeoutMs: this.blobConnectTimeoutMs }), this.fetchImpl = e2.fetch ?? globalThis.fetch.bind(globalThis), this.now = e2.now ?? Date.now, this.monotonicNow = e2.monotonicNow ?? mi, this.validatePresignedUrl = e2.validatePresignedUrl, this.lockProvider = e2.lockProvider, this.rootIdFence = e2.rootIdFence, this.syncMode = e2.syncMode ?? "readWrite", this.platform = e2.platform ?? process.platform, this.localStatFastPath = e2.localStatFastPath ?? "off", this.localStatFastPathAuditRate = e2.localStatFastPathAuditRate ?? 1, this.localStatRacyMarginMs = e2.localStatRacyMarginMs ?? 2e3, this.random = e2.random ?? Math.random, this.onStatFastPath = e2.onStatFastPath, this.onMultipartAbandoned = e2.onMultipartAbandoned, this.onRoundProgress = e2.onRoundProgress, this.onRoundBodyStarted = e2.onRoundBodyStarted, this.onStateChanged = e2.onStateChanged, this.passiveRetryIntervalMs = e2.passiveRetryIntervalMs ?? 5e3, this.passiveIndexPollIntervalMs = e2.passiveIndexPollIntervalMs ?? 2e3, this.periodicScheduler = e2.periodicScheduler, this.periodicSchedulerGroup = e2.periodicSchedulerGroup ?? this, this.indexFilePath = e2.indexPath, this.onPassiveIndexUpdated = e2.onPassiveIndexUpdated, this.onWarn = e2.onWarn, this.defaultSignal = e2.signal, this.shouldRelinquishLockLost = e2.shouldRelinquishLockLost ?? (() => true), this.state = e2.initialState ?? "running", "running" === this.state && void 0 !== this.lockProvider && (this.state = "paused"), this.conflictJournal = new $t.aJ((0, $t.KD)(this.filesDir), { warn: (e3, t2) => this.warn(e3, t2) }), this.pendingConflictJournal = new $t.Tj((0, $t.Zz)(this.filesDir), { warn: (e3, t2) => this.warn(e3, t2) }), this.syncStatSchema();
      }
      syncStatSchema() {
        this.index.setStatSchemaEnabled(hn(this.localStatFastPath, this.platform));
      }
      getState() {
        return this.state;
      }
      conflictJournalPath() {
        return this.conflictJournal.path;
      }
      conflictJournalAppendFailureCount() {
        return this.conflictJournal.appendFailureCount();
      }
      pendingConflictJournalPath() {
        return this.pendingConflictJournal.path;
      }
      pendingConflictJournalSize() {
        return this.pendingConflictJournal.size();
      }
      notifyRoundBodyStarted(e2) {
        if (void 0 !== this.onRoundBodyStarted) try {
          this.onRoundBodyStarted(e2);
        } catch (e3) {
          this.warn("round body listener failed", e3);
        }
      }
      emitRoundProgress(e2) {
        if (void 0 !== this.onRoundProgress) try {
          this.onRoundProgress(e2);
        } catch (e3) {
          this.warn("progress listener failed", e3);
        }
      }
      progressReporter(e2) {
        const t2 = this.onRoundProgress, r2 = this.activeRoundSignal;
        return void 0 === t2 ? () => {
        } : (t3) => {
          (void 0 === r2 || !r2.aborted && this.activeRoundSignal === r2) && ("blob_put_bytes" !== e2 && "blob_get_bytes" !== e2 ? this.emitRoundProgress({ kind: e2 }) : this.emitRoundProgress({ kind: e2, bytes: t3 ?? 0 }));
        };
      }
      isRoundWaitingOnlyForQueueSlots() {
        const e2 = this.roundQueueCounts();
        return void 0 !== e2 && e2.waiting > 0 && 0 === e2.runningLocal && 0 === e2.runningNetwork;
      }
      isRoundRunningLocalWork() {
        const e2 = this.roundQueueCounts();
        return void 0 !== e2 && e2.runningLocal > 0 && 0 === e2.runningNetwork;
      }
      roundQueueCounts() {
        const e2 = this.activeRoundSignal;
        if (void 0 !== e2) return this.roundQueueActivity.get(e2);
      }
      adjustRoundQueue(e2, t2, r2) {
        if (void 0 === e2) return;
        const n2 = this.roundQueueActivity.get(e2) ?? { waiting: 0, runningLocal: 0, runningNetwork: 0 };
        n2[t2] += r2, 0 !== n2.waiting || 0 !== n2.runningLocal || 0 !== n2.runningNetwork ? this.roundQueueActivity.set(e2, n2) : this.roundQueueActivity.delete(e2);
      }
      async trackQueue(e2, t2, r2 = "network") {
        const n2 = this.activeRoundSignal, s2 = "local" === r2 ? "runningLocal" : "runningNetwork";
        this.adjustRoundQueue(n2, "waiting", 1);
        let o2 = false;
        try {
          return await e2(async () => {
            o2 = true, this.adjustRoundQueue(n2, "waiting", -1), this.adjustRoundQueue(n2, s2, 1);
            try {
              return await t2();
            } finally {
              this.adjustRoundQueue(n2, s2, -1);
            }
          });
        } finally {
          o2 || this.adjustRoundQueue(n2, "waiting", -1);
        }
      }
      warn(e2, t2) {
        if (void 0 !== this.onWarn) try {
          this.onWarn(e2, t2);
        } catch {
        }
      }
      pulledFileMode() {
        return "readOnly" === this.syncMode ? 256 : 384;
      }
      async pause() {
        await this.serialize(async () => {
          "paused" !== this.state && (this.transitionTo("paused", "pause"), await this.drainInFlightRounds(), this.attemptPendingConflictJournalFlushForShutdown(), this.orphanedRounds.size > 0 ? this.warn("pause proceeding with abandoned in-flight round; lock recovery deferred", void 0) : this.lockReleaseDeferred || await this.releaseLockIfHeld());
        });
      }
      async unpause() {
        await this.serialize(async () => {
          if (this.disposed || this.closing) return;
          if ("running" === this.state) return;
          if (void 0 === this.lockProvider) return void this.transitionTo("running", "unpause");
          if (this.orphanedRounds.size > 0) return void ("passive" !== this.state && this.transitionTo("passive", "unpause"));
          const e2 = await this.acquireLockBounded(this.lockProvider);
          if (void 0 !== e2) this.lockHandle = e2, this.lockReleaseDeferred = false, this.lockOwnershipCheckedAtMs = 0, this.lockOwnershipCached = true, this.transitionTo("running", "unpause");
          else if ("passive" !== this.state) {
            const e3 = this.lockProvider.peekHeldOwner?.();
            this.transitionTo("passive", "unpause", void 0 === e3 ? void 0 : { kind: e3.kind, samePid: e3.pid === process.pid });
          }
        });
      }
      async dispose(e2) {
        await this.serialize(async () => {
          if (this.disposed) return;
          const t2 = this.state, r2 = "running" === this.state || this.closeFlushPending, n2 = true === e2?.deferLockRelease;
          if (this.disposed = true, this.stopPassiveTimers(), "paused" !== this.state ? this.transitionTo("paused", "unmount") : this.emitStateChanged({ fromState: t2, toState: "paused", reason: "unmount" }), await this.drainInFlightRounds(), this.orphanedRounds.size > 0) return this.attemptPendingConflictJournalFlushForShutdown(), void this.warn("dispose proceeding with abandoned in-flight round; lock recovery deferred", void 0);
          !n2 && this.closeFlushPending && this.clearLockReleaseDeferredIfIdle();
          let s2 = false;
          if (r2 && !this.lockReleaseDeferred && (void 0 === this.lockProvider || void 0 !== this.lockHandle)) {
            try {
              await this.runSyncRound({ finalFlush: true, signal: this.defaultSignal });
            } catch {
            }
            s2 = 0 === this.inFlightRounds.size && 0 === this.orphanedRounds.size;
          }
          this.attemptPendingConflictJournalFlushForShutdown(), s2 && (this.lockReleaseDeferred = false), this.lockReleaseDeferred ? this.lastDisposeReleasedLock = false : (await this.releaseLockIfHeld(), this.lastDisposeReleasedLock = true);
        });
      }
      transitionTo(e2, t2, r2) {
        if (this.state === e2) return;
        const n2 = this.state;
        this.state = e2, "passive" === e2 ? (this.resetPassiveIndexBaseline(), this.startPassiveTimers()) : this.stopPassiveTimers(), this.emitStateChanged({ fromState: n2, toState: e2, reason: t2, ...void 0 === r2 ? {} : { heldBy: r2 } });
      }
      emitStateChanged(e2) {
        if (void 0 !== this.onStateChanged) try {
          this.onStateChanged({ agentId: this.agentId, ...e2 });
        } catch {
        }
      }
      resetPassiveIndexBaseline() {
        this.lastIndexMtimeMs = void 0 === this.indexFilePath ? void 0 : Fa(this.indexFilePath);
      }
      setTombstoneFullRefreshRounds(e2) {
        this.tombstoneFullRefreshRoundsValue = Wa(e2);
      }
      setTombstoneFullRefreshIntervalMs(e2) {
        this.tombstoneFullRefreshIntervalMsValue = Ha(e2);
      }
      setTombstonePruneSlackMs(e2) {
        this.tombstonePruneSlackMsValue = Ka(e2);
      }
      setRemoteVersionEnabled(e2) {
        this.remoteVersionEnabledValue = e2;
      }
      setVersionFullListIntervalMs(e2) {
        this.versionFullListIntervalMsValue = Ya(e2);
      }
      setVersionAuditSampleRate(e2) {
        this.versionAuditSampleRateValue = Qa(e2);
      }
      setLocalStatFastPath(e2) {
        void 0 !== e2.mode && (this.localStatFastPath = e2.mode), void 0 !== e2.auditRate && Number.isFinite(e2.auditRate) && (this.localStatFastPathAuditRate = e2.auditRate), void 0 !== e2.racyMarginMs && Number.isFinite(e2.racyMarginMs) && (this.localStatRacyMarginMs = e2.racyMarginMs), this.syncStatSchema();
      }
      setPassiveRetryIntervalMs(e2) {
        e2 !== this.passiveRetryIntervalMs && (this.passiveRetryIntervalMs = e2, this.disposed || "passive" !== this.state || this.startPassiveTimers());
      }
      setPassiveIndexPollIntervalMs(e2) {
        e2 !== this.passiveIndexPollIntervalMs && (this.passiveIndexPollIntervalMs = e2, this.disposed || "passive" !== this.state || this.startPassiveTimers());
      }
      setPeriodicScheduler(e2) {
        if (e2 === this.periodicScheduler) return;
        const t2 = this.periodicScheduler, r2 = this.passiveRetryDueAtMs, n2 = this.passiveIndexDueAtMs;
        t2?.cancel(this.passiveRetryHandle), t2?.cancel(this.passiveIndexHandle), this.periodicScheduler = e2, void 0 !== r2 && e2.schedule(this.passiveRetryHandle, r2, this.onPassiveRetryDue, this.periodicSchedulerGroup), void 0 !== n2 && e2.schedule(this.passiveIndexHandle, n2, this.onPassiveIndexDue, this.periodicSchedulerGroup);
      }
      startPassiveTimers() {
        this.stopPassiveTimers(), this.disposed || void 0 === this.lockProvider || (this.passiveRetryIntervalMs > 0 && (void 0 !== this.periodicScheduler ? this.passiveRetryDueAtMs = this.armPassiveDeadline(this.passiveRetryHandle, wi({ intervalMs: this.passiveRetryIntervalMs }), this.onPassiveRetryDue) : (this.passiveRetryTimer = setInterval(() => {
          this.disposed || this.closing || "passive" !== this.state || this.unpause().catch(() => {
          });
        }, this.passiveRetryIntervalMs), this.passiveRetryTimer.unref?.())), this.passiveIndexPollIntervalMs > 0 && void 0 !== this.onPassiveIndexUpdated && void 0 !== this.indexFilePath && (void 0 !== this.periodicScheduler ? this.passiveIndexDueAtMs = this.armPassiveDeadline(this.passiveIndexHandle, wi({ intervalMs: this.passiveIndexPollIntervalMs }), this.onPassiveIndexDue) : (this.passiveIndexTimer = setInterval(() => {
          this.checkPassiveIndexProgress();
        }, this.passiveIndexPollIntervalMs), this.passiveIndexTimer.unref?.()), this.checkPassiveIndexProgress()));
      }
      armPassiveDeadline(e2, t2, r2) {
        return this.periodicScheduler?.schedule(e2, t2, r2, this.periodicSchedulerGroup), t2;
      }
      checkPassiveIndexProgress() {
        if (this.disposed || "passive" !== this.state || void 0 === this.indexFilePath) return;
        const e2 = Fa(this.indexFilePath);
        if (void 0 !== e2) if (void 0 !== this.lastIndexMtimeMs) {
          if (e2 > this.lastIndexMtimeMs) {
            this.lastIndexMtimeMs = e2;
            try {
              this.onPassiveIndexUpdated?.({ agentId: this.agentId, mtimeMs: e2 });
            } catch {
            }
          }
        } else this.lastIndexMtimeMs = e2;
      }
      stopPassiveTimers() {
        void 0 !== this.passiveRetryTimer && (clearInterval(this.passiveRetryTimer), this.passiveRetryTimer = void 0), void 0 !== this.passiveIndexTimer && (clearInterval(this.passiveIndexTimer), this.passiveIndexTimer = void 0), this.periodicScheduler?.cancel(this.passiveRetryHandle), this.periodicScheduler?.cancel(this.passiveIndexHandle), this.passiveRetryDueAtMs = void 0, this.passiveIndexDueAtMs = void 0;
      }
      async releaseLockIfHeld() {
        const e2 = this.lockHandle;
        if (void 0 === e2) return;
        this.lockHandle = void 0;
        const t2 = e2.release().catch(() => {
        });
        await this.raceResumeLockCall(t2, void 0);
      }
      async relinquishLock(e2 = "lock_lost") {
        void 0 !== this.lockProvider && await this.serialize(async () => {
          if (!this.disposed && "running" === this.state) {
            if (this.closeFlushPending || !this.shouldRelinquishLockLost()) return this.lockOwnershipCheckedAtMs = 0, void (this.lockOwnershipCached = true);
            await this.releaseLockIfHeld(), this.transitionTo("passive", e2);
          }
        });
      }
      markCloseFlushPending() {
        this.closeFlushPending = true;
      }
      markClosing() {
        this.closing = true;
      }
      markLockUnhealthy() {
        this.lockReleaseDeferred = true, this.lockHandle?.markUnhealthy?.();
      }
      releasedLockOnDispose() {
        return this.lastDisposeReleasedLock;
      }
      clearLockReleaseDeferredIfIdle() {
        this.lockReleaseDeferred && 0 === this.inFlightRounds.size && 0 === this.orphanedRounds.size && (this.lockReleaseDeferred = false);
      }
      async revalidateLockOwnership() {
        void 0 !== this.lockProvider && await this.serialize(async () => {
          if (this.disposed || this.closing || "running" !== this.state || void 0 === this.lockHandle) return;
          this.lockOwnershipCheckedAtMs = 0;
          false === await this.raceResumeLockCall(this.isLockStillOwnedOnDisk(), "timeout") && (await this.releaseLockIfHeld(), this.transitionTo("passive", "lock_lost"));
        });
      }
      async raceResumeLockCall(e2, t2) {
        const r2 = this.resumeLockCallTimeoutMs;
        if (r2 <= 0) return await e2;
        let n2;
        const s2 = new Promise((e3) => {
          n2 = setTimeout(() => e3(t2), r2), n2.unref?.();
        });
        try {
          return await Promise.race([e2, s2]);
        } finally {
          void 0 !== n2 && clearTimeout(n2);
        }
      }
      async acquireLockBounded(e2) {
        const t2 = this.resumeLockCallTimeoutMs, r2 = e2.acquire();
        if (t2 <= 0) return await r2;
        let n2;
        const s2 = new Promise((e3) => {
          n2 = setTimeout(() => e3("timeout"), t2), n2.unref?.();
        });
        let o2;
        try {
          o2 = await Promise.race([r2, s2]);
        } finally {
          void 0 !== n2 && clearTimeout(n2);
        }
        if ("timeout" !== o2) return o2;
        r2.then((e3) => this.releaseOrphanedLockHandle(e3)).catch(() => {
        });
      }
      async releaseOrphanedLockHandle(e2) {
        if (void 0 !== e2 && e2 !== this.lockHandle) try {
          await e2.release();
        } catch {
        }
      }
      async isLockStillOwnedOnDisk() {
        const e2 = this.lockHandle;
        if (void 0 === e2?.verifyStillOwned) return true;
        const t2 = this.now();
        if (0 !== this.lockOwnershipCheckedAtMs && t2 - this.lockOwnershipCheckedAtMs < 1e3) return this.lockOwnershipCached;
        let r2;
        try {
          r2 = await e2.verifyStillOwned();
        } catch {
          r2 = true;
        }
        return this.lockOwnershipCheckedAtMs = t2, this.lockOwnershipCached = r2, r2;
      }
      async assertRoundStillOwnsLock(e2, t2) {
        if (this.throwIfRoundAborted(e2), true === t2?.bypassCache && (this.lockOwnershipCheckedAtMs = 0), !await this.isLockStillOwnedOnDisk()) throw this.pendingLockLost = true, new ga({ code: "lock_held_by_other", relPath: e2, message: `Agent store engine for ${this.agentId} lost the write lock to another holder` });
      }
      async drainInFlightRounds() {
        for (await this.roundScheduler.drain(); this.inFlightRounds.size > 0; ) await Promise.allSettled([...this.inFlightRounds]);
      }
      async serialize(e2) {
        const t2 = this.stateMutation.then(e2, e2);
        this.stateMutation = t2.then(Ia, Ia), await t2;
      }
      async forceSync(e2) {
        const t2 = e2?.signal ?? this.defaultSignal;
        return this.throwIfSignalAborted(t2), await this.scheduleRound("full", (r2) => this.runSyncRound({ signal: wc(t2, r2), remoteUnchangedVersion: e2?.remoteUnchangedVersion, roundOwner: e2?.roundOwner }));
      }
      versionToProbe() {
        return this.remoteVersionToSend();
      }
      async syncPaths(e2, t2) {
        const r2 = t2?.signal ?? this.defaultSignal;
        return this.throwIfSignalAborted(r2), await this.scheduleRound(t2?.lane ?? "path", () => this.runSyncPaths(e2, r2));
      }
      async pullPaths(e2, t2) {
        const r2 = t2?.signal ?? this.defaultSignal;
        return this.throwIfSignalAborted(r2), await this.scheduleRound(t2?.lane ?? "path", () => this.withPublishedRoundSignal(r2, void 0, () => this.runPullPathsBody(e2)));
      }
      async yieldToPathRounds() {
        if ("full" === this.activeRoundLane && this.roundScheduler.hasPendingPathRounds()) {
          this.fullRoundParkedForYield = true;
          try {
            await this.roundScheduler.yieldToPathRounds();
          } finally {
            this.fullRoundParkedForYield = false, this.activeRoundLane = "full";
          }
          this.throwIfRoundAborted();
        }
      }
      notePathsRefreshedForParkedFullRound(e2, t2) {
        if (!this.fullRoundParkedForYield) return;
        const r2 = new Set(t2.errors.map((e3) => e3.relPath));
        for (const t3 of e2) r2.has(t3) || this.pathsRefreshedDuringFullRound.add(t3);
      }
      async runPullPathsBody(e2) {
        const t2 = tc("pull-path");
        if (!this.syncRoundStillAuthorized()) return this.throwIfRoundAborted(), t2;
        await this.assertRoundStillOwnsLock(), this.assertRootStillBound("pull path round");
        const r2 = this.monotonicNow();
        if (this.throwIfRoundAborted(), !this.tryRemoveObstructingFilesRoot(t2)) return t2.durationMs = this.monotonicNow() - r2, t2;
        this.ensureDirsExist();
        const n2 = /* @__PURE__ */ new Map();
        for (const r3 of e2) {
          let e3;
          try {
            e3 = v(r3);
          } catch (e4) {
            t2.refusals++, t2.errors.push({ relPath: r3, code: "not_regular_file", message: e4 instanceof Error ? e4.message : `Unsafe path: ${r3}` });
            continue;
          }
          if ((0, Wt.TM)(e3)) {
            t2.reservedPathsSkipped = (t2.reservedPathsSkipped ?? 0) + 1;
            continue;
          }
          const s3 = Ua(e3), o2 = n2.get(s3);
          void 0 === o2 ? n2.set(s3, [e3]) : o2.includes(e3) || o2.push(e3);
        }
        const s2 = [];
        let i2 = false, a2 = true;
        const c2 = [];
        for (const [e3, r3] of n2) {
          this.throwIfRoundAborted();
          const n3 = this.monotonicNow();
          let l2;
          try {
            l2 = await this.runQueuedControlRpc(this.queues.list, "listing_page", () => this.client.listFiles({ agentId: this.agentId, relPath: e3, tombstoneMode: o.hw.OMIT, signal: this.activeRoundSignal }));
          } catch (e4) {
            this.rethrowIfRoundAbort(e4), this.rethrowIfLockLost(e4), a2 = false;
            for (const n4 of r3) t2.errors.push({ relPath: n4, code: e4 instanceof ga ? e4.code : "list_failed", message: e4 instanceof Error ? e4.message : String(e4), ...yc(e4) });
            continue;
          } finally {
            t2.listMs = (t2.listMs ?? 0) + (this.monotonicNow() - n3);
          }
          if (i2 = true, true === l2.listingComplete) c2.push(...r3);
          else {
            a2 = false;
            for (const e4 of l2.files) {
              let t3;
              try {
                t3 = v(e4.relPath);
              } catch {
                continue;
              }
              r3.includes(t3) && c2.push(t3);
            }
          }
          s2.push(...this.pullCandidatesFromListing(l2.files, t2, new Set(r3)));
        }
        return t2.listingComplete = i2 && a2, await this.pullCandidates(s2, t2), this.notePathsRefreshedForParkedFullRound(c2, t2), t2.durationMs = this.monotonicNow() - r2, t2;
      }
      runQueued(e2, t2, r2 = "network") {
        return this.trackQueue((t3) => "full" !== this.activeRoundLane && void 0 !== e2.enqueuePriority ? e2.enqueuePriority(t3) : e2.enqueue(t3), t2, r2);
      }
      async runQueuedControlRpc(e2, t2, r2) {
        const n2 = this.progressReporter(t2), s2 = await this.runQueued(e2, r2);
        return n2(), s2;
      }
      cappedRoundBytes(e2, t2, r2) {
        const n2 = this.roundByteBudget(`${e2}\0${t2}\0${r2}`), s2 = this.progressReporter(e2);
        return (e3) => {
          const t3 = r2 - n2.reported, o2 = t3 <= 0 ? 0 : Math.min(Math.max(0, e3), t3);
          n2.reported += o2, s2(o2);
        };
      }
      roundByteBudget(e2) {
        const t2 = this.activeRoundSignal, r2 = void 0 === t2 ? this.unboundByteBudgets : this.budgetsForRound(t2);
        let n2 = r2.get(e2);
        return void 0 === n2 && (n2 = { reported: 0 }, r2.set(e2, n2)), n2;
      }
      budgetsForRound(e2) {
        let t2 = this.roundByteBudgets.get(e2);
        return void 0 === t2 && (t2 = /* @__PURE__ */ new Map(), this.roundByteBudgets.set(e2, t2)), t2;
      }
      assertRoundAuthorized() {
        if (this.disposed) throw new ga({ code: "paused", message: `Agent store engine for ${this.agentId} is disposed` });
        if ("paused" === this.state) throw new ga({ code: "paused", message: `Agent store engine for ${this.agentId} is paused` });
        if ("passive" === this.state) throw new ga({ code: "lock_held_by_other", message: `Agent store engine for ${this.agentId} lock is held by another holder` });
        if (void 0 !== this.lockProvider && void 0 === this.lockHandle) throw new ga({ code: "lock_held_by_other", message: `Agent store engine for ${this.agentId} does not hold the write lock` });
      }
      listingSnapshotStaleFor(e2) {
        return "full" === this.activeRoundLane && this.pathsRefreshedDuringFullRound.has(e2);
      }
      async scheduleRound(e2, t2) {
        let r2;
        this.assertRoundAuthorized(), await this.serialize(async () => {
          if (this.assertRoundAuthorized(), this.roundChainAbandoned) {
            if (this.orphanedRounds.size > 0 || this.inFlightRounds.size > 0) throw new ga({ code: "round_aborted", message: "previous sync round still draining after watchdog abandon" });
            this.roundChainAbandoned = false;
          }
          r2 = this.roundScheduler.enqueue(e2, async (r3) => {
            this.activeRoundLane = e2, "full" === e2 && this.pathsRefreshedDuringFullRound.clear();
            const n2 = t2(r3), s2 = n2.then(Ia, Ia);
            this.inFlightRounds.add(s2);
            try {
              return await n2;
            } finally {
              this.inFlightRounds.delete(s2);
            }
          });
        });
        try {
          return await r2;
        } finally {
          this.pendingLockLost && (this.pendingLockLost = false, this.shouldRelinquishLockLost() ? await this.relinquishLock("lock_lost") : (this.lockOwnershipCheckedAtMs = 0, this.lockOwnershipCached = true));
        }
      }
      releaseWedgedRoundChain() {
        this.roundChainAbandoned = true, this.roundScheduler.abandonInFlight();
        for (const e2 of this.inFlightRounds) this.orphanedRounds.add(e2), e2.finally(() => {
          this.orphanedRounds.delete(e2), 0 !== this.orphanedRounds.size || "passive" !== this.state || this.disposed || this.closing || this.unpause().catch(() => {
          });
        });
        this.inFlightRounds.clear();
      }
      hasAbandonedInFlightRounds() {
        return this.orphanedRounds.size > 0;
      }
      hasLiveRoundWork() {
        return this.inFlightRounds.size > 0 || this.orphanedRounds.size > 0;
      }
      hasInFlightRounds() {
        return this.inFlightRounds.size > 0;
      }
      whenAbandonedInFlightRoundsIdle() {
        return 0 === this.orphanedRounds.size ? Promise.resolve() : Promise.allSettled([...this.orphanedRounds]).then(() => this.whenAbandonedInFlightRoundsIdle());
      }
      throwIfRoundAborted(e2) {
        const t2 = this.activeRoundSignal;
        true === t2?.aborted && fc(e2, t2.reason);
      }
      throwIfSignalAborted(e2) {
        true === e2?.aborted && fc(void 0, e2.reason);
      }
      isRoundAbortError(e2) {
        return e2 instanceof ga ? "round_aborted" === e2.code : true === this.activeRoundSignal?.aborted && (e2 instanceof ne.T && (e2.code === se.C.DeadlineExceeded || e2.code === se.C.Canceled) || e2 instanceof Error && ("AbortError" === e2.name || "TimeoutError" === e2.name));
      }
      rethrowIfRoundAbort(e2, t2) {
        if (Ki(e2)) throw e2;
        if (this.isRoundAbortError(e2)) {
          if (e2 instanceof ga && "round_aborted" === e2.code) throw e2;
          fc(t2, this.activeRoundSignal?.reason ?? e2);
        }
      }
      rethrowIfLockLost(e2) {
        if (e2 instanceof ga && "lock_held_by_other" === e2.code) throw e2;
      }
      async runSyncRound(e2 = {}) {
        return await this.withPublishedRoundSignal(e2.signal, e2.roundOwner, () => this.runSyncRoundBody(e2));
      }
      async withPublishedRoundSignal(e2, t2, r2) {
        const n2 = new AbortController();
        let s2;
        if (void 0 !== e2) if (e2.aborted) n2.abort(e2.reason);
        else {
          const t3 = () => n2.abort(e2.reason);
          e2.addEventListener("abort", t3, { once: true }), s2 = () => e2.removeEventListener("abort", t3);
        }
        const o2 = this.activeRoundSignal, i2 = this.activeRoundAbort;
        this.activeRoundSignal = n2.signal, this.activeRoundAbort = n2, this.notifyRoundBodyStarted(t2);
        try {
          return await r2();
        } finally {
          this.roundByteBudgets.delete(n2.signal), this.activeRoundSignal = o2, this.activeRoundAbort = i2, s2?.();
        }
      }
      abortActiveRound(e2) {
        this.activeRoundAbort?.abort(e2);
      }
      async awaitInFlightRoundsSettled() {
        await this.drainInFlightRounds();
      }
      async runSyncRoundBody(e2 = {}) {
        if (e2.finalFlush) {
          if (void 0 !== this.lockProvider && void 0 === this.lockHandle) return tc();
        } else {
          if (!this.syncRoundStillAuthorized()) return this.throwIfRoundAborted(), tc();
          await this.assertRoundStillOwnsLock();
        }
        this.assertRootStillBound("full round"), this.throwIfRoundAborted();
        const t2 = this.monotonicNow(), r2 = tc();
        let n2 = false;
        const s2 = "readOnly" !== this.syncMode;
        if (s2 && this.isDeletionArmed() && !this.recoveryDisarmed) {
          const e3 = this.checkRecordedFilesRootIdentity();
          if ("compromised" === e3) {
            if (!this.prepareIdentityRecovery(r2)) return r2.durationMs = this.monotonicNow() - t2, r2;
            n2 = true;
          } else if ("unreadable" === e3) return r2.errors.push({ relPath: void 0, code: "fs_read_failed", message: "Agent store files root temporarily unreadable; deletion journal retained" }), r2.durationMs = this.monotonicNow() - t2, r2;
        }
        if (!this.tryRemoveObstructingFilesRoot(r2)) return r2.durationMs = this.monotonicNow() - t2, r2;
        this.ensureDirsExist();
        let o2 = this.probeFilesRootIdentity();
        if (!n2) {
          if (await this.pushAll(r2), r2.identityRecoveryWipeFailed) return r2.durationMs = this.monotonicNow() - t2, r2;
          r2.recoveryDisarms > 0 && (n2 = true, this.ensureDirsExist(), o2 = this.probeFilesRootIdentity());
        }
        this.throwIfRoundAborted(), await this.pullAll(r2, { remoteUnchangedVersion: n2 ? void 0 : e2.remoteUnchangedVersion });
        let i2 = this.probeFilesRootIdentity();
        const a2 = Ca({ start: o2, end: i2 });
        if (s2 && a2 && 0 === r2.recoveryDisarms && this.isDeletionArmed() && !this.recoveryDisarmed) {
          if (!this.prepareIdentityRecovery(r2)) return r2.durationMs = this.monotonicNow() - t2, r2;
          n2 = true, this.ensureDirsExist();
          if (!await this.pullAllWithFollowUpWipe(r2)) return r2.durationMs = this.monotonicNow() - t2, r2;
          i2 = this.probeFilesRootIdentity();
        } else if (s2 && a2 && (n2 || r2.recoveryDisarms > 0)) {
          if (!this.clearCompromisedFilesRoot(r2)) return r2.durationMs = this.monotonicNow() - t2, r2;
          this.ensureDirsExist();
          if (!await this.pullAllWithFollowUpWipe(r2)) return r2.durationMs = this.monotonicNow() - t2, r2;
          i2 = this.probeFilesRootIdentity();
        }
        return a2 || 0 !== r2.recoveryDisarms || this.maybeArmDeletionDetection({ summary: r2, filesRootIdentity: i2 }), r2.durationMs = this.monotonicNow() - t2, r2;
      }
      async runSyncPaths(e2, t2) {
        return await this.withPublishedRoundSignal(t2, void 0, () => this.runSyncPathsBody(e2, t2));
      }
      async runSyncPathsBody(e2, t2) {
        if (!this.syncRoundStillAuthorized()) return this.throwIfRoundAborted(), tc("path");
        await this.assertRoundStillOwnsLock(), this.assertRootStillBound("path round");
        const r2 = this.monotonicNow(), n2 = tc("path");
        if (this.throwIfRoundAborted(), "readOnly" !== this.syncMode && this.isDeletionArmed() && !this.recoveryDisarmed) {
          const e3 = this.checkRecordedFilesRootIdentity();
          if ("compromised" === e3) return this.prepareIdentityRecovery(n2) ? (this.ensureDirsExist(), await this.pullAllWithFollowUpWipe(n2), n2.durationMs = this.monotonicNow() - r2, n2) : (n2.durationMs = this.monotonicNow() - r2, n2);
          if ("unreadable" === e3) return n2.errors.push({ relPath: void 0, code: "fs_read_failed", message: "Agent store files root temporarily unreadable; deletion journal retained" }), n2.durationMs = this.monotonicNow() - r2, n2;
        }
        if (!this.tryRemoveObstructingFilesRoot(n2)) return n2.durationMs = this.monotonicNow() - r2, n2;
        if (this.ensureDirsExist(), "readOnly" === this.syncMode) return this.stripJournaledPendingConflictMirrors(), this.roundJournaledConflictEmits = [], this.flushPendingConflictJournalEmits(), this.stripJournaledPendingConflictMirrors(), n2.durationMs = this.monotonicNow() - r2, n2;
        this.stripJournaledPendingConflictMirrors(), this.roundJournaledConflictEmits = [], this.flushPendingConflictJournalEmits();
        try {
          await this.pushPathsBody(e2, n2, t2);
        } catch (e3) {
          throw this.remoteVersionStaleFromPathWrite = true, e3;
        } finally {
          this.stripJournaledPendingConflictMirrors();
        }
        return ec(n2) && (this.remoteVersionStaleFromPathWrite = true), n2.durationMs = this.monotonicNow() - r2, n2;
      }
      async pushPathsBody(e2, t2, r2) {
        const n2 = /* @__PURE__ */ new Set(), s2 = [], o2 = [], i2 = /* @__PURE__ */ new Map();
        for (const r3 of e2) {
          let e3, a3;
          try {
            e3 = v(r3);
          } catch (e4) {
            t2.refusals++, t2.errors.push({ relPath: r3, code: "not_regular_file", message: e4 instanceof Error ? e4.message : `Unsafe path: ${r3}` });
            continue;
          }
          if (n2.has(e3)) continue;
          if (n2.add(e3), (0, Wt.TM)(e3)) {
            t2.reservedPathsSkipped = (t2.reservedPathsSkipped ?? 0) + 1;
            continue;
          }
          try {
            a3 = T({ base: this.filesDir, relPath: e3 });
          } catch (r4) {
            if (r4 instanceof f) {
              t2.refusals++, t2.errors.push({ relPath: e3, code: "symlink_refused" === r4.code ? "symlink_refused" : "not_regular_file", message: r4.message });
              continue;
            }
            t2.errors.push({ relPath: e3, code: "fs_read_failed", message: r4 instanceof Error ? r4.message : String(r4) });
            continue;
          }
          if ("absent" === a3.kind) continue;
          if ("refused" === a3.kind) {
            s2.push(a3.refusal), t2.refusals++, t2.errors.push({ relPath: a3.refusal.relPath, code: a3.refusal.reason, message: `Skipped ${a3.refusal.relPath} (${a3.refusal.reason})` });
            continue;
          }
          const c3 = e3.toLowerCase(), l3 = i2.get(c3);
          if (void 0 !== l3 && l3 !== e3) {
            t2.errors.push({ relPath: e3, code: "case_collision", message: `Agent store has case-colliding paths: ${l3} and ${e3}` });
            continue;
          }
          i2.set(c3, e3);
          const u2 = a3.entry;
          u2.size > this.maxFileSizeBytes ? t2.errors.push({ relPath: e3, code: "file_too_large", message: `File ${e3} (${u2.size} bytes) exceeds the ${this.maxFileSizeBytes}-byte cap` }) : o2.push({ relPath: e3, absPath: u2.absPath, size: u2.size, mtimeMs: u2.mtimeMs, dev: u2.dev, ino: u2.ino, existing: this.index.getFile(e3) });
        }
        const a2 = this.monotonicNow(), c2 = await Promise.all(o2.map((e3) => this.runQueued(this.queues.hash, () => (this.throwIfRoundAborted(e3.relPath), this.hashCandidate(e3)), "local")));
        t2.hashMs = (t2.hashMs ?? 0) + (this.monotonicNow() - a2), this.throwIfRoundAborted();
        const l2 = this.selectUploadable(c2, t2);
        await this.uploadHashedCandidates(l2, t2, { preferProbeForLegacy: true, signal: r2 }), this.throwIfRoundAborted(), await this.flushPendingDeletes({ summary: t2, presentRelPaths: new Set(o2.map((e3) => e3.relPath)), refusals: s2, scopeRelPaths: n2 });
      }
      maybeArmDeletionDetection(e2) {
        const { summary: t2, filesRootIdentity: r2 } = e2;
        "readOnly" !== this.syncMode && (t2.recoveryDisarms > 0 || t2.errors.length > 0 || t2.refusals > 0 || this.lastPullListingComplete && "present" === r2.kind && (this.index.armDeletionWithIdentity(r2.identity), this.recoveryDisarmed = false));
      }
      clearCompromisedFilesRoot(e2) {
        this.assertRootStillBound("wiping files/"), this.clearRemoteVersion(e2, "before_wipe");
        try {
          return p.rmSync(this.filesDir, { recursive: true, force: true }), true;
        } catch (t2) {
          return !(!uc(t2) || "ENOENT" !== t2.code) || (e2.errors.push({ relPath: void 0, code: "fs_write_failed", message: `Failed to clear compromised agent store files root: ${t2 instanceof Error ? t2.message : String(t2)}` }), false);
        }
      }
      prepareIdentityRecovery(e2) {
        return !!this.tryRemoveObstructingFilesRoot(e2) && (!!this.clearCompromisedFilesRoot(e2) && (this.enterDeletionRecovery(e2), true));
      }
      async pullAllWithFollowUpWipe(e2) {
        const t2 = this.probeFilesRootIdentity();
        await this.pullAll(e2);
        return !Ca({ start: t2, end: this.probeFilesRootIdentity() }) || !!this.clearCompromisedFilesRoot(e2) && (this.ensureDirsExist(), await this.pullAll(e2), true);
      }
      tryRemoveObstructingFilesRoot(e2) {
        try {
          const e3 = p.lstatSync(this.filesDir);
          return e3.isDirectory() && !e3.isSymbolicLink() || p.rmSync(this.filesDir, { recursive: true, force: true }), true;
        } catch (t2) {
          return !(!uc(t2) || "ENOENT" !== t2.code) || (e2.errors.push({ relPath: void 0, code: "fs_write_failed", message: `Failed to clear obstructing agent store files root: ${t2 instanceof Error ? t2.message : String(t2)}` }), false);
        }
      }
      isDeletionArmed() {
        return "1" === this.index.getMeta(ia);
      }
      probeFilesRootIdentity() {
        try {
          const e2 = p.lstatSync(this.filesDir);
          return !e2.isDirectory() || e2.isSymbolicLink() ? { kind: "absent" } : { kind: "present", identity: { dev: e2.dev, ino: e2.ino } };
        } catch (e2) {
          return uc(e2) && "ENOENT" === e2.code ? { kind: "absent" } : { kind: "unreadable" };
        }
      }
      enterDeletionRecovery(e2) {
        this.index.disarmDeletionAndClearPending(), this.recoveryDisarmed = true, e2.recoveryDisarms++;
      }
      detectScanDeletions(e2, t2) {
        if ("readOnly" === this.syncMode) return "ok";
        if (void 0 !== this.lockProvider && void 0 === this.lockHandle) return "ok";
        if (!this.isDeletionArmed() || this.recoveryDisarmed) return "ok";
        this.assertRootStillBound("delete scan");
        const r2 = this.checkRecordedFilesRootIdentity();
        if ("compromised" === r2) return this.prepareIdentityRecovery(t2) || (t2.identityRecoveryWipeFailed = true), "abort_uploads";
        if ("unreadable" === r2) return t2.errors.push({ relPath: void 0, code: "fs_read_failed", message: "Agent store files root temporarily unreadable; pending deletes retained" }), "hold";
        const n2 = new Set(e2.files.map((e3) => e3.relPath));
        for (const r3 of this.index.listFiles()) {
          if ("tombstoned" === r3.state) continue;
          if ((0, Wt.TM)(r3.relPath)) continue;
          if (n2.has(r3.relPath)) continue;
          if (this.index.hasPendingDelete(r3.relPath)) continue;
          if (Pa(e2.refusals, r3.relPath)) continue;
          if (void 0 === r3.lastSeenEtag || 0 === r3.lastSeenEtag.length) {
            t2.legacyRowsRestored++;
            continue;
          }
          let s2;
          try {
            s2 = x({ base: this.filesDir, relPath: r3.relPath });
          } catch {
            continue;
          }
          try {
            p.lstatSync(s2);
            continue;
          } catch (e3) {
            if (!uc(e3) || "ENOENT" !== e3.code) continue;
          }
          this.index.upsertPendingDelete({ relPath: r3.relPath, baseEtag: r3.lastSeenEtag, requestedAtMs: this.now(), mutationId: (0, Ys.randomUUID)() }), t2.scanDeletesJournaled++;
        }
        return "ok";
      }
      checkRecordedFilesRootIdentity() {
        const e2 = this.index.getMeta(aa), t2 = this.index.getMeta(ca);
        if (void 0 === e2 || void 0 === t2) return "compromised";
        const r2 = this.probeFilesRootIdentity();
        switch (r2.kind) {
          case "unreadable":
            return "unreadable";
          case "absent":
            return "compromised";
          case "present":
            return String(r2.identity.dev) === e2 && String(r2.identity.ino) === t2 ? "intact" : "compromised";
          default:
            throw new Error(`unexpected files root probe: ${r2}`);
        }
      }
      syncRoundStillAuthorized() {
        return !this.disposed && ("running" === this.state && (void 0 === this.lockProvider || void 0 !== this.lockHandle));
      }
      assertRootStillBound(e2) {
        const t2 = this.rootIdFence;
        if (void 0 === t2 || !t2.enabled) return;
        const r2 = Ho(t2.rootIdPath);
        if ("present" !== r2.kind || r2.rootId !== t2.expected) {
          if ("unreadable" === r2.kind) throw new ga({ code: "fs_read_failed", message: `Agent store root id unreadable before ${e2}` });
          throw new ga({ code: "root_retired", message: `Agent store root identity changed before ${e2}` });
        }
      }
      async flushPendingDeletes(e2) {
        this.assertRootStillBound("delete flush");
        const { summary: t2, presentRelPaths: r2, refusals: n2 = [], scopeRelPaths: s2 } = e2, o2 = void 0 === s2 ? this.index.listPendingDeletes() : this.index.listPendingDeletes().filter((e3) => s2.has(e3.relPath));
        if (0 === o2.length) return void await this.flushPendingRmdirs({ summary: t2, ackedDeletePaths: [], refusals: n2, presentRelPaths: r2, scopeRelPaths: s2 });
        const i2 = [];
        for (const e3 of o2) {
          if ((0, Wt.TM)(e3.relPath)) {
            this.index.removePendingDelete(e3.relPath);
            continue;
          }
          if (r2.has(e3.relPath)) {
            this.index.removePendingDelete(e3.relPath);
            continue;
          }
          if (Pa(n2, e3.relPath)) {
            this.index.removePendingDelete(e3.relPath);
            continue;
          }
          let s3;
          try {
            s3 = x({ base: this.filesDir, relPath: e3.relPath });
          } catch {
            this.index.removePendingDelete(e3.relPath);
            continue;
          }
          try {
            p.lstatSync(s3), this.index.removePendingDelete(e3.relPath);
            continue;
          } catch (r3) {
            if (!uc(r3) || "ENOENT" !== r3.code) {
              this.index.removePendingDelete(e3.relPath), t2.errors.push({ relPath: e3.relPath, code: "delete_failed", message: r3 instanceof Error ? r3.message : String(r3) });
              continue;
            }
          }
          i2.push(e3);
        }
        if (0 === i2.length) return void await this.flushPendingRmdirs({ summary: t2, ackedDeletePaths: [], refusals: n2, presentRelPaths: r2, scopeRelPaths: s2 });
        const a2 = this.client.deleteFiles?.bind(this.client);
        if (void 0 === a2) return t2.errors.push({ relPath: void 0, code: "delete_failed", message: `Agent store client for ${this.agentId} does not support deleteFiles; ${i2.length} pending delete(s) deferred` }), void await this.flushPendingRmdirs({ summary: t2, ackedDeletePaths: [], refusals: n2, presentRelPaths: r2, scopeRelPaths: s2 });
        const c2 = [];
        for (let e3 = 0; e3 < i2.length; e3 += 500) {
          const o3 = i2.slice(e3, e3 + 500);
          let l2;
          await this.assertRoundStillOwnsLock();
          try {
            l2 = await this.runQueuedControlRpc(this.queues.presign, "rpc", () => a2({ agentId: this.agentId, files: o3.map((e4) => ({ relPath: e4.relPath, baseEtag: e4.baseEtag, ...void 0 !== e4.mutationId ? { mutationId: e4.mutationId } : {} })), signal: this.activeRoundSignal }));
          } catch (o4) {
            return this.rethrowIfRoundAbort(o4), t2.errors.push({ relPath: void 0, code: "delete_failed", message: `Failed to delete ${i2.length - e3} agent store file(s): ${o4 instanceof Error ? o4.message : String(o4)}` }), void await this.flushPendingRmdirs({ summary: t2, ackedDeletePaths: c2, refusals: n2, presentRelPaths: r2, scopeRelPaths: s2 });
          }
          const u2 = new Map(l2.map((e4) => [e4.relPath, e4]));
          for (const e4 of o3) {
            const r3 = u2.get(e4.relPath);
            if (void 0 !== r3) switch (this.index.removePendingDelete(e4.relPath), r3.status) {
              case "deleted":
              case "already_deleted": {
                const n3 = r3.tombstoneEtag;
                if (void 0 !== n3 && n3.length > 0) {
                  const t3 = this.index.getFile(e4.relPath);
                  this.index.upsertFile({ relPath: e4.relPath, lastSyncedSha: t3?.lastSyncedSha ?? "", ...void 0 !== t3?.lastSeenEtag ? { lastSeenEtag: t3.lastSeenEtag } : {}, size: t3?.size ?? 0, lastSyncedMs: this.now(), direction: t3?.direction ?? "pushed", state: "tombstoned", tombstoneEtag: n3, deletedAtMs: this.now() });
                } else this.index.deleteFile(e4.relPath);
                t2.filesDeletedRemote++, c2.push(e4.relPath);
                break;
              }
              case "conflict":
                t2.deleteConflicts++;
            }
            else t2.errors.push({ relPath: e4.relPath, code: "delete_failed", message: `Server returned no delete outcome for ${e4.relPath}` });
          }
        }
        await this.flushPendingRmdirs({ summary: t2, ackedDeletePaths: c2, refusals: n2, presentRelPaths: r2, scopeRelPaths: s2 });
      }
      async flushPendingRmdirs(e2) {
        const { summary: t2, ackedDeletePaths: r2, refusals: n2, presentRelPaths: s2 } = e2, o2 = /* @__PURE__ */ new Set();
        for (const e3 of r2) {
          const t3 = Oa(e3);
          void 0 !== t3 && "" !== t3 && o2.add(t3);
        }
        for (const t3 of this.index.listPendingRmdirs()) (void 0 === e2.scopeRelPaths || Na(t3.relPath, e2.scopeRelPaths)) && o2.add(t3.relPath);
        if (0 === o2.size) return;
        const i2 = this.client.rmdir?.bind(this.client), c2 = (e3) => (this.index.hasLiveDescendantFiles(e3) || (function(e4, t3) {
          if ("" === t3) return e4.size > 0;
          const r3 = `${t3}/`;
          for (const t4 of e4) if (t4.startsWith(r3)) return true;
          return false;
        })(s2, e3) || !!Pa(n2, e3)) && (this.index.removePendingRmdir(e3), true);
        if (void 0 === i2) {
          for (const e3 of o2) c2(e3) || this.hasPendingDeletesUnder(e3) || this.index.hasPendingRmdir(e3) || this.index.upsertPendingRmdir({ relPath: e3, requestedAtMs: this.now() });
          return;
        }
        for (const e3 of o2) c2(e3) || this.index.upsertPendingRmdir({ relPath: e3, requestedAtMs: this.now() });
        const l2 = [...o2].sort(qa), u2 = /* @__PURE__ */ new Set();
        let d2 = 0;
        for (; l2.length > 0; ) {
          const e3 = l2.shift();
          if ("" === e3 || u2.has(e3)) continue;
          if (u2.add(e3), Da(e3) > Aa) {
            this.index.removePendingRmdir(e3);
            const t3 = Oa(e3);
            void 0 === t3 || "" === t3 || u2.has(t3) || (this.index.upsertPendingRmdir({ relPath: t3, requestedAtMs: this.now() }), l2.push(t3), l2.sort(qa));
            continue;
          }
          if (this.hasPendingDeletesUnder(e3)) continue;
          if (c2(e3)) continue;
          let r3;
          try {
            r3 = C({ base: this.filesDir, relPath: e3 });
          } catch (t3) {
            if (t3 instanceof f) {
              this.index.removePendingRmdir(e3);
              continue;
            }
            if (!uc(t3) || "ENOENT" !== t3.code) continue;
            r3 = { kind: "absent" };
          }
          if ("refused" === r3.kind) {
            if (!(r3.refusal.relPath === e3 && "not_regular_file" === r3.refusal.reason)) {
              this.index.removePendingRmdir(e3);
              continue;
            }
          }
          if ("directory" === r3.kind) continue;
          if (d2 >= Ra) break;
          this.index.upsertPendingRmdir({ relPath: e3, requestedAtMs: this.now() }), await this.assertRoundStillOwnsLock(), d2 += 1;
          try {
            await this.runQueuedControlRpc(this.queues.presign, "rpc", () => i2({ agentId: this.agentId, relPath: e3, signal: this.activeRoundSignal }));
          } catch (r4) {
            if (this.rethrowIfRoundAbort(r4), r4 instanceof a) {
              this.index.removePendingRmdir(e3);
              let t3 = Oa(e3);
              for (; void 0 !== t3 && "" !== t3; ) this.index.removePendingRmdir(t3), u2.add(t3), t3 = Oa(t3);
              continue;
            }
            return void t2.errors.push({ relPath: e3, code: "delete_failed", message: `Failed to rmdir ${e3}: ${r4 instanceof Error ? r4.message : String(r4)}` });
          }
          this.index.removePendingRmdir(e3), t2.rmdirPushed = (t2.rmdirPushed ?? 0) + 1;
          const n3 = Oa(e3);
          void 0 === n3 || "" === n3 || u2.has(n3) || (this.index.upsertPendingRmdir({ relPath: n3, requestedAtMs: this.now() }), l2.push(n3), l2.sort(qa));
        }
      }
      hasPendingDeletesUnder(e2) {
        return this.index.hasPendingDeletesUnder(e2);
      }
      hasLiveIndexRowsUnder(e2) {
        return this.index.hasLiveFilesUnder(e2);
      }
      async pushAll(e2 = tc()) {
        this.ensureDirsExist(), void 0 === this.activeRoundSignal && this.unboundByteBudgets.clear(), this.stripJournaledPendingConflictMirrors(), this.roundJournaledConflictEmits = [], this.flushPendingConflictJournalEmits();
        try {
          return await this.pushAllBody(e2);
        } finally {
          this.stripJournaledPendingConflictMirrors();
        }
      }
      async pushAllBody(e2) {
        const t2 = I(this.filesDir);
        e2.reservedPathsSkipped = (e2.reservedPathsSkipped ?? 0) + (function(e3) {
          const t3 = [];
          let r3 = 0;
          for (const n3 of e3.files) (0, Wt.TM)(n3.relPath) ? r3++ : t3.push(n3);
          return e3.files = t3, r3;
        })(t2);
        const r2 = this.detectScanDeletions(t2, e2);
        if ("readOnly" === this.syncMode) {
          for (const e3 of this.index.listPendingDeletes()) this.index.removePendingDelete(e3.relPath);
          for (const e3 of this.index.listPendingRmdirs()) this.index.removePendingRmdir(e3.relPath);
        } else "ok" === r2 && await this.flushPendingDeletes({ summary: e2, presentRelPaths: new Set(t2.files.map((e3) => e3.relPath)), refusals: t2.refusals });
        if ("readOnly" === this.syncMode || "abort_uploads" === r2 || e2.recoveryDisarms > 0) return e2;
        for (const r3 of t2.refusals) e2.refusals++, e2.errors.push({ relPath: r3.relPath, code: r3.reason, message: `Skipped ${r3.relPath} (${r3.reason})` });
        const n2 = /* @__PURE__ */ new Map();
        for (const e3 of this.index.listFiles()) n2.set(e3.relPath, e3);
        const s2 = [], o2 = /* @__PURE__ */ new Map();
        for (const r3 of t2.files) {
          const t3 = r3.relPath.toLowerCase(), i3 = o2.get(t3);
          if (void 0 !== i3 && i3 !== r3.relPath) {
            e2.errors.push({ relPath: r3.relPath, code: "case_collision", message: `Agent store has case-colliding paths: ${i3} and ${r3.relPath}` });
            continue;
          }
          if (o2.set(t3, r3.relPath), r3.size > this.maxFileSizeBytes) {
            e2.errors.push({ relPath: r3.relPath, code: "file_too_large", message: `File ${r3.relPath} (${r3.size} bytes) exceeds the ${this.maxFileSizeBytes}-byte cap` });
            continue;
          }
          const a3 = n2.get(r3.relPath), c2 = { relPath: r3.relPath, absPath: r3.absPath, size: r3.size, mtimeMs: r3.mtimeMs, dev: r3.dev, ino: r3.ino, existing: a3 };
          s2.push(c2);
        }
        const i2 = await Promise.all(s2.map((e3) => this.trackQueue((e4) => this.queues.hash.enqueue(e4), () => (this.throwIfRoundAborted(e3.relPath), this.hashCandidate(e3)), "local"))), a2 = this.selectUploadable(i2, e2);
        return await this.uploadHashedCandidates(a2, e2), e2;
      }
      selectUploadable(e2, t2) {
        const r2 = [];
        for (const n2 of e2) if ("stat_unchanged" !== n2.kind) if ("error" !== n2.kind) {
          if ("skip" === n2.statFastPathAudit) {
            const e3 = void 0 !== n2.existing && "tombstoned" !== n2.existing.state && n2.existing.lastSyncedSha === n2.sha && n2.existing.size === n2.size;
            this.noteStatFastPath(e3 ? "hit" : "mismatch"), e3 || this.index.clearRecordedStat(n2.relPath);
          }
          void 0 === n2.existing || "tombstoned" === n2.existing.state || n2.existing.lastSyncedSha !== n2.sha || n2.existing.size !== n2.size ? this.isPushParked(n2.relPath) ? t2.pushEntriesParked++ : r2.push(n2) : (t2.filesSkipped++, this.clearPushPark(n2.relPath), this.index.upsertFile({ ...n2.existing, lastSyncedMs: this.now(), recordedStat: this.captureRecordedStat(n2) }));
        } else t2.errors.push({ relPath: n2.relPath, code: n2.code, message: n2.message });
        else t2.filesSkipped++, this.noteStatFastPath("hit"), this.clearPushPark(n2.relPath), this.index.upsertFile({ ...n2.existing, lastSyncedMs: this.now() });
        return r2;
      }
      async uploadHashedCandidates(e2, t2, r2 = {}) {
        if (0 === e2.length) return;
        const { preconditions: n2, skippedDueToListingFailure: s2 } = await this.resolvePushPreconditions(e2, t2, { preferProbeForLegacy: r2.preferProbeForLegacy });
        let o2 = e2.filter((e3) => !s2.has(e3.relPath));
        if (0 !== o2.length) {
          this.throwIfRoundAborted(), "size_asc" === this.pushOrder && (o2 = [...o2].sort((e3, t3) => e3.size - t3.size));
          for (let e3 = 0; e3 < o2.length; e3 += this.multipartPresignWindowSize) await this.pushUploadWindow({ candidates: o2.slice(e3, e3 + this.multipartPresignWindowSize), preconditionByPath: n2, summary: t2, signal: r2.signal });
        }
      }
      async pushUploadWindow(e2) {
        const t2 = e2.candidates, r2 = e2.preconditionByPath, n2 = e2.summary;
        let s2;
        this.throwIfRoundAborted(), await this.assertRoundStillOwnsLock();
        const o2 = this.monotonicNow();
        try {
          s2 = await this.runQueuedControlRpc(this.queues.presign, "rpc", () => this.client.presignWrites({ agentId: this.agentId, files: t2.map((e3) => {
            const t3 = r2.get(e3.relPath);
            return { relPath: e3.relPath, sha: e3.sha, size: e3.size, ...void 0 !== t3 ? { multipartParts: e3.multipartParts, ...t3 } : {} };
          }), signal: this.activeRoundSignal }));
        } catch (e3) {
          if (this.rethrowIfRoundAbort(e3), Ie(e3)) throw e3;
          if (!ge(e3, se.C.FailedPrecondition) && !ge(e3, se.C.InvalidArgument)) throw e3;
          const s3 = t2.filter((e4) => !r2.has(e4.relPath)), o3 = qe(e3), i3 = void 0 !== o3 ? t2 : s3.length > 0 ? s3 : t2;
          for (const t3 of i3) void 0 !== o3 ? this.parkQuotaExceededEntry({ relPath: t3.relPath, absPath: t3.absPath, summary: n2, quota: o3, message: De(e3, "Agent-store quota exceeded") }) : this.parkPushEntry({ relPath: t3.relPath, summary: n2, message: e3 instanceof Error ? e3.message : "Terminal push rejection from presignWrites" });
          return;
        }
        n2.presignMs = (n2.presignMs ?? 0) + (this.monotonicNow() - o2), this.throwIfRoundAborted();
        const i2 = /* @__PURE__ */ new Map();
        for (const e3 of s2) {
          let t3;
          try {
            t3 = v(e3.relPath);
          } catch (t4) {
            n2.errors.push({ relPath: e3.relPath, code: "presign_response_mismatch", message: `Server returned an unsafe relPath: ${e3.relPath} (${t4 instanceof Error ? t4.message : String(t4)})` });
            continue;
          }
          i2.set(t3, e3);
        }
        const a2 = await this.processMultipartWrites({ candidates: t2, presignedByPath: i2, preconditionByPath: r2, summary: n2 }), c2 = this.monotonicNow();
        await Promise.all(t2.map(async (e3) => {
          if (await this.assertRoundStillOwnsLock(e3.relPath, { bypassCache: true }), a2.has(e3.relPath)) return;
          const t3 = i2.get(e3.relPath);
          if (void 0 === t3) return void n2.errors.push({ relPath: e3.relPath, code: "presign_response_mismatch", message: `Server returned no presigned URL for ${e3.relPath}` });
          if (t3.sha !== e3.sha) return void n2.errors.push({ relPath: e3.relPath, code: "presign_response_mismatch", message: `Presigned write sha mismatch for ${e3.relPath} (got ${t3.sha}, expected ${e3.sha})` });
          const s3 = r2.get(e3.relPath);
          if (Sa(t3, this.now())) {
            try {
              await this.refreshAndCompleteLegacyWrite({ candidate: e3, precondition: s3, summary: n2 });
            } catch (t4) {
              if (this.tryParkQuotaExceeded({ relPath: e3.relPath, absPath: e3.absPath, summary: n2, error: t4 })) return;
              n2.errors.push(Ea(e3.relPath, t4));
            }
            return;
          }
          if (ba(t3)) {
            if (void 0 === s3 || void 0 === t3.conflict) return void n2.errors.push({ relPath: e3.relPath, code: "presign_response_mismatch", message: `Conflict-directed write for ${e3.relPath} did not include a conflict target and write precondition` });
            try {
              await this.handleWriteConflict({ candidate: e3, conflict: t3.conflict, precondition: s3, summary: n2, suppressIfRemoteIdentical: true === t3.primaryPreconditionFailed });
            } catch (t4) {
              if (this.rethrowIfRoundAbort(t4, e3.relPath), this.rethrowIfLockLost(t4), this.tryParkQuotaExceeded({ relPath: e3.relPath, absPath: e3.absPath, summary: n2, error: t4 })) return;
              this.emitConflictFallbackFailed({ candidate: e3 }), n2.errors.push(Ea(e3.relPath, t4));
            }
            return;
          }
          if (t3.expiresAtMs <= this.now()) {
            try {
              await this.refreshAndCompleteLegacyWrite({ candidate: e3, precondition: s3, summary: n2 });
            } catch (t4) {
              if (this.tryParkQuotaExceeded({ relPath: e3.relPath, absPath: e3.absPath, summary: n2, error: t4 })) return;
              n2.errors.push(Ea(e3.relPath, t4));
            }
            return;
          }
          const o3 = void 0 !== s3 && void 0 === t3.conflict;
          if (o3 && ka(t3)) n2.errors.push({ relPath: e3.relPath, code: "presign_response_mismatch", message: `Presigned write for ${e3.relPath} carries a conditional header but no conflict instruction` });
          else try {
            const r3 = await this.uploadPrimaryWithConflictRetry(e3, t3, n2);
            this.recordPrimaryPushSuccess({ candidate: e3, etag: r3.etag, summary: n2 }), o3 && n2.conflictProtectionDowngrades++;
          } catch (r3) {
            if (this.rethrowIfRoundAbort(r3, e3.relPath), this.rethrowIfLockLost(r3), Ie(r3)) throw r3;
            if (ge(r3, se.C.FailedPrecondition) || ge(r3, se.C.InvalidArgument)) {
              const t4 = qe(r3);
              return void (void 0 !== t4 ? this.parkQuotaExceededEntry({ relPath: e3.relPath, absPath: e3.absPath, summary: n2, quota: t4, message: De(r3, "Agent-store quota exceeded") }) : this.parkPushEntry({ relPath: e3.relPath, summary: n2, message: r3 instanceof Error ? r3.message : "Terminal push rejection during upload" }));
            }
            if (_a(r3)) {
              try {
                await this.refreshAndCompleteLegacyWrite({ candidate: e3, precondition: s3, summary: n2 });
              } catch (t4) {
                if (this.tryParkQuotaExceeded({ relPath: e3.relPath, absPath: e3.absPath, summary: n2, error: t4 })) return;
                n2.errors.push(Ea(e3.relPath, t4));
              }
              return;
            }
            if (va(r3) && void 0 !== s3 && void 0 !== t3.conflict) try {
              return void await this.handleWriteConflict({ candidate: e3, conflict: t3.conflict, precondition: s3, summary: n2, suppressIfRemoteIdentical: true });
            } catch (t4) {
              if (this.rethrowIfRoundAbort(t4, e3.relPath), this.rethrowIfLockLost(t4), this.tryParkQuotaExceeded({ relPath: e3.relPath, absPath: e3.absPath, summary: n2, error: t4 })) return;
              return this.emitConflictFallbackFailed({ candidate: e3 }), void n2.errors.push(Ea(e3.relPath, t4));
            }
            n2.errors.push(Ea(e3.relPath, r3));
          }
        })), n2.uploadMs = (n2.uploadMs ?? 0) + (this.monotonicNow() - c2);
      }
      async processMultipartWrites(e2) {
        const t2 = /* @__PURE__ */ new Set(), r2 = /* @__PURE__ */ new Map(), n2 = [];
        return await this.withPendingMultipartContexts(r2, async () => {
          for (const s3 of e2.candidates) {
            const o2 = e2.presignedByPath.get(s3.relPath);
            if (void 0 === o2) continue;
            const i2 = ba(o2);
            if (!(void 0 !== o2.multipart || void 0 !== o2.conflict?.multipart)) continue;
            const a2 = e2.preconditionByPath.get(s3.relPath);
            try {
              if (this.registerMultipartContexts({ presign: o2, pendingContexts: r2 }), o2.sha !== s3.sha || void 0 === a2) continue;
              let c2;
              if (i2) {
                const r3 = o2.conflict;
                if (void 0 === r3?.multipart) continue;
                if (true === o2.primaryPreconditionFailed && await this.trySuppressIdenticalWriteConflict(s3, e2.summary)) {
                  t2.add(s3.relPath);
                  continue;
                }
                c2 = { target: "conflict", candidate: s3, presign: o2, conflict: r3, upload: r3.multipart, precondition: a2, restartCount: 0, conflictRenameCount: 0, expiryRefreshCount: 0 };
              } else {
                if (void 0 === o2.multipart) continue;
                if (void 0 === o2.conflict) throw new ga({ code: "presign_response_mismatch", relPath: s3.relPath, message: `Multipart primary write for ${s3.relPath} did not include conflict protection` });
                c2 = { target: "primary", candidate: s3, presign: o2, upload: o2.multipart, precondition: a2, restartCount: 0, conflictRenameCount: 0, expiryRefreshCount: 0 };
              }
              n2.push(c2), t2.add(s3.relPath);
            } catch (t3) {
              this.rethrowIfRoundAbort(t3, s3.relPath), e2.summary.errors.push(Ea(s3.relPath, t3));
            }
          }
          let s2 = n2;
          for (; s2.length > 0; ) s2 = await this.runMultipartWorkWave({ works: s2, pendingContexts: r2, summary: e2.summary });
          return t2;
        });
      }
      async runMultipartWorkWave(e2) {
        const t2 = await Promise.all(e2.works.map(async (t3) => {
          let r3 = t3;
          try {
            for (; r3.upload.partUrlsExpiresAtMs <= this.now() || Sa(r3.presign, this.now()); ) {
              const t4 = await this.refreshExpiredMultipartWork({ work: r3, pendingContexts: e2.pendingContexts, summary: e2.summary });
              if (void 0 === t4) return { kind: "finished" };
              r3 = t4;
            }
            return { kind: "uploaded", entry: await this.uploadMultipartWork(r3, e2.pendingContexts) };
          } catch (t4) {
            if (this.rethrowIfRoundAbort(t4, r3.candidate.relPath), this.rethrowIfLockLost(t4), _a(t4)) try {
              const t5 = await this.refreshExpiredMultipartWork({ work: r3, pendingContexts: e2.pendingContexts, summary: e2.summary });
              return void 0 === t5 ? { kind: "finished" } : { kind: "retry", work: t5 };
            } catch (t5) {
              return this.rethrowIfRoundAbort(t5, r3.candidate.relPath), this.rethrowIfLockLost(t5), this.tryParkQuotaExceeded({ relPath: r3.candidate.relPath, absPath: r3.candidate.absPath, summary: e2.summary, error: t5 }) ? { kind: "finished" } : (e2.summary.errors.push(Ea(r3.candidate.relPath, t5)), { kind: "finished" });
            }
            return this.tryParkQuotaExceeded({ relPath: r3.candidate.relPath, absPath: r3.candidate.absPath, summary: e2.summary, error: t4 }) || e2.summary.errors.push(Ea(r3.candidate.relPath, t4)), { kind: "finished" };
          }
        })), r2 = t2.filter((e3) => "uploaded" === e3.kind).map((e3) => e3.entry), n2 = t2.filter((e3) => "retry" === e3.kind).map((e3) => e3.work);
        if (0 === r2.length) return n2;
        let s2;
        this.throwIfRoundAborted();
        try {
          await this.assertRoundStillOwnsLock(void 0, { bypassCache: true }), s2 = await this.completeMultipartWithTransientRetries(r2);
        } catch (t3) {
          this.rethrowIfRoundAbort(t3), this.rethrowIfLockLost(t3);
          for (const n3 of r2) this.tryParkQuotaExceeded({ relPath: n3.work.candidate.relPath, absPath: n3.work.candidate.absPath, summary: e2.summary, error: t3 }) || e2.summary.errors.push(Ea(n3.work.candidate.relPath, t3));
          return n2;
        }
        for (let t3 = 0; t3 < r2.length; t3++) {
          const o2 = r2[t3], i2 = s2[t3];
          if (void 0 !== o2 && void 0 !== i2) if ("rpc_error" !== i2.kind) try {
            const t4 = await this.handleMultipartCompletionResult({ entry: o2, result: i2, pendingContexts: e2.pendingContexts, summary: e2.summary });
            void 0 !== t4 && n2.push(t4);
          } catch (t4) {
            if (this.rethrowIfRoundAbort(t4, o2.work.candidate.relPath), this.rethrowIfLockLost(t4), this.tryParkQuotaExceeded({ relPath: o2.work.candidate.relPath, absPath: o2.work.candidate.absPath, summary: e2.summary, error: t4 })) continue;
            e2.summary.errors.push(Ea(o2.work.candidate.relPath, t4));
          }
          else {
            if (this.rethrowIfRoundAbort(i2.error, o2.work.candidate.relPath), this.tryParkQuotaExceeded({ relPath: o2.work.candidate.relPath, absPath: o2.work.candidate.absPath, summary: e2.summary, error: i2.error })) continue;
            e2.summary.errors.push(Ea(o2.work.candidate.relPath, i2.error));
          }
        }
        return n2;
      }
      async refreshExpiredMultipartWork(e2) {
        if (e2.work.expiryRefreshCount >= this.multipartMaxExpiryRefreshes) throw new ga({ code: "presigned_url_expired", relPath: e2.work.candidate.relPath, message: `Multipart upload URLs for ${e2.work.candidate.relPath} expired again after a fresh presign`, retryable: false });
        return await this.assertRoundStillOwnsLock(e2.work.candidate.relPath, { bypassCache: true }), await this.presignFreshMultipartWork({ previous: e2.work, pendingContexts: e2.pendingContexts, summary: e2.summary, expiryRefreshCount: e2.work.expiryRefreshCount + 1 });
      }
      async uploadMultipartWork(e2, t2) {
        const r2 = "primary" === e2.target ? e2.candidate.relPath : e2.conflict.relPath;
        this.validateMultipartInstruction(e2);
        const n2 = e2.candidate.multipartParts;
        if (void 0 === n2) throw new ga({ code: "presign_response_mismatch", relPath: e2.candidate.relPath, message: `Multipart instructions were returned without client part checksums for ${e2.candidate.relPath}` });
        const s2 = await Promise.all(e2.upload.parts.map(async (s3, o3) => {
          try {
            const i3 = n2[o3];
            if (void 0 === i3) throw new ga({ code: "presign_response_mismatch", relPath: e2.candidate.relPath, message: `Multipart part ${s3.partNumber} was not requested for ${e2.candidate.relPath}` });
            this.assertPresignedUrlSafe({ rawUrl: s3.url, relPath: r2 });
            const a3 = await this.runQueued(this.queues.s3, async () => (await this.assertRoundStillOwnsLock(r2, { bypassCache: true }), this.blobTransfer.uploadPart({ url: s3.url, relPath: r2, absPath: e2.candidate.absPath, partNumber: s3.partNumber, offset: s3.offsetBytes, size: s3.sizeBytes, fileSize: e2.candidate.size, expiresAtMs: e2.upload.partUrlsExpiresAtMs, expectedDev: e2.candidate.dev, expectedIno: e2.candidate.ino, checksumSha256: i3.checksumSha256, presignHeaders: s3.headers ?? {}, signal: this.activeRoundSignal, ...void 0 !== this.onRoundProgress ? { onBytes: this.cappedRoundBytes("blob_put_bytes", r2, e2.candidate.size) } : {} }))), c2 = t2.get(e2.upload.context.uploadId);
            return void 0 !== c2 && (c2.acceptedBytes += s3.sizeBytes), { kind: "success", part: { partNumber: s3.partNumber, etag: a3.etag, checksumSha256: i3.checksumSha256 } };
          } catch (e3) {
            return { kind: "failure", error: e3 };
          }
        })), o2 = s2.find((e3) => "failure" === e3.kind);
        if (void 0 !== o2) throw o2.error;
        const i2 = s2.map((e3) => {
          if ("failure" === e3.kind) throw e3.error;
          return e3.part;
        }), a2 = await nc({ absPath: e2.candidate.absPath, maxBytes: this.maxFileSizeBytes, expectedDev: e2.candidate.dev, expectedIno: e2.candidate.ino });
        if (a2.size !== e2.candidate.size || a2.sha !== e2.candidate.sha) throw new ga({ code: "sha_mismatch", relPath: e2.candidate.relPath, message: `Local file ${e2.candidate.relPath} changed during multipart upload` });
        return { work: e2, completion: { context: e2.upload.context, parts: i2 } };
      }
      async completeMultipartWithTransientRetries(e2) {
        const t2 = this.client.completeMultipartWrites;
        if (void 0 === t2) throw new ga({ code: "upload_failed", message: "Agent store client does not support multipart completion" });
        const r2 = new Array(e2.length);
        let n2 = e2.map((e3, t3) => ({ entry: e3, index: t3 }));
        for (let e3 = 1; e3 <= this.multipartCompleteMaxAttempts && n2.length > 0; e3++) {
          let s2;
          try {
            s2 = await t2.call(this.client, { agentId: this.agentId, completions: n2.map((e4) => e4.entry.completion), signal: this.activeRoundSignal }), this.progressReporter("rpc")();
          } catch (e4) {
            for (const t3 of n2) r2[t3.index] = { kind: "rpc_error", error: e4 };
            n2 = [];
            break;
          }
          const o2 = [];
          for (let t3 = 0; t3 < n2.length; t3++) {
            const i2 = n2[t3], a2 = s2[t3];
            if (void 0 === i2 || void 0 === a2) throw new ga({ code: "presign_response_mismatch", message: "Multipart completion response did not match its request" });
            "failure" === a2.kind && "transient" === a2.code && e3 < this.multipartCompleteMaxAttempts ? o2.push(i2) : r2[i2.index] = a2;
          }
          n2 = o2;
        }
        return r2.map((e3) => {
          if (void 0 === e3) throw new ga({ code: "upload_failed", message: "Multipart completion exhausted transient retries" });
          return e3;
        });
      }
      async handleMultipartCompletionResult(e2) {
        const { work: t2 } = e2.entry;
        if ("success" === e2.result.kind) return e2.pendingContexts.delete(t2.upload.context.uploadId), void ("primary" === t2.target ? this.recordPrimaryPushSuccess({ candidate: t2.candidate, etag: e2.result.etag, summary: e2.summary }) : await this.handleWriteConflict({ candidate: t2.candidate, conflict: t2.conflict, precondition: t2.precondition, summary: e2.summary, completedUpload: { etag: e2.result.etag } }));
        switch (e2.result.code) {
          case "precondition_failed":
            if ("primary" === t2.target) {
              if (await this.trySuppressIdenticalWriteConflict(t2.candidate, e2.summary)) return;
              const r2 = t2.presign.conflict;
              if (void 0 === r2) throw new ga({ code: "write_conflict", relPath: t2.candidate.relPath, message: `Multipart write for ${t2.candidate.relPath} lost its precondition without a conflict target` });
              return void 0 === r2.multipart ? void await this.handleWriteConflict({ candidate: t2.candidate, conflict: r2, precondition: t2.precondition, summary: e2.summary, suppressIfRemoteIdentical: true }) : { target: "conflict", candidate: t2.candidate, presign: t2.presign, conflict: r2, upload: r2.multipart, precondition: t2.precondition, restartCount: t2.restartCount, conflictRenameCount: t2.conflictRenameCount, expiryRefreshCount: 0 };
            }
            if (t2.conflictRenameCount >= this.multipartMaxConflictRenames) throw new ga({ code: "write_conflict", relPath: t2.candidate.relPath, message: `Multipart conflict target for ${t2.candidate.relPath} collided after a fresh presign` });
            return await this.presignFreshMultipartWork({ previous: t2, pendingContexts: e2.pendingContexts, summary: e2.summary, conflictRenameCount: t2.conflictRenameCount + 1 });
          case "restart_required":
            if (t2.restartCount >= this.multipartMaxRestarts) throw new ga({ code: "upload_failed", relPath: t2.candidate.relPath, message: `Multipart upload for ${t2.candidate.relPath} still required restart after a fresh presign` });
            return await this.presignFreshMultipartWork({ previous: t2, pendingContexts: e2.pendingContexts, summary: e2.summary, restartCount: t2.restartCount + 1 });
          case "checksum_mismatch":
            throw new ga({ code: "sha_mismatch", relPath: t2.candidate.relPath, message: `Multipart checksum did not match ${t2.candidate.relPath}` });
          case "upload_not_found": {
            const r2 = e2.pendingContexts.get(t2.upload.context.uploadId);
            throw void 0 !== r2 && this.notePendingMultipartAbandoned(r2), e2.pendingContexts.delete(t2.upload.context.uploadId), new ga({ code: "upload_failed", relPath: t2.candidate.relPath, message: `Multipart upload for ${t2.candidate.relPath} no longer exists` });
          }
          case "invalid_parts":
            throw new ga({ code: "presign_response_mismatch", relPath: t2.candidate.relPath, message: `Multipart completion rejected the uploaded part list for ${t2.candidate.relPath}` });
          case "transient":
            throw new ga({ code: "upload_failed", relPath: t2.candidate.relPath, message: `Multipart completion exhausted transient retries for ${t2.candidate.relPath}` });
          case "internal":
          case "unknown":
            throw new ga({ code: "upload_failed", relPath: t2.candidate.relPath, message: `Multipart completion failed internally for ${t2.candidate.relPath}` });
        }
      }
      async presignFreshMultipartWork(e2) {
        const t2 = await this.presignFreshWrite(e2.previous.candidate, e2.previous.precondition, e2.summary);
        this.registerMultipartContexts({ presign: t2, pendingContexts: e2.pendingContexts });
        const r2 = e2.restartCount ?? e2.previous.restartCount, n2 = e2.conflictRenameCount ?? e2.previous.conflictRenameCount, s2 = e2.expiryRefreshCount ?? e2.previous.expiryRefreshCount;
        if ("conflict" === e2.previous.target && !Sa(e2.previous.presign, this.now()) || ba(t2)) {
          const o2 = t2.conflict;
          if (void 0 === o2) throw new ga({ code: "presign_response_mismatch", relPath: e2.previous.candidate.relPath, message: `Fresh presign for ${e2.previous.candidate.relPath} did not include conflict instructions` });
          const i2 = void 0 === t2.lockRedirect && (true === t2.primaryPreconditionFailed || "conflict" === e2.previous.target && void 0 === e2.previous.presign.lockRedirect);
          if (i2 && await this.trySuppressIdenticalWriteConflict(e2.previous.candidate, e2.summary)) return;
          return void 0 === o2.multipart ? void await this.handleWriteConflict({ candidate: e2.previous.candidate, conflict: o2, precondition: e2.previous.precondition, summary: e2.summary, suppressIfRemoteIdentical: i2 }) : { target: "conflict", candidate: e2.previous.candidate, presign: t2, conflict: o2, upload: o2.multipart, precondition: e2.previous.precondition, restartCount: r2, conflictRenameCount: n2, expiryRefreshCount: s2 };
        }
        if (void 0 === t2.multipart) try {
          return void await this.completeFreshLegacyWrite({ candidate: e2.previous.candidate, presign: t2, precondition: e2.previous.precondition, summary: e2.summary });
        } catch (t3) {
          if (!_a(t3) || s2 >= this.multipartMaxExpiryRefreshes) throw t3;
          return await this.presignFreshMultipartWork({ previous: e2.previous, pendingContexts: e2.pendingContexts, summary: e2.summary, restartCount: r2, conflictRenameCount: n2, expiryRefreshCount: s2 + 1 });
        }
        if (void 0 === t2.conflict) throw new ga({ code: "presign_response_mismatch", relPath: e2.previous.candidate.relPath, message: `Fresh multipart presign for ${e2.previous.candidate.relPath} did not include conflict instructions` });
        return { target: "primary", candidate: e2.previous.candidate, presign: t2, upload: t2.multipart, precondition: e2.previous.precondition, restartCount: r2, conflictRenameCount: n2, expiryRefreshCount: s2 };
      }
      async completeFreshLegacyWrite(e2) {
        if (Sa(e2.presign, this.now())) throw new ga({ code: "presigned_url_expired", relPath: e2.candidate.relPath, message: `Fresh presign for ${e2.candidate.relPath} contained an expired lock redirect` });
        if (ba(e2.presign)) {
          if (void 0 === e2.presign.conflict || void 0 === e2.precondition) throw new ga({ code: "presign_response_mismatch", relPath: e2.candidate.relPath, message: `Fresh conflict-only presign for ${e2.candidate.relPath} did not include a conflict target and write precondition` });
          return void await this.handleWriteConflict({ candidate: e2.candidate, conflict: e2.presign.conflict, precondition: e2.precondition, summary: e2.summary, suppressIfRemoteIdentical: true === e2.presign.primaryPreconditionFailed });
        }
        const t2 = void 0 !== e2.precondition && void 0 === e2.presign.conflict;
        if (void 0 === e2.presign.conflict && ka(e2.presign)) throw new ga({ code: "presign_response_mismatch", relPath: e2.candidate.relPath, message: `Fresh conditional presign for ${e2.candidate.relPath} did not include a conflict target` });
        try {
          const r2 = await this.uploadPrimaryWithConflictRetry(e2.candidate, e2.presign, e2.summary);
          this.recordPrimaryPushSuccess({ candidate: e2.candidate, etag: r2.etag, summary: e2.summary }), t2 && e2.summary.conflictProtectionDowngrades++;
        } catch (t3) {
          if (va(t3) && void 0 !== e2.presign.conflict && void 0 !== e2.precondition) return void await this.handleWriteConflict({ candidate: e2.candidate, conflict: e2.presign.conflict, precondition: e2.precondition, summary: e2.summary, suppressIfRemoteIdentical: true });
          throw t3;
        }
      }
      async refreshAndCompleteLegacyWrite(e2) {
        await this.withFreshLegacyPresign({ candidate: e2.candidate, precondition: e2.precondition, summary: e2.summary, operation: async (t2) => {
          await this.completeFreshLegacyWrite({ candidate: e2.candidate, presign: t2, precondition: e2.precondition, summary: e2.summary });
        } });
      }
      async presignFreshWrite(e2, t2, r2) {
        const n2 = (await this.runQueuedControlRpc(this.queues.presign, "rpc", () => this.client.presignWrites({ agentId: this.agentId, files: [{ relPath: e2.relPath, sha: e2.sha, size: e2.size, ...void 0 !== t2 ? { multipartParts: e2.multipartParts, ...t2 } : {} }], signal: this.activeRoundSignal })))[0];
        if (void 0 === n2 || n2.sha !== e2.sha || v(n2.relPath) !== e2.relPath) throw new ga({ code: "presign_response_mismatch", relPath: e2.relPath, message: `Fresh presign did not match ${e2.relPath}` });
        return n2;
      }
      async withFreshLegacyPresign(e2) {
        const t2 = /* @__PURE__ */ new Map();
        return await this.withPendingMultipartContexts(t2, async () => {
          const r2 = await this.presignFreshWrite(e2.candidate, e2.precondition, e2.summary);
          return this.registerMultipartContexts({ presign: r2, pendingContexts: t2 }), await e2.operation(r2);
        });
      }
      registerMultipartContexts(e2) {
        for (const t2 of [e2.presign.multipart, e2.presign.conflict?.multipart]) {
          if (void 0 === t2) continue;
          const r2 = t2.context.uploadId;
          if (0 === r2.length || e2.pendingContexts.has(r2)) throw new ga({ code: "presign_response_mismatch", relPath: e2.presign.relPath, message: `Multipart presign for ${e2.presign.relPath} returned an invalid or duplicate upload context` });
          e2.pendingContexts.set(r2, { context: t2.context, acceptedBytes: 0 });
        }
      }
      validateMultipartInstruction(e2) {
        const { candidate: t2, upload: r2 } = e2, n2 = "primary" === e2.target ? t2.relPath : e2.conflict.relPath, s2 = "conflict" === e2.target ? "expectAbsent" === r2.context.precondition.case && true === r2.context.precondition.value : void 0 !== e2.precondition.baseEtag ? "baseEtag" === r2.context.precondition.case && r2.context.precondition.value === e2.precondition.baseEtag : true === e2.precondition.expectAbsent && "expectAbsent" === r2.context.precondition.case && true === r2.context.precondition.value, o2 = t2.multipartParts;
        if (void 0 === o2 || v(r2.context.relPath) !== v(n2) || r2.context.sha !== t2.sha || r2.context.sizeBytes !== t2.size || !s2 || r2.context.expectedPartCount !== r2.parts.length || o2.length !== r2.parts.length || 0 === r2.context.uploadId.length || 0 === r2.context.storeId.length || 0 === r2.context.sessionId.length || 0 === r2.parts.length || !Number.isFinite(r2.partUrlsExpiresAtMs)) throw new ga({ code: "presign_response_mismatch", relPath: t2.relPath, message: `Multipart instructions did not match ${t2.relPath}` });
        let i2 = 0;
        for (let e3 = 0; e3 < r2.parts.length; e3++) {
          const n3 = r2.parts[e3], s3 = o2[e3];
          if (void 0 === n3 || void 0 === s3 || n3.partNumber !== e3 + 1 || n3.partNumber !== s3.partNumber || !Number.isSafeInteger(n3.offsetBytes) || n3.offsetBytes !== i2 || n3.offsetBytes !== s3.offsetBytes || !Number.isSafeInteger(n3.sizeBytes) || n3.sizeBytes <= 0 || n3.sizeBytes !== s3.sizeBytes || xa(n3.headers ?? {}, "x-amz-checksum-sha256") !== Buffer.from(s3.checksumSha256).toString("base64") || 0 === n3.url.length) throw new ga({ code: "presign_response_mismatch", relPath: t2.relPath, message: `Multipart part layout did not match ${t2.relPath}` });
          i2 += n3.sizeBytes;
        }
        if (i2 !== t2.size) throw new ga({ code: "presign_response_mismatch", relPath: t2.relPath, message: `Multipart parts did not cover ${t2.relPath}` });
      }
      async withPendingMultipartContexts(e2, t2) {
        try {
          return await t2();
        } finally {
          await this.abortPendingMultipartContexts(e2);
        }
      }
      noteMultipartAbandoned(e2) {
        for (const t2 of e2.values()) this.notePendingMultipartAbandoned(t2);
      }
      notePendingMultipartAbandoned(e2) {
        const t2 = e2.acceptedBytes;
        e2.acceptedBytes = 0;
        const r2 = this.onMultipartAbandoned;
        void 0 === r2 || t2 <= 0 || r2({ bytes: t2, roundAborted: true === this.activeRoundSignal?.aborted });
      }
      async abortPendingMultipartContexts(e2) {
        if (this.noteMultipartAbandoned(e2), 0 === e2.size) return;
        const t2 = this.client.abortMultipartWrites;
        if (void 0 !== t2) try {
          await t2.call(this.client, { agentId: this.agentId, uploads: [...e2.values()].map(({ context: e3 }) => ({ context: e3 })), signal: this.activeRoundSignal }), this.progressReporter("rpc")();
        } catch (e3) {
          this.rethrowIfRoundAbort(e3);
        }
      }
      recordPrimaryPushSuccess(e2) {
        this.clearPushPark(e2.candidate.relPath), this.throwIfRoundAborted(e2.candidate.relPath), e2.summary.filesPushed++, e2.summary.bytesPushed += e2.candidate.size, this.index.upsertFile({ relPath: e2.candidate.relPath, lastSeenEtag: e2.etag, lastSyncedSha: e2.candidate.sha, size: e2.candidate.size, lastSyncedMs: this.now(), direction: "pushed", recordedStat: this.captureRecordedStat(e2.candidate) }), this.progressReporter("index_commit")(), this.notePathsRefreshedForParkedFullRound([e2.candidate.relPath], e2.summary);
      }
      async resolvePushPreconditions(e2, t2, r2 = {}) {
        const n2 = true === r2.preferProbeForLegacy, s2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Set();
        let a2, c2 = false;
        if (e2.some((e3) => void 0 !== e3.existing && "tombstoned" !== e3.existing.state && (void 0 === e3.existing.lastSeenEtag || 0 === e3.existing.lastSeenEtag.length)) && !n2) try {
          const e3 = await this.listServerFiles(t2, { tombstoneMode: o.hw.OMIT }), r3 = /* @__PURE__ */ new Set(), n3 = /* @__PURE__ */ new Map();
          for (const t3 of e3.files) {
            let e4;
            try {
              e4 = v(t3.relPath);
            } catch {
              continue;
            }
            r3.add(e4);
            const s3 = st(t3.etag);
            s3.length > 0 && n3.set(e4, s3);
          }
          a2 = { listedPaths: r3, etagByPath: n3 };
        } catch (e3) {
          this.rethrowIfRoundAbort(e3), c2 = true, t2.errors.push({ relPath: void 0, code: "list_failed", message: `Failed to list agent store for legacy push baselines: ${e3 instanceof Error ? e3.message : String(e3)}` });
        }
        for (const r3 of e2) {
          if (void 0 === r3.existing) {
            s2.set(r3.relPath, { expectAbsent: true });
            continue;
          }
          if ("tombstoned" === r3.existing.state) {
            const e4 = r3.existing.tombstoneEtag;
            void 0 !== e4 && e4.length > 0 ? s2.set(r3.relPath, { baseEtag: e4 }) : s2.set(r3.relPath, { expectAbsent: true });
            continue;
          }
          const e3 = r3.existing.lastSeenEtag;
          if (void 0 !== e3 && e3.length > 0) {
            s2.set(r3.relPath, { baseEtag: e3 });
            continue;
          }
          if (n2) {
            const e4 = await this.probeLegacyPushPrecondition(r3.relPath, t2);
            void 0 === e4 ? i2.add(r3.relPath) : s2.set(r3.relPath, e4);
            continue;
          }
          if (c2 || void 0 === a2) {
            i2.add(r3.relPath);
            continue;
          }
          if (!a2.listedPaths.has(r3.relPath)) {
            s2.set(r3.relPath, { expectAbsent: true });
            continue;
          }
          const o2 = a2.etagByPath.get(r3.relPath);
          if (void 0 !== o2) {
            s2.set(r3.relPath, { baseEtag: o2 });
            continue;
          }
          const l2 = await this.probeLegacyPushPrecondition(r3.relPath, t2);
          void 0 === l2 ? i2.add(r3.relPath) : s2.set(r3.relPath, l2);
        }
        return { preconditions: s2, skippedDueToListingFailure: i2 };
      }
      async probeLegacyPushPrecondition(e2, t2) {
        try {
          const r2 = await Vs({ client: this.client, agentId: this.agentId, relPath: e2, fetchImpl: this.fetchImpl, validatePresignedUrl: this.validatePresignedUrl, runPresign: (e3) => this.runQueuedControlRpc(this.queues.presign, "rpc", e3), runS3: (e3) => this.runQueued(this.queues.s3, e3), signal: this.activeRoundSignal });
          return t2.legacyProbes++, "absent" === r2.kind ? { expectAbsent: true } : { baseEtag: r2.etag };
        } catch (r2) {
          if (Ie(r2)) throw r2;
          return this.rethrowIfRoundAbort(r2, e2), void t2.errors.push({ relPath: e2, code: "probe_failed", message: `Failed to probe agent store object for legacy push baseline: ${r2 instanceof Error ? r2.message : String(r2)}` });
        }
      }
      isPushParked(e2) {
        const t2 = this.pushParkedUntilMs.get(e2);
        return void 0 !== t2 && (!(this.now() >= t2) || (this.pushParkedUntilMs.delete(e2), false));
      }
      clearPushPark(e2) {
        this.pushParkedUntilMs.delete(e2);
        const t2 = this.pushParkBackoff.get(e2);
        void 0 !== t2 && (t2.recordSuccess(), this.pushParkBackoff.delete(e2));
      }
      parkPushEntry(e2) {
        let t2 = this.pushParkBackoff.get(e2.relPath);
        void 0 === t2 && (t2 = new s({ baseDelayMs: 5e3, maxDelayMs: 9e5, jitter: 0.2 }), this.pushParkBackoff.set(e2.relPath, t2));
        const r2 = t2.recordFailure();
        this.pushParkedUntilMs.set(e2.relPath, this.now() + r2), e2.summary.pushEntriesParked++, e2.summary.errors.push({ relPath: e2.relPath, code: e2.code ?? "push_terminal", message: `${e2.message} (parked ${r2}ms)` });
      }
      parkQuotaExceededEntry(e2) {
        this.parkPushEntry({ relPath: e2.relPath, summary: e2.summary, message: e2.message, code: "quota_exceeded" }), this.emitQuotaExceededJournal({ relPath: e2.relPath, absPath: e2.absPath, quota: e2.quota });
      }
      tryParkQuotaExceeded(e2) {
        if (!ge(e2.error, se.C.FailedPrecondition) && !ge(e2.error, se.C.InvalidArgument)) return false;
        if (Ie(e2.error)) return false;
        const t2 = qe(e2.error);
        return void 0 !== t2 && (this.parkQuotaExceededEntry({ relPath: e2.relPath, absPath: e2.absPath, summary: e2.summary, quota: t2, message: De(e2.error, "Agent-store quota exceeded") }), true);
      }
      emitQuotaExceededJournal(e2) {
        const t2 = { kind: "quota_exceeded", storeId: this.agentId, originalRelPath: e2.relPath, originalAbsPath: e2.absPath, source: "local_sync", scopeKind: e2.quota.scopeKind, limitBytes: e2.quota.limitBytes, usageBytes: e2.quota.usageBytes };
        this.emitConflictJournalEventWithRetry(t2);
      }
      async uploadPrimaryWithConflictRetry(e2, t2, r2) {
        try {
          return await this.uploadOne(e2, t2, r2);
        } catch (n2) {
          if (va(n2) && 409 === n2.httpStatus) return await this.uploadOne(e2, t2, r2);
          throw n2;
        }
      }
      async tryRecreateOverListedTombstone(e2) {
        this.client.invalidateListCache?.({ agentId: this.agentId });
        const t2 = Ua(e2.candidate.relPath);
        let r2;
        try {
          r2 = await this.runQueuedControlRpc(this.queues.list, "listing_page", () => this.client.listFiles({ agentId: this.agentId, relPath: t2, tombstoneMode: o.hw.INCLUDE, signal: this.activeRoundSignal }));
        } catch (t3) {
          return this.rethrowIfRoundAbort(t3, e2.candidate.relPath), this.rethrowIfLockLost(t3), false;
        }
        const n2 = $a(r2.tombstoneFloorMs);
        if (void 0 === n2) return false;
        const s2 = n2 - this.tombstonePruneSlackMs();
        let i2;
        for (const t3 of r2.tombstones ?? []) {
          let r3;
          try {
            r3 = v(t3.relPath);
          } catch {
            continue;
          }
          if (r3 !== e2.candidate.relPath) continue;
          const n3 = st(t3.tombstoneEtag);
          if (!(0 === n3.length || t3.deletedAtMs <= 0) && !(t3.deletedAtMs >= s2)) {
            i2 = n3;
            break;
          }
        }
        if (void 0 === i2) return false;
        try {
          const t3 = await this.presignFreshWrite(e2.candidate, { baseEtag: i2 }, e2.summary);
          if (ba(t3) || void 0 !== t3.multipart) return false;
          const r3 = await this.uploadPrimaryWithConflictRetry(e2.candidate, t3, e2.summary);
          try {
            return this.recordPrimaryPushSuccess({ candidate: e2.candidate, etag: r3.etag, summary: e2.summary }), true;
          } finally {
            this.client.invalidateListCache?.({ agentId: this.agentId });
          }
        } catch (t3) {
          return this.rethrowIfRoundAbort(t3, e2.candidate.relPath), this.rethrowIfLockLost(t3), false;
        }
      }
      async handleWriteConflict(e2) {
        const { candidate: t2, precondition: r2, summary: n2 } = e2;
        if (void 0 === e2.completedUpload && true === e2.suppressIfRemoteIdentical && await this.trySuppressIdenticalWriteConflict(t2, n2)) return;
        if (void 0 === e2.completedUpload && true === e2.suppressIfRemoteIdentical && true === r2.expectAbsent && await this.tryRecreateOverListedTombstone({ candidate: t2, summary: n2 })) return;
        let s2 = e2.conflict, o2 = e2.completedUpload;
        if (void 0 === o2) {
          let e3;
          try {
            s2.expiresAtMs <= this.now() ? { conflict: s2, uploaded: o2 } = await this.uploadFreshLegacyConflict(t2, r2, n2) : o2 = await this.uploadConflict(t2, s2, n2);
          } catch (t3) {
            e3 = t3;
          }
          if (void 0 === o2) {
            if (this.rethrowIfRoundAbort(e3, t2.relPath), !va(e3) && !_a(e3)) throw e3;
            ({ conflict: s2, uploaded: o2 } = await this.uploadFreshLegacyConflict(t2, r2, n2));
          }
        }
        n2.filesConflicted++, n2.conflicts.push({ relPath: t2.relPath, conflictRelPath: s2.relPath, conflictEtag: o2.etag });
        try {
          this.materializeAndRecordConflict({ candidate: t2, conflict: s2, precondition: r2, uploaded: o2 });
        } catch (e3) {
          n2.errors.push({ relPath: t2.relPath, code: e3 instanceof ga ? e3.code : "upload_failed", message: e3 instanceof Error ? e3.message : String(e3) });
        }
      }
      async trySuppressIdenticalWriteConflict(e2, t2) {
        if (e2.size > ta) return false;
        let r2;
        try {
          const n2 = (await this.runQueuedControlRpc(this.queues.presign, "rpc", () => this.client.presignReads({ agentId: this.agentId, relPaths: [e2.relPath], signal: this.activeRoundSignal })))[0];
          if (void 0 === n2 || v(n2.relPath) !== e2.relPath) return false;
          if (this.assertPresignedUrlSafe({ rawUrl: n2.url, relPath: e2.relPath }), r2 = await this.runQueued(this.queues.s3, async () => (this.throwIfRoundAborted(e2.relPath), await this.fetchImpl(n2.url, { redirect: "error", ...void 0 !== this.activeRoundSignal ? { signal: this.activeRoundSignal } : {} }))), 200 !== r2.status) return false;
          const s2 = st(r2.headers.get("etag") ?? void 0);
          if (0 === s2.length) return false;
          const o2 = (0, Ys.createHash)("sha256");
          let i2 = 0;
          const a2 = this.cappedRoundBytes("blob_get_bytes", e2.relPath, e2.size);
          if (null !== r2.body) {
            const t3 = r2.body.getReader();
            try {
              for (; ; ) {
                const r3 = await t3.read();
                if (r3.done) break;
                if (i2 += r3.value.byteLength, a2(r3.value.byteLength), i2 > Math.min(e2.size, ta)) return await t3.cancel(), false;
                o2.update(r3.value);
              }
            } finally {
              t3.releaseLock();
            }
          }
          if (i2 !== e2.size || o2.digest("hex") !== e2.sha) return false;
          const c2 = await nc({ absPath: e2.absPath, maxBytes: this.maxFileSizeBytes, expectedDev: e2.dev, expectedIno: e2.ino });
          return c2.size === e2.size && c2.sha === e2.sha && (this.clearPushPark(e2.relPath), this.throwIfRoundAborted(e2.relPath), t2.identicalContentConflictsSuppressed = (t2.identicalContentConflictsSuppressed ?? 0) + 1, this.index.upsertFile({ relPath: e2.relPath, lastSeenEtag: s2, lastSyncedSha: e2.sha, size: e2.size, lastSyncedMs: this.now(), direction: "pushed" }), this.progressReporter("index_commit")(), true);
        } catch (t3) {
          return this.rethrowIfRoundAbort(t3, e2.relPath), false;
        } finally {
          await r2?.body?.cancel().catch(() => {
          });
        }
      }
      materializeAndRecordConflict(e2) {
        const { candidate: t2, conflict: r2, precondition: n2, uploaded: s2 } = e2;
        try {
          this.materializeConflictBookkeeping({ candidate: t2, conflict: r2, precondition: n2, uploaded: s2 });
        } finally {
          this.client.invalidateListCache?.({ agentId: this.agentId });
        }
      }
      materializeConflictBookkeeping(e2) {
        const { candidate: t2, conflict: r2, precondition: n2, uploaded: s2 } = e2, o2 = this.materializeConflictRename(t2, r2.relPath);
        if (this.emitConflictJournalEvent({ candidate: t2, conflictRelPath: r2.relPath, precondition: n2, remoteOnly: void 0 === o2 }), void 0 !== o2) {
          this.index.upsertFile({ relPath: o2.canonicalRelPath, lastSeenEtag: s2.etag, lastSyncedSha: t2.sha, size: t2.size, lastSyncedMs: this.now(), direction: "pushed" });
          const e3 = t2.existing?.lastSeenEtag;
          void 0 === t2.existing || void 0 !== e3 && 0 !== e3.length || this.index.upsertFile({ ...t2.existing, lastSeenEtag: s2.etag, lastSyncedSha: t2.sha, size: t2.size, lastSyncedMs: this.now(), direction: "pushed" });
        } else {
          const e3 = t2.existing?.lastSeenEtag;
          this.index.upsertFile({ relPath: t2.relPath, lastSeenEtag: void 0 !== e3 && e3.length > 0 ? e3 : s2.etag, lastSyncedSha: t2.sha, size: t2.size, lastSyncedMs: this.now(), direction: "pushed" });
        }
      }
      emitConflictJournalEvent(e2) {
        const t2 = true === e2.precondition.expectAbsent ? "create_conflict" : "write_conflict";
        let r2;
        try {
          r2 = x({ base: this.filesDir, relPath: v(e2.conflictRelPath) });
        } catch {
          r2 = void 0;
        }
        const n2 = { kind: t2, storeId: this.agentId, originalRelPath: e2.candidate.relPath, conflictRelPath: e2.conflictRelPath, originalAbsPath: e2.candidate.absPath, conflictAbsPath: r2, preservedBytes: e2.candidate.size, source: "local_sync", remoteOnly: e2.remoteOnly };
        this.emitConflictJournalEventWithRetry(n2);
      }
      emitConflictJournalEventWithRetry(e2) {
        this.tryEmitConflictJournalEvent(e2) || this.tryEmitConflictJournalEvent(e2) || (this.enqueuePendingConflictJournalEmit(e2), this.warn(`conflict journal append or dedup refresh failed after retry for ${Li({ relPath: e2.originalRelPath, salt: this.pathHashSalt })}; conflict preserved remotely and event queued for next push round (failures=${this.conflictJournal.appendFailureCount()})`, void 0));
      }
      tryEmitConflictJournalEvent(e2) {
        if (!this.conflictJournal.refreshDedupFromDisk()) return false;
        const t2 = this.conflictJournal.wouldDedup(e2), r2 = this.conflictJournal.rotationCount(), n2 = this.conflictJournal.emit(e2);
        if (this.conflictJournal.rotationCount() !== r2) {
          for (const e3 of this.roundJournaledConflictEmits) this.enqueuePendingConflictJournalEmit(e3);
          return t2 || this.enqueuePendingConflictJournalEmit(e2), this.roundJournaledConflictEmits = [], this.warn("conflict journal rotated during emit; re-queued same-round notice(s) into the pending sidecar so a rotation cannot wipe a just-flushed event with nothing left to retry", void 0), n2;
        }
        return !!n2 && (t2 || (this.roundJournaledConflictEmits.push(e2), this.enqueuePendingConflictJournalEmit(e2)), true);
      }
      enqueuePendingConflictJournalEmit(e2) {
        this.pendingConflictJournal.enqueue(e2);
      }
      flushPendingConflictJournalEmits() {
        if (this.pendingConflictJournal.reload(), !this.conflictJournal.refreshDedupFromDisk()) return;
        if (this.pendingConflictJournal.isEmpty()) return;
        const e2 = this.pendingConflictJournal.list(), t2 = this.conflictJournal.rotationCount(), r2 = [], n2 = [], s2 = [];
        let o2 = 0;
        for (const t3 of e2) {
          const e3 = this.conflictJournal.wouldDedup(t3);
          this.conflictJournal.emit(t3) ? (s2.push(t3), e3 || n2.push(t3)) : (o2++, r2.push(t3));
        }
        this.conflictJournal.rotationCount() === t2 ? (this.roundJournaledConflictEmits.push(...n2), this.pendingConflictJournal.replaceAll([...r2, ...s2]), o2 > 0 && this.warn(`conflict journal pending retry failed for ${o2} event(s); will retry on the next push round (pending=${this.pendingConflictJournal.size()}, failures=${this.conflictJournal.appendFailureCount()})`, void 0)) : this.warn(`conflict journal rotated during pending flush; keeping ${this.pendingConflictJournal.size()} queued event(s) for the next push round to avoid losing a rotated notice`, void 0);
      }
      stripJournaledPendingConflictMirrors() {
        if (this.pendingConflictJournal.reload(), !this.conflictJournal.refreshDedupFromDisk()) return;
        if (this.pendingConflictJournal.isEmpty()) return;
        const e2 = [];
        for (const t2 of this.pendingConflictJournal.list()) this.conflictJournal.wouldDedup(t2) || e2.push(t2);
        e2.length !== this.pendingConflictJournal.size() && this.pendingConflictJournal.replaceAll(e2);
      }
      conflictJournalPathsSafeForShutdownFlush() {
        for (const e2 of [this.conflictJournal.path, this.pendingConflictJournal.path]) try {
          if (p.lstatSync(e2).isSymbolicLink()) return false;
        } catch (e3) {
          if (!uc(e3) || "ENOENT" !== e3.code) return false;
        }
        return true;
      }
      attemptPendingConflictJournalFlushForShutdown() {
        void 0 !== this.lockProvider && void 0 === this.lockHandle || (this.conflictJournalPathsSafeForShutdownFlush() ? (this.flushPendingConflictJournalEmits(), this.stripJournaledPendingConflictMirrors()) : this.warn("conflict journal shutdown flush skipped; journal or pending sidecar path is not a safe regular file", void 0));
      }
      emitConflictFallbackFailed(e2) {
        this.emitConflictJournalEventWithRetry({ kind: "conflict_fallback_failed", storeId: this.agentId, originalRelPath: e2.candidate.relPath, originalAbsPath: e2.candidate.absPath, source: "local_sync" });
      }
      async uploadFreshLegacyConflict(e2, t2, r2) {
        return await this.assertRoundStillOwnsLock(e2.relPath, { bypassCache: true }), await this.withFreshLegacyPresign({ candidate: e2, precondition: t2, summary: r2, operation: async (t3) => {
          if (void 0 === t3.conflict) throw new ga({ code: "write_conflict", relPath: e2.relPath, message: `Conflict write for ${e2.relPath} collided and the fresh presign returned no usable conflict instruction` });
          const n2 = t3.conflict;
          return { conflict: n2, uploaded: await this.uploadConflict(e2, n2, r2) };
        } });
      }
      async uploadConflict(e2, t2, r2) {
        return this.assertPresignedUrlSafe({ rawUrl: t2.url, relPath: t2.relPath }), await this.runQueued(this.queues.s3, async () => (this.throwIfRoundAborted(t2.relPath), this.assertPresignedUrlNotExpired({ expiresAtMs: t2.expiresAtMs, relPath: t2.relPath }), await this.assertRoundStillOwnsLock(e2.relPath, { bypassCache: true }), await this.blobTransfer.uploadFile({ url: t2.url, relPath: t2.relPath, absPath: e2.absPath, sha: e2.sha, size: e2.size, expectedDev: e2.dev, expectedIno: e2.ino, presignHeaders: t2.headers, signal: this.activeRoundSignal, ...void 0 !== this.onRoundProgress ? { onBytes: this.cappedRoundBytes("blob_put_bytes", t2.relPath, e2.size) } : {} })));
      }
      parkUnsyncedBytesBesidePath(e2) {
        return this.parkUnsyncedBytesAtRelPath({ absPath: e2.absPath, parkedRelPath: Ta(e2.relPath) });
      }
      parkUnsyncedBytesOutsideRemovedDir(e2) {
        return this.parkUnsyncedBytesAtRelPath({ absPath: e2.absPath, parkedRelPath: Ta(Ja({ relPath: e2.relPath, dir: e2.dir })) });
      }
      parkUnsyncedBytesAtRelPath(e2) {
        const t2 = this.materializeConflictRename({ absPath: e2.absPath }, e2.parkedRelPath);
        if (void 0 === t2) return false;
        let r2 = 0;
        try {
          r2 = p.lstatSync(x({ base: this.filesDir, relPath: t2.canonicalRelPath })).size;
        } catch {
        }
        return this.index.upsertFile({ relPath: t2.canonicalRelPath, lastSyncedSha: "", size: r2, lastSyncedMs: this.now(), direction: "pushed" }), true;
      }
      materializeConflictRename(e2, t2, r2 = {}) {
        try {
          const n2 = v(t2);
          k({ relPath: n2, platform: this.platform });
          const s2 = x({ base: this.filesDir, relPath: n2 }), o2 = h.dirname(s2);
          ac({ base: this.filesDir, parent: o2, relPath: n2 }), cc({ base: this.filesDir, target: o2, relPath: n2 }), ic({ absPath: s2, relPath: n2 });
          const i2 = p.lstatSync(e2.absPath);
          if (i2.isDirectory()) return;
          if (false !== r2.requireRegularFile && !i2.isFile()) return;
          return p.renameSync(e2.absPath, s2), { canonicalRelPath: n2 };
        } catch {
          return;
        }
      }
      async pullAll(e2 = tc(), t2 = {}) {
        this.ensureDirsExist();
        const r2 = this.lastCompleteRoundMs(), n2 = this.remoteVersionToSend();
        let s2;
        if (void 0 !== n2 && t2.remoteUnchangedVersion === n2 && !ec(e2)) {
          const t3 = await this.relistInsteadOfNotModified(e2);
          if (void 0 === t3) return this.applyNotModified({ tombstoneWatermarkMs: void 0, listedWithInclude: false }, e2, "probe_unchanged"), e2;
          s2 = t3;
        } else if (s2 = await this.listServerFiles(e2, { ifVersionEqual: n2 }), s2.notModified) {
          const t3 = await this.relistInsteadOfNotModified(e2);
          if (void 0 === t3) return this.applyNotModified(s2, e2), e2;
          s2 = t3;
        }
        this.clearRemoteVersion(e2, "before_apply");
        const i2 = s2.listStartMs, a2 = this.shouldApplyAbsenceDeletes({ listingComplete: s2.listingComplete, listedWithInclude: s2.listedWithInclude, tombstoneFloorMs: s2.tombstoneFloorMs, lastCompleteRoundMs: r2 });
        "needs-include" === a2 && (s2 = await this.listServerFiles(e2, { tombstoneMode: o.hw.INCLUDE }));
        const { files: c2, tombstones: l2, listingComplete: u2, removedSubdirs: d2, tombstoneWatermarkMs: p2, tombstoneFloorMs: m2, listedWithInclude: h2 } = s2;
        e2.pullOutcome = void 0 !== s2.version ? "listed" : "listed_no_version", this.lastPullListingComplete = u2, e2.listingComplete = u2;
        const f2 = await this.applyRemoteTombstones(l2, e2), g2 = await this.applyAbsenceDeletes({ files: c2, tombstones: l2, removedSubdirs: d2, listingComplete: u2, listedWithInclude: h2, tombstoneFloorMs: m2, lastCompleteRoundMs: r2, summary: e2 });
        this.pruneExpiredTombstoneRows({ tombstones: l2, listingComplete: u2, tombstoneFloorMs: m2, listedWithInclude: h2 }), this.commitTombstoneCursor({ watermarkMs: p2, listingComplete: u2, listedWithInclude: h2, deferred: f2.deferred, summary: e2 }), await this.applyRemovedLocalDirs(d2, c2, e2);
        const y2 = this.pullCandidatesFromListing(c2, e2);
        await this.pullCandidates(y2, e2);
        const w2 = this.commitLastCompleteRoundMs({ listingComplete: u2, listStartMs: i2, watermarkMs: p2, absenceNeeded: "no" !== a2, tombstoneFloorMs: m2, absenceDeferred: g2.deferred });
        return this.maybePersistRemoteVersion({ version: s2.version, completeRoundCommitted: w2, tombstonesDeferred: f2.deferred, summary: e2 }), e2;
      }
      remoteVersionToSend() {
        if (!this.remoteVersionEnabledValue) return;
        if (this.remoteVersionStaleFromPathWrite) return;
        const e2 = this.index.getMeta(An);
        if (void 0 === e2 || "" === e2) return;
        const t2 = this.versionFullListIntervalMsValue;
        if (t2 > 0) {
          const e3 = Ga(this.index.getMeta(Rn));
          if (void 0 === e3 || this.now() - e3 >= t2) return;
        }
        return this.tombstoneListingMode().include ? void 0 : e2;
      }
      maybePersistRemoteVersion(e2) {
        const { version: t2, summary: r2 } = e2;
        void 0 !== t2 && "" !== t2 && (!e2.completeRoundCommitted || e2.tombstonesDeferred > 0 || r2.pullsDeferred > 0 || r2.errors.some((e3) => !Va.has(e3.code)) || true === this.activeRoundSignal?.aborted || (this.index.setMeta({ key: An, value: t2 }), this.index.setMeta({ key: Rn, value: String(this.now()) }), this.remoteVersionStaleFromPathWrite = false, Xa(r2, { event: "persisted", reason: "clean_round" })));
      }
      clearRemoteVersion(e2, t2) {
        const r2 = this.index.deleteMeta(An);
        this.index.deleteMeta(Rn), r2 && Xa(e2, { event: "cleared", reason: t2 });
      }
      applyNotModified(e2, t2, r2 = "not_modified") {
        t2.pullOutcome = r2, t2.listingComplete = true, this.lastPullListingComplete = true, this.index.setMeta({ key: En, value: String(this.now()) }), e2.listedWithInclude ? (this.index.setMeta({ key: Cn, value: "0" }), this.index.setMeta({ key: Pn, value: String(this.now()) })) : this.bumpRoundsSinceInclude(), void 0 !== e2.tombstoneWatermarkMs && void 0 !== Ga(this.index.getMeta(xn)) && this.index.setMeta({ key: xn, value: String(e2.tombstoneWatermarkMs) });
      }
      async relistInsteadOfNotModified(e2) {
        if (this.hasMissingMirrorFile()) return this.clearRemoteVersion(e2, "local_file_missing"), await this.listServerFiles(e2);
        const t2 = await this.auditNotModified(e2);
        return void 0 !== t2 && this.clearRemoteVersion(e2, "audit_mismatch"), t2;
      }
      hasMissingMirrorFile() {
        const e2 = new Set(this.index.listPendingDeletes().map((e3) => e3.relPath));
        for (const t2 of this.index.listFiles()) {
          if ("tombstoned" === t2.state || e2.has(t2.relPath)) continue;
          let r2;
          try {
            r2 = x({ base: this.filesDir, relPath: t2.relPath });
          } catch {
            return true;
          }
          if (!oc(r2)) return true;
        }
        return false;
      }
      async auditNotModified(e2) {
        const t2 = this.versionAuditSampleRateValue;
        if (t2 <= 0 || this.random() >= t2) return;
        const r2 = await this.listServerFiles(e2, { tombstoneMode: o.hw.INCLUDE });
        if (!r2.listingComplete) return;
        const n2 = (function(e3) {
          const t3 = /* @__PURE__ */ new Map();
          for (const r4 of e3.files) {
            let n4;
            try {
              n4 = v(r4.relPath);
            } catch {
              continue;
            }
            true !== e3.pendingDeletePaths?.has(n4) && t3.set(n4, st(r4.etag));
          }
          const r3 = /* @__PURE__ */ new Set();
          for (const t4 of e3.tombstones) try {
            r3.add(v(t4.relPath));
          } catch {
            continue;
          }
          let n3 = 0;
          const s2 = /* @__PURE__ */ new Set();
          for (const o2 of e3.indexed) {
            if ("tombstoned" === o2.state || true === e3.pendingDeletePaths?.has(o2.relPath)) continue;
            s2.add(o2.relPath);
            const i2 = t3.get(o2.relPath);
            if (void 0 === i2 || r3.has(o2.relPath)) {
              n3 += 1;
              continue;
            }
            const a2 = st(o2.lastSeenEtag ?? "");
            "" !== a2 && a2 !== i2 && (n3 += 1);
          }
          for (const e4 of t3.keys()) s2.has(e4) || (n3 += 1);
          return n3;
        })({ files: Za({ files: r2.files, maxFileSizeBytes: this.maxFileSizeBytes, platform: this.platform }), tombstones: r2.tombstones, indexed: this.index.listFiles(), pendingDeletePaths: new Set(this.index.listPendingDeletes().map((e3) => e3.relPath)) });
        if (0 !== n2) return e2.versionAudit = "mismatch", this.warn(`Agent store listing version audit: server said not modified but ${n2} index row(s) differ from the listing`, void 0), r2;
        e2.versionAudit = "match";
      }
      async pullDownloadWindow(e2) {
        const t2 = e2.candidates, r2 = e2.summary;
        this.throwIfRoundAborted(), await this.assertRoundStillOwnsLock(void 0, { bypassCache: true });
        const n2 = this.monotonicNow(), s2 = await this.runQueuedControlRpc(this.queues.presign, "rpc", () => this.client.presignReads({ agentId: this.agentId, relPaths: t2.map((e3) => e3.relPath), signal: this.activeRoundSignal }));
        r2.presignMs = (r2.presignMs ?? 0) + (this.monotonicNow() - n2);
        const o2 = /* @__PURE__ */ new Map();
        for (const e3 of s2) {
          let t3;
          try {
            t3 = v(e3.relPath);
          } catch (t4) {
            r2.errors.push({ relPath: e3.relPath, code: "presign_response_mismatch", message: `Server returned an unsafe relPath: ${e3.relPath} (${t4.message})` });
            continue;
          }
          o2.set(t3, e3);
        }
        const i2 = /* @__PURE__ */ new Set();
        for (const e3 of t2) {
          if (i2.size >= 16 && await Promise.race(i2), "full" === this.activeRoundLane && this.roundScheduler.hasPendingPathRounds() && (await Promise.all(i2), await this.yieldToPathRounds()), this.listingSnapshotStaleFor(e3.relPath)) {
            r2.filesSkipped++;
            continue;
          }
          const t3 = this.trackQueue((e4) => this.queues.s3.enqueue(e4), () => this.downloadPullCandidate(e3, o2, r2)).finally(() => i2.delete(t3));
          i2.add(t3);
        }
        await Promise.all(i2);
      }
      async downloadPullCandidate(e2, t2, r2) {
        const n2 = this.progressReporter("index_commit");
        await this.assertRoundStillOwnsLock(e2.relPath, { bypassCache: true });
        const s2 = t2.get(e2.relPath);
        if (void 0 !== s2) try {
          const t3 = await this.downloadOne(e2, s2);
          if ("deferred" === t3.kind) return void r2.pullsDeferred++;
          this.throwIfRoundAborted(e2.relPath), r2.filesPulled++, r2.bytesPulled += t3.size, this.index.upsertFile({ relPath: e2.relPath, lastSeenEtag: t3.etag, lastSyncedSha: t3.sha, size: t3.size, lastSyncedMs: this.now(), direction: "pulled", recordedStat: wn({ absPath: e2.absPath, expectedSize: t3.size, recordedMs: this.now() }) }), n2();
        } catch (t3) {
          this.rethrowIfRoundAbort(t3, e2.relPath), this.rethrowIfLockLost(t3), r2.errors.push({ relPath: e2.relPath, code: t3 instanceof ga ? t3.code : "download_failed", message: t3 instanceof Error ? t3.message : String(t3), ...yc(t3) });
        }
        else r2.errors.push({ relPath: e2.relPath, code: "presign_response_mismatch", message: `Server returned no presigned URL for ${e2.relPath}` });
      }
      async listServerFiles(e2, t2) {
        const r2 = this.monotonicNow();
        try {
          return await this.walkServerFiles(e2, t2);
        } finally {
          e2.listMs = (e2.listMs ?? 0) + (this.monotonicNow() - r2);
        }
      }
      async walkServerFiles(e2, t2) {
        const r2 = this.now();
        let n2;
        n2 = t2?.tombstoneMode === o.hw.OMIT ? { include: false, request: { tombstoneMode: o.hw.OMIT } } : t2?.tombstoneMode === o.hw.INCLUDE ? { include: true, request: { tombstoneMode: o.hw.INCLUDE } } : this.tombstoneListingMode();
        const s2 = [], i2 = /* @__PURE__ */ new Set(), a2 = /* @__PURE__ */ new Map(), c2 = /* @__PURE__ */ new Set();
        let l2, u2, d2 = true, p2 = false, m2 = [""];
        const h2 = /* @__PURE__ */ new Set([""]);
        let f2;
        const g2 = void 0 !== t2?.ifVersionEqual && "" !== t2.ifVersionEqual ? t2.ifVersionEqual : void 0;
        for (; m2.length > 0; ) {
          const t3 = m2;
          let o2;
          m2 = [], this.throwIfRoundAborted();
          try {
            o2 = await this.listLevel(t3, n2.request, g2);
          } catch (e3) {
            throw this.rethrowIfRoundAbort(e3), e3;
          }
          this.throwIfRoundAborted();
          for (const [y3, w2] of t3.entries()) {
            const t4 = o2[y3];
            if ("" === w2) {
              if (f2 = void 0 !== t4.version && "" !== t4.version ? t4.version : void 0, true === t4.notModified) {
                if (void 0 === g2) throw new Error("Agent store listing answered not modified without a version condition");
                return e2.tombstonesReceived = 0, { files: [], tombstones: [], listingComplete: false, removedSubdirs: [], tombstoneWatermarkMs: $a(t4.tombstoneWatermarkMs), tombstoneFloorMs: $a(t4.tombstoneFloorMs), listedWithInclude: n2.include, listStartMs: r2, version: f2 ?? g2, notModified: true };
              }
            } else if (true === t4.notModified) throw new Error(`Agent store listing of ${w2} answered not modified without a condition`);
            true !== t4.listingComplete && (d2 = false);
            const _2 = $a(t4.tombstoneWatermarkMs), b2 = $a(t4.tombstoneFloorMs);
            p2 ? (l2 = ja(l2, _2), u2 = ja(u2, b2)) : (l2 = _2, u2 = b2, p2 = true);
            for (const e3 of t4.removedSubdirs ?? []) {
              let t5;
              try {
                t5 = v(e3);
              } catch {
                continue;
              }
              c2.add(t5), this.index.hasLiveDescendantFiles(t5) && this.enqueueRemovedDirWalk(t5, m2, h2);
            }
            const S2 = [...c2].some((e3) => w2 === e3 || w2.startsWith(`${e3}/`)), k2 = /* @__PURE__ */ new Set();
            if (!S2) for (const e3 of t4.files) {
              let t5;
              try {
                t5 = v(e3.relPath);
              } catch {
                t5 = e3.relPath;
              }
              i2.has(t5) || (U({ relPath: t5, listedDir: w2, removed: c2 }) || (i2.add(t5), k2.add(t5), a2.delete(t5), s2.push(e3)));
            }
            for (const r3 of t4.tombstones ?? []) {
              let t5;
              try {
                t5 = v(r3.relPath);
              } catch {
                e2.refusals++;
                continue;
              }
              k2.has(t5) || (a2.has(t5) || a2.set(t5, { ...r3, relPath: t5 }));
            }
            for (const r3 of t4.subdirs) {
              let t5;
              try {
                t5 = v(r3);
              } catch (t6) {
                e2.errors.push({ relPath: r3, code: "presign_response_mismatch", message: `Server returned an unsafe subdir: ${r3} (${t6.message})` });
                continue;
              }
              h2.has(t5) || ([...c2].some((e3) => t5 === e3 || t5.startsWith(`${e3}/`)) || (h2.add(t5), m2.push(t5)));
            }
          }
        }
        const y2 = [...a2.values()];
        return e2.tombstonesReceived = y2.length, { files: s2, tombstones: y2, listingComplete: d2, removedSubdirs: [...c2], tombstoneWatermarkMs: l2, tombstoneFloorMs: u2, listedWithInclude: n2.include, listStartMs: r2, version: f2, notModified: false };
      }
      async listLevel(e2, t2, r2) {
        const n2 = this.activeRoundSignal, s2 = new AbortController(), o2 = wc(n2, s2.signal), i2 = (e3) => {
          true === n2?.aborted && fc(e3, n2.reason), s2.signal.throwIfAborted();
        }, a2 = new Array(e2.length), c2 = /* @__PURE__ */ new Set();
        let l2;
        const u2 = (e3) => {
          void 0 === l2 && (l2 = { cause: e3 }, s2.abort());
        };
        for (const [n3, s3] of e2.entries()) {
          if (c2.size >= this.listWalkConcurrency && await Promise.race(c2), void 0 !== l2) break;
          if ("full" === this.activeRoundLane && this.roundScheduler.hasPendingPathRounds()) {
            if (await Promise.all(c2), void 0 !== l2) break;
            try {
              await this.yieldToPathRounds();
            } catch (e4) {
              u2(e4);
              break;
            }
          }
          const e3 = this.trackQueue((e4) => this.queues.list.enqueue(e4), async () => {
            const e4 = this.progressReporter("listing_page");
            i2(s3), a2[n3] = await this.client.listFiles({ agentId: this.agentId, relPath: s3, signal: o2, ...t2, ..."" === s3 && void 0 !== r2 ? { ifVersionEqual: r2 } : {} }), e4();
          }).then(Ia, u2).finally(() => c2.delete(e3));
          c2.add(e3);
        }
        if (await Promise.all(c2), void 0 !== l2) throw l2.cause;
        return a2;
      }
      enqueueRemovedDirWalk(e2, t2, r2) {
        r2.has(e2) || (r2.add(e2), t2.push(e2));
        for (const n2 of this.index.listFiles()) {
          if ("tombstoned" === n2.state) continue;
          if (!Ba({ relPath: n2.relPath, dir: e2 })) continue;
          let s2 = Oa(n2.relPath);
          for (; void 0 !== s2 && "" !== s2 && Ba({ relPath: s2, dir: e2 }); ) r2.has(s2) || (r2.add(s2), t2.push(s2)), s2 = Oa(s2);
        }
      }
      async applyRemovedLocalDirs(e2, t2, r2) {
        const n2 = /* @__PURE__ */ new Set();
        for (const e3 of t2) try {
          n2.add(v(e3.relPath));
        } catch {
        }
        const s2 = [...new Set(e2)].sort(qa);
        for (const e3 of s2) "" !== e3 && (this.index.removePendingRmdir(e3), n2.has(e3) ? (await this.clearLeftoverDescendantsForReusedFile(e3, r2), this.rmdirLocalEmptyAncestors(e3, r2)) : this.hasLiveIndexRowsUnder(e3) || this.rmdirLocalEmptyAncestors(e3, r2));
      }
      async clearLeftoverDescendantsForReusedFile(e2, t2) {
        for (const r2 of this.index.listFiles()) {
          if ("tombstoned" === r2.state || r2.relPath === e2) continue;
          if (!Ba({ relPath: r2.relPath, dir: e2 })) continue;
          const n2 = Ma({ base: this.filesDir, relPath: r2.relPath });
          if ("absent" === n2.kind) {
            this.index.deleteFile(r2.relPath);
            continue;
          }
          if ("refused" === n2.kind) {
            t2.errors.push({ relPath: r2.relPath, code: "not_regular_file", message: n2.message });
            continue;
          }
          const s2 = n2.leafAbs;
          let o2, i2;
          try {
            o2 = p.lstatSync(s2);
          } catch (e3) {
            if (!uc(e3) || "ENOENT" !== e3.code) {
              t2.errors.push({ relPath: r2.relPath, code: "fs_read_failed", message: e3 instanceof Error ? e3.message : String(e3) });
              continue;
            }
            this.index.deleteFile(r2.relPath);
            continue;
          }
          if (o2.isSymbolicLink() || !o2.isFile()) {
            if (o2.isDirectory()) continue;
            if (!this.relocateBlockerOutsideRemovedDir({ absPath: s2, relPath: r2.relPath, dir: e2 })) {
              t2.errors.push({ relPath: r2.relPath, code: "fs_write_failed", message: `Failed to park leftover ${r2.relPath} under reused ${e2}` });
              continue;
            }
            this.index.deleteFile(r2.relPath);
            continue;
          }
          try {
            i2 = (await nc({ absPath: s2, maxBytes: this.maxFileSizeBytes, expectedDev: o2.dev, expectedIno: o2.ino })).sha;
          } catch (e3) {
            t2.errors.push({ relPath: r2.relPath, code: e3 instanceof ga ? e3.code : "fs_read_failed", message: e3 instanceof Error ? e3.message : String(e3) });
            continue;
          }
          const a2 = Ma({ base: this.filesDir, relPath: r2.relPath });
          if ("ready" === a2.kind && a2.leafAbs === s2) {
            if (i2 !== r2.lastSyncedSha) {
              if (!this.parkUnsyncedBytesOutsideRemovedDir({ absPath: s2, relPath: r2.relPath, dir: e2 })) {
                t2.errors.push({ relPath: r2.relPath, code: "fs_write_failed", message: `Failed to park leftover ${r2.relPath} under reused ${e2}` });
                continue;
              }
            } else {
              try {
                p.unlinkSync(s2);
              } catch (n3) {
                if (!uc(n3) || "ENOENT" !== n3.code) {
                  t2.errors.push({ relPath: r2.relPath, code: "fs_write_failed", message: `Failed to unlink leftover ${r2.relPath} under reused ${e2}: ${n3 instanceof Error ? n3.message : String(n3)}` });
                  continue;
                }
              }
              t2.filesDeletedLocal++;
            }
            this.index.deleteFile(r2.relPath);
          } else t2.errors.push({ relPath: r2.relPath, code: "not_regular_file", message: `Refusing leftover ${r2.relPath}: parent changed before park or unlink` });
        }
        this.clearUnindexedDiskLeftoversForReusedFile(e2, t2);
      }
      clearUnindexedDiskLeftoversForReusedFile(e2, t2) {
        const r2 = this.listDiskNodesUnder(e2, t2);
        r2.sort((e3, t3) => qa(e3.relPath, t3.relPath));
        for (const n2 of r2) {
          const r3 = this.index.getFile(n2.relPath);
          if (void 0 !== r3 && "tombstoned" !== r3.state) continue;
          ("file" === n2.kind ? this.parkUnsyncedBytesOutsideRemovedDir({ absPath: n2.absPath, relPath: n2.relPath, dir: e2 }) : this.relocateBlockerOutsideRemovedDir({ absPath: n2.absPath, relPath: n2.relPath, dir: e2 })) ? void 0 !== r3 && this.index.deleteFile(n2.relPath) : t2.errors.push({ relPath: n2.relPath, code: "fs_write_failed", message: `Failed to park unindexed leftover ${n2.relPath} under reused ${e2}` });
        }
      }
      relocateBlockerOutsideRemovedDir(e2) {
        return void 0 !== this.materializeConflictRename({ absPath: e2.absPath }, Ta(Ja({ relPath: e2.relPath, dir: e2.dir })), { requireRegularFile: false });
      }
      listDiskNodesUnder(e2, t2) {
        const r2 = [];
        let n2;
        try {
          n2 = C({ base: this.filesDir, relPath: e2 });
        } catch (n3) {
          return t2.errors.push({ relPath: e2, code: "fs_read_failed", message: n3 instanceof Error ? n3.message : String(n3) }), r2;
        }
        if ("directory" !== n2.kind) return r2;
        const s2 = [{ relPath: e2, absPath: n2.absPath }];
        for (; s2.length > 0; ) {
          const e3 = s2.pop();
          if (void 0 === e3) break;
          let n3;
          try {
            const r3 = p.lstatSync(e3.absPath);
            if (r3.isSymbolicLink() || !r3.isDirectory()) {
              t2.errors.push({ relPath: e3.relPath, code: "not_regular_file", message: `Refusing to walk leftover parent ${e3.relPath}: not a directory` });
              continue;
            }
            n3 = p.readdirSync(e3.absPath, { withFileTypes: true });
            const s3 = p.lstatSync(e3.absPath);
            if (s3.isSymbolicLink() || !s3.isDirectory() || s3.dev !== r3.dev || s3.ino !== r3.ino) {
              t2.errors.push({ relPath: e3.relPath, code: "not_regular_file", message: `Refusing to walk leftover parent ${e3.relPath}: directory changed during readdir` });
              continue;
            }
          } catch (r3) {
            if (uc(r3) && "ENOENT" === r3.code) continue;
            t2.errors.push({ relPath: e3.relPath, code: "fs_read_failed", message: r3 instanceof Error ? r3.message : String(r3) });
            continue;
          }
          for (const o2 of n3) {
            if ("." === o2.name || ".." === o2.name || 0 === o2.name.length || o2.name.includes("/") || o2.name.includes("\\")) continue;
            const n4 = "" === e3.relPath ? o2.name : `${e3.relPath}/${o2.name}`;
            try {
              v(n4);
            } catch (e4) {
              t2.errors.push({ relPath: n4, code: "fs_read_failed", message: e4 instanceof Error ? e4.message : String(e4) });
              continue;
            }
            const i2 = h.join(e3.absPath, o2.name);
            let a2;
            try {
              a2 = p.lstatSync(i2);
            } catch (e4) {
              if (uc(e4) && "ENOENT" === e4.code) continue;
              t2.errors.push({ relPath: n4, code: "fs_read_failed", message: e4 instanceof Error ? e4.message : String(e4) });
              continue;
            }
            !a2.isSymbolicLink() && a2.isDirectory() ? s2.push({ relPath: n4, absPath: i2 }) : r2.push({ relPath: n4, absPath: i2, kind: a2.isFile() ? "file" : "blocker" });
          }
        }
        return r2;
      }
      rmdirLocalEmptyAncestors(e2, t2) {
        const { removedCount: r2 } = P({ base: this.filesDir, dirRelPath: e2 });
        r2 > 0 && (t2.removedDirsApplied = (t2.removedDirsApplied ?? 0) + r2);
      }
      async applyRemoteTombstones(e2, t2, r2) {
        const n2 = true === r2?.acceptEmptyTombstoneEtag;
        let s2 = 0, o2 = 0, i2 = 0;
        for (const r3 of e2) {
          if (0 === r3.tombstoneEtag.length && !n2) {
            s2++;
            continue;
          }
          const e3 = r3.relPath;
          if (this.listingSnapshotStaleFor(e3)) {
            s2++;
            continue;
          }
          const a2 = this.index.getFile(e3);
          if ("tombstoned" === a2?.state) {
            const e4 = La(r3.tombstoneEtag);
            void 0 !== e4 && a2.tombstoneEtag !== e4 && this.index.upsertFile({ ...a2, lastSyncedMs: this.now(), state: "tombstoned", tombstoneEtag: e4, deletedAtMs: r3.deletedAtMs > 0 ? r3.deletedAtMs : this.now() });
            continue;
          }
          let c2, l2;
          try {
            c2 = x({ base: this.filesDir, relPath: e3 });
          } catch (r4) {
            t2.refusals++, t2.errors.push({ relPath: e3, code: "not_regular_file", message: r4 instanceof Error ? r4.message : String(r4) }), s2++;
            continue;
          }
          try {
            l2 = p.lstatSync(c2);
          } catch (r4) {
            if (!uc(r4) || "ENOENT" !== r4.code) {
              t2.errors.push({ relPath: e3, code: "fs_read_failed", message: r4 instanceof Error ? r4.message : String(r4) }), s2++;
              continue;
            }
          }
          if (void 0 !== l2) {
            if (!l2.isFile() || l2.isSymbolicLink()) {
              t2.errors.push({ relPath: e3, code: "not_regular_file", message: `Refusing to apply tombstone over non-regular file: ${e3}` }), s2++;
              continue;
            }
            if (void 0 === a2) {
              if ("readWrite" === this.syncMode) {
                s2++;
                continue;
              }
              if (!this.parkUnsyncedBytesBesidePath({ absPath: c2, relPath: e3 })) {
                s2++;
                continue;
              }
              t2.filesDeletedLocal++, this.index.upsertFile({ relPath: e3, lastSyncedSha: "", size: 0, lastSyncedMs: this.now(), direction: "pulled", state: "tombstoned", tombstoneEtag: La(r3.tombstoneEtag), deletedAtMs: r3.deletedAtMs > 0 ? r3.deletedAtMs : this.now() }), o2++;
              continue;
            }
            let n3;
            try {
              n3 = (await nc({ absPath: c2, maxBytes: this.maxFileSizeBytes, expectedDev: l2.dev, expectedIno: l2.ino })).sha;
            } catch (r4) {
              t2.errors.push({ relPath: e3, code: r4 instanceof ga ? r4.code : "fs_read_failed", message: r4 instanceof Error ? r4.message : String(r4) }), s2++;
              continue;
            }
            if (n3 !== a2.lastSyncedSha) {
              if ("readWrite" === this.syncMode) {
                s2++, i2++;
                continue;
              }
              if (!this.parkUnsyncedBytesBesidePath({ absPath: c2, relPath: e3 })) {
                s2++;
                continue;
              }
            }
            const u2 = t2.conflicts.find((t3) => t3.relPath === e3);
            if (void 0 !== u2) {
              const e4 = this.materializeConflictRename({ absPath: c2 }, u2.conflictRelPath);
              if (void 0 === e4) {
                s2++;
                continue;
              }
              this.index.upsertFile({ relPath: e4.canonicalRelPath, lastSeenEtag: u2.conflictEtag, lastSyncedSha: n3, size: l2.size, lastSyncedMs: this.now(), direction: "pushed" });
            } else {
              try {
                p.unlinkSync(c2);
              } catch (r4) {
                if (!uc(r4) || "ENOENT" !== r4.code) {
                  t2.errors.push({ relPath: e3, code: "fs_write_failed", message: `Failed to unlink remotely deleted ${e3}: ${r4 instanceof Error ? r4.message : String(r4)}` }), s2++;
                  continue;
                }
              }
              t2.filesDeletedLocal++;
            }
          }
          this.index.upsertFile({ relPath: e3, lastSyncedSha: a2?.lastSyncedSha ?? "", ...void 0 !== a2?.lastSeenEtag ? { lastSeenEtag: a2.lastSeenEtag } : {}, size: a2?.size ?? 0, lastSyncedMs: this.now(), direction: a2?.direction ?? "pulled", state: "tombstoned", tombstoneEtag: La(r3.tombstoneEtag), deletedAtMs: r3.deletedAtMs > 0 ? r3.deletedAtMs : this.now() }), o2++;
        }
        return { deferred: s2, applied: o2, skippedModified: i2 };
      }
      tombstoneListingMode() {
        const e2 = Ga(this.index.getMeta(kn)), t2 = this.tombstoneFullRefreshRounds(), r2 = za(this.index.getMeta(Cn)), n2 = Ga(this.index.getMeta(Pn)), s2 = this.tombstoneFullRefreshIntervalMs(), i2 = s2 > 0 && void 0 !== e2 && (void 0 === n2 || this.now() - n2 >= s2);
        return void 0 === e2 || t2 <= 1 || r2 + 1 >= t2 || i2 ? { include: true, request: { tombstoneMode: o.hw.INCLUDE } } : { include: false, request: { tombstoneMode: o.hw.SINCE, tombstonesSinceMs: e2 } };
      }
      tombstoneFullRefreshRounds() {
        return this.tombstoneFullRefreshRoundsValue;
      }
      tombstoneFullRefreshIntervalMs() {
        return this.tombstoneFullRefreshIntervalMsValue;
      }
      tombstonePruneSlackMs() {
        return this.tombstonePruneSlackMsValue;
      }
      commitTombstoneCursor(e2) {
        if (!e2.listingComplete) return;
        if (e2.listedWithInclude && (this.index.setMeta({ key: Cn, value: "0" }), this.index.setMeta({ key: Pn, value: String(this.now()) })), void 0 === e2.watermarkMs || e2.deferred > 0) return;
        const t2 = Ga(this.index.getMeta(kn));
        this.index.setMeta({ key: kn, value: String(e2.watermarkMs) }), e2.summary.tombstoneCursorAdvancedMs = void 0 === t2 ? 0 : e2.watermarkMs - t2, e2.listedWithInclude || this.bumpRoundsSinceInclude();
      }
      bumpRoundsSinceInclude() {
        const e2 = za(this.index.getMeta(Cn)) + 1;
        this.index.setMeta({ key: Cn, value: String(e2) });
      }
      pruneExpiredTombstoneRows({ tombstones: e2, listingComplete: t2, tombstoneFloorMs: r2, listedWithInclude: n2 }) {
        if (void 0 !== r2) {
          const e3 = r2 - this.tombstonePruneSlackMs();
          for (const t3 of this.index.listFiles()) {
            if ("tombstoned" !== t3.state) continue;
            (t3.deletedAtMs ?? t3.lastSyncedMs) >= e3 || this.index.deleteFile(t3.relPath);
          }
          return;
        }
        if (!t2 || !n2) return;
        const s2 = new Set(e2.map((e3) => e3.relPath)), o2 = this.now() - ra;
        for (const e3 of this.index.listFiles()) {
          if ("tombstoned" !== e3.state) continue;
          if (s2.has(e3.relPath)) continue;
          (e3.deletedAtMs ?? e3.lastSyncedMs) > o2 || this.index.deleteFile(e3.relPath);
        }
      }
      lastCompleteRoundMs() {
        return Ga(this.index.getMeta(xn)) ?? Ga(this.index.getMeta(In));
      }
      commitLastCompleteRoundMs(e2) {
        return !!e2.listingComplete && (this.index.setMeta({ key: En, value: String(this.now()) }), (!e2.absenceNeeded || void 0 !== e2.tombstoneFloorMs) && (!(e2.absenceDeferred > 0) && (this.index.setMeta({ key: xn, value: String(e2.watermarkMs ?? e2.listStartMs) }), true)));
      }
      shouldApplyAbsenceDeletes(e2) {
        return !e2.listingComplete || void 0 === e2.tombstoneFloorMs || void 0 === e2.lastCompleteRoundMs || e2.lastCompleteRoundMs >= e2.tombstoneFloorMs ? "no" : e2.listedWithInclude ? "ready" : "needs-include";
      }
      async applyAbsenceDeletes(e2) {
        const t2 = e2.tombstoneFloorMs;
        if ("ready" !== this.shouldApplyAbsenceDeletes({ listingComplete: e2.listingComplete, listedWithInclude: e2.listedWithInclude, tombstoneFloorMs: t2, lastCompleteRoundMs: e2.lastCompleteRoundMs }) || void 0 === t2) return { deferred: 0 };
        const r2 = /* @__PURE__ */ new Set();
        for (const t3 of e2.files) try {
          r2.add(v(t3.relPath));
        } catch {
          continue;
        }
        const n2 = new Set(e2.tombstones.map((e3) => e3.relPath)), s2 = [];
        for (const o3 of this.index.listFiles()) "live" === o3.state && void 0 !== o3.lastSeenEtag && 0 !== o3.lastSeenEtag.length && ((0, Wt.TM)(o3.relPath) || this.index.hasPendingDelete(o3.relPath) || r2.has(o3.relPath) || n2.has(o3.relPath) || e2.removedSubdirs.some((e3) => Ba({ relPath: o3.relPath, dir: e3 })) || s2.push({ relPath: o3.relPath, tombstoneEtag: "", deletedAtMs: t2 }));
        const o2 = await this.applyRemoteTombstones(s2, e2.summary, { acceptEmptyTombstoneEtag: true });
        e2.summary.absenceDeletesApplied = o2.applied, e2.summary.absenceDeletesSkippedModified = o2.skippedModified;
        const i2 = /* @__PURE__ */ new Set();
        for (const e3 of s2) {
          if ("tombstoned" !== this.index.getFile(e3.relPath)?.state) continue;
          const t3 = Oa(e3.relPath);
          void 0 !== t3 && "" !== t3 && i2.add(t3);
        }
        for (const t3 of [...i2].sort(qa)) this.hasLiveIndexRowsUnder(t3) || this.rmdirLocalEmptyAncestors(t3, e2.summary);
        return { deferred: o2.deferred };
      }
      preparePullCandidate(e2, t2) {
        let r2, n2;
        try {
          r2 = v(e2.relPath), k({ relPath: r2, platform: this.platform }), n2 = x({ base: this.filesDir, relPath: r2 });
        } catch (r3) {
          t2.refusals++;
          let n3 = "presign_response_mismatch";
          return r3 instanceof f && (n3 = "windows_incompatible" === r3.code ? "windows_incompatible" : "not_regular_file"), void t2.errors.push({ relPath: e2.relPath, code: n3, message: r3 instanceof Error ? r3.message : String(r3) });
        }
        if (e2.size > this.maxFileSizeBytes) return void t2.errors.push({ relPath: r2, code: "file_too_large", message: `Server file ${r2} (${e2.size} bytes) exceeds the ${this.maxFileSizeBytes}-byte cap` });
        if (this.listingSnapshotStaleFor(r2)) return void t2.filesSkipped++;
        const s2 = this.index.getFile(r2);
        return void 0 !== s2 && s2.lastSeenEtag === st(e2.etag) && oc(n2) ? (this.index.upsertFile({ ...s2, lastSyncedMs: this.now(), state: "live", tombstoneEtag: void 0, deletedAtMs: void 0 }), void t2.filesSkipped++) : { relPath: r2, absPath: n2, serverEtag: st(e2.etag), serverSize: e2.size };
      }
      pullCandidatesFromListing(e2, t2, r2) {
        const n2 = new Set(this.index.listPendingDeletes().map((e3) => e3.relPath)), s2 = [], o2 = /* @__PURE__ */ new Map();
        for (const i2 of e2) {
          let e3;
          try {
            e3 = v(i2.relPath);
          } catch (e4) {
            void 0 === r2 && (t2.refusals++, t2.errors.push({ relPath: i2.relPath, code: "presign_response_mismatch", message: e4 instanceof Error ? e4.message : String(e4) }));
            continue;
          }
          const a2 = e3.toLowerCase(), c2 = o2.get(a2);
          if (void 0 !== c2 && c2 !== e3) {
            (void 0 === r2 || r2.has(e3)) && t2.errors.push({ relPath: e3, code: "case_collision", message: `Server listing has case-colliding paths: ${c2} and ${e3}` });
            continue;
          }
          if (o2.set(a2, e3), void 0 !== r2 && !r2.has(e3)) continue;
          if (n2.has(e3)) {
            t2.pullsSkippedPendingDelete++;
            continue;
          }
          const l2 = this.preparePullCandidate(i2, t2);
          void 0 !== l2 && s2.push(l2);
        }
        return s2;
      }
      async pullCandidates(e2, t2) {
        for (let r2 = 0; r2 < e2.length; r2 += this.pullPresignWindowSize) await this.yieldToPathRounds(), await this.pullDownloadWindow({ candidates: e2.slice(r2, r2 + this.pullPresignWindowSize), summary: t2 });
      }
      async downloadOne(e2, t2) {
        this.assertPresignedUrlSafe({ rawUrl: t2.url, relPath: e2.relPath });
        const r2 = this.activeRoundSignal, n2 = (function(e3) {
          if (e3 <= 0) return;
          const t3 = new AbortController();
          let r3;
          const n3 = () => {
            t3.signal.aborted || (void 0 !== r3 && clearTimeout(r3), r3 = setTimeout(() => {
              t3.abort(new DOMException(`blob transfer idle timeout after ${e3}ms`, "TimeoutError"));
            }, e3), r3.unref?.());
          };
          return { signal: t3.signal, rearm: n3, clear: () => {
            void 0 !== r3 && (clearTimeout(r3), r3 = void 0);
          } };
        })(this.blobIdleTimeoutMs), s2 = wc(r2, n2?.signal);
        let o2;
        try {
          o2 = await this.fetchImpl(t2.url, { method: "GET", redirect: "error", ...void 0 !== s2 ? { signal: s2 } : {} });
        } catch (s3) {
          if (n2?.clear(), true === r2?.aborted && fc(e2.relPath, r2.reason ?? s3), vc(s3, n2?.signal)) throw new ga({ code: "download_failed", relPath: e2.relPath, timeoutClass: "blob_get", message: `blob_get idle timeout after ${this.blobIdleTimeoutMs}ms (url=${js(t2.url)})` });
          throw s3;
        }
        if (!o2.ok) {
          n2?.clear();
          const r3 = await (async function(e3) {
            try {
              return await e3.text();
            } catch {
              return "";
            }
          })(o2);
          throw new ga({ code: "download_failed", relPath: e2.relPath, message: `Download of ${e2.relPath} failed (${o2.status} ${o2.statusText}, url=${js(t2.url)}): ${r3}` });
        }
        if (null === o2.body) throw n2?.clear(), new ga({ code: "download_failed", relPath: e2.relPath, message: `Download of ${e2.relPath} returned an empty response body` });
        const i2 = h.dirname(e2.absPath);
        ac({ base: this.filesDir, parent: i2, relPath: e2.relPath }), cc({ base: this.filesDir, target: i2, relPath: e2.relPath }), ic({ absPath: e2.absPath, relPath: e2.relPath });
        const a2 = `${(0, Ys.randomBytes)(16).toString("hex")}.bin`, c2 = x({ base: this.tmpDir, relPath: a2 }), l2 = p.openSync(c2, sc(), 384);
        let u2 = 0;
        const d2 = (0, Ys.createHash)("sha256"), m2 = this.maxFileSizeBytes, f2 = void 0 === this.onRoundProgress ? void 0 : this.progressReporter("blob_get_bytes"), g2 = new Ri.Transform({ transform: (t3, r3, s3) => {
          const o3 = Buffer.isBuffer(t3) ? t3 : Buffer.from(t3);
          u2 += o3.byteLength, f2?.(o3.byteLength), n2?.rearm(), u2 > m2 ? s3(new ga({ code: "file_too_large", relPath: e2.relPath, message: `Server returned >${m2} bytes for ${e2.relPath}` })) : (d2.update(o3), s3(null, o3));
        } }), y2 = p.createWriteStream("", { fd: l2, autoClose: false }), w2 = () => {
          n2?.rearm();
        };
        let v2 = false, _2 = false, b2 = "", S2 = "";
        try {
          try {
            n2?.rearm(), y2.on("drain", w2), await (0, Mi.pipeline)(Ri.Readable.fromWeb(o2.body), g2, y2);
          } catch (s4) {
            if (s4 instanceof ga) throw s4;
            if (true === r2?.aborted && fc(e2.relPath, r2.reason ?? s4), vc(s4, n2?.signal)) throw new ga({ code: "download_failed", relPath: e2.relPath, timeoutClass: "blob_get", message: `blob_get idle timeout after ${this.blobIdleTimeoutMs}ms (url=${js(t2.url)})` });
            throw new ga({ code: "download_failed", relPath: e2.relPath, message: `Streaming ${e2.relPath} from ${js(t2.url)} failed: ${s4 instanceof Error ? s4.message : String(s4)}` });
          } finally {
            y2.off("drain", w2), n2?.clear();
          }
          try {
            p.fsyncSync(l2);
          } catch {
          }
          if (p.closeSync(l2), _2 = true, S2 = st(o2.headers.get("etag") ?? void 0), 0 === S2.length) throw new ga({ code: "etag_mismatch", relPath: e2.relPath, message: `Download of ${e2.relPath} returned no ETag header (expected ${e2.serverEtag})` });
          const s3 = await this.listedIdentity(e2, S2);
          if (s3?.etag !== S2) throw new ga({ code: "etag_mismatch", relPath: e2.relPath, message: `Downloaded ${e2.relPath} etag ${S2}, but the server lists ${s3?.etag ?? "no such file"} (round listed ${e2.serverEtag})` });
          if (u2 !== s3.size) throw new ga({ code: "etag_mismatch", relPath: e2.relPath, message: `Downloaded ${e2.relPath} size ${u2}, expected ${s3.size}` });
          if (b2 = d2.digest("hex"), "readWrite" === this.syncMode && !await this.isLocalFileReplaceable(e2, b2)) return { kind: "deferred" };
          try {
            p.renameSync(c2, e2.absPath), v2 = true;
          } catch (t3) {
            throw new ga({ code: "fs_write_failed", relPath: e2.relPath, message: `Failed to rename staged blob into ${e2.absPath}: ${t3 instanceof Error ? t3.message : String(t3)}` });
          }
          try {
            p.chmodSync(e2.absPath, this.pulledFileMode());
          } catch {
          }
        } finally {
          if (!_2) try {
            p.closeSync(l2);
          } catch {
          }
          if (!v2) try {
            p.unlinkSync(c2);
          } catch {
          }
        }
        return { kind: "downloaded", size: u2, sha: b2, etag: S2 };
      }
      async listedIdentity(e2, t2) {
        if (t2 === e2.serverEtag) return { etag: e2.serverEtag, size: e2.serverSize };
        this.client.invalidateListCache?.({ agentId: this.agentId });
        const r2 = await this.runQueuedControlRpc(this.queues.list, "listing_page", () => this.client.listFiles({ agentId: this.agentId, relPath: Ua(e2.relPath), tombstoneMode: o.hw.OMIT, signal: this.activeRoundSignal }));
        for (const t3 of r2.files) {
          let r3;
          try {
            r3 = v(t3.relPath);
          } catch {
            continue;
          }
          if (r3 === e2.relPath) return { etag: st(t3.etag), size: t3.size };
        }
      }
      async isLocalFileReplaceable(e2, t2) {
        let r2;
        try {
          r2 = p.lstatSync(e2.absPath);
        } catch (e3) {
          return !(!uc(e3) || "ENOENT" !== e3.code);
        }
        if (!r2.isFile()) return false;
        if (r2.nlink > 1) return true;
        try {
          const { sha: n2 } = await nc({ absPath: e2.absPath, maxBytes: this.maxFileSizeBytes, expectedDev: r2.dev, expectedIno: r2.ino });
          if (n2 === t2) return true;
          const s2 = this.index.getFile(e2.relPath);
          return void 0 !== s2 && n2 === s2.lastSyncedSha;
        } catch {
          return false;
        }
      }
      decidePushStatFastPath(e2) {
        if (!hn(this.localStatFastPath, this.platform)) return "hash";
        const t2 = e2.existing, r2 = fn({ mode: this.localStatFastPath, platform: this.platform, racyMarginMs: this.localStatRacyMarginMs, live: wa(e2.absPath, e2.size), recorded: t2?.recordedStat, synced: void 0 !== t2 && "tombstoned" !== t2.state, indexSize: t2?.size });
        return "skip" !== r2.action || this.shouldAuditStatFastPath() ? "skip" === r2.action ? "audit" : ("hash" === r2.action && this.noteStatFastPath("miss"), "hash") : "unchanged";
      }
      async hashCandidate(e2) {
        let t2;
        try {
          t2 = x({ base: this.filesDir, relPath: e2.relPath });
        } catch (t3) {
          return { kind: "error", relPath: e2.relPath, code: "not_regular_file", message: t3 instanceof Error ? t3.message : `Unsafe path: ${e2.relPath}` };
        }
        if (t2 !== e2.absPath) return { kind: "error", relPath: e2.relPath, code: "not_regular_file", message: `Resolved path ${t2} did not match walk-reported path ${e2.absPath}` };
        const r2 = this.decidePushStatFastPath(e2);
        if ("unchanged" === r2 && void 0 !== e2.existing) return { kind: "stat_unchanged", relPath: e2.relPath, existing: e2.existing };
        let n2, s2, o2, i2;
        "audit" === r2 && (e2 = { ...e2, statFastPathAudit: "skip" });
        try {
          const t3 = await nc({ absPath: e2.absPath, maxBytes: this.maxFileSizeBytes, expectedDev: e2.dev, expectedIno: e2.ino, ...e2.size >= this.multipartUploadThresholdBytes ? { multipartPartSizeBytes: this.multipartPartSizeBytes } : {} });
          n2 = t3.size, s2 = t3.sha, o2 = t3.etag, i2 = t3.multipartParts;
        } catch (t3) {
          return t3 instanceof ga ? { kind: "error", relPath: e2.relPath, code: t3.code, message: t3.message } : { kind: "error", relPath: e2.relPath, code: "fs_read_failed", message: t3 instanceof Error ? t3.message : `Failed to hash file: ${t3}` };
        }
        return { kind: "hashed", relPath: e2.relPath, absPath: e2.absPath, size: n2, mtimeMs: e2.mtimeMs, dev: e2.dev, ino: e2.ino, sha: s2, etag: o2, ...void 0 !== i2 ? { multipartParts: i2 } : {}, ...void 0 !== e2.statFastPathAudit ? { statFastPathAudit: e2.statFastPathAudit } : {}, existing: e2.existing };
      }
      async uploadOne(e2, t2, r2) {
        return this.assertPresignedUrlSafe({ rawUrl: t2.url, relPath: e2.relPath }), await this.runQueued(this.queues.s3, async () => (this.throwIfRoundAborted(e2.relPath), this.assertPresignedUrlNotExpired({ expiresAtMs: t2.expiresAtMs, relPath: e2.relPath }), await this.assertRoundStillOwnsLock(e2.relPath, { bypassCache: true }), await this.blobTransfer.uploadFile({ url: t2.url, relPath: e2.relPath, absPath: e2.absPath, sha: e2.sha, size: e2.size, expectedDev: e2.dev, expectedIno: e2.ino, presignHeaders: t2.headers, signal: this.activeRoundSignal, ...void 0 !== this.onRoundProgress ? { onBytes: this.cappedRoundBytes("blob_put_bytes", e2.relPath, e2.size) } : {} })));
      }
      assertPresignedUrlNotExpired(e2) {
        if (e2.expiresAtMs <= this.now()) throw new ga({ code: "presigned_url_expired", relPath: e2.relPath, message: `Presigned upload URL expired before ${e2.relPath} could be sent`, retryable: false });
      }
      assertPresignedUrlSafe({ rawUrl: e2, relPath: t2 }) {
        try {
          Gs({ rawUrl: e2, relPath: t2, validatePresignedUrl: this.validatePresignedUrl });
        } catch (e3) {
          throw new ga({ code: "presigned_url_rejected", relPath: t2, message: e3 instanceof Error ? e3.message : String(e3), cause: e3 instanceof Error ? e3 : void 0 });
        }
      }
      shouldAuditStatFastPath() {
        const e2 = this.localStatFastPathAuditRate;
        return e2 > 0 && (e2 >= 1 || this.random() < e2);
      }
      noteStatFastPath(e2) {
        try {
          this.onStatFastPath?.(e2);
        } catch {
        }
      }
      captureRecordedStat(e2) {
        return wn({ absPath: e2.absPath, expectedSize: e2.size, expectedDev: BigInt(e2.dev), expectedIno: BigInt(e2.ino), recordedMs: this.now() });
      }
      ensureDirsExist() {
        p.mkdirSync(this.filesDir, { recursive: true, mode: Wt.qH }), p.mkdirSync(this.tmpDir, { recursive: true, mode: Wt.qH });
      }
    }
    function wa(e2, t2) {
      try {
        const r2 = p.lstatSync(e2, { bigint: true });
        if (r2.isSymbolicLink() || !r2.isFile() || r2.size > BigInt(Number.MAX_SAFE_INTEGER)) return { size: t2 };
        const n2 = r2.nlink <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(r2.nlink) : void 0;
        return { size: Number(r2.size), mtimeNs: r2.mtimeNs, ctimeNs: r2.ctimeNs, inoNs: r2.ino, devNs: r2.dev, ...void 0 !== n2 ? { nlink: n2 } : {} };
      } catch {
        return { size: t2 };
      }
    }
    function va(e2) {
      return e2 instanceof ga && "write_conflict" === e2.code;
    }
    function _a(e2) {
      return e2 instanceof ga && "presigned_url_expired" === e2.code;
    }
    function ba(e2) {
      return true === e2.primaryPreconditionFailed || void 0 !== e2.lockRedirect;
    }
    function Sa(e2, t2) {
      return true !== e2.primaryPreconditionFailed && void 0 !== e2.lockRedirect && e2.lockRedirect.lockExpiresAtMs <= t2;
    }
    function ka(e2) {
      for (const t2 of Object.keys(e2.headers ?? {})) {
        const e3 = t2.toLowerCase();
        if ("if-match" === e3 || "if-none-match" === e3) return true;
      }
      return false;
    }
    function xa(e2, t2) {
      const r2 = t2.toLowerCase();
      for (const [t3, n2] of Object.entries(e2)) if (t3.toLowerCase() === r2) return n2;
    }
    function Ea(e2, t2) {
      return { relPath: e2, code: t2 instanceof ga ? t2.code : "upload_failed", message: t2 instanceof Error ? t2.message : String(t2), ...yc(t2) };
    }
    function Ia() {
    }
    function Ta(e2) {
      const t2 = e2.lastIndexOf("/"), r2 = t2 >= 0 ? e2.slice(0, t2 + 1) : "", n2 = t2 >= 0 ? e2.slice(t2 + 1) : e2, s2 = n2.lastIndexOf("."), o2 = s2 > 0, i2 = o2 ? n2.slice(0, s2) : n2, a2 = o2 ? n2.slice(s2) : "";
      return `${r2}${i2}.local-conflict.${(0, Ys.randomUUID)()}${a2}`;
    }
    function Ca(e2) {
      const { start: t2, end: r2 } = e2;
      return "unreadable" !== t2.kind && "unreadable" !== r2.kind && ("absent" === t2.kind || "absent" === r2.kind || (t2.identity.dev !== r2.identity.dev || t2.identity.ino !== r2.identity.ino));
    }
    function Pa(e2, t2) {
      for (const r2 of e2) {
        const e3 = r2.relPath;
        if ("." === e3 || e3 === t2 || t2.startsWith(`${e3}/`)) return true;
      }
      return false;
    }
    const Aa = 64, Ra = 200;
    function Ma(e2) {
      let t2;
      try {
        t2 = v(e2.relPath);
      } catch (e3) {
        return { kind: "refused", message: e3 instanceof Error ? e3.message : String(e3) };
      }
      const r2 = t2.lastIndexOf("/"), n2 = r2 < 0 ? "" : t2.slice(0, r2), s2 = r2 < 0 ? t2 : t2.slice(r2 + 1);
      if (0 === s2.length || "." === s2 || ".." === s2 || s2.includes("/")) return { kind: "refused", message: `Refusing leftover leaf ${t2}` };
      let o2;
      if ("" === n2) {
        try {
          const t3 = p.lstatSync(e2.base);
          if (t3.isSymbolicLink() || !t3.isDirectory()) return { kind: "refused", message: "Refusing leftover under a non-directory store base" };
        } catch (e3) {
          return { kind: "refused", message: e3 instanceof Error ? e3.message : String(e3) };
        }
        o2 = e2.base;
      } else {
        let r3;
        try {
          r3 = C({ base: e2.base, relPath: n2 });
        } catch (e3) {
          return { kind: "refused", message: e3 instanceof Error ? e3.message : String(e3) };
        }
        if ("absent" === r3.kind) return { kind: "absent" };
        if ("directory" !== r3.kind) return { kind: "refused", message: `Refusing leftover ${t2}: parent ${n2} is not a directory` };
        o2 = r3.absPath;
      }
      try {
        const e3 = p.lstatSync(o2);
        if (e3.isSymbolicLink() || !e3.isDirectory()) return { kind: "refused", message: `Refusing leftover ${t2}: parent changed before the leaf stat` };
      } catch (e3) {
        return uc(e3) && "ENOENT" === e3.code ? { kind: "absent" } : { kind: "refused", message: e3 instanceof Error ? e3.message : String(e3) };
      }
      return { kind: "ready", leafAbs: h.join(o2, s2) };
    }
    function Ja(e2) {
      const t2 = `${e2.dir}/`, r2 = (e2.relPath.startsWith(t2) ? e2.relPath.slice(t2.length) : e2.relPath).replaceAll("/", "-"), n2 = Oa(e2.dir);
      return void 0 === n2 || "" === n2 ? r2 : `${n2}/${r2}`;
    }
    function Oa(e2) {
      if ("" === e2) return;
      const t2 = e2.lastIndexOf("/");
      return t2 < 0 ? "" : e2.slice(0, t2);
    }
    function Ba(e2) {
      const { relPath: t2, dir: r2 } = e2;
      return "" === r2 || (t2 === r2 || t2.startsWith(`${r2}/`));
    }
    function Da(e2) {
      return "" === e2 ? 0 : e2.split("/").length;
    }
    function qa(e2, t2) {
      return Da(t2) - Da(e2);
    }
    function Na(e2, t2) {
      for (const r2 of t2) if (Ba({ relPath: r2, dir: e2 }) || Ba({ relPath: e2, dir: r2 })) return true;
      return false;
    }
    function Fa(e2) {
      let t2;
      for (const r2 of [e2, `${e2}-wal`, `${e2}-shm`]) try {
        const e3 = p.lstatSync(r2).mtimeMs;
        (void 0 === t2 || e3 > t2) && (t2 = e3);
      } catch {
      }
      return t2;
    }
    function Ua(e2) {
      const t2 = e2.lastIndexOf("/");
      return t2 <= 0 ? "" : e2.slice(0, t2);
    }
    function La(e2) {
      return e2.length > 0 ? e2 : void 0;
    }
    function $a(e2) {
      if (void 0 !== e2 && Number.isSafeInteger(e2) && !(e2 <= 0)) return e2;
    }
    function ja(e2, t2) {
      if (void 0 !== e2 && void 0 !== t2) return Math.min(e2, t2);
    }
    function Ga(e2) {
      if (void 0 === e2 || "" === e2) return;
      const t2 = Number(e2);
      return !Number.isSafeInteger(t2) || t2 <= 0 ? void 0 : t2;
    }
    function za(e2) {
      if (void 0 === e2 || "" === e2) return 0;
      const t2 = Number(e2);
      return !Number.isSafeInteger(t2) || t2 < 0 ? 0 : t2;
    }
    function Wa(e2) {
      return void 0 === e2 || !Number.isSafeInteger(e2) || e2 < 1 ? na : e2;
    }
    function Ha(e2) {
      return void 0 === e2 || !Number.isSafeInteger(e2) || e2 < 0 ? sa : e2;
    }
    function Ka(e2) {
      return void 0 === e2 || !Number.isSafeInteger(e2) || e2 < 0 ? oa : e2;
    }
    const Va = /* @__PURE__ */ new Set(["file_too_large", "case_collision", "windows_incompatible", "symlink_refused"]);
    function Ya(e2) {
      return void 0 === e2 || !Number.isSafeInteger(e2) || e2 < 0 ? ha : e2;
    }
    function Qa(e2) {
      return void 0 !== e2 && Number.isFinite(e2) ? Math.min(1, Math.max(0, e2)) : 0;
    }
    function Xa(e2, t2) {
      (e2.remoteVersionEvents ??= []).push(t2);
    }
    function Za(e2) {
      const t2 = [], r2 = /* @__PURE__ */ new Map();
      for (const n2 of e2.files) {
        let s2;
        try {
          s2 = v(n2.relPath);
        } catch {
          t2.push(n2);
          continue;
        }
        const o2 = s2.toLowerCase(), i2 = r2.get(o2);
        if ((void 0 === i2 || i2 === s2) && (r2.set(o2, s2), !(n2.size > e2.maxFileSizeBytes))) {
          try {
            k({ relPath: s2, platform: e2.platform });
          } catch (e3) {
            if (e3 instanceof f && "windows_incompatible" === e3.code) continue;
          }
          t2.push(n2);
        }
      }
      return t2;
    }
    function ec(e2) {
      return e2.filesPushed > 0 || e2.filesConflicted > 0 || e2.filesDeletedRemote > 0 || (e2.rmdirPushed ?? 0) > 0 || e2.errors.length > 0;
    }
    function tc(e2 = "full") {
      return { filesPushed: 0, bytesPushed: 0, filesPulled: 0, bytesPulled: 0, filesSkipped: 0, refusals: 0, reservedPathsSkipped: 0, filesConflicted: 0, conflicts: [], identicalContentConflictsSuppressed: 0, conflictProtectionDowngrades: 0, legacyProbes: 0, pushEntriesParked: 0, pullsDeferred: 0, pullsSkippedPendingDelete: 0, filesDeletedRemote: 0, filesDeletedLocal: 0, deleteConflicts: 0, scanDeletesJournaled: 0, rmdirPushed: 0, removedDirsApplied: 0, recoveryDisarms: 0, identityRecoveryWipeFailed: false, legacyRowsRestored: 0, listingComplete: false, errors: [], durationMs: 0, walkMs: 0, hashMs: 0, presignMs: 0, uploadMs: 0, listMs: 0, downloadMs: 0, scope: e2 };
    }
    function rc({ absPath: e2, maxBytes: t2, expectedDev: r2, expectedIno: n2 }) {
      const s2 = (function() {
        const e3 = p.constants;
        let t3 = e3.O_RDONLY ?? 0;
        "number" == typeof e3.O_NOFOLLOW && (t3 |= e3.O_NOFOLLOW);
        "number" == typeof e3.O_CLOEXEC && (t3 |= e3.O_CLOEXEC);
        return t3;
      })();
      let o2;
      try {
        o2 = p.openSync(e2, s2);
      } catch (t3) {
        if (uc(t3) && ("ELOOP" === t3.code || "EMLINK" === t3.code || "ENOENT" === t3.code)) throw new ga({ code: "not_regular_file", message: `Refused to open ${e2}: ${t3.code}` });
        throw t3;
      }
      try {
        const s3 = p.fstatSync(o2);
        if (!s3.isFile()) throw new ga({ code: "not_regular_file", message: `Refused to read non-regular file: ${e2}` });
        if (s3.dev !== r2 || s3.ino !== n2) throw new ga({ code: "toctou_swap_refused", message: `Refused to read ${e2}: filesystem identity changed between safeWalk and open (expected dev=${r2} ino=${n2}, got dev=${s3.dev} ino=${s3.ino})` });
        if (s3.nlink > 1) throw new ga({ code: "not_regular_file", message: `Refused to read ${e2}: hard-linked file (nlink=${s3.nlink})` });
        if (s3.size > t2) throw new ga({ code: "file_too_large", message: `${e2} (${s3.size} bytes) exceeds the ${t2}-byte cap` });
        return { fd: o2, size: s3.size };
      } catch (e3) {
        throw p.closeSync(o2), e3;
      }
    }
    async function nc({ absPath: e2, maxBytes: t2, expectedDev: r2, expectedIno: n2, multipartPartSizeBytes: s2 }) {
      if (void 0 !== s2 && (!Number.isSafeInteger(s2) || s2 <= 0)) throw new RangeError("multipartPartSizeBytes must be a positive integer");
      const { fd: o2 } = rc({ absPath: e2, maxBytes: t2, expectedDev: r2, expectedIno: n2 }), i2 = p.createReadStream(e2, { fd: o2, autoClose: true }), a2 = (0, Ys.createHash)("sha256"), c2 = (0, Ys.createHash)("md5");
      let l2 = void 0 !== s2 ? (0, Ys.createHash)("sha256") : void 0;
      const u2 = [];
      let d2 = 0, m2 = 0, h2 = 0;
      try {
        for await (const r3 of i2) {
          const n3 = Buffer.isBuffer(r3) ? r3 : Buffer.from(r3);
          if (h2 += n3.byteLength, h2 > t2) throw i2.destroy(), new ga({ code: "file_too_large", message: `File at ${e2} exceeded ${t2} bytes while hashing` });
          if (a2.update(n3), c2.update(n3), void 0 !== s2 && void 0 !== l2) {
            let e3 = 0;
            for (; e3 < n3.byteLength; ) {
              const t3 = Math.min(s2 - m2, n3.byteLength - e3);
              l2.update(n3.subarray(e3, e3 + t3)), m2 += t3, e3 += t3, m2 === s2 && (u2.push({ partNumber: u2.length + 1, offsetBytes: d2, sizeBytes: m2, checksumSha256: new Uint8Array(l2.digest()) }), d2 += m2, m2 = 0, l2 = (0, Ys.createHash)("sha256"));
            }
          }
        }
      } finally {
        i2.destroyed || i2.destroy();
      }
      return void 0 !== l2 && m2 > 0 && u2.push({ partNumber: u2.length + 1, offsetBytes: d2, sizeBytes: m2, checksumSha256: new Uint8Array(l2.digest()) }), { sha: a2.digest("hex"), etag: c2.digest("hex"), size: h2, ...void 0 !== s2 ? { multipartParts: u2 } : {} };
    }
    const sc = ar;
    function oc(e2) {
      try {
        const t2 = p.lstatSync(e2);
        return t2.isFile() && !t2.isSymbolicLink();
      } catch {
        return false;
      }
    }
    function ic({ absPath: e2, relPath: t2 }) {
      let r2;
      try {
        r2 = p.lstatSync(e2);
      } catch (e3) {
        if (!uc(e3) || "ENOENT" !== e3.code) throw e3;
        return;
      }
      if (r2.isSymbolicLink()) throw new ga({ code: "not_regular_file", relPath: t2, message: `Refusing to overwrite symlinked target: ${e2}` });
      if (!r2.isFile()) throw new ga({ code: "not_regular_file", relPath: t2, message: `Refusing to overwrite non-regular target: ${e2}` });
    }
    function ac({ base: e2, parent: t2, relPath: r2 }) {
      const n2 = h.resolve(e2), s2 = h.resolve(t2);
      if (!E({ parent: n2, candidate: s2 })) throw new ga({ code: "not_regular_file", relPath: r2, message: `Refusing to write outside the agent store base (${n2}): ${s2}` });
    }
    function cc({ base: e2, target: t2, relPath: r2 }) {
      const n2 = h.resolve(e2), s2 = h.resolve(t2);
      if (s2 === n2) return void lc({ targetPath: n2, relPath: r2 });
      const o2 = h.relative(n2, s2);
      if (0 === o2.length || o2.startsWith("..") || h.isAbsolute(o2)) throw new ga({ code: "not_regular_file", relPath: r2, message: `Refusing to create ${s2} (outside of ${n2})` });
      const i2 = o2.split(h.sep).filter((e3) => e3.length > 0);
      let a2 = n2;
      lc({ targetPath: a2, relPath: r2 });
      for (const e3 of i2) {
        let t3;
        a2 = h.join(a2, e3);
        try {
          t3 = p.lstatSync(a2);
        } catch (e4) {
          if (!uc(e4) || "ENOENT" !== e4.code) throw e4;
          try {
            p.mkdirSync(a2, { mode: Wt.qH });
          } catch (e5) {
            if (!uc(e5) || "EEXIST" !== e5.code) throw e5;
          }
          t3 = p.lstatSync(a2);
        }
        if (t3.isSymbolicLink()) throw new ga({ code: "not_regular_file", relPath: r2, message: `Refusing to traverse symlinked ancestor: ${a2}` });
        if (!t3.isDirectory()) throw new ga({ code: "not_regular_file", relPath: r2, message: `Refusing to use non-directory ancestor: ${a2}` });
      }
    }
    function lc({ targetPath: e2, relPath: t2 }) {
      const r2 = p.lstatSync(e2);
      if (r2.isSymbolicLink()) throw new ga({ code: "not_regular_file", relPath: t2, message: `Refusing to use symlinked agent store base: ${e2}` });
      if (!r2.isDirectory()) throw new ga({ code: "not_regular_file", relPath: t2, message: `Refusing to use non-directory agent store base: ${e2}` });
    }
    function uc(e2) {
      return e2 instanceof Error && "string" == typeof e2.code;
    }
    const dc = /* @__PURE__ */ new Set(["content-md5", "content-type", "if-match", "if-none-match"]);
    class pc {
      constructor(e2 = {}) {
        if (this.maxFileSizeBytes = e2.maxFileSizeBytes ?? 1073741824, this.allowInsecureScheme = e2.allowInsecureScheme ?? false, this.partUploadMaxAttempts = e2.partUploadMaxAttempts ?? 3, !Number.isInteger(this.partUploadMaxAttempts) || this.partUploadMaxAttempts < 1) throw new RangeError(`HttpAgentStoreBlobTransfer partUploadMaxAttempts must be a positive integer, got ${this.partUploadMaxAttempts}`);
        if (this.partUploadBaseDelayMs = e2.partUploadBaseDelayMs ?? 250, !Number.isFinite(this.partUploadBaseDelayMs) || this.partUploadBaseDelayMs < 0) throw new RangeError(`HttpAgentStoreBlobTransfer partUploadBaseDelayMs must be non-negative, got ${this.partUploadBaseDelayMs}`);
        this.now = e2.now ?? Date.now, this.sleep = e2.sleep ?? (async (e3) => {
          await new Promise((t2) => {
            setTimeout(t2, e3);
          });
        }), this.agent = e2.agent, this.onTransferTiming = e2.onTransferTiming, this.blobIdleTimeoutMs = mc(e2.blobIdleTimeoutMs), this.blobConnectTimeoutMs = hc(e2.blobConnectTimeoutMs);
      }
      setBlobIdleTimeoutMs(e2) {
        this.blobIdleTimeoutMs = mc(e2);
      }
      setBlobConnectTimeoutMs(e2) {
        this.blobConnectTimeoutMs = hc(e2);
      }
      reportBlobTransferTiming(e2) {
        const t2 = this.onTransferTiming;
        if (void 0 !== t2) try {
          t2(e2);
        } catch {
        }
      }
      async uploadFile(e2) {
        return { etag: st((await this.uploadRange({ url: e2.url, relPath: e2.relPath, absPath: e2.absPath, offset: 0, size: e2.size, fileSize: e2.size, expectedDev: e2.expectedDev, expectedIno: e2.expectedIno, presignHeaders: e2.presignHeaders ?? { "x-amz-meta-content-sha256": e2.sha }, signal: e2.signal, onBytes: e2.onBytes })).etag) };
      }
      async uploadPart(e2) {
        const t2 = Buffer.from(e2.checksumSha256).toString("base64");
        if (32 !== e2.checksumSha256.byteLength || xa(e2.presignHeaders, "x-amz-checksum-sha256") !== t2) throw new ga({ code: "presign_response_mismatch", relPath: e2.relPath, message: `Multipart part ${e2.partNumber} of ${e2.relPath} is missing its signed SHA-256 checksum`, retryable: false });
        const r2 = (function(e3, t3) {
          if (void 0 === e3) return;
          let r3 = 0;
          return (n2) => {
            const s2 = t3 - r3;
            if (s2 <= 0) return void e3(0);
            const o2 = Math.min(n2, s2);
            r3 += o2, e3(o2);
          };
        })(e2.onBytes, e2.size);
        for (let t3 = 1; ; t3++) {
          if (e2.expiresAtMs <= this.now()) throw new ga({ code: "presigned_url_expired", relPath: e2.relPath, message: `Multipart upload URL expired before part ${e2.partNumber} of ${e2.relPath} could be sent`, retryable: false });
          try {
            return await this.uploadRange({ url: e2.url, relPath: e2.relPath, absPath: e2.absPath, offset: e2.offset, size: e2.size, fileSize: e2.fileSize, expectedDev: e2.expectedDev, expectedIno: e2.expectedIno, presignHeaders: e2.presignHeaders, signal: e2.signal, onBytes: r2 });
          } catch (e3) {
            if (!(e3 instanceof ga && true === e3.retryable) || t3 >= this.partUploadMaxAttempts) throw e3;
            await this.sleep(this.partUploadBaseDelayMs * 2 ** Math.max(0, t3 - 1));
          }
        }
      }
      async uploadRange(e2) {
        const t2 = 0 === e2.offset && 0 === e2.size && 0 === e2.fileSize;
        if (!Number.isSafeInteger(e2.offset) || e2.offset < 0 || !Number.isSafeInteger(e2.size) || e2.size < 0 || 0 === e2.size && !t2 || e2.offset + e2.size > e2.fileSize) throw new ga({ code: "presign_response_mismatch", relPath: e2.relPath, message: `Invalid multipart byte range for ${e2.relPath}`, retryable: false });
        const r2 = new URL(e2.url), n2 = this.clientForUrl({ parsedUrl: r2, relPath: e2.relPath }), s2 = (function(e3, t3, r3) {
          const n3 = {};
          for (const [s3, o3] of Object.entries(e3)) {
            const e4 = s3.toLowerCase();
            if ("content-length" !== e4) {
              if (!e4.startsWith("x-amz-") && !dc.has(e4)) throw new ga({ code: "presign_response_mismatch", relPath: t3, message: `Refusing to forward unsanctioned presign header for ${t3}: ${s3}` });
              n3[s3] = o3;
            } else {
              if (void 0 === r3 || o3.trim() !== String(r3)) throw new ga({ code: "presign_response_mismatch", relPath: t3, message: `Refusing to forward mismatched content-length for ${t3}` });
              n3["content-length"] = String(r3);
            }
          }
          return n3;
        })(e2.presignHeaders, e2.relPath, e2.size), o2 = js(e2.url), { fd: i2, size: a2 } = rc({ absPath: e2.absPath, maxBytes: this.maxFileSizeBytes, expectedDev: e2.expectedDev, expectedIno: e2.expectedIno });
        if (a2 !== e2.fileSize) throw p.closeSync(i2), new ga({ code: "sha_mismatch", relPath: e2.relPath, message: `Local file ${e2.relPath} changed between hash and upload (size ${e2.fileSize} -> ${a2})`, retryable: false });
        let c2;
        t2 ? (p.closeSync(i2), c2 = Ri.Readable.from([])) : c2 = p.createReadStream(e2.absPath, { fd: i2, autoClose: true, start: e2.offset, end: e2.offset + e2.size - 1 });
        try {
          return await new Promise((i3, a3) => {
            let l2 = false, u2 = false, d2 = () => {
            }, p2 = () => {
            }, m2 = () => {
            };
            const h2 = void 0 !== this.onTransferTiming, f2 = h2 ? mi() : 0;
            let g2, y2, w2, v2, _2 = false, b2 = h2 && t2 ? f2 : void 0, S2 = false, k2 = false, x2 = false;
            const E2 = (e3, t3, r3) => {
              h2 && this.reportBlobTransferTiming({ phase: e3, durationMs: Math.max(0, mi() - t3), reusedSocket: _2, outcome: r3 });
            }, I2 = (e3) => {
              h2 && !S2 && (S2 = true, v2 = e3, E2("connect", g2 ?? f2, e3));
            }, T2 = () => {
              u2 || !h2 || k2 || void 0 === b2 || void 0 === y2 || (k2 = true, w2 = Math.max(b2, y2), this.reportBlobTransferTiming({ phase: "first_byte_sent", durationMs: Math.max(0, w2 - f2), reusedSocket: _2, outcome: "ok" }));
            }, C2 = (e3) => {
              h2 && !x2 && (x2 = true, E2("response", w2 ?? y2 ?? f2, e3));
            }, P2 = (t3) => {
              if (l2) return;
              if (l2 = true, u2 = true, m2(), p2(), d2(), h2) {
                const e3 = "success" === t3.kind ? "ok" : (function(e4) {
                  if (Ki(e4) || e4 instanceof ga && "round_aborted" === e4.code) return "abort";
                  if (e4 instanceof ga && "blob_put" === e4.timeoutClass) return "timeout";
                  return "error";
                })(t3.error);
                S2 ? "ok" !== v2 || k2 || "ok" === e3 ? "ok" !== v2 || x2 || "ok" === e3 || C2(e3) : (k2 = true, this.reportBlobTransferTiming({ phase: "first_byte_sent", durationMs: Math.max(0, mi() - f2), reusedSocket: _2, outcome: e3 })) : I2(e3), E2("total", f2, e3);
              }
              if ("success" === t3.kind) return void i3({ etag: t3.etag });
              const { error: r3 } = t3;
              a3(r3 instanceof ga ? r3 : new ga({ code: "upload_failed", relPath: e2.relPath, message: `Upload of ${e2.relPath} failed (url=${o2}): ${r3 instanceof Error ? r3.message : String(r3)}`, cause: r3, retryable: true }));
            }, A2 = { ...s2, "content-length": String(e2.size) }, R2 = n2.request(r2, { method: "PUT", headers: A2, ...void 0 !== this.agent ? { agent: this.agent } : {} }, (t3) => {
              u2 ? t3.resume() : (T2(), C2("ok"), t3.on("error", (e3) => P2({ kind: "failure", error: e3 })), t3.resume(), t3.on("end", () => {
                const r3 = t3.statusCode ?? 0;
                if (r3 >= 200 && r3 < 300) {
                  const r4 = nt(t3.headers.etag);
                  return r4.length > 0 ? void P2({ kind: "success", etag: r4 }) : void P2({ kind: "failure", error: new ga({ code: "upload_failed", relPath: e2.relPath, message: `Upload of ${e2.relPath} succeeded but returned no ETag (url=${o2})`, retryable: false }) });
                }
                P2({ kind: "failure", error: new ga({ code: 412 === r3 || 409 === r3 ? "write_conflict" : "upload_failed", relPath: e2.relPath, httpStatus: r3, message: `Upload of ${e2.relPath} failed (${r3} ${t3.statusMessage ?? ""}, url=${o2})`, retryable: 408 === r3 || 429 === r3 || r3 >= 500 }) });
              }));
            });
            R2.on("error", (e3) => P2({ kind: "failure", error: e3 })), R2.once("socket", (t3) => {
              if (l2) return;
              if (!h2 && this.blobConnectTimeoutMs <= 0) return;
              h2 && (g2 = mi(), _2 = R2.reusedSocket);
              const n3 = t3.connecting || t3 instanceof Ai.TLSSocket && (function(e3) {
                return true === e3.secureConnecting;
              })(t3), s3 = () => {
                m2(), p2(), u2 || (y2 = mi(), n3 ? I2("ok") : h2 && (S2 = true, v2 = "ok"), T2());
              };
              if (!n3) return void s3();
              if (this.blobConnectTimeoutMs <= 0) {
                const e3 = t3 instanceof Ai.TLSSocket && "https:" === r2.protocol ? "secureConnect" : "connect";
                return t3.once(e3, s3), void (m2 = () => {
                  t3.off(e3, s3);
                });
              }
              const i4 = this.blobConnectTimeoutMs, a4 = setTimeout(() => {
                const t4 = new ga({ code: "upload_failed", relPath: e2.relPath, timeoutClass: "blob_put", message: `blob_put connect timeout after ${i4}ms (url=${o2})`, retryable: true });
                u2 = true, m2(), I2("timeout"), c2.destroy(), R2.destroy(t4), P2({ kind: "failure", error: t4 });
              }, i4);
              a4.unref?.();
              const d3 = () => {
                clearTimeout(a4);
              };
              p2 = d3;
              const f3 = t3 instanceof Ai.TLSSocket && "https:" === r2.protocol ? "secureConnect" : "connect";
              t3.once(f3, s3), m2 = () => {
                t3.off(f3, s3);
              }, t3.once("error", d3);
            });
            let M2 = false;
            const J2 = () => {
              M2 || this.blobIdleTimeoutMs <= 0 || (M2 = true, R2.setTimeout(this.blobIdleTimeoutMs, () => {
                const t3 = new ga({ code: "upload_failed", relPath: e2.relPath, timeoutClass: "blob_put", message: `blob_put idle timeout after ${this.blobIdleTimeoutMs}ms (url=${o2})`, retryable: true });
                u2 = true, m2(), c2.destroy(), R2.destroy(t3), P2({ kind: "failure", error: t3 });
              }));
            }, O2 = e2.signal;
            if (void 0 !== O2) {
              const t3 = () => {
                const t4 = Ki(O2.reason) ? O2.reason : gc(e2.relPath, O2.reason);
                u2 = true, m2(), c2.destroy(), R2.destroy(t4), P2({ kind: "failure", error: t4 });
              };
              if (O2.aborted) return void t3();
              O2.addEventListener("abort", t3, { once: true }), d2 = () => {
                O2.removeEventListener("abort", t3);
              };
            }
            const B2 = e2.onBytes, D2 = h2 ? new Ri.Transform({ transform: (e3, t3, r3) => {
              void 0 === b2 && (b2 = mi(), T2()), r3(null, e3);
            } }) : void 0, q2 = (e3) => {
              const t3 = (e4) => {
                P2({ kind: "failure", error: e4 });
              };
              void 0 === D2 || void 0 === e3 ? void 0 === D2 ? void 0 === e3 ? (0, Mi.pipeline)(c2, R2).catch(t3) : (0, Mi.pipeline)(c2, e3, R2).catch(t3) : (0, Mi.pipeline)(c2, D2, R2).catch(t3) : (0, Mi.pipeline)(c2, D2, e3, R2).catch(t3);
            };
            if (this.blobIdleTimeoutMs > 0 && t2) J2(), q2(void 0);
            else if (this.blobIdleTimeoutMs > 0 || void 0 !== B2 && !t2) {
              q2(new Ri.Transform({ transform(e3, t3, r3) {
                J2(), ((e4) => {
                  B2?.("string" == typeof e4 ? Buffer.byteLength(e4) : e4.byteLength);
                })(e3), r3(null, e3);
              } }));
            } else q2(void 0);
          });
        } catch (e3) {
          throw c2.destroy(), e3;
        }
      }
      clientForUrl(e2) {
        const { parsedUrl: t2, relPath: r2 } = e2;
        let n2;
        if ("https:" === t2.protocol ? n2 = Pi : "http:" === t2.protocol && this.allowInsecureScheme && (n2 = Ti), void 0 === n2) throw new ga({ code: "upload_failed", relPath: r2, message: `Refusing to upload over unsupported scheme: ${t2.protocol}`, retryable: false });
        return n2;
      }
    }
    function mc(e2) {
      return void 0 === e2 || !Number.isFinite(e2) || e2 < 0 ? ea : Math.floor(e2);
    }
    function hc(e2) {
      return void 0 === e2 || !Number.isFinite(e2) || e2 < 0 ? 0 : Math.floor(e2);
    }
    function fc(e2, t2) {
      if (Ki(t2)) throw t2;
      throw gc(e2, t2);
    }
    function gc(e2, t2) {
      const r2 = (function(e3) {
        let t3 = e3;
        const r3 = /* @__PURE__ */ new Set();
        for (; "object" == typeof t3 && null !== t3 && !r3.has(t3); ) {
          if (r3.add(t3), t3 instanceof Error) {
            const e4 = t3.message;
            if ("session closing" === e4 || "host resumed from suspend" === e4 || e4.includes("still draining after watchdog abandon")) return true;
          }
          t3 = "cause" in t3 ? t3.cause : void 0;
        }
        return false;
      })(t2);
      return new ga({ code: "round_aborted", message: void 0 !== e2 ? `Agent store sync round aborted before syncing ${e2}` : "Agent store sync round aborted", relPath: e2, cause: t2, ...r2 ? {} : { timeoutClass: "round" } });
    }
    function yc(e2) {
      return e2 instanceof ga && void 0 !== e2.timeoutClass ? { timeoutClass: e2.timeoutClass } : {};
    }
    function wc(e2, t2) {
      return void 0 === e2 ? t2 : void 0 === t2 ? e2 : AbortSignal.any([e2, t2]);
    }
    function vc(e2, t2) {
      return !!(true === t2?.aborted && (r2 = t2.reason, r2 instanceof Error && "TimeoutError" === r2.name && r2.message.includes("blob transfer idle timeout"))) && (e2 === t2.reason || e2 instanceof Error && ("TimeoutError" === e2.name || "AbortError" === e2.name));
      var r2;
    }
    const _c = 2e3;
    async function bc(e2) {
      try {
        return await (async function(e3) {
          const t2 = (0, Wt.f$)(e3.parts), r2 = (0, Wt.mD)(e3.parts), n2 = (function(e4) {
            let t3;
            try {
              t3 = p.lstatSync(e4);
            } catch (e5) {
              return Ac(e5) && "ENOENT" === e5.code ? { kind: "walk", walk: { files: [], refusals: [] } } : { kind: "unreadable" };
            }
            if (t3.isSymbolicLink() || !t3.isDirectory()) return { kind: "residue" };
            try {
              return { kind: "walk", walk: I(e4) };
            } catch (e5) {
              if (e5 instanceof f) return { kind: "residue" };
              throw e5;
            }
          })(t2);
          if ("walk" !== n2.kind) return { kind: "skipped", reason: n2.kind };
          const s2 = n2.walk;
          if (s2.refusals.length > 0) return { kind: "skipped", reason: "residue" };
          const o2 = (function(e4) {
            const t3 = [];
            for (const r3 of e4.files) {
              let e5;
              try {
                e5 = p.lstatSync(r3.absPath, { bigint: true });
              } catch {
                return;
              }
              if (!e5.isFile()) return;
              t3.push({ relPath: r3.relPath, size: Number(e5.size), mtimeNs: e5.mtimeNs, ctimeNs: e5.ctimeNs, ino: e5.ino });
            }
            return t3.sort((e5, t4) => e5.relPath < t4.relPath ? -1 : e5.relPath > t4.relPath ? 1 : 0), t3;
          })(s2);
          if (void 0 === o2) return { kind: "skipped", reason: "unreadable" };
          const i2 = zn(r2, { sqlite: e3.sqlite });
          if ("absent" === i2.kind) return await (async function(e4, t3, r3, n3) {
            if (Ic(e4).length > 0) return { kind: "dirty", reason: "files_without_index", counts: Cc(e4, [], 0) };
            const s3 = await Sc(r3, n3);
            if (void 0 !== s3) return Tc(s3, e4, [], 0);
            const o3 = await Ec(t3, e4, [], n3);
            if (void 0 === o3) return { kind: "skipped", reason: "unreadable" };
            return { kind: "clean", empty: 0 === e4.files.length, snapshot: o3, hashedBytes: 0 };
          })(s2, o2, t2, e3);
          if ("unsupported_schema" === i2.kind) return (function(e4, t3) {
            if (xc(e4)) return { kind: "skipped", reason: "open_handle" };
            return t3;
          })(r2, { kind: "skipped", reason: "schema" });
          const a2 = i2.index;
          let c2, l2 = "";
          try {
            l2 = a2.journalMode(), c2 = await (async function(e4) {
              const { options: t3, walk: r3, index: n3 } = e4, s3 = n3.listFiles(), o3 = n3.listPendingDeletes(), i3 = n3.listPendingRmdirs();
              if (o3.length > 0) return Tc("pending_delete", r3, s3, 0);
              if (i3.length > 0) return Tc("pending_rmdir", r3, s3, 0);
              const a3 = await Sc(e4.filesDir, t3);
              if (void 0 !== a3) return Tc(a3, r3, s3, 0);
              const c3 = (function(e5) {
                let t4 = 0;
                for (const r4 of e5) t4 += r4.size;
                return t4;
              })(Ic(r3));
              if (c3 > t3.hashBudgetBytes) return { kind: "skipped", reason: "budget", bytesNeeded: c3 };
              const l3 = await (async function(e5) {
                const t4 = new Map(e5.rows.map((e6) => [e6.relPath, e6]));
                let r4 = 0, n4 = false;
                for (const s4 of Ic(e5.walk)) {
                  n4 && await Pc(), n4 = true;
                  const o4 = t4.get(s4.relPath);
                  if (void 0 === o4) return { kind: "dirty", reason: "unknown_file", hashedBytes: r4 };
                  if ("tombstoned" === o4.state) return { kind: "dirty", reason: "tombstoned_present", hashedBytes: r4 };
                  if (kc(s4, o4, e5)) continue;
                  let i4;
                  try {
                    i4 = (await nc({ absPath: s4.absPath, maxBytes: e5.options.maxFileBytes ?? Qi, expectedDev: s4.dev, expectedIno: s4.ino })).sha;
                  } catch {
                    return { kind: "dirty", reason: "unhashable", hashedBytes: r4 };
                  }
                  if (r4 += s4.size, i4 !== o4.lastSyncedSha) return { kind: "dirty", reason: "content_mismatch", hashedBytes: r4 };
                }
                return { kind: "ok", hashedBytes: r4 };
              })({ options: t3, walk: r3, rows: s3, version: n3.version });
              if ("dirty" === l3.kind) return Tc(l3.reason, r3, s3, l3.hashedBytes);
              const u2 = (function(e5, t4, r4) {
                if (e5.version < 3 || "1" !== e5.getMeta(_n)) return false;
                const n4 = new Set(t4.files.map((e6) => e6.relPath));
                for (const e6 of r4) if ("live" === e6.state && !(0, Wt.TM)(e6.relPath) && void 0 !== e6.lastSeenEtag && 0 !== e6.lastSeenEtag.length && !n4.has(e6.relPath)) return true;
                return false;
              })(n3, r3, s3);
              if (u2) return Tc("missing_armed_file", r3, s3, l3.hashedBytes);
              const d2 = await Ec(e4.snapshot, r3, s3, t3);
              if (void 0 === d2) return { kind: "skipped", reason: "unreadable" };
              return { kind: "clean", empty: false, snapshot: d2, hashedBytes: l3.hashedBytes };
            })({ options: e3, filesDir: t2, walk: s2, snapshot: o2, index: a2 });
          } finally {
            a2.close();
          }
          if ("wal" !== l2 || xc(r2)) return { kind: "skipped", reason: "open_handle" };
          return c2;
        })(e2);
      } catch (e3) {
        if ((function(e4) {
          if (Ac(e4)) return true;
          if (e4 instanceof Error && ("SqliteError" === e4.name || "AuditReadError" === e4.name)) return true;
          return false;
        })(e3)) return { kind: "skipped", reason: "unreadable" };
        throw e3;
      }
    }
    async function Sc(e2, t2) {
      if ((function(e3) {
        const t3 = (0, $t.Zz)(e3);
        let r2;
        try {
          r2 = p.lstatSync(t3);
        } catch (e4) {
          if (Ac(e4) && "ENOENT" === e4.code) return false;
          throw e4;
        }
        return !r2.isFile() || r2.size > 0;
      })(e2)) return "pending_conflict";
      return void 0 === await gr({ lockPath: Ar(e2), now: t2.now }) ? void 0 : "exclusive_claim";
    }
    function kc(e2, t2, r2) {
      if (r2.version < vn) return false;
      let n2;
      try {
        n2 = p.lstatSync(e2.absPath, { bigint: true });
      } catch {
        return false;
      }
      return "skip" === fn({ mode: r2.options.statFastPathMode, platform: r2.options.platform ?? process.platform, racyMarginMs: r2.options.racyMarginMs ?? _c, live: { size: Number(n2.size), mtimeNs: n2.mtimeNs, ctimeNs: n2.ctimeNs, inoNs: n2.ino, devNs: n2.dev, nlink: Number(n2.nlink) }, recorded: t2.recordedStat, synced: true, indexSize: t2.size }).action;
    }
    function xc(e2) {
      try {
        return p.lstatSync(`${e2}-wal`).isFile();
      } catch (e3) {
        if (Ac(e3) && "ENOENT" === e3.code) return false;
        throw e3;
      }
    }
    async function Ec(e2, t2, r2, n2) {
      const s2 = new Map(t2.files.map((e3) => [e3.relPath, e3])), o2 = new Map(r2.map((e3) => [e3.relPath, e3.lastSyncedSha])), i2 = [];
      for (const t3 of e2) {
        const e3 = o2.get(t3.relPath);
        let r3 = (0, Wt.TM)(t3.relPath) || void 0 === e3 || 0 === e3.length ? void 0 : e3;
        if (void 0 === r3) {
          const e4 = s2.get(t3.relPath);
          if (void 0 === e4) return;
          try {
            r3 = (await nc({ absPath: e4.absPath, maxBytes: n2.maxFileBytes ?? Qi, expectedDev: e4.dev, expectedIno: e4.ino })).sha;
          } catch {
            return;
          }
        }
        i2.push({ ...t3, sha256: r3 });
      }
      return i2;
    }
    function Ic(e2) {
      return e2.files.filter((e3) => !(0, Wt.TM)(e3.relPath));
    }
    function Tc(e2, t2, r2, n2) {
      return { kind: "dirty", reason: e2, counts: Cc(t2, r2, n2) };
    }
    function Cc(e2, t2, r2) {
      return { files: Ic(e2).length, rows: t2.length, hashedBytes: r2 };
    }
    function Pc() {
      return new Promise((e2) => {
        (0, Ei.setImmediate)(e2);
      });
    }
    function Ac(e2) {
      return e2 instanceof Error && "string" == typeof e2.code;
    }
    const Rc = 6e5, Mc = 100, Jc = 2e3, Oc = 1e3, Bc = ".evicting.lock", Dc = 384, qc = 1;
    function Nc(e2, t2) {
      return h.join((0, Wt.ve)(e2, t2), "pins");
    }
    function Fc(e2, t2) {
      return h.join((0, Wt.ve)(e2, t2), "background-pins");
    }
    function Uc(e2, t2) {
      return h.join((0, Wt.ve)(e2, t2), "evicting.json");
    }
    async function Lc(e2) {
      const t2 = Xc(e2);
      let r2;
      try {
        let e3;
        for (r2 = await tl(t2); ; ) {
          const n2 = await ol(t2);
          if (void 0 !== n2 && (e3 = (e3 ?? 0) + n2), r2 = await il(t2, r2), void 0 === Gc(t2)) break;
          wl(r2), r2 = await tl(t2);
        }
        return void 0 !== e3 && al(t2, { kind: "waited", waitMs: e3 }), new Yc(true, t2.purpose, r2);
      } catch (e3) {
        return void 0 !== r2 && wl(r2), al(t2, { kind: "acquire_failed" }), Qc(t2.purpose, e3);
      }
    }
    function $c(e2) {
      const t2 = Xc(e2);
      let r2;
      try {
        return r2 = nl(t2), void 0 !== Gc(t2) ? (wl(r2), { kind: "evicting" }) : (r2 = (function(e3, t3) {
          if (gl(t3)) return t3;
          return nl(e3);
        })(t2, r2), void 0 !== Gc(t2) ? (wl(r2), { kind: "evicting" }) : { kind: "ready", handle: new Yc(true, t2.purpose, r2) });
      } catch (e3) {
        return void 0 !== r2 && wl(r2), al(t2, { kind: "acquire_failed" }), { kind: "ready", handle: Qc(t2.purpose, e3) };
      }
    }
    function jc(e2) {
      const t2 = e2.processExists ?? Ir, r2 = e2.identity ?? yr(), n2 = Nc(e2.store, e2.mountKey), s2 = Fc(e2.store, e2.mountKey);
      return { pinsDirMtimeMs: hl(n2), pins: [...cl(n2, "foreground", t2, r2), ...cl(s2, "background", t2, r2)] };
    }
    function Gc(e2) {
      const t2 = e2.processExists ?? Ir, r2 = e2.now ?? Date.now, n2 = e2.markTtlMs ?? Rc, s2 = (0, Wt.ve)(e2.store, e2.mountKey), o2 = (function(e3) {
        const t3 = vl(e3.controlDir);
        if ("missing" === t3) return e3.fn();
        if ("directory" !== t3) return "busy";
        const r3 = kl(e3);
        if ("busy" === r3) return "busy";
        try {
          return e3.fn();
        } finally {
          r3();
        }
      })({ controlDir: s2, processExists: t2, waitMs: 0, fn: () => {
        const s3 = ul(Uc(e2.store, e2.mountKey));
        if (void 0 !== s3) return pl(s3, t2, r2(), n2) ? s3 : void 0;
      } });
      if ("busy" === o2) {
        const e3 = (function(e4) {
          return bl(_l(e4)) ?? bl(e4);
        })(s2);
        if (void 0 === e3 || r2() - e3 >= n2) return;
        return { version: 1, pid: process.pid, windowId: "", startedAtMs: e3 };
      }
      return o2;
    }
    async function zc(e2) {
      const t2 = Uc(e2.store, e2.mountKey);
      (0, Wt.Ew)(h.dirname(t2));
      const r2 = { version: 1, pid: e2.pid ?? process.pid, windowId: e2.windowId, startedAtMs: (e2.now ?? Date.now)() }, n2 = `${JSON.stringify(r2)}
`, s2 = await Sl({ controlDir: h.dirname(t2), processExists: e2.processExists ?? Ir, waitMs: Jc });
      try {
        return await (async function(e3) {
          const t3 = e3.target, r3 = e3.body, n3 = e3.processExists, s3 = e3.now(), o2 = e3.markTtlMs;
          try {
            return await rr(t3, r3, Dc), { kind: "written" };
          } catch (e4) {
            if ("EEXIST" !== Il(e4)) throw e4;
          }
          const i2 = ul(t3);
          if (void 0 !== i2 && pl(i2, n3, s3, o2)) return { kind: "live", record: i2 };
          wl(t3);
          try {
            return await rr(t3, r3, Dc), { kind: "written" };
          } catch (e4) {
            if ("EEXIST" !== Il(e4)) throw e4;
          }
          const a2 = ul(t3);
          if (void 0 !== a2 && pl(a2, n3, s3, o2)) return { kind: "live", record: a2 };
          throw new Error("evicting mark changed while it was being replaced");
        })({ target: t2, body: n2, processExists: e2.processExists ?? Ir, now: e2.now ?? Date.now, markTtlMs: e2.markTtlMs ?? Rc });
      } finally {
        s2();
      }
    }
    async function Wc(e2) {
      const t2 = Uc(e2.store, e2.mountKey), r2 = h.dirname(t2);
      if ("directory" !== vl(r2)) return;
      const n2 = await Sl({ controlDir: r2, processExists: e2.processExists ?? Ir, waitMs: Jc });
      try {
        if (void 0 === e2.expected) return void wl(t2);
        !(function(e3, t3) {
          const r3 = Kc(e3);
          if (void 0 === r3 || !Hc(r3.record, t3)) return;
          if (!(function(e4, t4) {
            try {
              const r4 = p.lstatSync(e4);
              return r4.isFile() && r4.dev === t4.dev && r4.ino === t4.ino;
            } catch (e5) {
              if ("ENOENT" === Il(e5)) return false;
              throw e5;
            }
          })(e3, r3)) return;
          const n3 = Kc(e3);
          if (void 0 === n3 || !Hc(n3.record, t3) || n3.dev !== r3.dev || n3.ino !== r3.ino) return;
          p.unlinkSync(e3);
        })(t2, e2.expected);
      } finally {
        n2();
      }
    }
    function Hc(e2, t2) {
      return void 0 !== e2 && e2.pid === t2.pid && e2.windowId === t2.windowId && e2.startedAtMs === t2.startedAtMs;
    }
    function Kc(e2) {
      let t2;
      try {
        const r2 = p.constants.O_RDONLY | (p.constants.O_NOFOLLOW ?? 0);
        t2 = p.openSync(e2, r2);
        const n2 = p.fstatSync(t2);
        if (!n2.isFile()) return;
        const s2 = dl(p.readFileSync(t2, "utf8"));
        if (void 0 === s2) return;
        return { dev: n2.dev, ino: n2.ino, record: s2 };
      } catch (e3) {
        if ("ENOENT" === Il(e3) || "ELOOP" === Il(e3)) return;
        throw e3;
      } finally {
        void 0 !== t2 && p.closeSync(t2);
      }
    }
    function Vc(e2) {
      const t2 = e2.now ?? Date.now(), r2 = (0, Wt.WX)(e2.store, e2.mountKey), n2 = [hl(Nc(e2.store, e2.mountKey)), fl((0, Wt.mD)(r2)), hl((0, Wt.Du)(r2))];
      for (const e3 of n2) if (void 0 !== e3) return t2 - e3;
    }
    class Yc {
      constructor(e2, t2, r2, n2) {
        this.acquired = e2, this.purpose = t2, this.path = r2, this.error = n2, this.released = false;
      }
      release() {
        return this.released || void 0 === this.path ? (this.released = true, Promise.resolve()) : (this.released = true, wl(this.path), Promise.resolve());
      }
    }
    function Qc(e2, t2) {
      return new Yc(false, e2, void 0, t2);
    }
    function Xc(e2) {
      return { store: e2.store, mountKey: e2.mountKey, windowId: e2.windowId, purpose: e2.purpose, processExists: e2.processExists ?? Ir, now: e2.now ?? Date.now, markTtlMs: e2.markTtlMs ?? Rc, metrics: e2.metrics, sleep: e2.sleep ?? Cl, pid: e2.pid ?? process.pid, hostname: e2.hostname ?? Xt.hostname(), identity: e2.identity ?? yr() };
    }
    function Zc(e2) {
      return "background" === e2.purpose ? Fc(e2.store, e2.mountKey) : Nc(e2.store, e2.mountKey);
    }
    function el(e2) {
      const t2 = { version: qc, pid: e2.pid, windowId: e2.windowId, purpose: e2.purpose, createdAtMs: e2.now(), hostname: e2.hostname, ...void 0 !== e2.identity.uid ? { uid: e2.identity.uid } : {}, ...void 0 !== e2.identity.sid ? { sid: e2.identity.sid } : {} };
      return `${JSON.stringify(t2)}
`;
    }
    async function tl(e2) {
      try {
        return await rl(e2);
      } catch (t2) {
        if ("ENOENT" !== Il(t2)) throw t2;
        return await rl(e2);
      }
    }
    async function rl(e2) {
      const t2 = Zc(e2);
      (0, Wt.Ew)(t2);
      const r2 = h.join(t2, `${e2.pid}-${(0, Ys.randomUUID)()}.json`);
      try {
        await rr(r2, el(e2), Dc);
      } catch (e3) {
        throw wl(r2), e3;
      }
      return r2;
    }
    function nl(e2) {
      try {
        return sl(e2);
      } catch (t2) {
        if ("ENOENT" !== Il(t2)) throw t2;
        return sl(e2);
      }
    }
    function sl(e2) {
      const t2 = Zc(e2);
      (0, Wt.Ew)(t2);
      const r2 = h.join(t2, `${e2.pid}-${(0, Ys.randomUUID)()}.json`);
      return (function(e3, t3) {
        const r3 = ar();
        let n2;
        try {
          n2 = p.openSync(e3, r3, Dc), (0, Wt.rs)(e3), p.writeFileSync(n2, t3, { encoding: "utf8" });
        } catch (t4) {
          if (void 0 !== n2) {
            try {
              p.closeSync(n2);
            } catch {
            }
            n2 = void 0;
          }
          throw wl(e3), t4;
        } finally {
          void 0 !== n2 && p.closeSync(n2);
        }
      })(r2, el(e2)), r2;
    }
    async function ol(e2) {
      if (void 0 === Gc(e2)) return;
      const t2 = e2.now();
      for (; ; ) if (await e2.sleep(Mc), void 0 === Gc(e2)) return Math.max(0, e2.now() - t2);
    }
    async function il(e2, t2) {
      return gl(t2) ? t2 : await tl(e2);
    }
    function al(e2, t2) {
      try {
        e2.metrics?.recordStorePin?.(t2);
      } catch {
      }
    }
    function cl(e2, t2, r2, n2) {
      let s2;
      try {
        s2 = p.readdirSync(e2);
      } catch (e3) {
        if ("ENOENT" === Il(e3)) return [];
        throw e3;
      }
      const o2 = [];
      for (const i2 of s2) {
        const s3 = h.join(e2, i2);
        let a2;
        try {
          a2 = p.lstatSync(s3);
        } catch {
          continue;
        }
        if (!a2.isFile()) continue;
        const c2 = ll(s3), l2 = void 0 === c2 || c2.purpose === t2 && r2(c2.pid) && ml(c2, n2);
        o2.push({ path: s3, purpose: t2, record: c2, live: l2 });
      }
      return o2;
    }
    function ll(e2) {
      const t2 = yl(e2);
      if (void 0 !== t2) return (function(e3) {
        let t3;
        try {
          t3 = JSON.parse(e3);
        } catch {
          return;
        }
        if (!Tl(t3) || t3.version !== qc) return;
        const { pid: r2, windowId: n2, purpose: s2, createdAtMs: o2, hostname: i2, uid: a2, sid: c2 } = t3;
        if ("number" != typeof r2 || !Number.isFinite(r2) || "string" != typeof n2 || "foreground" !== s2 && "background" !== s2 || "number" != typeof o2 || !Number.isFinite(o2) || "string" != typeof i2 || void 0 !== a2 && "number" != typeof a2 || void 0 !== c2 && "string" != typeof c2) return;
        return { version: 1, pid: r2, windowId: n2, purpose: s2, createdAtMs: o2, hostname: i2, ..."number" == typeof a2 ? { uid: a2 } : {}, ..."string" == typeof c2 ? { sid: c2 } : {} };
      })(t2);
    }
    function ul(e2) {
      const t2 = yl(e2);
      if (void 0 !== t2) return dl(t2);
    }
    function dl(e2) {
      let t2;
      try {
        t2 = JSON.parse(e2);
      } catch {
        return;
      }
      if (!Tl(t2) || 1 !== t2.version) return;
      const { pid: r2, windowId: n2, startedAtMs: s2 } = t2;
      return "number" == typeof r2 && Number.isFinite(r2) && "string" == typeof n2 && "number" == typeof s2 && Number.isFinite(s2) ? { version: 1, pid: r2, windowId: n2, startedAtMs: s2 } : void 0;
    }
    function pl(e2, t2, r2, n2) {
      return !!t2(e2.pid) && r2 - e2.startedAtMs < n2;
    }
    function ml(e2, t2) {
      return e2.uid === t2.uid && e2.sid === t2.sid;
    }
    function hl(e2) {
      try {
        const t2 = p.lstatSync(e2);
        return t2.isDirectory() ? t2.mtimeMs : void 0;
      } catch (e3) {
        if ("ENOENT" === Il(e3)) return;
        throw e3;
      }
    }
    function fl(e2) {
      try {
        const t2 = p.lstatSync(e2);
        return t2.isFile() ? t2.mtimeMs : void 0;
      } catch (e3) {
        if ("ENOENT" === Il(e3)) return;
        throw e3;
      }
    }
    function gl(e2) {
      try {
        return p.lstatSync(e2).isFile();
      } catch {
        return false;
      }
    }
    function yl(e2) {
      let t2;
      try {
        if (!p.lstatSync(e2).isFile()) return;
        const r2 = p.constants.O_RDONLY | (p.constants.O_NOFOLLOW ?? 0);
        return t2 = p.openSync(e2, r2), p.readFileSync(t2, "utf8");
      } catch {
        return;
      } finally {
        void 0 !== t2 && p.closeSync(t2);
      }
    }
    function wl(e2) {
      try {
        p.unlinkSync(e2);
      } catch {
      }
    }
    function vl(e2) {
      try {
        return p.lstatSync(e2).isDirectory() ? "directory" : "other";
      } catch (e3) {
        if ("ENOENT" === Il(e3)) return "missing";
        throw e3;
      }
    }
    function _l(e2) {
      return h.join(e2, Bc);
    }
    function bl(e2) {
      try {
        return p.lstatSync(e2).mtimeMs;
      } catch (e3) {
        if ("ENOENT" === Il(e3)) return;
        throw e3;
      }
    }
    async function Sl(e2) {
      const t2 = Date.now() + e2.waitMs;
      for (; ; ) {
        const r2 = kl(e2);
        if ("busy" !== r2) return r2;
        if (Date.now() >= t2) throw new Error("Timed out waiting to update the eviction mark");
        await Cl(5);
      }
    }
    function kl(e2) {
      const t2 = _l(e2.controlDir);
      let r2, n2 = false;
      try {
        p.mkdirSync(t2, { mode: 448 }), n2 = true;
      } catch (r3) {
        if ("EEXIST" !== Il(r3)) throw r3;
        if (!(function(e3, t3) {
          let r4;
          try {
            r4 = p.lstatSync(e3);
          } catch (e4) {
            if ("ENOENT" === Il(e4)) return false;
            throw e4;
          }
          if (!r4.isDirectory() || !xl(e3, r4, t3)) return false;
          const n3 = `${e3}.${(0, Ys.randomUUID)()}.dead`;
          try {
            p.renameSync(e3, n3);
          } catch (e4) {
            if ("ENOENT" === Il(e4)) return false;
            throw e4;
          }
          let s3;
          try {
            s3 = p.lstatSync(n3);
          } catch {
            return false;
          }
          if (!s3.isDirectory() || !xl(n3, s3, t3)) return (function(e4, t4) {
            try {
              p.renameSync(e4, t4);
            } catch (e5) {
              if ("ENOENT" === Il(e5)) return;
              try {
                if (p.lstatSync(t4).isDirectory()) return;
              } catch {
              }
              throw e5;
            }
          })(n3, e3), false;
          p.rmSync(n3, { recursive: true, force: true });
          try {
            return p.mkdirSync(e3, { mode: 448 }), true;
          } catch {
            return false;
          }
        })(t2, e2.processExists)) return "busy";
        n2 = true;
      }
      try {
        r2 = p.lstatSync(t2);
      } catch {
        return "busy";
      }
      if (!r2.isDirectory()) return "busy";
      const s2 = h.join(t2, "owner");
      try {
        p.writeFileSync(s2, `${process.pid}
`, { mode: 384, flag: "wx" });
      } catch (e3) {
        if (n2) {
          wl(s2);
          try {
            p.rmdirSync(t2);
          } catch {
          }
        }
        if ("EEXIST" === Il(e3)) return "busy";
        throw e3;
      }
      let o2 = false;
      return () => {
        o2 || (o2 = true, (function(e3) {
          const t3 = _l(e3), r3 = h.join(t3, "owner");
          if (El(r3) !== process.pid) return;
          wl(r3);
          try {
            p.lstatSync(t3).isDirectory() && p.rmdirSync(t3);
          } catch {
          }
        })(e2.controlDir));
      };
    }
    function xl(e2, t2, r2) {
      const n2 = El(h.join(e2, "owner"));
      return void 0 === n2 ? Date.now() - t2.mtimeMs >= Oc : !r2(n2);
    }
    function El(e2) {
      let t2;
      try {
        t2 = p.readFileSync(e2, "utf8");
      } catch {
        return;
      }
      const r2 = Number(t2.trim());
      if (Number.isInteger(r2) && !(r2 <= 0)) return r2;
    }
    function Il(e2) {
      if ("object" == typeof e2 && null !== e2 && "code" in e2) {
        const t2 = e2.code;
        return "string" == typeof t2 ? t2 : void 0;
      }
    }
    function Tl(e2) {
      return "object" == typeof e2 && null !== e2 && !Array.isArray(e2);
    }
    function Cl(e2) {
      return new Promise((t2) => {
        setTimeout(t2, e2);
      });
    }
    const Pl = ".sweep-trash-", Al = ".store-eviction-last-run", Rl = ".evicted.json", Ml = ".unverified", Jl = ".unverified", Ol = /* @__PURE__ */ new Map(), Bl = /* @__PURE__ */ new Map();
    function Dl(e2) {
      const t2 = e2.now ?? Date.now(), r2 = h.resolve(e2.storesRoot), n2 = (function(e3) {
        const t3 = Bl.get(e3), r3 = Fl(e3);
        if (void 0 === t3) return r3;
        if (void 0 === r3) return t3;
        return Math.max(t3, r3);
      })(r2);
      if (void 0 !== n2 && t2 - n2 < e2.minIntervalMs) return false;
      Bl.set(r2, t2);
      try {
        !(function(e3, t3) {
          p.mkdirSync(e3, { recursive: true });
          const r3 = Nl(e3), n3 = h.join(e3, `${Al}.${process.pid}.${(0, Ys.randomUUID)()}.tmp`);
          p.writeFileSync(n3, `${t3}
`, { encoding: "utf8", mode: 384 });
          try {
            p.renameSync(n3, r3);
          } catch (e4) {
            throw p.rmSync(n3, { force: true }), e4;
          }
        })(r2, t2);
      } catch {
      }
      return true;
    }
    function ql(e2) {
      const t2 = h.resolve(e2), r2 = Bl.get(t2);
      if (Bl.delete(t2), void 0 === r2) return;
      const n2 = Nl(t2);
      let s2;
      try {
        s2 = p.lstatSync(n2);
      } catch {
        return;
      }
      if (s2.isFile() && !s2.isSymbolicLink() && Fl(t2) === r2) try {
        const e3 = p.lstatSync(n2);
        if (e3.ino !== s2.ino || e3.mtimeMs !== s2.mtimeMs || e3.size !== s2.size) return;
        p.unlinkSync(n2);
      } catch {
        return;
      }
    }
    function Nl(e2) {
      return h.join(e2, Al);
    }
    function Fl(e2) {
      try {
        const t2 = Nl(e2), r2 = p.lstatSync(t2);
        if (!r2.isFile() || r2.isSymbolicLink()) return;
        const n2 = p.readFileSync(t2, "utf8").trim();
        if (!/^[0-9]+$/.test(n2)) return;
        const s2 = Number(n2);
        return Number.isSafeInteger(s2) ? s2 : void 0;
      } catch {
        return;
      }
    }
    async function Ul(e2) {
      if (!Number.isFinite(e2.maxIdleMs) || e2.maxIdleMs <= 0) return { outcomes: [] };
      const t2 = h.join(e2.store.base, e2.store.tmpDirName), r2 = e2.now ?? Date.now, n2 = [];
      "dry_run" !== e2.mode && (await (async function(e3, t3, r3) {
        const n3 = h.join(e3, Wt.Jl);
        let s3;
        try {
          s3 = await p.promises.readdir(n3, { withFileTypes: true });
        } catch (e4) {
          if (Zl(e4) && "ENOENT" === e4.code) return;
          throw e4;
        }
        for (const e4 of s3) {
          if (!e4.isDirectory() || e4.isSymbolicLink()) continue;
          if (e4.name.endsWith(Ml)) continue;
          const s4 = h.join(n3, e4.name);
          if (zl(s4)) continue;
          const o3 = Wl(s4), i3 = void 0 === o3 ? Math.max(t3.quarantineMs, t3.markTtlMs) : t3.quarantineMs, a2 = o3 ?? Hl(e4.name);
          void 0 === a2 || r3() - a2 < i3 || await Kl(s4, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
        }
      })(t2, { quarantineMs: e2.quarantineMs, markTtlMs: e2.markTtlMs }, r2), await (async function(e3) {
        let t3;
        try {
          t3 = await p.promises.readdir(e3, { withFileTypes: true });
        } catch (e4) {
          if (Zl(e4) && "ENOENT" === e4.code) return;
          throw e4;
        }
        for (const r3 of t3) {
          if (!r3.isDirectory() || r3.isSymbolicLink() || !r3.name.startsWith(Pl)) continue;
          const t4 = h.join(e3, r3.name);
          try {
            (0, Wt.rs)(t4), await Kl(t4, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
          } catch {
          }
        }
      })(t2));
      const s2 = (function(e3, t3) {
        if (void 0 === t3) return [...e3];
        const r3 = e3.findIndex((e4) => e4 > t3);
        if (r3 <= 0) return [...e3];
        return [...e3.slice(r3), ...e3.slice(0, r3)];
      })((function(e3, t3, r3) {
        let n3;
        try {
          n3 = p.readdirSync(t3, { withFileTypes: true });
        } catch (e4) {
          if (Zl(e4) && "ENOENT" === e4.code) return [];
          throw e4;
        }
        const s3 = [];
        for (const o3 of n3) {
          if (!o3.isDirectory() || o3.isSymbolicLink()) continue;
          if (o3.name.startsWith(Pl)) continue;
          try {
            (0, Wt.qh)(o3.name);
          } catch {
            continue;
          }
          if (e3.isMountLive(o3.name)) continue;
          const n4 = Ql(h.join(t3, o3.name, Wt.kR));
          if (void 0 === n4 || !n4.isDirectory() || n4.isSymbolicLink()) continue;
          const i3 = Vc({ store: e3.store, mountKey: o3.name, now: r3() });
          void 0 === i3 || i3 < e3.maxIdleMs || s3.push(o3.name);
        }
        return s3.sort(), s3;
      })(e2, t2, r2), Ol.get(t2));
      let o2 = 0, i2 = 0;
      for (const r3 of s2) {
        if (i2 >= e2.maxRootsPerRun) break;
        i2 += 1, Ol.set(t2, r3);
        const s3 = await Ll({ options: e2, storesRoot: t2, mountKey: r3, hashBudgetBytes: e2.maxHashBytesPerRun - o2 });
        if (void 0 !== s3) {
          o2 += s3.hashedBytes, n2.push(s3);
          try {
            e2.onOutcome?.(s3), e2.log?.(`${r3} ${s3.outcome}${void 0 === s3.reason ? "" : ` ${s3.reason}`} hashed=${s3.hashedBytes}`);
          } catch {
          }
        }
      }
      return { outcomes: n2 };
    }
    async function Ll(e2) {
      const { options: t2, storesRoot: r2, mountKey: n2, hashBudgetBytes: s2 } = e2, o2 = (t2.now ?? Date.now)(), i2 = t2.now ?? Date.now, a2 = t2.processExists ?? Ir, c2 = (0, Wt.WX)(t2.store, n2), l2 = (0, Wt.dv)(c2);
      let u2, d2, m2 = false, g2 = false;
      const y2 = (e3, t3 = {}) => ({ mountKey: n2, outcome: e3, ...void 0 === t3.reason ? {} : { reason: t3.reason }, hashedBytes: t3.hashedBytes ?? 0, durationMs: Math.max(0, i2() - o2) }), w2 = h.join(l2, Wt.kR), v2 = (0, Wt.mD)(c2), _2 = Vl(w2, "directory");
      const b2 = Vl(v2, "file");
      let S2 = false;
      try {
        (0, Wt.rs)(l2);
        const e3 = await fr({ lockPath: (0, Wt.N1)(c2), windowId: t2.windowId, identity: yr(), now: i2, processExists: a2, staleLockMs: Number.POSITIVE_INFINITY });
        if ("acquired" !== e3.kind) return y2("skipped_locked");
        u2 = e3.lock, S2 = true;
        const o3 = i2();
        if ("live" === (await zc({ store: t2.store, mountKey: n2, windowId: t2.windowId, processExists: a2, now: () => o3, markTtlMs: t2.markTtlMs })).kind) return y2("skipped_marked");
        if (d2 = { version: 1, pid: process.pid, windowId: t2.windowId, startedAtMs: o3 }, jl(t2, n2, a2)) return y2("skipped_pinned");
        if (p.existsSync(Nc(t2.store, n2)) || p.existsSync((0, Wt.mD)(c2))) {
          const e4 = Vc({ store: t2.store, mountKey: n2, now: i2() });
          if (void 0 === e4 || e4 < t2.maxIdleMs) return y2("skipped_pinned", { reason: "recently_used" });
        }
        if (t2.isMountLive(n2)) return y2("skipped_live");
        const m3 = await bc({ parts: c2, sqlite: t2.sqlite, statFastPathMode: t2.statFastPathMode, hashBudgetBytes: s2, now: i2 });
        if ("clean" !== m3.kind) {
          const e4 = (function(e5) {
            if ("dirty" === e5.kind) return { outcome: "skipped_dirty", reason: e5.reason, hashedBytes: e5.counts.hashedBytes };
            return { outcome: $l(e5.reason), reason: e5.reason, hashedBytes: 0 };
          })(m3);
          return y2(e4.outcome, { reason: e4.reason, hashedBytes: e4.hashedBytes });
        }
        if (!await u2.verifyStillOwned()) return y2("lock_lost", { hashedBytes: m3.hashedBytes });
        if (await t2.beforeLateRecheck?.(n2), t2.isMountLive(n2)) return y2("skipped_live", { hashedBytes: m3.hashedBytes });
        if (jl(t2, n2, a2)) return y2("late_pin", { hashedBytes: m3.hashedBytes });
        if (i2() - d2.startedAtMs >= t2.markTtlMs / 2) return y2("mark_expired", { hashedBytes: m3.hashedBytes });
        if ("dry_run" === t2.mode) return y2("would_evict", { hashedBytes: m3.hashedBytes });
        await t2.beforeRename?.(n2);
        const w3 = i2(), v3 = `${n2}.${w3}.${(0, Ys.randomUUID)()}`, _3 = h.join(r2, Wt.Jl);
        (0, Wt.Ew)(_3);
        const b3 = h.join(_3, v3);
        try {
          await (t2.rename ?? p.promises.rename)(l2, b3);
        } catch (e4) {
          if ((function(e5) {
            const t3 = Xl(e5);
            return "EBUSY" === t3 || "EPERM" === t3 || "ENOTEMPTY" === t3 || "EACCES" === t3;
          })(e4)) return y2("rename_failed", { reason: Xl(e4), hashedBytes: m3.hashedBytes });
          throw e4;
        }
        if (g2 = true, await u2.dispose(), u2 = void 0, !await (async function(e4, t3, r3) {
          const n3 = h.join(e4, "files");
          let s3;
          try {
            const e5 = p.lstatSync(n3);
            if (e5.isSymbolicLink() || !e5.isDirectory()) return false;
            const t4 = I(n3);
            if (t4.refusals.length > 0) return false;
            s3 = t4.files;
          } catch (e5) {
            if (e5 instanceof f) return false;
            if (Zl(e5) && "ENOENT" === e5.code) return 0 === t3.length;
            throw e5;
          }
          if (s3.length !== t3.length) return false;
          const o4 = new Map(t3.map((e5) => [e5.relPath, e5]));
          for (const e5 of s3) {
            const t4 = o4.get(e5.relPath);
            if (void 0 === t4) return false;
            const n4 = p.lstatSync(e5.absPath, { bigint: true }), s4 = "win32" !== r3 && n4.ctimeNs !== t4.ctimeNs;
            if (!n4.isFile() || Number(n4.size) !== t4.size || n4.mtimeNs !== t4.mtimeNs || s4 || n4.ino !== t4.ino) return false;
            try {
              if ((await nc({ absPath: e5.absPath, maxBytes: Qi, expectedDev: Number(n4.dev), expectedIno: Number(n4.ino) })).sha !== t4.sha256) return false;
            } catch {
              return false;
            }
          }
          return true;
        })(b3, m3.snapshot, t2.platform ?? process.platform)) {
          const e4 = await (async function(e5) {
            const { options: t3, storesRoot: r3, movedPath: n3, movedName: s3 } = e5, o4 = h.join(r3, Wt.qA);
            try {
              return (0, Wt.Ew)(o4), void await (t3.rename ?? p.promises.rename)(n3, h.join(o4, s3));
            } catch (e6) {
              const r4 = `${n3}${Ml}`;
              try {
                await (t3.rename ?? p.promises.rename)(n3, r4);
              } catch {
                !(function(e7) {
                  try {
                    p.writeFileSync(h.join(e7, Jl), "");
                  } catch {
                    return;
                  }
                })(n3);
              }
              return `kept_in_evicted:${Xl(e6) ?? "rename_failed"}`;
            }
          })({ options: t2, storesRoot: r2, movedPath: b3, movedName: v3 });
          return y2("salvaged", { reason: e4, hashedBytes: m3.hashedBytes });
        }
        return await k2(), "quarantine" === t2.mode ? (await rr(h.join(b3, Rl), `${JSON.stringify({ mountKey: n2, evictedAtMs: w3 })}
`, 384), y2("quarantined", { hashedBytes: m3.hashedBytes })) : (await (t2.rm ?? Kl)(b3, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 }), y2(m3.empty ? "evicted_empty" : "evicted", { hashedBytes: m3.hashedBytes }));
      } catch (e3) {
        return y2("error", { reason: Xl(e3) ?? "failed" });
      } finally {
        if (void 0 !== u2 && (await u2.dispose().catch(() => {
        }), u2 = void 0), S2 && !g2 && (void 0 !== _2 && Yl(w2, _2, "directory"), void 0 !== b2 && Yl(v2, b2, "file")), m2 || await k2().catch(() => {
        }), g2) try {
          !(function(e3, t3, r3) {
            const n3 = jc({ store: e3.store, mountKey: t3, processExists: r3 });
            for (const e4 of n3.pins) if (!e4.live) try {
              p.lstatSync(e4.path).isFile() && p.unlinkSync(e4.path);
            } catch (e5) {
              if ("ENOENT" !== Xl(e5)) throw e5;
            }
            Gl(Nc(e3.store, t3)), Gl(Fc(e3.store, t3)), Gl(h.dirname(Nc(e3.store, t3)));
          })(t2, n2, a2);
        } catch {
        }
      }
      function k2() {
        return void 0 === d2 || m2 ? Promise.resolve() : (m2 = true, Wc({ store: t2.store, mountKey: n2, expected: d2, processExists: a2 }));
      }
    }
    function $l(e2) {
      switch (e2) {
        case "schema":
          return "skipped_schema";
        case "open_handle":
          return "skipped_open_handle";
        case "residue":
          return "skipped_residue";
        case "budget":
          return "skipped_budget";
        case "unreadable":
          return "skipped_unreadable";
        default:
          return e2;
      }
    }
    function jl(e2, t2, r2) {
      return jc({ store: e2.store, mountKey: t2, processExists: r2 }).pins.some((e3) => e3.live);
    }
    function Gl(e2) {
      try {
        const t2 = p.lstatSync(e2);
        if (!t2.isDirectory() || t2.isSymbolicLink()) return;
        p.rmdirSync(e2);
      } catch (e3) {
        const t2 = Xl(e3);
        if ("ENOENT" === t2 || "ENOTEMPTY" === t2 || "EEXIST" === t2) return;
        throw e3;
      }
    }
    function zl(e2) {
      const t2 = Ql(h.join(e2, Jl));
      return void 0 !== t2 && t2.isFile() && !t2.isSymbolicLink();
    }
    function Wl(e2) {
      try {
        const t2 = JSON.parse(p.readFileSync(h.join(e2, Rl), "utf8"));
        if ("object" == typeof t2 && null !== t2 && "evictedAtMs" in t2) {
          const e3 = t2.evictedAtMs;
          if ("number" == typeof e3 && Number.isSafeInteger(e3)) return e3;
        }
      } catch (e3) {
        if (!Zl(e3) || "ENOENT" !== e3.code) return;
      }
    }
    function Hl(e2) {
      const t2 = e2.split(".");
      if (t2.length < 3) return;
      const r2 = t2[t2.length - 2];
      if (void 0 === r2 || !/^[0-9]+$/.test(r2)) return;
      const n2 = Number(r2);
      return Number.isSafeInteger(n2) ? n2 : void 0;
    }
    function Kl(e2, t2) {
      return p.promises.rm(e2, t2);
    }
    function Vl(e2, t2) {
      const r2 = Ql(e2);
      if (void 0 !== r2 && !r2.isSymbolicLink() && ("directory" === t2 ? r2.isDirectory() : r2.isFile())) return r2.mtime;
    }
    function Yl(e2, t2, r2) {
      try {
        const n2 = p.lstatSync(e2);
        if (n2.isSymbolicLink()) return;
        if ("directory" === r2 ? !n2.isDirectory() : !n2.isFile()) return;
        p.utimesSync(e2, n2.atime, t2);
      } catch {
        return;
      }
    }
    function Ql(e2) {
      try {
        return p.lstatSync(e2);
      } catch (e3) {
        if (Zl(e3) && "ENOENT" === e3.code) return;
        throw e3;
      }
    }
    function Xl(e2) {
      return Zl(e2) ? e2.code : void 0;
    }
    function Zl(e2) {
      return e2 instanceof Error && "string" == typeof e2.code;
    }
    function eu({ parentAbs: e2, childAbs: t2 }) {
      const r2 = h.resolve(e2), n2 = h.resolve(t2);
      if (n2 === r2) return true;
      const s2 = h.relative(r2, n2);
      return s2.length > 0 && !s2.startsWith("..") && !h.isAbsolute(s2);
    }
    function tu(e2, t2) {
      if (0 === e2.length || !h.isAbsolute(e2)) return;
      let r2, n2 = -1;
      for (const s2 of t2) {
        if (!eu({ parentAbs: s2.filesDir, childAbs: e2 })) continue;
        const t3 = h.resolve(s2.filesDir).length;
        t3 > n2 && (r2 = s2, n2 = t3);
      }
      return r2;
    }
    const ru = ["eager", "lazy"], nu = ["legacy_sweep", "off", "dry_run", "quarantine", "on"], su = ["prompt_inventory", "env_provider", "write_detected", "explicit_sync", "resume", "inherited", "import", "flush"], ou = ["scan", "size_asc"], iu = { syncDebounceMs: "sync_debounce_ms", idleBackoffFactor: "idle_backoff_factor", syncIdleMaxMs: "sync_idle_max_ms", idleQuiesceMs: "idle_quiesce_ms", largeTargetTtlMs: "large_target_ttl_ms", syncBackoffBaseMs: "sync_backoff_base_ms", syncBackoffMaxMs: "sync_backoff_max_ms", projectSyncDebounceMs: "project_sync_debounce_ms", projectSyncIdleMaxMs: "project_sync_idle_max_ms", projectSyncBackoffBaseMs: "project_sync_backoff_base_ms", projectSyncBackoffMaxMs: "project_sync_backoff_max_ms", passiveRetryIntervalMs: "passive_retry_interval_ms", passiveIndexPollIntervalMs: "passive_index_poll_interval_ms", pathRefreshMinIntervalMs: "path_refresh_min_interval_ms", maxFileSizeBytes: "max_file_size_bytes", tokenRefreshBufferMs: "token_refresh_buffer_ms", mintTerminalDenialCacheMs: "mint_terminal_denial_cache_ms", skipDeniedMountSync: "skip_denied_mount_sync", rpcRetryMaxAttempts: "rpc_retry_max_attempts", rpcRetryBaseDelayMs: "rpc_retry_base_delay_ms", rpcRetryMaxDelayMs: "rpc_retry_max_delay_ms", rpcRetryMultiplier: "rpc_retry_multiplier", rpcTimeoutMs: "rpc_timeout_ms", blobIdleTimeoutMs: "blob_idle_timeout_ms", blobConnectTimeoutMs: "blob_connect_timeout_ms", syncRoundTimeoutMs: "sync_round_timeout_ms", syncRoundProgressTimeoutMs: "sync_round_progress_timeout_ms", syncRoundHardCapMs: "sync_round_hard_cap_ms", syncRoundUnwindTimeoutMs: "sync_round_unwind_timeout_ms", lockReleaseFailureThreshold: "lock_release_failure_threshold", lockReleaseFailureStreakThreshold: "lock_release_failure_streak_threshold", lockReleaseFailureStreakPassiveMs: "lock_release_failure_streak_passive_ms", resumeGapThresholdMs: "resume_gap_threshold_ms", resumeDetectionMode: "resume_detection_mode", dirtyPassiveStalledThresholdMs: "dirty_passive_stalled_threshold_ms", s3Concurrency: "s3_concurrency", listConcurrency: "list_concurrency", listWalkConcurrency: "list_walk_concurrency", hashConcurrency: "hash_concurrency", presignConcurrency: "presign_concurrency", multipartUploadThresholdBytes: "multipart_upload_threshold_bytes", multipartPartSizeBytes: "multipart_part_size_bytes", multipartPresignWindowSize: "multipart_presign_window_size", pullPresignWindowSize: "pull_presign_window_size", multipartCompleteMaxAttempts: "multipart_complete_max_attempts", multipartMaxRestarts: "multipart_max_restarts", multipartMaxConflictRenames: "multipart_max_conflict_renames", multipartMaxExpiryRefreshes: "multipart_max_expiry_refreshes", writeBarrierTimeoutMs: "write_barrier_timeout_ms", scopedReservedSlots: "scoped_reserved_slots", pathSyncRequestPollMs: "path_sync_request_poll_ms", pathSyncRequestWaitPollMs: "path_sync_request_wait_poll_ms", exclusiveMutationClaimPollMs: "exclusive_mutation_claim_poll_ms", sharedScheduler: "shared_scheduler", storeRootIdFence: "store_root_id_fence", indexClosedInvalidatesSession: "index_closed_invalidates_session", periodicCoalesceMs: "periodic_coalesce_ms", staleStoreRootMaxIdleMs: "stale_store_root_max_idle_ms", storeEvictionMode: "store_eviction_mode", storeEvictionQuarantineMs: "store_eviction_quarantine_ms", storeEvictionMaxRootsPerRun: "store_eviction_max_roots_per_run", storeEvictionMaxHashBytesPerRun: "store_eviction_max_hash_bytes_per_run", storeEvictionMarkTtlMs: "store_eviction_mark_ttl_ms", storeEvictionMinIntervalMs: "store_eviction_min_interval_ms", tombstoneFullRefreshRounds: "tombstone_full_refresh_rounds", tombstoneFullRefreshIntervalMs: "tombstone_full_refresh_interval_ms", tombstonePruneSlackMs: "tombstone_prune_slack_ms", remoteVersionEnabled: "remote_version_enabled", versionFullListIntervalMs: "version_full_list_interval_ms", versionAuditSampleRate: "version_audit_sample_rate", versionProbeEnabled: "version_probe_enabled", versionProbeMaxEntries: "version_probe_max_entries", mintRetryPolicyVersion: "mint_retry_policy_version", mintRetryMaxAttempts: "mint_retry_max_attempts", mintRetryBaseDelayMs: "mint_retry_base_delay_ms", mintRetryMaxDelayMs: "mint_retry_max_delay_ms", mintRetryBudgetRatio: "mint_retry_budget_ratio", mintRetryBudgetFloor: "mint_retry_budget_floor", mintTransientNegativeCacheBaseMs: "mint_transient_negative_cache_base_ms", mintTransientNegativeCacheMaxMs: "mint_transient_negative_cache_max_ms", mintGateOpenThreshold: "mint_gate_open_threshold", mintGateWindowMs: "mint_gate_window_ms", mintGateOpenBaseMs: "mint_gate_open_base_ms", mintGateOpenMaxMs: "mint_gate_open_max_ms", tokenRefreshJitterRatio: "token_refresh_jitter_ratio", minTokenSlackMs: "min_token_slack_ms", localStatFastPath: "local_stat_fast_path", localStatFastPathAuditRate: "local_stat_fast_path_audit_rate", localStatRacyMarginMs: "local_stat_racy_margin_ms", harnessRecoveryPolicy: "harness_recovery_policy", harnessRecoveryStartJitterMs: "harness_recovery_start_jitter_ms", harnessRecoveryProbeBaseMs: "harness_recovery_probe_base_ms", harnessRecoveryProbeMaxMs: "harness_recovery_probe_max_ms", harnessRememberedMountsMax: "harness_remembered_mounts_max", mountPolicy: "mount_policy", pushOrder: "push_order" }, au = 864e5, cu = Object.freeze({ syncDebounceMs: 5e3, idleBackoffFactor: 1, syncIdleMaxMs: 5e3, idleQuiesceMs: 0, largeTargetTtlMs: 18e5, syncBackoffBaseMs: 5e3, syncBackoffMaxMs: 6e4, projectSyncDebounceMs: 5e3, projectSyncIdleMaxMs: 5e3, projectSyncBackoffBaseMs: 5e3, projectSyncBackoffMaxMs: 6e4, passiveRetryIntervalMs: 5e3, passiveIndexPollIntervalMs: 2e3, pathRefreshMinIntervalMs: 1e3, maxFileSizeBytes: Qi, tokenRefreshBufferMs: 6e4, mintTerminalDenialCacheMs: 18e5, skipDeniedMountSync: 0, rpcRetryMaxAttempts: 3, rpcRetryBaseDelayMs: 250, rpcRetryMaxDelayMs: 5e3, rpcRetryMultiplier: 2, rpcTimeoutMs: 6e4, blobIdleTimeoutMs: 6e4, blobConnectTimeoutMs: 0, syncRoundTimeoutMs: 3e5, syncRoundProgressTimeoutMs: 0, syncRoundHardCapMs: 0, syncRoundUnwindTimeoutMs: 3e4, lockReleaseFailureThreshold: 3, lockReleaseFailureStreakThreshold: 0, lockReleaseFailureStreakPassiveMs: 3e5, resumeGapThresholdMs: 12e4, resumeDetectionMode: "mono_gap", dirtyPassiveStalledThresholdMs: 12e4, s3Concurrency: 8, listConcurrency: 4, listWalkConcurrency: 4, hashConcurrency: 4, presignConcurrency: 4, multipartUploadThresholdBytes: Xi, multipartPartSizeBytes: Zi, multipartPresignWindowSize: 8, pullPresignWindowSize: 500, multipartCompleteMaxAttempts: 3, multipartMaxRestarts: 1, multipartMaxConflictRenames: 1, multipartMaxExpiryRefreshes: 1, writeBarrierTimeoutMs: 2e3, scopedReservedSlots: 1, pathSyncRequestPollMs: 250, pathSyncRequestWaitPollMs: 50, exclusiveMutationClaimPollMs: 250, sharedScheduler: false, storeRootIdFence: false, indexClosedInvalidatesSession: false, periodicCoalesceMs: 2e3, staleStoreRootMaxIdleMs: 7 * au, storeEvictionMode: "legacy_sweep", storeEvictionQuarantineMs: au, storeEvictionMaxRootsPerRun: 4, storeEvictionMaxHashBytesPerRun: 268435456, storeEvictionMarkTtlMs: Rc, storeEvictionMinIntervalMs: 216e5, tombstoneFullRefreshRounds: na, tombstoneFullRefreshIntervalMs: sa, tombstonePruneSlackMs: oa, remoteVersionEnabled: false, versionFullListIntervalMs: ha, versionAuditSampleRate: 0, versionProbeEnabled: false, versionProbeMaxEntries: 50, mintRetryPolicyVersion: 1, mintRetryMaxAttempts: 2, mintRetryBaseDelayMs: 250, mintRetryMaxDelayMs: 2e3, mintRetryBudgetRatio: 0.1, mintRetryBudgetFloor: 3, mintTransientNegativeCacheBaseMs: 5e3, mintTransientNegativeCacheMaxMs: 12e4, mintGateOpenThreshold: 5, mintGateWindowMs: 3e4, mintGateOpenBaseMs: 5e3, mintGateOpenMaxMs: 12e4, tokenRefreshJitterRatio: 0.5, minTokenSlackMs: 5e3, localStatFastPath: "off", localStatFastPathAuditRate: 1, localStatRacyMarginMs: 2e3, harnessRecoveryPolicy: "recover", harnessRecoveryStartJitterMs: 3e4, harnessRecoveryProbeBaseMs: 3e5, harnessRecoveryProbeMaxMs: 36e5, harnessRememberedMountsMax: 16, mountPolicy: "eager", pushOrder: "scan" }), lu = Object.freeze({ ...cu, mountPolicy: "lazy" });
    function uu(e2 = "ide") {
      return "ide" === e2 ? lu : cu;
    }
    const du = 1048576, pu = { syncDebounceMs: { min: 250, max: 36e5 }, idleBackoffFactor: { min: 1, max: 4 }, syncIdleMaxMs: { min: 250, max: 36e5 }, idleQuiesceMs: { min: 0, max: 36e5 }, largeTargetTtlMs: { min: 6e4, max: 864e5 }, syncBackoffBaseMs: { min: 100, max: 36e5 }, syncBackoffMaxMs: { min: 100, max: 36e5 }, projectSyncDebounceMs: { min: 250, max: 36e5 }, projectSyncIdleMaxMs: { min: 250, max: 36e5 }, projectSyncBackoffBaseMs: { min: 100, max: 36e5 }, projectSyncBackoffMaxMs: { min: 100, max: 36e5 }, passiveRetryIntervalMs: { min: 0, max: 36e5 }, passiveIndexPollIntervalMs: { min: 0, max: 36e5 }, pathRefreshMinIntervalMs: { min: 0, max: 36e5 }, maxFileSizeBytes: { min: 1024, max: 1073741824 }, tokenRefreshBufferMs: { min: 0, max: 6e5 }, mintTerminalDenialCacheMs: { min: 6e4, max: au }, skipDeniedMountSync: { min: 0, max: 1 }, rpcRetryMaxAttempts: { min: 1, max: 10 }, rpcRetryBaseDelayMs: { min: 1, max: 6e4 }, rpcRetryMaxDelayMs: { min: 1, max: 3e5 }, rpcRetryMultiplier: { min: 1, max: 10 }, rpcTimeoutMs: { min: 1e3, max: 6e5 }, blobIdleTimeoutMs: { min: 1e3, max: 6e5 }, blobConnectTimeoutMs: { min: 1e3, max: 3e5 }, syncRoundTimeoutMs: { min: 3e4, max: 36e5 }, syncRoundProgressTimeoutMs: { min: 3e4, max: 36e5 }, syncRoundHardCapMs: { min: 6e4, max: 72e5 }, syncRoundUnwindTimeoutMs: { min: 1e3, max: 6e5 }, lockReleaseFailureThreshold: { min: 1, max: 20 }, lockReleaseFailureStreakThreshold: { min: 0, max: 100 }, lockReleaseFailureStreakPassiveMs: { min: 5e3, max: 36e5 }, resumeGapThresholdMs: { min: 3e4, max: 36e5 }, dirtyPassiveStalledThresholdMs: { min: 3e4, max: 36e5 }, s3Concurrency: { min: 1, max: 64 }, listConcurrency: { min: 1, max: 64 }, listWalkConcurrency: { min: 1, max: 64 }, hashConcurrency: { min: 1, max: 64 }, presignConcurrency: { min: 1, max: 64 }, multipartUploadThresholdBytes: { min: 5 * du, max: 1024 * du }, multipartPartSizeBytes: { min: 5 * du, max: 512 * du }, multipartPresignWindowSize: { min: 1, max: 32 }, pullPresignWindowSize: { min: 1, max: 1e3 }, multipartCompleteMaxAttempts: { min: 1, max: 5 }, multipartMaxRestarts: { min: 0, max: 2 }, multipartMaxConflictRenames: { min: 0, max: 2 }, multipartMaxExpiryRefreshes: { min: 0, max: 3 }, writeBarrierTimeoutMs: { min: 0, max: 6e4 }, scopedReservedSlots: { min: 0, max: 8 }, pathSyncRequestPollMs: { min: 0, max: 6e4 }, pathSyncRequestWaitPollMs: { min: 1, max: 6e4 }, exclusiveMutationClaimPollMs: { min: 50, max: 6e4 }, periodicCoalesceMs: { min: 250, max: 3e4 }, staleStoreRootMaxIdleMs: { min: 1, max: Number.MAX_SAFE_INTEGER }, storeEvictionQuarantineMs: { min: 0, max: Number.MAX_SAFE_INTEGER }, storeEvictionMaxRootsPerRun: { min: 1, max: Number.MAX_SAFE_INTEGER }, storeEvictionMaxHashBytesPerRun: { min: 1, max: Number.MAX_SAFE_INTEGER }, storeEvictionMarkTtlMs: { min: 1e3, max: Rc }, storeEvictionMinIntervalMs: { min: 0, max: Number.MAX_SAFE_INTEGER }, tombstoneFullRefreshRounds: { min: 1, max: Number.MAX_SAFE_INTEGER }, tombstoneFullRefreshIntervalMs: { min: 0, max: Number.MAX_SAFE_INTEGER }, tombstonePruneSlackMs: { min: 0, max: Number.MAX_SAFE_INTEGER }, versionFullListIntervalMs: { min: 36e5, max: 6048e5 }, versionAuditSampleRate: { min: 0, max: 1 }, versionProbeMaxEntries: { min: 1, max: 100 }, mintRetryPolicyVersion: { min: 0, max: 1 }, mintRetryMaxAttempts: { min: 1, max: 5 }, mintRetryBaseDelayMs: { min: 1, max: 6e4 }, mintRetryMaxDelayMs: { min: 1, max: 6e4 }, mintRetryBudgetRatio: { min: 0, max: 1 }, mintRetryBudgetFloor: { min: 0, max: 100 }, mintTransientNegativeCacheBaseMs: { min: 100, max: 36e5 }, mintTransientNegativeCacheMaxMs: { min: 100, max: 36e5 }, mintGateOpenThreshold: { min: 1, max: 1e3 }, mintGateWindowMs: { min: 1e3, max: 36e5 }, mintGateOpenBaseMs: { min: 100, max: 36e5 }, mintGateOpenMaxMs: { min: 100, max: 36e5 }, tokenRefreshJitterRatio: { min: 0, max: 1 }, minTokenSlackMs: { min: 1, max: 6e4 }, localStatFastPathAuditRate: { min: 0, max: 1 }, localStatRacyMarginMs: { min: 0, max: 6e4 }, harnessRecoveryStartJitterMs: { min: 0, max: 3e5 }, harnessRecoveryProbeBaseMs: { min: 1e3, max: 36e5 }, harnessRecoveryProbeMaxMs: { min: 1e3, max: 36e5 }, harnessRememberedMountsMax: { min: 0, max: 64 } };
    function mu(e2) {
      return "object" == typeof e2 && null !== e2 && !Array.isArray(e2);
    }
    function hu(e2, t2) {
      if (void 0 === e2) return;
      const r2 = iu[t2];
      return Object.hasOwn(e2, r2) ? e2[r2] : Object.hasOwn(e2, t2) ? e2[t2] : void 0;
    }
    function fu(e2, t2, r2, n2) {
      if ("number" != typeof e2 || !Number.isFinite(e2)) return t2;
      const s2 = false === n2?.integer ? e2 : Math.floor(e2);
      return Math.min(Math.max(s2, r2.min), r2.max);
    }
    function gu(e2, t2) {
      return "boolean" == typeof e2 ? e2 : t2;
    }
    function yu(e2, t2, r2) {
      return 0 === e2 ? 0 : fu(e2, t2, r2);
    }
    function wu(e2, t2) {
      const r2 = fu(hu(e2, "harnessRecoveryProbeBaseMs"), t2.harnessRecoveryProbeBaseMs, pu.harnessRecoveryProbeBaseMs), n2 = fu(hu(e2, "harnessRecoveryProbeMaxMs"), t2.harnessRecoveryProbeMaxMs, pu.harnessRecoveryProbeMaxMs);
      return { syncDebounceMs: fu(hu(e2, "syncDebounceMs"), t2.syncDebounceMs, pu.syncDebounceMs), idleBackoffFactor: fu(hu(e2, "idleBackoffFactor"), t2.idleBackoffFactor, pu.idleBackoffFactor, { integer: false }), syncIdleMaxMs: fu(hu(e2, "syncIdleMaxMs"), t2.syncIdleMaxMs, pu.syncIdleMaxMs), idleQuiesceMs: fu(hu(e2, "idleQuiesceMs"), t2.idleQuiesceMs, pu.idleQuiesceMs), largeTargetTtlMs: fu(hu(e2, "largeTargetTtlMs"), t2.largeTargetTtlMs, pu.largeTargetTtlMs), syncBackoffBaseMs: fu(hu(e2, "syncBackoffBaseMs"), t2.syncBackoffBaseMs, pu.syncBackoffBaseMs), syncBackoffMaxMs: fu(hu(e2, "syncBackoffMaxMs"), t2.syncBackoffMaxMs, pu.syncBackoffMaxMs), projectSyncDebounceMs: fu(hu(e2, "projectSyncDebounceMs"), t2.projectSyncDebounceMs, pu.projectSyncDebounceMs), projectSyncIdleMaxMs: fu(hu(e2, "projectSyncIdleMaxMs"), t2.projectSyncIdleMaxMs, pu.projectSyncIdleMaxMs), projectSyncBackoffBaseMs: fu(hu(e2, "projectSyncBackoffBaseMs"), t2.projectSyncBackoffBaseMs, pu.projectSyncBackoffBaseMs), projectSyncBackoffMaxMs: fu(hu(e2, "projectSyncBackoffMaxMs"), t2.projectSyncBackoffMaxMs, pu.projectSyncBackoffMaxMs), passiveRetryIntervalMs: fu(hu(e2, "passiveRetryIntervalMs"), t2.passiveRetryIntervalMs, pu.passiveRetryIntervalMs), passiveIndexPollIntervalMs: fu(hu(e2, "passiveIndexPollIntervalMs"), t2.passiveIndexPollIntervalMs, pu.passiveIndexPollIntervalMs), pathRefreshMinIntervalMs: fu(hu(e2, "pathRefreshMinIntervalMs"), t2.pathRefreshMinIntervalMs, pu.pathRefreshMinIntervalMs), maxFileSizeBytes: fu(hu(e2, "maxFileSizeBytes"), t2.maxFileSizeBytes, pu.maxFileSizeBytes), tokenRefreshBufferMs: fu(hu(e2, "tokenRefreshBufferMs"), t2.tokenRefreshBufferMs, pu.tokenRefreshBufferMs), mintTerminalDenialCacheMs: yu(hu(e2, "mintTerminalDenialCacheMs"), t2.mintTerminalDenialCacheMs, pu.mintTerminalDenialCacheMs), skipDeniedMountSync: Iu(hu(e2, "skipDeniedMountSync"), t2.skipDeniedMountSync), rpcRetryMaxAttempts: fu(hu(e2, "rpcRetryMaxAttempts"), t2.rpcRetryMaxAttempts, pu.rpcRetryMaxAttempts), rpcRetryBaseDelayMs: fu(hu(e2, "rpcRetryBaseDelayMs"), t2.rpcRetryBaseDelayMs, pu.rpcRetryBaseDelayMs), rpcRetryMaxDelayMs: fu(hu(e2, "rpcRetryMaxDelayMs"), t2.rpcRetryMaxDelayMs, pu.rpcRetryMaxDelayMs), rpcRetryMultiplier: fu(hu(e2, "rpcRetryMultiplier"), t2.rpcRetryMultiplier, pu.rpcRetryMultiplier, { integer: false }), rpcTimeoutMs: fu(hu(e2, "rpcTimeoutMs"), t2.rpcTimeoutMs, pu.rpcTimeoutMs), blobIdleTimeoutMs: yu(hu(e2, "blobIdleTimeoutMs"), t2.blobIdleTimeoutMs, pu.blobIdleTimeoutMs), blobConnectTimeoutMs: yu(hu(e2, "blobConnectTimeoutMs"), t2.blobConnectTimeoutMs, pu.blobConnectTimeoutMs), syncRoundTimeoutMs: yu(hu(e2, "syncRoundTimeoutMs"), t2.syncRoundTimeoutMs, pu.syncRoundTimeoutMs), syncRoundProgressTimeoutMs: yu(hu(e2, "syncRoundProgressTimeoutMs"), t2.syncRoundProgressTimeoutMs, pu.syncRoundProgressTimeoutMs), syncRoundHardCapMs: yu(hu(e2, "syncRoundHardCapMs"), t2.syncRoundHardCapMs, pu.syncRoundHardCapMs), syncRoundUnwindTimeoutMs: fu(hu(e2, "syncRoundUnwindTimeoutMs"), t2.syncRoundUnwindTimeoutMs, pu.syncRoundUnwindTimeoutMs), lockReleaseFailureThreshold: fu(hu(e2, "lockReleaseFailureThreshold"), t2.lockReleaseFailureThreshold, pu.lockReleaseFailureThreshold), lockReleaseFailureStreakThreshold: fu(hu(e2, "lockReleaseFailureStreakThreshold"), t2.lockReleaseFailureStreakThreshold, pu.lockReleaseFailureStreakThreshold), lockReleaseFailureStreakPassiveMs: fu(hu(e2, "lockReleaseFailureStreakPassiveMs"), t2.lockReleaseFailureStreakPassiveMs, pu.lockReleaseFailureStreakPassiveMs), resumeGapThresholdMs: yu(hu(e2, "resumeGapThresholdMs"), t2.resumeGapThresholdMs, pu.resumeGapThresholdMs), resumeDetectionMode: vu(hu(e2, "resumeDetectionMode"), t2.resumeDetectionMode), dirtyPassiveStalledThresholdMs: yu(hu(e2, "dirtyPassiveStalledThresholdMs"), t2.dirtyPassiveStalledThresholdMs, pu.dirtyPassiveStalledThresholdMs), s3Concurrency: fu(hu(e2, "s3Concurrency"), t2.s3Concurrency, pu.s3Concurrency), listConcurrency: fu(hu(e2, "listConcurrency"), t2.listConcurrency, pu.listConcurrency), hashConcurrency: fu(hu(e2, "hashConcurrency"), t2.hashConcurrency, pu.hashConcurrency), presignConcurrency: fu(hu(e2, "presignConcurrency"), t2.presignConcurrency, pu.presignConcurrency), multipartUploadThresholdBytes: fu(hu(e2, "multipartUploadThresholdBytes"), t2.multipartUploadThresholdBytes, pu.multipartUploadThresholdBytes), multipartPartSizeBytes: fu(hu(e2, "multipartPartSizeBytes"), t2.multipartPartSizeBytes, pu.multipartPartSizeBytes), multipartPresignWindowSize: fu(hu(e2, "multipartPresignWindowSize"), t2.multipartPresignWindowSize, pu.multipartPresignWindowSize), pullPresignWindowSize: fu(hu(e2, "pullPresignWindowSize"), t2.pullPresignWindowSize, pu.pullPresignWindowSize), listWalkConcurrency: fu(hu(e2, "listWalkConcurrency"), t2.listWalkConcurrency, pu.listWalkConcurrency), multipartCompleteMaxAttempts: fu(hu(e2, "multipartCompleteMaxAttempts"), t2.multipartCompleteMaxAttempts, pu.multipartCompleteMaxAttempts), multipartMaxRestarts: fu(hu(e2, "multipartMaxRestarts"), t2.multipartMaxRestarts, pu.multipartMaxRestarts), multipartMaxConflictRenames: fu(hu(e2, "multipartMaxConflictRenames"), t2.multipartMaxConflictRenames, pu.multipartMaxConflictRenames), multipartMaxExpiryRefreshes: fu(hu(e2, "multipartMaxExpiryRefreshes"), t2.multipartMaxExpiryRefreshes, pu.multipartMaxExpiryRefreshes), writeBarrierTimeoutMs: fu(hu(e2, "writeBarrierTimeoutMs"), t2.writeBarrierTimeoutMs, pu.writeBarrierTimeoutMs), scopedReservedSlots: fu(hu(e2, "scopedReservedSlots"), t2.scopedReservedSlots, pu.scopedReservedSlots), pathSyncRequestPollMs: fu(hu(e2, "pathSyncRequestPollMs"), t2.pathSyncRequestPollMs, pu.pathSyncRequestPollMs), pathSyncRequestWaitPollMs: fu(hu(e2, "pathSyncRequestWaitPollMs"), t2.pathSyncRequestWaitPollMs, pu.pathSyncRequestWaitPollMs), exclusiveMutationClaimPollMs: fu(hu(e2, "exclusiveMutationClaimPollMs"), t2.exclusiveMutationClaimPollMs, pu.exclusiveMutationClaimPollMs), sharedScheduler: gu(hu(e2, "sharedScheduler"), t2.sharedScheduler), storeRootIdFence: gu(hu(e2, "storeRootIdFence"), t2.storeRootIdFence), indexClosedInvalidatesSession: gu(hu(e2, "indexClosedInvalidatesSession"), t2.indexClosedInvalidatesSession), periodicCoalesceMs: fu(hu(e2, "periodicCoalesceMs"), t2.periodicCoalesceMs, pu.periodicCoalesceMs), staleStoreRootMaxIdleMs: Pu(hu(e2, "staleStoreRootMaxIdleMs"), t2.staleStoreRootMaxIdleMs), storeEvictionMode: Su(hu(e2, "storeEvictionMode"), t2.storeEvictionMode), storeEvictionQuarantineMs: Cu(hu(e2, "storeEvictionQuarantineMs"), t2.storeEvictionQuarantineMs), storeEvictionMaxRootsPerRun: Tu(hu(e2, "storeEvictionMaxRootsPerRun"), t2.storeEvictionMaxRootsPerRun), storeEvictionMaxHashBytesPerRun: Tu(hu(e2, "storeEvictionMaxHashBytesPerRun"), t2.storeEvictionMaxHashBytesPerRun), storeEvictionMarkTtlMs: Math.min(Pu(hu(e2, "storeEvictionMarkTtlMs"), t2.storeEvictionMarkTtlMs, pu.storeEvictionMarkTtlMs.min), pu.storeEvictionMarkTtlMs.max), storeEvictionMinIntervalMs: Cu(hu(e2, "storeEvictionMinIntervalMs"), t2.storeEvictionMinIntervalMs), tombstoneFullRefreshRounds: Tu(hu(e2, "tombstoneFullRefreshRounds"), t2.tombstoneFullRefreshRounds), tombstoneFullRefreshIntervalMs: Cu(hu(e2, "tombstoneFullRefreshIntervalMs"), t2.tombstoneFullRefreshIntervalMs), tombstonePruneSlackMs: Cu(hu(e2, "tombstonePruneSlackMs"), t2.tombstonePruneSlackMs), remoteVersionEnabled: gu(hu(e2, "remoteVersionEnabled"), t2.remoteVersionEnabled), versionFullListIntervalMs: fu(hu(e2, "versionFullListIntervalMs"), t2.versionFullListIntervalMs, pu.versionFullListIntervalMs), versionAuditSampleRate: fu(hu(e2, "versionAuditSampleRate"), t2.versionAuditSampleRate, pu.versionAuditSampleRate, { integer: false }), versionProbeEnabled: gu(hu(e2, "versionProbeEnabled"), t2.versionProbeEnabled), versionProbeMaxEntries: fu(hu(e2, "versionProbeMaxEntries"), t2.versionProbeMaxEntries, pu.versionProbeMaxEntries), mintRetryPolicyVersion: ku(hu(e2, "mintRetryPolicyVersion"), t2.mintRetryPolicyVersion), mintRetryMaxAttempts: fu(hu(e2, "mintRetryMaxAttempts"), t2.mintRetryMaxAttempts, pu.mintRetryMaxAttempts), mintRetryBaseDelayMs: fu(hu(e2, "mintRetryBaseDelayMs"), t2.mintRetryBaseDelayMs, pu.mintRetryBaseDelayMs), mintRetryMaxDelayMs: fu(hu(e2, "mintRetryMaxDelayMs"), t2.mintRetryMaxDelayMs, pu.mintRetryMaxDelayMs), mintRetryBudgetRatio: fu(hu(e2, "mintRetryBudgetRatio"), t2.mintRetryBudgetRatio, pu.mintRetryBudgetRatio, { integer: false }), mintRetryBudgetFloor: fu(hu(e2, "mintRetryBudgetFloor"), t2.mintRetryBudgetFloor, pu.mintRetryBudgetFloor), mintTransientNegativeCacheBaseMs: fu(hu(e2, "mintTransientNegativeCacheBaseMs"), t2.mintTransientNegativeCacheBaseMs, pu.mintTransientNegativeCacheBaseMs), mintTransientNegativeCacheMaxMs: fu(hu(e2, "mintTransientNegativeCacheMaxMs"), t2.mintTransientNegativeCacheMaxMs, pu.mintTransientNegativeCacheMaxMs), mintGateOpenThreshold: fu(hu(e2, "mintGateOpenThreshold"), t2.mintGateOpenThreshold, pu.mintGateOpenThreshold), mintGateWindowMs: fu(hu(e2, "mintGateWindowMs"), t2.mintGateWindowMs, pu.mintGateWindowMs), mintGateOpenBaseMs: fu(hu(e2, "mintGateOpenBaseMs"), t2.mintGateOpenBaseMs, pu.mintGateOpenBaseMs), mintGateOpenMaxMs: fu(hu(e2, "mintGateOpenMaxMs"), t2.mintGateOpenMaxMs, pu.mintGateOpenMaxMs), tokenRefreshJitterRatio: fu(hu(e2, "tokenRefreshJitterRatio"), t2.tokenRefreshJitterRatio, pu.tokenRefreshJitterRatio, { integer: false }), minTokenSlackMs: fu(hu(e2, "minTokenSlackMs"), t2.minTokenSlackMs, pu.minTokenSlackMs), localStatFastPath: bu(hu(e2, "localStatFastPath"), t2.localStatFastPath), localStatFastPathAuditRate: fu(hu(e2, "localStatFastPathAuditRate"), t2.localStatFastPathAuditRate, pu.localStatFastPathAuditRate, { integer: false }), localStatRacyMarginMs: fu(hu(e2, "localStatRacyMarginMs"), t2.localStatRacyMarginMs, pu.localStatRacyMarginMs), harnessRecoveryPolicy: xu(hu(e2, "harnessRecoveryPolicy"), t2.harnessRecoveryPolicy), harnessRecoveryStartJitterMs: fu(hu(e2, "harnessRecoveryStartJitterMs"), t2.harnessRecoveryStartJitterMs, pu.harnessRecoveryStartJitterMs), harnessRecoveryProbeBaseMs: r2, harnessRecoveryProbeMaxMs: Math.max(r2, n2), harnessRememberedMountsMax: fu(hu(e2, "harnessRememberedMountsMax"), t2.harnessRememberedMountsMax, pu.harnessRememberedMountsMax), mountPolicy: Eu(hu(e2, "mountPolicy"), t2.mountPolicy), pushOrder: _u(hu(e2, "pushOrder"), t2.pushOrder) };
    }
    function vu(e2, t2) {
      return "mono_gap" === e2 || "timer_lateness" === e2 ? e2 : t2;
    }
    function _u(e2, t2) {
      return "scan" === e2 || "size_asc" === e2 ? e2 : t2;
    }
    function bu(e2, t2) {
      return "off" === e2 || "posix" === e2 || "all" === e2 ? e2 : t2;
    }
    function Su(e2, t2) {
      return "legacy_sweep" === e2 || "off" === e2 || "dry_run" === e2 || "quarantine" === e2 || "on" === e2 ? e2 : t2;
    }
    function ku(e2, t2) {
      return 0 === e2 || 1 === e2 ? e2 : t2;
    }
    function xu(e2, t2) {
      return "latch" === e2 || "recover" === e2 ? e2 : t2;
    }
    function Eu(e2, t2) {
      return "eager" === e2 || "lazy" === e2 ? e2 : t2;
    }
    function Iu(e2, t2) {
      return 0 === e2 || 1 === e2 ? e2 : t2;
    }
    function Tu(e2, t2) {
      return "number" == typeof e2 && Number.isSafeInteger(e2) && e2 >= 1 ? e2 : t2;
    }
    function Cu(e2, t2) {
      return "number" == typeof e2 && Number.isSafeInteger(e2) && e2 >= 0 ? e2 : t2;
    }
    function Pu(e2, t2, r2 = 0) {
      if (0 === e2) return r2 > 0 ? r2 : 0;
      if ("number" == typeof e2 && Number.isFinite(e2) && e2 > 0) {
        const t3 = Math.floor(e2);
        return r2 > 0 && t3 < r2 ? r2 : t3;
      }
      return t2;
    }
    function Au(e2, t2 = "ide", r2) {
      const n2 = mu(e2) ? e2 : void 0, s2 = mu(n2?.surfaces) ? n2.surfaces : void 0, o2 = mu(s2?.[t2]) ? s2[t2] : void 0;
      let i2 = (function(e3) {
        const t3 = e3.syncBackoffBaseMs;
        let r3 = e3.syncBackoffMaxMs;
        t3 > r3 && (r3 = t3);
        const n3 = e3.projectSyncBackoffBaseMs;
        let s3 = e3.projectSyncBackoffMaxMs;
        n3 > s3 && (s3 = n3);
        const o3 = e3.rpcRetryBaseDelayMs;
        let i3 = e3.rpcRetryMaxDelayMs;
        o3 > i3 && (i3 = o3);
        const a2 = e3.mintRetryBaseDelayMs;
        let c2 = e3.mintRetryMaxDelayMs;
        a2 > c2 && (c2 = a2);
        const l2 = e3.mintTransientNegativeCacheBaseMs;
        let u2 = e3.mintTransientNegativeCacheMaxMs;
        l2 > u2 && (u2 = l2);
        const d2 = e3.mintGateOpenBaseMs;
        let p2 = e3.mintGateOpenMaxMs;
        return d2 > p2 && (p2 = d2), t3 === e3.syncBackoffBaseMs && r3 === e3.syncBackoffMaxMs && s3 === e3.projectSyncBackoffMaxMs && o3 === e3.rpcRetryBaseDelayMs && i3 === e3.rpcRetryMaxDelayMs && c2 === e3.mintRetryMaxDelayMs && u2 === e3.mintTransientNegativeCacheMaxMs && p2 === e3.mintGateOpenMaxMs ? e3 : { ...e3, syncBackoffBaseMs: t3, syncBackoffMaxMs: r3, projectSyncBackoffMaxMs: s3, rpcRetryBaseDelayMs: o3, rpcRetryMaxDelayMs: i3, mintRetryMaxDelayMs: c2, mintTransientNegativeCacheMaxMs: u2, mintGateOpenMaxMs: p2 };
      })(wu(o2, wu(n2, uu(t2))));
      return Ru(n2, "syncIdleMaxMs") || Ru(o2, "syncIdleMaxMs") || i2.syncIdleMaxMs === i2.syncDebounceMs || (i2 = { ...i2, syncIdleMaxMs: i2.syncDebounceMs }), Ru(n2, "projectSyncIdleMaxMs") || Ru(o2, "projectSyncIdleMaxMs") || i2.projectSyncIdleMaxMs === i2.projectSyncDebounceMs || (i2 = { ...i2, projectSyncIdleMaxMs: i2.projectSyncDebounceMs }), (function(e3, t3) {
        if (void 0 === t3 || Ju || 1 !== e3.skipDeniedMountSync || 0 !== e3.mintTerminalDenialCacheMs) return;
        Ju = true;
        try {
          t3("skip_denied_mount_sync is 1 but mint_terminal_denial_cache_ms is 0, so terminal denials are not cached and those rounds are not skipped");
        } catch {
        }
      })(i2, r2?.onWarn), i2;
    }
    function Ru(e2, t2) {
      return void 0 !== hu(e2, t2);
    }
    function Mu(e2, t2) {
      return t2 ? e2.projectSyncIdleMaxMs : e2.syncIdleMaxMs;
    }
    let Ju = false;
    function Ou(e2, t2) {
      return t2 ? { syncDebounceMs: e2.projectSyncDebounceMs, syncBackoffBaseMs: e2.projectSyncBackoffBaseMs, syncBackoffMaxMs: e2.projectSyncBackoffMaxMs } : { syncDebounceMs: e2.syncDebounceMs, syncBackoffBaseMs: e2.syncBackoffBaseMs, syncBackoffMaxMs: e2.syncBackoffMaxMs };
    }
    function Bu(e2, t2 = false) {
      return { ...Ou(e2, t2), idleBackoffFactor: e2.idleBackoffFactor, syncIdleMaxMs: Mu(e2, t2), ...Du(e2), ...qu(e2), passiveRetryIntervalMs: e2.passiveRetryIntervalMs, passiveIndexPollIntervalMs: e2.passiveIndexPollIntervalMs, pathRefreshMinIntervalMs: e2.pathRefreshMinIntervalMs, maxFileSizeBytes: e2.maxFileSizeBytes, multipartUploadThresholdBytes: e2.multipartUploadThresholdBytes, multipartPartSizeBytes: e2.multipartPartSizeBytes, multipartPresignWindowSize: e2.multipartPresignWindowSize, pullPresignWindowSize: e2.pullPresignWindowSize, listWalkConcurrency: e2.listWalkConcurrency, multipartCompleteMaxAttempts: e2.multipartCompleteMaxAttempts, multipartMaxRestarts: e2.multipartMaxRestarts, multipartMaxConflictRenames: e2.multipartMaxConflictRenames, multipartMaxExpiryRefreshes: e2.multipartMaxExpiryRefreshes, pathSyncRequestPollMs: e2.pathSyncRequestPollMs, pathSyncRequestWaitPollMs: e2.pathSyncRequestWaitPollMs, exclusiveMutationClaimPollMs: e2.exclusiveMutationClaimPollMs, blobIdleTimeoutMs: e2.blobIdleTimeoutMs, blobConnectTimeoutMs: e2.blobConnectTimeoutMs, syncRoundTimeoutMs: e2.syncRoundTimeoutMs, syncRoundProgressTimeoutMs: e2.syncRoundProgressTimeoutMs, syncRoundHardCapMs: e2.syncRoundHardCapMs, syncRoundUnwindTimeoutMs: e2.syncRoundUnwindTimeoutMs, lockReleaseFailureThreshold: e2.lockReleaseFailureThreshold, lockReleaseFailureStreakThreshold: e2.lockReleaseFailureStreakThreshold, lockReleaseFailureStreakPassiveMs: e2.lockReleaseFailureStreakPassiveMs, resumeGapThresholdMs: e2.resumeGapThresholdMs, resumeDetectionMode: e2.resumeDetectionMode, localStatFastPath: e2.localStatFastPath, localStatFastPathAuditRate: e2.localStatFastPathAuditRate, localStatRacyMarginMs: e2.localStatRacyMarginMs, pushOrder: e2.pushOrder, storeRootIdFence: e2.storeRootIdFence, indexClosedInvalidatesSession: e2.indexClosedInvalidatesSession };
    }
    function Du(e2) {
      return { tombstoneFullRefreshRounds: e2.tombstoneFullRefreshRounds, tombstoneFullRefreshIntervalMs: e2.tombstoneFullRefreshIntervalMs, tombstonePruneSlackMs: e2.tombstonePruneSlackMs };
    }
    function qu(e2) {
      return { remoteVersionEnabled: e2.remoteVersionEnabled, versionFullListIntervalMs: e2.versionFullListIntervalMs, versionAuditSampleRate: e2.versionAuditSampleRate };
    }
    function Nu(e2 = cu) {
      const t2 = e2.scopedReservedSlots;
      return { s3: new Lt({ max: e2.s3Concurrency, reservedForPriority: t2 }), list: new Lt({ max: e2.listConcurrency }), hash: new Lt({ max: e2.hashConcurrency, reservedForPriority: t2 }), presign: new Lt({ max: e2.presignConcurrency, reservedForPriority: t2 }) };
    }
    function Fu(e2) {
      return { policy: e2.harnessRecoveryPolicy, startJitterMs: e2.harnessRecoveryStartJitterMs, probeBaseMs: e2.harnessRecoveryProbeBaseMs, probeMaxMs: e2.harnessRecoveryProbeMaxMs, rememberedMountsMax: e2.harnessRememberedMountsMax };
    }
    function Uu(e2, t2 = "ide") {
      const r2 = uu(t2);
      for (const t3 of Object.keys(r2)) if (e2[t3] !== r2[t3]) return true;
      return false;
    }
    function Lu(e2) {
      try {
        return v(e2);
      } catch {
        return;
      }
    }
    function $u(e2, t2) {
      if ("absent" === e2.kind || "passive" === e2.kind || "denied" === e2.kind) return e2.kind;
      const { errors: r2 } = e2.summary;
      if (r2.some((e3) => void 0 === e3.relPath)) return "error";
      if (0 === r2.length) return "synced-path";
      const n2 = /* @__PURE__ */ new Set();
      for (const e3 of r2) {
        if (void 0 === e3.relPath) continue;
        const t3 = Lu(e3.relPath);
        if (void 0 === t3) return "error";
        n2.add(t3);
      }
      for (const e3 of t2) {
        const t3 = Lu(e3);
        if (void 0 === t3 || n2.has(t3)) return "error";
      }
      return "synced-path";
    }
    class ju {
      constructor(e2) {
        this.states = /* @__PURE__ */ new Map(), this.run = e2.run, this.resolveOutcome = e2.resolveOutcome ?? ((e3) => e3);
      }
      request(e2, t2 = [], r2) {
        const n2 = this.stateFor(e2), s2 = { relPaths: [...t2], timeoutMs: r2?.timeoutMs };
        if (void 0 === n2.inFlight) return this.enqueueStart(e2, n2, s2);
        const o2 = n2.pending ?? this.createPendingBatch(n2);
        for (const e3 of t2) o2.relPaths.add(e3);
        return new Promise((e3, t3) => {
          o2.waiters.push({ ...s2, resolve: e3, reject: t3 });
        });
      }
      stateFor(e2) {
        const t2 = this.states.get(e2);
        if (void 0 !== t2) return t2;
        const r2 = { inFlight: void 0, pending: void 0 };
        return this.states.set(e2, r2), r2;
      }
      createPendingBatch(e2) {
        const t2 = { relPaths: /* @__PURE__ */ new Set(), waiters: [] };
        return e2.pending = t2, t2;
      }
      enqueueStart(e2, t2, r2) {
        return new Promise((n2, s2) => {
          this.start(e2, t2, [{ ...r2, resolve: n2, reject: s2 }]);
        });
      }
      start(e2, t2, r2) {
        const n2 = /* @__PURE__ */ new Set();
        let s2;
        for (const e3 of r2) {
          for (const t3 of e3.relPaths) n2.add(t3);
          void 0 !== e3.timeoutMs && (s2 = void 0 === s2 ? e3.timeoutMs : Math.max(s2, e3.timeoutMs));
        }
        const o2 = this.run(e2, [...n2], { timeoutMs: s2 });
        t2.inFlight = o2.then((e3) => {
          for (const t3 of r2) try {
            t3.resolve(this.resolveOutcome(e3, t3.relPaths));
          } catch (e4) {
            t3.reject(e4);
          }
        }, (e3) => {
          for (const t3 of r2) t3.reject(e3);
        }), t2.inFlight.then(() => {
          t2.inFlight = void 0;
          const r3 = t2.pending;
          t2.pending = void 0, void 0 !== r3 ? this.start(e2, t2, r3.waiters) : this.states.get(e2) === t2 && this.states.delete(e2);
        });
      }
    }
    const Gu = 1e4;
    class zu {
      constructor(e2) {
        this.options = e2, this.queued = [], this.flushQueued = false;
      }
      isEnabled() {
        return this.options.isEnabled();
      }
      probe(e2) {
        return new Promise((t2) => {
          this.queued.push({ agentId: e2.agentId, entry: e2.entry, resolve: t2 }), this.flushQueued || (this.flushQueued = true, queueMicrotask(() => this.flush()));
        });
      }
      flush() {
        this.flushQueued = false;
        const e2 = this.queued;
        this.queued = [];
        const t2 = (function(e3) {
          if (!Number.isFinite(e3) || e3 < 1) return 1;
          return Math.floor(e3);
        })(this.options.maxEntries());
        for (let r2 = 0; r2 < e2.length; r2 += t2) this.send(e2.slice(r2, r2 + t2));
      }
      async send(e2) {
        let t2;
        const r2 = new AbortController();
        let n2;
        const s2 = new Promise((e3) => {
          n2 = setTimeout(() => {
            r2.abort(), e3(void 0);
          }, this.options.timeoutMs ?? Gu), n2.unref?.();
        });
        try {
          const n3 = this.options.checkVersions({ entries: e2.map((e3) => e3.entry), signal: r2.signal }).then((e3) => e3, () => {
          });
          t2 = await Promise.race([n3, s2]), void 0 !== t2 && t2.length !== e2.length && (t2 = void 0);
        } catch {
          t2 = void 0;
        } finally {
          clearTimeout(n2);
        }
        try {
          this.options.onBatch?.({ entries: e2.map((e3, r3) => ({ agentId: e3.agentId, status: t2?.[r3]?.status ?? "rpc_failed" })) });
        } catch {
        }
        e2.forEach((e3, r3) => {
          e3.resolve(t2?.[r3]);
        });
      }
    }
    function Wu(e2) {
      return Math.min(e2, 3e4);
    }
    function Hu(e2) {
      return new e2.BackoffScheduler({ baseDelayMs: 3e4, maxDelayMs: 6e5, jitter: 0.2 });
    }
    function Ku(e2) {
      return "passive" === e2.fromState && "running" === e2.toState;
    }
    class Vu {
      constructor(e2, t2, r2, n2, s2, o2, i2 = cu, a2) {
        this.harness = e2, this.windowId = t2, this.log = r2, this.ports = n2, this.onMountInvalidated = s2, this.syncMetrics = o2, this.syncConfig = i2, this.onSyncDisabled = a2, this.mountMetadata = /* @__PURE__ */ new Map(), this.disposables = [], this.resolvedStoreIds = /* @__PURE__ */ new Map(), this.resolvedStoreIdWriters = /* @__PURE__ */ new Map(), this.resolvedStoreIdListeners = /* @__PURE__ */ new Set(), this.mountBackoff = /* @__PURE__ */ new Map(), this.lastDiskFullToastMs = /* @__PURE__ */ new Map(), this.controllerSyncConfigLoadSeq = 0, this.controllerSyncConfigAppliedSeq = 0, this.syncConfigApplied = false, this.dirtyMounts = /* @__PURE__ */ new Set(), this.fullSyncCoalescer = new ju({ run: (e3) => this.runFullSyncForConflictNotices(e3) }), this.scopedSyncCoalescer = new ju({ run: (e3, t3, { timeoutMs: r3 }) => this.runScopedSyncForConflictNotices(e3, t3, r3), resolveOutcome: (e3, t3) => $u(e3, t3) }), this.dirtyPassiveStalledSince = /* @__PURE__ */ new Map(), this.dirtyPassiveStalledReported = /* @__PURE__ */ new Set(), this.inheritedConflictNoticeMounts = /* @__PURE__ */ new Map(), this.deferredLocalStores = /* @__PURE__ */ new Map(), this.lazySelfOpens = /* @__PURE__ */ new Set(), this.lazySelfOpenSettled = /* @__PURE__ */ new Map(), this.admittedResumeStores = /* @__PURE__ */ new Set(), this.disposed = false, this.mintClients = /* @__PURE__ */ new Map(), this.periodicScheduler = new hi(), this.versionProbe = new zu({ isEnabled: () => this.isVersionProbeActive(), maxEntries: () => this.syncConfig.versionProbeMaxEntries, checkVersions: (e3) => this.checkAgentStoreVersions(e3), onBatch: (e3) => this.syncMetrics?.emitter.onVersionProbeBatch?.(e3) }), this.versionProbeIgnoredLogged = false, this.holdNewSelfSessionsIdle = false, this.staleStoreSweepRunning = false, this.latestSyncConfig = i2, this.syncPeriodicScheduler(i2), this.mintRetryBudget = new us({ ratio: i2.mintRetryBudgetRatio, floor: i2.mintRetryBudgetFloor }), this.mintGate = new ls({ openThreshold: i2.mintGateOpenThreshold, windowMs: i2.mintGateWindowMs, openBaseMs: i2.mintGateOpenBaseMs, openMaxMs: i2.mintGateOpenMaxMs, enabled: () => this.syncConfig.mintRetryPolicyVersion >= 1, onStateChanged: (e3) => {
          this.syncMetrics?.emitter.onMintGateStateChanged?.(e3);
        } }), this.logIgnoredVersionProbe(i2);
        const c2 = globalThis;
        if ("function" == typeof c2.addEventListener) {
          const e3 = () => this.onOnlineEvent();
          c2.addEventListener("online", e3), this.disposables.push({ dispose: () => {
            c2.removeEventListener?.("online", e3);
          } });
        }
        var l2;
        l2 = this, pi().add(l2);
      }
      isDirtyPassiveWatchdogEnabled() {
        return this.syncConfigApplied && this.syncConfig.dirtyPassiveStalledThresholdMs > 0 && this.syncConfig.passiveIndexPollIntervalMs > 0;
      }
      startDirtyPassiveWatchdog() {
        if (void 0 !== this.dirtyPassiveWatchdogTimer) return;
        if (!this.isDirtyPassiveWatchdogEnabled()) return;
        const e2 = Wu(this.syncConfig.dirtyPassiveStalledThresholdMs), t2 = setInterval(() => this.checkDirtyPassiveStalls(), e2);
        t2.unref?.(), this.dirtyPassiveWatchdogTimer = t2, this.disposables.push({ dispose: () => {
          clearInterval(t2), this.dirtyPassiveWatchdogTimer = void 0;
        } }), this.checkDirtyPassiveStalls();
      }
      stopDirtyPassiveWatchdog() {
        const e2 = this.dirtyPassiveWatchdogTimer;
        void 0 !== e2 && (clearInterval(e2), this.dirtyPassiveWatchdogTimer = void 0);
      }
      syncPeriodicScheduler(e2) {
        const t2 = this.periodicScheduler;
        if (e2.sharedScheduler && t2 instanceof fi) return void t2.setCoalesceMs(e2.periodicCoalesceMs);
        if (!e2.sharedScheduler && t2 instanceof hi) return;
        t2.dispose(), this.periodicScheduler = gi(e2, (e3) => {
          this.syncMetrics?.emitter.onSchedulerTick?.({ sessions: e3 });
        });
        const r2 = this.sessions;
        if (void 0 !== r2) for (const e3 of this.mountMetadata.keys()) {
          const t3 = r2.get(e3);
          if (void 0 !== t3 && !t3.isClosed() && !t3.isClosing()) {
            t3.setPeriodicScheduler(this.periodicScheduler);
            continue;
          }
          const n2 = r2.getSlot(e3);
          "opening" === n2?.kind && n2.promise.then((e4) => {
            e4.isClosed() || e4.isClosing() || e4.setPeriodicScheduler(this.periodicScheduler);
          }, () => {
          });
        }
      }
      applyControllerSyncConfig(e2) {
        const t2 = this.isDirtyPassiveWatchdogEnabled(), r2 = 0 === this.syncConfig.idleQuiesceMs;
        this.syncConfigApplied = true, this.syncConfig = e2, this.syncPeriodicScheduler(e2), this.mintRetryBudget.setTimings({ ratio: e2.mintRetryBudgetRatio, floor: e2.mintRetryBudgetFloor }), this.mintGate.setTimings({ openThreshold: e2.mintGateOpenThreshold, windowMs: e2.mintGateWindowMs, openBaseMs: e2.mintGateOpenBaseMs, openMaxMs: e2.mintGateOpenMaxMs }), this.mintGate.setEnabled(e2.mintRetryPolicyVersion >= 1), this.logIgnoredVersionProbe(e2);
        for (const t3 of this.mintClients.values()) t3.setMintTiming({ refreshBufferMs: e2.tokenRefreshBufferMs, tokenRefreshJitterRatio: e2.tokenRefreshJitterRatio, minTokenSlackMs: e2.minTokenSlackMs, mintRetryMaxAttempts: e2.mintRetryMaxAttempts, mintRetryBaseDelayMs: e2.mintRetryBaseDelayMs, mintRetryMaxDelayMs: e2.mintRetryMaxDelayMs }), t3.retuneTransientMintBackoffs();
        r2 || 0 !== e2.idleQuiesceMs ? r2 && e2.idleQuiesceMs > 0 && this.idleQuiesceEnabledListener?.() : (this.holdNewSelfSessionsIdle = false, this.reactivateSelfSessions()), "eager" === e2.mountPolicy && this.mountDeferredLocalStoresNow(), this.applyLiveTimingToOpenSessions(e2);
        const n2 = e2.dirtyPassiveStalledThresholdMs > 0 && e2.passiveIndexPollIntervalMs > 0;
        t2 || !n2 ? t2 && !n2 && (this.stopDirtyPassiveWatchdog(), this.dirtyPassiveStalledSince.clear(), this.dirtyPassiveStalledReported.clear()) : this.startDirtyPassiveWatchdog();
      }
      isVersionProbeActive() {
        const e2 = this.syncConfig;
        return e2.versionProbeEnabled && e2.remoteVersionEnabled && e2.sharedScheduler;
      }
      logIgnoredVersionProbe(e2) {
        const t2 = e2.versionProbeEnabled && !(e2.remoteVersionEnabled && e2.sharedScheduler);
        t2 && !this.versionProbeIgnoredLogged && this.log.appendLine("[agent-store-sync] version_probe_enabled ignored: needs remote_version_enabled and shared_scheduler"), this.versionProbeIgnoredLogged = t2;
      }
      async checkAgentStoreVersions(e2) {
        const t2 = await this.loadModule();
        if (void 0 === t2) throw new Error("agent-store-sync module load failed");
        const r2 = await this.ports.getAgentStoreRpcService?.() ?? ot, n2 = new t2.BcsAgentStoreTransport({ transport: this.ports.getConnectTransport(), rpcTimeoutMs: this.syncConfig.rpcTimeoutMs, service: r2 });
        return await n2.checkVersions(e2);
      }
      reactivateSelfSessions() {
        const e2 = this.sessions;
        if (void 0 !== e2) for (const [t2, r2] of this.mountMetadata) "self" === r2.mountKind && e2.get(t2)?.setConversationActivity("active");
      }
      applyLiveTimingToOpenSessions(e2) {
        const t2 = this.sessions;
        if (void 0 !== t2) for (const r2 of this.mountMetadata.keys()) {
          const n2 = t2.get(r2);
          void 0 === n2 || n2.isClosed() || n2.isClosing() || n2.setRemoteTiming({ passiveIndexPollIntervalMs: e2.passiveIndexPollIntervalMs, passiveRetryIntervalMs: e2.passiveRetryIntervalMs, pathRefreshMinIntervalMs: e2.pathRefreshMinIntervalMs, resumeGapThresholdMs: e2.resumeGapThresholdMs, resumeDetectionMode: e2.resumeDetectionMode, syncRoundProgressTimeoutMs: e2.syncRoundProgressTimeoutMs, syncRoundHardCapMs: e2.syncRoundHardCapMs, localStatFastPath: e2.localStatFastPath, localStatFastPathAuditRate: e2.localStatFastPathAuditRate, localStatRacyMarginMs: e2.localStatRacyMarginMs, ...Du(e2), ...qu(e2) });
        }
      }
      recordHolderIndexProgress(e2) {
        this.clearDirtyPassiveStallTracking(e2);
      }
      clearDirtyPassiveStallTracking(e2) {
        this.dirtyPassiveStalledSince.delete(e2), this.dirtyPassiveStalledReported.delete(e2);
      }
      checkDirtyPassiveStalls(e2 = performance.now()) {
        if (this.disposed) return;
        if (!this.isDirtyPassiveWatchdogEnabled()) return;
        const t2 = this.syncConfig.dirtyPassiveStalledThresholdMs, r2 = Date.now(), n2 = this.lastDirtyPassiveCheckWallMs;
        this.lastDirtyPassiveCheckWallMs = r2, void 0 !== n2 && r2 - n2 > (function(e3) {
          return Math.max(e3, Wu(e3) + 1e4);
        })(t2) && (this.dirtyPassiveStalledSince.clear(), this.dirtyPassiveStalledReported.clear());
        for (const e3 of [...this.dirtyPassiveStalledSince.keys()]) this.dirtyMounts.has(e3) || this.dirtyPassiveStalledSince.delete(e3);
        for (const e3 of [...this.dirtyPassiveStalledReported]) this.dirtyMounts.has(e3) || this.dirtyPassiveStalledReported.delete(e3);
        for (const r3 of this.dirtyMounts) {
          const n3 = this.sessions?.get(r3)?.getEngineState();
          if ("passive" !== n3) {
            this.dirtyPassiveStalledSince.delete(r3), this.dirtyPassiveStalledReported.delete(r3);
            continue;
          }
          const s2 = this.dirtyPassiveStalledSince.get(r3);
          if (void 0 === s2) {
            this.dirtyPassiveStalledSince.set(r3, e2);
            continue;
          }
          const o2 = e2 - s2;
          o2 >= t2 && !this.dirtyPassiveStalledReported.has(r3) && (this.dirtyPassiveStalledReported.add(r3), this.log.appendLine(`[agent-store-sync] ${r3} has un-pushed writes stuck passive for ${o2}ms with no lock-holder progress; the holder may be wedged`), this.syncMetrics?.emitter?.onDirtyPassiveStalled?.({ agentId: r3, stalledMs: o2 }));
        }
      }
      getSharedQueues(e2) {
        return void 0 === this.queues && (this.queues = e2.createAgentStoreSyncQueues(this.syncConfig)), this.queues;
      }
      async settleMountAttempt(e2, t2, r2) {
        const n2 = mi();
        let s2;
        try {
          s2 = await r2();
        } catch (e3) {
          s2 = Cs("not-started", Ps(e3));
        }
        return this.recordMountOutcome(e2, t2, s2, n2), s2;
      }
      recordMountOutcome(e2, t2, r2, n2) {
        this.syncMetrics?.emitter?.recordMountOutcome?.({ agentId: t2, mountKind: e2, outcome: r2.outcome, reason: r2.reason, durationMs: mi() - n2 });
      }
      listMounts() {
        return [...this.mountMetadata.values()];
      }
      ensureMounted(e2) {
        const t2 = mi();
        if (this.disposed) this.recordMountOutcome("self", e2, Cs("not-started", "controller-disposed"), t2);
        else try {
          (0, Wt._b)(e2), this.ensureMountedSelf(e2).catch((e3) => {
            this.log.appendLine(`[agent-store-sync] refusing unsafe self mount: ${this.ports.sanitizeLogMessage(e3)}`);
          });
        } catch (r2) {
          this.recordMountOutcome("self", e2, Cs("invalid", "unsafe-mount-key"), t2), this.log.appendLine(`[agent-store-sync] refusing unsafe agent id: ${String(r2)}`);
        }
      }
      async ensureMountedSelfAwaited(e2, t2) {
        const r2 = mi();
        if (this.disposed) return this.recordMountOutcome("self", e2, Cs("not-started", "controller-disposed"), r2), Cs("not-started", "controller-disposed");
        try {
          (0, Wt._b)(e2);
        } catch (t3) {
          return this.recordMountOutcome("self", e2, Cs("invalid", "unsafe-mount-key"), r2), this.log.appendLine(`[agent-store-sync] refusing unsafe agent id: ${String(t3)}`), Cs("invalid", "unsafe-mount-key");
        }
        const n2 = t2?.timeoutMs ?? this.syncConfig.writeBarrierTimeoutMs;
        try {
          return await (0, ni.wj)(this.ensureMountedSelf(e2), n2, `Agent Store self mount for ${e2} still opening after ${n2}ms`);
        } catch (e3) {
          return this.log.appendLine(`[agent-store-sync] awaited self mount did not complete: ${this.ports.sanitizeLogMessage(e3)}`), Cs("not-started", "mount-still-opening");
        }
      }
      async ensureMountedSelf(e2) {
        return await this.settleMountAttempt("self", e2, async () => {
          const t2 = await this.loadModule();
          return void 0 === t2 ? Cs("not-started", "module-unavailable") : await this.ensureMountedSpec(t2, t2.createSelfMountSpec(e2));
        });
      }
      async ensureMountedPeer(e2) {
        return await this.settleMountAttempt("peer", e2.peerAgentId, async () => {
          if (this.disposed) return Cs("not-started", "controller-disposed");
          let t2, r2;
          try {
            (0, Wt._b)(e2.peerAgentId);
            const n3 = await this.loadModule();
            if (void 0 === n3) return Cs("not-started", "module-unavailable");
            t2 = n3, r2 = t2.createPeerMountSpec(e2.peerAgentId, { ...void 0 !== e2.alias ? { alias: e2.alias } : {}, ...true === e2.isProjectStore ? { isProjectStore: true } : {} });
          } catch (e3) {
            return this.log.appendLine(`[agent-store-sync] refusing unsafe peer mount: ${String(e3)}`), Cs("invalid", "unsafe-mount-key");
          }
          const { isProjectStore: n2, awaitInitialRound: s2 } = e2;
          return await this.ensureMountedSpec(t2, r2, { isProjectStore: n2, awaitInitialRound: s2 });
        });
      }
      async ensureMountedPrincipal(e2) {
        return await this.settleMountAttempt("principal", e2.sourceId, async () => {
          if (this.disposed) return Cs("not-started", "controller-disposed");
          if (!(0, Yn.XW)(e2.sourceId)) return this.log.appendLine(`[agent-store-sync] refusing invalid principal source id for ${e2.alias}`), Cs("invalid", "unsafe-mount-key");
          let t2, r2;
          try {
            (0, Wt.qh)(e2.sourceId);
            const n2 = await this.loadModule();
            if (void 0 === n2) return Cs("not-started", "module-unavailable");
            t2 = n2, r2 = t2.createPrincipalMountSpec(e2.sourceId, { alias: e2.alias });
          } catch (e3) {
            return this.log.appendLine(`[agent-store-sync] refusing unsafe principal mount: ${String(e3)}`), Cs("invalid", "unsafe-mount-key");
          }
          return await this.ensureMountedSpec(t2, r2);
        });
      }
      async ensureMountedShare(e2) {
        return await this.settleMountAttempt("share", e2.shareId, async () => {
          if (this.disposed) return Cs("not-started", "controller-disposed");
          if (!(0, Wt.A8)(e2.shareId)) return this.log.appendLine(`[agent-store-sync] refusing unsafe share mount key: ${e2.shareId}`), Cs("invalid", "unsafe-mount-key");
          let t2, r2;
          try {
            (0, Wt.qh)(e2.shareId);
            const n2 = await this.loadModule();
            if (void 0 === n2) return Cs("not-started", "module-unavailable");
            t2 = n2, r2 = t2.createShareMountSpec(e2.shareId, { ...void 0 !== e2.alias ? { alias: e2.alias } : {} });
          } catch (e3) {
            return this.log.appendLine(`[agent-store-sync] refusing unsafe share mount: ${String(e3)}`), Cs("invalid", "unsafe-mount-key");
          }
          return await this.ensureMountedSpec(t2, r2);
        });
      }
      getResolvedStoreId(e2) {
        return this.resolvedStoreIds.get(e2);
      }
      getMountSyncState(e2) {
        const t2 = this.sessions?.get(e2);
        return void 0 !== t2 ? t2.getSyncState() : this.mountBackoff.has(e2) ? "sync-failed" : void 0;
      }
      onDidChangeResolvedStoreId(e2) {
        return this.disposed ? { dispose() {
        } } : (this.resolvedStoreIdListeners.add(e2), { dispose: () => {
          this.resolvedStoreIdListeners.delete(e2);
        } });
      }
      async unmountPrincipal(e2) {
        const t2 = this.mountMetadata.get(e2);
        if (this.mountBackoff.delete(e2), void 0 === t2 || "principal" !== t2.mountKind) return;
        this.mountMetadata.delete(e2), this.revokeResolvedStoreIdWriter(e2), this.lastDiskFullToastMs.delete(e2), this.dirtyMounts.delete(e2), this.clearDirtyPassiveStallTracking(e2);
        const r2 = this.sessions;
        if (void 0 !== r2) try {
          await r2.close(e2, { flush: false });
        } catch (t3) {
          this.log.appendLine(`[agent-store-sync] principal unmount ${e2} failed: ${this.ports.sanitizeLogMessage(t3)}`);
        }
      }
      async sweepStaleStoreRoots() {
        if (this.disposed) return;
        const e2 = this.latestSyncConfig, t2 = e2.storeEvictionMode;
        return "off" !== t2 ? "legacy_sweep" === t2 ? this.sweepLegacyStaleStoreRoots(e2.staleStoreRootMaxIdleMs) : void await this.evictIdleStoreRoots(e2, t2) : void 0;
      }
      async sweepLegacyStaleStoreRoots(e2) {
        if (!(e2 <= 0)) try {
          const t2 = await _i({ store: this.harness, maxIdleMs: e2, windowId: `${this.windowId}:stale-root-sweep`, isMountLive: (e3) => this.mountMetadata.has(e3) || this.isMountReserved(e3) });
          return this.log.appendLine(`[agent-store-sync] stale store sweep removed=${t2.length}` + (t2.length > 0 ? ` ${t2.join(",")}` : "")), t2;
        } catch (e3) {
          return void this.log.appendLine(`[agent-store-sync] stale store sweep failed: ${this.ports.sanitizeLogMessage(e3)}`);
        }
      }
      async evictIdleStoreRoots(e2, t2) {
        if (e2.staleStoreRootMaxIdleMs <= 0) return;
        const r2 = h.join(this.harness.base, this.harness.tmpDirName);
        if (!Dl({ storesRoot: r2, minIntervalMs: e2.storeEvictionMinIntervalMs })) return;
        let n2 = false;
        try {
          const r3 = await this.loadSqlite();
          if (this.disposed) return;
          n2 = true, await Ul({ store: this.harness, mode: t2, maxIdleMs: e2.staleStoreRootMaxIdleMs, quarantineMs: e2.storeEvictionQuarantineMs, markTtlMs: e2.storeEvictionMarkTtlMs, maxRootsPerRun: e2.storeEvictionMaxRootsPerRun, maxHashBytesPerRun: e2.storeEvictionMaxHashBytesPerRun, statFastPathMode: e2.localStatFastPath, isMountLive: (e3) => this.mountMetadata.has(e3) || this.isMountReserved(e3), windowId: `${this.windowId}:store-eviction`, sqlite: r3, log: (e3) => {
            this.log.appendLine(`[agent-store-sync] store eviction ${e3}`);
          }, onOutcome: (e3) => {
            this.syncMetrics?.emitter.recordStoreEviction?.({ mountKey: e3.mountKey, outcome: e3.outcome, reason: e3.reason, mode: t2, hashedBytes: e3.hashedBytes, durationMs: e3.durationMs });
          } });
        } catch (e3) {
          this.log.appendLine(`[agent-store-sync] store eviction failed: ${this.ports.sanitizeLogMessage(e3)}`);
        } finally {
          n2 || ql(r2);
        }
      }
      kickStaleStoreSweep() {
        if (this.staleStoreSweepRunning || this.disposed) return;
        this.staleStoreSweepRunning = true;
        const e2 = setTimeout(() => {
          this.sweepStaleStoreRoots().finally(() => {
            this.staleStoreSweepRunning = false;
          });
        }, 0);
        e2.unref?.();
      }
      isMountReserved(e2) {
        const t2 = this.sessions?.getSlot(e2);
        return "opening" === t2?.kind || "closing" === t2?.kind || "open" === t2?.kind && !t2.session.isClosed();
      }
      reconcileMountMetadata(e2, t2, r2) {
        const n2 = this.mountMetadata.get(t2);
        if (void 0 === n2) return void this.mountMetadata.set(t2, r2);
        const { result: s2, canonical: o2 } = e2.reconcileMountCollision({ existing: n2, incoming: r2 });
        if ("refused" === s2) this.log.appendLine(`[agent-store-sync] refusing to promote share mount ${r2.mountKey} to self`);
        else if ("promoted" === s2) {
          this.log.appendLine(`[agent-store-sync] promoting ${r2.mountKey} from peer to self`);
          const n3 = this.sessions?.get(t2);
          void 0 !== n3 && (this.writeMountConfig(e2, o2), this.holdNewSelfSessionsIdle && this.syncConfig.idleQuiesceMs > 0 && n3.setConversationActivity("idle"));
        }
        this.mountMetadata.set(t2, o2);
      }
      publishMountSuccess(e2, t2, r2) {
        this.mountBackoff.delete(t2);
        const n2 = this.mountMetadata.get(t2);
        void 0 !== n2 && n2.mountKey === t2 && "principal" !== n2.mountKind && this.writeMountConfig(e2, n2), this.log.appendLine(`[agent-store-sync] mounted ${t2} (state=${r2.getEngineState()})`), this.holdNewSelfSessionsIdle && "self" === n2?.mountKind && this.syncConfig.idleQuiesceMs > 0 && r2.setConversationActivity("idle"), this.refreshSessionRemoteTiming(t2);
      }
      raceReasonFor(e2) {
        return this.disposed ? "controller-disposed" : e2.isClosed() || e2.isClosing() ? "session-closed" : "session-superseded";
      }
      raceOutcome(e2, t2, r2) {
        if (this.disposed || r2.isClosed() || r2.isClosing() || e2.get(t2) !== r2) return Cs("not-started", this.raceReasonFor(r2));
      }
      async joinOpenSession(e2) {
        const { sessions: t2, mountKey: r2, session: n2, reason: s2 } = e2;
        return this.promoteMountedProjectStore(n2, e2.isProjectStore), e2.awaitInitialRound && await n2.awaitInitialRound(), this.raceOutcome(t2, r2, n2) ?? Cs("already-present", s2, n2.getSyncState());
      }
      async ensureMountedSpec(e2, t2, r2 = {}) {
        const { isProjectStore: n2 } = r2, s2 = false !== r2.awaitInitialRound, o2 = t2.mountKey, i2 = this.mountBackoff.get(o2);
        if (void 0 !== i2 && Date.now() < i2.readyAtMs) return Cs("cooling-down", "mount-backoff");
        const a2 = this.getSessions(e2), c2 = a2.getSlot(o2);
        if ("open" === c2?.kind && !c2.session.isClosed() && !c2.session.isClosing()) return this.reconcileMountMetadata(e2, o2, t2), await this.joinOpenSession({ sessions: a2, mountKey: o2, session: c2.session, reason: "slot-open", isProjectStore: n2, awaitInitialRound: s2 });
        if ("opening" === c2?.kind) {
          this.reconcileMountMetadata(e2, o2, t2);
          const r3 = c2.promise;
          try {
            const t3 = await r3, i3 = this.raceOutcome(a2, o2, t3);
            return void 0 !== i3 ? i3 : (this.publishMountSuccess(e2, o2, t3), await this.joinOpenSession({ sessions: a2, mountKey: o2, session: t3, reason: "slot-joined", isProjectStore: n2, awaitInitialRound: s2 }));
          } catch {
            return this.isMountReserved(o2) || (this.mountMetadata.delete(o2), this.revokeResolvedStoreIdWriter(o2)), Cs("not-started", "open-rejected");
          }
        }
        if ("closing" === c2?.kind) {
          try {
            await c2.promise;
          } catch {
          }
          if (this.disposed) return Cs("not-started", "controller-disposed");
        }
        this.reconcileMountMetadata(e2, o2, t2);
        try {
          const t3 = await a2.open(o2, (e3) => this.openSession(e3, { isProjectStore: n2, awaitInitialRound: false }));
          s2 && await t3.awaitInitialRound();
          const r3 = this.raceOutcome(a2, o2, t3);
          return void 0 !== r3 ? r3 : (this.publishMountSuccess(e2, o2, t3), this.promoteMountedProjectStore(t3, n2), this.kickStaleStoreSweep(), Cs("mounted", "opened", t3.getSyncState()));
        } catch (t3) {
          this.isMountReserved(o2) || (this.mountMetadata.delete(o2), this.revokeResolvedStoreIdWriter(o2)), this.dirtyMounts.delete(o2), this.clearDirtyPassiveStallTracking(o2);
          const r3 = this.mountBackoff.get(o2)?.scheduler ?? Hu(e2), n3 = r3.recordFailure();
          return this.mountBackoff.set(o2, { scheduler: r3, readyAtMs: Date.now() + n3 }), this.log.appendLine(`[agent-store-sync] mount ${o2} failed: ${this.ports.sanitizeLogMessage(t3)} (next retry in ${Math.round(n3 / 1e3)}s)`), Cs("not-started", Ps(t3));
        }
      }
      async forceSyncMountedIfPresent(e2) {
        if ("lazy" === this.syncConfig.mountPolicy && this.shouldJoinLazySelfOpen(e2)) {
          if ("absent" === await this.prepareExplicitSelfSync(e2, "flush")) return { kind: "not-mounted" };
        }
        const t2 = this.sessions?.get(e2);
        if (void 0 === t2) return { kind: "not-mounted" };
        const r2 = await t2.forceSync();
        return void 0 === r2 ? { kind: "mounted-no-summary" } : { kind: "synced", summary: r2 };
      }
      async prepareCloudSubagentStores(e2) {
        e2.signal.throwIfAborted();
        const t2 = e2.parentStoreId.trim();
        if (0 === t2.length) return [];
        if (!(0, Yn.v8)(t2)) return [];
        await this.ensureMountedSelf(t2), e2.signal.throwIfAborted();
        const r2 = (0, Wt.f$)(this.pathParts(t2));
        try {
          (0, Wt.rs)(r2);
        } catch (e3) {
          return this.log.appendLine(`[agent-store-sync] skipping cloud subagent store preparation for ${t2}: ${this.ports.sanitizeLogMessage(e3)}`), [];
        }
        const n2 = [];
        for (const r3 of [t2, ...e2.additionalStoreIds]) {
          const e3 = r3.trim();
          0 !== e3.length && !n2.includes(e3) && (0, Yn.v8)(e3) && n2.push(e3);
        }
        for (const t3 of n2) e2.signal.throwIfAborted(), await this.forceSyncMountedIfPresent(t3);
        return e2.signal.throwIfAborted(), n2;
      }
      listConflictJournalRefs(e2) {
        return this.listConflictNoticeMounts(e2).filter((e3) => false !== e3.deliverEvents).map((e3) => ({ journalPath: e3.journalPath }));
      }
      storeMountRoots() {
        const e2 = [], t2 = /* @__PURE__ */ new Set(), r2 = (r3) => {
          if (!t2.has(r3)) {
            t2.add(r3);
            try {
              const t3 = this.pathParts(r3);
              e2.push({ mountKey: r3, filesDir: (0, Wt.f$)(t3) });
            } catch {
            }
          }
        };
        for (const e3 of this.mountMetadata.keys()) r2(e3);
        for (const e3 of this.deferredLocalStores.keys()) r2(e3);
        for (const e3 of this.lazySelfOpens) r2(e3);
        return e2;
      }
      wakeForWrittenPath({ writtenPath: e2, basePaths: t2 }) {
        const r2 = void 0 !== t2 && t2.length > 0 ? t2 : [void 0];
        let n2 = false;
        for (const t3 of r2) {
          const r3 = tu((0, si.o1)(e2, t3), this.storeMountRoots());
          if (void 0 === r3) continue;
          if (this.dirtyMounts.add(r3.mountKey), this.mountDeferredStoreForWrite(r3.mountKey), n2) continue;
          const s2 = this.sessions?.get(r3.mountKey);
          void 0 !== s2 && "running" === s2.getEngineState() && (s2.wake(), n2 = true);
        }
      }
      setConversationActivity(e2, t2) {
        if (this.disposed) return;
        if ("idle" === t2 && 0 === this.syncConfig.idleQuiesceMs) return;
        const r2 = this.mountMetadata.get(e2);
        void 0 !== r2 && "self" === r2.mountKind && this.sessions?.get(e2)?.setConversationActivity(t2);
      }
      quiesceIdleSelfSessions() {
        if (!this.disposed && 0 !== this.syncConfig.idleQuiesceMs) {
          this.holdNewSelfSessionsIdle = true;
          for (const [e2, t2] of this.mountMetadata) "self" === t2.mountKind && this.sessions?.get(e2)?.setConversationActivity("idle");
        }
      }
      releaseNewSelfSessionHold() {
        this.holdNewSelfSessionsIdle = false;
      }
      setIdleQuiesceEnabledListener(e2) {
        this.idleQuiesceEnabledListener = e2;
      }
      idleQuiesceMs() {
        return this.syncConfig.idleQuiesceMs;
      }
      wakeAllRunningSessions() {
        const e2 = this.sessions;
        if (void 0 !== e2) for (const [t2, r2] of this.mountMetadata) {
          "peer" !== r2.mountKind && this.dirtyMounts.add(t2);
          const n2 = e2.get(t2);
          void 0 !== n2 && "running" === n2.getEngineState() && n2.wake();
        }
        this.mountDeferredLocalStoresWithFiles();
      }
      noteInheritedConflictNoticeMounts(e2, t2) {
        const r2 = e2.trim();
        if (0 === r2.length) return;
        const n2 = /* @__PURE__ */ new Set();
        for (const e3 of t2) {
          const t3 = e3.trim();
          t3.length > 0 && t3 !== r2 && n2.add(t3);
        }
        0 !== n2.size ? this.inheritedConflictNoticeMounts.set(r2, n2) : this.inheritedConflictNoticeMounts.delete(r2);
      }
      clearInheritedConflictNoticeMounts(e2) {
        const t2 = e2.trim();
        0 !== t2.length && this.inheritedConflictNoticeMounts.delete(t2);
      }
      listConflictNoticeMounts(e2) {
        const t2 = [], r2 = void 0 !== e2 ? this.inheritedConflictNoticeMounts.get(e2) : void 0, n2 = /* @__PURE__ */ new Set(), s2 = (e3, r3) => {
          if (!n2.has(e3)) try {
            const s3 = this.pathParts(e3);
            t2.push({ mountKey: e3, journalPath: (0, Wt.VN)(s3), ...r3 ? {} : { deliverEvents: false } }), n2.add(e3);
          } catch {
          }
        };
        for (const [t3, n3] of this.mountMetadata) {
          const o2 = void 0 === e2 || t3 === e2, i2 = gs(n3), a2 = r2?.has(t3) ?? false;
          (o2 || i2 || a2) && s2(t3, o2 || i2);
        }
        if (void 0 !== e2 && s2(e2, true), void 0 !== r2) for (const e3 of r2) s2(e3, false);
        return t2;
      }
      resolveConflictNoticeMountKeyForPath({ absPath: e2, basePaths: t2 }) {
        const r2 = void 0 !== t2 && t2.length > 0 ? t2 : [void 0];
        for (const t3 of r2) {
          const r3 = (0, si.o1)(e2, t3), n2 = tu(r3, this.storeMountRoots())?.mountKey;
          if (void 0 !== n2) return n2;
        }
      }
      resolveConflictNoticeWrittenPath({ absPath: e2, basePaths: t2 }) {
        const r2 = void 0 !== t2 && t2.length > 0 ? t2 : [void 0];
        for (const t3 of r2) {
          const r3 = (0, si.o1)(e2, t3);
          if (void 0 !== tu(r3, this.storeMountRoots())) return r3;
        }
      }
      isConflictNoticeMountDirty(e2) {
        return !this.isMountSyncDenied(e2) && this.dirtyMounts.has(e2);
      }
      isMountSyncDenied(e2) {
        return 1 === this.syncConfig.skipDeniedMountSync && void 0 !== this.mountSyncDeniedUntilMs(e2);
      }
      conflictNoticeSkipIsDenied(e2, t2) {
        return this.isMountSyncDenied(e2) || true === t2.isSyncRoundDenied?.();
      }
      mountSyncDeniedUntilMs(e2) {
        return this.mintClients.get(e2)?.mintDeniedUntilMs();
      }
      async forceSyncForConflictNotices(e2) {
        return this.isMountSyncDenied(e2) ? "denied" : await this.fullSyncCoalescer.request(e2);
      }
      async runFullSyncForConflictNotices(e2) {
        if ("lazy" === this.syncConfig.mountPolicy && this.shouldJoinLazySelfOpen(e2)) {
          if ("absent" === await this.prepareExplicitSelfSync(e2, "explicit_sync")) return "absent";
        }
        const t2 = await this.sessionAfterOpen(e2);
        if (this.isMountSyncDenied(e2)) return "denied";
        if (void 0 === t2) return "absent";
        const r2 = await t2.forceSync();
        return void 0 === r2 ? this.conflictNoticeSkipIsDenied(e2, t2) ? "denied" : "passive" : r2.errors.length > 0 ? "error" : "synced";
      }
      async resolveCitedPath(e2) {
        const { mountKey: t2, relPath: r2, indexTierEnabled: n2 } = e2, s2 = this.syncMetrics?.emitter, o2 = performance.now();
        s2?.recordCitationStarted({ agentId: t2 });
        const i2 = await this.ensureMountedPeer({ peerAgentId: t2, isProjectStore: true === e2.isProjectStore, awaitInitialRound: false }).then((e3) => e3.outcome).catch(() => "invalid"), a2 = await li({ citedPath: h.join((0, Wt.f$)(this.pathParts(t2)), r2), relPath: r2, mountReady: "mounted" === i2 || "already-present" === i2, indexTierEnabled: n2, waitBudget: e2.waitBudget ?? oi, lookupIndex: () => this.sessions?.get(t2)?.getIndexEntry(r2) ?? { kind: "unavailable" }, pullPaths: (e3) => this.pullAgentStorePaths({ mountKey: t2, relPaths: e3 }), onStaleness: (e3) => {
          s2?.recordCitationStaleness({ agentId: t2, state: e3 });
        } });
        return s2?.recordCitationResolution({ agentId: t2, durationMs: performance.now() - o2, tier: a2.tier, outcome: a2.outcome, reason: a2.reason }), a2.outcome;
      }
      async refreshPeerPaths(e2) {
        const t2 = await this.ensureMountedPeer({ peerAgentId: e2.peerAgentId, isProjectStore: true === e2.isProjectStore, awaitInitialRound: false }).catch(() => {
        });
        if (void 0 === t2 || "mounted" !== t2.outcome && "already-present" !== t2.outcome) return { kind: "unavailable" };
        const r2 = await this.sessionAfterOpen(e2.peerAgentId);
        return void 0 === r2 ? { kind: "unavailable" } : await r2.refreshPaths(e2.relPaths);
      }
      async pullAgentStorePaths(e2) {
        const t2 = await this.sessionAfterOpen(e2.mountKey);
        return await t2?.pullPaths(e2.relPaths) ?? { kind: "unavailable" };
      }
      async sessionAfterOpen(e2) {
        const t2 = this.sessions;
        if (void 0 === t2) return;
        const r2 = t2.getSlot(e2);
        if ("opening" === r2?.kind) try {
          await r2.promise;
        } catch {
          return;
        }
        return t2.get(e2);
      }
      async forceSyncPathForConflictNotices(e2) {
        const { mountKey: t2, absPath: r2, basePaths: n2, timeoutMs: s2 } = e2;
        if (this.isMountSyncDenied(t2)) return "denied";
        const o2 = this.resolveRelPathWithinMount(t2, r2, n2);
        return void 0 === o2 ? await this.forceSyncForConflictNotices(t2) : await this.scopedSyncCoalescer.request(t2, [o2], { timeoutMs: s2 });
      }
      async forceSyncPathsForConflictNotices(e2) {
        const { mountKey: t2, absPaths: r2, basePaths: n2, timeoutMs: s2 } = e2;
        if (this.isMountSyncDenied(t2)) return "denied";
        const o2 = [];
        for (const e3 of r2) {
          const r3 = this.resolveRelPathWithinMount(t2, e3, n2);
          if (void 0 === r3) return await this.forceSyncForConflictNotices(t2);
          o2.push(r3);
        }
        return 0 === o2.length ? await this.forceSyncForConflictNotices(t2) : await this.scopedSyncCoalescer.request(t2, o2, { timeoutMs: s2 });
      }
      shouldJoinLazySelfOpen(e2) {
        const t2 = this.mountMetadata.get(e2);
        return void 0 !== t2 ? (this.lazySelfOpens.delete(e2), "self" === t2.mountKind) : this.deferredLocalStores.has(e2) || this.lazySelfOpens.has(e2) || this.admittedResumeStores.has(e2);
      }
      async runScopedSyncForConflictNotices(e2, t2, r2) {
        if ("lazy" === this.syncConfig.mountPolicy && this.shouldJoinLazySelfOpen(e2)) {
          if ("absent" === await this.prepareExplicitSelfSync(e2, "explicit_sync", { openEmpty: true })) return { kind: "absent" };
        }
        const n2 = await this.sessionAfterOpen(e2);
        if (this.isMountSyncDenied(e2)) return { kind: "denied" };
        if (void 0 === n2) return { kind: "absent" };
        const s2 = await n2.syncPaths(t2, { passiveWaitTimeoutMs: r2 ?? this.syncConfig.writeBarrierTimeoutMs });
        return void 0 === s2 ? this.conflictNoticeSkipIsDenied(e2, n2) ? { kind: "denied" } : { kind: "passive" } : { kind: "summary", summary: s2 };
      }
      resolveRelPathWithinMount(e2, t2, r2) {
        const n2 = void 0 !== r2 && r2.length > 0 ? r2 : [void 0], s2 = this.storeMountRoots();
        for (const r3 of n2) {
          const n3 = (0, si.o1)(t2, r3), o2 = tu(n3, s2);
          if (void 0 === o2 || o2.mountKey !== e2) continue;
          const i2 = h.relative(o2.filesDir, n3);
          if (0 === i2.length || i2.startsWith("..") || h.isAbsolute(i2)) return;
          try {
            return v(i2);
          } catch {
            return;
          }
        }
      }
      writeBarrierTimeoutMs() {
        return this.syncConfig.writeBarrierTimeoutMs;
      }
      mountPolicy() {
        return this.syncConfig.mountPolicy;
      }
      recordMountRequested(e2, t2) {
        "write_detected" === t2 && this.dirtyMounts.add(e2), "resume" === t2 && this.admittedResumeStores.add(e2);
        try {
          this.syncMetrics?.emitter.recordMountRequested?.({ agentId: e2, reason: t2, policy: this.syncConfig.mountPolicy });
        } catch {
        }
      }
      hasSelfMount(e2) {
        const t2 = this.mountMetadata.get(e2)?.mountKind;
        if (void 0 !== t2) return "self" === t2;
        const r2 = this.sessions?.get(e2);
        return void 0 !== r2 && !r2.isClosed();
      }
      hasAdmittedResume(e2) {
        return this.admittedResumeStores.has(e2);
      }
      hasNonSelfMount(e2) {
        const t2 = this.mountMetadata.get(e2)?.mountKind;
        return void 0 !== t2 && "self" !== t2;
      }
      localStoreIndexIsPopulated(e2) {
        try {
          return p.statSync((0, Wt.mD)(this.pathParts(e2))).size > 0;
        } catch {
          return false;
        }
      }
      noteDeferredLocalStore(e2, t2) {
        this.hasSelfMount(e2) || this.hasNonSelfMount(e2) || this.deferredLocalStores.has(e2) || this.deferredLocalStores.set(e2, t2);
      }
      forgetDeferredLocalStore(e2) {
        this.deferredLocalStores.delete(e2);
      }
      async prepareExplicitSelfSync(e2, t2, r2) {
        if ("lazy" !== this.syncConfig.mountPolicy) return "proceed";
        if (this.hasNonSelfMount(e2)) return "absent";
        if (!this.hasSelfMount(e2)) {
          if (true !== r2?.openEmpty && !this.localFilesDirHasEntries(e2) && !this.lazyEmptyDirShouldOpen(e2)) return "absent";
          this.recordMountRequested(e2, t2);
        }
        const n2 = await this.ensureMountedSelfAwaited(e2);
        return "mounted" === n2.outcome || "already-present" === n2.outcome ? (this.forgetDeferredLocalStore(e2), this.lazySelfOpens.delete(e2), "proceed") : "absent";
      }
      localFilesDirHasEntries(e2) {
        try {
          return p.readdirSync((0, Wt.f$)(this.pathParts(e2))).length > 0;
        } catch {
          return false;
        }
      }
      lazyEmptyDirShouldOpen(e2) {
        return !(!this.admittedResumeStores.has(e2) && !this.lazySelfOpens.has(e2)) || "mount" === Qn({ agentId: e2, policy: "lazy", reason: "explicit_sync", indexPopulated: this.localStoreIndexIsPopulated(e2) }).action;
      }
      requestDeferredSelfMount(e2, t2) {
        return this.beginLazySelfOpen(e2, t2);
      }
      openAdmittedLazySelf(e2, t2) {
        return this.hasNonSelfMount(e2) ? Promise.resolve() : this.hasSelfMount(e2) ? (this.deferredLocalStores.delete(e2), this.lazySelfOpens.delete(e2), Promise.resolve()) : this.startLazySelfOpen(e2, t2);
      }
      beginLazySelfOpen(e2, t2) {
        if (this.hasNonSelfMount(e2)) return Promise.resolve();
        if (this.hasSelfMount(e2)) return this.deferredLocalStores.delete(e2), this.lazySelfOpens.delete(e2), Promise.resolve();
        const r2 = this.lazySelfOpenSettled.get(e2);
        return void 0 !== r2 ? r2 : this.deferredLocalStores.has(e2) ? this.startLazySelfOpen(e2, t2) : Promise.resolve();
      }
      startLazySelfOpen(e2, t2) {
        const r2 = this.lazySelfOpenSettled.get(e2);
        if (void 0 !== r2) return r2;
        this.lazySelfOpens.add(e2), this.recordMountRequested(e2, t2);
        const n2 = this.ensureMountedSelf(e2).then((r3) => {
          this.lazySelfOpens.delete(e2), this.hasSelfMount(e2) || "mounted" === r3.outcome || "already-present" === r3.outcome ? this.deferredLocalStores.delete(e2) : this.deferredLocalStores.has(e2) || this.deferredLocalStores.set(e2, t2);
        }).finally(() => {
          this.lazySelfOpenSettled.delete(e2);
        });
        return this.lazySelfOpenSettled.set(e2, n2), n2;
      }
      mountDeferredStoreForWrite(e2) {
        this.beginLazySelfOpen(e2, "write_detected");
      }
      mountDeferredLocalStoresWithFiles() {
        if ("lazy" === this.syncConfig.mountPolicy) for (const [e2, t2] of [...this.deferredLocalStores.entries()]) {
          const r2 = this.localFilesDirHasEntries(e2);
          (r2 || this.lazyEmptyDirShouldOpen(e2)) && this.beginLazySelfOpen(e2, r2 ? "write_detected" : t2);
        }
      }
      mountDeferredLocalStoresNow() {
        const e2 = [...this.deferredLocalStores.entries()];
        for (const [t2, r2] of e2) this.hasSelfMount(t2) || this.hasNonSelfMount(t2) ? this.deferredLocalStores.delete(t2) : this.startLazySelfOpen(t2, r2);
      }
      recordWriteBarrier(e2) {
        try {
          this.syncMetrics?.emitter.recordWriteBarrier?.({ agentId: this.windowId, durationMs: e2.durationMs, outcome: e2.outcome });
        } catch {
        }
      }
      async dispose() {
        if (!this.disposed) {
          var e2;
          this.disposed = true, this.deferredLocalStores.clear(), this.lazySelfOpens.clear(), this.lazySelfOpenSettled.clear(), this.admittedResumeStores.clear(), this.resolvedStoreIds.clear(), this.resolvedStoreIdWriters.clear(), this.resolvedStoreIdListeners.clear(), e2 = this, pi().delete(e2);
          for (const e3 of this.disposables.splice(0)) try {
            e3.dispose();
          } catch {
          }
          for (const e3 of [...this.mountMetadata.keys()]) this.logShutdownFlushSkipIfNeeded(e3);
          try {
            await this.sessions?.closeAll({ flush: true });
          } catch (e3) {
            this.log.appendLine(`[agent-store-sync] dispose failed: ${this.ports.sanitizeLogMessage(e3)}`);
          } finally {
            this.mountMetadata.clear(), this.lastDiskFullToastMs.clear(), this.dirtyMounts.clear(), this.dirtyPassiveStalledSince.clear(), this.dirtyPassiveStalledReported.clear(), this.inheritedConflictNoticeMounts.clear(), this.periodicScheduler.dispose();
          }
        }
      }
      logShutdownFlushSkipIfNeeded(e2) {
        const t2 = this.guardedPathsForMount(e2);
        if (void 0 !== t2) try {
          for (const e3 of t2) (0, Wt.rs)(e3);
        } catch (t3) {
          this.log.appendLine(`[agent-store-sync] skipping final flush for ${e2}: ${this.ports.sanitizeLogMessage(t3)}`);
        }
      }
      pathParts(e2) {
        return (0, Wt.WX)(this.harness, e2);
      }
      guardedPathsForMount(e2) {
        try {
          const t2 = this.pathParts(e2), r2 = (0, Wt.DE)(t2), n2 = (0, Wt.mD)(t2), s2 = (0, Wt.N1)(t2), o2 = (0, Wt.BE)(t2), i2 = (0, Wt.VN)(t2);
          return [r2, n2, s2, o2, i2, (0, Wt.AC)(t2)];
        } catch {
          return;
        }
      }
      async openSession(e2, t2 = {}) {
        const r2 = await this.loadModule();
        if (void 0 === r2) throw new Error("agent-store-sync module load failed");
        const n2 = this.pathParts(e2), s2 = (0, Wt.f$)(n2), o2 = (0, Wt.DE)(n2), i2 = (0, Wt.mD)(n2), a2 = [o2, i2, (0, Wt.N1)(n2), (0, Wt.BE)(n2), (0, Wt.VN)(n2), (0, Wt.AC)(n2)], c2 = () => {
          for (const e3 of a2) (0, Wt.rs)(e3);
        };
        c2();
        const l2 = await this.loadSqlite();
        c2();
        const u2 = this.mountMetadata.get(e2);
        if (void 0 === u2) throw new Error(`missing mount metadata for ${e2}`);
        const d2 = await this.ports.getAgentStoreRpcService?.() ?? ot, p2 = new r2.BcsAgentStoreTransport({ transport: this.ports.getConnectTransport(), rpcTimeoutMs: this.syncConfig.rpcTimeoutMs, service: d2, largeTargetTtlMs: this.syncConfig.largeTargetTtlMs }), m2 = this.syncMetrics, h2 = m2?.emitter;
        h2?.bindRpcService(d2);
        const f2 = Symbol(e2);
        this.resolvedStoreIdWriters.set(e2, f2);
        const g2 = () => this.syncConfig.mintRetryPolicyVersion, y2 = new r2.TokenCachingAgentStoreClient(p2, { metrics: h2, refreshBufferMs: this.syncConfig.tokenRefreshBufferMs, tokenRefreshJitterRatio: this.syncConfig.tokenRefreshJitterRatio, minTokenSlackMs: this.syncConfig.minTokenSlackMs, mintTerminalDenialCacheMs: () => this.syncConfig.mintTerminalDenialCacheMs, mintTransientNegativeCacheBaseMs: () => this.syncConfig.mintTransientNegativeCacheBaseMs, mintTransientNegativeCacheMaxMs: () => this.syncConfig.mintTransientNegativeCacheMaxMs, mintRetryBudget: this.mintRetryBudget, mintGate: this.mintGate, mintRetryPolicyVersion: g2, mintRetryMaxAttempts: this.syncConfig.mintRetryMaxAttempts, mintRetryBaseDelayMs: this.syncConfig.mintRetryBaseDelayMs, mintRetryMaxDelayMs: this.syncConfig.mintRetryMaxDelayMs, onResolvedStoreIdChanged: ({ storeId: t3 }) => {
          this.updateResolvedStoreId(e2, t3, f2);
        }, onSyncDisabledMint: (e3) => {
          this.onSyncDisabled?.(e3.message, { retryAfterMs: e3.retryAfterMs });
        } });
        this.mintClients.set(e2, y2);
        const w2 = new r2.RetryingAgentStoreClient(y2, { listener: h2, maxAttempts: this.syncConfig.rpcRetryMaxAttempts, baseDelayMs: this.syncConfig.rpcRetryBaseDelayMs, maxDelayMs: this.syncConfig.rpcRetryMaxDelayMs, multiplier: this.syncConfig.rpcRetryMultiplier, mintRetryPolicyVersion: g2 }), v2 = "self" === u2.mountKind ? w2 : new r2.MountScopedAgentStoreClient({ inner: w2, target: u2.remoteTarget }), _2 = this.getSharedQueues(r2), b2 = this.ports.getCursorCreds()?.backendUrl ?? "", S2 = r2.isLocalAgentStoreBackendUrl(b2);
        let k2;
        try {
          return k2 = await Lc({ store: this.harness, mountKey: e2, windowId: this.windowId, purpose: "foreground", metrics: h2 }), k2.acquired || this.log.appendLine(`[agent-store-sync] ${e2} store pin not acquired` + (void 0 !== k2.error ? `: ${this.ports.sanitizeLogMessage(k2.error)}` : "")), await r2.AgentStoreSyncSession.open({ key: e2, ...t2, rootPin: k2, client: v2, openIndex: (e3) => r2.openAgentStoreLocalIndex(e3, { sqlite: l2, statSchemaEnabled: hn(this.syncConfig.localStatFastPath, process.platform) }), queues: _2, validatePresignedUrl: r2.createAgentStorePresignedUrlValidatorForBackend(b2), blobTransfer: new r2.HttpAgentStoreBlobTransfer({ allowInsecureScheme: S2, maxFileSizeBytes: this.syncConfig.maxFileSizeBytes, blobIdleTimeoutMs: this.syncConfig.blobIdleTimeoutMs, blobConnectTimeoutMs: this.syncConfig.blobConnectTimeoutMs, onTransferTiming: (e3) => {
            h2?.onBlobTransferTiming?.(e3);
          } }), syncMode: u2.syncMode, lockProvider: this.lockProviderFor(r2, e2), lockOwnerId: this.windowId, paths: { filesDir: s2, tmpDir: o2, indexPath: i2 }, guardedPaths: a2, validatePaths: c2, metricsEmitter: h2, pathHashSalt: m2?.pathHashSalt, ...r2.agentStoreSyncSessionOptionsFromClientConfig(this.syncConfig, t2.isProjectStore), periodicScheduler: this.periodicScheduler, versionProbe: this.versionProbe, mintGate: this.mintGate, mintDeniedUntilMs: () => y2.mintDeniedUntilMs(), skipDeniedMountSync: () => 1 === this.syncConfig.skipDeniedMountSync, onPassiveIndexUpdated: (e3) => {
            this.recordHolderIndexProgress(e3.agentId);
          }, onResumeDetected: (e3) => {
            this.clearDirtyPassiveStallTracking(e3.agentId);
          }, onStateChanged: (e3) => {
            this.log.appendLine(`[agent-store-sync] ${e3.agentId} ${e3.fromState} → ${e3.toState} (${e3.reason})`), "lock_lost" === e3.reason && this.log.appendLine(`[agent-store-sync] ${e3.agentId} relinquished write lock (lock_lost); going passive`), Ku(e3) && h2?.onLockEvent?.({ agentId: e3.agentId, kind: "passive_took_over" });
          }, onSyncSummary: (t3) => {
            this.handleSyncSummary({ mountKey: e2, summary: t3, sync: r2 });
          }, onSyncError: (t3) => {
            if ((function(e3) {
              return "object" == typeof e3 && null !== e3 && "code" in e3 && "string" == typeof e3.code;
            })(t3)) return this.log.appendLine(`[agent-store-sync] ${e2} ${t3.code}` + (void 0 === t3.relPath ? "" : ` relPathHash=${r2.hashRelPath({ relPath: t3.relPath, salt: this.windowId })}`) + `: ${this.ports.sanitizeLogMessage(t3.message)}`), void ("fs_write_failed" === t3.code && this.maybeShowDiskFullToast(e2));
            this.log.appendLine(`[agent-store-sync] ${e2} sync failed: ${this.ports.sanitizeLogMessage(t3)}`), r2.isAgentStoreSyncDisabledError(t3) && this.onSyncDisabled?.(t3 instanceof Error ? t3.message : String(t3), { retryAfterMs: je(t3) });
          }, onInvalidated: (t3) => {
            this.handleSessionInvalidated({ mountKey: e2, reason: t3, writer: f2 });
          }, onWarn: (t3, r3) => {
            this.log.appendLine(`[agent-store-sync] ${e2} ${t3}` + (void 0 !== r3 ? `: ${this.ports.sanitizeLogMessage(r3)}` : ""));
          } });
        } catch (t3) {
          throw await k2?.release(), this.revokeResolvedStoreIdWriter(e2, f2), t3;
        }
      }
      handleSyncSummary(e2) {
        const { mountKey: t2, summary: r2, sync: n2 } = e2;
        if (0 === r2.errors.length && (this.dirtyMounts.delete(t2), this.clearDirtyPassiveStallTracking(t2)), r2.filesConflicted > 0) {
          const e3 = r2.conflicts[0];
          this.log.appendLine(`[agent-store-sync] ${t2} conflicts=${r2.filesConflicted}` + (void 0 !== e3 ? ` first=${n2.hashRelPath({ relPath: e3.relPath, salt: this.windowId })}→${n2.hashRelPath({ relPath: e3.conflictRelPath, salt: this.windowId })}` : ""));
        }
        const s2 = { onConflict: (e3) => {
          this.log.appendLine(`[agent-store-sync] ${e3.agentId} conflict_file storeKind=${e3.storeKind}` + (void 0 !== e3.relPathHash ? ` relPathHash=${e3.relPathHash}` : ""));
        } };
        try {
          n2.notifySummaryMetrics({ agentId: t2, summary: r2, metricsEmitter: s2, pathHashSalt: this.windowId });
        } catch (e3) {
          this.log.appendLine(`[agent-store-sync] ${t2} summary metrics failed: ${this.ports.sanitizeLogMessage(e3)}`);
        }
        this.refreshSessionRemoteTiming(t2);
      }
      async loadSyncClientConfig() {
        let e2;
        try {
          e2 = await this.ports.getDynamicConfigValue(Yn.$8);
        } catch (e3) {
          this.log.appendLine(`[agent-store-sync] sync client config unavailable: ${this.ports.sanitizeLogMessage(e3)}`);
        }
        return Au(e2, "ide", { onWarn: (e3) => {
          this.log.appendLine(`[agent-store-sync] ${e3}`);
        } });
      }
      promoteMountedProjectStore(e2, t2) {
        true === t2 && (this.markMountMetadataProjectStore(e2.key), e2.promoteToProjectStore() && (this.log.appendLine(`[agent-store-sync] ${e2.key} promoted to project sync timing`), this.applySessionRemoteTiming(e2, this.latestSyncConfig)));
      }
      markMountMetadataProjectStore(e2) {
        const t2 = this.mountMetadata.get(e2);
        void 0 !== t2 && "peer" === t2.mountKind && true !== t2.isProjectStore && this.mountMetadata.set(e2, { ...t2, isProjectStore: true });
      }
      applySessionRemoteTiming(e2, t2) {
        e2.setRemoteTiming({ ...Ou(t2, e2.isProjectStore), idleBackoffFactor: t2.idleBackoffFactor, syncIdleMaxMs: Mu(t2, e2.isProjectStore), pathSyncRequestPollMs: t2.pathSyncRequestPollMs, localStatFastPath: t2.localStatFastPath, localStatFastPathAuditRate: t2.localStatFastPathAuditRate, localStatRacyMarginMs: t2.localStatRacyMarginMs, pathSyncRequestWaitPollMs: t2.pathSyncRequestWaitPollMs, exclusiveMutationClaimPollMs: t2.exclusiveMutationClaimPollMs, syncRoundTimeoutMs: t2.syncRoundTimeoutMs, syncRoundProgressTimeoutMs: t2.syncRoundProgressTimeoutMs, syncRoundHardCapMs: t2.syncRoundHardCapMs, resumeGapThresholdMs: t2.resumeGapThresholdMs, resumeDetectionMode: t2.resumeDetectionMode, passiveIndexPollIntervalMs: t2.passiveIndexPollIntervalMs, passiveRetryIntervalMs: t2.passiveRetryIntervalMs, pathRefreshMinIntervalMs: t2.pathRefreshMinIntervalMs, ...Du(t2), ...qu(t2) });
      }
      async refreshSessionRemoteTiming(e2) {
        if (this.disposed) return;
        const t2 = this.sessions?.get(e2);
        if (void 0 === t2 || t2.isClosed() || t2.isClosing()) return;
        const r2 = ++this.controllerSyncConfigLoadSeq, n2 = await this.loadSyncClientConfig();
        this.disposed || (this.applyNewestControllerSyncConfig(n2, r2), this.disposed || this.sessions?.get(e2) !== t2 || t2.isClosed() || t2.isClosing() || this.applySessionRemoteTiming(t2, this.latestSyncConfig));
      }
      applyNewestControllerSyncConfig(e2, t2) {
        t2 <= this.controllerSyncConfigAppliedSeq || (this.controllerSyncConfigAppliedSeq = t2, this.latestSyncConfig = e2, this.applyControllerSyncConfig(e2));
      }
      async handleSessionInvalidated({ mountKey: e2, reason: t2, writer: r2 }) {
        if (this.resolvedStoreIdWriters.get(e2) !== r2) return;
        const n2 = this.mountMetadata.get(e2);
        this.log.appendLine(`[agent-store-sync] unmounting ${e2}: ${t2}`), this.revokeResolvedStoreIdWriter(e2, r2);
        try {
          await this.sessions?.close(e2, { flush: false });
        } catch (t3) {
          this.log.appendLine(`[agent-store-sync] invalidated session close ${e2} failed: ${this.ports.sanitizeLogMessage(t3)}`);
        }
        this.mountMetadata.delete(e2), this.lastDiskFullToastMs.delete(e2), this.dirtyMounts.delete(e2), this.clearDirtyPassiveStallTracking(e2);
        const s2 = await this.loadModule();
        if (void 0 === s2) return;
        const o2 = this.mountBackoff.get(e2)?.scheduler ?? Hu(s2), i2 = o2.recordFailure();
        this.mountBackoff.set(e2, { scheduler: o2, readyAtMs: Date.now() + i2 });
        try {
          this.onMountInvalidated?.({ mountKey: e2, mountKind: n2?.mountKind ?? "peer" });
        } catch (e3) {
          this.log.appendLine(`[agent-store-sync] mount invalidation callback failed: ${this.ports.sanitizeLogMessage(e3)}`);
        }
      }
      writeMountConfig(e2, t2) {
        const r2 = t2.mountKey, n2 = (0, Wt.BE)(this.pathParts(r2));
        try {
          (0, Wt.rs)(n2), p.writeFileSync(n2, e2.encodeAgentStoreMountConfig(t2), { mode: 384 });
        } catch (e3) {
          this.log.appendLine(`[agent-store-sync] failed to write mount config for ${r2}: ${this.ports.sanitizeLogMessage(e3)}`);
        }
      }
      async loadModule() {
        return void 0 === this.modulePromise && (this.modulePromise = (async () => {
          try {
            return await this.ports.loadSyncModule();
          } catch (e2) {
            return void this.log.appendLine(`[agent-store-sync] failed to load @anysphere/agent-store-sync: ${String(e2)}`);
          }
        })()), await this.modulePromise;
      }
      async loadSqlite() {
        return void 0 === this.sqliteCtor && (this.sqliteCtor = await this.ports.loadSqlite()), this.sqliteCtor;
      }
      getSessions(e2) {
        return void 0 === this.sessions && (this.sessions = new e2.AgentStoreSyncSessionController()), this.sessions;
      }
      updateResolvedStoreId(e2, t2, r2) {
        if (this.disposed || void 0 !== r2 && this.resolvedStoreIdWriters.get(e2) !== r2 || this.resolvedStoreIds.get(e2) === t2) return;
        void 0 === t2 ? this.resolvedStoreIds.delete(e2) : this.resolvedStoreIds.set(e2, t2);
        const n2 = { mountKey: e2, storeId: t2 };
        for (const e3 of [...this.resolvedStoreIdListeners]) try {
          e3(n2);
        } catch {
        }
      }
      revokeResolvedStoreIdWriter(e2, t2) {
        void 0 !== t2 && this.resolvedStoreIdWriters.get(e2) !== t2 || (this.resolvedStoreIdWriters.delete(e2), this.mintClients.delete(e2), this.updateResolvedStoreId(e2, void 0));
      }
      lockProviderFor(e2, t2) {
        const r2 = this.pathParts(t2), n2 = (0, Wt.N1)(r2), s2 = (0, Wt.f$)(r2), o2 = this.windowId;
        let i2;
        return { async acquire() {
          i2 = void 0;
          try {
            (0, Wt.rs)(n2);
          } catch {
            return;
          }
          const t3 = await e2.readAgentStoreExclusiveMutationClaimOwner({ filesDir: s2 });
          if (void 0 !== t3 && t3.windowId !== o2) return;
          const r3 = await e2.tryAcquireStoreLock({ lockPath: n2, windowId: o2, ownerKind: "ide" });
          if ("acquired" === r3.kind) return { release: async () => {
            try {
              await r3.lock.dispose();
            } catch {
            }
          }, verifyStillOwned: () => r3.lock.verifyStillOwned(), markUnhealthy: () => r3.lock.markUnhealthy() };
          i2 = r3.owner;
        }, peekHeldOwner: () => i2 };
      }
      maybeShowDiskFullToast(e2) {
        const t2 = Date.now();
        t2 - (this.lastDiskFullToastMs.get(e2) ?? 0) < 3e5 || (this.lastDiskFullToastMs.set(e2, t2), this.ports.showWarningMessage(`Cursor agent store can't write to ${this.harness.base}. Some agent files won't sync until space is freed.`));
      }
      onOnlineEvent() {
        const e2 = this.sessions;
        if (void 0 === e2) return;
        const t2 = [];
        for (const [r2] of this.mountMetadata) {
          const n2 = e2.get(r2);
          void 0 !== n2 && "running" === n2.getEngineState() && t2.push(n2);
        }
        if (0 !== t2.length) {
          this.log.appendLine(`[agent-store-sync] online → waking ${t2.length} engine(s)`);
          for (const e3 of t2) e3.wake();
        }
      }
    }
    const Yu = 864e5;
    function Qu(e2) {
      return new s({ baseDelayMs: e2.baseDelayMs, maxDelayMs: e2.maxDelayMs, jitter: 0.2 });
    }
    function Xu(e2, t2) {
      if (void 0 === e2) return;
      let r2;
      try {
        r2 = e2(t2);
      } catch {
        return;
      }
      null != r2 && "function" == typeof r2.then && r2.then(Zu, Zu);
    }
    function Zu() {
    }
    const ed = 3e4;
    async function td(e2, t2) {
      let r2;
      const n2 = new Promise((e3) => {
        r2 = setTimeout(() => e3({ kind: "deadline" }), t2), r2.unref?.();
      });
      try {
        return await Promise.race([e2, n2]);
      } finally {
        void 0 !== r2 && clearTimeout(r2);
      }
    }
    function rd(e2) {
      if ("rejected" === e2.kind) throw e2.error;
      return e2.summary;
    }
    function nd(e2, t2) {
      if ("rejected" === t2.kind) throw t2.error;
      const r2 = e2.reason;
      if (r2 instanceof Error) throw r2;
      throw new ga({ code: "round_aborted", message: "sync round aborted before completion", ...void 0 !== r2 ? { cause: r2 } : {} });
    }
    async function sd(e2, t2) {
      if (t2 <= 0) return await e2, "settled";
      let r2;
      const n2 = new Promise((e3) => {
        r2 = setTimeout(() => e3("timeout"), t2), r2.unref?.();
      }), s2 = e2.then(() => "settled");
      try {
        return await Promise.race([s2, n2]);
      } finally {
        void 0 !== r2 && clearTimeout(r2);
      }
    }
    function od(e2) {
      return !ld(e2) && (e2 instanceof ga ? "round_aborted" === e2.code || void 0 !== e2.timeoutClass : pd(e2));
    }
    function id(e2) {
      return "session closing" === e2 || "host resumed from suspend" === e2;
    }
    function ad(e2) {
      return id(e2) || e2.includes("still draining after watchdog abandon");
    }
    function cd(e2, t2) {
      let r2 = e2;
      const n2 = /* @__PURE__ */ new Set();
      for (; "object" == typeof r2 && null !== r2 && !n2.has(r2); ) {
        if (n2.add(r2), r2 instanceof ga && "round_aborted" === r2.code && t2(r2.message)) return true;
        r2 = "cause" in r2 ? r2.cause : void 0;
      }
      return false;
    }
    function ld(e2) {
      return cd(e2, ad);
    }
    const ud = /^[A-Za-z_$][\w$]{0,63}$/, dd = [..."function" == typeof DOMException ? [[DOMException, "DOMException"]] : [], [AggregateError, "AggregateError"], [EvalError, "EvalError"], [RangeError, "RangeError"], [ReferenceError, "ReferenceError"], [SyntaxError, "SyntaxError"], [TypeError, "TypeError"], [URIError, "URIError"]];
    function pd(e2) {
      let t2 = e2;
      const r2 = /* @__PURE__ */ new Set();
      for (; "object" == typeof t2 && null !== t2 && !r2.has(t2); ) {
        if (r2.add(t2), "code" in t2) {
          const e3 = t2.code;
          if (e3 === se.C.DeadlineExceeded || "DeadlineExceeded" === e3 || "deadline_exceeded" === e3) return true;
        }
        t2 = "cause" in t2 ? t2.cause : void 0;
      }
      return false;
    }
    function md(e2) {
      if (void 0 === e2 || "" === e2) return;
      const t2 = Number(e2);
      return Number.isSafeInteger(t2) && t2 > 0 ? t2 : void 0;
    }
    class hd {
      static async open(e2) {
        const t2 = new hd(e2);
        e2.onConstructed?.(t2);
        try {
          await t2.initialize(), await t2.awaitOpenSettlement(false !== e2.awaitInitialRound);
        } catch (e3) {
          throw await t2.awaitTeardown(), await t2.releaseRootPin(), e3;
        }
        if (t2.isClosing()) throw await t2.awaitTeardown(), await t2.releaseRootPin(), new Error(`AgentStoreSyncSession for ${e2.key} was invalidated during open`);
        return t2;
      }
      constructor(e2) {
        this.lastResumeWallMs = 0, this.lastResumeMonoMs = 0, this.roundBodyStartWaiters = /* @__PURE__ */ new Map(), this.consecutiveNoopRounds = 0, this.idleStreakEpoch = 0, this.suppressNextIdleNote = false, this.conversationActivity = "active", this.periodicSyncHeld = false, this.versionProbeInFlight = false, this.periodicSyncHandle = {}, this.periodicSyncArmed = false, this.currentRoundSchedule = "periodic", this.closeReleasedLock = false, this.lockReleasedWaiters = [], this.exclusiveMutationClaimHandle = {}, this.exclusiveMutationClaimArmed = false, this.pathSyncRequestFailureDelayMs = 0, this.pathSyncRequestRetryNotBeforeMs = 0, this.followUpNeeded = false, this.roundGeneration = 0, this.mirrorSyncState = "opening", this.initialRoundWaitersReleased = new Promise((e3) => {
          this.releaseInitialRoundWaiters = e3;
        }), this.lifecycle = "open", this.rootRetiredInvalidationStarted = false, this.indexClosedInvalidationStarted = false, this.roundWatchdogTripped = false, this.roundUnwound = true, this.consecutiveTimeoutFailures = 0, this.indexLookupClosedEmitted = false, this.consecutiveRoundFailures = 0, this.failureStreakPassiveUntilMs = 0, this.passiveCatchUpSuppressions = 0, this.resumeBackoffResetPending = false, this.activeRoundResumeRecoveryPending = false, this.resumeRecoveryInProgress = false, this.abandonRequested = false, this.onExclusiveMutationClaimDue = () => {
          const e3 = this.exclusiveMutationClaimDueAtMs;
          this.exclusiveMutationClaimArmed = false, this.exclusiveMutationClaimDueAtMs = void 0, void 0 === this.lockOwnerId || this.isClosing() || "running" !== this.engine?.getState() || (this.armExclusiveMutationClaim(e3), this.checkExclusiveMutationClaim());
        }, this.onPeriodicSyncDue = () => {
          this.periodicSyncArmed = false, this.periodicDueAtMs = void 0;
          const e3 = "idle" === this.pendingScheduleKind ? "idle" : "periodic";
          "periodic" !== this.pendingScheduleKind && "idle" !== this.pendingScheduleKind || (this.pendingScheduleKind = void 0);
          const t3 = this.startVersionProbe();
          void 0 !== t3 ? (this.versionProbeInFlight = true, this.runSyncAfterVersionProbe(t3, e3).finally(() => {
            this.versionProbeInFlight = false;
          })) : this.runSync({ schedule: e3 });
        }, this.key = e2.key, this.projectStore = e2.isProjectStore ?? false, this.filesDir = e2.paths.filesDir, this.client = e2.client, this.openIndex = e2.openIndex, this.lockProvider = e2.lockProvider, this.lockOwnerId = e2.lockOwnerId, this.queues = e2.queues, this.syncMode = e2.syncMode ?? "readWrite", this.validatePresignedUrl = e2.validatePresignedUrl, this.blobTransfer = e2.blobTransfer, this.fetchImpl = e2.fetch, this.paths = e2.paths, this.engineIndexPath = e2.indexPath ?? e2.paths.indexPath, this.rootIdPath = h.join(h.dirname(e2.paths.indexPath), Uo), this.storeRootIdFence = e2.storeRootIdFence ?? false;
        const t2 = e2.guardedPaths ?? [e2.paths.tmpDir, e2.paths.indexPath, (0, $t.KD)(e2.paths.filesDir), (0, $t.Zz)(e2.paths.filesDir)];
        this.guardedPaths = t2.includes(this.rootIdPath) ? t2 : [...t2, this.rootIdPath];
        const r2 = e2.validatePaths;
        this.validatePathsHook = () => {
          if (void 0 !== r2) r2();
          else for (const e3 of this.guardedPaths) e3 !== this.rootIdPath && (0, Wt.rs)(e3);
          (0, Wt.rs)(this.rootIdPath);
        }, this.onStateChangedCallback = e2.onStateChanged, this.onSyncSummaryCallback = e2.onSyncSummary, this.onSyncErrorCallback = e2.onSyncError, this.onInvalidatedCallback = e2.onInvalidated, this.metricsEmitter = e2.metricsEmitter, this.pathHashSalt = e2.pathHashSalt, this.onWarnCallback = e2.onWarn, this.rootPin = e2.rootPin, this.maxFileSizeBytes = e2.maxFileSizeBytes, this.blobIdleTimeoutMs = e2.blobIdleTimeoutMs, this.blobConnectTimeoutMs = e2.blobConnectTimeoutMs, this.passiveRetryIntervalMs = e2.passiveRetryIntervalMs, this.mintGate = e2.mintGate, this.mintDeniedUntilMs = e2.mintDeniedUntilMs, this.skipDeniedMountSync = e2.skipDeniedMountSync, this.passiveIndexPollIntervalMs = e2.passiveIndexPollIntervalMs, this.pathRefreshMinIntervalMs = e2.pathRefreshMinIntervalMs ?? cu.pathRefreshMinIntervalMs, this.multipartUploadThresholdBytes = e2.multipartUploadThresholdBytes, this.multipartPartSizeBytes = e2.multipartPartSizeBytes, this.multipartPresignWindowSize = e2.multipartPresignWindowSize, this.pullPresignWindowSize = e2.pullPresignWindowSize, this.listWalkConcurrency = e2.listWalkConcurrency, this.multipartCompleteMaxAttempts = e2.multipartCompleteMaxAttempts, this.multipartMaxRestarts = e2.multipartMaxRestarts, this.multipartMaxConflictRenames = e2.multipartMaxConflictRenames, this.multipartMaxExpiryRefreshes = e2.multipartMaxExpiryRefreshes, this.pushOrder = e2.pushOrder ?? cu.pushOrder, this.onPassiveIndexUpdatedCallback = e2.onPassiveIndexUpdated, this.onResumeDetectedCallback = e2.onResumeDetected, this.syncRoundTimeoutMs = e2.syncRoundTimeoutMs ?? cu.syncRoundTimeoutMs, this.syncRoundProgressTimeoutMs = e2.syncRoundProgressTimeoutMs ?? cu.syncRoundProgressTimeoutMs, this.syncRoundHardCapMs = e2.syncRoundHardCapMs ?? cu.syncRoundHardCapMs, this.syncRoundUnwindTimeoutMs = e2.syncRoundUnwindTimeoutMs ?? cu.syncRoundUnwindTimeoutMs, this.lockReleaseFailureThreshold = e2.lockReleaseFailureThreshold ?? cu.lockReleaseFailureThreshold, this.indexClosedInvalidatesSession = true === e2.indexClosedInvalidatesSession, this.lockReleaseFailureStreakThreshold = e2.lockReleaseFailureStreakThreshold ?? cu.lockReleaseFailureStreakThreshold, this.lockReleaseFailureStreakPassiveMs = e2.lockReleaseFailureStreakPassiveMs ?? cu.lockReleaseFailureStreakPassiveMs, this.resumeGapThresholdMs = e2.resumeGapThresholdMs ?? cu.resumeGapThresholdMs, this.resumeDetectionMode = e2.resumeDetectionMode ?? cu.resumeDetectionMode, this.syncDebounceMs = e2.syncDebounceMs ?? cu.syncDebounceMs, this.idleBackoffFactor = e2.idleBackoffFactor ?? cu.idleBackoffFactor, this.syncIdleMaxMs = e2.syncIdleMaxMs ?? this.syncDebounceMs, this.syncBackoffBaseMs = e2.syncBackoffBaseMs ?? cu.syncBackoffBaseMs, this.syncBackoffMaxMs = e2.syncBackoffMaxMs ?? cu.syncBackoffMaxMs, this.pathSyncRequestPollMs = e2.pathSyncRequestPollMs ?? Zs, this.pathSyncRequestWaitPollMs = e2.pathSyncRequestWaitPollMs ?? eo, this.exclusiveMutationClaimPollMs = e2.exclusiveMutationClaimPollMs ?? cu.exclusiveMutationClaimPollMs, this.tombstoneFullRefreshRounds = e2.tombstoneFullRefreshRounds, this.tombstoneFullRefreshIntervalMs = e2.tombstoneFullRefreshIntervalMs, this.tombstonePruneSlackMs = e2.tombstonePruneSlackMs, this.remoteVersionEnabled = e2.remoteVersionEnabled, this.versionFullListIntervalMs = e2.versionFullListIntervalMs, this.versionAuditSampleRate = e2.versionAuditSampleRate, this.localStatFastPath = e2.localStatFastPath ?? cu.localStatFastPath, this.localStatFastPathAuditRate = e2.localStatFastPathAuditRate ?? cu.localStatFastPathAuditRate, this.localStatRacyMarginMs = e2.localStatRacyMarginMs ?? cu.localStatRacyMarginMs, this.syncBackoff = Qu({ baseDelayMs: this.syncBackoffBaseMs, maxDelayMs: this.syncBackoffMaxMs }), this.ownsPeriodicScheduler = void 0 === e2.periodicScheduler, this.periodicScheduler = e2.periodicScheduler ?? new hi(), this.versionProbe = e2.versionProbe;
      }
      get isProjectStore() {
        return this.projectStore;
      }
      promoteToProjectStore() {
        return !this.projectStore && (this.projectStore = true, true);
      }
      setRemoteTiming(e2) {
        const t2 = this.syncDebounceMs, r2 = this.idleBackoffFactor, n2 = this.syncIdleMaxMs, s2 = this.resumeGapThresholdMs;
        if (void 0 !== e2.syncDebounceMs && (this.syncDebounceMs = e2.syncDebounceMs), void 0 !== e2.idleBackoffFactor && (this.idleBackoffFactor = e2.idleBackoffFactor), void 0 !== e2.syncIdleMaxMs && (this.syncIdleMaxMs = e2.syncIdleMaxMs), void 0 !== e2.syncRoundTimeoutMs && (this.syncRoundTimeoutMs = e2.syncRoundTimeoutMs), void 0 !== e2.syncRoundProgressTimeoutMs && (this.syncRoundProgressTimeoutMs = e2.syncRoundProgressTimeoutMs), void 0 !== e2.syncRoundHardCapMs && (this.syncRoundHardCapMs = e2.syncRoundHardCapMs), void 0 !== e2.resumeGapThresholdMs && (this.resumeGapThresholdMs = e2.resumeGapThresholdMs), void 0 !== e2.resumeDetectionMode && (this.resumeDetectionMode = e2.resumeDetectionMode), void 0 !== e2.passiveIndexPollIntervalMs && (this.passiveIndexPollIntervalMs = e2.passiveIndexPollIntervalMs, this.isClosing() || this.engine?.setPassiveIndexPollIntervalMs(e2.passiveIndexPollIntervalMs)), void 0 !== e2.pathRefreshMinIntervalMs && (this.pathRefreshMinIntervalMs = e2.pathRefreshMinIntervalMs), void 0 !== e2.passiveRetryIntervalMs && (this.passiveRetryIntervalMs = e2.passiveRetryIntervalMs, !this.isClosing())) {
          const t3 = this.mintGate?.remainingMs ?? 0, r3 = Math.max(t3, this.denialRemainingMs(), this.failureStreakStretchMs());
          this.engine?.setPassiveRetryIntervalMs(Math.max(e2.passiveRetryIntervalMs, r3));
        }
        this.resumeGapThresholdMs === s2 || this.isClosing() || (this.stopResumeDetector(), this.startResumeDetector());
        const o2 = e2.syncBackoffBaseMs ?? this.syncBackoffBaseMs, i2 = e2.syncBackoffMaxMs ?? this.syncBackoffMaxMs;
        if (o2 !== this.syncBackoffBaseMs || i2 !== this.syncBackoffMaxMs) {
          const e3 = this.syncBackoff.failures;
          this.syncBackoffBaseMs = o2, this.syncBackoffMaxMs = i2, this.syncBackoff = Qu({ baseDelayMs: o2, maxDelayMs: i2 }), this.syncBackoff.restoreFailures(e3);
        }
        if ((this.syncDebounceMs !== t2 || this.idleBackoffFactor !== r2 || this.syncIdleMaxMs !== n2) && this.periodicSyncArmed && ("periodic" === this.pendingScheduleKind || "idle" === this.pendingScheduleKind) && void 0 === this.syncing && !this.isClosing()) {
          const e3 = this.nextPeriodicDelay();
          this.scheduleSync(e3.delayMs, e3.kind);
        }
        void 0 !== e2.tombstoneFullRefreshRounds && (this.tombstoneFullRefreshRounds = e2.tombstoneFullRefreshRounds, this.isClosing() || this.engine?.setTombstoneFullRefreshRounds(e2.tombstoneFullRefreshRounds)), void 0 !== e2.tombstoneFullRefreshIntervalMs && (this.tombstoneFullRefreshIntervalMs = e2.tombstoneFullRefreshIntervalMs, this.isClosing() || this.engine?.setTombstoneFullRefreshIntervalMs(e2.tombstoneFullRefreshIntervalMs)), void 0 !== e2.tombstonePruneSlackMs && (this.tombstonePruneSlackMs = e2.tombstonePruneSlackMs, this.isClosing() || this.engine?.setTombstonePruneSlackMs(e2.tombstonePruneSlackMs)), void 0 !== e2.remoteVersionEnabled && (this.remoteVersionEnabled = e2.remoteVersionEnabled, this.isClosing() || this.engine?.setRemoteVersionEnabled(e2.remoteVersionEnabled)), void 0 !== e2.versionFullListIntervalMs && (this.versionFullListIntervalMs = e2.versionFullListIntervalMs, this.isClosing() || this.engine?.setVersionFullListIntervalMs(e2.versionFullListIntervalMs)), void 0 !== e2.versionAuditSampleRate && (this.versionAuditSampleRate = e2.versionAuditSampleRate, this.isClosing() || this.engine?.setVersionAuditSampleRate(e2.versionAuditSampleRate)), void 0 === e2.localStatFastPath && void 0 === e2.localStatFastPathAuditRate && void 0 === e2.localStatRacyMarginMs || (void 0 !== e2.localStatFastPath && (this.localStatFastPath = e2.localStatFastPath), void 0 !== e2.localStatFastPathAuditRate && (this.localStatFastPathAuditRate = e2.localStatFastPathAuditRate), void 0 !== e2.localStatRacyMarginMs && (this.localStatRacyMarginMs = e2.localStatRacyMarginMs), this.isClosing() || this.engine?.setLocalStatFastPath({ mode: this.localStatFastPath, auditRate: this.localStatFastPathAuditRate, racyMarginMs: this.localStatRacyMarginMs })), void 0 !== e2.pathSyncRequestWaitPollMs && (this.pathSyncRequestWaitPollMs = e2.pathSyncRequestWaitPollMs), void 0 !== e2.pathSyncRequestPollMs && e2.pathSyncRequestPollMs !== this.pathSyncRequestPollMs && (this.pathSyncRequestPollMs = e2.pathSyncRequestPollMs, "running" !== this.engine?.getState() || this.isClosing() || (this.stopPathSyncRequestPolling(), this.startPathSyncRequestPolling())), void 0 !== e2.exclusiveMutationClaimPollMs && e2.exclusiveMutationClaimPollMs !== this.exclusiveMutationClaimPollMs && (this.exclusiveMutationClaimPollMs = e2.exclusiveMutationClaimPollMs, "running" !== this.engine?.getState() || this.isClosing() || (this.stopExclusiveMutationClaimPolling(), this.startExclusiveMutationClaimPolling()));
      }
      get lastSyncSummary() {
        return this.lastSummary;
      }
      isClosed() {
        return "closed" === this.lifecycle;
      }
      isClosing() {
        return "open" !== this.lifecycle;
      }
      getEngineState() {
        return this.engine?.getState();
      }
      getResolvedStoreId() {
        return this.client.getResolvedStoreId?.({ agentId: this.key });
      }
      async awaitTeardown() {
        void 0 !== this.teardownPromise && await this.teardownPromise;
      }
      getSyncState() {
        return this.mirrorSyncState;
      }
      markMirror(e2) {
        "synced" !== this.mirrorSyncState && (this.mirrorSyncState = e2, "sync-failed" === e2 && (this.mirrorSyncFailedAtMs = Date.now())), this.releaseInitialRoundWaiters();
      }
      markMirrorFromSharedIndex() {
        const e2 = this.index, t2 = void 0 === e2 ? void 0 : md(e2.getMeta(En)) ?? md(e2.getMeta(xn)), r2 = this.mirrorSyncFailedAtMs;
        void 0 !== t2 && ("sync-failed" !== this.mirrorSyncState || void 0 === r2 || t2 > r2) ? this.markMirror("synced") : this.releaseInitialRoundWaiters();
      }
      async awaitInitialRound() {
        "opening" === this.getSyncState() && await this.initialRoundWaitersReleased;
      }
      async awaitOpenSettlement(e2) {
        const t2 = e2 ? this.syncing : void 0;
        if (void 0 !== t2) {
          const e3 = this.activeRoundAbandoned;
          await (void 0 !== e3 ? Promise.race([t2, e3]) : t2);
        }
        await this.awaitTeardown();
      }
      async forceSync() {
        if (!this.isClosing()) {
          if ("running" !== this.engine?.getState() && this.failureStreakStretchMs() > 0) {
            this.passiveCatchUpSuppressions += 1;
            try {
              await this.recontendForLock();
            } finally {
              this.passiveCatchUpSuppressions -= 1;
            }
          }
          if ("running" === this.engine?.getState()) return this.clearSyncTimer(), this.resetIdleStreak(), await this.runSync({ kind: "explicit", schedule: "explicit" });
        }
      }
      async syncPath(e2, t2) {
        return await this.syncPaths([e2], t2);
      }
      async syncPaths(e2, t2) {
        if (this.isClosing()) return;
        const r2 = this.engine;
        if (void 0 === r2) return;
        const n2 = r2.getState();
        if ("running" === n2) {
          if (this.skipDeniedSyncRound()) return;
          if (!this.guardedPathsSafe({ invalidateOnFailure: true })) return;
          this.keepPathLaneOffIdleStreak();
          try {
            const t3 = await r2.syncPaths(e2);
            return this.emitSyncMetrics(t3, "explicit"), t3;
          } catch (e3) {
            return this.emitThrownSyncMetrics(e3, "explicit"), this.invalidateRetiredRoot(e3), void this.invalidateClosedIndex(e3);
          }
        }
        return "passive" === n2 ? await this.awaitLockHolderPathSync(e2, t2) : void 0;
      }
      async pullPaths(e2) {
        if (this.isClosing()) return { kind: "unavailable" };
        const t2 = this.engine;
        if (void 0 === t2) return { kind: "unavailable" };
        const r2 = t2.getState();
        if ("passive" === r2) return { kind: "holder-owns-fetch" };
        if ("running" !== r2) return { kind: "unavailable" };
        if (this.skipDeniedSyncRound()) return { kind: "unavailable" };
        if (!this.guardedPathsSafe({ invalidateOnFailure: true })) return { kind: "failed" };
        this.keepPathLaneOffIdleStreak();
        try {
          const r3 = await t2.pullPaths(e2);
          return this.emitSyncMetrics(r3, "explicit"), ii(r3, t2.getState());
        } catch (e3) {
          return this.emitThrownSyncMetrics(e3, "explicit"), this.invalidateRetiredRoot(e3), this.invalidateClosedIndex(e3), { kind: "failed" };
        }
      }
      async refreshPaths(e2) {
        if (this.isClosing()) return { kind: "unavailable" };
        const t2 = this.engine;
        if (void 0 === t2) return { kind: "unavailable" };
        if (this.pathRefreshMinIntervalMs > 0 && void 0 !== this.lastPathRefreshAdmittedAtMs) {
          const e3 = mi() - this.lastPathRefreshAdmittedAtMs;
          if (e3 < this.pathRefreshMinIntervalMs) return { kind: "throttled", retryAfterMs: this.pathRefreshMinIntervalMs - e3 };
        }
        const r2 = t2.getState();
        if ("passive" === r2) return this.lastPathRefreshAdmittedAtMs = mi(), await this.leaveRefreshToHolder(e2);
        if ("running" !== r2) return { kind: "unavailable" };
        if (this.skipDeniedSyncRound()) return { kind: "unavailable" };
        if (!this.guardedPathsSafe({ invalidateOnFailure: true })) return { kind: "failed" };
        this.lastPathRefreshAdmittedAtMs = mi();
        try {
          const r3 = await t2.syncPaths(e2, { lane: "path-yield" });
          this.emitSyncMetrics(r3, "explicit");
          const n2 = this.pathsWithoutUnjournaledLocalDeletion(e2);
          if (0 === n2.length) return { kind: "ran", pushed: r3.filesPushed, pulled: 0, listingComplete: true, errors: r3.errors.length };
          const s2 = await t2.pullPaths(n2, { lane: "path-yield" });
          this.emitSyncMetrics(s2, "explicit");
          return "ran" !== ii(s2, t2.getState()).kind ? await this.leaveRefreshToHolder(e2) : { kind: "ran", pushed: r3.filesPushed, pulled: s2.filesPulled, listingComplete: s2.listingComplete, errors: r3.errors.length + s2.errors.length };
        } catch (e3) {
          return this.emitThrownSyncMetrics(e3, "explicit"), this.invalidateRetiredRoot(e3), this.invalidateClosedIndex(e3), { kind: "failed" };
        }
      }
      async leaveRefreshToHolder(e2) {
        const t2 = [];
        for (const r2 of e2) await this.hasUnsyncedLocalBytes(r2) && t2.push(r2);
        return { kind: "holder-owns-fetch", pushRequested: t2.length > 0 && void 0 !== await io({ filesDir: this.filesDir, relPaths: t2, kind: "push" }), pullRequested: void 0 !== await io({ filesDir: this.filesDir, relPaths: e2, kind: "pull" }) };
      }
      statMirrorPath(e2) {
        try {
          const t2 = v(e2);
          return { canonical: t2, stat: T({ base: this.filesDir, relPath: t2 }) };
        } catch {
          return;
        }
      }
      async hasUnsyncedLocalBytes(e2) {
        const t2 = this.statMirrorPath(e2);
        if (void 0 === t2 || "file" !== t2.stat.kind) return false;
        const r2 = this.getIndexEntry(t2.canonical);
        if ("miss" === r2.kind) return true;
        if ("hit" !== r2.kind) return false;
        if (r2.entry.size !== t2.stat.entry.size) return true;
        try {
          const { sha: e3 } = await nc({ absPath: t2.stat.entry.absPath, maxBytes: this.maxFileSizeBytes ?? Qi, expectedDev: t2.stat.entry.dev, expectedIno: t2.stat.entry.ino });
          return e3 !== r2.entry.lastSyncedSha;
        } catch {
          return false;
        }
      }
      pathsWithoutUnjournaledLocalDeletion(e2) {
        return "readOnly" === this.syncMode ? e2 : e2.filter((e3) => !this.hasUnjournaledLocalDeletion(e3));
      }
      hasUnjournaledLocalDeletion(e2) {
        const t2 = this.statMirrorPath(e2);
        if (void 0 === t2 || "absent" !== t2.stat.kind) return false;
        const r2 = this.getIndexEntry(t2.canonical);
        return "hit" === r2.kind && "tombstoned" !== r2.entry.state && void 0 !== r2.entry.lastSeenEtag && r2.entry.lastSeenEtag.length > 0;
      }
      getIndexEntry(e2) {
        const t2 = this.index;
        if (void 0 === t2) return { kind: "unavailable" };
        if (t2.isClosed()) return this.emitIndexLookupClosed(), { kind: "unavailable", reason: "index_closed" };
        if (this.isClosing()) return { kind: "unavailable" };
        try {
          const r2 = t2.getFile(v(e2));
          return void 0 === r2 ? { kind: "miss" } : { kind: "hit", entry: r2 };
        } catch (e3) {
          return Di(e3) ? (this.emitIndexLookupClosed(), { kind: "unavailable", reason: "index_closed" }) : { kind: "unavailable" };
        }
      }
      setConversationActivity(e2) {
        this.isClosing() || this.conversationActivity === e2 || (this.conversationActivity = e2, this.emitSessionState(), "idle" !== e2 ? "running" === this.engine?.getState() && this.wake() : "backoff" !== this.pendingScheduleKind && this.clearSyncTimer());
      }
      wake() {
        this.isClosing() || (this.clearSyncTimer(), this.resetIdleStreak(), this.runSync({ schedule: "explicit" }));
      }
      setPeriodicScheduler(e2) {
        if (e2 === this.periodicScheduler) return;
        const t2 = this.periodicDueAtMs, r2 = this.periodicSyncArmed, n2 = this.exclusiveMutationClaimDueAtMs, s2 = this.exclusiveMutationClaimArmed;
        if (this.engine?.setPeriodicScheduler(e2), this.ownsPeriodicScheduler ? (this.periodicScheduler.dispose(), this.ownsPeriodicScheduler = false) : (this.periodicScheduler.cancel(this.periodicSyncHandle), this.periodicScheduler.cancel(this.exclusiveMutationClaimHandle)), this.periodicScheduler = e2, !r2 || void 0 === t2 || this.isClosing() ? (this.periodicSyncArmed = false, this.periodicDueAtMs = void 0) : (this.periodicSyncArmed = true, this.periodicScheduler.schedule(this.periodicSyncHandle, t2, this.onPeriodicSyncDue, this)), !s2 || void 0 === n2 || this.isClosing()) return this.exclusiveMutationClaimArmed = false, void (this.exclusiveMutationClaimDueAtMs = void 0);
        this.exclusiveMutationClaimArmed = true, this.periodicScheduler.schedule(this.exclusiveMutationClaimHandle, n2, this.onExclusiveMutationClaimDue, this);
      }
      async recontendForLock() {
        this.isClosing() || "passive" !== this.engine?.getState() || await this.engine.unpause();
      }
      holdPeriodicSync(e2) {
        this.periodicSyncHeld !== e2 && (this.periodicSyncHeld = e2, e2 ? "periodic" !== this.pendingScheduleKind && "idle" !== this.pendingScheduleKind || this.clearSyncTimer() : this.isClosing() || void 0 !== this.syncing || this.syncScheduleArmed() || this.versionProbeInFlight || this.scheduleSync());
      }
      async park() {
        this.isClosing() || (this.clearSyncTimer(), await this.engine?.pause(), this.clearSyncTimer());
      }
      async unpark() {
        const e2 = this.engine;
        this.isClosing() || void 0 === e2 || "paused" !== e2.getState() || (await e2.unpause(), await this.awaitOpenSettlement(true));
      }
      async close(e2) {
        await this.beginTeardown({ kind: "close", options: e2 });
      }
      async initialize() {
        this.assertPathsSafe();
        const e2 = this.openIndex(this.paths.indexPath);
        this.index = e2;
        const t2 = Vo(this.rootIdPath);
        let r2;
        try {
          if (void 0 === t2) this.onEngineWarn("agent store root id unavailable; deletion fence disabled", void 0);
          else {
            const r3 = e2.bindRootId(t2);
            this.boundRootId = t2, "rebound" === r3 && this.onEngineWarn(`agent store root id rebound to ${this.boundRootId}; scan deletion disarmed until a clean round`, void 0);
          }
          r2 = new ya({ agentId: this.key, filesDir: this.paths.filesDir, tmpDir: this.paths.tmpDir, client: this.client, index: e2, queues: this.queues, syncMode: this.syncMode, validatePresignedUrl: this.validatePresignedUrl, blobTransfer: this.blobTransfer, fetch: this.fetchImpl, lockProvider: this.lockProvider, ...void 0 !== this.boundRootId ? { rootIdFence: { rootIdPath: this.rootIdPath, expected: this.boundRootId, enabled: this.storeRootIdFence } } : {}, initialState: "paused", indexPath: this.engineIndexPath, maxFileSizeBytes: this.maxFileSizeBytes, blobIdleTimeoutMs: this.blobIdleTimeoutMs, blobConnectTimeoutMs: this.blobConnectTimeoutMs, resumeLockCallTimeoutMs: this.unwindHardCapMs(), shouldRelinquishLockLost: () => !this.isClosing(), passiveRetryIntervalMs: this.passiveRetryIntervalMs, passiveIndexPollIntervalMs: this.passiveIndexPollIntervalMs, periodicScheduler: this.periodicScheduler, periodicSchedulerGroup: this, multipartUploadThresholdBytes: this.multipartUploadThresholdBytes, multipartPartSizeBytes: this.multipartPartSizeBytes, multipartPresignWindowSize: this.multipartPresignWindowSize, pullPresignWindowSize: this.pullPresignWindowSize, listWalkConcurrency: this.listWalkConcurrency, multipartCompleteMaxAttempts: this.multipartCompleteMaxAttempts, multipartMaxRestarts: this.multipartMaxRestarts, multipartMaxConflictRenames: this.multipartMaxConflictRenames, multipartMaxExpiryRefreshes: this.multipartMaxExpiryRefreshes, pushOrder: this.pushOrder, onPassiveIndexUpdated: (e3) => {
            this.markMirrorFromSharedIndex(), Xu(this.onPassiveIndexUpdatedCallback, e3);
          }, onStateChanged: (e3) => this.onEngineStateChanged(e3), onRoundBodyStarted: (e3) => {
            this.noteRoundBodyStarted(e3);
          }, onRoundProgress: () => {
            const e3 = this.roundBodyStarted;
            void 0 !== e3 && e3.generation === this.roundGeneration && (this.roundProgress = { at: mi(), wallAt: Date.now(), generation: e3.generation });
          }, onWarn: (e3, t3) => this.onEngineWarn(e3, t3), tombstoneFullRefreshRounds: this.tombstoneFullRefreshRounds, tombstoneFullRefreshIntervalMs: this.tombstoneFullRefreshIntervalMs, tombstonePruneSlackMs: this.tombstonePruneSlackMs, localStatFastPath: this.localStatFastPath, localStatFastPathAuditRate: this.localStatFastPathAuditRate, localStatRacyMarginMs: this.localStatRacyMarginMs, onStatFastPath: (e3) => {
            this.metricsEmitter?.recordStatFastPath?.({ agentId: this.key, result: e3 });
          }, onMultipartAbandoned: (e3) => {
            this.metricsEmitter?.recordMultipartAbandoned?.({ agentId: this.key, ...e3 });
          }, remoteVersionEnabled: this.remoteVersionEnabled, versionFullListIntervalMs: this.versionFullListIntervalMs, versionAuditSampleRate: this.versionAuditSampleRate }), this.engine = r2, await r2.unpause(), this.abandonRequested && this.markLockUnhealthy(), this.startResumeDetector();
        } catch (t3) {
          throw await this.disposeConstructedResources(r2, e2), t3;
        }
      }
      startResumeDetector() {
        this.resumeGapThresholdMs <= 0 || void 0 !== this.resumeTimer || (this.lastResumeWallMs = Date.now(), this.lastResumeMonoMs = performance.now(), this.resumeTimer = setInterval(() => {
          const e2 = Date.now(), t2 = performance.now(), r2 = e2 - this.lastResumeWallMs, n2 = t2 - this.lastResumeMonoMs;
          this.lastResumeWallMs = e2, this.lastResumeMonoMs = t2;
          const s2 = r2 - n2, o2 = r2 - ed, i2 = "timer_lateness" === this.resumeDetectionMode ? Math.max(s2, o2) : s2;
          i2 <= this.resumeGapThresholdMs || this.isClosing() || (void 0 === this.resumeHandling ? this.resumeHandling = this.drainResumeRecovery(i2).finally(() => {
            this.resumeHandling = void 0;
          }) : this.pendingResumeGapMs = Math.max(this.pendingResumeGapMs ?? 0, i2));
        }, ed), this.resumeTimer.unref?.());
      }
      stopResumeDetector() {
        void 0 !== this.resumeTimer && (clearInterval(this.resumeTimer), this.resumeTimer = void 0);
      }
      async drainResumeRecovery(e2) {
        let t2 = e2;
        for (; void 0 !== t2 && !this.isClosing(); ) {
          const e3 = t2;
          this.pendingResumeGapMs = void 0, await this.handleResume(e3), t2 = this.pendingResumeGapMs;
        }
      }
      async handleResume(e2) {
        if (!this.isClosing()) {
          this.onEngineWarn(`resume detected after ~${Math.round(e2)}ms wall-clock gap`, void 0), this.emitResumeDetected(e2), this.consecutiveTimeoutFailures = 0, this.consecutiveRoundFailures = 0, this.reconcileFailureStreakAfterResume(), this.resumeRecoveryInProgress = true;
          try {
            const e3 = await this.drainRoundsForResume();
            if (this.isClosing()) return;
            if (e3) this.pendingRelinquishCause = "resume_abandon", await sd(this.relinquishEngineLock(), this.unwindHardCapMs());
            else {
              const e4 = this.engine;
              void 0 !== e4 && await sd(e4.revalidateLockOwnership().catch(() => {
              }), this.unwindHardCapMs());
            }
            if (this.isClosing()) return;
            const t2 = this.engine;
            "passive" !== t2?.getState() || t2.hasAbandonedInFlightRounds() || await sd(t2.unpause().catch(() => {
            }), this.unwindHardCapMs()), this.wake();
          } finally {
            this.resumeRecoveryInProgress = false;
          }
        }
      }
      async drainRoundsForResume() {
        let e2 = false, t2 = false, r2 = 0;
        for (; !this.isClosing() && void 0 !== this.syncing; ) {
          if (r2 >= hd.RESUME_DRAIN_MAX_LAPS) return this.unstickAbandonedRoundWaiters({ unjamChain: true }), this.resumeBackoffResetPending = false, this.activeRoundResumeRecoveryPending = false, this.syncBackoff.recordSuccess(), true;
          r2 += 1, e2 = true, this.activeRoundResumeRecoveryPending = true, this.abortActiveRound("host resumed from suspend"), this.engine?.abortActiveRound(new ga({ code: "round_aborted", message: "host resumed from suspend" })), this.resumeBackoffResetPending = true;
          const n2 = await sd(this.syncing, this.unwindHardCapMs());
          if (this.isClosing()) return this.resumeBackoffResetPending = false, this.unstickAbandonedRoundWaiters({ unjamChain: "timeout" === n2 }), "timeout" === n2 || t2;
          "timeout" === n2 && (this.unstickAbandonedRoundWaiters({ unjamChain: true }), this.resumeBackoffResetPending = false, this.activeRoundResumeRecoveryPending = false, this.syncBackoff.recordSuccess(), t2 = true);
        }
        return this.isClosing() ? t2 : e2 ? (this.engine?.abortActiveRound(new ga({ code: "round_aborted", message: "host resumed from suspend" })), await this.recoverWedgedScopedRound() && (t2 = true), t2) : (this.engine?.abortActiveRound(new ga({ code: "round_aborted", message: "host resumed from suspend" })), await this.recoverWedgedScopedRound() && (t2 = true), this.isClosing() || this.syncBackoff.recordSuccess(), t2);
      }
      async recoverWedgedScopedRound() {
        const e2 = this.engine;
        if (void 0 === e2) return false;
        if (this.isClosing()) return !!e2.hasLiveRoundWork() && (e2.releaseWedgedRoundChain(), this.markLockUnhealthy(), true);
        return "settled" !== await sd(e2.awaitInFlightRoundsSettled(), this.unwindHardCapMs()) && (e2.releaseWedgedRoundChain(), this.markLockUnhealthy(), true);
      }
      resumeRecoveryTeardownBudgetMs() {
        return this.unwindHardCapMs() * (hd.RESUME_DRAIN_MAX_LAPS + 1);
      }
      async beginTeardown(e2) {
        if ("closed" !== this.lifecycle) {
          if (void 0 !== this.teardownPromise) return "invalidate" === e2.kind && void 0 !== e2.reason && Xu(this.onInvalidatedCallback, e2.reason), await this.teardownPromise;
          this.lifecycle = "closing", this.releaseInitialRoundWaiters(), this.engine?.markClosing(), e2.options.flush && this.engine?.markCloseFlushPending(), this.teardownPromise = this.teardownInternal(e2.options), "invalidate" === e2.kind && void 0 !== e2.reason && Xu(this.onInvalidatedCallback, e2.reason);
          try {
            await this.teardownPromise;
          } finally {
            this.lifecycle = "closed";
          }
        }
      }
      async teardownInternal(e2) {
        this.clearSyncTimer(), this.clearFailureStreakRestoreTimer(), this.ownsPeriodicScheduler && (this.periodicScheduler.dispose(), this.ownsPeriodicScheduler = false), this.stopPathSyncRequestPolling(), this.stopResumeDetector(), this.abortActiveRound("session closing"), this.engine?.abortActiveRound(new ga({ code: "round_aborted", message: "session closing" })), void 0 !== this.pathSyncRequestDrain && await sd(this.pathSyncRequestDrain.catch(() => {
        }), this.unwindHardCapMs());
        const t2 = this.resumeHandling;
        void 0 !== t2 && await sd(t2.catch(() => {
        }), this.resumeRecoveryTeardownBudgetMs());
        let r2 = true, n2 = false;
        if (void 0 !== this.syncing) {
          const e3 = await sd(this.syncing, this.unwindHardCapMs());
          r2 = "settled" === e3, n2 = "timeout" === e3;
        }
        if (r2 && true === this.engine?.hasInFlightRounds()) {
          "timeout" === await sd(this.engine.awaitInFlightRoundsSettled(), this.unwindHardCapMs()) && (r2 = false, n2 = true);
        }
        const s2 = this.engine, o2 = this.index;
        if (this.engine = void 0, this.index = void 0, void 0 === s2) return this.closeReleasedLock = true, void await this.closeIndexSafely(o2);
        this.disposingEngine = s2;
        try {
          await this.finishDetachedTeardown(s2, o2, e2, r2, n2);
        } finally {
          this.disposingEngine === s2 && (this.disposingEngine = void 0);
        }
      }
      async finishDetachedTeardown(e2, t2, r2, n2, s2) {
        let o2 = false;
        n2 && e2.hasAbandonedInFlightRounds() && (n2 = false, o2 = true), s2 && (e2.releaseWedgedRoundChain(), this.markLockUnhealthy(e2));
        const i2 = this.disposeEngine(e2, r2, s2);
        if (n2) return await i2, this.noteIfLockReleased(e2), void await this.closeIndexSafely(t2);
        if (o2) {
          const r3 = this.syncRoundUnwindTimeoutMs;
          let n3;
          const s3 = await new Promise((t3) => {
            let s4 = false;
            const o3 = (e3) => {
              s4 || (s4 = true, void 0 !== n3 && clearTimeout(n3), t3(e3));
            };
            r3 > 0 && (n3 = setTimeout(() => o3("timeout"), r3), n3.unref?.()), i2.then(() => o3("disposed"), () => o3("disposed")), e2.whenAbandonedInFlightRoundsIdle().then(() => o3("orphans_idle"));
          });
          return "disposed" === s3 ? e2.hasAbandonedInFlightRounds() ? (this.onEngineWarn("teardown proceeding without a settled round; lock recovery deferred", void 0), void this.releaseRootPinWhenQuiet(e2, Promise.resolve(), t2)) : (this.noteIfLockReleased(e2), void await this.closeIndexSafely(t2)) : "orphans_idle" === s3 ? (await i2, this.noteIfLockReleased(e2), void await this.closeIndexSafely(t2)) : (this.onEngineWarn("teardown proceeding without a settled round; lock recovery deferred", void 0), this.markLockUnhealthy(e2), this.watchDisposalForLockRelease(i2, e2), void this.releaseRootPinWhenQuiet(e2, i2, t2));
        }
        const a2 = await sd(i2, this.syncRoundUnwindTimeoutMs);
        if ("settled" === a2) return e2.hasAbandonedInFlightRounds() ? (this.onEngineWarn("teardown proceeding without a settled round; lock recovery deferred", void 0), void this.releaseRootPinWhenQuiet(e2, Promise.resolve(), t2)) : (this.noteIfLockReleased(e2), void await this.closeIndexSafely(t2));
        "timeout" === a2 && (this.onEngineWarn("teardown proceeding without a settled round; lock recovery deferred", void 0), this.markLockUnhealthy(e2), this.watchDisposalForLockRelease(i2, e2), this.releaseRootPinWhenQuiet(e2, i2, t2));
      }
      noteIfLockReleased(e2) {
        if (!e2.releasedLockOnDispose()) return;
        this.closeReleasedLock = true;
        const t2 = this.lockReleasedWaiters.splice(0);
        for (const e3 of t2) e3();
      }
      whenAbandonedLockReleased() {
        return this.holdsAbandonedLock() ? new Promise((e2) => {
          this.lockReleasedWaiters.push(e2);
        }) : Promise.resolve();
      }
      watchDisposalForLockRelease(e2, t2) {
        e2.then(() => {
          this.noteIfLockReleased(t2);
        }, () => {
          this.noteIfLockReleased(t2);
        });
      }
      async closeIndexSafely(e2) {
        if (void 0 !== e2) try {
          e2.close();
        } catch {
        }
        await this.releaseRootPin();
      }
      async releaseRootPin() {
        const e2 = this.rootPin;
        this.rootPin = void 0, await e2?.release();
      }
      releaseRootPinWhenQuiet(e2, t2, r2) {
        const n2 = this.rootPin;
        this.rootPin = void 0;
        const s2 = n2?.release.bind(n2);
        void 0 !== n2 && (n2.release = () => Promise.resolve()), (async () => {
          try {
            await t2;
          } catch {
          }
          try {
            if (await e2.whenAbandonedInFlightRoundsIdle(), void 0 !== r2) try {
              r2.close();
            } catch {
            }
          } catch {
          }
          await s2?.();
        })();
      }
      async disposeEngine(e2, t2, r2 = false) {
        if (t2.flush && this.guardedPathsSafe({ invalidateOnFailure: false })) try {
          await e2.dispose({ deferLockRelease: r2 });
        } catch (e3) {
          Xu(this.onSyncErrorCallback, e3);
        }
        else {
          try {
            await e2.pause();
          } catch {
          }
          try {
            await e2.dispose({ deferLockRelease: r2 });
          } catch (e3) {
            Xu(this.onSyncErrorCallback, e3);
          }
        }
      }
      abortActiveRound(e2) {
        const t2 = ad(e2);
        this.activeRoundAbortController?.abort(new ga({ code: "round_aborted", message: e2, ...t2 ? {} : { timeoutClass: "round" } }));
      }
      async disposeConstructedResources(e2, t2) {
        if (this.stopResumeDetector(), void 0 !== e2) {
          try {
            await e2.pause();
          } catch {
          }
          try {
            await e2.dispose();
          } catch (e3) {
            Xu(this.onSyncErrorCallback, e3);
          }
        }
        try {
          t2.close();
        } catch {
        }
        await this.releaseRootPin(), this.engine = void 0, this.index = void 0;
      }
      onEngineStateChanged(e2) {
        if (Xu(this.onStateChangedCallback, e2), "passive" === e2.toState && "lock_lost" === e2.reason) {
          const e3 = this.pendingRelinquishCause ?? "engine";
          this.pendingRelinquishCause = void 0, this.emitLockRelinquished(e3);
        }
        if ("passive" === e2.toState && void 0 !== e2.heldBy && this.emitLockContended(e2.heldBy), "passive" === e2.toState && this.markMirrorFromSharedIndex(), "running" === e2.toState && !this.isClosing()) return this.clearFailureStreakStretch(), this.restorePassiveRetryInterval(), this.emitSessionState(), this.startPathSyncRequestPolling(), this.clearSyncTimer(), void ("passive" === e2.fromState ? (this.consecutiveRoundFailures = 0, this.resetIdleStreak(), 0 === this.passiveCatchUpSuppressions && this.runSync({ schedule: "explicit" })) : this.runSync());
        this.stopPathSyncRequestPolling();
      }
      async awaitLockHolderPathSync(e2, t2) {
        const r2 = await io({ filesDir: this.filesDir, relPaths: e2 });
        if (void 0 === r2) return;
        const n2 = t2?.passiveWaitTimeoutMs, s2 = Date.now(), o2 = await mo({ filesDir: this.filesDir, requestId: r2, pollMs: this.pathSyncRequestWaitPollMs, shouldAbort: () => !!this.isClosing() || ("running" === this.engine?.getState() || void 0 !== n2 && Date.now() - s2 >= n2) });
        if (!this.isClosing()) {
          if ("running" === this.engine?.getState()) {
            if (this.skipDeniedSyncRound()) return;
            if (!this.guardedPathsSafe({ invalidateOnFailure: true })) return;
            this.keepPathLaneOffIdleStreak();
            try {
              const t3 = await this.engine.syncPaths(e2);
              return po({ filesDir: this.filesDir, requestIds: [r2] }), this.emitSyncMetrics(t3, "explicit"), t3;
            } catch (e3) {
              return this.emitThrownSyncMetrics(e3, "explicit"), this.invalidateRetiredRoot(e3), void this.invalidateClosedIndex(e3);
            }
          }
          if ("acked" === o2) return { ...tc("path"), walkMs: 0, hashMs: 0 };
        }
      }
      startExclusiveMutationClaimPolling() {
        void 0 === this.lockOwnerId || this.exclusiveMutationClaimArmed || this.isClosing() || (this.armExclusiveMutationClaim(), this.checkExclusiveMutationClaim());
      }
      armExclusiveMutationClaim(e2) {
        this.exclusiveMutationClaimArmed = true, this.exclusiveMutationClaimDueAtMs = wi({ previousDueAtMs: e2, intervalMs: this.exclusiveMutationClaimPollMs }), this.periodicScheduler.schedule(this.exclusiveMutationClaimHandle, this.exclusiveMutationClaimDueAtMs, this.onExclusiveMutationClaimDue, this);
      }
      stopExclusiveMutationClaimPolling() {
        this.exclusiveMutationClaimArmed && (this.periodicScheduler.cancel(this.exclusiveMutationClaimHandle), this.exclusiveMutationClaimArmed = false, this.exclusiveMutationClaimDueAtMs = void 0);
      }
      async checkExclusiveMutationClaim() {
        const e2 = this.exclusiveMutationClaimCheck;
        if (void 0 !== e2) return void await e2;
        const t2 = this.checkExclusiveMutationClaimInternal();
        this.exclusiveMutationClaimCheck = t2;
        try {
          await t2;
        } catch (e3) {
          this.onEngineWarn("exclusive mutation claim check failed", e3);
        } finally {
          this.exclusiveMutationClaimCheck === t2 && (this.exclusiveMutationClaimCheck = void 0);
        }
      }
      async checkExclusiveMutationClaimInternal() {
        const e2 = this.lockOwnerId;
        if (void 0 === e2 || this.isClosing() || "running" !== this.engine?.getState()) return;
        const t2 = await Mr({ filesDir: this.filesDir });
        if (void 0 === t2 || t2.windowId === e2) return;
        const r2 = await this.forceSync();
        if (void 0 === r2 || r2.errors.length > 0 || this.isClosing() || "running" !== this.engine?.getState()) return;
        const n2 = await Mr({ filesDir: this.filesDir });
        void 0 !== n2 && n2.windowId !== e2 && (this.pendingRelinquishCause = "exclusive_claim", await this.relinquishEngineLock());
      }
      startPathSyncRequestPolling() {
        void 0 !== this.pathSyncRequestTimer || this.isClosing() || (this.startExclusiveMutationClaimPolling(), this.pathSyncRequestFailureDelayMs = 0, this.pathSyncRequestRetryNotBeforeMs = 0, this.pathSyncRequestPollMs > 0 && (this.pathSyncRequestTimer = setInterval(() => {
          this.drainPathSyncRequests();
        }, this.pathSyncRequestPollMs), this.pathSyncRequestTimer.unref?.()), this.drainPathSyncRequests());
      }
      stopPathSyncRequestPolling() {
        this.stopExclusiveMutationClaimPolling(), void 0 !== this.pathSyncRequestTimer && (clearInterval(this.pathSyncRequestTimer), this.pathSyncRequestTimer = void 0);
      }
      notePathSyncRequestDrainFailure() {
        const e2 = Math.max(this.pathSyncRequestPollMs, 100);
        this.pathSyncRequestFailureDelayMs = 0 === this.pathSyncRequestFailureDelayMs ? e2 : Math.min(2 * this.pathSyncRequestFailureDelayMs, 3e4), this.pathSyncRequestRetryNotBeforeMs = Date.now() + this.pathSyncRequestFailureDelayMs;
      }
      clearPathSyncRequestDrainFailure() {
        this.pathSyncRequestFailureDelayMs = 0, this.pathSyncRequestRetryNotBeforeMs = 0;
      }
      async drainPathSyncRequests() {
        if (void 0 !== this.pathSyncRequestDrain) return await this.pathSyncRequestDrain, await this.drainPathSyncRequests();
        this.isClosing() || "running" !== this.engine?.getState() || this.denialRemainingMs() > 0 || Date.now() < this.pathSyncRequestRetryNotBeforeMs || (this.pathSyncRequestDrain = (async () => {
          for (; ; ) {
            if (this.isClosing() || "running" !== this.engine?.getState()) return;
            const e2 = co({ filesDir: this.filesDir });
            if (0 === e2.length) return void this.clearPathSyncRequestDrainFailure();
            const t2 = /* @__PURE__ */ new Set(), r2 = /* @__PURE__ */ new Set();
            for (const n3 of e2) {
              const e3 = "pull" === n3.kind ? r2 : t2;
              for (const t3 of n3.relPaths) e3.add(t3);
            }
            if (!this.guardedPathsSafe({ invalidateOnFailure: true })) return;
            const n2 = this.engine;
            if (void 0 === n2 || "running" !== n2.getState()) return;
            if (this.denialRemainingMs() > 0) return;
            try {
              const s2 = t2.size > 0 ? await n2.syncPaths([...t2], { lane: "path-yield" }) : void 0, o2 = this.pathsWithoutUnjournaledLocalDeletion([...r2]), i2 = o2.length > 0 ? await n2.pullPaths(o2, { lane: "path-yield" }) : void 0, a2 = /* @__PURE__ */ new Set();
              let c2 = false;
              for (const e3 of [s2, i2]) if (void 0 !== e3) {
                this.emitSyncMetrics(e3, "explicit");
                for (const t3 of e3.errors) void 0 === t3.relPath ? c2 = true : a2.add(t3.relPath);
              }
              const l2 = c2 ? [] : e2.filter((e3) => e3.relPaths.every((e4) => !a2.has(e4))).map((e3) => e3.id);
              if (0 === l2.length) return void this.notePathSyncRequestDrainFailure();
              this.clearPathSyncRequestDrainFailure(), po({ filesDir: this.filesDir, requestIds: l2 });
            } catch (e3) {
              return this.emitThrownSyncMetrics(e3, "explicit"), this.invalidateRetiredRoot(e3), this.invalidateClosedIndex(e3), void this.notePathSyncRequestDrainFailure();
            }
          }
        })().finally(() => {
          this.pathSyncRequestDrain = void 0;
        }), await this.pathSyncRequestDrain);
      }
      onEngineWarn(e2, t2) {
        const r2 = this.onWarnCallback;
        if (void 0 !== r2) try {
          r2(e2, t2);
        } catch {
        }
      }
      startVersionProbe() {
        const e2 = this.versionProbe;
        if (void 0 === e2 || !e2.isEnabled()) return;
        if (this.isClosing() || void 0 !== this.syncing || this.followUpNeeded || void 0 !== this.backoffTimer || this.syncBackoff.failures > 0) return;
        const t2 = this.engine;
        if (void 0 === t2 || "running" !== t2.getState()) return;
        const r2 = t2.versionToProbe();
        if (void 0 === r2) return;
        const n2 = this.client.versionProbeTarget?.({ agentId: this.key });
        return void 0 !== n2 ? { version: r2, roundGeneration: this.roundGeneration, result: e2.probe({ agentId: this.key, entry: { ...n2, version: r2 } }) } : void 0;
      }
      async runSyncAfterVersionProbe(e2, t2) {
        const r2 = await e2.result;
        if (this.versionProbeInFlight = false, this.roundGeneration !== e2.roundGeneration || void 0 !== this.syncing || this.periodicSyncHeld) return;
        if (this.isClosing() || "running" !== this.engine?.getState()) return;
        const n2 = "unchanged" === r2?.status && r2.version === e2.version && this.engine?.versionToProbe() === e2.version;
        await this.runSync({ schedule: t2, ...n2 ? { remoteUnchangedVersion: e2.version } : {} });
      }
      keepPathLaneOffIdleStreak() {
        const e2 = this.pendingScheduleKind, t2 = void 0 !== this.syncing || this.versionProbeInFlight;
        "idle" === e2 && (this.clearSyncTimer(), t2 || this.scheduleSync()), (t2 || "periodic" === e2 || "idle" === e2) && (this.suppressNextIdleNote = true), this.resetIdleStreak();
      }
      resetIdleStreak() {
        this.consecutiveNoopRounds = 0, this.idleStreakEpoch += 1;
      }
      noteRoundForIdleStreak(e2, t2, r2) {
        this.idleStreakEpoch === t2 && ("periodic" !== r2 && "idle" !== r2 || (!(function(e3) {
          return !(void 0 === e3 || !e3.listingComplete || 0 !== e3.errors.length || 0 !== e3.filesPushed || 0 !== e3.filesPulled || 0 !== e3.filesConflicted || 0 !== (e3.tombstonesReceived ?? 0) || 0 !== (e3.identicalContentConflictsSuppressed ?? 0) || 0 !== e3.pullsDeferred || 0 !== e3.filesDeletedRemote || 0 !== e3.filesDeletedLocal || 0 !== (e3.absenceDeletesApplied ?? 0) || 0 !== e3.deleteConflicts || 0 !== e3.scanDeletesJournaled || 0 !== (e3.rmdirPushed ?? 0) || 0 !== (e3.removedDirsApplied ?? 0) || 0 !== e3.recoveryDisarms || e3.identityRecoveryWipeFailed);
        })(e2) ? this.consecutiveNoopRounds = 0 : this.consecutiveNoopRounds += 1));
      }
      nextPeriodicDelay() {
        if (this.idleBackoffFactor <= 1 || this.consecutiveNoopRounds <= 0) return { delayMs: this.syncDebounceMs, kind: "periodic" };
        const e2 = Math.min(this.consecutiveNoopRounds, 32), t2 = this.syncDebounceMs * this.idleBackoffFactor ** e2, r2 = Math.min(t2, this.syncIdleMaxMs);
        return !Number.isFinite(r2) || r2 <= this.syncDebounceMs ? { delayMs: this.syncDebounceMs, kind: "periodic" } : { delayMs: r2, kind: "idle" };
      }
      scheduleSync(e2 = this.syncDebounceMs, t2 = "periodic") {
        if (!(this.isClosing() || "idle" === this.conversationActivity && "backoff" !== t2)) if (this.disarmSyncSchedule(), "periodic" !== t2 && "idle" !== t2 || !this.periodicSyncHeld) {
          if (this.pendingScheduleKind = t2, "backoff" === t2) return this.backoffTimer = setTimeout(() => {
            this.backoffTimer = void 0, this.pendingScheduleKind = void 0, this.runSync({ schedule: "backoff" });
          }, e2), void this.backoffTimer.unref?.();
          this.periodicSyncArmed = true, this.periodicDueAtMs = Date.now() + e2, this.periodicScheduler.schedule(this.periodicSyncHandle, this.periodicDueAtMs, this.onPeriodicSyncDue, this);
        } else this.pendingScheduleKind = void 0;
      }
      disarmSyncSchedule() {
        void 0 !== this.backoffTimer && (clearTimeout(this.backoffTimer), this.backoffTimer = void 0), this.periodicSyncArmed && (this.periodicScheduler.cancel(this.periodicSyncHandle), this.periodicSyncArmed = false, this.periodicDueAtMs = void 0);
      }
      syncScheduleArmed() {
        return void 0 !== this.backoffTimer || this.periodicSyncArmed;
      }
      clearSyncTimer() {
        this.disarmSyncSchedule(), this.pendingScheduleKind = void 0, this.suppressNextIdleNote = false;
      }
      getOrCreateExplicitFollowUpDeferred() {
        if (void 0 === this.explicitFollowUpDeferred) {
          let e2;
          const t2 = new Promise((t3) => {
            e2 = t3;
          });
          this.explicitFollowUpDeferred = { promise: t2, resolve: e2 };
        }
        return this.explicitFollowUpDeferred.promise;
      }
      takeExplicitFollowUpDeferred() {
        const e2 = this.explicitFollowUpDeferred;
        return this.explicitFollowUpDeferred = void 0, e2;
      }
      resolveExplicitFollowUp(e2, t2) {
        e2?.resolve(t2);
      }
      cancelQueuedExplicitFollowUp() {
        const e2 = this.takeExplicitFollowUpDeferred();
        this.resolveExplicitFollowUp(e2, void 0);
      }
      unstickAbandonedRoundWaiters(e2) {
        e2.unjamChain && (this.engine?.releaseWedgedRoundChain(), this.markLockUnhealthy()), this.syncing = void 0, this.followUpNeeded = false, this.cancelQueuedExplicitFollowUp(), this.abandonActiveRoundOwner?.(), this.abandonActiveRoundOwner = void 0, this.activeRoundAbandoned = void 0, this.releaseInitialRoundWaiters();
      }
      async runSync(e2 = {}) {
        if (this.isClosing()) return;
        const t2 = this.engine;
        if (void 0 === t2 || "running" !== t2.getState()) return;
        const r2 = e2.kind ?? "periodic", n2 = e2.schedule ?? ("explicit" === r2 ? "explicit" : "periodic");
        return void 0 !== this.syncing ? (this.followUpNeeded = true, "explicit" === n2 && (this.followUpSchedule = "explicit"), "explicit" === r2 ? await this.getOrCreateExplicitFollowUpDeferred() : void 0) : this.skipDeniedSyncRound() ? void 0 : await this.executeSyncRound("explicit" === r2, n2, e2.remoteUnchangedVersion);
      }
      async runFollowUpRound(e2, t2) {
        if (this.skipDeniedSyncRound()) return void this.resolveExplicitFollowUp(e2, void 0);
        const r2 = await this.executeSyncRound(true, t2);
        if (this.resolveExplicitFollowUp(e2, r2), !this.isClosing() && void 0 === this.syncing && !this.syncScheduleArmed()) {
          const e3 = this.nextPeriodicDelay();
          this.scheduleSync(e3.delayMs, e3.kind);
        }
      }
      isRoundOwner(e2, t2) {
        return this.syncing === e2 && this.roundGeneration === t2;
      }
      throwSupersededRound(e2) {
        const t2 = e2.reason;
        throw new ga({ code: "round_aborted", message: "host resumed from suspend", ...void 0 !== t2 ? { cause: t2 } : {} });
      }
      async forceSyncWithWatchdog(e2, t2, r2, n2) {
        const s2 = mi(), o2 = Date.now(), i2 = this.syncRoundTimeoutMs, a2 = this.syncRoundProgressTimeoutMs, c2 = this.syncRoundHardCapMs > 0 ? this.syncRoundHardCapMs : i2, l2 = a2 > 0;
        this.emitRoundLifecycle({ kind: "started" });
        const u2 = e2.forceSync({ signal: t2.signal, roundOwner: r2, ...void 0 !== n2 ? { remoteUnchangedVersion: n2 } : {} }).then((e3) => ({ kind: "fulfilled", summary: e3 }), (e3) => ({ kind: "rejected", error: e3 }));
        if (!l2 && 0 === i2) {
          const e3 = await u2;
          return (t2.signal.aborted || this.roundGeneration !== r2) && (this.emitRoundLifecycle({ kind: "aborted", durationMs: mi() - s2 }), nd(t2.signal, e3)), rd(e3);
        }
        let d2 = s2;
        if (l2) {
          const e3 = this.roundBodyStarted?.generation === r2 ? this.roundBodyStarted.at : void 0;
          if (void 0 === e3) {
            const e4 = await Promise.race([this.waitForRoundBody(r2).then((e5) => ({ kind: "body", at: e5 })), u2.then((e5) => ({ kind: "settled", settled: e5 }))]);
            if ("settled" === e4.kind) return this.roundBodyStartWaiters.delete(r2), (t2.signal.aborted || this.roundGeneration !== r2) && (this.emitRoundLifecycle({ kind: "aborted", durationMs: mi() - s2 }), nd(t2.signal, e4.settled)), rd(e4.settled);
            this.roundBodyStartWaiters.delete(r2), this.roundGeneration !== r2 && this.throwSupersededRound(t2.signal), d2 = e4.at;
          } else d2 = e3;
        }
        const p2 = this.resumeDetectionMode;
        let m2, h2 = i2, f2 = o2, g2 = false, y2 = false, w2 = 0, v2 = 0, _2 = 0, b2 = false, S2 = d2;
        for (; ; ) {
          if (l2 && !y2) {
            const e3 = this.progressForGeneration(r2)?.at ?? d2;
            S2 = e3;
            const t3 = e3 + a2, n4 = c2 > 0 ? d2 + c2 : Number.POSITIVE_INFINITY, s3 = Math.min(t3, n4);
            h2 = Math.max(0, s3 - mi()), f2 = Date.now(), m2 = n4 <= t3 ? "hard_cap" : "no_progress";
          } else y2 && (h2 = ed, f2 = Date.now(), y2 = false);
          const n3 = await td(u2, h2);
          if ("deadline" !== n3.kind) return (t2.signal.aborted || this.roundGeneration !== r2) && (this.emitRoundLifecycle({ kind: "aborted", durationMs: mi() - s2 }), nd(t2.signal, n3)), rd(n3);
          if (w2 = mi() - d2, this.roundGeneration !== r2 && this.throwSupersededRound(t2.signal), l2) {
            const t3 = this.progressForGeneration(r2)?.at ?? d2, n4 = c2 > 0 && w2 >= c2;
            if (!n4 && t3 > S2) continue;
            if (!n4 && (e2.isRoundWaitingOnlyForQueueSlots() || e2.isRoundRunningLocalWork())) {
              const e3 = mi();
              this.roundProgress = { at: e3, wallAt: Date.now(), generation: r2 };
              continue;
            }
          }
          if ({ wallElapsedMs: v2, lateMs: _2, late: b2 } = this.deadlineLateness({ roundWallStartedAt: o2, waitWallStartedAt: f2, waitMs: h2 }), g2 || !this.shouldYieldLateDeadline(_2, p2)) break;
          g2 = true, y2 = true, this.emitRoundLifecycle({ kind: "rearmed", durationMs: w2, lateMs: _2 }), this.onEngineWarn(`round deadline slept through (lateMs=${Math.round(_2)}); re-arming once`, void 0);
        }
        this.roundWatchdogTripped = true, this.emitRoundLifecycle({ kind: "timeout", durationMs: w2, lateMs: _2, late: b2, ...void 0 !== m2 ? { reason: m2 } : {} });
        const k2 = "hard_cap" === m2 ? c2 : "no_progress" === m2 ? a2 : i2, x2 = new ga({ code: "round_aborted", timeoutClass: "round", message: "hard_cap" === m2 ? `sync round reached its ${k2}ms hard cap` : "no_progress" === m2 ? `sync round made no progress for ${k2}ms` : `sync round stalled after ${k2}ms` }), E2 = void 0 !== m2 ? `, reason=${m2}` : "";
        this.onEngineWarn(`round stalled after ${k2}ms (elapsedMs=${Math.round(w2)}, wallElapsedMs=${Math.round(v2)}, lateMs=${Math.round(_2)}, late=${b2}${E2})`, void 0), t2.abort(x2), this.emitRoundLifecycle({ kind: "aborted", durationMs: w2 });
        const I2 = await td(u2, this.syncRoundUnwindTimeoutMs);
        if ("fulfilled" === I2.kind) return this.roundGeneration !== r2 && this.throwSupersededRound(t2.signal), this.roundUnwound = true, I2.summary;
        if ("rejected" === I2.kind) throw this.roundGeneration !== r2 && this.throwSupersededRound(t2.signal), this.roundUnwound = true, I2.error;
        const T2 = this.unwindHardCapMs(), C2 = T2 - this.syncRoundUnwindTimeoutMs, P2 = C2 > 0 ? await td(u2, C2) : { kind: "deadline" };
        if ("fulfilled" === P2.kind) return this.roundGeneration !== r2 && this.throwSupersededRound(t2.signal), this.roundUnwound = true, P2.summary;
        if ("rejected" === P2.kind) throw this.roundGeneration !== r2 && this.throwSupersededRound(t2.signal), this.roundUnwound = true, P2.error;
        throw this.roundGeneration !== r2 && this.throwSupersededRound(t2.signal), this.roundUnwound = false, e2.releaseWedgedRoundChain(), this.markLockUnhealthy(e2), new ga({ code: "round_aborted", cause: x2, timeoutClass: "round", message: `sync round did not unwind within ${T2}ms` });
      }
      unwindHardCapMs() {
        return 3 * this.syncRoundUnwindTimeoutMs;
      }
      abandonLock() {
        this.abandonRequested = true, this.markLockUnhealthy(this.disposingEngine);
      }
      holdsAbandonedLock() {
        return this.abandonRequested && !this.closeReleasedLock;
      }
      markLockUnhealthy(e2) {
        (e2 ?? this.engine)?.markLockUnhealthy(), this.emitLockEvent("lock_released_unhealthy");
      }
      noteRoundBodyStarted(e2) {
        if (void 0 === e2 || e2 !== this.roundGeneration) return;
        if (this.roundBodyStarted?.generation === e2) return;
        const t2 = mi();
        this.roundBodyStarted = { at: t2, wallAt: Date.now(), generation: e2 }, this.roundProgress = this.roundBodyStarted;
        const r2 = this.roundBodyStartWaiters.get(e2);
        if (void 0 !== r2) {
          this.roundBodyStartWaiters.delete(e2);
          for (const e3 of r2) e3(t2);
        }
      }
      waitForRoundBody(e2) {
        const t2 = this.roundBodyStarted;
        return t2?.generation === e2 ? Promise.resolve(t2.at) : new Promise((t3) => {
          const r2 = this.roundBodyStarted;
          if (r2?.generation === e2) return void t3(r2.at);
          const n2 = this.roundBodyStartWaiters.get(e2) ?? [];
          n2.push(t3), this.roundBodyStartWaiters.set(e2, n2);
        });
      }
      progressForGeneration(e2) {
        const t2 = this.roundProgress;
        if (void 0 !== t2 && t2.generation === e2) return t2;
      }
      deadlineLateness(e2) {
        const t2 = Date.now(), r2 = t2 - e2.roundWallStartedAt, n2 = Math.max(0, t2 - e2.waitWallStartedAt - e2.waitMs);
        return { wallElapsedMs: r2, lateMs: n2, late: n2 > this.lateDeadlineThresholdMs() };
      }
      lateDeadlineThresholdMs() {
        return this.resumeGapThresholdMs > 0 ? this.resumeGapThresholdMs : cu.resumeGapThresholdMs;
      }
      shouldYieldLateDeadline(e2, t2) {
        return "timer_lateness" === t2 && this.resumeGapThresholdMs > 0 && e2 > this.resumeGapThresholdMs;
      }
      async relinquishEngineLock() {
        try {
          await this.engine?.relinquishLock("lock_lost");
        } catch {
        } finally {
          this.pendingRelinquishCause = void 0;
        }
      }
      failureStreakStretchMs() {
        return Math.max(0, this.failureStreakPassiveUntilMs - Date.now());
      }
      armFailureStreakRestoreTimer() {
        this.clearFailureStreakRestoreTimer();
        const e2 = this.failureStreakStretchMs();
        if (e2 <= 0) return;
        const t2 = setTimeout(() => {
          this.failureStreakRestoreTimer === t2 && (this.failureStreakRestoreTimer = void 0, this.finishFailureStreakStretch());
        }, e2);
        t2.unref?.(), this.failureStreakRestoreTimer = t2;
      }
      reconcileFailureStreakAfterResume() {
        0 !== this.failureStreakPassiveUntilMs && (this.failureStreakStretchMs() <= 0 ? this.finishFailureStreakStretch() : (this.armFailureStreakRestoreTimer(), this.armFailureStreakVacancyProbe()));
      }
      finishFailureStreakStretch() {
        if (this.clearFailureStreakStretch(), this.isClosing()) return;
        const e2 = Math.max(this.mintGate?.remainingMs ?? 0, this.denialRemainingMs());
        e2 > 0 ? this.extendPassiveRetryInterval(e2) : this.restorePassiveRetryInterval();
      }
      clearFailureStreakRestoreTimer() {
        void 0 !== this.failureStreakRestoreTimer && (clearTimeout(this.failureStreakRestoreTimer), this.failureStreakRestoreTimer = void 0);
      }
      clearFailureStreakStretch() {
        this.failureStreakPassiveUntilMs = 0, this.clearFailureStreakRestoreTimer(), this.clearFailureStreakVacancyProbe();
      }
      vacancyProbeDelayMs() {
        const e2 = this.syncBackoff.lastDelayMs(), t2 = this.passiveRetryIntervalMs ?? 0, r2 = Math.max(e2, t2);
        return r2 > 0 ? r2 : this.syncBackoffMaxMs;
      }
      armFailureStreakVacancyProbe() {
        this.clearFailureStreakVacancyProbe();
        const e2 = this.failureStreakStretchMs();
        if (e2 <= 0 || this.isClosing() || "passive" !== this.engine?.getState()) return;
        const t2 = Math.min(e2, this.vacancyProbeDelayMs()), r2 = setTimeout(() => {
          this.failureStreakVacancyTimer === r2 && (this.failureStreakVacancyTimer = void 0, this.probeFailureStreakVacancy());
        }, t2);
        r2.unref?.(), this.failureStreakVacancyTimer = r2;
      }
      clearFailureStreakVacancyProbe() {
        void 0 !== this.failureStreakVacancyTimer && (clearTimeout(this.failureStreakVacancyTimer), this.failureStreakVacancyTimer = void 0);
      }
      async probeFailureStreakVacancy() {
        this.isClosing() || this.failureStreakStretchMs() <= 0 || "passive" === this.engine?.getState() && (await this.recontendForLock(), this.isClosing() || this.failureStreakStretchMs() <= 0 || "passive" !== this.engine?.getState() || this.armFailureStreakVacancyProbe());
      }
      async applyRoundFailurePolicy(e2) {
        if (this.isClosing()) return;
        if (this.activeRoundResumeRecoveryPending) return this.activeRoundResumeRecoveryPending = false, this.consecutiveTimeoutFailures = 0, void (this.consecutiveRoundFailures = 0);
        if (this.roundWatchdogTripped) return this.consecutiveTimeoutFailures = 0, this.consecutiveRoundFailures = 0, void (this.roundUnwound && (this.pendingRelinquishCause = "watchdog", await this.relinquishEngineLock()));
        if (!e2.roundFailed) return this.consecutiveTimeoutFailures = 0, void (this.consecutiveRoundFailures = 0);
        if (e2.failureTimeoutClassified) return this.consecutiveTimeoutFailures += 1, this.consecutiveRoundFailures = 0, void (this.consecutiveTimeoutFailures >= this.lockReleaseFailureThreshold && (this.consecutiveTimeoutFailures = 0, this.pendingRelinquishCause = "timeout_streak", await this.relinquishEngineLock()));
        this.consecutiveTimeoutFailures = 0;
        const t2 = (this.mintGate?.remainingMs ?? 0) > 0 || this.denialRemainingMs() > 0;
        if (e2.countsTowardStreak && this.lockReleaseFailureStreakThreshold > 0 && !t2) return this.consecutiveRoundFailures += 1, void (this.consecutiveRoundFailures >= this.lockReleaseFailureStreakThreshold && (this.consecutiveRoundFailures = 0, this.consecutiveTimeoutFailures = 0, this.failureStreakPassiveUntilMs = Date.now() + this.lockReleaseFailureStreakPassiveMs, this.extendPassiveRetryInterval(this.failureStreakStretchMs()), this.pendingRelinquishCause = "failure_streak", await this.relinquishEngineLock(), "passive" === this.engine?.getState() ? this.armFailureStreakRestoreTimer() : (this.clearFailureStreakStretch(), this.restorePassiveRetryInterval())));
        this.consecutiveRoundFailures = 0;
      }
      async executeSyncRound(e2, t2 = "periodic", r2) {
        if (this.isClosing()) return;
        const n2 = this.engine;
        if (void 0 === n2 || "running" !== n2.getState()) return;
        if (!this.guardedPathsSafe({ invalidateOnFailure: true })) return;
        let s2, o2;
        this.currentRoundSchedule = t2;
        const i2 = this.idleStreakEpoch;
        !this.suppressNextIdleNote || "periodic" !== t2 && "idle" !== t2 || (this.suppressNextIdleNote = false, this.idleStreakEpoch += 1);
        const a2 = new AbortController();
        this.activeRoundAbortController = a2, this.roundWatchdogTripped = false, this.roundUnwound = true, this.activeRoundResumeRecoveryPending = false;
        const c2 = ++this.roundGeneration;
        let l2, u2;
        l2 = (async () => {
          let u3 = false, d3 = false;
          try {
            const e3 = await this.forceSyncWithWatchdog(n2, a2, c2, r2);
            if (s2 = e3, this.lastSummary = e3, e3.listingComplete ? this.markMirror("synced") : e3.errors.length > 0 && this.markMirror("sync-failed"), this.emitSyncMetrics(e3), Xu(this.onSyncSummaryCallback, e3), e3.errors.length > 0) {
              u3 = true;
              for (const t3 of e3.errors) Xu(this.onSyncErrorCallback, t3);
            }
            this.isRoundOwner(l2, c2) && await this.applyRoundFailurePolicy({ roundFailed: e3.errors.length > 0, failureTimeoutClassified: (p2 = e3.errors, p2.length > 0 && p2.every((e4) => !("round_aborted" === e4.code && ad(e4.message) || "round" !== e4.timeoutClass && "rpc" !== e4.timeoutClass))), countsTowardStreak: e3.errors.length > 0 && !e3.listingComplete });
          } catch (e3) {
            if (Ki(e3)) d3 = true, s2 = void 0;
            else {
              u3 = !ld(e3), s2 = void 0, u3 && this.markMirror("sync-failed");
              const t3 = this.activeRoundResumeRecoveryPending;
              this.invalidateRetiredRoot(e3), this.invalidateClosedIndex(e3, { promise: l2, generation: c2 }), t3 || (function(e4) {
                return cd(e4, id);
              })(e3) || (this.emitThrownSyncMetrics(e3), Xu(this.onSyncErrorCallback, e3)), this.isRoundOwner(l2, c2) && await this.applyRoundFailurePolicy({ roundFailed: true, failureTimeoutClassified: od(e3), countsTowardStreak: u3 && !(e3 instanceof ga && "lock_held_by_other" === e3.code) });
            }
          } finally {
            if (this.activeRoundAbortController === a2 && (this.activeRoundAbortController = void 0), this.syncing === l2) {
              this.syncing = void 0;
              let r3 = this.syncDebounceMs, n3 = "periodic";
              if (this.resumeBackoffResetPending) this.resumeBackoffResetPending = false, this.syncBackoff.recordSuccess();
              else if (u3) this.resetIdleStreak(), r3 = this.delayAfterRoundFailure(), n3 = "backoff", this.failureStreakStretchMs() > 0 && "passive" === this.engine?.getState() && !this.isClosing() && this.armFailureStreakVacancyProbe();
              else if (d3) void 0 !== this.mintGate && this.mintGate.remainingMs <= 0 && this.restorePassiveRetryInterval();
              else if (this.syncBackoff.recordSuccess(), this.clearFailureStreakStretch(), this.restorePassiveRetryInterval(), this.noteRoundForIdleStreak(s2, i2, t2), "periodic" === n3) {
                const e3 = this.nextPeriodicDelay();
                r3 = e3.delayMs, n3 = e3.kind;
              }
              if (this.isClosing()) this.followUpNeeded && (this.followUpNeeded = false, this.cancelQueuedExplicitFollowUp());
              else if (this.resumeRecoveryInProgress) d3 && (this.followUpNeeded = true), d3 && e2 && (o2 = this.getOrCreateExplicitFollowUpDeferred());
              else if (d3 && (this.followUpNeeded = true), d3 && e2 && (o2 = this.getOrCreateExplicitFollowUpDeferred()), this.followUpNeeded) {
                this.followUpNeeded = false;
                const e3 = this.takeExplicitFollowUpDeferred(), t3 = this.followUpSchedule ?? "periodic";
                this.followUpSchedule = void 0, this.runFollowUpRound(e3, t3);
              } else this.scheduleSync(r3, n3);
            }
          }
          var p2;
        })(), this.syncing = l2;
        const d2 = new Promise((e3) => {
          u2 = e3;
        });
        this.abandonActiveRoundOwner = u2, this.activeRoundAbandoned = d2;
        try {
          await Promise.race([l2, d2]);
        } finally {
          this.abandonActiveRoundOwner === u2 && (this.abandonActiveRoundOwner = void 0, this.activeRoundAbandoned = void 0);
        }
        return void 0 !== o2 ? await o2 : e2 ? s2 : void 0;
      }
      assertPathsSafe() {
        this.validatePathsHook();
      }
      invalidateClosedIndex(e2, t2) {
        !this.indexClosedInvalidatesSession || this.indexClosedInvalidationStarted || this.isClosing() || void 0 !== t2 && !this.isRoundOwner(t2.promise, t2.generation) || !Di(e2) || (this.indexClosedInvalidationStarted = true, this.beginTeardown({ kind: "invalidate", options: { flush: false }, reason: "index_closed" }));
      }
      invalidateRetiredRoot(e2) {
        !this.rootRetiredInvalidationStarted && (function(e3) {
          let t2 = e3;
          const r2 = /* @__PURE__ */ new Set();
          for (; "object" == typeof t2 && null !== t2 && !r2.has(t2); ) {
            if (r2.add(t2), t2 instanceof ga && "root_retired" === t2.code) return true;
            t2 = "cause" in t2 ? t2.cause : void 0;
          }
          return false;
        })(e2) && (this.rootRetiredInvalidationStarted = true, this.beginTeardown({ kind: "invalidate", options: { flush: false }, reason: "root_retired" }));
      }
      guardedPathsSafe(e2) {
        try {
          return this.validatePathsHook(), true;
        } catch (t2) {
          return e2.invalidateOnFailure && this.beginTeardown({ kind: "invalidate", options: { flush: false }, reason: String(t2) }), false;
        }
      }
      delayAfterRoundFailure() {
        const e2 = this.syncBackoff.recordFailure(), t2 = this.denialRemainingMs(), r2 = this.failureStreakStretchMs();
        let n2 = e2;
        if (void 0 !== this.mintGate || r2 > 0) {
          const s2 = this.mintGate?.remainingMs ?? 0, o2 = Math.max(s2, t2, r2);
          o2 <= 0 ? this.restorePassiveRetryInterval() : (this.extendPassiveRetryInterval(o2), n2 = Math.max(e2, o2));
        } else t2 > 0 && (n2 = Math.max(e2, t2));
        return t2 <= 0 ? n2 : Math.min(Yu, Math.max(n2, t2));
      }
      skipDeniedSyncRound() {
        if (true !== this.skipDeniedMountSync?.()) return false;
        const e2 = this.mintDeniedUntilMs?.(), t2 = Date.now();
        if (void 0 === e2 || !(e2 > t2)) return this.loggedDenialUntilMs = void 0, false;
        if (this.loggedDenialUntilMs !== e2) {
          this.loggedDenialUntilMs = e2;
          const t3 = Number.isFinite(e2) ? new Date(e2).toISOString() : "session stand-down";
          this.onEngineWarn(`sync denied until ${t3}`, void 0);
        }
        if (this.emitSyncRoundSkipped("denied"), "opening" === this.mirrorSyncState && this.markMirror("sync-failed"), Number.isFinite(e2)) {
          const r2 = Math.min(Math.max(1, e2 - t2), Yu);
          this.scheduleSync(r2, "backoff");
        } else this.clearSyncTimer();
        return true;
      }
      isSyncRoundDenied() {
        return this.denialRemainingMs() > 0;
      }
      denialRemainingMs() {
        if (true !== this.skipDeniedMountSync?.()) return 0;
        const e2 = this.mintDeniedUntilMs?.(), t2 = Date.now();
        return void 0 !== e2 && e2 > t2 ? Number.isFinite(e2) ? e2 - t2 : Yu : 0;
      }
      emitSyncRoundSkipped(e2) {
        try {
          this.metricsEmitter?.syncRoundSkipped?.({ agentId: this.key, reason: e2 });
        } catch {
        }
      }
      extendPassiveRetryInterval(e2) {
        const t2 = this.passiveRetryIntervalMs ?? 0;
        this.engine?.setPassiveRetryIntervalMs(Math.max(t2, e2));
      }
      restorePassiveRetryInterval() {
        const e2 = this.failureStreakStretchMs();
        (void 0 !== this.passiveRetryIntervalMs || e2 > 0) && this.engine?.setPassiveRetryIntervalMs(Math.max(this.passiveRetryIntervalMs ?? 0, e2));
      }
      emitSyncMetrics(e2, t2) {
        const r2 = this.metricsEmitter;
        if (void 0 === r2) return;
        if (0 === e2.durationMs && 0 === e2.errors.length && !e2.listingComplete) return;
        const n2 = mi();
        this.recordFinishedListing(e2, n2);
        const s2 = this.elapsedSinceListingComplete(n2);
        try {
          Gi({ agentId: this.key, summary: e2, metricsEmitter: r2, listener: r2, pathHashSalt: this.pathHashSalt, sinceLastSuccessMs: s2 }), this.emitRoundSchedule(t2);
        } catch {
        }
      }
      emitIndexLookupClosed() {
        if (!this.indexLookupClosedEmitted) {
          this.indexLookupClosedEmitted = true;
          try {
            this.metricsEmitter?.recordIndexLookupClosed?.({ agentId: this.key });
          } catch {
          }
        }
      }
      emitSessionState() {
        try {
          this.metricsEmitter?.onSessionState?.({ agentId: this.key, state: this.conversationActivity });
        } catch {
        }
      }
      emitRoundSchedule(e2) {
        try {
          this.metricsEmitter?.onSyncRound?.({ agentId: this.key, schedule: e2 ?? this.currentRoundSchedule });
        } catch {
        }
      }
      emitRoundLifecycle(e2) {
        try {
          this.metricsEmitter?.onRoundLifecycle?.({ agentId: this.key, ...e2 });
        } catch {
        }
      }
      emitLockEvent(e2) {
        try {
          this.metricsEmitter?.onLockEvent?.({ agentId: this.key, kind: e2 });
        } catch {
        }
      }
      emitLockRelinquished(e2) {
        try {
          this.metricsEmitter?.onLockEvent?.({ agentId: this.key, kind: "lock_relinquished", cause: e2 });
        } catch {
        }
      }
      emitLockContended(e2) {
        const t2 = "ide" === e2.kind || "cli" === e2.kind || "private_worker" === e2.kind ? e2.kind : "unknown";
        try {
          this.metricsEmitter?.onLockEvent?.({ agentId: this.key, kind: "lock_contended", holderKind: t2, samePid: e2.samePid });
        } catch {
        }
      }
      emitResumeDetected(e2) {
        const t2 = { agentId: this.key, gapMs: e2 };
        Xu(this.onResumeDetectedCallback, t2);
        try {
          this.metricsEmitter?.onResumeDetected?.(t2);
        } catch {
        }
      }
      emitThrownSyncMetrics(e2, t2) {
        const r2 = this.metricsEmitter;
        if (void 0 === r2) return;
        const n2 = e2 instanceof ga ? e2.code : Di(e2) ? "index_closed" : "unknown", s2 = "unknown" === n2 ? (function(e3) {
          if (e3 instanceof Error) {
            for (const [t3, r3] of dd) if (e3 instanceof t3) return r3;
            return e3 instanceof ne.T ? "ConnectError" : ud.test(e3.name) ? e3.name : "Error";
          }
        })(e2) : void 0, o2 = ld(e2) ? void 0 : e2 instanceof ga && void 0 !== e2.timeoutClass ? e2.timeoutClass : pd(e2) ? "rpc" : void 0, i2 = this.elapsedSinceListingComplete(mi());
        try {
          this.emitRoundSchedule(t2), r2.onError?.({ agentId: this.key, op: "unknown", errorClass: n2, ...void 0 !== s2 ? { errorName: s2 } : {}, ...void 0 !== o2 ? { timeoutClass: o2 } : {} }), r2.onRoundCompleted?.({ agentId: this.key, durationMs: 0, filesPushed: 0, filesPulled: 0, filesSkipped: 0, bytesPushed: 0, bytesPulled: 0, refusals: 0, filesConflicted: 0, identicalContentConflictsSuppressed: 0, conflictProtectionDowngrades: 0, legacyProbes: 0, pushEntriesParked: 0, pullsDeferred: 0, pullsSkippedPendingDelete: 0, filesDeletedRemote: 0, filesDeletedLocal: 0, deleteConflicts: 0, scanDeletesJournaled: 0, recoveryDisarms: 0, identityRecoveryWipeFailed: false, legacyRowsRestored: 0, listingComplete: false, errorCount: 1, failed: true, walkMs: 0, hashMs: 0, presignMs: 0, uploadMs: 0, listMs: 0, downloadMs: 0, scope: "full", ...void 0 !== i2 ? { sinceLastSuccessMs: i2 } : {} });
        } catch {
        }
      }
      recordFinishedListing(e2, t2) {
        e2.listingComplete && "full" === (e2.scope ?? "full") && (this.lastListingCompleteMonoMs = t2);
      }
      elapsedSinceListingComplete(e2) {
        const t2 = this.lastListingCompleteMonoMs;
        if (void 0 !== t2) return Math.max(0, e2 - t2);
      }
    }
    function fd(e2, t2) {
      const r2 = e2.get(t2);
      "open" === r2?.kind && r2.session.isClosed() && e2.delete(t2);
    }
    hd.RESUME_DRAIN_MAX_LAPS = 2;
    class gd {
      constructor() {
        this.slots = /* @__PURE__ */ new Map(), this.trackedSessions = /* @__PURE__ */ new Set(), this.keyGeneration = /* @__PURE__ */ new Map(), this.openAttempts = /* @__PURE__ */ new Map(), this.closeAllActive = false, this.inFlightOpens = /* @__PURE__ */ new Set(), this.abandonedSessions = /* @__PURE__ */ new Set();
      }
      get(e2) {
        fd(this.slots, e2);
        const t2 = this.slots.get(e2);
        return (function(e3) {
          return "open" === e3?.kind;
        })(t2) ? t2.session : void 0;
      }
      has(e2) {
        return fd(this.slots, e2), this.slots.has(e2);
      }
      getSlot(e2) {
        return this.slots.get(e2);
      }
      track(e2) {
        this.trackedSessions.add(e2);
      }
      abandonLocks() {
        const e2 = /* @__PURE__ */ new Set(), t2 = (t3) => {
          void 0 === t3 || e2.has(t3) || (e2.add(t3), t3.isClosed() ? this.trackedSessions.delete(t3) : (t3.abandonLock(), this.abandonedSessions.add(t3)));
        };
        for (const e3 of this.trackedSessions) t2(e3);
        for (const e3 of this.slots.values()) "open" !== e3.kind && "closing" !== e3.kind || t2(e3.session);
      }
      holdsAbandonedLock() {
        let e2 = false;
        for (const t2 of this.abandonedSessions) t2.holdsAbandonedLock() ? e2 = true : this.abandonedSessions.delete(t2);
        return e2;
      }
      whenAbandonedLockReleased() {
        const e2 = [];
        for (const t2 of this.abandonedSessions) t2.holdsAbandonedLock() && e2.push(t2.whenAbandonedLockReleased());
        return 0 === e2.length ? Promise.resolve() : Promise.all(e2).then(() => {
        });
      }
      async open(e2, t2) {
        if (this.closeAllActive) throw new Error(`AgentStoreSyncSessionController is closing; refusing open for ${e2}`);
        const r2 = this.currentGeneration(e2);
        let n2;
        const s2 = new Promise((e3) => {
          n2 = e3;
        });
        this.inFlightOpens.add(s2);
        try {
          const n3 = this.openAttempts.get(e2), o2 = n3?.get(r2);
          if (void 0 !== o2) return await o2.promise;
          const i2 = n3 ?? /* @__PURE__ */ new Map();
          void 0 === n3 && this.openAttempts.set(e2, i2);
          const a2 = this.openAfterTracked(e2, t2, r2);
          i2.set(r2, { generation: r2, promise: a2, completion: s2, closeOptions: void 0 });
          try {
            return await a2;
          } finally {
            const t3 = this.openAttempts.get(e2);
            t3?.get(r2)?.promise === a2 && (t3.delete(r2), 0 === t3.size && this.openAttempts.delete(e2));
          }
        } finally {
          n2(), this.inFlightOpens.delete(s2);
        }
      }
      async openAfterTracked(e2, t2, r2) {
        await this.awaitClosingSlot(e2);
        for (const t3 of this.earlierOpenAttempts(e2, r2)) await t3.completion;
        if (this.closeAllActive) throw new Error(`AgentStoreSyncSessionController is closing; refusing open for ${e2}`);
        if (!this.isGenerationCurrent(e2, r2)) throw new Error(`AgentStoreSyncSession open for ${e2} was superseded before starting`);
        fd(this.slots, e2);
        const n2 = this.slots.get(e2);
        if ("open" === n2?.kind) return n2.session;
        if ("opening" === n2?.kind) return await n2.promise;
        const s2 = this.openInternal(e2, t2, r2);
        this.slots.set(e2, { kind: "opening", generation: r2, promise: s2 });
        try {
          const t3 = await s2;
          if (!this.isGenerationCurrent(e2, r2)) throw await this.closeSession(t3, this.supersededCloseOptions(e2, r2)), new Error(`AgentStoreSyncSession open for ${e2} was superseded before publish`);
          if (this.closeAllActive) throw await this.closeSession(t3, this.supersededCloseOptions(e2, r2)), new Error(`AgentStoreSyncSessionController is closing; refusing open for ${e2}`);
          const n3 = this.slots.get(e2);
          if ("opening" === n3?.kind && n3.generation === r2 && n3.promise === s2) return this.slots.set(e2, { kind: "open", generation: r2, session: t3 }), t3;
          throw await this.closeSession(t3, this.supersededCloseOptions(e2, r2)), new Error(`AgentStoreSyncSession open for ${e2} was superseded before publish`);
        } catch (t3) {
          const n3 = this.slots.get(e2);
          throw "opening" === n3?.kind && n3.generation === r2 && n3.promise === s2 && this.slots.delete(e2), t3;
        }
      }
      async forceSync(e2) {
        const t2 = this.get(e2);
        if (void 0 !== t2) return await t2.forceSync();
      }
      async syncPath(e2) {
        const t2 = this.get(e2.key);
        if (void 0 !== t2) return await t2.syncPath(e2.relPath, e2.options);
      }
      async syncPaths(e2, t2, r2) {
        const n2 = this.get(e2);
        if (void 0 !== n2) return await n2.syncPaths(t2, r2);
      }
      async close(e2, t2) {
        const r2 = this.slots.get(e2), n2 = this.currentGeneration(e2), s2 = this.openAttempts.get(e2)?.get(n2), o2 = this.openAttempts.get(e2);
        if (void 0 !== o2) for (const e3 of o2.values()) e3.closeOptions = { flush: true === e3.closeOptions?.flush || t2.flush };
        if (void 0 === r2 && void 0 === s2 || this.supersedeKey(e2), void 0 !== r2) if ("closing" !== r2.kind) {
          if ("opening" === r2.kind) {
            const n3 = r2.promise, s3 = {}, o3 = n3.then(async (e3) => {
              s3.session = e3, await this.closeSession(e3, t2);
            }).catch(() => {
            });
            this.slots.set(e2, { kind: "closing", generation: this.currentGeneration(e2), promise: o3, get session() {
              return s3.session;
            } });
            try {
              await o3;
            } finally {
              const t3 = this.slots.get(e2);
              "closing" === t3?.kind && t3.promise === o3 && this.slots.delete(e2);
            }
            return;
          }
          await this.closeOpenSession(e2, r2.session, t2, this.currentGeneration(e2));
        } else await r2.promise;
      }
      async closeAll(e2) {
        this.closeAllActive = true;
        try {
          for (const t3 of this.openAttempts.values()) for (const r2 of t3.values()) r2.closeOptions = { flush: true === r2.closeOptions?.flush || e2.flush };
          const t2 = [...this.slots.keys()];
          await Promise.all(t2.map((t3) => this.close(t3, e2))), this.inFlightOpens.size > 0 && await Promise.all([...this.inFlightOpens]), this.slots.clear(), this.keyGeneration.clear(), this.openAttempts.clear();
        } finally {
          this.closeAllActive = false;
        }
      }
      currentGeneration(e2) {
        return this.keyGeneration.get(e2) ?? 0;
      }
      supersedeKey(e2) {
        this.keyGeneration.set(e2, this.currentGeneration(e2) + 1);
      }
      isGenerationCurrent(e2, t2) {
        return !this.closeAllActive && this.currentGeneration(e2) === t2;
      }
      async awaitClosingSlot(e2) {
        let t2 = this.slots.get(e2);
        for (; "closing" === t2?.kind; ) await t2.promise, fd(this.slots, e2), t2 = this.slots.get(e2);
      }
      earlierOpenAttempts(e2, t2) {
        const r2 = this.openAttempts.get(e2);
        return void 0 === r2 ? [] : [...r2.values()].filter((e3) => e3.generation < t2);
      }
      supersededCloseOptions(e2, t2) {
        const r2 = this.openAttempts.get(e2)?.get(t2)?.closeOptions;
        return r2 ?? { flush: false };
      }
      async openInternal(e2, t2, r2) {
        const n2 = await t2(e2);
        if (!this.isGenerationCurrent(e2, r2)) throw await this.closeSession(n2, this.supersededCloseOptions(e2, r2)), new Error(`AgentStoreSyncSession open for ${e2} was superseded before publish`);
        const s2 = this.slots.get(e2);
        if ("opening" !== s2?.kind || s2.generation !== r2) throw await this.closeSession(n2, this.supersededCloseOptions(e2, r2)), new Error(`AgentStoreSyncSession open for ${e2} was superseded before publish`);
        if (n2.isClosing()) throw await n2.awaitTeardown(), new Error(`AgentStoreSyncSession open for ${e2} was invalidated during open`);
        return n2;
      }
      async closeOpenSession(e2, t2, r2, n2) {
        const s2 = this.slots.get(e2);
        if ("closing" === s2?.kind) return void await s2.promise;
        const o2 = this.closeSession(t2, r2);
        this.slots.set(e2, { kind: "closing", generation: n2, promise: o2, session: t2 });
        try {
          await o2;
        } finally {
          const t3 = this.slots.get(e2);
          "closing" === t3?.kind && t3.promise === o2 && this.slots.delete(e2);
        }
      }
      async closeSession(e2, t2) {
        if (e2.isClosed()) this.trackedSessions.delete(e2);
        else try {
          await e2.close(t2);
        } catch {
        } finally {
          e2.isClosed() && this.trackedSessions.delete(e2);
        }
      }
    }
  }