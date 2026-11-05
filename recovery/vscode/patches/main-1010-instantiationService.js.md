# Patch evidence: instantiationService.js

- module: app-out-main-js:1010
- bundle: app/out/main.js range 3322260..3332809
- upstream: src/vs/platform/instantiation/common/instantiationService.ts sha256:c28e1155e8fe44d81603e2779c2a474e01e234665621658f4da1a79f39aa5d71
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.818; shared rare anchors: 55
- bundle-only anchors: 3; upstream anchors absent from bundle: 4

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| InstantiationService disposed here | 3323468..3323502 | yes | sed) { this._isDisposed = true, this._disposedAt = new Error("InstantiationService disposed here"); for (const t of [...this._children]) try { t.dis |
| cycle count more than 1000 | 3327736..3327762 | yes | d(String(l.id)), s.lookupOrInsertNode(l), i++ > 1e4) throw new zU(s, "cycle count more than 1000"); for (const d of ti.getServiceDependencies(l.desc.ctor)) |
| no more roots but still nodes in the graph | 3328391..3328433 | yes | if (l.length === 0) { if (!s.isEmpty()) throw new zU(s, "no more roots but still nodes in the graph"); break; } for (const { data: d } of l) { |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| cyclic dependency between services | 23 |
| InstantiationService has been disposed | 69 |
| service accessor is only valid during the invocation of its target method | 99 |
| illegalState - setting UNKNOWN service instance | 171 |
| empty events | 312 |
| function | 323 |
| string | 338 |
| ).slice(3, 4).join( | 417 |
| CREATE | 464 |

