# Patch evidence: nativeEditContext.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0592
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 2344327..2357298
- upstream: src/vs/editor/browser/controller/editContext/native/nativeEditContext.ts sha256:b38bf4ec9c00a932105f2c57425e153bce609e6f9170529adb297920e9cda622
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.842; shared rare anchors: 134
- bundle-only anchors: 3; upstream anchors absent from bundle: 47

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| onFocus | 2345715..2345722 | yes | eListener(i), this._screenReaderSupport.setIgnoreSelectionChangeTime("onFocus")) : this._selectionChangeListener.value = void 0, this._context.view |
| onCut | 2346230..2346235 | no (exists elsewhere upstream) | => { this._screenReaderSupport.setIgnoreSelectionChangeTime("onCut"), this._ensureClipboardGetsEditorSelection(c), i.cut(); })), t |
| onPaste | 2347580..2347587 | yes | { if (this._screenReaderSupport.setIgnoreSelectionChangeTime("onPaste"), c.preventDefault(), !c.clipboardData) return; let [l, u] = |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| edit-context-composition-none | 40 |
| edit-context-composition-secondary | 41 |
| edit-context-composition-primary | 42 |
| textarea | 90 |
| readonly | 92 |
| tabindex | 93 |
| aria-hidden | 94 |
| autocorrect | 95 |
| autocapitalize | 96 |
| autocomplete | 97 |
| spellcheck | 98 |
| NativeEditContext#handleFocusChange :  | 107 |
| NativeEditContext#copy | 119 |
| NativeEditContext#cut | 136 |
| NativeEditContext#cut (before viewController.cut) | 146 |
| selectionchange | 149 |
| keydown | 154 |
| beforeinput | 157 |
| insertParagraph | 159 |
| NativeEditContext#paste | 164 |
| NativeEditContext#paste with id :  | 175 |
| undefined | 186 |
| NativeEditContext#paste (before viewController.paste) | 189 |
| textformatupdate | 194 |
| characterboundsupdate | 195 |
| textupdate | 197 |
| compositionstart | 221 |
| compositionend | 229 |
| NativeEditContext#handleWillPaste | 349 |
| NativeEditContext#handleWillCopy | 358 |
| NativeEditContext#isFocused :  | 359 |
| textFormatDecoration | 528 |

