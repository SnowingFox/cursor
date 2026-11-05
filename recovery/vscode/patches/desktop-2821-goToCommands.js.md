# Patch evidence: goToCommands.js

- module: app-out-vs-workbench-workbench-desktop-main-js:2821
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 16909688..16927798
- upstream: src/vs/editor/contrib/gotoSymbol/browser/goToCommands.ts sha256:32a083116edb1d9bc5f9e14659847df72b7f2d5a645b91e85901ac75aeaac8f0
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.938; shared rare anchors: 142
- bundle-only anchors: 2; upstream anchors absent from bundle: 70

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| editor.goToSymbol.duration | 16912576..16912602 | yes | const l = performance.now() - o; i.distribution({ stat: "editor.goToSymbol.duration", value: l, tags: { type: this.desc.id, outcome: "peek" } }), this._o |
| code.jump | 16913434..16913443 | no (exists elsewhere upstream) | ion: dt.collapseToStart(o), selectionRevealType: 3, selectionSource: "code.jump" } }, t, r); if (a) { if (s) { const c = a.ge |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| peek.submenu | 46 |
| navigation | 47 |
| object | 60 |
| gotoAndPeek | 185 |
| symbol-navigate-action-highlight | 230 |
| def.title | 256 |
| noResultWord | 261 |
| generic.noResults | 262 |
| editor.action.revealDefinition | 276 |
| actions.goToDecl.label | 286 |
| miGotoDefinition | 287 |
| 4_symbol_nav | 306 |
| editor.action.goToDeclaration | 310 |
| editor.action.revealDefinitionAside | 316 |
| actions.goToDeclToSide.label | 325 |
| editor.action.openDeclarationToTheSide | 339 |
| editor.action.peekDefinition | 345 |
| actions.previewDecl.label | 354 |
| editor.action.previewDeclaration | 372 |
| decl.title | 383 |
| decl.noResultWord | 388 |
| decl.generic.noResults | 389 |
| editor.action.revealDeclaration | 403 |
| actions.goToDeclaration.label | 413 |
| miGotoDeclaration | 414 |
| editor.action.peekDeclaration | 447 |
| actions.peekDecl.label | 448 |
| typedef.title | 470 |
| goToTypeDefinition.noResultWord | 475 |
| goToTypeDefinition.generic.noResults | 476 |
| editor.action.goToTypeDefinition | 490 |
| actions.goToTypeDefinition.label | 500 |
| miGotoTypeDefinition | 501 |
| editor.action.peekTypeDefinition | 525 |
| actions.peekTypeDefinition.label | 534 |
| impl.title | 556 |
| goToImplementation.noResultWord | 561 |
| goToImplementation.generic.noResults | 562 |
| editor.action.goToImplementation | 576 |
| actions.goToImplementation.label | 586 |

