# Patch evidence: screenReaderSupport.js

- module: app-out-vs-workbench-workbench-glass-main-js:0959
- bundle: app/out/vs/workbench/workbench.glass.main.js range 4069384..4075537
- upstream: src/vs/editor/browser/controller/editContext/native/screenReaderSupport.ts sha256:1ad5f9aac73d9fa4c1b5056ed81148d0e0d54a629bd32e242aa111135c0cb8c9
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.75; shared rare anchors: 56
- bundle-only anchors: 2; upstream anchors absent from bundle: 24

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| setValue | 4074103..4074111 | no (exists elsewhere upstream) | screenReaderContentState.value && (this.setIgnoreSelectionChangeTime("setValue"), this._domNode.domNode.textContent = this._screenReaderContentState |
| setRange | 4075430..4075438 | no (exists elsewhere upstream) | s.setStart(r, t), s.setEnd(r, e), this.setIgnoreSelectionChangeTime("setRange"), i.removeAllRanges(), i.addRange(s); } }, ECr = Re([F(2, Al), |

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

