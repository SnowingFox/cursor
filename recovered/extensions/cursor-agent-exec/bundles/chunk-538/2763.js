// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/538.js sha256:59937a807dffd12f7cc46b403bdda955eb0b59336adfd7cbeb5ae1e50bf20f3d
// module: 2763 range:73..531
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2763: (e, t, o) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.defaultEndpointResolver = void 0;
  const n = o(85644), r = o(82713), s = o(69904), i = new r.EndpointCache({ size: 50, params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"] });
  t.defaultEndpointResolver = (e2, t2 = {}) => i.get(e2, () => (0, r.decideEndpoint)(s.bdd, { endpointParams: e2, logger: t2.logger })), r.customEndpointFunctions.aws = n.awsEndpointFunctions;
}