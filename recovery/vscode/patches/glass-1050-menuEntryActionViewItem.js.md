# Patch evidence: menuEntryActionViewItem.js

- module: app-out-vs-workbench-workbench-glass-main-js:1050
- bundle: app/out/vs/workbench/workbench.glass.main.js range 4644843..4658092
- upstream: src/vs/platform/actions/browser/menuEntryActionViewItem.ts sha256:9d2a0ab79caf6ee6a4be80a7590cf45c6efc96188f4c6897f9f336a6b628885c
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.893; shared rare anchors: 94
- bundle-only anchors: 4; upstream anchors absent from bundle: 22

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| data-command-id | 4645094..4645109 | yes | , ru(), Ks(), Zi(), CM(), Ap(), LI(), Dl(), es(), pa(), TLy(), SHe = "data-command-id", kHe = class extends r_e { constructor(t, e, n, i, r, s, o, a, l |
| focusedView | 4647094..4647105 | no (exists elsewhere upstream) | ngeContext((a) => { a.affectsSome(/* @__PURE__ */ new Set(["focusedView"])) && (o.getContextKeyValue("focusedView") === xD ? (this.startupTim |
| badge-content | 4647809..4647822 | yes | adge = fr(t, Ii(".badge")), this._badgeContent = fr(this._badge, Ii(".badge-content")), AS(this._badge); const e = this._commandAction.item.badge, |
| empty | 4651395..4651400 | no (exists elsewhere upstream) | value, this._badgeContent.textContent ? this._badge.classList.remove("empty") : this._badge.classList.add("empty"), R0(this._badge)); n.len |

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

