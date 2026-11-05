# Patch evidence: semver.js

- module: app-out-main-js:0758
- bundle: app/out/main.js range 1925047..1954542
- upstream: src/vs/base/common/semver/semver.js sha256:6aa72d93b301d66fb176a1abe25a30d64b388bfacb5fbb8749b3b60394fffe05
- basis: anchor-overlap confidence: B classification: upstream-modified
- dependency overlap: 0; shared rare anchors: 52
- bundle-only anchors: 4; upstream anchors absent from bundle: 25

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| NUMERICIDENTIFIER | 1926386..1926403 | yes | in(M + "{1," + Y + "}"); } return R; } m("NUMERICIDENTIFIER"), l[d.NUMERICIDENTIFIER] = "0\|[1-9]\\d*", m("NUMERICIDENTIFIERLOOSE" |
| NUMERICIDENTIFIERLOOSE | 1926450..1926472 | yes | m("NUMERICIDENTIFIER"), l[d.NUMERICIDENTIFIER] = "0\|[1-9]\\d*", m("NUMERICIDENTIFIERLOOSE"), l[d.NUMERICIDENTIFIERLOOSE] = "\\d+", m("NONNUMERICIDENTIFIER"), l |
| version is longer than 256 characters | 1931240..1931277 | yes | lid Version: " + R); if (R.length > 256) throw new TypeError("version is longer than 256 characters"); if (!(this instanceof y)) return new y(R, A); s("S |
| Unexpected operation:  | 1951266..1951288 | yes | break; default: throw new Error("Unexpected operation: " + Me.operator); } }); return M && R.test(M |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| object | 14 |

