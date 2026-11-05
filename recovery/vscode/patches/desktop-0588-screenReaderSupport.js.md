# Patch evidence: screenReaderSupport.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0588
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 2335661..2341813
- upstream: src/vs/editor/browser/controller/editContext/native/screenReaderSupport.ts sha256:1ad5f9aac73d9fa4c1b5056ed81148d0e0d54a629bd32e242aa111135c0cb8c9
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.75; shared rare anchors: 56
- bundle-only anchors: 2; upstream anchors absent from bundle: 24

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| setValue | 2340379..2340387 | no (exists elsewhere upstream) | screenReaderContentState.value && (this.setIgnoreSelectionChangeTime("setValue"), this._domNode.domNode.textContent = this._screenReaderContentState |
| setRange | 2341706..2341714 | no (exists elsewhere upstream) | s.setStart(r, e), s.setEnd(r, t), this.setIgnoreSelectionChangeTime("setRange"), i.removeAllRanges(), i.addRange(s); } }, Q_i = ie([C(2, qr), |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| aria-required | 106 |
| aria-multiline | 107 |
| aria-autocomplete | 108 |
| aria-roledescription | 109 |
| aria-label | 110 |
| inherit | 115 |
| nowrap | 117 |
| aria-haspopup | 178 |
| aria-activedescendant | 180 |

