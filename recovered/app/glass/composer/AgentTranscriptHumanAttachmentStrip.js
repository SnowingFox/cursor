// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptHumanAttachmentStrip.js range:15639581..15640632
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E
// wrapper-init: cXh -> agentTranscriptHumanAttachmentStripModuleInit
// hoisted-owner: AgentTranscriptHumanSenderLabel.js (app-out-vs-workbench-workbench-glass-main-js:2457); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: cXh -> agentTranscriptHumanAttachmentStripModuleInit; rSa -> AgentTranscriptHumanSenderLabel (apply-map AST equivalent)

var agentTranscriptHumanAttachmentStripModuleInit = L({
  "AgentTranscriptHumanAttachmentStrip.js"() {
    "use strict";

    E();
  }
});
import { jsx as uXh, jsxs as tFS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as nFS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function AgentTranscriptHumanSenderLabel(t) {
  const e = nFS(8),
    {
      sender: n
    } = t,
    i = n.kind === "agent" ? "arrows-left-right" : n.kind === "voice" ? "waveform" : "person";
  let r;
  e[0] !== i ? (r = uXh(zt, {
    "aria-hidden": true,
    name: i,
    size: "sm"
  }), e[0] = i, e[1] = r) : r = e[1];
  let s;
  e[2] !== n.label ? (s = uXh("span", {
    className: "ui-b3r6kr ui-lyipyv ui-uxw1ft",
    children: n.label
  }), e[2] = n.label, e[3] = s) : s = e[3];
  let o;
  return e[4] !== n.kind || e[5] !== r || e[6] !== s ? (o = tFS("div", {
    className: "ui-78zum5 ui-6s0dn4 ui-1jnr06f ui-r9ek0c ui-12gk1gc ui-4b2ntj ui-1wm8ruf ui-spwq11 ui-k50ysn",
    "data-transcript-adjunct": "senderAttribution",
    "data-agent-transcript-human-sender": n.kind,
    children: [r, s]
  }), e[4] = n.kind, e[5] = r, e[6] = s, e[7] = o) : o = e[7], o;
}
