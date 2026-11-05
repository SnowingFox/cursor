# Patch evidence: menuEntryActionViewItem.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0679
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 2913154..2926390
- upstream: src/vs/platform/actions/browser/menuEntryActionViewItem.ts sha256:9d2a0ab79caf6ee6a4be80a7590cf45c6efc96188f4c6897f9f336a6b628885c
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.893; shared rare anchors: 94
- bundle-only anchors: 4; upstream anchors absent from bundle: 22

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| data-command-id | 2913405..2913420 | yes | , no(), ji(), Vn(), sf(), tc(), x0(), as(), ei(), So(), ASg(), lRe = "data-command-id", T3 = class extends SD { constructor(e, t, n, i, r, s, o, a, c) |
| focusedView | 2915403..2915414 | no (exists elsewhere upstream) | ngeContext((a) => { a.affectsSome(/* @__PURE__ */ new Set(["focusedView"])) && (o.getContextKeyValue("focusedView") === cA ? (this.startupTim |
| badge-content | 2916118..2916131 | yes | adge = Ye(e, Ve(".badge")), this._badgeContent = Ye(this._badge, Ve(".badge-content")), Ep(this._badge); const t = this._commandAction.item.badge, |
| empty | 2919703..2919708 | no (exists elsewhere upstream) | value, this._badgeContent.textContent ? this._badge.classList.remove("empty") : this._badge.classList.add("empty"), tf(this._badge)); n.len |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| navigation | 71 |
| string | 104 |
| menu-entry | 226 |
| mouseleave | 252 |
| mouseenter | 257 |
| titleAndKbAndAlt | 279 |
| text-only | 351 |
| use-comma | 352 |
| content2 | 364 |
| content | 367 |
| \u23CE | 374 |
| codicon | 473 |
| monaco-dropdown-with-default | 549 |
| boolean | 637 |

