# Patch evidence: terminalSuggestConfiguration.js

- module: app-out-vs-workbench-workbench-desktop-main-js:4178
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 24809790..24812605
- upstream: src/vs/workbench/contrib/terminalContrib/suggest/common/terminalSuggestConfiguration.ts sha256:f4cbb0d23593c144d5699e5294d55f0c86914b351d3bc0effa87c98b6086b914
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.5; shared rare anchors: 28
- bundle-only anchors: 3; upstream anchors absent from bundle: 84

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| terminal-suggest | 24810395..24810411 | yes | cription: S(10884, null), type: "object", properties: {}, default: { "terminal-suggest": true, "pwsh-shell-integration": true }, tags: ["preview"] }, "termi |
| pwsh-shell-integration | 24810421..24810443 | yes | type: "object", properties: {}, default: { "terminal-suggest": true, "pwsh-shell-integration": true }, tags: ["preview"] }, "terminal.integrated.suggest.quickSugg |
| ignore | 24811272..24811278 | no (exists elsewhere upstream) | er": { restricted: true, markdownDescription: S(10890, null), enum: ["ignore", "never", "exactMatch", "exactMatchIgnoreExtension", "always"], mark |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| terminal.integrated.suggest.enabled | 13 |
| terminal.integrated.suggest.quickSuggestions | 14 |
| terminal.integrated.suggest.suggestOnTriggerCharacters | 15 |
| terminal.integrated.suggest.runOnEnter | 16 |
| terminal.integrated.suggest.windowsExecutableExtensions | 17 |
| terminal.integrated.suggest.providers | 18 |
| terminal.integrated.suggest.showStatusBar | 19 |
| terminal.integrated.suggest.cdPath | 20 |
| terminal.integrated.suggest.inlineSuggestion | 21 |
| terminal.integrated.suggest.upArrowNavigatesHistory | 22 |
| terminal.integrated.suggest.selectionMode | 23 |
| terminal.integrated.suggest.insertTrailingSpace | 24 |
| relative | 56 |
| alwaysOnTopExceptExactMatch | 57 |
| , arguments:  | 70 |
| boolean | 75 |
| suggest.enabled | 86 |
| suggest.providers | 92 |
| object | 93 |
| suggest.quickSuggestions | 98 |
| suggest.quickSuggestions.commands | 102 |
| string | 103 |
| suggest.quickSuggestions.arguments | 107 |
| suggest.quickSuggestions.unknown | 112 |
| suggest.suggestOnTriggerCharacters | 126 |
| suggest.runOnEnter | 132 |
| runOnEnter.never | 135 |
| runOnEnter.exactMatch | 136 |
| runOnEnter.exactMatchIgnoreExtension | 137 |
| runOnEnter.always | 138 |
| terminal.integrated.selectionMode | 143 |
| partial | 145 |
| terminal.integrated.selectionMode.partial | 147 |
| terminal.integrated.selectionMode.always | 148 |
| terminal.integrated.selectionMode.never | 149 |
| terminalWindowsExecutableSuggestionSetting | 155 |
| suggest.showStatusBar | 163 |
| suggest.cdPath | 169 |
| suggest.cdPath.off | 173 |
| suggest.cdPath.relative | 174 |

