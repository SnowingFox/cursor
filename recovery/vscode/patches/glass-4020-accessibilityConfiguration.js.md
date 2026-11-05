# Patch evidence: accessibilityConfiguration.js

- module: app-out-vs-workbench-workbench-glass-main-js:4020
- bundle: app/out/vs/workbench/workbench.glass.main.js range 23404585..23421201
- upstream: src/vs/workbench/contrib/accessibility/browser/accessibilityConfiguration.ts sha256:f72110ae35caf19d6f6eec9438d8d1fd0a32e5e87ee06a963294554d7557b08f
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.909; shared rare anchors: 125
- bundle-only anchors: 3; upstream anchors absent from bundle: 374

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| accessibility.voice.speechTimeout | 23416721..23416754 | no (exists elsewhere upstream) | i.as(gp.Configuration).registerConfiguration({ ...wel, properties: { "accessibility.voice.speechTimeout": { markdownDescription: D(4665, null), type: "number", default: HKm, |
| accessibility.voice.ignoreCodeBlocks | 23416865..23416901 | no (exists elsewhere upstream) | type: "number", default: HKm, minimum: 0, tags: ["accessibility"] }, "accessibility.voice.ignoreCodeBlocks": { markdownDescription: D(4666, null), type: "boolean", default: fal |
| accessibility.voice.speechLanguage | 23417003..23417037 | no (exists elsewhere upstream) | , null), type: "boolean", default: false, tags: ["accessibility"] }, "accessibility.voice.speechLanguage": { markdownDescription: D(4667, null), type: "string", enum: e, defa |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| accessibility.dimUnfocused.enabled | 35 |
| accessibility.dimUnfocused.opacity | 36 |
| accessibility.hideAccessibleView | 37 |
| accessibility.accessibleView.closeOnKeyPress | 38 |
| accessibility.verboseChatProgressUpdates | 39 |
| accessibility.chat.showCheckmarks | 40 |
| accessibility.verbosity.terminal | 50 |
| accessibility.verbosity.diffEditor | 51 |
| accessibility.verbosity.mergeEditor | 52 |
| accessibility.verbosity.panelChat | 53 |
| accessibility.verbosity.inlineChat | 54 |
| accessibility.verbosity.terminalChat | 55 |
| accessibility.verbosity.terminalChatOutput | 56 |
| accessibility.verbosity.inlineCompletions | 57 |
| accessibility.verbosity.keybindingsEditor | 58 |
| accessibility.verbosity.notebook | 59 |
| accessibility.verbosity.editor | 60 |
| accessibility.verbosity.hover | 61 |
| accessibility.verbosity.notification | 62 |
| accessibility.verbosity.emptyEditorHint | 63 |
| accessibility.verbosity.replEditor | 64 |
| accessibility.verbosity.comments | 65 |
| accessibility.verbosity.diffEditorActive | 66 |
| accessibility.verbosity.debug | 67 |
| accessibility.verbosity.walkthrough | 68 |
| accessibility.verbosity.sourceControl | 69 |
| accessibility.verbosity.find | 70 |
| accessibility.verbosity.sessionsChat | 71 |
| accessibility.verbosity.sessionsChanges | 72 |
| accessibility.verbosity.chatQuestionCarousel | 73 |
| accessibility.verbosity.survey | 74 |
| accessibility.verbosity.automations | 75 |
| boolean | 79 |
| accessibility | 81 |
| accessibilityConfigurationTitle | 86 |
| object | 87 |
| default | 93 |
| enumDescriptions | 94 |
| sound.enabled.auto | 95 |
| sound.enabled.on | 96 |

