// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/538.js sha256:59937a807dffd12f7cc46b403bdda955eb0b59336adfd7cbeb5ae1e50bf20f3d
// module: 43506 range:6899..9203
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
43506: (e, t, o) => {
  Object.defineProperty(t, "__esModule", { value: true }), t.GetRoleCredentials$ = t.RoleCredentials$ = t.GetRoleCredentialsResponse$ = t.GetRoleCredentialsRequest$ = t.errorTypeRegistries = t.UnauthorizedException$ = t.TooManyRequestsException$ = t.ResourceNotFoundException$ = t.InvalidRequestException$ = t.SSOServiceException$ = void 0;
  const n = "client", r = "error", s = "http", i = "httpError", a = "httpHeader", c = "httpQuery", d = "message", u = "smithy.ts.sdk.synthetic.com.amazonaws.sso", l = "com.amazonaws.sso", p = o(93353), h = o(89238), g = o(88670), S = p.TypeRegistry.for(u);
  t.SSOServiceException$ = [-3, u, "SSOServiceException", 0, [], []], S.registerError(t.SSOServiceException$, g.SSOServiceException);
  const f = p.TypeRegistry.for(l);
  t.InvalidRequestException$ = [-3, l, "InvalidRequestException", { [r]: n, [i]: 400 }, [d], [0]], f.registerError(t.InvalidRequestException$, h.InvalidRequestException), t.ResourceNotFoundException$ = [-3, l, "ResourceNotFoundException", { [r]: n, [i]: 404 }, [d], [0]], f.registerError(t.ResourceNotFoundException$, h.ResourceNotFoundException), t.TooManyRequestsException$ = [-3, l, "TooManyRequestsException", { [r]: n, [i]: 429 }, [d], [0]], f.registerError(t.TooManyRequestsException$, h.TooManyRequestsException), t.UnauthorizedException$ = [-3, l, "UnauthorizedException", { [r]: n, [i]: 401 }, [d], [0]], f.registerError(t.UnauthorizedException$, h.UnauthorizedException), t.errorTypeRegistries = [S, f];
  var m = [0, l, "AccessTokenType", 8, 0], E = [0, l, "SecretAccessKeyType", 8, 0], v = [0, l, "SessionTokenType", 8, 0];
  t.GetRoleCredentialsRequest$ = [3, l, "GetRoleCredentialsRequest", 0, ["roleName", "accountId", "accessToken"], [[0, { [c]: "role_name" }], [0, { [c]: "account_id" }], [() => m, { [a]: "x-amz-sso_bearer_token" }]], 3], t.GetRoleCredentialsResponse$ = [3, l, "GetRoleCredentialsResponse", 0, ["roleCredentials"], [[() => t.RoleCredentials$, 0]]], t.RoleCredentials$ = [3, l, "RoleCredentials", 0, ["accessKeyId", "secretAccessKey", "sessionToken", "expiration"], [0, [() => E, 0], [() => v, 0], 1]], t.GetRoleCredentials$ = [9, l, "GetRoleCredentials", { [s]: ["GET", "/federation/credentials", 200] }, () => t.GetRoleCredentialsRequest$, () => t.GetRoleCredentialsResponse$];
}