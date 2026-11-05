# Patch evidence: hoverWidget.js

- module: app-out-vs-workbench-workbench-glass-main-js:4673
- bundle: app/out/vs/workbench/workbench.glass.main.js range 27163000..27169946
- upstream: src/vs/platform/hover/browser/hoverWidget.ts sha256:7202bcb906c52fd867a83a62263a7ed5bfd3442c7849a155b765498ad5d65d79
- basis: import-graph confidence: B classification: upstream-modified
- dependency overlap: 0.364; shared rare anchors: 8
- bundle-only anchors: 10; upstream anchors absent from bundle: 169

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| Hidden | 27163176..27163182 | no (exists elsewhere upstream) | ), Ss(), cus(), UCg = 3, ((t) => { let e; ((i) => { i[i.Hidden = 0] = "Hidden", i[i.Showing = 1] = "Showing"; })(e = t.Type \|\| ( |
| Showing | 27163204..27163211 | yes | ) => { let e; ((i) => { i[i.Hidden = 0] = "Hidden", i[i.Showing = 1] = "Showing"; })(e = t.Type \|\| (t.Type = {})), t.Hidden = { t |
| div.cursorHoverWidget | 27163810..27163831 | yes | his._state = HVt.Hidden, this.isWordWrap = false, this._domNode = Ii("div.cursorHoverWidget"), this._buttonContainer = fr(this._domNode, Ii("div.buttonContainer" |
| div.buttonContainer | 27163881..27163900 | yes | iv.cursorHoverWidget"), this._buttonContainer = fr(this._domNode, Ii("div.buttonContainer")); const { addToChat: o, secondary: a } = this.hoverActions; |
| span.cursorHoverWidgetDivider | 27164152..27164181 | yes | gLabel), a && (this._secondaryDivider = fr(this._buttonContainer, Ii("span.cursorHoverWidgetDivider")), this._secondaryButton = this._createButton(this._buttonContainer, |
| Quick Edit | 27164443..27164453 | yes | is._quickEditButton = this._createButton(this._buttonContainer, Let, "Quick Edit")), this._register(kM.ignoreTarget(this._domNode)), this._editor.addC |
| mouseenter | 27165773..27165783 | no (exists elsewhere upstream) | & a && l(this._secondaryButton, a), this._register(li(this._domNode, "mouseenter", (c) => { (c.buttons & 1) === 1 && this.hide(); })), t |
| button.hoverButton | 27165988..27166006 | yes | ); } _createButton(t, e, n, i, r) { const s = fr(t, Ii("button.hoverButton")), o = fr(s, Ii("span.text")); o.textContent = n; const |
| span.text | 27166025..27166034 | no (exists elsewhere upstream) | , r) { const s = fr(t, Ii("button.hoverButton")), o = fr(s, Ii("span.text")); o.textContent = n; const a = fr(s, Ii("span.commandHe |
| span.commandHelpText | 27166090..27166110 | yes | Ii("span.text")); o.textContent = n; const a = fr(s, Ii("span.commandHelpText")); i = i ?? this.keybindingService.lookupKeybinding(e); |

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

