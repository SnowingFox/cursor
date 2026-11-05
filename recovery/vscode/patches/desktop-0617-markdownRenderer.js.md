# Patch evidence: markdownRenderer.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0617
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 2558329..2559803
- upstream: src/vs/base/browser/markdownRenderer.ts sha256:bbecf66d7b68632493da708b2c24ff8d81dff96a19f8d523f900e6d4d929df2a
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.714; shared rare anchors: 27
- bundle-only anchors: 4; upstream anchors absent from bundle: 139

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| embed | 2559362..2559367 | no (exists elsewhere upstream) | ">${i}</a>`); } }), zUc = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", |
| keygen | 2559393..2559399 | no (exists elsewhere upstream) | rea", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"], dns = ["align", |
| param | 2559419..2559424 | no (exists elsewhere upstream) | "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"], dns = ["align", "autoplay", "alt", "chec |
| track | 2559438..2559443 | no (exists elsewhere upstream) | , "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"], dns = ["align", "autoplay", "alt", "checked", "class", "col |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| C:\Users\... | 75 |
| ${escapeDoubleQuotes(href)} | 97 |
| ${escapeDoubleQuotes(text)} | 100 |
| ${escapeDoubleQuotes(title)} | 103 |
| string | 119 |
| &quot; | 146 |
| ${href} | 150 |
| > [!NOTE] | 156 |
| paragraph | 165 |
| light-bulb | 191 |
| important | 192 |
| warning | 193 |
| caution | 194 |
| ${severity} | 206 |
| auxclick | 313 |
| keydown | 315 |
| disabled | 328 |
| img, audio, video, source | 354 |
| ); // Get the raw  | 355 |
| a[data-href] | 460 |
| autoplay | 575 |
| colspan | 577 |
| controls | 578 |
| draggable | 579 |
| height | 580 |
| playsinline | 584 |
| poster | 585 |
| rowspan | 586 |
| target | 588 |
| checked | 595 |
| data-code | 600 |
| data-href | 601 |
| data-severity | 602 |
| Link [](file) | 693 |
| &nbsp; | 723 |
| more text | 841 |
| heading | 936 |
|  &nbsp; | 943 |
| interesting | 1010 |
| ](https://microsoft.com) | 1081 |

