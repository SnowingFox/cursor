// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/449.js sha256:ab30492df8ef76be495caae7276830e86edd729413b0236cb9612710027d7667
// module: "../mcp-agent-exec/dist/mcp-sandbox-policy.js" range:166..1402
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
import * as __dep0 from "@anysphere/mcp-core/transport/mcp-url-utils";
import * as __dep1 from "@anysphere/shell-exec/api/index";
var r = __dep0;
const s = ["0.0.0.0/0", "::/0"];
function i(e) {
  const n = (e ?? []).filter(e => e.trim().length > 0),
    t = n.flatMap(e => {
      const n = (0, r.bi)(e);
      return void 0 === n ? [] : [n];
    });
  return {
    hasConfiguredEntries: n.length > 0,
    hasInvalidEntries: t.length !== n.length,
    entries: t
  };
}
function o(e) {
  const n = i(e.mcpNetworkAllowlist),
    t = i(e.mcpNetworkDenylist),
    r = e.mcpNetworkMode;
  if ("deny_all" === r || t.entries.includes("*") || t.hasInvalidEntries) return {
    version: 1,
    default: "deny"
  };
  if ("allow_all" === r) return {
    version: 1,
    default: "deny",
    allow: [...s],
    ...(t.entries.length > 0 ? {
      deny: t.entries
    } : {})
  };
  if ("allowlist" === r || n.hasConfiguredEntries) {
    const e = function (e) {
      return e.entries.includes("*") ? [...s] : e.entries;
    }(n);
    return e.length > 0 ? {
      version: 1,
      default: "deny",
      allow: e,
      ...(t.entries.length > 0 ? {
        deny: t.entries
      } : {})
    } : {
      version: 1,
      default: "deny"
    };
  }
  return {
    version: 1,
    default: "deny",
    allow: [...s],
    ...(t.entries.length > 0 ? {
      deny: t.entries
    } : {})
  };
}
async function l(e, n) {
  const {
      resolveSandboxPolicyForWorkspace: r
    } = await Promise.resolve().then(async () => import("@anysphere/shell-exec/api/index")),
    s = {
      type: "workspace_readwrite",
      sandboxWorkspaceRoot: n,
      networkPolicy: o(e),
      networkPolicyStrict: !0
    },
    {
      policy: i
    } = await r(n, {
      perUser: s
    });
  return i;
}
export { l as buildMcpSandboxPolicy };
