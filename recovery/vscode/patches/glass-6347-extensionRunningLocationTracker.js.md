# Patch evidence: extensionRunningLocationTracker.js

- module: app-out-vs-workbench-workbench-glass-main-js:6347
- bundle: app/out/vs/workbench/workbench.glass.main.js range 33900507..33913438
- upstream: src/vs/workbench/services/extensions/common/extensionRunningLocationTracker.ts sha256:278e5b0e3c064f9b8d4994d38db344ddfd41b33573bff2f0fc9f4459e7c86c18
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.615; shared rare anchors: 34
- bundle-only anchors: 15; upstream anchors absent from bundle: 6

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| anysphere.cursor-retrieval | 33900689..33900715 | yes | (), Zi(), fo(), Xz(), _Te(), vTs(), E$l = [{ role: 1, extensionIds: ["anysphere.cursor-retrieval"] }, { role: 4, extensionIds: ["anysphere.cursor-always-local", "anys |
| anysphere.cursor-always-local | 33900748..33900777 | yes | sionIds: ["anysphere.cursor-retrieval"] }, { role: 4, extensionIds: ["anysphere.cursor-always-local", "anysphere.cursor-resolver", "anysphere.cursor-socket"] }, { role: |
| anysphere.cursor-resolver | 33900781..33900806 | yes | eval"] }, { role: 4, extensionIds: ["anysphere.cursor-always-local", "anysphere.cursor-resolver", "anysphere.cursor-socket"] }, { role: 2, extensionIds: ["anysphere. |
| anysphere.cursor-socket | 33900810..33900833 | yes | nIds: ["anysphere.cursor-always-local", "anysphere.cursor-resolver", "anysphere.cursor-socket"] }, { role: 2, extensionIds: ["anysphere.cursor-agent-exec", "anysph |
| anysphere.cursor-agent-exec | 33900866..33900893 | yes | r-resolver", "anysphere.cursor-socket"] }, { role: 2, extensionIds: ["anysphere.cursor-agent-exec", "anysphere.cursor-checkout", "anysphere.cursor-agent-worker"] }, { |
| anysphere.cursor-checkout | 33900897..33900922 | yes | socket"] }, { role: 2, extensionIds: ["anysphere.cursor-agent-exec", "anysphere.cursor-checkout", "anysphere.cursor-agent-worker"] }, { role: 5, extensionIds: ["anys |
| anysphere.cursor-agent-worker | 33900926..33900955 | yes | ionIds: ["anysphere.cursor-agent-exec", "anysphere.cursor-checkout", "anysphere.cursor-agent-worker"] }, { role: 5, extensionIds: ["anysphere.cursor-local-agent-runtime" |
| anysphere.cursor-local-agent-runtime | 33900988..33901024 | yes | kout", "anysphere.cursor-agent-worker"] }, { role: 5, extensionIds: ["anysphere.cursor-local-agent-runtime"] }], PZf = ["anysphere.cursor-agent-exec", "anysphere.cursor-agent-h |
| anysphere.cursor-agent-host | 33901070..33901097 | yes | rsor-local-agent-runtime"] }], PZf = ["anysphere.cursor-agent-exec", "anysphere.cursor-agent-host", "anysphere.cursor-checkout", "anysphere.cursor-agent-worker"], I$l |
| anysphere.cursor-resolver-helper | 33901534..33901566 | yes | ap((t) => t.extensionIds), ...I$l.map((t) => t.extensionIds)], DZf = "anysphere.cursor-resolver-helper", NZf = "anysphere.cursor-agent-worker", LZf = "anysphere.cursor-agen |
| cursor/useDedicatedLocalAgentRuntimeHost | 33901698..33901738 | yes | sor-agent-host", OZf = "anysphere.cursor-local-agent-runtime", FZf = "cursor/useDedicatedLocalAgentRuntimeHost", x$l = "anysphere.cursor-always-local", BZf = "glass_always_local_ag |
| glass_always_local_agent_workspace | 33901787..33901821 | yes | LocalAgentRuntimeHost", x$l = "anysphere.cursor-always-local", BZf = "glass_always_local_agent_workspace", UZf = "mechatroner.rainbow-csv", jZf = "glass_rainbow_csv_extension |
| mechatroner.rainbow-csv | 33901831..33901854 | yes | sor-always-local", BZf = "glass_always_local_agent_workspace", UZf = "mechatroner.rainbow-csv", jZf = "glass_rainbow_csv_extension", bTs = class { constructor( |
| glass_rainbow_csv_extension | 33901864..33901891 | yes | lways_local_agent_workspace", UZf = "mechatroner.rainbow-csv", jZf = "glass_rainbow_csv_extension", bTs = class { constructor(t, e, n, i, r, s, o, a, l, c) { |
| agentWorkspace | 33906148..33906162 | yes | (f, g); }, a = this._environmentService.glassWorkspaceRole === "agentWorkspace" && !!h2(this._environmentService.remoteAuthority), l = this.cursorIs |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| extensionAffinity | 130 |
| ${extension.identifier.value} | 131 |
| extensions.experimental.affinity | 167 |
| number | 172 |
| ${extensionId} | 173 |

