# Patch evidence: copyPasteController.js

- module: app-out-vs-workbench-workbench-glass-main-js:1084
- bundle: app/out/vs/workbench/workbench.glass.main.js range 4802495..4815653
- upstream: src/vs/editor/contrib/dropOrPasteInto/browser/copyPasteController.ts sha256:b9abaee52f1fd7351dbb918a773ac3bd2e82462096e3c8771835e5a6492ef2ff
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.778; shared rare anchors: 119
- bundle-only anchors: 2; upstream anchors absent from bundle: 34

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| chat.copy.codeblock.manual | 4804653..4804679 | yes | editor.isChatCodeblock === true ? this._tooltipService.registerEvent("chat.copy.codeblock.manual") : this._editor.isSimpleWidget === false && this._tooltipService.reg |
| editor.copy.non_vim_mode | 4804761..4804785 | yes | ditor.isSimpleWidget === false && this._tooltipService.registerEvent("editor.copy.non_vim_mode"), !this._editor.hasTextFocus() \|\| (this._clipboardService.clearInter |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| application/vnd.code.copymetadata | 49 |
| editor.contrib.copyPasteActionController | 81 |
| pasteIntoEditor | 133 |
| postPasteWidgetTitle | 136 |
| CopyPasteController.pasteAs | 146 |
| Before calling editor.action.clipboardPasteAction | 149 |
| editor.action.clipboardPasteAction | 151 |
| CopyPasteController#handleCopy | 170 |
| CopyPasteController#handlePaste for id :  | 233 |
| CopyPasteController#handlePaste with metadata :  | 263 |
| preferences | 316 |
| ) : localize( | 317 |
| pasteAsError | 320 |
| CopyPasteController#doPasteInline | 324 |
| afterPaste | 373 |
| resolveProcess | 381 |
| pasteIntoEditorProgress | 402 |
| CopyPasteController#showPasteAsPick | 418 |
| editor.pasteAs.default | 479 |
| pasteAsDefault | 480 |
| separator | 492 |
| pasteAsPickerPlaceholder | 499 |
| pasteAsProgress | 526 |
| CopyPasteController#setCopyMetadata new id :  | 531 |
| CopyPasteController#fetchCopyMetadata | 536 |
| CopyPasteController#mergeInDataFromCopy with metadata :  | 562 |
| CopyPasteController#applyDefaultPasteHandler for id :  | 639 |
| keyboard | 640 |

