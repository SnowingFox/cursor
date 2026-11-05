// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/478.js sha256:03d8c888857521b5af31d5761e74aee40e5eecd292b9b059b8748be5231d88b9
// module: 52278 range:19902..21542
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
52278: (e, t, r) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.bdd = void 0;
  const o = r(82713), n = "ref", i = -1, s = true, c = "isSet", a = "PartitionResult", p = "booleanEquals", d = "getAttr", l = { [n]: "Endpoint" }, u = { [n]: a }, h = {}, E = [{ [n]: "Region" }], S = { conditions: [[c, [l]], [c, E], ["aws.partition", E, a], [p, [{ [n]: "UseFIPS" }, s]], [p, [{ [n]: "UseDualStack" }, s]], [p, [{ fn: d, argv: [u, "supportsDualStack"] }, s]], [p, [{ fn: d, argv: [u, "supportsFIPS"] }, s]], ["stringEquals", [{ fn: d, argv: [u, "name"] }, "aws-us-gov"]]], results: [[i], [i, "Invalid Configuration: FIPS and custom endpoint are not supported"], [i, "Invalid Configuration: Dualstack and custom endpoint are not supported"], [l, h], ["https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", h], [i, "FIPS and DualStack are enabled, but this partition does not support one or both"], ["https://oidc.{Region}.amazonaws.com", h], ["https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}", h], [i, "FIPS is enabled but this partition does not support FIPS"], ["https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}", h], [i, "DualStack is enabled but this partition does not support DualStack"], ["https://oidc.{Region}.{PartitionResult#dnsSuffix}", h], [i, "Invalid Configuration: Missing Region"]] }, g = 1e8, x = new Int32Array([-1, 1, -1, 0, 13, 3, 1, 4, g + 12, 2, 5, g + 12, 3, 8, 6, 4, 7, g + 11, 5, g + 9, g + 10, 4, 11, 9, 6, 10, g + 8, 7, g + 6, g + 7, 5, 12, g + 5, 6, g + 4, g + 5, 3, g + 1, 14, 4, g + 2, g + 3]);
  t.bdd = o.BinaryDecisionDiagram.from(x, 2, S.conditions, S.results);
}