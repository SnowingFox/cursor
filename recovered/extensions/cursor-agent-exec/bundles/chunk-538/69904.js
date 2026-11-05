// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/538.js sha256:59937a807dffd12f7cc46b403bdda955eb0b59336adfd7cbeb5ae1e50bf20f3d
// module: 69904 range:10488..12158
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
69904: (e, t, o) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.bdd = void 0;
  const n = o(82713), r = "ref", s = -1, i = true, a = "isSet", c = "PartitionResult", d = "booleanEquals", u = "getAttr", l = { [r]: "Endpoint" }, p = { [r]: c }, h = {}, g = [{ [r]: "Region" }], S = { conditions: [[a, [l]], [a, g], ["aws.partition", g, c], [d, [{ [r]: "UseFIPS" }, i]], [d, [{ [r]: "UseDualStack" }, i]], [d, [{ fn: u, argv: [p, "supportsDualStack"] }, i]], [d, [{ fn: u, argv: [p, "supportsFIPS"] }, i]], ["stringEquals", [{ fn: u, argv: [p, "name"] }, "aws-us-gov"]]], results: [[s], [s, "Invalid Configuration: FIPS and custom endpoint are not supported"], [s, "Invalid Configuration: Dualstack and custom endpoint are not supported"], [l, h], ["https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", h], [s, "FIPS and DualStack are enabled, but this partition does not support one or both"], ["https://portal.sso.{Region}.amazonaws.com", h], ["https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}", h], [s, "FIPS is enabled but this partition does not support FIPS"], ["https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}", h], [s, "DualStack is enabled but this partition does not support DualStack"], ["https://portal.sso.{Region}.{PartitionResult#dnsSuffix}", h], [s, "Invalid Configuration: Missing Region"]] }, f = 1e8, m = new Int32Array([-1, 1, -1, 0, 13, 3, 1, 4, f + 12, 2, 5, f + 12, 3, 8, 6, 4, 7, f + 11, 5, f + 9, f + 10, 4, 11, 9, 6, 10, f + 8, 7, f + 6, f + 7, 5, 12, f + 5, 6, f + 4, f + 5, 3, f + 1, 14, 4, f + 2, f + 3]);
  t.bdd = n.BinaryDecisionDiagram.from(m, 2, S.conditions, S.results);
}