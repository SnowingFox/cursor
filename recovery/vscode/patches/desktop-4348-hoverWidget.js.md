# Patch evidence: hoverWidget.js

- module: app-out-vs-workbench-workbench-desktop-main-js:4348
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 25532114..25539060
- upstream: src/vs/platform/hover/browser/hoverWidget.ts sha256:7202bcb906c52fd867a83a62263a7ed5bfd3442c7849a155b765498ad5d65d79
- basis: import-graph confidence: B classification: upstream-modified
- dependency overlap: 0.364; shared rare anchors: 8
- bundle-only anchors: 10; upstream anchors absent from bundle: 169

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| Hidden | 25532290..25532296 | no (exists elsewhere upstream) | ), la(), BFh(), UFh = 3, ((e) => { let t; ((i) => { i[i.Hidden = 0] = "Hidden", i[i.Showing = 1] = "Showing"; })(t = e.Type \|\| ( |
| Showing | 25532318..25532325 | yes | ) => { let t; ((i) => { i[i.Hidden = 0] = "Hidden", i[i.Showing = 1] = "Showing"; })(t = e.Type \|\| (e.Type = {})), e.Hidden = { t |
| div.cursorHoverWidget | 25532924..25532945 | yes | his._state = f0t.Hidden, this.isWordWrap = false, this._domNode = Ve("div.cursorHoverWidget"), this._buttonContainer = Ye(this._domNode, Ve("div.buttonContainer" |
| div.buttonContainer | 25532995..25533014 | yes | iv.cursorHoverWidget"), this._buttonContainer = Ye(this._domNode, Ve("div.buttonContainer")); const { addToChat: o, secondary: a } = this.hoverActions; |
| span.cursorHoverWidgetDivider | 25533266..25533295 | yes | gLabel), a && (this._secondaryDivider = Ye(this._buttonContainer, Ve("span.cursorHoverWidgetDivider")), this._secondaryButton = this._createButton(this._buttonContainer, |
| Quick Edit | 25533557..25533567 | yes | is._quickEditButton = this._createButton(this._buttonContainer, oBe, "Quick Edit")), this._register(zT.ignoreTarget(this._domNode)), this._editor.addC |
| mouseenter | 25534887..25534897 | no (exists elsewhere upstream) | & a && c(this._secondaryButton, a), this._register(Xt(this._domNode, "mouseenter", (l) => { (l.buttons & 1) === 1 && this.hide(); })), t |
| button.hoverButton | 25535102..25535120 | yes | ); } _createButton(e, t, n, i, r) { const s = Ye(e, Ve("button.hoverButton")), o = Ye(s, Ve("span.text")); o.textContent = n; const |
| span.text | 25535139..25535148 | no (exists elsewhere upstream) | , r) { const s = Ye(e, Ve("button.hoverButton")), o = Ye(s, Ve("span.text")); o.textContent = n; const a = Ye(s, Ve("span.commandHe |
| span.commandHelpText | 25535204..25535224 | yes | Ve("span.text")); o.textContent = n; const a = Ye(s, Ve("span.commandHelpText")); i = i ?? this.keybindingService.lookupKeybinding(t); |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| locked | 85 |
| inside | 99 |
| targetElements | 118 |
| div.workbench-hover-pointer | 136 |
| workbench-hover | 138 |
| with-pointer | 143 |
| div.hover-row.markdown-hover | 181 |
| div.hover-contents | 182 |
| string | 183 |
| pre-wrap | 185 |
| html-hover-contents | 189 |
| code-hover-contents | 205 |
| div.hover-row.status-bar | 217 |
| div.actions | 218 |
| div.workbench-hover-container | 236 |
| s a string or when it | 249 |
| ) && !options.content.value.includes( | 252 |
| div.info | 262 |
| hoverhint | 263 |
| number | 326 |
| accessibility.verbosity.hover | 342 |
| right-aligned | 360 |
| bottom | 437 |

