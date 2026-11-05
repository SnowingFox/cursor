// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/19.js sha256:08f41fe4f6eaae7113148c036c67c95086444c8a1a5aafcfb598c2260e6021bb
// module: "../cursor-sdk-local-runtime/dist/run-store/default-local-agent-stores.js" range:196..1163
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
import * as __dep0 from "./in-memory-run-event-notifier";
import * as __dep1 from "./agent-checkpoint-store";
import * as __dep2 from "./sqlite-agent-run-store";
import * as __dep3 from "./sqlite-run-event-store";
var r = __dep0;
async function s(e) {
  const {
    LocalAgentCheckpointStore: t
  } = await import("./agent-checkpoint-store");
  return new t({
    stateRoot: e.stateRoot
  });
}
async function o(e) {
  const {
    SqliteAgentRunStore: t
  } = await import("./sqlite-agent-run-store");
  return t.open(e);
}
async function u(e) {
  const {
    SqliteRunEventStore: t
  } = await import("./sqlite-run-event-store");
  return t.open(e);
}
function i() {
  return (0, r.y)();
}
async function c(e) {
  return {
    store: await o(e),
    checkpointStore: await s(e),
    eventStore: await u(e),
    eventNotifier: i()
  };
}
export { s as createDefaultLocalAgentCheckpointStore, o as createDefaultLocalAgentRunStore, c as createDefaultLocalAgentStores, i as createDefaultLocalRunEventNotifier, u as createDefaultLocalRunEventStore };
