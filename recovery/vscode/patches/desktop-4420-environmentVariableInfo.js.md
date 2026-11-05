# Patch evidence: environmentVariableInfo.js

- module: app-out-vs-workbench-workbench-desktop-main-js:4420
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 25846425..25848293
- upstream: src/vs/workbench/contrib/terminal/browser/environmentVariableInfo.ts sha256:e5557f4e2dc0cdbe5c09b85439736692101969ac36adbf721027be1797b20a75
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.857; shared rare anchors: 16
- bundle-only anchors: 4; upstream anchors absent from bundle: 17

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| workbench.action.terminal.relaunch | 25847168..25847202 | no (exists elsewhere upstream) | lService.getInstanceFromId(this._terminalId)?.relaunch(), commandId: "workbench.action.terminal.relaunch" }]; } getStatus(e) { return { id: "relaunch-needed", s |
| relaunch-needed | 25847253..25847268 | no (exists elsewhere upstream) | n.terminal.relaunch" }]; } getStatus(e) { return { id: "relaunch-needed", severity: Us.Warning, icon: Pe.warning, tooltip: this._getInfo(e), |
| workbench.action.terminal.showEnvironmentContributions | 25847918..25847972 | no (exists elsewhere upstream) | abel: S(10200, null), run: () => this._commandService.executeCommand("workbench.action.terminal.showEnvironmentContributions", e), commandId: "workbench.action.terminal.showEnvironmentContributi |
| env-var-info-changes-active | 25848096..25848123 | no (exists elsewhere upstream) | onmentContributions" }]; } getStatus(e) { return { id: "env-var-info-changes-active", severity: Us.Info, tooltip: void 0, detailedTooltip: this._getInfo( |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| extensionEnvironmentContributionInfoStale | 35 |
| relaunchTerminalLabel | 42 |
| extensionEnvironmentContributionInfoActive | 73 |
| showEnvironmentContributions | 80 |
| (workspace) | 109 |
| ScopedEnvironmentContributionInfo | 110 |

