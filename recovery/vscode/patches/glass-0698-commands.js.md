# Patch evidence: commands.js

- module: app-out-vs-workbench-workbench-glass-main-js:0698
- bundle: app/out/vs/workbench/workbench.glass.main.js range 2671151..2673138
- upstream: src/vs/platform/commands/common/commands.ts sha256:61b0d5d3ef6c441f193e1fe8a17dd6628016e073d8036a0aafc3999a41322e5a
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.857; shared rare anchors: 13
- bundle-only anchors: 2; upstream anchors absent from bundle: 0

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| inlineChat.hideHint | 2672787..2672806 | yes | (), hs.registerCommand("noop", () => { }), hs.registerCommandAlias("inlineChat.hideHint", "noop"), hs.registerCommandAlias("inlineChat.showHint", "noop"); } |
| inlineChat.showHint | 2672843..2672862 | yes | CommandAlias("inlineChat.hideHint", "noop"), hs.registerCommandAlias("inlineChat.showHint", "noop"); } }); function hAy(t, e) { if (t.weight1 !== e.weight1) |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| string | 80 |

