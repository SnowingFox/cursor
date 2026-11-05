// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/public-api.d.ts sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: public-api.ts (type surface)
// basis: dts-map
// confidence: A
// method: generated (verbatim .d.ts, import paths normalized)
// run: w1-sdk-core 2026-11-05T10:09:30.955Z
// @ts-nocheck -- declarations from the published package; checked via API extraction, not implementation bodies
export type { AgentMessage, AgentOperationOptions, CloudSendOptions, CursorRequestOptions, GetAgentMessagesOptions, GetAgentOptions, GetRunOptions, GetUsageOptions, ListAgentsOptions, ListResult, ListRunsOptions, SDKAgent, SDKAgentInfo, SDKModel, SDKRepository, SDKUser, SendOptions, } from "./agent.js";
export type { SDKArtifact } from "./artifacts.js";
export type { SdkCredentialStore, StoredSdkCredentials } from "./auth/credential-store.js";
export { FileCredentialStore, getDefaultSdkAuthPath, InMemoryCredentialStore, } from "./auth/credential-store.js";
export type { SdkAuthStatus, SdkAuthStatusOptions, SdkLoginOptions, SdkLoginResult, SdkLogoutOptions, } from "./auth/login.js";
export { DEFAULT_LOGIN_API_KEY_TTL_MS } from "./auth/login.js";
export type { DirEntry, FileInfo, FileSystem, FSEditQuery, FSEditResult, FSGrepQuery, FSGrepResult, FileSystemTool, FileSystemToolOptions, FileSystemTools, GlobOptions, ListOptions, } from "./filesystem/index.js";
export { childOverlayFs, createFileSystemTools, DeleteNotSupportedError, EditError, emptyFs, FILE_SYSTEM_SCAN_LIMIT, FileNotFoundError, InvalidGrepPatternError, isFileNotFoundError, isInvalidGrepPatternError, NoMountError, overlayFs, PathError, ReadOnlyMountError, readOnlyFs, remapPathError, strReplaceOnFileSystem, tempFs, unionFs, WriteFailedError, } from "./filesystem/index.js";
export type { LocalRunStreamDoneEvent, LocalRunStreamEvent, LocalRunStreamResultEvent, LocalRunStreamSdkMessageEvent, SDKAssistantMessage, SDKMessage, SDKStatusMessage, SDKSummaryMessage, SDKSystemMessage, SDKTaskMessage, SDKThinkingMessage, SDKToolUseMessage, SDKUsageMessage, SDKUserMessageEvent, TextBlock, ToolUseBlock, } from "./messages.js";
export { createSdkMessageRunStreamEvent, decodeLocalRunStreamEvent, decodeSdkMessageRunStreamEvent, isTerminalLocalRunStreamEvent, LOCAL_RUN_STREAM_EVENT_TYPE, LOCAL_RUN_STREAM_SCHEMA_VERSION, localRunStreamEventToSdkMessage, } from "./messages.js";
export type { AgentDefinition, AgentModeOption, AgentOptions, CloudAgentOptions, CursorAgentPlatformOptions, FileSystemContext, FileSystemFactory, LocalAgentOptions, LocalSendOptions, LocalSubagentInherit, LocalSubagentResourceProviderContext, LocalSubagentResourceProviderFields, LocalSubagentResourceProviderOptions, LocalToolExecutor, McpServerConfig, ModelListItem, ModelParameterDefinition, ModelParameterValue, ModelSelection, ModelVariant, SDKCustomTool, SDKCustomToolContent, SDKCustomToolContext, SDKCustomToolResult, SDKImage, SDKImageDimension, SDKJsonValue, SDKToolAnnotations, SDKUserMessage, SettingSource, ToolName, } from "./options.js";
export { CursorAgentPlatform, createAgentPlatform } from "./platform.js";
export type { Run, RunError, RunOperation, RunResult, RunResultStatus, RunStatus, SteerAckOutcome, } from "./run.js";
export { UnsupportedRunOperationError } from "./run.js";
export type { LocalRunEventNotifierOptions, LocalRunEventNotifierServerOptions, RunEventHint, RunEventNotifier, RunEventOffset, RunEventSubscription, WatchRunEventsInput, } from "./run-event-notifier-api.js";
export { createInMemoryRunEventNotifier, createLocalRunEventNotifier, InMemoryRunEventNotifier, LocalRunEventNotifier, LocalRunEventNotifierServer, startLocalRunEventNotifierServer, } from "./run-event-notifier-api.js";
export type { AgentCheckpointStore, AgentLifecycleStatus, AgentRecord, AgentRunStore, AppendRunEventInput, AttachRunEventsInput, CheckpointRef, CreateAgentInput, CreateFollowUpRunInput, ListRunEventsInput, ListRunEventsResult, RunEventRecord, RunEventStore, RunEventStreamStore, RunLifecycleStatus, RunRecord, RunTerminalPatch, WatchableRunEventStore, } from "./run-store-public-types.js";
export type { CursorConfigureOptions } from "./sdk-config.js";
export { configureCursorSdk } from "./sdk-config.js";
export type { LocalAgentAgentFilter, LocalAgentCheckpointFilter, LocalAgentCheckpointRef, LocalAgentDocument, LocalAgentListFilter, LocalAgentRunDocument, LocalAgentRunEventDocument, LocalAgentRunEventFilter, LocalAgentRunEventListResult, LocalAgentRunEventOffset, LocalAgentRunFilter, LocalAgentRunStatus, LocalAgentStatus, LocalAgentStore, LocalAgentStoreAgents, LocalAgentStoreCheckpoints, LocalAgentStoreListResult, LocalAgentStoreRunEvents, LocalAgentStoreRuns, RunFilter, } from "./store/index.js";
export { composeLocalAgentStore, getDefaultSdkStateRoot, JSONL_LOCAL_AGENT_STORE_FILES, JsonlLocalAgentStore, paginateAgentDocuments, paginateCheckpointBlobIds, paginateRunDocuments, } from "./store/index.js";
export { Agent, Cursor } from "./stubs.js";
export type { AgentUsage, RunUsage, TokenUsage, UsageCost } from "./usage-types.js";
