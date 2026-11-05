# Patch evidence: terminalTabsList.js

- module: app-out-vs-workbench-workbench-glass-main-js:4830
- bundle: app/out/vs/workbench/workbench.glass.main.js range 27646883..27695636
- upstream: src/vs/workbench/contrib/terminal/browser/terminalTabsList.ts sha256:6af20441050b93660852538d490fc431b0647295d51ec6131751e15308fa6732
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.976; shared rare anchors: 181
- bundle-only anchors: 6; upstream anchors absent from bundle: 31

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| terminal.integrated.tabs.showDetailed | 27649062..27649099 | no (exists elsewhere upstream) | this.refresh(); }), this._storageService.onDidChangeValue(-1, "terminal.integrated.tabs.showDetailed", this.disposables)(() => this.refresh())]; this.disposables.ad |
| terminal.integrated.tabs.focusMode | 27651391..27651425 | no (exists elsewhere upstream) | _getFocusMode() { return this._configurationService.getValue("terminal.integrated.tabs.focusMode"); } refresh(t = true) { t && this._terminalService.isE |
| terminal-contribution-needs-attention | 27654325..27654362 | yes | rminalGroupService.activeInstance === t), n.element.classList.toggle("terminal-contribution-needs-attention", t.hasContributedAttention); let o = ""; if (s.terminalI |
| terminal-contribution-icon | 27655410..27655436 | yes | l), (t.hasContributedActions \|\| t.hasContributedAttention) && d.push("terminal-contribution-icon"), n.label.setResource({ resource: t.resource, name: u, description: |
| workbench.action.terminal.splitActiveTab | 27657560..27657600 | no (exists elsewhere upstream) | llActionBar(t, e) { const n = [e.elementDisposables.add(new za("workbench.action.terminal.splitActiveTab", $f.split.short, Gn.asClassName(yt.splitHorizontal), true, async () |
| workbench.action.terminal.killActiveTab | 27658203..27658242 | no (exists elsewhere upstream) | (i.id, t)); }))); n.push(e.elementDisposables.add(new za("workbench.action.terminal.killActiveTab", $f.kill.short, Gn.asClassName(yt.trashcan), true, async () => { |

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

