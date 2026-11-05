// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MarketplaceSectionEndCol.js range:22841574..22847174
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-platform 2026-11-05T10:20:42.117Z
// wrapper: MarketplaceSectionEndColModule deps:2 [E, Mt]
// declarations: MarketplaceSectionEndColModule, kWm
// anchors: esm-jsx-runtime-production, esm-compiler-runtime-production
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var MarketplaceSectionEndColModule = L({
  "MarketplaceSectionEndCol.js"() {
    "use strict";

    E(), Mt();
  }
});
import { jsx as CQ1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as TQ1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function kWm(t) {
  const e = TQ1(81),
    {
      servers: n,
      configureServerId: i,
      onConfigureServerIdChange: r,
      mcp: s,
      resolveUninstallPlugin: o,
      confirmUninstall: a,
      onUninstallPlugin: l
    } = t;
  if (i === null) return null;
  let c, u, d, h;
  if (e[0] !== i || e[1] !== l || e[2] !== o || e[3] !== n) {
    h = /* @__PURE__ */Symbol.for("react.early_return_sentinel");
    e: {
      let K;
      if (e[8] !== i ? (K = V => V.id === i, e[8] = i, e[9] = K) : K = e[9], u = n.find(K), u?.configureModel === void 0) {
        h = null;
        break e;
      }
      c = u.configureModel, d = l === void 0 ? void 0 : o?.(u);
    }
    e[0] = i, e[1] = l, e[2] = o, e[3] = n, e[4] = c, e[5] = u, e[6] = d, e[7] = h;
  } else c = e[4], u = e[5], d = e[6], h = e[7];
  if (h !== /* @__PURE__ */Symbol.for("react.early_return_sentinel")) return h;
  const p = d,
    g = p?.displayName;
  let f;
  e[10] !== a || e[11] !== r || e[12] !== l || e[13] !== p ? (f = p === void 0 || l === void 0 ? void 0 : () => {
    (a?.(p) ?? Promise.resolve(true)).then(K => {
      K && (r(null), l(p));
    });
  }, e[10] = a, e[11] = r, e[12] = l, e[13] = p, e[14] = f) : f = e[14];
  let _;
  e[15] !== r ? (_ = K => {
    K || r(null);
  }, e[15] = r, e[16] = _) : _ = e[16];
  let b, y, S, k;
  e[17] !== u.id || e[18] !== s ? (b = () => s.onReloadMcp(u.id), y = () => s.onShowMcpOutput(u.id), S = (K, V) => s.onToggleMcpTool(u.id, V), k = s.onSetMcpToolGroupPolicy === void 0 ? void 0 : (K, V, Y) => s.onSetMcpToolGroupPolicy?.(u.id, V, Y), e[17] = u.id, e[18] = s, e[19] = b, e[20] = y, e[21] = S, e[22] = k) : (b = e[19], y = e[20], S = e[21], k = e[22]);
  let C, T, I, A, P, M;
  e[23] !== s ? (C = (K, V, Y) => s.onToggleMcpServerSource?.(K.identifier, V.id, Y), T = (K, V) => s.onOpenMcpServerSource?.(K.identifier, V.id), I = (K, V) => s.onAuthenticateMcpEnvironment?.(K.identifier, V.id), A = (K, V) => s.onCancelMcpAuthEnvironment?.(K.identifier, V.id), P = (K, V) => s.onLogoutMcpEnvironment?.(K.identifier, V.id), M = (K, V) => s.onRetryMcpEnvironment?.(K.identifier, V.id), e[23] = s, e[24] = C, e[25] = T, e[26] = I, e[27] = A, e[28] = P, e[29] = M) : (C = e[24], T = e[25], I = e[26], A = e[27], P = e[28], M = e[29]);
  let O;
  e[30] !== u.canAddCloudAccount || e[31] !== u.id || e[32] !== s ? (O = u.canAddCloudAccount === true && s.onAddCloudMcpAccount !== void 0 ? (K, V) => s.onAddCloudMcpAccount?.(u.id, V) : void 0, e[30] = u.canAddCloudAccount, e[31] = u.id, e[32] = s, e[33] = O) : O = e[33];
  let N;
  e[34] !== u.canAddCloudAccount || e[35] !== u.id || e[36] !== s ? (N = u.canAddCloudAccount === true && s.onRemoveCloudMcpAccount !== void 0 ? (K, V) => s.onRemoveCloudMcpAccount?.(u.id, V.id) : void 0, e[34] = u.canAddCloudAccount, e[35] = u.id, e[36] = s, e[37] = N) : N = e[37];
  let U;
  e[38] !== u.canAddCloudAccount || e[39] !== u.id || e[40] !== s ? (U = u.canAddCloudAccount === true && s.onRenameCloudMcpAccount !== void 0 ? (K, V, Y) => s.onRenameCloudMcpAccount?.(u.id, V.id, Y) : void 0, e[38] = u.canAddCloudAccount, e[39] = u.id, e[40] = s, e[41] = U) : U = e[41];
  let j;
  e[42] !== u.id || e[43] !== s ? (j = s.onSetMcpPlacement === void 0 ? void 0 : (K, V) => s.onSetMcpPlacement?.(u.id, V), e[42] = u.id, e[43] = s, e[44] = j) : j = e[44];
  let $;
  e[45] !== u.id || e[46] !== s ? ($ = s.onSignInMcpOnServer === void 0 ? void 0 : () => s.onSignInMcpOnServer?.(u.id), e[45] = u.id, e[46] = s, e[47] = $) : $ = e[47];
  let H;
  e[48] !== u.id || e[49] !== s ? (H = s.onResetMcpPlacement === void 0 ? void 0 : () => s.onResetMcpPlacement?.(u.id), e[48] = u.id, e[49] = s, e[50] = H) : H = e[50];
  let G;
  e[51] !== u.id || e[52] !== s ? (G = s.onOpenMcpPlacementDeclaration === void 0 ? void 0 : () => s.onOpenMcpPlacementDeclaration?.(u.id), e[51] = u.id, e[52] = s, e[53] = G) : G = e[53];
  let q;
  return e[54] !== c || e[55] !== u.canReload || e[56] !== u.placement || e[57] !== u.toolGroupPolicy || e[58] !== u.toolGroups || e[59] !== u.tools || e[60] !== C || e[61] !== T || e[62] !== I || e[63] !== A || e[64] !== P || e[65] !== M || e[66] !== O || e[67] !== N || e[68] !== U || e[69] !== j || e[70] !== $ || e[71] !== H || e[72] !== G || e[73] !== g || e[74] !== f || e[75] !== _ || e[76] !== b || e[77] !== y || e[78] !== S || e[79] !== k ? (q = CQ1(PK1, {
    server: c,
    renderActionMenu: false,
    renderConfigureDialog: true,
    configureOpen: true,
    canReload: u.canReload,
    uninstallPluginName: g,
    onUninstallPlugin: f,
    onConfigureOpenChange: _,
    onReload: b,
    onShowOutput: y,
    onToggleTool: S,
    onChangeToolGroupPolicy: k,
    tools: u.tools,
    toolGroups: u.toolGroups,
    toolGroupPolicy: u.toolGroupPolicy,
    onToggleSourceEnabled: C,
    onOpenSourceFile: T,
    onAuthenticateEnvironment: I,
    onCancelAuthEnvironment: A,
    onLogoutEnvironment: P,
    onRetryEnvironment: M,
    onAddCloudAccount: O,
    onRemoveCloudAccount: N,
    onRenameCloudAccount: U,
    placement: u.placement,
    onSetPlacement: j,
    onSignInOnServer: $,
    onResetPlacement: H,
    onOpenPlacementDeclaration: G
  }), e[54] = c, e[55] = u.canReload, e[56] = u.placement, e[57] = u.toolGroupPolicy, e[58] = u.toolGroups, e[59] = u.tools, e[60] = C, e[61] = T, e[62] = I, e[63] = A, e[64] = P, e[65] = M, e[66] = O, e[67] = N, e[68] = U, e[69] = j, e[70] = $, e[71] = H, e[72] = G, e[73] = g, e[74] = f, e[75] = _, e[76] = b, e[77] = y, e[78] = S, e[79] = k, e[80] = q) : q = e[80], q;
}
