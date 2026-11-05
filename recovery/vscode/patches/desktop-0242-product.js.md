# Patch evidence: product.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0242
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 502549..503846
- upstream: src/vs/platform/product/common/product.ts sha256:97f42251aea75a08f0891cd220417e7dae427f5e1da3fd8641be3ea77679b015
- basis: import-graph confidence: B classification: upstream-modified
- dependency overlap: 0.5; shared rare anchors: 14
- bundle-only anchors: 3; upstream anchors absent from bundle: 13

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| Cursor Dev | 503511..503521 | yes | ngth === 0 && Object.assign(Kie, { version: "1.94.0-dev", nameShort: "Cursor Dev", nameLong: "Cursor Dev", applicationName: "cursor", dataFolderName: |
| cursor | 503566..503572 | no (exists elsewhere upstream) | ", nameShort: "Cursor Dev", nameLong: "Cursor Dev", applicationName: "cursor", dataFolderName: ".cursor", urlProtocol: "cursor", reportIssueUrl: " |
| https://github.com/getcursor/cursor/issues/new | 503642..503688 | yes | ", dataFolderName: ".cursor", urlProtocol: "cursor", reportIssueUrl: "https://github.com/getcursor/cursor/issues/new", licenseName: "MIT", licenseUrl: "https://github.com/getcursor/curso |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| undefined | 19 |
| Sandbox: unable to resolve product configuration from preload script. | 24 |
| VSCODE_DEV | 33 |
| 1.104.0-dev | 64 |
| Code - OSS Dev | 65 |
| code-oss | 67 |
| https://github.com/microsoft/vscode/issues/new | 70 |
| https://github.com/microsoft/vscode/blob/main/LICENSE.txt | 72 |
| GitHub.copilot | 75 |
| GitHub.copilot-chat | 76 |
| github | 79 |
| GitHub | 80 |
| github-enterprise | 83 |
| GitHub Enterprise | 84 |

