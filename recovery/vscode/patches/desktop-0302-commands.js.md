# Patch evidence: commands.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0302
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 757843..759576
- upstream: src/vs/platform/commands/common/commands.ts sha256:61b0d5d3ef6c441f193e1fe8a17dd6628016e073d8036a0aafc3999a41322e5a
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.857; shared rare anchors: 13
- bundle-only anchors: 2; upstream anchors absent from bundle: 0

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| inlineChat.hideHint | 759479..759498 | yes | (), ki.registerCommand("noop", () => { }), ki.registerCommandAlias("inlineChat.hideHint", "noop"), ki.registerCommandAlias("inlineChat.showHint", "noop"); } |
| inlineChat.showHint | 759535..759554 | yes | CommandAlias("inlineChat.hideHint", "noop"), ki.registerCommandAlias("inlineChat.showHint", "noop"); } }), En, qy = V({ "charCode.js"() { "use strict"; x() |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| string | 80 |

