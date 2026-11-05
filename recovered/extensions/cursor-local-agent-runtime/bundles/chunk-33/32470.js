// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/33.js sha256:0578e78d5607b8b353029c5d245d24e3c43207abe1be65b2efe4aaae28326339
// module: 32470 range:8448..9168
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
32470: (e, t) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.commonParams = t.resolveClientEndpointParameters = void 0;
  t.resolveClientEndpointParameters = (e2) => Object.assign(e2, { useDualstackEndpoint: e2.useDualstackEndpoint ?? false, useFipsEndpoint: e2.useFipsEndpoint ?? false, useGlobalEndpoint: e2.useGlobalEndpoint ?? false, defaultSigningName: "sts" }), t.commonParams = { UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" }, UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
}