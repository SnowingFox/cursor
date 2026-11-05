# Patch evidence: quickInput.js

- module: app-out-vs-workbench-workbench-glass-main-js:4954
- bundle: app/out/vs/workbench/workbench.glass.main.js range 28883871..28908333
- upstream: src/vs/platform/quickinput/browser/quickInput.ts sha256:f75b0cf9e828d0b3bc5e84df93d437dbd0118bbf2708eddd39c8fe116648953c
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.944; shared rare anchors: 191
- bundle-only anchors: 2; upstream anchors absent from bundle: 53

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| quickPick | 28893415..28893424 | no (exists elsewhere upstream) | tomButton = false, this._focusEventBufferer = new ddn(), this.type = "quickPick", this.filterValue = (e) => e, this.onDidChangeValue = this.onDidChan |
| quickWidget | 28907579..28907590 | no (exists elsewhere upstream) | nds VRi { constructor() { super(...arguments), this.type = "quickWidget"; } update() { if (!this.visible) return; const t |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| quickInput.back | 93 |
| inputModeEntry | 154 |
| visible | 156 |
| &nbsp; | 393 |
| \u00a0 | 394 |
| aria-hidden | 408 |
| left-button | 422 |
| right-button | 428 |
| inline-button | 434 |
| quickInput.steps | 490 |
| quickInputBox.ariaLabel | 526 |
| default | 558 |
| show-checkboxes | 1113 |
| inputModeEntryDescription | 1252 |
| hidden-input | 1286 |
| string | 1379 |

