# Patch evidence: environmentVariableInfo.js

- module: app-out-vs-workbench-workbench-glass-main-js:4844
- bundle: app/out/vs/workbench/workbench.glass.main.js range 27724433..27726301
- upstream: src/vs/workbench/contrib/terminal/browser/environmentVariableInfo.ts sha256:e5557f4e2dc0cdbe5c09b85439736692101969ac36adbf721027be1797b20a75
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.857; shared rare anchors: 16
- bundle-only anchors: 4; upstream anchors absent from bundle: 17

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| workbench.action.terminal.relaunch | 27725176..27725210 | no (exists elsewhere upstream) | lService.getInstanceFromId(this._terminalId)?.relaunch(), commandId: "workbench.action.terminal.relaunch" }]; } getStatus(t) { return { id: "relaunch-needed", s |
| relaunch-needed | 27725261..27725276 | no (exists elsewhere upstream) | n.terminal.relaunch" }]; } getStatus(t) { return { id: "relaunch-needed", severity: Ua.Warning, icon: yt.warning, tooltip: this._getInfo(t), |
| workbench.action.terminal.showEnvironmentContributions | 27725926..27725980 | no (exists elsewhere upstream) | abel: D(10200, null), run: () => this._commandService.executeCommand("workbench.action.terminal.showEnvironmentContributions", t), commandId: "workbench.action.terminal.showEnvironmentContributi |
| env-var-info-changes-active | 27726104..27726131 | no (exists elsewhere upstream) | onmentContributions" }]; } getStatus(t) { return { id: "env-var-info-changes-active", severity: Ua.Info, tooltip: void 0, detailedTooltip: this._getInfo( |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| extensionEnvironmentContributionInfoStale | 35 |
| relaunchTerminalLabel | 42 |
| extensionEnvironmentContributionInfoActive | 73 |
| showEnvironmentContributions | 80 |
| (workspace) | 109 |
| ScopedEnvironmentContributionInfo | 110 |

