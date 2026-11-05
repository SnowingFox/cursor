// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: (footer) range:714652..1632491
// basis: webpack-container confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
}, t = {};
  function s(e2) {
    var n2 = t[e2];
    if (void 0 !== n2) return n2.exports;
    var o2 = t[e2] = { exports: {} };
    return a[e2].call(o2.exports, o2, o2.exports, s), o2.exports;
  }
  n = Object.getPrototypeOf ? (e2) => Object.getPrototypeOf(e2) : (e2) => e2.__proto__, s.t = function(a2, t2) {
    if (1 & t2 && (a2 = this(a2)), 8 & t2) return a2;
    if ("object" == typeof a2 && a2) {
      if (4 & t2 && a2.__esModule) return a2;
      if (16 & t2 && "function" == typeof a2.then) return a2;
    }
    var o2 = /* @__PURE__ */ Object.create(null);
    s.r(o2);
    var r2 = {};
    e = e || [null, n({}), n([]), n(n)];
    for (var i2 = 2 & t2 && a2; "object" == typeof i2 && !~e.indexOf(i2); i2 = n(i2)) Object.getOwnPropertyNames(i2).forEach((e2) => r2[e2] = () => a2[e2]);
    return r2.default = () => a2, s.d(o2, r2), o2;
  }, s.d = (e2, n2) => {
    for (var a2 in n2) s.o(n2, a2) && !s.o(e2, a2) && Object.defineProperty(e2, a2, { enumerable: true, get: n2[a2] });
  }, s.o = (e2, n2) => Object.prototype.hasOwnProperty.call(e2, n2), s.r = (e2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
  };
  var o = {};
  (() => {
    "use strict";
    s.r(o), s.d(o, { activate: () => iP, deactivate: () => AP });
    const e2 = { tab: { why: "Every keystroke ships the file body, filename and edit history to Cursor's Tab model.", rpcs: ["aiserver.v1.AiService/StreamCpp", "aiserver.v1.AiService/CppAppend", "aiserver.v1.FileSyncService/FSUploadFile", "aiserver.v1.FileSyncService/FSSyncFile"] }, cmdk: { why: "Sends the instruction, selection, file and reranked context to Cursor-managed models.", rpcs: ["aiserver.v1.CmdKService/StreamCmdK", "aiserver.v1.CmdKService/StreamTerminalCmdK", "aiserver.v1.CmdKService/RerankCmdKContext", "aiserver.v1.CmdKService/RerankTerminalCmdKContext"] }, "chat-auto-title": { why: "Sends the first user message to Cursor; the chat's own model names it on the team's gateway instead.", rpcs: ["aiserver.v1.AiService/NameTab"] }, "commit-message": { why: "Sends the staged diff to Cursor.", rpcs: ["aiserver.v1.AiService/WriteGitCommitMessage"] }, "branch-name": { why: "Sends the diff or prompt to Cursor.", rpcs: ["aiserver.v1.AiService/WriteGitBranchName"] }, "conversation-classification": { why: "Uploads the full conversation for analytics.", rpcs: ["aiserver.v1.AnalyticsService/IngestConversation"] }, "transcript-overview": { why: "The overview is generated server-side from the conversation text.", rpcs: ["agent.v1.AgentService/CreateTranscriptOverview"] }, "agent-review": { why: "Streams the working-tree diff to Cursor.", rpcs: ["aiserver.v1.AiService/StreamBugBotAgentic"] }, "codebase-indexing": { why: "Uploads file contents and paths to Cursor's embedding service.", rpcs: ["aiserver.v1.RepositoryService/FastRepoInitHandshakeV2", "aiserver.v1.RepositoryService/SyncMerkleSubtreeV2", "aiserver.v1.RepositoryService/FastUpdateFileV2", "aiserver.v1.RepositoryService/FastRepoSyncComplete", "aiserver.v1.RepositoryService/EnsureIndexCreated"] }, "prompt-quality-upload": { why: "Uploads a local agent run (every model invocation) to Cursor.", rpcs: ["agent.v1.AgentService/UploadLocalAgentRunToPromptQuality"] }, "share-conversation": { why: "Publishes the transcript to Cursor.", rpcs: ["aiserver.v1.DashboardService/ShareConversation"] }, "knowledge-base": { why: "Knowledge base items and agent memories are stored on Cursor's servers.", rpcs: ["aiserver.v1.AiService/KnowledgeBaseAdd", "aiserver.v1.AiService/KnowledgeBaseUpdate", "aiserver.v1.AiService/KnowledgeBaseList"] }, "web-fetch": { why: "The agent's web fetch tool sends the URL to Cursor; the private-inference tool client refuses it.", rpcs: ["aiserver.v1.AiService/RunWebFetch"] }, "image-generation": { why: "The agent's image generation tool sends the description and reference images to Cursor; the private-inference tool client refuses it.", rpcs: ["aiserver.v1.AiService/RunGenerateImage"] }, "video-generation": { why: "The agent's video generation tool sends the prompt, source image, and reference images to Cursor; the private-inference tool client refuses it.", rpcs: ["aiserver.v1.AiService/RunGenerateVideo"] }, "x-search": { why: "The agent's X search tool sends the query to Cursor; the private-inference tool client refuses it.", rpcs: ["aiserver.v1.AiService/RunXSearch"] }, "scm-integration": { why: "Pull-request metadata, diffs, checks, comments and merge actions go through Cursor's SCM service, as does the GitHub/GitLab connection probe.", rpcs: ["aiserver.v1.SCMService/GetPullRequest", "aiserver.v1.SCMService/GetPullRequestStack", "aiserver.v1.SCMService/BatchGetPullRequests", "aiserver.v1.SCMService/BatchGetPullRequestStatus", "aiserver.v1.SCMService/GetPullRequestDiff", "aiserver.v1.SCMService/GetPullRequestFileContents", "aiserver.v1.SCMService/GetPullRequestChecks", "aiserver.v1.SCMService/GetPullRequestCheckLogExcerpt", "aiserver.v1.SCMService/GetPullRequestCodeowners", "aiserver.v1.SCMService/GetSCMPullRequestCommits", "aiserver.v1.SCMService/GetSCMPullRequestTimelineEvents", "aiserver.v1.SCMService/GetBranchComparison", "aiserver.v1.SCMService/GetPullRequestForBranch", "aiserver.v1.SCMService/BatchGetPullRequestForBranch", "aiserver.v1.SCMService/StreamPullRequestUpdates", "aiserver.v1.SCMService/MergePullRequest", "aiserver.v1.SCMService/UpdatePullRequestTitle", "aiserver.v1.SCMService/MakePullRequestReady", "aiserver.v1.SCMService/ClosePullRequest", "aiserver.v1.SCMService/ReopenPullRequest", "aiserver.v1.SCMService/EnablePullRequestAutoMerge", "aiserver.v1.SCMService/DisablePullRequestAutoMerge", "aiserver.v1.SCMService/RemovePullRequestFromMergeQueue", "aiserver.v1.BackgroundComposerService/GetPullRequestDiscussions", "aiserver.v1.BackgroundComposerService/DeletePullRequestReviewComment", "aiserver.v1.DashboardService/GetScmConnectionStatus"] }, "online-metrics": { why: "After an agent turn edits files, uploads each file's path and diff to Cursor, plus the added lines and original contents when the server config asks for them.", rpcs: ["aiserver.v1.OnlineMetricsService/ReportAgentSnapshot"] }, "codebase-telemetry": { why: "Uploads git packfiles of the workspace's repositories to Cursor and reports which repositories the workspace contains.", rpcs: ["aiserver.v1.CodebaseSnapshotService/RegisterCodebase", "aiserver.v1.CodebaseSnapshotService/CreatePackfileUpload", "aiserver.v1.CodebaseSnapshotService/UploadPackfileChunk", "aiserver.v1.CodebaseSnapshotService/CompletePackfileUpload", "aiserver.v1.CodebaseProtectionService/ReportWorkspaceRepositories", "aiserver.v1.CodebaseProtectionService/CheckCodebaseTelemetryPolicy"] }, "github-context": { why: "Pull-request, issue and commit context is fetched from GitHub with the user's GitHub token, proxied through Cursor when the gate is on; all GitHub egress stays off until it is decided.", rpcs: ["aiserver.v1.BackgroundComposerService/MakeGithubRequest"] } };
    const n2 = require("vscode");
    class a2 {
      static init() {
        a2.output = n2.window.createOutputChannel("Cursor Agent Review", { log: true });
      }
      static isTrace() {
        return a2.output?.logLevel === n2.LogLevel.Trace;
      }
      static error(e3, ...n3) {
        a2.output?.error(e3, ...n3);
      }
      static warn(e3, ...n3) {
        a2.output?.warn(e3, ...n3);
      }
      static info(e3, ...n3) {
        a2.output?.info(e3, ...n3);
      }
      static debug(e3, ...n3) {
        a2.output?.debug(e3, ...n3);
      }
      static trace(e3, ...n3) {
        a2.output?.trace(e3, ...n3);
      }
    }
    class t2 {
      static init() {
        t2.output = n2.window.createOutputChannel("Cursor-commits debug logs", { log: true });
      }
      static error(e3, ...n3) {
        t2.output?.error(e3, ...n3);
      }
      static warn(e3, ...n3) {
        t2.output?.warn(e3, ...n3);
      }
      static info(e3, ...n3) {
        t2.output?.info(e3, ...n3);
      }
      static debug(e3, ...n3) {
        t2.output?.debug(e3, ...n3);
      }
      static trace(e3, ...n3) {
        t2.output?.trace(e3, ...n3);
      }
    }
    const r2 = (function() {
      if ("object" == typeof crypto && "function" == typeof crypto.randomUUID) return crypto.randomUUID.bind(crypto);
      let e3;
      e3 = "object" == typeof crypto && "function" == typeof crypto.getRandomValues ? crypto.getRandomValues.bind(crypto) : function(e4) {
        for (let n4 = 0; n4 < e4.length; n4++) e4[n4] = Math.floor(256 * Math.random());
        return e4;
      };
      const n3 = new Uint8Array(16), a3 = [];
      for (let e4 = 0; e4 < 256; e4++) a3.push(e4.toString(16).padStart(2, "0"));
      return function() {
        e3(n3), n3[6] = 15 & n3[6] | 64, n3[8] = 63 & n3[8] | 128;
        let t3 = 0, s2 = "";
        return s2 += a3[n3[t3++]], s2 += a3[n3[t3++]], s2 += a3[n3[t3++]], s2 += a3[n3[t3++]], s2 += "-", s2 += a3[n3[t3++]], s2 += a3[n3[t3++]], s2 += "-", s2 += a3[n3[t3++]], s2 += a3[n3[t3++]], s2 += "-", s2 += a3[n3[t3++]], s2 += a3[n3[t3++]], s2 += "-", s2 += a3[n3[t3++]], s2 += a3[n3[t3++]], s2 += a3[n3[t3++]], s2 += a3[n3[t3++]], s2 += a3[n3[t3++]], s2 += a3[n3[t3++]], s2;
      };
    })();
    class i2 {
      constructor(e3, n3) {
        this.context = e3, this.config = n3, this.pending = /* @__PURE__ */ new Map();
      }
      async ensureWorker() {
        if (this.worker) return this.worker;
        if (!this.context) throw new Error("DiffWorkerManager not initialized");
        const { Worker: e3 } = await Promise.resolve().then(s.t.bind(s, 5919, 23)), a3 = n2.extensions.getExtension("anysphere.cursor-commits")?.packageJSON?.main || "", o2 = n2.Uri.joinPath(this.context.extensionUri, "worker", -1 !== a3.indexOf("/dist/") ? "dist" : "out", "main.js").fsPath;
        this.worker = new e3(o2, {}), this.worker.on("message", (e4) => {
          const n3 = this.pending.get(e4.id);
          n3 && (this.pending.delete(e4.id), e4.error ? n3.reject(Object.assign(new Error(e4.error.message), { code: e4.error.code, stack: e4.error.stack })) : e4.response ? n3.resolve(e4.response) : n3.reject(new Error("Worker sent empty message")));
        });
        const r3 = (e4) => {
          try {
            for (const [, n3] of this.pending) n3.reject(e4 instanceof Error ? e4 : new Error(String(e4)));
          } finally {
            this.pending.clear();
            try {
              this.worker?.terminate();
            } catch (e5) {
              t2.error("Failed to terminate worker after fatal", e5);
            }
            this.worker = void 0;
          }
        };
        return this.worker.on("error", r3), this.worker.on("messageerror", r3), this.worker.on("exit", (e4) => {
          0 !== e4 ? r3(new Error(`Worker exited with code ${e4}`)) : this.worker = void 0;
        }), this.worker;
      }
      armDisposeTimer() {
        this.disposeTimer && clearTimeout(this.disposeTimer), this.disposeTimer = setTimeout(() => {
          try {
            this.worker?.terminate();
          } catch (e3) {
            t2.error("Failed to terminate worker", e3);
          }
          this.worker = void 0;
        }, 60 * this.config.timeoutAfterNoRequestsForMinutes * 1e3);
      }
      async call(e3) {
        const n3 = await this.ensureWorker();
        this.armDisposeTimer();
        const a3 = r2();
        return new Promise((t3, s2) => {
          this.pending.set(a3, { resolve: t3, reject: s2 });
          try {
            n3.postMessage({ id: a3, request: e3 });
          } catch (e4) {
            this.pending.delete(a3), s2(e4);
          }
        });
      }
      dispose() {
        this.disposeTimer && (clearTimeout(this.disposeTimer), this.disposeTimer = void 0);
        try {
          this.worker?.terminate();
        } catch (e3) {
          t2.error("Failed to terminate worker", e3);
        }
        this.worker = void 0, this.pending.clear();
      }
    }
    let A;
    class l {
      constructor(e3) {
        if (this.context = e3, A) throw new Error("DiffService already initialized");
        A = this, this.workerManager = new i2(e3, { timeoutAfterNoRequestsForMinutes: 5 });
      }
      async computeLinesDiff(e3) {
        const n3 = await this.workerManager.call({ kind: "computeLinesDiff", request: e3 });
        if ("computeLinesDiff" !== n3.kind) throw new Error("Unexpected response kind");
        return n3.response;
      }
      dispose() {
        this.workerManager.dispose(), A = void 0;
      }
    }
    var c = s(5853);
    const [m] = process.versions.node.split(".").map((e3) => parseInt(e3, 10));
    var d;
    function g(e3) {
      const n3 = d[e3];
      return "string" != typeof n3 ? e3.toString() : n3[0].toLowerCase() + n3.substring(1).replace(/[A-Z]/g, (e4) => "_" + e4.toLowerCase());
    }
    let u;
    m < 18 && void 0 === globalThis.Headers && (globalThis.Headers = c.Headers), (function(e3) {
      e3[e3.Canceled = 1] = "Canceled", e3[e3.Unknown = 2] = "Unknown", e3[e3.InvalidArgument = 3] = "InvalidArgument", e3[e3.DeadlineExceeded = 4] = "DeadlineExceeded", e3[e3.NotFound = 5] = "NotFound", e3[e3.AlreadyExists = 6] = "AlreadyExists", e3[e3.PermissionDenied = 7] = "PermissionDenied", e3[e3.ResourceExhausted = 8] = "ResourceExhausted", e3[e3.FailedPrecondition = 9] = "FailedPrecondition", e3[e3.Aborted = 10] = "Aborted", e3[e3.OutOfRange = 11] = "OutOfRange", e3[e3.Unimplemented = 12] = "Unimplemented", e3[e3.Internal = 13] = "Internal", e3[e3.Unavailable = 14] = "Unavailable", e3[e3.DataLoss = 15] = "DataLoss", e3[e3.Unauthenticated = 16] = "Unauthenticated";
    })(d || (d = {}));
    class E extends Error {
      constructor(e3, n3 = d.Unknown, a3, t3, s2) {
        super((function(e4, n4) {
          return e4.length ? `[${g(n4)}] ${e4}` : `[${g(n4)}]`;
        })(e3, n3)), this.name = "ConnectError", Object.setPrototypeOf(this, new.target.prototype), this.rawMessage = e3, this.code = n3, this.metadata = new Headers(null != a3 ? a3 : {}), this.details = null != t3 ? t3 : [], this.cause = s2;
      }
      static from(e3, n3 = d.Unknown) {
        return e3 instanceof E ? e3 : e3 instanceof Error ? "AbortError" == e3.name ? new E(e3.message, d.Canceled) : new E(e3.message, n3, void 0, void 0, e3) : new E(String(e3), n3, void 0, void 0, e3);
      }
      static [Symbol.hasInstance](e3) {
        return e3 instanceof Error && (Object.getPrototypeOf(e3) === E.prototype || "ConnectError" === e3.name && "code" in e3 && "number" == typeof e3.code && "metadata" in e3 && "details" in e3 && Array.isArray(e3.details) && "rawMessage" in e3 && "string" == typeof e3.rawMessage && "cause" in e3);
      }
      findDetails(e3) {
        const n3 = "typeName" in e3 ? { findMessage: (n4) => n4 === e3.typeName ? e3 : void 0 } : e3, a3 = [];
        for (const e4 of this.details) {
          if ("getType" in e4) {
            n3.findMessage(e4.getType().typeName) && a3.push(e4);
            continue;
          }
          const t3 = n3.findMessage(e4.type);
          if (t3) try {
            a3.push(t3.fromBinary(e4.value));
          } catch (e5) {
          }
        }
        return a3;
      }
    }
    const p = 4294967295, T = p;
    function k(e3, n3, a3 = false) {
      if (n3 > e3) {
        let t3 = `message size is larger than configured readMaxBytes ${e3}`;
        throw a3 && (t3 = `message size ${n3} is larger than configured readMaxBytes ${e3}`), new E(t3, d.ResourceExhausted);
      }
    }
    var I, h = s(3106), _ = s(9023);
    function C(e3) {
      let n3 = d.Internal;
      const a3 = f(e3).map(B);
      a3.some((e4) => "ERR_STREAM_WRITE_AFTER_END" == e4.code) || a3.some((e4) => "ERR_STREAM_DESTROYED" == e4.code || "ERR_HTTP2_INVALID_STREAM" == e4.code || "ECONNRESET" == e4.code) ? n3 = d.Aborted : a3.some((e4) => "ETIMEDOUT" == e4.code || "ENOTFOUND" == e4.code || "EAI_AGAIN" == e4.code || "ECONNREFUSED" == e4.code) && (n3 = d.Unavailable);
      const t3 = E.from(e3, n3);
      return t3 !== e3 && (t3.cause = e3), t3;
    }
    function f(e3) {
      const n3 = [];
      for (; e3 instanceof Error && !n3.includes(e3) && (n3.push(e3), "cause" in e3); ) e3 = e3.cause;
      return n3;
    }
    function B(e3) {
      const n3 = {};
      return e3 instanceof Error && ("code" in e3 && "string" == typeof e3.code && (n3.code = e3.code), "syscall" in e3 && "string" == typeof e3.syscall && (n3.syscall = e3.syscall)), n3;
    }
    !(function(e3) {
      e3[e3.PROTOCOL_ERROR = 1] = "PROTOCOL_ERROR", e3[e3.INTERNAL_ERROR = 2] = "INTERNAL_ERROR", e3[e3.FLOW_CONTROL_ERROR = 3] = "FLOW_CONTROL_ERROR", e3[e3.SETTINGS_TIMEOUT = 4] = "SETTINGS_TIMEOUT", e3[e3.STREAM_CLOSED = 5] = "STREAM_CLOSED", e3[e3.FRAME_SIZE_ERROR = 6] = "FRAME_SIZE_ERROR", e3[e3.REFUSED_STREAM = 7] = "REFUSED_STREAM", e3[e3.CANCEL = 8] = "CANCEL", e3[e3.COMPRESSION_ERROR = 9] = "COMPRESSION_ERROR", e3[e3.CONNECT_ERROR = 10] = "CONNECT_ERROR", e3[e3.ENHANCE_YOUR_CALM = 11] = "ENHANCE_YOUR_CALM", e3[e3.INADEQUATE_SECURITY = 12] = "INADEQUATE_SECURITY", e3[e3.HTTP_1_1_REQUIRED = 13] = "HTTP_1_1_REQUIRED";
    })(I || (I = {}));
    const Q = (0, _.promisify)(h.gzip), y = (0, _.promisify)(h.gunzip), R = (0, _.promisify)(h.brotliCompress), N = (0, _.promisify)(h.brotliDecompress), v = { name: "gzip", compress: (e3) => Q(e3, {}), decompress: (e3, n3) => 0 == e3.length ? Promise.resolve(new Uint8Array(0)) : D(y(e3, { maxOutputLength: n3 }), n3) }, S = { name: "br", compress: (e3) => R(e3, {}), decompress: (e3, n3) => 0 == e3.length ? Promise.resolve(new Uint8Array(0)) : D(N(e3, { maxOutputLength: n3 }), n3) };
    function D(e3, n3) {
      return e3.catch((e4) => {
        const a3 = B(e4);
        let t3 = d.Internal, s2 = "decompression failed";
        switch (a3.code) {
          case "ERR_BUFFER_TOO_LARGE":
            t3 = d.ResourceExhausted, s2 = `message is larger than configured readMaxBytes ${n3} after decompression`;
            break;
          case "Z_DATA_ERROR":
          case "ERR_PADDING_2":
            t3 = d.InvalidArgument;
            break;
          default:
            void 0 !== a3.code && a3.code.startsWith("ERR__ERROR_FORMAT_") && (t3 = d.InvalidArgument);
        }
        return Promise.reject(new E(s2, t3, void 0, void 0, e4));
      });
    }
    var w = s(5675), b = s(8611);
    const M = require("https");
    function F(e3) {
      const n3 = new Headers();
      for (const [a3, t3] of Object.entries(e3)) if (!a3.startsWith(":") && void 0 !== t3) if ("string" == typeof t3) n3.append(a3, t3);
      else if ("number" == typeof t3) n3.append(a3, String(t3));
      else for (const e4 of t3) n3.append(a3, e4);
      return n3;
    }
    function O(e3, n3) {
      if (void 0 === e3 && void 0 === n3) return;
      const a3 = /* @__PURE__ */ Object.create(null);
      if (void 0 !== n3) for (const [e4, t3] of Object.entries(n3)) Array.isArray(t3) ? a3[e4] = t3.concat() : void 0 !== t3 && (a3[e4] = t3);
      if (void 0 !== e3) if (Array.isArray(e3)) for (const [n4, t3] of e3) U(a3, n4, t3);
      else if ("forEach" in e3) "function" == typeof e3.forEach && e3.forEach((e4, n4) => {
        U(a3, n4, e4);
      });
      else for (const [n4, t3] of Object.entries(e3)) U(a3, n4, t3);
      return a3;
    }
    function U(e3, n3, a3) {
      const t3 = e3[n3 = n3.toLowerCase()];
      Array.isArray(t3) ? t3.push(a3) : e3[n3] = void 0 === t3 ? a3 : [t3.toString(), a3];
    }
    function L(e3) {
      if (!e3.aborted) return;
      if (void 0 !== e3.reason) return e3.reason;
      const n3 = new Error("This operation was aborted");
      return n3.name = "AbortError", n3;
    }
    class P {
      state() {
        return "ready" == this.s.t ? void 0 !== this.verifying ? "verifying" : this.s.streamCount() > 0 ? "open" : "idle" : this.s.t;
      }
      error() {
        if ("error" == this.s.t) return this.s.reason;
      }
      constructor(e3, n3, a3) {
        var t3, s2, o2, r3;
        this.s = { t: "closed" }, this.shuttingDown = [], this.authority = new URL(e3).origin, this.http2SessionOptions = a3, this.options = { pingIntervalMs: null !== (t3 = null == n3 ? void 0 : n3.pingIntervalMs) && void 0 !== t3 ? t3 : Number.POSITIVE_INFINITY, pingTimeoutMs: null !== (s2 = null == n3 ? void 0 : n3.pingTimeoutMs) && void 0 !== s2 ? s2 : 15e3, pingIdleConnection: null !== (o2 = null == n3 ? void 0 : n3.pingIdleConnection) && void 0 !== o2 && o2, idleConnectionTimeoutMs: null !== (r3 = null == n3 ? void 0 : n3.idleConnectionTimeoutMs) && void 0 !== r3 ? r3 : 9e5 };
      }
      async connect() {
        try {
          return (await this.gotoReady()).streamCount() > 0 ? "open" : "idle";
        } catch (e3) {
          return "error";
        }
      }
      async request(e3, n3, a3, t3) {
        for (; ; ) {
          const s2 = await this.gotoReady();
          try {
            const o2 = s2.conn.request(Object.assign(Object.assign({}, a3), { ":method": e3, ":path": n3 }), t3);
            return s2.registerRequest(o2), o2;
          } catch (e4) {
            if (s2.conn.closed || s2.conn.destroyed) continue;
            throw e4;
          }
        }
      }
      notifyResponseByteRead(e3) {
        "ready" == this.s.t && this.s.responseByteRead(e3);
        for (const n3 of this.shuttingDown) n3.responseByteRead(e3);
      }
      abort(e3) {
        var n3, a3, t3;
        const s2 = null != e3 ? e3 : new E("connection aborted", d.Canceled);
        null === (a3 = (n3 = this.s).abort) || void 0 === a3 || a3.call(n3, s2);
        for (const e4 of this.shuttingDown) null === (t3 = e4.abort) || void 0 === t3 || t3.call(e4, s2);
        this.setState(x(s2));
      }
      abortCurrent(e3) {
        var n3, a3;
        const t3 = this.s;
        if ("ready" === t3.t && t3.isShuttingDown()) return;
        const s2 = null != e3 ? e3 : new E("connection aborted", d.Canceled);
        null === (a3 = (n3 = t3).abort) || void 0 === a3 || a3.call(n3, s2);
      }
      captureSessions() {
        const e3 = [];
        "function" == typeof this.s.abort && e3.push(this.s);
        for (const n3 of this.shuttingDown) -1 === e3.indexOf(n3) && e3.push(n3);
        return e3;
      }
      async gotoReady() {
        var e3;
        for ("ready" == this.s.t ? this.s.isShuttingDown() || this.s.conn.closed || this.s.conn.destroyed ? this.setState(G(this.authority, this.http2SessionOptions)) : this.s.requiresVerify() && await this.verify(this.s) : "closed" != this.s.t && "error" != this.s.t || this.setState(G(this.authority, this.http2SessionOptions)); "ready" !== this.s.t; ) {
          if ("error" === this.s.t) throw this.s.reason;
          if ("unavailable" === this.s.t) throw new E("expected h2 session, but ALPN protocol failed to negotiate", d.Unavailable, { authority: this.authority, issuer: null !== (e3 = this.s.issuer) && void 0 !== e3 ? e3 : "unknown" });
          "connecting" === this.s.t && await this.s.conn;
        }
        return this.s;
      }
      setState(e3) {
        var n3, a3;
        if (null === (a3 = (n3 = this.s).onExitState) || void 0 === a3 || a3.call(n3), "ready" == this.s.t && this.s.isShuttingDown()) {
          const e4 = this.s;
          this.shuttingDown.push(e4), e4.onClose = e4.onError = () => {
            const n4 = this.shuttingDown.indexOf(e4);
            -1 !== n4 && this.shuttingDown.splice(n4, 1);
          };
        }
        switch (e3.t) {
          case "connecting":
            e3.conn.then((e4) => {
              this.setState((function(e5, n4) {
                var a4, t3;
                if ((function(e6) {
                  if (e6.connecting) throw new E("expected open session, but it is connecting", d.Internal);
                  if (e6.destroyed) throw new E("expected open session, but it is destroyed", d.Internal);
                  if (e6.closed) throw new E("expected open session, but it is closed", d.Internal);
                })(e5), true === e5.encrypted && "h2" !== e5.alpnProtocol) {
                  var s2 = e5.socket, o2 = null == s2 ? void 0 : s2.getPeerCertificate, r3 = "function" == typeof o2 ? null === (t3 = null === (a4 = o2.call(s2)) || void 0 === a4 ? void 0 : a4.issuer) || void 0 === t3 ? void 0 : t3.CN : void 0;
                  return e5.destroyed || e5.destroy(), { t: "unavailable", issuer: r3 };
                }
                e5.unref();
                let i3, A2, l2, c2 = Date.now(), m2 = 0, g2 = false, u2 = false;
                f2();
                const p2 = { t: "ready", conn: e5, streamCount: () => m2, requiresVerify: () => Date.now() - c2 > n4.pingIntervalMs, isShuttingDown: () => g2, onClose: void 0, onError: void 0, registerRequest(n5) {
                  m2++, 1 == m2 && (e5.ref(), T2(), _2()), n5.once("response", () => {
                    c2 = Date.now(), T2();
                  }), n5.once("close", () => {
                    m2--, 0 == m2 && (e5.unref(), T2(), f2());
                  });
                }, responseByteRead(n5) {
                  n5.session === e5 && (e5.closed || e5.destroyed || m2 <= 0 || (c2 = Date.now(), T2()));
                }, verify: () => (e5.ref(), new Promise((n5) => {
                  h2(() => {
                    0 == m2 && e5.unref(), n5(true);
                  }), e5.once("error", () => n5(false));
                })), abort(n5) {
                  e5.destroyed || (e5.once("error", () => {
                  }), e5.destroy(n5, w.constants.NGHTTP2_CANCEL));
                }, onExitState() {
                  p2.isShuttingDown() || (N2(), this.onError = void 0, this.onClose = void 0);
                } };
                function T2() {
                  k2(), (m2 > 0 || n4.pingIdleConnection) && (i3 = Y(I2, n4.pingIntervalMs));
                }
                function k2() {
                  clearTimeout(i3), clearTimeout(A2);
                }
                function I2() {
                  h2(T2);
                }
                function h2(a5) {
                  clearTimeout(A2), A2 = Y(() => {
                    e5.destroy(new E("PING timed out", d.Unavailable), w.constants.NGHTTP2_CANCEL);
                  }, n4.pingTimeoutMs), e5.ping((t4, s3) => {
                    clearTimeout(A2), null === t4 && (s3 > n4.pingTimeoutMs ? e5.destroy(new E("PING timed out", d.Unavailable), w.constants.NGHTTP2_CANCEL) : (c2 = Date.now(), a5()));
                  });
                }
                function _2() {
                  clearTimeout(l2);
                }
                function f2() {
                  l2 = Y(B2, n4.idleConnectionTimeoutMs);
                }
                function B2() {
                  e5.close(), y2();
                }
                function Q2(a5, t4, s3) {
                  g2 = true;
                  const o3 = Buffer.from("too_many_pings", "ascii");
                  if (a5 === w.constants.NGHTTP2_ENHANCE_YOUR_CALM && null != s3 && s3.equals(o3) && (n4.pingIntervalMs = 2 * n4.pingIntervalMs, u2 = true), a5 === w.constants.NGHTTP2_NO_ERROR) {
                    const n5 = parseInt(process.versions.node.split(".")[0], 10);
                    0 == m2 && n5 >= 18 && e5.destroy(new E("received GOAWAY without any open streams", d.Canceled), w.constants.NGHTTP2_NO_ERROR);
                  }
                }
                function y2() {
                  var e6;
                  N2(), null === (e6 = p2.onClose) || void 0 === e6 || e6.call(p2);
                }
                function R2(e6) {
                  var n5, a5;
                  if (N2(), u2) {
                    const e7 = new E(`http/2 connection closed with error code ENHANCE_YOUR_CALM (0x${w.constants.NGHTTP2_ENHANCE_YOUR_CALM.toString(16)}), too_many_pings, doubled the interval`, d.ResourceExhausted);
                    null === (n5 = p2.onError) || void 0 === n5 || n5.call(p2, e7);
                  } else null === (a5 = p2.onError) || void 0 === a5 || a5.call(p2, C(e6));
                }
                function N2() {
                  k2(), _2(), e5.off("error", R2), e5.off("close", y2), e5.off("goaway", Q2);
                }
                return e5.on("error", R2), e5.on("close", y2), e5.on("goaway", Q2), p2;
              })(e4, this.options));
            }, (e4) => {
              this.setState(x(e4));
            });
            break;
          case "ready":
            e3.onClose = () => this.setState({ t: "closed" }), e3.onError = (e4) => this.setState(x(e4));
        }
        this.s = e3;
      }
      verify(e3) {
        return void 0 !== this.verifying || (this.verifying = e3.verify().then((e4) => {
          e4 || this.setState(G(this.authority, this.http2SessionOptions));
        }, (e4) => {
          this.setState(x(e4));
        }).finally(() => {
          this.verifying = void 0;
        })), this.verifying;
      }
    }
    function x(e3) {
      return e3 instanceof E && E.from(e3).code == d.Canceled ? { t: "closed" } : /* @__PURE__ */ (function(e4) {
        return { t: "error", reason: e4 };
      })(e3);
    }
    function G(e3, n3) {
      let a3, t3;
      const s2 = new Promise((e4, n4) => {
        a3 = e4, t3 = n4;
      }), o2 = w.connect(e3, n3);
      function r3() {
        null == a3 || a3(o2), A2();
      }
      function i3(e4) {
        null == t3 || t3(C(e4)), A2();
      }
      function A2() {
        o2.off("connect", r3), o2.off("error", i3);
      }
      return o2.on("connect", r3), o2.on("error", i3), { t: "connecting", conn: s2, abort(e4) {
        o2.destroyed || o2.destroy(void 0, w.constants.NGHTTP2_CANCEL), null == t3 || t3(e4);
      }, onExitState() {
        A2();
      } };
    }
    function Y(e3, n3) {
      if (!(n3 > 2147483647)) return setTimeout(e3, n3).unref();
    }
    function J(e3) {
      var n3, a3;
      if ("1.1" == e3.httpVersion) return a3 = e3.nodeOptions, async function(e4) {
        const n4 = K(e4.signal);
        return new Promise((t3, s2) => {
          n4.catch((e5) => {
            s2(e5);
          }), (function(e5, n5, a4, t4) {
            let s3;
            s3 = new URL(n5).protocol.startsWith("https") ? M.request(n5, a4) : b.request(n5, a4), e5.catch((e6) => s3.destroy(C(e6))), s3.flushHeaders(), s3.on("error", e5.reject), s3.on("socket", function(e6) {
              function n6() {
                e6.off("connect", n6), t4(s3);
              }
              "open" === e6.readyState ? t4(s3) : e6.on("connect", n6);
            });
          })(n4, e4.url, Object.assign(Object.assign({}, a3), { headers: O(e4.header, null == a3 ? void 0 : a3.headers), method: e4.method }), (a4) => {
            W(e4, a4, n4), a4.on("response", (e5) => {
              var a5;
              e5.on("error", n4.reject), n4.catch((n5) => e5.destroy(C(n5)));
              const s3 = new Headers();
              t3({ status: null !== (a5 = e5.statusCode) && void 0 !== a5 ? a5 : 0, header: F(e5.headers), body: V(n4, e5, s3), trailer: s3 });
            });
          });
        });
      };
      return /* @__PURE__ */ (function(e4) {
        return function(n4) {
          const a4 = K(n4.signal), t3 = e4(n4.url);
          return new Promise((e5, s2) => {
            a4.catch((e6) => {
              s2(e6);
            }), (function(e6, n5, a5, t4, s3, o2, r3) {
              const i3 = new URL(a5);
              if (i3.origin !== n5.authority) {
                const a6 = `cannot make a request to ${i3.origin}: the http2 session is connected to ${n5.authority}`;
                return void e6.reject(new E(a6, d.Internal));
              }
              n5.request(t4, i3.pathname + i3.search, s3, {}).then((n6) => {
                e6.catch((e7) => {
                  if (n6.closed) return;
                  const a6 = e7 instanceof E && e7.code == d.Canceled ? I.CANCEL : I.INTERNAL_ERROR;
                  return new Promise((e8) => n6.close(a6, e8));
                }), n6.on("error", function(a6) {
                  n6.writableEnded && f(a6).map(B).some((e7) => "ERR_STREAM_WRITE_AFTER_END" == e7.code) || e6.reject(a6);
                }), n6.on("close", function() {
                  const a6 = (function(e7) {
                    switch (e7) {
                      case I.PROTOCOL_ERROR:
                      case I.INTERNAL_ERROR:
                      case I.FLOW_CONTROL_ERROR:
                      case I.SETTINGS_TIMEOUT:
                      case I.FRAME_SIZE_ERROR:
                      case I.COMPRESSION_ERROR:
                      case I.CONNECT_ERROR:
                        return new E(`http/2 stream closed with error code ${I[e7]} (0x${e7.toString(16)})`, d.Internal);
                      case I.REFUSED_STREAM:
                        return new E(`http/2 stream closed with error code ${I[e7]} (0x${e7.toString(16)})`, d.Unavailable);
                      case I.CANCEL:
                        return new E(`http/2 stream closed with error code ${I[e7]} (0x${e7.toString(16)})`, d.Canceled);
                      case I.ENHANCE_YOUR_CALM:
                        return new E(`http/2 stream closed with error code ${I[e7]} (0x${e7.toString(16)})`, d.ResourceExhausted);
                      case I.INADEQUATE_SECURITY:
                      case I.HTTP_1_1_REQUIRED:
                        return new E(`http/2 stream closed with error code ${I[e7]} (0x${e7.toString(16)})`, d.PermissionDenied);
                      case I.STREAM_CLOSED:
                    }
                  })(n6.rstCode);
                  a6 && e6.reject(a6);
                }), r3(n6);
              }, (n6) => {
                e6.reject(n6);
              });
            })(a4, t3, n4.url, n4.method, O(n4.header), 0, (s3) => {
              W(n4, s3, a4), s3.on("response", (n5) => {
                var o2;
                const r3 = { status: null !== (o2 = n5[":status"]) && void 0 !== o2 ? o2 : 0, header: F(n5), body: H(a4, s3, t3), trailer: q(s3) };
                e5(r3);
              });
            });
          });
        };
      })(null !== (n3 = e3.sessionProvider) && void 0 !== n3 ? n3 : (e4) => new P(e4));
    }
    function V(e3, n3, a3) {
      const t3 = n3[Symbol.asyncIterator]();
      return { [Symbol.asyncIterator]: () => ({ async next() {
        const s2 = await e3.race(t3.next());
        return true === s2.done && (F(n3.trailers).forEach((e4, n4) => {
          a3.set(n4, e4);
        }), e3.resolve(), await e3), s2;
      }, throw(n4) {
        throw e3.reject(n4), n4;
      } }) };
    }
    function q(e3) {
      const n3 = new Headers();
      return e3.on("trailers", (e4) => {
        F(e4).forEach((e5, a3) => {
          n3.set(a3, e5);
        });
      }), n3;
    }
    function H(e3, n3, a3) {
      const t3 = n3[Symbol.asyncIterator]();
      return { [Symbol.asyncIterator]: () => ({ async next() {
        const s2 = await e3.race(t3.next());
        return true === s2.done && (e3.resolve(), await e3), null == a3 || a3.notifyResponseByteRead(n3), s2;
      }, throw(n4) {
        throw e3.reject(n4), n4;
      } }) };
    }
    async function W(e3, n3, a3) {
      if (void 0 === e3.body) return void await new Promise((e4) => n3.end(e4));
      const t3 = e3.body[Symbol.asyncIterator]();
      return new Promise((e4) => {
        !(function s2() {
          if (a3.isRejected()) return;
          t3.next().then((o2) => {
            true !== o2.done ? n3.write(o2.value, "binary", function(e5) {
              null != e5 ? (void 0 !== t3.throw && t3.throw(C(e5)).catch(() => {
              }), n3.writableEnded && f(e5).map(B).some((e6) => "ERR_STREAM_WRITE_AFTER_END" == e6.code) || a3.reject(e5)) : s2();
            }) : n3.end(e4);
          }, (e5) => {
            a3.reject(e5);
          });
        })();
      });
    }
    function K(e3) {
      let n3, a3, t3 = false, s2 = false;
      const o2 = new Promise((e4, t4) => {
        n3 = e4, a3 = t4;
      }), r3 = { resolve() {
        t3 || s2 || (t3 = true, null == n3 || n3());
      }, isResolved: () => t3, reject(e4) {
        t3 || s2 || (s2 = true, null == a3 || a3(C(e4)));
      }, isRejected: () => s2, async race(e4) {
        const n4 = await Promise.race([e4, o2]);
        if (void 0 === n4 && t3) throw new E("sentinel completed early", d.Internal);
        return n4;
      } }, i3 = Object.assign(o2, r3);
      function A2() {
        r3.reject(L(this));
      }
      return e3 && (e3.aborted ? r3.reject(L(e3)) : e3.addEventListener("abort", A2), o2.finally(() => e3.removeEventListener("abort", A2)).catch(() => {
      })), i3;
    }
    function j(e3) {
      var n3, a3, t3, s2;
      let o2;
      if ("2" == e3.httpVersion) {
        let n4;
        n4 = e3.sessionManager ? e3.sessionManager : new P(e3.baseUrl, { pingIntervalMs: e3.pingIntervalMs, pingIdleConnection: e3.pingIdleConnection, pingTimeoutMs: e3.pingTimeoutMs, idleConnectionTimeoutMs: e3.idleConnectionTimeoutMs }, e3.nodeOptions), o2 = J({ httpVersion: "2", sessionProvider: () => n4 });
      } else o2 = J({ httpVersion: "1.1", nodeOptions: e3.nodeOptions });
      return Object.assign(Object.assign(Object.assign({}, e3), { httpClient: o2, useBinaryFormat: null === (n3 = e3.useBinaryFormat) || void 0 === n3 || n3, interceptors: null !== (a3 = e3.interceptors) && void 0 !== a3 ? a3 : [], sendCompression: null !== (t3 = e3.sendCompression) && void 0 !== t3 ? t3 : null, acceptCompression: null !== (s2 = e3.acceptCompression) && void 0 !== s2 ? s2 : [v, S] }), (function(e4, n4, a4) {
        if (null != n4 || (n4 = T), null != e4 || (e4 = p), null != a4 || (a4 = 1024), n4 < 1 || n4 > T) throw new E(`writeMaxBytes ${n4} must be >= 1 and <= 4294967295`, d.Internal);
        if (e4 < 1 || e4 > p) throw new E(`readMaxBytes ${e4} must be >= 1 and <= 4294967295`, d.Internal);
        return { readMaxBytes: e4, writeMaxBytes: n4, compressMinBytes: a4 };
      })(e3.readMaxBytes, e3.writeMaxBytes, e3.compressMinBytes));
    }
    var X = s(6038);
    const Z = "Content-Type", z = "Content-Length", $ = "Content-Encoding", ee = "Connect-Content-Encoding", ne = "Accept-Encoding", ae = "Connect-Protocol-Version", te = "1";
    const se = /^application\/(connect\+)?(?:(json)(?:; ?charset=utf-?8)?|(proto))$|^text\/event-stream$/i;
    function oe(e3, n3, a3, t3, s2, o2, r3) {
      const i3 = (function(e4, n4, a4, t4, s3) {
        const o3 = new Headers(null != t4 ? t4 : {});
        return void 0 !== a4 && o3.set("Connect-Timeout-Ms", `${a4}`), o3.set(Z, e4 == X.MethodKind.Unary ? n4 ? "application/proto" : "application/json" : n4 ? "application/connect+proto" : "application/connect+json"), o3.set(ae, te), s3 && o3.set("User-Agent", "connect-es/1.6.1"), o3;
      })(e3, n3, a3, t3, r3);
      if (null != o2) {
        const n4 = e3 == X.MethodKind.Unary ? $ : ee;
        i3.set(n4, o2.name);
      }
      if (s2.length > 0) {
        const n4 = e3 == X.MethodKind.Unary ? ne : "Connect-Accept-Encoding";
        i3.set(n4, s2.map((e4) => e4.name).join(","));
      }
      return i3;
    }
    function re(e3, n3, a3, t3) {
      const s2 = t3.get(Z), o2 = (function(e4) {
        if ("text/event-stream" === e4) return { stream: true, binary: true };
        const n4 = null == e4 ? void 0 : e4.match(se);
        if (!n4) return;
        return { stream: !!n4[1], binary: !!n4[3] };
      })(s2);
      if (200 !== a3) {
        const n4 = new E(`HTTP ${a3}`, (function(e4) {
          switch (e4) {
            case 400:
              return d.Internal;
            case 401:
              return d.Unauthenticated;
            case 403:
              return d.PermissionDenied;
            case 404:
              return d.Unimplemented;
            case 429:
            case 502:
            case 503:
            case 504:
              return d.Unavailable;
            default:
              return d.Unknown;
          }
        })(a3), t3);
        if (e3 == X.MethodKind.Unary && o2 && !o2.binary) return { isUnaryError: true, unaryError: n4 };
        throw n4;
      }
      const r3 = n3, i3 = e3 !== X.MethodKind.Unary;
      if ((null == o2 ? void 0 : o2.binary) !== r3 || o2.stream !== i3) throw new E(`unsupported content type ${s2}`, void 0 === o2 ? d.Unknown : d.Internal, t3);
      return { isUnaryError: false };
    }
    function ie(e3, n3, a3, t3, s2) {
      let o2;
      const r3 = s2.get(e3 == X.MethodKind.Unary ? $ : ee);
      if (null != r3 && "identity" !== r3.toLowerCase() && (o2 = n3.find((e4) => e4.name === r3), !o2)) throw new E(`unsupported response encoding "${r3}"`, d.Internal, s2);
      return Object.assign({ compression: o2 }, re(e3, a3, t3, s2));
    }
    var Ae = function(e3, n3) {
      var a3 = {};
      for (var t3 in e3) Object.prototype.hasOwnProperty.call(e3, t3) && n3.indexOf(t3) < 0 && (a3[t3] = e3[t3]);
      if (null != e3 && "function" == typeof Object.getOwnPropertySymbols) {
        var s2 = 0;
        for (t3 = Object.getOwnPropertySymbols(e3); s2 < t3.length; s2++) n3.indexOf(t3[s2]) < 0 && Object.prototype.propertyIsEnumerable.call(e3, t3[s2]) && (a3[t3[s2]] = e3[t3[s2]]);
      }
      return a3;
    };
    function le(e3, n3, a3) {
      var t3;
      if (n3 && new Headers(n3).forEach((e4, n4) => a3.metadata.append(n4, e4)), "object" != typeof e3 || null == e3 || Array.isArray(e3)) throw a3;
      let s2 = a3.code;
      "code" in e3 && "string" == typeof e3.code && (s2 = null !== (t3 = (function(e4) {
        if (!u) {
          u = {};
          for (const e5 of Object.values(d)) "string" != typeof e5 && (u[g(e5)] = e5);
        }
        return u[e4];
      })(e3.code)) && void 0 !== t3 ? t3 : s2);
      const o2 = e3.message;
      if (null != o2 && "string" != typeof o2) throw a3;
      const r3 = new E(null != o2 ? o2 : "", s2, n3);
      if ("details" in e3 && Array.isArray(e3.details)) for (const n4 of e3.details) {
        if (null === n4 || "object" != typeof n4 || Array.isArray(n4) || "string" != typeof n4.type || "string" != typeof n4.value) throw a3;
        try {
          r3.details.push({ type: n4.type, value: X.protoBase64.dec(n4.value), debug: n4.debug });
        } catch (e4) {
          throw a3;
        }
      }
      return r3;
    }
    function ce(e3, n3) {
      const a3 = { code: g(e3.code) };
      return e3.rawMessage.length > 0 && (a3.message = e3.rawMessage), e3.details.length > 0 && (a3.details = e3.details.map((e4) => {
        if ("getType" in e4) {
          const a4 = { type: e4.getType().typeName, value: e4.toBinary() };
          try {
            a4.debug = e4.toJson(n3);
          } catch (e5) {
          }
          return a4;
        }
        return e4;
      }).map((e4) => {
        var { value: n4 } = e4, a4 = Ae(e4, ["value"]);
        return Object.assign(Object.assign({}, a4), { value: X.protoBase64.enc(n4).replace(/=+$/, "") });
      })), a3;
    }
    function me(...e3) {
      const n3 = new Headers();
      for (const a3 of e3) a3.forEach((e4, a4) => {
        n3.append(a4, e4);
      });
      return n3;
    }
    function de(e3) {
      const n3 = new TextEncoder();
      return { serialize(a3) {
        try {
          const t3 = (function(e4, n4, a4) {
            const t4 = {};
            void 0 !== n4 && (t4.error = ce(n4, a4), e4 = me(e4, n4.metadata));
            let s3 = false;
            const o2 = {};
            return e4.forEach((e5, n5) => {
              s3 = true, o2[n5] = [e5];
            }), s3 && (t4.metadata = o2), t4;
          })(a3.metadata, a3.error, e3), s2 = JSON.stringify(t3);
          return n3.encode(s2);
        } catch (e4) {
          const n4 = e4 instanceof Error ? e4.message : String(e4);
          throw new E(`failed to serialize EndStreamResponse: ${n4}`, d.Internal);
        }
      }, parse(e4) {
        try {
          return (function(e5) {
            const n4 = new E("invalid end stream", d.Unknown);
            let a3;
            try {
              a3 = JSON.parse("string" == typeof e5 ? e5 : new TextDecoder().decode(e5));
            } catch (e6) {
              throw n4;
            }
            if ("object" != typeof a3 || null == a3 || Array.isArray(a3)) throw n4;
            const t3 = new Headers();
            if ("metadata" in a3) {
              if ("object" != typeof a3.metadata || null == a3.metadata || Array.isArray(a3.metadata)) throw n4;
              for (const [e6, s2] of Object.entries(a3.metadata)) {
                if (!Array.isArray(s2) || s2.some((e7) => "string" != typeof e7)) throw n4;
                for (const n5 of s2) t3.append(e6, n5);
              }
            }
            return { metadata: t3, error: "error" in a3 && null != a3.error ? le(a3.error, t3, n4) : void 0 };
          })(e4);
        } catch (e5) {
          const n4 = e5 instanceof Error ? e5.message : String(e5);
          throw new E(`failed to parse EndStreamResponse: ${n4}`, d.InvalidArgument);
        }
      } };
    }
    const ge = "application/";
    function ue(e3, n3, a3) {
      let t3 = `?connect=v${te}`;
      const s2 = e3.header.get(Z);
      0 === (null == s2 ? void 0 : s2.indexOf(ge)) && (t3 += "&encoding=" + encodeURIComponent(s2.slice(12)));
      const o2 = e3.header.get($);
      null !== o2 && "identity" !== o2 && (t3 += "&compression=" + encodeURIComponent(o2), a3 = true), a3 && (t3 += "&base64=1"), t3 += "&message=" + (function(e4, n4) {
        return n4 ? X.protoBase64.enc(e4).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : encodeURIComponent(new TextDecoder().decode(e4));
      })(n3, a3);
      const r3 = e3.url + t3, i3 = new Headers(e3.header);
      return [ae, Z, z, $, ne].forEach((e4) => i3.delete(e4)), Object.assign(Object.assign({}, e3), { init: Object.assign(Object.assign({}, e3.init), { method: "GET" }), url: r3, header: i3 });
    }
    function Ee(e3) {
      return new pe(e3);
    }
    class pe {
      constructor(e3) {
        this.readMaxBytes = e3, this.header = new Uint8Array(5), this.headerView = new DataView(this.header.buffer), this.buf = [];
      }
      get byteLength() {
        return this.buf.reduce((e3, n3) => e3 + n3.byteLength, 0);
      }
      decode(e3) {
        this.buf.push(e3);
        const n3 = [];
        for (; ; ) {
          let e4 = this.pop();
          if (!e4) break;
          n3.push(e4);
        }
        return n3;
      }
      pop() {
        if ((this.env || (this.env = this.head(), this.env)) && this.cons(this.env.data)) {
          const e3 = this.env;
          return this.env = void 0, e3;
        }
      }
      head() {
        if (!this.cons(this.header)) return;
        const e3 = this.headerView.getUint8(0), n3 = this.headerView.getUint32(1);
        return k(this.readMaxBytes, n3, true), { flags: e3, data: new Uint8Array(n3) };
      }
      cons(e3) {
        const n3 = e3.byteLength;
        if (this.byteLength < n3) return false;
        let a3 = 0;
        for (; a3 < n3; ) {
          const t3 = this.buf.shift();
          t3.byteLength > n3 - a3 ? (e3.set(t3.subarray(0, n3 - a3), a3), this.buf.unshift(t3.subarray(n3 - a3)), a3 += n3 - a3) : (e3.set(t3, a3), a3 += t3.byteLength);
        }
        return true;
      }
    }
    async function Te(e3, n3, a3) {
      let { flags: t3, data: s2 } = e3;
      if (!(1 & ~t3)) throw new E("invalid envelope, already compressed", d.Internal);
      return n3 && s2.byteLength >= a3 && (s2 = await n3.compress(s2), t3 |= 1), { data: s2, flags: t3 };
    }
    async function ke(e3, n3, a3) {
      let { flags: t3, data: s2 } = e3;
      if (!(1 & ~t3)) {
        if (!n3) throw new E("received compressed envelope, but do not know how to decompress", d.Internal);
        s2 = await n3.decompress(s2, a3), t3 ^= 1;
      }
      return { data: s2, flags: t3 };
    }
    function Ie(e3, n3) {
      const a3 = new Uint8Array(n3.length + 5);
      a3.set(n3, 5);
      const t3 = new DataView(a3.buffer, a3.byteOffset, a3.byteLength);
      return t3.setUint8(0, e3), t3.setUint32(1, n3.length), a3;
    }
    var he = function(e3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n3, a3 = e3[Symbol.asyncIterator];
      return a3 ? a3.call(e3) : (e3 = "function" == typeof __values ? __values(e3) : e3[Symbol.iterator](), n3 = {}, t3("next"), t3("throw"), t3("return"), n3[Symbol.asyncIterator] = function() {
        return this;
      }, n3);
      function t3(a4) {
        n3[a4] = e3[a4] && function(n4) {
          return new Promise(function(t4, s2) {
            (function(e4, n5, a5, t5) {
              Promise.resolve(t5).then(function(n6) {
                e4({ value: n6, done: a5 });
              }, n5);
            })(t4, s2, (n4 = e3[a4](n4)).done, n4.value);
          });
        };
      }
    }, _e = function(e3) {
      return this instanceof _e ? (this.v = e3, this) : new _e(e3);
    }, Ce = function(e3, n3, a3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t3, s2 = a3.apply(e3, n3 || []), o2 = [];
      return t3 = {}, r3("next"), r3("throw"), r3("return", function(e4) {
        return function(n4) {
          return Promise.resolve(n4).then(e4, l2);
        };
      }), t3[Symbol.asyncIterator] = function() {
        return this;
      }, t3;
      function r3(e4, n4) {
        s2[e4] && (t3[e4] = function(n5) {
          return new Promise(function(a4, t4) {
            o2.push([e4, n5, a4, t4]) > 1 || i3(e4, n5);
          });
        }, n4 && (t3[e4] = n4(t3[e4])));
      }
      function i3(e4, n4) {
        try {
          (a4 = s2[e4](n4)).value instanceof _e ? Promise.resolve(a4.value.v).then(A2, l2) : c2(o2[0][2], a4);
        } catch (e5) {
          c2(o2[0][3], e5);
        }
        var a4;
      }
      function A2(e4) {
        i3("next", e4);
      }
      function l2(e4) {
        i3("throw", e4);
      }
      function c2(e4, n4) {
        e4(n4), o2.shift(), o2.length && i3(o2[0][0], o2[0][1]);
      }
    }, fe = function(e3) {
      var n3, a3;
      return n3 = {}, t3("next"), t3("throw", function(e4) {
        throw e4;
      }), t3("return"), n3[Symbol.iterator] = function() {
        return this;
      }, n3;
      function t3(t4, s2) {
        n3[t4] = e3[t4] ? function(n4) {
          return (a3 = !a3) ? { value: _e(e3[t4](n4)), done: false } : s2 ? s2(n4) : n4;
        } : s2;
      }
    };
    function Be(e3, ...n3) {
      return Ce(this, arguments, function* () {
        var a3;
        const [t3, s2] = (function(e4) {
          let n4;
          "function" != typeof e4[e4.length - 1] && (n4 = e4.pop());
          return [e4, n4];
        })(n3);
        let o2;
        const r3 = e3[Symbol.asyncIterator]();
        let i3 = { [Symbol.asyncIterator]: () => r3 };
        true === (null == s2 ? void 0 : s2.propagateDownStreamError) && (i3 = o2 = Se(i3));
        for (const e4 of t3) i3 = e4(i3);
        const A2 = i3[Symbol.asyncIterator]();
        try {
          for (; ; ) {
            const e4 = yield _e(A2.next());
            if (true === e4.done) break;
            if (o2) try {
              yield yield _e(e4.value);
            } catch (e5) {
              throw yield _e(o2.abort(e5)), e5;
            }
            else yield yield _e(e4.value);
          }
        } finally {
          true === (null == s2 ? void 0 : s2.propagateDownStreamError) && (null === (a3 = r3.return) || void 0 === a3 || a3.call(r3).catch(() => {
          }));
        }
      });
    }
    function Qe(e3, n3, a3) {
      return void 0 === n3 || void 0 === a3 ? function(n4) {
        return Ce(this, arguments, function* () {
          var a4, t3, s2, o2;
          try {
            for (var r3, i3 = true, A2 = he(n4); !(a4 = (r3 = yield _e(A2.next())).done); i3 = true) {
              o2 = r3.value, i3 = false;
              const n5 = o2, a5 = e3.serialize(n5);
              yield yield _e({ flags: 0, data: a5 });
            }
          } catch (e4) {
            t3 = { error: e4 };
          } finally {
            try {
              i3 || a4 || !(s2 = A2.return) || (yield _e(s2.call(A2)));
            } finally {
              if (t3) throw t3.error;
            }
          }
        });
      } : function(t3) {
        return Ce(this, arguments, function* () {
          var s2, o2, r3, i3;
          try {
            for (var A2, l2 = true, c2 = he(t3); !(s2 = (A2 = yield _e(c2.next())).done); l2 = true) {
              i3 = A2.value, l2 = false;
              const t4 = i3;
              let s3, o3 = 0;
              t4.end ? (o3 |= n3, s3 = a3.serialize(t4.value)) : s3 = e3.serialize(t4.value), yield yield _e({ flags: o3, data: s3 });
            }
          } catch (e4) {
            o2 = { error: e4 };
          } finally {
            try {
              l2 || s2 || !(r3 = c2.return) || (yield _e(r3.call(c2)));
            } finally {
              if (o2) throw o2.error;
            }
          }
        });
      };
    }
    function ye(e3, n3, a3) {
      return a3 && void 0 !== n3 ? function(t3) {
        return Ce(this, arguments, function* () {
          var s2, o2, r3, i3;
          try {
            for (var A2, l2 = true, c2 = he(t3); !(s2 = (A2 = yield _e(c2.next())).done); l2 = true) {
              i3 = A2.value, l2 = false;
              const { flags: t4, data: s3 } = i3;
              (t4 & n3) === n3 ? yield yield _e({ value: a3.parse(s3), end: true }) : yield yield _e({ value: e3.parse(s3), end: false });
            }
          } catch (e4) {
            o2 = { error: e4 };
          } finally {
            try {
              l2 || s2 || !(r3 = c2.return) || (yield _e(r3.call(c2)));
            } finally {
              if (o2) throw o2.error;
            }
          }
        });
      } : function(t3) {
        return Ce(this, arguments, function* () {
          var s2, o2, r3, i3;
          try {
            for (var A2, l2 = true, c2 = he(t3); !(s2 = (A2 = yield _e(c2.next())).done); l2 = true) {
              i3 = A2.value, l2 = false;
              const { flags: t4, data: s3 } = i3;
              if (void 0 === n3 || (t4 & n3) !== n3) yield yield _e(e3.parse(s3));
              else if (null === a3) throw new E("unexpected end flag", d.InvalidArgument);
            }
          } catch (e4) {
            o2 = { error: e4 };
          } finally {
            try {
              l2 || s2 || !(r3 = c2.return) || (yield _e(r3.call(c2)));
            } finally {
              if (o2) throw o2.error;
            }
          }
        });
      };
    }
    function Re(e3, n3) {
      return function(a3) {
        return Ce(this, arguments, function* () {
          var t3, s2, o2, r3;
          try {
            for (var i3, A2 = true, l2 = he(a3); !(t3 = (i3 = yield _e(l2.next())).done); A2 = true) {
              r3 = i3.value, A2 = false;
              const a4 = r3;
              yield yield _e(yield _e(Te(a4, e3, n3)));
            }
          } catch (e4) {
            s2 = { error: e4 };
          } finally {
            try {
              A2 || t3 || !(o2 = l2.return) || (yield _e(o2.call(l2)));
            } finally {
              if (s2) throw s2.error;
            }
          }
        });
      };
    }
    function Ne(e3, n3) {
      return function(a3) {
        return Ce(this, arguments, function* () {
          var t3, s2, o2, r3;
          try {
            for (var i3, A2 = true, l2 = he(a3); !(t3 = (i3 = yield _e(l2.next())).done); A2 = true) {
              r3 = i3.value, A2 = false;
              const a4 = r3;
              yield yield _e(yield _e(ke(a4, e3, n3)));
            }
          } catch (e4) {
            s2 = { error: e4 };
          } finally {
            try {
              A2 || t3 || !(o2 = l2.return) || (yield _e(o2.call(l2)));
            } finally {
              if (s2) throw s2.error;
            }
          }
        });
      };
    }
    async function ve(e3, n3, a3) {
      var t3, s2, o2, r3, i3, A2, l2, c2;
      const [m2, g2] = (function(e4) {
        if (null == e4) return [false, 0];
        const n4 = "string" == typeof e4 ? parseInt(e4, 10) : e4;
        if (!Number.isSafeInteger(n4) || n4 < 0) return [false, n4];
        return [true, n4];
      })(a3);
      if (m2) {
        g2 > n3 && k(n3, g2, true);
        const a4 = new Uint8Array(g2);
        let i4 = 0;
        try {
          for (var u2, p2 = true, T2 = he(e3); !(t3 = (u2 = await T2.next()).done); p2 = true) {
            r3 = u2.value, p2 = false;
            const e4 = r3;
            if (i4 + e4.byteLength > g2) throw new E(`protocol error: promised ${g2} bytes, received ${i4 + e4.byteLength}`, d.InvalidArgument);
            a4.set(e4, i4), i4 += e4.byteLength;
          }
        } catch (e4) {
          s2 = { error: e4 };
        } finally {
          try {
            p2 || t3 || !(o2 = T2.return) || await o2.call(T2);
          } finally {
            if (s2) throw s2.error;
          }
        }
        if (i4 < g2) throw new E(`protocol error: promised ${g2} bytes, received ${i4}`, d.InvalidArgument);
        return a4;
      }
      const I2 = [];
      let h2 = 0;
      try {
        for (var _2, C2 = true, f2 = he(e3); !(i3 = (_2 = await f2.next()).done); C2 = true) {
          c2 = _2.value, C2 = false;
          const e4 = c2;
          h2 += e4.byteLength, k(n3, h2), I2.push(e4);
        }
      } catch (e4) {
        A2 = { error: e4 };
      } finally {
        try {
          C2 || i3 || !(l2 = f2.return) || await l2.call(f2);
        } finally {
          if (A2) throw A2.error;
        }
      }
      const B2 = new Uint8Array(h2);
      let Q2 = 0;
      for (let e4 = I2.shift(); e4; e4 = I2.shift()) B2.set(e4, Q2), Q2 += e4.byteLength;
      return B2;
    }
    function Se(e3) {
      const n3 = e3[Symbol.asyncIterator]();
      if (void 0 === n3.throw) throw new Error("AsyncIterable does not implement throw");
      const a3 = n3;
      let t3, s2, o2 = { next: () => (s2 = a3.next().finally(() => {
        s2 = void 0;
      }), s2), throw: (e4) => a3.throw(e4) };
      void 0 !== n3.return && (o2 = Object.assign(Object.assign({}, o2), { return: (e4) => a3.return(e4) }));
      let r3 = false;
      return { abort(e4) {
        if (t3) return t3.state;
        const n4 = () => a3.throw(e4).then((e5) => true === e5.done ? "completed" : "caught", () => "rethrown");
        return s2 ? (t3 = { reason: e4, state: s2.then(n4, n4) }, t3.state) : (t3 = { reason: e4, state: n4() }, t3.state);
      }, [Symbol.asyncIterator]() {
        if (r3) throw new Error("AsyncIterable cannot be re-used");
        return r3 = true, o2;
      } };
    }
    function De(e3) {
      return Ce(this, arguments, function* () {
        yield _e(yield* fe(he(e3)));
      });
    }
    function we(e3, n3, a3) {
      const t3 = "string" == typeof n3 ? n3 : n3.typeName, s2 = "string" == typeof a3 ? a3 : a3.name;
      return e3.toString().replace(/\/?$/, `/${t3}/${s2}`);
    }
    function be(e3, n3) {
      var a3;
      return null !== (a3 = null == n3 ? void 0 : n3.concat().reverse().reduce((e4, n4) => n4(e4), e3)) && void 0 !== a3 ? a3 : e3;
    }
    function Me(e3, n3) {
      return n3 instanceof e3 ? n3 : new e3(n3);
    }
    function Fe(e3, n3) {
      function a3(n4) {
        return true === n4.done ? n4 : { done: n4.done, value: Me(e3, n4.value) };
      }
      return { [Symbol.asyncIterator]() {
        const e4 = n3[Symbol.asyncIterator](), t3 = { next: () => e4.next().then(a3) };
        return void 0 !== e4.throw && (t3.throw = (n4) => e4.throw(n4).then(a3)), void 0 !== e4.return && (t3.return = (n4) => e4.return(n4).then(a3)), t3;
      } };
    }
    function Oe(e3) {
      const { signal: n3, cleanup: a3 } = (function(e4) {
        const n4 = new AbortController(), a4 = () => {
          n4.abort(new E("the operation timed out", d.DeadlineExceeded));
        };
        let t4;
        return void 0 !== e4 && (e4 <= 0 ? a4() : t4 = setTimeout(a4, e4)), { signal: n4.signal, cleanup: () => clearTimeout(t4) };
      })(e3.timeoutMs), t3 = (function(...e4) {
        const n4 = new AbortController(), a4 = e4.filter((e5) => void 0 !== e5).concat(n4.signal);
        for (const e5 of a4) {
          if (e5.aborted) {
            t4.apply(e5);
            break;
          }
          e5.addEventListener("abort", t4);
        }
        function t4() {
          n4.signal.aborted || n4.abort(L(this));
          for (const e5 of a4) e5.removeEventListener("abort", t4);
        }
        return n4;
      })(e3.signal, n3);
      return [t3.signal, function(e4) {
        const s2 = E.from(n3.aborted ? L(n3) : e4);
        return t3.abort(s2), a3(), Promise.reject(s2);
      }, function() {
        a3(), t3.abort();
      }];
    }
    function Ue(e3, n3, a3, t3) {
      const s2 = Le(Pe(e3.I, n3), t3), o2 = Le(xe(e3.I, a3), t3), r3 = Le(Pe(e3.O, n3), t3), i3 = Le(xe(e3.O, a3), t3);
      return { getI: (e4) => e4 ? s2 : o2, getO: (e4) => e4 ? r3 : i3 };
    }
    function Le(e3, n3) {
      return { serialize(a3) {
        const t3 = e3.serialize(a3);
        return (function(e4, n4) {
          if (n4 > e4) throw new E(`message size ${n4} is larger than configured writeMaxBytes ${e4}`, d.ResourceExhausted);
        })(n3.writeMaxBytes, t3.byteLength), t3;
      }, parse: (a3) => (k(n3.readMaxBytes, a3.byteLength, true), e3.parse(a3)) };
    }
    function Pe(e3, n3) {
      return { parse(a3) {
        try {
          return e3.fromBinary(a3, n3);
        } catch (e4) {
          const n4 = e4 instanceof Error ? e4.message : String(e4);
          throw new E(`parse binary: ${n4}`, d.Internal);
        }
      }, serialize(e4) {
        try {
          return e4.toBinary(n3);
        } catch (e5) {
          const n4 = e5 instanceof Error ? e5.message : String(e5);
          throw new E(`serialize binary: ${n4}`, d.Internal);
        }
      } };
    }
    function xe(e3, n3) {
      var a3, t3;
      const s2 = null !== (a3 = null == n3 ? void 0 : n3.textEncoder) && void 0 !== a3 ? a3 : new TextEncoder(), o2 = null !== (t3 = null == n3 ? void 0 : n3.textDecoder) && void 0 !== t3 ? t3 : new TextDecoder(), r3 = (function(e4) {
        var n4;
        const a4 = Object.assign({}, e4);
        return null !== (n4 = a4.ignoreUnknownFields) && void 0 !== n4 || (a4.ignoreUnknownFields = true), a4;
      })(n3);
      return { parse(n4) {
        try {
          const a4 = o2.decode(n4);
          return e3.fromJsonString(a4, r3);
        } catch (e4) {
          throw E.from(e4, d.InvalidArgument);
        }
      }, serialize(e4) {
        try {
          const n4 = e4.toJsonString(r3);
          return s2.encode(n4);
        } catch (e5) {
          throw E.from(e5, d.Internal);
        }
      } };
    }
    function Ge() {
      return { get(e3) {
        return e3.id in this ? this[e3.id] : e3.defaultValue;
      }, set(e3, n3) {
        return this[e3.id] = n3, this;
      }, delete(e3) {
        return delete this[e3.id], this;
      } };
    }
    var Ye = function(e3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n3, a3 = e3[Symbol.asyncIterator];
      return a3 ? a3.call(e3) : (e3 = "function" == typeof __values ? __values(e3) : e3[Symbol.iterator](), n3 = {}, t3("next"), t3("throw"), t3("return"), n3[Symbol.asyncIterator] = function() {
        return this;
      }, n3);
      function t3(a4) {
        n3[a4] = e3[a4] && function(n4) {
          return new Promise(function(t4, s2) {
            (function(e4, n5, a5, t5) {
              Promise.resolve(t5).then(function(n6) {
                e4({ value: n6, done: a5 });
              }, n5);
            })(t4, s2, (n4 = e3[a4](n4)).done, n4.value);
          });
        };
      }
    }, Je = function(e3) {
      return this instanceof Je ? (this.v = e3, this) : new Je(e3);
    }, Ve = function(e3, n3, a3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t3, s2 = a3.apply(e3, n3 || []), o2 = [];
      return t3 = {}, r3("next"), r3("throw"), r3("return", function(e4) {
        return function(n4) {
          return Promise.resolve(n4).then(e4, l2);
        };
      }), t3[Symbol.asyncIterator] = function() {
        return this;
      }, t3;
      function r3(e4, n4) {
        s2[e4] && (t3[e4] = function(n5) {
          return new Promise(function(a4, t4) {
            o2.push([e4, n5, a4, t4]) > 1 || i3(e4, n5);
          });
        }, n4 && (t3[e4] = n4(t3[e4])));
      }
      function i3(e4, n4) {
        try {
          (a4 = s2[e4](n4)).value instanceof Je ? Promise.resolve(a4.value.v).then(A2, l2) : c2(o2[0][2], a4);
        } catch (e5) {
          c2(o2[0][3], e5);
        }
        var a4;
      }
      function A2(e4) {
        i3("next", e4);
      }
      function l2(e4) {
        i3("throw", e4);
      }
      function c2(e4, n4) {
        e4(n4), o2.shift(), o2.length && i3(o2[0][0], o2[0][1]);
      }
    };
    function qe(e3) {
      return { async unary(n3, a3, t3, s2, o2, r3, i3) {
        const A2 = Ue(a3, e3.binaryOptions, e3.jsonOptions, e3);
        return s2 = void 0 === s2 ? e3.defaultTimeoutMs : s2 <= 0 ? void 0 : s2, await (function(e4) {
          const n4 = be(e4.next, e4.interceptors), [a4, t4, s3] = Oe(e4);
          return n4(Object.assign(Object.assign({}, e4.req), { message: Me(e4.req.method.I, e4.req.message), signal: a4 })).then((e5) => (s3(), e5), t4);
        })({ interceptors: e3.interceptors, signal: t3, timeoutMs: s2, req: { stream: false, service: n3, method: a3, url: we(e3.baseUrl, n3, a3), init: {}, header: oe(a3.kind, e3.useBinaryFormat, s2, o2, e3.acceptCompression, e3.sendCompression, true), contextValues: null != i3 ? i3 : Ge(), message: r3 }, next: async (t4) => {
          var s3;
          let o3 = A2.getI(e3.useBinaryFormat).serialize(t4.message);
          e3.sendCompression && o3.byteLength > e3.compressMinBytes ? (o3 = await e3.sendCompression.compress(o3), t4.header.set($, e3.sendCompression.name)) : t4.header.delete($);
          let r4;
          true === e3.useHttpGet && a3.idempotency === X.MethodIdempotency.NoSideEffects ? t4 = ue(t4, o3, e3.useBinaryFormat) : (r4 = De([o3]), 0 === o3.length && t4.header.set("Content-Length", "0"));
          const i4 = await e3.httpClient({ url: t4.url, method: null !== (s3 = t4.init.method) && void 0 !== s3 ? s3 : "POST", header: t4.header, signal: t4.signal, body: r4 }), { compression: l2, isUnaryError: c2, unaryError: m2 } = ie(a3.kind, e3.acceptCompression, e3.useBinaryFormat, i4.status, i4.header), [d2, g2] = (function(e4) {
            const n4 = new Headers(), a4 = new Headers();
            return e4.forEach((e5, t5) => {
              t5.toLowerCase().startsWith("trailer-") ? a4.append(t5.substring(8), e5) : n4.append(t5, e5);
            }), [n4, a4];
          })(i4.header);
          let u2 = await (function(e4, ...n4) {
            const [a4, t5, s4] = (function(e5) {
              let n5;
              "function" != typeof e5[e5.length - 1] && (n5 = e5.pop());
              const a5 = e5.pop();
              return [e5, a5, n5];
            })(n4);
            let o4, r5 = e4;
            return true === (null == s4 ? void 0 : s4.propagateDownStreamError) && (r5 = o4 = Se(r5)), r5 = Be(r5, ...a4, { propagateDownStreamError: false }), t5(r5).catch((e5) => o4 ? o4.abort(e5).then(() => Promise.reject(e5)) : Promise.reject(e5));
          })(i4.body, (E2 = e3.readMaxBytes, p2 = i4.header.get(z), async function(e4) {
            return await ve(e4, E2, p2);
          }), { propagateDownStreamError: false });
          var E2, p2;
          if (l2 && (u2 = await l2.decompress(u2, e3.readMaxBytes)), c2) throw (function(e4, n4, a4) {
            let t5;
            try {
              t5 = JSON.parse(new TextDecoder().decode(e4));
            } catch (e5) {
              throw a4;
            }
            return le(t5, n4, a4);
          })(u2, me(d2, g2), m2);
          return { stream: false, service: n3, method: a3, header: d2, message: A2.getO(e3.useBinaryFormat).parse(u2), trailer: g2 };
        } });
      }, async stream(n3, a3, t3, s2, o2, r3, i3) {
        const A2 = Ue(a3, e3.binaryOptions, e3.jsonOptions, e3), l2 = de(e3.jsonOptions);
        return s2 = void 0 === s2 ? e3.defaultTimeoutMs : s2 <= 0 ? void 0 : s2, (function(e4) {
          const n4 = be(e4.next, e4.interceptors), [a4, t4, s3] = Oe(e4), o3 = Object.assign(Object.assign({}, e4.req), { message: Fe(e4.req.method.I, e4.req.message), signal: a4 });
          let r4 = false;
          return a4.addEventListener("abort", function() {
            var n5, a5;
            const t5 = e4.req.message[Symbol.asyncIterator]();
            r4 || null === (n5 = t5.throw) || void 0 === n5 || n5.call(t5, this.reason).catch(() => {
            }), null === (a5 = t5.return) || void 0 === a5 || a5.call(t5).catch(() => {
            });
          }), n4(o3).then((e5) => Object.assign(Object.assign({}, e5), { message: { [Symbol.asyncIterator]() {
            const n5 = e5.message[Symbol.asyncIterator]();
            return { next: () => n5.next().then((e6) => (1 == e6.done && (r4 = true, s3()), e6), t4) };
          } } }), t4);
        })({ interceptors: e3.interceptors, signal: t3, timeoutMs: s2, req: { stream: true, service: n3, method: a3, url: we(e3.baseUrl, n3, a3), init: { method: "POST", redirect: "error", mode: "cors" }, header: oe(a3.kind, e3.useBinaryFormat, s2, o2, e3.acceptCompression, e3.sendCompression, true), contextValues: null != i3 ? i3 : Ge(), message: r3 }, next: async (n4) => {
          const t4 = await e3.httpClient({ url: n4.url, method: "POST", header: n4.header, signal: n4.signal, body: Be(n4.message, Qe(A2.getI(e3.useBinaryFormat)), Re(e3.sendCompression, e3.compressMinBytes), function(e4) {
            return Ce(this, arguments, function* () {
              var n5, a4, t5, s4;
              try {
                for (var o4, r5 = true, i4 = he(e4); !(n5 = (o4 = yield _e(i4.next())).done); r5 = true) {
                  s4 = o4.value, r5 = false;
                  const { flags: e5, data: n6 } = s4;
                  yield yield _e(Ie(e5, n6));
                }
              } catch (e5) {
                a4 = { error: e5 };
              } finally {
                try {
                  r5 || n5 || !(t5 = i4.return) || (yield _e(t5.call(i4)));
                } finally {
                  if (a4) throw a4.error;
                }
              }
            });
          }, { propagateDownStreamError: true }) }), { compression: s3 } = ie(a3.kind, e3.acceptCompression, e3.useBinaryFormat, t4.status, t4.header), o3 = Object.assign(Object.assign({}, n4), { header: t4.header, trailer: new Headers(), message: Be(t4.body, (r4 = e3.readMaxBytes, function(e4) {
            return Ce(this, arguments, function* () {
              var n5, a4, t5, s4;
              const o4 = Ee(r4);
              try {
                for (var i4, A3 = true, l3 = he(e4); !(n5 = (i4 = yield _e(l3.next())).done); A3 = true) {
                  s4 = i4.value, A3 = false;
                  const e5 = s4;
                  for (const n6 of o4.decode(e5)) yield yield _e(n6);
                }
              } catch (e5) {
                a4 = { error: e5 };
              } finally {
                try {
                  A3 || n5 || !(t5 = l3.return) || (yield _e(t5.call(l3)));
                } finally {
                  if (a4) throw a4.error;
                }
              }
              if (o4.byteLength > 0) throw new E("protocol error: incomplete envelope", d.InvalidArgument);
            });
          }), Ne(null != s3 ? s3 : null, e3.readMaxBytes), ye(A2.getO(e3.useBinaryFormat), 2, l2), function(e4) {
            return Ve(this, arguments, function* () {
              var n5, a4, s4, r5;
              let i4 = false;
              try {
                for (var A3, l3 = true, c2 = Ye(e4); !(n5 = (A3 = yield Je(c2.next())).done); l3 = true) {
                  r5 = A3.value, l3 = false;
                  const e5 = r5;
                  if (e5.end) {
                    if (i4) throw new E("protocol error: received extra EndStreamResponse", d.InvalidArgument);
                    if (i4 = true, e5.value.error) {
                      const n6 = e5.value.error;
                      throw t4.header.forEach((e6, a5) => {
                        n6.metadata.append(a5, e6);
                      }), n6;
                    }
                    e5.value.metadata.forEach((e6, n6) => o3.trailer.set(n6, e6));
                  } else {
                    if (i4) throw new E("protocol error: received extra message after EndStreamResponse", d.InvalidArgument);
                    yield yield Je(e5.value);
                  }
                }
              } catch (e5) {
                a4 = { error: e5 };
              } finally {
                try {
                  l3 || n5 || !(s4 = c2.return) || (yield Je(s4.call(c2)));
                } finally {
                  if (a4) throw a4.error;
                }
              }
              if (!i4) throw new E("protocol error: missing EndStreamResponse", d.InvalidArgument);
            });
          }, { propagateDownStreamError: true }) });
          var r4;
          return o3;
        } });
      } };
    }
    var He = function(e3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n3, a3 = e3[Symbol.asyncIterator];
      return a3 ? a3.call(e3) : (e3 = "function" == typeof __values ? __values(e3) : e3[Symbol.iterator](), n3 = {}, t3("next"), t3("throw"), t3("return"), n3[Symbol.asyncIterator] = function() {
        return this;
      }, n3);
      function t3(a4) {
        n3[a4] = e3[a4] && function(n4) {
          return new Promise(function(t4, s2) {
            (function(e4, n5, a5, t5) {
              Promise.resolve(t5).then(function(n6) {
                e4({ value: n6, done: a5 });
              }, n5);
            })(t4, s2, (n4 = e3[a4](n4)).done, n4.value);
          });
        };
      }
    }, We = function(e3) {
      return this instanceof We ? (this.v = e3, this) : new We(e3);
    }, Ke = function(e3) {
      var n3, a3;
      return n3 = {}, t3("next"), t3("throw", function(e4) {
        throw e4;
      }), t3("return"), n3[Symbol.iterator] = function() {
        return this;
      }, n3;
      function t3(t4, s2) {
        n3[t4] = e3[t4] ? function(n4) {
          return (a3 = !a3) ? { value: We(e3[t4](n4)), done: false } : s2 ? s2(n4) : n4;
        } : s2;
      }
    }, je = function(e3, n3, a3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t3, s2 = a3.apply(e3, n3 || []), o2 = [];
      return t3 = {}, r3("next"), r3("throw"), r3("return", function(e4) {
        return function(n4) {
          return Promise.resolve(n4).then(e4, l2);
        };
      }), t3[Symbol.asyncIterator] = function() {
        return this;
      }, t3;
      function r3(e4, n4) {
        s2[e4] && (t3[e4] = function(n5) {
          return new Promise(function(a4, t4) {
            o2.push([e4, n5, a4, t4]) > 1 || i3(e4, n5);
          });
        }, n4 && (t3[e4] = n4(t3[e4])));
      }
      function i3(e4, n4) {
        try {
          (a4 = s2[e4](n4)).value instanceof We ? Promise.resolve(a4.value.v).then(A2, l2) : c2(o2[0][2], a4);
        } catch (e5) {
          c2(o2[0][3], e5);
        }
        var a4;
      }
      function A2(e4) {
        i3("next", e4);
      }
      function l2(e4) {
        i3("throw", e4);
      }
      function c2(e4, n4) {
        e4(n4), o2.shift(), o2.length && i3(o2[0][0], o2[0][1]);
      }
    };
    function Xe(e3, n3) {
      return (function(e4, n4) {
        const a3 = {};
        for (const [t3, s2] of Object.entries(e4.methods)) {
          const o2 = n4(Object.assign(Object.assign({}, s2), { localName: t3, service: e4 }));
          null != o2 && (a3[t3] = o2);
        }
        return a3;
      })(e3, (a3) => {
        switch (a3.kind) {
          case X.MethodKind.Unary:
            return /* @__PURE__ */ (function(e4, n4, a4) {
              return async function(t3, s2) {
                var o2, r3;
                const i3 = await e4.unary(n4, a4, null == s2 ? void 0 : s2.signal, null == s2 ? void 0 : s2.timeoutMs, null == s2 ? void 0 : s2.headers, t3, null == s2 ? void 0 : s2.contextValues);
                return null === (o2 = null == s2 ? void 0 : s2.onHeader) || void 0 === o2 || o2.call(s2, i3.header), null === (r3 = null == s2 ? void 0 : s2.onTrailer) || void 0 === r3 || r3.call(s2, i3.trailer), i3.message;
              };
            })(n3, e3, a3);
          case X.MethodKind.ServerStreaming:
            return /* @__PURE__ */ (function(e4, n4, a4) {
              return function(t3, s2) {
                return ze(e4.stream(n4, a4, null == s2 ? void 0 : s2.signal, null == s2 ? void 0 : s2.timeoutMs, null == s2 ? void 0 : s2.headers, De([t3]), null == s2 ? void 0 : s2.contextValues), s2);
              };
            })(n3, e3, a3);
          case X.MethodKind.ClientStreaming:
            return /* @__PURE__ */ (function(e4, n4, a4) {
              return async function(t3, s2) {
                var o2, r3, i3, A2, l2, c2;
                const m2 = await e4.stream(n4, a4, null == s2 ? void 0 : s2.signal, null == s2 ? void 0 : s2.timeoutMs, null == s2 ? void 0 : s2.headers, t3, null == s2 ? void 0 : s2.contextValues);
                let g2;
                null === (l2 = null == s2 ? void 0 : s2.onHeader) || void 0 === l2 || l2.call(s2, m2.header);
                let u2 = 0;
                try {
                  for (var p2, T2 = true, k2 = He(m2.message); !(o2 = (p2 = await k2.next()).done); T2 = true) {
                    A2 = p2.value, T2 = false;
                    g2 = A2, u2++;
                  }
                } catch (e5) {
                  r3 = { error: e5 };
                } finally {
                  try {
                    T2 || o2 || !(i3 = k2.return) || await i3.call(k2);
                  } finally {
                    if (r3) throw r3.error;
                  }
                }
                if (!g2) throw new E("protocol error: missing response message", d.Unimplemented);
                if (u2 > 1) throw new E("protocol error: received extra messages for client streaming method", d.Unimplemented);
                return null === (c2 = null == s2 ? void 0 : s2.onTrailer) || void 0 === c2 || c2.call(s2, m2.trailer), g2;
              };
            })(n3, e3, a3);
          case X.MethodKind.BiDiStreaming:
            return /* @__PURE__ */ (function(e4, n4, a4) {
              return function(t3, s2) {
                return ze(e4.stream(n4, a4, null == s2 ? void 0 : s2.signal, null == s2 ? void 0 : s2.timeoutMs, null == s2 ? void 0 : s2.headers, t3, null == s2 ? void 0 : s2.contextValues), s2);
              };
            })(n3, e3, a3);
          default:
            return null;
        }
      });
    }
    function Ze(e3, n3) {
      return Xe(e3, n3);
    }
    function ze(e3, n3) {
      const a3 = (function() {
        return je(this, arguments, function* () {
          var a4, t3;
          const s2 = yield We(e3);
          null === (a4 = null == n3 ? void 0 : n3.onHeader) || void 0 === a4 || a4.call(n3, s2.header), yield We(yield* Ke(He(s2.message))), null === (t3 = null == n3 ? void 0 : n3.onTrailer) || void 0 === t3 || t3.call(n3, s2.trailer);
        });
      })()[Symbol.asyncIterator]();
      return { [Symbol.asyncIterator]: () => ({ next: () => a3.next() }) };
    }
    function $e(e3, n3) {
      if (!e3) throw new Error(n3);
    }
    function en(e3) {
      if ("number" != typeof e3) throw new Error("invalid int 32: " + typeof e3);
      if (!Number.isInteger(e3) || e3 > 2147483647 || e3 < -2147483648) throw new Error("invalid int 32: " + e3);
    }
    function nn(e3) {
      if ("number" != typeof e3) throw new Error("invalid uint 32: " + typeof e3);
      if (!Number.isInteger(e3) || e3 > 4294967295 || e3 < 0) throw new Error("invalid uint 32: " + e3);
    }
    function an(e3) {
      if ("number" != typeof e3) throw new Error("invalid float 32: " + typeof e3);
      if (Number.isFinite(e3) && (e3 > 34028234663852886e22 || e3 < -34028234663852886e22)) throw new Error("invalid float 32: " + e3);
    }
    const tn = /* @__PURE__ */ Symbol("@bufbuild/protobuf/enum-type");
    function sn(e3) {
      const n3 = e3[tn];
      return $e(n3, "missing enum type on enum object"), n3;
    }
    function on(e3, n3, a3, t3) {
      e3[tn] = rn(n3, a3.map((n4) => ({ no: n4.no, name: n4.name, localName: e3[n4.no] })), t3);
    }
    function rn(e3, n3, a3) {
      const t3 = /* @__PURE__ */ Object.create(null), s2 = /* @__PURE__ */ Object.create(null), o2 = [];
      for (const e4 of n3) {
        const n4 = ln(e4);
        o2.push(n4), t3[e4.name] = n4, s2[e4.no] = n4;
      }
      return { typeName: e3, values: o2, findName: (e4) => t3[e4], findNumber: (e4) => s2[e4] };
    }
    function An(e3, n3, a3) {
      const t3 = {};
      for (const e4 of n3) {
        const n4 = ln(e4);
        t3[n4.localName] = n4.no, t3[n4.no] = n4.localName;
      }
      return on(t3, e3, n3, a3), t3;
    }
    function ln(e3) {
      return "localName" in e3 ? e3 : { ...e3, localName: e3.name };
    }
    class cn {
      equals(e3) {
        return this.getType().runtime.util.equals(this.getType(), this, e3);
      }
      clone() {
        return this.getType().runtime.util.clone(this);
      }
      fromBinary(e3, n3) {
        const a3 = this.getType().runtime.bin, t3 = a3.makeReadOptions(n3);
        return a3.readMessage(this, t3.readerFactory(e3), e3.byteLength, t3), this;
      }
      fromJson(e3, n3) {
        const a3 = this.getType(), t3 = a3.runtime.json, s2 = t3.makeReadOptions(n3);
        return t3.readMessage(a3, e3, s2, this), this;
      }
      fromJsonString(e3, n3) {
        let a3;
        try {
          a3 = JSON.parse(e3);
        } catch (e4) {
          throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e4 instanceof Error ? e4.message : String(e4)}`);
        }
        return this.fromJson(a3, n3);
      }
      toBinary(e3) {
        const n3 = this.getType().runtime.bin, a3 = n3.makeWriteOptions(e3), t3 = a3.writerFactory();
        return n3.writeMessage(this, t3, a3), t3.finish();
      }
      toJson(e3) {
        const n3 = this.getType().runtime.json, a3 = n3.makeWriteOptions(e3);
        return n3.writeMessage(this, a3);
      }
      toJsonString(e3) {
        const n3 = this.toJson(e3);
        return JSON.stringify(n3, null, e3?.prettySpaces ?? 0);
      }
      toJSON() {
        return this.toJson({ emitDefaultValues: true });
      }
      getType() {
        return Object.getPrototypeOf(this).constructor;
      }
    }
    function mn() {
      let e3 = 0, n3 = 0;
      for (let a4 = 0; a4 < 28; a4 += 7) {
        let t3 = this.buf[this.pos++];
        if (e3 |= (127 & t3) << a4, !(128 & t3)) return this.assertBounds(), [e3, n3];
      }
      let a3 = this.buf[this.pos++];
      if (e3 |= (15 & a3) << 28, n3 = (112 & a3) >> 4, !(128 & a3)) return this.assertBounds(), [e3, n3];
      for (let a4 = 3; a4 <= 31; a4 += 7) {
        let t3 = this.buf[this.pos++];
        if (n3 |= (127 & t3) << a4, !(128 & t3)) return this.assertBounds(), [e3, n3];
      }
      throw new Error("invalid varint");
    }
    function dn(e3, n3, a3) {
      for (let t4 = 0; t4 < 28; t4 += 7) {
        const s3 = e3 >>> t4, o2 = !(s3 >>> 7 == 0 && 0 == n3), r3 = 255 & (o2 ? 128 | s3 : s3);
        if (a3.push(r3), !o2) return;
      }
      const t3 = e3 >>> 28 & 15 | (7 & n3) << 4, s2 = !!(n3 >> 3);
      if (a3.push(255 & (s2 ? 128 | t3 : t3)), s2) {
        for (let e4 = 3; e4 < 31; e4 += 7) {
          const t4 = n3 >>> e4, s3 = !(t4 >>> 7 == 0), o2 = 255 & (s3 ? 128 | t4 : t4);
          if (a3.push(o2), !s3) return;
        }
        a3.push(n3 >>> 31 & 1);
      }
    }
    const gn = 4294967296;
    function un(e3) {
      const n3 = "-" === e3[0];
      n3 && (e3 = e3.slice(1));
      const a3 = 1e6;
      let t3 = 0, s2 = 0;
      function o2(n4, o3) {
        const r3 = Number(e3.slice(n4, o3));
        s2 *= a3, t3 = t3 * a3 + r3, t3 >= gn && (s2 += t3 / gn | 0, t3 %= gn);
      }
      return o2(-24, -18), o2(-18, -12), o2(-12, -6), o2(-6), n3 ? Tn(t3, s2) : pn(t3, s2);
    }
    function En(e3, n3) {
      if ({ lo: e3, hi: n3 } = (function(e4, n4) {
        return { lo: e4 >>> 0, hi: n4 >>> 0 };
      })(e3, n3), n3 <= 2097151) return String(gn * n3 + e3);
      const a3 = 16777215 & (e3 >>> 24 | n3 << 8), t3 = n3 >> 16 & 65535;
      let s2 = (16777215 & e3) + 6777216 * a3 + 6710656 * t3, o2 = a3 + 8147497 * t3, r3 = 2 * t3;
      const i3 = 1e7;
      return s2 >= i3 && (o2 += Math.floor(s2 / i3), s2 %= i3), o2 >= i3 && (r3 += Math.floor(o2 / i3), o2 %= i3), r3.toString() + kn(o2) + kn(s2);
    }
    function pn(e3, n3) {
      return { lo: 0 | e3, hi: 0 | n3 };
    }
    function Tn(e3, n3) {
      return n3 = ~n3, e3 ? e3 = 1 + ~e3 : n3 += 1, pn(e3, n3);
    }
    const kn = (e3) => {
      const n3 = String(e3);
      return "0000000".slice(n3.length) + n3;
    };
    function In(e3, n3) {
      if (e3 >= 0) {
        for (; e3 > 127; ) n3.push(127 & e3 | 128), e3 >>>= 7;
        n3.push(e3);
      } else {
        for (let a3 = 0; a3 < 9; a3++) n3.push(127 & e3 | 128), e3 >>= 7;
        n3.push(1);
      }
    }
    function hn() {
      let e3 = this.buf[this.pos++], n3 = 127 & e3;
      if (!(128 & e3)) return this.assertBounds(), n3;
      if (e3 = this.buf[this.pos++], n3 |= (127 & e3) << 7, !(128 & e3)) return this.assertBounds(), n3;
      if (e3 = this.buf[this.pos++], n3 |= (127 & e3) << 14, !(128 & e3)) return this.assertBounds(), n3;
      if (e3 = this.buf[this.pos++], n3 |= (127 & e3) << 21, !(128 & e3)) return this.assertBounds(), n3;
      e3 = this.buf[this.pos++], n3 |= (15 & e3) << 28;
      for (let n4 = 5; 128 & e3 && n4 < 10; n4++) e3 = this.buf[this.pos++];
      if (128 & e3) throw new Error("invalid varint");
      return this.assertBounds(), n3 >>> 0;
    }
    const _n = (function() {
      const e3 = new DataView(new ArrayBuffer(8));
      if ("function" == typeof BigInt && "function" == typeof e3.getBigInt64 && "function" == typeof e3.getBigUint64 && "function" == typeof e3.setBigInt64 && "function" == typeof e3.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
        const n4 = BigInt("-9223372036854775808"), a4 = BigInt("9223372036854775807"), t3 = BigInt("0"), s2 = BigInt("18446744073709551615");
        return { zero: BigInt(0), supported: true, parse(e4) {
          const t4 = "bigint" == typeof e4 ? e4 : BigInt(e4);
          if (t4 > a4 || t4 < n4) throw new Error(`int64 invalid: ${e4}`);
          return t4;
        }, uParse(e4) {
          const n5 = "bigint" == typeof e4 ? e4 : BigInt(e4);
          if (n5 > s2 || n5 < t3) throw new Error(`uint64 invalid: ${e4}`);
          return n5;
        }, enc(n5) {
          return e3.setBigInt64(0, this.parse(n5), true), { lo: e3.getInt32(0, true), hi: e3.getInt32(4, true) };
        }, uEnc(n5) {
          return e3.setBigInt64(0, this.uParse(n5), true), { lo: e3.getInt32(0, true), hi: e3.getInt32(4, true) };
        }, dec: (n5, a5) => (e3.setInt32(0, n5, true), e3.setInt32(4, a5, true), e3.getBigInt64(0, true)), uDec: (n5, a5) => (e3.setInt32(0, n5, true), e3.setInt32(4, a5, true), e3.getBigUint64(0, true)) };
      }
      const n3 = (e4) => $e(/^-?[0-9]+$/.test(e4), `int64 invalid: ${e4}`), a3 = (e4) => $e(/^[0-9]+$/.test(e4), `uint64 invalid: ${e4}`);
      return { zero: "0", supported: false, parse: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), n3(e4), e4), uParse: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), a3(e4), e4), enc: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), n3(e4), un(e4)), uEnc: (e4) => ("string" != typeof e4 && (e4 = e4.toString()), a3(e4), un(e4)), dec: (e4, n4) => (function(e5, n5) {
        let a4 = pn(e5, n5);
        const t3 = 2147483648 & a4.hi;
        t3 && (a4 = Tn(a4.lo, a4.hi));
        const s2 = En(a4.lo, a4.hi);
        return t3 ? "-" + s2 : s2;
      })(e4, n4), uDec: (e4, n4) => En(e4, n4) };
    })();
    var Cn = ((e3) => (e3[e3.DOUBLE = 1] = "DOUBLE", e3[e3.FLOAT = 2] = "FLOAT", e3[e3.INT64 = 3] = "INT64", e3[e3.UINT64 = 4] = "UINT64", e3[e3.INT32 = 5] = "INT32", e3[e3.FIXED64 = 6] = "FIXED64", e3[e3.FIXED32 = 7] = "FIXED32", e3[e3.BOOL = 8] = "BOOL", e3[e3.STRING = 9] = "STRING", e3[e3.BYTES = 12] = "BYTES", e3[e3.UINT32 = 13] = "UINT32", e3[e3.SFIXED32 = 15] = "SFIXED32", e3[e3.SFIXED64 = 16] = "SFIXED64", e3[e3.SINT32 = 17] = "SINT32", e3[e3.SINT64 = 18] = "SINT64", e3))(Cn || {}), fn = ((e3) => (e3[e3.BIGINT = 0] = "BIGINT", e3[e3.STRING = 1] = "STRING", e3))(fn || {});
    function Bn(e3, n3, a3) {
      if (n3 === a3) return true;
      if (e3 == Cn.BYTES) {
        if (!(n3 instanceof Uint8Array && a3 instanceof Uint8Array)) return false;
        if (n3.length !== a3.length) return false;
        for (let e4 = 0; e4 < n3.length; e4++) if (n3[e4] !== a3[e4]) return false;
        return true;
      }
      switch (e3) {
        case Cn.UINT64:
        case Cn.FIXED64:
        case Cn.INT64:
        case Cn.SFIXED64:
        case Cn.SINT64:
          return n3 == a3;
      }
      return false;
    }
    function Qn(e3, n3) {
      switch (e3) {
        case Cn.BOOL:
          return false;
        case Cn.UINT64:
        case Cn.FIXED64:
        case Cn.INT64:
        case Cn.SFIXED64:
        case Cn.SINT64:
          return 0 == n3 ? _n.zero : "0";
        case Cn.DOUBLE:
        case Cn.FLOAT:
          return 0;
        case Cn.BYTES:
          return new Uint8Array(0);
        case Cn.STRING:
          return "";
        default:
          return 0;
      }
    }
    function yn(e3, n3) {
      switch (e3) {
        case Cn.BOOL:
          return false === n3;
        case Cn.STRING:
          return "" === n3;
        case Cn.BYTES:
          return n3 instanceof Uint8Array && !n3.byteLength;
        default:
          return 0 == n3;
      }
    }
    function Rn(e3) {
      const n3 = e3.field.localName, a3 = /* @__PURE__ */ Object.create(null);
      return a3[n3] = (function(e4) {
        const n4 = e4.field;
        if (n4.repeated) return [];
        if (void 0 !== n4.default) return n4.default;
        switch (n4.kind) {
          case "enum":
            return n4.T.values[0].no;
          case "scalar":
            return Qn(n4.T, n4.L);
          case "message":
            const e5 = n4.T, a4 = new e5();
            return e5.fieldWrapper ? e5.fieldWrapper.unwrapField(a4) : a4;
          case "map":
            throw "map fields are not allowed to be extensions";
        }
      })(e3), [a3, () => a3[n3]];
    }
    let Nn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), vn = [];
    for (let e3 = 0; e3 < Nn.length; e3++) vn[Nn[e3].charCodeAt(0)] = e3;
    vn["-".charCodeAt(0)] = Nn.indexOf("+"), vn["_".charCodeAt(0)] = Nn.indexOf("/");
    const Sn = { dec(e3) {
      let n3 = 3 * e3.length / 4;
      "=" == e3[e3.length - 2] ? n3 -= 2 : "=" == e3[e3.length - 1] && (n3 -= 1);
      let a3, t3 = new Uint8Array(n3), s2 = 0, o2 = 0, r3 = 0;
      for (let n4 = 0; n4 < e3.length; n4++) {
        if (a3 = vn[e3.charCodeAt(n4)], void 0 === a3) switch (e3[n4]) {
          case "=":
            o2 = 0;
          case "\n":
          case "\r":
          case "	":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string.");
        }
        switch (o2) {
          case 0:
            r3 = a3, o2 = 1;
            break;
          case 1:
            t3[s2++] = r3 << 2 | (48 & a3) >> 4, r3 = a3, o2 = 2;
            break;
          case 2:
            t3[s2++] = (15 & r3) << 4 | (60 & a3) >> 2, r3 = a3, o2 = 3;
            break;
          case 3:
            t3[s2++] = (3 & r3) << 6 | a3, o2 = 0;
        }
      }
      if (1 == o2) throw Error("invalid base64 string.");
      return t3.subarray(0, s2);
    }, enc(e3) {
      let n3, a3 = "", t3 = 0, s2 = 0;
      for (let o2 = 0; o2 < e3.length; o2++) switch (n3 = e3[o2], t3) {
        case 0:
          a3 += Nn[n3 >> 2], s2 = (3 & n3) << 4, t3 = 1;
          break;
        case 1:
          a3 += Nn[s2 | n3 >> 4], s2 = (15 & n3) << 2, t3 = 2;
          break;
        case 2:
          a3 += Nn[s2 | n3 >> 6], a3 += Nn[63 & n3], t3 = 0;
      }
      return t3 && (a3 += Nn[s2], a3 += "=", 1 == t3 && (a3 += "=")), a3;
    } };
    function Dn(e3, n3, a3) {
      Mn(n3, e3);
      const t3 = n3.runtime.bin.makeReadOptions(a3), s2 = (function(e4, n4) {
        if (!n4.repeated && ("enum" == n4.kind || "scalar" == n4.kind)) {
          for (let a4 = e4.length - 1; a4 >= 0; --a4) if (e4[a4].no == n4.no) return [e4[a4]];
          return [];
        }
        return e4.filter((e5) => e5.no === n4.no);
      })(e3.getType().runtime.bin.listUnknownFields(e3), n3.field), [o2, r3] = Rn(n3);
      for (const e4 of s2) n3.runtime.bin.readField(o2, t3.readerFactory(e4.data), n3.field, e4.wireType, t3);
      return r3();
    }
    function wn(e3, n3, a3, t3) {
      Mn(n3, e3);
      const s2 = n3.runtime.bin.makeReadOptions(t3), o2 = n3.runtime.bin.makeWriteOptions(t3);
      if (bn(e3, n3)) {
        const a4 = e3.getType().runtime.bin.listUnknownFields(e3).filter((e4) => e4.no != n3.field.no);
        e3.getType().runtime.bin.discardUnknownFields(e3);
        for (const n4 of a4) e3.getType().runtime.bin.onUnknownField(e3, n4.no, n4.wireType, n4.data);
      }
      const r3 = o2.writerFactory();
      let i3 = n3.field;
      i3.opt || i3.repeated || "enum" != i3.kind && "scalar" != i3.kind || (i3 = { ...n3.field, opt: true }), n3.runtime.bin.writeField(i3, a3, r3, o2);
      const A2 = s2.readerFactory(r3.finish());
      for (; A2.pos < A2.len; ) {
        const [n4, a4] = A2.tag(), t4 = A2.skip(a4, n4);
        e3.getType().runtime.bin.onUnknownField(e3, n4, a4, t4);
      }
    }
    function bn(e3, n3) {
      const a3 = e3.getType();
      return n3.extendee.typeName === a3.typeName && !!a3.runtime.bin.listUnknownFields(e3).find((e4) => e4.no == n3.field.no);
    }
    function Mn(e3, n3) {
      $e(e3.extendee.typeName == n3.getType().typeName, `extension ${e3.typeName} can only be applied to message ${e3.extendee.typeName}`);
    }
    function Fn(e3, n3) {
      const a3 = e3.localName;
      if (e3.repeated) return n3[a3].length > 0;
      if (e3.oneof) return n3[e3.oneof.localName].case === a3;
      switch (e3.kind) {
        case "enum":
        case "scalar":
          return e3.opt || e3.req ? void 0 !== n3[a3] : "enum" == e3.kind ? n3[a3] !== e3.T.values[0].no : !yn(e3.T, n3[a3]);
        case "message":
          return void 0 !== n3[a3];
        case "map":
          return Object.keys(n3[a3]).length > 0;
      }
    }
    function On(e3, n3) {
      const a3 = e3.localName, t3 = !e3.opt && !e3.req;
      if (e3.repeated) n3[a3] = [];
      else if (e3.oneof) n3[e3.oneof.localName] = { case: void 0 };
      else switch (e3.kind) {
        case "map":
          n3[a3] = {};
          break;
        case "enum":
          n3[a3] = t3 ? e3.T.values[0].no : void 0;
          break;
        case "scalar":
          n3[a3] = t3 ? Qn(e3.T, e3.L) : void 0;
          break;
        case "message":
          n3[a3] = void 0;
      }
    }
    function Un(e3, n3) {
      if (null === e3 || "object" != typeof e3) return false;
      if (!Object.getOwnPropertyNames(cn.prototype).every((n4) => n4 in e3 && "function" == typeof e3[n4])) return false;
      const a3 = e3.getType();
      return null !== a3 && "function" == typeof a3 && "typeName" in a3 && "string" == typeof a3.typeName && (void 0 === n3 || a3.typeName == n3.typeName);
    }
    function Ln(e3, n3) {
      const a3 = Un(n3);
      return a3 || e3.fieldWrapper ? a3 || !e3.fieldWrapper ? n3 : e3.fieldWrapper.wrapField(n3) : new e3(n3);
    }
    Cn.DOUBLE, Cn.FLOAT, Cn.INT64, Cn.UINT64, Cn.INT32, Cn.UINT32, Cn.BOOL, Cn.STRING, Cn.BYTES;
    const Pn = { ignoreUnknownFields: false }, xn = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
    function Gn(e3) {
      return e3 ? { ...Pn, ...e3 } : Pn;
    }
    function Yn(e3) {
      return e3 ? { ...xn, ...e3 } : xn;
    }
    const Jn = /* @__PURE__ */ Symbol(), Vn = /* @__PURE__ */ Symbol();
    function qn(e3) {
      if (null === e3) return "null";
      switch (typeof e3) {
        case "object":
          return Array.isArray(e3) ? "array" : "object";
        case "string":
          return e3.length > 100 ? "string" : `"${e3.split('"').join('\\"')}"`;
        default:
          return String(e3);
      }
    }
    function Hn(e3, n3, a3, t3, s2) {
      let o2 = a3.localName;
      if (a3.repeated) {
        if ($e("map" != a3.kind), null === n3) return;
        if (!Array.isArray(n3)) throw new Error(`cannot decode field ${s2.typeName}.${a3.name} from JSON: ${qn(n3)}`);
        const r3 = e3[o2];
        for (const e4 of n3) {
          if (null === e4) throw new Error(`cannot decode field ${s2.typeName}.${a3.name} from JSON: ${qn(e4)}`);
          switch (a3.kind) {
            case "message":
              r3.push(a3.T.fromJson(e4, t3));
              break;
            case "enum":
              const n4 = jn(a3.T, e4, t3.ignoreUnknownFields, true);
              n4 !== Vn && r3.push(n4);
              break;
            case "scalar":
              try {
                r3.push(Kn(a3.T, e4, a3.L, true));
              } catch (n5) {
                let t4 = `cannot decode field ${s2.typeName}.${a3.name} from JSON: ${qn(e4)}`;
                throw n5 instanceof Error && n5.message.length > 0 && (t4 += `: ${n5.message}`), new Error(t4);
              }
          }
        }
      } else if ("map" == a3.kind) {
        if (null === n3) return;
        if ("object" != typeof n3 || Array.isArray(n3)) throw new Error(`cannot decode field ${s2.typeName}.${a3.name} from JSON: ${qn(n3)}`);
        const r3 = e3[o2];
        for (const [e4, o3] of Object.entries(n3)) {
          if (null === o3) throw new Error(`cannot decode field ${s2.typeName}.${a3.name} from JSON: map value null`);
          let i3;
          try {
            i3 = Wn(a3.K, e4);
          } catch (e5) {
            let t4 = `cannot decode map key for field ${s2.typeName}.${a3.name} from JSON: ${qn(n3)}`;
            throw e5 instanceof Error && e5.message.length > 0 && (t4 += `: ${e5.message}`), new Error(t4);
          }
          switch (a3.V.kind) {
            case "message":
              r3[i3] = a3.V.T.fromJson(o3, t3);
              break;
            case "enum":
              const e5 = jn(a3.V.T, o3, t3.ignoreUnknownFields, true);
              e5 !== Vn && (r3[i3] = e5);
              break;
            case "scalar":
              try {
                r3[i3] = Kn(a3.V.T, o3, fn.BIGINT, true);
              } catch (e6) {
                let t4 = `cannot decode map value for field ${s2.typeName}.${a3.name} from JSON: ${qn(n3)}`;
                throw e6 instanceof Error && e6.message.length > 0 && (t4 += `: ${e6.message}`), new Error(t4);
              }
          }
        }
      } else switch (a3.oneof && (e3 = e3[a3.oneof.localName] = { case: o2 }, o2 = "value"), a3.kind) {
        case "message":
          const r3 = a3.T;
          if (null === n3 && "google.protobuf.Value" != r3.typeName) return;
          let i3 = e3[o2];
          Un(i3) ? i3.fromJson(n3, t3) : (e3[o2] = i3 = r3.fromJson(n3, t3), r3.fieldWrapper && !a3.oneof && (e3[o2] = r3.fieldWrapper.unwrapField(i3)));
          break;
        case "enum":
          const A2 = jn(a3.T, n3, t3.ignoreUnknownFields, false);
          switch (A2) {
            case Jn:
              On(a3, e3);
              break;
            case Vn:
              break;
            default:
              e3[o2] = A2;
          }
          break;
        case "scalar":
          try {
            const t4 = Kn(a3.T, n3, a3.L, false);
            if (t4 === Jn) On(a3, e3);
            else e3[o2] = t4;
          } catch (e4) {
            let t4 = `cannot decode field ${s2.typeName}.${a3.name} from JSON: ${qn(n3)}`;
            throw e4 instanceof Error && e4.message.length > 0 && (t4 += `: ${e4.message}`), new Error(t4);
          }
      }
    }
    function Wn(e3, n3) {
      if (e3 === Cn.BOOL) switch (n3) {
        case "true":
          n3 = true;
          break;
        case "false":
          n3 = false;
      }
      return Kn(e3, n3, fn.BIGINT, true).toString();
    }
    function Kn(e3, n3, a3, t3) {
      if (null === n3) return t3 ? Qn(e3, a3) : Jn;
      switch (e3) {
        case Cn.DOUBLE:
        case Cn.FLOAT:
          if ("NaN" === n3) return Number.NaN;
          if ("Infinity" === n3) return Number.POSITIVE_INFINITY;
          if ("-Infinity" === n3) return Number.NEGATIVE_INFINITY;
          if ("" === n3) break;
          if ("string" == typeof n3 && n3.trim().length !== n3.length) break;
          if ("string" != typeof n3 && "number" != typeof n3) break;
          const t4 = Number(n3);
          if (Number.isNaN(t4)) break;
          if (!Number.isFinite(t4)) break;
          return e3 == Cn.FLOAT && an(t4), t4;
        case Cn.INT32:
        case Cn.FIXED32:
        case Cn.SFIXED32:
        case Cn.SINT32:
        case Cn.UINT32:
          let s2;
          if ("number" == typeof n3 ? s2 = n3 : "string" == typeof n3 && n3.length > 0 && n3.trim().length === n3.length && (s2 = Number(n3)), void 0 === s2) break;
          return e3 == Cn.UINT32 || e3 == Cn.FIXED32 ? nn(s2) : en(s2), s2;
        case Cn.INT64:
        case Cn.SFIXED64:
        case Cn.SINT64:
          if ("number" != typeof n3 && "string" != typeof n3) break;
          const o2 = _n.parse(n3);
          return a3 ? o2.toString() : o2;
        case Cn.FIXED64:
        case Cn.UINT64:
          if ("number" != typeof n3 && "string" != typeof n3) break;
          const r3 = _n.uParse(n3);
          return a3 ? r3.toString() : r3;
        case Cn.BOOL:
          if ("boolean" != typeof n3) break;
          return n3;
        case Cn.STRING:
          if ("string" != typeof n3) break;
          try {
            encodeURIComponent(n3);
          } catch (e4) {
            throw new Error("invalid UTF8");
          }
          return n3;
        case Cn.BYTES:
          if ("" === n3) return new Uint8Array(0);
          if ("string" != typeof n3) break;
          return Sn.dec(n3);
      }
      throw new Error();
    }
    function jn(e3, n3, a3, t3) {
      if (null === n3) return "google.protobuf.NullValue" == e3.typeName ? 0 : t3 ? e3.values[0].no : Jn;
      switch (typeof n3) {
        case "number":
          if (Number.isInteger(n3)) return n3;
          break;
        case "string":
          const t4 = e3.findName(n3);
          if (void 0 !== t4) return t4.no;
          if (a3) return Vn;
      }
      throw new Error(`cannot decode enum ${e3.typeName} from JSON: ${qn(n3)}`);
    }
    function Xn(e3) {
      return !(!e3.repeated && "map" != e3.kind) || !e3.oneof && ("message" != e3.kind && (!e3.opt && !e3.req));
    }
    function Zn(e3, n3, a3) {
      if ("map" == e3.kind) {
        $e("object" == typeof n3 && null != n3);
        const t3 = {}, s2 = Object.entries(n3);
        switch (e3.V.kind) {
          case "scalar":
            for (const [n5, a4] of s2) t3[n5.toString()] = $n(e3.V.T, a4);
            break;
          case "message":
            for (const [e4, n5] of s2) t3[e4.toString()] = n5.toJson(a3);
            break;
          case "enum":
            const n4 = e3.V.T;
            for (const [e4, o2] of s2) t3[e4.toString()] = zn(n4, o2, a3.enumAsInteger);
        }
        return a3.emitDefaultValues || s2.length > 0 ? t3 : void 0;
      }
      if (e3.repeated) {
        $e(Array.isArray(n3));
        const t3 = [];
        switch (e3.kind) {
          case "scalar":
            for (let a4 = 0; a4 < n3.length; a4++) t3.push($n(e3.T, n3[a4]));
            break;
          case "enum":
            for (let s2 = 0; s2 < n3.length; s2++) t3.push(zn(e3.T, n3[s2], a3.enumAsInteger));
            break;
          case "message":
            for (let e4 = 0; e4 < n3.length; e4++) t3.push(n3[e4].toJson(a3));
        }
        return a3.emitDefaultValues || t3.length > 0 ? t3 : void 0;
      }
      switch (e3.kind) {
        case "scalar":
          return $n(e3.T, n3);
        case "enum":
          return zn(e3.T, n3, a3.enumAsInteger);
        case "message":
          return Ln(e3.T, n3).toJson(a3);
      }
    }
    function zn(e3, n3, a3) {
      if ($e("number" == typeof n3), "google.protobuf.NullValue" == e3.typeName) return null;
      if (a3) return n3;
      const t3 = e3.findNumber(n3);
      return t3?.name ?? n3;
    }
    function $n(e3, n3) {
      switch (e3) {
        case Cn.INT32:
        case Cn.SFIXED32:
        case Cn.SINT32:
        case Cn.FIXED32:
        case Cn.UINT32:
          return $e("number" == typeof n3), n3;
        case Cn.FLOAT:
        case Cn.DOUBLE:
          return $e("number" == typeof n3), Number.isNaN(n3) ? "NaN" : n3 === Number.POSITIVE_INFINITY ? "Infinity" : n3 === Number.NEGATIVE_INFINITY ? "-Infinity" : n3;
        case Cn.STRING:
          return $e("string" == typeof n3), n3;
        case Cn.BOOL:
          return $e("boolean" == typeof n3), n3;
        case Cn.UINT64:
        case Cn.FIXED64:
        case Cn.INT64:
        case Cn.SFIXED64:
        case Cn.SINT64:
          return $e("bigint" == typeof n3 || "string" == typeof n3 || "number" == typeof n3), n3.toString();
        case Cn.BYTES:
          return $e(n3 instanceof Uint8Array), Sn.enc(n3);
      }
    }
    var ea = ((e3) => (e3[e3.Varint = 0] = "Varint", e3[e3.Bit64 = 1] = "Bit64", e3[e3.LengthDelimited = 2] = "LengthDelimited", e3[e3.StartGroup = 3] = "StartGroup", e3[e3.EndGroup = 4] = "EndGroup", e3[e3.Bit32 = 5] = "Bit32", e3))(ea || {});
    class na {
      constructor(e3) {
        this.stack = [], this.textEncoder = e3 ?? new TextEncoder(), this.chunks = [], this.buf = [];
      }
      finish() {
        this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []);
        let e3 = 0;
        for (let n4 = 0; n4 < this.chunks.length; n4++) e3 += this.chunks[n4].length;
        let n3 = new Uint8Array(e3), a3 = 0;
        for (let e4 = 0; e4 < this.chunks.length; e4++) n3.set(this.chunks[e4], a3), a3 += this.chunks[e4].length;
        return this.chunks = [], n3;
      }
      fork() {
        return this.stack.push({ chunks: this.chunks, buf: this.buf }), this.chunks = [], this.buf = [], this;
      }
      join() {
        let e3 = this.finish(), n3 = this.stack.pop();
        if (!n3) throw new Error("invalid state, fork stack empty");
        return this.chunks = n3.chunks, this.buf = n3.buf, this.uint32(e3.byteLength), this.raw(e3);
      }
      tag(e3, n3) {
        return this.uint32((e3 << 3 | n3) >>> 0);
      }
      raw(e3) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e3), this;
      }
      uint32(e3) {
        for (nn(e3); e3 > 127; ) this.buf.push(127 & e3 | 128), e3 >>>= 7;
        return this.buf.push(e3), this;
      }
      int32(e3) {
        return en(e3), In(e3, this.buf), this;
      }
      bool(e3) {
        return this.buf.push(e3 ? 1 : 0), this;
      }
      bytes(e3) {
        return this.uint32(e3.byteLength), this.raw(e3);
      }
      string(e3) {
        let n3 = this.textEncoder.encode(e3);
        return this.uint32(n3.byteLength), this.raw(n3);
      }
      float(e3) {
        an(e3);
        let n3 = new Uint8Array(4);
        return new DataView(n3.buffer).setFloat32(0, e3, true), this.raw(n3);
      }
      double(e3) {
        let n3 = new Uint8Array(8);
        return new DataView(n3.buffer).setFloat64(0, e3, true), this.raw(n3);
      }
      fixed32(e3) {
        nn(e3);
        let n3 = new Uint8Array(4);
        return new DataView(n3.buffer).setUint32(0, e3, true), this.raw(n3);
      }
      sfixed32(e3) {
        en(e3);
        let n3 = new Uint8Array(4);
        return new DataView(n3.buffer).setInt32(0, e3, true), this.raw(n3);
      }
      sint32(e3) {
        return en(e3), In(e3 = (e3 << 1 ^ e3 >> 31) >>> 0, this.buf), this;
      }
      sfixed64(e3) {
        let n3 = new Uint8Array(8), a3 = new DataView(n3.buffer), t3 = _n.enc(e3);
        return a3.setInt32(0, t3.lo, true), a3.setInt32(4, t3.hi, true), this.raw(n3);
      }
      fixed64(e3) {
        let n3 = new Uint8Array(8), a3 = new DataView(n3.buffer), t3 = _n.uEnc(e3);
        return a3.setInt32(0, t3.lo, true), a3.setInt32(4, t3.hi, true), this.raw(n3);
      }
      int64(e3) {
        let n3 = _n.enc(e3);
        return dn(n3.lo, n3.hi, this.buf), this;
      }
      sint64(e3) {
        let n3 = _n.enc(e3), a3 = n3.hi >> 31;
        return dn(n3.lo << 1 ^ a3, (n3.hi << 1 | n3.lo >>> 31) ^ a3, this.buf), this;
      }
      uint64(e3) {
        let n3 = _n.uEnc(e3);
        return dn(n3.lo, n3.hi, this.buf), this;
      }
    }
    class aa {
      constructor(e3, n3) {
        this.varint64 = mn, this.uint32 = hn, this.buf = e3, this.len = e3.length, this.pos = 0, this.view = new DataView(e3.buffer, e3.byteOffset, e3.byteLength), this.textDecoder = n3 ?? new TextDecoder();
      }
      tag() {
        let e3 = this.uint32(), n3 = e3 >>> 3, a3 = 7 & e3;
        if (n3 <= 0 || a3 < 0 || a3 > 5) throw new Error("illegal tag: field no " + n3 + " wire type " + a3);
        return [n3, a3];
      }
      skip(e3, n3) {
        let a3 = this.pos;
        switch (e3) {
          case 0:
            for (; 128 & this.buf[this.pos++]; ) ;
            break;
          case 1:
            this.pos += 4;
          case 5:
            this.pos += 4;
            break;
          case 2:
            let a4 = this.uint32();
            this.pos += a4;
            break;
          case 3:
            for (; ; ) {
              const [e4, a5] = this.tag();
              if (4 === a5) {
                if (void 0 !== n3 && e4 !== n3) throw new Error("invalid end group tag");
                break;
              }
              this.skip(a5, e4);
            }
            break;
          default:
            throw new Error("cant skip wire type " + e3);
        }
        return this.assertBounds(), this.buf.subarray(a3, this.pos);
      }
      assertBounds() {
        if (this.pos > this.len) throw new RangeError("premature EOF");
      }
      int32() {
        return 0 | this.uint32();
      }
      sint32() {
        let e3 = this.uint32();
        return e3 >>> 1 ^ -(1 & e3);
      }
      int64() {
        return _n.dec(...this.varint64());
      }
      uint64() {
        return _n.uDec(...this.varint64());
      }
      sint64() {
        let [e3, n3] = this.varint64(), a3 = -(1 & e3);
        return e3 = (e3 >>> 1 | (1 & n3) << 31) ^ a3, n3 = n3 >>> 1 ^ a3, _n.dec(e3, n3);
      }
      bool() {
        let [e3, n3] = this.varint64();
        return 0 !== e3 || 0 !== n3;
      }
      fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, true);
      }
      sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, true);
      }
      fixed64() {
        return _n.uDec(this.sfixed32(), this.sfixed32());
      }
      sfixed64() {
        return _n.dec(this.sfixed32(), this.sfixed32());
      }
      float() {
        return this.view.getFloat32((this.pos += 4) - 4, true);
      }
      double() {
        return this.view.getFloat64((this.pos += 8) - 8, true);
      }
      bytes() {
        let e3 = this.uint32(), n3 = this.pos;
        return this.pos += e3, this.assertBounds(), this.buf.subarray(n3, n3 + e3);
      }
      string() {
        return this.textDecoder.decode(this.bytes());
      }
    }
    const ta = /* @__PURE__ */ Symbol("@bufbuild/protobuf/unknown-fields"), sa = { readUnknownFields: true, readerFactory: (e3) => new aa(e3) }, oa = { writeUnknownFields: true, writerFactory: () => new na() };
    function ra(e3) {
      return e3 ? { ...sa, ...e3 } : sa;
    }
    function ia(e3) {
      return e3 ? { ...oa, ...e3 } : oa;
    }
    function Aa(e3, n3, a3, t3, s2) {
      let { repeated: o2, localName: r3 } = a3;
      switch (a3.oneof && ((e3 = e3[a3.oneof.localName]).case != r3 && delete e3.value, e3.case = r3, r3 = "value"), a3.kind) {
        case "scalar":
        case "enum":
          const i3 = "enum" == a3.kind ? Cn.INT32 : a3.T;
          let A2 = ma;
          if ("scalar" == a3.kind && a3.L > 0 && (A2 = ca), o2) {
            let a4 = e3[r3];
            if (t3 == ea.LengthDelimited && i3 != Cn.STRING && i3 != Cn.BYTES) {
              let e4 = n3.uint32() + n3.pos;
              for (; n3.pos < e4; ) a4.push(A2(n3, i3));
            } else a4.push(A2(n3, i3));
          } else e3[r3] = A2(n3, i3);
          break;
        case "message":
          const l2 = a3.T;
          o2 ? e3[r3].push(la(n3, new l2(), s2, a3)) : Un(e3[r3]) ? la(n3, e3[r3], s2, a3) : (e3[r3] = la(n3, new l2(), s2, a3), !l2.fieldWrapper || a3.oneof || a3.repeated || (e3[r3] = l2.fieldWrapper.unwrapField(e3[r3])));
          break;
        case "map":
          let [c2, m2] = (function(e4, n4, a4) {
            const t4 = n4.uint32(), s3 = n4.pos + t4;
            let o3, r4;
            for (; n4.pos < s3; ) {
              const [t5] = n4.tag();
              switch (t5) {
                case 1:
                  o3 = ma(n4, e4.K);
                  break;
                case 2:
                  switch (e4.V.kind) {
                    case "scalar":
                      r4 = ma(n4, e4.V.T);
                      break;
                    case "enum":
                      r4 = n4.int32();
                      break;
                    case "message":
                      r4 = la(n4, new e4.V.T(), a4, void 0);
                  }
              }
            }
            void 0 === o3 && (o3 = Qn(e4.K, fn.BIGINT));
            "string" != typeof o3 && "number" != typeof o3 && (o3 = o3.toString());
            if (void 0 === r4) switch (e4.V.kind) {
              case "scalar":
                r4 = Qn(e4.V.T, fn.BIGINT);
                break;
              case "enum":
                r4 = e4.V.T.values[0].no;
                break;
              case "message":
                r4 = new e4.V.T();
            }
            return [o3, r4];
          })(a3, n3, s2);
          e3[r3][c2] = m2;
      }
    }
    function la(e3, n3, a3, t3) {
      const s2 = n3.getType().runtime.bin, o2 = t3?.delimited;
      return s2.readMessage(n3, e3, o2 ? t3.no : e3.uint32(), a3, o2), n3;
    }
    function ca(e3, n3) {
      const a3 = ma(e3, n3);
      return "bigint" == typeof a3 ? a3.toString() : a3;
    }
    function ma(e3, n3) {
      switch (n3) {
        case Cn.STRING:
          return e3.string();
        case Cn.BOOL:
          return e3.bool();
        case Cn.DOUBLE:
          return e3.double();
        case Cn.FLOAT:
          return e3.float();
        case Cn.INT32:
          return e3.int32();
        case Cn.INT64:
          return e3.int64();
        case Cn.UINT64:
          return e3.uint64();
        case Cn.FIXED64:
          return e3.fixed64();
        case Cn.BYTES:
          return e3.bytes();
        case Cn.FIXED32:
          return e3.fixed32();
        case Cn.SFIXED32:
          return e3.sfixed32();
        case Cn.SFIXED64:
          return e3.sfixed64();
        case Cn.SINT64:
          return e3.sint64();
        case Cn.UINT32:
          return e3.uint32();
        case Cn.SINT32:
          return e3.sint32();
      }
    }
    function da(e3, n3, a3, t3) {
      $e(void 0 !== n3);
      const s2 = e3.repeated;
      switch (e3.kind) {
        case "scalar":
        case "enum":
          let o2 = "enum" == e3.kind ? Cn.INT32 : e3.T;
          if (s2) if ($e(Array.isArray(n3)), e3.packed) !(function(e4, n4, a4, t4) {
            if (!t4.length) return;
            e4.tag(a4, ea.LengthDelimited).fork();
            let [, s3] = pa(n4);
            for (let n5 = 0; n5 < t4.length; n5++) e4[s3](t4[n5]);
            e4.join();
          })(a3, o2, e3.no, n3);
          else for (const t4 of n3) Ea(a3, o2, e3.no, t4);
          else Ea(a3, o2, e3.no, n3);
          break;
        case "message":
          if (s2) {
            $e(Array.isArray(n3));
            for (const s3 of n3) ua(a3, t3, e3, s3);
          } else ua(a3, t3, e3, n3);
          break;
        case "map":
          $e("object" == typeof n3 && null != n3);
          for (const [s3, o3] of Object.entries(n3)) ga(a3, t3, e3, s3, o3);
      }
    }
    function ga(e3, n3, a3, t3, s2) {
      e3.tag(a3.no, ea.LengthDelimited), e3.fork();
      let o2 = t3;
      switch (a3.K) {
        case Cn.INT32:
        case Cn.FIXED32:
        case Cn.UINT32:
        case Cn.SFIXED32:
        case Cn.SINT32:
          o2 = Number.parseInt(t3);
          break;
        case Cn.BOOL:
          $e("true" == t3 || "false" == t3), o2 = "true" == t3;
      }
      switch (Ea(e3, a3.K, 1, o2), a3.V.kind) {
        case "scalar":
          Ea(e3, a3.V.T, 2, s2);
          break;
        case "enum":
          Ea(e3, Cn.INT32, 2, s2);
          break;
        case "message":
          $e(void 0 !== s2), e3.tag(2, ea.LengthDelimited).bytes(s2.toBinary(n3));
      }
      e3.join();
    }
    function ua(e3, n3, a3, t3) {
      const s2 = Ln(a3.T, t3);
      a3.delimited ? e3.tag(a3.no, ea.StartGroup).raw(s2.toBinary(n3)).tag(a3.no, ea.EndGroup) : e3.tag(a3.no, ea.LengthDelimited).bytes(s2.toBinary(n3));
    }
    function Ea(e3, n3, a3, t3) {
      $e(void 0 !== t3);
      let [s2, o2] = pa(n3);
      e3.tag(a3, s2)[o2](t3);
    }
    function pa(e3) {
      let n3 = ea.Varint;
      switch (e3) {
        case Cn.BYTES:
        case Cn.STRING:
          n3 = ea.LengthDelimited;
          break;
        case Cn.DOUBLE:
        case Cn.FIXED64:
        case Cn.SFIXED64:
          n3 = ea.Bit64;
          break;
        case Cn.FIXED32:
        case Cn.SFIXED32:
        case Cn.FLOAT:
          n3 = ea.Bit32;
      }
      return [n3, Cn[e3].toLowerCase()];
    }
    function Ta(e3) {
      if (void 0 === e3) return e3;
      if (Un(e3)) return e3.clone();
      if (e3 instanceof Uint8Array) {
        const n3 = new Uint8Array(e3.byteLength);
        return n3.set(e3), n3;
      }
      return e3;
    }
    function ka(e3) {
      return e3 instanceof Uint8Array ? e3 : new Uint8Array(e3);
    }
    function Ia(e3, n3, a3) {
      return { syntax: e3, json: { makeReadOptions: Gn, makeWriteOptions: Yn, readMessage(e4, n4, a4, t3) {
        if (null == n4 || Array.isArray(n4) || "object" != typeof n4) throw new Error(`cannot decode message ${e4.typeName} from JSON: ${qn(n4)}`);
        t3 = t3 ?? new e4();
        const s2 = /* @__PURE__ */ new Map(), o2 = a4.typeRegistry;
        for (const [r3, i3] of Object.entries(n4)) {
          const n5 = e4.fields.findJsonName(r3);
          if (n5) {
            if (n5.oneof) {
              if (null === i3 && "scalar" == n5.kind) continue;
              const a5 = s2.get(n5.oneof);
              if (void 0 !== a5) throw new Error(`cannot decode message ${e4.typeName} from JSON: multiple keys for oneof "${n5.oneof.name}" present: "${a5}", "${r3}"`);
              s2.set(n5.oneof, r3);
            }
            Hn(t3, i3, n5, a4, e4);
          } else {
            let n6 = false;
            if (o2?.findExtension && r3.startsWith("[") && r3.endsWith("]")) {
              const s3 = o2.findExtension(r3.substring(1, r3.length - 1));
              if (s3 && s3.extendee.typeName == e4.typeName) {
                n6 = true;
                const [e5, o3] = Rn(s3);
                Hn(e5, i3, s3.field, a4, s3), wn(t3, s3, o3(), a4);
              }
            }
            if (!n6 && !a4.ignoreUnknownFields) throw new Error(`cannot decode message ${e4.typeName} from JSON: key "${r3}" is unknown`);
          }
        }
        return t3;
      }, writeMessage(e4, n4) {
        const a4 = e4.getType(), t3 = {};
        let s2;
        try {
          for (s2 of a4.fields.byNumber()) {
            if (!Fn(s2, e4)) {
              if (s2.req) throw "required field not set";
              if (!n4.emitDefaultValues) continue;
              if (!Xn(s2)) continue;
            }
            const a5 = Zn(s2, s2.oneof ? e4[s2.oneof.localName].value : e4[s2.localName], n4);
            void 0 !== a5 && (t3[n4.useProtoFieldName ? s2.name : s2.jsonName] = a5);
          }
          const o2 = n4.typeRegistry;
          if (o2?.findExtensionFor) for (const s3 of a4.runtime.bin.listUnknownFields(e4)) {
            const r3 = o2.findExtensionFor(a4.typeName, s3.no);
            if (r3 && bn(e4, r3)) {
              const a5 = Dn(e4, r3, n4), s4 = Zn(r3.field, a5, n4);
              void 0 !== s4 && (t3[r3.field.jsonName] = s4);
            }
          }
        } catch (e5) {
          const n5 = s2 ? `cannot encode field ${a4.typeName}.${s2.name} to JSON` : `cannot encode message ${a4.typeName} to JSON`, t4 = e5 instanceof Error ? e5.message : String(e5);
          throw new Error(n5 + (t4.length > 0 ? `: ${t4}` : ""));
        }
        return t3;
      }, readScalar: (e4, n4, a4) => Kn(e4, n4, a4 ?? fn.BIGINT, true), writeScalar(e4, n4, a4) {
        if (void 0 !== n4) return a4 || yn(e4, n4) ? $n(e4, n4) : void 0;
      }, debug: qn }, bin: { makeReadOptions: ra, makeWriteOptions: ia, listUnknownFields: (e4) => e4[ta] ?? [], discardUnknownFields(e4) {
        delete e4[ta];
      }, writeUnknownFields(e4, n4) {
        const a4 = e4[ta];
        if (a4) for (const e5 of a4) n4.tag(e5.no, e5.wireType).raw(e5.data);
      }, onUnknownField(e4, n4, a4, t3) {
        const s2 = e4;
        Array.isArray(s2[ta]) || (s2[ta] = []), s2[ta].push({ no: n4, wireType: a4, data: new Uint8Array(t3) });
      }, readMessage(e4, n4, a4, t3, s2) {
        const o2 = e4.getType(), r3 = s2 ? n4.len : n4.pos + a4;
        let i3, A2;
        for (; n4.pos < r3 && ([i3, A2] = n4.tag(), true !== s2 || A2 != ea.EndGroup); ) {
          const a5 = o2.fields.find(i3);
          if (!a5) {
            const a6 = n4.skip(A2, i3);
            t3.readUnknownFields && this.onUnknownField(e4, i3, A2, a6);
            continue;
          }
          Aa(e4, n4, a5, A2, t3);
        }
        if (s2 && (A2 != ea.EndGroup || i3 !== a4)) throw new Error("invalid end group tag");
      }, readField: Aa, writeMessage(e4, n4, a4) {
        const t3 = e4.getType();
        for (const s2 of t3.fields.byNumber()) if (Fn(s2, e4)) da(s2, s2.oneof ? e4[s2.oneof.localName].value : e4[s2.localName], n4, a4);
        else if (s2.req) throw new Error(`cannot encode field ${t3.typeName}.${s2.name} to binary: required field not set`);
        return a4.writeUnknownFields && this.writeUnknownFields(e4, n4), n4;
      }, writeField(e4, n4, a4, t3) {
        void 0 !== n4 && da(e4, n4, a4, t3);
      } }, util: { ...{ setEnumType: on, initPartial(e4, n4) {
        if (void 0 === e4) return;
        const a4 = n4.getType();
        for (const t3 of a4.fields.byMember()) {
          const a5 = t3.localName, s2 = n4, o2 = e4;
          if (null != o2[a5]) switch (t3.kind) {
            case "oneof":
              const e5 = o2[a5].case;
              if (void 0 === e5) continue;
              const n5 = t3.findField(e5);
              let r3 = o2[a5].value;
              n5 && "message" == n5.kind && !Un(r3, n5.T) ? r3 = new n5.T(r3) : n5 && "scalar" === n5.kind && n5.T === Cn.BYTES && (r3 = ka(r3)), s2[a5] = { case: e5, value: r3 };
              break;
            case "scalar":
            case "enum":
              let i3 = o2[a5];
              t3.T === Cn.BYTES && (i3 = t3.repeated ? i3.map(ka) : ka(i3)), s2[a5] = i3;
              break;
            case "map":
              switch (t3.V.kind) {
                case "scalar":
                case "enum":
                  if (t3.V.T === Cn.BYTES) for (const [e7, n6] of Object.entries(o2[a5])) s2[a5][e7] = ka(n6);
                  else Object.assign(s2[a5], o2[a5]);
                  break;
                case "message":
                  const e6 = t3.V.T;
                  for (const n6 of Object.keys(o2[a5])) {
                    let t4 = o2[a5][n6];
                    e6.fieldWrapper || (t4 = new e6(t4)), s2[a5][n6] = t4;
                  }
              }
              break;
            case "message":
              const A2 = t3.T;
              if (t3.repeated) s2[a5] = o2[a5].map((e6) => Un(e6, A2) ? e6 : new A2(e6));
              else {
                const e6 = o2[a5];
                A2.fieldWrapper ? "google.protobuf.BytesValue" === A2.typeName ? s2[a5] = ka(e6) : s2[a5] = e6 : s2[a5] = Un(e6, A2) ? e6 : new A2(e6);
              }
          }
        }
      }, equals: (e4, n4, a4) => n4 === a4 || !(!n4 || !a4) && e4.fields.byMember().every((e5) => {
        const t3 = n4[e5.localName], s2 = a4[e5.localName];
        if (e5.repeated) {
          if (t3.length !== s2.length) return false;
          switch (e5.kind) {
            case "message":
              return t3.every((n5, a5) => e5.T.equals(n5, s2[a5]));
            case "scalar":
              return t3.every((n5, a5) => Bn(e5.T, n5, s2[a5]));
            case "enum":
              return t3.every((e6, n5) => Bn(Cn.INT32, e6, s2[n5]));
          }
          throw new Error(`repeated cannot contain ${e5.kind}`);
        }
        switch (e5.kind) {
          case "message":
            return e5.T.equals(t3, s2);
          case "enum":
            return Bn(Cn.INT32, t3, s2);
          case "scalar":
            return Bn(e5.T, t3, s2);
          case "oneof":
            if (t3.case !== s2.case) return false;
            const n5 = e5.findField(t3.case);
            if (void 0 === n5) return true;
            switch (n5.kind) {
              case "message":
                return n5.T.equals(t3.value, s2.value);
              case "enum":
                return Bn(Cn.INT32, t3.value, s2.value);
              case "scalar":
                return Bn(n5.T, t3.value, s2.value);
            }
            throw new Error(`oneof cannot contain ${n5.kind}`);
          case "map":
            const a5 = Object.keys(t3).concat(Object.keys(s2));
            switch (e5.V.kind) {
              case "message":
                const n6 = e5.V.T;
                return a5.every((e6) => n6.equals(t3[e6], s2[e6]));
              case "enum":
                return a5.every((e6) => Bn(Cn.INT32, t3[e6], s2[e6]));
              case "scalar":
                const o2 = e5.V.T;
                return a5.every((e6) => Bn(o2, t3[e6], s2[e6]));
            }
        }
      }), clone(e4) {
        const n4 = e4.getType(), a4 = new n4(), t3 = a4;
        for (const a5 of n4.fields.byMember()) {
          const n5 = e4[a5.localName];
          let s2;
          if (a5.repeated) s2 = n5.map(Ta);
          else if ("map" == a5.kind) {
            s2 = t3[a5.localName];
            for (const [e5, a6] of Object.entries(n5)) s2[e5] = Ta(a6);
          } else s2 = "oneof" == a5.kind ? a5.findField(n5.case) ? { case: n5.case, value: Ta(n5.value) } : { case: void 0 } : Ta(n5);
          t3[a5.localName] = s2;
        }
        for (const a5 of n4.runtime.bin.listUnknownFields(e4)) n4.runtime.bin.onUnknownField(t3, a5.no, a5.wireType, a5.data);
        return a4;
      } }, newFieldList: n3, initFields: a3 }, makeMessageType(e4, n4, a4) {
        return (function(e5, n5, a5, t3) {
          const s2 = t3?.localName ?? n5.substring(n5.lastIndexOf(".") + 1), o2 = { [s2]: function(n6) {
            e5.util.initFields(this), e5.util.initPartial(n6, this);
          } }[s2];
          return Object.setPrototypeOf(o2.prototype, new cn()), Object.assign(o2, { runtime: e5, typeName: n5, fields: e5.util.newFieldList(a5), fromBinary: (e6, n6) => new o2().fromBinary(e6, n6), fromJson: (e6, n6) => new o2().fromJson(e6, n6), fromJsonString: (e6, n6) => new o2().fromJsonString(e6, n6), equals: (n6, a6) => e5.util.equals(o2, n6, a6) }), o2;
        })(this, e4, n4, a4);
      }, makeEnum: An, makeEnumType: rn, getEnumType: sn, makeExtension(e4, n4, a4) {
        return /* @__PURE__ */ (function(e5, n5, a5, t3) {
          let s2;
          return { typeName: n5, extendee: a5, get field() {
            if (!s2) {
              const a6 = "function" == typeof t3 ? t3() : t3;
              a6.name = n5.split(".").pop(), a6.jsonName = `[${n5}]`, s2 = e5.util.newFieldList([a6]).list()[0];
            }
            return s2;
          }, runtime: e5 };
        })(this, e4, n4, a4);
      } };
    }
    class ha {
      constructor(e3, n3) {
        this._fields = e3, this._normalizer = n3;
      }
      findJsonName(e3) {
        if (!this.jsonNames) {
          const e4 = {};
          for (const n3 of this.list()) e4[n3.jsonName] = e4[n3.name] = n3;
          this.jsonNames = e4;
        }
        return this.jsonNames[e3];
      }
      find(e3) {
        if (!this.numbers) {
          const e4 = {};
          for (const n3 of this.list()) e4[n3.no] = n3;
          this.numbers = e4;
        }
        return this.numbers[e3];
      }
      list() {
        return this.all || (this.all = this._normalizer(this._fields)), this.all;
      }
      byNumber() {
        return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e3, n3) => e3.no - n3.no)), this.numbersAsc;
      }
      byMember() {
        if (!this.members) {
          this.members = [];
          const e3 = this.members;
          let n3;
          for (const a3 of this.list()) a3.oneof ? a3.oneof !== n3 && (n3 = a3.oneof, e3.push(n3)) : e3.push(a3);
        }
        return this.members;
      }
    }
    function _a(e3, n3) {
      const a3 = Ba(e3);
      return n3 ? a3 : va(Na(a3));
    }
    function Ca(e3) {
      return _a(e3, false);
    }
    const fa = Ba;
    function Ba(e3) {
      let n3 = false;
      const a3 = [];
      for (let t3 = 0; t3 < e3.length; t3++) {
        let s2 = e3.charAt(t3);
        switch (s2) {
          case "_":
            n3 = true;
            break;
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            a3.push(s2), n3 = false;
            break;
          default:
            n3 && (n3 = false, s2 = s2.toUpperCase()), a3.push(s2);
        }
      }
      return a3.join("");
    }
    const Qa = /* @__PURE__ */ new Set(["constructor", "toString", "toJSON", "valueOf"]), ya = /* @__PURE__ */ new Set(["getType", "clone", "equals", "fromBinary", "fromJson", "fromJsonString", "toBinary", "toJson", "toJsonString", "toObject"]), Ra = (e3) => `${e3}$`, Na = (e3) => ya.has(e3) ? Ra(e3) : e3, va = (e3) => Qa.has(e3) ? Ra(e3) : e3;
    class Sa {
      constructor(e3) {
        this.kind = "oneof", this.repeated = false, this.packed = false, this.opt = false, this.req = false, this.default = void 0, this.fields = [], this.name = e3, this.localName = Ca(e3);
      }
      addField(e3) {
        $e(e3.oneof === this, `field ${e3.name} not one of ${this.name}`), this.fields.push(e3);
      }
      findField(e3) {
        if (!this._lookup) {
          this._lookup = /* @__PURE__ */ Object.create(null);
          for (let e4 = 0; e4 < this.fields.length; e4++) this._lookup[this.fields[e4].localName] = this.fields[e4];
        }
        return this._lookup[e3];
      }
    }
    function Da(e3, n3) {
      const a3 = [];
      let t3;
      for (const s2 of "function" == typeof e3 ? e3() : e3) {
        const e4 = s2;
        if (e4.localName = _a(s2.name, void 0 !== s2.oneof), e4.jsonName = s2.jsonName ?? fa(s2.name), e4.repeated = s2.repeated ?? false, "scalar" == s2.kind && (e4.L = s2.L ?? fn.BIGINT), e4.delimited = s2.delimited ?? false, e4.req = s2.req ?? false, e4.opt = s2.opt ?? false, void 0 === s2.packed && (e4.packed = !!n3 && ("enum" == s2.kind || "scalar" == s2.kind && s2.T != Cn.BYTES && s2.T != Cn.STRING)), void 0 !== s2.oneof) {
          const n4 = "string" == typeof s2.oneof ? s2.oneof : s2.oneof.name;
          t3 && t3.name == n4 || (t3 = new Sa(n4)), e4.oneof = t3, t3.addField(e4);
        }
        a3.push(e4);
      }
      return a3;
    }
    const wa = Ia("proto3", (e3) => new ha(e3, (e4) => Da(e4, true)), (e3) => {
      for (const n3 of e3.getType().fields.byMember()) {
        if (n3.opt) continue;
        const a3 = n3.localName, t3 = e3;
        if (n3.repeated) t3[a3] = [];
        else switch (n3.kind) {
          case "oneof":
            t3[a3] = { case: void 0 };
            break;
          case "enum":
            t3[a3] = 0;
            break;
          case "map":
            t3[a3] = {};
            break;
          case "scalar":
            t3[a3] = Qn(n3.T, n3.L);
        }
      }
    }), ba = Ia("proto2", (e3) => new ha(e3, (e4) => Da(e4, false)), (e3) => {
      for (const n3 of e3.getType().fields.byMember()) {
        const a3 = n3.localName, t3 = e3;
        if (n3.repeated) t3[a3] = [];
        else switch (n3.kind) {
          case "oneof":
            t3[a3] = { case: void 0 };
            break;
          case "map":
            t3[a3] = {};
        }
      }
    });
    Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY;
    var Ma = ((e3) => (e3[e3.Unary = 0] = "Unary", e3[e3.ServerStreaming = 1] = "ServerStreaming", e3[e3.ClientStreaming = 2] = "ClientStreaming", e3[e3.BiDiStreaming = 3] = "BiDiStreaming", e3))(Ma || {}), Fa = ((e3) => (e3[e3.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", e3[e3.EDITION_LEGACY = 900] = "EDITION_LEGACY", e3[e3.EDITION_PROTO2 = 998] = "EDITION_PROTO2", e3[e3.EDITION_PROTO3 = 999] = "EDITION_PROTO3", e3[e3.EDITION_2023 = 1e3] = "EDITION_2023", e3[e3.EDITION_2024 = 1001] = "EDITION_2024", e3[e3.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", e3[e3.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", e3[e3.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", e3[e3.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", e3[e3.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", e3[e3.EDITION_MAX = 2147483647] = "EDITION_MAX", e3))(Fa || {});
    ba.util.setEnumType(Fa, "google.protobuf.Edition", [{ no: 0, name: "EDITION_UNKNOWN" }, { no: 900, name: "EDITION_LEGACY" }, { no: 998, name: "EDITION_PROTO2" }, { no: 999, name: "EDITION_PROTO3" }, { no: 1e3, name: "EDITION_2023" }, { no: 1001, name: "EDITION_2024" }, { no: 1, name: "EDITION_1_TEST_ONLY" }, { no: 2, name: "EDITION_2_TEST_ONLY" }, { no: 99997, name: "EDITION_99997_TEST_ONLY" }, { no: 99998, name: "EDITION_99998_TEST_ONLY" }, { no: 99999, name: "EDITION_99999_TEST_ONLY" }, { no: 2147483647, name: "EDITION_MAX" }]);
    const Oa = class e3 extends cn {
      constructor(e4) {
        super(), this.file = [], ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    Oa.runtime = ba, Oa.typeName = "google.protobuf.FileDescriptorSet", Oa.fields = ba.util.newFieldList(() => [{ no: 1, name: "file", kind: "message", T: La, repeated: true }]);
    const Ua = class e3 extends cn {
      constructor(e4) {
        super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    Ua.runtime = ba, Ua.typeName = "google.protobuf.FileDescriptorProto", Ua.fields = ba.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "package", kind: "scalar", T: 9, opt: true }, { no: 3, name: "dependency", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "public_dependency", kind: "scalar", T: 5, repeated: true }, { no: 11, name: "weak_dependency", kind: "scalar", T: 5, repeated: true }, { no: 4, name: "message_type", kind: "message", T: xa, repeated: true }, { no: 5, name: "enum_type", kind: "message", T: tt, repeated: true }, { no: 6, name: "service", kind: "message", T: lt, repeated: true }, { no: 7, name: "extension", kind: "message", T: Za, repeated: true }, { no: 8, name: "options", kind: "message", T: gt, opt: true }, { no: 9, name: "source_code_info", kind: "message", T: es, opt: true }, { no: 12, name: "syntax", kind: "scalar", T: 9, opt: true }, { no: 14, name: "edition", kind: "enum", T: ba.getEnumType(Fa), opt: true }]);
    let La = Ua;
    const Pa = class e3 extends cn {
      constructor(e4) {
        super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    Pa.runtime = ba, Pa.typeName = "google.protobuf.DescriptorProto", Pa.fields = ba.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "field", kind: "message", T: Za, repeated: true }, { no: 6, name: "extension", kind: "message", T: Za, repeated: true }, { no: 3, name: "nested_type", kind: "message", T: Pa, repeated: true }, { no: 4, name: "enum_type", kind: "message", T: tt, repeated: true }, { no: 5, name: "extension_range", kind: "message", T: Ya, repeated: true }, { no: 8, name: "oneof_decl", kind: "message", T: nt, repeated: true }, { no: 7, name: "options", kind: "message", T: pt, opt: true }, { no: 9, name: "reserved_range", kind: "message", T: Va, repeated: true }, { no: 10, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    let xa = Pa;
    const Ga = class e3 extends cn {
      constructor(e4) {
        super(), ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    Ga.runtime = ba, Ga.typeName = "google.protobuf.DescriptorProto.ExtensionRange", Ga.fields = ba.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: Ha, opt: true }]);
    let Ya = Ga;
    const Ja = class e3 extends cn {
      constructor(e4) {
        super(), ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    Ja.runtime = ba, Ja.typeName = "google.protobuf.DescriptorProto.ReservedRange", Ja.fields = ba.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    let Va = Ja;
    const qa = class e3 extends cn {
      constructor(e4) {
        super(), this.uninterpretedOption = [], this.declaration = [], ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    qa.runtime = ba, qa.typeName = "google.protobuf.ExtensionRangeOptions", qa.fields = ba.util.newFieldList(() => [{ no: 999, name: "uninterpreted_option", kind: "message", T: Pt, repeated: true }, { no: 2, name: "declaration", kind: "message", T: ja, repeated: true }, { no: 50, name: "features", kind: "message", T: Jt, opt: true }, { no: 3, name: "verification", kind: "enum", T: ba.getEnumType(Wa), opt: true, default: 1 }]);
    let Ha = qa;
    var Wa = ((e3) => (e3[e3.DECLARATION = 0] = "DECLARATION", e3[e3.UNVERIFIED = 1] = "UNVERIFIED", e3))(Wa || {});
    ba.util.setEnumType(Wa, "google.protobuf.ExtensionRangeOptions.VerificationState", [{ no: 0, name: "DECLARATION" }, { no: 1, name: "UNVERIFIED" }]);
    const Ka = class e3 extends cn {
      constructor(e4) {
        super(), ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    Ka.runtime = ba, Ka.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", Ka.fields = ba.util.newFieldList(() => [{ no: 1, name: "number", kind: "scalar", T: 5, opt: true }, { no: 2, name: "full_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "reserved", kind: "scalar", T: 8, opt: true }, { no: 6, name: "repeated", kind: "scalar", T: 8, opt: true }]);
    let ja = Ka;
    const Xa = class e3 extends cn {
      constructor(e4) {
        super(), ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    Xa.runtime = ba, Xa.typeName = "google.protobuf.FieldDescriptorProto", Xa.fields = ba.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "label", kind: "enum", T: ba.getEnumType($a), opt: true }, { no: 5, name: "type", kind: "enum", T: ba.getEnumType(za), opt: true }, { no: 6, name: "type_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "extendee", kind: "scalar", T: 9, opt: true }, { no: 7, name: "default_value", kind: "scalar", T: 9, opt: true }, { no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: true }, { no: 10, name: "json_name", kind: "scalar", T: 9, opt: true }, { no: 8, name: "options", kind: "message", T: kt, opt: true }, { no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: true }]);
    let Za = Xa;
    var za = ((e3) => (e3[e3.DOUBLE = 1] = "DOUBLE", e3[e3.FLOAT = 2] = "FLOAT", e3[e3.INT64 = 3] = "INT64", e3[e3.UINT64 = 4] = "UINT64", e3[e3.INT32 = 5] = "INT32", e3[e3.FIXED64 = 6] = "FIXED64", e3[e3.FIXED32 = 7] = "FIXED32", e3[e3.BOOL = 8] = "BOOL", e3[e3.STRING = 9] = "STRING", e3[e3.GROUP = 10] = "GROUP", e3[e3.MESSAGE = 11] = "MESSAGE", e3[e3.BYTES = 12] = "BYTES", e3[e3.UINT32 = 13] = "UINT32", e3[e3.ENUM = 14] = "ENUM", e3[e3.SFIXED32 = 15] = "SFIXED32", e3[e3.SFIXED64 = 16] = "SFIXED64", e3[e3.SINT32 = 17] = "SINT32", e3[e3.SINT64 = 18] = "SINT64", e3))(za || {});
    ba.util.setEnumType(za, "google.protobuf.FieldDescriptorProto.Type", [{ no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]);
    var $a = ((e3) => (e3[e3.OPTIONAL = 1] = "OPTIONAL", e3[e3.REPEATED = 3] = "REPEATED", e3[e3.REQUIRED = 2] = "REQUIRED", e3))($a || {});
    ba.util.setEnumType($a, "google.protobuf.FieldDescriptorProto.Label", [{ no: 1, name: "LABEL_OPTIONAL" }, { no: 3, name: "LABEL_REPEATED" }, { no: 2, name: "LABEL_REQUIRED" }]);
    const et = class e3 extends cn {
      constructor(e4) {
        super(), ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    et.runtime = ba, et.typeName = "google.protobuf.OneofDescriptorProto", et.fields = ba.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "options", kind: "message", T: Nt, opt: true }]);
    let nt = et;
    const at = class e3 extends cn {
      constructor(e4) {
        super(), this.value = [], this.reservedRange = [], this.reservedName = [], ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    at.runtime = ba, at.typeName = "google.protobuf.EnumDescriptorProto", at.fields = ba.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "value", kind: "message", T: it, repeated: true }, { no: 3, name: "options", kind: "message", T: St, opt: true }, { no: 4, name: "reserved_range", kind: "message", T: ot, repeated: true }, { no: 5, name: "reserved_name", kind: "scalar", T: 9, repeated: true }]);
    let tt = at;
    const st = class e3 extends cn {
      constructor(e4) {
        super(), ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    st.runtime = ba, st.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", st.fields = ba.util.newFieldList(() => [{ no: 1, name: "start", kind: "scalar", T: 5, opt: true }, { no: 2, name: "end", kind: "scalar", T: 5, opt: true }]);
    let ot = st;
    const rt = class e3 extends cn {
      constructor(e4) {
        super(), ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    rt.runtime = ba, rt.typeName = "google.protobuf.EnumValueDescriptorProto", rt.fields = ba.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "number", kind: "scalar", T: 5, opt: true }, { no: 3, name: "options", kind: "message", T: wt, opt: true }]);
    let it = rt;
    const At = class e3 extends cn {
      constructor(e4) {
        super(), this.method = [], ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    At.runtime = ba, At.typeName = "google.protobuf.ServiceDescriptorProto", At.fields = ba.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "method", kind: "message", T: mt, repeated: true }, { no: 3, name: "options", kind: "message", T: Mt, opt: true }]);
    let lt = At;
    const ct = class e3 extends cn {
      constructor(e4) {
        super(), ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    ct.runtime = ba, ct.typeName = "google.protobuf.MethodDescriptorProto", ct.fields = ba.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "input_type", kind: "scalar", T: 9, opt: true }, { no: 3, name: "output_type", kind: "scalar", T: 9, opt: true }, { no: 4, name: "options", kind: "message", T: Ot, opt: true }, { no: 5, name: "client_streaming", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "server_streaming", kind: "scalar", T: 8, opt: true, default: false }]);
    let mt = ct;
    const dt = class e3 extends cn {
      constructor(e4) {
        super(), this.uninterpretedOption = [], ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    dt.runtime = ba, dt.typeName = "google.protobuf.FileOptions", dt.fields = ba.util.newFieldList(() => [{ no: 1, name: "java_package", kind: "scalar", T: 9, opt: true }, { no: 8, name: "java_outer_classname", kind: "scalar", T: 9, opt: true }, { no: 10, name: "java_multiple_files", kind: "scalar", T: 8, opt: true, default: false }, { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", T: 8, opt: true }, { no: 27, name: "java_string_check_utf8", kind: "scalar", T: 8, opt: true, default: false }, { no: 9, name: "optimize_for", kind: "enum", T: ba.getEnumType(ut), opt: true, default: 1 }, { no: 11, name: "go_package", kind: "scalar", T: 9, opt: true }, { no: 16, name: "cc_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "java_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 18, name: "py_generic_services", kind: "scalar", T: 8, opt: true, default: false }, { no: 23, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 31, name: "cc_enable_arenas", kind: "scalar", T: 8, opt: true, default: true }, { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: true }, { no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: true }, { no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: true }, { no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: true }, { no: 44, name: "php_metadata_namespace", kind: "scalar", T: 9, opt: true }, { no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: true }, { no: 50, name: "features", kind: "message", T: Jt, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Pt, repeated: true }]);
    let gt = dt;
    var ut = ((e3) => (e3[e3.SPEED = 1] = "SPEED", e3[e3.CODE_SIZE = 2] = "CODE_SIZE", e3[e3.LITE_RUNTIME = 3] = "LITE_RUNTIME", e3))(ut || {});
    ba.util.setEnumType(ut, "google.protobuf.FileOptions.OptimizeMode", [{ no: 1, name: "SPEED" }, { no: 2, name: "CODE_SIZE" }, { no: 3, name: "LITE_RUNTIME" }]);
    const Et = class e3 extends cn {
      constructor(e4) {
        super(), this.uninterpretedOption = [], ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    Et.runtime = ba, Et.typeName = "google.protobuf.MessageOptions", Et.fields = ba.util.newFieldList(() => [{ no: 1, name: "message_set_wire_format", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "no_standard_descriptor_accessor", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 7, name: "map_entry", kind: "scalar", T: 8, opt: true }, { no: 11, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 12, name: "features", kind: "message", T: Jt, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Pt, repeated: true }]);
    let pt = Et;
    const Tt = class e3 extends cn {
      constructor(e4) {
        super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    Tt.runtime = ba, Tt.typeName = "google.protobuf.FieldOptions", Tt.fields = ba.util.newFieldList(() => [{ no: 1, name: "ctype", kind: "enum", T: ba.getEnumType(It), opt: true, default: 0 }, { no: 2, name: "packed", kind: "scalar", T: 8, opt: true }, { no: 6, name: "jstype", kind: "enum", T: ba.getEnumType(ht), opt: true, default: 0 }, { no: 5, name: "lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 15, name: "unverified_lazy", kind: "scalar", T: 8, opt: true, default: false }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 10, name: "weak", kind: "scalar", T: 8, opt: true, default: false }, { no: 16, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 17, name: "retention", kind: "enum", T: ba.getEnumType(_t), opt: true }, { no: 19, name: "targets", kind: "enum", T: ba.getEnumType(Ct), repeated: true }, { no: 20, name: "edition_defaults", kind: "message", T: Bt, repeated: true }, { no: 21, name: "features", kind: "message", T: Jt, opt: true }, { no: 22, name: "feature_support", kind: "message", T: yt, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Pt, repeated: true }]);
    let kt = Tt;
    var It = ((e3) => (e3[e3.STRING = 0] = "STRING", e3[e3.CORD = 1] = "CORD", e3[e3.STRING_PIECE = 2] = "STRING_PIECE", e3))(It || {});
    ba.util.setEnumType(It, "google.protobuf.FieldOptions.CType", [{ no: 0, name: "STRING" }, { no: 1, name: "CORD" }, { no: 2, name: "STRING_PIECE" }]);
    var ht = ((e3) => (e3[e3.JS_NORMAL = 0] = "JS_NORMAL", e3[e3.JS_STRING = 1] = "JS_STRING", e3[e3.JS_NUMBER = 2] = "JS_NUMBER", e3))(ht || {});
    ba.util.setEnumType(ht, "google.protobuf.FieldOptions.JSType", [{ no: 0, name: "JS_NORMAL" }, { no: 1, name: "JS_STRING" }, { no: 2, name: "JS_NUMBER" }]);
    var _t = ((e3) => (e3[e3.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", e3[e3.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", e3[e3.RETENTION_SOURCE = 2] = "RETENTION_SOURCE", e3))(_t || {});
    ba.util.setEnumType(_t, "google.protobuf.FieldOptions.OptionRetention", [{ no: 0, name: "RETENTION_UNKNOWN" }, { no: 1, name: "RETENTION_RUNTIME" }, { no: 2, name: "RETENTION_SOURCE" }]);
    var Ct = ((e3) => (e3[e3.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", e3[e3.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", e3[e3.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", e3[e3.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", e3[e3.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", e3[e3.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", e3[e3.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", e3[e3.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", e3[e3.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", e3[e3.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD", e3))(Ct || {});
    ba.util.setEnumType(Ct, "google.protobuf.FieldOptions.OptionTargetType", [{ no: 0, name: "TARGET_TYPE_UNKNOWN" }, { no: 1, name: "TARGET_TYPE_FILE" }, { no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" }, { no: 3, name: "TARGET_TYPE_MESSAGE" }, { no: 4, name: "TARGET_TYPE_FIELD" }, { no: 5, name: "TARGET_TYPE_ONEOF" }, { no: 6, name: "TARGET_TYPE_ENUM" }, { no: 7, name: "TARGET_TYPE_ENUM_ENTRY" }, { no: 8, name: "TARGET_TYPE_SERVICE" }, { no: 9, name: "TARGET_TYPE_METHOD" }]);
    const ft = class e3 extends cn {
      constructor(e4) {
        super(), ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    ft.runtime = ba, ft.typeName = "google.protobuf.FieldOptions.EditionDefault", ft.fields = ba.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: ba.getEnumType(Fa), opt: true }, { no: 2, name: "value", kind: "scalar", T: 9, opt: true }]);
    let Bt = ft;
    const Qt = class e3 extends cn {
      constructor(e4) {
        super(), ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    Qt.runtime = ba, Qt.typeName = "google.protobuf.FieldOptions.FeatureSupport", Qt.fields = ba.util.newFieldList(() => [{ no: 1, name: "edition_introduced", kind: "enum", T: ba.getEnumType(Fa), opt: true }, { no: 2, name: "edition_deprecated", kind: "enum", T: ba.getEnumType(Fa), opt: true }, { no: 3, name: "deprecation_warning", kind: "scalar", T: 9, opt: true }, { no: 4, name: "edition_removed", kind: "enum", T: ba.getEnumType(Fa), opt: true }]);
    let yt = Qt;
    const Rt = class e3 extends cn {
      constructor(e4) {
        super(), this.uninterpretedOption = [], ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    Rt.runtime = ba, Rt.typeName = "google.protobuf.OneofOptions", Rt.fields = ba.util.newFieldList(() => [{ no: 1, name: "features", kind: "message", T: Jt, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Pt, repeated: true }]);
    let Nt = Rt;
    const vt = class e3 extends cn {
      constructor(e4) {
        super(), this.uninterpretedOption = [], ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    vt.runtime = ba, vt.typeName = "google.protobuf.EnumOptions", vt.fields = ba.util.newFieldList(() => [{ no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: true }, { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 6, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: true }, { no: 7, name: "features", kind: "message", T: Jt, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Pt, repeated: true }]);
    let St = vt;
    const Dt = class e3 extends cn {
      constructor(e4) {
        super(), this.uninterpretedOption = [], ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    Dt.runtime = ba, Dt.typeName = "google.protobuf.EnumValueOptions", Dt.fields = ba.util.newFieldList(() => [{ no: 1, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 2, name: "features", kind: "message", T: Jt, opt: true }, { no: 3, name: "debug_redact", kind: "scalar", T: 8, opt: true, default: false }, { no: 4, name: "feature_support", kind: "message", T: yt, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Pt, repeated: true }]);
    let wt = Dt;
    const bt = class e3 extends cn {
      constructor(e4) {
        super(), this.uninterpretedOption = [], ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    bt.runtime = ba, bt.typeName = "google.protobuf.ServiceOptions", bt.fields = ba.util.newFieldList(() => [{ no: 34, name: "features", kind: "message", T: Jt, opt: true }, { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 999, name: "uninterpreted_option", kind: "message", T: Pt, repeated: true }]);
    let Mt = bt;
    const Ft = class e3 extends cn {
      constructor(e4) {
        super(), this.uninterpretedOption = [], ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    Ft.runtime = ba, Ft.typeName = "google.protobuf.MethodOptions", Ft.fields = ba.util.newFieldList(() => [{ no: 33, name: "deprecated", kind: "scalar", T: 8, opt: true, default: false }, { no: 34, name: "idempotency_level", kind: "enum", T: ba.getEnumType(Ut), opt: true, default: 0 }, { no: 35, name: "features", kind: "message", T: Jt, opt: true }, { no: 999, name: "uninterpreted_option", kind: "message", T: Pt, repeated: true }]);
    let Ot = Ft;
    var Ut = ((e3) => (e3[e3.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", e3[e3.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", e3[e3.IDEMPOTENT = 2] = "IDEMPOTENT", e3))(Ut || {});
    ba.util.setEnumType(Ut, "google.protobuf.MethodOptions.IdempotencyLevel", [{ no: 0, name: "IDEMPOTENCY_UNKNOWN" }, { no: 1, name: "NO_SIDE_EFFECTS" }, { no: 2, name: "IDEMPOTENT" }]);
    const Lt = class e3 extends cn {
      constructor(e4) {
        super(), this.name = [], ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    Lt.runtime = ba, Lt.typeName = "google.protobuf.UninterpretedOption", Lt.fields = ba.util.newFieldList(() => [{ no: 2, name: "name", kind: "message", T: Gt, repeated: true }, { no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: true }, { no: 4, name: "positive_int_value", kind: "scalar", T: 4, opt: true }, { no: 5, name: "negative_int_value", kind: "scalar", T: 3, opt: true }, { no: 6, name: "double_value", kind: "scalar", T: 1, opt: true }, { no: 7, name: "string_value", kind: "scalar", T: 12, opt: true }, { no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: true }]);
    let Pt = Lt;
    const xt = class e3 extends cn {
      constructor(e4) {
        super(), ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    xt.runtime = ba, xt.typeName = "google.protobuf.UninterpretedOption.NamePart", xt.fields = ba.util.newFieldList(() => [{ no: 1, name: "name_part", kind: "scalar", T: 9, req: true }, { no: 2, name: "is_extension", kind: "scalar", T: 8, req: true }]);
    let Gt = xt;
    const Yt = class e3 extends cn {
      constructor(e4) {
        super(), ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    Yt.runtime = ba, Yt.typeName = "google.protobuf.FeatureSet", Yt.fields = ba.util.newFieldList(() => [{ no: 1, name: "field_presence", kind: "enum", T: ba.getEnumType(Vt), opt: true }, { no: 2, name: "enum_type", kind: "enum", T: ba.getEnumType(qt), opt: true }, { no: 3, name: "repeated_field_encoding", kind: "enum", T: ba.getEnumType(Ht), opt: true }, { no: 4, name: "utf8_validation", kind: "enum", T: ba.getEnumType(Wt), opt: true }, { no: 5, name: "message_encoding", kind: "enum", T: ba.getEnumType(Kt), opt: true }, { no: 6, name: "json_format", kind: "enum", T: ba.getEnumType(jt), opt: true }]);
    let Jt = Yt;
    var Vt = ((e3) => (e3[e3.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", e3[e3.EXPLICIT = 1] = "EXPLICIT", e3[e3.IMPLICIT = 2] = "IMPLICIT", e3[e3.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED", e3))(Vt || {});
    ba.util.setEnumType(Vt, "google.protobuf.FeatureSet.FieldPresence", [{ no: 0, name: "FIELD_PRESENCE_UNKNOWN" }, { no: 1, name: "EXPLICIT" }, { no: 2, name: "IMPLICIT" }, { no: 3, name: "LEGACY_REQUIRED" }]);
    var qt = ((e3) => (e3[e3.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", e3[e3.OPEN = 1] = "OPEN", e3[e3.CLOSED = 2] = "CLOSED", e3))(qt || {});
    ba.util.setEnumType(qt, "google.protobuf.FeatureSet.EnumType", [{ no: 0, name: "ENUM_TYPE_UNKNOWN" }, { no: 1, name: "OPEN" }, { no: 2, name: "CLOSED" }]);
    var Ht = ((e3) => (e3[e3.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", e3[e3.PACKED = 1] = "PACKED", e3[e3.EXPANDED = 2] = "EXPANDED", e3))(Ht || {});
    ba.util.setEnumType(Ht, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [{ no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" }, { no: 1, name: "PACKED" }, { no: 2, name: "EXPANDED" }]);
    var Wt = ((e3) => (e3[e3.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", e3[e3.VERIFY = 2] = "VERIFY", e3[e3.NONE = 3] = "NONE", e3))(Wt || {});
    ba.util.setEnumType(Wt, "google.protobuf.FeatureSet.Utf8Validation", [{ no: 0, name: "UTF8_VALIDATION_UNKNOWN" }, { no: 2, name: "VERIFY" }, { no: 3, name: "NONE" }]);
    var Kt = ((e3) => (e3[e3.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", e3[e3.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", e3[e3.DELIMITED = 2] = "DELIMITED", e3))(Kt || {});
    ba.util.setEnumType(Kt, "google.protobuf.FeatureSet.MessageEncoding", [{ no: 0, name: "MESSAGE_ENCODING_UNKNOWN" }, { no: 1, name: "LENGTH_PREFIXED" }, { no: 2, name: "DELIMITED" }]);
    var jt = ((e3) => (e3[e3.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", e3[e3.ALLOW = 1] = "ALLOW", e3[e3.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT", e3))(jt || {});
    ba.util.setEnumType(jt, "google.protobuf.FeatureSet.JsonFormat", [{ no: 0, name: "JSON_FORMAT_UNKNOWN" }, { no: 1, name: "ALLOW" }, { no: 2, name: "LEGACY_BEST_EFFORT" }]);
    const Xt = class e3 extends cn {
      constructor(e4) {
        super(), this.defaults = [], ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    Xt.runtime = ba, Xt.typeName = "google.protobuf.FeatureSetDefaults", Xt.fields = ba.util.newFieldList(() => [{ no: 1, name: "defaults", kind: "message", T: zt, repeated: true }, { no: 4, name: "minimum_edition", kind: "enum", T: ba.getEnumType(Fa), opt: true }, { no: 5, name: "maximum_edition", kind: "enum", T: ba.getEnumType(Fa), opt: true }]);
    const Zt = class e3 extends cn {
      constructor(e4) {
        super(), ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    Zt.runtime = ba, Zt.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", Zt.fields = ba.util.newFieldList(() => [{ no: 3, name: "edition", kind: "enum", T: ba.getEnumType(Fa), opt: true }, { no: 4, name: "overridable_features", kind: "message", T: Jt, opt: true }, { no: 5, name: "fixed_features", kind: "message", T: Jt, opt: true }]);
    let zt = Zt;
    const $t = class e3 extends cn {
      constructor(e4) {
        super(), this.location = [], ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    $t.runtime = ba, $t.typeName = "google.protobuf.SourceCodeInfo", $t.fields = ba.util.newFieldList(() => [{ no: 1, name: "location", kind: "message", T: as, repeated: true }]);
    let es = $t;
    const ns = class e3 extends cn {
      constructor(e4) {
        super(), this.path = [], this.span = [], this.leadingDetachedComments = [], ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    ns.runtime = ba, ns.typeName = "google.protobuf.SourceCodeInfo.Location", ns.fields = ba.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "span", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: true }, { no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: true }, { no: 6, name: "leading_detached_comments", kind: "scalar", T: 9, repeated: true }]);
    let as = ns;
    const ts = class e3 extends cn {
      constructor(e4) {
        super(), this.annotation = [], ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    ts.runtime = ba, ts.typeName = "google.protobuf.GeneratedCodeInfo", ts.fields = ba.util.newFieldList(() => [{ no: 1, name: "annotation", kind: "message", T: rs, repeated: true }]);
    let ss = ts;
    const os = class e3 extends cn {
      constructor(e4) {
        super(), this.path = [], ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    os.runtime = ba, os.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", os.fields = ba.util.newFieldList(() => [{ no: 1, name: "path", kind: "scalar", T: 5, repeated: true, packed: true }, { no: 2, name: "source_file", kind: "scalar", T: 9, opt: true }, { no: 3, name: "begin", kind: "scalar", T: 5, opt: true }, { no: 4, name: "end", kind: "scalar", T: 5, opt: true }, { no: 5, name: "semantic", kind: "enum", T: ba.getEnumType(is), opt: true }]);
    let rs = os;
    var is = ((e3) => (e3[e3.NONE = 0] = "NONE", e3[e3.SET = 1] = "SET", e3[e3.ALIAS = 2] = "ALIAS", e3))(is || {});
    ba.util.setEnumType(is, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [{ no: 0, name: "NONE" }, { no: 1, name: "SET" }, { no: 2, name: "ALIAS" }]);
    za.DOUBLE, Cn.DOUBLE, za.FLOAT, Cn.FLOAT, za.INT64, Cn.INT64, za.UINT64, Cn.UINT64, za.INT32, Cn.INT32, za.FIXED64, Cn.FIXED64, za.FIXED32, Cn.FIXED32, za.BOOL, Cn.BOOL, za.STRING, Cn.STRING, za.GROUP, za.MESSAGE, za.BYTES, Cn.BYTES, za.UINT32, Cn.UINT32, za.ENUM, za.SFIXED32, Cn.SFIXED32, za.SFIXED64, Cn.SFIXED64, za.SINT32, Cn.SINT32, za.SINT64, Cn.SINT64;
    const As = class e3 extends cn {
      constructor(e4) {
        super(), this.seconds = _n.zero, this.nanos = 0, wa.util.initPartial(e4, this);
      }
      fromJson(e4, n3) {
        if ("string" != typeof e4) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${wa.json.debug(e4)}`);
        const a3 = e4.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!a3) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const t3 = Date.parse(a3[1] + "-" + a3[2] + "-" + a3[3] + "T" + a3[4] + ":" + a3[5] + ":" + a3[6] + (a3[8] ? a3[8] : "Z"));
        if (Number.isNaN(t3)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (t3 < Date.parse("0001-01-01T00:00:00Z") || t3 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = _n.parse(t3 / 1e3), this.nanos = 0, a3[7] && (this.nanos = parseInt("1" + a3[7] + "0".repeat(9 - a3[7].length)) - 1e9), this;
      }
      toJson(e4) {
        const n3 = 1e3 * Number(this.seconds);
        if (n3 < Date.parse("0001-01-01T00:00:00Z") || n3 > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let a3 = "Z";
        if (this.nanos > 0) {
          const e5 = (this.nanos + 1e9).toString().substring(1);
          a3 = "000000" === e5.substring(3) ? "." + e5.substring(0, 3) + "Z" : "000" === e5.substring(6) ? "." + e5.substring(0, 6) + "Z" : "." + e5 + "Z";
        }
        return new Date(n3).toISOString().replace(".000Z", a3);
      }
      toDate() {
        return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
      }
      static now() {
        return e3.fromDate(/* @__PURE__ */ new Date());
      }
      static fromDate(n3) {
        const a3 = n3.getTime();
        return new e3({ seconds: _n.parse(Math.floor(a3 / 1e3)), nanos: a3 % 1e3 * 1e6 });
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    As.runtime = wa, As.typeName = "google.protobuf.Timestamp", As.fields = wa.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
    let ls = As;
    const cs = class e3 extends cn {
      constructor(e4) {
        super(), this.seconds = _n.zero, this.nanos = 0, wa.util.initPartial(e4, this);
      }
      fromJson(e4, n3) {
        if ("string" != typeof e4) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${wa.json.debug(e4)}`);
        const a3 = e4.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (null === a3) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${wa.json.debug(e4)}`);
        const t3 = Number(a3[1]);
        if (t3 > 315576e6 || t3 < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${wa.json.debug(e4)}`);
        if (this.seconds = _n.parse(t3), "string" == typeof a3[2]) {
          const e5 = a3[2] + "0".repeat(9 - a3[2].length);
          this.nanos = parseInt(e5), (t3 < 0 || Object.is(t3, -0)) && (this.nanos = -this.nanos);
        }
        return this;
      }
      toJson(e4) {
        if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
        let n3 = this.seconds.toString();
        if (0 !== this.nanos) {
          let e5 = Math.abs(this.nanos).toString();
          e5 = "0".repeat(9 - e5.length) + e5, "000000" === e5.substring(3) ? e5 = e5.substring(0, 3) : "000" === e5.substring(6) && (e5 = e5.substring(0, 6)), n3 += "." + e5, this.nanos < 0 && 0 == Number(this.seconds) && (n3 = "-" + n3);
        }
        return n3 + "s";
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    cs.runtime = wa, cs.typeName = "google.protobuf.Duration", cs.fields = wa.util.newFieldList(() => [{ no: 1, name: "seconds", kind: "scalar", T: 3 }, { no: 2, name: "nanos", kind: "scalar", T: 5 }]);
    const ms = class e3 extends cn {
      constructor(e4) {
        super(), this.typeUrl = "", this.value = new Uint8Array(0), wa.util.initPartial(e4, this);
      }
      toJson(e4) {
        if ("" === this.typeUrl) return {};
        const n3 = this.typeUrlToName(this.typeUrl), a3 = e4?.typeRegistry?.findMessage(n3);
        if (!a3) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let t3 = a3.fromBinary(this.value).toJson(e4);
        return (n3.startsWith("google.protobuf.") || null === t3 || Array.isArray(t3) || "object" != typeof t3) && (t3 = { value: t3 }), t3["@type"] = this.typeUrl, t3;
      }
      fromJson(e4, n3) {
        if (null === e4 || Array.isArray(e4) || "object" != typeof e4) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === e4 ? "null" : Array.isArray(e4) ? "array" : typeof e4));
        if (0 == Object.keys(e4).length) return this;
        const a3 = e4["@type"];
        if ("string" != typeof a3 || "" == a3) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const t3 = this.typeUrlToName(a3), s2 = n3?.typeRegistry?.findMessage(t3);
        if (!s2) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${a3} is not in the type registry`);
        let o2;
        if (t3.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e4, "value")) o2 = s2.fromJson(e4.value, n3);
        else {
          const a4 = Object.assign({}, e4);
          delete a4["@type"], o2 = s2.fromJson(a4, n3);
        }
        return this.packFrom(o2), this;
      }
      packFrom(e4) {
        this.value = e4.toBinary(), this.typeUrl = this.typeNameToUrl(e4.getType().typeName);
      }
      unpackTo(e4) {
        return !!this.is(e4.getType()) && (e4.fromBinary(this.value), true);
      }
      unpack(e4) {
        if ("" === this.typeUrl) return;
        const n3 = e4.findMessage(this.typeUrlToName(this.typeUrl));
        return n3 ? n3.fromBinary(this.value) : void 0;
      }
      is(e4) {
        if ("" === this.typeUrl) return false;
        const n3 = this.typeUrlToName(this.typeUrl);
        let a3 = "";
        return a3 = "string" == typeof e4 ? e4 : e4.typeName, n3 === a3;
      }
      typeNameToUrl(e4) {
        return `type.googleapis.com/${e4}`;
      }
      typeUrlToName(e4) {
        if (!e4.length) throw new Error(`invalid type url: ${e4}`);
        const n3 = e4.lastIndexOf("/"), a3 = n3 >= 0 ? e4.substring(n3 + 1) : e4;
        if (!a3.length) throw new Error(`invalid type url: ${e4}`);
        return a3;
      }
      static pack(n3) {
        const a3 = new e3();
        return a3.packFrom(n3), a3;
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    ms.runtime = wa, ms.typeName = "google.protobuf.Any", ms.fields = wa.util.newFieldList(() => [{ no: 1, name: "type_url", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 12 }]);
    let ds = ms;
    const gs = class e3 extends cn {
      constructor(e4) {
        super(), wa.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    gs.runtime = wa, gs.typeName = "google.protobuf.Empty", gs.fields = wa.util.newFieldList(() => []);
    let us = gs;
    const Es = class e3 extends cn {
      constructor(e4) {
        super(), this.paths = [], wa.util.initPartial(e4, this);
      }
      toJson(e4) {
        return this.paths.map((e5) => {
          if (e5.match(/_[0-9]?_/g) || e5.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + e5 + '" is irreversible');
          return (function(e6) {
            let n3 = false;
            const a3 = [];
            for (let t3 = 0; t3 < e6.length; t3++) {
              let s2 = e6.charAt(t3);
              switch (s2) {
                case "_":
                  n3 = true;
                  break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                  a3.push(s2), n3 = false;
                  break;
                default:
                  n3 && (n3 = false, s2 = s2.toUpperCase()), a3.push(s2);
              }
            }
            return a3.join("");
          })(e5);
        }).join(",");
      }
      fromJson(e4, n3) {
        if ("string" != typeof e4) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + wa.json.debug(e4));
        if ("" === e4) return this;
        return this.paths = e4.split(",").map(function(e5) {
          if (e5.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
          const n4 = e5.replace(/[A-Z]/g, (e6) => "_" + e6.toLowerCase());
          return "_" === n4[0] ? n4.substring(1) : n4;
        }), this;
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    Es.runtime = wa, Es.typeName = "google.protobuf.FieldMask", Es.fields = wa.util.newFieldList(() => [{ no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }]);
    var ps = ((e3) => (e3[e3.NULL_VALUE = 0] = "NULL_VALUE", e3))(ps || {});
    wa.util.setEnumType(ps, "google.protobuf.NullValue", [{ no: 0, name: "NULL_VALUE" }]);
    const Ts = class e3 extends cn {
      constructor(e4) {
        super(), this.fields = {}, wa.util.initPartial(e4, this);
      }
      toJson(e4) {
        const n3 = {};
        for (const [a3, t3] of Object.entries(this.fields)) n3[a3] = t3.toJson(e4);
        return n3;
      }
      fromJson(e4, n3) {
        if ("object" != typeof e4 || null == e4 || Array.isArray(e4)) throw new Error("cannot decode google.protobuf.Struct from JSON " + wa.json.debug(e4));
        for (const [n4, a3] of Object.entries(e4)) this.fields[n4] = hs.fromJson(a3);
        return this;
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    Ts.runtime = wa, Ts.typeName = "google.protobuf.Struct", Ts.fields = wa.util.newFieldList(() => [{ no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: hs } }]);
    let ks = Ts;
    const Is = class e3 extends cn {
      constructor(e4) {
        super(), this.kind = { case: void 0 }, wa.util.initPartial(e4, this);
      }
      toJson(e4) {
        switch (this.kind.case) {
          case "nullValue":
            return null;
          case "numberValue":
            if (!Number.isFinite(this.kind.value)) throw new Error("google.protobuf.Value cannot be NaN or Infinity");
            return this.kind.value;
          case "boolValue":
          case "stringValue":
            return this.kind.value;
          case "structValue":
          case "listValue":
            return this.kind.value.toJson({ ...e4, emitDefaultValues: true });
        }
        throw new Error("google.protobuf.Value must have a value");
      }
      fromJson(e4, n3) {
        switch (typeof e4) {
          case "number":
            this.kind = { case: "numberValue", value: e4 };
            break;
          case "string":
            this.kind = { case: "stringValue", value: e4 };
            break;
          case "boolean":
            this.kind = { case: "boolValue", value: e4 };
            break;
          case "object":
            null === e4 ? this.kind = { case: "nullValue", value: 0 } : Array.isArray(e4) ? this.kind = { case: "listValue", value: Cs.fromJson(e4) } : this.kind = { case: "structValue", value: ks.fromJson(e4) };
            break;
          default:
            throw new Error("cannot decode google.protobuf.Value from JSON " + wa.json.debug(e4));
        }
        return this;
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    Is.runtime = wa, Is.typeName = "google.protobuf.Value", Is.fields = wa.util.newFieldList(() => [{ no: 1, name: "null_value", kind: "enum", T: wa.getEnumType(ps), oneof: "kind" }, { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" }, { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" }, { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" }, { no: 5, name: "struct_value", kind: "message", T: ks, oneof: "kind" }, { no: 6, name: "list_value", kind: "message", T: Cs, oneof: "kind" }]);
    let hs = Is;
    const _s = class e3 extends cn {
      constructor(e4) {
        super(), this.values = [], wa.util.initPartial(e4, this);
      }
      toJson(e4) {
        return this.values.map((e5) => e5.toJson());
      }
      fromJson(e4, n3) {
        if (!Array.isArray(e4)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + wa.json.debug(e4));
        for (let n4 of e4) this.values.push(hs.fromJson(n4));
        return this;
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    _s.runtime = wa, _s.typeName = "google.protobuf.ListValue", _s.fields = wa.util.newFieldList(() => [{ no: 1, name: "values", kind: "message", T: hs, repeated: true }]);
    let Cs = _s;
    const fs = class e3 extends cn {
      constructor(e4) {
        super(), this.value = 0, wa.util.initPartial(e4, this);
      }
      toJson(e4) {
        return wa.json.writeScalar(Cn.DOUBLE, this.value, true);
      }
      fromJson(e4, n3) {
        try {
          this.value = wa.json.readScalar(Cn.DOUBLE, e4);
        } catch (e5) {
          let n4 = 'cannot decode message google.protobuf.DoubleValue from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (n4 += `: ${e5.message}`), new Error(n4);
        }
        return this;
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    fs.runtime = wa, fs.typeName = "google.protobuf.DoubleValue", fs.fields = wa.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 1 }]), fs.fieldWrapper = { wrapField: (e3) => new fs({ value: e3 }), unwrapField: (e3) => e3.value };
    const Bs = class e3 extends cn {
      constructor(e4) {
        super(), this.value = 0, wa.util.initPartial(e4, this);
      }
      toJson(e4) {
        return wa.json.writeScalar(Cn.FLOAT, this.value, true);
      }
      fromJson(e4, n3) {
        try {
          this.value = wa.json.readScalar(Cn.FLOAT, e4);
        } catch (e5) {
          let n4 = 'cannot decode message google.protobuf.FloatValue from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (n4 += `: ${e5.message}`), new Error(n4);
        }
        return this;
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    Bs.runtime = wa, Bs.typeName = "google.protobuf.FloatValue", Bs.fields = wa.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 2 }]), Bs.fieldWrapper = { wrapField: (e3) => new Bs({ value: e3 }), unwrapField: (e3) => e3.value };
    const Qs = class e3 extends cn {
      constructor(e4) {
        super(), this.value = _n.zero, wa.util.initPartial(e4, this);
      }
      toJson(e4) {
        return wa.json.writeScalar(Cn.INT64, this.value, true);
      }
      fromJson(e4, n3) {
        try {
          this.value = wa.json.readScalar(Cn.INT64, e4);
        } catch (e5) {
          let n4 = 'cannot decode message google.protobuf.Int64Value from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (n4 += `: ${e5.message}`), new Error(n4);
        }
        return this;
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    Qs.runtime = wa, Qs.typeName = "google.protobuf.Int64Value", Qs.fields = wa.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 3 }]), Qs.fieldWrapper = { wrapField: (e3) => new Qs({ value: e3 }), unwrapField: (e3) => e3.value };
    const ys = class e3 extends cn {
      constructor(e4) {
        super(), this.value = _n.zero, wa.util.initPartial(e4, this);
      }
      toJson(e4) {
        return wa.json.writeScalar(Cn.UINT64, this.value, true);
      }
      fromJson(e4, n3) {
        try {
          this.value = wa.json.readScalar(Cn.UINT64, e4);
        } catch (e5) {
          let n4 = 'cannot decode message google.protobuf.UInt64Value from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (n4 += `: ${e5.message}`), new Error(n4);
        }
        return this;
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    ys.runtime = wa, ys.typeName = "google.protobuf.UInt64Value", ys.fields = wa.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 4 }]), ys.fieldWrapper = { wrapField: (e3) => new ys({ value: e3 }), unwrapField: (e3) => e3.value };
    const Rs = class e3 extends cn {
      constructor(e4) {
        super(), this.value = 0, wa.util.initPartial(e4, this);
      }
      toJson(e4) {
        return wa.json.writeScalar(Cn.INT32, this.value, true);
      }
      fromJson(e4, n3) {
        try {
          this.value = wa.json.readScalar(Cn.INT32, e4);
        } catch (e5) {
          let n4 = 'cannot decode message google.protobuf.Int32Value from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (n4 += `: ${e5.message}`), new Error(n4);
        }
        return this;
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    Rs.runtime = wa, Rs.typeName = "google.protobuf.Int32Value", Rs.fields = wa.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 5 }]), Rs.fieldWrapper = { wrapField: (e3) => new Rs({ value: e3 }), unwrapField: (e3) => e3.value };
    const Ns = class e3 extends cn {
      constructor(e4) {
        super(), this.value = 0, wa.util.initPartial(e4, this);
      }
      toJson(e4) {
        return wa.json.writeScalar(Cn.UINT32, this.value, true);
      }
      fromJson(e4, n3) {
        try {
          this.value = wa.json.readScalar(Cn.UINT32, e4);
        } catch (e5) {
          let n4 = 'cannot decode message google.protobuf.UInt32Value from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (n4 += `: ${e5.message}`), new Error(n4);
        }
        return this;
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    Ns.runtime = wa, Ns.typeName = "google.protobuf.UInt32Value", Ns.fields = wa.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 13 }]), Ns.fieldWrapper = { wrapField: (e3) => new Ns({ value: e3 }), unwrapField: (e3) => e3.value };
    const vs = class e3 extends cn {
      constructor(e4) {
        super(), this.value = false, wa.util.initPartial(e4, this);
      }
      toJson(e4) {
        return wa.json.writeScalar(Cn.BOOL, this.value, true);
      }
      fromJson(e4, n3) {
        try {
          this.value = wa.json.readScalar(Cn.BOOL, e4);
        } catch (e5) {
          let n4 = 'cannot decode message google.protobuf.BoolValue from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (n4 += `: ${e5.message}`), new Error(n4);
        }
        return this;
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    vs.runtime = wa, vs.typeName = "google.protobuf.BoolValue", vs.fields = wa.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 8 }]), vs.fieldWrapper = { wrapField: (e3) => new vs({ value: e3 }), unwrapField: (e3) => e3.value };
    const Ss = class e3 extends cn {
      constructor(e4) {
        super(), this.value = "", wa.util.initPartial(e4, this);
      }
      toJson(e4) {
        return wa.json.writeScalar(Cn.STRING, this.value, true);
      }
      fromJson(e4, n3) {
        try {
          this.value = wa.json.readScalar(Cn.STRING, e4);
        } catch (e5) {
          let n4 = 'cannot decode message google.protobuf.StringValue from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (n4 += `: ${e5.message}`), new Error(n4);
        }
        return this;
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    Ss.runtime = wa, Ss.typeName = "google.protobuf.StringValue", Ss.fields = wa.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 9 }]), Ss.fieldWrapper = { wrapField: (e3) => new Ss({ value: e3 }), unwrapField: (e3) => e3.value };
    const Ds = class e3 extends cn {
      constructor(e4) {
        super(), this.value = new Uint8Array(0), wa.util.initPartial(e4, this);
      }
      toJson(e4) {
        return wa.json.writeScalar(Cn.BYTES, this.value, true);
      }
      fromJson(e4, n3) {
        try {
          this.value = wa.json.readScalar(Cn.BYTES, e4);
        } catch (e5) {
          let n4 = 'cannot decode message google.protobuf.BytesValue from JSON"';
          throw e5 instanceof Error && e5.message.length > 0 && (n4 += `: ${e5.message}`), new Error(n4);
        }
        return this;
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    Ds.runtime = wa, Ds.typeName = "google.protobuf.BytesValue", Ds.fields = wa.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 12 }]), Ds.fieldWrapper = { wrapField: (e3) => new Ds({ value: e3 }), unwrapField: (e3) => e3.value };
    sn(ps);
    const ws = class e3 extends cn {
      constructor(e4) {
        super(), ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    ws.runtime = ba, ws.typeName = "google.protobuf.compiler.Version", ws.fields = ba.util.newFieldList(() => [{ no: 1, name: "major", kind: "scalar", T: 5, opt: true }, { no: 2, name: "minor", kind: "scalar", T: 5, opt: true }, { no: 3, name: "patch", kind: "scalar", T: 5, opt: true }, { no: 4, name: "suffix", kind: "scalar", T: 9, opt: true }]);
    let bs = ws;
    const Ms = class e3 extends cn {
      constructor(e4) {
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    Ms.runtime = ba, Ms.typeName = "google.protobuf.compiler.CodeGeneratorRequest", Ms.fields = ba.util.newFieldList(() => [{ no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "parameter", kind: "scalar", T: 9, opt: true }, { no: 15, name: "proto_file", kind: "message", T: La, repeated: true }, { no: 17, name: "source_file_descriptors", kind: "message", T: La, repeated: true }, { no: 3, name: "compiler_version", kind: "message", T: bs, opt: true }]);
    const Fs = class e3 extends cn {
      constructor(e4) {
        super(), this.file = [], ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    Fs.runtime = ba, Fs.typeName = "google.protobuf.compiler.CodeGeneratorResponse", Fs.fields = ba.util.newFieldList(() => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }, { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: true }, { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: true }, { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: true }, { no: 15, name: "file", kind: "message", T: Ls, repeated: true }]);
    var Os = ((e3) => (e3[e3.NONE = 0] = "NONE", e3[e3.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e3[e3.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS", e3))(Os || {});
    ba.util.setEnumType(Os, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [{ no: 0, name: "FEATURE_NONE" }, { no: 1, name: "FEATURE_PROTO3_OPTIONAL" }, { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" }]);
    const Us = class e3 extends cn {
      constructor(e4) {
        super(), ba.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return ba.util.equals(e3, n3, a3);
      }
    };
    Us.runtime = ba, Us.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", Us.fields = ba.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: true }, { no: 15, name: "content", kind: "scalar", T: 9, opt: true }, { no: 16, name: "generated_code_info", kind: "message", T: ss, opt: true }]);
    let Ls = Us;
    const Ps = class e3 extends cn {
      constructor(e4) {
        super(), this.fileName = "", wa.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    Ps.runtime = wa, Ps.typeName = "google.protobuf.SourceContext", Ps.fields = wa.util.newFieldList(() => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }]);
    let xs = Ps;
    var Gs = ((e3) => (e3[e3.PROTO2 = 0] = "PROTO2", e3[e3.PROTO3 = 1] = "PROTO3", e3[e3.EDITIONS = 2] = "EDITIONS", e3))(Gs || {});
    wa.util.setEnumType(Gs, "google.protobuf.Syntax", [{ no: 0, name: "SYNTAX_PROTO2" }, { no: 1, name: "SYNTAX_PROTO3" }, { no: 2, name: "SYNTAX_EDITIONS" }]);
    const Ys = class e3 extends cn {
      constructor(e4) {
        super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = 0, this.edition = "", wa.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    Ys.runtime = wa, Ys.typeName = "google.protobuf.Type", Ys.fields = wa.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "fields", kind: "message", T: Vs, repeated: true }, { no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "options", kind: "message", T: Zs, repeated: true }, { no: 5, name: "source_context", kind: "message", T: xs }, { no: 6, name: "syntax", kind: "enum", T: wa.getEnumType(Gs) }, { no: 7, name: "edition", kind: "scalar", T: 9 }]);
    const Js = class e3 extends cn {
      constructor(e4) {
        super(), this.kind = 0, this.cardinality = 0, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = false, this.options = [], this.jsonName = "", this.defaultValue = "", wa.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    Js.runtime = wa, Js.typeName = "google.protobuf.Field", Js.fields = wa.util.newFieldList(() => [{ no: 1, name: "kind", kind: "enum", T: wa.getEnumType(qs) }, { no: 2, name: "cardinality", kind: "enum", T: wa.getEnumType(Hs) }, { no: 3, name: "number", kind: "scalar", T: 5 }, { no: 4, name: "name", kind: "scalar", T: 9 }, { no: 6, name: "type_url", kind: "scalar", T: 9 }, { no: 7, name: "oneof_index", kind: "scalar", T: 5 }, { no: 8, name: "packed", kind: "scalar", T: 8 }, { no: 9, name: "options", kind: "message", T: Zs, repeated: true }, { no: 10, name: "json_name", kind: "scalar", T: 9 }, { no: 11, name: "default_value", kind: "scalar", T: 9 }]);
    let Vs = Js;
    var qs = ((e3) => (e3[e3.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", e3[e3.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", e3[e3.TYPE_FLOAT = 2] = "TYPE_FLOAT", e3[e3.TYPE_INT64 = 3] = "TYPE_INT64", e3[e3.TYPE_UINT64 = 4] = "TYPE_UINT64", e3[e3.TYPE_INT32 = 5] = "TYPE_INT32", e3[e3.TYPE_FIXED64 = 6] = "TYPE_FIXED64", e3[e3.TYPE_FIXED32 = 7] = "TYPE_FIXED32", e3[e3.TYPE_BOOL = 8] = "TYPE_BOOL", e3[e3.TYPE_STRING = 9] = "TYPE_STRING", e3[e3.TYPE_GROUP = 10] = "TYPE_GROUP", e3[e3.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", e3[e3.TYPE_BYTES = 12] = "TYPE_BYTES", e3[e3.TYPE_UINT32 = 13] = "TYPE_UINT32", e3[e3.TYPE_ENUM = 14] = "TYPE_ENUM", e3[e3.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", e3[e3.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", e3[e3.TYPE_SINT32 = 17] = "TYPE_SINT32", e3[e3.TYPE_SINT64 = 18] = "TYPE_SINT64", e3))(qs || {});
    wa.util.setEnumType(qs, "google.protobuf.Field.Kind", [{ no: 0, name: "TYPE_UNKNOWN" }, { no: 1, name: "TYPE_DOUBLE" }, { no: 2, name: "TYPE_FLOAT" }, { no: 3, name: "TYPE_INT64" }, { no: 4, name: "TYPE_UINT64" }, { no: 5, name: "TYPE_INT32" }, { no: 6, name: "TYPE_FIXED64" }, { no: 7, name: "TYPE_FIXED32" }, { no: 8, name: "TYPE_BOOL" }, { no: 9, name: "TYPE_STRING" }, { no: 10, name: "TYPE_GROUP" }, { no: 11, name: "TYPE_MESSAGE" }, { no: 12, name: "TYPE_BYTES" }, { no: 13, name: "TYPE_UINT32" }, { no: 14, name: "TYPE_ENUM" }, { no: 15, name: "TYPE_SFIXED32" }, { no: 16, name: "TYPE_SFIXED64" }, { no: 17, name: "TYPE_SINT32" }, { no: 18, name: "TYPE_SINT64" }]);
    var Hs = ((e3) => (e3[e3.UNKNOWN = 0] = "UNKNOWN", e3[e3.OPTIONAL = 1] = "OPTIONAL", e3[e3.REQUIRED = 2] = "REQUIRED", e3[e3.REPEATED = 3] = "REPEATED", e3))(Hs || {});
    wa.util.setEnumType(Hs, "google.protobuf.Field.Cardinality", [{ no: 0, name: "CARDINALITY_UNKNOWN" }, { no: 1, name: "CARDINALITY_OPTIONAL" }, { no: 2, name: "CARDINALITY_REQUIRED" }, { no: 3, name: "CARDINALITY_REPEATED" }]);
    const Ws = class e3 extends cn {
      constructor(e4) {
        super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = 0, this.edition = "", wa.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    Ws.runtime = wa, Ws.typeName = "google.protobuf.Enum", Ws.fields = wa.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "enumvalue", kind: "message", T: js, repeated: true }, { no: 3, name: "options", kind: "message", T: Zs, repeated: true }, { no: 4, name: "source_context", kind: "message", T: xs }, { no: 5, name: "syntax", kind: "enum", T: wa.getEnumType(Gs) }, { no: 6, name: "edition", kind: "scalar", T: 9 }]);
    const Ks = class e3 extends cn {
      constructor(e4) {
        super(), this.name = "", this.number = 0, this.options = [], wa.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    Ks.runtime = wa, Ks.typeName = "google.protobuf.EnumValue", Ks.fields = wa.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "number", kind: "scalar", T: 5 }, { no: 3, name: "options", kind: "message", T: Zs, repeated: true }]);
    let js = Ks;
    const Xs = class e3 extends cn {
      constructor(e4) {
        super(), this.name = "", wa.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    Xs.runtime = wa, Xs.typeName = "google.protobuf.Option", Xs.fields = wa.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "message", T: ds }]);
    let Zs = Xs;
    const zs = class e3 extends cn {
      constructor(e4) {
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = Gs.PROTO2, wa.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    zs.runtime = wa, zs.typeName = "google.protobuf.Api", zs.fields = wa.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "methods", kind: "message", T: eo, repeated: true }, { no: 3, name: "options", kind: "message", T: Zs, repeated: true }, { no: 4, name: "version", kind: "scalar", T: 9 }, { no: 5, name: "source_context", kind: "message", T: xs }, { no: 6, name: "mixins", kind: "message", T: ao, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: wa.getEnumType(Gs) }]);
    const $s = class e3 extends cn {
      constructor(e4) {
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = false, this.responseTypeUrl = "", this.responseStreaming = false, this.options = [], this.syntax = Gs.PROTO2, wa.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    $s.runtime = wa, $s.typeName = "google.protobuf.Method", $s.fields = wa.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "request_type_url", kind: "scalar", T: 9 }, { no: 3, name: "request_streaming", kind: "scalar", T: 8 }, { no: 4, name: "response_type_url", kind: "scalar", T: 9 }, { no: 5, name: "response_streaming", kind: "scalar", T: 8 }, { no: 6, name: "options", kind: "message", T: Zs, repeated: true }, { no: 7, name: "syntax", kind: "enum", T: wa.getEnumType(Gs) }]);
    let eo = $s;
    const no = class e3 extends cn {
      constructor(e4) {
        super(), this.name = "", this.root = "", wa.util.initPartial(e4, this);
      }
      static fromBinary(n3, a3) {
        return new e3().fromBinary(n3, a3);
      }
      static fromJson(n3, a3) {
        return new e3().fromJson(n3, a3);
      }
      static fromJsonString(n3, a3) {
        return new e3().fromJsonString(n3, a3);
      }
      static equals(n3, a3) {
        return wa.util.equals(e3, n3, a3);
      }
    };
    no.runtime = wa, no.typeName = "google.protobuf.Mixin", no.fields = wa.util.newFieldList(() => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "root", kind: "scalar", T: 9 }]);
    let ao = no;
    const to = wa.makeEnum("aiserver.v1.LintSeverity", [{ no: 0, name: "LINT_SEVERITY_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "LINT_SEVERITY_ERROR", localName: "ERROR" }, { no: 2, name: "LINT_SEVERITY_WARNING", localName: "WARNING" }, { no: 3, name: "LINT_SEVERITY_INFO", localName: "INFO" }, { no: 4, name: "LINT_SEVERITY_HINT", localName: "HINT" }, { no: 5, name: "LINT_SEVERITY_AI", localName: "AI" }]), so = wa.makeEnum("aiserver.v1.FeatureType", [{ no: 0, name: "FEATURE_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "FEATURE_TYPE_EDIT", localName: "EDIT" }, { no: 2, name: "FEATURE_TYPE_GENERATE", localName: "GENERATE" }, { no: 3, name: "FEATURE_TYPE_INLINE_LONG_COMPLETION", localName: "INLINE_LONG_COMPLETION" }]), oo = wa.makeEnum("aiserver.v1.EmbeddingModel", [{ no: 0, name: "EMBEDDING_MODEL_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "EMBEDDING_MODEL_VOYAGE_CODE_2", localName: "VOYAGE_CODE_2" }, { no: 2, name: "EMBEDDING_MODEL_TEXT_EMBEDDINGS_LARGE_3", localName: "TEXT_EMBEDDINGS_LARGE_3" }, { no: 3, name: "EMBEDDING_MODEL_QWEN_1_5B_CUSTOM", localName: "QWEN_1_5B_CUSTOM" }, { no: 4, name: "EMBEDDING_MODEL_MOCK_CHUNKER_ERROR", localName: "MOCK_CHUNKER_ERROR" }, { no: 5, name: "EMBEDDING_MODEL_QWEN_1_5B_0618_CUSTOM", localName: "QWEN_1_5B_0618_CUSTOM" }, { no: 6, name: "EMBEDDING_MODEL_QWEN_1_5B_0618_FP8_MM_CUSTOM", localName: "QWEN_1_5B_0618_FP8_MM_CUSTOM" }]), ro = wa.makeMessageType("aiserver.v1.CursorPosition", () => [{ no: 1, name: "line", kind: "scalar", T: 5 }, { no: 2, name: "column", kind: "scalar", T: 5 }]), io = wa.makeMessageType("aiserver.v1.SelectionWithOrientation", () => [{ no: 1, name: "selection_start_line_number", kind: "scalar", T: 5 }, { no: 2, name: "selection_start_column", kind: "scalar", T: 5 }, { no: 3, name: "position_line_number", kind: "scalar", T: 5 }, { no: 4, name: "position_column", kind: "scalar", T: 5 }]), Ao = wa.makeMessageType("aiserver.v1.GetDiffRequest", () => [{ no: 1, name: "cwd", kind: "scalar", T: 9 }, { no: 2, name: "ref", kind: "scalar", T: 9 }, { no: 3, name: "base_ref", kind: "scalar", T: 9 }, { no: 4, name: "merge_base", kind: "scalar", T: 8 }, { no: 5, name: "target_paths", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "unified_context_lines", kind: "scalar", T: 5, opt: true }, { no: 7, name: "max_untracked_files", kind: "scalar", T: 5 }, { no: 9, name: "submodule_recurse_depth", kind: "scalar", T: 5 }, { no: 10, name: "include_space_changes", kind: "scalar", T: 8 }, { no: 11, name: "committed_only", kind: "scalar", T: 8 }, { no: 12, name: "compute_patch_id", kind: "scalar", T: 8 }, { no: 13, name: "return_head_sha", kind: "scalar", T: 8, opt: true }, { no: 14, name: "max_response_bytes", kind: "scalar", T: 5, opt: true }, { no: 15, name: "max_files_with_contents", kind: "scalar", T: 13, opt: true }, { no: 16, name: "max_content_bytes", kind: "scalar", T: 13, opt: true }, { no: 8, name: "output_format", kind: "enum", T: wa.getEnumType(lo), opt: true }]), lo = wa.makeEnum("aiserver.v1.GetDiffRequest.OutputFormat", [{ no: 0, name: "OUTPUT_FORMAT_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "OUTPUT_FORMAT_NAME_STATUS", localName: "NAME_STATUS" }, { no: 2, name: "OUTPUT_FORMAT_NAME_STATUS_AND_NUMSTAT", localName: "NAME_STATUS_AND_NUMSTAT" }, { no: 3, name: "OUTPUT_FORMAT_FILE_DIFFS", localName: "FILE_DIFFS" }, { no: 4, name: "OUTPUT_FORMAT_DIFFS_WITH_BEFORE_AND_AFTER", localName: "DIFFS_WITH_BEFORE_AND_AFTER" }]), co = wa.makeMessageType("aiserver.v1.GetDiffResponse", () => [{ no: 1, name: "diff", kind: "message", T: uo }, { no: 2, name: "submodule_diffs", kind: "message", T: mo, repeated: true }, { no: 3, name: "patch_id", kind: "scalar", T: 9, opt: true }, { no: 4, name: "head_sha", kind: "scalar", T: 9, opt: true }, { no: 5, name: "has_uncommitted_changes", kind: "scalar", T: 8, opt: true }]), mo = wa.makeMessageType("aiserver.v1.GetDiffResponse.SubmoduleDiff", () => [{ no: 1, name: "relative_path", kind: "scalar", T: 9 }, { no: 2, name: "diff", kind: "message", T: uo }, { no: 3, name: "errored", kind: "scalar", T: 8 }], { localName: "GetDiffResponse_SubmoduleDiff" }), go = wa.makeMessageType("aiserver.v1.SimplestRange", () => [{ no: 1, name: "start_line", kind: "scalar", T: 5 }, { no: 2, name: "end_line_inclusive", kind: "scalar", T: 5 }]), uo = wa.makeMessageType("aiserver.v1.GitDiff", () => [{ no: 1, name: "diffs", kind: "message", T: po, repeated: true }, { no: 2, name: "diff_type", kind: "enum", T: wa.getEnumType(Eo) }, { no: 3, name: "file_contents_omitted", kind: "scalar", T: 8, opt: true }]), Eo = wa.makeEnum("aiserver.v1.GitDiff.DiffType", [{ no: 0, name: "DIFF_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "DIFF_TYPE_DIFF_TO_HEAD", localName: "DIFF_TO_HEAD" }, { no: 2, name: "DIFF_TYPE_DIFF_FROM_BRANCH_TO_MAIN", localName: "DIFF_FROM_BRANCH_TO_MAIN" }]), po = wa.makeMessageType("aiserver.v1.FileDiff", () => [{ no: 4, name: "added", kind: "scalar", T: 5 }, { no: 5, name: "removed", kind: "scalar", T: 5 }, { no: 1, name: "from", kind: "scalar", T: 9 }, { no: 2, name: "to", kind: "scalar", T: 9 }, { no: 3, name: "chunks", kind: "message", T: To, repeated: true }, { no: 6, name: "before_file_contents", kind: "scalar", T: 9, opt: true }, { no: 7, name: "after_file_contents", kind: "scalar", T: 9, opt: true }, { no: 8, name: "is_generated", kind: "scalar", T: 8, opt: true }, { no: 9, name: "old_mode", kind: "scalar", T: 9, opt: true }, { no: 10, name: "new_mode", kind: "scalar", T: 9, opt: true }]), To = wa.makeMessageType("aiserver.v1.FileDiff.Chunk", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "lines", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "old_start", kind: "scalar", T: 5 }, { no: 4, name: "old_lines", kind: "scalar", T: 5 }, { no: 5, name: "new_start", kind: "scalar", T: 5 }, { no: 6, name: "new_lines", kind: "scalar", T: 5 }], { localName: "FileDiff_Chunk" }), ko = wa.makeMessageType("aiserver.v1.SimpleRange", () => [{ no: 1, name: "start_line_number", kind: "scalar", T: 5 }, { no: 2, name: "start_column", kind: "scalar", T: 5 }, { no: 3, name: "end_line_number_inclusive", kind: "scalar", T: 5 }, { no: 4, name: "end_column", kind: "scalar", T: 5 }]), Io = wa.makeMessageType("aiserver.v1.CmdKDebugInfo", () => [{ no: 1, name: "remote_url", kind: "scalar", T: 9 }, { no: 2, name: "commit_id", kind: "scalar", T: 9 }, { no: 3, name: "git_patch", kind: "scalar", T: 9 }, { no: 4, name: "unsaved_files", kind: "message", T: ho, repeated: true }, { no: 5, name: "unix_timestamp_ms", kind: "scalar", T: 1 }, { no: 6, name: "open_editors", kind: "message", T: _o, repeated: true }, { no: 7, name: "file_diff_histories", kind: "message", T: Co, repeated: true }, { no: 8, name: "branch_name", kind: "scalar", T: 9 }, { no: 9, name: "branch_notes", kind: "scalar", T: 9 }, { no: 12, name: "branch_notes_rich", kind: "scalar", T: 9 }, { no: 10, name: "global_notes", kind: "scalar", T: 9 }, { no: 11, name: "past_thoughts", kind: "message", T: fo, repeated: true }, { no: 13, name: "base_branch_name", kind: "scalar", T: 9 }, { no: 14, name: "base_branch_commit_id", kind: "scalar", T: 9 }]), ho = wa.makeMessageType("aiserver.v1.CmdKDebugInfo.UnsavedFiles", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "contents", kind: "scalar", T: 9 }], { localName: "CmdKDebugInfo_UnsavedFiles" }), _o = wa.makeMessageType("aiserver.v1.CmdKDebugInfo.OpenEditor", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "editor_group_index", kind: "scalar", T: 5 }, { no: 3, name: "editor_group_id", kind: "scalar", T: 5 }, { no: 4, name: "is_active", kind: "scalar", T: 8 }], { localName: "CmdKDebugInfo_OpenEditor" }), Co = wa.makeMessageType("aiserver.v1.CmdKDebugInfo.CppFileDiffHistory", () => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }, { no: 2, name: "diff_history", kind: "scalar", T: 9, repeated: true }], { localName: "CmdKDebugInfo_CppFileDiffHistory" }), fo = wa.makeMessageType("aiserver.v1.CmdKDebugInfo.PastThought", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "time_in_unix_seconds", kind: "scalar", T: 1 }], { localName: "CmdKDebugInfo_PastThought" }), Bo = wa.makeMessageType("aiserver.v1.LineRange", () => [{ no: 1, name: "start_line_number", kind: "scalar", T: 5 }, { no: 2, name: "end_line_number_inclusive", kind: "scalar", T: 5 }]), Qo = wa.makeMessageType("aiserver.v1.CursorRange", () => [{ no: 1, name: "start_position", kind: "message", T: ro }, { no: 2, name: "end_position", kind: "message", T: ro }]), yo = wa.makeMessageType("aiserver.v1.DetailedLine", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "line_number", kind: "scalar", T: 2 }, { no: 3, name: "is_signature", kind: "scalar", T: 8 }]), Ro = wa.makeMessageType("aiserver.v1.CodeBlock", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "file_contents", kind: "scalar", T: 9, opt: true }, { no: 9, name: "file_contents_length", kind: "scalar", T: 5, opt: true }, { no: 3, name: "range", kind: "message", T: Qo }, { no: 4, name: "contents", kind: "scalar", T: 9 }, { no: 5, name: "signatures", kind: "message", T: No }, { no: 6, name: "override_contents", kind: "scalar", T: 9, opt: true }, { no: 7, name: "original_contents", kind: "scalar", T: 9, opt: true }, { no: 8, name: "detailed_lines", kind: "message", T: yo, repeated: true }, { no: 10, name: "file_git_context", kind: "message", T: So }]), No = wa.makeMessageType("aiserver.v1.CodeBlock.Signatures", () => [{ no: 1, name: "ranges", kind: "message", T: Qo, repeated: true }], { localName: "CodeBlock_Signatures" }), vo = wa.makeMessageType("aiserver.v1.GitCommit", () => [{ no: 1, name: "commit", kind: "scalar", T: 9 }, { no: 2, name: "author", kind: "scalar", T: 9 }, { no: 3, name: "date", kind: "scalar", T: 9 }, { no: 4, name: "message", kind: "scalar", T: 9 }]), So = wa.makeMessageType("aiserver.v1.FileGit", () => [{ no: 1, name: "commits", kind: "message", T: vo, repeated: true }]), Do = wa.makeMessageType("aiserver.v1.File", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "contents", kind: "scalar", T: 9 }, { no: 3, name: "file_git_context", kind: "message", T: So }]), wo = wa.makeMessageType("aiserver.v1.Diagnostic", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: Qo }, { no: 3, name: "severity", kind: "enum", T: wa.getEnumType(bo) }, { no: 4, name: "related_information", kind: "message", T: Mo, repeated: true }]), bo = wa.makeEnum("aiserver.v1.Diagnostic.DiagnosticSeverity", [{ no: 0, name: "DIAGNOSTIC_SEVERITY_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "DIAGNOSTIC_SEVERITY_ERROR", localName: "ERROR" }, { no: 2, name: "DIAGNOSTIC_SEVERITY_WARNING", localName: "WARNING" }, { no: 3, name: "DIAGNOSTIC_SEVERITY_INFORMATION", localName: "INFORMATION" }, { no: 4, name: "DIAGNOSTIC_SEVERITY_HINT", localName: "HINT" }]), Mo = wa.makeMessageType("aiserver.v1.Diagnostic.RelatedInformation", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: Qo }], { localName: "Diagnostic_RelatedInformation" }), Fo = wa.makeMessageType("aiserver.v1.Lint", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: ko }, { no: 3, name: "severity", kind: "enum", T: wa.getEnumType(to) }]), Oo = wa.makeMessageType("aiserver.v1.BM25Chunk", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: go }, { no: 3, name: "score", kind: "scalar", T: 5 }, { no: 4, name: "relative_path", kind: "scalar", T: 9 }]), Uo = wa.makeMessageType("aiserver.v1.CurrentFileInfo", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "contents", kind: "scalar", T: 9 }, { no: 18, name: "rely_on_filesync", kind: "scalar", T: 8 }, { no: 17, name: "sha_256_hash", kind: "scalar", T: 9, opt: true }, { no: 16, name: "cells", kind: "message", T: Lo, repeated: true }, { no: 10, name: "top_chunks", kind: "message", T: Oo, repeated: true }, { no: 9, name: "contents_start_at_line", kind: "scalar", T: 5 }, { no: 3, name: "cursor_position", kind: "message", T: ro }, { no: 4, name: "dataframes", kind: "message", T: Jo, repeated: true }, { no: 8, name: "total_number_of_lines", kind: "scalar", T: 5 }, { no: 5, name: "language_id", kind: "scalar", T: 9 }, { no: 6, name: "selection", kind: "message", T: Qo }, { no: 11, name: "alternative_version_id", kind: "scalar", T: 5, opt: true }, { no: 7, name: "diagnostics", kind: "message", T: wo, repeated: true }, { no: 14, name: "file_version", kind: "scalar", T: 5, opt: true }, { no: 15, name: "cell_start_lines", kind: "scalar", T: 5, repeated: true }, { no: 19, name: "workspace_root_path", kind: "scalar", T: 9 }, { no: 20, name: "line_ending", kind: "scalar", T: 9, opt: true }]), Lo = wa.makeMessageType("aiserver.v1.CurrentFileInfo.NotebookCell", [], { localName: "CurrentFileInfo_NotebookCell" }), Po = wa.makeMessageType("aiserver.v1.AzureState", () => [{ no: 1, name: "api_key", kind: "scalar", T: 9 }, { no: 2, name: "base_url", kind: "scalar", T: 9 }, { no: 3, name: "deployment", kind: "scalar", T: 9 }, { no: 4, name: "use_azure", kind: "scalar", T: 8 }]), xo = wa.makeMessageType("aiserver.v1.BedrockState", () => [{ no: 1, name: "access_key", kind: "scalar", T: 9 }, { no: 2, name: "secret_key", kind: "scalar", T: 9 }, { no: 3, name: "region", kind: "scalar", T: 9 }, { no: 4, name: "use_bedrock", kind: "scalar", T: 8 }, { no: 5, name: "session_token", kind: "scalar", T: 9 }]), Go = wa.makeMessageType("aiserver.v1.ModelDetails", () => [{ no: 1, name: "model_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "api_key", kind: "scalar", T: 9, opt: true }, { no: 3, name: "enable_ghost_mode", kind: "scalar", T: 8, opt: true }, { no: 4, name: "azure_state", kind: "message", T: Po, opt: true }, { no: 5, name: "enable_slow_pool", kind: "scalar", T: 8, opt: true }, { no: 6, name: "openai_api_base_url", kind: "scalar", T: 9, opt: true }, { no: 7, name: "bedrock_state", kind: "message", T: xo, opt: true }, { no: 8, name: "max_mode", kind: "scalar", T: 8, opt: true }]), Yo = wa.makeMessageType("aiserver.v1.ModelInfo", () => [{ no: 1, name: "model_name", kind: "scalar", T: 9 }]), Jo = wa.makeMessageType("aiserver.v1.DataframeInfo", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "shape", kind: "scalar", T: 9 }, { no: 3, name: "data_dimensionality", kind: "scalar", T: 5 }, { no: 6, name: "columns", kind: "message", T: Vo, repeated: true }, { no: 7, name: "row_count", kind: "scalar", T: 5 }, { no: 8, name: "index_column", kind: "scalar", T: 9 }]), Vo = wa.makeMessageType("aiserver.v1.DataframeInfo.Column", () => [{ no: 1, name: "key", kind: "scalar", T: 9 }, { no: 2, name: "type", kind: "scalar", T: 9 }], { localName: "DataframeInfo_Column" }), qo = wa.makeMessageType("aiserver.v1.LinterError", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: Qo }, { no: 3, name: "source", kind: "scalar", T: 9, opt: true }, { no: 4, name: "related_information", kind: "message", T: Mo, repeated: true }, { no: 5, name: "severity", kind: "enum", T: wa.getEnumType(bo), opt: true }, { no: 6, name: "is_stale", kind: "scalar", T: 8, opt: true }]), Ho = wa.makeMessageType("aiserver.v1.LinterErrors", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "errors", kind: "message", T: qo, repeated: true }, { no: 3, name: "file_contents", kind: "scalar", T: 9 }]), Wo = wa.makeMessageType("aiserver.v1.LinterErrorsWithoutFileContents", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "errors", kind: "message", T: qo, repeated: true }]), Ko = wa.makeMessageType("aiserver.v1.CursorRule", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "description", kind: "scalar", T: 9 }, { no: 3, name: "body", kind: "scalar", T: 9, opt: true }, { no: 4, name: "is_from_glob", kind: "scalar", T: 8, opt: true }, { no: 5, name: "always_apply", kind: "scalar", T: 8, opt: true }, { no: 6, name: "attach_to_background_agents", kind: "scalar", T: 8, opt: true }, { no: 7, name: "full_path", kind: "scalar", T: 9, opt: true }, { no: 8, name: "environments", kind: "scalar", T: 9, repeated: true }, { no: 9, name: "disabled_environments", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "plugin", kind: "scalar", T: 9, opt: true }, { no: 11, name: "marketplace", kind: "scalar", T: 9, opt: true }]), jo = wa.makeMessageType("aiserver.v1.ExplicitContext", () => [{ no: 1, name: "context", kind: "scalar", T: 9 }, { no: 2, name: "repo_context", kind: "scalar", T: 9, opt: true }, { no: 3, name: "rules", kind: "message", T: Ko, repeated: true }, { no: 4, name: "mode_specific_context", kind: "scalar", T: 9, opt: true }, { no: 5, name: "mcp_instructions", kind: "message", T: Xo, repeated: true }]), Xo = wa.makeMessageType("aiserver.v1.MCPInstructions", () => [{ no: 1, name: "server_name", kind: "scalar", T: 9 }, { no: 2, name: "server_identifier", kind: "scalar", T: 9 }, { no: 3, name: "instructions", kind: "scalar", T: 9 }]), Zo = wa.makeMessageType("aiserver.v1.DocumentSymbol", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "detail", kind: "scalar", T: 9 }, { no: 3, name: "kind", kind: "enum", T: wa.getEnumType(zo) }, { no: 5, name: "container_name", kind: "scalar", T: 9 }, { no: 6, name: "range", kind: "message", T: $o }, { no: 7, name: "selection_range", kind: "message", T: $o }, { no: 8, name: "children", kind: "message", T: Zo, repeated: true }]), zo = wa.makeEnum("aiserver.v1.DocumentSymbol.SymbolKind", [{ no: 0, name: "SYMBOL_KIND_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SYMBOL_KIND_FILE", localName: "FILE" }, { no: 2, name: "SYMBOL_KIND_MODULE", localName: "MODULE" }, { no: 3, name: "SYMBOL_KIND_NAMESPACE", localName: "NAMESPACE" }, { no: 4, name: "SYMBOL_KIND_PACKAGE", localName: "PACKAGE" }, { no: 5, name: "SYMBOL_KIND_CLASS", localName: "CLASS" }, { no: 6, name: "SYMBOL_KIND_METHOD", localName: "METHOD" }, { no: 7, name: "SYMBOL_KIND_PROPERTY", localName: "PROPERTY" }, { no: 8, name: "SYMBOL_KIND_FIELD", localName: "FIELD" }, { no: 9, name: "SYMBOL_KIND_CONSTRUCTOR", localName: "CONSTRUCTOR" }, { no: 10, name: "SYMBOL_KIND_ENUM", localName: "ENUM" }, { no: 11, name: "SYMBOL_KIND_INTERFACE", localName: "INTERFACE" }, { no: 12, name: "SYMBOL_KIND_FUNCTION", localName: "FUNCTION" }, { no: 13, name: "SYMBOL_KIND_VARIABLE", localName: "VARIABLE" }, { no: 14, name: "SYMBOL_KIND_CONSTANT", localName: "CONSTANT" }, { no: 15, name: "SYMBOL_KIND_STRING", localName: "STRING" }, { no: 16, name: "SYMBOL_KIND_NUMBER", localName: "NUMBER" }, { no: 17, name: "SYMBOL_KIND_BOOLEAN", localName: "BOOLEAN" }, { no: 18, name: "SYMBOL_KIND_ARRAY", localName: "ARRAY" }, { no: 19, name: "SYMBOL_KIND_OBJECT", localName: "OBJECT" }, { no: 20, name: "SYMBOL_KIND_KEY", localName: "KEY" }, { no: 21, name: "SYMBOL_KIND_NULL", localName: "NULL" }, { no: 22, name: "SYMBOL_KIND_ENUM_MEMBER", localName: "ENUM_MEMBER" }, { no: 23, name: "SYMBOL_KIND_STRUCT", localName: "STRUCT" }, { no: 24, name: "SYMBOL_KIND_EVENT", localName: "EVENT" }, { no: 25, name: "SYMBOL_KIND_OPERATOR", localName: "OPERATOR" }, { no: 26, name: "SYMBOL_KIND_TYPE_PARAMETER", localName: "TYPE_PARAMETER" }]), $o = wa.makeMessageType("aiserver.v1.DocumentSymbol.Range", () => [{ no: 1, name: "start_line_number", kind: "scalar", T: 5 }, { no: 2, name: "start_column", kind: "scalar", T: 5 }, { no: 3, name: "end_line_number", kind: "scalar", T: 5 }, { no: 4, name: "end_column", kind: "scalar", T: 5 }], { localName: "DocumentSymbol_Range" }), er = wa.makeMessageType("aiserver.v1.HoverDetails", () => [{ no: 1, name: "code_details", kind: "scalar", T: 9 }, { no: 2, name: "markdown_blocks", kind: "scalar", T: 9, repeated: true }]), nr = wa.makeMessageType("aiserver.v1.UriComponents", () => [{ no: 1, name: "scheme", kind: "scalar", T: 9 }, { no: 2, name: "authority", kind: "scalar", T: 9, opt: true }, { no: 3, name: "path", kind: "scalar", T: 9, opt: true }, { no: 4, name: "query", kind: "scalar", T: 9, opt: true }, { no: 5, name: "fragment", kind: "scalar", T: 9, opt: true }]), ar = wa.makeMessageType("aiserver.v1.DocumentSymbolWithText", () => [{ no: 1, name: "symbol", kind: "message", T: Zo }, { no: 2, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 3, name: "text_in_symbol_range", kind: "scalar", T: 9 }, { no: 4, name: "uri_components", kind: "message", T: nr }]), tr = wa.makeEnum("aiserver.v1.ErrorDetails.Error", [{ no: 0, name: "ERROR_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "ERROR_BAD_API_KEY", localName: "BAD_API_KEY" }, { no: 42, name: "ERROR_BAD_USER_API_KEY", localName: "BAD_USER_API_KEY" }, { no: 2, name: "ERROR_NOT_LOGGED_IN", localName: "NOT_LOGGED_IN" }, { no: 3, name: "ERROR_INVALID_AUTH_ID", localName: "INVALID_AUTH_ID" }, { no: 4, name: "ERROR_NOT_HIGH_ENOUGH_PERMISSIONS", localName: "NOT_HIGH_ENOUGH_PERMISSIONS" }, { no: 18, name: "ERROR_AGENT_REQUIRES_LOGIN", localName: "AGENT_REQUIRES_LOGIN" }, { no: 5, name: "ERROR_BAD_MODEL_NAME", localName: "BAD_MODEL_NAME" }, { no: 39, name: "ERROR_NOT_FOUND", localName: "NOT_FOUND" }, { no: 40, name: "ERROR_DEPRECATED", localName: "DEPRECATED" }, { no: 6, name: "ERROR_USER_NOT_FOUND", localName: "USER_NOT_FOUND" }, { no: 7, name: "ERROR_FREE_USER_RATE_LIMIT_EXCEEDED", localName: "FREE_USER_RATE_LIMIT_EXCEEDED" }, { no: 8, name: "ERROR_PRO_USER_RATE_LIMIT_EXCEEDED", localName: "PRO_USER_RATE_LIMIT_EXCEEDED" }, { no: 9, name: "ERROR_FREE_USER_USAGE_LIMIT", localName: "FREE_USER_USAGE_LIMIT" }, { no: 10, name: "ERROR_PRO_USER_USAGE_LIMIT", localName: "PRO_USER_USAGE_LIMIT" }, { no: 41, name: "ERROR_RESOURCE_EXHAUSTED", localName: "RESOURCE_EXHAUSTED" }, { no: 11, name: "ERROR_AUTH_TOKEN_NOT_FOUND", localName: "AUTH_TOKEN_NOT_FOUND" }, { no: 12, name: "ERROR_AUTH_TOKEN_EXPIRED", localName: "AUTH_TOKEN_EXPIRED" }, { no: 13, name: "ERROR_OPENAI", localName: "OPENAI" }, { no: 14, name: "ERROR_OPENAI_RATE_LIMIT_EXCEEDED", localName: "OPENAI_RATE_LIMIT_EXCEEDED" }, { no: 20, name: "ERROR_MAX_TOKENS", localName: "MAX_TOKENS" }, { no: 23, name: "ERROR_PRO_USER_ONLY", localName: "PRO_USER_ONLY" }, { no: 21, name: "ERROR_USER_ABORTED_REQUEST", localName: "USER_ABORTED_REQUEST" }, { no: 25, name: "ERROR_TIMEOUT", localName: "TIMEOUT" }, { no: 22, name: "ERROR_GENERIC_RATE_LIMIT_EXCEEDED", localName: "GENERIC_RATE_LIMIT_EXCEEDED" }, { no: 28, name: "ERROR_GPT_4_VISION_PREVIEW_RATE_LIMIT", localName: "GPT_4_VISION_PREVIEW_RATE_LIMIT" }, { no: 29, name: "ERROR_CUSTOM_MESSAGE", localName: "CUSTOM_MESSAGE" }, { no: 30, name: "ERROR_OUTDATED_CLIENT", localName: "OUTDATED_CLIENT" }, { no: 31, name: "ERROR_CLAUDE_IMAGE_TOO_LARGE", localName: "CLAUDE_IMAGE_TOO_LARGE" }, { no: 33, name: "ERROR_FILE_NOT_FOUND", localName: "FILE_NOT_FOUND" }, { no: 34, name: "ERROR_API_KEY_RATE_LIMIT", localName: "API_KEY_RATE_LIMIT" }, { no: 35, name: "ERROR_DEBOUNCED", localName: "DEBOUNCED" }, { no: 36, name: "ERROR_BAD_REQUEST", localName: "BAD_REQUEST" }, { no: 37, name: "ERROR_REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED", localName: "REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED" }, { no: 38, name: "ERROR_UNAUTHORIZED", localName: "UNAUTHORIZED" }, { no: 43, name: "ERROR_CONVERSATION_TOO_LONG", localName: "CONVERSATION_TOO_LONG" }, { no: 44, name: "ERROR_USAGE_PRICING_REQUIRED", localName: "USAGE_PRICING_REQUIRED" }, { no: 45, name: "ERROR_USAGE_PRICING_REQUIRED_CHANGEABLE", localName: "USAGE_PRICING_REQUIRED_CHANGEABLE" }, { no: 46, name: "ERROR_GITHUB_NO_USER_CREDENTIALS", localName: "GITHUB_NO_USER_CREDENTIALS" }, { no: 47, name: "ERROR_GITHUB_USER_NO_ACCESS", localName: "GITHUB_USER_NO_ACCESS" }, { no: 48, name: "ERROR_GITHUB_APP_NO_ACCESS", localName: "GITHUB_APP_NO_ACCESS" }, { no: 49, name: "ERROR_GITHUB_MULTIPLE_OWNERS", localName: "GITHUB_MULTIPLE_OWNERS" }, { no: 50, name: "ERROR_RATE_LIMITED", localName: "RATE_LIMITED" }, { no: 51, name: "ERROR_RATE_LIMITED_CHANGEABLE", localName: "RATE_LIMITED_CHANGEABLE" }, { no: 52, name: "ERROR_CUSTOM", localName: "CUSTOM" }, { no: 53, name: "ERROR_HOOKS_BLOCKED", localName: "HOOKS_BLOCKED" }, { no: 54, name: "ERROR_SUSPICIOUS_USAGE_BLOCKED", localName: "SUSPICIOUS_USAGE_BLOCKED" }, { no: 55, name: "ERROR_EXTENSION_HOST_TIMEOUT", localName: "EXTENSION_HOST_TIMEOUT" }, { no: 56, name: "ERROR_NETWORK_ERROR", localName: "NETWORK_ERROR" }, { no: 57, name: "ERROR_PROVIDER_ERROR", localName: "PROVIDER_ERROR" }, { no: 58, name: "ERROR_MODEL_BLOCKED", localName: "MODEL_BLOCKED" }, { no: 59, name: "ERROR_INTERNAL", localName: "INTERNAL" }, { no: 60, name: "ERROR_MAX_MODE_REQUIRED", localName: "MAX_MODE_REQUIRED" }, { no: 61, name: "ERROR_MODEL_NO_LONGER_SUPPORTED", localName: "MODEL_NO_LONGER_SUPPORTED" }, { no: 62, name: "ERROR_PRICING_WARNING", localName: "PRICING_WARNING" }, { no: 63, name: "ERROR_SLOW_POOL", localName: "SLOW_POOL" }, { no: 64, name: "ERROR_UNSUPPORTED_REGION", localName: "UNSUPPORTED_REGION" }, { no: 65, name: "ERROR_ACCOUNT_CLOSED", localName: "ACCOUNT_CLOSED" }, { no: 66, name: "ERROR_TENANT_RESTRICTION_VIOLATION", localName: "TENANT_RESTRICTION_VIOLATION" }]), sr = wa.makeMessageType("aiserver.v1.ImageProto", () => [{ no: 1, name: "data", kind: "scalar", T: 12 }, { no: 2, name: "dimension", kind: "message", T: or }, { no: 3, name: "uuid", kind: "scalar", T: 9 }, { no: 4, name: "task_specific_description", kind: "scalar", T: 9, opt: true }]), or = wa.makeMessageType("aiserver.v1.ImageProto.Dimension", () => [{ no: 1, name: "width", kind: "scalar", T: 5 }, { no: 2, name: "height", kind: "scalar", T: 5 }], { localName: "ImageProto_Dimension" }), rr = wa.makeMessageType("aiserver.v1.ChatQuote", () => [{ no: 1, name: "markdown", kind: "scalar", T: 9 }, { no: 2, name: "bubble_id", kind: "scalar", T: 9 }, { no: 3, name: "section_index", kind: "scalar", T: 5 }]), ir = wa.makeMessageType("aiserver.v1.ChatExternalLink", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "uuid", kind: "scalar", T: 9 }, { no: 3, name: "pdf_content", kind: "scalar", T: 9, opt: true }, { no: 4, name: "is_pdf", kind: "scalar", T: 8, opt: true }, { no: 5, name: "filename", kind: "scalar", T: 9, opt: true }]), Ar = wa.makeMessageType("aiserver.v1.ComposerExternalLink", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "uuid", kind: "scalar", T: 9 }, { no: 3, name: "pdf_content", kind: "scalar", T: 9, opt: true }, { no: 4, name: "is_pdf", kind: "scalar", T: 8, opt: true }, { no: 5, name: "filename", kind: "scalar", T: 9, opt: true }]), lr = wa.makeMessageType("aiserver.v1.CmdKExternalLink", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "uuid", kind: "scalar", T: 9 }]), cr = wa.makeMessageType("aiserver.v1.CommitNote", () => [{ no: 1, name: "note", kind: "scalar", T: 9 }, { no: 2, name: "commit_hash", kind: "scalar", T: 9 }]), mr = wa.makeMessageType("aiserver.v1.CommitNoteWithEmbeddings", () => [{ no: 1, name: "note", kind: "scalar", T: 9 }, { no: 2, name: "commit_hash", kind: "scalar", T: 9 }, { no: 3, name: "embeddings", kind: "scalar", T: 1, repeated: true }]), dr = wa.makeMessageType("aiserver.v1.CommitDiffString", () => [{ no: 1, name: "diff", kind: "scalar", T: 9 }]), gr = wa.makeMessageType("aiserver.v1.CodeChunk", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "start_line_number", kind: "scalar", T: 5 }, { no: 3, name: "lines", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "summarization_strategy", kind: "enum", T: wa.getEnumType(Er), opt: true }, { no: 5, name: "language_identifier", kind: "scalar", T: 9 }, { no: 6, name: "intent", kind: "enum", T: wa.getEnumType(ur), opt: true }, { no: 7, name: "is_final_version", kind: "scalar", T: 8, opt: true }, { no: 8, name: "is_first_version", kind: "scalar", T: 8, opt: true }]), ur = wa.makeEnum("aiserver.v1.CodeChunk.Intent", [{ no: 0, name: "INTENT_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "INTENT_COMPOSER_FILE", localName: "COMPOSER_FILE" }, { no: 2, name: "INTENT_COMPRESSED_COMPOSER_FILE", localName: "COMPRESSED_COMPOSER_FILE" }]), Er = wa.makeEnum("aiserver.v1.CodeChunk.SummarizationStrategy", [{ no: 0, name: "SUMMARIZATION_STRATEGY_NONE_UNSPECIFIED", localName: "NONE_UNSPECIFIED" }, { no: 1, name: "SUMMARIZATION_STRATEGY_SUMMARIZED", localName: "SUMMARIZED" }, { no: 2, name: "SUMMARIZATION_STRATEGY_EMBEDDED", localName: "EMBEDDED" }]), pr = wa.makeMessageType("aiserver.v1.RCPCallFrame", () => [{ no: 1, name: "function_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "url", kind: "scalar", T: 9, opt: true }, { no: 3, name: "line_number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "column_number", kind: "scalar", T: 5, opt: true }]), Tr = wa.makeMessageType("aiserver.v1.RCPStackTrace", () => [{ no: 1, name: "call_frames", kind: "message", T: pr, repeated: true }, { no: 2, name: "raw_stack_trace", kind: "scalar", T: 9, opt: true }]), kr = wa.makeMessageType("aiserver.v1.RCPLogEntry", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "timestamp", kind: "scalar", T: 1 }, { no: 3, name: "level", kind: "scalar", T: 9 }, { no: 4, name: "client_name", kind: "scalar", T: 9 }, { no: 5, name: "session_id", kind: "scalar", T: 9 }, { no: 6, name: "stack_trace", kind: "message", T: Tr, opt: true }, { no: 7, name: "object_data_json", kind: "scalar", T: 9, opt: true }]), Ir = wa.makeMessageType("aiserver.v1.RCPUIElementPicked", () => [{ no: 1, name: "element", kind: "scalar", T: 9 }, { no: 2, name: "xpath", kind: "scalar", T: 9 }, { no: 3, name: "text_content", kind: "scalar", T: 9 }, { no: 4, name: "extra", kind: "scalar", T: 9 }, { no: 5, name: "component", kind: "scalar", T: 9, opt: true }, { no: 6, name: "component_props_json", kind: "scalar", T: 9, opt: true }]), hr = wa.makeMessageType("agent.v1.NetworkPolicyLoggingConfig", () => [{ no: 1, name: "decision_log_path", kind: "scalar", T: 9, opt: true }, { no: 2, name: "log_format", kind: "scalar", T: 9, opt: true }]), _r = wa.makeMessageType("agent.v1.NetworkPolicy", () => [{ no: 1, name: "version", kind: "scalar", T: 13, opt: true }, { no: 2, name: "default_action", kind: "enum", T: wa.getEnumType(Cr), opt: true }, { no: 3, name: "deny", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "allow", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "logging", kind: "message", T: hr, opt: true }]), Cr = wa.makeEnum("agent.v1.NetworkPolicy.DefaultAction", [{ no: 0, name: "DEFAULT_ACTION_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "DEFAULT_ACTION_ALLOW", localName: "ALLOW" }, { no: 2, name: "DEFAULT_ACTION_DENY", localName: "DENY" }]), fr = wa.makeMessageType("agent.v1.SandboxPolicy", () => [{ no: 1, name: "type", kind: "enum", T: wa.getEnumType(Br) }, { no: 2, name: "network_access", kind: "scalar", T: 8, opt: true }, { no: 3, name: "additional_readwrite_paths", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "additional_readonly_paths", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "debug_output_dir", kind: "scalar", T: 9, opt: true }, { no: 7, name: "disable_tmp_write", kind: "scalar", T: 8, opt: true }, { no: 8, name: "allowlist_escalated", kind: "scalar", T: 8, opt: true }, { no: 9, name: "enable_shared_build_cache", kind: "scalar", T: 8, opt: true }, { no: 10, name: "network_policy", kind: "message", T: _r, opt: true }, { no: 11, name: "network_policy_strict", kind: "scalar", T: 8, opt: true }, { no: 12, name: "capture_denies", kind: "scalar", T: 8, opt: true }, { no: 13, name: "skip_statsig_defaults", kind: "scalar", T: 8, opt: true }, { no: 14, name: "read_boundary", kind: "enum", T: wa.getEnumType(Qr) }, { no: 15, name: "additional_read_paths", kind: "scalar", T: 9, repeated: true }]), Br = wa.makeEnum("agent.v1.SandboxPolicy.Type", [{ no: 0, name: "TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TYPE_INSECURE_NONE", localName: "INSECURE_NONE" }, { no: 2, name: "TYPE_WORKSPACE_READWRITE", localName: "WORKSPACE_READWRITE" }, { no: 3, name: "TYPE_WORKSPACE_READONLY", localName: "WORKSPACE_READONLY" }]), Qr = wa.makeEnum("agent.v1.SandboxPolicy.ReadBoundaryMode", [{ no: 0, name: "READ_BOUNDARY_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "READ_BOUNDARY_MODE_SYSTEM", localName: "SYSTEM" }, { no: 2, name: "READ_BOUNDARY_MODE_WORKSPACE", localName: "WORKSPACE" }]), yr = wa.makeMessageType("agent.v1.Range", () => [{ no: 1, name: "start", kind: "message", T: Rr }, { no: 2, name: "end", kind: "message", T: Rr }]), Rr = wa.makeMessageType("agent.v1.Position", () => [{ no: 1, name: "line", kind: "scalar", T: 13 }, { no: 2, name: "column", kind: "scalar", T: 13 }]), Nr = wa.makeMessageType("agent.v1.OutputLocation", () => [{ no: 1, name: "file_path", kind: "scalar", T: 9 }, { no: 2, name: "size_bytes", kind: "scalar", T: 3 }, { no: 3, name: "line_count", kind: "scalar", T: 3 }]), vr = wa.makeMessageType("agent.v1.SmartModeApproval", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }]), Sr = wa.makeMessageType("agent.v1.HookAdditionalContext", () => [{ no: 1, name: "hook_event_name", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }]), Dr = wa.makeEnum("agent.v1.TimeoutBehavior", [{ no: 0, name: "TIMEOUT_BEHAVIOR_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TIMEOUT_BEHAVIOR_CANCEL", localName: "CANCEL" }, { no: 2, name: "TIMEOUT_BEHAVIOR_BACKGROUND", localName: "BACKGROUND" }]), wr = wa.makeEnum("agent.v1.ShellBackgroundReason", [{ no: 0, name: "SHELL_BACKGROUND_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SHELL_BACKGROUND_REASON_TIMEOUT", localName: "TIMEOUT" }, { no: 2, name: "SHELL_BACKGROUND_REASON_USER_REQUEST", localName: "USER_REQUEST" }]), br = wa.makeEnum("agent.v1.ForceBackgroundShellStatus", [{ no: 0, name: "FORCE_BACKGROUND_SHELL_STATUS_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "FORCE_BACKGROUND_SHELL_STATUS_ACCEPTED", localName: "ACCEPTED" }, { no: 2, name: "FORCE_BACKGROUND_SHELL_STATUS_NOT_FOUND", localName: "NOT_FOUND" }]), Mr = wa.makeEnum("agent.v1.ShellAbortReason", [{ no: 0, name: "SHELL_ABORT_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SHELL_ABORT_REASON_USER_ABORT", localName: "USER_ABORT" }, { no: 2, name: "SHELL_ABORT_REASON_TIMEOUT", localName: "TIMEOUT" }]), Fr = wa.makeMessageType("agent.v1.ShellCommandParsingResult", () => [{ no: 1, name: "parsing_failed", kind: "scalar", T: 8 }, { no: 2, name: "executable_commands", kind: "message", T: Ur, repeated: true }, { no: 3, name: "has_redirects", kind: "scalar", T: 8 }, { no: 4, name: "has_command_substitution", kind: "scalar", T: 8 }, { no: 5, name: "all_redirects_are_dev_null", kind: "scalar", T: 8, opt: true }, { no: 6, name: "redirects", kind: "message", T: Lr, repeated: true }]), Or = wa.makeMessageType("agent.v1.ShellCommandParsingResult.ExecutableCommandArg", () => [{ no: 1, name: "type", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 9 }], { localName: "ShellCommandParsingResult_ExecutableCommandArg" }), Ur = wa.makeMessageType("agent.v1.ShellCommandParsingResult.ExecutableCommand", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "args", kind: "message", T: Or, repeated: true }, { no: 3, name: "full_text", kind: "scalar", T: 9 }], { localName: "ShellCommandParsingResult_ExecutableCommand" }), Lr = wa.makeMessageType("agent.v1.ShellCommandParsingResult.Redirect", () => [{ no: 1, name: "operator", kind: "scalar", T: 9 }, { no: 2, name: "destination_fds", kind: "scalar", T: 13, repeated: true }, { no: 3, name: "target_node_type", kind: "scalar", T: 9 }, { no: 4, name: "target_text", kind: "scalar", T: 9, opt: true }], { localName: "ShellCommandParsingResult_Redirect" }), Pr = wa.makeMessageType("agent.v1.CommandClassifierResult", () => [{ no: 1, name: "commands", kind: "message", T: Gr, repeated: true }, { no: 2, name: "suggested_sandbox_mode", kind: "enum", T: wa.getEnumType(xr) }, { no: 3, name: "classification_failed", kind: "scalar", T: 8 }]), xr = wa.makeEnum("agent.v1.CommandClassifierResult.SuggestedSandboxMode", [{ no: 0, name: "SUGGESTED_SANDBOX_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SUGGESTED_SANDBOX_MODE_SANDBOX", localName: "SANDBOX" }, { no: 2, name: "SUGGESTED_SANDBOX_MODE_NO_SANDBOX", localName: "NO_SANDBOX" }, { no: 3, name: "SUGGESTED_SANDBOX_MODE_UNDETERMINED", localName: "UNDETERMINED" }]), Gr = wa.makeMessageType("agent.v1.CommandClassifierResult.ClassifiedCommand", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "arguments", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "suggested_allowlist_entry", kind: "scalar", T: 9, opt: true }, { no: 4, name: "subcommand_tokens", kind: "scalar", T: 9, repeated: true }], { localName: "CommandClassifierResult_ClassifiedCommand" }), Yr = wa.makeMessageType("agent.v1.ShellOutputNotificationConfig", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }, { no: 3, name: "debounce", kind: "scalar", T: 1, opt: true }, { no: 4, name: "notification_limit", kind: "scalar", T: 5, opt: true }]), Jr = wa.makeMessageType("agent.v1.ForceBackgroundShellArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }]), Vr = wa.makeMessageType("agent.v1.ForceBackgroundShellResult", () => [{ no: 1, name: "status", kind: "enum", T: wa.getEnumType(br) }, { no: 2, name: "shell_result", kind: "message", T: Kr, opt: true }]), qr = wa.makeMessageType("agent.v1.ShellHookApprovalRequirement", () => [{ no: 1, name: "kind", kind: "enum", T: wa.getEnumType(Hr) }, { no: 2, name: "reason", kind: "scalar", T: 9, opt: true }]), Hr = wa.makeEnum("agent.v1.ShellHookApprovalRequirement.Kind", [{ no: 0, name: "KIND_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "KIND_FORCE_PROMPT", localName: "FORCE_PROMPT" }]), Wr = wa.makeMessageType("agent.v1.ShellArgs", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "timeout", kind: "scalar", T: 5 }, { no: 4, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 5, name: "simple_commands", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "has_input_redirect", kind: "scalar", T: 8 }, { no: 7, name: "has_output_redirect", kind: "scalar", T: 8 }, { no: 8, name: "parsing_result", kind: "message", T: Fr }, { no: 9, name: "requested_sandbox_policy", kind: "message", T: fr, opt: true }, { no: 10, name: "file_output_threshold_bytes", kind: "scalar", T: 4, opt: true }, { no: 11, name: "is_background", kind: "scalar", T: 8 }, { no: 12, name: "skip_approval", kind: "scalar", T: 8 }, { no: 13, name: "timeout_behavior", kind: "enum", T: wa.getEnumType(Dr) }, { no: 14, name: "hard_timeout", kind: "scalar", T: 5, opt: true }, { no: 15, name: "description", kind: "scalar", T: 9, opt: true }, { no: 16, name: "classifier_result", kind: "message", T: Pr, opt: true }, { no: 17, name: "close_stdin", kind: "scalar", T: 8 }, { no: 18, name: "output_notification", kind: "message", T: Yr, opt: true }, { no: 19, name: "smart_mode_approval", kind: "message", T: vr, opt: true }, { no: 20, name: "hook_approval_requirement", kind: "message", T: qr, opt: true }, { no: 21, name: "conversation_id", kind: "scalar", T: 9, opt: true }, { no: 22, name: "admin_command_denylist", kind: "scalar", T: 9, repeated: true }, { no: 23, name: "request_id", kind: "scalar", T: 9, opt: true }, { no: 24, name: "secret_scope_id", kind: "scalar", T: 9, opt: true }]), Kr = wa.makeMessageType("agent.v1.ShellResult", () => [{ no: 1, name: "success", kind: "message", T: oi, oneof: "result" }, { no: 2, name: "failure", kind: "message", T: ri, oneof: "result" }, { no: 3, name: "timeout", kind: "message", T: ii, oneof: "result" }, { no: 4, name: "rejected", kind: "message", T: Ai, oneof: "result" }, { no: 5, name: "spawn_error", kind: "message", T: ci, oneof: "result" }, { no: 7, name: "permission_denied", kind: "message", T: li, oneof: "result" }, { no: 101, name: "sandbox_policy", kind: "message", T: fr, opt: true }, { no: 102, name: "is_background", kind: "scalar", T: 8, opt: true }, { no: 103, name: "terminals_folder", kind: "scalar", T: 9, opt: true }, { no: 104, name: "pid", kind: "scalar", T: 13, opt: true }]), jr = wa.makeMessageType("agent.v1.ShellOomKill", () => [{ no: 1, name: "kind", kind: "enum", T: wa.getEnumType(Xr) }, { no: 2, name: "memory_limit_bytes", kind: "scalar", T: 4 }]), Xr = wa.makeEnum("agent.v1.ShellOomKill.Kind", [{ no: 0, name: "KIND_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "KIND_COMMAND_KILLED", localName: "COMMAND_KILLED" }, { no: 2, name: "KIND_COMMAND_FAILED", localName: "COMMAND_FAILED" }, { no: 3, name: "KIND_UNCONFIRMED", localName: "UNCONFIRMED" }]), Zr = wa.makeMessageType("agent.v1.ShellStreamStdout", () => [{ no: 1, name: "data", kind: "scalar", T: 9 }]), zr = wa.makeMessageType("agent.v1.ShellStreamStderr", () => [{ no: 1, name: "data", kind: "scalar", T: 9 }]), $r = wa.makeMessageType("agent.v1.ShellStreamExit", () => [{ no: 1, name: "code", kind: "scalar", T: 13 }, { no: 2, name: "cwd", kind: "scalar", T: 9 }, { no: 3, name: "output_location", kind: "message", T: Nr, opt: true }, { no: 4, name: "aborted", kind: "scalar", T: 8 }, { no: 5, name: "abort_reason", kind: "enum", T: wa.getEnumType(Mr), opt: true }, { no: 6, name: "local_execution_time_ms", kind: "scalar", T: 5, opt: true }, { no: 7, name: "oom_kill", kind: "message", T: jr, opt: true }]), ei = wa.makeMessageType("agent.v1.ShellStreamStart", () => [{ no: 1, name: "sandbox_policy", kind: "message", T: fr, opt: true }]), ni = wa.makeMessageType("agent.v1.ShellStreamBackgrounded", () => [{ no: 1, name: "shell_id", kind: "scalar", T: 13 }, { no: 2, name: "command", kind: "scalar", T: 9 }, { no: 3, name: "working_directory", kind: "scalar", T: 9 }, { no: 4, name: "pid", kind: "scalar", T: 13, opt: true }, { no: 5, name: "ms_to_wait", kind: "scalar", T: 5, opt: true }, { no: 6, name: "reason", kind: "enum", T: wa.getEnumType(wr), opt: true }]), ai = wa.makeMessageType("agent.v1.ShellStreamHookContext", () => [{ no: 1, name: "hook_additional_contexts", kind: "message", T: Sr, repeated: true }]), ti = wa.makeMessageType("agent.v1.ShellSandboxUnsupported", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "sandbox_policy_type", kind: "scalar", T: 9 }, { no: 4, name: "reason", kind: "scalar", T: 9 }, { no: 5, name: "is_readonly", kind: "scalar", T: 8 }]), si = wa.makeMessageType("agent.v1.ShellStream", () => [{ no: 1, name: "stdout", kind: "message", T: Zr, oneof: "event" }, { no: 2, name: "stderr", kind: "message", T: zr, oneof: "event" }, { no: 3, name: "exit", kind: "message", T: $r, oneof: "event" }, { no: 4, name: "start", kind: "message", T: ei, oneof: "event" }, { no: 5, name: "rejected", kind: "message", T: Ai, oneof: "event" }, { no: 6, name: "permission_denied", kind: "message", T: li, oneof: "event" }, { no: 7, name: "backgrounded", kind: "message", T: ni, oneof: "event" }, { no: 8, name: "hook_context", kind: "message", T: ai, oneof: "event" }, { no: 9, name: "sandbox_unsupported", kind: "message", T: ti, oneof: "event" }]), oi = wa.makeMessageType("agent.v1.ShellSuccess", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "exit_code", kind: "scalar", T: 5 }, { no: 4, name: "signal", kind: "scalar", T: 9 }, { no: 5, name: "stdout", kind: "scalar", T: 9 }, { no: 6, name: "stderr", kind: "scalar", T: 9 }, { no: 7, name: "execution_time", kind: "scalar", T: 5 }, { no: 8, name: "output_location", kind: "message", T: Nr, opt: true }, { no: 9, name: "shell_id", kind: "scalar", T: 13, opt: true }, { no: 10, name: "interleaved_output", kind: "scalar", T: 9, opt: true }, { no: 11, name: "pid", kind: "scalar", T: 13, opt: true }, { no: 12, name: "ms_to_wait", kind: "scalar", T: 5, opt: true }, { no: 13, name: "local_execution_time_ms", kind: "scalar", T: 5, opt: true }, { no: 14, name: "background_reason", kind: "enum", T: wa.getEnumType(wr), opt: true }, { no: 15, name: "output_head", kind: "scalar", T: 9, opt: true }, { no: 16, name: "output_tail", kind: "scalar", T: 9, opt: true }, { no: 17, name: "elided_chars", kind: "scalar", T: 13, opt: true }]), ri = wa.makeMessageType("agent.v1.ShellFailure", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "exit_code", kind: "scalar", T: 5 }, { no: 4, name: "signal", kind: "scalar", T: 9 }, { no: 5, name: "stdout", kind: "scalar", T: 9 }, { no: 6, name: "stderr", kind: "scalar", T: 9 }, { no: 7, name: "execution_time", kind: "scalar", T: 5 }, { no: 8, name: "output_location", kind: "message", T: Nr, opt: true }, { no: 9, name: "interleaved_output", kind: "scalar", T: 9, opt: true }, { no: 10, name: "abort_reason", kind: "enum", T: wa.getEnumType(Mr), opt: true }, { no: 11, name: "aborted", kind: "scalar", T: 8 }, { no: 12, name: "local_execution_time_ms", kind: "scalar", T: 5, opt: true }, { no: 13, name: "output_head", kind: "scalar", T: 9, opt: true }, { no: 14, name: "output_tail", kind: "scalar", T: 9, opt: true }, { no: 15, name: "elided_chars", kind: "scalar", T: 13, opt: true }, { no: 16, name: "oom_kill", kind: "message", T: jr, opt: true }]), ii = wa.makeMessageType("agent.v1.ShellTimeout", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "timeout_ms", kind: "scalar", T: 5 }]), Ai = wa.makeMessageType("agent.v1.ShellRejected", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "reason", kind: "scalar", T: 9 }, { no: 4, name: "is_readonly", kind: "scalar", T: 8 }]), li = wa.makeMessageType("agent.v1.ShellPermissionDenied", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "error", kind: "scalar", T: 9 }, { no: 4, name: "is_readonly", kind: "scalar", T: 8 }]), ci = wa.makeMessageType("agent.v1.ShellSpawnError", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "error", kind: "scalar", T: 9 }]), mi = wa.makeMessageType("agent.v1.BackgroundShellSpawnArgs", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 4, name: "parsing_result", kind: "message", T: Fr }, { no: 5, name: "sandbox_policy", kind: "message", T: fr, opt: true }, { no: 6, name: "enable_write_shell_stdin_tool", kind: "scalar", T: 8 }, { no: 7, name: "description", kind: "scalar", T: 9, opt: true }, { no: 8, name: "classifier_result", kind: "message", T: Pr, opt: true }, { no: 9, name: "output_notification", kind: "message", T: Yr, opt: true }, { no: 10, name: "smart_mode_approval", kind: "message", T: vr, opt: true }, { no: 11, name: "hook_approval_requirement", kind: "message", T: qr, opt: true }, { no: 12, name: "skip_approval", kind: "scalar", T: 8 }, { no: 13, name: "conversation_id", kind: "scalar", T: 9, opt: true }, { no: 14, name: "admin_command_denylist", kind: "scalar", T: 9, repeated: true }, { no: 15, name: "request_id", kind: "scalar", T: 9, opt: true }, { no: 16, name: "suppress_stdin_logging", kind: "scalar", T: 8 }, { no: 17, name: "secret_scope_id", kind: "scalar", T: 9, opt: true }]), di = wa.makeMessageType("agent.v1.BackgroundShellSpawnResult", () => [{ no: 1, name: "success", kind: "message", T: gi, oneof: "result" }, { no: 2, name: "error", kind: "message", T: ui, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: Ai, oneof: "result" }, { no: 4, name: "permission_denied", kind: "message", T: li, oneof: "result" }, { no: 5, name: "sandbox_unsupported", kind: "message", T: ti, oneof: "result" }]), gi = wa.makeMessageType("agent.v1.BackgroundShellSpawnSuccess", () => [{ no: 1, name: "shell_id", kind: "scalar", T: 13 }, { no: 2, name: "command", kind: "scalar", T: 9 }, { no: 3, name: "working_directory", kind: "scalar", T: 9 }, { no: 4, name: "pid", kind: "scalar", T: 13, opt: true }]), ui = wa.makeMessageType("agent.v1.BackgroundShellSpawnError", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "error", kind: "scalar", T: 9 }]), Ei = wa.makeMessageType("agent.v1.WriteShellStdinArgs", () => [{ no: 1, name: "shell_id", kind: "scalar", T: 13 }, { no: 2, name: "chars", kind: "scalar", T: 9 }]), pi = wa.makeMessageType("agent.v1.WriteShellStdinResult", () => [{ no: 1, name: "success", kind: "message", T: Ti, oneof: "result" }, { no: 2, name: "error", kind: "message", T: ki, oneof: "result" }]), Ti = wa.makeMessageType("agent.v1.WriteShellStdinSuccess", () => [{ no: 1, name: "shell_id", kind: "scalar", T: 13 }, { no: 2, name: "terminal_file_length_before_input_written", kind: "scalar", T: 13 }]), ki = wa.makeMessageType("agent.v1.WriteShellStdinError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), Ii = wa.makeEnum("agent.v1.RecordingMode", [{ no: 0, name: "RECORDING_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "RECORDING_MODE_START_RECORDING", localName: "START_RECORDING" }, { no: 2, name: "RECORDING_MODE_SAVE_RECORDING", localName: "SAVE_RECORDING" }, { no: 3, name: "RECORDING_MODE_DISCARD_RECORDING", localName: "DISCARD_RECORDING" }]), hi = wa.makeEnum("agent.v1.RequestedFilePathRejectedReason", [{ no: 0, name: "REQUESTED_FILE_PATH_REJECTED_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "REQUESTED_FILE_PATH_REJECTED_REASON_SLASHES_NOT_ALLOWED", localName: "SLASHES_NOT_ALLOWED" }]), _i = wa.makeMessageType("agent.v1.RecordScreenArgs", () => [{ no: 1, name: "mode", kind: "enum", T: wa.getEnumType(Ii) }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 3, name: "save_as_filename", kind: "scalar", T: 9, opt: true }]), Ci = wa.makeMessageType("agent.v1.RecordScreenResult", () => [{ no: 1, name: "start_success", kind: "message", T: fi, oneof: "result" }, { no: 2, name: "save_success", kind: "message", T: Bi, oneof: "result" }, { no: 3, name: "discard_success", kind: "message", T: Qi, oneof: "result" }, { no: 4, name: "failure", kind: "message", T: yi, oneof: "result" }]), fi = wa.makeMessageType("agent.v1.RecordScreenStartSuccess", () => [{ no: 1, name: "was_prior_recording_cancelled", kind: "scalar", T: 8 }, { no: 2, name: "was_save_as_filename_ignored", kind: "scalar", T: 8 }]), Bi = wa.makeMessageType("agent.v1.RecordScreenSaveSuccess", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "recording_duration_ms", kind: "scalar", T: 3 }, { no: 3, name: "requested_file_path_rejected_reason", kind: "enum", T: wa.getEnumType(hi), opt: true }]), Qi = wa.makeMessageType("agent.v1.RecordScreenDiscardSuccess", []), yi = wa.makeMessageType("agent.v1.RecordScreenFailure", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), Ri = wa.makeMessageType("agent.v1.ApplyAgentDiffResult", () => [{ no: 1, name: "success", kind: "message", T: Ni, oneof: "result" }, { no: 2, name: "error", kind: "message", T: Di, oneof: "result" }]), Ni = wa.makeMessageType("agent.v1.ApplyAgentDiffSuccess", () => [{ no: 1, name: "applied_changes", kind: "message", T: vi, repeated: true }]), vi = wa.makeMessageType("agent.v1.AppliedAgentChange", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "change_type", kind: "enum", T: wa.getEnumType(Si) }, { no: 3, name: "before_content", kind: "scalar", T: 9, opt: true }, { no: 4, name: "after_content", kind: "scalar", T: 9, opt: true }, { no: 5, name: "error", kind: "scalar", T: 9, opt: true }, { no: 6, name: "message_for_model", kind: "scalar", T: 9, opt: true }]), Si = wa.makeEnum("agent.v1.AppliedAgentChange.ChangeType", [{ no: 0, name: "CHANGE_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CHANGE_TYPE_CREATED", localName: "CREATED" }, { no: 2, name: "CHANGE_TYPE_MODIFIED", localName: "MODIFIED" }, { no: 3, name: "CHANGE_TYPE_DELETED", localName: "DELETED" }]), Di = wa.makeMessageType("agent.v1.ApplyAgentDiffError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "applied_changes", kind: "message", T: vi, repeated: true }]), wi = wa.makeMessageType("agent.v1.GenerateImageResult", () => [{ no: 1, name: "success", kind: "message", T: bi, oneof: "result" }, { no: 2, name: "error", kind: "message", T: Mi, oneof: "result" }]), bi = wa.makeMessageType("agent.v1.GenerateImageSuccess", () => [{ no: 1, name: "file_path", kind: "scalar", T: 9 }, { no: 2, name: "image_data", kind: "scalar", T: 9 }]), Mi = wa.makeMessageType("agent.v1.GenerateImageError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), Fi = wa.makeMessageType("agent.v1.GenerateImageRequestResponse", () => [{ no: 1, name: "approved", kind: "message", T: Oi, oneof: "result" }, { no: 2, name: "rejected", kind: "message", T: Ui, oneof: "result" }]), Oi = wa.makeMessageType("agent.v1.GenerateImageRequestResponse.Approved", () => [{ no: 1, name: "description", kind: "scalar", T: 9 }], { localName: "GenerateImageRequestResponse_Approved" }), Ui = wa.makeMessageType("agent.v1.GenerateImageRequestResponse.Rejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }], { localName: "GenerateImageRequestResponse_Rejected" }), Li = wa.makeMessageType("agent.v1.AiAttributionResult", () => [{ no: 1, name: "success", kind: "message", T: Pi, oneof: "result" }, { no: 2, name: "error", kind: "message", T: xi, oneof: "result" }]), Pi = wa.makeMessageType("agent.v1.AiAttributionSuccess", () => [{ no: 1, name: "attribution_text", kind: "scalar", T: 9 }, { no: 2, name: "output_location", kind: "message", T: Nr, opt: true }]), xi = wa.makeMessageType("agent.v1.AiAttributionError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), Gi = wa.makeMessageType("aiserver.v1.CreateExperimentalIndexRequest", () => [{ no: 1, name: "files", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "target_dir", kind: "scalar", T: 9 }, { no: 3, name: "repo", kind: "scalar", T: 9 }]), Yi = wa.makeMessageType("aiserver.v1.CreateExperimentalIndexResponse", () => [{ no: 1, name: "index_id", kind: "scalar", T: 9 }]), Ji = wa.makeMessageType("aiserver.v1.ListExperimentalIndexFilesRequest", () => [{ no: 1, name: "index_id", kind: "scalar", T: 9 }]), Vi = wa.makeMessageType("aiserver.v1.ListExperimentalIndexFilesResponse", () => [{ no: 1, name: "index_id", kind: "scalar", T: 9 }, { no: 2, name: "files", kind: "message", T: kA, repeated: true }]), qi = wa.makeMessageType("aiserver.v1.ListenExperimentalIndexRequest", () => [{ no: 1, name: "index_id", kind: "scalar", T: 9 }]), Hi = wa.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse", () => [{ no: 1, name: "index_id", kind: "scalar", T: 9 }, { no: 2, name: "ready", kind: "message", T: Wi, oneof: "item" }, { no: 3, name: "register", kind: "message", T: Ki, oneof: "item" }, { no: 4, name: "choose", kind: "message", T: ji, oneof: "item" }, { no: 5, name: "summarize", kind: "message", T: Xi, oneof: "item" }, { no: 6, name: "error", kind: "message", T: Zi, oneof: "item" }]), Wi = wa.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse.ReadyItem", () => [{ no: 1, name: "index_id", kind: "scalar", T: 9 }, { no: 2, name: "request", kind: "message", T: qi }], { localName: "ListenExperimentalIndexResponse_ReadyItem" }), Ki = wa.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse.RegisterItem", () => [{ no: 1, name: "response", kind: "message", T: $i }, { no: 2, name: "request", kind: "message", T: zi }, { no: 3, name: "req_uuid", kind: "scalar", T: 9 }], { localName: "ListenExperimentalIndexResponse_RegisterItem" }), ji = wa.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse.ChooseItem", () => [{ no: 1, name: "response", kind: "message", T: iA }, { no: 2, name: "request", kind: "message", T: sA }, { no: 3, name: "req_uuid", kind: "scalar", T: 9 }], { localName: "ListenExperimentalIndexResponse_ChooseItem" }), Xi = wa.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse.SummarizeItem", () => [{ no: 1, name: "response", kind: "message", T: gA }, { no: 2, name: "request", kind: "message", T: dA }, { no: 3, name: "req_uuid", kind: "scalar", T: 9 }], { localName: "ListenExperimentalIndexResponse_SummarizeItem" }), Zi = wa.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse.ErrorItem", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "status_code", kind: "scalar", T: 5 }, { no: 3, name: "register", kind: "message", T: zi, oneof: "request" }, { no: 4, name: "choose", kind: "message", T: sA, oneof: "request" }, { no: 5, name: "summarize", kind: "message", T: dA, oneof: "request" }, { no: 6, name: "req_uuid", kind: "scalar", T: 9 }], { localName: "ListenExperimentalIndexResponse_ErrorItem" }), zi = wa.makeMessageType("aiserver.v1.RegisterFileToIndexRequest", () => [{ no: 1, name: "index_id", kind: "scalar", T: 9 }, { no: 2, name: "workspace_relative_path", kind: "scalar", T: 9 }, { no: 3, name: "root_context_node", kind: "message", T: hA }, { no: 4, name: "content", kind: "scalar", T: 9, repeated: true }]), $i = wa.makeMessageType("aiserver.v1.RegisterFileToIndexResponse", () => [{ no: 1, name: "file_id", kind: "scalar", T: 9 }, { no: 2, name: "root_context_node_id", kind: "scalar", T: 9 }, { no: 3, name: "dependency_resolution_attempts", kind: "message", T: _A, repeated: true }, { no: 4, name: "file_data", kind: "message", T: kA }]), eA = wa.makeMessageType("aiserver.v1.SetupIndexDependenciesRequest", () => [{ no: 1, name: "index_id", kind: "scalar", T: 9 }, { no: 3, name: "file_id", kind: "scalar", T: 9 }, { no: 2, name: "dependency_resolution_results", kind: "message", T: CA, repeated: true }]), nA = wa.makeMessageType("aiserver.v1.SetupIndexDependenciesResponse", []), aA = wa.makeMessageType("aiserver.v1.ComputeIndexTopoSortRequest", () => [{ no: 1, name: "index_id", kind: "scalar", T: 9 }]), tA = wa.makeMessageType("aiserver.v1.ComputeIndexTopoSortResponse", []), sA = wa.makeMessageType("aiserver.v1.ChooseCodeReferencesRequest", () => [{ no: 1, name: "index_id", kind: "scalar", T: 9 }, { no: 2, name: "file", kind: "message", T: oA, oneof: "request" }, { no: 3, name: "node", kind: "message", T: rA, oneof: "request" }, { no: 4, name: "recompute", kind: "scalar", T: 8 }]), oA = wa.makeMessageType("aiserver.v1.ChooseCodeReferencesRequest.FileRequest", () => [{ no: 1, name: "file_id", kind: "scalar", T: 9 }], { localName: "ChooseCodeReferencesRequest_FileRequest" }), rA = wa.makeMessageType("aiserver.v1.ChooseCodeReferencesRequest.NodeRequest", () => [{ no: 1, name: "node_id", kind: "scalar", T: 9 }], { localName: "ChooseCodeReferencesRequest_NodeRequest" }), iA = wa.makeMessageType("aiserver.v1.ChooseCodeReferencesResponse", () => [{ no: 1, name: "file", kind: "message", T: lA, oneof: "response" }, { no: 2, name: "node", kind: "message", T: AA, oneof: "response" }]), AA = wa.makeMessageType("aiserver.v1.ChooseCodeReferencesResponse.NodeResponse", () => [{ no: 1, name: "node_id", kind: "scalar", T: 9 }, { no: 2, name: "actions", kind: "message", T: vA, repeated: true }, { no: 3, name: "skipped", kind: "scalar", T: 8 }, { no: 4, name: "dependencies", kind: "scalar", T: 9, repeated: true }], { localName: "ChooseCodeReferencesResponse_NodeResponse" }), lA = wa.makeMessageType("aiserver.v1.ChooseCodeReferencesResponse.FileResponse", () => [{ no: 1, name: "file_id", kind: "scalar", T: 9 }, { no: 2, name: "node_responses", kind: "message", T: AA, repeated: true }], { localName: "ChooseCodeReferencesResponse_FileResponse" }), cA = wa.makeMessageType("aiserver.v1.RegisterCodeReferencesRequest", () => [{ no: 1, name: "node_id", kind: "scalar", T: 9 }, { no: 2, name: "references", kind: "message", T: QA, repeated: true }]), mA = wa.makeMessageType("aiserver.v1.RegisterCodeReferencesResponse", () => [{ no: 1, name: "dependencies", kind: "scalar", T: 9, repeated: true }]), dA = wa.makeMessageType("aiserver.v1.SummarizeWithReferencesRequest", () => [{ no: 1, name: "index_id", kind: "scalar", T: 9 }, { no: 2, name: "node_id", kind: "scalar", T: 9 }, { no: 3, name: "recompute", kind: "scalar", T: 8 }]), gA = wa.makeMessageType("aiserver.v1.SummarizeWithReferencesResponse", () => [{ no: 1, name: "success", kind: "message", T: uA, oneof: "response" }, { no: 2, name: "dependency", kind: "message", T: EA, oneof: "response" }, { no: 3, name: "node_id", kind: "scalar", T: 9 }]), uA = wa.makeMessageType("aiserver.v1.SummarizeWithReferencesResponse.Success", () => [{ no: 1, name: "summary", kind: "scalar", T: 9 }], { localName: "SummarizeWithReferencesResponse_Success" }), EA = wa.makeMessageType("aiserver.v1.SummarizeWithReferencesResponse.Dependency", () => [{ no: 2, name: "nodes", kind: "scalar", T: 9, repeated: true }], { localName: "SummarizeWithReferencesResponse_Dependency" }), pA = wa.makeMessageType("aiserver.v1.RequestReceivedResponse", () => [{ no: 1, name: "req_uuid", kind: "scalar", T: 9 }]), TA = wa.makeMessageType("aiserver.v1.ReflectionData", () => [{ no: 1, name: "index_id", kind: "scalar", T: 9 }, { no: 2, name: "id", kind: "scalar", T: 9 }, { no: 3, name: "summary", kind: "scalar", T: 9 }]), kA = wa.makeMessageType("aiserver.v1.IndexFileData", () => [{ no: 1, name: "index_id", kind: "scalar", T: 9 }, { no: 2, name: "workspace_relative_path", kind: "scalar", T: 9 }, { no: 3, name: "stage", kind: "scalar", T: 9 }, { no: 4, name: "order", kind: "scalar", T: 5 }, { no: 5, name: "nodes", kind: "message", T: IA, repeated: true }]), IA = wa.makeMessageType("aiserver.v1.IndexFileData.NodeData", () => [{ no: 1, name: "node_id", kind: "scalar", T: 9 }, { no: 2, name: "stage", kind: "scalar", T: 9 }, { no: 3, name: "content", kind: "scalar", T: 9 }, { no: 4, name: "summary", kind: "scalar", T: 9 }], { localName: "IndexFileData_NodeData" }), hA = wa.makeMessageType("aiserver.v1.SerializedContextNode", () => [{ no: 1, name: "workspace_relative_path", kind: "scalar", T: 9 }, { no: 2, name: "start_line_number", kind: "scalar", T: 5 }, { no: 3, name: "end_line_number", kind: "scalar", T: 5 }, { no: 4, name: "children", kind: "message", T: hA, repeated: true }, { no: 5, name: "node_snippets", kind: "message", T: RA }]), _A = wa.makeMessageType("aiserver.v1.URIResolutionAttempt", () => [{ no: 1, name: "workspace_relative_path", kind: "scalar", T: 9 }, { no: 2, name: "node_id", kind: "scalar", T: 9 }, { no: 3, name: "symbol", kind: "message", T: vA }]), CA = wa.makeMessageType("aiserver.v1.URIResolutionResult", () => [{ no: 1, name: "request", kind: "message", T: _A }, { no: 2, name: "resolved_paths", kind: "scalar", T: 9, repeated: true }]), fA = wa.makeMessageType("aiserver.v1.ExtractPathsRequest", () => [{ no: 1, name: "file_code_snippets", kind: "message", T: RA }]), BA = wa.makeMessageType("aiserver.v1.ExtractPathsResponse", () => [{ no: 1, name: "paths", kind: "message", T: vA, repeated: true }]), QA = wa.makeMessageType("aiserver.v1.SymbolActionResults", () => [{ no: 1, name: "action", kind: "message", T: vA }, { no: 2, name: "references", kind: "message", T: yA, repeated: true }]), yA = wa.makeMessageType("aiserver.v1.SymbolActionResultReference", () => [{ no: 1, name: "range", kind: "message", T: ko }, { no: 2, name: "reference", kind: "message", T: RA }]), RA = wa.makeMessageType("aiserver.v1.FileCodeSnippets", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "total_lines", kind: "scalar", T: 5 }, { no: 3, name: "snippets", kind: "message", T: NA, repeated: true }]), NA = wa.makeMessageType("aiserver.v1.CodeSnippet", () => [{ no: 1, name: "start_line_number", kind: "scalar", T: 5 }, { no: 2, name: "end_line_number", kind: "scalar", T: 5 }, { no: 3, name: "lines", kind: "scalar", T: 9, repeated: true }]), vA = wa.makeMessageType("aiserver.v1.CodeSymbolWithAction", () => [{ no: 1, name: "workspace_relative_path", kind: "scalar", T: 9 }, { no: 2, name: "line_number", kind: "scalar", T: 5 }, { no: 3, name: "symbol_start_column", kind: "scalar", T: 5 }, { no: 4, name: "symbol_end_column", kind: "scalar", T: 5 }, { no: 5, name: "action", kind: "enum", T: wa.getEnumType(SA) }, { no: 6, name: "symbol", kind: "scalar", T: 9 }]), SA = wa.makeEnum("aiserver.v1.CodeSymbolWithAction.CodeSymbolAction", [{ no: 0, name: "CODE_SYMBOL_ACTION_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CODE_SYMBOL_ACTION_GO_TO_DEFINITION", localName: "GO_TO_DEFINITION" }, { no: 2, name: "CODE_SYMBOL_ACTION_GO_TO_IMPLEMENTATION", localName: "GO_TO_IMPLEMENTATION" }, { no: 3, name: "CODE_SYMBOL_ACTION_REFERENCES", localName: "REFERENCES" }]), DA = wa.makeEnum("aiserver.v1.RerankerAlgorithm", [{ no: 0, name: "RERANKER_ALGORITHM_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "RERANKER_ALGORITHM_LULEA", localName: "LULEA" }, { no: 2, name: "RERANKER_ALGORITHM_UMEA", localName: "UMEA" }, { no: 3, name: "RERANKER_ALGORITHM_NONE", localName: "NONE" }, { no: 4, name: "RERANKER_ALGORITHM_LLAMA", localName: "LLAMA" }, { no: 5, name: "RERANKER_ALGORITHM_STARCODER_V1", localName: "STARCODER_V1" }, { no: 6, name: "RERANKER_ALGORITHM_GPT_3_5_LOGPROBS", localName: "GPT_3_5_LOGPROBS" }, { no: 7, name: "RERANKER_ALGORITHM_LULEA_HAIKU", localName: "LULEA_HAIKU" }, { no: 8, name: "RERANKER_ALGORITHM_COHERE", localName: "COHERE" }, { no: 9, name: "RERANKER_ALGORITHM_VOYAGE", localName: "VOYAGE" }, { no: 10, name: "RERANKER_ALGORITHM_VOYAGE_EMBEDS", localName: "VOYAGE_EMBEDS" }, { no: 11, name: "RERANKER_ALGORITHM_IDENTITY", localName: "IDENTITY" }, { no: 12, name: "RERANKER_ALGORITHM_ADA_EMBEDS", localName: "ADA_EMBEDS" }]), wA = wa.makeEnum("aiserver.v1.DatabaseProvider", [{ no: 0, name: "DATABASE_PROVIDER_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "DATABASE_PROVIDER_AURORA", localName: "AURORA" }, { no: 2, name: "DATABASE_PROVIDER_PLANETSCALE", localName: "PLANETSCALE" }]), bA = wa.makeEnum("aiserver.v1.RechunkerChoice", [{ no: 0, name: "RECHUNKER_CHOICE_UNSPECIFIED" }, { no: 1, name: "RECHUNKER_CHOICE_IDENTITY" }, { no: 2, name: "RECHUNKER_CHOICE_600_TOKS" }, { no: 3, name: "RECHUNKER_CHOICE_2400_TOKS" }, { no: 4, name: "RECHUNKER_CHOICE_4000_TOKS" }]), MA = wa.makeMessageType("aiserver.v1.CodeResult", () => [{ no: 1, name: "code_block", kind: "message", T: Ro }, { no: 2, name: "score", kind: "scalar", T: 2 }]), FA = wa.makeMessageType("aiserver.v1.FileResult", () => [{ no: 1, name: "file", kind: "message", T: Do }, { no: 2, name: "score", kind: "scalar", T: 2 }]), OA = wa.makeMessageType("aiserver.v1.RepositoryInfo", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "remote_urls", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "remote_names", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "repo_name", kind: "scalar", T: 9 }, { no: 5, name: "repo_owner", kind: "scalar", T: 9 }, { no: 6, name: "is_tracked", kind: "scalar", T: 8 }, { no: 7, name: "is_local", kind: "scalar", T: 8 }, { no: 8, name: "num_files", kind: "scalar", T: 5, opt: true }, { no: 9, name: "orthogonal_transform_seed", kind: "scalar", T: 1, opt: true }, { no: 10, name: "preferred_embedding_model", kind: "enum", T: wa.getEnumType(oo), opt: true }, { no: 11, name: "workspace_uri", kind: "scalar", T: 9 }, { no: 12, name: "preferred_db_provider", kind: "enum", T: wa.getEnumType(wA), opt: true }]), UA = wa.makeMessageType("aiserver.v1.NodeResult", () => [{ no: 1, name: "node", kind: "message", T: IA }, { no: 2, name: "file", kind: "message", T: Do }, { no: 3, name: "score", kind: "scalar", T: 2 }]), LA = wa.makeMessageType("aiserver.v1.ReflectionResult", () => [{ no: 1, name: "reflection", kind: "message", T: TA }, { no: 2, name: "score", kind: "scalar", T: 2 }]), PA = wa.makeMessageType("aiserver.v1.SearchRepositoryDeepContextResponse", () => [{ no: 1, name: "top_nodes", kind: "message", T: UA, repeated: true }, { no: 2, name: "reflections", kind: "message", T: LA, repeated: true }, { no: 3, name: "index_id", kind: "scalar", T: 9 }]), xA = wa.makeEnum("agent.v1.CustomSubagentPermissionMode", [{ no: 0, name: "CUSTOM_SUBAGENT_PERMISSION_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CUSTOM_SUBAGENT_PERMISSION_MODE_DEFAULT", localName: "DEFAULT" }, { no: 2, name: "CUSTOM_SUBAGENT_PERMISSION_MODE_READONLY", localName: "READONLY" }, { no: 3, name: "CUSTOM_SUBAGENT_PERMISSION_MODE_AGENT_ONLY", localName: "AGENT_ONLY" }]), GA = wa.makeEnum("agent.v1.SubagentExecutionEnvironment", [{ no: 0, name: "SUBAGENT_EXECUTION_ENVIRONMENT_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SUBAGENT_EXECUTION_ENVIRONMENT_LOCAL", localName: "LOCAL" }, { no: 2, name: "SUBAGENT_EXECUTION_ENVIRONMENT_CLOUD", localName: "CLOUD" }]), YA = wa.makeEnum("agent.v1.SubagentBackgroundReason", [{ no: 0, name: "SUBAGENT_BACKGROUND_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SUBAGENT_BACKGROUND_REASON_AGENT_REQUEST", localName: "AGENT_REQUEST" }, { no: 2, name: "SUBAGENT_BACKGROUND_REASON_USER_REQUEST", localName: "USER_REQUEST" }, { no: 3, name: "SUBAGENT_BACKGROUND_REASON_QUEUED_FOLLOW_UP", localName: "QUEUED_FOLLOW_UP" }]), JA = wa.makeEnum("agent.v1.TaskMode", [{ no: 0, name: "TASK_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TASK_MODE_AGENT", localName: "AGENT" }, { no: 2, name: "TASK_MODE_PLAN", localName: "PLAN" }]), VA = wa.makeMessageType("agent.v1.CustomSubagent", () => [{ no: 1, name: "full_path", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9 }, { no: 3, name: "description", kind: "scalar", T: 9 }, { no: 4, name: "tools", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "model", kind: "scalar", T: 9 }, { no: 6, name: "prompt", kind: "scalar", T: 9 }, { no: 7, name: "permission_mode", kind: "enum", T: wa.getEnumType(xA) }, { no: 8, name: "is_background", kind: "scalar", T: 8 }, { no: 9, name: "plugin", kind: "scalar", T: 9, opt: true }, { no: 10, name: "marketplace", kind: "scalar", T: 9, opt: true }, { no: 11, name: "plugin_id", kind: "scalar", T: 9, opt: true }, { no: 12, name: "marketplace_id", kind: "scalar", T: 9, opt: true }, { no: 13, name: "force_default_model", kind: "scalar", T: 8 }, { no: 14, name: "source", kind: "scalar", T: 9, opt: true }]), qA = wa.makeMessageType("agent.v1.LsArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "ignore", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 4, name: "sandbox_policy", kind: "message", T: fr, opt: true }, { no: 5, name: "timeout_ms", kind: "scalar", T: 13, opt: true }]), HA = wa.makeMessageType("agent.v1.LsResult", () => [{ no: 1, name: "success", kind: "message", T: WA, oneof: "result" }, { no: 2, name: "error", kind: "message", T: XA, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: ZA, oneof: "result" }, { no: 4, name: "timeout", kind: "message", T: zA, oneof: "result" }]), WA = wa.makeMessageType("agent.v1.LsSuccess", () => [{ no: 1, name: "directory_tree_root", kind: "message", T: KA }]), KA = wa.makeMessageType("agent.v1.LsDirectoryTreeNode", () => [{ no: 1, name: "abs_path", kind: "scalar", T: 9 }, { no: 2, name: "children_dirs", kind: "message", T: KA, repeated: true }, { no: 3, name: "children_files", kind: "message", T: jA, repeated: true }, { no: 4, name: "children_were_processed", kind: "scalar", T: 8 }, { no: 5, name: "full_subtree_extension_counts", kind: "map", K: 9, V: { kind: "scalar", T: 5 } }, { no: 6, name: "num_files", kind: "scalar", T: 5 }]), jA = wa.makeMessageType("agent.v1.LsDirectoryTreeNode.File", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "terminal_metadata", kind: "message", T: $A, opt: true }], { localName: "LsDirectoryTreeNode_File" }), XA = wa.makeMessageType("agent.v1.LsError", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }]), ZA = wa.makeMessageType("agent.v1.LsRejected", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }]), zA = wa.makeMessageType("agent.v1.LsTimeout", () => [{ no: 1, name: "directory_tree_root", kind: "message", T: KA }]), $A = wa.makeMessageType("agent.v1.TerminalMetadata", () => [{ no: 1, name: "cwd", kind: "scalar", T: 9, opt: true }, { no: 2, name: "last_commands", kind: "message", T: el, repeated: true }, { no: 3, name: "last_modified_ms", kind: "scalar", T: 3, opt: true }, { no: 4, name: "current_command", kind: "message", T: el, opt: true }]), el = wa.makeMessageType("agent.v1.TerminalMetadata.Command", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "exit_code", kind: "scalar", T: 5, opt: true }, { no: 3, name: "timestamp_ms", kind: "scalar", T: 3, opt: true }, { no: 4, name: "duration_ms", kind: "scalar", T: 3, opt: true }], { localName: "TerminalMetadata_Command" }), nl = wa.makeEnum("agent.v1.MouseButton", [{ no: 0, name: "MOUSE_BUTTON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "MOUSE_BUTTON_LEFT", localName: "LEFT" }, { no: 2, name: "MOUSE_BUTTON_RIGHT", localName: "RIGHT" }, { no: 3, name: "MOUSE_BUTTON_MIDDLE", localName: "MIDDLE" }, { no: 4, name: "MOUSE_BUTTON_BACK", localName: "BACK" }, { no: 5, name: "MOUSE_BUTTON_FORWARD", localName: "FORWARD" }]), al = wa.makeEnum("agent.v1.ScrollDirection", [{ no: 0, name: "SCROLL_DIRECTION_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SCROLL_DIRECTION_UP", localName: "UP" }, { no: 2, name: "SCROLL_DIRECTION_DOWN", localName: "DOWN" }, { no: 3, name: "SCROLL_DIRECTION_LEFT", localName: "LEFT" }, { no: 4, name: "SCROLL_DIRECTION_RIGHT", localName: "RIGHT" }]), tl = wa.makeEnum("agent.v1.KeyStroke", [{ no: 0, name: "KEY_STROKE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "KEY_STROKE_TAP", localName: "TAP" }, { no: 2, name: "KEY_STROKE_DOWN", localName: "DOWN" }, { no: 3, name: "KEY_STROKE_UP", localName: "UP" }]), sl = wa.makeEnum("agent.v1.ComputerUseSettleOutcome", [{ no: 0, name: "COMPUTER_USE_SETTLE_OUTCOME_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "COMPUTER_USE_SETTLE_OUTCOME_NONE", localName: "NONE" }, { no: 2, name: "COMPUTER_USE_SETTLE_OUTCOME_FIXED", localName: "FIXED" }, { no: 3, name: "COMPUTER_USE_SETTLE_OUTCOME_STABLE", localName: "STABLE" }, { no: 4, name: "COMPUTER_USE_SETTLE_OUTCOME_CAP", localName: "CAP" }, { no: 5, name: "COMPUTER_USE_SETTLE_OUTCOME_CAPTURE_FAILED", localName: "CAPTURE_FAILED" }]), ol = wa.makeMessageType("agent.v1.Coordinate", () => [{ no: 1, name: "x", kind: "scalar", T: 5 }, { no: 2, name: "y", kind: "scalar", T: 5 }]), rl = wa.makeMessageType("agent.v1.ComputerUseArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "actions", kind: "message", T: il, repeated: true }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }, { no: 4, name: "bind_unmapped_characters", kind: "scalar", T: 8, opt: true }, { no: 5, name: "desktop_lease_actor_id", kind: "scalar", T: 9, opt: true }, { no: 6, name: "screenshot_settle_ms", kind: "scalar", T: 5, opt: true }, { no: 8, name: "settle_until_stable", kind: "scalar", T: 8, opt: true }]), il = wa.makeMessageType("agent.v1.ComputerUseAction", () => [{ no: 1, name: "mouse_move", kind: "message", T: Al, oneof: "action" }, { no: 2, name: "click", kind: "message", T: ll, oneof: "action" }, { no: 3, name: "mouse_down", kind: "message", T: cl, oneof: "action" }, { no: 4, name: "mouse_up", kind: "message", T: ml, oneof: "action" }, { no: 5, name: "drag", kind: "message", T: dl, oneof: "action" }, { no: 6, name: "scroll", kind: "message", T: gl, oneof: "action" }, { no: 7, name: "type", kind: "message", T: ul, oneof: "action" }, { no: 8, name: "key", kind: "message", T: El, oneof: "action" }, { no: 9, name: "wait", kind: "message", T: pl, oneof: "action" }, { no: 10, name: "screenshot", kind: "message", T: Tl, oneof: "action" }, { no: 11, name: "cursor_position", kind: "message", T: kl, oneof: "action" }]), Al = wa.makeMessageType("agent.v1.MouseMoveAction", () => [{ no: 1, name: "coordinate", kind: "message", T: ol }]), ll = wa.makeMessageType("agent.v1.ClickAction", () => [{ no: 1, name: "coordinate", kind: "message", T: ol, opt: true }, { no: 2, name: "button", kind: "enum", T: wa.getEnumType(nl) }, { no: 3, name: "count", kind: "scalar", T: 5 }, { no: 4, name: "modifier_keys", kind: "scalar", T: 9, opt: true }]), cl = wa.makeMessageType("agent.v1.MouseDownAction", () => [{ no: 1, name: "button", kind: "enum", T: wa.getEnumType(nl) }]), ml = wa.makeMessageType("agent.v1.MouseUpAction", () => [{ no: 1, name: "button", kind: "enum", T: wa.getEnumType(nl) }]), dl = wa.makeMessageType("agent.v1.DragAction", () => [{ no: 1, name: "path", kind: "message", T: ol, repeated: true }, { no: 2, name: "button", kind: "enum", T: wa.getEnumType(nl) }, { no: 3, name: "modifier_keys", kind: "scalar", T: 9, opt: true }]), gl = wa.makeMessageType("agent.v1.ScrollAction", () => [{ no: 1, name: "coordinate", kind: "message", T: ol, opt: true }, { no: 2, name: "direction", kind: "enum", T: wa.getEnumType(al) }, { no: 3, name: "amount", kind: "scalar", T: 5 }, { no: 4, name: "modifier_keys", kind: "scalar", T: 9, opt: true }]), ul = wa.makeMessageType("agent.v1.TypeAction", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }]), El = wa.makeMessageType("agent.v1.KeyAction", () => [{ no: 1, name: "key", kind: "scalar", T: 9 }, { no: 2, name: "hold_duration_ms", kind: "scalar", T: 5, opt: true }, { no: 3, name: "stroke", kind: "enum", T: wa.getEnumType(tl) }]), pl = wa.makeMessageType("agent.v1.WaitAction", () => [{ no: 1, name: "duration_ms", kind: "scalar", T: 5 }]), Tl = wa.makeMessageType("agent.v1.ScreenshotAction", []), kl = wa.makeMessageType("agent.v1.CursorPositionAction", []), Il = wa.makeMessageType("agent.v1.ComputerUseResult", () => [{ no: 1, name: "success", kind: "message", T: hl, oneof: "result" }, { no: 2, name: "error", kind: "message", T: _l, oneof: "result" }]), hl = wa.makeMessageType("agent.v1.ComputerUseSuccess", () => [{ no: 1, name: "action_count", kind: "scalar", T: 5 }, { no: 2, name: "duration_ms", kind: "scalar", T: 5 }, { no: 3, name: "screenshot", kind: "scalar", T: 9, opt: true }, { no: 4, name: "log", kind: "scalar", T: 9, opt: true }, { no: 5, name: "screenshot_path", kind: "scalar", T: 9, opt: true }, { no: 6, name: "cursor_position", kind: "message", T: ol, opt: true }, { no: 7, name: "settle_ms", kind: "scalar", T: 5, opt: true }, { no: 8, name: "settle_outcome", kind: "enum", T: wa.getEnumType(sl), opt: true }]), _l = wa.makeMessageType("agent.v1.ComputerUseError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "action_count", kind: "scalar", T: 5 }, { no: 3, name: "duration_ms", kind: "scalar", T: 5 }, { no: 4, name: "log", kind: "scalar", T: 9, opt: true }, { no: 5, name: "screenshot", kind: "scalar", T: 9, opt: true }, { no: 6, name: "screenshot_path", kind: "scalar", T: 9, opt: true }]), Cl = wa.makeEnum("agent.v1.BugfixVerdict", [{ no: 0, name: "BUGFIX_VERDICT_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "BUGFIX_VERDICT_FIXED", localName: "FIXED" }, { no: 2, name: "BUGFIX_VERDICT_FALSE_POSITIVE", localName: "FALSE_POSITIVE" }, { no: 3, name: "BUGFIX_VERDICT_COULD_NOT_FIX", localName: "COULD_NOT_FIX" }, { no: 4, name: "BUGFIX_VERDICT_RESOLVED_BY_OTHER_FIX", localName: "RESOLVED_BY_OTHER_FIX" }]), fl = wa.makeMessageType("agent.v1.BugfixResultItem", () => [{ no: 1, name: "bug_id", kind: "scalar", T: 9 }, { no: 2, name: "bug_title", kind: "scalar", T: 9 }, { no: 3, name: "verdict", kind: "enum", T: wa.getEnumType(Cl) }, { no: 4, name: "explanation", kind: "scalar", T: 9 }, { no: 5, name: "severity", kind: "scalar", T: 9, opt: true }]), Bl = wa.makeMessageType("agent.v1.ReportBugfixResultsSuccess", () => [{ no: 1, name: "results", kind: "message", T: fl, repeated: true }]), Ql = wa.makeMessageType("agent.v1.ReportBugfixResultsError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), yl = wa.makeEnum("aiserver.v1.ClientSideToolV2", [{ no: 0, name: "CLIENT_SIDE_TOOL_V2_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CLIENT_SIDE_TOOL_V2_READ_SEMSEARCH_FILES", localName: "READ_SEMSEARCH_FILES" }, { no: 3, name: "CLIENT_SIDE_TOOL_V2_RIPGREP_SEARCH", localName: "RIPGREP_SEARCH" }, { no: 5, name: "CLIENT_SIDE_TOOL_V2_READ_FILE", localName: "READ_FILE" }, { no: 6, name: "CLIENT_SIDE_TOOL_V2_LIST_DIR", localName: "LIST_DIR" }, { no: 7, name: "CLIENT_SIDE_TOOL_V2_EDIT_FILE", localName: "EDIT_FILE" }, { no: 8, name: "CLIENT_SIDE_TOOL_V2_FILE_SEARCH", localName: "FILE_SEARCH" }, { no: 9, name: "CLIENT_SIDE_TOOL_V2_SEMANTIC_SEARCH_FULL", localName: "SEMANTIC_SEARCH_FULL" }, { no: 11, name: "CLIENT_SIDE_TOOL_V2_DELETE_FILE", localName: "DELETE_FILE" }, { no: 12, name: "CLIENT_SIDE_TOOL_V2_REAPPLY", localName: "REAPPLY" }, { no: 15, name: "CLIENT_SIDE_TOOL_V2_RUN_TERMINAL_COMMAND_V2", localName: "RUN_TERMINAL_COMMAND_V2" }, { no: 16, name: "CLIENT_SIDE_TOOL_V2_FETCH_RULES", localName: "FETCH_RULES" }, { no: 18, name: "CLIENT_SIDE_TOOL_V2_WEB_SEARCH", localName: "WEB_SEARCH" }, { no: 19, name: "CLIENT_SIDE_TOOL_V2_MCP", localName: "MCP" }, { no: 23, name: "CLIENT_SIDE_TOOL_V2_SEARCH_SYMBOLS", localName: "SEARCH_SYMBOLS" }, { no: 24, name: "CLIENT_SIDE_TOOL_V2_BACKGROUND_COMPOSER_FOLLOWUP", localName: "BACKGROUND_COMPOSER_FOLLOWUP" }, { no: 25, name: "CLIENT_SIDE_TOOL_V2_KNOWLEDGE_BASE", localName: "KNOWLEDGE_BASE" }, { no: 26, name: "CLIENT_SIDE_TOOL_V2_FETCH_PULL_REQUEST", localName: "FETCH_PULL_REQUEST" }, { no: 27, name: "CLIENT_SIDE_TOOL_V2_DEEP_SEARCH", localName: "DEEP_SEARCH" }, { no: 28, name: "CLIENT_SIDE_TOOL_V2_CREATE_DIAGRAM", localName: "CREATE_DIAGRAM" }, { no: 29, name: "CLIENT_SIDE_TOOL_V2_FIX_LINTS", localName: "FIX_LINTS" }, { no: 30, name: "CLIENT_SIDE_TOOL_V2_READ_LINTS", localName: "READ_LINTS" }, { no: 31, name: "CLIENT_SIDE_TOOL_V2_GO_TO_DEFINITION", localName: "GO_TO_DEFINITION" }, { no: 32, name: "CLIENT_SIDE_TOOL_V2_TASK", localName: "TASK" }, { no: 33, name: "CLIENT_SIDE_TOOL_V2_AWAIT_TASK", localName: "AWAIT_TASK" }, { no: 34, name: "CLIENT_SIDE_TOOL_V2_TODO_READ", localName: "TODO_READ" }, { no: 35, name: "CLIENT_SIDE_TOOL_V2_TODO_WRITE", localName: "TODO_WRITE" }, { no: 38, name: "CLIENT_SIDE_TOOL_V2_EDIT_FILE_V2", localName: "EDIT_FILE_V2" }, { no: 39, name: "CLIENT_SIDE_TOOL_V2_LIST_DIR_V2", localName: "LIST_DIR_V2" }, { no: 40, name: "CLIENT_SIDE_TOOL_V2_READ_FILE_V2", localName: "READ_FILE_V2" }, { no: 41, name: "CLIENT_SIDE_TOOL_V2_RIPGREP_RAW_SEARCH", localName: "RIPGREP_RAW_SEARCH" }, { no: 42, name: "CLIENT_SIDE_TOOL_V2_GLOB_FILE_SEARCH", localName: "GLOB_FILE_SEARCH" }, { no: 43, name: "CLIENT_SIDE_TOOL_V2_CREATE_PLAN", localName: "CREATE_PLAN" }, { no: 44, name: "CLIENT_SIDE_TOOL_V2_LIST_MCP_RESOURCES", localName: "LIST_MCP_RESOURCES" }, { no: 45, name: "CLIENT_SIDE_TOOL_V2_READ_MCP_RESOURCE", localName: "READ_MCP_RESOURCE" }, { no: 46, name: "CLIENT_SIDE_TOOL_V2_READ_PROJECT", localName: "READ_PROJECT" }, { no: 47, name: "CLIENT_SIDE_TOOL_V2_UPDATE_PROJECT", localName: "UPDATE_PROJECT" }, { no: 48, name: "CLIENT_SIDE_TOOL_V2_TASK_V2", localName: "TASK_V2" }, { no: 49, name: "CLIENT_SIDE_TOOL_V2_CALL_MCP_TOOL", localName: "CALL_MCP_TOOL" }, { no: 50, name: "CLIENT_SIDE_TOOL_V2_APPLY_AGENT_DIFF", localName: "APPLY_AGENT_DIFF" }, { no: 51, name: "CLIENT_SIDE_TOOL_V2_ASK_QUESTION", localName: "ASK_QUESTION" }, { no: 52, name: "CLIENT_SIDE_TOOL_V2_SWITCH_MODE", localName: "SWITCH_MODE" }, { no: 53, name: "CLIENT_SIDE_TOOL_V2_GENERATE_IMAGE", localName: "GENERATE_IMAGE" }, { no: 54, name: "CLIENT_SIDE_TOOL_V2_COMPUTER_USE", localName: "COMPUTER_USE" }, { no: 55, name: "CLIENT_SIDE_TOOL_V2_WRITE_SHELL_STDIN", localName: "WRITE_SHELL_STDIN" }, { no: 56, name: "CLIENT_SIDE_TOOL_V2_RECORD_SCREEN", localName: "RECORD_SCREEN" }, { no: 57, name: "CLIENT_SIDE_TOOL_V2_WEB_FETCH", localName: "WEB_FETCH" }, { no: 58, name: "CLIENT_SIDE_TOOL_V2_REPORT_BUGFIX_RESULTS", localName: "REPORT_BUGFIX_RESULTS" }, { no: 59, name: "CLIENT_SIDE_TOOL_V2_AI_ATTRIBUTION", localName: "AI_ATTRIBUTION" }, { no: 60, name: "CLIENT_SIDE_TOOL_V2_MCP_AUTH", localName: "MCP_AUTH" }, { no: 61, name: "CLIENT_SIDE_TOOL_V2_REFLECT", localName: "REFLECT" }, { no: 62, name: "CLIENT_SIDE_TOOL_V2_AWAIT", localName: "AWAIT" }, { no: 63, name: "CLIENT_SIDE_TOOL_V2_GET_MCP_TOOLS", localName: "GET_MCP_TOOLS" }, { no: 65, name: "CLIENT_SIDE_TOOL_V2_SEND_TO_USER", localName: "SEND_TO_USER" }, { no: 66, name: "CLIENT_SIDE_TOOL_V2_CONNECT_SCM", localName: "CONNECT_SCM" }]), Rl = wa.makeEnum("aiserver.v1.BuiltinTool", [{ no: 0, name: "BUILTIN_TOOL_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "BUILTIN_TOOL_SEARCH", localName: "SEARCH" }, { no: 2, name: "BUILTIN_TOOL_READ_CHUNK", localName: "READ_CHUNK" }, { no: 3, name: "BUILTIN_TOOL_GOTODEF", localName: "GOTODEF" }, { no: 4, name: "BUILTIN_TOOL_EDIT", localName: "EDIT" }, { no: 5, name: "BUILTIN_TOOL_UNDO_EDIT", localName: "UNDO_EDIT" }, { no: 6, name: "BUILTIN_TOOL_END", localName: "END" }, { no: 7, name: "BUILTIN_TOOL_NEW_FILE", localName: "NEW_FILE" }, { no: 8, name: "BUILTIN_TOOL_ADD_TEST", localName: "ADD_TEST" }, { no: 9, name: "BUILTIN_TOOL_RUN_TEST", localName: "RUN_TEST" }, { no: 10, name: "BUILTIN_TOOL_DELETE_TEST", localName: "DELETE_TEST" }, { no: 11, name: "BUILTIN_TOOL_SAVE_FILE", localName: "SAVE_FILE" }, { no: 12, name: "BUILTIN_TOOL_GET_TESTS", localName: "GET_TESTS" }, { no: 13, name: "BUILTIN_TOOL_GET_SYMBOLS", localName: "GET_SYMBOLS" }, { no: 14, name: "BUILTIN_TOOL_SEMANTIC_SEARCH", localName: "SEMANTIC_SEARCH" }, { no: 15, name: "BUILTIN_TOOL_GET_PROJECT_STRUCTURE", localName: "GET_PROJECT_STRUCTURE" }, { no: 16, name: "BUILTIN_TOOL_CREATE_RM_FILES", localName: "CREATE_RM_FILES" }, { no: 17, name: "BUILTIN_TOOL_RUN_TERMINAL_COMMANDS", localName: "RUN_TERMINAL_COMMANDS" }, { no: 18, name: "BUILTIN_TOOL_NEW_EDIT", localName: "NEW_EDIT" }, { no: 19, name: "BUILTIN_TOOL_READ_WITH_LINTER", localName: "READ_WITH_LINTER" }]), Nl = wa.makeEnum("aiserver.v1.RunTerminalCommandEndedReason", [{ no: 0, name: "RUN_TERMINAL_COMMAND_ENDED_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "RUN_TERMINAL_COMMAND_ENDED_REASON_EXECUTION_COMPLETED", localName: "EXECUTION_COMPLETED" }, { no: 2, name: "RUN_TERMINAL_COMMAND_ENDED_REASON_EXECUTION_ABORTED", localName: "EXECUTION_ABORTED" }, { no: 3, name: "RUN_TERMINAL_COMMAND_ENDED_REASON_EXECUTION_FAILED", localName: "EXECUTION_FAILED" }, { no: 4, name: "RUN_TERMINAL_COMMAND_ENDED_REASON_ERROR_OCCURRED_CHECKING_REASON", localName: "ERROR_OCCURRED_CHECKING_REASON" }, { no: 5, name: "RUN_TERMINAL_COMMAND_ENDED_REASON_IDLE_TIMEOUT", localName: "IDLE_TIMEOUT" }]), vl = wa.makeMessageType("aiserver.v1.ReapplyParams", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }]), Sl = wa.makeMessageType("aiserver.v1.ApplyAgentDiffParams", () => [{ no: 1, name: "agent_id", kind: "scalar", T: 9 }]), Dl = wa.makeMessageType("aiserver.v1.ReapplyResult", () => [{ no: 1, name: "diff", kind: "message", T: jl }, { no: 2, name: "is_applied", kind: "scalar", T: 8 }, { no: 3, name: "apply_failed", kind: "scalar", T: 8 }, { no: 4, name: "linter_errors", kind: "message", T: qo, repeated: true }, { no: 5, name: "rejected", kind: "scalar", T: 8, opt: true }]), wl = wa.makeMessageType("aiserver.v1.FetchRulesParams", () => [{ no: 1, name: "rule_names", kind: "scalar", T: 9, repeated: true }]), bl = wa.makeMessageType("aiserver.v1.FetchRulesResult", () => [{ no: 1, name: "rules", kind: "message", T: Ko, repeated: true }]), Ml = wa.makeMessageType("aiserver.v1.ToolResultError", () => [{ no: 1, name: "client_visible_error_message", kind: "scalar", T: 9 }, { no: 2, name: "model_visible_error_message", kind: "scalar", T: 9 }, { no: 3, name: "actual_error_message_only_send_from_client_to_server_never_the_other_way_around_because_that_may_be_a_security_risk", kind: "scalar", T: 9, opt: true }, { no: 5, name: "edit_file_error_details", kind: "message", T: Fl, oneof: "error_details" }, { no: 6, name: "search_replace_error_details", kind: "message", T: Ol, oneof: "error_details" }]), Fl = wa.makeMessageType("aiserver.v1.ToolResultError.EditFileError", () => [{ no: 1, name: "num_lines_in_file_before_edit", kind: "scalar", T: 5 }], { localName: "ToolResultError_EditFileError" }), Ol = wa.makeMessageType("aiserver.v1.ToolResultError.SearchReplaceError", () => [{ no: 1, name: "num_lines_in_file_before_edit", kind: "scalar", T: 5 }], { localName: "ToolResultError_SearchReplaceError" }), Ul = wa.makeMessageType("aiserver.v1.ClientSideToolV2Call", () => [{ no: 1, name: "tool", kind: "enum", T: wa.getEnumType(yl) }, { no: 2, name: "read_semsearch_files_params", kind: "message", T: Pc, oneof: "params" }, { no: 5, name: "ripgrep_search_params", kind: "message", T: mc, oneof: "params" }, { no: 8, name: "read_file_params", kind: "message", T: lc, oneof: "params" }, { no: 12, name: "list_dir_params", kind: "message", T: rc, oneof: "params" }, { no: 13, name: "edit_file_params", kind: "message", T: Wl, oneof: "params" }, { no: 16, name: "file_search_params", kind: "message", T: tc, oneof: "params" }, { no: 17, name: "semantic_search_full_params", kind: "message", T: qc, oneof: "params" }, { no: 19, name: "delete_file_params", kind: "message", T: Wc, oneof: "params" }, { no: 20, name: "reapply_params", kind: "message", T: vl, oneof: "params" }, { no: 23, name: "run_terminal_command_v2_params", kind: "message", T: Ad, oneof: "params" }, { no: 24, name: "fetch_rules_params", kind: "message", T: wl, oneof: "params" }, { no: 26, name: "web_search_params", kind: "message", T: dd, oneof: "params" }, { no: 27, name: "mcp_params", kind: "message", T: Ed, oneof: "params" }, { no: 31, name: "search_symbols_params", kind: "message", T: Nd, oneof: "params" }, { no: 41, name: "gotodef_params", kind: "message", T: Dm, oneof: "params" }, { no: 32, name: "background_composer_followup_params", kind: "message", T: Dd, oneof: "params" }, { no: 33, name: "knowledge_base_params", kind: "message", T: bd, oneof: "params" }, { no: 34, name: "fetch_pull_request_params", kind: "message", T: Fd, oneof: "params" }, { no: 35, name: "deep_search_params", kind: "message", T: Pd, oneof: "params" }, { no: 36, name: "create_diagram_params", kind: "message", T: Gd, oneof: "params" }, { no: 37, name: "fix_lints_params", kind: "message", T: Jd, oneof: "params" }, { no: 38, name: "read_lints_params", kind: "message", T: Hd, oneof: "params" }, { no: 42, name: "task_params", kind: "message", T: Kd, oneof: "params" }, { no: 43, name: "await_task_params", kind: "message", T: dg, oneof: "params" }, { no: 44, name: "todo_read_params", kind: "message", T: Eg, oneof: "params" }, { no: 45, name: "todo_write_params", kind: "message", T: kg, oneof: "params" }, { no: 50, name: "edit_file_v2_params", kind: "message", T: Jl, oneof: "params" }, { no: 52, name: "list_dir_v2_params", kind: "message", T: hg, oneof: "params" }, { no: 53, name: "read_file_v2_params", kind: "message", T: Bg, oneof: "params" }, { no: 54, name: "ripgrep_raw_search_params", kind: "message", T: eg, oneof: "params" }, { no: 55, name: "glob_file_search_params", kind: "message", T: yg, oneof: "params" }, { no: 56, name: "create_plan_params", kind: "message", T: wg, oneof: "params" }, { no: 57, name: "list_mcp_resources_params", kind: "message", T: Id, oneof: "params" }, { no: 58, name: "read_mcp_resource_params", kind: "message", T: Cd, oneof: "params" }, { no: 59, name: "read_project_params", kind: "message", T: Ug, oneof: "params" }, { no: 60, name: "update_project_params", kind: "message", T: xg, oneof: "params" }, { no: 61, name: "task_v2_params", kind: "message", T: zd, oneof: "params" }, { no: 62, name: "call_mcp_tool_params", kind: "message", T: Bd, oneof: "params" }, { no: 63, name: "apply_agent_diff_params", kind: "message", T: Sl, oneof: "params" }, { no: 64, name: "ask_question_params", kind: "message", T: Yg, oneof: "params" }, { no: 65, name: "switch_mode_params", kind: "message", T: Wg, oneof: "params" }, { no: 66, name: "computer_use_params", kind: "message", T: jg, oneof: "params" }, { no: 67, name: "write_shell_stdin_params", kind: "message", T: Ei, oneof: "params" }, { no: 68, name: "record_screen_params", kind: "message", T: _i, oneof: "params" }, { no: 69, name: "web_fetch_params", kind: "message", T: Zg, oneof: "params" }, { no: 70, name: "report_bugfix_results_params", kind: "message", T: $g, oneof: "params" }, { no: 71, name: "mcp_auth_params", kind: "message", T: nu, oneof: "params" }, { no: 72, name: "get_mcp_tools_params", kind: "message", T: yd, oneof: "params" }, { no: 73, name: "connect_scm_params", kind: "message", T: tu, oneof: "params" }, { no: 3, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 6, name: "timeout_ms", kind: "scalar", T: 1, opt: true }, { no: 9, name: "name", kind: "scalar", T: 9 }, { no: 14, name: "is_streaming", kind: "scalar", T: 8 }, { no: 15, name: "is_last_message", kind: "scalar", T: 8 }, { no: 51, name: "internal", kind: "scalar", T: 8 }, { no: 10, name: "raw_args", kind: "scalar", T: 9 }, { no: 48, name: "tool_index", kind: "scalar", T: 13, opt: true }, { no: 49, name: "model_call_id", kind: "scalar", T: 9, opt: true }]), Ll = wa.makeMessageType("aiserver.v1.ClientSideToolV2Result", () => [{ no: 1, name: "tool", kind: "enum", T: wa.getEnumType(yl) }, { no: 2, name: "read_semsearch_files_result", kind: "message", T: Vc, oneof: "result" }, { no: 4, name: "ripgrep_search_result", kind: "message", T: _c, oneof: "result" }, { no: 6, name: "read_file_result", kind: "message", T: cc, oneof: "result" }, { no: 9, name: "list_dir_result", kind: "message", T: ic, oneof: "result" }, { no: 10, name: "edit_file_result", kind: "message", T: Kl, oneof: "result" }, { no: 11, name: "file_search_result", kind: "message", T: sc, oneof: "result" }, { no: 18, name: "semantic_search_full_result", kind: "message", T: Hc, oneof: "result" }, { no: 20, name: "delete_file_result", kind: "message", T: Kc, oneof: "result" }, { no: 21, name: "reapply_result", kind: "message", T: Dl, oneof: "result" }, { no: 24, name: "run_terminal_command_v2_result", kind: "message", T: md, oneof: "result" }, { no: 25, name: "fetch_rules_result", kind: "message", T: bl, oneof: "result" }, { no: 27, name: "web_search_result", kind: "message", T: gd, oneof: "result" }, { no: 28, name: "mcp_result", kind: "message", T: kd, oneof: "result" }, { no: 32, name: "search_symbols_result", kind: "message", T: vd, oneof: "result" }, { no: 33, name: "background_composer_followup_result", kind: "message", T: wd, oneof: "result" }, { no: 34, name: "knowledge_base_result", kind: "message", T: Md, oneof: "result" }, { no: 36, name: "fetch_pull_request_result", kind: "message", T: Od, oneof: "result" }, { no: 37, name: "deep_search_result", kind: "message", T: xd, oneof: "result" }, { no: 38, name: "create_diagram_result", kind: "message", T: Yd, oneof: "result" }, { no: 39, name: "fix_lints_result", kind: "message", T: Vd, oneof: "result" }, { no: 40, name: "read_lints_result", kind: "message", T: Wd, oneof: "result" }, { no: 41, name: "gotodef_result", kind: "message", T: bm, oneof: "result" }, { no: 42, name: "task_result", kind: "message", T: jd, oneof: "result" }, { no: 43, name: "await_task_result", kind: "message", T: gg, oneof: "result" }, { no: 44, name: "todo_read_result", kind: "message", T: Tg, oneof: "result" }, { no: 45, name: "todo_write_result", kind: "message", T: Ig, oneof: "result" }, { no: 51, name: "edit_file_v2_result", kind: "message", T: Hl, oneof: "result" }, { no: 52, name: "list_dir_v2_result", kind: "message", T: _g, oneof: "result" }, { no: 53, name: "read_file_v2_result", kind: "message", T: Qg, oneof: "result" }, { no: 54, name: "ripgrep_raw_search_result", kind: "message", T: ng, oneof: "result" }, { no: 55, name: "glob_file_search_result", kind: "message", T: Rg, oneof: "result" }, { no: 56, name: "create_plan_result", kind: "message", T: bg, oneof: "result" }, { no: 57, name: "list_mcp_resources_result", kind: "message", T: hd, oneof: "result" }, { no: 58, name: "read_mcp_resource_result", kind: "message", T: fd, oneof: "result" }, { no: 59, name: "read_project_result", kind: "message", T: Lg, oneof: "result" }, { no: 60, name: "update_project_result", kind: "message", T: Gg, oneof: "result" }, { no: 61, name: "task_v2_result", kind: "message", T: $d, oneof: "result" }, { no: 62, name: "call_mcp_tool_result", kind: "message", T: Qd, oneof: "result" }, { no: 63, name: "apply_agent_diff_result", kind: "message", T: Ri, oneof: "result" }, { no: 64, name: "ask_question_result", kind: "message", T: qg, oneof: "result" }, { no: 65, name: "switch_mode_result", kind: "message", T: Kg, oneof: "result" }, { no: 66, name: "computer_use_result", kind: "message", T: Xg, oneof: "result" }, { no: 67, name: "generate_image_result", kind: "message", T: wi, oneof: "result" }, { no: 68, name: "write_shell_stdin_result", kind: "message", T: pi, oneof: "result" }, { no: 69, name: "record_screen_result", kind: "message", T: Ci, oneof: "result" }, { no: 70, name: "web_fetch_result", kind: "message", T: zg, oneof: "result" }, { no: 71, name: "report_bugfix_results_result", kind: "message", T: eu, oneof: "result" }, { no: 72, name: "ai_attribution_result", kind: "message", T: Li, oneof: "result" }, { no: 73, name: "mcp_auth_result", kind: "message", T: au, oneof: "result" }, { no: 74, name: "get_mcp_tools_result", kind: "message", T: Rd, oneof: "result" }, { no: 75, name: "connect_scm_result", kind: "message", T: ru, oneof: "result" }, { no: 35, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 8, name: "error", kind: "message", T: Ml, opt: true }, { no: 48, name: "model_call_id", kind: "scalar", T: 9, opt: true }, { no: 49, name: "tool_index", kind: "scalar", T: 13, opt: true }, { no: 50, name: "attachments", kind: "message", T: xl, opt: true }]), Pl = wa.makeMessageType("aiserver.v1.NudgeMessage", () => [{ no: 1, name: "raw_message", kind: "scalar", T: 9 }]), xl = wa.makeMessageType("aiserver.v1.ToolResultAttachments", () => [{ no: 1, name: "original_todos", kind: "message", T: pg, repeated: true }, { no: 2, name: "updated_todos", kind: "message", T: pg, repeated: true }, { no: 3, name: "nudge_messages", kind: "message", T: Pl, repeated: true }, { no: 4, name: "should_show_todo_write_reminder", kind: "scalar", T: 8 }, { no: 5, name: "todo_reminder_type", kind: "enum", T: wa.getEnumType(Gl) }, { no: 6, name: "discovery_budget_reminder", kind: "message", T: Yl, opt: true }]), Gl = wa.makeEnum("aiserver.v1.ToolResultAttachments.TodoReminderType", [{ no: 0, name: "TODO_REMINDER_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TODO_REMINDER_TYPE_EVERY_10_TURNS", localName: "EVERY_10_TURNS" }, { no: 2, name: "TODO_REMINDER_TYPE_AFTER_EDIT", localName: "AFTER_EDIT" }]), Yl = wa.makeMessageType("aiserver.v1.ToolResultAttachments.DiscoveryBudgetReminder", () => [{ no: 1, name: "discovery_rounds_remaining", kind: "scalar", T: 5 }, { no: 2, name: "discovery_effort", kind: "scalar", T: 9, opt: true }], { localName: "ToolResultAttachments_DiscoveryBudgetReminder" }), Jl = wa.makeMessageType("aiserver.v1.EditFileV2Params", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "contents_after_edit", kind: "scalar", T: 9, opt: true }, { no: 3, name: "waiting_for_file_contents", kind: "scalar", T: 8, opt: true }, { no: 4, name: "text", kind: "message", T: Vl, oneof: "streaming_edit" }, { no: 5, name: "code", kind: "message", T: ql, oneof: "streaming_edit" }, { no: 6, name: "should_send_back_linter_errors", kind: "scalar", T: 8 }, { no: 7, name: "diff", kind: "message", T: jl, opt: true }, { no: 8, name: "result_for_model", kind: "scalar", T: 9 }, { no: 9, name: "streaming_content", kind: "scalar", T: 9, opt: true }, { no: 10, name: "no_codeblock", kind: "scalar", T: 8, opt: true }, { no: 11, name: "cloud_agent_edit", kind: "scalar", T: 8, opt: true }]), Vl = wa.makeMessageType("aiserver.v1.EditFileV2Params.StreamingEditText", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }], { localName: "EditFileV2Params_StreamingEditText" }), ql = wa.makeMessageType("aiserver.v1.EditFileV2Params.StreamingEditCode", () => [{ no: 1, name: "code", kind: "scalar", T: 9 }], { localName: "EditFileV2Params_StreamingEditCode" }), Hl = wa.makeMessageType("aiserver.v1.EditFileV2Result", () => [{ no: 1, name: "contents_before_edit", kind: "scalar", T: 9, opt: true }, { no: 9, name: "eol_sequence", kind: "scalar", T: 9, opt: true }, { no: 11, name: "detected_language", kind: "scalar", T: 9, opt: true }, { no: 2, name: "file_was_created", kind: "scalar", T: 8 }, { no: 3, name: "diff", kind: "message", T: jl, opt: true }, { no: 4, name: "rejected", kind: "scalar", T: 8, opt: true }, { no: 5, name: "linter_errors", kind: "message", T: qo, repeated: true }, { no: 6, name: "sent_back_linter_errors", kind: "scalar", T: 8 }, { no: 8, name: "should_auto_fix_lints", kind: "scalar", T: 8 }, { no: 7, name: "human_review_v2", kind: "message", T: ac, opt: true }, { no: 10, name: "result_for_model", kind: "scalar", T: 9 }, { no: 12, name: "contents_after_edit", kind: "scalar", T: 9, opt: true }, { no: 13, name: "before_content_id", kind: "scalar", T: 9, opt: true }, { no: 14, name: "after_content_id", kind: "scalar", T: 9 }]), Wl = wa.makeMessageType("aiserver.v1.EditFileParams", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "language", kind: "scalar", T: 9 }, { no: 4, name: "blocking", kind: "scalar", T: 8 }, { no: 3, name: "contents", kind: "scalar", T: 9 }, { no: 5, name: "instructions", kind: "scalar", T: 9, opt: true }, { no: 12, name: "should_edit_file_fail_for_large_files", kind: "scalar", T: 8, opt: true }, { no: 6, name: "old_string", kind: "scalar", T: 9, opt: true }, { no: 7, name: "new_string", kind: "scalar", T: 9, opt: true }, { no: 8, name: "allow_multiple_matches", kind: "scalar", T: 8, opt: true }, { no: 10, name: "use_whitespace_insensitive_fallback", kind: "scalar", T: 8, opt: true }, { no: 11, name: "use_did_you_mean_fuzzy_match", kind: "scalar", T: 8, opt: true }, { no: 16, name: "gracefully_handle_recoverable_errors", kind: "scalar", T: 8, opt: true }, { no: 9, name: "line_ranges", kind: "message", T: Bo, repeated: true }, { no: 13, name: "notebook_cell_idx", kind: "scalar", T: 5, opt: true }, { no: 14, name: "is_new_cell", kind: "scalar", T: 8, opt: true }, { no: 15, name: "cell_language", kind: "scalar", T: 9, opt: true }, { no: 17, name: "edit_category", kind: "scalar", T: 9, opt: true }, { no: 18, name: "should_eagerly_process_lints", kind: "scalar", T: 8, opt: true }]), Kl = wa.makeMessageType("aiserver.v1.EditFileResult", () => [{ no: 1, name: "diff", kind: "message", T: jl }, { no: 2, name: "is_applied", kind: "scalar", T: 8 }, { no: 3, name: "apply_failed", kind: "scalar", T: 8 }, { no: 4, name: "linter_errors", kind: "message", T: qo, repeated: true }, { no: 5, name: "rejected", kind: "scalar", T: 8, opt: true }, { no: 6, name: "num_matches", kind: "scalar", T: 5, opt: true }, { no: 7, name: "whitespace_insensitive_fallback_found_match", kind: "scalar", T: 8, opt: true }, { no: 8, name: "no_match_found_in_line_ranges", kind: "scalar", T: 8, opt: true }, { no: 11, name: "recoverable_error", kind: "message", T: zl, opt: true }, { no: 9, name: "num_lines_in_file", kind: "scalar", T: 5, opt: true }, { no: 10, name: "is_subagent_edit", kind: "scalar", T: 8, opt: true }, { no: 12, name: "diff_became_no_op_due_to_on_save_fixes", kind: "scalar", T: 8, opt: true }, { no: 13, name: "human_review", kind: "message", T: ec, opt: true }, { no: 14, name: "human_feedback", kind: "message", T: nc, opt: true }, { no: 15, name: "should_eagerly_process_lints", kind: "scalar", T: 8, opt: true }, { no: 16, name: "human_review_v2", kind: "message", T: ac, opt: true }, { no: 17, name: "were_all_new_linter_errors_resolved_by_this_edit", kind: "scalar", T: 8, opt: true }]), jl = wa.makeMessageType("aiserver.v1.EditFileResult.FileDiff", () => [{ no: 1, name: "chunks", kind: "message", T: Zl, repeated: true }, { no: 2, name: "editor", kind: "enum", T: wa.getEnumType(Xl) }, { no: 3, name: "hit_timeout", kind: "scalar", T: 8 }], { localName: "EditFileResult_FileDiff" }), Xl = wa.makeEnum("aiserver.v1.EditFileResult.FileDiff.Editor", [{ no: 0, name: "EDITOR_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "EDITOR_AI", localName: "AI" }, { no: 2, name: "EDITOR_HUMAN", localName: "HUMAN" }]), Zl = wa.makeMessageType("aiserver.v1.EditFileResult.FileDiff.ChunkDiff", () => [{ no: 1, name: "diff_string", kind: "scalar", T: 9 }, { no: 2, name: "old_start", kind: "scalar", T: 5 }, { no: 3, name: "new_start", kind: "scalar", T: 5 }, { no: 4, name: "old_lines", kind: "scalar", T: 5 }, { no: 5, name: "new_lines", kind: "scalar", T: 5 }, { no: 6, name: "lines_removed", kind: "scalar", T: 5 }, { no: 7, name: "lines_added", kind: "scalar", T: 5 }], { localName: "EditFileResult_FileDiff_ChunkDiff" }), zl = wa.makeMessageType("aiserver.v1.EditFileResult.RecoverableError", () => [{ no: 1, name: "error_type", kind: "enum", T: wa.getEnumType($l) }, { no: 2, name: "model_message", kind: "scalar", T: 9 }], { localName: "EditFileResult_RecoverableError" }), $l = wa.makeEnum("aiserver.v1.EditFileResult.RecoverableError.RecoverableErrorType", [{ no: 0, name: "RECOVERABLE_ERROR_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "RECOVERABLE_ERROR_TYPE_SEARCH_STRING_NOT_FOUND", localName: "SEARCH_STRING_NOT_FOUND" }, { no: 2, name: "RECOVERABLE_ERROR_TYPE_AMBIGUOUS_SEARCH_STRING", localName: "AMBIGUOUS_SEARCH_STRING" }]), ec = wa.makeMessageType("aiserver.v1.EditFileResult.EditFileHumanReview", () => [{ no: 1, name: "is_edit_accepted", kind: "scalar", T: 8 }, { no: 2, name: "text_result", kind: "scalar", T: 9 }, { no: 3, name: "stop_and_get_new_user_input", kind: "scalar", T: 8 }], { localName: "EditFileResult_EditFileHumanReview" }), nc = wa.makeMessageType("aiserver.v1.EditFileResult.HumanFeedback", () => [{ no: 1, name: "selected_option", kind: "scalar", T: 9 }, { no: 2, name: "feedback_text", kind: "scalar", T: 9 }, { no: 3, name: "submit_feedback_as_new_message", kind: "scalar", T: 8 }, { no: 4, name: "bubble_id", kind: "scalar", T: 9 }], { localName: "EditFileResult_HumanFeedback" }), ac = wa.makeMessageType("aiserver.v1.HumanReview", () => [{ no: 1, name: "selected_option", kind: "scalar", T: 9 }, { no: 2, name: "feedback_text", kind: "scalar", T: 9 }, { no: 3, name: "submit_feedback_as_new_message", kind: "scalar", T: 8 }, { no: 4, name: "bubble_id", kind: "scalar", T: 9 }]), tc = wa.makeMessageType("aiserver.v1.ToolCallFileSearchParams", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }]), sc = wa.makeMessageType("aiserver.v1.ToolCallFileSearchResult", () => [{ no: 1, name: "files", kind: "message", T: oc, repeated: true }, { no: 2, name: "limit_hit", kind: "scalar", T: 8, opt: true }, { no: 3, name: "num_results", kind: "scalar", T: 5 }]), oc = wa.makeMessageType("aiserver.v1.ToolCallFileSearchResult.File", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }], { localName: "ToolCallFileSearchResult_File" }), rc = wa.makeMessageType("aiserver.v1.ListDirParams", () => [{ no: 1, name: "directory_path", kind: "scalar", T: 9 }]), ic = wa.makeMessageType("aiserver.v1.ListDirResult", () => [{ no: 1, name: "files", kind: "message", T: Ac, repeated: true }, { no: 2, name: "directory_relative_workspace_path", kind: "scalar", T: 9 }]), Ac = wa.makeMessageType("aiserver.v1.ListDirResult.File", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "is_directory", kind: "scalar", T: 8 }, { no: 3, name: "size", kind: "scalar", T: 3, opt: true }, { no: 4, name: "last_modified", kind: "message", T: ls, opt: true }, { no: 5, name: "num_children", kind: "scalar", T: 5, opt: true }, { no: 6, name: "num_lines", kind: "scalar", T: 5, opt: true }], { localName: "ListDirResult_File" }), lc = wa.makeMessageType("aiserver.v1.ReadFileParams", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "read_entire_file", kind: "scalar", T: 8 }, { no: 3, name: "start_line_one_indexed", kind: "scalar", T: 5, opt: true }, { no: 4, name: "end_line_one_indexed_inclusive", kind: "scalar", T: 5, opt: true }, { no: 5, name: "file_is_allowed_to_be_read_entirely", kind: "scalar", T: 8 }, { no: 6, name: "max_lines", kind: "scalar", T: 5, opt: true }, { no: 7, name: "max_chars", kind: "scalar", T: 5, opt: true }, { no: 8, name: "min_lines", kind: "scalar", T: 5, opt: true }]), cc = wa.makeMessageType("aiserver.v1.ReadFileResult", () => [{ no: 1, name: "contents", kind: "scalar", T: 9 }, { no: 2, name: "did_downgrade_to_line_range", kind: "scalar", T: 8 }, { no: 3, name: "did_shorten_line_range", kind: "scalar", T: 8 }, { no: 4, name: "did_set_default_line_range", kind: "scalar", T: 8 }, { no: 5, name: "full_file_contents", kind: "scalar", T: 9, opt: true }, { no: 6, name: "outline", kind: "scalar", T: 9, opt: true }, { no: 7, name: "start_line_one_indexed", kind: "scalar", T: 5, opt: true }, { no: 8, name: "end_line_one_indexed_inclusive", kind: "scalar", T: 5, opt: true }, { no: 9, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 10, name: "did_shorten_char_range", kind: "scalar", T: 8 }, { no: 11, name: "read_full_file", kind: "scalar", T: 8, opt: true }, { no: 12, name: "total_lines", kind: "scalar", T: 5, opt: true }, { no: 13, name: "matching_cursor_rules", kind: "message", T: Ko, repeated: true }, { no: 14, name: "file_git_context", kind: "message", T: So }]), mc = wa.makeMessageType("aiserver.v1.RipgrepSearchParams", () => [{ no: 1, name: "options", kind: "message", T: uc }, { no: 2, name: "pattern_info", kind: "message", T: dc }]), dc = wa.makeMessageType("aiserver.v1.RipgrepSearchParams.IPatternInfoProto", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "is_reg_exp", kind: "scalar", T: 8, opt: true }, { no: 3, name: "is_word_match", kind: "scalar", T: 8, opt: true }, { no: 4, name: "word_separators", kind: "scalar", T: 9, opt: true }, { no: 5, name: "is_multiline", kind: "scalar", T: 8, opt: true }, { no: 6, name: "is_unicode", kind: "scalar", T: 8, opt: true }, { no: 7, name: "is_case_sensitive", kind: "scalar", T: 8, opt: true }, { no: 8, name: "notebook_info", kind: "message", T: gc }, { no: 9, name: "pattern_was_escaped", kind: "scalar", T: 8, opt: true }], { localName: "RipgrepSearchParams_IPatternInfoProto" }), gc = wa.makeMessageType("aiserver.v1.RipgrepSearchParams.IPatternInfoProto.INotebookPatternInfoProto", () => [{ no: 1, name: "is_in_notebook_markdown_input", kind: "scalar", T: 8, opt: true }, { no: 2, name: "is_in_notebook_markdown_preview", kind: "scalar", T: 8, opt: true }, { no: 3, name: "is_in_notebook_cell_input", kind: "scalar", T: 8, opt: true }, { no: 4, name: "is_in_notebook_cell_output", kind: "scalar", T: 8, opt: true }], { localName: "RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto" }), uc = wa.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto", () => [{ no: 1, name: "preview_options", kind: "message", T: Ic }, { no: 2, name: "file_encoding", kind: "scalar", T: 9, opt: true }, { no: 3, name: "surrounding_context", kind: "scalar", T: 5, opt: true }, { no: 4, name: "is_smart_case", kind: "scalar", T: 8, opt: true }, { no: 5, name: "notebook_search_config", kind: "message", T: hc }, { no: 6, name: "exclude_pattern", kind: "message", T: pc }, { no: 7, name: "include_pattern", kind: "message", T: kc }, { no: 8, name: "expand_patterns", kind: "scalar", T: 8, opt: true }, { no: 9, name: "max_results", kind: "scalar", T: 5, opt: true }, { no: 10, name: "max_file_size", kind: "scalar", T: 5, opt: true }, { no: 11, name: "disregard_ignore_files", kind: "scalar", T: 8, opt: true }, { no: 12, name: "disregard_global_ignore_files", kind: "scalar", T: 8, opt: true }, { no: 13, name: "disregard_parent_ignore_files", kind: "scalar", T: 8, opt: true }, { no: 14, name: "disregard_exclude_settings", kind: "scalar", T: 8, opt: true }, { no: 15, name: "disregard_search_exclude_settings", kind: "scalar", T: 8, opt: true }, { no: 16, name: "ignore_symlinks", kind: "scalar", T: 8, opt: true }, { no: 17, name: "only_open_editors", kind: "scalar", T: 8, opt: true }, { no: 18, name: "only_file_scheme", kind: "scalar", T: 8, opt: true }, { no: 19, name: "reason", kind: "scalar", T: 9, opt: true }, { no: 20, name: "extra_file_resources", kind: "message", T: Ec }], { localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto" }), Ec = wa.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExtraFileResourcesProto", () => [{ no: 1, name: "extra_file_resources", kind: "scalar", T: 9, repeated: true }], { localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto" }), pc = wa.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExcludePatternProto", () => [{ no: 1, name: "exclude_pattern", kind: "message", T: Tc, repeated: true }], { localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto" }), Tc = wa.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPatternBuilderProto", () => [{ no: 1, name: "uri", kind: "scalar", T: 9, opt: true }, { no: 2, name: "pattern", kind: "message", T: kc }], { localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto" }), kc = wa.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPathPatternBuilderProto", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9, opt: true }, { no: 2, name: "patterns", kind: "scalar", T: 9, repeated: true }], { localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto" }), Ic = wa.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ITextSearchPreviewOptionsProto", () => [{ no: 1, name: "match_lines", kind: "scalar", T: 5 }, { no: 2, name: "chars_per_line", kind: "scalar", T: 5 }], { localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto" }), hc = wa.makeMessageType("aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.INotebookSearchConfigProto", () => [{ no: 1, name: "include_markup_input", kind: "scalar", T: 8 }, { no: 2, name: "include_markup_preview", kind: "scalar", T: 8 }, { no: 3, name: "include_code_input", kind: "scalar", T: 8 }, { no: 4, name: "include_output", kind: "scalar", T: 8 }], { localName: "RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto" }), _c = wa.makeMessageType("aiserver.v1.RipgrepSearchResult", () => [{ no: 1, name: "internal", kind: "message", T: Cc }]), Cc = wa.makeMessageType("aiserver.v1.RipgrepSearchResultInternal", () => [{ no: 1, name: "results", kind: "message", T: Qc, repeated: true }, { no: 2, name: "exit", kind: "enum", T: wa.getEnumType(Bc), opt: true }, { no: 3, name: "limit_hit", kind: "scalar", T: 8, opt: true }, { no: 4, name: "messages", kind: "message", T: Dc, repeated: true }, { no: 5, name: "file_search_stats", kind: "message", T: wc, oneof: "stats" }, { no: 6, name: "text_search_stats", kind: "message", T: Mc, oneof: "stats" }]), fc = wa.makeEnum("aiserver.v1.RipgrepSearchResultInternal.TextSearchCompleteMessageType", [{ no: 0, name: "TEXT_SEARCH_COMPLETE_MESSAGE_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TEXT_SEARCH_COMPLETE_MESSAGE_TYPE_INFORMATION", localName: "INFORMATION" }, { no: 2, name: "TEXT_SEARCH_COMPLETE_MESSAGE_TYPE_WARNING", localName: "WARNING" }]), Bc = wa.makeEnum("aiserver.v1.RipgrepSearchResultInternal.SearchCompletionExitCode", [{ no: 0, name: "SEARCH_COMPLETION_EXIT_CODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SEARCH_COMPLETION_EXIT_CODE_NORMAL", localName: "NORMAL" }, { no: 2, name: "SEARCH_COMPLETION_EXIT_CODE_NEW_SEARCH_STARTED", localName: "NEW_SEARCH_STARTED" }]), Qc = wa.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.IFileMatch", () => [{ no: 1, name: "resource", kind: "scalar", T: 9 }, { no: 2, name: "results", kind: "message", T: yc, repeated: true }], { localName: "RipgrepSearchResultInternal_IFileMatch" }), yc = wa.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchResult", () => [{ no: 1, name: "match", kind: "message", T: Rc, oneof: "result" }, { no: 2, name: "context", kind: "message", T: Nc, oneof: "result" }], { localName: "RipgrepSearchResultInternal_ITextSearchResult" }), Rc = wa.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchMatch", () => [{ no: 1, name: "uri", kind: "scalar", T: 9, opt: true }, { no: 2, name: "range_locations", kind: "message", T: vc, repeated: true }, { no: 3, name: "preview_text", kind: "scalar", T: 9 }, { no: 4, name: "webview_index", kind: "scalar", T: 5, opt: true }, { no: 5, name: "cell_fragment", kind: "scalar", T: 9, opt: true }], { localName: "RipgrepSearchResultInternal_ITextSearchMatch" }), Nc = wa.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchContext", () => [{ no: 1, name: "uri", kind: "scalar", T: 9, opt: true }, { no: 2, name: "text", kind: "scalar", T: 9 }, { no: 3, name: "line_number", kind: "scalar", T: 5 }], { localName: "RipgrepSearchResultInternal_ITextSearchContext" }), vc = wa.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ISearchRangeSetPairing", () => [{ no: 1, name: "source", kind: "message", T: Sc }, { no: 2, name: "preview", kind: "message", T: Sc }], { localName: "RipgrepSearchResultInternal_ISearchRangeSetPairing" }), Sc = wa.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ISearchRange", () => [{ no: 1, name: "start_line_number", kind: "scalar", T: 5 }, { no: 2, name: "start_column", kind: "scalar", T: 5 }, { no: 3, name: "end_line_number", kind: "scalar", T: 5 }, { no: 4, name: "end_column", kind: "scalar", T: 5 }], { localName: "RipgrepSearchResultInternal_ISearchRange" }), Dc = wa.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchCompleteMessage", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "type", kind: "enum", T: wa.getEnumType(fc) }, { no: 3, name: "trusted", kind: "scalar", T: 8, opt: true }], { localName: "RipgrepSearchResultInternal_ITextSearchCompleteMessage" }), wc = wa.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.IFileSearchStats", () => [{ no: 1, name: "from_cache", kind: "scalar", T: 8 }, { no: 2, name: "search_engine_stats", kind: "message", T: Oc, oneof: "detail_stats" }, { no: 3, name: "cached_search_stats", kind: "message", T: Uc, oneof: "detail_stats" }, { no: 4, name: "file_search_provider_stats", kind: "message", T: Lc, oneof: "detail_stats" }, { no: 5, name: "result_count", kind: "scalar", T: 5 }, { no: 6, name: "type", kind: "enum", T: wa.getEnumType(bc) }, { no: 7, name: "sorting_time", kind: "scalar", T: 5, opt: true }], { localName: "RipgrepSearchResultInternal_IFileSearchStats" }), bc = wa.makeEnum("aiserver.v1.RipgrepSearchResultInternal.IFileSearchStats.FileSearchProviderType", [{ no: 0, name: "FILE_SEARCH_PROVIDER_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "FILE_SEARCH_PROVIDER_TYPE_FILE_SEARCH_PROVIDER", localName: "FILE_SEARCH_PROVIDER" }, { no: 2, name: "FILE_SEARCH_PROVIDER_TYPE_SEARCH_PROCESS", localName: "SEARCH_PROCESS" }]), Mc = wa.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ITextSearchStats", () => [{ no: 1, name: "type", kind: "enum", T: wa.getEnumType(Fc) }], { localName: "RipgrepSearchResultInternal_ITextSearchStats" }), Fc = wa.makeEnum("aiserver.v1.RipgrepSearchResultInternal.ITextSearchStats.TextSearchProviderType", [{ no: 0, name: "TEXT_SEARCH_PROVIDER_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TEXT_SEARCH_PROVIDER_TYPE_TEXT_SEARCH_PROVIDER", localName: "TEXT_SEARCH_PROVIDER" }, { no: 2, name: "TEXT_SEARCH_PROVIDER_TYPE_SEARCH_PROCESS", localName: "SEARCH_PROCESS" }, { no: 3, name: "TEXT_SEARCH_PROVIDER_TYPE_AI_TEXT_SEARCH_PROVIDER", localName: "AI_TEXT_SEARCH_PROVIDER" }]), Oc = wa.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ISearchEngineStats", () => [{ no: 1, name: "file_walk_time", kind: "scalar", T: 5 }, { no: 2, name: "directories_walked", kind: "scalar", T: 5 }, { no: 3, name: "files_walked", kind: "scalar", T: 5 }, { no: 4, name: "cmd_time", kind: "scalar", T: 5 }, { no: 5, name: "cmd_result_count", kind: "scalar", T: 5, opt: true }], { localName: "RipgrepSearchResultInternal_ISearchEngineStats" }), Uc = wa.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.ICachedSearchStats", () => [{ no: 1, name: "cache_was_resolved", kind: "scalar", T: 8 }, { no: 2, name: "cache_lookup_time", kind: "scalar", T: 5 }, { no: 3, name: "cache_filter_time", kind: "scalar", T: 5 }, { no: 4, name: "cache_entry_count", kind: "scalar", T: 5 }], { localName: "RipgrepSearchResultInternal_ICachedSearchStats" }), Lc = wa.makeMessageType("aiserver.v1.RipgrepSearchResultInternal.IFileSearchProviderStats", () => [{ no: 1, name: "provider_time", kind: "scalar", T: 5 }, { no: 2, name: "post_process_time", kind: "scalar", T: 5 }], { localName: "RipgrepSearchResultInternal_IFileSearchProviderStats" }), Pc = wa.makeMessageType("aiserver.v1.ReadSemsearchFilesParams", () => [{ no: 1, name: "repository_info", kind: "message", T: OA }, { no: 2, name: "code_results", kind: "message", T: MA, repeated: true }, { no: 3, name: "query", kind: "scalar", T: 9 }, { no: 4, name: "pr_references", kind: "message", T: Ld, repeated: true }, { no: 5, name: "pr_search_on", kind: "scalar", T: 8, opt: true }]), xc = wa.makeMessageType("aiserver.v1.MissingFile", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "missing_reason", kind: "enum", T: wa.getEnumType(Gc) }, { no: 3, name: "num_lines", kind: "scalar", T: 5, opt: true }]), Gc = wa.makeEnum("aiserver.v1.MissingFile.MissingReason", [{ no: 0, name: "MISSING_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "MISSING_REASON_TOO_LARGE", localName: "TOO_LARGE" }, { no: 2, name: "MISSING_REASON_NOT_FOUND", localName: "NOT_FOUND" }]), Yc = wa.makeMessageType("aiserver.v1.Knowledge", () => [{ no: 1, name: "knowledge", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9 }]), Jc = wa.makeMessageType("aiserver.v1.ToolPullRequestResult", () => [{ no: 1, name: "sha", kind: "scalar", T: 9 }, { no: 2, name: "full_pr_contents", kind: "scalar", T: 9 }, { no: 3, name: "score", kind: "scalar", T: 2 }, { no: 4, name: "title", kind: "scalar", T: 9, opt: true }, { no: 5, name: "summary", kind: "scalar", T: 9, opt: true }, { no: 6, name: "pr_number", kind: "scalar", T: 13, opt: true }, { no: 7, name: "changed_files", kind: "scalar", T: 9, repeated: true }, { no: 8, name: "author", kind: "scalar", T: 9, opt: true }, { no: 9, name: "date", kind: "scalar", T: 9, opt: true }]), Vc = wa.makeMessageType("aiserver.v1.ReadSemsearchFilesResult", () => [{ no: 1, name: "code_results", kind: "message", T: MA, repeated: true }, { no: 2, name: "all_files", kind: "message", T: Do, repeated: true }, { no: 3, name: "missing_files", kind: "message", T: xc, repeated: true }, { no: 4, name: "knowledge_results", kind: "message", T: Yc, repeated: true }, { no: 5, name: "pr_results", kind: "message", T: Jc, repeated: true }, { no: 6, name: "git_remote_url", kind: "scalar", T: 9, opt: true }, { no: 7, name: "pr_hydration_timed_out", kind: "scalar", T: 8, opt: true }]), qc = wa.makeMessageType("aiserver.v1.SemanticSearchFullParams", () => [{ no: 1, name: "repository_info", kind: "message", T: OA }, { no: 2, name: "query", kind: "scalar", T: 9 }, { no: 3, name: "include_pattern", kind: "scalar", T: 9, opt: true }, { no: 4, name: "exclude_pattern", kind: "scalar", T: 9, opt: true }, { no: 5, name: "top_k", kind: "scalar", T: 5 }, { no: 6, name: "pr_references", kind: "message", T: Ld, repeated: true }, { no: 7, name: "pr_search_on", kind: "scalar", T: 8, opt: true }, { no: 8, name: "explanation", kind: "scalar", T: 9, opt: true }, { no: 9, name: "code_results", kind: "message", T: MA, repeated: true }]), Hc = wa.makeMessageType("aiserver.v1.SemanticSearchFullResult", () => [{ no: 1, name: "code_results", kind: "message", T: MA, repeated: true }, { no: 2, name: "all_files", kind: "message", T: Do, repeated: true }, { no: 3, name: "missing_files", kind: "message", T: xc, repeated: true }, { no: 4, name: "knowledge_results", kind: "message", T: Yc, repeated: true }, { no: 5, name: "pr_results", kind: "message", T: Jc, repeated: true }, { no: 6, name: "git_remote_url", kind: "scalar", T: 9, opt: true }, { no: 7, name: "pr_hydration_timed_out", kind: "scalar", T: 8, opt: true }]), Wc = wa.makeMessageType("aiserver.v1.DeleteFileParams", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }]), Kc = wa.makeMessageType("aiserver.v1.DeleteFileResult", () => [{ no: 1, name: "rejected", kind: "scalar", T: 8 }, { no: 2, name: "file_non_existent", kind: "scalar", T: 8 }, { no: 3, name: "file_deleted_successfully", kind: "scalar", T: 8 }]), jc = wa.makeMessageType("aiserver.v1.BuiltinToolCall", () => [{ no: 1, name: "tool", kind: "enum", T: wa.getEnumType(Rl) }, { no: 2, name: "search_params", kind: "message", T: km, oneof: "params" }, { no: 3, name: "read_chunk_params", kind: "message", T: Cm, oneof: "params" }, { no: 4, name: "gotodef_params", kind: "message", T: Dm, oneof: "params" }, { no: 5, name: "edit_params", kind: "message", T: Um, oneof: "params" }, { no: 6, name: "undo_edit_params", kind: "message", T: Bm, oneof: "params" }, { no: 7, name: "end_params", kind: "message", T: Qm, oneof: "params" }, { no: 8, name: "new_file_params", kind: "message", T: dm, oneof: "params" }, { no: 9, name: "add_test_params", kind: "message", T: Ym, oneof: "params" }, { no: 10, name: "run_test_params", kind: "message", T: Hm, oneof: "params" }, { no: 11, name: "delete_test_params", kind: "message", T: Zm, oneof: "params" }, { no: 12, name: "save_file_params", kind: "message", T: $m, oneof: "params" }, { no: 13, name: "get_tests_params", kind: "message", T: Km, oneof: "params" }, { no: 14, name: "get_symbols_params", kind: "message", T: nd, oneof: "params" }, { no: 15, name: "semantic_search_params", kind: "message", T: gm, oneof: "params" }, { no: 16, name: "get_project_structure_params", kind: "message", T: lm, oneof: "params" }, { no: 17, name: "create_rm_files_params", kind: "message", T: im, oneof: "params" }, { no: 18, name: "run_terminal_commands_params", kind: "message", T: om, oneof: "params" }, { no: 19, name: "new_edit_params", kind: "message", T: Fm, oneof: "params" }, { no: 20, name: "read_with_linter_params", kind: "message", T: tm, oneof: "params" }, { no: 21, name: "add_ui_step_params", kind: "message", T: Zc, oneof: "params" }, { no: 23, name: "read_semsearch_files_params", kind: "message", T: Pc, oneof: "params" }, { no: 26, name: "delete_file_params", kind: "message", T: Wc, oneof: "params" }, { no: 22, name: "tool_call_id", kind: "scalar", T: 9, opt: true }]), Xc = wa.makeMessageType("aiserver.v1.BuiltinToolResult", () => [{ no: 1, name: "tool", kind: "enum", T: wa.getEnumType(Rl) }, { no: 2, name: "search_result", kind: "message", T: _m, oneof: "result" }, { no: 3, name: "read_chunk_result", kind: "message", T: fm, oneof: "result" }, { no: 4, name: "gotodef_result", kind: "message", T: bm, oneof: "result" }, { no: 5, name: "edit_result", kind: "message", T: Pm, oneof: "result" }, { no: 6, name: "undo_edit_result", kind: "message", T: Rm, oneof: "result" }, { no: 7, name: "end_result", kind: "message", T: Nm, oneof: "result" }, { no: 8, name: "new_file_result", kind: "message", T: ym, oneof: "result" }, { no: 9, name: "add_test_result", kind: "message", T: Jm, oneof: "result" }, { no: 10, name: "run_test_result", kind: "message", T: Wm, oneof: "result" }, { no: 11, name: "delete_test_result", kind: "message", T: zm, oneof: "result" }, { no: 12, name: "save_file_result", kind: "message", T: ed, oneof: "result" }, { no: 13, name: "get_tests_result", kind: "message", T: jm, oneof: "result" }, { no: 14, name: "get_symbols_result", kind: "message", T: td, oneof: "result" }, { no: 15, name: "semantic_search_result", kind: "message", T: pm, oneof: "result" }, { no: 16, name: "get_project_structure_result", kind: "message", T: cm, oneof: "result" }, { no: 17, name: "create_rm_files_result", kind: "message", T: Am, oneof: "result" }, { no: 18, name: "run_terminal_commands_result", kind: "message", T: rm, oneof: "result" }, { no: 19, name: "new_edit_result", kind: "message", T: Om, oneof: "result" }, { no: 20, name: "read_with_linter_result", kind: "message", T: sm, oneof: "result" }, { no: 21, name: "add_ui_step_result", kind: "message", T: em, oneof: "result" }, { no: 22, name: "read_semsearch_files_result", kind: "message", T: Vc, oneof: "result" }, { no: 24, name: "delete_file_result", kind: "message", T: Kc, oneof: "result" }]), Zc = wa.makeMessageType("aiserver.v1.AddUiStepParams", () => [{ no: 1, name: "conversation_id", kind: "scalar", T: 9 }, { no: 2, name: "search_results", kind: "message", T: $c, oneof: "step" }]), zc = wa.makeMessageType("aiserver.v1.AddUiStepParams.SearchResult", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }], { localName: "AddUiStepParams_SearchResult" }), $c = wa.makeMessageType("aiserver.v1.AddUiStepParams.SearchResults", () => [{ no: 1, name: "search_results", kind: "message", T: zc, repeated: true }], { localName: "AddUiStepParams_SearchResults" }), em = wa.makeMessageType("aiserver.v1.AddUiStepResult", []), nm = wa.makeMessageType("aiserver.v1.ToolCall", () => [{ no: 1, name: "builtin_tool_call", kind: "message", T: jc, oneof: "tool_call" }, { no: 2, name: "custom_tool_call", kind: "message", T: vm, oneof: "tool_call" }]), am = wa.makeMessageType("aiserver.v1.ToolResult", () => [{ no: 1, name: "builtin_tool_result", kind: "message", T: Xc, oneof: "tool_result" }, { no: 2, name: "custom_tool_result", kind: "message", T: Sm, oneof: "tool_result" }, { no: 3, name: "error_tool_result", kind: "message", T: Mm, oneof: "tool_result" }]), tm = wa.makeMessageType("aiserver.v1.ReadWithLinterParams", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }]), sm = wa.makeMessageType("aiserver.v1.ReadWithLinterResult", () => [{ no: 1, name: "contents", kind: "scalar", T: 9 }, { no: 2, name: "diagnostics", kind: "message", T: wo, repeated: true }]), om = wa.makeMessageType("aiserver.v1.RunTerminalCommandsParams", () => [{ no: 1, name: "commands", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "commands_uuid", kind: "scalar", T: 9 }]), rm = wa.makeMessageType("aiserver.v1.RunTerminalCommandsResult", () => [{ no: 1, name: "outputs", kind: "scalar", T: 9, repeated: true }]), im = wa.makeMessageType("aiserver.v1.CreateRmFilesParams", () => [{ no: 1, name: "removed_file_paths", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "created_file_paths", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "created_directory_paths", kind: "scalar", T: 9, repeated: true }]), Am = wa.makeMessageType("aiserver.v1.CreateRmFilesResult", () => [{ no: 1, name: "created_file_paths", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "removed_file_paths", kind: "scalar", T: 9, repeated: true }]), lm = wa.makeMessageType("aiserver.v1.GetProjectStructureParams", []), cm = wa.makeMessageType("aiserver.v1.GetProjectStructureResult", () => [{ no: 1, name: "files", kind: "message", T: mm, repeated: true }, { no: 2, name: "root_workspace_path", kind: "scalar", T: 9 }]), mm = wa.makeMessageType("aiserver.v1.GetProjectStructureResult.File", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "outline", kind: "scalar", T: 9 }], { localName: "GetProjectStructureResult_File" }), dm = wa.makeMessageType("aiserver.v1.NewFileParams", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }]), gm = wa.makeMessageType("aiserver.v1.SemanticSearchParams", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }, { no: 2, name: "include_pattern", kind: "scalar", T: 9, opt: true }, { no: 3, name: "exclude_pattern", kind: "scalar", T: 9, opt: true }, { no: 4, name: "top_k", kind: "scalar", T: 5 }, { no: 5, name: "index_id", kind: "scalar", T: 9, opt: true }, { no: 6, name: "grab_whole_file", kind: "scalar", T: 8 }]), um = wa.makeMessageType("aiserver.v1.Range", () => [{ no: 1, name: "start_line", kind: "scalar", T: 5 }, { no: 2, name: "start_character", kind: "scalar", T: 5 }, { no: 3, name: "end_line", kind: "scalar", T: 5 }, { no: 4, name: "end_character", kind: "scalar", T: 5 }]), Em = wa.makeMessageType("aiserver.v1.MatchRange", () => [{ no: 1, name: "start", kind: "scalar", T: 5 }, { no: 2, name: "end", kind: "scalar", T: 5 }]), pm = wa.makeMessageType("aiserver.v1.SemanticSearchResult", () => [{ no: 1, name: "results", kind: "message", T: Tm, repeated: true }, { no: 2, name: "files", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }]), Tm = wa.makeMessageType("aiserver.v1.SemanticSearchResult.Item", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "score", kind: "scalar", T: 2 }, { no: 3, name: "content", kind: "scalar", T: 9 }, { no: 4, name: "range", kind: "message", T: ko }, { no: 5, name: "original_content", kind: "scalar", T: 9, opt: true }, { no: 6, name: "detailed_lines", kind: "message", T: yo, repeated: true }], { localName: "SemanticSearchResult_Item" }), km = wa.makeMessageType("aiserver.v1.SearchParams", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }, { no: 2, name: "regex", kind: "scalar", T: 8 }, { no: 3, name: "include_pattern", kind: "scalar", T: 9 }, { no: 4, name: "exclude_pattern", kind: "scalar", T: 9 }, { no: 5, name: "filename_search", kind: "scalar", T: 8 }]), Im = wa.makeMessageType("aiserver.v1.SearchToolFileSearchResult", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "num_matches", kind: "scalar", T: 5 }, { no: 3, name: "potentially_relevant_lines", kind: "message", T: hm, repeated: true }, { no: 4, name: "cropped", kind: "scalar", T: 8 }]), hm = wa.makeMessageType("aiserver.v1.SearchToolFileSearchResult.Line", () => [{ no: 1, name: "line_number", kind: "scalar", T: 5 }, { no: 2, name: "text", kind: "scalar", T: 9 }], { localName: "SearchToolFileSearchResult_Line" }), _m = wa.makeMessageType("aiserver.v1.SearchResult", () => [{ no: 1, name: "file_results", kind: "message", T: Im, repeated: true }, { no: 2, name: "num_total_matches", kind: "scalar", T: 5 }, { no: 3, name: "num_total_matched_files", kind: "scalar", T: 5 }, { no: 4, name: "num_total_may_be_incomplete", kind: "scalar", T: 8 }, { no: 5, name: "files_only", kind: "scalar", T: 8 }]), Cm = wa.makeMessageType("aiserver.v1.ReadChunkParams", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "start_line_number", kind: "scalar", T: 5 }, { no: 3, name: "num_lines", kind: "scalar", T: 5, opt: true }]), fm = wa.makeMessageType("aiserver.v1.ReadChunkResult", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "start_line_number", kind: "scalar", T: 5 }, { no: 3, name: "lines", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "total_num_lines", kind: "scalar", T: 5 }, { no: 5, name: "cropped", kind: "scalar", T: 8 }]), Bm = wa.makeMessageType("aiserver.v1.UndoEditParams", []), Qm = wa.makeMessageType("aiserver.v1.EndParams", []), ym = wa.makeMessageType("aiserver.v1.NewFileResult", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "file_total_lines", kind: "scalar", T: 5 }]), Rm = wa.makeMessageType("aiserver.v1.UndoEditResult", () => [{ no: 1, name: "feedback", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "context_start_line_number", kind: "scalar", T: 5 }, { no: 3, name: "context_lines", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "context_total_num_lines", kind: "scalar", T: 5 }, { no: 6, name: "file_total_lines", kind: "scalar", T: 5 }]), Nm = wa.makeMessageType("aiserver.v1.EndResult", []), vm = wa.makeMessageType("aiserver.v1.CustomToolCall", () => [{ no: 1, name: "tool_id", kind: "scalar", T: 9 }, { no: 2, name: "params", kind: "scalar", T: 9 }]), Sm = wa.makeMessageType("aiserver.v1.CustomToolResult", () => [{ no: 1, name: "tool_id", kind: "scalar", T: 9 }, { no: 2, name: "result", kind: "scalar", T: 9 }]), Dm = wa.makeMessageType("aiserver.v1.GotodefParams", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "symbol", kind: "scalar", T: 9 }, { no: 3, name: "start_line", kind: "scalar", T: 5 }, { no: 4, name: "end_line", kind: "scalar", T: 5 }]), wm = wa.makeMessageType("aiserver.v1.GotodefDefinition", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "fully_qualified_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "symbol_kind", kind: "scalar", T: 9, opt: true }, { no: 4, name: "start_line", kind: "scalar", T: 5 }, { no: 5, name: "end_line", kind: "scalar", T: 5 }, { no: 6, name: "code_context_lines", kind: "scalar", T: 9, repeated: true }]), bm = wa.makeMessageType("aiserver.v1.GotodefResult", () => [{ no: 1, name: "definitions", kind: "message", T: wm, repeated: true }]), Mm = wa.makeMessageType("aiserver.v1.ErrorToolResult", () => [{ no: 1, name: "error_message", kind: "scalar", T: 9 }]), Fm = wa.makeMessageType("aiserver.v1.NewEditParams", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "start_line_number", kind: "scalar", T: 5, opt: true }, { no: 3, name: "end_line_number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "text", kind: "scalar", T: 9 }, { no: 5, name: "edit_id", kind: "scalar", T: 9 }, { no: 6, name: "first_edit", kind: "scalar", T: 8 }]), Om = wa.makeMessageType("aiserver.v1.NewEditResult", []), Um = wa.makeMessageType("aiserver.v1.EditParams", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "line_number", kind: "scalar", T: 5, opt: true }, { no: 3, name: "replace_num_lines", kind: "scalar", T: 5 }, { no: 4, name: "new_lines", kind: "scalar", T: 9, repeated: true }, { no: 7, name: "replace_whole_file", kind: "scalar", T: 8, opt: true }, { no: 5, name: "edit_id", kind: "scalar", T: 9 }, { no: 6, name: "frontend_edit_type", kind: "enum", T: wa.getEnumType(Lm) }, { no: 8, name: "auto_fix_all_linter_errors_in_file", kind: "scalar", T: 8, opt: true }]), Lm = wa.makeEnum("aiserver.v1.EditParams.FrontendEditType", [{ no: 0, name: "FRONTEND_EDIT_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "FRONTEND_EDIT_TYPE_INLINE_DIFFS", localName: "INLINE_DIFFS" }, { no: 2, name: "FRONTEND_EDIT_TYPE_SIMPLE", localName: "SIMPLE" }]), Pm = wa.makeMessageType("aiserver.v1.EditResult", () => [{ no: 1, name: "feedback", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "context_start_line_number", kind: "scalar", T: 5 }, { no: 3, name: "context_lines", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "file", kind: "scalar", T: 9 }, { no: 5, name: "file_total_lines", kind: "scalar", T: 5 }, { no: 6, name: "structured_feedback", kind: "message", T: Gm, repeated: true }]), xm = wa.makeMessageType("aiserver.v1.EditResult.RelatedInformation", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "start_line_number", kind: "scalar", T: 5 }, { no: 3, name: "end_line_number", kind: "scalar", T: 5 }, { no: 4, name: "relative_workspace_path", kind: "scalar", T: 9 }], { localName: "EditResult_RelatedInformation" }), Gm = wa.makeMessageType("aiserver.v1.EditResult.Feedback", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "severity", kind: "scalar", T: 9 }, { no: 3, name: "start_line_number", kind: "scalar", T: 5 }, { no: 4, name: "end_line_number", kind: "scalar", T: 5 }, { no: 5, name: "related_information", kind: "message", T: xm, repeated: true }], { localName: "EditResult_Feedback" }), Ym = wa.makeMessageType("aiserver.v1.AddTestParams", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "test_name", kind: "scalar", T: 9 }, { no: 3, name: "test_code", kind: "scalar", T: 9 }]), Jm = wa.makeMessageType("aiserver.v1.AddTestResult", () => [{ no: 1, name: "feedback", kind: "message", T: qm, repeated: true }]), Vm = wa.makeMessageType("aiserver.v1.AddTestResult.RelatedInformation", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "start_line_number", kind: "scalar", T: 5 }, { no: 3, name: "end_line_number", kind: "scalar", T: 5 }, { no: 4, name: "relative_workspace_path", kind: "scalar", T: 9 }], { localName: "AddTestResult_RelatedInformation" }), qm = wa.makeMessageType("aiserver.v1.AddTestResult.Feedback", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "severity", kind: "scalar", T: 9 }, { no: 3, name: "start_line_number", kind: "scalar", T: 5 }, { no: 4, name: "end_line_number", kind: "scalar", T: 5 }, { no: 5, name: "related_information", kind: "message", T: Vm, repeated: true }], { localName: "AddTestResult_Feedback" }), Hm = wa.makeMessageType("aiserver.v1.RunTestParams", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "test_name", kind: "scalar", T: 9, opt: true }]), Wm = wa.makeMessageType("aiserver.v1.RunTestResult", () => [{ no: 1, name: "result", kind: "scalar", T: 9 }]), Km = wa.makeMessageType("aiserver.v1.GetTestsParams", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }]), jm = wa.makeMessageType("aiserver.v1.GetTestsResult", () => [{ no: 1, name: "tests", kind: "message", T: Xm, repeated: true }]), Xm = wa.makeMessageType("aiserver.v1.GetTestsResult.Test", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "lines", kind: "scalar", T: 9, repeated: true }], { localName: "GetTestsResult_Test" }), Zm = wa.makeMessageType("aiserver.v1.DeleteTestParams", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "test_name", kind: "scalar", T: 9, opt: true }]), zm = wa.makeMessageType("aiserver.v1.DeleteTestResult", []), $m = wa.makeMessageType("aiserver.v1.SaveFileParams", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }]), ed = wa.makeMessageType("aiserver.v1.SaveFileResult", []), nd = wa.makeMessageType("aiserver.v1.GetSymbolsParams", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "line_range", kind: "message", T: ad, opt: true }, { no: 3, name: "include_children", kind: "scalar", T: 8 }]), ad = wa.makeMessageType("aiserver.v1.GetSymbolsParams.LineRange", () => [{ no: 1, name: "start_line_number", kind: "scalar", T: 5 }, { no: 2, name: "end_line_number_inclusive", kind: "scalar", T: 5 }], { localName: "GetSymbolsParams_LineRange" }), td = wa.makeMessageType("aiserver.v1.GetSymbolsResult", () => [{ no: 1, name: "symbols", kind: "message", T: Zo, repeated: true }]), sd = wa.makeMessageType("aiserver.v1.ShellCommandParsingResult", () => [{ no: 1, name: "parsing_failed", kind: "scalar", T: 8 }, { no: 2, name: "executable_commands", kind: "message", T: rd, repeated: true }, { no: 3, name: "has_redirects", kind: "scalar", T: 8 }, { no: 4, name: "has_command_substitution", kind: "scalar", T: 8 }, { no: 5, name: "all_redirects_are_dev_null", kind: "scalar", T: 8, opt: true }, { no: 6, name: "redirects", kind: "message", T: id, repeated: true }]), od = wa.makeMessageType("aiserver.v1.ShellCommandParsingResult.ExecutableCommandArg", () => [{ no: 1, name: "type", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 9 }], { localName: "ShellCommandParsingResult_ExecutableCommandArg" }), rd = wa.makeMessageType("aiserver.v1.ShellCommandParsingResult.ExecutableCommand", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "args", kind: "message", T: od, repeated: true }, { no: 3, name: "full_text", kind: "scalar", T: 9 }], { localName: "ShellCommandParsingResult_ExecutableCommand" }), id = wa.makeMessageType("aiserver.v1.ShellCommandParsingResult.Redirect", () => [{ no: 1, name: "operator", kind: "scalar", T: 9 }, { no: 2, name: "destination_fds", kind: "scalar", T: 13, repeated: true }, { no: 3, name: "target_node_type", kind: "scalar", T: 9 }, { no: 4, name: "target_text", kind: "scalar", T: 9, opt: true }], { localName: "ShellCommandParsingResult_Redirect" }), Ad = wa.makeMessageType("aiserver.v1.RunTerminalCommandV2Params", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "cwd", kind: "scalar", T: 9, opt: true }, { no: 3, name: "new_session", kind: "scalar", T: 8, opt: true }, { no: 4, name: "options", kind: "message", T: ld, opt: true }, { no: 5, name: "is_background", kind: "scalar", T: 8 }, { no: 6, name: "require_user_approval", kind: "scalar", T: 8 }, { no: 7, name: "parsing_result", kind: "message", T: sd, opt: true }, { no: 8, name: "idle_timeout_seconds", kind: "scalar", T: 5, opt: true }, { no: 9, name: "requested_sandbox_policy", kind: "message", T: fr, opt: true }, { no: 10, name: "file_output_threshold_bytes", kind: "scalar", T: 3, opt: true }, { no: 11, name: "command_description", kind: "scalar", T: 9, opt: true }, { no: 12, name: "classifier_result", kind: "message", T: Pr, opt: true }]), ld = wa.makeMessageType("aiserver.v1.RunTerminalCommandV2Params.ExecutionOptions", () => [{ no: 1, name: "timeout", kind: "scalar", T: 5, opt: true }, { no: 2, name: "skip_ai_check", kind: "scalar", T: 8, opt: true }, { no: 3, name: "command_run_timeout_ms", kind: "scalar", T: 5, opt: true }, { no: 4, name: "command_change_check_interval_ms", kind: "scalar", T: 5, opt: true }, { no: 5, name: "ai_finish_check_max_attempts", kind: "scalar", T: 5, opt: true }, { no: 6, name: "ai_finish_check_interval_ms", kind: "scalar", T: 5, opt: true }, { no: 7, name: "delayer_interval_ms", kind: "scalar", T: 5, opt: true }, { no: 8, name: "ai_check_for_hangs", kind: "scalar", T: 8, opt: true }], { localName: "RunTerminalCommandV2Params_ExecutionOptions" }), cd = wa.makeMessageType("aiserver.v1.OutputLocation", () => [{ no: 1, name: "file_path", kind: "scalar", T: 9 }, { no: 2, name: "size_bytes", kind: "scalar", T: 3 }, { no: 3, name: "line_count", kind: "scalar", T: 3 }]), md = wa.makeMessageType("aiserver.v1.RunTerminalCommandV2Result", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }, { no: 2, name: "exit_code", kind: "scalar", T: 5 }, { no: 3, name: "rejected", kind: "scalar", T: 8, opt: true }, { no: 4, name: "popped_out_into_background", kind: "scalar", T: 8 }, { no: 5, name: "is_running_in_background", kind: "scalar", T: 8 }, { no: 6, name: "not_interrupted", kind: "scalar", T: 8 }, { no: 7, name: "resulting_working_directory", kind: "scalar", T: 9 }, { no: 8, name: "did_user_change", kind: "scalar", T: 8 }, { no: 9, name: "ended_reason", kind: "enum", T: wa.getEnumType(Nl) }, { no: 10, name: "exit_code_v2", kind: "scalar", T: 5, opt: true }, { no: 11, name: "updated_command", kind: "scalar", T: 9, opt: true }, { no: 12, name: "output_raw", kind: "scalar", T: 9 }, { no: 13, name: "human_review_v2", kind: "message", T: ac, opt: true }, { no: 14, name: "effective_sandbox_policy", kind: "message", T: fr, opt: true }, { no: 15, name: "terminal_instance_id", kind: "scalar", T: 5, opt: true }, { no: 16, name: "output_location", kind: "message", T: cd, opt: true }, { no: 17, name: "terminal_instance_path", kind: "scalar", T: 9, opt: true }, { no: 18, name: "background_shell_id", kind: "scalar", T: 13, opt: true }]), dd = wa.makeMessageType("aiserver.v1.WebSearchParams", () => [{ no: 1, name: "search_term", kind: "scalar", T: 9 }]), gd = wa.makeMessageType("aiserver.v1.WebSearchResult", () => [{ no: 1, name: "references", kind: "message", T: ud, repeated: true }, { no: 2, name: "is_final", kind: "scalar", T: 8, opt: true }, { no: 3, name: "rejected", kind: "scalar", T: 8, opt: true }]), ud = wa.makeMessageType("aiserver.v1.WebSearchResult.WebReference", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "url", kind: "scalar", T: 9 }, { no: 3, name: "chunk", kind: "scalar", T: 9 }], { localName: "WebSearchResult_WebReference" }), Ed = wa.makeMessageType("aiserver.v1.MCPParams", () => [{ no: 1, name: "tools", kind: "message", T: pd, repeated: true }, { no: 2, name: "file_output_threshold_bytes", kind: "scalar", T: 3, opt: true }]), pd = wa.makeMessageType("aiserver.v1.MCPParams.Tool", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "description", kind: "scalar", T: 9 }, { no: 3, name: "parameters", kind: "scalar", T: 9 }, { no: 4, name: "server_name", kind: "scalar", T: 9 }, { no: 5, name: "transcript_display", kind: "message", T: Td, opt: true }], { localName: "MCPParams_Tool" }), Td = wa.makeMessageType("aiserver.v1.MCPParams.TranscriptDisplay", () => [{ no: 1, name: "loading", kind: "scalar", T: 9 }, { no: 2, name: "success", kind: "scalar", T: 9 }, { no: 3, name: "error", kind: "scalar", T: 9 }], { localName: "MCPParams_TranscriptDisplay" }), kd = wa.makeMessageType("aiserver.v1.MCPResult", () => [{ no: 1, name: "selected_tool", kind: "scalar", T: 9 }, { no: 2, name: "result", kind: "scalar", T: 9 }]), Id = wa.makeMessageType("aiserver.v1.ListMcpResourcesParams", () => [{ no: 1, name: "server", kind: "scalar", T: 9, opt: true }]), hd = wa.makeMessageType("aiserver.v1.ListMcpResourcesResult", () => [{ no: 1, name: "resources", kind: "message", T: _d, repeated: true }]), _d = wa.makeMessageType("aiserver.v1.ListMcpResourcesResult.MCPResource", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }, { no: 4, name: "mime_type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "server", kind: "scalar", T: 9 }, { no: 6, name: "annotations", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }], { localName: "ListMcpResourcesResult_MCPResource" }), Cd = wa.makeMessageType("aiserver.v1.ReadMcpResourceParams", () => [{ no: 1, name: "server", kind: "scalar", T: 9 }, { no: 2, name: "uri", kind: "scalar", T: 9 }, { no: 3, name: "download_path", kind: "scalar", T: 9, opt: true }]), fd = wa.makeMessageType("aiserver.v1.ReadMcpResourceResult", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }, { no: 4, name: "mime_type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "text", kind: "scalar", T: 9, oneof: "content" }, { no: 6, name: "blob", kind: "scalar", T: 12, oneof: "content" }, { no: 7, name: "annotations", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }]), Bd = wa.makeMessageType("aiserver.v1.CallMcpToolParams", () => [{ no: 1, name: "server", kind: "scalar", T: 9 }, { no: 2, name: "tool_name", kind: "scalar", T: 9 }, { no: 3, name: "tool_args", kind: "message", T: ks }]), Qd = wa.makeMessageType("aiserver.v1.CallMcpToolResult", () => [{ no: 1, name: "server", kind: "scalar", T: 9 }, { no: 2, name: "tool_name", kind: "scalar", T: 9 }, { no: 3, name: "result", kind: "message", T: ks }]), yd = wa.makeMessageType("aiserver.v1.GetMcpToolsParams", () => [{ no: 1, name: "server", kind: "scalar", T: 9, opt: true }, { no: 2, name: "tool_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "pattern", kind: "scalar", T: 9, opt: true }]), Rd = wa.makeMessageType("aiserver.v1.GetMcpToolsResult", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "output_file_path", kind: "scalar", T: 9, opt: true }]), Nd = wa.makeMessageType("aiserver.v1.SearchSymbolsParams", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }]), vd = wa.makeMessageType("aiserver.v1.SearchSymbolsResult", () => [{ no: 1, name: "matches", kind: "message", T: Sd, repeated: true }, { no: 2, name: "rejected", kind: "scalar", T: 8, opt: true }]), Sd = wa.makeMessageType("aiserver.v1.SearchSymbolsResult.SymbolMatch", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "uri", kind: "scalar", T: 9 }, { no: 3, name: "range", kind: "message", T: um }, { no: 4, name: "secondary_text", kind: "scalar", T: 9 }, { no: 5, name: "label_matches", kind: "message", T: Em, repeated: true }, { no: 6, name: "description_matches", kind: "message", T: Em, repeated: true }, { no: 7, name: "score", kind: "scalar", T: 1 }], { localName: "SearchSymbolsResult_SymbolMatch" }), Dd = wa.makeMessageType("aiserver.v1.BackgroundComposerFollowupParams", () => [{ no: 1, name: "proposed_followup", kind: "scalar", T: 9 }, { no: 2, name: "bc_id", kind: "scalar", T: 9 }]), wd = wa.makeMessageType("aiserver.v1.BackgroundComposerFollowupResult", () => [{ no: 1, name: "proposed_followup", kind: "scalar", T: 9 }, { no: 2, name: "is_sent", kind: "scalar", T: 8 }]), bd = wa.makeMessageType("aiserver.v1.KnowledgeBaseParams", () => [{ no: 1, name: "knowledge_to_store", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9 }, { no: 3, name: "existing_knowledge_id", kind: "scalar", T: 9, opt: true }, { no: 4, name: "action", kind: "scalar", T: 9, opt: true }]), Md = wa.makeMessageType("aiserver.v1.KnowledgeBaseResult", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }, { no: 2, name: "confirmation_message", kind: "scalar", T: 9 }, { no: 3, name: "id", kind: "scalar", T: 9 }]), Fd = wa.makeMessageType("aiserver.v1.FetchPullRequestParams", () => [{ no: 1, name: "pull_number_or_commit_hash", kind: "scalar", T: 9 }, { no: 2, name: "repo", kind: "scalar", T: 9, opt: true }, { no: 3, name: "is_github", kind: "scalar", T: 8, opt: true }]), Od = wa.makeMessageType("aiserver.v1.FetchPullRequestResult", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "pr_number", kind: "scalar", T: 13 }, { no: 3, name: "title", kind: "scalar", T: 9 }, { no: 4, name: "body", kind: "scalar", T: 9 }, { no: 5, name: "author", kind: "scalar", T: 9 }, { no: 6, name: "date", kind: "scalar", T: 9 }, { no: 7, name: "diff", kind: "scalar", T: 9 }, { no: 8, name: "sha", kind: "scalar", T: 9, opt: true }, { no: 9, name: "external_link", kind: "scalar", T: 9, opt: true }, { no: 10, name: "url", kind: "scalar", T: 9, opt: true }, { no: 11, name: "comments", kind: "message", T: Ud, repeated: true }, { no: 12, name: "labels", kind: "scalar", T: 9, repeated: true }, { no: 13, name: "assignees", kind: "scalar", T: 9, repeated: true }, { no: 14, name: "is_issue", kind: "scalar", T: 8, opt: true }, { no: 15, name: "state", kind: "scalar", T: 9, opt: true }, { no: 16, name: "prompt_connect_github", kind: "scalar", T: 8, opt: true }]), Ud = wa.makeMessageType("aiserver.v1.IssueComment", () => [{ no: 1, name: "id", kind: "scalar", T: 13 }, { no: 2, name: "body", kind: "scalar", T: 9 }, { no: 3, name: "author", kind: "scalar", T: 9, opt: true }, { no: 4, name: "created_at", kind: "scalar", T: 9 }, { no: 5, name: "updated_at", kind: "scalar", T: 9 }, { no: 6, name: "author_association", kind: "scalar", T: 9, opt: true }]), Ld = wa.makeMessageType("aiserver.v1.PullRequestReference", () => [{ no: 1, name: "sha", kind: "scalar", T: 9 }, { no: 2, name: "score", kind: "scalar", T: 2 }, { no: 3, name: "title", kind: "scalar", T: 9, opt: true }, { no: 4, name: "summary", kind: "scalar", T: 9, opt: true }, { no: 5, name: "pr_number", kind: "scalar", T: 13, opt: true }, { no: 6, name: "author", kind: "scalar", T: 9, opt: true }, { no: 7, name: "date", kind: "scalar", T: 9, opt: true }, { no: 8, name: "changed_files", kind: "scalar", T: 9, repeated: true }]), Pd = wa.makeMessageType("aiserver.v1.DeepSearchParams", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }]), xd = wa.makeMessageType("aiserver.v1.DeepSearchResult", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }, { no: 2, name: "result", kind: "scalar", T: 9 }]), Gd = wa.makeMessageType("aiserver.v1.CreateDiagramParams", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }]), Yd = wa.makeMessageType("aiserver.v1.CreateDiagramResult", () => [{ no: 1, name: "error", kind: "scalar", T: 9, opt: true }]), Jd = wa.makeMessageType("aiserver.v1.FixLintsParams", []), Vd = wa.makeMessageType("aiserver.v1.FixLintsResult", () => [{ no: 1, name: "file_results", kind: "message", T: qd, repeated: true }]), qd = wa.makeMessageType("aiserver.v1.FixLintsResult.FileResult", () => [{ no: 1, name: "file_path", kind: "scalar", T: 9 }, { no: 2, name: "diff", kind: "message", T: jl }, { no: 3, name: "is_applied", kind: "scalar", T: 8 }, { no: 4, name: "apply_failed", kind: "scalar", T: 8 }, { no: 5, name: "error", kind: "scalar", T: 9, opt: true }, { no: 6, name: "linter_errors", kind: "message", T: qo, repeated: true }], { localName: "FixLintsResult_FileResult" }), Hd = wa.makeMessageType("aiserver.v1.ReadLintsParams", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "paths", kind: "scalar", T: 9, repeated: true }]), Wd = wa.makeMessageType("aiserver.v1.ReadLintsResult", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "linter_errors", kind: "message", T: qo, repeated: true }, { no: 3, name: "linter_errors_by_file", kind: "message", T: Ho, repeated: true }]), Kd = wa.makeMessageType("aiserver.v1.TaskParams", () => [{ no: 1, name: "task_description", kind: "scalar", T: 9 }, { no: 4, name: "task_title", kind: "scalar", T: 9 }, { no: 2, name: "async", kind: "scalar", T: 8, opt: true }, { no: 3, name: "allowed_write_directories", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "model_override", kind: "scalar", T: 9, opt: true }, { no: 6, name: "max_mode_override", kind: "scalar", T: 8, opt: true }, { no: 7, name: "default_expanded_while_running", kind: "scalar", T: 8, opt: true }]), jd = wa.makeMessageType("aiserver.v1.TaskResult", () => [{ no: 1, name: "completed_task_result", kind: "message", T: Xd, oneof: "result" }, { no: 2, name: "async_task_result", kind: "message", T: Zd, oneof: "result" }]), Xd = wa.makeMessageType("aiserver.v1.TaskResult.CompletedTaskResult", () => [{ no: 1, name: "summary", kind: "scalar", T: 9 }, { no: 2, name: "file_results", kind: "message", T: qd, repeated: true }, { no: 3, name: "user_aborted", kind: "scalar", T: 8 }, { no: 4, name: "subagent_errored", kind: "scalar", T: 8 }], { localName: "TaskResult_CompletedTaskResult" }), Zd = wa.makeMessageType("aiserver.v1.TaskResult.AsyncTaskResult", () => [{ no: 1, name: "task_id", kind: "scalar", T: 9 }, { no: 2, name: "user_aborted", kind: "scalar", T: 8 }, { no: 3, name: "subagent_errored", kind: "scalar", T: 8 }], { localName: "TaskResult_AsyncTaskResult" }), zd = wa.makeMessageType("aiserver.v1.TaskV2Params", () => [{ no: 1, name: "description", kind: "scalar", T: 9 }, { no: 2, name: "prompt", kind: "scalar", T: 9 }, { no: 3, name: "subagent_type", kind: "scalar", T: 9 }, { no: 4, name: "model", kind: "scalar", T: 9, opt: true }, { no: 5, name: "name", kind: "scalar", T: 9 }, { no: 6, name: "mode", kind: "enum", T: wa.getEnumType(JA) }]), $d = wa.makeMessageType("aiserver.v1.TaskV2Result", () => [{ no: 1, name: "agent_id", kind: "scalar", T: 9, opt: true }, { no: 2, name: "is_background", kind: "scalar", T: 8 }, { no: 3, name: "cloud_agent_bc_id", kind: "scalar", T: 9, opt: true }]), eg = wa.makeMessageType("aiserver.v1.RipgrepRawSearchParams", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9, opt: true }, { no: 3, name: "glob", kind: "scalar", T: 9, opt: true }, { no: 4, name: "output_mode", kind: "scalar", T: 9, opt: true }, { no: 5, name: "context_before", kind: "scalar", T: 5, opt: true }, { no: 6, name: "context_after", kind: "scalar", T: 5, opt: true }, { no: 7, name: "context", kind: "scalar", T: 5, opt: true }, { no: 8, name: "case_insensitive", kind: "scalar", T: 8, opt: true }, { no: 9, name: "type", kind: "scalar", T: 9, opt: true }, { no: 10, name: "head_limit", kind: "scalar", T: 5, opt: true }, { no: 11, name: "multiline", kind: "scalar", T: 8, opt: true }, { no: 12, name: "sort", kind: "scalar", T: 9, opt: true }, { no: 13, name: "sort_ascending", kind: "scalar", T: 8, opt: true }, { no: 14, name: "ignore_globs", kind: "scalar", T: 9, repeated: true }, { no: 15, name: "offset", kind: "scalar", T: 5, opt: true }]), ng = wa.makeMessageType("aiserver.v1.RipgrepRawSearchResult", () => [{ no: 1, name: "success", kind: "message", T: tg, oneof: "result" }, { no: 2, name: "error", kind: "message", T: ag, oneof: "result" }]), ag = wa.makeMessageType("aiserver.v1.RipgrepRawSearchError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), tg = wa.makeMessageType("aiserver.v1.RipgrepRawSearchSuccess", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9 }, { no: 3, name: "output_mode", kind: "scalar", T: 9 }, { no: 4, name: "workspace_results", kind: "map", K: 9, V: { kind: "message", T: sg } }, { no: 5, name: "active_editor_result", kind: "message", T: sg, opt: true }]), sg = wa.makeMessageType("aiserver.v1.RipgrepRawSearchUnionResult", () => [{ no: 1, name: "count", kind: "message", T: og, oneof: "result" }, { no: 2, name: "files", kind: "message", T: ig, oneof: "result" }, { no: 3, name: "content", kind: "message", T: lg, oneof: "result" }]), og = wa.makeMessageType("aiserver.v1.RipgrepRawSearchCountResult", () => [{ no: 1, name: "counts", kind: "message", T: rg, repeated: true }, { no: 2, name: "total_files", kind: "scalar", T: 5 }, { no: 3, name: "total_matches", kind: "scalar", T: 5 }, { no: 4, name: "client_truncated", kind: "scalar", T: 8 }, { no: 6, name: "head_limit_applied", kind: "scalar", T: 5, opt: true }, { no: 7, name: "offset_applied", kind: "scalar", T: 5, opt: true }, { no: 5, name: "ripgrep_truncated", kind: "scalar", T: 8 }]), rg = wa.makeMessageType("aiserver.v1.RipgrepRawSearchFileCount", () => [{ no: 1, name: "file", kind: "scalar", T: 9 }, { no: 2, name: "count", kind: "scalar", T: 5 }, { no: 3, name: "is_dirty", kind: "scalar", T: 8, opt: true }, { no: 4, name: "is_out_of_workspace", kind: "scalar", T: 8, opt: true }, { no: 5, name: "absolute_path", kind: "scalar", T: 9, opt: true }]), ig = wa.makeMessageType("aiserver.v1.RipgrepRawSearchFilesResult", () => [{ no: 1, name: "files", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "total_files", kind: "scalar", T: 5 }, { no: 3, name: "client_truncated", kind: "scalar", T: 8 }, { no: 4, name: "ripgrep_truncated", kind: "scalar", T: 8 }, { no: 5, name: "files_with_meta", kind: "message", T: Ag, repeated: true }, { no: 6, name: "head_limit_applied", kind: "scalar", T: 5, opt: true }, { no: 7, name: "offset_applied", kind: "scalar", T: 5, opt: true }]), Ag = wa.makeMessageType("aiserver.v1.RipgrepRawSearchFilesResult.FileEntry", () => [{ no: 1, name: "file", kind: "scalar", T: 9 }, { no: 2, name: "is_dirty", kind: "scalar", T: 8 }, { no: 3, name: "is_out_of_workspace", kind: "scalar", T: 8 }, { no: 4, name: "absolute_path", kind: "scalar", T: 9, opt: true }], { localName: "RipgrepRawSearchFilesResult_FileEntry" }), lg = wa.makeMessageType("aiserver.v1.RipgrepRawSearchContentResult", () => [{ no: 1, name: "matches", kind: "message", T: cg, repeated: true }, { no: 2, name: "total_lines", kind: "scalar", T: 5 }, { no: 3, name: "total_matched_lines", kind: "scalar", T: 5 }, { no: 4, name: "client_truncated", kind: "scalar", T: 8 }, { no: 5, name: "ripgrep_truncated", kind: "scalar", T: 8 }, { no: 6, name: "head_limit_applied", kind: "scalar", T: 5, opt: true }, { no: 7, name: "offset_applied", kind: "scalar", T: 5, opt: true }]), cg = wa.makeMessageType("aiserver.v1.RipgrepRawSearchFileMatch", () => [{ no: 1, name: "file", kind: "scalar", T: 9 }, { no: 2, name: "matches", kind: "message", T: mg, repeated: true }, { no: 3, name: "is_dirty", kind: "scalar", T: 8, opt: true }, { no: 4, name: "is_out_of_workspace", kind: "scalar", T: 8, opt: true }, { no: 5, name: "absolute_path", kind: "scalar", T: 9, opt: true }]), mg = wa.makeMessageType("aiserver.v1.RipgrepRawSearchContentMatch", () => [{ no: 1, name: "line_number", kind: "scalar", T: 5 }, { no: 2, name: "content", kind: "scalar", T: 9 }, { no: 3, name: "content_truncated", kind: "scalar", T: 8 }, { no: 4, name: "is_context_line", kind: "scalar", T: 8 }]), dg = wa.makeMessageType("aiserver.v1.AwaitTaskParams", () => [{ no: 1, name: "ids", kind: "scalar", T: 9, repeated: true }]), gg = wa.makeMessageType("aiserver.v1.AwaitTaskResult", () => [{ no: 1, name: "task_results", kind: "message", T: ug, repeated: true }, { no: 2, name: "missing_task_ids", kind: "scalar", T: 9, repeated: true }]), ug = wa.makeMessageType("aiserver.v1.AwaitTaskResult.TaskResultItem", () => [{ no: 1, name: "task_id", kind: "scalar", T: 9 }, { no: 2, name: "result", kind: "message", T: Xd }], { localName: "AwaitTaskResult_TaskResultItem" }), Eg = wa.makeMessageType("aiserver.v1.TodoReadParams", () => [{ no: 1, name: "read", kind: "scalar", T: 8 }]), pg = wa.makeMessageType("aiserver.v1.TodoItem", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "status", kind: "scalar", T: 9 }, { no: 3, name: "id", kind: "scalar", T: 9 }, { no: 4, name: "dependencies", kind: "scalar", T: 9, repeated: true }]), Tg = wa.makeMessageType("aiserver.v1.TodoReadResult", () => [{ no: 1, name: "todos", kind: "message", T: pg, repeated: true }]), kg = wa.makeMessageType("aiserver.v1.TodoWriteParams", () => [{ no: 1, name: "todos", kind: "message", T: pg, repeated: true }, { no: 2, name: "merge", kind: "scalar", T: 8 }]), Ig = wa.makeMessageType("aiserver.v1.TodoWriteResult", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }, { no: 2, name: "ready_task_ids", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "needs_in_progress_todos", kind: "scalar", T: 8 }, { no: 4, name: "final_todos", kind: "message", T: pg, repeated: true }, { no: 5, name: "initial_todos", kind: "message", T: pg, repeated: true }, { no: 6, name: "was_merge", kind: "scalar", T: 8 }]), hg = wa.makeMessageType("aiserver.v1.ListDirV2Params", () => [{ no: 1, name: "target_directory", kind: "scalar", T: 9 }, { no: 2, name: "ignore_globs", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "should_enrich_terminal_metadata", kind: "scalar", T: 8, opt: true }]), _g = wa.makeMessageType("aiserver.v1.ListDirV2Result", () => [{ no: 1, name: "directory_tree_root", kind: "message", T: Cg }]), Cg = wa.makeMessageType("aiserver.v1.ListDirV2Result.DirectoryTreeNode", () => [{ no: 1, name: "abs_path", kind: "scalar", T: 9 }, { no: 2, name: "children_dirs", kind: "message", T: Cg, repeated: true }, { no: 3, name: "children_files", kind: "message", T: fg, repeated: true }, { no: 4, name: "children_were_processed", kind: "scalar", T: 8 }, { no: 5, name: "full_subtree_extension_counts", kind: "map", K: 9, V: { kind: "scalar", T: 5 } }, { no: 6, name: "num_files", kind: "scalar", T: 5 }], { localName: "ListDirV2Result_DirectoryTreeNode" }), fg = wa.makeMessageType("aiserver.v1.ListDirV2Result.DirectoryTreeNode.File", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "terminal_metadata", kind: "message", T: $A, opt: true }], { localName: "ListDirV2Result_DirectoryTreeNode_File" }), Bg = wa.makeMessageType("aiserver.v1.ReadFileV2Params", () => [{ no: 1, name: "target_file", kind: "scalar", T: 9 }, { no: 2, name: "offset", kind: "scalar", T: 5, opt: true }, { no: 3, name: "limit", kind: "scalar", T: 5, opt: true }, { no: 4, name: "chars_limit", kind: "scalar", T: 5 }, { no: 5, name: "effective_uri", kind: "scalar", T: 9 }, { no: 6, name: "enable_line_numbers", kind: "scalar", T: 8, opt: true }]), Qg = wa.makeMessageType("aiserver.v1.ReadFileV2Result", () => [{ no: 1, name: "contents", kind: "scalar", T: 9, opt: true }, { no: 2, name: "num_characters_in_requested_range", kind: "scalar", T: 5 }, { no: 3, name: "offset_is_bigger_than_number_of_lines_in_file", kind: "scalar", T: 8, opt: true }, { no: 4, name: "total_lines_in_file", kind: "scalar", T: 5, opt: true }, { no: 5, name: "matching_cursor_rules", kind: "message", T: Ko, repeated: true }, { no: 6, name: "images", kind: "message", T: sr, repeated: true }]), yg = wa.makeMessageType("aiserver.v1.GlobFileSearchParams", () => [{ no: 1, name: "target_directory", kind: "scalar", T: 9 }, { no: 2, name: "glob_pattern", kind: "scalar", T: 9 }]), Rg = wa.makeMessageType("aiserver.v1.GlobFileSearchResult", () => [{ no: 1, name: "directories", kind: "message", T: vg, repeated: true }]), Ng = wa.makeMessageType("aiserver.v1.GlobFileSearchResult.File", () => [{ no: 1, name: "rel_path", kind: "scalar", T: 9 }], { localName: "GlobFileSearchResult_File" }), vg = wa.makeMessageType("aiserver.v1.GlobFileSearchResult.Directory", () => [{ no: 1, name: "abs_path", kind: "scalar", T: 9 }, { no: 2, name: "files", kind: "message", T: Ng, repeated: true }, { no: 3, name: "total_files", kind: "scalar", T: 5 }, { no: 4, name: "ripgrep_truncated", kind: "scalar", T: 8 }], { localName: "GlobFileSearchResult_Directory" }), Sg = wa.makeMessageType("aiserver.v1.Step", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9 }, { no: 3, name: "description", kind: "scalar", T: 9 }, { no: 4, name: "instructions", kind: "scalar", T: 9 }, { no: 5, name: "prerequisites", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "sub_composer_id", kind: "scalar", T: 9 }]), Dg = wa.makeMessageType("aiserver.v1.PlanPhase", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "todos", kind: "message", T: pg, repeated: true }]), wg = wa.makeMessageType("aiserver.v1.CreatePlanParams", () => [{ no: 1, name: "plan", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9 }, { no: 3, name: "summary", kind: "scalar", T: 9 }, { no: 4, name: "steps", kind: "message", T: Sg, repeated: true }, { no: 5, name: "old_str", kind: "scalar", T: 9 }, { no: 6, name: "new_str", kind: "scalar", T: 9 }, { no: 7, name: "name", kind: "scalar", T: 9 }, { no: 8, name: "todos", kind: "message", T: pg, repeated: true }, { no: 9, name: "overview", kind: "scalar", T: 9 }, { no: 10, name: "is_spec", kind: "scalar", T: 8 }, { no: 11, name: "is_project", kind: "scalar", T: 8 }, { no: 12, name: "phases", kind: "message", T: Dg, repeated: true }]), bg = wa.makeMessageType("aiserver.v1.CreatePlanResult", () => [{ no: 1, name: "accepted", kind: "message", T: Mg, oneof: "result" }, { no: 2, name: "rejected", kind: "message", T: Fg, oneof: "result" }, { no: 3, name: "modified", kind: "message", T: Og, oneof: "result" }, { no: 4, name: "plan_uri", kind: "scalar", T: 9 }]), Mg = wa.makeMessageType("aiserver.v1.CreatePlanResult.Accepted", () => [{ no: 1, name: "final_todos", kind: "message", T: pg, repeated: true }], { localName: "CreatePlanResult_Accepted" }), Fg = wa.makeMessageType("aiserver.v1.CreatePlanResult.Rejected", [], { localName: "CreatePlanResult_Rejected" }), Og = wa.makeMessageType("aiserver.v1.CreatePlanResult.Modified", () => [{ no: 1, name: "new_plan", kind: "scalar", T: 9 }, { no: 2, name: "final_todos", kind: "message", T: pg, repeated: true }], { localName: "CreatePlanResult_Modified" }), Ug = wa.makeMessageType("aiserver.v1.ReadProjectParams", []), Lg = wa.makeMessageType("aiserver.v1.ReadProjectResult", () => [{ no: 1, name: "plan", kind: "scalar", T: 9 }]), Pg = wa.makeMessageType("aiserver.v1.UpdateProjectStringReplacement", () => [{ no: 1, name: "old_string", kind: "scalar", T: 9 }, { no: 2, name: "new_string", kind: "scalar", T: 9 }]), xg = wa.makeMessageType("aiserver.v1.UpdateProjectParams", () => [{ no: 1, name: "string_replacements", kind: "message", T: Pg, repeated: true }, { no: 2, name: "summary", kind: "scalar", T: 9 }]), Gg = wa.makeMessageType("aiserver.v1.UpdateProjectResult", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }, { no: 2, name: "updated_plan", kind: "scalar", T: 9 }]), Yg = wa.makeMessageType("aiserver.v1.AskQuestionParams", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "questions", kind: "message", T: Jg, repeated: true }, { no: 3, name: "run_async", kind: "scalar", T: 8 }]), Jg = wa.makeMessageType("aiserver.v1.AskQuestionParams.Question", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "prompt", kind: "scalar", T: 9 }, { no: 3, name: "options", kind: "message", T: Vg, repeated: true }, { no: 4, name: "allow_multiple", kind: "scalar", T: 8 }], { localName: "AskQuestionParams_Question" }), Vg = wa.makeMessageType("aiserver.v1.AskQuestionParams.Option", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "label", kind: "scalar", T: 9 }], { localName: "AskQuestionParams_Option" }), qg = wa.makeMessageType("aiserver.v1.AskQuestionResult", () => [{ no: 1, name: "answers", kind: "message", T: Hg, repeated: true }, { no: 2, name: "is_async", kind: "scalar", T: 8 }]), Hg = wa.makeMessageType("aiserver.v1.AskQuestionResult.Answer", () => [{ no: 1, name: "question_id", kind: "scalar", T: 9 }, { no: 2, name: "selected_option_ids", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "freeform_text", kind: "scalar", T: 9, opt: true }], { localName: "AskQuestionResult_Answer" }), Wg = wa.makeMessageType("aiserver.v1.SwitchModeParams", () => [{ no: 1, name: "from_mode_id", kind: "scalar", T: 9 }, { no: 2, name: "to_mode_id", kind: "scalar", T: 9 }, { no: 3, name: "explanation", kind: "scalar", T: 9, opt: true }]), Kg = wa.makeMessageType("aiserver.v1.SwitchModeResult", () => [{ no: 1, name: "from_mode_id", kind: "scalar", T: 9 }, { no: 2, name: "to_mode_id", kind: "scalar", T: 9 }, { no: 3, name: "auto_approved", kind: "scalar", T: 8 }, { no: 4, name: "user_approved", kind: "scalar", T: 8 }]), jg = wa.makeMessageType("aiserver.v1.ComputerUseParams", () => [{ no: 1, name: "actions", kind: "message", T: il, repeated: true }]), Xg = wa.makeMessageType("aiserver.v1.ComputerUseResult", () => [{ no: 1, name: "success", kind: "message", T: hl, oneof: "result" }, { no: 2, name: "error", kind: "message", T: _l, oneof: "result" }]), Zg = wa.makeMessageType("aiserver.v1.WebFetchParams", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }]), zg = wa.makeMessageType("aiserver.v1.WebFetchResult", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "markdown", kind: "scalar", T: 9, opt: true }, { no: 3, name: "error", kind: "scalar", T: 9, opt: true }]), $g = wa.makeMessageType("aiserver.v1.ReportBugfixResultsParams", () => [{ no: 1, name: "summary", kind: "scalar", T: 9 }, { no: 2, name: "results", kind: "message", T: fl, repeated: true }]), eu = wa.makeMessageType("aiserver.v1.ReportBugfixResultsResult", () => [{ no: 1, name: "success", kind: "message", T: Bl, oneof: "result" }, { no: 2, name: "error", kind: "message", T: Ql, oneof: "result" }]), nu = wa.makeMessageType("aiserver.v1.McpAuthParams", () => [{ no: 1, name: "server_identifier", kind: "scalar", T: 9 }]), au = wa.makeMessageType("aiserver.v1.McpAuthResult", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }, { no: 2, name: "message", kind: "scalar", T: 9 }]), tu = wa.makeMessageType("aiserver.v1.ConnectScmParams", () => [{ no: 1, name: "github", kind: "message", T: su }]), su = wa.makeMessageType("aiserver.v1.ConnectScmGithub", () => [{ no: 1, name: "repository", kind: "message", T: ou }, { no: 2, name: "ghe_application", kind: "scalar", T: 9, opt: true }]), ou = wa.makeMessageType("aiserver.v1.ConnectScmGithubRepository", () => [{ no: 1, name: "owner", kind: "scalar", T: 9 }, { no: 2, name: "repo", kind: "scalar", T: 9 }]), ru = wa.makeMessageType("aiserver.v1.ConnectScmResult", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }, { no: 2, name: "message", kind: "scalar", T: 9 }]), iu = wa.makeMessageType("aiserver.v1.DocumentationMetadata", () => [{ no: 1, name: "prefix_url", kind: "scalar", T: 9 }, { no: 2, name: "doc_name", kind: "scalar", T: 9 }, { no: 3, name: "is_different_prefix_origin", kind: "scalar", T: 8 }, { no: 4, name: "true_prefix_url", kind: "scalar", T: 9 }, { no: 5, name: "public", kind: "scalar", T: 8 }, { no: 6, name: "team_id", kind: "scalar", T: 5, opt: true }]), Au = wa.makeMessageType("aiserver.v1.DocumentationChunk", () => [{ no: 1, name: "doc_name", kind: "scalar", T: 9 }, { no: 2, name: "page_url", kind: "scalar", T: 9 }, { no: 3, name: "documentation_chunk", kind: "scalar", T: 9 }, { no: 4, name: "score", kind: "scalar", T: 2 }, { no: 5, name: "page_title", kind: "scalar", T: 9 }]), lu = wa.makeMessageType("aiserver.v1.DocumentationQueryRequest", () => [{ no: 1, name: "doc_identifier", kind: "scalar", T: 9 }, { no: 2, name: "query", kind: "scalar", T: 9 }, { no: 3, name: "top_k", kind: "scalar", T: 13 }, { no: 4, name: "rerank_results", kind: "scalar", T: 8 }]), cu = wa.makeMessageType("aiserver.v1.DocumentationQueryResponse", () => [{ no: 1, name: "doc_identifier", kind: "scalar", T: 9 }, { no: 2, name: "doc_name", kind: "scalar", T: 9 }, { no: 3, name: "doc_chunks", kind: "message", T: Au, repeated: true }, { no: 4, name: "status", kind: "enum", T: wa.getEnumType(mu) }]), mu = wa.makeEnum("aiserver.v1.DocumentationQueryResponse.Status", [{ no: 0, name: "STATUS_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "STATUS_NOT_FOUND", localName: "NOT_FOUND" }, { no: 2, name: "STATUS_SUCCESS", localName: "SUCCESS" }, { no: 3, name: "STATUS_FAILURE", localName: "FAILURE" }]), du = wa.makeMessageType("aiserver.v1.ComposerCapabilityRequest", () => [{ no: 1, name: "type", kind: "enum", T: wa.getEnumType(gu) }, { no: 2, name: "loop_on_lints", kind: "message", T: Tu, oneof: "data" }, { no: 3, name: "loop_on_tests", kind: "message", T: ku, oneof: "data" }, { no: 4, name: "mega_planner", kind: "message", T: Iu, oneof: "data" }, { no: 5, name: "loop_on_command", kind: "message", T: hu, oneof: "data" }, { no: 6, name: "tool_call", kind: "message", T: _u, oneof: "data" }, { no: 7, name: "diff_review", kind: "message", T: Cu, oneof: "data" }, { no: 8, name: "context_picking", kind: "message", T: yu, oneof: "data" }, { no: 9, name: "edit_trail", kind: "message", T: Ru, oneof: "data" }, { no: 10, name: "auto_context", kind: "message", T: Nu, oneof: "data" }, { no: 11, name: "context_planner", kind: "message", T: vu, oneof: "data" }, { no: 12, name: "remember_this", kind: "message", T: Su, oneof: "data" }, { no: 13, name: "decomposer", kind: "message", T: Qu, oneof: "data" }, { no: 14, name: "cursor_rules", kind: "message", T: Du, oneof: "data" }]), gu = wa.makeEnum("aiserver.v1.ComposerCapabilityRequest.ComposerCapabilityType", [{ no: 0, name: "COMPOSER_CAPABILITY_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "COMPOSER_CAPABILITY_TYPE_LOOP_ON_LINTS", localName: "LOOP_ON_LINTS" }, { no: 2, name: "COMPOSER_CAPABILITY_TYPE_LOOP_ON_TESTS", localName: "LOOP_ON_TESTS" }, { no: 3, name: "COMPOSER_CAPABILITY_TYPE_MEGA_PLANNER", localName: "MEGA_PLANNER" }, { no: 4, name: "COMPOSER_CAPABILITY_TYPE_LOOP_ON_COMMAND", localName: "LOOP_ON_COMMAND" }, { no: 5, name: "COMPOSER_CAPABILITY_TYPE_TOOL_CALL", localName: "TOOL_CALL" }, { no: 6, name: "COMPOSER_CAPABILITY_TYPE_DIFF_REVIEW", localName: "DIFF_REVIEW" }, { no: 7, name: "COMPOSER_CAPABILITY_TYPE_CONTEXT_PICKING", localName: "CONTEXT_PICKING" }, { no: 8, name: "COMPOSER_CAPABILITY_TYPE_EDIT_TRAIL", localName: "EDIT_TRAIL" }, { no: 9, name: "COMPOSER_CAPABILITY_TYPE_AUTO_CONTEXT", localName: "AUTO_CONTEXT" }, { no: 10, name: "COMPOSER_CAPABILITY_TYPE_CONTEXT_PLANNER", localName: "CONTEXT_PLANNER" }, { no: 11, name: "COMPOSER_CAPABILITY_TYPE_DIFF_HISTORY", localName: "DIFF_HISTORY" }, { no: 12, name: "COMPOSER_CAPABILITY_TYPE_REMEMBER_THIS", localName: "REMEMBER_THIS" }, { no: 13, name: "COMPOSER_CAPABILITY_TYPE_DECOMPOSER", localName: "DECOMPOSER" }, { no: 14, name: "COMPOSER_CAPABILITY_TYPE_USES_CODEBASE", localName: "USES_CODEBASE" }, { no: 15, name: "COMPOSER_CAPABILITY_TYPE_TOOL_FORMER", localName: "TOOL_FORMER" }, { no: 16, name: "COMPOSER_CAPABILITY_TYPE_CURSOR_RULES", localName: "CURSOR_RULES" }, { no: 17, name: "COMPOSER_CAPABILITY_TYPE_TOKEN_COUNTER", localName: "TOKEN_COUNTER" }, { no: 18, name: "COMPOSER_CAPABILITY_TYPE_USAGE_DATA", localName: "USAGE_DATA" }, { no: 19, name: "COMPOSER_CAPABILITY_TYPE_CHIMES", localName: "CHIMES" }, { no: 20, name: "COMPOSER_CAPABILITY_TYPE_CODE_DECAY_TRACKER", localName: "CODE_DECAY_TRACKER" }, { no: 21, name: "COMPOSER_CAPABILITY_TYPE_BACKGROUND_COMPOSER", localName: "BACKGROUND_COMPOSER" }, { no: 22, name: "COMPOSER_CAPABILITY_TYPE_SUMMARIZATION", localName: "SUMMARIZATION" }, { no: 23, name: "COMPOSER_CAPABILITY_TYPE_AI_CODE_TRACKING", localName: "AI_CODE_TRACKING" }, { no: 24, name: "COMPOSER_CAPABILITY_TYPE_QUEUING", localName: "QUEUING" }, { no: 25, name: "COMPOSER_CAPABILITY_TYPE_MEMORIES", localName: "MEMORIES" }, { no: 26, name: "COMPOSER_CAPABILITY_TYPE_RCP_LOGS", localName: "RCP_LOGS" }, { no: 27, name: "COMPOSER_CAPABILITY_TYPE_KNOWLEDGE_FETCH", localName: "KNOWLEDGE_FETCH" }, { no: 28, name: "COMPOSER_CAPABILITY_TYPE_SLACK_INTEGRATION", localName: "SLACK_INTEGRATION" }, { no: 29, name: "COMPOSER_CAPABILITY_TYPE_SUB_COMPOSER", localName: "SUB_COMPOSER" }, { no: 30, name: "COMPOSER_CAPABILITY_TYPE_THINKING", localName: "THINKING" }, { no: 31, name: "COMPOSER_CAPABILITY_TYPE_CONTEXT_WINDOW", localName: "CONTEXT_WINDOW" }, { no: 32, name: "COMPOSER_CAPABILITY_TYPE_ONLINE_METRICS", localName: "ONLINE_METRICS" }, { no: 33, name: "COMPOSER_CAPABILITY_TYPE_NOTIFICATIONS", localName: "NOTIFICATIONS" }, { no: 34, name: "COMPOSER_CAPABILITY_TYPE_SPEC", localName: "SPEC" }, { no: 35, name: "COMPOSER_CAPABILITY_TYPE_BROWSER_AGENT", localName: "BROWSER_AGENT" }]), uu = wa.makeEnum("aiserver.v1.ComposerCapabilityRequest.ToolType", [{ no: 0, name: "TOOL_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TOOL_TYPE_ADD_FILE_TO_CONTEXT", localName: "ADD_FILE_TO_CONTEXT" }, { no: 3, name: "TOOL_TYPE_ITERATE", localName: "ITERATE" }, { no: 4, name: "TOOL_TYPE_REMOVE_FILE_FROM_CONTEXT", localName: "REMOVE_FILE_FROM_CONTEXT" }, { no: 5, name: "TOOL_TYPE_SEMANTIC_SEARCH_CODEBASE", localName: "SEMANTIC_SEARCH_CODEBASE" }]), Eu = wa.makeMessageType("aiserver.v1.ComposerCapabilityRequest.ToolSchema", () => [{ no: 1, name: "type", kind: "enum", T: wa.getEnumType(uu) }, { no: 2, name: "name", kind: "scalar", T: 9 }, { no: 3, name: "properties", kind: "map", K: 9, V: { kind: "message", T: pu } }, { no: 4, name: "required", kind: "scalar", T: 9, repeated: true }], { localName: "ComposerCapabilityRequest_ToolSchema" }), pu = wa.makeMessageType("aiserver.v1.ComposerCapabilityRequest.SchemaProperty", () => [{ no: 1, name: "type", kind: "scalar", T: 9 }, { no: 2, name: "description", kind: "scalar", T: 9, opt: true }], { localName: "ComposerCapabilityRequest_SchemaProperty" }), Tu = wa.makeMessageType("aiserver.v1.ComposerCapabilityRequest.LoopOnLintsCapability", () => [{ no: 1, name: "linter_errors", kind: "message", T: Ho, repeated: true }, { no: 2, name: "custom_instructions", kind: "scalar", T: 9, opt: true }], { localName: "ComposerCapabilityRequest_LoopOnLintsCapability" }), ku = wa.makeMessageType("aiserver.v1.ComposerCapabilityRequest.LoopOnTestsCapability", () => [{ no: 1, name: "test_names", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "custom_instructions", kind: "scalar", T: 9, opt: true }], { localName: "ComposerCapabilityRequest_LoopOnTestsCapability" }), Iu = wa.makeMessageType("aiserver.v1.ComposerCapabilityRequest.MegaPlannerCapability", () => [{ no: 1, name: "custom_instructions", kind: "scalar", T: 9, opt: true }], { localName: "ComposerCapabilityRequest_MegaPlannerCapability" }), hu = wa.makeMessageType("aiserver.v1.ComposerCapabilityRequest.LoopOnCommandCapability", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "custom_instructions", kind: "scalar", T: 9, opt: true }, { no: 3, name: "output", kind: "scalar", T: 9, opt: true }, { no: 4, name: "exit_code", kind: "scalar", T: 5, opt: true }], { localName: "ComposerCapabilityRequest_LoopOnCommandCapability" }), _u = wa.makeMessageType("aiserver.v1.ComposerCapabilityRequest.ToolCallCapability", () => [{ no: 1, name: "custom_instructions", kind: "scalar", T: 9, opt: true }, { no: 2, name: "tool_schemas", kind: "message", T: Eu, repeated: true }, { no: 3, name: "relevant_files", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "files_in_context", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "semantic_search_files", kind: "scalar", T: 9, repeated: true }], { localName: "ComposerCapabilityRequest_ToolCallCapability" }), Cu = wa.makeMessageType("aiserver.v1.ComposerCapabilityRequest.DiffReviewCapability", () => [{ no: 1, name: "custom_instructions", kind: "scalar", T: 9, opt: true }, { no: 2, name: "diffs", kind: "message", T: fu, repeated: true }], { localName: "ComposerCapabilityRequest_DiffReviewCapability" }), fu = wa.makeMessageType("aiserver.v1.ComposerCapabilityRequest.DiffReviewCapability.SimpleFileDiff", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 3, name: "chunks", kind: "message", T: Bu, repeated: true }], { localName: "ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff" }), Bu = wa.makeMessageType("aiserver.v1.ComposerCapabilityRequest.DiffReviewCapability.SimpleFileDiff.Chunk", () => [{ no: 1, name: "old_lines", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "new_lines", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "old_range", kind: "message", T: Bo }, { no: 4, name: "new_range", kind: "message", T: Bo }], { localName: "ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk" }), Qu = wa.makeMessageType("aiserver.v1.ComposerCapabilityRequest.DecomposerCapability", () => [{ no: 1, name: "custom_instructions", kind: "scalar", T: 9, opt: true }], { localName: "ComposerCapabilityRequest_DecomposerCapability" }), yu = wa.makeMessageType("aiserver.v1.ComposerCapabilityRequest.ContextPickingCapability", () => [{ no: 1, name: "custom_instructions", kind: "scalar", T: 9, opt: true }, { no: 2, name: "potential_context_files", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "potential_context_code_chunks", kind: "message", T: gr, repeated: true }, { no: 4, name: "files_in_context", kind: "scalar", T: 9, repeated: true }], { localName: "ComposerCapabilityRequest_ContextPickingCapability" }), Ru = wa.makeMessageType("aiserver.v1.ComposerCapabilityRequest.EditTrailCapability", () => [{ no: 1, name: "custom_instructions", kind: "scalar", T: 9, opt: true }], { localName: "ComposerCapabilityRequest_EditTrailCapability" }), Nu = wa.makeMessageType("aiserver.v1.ComposerCapabilityRequest.AutoContextCapability", () => [{ no: 1, name: "custom_instructions", kind: "scalar", T: 9, opt: true }, { no: 2, name: "additional_files", kind: "scalar", T: 9, repeated: true }], { localName: "ComposerCapabilityRequest_AutoContextCapability" }), vu = wa.makeMessageType("aiserver.v1.ComposerCapabilityRequest.ContextPlannerCapability", () => [{ no: 1, name: "custom_instructions", kind: "scalar", T: 9, opt: true }, { no: 2, name: "attached_code_chunks", kind: "message", T: gr, repeated: true }], { localName: "ComposerCapabilityRequest_ContextPlannerCapability" }), Su = wa.makeMessageType("aiserver.v1.ComposerCapabilityRequest.RememberThisCapability", () => [{ no: 1, name: "custom_instructions", kind: "scalar", T: 9, opt: true }, { no: 2, name: "memory", kind: "scalar", T: 9 }], { localName: "ComposerCapabilityRequest_RememberThisCapability" }), Du = wa.makeMessageType("aiserver.v1.ComposerCapabilityRequest.CursorRulesCapability", () => [{ no: 1, name: "custom_instructions", kind: "scalar", T: 9, opt: true }], { localName: "ComposerCapabilityRequest_CursorRulesCapability" }), wu = wa.makeMessageType("aiserver.v1.ComposerCapabilityContext", () => [{ no: 27, name: "slack_integration", kind: "message", T: bu, oneof: "data" }, { no: 28, name: "github_pr", kind: "message", T: Fu, oneof: "data" }, { no: 29, name: "microsoft_teams_integration", kind: "message", T: Mu, oneof: "data" }]), bu = wa.makeMessageType("aiserver.v1.ComposerCapabilityContext.SlackIntegrationContext", () => [{ no: 1, name: "thread", kind: "scalar", T: 9 }, { no: 2, name: "channel_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "channel_purpose", kind: "scalar", T: 9, opt: true }, { no: 4, name: "channel_topic", kind: "scalar", T: 9, opt: true }, { no: 5, name: "sender_name", kind: "scalar", T: 9, opt: true }, { no: 6, name: "sender_id", kind: "scalar", T: 9, opt: true }, { no: 7, name: "sender_type", kind: "scalar", T: 9, opt: true }, { no: 8, name: "is_directly_addressed", kind: "scalar", T: 8, opt: true }], { localName: "ComposerCapabilityContext_SlackIntegrationContext" }), Mu = wa.makeMessageType("aiserver.v1.ComposerCapabilityContext.MicrosoftTeamsIntegrationContext", () => [{ no: 1, name: "thread", kind: "scalar", T: 9 }, { no: 2, name: "channel_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "team_name", kind: "scalar", T: 9, opt: true }, { no: 4, name: "channel_description", kind: "scalar", T: 9, opt: true }, { no: 5, name: "team_description", kind: "scalar", T: 9, opt: true }], { localName: "ComposerCapabilityContext_MicrosoftTeamsIntegrationContext" }), Fu = wa.makeMessageType("aiserver.v1.ComposerCapabilityContext.GithubPRContext", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "description", kind: "scalar", T: 9 }, { no: 3, name: "comments", kind: "scalar", T: 9 }, { no: 4, name: "ci_failures", kind: "scalar", T: 9, opt: true }, { no: 5, name: "code_tour_context", kind: "message", T: Ou }, { no: 6, name: "conflict_resolution", kind: "message", T: Uu }], { localName: "ComposerCapabilityContext_GithubPRContext" }), Ou = wa.makeMessageType("aiserver.v1.ComposerCapabilityContext.GithubPRContext.CodeTourContext", () => [{ no: 1, name: "change_id", kind: "scalar", T: 9 }, { no: 2, name: "head_sha", kind: "scalar", T: 9 }, { no: 3, name: "current_revision_id", kind: "scalar", T: 9, opt: true }, { no: 4, name: "visible_section_id", kind: "scalar", T: 9, opt: true }, { no: 5, name: "visible_step_id", kind: "scalar", T: 9, opt: true }, { no: 6, name: "path_scope_prefix", kind: "scalar", T: 9, opt: true }], { localName: "ComposerCapabilityContext_GithubPRContext_CodeTourContext" }), Uu = wa.makeMessageType("aiserver.v1.ComposerCapabilityContext.GithubPRContext.ConflictResolutionContext", () => [{ no: 1, name: "head_sha", kind: "scalar", T: 9, opt: true }, { no: 2, name: "base_sha", kind: "scalar", T: 9, opt: true }, { no: 3, name: "base_ref", kind: "scalar", T: 9, opt: true }, { no: 4, name: "conflicted_paths", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "gate_reason", kind: "scalar", T: 9, opt: true }, { no: 6, name: "hunks", kind: "message", T: Lu, repeated: true }, { no: 7, name: "files", kind: "message", T: Pu, repeated: true }], { localName: "ComposerCapabilityContext_GithubPRContext_ConflictResolutionContext" }), Lu = wa.makeMessageType("aiserver.v1.ComposerCapabilityContext.GithubPRContext.ConflictResolutionContext.HunkReport", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "start_line", kind: "scalar", T: 13 }, { no: 3, name: "outcome", kind: "scalar", T: 9 }, { no: 4, name: "kind", kind: "scalar", T: 9, opt: true }, { no: 5, name: "needs_person", kind: "scalar", T: 8 }], { localName: "ComposerCapabilityContext_GithubPRContext_ConflictResolutionContext_HunkReport" }), Pu = wa.makeMessageType("aiserver.v1.ComposerCapabilityContext.GithubPRContext.ConflictResolutionContext.ResolvedFile", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }, { no: 3, name: "fully_resolved", kind: "scalar", T: 8 }], { localName: "ComposerCapabilityContext_GithubPRContext_ConflictResolutionContext_ResolvedFile" }), xu = wa.makeMessageType("agent.v1.DeleteArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }]), Gu = wa.makeMessageType("agent.v1.DeleteResult", () => [{ no: 1, name: "success", kind: "message", T: Yu, oneof: "result" }, { no: 2, name: "file_not_found", kind: "message", T: Ju, oneof: "result" }, { no: 3, name: "not_file", kind: "message", T: Vu, oneof: "result" }, { no: 4, name: "permission_denied", kind: "message", T: qu, oneof: "result" }, { no: 5, name: "file_busy", kind: "message", T: Hu, oneof: "result" }, { no: 6, name: "rejected", kind: "message", T: Wu, oneof: "result" }, { no: 7, name: "error", kind: "message", T: Ku, oneof: "result" }]), Yu = wa.makeMessageType("agent.v1.DeleteSuccess", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "deleted_file", kind: "scalar", T: 9 }, { no: 3, name: "file_size", kind: "scalar", T: 3 }, { no: 4, name: "prev_content", kind: "scalar", T: 9 }]), Ju = wa.makeMessageType("agent.v1.DeleteFileNotFound", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }]), Vu = wa.makeMessageType("agent.v1.DeleteNotFile", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "actual_type", kind: "scalar", T: 9 }]), qu = wa.makeMessageType("agent.v1.DeletePermissionDenied", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "client_visible_error", kind: "scalar", T: 9 }, { no: 3, name: "is_readonly", kind: "scalar", T: 8 }]), Hu = wa.makeMessageType("agent.v1.DeleteFileBusy", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }]), Wu = wa.makeMessageType("agent.v1.DeleteRejected", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }]), Ku = wa.makeMessageType("agent.v1.DeleteError", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }]), ju = wa.makeMessageType("agent.v1.GrepArgs", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9, opt: true }, { no: 3, name: "glob", kind: "scalar", T: 9, opt: true }, { no: 4, name: "output_mode", kind: "scalar", T: 9, opt: true }, { no: 5, name: "context_before", kind: "scalar", T: 5, opt: true }, { no: 6, name: "context_after", kind: "scalar", T: 5, opt: true }, { no: 7, name: "context", kind: "scalar", T: 5, opt: true }, { no: 8, name: "case_insensitive", kind: "scalar", T: 8, opt: true }, { no: 9, name: "type", kind: "scalar", T: 9, opt: true }, { no: 10, name: "head_limit", kind: "scalar", T: 5, opt: true }, { no: 11, name: "multiline", kind: "scalar", T: 8, opt: true }, { no: 12, name: "sort", kind: "scalar", T: 9, opt: true }, { no: 13, name: "sort_ascending", kind: "scalar", T: 8, opt: true }, { no: 14, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 15, name: "sandbox_policy", kind: "message", T: fr, opt: true }, { no: 16, name: "offset", kind: "scalar", T: 5, opt: true }]), Xu = wa.makeMessageType("agent.v1.GrepResult", () => [{ no: 1, name: "success", kind: "message", T: zu, oneof: "result" }, { no: 2, name: "error", kind: "message", T: Zu, oneof: "result" }]), Zu = wa.makeMessageType("agent.v1.GrepError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), zu = wa.makeMessageType("agent.v1.GrepSuccess", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9 }, { no: 3, name: "output_mode", kind: "scalar", T: 9 }, { no: 4, name: "workspace_results", kind: "map", K: 9, V: { kind: "message", T: $u } }, { no: 5, name: "active_editor_result", kind: "message", T: $u, opt: true }]), $u = wa.makeMessageType("agent.v1.GrepUnionResult", () => [{ no: 1, name: "count", kind: "message", T: eE, oneof: "result" }, { no: 2, name: "files", kind: "message", T: aE, oneof: "result" }, { no: 3, name: "content", kind: "message", T: tE, oneof: "result" }]), eE = wa.makeMessageType("agent.v1.GrepCountResult", () => [{ no: 1, name: "counts", kind: "message", T: nE, repeated: true }, { no: 2, name: "total_files", kind: "scalar", T: 5 }, { no: 3, name: "total_matches", kind: "scalar", T: 5 }, { no: 4, name: "client_truncated", kind: "scalar", T: 8 }, { no: 5, name: "ripgrep_truncated", kind: "scalar", T: 8 }, { no: 6, name: "head_limit_applied", kind: "scalar", T: 5, opt: true }, { no: 7, name: "offset_applied", kind: "scalar", T: 5, opt: true }]), nE = wa.makeMessageType("agent.v1.GrepFileCount", () => [{ no: 1, name: "file", kind: "scalar", T: 9 }, { no: 2, name: "count", kind: "scalar", T: 5 }]), aE = wa.makeMessageType("agent.v1.GrepFilesResult", () => [{ no: 1, name: "files", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "total_files", kind: "scalar", T: 5 }, { no: 3, name: "client_truncated", kind: "scalar", T: 8 }, { no: 4, name: "ripgrep_truncated", kind: "scalar", T: 8 }, { no: 5, name: "head_limit_applied", kind: "scalar", T: 5, opt: true }, { no: 6, name: "offset_applied", kind: "scalar", T: 5, opt: true }]), tE = wa.makeMessageType("agent.v1.GrepContentResult", () => [{ no: 1, name: "matches", kind: "message", T: sE, repeated: true }, { no: 2, name: "total_lines", kind: "scalar", T: 5 }, { no: 3, name: "total_matched_lines", kind: "scalar", T: 5 }, { no: 4, name: "client_truncated", kind: "scalar", T: 8 }, { no: 5, name: "ripgrep_truncated", kind: "scalar", T: 8 }, { no: 6, name: "head_limit_applied", kind: "scalar", T: 5, opt: true }, { no: 7, name: "offset_applied", kind: "scalar", T: 5, opt: true }]), sE = wa.makeMessageType("agent.v1.GrepFileMatch", () => [{ no: 1, name: "file", kind: "scalar", T: 9 }, { no: 2, name: "matches", kind: "message", T: oE, repeated: true }]), oE = wa.makeMessageType("agent.v1.GrepContentMatch", () => [{ no: 1, name: "line_number", kind: "scalar", T: 5 }, { no: 2, name: "content", kind: "scalar", T: 9 }, { no: 3, name: "content_truncated", kind: "scalar", T: 8 }, { no: 4, name: "is_context_line", kind: "scalar", T: 8 }]), rE = wa.makeEnum("agent.v1.CursorRuleSource", [{ no: 0, name: "CURSOR_RULE_SOURCE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CURSOR_RULE_SOURCE_TEAM", localName: "TEAM" }, { no: 2, name: "CURSOR_RULE_SOURCE_USER", localName: "USER" }]), iE = wa.makeMessageType("agent.v1.CursorRuleTypeGlobal", []), AE = wa.makeMessageType("agent.v1.CursorRuleTypeFileGlobs", () => [{ no: 1, name: "globs", kind: "scalar", T: 9, repeated: true }]), lE = wa.makeMessageType("agent.v1.CursorRuleTypeAgentFetched", () => [{ no: 1, name: "description", kind: "scalar", T: 9 }]), cE = wa.makeMessageType("agent.v1.CursorRuleTypeManuallyAttached", []), mE = wa.makeMessageType("agent.v1.CursorRuleType", () => [{ no: 1, name: "global", kind: "message", T: iE, oneof: "type" }, { no: 2, name: "file_globbed", kind: "message", T: AE, oneof: "type" }, { no: 3, name: "agent_fetched", kind: "message", T: lE, oneof: "type" }, { no: 4, name: "manually_attached", kind: "message", T: cE, oneof: "type" }]), dE = wa.makeMessageType("agent.v1.CursorRule", () => [{ no: 1, name: "full_path", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }, { no: 3, name: "type", kind: "message", T: mE }, { no: 4, name: "source", kind: "enum", T: wa.getEnumType(rE) }, { no: 5, name: "git_remote_origin", kind: "scalar", T: 9, opt: true }, { no: 6, name: "parse_error", kind: "scalar", T: 9, opt: true }, { no: 7, name: "environments", kind: "scalar", T: 9, repeated: true }, { no: 8, name: "disabled_environments", kind: "scalar", T: 9, repeated: true }, { no: 9, name: "plugin", kind: "scalar", T: 9, opt: true }, { no: 10, name: "marketplace", kind: "scalar", T: 9, opt: true }, { no: 11, name: "plugin_id", kind: "scalar", T: 9, opt: true }, { no: 12, name: "marketplace_id", kind: "scalar", T: 9, opt: true }, { no: 13, name: "scoped_to", kind: "scalar", T: 9, repeated: true }, { no: 14, name: "frontmatter", kind: "scalar", T: 9 }, { no: 15, name: "is_required", kind: "scalar", T: 8, opt: true }]), gE = wa.makeEnum("agent.v1.DiagnosticSeverity", [{ no: 0, name: "DIAGNOSTIC_SEVERITY_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "DIAGNOSTIC_SEVERITY_ERROR", localName: "ERROR" }, { no: 2, name: "DIAGNOSTIC_SEVERITY_WARNING", localName: "WARNING" }, { no: 3, name: "DIAGNOSTIC_SEVERITY_INFORMATION", localName: "INFORMATION" }, { no: 4, name: "DIAGNOSTIC_SEVERITY_HINT", localName: "HINT" }]), uE = wa.makeMessageType("agent.v1.DiagnosticsArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }]), EE = wa.makeMessageType("agent.v1.DiagnosticsResult", () => [{ no: 1, name: "success", kind: "message", T: pE, oneof: "result" }, { no: 2, name: "error", kind: "message", T: kE, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: IE, oneof: "result" }, { no: 4, name: "file_not_found", kind: "message", T: hE, oneof: "result" }, { no: 5, name: "permission_denied", kind: "message", T: _E, oneof: "result" }]), pE = wa.makeMessageType("agent.v1.DiagnosticsSuccess", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "diagnostics", kind: "message", T: TE, repeated: true }, { no: 3, name: "total_diagnostics", kind: "scalar", T: 5 }]), TE = wa.makeMessageType("agent.v1.Diagnostic", () => [{ no: 1, name: "severity", kind: "enum", T: wa.getEnumType(gE) }, { no: 2, name: "range", kind: "message", T: yr }, { no: 3, name: "message", kind: "scalar", T: 9 }, { no: 4, name: "source", kind: "scalar", T: 9 }, { no: 5, name: "code", kind: "scalar", T: 9 }, { no: 6, name: "is_stale", kind: "scalar", T: 8 }]), kE = wa.makeMessageType("agent.v1.DiagnosticsError", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }]), IE = wa.makeMessageType("agent.v1.DiagnosticsRejected", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }]), hE = wa.makeMessageType("agent.v1.DiagnosticsFileNotFound", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }]), _E = wa.makeMessageType("agent.v1.DiagnosticsPermissionDenied", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }]), CE = wa.makeMessageType("agent.v1.McpToolDefinition", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 4, name: "provider_identifier", kind: "scalar", T: 9 }, { no: 5, name: "tool_name", kind: "scalar", T: 9 }, { no: 2, name: "description", kind: "scalar", T: 9 }, { no: 3, name: "input_schema", kind: "message", T: hs }, { no: 6, name: "input_schema_json", kind: "scalar", T: 9, opt: true }, { no: 7, name: "output_schema_json", kind: "scalar", T: 9, opt: true }, { no: 8, name: "annotations_json", kind: "scalar", T: 9, opt: true }, { no: 9, name: "meta_json", kind: "scalar", T: 9, opt: true }]), fE = wa.makeMessageType("agent.v1.McpInstructions", () => [{ no: 1, name: "server_name", kind: "scalar", T: 9 }, { no: 2, name: "instructions", kind: "scalar", T: 9 }, { no: 3, name: "server_identifier", kind: "scalar", T: 9 }]), BE = wa.makeMessageType("agent.v1.McpDescriptor", () => [{ no: 1, name: "server_name", kind: "scalar", T: 9 }, { no: 2, name: "server_identifier", kind: "scalar", T: 9 }, { no: 3, name: "folder_path", kind: "scalar", T: 9, opt: true }, { no: 4, name: "server_use_instructions", kind: "scalar", T: 9, opt: true }, { no: 5, name: "tools", kind: "message", T: QE, repeated: true }, { no: 7, name: "plugin", kind: "scalar", T: 9, opt: true }, { no: 8, name: "marketplace", kind: "scalar", T: 9, opt: true }, { no: 9, name: "plugin_db_id", kind: "scalar", T: 9, opt: true }, { no: 10, name: "marketplace_id", kind: "scalar", T: 9, opt: true }]), QE = wa.makeMessageType("agent.v1.McpToolDescriptor", () => [{ no: 1, name: "tool_name", kind: "scalar", T: 9 }, { no: 2, name: "definition_path", kind: "scalar", T: 9, opt: true }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }, { no: 4, name: "input_schema", kind: "message", T: hs, opt: true }, { no: 5, name: "input_schema_json", kind: "scalar", T: 9, opt: true }, { no: 6, name: "annotations_json", kind: "scalar", T: 9, opt: true }]), yE = wa.makeMessageType("agent.v1.McpFileSystemOptions", () => [{ no: 1, name: "enabled", kind: "scalar", T: 8 }, { no: 2, name: "workspace_project_dir", kind: "scalar", T: 9 }, { no: 3, name: "mcp_descriptors", kind: "message", T: BE, repeated: true }]), RE = wa.makeMessageType("agent.v1.McpMetaToolOptions", () => [{ no: 1, name: "enabled", kind: "scalar", T: 8 }, { no: 2, name: "mcp_descriptors", kind: "message", T: BE, repeated: true }]), NE = wa.makeEnum("agent.v1.McpRefreshPolicy", [{ no: 0, name: "MCP_REFRESH_POLICY_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "MCP_REFRESH_POLICY_FORCE_IF_MISSING", localName: "FORCE_IF_MISSING" }, { no: 2, name: "MCP_REFRESH_POLICY_FORCE", localName: "FORCE" }]), vE = wa.makeMessageType("agent.v1.McpArgs", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "args", kind: "map", K: 9, V: { kind: "message", T: hs } }, { no: 3, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 4, name: "provider_identifier", kind: "scalar", T: 9 }, { no: 5, name: "tool_name", kind: "scalar", T: 9 }, { no: 6, name: "smart_mode_approval", kind: "message", T: vr, opt: true }, { no: 7, name: "smart_mode_approval_only", kind: "scalar", T: 8 }, { no: 8, name: "skip_approval", kind: "scalar", T: 8 }, { no: 9, name: "server_identifier", kind: "scalar", T: 9 }, { no: 10, name: "symbolic_path_arguments", kind: "message", T: SE, repeated: true }]), SE = wa.makeMessageType("agent.v1.McpSymbolicPathArgument", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "sha256", kind: "scalar", T: 9 }, { no: 3, name: "size_bytes", kind: "scalar", T: 3 }]), DE = wa.makeMessageType("agent.v1.McpResult", () => [{ no: 1, name: "success", kind: "message", T: PE, oneof: "result" }, { no: 2, name: "error", kind: "message", T: xE, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: JE, oneof: "result" }, { no: 4, name: "permission_denied", kind: "message", T: VE, oneof: "result" }, { no: 5, name: "tool_not_found", kind: "message", T: bE, oneof: "result" }, { no: 6, name: "server_not_found", kind: "message", T: ME, oneof: "result" }, { no: 7, name: "approved", kind: "message", T: wE, oneof: "result" }]), wE = wa.makeMessageType("agent.v1.McpApproved", []), bE = wa.makeMessageType("agent.v1.McpToolNotFound", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "available_tools", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "recovery", kind: "message", T: GE, opt: true }]), ME = wa.makeMessageType("agent.v1.McpServerNotFound", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "available_servers", kind: "scalar", T: 9, repeated: true }]), FE = wa.makeMessageType("agent.v1.McpTextContent", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "output_location", kind: "message", T: Nr, opt: true }]), OE = wa.makeMessageType("agent.v1.McpImageContent", () => [{ no: 1, name: "data", kind: "scalar", T: 12 }, { no: 2, name: "mime_type", kind: "scalar", T: 9 }]), UE = wa.makeMessageType("agent.v1.McpToolResultContentItem", () => [{ no: 1, name: "text", kind: "message", T: FE, oneof: "content" }, { no: 2, name: "image", kind: "message", T: OE, oneof: "content" }]), LE = wa.makeMessageType("agent.v1.SystemReminder", () => [{ no: 1, name: "body", kind: "scalar", T: 9 }]), PE = wa.makeMessageType("agent.v1.McpSuccess", () => [{ no: 1, name: "content", kind: "message", T: UE, repeated: true }, { no: 2, name: "is_error", kind: "scalar", T: 8 }, { no: 3, name: "structured_content", kind: "message", T: ks }, { no: 4, name: "system_reminders", kind: "message", T: LE, repeated: true }]), xE = wa.makeMessageType("agent.v1.McpError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "needs_auth", kind: "scalar", T: 8, opt: true }, { no: 3, name: "recovery", kind: "message", T: GE, opt: true }, { no: 4, name: "http_status", kind: "scalar", T: 5, opt: true }]), GE = wa.makeMessageType("agent.v1.McpRecovery", () => [{ no: 1, name: "outcome", kind: "enum", T: wa.getEnumType(YE) }, { no: 2, name: "fresh_input_schema_json", kind: "scalar", T: 9, opt: true }, { no: 3, name: "available_tools", kind: "scalar", T: 9, repeated: true }]), YE = wa.makeEnum("agent.v1.McpRecovery.Outcome", [{ no: 0, name: "OUTCOME_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "OUTCOME_CHANGED", localName: "CHANGED" }, { no: 2, name: "OUTCOME_REMOVED", localName: "REMOVED" }, { no: 3, name: "OUTCOME_UNCHANGED", localName: "UNCHANGED" }, { no: 4, name: "OUTCOME_REFRESH_FAILED", localName: "REFRESH_FAILED" }]), JE = wa.makeMessageType("agent.v1.McpRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }, { no: 2, name: "is_readonly", kind: "scalar", T: 8 }]), VE = wa.makeMessageType("agent.v1.McpPermissionDenied", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "is_readonly", kind: "scalar", T: 8 }]), qE = wa.makeMessageType("agent.v1.McpStateExecArgs", () => [{ no: 1, name: "server_identifiers", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "kick_only", kind: "scalar", T: 8 }, { no: 3, name: "refresh_policy", kind: "enum", T: wa.getEnumType(NE), opt: true }]), HE = wa.makeMessageType("agent.v1.McpStateExecResult", () => [{ no: 1, name: "success", kind: "message", T: KE, oneof: "result" }, { no: 2, name: "error", kind: "message", T: jE, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: XE, oneof: "result" }]), WE = wa.makeMessageType("agent.v1.McpStateServer", () => [{ no: 1, name: "server_name", kind: "scalar", T: 9 }, { no: 2, name: "server_identifier", kind: "scalar", T: 9 }, { no: 3, name: "plugin", kind: "scalar", T: 9, opt: true }, { no: 4, name: "marketplace", kind: "scalar", T: 9, opt: true }, { no: 5, name: "tools", kind: "message", T: CE, repeated: true }, { no: 6, name: "instructions", kind: "message", T: fE, repeated: true }, { no: 7, name: "status", kind: "scalar", T: 9, opt: true }, { no: 8, name: "error_message", kind: "scalar", T: 9, opt: true }]), KE = wa.makeMessageType("agent.v1.McpStateSuccess", () => [{ no: 1, name: "servers", kind: "message", T: WE, repeated: true }]), jE = wa.makeMessageType("agent.v1.McpStateError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), XE = wa.makeMessageType("agent.v1.McpStateRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), ZE = wa.makeMessageType("agent.v1.ListMcpResourcesExecArgs", () => [{ no: 1, name: "server", kind: "scalar", T: 9, opt: true }]), zE = wa.makeMessageType("agent.v1.ListMcpResourcesExecResult", () => [{ no: 1, name: "success", kind: "message", T: ep, oneof: "result" }, { no: 2, name: "error", kind: "message", T: np, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: ap, oneof: "result" }]), $E = wa.makeMessageType("agent.v1.ListMcpResourcesExecResult.McpResource", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }, { no: 4, name: "mime_type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "server", kind: "scalar", T: 9 }, { no: 6, name: "annotations", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }], { localName: "ListMcpResourcesExecResult_McpResource" }), ep = wa.makeMessageType("agent.v1.ListMcpResourcesSuccess", () => [{ no: 1, name: "resources", kind: "message", T: $E, repeated: true }]), np = wa.makeMessageType("agent.v1.ListMcpResourcesError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), ap = wa.makeMessageType("agent.v1.ListMcpResourcesRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), tp = wa.makeMessageType("agent.v1.ReadMcpResourceExecArgs", () => [{ no: 1, name: "server", kind: "scalar", T: 9 }, { no: 2, name: "uri", kind: "scalar", T: 9 }, { no: 3, name: "download_path", kind: "scalar", T: 9, opt: true }, { no: 4, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 5, name: "smart_mode_approval", kind: "message", T: vr, opt: true }]), sp = wa.makeMessageType("agent.v1.ReadMcpResourceExecResult", () => [{ no: 1, name: "success", kind: "message", T: op, oneof: "result" }, { no: 2, name: "error", kind: "message", T: rp, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: ip, oneof: "result" }, { no: 4, name: "not_found", kind: "message", T: Ap, oneof: "result" }]), op = wa.makeMessageType("agent.v1.ReadMcpResourceSuccess", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }, { no: 4, name: "mime_type", kind: "scalar", T: 9, opt: true }, { no: 5, name: "text", kind: "scalar", T: 9, oneof: "content" }, { no: 6, name: "blob", kind: "scalar", T: 12, oneof: "content" }, { no: 7, name: "annotations", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 8, name: "download_path", kind: "scalar", T: 9, opt: true }, { no: 9, name: "output_location", kind: "message", T: Nr, opt: true }, { no: 10, name: "meta_json", kind: "scalar", T: 9, opt: true }]), rp = wa.makeMessageType("agent.v1.ReadMcpResourceError", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }]), ip = wa.makeMessageType("agent.v1.ReadMcpResourceRejected", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }]), Ap = wa.makeMessageType("agent.v1.ReadMcpResourceNotFound", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }]), lp = wa.makeMessageType("agent.v1.CreatePlanResult", () => [{ no: 1, name: "success", kind: "message", T: cp, oneof: "result" }, { no: 2, name: "error", kind: "message", T: mp, oneof: "result" }, { no: 3, name: "plan_uri", kind: "scalar", T: 9 }]), cp = wa.makeMessageType("agent.v1.CreatePlanSuccess", []), mp = wa.makeMessageType("agent.v1.CreatePlanError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), dp = wa.makeMessageType("agent.v1.CreatePlanRequestResponse", () => [{ no: 1, name: "result", kind: "message", T: lp }]), gp = wa.makeMessageType("agent.v1.WebSearchRequestResponse", () => [{ no: 1, name: "approved", kind: "message", T: up, oneof: "result" }, { no: 2, name: "rejected", kind: "message", T: Ep, oneof: "result" }]), up = wa.makeMessageType("agent.v1.WebSearchRequestResponse.Approved", [], { localName: "WebSearchRequestResponse_Approved" }), Ep = wa.makeMessageType("agent.v1.WebSearchRequestResponse.Rejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }], { localName: "WebSearchRequestResponse_Rejected" }), pp = wa.makeMessageType("agent.v1.AskQuestionAsync", () => [{ no: 1, name: "interaction_id", kind: "scalar", T: 9 }]), Tp = wa.makeMessageType("agent.v1.AskQuestionResult", () => [{ no: 1, name: "success", kind: "message", T: kp, oneof: "result" }, { no: 2, name: "error", kind: "message", T: hp, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: _p, oneof: "result" }, { no: 4, name: "async", kind: "message", T: pp, oneof: "result" }]), kp = wa.makeMessageType("agent.v1.AskQuestionSuccess", () => [{ no: 1, name: "answers", kind: "message", T: Ip, repeated: true }]), Ip = wa.makeMessageType("agent.v1.AskQuestionSuccess.Answer", () => [{ no: 1, name: "question_id", kind: "scalar", T: 9 }, { no: 2, name: "selected_option_ids", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "freeform_text", kind: "scalar", T: 9 }], { localName: "AskQuestionSuccess_Answer" }), hp = wa.makeMessageType("agent.v1.AskQuestionError", () => [{ no: 1, name: "error_message", kind: "scalar", T: 9 }]), _p = wa.makeMessageType("agent.v1.AskQuestionRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), Cp = wa.makeMessageType("agent.v1.FetchArgs", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }]), fp = wa.makeMessageType("agent.v1.FetchResult", () => [{ no: 1, name: "success", kind: "message", T: Bp, oneof: "result" }, { no: 2, name: "error", kind: "message", T: Qp, oneof: "result" }]), Bp = wa.makeMessageType("agent.v1.FetchSuccess", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }, { no: 3, name: "status_code", kind: "scalar", T: 5 }, { no: 4, name: "content_type", kind: "scalar", T: 9 }]), Qp = wa.makeMessageType("agent.v1.FetchError", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }]), yp = wa.makeMessageType("agent.v1.SwitchModeRequestResponse", () => [{ no: 1, name: "approved", kind: "message", T: Rp, oneof: "result" }, { no: 2, name: "rejected", kind: "message", T: Np, oneof: "result" }]), Rp = wa.makeMessageType("agent.v1.SwitchModeRequestResponse.Approved", [], { localName: "SwitchModeRequestResponse_Approved" }), Np = wa.makeMessageType("agent.v1.SwitchModeRequestResponse.Rejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }], { localName: "SwitchModeRequestResponse_Rejected" }), vp = wa.makeMessageType("agent.v1.SetupVmEnvironmentResult", () => [{ no: 1, name: "success", kind: "message", T: Sp, oneof: "result" }]), Sp = wa.makeMessageType("agent.v1.SetupVmEnvironmentSuccess", []), Dp = wa.makeMessageType("agent.v1.WebFetchRequestResponse", () => [{ no: 1, name: "approved", kind: "message", T: wp, oneof: "result" }, { no: 2, name: "rejected", kind: "message", T: bp, oneof: "result" }]), wp = wa.makeMessageType("agent.v1.WebFetchRequestResponse.Approved", [], { localName: "WebFetchRequestResponse_Approved" }), bp = wa.makeMessageType("agent.v1.WebFetchRequestResponse.Rejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }], { localName: "WebFetchRequestResponse_Rejected" }), Mp = wa.makeMessageType("agent.v1.PrManagementResult", () => [{ no: 1, name: "success", kind: "message", T: Fp, oneof: "result" }, { no: 2, name: "error", kind: "message", T: Op, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: Up, oneof: "result" }, { no: 4, name: "registered", kind: "message", T: Lp, oneof: "result" }, { no: 5, name: "needs_confirmation", kind: "message", T: Pp, oneof: "result" }]), Fp = wa.makeMessageType("agent.v1.PrManagementSuccess", () => [{ no: 1, name: "pr_url", kind: "scalar", T: 9 }, { no: 2, name: "pr_number", kind: "scalar", T: 5 }, { no: 3, name: "message", kind: "scalar", T: 9 }]), Op = wa.makeMessageType("agent.v1.PrManagementError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), Up = wa.makeMessageType("agent.v1.PrManagementRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), Lp = wa.makeMessageType("agent.v1.PrManagementRegistered", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9 }, { no: 3, name: "body", kind: "scalar", T: 9 }, { no: 4, name: "base_branch", kind: "scalar", T: 9, opt: true }, { no: 5, name: "draft", kind: "scalar", T: 8, opt: true }, { no: 6, name: "branch_name", kind: "scalar", T: 9 }]), Pp = wa.makeMessageType("agent.v1.PrManagementNeedsConfirmation", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "discovered_pr_url", kind: "scalar", T: 9 }, { no: 3, name: "discovered_pr_number", kind: "scalar", T: 5 }, { no: 4, name: "discovered_pr_title", kind: "scalar", T: 9 }, { no: 5, name: "branch_name", kind: "scalar", T: 9 }]), xp = wa.makeMessageType("agent.v1.McpAuthRequestResponse", () => [{ no: 1, name: "approved", kind: "message", T: Gp, oneof: "result" }, { no: 2, name: "rejected", kind: "message", T: Yp, oneof: "result" }]), Gp = wa.makeMessageType("agent.v1.McpAuthRequestResponse.Approved", [], { localName: "McpAuthRequestResponse_Approved" }), Yp = wa.makeMessageType("agent.v1.McpAuthRequestResponse.Rejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }], { localName: "McpAuthRequestResponse_Rejected" }), Jp = wa.makeMessageType("agent.v1.ReplaceEnvSuccess", () => [{ no: 1, name: "setup_logs", kind: "scalar", T: 9 }]), Vp = wa.makeMessageType("agent.v1.ReplaceEnvFailure", () => [{ no: 1, name: "error_message", kind: "scalar", T: 9 }, { no: 2, name: "setup_logs", kind: "scalar", T: 9 }]), qp = wa.makeMessageType("agent.v1.ReplaceEnvResult", () => [{ no: 1, name: "success", kind: "message", T: Jp, oneof: "result" }, { no: 2, name: "failure", kind: "message", T: Vp, oneof: "result" }]), Hp = wa.makeMessageType("agent.v1.PiTruncation", () => [{ no: 1, name: "truncated", kind: "scalar", T: 8 }, { no: 2, name: "truncated_by", kind: "scalar", T: 9 }, { no: 3, name: "total_lines", kind: "scalar", T: 13 }, { no: 4, name: "output_lines", kind: "scalar", T: 13 }, { no: 5, name: "output_bytes", kind: "scalar", T: 13 }, { no: 6, name: "max_lines", kind: "scalar", T: 13, opt: true }, { no: 7, name: "max_bytes", kind: "scalar", T: 13, opt: true }, { no: 8, name: "first_line_exceeds_limit", kind: "scalar", T: 8 }, { no: 9, name: "last_line_partial", kind: "scalar", T: 8 }]), Wp = wa.makeMessageType("agent.v1.PiEditReplacement", () => [{ no: 1, name: "old_text", kind: "scalar", T: 9 }, { no: 2, name: "new_text", kind: "scalar", T: 9 }]), Kp = wa.makeMessageType("agent.v1.ConnectScmRequestResponse", () => [{ no: 1, name: "approved", kind: "message", T: jp, oneof: "result" }, { no: 2, name: "rejected", kind: "message", T: Xp, oneof: "result" }, { no: 3, name: "failed", kind: "message", T: Zp, oneof: "result" }]), jp = wa.makeMessageType("agent.v1.ConnectScmRequestResponse.Approved", [], { localName: "ConnectScmRequestResponse_Approved" }), Xp = wa.makeMessageType("agent.v1.ConnectScmRequestResponse.Rejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }], { localName: "ConnectScmRequestResponse_Rejected" }), Zp = wa.makeMessageType("agent.v1.ConnectScmRequestResponse.Failed", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }], { localName: "ConnectScmRequestResponse_Failed" }), zp = wa.makeEnum("agent.v1.ConversationSearchSource", [{ no: 0, name: "CONVERSATION_SEARCH_SOURCE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CONVERSATION_SEARCH_SOURCE_LOCAL", localName: "LOCAL" }, { no: 2, name: "CONVERSATION_SEARCH_SOURCE_CLOUD_CACHE", localName: "CLOUD_CACHE" }]), $p = wa.makeMessageType("agent.v1.ConversationSearchArgs", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 3, name: "limit", kind: "scalar", T: 5, opt: true }]), eT = wa.makeMessageType("agent.v1.ConversationSearchResult", () => [{ no: 1, name: "success", kind: "message", T: nT, oneof: "result" }, { no: 2, name: "error", kind: "message", T: tT, oneof: "result" }]), nT = wa.makeMessageType("agent.v1.ConversationSearchSuccess", () => [{ no: 1, name: "hits", kind: "message", T: aT, repeated: true }, { no: 2, name: "truncated", kind: "scalar", T: 8 }, { no: 3, name: "partial", kind: "scalar", T: 8 }, { no: 4, name: "rebuilding", kind: "scalar", T: 8 }]), aT = wa.makeMessageType("agent.v1.ConversationSearchHit", () => [{ no: 1, name: "conversation_id", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9 }, { no: 3, name: "source", kind: "enum", T: wa.getEnumType(zp) }, { no: 4, name: "updated_at_ms", kind: "scalar", T: 3 }, { no: 5, name: "snippet", kind: "scalar", T: 9, opt: true }]), tT = wa.makeMessageType("agent.v1.ConversationSearchError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), sT = wa.makeEnum("agent.v1.PackageType", [{ no: 0, name: "PACKAGE_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "PACKAGE_TYPE_CURSOR_PROJECT", localName: "CURSOR_PROJECT" }, { no: 2, name: "PACKAGE_TYPE_CURSOR_PERSONAL", localName: "CURSOR_PERSONAL" }, { no: 3, name: "PACKAGE_TYPE_CLAUDE_SKILL", localName: "CLAUDE_SKILL" }, { no: 4, name: "PACKAGE_TYPE_CLAUDE_PLUGIN", localName: "CLAUDE_PLUGIN" }]), oT = wa.makeMessageType("agent.v1.RepositoryIndexingInfo", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "remote_urls", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "remote_names", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "repo_name", kind: "scalar", T: 9 }, { no: 5, name: "repo_owner", kind: "scalar", T: 9 }, { no: 6, name: "is_tracked", kind: "scalar", T: 8 }, { no: 7, name: "is_local", kind: "scalar", T: 8 }, { no: 8, name: "orthogonal_transform_seed", kind: "scalar", T: 1, opt: true }, { no: 9, name: "workspace_uri", kind: "scalar", T: 9 }, { no: 10, name: "path_encryption_key", kind: "scalar", T: 9 }]), rT = wa.makeMessageType("agent.v1.AgentSkill", () => [{ no: 1, name: "full_path", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }, { no: 3, name: "description", kind: "scalar", T: 9 }, { no: 4, name: "parse_error", kind: "scalar", T: 9, opt: true }, { no: 5, name: "environments", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "disabled_environments", kind: "scalar", T: 9, repeated: true }, { no: 7, name: "git_remote_origin", kind: "scalar", T: 9, opt: true }, { no: 8, name: "disable_model_invocation", kind: "scalar", T: 8 }, { no: 9, name: "plugin", kind: "scalar", T: 9, opt: true }, { no: 10, name: "marketplace", kind: "scalar", T: 9, opt: true }, { no: 11, name: "plugin_id", kind: "scalar", T: 9, opt: true }, { no: 12, name: "marketplace_id", kind: "scalar", T: 9, opt: true }, { no: 13, name: "globs", kind: "scalar", T: 9, repeated: true }, { no: 14, name: "scoped_to", kind: "scalar", T: 9, repeated: true }, { no: 15, name: "argument_hint", kind: "scalar", T: 9 }, { no: 16, name: "disable_user_invocation", kind: "scalar", T: 8 }]), iT = wa.makeMessageType("agent.v1.SystemPromptSpec", () => [{ no: 1, name: "replace", kind: "scalar", T: 9, oneof: "spec" }, { no: 2, name: "append", kind: "scalar", T: 9, oneof: "spec" }]), AT = wa.makeEnum("agent.v1.MountedAgentStoreKind", [{ no: 0, name: "MOUNTED_AGENT_STORE_KIND_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "MOUNTED_AGENT_STORE_KIND_SELF", localName: "SELF" }, { no: 2, name: "MOUNTED_AGENT_STORE_KIND_PEER", localName: "PEER" }, { no: 3, name: "MOUNTED_AGENT_STORE_KIND_SHARE", localName: "SHARE" }, { no: 4, name: "MOUNTED_AGENT_STORE_KIND_PRINCIPAL", localName: "PRINCIPAL" }]), lT = wa.makeMessageType("agent.v1.RequestContextArgs", () => [{ no: 2, name: "notes_session_id", kind: "scalar", T: 9, opt: true }, { no: 3, name: "workspace_id", kind: "scalar", T: 9, opt: true }, { no: 4, name: "read_only_pinned_tree_sha", kind: "scalar", T: 9, opt: true }, { no: 5, name: "read_only_plugin_cache_root", kind: "scalar", T: 9, opt: true }, { no: 7, name: "use_cached", kind: "scalar", T: 8, opt: true }, { no: 8, name: "wait_for_workspace_cache", kind: "scalar", T: 8, opt: true }]), cT = wa.makeMessageType("agent.v1.RequestContextResult", () => [{ no: 1, name: "success", kind: "message", T: mT, oneof: "result" }, { no: 2, name: "error", kind: "message", T: dT, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: gT, oneof: "result" }]), mT = wa.makeMessageType("agent.v1.RequestContextSuccess", () => [{ no: 1, name: "request_context", kind: "message", T: QT }, { no: 2, name: "served_from_disk_cache", kind: "scalar", T: 8, opt: true }]), dT = wa.makeMessageType("agent.v1.RequestContextError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), gT = wa.makeMessageType("agent.v1.RequestContextRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), uT = wa.makeMessageType("agent.v1.GitRepoInfo", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "status", kind: "scalar", T: 9 }, { no: 3, name: "branch_name", kind: "scalar", T: 9 }, { no: 4, name: "remote_url", kind: "scalar", T: 9, opt: true }, { no: 5, name: "previous_branch_is_ancestor", kind: "scalar", T: 8, opt: true }, { no: 6, name: "is_origin_backed", kind: "scalar", T: 8, opt: true }]), ET = wa.makeMessageType("agent.v1.RequestContextEnv", () => [{ no: 1, name: "os_version", kind: "scalar", T: 9 }, { no: 2, name: "workspace_paths", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "shell", kind: "scalar", T: 9 }, { no: 5, name: "sandbox_enabled", kind: "scalar", T: 8 }, { no: 7, name: "terminals_folder", kind: "scalar", T: 9 }, { no: 8, name: "agent_shared_notes_folder", kind: "scalar", T: 9 }, { no: 9, name: "agent_conversation_notes_folder", kind: "scalar", T: 9 }, { no: 10, name: "time_zone", kind: "scalar", T: 9 }, { no: 11, name: "project_folder", kind: "scalar", T: 9 }, { no: 12, name: "agent_transcripts_folder", kind: "scalar", T: 9 }, { no: 13, name: "artifacts_folder", kind: "scalar", T: 9, opt: true }, { no: 14, name: "sandbox_supported", kind: "scalar", T: 8, opt: true }, { no: 16, name: "sandbox_network_has_defaults", kind: "scalar", T: 8, opt: true }, { no: 17, name: "sandbox_network_explicit_allowlist", kind: "scalar", T: 9, repeated: true }, { no: 18, name: "secret_redaction_enabled", kind: "scalar", T: 8, opt: true }, { no: 19, name: "computer_use_supported", kind: "scalar", T: 8, opt: true }, { no: 20, name: "is_working_dir_home_dir", kind: "scalar", T: 8, opt: true }, { no: 21, name: "process_working_directory", kind: "scalar", T: 9, opt: true }, { no: 22, name: "smart_mode_classifier_auto_mode_enabled", kind: "scalar", T: 8, opt: true }, { no: 23, name: "dev_force_next_smart_mode_classifier_block_token", kind: "scalar", T: 9, opt: true }, { no: 24, name: "dev_delay_next_smart_mode_classifier_token", kind: "scalar", T: 9, opt: true }, { no: 25, name: "mounted_agent_stores", kind: "message", T: pT, repeated: true }, { no: 26, name: "user_agent_store_web_context", kind: "message", T: TT, opt: true }, { no: 27, name: "dev_mock_prompt_time", kind: "message", T: ls, opt: true }, { no: 28, name: "agent_store_dynamic_mount_enabled", kind: "scalar", T: 8, opt: true }]), pT = wa.makeMessageType("agent.v1.MountedAgentStore", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "kind", kind: "enum", T: wa.getEnumType(AT) }, { no: 3, name: "alias", kind: "scalar", T: 9, opt: true }, { no: 4, name: "read_only", kind: "scalar", T: 8 }, { no: 5, name: "inherited_from_path", kind: "scalar", T: 9, opt: true }]), TT = wa.makeMessageType("agent.v1.UserAgentStoreWebContext", () => [{ no: 1, name: "store_id", kind: "scalar", T: 9 }, { no: 2, name: "portal_base_url", kind: "scalar", T: 9 }]), kT = wa.makeMessageType("agent.v1.DebugModeConfig", () => [{ no: 1, name: "log_path", kind: "scalar", T: 9 }, { no: 2, name: "server_endpoint", kind: "scalar", T: 9 }, { no: 3, name: "session_id", kind: "scalar", T: 9 }]), IT = wa.makeMessageType("agent.v1.SkillDescriptor", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "description", kind: "scalar", T: 9 }, { no: 3, name: "folder_path", kind: "scalar", T: 9 }, { no: 4, name: "enabled", kind: "scalar", T: 8 }, { no: 5, name: "parse_error", kind: "scalar", T: 9, opt: true }, { no: 6, name: "readme_file_path", kind: "scalar", T: 9 }, { no: 7, name: "package_type", kind: "enum", T: wa.getEnumType(sT) }]), hT = wa.makeMessageType("agent.v1.SkillOptions", () => [{ no: 1, name: "skill_descriptors", kind: "message", T: IT, repeated: true }]), _T = wa.makeMessageType("agent.v1.HooksConfigInfo", () => [{ no: 1, name: "configured_steps", kind: "scalar", T: 9, repeated: true }]), CT = wa.makeMessageType("agent.v1.PermissionsAutoRunInstructions", () => [{ no: 1, name: "allow_instructions", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "block_instructions", kind: "scalar", T: 9, repeated: true }]), fT = wa.makeMessageType("agent.v1.PrecomputedHumanChangeRenderedDiff", () => [{ no: 1, name: "start_line_number", kind: "scalar", T: 5 }, { no: 2, name: "end_line_number_exclusive", kind: "scalar", T: 5 }, { no: 3, name: "before_context_lines", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "removed_lines", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "added_lines", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "after_context_lines", kind: "scalar", T: 9, repeated: true }]), BT = wa.makeMessageType("agent.v1.PrecomputedHumanChange", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "rendered_diffs", kind: "message", T: fT, repeated: true }, { no: 3, name: "is_new_file", kind: "scalar", T: 8 }, { no: 4, name: "is_deleted_file", kind: "scalar", T: 8 }]), QT = wa.makeMessageType("agent.v1.RequestContext", () => [{ no: 2, name: "rules", kind: "message", T: dE, repeated: true }, { no: 4, name: "env", kind: "message", T: ET }, { no: 6, name: "repository_info", kind: "message", T: oT, repeated: true }, { no: 7, name: "tools", kind: "message", T: CE, repeated: true }, { no: 8, name: "conversation_notes_listing", kind: "scalar", T: 9, opt: true }, { no: 9, name: "shared_notes_listing", kind: "scalar", T: 9, opt: true }, { no: 11, name: "git_repos", kind: "message", T: uT, repeated: true }, { no: 13, name: "project_layouts", kind: "message", T: KA, repeated: true }, { no: 14, name: "mcp_instructions", kind: "message", T: fE, repeated: true }, { no: 15, name: "debug_mode_config", kind: "message", T: kT, opt: true }, { no: 16, name: "cloud_rule", kind: "scalar", T: 9, opt: true }, { no: 17, name: "web_search_enabled", kind: "scalar", T: 8, opt: true }, { no: 18, name: "skill_options", kind: "message", T: hT, opt: true }, { no: 19, name: "repository_info_should_query_prod", kind: "scalar", T: 8, opt: true }, { no: 20, name: "file_contents", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }, { no: 21, name: "user_intent_summary", kind: "scalar", T: 9, opt: true }, { no: 22, name: "custom_subagents", kind: "message", T: VA, repeated: true }, { no: 23, name: "mcp_file_system_options", kind: "message", T: yE, opt: true }, { no: 24, name: "web_fetch_enabled", kind: "scalar", T: 8, opt: true }, { no: 25, name: "hooks_additional_context", kind: "scalar", T: 9, opt: true }, { no: 26, name: "commit_attribution_message", kind: "scalar", T: 9, opt: true }, { no: 27, name: "pr_attribution_message", kind: "scalar", T: 9, opt: true }, { no: 28, name: "hooks_config", kind: "message", T: _T, opt: true }, { no: 29, name: "agent_skills", kind: "message", T: rT, repeated: true }, { no: 30, name: "precomputed_human_changes", kind: "message", T: BT, repeated: true }, { no: 31, name: "recently_added_plugin", kind: "message", T: yT, opt: true }, { no: 32, name: "supports_mcp_auth", kind: "scalar", T: 8, opt: true }, { no: 33, name: "git_repo_info_complete", kind: "scalar", T: 8, opt: true }, { no: 34, name: "mcp_meta_tool_options", kind: "message", T: RE, opt: true }, { no: 35, name: "read_lints_enabled", kind: "scalar", T: 8, opt: true }, { no: 36, name: "mcp_info_complete", kind: "scalar", T: 8, opt: true }, { no: 37, name: "non_file_rules", kind: "message", T: dE, repeated: true }, { no: 38, name: "matched_installed_plugin", kind: "message", T: NT, opt: true }, { no: 39, name: "rules_info_complete", kind: "scalar", T: 8, opt: true }, { no: 40, name: "env_info_complete", kind: "scalar", T: 8, opt: true }, { no: 41, name: "repository_info_complete", kind: "scalar", T: 8, opt: true }, { no: 42, name: "custom_subagents_info_complete", kind: "scalar", T: 8, opt: true }, { no: 43, name: "agent_skills_info_complete", kind: "scalar", T: 8, opt: true }, { no: 44, name: "mcp_file_system_info_complete", kind: "scalar", T: 8, opt: true }, { no: 45, name: "git_status_info_complete", kind: "scalar", T: 8, opt: true }, { no: 46, name: "user_permissions_auto_run", kind: "message", T: CT, opt: true }, { no: 47, name: "project_permissions_auto_run", kind: "message", T: CT, opt: true }, { no: 48, name: "admin_permissions_auto_run", kind: "message", T: CT, opt: true }, { no: 49, name: "disabled_team_rules", kind: "scalar", T: 9, repeated: true }, { no: 50, name: "search_conversations_enabled", kind: "scalar", T: 8, opt: true }, { no: 51, name: "send_message_enabled", kind: "scalar", T: 8, opt: true }, { no: 52, name: "admin_command_denylist", kind: "scalar", T: 9, repeated: true }, { no: 53, name: "system_prompt_override", kind: "message", T: iT, opt: true }]), yT = wa.makeMessageType("agent.v1.RecentlyAddedPlugin", () => [{ no: 1, name: "display_name", kind: "scalar", T: 9 }, { no: 2, name: "description", kind: "scalar", T: 9 }, { no: 3, name: "skills", kind: "message", T: RT, repeated: true }, { no: 4, name: "subagents", kind: "message", T: RT, repeated: true }, { no: 5, name: "hooks", kind: "message", T: RT, repeated: true }, { no: 6, name: "rules", kind: "message", T: RT, repeated: true }, { no: 7, name: "commands", kind: "message", T: RT, repeated: true }, { no: 8, name: "mcp_servers", kind: "scalar", T: 9, repeated: true }]), RT = wa.makeMessageType("agent.v1.RecentlyAddedPlugin.CapabilityDescriptor", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "description", kind: "scalar", T: 9 }], { localName: "RecentlyAddedPlugin_CapabilityDescriptor" }), NT = wa.makeMessageType("agent.v1.MatchedInstalledPlugin", () => [{ no: 1, name: "display_name", kind: "scalar", T: 9 }, { no: 2, name: "description", kind: "scalar", T: 9 }, { no: 3, name: "matched_keyword", kind: "scalar", T: 9 }, { no: 4, name: "skills", kind: "message", T: RT, repeated: true }, { no: 5, name: "subagents", kind: "message", T: RT, repeated: true }, { no: 6, name: "hooks", kind: "message", T: RT, repeated: true }, { no: 7, name: "rules", kind: "message", T: RT, repeated: true }, { no: 8, name: "commands", kind: "message", T: RT, repeated: true }, { no: 9, name: "mcp_servers", kind: "scalar", T: 9, repeated: true }]), vT = wa.makeEnum("agent.v1.SelectedPluginCapabilityType", [{ no: 0, name: "SELECTED_PLUGIN_CAPABILITY_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SELECTED_PLUGIN_CAPABILITY_TYPE_COMMAND", localName: "COMMAND" }, { no: 2, name: "SELECTED_PLUGIN_CAPABILITY_TYPE_SKILL", localName: "SKILL" }, { no: 3, name: "SELECTED_PLUGIN_CAPABILITY_TYPE_SUBAGENT", localName: "SUBAGENT" }]), ST = wa.makeMessageType("agent.v1.SelectedImage", () => [{ no: 1, name: "blob_id", kind: "scalar", T: 12, oneof: "data_or_blob_id" }, { no: 8, name: "data", kind: "scalar", T: 12, oneof: "data_or_blob_id" }, { no: 9, name: "blob_id_with_data", kind: "message", T: DT, oneof: "data_or_blob_id" }, { no: 10, name: "prompt_upload_ref", kind: "message", T: bT, oneof: "data_or_blob_id" }, { no: 2, name: "uuid", kind: "scalar", T: 9 }, { no: 3, name: "path", kind: "scalar", T: 9 }, { no: 4, name: "dimension", kind: "message", T: wT }, { no: 7, name: "mime_type", kind: "scalar", T: 9 }]), DT = wa.makeMessageType("agent.v1.SelectedImage.BlobIdWithData", () => [{ no: 1, name: "blob_id", kind: "scalar", T: 12 }, { no: 2, name: "data", kind: "scalar", T: 12 }], { localName: "SelectedImage_BlobIdWithData" }), wT = wa.makeMessageType("agent.v1.SelectedImage.Dimension", () => [{ no: 1, name: "width", kind: "scalar", T: 5 }, { no: 2, name: "height", kind: "scalar", T: 5 }], { localName: "SelectedImage_Dimension" }), bT = wa.makeMessageType("agent.v1.PromptUploadRef", () => [{ no: 1, name: "upload_id", kind: "scalar", T: 9 }]), MT = wa.makeMessageType("agent.v1.SelectedDocument", () => [{ no: 1, name: "blob_id", kind: "scalar", T: 12, oneof: "data_or_blob_id" }, { no: 8, name: "data", kind: "scalar", T: 12, oneof: "data_or_blob_id" }, { no: 9, name: "blob_id_with_data", kind: "message", T: FT, oneof: "data_or_blob_id" }, { no: 10, name: "prompt_upload_ref", kind: "message", T: bT, oneof: "data_or_blob_id" }, { no: 2, name: "uuid", kind: "scalar", T: 9 }, { no: 3, name: "filename", kind: "scalar", T: 9 }, { no: 4, name: "mime_type", kind: "scalar", T: 9 }, { no: 7, name: "path", kind: "scalar", T: 9 }]), FT = wa.makeMessageType("agent.v1.SelectedDocument.BlobIdWithData", () => [{ no: 1, name: "blob_id", kind: "scalar", T: 12 }, { no: 2, name: "data", kind: "scalar", T: 12 }], { localName: "SelectedDocument_BlobIdWithData" }), OT = wa.makeMessageType("agent.v1.SelectedVideo", () => [{ no: 1, name: "blob_id", kind: "scalar", T: 12, oneof: "data_or_blob_id" }, { no: 8, name: "data", kind: "scalar", T: 12, oneof: "data_or_blob_id" }, { no: 9, name: "blob_id_with_data", kind: "message", T: UT, oneof: "data_or_blob_id" }, { no: 11, name: "signed_url", kind: "message", T: LT, oneof: "data_or_blob_id" }, { no: 2, name: "uuid", kind: "scalar", T: 9 }, { no: 3, name: "path", kind: "scalar", T: 9 }, { no: 4, name: "fps", kind: "scalar", T: 2, opt: true }, { no: 7, name: "mime_type", kind: "scalar", T: 9 }, { no: 10, name: "filename", kind: "scalar", T: 9 }, { no: 12, name: "materialize_to_filesystem", kind: "scalar", T: 8 }]), UT = wa.makeMessageType("agent.v1.SelectedVideo.BlobIdWithData", () => [{ no: 1, name: "blob_id", kind: "scalar", T: 12 }, { no: 2, name: "data", kind: "scalar", T: 12 }], { localName: "SelectedVideo_BlobIdWithData" }), LT = wa.makeMessageType("agent.v1.SelectedVideo.SignedUrl", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "key", kind: "scalar", T: 9 }, { no: 3, name: "expires_at_unix_ms", kind: "scalar", T: 3 }, { no: 4, name: "refresh_after_unix_ms", kind: "scalar", T: 3 }, { no: 5, name: "conversation_id", kind: "scalar", T: 9 }], { localName: "SelectedVideo_SignedUrl" }), PT = wa.makeMessageType("agent.v1.ExtraContextEntry", () => [{ no: 1, name: "data", kind: "scalar", T: 9, oneof: "data_or_blob_id" }, { no: 2, name: "blob_id", kind: "scalar", T: 12, oneof: "data_or_blob_id" }]), xT = wa.makeMessageType("agent.v1.SelectedFile", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9 }, { no: 3, name: "relative_path", kind: "scalar", T: 9, opt: true }]), GT = wa.makeMessageType("agent.v1.SelectedCodeSelection", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9 }, { no: 3, name: "relative_path", kind: "scalar", T: 9, opt: true }, { no: 4, name: "range", kind: "message", T: yr }]), YT = wa.makeMessageType("agent.v1.SelectedTerminal", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9, opt: true }, { no: 3, name: "path", kind: "scalar", T: 9, opt: true }]), JT = wa.makeMessageType("agent.v1.SelectedTerminalSelection", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9, opt: true }, { no: 3, name: "path", kind: "scalar", T: 9, opt: true }, { no: 4, name: "range", kind: "message", T: yr }]), VT = wa.makeMessageType("agent.v1.SelectedFolder", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "relative_path", kind: "scalar", T: 9, opt: true }, { no: 3, name: "directory_tree", kind: "message", T: KA }]), qT = wa.makeMessageType("agent.v1.SelectedExternalLink", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "uuid", kind: "scalar", T: 9 }, { no: 3, name: "pdf_content", kind: "scalar", T: 9, opt: true }, { no: 4, name: "is_pdf", kind: "scalar", T: 8, opt: true }, { no: 5, name: "filename", kind: "scalar", T: 9, opt: true }, { no: 6, name: "blob_id", kind: "scalar", T: 12, opt: true }]), HT = wa.makeMessageType("agent.v1.SelectedCursorRule", () => [{ no: 1, name: "rule", kind: "message", T: dE }]), WT = wa.makeMessageType("agent.v1.SelectedGitDiff", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "full_content_length_char_count", kind: "scalar", T: 5 }]), KT = wa.makeMessageType("agent.v1.SelectedGitDiffFromBranchToMain", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "full_content_length_char_count", kind: "scalar", T: 5 }]), jT = wa.makeMessageType("agent.v1.SelectedGitCommit", () => [{ no: 1, name: "sha", kind: "scalar", T: 9 }, { no: 2, name: "message", kind: "scalar", T: 9 }, { no: 3, name: "description", kind: "scalar", T: 9, opt: true }, { no: 4, name: "diff", kind: "scalar", T: 9 }]), XT = wa.makeMessageType("agent.v1.SelectedPullRequest", () => [{ no: 1, name: "number", kind: "scalar", T: 5 }, { no: 2, name: "url", kind: "scalar", T: 9 }, { no: 3, name: "title", kind: "scalar", T: 9, opt: true }, { no: 4, name: "folder_path", kind: "scalar", T: 9 }, { no: 5, name: "summary_json", kind: "scalar", T: 9, opt: true }, { no: 6, name: "description", kind: "scalar", T: 9, opt: true }, { no: 7, name: "blob_id", kind: "scalar", T: 12, opt: true }]), ZT = wa.makeMessageType("agent.v1.SelectedGitPRDiffSelection", () => [{ no: 1, name: "pr_url", kind: "scalar", T: 9 }, { no: 2, name: "file_path", kind: "scalar", T: 9 }, { no: 3, name: "start_line", kind: "scalar", T: 5 }, { no: 4, name: "end_line", kind: "scalar", T: 5 }, { no: 5, name: "diff_content", kind: "scalar", T: 9, opt: true }, { no: 6, name: "blob_id", kind: "scalar", T: 12, opt: true }]), zT = wa.makeMessageType("agent.v1.SelectedPluginCapabilityRef", () => [{ no: 1, name: "plugin_id", kind: "scalar", T: 9 }, { no: 2, name: "capability_type", kind: "enum", T: wa.getEnumType(vT) }, { no: 3, name: "source_path", kind: "scalar", T: 9 }, { no: 4, name: "snapshot_token", kind: "scalar", T: 9 }, { no: 5, name: "resolved_commit_sha", kind: "scalar", T: 9, opt: true }]), $T = wa.makeMessageType("agent.v1.SelectedCursorCommand", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }, { no: 3, name: "plugin_capability", kind: "message", T: zT, opt: true }, { no: 4, name: "full_path", kind: "scalar", T: 9, opt: true }, { no: 5, name: "display_name", kind: "scalar", T: 9, opt: true }]), ek = wa.makeMessageType("agent.v1.SelectedDocumentation", () => [{ no: 1, name: "doc_id", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9 }]), nk = wa.makeMessageType("agent.v1.SelectedPastChat", () => [{ no: 1, name: "agent_id", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9 }]), ak = wa.makeMessageType("agent.v1.RecentAgent", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9 }, { no: 3, name: "overview", kind: "scalar", T: 9, opt: true }]), tk = wa.makeMessageType("agent.v1.RecentAgentsContext", () => [{ no: 1, name: "recent_agents", kind: "message", T: ak, repeated: true }]), sk = wa.makeMessageType("agent.v1.CallFrame", () => [{ no: 1, name: "function_name", kind: "scalar", T: 9, opt: true }, { no: 2, name: "url", kind: "scalar", T: 9, opt: true }, { no: 3, name: "line_number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "column_number", kind: "scalar", T: 5, opt: true }]), ok = wa.makeMessageType("agent.v1.StackTrace", () => [{ no: 1, name: "call_frames", kind: "message", T: sk, repeated: true }, { no: 2, name: "raw_stack_trace", kind: "scalar", T: 9, opt: true }]), rk = wa.makeMessageType("agent.v1.SelectedConsoleLog", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "timestamp", kind: "scalar", T: 1 }, { no: 3, name: "level", kind: "scalar", T: 9 }, { no: 4, name: "client_name", kind: "scalar", T: 9 }, { no: 5, name: "session_id", kind: "scalar", T: 9 }, { no: 6, name: "stack_trace", kind: "message", T: ok, opt: true }, { no: 7, name: "object_data_json", kind: "scalar", T: 9, opt: true }]), ik = wa.makeMessageType("agent.v1.SelectedUIElement", () => [{ no: 1, name: "element", kind: "scalar", T: 9 }, { no: 2, name: "xpath", kind: "scalar", T: 9 }, { no: 3, name: "text_content", kind: "scalar", T: 9 }, { no: 4, name: "extra", kind: "scalar", T: 9 }, { no: 5, name: "component", kind: "scalar", T: 9, opt: true }, { no: 6, name: "component_props_json", kind: "scalar", T: 9, opt: true }]), Ak = wa.makeMessageType("agent.v1.SelectedSubagent", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }]), lk = wa.makeMessageType("agent.v1.SelectedBrowser", () => [{ no: 1, name: "browser_id", kind: "scalar", T: 9 }, { no: 2, name: "url", kind: "scalar", T: 9 }, { no: 3, name: "page_title", kind: "scalar", T: 9, opt: true }]), ck = wa.makeMessageType("agent.v1.SelectedAgenticGitActionCommitParams", () => [{ no: 1, name: "files_to_commit", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "files_to_exclude_from_commit", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "should_stage_all_changes", kind: "scalar", T: 8 }, { no: 4, name: "create_pr_draft", kind: "scalar", T: 8, opt: true }, { no: 5, name: "files_to_commit_with_status", kind: "message", T: dk, repeated: true }, { no: 6, name: "files_to_exclude_from_commit_with_status", kind: "message", T: dk, repeated: true }]), mk = wa.makeMessageType("agent.v1.SelectedAgenticGitActionCreateBranchParams", []), dk = wa.makeMessageType("agent.v1.SelectedAgenticGitFileWithStatus", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "status", kind: "scalar", T: 9, opt: true }]), gk = wa.makeMessageType("agent.v1.SelectedAgenticGitActionPushParams", () => [{ no: 1, name: "files_to_push", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "create_pr_draft", kind: "scalar", T: 8, opt: true }]), uk = wa.makeMessageType("agent.v1.SelectedAgenticGitActionFixMergeConflictsParams", () => [{ no: 1, name: "base_branch", kind: "scalar", T: 9, opt: true }, { no: 2, name: "pr_url", kind: "scalar", T: 9, opt: true }]), Ek = wa.makeMessageType("agent.v1.SelectedAgenticGitActionBabysitPrInCloudParams", () => [{ no: 1, name: "base_branch", kind: "scalar", T: 9, opt: true }]), pk = wa.makeMessageType("agent.v1.SelectedAgenticGitActionUpdateBranchParams", () => [{ no: 1, name: "base_branch", kind: "scalar", T: 9, opt: true }]), Tk = wa.makeMessageType("agent.v1.SelectedAgenticGitActionPullLocallyParams", () => [{ no: 1, name: "remote_branch", kind: "scalar", T: 9 }]), kk = wa.makeMessageType("agent.v1.SelectedAgenticGitAction", () => [{ no: 2, name: "commit_params", kind: "message", T: ck, oneof: "params" }, { no: 6, name: "commit_and_push_params", kind: "message", T: ck, oneof: "params" }, { no: 3, name: "push_params", kind: "message", T: gk, oneof: "params" }, { no: 7, name: "create_pr_params", kind: "message", T: gk, oneof: "params" }, { no: 8, name: "create_pr_with_changes_params", kind: "message", T: ck, oneof: "params" }, { no: 4, name: "fix_merge_conflicts_params", kind: "message", T: uk, oneof: "params" }, { no: 11, name: "babysit_pr_in_cloud_params", kind: "message", T: Ek, oneof: "params" }, { no: 14, name: "apply_locally_params", kind: "message", T: Tk, oneof: "params" }, { no: 15, name: "checkout_branch_params", kind: "message", T: Tk, oneof: "params" }, { no: 12, name: "create_branch_and_commit_params", kind: "message", T: ck, oneof: "params" }, { no: 13, name: "create_branch_commit_and_push_params", kind: "message", T: ck, oneof: "params" }, { no: 16, name: "update_branch_params", kind: "message", T: pk, oneof: "params" }, { no: 17, name: "create_branch_params", kind: "message", T: mk, oneof: "params" }, { no: 5, name: "branch_context", kind: "message", T: Ik, opt: true }, { no: 9, name: "path_to_template_file", kind: "scalar", T: 9, opt: true }, { no: 10, name: "path_to_template_dir", kind: "scalar", T: 9, opt: true }]), Ik = wa.makeMessageType("agent.v1.SelectedGitBranchContext", () => [{ no: 1, name: "current_branch", kind: "scalar", T: 9, opt: true }, { no: 2, name: "base_branch", kind: "scalar", T: 9, opt: true }, { no: 3, name: "agent_branch_prefix", kind: "scalar", T: 9, opt: true }]), hk = wa.makeMessageType("agent.v1.SelectedContext", () => [{ no: 1, name: "selected_images", kind: "message", T: ST, repeated: true }, { no: 2, name: "invocation_context", kind: "message", T: _k, opt: true }, { no: 3, name: "extra_context", kind: "scalar", T: 9, repeated: true }, { no: 16, name: "extra_context_entries", kind: "message", T: PT, repeated: true }, { no: 4, name: "files", kind: "message", T: xT, repeated: true }, { no: 5, name: "code_selections", kind: "message", T: GT, repeated: true }, { no: 6, name: "terminals", kind: "message", T: YT, repeated: true }, { no: 7, name: "terminal_selections", kind: "message", T: JT, repeated: true }, { no: 8, name: "folders", kind: "message", T: VT, repeated: true }, { no: 9, name: "external_links", kind: "message", T: qT, repeated: true }, { no: 10, name: "cursor_rules", kind: "message", T: HT, repeated: true }, { no: 18, name: "git_diff", kind: "message", T: WT, opt: true }, { no: 11, name: "git_diff_from_branch_to_main", kind: "message", T: KT, opt: true }, { no: 12, name: "cursor_commands", kind: "message", T: $T, repeated: true }, { no: 13, name: "documentations", kind: "message", T: ek, repeated: true }, { no: 14, name: "ui_elements", kind: "message", T: ik, repeated: true }, { no: 15, name: "console_logs", kind: "message", T: rk, repeated: true }, { no: 17, name: "git_commits", kind: "message", T: jT, repeated: true }, { no: 19, name: "past_chats", kind: "message", T: nk, repeated: true }, { no: 20, name: "git_pr_diff_selections", kind: "message", T: ZT, repeated: true }, { no: 21, name: "selected_pull_requests", kind: "message", T: XT, repeated: true }, { no: 22, name: "selected_subagents", kind: "message", T: Ak, repeated: true }, { no: 23, name: "selected_videos", kind: "message", T: OT, repeated: true }, { no: 24, name: "selected_browsers", kind: "message", T: lk, repeated: true }, { no: 25, name: "selected_documents", kind: "message", T: MT, repeated: true }, { no: 26, name: "selected_skills", kind: "message", T: rT, repeated: true }, { no: 27, name: "recent_agents_context", kind: "message", T: tk, opt: true }, { no: 34, name: "selected_agentic_git_action", kind: "message", T: kk, opt: true }]), _k = wa.makeMessageType("agent.v1.InvocationContext", () => [{ no: 1, name: "slack_thread", kind: "message", T: Ck, oneof: "data" }, { no: 2, name: "github_pr", kind: "message", T: Bk, oneof: "data" }, { no: 3, name: "ide_state", kind: "message", T: Qk, oneof: "data" }, { no: 4, name: "microsoft_teams_thread", kind: "message", T: fk, oneof: "data" }, { no: 10, name: "blob_id", kind: "scalar", T: 12, oneof: "data" }]), Ck = wa.makeMessageType("agent.v1.InvocationContext.SlackThread", () => [{ no: 1, name: "thread", kind: "scalar", T: 9 }, { no: 2, name: "channel_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "channel_purpose", kind: "scalar", T: 9, opt: true }, { no: 4, name: "channel_topic", kind: "scalar", T: 9, opt: true }, { no: 5, name: "sender_name", kind: "scalar", T: 9, opt: true }, { no: 6, name: "sender_id", kind: "scalar", T: 9, opt: true }, { no: 7, name: "sender_type", kind: "scalar", T: 9, opt: true }, { no: 8, name: "is_directly_addressed", kind: "scalar", T: 8, opt: true }], { localName: "InvocationContext_SlackThread" }), fk = wa.makeMessageType("agent.v1.InvocationContext.MicrosoftTeamsThread", () => [{ no: 1, name: "thread", kind: "scalar", T: 9 }, { no: 2, name: "channel_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "team_name", kind: "scalar", T: 9, opt: true }, { no: 4, name: "channel_description", kind: "scalar", T: 9, opt: true }, { no: 5, name: "team_description", kind: "scalar", T: 9, opt: true }], { localName: "InvocationContext_MicrosoftTeamsThread" }), Bk = wa.makeMessageType("agent.v1.InvocationContext.GithubPR", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "description", kind: "scalar", T: 9 }, { no: 3, name: "comments", kind: "scalar", T: 9 }, { no: 4, name: "ci_failures", kind: "scalar", T: 9, opt: true }], { localName: "InvocationContext_GithubPR" }), Qk = wa.makeMessageType("agent.v1.InvocationContext.IdeState", () => [{ no: 1, name: "visible_files", kind: "message", T: yk, repeated: true }, { no: 2, name: "recently_viewed_files", kind: "message", T: yk, repeated: true }, { no: 3, name: "currently_viewed_prs", kind: "message", T: Nk, repeated: true }], { localName: "InvocationContext_IdeState" }), yk = wa.makeMessageType("agent.v1.InvocationContext.IdeState.File", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "relative_path", kind: "scalar", T: 9, opt: true }, { no: 3, name: "cursor_position", kind: "message", T: Rk, opt: true }, { no: 4, name: "total_lines", kind: "scalar", T: 5 }, { no: 5, name: "active_command", kind: "scalar", T: 9, opt: true }], { localName: "InvocationContext_IdeState_File" }), Rk = wa.makeMessageType("agent.v1.InvocationContext.IdeState.File.CursorPosition", () => [{ no: 1, name: "line", kind: "scalar", T: 5 }, { no: 2, name: "text", kind: "scalar", T: 9 }], { localName: "InvocationContext_IdeState_File_CursorPosition" }), Nk = wa.makeMessageType("agent.v1.InvocationContext.IdeState.ViewedPullRequest", () => [{ no: 1, name: "number", kind: "scalar", T: 5 }, { no: 2, name: "url", kind: "scalar", T: 9 }, { no: 3, name: "title", kind: "scalar", T: 9, opt: true }, { no: 4, name: "folder_path", kind: "scalar", T: 9, opt: true }, { no: 5, name: "summary_json", kind: "scalar", T: 9, opt: true }, { no: 6, name: "description", kind: "scalar", T: 9, opt: true }], { localName: "InvocationContext_IdeState_ViewedPullRequest" }), vk = wa.makeMessageType("agent.v1.ApiKeyCredentials", () => [{ no: 1, name: "api_key", kind: "scalar", T: 9 }, { no: 2, name: "base_url", kind: "scalar", T: 9, opt: true }]), Sk = wa.makeMessageType("agent.v1.AzureCredentials", () => [{ no: 1, name: "api_key", kind: "scalar", T: 9 }, { no: 2, name: "base_url", kind: "scalar", T: 9 }, { no: 3, name: "deployment", kind: "scalar", T: 9 }]), Dk = wa.makeMessageType("agent.v1.BedrockCredentials", () => [{ no: 1, name: "access_key", kind: "scalar", T: 9 }, { no: 2, name: "secret_key", kind: "scalar", T: 9 }, { no: 3, name: "region", kind: "scalar", T: 9 }, { no: 4, name: "session_token", kind: "scalar", T: 9, opt: true }]), wk = wa.makeMessageType("agent.v1.RequestedModel", () => [{ no: 1, name: "model_id", kind: "scalar", T: 9 }, { no: 2, name: "max_mode", kind: "scalar", T: 8 }, { no: 3, name: "parameters", kind: "message", T: bk, repeated: true }, { no: 4, name: "api_key_credentials", kind: "message", T: vk, oneof: "credentials" }, { no: 5, name: "azure_credentials", kind: "message", T: Sk, oneof: "credentials" }, { no: 6, name: "bedrock_credentials", kind: "message", T: Dk, oneof: "credentials" }, { no: 7, name: "built_in_model", kind: "scalar", T: 8 }]), bk = wa.makeMessageType("agent.v1.RequestedModel.ModelParameterValue", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 9 }], { localName: "RequestedModel_ModelParameterValue" }), Mk = wa.makeEnum("agent.v1.AgentMode", [{ no: 0, name: "AGENT_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "AGENT_MODE_AGENT", localName: "AGENT" }, { no: 2, name: "AGENT_MODE_ASK", localName: "ASK" }, { no: 3, name: "AGENT_MODE_PLAN", localName: "PLAN" }, { no: 4, name: "AGENT_MODE_DEBUG", localName: "DEBUG" }, { no: 5, name: "AGENT_MODE_TRIAGE", localName: "TRIAGE" }, { no: 7, name: "AGENT_MODE_MULTITASK", localName: "MULTITASK" }, { no: 8, name: "AGENT_MODE_CUSTOM", localName: "CUSTOM" }]), Fk = wa.makeEnum("agent.v1.SimulatedMsgReason", [{ no: 0, name: "SIMULATED_MSG_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SIMULATED_MSG_REASON_PLAN_EXECUTION", localName: "PLAN_EXECUTION" }, { no: 2, name: "SIMULATED_MSG_REASON_COMMIT_REMINDER", localName: "COMMIT_REMINDER" }, { no: 3, name: "SIMULATED_MSG_REASON_BACKGROUND_TASK_COMPLETION", localName: "BACKGROUND_TASK_COMPLETION" }, { no: 4, name: "SIMULATED_MSG_REASON_DIFF_TAB_COMMIT", localName: "DIFF_TAB_COMMIT" }, { no: 5, name: "SIMULATED_MSG_REASON_DIFF_TAB_COMMIT_AND_PUSH", localName: "DIFF_TAB_COMMIT_AND_PUSH" }, { no: 6, name: "SIMULATED_MSG_REASON_DIFF_TAB_PUSH", localName: "DIFF_TAB_PUSH" }, { no: 7, name: "SIMULATED_MSG_REASON_DIFF_TAB_CREATE_PR", localName: "DIFF_TAB_CREATE_PR" }, { no: 8, name: "SIMULATED_MSG_REASON_DIFF_TAB_FIX_MERGE_CONFLICTS", localName: "DIFF_TAB_FIX_MERGE_CONFLICTS" }, { no: 9, name: "SIMULATED_MSG_REASON_USER_SENT_TO_SUBAGENT", localName: "USER_SENT_TO_SUBAGENT" }, { no: 10, name: "SIMULATED_MSG_REASON_USER_INTERRUPTED_SUBAGENT", localName: "USER_INTERRUPTED_SUBAGENT" }, { no: 11, name: "SIMULATED_MSG_REASON_USER_QUEUED_TO_SUBAGENT", localName: "USER_QUEUED_TO_SUBAGENT" }, { no: 12, name: "SIMULATED_MSG_REASON_BABYSIT_PR_IN_CLOUD", localName: "BABYSIT_PR_IN_CLOUD" }, { no: 13, name: "SIMULATED_MSG_REASON_CI_PANEL_INVESTIGATE_FAILURE", localName: "CI_PANEL_INVESTIGATE_FAILURE" }, { no: 14, name: "SIMULATED_MSG_REASON_MULTITASK", localName: "MULTITASK" }, { no: 15, name: "SIMULATED_MSG_REASON_BUILD_IN_PARALLEL", localName: "BUILD_IN_PARALLEL" }, { no: 16, name: "SIMULATED_MSG_REASON_MULTITASK_SPLIT_PRS", localName: "MULTITASK_SPLIT_PRS" }, { no: 17, name: "SIMULATED_MSG_REASON_APPLY_LOCALLY", localName: "APPLY_LOCALLY" }, { no: 18, name: "SIMULATED_MSG_REASON_CHECKOUT_BRANCH", localName: "CHECKOUT_BRANCH" }, { no: 19, name: "SIMULATED_MSG_REASON_DIFF_TAB_UPDATE_BRANCH", localName: "DIFF_TAB_UPDATE_BRANCH" }, { no: 20, name: "SIMULATED_MSG_REASON_PR_TAB_BUGBOT_FIX", localName: "PR_TAB_BUGBOT_FIX" }, { no: 22, name: "SIMULATED_MSG_REASON_RUN_BUGBOT_REVIEW", localName: "RUN_BUGBOT_REVIEW" }, { no: 23, name: "SIMULATED_MSG_REASON_RUN_SECURITY_REVIEW", localName: "RUN_SECURITY_REVIEW" }, { no: 24, name: "SIMULATED_MSG_REASON_FSD_APPLY_FINDING", localName: "FSD_APPLY_FINDING" }, { no: 25, name: "SIMULATED_MSG_REASON_FSD_UNDO_FINDING", localName: "FSD_UNDO_FINDING" }, { no: 26, name: "SIMULATED_MSG_REASON_FSD_START", localName: "FSD_START" }, { no: 27, name: "SIMULATED_MSG_REASON_FSD_PR_INTERRUPT", localName: "FSD_PR_INTERRUPT" }, { no: 28, name: "SIMULATED_MSG_REASON_SUBSCRIPTION", localName: "SUBSCRIPTION" }, { no: 29, name: "SIMULATED_MSG_REASON_DIFF_TAB_CREATE_BRANCH", localName: "DIFF_TAB_CREATE_BRANCH" }, { no: 30, name: "SIMULATED_MSG_REASON_AGENT_STORE_CONFLICT", localName: "AGENT_STORE_CONFLICT" }, { no: 31, name: "SIMULATED_MSG_REASON_GOAL_CONTINUATION", localName: "GOAL_CONTINUATION" }, { no: 32, name: "SIMULATED_MSG_REASON_PROJECT_KICKOFF", localName: "PROJECT_KICKOFF" }, { no: 33, name: "SIMULATED_MSG_REASON_MARKDOWN_PROMPT_BUTTON", localName: "MARKDOWN_PROMPT_BUTTON" }, { no: 34, name: "SIMULATED_MSG_REASON_USER_QUICK_ACTION", localName: "USER_QUICK_ACTION" }, { no: 35, name: "SIMULATED_MSG_REASON_INTERACTION_RESPONSE", localName: "INTERACTION_RESPONSE" }]), Ok = wa.makeEnum("agent.v1.SubscriptionSource", [{ no: 0, name: "SUBSCRIPTION_SOURCE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SUBSCRIPTION_SOURCE_SLACK", localName: "SLACK" }, { no: 2, name: "SUBSCRIPTION_SOURCE_GITHUB", localName: "GITHUB" }, { no: 3, name: "SUBSCRIPTION_SOURCE_LINEAR", localName: "LINEAR" }, { no: 4, name: "SUBSCRIPTION_SOURCE_ORIGIN", localName: "ORIGIN" }, { no: 5, name: "SUBSCRIPTION_SOURCE_FACTORY", localName: "FACTORY" }]), Uk = wa.makeMessageType("agent.v1.TriggeringUserInfo", () => [{ no: 1, name: "auth_id", kind: "scalar", T: 9, opt: true }, { no: 2, name: "user_id", kind: "scalar", T: 5, opt: true }]), Lk = wa.makeMessageType("agent.v1.InteractionResponseMetadata", () => [{ no: 1, name: "interaction_id", kind: "scalar", T: 9 }, { no: 2, name: "response", kind: "message", T: qk, opt: true }, { no: 3, name: "skipped_question_ids", kind: "scalar", T: 9, repeated: true }]), Pk = wa.makeMessageType("agent.v1.SubscriptionEventDisplay", () => [{ no: 1, name: "display_label", kind: "scalar", T: 9, opt: true }, { no: 2, name: "resource_url", kind: "scalar", T: 9, opt: true }, { no: 3, name: "subscription_id", kind: "scalar", T: 9, opt: true }]), xk = wa.makeMessageType("agent.v1.MessageSender", () => [{ no: 1, name: "kind", kind: "enum", T: wa.getEnumType(Gk) }, { no: 2, name: "id", kind: "scalar", T: 9 }, { no: 3, name: "display_name", kind: "scalar", T: 9 }]), Gk = wa.makeEnum("agent.v1.MessageSender.Kind", [{ no: 0, name: "KIND_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "KIND_AGENT", localName: "AGENT" }, { no: 2, name: "KIND_VOICE_CALL", localName: "VOICE_CALL" }, { no: 3, name: "KIND_MAIN_BOT", localName: "MAIN_BOT" }, { no: 4, name: "KIND_PROJECT", localName: "PROJECT" }]), Yk = wa.makeMessageType("agent.v1.ThinkingDetails", []), Jk = wa.makeMessageType("agent.v1.ClientLlmGatewayCredential", () => [{ no: 1, name: "bearer_token", kind: "scalar", T: 9 }]), Vk = wa.makeMessageType("agent.v1.ModelDetails", () => [{ no: 1, name: "model_id", kind: "scalar", T: 9 }, { no: 3, name: "display_model_id", kind: "scalar", T: 9 }, { no: 4, name: "display_name", kind: "scalar", T: 9 }, { no: 5, name: "display_name_short", kind: "scalar", T: 9 }, { no: 6, name: "aliases", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "thinking_details", kind: "message", T: Yk, opt: true }, { no: 7, name: "max_mode", kind: "scalar", T: 8, opt: true }, { no: 8, name: "api_key_credentials", kind: "message", T: vk, oneof: "credentials" }, { no: 9, name: "azure_credentials", kind: "message", T: Sk, oneof: "credentials" }, { no: 10, name: "bedrock_credentials", kind: "message", T: Dk, oneof: "credentials" }]), qk = wa.makeMessageType("agent.v1.InteractionResponse", () => [{ no: 1, name: "id", kind: "scalar", T: 13 }, { no: 2, name: "web_search_request_response", kind: "message", T: gp, oneof: "result" }, { no: 3, name: "ask_question_interaction_response", kind: "message", T: Hk, oneof: "result" }, { no: 4, name: "switch_mode_request_response", kind: "message", T: yp, oneof: "result" }, { no: 7, name: "create_plan_request_response", kind: "message", T: dp, oneof: "result" }, { no: 8, name: "setup_vm_environment_result", kind: "message", T: vp, oneof: "result" }, { no: 9, name: "web_fetch_request_response", kind: "message", T: Dp, oneof: "result" }, { no: 10, name: "pr_management_result", kind: "message", T: Mp, oneof: "result" }, { no: 11, name: "mcp_auth_request_response", kind: "message", T: xp, oneof: "result" }, { no: 12, name: "generate_image_request_response", kind: "message", T: Fi, oneof: "result" }, { no: 13, name: "replace_env_result", kind: "message", T: qp, oneof: "result" }, { no: 14, name: "connect_scm_request_response", kind: "message", T: Kp, oneof: "result" }]), Hk = wa.makeMessageType("agent.v1.AskQuestionInteractionResponse", () => [{ no: 1, name: "result", kind: "message", T: Tp }]), Wk = wa.makeMessageType("aiserver.v1.GetLintsForChangeResponse", () => [{ no: 1, name: "lints", kind: "message", T: Kk, repeated: true }]), Kk = wa.makeMessageType("aiserver.v1.GetLintsForChangeResponse.Lint", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "severity", kind: "scalar", T: 9 }, { no: 3, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 4, name: "start_line_number_one_indexed", kind: "scalar", T: 5 }, { no: 5, name: "start_column_one_indexed", kind: "scalar", T: 5 }, { no: 6, name: "end_line_number_inclusive_one_indexed", kind: "scalar", T: 5 }, { no: 7, name: "end_column_one_indexed", kind: "scalar", T: 5 }, { no: 9, name: "quick_fixes", kind: "message", T: jk, repeated: true }], { localName: "GetLintsForChangeResponse_Lint" }), jk = wa.makeMessageType("aiserver.v1.GetLintsForChangeResponse.Lint.QuickFix", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "kind", kind: "scalar", T: 9 }, { no: 3, name: "is_preferred", kind: "scalar", T: 8 }, { no: 4, name: "edits", kind: "message", T: Xk, repeated: true }], { localName: "GetLintsForChangeResponse_Lint_QuickFix" }), Xk = wa.makeMessageType("aiserver.v1.GetLintsForChangeResponse.Lint.QuickFix.Edit", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "text", kind: "scalar", T: 9 }, { no: 3, name: "start_line_number_one_indexed", kind: "scalar", T: 5 }, { no: 4, name: "start_column_one_indexed", kind: "scalar", T: 5 }, { no: 5, name: "end_line_number_inclusive_one_indexed", kind: "scalar", T: 5 }, { no: 6, name: "end_column_one_indexed", kind: "scalar", T: 5 }], { localName: "GetLintsForChangeResponse_Lint_QuickFix_Edit" }), Zk = wa.makeEnum("aiserver.v1.ChunkType", [{ no: 0, name: "CHUNK_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CHUNK_TYPE_CODEBASE", localName: "CODEBASE" }, { no: 2, name: "CHUNK_TYPE_LONG_FILE", localName: "LONG_FILE" }, { no: 3, name: "CHUNK_TYPE_DOCS", localName: "DOCS" }]), zk = wa.makeEnum("aiserver.v1.SubagentType", [{ no: 0, name: "SUBAGENT_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SUBAGENT_TYPE_DEEP_SEARCH", localName: "DEEP_SEARCH" }, { no: 2, name: "SUBAGENT_TYPE_FIX_LINTS", localName: "FIX_LINTS" }, { no: 3, name: "SUBAGENT_TYPE_TASK", localName: "TASK" }, { no: 4, name: "SUBAGENT_TYPE_SPEC", localName: "SPEC" }]), $k = wa.makeMessageType("aiserver.v1.ConversationSummary", () => [{ no: 1, name: "summary", kind: "scalar", T: 9 }, { no: 2, name: "truncation_last_bubble_id_inclusive", kind: "scalar", T: 9 }, { no: 3, name: "client_should_start_sending_from_inclusive_bubble_id", kind: "scalar", T: 9 }, { no: 4, name: "previous_conversation_summary_bubble_id", kind: "scalar", T: 9 }, { no: 5, name: "includes_tool_results", kind: "scalar", T: 8 }, { no: 6, name: "strategy", kind: "scalar", T: 9 }]), eI = wa.makeMessageType("aiserver.v1.ContextToRank", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "contents", kind: "scalar", T: 9 }, { no: 3, name: "line_range", kind: "message", T: Bo, opt: true }, { no: 4, name: "code_block", kind: "message", T: Ro, opt: true }]), nI = wa.makeMessageType("aiserver.v1.RankedContext", () => [{ no: 1, name: "context", kind: "message", T: eI }, { no: 2, name: "score", kind: "scalar", T: 2 }]), aI = wa.makeMessageType("aiserver.v1.DocumentationCitation", () => [{ no: 1, name: "chunks", kind: "message", T: Au, repeated: true }]), tI = wa.makeMessageType("aiserver.v1.WebCitation", () => [{ no: 1, name: "references", kind: "message", T: sI, repeated: true }]), sI = wa.makeMessageType("aiserver.v1.WebReference", () => [{ no: 2, name: "title", kind: "scalar", T: 9 }, { no: 1, name: "url", kind: "scalar", T: 9 }, { no: 3, name: "chunk", kind: "scalar", T: 9 }]), oI = wa.makeMessageType("aiserver.v1.DocsReference", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "url", kind: "scalar", T: 9 }, { no: 3, name: "chunk", kind: "scalar", T: 9 }, { no: 4, name: "name", kind: "scalar", T: 9 }]), rI = wa.makeMessageType("aiserver.v1.AiWebSearchResult", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9 }]), iI = wa.makeMessageType("aiserver.v1.StatusUpdate", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "metadata", kind: "scalar", T: 9, opt: true }]), AI = wa.makeMessageType("aiserver.v1.StatusUpdates", () => [{ no: 1, name: "updates", kind: "message", T: iI, repeated: true }]), lI = wa.makeMessageType("aiserver.v1.RerankDocumentsRequest", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }, { no: 2, name: "documents", kind: "message", T: mI, repeated: true }]), cI = wa.makeMessageType("aiserver.v1.RerankDocumentsResponse", () => [{ no: 1, name: "documents", kind: "message", T: dI, repeated: true }]), mI = wa.makeMessageType("aiserver.v1.Document", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }, { no: 2, name: "id", kind: "scalar", T: 9 }]), dI = wa.makeMessageType("aiserver.v1.DocumentIdsWithScores", () => [{ no: 1, name: "document_id", kind: "scalar", T: 9 }, { no: 2, name: "score", kind: "scalar", T: 2 }]), gI = wa.makeMessageType("aiserver.v1.ComposerFileDiffHistory", () => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }, { no: 2, name: "diff_history", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "diff_history_timestamps", kind: "scalar", T: 1, repeated: true }]), uI = wa.makeEnum("aiserver.v1.StreamUnifiedChatRequest.UnifiedMode", [{ no: 0, name: "UNIFIED_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "UNIFIED_MODE_CHAT", localName: "CHAT" }, { no: 2, name: "UNIFIED_MODE_AGENT", localName: "AGENT" }, { no: 3, name: "UNIFIED_MODE_EDIT", localName: "EDIT" }, { no: 4, name: "UNIFIED_MODE_CUSTOM", localName: "CUSTOM" }, { no: 5, name: "UNIFIED_MODE_PLAN", localName: "PLAN" }, { no: 6, name: "UNIFIED_MODE_DEBUG", localName: "DEBUG" }]), EI = wa.makeMessageType("aiserver.v1.ContextPiece", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }, { no: 3, name: "score", kind: "scalar", T: 2 }]), pI = wa.makeMessageType("aiserver.v1.ContextWindowStatus", () => [{ no: 1, name: "percentage_remaining", kind: "scalar", T: 5 }, { no: 2, name: "tokens_used", kind: "scalar", T: 5, opt: true }, { no: 3, name: "token_limit", kind: "scalar", T: 5, opt: true }, { no: 4, name: "percentage_remaining_float", kind: "scalar", T: 2, opt: true }]), TI = wa.makeMessageType("aiserver.v1.ServiceStatusUpdate", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "codicon", kind: "scalar", T: 9 }, { no: 3, name: "allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown", kind: "scalar", T: 8, opt: true }, { no: 4, name: "action_to_run_on_status_update", kind: "scalar", T: 9, opt: true }]), kI = wa.makeMessageType("aiserver.v1.SymbolLink", () => [{ no: 1, name: "symbol_name", kind: "scalar", T: 9 }, { no: 2, name: "symbol_search_string", kind: "scalar", T: 9 }, { no: 3, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 4, name: "rough_line_number", kind: "scalar", T: 5 }]), II = wa.makeMessageType("aiserver.v1.FileLink", () => [{ no: 1, name: "display_name", kind: "scalar", T: 9 }, { no: 2, name: "relative_workspace_path", kind: "scalar", T: 9 }]), hI = wa.makeMessageType("aiserver.v1.RedDiff", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "red_ranges", kind: "message", T: go, repeated: true }, { no: 3, name: "red_ranges_reversed", kind: "message", T: go, repeated: true }, { no: 4, name: "start_hash", kind: "scalar", T: 9 }, { no: 5, name: "end_hash", kind: "scalar", T: 9 }]), _I = wa.makeMessageType("aiserver.v1.DiffFile", () => [{ no: 1, name: "file_details", kind: "scalar", T: 9 }, { no: 2, name: "file_name", kind: "scalar", T: 9 }]), CI = wa.makeMessageType("aiserver.v1.ViewableCommitProps", () => [{ no: 1, name: "description", kind: "scalar", T: 9 }, { no: 2, name: "message", kind: "scalar", T: 9 }, { no: 3, name: "files", kind: "message", T: _I, repeated: true }]), fI = wa.makeMessageType("aiserver.v1.ViewablePRProps", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "body", kind: "scalar", T: 9 }, { no: 3, name: "files", kind: "message", T: _I, repeated: true }]), BI = wa.makeMessageType("aiserver.v1.ViewableDiffProps", () => [{ no: 1, name: "files", kind: "message", T: _I, repeated: true }, { no: 2, name: "diff_preface", kind: "scalar", T: 9 }]), QI = wa.makeMessageType("aiserver.v1.ViewableGitContext", () => [{ no: 1, name: "commit_data", kind: "message", T: CI, opt: true }, { no: 2, name: "pull_request_data", kind: "message", T: fI, opt: true }, { no: 3, name: "diff_data", kind: "message", T: BI, repeated: true }]), yI = wa.makeMessageType("aiserver.v1.ConversationMessage", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "type", kind: "enum", T: wa.getEnumType(RI) }, { no: 3, name: "attached_code_chunks", kind: "message", T: vI, repeated: true }, { no: 4, name: "codebase_context_chunks", kind: "message", T: Ro, repeated: true }, { no: 5, name: "commits", kind: "message", T: ih, repeated: true }, { no: 6, name: "pull_requests", kind: "message", T: Ah, repeated: true }, { no: 7, name: "git_diffs", kind: "message", T: uo, repeated: true }, { no: 8, name: "assistant_suggested_diffs", kind: "message", T: oh, repeated: true }, { no: 9, name: "interpreter_results", kind: "message", T: sh, repeated: true }, { no: 10, name: "images", kind: "message", T: sr, repeated: true }, { no: 11, name: "attached_folders", kind: "scalar", T: 9, repeated: true }, { no: 12, name: "approximate_lint_errors", kind: "message", T: PI, repeated: true }, { no: 13, name: "bubble_id", kind: "scalar", T: 9 }, { no: 32, name: "server_bubble_id", kind: "scalar", T: 9, opt: true }, { no: 14, name: "attached_folders_new", kind: "message", T: ah, repeated: true }, { no: 15, name: "lints", kind: "message", T: xI, repeated: true }, { no: 16, name: "user_responses_to_suggested_code_blocks", kind: "message", T: ch, repeated: true }, { no: 17, name: "relevant_files", kind: "scalar", T: 9, repeated: true }, { no: 18, name: "tool_results", kind: "message", T: MI, repeated: true }, { no: 19, name: "notepads", kind: "message", T: FI, repeated: true }, { no: 20, name: "is_capability_iteration", kind: "scalar", T: 8, opt: true }, { no: 21, name: "capabilities", kind: "message", T: du, repeated: true }, { no: 22, name: "edit_trail_contexts", kind: "message", T: LI, repeated: true }, { no: 23, name: "suggested_code_blocks", kind: "message", T: lh, repeated: true }, { no: 24, name: "diffs_for_compressing_files", kind: "message", T: hI, repeated: true }, { no: 25, name: "multi_file_linter_errors", kind: "message", T: Wo, repeated: true }, { no: 26, name: "diff_histories", kind: "message", T: ph, repeated: true }, { no: 27, name: "recently_viewed_files", kind: "message", T: vI, repeated: true }, { no: 28, name: "recent_locations_history", kind: "message", T: GI, repeated: true }, { no: 29, name: "is_agentic", kind: "scalar", T: 8 }, { no: 30, name: "file_diff_trajectories", kind: "message", T: gI, repeated: true }, { no: 31, name: "conversation_summary", kind: "message", T: $k, opt: true }, { no: 33, name: "existed_subsequent_terminal_command", kind: "scalar", T: 8 }, { no: 34, name: "existed_previous_terminal_command", kind: "scalar", T: 8 }, { no: 35, name: "docs_references", kind: "message", T: oI, repeated: true }, { no: 36, name: "web_references", kind: "message", T: sI, repeated: true }, { no: 75, name: "ai_web_search_results", kind: "message", T: rI, repeated: true }, { no: 37, name: "git_context", kind: "message", T: QI, opt: true }, { no: 38, name: "attached_folders_list_dir_results", kind: "message", T: ic, repeated: true }, { no: 39, name: "cached_conversation_summary", kind: "message", T: $k, opt: true }, { no: 40, name: "human_changes", kind: "message", T: JI, repeated: true }, { no: 41, name: "attached_human_changes", kind: "scalar", T: 8 }, { no: 42, name: "summarized_composers", kind: "message", T: OI, repeated: true }, { no: 43, name: "cursor_rules", kind: "message", T: Ko, repeated: true }, { no: 44, name: "context_pieces", kind: "message", T: EI, repeated: true }, { no: 45, name: "thinking", kind: "message", T: VI, opt: true }, { no: 46, name: "all_thinking_blocks", kind: "message", T: VI, repeated: true }, { no: 85, name: "thinking_style", kind: "enum", T: wa.getEnumType(NI), opt: true }, { no: 47, name: "unified_mode", kind: "enum", T: wa.getEnumType(uI), opt: true }, { no: 98, name: "agent_mode", kind: "enum", T: wa.getEnumType(Mk), opt: true }, { no: 48, name: "diffs_since_last_apply", kind: "message", T: qI, repeated: true }, { no: 49, name: "deleted_files", kind: "message", T: HI, repeated: true }, { no: 50, name: "usage_uuid", kind: "scalar", T: 9, opt: true }, { no: 51, name: "supported_tools", kind: "enum", T: wa.getEnumType(yl), repeated: true }, { no: 52, name: "current_file_location_data", kind: "message", T: nh, opt: true }, { no: 53, name: "edit_tool_supports_search_and_replace", kind: "scalar", T: 8, opt: true }, { no: 54, name: "last_terminal_cwd", kind: "scalar", T: 9, opt: true }, { no: 55, name: "user_explicitly_asked_to_generate_cursor_rules", kind: "scalar", T: 8, opt: true }, { no: 56, name: "console_logs", kind: "message", T: kr, repeated: true }, { no: 57, name: "rich_text", kind: "scalar", T: 9, opt: true }, { no: 58, name: "knowledge_items", kind: "message", T: WI, repeated: true }, { no: 59, name: "ui_element_picked", kind: "message", T: Ir, repeated: true }, { no: 60, name: "user_explicitly_asked_to_add_to_knowledge_base", kind: "scalar", T: 8, opt: true }, { no: 61, name: "documentation_selections", kind: "message", T: KI, repeated: true }, { no: 62, name: "external_links", kind: "message", T: Ar, repeated: true }, { no: 63, name: "use_web", kind: "scalar", T: 8, opt: true }, { no: 64, name: "project_layouts", kind: "message", T: Bh, repeated: true }, { no: 65, name: "thinking_duration_ms", kind: "scalar", T: 5, opt: true }, { no: 88, name: "step_duration_ms", kind: "scalar", T: 5, opt: true }, { no: 66, name: "subagent_return", kind: "message", T: Th, opt: true }, { no: 67, name: "is_simple_looping_message", kind: "scalar", T: 8, opt: true }, { no: 68, name: "capability_contexts", kind: "message", T: wu, repeated: true }, { no: 69, name: "checkpoint_commit_hash", kind: "scalar", T: 9, opt: true }, { no: 70, name: "git_status_raw", kind: "scalar", T: 9, opt: true }, { no: 71, name: "todos", kind: "message", T: pg, repeated: true }, { no: 72, name: "is_review_edits_followup", kind: "scalar", T: 8, opt: true }, { no: 74, name: "request_id", kind: "scalar", T: 9 }, { no: 73, name: "ide_editors_state", kind: "message", T: jI, opt: true }, { no: 76, name: "context_window_status", kind: "message", T: pI, opt: true }, { no: 77, name: "is_plan_execution", kind: "scalar", T: 8, opt: true }, { no: 78, name: "created_at", kind: "scalar", T: 9 }, { no: 79, name: "model_info", kind: "message", T: Yo }, { no: 80, name: "is_quick_search_query", kind: "scalar", T: 8, opt: true }, { no: 81, name: "plan_update", kind: "message", T: ZI, opt: true }, { no: 82, name: "is_simulated_msg", kind: "scalar", T: 8, opt: true }, { no: 95, name: "simulated_msg_reason", kind: "enum", T: wa.getEnumType(Fk), opt: true }, { no: 97, name: "simulated_message_metadata", kind: "message", T: zI, opt: true }, { no: 83, name: "mcp_descriptors", kind: "message", T: $I, repeated: true }, { no: 84, name: "workspace_project_dir", kind: "scalar", T: 9, opt: true }, { no: 87, name: "workspace_uris", kind: "scalar", T: 9, repeated: true }, { no: 86, name: "debug_mode_config", kind: "message", T: kT, opt: true }, { no: 89, name: "text_blob_id", kind: "scalar", T: 12, opt: true }, { no: 90, name: "rich_text_blob_id", kind: "scalar", T: 12, opt: true }, { no: 91, name: "cursor_commands", kind: "message", T: $T, repeated: true }, { no: 92, name: "cursor_commands_explicitly_set", kind: "scalar", T: 8 }, { no: 93, name: "past_chats", kind: "message", T: nk, repeated: true }, { no: 94, name: "past_chats_explicitly_set", kind: "scalar", T: 8 }, { no: 96, name: "triggering_user_info", kind: "message", T: Uk, opt: true }, { no: 99, name: "turn_steer", kind: "scalar", T: 8, opt: true }, { no: 100, name: "sent_by_agent_id", kind: "scalar", T: 9, opt: true }, { no: 101, name: "sent_by_voice_call", kind: "scalar", T: 8, opt: true }, { no: 102, name: "sender", kind: "message", T: xk, opt: true }]), RI = wa.makeEnum("aiserver.v1.ConversationMessage.MessageType", [{ no: 0, name: "MESSAGE_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "MESSAGE_TYPE_HUMAN", localName: "HUMAN" }, { no: 2, name: "MESSAGE_TYPE_AI", localName: "AI" }]), NI = wa.makeEnum("aiserver.v1.ConversationMessage.ThinkingStyle", [{ no: 0, name: "THINKING_STYLE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "THINKING_STYLE_DEFAULT", localName: "DEFAULT" }, { no: 2, name: "THINKING_STYLE_CODEX", localName: "CODEX" }, { no: 3, name: "THINKING_STYLE_GPT5", localName: "GPT5" }]), vI = wa.makeMessageType("aiserver.v1.ConversationMessage.CodeChunk", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "start_line_number", kind: "scalar", T: 5 }, { no: 3, name: "lines", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "summarization_strategy", kind: "enum", T: wa.getEnumType(DI), opt: true }, { no: 5, name: "language_identifier", kind: "scalar", T: 9 }, { no: 6, name: "intent", kind: "enum", T: wa.getEnumType(SI), opt: true }, { no: 7, name: "is_final_version", kind: "scalar", T: 8, opt: true }, { no: 8, name: "is_first_version", kind: "scalar", T: 8, opt: true }, { no: 9, name: "contents_are_missing", kind: "scalar", T: 8, opt: true }, { no: 10, name: "is_only_included_from_folder", kind: "scalar", T: 8, opt: true }, { no: 11, name: "code_chunk_git_context", kind: "message", T: wI, opt: true }], { localName: "ConversationMessage_CodeChunk" }), SI = wa.makeEnum("aiserver.v1.ConversationMessage.CodeChunk.Intent", [{ no: 0, name: "INTENT_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "INTENT_COMPOSER_FILE", localName: "COMPOSER_FILE" }, { no: 2, name: "INTENT_COMPRESSED_COMPOSER_FILE", localName: "COMPRESSED_COMPOSER_FILE" }, { no: 3, name: "INTENT_RECENTLY_VIEWED_FILE", localName: "RECENTLY_VIEWED_FILE" }, { no: 4, name: "INTENT_OUTLINE", localName: "OUTLINE" }, { no: 5, name: "INTENT_MENTIONED_FILE", localName: "MENTIONED_FILE" }, { no: 6, name: "INTENT_CODE_SELECTION", localName: "CODE_SELECTION" }, { no: 7, name: "INTENT_AI_EDITED_FILE", localName: "AI_EDITED_FILE" }, { no: 8, name: "INTENT_VISIBLE_FILE", localName: "VISIBLE_FILE" }, { no: 9, name: "INTENT_TERMINAL_SELECTION", localName: "TERMINAL_SELECTION" }]), DI = wa.makeEnum("aiserver.v1.ConversationMessage.CodeChunk.SummarizationStrategy", [{ no: 0, name: "SUMMARIZATION_STRATEGY_NONE_UNSPECIFIED", localName: "NONE_UNSPECIFIED" }, { no: 1, name: "SUMMARIZATION_STRATEGY_SUMMARIZED", localName: "SUMMARIZED" }, { no: 2, name: "SUMMARIZATION_STRATEGY_EMBEDDED", localName: "EMBEDDED" }]), wI = wa.makeMessageType("aiserver.v1.ConversationMessage.CodeChunk.CodeChunkGitContext", () => [{ no: 1, name: "git_info", kind: "message", T: bI, repeated: true }], { localName: "ConversationMessage_CodeChunk_CodeChunkGitContext" }), bI = wa.makeMessageType("aiserver.v1.ConversationMessage.CodeChunk.CodeChunkGitContext.CodeChunkGitInfo", () => [{ no: 1, name: "commit", kind: "scalar", T: 9 }, { no: 2, name: "author", kind: "scalar", T: 9 }, { no: 3, name: "date", kind: "scalar", T: 9 }, { no: 4, name: "message", kind: "scalar", T: 9 }], { localName: "ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo" }), MI = wa.makeMessageType("aiserver.v1.ConversationMessage.ToolResult", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "tool_name", kind: "scalar", T: 9 }, { no: 3, name: "tool_index", kind: "scalar", T: 13 }, { no: 12, name: "model_call_id", kind: "scalar", T: 9, opt: true }, { no: 4, name: "args", kind: "scalar", T: 9 }, { no: 5, name: "raw_args", kind: "scalar", T: 9 }, { no: 6, name: "attached_code_chunks", kind: "message", T: vI, repeated: true }, { no: 7, name: "content", kind: "scalar", T: 9, opt: true }, { no: 8, name: "result", kind: "message", T: Ll }, { no: 9, name: "error", kind: "message", T: Ml, opt: true }, { no: 10, name: "images", kind: "message", T: sr, repeated: true }, { no: 11, name: "tool_call", kind: "message", T: Ul, opt: true }, { no: 13, name: "started_at_ms", kind: "scalar", T: 4, opt: true }, { no: 14, name: "completed_at_ms", kind: "scalar", T: 4, opt: true }], { localName: "ConversationMessage_ToolResult" }), FI = wa.makeMessageType("aiserver.v1.ConversationMessage.NotepadContext", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "text", kind: "scalar", T: 9 }, { no: 3, name: "attached_code_chunks", kind: "message", T: vI, repeated: true }, { no: 4, name: "attached_folders", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "commits", kind: "message", T: ih, repeated: true }, { no: 6, name: "pull_requests", kind: "message", T: Ah, repeated: true }, { no: 7, name: "git_diffs", kind: "message", T: uo, repeated: true }, { no: 8, name: "images", kind: "message", T: sr, repeated: true }], { localName: "ConversationMessage_NotepadContext" }), OI = wa.makeMessageType("aiserver.v1.ConversationMessage.ComposerContext", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "conversation_summary", kind: "message", T: $k }], { localName: "ConversationMessage_ComposerContext" }), UI = wa.makeMessageType("aiserver.v1.ConversationMessage.EditLocation", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 3, name: "range", kind: "message", T: go }, { no: 4, name: "initial_range", kind: "message", T: go }, { no: 5, name: "context_lines", kind: "scalar", T: 9 }, { no: 6, name: "text", kind: "scalar", T: 9 }, { no: 7, name: "text_range", kind: "message", T: go }], { localName: "ConversationMessage_EditLocation" }), LI = wa.makeMessageType("aiserver.v1.ConversationMessage.EditTrailContext", () => [{ no: 1, name: "unique_id", kind: "scalar", T: 9 }, { no: 2, name: "edit_trail_sorted", kind: "message", T: UI, repeated: true }], { localName: "ConversationMessage_EditTrailContext" }), PI = wa.makeMessageType("aiserver.v1.ConversationMessage.ApproximateLintError", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 9 }, { no: 3, name: "start_line", kind: "scalar", T: 5 }, { no: 4, name: "end_line", kind: "scalar", T: 5 }, { no: 5, name: "start_column", kind: "scalar", T: 5 }, { no: 6, name: "end_column", kind: "scalar", T: 5 }], { localName: "ConversationMessage_ApproximateLintError" }), xI = wa.makeMessageType("aiserver.v1.ConversationMessage.Lints", () => [{ no: 1, name: "lints", kind: "message", T: Wk }, { no: 2, name: "chat_codeblock_model_value", kind: "scalar", T: 9 }], { localName: "ConversationMessage_Lints" }), GI = wa.makeMessageType("aiserver.v1.ConversationMessage.RecentLocation", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "line_number", kind: "scalar", T: 5 }], { localName: "ConversationMessage_RecentLocation" }), YI = wa.makeMessageType("aiserver.v1.ConversationMessage.RenderedDiff", () => [{ no: 1, name: "start_line_number", kind: "scalar", T: 5 }, { no: 2, name: "end_line_number_exclusive", kind: "scalar", T: 5 }, { no: 3, name: "before_context_lines", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "removed_lines", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "added_lines", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "after_context_lines", kind: "scalar", T: 9, repeated: true }], { localName: "ConversationMessage_RenderedDiff" }), JI = wa.makeMessageType("aiserver.v1.ConversationMessage.HumanChange", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "rendered_diffs", kind: "message", T: YI, repeated: true }], { localName: "ConversationMessage_HumanChange" }), VI = wa.makeMessageType("aiserver.v1.ConversationMessage.Thinking", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "signature", kind: "scalar", T: 9 }, { no: 3, name: "redacted_thinking", kind: "scalar", T: 9 }, { no: 4, name: "is_last_thinking_chunk", kind: "scalar", T: 8 }], { localName: "ConversationMessage_Thinking" }), qI = wa.makeMessageType("aiserver.v1.ConversationMessage.DiffSinceLastApply", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "diff", kind: "message", T: jl, opt: true }, { no: 4, name: "is_accepted", kind: "scalar", T: 8, opt: true }, { no: 5, name: "is_rejected", kind: "scalar", T: 8, opt: true }, { no: 6, name: "last_apply_chained_from_n_human_messages_ago", kind: "scalar", T: 5, opt: true }], { localName: "ConversationMessage_DiffSinceLastApply" }), HI = wa.makeMessageType("aiserver.v1.ConversationMessage.DeletedFile", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }], { localName: "ConversationMessage_DeletedFile" }), WI = wa.makeMessageType("aiserver.v1.ConversationMessage.KnowledgeItem", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "knowledge", kind: "scalar", T: 9 }, { no: 3, name: "knowledge_id", kind: "scalar", T: 9 }, { no: 4, name: "is_generated", kind: "scalar", T: 8 }], { localName: "ConversationMessage_KnowledgeItem" }), KI = wa.makeMessageType("aiserver.v1.ConversationMessage.DocumentationSelection", () => [{ no: 1, name: "doc_id", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9 }], { localName: "ConversationMessage_DocumentationSelection" }), jI = wa.makeMessageType("aiserver.v1.ConversationMessage.IdeEditorsState", () => [{ no: 1, name: "is_pill_displayed", kind: "scalar", T: 8 }, { no: 2, name: "visible_file_paths", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "recently_viewed_file_paths", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "visible_files", kind: "message", T: XI, repeated: true }, { no: 5, name: "recently_viewed_files", kind: "message", T: XI, repeated: true }], { localName: "ConversationMessage_IdeEditorsState" }), XI = wa.makeMessageType("aiserver.v1.ConversationMessage.IdeEditorsState.File", () => [{ no: 1, name: "relative_path", kind: "scalar", T: 9 }, { no: 2, name: "is_currently_focused", kind: "scalar", T: 8, opt: true }, { no: 3, name: "current_line_number", kind: "scalar", T: 5, opt: true }, { no: 4, name: "current_line_text", kind: "scalar", T: 9, opt: true }, { no: 5, name: "line_count", kind: "scalar", T: 5, opt: true }, { no: 6, name: "absolute_path", kind: "scalar", T: 9, opt: true }], { localName: "ConversationMessage_IdeEditorsState_File" }), ZI = wa.makeMessageType("aiserver.v1.ConversationMessage.PlanUpdate", () => [{ no: 1, name: "current_plan", kind: "scalar", T: 9 }, { no: 2, name: "is_first_time_seen", kind: "scalar", T: 8 }], { localName: "ConversationMessage_PlanUpdate" }), zI = wa.makeMessageType("aiserver.v1.ConversationMessage.SimulatedMessageMetadata", () => [{ no: 1, name: "title", kind: "scalar", T: 9, opt: true }, { no: 2, name: "task_id", kind: "scalar", T: 9, opt: true }, { no: 3, name: "fsd_finding_action", kind: "scalar", T: 9, opt: true }, { no: 4, name: "url", kind: "scalar", T: 9, opt: true }, { no: 5, name: "subscription_source", kind: "enum", T: wa.getEnumType(Ok), opt: true }, { no: 6, name: "subscription_event_display", kind: "message", T: Pk, opt: true }, { no: 7, name: "interaction_response", kind: "message", T: Lk, opt: true }], { localName: "ConversationMessage_SimulatedMessageMetadata" }), $I = wa.makeMessageType("aiserver.v1.ConversationMessage.McpDescriptor", () => [{ no: 1, name: "folder_path", kind: "scalar", T: 9 }, { no: 2, name: "server_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "tools", kind: "message", T: eh, repeated: true }, { no: 4, name: "server_use_instructions", kind: "scalar", T: 9, opt: true }], { localName: "ConversationMessage_McpDescriptor" }), eh = wa.makeMessageType("aiserver.v1.ConversationMessage.McpDescriptor.Tool", () => [{ no: 1, name: "tool_name", kind: "scalar", T: 9 }, { no: 2, name: "description", kind: "scalar", T: 9, opt: true }], { localName: "ConversationMessage_McpDescriptor_Tool" }), nh = wa.makeMessageType("aiserver.v1.CurrentFileLocationData", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "line_number", kind: "scalar", T: 5 }, { no: 3, name: "text", kind: "scalar", T: 9 }]), ah = wa.makeMessageType("aiserver.v1.FolderInfo", () => [{ no: 1, name: "relative_path", kind: "scalar", T: 9 }, { no: 2, name: "files", kind: "message", T: th, repeated: true }]), th = wa.makeMessageType("aiserver.v1.FolderFileInfo", () => [{ no: 1, name: "relative_path", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }, { no: 3, name: "truncated", kind: "scalar", T: 8 }, { no: 4, name: "score", kind: "scalar", T: 2 }]), sh = wa.makeMessageType("aiserver.v1.InterpreterResult", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }, { no: 2, name: "success", kind: "scalar", T: 8 }]), oh = wa.makeMessageType("aiserver.v1.SimpleFileDiff", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 3, name: "chunks", kind: "message", T: rh, repeated: true }]), rh = wa.makeMessageType("aiserver.v1.SimpleFileDiff.Chunk", () => [{ no: 1, name: "old_lines", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "new_lines", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "old_range", kind: "message", T: Bo }, { no: 4, name: "new_range", kind: "message", T: Bo }], { localName: "SimpleFileDiff_Chunk" }), ih = wa.makeMessageType("aiserver.v1.Commit", () => [{ no: 1, name: "sha", kind: "scalar", T: 9 }, { no: 2, name: "message", kind: "scalar", T: 9 }, { no: 3, name: "description", kind: "scalar", T: 9 }, { no: 4, name: "diff", kind: "message", T: po, repeated: true }, { no: 5, name: "author", kind: "scalar", T: 9 }, { no: 6, name: "date", kind: "scalar", T: 9 }]), Ah = wa.makeMessageType("aiserver.v1.PullRequest", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "body", kind: "scalar", T: 9 }, { no: 3, name: "diff", kind: "message", T: po, repeated: true }, { no: 4, name: "id", kind: "scalar", T: 3 }, { no: 5, name: "number", kind: "scalar", T: 3 }]), lh = wa.makeMessageType("aiserver.v1.SuggestedCodeBlock", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }]), ch = wa.makeMessageType("aiserver.v1.UserResponseToSuggestedCodeBlock", () => [{ no: 1, name: "user_response_type", kind: "enum", T: wa.getEnumType(mh) }, { no: 2, name: "file_path", kind: "scalar", T: 9 }, { no: 3, name: "user_modifications_to_suggested_code_blocks", kind: "message", T: po, opt: true }]), mh = wa.makeEnum("aiserver.v1.UserResponseToSuggestedCodeBlock.UserResponseType", [{ no: 0, name: "USER_RESPONSE_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "USER_RESPONSE_TYPE_ACCEPT", localName: "ACCEPT" }, { no: 2, name: "USER_RESPONSE_TYPE_REJECT", localName: "REJECT" }, { no: 3, name: "USER_RESPONSE_TYPE_MODIFY", localName: "MODIFY" }]), dh = wa.makeMessageType("aiserver.v1.ContextRerankingCandidateFile", () => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }, { no: 2, name: "file_content", kind: "scalar", T: 9 }]), gh = wa.makeMessageType("aiserver.v1.ComposerFileDiff", () => [{ no: 1, name: "chunks", kind: "message", T: Eh, repeated: true }, { no: 2, name: "editor", kind: "enum", T: wa.getEnumType(uh) }, { no: 3, name: "hit_timeout", kind: "scalar", T: 8 }]), uh = wa.makeEnum("aiserver.v1.ComposerFileDiff.Editor", [{ no: 0, name: "EDITOR_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "EDITOR_AI", localName: "AI" }, { no: 2, name: "EDITOR_HUMAN", localName: "HUMAN" }]), Eh = wa.makeMessageType("aiserver.v1.ComposerFileDiff.ChunkDiff", () => [{ no: 1, name: "diff_string", kind: "scalar", T: 9 }, { no: 2, name: "old_start", kind: "scalar", T: 5 }, { no: 3, name: "new_start", kind: "scalar", T: 5 }, { no: 4, name: "old_lines", kind: "scalar", T: 5 }, { no: 5, name: "new_lines", kind: "scalar", T: 5 }, { no: 6, name: "lines_removed", kind: "scalar", T: 5 }, { no: 7, name: "lines_added", kind: "scalar", T: 5 }], { localName: "ComposerFileDiff_ChunkDiff" }), ph = wa.makeMessageType("aiserver.v1.DiffHistoryData", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "diffs", kind: "message", T: gh, repeated: true }, { no: 3, name: "timestamp", kind: "scalar", T: 1 }, { no: 4, name: "unique_id", kind: "scalar", T: 9 }, { no: 5, name: "start_to_end_diff", kind: "message", T: gh }]), Th = wa.makeMessageType("aiserver.v1.SubagentReturnCall", () => [{ no: 1, name: "subagent_type", kind: "enum", T: wa.getEnumType(zk) }, { no: 2, name: "deep_search_return_value", kind: "message", T: kh, oneof: "return_value" }, { no: 3, name: "fix_lints_return_value", kind: "message", T: hh, oneof: "return_value" }, { no: 4, name: "task_return_value", kind: "message", T: _h, oneof: "return_value" }, { no: 5, name: "spec_return_value", kind: "message", T: Ch, oneof: "return_value" }]), kh = wa.makeMessageType("aiserver.v1.DeepSearchSubagentReturnValue", () => [{ no: 1, name: "context_items", kind: "message", T: Ih, repeated: true }]), Ih = wa.makeMessageType("aiserver.v1.DeepSearchSubagentReturnValue.ContextItem", () => [{ no: 1, name: "file", kind: "scalar", T: 9 }, { no: 2, name: "line_range", kind: "message", T: Bo, opt: true }, { no: 3, name: "explanation", kind: "scalar", T: 9 }], { localName: "DeepSearchSubagentReturnValue_ContextItem" }), hh = wa.makeMessageType("aiserver.v1.FixLintsSubagentReturnValue", []), _h = wa.makeMessageType("aiserver.v1.TaskSubagentReturnValue", () => [{ no: 1, name: "summary", kind: "scalar", T: 9 }]), Ch = wa.makeMessageType("aiserver.v1.SpecSubagentReturnValue", () => [{ no: 1, name: "summary", kind: "scalar", T: 9 }, { no: 2, name: "string_replacements", kind: "message", T: fh, repeated: true }]), fh = wa.makeMessageType("aiserver.v1.StringReplacement", () => [{ no: 1, name: "old_string", kind: "scalar", T: 9 }, { no: 2, name: "new_string", kind: "scalar", T: 9 }]), Bh = wa.makeMessageType("aiserver.v1.ProjectLayout", () => [{ no: 1, name: "root_path", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "message", T: Qh }, { no: 3, name: "list_dir_v2_result", kind: "message", T: _g, opt: true }]), Qh = wa.makeMessageType("aiserver.v1.ProjectLayoutDirectoryContent", () => [{ no: 1, name: "directories", kind: "message", T: yh, repeated: true }, { no: 2, name: "files", kind: "message", T: Rh, repeated: true }, { no: 3, name: "total_files", kind: "scalar", T: 5, opt: true }, { no: 4, name: "total_subfolders", kind: "scalar", T: 5, opt: true }, { no: 5, name: "hidden_files", kind: "message", T: Rh, repeated: true }]), yh = wa.makeMessageType("aiserver.v1.ProjectLayoutDirectory", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "message", T: Qh }]), Rh = wa.makeMessageType("aiserver.v1.ProjectLayoutFile", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }]), Nh = wa.makeMessageType("aiserver.v1.BugLocation", () => [{ no: 1, name: "file", kind: "scalar", T: 9 }, { no: 2, name: "start_line", kind: "scalar", T: 5 }, { no: 3, name: "end_line", kind: "scalar", T: 5 }, { no: 4, name: "code_lines", kind: "scalar", T: 9, repeated: true }]), vh = wa.makeMessageType("aiserver.v1.BugReport", () => [{ no: 1, name: "locations", kind: "message", T: Nh, repeated: true }, { no: 2, name: "id", kind: "scalar", T: 9 }, { no: 3, name: "description", kind: "scalar", T: 9 }, { no: 4, name: "confidence", kind: "scalar", T: 2, opt: true }, { no: 5, name: "category", kind: "scalar", T: 9, opt: true }, { no: 6, name: "severity", kind: "scalar", T: 9, opt: true }, { no: 7, name: "title", kind: "scalar", T: 9, opt: true }, { no: 9, name: "rationale", kind: "scalar", T: 9, opt: true }, { no: 10, name: "triggered_by_rule_id", kind: "scalar", T: 9, opt: true }, { no: 11, name: "model_confidence", kind: "scalar", T: 2, opt: true }]), Sh = wa.makeMessageType("aiserver.v1.BugReports", () => [{ no: 1, name: "bug_reports", kind: "message", T: vh, repeated: true }]), Dh = wa.makeMessageType("aiserver.v1.StreamBugBotRequest", () => [{ no: 1, name: "git_diff", kind: "message", T: uo }, { no: 13, name: "context_files", kind: "message", T: Ro, repeated: true }, { no: 2, name: "model_details", kind: "message", T: Go }, { no: 3, name: "user_instructions", kind: "scalar", T: 9, opt: true }, { no: 4, name: "bug_detection_guidelines", kind: "scalar", T: 9, opt: true }, { no: 5, name: "iterations", kind: "scalar", T: 5, opt: true }, { no: 12, name: "unified_context_lines", kind: "scalar", T: 5, opt: true }, { no: 6, name: "in_background_subsidized", kind: "scalar", T: 8 }, { no: 7, name: "session_id", kind: "scalar", T: 9, opt: true }, { no: 8, name: "price_id", kind: "scalar", T: 9, opt: true }, { no: 9, name: "has_telemetry", kind: "scalar", T: 8 }, { no: 10, name: "constrain_to_file", kind: "scalar", T: 9, opt: true }, { no: 11, name: "constrain_to_range", kind: "message", T: wh, opt: true }, { no: 14, name: "deep_review", kind: "scalar", T: 8, opt: true }]), wh = wa.makeMessageType("aiserver.v1.StreamBugBotRequest.Range", () => [{ no: 1, name: "start_line", kind: "scalar", T: 5 }, { no: 2, name: "end_line_inclusive", kind: "scalar", T: 5 }], { localName: "StreamBugBotRequest_Range" }), bh = wa.makeMessageType("agent.v1.WriteArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "file_text", kind: "scalar", T: 9 }, { no: 3, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 4, name: "return_file_content_after_write", kind: "scalar", T: 8 }, { no: 5, name: "file_bytes", kind: "scalar", T: 12 }, { no: 6, name: "encoding_hint", kind: "scalar", T: 9, opt: true }]), Mh = wa.makeMessageType("agent.v1.WriteResult", () => [{ no: 1, name: "success", kind: "message", T: Fh, oneof: "result" }, { no: 3, name: "permission_denied", kind: "message", T: Oh, oneof: "result" }, { no: 4, name: "no_space", kind: "message", T: Uh, oneof: "result" }, { no: 5, name: "error", kind: "message", T: Lh, oneof: "result" }, { no: 6, name: "rejected", kind: "message", T: Ph, oneof: "result" }]), Fh = wa.makeMessageType("agent.v1.WriteSuccess", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "lines_created", kind: "scalar", T: 5 }, { no: 3, name: "file_size", kind: "scalar", T: 5 }, { no: 4, name: "file_content_after_write", kind: "scalar", T: 9, opt: true }]), Oh = wa.makeMessageType("agent.v1.WritePermissionDenied", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "directory", kind: "scalar", T: 9 }, { no: 3, name: "operation", kind: "scalar", T: 9 }, { no: 4, name: "error", kind: "scalar", T: 9 }, { no: 5, name: "is_readonly", kind: "scalar", T: 8 }]), Uh = wa.makeMessageType("agent.v1.WriteNoSpace", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }]), Lh = wa.makeMessageType("agent.v1.WriteError", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }]), Ph = wa.makeMessageType("agent.v1.WriteRejected", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }]), xh = wa.makeMessageType("agent.v1.ReadArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 4, name: "offset", kind: "scalar", T: 5, opt: true }, { no: 5, name: "limit", kind: "scalar", T: 13, opt: true }, { no: 6, name: "encoding_hint", kind: "scalar", T: 9, opt: true }, { no: 7, name: "digest_only", kind: "scalar", T: 8, opt: true }]), Gh = wa.makeMessageType("agent.v1.ReadResult", () => [{ no: 1, name: "success", kind: "message", T: Yh, oneof: "result" }, { no: 2, name: "error", kind: "message", T: Jh, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: Vh, oneof: "result" }, { no: 4, name: "file_not_found", kind: "message", T: qh, oneof: "result" }, { no: 5, name: "permission_denied", kind: "message", T: Hh, oneof: "result" }, { no: 6, name: "invalid_file", kind: "message", T: Wh, oneof: "result" }]), Yh = wa.makeMessageType("agent.v1.ReadSuccess", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9, oneof: "output" }, { no: 5, name: "data", kind: "scalar", T: 12, oneof: "output" }, { no: 3, name: "total_lines", kind: "scalar", T: 5 }, { no: 4, name: "file_size", kind: "scalar", T: 3 }, { no: 6, name: "truncated", kind: "scalar", T: 8 }, { no: 7, name: "output_blob_id", kind: "scalar", T: 12, opt: true }, { no: 8, name: "range_applied", kind: "scalar", T: 8 }, { no: 9, name: "sha256", kind: "scalar", T: 9, opt: true }, { no: 10, name: "size_bytes", kind: "scalar", T: 3, opt: true }]), Jh = wa.makeMessageType("agent.v1.ReadError", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }]), Vh = wa.makeMessageType("agent.v1.ReadRejected", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }]), qh = wa.makeMessageType("agent.v1.ReadFileNotFound", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }]), Hh = wa.makeMessageType("agent.v1.ReadPermissionDenied", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }]), Wh = wa.makeMessageType("agent.v1.ReadInvalidFile", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }]), Kh = wa.makeEnum("agent.v1.ForceBackgroundSubagentStatus", [{ no: 0, name: "FORCE_BACKGROUND_SUBAGENT_STATUS_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "FORCE_BACKGROUND_SUBAGENT_STATUS_ACCEPTED", localName: "ACCEPTED" }, { no: 2, name: "FORCE_BACKGROUND_SUBAGENT_STATUS_NOT_FOUND", localName: "NOT_FOUND" }]), jh = wa.makeMessageType("agent.v1.SubagentArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "subagent_type", kind: "scalar", T: 9 }, { no: 3, name: "model_id", kind: "scalar", T: 9 }, { no: 4, name: "prompt", kind: "scalar", T: 9 }, { no: 5, name: "readonly", kind: "scalar", T: 8 }, { no: 6, name: "resume_agent_id", kind: "scalar", T: 9, opt: true }, { no: 7, name: "run_in_background", kind: "scalar", T: 8, opt: true }, { no: 8, name: "continuation_config", kind: "message", T: Xh }, { no: 9, name: "parent_conversation_id", kind: "scalar", T: 9, opt: true }, { no: 10, name: "api_key_credentials", kind: "message", T: vk, oneof: "credentials" }, { no: 11, name: "azure_credentials", kind: "message", T: Sk, oneof: "credentials" }, { no: 12, name: "bedrock_credentials", kind: "message", T: Dk, oneof: "credentials" }, { no: 13, name: "interrupt", kind: "scalar", T: 8, opt: true }, { no: 14, name: "mode", kind: "enum", T: wa.getEnumType(JA) }, { no: 15, name: "fork_agent_id", kind: "scalar", T: 9, opt: true }, { no: 16, name: "root_parent_conversation_id", kind: "scalar", T: 9, opt: true }, { no: 17, name: "selected_context", kind: "message", T: hk, opt: true }, { no: 18, name: "direct_meta_parent_child_subagent", kind: "scalar", T: 8, opt: true }, { no: 19, name: "environment", kind: "enum", T: wa.getEnumType(GA) }, { no: 20, name: "cloud_base_branch", kind: "scalar", T: 9, opt: true }, { no: 21, name: "model_parameters", kind: "message", T: bk, repeated: true }]), Xh = wa.makeMessageType("agent.v1.ClientContinuationConfig", () => [{ no: 1, name: "idle_threshold", kind: "scalar", T: 5 }, { no: 2, name: "max_loops", kind: "scalar", T: 5 }, { no: 3, name: "nudge_message", kind: "scalar", T: 9 }, { no: 4, name: "escape_message_template", kind: "scalar", T: 9 }, { no: 5, name: "collect_background_children", kind: "scalar", T: 8 }, { no: 6, name: "children_completed_message_template", kind: "scalar", T: 9 }, { no: 7, name: "continuation_round_delay_ms", kind: "scalar", T: 5 }]), Zh = wa.makeMessageType("agent.v1.SubagentResult", () => [{ no: 1, name: "success", kind: "message", T: s_, oneof: "result" }, { no: 2, name: "error", kind: "message", T: o_, oneof: "result" }]), zh = wa.makeMessageType("agent.v1.SubagentAwaitArgs", () => [{ no: 1, name: "agent_id", kind: "scalar", T: 9 }, { no: 2, name: "timeout_ms", kind: "scalar", T: 13 }]), $h = wa.makeMessageType("agent.v1.SubagentAwaitResult", () => [{ no: 1, name: "complete", kind: "message", T: e_, oneof: "result" }, { no: 2, name: "still_running", kind: "message", T: n_, oneof: "result" }, { no: 3, name: "not_found", kind: "message", T: a_, oneof: "result" }, { no: 4, name: "error", kind: "message", T: t_, oneof: "result" }]), e_ = wa.makeMessageType("agent.v1.SubagentAwaitComplete", () => [{ no: 1, name: "agent_id", kind: "scalar", T: 9 }, { no: 2, name: "transcript_path", kind: "scalar", T: 9, opt: true }, { no: 3, name: "tool_call_count", kind: "scalar", T: 5 }, { no: 4, name: "final_message", kind: "scalar", T: 9, opt: true }]), n_ = wa.makeMessageType("agent.v1.SubagentAwaitStillRunning", () => [{ no: 1, name: "agent_id", kind: "scalar", T: 9 }, { no: 2, name: "transcript_path", kind: "scalar", T: 9, opt: true }]), a_ = wa.makeMessageType("agent.v1.SubagentAwaitNotFound", () => [{ no: 1, name: "agent_id", kind: "scalar", T: 9 }]), t_ = wa.makeMessageType("agent.v1.SubagentAwaitError", () => [{ no: 1, name: "agent_id", kind: "scalar", T: 9, opt: true }, { no: 2, name: "error", kind: "scalar", T: 9 }]), s_ = wa.makeMessageType("agent.v1.SubagentSuccess", () => [{ no: 1, name: "agent_id", kind: "scalar", T: 9 }, { no: 2, name: "final_message", kind: "scalar", T: 9, opt: true }, { no: 3, name: "tool_call_count", kind: "scalar", T: 5 }, { no: 4, name: "background_reason", kind: "enum", T: wa.getEnumType(YA) }, { no: 5, name: "transcript_path", kind: "scalar", T: 9, opt: true }]), o_ = wa.makeMessageType("agent.v1.SubagentError", () => [{ no: 1, name: "agent_id", kind: "scalar", T: 9, opt: true }, { no: 2, name: "error", kind: "scalar", T: 9 }]), r_ = wa.makeMessageType("agent.v1.ForceBackgroundSubagentArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }]), i_ = wa.makeMessageType("agent.v1.ForceBackgroundSubagentResult", () => [{ no: 1, name: "status", kind: "enum", T: wa.getEnumType(Kh) }]), A_ = wa.makeEnum("agent.v1.SmartModeClassifierDecision", [{ no: 0, name: "SMART_MODE_CLASSIFIER_DECISION_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SMART_MODE_CLASSIFIER_DECISION_ALLOW", localName: "ALLOW" }, { no: 2, name: "SMART_MODE_CLASSIFIER_DECISION_BLOCK", localName: "BLOCK" }]), l_ = wa.makeEnum("agent.v1.SmartModeClassifierRuleEffect", [{ no: 0, name: "SMART_MODE_CLASSIFIER_RULE_EFFECT_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SMART_MODE_CLASSIFIER_RULE_EFFECT_ALLOW", localName: "ALLOW" }, { no: 2, name: "SMART_MODE_CLASSIFIER_RULE_EFFECT_ASK_FIRST", localName: "ASK_FIRST" }]), c_ = wa.makeEnum("agent.v1.SmartModeClassifierRuleSource", [{ no: 0, name: "SMART_MODE_CLASSIFIER_RULE_SOURCE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SMART_MODE_CLASSIFIER_RULE_SOURCE_CUSTOM_RULE", localName: "CUSTOM_RULE" }, { no: 2, name: "SMART_MODE_CLASSIFIER_RULE_SOURCE_TEAM_RULE", localName: "TEAM_RULE" }]), m_ = wa.makeMessageType("agent.v1.SmartModeClassifierConversationMessage", () => [{ no: 1, name: "role", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }]), d_ = wa.makeMessageType("agent.v1.SmartModeClassifierArgs", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "parent_conversation_id", kind: "scalar", T: 9, opt: true }, { no: 3, name: "target", kind: "message", T: g_ }, { no: 4, name: "conversation_context", kind: "message", T: m_, repeated: true }]), g_ = wa.makeMessageType("agent.v1.SmartModeRiskTarget", () => [{ no: 1, name: "action", kind: "scalar", T: 9 }, { no: 2, name: "arguments", kind: "message", T: ks }]), u_ = wa.makeMessageType("agent.v1.SmartModeClassifierResult", () => [{ no: 1, name: "success", kind: "message", T: E_, oneof: "result" }, { no: 2, name: "error", kind: "message", T: T_, oneof: "result" }]), E_ = wa.makeMessageType("agent.v1.SmartModeClassifierSuccess", () => [{ no: 1, name: "decision", kind: "enum", T: wa.getEnumType(A_) }, { no: 2, name: "block_reason", kind: "scalar", T: 9, opt: true }, { no: 3, name: "proposed_allow_rule", kind: "scalar", T: 9, opt: true }, { no: 4, name: "applied_rules", kind: "message", T: p_, repeated: true }]), p_ = wa.makeMessageType("agent.v1.SmartModeClassifierAppliedRule", () => [{ no: 1, name: "effect", kind: "enum", T: wa.getEnumType(l_) }, { no: 2, name: "text", kind: "scalar", T: 9 }, { no: 3, name: "source", kind: "enum", T: wa.getEnumType(c_) }]), T_ = wa.makeMessageType("agent.v1.SmartModeClassifierError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), k_ = wa.makeMessageType("agent.v1.CanvasDiagnosticsArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }]), I_ = wa.makeMessageType("agent.v1.CanvasDiagnosticsResult", () => [{ no: 1, name: "success", kind: "message", T: h_, oneof: "result" }, { no: 2, name: "error", kind: "message", T: __, oneof: "result" }, { no: 3, name: "canvas_id", kind: "scalar", T: 9, opt: true }, { no: 4, name: "title", kind: "scalar", T: 9, opt: true }, { no: 5, name: "save_state", kind: "scalar", T: 9, opt: true }, { no: 6, name: "save_detail", kind: "scalar", T: 9, opt: true }]), h_ = wa.makeMessageType("agent.v1.CanvasDiagnosticsSuccess", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "diagnostics", kind: "message", T: TE, repeated: true }]), __ = wa.makeMessageType("agent.v1.CanvasDiagnosticsError", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "error", kind: "scalar", T: 9 }]), C_ = wa.makeMessageType("agent.v1.ShellAllowlistPrecheckArgs", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "working_directory", kind: "scalar", T: 9 }, { no: 3, name: "parsing_result", kind: "message", T: Fr }, { no: 4, name: "classifier_result", kind: "message", T: Pr, opt: true }, { no: 5, name: "tool_call_id", kind: "scalar", T: 9, opt: true }]), f_ = wa.makeMessageType("agent.v1.ShellAllowlistPrecheckResult", () => [{ no: 1, name: "allowlisted", kind: "scalar", T: 8 }]), B_ = wa.makeMessageType("agent.v1.McpAllowlistPrecheckArgs", () => [{ no: 1, name: "provider_identifier", kind: "scalar", T: 9 }, { no: 2, name: "tool_name", kind: "scalar", T: 9 }, { no: 3, name: "tool_call_id", kind: "scalar", T: 9, opt: true }, { no: 4, name: "annotations_json", kind: "scalar", T: 9, opt: true }]), Q_ = wa.makeMessageType("agent.v1.McpAllowlistPrecheckResult", () => [{ no: 1, name: "allowlisted", kind: "scalar", T: 8 }]), y_ = wa.makeMessageType("agent.v1.WebFetchAllowlistPrecheckArgs", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9, opt: true }]), R_ = wa.makeMessageType("agent.v1.WebFetchAllowlistPrecheckResult", () => [{ no: 1, name: "allowlisted", kind: "scalar", T: 8 }]), N_ = wa.makeMessageType("agent.v1.PiReadExecArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "offset", kind: "scalar", T: 5, opt: true }, { no: 3, name: "limit", kind: "scalar", T: 5, opt: true }]), v_ = wa.makeMessageType("agent.v1.PiReadExecResult", () => [{ no: 1, name: "success", kind: "message", T: S_, oneof: "result" }, { no: 2, name: "error", kind: "message", T: D_, oneof: "result" }]), S_ = wa.makeMessageType("agent.v1.PiReadExecSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }, { no: 2, name: "truncation", kind: "message", T: Hp, opt: true }]), D_ = wa.makeMessageType("agent.v1.PiReadExecError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), w_ = wa.makeMessageType("agent.v1.PiBashExecArgs", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "timeout", kind: "scalar", T: 1, opt: true }]), b_ = wa.makeMessageType("agent.v1.PiBashExecResult", () => [{ no: 1, name: "success", kind: "message", T: M_, oneof: "result" }, { no: 2, name: "error", kind: "message", T: F_, oneof: "result" }]), M_ = wa.makeMessageType("agent.v1.PiBashExecSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }, { no: 2, name: "truncation", kind: "message", T: Hp, opt: true }, { no: 3, name: "full_output_path", kind: "scalar", T: 9, opt: true }]), F_ = wa.makeMessageType("agent.v1.PiBashExecError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "truncation", kind: "message", T: Hp, opt: true }, { no: 3, name: "full_output_path", kind: "scalar", T: 9, opt: true }]), O_ = wa.makeMessageType("agent.v1.PiEditExecArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "edits", kind: "message", T: Wp, repeated: true }]), U_ = wa.makeMessageType("agent.v1.PiEditExecResult", () => [{ no: 1, name: "success", kind: "message", T: L_, oneof: "result" }, { no: 2, name: "error", kind: "message", T: P_, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: x_, oneof: "result" }]), L_ = wa.makeMessageType("agent.v1.PiEditExecSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }, { no: 2, name: "diff", kind: "scalar", T: 9 }, { no: 3, name: "patch", kind: "scalar", T: 9 }, { no: 4, name: "first_changed_line", kind: "scalar", T: 13, opt: true }]), P_ = wa.makeMessageType("agent.v1.PiEditExecError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), x_ = wa.makeMessageType("agent.v1.PiEditExecRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), G_ = wa.makeMessageType("agent.v1.PiWriteExecArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }]), Y_ = wa.makeMessageType("agent.v1.PiWriteExecResult", () => [{ no: 1, name: "success", kind: "message", T: J_, oneof: "result" }, { no: 2, name: "error", kind: "message", T: V_, oneof: "result" }, { no: 3, name: "rejected", kind: "message", T: q_, oneof: "result" }]), J_ = wa.makeMessageType("agent.v1.PiWriteExecSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }]), V_ = wa.makeMessageType("agent.v1.PiWriteExecError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), q_ = wa.makeMessageType("agent.v1.PiWriteExecRejected", () => [{ no: 1, name: "reason", kind: "scalar", T: 9 }]), H_ = wa.makeMessageType("agent.v1.PiGrepExecArgs", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9, opt: true }, { no: 3, name: "glob", kind: "scalar", T: 9, opt: true }, { no: 4, name: "ignore_case", kind: "scalar", T: 8, opt: true }, { no: 5, name: "literal", kind: "scalar", T: 8, opt: true }, { no: 6, name: "context", kind: "scalar", T: 5, opt: true }, { no: 7, name: "limit", kind: "scalar", T: 5, opt: true }]), W_ = wa.makeMessageType("agent.v1.PiGrepExecResult", () => [{ no: 1, name: "success", kind: "message", T: K_, oneof: "result" }, { no: 2, name: "error", kind: "message", T: j_, oneof: "result" }]), K_ = wa.makeMessageType("agent.v1.PiGrepExecSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }, { no: 2, name: "truncation", kind: "message", T: Hp, opt: true }, { no: 3, name: "match_limit_reached", kind: "scalar", T: 13, opt: true }, { no: 4, name: "lines_truncated", kind: "scalar", T: 8 }]), j_ = wa.makeMessageType("agent.v1.PiGrepExecError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), X_ = wa.makeMessageType("agent.v1.PiFindExecArgs", () => [{ no: 1, name: "pattern", kind: "scalar", T: 9 }, { no: 2, name: "path", kind: "scalar", T: 9, opt: true }, { no: 3, name: "limit", kind: "scalar", T: 5, opt: true }]), Z_ = wa.makeMessageType("agent.v1.PiFindExecResult", () => [{ no: 1, name: "success", kind: "message", T: z_, oneof: "result" }, { no: 2, name: "error", kind: "message", T: $_, oneof: "result" }]), z_ = wa.makeMessageType("agent.v1.PiFindExecSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }, { no: 2, name: "truncation", kind: "message", T: Hp, opt: true }, { no: 3, name: "result_limit_reached", kind: "scalar", T: 13, opt: true }]), $_ = wa.makeMessageType("agent.v1.PiFindExecError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), eC = wa.makeMessageType("agent.v1.PiLsExecArgs", () => [{ no: 1, name: "path", kind: "scalar", T: 9, opt: true }, { no: 2, name: "limit", kind: "scalar", T: 5, opt: true }]), nC = wa.makeMessageType("agent.v1.PiLsExecResult", () => [{ no: 1, name: "success", kind: "message", T: aC, oneof: "result" }, { no: 2, name: "error", kind: "message", T: tC, oneof: "result" }]), aC = wa.makeMessageType("agent.v1.PiLsExecSuccess", () => [{ no: 1, name: "output", kind: "scalar", T: 9 }, { no: 2, name: "truncation", kind: "message", T: Hp, opt: true }, { no: 3, name: "entry_limit_reached", kind: "scalar", T: 13, opt: true }]), tC = wa.makeMessageType("agent.v1.PiLsExecError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), sC = wa.makeMessageType("agent.v1.AgentStoreConflictCursor", () => [{ no: 1, name: "journal_epoch", kind: "scalar", T: 9 }, { no: 2, name: "seq", kind: "scalar", T: 4 }, { no: 3, name: "last_event_id", kind: "scalar", T: 9 }]), oC = wa.makeMessageType("agent.v1.AgentStoreConflictArgs", () => [{ no: 1, name: "cursor", kind: "message", T: sC, opt: true }, { no: 2, name: "advance", kind: "scalar", T: 8, opt: true }, { no: 3, name: "include_quota_notices", kind: "scalar", T: 8, opt: true }]), rC = wa.makeMessageType("agent.v1.AgentStoreConflictEvent", () => [{ no: 1, name: "v", kind: "scalar", T: 13 }, { no: 2, name: "event_id", kind: "scalar", T: 9 }, { no: 3, name: "journal_epoch", kind: "scalar", T: 9 }, { no: 4, name: "seq", kind: "scalar", T: 4 }, { no: 5, name: "ts_ms", kind: "scalar", T: 4 }, { no: 6, name: "kind", kind: "scalar", T: 9 }, { no: 7, name: "store_id", kind: "scalar", T: 9, opt: true }, { no: 8, name: "original_rel_path", kind: "scalar", T: 9, opt: true }, { no: 9, name: "conflict_rel_path", kind: "scalar", T: 9, opt: true }, { no: 10, name: "original_abs_path", kind: "scalar", T: 9, opt: true }, { no: 11, name: "conflict_abs_path", kind: "scalar", T: 9, opt: true }, { no: 12, name: "preserved_bytes", kind: "scalar", T: 4, opt: true }, { no: 13, name: "scope_kind", kind: "scalar", T: 9, opt: true }, { no: 14, name: "limit_bytes", kind: "scalar", T: 4, opt: true }, { no: 15, name: "usage_bytes", kind: "scalar", T: 4, opt: true }]), iC = wa.makeMessageType("agent.v1.AgentStoreConflictResult", () => [{ no: 1, name: "success", kind: "message", T: AC, oneof: "result" }, { no: 2, name: "error", kind: "message", T: lC, oneof: "result" }]), AC = wa.makeMessageType("agent.v1.AgentStoreConflictSuccess", () => [{ no: 1, name: "events", kind: "message", T: rC, repeated: true }, { no: 2, name: "next_cursor", kind: "message", T: sC }, { no: 3, name: "gap", kind: "scalar", T: 8 }]), lC = wa.makeMessageType("agent.v1.AgentStoreConflictError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }]), cC = wa.makeMessageType("agent.v1.PreCompactRequestQuery", () => [{ no: 1, name: "trigger", kind: "scalar", T: 9 }, { no: 2, name: "context_usage_percent", kind: "scalar", T: 1 }, { no: 3, name: "context_tokens", kind: "scalar", T: 3 }, { no: 4, name: "context_window_size", kind: "scalar", T: 3 }, { no: 5, name: "message_count", kind: "scalar", T: 5 }, { no: 6, name: "messages_to_compact", kind: "scalar", T: 5 }, { no: 7, name: "is_first_compaction", kind: "scalar", T: 8 }, { no: 8, name: "conversation_id", kind: "scalar", T: 9, opt: true }, { no: 9, name: "generation_id", kind: "scalar", T: 9, opt: true }, { no: 10, name: "model", kind: "scalar", T: 9, opt: true }, { no: 11, name: "model_id", kind: "scalar", T: 9, opt: true }, { no: 12, name: "model_params", kind: "message", T: bk, repeated: true }]), mC = wa.makeMessageType("agent.v1.PreCompactRequestResponse", () => [{ no: 1, name: "user_message", kind: "scalar", T: 9, opt: true }]), dC = wa.makeMessageType("agent.v1.SubagentStartRequestQuery", () => [{ no: 1, name: "subagent_id", kind: "scalar", T: 9 }, { no: 2, name: "subagent_type", kind: "scalar", T: 9 }, { no: 3, name: "task", kind: "scalar", T: 9 }, { no: 4, name: "parent_conversation_id", kind: "scalar", T: 9 }, { no: 5, name: "tool_call_id", kind: "scalar", T: 9, opt: true }, { no: 6, name: "subagent_model", kind: "scalar", T: 9, opt: true }, { no: 7, name: "is_parallel_worker", kind: "scalar", T: 8 }, { no: 8, name: "git_branch", kind: "scalar", T: 9, opt: true }, { no: 9, name: "conversation_id", kind: "scalar", T: 9, opt: true }, { no: 10, name: "generation_id", kind: "scalar", T: 9, opt: true }, { no: 11, name: "model", kind: "scalar", T: 9, opt: true }, { no: 12, name: "model_id", kind: "scalar", T: 9, opt: true }, { no: 13, name: "model_params", kind: "message", T: bk, repeated: true }]), gC = wa.makeMessageType("agent.v1.SubagentStartRequestResponse", () => [{ no: 1, name: "permission", kind: "scalar", T: 9, opt: true }, { no: 2, name: "user_message", kind: "scalar", T: 9, opt: true }, { no: 3, name: "additional_context", kind: "scalar", T: 9, opt: true }]), uC = wa.makeMessageType("agent.v1.SubagentStopRequestQuery", () => [{ no: 1, name: "subagent_id", kind: "scalar", T: 9 }, { no: 2, name: "subagent_type", kind: "scalar", T: 9 }, { no: 3, name: "status", kind: "scalar", T: 9 }, { no: 4, name: "duration_ms", kind: "scalar", T: 3 }, { no: 5, name: "summary", kind: "scalar", T: 9, opt: true }, { no: 6, name: "parent_conversation_id", kind: "scalar", T: 9 }, { no: 7, name: "message_count", kind: "scalar", T: 5 }, { no: 8, name: "tool_call_count", kind: "scalar", T: 5 }, { no: 9, name: "error_message", kind: "scalar", T: 9, opt: true }, { no: 10, name: "modified_files", kind: "scalar", T: 9, repeated: true }, { no: 11, name: "git_branch", kind: "scalar", T: 9, opt: true }, { no: 12, name: "conversation_id", kind: "scalar", T: 9, opt: true }, { no: 13, name: "generation_id", kind: "scalar", T: 9, opt: true }, { no: 14, name: "model", kind: "scalar", T: 9, opt: true }, { no: 15, name: "loop_count", kind: "scalar", T: 5 }, { no: 16, name: "task", kind: "scalar", T: 9, opt: true }, { no: 17, name: "description", kind: "scalar", T: 9, opt: true }, { no: 18, name: "model_id", kind: "scalar", T: 9, opt: true }, { no: 19, name: "model_params", kind: "message", T: bk, repeated: true }, { no: 20, name: "child_conversation_id", kind: "scalar", T: 9, opt: true }]), EC = wa.makeMessageType("agent.v1.SubagentStopRequestResponse", () => [{ no: 1, name: "followup_message", kind: "scalar", T: 9, opt: true }, { no: 2, name: "additional_context", kind: "scalar", T: 9, opt: true }]), pC = wa.makeMessageType("agent.v1.BeforeSubmitPromptAttachment", () => [{ no: 1, name: "type", kind: "scalar", T: 9 }, { no: 2, name: "file_path", kind: "scalar", T: 9 }]), TC = wa.makeMessageType("agent.v1.BeforeSubmitPromptRequestQuery", () => [{ no: 1, name: "prompt", kind: "scalar", T: 9 }, { no: 2, name: "attachments", kind: "message", T: pC, repeated: true }, { no: 3, name: "composer_mode", kind: "scalar", T: 9, opt: true }, { no: 4, name: "conversation_id", kind: "scalar", T: 9, opt: true }, { no: 5, name: "generation_id", kind: "scalar", T: 9, opt: true }, { no: 6, name: "model", kind: "scalar", T: 9, opt: true }, { no: 7, name: "model_id", kind: "scalar", T: 9, opt: true }, { no: 8, name: "model_params", kind: "message", T: bk, repeated: true }]), kC = wa.makeMessageType("agent.v1.BeforeSubmitPromptRequestResponse", () => [{ no: 1, name: "continue", kind: "scalar", T: 8, opt: true }, { no: 2, name: "user_message", kind: "scalar", T: 9, opt: true }, { no: 3, name: "additional_context", kind: "scalar", T: 9, opt: true }]), IC = wa.makeMessageType("agent.v1.AfterAgentResponseRequestQuery", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "conversation_id", kind: "scalar", T: 9, opt: true }, { no: 3, name: "generation_id", kind: "scalar", T: 9, opt: true }, { no: 4, name: "model", kind: "scalar", T: 9, opt: true }, { no: 5, name: "model_id", kind: "scalar", T: 9, opt: true }, { no: 6, name: "model_params", kind: "message", T: bk, repeated: true }, { no: 7, name: "input_tokens", kind: "scalar", T: 3, opt: true }, { no: 8, name: "output_tokens", kind: "scalar", T: 3, opt: true }, { no: 9, name: "cache_read_tokens", kind: "scalar", T: 3, opt: true }, { no: 10, name: "cache_write_tokens", kind: "scalar", T: 3, opt: true }]), hC = wa.makeMessageType("agent.v1.AfterAgentResponseRequestResponse", []), _C = wa.makeMessageType("agent.v1.AfterAgentThoughtRequestQuery", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "duration_ms", kind: "scalar", T: 3, opt: true }, { no: 3, name: "conversation_id", kind: "scalar", T: 9, opt: true }, { no: 4, name: "generation_id", kind: "scalar", T: 9, opt: true }, { no: 5, name: "model", kind: "scalar", T: 9, opt: true }, { no: 6, name: "model_id", kind: "scalar", T: 9, opt: true }, { no: 7, name: "model_params", kind: "message", T: bk, repeated: true }]), CC = wa.makeMessageType("agent.v1.AfterAgentThoughtRequestResponse", []), fC = wa.makeMessageType("agent.v1.StopRequestQuery", () => [{ no: 1, name: "status", kind: "scalar", T: 9 }, { no: 2, name: "loop_count", kind: "scalar", T: 5 }, { no: 3, name: "conversation_id", kind: "scalar", T: 9, opt: true }, { no: 4, name: "generation_id", kind: "scalar", T: 9, opt: true }, { no: 5, name: "model", kind: "scalar", T: 9, opt: true }, { no: 6, name: "model_id", kind: "scalar", T: 9, opt: true }, { no: 7, name: "model_params", kind: "message", T: bk, repeated: true }, { no: 8, name: "input_tokens", kind: "scalar", T: 3, opt: true }, { no: 9, name: "output_tokens", kind: "scalar", T: 3, opt: true }, { no: 10, name: "cache_read_tokens", kind: "scalar", T: 3, opt: true }, { no: 11, name: "cache_write_tokens", kind: "scalar", T: 3, opt: true }]), BC = wa.makeMessageType("agent.v1.StopRequestResponse", () => [{ no: 1, name: "followup_message", kind: "scalar", T: 9, opt: true }]), QC = wa.makeMessageType("agent.v1.PreToolUseRequestQuery", () => [{ no: 1, name: "tool_name", kind: "scalar", T: 9 }, { no: 2, name: "tool_input", kind: "message", T: ks }, { no: 3, name: "tool_use_id", kind: "scalar", T: 9 }, { no: 4, name: "cwd", kind: "scalar", T: 9, opt: true }, { no: 5, name: "conversation_id", kind: "scalar", T: 9, opt: true }, { no: 6, name: "generation_id", kind: "scalar", T: 9, opt: true }, { no: 7, name: "model", kind: "scalar", T: 9, opt: true }, { no: 8, name: "model_id", kind: "scalar", T: 9, opt: true }, { no: 9, name: "model_params", kind: "message", T: bk, repeated: true }, { no: 10, name: "parent_tool_call_id", kind: "scalar", T: 9, opt: true }]), yC = wa.makeMessageType("agent.v1.PreToolUseRequestResponse", () => [{ no: 1, name: "permission", kind: "scalar", T: 9, opt: true }, { no: 2, name: "user_message", kind: "scalar", T: 9, opt: true }, { no: 3, name: "agent_message", kind: "scalar", T: 9, opt: true }, { no: 4, name: "updated_input", kind: "scalar", T: 9, opt: true }, { no: 5, name: "additional_context", kind: "scalar", T: 9, opt: true }]), RC = wa.makeMessageType("agent.v1.PostToolUseRequestQuery", () => [{ no: 1, name: "tool_name", kind: "scalar", T: 9 }, { no: 2, name: "tool_input", kind: "message", T: ks }, { no: 3, name: "tool_output", kind: "scalar", T: 9 }, { no: 4, name: "duration_ms", kind: "scalar", T: 3 }, { no: 5, name: "tool_use_id", kind: "scalar", T: 9 }, { no: 6, name: "cwd", kind: "scalar", T: 9, opt: true }, { no: 7, name: "conversation_id", kind: "scalar", T: 9, opt: true }, { no: 8, name: "generation_id", kind: "scalar", T: 9, opt: true }, { no: 9, name: "model", kind: "scalar", T: 9, opt: true }, { no: 10, name: "model_id", kind: "scalar", T: 9, opt: true }, { no: 11, name: "model_params", kind: "message", T: bk, repeated: true }, { no: 12, name: "parent_tool_call_id", kind: "scalar", T: 9, opt: true }]), NC = wa.makeMessageType("agent.v1.PostToolUseRequestResponse", () => [{ no: 1, name: "additional_context", kind: "scalar", T: 9, opt: true }]), vC = wa.makeMessageType("agent.v1.PostToolUseFailureRequestQuery", () => [{ no: 1, name: "tool_name", kind: "scalar", T: 9 }, { no: 2, name: "tool_input", kind: "message", T: ks }, { no: 3, name: "error_message", kind: "scalar", T: 9 }, { no: 4, name: "failure_type", kind: "scalar", T: 9 }, { no: 5, name: "duration_ms", kind: "scalar", T: 3 }, { no: 6, name: "tool_use_id", kind: "scalar", T: 9 }, { no: 7, name: "is_interrupt", kind: "scalar", T: 8 }, { no: 8, name: "conversation_id", kind: "scalar", T: 9, opt: true }, { no: 9, name: "generation_id", kind: "scalar", T: 9, opt: true }, { no: 10, name: "model", kind: "scalar", T: 9, opt: true }, { no: 11, name: "model_id", kind: "scalar", T: 9, opt: true }, { no: 12, name: "model_params", kind: "message", T: bk, repeated: true }, { no: 13, name: "parent_tool_call_id", kind: "scalar", T: 9, opt: true }]), SC = wa.makeMessageType("agent.v1.PostToolUseFailureRequestResponse", () => [{ no: 1, name: "additional_context", kind: "scalar", T: 9, opt: true }]), DC = wa.makeMessageType("agent.v1.ExecClientStreamClose", () => [{ no: 1, name: "id", kind: "scalar", T: 13 }]), wC = wa.makeMessageType("agent.v1.ExecClientThrow", () => [{ no: 1, name: "id", kind: "scalar", T: 13 }, { no: 2, name: "error", kind: "scalar", T: 9 }, { no: 3, name: "stack_trace", kind: "scalar", T: 9, opt: true }, { no: 4, name: "error_code", kind: "scalar", T: 9, opt: true }]), bC = wa.makeMessageType("agent.v1.ExecClientHeartbeat", () => [{ no: 1, name: "id", kind: "scalar", T: 13 }]), MC = wa.makeMessageType("agent.v1.ExecClientControlMessage", () => [{ no: 1, name: "stream_close", kind: "message", T: DC, oneof: "message" }, { no: 2, name: "throw", kind: "message", T: wC, oneof: "message" }, { no: 3, name: "heartbeat", kind: "message", T: bC, oneof: "message" }]), FC = wa.makeMessageType("agent.v1.ExecServerAbort", () => [{ no: 1, name: "id", kind: "scalar", T: 13 }]), OC = wa.makeMessageType("agent.v1.ExecServerControlMessage", () => [{ no: 1, name: "abort", kind: "message", T: FC, oneof: "message" }]), UC = wa.makeMessageType("agent.v1.SpanContext", () => [{ no: 1, name: "trace_id", kind: "scalar", T: 9 }, { no: 2, name: "span_id", kind: "scalar", T: 9 }, { no: 3, name: "trace_flags", kind: "scalar", T: 13, opt: true }, { no: 4, name: "trace_state", kind: "scalar", T: 9, opt: true }]), LC = wa.makeMessageType("agent.v1.ExecServerMessage", () => [{ no: 1, name: "id", kind: "scalar", T: 13 }, { no: 15, name: "exec_id", kind: "scalar", T: 9 }, { no: 57, name: "machine_id", kind: "scalar", T: 9, opt: true }, { no: 2, name: "shell_args", kind: "message", T: Wr, oneof: "message" }, { no: 3, name: "write_args", kind: "message", T: bh, oneof: "message" }, { no: 4, name: "delete_args", kind: "message", T: xu, oneof: "message" }, { no: 5, name: "grep_args", kind: "message", T: ju, oneof: "message" }, { no: 7, name: "read_args", kind: "message", T: xh, oneof: "message" }, { no: 29, name: "redacted_read_args", kind: "message", T: xh, oneof: "message" }, { no: 8, name: "ls_args", kind: "message", T: qA, oneof: "message" }, { no: 9, name: "diagnostics_args", kind: "message", T: uE, oneof: "message" }, { no: 10, name: "request_context_args", kind: "message", T: lT, oneof: "message" }, { no: 11, name: "mcp_args", kind: "message", T: vE, oneof: "message" }, { no: 14, name: "shell_stream_args", kind: "message", T: Wr, oneof: "message" }, { no: 16, name: "background_shell_spawn_args", kind: "message", T: mi, oneof: "message" }, { no: 17, name: "list_mcp_resources_exec_args", kind: "message", T: ZE, oneof: "message" }, { no: 18, name: "read_mcp_resource_exec_args", kind: "message", T: tp, oneof: "message" }, { no: 36, name: "mcp_state_exec_args", kind: "message", T: qE, oneof: "message" }, { no: 20, name: "fetch_args", kind: "message", T: Cp, oneof: "message" }, { no: 21, name: "record_screen_args", kind: "message", T: _i, oneof: "message" }, { no: 22, name: "computer_use_args", kind: "message", T: rl, oneof: "message" }, { no: 23, name: "write_shell_stdin_args", kind: "message", T: Ei, oneof: "message" }, { no: 27, name: "execute_hook_args", kind: "message", T: xC, oneof: "message" }, { no: 28, name: "subagent_args", kind: "message", T: jh, oneof: "message" }, { no: 30, name: "force_background_shell_args", kind: "message", T: Jr, oneof: "message" }, { no: 31, name: "force_background_subagent_args", kind: "message", T: r_, oneof: "message" }, { no: 37, name: "subagent_await_args", kind: "message", T: zh, oneof: "message" }, { no: 38, name: "smart_mode_classifier_args", kind: "message", T: d_, oneof: "message" }, { no: 40, name: "canvas_diagnostics_args", kind: "message", T: k_, oneof: "message" }, { no: 41, name: "shell_allowlist_precheck_args", kind: "message", T: C_, oneof: "message" }, { no: 42, name: "mcp_allowlist_precheck_args", kind: "message", T: B_, oneof: "message" }, { no: 43, name: "web_fetch_allowlist_precheck_args", kind: "message", T: y_, oneof: "message" }, { no: 44, name: "git_diff_request", kind: "message", T: Ao, oneof: "message" }, { no: 45, name: "pi_read_args", kind: "message", T: N_, oneof: "message" }, { no: 46, name: "pi_bash_args", kind: "message", T: w_, oneof: "message" }, { no: 47, name: "pi_edit_args", kind: "message", T: O_, oneof: "message" }, { no: 48, name: "pi_write_args", kind: "message", T: G_, oneof: "message" }, { no: 49, name: "pi_grep_args", kind: "message", T: H_, oneof: "message" }, { no: 50, name: "pi_find_args", kind: "message", T: X_, oneof: "message" }, { no: 51, name: "pi_ls_args", kind: "message", T: eC, oneof: "message" }, { no: 52, name: "mini_swe_agent_bash_args", kind: "message", T: Wr, oneof: "message" }, { no: 53, name: "conversation_search_args", kind: "message", T: $p, oneof: "message" }, { no: 54, name: "agent_store_conflict_args", kind: "message", T: oC, oneof: "message" }, { no: 19, name: "span_context", kind: "message", T: UC, opt: true }, { no: 55, name: "accept_hook_additional_contexts", kind: "scalar", T: 8, opt: true }]), PC = wa.makeMessageType("agent.v1.ExecClientMessage", () => [{ no: 1, name: "id", kind: "scalar", T: 13 }, { no: 15, name: "exec_id", kind: "scalar", T: 9 }, { no: 39, name: "local_execution_time_ms", kind: "scalar", T: 5, opt: true }, { no: 45, name: "hook_additional_contexts", kind: "message", T: Sr, repeated: true }, { no: 2, name: "shell_result", kind: "message", T: Kr, oneof: "message" }, { no: 3, name: "write_result", kind: "message", T: Mh, oneof: "message" }, { no: 4, name: "delete_result", kind: "message", T: Gu, oneof: "message" }, { no: 5, name: "grep_result", kind: "message", T: Xu, oneof: "message" }, { no: 7, name: "read_result", kind: "message", T: Gh, oneof: "message" }, { no: 29, name: "redacted_read_result", kind: "message", T: Gh, oneof: "message" }, { no: 8, name: "ls_result", kind: "message", T: HA, oneof: "message" }, { no: 9, name: "diagnostics_result", kind: "message", T: EE, oneof: "message" }, { no: 10, name: "request_context_result", kind: "message", T: cT, oneof: "message" }, { no: 11, name: "mcp_result", kind: "message", T: DE, oneof: "message" }, { no: 14, name: "shell_stream", kind: "message", T: si, oneof: "message" }, { no: 16, name: "background_shell_spawn_result", kind: "message", T: di, oneof: "message" }, { no: 17, name: "list_mcp_resources_exec_result", kind: "message", T: zE, oneof: "message" }, { no: 18, name: "read_mcp_resource_exec_result", kind: "message", T: sp, oneof: "message" }, { no: 36, name: "mcp_state_exec_result", kind: "message", T: HE, oneof: "message" }, { no: 20, name: "fetch_result", kind: "message", T: fp, oneof: "message" }, { no: 21, name: "record_screen_result", kind: "message", T: Ci, oneof: "message" }, { no: 22, name: "computer_use_result", kind: "message", T: Il, oneof: "message" }, { no: 23, name: "write_shell_stdin_result", kind: "message", T: pi, oneof: "message" }, { no: 27, name: "execute_hook_result", kind: "message", T: GC, oneof: "message" }, { no: 28, name: "subagent_result", kind: "message", T: Zh, oneof: "message" }, { no: 30, name: "force_background_shell_result", kind: "message", T: Vr, oneof: "message" }, { no: 31, name: "force_background_subagent_result", kind: "message", T: i_, oneof: "message" }, { no: 37, name: "subagent_await_result", kind: "message", T: $h, oneof: "message" }, { no: 38, name: "smart_mode_classifier_result", kind: "message", T: u_, oneof: "message" }, { no: 40, name: "canvas_diagnostics_result", kind: "message", T: I_, oneof: "message" }, { no: 41, name: "shell_allowlist_precheck_result", kind: "message", T: f_, oneof: "message" }, { no: 42, name: "mcp_allowlist_precheck_result", kind: "message", T: Q_, oneof: "message" }, { no: 43, name: "web_fetch_allowlist_precheck_result", kind: "message", T: R_, oneof: "message" }, { no: 44, name: "git_diff_response", kind: "message", T: co, oneof: "message" }, { no: 46, name: "pi_read_result", kind: "message", T: v_, oneof: "message" }, { no: 47, name: "pi_bash_result", kind: "message", T: b_, oneof: "message" }, { no: 48, name: "pi_edit_result", kind: "message", T: U_, oneof: "message" }, { no: 49, name: "pi_write_result", kind: "message", T: Y_, oneof: "message" }, { no: 50, name: "pi_grep_result", kind: "message", T: W_, oneof: "message" }, { no: 51, name: "pi_find_result", kind: "message", T: Z_, oneof: "message" }, { no: 52, name: "pi_ls_result", kind: "message", T: nC, oneof: "message" }, { no: 53, name: "conversation_search_result", kind: "message", T: eT, oneof: "message" }, { no: 54, name: "agent_store_conflict_result", kind: "message", T: iC, oneof: "message" }, { no: 55, name: "mini_swe_agent_bash_result", kind: "message", T: Kr, oneof: "message" }]), xC = wa.makeMessageType("agent.v1.ExecuteHookArgs", () => [{ no: 1, name: "request", kind: "message", T: YC }]), GC = wa.makeMessageType("agent.v1.ExecuteHookResult", () => [{ no: 1, name: "response", kind: "message", T: JC }]), YC = wa.makeMessageType("agent.v1.ExecuteHookRequest", () => [{ no: 1, name: "pre_compact", kind: "message", T: cC, oneof: "request" }, { no: 2, name: "subagent_start", kind: "message", T: dC, oneof: "request" }, { no: 3, name: "subagent_stop", kind: "message", T: uC, oneof: "request" }, { no: 4, name: "pre_tool_use", kind: "message", T: QC, oneof: "request" }, { no: 5, name: "post_tool_use", kind: "message", T: RC, oneof: "request" }, { no: 6, name: "post_tool_use_failure", kind: "message", T: vC, oneof: "request" }, { no: 7, name: "before_submit_prompt", kind: "message", T: TC, oneof: "request" }, { no: 8, name: "after_agent_response", kind: "message", T: IC, oneof: "request" }, { no: 9, name: "after_agent_thought", kind: "message", T: _C, oneof: "request" }, { no: 11, name: "stop", kind: "message", T: fC, oneof: "request" }]), JC = wa.makeMessageType("agent.v1.ExecuteHookResponse", () => [{ no: 1, name: "pre_compact", kind: "message", T: mC, oneof: "response" }, { no: 2, name: "subagent_start", kind: "message", T: gC, oneof: "response" }, { no: 3, name: "subagent_stop", kind: "message", T: EC, oneof: "response" }, { no: 4, name: "pre_tool_use", kind: "message", T: yC, oneof: "response" }, { no: 5, name: "post_tool_use", kind: "message", T: NC, oneof: "response" }, { no: 6, name: "post_tool_use_failure", kind: "message", T: SC, oneof: "response" }, { no: 7, name: "before_submit_prompt", kind: "message", T: kC, oneof: "response" }, { no: 8, name: "after_agent_response", kind: "message", T: hC, oneof: "response" }, { no: 9, name: "after_agent_thought", kind: "message", T: CC, oneof: "response" }, { no: 11, name: "stop", kind: "message", T: BC, oneof: "response" }]), VC = wa.makeMessageType("aiserver.v1.LspSubgraphPosition", () => [{ no: 1, name: "line", kind: "scalar", T: 5 }, { no: 2, name: "character", kind: "scalar", T: 5 }]), qC = wa.makeMessageType("aiserver.v1.LspSubgraphRange", () => [{ no: 1, name: "start_line", kind: "scalar", T: 5 }, { no: 2, name: "start_character", kind: "scalar", T: 5 }, { no: 3, name: "end_line", kind: "scalar", T: 5 }, { no: 4, name: "end_character", kind: "scalar", T: 5 }]), HC = wa.makeMessageType("aiserver.v1.LspSubgraphContextItem", () => [{ no: 1, name: "uri", kind: "scalar", T: 9, opt: true }, { no: 2, name: "type", kind: "scalar", T: 9 }, { no: 3, name: "content", kind: "scalar", T: 9 }, { no: 4, name: "range", kind: "message", T: qC, opt: true }]), WC = wa.makeMessageType("aiserver.v1.LspSubgraphFullContext", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }, { no: 2, name: "symbol_name", kind: "scalar", T: 9 }, { no: 3, name: "positions", kind: "message", T: VC, repeated: true }, { no: 4, name: "context_items", kind: "message", T: HC, repeated: true }, { no: 5, name: "score", kind: "scalar", T: 2 }]), KC = wa.makeMessageType("aiserver.v1.FilesyncUpdateWithModelVersion", () => [{ no: 1, name: "model_version", kind: "scalar", T: 5 }, { no: 2, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 3, name: "updates", kind: "message", T: jC, repeated: true }, { no: 4, name: "expected_file_length", kind: "scalar", T: 5 }]), jC = wa.makeMessageType("aiserver.v1.SingleUpdateRequest", () => [{ no: 1, name: "start_position", kind: "scalar", T: 5 }, { no: 2, name: "end_position", kind: "scalar", T: 5 }, { no: 3, name: "change_length", kind: "scalar", T: 5 }, { no: 4, name: "replaced_string", kind: "scalar", T: 9 }, { no: 5, name: "range", kind: "message", T: ko }]), XC = wa.makeEnum("aiserver.v1.CppSource", [{ no: 0, name: "CPP_SOURCE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CPP_SOURCE_LINE_CHANGE", localName: "LINE_CHANGE" }, { no: 2, name: "CPP_SOURCE_TYPING", localName: "TYPING" }, { no: 3, name: "CPP_SOURCE_OPTION_HOLD", localName: "OPTION_HOLD" }, { no: 4, name: "CPP_SOURCE_LINTER_ERRORS", localName: "LINTER_ERRORS" }, { no: 5, name: "CPP_SOURCE_PARAMETER_HINTS", localName: "PARAMETER_HINTS" }, { no: 6, name: "CPP_SOURCE_CURSOR_PREDICTION", localName: "CURSOR_PREDICTION" }, { no: 7, name: "CPP_SOURCE_MANUAL_TRIGGER", localName: "MANUAL_TRIGGER" }, { no: 8, name: "CPP_SOURCE_EDITOR_CHANGE", localName: "EDITOR_CHANGE" }, { no: 9, name: "CPP_SOURCE_LSP_SUGGESTIONS", localName: "LSP_SUGGESTIONS" }]), ZC = wa.makeMessageType("aiserver.v1.CppIntentInfo", () => [{ no: 1, name: "source", kind: "scalar", T: 9 }]), zC = wa.makeMessageType("aiserver.v1.LspSuggestion", () => [{ no: 1, name: "label", kind: "scalar", T: 9 }]), $C = wa.makeMessageType("aiserver.v1.LspSuggestedItems", () => [{ no: 1, name: "suggestions", kind: "message", T: zC, repeated: true }]), ef = wa.makeMessageType("aiserver.v1.ShouldTurnOnCppOnboardingRequest", []), nf = wa.makeMessageType("aiserver.v1.ShouldTurnOnCppOnboardingResponse", () => [{ no: 1, name: "should_turn_on_cpp_onboarding", kind: "scalar", T: 8 }]), af = wa.makeMessageType("aiserver.v1.StreamCppRequest", () => [{ no: 1, name: "current_file", kind: "message", T: Uo }, { no: 2, name: "diff_history", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "model_name", kind: "scalar", T: 9, opt: true }, { no: 4, name: "linter_errors", kind: "message", T: Ho, opt: true }, { no: 13, name: "context_items", kind: "message", T: Bf, repeated: true }, { no: 5, name: "diff_history_keys", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "give_debug_output", kind: "scalar", T: 8, opt: true }, { no: 7, name: "file_diff_histories", kind: "message", T: _f, repeated: true }, { no: 8, name: "merged_diff_histories", kind: "message", T: _f, repeated: true }, { no: 9, name: "block_diff_patches", kind: "message", T: lQ, repeated: true }, { no: 10, name: "is_nightly", kind: "scalar", T: 8, opt: true }, { no: 11, name: "is_debug", kind: "scalar", T: 8, opt: true }, { no: 12, name: "immediately_ack", kind: "scalar", T: 8, opt: true }, { no: 17, name: "enable_more_context", kind: "scalar", T: 8, opt: true }, { no: 14, name: "parameter_hints", kind: "message", T: Qf, repeated: true }, { no: 15, name: "lsp_contexts", kind: "message", T: WC, repeated: true }, { no: 16, name: "cpp_intent_info", kind: "message", T: ZC, opt: true }, { no: 18, name: "workspace_id", kind: "scalar", T: 9, opt: true }, { no: 19, name: "additional_files", kind: "message", T: hf, repeated: true }, { no: 20, name: "control_token", kind: "enum", T: wa.getEnumType(tf), opt: true }, { no: 21, name: "client_time", kind: "scalar", T: 1, opt: true }, { no: 22, name: "filesync_updates", kind: "message", T: KC, repeated: true }, { no: 23, name: "time_since_request_start", kind: "scalar", T: 1 }, { no: 24, name: "time_at_request_send", kind: "scalar", T: 1 }, { no: 25, name: "client_timezone_offset", kind: "scalar", T: 1, opt: true }, { no: 26, name: "lsp_suggested_items", kind: "message", T: $C, opt: true }, { no: 27, name: "supports_cpt", kind: "scalar", T: 8, opt: true }, { no: 28, name: "supports_crlf_cpt", kind: "scalar", T: 8, opt: true }, { no: 29, name: "code_results", kind: "message", T: MA, repeated: true }]), tf = wa.makeEnum("aiserver.v1.StreamCppRequest.ControlToken", [{ no: 0, name: "CONTROL_TOKEN_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CONTROL_TOKEN_QUIET", localName: "QUIET" }, { no: 2, name: "CONTROL_TOKEN_LOUD", localName: "LOUD" }, { no: 3, name: "CONTROL_TOKEN_OP", localName: "OP" }]), sf = wa.makeMessageType("aiserver.v1.StreamCppResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "suggestion_start_line", kind: "scalar", T: 5, opt: true }, { no: 3, name: "suggestion_confidence", kind: "scalar", T: 5, opt: true }, { no: 4, name: "done_stream", kind: "scalar", T: 8, opt: true }, { no: 5, name: "debug_model_output", kind: "scalar", T: 9, opt: true }, { no: 6, name: "debug_model_input", kind: "scalar", T: 9, opt: true }, { no: 7, name: "debug_stream_time", kind: "scalar", T: 9, opt: true }, { no: 8, name: "debug_total_time", kind: "scalar", T: 9, opt: true }, { no: 9, name: "debug_ttft_time", kind: "scalar", T: 9, opt: true }, { no: 10, name: "debug_server_timing", kind: "scalar", T: 9, opt: true }, { no: 11, name: "range_to_replace", kind: "message", T: Bo, opt: true }, { no: 12, name: "cursor_prediction_target", kind: "message", T: of, opt: true }, { no: 13, name: "done_edit", kind: "scalar", T: 8, opt: true }, { no: 14, name: "model_info", kind: "message", T: rf, opt: true }, { no: 15, name: "begin_edit", kind: "scalar", T: 8, opt: true }, { no: 16, name: "should_remove_leading_eol", kind: "scalar", T: 8, opt: true }, { no: 17, name: "binding_id", kind: "scalar", T: 9, opt: true }]), of = wa.makeMessageType("aiserver.v1.StreamCppResponse.CursorPredictionTarget", () => [{ no: 1, name: "relative_path", kind: "scalar", T: 9 }, { no: 2, name: "line_number_one_indexed", kind: "scalar", T: 5 }, { no: 3, name: "expected_content", kind: "scalar", T: 9 }, { no: 4, name: "should_retrigger_cpp", kind: "scalar", T: 8 }], { localName: "StreamCppResponse_CursorPredictionTarget" }), rf = wa.makeMessageType("aiserver.v1.StreamCppResponse.ModelInfo", () => [{ no: 1, name: "is_fused_cursor_prediction_model", kind: "scalar", T: 8 }, { no: 2, name: "is_multidiff_model", kind: "scalar", T: 8 }], { localName: "StreamCppResponse_ModelInfo" }), Af = wa.makeMessageType("aiserver.v1.CppConfigRequest", () => [{ no: 1, name: "is_nightly", kind: "scalar", T: 8, opt: true }, { no: 2, name: "model", kind: "scalar", T: 9 }, { no: 3, name: "supports_cpt", kind: "scalar", T: 8, opt: true }]), lf = wa.makeMessageType("aiserver.v1.CppConfigResponse", () => [{ no: 1, name: "above_radius", kind: "scalar", T: 5, opt: true }, { no: 2, name: "below_radius", kind: "scalar", T: 5, opt: true }, { no: 4, name: "merge_behavior", kind: "message", T: df, opt: true }, { no: 5, name: "is_on", kind: "scalar", T: 8, opt: true }, { no: 6, name: "is_ghost_text", kind: "scalar", T: 8, opt: true }, { no: 7, name: "should_let_user_enable_cpp_even_if_not_pro", kind: "scalar", T: 8, opt: true }, { no: 8, name: "heuristics", kind: "enum", T: wa.getEnumType(cf), repeated: true }, { no: 9, name: "exclude_recently_viewed_files_patterns", kind: "scalar", T: 9, repeated: true }, { no: 10, name: "enable_rvf_tracking", kind: "scalar", T: 8 }, { no: 11, name: "global_debounce_duration_millis", kind: "scalar", T: 5 }, { no: 12, name: "client_debounce_duration_millis", kind: "scalar", T: 5 }, { no: 13, name: "cpp_url", kind: "scalar", T: 9 }, { no: 14, name: "use_whitespace_diff_history", kind: "scalar", T: 8 }, { no: 15, name: "import_prediction_config", kind: "message", T: mf }, { no: 16, name: "enable_filesync_debounce_skipping", kind: "scalar", T: 8 }, { no: 17, name: "check_filesync_hash_percent", kind: "scalar", T: 2 }, { no: 18, name: "geo_cpp_backend_url", kind: "scalar", T: 9 }, { no: 19, name: "recently_rejected_edit_thresholds", kind: "message", T: gf, opt: true }, { no: 20, name: "is_fused_cursor_prediction_model", kind: "scalar", T: 8 }, { no: 21, name: "include_unchanged_lines", kind: "scalar", T: 8 }, { no: 22, name: "should_fetch_rvf_text", kind: "scalar", T: 8 }, { no: 23, name: "max_number_of_cleared_suggestions_since_last_accept", kind: "scalar", T: 5, opt: true }, { no: 24, name: "suggestion_hint_config", kind: "message", T: uf, opt: true }, { no: 25, name: "allows_tab_chunks", kind: "scalar", T: 8 }, { no: 26, name: "tab_context_refresh_debounce_ms", kind: "scalar", T: 5, opt: true }, { no: 27, name: "tab_context_refresh_editor_change_debounce_ms", kind: "scalar", T: 5, opt: true }]), cf = wa.makeEnum("aiserver.v1.CppConfigResponse.Heuristic", [{ no: 0, name: "HEURISTIC_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "HEURISTIC_LOTS_OF_ADDED_TEXT", localName: "LOTS_OF_ADDED_TEXT" }, { no: 2, name: "HEURISTIC_DUPLICATING_LINE_AFTER_SUGGESTION", localName: "DUPLICATING_LINE_AFTER_SUGGESTION" }, { no: 3, name: "HEURISTIC_DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION", localName: "DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION" }, { no: 4, name: "HEURISTIC_REVERTING_USER_CHANGE", localName: "REVERTING_USER_CHANGE" }, { no: 5, name: "HEURISTIC_OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED", localName: "OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED" }, { no: 6, name: "HEURISTIC_SUGGESTING_RECENTLY_REJECTED_EDIT", localName: "SUGGESTING_RECENTLY_REJECTED_EDIT" }]), mf = wa.makeMessageType("aiserver.v1.CppConfigResponse.ImportPredictionConfig", () => [{ no: 1, name: "is_disabled_by_backend", kind: "scalar", T: 8 }, { no: 2, name: "should_turn_on_automatically", kind: "scalar", T: 8 }, { no: 3, name: "python_enabled", kind: "scalar", T: 8 }], { localName: "CppConfigResponse_ImportPredictionConfig" }), df = wa.makeMessageType("aiserver.v1.CppConfigResponse.MergeBehavior", () => [{ no: 1, name: "type", kind: "scalar", T: 9 }, { no: 2, name: "limit", kind: "scalar", T: 5, opt: true }, { no: 3, name: "radius", kind: "scalar", T: 5, opt: true }], { localName: "CppConfigResponse_MergeBehavior" }), gf = wa.makeMessageType("aiserver.v1.CppConfigResponse.RecentlyRejectedEditThresholds", () => [{ no: 1, name: "hard_reject_threshold", kind: "scalar", T: 5 }, { no: 2, name: "soft_reject_threshold", kind: "scalar", T: 5 }], { localName: "CppConfigResponse_RecentlyRejectedEditThresholds" }), uf = wa.makeMessageType("aiserver.v1.CppConfigResponse.SuggestionHintConfig", () => [{ no: 1, name: "important_lsp_extensions", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "enabled_for_path_extensions", kind: "scalar", T: 9, repeated: true }], { localName: "CppConfigResponse_SuggestionHintConfig" }), Ef = wa.makeMessageType("aiserver.v1.SuggestedEdit", () => [{ no: 1, name: "edit_range", kind: "message", T: ko }, { no: 2, name: "text", kind: "scalar", T: 9 }]), pf = wa.makeMessageType("aiserver.v1.GetCppEditClassificationRequest", () => [{ no: 1, name: "cpp_request", kind: "message", T: af }, { no: 25, name: "suggested_edits", kind: "message", T: Ef, repeated: true }, { no: 26, name: "marker_touches_green", kind: "scalar", T: 8 }, { no: 27, name: "current_file_contents_for_linter_errors", kind: "scalar", T: 9 }]), Tf = wa.makeMessageType("aiserver.v1.GetCppEditClassificationResponse", () => [{ no: 1, name: "scored_edits", kind: "message", T: If, repeated: true }, { no: 2, name: "noop_edit", kind: "message", T: If }, { no: 3, name: "should_noop", kind: "scalar", T: 8, opt: true }, { no: 4, name: "generation_edit", kind: "message", T: If }]), kf = wa.makeMessageType("aiserver.v1.GetCppEditClassificationResponse.LogProbs", () => [{ no: 1, name: "tokens", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "token_logprobs", kind: "scalar", T: 1, repeated: true }], { localName: "GetCppEditClassificationResponse_LogProbs" }), If = wa.makeMessageType("aiserver.v1.GetCppEditClassificationResponse.ScoredEdit", () => [{ no: 1, name: "edit", kind: "message", T: Ef }, { no: 2, name: "log_probs", kind: "message", T: kf }], { localName: "GetCppEditClassificationResponse_ScoredEdit" }), hf = wa.makeMessageType("aiserver.v1.AdditionalFile", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "is_open", kind: "scalar", T: 8 }, { no: 3, name: "visible_range_content", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "last_viewed_at", kind: "scalar", T: 1, opt: true }, { no: 5, name: "start_line_number_one_indexed", kind: "scalar", T: 5, repeated: true }, { no: 6, name: "visible_ranges", kind: "message", T: Bo, repeated: true }]), _f = wa.makeMessageType("aiserver.v1.CppFileDiffHistory", () => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }, { no: 2, name: "diff_history", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "diff_history_timestamps", kind: "scalar", T: 1, repeated: true }]), Cf = wa.makeMessageType("aiserver.v1.RefreshTabContextRequest", () => [{ no: 1, name: "current_file", kind: "message", T: Uo }, { no: 2, name: "model_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "linter_errors", kind: "message", T: Ho, opt: true }, { no: 4, name: "file_diff_histories", kind: "message", T: _f, repeated: true }, { no: 5, name: "additional_files", kind: "message", T: hf, repeated: true }, { no: 6, name: "client_time", kind: "scalar", T: 1, opt: true }, { no: 7, name: "time_since_request_start", kind: "scalar", T: 1 }, { no: 8, name: "time_at_request_send", kind: "scalar", T: 1 }, { no: 9, name: "is_debug", kind: "scalar", T: 8, opt: true }, { no: 10, name: "workspace_id", kind: "scalar", T: 9, opt: true }, { no: 11, name: "supports_cpt", kind: "scalar", T: 8, opt: true }, { no: 12, name: "supports_crlf_cpt", kind: "scalar", T: 8, opt: true }, { no: 13, name: "repository_info", kind: "message", T: OA }]), ff = wa.makeMessageType("aiserver.v1.RefreshTabContextResponse", () => [{ no: 1, name: "code_results", kind: "message", T: MA, repeated: true }]), Bf = wa.makeMessageType("aiserver.v1.CppContextItem", () => [{ no: 1, name: "contents", kind: "scalar", T: 9 }, { no: 2, name: "symbol", kind: "scalar", T: 9, opt: true }, { no: 3, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 4, name: "score", kind: "scalar", T: 2 }]), Qf = wa.makeMessageType("aiserver.v1.CppParameterHint", () => [{ no: 1, name: "label", kind: "scalar", T: 9 }, { no: 2, name: "documentation", kind: "scalar", T: 9, opt: true }]), yf = wa.makeMessageType("aiserver.v1.IRange", () => [{ no: 1, name: "start_line_number", kind: "scalar", T: 5 }, { no: 2, name: "start_column", kind: "scalar", T: 5 }, { no: 3, name: "end_line_number", kind: "scalar", T: 5 }, { no: 4, name: "end_column", kind: "scalar", T: 5 }]), Rf = wa.makeMessageType("aiserver.v1.OneIndexedPosition", () => [{ no: 1, name: "line_number_one_indexed", kind: "scalar", T: 5 }, { no: 2, name: "column_one_indexed", kind: "scalar", T: 5 }]), Nf = wa.makeMessageType("aiserver.v1.CursorSelection", () => [{ no: 1, name: "selection_start_line_number", kind: "scalar", T: 5 }, { no: 2, name: "selection_start_column", kind: "scalar", T: 5 }, { no: 3, name: "position_line_number", kind: "scalar", T: 5 }, { no: 4, name: "position_column", kind: "scalar", T: 5 }]), vf = wa.makeMessageType("aiserver.v1.ModelChange", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: yf }, { no: 3, name: "final_model_hash", kind: "scalar", T: 9, opt: true }, { no: 4, name: "model_version_immediately_after_this_change", kind: "scalar", T: 5, opt: true }, { no: 5, name: "performance_now_timestamp", kind: "scalar", T: 1, opt: true }, { no: 7, name: "is_undoing", kind: "scalar", T: 8, opt: true }, { no: 8, name: "is_redoing", kind: "scalar", T: 8, opt: true }, { no: 9, name: "model_is_attached_to_editor", kind: "scalar", T: 8 }, { no: 10, name: "model_is_attached_to_the_active_editor", kind: "scalar", T: 8 }, { no: 11, name: "cursor_selections", kind: "message", T: Nf, repeated: true }, { no: 12, name: "model_version_at_metadata_retrieval_time", kind: "scalar", T: 5 }, { no: 13, name: "global_index", kind: "scalar", T: 3, opt: true }, { no: 14, name: "performance_now_flush_time", kind: "scalar", T: 1, opt: true }, { no: 15, name: "change_index", kind: "scalar", T: 5, opt: true }, { no: 16, name: "flush_index", kind: "scalar", T: 5, opt: true }, { no: 17, name: "global_index_v2", kind: "scalar", T: 5, opt: true }]), Sf = wa.makeMessageType("aiserver.v1.CurrentlyShownCppSuggestion", () => [{ no: 1, name: "suggestion_id", kind: "scalar", T: 5 }, { no: 2, name: "suggestion_text", kind: "scalar", T: 9 }, { no: 3, name: "model_version_when_the_change_is_first_indicated_to_the_user_but_not_shown_in_the_model", kind: "scalar", T: 5 }, { no: 4, name: "range_of_suggestion_in_current_model", kind: "message", T: yf, opt: true }, { no: 5, name: "original_text", kind: "scalar", T: 9 }, { no: 6, name: "binding_id", kind: "scalar", T: 9, opt: true }]), Df = wa.makeMessageType("aiserver.v1.CppAcceptEventNew", () => [{ no: 1, name: "cpp_suggestion", kind: "message", T: Sf }, { no: 7, name: "point_in_time_model", kind: "message", T: qf }]), wf = wa.makeMessageType("aiserver.v1.RecoverableCppData", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "suggestion_text", kind: "scalar", T: 9 }, { no: 3, name: "suggestion_range", kind: "message", T: yf }, { no: 4, name: "position", kind: "message", T: Rf }]), bf = wa.makeMessageType("aiserver.v1.CppSuggestEvent", () => [{ no: 1, name: "cpp_suggestion", kind: "message", T: Sf }, { no: 2, name: "point_in_time_model", kind: "message", T: qf }, { no: 3, name: "recoverable_cpp_data", kind: "message", T: wf }]), Mf = wa.makeMessageType("aiserver.v1.CppTriggerEvent", () => [{ no: 1, name: "generation_uuid", kind: "scalar", T: 9 }, { no: 2, name: "model_version", kind: "scalar", T: 5 }, { no: 3, name: "cursor_position", kind: "message", T: Rf }, { no: 4, name: "point_in_time_model", kind: "message", T: qf }, { no: 5, name: "source", kind: "enum", T: wa.getEnumType(XC) }]), Ff = wa.makeMessageType("aiserver.v1.FinishedCppGenerationEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: qf }, { no: 2, name: "recoverable_cpp_data", kind: "message", T: wf }]), Of = wa.makeMessageType("aiserver.v1.CppRejectEventNew", () => [{ no: 1, name: "cpp_suggestion", kind: "message", T: Sf }, { no: 7, name: "point_in_time_model", kind: "message", T: qf }]), Uf = wa.makeMessageType("aiserver.v1.Edit", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: yf }]), Lf = wa.makeMessageType("aiserver.v1.CppPartialAcceptEvent", () => [{ no: 1, name: "cpp_suggestion", kind: "message", T: Sf }, { no: 2, name: "edit", kind: "message", T: Uf }, { no: 3, name: "point_in_time_model", kind: "message", T: qf }]), Pf = wa.makeMessageType("aiserver.v1.CursorPrediction", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "prediction_id", kind: "scalar", T: 5 }, { no: 3, name: "line_number", kind: "scalar", T: 5 }, { no: 4, name: "source", kind: "enum", T: wa.getEnumType(xf) }, { no: 5, name: "binding_id", kind: "scalar", T: 9, opt: true }]), xf = wa.makeEnum("aiserver.v1.CursorPrediction.CursorPredictionSource", [{ no: 0, name: "CURSOR_PREDICTION_SOURCE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CURSOR_PREDICTION_SOURCE_ALWAYS_ON", localName: "ALWAYS_ON" }, { no: 2, name: "CURSOR_PREDICTION_SOURCE_ACCEPT", localName: "ACCEPT" }, { no: 3, name: "CURSOR_PREDICTION_SOURCE_UNDO", localName: "UNDO" }, { no: 4, name: "CURSOR_PREDICTION_SOURCE_EDITOR_CHANGE", localName: "EDITOR_CHANGE" }]), Gf = wa.makeMessageType("aiserver.v1.SuggestCursorPredictionEvent", () => [{ no: 1, name: "cursor_prediction", kind: "message", T: Pf }, { no: 2, name: "point_in_time_model", kind: "message", T: qf }]), Yf = wa.makeMessageType("aiserver.v1.AcceptCursorPredictionEvent", () => [{ no: 1, name: "cursor_prediction", kind: "message", T: Pf }, { no: 2, name: "point_in_time_model", kind: "message", T: qf }]), Jf = wa.makeMessageType("aiserver.v1.RejectCursorPredictionEvent", () => [{ no: 1, name: "cursor_prediction", kind: "message", T: Pf }, { no: 2, name: "point_in_time_model", kind: "message", T: qf }]), Vf = wa.makeMessageType("aiserver.v1.MaybeDefinedPointInTimeModel", () => [{ no: 1, name: "model_uuid", kind: "scalar", T: 9, opt: true }, { no: 2, name: "model_version", kind: "scalar", T: 5 }, { no: 3, name: "relative_path", kind: "scalar", T: 9 }, { no: 4, name: "model_id", kind: "scalar", T: 9 }]), qf = wa.makeMessageType("aiserver.v1.PointInTimeModel", () => [{ no: 1, name: "model_uuid", kind: "scalar", T: 9 }, { no: 2, name: "model_version", kind: "scalar", T: 5 }, { no: 3, name: "relative_path", kind: "scalar", T: 9 }, { no: 4, name: "model_id", kind: "scalar", T: 9 }]), Hf = wa.makeMessageType("aiserver.v1.CppManualTriggerEventNew", () => [{ no: 1, name: "line_number_one_indexed", kind: "scalar", T: 5 }, { no: 2, name: "column_number_one_indexed", kind: "scalar", T: 5 }, { no: 7, name: "point_in_time_model", kind: "message", T: qf }]), Wf = wa.makeMessageType("aiserver.v1.CppStoppedTrackingModelEvent", () => [{ no: 1, name: "model_uuid", kind: "scalar", T: 9 }, { no: 2, name: "relative_path", kind: "scalar", T: 9 }, { no: 3, name: "reason", kind: "enum", T: wa.getEnumType(Kf) }]), Kf = wa.makeEnum("aiserver.v1.CppStoppedTrackingModelEvent.StoppedTrackingModelReason", [{ no: 0, name: "STOPPED_TRACKING_MODEL_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "STOPPED_TRACKING_MODEL_REASON_FILE_TOO_BIG", localName: "FILE_TOO_BIG" }, { no: 2, name: "STOPPED_TRACKING_MODEL_REASON_FILE_DISPOSED", localName: "FILE_DISPOSED" }, { no: 3, name: "STOPPED_TRACKING_MODEL_REASON_CHANGE_TOO_BIG", localName: "CHANGE_TOO_BIG" }]), jf = wa.makeMessageType("aiserver.v1.CppLinterErrorEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: qf }, { no: 2, name: "added_errors", kind: "message", T: qo, repeated: true }, { no: 3, name: "removed_errors", kind: "message", T: qo, repeated: true }, { no: 4, name: "errors", kind: "message", T: qo, repeated: true }]), Xf = wa.makeMessageType("aiserver.v1.CppDebouncedCursorMovementEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: qf }, { no: 2, name: "cursor_position", kind: "message", T: Rf }]), Zf = wa.makeMessageType("aiserver.v1.CppEditorChangedEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: qf }, { no: 2, name: "cursor_position", kind: "message", T: Rf }, { no: 3, name: "visible_ranges", kind: "message", T: yf, repeated: true }, { no: 4, name: "editor_id", kind: "scalar", T: 9 }]), zf = wa.makeMessageType("aiserver.v1.CppCopyEvent", () => [{ no: 1, name: "clipboard_contents", kind: "scalar", T: 9 }]), $f = wa.makeMessageType("aiserver.v1.CppQuickActionCommand", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "id", kind: "scalar", T: 9 }, { no: 3, name: "arguments", kind: "scalar", T: 9, repeated: true }]), eB = wa.makeMessageType("aiserver.v1.CppQuickAction", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "edits", kind: "message", T: nB, repeated: true }, { no: 3, name: "is_preferred", kind: "scalar", T: 8, opt: true }, { no: 4, name: "command", kind: "message", T: $f }]), nB = wa.makeMessageType("aiserver.v1.CppQuickAction.Edit", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: yf }], { localName: "CppQuickAction_Edit" }), aB = wa.makeMessageType("aiserver.v1.CppChangeQuickActionEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: qf }, { no: 2, name: "added", kind: "message", T: eB, repeated: true }, { no: 3, name: "removed", kind: "message", T: eB, repeated: true }, { no: 4, name: "actions", kind: "message", T: eB, repeated: true }]), tB = wa.makeMessageType("aiserver.v1.CppQuickActionFireEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: qf }, { no: 2, name: "quick_action_command", kind: "message", T: $f, oneof: "action_identifier" }, { no: 3, name: "quick_action_event", kind: "message", T: eB, oneof: "action_identifier" }]), sB = wa.makeMessageType("aiserver.v1.CmdKEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: qf }, { no: 2, name: "request_id", kind: "scalar", T: 9 }, { no: 20, name: "prompt_bar_id", kind: "scalar", T: 9, opt: true }, { no: 3, name: "submit_prompt", kind: "message", T: oB, oneof: "event_type" }, { no: 4, name: "end_of_generation", kind: "message", T: rB, oneof: "event_type" }, { no: 5, name: "interrupt_generation", kind: "message", T: iB, oneof: "event_type" }, { no: 6, name: "accept_all", kind: "message", T: AB, oneof: "event_type" }, { no: 7, name: "reject_all", kind: "message", T: lB, oneof: "event_type" }, { no: 8, name: "reject_partial_diff", kind: "message", T: mB, oneof: "event_type" }, { no: 9, name: "accept_partial_diff", kind: "message", T: cB, oneof: "event_type" }, { no: 10, name: "after_reject", kind: "message", T: dB, oneof: "event_type" }]), oB = wa.makeMessageType("aiserver.v1.CmdKEvent.SubmitPrompt", () => [{ no: 1, name: "original_range", kind: "message", T: yf }, { no: 2, name: "original_text", kind: "scalar", T: 9 }, { no: 3, name: "prompt", kind: "scalar", T: 9 }], { localName: "CmdKEvent_SubmitPrompt" }), rB = wa.makeMessageType("aiserver.v1.CmdKEvent.EndOfGeneration", [], { localName: "CmdKEvent_EndOfGeneration" }), iB = wa.makeMessageType("aiserver.v1.CmdKEvent.InterruptGeneration", [], { localName: "CmdKEvent_InterruptGeneration" }), AB = wa.makeMessageType("aiserver.v1.CmdKEvent.AcceptDiffs", [], { localName: "CmdKEvent_AcceptDiffs" }), lB = wa.makeMessageType("aiserver.v1.CmdKEvent.RejectDiffs", () => [{ no: 1, name: "actor_request_id", kind: "scalar", T: 9, opt: true }, { no: 2, name: "silent", kind: "scalar", T: 8, opt: true }], { localName: "CmdKEvent_RejectDiffs" }), cB = wa.makeMessageType("aiserver.v1.CmdKEvent.AcceptPartialDiff", () => [{ no: 1, name: "green_range", kind: "message", T: yf }, { no: 2, name: "green_lines", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "red_lines", kind: "scalar", T: 9, repeated: true }], { localName: "CmdKEvent_AcceptPartialDiff" }), mB = wa.makeMessageType("aiserver.v1.CmdKEvent.RejectPartialDiff", () => [{ no: 1, name: "green_range", kind: "message", T: yf }, { no: 2, name: "green_lines", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "red_lines", kind: "scalar", T: 9, repeated: true }], { localName: "CmdKEvent_RejectPartialDiff" }), dB = wa.makeMessageType("aiserver.v1.CmdKEvent.AfterReject", [], { localName: "CmdKEvent_AfterReject" }), gB = wa.makeMessageType("aiserver.v1.ChatEvent", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "submit_prompt", kind: "message", T: uB, oneof: "event_type" }, { no: 3, name: "end_of_any_generation", kind: "message", T: EB, oneof: "event_type" }, { no: 4, name: "end_of_uninterrupted_generation", kind: "message", T: pB, oneof: "event_type" }]), uB = wa.makeMessageType("aiserver.v1.ChatEvent.SubmitPrompt", () => [{ no: 1, name: "prompt", kind: "scalar", T: 9 }], { localName: "ChatEvent_SubmitPrompt" }), EB = wa.makeMessageType("aiserver.v1.ChatEvent.EndOfAnyGeneration", [], { localName: "ChatEvent_EndOfAnyGeneration" }), pB = wa.makeMessageType("aiserver.v1.ChatEvent.EndOfUninterruptedGeneration", [], { localName: "ChatEvent_EndOfUninterruptedGeneration" }), TB = wa.makeMessageType("aiserver.v1.BugBotLinterEvent", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "point_in_time_model", kind: "message", T: qf }, { no: 3, name: "lint_generated", kind: "message", T: IB, oneof: "event_type" }, { no: 4, name: "lint_dismissed", kind: "message", T: hB, oneof: "event_type" }, { no: 5, name: "user_feedback", kind: "message", T: _B, oneof: "event_type" }, { no: 6, name: "viewed_report", kind: "message", T: CB, oneof: "event_type" }, { no: 7, name: "unviewed_report", kind: "message", T: fB, oneof: "event_type" }, { no: 8, name: "started", kind: "message", T: kB, oneof: "event_type" }, { no: 9, name: "not_shown_because_heuristic", kind: "message", T: BB, oneof: "event_type" }]), kB = wa.makeMessageType("aiserver.v1.BugBotLinterEvent.Started", [], { localName: "BugBotLinterEvent_Started" }), IB = wa.makeMessageType("aiserver.v1.BugBotLinterEvent.LintGenerated", () => [{ no: 1, name: "bug_report", kind: "message", T: vh }], { localName: "BugBotLinterEvent_LintGenerated" }), hB = wa.makeMessageType("aiserver.v1.BugBotLinterEvent.LintDismissed", () => [{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 }], { localName: "BugBotLinterEvent_LintDismissed" }), _B = wa.makeMessageType("aiserver.v1.BugBotLinterEvent.UserFeedback", () => [{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 }, { no: 2, name: "feedback", kind: "scalar", T: 9 }], { localName: "BugBotLinterEvent_UserFeedback" }), CB = wa.makeMessageType("aiserver.v1.BugBotLinterEvent.ViewedReport", () => [{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 }], { localName: "BugBotLinterEvent_ViewedReport" }), fB = wa.makeMessageType("aiserver.v1.BugBotLinterEvent.UnviewedReport", () => [{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 }], { localName: "BugBotLinterEvent_UnviewedReport" }), BB = wa.makeMessageType("aiserver.v1.BugBotLinterEvent.NotShownBecauseHeuristic", () => [{ no: 1, name: "heuristic", kind: "enum", T: wa.getEnumType(QB) }], { localName: "BugBotLinterEvent_NotShownBecauseHeuristic" }), QB = wa.makeEnum("aiserver.v1.BugBotLinterEvent.NotShownBecauseHeuristic.Heuristic", [{ no: 0, name: "HEURISTIC_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "HEURISTIC_LINT_OVERLAP", localName: "LINT_OVERLAP" }, { no: 2, name: "HEURISTIC_LINES_MISMATCH", localName: "LINES_MISMATCH" }]), yB = wa.makeMessageType("aiserver.v1.BugBotEvent", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "started", kind: "message", T: NB, oneof: "event_type" }, { no: 3, name: "reports_generated", kind: "message", T: vB, oneof: "event_type" }, { no: 4, name: "pressed_fix_in_composer", kind: "message", T: SB, oneof: "event_type" }, { no: 5, name: "pressed_open_in_editor", kind: "message", T: wB, oneof: "event_type" }, { no: 6, name: "viewed_report", kind: "message", T: bB, oneof: "event_type" }, { no: 7, name: "user_feedback", kind: "message", T: FB, oneof: "event_type" }, { no: 8, name: "pressed_add_to_chat", kind: "message", T: DB, oneof: "event_type" }, { no: 9, name: "background_interval_started", kind: "message", T: OB, oneof: "event_type" }, { no: 10, name: "background_interval_ended", kind: "message", T: UB, oneof: "event_type" }, { no: 11, name: "background_interval_interrupted", kind: "message", T: LB, oneof: "event_type" }, { no: 12, name: "background_interval_errored", kind: "message", T: PB, oneof: "event_type" }]), RB = wa.makeEnum("aiserver.v1.BugBotEvent.BackgroundIntervalInterruptedReason", [{ no: 0, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DISABLED", localName: "DISABLED" }, { no: 2, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_TOO_RECENT", localName: "TOO_RECENT" }, { no: 3, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_UNVIEWED_BUG_REPORTS", localName: "UNVIEWED_BUG_REPORTS" }, { no: 4, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NOT_IN_GIT_REPO", localName: "NOT_IN_GIT_REPO" }, { no: 5, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH", localName: "DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH" }, { no: 6, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NO_GIT_USER", localName: "NO_GIT_USER" }, { no: 7, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NO_LAST_COMMIT", localName: "NO_LAST_COMMIT" }, { no: 8, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_LAST_COMMIT_NOT_MADE_BY_USER", localName: "LAST_COMMIT_NOT_MADE_BY_USER" }, { no: 9, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_LAST_COMMIT_TOO_OLD", localName: "LAST_COMMIT_TOO_OLD" }, { no: 10, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DIFF_TOO_LONG", localName: "DIFF_TOO_LONG" }, { no: 11, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DIFF_TOO_SHORT", localName: "DIFF_TOO_SHORT" }, { no: 12, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_TELEMETRY_UNHEALTHY", localName: "TELEMETRY_UNHEALTHY" }]), NB = wa.makeMessageType("aiserver.v1.BugBotEvent.Started", [], { localName: "BugBotEvent_Started" }), vB = wa.makeMessageType("aiserver.v1.BugBotEvent.ReportsGenerated", () => [{ no: 1, name: "bug_reports", kind: "message", T: Sh }], { localName: "BugBotEvent_ReportsGenerated" }), SB = wa.makeMessageType("aiserver.v1.BugBotEvent.PressedFixInComposer", () => [{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 }], { localName: "BugBotEvent_PressedFixInComposer" }), DB = wa.makeMessageType("aiserver.v1.BugBotEvent.PressedAddToChat", () => [{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 }], { localName: "BugBotEvent_PressedAddToChat" }), wB = wa.makeMessageType("aiserver.v1.BugBotEvent.PressedOpenInEditor", () => [{ no: 1, name: "bug_location", kind: "message", T: Nh }, { no: 2, name: "bug_report_id", kind: "scalar", T: 9 }], { localName: "BugBotEvent_PressedOpenInEditor" }), bB = wa.makeMessageType("aiserver.v1.BugBotEvent.ViewedReport", () => [{ no: 1, name: "seconds_viewed", kind: "scalar", T: 5 }, { no: 2, name: "report_views", kind: "message", T: MB, repeated: true }], { localName: "BugBotEvent_ViewedReport" }), MB = wa.makeMessageType("aiserver.v1.BugBotEvent.ViewedReport.ReportView", () => [{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 }, { no: 2, name: "view_percentage", kind: "scalar", T: 1 }, { no: 3, name: "text_percentage", kind: "scalar", T: 1 }], { localName: "BugBotEvent_ViewedReport_ReportView" }), FB = wa.makeMessageType("aiserver.v1.BugBotEvent.UserFeedback", () => [{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 }, { no: 2, name: "feedback", kind: "scalar", T: 9 }], { localName: "BugBotEvent_UserFeedback" }), OB = wa.makeMessageType("aiserver.v1.BugBotEvent.BackgroundIntervalStarted", [], { localName: "BugBotEvent_BackgroundIntervalStarted" }), UB = wa.makeMessageType("aiserver.v1.BugBotEvent.BackgroundIntervalEnded", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }], { localName: "BugBotEvent_BackgroundIntervalEnded" }), LB = wa.makeMessageType("aiserver.v1.BugBotEvent.BackgroundIntervalInterrupted", () => [{ no: 1, name: "reason", kind: "enum", T: wa.getEnumType(RB) }], { localName: "BugBotEvent_BackgroundIntervalInterrupted" }), PB = wa.makeMessageType("aiserver.v1.BugBotEvent.BackgroundIntervalErrored", () => [{ no: 1, name: "error_message", kind: "scalar", T: 9 }], { localName: "BugBotEvent_BackgroundIntervalErrored" }), xB = wa.makeMessageType("aiserver.v1.AiRequestEvent", () => [{ no: 1, name: "request_type", kind: "enum", T: wa.getEnumType(GB) }, { no: 2, name: "request_id", kind: "scalar", T: 9 }, { no: 3, name: "source", kind: "enum", T: wa.getEnumType(YB) }]), GB = wa.makeEnum("aiserver.v1.AiRequestEvent.RequestType", [{ no: 0, name: "REQUEST_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "REQUEST_TYPE_START", localName: "START" }, { no: 2, name: "REQUEST_TYPE_END", localName: "END" }]), YB = wa.makeEnum("aiserver.v1.AiRequestEvent.Source", [{ no: 0, name: "SOURCE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SOURCE_CHAT", localName: "CHAT" }, { no: 2, name: "SOURCE_CMDK", localName: "CMDK" }, { no: 3, name: "SOURCE_APPLY", localName: "APPLY" }, { no: 4, name: "SOURCE_COMPOSER", localName: "COMPOSER" }, { no: 5, name: "SOURCE_TASK", localName: "TASK" }, { no: 6, name: "SOURCE_CODE_INTERPRETER", localName: "CODE_INTERPRETER" }, { no: 7, name: "SOURCE_INTERPRETER_EXECUTION", localName: "INTERPRETER_EXECUTION" }, { no: 8, name: "SOURCE_BUGBOT", localName: "BUGBOT" }]), JB = wa.makeMessageType("aiserver.v1.ModelOpenedEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: qf }, { no: 2, name: "maybe_defined_point_in_time_model", kind: "message", T: Vf }]), VB = wa.makeMessageType("aiserver.v1.BackgroundFilesEvent", () => [{ no: 2, name: "files", kind: "message", T: qB, repeated: true }]), qB = wa.makeMessageType("aiserver.v1.BackgroundFilesEvent.BackgroundFile", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "contents", kind: "scalar", T: 9 }, { no: 3, name: "hash", kind: "scalar", T: 9 }, { no: 4, name: "full_path", kind: "scalar", T: 9 }], { localName: "BackgroundFilesEvent_BackgroundFile" }), HB = wa.makeMessageType("aiserver.v1.ScrollEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: qf }, { no: 2, name: "visible_ranges", kind: "message", T: yf, repeated: true }, { no: 3, name: "editor_id", kind: "scalar", T: 9 }]), WB = wa.makeMessageType("aiserver.v1.EditorCloseEvent", () => [{ no: 1, name: "editor_id", kind: "scalar", T: 9 }]), KB = wa.makeMessageType("aiserver.v1.TabCloseEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: Vf }]), jB = wa.makeMessageType("aiserver.v1.ModelAddedEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: Vf }, { no: 2, name: "full_uri", kind: "scalar", T: 9 }, { no: 3, name: "model_id", kind: "scalar", T: 9 }, { no: 4, name: "uri_scheme", kind: "scalar", T: 9 }, { no: 5, name: "is_too_large_for_syncing", kind: "scalar", T: 8 }, { no: 6, name: "is_too_large_for_tokenization", kind: "scalar", T: 8 }, { no: 7, name: "is_too_large_for_heap_operation", kind: "scalar", T: 8 }]), XB = wa.makeMessageType("aiserver.v1.AnythingQuickAccessItem", () => [{ no: 1, name: "resource", kind: "message", T: ZB, oneof: "item" }, { no: 2, name: "separator", kind: "scalar", T: 9, oneof: "item" }, { no: 3, name: "section", kind: "scalar", T: 9, oneof: "item" }]), ZB = wa.makeMessageType("aiserver.v1.AnythingQuickAccessItem.Resource", () => [{ no: 1, name: "model", kind: "message", T: qf, opt: true }, { no: 2, name: "range", kind: "message", T: yf, opt: true }, { no: 3, name: "uri", kind: "scalar", T: 9, opt: true }], { localName: "AnythingQuickAccessItem_Resource" }), zB = wa.makeMessageType("aiserver.v1.AnythingQuickAccessSelectionEvent", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }, { no: 2, name: "items", kind: "message", T: XB, repeated: true }, { no: 3, name: "selected_indices", kind: "scalar", T: 5, repeated: true }]), $B = wa.makeMessageType("aiserver.v1.LspSuggestionEvent", () => [{ no: 1, name: "suggestions", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "request_id", kind: "scalar", T: 9, opt: true }, { no: 3, name: "editor_id", kind: "scalar", T: 9, opt: true }, { no: 4, name: "point_in_time_model", kind: "message", T: qf }]), eQ = wa.makeMessageType("aiserver.v1.CppSessionEvent", () => [{ no: 2, name: "accept_event", kind: "message", T: Df, oneof: "event" }, { no: 3, name: "reject_event", kind: "message", T: Of, oneof: "event" }, { no: 4, name: "manual_trigger_event", kind: "message", T: Hf, oneof: "event" }, { no: 6, name: "stopped_tracking_model_event", kind: "message", T: Wf, oneof: "event" }, { no: 7, name: "suggest_event", kind: "message", T: bf, oneof: "event" }, { no: 8, name: "linter_error_event", kind: "message", T: jf, oneof: "event" }, { no: 9, name: "debounced_cursor_movement_event", kind: "message", T: Xf, oneof: "event" }, { no: 10, name: "editor_changed_event", kind: "message", T: Zf, oneof: "event" }, { no: 11, name: "copy_event", kind: "message", T: zf, oneof: "event" }, { no: 13, name: "quick_action_event", kind: "message", T: aB, oneof: "event" }, { no: 14, name: "quick_action_fire_event", kind: "message", T: tB, oneof: "event" }, { no: 15, name: "model_opened_event", kind: "message", T: JB, oneof: "event" }, { no: 17, name: "cmd_k_event", kind: "message", T: sB, oneof: "event" }, { no: 18, name: "chat_event", kind: "message", T: gB, oneof: "event" }, { no: 19, name: "ai_event", kind: "message", T: xB, oneof: "event" }, { no: 21, name: "scroll_event", kind: "message", T: HB, oneof: "event" }, { no: 22, name: "editor_close_event", kind: "message", T: WB, oneof: "event" }, { no: 23, name: "tab_close_event", kind: "message", T: KB, oneof: "event" }, { no: 33, name: "model_added_event", kind: "message", T: jB, oneof: "event" }, { no: 26, name: "partial_accept_event", kind: "message", T: Lf, oneof: "event" }, { no: 27, name: "accept_cursor_prediction_event", kind: "message", T: Yf, oneof: "event" }, { no: 28, name: "reject_cursor_prediction_event", kind: "message", T: Jf, oneof: "event" }, { no: 29, name: "suggest_cursor_prediction_event", kind: "message", T: Gf, oneof: "event" }, { no: 30, name: "cpp_trigger_event", kind: "message", T: Mf, oneof: "event" }, { no: 31, name: "finished_cpp_generation_event", kind: "message", T: Ff, oneof: "event" }, { no: 32, name: "bug_bot_event", kind: "message", T: yB, oneof: "event" }, { no: 34, name: "bug_bot_linter_event", kind: "message", T: TB, oneof: "event" }, { no: 35, name: "anything_quick_access_selection_event", kind: "message", T: zB, oneof: "event" }, { no: 36, name: "lsp_suggestion_event", kind: "message", T: $B, oneof: "event" }, { no: 37, name: "ntp_event", kind: "message", T: NQ, oneof: "event" }, { no: 38, name: "repo_event", kind: "message", T: vQ, oneof: "event" }, { no: 39, name: "git_event", kind: "message", T: DQ, oneof: "event" }, { no: 40, name: "tool_call_event", kind: "message", T: LQ, oneof: "event" }, { no: 46, name: "before_ai_edit_event", kind: "message", T: nQ, oneof: "event" }, { no: 47, name: "search_event", kind: "message", T: GQ, oneof: "event" }, { no: 48, name: "terminal_event", kind: "message", T: TQ, oneof: "event" }, { no: 49, name: "worktree_event", kind: "message", T: bQ, oneof: "event" }, { no: 50, name: "review_changes_opened_event", kind: "message", T: UQ, oneof: "event" }, { no: 51, name: "browser_event", kind: "message", T: CQ, oneof: "event" }, { no: 16, name: "background_files_event", kind: "message", T: VB, oneof: "event" }, { no: 5, name: "performance_now_timestamp", kind: "scalar", T: 1 }, { no: 25, name: "performance_time_origin", kind: "scalar", T: 1, opt: true }, { no: 41, name: "global_index", kind: "scalar", T: 3, opt: true }, { no: 42, name: "performance_now_flush_time", kind: "scalar", T: 1, opt: true }, { no: 43, name: "event_index", kind: "scalar", T: 5, opt: true }, { no: 44, name: "flush_index", kind: "scalar", T: 5, opt: true }, { no: 45, name: "global_index_v2", kind: "scalar", T: 5, opt: true }]), nQ = wa.makeMessageType("aiserver.v1.BeforeAiEditEvent", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: qf, oneof: "model" }, { no: 5, name: "relative_workspace_path", kind: "scalar", T: 9, oneof: "model" }, { no: 2, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 3, name: "request_id", kind: "scalar", T: 9, opt: true }, { no: 4, name: "tool_name", kind: "scalar", T: 9, opt: true }]), aQ = wa.makeMessageType("aiserver.v1.CppAppendRequest", () => [{ no: 1, name: "changes", kind: "scalar", T: 12 }]), tQ = wa.makeMessageType("aiserver.v1.CppAppendResponse", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }]), sQ = wa.makeMessageType("aiserver.v1.EditHistoryAppendChangesRequest", () => [{ no: 1, name: "session_id", kind: "scalar", T: 9 }, { no: 2, name: "model_uuid", kind: "scalar", T: 9 }, { no: 3, name: "starting_model_value", kind: "scalar", T: 9, opt: true }, { no: 10, name: "starting_model_version", kind: "scalar", T: 5, opt: true }, { no: 5, name: "relative_path", kind: "scalar", T: 9 }, { no: 14, name: "uri", kind: "scalar", T: 9 }, { no: 6, name: "client_version", kind: "scalar", T: 9 }, { no: 8, name: "client_commit", kind: "scalar", T: 9, opt: true }, { no: 4, name: "changes", kind: "message", T: vf, repeated: true }, { no: 9, name: "session_events", kind: "message", T: eQ, repeated: true }, { no: 11, name: "model_changes_may_be_out_of_order", kind: "scalar", T: 8 }, { no: 12, name: "privacy_mode_status", kind: "enum", T: wa.getEnumType(oQ) }, { no: 7, name: "events", kind: "message", T: dQ, repeated: true }, { no: 13, name: "time_origin", kind: "scalar", T: 2 }]), oQ = wa.makeEnum("aiserver.v1.EditHistoryAppendChangesRequest.PrivacyModeStatus", [{ no: 0, name: "PRIVACY_MODE_STATUS_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "PRIVACY_MODE_STATUS_PRIVACY_ENABLED", localName: "PRIVACY_ENABLED" }, { no: 2, name: "PRIVACY_MODE_STATUS_IMPLICIT_NO_PRIVACY", localName: "IMPLICIT_NO_PRIVACY" }, { no: 3, name: "PRIVACY_MODE_STATUS_EXPLICIT_NO_PRIVACY", localName: "EXPLICIT_NO_PRIVACY" }]), rQ = wa.makeMessageType("aiserver.v1.EditHistoryAppendChangesResponse", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }]), iQ = wa.makeMessageType("aiserver.v1.CppEditHistoryStatusRequest", []), AQ = wa.makeMessageType("aiserver.v1.CppEditHistoryStatusResponse", () => [{ no: 1, name: "on", kind: "scalar", T: 8 }, { no: 2, name: "only_if_explicit", kind: "scalar", T: 8 }]), lQ = wa.makeMessageType("aiserver.v1.BlockDiffPatch", () => [{ no: 1, name: "start_model_window", kind: "message", T: mQ }, { no: 3, name: "changes", kind: "message", T: cQ, repeated: true }, { no: 4, name: "relative_path", kind: "scalar", T: 9 }, { no: 7, name: "model_uuid", kind: "scalar", T: 9 }, { no: 5, name: "start_from_change_index", kind: "scalar", T: 5 }]), cQ = wa.makeMessageType("aiserver.v1.BlockDiffPatch.Change", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: yf }], { localName: "BlockDiffPatch_Change" }), mQ = wa.makeMessageType("aiserver.v1.BlockDiffPatch.ModelWindow", () => [{ no: 1, name: "lines", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "start_line_number", kind: "scalar", T: 5 }, { no: 3, name: "end_line_number", kind: "scalar", T: 5 }], { localName: "BlockDiffPatch_ModelWindow" }), dQ = wa.makeMessageType("aiserver.v1.CppHistoryAppendEvent", () => [{ no: 1, name: "model_change", kind: "message", T: vf, oneof: "event" }, { no: 2, name: "accept_event", kind: "message", T: uQ, oneof: "event" }, { no: 3, name: "reject_event", kind: "message", T: EQ, oneof: "event" }, { no: 4, name: "manual_trigger_event", kind: "message", T: gQ, oneof: "event" }, { no: 10, name: "final_model_hash", kind: "scalar", T: 9, opt: true }]), gQ = wa.makeMessageType("aiserver.v1.CppManualTriggerEvent", () => [{ no: 2, name: "position", kind: "message", T: ro }]), uQ = wa.makeMessageType("aiserver.v1.CppAcceptEvent", () => [{ no: 1, name: "cpp_suggestion", kind: "message", T: pQ }]), EQ = wa.makeMessageType("aiserver.v1.CppRejectEvent", () => [{ no: 1, name: "cpp_suggestion", kind: "message", T: pQ }]), pQ = wa.makeMessageType("aiserver.v1.CppSuggestion", () => [{ no: 1, name: "suggestion_text", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: yf }, { no: 5, name: "seen", kind: "scalar", T: 8 }, { no: 6, name: "editor_selection_before_peek", kind: "message", T: io }, { no: 7, name: "binding_id", kind: "scalar", T: 9, opt: true }]), TQ = wa.makeMessageType("aiserver.v1.TerminalEvent", () => [{ no: 1, name: "uri", kind: "scalar", T: 9 }, { no: 2, name: "create", kind: "message", T: kQ, oneof: "event" }, { no: 3, name: "exit", kind: "message", T: IQ, oneof: "event" }, { no: 4, name: "command_start", kind: "message", T: hQ, oneof: "event" }, { no: 5, name: "command_finish", kind: "message", T: _Q, oneof: "event" }]), kQ = wa.makeMessageType("aiserver.v1.TerminalEvent.Create", () => [{ no: 1, name: "is_remote", kind: "scalar", T: 8 }], { localName: "TerminalEvent_Create" }), IQ = wa.makeMessageType("aiserver.v1.TerminalEvent.Exit", () => [{ no: 1, name: "exit_code", kind: "scalar", T: 5, opt: true }], { localName: "TerminalEvent_Exit" }), hQ = wa.makeMessageType("aiserver.v1.TerminalEvent.CommandStart", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: qf }, { no: 2, name: "cwd", kind: "scalar", T: 9, opt: true }], { localName: "TerminalEvent_CommandStart" }), _Q = wa.makeMessageType("aiserver.v1.TerminalEvent.CommandFinish", () => [{ no: 1, name: "point_in_time_model", kind: "message", T: qf }, { no: 2, name: "exit_code", kind: "scalar", T: 5, opt: true }], { localName: "TerminalEvent_CommandFinish" }), CQ = wa.makeMessageType("aiserver.v1.BrowserEvent", () => [{ no: 1, name: "view_id", kind: "scalar", T: 9 }, { no: 2, name: "tab_created", kind: "message", T: fQ, oneof: "event" }, { no: 3, name: "tab_closed", kind: "message", T: BQ, oneof: "event" }, { no: 4, name: "navigation", kind: "message", T: QQ, oneof: "event" }, { no: 5, name: "tool_action", kind: "message", T: yQ, oneof: "event" }]), fQ = wa.makeMessageType("aiserver.v1.BrowserEvent.TabCreated", [], { localName: "BrowserEvent_TabCreated" }), BQ = wa.makeMessageType("aiserver.v1.BrowserEvent.TabClosed", [], { localName: "BrowserEvent_TabClosed" }), QQ = wa.makeMessageType("aiserver.v1.BrowserEvent.Navigation", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9, opt: true }], { localName: "BrowserEvent_Navigation" }), yQ = wa.makeMessageType("aiserver.v1.BrowserEvent.ToolAction", () => [{ no: 1, name: "tool_name", kind: "scalar", T: 9 }, { no: 2, name: "args_json", kind: "scalar", T: 9 }, { no: 3, name: "success", kind: "scalar", T: 8, opt: true }, { no: 4, name: "post_snapshot_yaml", kind: "scalar", T: 9, opt: true }, { no: 5, name: "post_url", kind: "scalar", T: 9, opt: true }, { no: 6, name: "post_title", kind: "scalar", T: 9, opt: true }, { no: 7, name: "source", kind: "enum", T: wa.getEnumType(RQ) }], { localName: "BrowserEvent_ToolAction" }), RQ = wa.makeEnum("aiserver.v1.BrowserEvent.ToolAction.Source", [{ no: 0, name: "SOURCE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SOURCE_MCP_TOOL", localName: "MCP_TOOL" }, { no: 2, name: "SOURCE_MANUAL_USER", localName: "MANUAL_USER" }]), NQ = wa.makeMessageType("aiserver.v1.NtpEvent", () => [{ no: 1, name: "originate_timestamp", kind: "scalar", T: 1 }, { no: 2, name: "receive_timestamp", kind: "scalar", T: 1 }, { no: 3, name: "transmit_timestamp", kind: "scalar", T: 1 }, { no: 4, name: "destination_timestamp", kind: "scalar", T: 1 }]), vQ = wa.makeMessageType("aiserver.v1.RepoEvent", () => [{ no: 1, name: "repo_owner", kind: "scalar", T: 9 }, { no: 2, name: "repo_name", kind: "scalar", T: 9 }, { no: 3, name: "event_type", kind: "enum", T: wa.getEnumType(SQ) }]), SQ = wa.makeEnum("aiserver.v1.RepoEvent.Type", [{ no: 0, name: "TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TYPE_SYNCED", localName: "SYNCED" }, { no: 2, name: "TYPE_LOADING", localName: "LOADING" }, { no: 3, name: "TYPE_INDEXING_SETUP", localName: "INDEXING_SETUP" }, { no: 4, name: "TYPE_INDEXING_INIT_FROM_SIMILAR_CODEBASE", localName: "INDEXING_INIT_FROM_SIMILAR_CODEBASE" }, { no: 5, name: "TYPE_PAUSED", localName: "PAUSED" }, { no: 6, name: "TYPE_INDEXING", localName: "INDEXING" }, { no: 7, name: "TYPE_ERROR", localName: "ERROR" }, { no: 8, name: "TYPE_NOT_AUTO_INDEXING", localName: "NOT_AUTO_INDEXING" }, { no: 9, name: "TYPE_NOT_INDEXED", localName: "NOT_INDEXED" }]), DQ = wa.makeMessageType("aiserver.v1.GitEvent", () => [{ no: 1, name: "operation_type", kind: "enum", T: wa.getEnumType(wQ) }, { no: 2, name: "repository_path", kind: "scalar", T: 9 }, { no: 3, name: "operation_success", kind: "scalar", T: 8 }, { no: 4, name: "branch_name", kind: "scalar", T: 9, opt: true }, { no: 5, name: "error_message", kind: "scalar", T: 9, opt: true }, { no: 6, name: "is_default_branch", kind: "scalar", T: 8, opt: true }, { no: 7, name: "default_branch_name", kind: "scalar", T: 9, opt: true }, { no: 8, name: "commit_hash", kind: "scalar", T: 9, opt: true }, { no: 9, name: "previous_commit_hash", kind: "scalar", T: 9, opt: true }, { no: 10, name: "remote_url", kind: "scalar", T: 9, opt: true }]), wQ = wa.makeEnum("aiserver.v1.GitEvent.OperationType", [{ no: 0, name: "OPERATION_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "OPERATION_TYPE_COMMIT", localName: "COMMIT" }, { no: 2, name: "OPERATION_TYPE_CHECKOUT", localName: "CHECKOUT" }, { no: 3, name: "OPERATION_TYPE_PULL", localName: "PULL" }, { no: 4, name: "OPERATION_TYPE_FETCH", localName: "FETCH" }, { no: 5, name: "OPERATION_TYPE_MERGE", localName: "MERGE" }, { no: 6, name: "OPERATION_TYPE_REBASE", localName: "REBASE" }, { no: 7, name: "OPERATION_TYPE_STASH", localName: "STASH" }, { no: 8, name: "OPERATION_TYPE_BRANCH", localName: "BRANCH" }, { no: 9, name: "OPERATION_TYPE_TAG", localName: "TAG" }]), bQ = wa.makeMessageType("aiserver.v1.WorktreeEvent", () => [{ no: 1, name: "event_type", kind: "enum", T: wa.getEnumType(MQ) }, { no: 2, name: "model_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "best_of_n_group_id", kind: "scalar", T: 9, opt: true }, { no: 4, name: "all_worktree_paths", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "applied_worktree_path", kind: "scalar", T: 9, opt: true }, { no: 6, name: "worktree_composer_mappings", kind: "message", T: FQ, repeated: true }, { no: 7, name: "background_agent_composer_mappings", kind: "message", T: OQ, repeated: true }, { no: 8, name: "applied_composer_id", kind: "scalar", T: 9, opt: true }, { no: 9, name: "viewed_composer_id", kind: "scalar", T: 9, opt: true }]), MQ = wa.makeEnum("aiserver.v1.WorktreeEvent.EventType", [{ no: 0, name: "EVENT_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "EVENT_TYPE_APPLY_TO_MAIN", localName: "APPLY_TO_MAIN" }, { no: 2, name: "EVENT_TYPE_UNDO_APPLY", localName: "UNDO_APPLY" }, { no: 3, name: "EVENT_TYPE_VIEW_SUBCOMPOSER", localName: "VIEW_SUBCOMPOSER" }]), FQ = wa.makeMessageType("aiserver.v1.WorktreeEvent.WorktreeComposerMapping", () => [{ no: 1, name: "worktree_path", kind: "scalar", T: 9 }, { no: 2, name: "composer_id", kind: "scalar", T: 9 }], { localName: "WorktreeEvent_WorktreeComposerMapping" }), OQ = wa.makeMessageType("aiserver.v1.WorktreeEvent.BackgroundAgentComposerMapping", () => [{ no: 1, name: "bc_id", kind: "scalar", T: 9 }, { no: 2, name: "composer_id", kind: "scalar", T: 9 }], { localName: "WorktreeEvent_BackgroundAgentComposerMapping" }), UQ = wa.makeMessageType("aiserver.v1.ReviewChangesOpenedEvent", () => [{ no: 1, name: "composer_id", kind: "scalar", T: 9 }, { no: 2, name: "best_of_n_group_id", kind: "scalar", T: 9, opt: true }]), LQ = wa.makeMessageType("aiserver.v1.ToolCallEvent", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "request_id", kind: "scalar", T: 9 }, { no: 3, name: "tool_name", kind: "scalar", T: 9 }]), PQ = wa.makeMessageType("aiserver.v1.SearchMatch", () => [{ no: 1, name: "line_number", kind: "scalar", T: 5 }, { no: 2, name: "column", kind: "scalar", T: 5 }, { no: 3, name: "match_text", kind: "scalar", T: 9 }]), xQ = wa.makeMessageType("aiserver.v1.SearchResultFile", () => [{ no: 1, name: "file_path", kind: "scalar", T: 9 }, { no: 2, name: "match_count", kind: "scalar", T: 5 }, { no: 3, name: "matches", kind: "message", T: PQ, repeated: true }]), GQ = wa.makeMessageType("aiserver.v1.SearchEvent", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }, { no: 2, name: "result_count", kind: "scalar", T: 5 }, { no: 3, name: "file_count", kind: "scalar", T: 5 }, { no: 4, name: "is_regex", kind: "scalar", T: 8 }, { no: 5, name: "is_case_sensitive", kind: "scalar", T: 8 }, { no: 6, name: "is_whole_word", kind: "scalar", T: 8 }, { no: 7, name: "files_to_include", kind: "scalar", T: 9, opt: true }, { no: 8, name: "files_to_exclude", kind: "scalar", T: 9, opt: true }, { no: 9, name: "duration_ms", kind: "scalar", T: 5 }, { no: 10, name: "results", kind: "message", T: xQ, repeated: true }]), YQ = wa.makeMessageType("aiserver.v1.ContextItem", () => [{ no: 1, name: "intent", kind: "message", T: gy }, { no: 2, name: "file_chunk", kind: "message", T: JQ, oneof: "item" }, { no: 3, name: "outline_chunk", kind: "message", T: HQ, oneof: "item" }, { no: 4, name: "cmd_k_selection", kind: "message", T: WQ, oneof: "item" }, { no: 5, name: "cmd_k_immediate_context", kind: "message", T: jQ, oneof: "item" }, { no: 6, name: "cmd_k_query", kind: "message", T: ZQ, oneof: "item" }, { no: 7, name: "cmd_k_query_history", kind: "message", T: ey, oneof: "item" }, { no: 8, name: "custom_instructions", kind: "message", T: oy, oneof: "item" }, { no: 9, name: "go_to_definition_result", kind: "message", T: ry, oneof: "item" }, { no: 10, name: "documentation_chunk", kind: "message", T: iy, oneof: "item" }, { no: 11, name: "lints", kind: "message", T: Ay, oneof: "item" }, { no: 12, name: "chat_history", kind: "message", T: ty, oneof: "item" }, { no: 13, name: "notebook_cell_output", kind: "message", T: cy, oneof: "item" }, { no: 14, name: "terminal_history", kind: "message", T: sy, oneof: "item" }, { no: 15, name: "terminal_cmd_k_query", kind: "message", T: zQ, oneof: "item" }, { no: 16, name: "terminal_cmd_k_query_history", kind: "message", T: $Q, oneof: "item" }, { no: 17, name: "sparse_file_chunk", kind: "message", T: VQ, oneof: "item" }, { no: 18, name: "lsp_subgraph_chunk", kind: "message", T: my, oneof: "item" }, { no: 19, name: "commit_note_chunk", kind: "message", T: dy, oneof: "item" }, { no: 20, name: "file_diff_history", kind: "message", T: KQ, oneof: "item" }, { no: 21, name: "cmd_k_query_history_in_diff_session", kind: "message", T: ny, oneof: "item" }, { no: 22, name: "project_rule", kind: "message", T: Ko, oneof: "item" }]), JQ = wa.makeMessageType("aiserver.v1.ContextItem.FileChunk", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "chunk_contents", kind: "scalar", T: 9 }, { no: 3, name: "start_line_number", kind: "scalar", T: 5 }], { localName: "ContextItem_FileChunk" }), VQ = wa.makeMessageType("aiserver.v1.ContextItem.SparseFileChunk", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "lines", kind: "message", T: qQ, repeated: true }, { no: 3, name: "total_number_of_lines_in_file", kind: "scalar", T: 5 }, { no: 4, name: "cell_number", kind: "scalar", T: 5, opt: true }], { localName: "ContextItem_SparseFileChunk" }), qQ = wa.makeMessageType("aiserver.v1.ContextItem.SparseFileChunk.Line", () => [{ no: 1, name: "line", kind: "scalar", T: 9 }, { no: 2, name: "line_number", kind: "scalar", T: 5 }], { localName: "ContextItem_SparseFileChunk_Line" }), HQ = wa.makeMessageType("aiserver.v1.ContextItem.OutlineChunk", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "contents", kind: "scalar", T: 9 }, { no: 3, name: "full_range", kind: "message", T: Bo }], { localName: "ContextItem_OutlineChunk" }), WQ = wa.makeMessageType("aiserver.v1.ContextItem.CmdKSelection", () => [{ no: 1, name: "lines", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "start_line_number", kind: "scalar", T: 5 }], { localName: "ContextItem_CmdKSelection" }), KQ = wa.makeMessageType("aiserver.v1.ContextItem.FileDiffHistory", () => [{ no: 1, name: "cpp_file_diff_history", kind: "message", T: _f }, { no: 2, name: "how_many_diffs_ago", kind: "scalar", T: 5 }, { no: 3, name: "is_very_recent", kind: "scalar", T: 8 }], { localName: "ContextItem_FileDiffHistory" }), jQ = wa.makeMessageType("aiserver.v1.ContextItem.CmdKImmediateContext", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "lines", kind: "message", T: XQ, repeated: true }, { no: 3, name: "total_number_of_lines_in_file", kind: "scalar", T: 5 }, { no: 4, name: "cell_number", kind: "scalar", T: 5, opt: true }], { localName: "ContextItem_CmdKImmediateContext" }), XQ = wa.makeMessageType("aiserver.v1.ContextItem.CmdKImmediateContext.Line", () => [{ no: 1, name: "line", kind: "scalar", T: 9 }, { no: 2, name: "line_number", kind: "scalar", T: 5 }], { localName: "ContextItem_CmdKImmediateContext_Line" }), ZQ = wa.makeMessageType("aiserver.v1.ContextItem.CmdKQuery", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }], { localName: "ContextItem_CmdKQuery" }), zQ = wa.makeMessageType("aiserver.v1.ContextItem.TerminalCmdKQuery", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }], { localName: "ContextItem_TerminalCmdKQuery" }), $Q = wa.makeMessageType("aiserver.v1.ContextItem.TerminalCmdKQueryHistory", () => [{ no: 1, name: "query", kind: "message", T: zQ }, { no: 2, name: "query_history", kind: "message", T: $Q }, { no: 5, name: "context_item_hashes", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "suggested_command", kind: "scalar", T: 9 }], { localName: "ContextItem_TerminalCmdKQueryHistory" }), ey = wa.makeMessageType("aiserver.v1.ContextItem.CmdKQueryHistory", () => [{ no: 1, name: "query", kind: "message", T: ZQ }, { no: 2, name: "immediate_context", kind: "message", T: jQ }, { no: 3, name: "selection", kind: "message", T: WQ }, { no: 4, name: "query_history", kind: "message", T: ey }, { no: 5, name: "context_item_hashes", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "timestamp", kind: "scalar", T: 3, opt: true }, { no: 7, name: "timestamp_double", kind: "scalar", T: 1, opt: true }], { localName: "ContextItem_CmdKQueryHistory" }), ny = wa.makeMessageType("aiserver.v1.ContextItem.CmdKQueryHistoryInDiffSession", () => [{ no: 1, name: "past_cmdk_queries", kind: "message", T: ay, repeated: true }, { no: 3, name: "curr_timestamp_double", kind: "scalar", T: 1 }], { localName: "ContextItem_CmdKQueryHistoryInDiffSession" }), ay = wa.makeMessageType("aiserver.v1.ContextItem.CmdKQueryHistoryInDiffSession.PastCmdKQueryInDiffSession", () => [{ no: 1, name: "query", kind: "message", T: ZQ }, { no: 2, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 5, name: "cmdk_was_accepted", kind: "scalar", T: 8, opt: true }, { no: 6, name: "timestamp_double", kind: "scalar", T: 1 }, { no: 7, name: "timestamp_for_diff_interleaving", kind: "scalar", T: 1, opt: true }, { no: 8, name: "request_id", kind: "scalar", T: 9, opt: true }], { localName: "ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession" }), ty = wa.makeMessageType("aiserver.v1.ContextItem.ChatHistory", () => [{ no: 1, name: "user_message", kind: "scalar", T: 9 }, { no: 2, name: "assistant_response", kind: "scalar", T: 9 }, { no: 3, name: "chat_history", kind: "message", T: ty }, { no: 4, name: "active_for_cmd_k", kind: "scalar", T: 8 }, { no: 5, name: "timestamp", kind: "scalar", T: 3, opt: true }, { no: 6, name: "timestamp_double", kind: "scalar", T: 1, opt: true }], { localName: "ContextItem_ChatHistory" }), sy = wa.makeMessageType("aiserver.v1.ContextItem.TerminalHistory", () => [{ no: 1, name: "history", kind: "scalar", T: 9 }, { no: 5, name: "cwd_full", kind: "scalar", T: 9 }, { no: 6, name: "cwd_relative_workspace_path", kind: "scalar", T: 9 }, { no: 4, name: "active_for_cmd_k", kind: "scalar", T: 8 }, { no: 7, name: "timestamp", kind: "scalar", T: 3, opt: true }, { no: 8, name: "timestamp_double", kind: "scalar", T: 1, opt: true }], { localName: "ContextItem_TerminalHistory" }), oy = wa.makeMessageType("aiserver.v1.ContextItem.CustomInstructions", () => [{ no: 1, name: "instructions", kind: "scalar", T: 9 }], { localName: "ContextItem_CustomInstructions" }), ry = wa.makeMessageType("aiserver.v1.ContextItem.GoToDefinitionResult", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "line", kind: "scalar", T: 9 }, { no: 3, name: "line_number", kind: "scalar", T: 5 }, { no: 4, name: "column_number", kind: "scalar", T: 5 }, { no: 5, name: "definition_chunk", kind: "message", T: JQ }], { localName: "ContextItem_GoToDefinitionResult" }), iy = wa.makeMessageType("aiserver.v1.ContextItem.DocumentationChunk", () => [{ no: 1, name: "doc_name", kind: "scalar", T: 9 }, { no: 2, name: "page_url", kind: "scalar", T: 9 }, { no: 3, name: "documentation_chunk", kind: "scalar", T: 9 }, { no: 4, name: "score", kind: "scalar", T: 2 }], { localName: "ContextItem_DocumentationChunk" }), Ay = wa.makeMessageType("aiserver.v1.ContextItem.Lints", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "lints", kind: "message", T: Fo, repeated: true }, { no: 3, name: "context_lines", kind: "message", T: ly, repeated: true }], { localName: "ContextItem_Lints" }), ly = wa.makeMessageType("aiserver.v1.ContextItem.Lints.Line", () => [{ no: 1, name: "line", kind: "scalar", T: 9 }, { no: 2, name: "line_number", kind: "scalar", T: 5 }], { localName: "ContextItem_Lints_Line" }), cy = wa.makeMessageType("aiserver.v1.ContextItem.NotebookCellOutput", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "cell_output", kind: "scalar", T: 9 }, { no: 3, name: "cell_number", kind: "scalar", T: 5 }], { localName: "ContextItem_NotebookCellOutput" }), my = wa.makeMessageType("aiserver.v1.ContextItem.LspSubgraphChunk", () => [{ no: 1, name: "lsp_subgraph_full_context", kind: "message", T: WC }], { localName: "ContextItem_LspSubgraphChunk" }), dy = wa.makeMessageType("aiserver.v1.ContextItem.CommitNoteChunk", () => [{ no: 1, name: "note", kind: "scalar", T: 9 }], { localName: "ContextItem_CommitNoteChunk" }), gy = wa.makeMessageType("aiserver.v1.ContextIntent", () => [{ no: 1, name: "type", kind: "enum", T: wa.getEnumType(uy) }, { no: 15, name: "uuid", kind: "scalar", T: 9 }, { no: 2, name: "file", kind: "message", T: py, oneof: "intent" }, { no: 3, name: "code_selection", kind: "message", T: ky, oneof: "intent" }, { no: 5, name: "lints", kind: "message", T: hy, oneof: "intent" }, { no: 6, name: "recent_locations", kind: "message", T: fy, oneof: "intent" }, { no: 8, name: "cmd_k_current_file", kind: "message", T: yy, oneof: "intent" }, { no: 9, name: "cmd_k_query_etc", kind: "message", T: Ry, oneof: "intent" }, { no: 14, name: "terminal_cmd_k_defaults", kind: "message", T: wy, oneof: "intent" }, { no: 10, name: "cmd_k_definitions", kind: "message", T: vy, oneof: "intent" }, { no: 11, name: "documentation", kind: "message", T: Ey, oneof: "intent" }, { no: 12, name: "custom_instructions", kind: "message", T: Ny, oneof: "intent" }, { no: 13, name: "chat_history", kind: "message", T: Sy, oneof: "intent" }, { no: 16, name: "terminal_history", kind: "message", T: by, oneof: "intent" }, { no: 17, name: "visible_tabs", kind: "message", T: Qy, oneof: "intent" }, { no: 18, name: "lsp_subgraph", kind: "message", T: My, oneof: "intent" }, { no: 19, name: "commit_notes", kind: "message", T: Iy, oneof: "intent" }, { no: 20, name: "diff_history", kind: "message", T: Dy, oneof: "intent" }, { no: 21, name: "past_cmdk_messages_in_diff_sessions", kind: "message", T: By, oneof: "intent" }]), uy = wa.makeEnum("aiserver.v1.ContextIntent.Type", [{ no: 0, name: "TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TYPE_USER_ADDED", localName: "USER_ADDED" }, { no: 2, name: "TYPE_AUTOMATIC", localName: "AUTOMATIC" }]), Ey = wa.makeMessageType("aiserver.v1.ContextIntent.Documentation", () => [{ no: 1, name: "documentation_identifier", kind: "scalar", T: 9 }], { localName: "ContextIntent_Documentation" }), py = wa.makeMessageType("aiserver.v1.ContextIntent.File", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "mode", kind: "enum", T: wa.getEnumType(Ty) }], { localName: "ContextIntent_File" }), Ty = wa.makeEnum("aiserver.v1.ContextIntent.File.Mode", [{ no: 0, name: "MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "MODE_FULL", localName: "FULL" }, { no: 2, name: "MODE_OUTLINE", localName: "OUTLINE" }, { no: 3, name: "MODE_CHUNKS", localName: "CHUNKS" }]), ky = wa.makeMessageType("aiserver.v1.ContextIntent.CodeSelection", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "potentially_out_of_date_range", kind: "message", T: ko }, { no: 3, name: "text", kind: "scalar", T: 9 }], { localName: "ContextIntent_CodeSelection" }), Iy = wa.makeMessageType("aiserver.v1.ContextIntent.CommitNotes", [], { localName: "ContextIntent_CommitNotes" }), hy = wa.makeMessageType("aiserver.v1.ContextIntent.Lints", () => [{ no: 1, name: "cmdk_scope", kind: "message", T: _y, oneof: "scope" }, { no: 2, name: "file_scope", kind: "message", T: Cy, oneof: "scope" }, { no: 3, name: "filter_to_severities", kind: "enum", T: wa.getEnumType(to), repeated: true }], { localName: "ContextIntent_Lints" }), _y = wa.makeMessageType("aiserver.v1.ContextIntent.Lints.CmdKScope", [], { localName: "ContextIntent_Lints_CmdKScope" }), Cy = wa.makeMessageType("aiserver.v1.ContextIntent.Lints.FileScope", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "filter_range", kind: "message", T: Bo, opt: true }], { localName: "ContextIntent_Lints_FileScope" }), fy = wa.makeMessageType("aiserver.v1.ContextIntent.RecentLocations", () => [{ no: 2, name: "timestamp", kind: "scalar", T: 1, opt: true }], { localName: "ContextIntent_RecentLocations" }), By = wa.makeMessageType("aiserver.v1.ContextIntent.PastCmdkConversationsInDiffSessions", [], { localName: "ContextIntent_PastCmdkConversationsInDiffSessions" }), Qy = wa.makeMessageType("aiserver.v1.ContextIntent.VisibleTabs", [], { localName: "ContextIntent_VisibleTabs" }), yy = wa.makeMessageType("aiserver.v1.ContextIntent.CmdKCurrentFile", [], { localName: "ContextIntent_CmdKCurrentFile" }), Ry = wa.makeMessageType("aiserver.v1.ContextIntent.CmdKQueryEtc", [], { localName: "ContextIntent_CmdKQueryEtc" }), Ny = wa.makeMessageType("aiserver.v1.ContextIntent.CustomInstructions", [], { localName: "ContextIntent_CustomInstructions" }), vy = wa.makeMessageType("aiserver.v1.ContextIntent.CmdKDefinitions", [], { localName: "ContextIntent_CmdKDefinitions" }), Sy = wa.makeMessageType("aiserver.v1.ContextIntent.ChatHistory", [], { localName: "ContextIntent_ChatHistory" }), Dy = wa.makeMessageType("aiserver.v1.ContextIntent.DiffHistory", [], { localName: "ContextIntent_DiffHistory" }), wy = wa.makeMessageType("aiserver.v1.ContextIntent.TerminalCmdKDefaults", [], { localName: "ContextIntent_TerminalCmdKDefaults" }), by = wa.makeMessageType("aiserver.v1.ContextIntent.TerminalHistory", () => [{ no: 1, name: "instance_id", kind: "scalar", T: 5 }, { no: 2, name: "active_for_cmd_k", kind: "scalar", T: 8 }, { no: 3, name: "use_active_instance_as_fallback", kind: "scalar", T: 8, opt: true }], { localName: "ContextIntent_TerminalHistory" }), My = wa.makeMessageType("aiserver.v1.ContextIntent.LspSubgraph", [], { localName: "ContextIntent_LspSubgraph" }), Fy = wa.makeMessageType("aiserver.v1.StreamCmdKResponse", () => [{ no: 1, name: "edit_start", kind: "message", T: Oy, oneof: "response" }, { no: 2, name: "edit_stream", kind: "message", T: Uy, oneof: "response" }, { no: 3, name: "edit_end", kind: "message", T: Ly, oneof: "response" }, { no: 4, name: "chat", kind: "message", T: Py, oneof: "response" }, { no: 5, name: "status_update", kind: "message", T: xy, oneof: "response" }]), Oy = wa.makeMessageType("aiserver.v1.StreamCmdKResponse.EditStart", () => [{ no: 1, name: "start_line_number", kind: "scalar", T: 5 }, { no: 2, name: "edit_id", kind: "scalar", T: 5 }, { no: 3, name: "max_end_line_number_exclusive", kind: "scalar", T: 5, opt: true }, { no: 4, name: "file_path", kind: "scalar", T: 9, opt: true }], { localName: "StreamCmdKResponse_EditStart" }), Uy = wa.makeMessageType("aiserver.v1.StreamCmdKResponse.EditStream", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "edit_id", kind: "scalar", T: 5 }, { no: 3, name: "file_path", kind: "scalar", T: 9, opt: true }], { localName: "StreamCmdKResponse_EditStream" }), Ly = wa.makeMessageType("aiserver.v1.StreamCmdKResponse.EditEnd", () => [{ no: 1, name: "end_line_number_exclusive", kind: "scalar", T: 5 }, { no: 2, name: "edit_id", kind: "scalar", T: 5 }, { no: 3, name: "file_path", kind: "scalar", T: 9, opt: true }], { localName: "StreamCmdKResponse_EditEnd" }), Py = wa.makeMessageType("aiserver.v1.StreamCmdKResponse.Chat", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }], { localName: "StreamCmdKResponse_Chat" }), xy = wa.makeMessageType("aiserver.v1.StreamCmdKResponse.StatusUpdate", () => [{ no: 1, name: "messages", kind: "scalar", T: 9, repeated: true }], { localName: "StreamCmdKResponse_StatusUpdate" }), Gy = wa.makeMessageType("aiserver.v1.CloudAgentRequestScope", () => [{ no: 1, name: "personal", kind: "message", T: Yy, oneof: "scope" }, { no: 2, name: "team_id", kind: "scalar", T: 5, oneof: "scope" }]), Yy = wa.makeMessageType("aiserver.v1.CloudAgentPersonalScope", []), Jy = wa.makeEnum("aiserver.v1.FastApplySource", [{ no: 0, name: "FAST_APPLY_SOURCE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "FAST_APPLY_SOURCE_COMPOSER", localName: "COMPOSER" }, { no: 2, name: "FAST_APPLY_SOURCE_CLICKED_APPLY", localName: "CLICKED_APPLY" }, { no: 3, name: "FAST_APPLY_SOURCE_CACHED_APPLY", localName: "CACHED_APPLY" }, { no: 4, name: "FAST_APPLY_SOURCE_COMPOSER_AGENT", localName: "COMPOSER_AGENT" }]), Vy = wa.makeEnum("aiserver.v1.LintDiscriminator", [{ no: 0, name: "LINT_DISCRIMINATOR_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "LINT_DISCRIMINATOR_SPECIFIC_RULES", localName: "SPECIFIC_RULES" }, { no: 2, name: "LINT_DISCRIMINATOR_COMPILE_ERRORS", localName: "COMPILE_ERRORS" }, { no: 3, name: "LINT_DISCRIMINATOR_CHANGE_BEHAVIOR", localName: "CHANGE_BEHAVIOR" }, { no: 5, name: "LINT_DISCRIMINATOR_RELEVANCE", localName: "RELEVANCE" }, { no: 6, name: "LINT_DISCRIMINATOR_USER_AWARENESS", localName: "USER_AWARENESS" }, { no: 7, name: "LINT_DISCRIMINATOR_CORRECTNESS", localName: "CORRECTNESS" }, { no: 8, name: "LINT_DISCRIMINATOR_CHUNKING", localName: "CHUNKING" }, { no: 9, name: "LINT_DISCRIMINATOR_TYPO", localName: "TYPO" }, { no: 10, name: "LINT_DISCRIMINATOR_CONFIDENCE", localName: "CONFIDENCE" }, { no: 11, name: "LINT_DISCRIMINATOR_DISMISSED_BUGS", localName: "DISMISSED_BUGS" }]), qy = wa.makeEnum("aiserver.v1.LintGenerator", [{ no: 0, name: "LINT_GENERATOR_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "LINT_GENERATOR_NAIVE", localName: "NAIVE" }, { no: 2, name: "LINT_GENERATOR_COMMENT_PIPELINE", localName: "COMMENT_PIPELINE" }, { no: 3, name: "LINT_GENERATOR_SIMPLE_BUG", localName: "SIMPLE_BUG" }, { no: 4, name: "LINT_GENERATOR_SIMPLE_LINT_RULES", localName: "SIMPLE_LINT_RULES" }]), Hy = wa.makeMessageType("aiserver.v1.LintDiscriminatorResult", () => [{ no: 1, name: "discriminator", kind: "enum", T: wa.getEnumType(Vy) }, { no: 2, name: "allow", kind: "scalar", T: 8 }, { no: 3, name: "reasoning", kind: "scalar", T: 9 }]), Wy = wa.makeMessageType("aiserver.v1.AiLintBug", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 8, name: "uuid", kind: "scalar", T: 9 }, { no: 2, name: "message", kind: "scalar", T: 9 }, { no: 3, name: "replace_range", kind: "message", T: ko }, { no: 4, name: "replace_text", kind: "scalar", T: 9 }, { no: 5, name: "replace_initial_text", kind: "scalar", T: 9 }, { no: 6, name: "reevaluate_range", kind: "message", T: ko }, { no: 7, name: "reevaluate_initial_text", kind: "scalar", T: 9 }, { no: 9, name: "generator", kind: "enum", T: wa.getEnumType(qy) }, { no: 10, name: "discriminator_results", kind: "message", T: Hy, repeated: true }, { no: 11, name: "logprobs_payload", kind: "message", T: Ky }]), Ky = wa.makeMessageType("aiserver.v1.LogprobsLintPayload", () => [{ no: 1, name: "chunk", kind: "scalar", T: 9 }, { no: 2, name: "problematic_line", kind: "scalar", T: 9 }, { no: 3, name: "start_col", kind: "scalar", T: 5 }, { no: 4, name: "end_col", kind: "scalar", T: 5 }, { no: 5, name: "most_likely_replace", kind: "scalar", T: 9 }, { no: 6, name: "line_chunk_index_zero_based", kind: "scalar", T: 5 }]), jy = wa.makeMessageType("aiserver.v1.AiLintRule", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }]), Xy = wa.makeMessageType("aiserver.v1.ContextAST", () => [{ no: 1, name: "files", kind: "message", T: Zy, repeated: true }]), Zy = wa.makeMessageType("aiserver.v1.ContainerTree", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "nodes", kind: "message", T: zy, repeated: true }]), zy = wa.makeMessageType("aiserver.v1.ContainerTreeNode", () => [{ no: 1, name: "container", kind: "message", T: eR, oneof: "node" }, { no: 2, name: "blob", kind: "message", T: nR, oneof: "node" }, { no: 3, name: "symbol", kind: "message", T: $y, oneof: "node" }]), $y = wa.makeMessageType("aiserver.v1.ContainerTreeNode.Symbol", () => [{ no: 1, name: "doc_string", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 9 }, { no: 6, name: "references", kind: "message", T: aR, repeated: true }, { no: 7, name: "score", kind: "scalar", T: 1 }], { localName: "ContainerTreeNode_Symbol" }), eR = wa.makeMessageType("aiserver.v1.ContainerTreeNode.Container", () => [{ no: 1, name: "doc_string", kind: "scalar", T: 9 }, { no: 2, name: "header", kind: "scalar", T: 9 }, { no: 3, name: "trailer", kind: "scalar", T: 9 }, { no: 5, name: "children", kind: "message", T: zy, repeated: true }, { no: 6, name: "references", kind: "message", T: aR, repeated: true }, { no: 7, name: "score", kind: "scalar", T: 1 }], { localName: "ContainerTreeNode_Container" }), nR = wa.makeMessageType("aiserver.v1.ContainerTreeNode.Blob", () => [{ no: 1, name: "value", kind: "scalar", T: 9, opt: true }], { localName: "ContainerTreeNode_Blob" }), aR = wa.makeMessageType("aiserver.v1.ContainerTreeNode.Reference", () => [{ no: 1, name: "value", kind: "scalar", T: 9 }, { no: 2, name: "relative_workspace_path", kind: "scalar", T: 9 }], { localName: "ContainerTreeNode_Reference" }), tR = wa.makeMessageType("aiserver.v1.ModelSelectionSnapshot", () => [{ no: 1, name: "model_id", kind: "scalar", T: 9 }, { no: 2, name: "max_mode", kind: "scalar", T: 8 }, { no: 3, name: "parameters", kind: "message", T: sR, repeated: true }]), sR = wa.makeMessageType("aiserver.v1.ModelSelectionSnapshot.ModelParameterValue", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 9 }], { localName: "ModelSelectionSnapshot_ModelParameterValue" }), oR = wa.makeMessageType("aiserver.v1.UsageEventDetails", () => [{ no: 1, name: "chat", kind: "message", T: lR, oneof: "feature" }, { no: 2, name: "context_chat", kind: "message", T: uR, oneof: "feature" }, { no: 3, name: "cmd_k", kind: "message", T: ER, oneof: "feature" }, { no: 4, name: "terminal_cmd_k", kind: "message", T: pR, oneof: "feature" }, { no: 5, name: "ai_review_accepted_comment", kind: "message", T: TR, oneof: "feature" }, { no: 6, name: "interpreter_chat", kind: "message", T: kR, oneof: "feature" }, { no: 7, name: "slash_edit", kind: "message", T: IR, oneof: "feature" }, { no: 8, name: "composer", kind: "message", T: mR, oneof: "feature" }, { no: 9, name: "fast_apply", kind: "message", T: cR, oneof: "feature" }, { no: 10, name: "warm_composer", kind: "message", T: gR, oneof: "feature" }, { no: 11, name: "bug_finder_trigger_v1", kind: "message", T: iR, oneof: "feature" }, { no: 12, name: "tool_call_composer", kind: "message", T: dR, oneof: "feature" }, { no: 14, name: "bug_bot", kind: "message", T: AR, oneof: "feature" }, { no: 15, name: "prompt_hook", kind: "message", T: rR, oneof: "feature" }, { no: 20, name: "agent_sdk_managed", kind: "message", T: hR, opt: true }, { no: 13, name: "override_num_requests_counted", kind: "scalar", T: 5, opt: true }, { no: 16, name: "override_num_requests_counted_millis", kind: "scalar", T: 5, opt: true }, { no: 17, name: "routed_model", kind: "scalar", T: 9, opt: true }, { no: 18, name: "requested_model_selection", kind: "message", T: tR, opt: true }, { no: 19, name: "effective_model_selection", kind: "message", T: tR, opt: true }]), rR = wa.makeMessageType("aiserver.v1.UsageEventDetails.PromptHook", () => [{ no: 1, name: "model_intent", kind: "scalar", T: 9 }, { no: 2, name: "token_usage", kind: "message", T: _R, opt: true }, { no: 3, name: "max_mode", kind: "scalar", T: 8, opt: true }, { no: 4, name: "is_token_based_call", kind: "scalar", T: 8, opt: true }], { localName: "UsageEventDetails_PromptHook" }), iR = wa.makeMessageType("aiserver.v1.UsageEventDetails.BugFinderTriggerV1", () => [{ no: 1, name: "in_background_subsidized", kind: "scalar", T: 8 }, { no: 2, name: "cost_cents", kind: "scalar", T: 5 }, { no: 3, name: "is_fast", kind: "scalar", T: 8 }], { localName: "UsageEventDetails_BugFinderTriggerV1" }), AR = wa.makeMessageType("aiserver.v1.UsageEventDetails.BugBot", () => [{ no: 1, name: "model_intent", kind: "scalar", T: 9 }, { no: 2, name: "token_usage", kind: "message", T: _R }, { no: 3, name: "is_token_based_call", kind: "scalar", T: 8 }, { no: 4, name: "max_mode", kind: "scalar", T: 8 }, { no: 5, name: "no_discount", kind: "message", T: us, oneof: "discount" }, { no: 6, name: "free", kind: "message", T: us, oneof: "discount" }, { no: 7, name: "billing_mode", kind: "scalar", T: 9 }], { localName: "UsageEventDetails_BugBot" }), lR = wa.makeMessageType("aiserver.v1.UsageEventDetails.Chat", () => [{ no: 1, name: "model_intent", kind: "scalar", T: 9 }, { no: 2, name: "override_num_requests_counted", kind: "scalar", T: 5, opt: true }, { no: 3, name: "is_token_based_call", kind: "scalar", T: 8, opt: true }, { no: 4, name: "token_usage", kind: "message", T: _R, opt: true }, { no: 5, name: "max_mode", kind: "scalar", T: 8, opt: true }], { localName: "UsageEventDetails_Chat" }), cR = wa.makeMessageType("aiserver.v1.UsageEventDetails.FastApply", () => [{ no: 1, name: "is_optimistic", kind: "scalar", T: 8 }, { no: 2, name: "willing_to_pay_extra_for_speed", kind: "scalar", T: 8 }], { localName: "UsageEventDetails_FastApply" }), mR = wa.makeMessageType("aiserver.v1.UsageEventDetails.Composer", () => [{ no: 1, name: "model_intent", kind: "scalar", T: 9 }, { no: 2, name: "override_num_requests_counted", kind: "scalar", T: 5, opt: true }, { no: 3, name: "is_headless", kind: "scalar", T: 8, opt: true }, { no: 4, name: "is_token_based_call", kind: "scalar", T: 8, opt: true }, { no: 5, name: "token_usage", kind: "message", T: _R, opt: true }, { no: 6, name: "max_mode", kind: "scalar", T: 8, opt: true }], { localName: "UsageEventDetails_Composer" }), dR = wa.makeMessageType("aiserver.v1.UsageEventDetails.ToolCallComposer", () => [{ no: 1, name: "model_intent", kind: "scalar", T: 9 }, { no: 2, name: "override_num_requests_counted", kind: "scalar", T: 5, opt: true }, { no: 3, name: "is_headless", kind: "scalar", T: 8, opt: true }, { no: 4, name: "is_token_based_call", kind: "scalar", T: 8, opt: true }, { no: 5, name: "token_usage", kind: "message", T: _R, opt: true }, { no: 6, name: "max_mode", kind: "scalar", T: 8, opt: true }], { localName: "UsageEventDetails_ToolCallComposer" }), gR = wa.makeMessageType("aiserver.v1.UsageEventDetails.WarmComposer", () => [{ no: 1, name: "model_intent", kind: "scalar", T: 9 }, { no: 2, name: "max_mode", kind: "scalar", T: 8, opt: true }], { localName: "UsageEventDetails_WarmComposer" }), uR = wa.makeMessageType("aiserver.v1.UsageEventDetails.ContextChat", () => [{ no: 1, name: "model_intent", kind: "scalar", T: 9 }, { no: 2, name: "override_num_requests_counted", kind: "scalar", T: 5, opt: true }, { no: 3, name: "is_token_based_call", kind: "scalar", T: 8, opt: true }, { no: 4, name: "token_usage", kind: "message", T: _R, opt: true }, { no: 5, name: "max_mode", kind: "scalar", T: 8, opt: true }], { localName: "UsageEventDetails_ContextChat" }), ER = wa.makeMessageType("aiserver.v1.UsageEventDetails.CmdK", () => [{ no: 1, name: "model_intent", kind: "scalar", T: 9 }, { no: 2, name: "override_num_requests_counted", kind: "scalar", T: 5, opt: true }, { no: 3, name: "is_token_based_call", kind: "scalar", T: 8, opt: true }, { no: 4, name: "token_usage", kind: "message", T: _R, opt: true }, { no: 5, name: "max_mode", kind: "scalar", T: 8, opt: true }], { localName: "UsageEventDetails_CmdK" }), pR = wa.makeMessageType("aiserver.v1.UsageEventDetails.TerminalCmdK", () => [{ no: 1, name: "model_intent", kind: "scalar", T: 9 }, { no: 2, name: "override_num_requests_counted", kind: "scalar", T: 5, opt: true }, { no: 3, name: "is_token_based_call", kind: "scalar", T: 8, opt: true }, { no: 4, name: "token_usage", kind: "message", T: _R, opt: true }, { no: 5, name: "max_mode", kind: "scalar", T: 8, opt: true }], { localName: "UsageEventDetails_TerminalCmdK" }), TR = wa.makeMessageType("aiserver.v1.UsageEventDetails.AiReviewAcceptedComment", [], { localName: "UsageEventDetails_AiReviewAcceptedComment" }), kR = wa.makeMessageType("aiserver.v1.UsageEventDetails.InterpreterChat", () => [{ no: 1, name: "model_intent", kind: "scalar", T: 9 }, { no: 2, name: "override_num_requests_counted", kind: "scalar", T: 5, opt: true }, { no: 3, name: "is_token_based_call", kind: "scalar", T: 8, opt: true }, { no: 4, name: "token_usage", kind: "message", T: _R, opt: true }, { no: 5, name: "max_mode", kind: "scalar", T: 8, opt: true }], { localName: "UsageEventDetails_InterpreterChat" }), IR = wa.makeMessageType("aiserver.v1.UsageEventDetails.SlashEdit", () => [{ no: 1, name: "model_intent", kind: "scalar", T: 9 }, { no: 2, name: "max_mode", kind: "scalar", T: 8, opt: true }], { localName: "UsageEventDetails_SlashEdit" }), hR = wa.makeMessageType("aiserver.v1.UsageEventDetails.AgentSdkManagedProduct", () => [{ no: 1, name: "managed_type", kind: "scalar", T: 9 }, { no: 2, name: "application_slug", kind: "scalar", T: 9 }], { localName: "UsageEventDetails_AgentSdkManagedProduct" }), _R = wa.makeMessageType("aiserver.v1.TokenUsage", () => [{ no: 1, name: "input_tokens", kind: "scalar", T: 5 }, { no: 2, name: "output_tokens", kind: "scalar", T: 5 }, { no: 3, name: "cache_write_tokens", kind: "scalar", T: 5 }, { no: 4, name: "cache_read_tokens", kind: "scalar", T: 5 }, { no: 5, name: "total_cents", kind: "scalar", T: 2 }, { no: 6, name: "discount_percent_off", kind: "scalar", T: 5, opt: true }, { no: 7, name: "enterprise_usage_discount_percent", kind: "scalar", T: 2, opt: true }]), CR = wa.makeMessageType("aiserver.v1.InterfaceAgentClientState", () => [{ no: 3, name: "interface_relative_workspace_path", kind: "scalar", T: 9 }, { no: 4, name: "interface_lines", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "test_relative_workspace_path", kind: "scalar", T: 9, opt: true }, { no: 10, name: "test_lines", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "implementation_relative_workspace_path", kind: "scalar", T: 9, opt: true }, { no: 7, name: "implementation_lines", kind: "scalar", T: 9, repeated: true }, { no: 8, name: "language", kind: "scalar", T: 9 }, { no: 9, name: "testing_framework", kind: "scalar", T: 9 }]), fR = wa.makeMessageType("aiserver.v1.InterfaceAgentStatus", () => [{ no: 1, name: "validate_configuration", kind: "enum", T: wa.getEnumType(BR) }, { no: 2, name: "stub_new_function", kind: "enum", T: wa.getEnumType(BR) }, { no: 3, name: "verify_spec", kind: "enum", T: wa.getEnumType(BR) }, { no: 15, name: "write_test_plan", kind: "enum", T: wa.getEnumType(BR) }, { no: 4, name: "write_tests", kind: "enum", T: wa.getEnumType(BR) }, { no: 5, name: "write_implementation", kind: "enum", T: wa.getEnumType(BR) }, { no: 6, name: "implement_new_function", kind: "enum", T: wa.getEnumType(BR) }, { no: 7, name: "run_tests", kind: "enum", T: wa.getEnumType(BR) }, { no: 8, name: "validate_configuration_message", kind: "scalar", T: 9 }, { no: 9, name: "stub_new_function_message", kind: "scalar", T: 9 }, { no: 10, name: "verify_spec_message", kind: "scalar", T: 9 }, { no: 16, name: "write_test_plan_message", kind: "scalar", T: 9 }, { no: 11, name: "write_tests_message", kind: "scalar", T: 9 }, { no: 12, name: "write_implementation_message", kind: "scalar", T: 9 }, { no: 13, name: "implement_new_function_message", kind: "scalar", T: 9 }, { no: 14, name: "run_tests_message", kind: "scalar", T: 9 }]), BR = wa.makeEnum("aiserver.v1.InterfaceAgentStatus.Status", [{ no: 0, name: "STATUS_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "STATUS_WAITING", localName: "WAITING" }, { no: 2, name: "STATUS_RUNNING", localName: "RUNNING" }, { no: 3, name: "STATUS_SUCCESS", localName: "SUCCESS" }, { no: 4, name: "STATUS_FAILURE", localName: "FAILURE" }]), QR = wa.makeEnum("aiserver.v1.TaskListItemState", [{ no: 0, name: "TASK_LIST_ITEM_STATE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TASK_LIST_ITEM_STATE_ACTIVE", localName: "ACTIVE" }, { no: 2, name: "TASK_LIST_ITEM_STATE_PAUSED", localName: "PAUSED" }, { no: 3, name: "TASK_LIST_ITEM_STATE_NEEDS_INPUT", localName: "NEEDS_INPUT" }, { no: 4, name: "TASK_LIST_ITEM_STATE_DONE", localName: "DONE" }]), yR = wa.makeEnum("aiserver.v1.InferenceHookTestOutcome", [{ no: 0, name: "INFERENCE_HOOK_TEST_OUTCOME_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "INFERENCE_HOOK_TEST_OUTCOME_ALLOW", localName: "ALLOW" }, { no: 2, name: "INFERENCE_HOOK_TEST_OUTCOME_DENY", localName: "DENY" }, { no: 3, name: "INFERENCE_HOOK_TEST_OUTCOME_URL_REJECTED", localName: "URL_REJECTED" }, { no: 4, name: "INFERENCE_HOOK_TEST_OUTCOME_PRIVATE_OR_INTERNAL_IP", localName: "PRIVATE_OR_INTERNAL_IP" }, { no: 5, name: "INFERENCE_HOOK_TEST_OUTCOME_TIMEOUT", localName: "TIMEOUT" }, { no: 6, name: "INFERENCE_HOOK_TEST_OUTCOME_TRANSPORT_ERROR", localName: "TRANSPORT_ERROR" }, { no: 7, name: "INFERENCE_HOOK_TEST_OUTCOME_NON_200_STATUS", localName: "NON_200_STATUS" }, { no: 8, name: "INFERENCE_HOOK_TEST_OUTCOME_UNPARSEABLE_RESPONSE", localName: "UNPARSEABLE_RESPONSE" }, { no: 9, name: "INFERENCE_HOOK_TEST_OUTCOME_SIGNING_SECRET_REQUIRED", localName: "SIGNING_SECRET_REQUIRED" }]), RR = wa.makeEnum("aiserver.v1.AvailableModelsScope", [{ no: 0, name: "AVAILABLE_MODELS_SCOPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "AVAILABLE_MODELS_SCOPE_USER_AVAILABLE", localName: "USER_AVAILABLE" }, { no: 2, name: "AVAILABLE_MODELS_SCOPE_AUTOMATIONS", localName: "AUTOMATIONS" }, { no: 3, name: "AVAILABLE_MODELS_SCOPE_ADMIN_SETTINGS_ALL_APPLICATION_MODELS", localName: "ADMIN_SETTINGS_ALL_APPLICATION_MODELS" }]), NR = wa.makeEnum("aiserver.v1.CloudAgentEffortMode", [{ no: 0, name: "CLOUD_AGENT_EFFORT_MODE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CLOUD_AGENT_EFFORT_MODE_STANDARD", localName: "STANDARD" }, { no: 2, name: "CLOUD_AGENT_EFFORT_MODE_GRIND", localName: "GRIND" }]), vR = wa.makeEnum("aiserver.v1.TaskStatus", [{ no: 0, name: "TASK_STATUS_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TASK_STATUS_RUNNING", localName: "RUNNING" }, { no: 2, name: "TASK_STATUS_PAUSED", localName: "PAUSED" }, { no: 3, name: "TASK_STATUS_DONE", localName: "DONE" }, { no: 4, name: "TASK_STATUS_NOT_STARTED", localName: "NOT_STARTED" }]), SR = wa.makeMessageType("aiserver.v1.GetComposerAutocompleteRequest", () => [{ no: 1, name: "input_text", kind: "scalar", T: 9 }, { no: 2, name: "composer_id", kind: "scalar", T: 9, opt: true }, { no: 3, name: "context", kind: "message", T: wR, opt: true }]), DR = wa.makeMessageType("aiserver.v1.GetComposerAutocompleteResponse", () => [{ no: 1, name: "suggestion", kind: "scalar", T: 9 }]), wR = wa.makeMessageType("aiserver.v1.ComposerAutocompleteContext", () => [{ no: 1, name: "current_file", kind: "message", T: bR, opt: true }, { no: 2, name: "cached_files", kind: "message", T: MR, repeated: true }, { no: 3, name: "conversation_messages", kind: "message", T: yI, repeated: true }, { no: 4, name: "visible_viewport_text", kind: "scalar", T: 9, opt: true }, { no: 5, name: "first_user_messages", kind: "scalar", T: 9, repeated: true }]), bR = wa.makeMessageType("aiserver.v1.CurrentFileContext", () => [{ no: 1, name: "relative_path", kind: "scalar", T: 9 }, { no: 2, name: "language", kind: "scalar", T: 9 }, { no: 3, name: "cursor_line", kind: "scalar", T: 5 }, { no: 4, name: "full_content", kind: "scalar", T: 9 }]), MR = wa.makeMessageType("aiserver.v1.CachedFileContext", () => [{ no: 1, name: "relative_path", kind: "scalar", T: 9 }, { no: 2, name: "language", kind: "scalar", T: 9 }, { no: 3, name: "full_content", kind: "scalar", T: 9 }, { no: 4, name: "last_viewed_timestamp", kind: "scalar", T: 3 }]), FR = wa.makeMessageType("aiserver.v1.ChatSuggestionItem", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }, { no: 3, name: "type", kind: "scalar", T: 9 }, { no: 4, name: "category", kind: "scalar", T: 9 }]), OR = wa.makeMessageType("aiserver.v1.RecentChat", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "timestamp", kind: "scalar", T: 3, opt: true }, { no: 3, name: "summary", kind: "scalar", T: 9, opt: true }, { no: 4, name: "messages", kind: "message", T: UR, repeated: true }, { no: 5, name: "todos", kind: "scalar", T: 9, opt: true }]), UR = wa.makeMessageType("aiserver.v1.RecentChatMessage", () => [{ no: 1, name: "role", kind: "scalar", T: 9 }, { no: 2, name: "text", kind: "scalar", T: 9 }, { no: 3, name: "context", kind: "scalar", T: 9 }]), LR = wa.makeMessageType("aiserver.v1.GetChatSuggestionsRequest", () => [{ no: 1, name: "recent_chats", kind: "message", T: OR, repeated: true }]), PR = wa.makeMessageType("aiserver.v1.GetChatSuggestionsResponse", () => [{ no: 1, name: "suggestions", kind: "message", T: FR, repeated: true }]), xR = wa.makeMessageType("aiserver.v1.GetUserInstructionsRequest", () => [{ no: 1, name: "chats", kind: "message", T: UR, repeated: true }, { no: 2, name: "existing_instructions", kind: "scalar", T: 9, opt: true }]), GR = wa.makeMessageType("aiserver.v1.GetUserInstructionsResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }]), YR = wa.makeMessageType("aiserver.v1.IsTerminalFinishedRequest", () => [{ no: 1, name: "terminal_content", kind: "scalar", T: 9 }, { no: 2, name: "check_for_hangs", kind: "scalar", T: 8 }, { no: 3, name: "chat_request_id", kind: "scalar", T: 9, opt: true }, { no: 4, name: "command", kind: "scalar", T: 9, opt: true }]), JR = wa.makeMessageType("aiserver.v1.IsTerminalFinishedResponseV2", () => [{ no: 1, name: "is_finished", kind: "scalar", T: 8 }, { no: 2, name: "ended_reason", kind: "enum", T: wa.getEnumType(Nl), opt: true }, { no: 3, name: "exit_code", kind: "scalar", T: 5, opt: true }, { no: 4, name: "is_hanging", kind: "scalar", T: 8 }]), VR = wa.makeMessageType("aiserver.v1.TestBidiRequest", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }]), qR = wa.makeMessageType("aiserver.v1.TestBidiResponse", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }]), HR = wa.makeMessageType("aiserver.v1.AutoContextFile", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "file_content", kind: "scalar", T: 9 }]), WR = wa.makeMessageType("aiserver.v1.AutoContextRequest", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "candidate_files", kind: "message", T: HR, repeated: true }, { no: 3, name: "model_details", kind: "message", T: Go }]), KR = wa.makeMessageType("aiserver.v1.AutoContextRankedFile", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "reranking_score", kind: "scalar", T: 2 }]), jR = wa.makeMessageType("aiserver.v1.AutoContextResponse", () => [{ no: 1, name: "ranked_files", kind: "message", T: KR, repeated: true }]), XR = wa.makeMessageType("aiserver.v1.CheckBugBotPriceRequest", () => [{ no: 1, name: "diff_char_len", kind: "scalar", T: 5 }, { no: 2, name: "iterations", kind: "scalar", T: 5 }, { no: 3, name: "model_details", kind: "message", T: Go }, { no: 4, name: "session_id", kind: "scalar", T: 9, opt: true }]), ZR = wa.makeMessageType("aiserver.v1.CheckBugBotPriceResponse", () => [{ no: 1, name: "cost", kind: "scalar", T: 1 }, { no: 2, name: "price_id", kind: "scalar", T: 9 }]), zR = wa.makeMessageType("aiserver.v1.AcknowledgeGracePeriodDisclaimerRequest", []), $R = wa.makeMessageType("aiserver.v1.AcknowledgeGracePeriodDisclaimerResponse", []), eN = wa.makeMessageType("aiserver.v1.CheckBugBotTelemetryHealthyRequest", () => [{ no: 1, name: "session_id", kind: "scalar", T: 9 }]), nN = wa.makeMessageType("aiserver.v1.CheckBugBotTelemetryHealthyResponse", () => [{ no: 1, name: "is_healthy", kind: "scalar", T: 8 }]), aN = wa.makeMessageType("aiserver.v1.RecordIdeBugReactionRequest", () => [{ no: 1, name: "bug_id", kind: "scalar", T: 9 }, { no: 2, name: "reaction", kind: "scalar", T: 9 }]), tN = wa.makeMessageType("aiserver.v1.RecordIdeBugReactionResponse", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }]), sN = wa.makeMessageType("aiserver.v1.GetSuggestedBugBotIterationsRequest", () => [{ no: 1, name: "diff_char_len", kind: "scalar", T: 5 }, { no: 2, name: "model_details", kind: "message", T: Go }]), oN = wa.makeMessageType("aiserver.v1.GetSuggestedBugBotIterationsResponse", () => [{ no: 1, name: "iterations", kind: "scalar", T: 5 }]), rN = wa.makeMessageType("aiserver.v1.GetEditorBugbotAutoRunStatusRequest", []), iN = wa.makeMessageType("aiserver.v1.GetEditorBugbotAutoRunStatusResponse", () => [{ no: 1, name: "should_auto_run", kind: "scalar", T: 8 }]), AN = wa.makeMessageType("aiserver.v1.BugBotStatus", () => [{ no: 1, name: "status", kind: "enum", T: wa.getEnumType(lN) }, { no: 2, name: "message", kind: "scalar", T: 9 }, { no: 3, name: "iterations_completed", kind: "scalar", T: 5, opt: true }, { no: 4, name: "total_iterations", kind: "scalar", T: 5, opt: true }, { no: 5, name: "total_tokens", kind: "scalar", T: 5, opt: true }, { no: 6, name: "processed_tokens", kind: "scalar", T: 5, opt: true }, { no: 7, name: "processed_cost", kind: "scalar", T: 2, opt: true }, { no: 8, name: "thinking_tokens", kind: "scalar", T: 5, opt: true }, { no: 9, name: "thinking_cost", kind: "scalar", T: 2, opt: true }]), lN = wa.makeEnum("aiserver.v1.BugBotStatus.Status", [{ no: 0, name: "STATUS_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "STATUS_IN_PROGRESS", localName: "IN_PROGRESS" }, { no: 2, name: "STATUS_IN_PROGRESS_ITERATIONS", localName: "IN_PROGRESS_ITERATIONS" }, { no: 3, name: "STATUS_DONE", localName: "DONE" }, { no: 4, name: "STATUS_ERROR", localName: "ERROR" }]), cN = wa.makeMessageType("aiserver.v1.BugbotTrialNotification", () => [{ no: 1, name: "show", kind: "scalar", T: 8 }, { no: 2, name: "message", kind: "scalar", T: 9, opt: true }, { no: 3, name: "learn_more_url", kind: "scalar", T: 9, opt: true }]), mN = wa.makeMessageType("aiserver.v1.StreamBugBotResponse", () => [{ no: 1, name: "bug_reports", kind: "message", T: Sh, opt: true }, { no: 2, name: "status", kind: "message", T: AN }, { no: 3, name: "summary", kind: "scalar", T: 9, opt: true }, { no: 4, name: "trial_notification", kind: "message", T: cN, opt: true }, { no: 5, name: "num_turns", kind: "scalar", T: 5, opt: true }]), dN = wa.makeMessageType("aiserver.v1.StreamBugBotAgenticClientMessage", () => [{ no: 1, name: "start", kind: "message", T: Dh, oneof: "message" }, { no: 2, name: "exec_client_message", kind: "message", T: PC, oneof: "message" }, { no: 3, name: "exec_client_control_message", kind: "message", T: MC, oneof: "message" }]), gN = wa.makeMessageType("aiserver.v1.StreamBugBotAgenticServerMessage", () => [{ no: 1, name: "bugbot_response", kind: "message", T: mN, oneof: "message" }, { no: 2, name: "exec_server_message", kind: "message", T: LC, oneof: "message" }, { no: 3, name: "exec_server_control_message", kind: "message", T: OC, oneof: "message" }]), uN = wa.makeMessageType("aiserver.v1.UiBestOfNJudgeCandidate", () => [{ no: 1, name: "composer_id", kind: "scalar", T: 9 }, { no: 2, name: "diff", kind: "message", T: uo }]), EN = wa.makeMessageType("aiserver.v1.StreamUiBestOfNJudgeStartRequest", () => [{ no: 1, name: "task", kind: "scalar", T: 9 }, { no: 2, name: "candidates", kind: "message", T: uN, repeated: true }]), pN = wa.makeMessageType("aiserver.v1.UiBestOfNJudgeFinalResult", () => [{ no: 1, name: "winner_composer_id", kind: "scalar", T: 9 }, { no: 2, name: "reasoning", kind: "scalar", T: 9 }]), TN = wa.makeMessageType("aiserver.v1.StreamUiBestOfNJudgeClientMessage", () => [{ no: 1, name: "start", kind: "message", T: EN, oneof: "message" }, { no: 2, name: "exec_client_message", kind: "message", T: PC, oneof: "message" }, { no: 3, name: "exec_client_control_message", kind: "message", T: MC, oneof: "message" }]), kN = wa.makeMessageType("aiserver.v1.StreamUiBestOfNJudgeServerMessage", () => [{ no: 1, name: "final_result", kind: "message", T: pN, oneof: "message" }, { no: 2, name: "exec_server_message", kind: "message", T: LC, oneof: "message" }, { no: 3, name: "exec_server_control_message", kind: "message", T: OC, oneof: "message" }]), IN = wa.makeMessageType("aiserver.v1.ContextRerankingRequest", () => [{ no: 1, name: "current_file", kind: "message", T: Uo, opt: true }, { no: 2, name: "chat_conversation_history", kind: "message", T: yI, repeated: true }, { no: 3, name: "cpp_diff_trajectories", kind: "message", T: _f, repeated: true }, { no: 4, name: "candidate_files", kind: "message", T: dh, repeated: true }]), hN = wa.makeMessageType("aiserver.v1.ContextRerankingResponse", () => [{ no: 1, name: "reranking_scores", kind: "scalar", T: 2, repeated: true }]), _N = wa.makeMessageType("aiserver.v1.NameTabRequest", () => [{ no: 1, name: "messages", kind: "message", T: yI, repeated: true }, { no: 2, name: "is_project", kind: "scalar", T: 8 }, { no: 3, name: "api_key_credentials", kind: "message", T: vk, oneof: "credentials" }, { no: 4, name: "azure_credentials", kind: "message", T: Sk, oneof: "credentials" }, { no: 5, name: "bedrock_credentials", kind: "message", T: Dk, oneof: "credentials" }, { no: 6, name: "conversation_id", kind: "scalar", T: 9 }, { no: 7, name: "is_side_chat", kind: "scalar", T: 8 }]), CN = wa.makeMessageType("aiserver.v1.NameTabResponse", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "reason", kind: "scalar", T: 9 }, { no: 3, name: "icon", kind: "scalar", T: 9 }]), fN = wa.makeMessageType("aiserver.v1.TaskListItem", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9 }, { no: 3, name: "state", kind: "enum", T: wa.getEnumType(QR) }, { no: 4, name: "note", kind: "scalar", T: 9 }]), BN = wa.makeMessageType("aiserver.v1.KeepTaskListRequest", () => [{ no: 1, name: "items", kind: "message", T: fN, repeated: true }, { no: 2, name: "messages", kind: "message", T: yI, repeated: true }, { no: 3, name: "conversation_id", kind: "scalar", T: 9 }]), QN = wa.makeMessageType("aiserver.v1.TaskListChange", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9 }, { no: 3, name: "state", kind: "enum", T: wa.getEnumType(QR) }, { no: 4, name: "is_removed", kind: "scalar", T: 8 }, { no: 5, name: "note", kind: "scalar", T: 9 }]), yN = wa.makeMessageType("aiserver.v1.KeepTaskListResponse", () => [{ no: 1, name: "changes", kind: "message", T: QN, repeated: true }]), RN = wa.makeMessageType("aiserver.v1.TestModelStatusRequest", () => [{ no: 1, name: "model_name", kind: "scalar", T: 9 }]), NN = wa.makeMessageType("aiserver.v1.TestModelStatusResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "latency", kind: "scalar", T: 2 }, { no: 3, name: "ttft", kind: "scalar", T: 2 }, { no: 4, name: "max_time_between_chunks", kind: "scalar", T: 2 }, { no: 5, name: "server_timing", kind: "scalar", T: 9 }]), vN = wa.makeMessageType("aiserver.v1.LlmGatewayModelTestStage", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "status", kind: "scalar", T: 9, opt: true }, { no: 3, name: "error_class", kind: "scalar", T: 9, opt: true }]), SN = wa.makeMessageType("aiserver.v1.LlmGatewayModelTestInspect", () => [{ no: 1, name: "http_status", kind: "scalar", T: 5, opt: true }, { no: 2, name: "request", kind: "scalar", T: 9, opt: true }, { no: 3, name: "response", kind: "scalar", T: 9, opt: true }, { no: 4, name: "latency_ms", kind: "scalar", T: 5, opt: true }]), DN = wa.makeMessageType("aiserver.v1.LlmGatewayModelTestUsage", () => [{ no: 1, name: "billed", kind: "scalar", T: 8 }]), wN = wa.makeMessageType("aiserver.v1.LlmGatewayConnectionTesterRequest", () => [{ no: 1, name: "team_id", kind: "scalar", T: 5 }, { no: 2, name: "model_id", kind: "scalar", T: 9 }, { no: 3, name: "prompt", kind: "scalar", T: 9 }, { no: 4, name: "auth_token_override", kind: "scalar", T: 9, opt: true }, { no: 5, name: "header_overrides", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }]), bN = wa.makeMessageType("aiserver.v1.LlmGatewayConnectionTesterResponse", () => [{ no: 1, name: "stages", kind: "message", T: vN, repeated: true }, { no: 2, name: "inspect", kind: "message", T: SN }, { no: 3, name: "usage", kind: "message", T: DN }]), MN = wa.makeMessageType("aiserver.v1.TestTeamInferenceHookConnectionRequest", () => [{ no: 1, name: "team_id", kind: "scalar", T: 5 }, { no: 2, name: "endpoint_url", kind: "scalar", T: 9 }, { no: 3, name: "headers", kind: "message", T: FN }, { no: 4, name: "verdict_timeout_ms", kind: "scalar", T: 5, opt: true }]), FN = wa.makeMessageType("aiserver.v1.TestTeamInferenceHookConnectionRequest.Headers", () => [{ no: 1, name: "values", kind: "map", K: 9, V: { kind: "scalar", T: 9 } }], { localName: "TestTeamInferenceHookConnectionRequest_Headers" }), ON = wa.makeMessageType("aiserver.v1.TestTeamInferenceHookConnectionResponse", () => [{ no: 1, name: "ok", kind: "scalar", T: 8 }, { no: 2, name: "outcome", kind: "enum", T: wa.getEnumType(yR) }, { no: 3, name: "status_code", kind: "scalar", T: 5, opt: true }, { no: 4, name: "latency_ms", kind: "scalar", T: 3, opt: true }, { no: 5, name: "message", kind: "scalar", T: 9 }, { no: 6, name: "deny_reason", kind: "scalar", T: 9, opt: true }, { no: 7, name: "reference_id", kind: "scalar", T: 9, opt: true }]), UN = wa.makeMessageType("aiserver.v1.EvaluatePromptHookRequest", () => [{ no: 1, name: "prompt", kind: "scalar", T: 9 }, { no: 2, name: "hook_input_json", kind: "message", T: hs }, { no: 3, name: "model_name", kind: "scalar", T: 9, opt: true }]), LN = wa.makeMessageType("aiserver.v1.EvaluatePromptHookResponse", () => [{ no: 1, name: "ok", kind: "scalar", T: 8 }, { no: 2, name: "reason", kind: "scalar", T: 9, opt: true }]), PN = wa.makeMessageType("aiserver.v1.ComputerUseAxElement", () => [{ no: 1, name: "id", kind: "scalar", T: 13 }, { no: 2, name: "role", kind: "scalar", T: 9 }, { no: 3, name: "name", kind: "scalar", T: 9 }, { no: 4, name: "value", kind: "scalar", T: 9, opt: true }, { no: 5, name: "flags", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "actions", kind: "scalar", T: 9, repeated: true }]), xN = wa.makeMessageType("aiserver.v1.ComputerUsePastAction", () => [{ no: 1, name: "kind", kind: "scalar", T: 9 }, { no: 2, name: "element", kind: "message", T: PN, opt: true }, { no: 3, name: "key", kind: "scalar", T: 9, opt: true }, { no: 4, name: "tree_changed", kind: "scalar", T: 8 }]), GN = wa.makeMessageType("aiserver.v1.ComputerUseTreeDiff", () => [{ no: 1, name: "value_changes", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "added", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "removed", kind: "scalar", T: 9, repeated: true }]), YN = wa.makeMessageType("aiserver.v1.ComputerUseDecideNextActionRequest", () => [{ no: 1, name: "attempt_id", kind: "scalar", T: 9 }, { no: 2, name: "step_index", kind: "scalar", T: 13 }, { no: 3, name: "iteration", kind: "scalar", T: 13 }, { no: 4, name: "goal", kind: "scalar", T: 9 }, { no: 5, name: "expect", kind: "scalar", T: 9, opt: true }, { no: 6, name: "candidates", kind: "message", T: PN, repeated: true }, { no: 7, name: "actions", kind: "message", T: xN, repeated: true }, { no: 8, name: "changed_since_last_action", kind: "message", T: GN, opt: true }]), JN = wa.makeMessageType("aiserver.v1.ComputerUseActionChoice", () => [{ no: 1, name: "label", kind: "scalar", T: 9 }, { no: 2, name: "probabilities", kind: "map", K: 9, V: { kind: "scalar", T: 1 } }]), VN = wa.makeMessageType("aiserver.v1.ComputerUseDecideNextActionResponse", () => [{ no: 1, name: "kind", kind: "message", T: JN }, { no: 2, name: "item", kind: "message", T: JN }, { no: 3, name: "key", kind: "message", T: JN }, { no: 4, name: "present", kind: "scalar", T: 1 }, { no: 5, name: "goal_reached", kind: "scalar", T: 1 }, { no: 6, name: "unreachable", kind: "scalar", T: 1 }, { no: 7, name: "last_landed", kind: "scalar", T: 1, opt: true }, { no: 8, name: "expect", kind: "scalar", T: 1, opt: true }]), qN = wa.makeMessageType("aiserver.v1.TryParseTypeScriptTreeSitterRequest", () => [{ no: 1, name: "workspace_relative_path", kind: "scalar", T: 9 }, { no: 2, name: "text", kind: "scalar", T: 9 }]), HN = wa.makeMessageType("aiserver.v1.TryParseTypeScriptTreeSitterResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }]), WN = wa.makeMessageType("aiserver.v1.DevOnlyGetPastRequestIdsRequest", () => [{ no: 1, name: "count", kind: "scalar", T: 5, opt: true }, { no: 2, name: "page", kind: "scalar", T: 5, opt: true }]), KN = wa.makeMessageType("aiserver.v1.DevOnlyPastRequest", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "date_time", kind: "scalar", T: 9 }, { no: 3, name: "model_name", kind: "scalar", T: 9 }, { no: 4, name: "feature_name", kind: "scalar", T: 9 }, { no: 5, name: "s3_uri", kind: "scalar", T: 9 }, { no: 6, name: "status", kind: "scalar", T: 9 }, { no: 7, name: "num_prompt_tokens", kind: "scalar", T: 5 }, { no: 8, name: "num_completion_tokens", kind: "scalar", T: 5 }, { no: 9, name: "api_call_method", kind: "scalar", T: 9 }]), jN = wa.makeMessageType("aiserver.v1.DevOnlyGetPastRequestIdsResponse", () => [{ no: 1, name: "past_requests", kind: "message", T: KN, repeated: true }, { no: 10, name: "total_count", kind: "scalar", T: 5 }, { no: 11, name: "has_more", kind: "scalar", T: 8 }]), XN = wa.makeMessageType("aiserver.v1.GetCodebaseQuestionsResponse", () => [{ no: 1, name: "questions", kind: "scalar", T: 9, repeated: true }]), ZN = wa.makeMessageType("aiserver.v1.AtSymbolOption", () => [{ no: 1, name: "index", kind: "scalar", T: 5 }, { no: 2, name: "text", kind: "scalar", T: 9 }, { no: 3, name: "type", kind: "scalar", T: 9 }]), zN = wa.makeMessageType("aiserver.v1.AtSymbolDependencyInformation", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "from_file", kind: "scalar", T: 9 }]), $N = wa.makeMessageType("aiserver.v1.GetAtSymbolSuggestionsRequest", () => [{ no: 1, name: "current_file_info", kind: "message", T: Uo }, { no: 2, name: "at_symbol_dependencies", kind: "message", T: zN, repeated: true }, { no: 3, name: "at_symbol_options", kind: "message", T: ZN, repeated: true }, { no: 4, name: "user_query", kind: "scalar", T: 9 }, { no: 5, name: "model_details", kind: "message", T: Go }]), ev = wa.makeMessageType("aiserver.v1.GetAtSymbolSuggestionsResponse", () => [{ no: 1, name: "indices", kind: "scalar", T: 5, repeated: true }, { no: 2, name: "explanation", kind: "scalar", T: 9 }]), nv = wa.makeMessageType("aiserver.v1.CurrentFolderFileOrFolder", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "is_folder", kind: "scalar", T: 8 }]), av = wa.makeMessageType("aiserver.v1.GetTerminalCompletionRequest", () => [{ no: 1, name: "current_command", kind: "scalar", T: 9 }, { no: 2, name: "command_history", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "model_name", kind: "scalar", T: 9, opt: true }, { no: 4, name: "file_diff_histories", kind: "message", T: _f, repeated: true }, { no: 5, name: "git_diff", kind: "scalar", T: 9, opt: true }, { no: 6, name: "commit_history", kind: "scalar", T: 9, repeated: true }, { no: 7, name: "past_results", kind: "scalar", T: 9, repeated: true }, { no: 8, name: "model_details", kind: "message", T: Go }, { no: 9, name: "user_platform", kind: "scalar", T: 9 }, { no: 10, name: "current_folder", kind: "scalar", T: 9 }, { no: 11, name: "current_folder_structure", kind: "message", T: nv, repeated: true }, { no: 12, name: "relevant_files", kind: "message", T: Do, repeated: true }]), tv = wa.makeMessageType("aiserver.v1.GetTerminalCompletionResponse", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }]), sv = wa.makeMessageType("aiserver.v1.HeuristicsSelection", () => [{ no: 1, name: "type", kind: "enum", T: wa.getEnumType(ov) }, { no: 2, name: "start_line", kind: "scalar", T: 5 }, { no: 3, name: "end_line", kind: "scalar", T: 5 }]), ov = wa.makeEnum("aiserver.v1.HeuristicsSelection.HeuristicsSelectionType", [{ no: 0, name: "HEURISTICS_SELECTION_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "HEURISTICS_SELECTION_TYPE_GROUP", localName: "GROUP" }, { no: 2, name: "HEURISTICS_SELECTION_TYPE_LINE", localName: "LINE" }, { no: 3, name: "HEURISTICS_SELECTION_TYPE_FOLDING", localName: "FOLDING" }]), rv = wa.makeMessageType("aiserver.v1.CalculateAutoSelectionRequest", () => [{ no: 1, name: "current_file_info", kind: "message", T: Uo }, { no: 2, name: "cursor_position", kind: "message", T: ro }, { no: 3, name: "selection_range", kind: "message", T: ko }, { no: 4, name: "model_details", kind: "message", T: Go }, { no: 5, name: "heuristics_selections", kind: "message", T: sv, repeated: true }]), iv = wa.makeMessageType("aiserver.v1.AutoSelectionInstructions", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "start_line", kind: "scalar", T: 5 }, { no: 3, name: "end_line", kind: "scalar", T: 5 }]), Av = wa.makeMessageType("aiserver.v1.AutoSelectionResult", () => [{ no: 1, name: "start_line", kind: "scalar", T: 5 }, { no: 2, name: "end_line", kind: "scalar", T: 5 }, { no: 3, name: "instructions", kind: "message", T: iv, repeated: true }]), lv = wa.makeMessageType("aiserver.v1.CalculateAutoSelectionResponse", () => [{ no: 1, name: "results", kind: "message", T: Av, repeated: true }]), cv = wa.makeMessageType("aiserver.v1.BackgroundCmdKRequest", () => [{ no: 1, name: "instruction", kind: "scalar", T: 9 }, { no: 2, name: "current_file", kind: "message", T: Uo }, { no: 3, name: "selection_range", kind: "message", T: ko }, { no: 4, name: "type", kind: "enum", T: wa.getEnumType(mv) }, { no: 5, name: "proposed_change_history", kind: "message", T: Ev, repeated: true }, { no: 6, name: "related_code_blocks", kind: "message", T: Ro, repeated: true }, { no: 7, name: "diff_history", kind: "message", T: _f, repeated: true }, { no: 8, name: "linter_errors", kind: "message", T: dv, repeated: true }, { no: 9, name: "useful_types", kind: "message", T: pv, repeated: true }, { no: 10, name: "recently_viewed_files", kind: "message", T: Tv, repeated: true }, { no: 11, name: "recent_diffs", kind: "message", T: Iv, repeated: true }, { no: 12, name: "multiple_completions", kind: "scalar", T: 8, opt: true }]), mv = wa.makeEnum("aiserver.v1.BackgroundCmdKRequest.Type", [{ no: 0, name: "TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TYPE_REFLECT", localName: "REFLECT" }, { no: 2, name: "TYPE_LOOP_ON_LINTS", localName: "LOOP_ON_LINTS" }, { no: 3, name: "TYPE_CHAT_AND_APPLY", localName: "CHAT_AND_APPLY" }, { no: 4, name: "TYPE_COALESCE_GENERATIONS", localName: "COALESCE_GENERATIONS" }, { no: 5, name: "TYPE_CODEBASE_CHUNKS", localName: "CODEBASE_CHUNKS" }, { no: 6, name: "TYPE_SPEC_AND_APPLY", localName: "SPEC_AND_APPLY" }, { no: 7, name: "TYPE_ASK_CODEBASE", localName: "ASK_CODEBASE" }, { no: 8, name: "TYPE_FINETUNED_INSTRUCTIONS", localName: "FINETUNED_INSTRUCTIONS" }, { no: 9, name: "TYPE_USEFUL_TYPES", localName: "USEFUL_TYPES" }, { no: 10, name: "TYPE_CHAT_AND_APPLY_UNDERSPECIFIED", localName: "CHAT_AND_APPLY_UNDERSPECIFIED" }]), dv = wa.makeMessageType("aiserver.v1.BackgroundCmdKRequest.Lint", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "severity", kind: "scalar", T: 9 }, { no: 3, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 4, name: "start_line_number_one_indexed", kind: "scalar", T: 5 }, { no: 5, name: "start_column_one_indexed", kind: "scalar", T: 5 }, { no: 6, name: "end_line_number_inclusive_one_indexed", kind: "scalar", T: 5 }, { no: 7, name: "end_column_one_indexed", kind: "scalar", T: 5 }, { no: 9, name: "quick_fixes", kind: "message", T: gv, repeated: true }], { localName: "BackgroundCmdKRequest_Lint" }), gv = wa.makeMessageType("aiserver.v1.BackgroundCmdKRequest.Lint.QuickFix", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "kind", kind: "scalar", T: 9 }, { no: 3, name: "is_preferred", kind: "scalar", T: 8 }, { no: 4, name: "edits", kind: "message", T: uv, repeated: true }], { localName: "BackgroundCmdKRequest_Lint_QuickFix" }), uv = wa.makeMessageType("aiserver.v1.BackgroundCmdKRequest.Lint.QuickFix.Edit", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "text", kind: "scalar", T: 9 }, { no: 3, name: "start_line_number_one_indexed", kind: "scalar", T: 5 }, { no: 4, name: "start_column_one_indexed", kind: "scalar", T: 5 }, { no: 5, name: "end_line_number_inclusive_one_indexed", kind: "scalar", T: 5 }, { no: 6, name: "end_column_one_indexed", kind: "scalar", T: 5 }], { localName: "BackgroundCmdKRequest_Lint_QuickFix_Edit" }), Ev = wa.makeMessageType("aiserver.v1.BackgroundCmdKRequest.ProposedChange", () => [{ no: 1, name: "change", kind: "scalar", T: 9 }, { no: 2, name: "linter_errors", kind: "message", T: dv, repeated: true }], { localName: "BackgroundCmdKRequest_ProposedChange" }), pv = wa.makeMessageType("aiserver.v1.BackgroundCmdKRequest.UsefulType", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "start_line", kind: "scalar", T: 5 }, { no: 3, name: "text", kind: "scalar", T: 9 }, { no: 4, name: "score", kind: "scalar", T: 1, opt: true }], { localName: "BackgroundCmdKRequest_UsefulType" }), Tv = wa.makeMessageType("aiserver.v1.BackgroundCmdKRequest.RecentlyViewedFile", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "contents", kind: "scalar", T: 9 }, { no: 3, name: "visible_ranges", kind: "message", T: kv, repeated: true }], { localName: "BackgroundCmdKRequest_RecentlyViewedFile" }), kv = wa.makeMessageType("aiserver.v1.BackgroundCmdKRequest.RecentlyViewedFile.VisibleRange", () => [{ no: 1, name: "start_line_number_inclusive", kind: "scalar", T: 5 }, { no: 2, name: "end_line_number_exclusive", kind: "scalar", T: 5 }, { no: 3, name: "viewed_at", kind: "scalar", T: 5, opt: true }, { no: 4, name: "global_order_descending", kind: "scalar", T: 5, opt: true }], { localName: "BackgroundCmdKRequest_RecentlyViewedFile_VisibleRange" }), Iv = wa.makeMessageType("aiserver.v1.BackgroundCmdKRequest.Diff", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "diff", kind: "scalar", T: 9 }], { localName: "BackgroundCmdKRequest_Diff" }), hv = wa.makeMessageType("aiserver.v1.BackgroundCmdKResponse", () => [{ no: 1, name: "proposed_change", kind: "scalar", T: 9 }]), _v = wa.makeMessageType("aiserver.v1.BackgroundCmdKEvalRequest", () => [{ no: 1, name: "instruction", kind: "scalar", T: 9 }, { no: 2, name: "current_file", kind: "message", T: Uo }, { no: 3, name: "selection_range", kind: "message", T: ko }, { no: 4, name: "ground_truth", kind: "scalar", T: 9 }, { no: 5, name: "experiment", kind: "enum", T: wa.getEnumType(Cv) }, { no: 6, name: "run_automated_eval", kind: "scalar", T: 8 }, { no: 7, name: "proposed_change_history", kind: "message", T: yv, repeated: true }, { no: 8, name: "commit_notes", kind: "message", T: cr, repeated: true }, { no: 9, name: "related_code_blocks", kind: "message", T: Ro, repeated: true }]), Cv = wa.makeEnum("aiserver.v1.BackgroundCmdKEvalRequest.Experiment", [{ no: 0, name: "EXPERIMENT_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "EXPERIMENT_REFLECT", localName: "REFLECT" }, { no: 2, name: "EXPERIMENT_CMD_K_ORIGINAL_RADIUS", localName: "CMD_K_ORIGINAL_RADIUS" }, { no: 3, name: "EXPERIMENT_LOOP_ON_LINTS", localName: "LOOP_ON_LINTS" }, { no: 4, name: "EXPERIMENT_CHAT_AND_APPLY", localName: "CHAT_AND_APPLY" }, { no: 5, name: "EXPERIMENT_COMMIT_NOTES", localName: "COMMIT_NOTES" }, { no: 6, name: "EXPERIMENT_COALESCE_GENERATIONS", localName: "COALESCE_GENERATIONS" }, { no: 7, name: "EXPERIMENT_REWORD_INSTRUCTIONS", localName: "REWORD_INSTRUCTIONS" }, { no: 8, name: "EXPERIMENT_CODEBASE_CHUNKS", localName: "CODEBASE_CHUNKS" }, { no: 9, name: "EXPERIMENT_SPEC_AND_APPLY", localName: "SPEC_AND_APPLY" }, { no: 10, name: "EXPERIMENT_ASK_CODEBASE", localName: "ASK_CODEBASE" }]), fv = wa.makeMessageType("aiserver.v1.BackgroundCmdKEvalRequest.Lint", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "severity", kind: "scalar", T: 9 }, { no: 3, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 4, name: "start_line_number_one_indexed", kind: "scalar", T: 5 }, { no: 5, name: "start_column_one_indexed", kind: "scalar", T: 5 }, { no: 6, name: "end_line_number_inclusive_one_indexed", kind: "scalar", T: 5 }, { no: 7, name: "end_column_one_indexed", kind: "scalar", T: 5 }, { no: 9, name: "quick_fixes", kind: "message", T: Bv, repeated: true }], { localName: "BackgroundCmdKEvalRequest_Lint" }), Bv = wa.makeMessageType("aiserver.v1.BackgroundCmdKEvalRequest.Lint.QuickFix", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "kind", kind: "scalar", T: 9 }, { no: 3, name: "is_preferred", kind: "scalar", T: 8 }, { no: 4, name: "edits", kind: "message", T: Qv, repeated: true }], { localName: "BackgroundCmdKEvalRequest_Lint_QuickFix" }), Qv = wa.makeMessageType("aiserver.v1.BackgroundCmdKEvalRequest.Lint.QuickFix.Edit", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "text", kind: "scalar", T: 9 }, { no: 3, name: "start_line_number_one_indexed", kind: "scalar", T: 5 }, { no: 4, name: "start_column_one_indexed", kind: "scalar", T: 5 }, { no: 5, name: "end_line_number_inclusive_one_indexed", kind: "scalar", T: 5 }, { no: 6, name: "end_column_one_indexed", kind: "scalar", T: 5 }], { localName: "BackgroundCmdKEvalRequest_Lint_QuickFix_Edit" }), yv = wa.makeMessageType("aiserver.v1.BackgroundCmdKEvalRequest.ProposedChange", () => [{ no: 1, name: "change", kind: "scalar", T: 9 }, { no: 2, name: "linter_errors", kind: "message", T: fv, repeated: true }], { localName: "BackgroundCmdKEvalRequest_ProposedChange" }), Rv = wa.makeMessageType("aiserver.v1.BackgroundCmdKEvalResponse", () => [{ no: 1, name: "proposed_change", kind: "scalar", T: 9 }]), Nv = wa.makeMessageType("aiserver.v1.GetThoughtAnnotationRequest", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }]), vv = wa.makeMessageType("aiserver.v1.UpdateVscodeProfileRequest", () => [{ no: 1, name: "machine_id", kind: "scalar", T: 9 }, { no: 2, name: "workspace_extensions", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "extensions", kind: "scalar", T: 9, repeated: true }]), Sv = wa.makeMessageType("aiserver.v1.UpdateVscodeProfileResponse", []), Dv = wa.makeMessageType("aiserver.v1.GetThoughtAnnotationResponse", () => [{ no: 1, name: "thought_annotation", kind: "message", T: wv }]), wv = wa.makeMessageType("aiserver.v1.AiThoughtAnnotation", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "auth_id", kind: "scalar", T: 9 }, { no: 3, name: "debug_info", kind: "message", T: Io }, { no: 4, name: "thought", kind: "scalar", T: 9 }]), bv = wa.makeMessageType("aiserver.v1.BulkEmbedRequest", () => [{ no: 1, name: "texts", kind: "scalar", T: 9, repeated: true }]), Mv = wa.makeMessageType("aiserver.v1.BulkEmbedResponse", () => [{ no: 1, name: "embeddings", kind: "message", T: Fv, repeated: true }]), Fv = wa.makeMessageType("aiserver.v1.EmbeddingResponse", () => [{ no: 1, name: "embedding", kind: "scalar", T: 1, repeated: true }]), Ov = wa.makeMessageType("aiserver.v1.TakeNotesOnCommitDiffRequest", () => [{ no: 1, name: "diff", kind: "message", T: dr }, { no: 2, name: "commit_hash", kind: "scalar", T: 9 }]), Uv = wa.makeMessageType("aiserver.v1.TakeNotesOnCommitDiffResponse", () => [{ no: 1, name: "notes", kind: "message", T: mr, repeated: true }]), Lv = wa.makeMessageType("aiserver.v1.IsCursorPredictionEnabledRequest", []), Pv = wa.makeMessageType("aiserver.v1.IsCursorPredictionEnabledResponse", () => [{ no: 1, name: "enabled", kind: "scalar", T: 8 }]), xv = wa.makeMessageType("aiserver.v1.StreamNextCursorPredictionRequest", () => [{ no: 1, name: "current_file", kind: "message", T: Uo }, { no: 2, name: "diff_history", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "model_name", kind: "scalar", T: 9, opt: true }, { no: 4, name: "linter_errors", kind: "message", T: Ho, opt: true }, { no: 13, name: "context_items", kind: "message", T: Bf, repeated: true }, { no: 5, name: "diff_history_keys", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "give_debug_output", kind: "scalar", T: 8, opt: true }, { no: 7, name: "file_diff_histories", kind: "message", T: _f, repeated: true }, { no: 8, name: "merged_diff_histories", kind: "message", T: _f, repeated: true }, { no: 9, name: "block_diff_patches", kind: "message", T: lQ, repeated: true }, { no: 10, name: "is_nightly", kind: "scalar", T: 8, opt: true }, { no: 11, name: "is_debug", kind: "scalar", T: 8, opt: true }, { no: 12, name: "immediately_ack", kind: "scalar", T: 8, opt: true }, { no: 17, name: "enable_more_context", kind: "scalar", T: 8, opt: true }, { no: 14, name: "parameter_hints", kind: "message", T: Qf, repeated: true }, { no: 15, name: "lsp_contexts", kind: "message", T: WC, repeated: true }, { no: 16, name: "cpp_intent_info", kind: "message", T: ZC, opt: true }, { no: 18, name: "workspace_id", kind: "scalar", T: 9, opt: true }, { no: 19, name: "file_sync_updates", kind: "message", T: KC, repeated: true }, { no: 20, name: "file_visible_ranges", kind: "message", T: Yv, repeated: true }]), Gv = wa.makeMessageType("aiserver.v1.StreamNextCursorPredictionRequest.VisibleRange", () => [{ no: 1, name: "start_line_number_inclusive", kind: "scalar", T: 5 }, { no: 2, name: "end_line_number_exclusive", kind: "scalar", T: 5 }], { localName: "StreamNextCursorPredictionRequest_VisibleRange" }), Yv = wa.makeMessageType("aiserver.v1.StreamNextCursorPredictionRequest.FileVisibleRange", () => [{ no: 1, name: "filename", kind: "scalar", T: 9 }, { no: 2, name: "visible_ranges", kind: "message", T: Gv, repeated: true }], { localName: "StreamNextCursorPredictionRequest_FileVisibleRange" }), Jv = wa.makeMessageType("aiserver.v1.StreamNextCursorPredictionResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9, oneof: "response" }, { no: 2, name: "line_number", kind: "scalar", T: 5, oneof: "response" }, { no: 3, name: "is_not_in_range", kind: "scalar", T: 8, oneof: "response" }, { no: 4, name: "file_name", kind: "scalar", T: 9, oneof: "response" }]), Vv = wa.makeMessageType("aiserver.v1.StreamWebCmdKV1Request", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "file_contents", kind: "scalar", T: 9 }, { no: 3, name: "prompt", kind: "scalar", T: 9 }, { no: 4, name: "selection_range", kind: "message", T: Bo }, { no: 5, name: "model_details", kind: "message", T: Go }, { no: 10, name: "images", kind: "message", T: sr, repeated: true }]), qv = wa.makeMessageType("aiserver.v1.StreamWebCmdKV1Response", () => [{ no: 1, name: "cmd_k_response", kind: "message", T: Fy }]), Hv = wa.makeMessageType("aiserver.v1.ContextScoresRequest", () => [{ no: 1, name: "source_range", kind: "scalar", T: 9 }, { no: 2, name: "method_signatures", kind: "scalar", T: 9, repeated: true }]), Wv = wa.makeMessageType("aiserver.v1.ContextScoresResponse", () => [{ no: 1, name: "scores", kind: "scalar", T: 2, repeated: true }]), Kv = wa.makeMessageType("aiserver.v1.ReportGenerationFeedbackRequest", () => [{ no: 1, name: "feedback_type", kind: "enum", T: wa.getEnumType(jv) }, { no: 2, name: "request_id", kind: "scalar", T: 9 }, { no: 3, name: "comment", kind: "scalar", T: 9, opt: true }, { no: 4, name: "stars_overall", kind: "scalar", T: 5, opt: true }, { no: 6, name: "stars_speed", kind: "scalar", T: 5, opt: true }, { no: 7, name: "stars_accuracy", kind: "scalar", T: 5, opt: true }, { no: 8, name: "stars_style_taste", kind: "scalar", T: 5, opt: true }, { no: 9, name: "never_ask_again", kind: "scalar", T: 8, opt: true }, { no: 10, name: "did_popup", kind: "scalar", T: 8, opt: true }, { no: 11, name: "source", kind: "enum", T: wa.getEnumType(Xv) }]), jv = wa.makeEnum("aiserver.v1.ReportGenerationFeedbackRequest.FeedbackType", [{ no: 0, name: "FEEDBACK_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "FEEDBACK_TYPE_THUMBS_UP", localName: "THUMBS_UP" }, { no: 2, name: "FEEDBACK_TYPE_THUMBS_DOWN", localName: "THUMBS_DOWN" }, { no: 3, name: "FEEDBACK_TYPE_NEUTRAL", localName: "NEUTRAL" }, { no: 4, name: "FEEDBACK_TYPE_STARS", localName: "STARS" }]), Xv = wa.makeEnum("aiserver.v1.ReportGenerationFeedbackRequest.Source", [{ no: 0, name: "SOURCE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SOURCE_INLINE", localName: "INLINE" }, { no: 2, name: "SOURCE_VIBEOMETER", localName: "VIBEOMETER" }]), Zv = wa.makeMessageType("aiserver.v1.ReportGenerationFeedbackResponse", []), zv = wa.makeMessageType("aiserver.v1.ReportAgentFeedbackRequest", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "sentiment", kind: "enum", T: wa.getEnumType($v) }, { no: 3, name: "categories", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "comment", kind: "scalar", T: 9, opt: true }, { no: 5, name: "canonical_model_name", kind: "scalar", T: 9, opt: true }, { no: 6, name: "source", kind: "enum", T: wa.getEnumType(eS), opt: true }, { no: 7, name: "variant", kind: "enum", T: wa.getEnumType(nS), opt: true }]), $v = wa.makeEnum("aiserver.v1.ReportAgentFeedbackRequest.Sentiment", [{ no: 0, name: "SENTIMENT_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SENTIMENT_UP", localName: "UP" }, { no: 2, name: "SENTIMENT_DOWN", localName: "DOWN" }, { no: 3, name: "SENTIMENT_RETRACTED", localName: "RETRACTED" }]), eS = wa.makeEnum("aiserver.v1.ReportAgentFeedbackRequest.Source", [{ no: 0, name: "SOURCE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "SOURCE_IDE", localName: "IDE" }, { no: 2, name: "SOURCE_GLASS", localName: "GLASS" }, { no: 3, name: "SOURCE_SAND", localName: "SAND" }, { no: 4, name: "SOURCE_WEB", localName: "WEB" }]), nS = wa.makeEnum("aiserver.v1.ReportAgentFeedbackRequest.Variant", [{ no: 0, name: "VARIANT_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "VARIANT_PROMINENT", localName: "PROMINENT" }, { no: 2, name: "VARIANT_INLINE", localName: "INLINE" }]), aS = wa.makeMessageType("aiserver.v1.ReportAgentFeedbackResponse", []), tS = wa.makeMessageType("aiserver.v1.ReportAgentMessageFeedbackRequest", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "bubble_id", kind: "scalar", T: 9 }, { no: 3, name: "composer_id", kind: "scalar", T: 9, opt: true }, { no: 4, name: "selected_text", kind: "scalar", T: 9 }, { no: 5, name: "selection_start", kind: "scalar", T: 5, opt: true }, { no: 6, name: "selection_end", kind: "scalar", T: 5, opt: true }, { no: 7, name: "comment", kind: "scalar", T: 9 }, { no: 8, name: "canonical_model_name", kind: "scalar", T: 9, opt: true }, { no: 9, name: "category", kind: "scalar", T: 9, opt: true }, { no: 10, name: "sentiment", kind: "scalar", T: 9, opt: true }]), sS = wa.makeMessageType("aiserver.v1.ReportAgentMessageFeedbackResponse", () => [{ no: 1, name: "s3_uri", kind: "scalar", T: 9 }]), oS = wa.makeMessageType("aiserver.v1.ReportAutoRoutingResultFeedbackRequest", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "rating", kind: "scalar", T: 9 }, { no: 3, name: "source", kind: "scalar", T: 9 }, { no: 4, name: "displayed_model_label", kind: "scalar", T: 9 }]), rS = wa.makeMessageType("aiserver.v1.ReportAutoRoutingResultFeedbackResponse", []), iS = wa.makeMessageType("aiserver.v1.ShowWelcomeScreenRequest", []), AS = wa.makeMessageType("aiserver.v1.ShowWelcomeScreenResponse", () => [{ no: 1, name: "enable_cards", kind: "scalar", T: 9, repeated: true }]), lS = wa.makeMessageType("aiserver.v1.AiProjectRequest", () => [{ no: 1, name: "description", kind: "scalar", T: 9 }, { no: 2, name: "model_details", kind: "message", T: Go }]), cS = wa.makeMessageType("aiserver.v1.AiProjectResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }]), mS = wa.makeMessageType("aiserver.v1.ToCamelCaseRequest", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }]), dS = wa.makeMessageType("aiserver.v1.ToCamelCaseResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }]), gS = wa.makeMessageType("aiserver.v1.StreamPriomptPromptRequest", () => [{ no: 2, name: "prompt_props", kind: "scalar", T: 9 }, { no: 3, name: "prompt_props_type_name", kind: "scalar", T: 9 }, { no: 5, name: "skip_login_check", kind: "scalar", T: 8 }, { no: 4, name: "model_details", kind: "message", T: Go }]), uS = wa.makeMessageType("aiserver.v1.StreamPriomptPromptResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }]), ES = wa.makeMessageType("aiserver.v1.CheckFeatureStatusRequest", () => [{ no: 1, name: "feature_name", kind: "scalar", T: 9 }]), pS = wa.makeMessageType("aiserver.v1.CheckFeaturesStatusRequest", () => [{ no: 1, name: "feature_names", kind: "scalar", T: 9, repeated: true }]), TS = wa.makeMessageType("aiserver.v1.CheckFeaturesStatusResponse", () => [{ no: 1, name: "feature_statuses", kind: "message", T: kS, repeated: true }]), kS = wa.makeMessageType("aiserver.v1.CheckFeaturesStatusResponse.FeatureStatus", () => [{ no: 1, name: "feature_name", kind: "scalar", T: 9 }, { no: 2, name: "enabled", kind: "scalar", T: 8 }], { localName: "CheckFeaturesStatusResponse_FeatureStatus" }), IS = wa.makeMessageType("aiserver.v1.GetEffectiveTokenLimitRequest", () => [{ no: 1, name: "model_details", kind: "message", T: Go }]), hS = wa.makeMessageType("aiserver.v1.GetEffectiveTokenLimitResponse", () => [{ no: 1, name: "token_limit", kind: "scalar", T: 5 }]), _S = wa.makeMessageType("aiserver.v1.CheckFeatureStatusResponse", () => [{ no: 1, name: "enabled", kind: "scalar", T: 8 }]), CS = wa.makeMessageType("aiserver.v1.CheckNumberConfigRequest", () => [{ no: 1, name: "key", kind: "scalar", T: 9 }]), fS = wa.makeMessageType("aiserver.v1.CheckNumberConfigResponse", () => [{ no: 1, name: "value", kind: "scalar", T: 5 }]), BS = wa.makeMessageType("aiserver.v1.CheckNumberConfigsRequest", () => [{ no: 1, name: "config_names", kind: "scalar", T: 9, repeated: true }]), QS = wa.makeMessageType("aiserver.v1.CheckNumberConfigsResponse", () => [{ no: 1, name: "configs", kind: "message", T: yS, repeated: true }]), yS = wa.makeMessageType("aiserver.v1.CheckNumberConfigsResponse.Config", () => [{ no: 1, name: "config_name", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 5 }], { localName: "CheckNumberConfigsResponse_Config" }), RS = wa.makeMessageType("aiserver.v1.IntentPredictionRequest", () => [{ no: 1, name: "messages", kind: "message", T: yI, repeated: true }, { no: 2, name: "context_options", kind: "message", T: wS }, { no: 3, name: "model_details", kind: "message", T: Go }]), NS = wa.makeMessageType("aiserver.v1.IntentPredictionResponse", () => [{ no: 1, name: "chosen_documentation", kind: "message", T: vS }, { no: 2, name: "chosen_file_contents", kind: "message", T: SS }, { no: 3, name: "chosen_linter_diagnostics", kind: "message", T: DS }, { no: 4, name: "use_global_context", kind: "scalar", T: 8 }, { no: 5, name: "use_with_folder_context", kind: "scalar", T: 8 }]), vS = wa.makeMessageType("aiserver.v1.IntentPredictionResponse.ChosenDocumentation", () => [{ no: 1, name: "doc_indices", kind: "scalar", T: 5, repeated: true }, { no: 2, name: "doc_identifiers", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "doc_names", kind: "scalar", T: 9, repeated: true }], { localName: "IntentPredictionResponse_ChosenDocumentation" }), SS = wa.makeMessageType("aiserver.v1.IntentPredictionResponse.ChosenFileContents", [], { localName: "IntentPredictionResponse_ChosenFileContents" }), DS = wa.makeMessageType("aiserver.v1.IntentPredictionResponse.ChosenLinterDiagnostics", () => [{ no: 1, name: "diagnostic_indices", kind: "scalar", T: 5, repeated: true }], { localName: "IntentPredictionResponse_ChosenLinterDiagnostics" }), wS = wa.makeMessageType("aiserver.v1.ContextOptions", () => [{ no: 1, name: "all_documentation", kind: "message", T: bS }, { no: 2, name: "current_file_contents", kind: "message", T: FS }, { no: 3, name: "linter_diagnostics", kind: "message", T: OS }, { no: 4, name: "global_context", kind: "message", T: LS }]), bS = wa.makeMessageType("aiserver.v1.ContextOptions.AllDocumentation", () => [{ no: 1, name: "available_docs", kind: "message", T: MS, repeated: true }], { localName: "ContextOptions_AllDocumentation" }), MS = wa.makeMessageType("aiserver.v1.ContextOptions.AllDocumentation.Documentation", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "url", kind: "scalar", T: 9 }, { no: 3, name: "identifier", kind: "scalar", T: 9 }], { localName: "ContextOptions_AllDocumentation_Documentation" }), FS = wa.makeMessageType("aiserver.v1.ContextOptions.CurrentFileContents", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "contents", kind: "scalar", T: 9 }, { no: 3, name: "cursor_position", kind: "message", T: ro }, { no: 4, name: "dataframes", kind: "message", T: Jo, repeated: true }, { no: 5, name: "language_id", kind: "scalar", T: 9 }, { no: 6, name: "selection", kind: "message", T: Qo }], { localName: "ContextOptions_CurrentFileContents" }), OS = wa.makeMessageType("aiserver.v1.ContextOptions.LinterDiagnostics", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "contents", kind: "scalar", T: 9 }, { no: 3, name: "diagnostics", kind: "message", T: US, repeated: true }], { localName: "ContextOptions_LinterDiagnostics" }), US = wa.makeMessageType("aiserver.v1.ContextOptions.LinterDiagnostics.Diagnostic", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "source", kind: "scalar", T: 9 }, { no: 3, name: "range", kind: "message", T: Qo }, { no: 4, name: "relative_workspace_path", kind: "scalar", T: 9 }], { localName: "ContextOptions_LinterDiagnostics_Diagnostic" }), LS = wa.makeMessageType("aiserver.v1.ContextOptions.GlobalContext", [], { localName: "ContextOptions_GlobalContext" }), PS = wa.makeMessageType("aiserver.v1.StreamCursorTutorRequest", () => [{ no: 1, name: "conversation", kind: "message", T: yI, repeated: true }, { no: 2, name: "model_details", kind: "message", T: Go }]), xS = wa.makeMessageType("aiserver.v1.StreamCursorTutorResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }]), GS = wa.makeMessageType("aiserver.v1.ModelQueryRequest", () => [{ no: 1, name: "current_file", kind: "message", T: Uo }, { no: 2, name: "conversation", kind: "message", T: yI, repeated: true }, { no: 3, name: "repositories", kind: "message", T: OA, repeated: true }, { no: 4, name: "explicit_context", kind: "message", T: jo }, { no: 5, name: "workspace_root_path", kind: "scalar", T: 9, opt: true }, { no: 6, name: "code_blocks", kind: "message", T: Ro, repeated: true }, { no: 7, name: "model_details", kind: "message", T: Go }, { no: 8, name: "query_type", kind: "enum", T: wa.getEnumType(YS) }, { no: 9, name: "repository_info", kind: "message", T: OA }, { no: 10, name: "faster_and_stupider", kind: "scalar", T: 8 }, { no: 11, name: "use_globs", kind: "scalar", T: 8 }]), YS = wa.makeEnum("aiserver.v1.ModelQueryRequest.QueryType", [{ no: 0, name: "QUERY_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "QUERY_TYPE_KEYWORDS", localName: "KEYWORDS" }, { no: 2, name: "QUERY_TYPE_EMBEDDINGS", localName: "EMBEDDINGS" }]), JS = wa.makeMessageType("aiserver.v1.ModelQueryResponse", () => [{ no: 1, name: "queries", kind: "message", T: VS, repeated: true }]), VS = wa.makeMessageType("aiserver.v1.ModelQueryResponse.Query", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }, { no: 2, name: "successful_parse", kind: "scalar", T: 8 }, { no: 3, name: "good_file_extensions", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "bad_file_extensions", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "good_paths", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "bad_paths", kind: "scalar", T: 9, repeated: true }], { localName: "ModelQueryResponse_Query" }), qS = wa.makeMessageType("aiserver.v1.ModelQueryResponseV2", () => [{ no: 1, name: "query", kind: "message", T: HS, oneof: "query_or_reasoning" }, { no: 2, name: "reasoning", kind: "scalar", T: 9, oneof: "query_or_reasoning" }]), HS = wa.makeMessageType("aiserver.v1.ModelQueryResponseV2.QueryItem", () => [{ no: 1, name: "text", kind: "scalar", T: 9, oneof: "partial_query" }, { no: 2, name: "glob", kind: "scalar", T: 9, oneof: "partial_query" }, { no: 3, name: "index", kind: "scalar", T: 5 }], { localName: "ModelQueryResponseV2_QueryItem" }), WS = wa.makeMessageType("aiserver.v1.ApiDetails", () => [{ no: 1, name: "api_key", kind: "scalar", T: 9 }, { no: 2, name: "enable_ghost_mode", kind: "scalar", T: 8, opt: true }]), KS = wa.makeMessageType("aiserver.v1.FullFileSearchResult", () => [{ no: 1, name: "results", kind: "message", T: FA, repeated: true }]), jS = wa.makeMessageType("aiserver.v1.CodeSearchResult", () => [{ no: 1, name: "results", kind: "message", T: MA, repeated: true }, { no: 2, name: "all_files", kind: "message", T: Do, repeated: true }]), XS = wa.makeMessageType("aiserver.v1.RerankerRequest", () => [{ no: 1, name: "code_results", kind: "message", T: MA, repeated: true }, { no: 2, name: "query", kind: "scalar", T: 9 }, { no: 3, name: "num_blocks", kind: "scalar", T: 5 }, { no: 4, name: "current_file", kind: "message", T: Uo }, { no: 5, name: "conversation", kind: "message", T: yI, repeated: true }, { no: 6, name: "api_details", kind: "message", T: WS }, { no: 7, name: "file_search_results", kind: "message", T: KS, oneof: "context_results" }, { no: 8, name: "code_search_results", kind: "message", T: jS, oneof: "context_results" }]), ZS = wa.makeMessageType("aiserver.v1.RerankerResponse", () => [{ no: 1, name: "results", kind: "message", T: MA, repeated: true }]), zS = wa.makeMessageType("aiserver.v1.GenerateTldrRequest", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }]), $S = wa.makeMessageType("aiserver.v1.GenerateTldrResponse", () => [{ no: 1, name: "summary", kind: "scalar", T: 9 }, { no: 2, name: "all", kind: "scalar", T: 9 }]), eD = wa.makeMessageType("aiserver.v1.TaskStreamChatContextRequest", () => [{ no: 1, name: "current_file", kind: "message", T: Uo }, { no: 2, name: "conversation", kind: "message", T: yI, repeated: true }, { no: 3, name: "repositories", kind: "message", T: OA, repeated: true }, { no: 4, name: "explicit_context", kind: "message", T: jo }, { no: 5, name: "workspace_root_path", kind: "scalar", T: 9, opt: true }, { no: 6, name: "code_blocks", kind: "message", T: Ro, repeated: true }, { no: 7, name: "model_details", kind: "message", T: Go }, { no: 8, name: "documentation_identifiers", kind: "scalar", T: 9, repeated: true }, { no: 14, name: "linter_errors", kind: "message", T: Ho }, { no: 15, name: "advanced_codebase_context", kind: "message", T: nD }, { no: 16, name: "is_eval", kind: "scalar", T: 8, opt: true }, { no: 17, name: "request_id", kind: "scalar", T: 9 }, { no: 18, name: "desired_token_limit", kind: "scalar", T: 5, opt: true }]), nD = wa.makeMessageType("aiserver.v1.AdvancedCodebaseContextOptions", () => [{ no: 1, name: "num_results_per_search", kind: "scalar", T: 5 }, { no: 2, name: "include_pattern", kind: "scalar", T: 9, opt: true }, { no: 3, name: "exclude_pattern", kind: "scalar", T: 9, opt: true }, { no: 4, name: "reranker", kind: "enum", T: wa.getEnumType(DA) }, { no: 5, name: "index_id", kind: "scalar", T: 9, opt: true }, { no: 6, name: "reasoning_step", kind: "scalar", T: 8 }, { no: 7, name: "rechunker", kind: "enum", T: wa.getEnumType(bA), opt: true }]), aD = wa.makeMessageType("aiserver.v1.TaskStreamChatContextResponse", () => [{ no: 1, name: "output", kind: "message", T: tD, oneof: "response" }, { no: 2, name: "gathering_step", kind: "message", T: oD, oneof: "response" }, { no: 3, name: "gathering_file", kind: "message", T: sD, oneof: "response" }, { no: 4, name: "reranking_step", kind: "message", T: rD, oneof: "response" }, { no: 5, name: "reranking_file", kind: "message", T: iD, oneof: "response" }, { no: 6, name: "reasoning_step", kind: "message", T: AD, oneof: "response" }, { no: 7, name: "reasoning_substep", kind: "message", T: lD, oneof: "response" }]), tD = wa.makeMessageType("aiserver.v1.TaskStreamChatContextResponse.Output", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }], { localName: "TaskStreamChatContextResponse_Output" }), sD = wa.makeMessageType("aiserver.v1.TaskStreamChatContextResponse.GatheringFile", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: ko }, { no: 3, name: "step_index", kind: "scalar", T: 5 }, { no: 4, name: "score", kind: "scalar", T: 2 }], { localName: "TaskStreamChatContextResponse_GatheringFile" }), oD = wa.makeMessageType("aiserver.v1.TaskStreamChatContextResponse.GatheringStep", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "index", kind: "scalar", T: 5 }, { no: 3, name: "query", kind: "scalar", T: 9 }], { localName: "TaskStreamChatContextResponse_GatheringStep" }), rD = wa.makeMessageType("aiserver.v1.TaskStreamChatContextResponse.RerankingStep", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "index", kind: "scalar", T: 5 }], { localName: "TaskStreamChatContextResponse_RerankingStep" }), iD = wa.makeMessageType("aiserver.v1.TaskStreamChatContextResponse.RerankingFile", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "range", kind: "message", T: ko }, { no: 3, name: "reason", kind: "scalar", T: 9 }, { no: 4, name: "failed", kind: "scalar", T: 8 }, { no: 5, name: "score", kind: "scalar", T: 2 }, { no: 6, name: "step_index", kind: "scalar", T: 5 }], { localName: "TaskStreamChatContextResponse_RerankingFile" }), AD = wa.makeMessageType("aiserver.v1.TaskStreamChatContextResponse.ReasoningStep", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "index", kind: "scalar", T: 5 }], { localName: "TaskStreamChatContextResponse_ReasoningStep" }), lD = wa.makeMessageType("aiserver.v1.TaskStreamChatContextResponse.ReasoningSubstep", () => [{ no: 1, name: "markdown_explanation", kind: "scalar", T: 9 }, { no: 2, name: "step_index", kind: "scalar", T: 5 }], { localName: "TaskStreamChatContextResponse_ReasoningSubstep" }), cD = wa.makeMessageType("aiserver.v1.TaskStreamChatContextResponseWrapped", () => [{ no: 1, name: "real_response", kind: "message", T: aD, oneof: "response" }, { no: 2, name: "background_task_uuid", kind: "scalar", T: 9, oneof: "response" }]), mD = wa.makeMessageType("aiserver.v1.StreamChatContextRequest", () => [{ no: 1, name: "current_file", kind: "message", T: Uo }, { no: 2, name: "conversation", kind: "message", T: yI, repeated: true }, { no: 3, name: "repositories", kind: "message", T: OA, repeated: true }, { no: 4, name: "explicit_context", kind: "message", T: jo }, { no: 5, name: "workspace_root_path", kind: "scalar", T: 9, opt: true }, { no: 6, name: "code_blocks", kind: "message", T: Ro, repeated: true }, { no: 7, name: "model_details", kind: "message", T: Go }, { no: 8, name: "documentation_identifiers", kind: "scalar", T: 9, repeated: true }, { no: 9, name: "query", kind: "scalar", T: 9 }, { no: 10, name: "code_context", kind: "message", T: dD }, { no: 11, name: "rerank_results", kind: "scalar", T: 8 }, { no: 12, name: "file_search_results", kind: "message", T: KS, oneof: "context_results" }, { no: 13, name: "code_search_results", kind: "message", T: jS, oneof: "context_results" }, { no: 14, name: "linter_errors", kind: "message", T: Ho }, { no: 15, name: "is_bash", kind: "scalar", T: 8, opt: true }, { no: 16, name: "rerank_results_v2", kind: "scalar", T: 8 }, { no: 17, name: "conversation_id", kind: "scalar", T: 9 }, { no: 18, name: "can_handle_filenames_after_language_ids", kind: "scalar", T: 8 }, { no: 19, name: "long_context_mode", kind: "scalar", T: 8 }, { no: 20, name: "is_eval", kind: "scalar", T: 8 }, { no: 21, name: "request_id", kind: "scalar", T: 9 }, { no: 22, name: "desired_max_tokens", kind: "scalar", T: 5, opt: true }, { no: 23, name: "runnable_code_blocks", kind: "scalar", T: 8, opt: true }]), dD = wa.makeMessageType("aiserver.v1.StreamChatContextRequest.CodeContext", () => [{ no: 1, name: "chunks", kind: "message", T: Ro, repeated: true }, { no: 2, name: "scored_chunks", kind: "message", T: MA, repeated: true }], { localName: "StreamChatContextRequest_CodeContext" }), gD = wa.makeMessageType("aiserver.v1.StreamChatContextResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "debugging_only_chat_prompt", kind: "scalar", T: 9, opt: true }, { no: 3, name: "debugging_only_token_count", kind: "scalar", T: 5, opt: true }, { no: 4, name: "document_citation", kind: "message", T: aI }, { no: 5, name: "filled_prompt", kind: "scalar", T: 9, opt: true }, { no: 6, name: "used_code", kind: "message", T: uD }, { no: 7, name: "code_link", kind: "message", T: ED }, { no: 8, name: "chunk_identity", kind: "message", T: pD, opt: true }, { no: 9, name: "docs_reference", kind: "message", T: oI, opt: true }, { no: 10, name: "symbol_link", kind: "message", T: kI, opt: true }, { no: 11, name: "file_link", kind: "message", T: II, opt: true }]), uD = wa.makeMessageType("aiserver.v1.StreamChatContextResponse.UsedCode", () => [{ no: 1, name: "code_results", kind: "message", T: MA, repeated: true }], { localName: "StreamChatContextResponse_UsedCode" }), ED = wa.makeMessageType("aiserver.v1.StreamChatContextResponse.CodeLink", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "start_line_number", kind: "scalar", T: 5 }, { no: 3, name: "end_line_number", kind: "scalar", T: 5 }], { localName: "StreamChatContextResponse_CodeLink" }), pD = wa.makeMessageType("aiserver.v1.StreamChatContextResponse.ChunkIdentity", () => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }, { no: 2, name: "start_line", kind: "scalar", T: 5 }, { no: 3, name: "end_line", kind: "scalar", T: 5 }, { no: 4, name: "text", kind: "scalar", T: 9 }, { no: 5, name: "chunk_type", kind: "enum", T: wa.getEnumType(Zk) }], { localName: "StreamChatContextResponse_ChunkIdentity" }), TD = wa.makeMessageType("aiserver.v1.StreamChatDeepContextRequest", () => [{ no: 1, name: "conversation", kind: "message", T: yI, repeated: true }, { no: 2, name: "explicit_context", kind: "message", T: jo }, { no: 3, name: "model_details", kind: "message", T: Go }, { no: 4, name: "context_results", kind: "message", T: PA }, { no: 5, name: "rerank_results", kind: "scalar", T: 8 }]), kD = wa.makeMessageType("aiserver.v1.StreamChatDeepContextResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }]), ID = wa.makeMessageType("aiserver.v1.DocumentationInfo", () => [{ no: 1, name: "doc_identifier", kind: "scalar", T: 9 }, { no: 2, name: "metadata", kind: "message", T: iu }]), hD = wa.makeMessageType("aiserver.v1.AvailableDocsRequest", () => [{ no: 1, name: "partial_url", kind: "scalar", T: 9, oneof: "partial_doc" }, { no: 2, name: "partial_doc_name", kind: "scalar", T: 9, oneof: "partial_doc" }, { no: 3, name: "get_all", kind: "scalar", T: 8, oneof: "partial_doc" }, { no: 4, name: "additional_doc_identifiers", kind: "scalar", T: 9, repeated: true }]), _D = wa.makeMessageType("aiserver.v1.AvailableDocsResponse", () => [{ no: 1, name: "docs", kind: "message", T: ID, repeated: true }]), CD = wa.makeMessageType("aiserver.v1.RunWebSearchRequest", () => [{ no: 1, name: "search_term", kind: "scalar", T: 9 }, { no: 2, name: "explanation", kind: "scalar", T: 9, opt: true }, { no: 3, name: "model_id", kind: "scalar", T: 9 }, { no: 4, name: "snapshot_as_of", kind: "scalar", T: 9, opt: true }]), fD = wa.makeMessageType("aiserver.v1.WebSearchDocument", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9 }, { no: 3, name: "text", kind: "scalar", T: 9 }]), BD = wa.makeMessageType("aiserver.v1.RunWebSearchResponse", () => [{ no: 1, name: "answer", kind: "scalar", T: 9, opt: true }, { no: 2, name: "documents", kind: "message", T: fD, repeated: true }]), QD = wa.makeMessageType("aiserver.v1.RunWebFetchRequest", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "snapshot_as_of", kind: "scalar", T: 9, opt: true }]), yD = wa.makeMessageType("aiserver.v1.RunWebFetchSuccess", () => [{ no: 1, name: "content", kind: "scalar", T: 9 }]), RD = wa.makeMessageType("aiserver.v1.RunWebFetchError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "is_timeout", kind: "scalar", T: 8 }]), ND = wa.makeMessageType("aiserver.v1.RunWebFetchResponse", () => [{ no: 1, name: "success", kind: "message", T: yD, oneof: "result" }, { no: 2, name: "error", kind: "message", T: RD, oneof: "result" }]), vD = wa.makeMessageType("aiserver.v1.GenerateImageReferenceImage", () => [{ no: 1, name: "data", kind: "scalar", T: 9 }, { no: 2, name: "mime_type", kind: "scalar", T: 9 }]), SD = wa.makeMessageType("aiserver.v1.RunGenerateImageRequest", () => [{ no: 1, name: "description", kind: "scalar", T: 9 }, { no: 2, name: "reference_images", kind: "message", T: vD, repeated: true }, { no: 3, name: "model_id", kind: "scalar", T: 9 }, { no: 4, name: "max_mode", kind: "scalar", T: 8 }, { no: 5, name: "aspect_ratio", kind: "scalar", T: 9, opt: true }]), DD = wa.makeMessageType("aiserver.v1.RunGenerateImageSuccess", () => [{ no: 1, name: "image_data", kind: "scalar", T: 9 }, { no: 2, name: "mime_type", kind: "scalar", T: 9 }]), wD = wa.makeMessageType("aiserver.v1.RunGenerateImageError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "model_restricted", kind: "scalar", T: 8 }, { no: 3, name: "provider_status_code", kind: "scalar", T: 5, opt: true }, { no: 4, name: "content_safety_blocked", kind: "scalar", T: 8 }]), bD = wa.makeMessageType("aiserver.v1.RunGenerateImageResponse", () => [{ no: 1, name: "success", kind: "message", T: DD, oneof: "result" }, { no: 2, name: "error", kind: "message", T: wD, oneof: "result" }]), MD = wa.makeMessageType("aiserver.v1.RunGenerateVideoRequest", () => [{ no: 1, name: "prompt", kind: "scalar", T: 9 }, { no: 2, name: "image", kind: "message", T: vD }, { no: 3, name: "reference_images", kind: "message", T: vD, repeated: true }, { no: 4, name: "model_id", kind: "scalar", T: 9 }, { no: 5, name: "max_mode", kind: "scalar", T: 8 }, { no: 6, name: "duration_seconds", kind: "scalar", T: 13, opt: true }, { no: 7, name: "aspect_ratio", kind: "scalar", T: 9, opt: true }, { no: 8, name: "resolution", kind: "scalar", T: 9, opt: true }]), FD = wa.makeMessageType("aiserver.v1.RunGenerateVideoSuccess", () => [{ no: 1, name: "video_data", kind: "scalar", T: 9 }, { no: 2, name: "mime_type", kind: "scalar", T: 9 }, { no: 3, name: "duration_seconds", kind: "scalar", T: 13 }]), OD = wa.makeMessageType("aiserver.v1.RunGenerateVideoError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "model_restricted", kind: "scalar", T: 8 }, { no: 3, name: "provider_status_code", kind: "scalar", T: 5, opt: true }, { no: 4, name: "content_safety_blocked", kind: "scalar", T: 8 }]), UD = wa.makeMessageType("aiserver.v1.RunGenerateVideoResponse", () => [{ no: 1, name: "success", kind: "message", T: FD, oneof: "result" }, { no: 2, name: "error", kind: "message", T: OD, oneof: "result" }]), LD = wa.makeMessageType("aiserver.v1.RunXSearchRequest", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }, { no: 2, name: "from_date", kind: "scalar", T: 9, opt: true }, { no: 3, name: "to_date", kind: "scalar", T: 9, opt: true }, { no: 4, name: "allowed_x_handles", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "excluded_x_handles", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "model_id", kind: "scalar", T: 9 }, { no: 7, name: "max_mode", kind: "scalar", T: 8 }]), PD = wa.makeMessageType("aiserver.v1.RunXSearchCitation", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9 }]), xD = wa.makeMessageType("aiserver.v1.RunXSearchSuccess", () => [{ no: 1, name: "answer", kind: "scalar", T: 9 }, { no: 2, name: "citations", kind: "message", T: PD, repeated: true }]), GD = wa.makeMessageType("aiserver.v1.RunXSearchError", () => [{ no: 1, name: "error", kind: "scalar", T: 9 }, { no: 2, name: "provider_status_code", kind: "scalar", T: 5, opt: true }]), YD = wa.makeMessageType("aiserver.v1.RunXSearchResponse", () => [{ no: 1, name: "success", kind: "message", T: xD, oneof: "result" }, { no: 2, name: "error", kind: "message", T: GD, oneof: "result" }]), JD = wa.makeMessageType("aiserver.v1.ClassifyAgentAutoReviewRequest", () => [{ no: 1, name: "args", kind: "message", T: d_ }, { no: 2, name: "attempt_index", kind: "scalar", T: 13, opt: true }, { no: 3, name: "mode", kind: "scalar", T: 9, opt: true }, { no: 4, name: "workspace_paths", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "caller_records_classifier_call", kind: "scalar", T: 8, opt: true }]), VD = wa.makeMessageType("aiserver.v1.ClassifyAgentAutoReviewResponse", () => [{ no: 1, name: "result", kind: "message", T: u_ }]), qD = wa.makeMessageType("aiserver.v1.RunDescribeImageRequest", () => [{ no: 1, name: "image_data", kind: "scalar", T: 9 }, { no: 2, name: "mime_type", kind: "scalar", T: 9 }, { no: 3, name: "context_text", kind: "scalar", T: 9 }, { no: 4, name: "model_id", kind: "scalar", T: 9 }, { no: 5, name: "max_mode", kind: "scalar", T: 8 }]), HD = wa.makeMessageType("aiserver.v1.RunDescribeImageResponse", () => [{ no: 1, name: "applicable", kind: "scalar", T: 8 }, { no: 2, name: "description", kind: "scalar", T: 9, opt: true }]), WD = wa.makeMessageType("aiserver.v1.DetectShellHangRequest", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "output", kind: "scalar", T: 9 }]), KD = wa.makeMessageType("aiserver.v1.DetectShellHangResponse", () => [{ no: 1, name: "hanging", kind: "scalar", T: 8 }]), jD = wa.makeMessageType("aiserver.v1.ThrowErrorCheckRequest", () => [{ no: 1, name: "error", kind: "enum", T: wa.getEnumType(tr) }]), XD = wa.makeMessageType("aiserver.v1.ThrowErrorCheckResponse", []), ZD = wa.makeMessageType("aiserver.v1.AvailableModelsRequest", () => [{ no: 1, name: "is_nightly", kind: "scalar", T: 8 }, { no: 2, name: "include_long_context_models", kind: "scalar", T: 8 }, { no: 3, name: "exclude_max_named_models", kind: "scalar", T: 8 }, { no: 4, name: "additional_model_names", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "use_model_parameters", kind: "scalar", T: 8, opt: true }, { no: 6, name: "include_hidden_models", kind: "scalar", T: 8, opt: true }, { no: 7, name: "do_not_use_markdown", kind: "scalar", T: 8, opt: true }, { no: 8, name: "variants_will_be_shown_in_exploded_list", kind: "scalar", T: 8, opt: true }, { no: 9, name: "for_automations", kind: "scalar", T: 8, opt: true }, { no: 10, name: "scope", kind: "enum", T: wa.getEnumType(RR), opt: true }, { no: 14, name: "byok_enabled", kind: "scalar", T: 8, opt: true }, { no: 11, name: "use_react_model_picker", kind: "scalar", T: 8, opt: true }, { no: 12, name: "use_cloud_agent_effort_modes", kind: "scalar", T: 8, opt: true }, { no: 15, name: "use_parameterized_automations_models", kind: "scalar", T: 8, opt: true }, { no: 13, name: "admin_settings_group_public_id", kind: "scalar", T: 9, opt: true }, { no: 16, name: "expected_scope", kind: "message", T: Gy }, { no: 17, name: "client_llm_gateway_credential", kind: "message", T: Jk, opt: true }, { no: 18, name: "refresh_llm_gateway_models", kind: "scalar", T: 8, opt: true }]), zD = wa.makeMessageType("aiserver.v1.AvailableModelsResponse", () => [{ no: 2, name: "models", kind: "message", T: ow, repeated: true }, { no: 1, name: "model_names", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "composer_model_config", kind: "message", T: lw, opt: true }, { no: 5, name: "cmd_k_model_config", kind: "message", T: lw, opt: true }, { no: 6, name: "background_composer_model_config", kind: "message", T: lw, opt: true }, { no: 7, name: "plan_execution_model_config", kind: "message", T: lw, opt: true }, { no: 8, name: "spec_model_config", kind: "message", T: lw, opt: true }, { no: 9, name: "deep_search_model_config", kind: "message", T: lw, opt: true }, { no: 10, name: "quick_agent_model_config", kind: "message", T: lw, opt: true }, { no: 16, name: "subagent_model_configs", kind: "map", K: 9, V: { kind: "message", T: lw } }, { no: 11, name: "use_model_parameters", kind: "scalar", T: 8 }, { no: 12, name: "disable_unused_models_after_n_hours", kind: "scalar", T: 5, opt: true }, { no: 13, name: "upgrade_unchanged_models_after_n_hours", kind: "scalar", T: 5, opt: true }, { no: 15, name: "display_configuration", kind: "message", T: cw }, { no: 19, name: "experimental_model_id", kind: "scalar", T: 9, opt: true }, { no: 20, name: "experimental_model_display_name", kind: "scalar", T: 9, opt: true }, { no: 21, name: "nudge_new_chats_to_auto_optimize_for", kind: "scalar", T: 9, opt: true }]), $D = wa.makeEnum("aiserver.v1.AvailableModelsResponse.DegradationStatus", [{ no: 0, name: "DEGRADATION_STATUS_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "DEGRADATION_STATUS_DEGRADED", localName: "DEGRADED" }, { no: 2, name: "DEGRADATION_STATUS_DISABLED", localName: "DISABLED" }]), ew = wa.makeEnum("aiserver.v1.AvailableModelsResponse.ModelVendorId", [{ no: 0, name: "MODEL_VENDOR_ID_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "MODEL_VENDOR_ID_ANTHROPIC", localName: "ANTHROPIC" }, { no: 2, name: "MODEL_VENDOR_ID_OPENAI", localName: "OPENAI" }, { no: 3, name: "MODEL_VENDOR_ID_GOOGLE", localName: "GOOGLE" }, { no: 4, name: "MODEL_VENDOR_ID_XAI", localName: "XAI" }, { no: 5, name: "MODEL_VENDOR_ID_MOONSHOT", localName: "MOONSHOT" }, { no: 6, name: "MODEL_VENDOR_ID_CURSOR", localName: "CURSOR" }, { no: 7, name: "MODEL_VENDOR_ID_NVIDIA", localName: "NVIDIA" }, { no: 8, name: "MODEL_VENDOR_ID_ZAI", localName: "ZAI" }, { no: 9, name: "MODEL_VENDOR_ID_META", localName: "META" }, { no: 10, name: "MODEL_VENDOR_ID_DEEPSEEK", localName: "DEEPSEEK" }]), nw = wa.makeMessageType("aiserver.v1.AvailableModelsResponse.TooltipData", () => [{ no: 1, name: "primary_text", kind: "scalar", T: 9 }, { no: 2, name: "secondary_text", kind: "scalar", T: 9 }, { no: 3, name: "secondary_warning_text", kind: "scalar", T: 8 }, { no: 4, name: "icon", kind: "scalar", T: 9 }, { no: 5, name: "tertiary_text", kind: "scalar", T: 9 }, { no: 6, name: "tertiary_text_url", kind: "scalar", T: 9 }, { no: 7, name: "markdown_content", kind: "scalar", T: 9, opt: true }], { localName: "AvailableModelsResponse_TooltipData" }), aw = wa.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelVendor", () => [{ no: 1, name: "id", kind: "enum", T: wa.getEnumType(ew) }, { no: 2, name: "display_name", kind: "scalar", T: 9 }], { localName: "AvailableModelsResponse_ModelVendor" }), tw = wa.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerBadge", () => [{ no: 1, name: "label", kind: "scalar", T: 9 }, { no: 2, name: "variant", kind: "enum", T: wa.getEnumType(sw) }, { no: 3, name: "dismiss_on_selection", kind: "scalar", T: 8 }], { localName: "AvailableModelsResponse_ModelPickerBadge" }), sw = wa.makeEnum("aiserver.v1.AvailableModelsResponse.ModelPickerBadge.Variant", [{ no: 0, name: "VARIANT_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "VARIANT_ACCENT", localName: "ACCENT" }, { no: 2, name: "VARIANT_NEUTRAL", localName: "NEUTRAL" }, { no: 3, name: "VARIANT_SUCCESS", localName: "SUCCESS" }, { no: 4, name: "VARIANT_WARN", localName: "WARN" }, { no: 5, name: "VARIANT_DANGER", localName: "DANGER" }]), ow = wa.makeMessageType("aiserver.v1.AvailableModelsResponse.AvailableModel", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "default_on", kind: "scalar", T: 8 }, { no: 3, name: "is_long_context_only", kind: "scalar", T: 8, opt: true }, { no: 4, name: "is_chat_only", kind: "scalar", T: 8, opt: true }, { no: 5, name: "supports_agent", kind: "scalar", T: 8, opt: true }, { no: 6, name: "degradation_status", kind: "enum", T: wa.getEnumType($D), opt: true }, { no: 7, name: "price", kind: "scalar", T: 1, opt: true }, { no: 8, name: "tooltip_data", kind: "message", T: nw, opt: true }, { no: 20, name: "tooltip_data_for_max_mode", kind: "message", T: nw, opt: true }, { no: 9, name: "supports_thinking", kind: "scalar", T: 8, opt: true }, { no: 10, name: "supports_images", kind: "scalar", T: 8, opt: true }, { no: 11, name: "supports_auto_context", kind: "scalar", T: 8, opt: true }, { no: 12, name: "auto_context_max_tokens", kind: "scalar", T: 5, opt: true }, { no: 13, name: "auto_context_extended_max_tokens", kind: "scalar", T: 5, opt: true }, { no: 14, name: "supports_max_mode", kind: "scalar", T: 8, opt: true }, { no: 19, name: "supports_non_max_mode", kind: "scalar", T: 8, opt: true }, { no: 15, name: "context_token_limit", kind: "scalar", T: 5, opt: true }, { no: 16, name: "context_token_limit_for_max_mode", kind: "scalar", T: 5, opt: true }, { no: 17, name: "client_display_name", kind: "scalar", T: 9, opt: true }, { no: 18, name: "server_model_name", kind: "scalar", T: 9, opt: true }, { no: 21, name: "is_recommended_for_background_composer", kind: "scalar", T: 8, opt: true }, { no: 22, name: "supports_plan_mode", kind: "scalar", T: 8, opt: true }, { no: 25, name: "supports_sandboxing", kind: "scalar", T: 8, opt: true }, { no: 23, name: "is_user_added", kind: "scalar", T: 8, opt: true }, { no: 24, name: "inputbox_short_model_name", kind: "scalar", T: 9, opt: true }, { no: 26, name: "supports_cmd_k", kind: "scalar", T: 8, opt: true }, { no: 27, name: "only_supports_cmd_k", kind: "scalar", T: 8, opt: true }, { no: 28, name: "background_composer_sort_order", kind: "scalar", T: 5, opt: true }, { no: 29, name: "parameter_definitions", kind: "message", T: kw, repeated: true }, { no: 30, name: "variants", kind: "message", T: rw, repeated: true }, { no: 32, name: "cloud_agent_effort_mode", kind: "enum", T: wa.getEnumType(NR), opt: true }, { no: 33, name: "cloud_migrate_to_model", kind: "scalar", T: 9, opt: true }, { no: 34, name: "upgrade_model_id", kind: "scalar", T: 9, opt: true }, { no: 35, name: "is_hidden", kind: "scalar", T: 8, opt: true }, { no: 36, name: "legacy_slugs", kind: "scalar", T: 9, repeated: true }, { no: 37, name: "id_aliases", kind: "scalar", T: 9, repeated: true }, { no: 38, name: "named_model_section_index", kind: "scalar", T: 5, opt: true }, { no: 39, name: "tagline", kind: "scalar", T: 9, opt: true }, { no: 40, name: "visible_in_routed_model_view", kind: "scalar", T: 8, opt: true }, { no: 41, name: "vendor_name", kind: "scalar", T: 9, opt: true }, { no: 42, name: "vendor", kind: "message", T: aw, opt: true }, { no: 43, name: "default_disabled_in_admin_allowlist", kind: "scalar", T: 8, opt: true }, { no: 44, name: "cloud_agent_effort_modes", kind: "enum", T: wa.getEnumType(NR), repeated: true }, { no: 45, name: "supports_smart_mode_classifier", kind: "scalar", T: 8, opt: true }, { no: 46, name: "requires_data_retention", kind: "scalar", T: 8, opt: true }, { no: 47, name: "reason_for_zdr_consent_block", kind: "scalar", T: 9, opt: true }, { no: 48, name: "model_picker_badges", kind: "message", T: tw, repeated: true }], { localName: "AvailableModelsResponse_AvailableModel" }), rw = wa.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelVariantConfig", () => [{ no: 1, name: "parameter_values", kind: "message", T: bk, repeated: true }, { no: 2, name: "display_name", kind: "scalar", T: 9 }, { no: 8, name: "display_name_outside_picker", kind: "scalar", T: 9, opt: true }, { no: 3, name: "is_max_mode", kind: "scalar", T: 8 }, { no: 4, name: "is_default_max_config", kind: "scalar", T: 8, opt: true }, { no: 5, name: "is_default_non_max_config", kind: "scalar", T: 8, opt: true }, { no: 6, name: "tooltip_data", kind: "message", T: nw, opt: true }, { no: 7, name: "tagline", kind: "scalar", T: 9, opt: true }, { no: 9, name: "variant_string_representation", kind: "scalar", T: 9, opt: true }, { no: 10, name: "confirmation_dialogue", kind: "message", T: iw, opt: true }, { no: 11, name: "legacy_slug", kind: "scalar", T: 9, opt: true }], { localName: "AvailableModelsResponse_ModelVariantConfig" }), iw = wa.makeMessageType("aiserver.v1.AvailableModelsResponse.ConfirmationDialogue", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "body", kind: "scalar", T: 9 }, { no: 3, name: "key", kind: "scalar", T: 9 }, { no: 4, name: "blocks_submission", kind: "scalar", T: 8 }, { no: 5, name: "presentation", kind: "enum", T: wa.getEnumType(Aw), opt: true }], { localName: "AvailableModelsResponse_ConfirmationDialogue" }), Aw = wa.makeEnum("aiserver.v1.AvailableModelsResponse.ConfirmationDialogue.Presentation", [{ no: 0, name: "PRESENTATION_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "PRESENTATION_POST_PICKER_WARNING", localName: "POST_PICKER_WARNING" }]), lw = wa.makeMessageType("aiserver.v1.AvailableModelsResponse.FeatureModelConfig", () => [{ no: 1, name: "default_model", kind: "scalar", T: 9 }, { no: 2, name: "fallback_models", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "best_of_n_default_models", kind: "scalar", T: 9, repeated: true }], { localName: "AvailableModelsResponse_FeatureModelConfig" }), cw = wa.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration", () => [{ no: 1, name: "routed_model_view_config", kind: "message", T: mw }, { no: 2, name: "named_models_view_config", kind: "message", T: uw }, { no: 3, name: "hide_search_bar", kind: "scalar", T: 8, opt: true }, { no: 4, name: "hide_add_models", kind: "scalar", T: 8, opt: true }, { no: 5, name: "model_selection_restriction_message", kind: "scalar", T: 9, opt: true }], { localName: "AvailableModelsResponse_ModelPickerDisplayConfiguration" }), mw = wa.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration.RoutedModelViewConfig", () => [{ no: 1, name: "title", kind: "scalar", T: 9, opt: true }, { no: 2, name: "routed_model_view_to_named_view_toggle", kind: "message", T: dw, opt: true }, { no: 3, name: "routed_model_view_to_named_view_button", kind: "message", T: gw, opt: true }, { no: 4, name: "hide_search_bar", kind: "scalar", T: 8, opt: true }, { no: 5, name: "hide_routed_model_view", kind: "scalar", T: 8, opt: true }], { localName: "AvailableModelsResponse_ModelPickerDisplayConfiguration_RoutedModelViewConfig" }), dw = wa.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration.RoutedModelViewConfig.RoutedModelViewToNamedViewToggle", () => [{ no: 1, name: "title_markdown", kind: "scalar", T: 9 }, { no: 2, name: "subtitle", kind: "scalar", T: 9, opt: true }, { no: 3, name: "set_to_last_named_model", kind: "scalar", T: 8, opt: true }], { localName: "AvailableModelsResponse_ModelPickerDisplayConfiguration_RoutedModelViewConfig_RoutedModelViewToNamedViewToggle" }), gw = wa.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration.RoutedModelViewConfig.RoutedModelViewToNamedViewButton", () => [{ no: 1, name: "markdown", kind: "scalar", T: 9 }], { localName: "AvailableModelsResponse_ModelPickerDisplayConfiguration_RoutedModelViewConfig_RoutedModelViewToNamedViewButton" }), uw = wa.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration.NamedModelsViewConfig", () => [{ no: 2, name: "named_view_to_routed_model_view_toggle", kind: "message", T: Ew, opt: true }, { no: 3, name: "named_view_to_routed_model_view_no_button", kind: "message", T: pw, opt: true }, { no: 4, name: "named_view_to_routed_model_view_button", kind: "message", T: Tw, opt: true }], { localName: "AvailableModelsResponse_ModelPickerDisplayConfiguration_NamedModelsViewConfig" }), Ew = wa.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration.NamedModelsViewConfig.NamedViewToRoutedModelViewToggle", () => [{ no: 1, name: "markdown", kind: "scalar", T: 9 }], { localName: "AvailableModelsResponse_ModelPickerDisplayConfiguration_NamedModelsViewConfig_NamedViewToRoutedModelViewToggle" }), pw = wa.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration.NamedModelsViewConfig.NamedViewToRoutedModelViewNoButton", [], { localName: "AvailableModelsResponse_ModelPickerDisplayConfiguration_NamedModelsViewConfig_NamedViewToRoutedModelViewNoButton" }), Tw = wa.makeMessageType("aiserver.v1.AvailableModelsResponse.ModelPickerDisplayConfiguration.NamedModelsViewConfig.NamedViewToRoutedModelViewButton", () => [{ no: 1, name: "markdown", kind: "scalar", T: 9 }], { localName: "AvailableModelsResponse_ModelPickerDisplayConfiguration_NamedModelsViewConfig_NamedViewToRoutedModelViewButton" }), kw = wa.makeMessageType("aiserver.v1.ModelParameterDefinition", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "name", kind: "scalar", T: 9 }, { no: 3, name: "markdown_tooltip", kind: "scalar", T: 9, opt: true }, { no: 4, name: "parameter_type", kind: "message", T: Iw }, { no: 5, name: "is_cycleable_by_hotkey", kind: "scalar", T: 8, opt: true }]), Iw = wa.makeMessageType("aiserver.v1.ModelParameterDefinition.ModelParameterType", () => [{ no: 1, name: "boolean_parameter", kind: "message", T: hw, opt: true }, { no: 2, name: "enum_parameter", kind: "message", T: Cw, opt: true }], { localName: "ModelParameterDefinition_ModelParameterType" }), hw = wa.makeMessageType("aiserver.v1.ModelParameterDefinition.BooleanParameterDefinition", () => [{ no: 1, name: "values", kind: "message", T: _w, repeated: true }], { localName: "ModelParameterDefinition_BooleanParameterDefinition" }), _w = wa.makeMessageType("aiserver.v1.ModelParameterDefinition.BooleanParameterDefinition.BooleanParameterValue", () => [{ no: 1, name: "value", kind: "scalar", T: 9 }, { no: 2, name: "display_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "increases_model_cost", kind: "scalar", T: 8, opt: true }, { no: 4, name: "default_blocked_in_admin_allowlist", kind: "scalar", T: 8, opt: true }, { no: 5, name: "hide_from_user_picker_when_admin_blocked", kind: "scalar", T: 8, opt: true }, { no: 6, name: "blocked_by_admin_allowlist", kind: "scalar", T: 8, opt: true }], { localName: "ModelParameterDefinition_BooleanParameterDefinition_BooleanParameterValue" }), Cw = wa.makeMessageType("aiserver.v1.ModelParameterDefinition.EnumParameterDefinition", () => [{ no: 1, name: "values", kind: "message", T: fw, repeated: true }], { localName: "ModelParameterDefinition_EnumParameterDefinition" }), fw = wa.makeMessageType("aiserver.v1.ModelParameterDefinition.EnumParameterDefinition.EnumParameterValue", () => [{ no: 1, name: "value", kind: "scalar", T: 9 }, { no: 2, name: "display_name", kind: "scalar", T: 9, opt: true }, { no: 3, name: "increases_model_cost", kind: "scalar", T: 8, opt: true }, { no: 4, name: "blocked_by_admin_allowlist", kind: "scalar", T: 8, opt: true }, { no: 5, name: "markdown_tooltip", kind: "scalar", T: 9, opt: true }, { no: 6, name: "model_picker_badges", kind: "message", T: tw, repeated: true }], { localName: "ModelParameterDefinition_EnumParameterDefinition_EnumParameterValue" }), Bw = wa.makeMessageType("aiserver.v1.ServerTimeRequest", []), Qw = wa.makeMessageType("aiserver.v1.ServerTimeResponse", () => [{ no: 1, name: "receive_timestamp", kind: "scalar", T: 1 }, { no: 2, name: "transmit_timestamp", kind: "scalar", T: 1 }]), yw = wa.makeMessageType("aiserver.v1.HealthCheckRequest", []), Rw = wa.makeMessageType("aiserver.v1.HealthCheckResponse", () => [{ no: 1, name: "status", kind: "enum", T: wa.getEnumType(Nw) }]), Nw = wa.makeEnum("aiserver.v1.HealthCheckResponse.Status", [{ no: 0, name: "STATUS_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "STATUS_HEALTHY", localName: "HEALTHY" }]), vw = wa.makeMessageType("aiserver.v1.PrivacyCheckRequest", []), Sw = wa.makeMessageType("aiserver.v1.PrivacyCheckResponse", () => [{ no: 1, name: "is_on_privacy_pod", kind: "scalar", T: 8 }, { no: 2, name: "is_ghost_mode_on", kind: "scalar", T: 8 }]), Dw = wa.makeMessageType("aiserver.v1.TimeLeftHealthCheckResponse", () => [{ no: 1, name: "time_left", kind: "scalar", T: 9 }]), ww = wa.makeMessageType("aiserver.v1.StreamGenerateRequest", () => [{ no: 1, name: "current_file", kind: "message", T: Uo }, { no: 2, name: "conversation", kind: "message", T: yI, repeated: true }, { no: 3, name: "repositories", kind: "message", T: OA, repeated: true }, { no: 4, name: "explicit_context", kind: "message", T: jo }, { no: 5, name: "workspace_root_path", kind: "scalar", T: 9, opt: true }, { no: 6, name: "query", kind: "scalar", T: 9 }, { no: 7, name: "code_blocks", kind: "message", T: Ro, repeated: true }, { no: 9, name: "model_details", kind: "message", T: Go }, { no: 10, name: "documentation_identifiers", kind: "scalar", T: 9, repeated: true }, { no: 11, name: "linter_errors", kind: "message", T: Ho }, { no: 12, name: "prompt_code_blocks", kind: "message", T: Ro, repeated: true }, { no: 14, name: "session_id", kind: "scalar", T: 9 }, { no: 13, name: "cmd_k_debug_info", kind: "message", T: Io }, { no: 15, name: "fast_mode", kind: "scalar", T: 8 }, { no: 16, name: "original_request", kind: "message", T: ww }]), bw = wa.makeMessageType("aiserver.v1.ReviewRequest", () => [{ no: 1, name: "chunk", kind: "scalar", T: 9 }, { no: 2, name: "file_context", kind: "scalar", T: 9 }, { no: 3, name: "chunk_range", kind: "message", T: Bo }, { no: 4, name: "diff_string", kind: "scalar", T: 9, opt: true }, { no: 5, name: "custom_instructions", kind: "scalar", T: 9, opt: true }]), Mw = wa.makeMessageType("aiserver.v1.ReviewChatMessage", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "type", kind: "enum", T: wa.getEnumType(Fw) }]), Fw = wa.makeEnum("aiserver.v1.ReviewChatMessage.ReviewChatMessageType", [{ no: 0, name: "REVIEW_CHAT_MESSAGE_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "REVIEW_CHAT_MESSAGE_TYPE_HUMAN", localName: "HUMAN" }, { no: 2, name: "REVIEW_CHAT_MESSAGE_TYPE_AI", localName: "AI" }]), Ow = wa.makeMessageType("aiserver.v1.ReviewChatRequest", () => [{ no: 1, name: "chunk", kind: "scalar", T: 9 }, { no: 2, name: "file_context", kind: "scalar", T: 9 }, { no: 3, name: "chunk_range", kind: "message", T: Bo }, { no: 4, name: "messages", kind: "message", T: Mw, repeated: true }]), Uw = wa.makeMessageType("aiserver.v1.ReviewChatResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "should_resolve", kind: "scalar", T: 8, opt: true }]), Lw = wa.makeMessageType("aiserver.v1.ReviewBug", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "start_line", kind: "scalar", T: 5, opt: true }, { no: 3, name: "end_line", kind: "scalar", T: 5, opt: true }, { no: 4, name: "description", kind: "scalar", T: 9, opt: true }, { no: 5, name: "severity", kind: "scalar", T: 5, opt: true }, { no: 6, name: "tldr", kind: "scalar", T: 9, opt: true }]), Pw = wa.makeMessageType("aiserver.v1.ReviewResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "prompt", kind: "scalar", T: 9, opt: true }, { no: 3, name: "tldr", kind: "scalar", T: 9, opt: true }, { no: 4, name: "is_bug", kind: "scalar", T: 8, opt: true }, { no: 5, name: "bugs", kind: "message", T: Lw, repeated: true }]), xw = wa.makeMessageType("aiserver.v1.SlashEditRequest", () => [{ no: 2, name: "current_file", kind: "message", T: Uo }, { no: 3, name: "conversation", kind: "message", T: yI, repeated: true }, { no: 4, name: "explicit_context", kind: "message", T: jo }, { no: 7, name: "model_details", kind: "message", T: Go }, { no: 8, name: "is_cmd_i", kind: "scalar", T: 8 }, { no: 11, name: "summary", kind: "scalar", T: 9, opt: true }, { no: 12, name: "summary_up_until_index", kind: "scalar", T: 5, opt: true }, { no: 13, name: "should_use_turbo_debug_prompt", kind: "scalar", T: 8, opt: true }, { no: 14, name: "edit_selection", kind: "message", T: Bo, opt: true }, { no: 15, name: "files", kind: "message", T: Uo, repeated: true }, { no: 16, name: "clicked_code_block_contents", kind: "scalar", T: 9, opt: true }, { no: 17, name: "is_an_optimistic_request_for_caching_and_linting", kind: "scalar", T: 8, opt: true }, { no: 18, name: "specific_instructions", kind: "scalar", T: 9, opt: true }, { no: 19, name: "use_fast_apply", kind: "scalar", T: 8 }, { no: 20, name: "fast_apply_model_type", kind: "enum", T: wa.getEnumType(Gw) }, { no: 25, name: "use_chunk_speculation_for_long_files", kind: "scalar", T: 8, opt: true }, { no: 26, name: "parent_request_id", kind: "scalar", T: 9, opt: true }, { no: 27, name: "source", kind: "enum", T: wa.getEnumType(Jy), opt: true }, { no: 28, name: "is_reapply", kind: "scalar", T: 8, opt: true }, { no: 29, name: "willing_to_pay_extra_for_speed", kind: "scalar", T: 8, opt: true }, { no: 30, name: "attempt_number", kind: "scalar", T: 5, opt: true }, { no: 31, name: "should_throw_timeout_error", kind: "scalar", T: 8, opt: true }]), Gw = wa.makeEnum("aiserver.v1.SlashEditRequest.FastApplyModelType", [{ no: 0, name: "FAST_APPLY_MODEL_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "FAST_APPLY_MODEL_TYPE_DEFAULT", localName: "DEFAULT" }, { no: 2, name: "FAST_APPLY_MODEL_TYPE_DEEPSEEK", localName: "DEEPSEEK" }, { no: 3, name: "FAST_APPLY_MODEL_TYPE_SONNET", localName: "SONNET" }, { no: 4, name: "FAST_APPLY_MODEL_TYPE_OPUS_DIFF", localName: "OPUS_DIFF" }, { no: 5, name: "FAST_APPLY_MODEL_TYPE_SMART_REWRITE", localName: "SMART_REWRITE" }, { no: 6, name: "FAST_APPLY_MODEL_TYPE_GPT4", localName: "GPT4" }, { no: 7, name: "FAST_APPLY_MODEL_TYPE_GPT4_NOSPEC", localName: "GPT4_NOSPEC" }, { no: 8, name: "FAST_APPLY_MODEL_TYPE_SMART_REWRITE_NOSPEC", localName: "SMART_REWRITE_NOSPEC" }, { no: 9, name: "FAST_APPLY_MODEL_TYPE_OPUS", localName: "OPUS" }, { no: 10, name: "FAST_APPLY_MODEL_TYPE_HAIKU", localName: "HAIKU" }, { no: 11, name: "FAST_APPLY_MODEL_TYPE_GPT4O_NOSPEC", localName: "GPT4O_NOSPEC" }, { no: 12, name: "FAST_APPLY_MODEL_TYPE_GPT4O_DIFF", localName: "GPT4O_DIFF" }, { no: 13, name: "FAST_APPLY_MODEL_TYPE_CODESTRAL_REWRITE", localName: "CODESTRAL_REWRITE" }, { no: 14, name: "FAST_APPLY_MODEL_TYPE_DEEPSEEK_33B", localName: "DEEPSEEK_33B" }, { no: 15, name: "FAST_APPLY_MODEL_TYPE_SONNET_35_DIFF", localName: "SONNET_35_DIFF" }, { no: 16, name: "FAST_APPLY_MODEL_TYPE_SONNET_35_REWRITE", localName: "SONNET_35_REWRITE" }, { no: 17, name: "FAST_APPLY_MODEL_TYPE_PROMPTED_DEEPSEEK_V2", localName: "PROMPTED_DEEPSEEK_V2" }, { no: 18, name: "FAST_APPLY_MODEL_TYPE_CODESTRAL_REWRITE_OLD", localName: "CODESTRAL_REWRITE_OLD" }, { no: 19, name: "FAST_APPLY_MODEL_TYPE_CODESTRAL_REWRITE_FP16", localName: "CODESTRAL_REWRITE_FP16" }, { no: 20, name: "FAST_APPLY_MODEL_TYPE_DEEPSEEK_33B_V2", localName: "DEEPSEEK_33B_V2" }, { no: 21, name: "FAST_APPLY_MODEL_TYPE_CODESTRAL_V4", localName: "CODESTRAL_V4" }, { no: 22, name: "FAST_APPLY_MODEL_TYPE_CODESTRAL_V5", localName: "CODESTRAL_V5" }, { no: 23, name: "FAST_APPLY_MODEL_TYPE_CODESTRAL_V6", localName: "CODESTRAL_V6" }, { no: 24, name: "FAST_APPLY_MODEL_TYPE_CODESTRAL_V7", localName: "CODESTRAL_V7" }]), Yw = wa.makeMessageType("aiserver.v1.SlashEditResponse", () => [{ no: 1, name: "cmd_k_response", kind: "message", T: Fy }]), Jw = wa.makeMessageType("aiserver.v1.SlashEditPreviousEdit", () => [{ no: 1, name: "original_lines", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "new_lines", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 4, name: "range", kind: "message", T: Bo }]), Vw = wa.makeMessageType("aiserver.v1.SlashEditFollowUpWithPreviousEditsRequest", () => [{ no: 1, name: "conversation", kind: "message", T: yI, repeated: true }, { no: 2, name: "model_details", kind: "message", T: Go }, { no: 3, name: "previous_edits", kind: "message", T: Jw, repeated: true }]), qw = wa.makeMessageType("aiserver.v1.StreamSlashEditFollowUpWithPreviousEditsResponse", () => [{ no: 1, name: "chat", kind: "message", T: Hw, oneof: "response" }, { no: 2, name: "edits_to_update", kind: "message", T: Ww, oneof: "response" }]), Hw = wa.makeMessageType("aiserver.v1.StreamSlashEditFollowUpWithPreviousEditsResponse.Chat", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }], { localName: "StreamSlashEditFollowUpWithPreviousEditsResponse_Chat" }), Ww = wa.makeMessageType("aiserver.v1.StreamSlashEditFollowUpWithPreviousEditsResponse.EditsToUpdate", () => [{ no: 1, name: "previous_edits", kind: "message", T: Jw, repeated: true }], { localName: "StreamSlashEditFollowUpWithPreviousEditsResponse_EditsToUpdate" }), Kw = wa.makeMessageType("aiserver.v1.StreamFastEditRequest", () => [{ no: 1, name: "current_file", kind: "message", T: Uo }, { no: 3, name: "repositories", kind: "message", T: OA, repeated: true }, { no: 4, name: "explicit_context", kind: "message", T: jo }, { no: 5, name: "workspace_root_path", kind: "scalar", T: 9, opt: true }, { no: 6, name: "query", kind: "scalar", T: 9 }, { no: 7, name: "code_blocks", kind: "message", T: Ro, repeated: true }, { no: 9, name: "model_details", kind: "message", T: Go }, { no: 10, name: "documentation_identifiers", kind: "scalar", T: 9, repeated: true }, { no: 11, name: "linter_errors", kind: "message", T: Ho }]), jw = wa.makeMessageType("aiserver.v1.StreamFastEditResponse", () => [{ no: 2, name: "line_number", kind: "scalar", T: 5 }, { no: 3, name: "replace_num_lines", kind: "scalar", T: 5 }, { no: 5, name: "edit_uuid", kind: "scalar", T: 9 }, { no: 4, name: "done", kind: "scalar", T: 8, opt: true }, { no: 6, name: "new_line", kind: "scalar", T: 9, opt: true }, { no: 7, name: "reset_new_lines", kind: "scalar", T: 8 }]), Xw = wa.makeMessageType("aiserver.v1.StreamEditRequest", () => [{ no: 1, name: "current_file", kind: "message", T: Uo }, { no: 2, name: "conversation", kind: "message", T: yI, repeated: true }, { no: 3, name: "repositories", kind: "message", T: OA, repeated: true }, { no: 4, name: "explicit_context", kind: "message", T: jo }, { no: 5, name: "workspace_root_path", kind: "scalar", T: 9, opt: true }, { no: 6, name: "query", kind: "scalar", T: 9 }, { no: 7, name: "code_blocks", kind: "message", T: Ro, repeated: true }, { no: 9, name: "model_details", kind: "message", T: Go }, { no: 10, name: "documentation_identifiers", kind: "scalar", T: 9, repeated: true }, { no: 11, name: "linter_errors", kind: "message", T: Ho }, { no: 12, name: "prompt_code_blocks", kind: "message", T: Ro, repeated: true }, { no: 14, name: "session_id", kind: "scalar", T: 9 }, { no: 13, name: "cmd_k_debug_info", kind: "message", T: Io }, { no: 15, name: "fast_mode", kind: "scalar", T: 8 }, { no: 16, name: "original_request", kind: "message", T: Xw }, { no: 17, name: "images", kind: "message", T: sr, repeated: true }, { no: 18, name: "links", kind: "message", T: lr, repeated: true }, { no: 19, name: "rules", kind: "message", T: Ko, repeated: true }]), Zw = wa.makeMessageType("aiserver.v1.PreloadEditRequest", () => [{ no: 1, name: "req", kind: "message", T: Xw }]), zw = wa.makeMessageType("aiserver.v1.PreloadEditResponse", []), $w = wa.makeMessageType("aiserver.v1.StreamAiLintBugRequest", () => [{ no: 1, name: "chunks_to_analyze", kind: "message", T: eb, repeated: true }, { no: 4, name: "explicit_context", kind: "message", T: jo }, { no: 5, name: "workspace_root_path", kind: "scalar", T: 9, opt: true }, { no: 9, name: "model_details", kind: "message", T: Go }, { no: 10, name: "dismissed_bugs", kind: "message", T: Wy, repeated: true }, { no: 11, name: "active_bugs", kind: "message", T: Wy, repeated: true }, { no: 12, name: "lint_rules", kind: "message", T: jy, repeated: true }, { no: 14, name: "clients", kind: "message", T: nb, repeated: true }, { no: 17, name: "force_enable_discriminators", kind: "enum", T: wa.getEnumType(Vy), repeated: true }, { no: 18, name: "force_disable_discriminators", kind: "enum", T: wa.getEnumType(Vy), repeated: true }, { no: 19, name: "force_enable_generators", kind: "enum", T: wa.getEnumType(qy), repeated: true }, { no: 20, name: "force_disable_generators", kind: "enum", T: wa.getEnumType(qy), repeated: true }, { no: 21, name: "version", kind: "scalar", T: 5 }, { no: 15, name: "discriminator_options", kind: "message", T: ab, opt: true }, { no: 16, name: "debug_mode", kind: "scalar", T: 8 }]), eb = wa.makeMessageType("aiserver.v1.StreamAiLintBugRequest.CodeChunk", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "start_line_number", kind: "scalar", T: 5 }, { no: 3, name: "lines", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "context_lines_before", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "context_lines_after", kind: "scalar", T: 9, repeated: true }], { localName: "StreamAiLintBugRequest_CodeChunk" }), nb = wa.makeMessageType("aiserver.v1.StreamAiLintBugRequest.CodeChunkList", () => [{ no: 13, name: "chunks", kind: "message", T: eb, repeated: true }, { no: 14, name: "referred_start_lines", kind: "scalar", T: 5, repeated: true }, { no: 15, name: "referred_end_lines", kind: "scalar", T: 5, repeated: true }], { localName: "StreamAiLintBugRequest_CodeChunkList" }), ab = wa.makeMessageType("aiserver.v1.StreamAiLintBugRequest.DiscriminatorOptions", () => [{ no: 1, name: "specific_rules", kind: "scalar", T: 8 }, { no: 2, name: "compile_errors", kind: "scalar", T: 8 }, { no: 3, name: "change_behavior", kind: "scalar", T: 8 }, { no: 4, name: "match_code", kind: "scalar", T: 8 }, { no: 5, name: "relevance", kind: "scalar", T: 8 }, { no: 6, name: "user_awareness", kind: "scalar", T: 8 }], { localName: "StreamAiLintBugRequest_DiscriminatorOptions" }), tb = wa.makeMessageType("aiserver.v1.StreamAiLintBugResponse", () => [{ no: 1, name: "bug", kind: "message", T: Wy, oneof: "response" }, { no: 2, name: "background_task_uuid", kind: "scalar", T: 9, oneof: "response" }]), sb = wa.makeMessageType("aiserver.v1.LogUserLintReplyRequest", () => [{ no: 1, name: "uuid", kind: "scalar", T: 9 }, { no: 2, name: "user_action", kind: "scalar", T: 9 }, { no: 3, name: "debug_mode", kind: "scalar", T: 8 }]), ob = wa.makeMessageType("aiserver.v1.LogUserLintReplyResponse", []), rb = wa.makeMessageType("aiserver.v1.LogLinterExplicitUserFeedbackRequest", () => [{ no: 1, name: "bug", kind: "message", T: Wy }, { no: 3, name: "user_feedback", kind: "enum", T: wa.getEnumType(ib) }, { no: 4, name: "user_feedback_details", kind: "scalar", T: 9 }]), ib = wa.makeEnum("aiserver.v1.LogLinterExplicitUserFeedbackRequest.LinterUserFeedback", [{ no: 0, name: "LINTER_USER_FEEDBACK_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "LINTER_USER_FEEDBACK_CORRECT", localName: "CORRECT" }, { no: 2, name: "LINTER_USER_FEEDBACK_INCORRECT", localName: "INCORRECT" }, { no: 3, name: "LINTER_USER_FEEDBACK_OTHER", localName: "OTHER" }]), Ab = wa.makeMessageType("aiserver.v1.LogLinterExplicitUserFeedbackResponse", []), lb = wa.makeMessageType("aiserver.v1.StreamNewRuleRequest", () => [{ no: 1, name: "current_rules", kind: "scalar", T: 9 }, { no: 2, name: "dismissed_bug", kind: "scalar", T: 9 }]), cb = wa.makeMessageType("aiserver.v1.CursorHelpConversationMessage", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "role", kind: "scalar", T: 9 }, { no: 3, name: "content", kind: "scalar", T: 9 }]), mb = wa.makeMessageType("aiserver.v1.StreamAiCursorHelpRequest", () => [{ no: 1, name: "messages", kind: "message", T: cb, repeated: true }, { no: 2, name: "user_os", kind: "scalar", T: 9 }, { no: 3, name: "model_details", kind: "message", T: Go }]), db = wa.makeMessageType("aiserver.v1.StreamAiCursorHelpResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "actions", kind: "scalar", T: 9, repeated: true }]), gb = wa.makeMessageType("aiserver.v1.StreamTerminalAutocompleteRequest", () => [{ no: 1, name: "current_command", kind: "scalar", T: 9 }, { no: 2, name: "command_history", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "model_name", kind: "scalar", T: 9, opt: true }, { no: 4, name: "file_diff_histories", kind: "message", T: _f, repeated: true }, { no: 5, name: "git_diff", kind: "scalar", T: 9, opt: true }, { no: 6, name: "commit_history", kind: "scalar", T: 9, repeated: true }, { no: 7, name: "past_results", kind: "scalar", T: 9, repeated: true }]), ub = wa.makeMessageType("aiserver.v1.PseudocodeTarget", () => [{ no: 1, name: "range", kind: "message", T: ko }, { no: 2, name: "content", kind: "scalar", T: 9 }]), Eb = wa.makeMessageType("aiserver.v1.StreamPseudocodeGeneratorRequest", () => [{ no: 1, name: "current_file", kind: "message", T: Uo }, { no: 2, name: "target", kind: "message", T: ub }]), pb = wa.makeMessageType("aiserver.v1.StreamPseudocodeGeneratorResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }]), Tb = wa.makeMessageType("aiserver.v1.StreamPseudocodeMapperRequest", () => [{ no: 2, name: "target", kind: "message", T: ub }, { no: 1, name: "pseudocode", kind: "scalar", T: 9 }]), kb = wa.makeMessageType("aiserver.v1.StreamPseudocodeMapperResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }]), Ib = wa.makeMessageType("aiserver.v1.StreamTerminalAutocompleteResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "done_stream", kind: "scalar", T: 8, opt: true }]), hb = wa.makeMessageType("aiserver.v1.DebugInfo", () => [{ no: 1, name: "breakpoint", kind: "message", T: Bb }, { no: 2, name: "call_stack", kind: "message", T: fb, repeated: true }, { no: 3, name: "history", kind: "message", T: Ro, repeated: true }]), _b = wa.makeMessageType("aiserver.v1.DebugInfo.Variable", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 9 }, { no: 3, name: "type", kind: "scalar", T: 9, opt: true }], { localName: "DebugInfo_Variable" }), Cb = wa.makeMessageType("aiserver.v1.DebugInfo.Scope", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "variables", kind: "message", T: _b, repeated: true }], { localName: "DebugInfo_Scope" }), fb = wa.makeMessageType("aiserver.v1.DebugInfo.CallStackFrame", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "line_number", kind: "scalar", T: 5 }, { no: 3, name: "function_name", kind: "scalar", T: 9 }, { no: 4, name: "scopes", kind: "message", T: Cb, repeated: true }], { localName: "DebugInfo_CallStackFrame" }), Bb = wa.makeMessageType("aiserver.v1.DebugInfo.Breakpoint", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "line_number", kind: "scalar", T: 5 }, { no: 3, name: "lines_before_breakpoint", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "lines_after_breakpoint", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "exception_info", kind: "scalar", T: 9, opt: true }], { localName: "DebugInfo_Breakpoint" }), Qb = wa.makeMessageType("aiserver.v1.GetChatRequest", () => [{ no: 1, name: "current_file", kind: "message", T: Uo }, { no: 2, name: "conversation", kind: "message", T: yI, repeated: true }, { no: 3, name: "repositories", kind: "message", T: OA, repeated: true }, { no: 4, name: "explicit_context", kind: "message", T: jo }, { no: 5, name: "workspace_root_path", kind: "scalar", T: 9, opt: true }, { no: 6, name: "code_blocks", kind: "message", T: Ro, repeated: true }, { no: 7, name: "model_details", kind: "message", T: Go }, { no: 8, name: "documentation_identifiers", kind: "scalar", T: 9, repeated: true }, { no: 9, name: "request_id", kind: "scalar", T: 9 }, { no: 10, name: "linter_errors", kind: "message", T: Ho }, { no: 11, name: "summary", kind: "scalar", T: 9, opt: true }, { no: 12, name: "summary_up_until_index", kind: "scalar", T: 5, opt: true }, { no: 13, name: "allow_long_file_scan", kind: "scalar", T: 8, opt: true }, { no: 14, name: "is_bash", kind: "scalar", T: 8, opt: true }, { no: 15, name: "conversation_id", kind: "scalar", T: 9 }, { no: 16, name: "can_handle_filenames_after_language_ids", kind: "scalar", T: 8, opt: true }, { no: 17, name: "use_web", kind: "scalar", T: 9, opt: true }, { no: 18, name: "quotes", kind: "message", T: rr, repeated: true }, { no: 19, name: "debug_info", kind: "message", T: hb, opt: true }, { no: 20, name: "workspace_id", kind: "scalar", T: 9, opt: true }, { no: 21, name: "external_links", kind: "message", T: ir, repeated: true }, { no: 23, name: "commit_notes", kind: "message", T: cr, repeated: true }, { no: 22, name: "long_context_mode", kind: "scalar", T: 8, opt: true }, { no: 24, name: "is_eval", kind: "scalar", T: 8, opt: true }, { no: 26, name: "desired_max_tokens", kind: "scalar", T: 5, opt: true }, { no: 25, name: "context_ast", kind: "message", T: Xy }, { no: 27, name: "is_composer", kind: "scalar", T: 8, opt: true }, { no: 28, name: "runnable_code_blocks", kind: "scalar", T: 8, opt: true }, { no: 29, name: "should_cache", kind: "scalar", T: 8, opt: true }, { no: 30, name: "allow_model_fallbacks", kind: "scalar", T: 8, opt: true }, { no: 31, name: "number_of_times_shown_fallback_model_warning", kind: "scalar", T: 5, opt: true }]), yb = wa.makeMessageType("aiserver.v1.PotentialLocsInitialQueriesRequest", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }]), Rb = wa.makeMessageType("aiserver.v1.PotentialLocsInitialQueriesResponse", () => [{ no: 1, name: "hyde_query", kind: "scalar", T: 9 }]), Nb = wa.makeMessageType("aiserver.v1.PotentialLocsUnderneathRequest", () => [{ no: 1, name: "file", kind: "scalar", T: 9 }, { no: 2, name: "ranges", kind: "message", T: go, repeated: true }, { no: 3, name: "query", kind: "scalar", T: 9 }]), vb = wa.makeMessageType("aiserver.v1.PotentialLocsUnderneathResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }]), Sb = wa.makeMessageType("aiserver.v1.PotentialLocsRequest", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }]), Db = wa.makeMessageType("aiserver.v1.PotentialLocsResponse", () => [{ no: 1, name: "potential_loc", kind: "scalar", T: 9 }]), wb = wa.makeMessageType("aiserver.v1.GetComposerChatRequest", () => [{ no: 1, name: "conversation", kind: "message", T: yI, repeated: true }, { no: 2, name: "allow_long_file_scan", kind: "scalar", T: 8, opt: true }, { no: 3, name: "explicit_context", kind: "message", T: jo }, { no: 4, name: "can_handle_filenames_after_language_ids", kind: "scalar", T: 8, opt: true }, { no: 5, name: "model_details", kind: "message", T: Go }, { no: 6, name: "linter_errors", kind: "message", T: Ho }, { no: 7, name: "documentation_identifiers", kind: "scalar", T: 9, repeated: true }, { no: 8, name: "use_web", kind: "scalar", T: 9, opt: true }, { no: 9, name: "external_links", kind: "message", T: Ar, repeated: true }, { no: 10, name: "project_context", kind: "message", T: yI, opt: true }, { no: 11, name: "diffs_for_compressing_files", kind: "message", T: bb, repeated: true }, { no: 12, name: "compress_edits", kind: "scalar", T: 8, opt: true }, { no: 13, name: "should_cache", kind: "scalar", T: 8, opt: true }, { no: 14, name: "multi_file_linter_errors", kind: "message", T: Ho, repeated: true }, { no: 15, name: "current_file", kind: "message", T: Uo }, { no: 16, name: "recent_edits", kind: "message", T: Mb, opt: true }, { no: 17, name: "use_reference_composer_diff_prompt", kind: "scalar", T: 8, opt: true }, { no: 18, name: "file_diff_histories", kind: "message", T: gI, repeated: true }, { no: 19, name: "use_new_compression_scheme", kind: "scalar", T: 8, opt: true }, { no: 20, name: "additional_ranked_context", kind: "message", T: nI, repeated: true }, { no: 21, name: "quotes", kind: "message", T: rr, repeated: true }, { no: 22, name: "willing_to_pay_extra_for_speed", kind: "scalar", T: 8, opt: true }, { no: 23, name: "conversation_id", kind: "scalar", T: 9 }, { no: 24, name: "use_unified_chat_prompt", kind: "scalar", T: 8, opt: true }, { no: 25, name: "use_full_inputs_context", kind: "scalar", T: 8, opt: true }, { no: 26, name: "is_resume", kind: "scalar", T: 8, opt: true }, { no: 27, name: "context_bank_session_id", kind: "scalar", T: 9, opt: true }, { no: 28, name: "context_bank_version", kind: "scalar", T: 5, opt: true }, { no: 31, name: "context_bank_encryption_key", kind: "scalar", T: 12, opt: true }, { no: 29, name: "uses_codebase_results", kind: "message", T: jS }]), bb = wa.makeMessageType("aiserver.v1.GetComposerChatRequest.RedDiff", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "red_ranges", kind: "message", T: go, repeated: true }, { no: 3, name: "red_ranges_reversed", kind: "message", T: go, repeated: true }, { no: 4, name: "start_hash", kind: "scalar", T: 9 }, { no: 5, name: "end_hash", kind: "scalar", T: 9 }], { localName: "GetComposerChatRequest_RedDiff" }), Mb = wa.makeMessageType("aiserver.v1.GetComposerChatRequest.RecentEdits", () => [{ no: 1, name: "code_block_info", kind: "message", T: Fb, repeated: true }, { no: 2, name: "final_file_values", kind: "message", T: Ob, repeated: true }, { no: 3, name: "edits_belong_to_composer_generation_uuid", kind: "scalar", T: 9, opt: true }], { localName: "GetComposerChatRequest_RecentEdits" }), Fb = wa.makeMessageType("aiserver.v1.GetComposerChatRequest.RecentEdits.CodeBlockInfo", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "content_before", kind: "scalar", T: 9, opt: true }, { no: 3, name: "content_after", kind: "scalar", T: 9, opt: true }, { no: 4, name: "generation_uuid", kind: "scalar", T: 9, opt: true }, { no: 5, name: "version", kind: "scalar", T: 5, opt: true }], { localName: "GetComposerChatRequest_RecentEdits_CodeBlockInfo" }), Ob = wa.makeMessageType("aiserver.v1.GetComposerChatRequest.RecentEdits.FileInfo", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "content", kind: "scalar", T: 9 }], { localName: "GetComposerChatRequest_RecentEdits_FileInfo" }), Ub = wa.makeMessageType("aiserver.v1.CheckUsageBasedPriceRequest", () => [{ no: 1, name: "usage_event_details", kind: "message", T: oR }]), Lb = wa.makeMessageType("aiserver.v1.CheckUsageBasedPriceResponse", () => [{ no: 1, name: "markdown_response", kind: "scalar", T: 9 }, { no: 2, name: "cents", kind: "scalar", T: 5 }, { no: 3, name: "price_id", kind: "scalar", T: 9 }]), Pb = wa.makeMessageType("aiserver.v1.CheckQueuePositionRequest", () => [{ no: 1, name: "orig_request_id", kind: "scalar", T: 9 }, { no: 2, name: "model_details", kind: "message", T: Go }, { no: 3, name: "usage_uuid", kind: "scalar", T: 9 }]), xb = wa.makeMessageType("aiserver.v1.CheckQueuePositionResponse", () => [{ no: 1, name: "position", kind: "scalar", T: 5 }, { no: 2, name: "seconds_left_to_wait", kind: "scalar", T: 5, opt: true }, { no: 7, name: "new_queue_position", kind: "scalar", T: 5, opt: true }, { no: 3, name: "hit_hard_limit", kind: "scalar", T: 8 }, { no: 4, name: "could_enable_usage_based_pricing_to_skip", kind: "scalar", T: 8 }, { no: 5, name: "usage_event_details", kind: "message", T: oR }, { no: 6, name: "custom_link", kind: "message", T: Gb }, { no: 8, name: "model_for_slow_pool_nudge_data", kind: "message", T: Yb, opt: true }]), Gb = wa.makeMessageType("aiserver.v1.CheckQueuePositionResponse.CustomLink", () => [{ no: 1, name: "address", kind: "scalar", T: 9 }, { no: 2, name: "message", kind: "scalar", T: 9 }], { localName: "CheckQueuePositionResponse_CustomLink" }), Yb = wa.makeMessageType("aiserver.v1.CheckQueuePositionResponse.ModelForSlowPoolNudgeData", () => [{ no: 1, name: "model", kind: "scalar", T: 9 }, { no: 2, name: "message", kind: "scalar", T: 9 }], { localName: "CheckQueuePositionResponse_ModelForSlowPoolNudgeData" }), Jb = wa.makeMessageType("aiserver.v1.IsolatedTreesitterRequest", () => [{ no: 1, name: "file_content", kind: "scalar", T: 9 }, { no: 2, name: "language_id", kind: "scalar", T: 9 }, { no: 3, name: "command_id", kind: "scalar", T: 9 }]), Vb = wa.makeMessageType("aiserver.v1.IsolatedTreesitterResponse", () => [{ no: 1, name: "items", kind: "message", T: Hb, repeated: true }]), qb = wa.makeMessageType("aiserver.v1.IsolatedTreesitterResponse.TreeSitterPosition", () => [{ no: 1, name: "row", kind: "scalar", T: 5 }, { no: 2, name: "column", kind: "scalar", T: 5 }], { localName: "IsolatedTreesitterResponse_TreeSitterPosition" }), Hb = wa.makeMessageType("aiserver.v1.IsolatedTreesitterResponse.TreesitterSymbolNameItem", () => [{ no: 1, name: "symbol_name", kind: "scalar", T: 9 }, { no: 2, name: "start_position", kind: "message", T: qb, opt: true }, { no: 3, name: "end_position", kind: "message", T: qb, opt: true }], { localName: "IsolatedTreesitterResponse_TreesitterSymbolNameItem" }), Wb = wa.makeMessageType("aiserver.v1.GetSimplePromptRequest", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }, { no: 2, name: "answer_placeholder", kind: "scalar", T: 9 }]), Kb = wa.makeMessageType("aiserver.v1.GetSimplePromptResponse", () => [{ no: 1, name: "result", kind: "scalar", T: 9 }]), jb = wa.makeMessageType("aiserver.v1.SuggestQuickActionsRequest", () => [{ no: 1, name: "candidates", kind: "message", T: Xb, repeated: true }, { no: 2, name: "last_user_message", kind: "scalar", T: 9 }, { no: 3, name: "last_assistant_message", kind: "scalar", T: 9 }, { no: 4, name: "max_suggestions", kind: "scalar", T: 5, opt: true }, { no: 5, name: "recently_used_skill_ids", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "include_skills", kind: "scalar", T: 8 }, { no: 7, name: "include_text", kind: "scalar", T: 8 }]), Xb = wa.makeMessageType("aiserver.v1.QuickActionCandidate", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "description", kind: "scalar", T: 9 }]), Zb = wa.makeMessageType("aiserver.v1.SuggestQuickActionsResponse", () => [{ no: 1, name: "suggestions", kind: "message", T: zb, repeated: true }]), zb = wa.makeMessageType("aiserver.v1.SuggestedQuickAction", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "label", kind: "scalar", T: 9 }, { no: 3, name: "type", kind: "scalar", T: 9 }]), $b = wa.makeMessageType("aiserver.v1.GetPassthroughPromptRequest", () => [{ no: 1, name: "query", kind: "scalar", T: 9 }, { no: 2, name: "model_name", kind: "scalar", T: 9 }]), eM = wa.makeMessageType("aiserver.v1.GetPassthroughPromptResponse", () => [{ no: 1, name: "result", kind: "scalar", T: 9 }]), nM = wa.makeMessageType("aiserver.v1.CheckLongFilesFitResponse", () => [{ no: 1, name: "did_fit", kind: "scalar", T: 8 }]), aM = wa.makeMessageType("aiserver.v1.GetEvaluationPromptRequest", () => [{ no: 1, name: "prompt_type", kind: "enum", T: wa.getEnumType(tM) }, { no: 2, name: "current_file", kind: "message", T: Uo }, { no: 3, name: "query", kind: "scalar", T: 9 }, { no: 4, name: "bucket_id", kind: "scalar", T: 9 }, { no: 5, name: "query_strategy", kind: "scalar", T: 9 }, { no: 6, name: "token_limit", kind: "scalar", T: 5 }, { no: 7, name: "reranking_strategy", kind: "enum", T: wa.getEnumType(sM) }]), tM = wa.makeEnum("aiserver.v1.GetEvaluationPromptRequest.EvaluationPromptType", [{ no: 0, name: "EVALUATION_PROMPT_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "EVALUATION_PROMPT_TYPE_GENERATE", localName: "GENERATE" }, { no: 2, name: "EVALUATION_PROMPT_TYPE_CHAT", localName: "CHAT" }]), sM = wa.makeEnum("aiserver.v1.GetEvaluationPromptRequest.RerankingStrategy", [{ no: 0, name: "RERANKING_STRATEGY_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "RERANKING_STRATEGY_DISTANCE_ONLY", localName: "DISTANCE_ONLY" }, { no: 2, name: "RERANKING_STRATEGY_GPT4_RELEVANCE", localName: "GPT4_RELEVANCE" }]), oM = wa.makeMessageType("aiserver.v1.GetEvaluationPromptResponse", () => [{ no: 1, name: "prompt", kind: "scalar", T: 9 }, { no: 2, name: "token_count", kind: "scalar", T: 5 }, { no: 3, name: "estimated_token_count", kind: "scalar", T: 5 }]), rM = wa.makeMessageType("aiserver.v1.GetChatTitleRequest", () => [{ no: 2, name: "conversation", kind: "message", T: yI, repeated: true }]), iM = wa.makeMessageType("aiserver.v1.GetChatTitleResponse", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }]), AM = wa.makeMessageType("aiserver.v1.ServerTimingInfo", () => [{ no: 1, name: "server_start_time", kind: "scalar", T: 1 }, { no: 2, name: "server_first_token_time", kind: "scalar", T: 1 }, { no: 3, name: "server_request_sent_time", kind: "scalar", T: 1 }, { no: 4, name: "server_end_time", kind: "scalar", T: 1 }]), lM = wa.makeMessageType("aiserver.v1.StreamChatResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 22, name: "server_bubble_id", kind: "scalar", T: 9, opt: true }, { no: 2, name: "debugging_only_chat_prompt", kind: "scalar", T: 9, opt: true }, { no: 3, name: "debugging_only_token_count", kind: "scalar", T: 5, opt: true }, { no: 4, name: "document_citation", kind: "message", T: aI }, { no: 5, name: "filled_prompt", kind: "scalar", T: 9, opt: true }, { no: 6, name: "is_big_file", kind: "scalar", T: 8, opt: true }, { no: 7, name: "intermediate_text", kind: "scalar", T: 9, opt: true }, { no: 10, name: "is_using_slow_request", kind: "scalar", T: 8, opt: true }, { no: 8, name: "chunk_identity", kind: "message", T: mM, opt: true }, { no: 9, name: "docs_reference", kind: "message", T: oI, opt: true }, { no: 11, name: "web_citation", kind: "message", T: tI, opt: true }, { no: 12, name: "status_updates", kind: "message", T: AI, opt: true }, { no: 13, name: "timing_info", kind: "message", T: AM, opt: true }, { no: 14, name: "symbol_link", kind: "message", T: kI, opt: true }, { no: 15, name: "file_link", kind: "message", T: II, opt: true }, { no: 16, name: "conversation_summary", kind: "message", T: $k, opt: true }, { no: 17, name: "service_status_update", kind: "message", T: TI, opt: true }, { no: 18, name: "used_code", kind: "message", T: cM, opt: true }, { no: 26, name: "stop_using_dsv3_agentic_model", kind: "scalar", T: 8, opt: true }, { no: 27, name: "usage_uuid", kind: "scalar", T: 9, opt: true }]), cM = wa.makeMessageType("aiserver.v1.StreamChatResponse.UsedCode", () => [{ no: 1, name: "code_results", kind: "message", T: MA, repeated: true }], { localName: "StreamChatResponse_UsedCode" }), mM = wa.makeMessageType("aiserver.v1.StreamChatResponse.ChunkIdentity", () => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }, { no: 2, name: "start_line", kind: "scalar", T: 5 }, { no: 3, name: "end_line", kind: "scalar", T: 5 }, { no: 4, name: "text", kind: "scalar", T: 9 }, { no: 5, name: "chunk_type", kind: "enum", T: wa.getEnumType(Zk) }], { localName: "StreamChatResponse_ChunkIdentity" }), dM = wa.makeMessageType("aiserver.v1.WarmComposerCacheResponse", () => [{ no: 1, name: "did_warm_cache", kind: "scalar", T: 8 }]), gM = wa.makeMessageType("aiserver.v1.WarmChatCacheRequest", () => [{ no: 1, name: "request", kind: "message", T: Qb }]), uM = wa.makeMessageType("aiserver.v1.WarmChatCacheResponse", () => [{ no: 1, name: "did_warm_cache", kind: "scalar", T: 8 }]), EM = wa.makeMessageType("aiserver.v1.SurroundingLines", () => [{ no: 1, name: "start_line", kind: "scalar", T: 5 }, { no: 2, name: "lines", kind: "scalar", T: 9, repeated: true }]), pM = wa.makeMessageType("aiserver.v1.GetCompletionRequest", () => [{ no: 1, name: "file_identifier", kind: "message", T: kM }, { no: 2, name: "cursor_position", kind: "message", T: ro }, { no: 3, name: "surrounding_lines", kind: "message", T: EM }, { no: 4, name: "explicit_context", kind: "message", T: jo }, { no: 5, name: "suggestions_from_editor", kind: "scalar", T: 9, repeated: true }]), TM = wa.makeMessageType("aiserver.v1.GetCompletionResponse", () => [{ no: 1, name: "completion", kind: "scalar", T: 9 }, { no: 2, name: "score", kind: "scalar", T: 2 }, { no: 3, name: "debugging_only_completion_prompt", kind: "scalar", T: 9, opt: true }]), kM = wa.makeMessageType("aiserver.v1.UniqueFileIdentifier", () => [{ no: 1, name: "project_uuid", kind: "scalar", T: 9 }, { no: 2, name: "relative_path", kind: "scalar", T: 9 }, { no: 3, name: "language_id", kind: "scalar", T: 9, opt: true }]), IM = wa.makeMessageType("aiserver.v1.GetUserInfoRequest", []), hM = wa.makeMessageType("aiserver.v1.UsageData", () => [{ no: 2, name: "gpt4_requests", kind: "scalar", T: 5 }, { no: 3, name: "gpt4_max_requests", kind: "scalar", T: 5 }]), _M = wa.makeMessageType("aiserver.v1.GetUserInfoResponse", () => [{ no: 1, name: "user_id", kind: "scalar", T: 9 }, { no: 2, name: "jupyter_token", kind: "scalar", T: 9 }, { no: 3, name: "usage", kind: "message", T: hM }]), CM = wa.makeMessageType("aiserver.v1.DoThisForMeCheckRequest", () => [{ no: 1, name: "generation_uuid", kind: "scalar", T: 9 }, { no: 2, name: "completion", kind: "scalar", T: 9 }]), fM = wa.makeMessageType("aiserver.v1.DoThisForMeCheckResponse", () => [{ no: 1, name: "skip_action", kind: "message", T: BM, oneof: "action" }, { no: 2, name: "edit_action", kind: "message", T: QM, oneof: "action" }, { no: 3, name: "create_action", kind: "message", T: yM, oneof: "action" }, { no: 4, name: "run_action", kind: "message", T: RM, oneof: "action" }, { no: 5, name: "reasoning", kind: "scalar", T: 9 }]), BM = wa.makeMessageType("aiserver.v1.DoThisForMeCheckResponse.SkipAction", [], { localName: "DoThisForMeCheckResponse_SkipAction" }), QM = wa.makeMessageType("aiserver.v1.DoThisForMeCheckResponse.EditAction", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }], { localName: "DoThisForMeCheckResponse_EditAction" }), yM = wa.makeMessageType("aiserver.v1.DoThisForMeCheckResponse.CreateAction", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }], { localName: "DoThisForMeCheckResponse_CreateAction" }), RM = wa.makeMessageType("aiserver.v1.DoThisForMeCheckResponse.RunAction", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }], { localName: "DoThisForMeCheckResponse_RunAction" }), NM = wa.makeMessageType("aiserver.v1.DoThisForMeRequest", () => [{ no: 1, name: "generation_uuid", kind: "scalar", T: 9 }, { no: 2, name: "completion", kind: "scalar", T: 9 }, { no: 3, name: "action", kind: "message", T: fM }]), vM = wa.makeMessageType("aiserver.v1.DoThisForMeResponse", () => [{ no: 1, name: "update_status", kind: "message", T: SM, oneof: "event" }]), SM = wa.makeMessageType("aiserver.v1.DoThisForMeResponse.UpdateStatus", () => [{ no: 1, name: "status", kind: "scalar", T: 9 }], { localName: "DoThisForMeResponse_UpdateStatus" }), DM = wa.makeMessageType("aiserver.v1.DoThisForMeResponseWrapped", () => [{ no: 1, name: "real_response", kind: "message", T: vM, oneof: "response" }, { no: 2, name: "background_task_uuid", kind: "scalar", T: 9, oneof: "response" }]), wM = wa.makeMessageType("aiserver.v1.StreamChatToolformerContinueRequest", () => [{ no: 1, name: "toolformer_session_id", kind: "scalar", T: 9 }, { no: 2, name: "tool_result", kind: "message", T: am }]), bM = wa.makeMessageType("aiserver.v1.StreamChatToolformerResponse", () => [{ no: 1, name: "toolformer_session_id", kind: "scalar", T: 9, opt: true }, { no: 2, name: "output", kind: "message", T: MM, oneof: "response_type" }, { no: 3, name: "tool_action", kind: "message", T: OM, oneof: "response_type" }, { no: 4, name: "thought", kind: "message", T: FM, oneof: "response_type" }]), MM = wa.makeMessageType("aiserver.v1.StreamChatToolformerResponse.Output", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }], { localName: "StreamChatToolformerResponse_Output" }), FM = wa.makeMessageType("aiserver.v1.StreamChatToolformerResponse.Thought", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }], { localName: "StreamChatToolformerResponse_Thought" }), OM = wa.makeMessageType("aiserver.v1.StreamChatToolformerResponse.ToolAction", () => [{ no: 1, name: "user_facing_text", kind: "scalar", T: 9 }, { no: 3, name: "raw_model_output", kind: "scalar", T: 9 }, { no: 2, name: "tool_call", kind: "message", T: nm }, { no: 4, name: "more_to_come", kind: "scalar", T: 8 }], { localName: "StreamChatToolformerResponse_ToolAction" }), UM = wa.makeMessageType("aiserver.v1.TaskInstruction", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "attached_code_chunks", kind: "message", T: LM, repeated: true }, { no: 3, name: "current_file", kind: "message", T: Uo }, { no: 4, name: "repositories", kind: "message", T: OA, repeated: true }, { no: 5, name: "explicit_context", kind: "message", T: jo }]), LM = wa.makeMessageType("aiserver.v1.TaskInstruction.CodeChunk", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "start_line_number", kind: "scalar", T: 5 }, { no: 3, name: "lines", kind: "scalar", T: 9, repeated: true }], { localName: "TaskInstruction_CodeChunk" }), PM = wa.makeMessageType("aiserver.v1.TaskUserMessage", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "attached_code_chunks", kind: "message", T: xM, repeated: true }]), xM = wa.makeMessageType("aiserver.v1.TaskUserMessage.CodeChunk", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "start_line_number", kind: "scalar", T: 5 }, { no: 3, name: "lines", kind: "scalar", T: 9, repeated: true }], { localName: "TaskUserMessage_CodeChunk" }), GM = wa.makeMessageType("aiserver.v1.PushAiThoughtRequest", () => [{ no: 1, name: "thought", kind: "scalar", T: 9 }, { no: 2, name: "cmd_k_debug_info", kind: "message", T: Io }, { no: 3, name: "automated", kind: "scalar", T: 8 }, { no: 4, name: "metadata", kind: "message", T: YM, opt: true }]), YM = wa.makeMessageType("aiserver.v1.PushAiThoughtRequest.Metadata", () => [{ no: 1, name: "accepted_hallucinated_function_event", kind: "message", T: JM, oneof: "event" }], { localName: "PushAiThoughtRequest_Metadata" }), JM = wa.makeMessageType("aiserver.v1.PushAiThoughtRequest.Metadata.AcceptedHallucinatedFunctionEvent", () => [{ no: 1, name: "implementation_uuid", kind: "scalar", T: 9 }, { no: 2, name: "hallucinated_function_uuid", kind: "scalar", T: 9 }, { no: 3, name: "implementation", kind: "scalar", T: 9 }, { no: 4, name: "source", kind: "scalar", T: 9 }, { no: 5, name: "implementation_reqid", kind: "scalar", T: 9 }, { no: 6, name: "plan_reqid", kind: "scalar", T: 9 }, { no: 7, name: "reflection_reqid", kind: "scalar", T: 9 }], { localName: "PushAiThoughtRequest_Metadata_AcceptedHallucinatedFunctionEvent" }), VM = wa.makeMessageType("aiserver.v1.PushAiThoughtResponse", []), qM = wa.makeMessageType("aiserver.v1.CheckDoableAsTaskRequest", () => [{ no: 1, name: "model_output", kind: "scalar", T: 9 }, { no: 2, name: "model_details", kind: "message", T: Go }]), HM = wa.makeMessageType("aiserver.v1.CheckDoableAsTaskResponse", () => [{ no: 1, name: "doable_as_task", kind: "scalar", T: 8 }]), WM = wa.makeMessageType("aiserver.v1.InterfaceAgentInitRequest", () => [{ no: 1, name: "model_details", kind: "message", T: Go }, { no: 2, name: "debugging_only_live_mode", kind: "scalar", T: 8 }, { no: 3, name: "interface_agent_client_state", kind: "message", T: CR }]), KM = wa.makeMessageType("aiserver.v1.InterfaceAgentInitResponse", () => [{ no: 1, name: "task_uuid", kind: "scalar", T: 9 }, { no: 2, name: "human_readable_title", kind: "scalar", T: 9 }]), jM = wa.makeMessageType("aiserver.v1.StreamInterfaceAgentStatusRequest", () => [{ no: 1, name: "task_uuid", kind: "scalar", T: 9 }]), XM = wa.makeMessageType("aiserver.v1.StreamInterfaceAgentStatusResponse", () => [{ no: 1, name: "status", kind: "message", T: fR }]), ZM = wa.makeMessageType("aiserver.v1.TaskGetInterfaceAgentStatusRequest", () => [{ no: 1, name: "interface_agent_client_state", kind: "message", T: CR }]), zM = wa.makeMessageType("aiserver.v1.TaskGetInterfaceAgentStatusResponse", () => [{ no: 1, name: "status", kind: "message", T: fR }]), $M = wa.makeMessageType("aiserver.v1.TaskGetInterfaceAgentStatusResponseWrapped", () => [{ no: 1, name: "real_response", kind: "message", T: zM, oneof: "response" }, { no: 2, name: "background_task_uuid", kind: "scalar", T: 9, oneof: "response" }]), eF = wa.makeMessageType("aiserver.v1.TaskInitRequest", () => [{ no: 1, name: "instruction", kind: "message", T: UM }, { no: 2, name: "model_details", kind: "message", T: Go }, { no: 3, name: "debugging_only_live_mode", kind: "scalar", T: 8 }, { no: 4, name: "engine_id", kind: "scalar", T: 9, opt: true }]), nF = wa.makeMessageType("aiserver.v1.TaskInitResponse", () => [{ no: 1, name: "task_uuid", kind: "scalar", T: 9 }, { no: 2, name: "human_readable_title", kind: "scalar", T: 9 }]), aF = wa.makeMessageType("aiserver.v1.TaskStreamLogRequest", () => [{ no: 1, name: "task_uuid", kind: "scalar", T: 9 }, { no: 2, name: "start_sequence_number", kind: "scalar", T: 5 }]), tF = wa.makeMessageType("aiserver.v1.TaskLogOutput", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }]), sF = wa.makeMessageType("aiserver.v1.TaskLogToolAction", () => [{ no: 1, name: "user_facing_text", kind: "scalar", T: 9 }, { no: 3, name: "raw_model_output", kind: "scalar", T: 9 }, { no: 2, name: "tool_call", kind: "message", T: nm }]), oF = wa.makeMessageType("aiserver.v1.TaskLogThought", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }]), rF = wa.makeMessageType("aiserver.v1.TaskLogToolResult", () => [{ no: 1, name: "tool_result", kind: "message", T: am }, { no: 2, name: "action_sequence_number", kind: "scalar", T: 5 }]), iF = wa.makeMessageType("aiserver.v1.TaskLogItem", () => [{ no: 1, name: "sequence_number", kind: "scalar", T: 5 }, { no: 2, name: "is_not_done", kind: "scalar", T: 8 }, { no: 3, name: "output", kind: "message", T: tF, oneof: "log_item" }, { no: 4, name: "tool_action", kind: "message", T: sF, oneof: "log_item" }, { no: 5, name: "thought", kind: "message", T: oF, oneof: "log_item" }, { no: 6, name: "user_message", kind: "message", T: PM, oneof: "log_item" }, { no: 7, name: "instruction", kind: "message", T: UM, oneof: "log_item" }, { no: 8, name: "tool_result", kind: "message", T: rF, oneof: "log_item" }]), AF = wa.makeMessageType("aiserver.v1.TaskInfoRequest", () => [{ no: 1, name: "task_uuid", kind: "scalar", T: 9 }]), lF = wa.makeMessageType("aiserver.v1.TaskPauseRequest", () => [{ no: 1, name: "task_uuid", kind: "scalar", T: 9 }]), cF = wa.makeMessageType("aiserver.v1.TaskPauseResponse", []), mF = wa.makeMessageType("aiserver.v1.TaskInfoResponse", () => [{ no: 1, name: "human_readable_title", kind: "scalar", T: 9 }, { no: 2, name: "task_status", kind: "enum", T: wa.getEnumType(vR) }, { no: 3, name: "last_log_sequence_number", kind: "scalar", T: 5 }]), dF = wa.makeMessageType("aiserver.v1.TaskStreamLogResponse", () => [{ no: 1, name: "streamed_log_item", kind: "message", T: iF, oneof: "response" }, { no: 2, name: "info_update", kind: "message", T: gF, oneof: "response" }, { no: 3, name: "initial_task_info", kind: "message", T: mF, oneof: "response" }]), gF = wa.makeMessageType("aiserver.v1.TaskStreamLogResponse.InfoUpdate", () => [{ no: 1, name: "human_readable_title", kind: "scalar", T: 9, opt: true }, { no: 2, name: "task_status", kind: "enum", T: wa.getEnumType(vR), opt: true }], { localName: "TaskStreamLogResponse_InfoUpdate" }), uF = wa.makeMessageType("aiserver.v1.TaskProvideResultRequest", () => [{ no: 1, name: "task_uuid", kind: "scalar", T: 9 }, { no: 2, name: "action_sequence_number", kind: "scalar", T: 5 }, { no: 3, name: "tool_result", kind: "message", T: am }]), EF = wa.makeMessageType("aiserver.v1.TaskProvideResultResponse", []), pF = wa.makeMessageType("aiserver.v1.TaskSendMessageRequest", () => [{ no: 1, name: "task_uuid", kind: "scalar", T: 9 }, { no: 2, name: "user_message", kind: "message", T: PM }, { no: 3, name: "wants_attention_right_now", kind: "scalar", T: 8 }]), TF = wa.makeMessageType("aiserver.v1.TaskSendMessageResponse", []), kF = wa.makeMessageType("aiserver.v1.ReportFeedbackRequest", () => [{ no: 1, name: "feedback", kind: "scalar", T: 9 }, { no: 2, name: "feedback_type", kind: "enum", T: wa.getEnumType(IF) }]), IF = wa.makeEnum("aiserver.v1.ReportFeedbackRequest.FeedbackType", [{ no: 0, name: "FEEDBACK_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "FEEDBACK_TYPE_LOW_PRIORITY", localName: "LOW_PRIORITY" }, { no: 2, name: "FEEDBACK_TYPE_HIGH_PRIORITY", localName: "HIGH_PRIORITY" }]), hF = wa.makeMessageType("aiserver.v1.ReportFeedbackResponse", []), _F = wa.makeMessageType("aiserver.v1.LogFile", () => [{ no: 1, name: "relative_path_to_cursor_folder", kind: "scalar", T: 9 }, { no: 2, name: "contents", kind: "scalar", T: 9 }]), CF = wa.makeMessageType("aiserver.v1.BugReportScreenshot", () => [{ no: 1, name: "data", kind: "scalar", T: 12 }, { no: 2, name: "mime_type", kind: "scalar", T: 9 }]), fF = wa.makeMessageType("aiserver.v1.BugContext", () => [{ no: 1, name: "screenshots", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "current_file", kind: "message", T: Uo }, { no: 3, name: "conversation", kind: "message", T: yI, repeated: true }, { no: 4, name: "logs", kind: "message", T: _F, repeated: true }, { no: 5, name: "console_logs", kind: "scalar", T: 9 }, { no: 6, name: "cursor_version", kind: "scalar", T: 9 }, { no: 7, name: "os", kind: "scalar", T: 9 }, { no: 8, name: "proto_url", kind: "scalar", T: 9 }, { no: 9, name: "failing_requst_id", kind: "scalar", T: 9 }, { no: 10, name: "connection_error_raw", kind: "scalar", T: 9 }, { no: 12, name: "debug_info", kind: "message", T: Io }, { no: 13, name: "connect_error_code", kind: "scalar", T: 5, opt: true }, { no: 14, name: "error_detail_code", kind: "enum", T: wa.getEnumType(tr), opt: true }, { no: 15, name: "error_detail_title", kind: "scalar", T: 9, opt: true }, { no: 16, name: "error_detail_detail", kind: "scalar", T: 9, opt: true }, { no: 17, name: "binary_screenshots", kind: "message", T: CF, repeated: true }, { no: 18, name: "agent_host_module", kind: "message", T: BF }]), BF = wa.makeMessageType("aiserver.v1.BugReportAgentHostModule", () => [{ no: 1, name: "current", kind: "message", T: QF }, { no: 2, name: "host_lost", kind: "scalar", T: 8 }, { no: 3, name: "history", kind: "message", T: QF, repeated: true }]), QF = wa.makeMessageType("aiserver.v1.BugReportAgentHostModuleServe", () => [{ no: 1, name: "generation", kind: "scalar", T: 9 }, { no: 2, name: "source", kind: "scalar", T: 9 }, { no: 3, name: "channel", kind: "scalar", T: 9 }, { no: 4, name: "commit", kind: "scalar", T: 9, opt: true }, { no: 5, name: "built", kind: "scalar", T: 9, opt: true }, { no: 6, name: "cause", kind: "scalar", T: 9 }, { no: 7, name: "since_unix_ms", kind: "scalar", T: 1 }]), yF = wa.makeMessageType("aiserver.v1.ReportBugRequest", () => [{ no: 1, name: "bug", kind: "scalar", T: 9 }, { no: 2, name: "bug_type", kind: "enum", T: wa.getEnumType(RF) }, { no: 3, name: "context", kind: "message", T: fF }, { no: 4, name: "contact_email", kind: "scalar", T: 9 }]), RF = wa.makeEnum("aiserver.v1.ReportBugRequest.BugType", [{ no: 0, name: "BUG_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "BUG_TYPE_LOW", localName: "LOW" }, { no: 2, name: "BUG_TYPE_MEDIUM", localName: "MEDIUM" }, { no: 3, name: "BUG_TYPE_URGENT", localName: "URGENT" }, { no: 4, name: "BUG_TYPE_CRASH", localName: "CRASH" }, { no: 5, name: "BUG_TYPE_CONNECTION_ERROR", localName: "CONNECTION_ERROR" }, { no: 6, name: "BUG_TYPE_IDEA", localName: "IDEA" }, { no: 7, name: "BUG_TYPE_MISC_AUTOMATIC_ERROR", localName: "MISC_AUTOMATIC_ERROR" }]), NF = wa.makeMessageType("aiserver.v1.ReportBugResponse", []), vF = wa.makeMessageType("aiserver.v1.FixMarkersRequest", () => [{ no: 1, name: "markers", kind: "message", T: SF, repeated: true }, { no: 2, name: "model_details", kind: "message", T: Go }, { no: 3, name: "iteration_number", kind: "scalar", T: 5 }, { no: 4, name: "sequence_id", kind: "scalar", T: 9 }, { no: 5, name: "user_instruction", kind: "scalar", T: 9 }]), SF = wa.makeMessageType("aiserver.v1.FixMarkersRequest.Marker", () => [{ no: 1, name: "lines", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "start_line", kind: "scalar", T: 5 }, { no: 3, name: "end_line_inclusive", kind: "scalar", T: 5 }, { no: 4, name: "message", kind: "scalar", T: 9 }, { no: 5, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 6, name: "related_information", kind: "message", T: DF, repeated: true }, { no: 7, name: "context_ranges", kind: "message", T: wF, repeated: true }, { no: 8, name: "ancestor_type_definitions", kind: "message", T: bF, repeated: true }, { no: 9, name: "inserted_symbol_types", kind: "message", T: MF, repeated: true }, { no: 10, name: "quick_fixes", kind: "message", T: FF, repeated: true }, { no: 11, name: "start_column", kind: "scalar", T: 5 }, { no: 12, name: "end_column_inclusive", kind: "scalar", T: 5 }, { no: 13, name: "class_information", kind: "message", T: UF, repeated: true }, { no: 14, name: "function_signatures", kind: "message", T: PF, repeated: true }, { no: 15, name: "snapshot", kind: "scalar", T: 5 }], { localName: "FixMarkersRequest_Marker" }), DF = wa.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.RelatedInformation", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 3, name: "relevant_lines", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "start_line", kind: "scalar", T: 5 }], { localName: "FixMarkersRequest_Marker_RelatedInformation" }), wF = wa.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.ContextRange", () => [{ no: 1, name: "start_line", kind: "scalar", T: 5 }, { no: 2, name: "end_line_inclusive", kind: "scalar", T: 5 }], { localName: "FixMarkersRequest_Marker_ContextRange" }), bF = wa.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.AncestorTypeDefinition", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 3, name: "start_line", kind: "scalar", T: 5 }, { no: 4, name: "lines", kind: "scalar", T: 9, repeated: true }], { localName: "FixMarkersRequest_Marker_AncestorTypeDefinition" }), MF = wa.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.InsertedSymbolType", () => [{ no: 1, name: "symbol_name", kind: "scalar", T: 9 }, { no: 2, name: "symbol_type", kind: "scalar", T: 9 }, { no: 3, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 4, name: "symbol_line", kind: "scalar", T: 5 }], { localName: "FixMarkersRequest_Marker_InsertedSymbolType" }), FF = wa.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.QuickFix", () => [{ no: 1, name: "message", kind: "scalar", T: 9 }, { no: 2, name: "kind", kind: "scalar", T: 9 }, { no: 3, name: "is_preferred", kind: "scalar", T: 8 }, { no: 4, name: "edits", kind: "message", T: OF, repeated: true }], { localName: "FixMarkersRequest_Marker_QuickFix" }), OF = wa.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.QuickFix.Edit", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "start_line", kind: "scalar", T: 5 }, { no: 3, name: "end_line_inclusive", kind: "scalar", T: 5 }, { no: 4, name: "deleted_lines", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "add_lines", kind: "scalar", T: 9, repeated: true }, { no: 6, name: "snapshot", kind: "scalar", T: 5 }], { localName: "FixMarkersRequest_Marker_QuickFix_Edit" }), UF = wa.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.ClassInformation", () => [{ no: 1, name: "class_name", kind: "scalar", T: 9 }, { no: 2, name: "start_line", kind: "scalar", T: 5 }, { no: 3, name: "top_level_lines", kind: "scalar", T: 5, repeated: true }, { no: 4, name: "lines", kind: "scalar", T: 9, repeated: true }, { no: 5, name: "constructors", kind: "message", T: LF, repeated: true }, { no: 6, name: "detail", kind: "scalar", T: 9 }], { localName: "FixMarkersRequest_Marker_ClassInformation" }), LF = wa.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.ClassInformation.Constructor", () => [{ no: 1, name: "start_line", kind: "scalar", T: 5 }, { no: 2, name: "end_line_inclusive", kind: "scalar", T: 5 }], { localName: "FixMarkersRequest_Marker_ClassInformation_Constructor" }), PF = wa.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.FunctionSignature", () => [{ no: 1, name: "label", kind: "scalar", T: 9 }, { no: 2, name: "documentation", kind: "scalar", T: 9 }, { no: 3, name: "parameters", kind: "message", T: xF, repeated: true }], { localName: "FixMarkersRequest_Marker_FunctionSignature" }), xF = wa.makeMessageType("aiserver.v1.FixMarkersRequest.Marker.FunctionSignature.FunctionParameter", () => [{ no: 1, name: "label", kind: "scalar", T: 9 }, { no: 2, name: "documentation", kind: "scalar", T: 9 }], { localName: "FixMarkersRequest_Marker_FunctionSignature_FunctionParameter" }), GF = wa.makeMessageType("aiserver.v1.FixMarkersResponse", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "changes", kind: "message", T: YF, repeated: true }, { no: 3, name: "success", kind: "scalar", T: 8 }, { no: 4, name: "iteration_number", kind: "scalar", T: 5 }]), YF = wa.makeMessageType("aiserver.v1.FixMarkersResponse.Change", () => [{ no: 1, name: "start_line", kind: "scalar", T: 5 }, { no: 2, name: "end_line_exclusive", kind: "scalar", T: 5 }, { no: 3, name: "deleted_lines", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "add_lines", kind: "scalar", T: 9, repeated: true }], { localName: "FixMarkersResponse_Change" }), JF = wa.makeMessageType("aiserver.v1.StreamLintRequest", () => [{ no: 1, name: "current_file", kind: "message", T: Uo }, { no: 2, name: "conversation", kind: "message", T: yI, repeated: true }, { no: 3, name: "repositories", kind: "message", T: OA, repeated: true }, { no: 4, name: "explicit_context", kind: "message", T: jo }, { no: 5, name: "workspace_root_path", kind: "scalar", T: 9, opt: true }, { no: 6, name: "query", kind: "scalar", T: 9 }, { no: 7, name: "code_blocks", kind: "message", T: Ro, repeated: true }, { no: 9, name: "model_details", kind: "message", T: Go }, { no: 10, name: "documentation_identifiers", kind: "scalar", T: 9, repeated: true }, { no: 11, name: "bad_notifications", kind: "scalar", T: 9, repeated: true }, { no: 12, name: "lint_rules", kind: "scalar", T: 9 }]), VF = wa.makeMessageType("aiserver.v1.ReportGroundTruthCandidateRequest", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "time_since_completed_action_ms", kind: "scalar", T: 5 }, { no: 3, name: "feature_type", kind: "enum", T: wa.getEnumType(so) }, { no: 4, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 5, name: "contents", kind: "scalar", T: 9 }, { no: 6, name: "selection_in_question", kind: "message", T: Bo }, { no: 7, name: "lines_above_and_below", kind: "scalar", T: 5 }]), qF = wa.makeMessageType("aiserver.v1.ReportGroundTruthCandidateResponse", []), HF = wa.makeMessageType("aiserver.v1.ReportCmdKFateRequest", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "fate", kind: "enum", T: wa.getEnumType(WF) }]), WF = wa.makeEnum("aiserver.v1.ReportCmdKFateRequest.Fate", [{ no: 0, name: "FATE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "FATE_CANCELLED", localName: "CANCELLED" }, { no: 2, name: "FATE_ACCEPTED", localName: "ACCEPTED" }, { no: 3, name: "FATE_REJECTED", localName: "REJECTED" }, { no: 4, name: "FATE_FOLLOWED_UP", localName: "FOLLOWED_UP" }, { no: 5, name: "FATE_REPROMPTED", localName: "REPROMPTED" }]), KF = wa.makeMessageType("aiserver.v1.ReportCmdKFateResponse", []), jF = wa.makeMessageType("aiserver.v1.GetFilesForComposerRequest", () => [{ no: 1, name: "conversation", kind: "message", T: yI, repeated: true }, { no: 2, name: "files", kind: "message", T: Uo, repeated: true }, { no: 3, name: "rerank_results", kind: "scalar", T: 8, opt: true }, { no: 4, name: "file_search_results", kind: "message", T: KS, oneof: "context_results" }, { no: 5, name: "code_search_results", kind: "message", T: jS, oneof: "context_results" }, { no: 6, name: "rerank_results_v2", kind: "scalar", T: 8, opt: true }, { no: 7, name: "long_context_mode", kind: "scalar", T: 8, opt: true }, { no: 8, name: "is_eval", kind: "scalar", T: 8, opt: true }, { no: 9, name: "request_id", kind: "scalar", T: 9, opt: true }, { no: 10, name: "model_details", kind: "message", T: Go }]), XF = wa.makeMessageType("aiserver.v1.GetFilesForComposerResponse", () => [{ no: 1, name: "relative_workspace_paths", kind: "scalar", T: 9, repeated: true }]), ZF = wa.makeMessageType("aiserver.v1.ComposerEnhancerClientMessage", () => [{ no: 1, name: "request", kind: "message", T: $F, oneof: "message" }, { no: 2, name: "tool_result", kind: "message", T: aO, oneof: "message" }]), zF = wa.makeMessageType("aiserver.v1.ComposerEnhancerServerMessage", () => [{ no: 1, name: "response", kind: "message", T: eO, oneof: "message" }, { no: 2, name: "tool_call", kind: "message", T: nO, oneof: "message" }]), $F = wa.makeMessageType("aiserver.v1.ComposerEnhancerRequest", () => [{ no: 1, name: "input_text", kind: "scalar", T: 9 }, { no: 2, name: "composer_id", kind: "scalar", T: 9, opt: true }]), eO = wa.makeMessageType("aiserver.v1.ComposerEnhancerResponse", () => [{ no: 1, name: "improved_text", kind: "scalar", T: 9 }, { no: 2, name: "is_final", kind: "scalar", T: 8 }]), nO = wa.makeMessageType("aiserver.v1.ComposerEnhancerToolCall", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "tool_name", kind: "scalar", T: 9 }, { no: 3, name: "tool_args", kind: "scalar", T: 9 }, { no: 4, name: "tool_index", kind: "scalar", T: 5 }]), aO = wa.makeMessageType("aiserver.v1.ComposerEnhancerToolResult", () => [{ no: 1, name: "tool_call_id", kind: "scalar", T: 9 }, { no: 2, name: "result", kind: "scalar", T: 9 }, { no: 3, name: "is_error", kind: "scalar", T: 8 }]), tO = wa.makeMessageType("aiserver.v1.FindBugsRequest", () => [{ no: 1, name: "current_file", kind: "message", T: Uo }, { no: 2, name: "model_details", kind: "message", T: Go }]), sO = wa.makeMessageType("aiserver.v1.FindBugsResponse", () => [{ no: 1, name: "bug", kind: "message", T: oO, opt: true }]), oO = wa.makeMessageType("aiserver.v1.FindBugsResponse.Bug", () => [{ no: 1, name: "description", kind: "scalar", T: 9 }, { no: 2, name: "line_number", kind: "scalar", T: 5 }, { no: 3, name: "confidence", kind: "scalar", T: 2 }], { localName: "FindBugsResponse_Bug" }), rO = wa.makeMessageType("aiserver.v1.WriteGitCommitMessageRequest", () => [{ no: 1, name: "diffs", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "previous_commit_messages", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "explicit_context", kind: "message", T: jo }, { no: 4, name: "api_key_credentials", kind: "message", T: vk, oneof: "credentials" }, { no: 5, name: "azure_credentials", kind: "message", T: Sk, oneof: "credentials" }, { no: 6, name: "bedrock_credentials", kind: "message", T: Dk, oneof: "credentials" }]), iO = wa.makeMessageType("aiserver.v1.WriteGitCommitMessageResponse", () => [{ no: 1, name: "commit_message", kind: "scalar", T: 9 }]), AO = wa.makeMessageType("aiserver.v1.WriteGitBranchNameRequest", () => [{ no: 1, name: "diffs", kind: "scalar", T: 9 }, { no: 2, name: "context", kind: "scalar", T: 9, opt: true }, { no: 3, name: "conversation_id", kind: "scalar", T: 9, opt: true }, { no: 4, name: "api_key_credentials", kind: "message", T: vk, oneof: "credentials" }, { no: 5, name: "azure_credentials", kind: "message", T: Sk, oneof: "credentials" }, { no: 6, name: "bedrock_credentials", kind: "message", T: Dk, oneof: "credentials" }]), lO = wa.makeMessageType("aiserver.v1.WriteGitBranchNameResponse", () => [{ no: 1, name: "branch_name", kind: "scalar", T: 9 }]), cO = wa.makeMessageType("aiserver.v1.KeepComposerCacheWarmRequest", () => [{ no: 1, name: "request", kind: "message", T: wb }, { no: 2, name: "request_id", kind: "scalar", T: 9 }, { no: 3, name: "is_composer_visible", kind: "scalar", T: 8 }]), mO = wa.makeMessageType("aiserver.v1.KeepComposerCacheWarmResponse", () => [{ no: 1, name: "did_keep_warm", kind: "scalar", T: 8 }]), dO = wa.makeMessageType("aiserver.v1.GetDiffReviewRequest", () => [{ no: 1, name: "diffs", kind: "message", T: gO, repeated: true }, { no: 2, name: "model", kind: "scalar", T: 9, opt: true }]), gO = wa.makeMessageType("aiserver.v1.GetDiffReviewRequest.SimpleFileDiff", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "chunks", kind: "message", T: uO, repeated: true }], { localName: "GetDiffReviewRequest_SimpleFileDiff" }), uO = wa.makeMessageType("aiserver.v1.GetDiffReviewRequest.SimpleFileDiff.Chunk", () => [{ no: 1, name: "old_lines", kind: "scalar", T: 9, repeated: true }, { no: 2, name: "new_lines", kind: "scalar", T: 9, repeated: true }, { no: 3, name: "old_range", kind: "message", T: Bo }, { no: 4, name: "new_range", kind: "message", T: Bo }], { localName: "GetDiffReviewRequest_SimpleFileDiff_Chunk" }), EO = wa.makeMessageType("aiserver.v1.StreamDiffReviewResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9, oneof: "response" }, { no: 2, name: "groups", kind: "message", T: pO, oneof: "response" }]), pO = wa.makeMessageType("aiserver.v1.SemanticDiffGroups", () => [{ no: 1, name: "groups", kind: "message", T: TO, repeated: true }, { no: 2, name: "summary", kind: "scalar", T: 9, opt: true }]), TO = wa.makeMessageType("aiserver.v1.SemanticDiffGroup", () => [{ no: 1, name: "description", kind: "scalar", T: 9 }, { no: 2, name: "diffs", kind: "message", T: kO, repeated: true }, { no: 3, name: "title", kind: "scalar", T: 9 }]), kO = wa.makeMessageType("aiserver.v1.SemanticDiffReference", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "chunk_index", kind: "scalar", T: 5 }]), IO = wa.makeMessageType("aiserver.v1.StreamDiffReviewByFileResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9, oneof: "response" }, { no: 2, name: "groups", kind: "message", T: hO, oneof: "response" }]), hO = wa.makeMessageType("aiserver.v1.SemanticFileGroups", () => [{ no: 1, name: "groups", kind: "message", T: _O, repeated: true }, { no: 2, name: "summary", kind: "scalar", T: 9, opt: true }]), _O = wa.makeMessageType("aiserver.v1.SemanticFileGroup", () => [{ no: 1, name: "title", kind: "scalar", T: 9 }, { no: 2, name: "description", kind: "scalar", T: 9 }, { no: 3, name: "files", kind: "scalar", T: 9, repeated: true }]), CO = wa.makeMessageType("aiserver.v1.CountTokensRequest", () => [{ no: 1, name: "context_items", kind: "message", T: YQ, repeated: true }, { no: 2, name: "model_name", kind: "scalar", T: 9 }]), fO = wa.makeMessageType("aiserver.v1.ContextItemTokenDetail", () => [{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 }, { no: 2, name: "count", kind: "scalar", T: 5 }, { no: 3, name: "line_count", kind: "scalar", T: 5 }]), BO = wa.makeMessageType("aiserver.v1.CountTokensResponse", () => [{ no: 1, name: "count", kind: "scalar", T: 5 }, { no: 2, name: "token_details", kind: "message", T: fO, repeated: true }]), QO = wa.makeMessageType("aiserver.v1.GetModelLabelsRequest", []), yO = wa.makeMessageType("aiserver.v1.GetModelLabelsResponse", () => [{ no: 1, name: "model_labels", kind: "message", T: RO, repeated: true }]), RO = wa.makeMessageType("aiserver.v1.GetModelLabelsResponse.ModelLabel", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "label", kind: "scalar", T: 9 }, { no: 3, name: "short_label", kind: "scalar", T: 9, opt: true }, { no: 4, name: "supports_agent", kind: "scalar", T: 8, opt: true }], { localName: "GetModelLabelsResponse_ModelLabel" }), NO = wa.makeMessageType("aiserver.v1.GetLastDefaultModelNudgeRequest", []), vO = wa.makeMessageType("aiserver.v1.GetLastDefaultModelNudgeResponse", () => [{ no: 1, name: "nudge_date", kind: "scalar", T: 9 }]), SO = wa.makeMessageType("aiserver.v1.GetDefaultModelNudgeDataRequest", () => [{ no: 1, name: "startup_opportunity", kind: "enum", T: wa.getEnumType(DO) }, { no: 2, name: "current_model", kind: "message", T: wk }]), DO = wa.makeEnum("aiserver.v1.GetDefaultModelNudgeDataRequest.StartupOpportunity", [{ no: 0, name: "STARTUP_OPPORTUNITY_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "STARTUP_OPPORTUNITY_FIRST_OPEN", localName: "FIRST_OPEN" }, { no: 2, name: "STARTUP_OPPORTUNITY_REOPEN", localName: "REOPEN" }]), wO = wa.makeMessageType("aiserver.v1.GetDefaultModelNudgeDataResponse", () => [{ no: 1, name: "nudge_date", kind: "scalar", T: 9 }, { no: 2, name: "should_default_switch_on_new_chat", kind: "scalar", T: 8 }, { no: 3, name: "models_with_no_default_switch", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "conversion_model_override", kind: "scalar", T: 9 }, { no: 5, name: "initial_model", kind: "message", T: bO }, { no: 6, name: "application_open_model_switch", kind: "message", T: MO }]), bO = wa.makeMessageType("aiserver.v1.GetDefaultModelNudgeDataResponse.InitialModel", () => [{ no: 1, name: "model_id", kind: "scalar", T: 9 }, { no: 2, name: "parameters", kind: "message", T: bk, repeated: true }], { localName: "GetDefaultModelNudgeDataResponse_InitialModel" }), MO = wa.makeMessageType("aiserver.v1.GetDefaultModelNudgeDataResponse.ApplicationOpenModelSwitch", () => [{ no: 1, name: "nudge_id", kind: "scalar", T: 9 }, { no: 2, name: "experiment_name", kind: "scalar", T: 9 }, { no: 3, name: "target_model", kind: "message", T: bO }], { localName: "GetDefaultModelNudgeDataResponse_ApplicationOpenModelSwitch" }), FO = wa.makeMessageType("aiserver.v1.GetDefaultModelRequest", []), OO = wa.makeMessageType("aiserver.v1.GetDefaultModelResponse", () => [{ no: 1, name: "model", kind: "scalar", T: 9 }, { no: 2, name: "thinking_model", kind: "scalar", T: 9 }, { no: 3, name: "max_mode", kind: "scalar", T: 8 }, { no: 4, name: "next_default_set_date", kind: "scalar", T: 9 }]), UO = wa.makeMessageType("aiserver.v1.CloudSetupBlockerAction", () => [{ no: 1, name: "url", kind: "scalar", T: 9, oneof: "action" }, { no: 2, name: "open_privacy_settings", kind: "message", T: us, oneof: "action" }, { no: 3, name: "open_github_connect", kind: "message", T: us, oneof: "action" }, { no: 4, name: "open_repo_picker", kind: "message", T: us, oneof: "action" }]), LO = wa.makeMessageType("aiserver.v1.CloudSetupBlocker", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "icon", kind: "scalar", T: 9 }, { no: 3, name: "action", kind: "message", T: UO }, { no: 4, name: "cta_label", kind: "scalar", T: 9 }, { no: 7, name: "checklist_title", kind: "scalar", T: 9 }, { no: 8, name: "checklist_description", kind: "scalar", T: 9 }]), PO = wa.makeMessageType("aiserver.v1.GetCloudSetupBlockersRequest", () => [{ no: 1, name: "selected_target_repo_url", kind: "scalar", T: 9 }]), xO = wa.makeMessageType("aiserver.v1.GetCloudSetupBlockersResponse", () => [{ no: 1, name: "pending", kind: "message", T: LO, repeated: true }, { no: 2, name: "completed", kind: "message", T: LO, repeated: true }]), GO = wa.makeMessageType("aiserver.v1.TestBedrockCredentialsRequest", () => [{ no: 1, name: "access_key", kind: "scalar", T: 9 }, { no: 2, name: "secret_key", kind: "scalar", T: 9 }, { no: 3, name: "region", kind: "scalar", T: 9 }, { no: 4, name: "model_name", kind: "scalar", T: 9 }]), YO = wa.makeMessageType("aiserver.v1.TestBedrockCredentialsResponse", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }, { no: 2, name: "error", kind: "scalar", T: 9, opt: true }]), JO = wa.makeMessageType("aiserver.v1.CommitLineRange", () => [{ no: 1, name: "start", kind: "scalar", T: 5 }, { no: 2, name: "end", kind: "scalar", T: 5 }, { no: 3, name: "absolute_start", kind: "scalar", T: 5, opt: true }, { no: 4, name: "absolute_end", kind: "scalar", T: 5, opt: true }]), VO = wa.makeMessageType("aiserver.v1.RangeGroup", () => [{ no: 1, name: "conversation_id", kind: "scalar", T: 9, opt: true }, { no: 2, name: "model", kind: "scalar", T: 9, opt: true }, { no: 3, name: "operation_type", kind: "scalar", T: 9 }, { no: 4, name: "ranges", kind: "message", T: JO, repeated: true }, { no: 5, name: "request_id", kind: "scalar", T: 9, opt: true }]), qO = wa.makeMessageType("aiserver.v1.FileRangeAnnotations", () => [{ no: 1, name: "file_path", kind: "scalar", T: 9 }, { no: 2, name: "groups", kind: "message", T: VO, repeated: true }]), HO = wa.makeMessageType("aiserver.v1.ReportCommitAiAnalyticsRequest", () => [{ no: 1, name: "commit_hash", kind: "scalar", T: 9 }, { no: 2, name: "total_lines_added", kind: "scalar", T: 5 }, { no: 3, name: "total_lines_deleted", kind: "scalar", T: 5 }, { no: 4, name: "tab_lines_added", kind: "scalar", T: 5 }, { no: 5, name: "tab_lines_deleted", kind: "scalar", T: 5 }, { no: 6, name: "composer_lines_added", kind: "scalar", T: 5 }, { no: 7, name: "composer_lines_deleted", kind: "scalar", T: 5 }, { no: 8, name: "branch_name", kind: "scalar", T: 9, opt: true }, { no: 9, name: "is_primary_branch", kind: "scalar", T: 8, opt: true }, { no: 10, name: "repo_name", kind: "scalar", T: 9, opt: true }, { no: 11, name: "non_ai_lines_added", kind: "scalar", T: 5 }, { no: 12, name: "non_ai_lines_deleted", kind: "scalar", T: 5 }, { no: 13, name: "change_ids", kind: "scalar", T: 9, repeated: true }, { no: 14, name: "message", kind: "scalar", T: 9, opt: true }, { no: 15, name: "commit_ts", kind: "scalar", T: 3, opt: true }, { no: 16, name: "range_annotations", kind: "message", T: qO, repeated: true }, { no: 17, name: "commit_source", kind: "scalar", T: 9, opt: true }]), WO = wa.makeMessageType("aiserver.v1.ReportCommitAiAnalyticsResponse", []), KO = wa.makeMessageType("aiserver.v1.ReportAiCodeChangeMetricsRequest", () => [{ no: 1, name: "changes", kind: "message", T: jO, repeated: true }]), jO = wa.makeMessageType("aiserver.v1.AiCodeChange", () => [{ no: 1, name: "change_id", kind: "scalar", T: 9 }, { no: 2, name: "source", kind: "scalar", T: 9 }, { no: 3, name: "metadata", kind: "message", T: NU, repeated: true }, { no: 4, name: "model", kind: "scalar", T: 9, opt: true }, { no: 5, name: "total_lines_added", kind: "scalar", T: 5 }, { no: 6, name: "total_lines_deleted", kind: "scalar", T: 5 }]), XO = wa.makeMessageType("aiserver.v1.ReportAiCodeChangeMetricsResponse", []), ZO = wa.makeMessageType("aiserver.v1.ReportProcessMetricsRequest", () => [{ no: 1, name: "sample_start", kind: "scalar", T: 3 }, { no: 2, name: "sample_end", kind: "scalar", T: 3 }, { no: 3, name: "num_subsamples", kind: "scalar", T: 5 }, { no: 4, name: "window_seq", kind: "scalar", T: 3 }, { no: 5, name: "session_id", kind: "scalar", T: 9 }, { no: 6, name: "rows", kind: "message", T: zO, repeated: true }, { no: 7, name: "os", kind: "scalar", T: 9, opt: true }, { no: 8, name: "os_version", kind: "scalar", T: 9, opt: true }, { no: 9, name: "arch", kind: "scalar", T: 9, opt: true }, { no: 10, name: "client_version", kind: "scalar", T: 9, opt: true }, { no: 11, name: "client_id", kind: "scalar", T: 9, opt: true }]), zO = wa.makeMessageType("aiserver.v1.ProcessMetricsRowRequest", () => [{ no: 1, name: "pid", kind: "scalar", T: 5 }, { no: 2, name: "ppid", kind: "scalar", T: 5 }, { no: 3, name: "name", kind: "scalar", T: 9 }, { no: 4, name: "extension_id", kind: "scalar", T: 9 }, { no: 5, name: "cpu_time_ms_sample", kind: "scalar", T: 3 }, { no: 6, name: "sample_avg_mem_mb", kind: "scalar", T: 1 }, { no: 7, name: "sample_peak_mem_mb", kind: "scalar", T: 1 }, { no: 8, name: "session_peak_mem_mb", kind: "scalar", T: 1 }, { no: 9, name: "process_name_hash", kind: "scalar", T: 9, opt: true }]), $O = wa.makeMessageType("aiserver.v1.ReportProcessMetricsResponse", []), eU = wa.makeMessageType("aiserver.v1.ReportProcessMetricsV2Request", () => [{ no: 1, name: "sample_start", kind: "scalar", T: 3 }, { no: 2, name: "sample_end", kind: "scalar", T: 3 }, { no: 3, name: "num_subsamples", kind: "scalar", T: 5 }, { no: 4, name: "session_id", kind: "scalar", T: 9 }, { no: 5, name: "rows", kind: "message", T: nU, repeated: true }, { no: 6, name: "os", kind: "scalar", T: 9 }, { no: 7, name: "arch", kind: "scalar", T: 9 }, { no: 8, name: "client_version", kind: "scalar", T: 9 }, { no: 9, name: "origin", kind: "scalar", T: 9 }]), nU = wa.makeMessageType("aiserver.v1.ProcessMetricsV2RowRequest", () => [{ no: 1, name: "pid", kind: "scalar", T: 5 }, { no: 2, name: "ppid", kind: "scalar", T: 5 }, { no: 3, name: "process_name", kind: "scalar", T: 9 }, { no: 4, name: "extension_id", kind: "scalar", T: 9 }, { no: 5, name: "process_name_hash", kind: "scalar", T: 9 }, { no: 6, name: "sample_cpu_time_ms", kind: "scalar", T: 3 }, { no: 7, name: "sample_avg_mem_mb", kind: "scalar", T: 1 }, { no: 8, name: "sample_peak_mem_mb", kind: "scalar", T: 1 }, { no: 9, name: "session_peak_mem_mb", kind: "scalar", T: 1 }, { no: 10, name: "memory_during_sample_peak_mb", kind: "scalar", T: 1 }, { no: 11, name: "cpu_during_sample_peak_pct", kind: "scalar", T: 1 }, { no: 12, name: "argv", kind: "scalar", T: 9, repeated: true }, { no: 13, name: "owner_agent_id", kind: "scalar", T: 9 }, { no: 14, name: "request_id", kind: "scalar", T: 9 }, { no: 15, name: "renderer_role", kind: "scalar", T: 9 }]), aU = wa.makeMessageType("aiserver.v1.ReportProcessMetricsV2Response", []), tU = wa.makeMessageType("aiserver.v1.ReportSandProcessMetricsRequest", () => [{ no: 1, name: "sample_start", kind: "scalar", T: 3 }, { no: 2, name: "sample_end", kind: "scalar", T: 3 }, { no: 3, name: "num_subsamples", kind: "scalar", T: 5 }, { no: 4, name: "sample_seqno", kind: "scalar", T: 3 }, { no: 5, name: "session_id", kind: "scalar", T: 9 }, { no: 6, name: "rows", kind: "message", T: sU, repeated: true }, { no: 7, name: "os", kind: "scalar", T: 9 }, { no: 8, name: "os_version", kind: "scalar", T: 9 }, { no: 9, name: "arch", kind: "scalar", T: 9 }, { no: 10, name: "client_version", kind: "scalar", T: 9 }, { no: 11, name: "client_id", kind: "scalar", T: 9 }]), sU = wa.makeMessageType("aiserver.v1.SandProcessMetricsRowRequest", () => [{ no: 1, name: "pid", kind: "scalar", T: 5 }, { no: 2, name: "ppid", kind: "scalar", T: 5 }, { no: 3, name: "process_name", kind: "scalar", T: 9 }, { no: 4, name: "process_name_hash", kind: "scalar", T: 9 }, { no: 5, name: "sample_cpu_time_ms", kind: "scalar", T: 3 }, { no: 6, name: "sample_avg_mem_mb", kind: "scalar", T: 1 }, { no: 7, name: "sample_peak_mem_mb", kind: "scalar", T: 1 }, { no: 8, name: "session_peak_mem_mb", kind: "scalar", T: 1 }, { no: 9, name: "memory_during_sample_peak_mb", kind: "scalar", T: 1 }, { no: 10, name: "cpu_during_sample_peak_pct", kind: "scalar", T: 1 }]), oU = wa.makeMessageType("aiserver.v1.ReportSandProcessMetricsResponse", []), rU = wa.makeMessageType("aiserver.v1.ReportClientNumericMetricsRequest", () => [{ no: 1, name: "metrics", kind: "message", T: iU, repeated: true }]), iU = wa.makeMessageType("aiserver.v1.ClientNumericMetric", () => [{ no: 1, name: "metric", kind: "scalar", T: 9 }, { no: 2, name: "value", kind: "scalar", T: 1 }, { no: 3, name: "session_id", kind: "scalar", T: 9, opt: true }, { no: 4, name: "ff_hash", kind: "scalar", T: 9, opt: true }, { no: 5, name: "timestamp_ms", kind: "scalar", T: 3 }, { no: 6, name: "client_version", kind: "scalar", T: 9, opt: true }, { no: 7, name: "os", kind: "scalar", T: 9, opt: true }, { no: 8, name: "enabled_extensions_hash", kind: "scalar", T: 9, opt: true }, { no: 9, name: "ff_resolved", kind: "scalar", T: 9, opt: true }, { no: 10, name: "extensions_resolved", kind: "scalar", T: 9, opt: true }, { no: 11, name: "window_type", kind: "scalar", T: 9, opt: true }, { no: 12, name: "module_version", kind: "scalar", T: 9, opt: true }, { no: 13, name: "module_channel", kind: "scalar", T: 9, opt: true }, { no: 14, name: "serving", kind: "scalar", T: 9, opt: true }]), AU = wa.makeMessageType("aiserver.v1.ReportClientNumericMetricsResponse", []), lU = wa.makeMessageType("aiserver.v1.PotentiallyGenerateMemoryRequest", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "conversation", kind: "message", T: yI, repeated: true }, { no: 3, name: "git_upstream_url", kind: "scalar", T: 9, opt: true }, { no: 4, name: "composer_id", kind: "scalar", T: 9 }]), cU = wa.makeMessageType("aiserver.v1.PotentiallyGenerateMemoryResponse", () => [{ no: 1, name: "saved_memory", kind: "scalar", T: 9, opt: true }, { no: 2, name: "knowledge_id", kind: "scalar", T: 9, opt: true }, { no: 3, name: "title", kind: "scalar", T: 9, opt: true }]), mU = wa.makeMessageType("aiserver.v1.KnowledgeBaseAddRequest", () => [{ no: 1, name: "knowledge", kind: "scalar", T: 9 }, { no: 2, name: "title", kind: "scalar", T: 9 }, { no: 3, name: "git_origin", kind: "scalar", T: 9 }, { no: 4, name: "composer_id", kind: "scalar", T: 9, opt: true }]), dU = wa.makeMessageType("aiserver.v1.KnowledgeBaseAddResponse", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }, { no: 2, name: "id", kind: "scalar", T: 9 }]), gU = wa.makeMessageType("aiserver.v1.KnowledgeBaseRemoveRequest", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }]), uU = wa.makeMessageType("aiserver.v1.KnowledgeBaseRemoveResponse", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }]), EU = wa.makeMessageType("aiserver.v1.KnowledgeBaseUpdateRequest", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "knowledge", kind: "scalar", T: 9 }, { no: 3, name: "title", kind: "scalar", T: 9 }]), pU = wa.makeMessageType("aiserver.v1.KnowledgeBaseUpdateResponse", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }]), TU = wa.makeMessageType("aiserver.v1.KnowledgeBaseListRequest", () => [{ no: 1, name: "limit", kind: "scalar", T: 5, opt: true }, { no: 2, name: "git_origin", kind: "scalar", T: 9, opt: true }]), kU = wa.makeMessageType("aiserver.v1.KnowledgeBaseListResponse", () => [{ no: 1, name: "success", kind: "scalar", T: 8 }, { no: 2, name: "all_results", kind: "message", T: IU, repeated: true }]), IU = wa.makeMessageType("aiserver.v1.KnowledgeBaseListResponse.Item", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "knowledge", kind: "scalar", T: 9 }, { no: 3, name: "title", kind: "scalar", T: 9 }, { no: 4, name: "created_at", kind: "scalar", T: 9 }, { no: 5, name: "is_generated", kind: "scalar", T: 8 }], { localName: "KnowledgeBaseListResponse_Item" }), hU = wa.makeMessageType("aiserver.v1.FetchRelevantKnowledgeForConversationRequest", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }, { no: 2, name: "conversation", kind: "message", T: yI, repeated: true }, { no: 3, name: "git_origin", kind: "scalar", T: 9, opt: true }, { no: 4, name: "limit", kind: "scalar", T: 5, opt: true }, { no: 5, name: "tagged_filenames", kind: "scalar", T: 9, repeated: true }]), _U = wa.makeMessageType("aiserver.v1.FetchRelevantKnowledgeForConversationResponse", () => [{ no: 1, name: "knowledge_items", kind: "message", T: WI, repeated: true }]), CU = wa.makeMessageType("aiserver.v1.InferBackgroundComposerScriptsRequest", () => [{ no: 1, name: "commands", kind: "message", T: fU, repeated: true }]), fU = wa.makeMessageType("aiserver.v1.InferBackgroundComposerScriptsRequest.Command", () => [{ no: 1, name: "command", kind: "scalar", T: 9 }, { no: 2, name: "timestamp", kind: "scalar", T: 2 }, { no: 3, name: "cwd", kind: "scalar", T: 9, opt: true }], { localName: "InferBackgroundComposerScriptsRequest_Command" }), BU = wa.makeMessageType("aiserver.v1.InferBackgroundComposerScriptsResponse", () => [{ no: 1, name: "install_script", kind: "scalar", T: 9 }, { no: 2, name: "start_script", kind: "scalar", T: 9 }, { no: 3, name: "terminals", kind: "message", T: QU, repeated: true }]), QU = wa.makeMessageType("aiserver.v1.InferBackgroundComposerScriptsResponse.Terminal", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }, { no: 2, name: "command", kind: "scalar", T: 9 }], { localName: "InferBackgroundComposerScriptsResponse_Terminal" }), yU = wa.makeMessageType("aiserver.v1.GetBackgroundComposerFeedbackLinkRequest", []), RU = wa.makeMessageType("aiserver.v1.GetBackgroundComposerFeedbackLinkResponse", () => [{ no: 1, name: "url", kind: "scalar", T: 9 }]), NU = wa.makeMessageType("aiserver.v1.ScoredAiCodeMetadata", () => [{ no: 1, name: "file_extension", kind: "scalar", T: 9 }, { no: 2, name: "lines_added", kind: "scalar", T: 5 }, { no: 3, name: "lines_deleted", kind: "scalar", T: 5 }, { no: 5, name: "change_hashes", kind: "scalar", T: 9, repeated: true }, { no: 4, name: "file_name", kind: "scalar", T: 9, opt: true }]), vU = wa.makeMessageType("aiserver.v1.SttConfig", () => [{ no: 1, name: "language", kind: "scalar", T: 9, opt: true }, { no: 3, name: "keyterms", kind: "scalar", T: 9, repeated: true }]), SU = wa.makeMessageType("aiserver.v1.SttAudioChunk", () => [{ no: 1, name: "pcm16", kind: "scalar", T: 12 }]), DU = wa.makeMessageType("aiserver.v1.SttControl", () => [{ no: 1, name: "type", kind: "enum", T: wa.getEnumType(wU) }]), wU = wa.makeEnum("aiserver.v1.SttControl.Type", [{ no: 0, name: "TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "TYPE_STOP", localName: "STOP" }, { no: 2, name: "TYPE_CANCEL", localName: "CANCEL" }]), bU = wa.makeMessageType("aiserver.v1.SttClientMessage", () => [{ no: 1, name: "config", kind: "message", T: vU, oneof: "payload" }, { no: 2, name: "audio", kind: "message", T: SU, oneof: "payload" }, { no: 3, name: "control", kind: "message", T: DU, oneof: "payload" }]), MU = wa.makeMessageType("aiserver.v1.SttServerMessage", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "is_final", kind: "scalar", T: 8 }, { no: 3, name: "kind", kind: "enum", T: wa.getEnumType(FU) }]), FU = wa.makeEnum("aiserver.v1.SttServerMessage.Kind", [{ no: 0, name: "KIND_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "KIND_PARTIAL", localName: "PARTIAL" }, { no: 2, name: "KIND_SEGMENT", localName: "SEGMENT" }, { no: 3, name: "KIND_FINAL", localName: "FINAL" }]), OU = wa.makeMessageType("aiserver.v1.TranscribeAudioRequest", () => [{ no: 1, name: "audio", kind: "scalar", T: 12 }, { no: 2, name: "mime_type", kind: "scalar", T: 9 }, { no: 3, name: "language", kind: "scalar", T: 9, opt: true }]), UU = wa.makeMessageType("aiserver.v1.TranscribeAudioResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "transcription_time_ms", kind: "scalar", T: 3 }]), LU = wa.makeMessageType("aiserver.v1.TextToSpeechRequest", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }, { no: 2, name: "voice_id", kind: "scalar", T: 9, opt: true }, { no: 3, name: "language", kind: "scalar", T: 9, opt: true }, { no: 4, name: "speed", kind: "scalar", T: 2, opt: true }, { no: 5, name: "with_timestamps", kind: "scalar", T: 8, opt: true }]), PU = wa.makeMessageType("aiserver.v1.TextToSpeechResponse", () => [{ no: 1, name: "audio", kind: "scalar", T: 12 }, { no: 2, name: "mime_type", kind: "scalar", T: 9 }, { no: 3, name: "synthesis_time_ms", kind: "scalar", T: 3 }, { no: 4, name: "char_start_ms", kind: "scalar", T: 5, repeated: true }, { no: 5, name: "char_end_ms", kind: "scalar", T: 5, repeated: true }]), xU = wa.makeMessageType("aiserver.v1.MintRealtimeVoiceSecretRequest", () => [{ no: 1, name: "language", kind: "scalar", T: 9, opt: true }, { no: 2, name: "agent_id", kind: "scalar", T: 9, opt: true }]), GU = wa.makeMessageType("aiserver.v1.MintRealtimeVoiceSecretResponse", () => [{ no: 1, name: "client_secret", kind: "scalar", T: 9 }, { no: 2, name: "model", kind: "scalar", T: 9 }, { no: 3, name: "websocket_url", kind: "scalar", T: 9 }, { no: 4, name: "session_plan", kind: "message", T: HU }, { no: 5, name: "voice_id", kind: "scalar", T: 9 }, { no: 6, name: "idle_seconds", kind: "scalar", T: 5, opt: true }]), YU = wa.makeMessageType("aiserver.v1.SetRealtimeVoiceRequest", () => [{ no: 1, name: "agent_id", kind: "scalar", T: 9, opt: true }, { no: 2, name: "voice_id", kind: "scalar", T: 9 }]), JU = wa.makeMessageType("aiserver.v1.SetRealtimeVoiceResponse", []), VU = wa.makeMessageType("aiserver.v1.GetRealtimeVoiceRequest", []), qU = wa.makeMessageType("aiserver.v1.GetRealtimeVoiceResponse", () => [{ no: 1, name: "voice_id", kind: "scalar", T: 9 }]), HU = wa.makeMessageType("aiserver.v1.RealtimeVoiceSessionPlan", () => [{ no: 1, name: "instructions", kind: "scalar", T: 9 }, { no: 2, name: "tools_json", kind: "scalar", T: 9 }, { no: 3, name: "greeting_instructions", kind: "scalar", T: 9 }, { no: 4, name: "under_way_receipt", kind: "message", T: WU }, { no: 5, name: "queued_receipt", kind: "message", T: WU }, { no: 6, name: "stay_silent_refusals", kind: "message", T: KU }, { no: 7, name: "reply_lines", kind: "message", T: jU }, { no: 9, name: "speeds", kind: "message", T: ZU, repeated: true }, { no: 10, name: "languages", kind: "message", T: XU, repeated: true }, { no: 12, name: "default_speed", kind: "scalar", T: 1 }, { no: 13, name: "default_language", kind: "scalar", T: 9 }]), WU = wa.makeMessageType("aiserver.v1.RealtimeVoiceSessionPlan.Receipt", () => [{ no: 1, name: "output_json", kind: "scalar", T: 9 }, { no: 2, name: "instructions", kind: "scalar", T: 9 }], { localName: "RealtimeVoiceSessionPlan_Receipt" }), KU = wa.makeMessageType("aiserver.v1.RealtimeVoiceSessionPlan.StaySilentRefusals", () => [{ no: 1, name: "they_just_spoke", kind: "scalar", T: 9 }, { no: 2, name: "receipt_owed", kind: "scalar", T: 9 }], { localName: "RealtimeVoiceSessionPlan_StaySilentRefusals" }), jU = wa.makeMessageType("aiserver.v1.RealtimeVoiceSessionPlan.ReplyLines", () => [{ no: 1, name: "unknown_tool_error_template", kind: "scalar", T: 9 }, { no: 2, name: "agent_unreachable_answer", kind: "scalar", T: 9 }, { no: 3, name: "pause_line", kind: "scalar", T: 9 }, { no: 4, name: "parked_refusal", kind: "scalar", T: 9 }, { no: 5, name: "stopped_line", kind: "scalar", T: 9 }, { no: 6, name: "error_line", kind: "scalar", T: 9 }, { no: 7, name: "no_reply_line", kind: "scalar", T: 9 }, { no: 8, name: "unreadable_line", kind: "scalar", T: 9 }, { no: 9, name: "news_owed", kind: "scalar", T: 9 }, { no: 10, name: "tool_failed_error", kind: "scalar", T: 9 }, { no: 11, name: "send_task_missing_request_error", kind: "scalar", T: 9 }, { no: 12, name: "send_task_request_too_long_error", kind: "scalar", T: 9 }, { no: 13, name: "earlier_updates_are_in_the_chat", kind: "scalar", T: 9 }, { no: 14, name: "typed_request_frame_template", kind: "scalar", T: 9 }, { no: 15, name: "ran_after_an_earlier_job_frame_template", kind: "scalar", T: 9 }, { no: 16, name: "answers_request_frame_template", kind: "scalar", T: 9 }], { localName: "RealtimeVoiceSessionPlan_ReplyLines" }), XU = wa.makeMessageType("aiserver.v1.RealtimeVoiceSessionPlan.Option", () => [{ no: 1, name: "id", kind: "scalar", T: 9 }, { no: 2, name: "label", kind: "scalar", T: 9 }], { localName: "RealtimeVoiceSessionPlan_Option" }), ZU = wa.makeMessageType("aiserver.v1.RealtimeVoiceSessionPlan.SpeedOption", () => [{ no: 1, name: "value", kind: "scalar", T: 1 }, { no: 2, name: "label", kind: "scalar", T: 9 }], { localName: "RealtimeVoiceSessionPlan_SpeedOption" }), zU = wa.makeMessageType("aiserver.v1.StreamInlineLongCompletionRequest", () => [{ no: 1, name: "current_file", kind: "message", T: Uo }, { no: 6, name: "repositories", kind: "message", T: OA, repeated: true }, { no: 7, name: "context_blocks", kind: "message", T: $U, repeated: true }, { no: 13, name: "explicit_context", kind: "message", T: jo }, { no: 14, name: "model_details", kind: "message", T: Go }, { no: 15, name: "linter_errors", kind: "message", T: Ho }]), $U = wa.makeMessageType("aiserver.v1.StreamInlineLongCompletionRequest.ContextBlock", () => [{ no: 1, name: "context_type", kind: "enum", T: wa.getEnumType(eL) }, { no: 2, name: "blocks", kind: "message", T: Ro, repeated: true }], { localName: "StreamInlineLongCompletionRequest_ContextBlock" }), eL = wa.makeEnum("aiserver.v1.StreamInlineLongCompletionRequest.ContextBlock.ContextType", [{ no: 0, name: "CONTEXT_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "CONTEXT_TYPE_RECENT_LOCATIONS", localName: "RECENT_LOCATIONS" }]), nL = wa.makeMessageType("aiserver.v1.StreamAiPreviewsIntent", () => [{ no: 1, name: "main_symbols_to_analyze_from_go_to_def", kind: "message", T: ar, repeated: true }, { no: 4, name: "main_symbol_hover_details", kind: "message", T: er }, { no: 3, name: "related_symbols", kind: "message", T: ar, repeated: true }, { no: 6, name: "main_symbols_to_analyze_from_implementations", kind: "message", T: ar, repeated: true }]), aL = wa.makeMessageType("aiserver.v1.StreamAiPreviewsRequest", () => [{ no: 1, name: "current_file", kind: "message", T: Uo }, { no: 2, name: "intent", kind: "message", T: nL }, { no: 14, name: "model_details", kind: "message", T: Go }, { no: 15, name: "is_detailed", kind: "scalar", T: 8, opt: true }]), tL = wa.makeMessageType("aiserver.v1.StreamAiPreviewsResponse", () => [{ no: 1, name: "text", kind: "scalar", T: 9 }]), sL = wa.makeMessageType("aiserver.v1.ReportInlineActionRequest", () => [{ no: 1, name: "action", kind: "scalar", T: 9 }, { no: 2, name: "generation_uuid", kind: "scalar", T: 9 }]), oL = wa.makeMessageType("aiserver.v1.ReportInlineActionResponse", []), rL = wa.makeMessageType("aiserver.v1.BidiRequestId", () => [{ no: 1, name: "request_id", kind: "scalar", T: 9 }]), iL = wa.makeMessageType("aiserver.v1.BidiPollRequest", () => [{ no: 1, name: "request_id", kind: "message", T: rL }, { no: 2, name: "start_request", kind: "scalar", T: 8, opt: true }]), AL = wa.makeMessageType("aiserver.v1.BidiPollResponse", () => [{ no: 1, name: "seqno", kind: "scalar", T: 3 }, { no: 2, name: "data", kind: "scalar", T: 9 }, { no: 3, name: "eof", kind: "scalar", T: 8, opt: true }]), lL = wa.makeMessageType("agent.v1.NameAgentRequest", () => [{ no: 1, name: "user_message", kind: "scalar", T: 9 }]), cL = wa.makeMessageType("agent.v1.NameAgentResponse", () => [{ no: 1, name: "name", kind: "scalar", T: 9 }]), mL = wa.makeMessageType("agent.v1.GetUsableModelsRequest", () => [{ no: 1, name: "custom_model_ids", kind: "scalar", T: 9, repeated: true }]), dL = wa.makeMessageType("agent.v1.GetUsableModelsResponse", () => [{ no: 1, name: "models", kind: "message", T: Vk, repeated: true }]), gL = wa.makeMessageType("agent.v1.GetDefaultModelForCliRequest", []), uL = wa.makeMessageType("agent.v1.GetDefaultModelForCliResponse", () => [{ no: 1, name: "model", kind: "message", T: Vk }]), EL = { typeName: "aiserver.v1.AiService", methods: { serverTime: { name: "ServerTime", I: Bw, O: Qw, kind: Ma.Unary }, healthCheck: { name: "HealthCheck", I: yw, O: Rw, kind: Ma.Unary }, privacyCheck: { name: "PrivacyCheck", I: vw, O: Sw, kind: Ma.Unary }, timeLeftHealthCheck: { name: "TimeLeftHealthCheck", I: yw, O: Dw, kind: Ma.Unary }, throwErrorCheck: { name: "ThrowErrorCheck", I: jD, O: XD, kind: Ma.Unary }, availableModels: { name: "AvailableModels", I: ZD, O: zD, kind: Ma.Unary }, streamChatTryReallyHard: { name: "StreamChatTryReallyHard", I: Qb, O: lM, kind: Ma.ServerStreaming }, rerankDocuments: { name: "RerankDocuments", I: lI, O: cI, kind: Ma.Unary }, streamComposer: { name: "StreamComposer", I: wb, O: lM, kind: Ma.ServerStreaming }, streamComposerContext: { name: "StreamComposerContext", I: mD, O: gD, kind: Ma.ServerStreaming }, warmComposerCache: { name: "WarmComposerCache", I: wb, O: dM, kind: Ma.Unary }, keepComposerCacheWarm: { name: "KeepComposerCacheWarm", I: cO, O: mO, kind: Ma.Unary }, countTokens: { name: "CountTokens", I: CO, O: BO, kind: Ma.Unary }, streamPotentialLocs: { name: "StreamPotentialLocs", I: Sb, O: Db, kind: Ma.ServerStreaming }, streamPotentialLocsUnderneath: { name: "StreamPotentialLocsUnderneath", I: Nb, O: vb, kind: Ma.ServerStreaming }, streamPotentialLocsInitialQueries: { name: "StreamPotentialLocsInitialQueries", I: yb, O: Rb, kind: Ma.ServerStreaming }, getChatTitle: { name: "GetChatTitle", I: rM, O: iM, kind: Ma.Unary }, getCompletion: { name: "GetCompletion", I: pM, O: TM, kind: Ma.Unary }, isolatedTreesitter: { name: "IsolatedTreesitter", I: Jb, O: Vb, kind: Ma.Unary }, getSimplePrompt: { name: "GetSimplePrompt", I: Wb, O: Kb, kind: Ma.Unary }, getPassthroughPrompt: { name: "GetPassthroughPrompt", I: $b, O: eM, kind: Ma.Unary }, suggestQuickActions: { name: "SuggestQuickActions", I: jb, O: Zb, kind: Ma.Unary }, checkLongFilesFit: { name: "CheckLongFilesFit", I: Qb, O: nM, kind: Ma.Unary }, getEvaluationPrompt: { name: "GetEvaluationPrompt", I: aM, O: oM, kind: Ma.Unary }, getUserInfo: { name: "GetUserInfo", I: IM, O: _M, kind: Ma.Unary }, streamChat: { name: "StreamChat", I: Qb, O: lM, kind: Ma.ServerStreaming }, streamChatWeb: { name: "StreamChatWeb", I: Qb, O: lM, kind: Ma.ServerStreaming }, warmChatCache: { name: "WarmChatCache", I: gM, O: uM, kind: Ma.Unary }, streamEdit: { name: "StreamEdit", I: Xw, O: lM, kind: Ma.ServerStreaming }, preloadEdit: { name: "PreloadEdit", I: Zw, O: zw, kind: Ma.Unary }, streamFastEdit: { name: "StreamFastEdit", I: Kw, O: jw, kind: Ma.ServerStreaming }, streamGenerate: { name: "StreamGenerate", I: ww, O: lM, kind: Ma.ServerStreaming }, streamInlineLongCompletion: { name: "StreamInlineLongCompletion", I: zU, O: lM, kind: Ma.ServerStreaming }, slashEdit: { name: "SlashEdit", I: xw, O: Yw, kind: Ma.ServerStreaming }, slashEditFollowUpWithPreviousEdits: { name: "SlashEditFollowUpWithPreviousEdits", I: Vw, O: qw, kind: Ma.ServerStreaming }, streamAiPreviews: { name: "StreamAiPreviews", I: aL, O: tL, kind: Ma.ServerStreaming }, shouldTurnOnCppOnboarding: { name: "ShouldTurnOnCppOnboarding", I: ef, O: nf, kind: Ma.Unary }, getComposerAutocomplete: { name: "GetComposerAutocomplete", I: SR, O: DR, kind: Ma.Unary }, streamReview: { name: "StreamReview", I: bw, O: Pw, kind: Ma.ServerStreaming }, streamReviewChat: { name: "StreamReviewChat", I: Ow, O: Uw, kind: Ma.ServerStreaming }, checkQueuePosition: { name: "CheckQueuePosition", I: Pb, O: xb, kind: Ma.Unary }, checkUsageBasedPrice: { name: "CheckUsageBasedPrice", I: Ub, O: Lb, kind: Ma.Unary }, doThisForMeCheck: { name: "DoThisForMeCheck", I: CM, O: fM, kind: Ma.Unary }, streamDoThisForMe: { name: "StreamDoThisForMe", I: NM, O: DM, kind: Ma.ServerStreaming }, streamChatToolformer: { name: "StreamChatToolformer", I: Qb, O: bM, kind: Ma.ServerStreaming }, streamChatToolformerContinue: { name: "StreamChatToolformerContinue", I: wM, O: bM, kind: Ma.ServerStreaming }, pushAiThought: { name: "PushAiThought", I: GM, O: VM, kind: Ma.Unary }, checkDoableAsTask: { name: "CheckDoableAsTask", I: qM, O: HM, kind: Ma.Unary }, reportGroundTruthCandidate: { name: "ReportGroundTruthCandidate", I: VF, O: qF, kind: Ma.Unary }, reportCmdKFate: { name: "ReportCmdKFate", I: HF, O: KF, kind: Ma.Unary }, showWelcomeScreen: { name: "ShowWelcomeScreen", I: iS, O: AS, kind: Ma.Unary }, interfaceAgentInit: { name: "InterfaceAgentInit", I: WM, O: KM, kind: Ma.Unary }, streamInterfaceAgentStatus: { name: "StreamInterfaceAgentStatus", I: jM, O: XM, kind: Ma.ServerStreaming }, taskGetInterfaceAgentStatus: { name: "TaskGetInterfaceAgentStatus", I: ZM, O: $M, kind: Ma.ServerStreaming }, updateVscodeProfile: { name: "UpdateVscodeProfile", I: vv, O: Sv, kind: Ma.Unary }, taskInit: { name: "TaskInit", I: eF, O: nF, kind: Ma.Unary }, taskPause: { name: "TaskPause", I: lF, O: cF, kind: Ma.Unary }, taskInfo: { name: "TaskInfo", I: AF, O: mF, kind: Ma.Unary }, taskStreamLog: { name: "TaskStreamLog", I: aF, O: dF, kind: Ma.ServerStreaming }, taskSendMessage: { name: "TaskSendMessage", I: pF, O: TF, kind: Ma.Unary }, taskProvideResult: { name: "TaskProvideResult", I: uF, O: EF, kind: Ma.Unary }, createExperimentalIndex: { name: "CreateExperimentalIndex", I: Gi, O: Yi, kind: Ma.Unary }, listExperimentalIndexFiles: { name: "ListExperimentalIndexFiles", I: Ji, O: Vi, kind: Ma.Unary }, listenExperimentalIndex: { name: "ListenExperimentalIndex", I: qi, O: Hi, kind: Ma.ServerStreaming }, registerFileToIndex: { name: "RegisterFileToIndex", I: zi, O: pA, kind: Ma.Unary }, setupIndexDependencies: { name: "SetupIndexDependencies", I: eA, O: nA, kind: Ma.Unary }, computeIndexTopoSort: { name: "ComputeIndexTopoSort", I: aA, O: tA, kind: Ma.Unary }, streamChatDeepContext: { name: "StreamChatDeepContext", I: TD, O: kD, kind: Ma.ServerStreaming }, chooseCodeReferences: { name: "ChooseCodeReferences", I: sA, O: pA, kind: Ma.Unary }, registerCodeReferences: { name: "RegisterCodeReferences", I: cA, O: mA, kind: Ma.Unary }, extractPaths: { name: "ExtractPaths", I: fA, O: BA, kind: Ma.Unary }, summarizeWithReferences: { name: "SummarizeWithReferences", I: dA, O: pA, kind: Ma.Unary }, documentationQuery: { name: "DocumentationQuery", I: lu, O: cu, kind: Ma.Unary }, availableDocs: { name: "AvailableDocs", I: hD, O: _D, kind: Ma.Unary }, runWebSearch: { name: "RunWebSearch", I: CD, O: BD, kind: Ma.Unary }, runWebFetch: { name: "RunWebFetch", I: QD, O: ND, kind: Ma.Unary }, runGenerateImage: { name: "RunGenerateImage", I: SD, O: bD, kind: Ma.Unary }, runGenerateVideo: { name: "RunGenerateVideo", I: MD, O: UD, kind: Ma.Unary }, runXSearch: { name: "RunXSearch", I: LD, O: YD, kind: Ma.Unary }, classifyAgentAutoReview: { name: "ClassifyAgentAutoReview", I: JD, O: VD, kind: Ma.Unary }, runDescribeImage: { name: "RunDescribeImage", I: qD, O: HD, kind: Ma.Unary }, detectShellHang: { name: "DetectShellHang", I: WD, O: KD, kind: Ma.Unary }, reportFeedback: { name: "ReportFeedback", I: kF, O: hF, kind: Ma.Unary }, reportBug: { name: "ReportBug", I: yF, O: NF, kind: Ma.Unary }, streamChatContext: { name: "StreamChatContext", I: mD, O: gD, kind: Ma.ServerStreaming }, generateTldr: { name: "GenerateTldr", I: zS, O: $S, kind: Ma.Unary }, taskStreamChatContext: { name: "TaskStreamChatContext", I: eD, O: cD, kind: Ma.ServerStreaming }, rerankResults: { name: "RerankResults", I: XS, O: ZS, kind: Ma.Unary }, modelQuery: { name: "ModelQuery", I: GS, O: JS, kind: Ma.Unary }, modelQueryV2: { name: "ModelQueryV2", I: GS, O: qS, kind: Ma.ServerStreaming }, intentPrediction: { name: "IntentPrediction", I: RS, O: NS, kind: Ma.Unary }, getChatSuggestions: { name: "GetChatSuggestions", I: LR, O: PR, kind: Ma.Unary }, getUserInstructions: { name: "GetUserInstructions", I: xR, O: GR, kind: Ma.Unary }, streamCursorTutor: { name: "StreamCursorTutor", I: PS, O: xS, kind: Ma.ServerStreaming }, checkFeatureStatus: { name: "CheckFeatureStatus", I: ES, O: _S, kind: Ma.Unary }, checkFeaturesStatus: { name: "CheckFeaturesStatus", I: pS, O: TS, kind: Ma.Unary }, checkFeatureStatusUnauthenticated: { name: "CheckFeatureStatusUnauthenticated", I: ES, O: _S, kind: Ma.Unary }, getEffectiveTokenLimit: { name: "GetEffectiveTokenLimit", I: IS, O: hS, kind: Ma.Unary }, getContextScores: { name: "GetContextScores", I: Hv, O: Wv, kind: Ma.Unary }, streamCpp: { name: "StreamCpp", I: af, O: sf, kind: Ma.ServerStreaming }, cppConfig: { name: "CppConfig", I: Af, O: lf, kind: Ma.Unary }, cppEditHistoryStatus: { name: "CppEditHistoryStatus", I: iQ, O: AQ, kind: Ma.Unary }, cppAppend: { name: "CppAppend", I: aQ, O: tQ, kind: Ma.Unary }, refreshTabContext: { name: "RefreshTabContext", I: Cf, O: ff, kind: Ma.Unary }, checkNumberConfig: { name: "CheckNumberConfig", I: CS, O: fS, kind: Ma.Unary }, checkNumberConfigUnauthenticated: { name: "CheckNumberConfigUnauthenticated", I: CS, O: fS, kind: Ma.Unary }, checkNumberConfigs: { name: "CheckNumberConfigs", I: BS, O: QS, kind: Ma.Unary }, streamTerminalAutocomplete: { name: "StreamTerminalAutocomplete", I: gb, O: Ib, kind: Ma.ServerStreaming }, streamPseudocodeGenerator: { name: "StreamPseudocodeGenerator", I: Eb, O: pb, kind: Ma.ServerStreaming }, streamPseudocodeMapper: { name: "StreamPseudocodeMapper", I: Tb, O: kb, kind: Ma.ServerStreaming }, acknowledgeGracePeriodDisclaimer: { name: "AcknowledgeGracePeriodDisclaimer", I: zR, O: $R, kind: Ma.Unary }, streamAiLintBug: { name: "StreamAiLintBug", I: $w, O: tb, kind: Ma.ServerStreaming }, streamAiCursorHelp: { name: "StreamAiCursorHelp", I: mb, O: db, kind: Ma.ServerStreaming }, logUserLintReply: { name: "LogUserLintReply", I: sb, O: ob, kind: Ma.Unary }, logLinterExplicitUserFeedback: { name: "LogLinterExplicitUserFeedback", I: rb, O: Ab, kind: Ma.Unary }, streamFixMarkers: { name: "StreamFixMarkers", I: vF, O: GF, kind: Ma.ServerStreaming }, reportInlineAction: { name: "ReportInlineAction", I: sL, O: oL, kind: Ma.Unary }, streamPriomptPrompt: { name: "StreamPriomptPrompt", I: gS, O: uS, kind: Ma.ServerStreaming }, streamLint: { name: "StreamLint", I: JF, O: lM, kind: Ma.ServerStreaming }, streamNewLintRule: { name: "StreamNewLintRule", I: lb, O: lM, kind: Ma.ServerStreaming }, aiProject: { name: "AiProject", I: lS, O: cS, kind: Ma.ServerStreaming }, toCamelCase: { name: "ToCamelCase", I: mS, O: dS, kind: Ma.Unary }, reportGenerationFeedback: { name: "ReportGenerationFeedback", I: Kv, O: Zv, kind: Ma.Unary }, reportAgentFeedback: { name: "ReportAgentFeedback", I: zv, O: aS, kind: Ma.Unary }, reportAgentMessageFeedback: { name: "ReportAgentMessageFeedback", I: tS, O: sS, kind: Ma.Unary }, reportAutoRoutingResultFeedback: { name: "ReportAutoRoutingResultFeedback", I: oS, O: rS, kind: Ma.Unary }, getThoughtAnnotation: { name: "GetThoughtAnnotation", I: Nv, O: Dv, kind: Ma.Unary }, streamWebCmdKV1: { name: "StreamWebCmdKV1", I: Vv, O: qv, kind: Ma.ServerStreaming }, streamNextCursorPrediction: { name: "StreamNextCursorPrediction", I: xv, O: Jv, kind: Ma.ServerStreaming }, isCursorPredictionEnabled: { name: "IsCursorPredictionEnabled", I: Lv, O: Pv, kind: Ma.Unary }, getCppEditClassification: { name: "GetCppEditClassification", I: pf, O: Tf, kind: Ma.Unary }, getTerminalCompletion: { name: "GetTerminalCompletion", I: av, O: tv, kind: Ma.Unary }, takeNotesOnCommitDiff: { name: "TakeNotesOnCommitDiff", I: Ov, O: Uv, kind: Ma.Unary }, bulkEmbed: { name: "BulkEmbed", I: bv, O: Mv, kind: Ma.Unary }, backgroundCmdKEval: { name: "BackgroundCmdKEval", I: _v, O: Rv, kind: Ma.ServerStreaming }, backgroundCmdK: { name: "BackgroundCmdK", I: cv, O: hv, kind: Ma.ServerStreaming }, calculateAutoSelection: { name: "CalculateAutoSelection", I: rv, O: lv, kind: Ma.Unary }, getAtSymbolSuggestions: { name: "GetAtSymbolSuggestions", I: $N, O: ev, kind: Ma.Unary }, getCodebaseQuestions: { name: "GetCodebaseQuestions", I: Qb, O: XN, kind: Ma.Unary }, cppEditHistoryAppend: { name: "CppEditHistoryAppend", I: sQ, O: rQ, kind: Ma.Unary }, devOnlyGetPastRequestIds: { name: "DevOnlyGetPastRequestIds", I: WN, O: jN, kind: Ma.Unary }, getFilesForComposer: { name: "GetFilesForComposer", I: jF, O: XF, kind: Ma.Unary }, tryParseTypeScriptTreeSitter: { name: "TryParseTypeScriptTreeSitter", I: qN, O: HN, kind: Ma.Unary }, nameTab: { name: "NameTab", I: _N, O: CN, kind: Ma.Unary }, keepTaskList: { name: "KeepTaskList", I: BN, O: yN, kind: Ma.Unary }, isTerminalFinishedV2: { name: "IsTerminalFinishedV2", I: YR, O: JR, kind: Ma.Unary }, testModelStatus: { name: "TestModelStatus", I: RN, O: NN, kind: Ma.Unary }, findBugs: { name: "FindBugs", I: tO, O: sO, kind: Ma.Unary }, contextReranking: { name: "ContextReranking", I: IN, O: hN, kind: Ma.Unary }, autoContext: { name: "AutoContext", I: WR, O: jR, kind: Ma.Unary }, writeGitCommitMessage: { name: "WriteGitCommitMessage", I: rO, O: iO, kind: Ma.Unary }, writeGitBranchName: { name: "WriteGitBranchName", I: AO, O: lO, kind: Ma.Unary }, streamBugBot: { name: "StreamBugBot", I: Dh, O: mN, kind: Ma.ServerStreaming }, streamBugBotAgentic: { name: "StreamBugBotAgentic", I: dN, O: gN, kind: Ma.BiDiStreaming }, streamBugBotAgenticSSE: { name: "StreamBugBotAgenticSSE", I: rL, O: gN, kind: Ma.ServerStreaming }, streamBugBotAgenticPoll: { name: "StreamBugBotAgenticPoll", I: iL, O: AL, kind: Ma.ServerStreaming }, streamUiBestOfNJudge: { name: "StreamUiBestOfNJudge", I: TN, O: kN, kind: Ma.BiDiStreaming }, streamUiBestOfNJudgeSSE: { name: "StreamUiBestOfNJudgeSSE", I: rL, O: kN, kind: Ma.ServerStreaming }, streamUiBestOfNJudgePoll: { name: "StreamUiBestOfNJudgePoll", I: iL, O: AL, kind: Ma.ServerStreaming }, checkBugBotPrice: { name: "CheckBugBotPrice", I: XR, O: ZR, kind: Ma.Unary }, checkBugBotTelemetryHealthy: { name: "CheckBugBotTelemetryHealthy", I: eN, O: nN, kind: Ma.Unary }, recordIdeBugReaction: { name: "RecordIdeBugReaction", I: aN, O: tN, kind: Ma.Unary }, getSuggestedBugBotIterations: { name: "GetSuggestedBugBotIterations", I: sN, O: oN, kind: Ma.Unary }, getEditorBugbotAutoRunStatus: { name: "GetEditorBugbotAutoRunStatus", I: rN, O: iN, kind: Ma.Unary }, testBidi: { name: "TestBidi", I: VR, O: qR, kind: Ma.BiDiStreaming }, streamDiffReview: { name: "StreamDiffReview", I: dO, O: EO, kind: Ma.ServerStreaming }, streamDiffReviewByFile: { name: "StreamDiffReviewByFile", I: dO, O: IO, kind: Ma.ServerStreaming }, getModelLabels: { name: "GetModelLabels", I: QO, O: yO, kind: Ma.Unary }, getLastDefaultModelNudge: { name: "GetLastDefaultModelNudge", I: NO, O: vO, kind: Ma.Unary }, getDefaultModelNudgeData: { name: "GetDefaultModelNudgeData", I: SO, O: wO, kind: Ma.Unary }, getDefaultModel: { name: "GetDefaultModel", I: FO, O: OO, kind: Ma.Unary }, reportCommitAiAnalytics: { name: "ReportCommitAiAnalytics", I: HO, O: WO, kind: Ma.Unary }, testBedrockCredentials: { name: "TestBedrockCredentials", I: GO, O: YO, kind: Ma.Unary }, reportAiCodeChangeMetrics: { name: "ReportAiCodeChangeMetrics", I: KO, O: XO, kind: Ma.Unary }, reportProcessMetrics: { name: "ReportProcessMetrics", I: ZO, O: $O, kind: Ma.Unary }, reportProcessMetricsV2: { name: "ReportProcessMetricsV2", I: eU, O: aU, kind: Ma.Unary }, reportSandProcessMetrics: { name: "ReportSandProcessMetrics", I: tU, O: oU, kind: Ma.Unary }, reportClientNumericMetrics: { name: "ReportClientNumericMetrics", I: rU, O: AU, kind: Ma.Unary }, potentiallyGenerateMemory: { name: "PotentiallyGenerateMemory", I: lU, O: cU, kind: Ma.Unary }, knowledgeBaseAdd: { name: "KnowledgeBaseAdd", I: mU, O: dU, kind: Ma.Unary }, knowledgeBaseList: { name: "KnowledgeBaseList", I: TU, O: kU, kind: Ma.Unary }, knowledgeBaseRemove: { name: "KnowledgeBaseRemove", I: gU, O: uU, kind: Ma.Unary }, knowledgeBaseUpdate: { name: "KnowledgeBaseUpdate", I: EU, O: pU, kind: Ma.Unary }, fetchRelevantKnowledgeForConversation: { name: "FetchRelevantKnowledgeForConversation", I: hU, O: _U, kind: Ma.Unary }, inferBackgroundComposerScripts: { name: "InferBackgroundComposerScripts", I: CU, O: BU, kind: Ma.Unary }, getBackgroundComposerFeedbackLink: { name: "GetBackgroundComposerFeedbackLink", I: yU, O: RU, kind: Ma.Unary }, getUsableModels: { name: "GetUsableModels", I: mL, O: dL, kind: Ma.Unary }, getDefaultModelForCli: { name: "GetDefaultModelForCli", I: gL, O: uL, kind: Ma.Unary }, streamComposerEnhancer: { name: "StreamComposerEnhancer", I: ZF, O: zF, kind: Ma.BiDiStreaming }, streamComposerEnhancerSSE: { name: "StreamComposerEnhancerSSE", I: rL, O: zF, kind: Ma.ServerStreaming }, streamComposerEnhancerPoll: { name: "StreamComposerEnhancerPoll", I: iL, O: AL, kind: Ma.ServerStreaming }, streamStt: { name: "StreamStt", I: bU, O: MU, kind: Ma.BiDiStreaming }, streamSttSSE: { name: "StreamSttSSE", I: rL, O: MU, kind: Ma.ServerStreaming }, streamSttPoll: { name: "StreamSttPoll", I: iL, O: AL, kind: Ma.ServerStreaming }, transcribeAudio: { name: "TranscribeAudio", I: OU, O: UU, kind: Ma.Unary }, llmGatewayConnectionTester: { name: "LlmGatewayConnectionTester", I: wN, O: bN, kind: Ma.Unary }, testTeamInferenceHookConnection: { name: "TestTeamInferenceHookConnection", I: MN, O: ON, kind: Ma.Unary }, textToSpeech: { name: "TextToSpeech", I: LU, O: PU, kind: Ma.Unary }, mintRealtimeVoiceSecret: { name: "MintRealtimeVoiceSecret", I: xU, O: GU, kind: Ma.Unary }, setRealtimeVoice: { name: "SetRealtimeVoice", I: YU, O: JU, kind: Ma.Unary }, getRealtimeVoice: { name: "GetRealtimeVoice", I: VU, O: qU, kind: Ma.Unary }, nameAgent: { name: "NameAgent", I: lL, O: cL, kind: Ma.Unary }, evaluatePromptHook: { name: "EvaluatePromptHook", I: UN, O: LN, kind: Ma.Unary }, computerUseDecideNextAction: { name: "ComputerUseDecideNextAction", I: YN, O: VN, kind: Ma.Unary }, getCloudSetupBlockers: { name: "GetCloudSetupBlockers", I: PO, O: xO, kind: Ma.Unary } } };
    var pL = s(6982);
    const TL = wa.makeMessageType("aiserver.v1.ReportAgentSnapshotRequest", () => [{ no: 1, name: "agent_request_id", kind: "scalar", T: 9 }, { no: 2, name: "initial_file_snapshots", kind: "message", T: kL, repeated: true }, { no: 3, name: "file_snapshots", kind: "message", T: kL, repeated: true }, { no: 4, name: "too_big_files", kind: "scalar", T: 9, repeated: true }, { no: 11, name: "name", kind: "scalar", T: 9 }, { no: 10, name: "snapshot_date_unix_milliseconds", kind: "scalar", T: 1 }]), kL = wa.makeMessageType("aiserver.v1.RequestTrackingFileSnapshot", () => [{ no: 1, name: "fs_path", kind: "scalar", T: 9 }, { no: 2, name: "file_uuid", kind: "scalar", T: 9 }, { no: 3, name: "file_size_bytes", kind: "scalar", T: 1 }, { no: 4, name: "num_lines", kind: "scalar", T: 5 }, { no: 9, name: "kind", kind: "enum", T: wa.getEnumType(IL) }, { no: 5, name: "diff_timed_out", kind: "scalar", T: 8 }, { no: 8, name: "git_info", kind: "message", T: _L }, { no: 6, name: "diff_changes", kind: "message", T: hL, repeated: true }, { no: 7, name: "original_file_contents", kind: "scalar", T: 9, opt: true }]), IL = wa.makeEnum("aiserver.v1.RequestTrackingFileSnapshot.Kind", [{ no: 0, name: "KIND_UNSPECIFIED", localName: "UNSPECIFIED" }, { no: 1, name: "KIND_ADDED", localName: "ADDED" }, { no: 2, name: "KIND_DELETED", localName: "DELETED" }, { no: 3, name: "KIND_MODIFIED", localName: "MODIFIED" }]), hL = wa.makeMessageType("aiserver.v1.RequestTrackingFileSnapshot.DiffChange", () => [{ no: 1, name: "original_start_line_number_one_indexed", kind: "scalar", T: 5 }, { no: 2, name: "original_end_line_number_exclusive_one_indexed", kind: "scalar", T: 5 }, { no: 3, name: "modified_start_line_number_one_indexed", kind: "scalar", T: 5 }, { no: 4, name: "modified_end_line_number_exclusive_one_indexed", kind: "scalar", T: 5 }, { no: 6, name: "tokenized_added_lines", kind: "scalar", T: 5, repeated: true }, { no: 5, name: "added_lines", kind: "scalar", T: 9, repeated: true }], { localName: "RequestTrackingFileSnapshot_DiffChange" }), _L = wa.makeMessageType("aiserver.v1.RequestTrackingFileGitInfo", () => [{ no: 1, name: "git_info", kind: "message", T: CL, oneof: "info" }, { no: 2, name: "no_repo_found", kind: "scalar", T: 8, oneof: "info" }]), CL = wa.makeMessageType("aiserver.v1.RequestTrackingFileGitInfo.GitInfo", () => [{ no: 1, name: "git_root", kind: "scalar", T: 9 }, { no: 2, name: "branch", kind: "scalar", T: 9 }, { no: 3, name: "commit_hash", kind: "scalar", T: 9 }], { localName: "RequestTrackingFileGitInfo_GitInfo" }), fL = wa.makeMessageType("aiserver.v1.StoredRequestTrackingMetadata", () => [{ no: 1, name: "agent_request_id", kind: "scalar", T: 9 }, { no: 2, name: "request_files", kind: "message", T: BL, repeated: true }, { no: 3, name: "deduplicated_git_infos", kind: "message", T: _L, repeated: true }, { no: 4, name: "num_commits_tracked", kind: "scalar", T: 5 }, { no: 5, name: "start_tracking_date_unix_milliseconds", kind: "scalar", T: 1 }, { no: 6, name: "file_size_bytes", kind: "scalar", T: 1 }, { no: 7, name: "workspace_id", kind: "scalar", T: 9 }]), BL = wa.makeMessageType("aiserver.v1.StoredRequestTrackingMetadata.File", () => [{ no: 1, name: "fs_path", kind: "scalar", T: 9 }, { no: 2, name: "file_uuid", kind: "scalar", T: 9 }, { no: 3, name: "git_info", kind: "message", T: _L }, { no: 4, name: "too_big", kind: "scalar", T: 8 }], { localName: "StoredRequestTrackingMetadata_File" }), QL = wa.makeMessageType("aiserver.v1.ReportAgentSnapshotResponse", []), yL = wa.makeMessageType("aiserver.v1.OnlineMetricsConfig", () => [{ no: 1, name: "enabled", kind: "scalar", T: 8 }, { no: 2, name: "max_requests_tracked", kind: "scalar", T: 5 }, { no: 3, name: "max_requests_tracked_mb", kind: "scalar", T: 5 }, { no: 4, name: "max_request_retention_seconds", kind: "scalar", T: 1 }, { no: 5, name: "send_original_file_contents_for_initial_snapshot", kind: "scalar", T: 8 }, { no: 6, name: "send_full_added_lines_in_diff_changes", kind: "scalar", T: 8 }, { no: 7, name: "num_commits_tracked", kind: "scalar", T: 5 }, { no: 8, name: "time_intervals_tracked_minutes", kind: "scalar", T: 5, repeated: true }, { no: 9, name: "too_big_file_size_bytes", kind: "scalar", T: 5 }]), RL = { typeName: "aiserver.v1.OnlineMetricsService", methods: { reportAgentSnapshot: { name: "ReportAgentSnapshot", I: TL, O: QL, kind: Ma.Unary } } };
    async function NL(e3, n3) {
      const a3 = Date.now();
      for (; !(e3() && n3() || Date.now() - a3 > 2e3); ) await new Promise((e4) => setTimeout(e4, 200));
    }
    class vL {
      constructor(e3) {
        this.context = e3, this.disposables = [], this.aiClient = void 0, this.onlineMetricsClient = void 0, this.disposables.push(n2.cursor.onDidChangeCursorAuthToken((e4) => {
          this.accessToken = e4;
        })), this.disposables.push(n2.cursor.onDidChangeCursorCreds((e4) => {
          this.cursorCreds = e4, this.aiClient = void 0, this.onlineMetricsClient = void 0;
        }));
        (async () => {
          const { creds: e4, token: a3 } = await (async function(e5, n3) {
            const a4 = Date.now();
            let s2, o2, r3, i3, A2 = 0;
            for (; void 0 === r3 || void 0 === i3; ) {
              try {
                r3 = e5.getCreds(), i3 = e5.getToken();
              } catch (e6) {
                t2.error("Failed to get auth values", e6);
              }
              A2++, void 0 === s2 && void 0 !== r3 && (s2 = A2), void 0 === o2 && void 0 !== i3 && (o2 = A2);
              const l3 = Date.now() - a4;
              if (l3 > 2e3) {
                n3.onTimeout({ hasCreds: void 0 !== r3, hasToken: void 0 !== i3, pollCount: A2, elapsedMs: l3 });
                break;
              }
              await new Promise((e6) => setTimeout(e6, 200));
            }
            const l2 = Date.now() - a4;
            return void 0 !== s2 && void 0 !== o2 && s2 < o2 && n3.onRaceConditionPrevented({ credsReadyAtPoll: s2, tokenReadyAtPoll: o2, pollCount: A2, elapsedMs: l2 }), { creds: r3, token: i3 };
          })({ getCreds: () => n2.cursor.getCursorCreds(), getToken: () => n2.cursor.getCursorAuthToken() }, { onTimeout: (e5) => {
            t2.warn("[BackendClientService] getInitialValues: timeout waiting for auth", e5);
          }, onRaceConditionPrevented: (e5) => {
            t2.warn("[BackendClientService] getInitialValues: race condition prevented", { source: "cursor-commits", ...e5 });
          } });
          this.cursorCreds = e4, this.accessToken = a3;
        })().then(() => {
        }).catch();
      }
      async getAIClient() {
        if (void 0 === this.aiClient) {
          if (await NL(() => void 0 !== this.cursorCreds, () => void 0 !== this.accessToken), void 0 === this.cursorCreds) throw new Error("cursorCreds not available");
          const e3 = this.createTransport({ baseUrl: this.cursorCreds.backendUrl });
          this.aiClient = Ze(EL, e3);
        }
        return this.aiClient;
      }
      async getOnlineMetricsClient() {
        if (void 0 === this.onlineMetricsClient) {
          if (await NL(() => void 0 !== this.cursorCreds, () => void 0 !== this.accessToken), void 0 === this.cursorCreds) throw new Error("cursorCreds not available");
          const e3 = this.createTransport({ baseUrl: this.cursorCreds.backendUrl });
          this.onlineMetricsClient = Ze(RL, e3);
        }
        return this.onlineMetricsClient;
      }
      createTransport(e3) {
        const a3 = null !== e3.baseUrl.match(/(?:[^\/]+\.)?lclhst\.build(?::\d+)?(?:\/|$)/) || null !== e3.baseUrl.match(/(?:[^\/]+\.)?localhost(?::\d+)?(?:\/|$)/), t3 = this.context.isDevelopment && a3 ? { rejectUnauthorized: false, ALPNProtocols: ["http/1.1"] } : {};
        return qe(j({ httpVersion: "1.1", baseUrl: e3.baseUrl, useBinaryFormat: true, interceptors: [(e4) => async (n3) => (n3.header.set("Authorization", `Bearer ${this.accessToken}`), await e4(n3)), (e4) => async (a4) => (n2.cursor.getAllRequestHeadersExceptAccessToken({ req: a4, backupRequestId: (0, pL.randomUUID)() }), await e4(a4))], sendCompression: v, acceptCompression: [v], nodeOptions: { ...t3 } }));
      }
      dispose() {
        this.disposables.forEach((e3) => e3.dispose());
      }
    }
    const SL = require("path"), DL = require("fs");
    /* @__PURE__ */ Symbol.for("cursor.agentStreamMetadata");
    var wL = ((e3) => (e3.GetCachedServerConfig = "aiServerConfigService.getCachedServerConfig", e3))(wL || {}), bL = ((e3) => (e3.GetCurrentIndexAndRecentCommits = "git.getCurrentIndexAndRecentCommits", e3))(bL || {}), ML = ((e3) => (e3.FREE = "free", e3.PRO = "pro", e3.PRO_PLUS = "pro_plus", e3.ENTERPRISE = "enterprise", e3.FREE_TRIAL = "free_trial", e3.ULTRA = "ultra", e3.PRO_STUDENT = "pro_student", e3.EXPRESS = "express", e3.PREMIUM = "premium", e3.PLUS = "plus", e3.SUPER = "super", e3.UNIFIED_ULTRA = "unified_ultra", e3))(ML || {});
    new Set(Object.values(ML));
    const FL = "cursor.action.startTrackingRequest";
    function OL({ gitRoot: e3, gitRootToHead: n3 }) {
      return null === e3 ? { info: { case: "noRepoFound", value: true } } : { info: { case: "gitInfo", value: { gitRoot: e3, branch: n3.get(e3)?.branch ?? "", commitHash: n3.get(e3)?.commitHash ?? "" } } };
    }
    const UL = require("node:diagnostics_channel");
    var LL = (0, UL.channel)("lru-cache:metrics"), PL = (0, UL.tracingChannel)("lru-cache"), xL = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date, GL = () => LL.hasSubscribers || PL.hasSubscribers, YL = /* @__PURE__ */ new Set(), JL = "object" == typeof process && process ? process : {}, VL = (/* @__PURE__ */ Symbol("type"), (e3) => !!e3 && e3 === Math.floor(e3) && e3 > 0 && isFinite(e3)), qL = (e3) => VL(e3) ? e3 <= Math.pow(2, 8) ? Uint8Array : e3 <= Math.pow(2, 16) ? Uint16Array : e3 <= Math.pow(2, 32) ? Uint32Array : e3 <= Number.MAX_SAFE_INTEGER ? HL : null : null, HL = class extends Array {
      constructor(e3) {
        super(e3), this.fill(0);
      }
    }, WL = class e3 {
      heap;
      length;
      static #p = false;
      static create(n3) {
        let a3 = qL(n3);
        if (!a3) return [];
        e3.#p = true;
        let t3 = new e3(n3, a3);
        return e3.#p = false, t3;
      }
      constructor(n3, a3) {
        if (!e3.#p) throw new TypeError("instantiate Stack using Stack.create(n)");
        this.heap = new a3(n3), this.length = 0;
      }
      push(e4) {
        this.heap[this.length++] = e4;
      }
      pop() {
        return this.heap[--this.length];
      }
    }, KL = class e3 {
      #p;
      #T;
      #k;
      #I;
      #h;
      #_;
      #C;
      #f;
      get perf() {
        return this.#f;
      }
      ttl;
      ttlResolution;
      ttlAutopurge;
      updateAgeOnGet;
      updateAgeOnHas;
      allowStale;
      noDisposeOnSet;
      noUpdateTTL;
      maxEntrySize;
      sizeCalculation;
      noDeleteOnFetchRejection;
      noDeleteOnStaleGet;
      allowStaleOnFetchAbort;
      allowStaleOnFetchRejection;
      ignoreFetchAbort;
      #B;
      #Q;
      #y;
      #R;
      #N;
      #v;
      #S;
      #D;
      #w;
      #b;
      #M;
      #F;
      #O;
      #U;
      #L;
      #P;
      #x;
      #G;
      #Y;
      static unsafeExposeInternals(e4) {
        return { starts: e4.#O, ttls: e4.#U, autopurgeTimers: e4.#L, sizes: e4.#F, keyMap: e4.#y, keyList: e4.#R, valList: e4.#N, next: e4.#v, prev: e4.#S, get head() {
          return e4.#D;
        }, get tail() {
          return e4.#w;
        }, free: e4.#b, isBackgroundFetch: (n3) => e4.#J(n3), backgroundFetch: (n3, a3, t3, s2) => e4.#V(n3, a3, t3, s2), moveToTail: (n3) => e4.#q(n3), indexes: (n3) => e4.#H(n3), rindexes: (n3) => e4.#W(n3), isStale: (n3) => e4.#K(n3) };
      }
      get max() {
        return this.#p;
      }
      get maxSize() {
        return this.#T;
      }
      get calculatedSize() {
        return this.#Q;
      }
      get size() {
        return this.#B;
      }
      get fetchMethod() {
        return this.#_;
      }
      get memoMethod() {
        return this.#C;
      }
      get dispose() {
        return this.#k;
      }
      get onInsert() {
        return this.#I;
      }
      get disposeAfter() {
        return this.#h;
      }
      constructor(n3) {
        let { max: a3 = 0, ttl: t3, ttlResolution: s2 = 1, ttlAutopurge: o2, updateAgeOnGet: r3, updateAgeOnHas: i3, allowStale: A2, dispose: l2, onInsert: c2, disposeAfter: m2, noDisposeOnSet: d2, noUpdateTTL: g2, maxSize: u2 = 0, maxEntrySize: E2 = 0, sizeCalculation: p2, fetchMethod: T2, memoMethod: k2, noDeleteOnFetchRejection: I2, noDeleteOnStaleGet: h2, allowStaleOnFetchRejection: _2, allowStaleOnFetchAbort: C2, ignoreFetchAbort: f2, perf: B2 } = n3;
        if (void 0 !== B2 && "function" != typeof B2?.now) throw new TypeError("perf option must have a now() method if specified");
        if (this.#f = B2 ?? xL, 0 !== a3 && !VL(a3)) throw new TypeError("max option must be a nonnegative integer");
        let Q2 = a3 ? qL(a3) : Array;
        if (!Q2) throw new Error("invalid max value: " + a3);
        if (this.#p = a3, this.#T = u2, this.maxEntrySize = E2 || this.#T, this.sizeCalculation = p2, this.sizeCalculation) {
          if (!this.#T && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
          if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function");
        }
        if (void 0 !== k2 && "function" != typeof k2) throw new TypeError("memoMethod must be a function if defined");
        if (this.#C = k2, void 0 !== T2 && "function" != typeof T2) throw new TypeError("fetchMethod must be a function if specified");
        if (this.#_ = T2, this.#x = !!T2, this.#y = /* @__PURE__ */ new Map(), this.#R = Array.from({ length: a3 }).fill(void 0), this.#N = Array.from({ length: a3 }).fill(void 0), this.#v = new Q2(a3), this.#S = new Q2(a3), this.#D = 0, this.#w = 0, this.#b = WL.create(a3), this.#B = 0, this.#Q = 0, "function" == typeof l2 && (this.#k = l2), "function" == typeof c2 && (this.#I = c2), "function" == typeof m2 ? (this.#h = m2, this.#M = []) : (this.#h = void 0, this.#M = void 0), this.#P = !!this.#k, this.#Y = !!this.#I, this.#G = !!this.#h, this.noDisposeOnSet = !!d2, this.noUpdateTTL = !!g2, this.noDeleteOnFetchRejection = !!I2, this.allowStaleOnFetchRejection = !!_2, this.allowStaleOnFetchAbort = !!C2, this.ignoreFetchAbort = !!f2, 0 !== this.maxEntrySize) {
          if (0 !== this.#T && !VL(this.#T)) throw new TypeError("maxSize must be a positive integer if specified");
          if (!VL(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
          this.#j();
        }
        if (this.allowStale = !!A2, this.noDeleteOnStaleGet = !!h2, this.updateAgeOnGet = !!r3, this.updateAgeOnHas = !!i3, this.ttlResolution = VL(s2) || 0 === s2 ? s2 : 1, this.ttlAutopurge = !!o2, this.ttl = t3 || 0, this.ttl) {
          if (!VL(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
          this.#X();
        }
        if (0 === this.#p && 0 === this.ttl && 0 === this.#T) throw new TypeError("At least one of max, maxSize, or ttl is required");
        if (!this.ttlAutopurge && !this.#p && !this.#T) {
          let n4 = "LRU_CACHE_UNBOUNDED";
          ((e4) => !YL.has(e4))(n4) && (YL.add(n4), ((e4, n5, a4, t4) => {
            "function" == typeof JL.emitWarning ? JL.emitWarning(e4, n5, a4, t4) : console.error(`[${a4}] ${n5}: ${e4}`);
          })("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", n4, e3));
        }
      }
      getRemainingTTL(e4) {
        return this.#y.has(e4) ? 1 / 0 : 0;
      }
      #X() {
        let e4 = new HL(this.#p), n3 = new HL(this.#p);
        this.#U = e4, this.#O = n3;
        let a3 = this.ttlAutopurge ? Array.from({ length: this.#p }) : void 0;
        this.#L = a3, this.#Z = (a4, s3, o3 = this.#f.now()) => {
          n3[a4] = 0 !== s3 ? o3 : 0, e4[a4] = s3, t3(a4, s3);
        }, this.#z = (a4) => {
          n3[a4] = 0 !== e4[a4] ? this.#f.now() : 0, t3(a4, e4[a4]);
        };
        let t3 = this.ttlAutopurge ? (e5, n4) => {
          if (a3?.[e5] && (clearTimeout(a3[e5]), a3[e5] = void 0), n4 && 0 !== n4 && a3) {
            let t4 = setTimeout(() => {
              this.#K(e5) && this.#$(this.#R[e5], "expire");
            }, n4 + 1);
            t4.unref && t4.unref(), a3[e5] = t4;
          }
        } : () => {
        };
        this.#ee = (a4, t4) => {
          if (e4[t4]) {
            let r3 = e4[t4], i3 = n3[t4];
            if (!r3 || !i3) return;
            a4.ttl = r3, a4.start = i3, a4.now = s2 || o2();
            let A2 = a4.now - i3;
            a4.remainingTTL = r3 - A2;
          }
        };
        let s2 = 0, o2 = () => {
          let e5 = this.#f.now();
          if (this.ttlResolution > 0) {
            s2 = e5;
            let n4 = setTimeout(() => s2 = 0, this.ttlResolution);
            n4.unref && n4.unref();
          }
          return e5;
        };
        this.getRemainingTTL = (a4) => {
          let t4 = this.#y.get(a4);
          if (void 0 === t4) return 0;
          let r3 = e4[t4], i3 = n3[t4];
          return r3 && i3 ? r3 - ((s2 || o2()) - i3) : 1 / 0;
        }, this.#K = (a4) => {
          let t4 = n3[a4], r3 = e4[a4];
          return !!r3 && !!t4 && (s2 || o2()) - t4 > r3;
        };
      }
      #z = () => {
      };
      #ee = () => {
      };
      #Z = () => {
      };
      #K = () => false;
      #j() {
        let e4 = new HL(this.#p);
        this.#Q = 0, this.#F = e4, this.#ne = (n3) => {
          this.#Q -= e4[n3], e4[n3] = 0;
        }, this.#ae = (e5, n3, a3, t3) => {
          if (this.#J(n3)) return 0;
          if (!VL(a3)) {
            if (!t3) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
            if ("function" != typeof t3) throw new TypeError("sizeCalculation must be a function");
            if (a3 = t3(n3, e5), !VL(a3)) throw new TypeError("sizeCalculation return invalid (expect positive integer)");
          }
          return a3;
        }, this.#te = (n3, a3, t3) => {
          if (e4[n3] = a3, this.#T) {
            let a4 = this.#T - e4[n3];
            for (; this.#Q > a4; ) this.#se(true);
          }
          this.#Q += e4[n3], t3 && (t3.entrySize = a3, t3.totalCalculatedSize = this.#Q);
        };
      }
      #ne = (e4) => {
      };
      #te = (e4, n3, a3) => {
      };
      #ae = (e4, n3, a3, t3) => {
        if (a3 || t3) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
        return 0;
      };
      *#H({ allowStale: e4 = this.allowStale } = {}) {
        if (this.#B) for (let n3 = this.#w; this.#oe(n3) && ((e4 || !this.#K(n3)) && (yield n3), n3 !== this.#D); ) n3 = this.#S[n3];
      }
      *#W({ allowStale: e4 = this.allowStale } = {}) {
        if (this.#B) for (let n3 = this.#D; this.#oe(n3) && ((e4 || !this.#K(n3)) && (yield n3), n3 !== this.#w); ) n3 = this.#v[n3];
      }
      #oe(e4) {
        return void 0 !== e4 && this.#y.get(this.#R[e4]) === e4;
      }
      *entries() {
        for (let e4 of this.#H()) void 0 !== this.#N[e4] && void 0 !== this.#R[e4] && !this.#J(this.#N[e4]) && (yield [this.#R[e4], this.#N[e4]]);
      }
      *rentries() {
        for (let e4 of this.#W()) void 0 !== this.#N[e4] && void 0 !== this.#R[e4] && !this.#J(this.#N[e4]) && (yield [this.#R[e4], this.#N[e4]]);
      }
      *keys() {
        for (let e4 of this.#H()) {
          let n3 = this.#R[e4];
          void 0 !== n3 && !this.#J(this.#N[e4]) && (yield n3);
        }
      }
      *rkeys() {
        for (let e4 of this.#W()) {
          let n3 = this.#R[e4];
          void 0 !== n3 && !this.#J(this.#N[e4]) && (yield n3);
        }
      }
      *values() {
        for (let e4 of this.#H()) void 0 !== this.#N[e4] && !this.#J(this.#N[e4]) && (yield this.#N[e4]);
      }
      *rvalues() {
        for (let e4 of this.#W()) void 0 !== this.#N[e4] && !this.#J(this.#N[e4]) && (yield this.#N[e4]);
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      [Symbol.toStringTag] = "LRUCache";
      find(e4, n3 = {}) {
        for (let a3 of this.#H()) {
          let t3 = this.#N[a3], s2 = this.#J(t3) ? t3.__staleWhileFetching : t3;
          if (void 0 !== s2 && e4(s2, this.#R[a3], this)) return this.#re(this.#R[a3], n3);
        }
      }
      forEach(e4, n3 = this) {
        for (let a3 of this.#H()) {
          let t3 = this.#N[a3], s2 = this.#J(t3) ? t3.__staleWhileFetching : t3;
          void 0 !== s2 && e4.call(n3, s2, this.#R[a3], this);
        }
      }
      rforEach(e4, n3 = this) {
        for (let a3 of this.#W()) {
          let t3 = this.#N[a3], s2 = this.#J(t3) ? t3.__staleWhileFetching : t3;
          void 0 !== s2 && e4.call(n3, s2, this.#R[a3], this);
        }
      }
      purgeStale() {
        let e4 = false;
        for (let n3 of this.#W({ allowStale: true })) this.#K(n3) && (this.#$(this.#R[n3], "expire"), e4 = true);
        return e4;
      }
      info(e4) {
        let n3 = this.#y.get(e4);
        if (void 0 === n3) return;
        let a3 = this.#N[n3], t3 = this.#J(a3) ? a3.__staleWhileFetching : a3;
        if (void 0 === t3) return;
        let s2 = { value: t3 };
        if (this.#U && this.#O) {
          let e5 = this.#U[n3], a4 = this.#O[n3];
          if (e5 && a4) {
            let n4 = e5 - (this.#f.now() - a4);
            s2.ttl = n4, s2.start = Date.now();
          }
        }
        return this.#F && (s2.size = this.#F[n3]), s2;
      }
      dump() {
        let e4 = [];
        for (let n3 of this.#H({ allowStale: true })) {
          let a3 = this.#R[n3], t3 = this.#N[n3], s2 = this.#J(t3) ? t3.__staleWhileFetching : t3;
          if (void 0 === s2 || void 0 === a3) continue;
          let o2 = { value: s2 };
          if (this.#U && this.#O) {
            o2.ttl = this.#U[n3];
            let e5 = this.#f.now() - this.#O[n3];
            o2.start = Math.floor(Date.now() - e5);
          }
          this.#F && (o2.size = this.#F[n3]), e4.unshift([a3, o2]);
        }
        return e4;
      }
      load(e4) {
        this.clear();
        for (let [n3, a3] of e4) {
          if (a3.start) {
            let e5 = Date.now() - a3.start;
            a3.start = this.#f.now() - e5;
          }
          this.#ie(n3, a3.value, a3);
        }
      }
      set(e4, n3, a3 = {}) {
        let { status: t3 = LL.hasSubscribers ? {} : void 0 } = a3;
        a3.status = t3, t3 && (t3.op = "set", t3.key = e4, void 0 !== n3 && (t3.value = n3));
        let s2 = this.#ie(e4, n3, a3);
        return t3 && LL.hasSubscribers && LL.publish(t3), s2;
      }
      #ie(e4, n3, a3 = {}) {
        let { ttl: t3 = this.ttl, start: s2, noDisposeOnSet: o2 = this.noDisposeOnSet, sizeCalculation: r3 = this.sizeCalculation, status: i3 } = a3;
        if (void 0 === n3) return i3 && (i3.set = "deleted"), this.delete(e4), this;
        let { noUpdateTTL: A2 = this.noUpdateTTL } = a3;
        i3 && !this.#J(n3) && (i3.value = n3);
        let l2 = this.#ae(e4, n3, a3.size || 0, r3, i3);
        if (this.maxEntrySize && l2 > this.maxEntrySize) return this.#$(e4, "set"), i3 && (i3.set = "miss", i3.maxEntrySizeExceeded = true), this;
        let c2 = 0 === this.#B ? void 0 : this.#y.get(e4);
        if (void 0 === c2) c2 = 0 === this.#B ? this.#w : 0 !== this.#b.length ? this.#b.pop() : this.#B === this.#p ? this.#se(false) : this.#B, this.#R[c2] = e4, this.#N[c2] = n3, this.#y.set(e4, c2), this.#v[this.#w] = c2, this.#S[c2] = this.#w, this.#w = c2, this.#B++, this.#te(c2, l2, i3), i3 && (i3.set = "add"), A2 = false, this.#Y && this.#I?.(n3, e4, "add");
        else {
          this.#q(c2);
          let a4 = this.#N[c2];
          if (n3 !== a4) {
            if (this.#x && this.#J(a4)) {
              a4.__abortController.abort(new Error("replaced"));
              let { __staleWhileFetching: n4 } = a4;
              void 0 !== n4 && !o2 && (this.#P && this.#k?.(n4, e4, "set"), this.#G && this.#M?.push([n4, e4, "set"]));
            } else o2 || (this.#P && this.#k?.(a4, e4, "set"), this.#G && this.#M?.push([a4, e4, "set"]));
            if (this.#ne(c2), this.#te(c2, l2, i3), this.#N[c2] = n3, i3) {
              i3.set = "replace";
              let e5 = a4 && this.#J(a4) ? a4.__staleWhileFetching : a4;
              void 0 !== e5 && (i3.oldValue = e5);
            }
          } else i3 && (i3.set = "update");
          this.#Y && this.onInsert?.(n3, e4, n3 === a4 ? "update" : "replace");
        }
        if (0 !== t3 && !this.#U && this.#X(), this.#U && (A2 || this.#Z(c2, t3, s2), i3 && this.#ee(i3, c2)), !o2 && this.#G && this.#M) {
          let e5, n4 = this.#M;
          for (; e5 = n4?.shift(); ) this.#h?.(...e5);
        }
        return this;
      }
      pop() {
        try {
          for (; this.#B; ) {
            let e4 = this.#N[this.#D];
            if (this.#se(true), this.#J(e4)) {
              if (e4.__staleWhileFetching) return e4.__staleWhileFetching;
            } else if (void 0 !== e4) return e4;
          }
        } finally {
          if (this.#G && this.#M) {
            let e4, n3 = this.#M;
            for (; e4 = n3?.shift(); ) this.#h?.(...e4);
          }
        }
      }
      #se(e4) {
        let n3 = this.#D, a3 = this.#R[n3], t3 = this.#N[n3];
        return this.#x && this.#J(t3) ? t3.__abortController.abort(new Error("evicted")) : (this.#P || this.#G) && (this.#P && this.#k?.(t3, a3, "evict"), this.#G && this.#M?.push([t3, a3, "evict"])), this.#ne(n3), this.#L?.[n3] && (clearTimeout(this.#L[n3]), this.#L[n3] = void 0), e4 && (this.#R[n3] = void 0, this.#N[n3] = void 0, this.#b.push(n3)), 1 === this.#B ? (this.#D = this.#w = 0, this.#b.length = 0) : this.#D = this.#v[n3], this.#y.delete(a3), this.#B--, n3;
      }
      has(e4, n3 = {}) {
        let { status: a3 = LL.hasSubscribers ? {} : void 0 } = n3;
        n3.status = a3, a3 && (a3.op = "has", a3.key = e4);
        let t3 = this.#Ae(e4, n3);
        return LL.hasSubscribers && LL.publish(a3), t3;
      }
      #Ae(e4, n3 = {}) {
        let { updateAgeOnHas: a3 = this.updateAgeOnHas, status: t3 } = n3, s2 = this.#y.get(e4);
        if (void 0 !== s2) {
          let e5 = this.#N[s2];
          if (this.#J(e5) && void 0 === e5.__staleWhileFetching) return false;
          if (!this.#K(s2)) return a3 && this.#z(s2), t3 && (t3.has = "hit", this.#ee(t3, s2)), true;
          t3 && (t3.has = "stale", this.#ee(t3, s2));
        } else t3 && (t3.has = "miss");
        return false;
      }
      peek(e4, n3 = {}) {
        let { status: a3 = GL() ? {} : void 0 } = n3;
        a3 && (a3.op = "peek", a3.key = e4), n3.status = a3;
        let t3 = this.#le(e4, n3);
        return LL.hasSubscribers && LL.publish(a3), t3;
      }
      #le(e4, n3) {
        let { status: a3, allowStale: t3 = this.allowStale } = n3, s2 = this.#y.get(e4);
        if (void 0 === s2 || !t3 && this.#K(s2)) return void (a3 && (a3.peek = void 0 === s2 ? "miss" : "stale"));
        let o2 = this.#N[s2], r3 = this.#J(o2) ? o2.__staleWhileFetching : o2;
        return a3 && (void 0 !== r3 ? (a3.peek = "hit", a3.value = r3) : a3.peek = "miss"), r3;
      }
      #V(e4, n3, a3, t3) {
        let s2 = void 0 === n3 ? void 0 : this.#N[n3];
        if (this.#J(s2)) return s2;
        let o2 = new AbortController(), { signal: r3 } = a3;
        r3?.addEventListener("abort", () => o2.abort(r3.reason), { signal: o2.signal });
        let i3 = { signal: o2.signal, options: a3, context: t3 }, A2 = (t4, s3 = false) => {
          let { aborted: r4 } = o2.signal, A3 = a3.ignoreFetchAbort && void 0 !== t4, m3 = a3.ignoreFetchAbort || !(!a3.allowStaleOnFetchAbort || void 0 === t4);
          if (a3.status && (r4 && !s3 ? (a3.status.fetchAborted = true, a3.status.fetchError = o2.signal.reason, A3 && (a3.status.fetchAbortIgnored = true)) : a3.status.fetchResolved = true), r4 && !A3 && !s3) return l2(o2.signal.reason, m3);
          let d2 = c2, g2 = this.#N[n3];
          return (g2 === c2 || void 0 === g2 && A3 && s3) && (void 0 === t4 ? void 0 !== d2.__staleWhileFetching ? this.#N[n3] = d2.__staleWhileFetching : this.#$(e4, "fetch") : (a3.status && (a3.status.fetchUpdated = true), this.#ie(e4, t4, i3.options))), t4;
        }, l2 = (t4, s3) => {
          let { aborted: r4 } = o2.signal, i4 = r4 && a3.allowStaleOnFetchAbort, A3 = i4 || a3.allowStaleOnFetchRejection, l3 = A3 || a3.noDeleteOnFetchRejection, m3 = c2;
          if (this.#N[n3] === c2 && (!l3 || !s3 && void 0 === m3.__staleWhileFetching ? this.#$(e4, "fetch") : i4 || (this.#N[n3] = m3.__staleWhileFetching)), A3) return a3.status && void 0 !== m3.__staleWhileFetching && (a3.status.returnedStale = true), m3.__staleWhileFetching;
          if (m3.__returned === m3) throw t4;
        };
        a3.status && (a3.status.fetchDispatched = true);
        let c2 = new Promise((n4, t4) => {
          let r4 = this.#_?.(e4, s2, i3);
          r4 && r4 instanceof Promise && r4.then((e5) => n4(void 0 === e5 ? void 0 : e5), t4), o2.signal.addEventListener("abort", () => {
            (!a3.ignoreFetchAbort || a3.allowStaleOnFetchAbort) && (n4(void 0), a3.allowStaleOnFetchAbort && (n4 = (e5) => A2(e5, true)));
          });
        }).then(A2, (e5) => (a3.status && (a3.status.fetchRejected = true, a3.status.fetchError = e5), l2(e5, false))), m2 = Object.assign(c2, { __abortController: o2, __staleWhileFetching: s2, __returned: void 0 });
        return void 0 === n3 ? (this.#ie(e4, m2, { ...i3.options, status: void 0 }), n3 = this.#y.get(e4)) : this.#N[n3] = m2, m2;
      }
      #J(e4) {
        if (!this.#x) return false;
        let n3 = e4;
        return !!n3 && n3 instanceof Promise && n3.hasOwnProperty("__staleWhileFetching") && n3.__abortController instanceof AbortController;
      }
      fetch(e4, n3 = {}) {
        let a3 = PL.hasSubscribers, { status: t3 = GL() ? {} : void 0 } = n3;
        n3.status = t3, t3 && n3.context && (t3.context = n3.context);
        let s2 = this.#ce(e4, n3);
        return t3 && a3 && (t3.trace = true, PL.tracePromise(() => s2, t3).catch(() => {
        })), s2;
      }
      async #ce(e4, n3 = {}) {
        let { allowStale: a3 = this.allowStale, updateAgeOnGet: t3 = this.updateAgeOnGet, noDeleteOnStaleGet: s2 = this.noDeleteOnStaleGet, ttl: o2 = this.ttl, noDisposeOnSet: r3 = this.noDisposeOnSet, size: i3 = 0, sizeCalculation: A2 = this.sizeCalculation, noUpdateTTL: l2 = this.noUpdateTTL, noDeleteOnFetchRejection: c2 = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: m2 = this.allowStaleOnFetchRejection, ignoreFetchAbort: d2 = this.ignoreFetchAbort, allowStaleOnFetchAbort: g2 = this.allowStaleOnFetchAbort, context: u2, forceRefresh: E2 = false, status: p2, signal: T2 } = n3;
        if (p2 && (p2.op = "fetch", p2.key = e4, E2 && (p2.forceRefresh = true)), !this.#x) return p2 && (p2.fetch = "get"), this.#re(e4, { allowStale: a3, updateAgeOnGet: t3, noDeleteOnStaleGet: s2, status: p2 });
        let k2 = { allowStale: a3, updateAgeOnGet: t3, noDeleteOnStaleGet: s2, ttl: o2, noDisposeOnSet: r3, size: i3, sizeCalculation: A2, noUpdateTTL: l2, noDeleteOnFetchRejection: c2, allowStaleOnFetchRejection: m2, allowStaleOnFetchAbort: g2, ignoreFetchAbort: d2, status: p2, signal: T2 }, I2 = this.#y.get(e4);
        if (void 0 === I2) {
          p2 && (p2.fetch = "miss");
          let n4 = this.#V(e4, I2, k2, u2);
          return n4.__returned = n4;
        }
        {
          let n4 = this.#N[I2];
          if (this.#J(n4)) {
            let e5 = a3 && void 0 !== n4.__staleWhileFetching;
            return p2 && (p2.fetch = "inflight", e5 && (p2.returnedStale = true)), e5 ? n4.__staleWhileFetching : n4.__returned = n4;
          }
          let s3 = this.#K(I2);
          if (!E2 && !s3) return p2 && (p2.fetch = "hit"), this.#q(I2), t3 && this.#z(I2), p2 && this.#ee(p2, I2), n4;
          let o3 = this.#V(e4, I2, k2, u2), r4 = void 0 !== o3.__staleWhileFetching && a3;
          return p2 && (p2.fetch = s3 ? "stale" : "refresh", r4 && s3 && (p2.returnedStale = true)), r4 ? o3.__staleWhileFetching : o3.__returned = o3;
        }
      }
      forceFetch(e4, n3 = {}) {
        let a3 = PL.hasSubscribers, { status: t3 = GL() ? {} : void 0 } = n3;
        n3.status = t3, t3 && n3.context && (t3.context = n3.context);
        let s2 = this.#me(e4, n3);
        return t3 && a3 && (t3.trace = true, PL.tracePromise(() => s2, t3).catch(() => {
        })), s2;
      }
      async #me(e4, n3 = {}) {
        let a3 = await this.#ce(e4, n3);
        if (void 0 === a3) throw new Error("fetch() returned undefined");
        return a3;
      }
      memo(e4, n3 = {}) {
        let { status: a3 = LL.hasSubscribers ? {} : void 0 } = n3;
        n3.status = a3, a3 && (a3.op = "memo", a3.key = e4, n3.context && (a3.context = n3.context));
        let t3 = this.#de(e4, n3);
        return a3 && (a3.value = t3), LL.hasSubscribers && LL.publish(a3), t3;
      }
      #de(e4, n3 = {}) {
        let a3 = this.#C;
        if (!a3) throw new Error("no memoMethod provided to constructor");
        let { context: t3, status: s2, forceRefresh: o2, ...r3 } = n3;
        s2 && o2 && (s2.forceRefresh = true);
        let i3 = this.#re(e4, r3), A2 = o2 || void 0 === i3;
        if (s2 && (s2.memo = A2 ? "miss" : "hit", A2 || (s2.value = i3)), !A2) return i3;
        let l2 = a3(e4, i3, { options: r3, context: t3 });
        return s2 && (s2.value = l2), this.#ie(e4, l2, r3), l2;
      }
      get(e4, n3 = {}) {
        let { status: a3 = LL.hasSubscribers ? {} : void 0 } = n3;
        n3.status = a3, a3 && (a3.op = "get", a3.key = e4);
        let t3 = this.#re(e4, n3);
        return a3 && (void 0 !== t3 && (a3.value = t3), LL.hasSubscribers && LL.publish(a3)), t3;
      }
      #re(e4, n3 = {}) {
        let { allowStale: a3 = this.allowStale, updateAgeOnGet: t3 = this.updateAgeOnGet, noDeleteOnStaleGet: s2 = this.noDeleteOnStaleGet, status: o2 } = n3, r3 = this.#y.get(e4);
        if (void 0 === r3) return void (o2 && (o2.get = "miss"));
        let i3 = this.#N[r3], A2 = this.#J(i3);
        return o2 && this.#ee(o2, r3), this.#K(r3) ? A2 ? (o2 && (o2.get = "stale-fetching"), a3 && void 0 !== i3.__staleWhileFetching ? (o2 && (o2.returnedStale = true), i3.__staleWhileFetching) : void 0) : (s2 || this.#$(e4, "expire"), o2 && (o2.get = "stale"), a3 ? (o2 && (o2.returnedStale = true), i3) : void 0) : (o2 && (o2.get = A2 ? "fetching" : "hit"), this.#q(r3), t3 && this.#z(r3), A2 ? i3.__staleWhileFetching : i3);
      }
      #ge(e4, n3) {
        this.#S[n3] = e4, this.#v[e4] = n3;
      }
      #q(e4) {
        e4 !== this.#w && (e4 === this.#D ? this.#D = this.#v[e4] : this.#ge(this.#S[e4], this.#v[e4]), this.#ge(this.#w, e4), this.#w = e4);
      }
      delete(e4) {
        return this.#$(e4, "delete");
      }
      #$(e4, n3) {
        LL.hasSubscribers && LL.publish({ op: "delete", delete: n3, key: e4 });
        let a3 = false;
        if (0 !== this.#B) {
          let t3 = this.#y.get(e4);
          if (void 0 !== t3) if (this.#L?.[t3] && (clearTimeout(this.#L?.[t3]), this.#L[t3] = void 0), a3 = true, 1 === this.#B) this.#ue(n3);
          else {
            this.#ne(t3);
            let a4 = this.#N[t3];
            if (this.#J(a4) ? a4.__abortController.abort(new Error("deleted")) : (this.#P || this.#G) && (this.#P && this.#k?.(a4, e4, n3), this.#G && this.#M?.push([a4, e4, n3])), this.#y.delete(e4), this.#R[t3] = void 0, this.#N[t3] = void 0, t3 === this.#w) this.#w = this.#S[t3];
            else if (t3 === this.#D) this.#D = this.#v[t3];
            else {
              let e5 = this.#S[t3];
              this.#v[e5] = this.#v[t3];
              let n4 = this.#v[t3];
              this.#S[n4] = this.#S[t3];
            }
            this.#B--, this.#b.push(t3);
          }
        }
        if (this.#G && this.#M?.length) {
          let e5, n4 = this.#M;
          for (; e5 = n4?.shift(); ) this.#h?.(...e5);
        }
        return a3;
      }
      clear() {
        return this.#ue("delete");
      }
      #ue(e4) {
        for (let n3 of this.#W({ allowStale: true })) {
          let a3 = this.#N[n3];
          if (this.#J(a3)) a3.__abortController.abort(new Error("deleted"));
          else {
            let t3 = this.#R[n3];
            this.#P && this.#k?.(a3, t3, e4), this.#G && this.#M?.push([a3, t3, e4]);
          }
        }
        if (this.#y.clear(), this.#N.fill(void 0), this.#R.fill(void 0), this.#U && this.#O) {
          this.#U.fill(0), this.#O.fill(0);
          for (let e5 of this.#L ?? []) void 0 !== e5 && clearTimeout(e5);
          this.#L?.fill(void 0);
        }
        if (this.#F && this.#F.fill(0), this.#D = 0, this.#w = 0, this.#b.length = 0, this.#Q = 0, this.#B = 0, this.#G && this.#M) {
          let e5, n3 = this.#M;
          for (; e5 = n3?.shift(); ) this.#h?.(...e5);
        }
      }
    };
    function jL(e3) {
      switch (e3.case) {
        case "string":
          return { case: "contents", contents: e3.value };
        case "null":
          return { case: "contents", contents: null };
        case "tooBig":
          return { case: "tooBig" };
        default:
          throw new Error(`Invalid cache value: ${e3}`);
      }
    }
    class XL {
      constructor(e3, n3, a3) {
        if (this.context = e3, this.requestTracker = n3, this.disposables = [], this.repositories = [], this.fileContentCache = new KL({ maxSize: 104857600, sizeCalculation: (e4) => "string" === e4.case ? e4.value.length + 1 : 1 }), this.disposables.push(this.requestTracker.onDidFinishProcessingQueue((e4) => {
          this.fileContentCache.clear();
        })), a3) {
          this.repositories = [...a3.repositories];
          for (const e4 of this.repositories) this.subscribeToRepository(e4);
          this.disposables.push(a3.onDidOpenRepository((e4) => {
            this.repositories.some((n4) => n4.rootUri.fsPath === e4.rootUri.fsPath) || (this.repositories.push(e4), this.subscribeToRepository(e4));
          })), this.disposables.push(a3.onDidCloseRepository((e4) => {
            this.repositories = this.repositories.filter((n4) => n4.rootUri.fsPath !== e4.rootUri.fsPath);
          }));
        }
      }
      track(e3) {
      }
      isDoneTracking(e3, n3) {
        return e3.numCommitsTracked >= n3.numCommitsTracked;
      }
      subscribeToRepository(e3) {
        this.disposables.push(e3.onDidCommit(() => {
          this.handleCommit(e3).catch((e4) => t2.error("Failed to process commit", e4));
        }));
      }
      async handleCommit(e3) {
        const n3 = Date.now(), a3 = e3.rootUri.fsPath, s2 = e3.state.HEAD?.name || "", o2 = /* @__PURE__ */ new Map(), r3 = await this.requestTracker.getConfig();
        for (const [e4, i3] of this.requestTracker.requestTrackingCache) {
          if (this.isDoneTracking(i3, r3)) continue;
          let A2 = false;
          for (const e5 of i3.deduplicatedGitInfos) if ("gitInfo" === e5.info?.case && e5.info.value && "object" == typeof e5.info.value && "gitRoot" in e5.info.value && "branch" in e5.info.value && e5.info.value.gitRoot === a3 && e5.info.value.branch === s2) {
            A2 = true;
            break;
          }
          if (!A2) continue;
          for (const e5 of i3.deduplicatedGitInfos) if ("gitInfo" === e5.info?.case && e5.info.value && "object" == typeof e5.info.value && "gitRoot" in e5.info.value) {
            const n4 = e5.info.value.gitRoot;
            if (o2.has(n4)) continue;
            const a4 = this.repositories.find((e6) => e6.rootUri.fsPath === n4);
            a4 && a4.state.HEAD && o2.set(n4, { branch: a4.state.HEAD.name || "", commitHash: a4.state.HEAD.commit || "" });
          }
          const l2 = i3.numCommitsTracked + 1;
          i3.numCommitsTracked = l2, await this.requestTracker.persistRequestMetadata(e4);
          const c2 = /* @__PURE__ */ new Map();
          for (const e5 of i3.requestFiles) c2.set(e5.fsPath, OL({ gitRoot: "gitInfo" === e5.gitInfo?.info?.case ? e5.gitInfo.info.value.gitRoot : null, gitRootToHead: o2 }));
          await this.requestTracker.queueSnapshot({ requestId: e4, name: `commit-${l2}`, readFile: async (e5) => {
            const n4 = c2.get(e5);
            if ("gitInfo" === n4?.info?.case) {
              const a4 = n4.info.value.commitHash, s3 = n4.info.value.gitRoot, o3 = SL.relative(s3, e5), i4 = `${s3}-${o3}-${a4}`, A3 = this.fileContentCache.get(i4);
              if (A3) return jL(A3);
              try {
                if ((await DL.promises.stat(e5)).size > r3.tooBigFileSizeBytes) return this.fileContentCache.set(i4, { case: "tooBig" }), { case: "tooBig" };
              } catch (e6) {
                t2.error("Failed to stat file", e6);
              }
              const l3 = await (async () => {
                try {
                  const e6 = this.repositories.find((e7) => e7.rootUri.fsPath === s3);
                  if (!e6) return { case: "null" };
                  const n5 = await e6.show(a4, o3);
                  return null == n5 ? { case: "null" } : n5.length > r3.tooBigFileSizeBytes ? { case: "tooBig" } : { case: "string", value: n5 };
                } catch (e6) {
                  return { case: "null" };
                }
              })();
              return this.fileContentCache.set(i4, l3), jL(l3);
            }
            return { case: "contents", contents: null };
          }, gitInfos: c2, snapshotDateUnixMilliseconds: n3 });
        }
      }
      dispose() {
        for (const e3 of this.disposables) e3.dispose();
      }
    }
    const ZL = require("node:fs");
    class zL {
      constructor(e3, n3) {
        this.context = e3, this.requestTracker = n3, this.disposables = [];
      }
      track(e3, n3) {
        for (const a3 of n3.timeIntervalsTrackedMinutes) {
          const s2 = 6e4 * a3 - (Date.now() - e3.startTrackingDateUnixMilliseconds);
          s2 > 0 && setTimeout(async () => {
            try {
              this.requestTracker.queueSnapshot({ requestId: e3.agentRequestId, name: `time-${a3}`, readFile: async (e4) => {
                try {
                  if ((await ZL.promises.stat(e4)).size > n3.tooBigFileSizeBytes) return { case: "tooBig" };
                  return { case: "contents", contents: await ZL.promises.readFile(e4, "utf8") };
                } catch (e5) {
                  return { case: "contents", contents: null };
                }
              }, gitInfos: await this.requestTracker.getGitInfos(e3.requestFiles.map((e4) => e4.fsPath)), snapshotDateUnixMilliseconds: Date.now() });
            } catch (e4) {
              t2.error("Failed to queue rl-5 snapshot", e4);
            }
          }, s2);
        }
      }
      isDoneTracking(e3, n3) {
        const a3 = Math.max(...n3.timeIntervalsTrackedMinutes);
        return Date.now() - e3.startTrackingDateUnixMilliseconds >= 1e3 * a3 * 60;
      }
      dispose() {
        for (const e3 of this.disposables) e3.dispose();
      }
    }
    function $L(e3) {
      return null === e3 ? [] : e3.split("\n").map((e4) => e4.endsWith("\r") ? e4.slice(0, -1) : e4);
    }
    class eP {
      constructor(e3, a3, s2, o2) {
        this.context = e3, this.diffService = a3, this.backendClientService = s2, this.gitAPI = o2, this.requestTrackingCache = /* @__PURE__ */ new Map(), this.specificRequestTrackers = [], this.isDisposed = false, this.abortController = new AbortController(), this.onDidFinishProcessingQueueEmitter = new n2.EventEmitter(), this.onDidFinishProcessingQueue = this.onDidFinishProcessingQueueEmitter.event, this.disposables = [], this.queue = [], this.isQueueProcessing = false, this.disposables.push(n2.commands.registerCommand(FL, (e4) => {
          this.startTrackingRequest(e4).catch((e5) => {
            t2.error("Failed to start tracking request", e5);
          });
        })), this.specificRequestTrackers.push(new XL(this.context, this, this.gitAPI)), this.specificRequestTrackers.push(new zL(this.context, this)), this.loadCache().catch((e4) => {
          t2.error("Failed to load cache", e4);
        });
      }
      async loadCache() {
        const e3 = await this.getConfig(), a3 = this.globalStoragePath();
        if (await DL.promises.stat(a3).then((e4) => e4.isDirectory()).catch((e4) => false)) {
          const e4 = [], t3 = await DL.promises.readdir(a3, { withFileTypes: true });
          for (const n3 of t3) if (n3.isDirectory()) try {
            const t4 = SL.join(a3, n3.name, "metadata.json"), s3 = await DL.promises.readFile(t4, "utf8"), o2 = fL.fromJsonString(s3);
            e4.push(o2);
          } catch (e5) {
            await DL.promises.rm(SL.join(a3, n3.name), { recursive: true, force: true });
          }
          const s2 = await this.getRequestIdsToPurge(e4);
          s2.push(...e4.filter((e5) => 0 === e5.workspaceId.length).map((e5) => e5.agentRequestId));
          for (const e5 of s2) await this.deleteRequest(e5);
          for (const a4 of e4) a4.workspaceId === n2.cursor.workspaceId() && this.requestTrackingCache.set(a4.agentRequestId, a4);
        }
        for (const n3 of this.requestTrackingCache.values()) {
          if (this.isDisposed) return;
          for (const a4 of this.specificRequestTrackers) a4.track(n3, e3);
        }
      }
      async computeDiff(e3, n3, a3) {
        const t3 = await this.diffService.computeLinesDiff({ original: e3, modified: n3, ignoreTrimWhitespace: true, maxComputationTimeMs: 500, skipDiffRefinement: true });
        let s2 = Math.max(0, ...a3.values()) + 1e6;
        return { timedOut: t3.timedOut, changes: t3.changes.map((e4) => ({ originalEndLineNumberExclusiveOneIndexed: e4.originalRange.endLineNumberExclusiveOneIndexed, originalStartLineNumberOneIndexed: e4.originalRange.startLineNumberOneIndexed, modifiedEndLineNumberExclusiveOneIndexed: e4.modifiedRange.endLineNumberExclusiveOneIndexed, modifiedStartLineNumberOneIndexed: e4.modifiedRange.startLineNumberOneIndexed, addedLines: n3.slice(e4.modifiedRange.startLineNumberOneIndexed - 1, e4.modifiedRange.endLineNumberExclusiveOneIndexed - 1), tokenizedAddedLines: (() => {
          const t4 = [];
          for (let o2 = e4.modifiedRange.startLineNumberOneIndexed - 1; o2 < e4.modifiedRange.endLineNumberExclusiveOneIndexed - 1; o2++) {
            const e5 = n3[o2], r3 = a3.get(e5);
            void 0 !== r3 ? t4.push(r3) : (a3.set(e5, s2), t4.push(s2), s2++);
          }
          return t4;
        })() })) };
      }
      globalStoragePath() {
        return SL.join(this.context.globalStoragePath, "checkpoints");
      }
      storagePath(e3) {
        return SL.join(this.globalStoragePath(), e3);
      }
      async getConfig() {
        const e3 = Date.now();
        if (void 0 !== this.configCache && this.configCache.expiresAt > e3) return this.configCache.value;
        const a3 = await n2.commands.executeCommand(wL.GetCachedServerConfig), t3 = a3?.onlineMetricsConfig ?? new yL({});
        return this.configCache = { value: t3, expiresAt: e3 + 3e5 }, t3;
      }
      async getGitInfos(e3) {
        const a3 = [], s2 = /* @__PURE__ */ new Set();
        for (const t3 of e3) {
          const e4 = this.gitAPI?.getRepository(n2.Uri.file(t3))?.rootUri.fsPath ?? null;
          a3.push({ fsPath: t3, gitRoot: e4 }), null !== e4 && s2.add(e4);
        }
        const o2 = /* @__PURE__ */ new Map();
        for (const e4 of s2) try {
          const a4 = this.gitAPI?.getRepository(n2.Uri.file(e4))?.state.HEAD;
          a4?.name && a4.commit && o2.set(e4, { branch: a4.name, commitHash: a4.commit });
        } catch (n3) {
          t2.warn(`Failed to get head for git root ${e4}`, n3);
        }
        const r3 = /* @__PURE__ */ new Map();
        for (const { fsPath: e4, gitRoot: n3 } of a3) r3.set(e4, OL({ gitRoot: n3, gitRootToHead: o2 }));
        return r3;
      }
      async startTrackingRequest(e3) {
        if (0 === e3.files.length) return;
        const a3 = Date.now(), s2 = await this.getConfig();
        await this.maybeCleanStorage();
        const o2 = await this.getGitInfos(e3.files.map((e4) => e4.fsPath)), i3 = this.storagePath(e3.requestId);
        await DL.promises.mkdir(i3, { recursive: true });
        const A2 = SL.join(i3, "files");
        await DL.promises.mkdir(A2, { recursive: true });
        const l2 = SL.join(i3, "diffs");
        await DL.promises.mkdir(l2, { recursive: true });
        const c2 = [];
        let m2 = 0;
        for (const n3 of e3.files) {
          const e4 = r2();
          if (n3.tooBig) {
            c2.push({ fsPath: n3.fsPath, fileUuid: e4, gitInfo: o2.get(n3.fsPath), tooBig: true });
            continue;
          }
          const a4 = SL.join(A2, e4);
          null !== n3.startContents && (await DL.promises.writeFile(a4, n3.startContents), m2 += n3.startContents?.length ?? 0);
          const t3 = $L(n3.startContents), s3 = /* @__PURE__ */ new Map();
          let i4 = 1;
          for (let e5 = 0; e5 < t3.length; e5++) {
            const n4 = t3[e5];
            s3.has(n4) || (s3.set(n4, i4), i4++);
          }
          const d3 = $L(n3.endContents), g3 = await this.computeDiff(t3, d3, s3), u3 = { fsPath: n3.fsPath, fileUuid: e4, fileSizeBytes: n3.endContents?.length ?? 0, numLines: d3.length, kind: null === n3.startContents ? IL.ADDED : null === n3.endContents ? IL.DELETED : IL.MODIFIED, diffTimedOut: g3.timedOut, diffChanges: g3.changes, gitInfo: o2.get(n3.fsPath) }, E2 = SL.join(l2, e4), p2 = new kL(u3).toJsonString();
          await DL.promises.writeFile(E2, p2), m2 += p2.length, c2.push({ fsPath: n3.fsPath, fileUuid: e4, gitInfo: o2.get(n3.fsPath), tooBig: false });
        }
        const d2 = /* @__PURE__ */ new Map();
        for (const e4 of o2.values()) "gitInfo" === e4.info?.case && d2.set(e4.info.value.gitRoot, e4);
        const g2 = { agentRequestId: e3.requestId, requestFiles: c2, deduplicatedGitInfos: Array.from(d2.values()), numCommitsTracked: 0, startTrackingDateUnixMilliseconds: a3, fileSizeBytes: m2, workspaceId: n2.cursor.workspaceId() ?? "" }, u2 = new fL(g2);
        await DL.promises.writeFile(SL.join(i3, "metadata.json"), u2.toJsonString()), this.requestTrackingCache.set(e3.requestId, u2), await this.queueSnapshot({ requestId: e3.requestId, name: "initial", readFile: async (n3) => {
          const a4 = e3.files.find((e4) => e4.fsPath === n3);
          return a4 ? { case: "contents", contents: a4.endContents } : (t2.error(`File ${n3} not found in args.files. Should not happen!`), { case: "contents", contents: null });
        }, gitInfos: o2, snapshotDateUnixMilliseconds: a3 });
        for (const e4 of this.specificRequestTrackers) e4.track(u2, s2);
      }
      async deleteRequest(e3) {
        try {
          const n3 = this.storagePath(e3);
          await DL.promises.rm(n3, { recursive: true, force: true }), this.requestTrackingCache.delete(e3);
        } catch (n3) {
          t2.error(`Failed to delete request ${e3}`, n3);
        }
      }
      async getRequestIdsToPurge(e3) {
        const n3 = await this.getConfig(), a3 = [];
        let t3 = 0;
        const s2 = [];
        for (const o2 of e3) Date.now() - o2.startTrackingDateUnixMilliseconds > 1e3 * n3.maxRequestRetentionSeconds || this.specificRequestTrackers.every((e4) => e4.isDoneTracking(o2, n3)) ? a3.push(o2.agentRequestId) : (t3 += o2.fileSizeBytes, s2.push({ requestId: o2.agentRequestId, date: o2.startTrackingDateUnixMilliseconds, sizeBytes: o2.fileSizeBytes }));
        if (s2.length > n3.maxRequestsTracked || t3 > 1024 * n3.maxRequestsTrackedMb * 1024) {
          s2.sort((e4, n4) => e4.date - n4.date);
          for (let e4 = 0; e4 < s2.length - n3.maxRequestsTracked; e4++) a3.push(s2[e4].requestId), t3 -= s2[e4].sizeBytes;
          for (; t3 > 1024 * n3.maxRequestsTrackedMb * 1024; ) {
            const e4 = s2.shift();
            if (void 0 === e4) break;
            t3 -= e4.sizeBytes, a3.push(e4.requestId);
          }
        }
        return a3;
      }
      async maybeCleanStorage() {
        const e3 = await this.getRequestIdsToPurge(Array.from(this.requestTrackingCache.values()));
        for (const n3 of e3) await this.deleteRequest(n3);
      }
      async queueSnapshot(e3) {
        for (this.queue.push(e3); this.queue.length > 2e3; ) this.queue.shift();
        this.processQueue();
      }
      processQueue() {
        this.isDisposed ? this.queue.length = 0 : this.isQueueProcessing || (async () => {
          if (0 === this.queue.length) return void this.onDidFinishProcessingQueueEmitter.fire();
          this.isQueueProcessing = true;
          const e3 = r2();
          try {
            const n3 = this.queue.shift();
            if (void 0 === n3) return;
            await this.sendSnapshot(n3, e3);
          } catch (n3) {
            t2.error(`Failed to process queue element ${e3}, continuing`, n3);
          } finally {
            this.isQueueProcessing = false, this.processQueue();
          }
        })().catch((e3) => {
          t2.error("Failed to process queue", e3);
        });
      }
      async persistRequestMetadata(e3) {
        const n3 = this.requestTrackingCache.get(e3);
        if (void 0 === n3) return;
        const a3 = this.storagePath(e3);
        await DL.promises.stat(a3).then((e4) => e4.isDirectory()).catch((e4) => false) && await DL.promises.writeFile(SL.join(a3, "metadata.json"), n3.toJsonString());
      }
      async sendSnapshot(e3, n3) {
        const a3 = await this.getConfig();
        if (!a3.enabled) return;
        t2.debug("Processing request", { requestId: e3.requestId, name: e3.name });
        const s2 = await this.getRequestMetadata(e3.requestId), o2 = [], r3 = /* @__PURE__ */ new Set();
        for (const e4 of s2.requestFiles) e4.tooBig && r3.add(e4.fsPath);
        for (const n4 of s2.requestFiles) {
          if (r3.has(n4.fsPath)) continue;
          const a4 = await e3.readFile(n4.fsPath);
          "tooBig" !== a4.case ? o2.push({ fsPath: n4.fsPath, contents: a4.contents, sizeBytes: a4.contents ? a4.contents.length : 0 }) : r3.add(n4.fsPath);
        }
        const i3 = [], A2 = [];
        for (const n4 of s2.requestFiles) {
          if (r3.has(n4.fsPath)) continue;
          const s3 = await (async () => {
            const a4 = SL.join(this.storagePath(e3.requestId), "diffs", n4.fileUuid), t3 = await DL.promises.readFile(a4, "utf8");
            return kL.fromJsonString(t3);
          })(), l3 = await (async () => {
            if (s3.kind === IL.ADDED) return null;
            const a4 = SL.join(this.storagePath(e3.requestId), "files", n4.fileUuid);
            return await DL.promises.readFile(a4, "utf8");
          })(), c3 = o2.find((e4) => e4.fsPath === n4.fsPath);
          if (void 0 === c3) {
            t2.error(`File ${n4.fsPath} not found in newFiles. Should not happen!`);
            continue;
          }
          const m3 = $L(c3.contents), d3 = $L(l3), g2 = /* @__PURE__ */ new Map();
          let u2 = 1;
          for (let e4 = 0; e4 < d3.length; e4++) {
            const n5 = d3[e4];
            g2.has(n5) || (g2.set(n5, u2), u2++);
          }
          for (const e4 of s3.diffChanges) for (let n5 = 0; n5 < e4.tokenizedAddedLines.length; n5++) {
            const a4 = e4.tokenizedAddedLines[n5], t3 = e4.addedLines[n5];
            void 0 !== t3 && void 0 !== a4 && g2.set(t3, a4);
          }
          const E2 = await this.computeDiff(d3, m3, g2), p2 = { fsPath: n4.fsPath, fileUuid: n4.fileUuid, fileSizeBytes: c3.sizeBytes, numLines: m3.length, diffTimedOut: E2.timedOut, diffChanges: E2.changes, kind: 0 === m3.length ? IL.DELETED : 0 === d3.length ? IL.ADDED : IL.MODIFIED, gitInfo: e3.gitInfos.get(n4.fsPath) };
          if (!a3.sendFullAddedLinesInDiffChanges) {
            for (const e4 of p2.diffChanges) e4.addedLines = [];
            for (const e4 of s3.diffChanges) e4.addedLines = [];
          }
          a3.sendOriginalFileContentsForInitialSnapshot && "initial" === e3.name && (s3.originalFileContents = l3 ?? void 0), i3.push(p2), A2.push(s3);
        }
        const l2 = { agentRequestId: s2.agentRequestId, fileSnapshots: i3, initialFileSnapshots: A2, name: e3.name, snapshotDateUnixMilliseconds: e3.snapshotDateUnixMilliseconds, tooBigFiles: Array.from(r3) }, c2 = new TL(l2);
        if (this.isDisposed) return;
        const m2 = await this.backendClientService.getOnlineMetricsClient();
        var d2;
        this.isDisposed || await m2.reportAgentSnapshot(c2, { headers: (d2 = n3, { "X-Request-ID": d2, "X-Amzn-Trace-Id": `Root=${d2}` }), signal: this.abortController.signal });
      }
      async getRequestMetadata(e3) {
        const n3 = this.requestTrackingCache.get(e3);
        if (n3) return n3;
        const a3 = SL.join(this.storagePath(e3), "metadata.json"), t3 = await DL.promises.readFile(a3, "utf8"), s2 = fL.fromJsonString(t3);
        return this.requestTrackingCache.set(e3, s2), s2;
      }
      dispose() {
        this.isDisposed = true, this.abortController.abort(), this.queue.length = 0, this.requestTrackingCache.clear();
        for (const e3 of this.disposables) e3.dispose();
        for (const e3 of this.specificRequestTrackers) e3.dispose();
      }
    }
    const nP = 0, aP = 1;
    function tP() {
      return "enabled" === n2.cursor.getPrivateInferenceEnablement() && (a3 = "online-metrics", Object.prototype.hasOwnProperty.call(e2, a3));
      var a3;
    }
    const sP = {};
    function oP(e3, s2) {
      const o2 = /* @__PURE__ */ new Map(), r3 = (s3) => {
        let r4, i3, A2 = s3.state.HEAD;
        const l2 = o2.get(s3);
        l2 && l2.dispose();
        const c2 = s3.state.onDidChange(() => {
          void 0 !== r4 && (clearTimeout(r4), r4 = void 0), void 0 !== s3.state.rebaseCommit && (i3 = Date.now()), r4 = setTimeout(async () => {
            r4 = void 0;
            let o3 = false;
            if (void 0 !== A2 && (o3 = await (async function(e4, n3, t3, s4) {
              const o4 = n3.state.HEAD;
              if (a2.debug(`shouldRunBugbot: head = ${o4?.name}, lastHead = ${t3?.name}, lastRebaseAt = ${s4}`), void 0 === o4) return a2.debug("shouldRunBugbot: no head state"), false;
              if (o4.name !== t3.name) return a2.debug("shouldRunBugbot: checkout changed"), false;
              if (void 0 === o4.commit || o4.commit === t3.commit) return a2.debug("shouldRunBugbot: commit is the same"), false;
              if (void 0 !== s4 && Math.abs(Date.now() - s4) < 1e4) return a2.debug("shouldRunBugbot: just finished rebasing"), false;
              let r5;
              try {
                r5 = await n3.getCommit(o4.commit);
              } catch {
                return a2.debug("shouldRunBugbot: failed to get commit"), false;
              }
              if (r5.parents.length > 1) return a2.debug("shouldRunBugbot: merge commit"), false;
              let i4 = false;
              try {
                const t4 = (await e4.rawGit.exec(n3.rootUri.fsPath, ["var", "GIT_COMMITTER_IDENT"])).stdout.trim(), s5 = (await e4.rawGit.exec(n3.rootUri.fsPath, ["check-mailmap", t4])).stdout.trim(), o5 = `${r5.authorName} <${r5.authorEmail}>`;
                a2.trace(`shouldRunBugbot: committer_ident = '${t4}'`), a2.trace(`shouldRunBugbot: mailmap = '${s5}'`), a2.trace(`shouldRunBugbot: expected_committer_email = '${o5}'`), s5 === o5 && void 0 !== r5.commitDate && (i4 = Math.abs(Date.now() - r5.commitDate.getTime()) < 3e4);
              } catch (e5) {
              }
              if (!i4) return a2.debug("shouldRunBugBot: not authored by me recently"), false;
              try {
                if (0 === (await e4.rawGit.exec(n3.rootUri.fsPath, ["merge-base", "--is-ancestor", "HEAD", "@{u}"])).exitCode) return a2.debug("shouldRun: commit has been pushed"), false;
              } catch {
              }
              return a2.info("shouldRun: OK! Running local Agent Review on commit..."), true;
            })(e3, s3, A2, i3), o3 && n2.commands.executeCommand("cursor.runEditorBugbot", s3.rootUri, s3.state.HEAD?.commit)), o3) try {
              n2.scm.gitCommitWasRun(s3.rootUri.fsPath);
            } catch (e4) {
              t2.error("Failed to notify git commit", e4);
            }
            const l3 = s3.state.HEAD;
            if (l3?.commit && A2?.commit !== l3.commit && void 0 !== l3.name && void 0 !== A2?.name && l3.name === A2.name) {
              const e4 = n2.commands.executeCommand("developer.aiCodeTracking.scoreCommitInternal", l3.commit, s3.rootUri.fsPath, { report: true });
              e4 && "function" == typeof e4.then && e4.then(() => {
              }, (e5) => {
                t2.error("Failed to trigger commit scoring", e5);
              });
            }
            A2 = s3.state.HEAD;
          }, 5e3);
        });
        o2.set(s3, c2);
      };
      for (const n3 of e3.repositories) r3(n3);
      s2.subscriptions.push(e3.onDidOpenRepository((e4) => {
        r3(e4);
      }), e3.onDidCloseRepository((e4) => {
        const n3 = o2.get(e4);
        n3 && (n3.dispose(), o2.delete(e4));
      }), { dispose: () => o2.forEach((e4) => e4.dispose()) });
    }
    let rP;
    async function iP(e3) {
      if (!await (void 0 === rP && (rP = Promise.resolve(n2.cursor.getCursorExtensionsIsolationEnabled()).catch(() => false)), rP)) return;
      let s2;
      try {
        s2 = await (async function() {
          const e4 = n2.extensions.getExtension("vscode.git");
          if (!e4) return void t2.warn("Git extension not found");
          const a3 = e4.isActive ? e4.exports : await e4.activate();
          if (a3 && a3.enabled) return a3.getAPI(1);
          t2.warn("Git extension is not enabled");
        })();
      } catch (e4) {
        t2.error("Failed to get Git API", e4);
      }
      a2.init(), e3.isDevelopment && t2.init();
      const o2 = { supportedCommands: Object.keys(sP).filter((e4) => true), runCommand: (e4, n3) => {
        if (e4 === bL.GetCurrentIndexAndRecentCommits) {
          const e5 = (a3 = bL.GetCurrentIndexAndRecentCommits, sP[a3]);
          if (void 0 !== e5) return e5(n3);
        }
        var a3;
        return Promise.resolve(void 0);
      } };
      if (e3.subscriptions.push(n2.cursor.registerEverythingProvider(o2)), s2) try {
        await (async function(e4, a3) {
          const s3 = n2.scm.registerGitIgnoreProvider({ areIgnored: async (a4) => {
            if (0 === a4.length) return [];
            const s4 = a4.map((e5) => e5 instanceof n2.Uri ? e5 : n2.Uri.from(e5)), o3 = /* @__PURE__ */ new Map();
            for (let n3 = 0; n3 < s4.length; n3++) {
              const a5 = s4[n3], t3 = await e4.openRepository(a5);
              if (!t3) continue;
              const r5 = t3.rootUri.toString(), i5 = o3.get(r5);
              i5 ? (i5.uris.push(a5), i5.indices.push(n3)) : o3.set(r5, { repo: t3, uris: [a5], indices: [n3] });
            }
            const r4 = new Array(a4.length).fill(false);
            let i4 = false;
            const A3 = Array.from(o3.values()).map(async ({ repo: e5, uris: n3, indices: a5 }) => {
              const s5 = n3.map((e6) => e6.fsPath), o4 = await e5.checkIgnore(s5).catch((e6) => (i4 || (i4 = true, t2.warn("git check-ignore failed, treating files as not ignored", e6)), /* @__PURE__ */ new Set()));
              for (let e6 = 0; e6 < n3.length; e6++) {
                const n4 = s5[e6], t3 = a5[e6];
                r4[t3] = o4.has(n4);
              }
            });
            return await Promise.all(A3), r4;
          } });
          a3.subscriptions.push(s3);
        })(s2, e3);
      } catch (e4) {
        t2.error("Failed to register git ignore provider", e4);
      }
      let r3, i3, A2 = false;
      const c2 = () => {
        if (A2) return;
        if ((function() {
          if (tP()) return true;
          if (!n2.cursor.isLocalMode) return false;
          const e4 = n2.cursor.getPrivacyModeEnum();
          return e4 === nP || e4 === aP;
        })()) return r3?.dispose(), r3 = void 0, void (i3 ??= n2.commands.registerCommand(FL, () => {
        }));
        if (void 0 !== r3) return;
        i3?.dispose(), i3 = void 0;
        const a3 = new l(e3), t3 = new vL(e3), o3 = new eP(e3, a3, t3, s2);
        r3 = n2.Disposable.from(o3, t3, a3);
      };
      c2(), e3.subscriptions.push({ dispose: () => {
        A2 = true, r3?.dispose(), r3 = void 0, i3?.dispose(), i3 = void 0;
      } }), n2.cursor.isLocalMode && (e3.subscriptions.push(n2.cursor.onDidChangePrivacyModeEnum(c2)), n2.cursor.waitForTeamPrivacyModeFetched().then(c2, () => {
      })), s2 && oP(s2, e3);
    }
    function AP() {
    }
    !(function(e3, n3) {
      if (e3 in sP) throw new Error(`Action ${e3} already registered`);
      sP[e3] = n3;
    })(bL.GetCurrentIndexAndRecentCommits, async ({ rootPath: e3, rawUris: a3 }) => {
      const t3 = n2.extensions.getExtension("vscode.git");
      if (void 0 === t3) throw new Error("Git extension not found");
      const s2 = (await t3.activate()).getAPI(1).repositories.find((n3) => n3.rootUri.path === e3);
      if (!s2) throw new Error("No repository found");
      e3.endsWith("/") || (e3 += "/");
      const o2 = await s2.getCommit("HEAD").then((e4) => true).catch(() => false), r3 = a3.map((a4) => n2.Uri.parse(a4).path.substring(e3.length));
      return { diffs: o2 ? await Promise.all(r3.map((e4) => s2.diffWith("HEAD", e4))) : await Promise.all(r3.map((e4) => s2.diffWith("4b825dc642cb6eb9a060e54bf8d69288fbee4904", e4))), previousCommitMessages: (o2 ? await s2.log({ maxEntries: 10 }) : []).map((e4) => e4.message) };
    });
  })();
  var r = exports;
  for (var i in o) r[i] = o[i];
  o.__esModule && Object.defineProperty(r, "__esModule", { value: true });
})();
