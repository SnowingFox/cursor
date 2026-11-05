# Patch evidence: terminalTabsList.js

- module: app-out-vs-workbench-workbench-desktop-main-js:4406
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 25768536..25817634
- upstream: src/vs/workbench/contrib/terminal/browser/terminalTabsList.ts sha256:6af20441050b93660852538d490fc431b0647295d51ec6131751e15308fa6732
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.976; shared rare anchors: 186
- bundle-only anchors: 6; upstream anchors absent from bundle: 39

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| terminal.integrated.tabs.showDetailed | 25771074..25771111 | no (exists elsewhere upstream) | this.refresh(); }), this._storageService.onDidChangeValue(-1, "terminal.integrated.tabs.showDetailed", this.disposables)(() => this.refresh())]; this.disposables.ad |
| terminal.integrated.tabs.focusMode | 25773403..25773437 | no (exists elsewhere upstream) | _getFocusMode() { return this._configurationService.getValue("terminal.integrated.tabs.focusMode"); } refresh(e = true) { e && this._terminalService.isE |
| terminal-contribution-needs-attention | 25776336..25776373 | yes | rminalGroupService.activeInstance === e), n.element.classList.toggle("terminal-contribution-needs-attention", e.hasContributedAttention); let o = ""; if (s.terminalI |
| terminal-contribution-icon | 25777421..25777447 | yes | c), (e.hasContributedActions \|\| e.hasContributedAttention) && h.push("terminal-contribution-icon"), n.label.setResource({ resource: e.resource, name: u, description: |
| workbench.action.terminal.splitActiveTab | 25779565..25779605 | no (exists elsewhere upstream) | llActionBar(e, t) { const n = [t.elementDisposables.add(new er("workbench.action.terminal.splitActiveTab", Lm.split.short, Ft.asClassName(Pe.splitHorizontal), true, async () |
| workbench.action.terminal.killActiveTab | 25780208..25780247 | no (exists elsewhere upstream) | (i.id, e)); }))); n.push(t.elementDisposables.add(new er("workbench.action.terminal.killActiveTab", Lm.kill.short, Ft.asClassName(Pe.trashcan), true, async () => { |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| TerminalTabsList | 98 |
| terminal.tabs | 101 |
| workbench.list.smoothScrolling | 115 |
| doubleClick | 173 |
| singleClick | 187 |
| terminal-tabs-list | 319 |
| ${instance.instanceId} | 352 |
| has-text | 355 |
| is-active | 356 |
| editable-tab | 431 |
| terminalInputAriaLabel | 458 |
| splitTerminalAriaLabel | 599 |
| Terminal {0} {1}, split {2} of {3} | 606 |
| terminalAriaLabel | 609 |
| Terminal {0} {1} | 614 |
| instanceId | 847 |

