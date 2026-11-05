// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerEndOfTurnSummary.react.js range:32159947..32161336
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt, rs, Ss, fo, oNi, Pl, lat, F6l, zIw
// wrapper-init: exw -> composerEndOfTurnSummaryModuleInit
// hoisted-owner: ComposerTranscriptCodeBlock.react.js (app-out-vs-workbench-workbench-glass-main-js:6052); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: exw -> composerEndOfTurnSummaryModuleInit; sxw -> ComposerTranscriptCodeBlock (apply-map AST equivalent)

var composerEndOfTurnSummaryModuleInit = L({
  "ComposerEndOfTurnSummary.react.js"() {
    "use strict";

    E(), Mt(), rs(), Ss(), fo(), oNi(), Pl(), lat(), F6l(), zIw();
  }
});
import { useCallback as txw, useEffect as nxw, useReducer as ixw, useRef as rxw } from "./react-runtime/react/esm-index-production.js";
import { jsx as H6f } from "./react-runtime/react/esm-jsx-runtime-production.js";
function ComposerTranscriptCodeBlock({
  codeProps: t,
  wordWrap: e,
  createStreamingTokenizer: n,
  onOpenFile: i
}) {
  const [, r] = ixw(g => g + 1, 0),
    s = rxw(void 0),
    o = n != null;
  nxw(() => {
    if (!o) return;
    const g = BI.onDidChange(() => {
      r();
    });
    return () => g.dispose();
  }, [o]);
  const a = t.children.replace(/\n$/, "");
  let l;
  n ? (s.current ??= n(), l = s.current.update({
    code: a,
    language: t.language,
    streaming: t.streaming
  })) : s.current = void 0;
  const {
      filePath: c,
      startLine: u,
      endLine: d,
      onHeaderContextMenu: h
    } = t,
    p = txw(() => {
      c && i && i(c, u !== void 0 ? {
        startLine: u,
        endLine: d
      } : void 0);
    }, [c, u, d, i]);
  return H6f("div", {
    className: "composer-message-codeblock",
    children: H6f(S1t, {
      className: `language-${t.language || "text"}`,
      copyText: t.copyText,
      endLine: d,
      filePath: c,
      onHeaderClick: c && i ? p : void 0,
      onHeaderContextMenu: h,
      showIndentGuides: false,
      startLine: u,
      streaming: t.streaming,
      tokens: l,
      wordWrap: t.wordWrap ?? e,
      children: t.children
    })
  });
}
