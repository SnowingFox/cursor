# Patch evidence: lifecycle.js

- module: app-out-vs-workbench-workbench-glass-main-js:0220
- bundle: app/out/vs/workbench/workbench.glass.main.js range 310546..321871
- upstream: src/vs/base/common/lifecycle.ts sha256:ea6a626850a7c5897045c6d82d0c1b99933248cd56ec8a66f468a8c3ac12d2fe
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.833; shared rare anchors: 41
- bundle-only anchors: 5; upstream anchors absent from bundle: 9

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| disposable_use_after_dispose | 316723..316751 | yes | jQc.DISABLE_DISPOSED_WARNING \|\| console.warn(n.stack), ldn(n, "disposable_use_after_dispose"); } return this.deleteAndLeak(e), e; } }, X0o.DISA |
| TransferableDisposable: the held value has been disposed | 317078..317134 | yes | ._value === void 0) { const t = new Error(this._isDisposed ? "TransferableDisposable: the held value has been disposed" : "TransferableDisposable: the held value was already transferred ou |
| TransferableDisposable: the held value was already transferred out | 317139..317205 | yes | posed ? "TransferableDisposable: the held value has been disposed" : "TransferableDisposable: the held value was already transferred out"); throw Nt.DISABLE_DISPOSED_WARNING \|\| console.warn(t.stack) |
| disposable_use_after_transfer | 317337..317366 | yes | t.stack), ldn(t, this._isDisposed ? "disposable_use_after_dispose" : "disposable_use_after_transfer"), t; } return this._value; } get rawValue() { |
| Trying to set a value on a MutableDisposable that has already been disposed of. The value was disposed. | 318376..318479 | yes | (this._isDisposed) { if (t) { const e = new Error("Trying to set a value on a MutableDisposable that has already been disposed of. The value was disposed."); Nt.DISABLE_DISPOSED_WARNING \|\| console.warn(e.stack), V0 |

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

