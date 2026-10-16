import { useEffect as __lcpTurnUseEffect, useState as __lcpTurnUseState, useSyncExternalStore as __lcpTurnUseStore } from "./react-runtime/react/esm-index-production.js";
import { jsx as __lcpTurnJsx } from "./react-runtime/react/esm-jsx-runtime-production.js";
// [cursor-re local mode] Live turn stats, modelled on Claude Code's spinner:
// "Working  12s · ↓ 1.2k tokens · thinking with high effort" while a turn runs,
// "Worked  for 34s · ↓ 2.3k tokens" once it ends. Fed from the local agent's
// interaction stream (AgentClientService), keyed by the turn's user message id.
var __lcpTurnStorageKey = "cursorLocalMode.turnStats", __lcpTurns = __lcpTurnLoad(), __lcpTurnByConversation = /* @__PURE__ */ new Map(), __lcpTurnListeners = /* @__PURE__ */ new Set(), __lcpTurnNotifyPending = false;
// Finished turns are kept in localStorage so "Worked for 34s · ↓ 2.3k tokens"
// survives reloads; only the most recent 300 are retained.
function __lcpTurnLoad() {
  try {
    const v = JSON.parse(globalThis.localStorage?.getItem(__lcpTurnStorageKey) ?? "[]");
    return new Map(Array.isArray(v) ? v.filter((e) => Array.isArray(e) && typeof e[0] === "string" && e[1] && typeof e[1] === "object") : []);
  } catch {
    return /* @__PURE__ */ new Map();
  }
}
function __lcpTurnSave() {
  try {
    globalThis.localStorage?.setItem(__lcpTurnStorageKey, JSON.stringify([...__lcpTurns].filter(([, s]) => s.endedAt !== void 0).slice(-300)));
  } catch {
  }
}
function __lcpTurnNotify() {
  __lcpTurnNotifyPending || (__lcpTurnNotifyPending = true, queueMicrotask(() => {
    __lcpTurnNotifyPending = false;
    for (const l of __lcpTurnListeners) l();
  }));
}
function __lcpTurnSubscribe(listener) {
  return __lcpTurnListeners.add(listener), () => __lcpTurnListeners.delete(listener);
}
function __lcpTurnSet(key, patch) {
  const prev = __lcpTurns.get(key);
  prev !== void 0 && (__lcpTurns.set(key, { ...prev, ...patch }), __lcpTurnNotify());
}
// Called once per local run; resumes and retries keep counting into the turn
// that the conversation's last user message started.
function __lcpTurnBegin(conversationId, action, requestedModel) {
  const messageId = action?.action?.case === "userMessageAction" ? action.action.value.userMessage?.messageId : void 0;
  const key = messageId || __lcpTurnByConversation.get(conversationId);
  if (!key) return;
  __lcpTurnByConversation.set(conversationId, key);
  const effort = requestedModel?.parameters?.find((p) => p.id === "reasoning" || p.id === "effort")?.value || void 0, prev = __lcpTurns.get(key);
  __lcpTurns.set(key, prev !== void 0 && messageId === void 0 ? { ...prev, effort: effort ?? prev.effort, endedAt: void 0 } : { startedAt: Date.now(), firstByteAt: void 0, chars: 0, effort, thinkingSince: void 0, endedAt: void 0, outputTokens: void 0 });
  for (const k of __lcpTurns.keys()) {
    if (__lcpTurns.size <= 300) break;
    __lcpTurns.delete(k);
  }
  return __lcpTurnNotify(), key;
}
function __lcpTurnUpdate(key, update) {
  const s = key === void 0 ? void 0 : __lcpTurns.get(key);
  if (s === void 0) return;
  const m = update.message, now = Date.now(), first = s.firstByteAt ?? now;
  switch (m.case) {
    case "textDelta":
      return __lcpTurnSet(key, { chars: s.chars + m.value.text.length, firstByteAt: first, thinkingSince: void 0 });
    case "thinkingDelta":
      return __lcpTurnSet(key, { chars: s.chars + m.value.text.length, firstByteAt: first, thinkingSince: s.thinkingSince ?? now });
    case "thinkingCompleted":
      return __lcpTurnSet(key, { firstByteAt: first, thinkingSince: void 0 });
    case "partialToolCall":
      return __lcpTurnSet(key, { chars: s.chars + (m.value.argsTextDelta?.length ?? 0), firstByteAt: first, thinkingSince: void 0 });
    case "toolCallStarted":
      return __lcpTurnSet(key, { firstByteAt: first, thinkingSince: void 0 });
    case "turnEnded": {
      const out = m.value.outputTokens === void 0 ? void 0 : Number(m.value.outputTokens);
      return __lcpTurnSet(key, { endedAt: now, thinkingSince: void 0, outputTokens: out !== void 0 && out > 0 ? out : void 0 }), __lcpTurnSave();
    }
  }
}
// formatDuration / formatNumber from Claude Code (src/utils/format.ts).
function __lcpFormatDuration(ms) {
  if (ms < 6e4) return `${Math.floor(ms / 1e3)}s`;
  let h = Math.floor(ms / 36e5), m = Math.floor(ms % 36e5 / 6e4), s = Math.round(ms % 6e4 / 1e3);
  return s === 60 && (s = 0, m++), m === 60 && (m = 0, h++), h > 0 ? `${h}h ${m}m ${s}s` : `${m}m ${s}s`;
}
var __lcpCompact = { short: new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1, minimumFractionDigits: 0 }), long: new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1, minimumFractionDigits: 1 }) };
function __lcpFormatTokens(n) {
  return (n >= 1e3 ? __lcpCompact.long : __lcpCompact.short).format(n).toLowerCase();
}
function __lcpTurnText(s, active, durationMs) {
  const now = Date.now(), parts = [];
  if (active) {
    parts.push(__lcpFormatDuration(now - s.startedAt));
    const tokens = Math.round(s.chars / 4);
    tokens > 0 ? parts.push(`${s.firstByteAt === void 0 ? "↑" : "↓"} ${__lcpFormatTokens(tokens)} tokens`) : s.firstByteAt === void 0 && now - s.startedAt > 3e3 && parts.push("waiting for the model");
    s.thinkingSince !== void 0 && parts.push(s.effort ? `thinking with ${s.effort} effort` : "thinking");
  } else {
    const ms = durationMs ?? (s.endedAt === void 0 ? void 0 : s.endedAt - s.startedAt);
    ms !== void 0 && ms > 0 && parts.push(`for ${__lcpFormatDuration(ms)}`);
    const tokens = s.outputTokens ?? Math.round(s.chars / 4);
    tokens > 0 && parts.push(`↓ ${__lcpFormatTokens(tokens)} tokens`);
  }
  return parts.join(" · ");
}
// The transcript's tail status ("Planning next moves", "Running …") has no turn
// id of its own; it belongs to the conversation's last user message.
function __lcpTurnKeyFromRows(rows) {
  for (let i = rows.length - 1; i >= 0; i--) {
    const r = rows[i];
    if (r?.kind === "human") return r.rowId;
    if (typeof r?.turnHumanRowId === "string") return r.turnHumanRowId;
  }
}
function __lcpTurnStatusSuffix({ turnKey }) {
  const key = turnKey.replace(/^human:/u, ""), stats = __lcpTurnUseStore(__lcpTurnSubscribe, () => __lcpTurns.get(key)), [, tick] = __lcpTurnUseState(0), live = stats !== void 0 && stats.endedAt === void 0;
  __lcpTurnUseEffect(() => {
    if (!live) return;
    const h = setInterval(() => tick((x) => x + 1), 1e3);
    return () => clearInterval(h);
  }, [live]);
  const text = live ? __lcpTurnText(stats, true) : "";
  return text ? __lcpTurnJsx("span", { "data-slot": "local-turn-stats", style: { flexShrink: 0, marginRight: "auto", color: "var(--cursor-text-quaternary)", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }, children: `· ${text}` }) : null;
}
// Details for the native "Thinking" row: "4s · high effort". The row has no
// turn id, so it follows the most recently started turn that is thinking.
function __lcpThinkingStats() {
  let best;
  for (const s of __lcpTurns.values()) s.thinkingSince !== void 0 && s.endedAt === void 0 && (best === void 0 || s.startedAt > best.startedAt) && (best = s);
  return best;
}
function __lcpThinkingDetails() {
  const stats = __lcpTurnUseStore(__lcpTurnSubscribe, __lcpThinkingStats), [, tick] = __lcpTurnUseState(0), live = stats !== void 0;
  __lcpTurnUseEffect(() => {
    if (!live) return;
    const h = setInterval(() => tick((x) => x + 1), 1e3);
    return () => clearInterval(h);
  }, [live]);
  if (!live) return null;
  const parts = [__lcpFormatDuration(Date.now() - stats.thinkingSince)];
  stats.effort && parts.push(`${stats.effort} effort`);
  return __lcpTurnJsx("span", { style: { fontVariantNumeric: "tabular-nums" }, children: parts.join(" · ") });
}
function __lcpTurnDetails({ turnKey, active, durationMs, fallback }) {
  const key = typeof turnKey === "string" ? turnKey.replace(/^human:/u, "") : void 0, stats = __lcpTurnUseStore(__lcpTurnSubscribe, () => key === void 0 ? void 0 : __lcpTurns.get(key)), [, tick] = __lcpTurnUseState(0);
  __lcpTurnUseEffect(() => {
    if (!active || stats === void 0) return;
    const h = setInterval(() => tick((x) => x + 1), 1e3);
    return () => clearInterval(h);
  }, [active, stats === void 0]);
  if (stats === void 0 || !active && typeof fallback !== "string" && fallback != null) return fallback ?? null;
  const text = __lcpTurnText(stats, active, durationMs);
  return text ? __lcpTurnJsx("span", { style: { fontVariantNumeric: "tabular-nums" }, children: text }) : fallback ?? null;
}
