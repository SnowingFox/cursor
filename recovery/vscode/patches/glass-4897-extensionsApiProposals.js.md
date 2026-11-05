# Patch evidence: extensionsApiProposals.js

- module: app-out-vs-workbench-workbench-glass-main-js:4897
- bundle: app/out/vs/workbench/workbench.glass.main.js range 28168119..28190850
- upstream: src/vs/platform/extensions/common/extensionsApiProposals.ts sha256:842a0aee9a16e8bd3f2055847e24f87a0dcbc0a60fdd8581aa48cd0e5f129b55
- basis: anchor-overlap confidence: B classification: upstream-modified
- dependency overlap: 0; shared rare anchors: 270
- bundle-only anchors: 16; upstream anchors absent from bundle: 171

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatEditing.d.ts | 28169246..28169349 | yes | scode.proposed.chatContextProvider.d.ts" }, chatEditing: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatEditing.d.ts" }, chatParticipantAdditions: { proposal: "https://raw.githubusercont |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribChatParticipantDetection.d.ts | 28171950..28172073 | yes | ityHelpContent.d.ts" }, contribChatParticipantDetection: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribChatParticipantDetection.d.ts" }, contribCommentEditorActionsMenu: { proposal: "https://raw.githubu |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.control.d.ts | 28175898..28175997 | yes | ts/vscode.proposed.contribViewsWelcome.d.ts" }, control: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.control.d.ts" }, cursor: { proposal: "https://raw.githubusercontent.com/microsoft/ |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.cursor.d.ts | 28176023..28176121 | yes | /src/vscode-dts/vscode.proposed.control.d.ts" }, cursor: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.cursor.d.ts" }, cursorAgentHost: { proposal: "https://raw.githubusercontent.com/m |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.cursorAgentHost.d.ts | 28176156..28176263 | yes | ode-dts/vscode.proposed.cursor.d.ts" }, cursorAgentHost: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.cursorAgentHost.d.ts" }, cursorNoDeps: { proposal: "https://raw.githubusercontent.com/micr |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.cursorNoDeps.d.ts | 28176295..28176399 | yes | s/vscode.proposed.cursorAgentHost.d.ts" }, cursorNoDeps: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.cursorNoDeps.d.ts" }, cursorPseudoterminal: { proposal: "https://raw.githubusercontent. |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.cursorPseudoterminal.d.ts | 28176439..28176551 | yes | ode.proposed.cursorNoDeps.d.ts" }, cursorPseudoterminal: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.cursorPseudoterminal.d.ts" }, cursorPublic: { proposal: "https://raw.githubusercontent.com/micr |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.cursorPublic.d.ts | 28176583..28176687 | yes | ode.proposed.cursorPseudoterminal.d.ts" }, cursorPublic: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.cursorPublic.d.ts" }, cursorTracing: { proposal: "https://raw.githubusercontent.com/mic |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.cursorTracing.d.ts | 28176720..28176825 | yes | dts/vscode.proposed.cursorPublic.d.ts" }, cursorTracing: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.cursorTracing.d.ts" }, customEditorMove: { proposal: "https://raw.githubusercontent.com/ |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.idToken.d.ts | 28179634..28179733 | yes | rc/vscode-dts/vscode.proposed.fsChunks.d.ts" }, idToken: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.idToken.d.ts" }, inlineCompletionsAdditions: { proposal: "https://raw.githubuserco |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.inlineEdit.d.ts | 28179927..28180029 | yes | proposed.inlineCompletionsAdditions.d.ts" }, inlineEdit: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.inlineEdit.d.ts" }, interactive: { proposal: "https://raw.githubusercontent.com/micro |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.languageModelToolsForAgent.d.ts | 28181133..28181251 | yes | lToolResultAudience.d.ts" }, languageModelToolsForAgent: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.languageModelToolsForAgent.d.ts" }, languageStatusText: { proposal: "https://raw.githubusercontent.co |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.mcpConfigurationProvider.d.ts | 28181743..28181859 | yes | d.markdownAlertSyntax.d.ts" }, mcpConfigurationProvider: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.mcpConfigurationProvider.d.ts" }, multiDocumentHighlightProvider: { proposal: "https://raw.githubus |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookCellExecutionState.d.ts | 28182535..28182653 | yes | tebookCellExecution.d.ts" }, notebookCellExecutionState: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.notebookCellExecutionState.d.ts" }, notebookControllerAffinityHidden: { proposal: "https://raw.github |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.scmRemotes.d.ts | 28185509..28185611 | yes | /vscode.proposed.scmMultiDiffEditor.d.ts" }, scmRemotes: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.scmRemotes.d.ts" }, scmSelectedProvider: { proposal: "https://raw.githubusercontent.c |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.textDocumentTextLength.d.ts | 28188595..28188709 | yes | roposed.testRelatedCode.d.ts" }, textDocumentTextLength: { proposal: "https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.textDocumentTextLength.d.ts" }, textEditorDiffInformation: { proposal: "https://raw.githubusercon |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.activeComment.d.ts | 10 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.agentEditorComments.d.ts | 13 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.agentSessionsWorkspace.d.ts | 16 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.agentsWindowConfiguration.d.ts | 19 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.aiRelatedInformation.d.ts | 22 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.aiSettingsSearch.d.ts | 25 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.aiTextSearchProvider.d.ts | 28 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.authIssuers.d.ts | 31 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.authLearnMore.d.ts | 34 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.authProviderSpecific.d.ts | 37 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.authSession.d.ts | 40 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.authSessionAudience.d.ts | 43 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.authenticationChallenges.d.ts | 46 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.browser.d.ts | 49 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.canonicalUriProvider.d.ts | 52 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatContextProvider.d.ts | 55 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatDebug.d.ts | 58 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatHooks.d.ts | 61 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatInputNotification.d.ts | 64 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatOutputRenderer.d.ts | 67 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatParticipantAdditions.d.ts | 70 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatParticipantPrivate.d.ts | 73 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatPromptFiles.d.ts | 76 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatProvider.d.ts | 79 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatReferenceBinaryData.d.ts | 82 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatReferenceDiagnostic.d.ts | 85 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatSessionCustomizationProvider.d.ts | 88 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatSessionsProvider.d.ts | 91 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatStatusItem.d.ts | 94 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.chatTab.d.ts | 97 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.codeActionAI.d.ts | 100 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.codeActionRanges.d.ts | 103 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.codiconDecoration.d.ts | 106 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.commentReactor.d.ts | 109 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.commentReveal.d.ts | 112 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.commentThreadApplicability.d.ts | 115 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.commentingRangeHint.d.ts | 118 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.commentsDraftState.d.ts | 121 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribAccessibilityHelpContent.d.ts | 124 |
| https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.contribChatEditorInlineGutterMenu.d.ts | 127 |

