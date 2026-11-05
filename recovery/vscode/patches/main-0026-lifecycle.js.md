# Patch evidence: lifecycle.js

- module: app-out-main-js:0026
- bundle: app/out/main.js range 58049..66104
- upstream: src/vs/base/common/lifecycle.ts sha256:ea6a626850a7c5897045c6d82d0c1b99933248cd56ec8a66f468a8c3ac12d2fe
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.833; shared rare anchors: 28
- bundle-only anchors: 2; upstream anchors absent from bundle: 22

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| disposable_use_after_dispose | 63497..63525 | yes | vx.DISABLE_DISPOSED_WARNING \|\| console.warn(n.stack), Im(n, "disposable_use_after_dispose"); } return this.deleteAndLeak(t), t; } }, cR.DISAB |
| Trying to set a value on a MutableDisposable that has already been disposed of. The value was disposed. | 64241..64344 | yes | (this._isDisposed) { if (e) { const t = new Error("Trying to set a value on a MutableDisposable that has already been disposed of. The value was disposed."); ve.DISABLE_DISPOSED_WARNING \|\| console.warn(t.stack), sR |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| CREATED via: | 56 |
| There are cyclic diposable chains! | 162 |
| string | 172 |
| __is_disposable_tracked__ | 234 |
| Potentially leaked disposable | 237 |
| object | 321 |
| Encountered errors while disposing of store | 349 |
| Cannot register a disposable on itself! | 472 |
| Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked! | 478 |
| Cannot dispose a disposable on itself! | 496 |
| Object disposed | 516 |
| Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked! | 807 |
| Trying to add a disposable to a DisposableSet that has already been disposed of. The added object will be leaked! | 901 |

