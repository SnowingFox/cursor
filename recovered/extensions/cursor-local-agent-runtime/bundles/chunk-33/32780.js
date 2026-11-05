// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/33.js sha256:0578e78d5607b8b353029c5d245d24e3c43207abe1be65b2efe4aaae28326339
// module: 32780 range:9170..9650
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
32780: (e, t, n) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.defaultEndpointResolver = void 0;
  const i = n(85644), o = n(82713), r = n(41929), s = new o.EndpointCache({ size: 50, params: ["Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint"] });
  t.defaultEndpointResolver = (e2, t2 = {}) => s.get(e2, () => (0, o.decideEndpoint)(r.bdd, { endpointParams: e2, logger: t2.logger })), o.customEndpointFunctions.aws = i.awsEndpointFunctions;
}