# Patch evidence: selectBoxCustom.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0627
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 2645677..2669718
- upstream: src/vs/base/browser/ui/selectBox/selectBoxCustom.ts sha256:e12e07466f05bd4ef7998c735287e00628132c26568b422f4999b987856f9b47
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.938; shared rare anchors: 169
- bundle-only anchors: 3; upstream anchors absent from bundle: 32

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| monaco-select-box monaco-select-box-dropdown-padding | 2647167..2647219 | yes | t = document.createElement("select"), this.selectElement.className = "monaco-select-box monaco-select-box-dropdown-padding", typeof this.selectBoxOptions.ariaLabel == "string" && this.selectEl |
| monaco-select-box-dropdown-padding | 2647185..2647219 | yes | eElement("select"), this.selectElement.className = "monaco-select-box monaco-select-box-dropdown-padding", typeof this.selectBoxOptions.ariaLabel == "string" && this.selectEl |
| synthetic-focus | 2656367..2656382 | no (exists elsewhere upstream) | ner.classList.remove("visible"), this.selectElement.classList.remove("synthetic-focus"); }, anchorPosition: this._dropDownPosition }, this.selectBoxO |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| selectOption.entry.template | 31 |
| option-disabled | 69 |
| option-separator | 77 |
| number | 129 |
| select | 135 |
| monaco-select-box | 136 |
| string | 138 |
| aria-label | 139 |
| aria-description | 143 |
| option-text-width-control | 193 |
| draggable | 203 |
| change | 213 |
| touchstart | 245 |
| touchend | 248 |
| select-container | 362 |
| option | 444 |
| visible | 476 |
| aria-expanded | 498 |
| border-top | 621 |
| border-bottom | 622 |
| tabindex | 689 |
| SelectBoxCustom | 735 |
| selectBoxSeparator | 743 |
| selectBox | 761 |
| listbox | 763 |
| keydown | 771 |
| undefined | 791 |
| slider | 825 |
| data-index | 834 |
| select-box-description-markdown | 892 |

