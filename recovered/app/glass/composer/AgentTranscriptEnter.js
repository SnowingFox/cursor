// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptEnter.js range:15636434..15639581
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E
// wrapper-init: X5S -> agentTranscriptEnterModuleInit
// hoisted-owner: AgentTranscriptHumanAttachmentStrip.js (app-out-vs-workbench-workbench-glass-main-js:2456); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: X5S -> agentTranscriptEnterModuleInit (apply-map AST equivalent)

var agentTranscriptEnterModuleInit = L({
  "AgentTranscriptEnter.js"() {
    "use strict";

    E();
  }
});
import { jsx as QWe, jsxs as Z5S, Fragment as Q5S } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as lXh } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as J5S } from "./react-runtime/react/esm-index-production.js";
function iSa(t) {
  const e = lXh(7),
    {
      attachments: n,
      onOpen: i
    } = t;
  if (n.length === 0) return null;
  let r;
  if (e[0] !== n || e[1] !== i) {
    let o;
    e[3] !== i ? (o = (a, l) => QWe(eFS, {
      attachment: a,
      onOpen: i === void 0 ? void 0 : () => i(l)
    }, a.id), e[3] = i, e[4] = o) : o = e[4], r = n.map(o), e[0] = n, e[1] = i, e[2] = r;
  } else r = e[2];
  let s;
  return e[5] !== r ? (s = QWe("div", {
    className: "ui-h8yej3 ui-10w6t97 ui-r9ek0c ui-b3r6kr",
    "data-transcript-adjunct": "attachmentStrip",
    children: QWe("div", {
      className: "ui-78zum5 ui-167g77z ui-5yr21d ui-h8yej3 ui-w2csxc ui-10wlt62 ui-1rohswg",
      children: r
    })
  }), e[5] = r, e[6] = s) : s = e[6], s;
}
function eFS(t) {
  const e = lXh(19),
    {
      attachment: n,
      onOpen: i
    } = t,
    [r, s] = J5S(void 0),
    o = n.src === r ? void 0 : n.src,
    a = n.kind === "image" ? "Attached image" : "Attached video";
  let l;
  e[0] !== n.kind || e[1] !== o ? (l = o !== void 0 && (n.kind === "image" ? QWe("img", {
    alt: "",
    className: "ui-1lliihq ui-h8yej3 ui-5yr21d ui-l1xv1r ui-1e1y6u3",
    src: o,
    onError: () => s(o)
  }) : QWe("video", {
    className: "ui-1lliihq ui-h8yej3 ui-5yr21d ui-l1xv1r ui-1e1y6u3",
    muted: true,
    playsInline: true,
    preload: "metadata",
    src: o,
    onError: () => s(o)
  })), e[0] = n.kind, e[1] = o, e[2] = l) : l = e[2];
  let c;
  e[3] !== n.kind ? (c = n.kind === "video" && QWe("span", {
    "aria-hidden": true,
    className: "ui-10l6tqk ui-wa60dl ui-1nrll8i ui-1vjfegm ui-78zum5 ui-6s0dn4 ui-l56j7k ui-1kky2od ui-lup9mm ui-16rqkct ui-1y30pys ui-3mhq3d ui-rfammt ui-11lhmoz ui-47corl",
    children: QWe("svg", {
      className: "ui-2lah0s ui-1ox8vmk ui-5m6it2",
      fill: "currentColor",
      viewBox: "0 0 24 24",
      children: QWe("path", {
        d: "M8 5v14l11-7z"
      })
    })
  }), e[3] = n.kind, e[4] = c) : c = e[4];
  let u;
  e[5] !== l || e[6] !== c ? (u = Z5S(Q5S, {
    children: [l, c]
  }), e[5] = l, e[6] = c, e[7] = u) : u = e[7];
  const d = u;
  if (i === void 0) {
    let g;
    return e[8] !== n.kind || e[9] !== a || e[10] !== d ? (g = QWe("div", {
      className: "ui-1n2onr6 ui-2lah0s ui-1td3qas ui-10w6t97 ui-1717udv ui-c342km ui-1e1y6u3 ui-b3r6kr ui-11ya8jg",
      "data-agent-transcript-human-attachment": n.kind,
      role: "img",
      "aria-label": a,
      children: d
    }), e[8] = n.kind, e[9] = a, e[10] = d, e[11] = g) : g = e[11], g;
  }
  let h;
  e[12] !== i ? (h = g => {
    g.stopPropagation(), i();
  }, e[12] = i, e[13] = h) : h = e[13];
  let p;
  return e[14] !== n.kind || e[15] !== a || e[16] !== d || e[17] !== h ? (p = QWe("button", {
    type: "button",
    className: "ui-1n2onr6 ui-2lah0s ui-1td3qas ui-10w6t97 ui-1717udv ui-c342km ui-1e1y6u3 ui-b3r6kr ui-11ya8jg ui-1ypdohk",
    "data-agent-transcript-human-attachment": n.kind,
    "aria-label": a,
    onClick: h,
    children: d
  }), e[14] = n.kind, e[15] = a, e[16] = d, e[17] = h, e[18] = p) : p = e[18], p;
}
