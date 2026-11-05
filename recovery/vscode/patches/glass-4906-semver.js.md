# Patch evidence: semver.js

- module: app-out-vs-workbench-workbench-glass-main-js:4906
- bundle: app/out/vs/workbench/workbench.glass.main.js range 28225652..28254441
- upstream: src/vs/base/common/semver/semver.js sha256:6aa72d93b301d66fb176a1abe25a30d64b388bfacb5fbb8749b3b60394fffe05
- basis: anchor-overlap confidence: B classification: upstream-modified
- dependency overlap: 0; shared rare anchors: 52
- bundle-only anchors: 4; upstream anchors absent from bundle: 25

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| NUMERICIDENTIFIER | 28227000..28227017 | yes | n(Q + "{1," + te + "}"); } return Y; } d("NUMERICIDENTIFIER"), l[c.NUMERICIDENTIFIER] = "0\|[1-9]\\d*", d("NUMERICIDENTIFIERLOOSE" |
| NUMERICIDENTIFIERLOOSE | 28227064..28227086 | yes | d("NUMERICIDENTIFIER"), l[c.NUMERICIDENTIFIER] = "0\|[1-9]\\d*", d("NUMERICIDENTIFIERLOOSE"), l[c.NUMERICIDENTIFIERLOOSE] = "\\d+", d("NONNUMERICIDENTIFIER"), l |
| version is longer than 256 characters | 28231854..28231891 | yes | lid Version: " + Y); if (Y.length > 256) throw new TypeError("version is longer than 256 characters"); if (!(this instanceof b)) return new b(Y, J); r("S |
| Unexpected operation:  | 28251903..28251925 | yes | break; default: throw new Error("Unexpected operation: " + ee.operator); } }); return Q && Y.test(Q |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| object | 14 |

