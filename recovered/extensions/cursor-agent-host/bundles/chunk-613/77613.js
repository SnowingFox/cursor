// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 77613 range:434486..438065
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
77613: (A, e, t) => {
  "use strict";
  const r = t(90996), s = t(47510), o = t(3817), n = t(69598), i = t(16618), a = t(31939), Q = t(8440), g = t(37921), E = t(38238), B = t(55201), { InvalidArgumentError: c } = E, I = t(50990), C = t(60039), h = t(8026), l = t(86140), u = t(76599), d = t(33078), f = t(3685), { getGlobalDispatcher: w, setGlobalDispatcher: y } = t(37922), D = t(31646), p = t(72005), k = t(39935);
  function R(A2) {
    return (e2, t2, r2) => {
      if ("function" == typeof t2 && (r2 = t2, t2 = null), !e2 || "string" != typeof e2 && "object" != typeof e2 && !(e2 instanceof URL)) throw new c("invalid url");
      if (null != t2 && "object" != typeof t2) throw new c("invalid opts");
      if (t2 && null != t2.path) {
        if ("string" != typeof t2.path) throw new c("invalid opts.path");
        let A3 = t2.path;
        t2.path.startsWith("/") || (A3 = `/${A3}`), e2 = new URL(B.parseOrigin(e2).origin + A3);
      } else t2 || (t2 = "object" == typeof e2 ? e2 : {}), e2 = B.parseURL(e2);
      const { agent: s2, dispatcher: o2 = w() } = t2;
      if (s2) throw new c("unsupported opts.agent. Did you mean opts.client?");
      return A2.call(o2, { ...t2, origin: e2.origin, path: e2.search ? `${e2.pathname}${e2.search}` : e2.pathname, method: t2.method || (t2.body ? "PUT" : "GET") }, r2);
    };
  }
  Object.assign(s.prototype, I), A.exports.Dispatcher = s, A.exports.Client = r, A.exports.Pool = o, A.exports.BalancedPool = n, A.exports.Agent = i, A.exports.ProxyAgent = a, A.exports.EnvHttpProxyAgent = Q, A.exports.RetryAgent = g, A.exports.RetryHandler = f, A.exports.DecoratorHandler = D, A.exports.RedirectHandler = p, A.exports.createRedirectInterceptor = k, A.exports.interceptors = { redirect: t(35025), retry: t(36535), dump: t(53103), dns: t(12910) }, A.exports.buildConnector = C, A.exports.errors = E, A.exports.util = { parseHeaders: B.parseHeaders, headerNameToString: B.headerNameToString }, A.exports.setGlobalDispatcher = y, A.exports.getGlobalDispatcher = w;
  const F = t(75319).fetch;
  A.exports.fetch = async function(A2, e2 = void 0) {
    try {
      return await F(A2, e2);
    } catch (A3) {
      throw A3 && "object" == typeof A3 && Error.captureStackTrace(A3), A3;
    }
  }, A.exports.Headers = t(48969).Headers, A.exports.Response = t(54768).Response, A.exports.Request = t(78078).Request, A.exports.FormData = t(41445).FormData, A.exports.File = globalThis.File ?? t(4573).File, A.exports.FileReader = t(7884).FileReader;
  const { setGlobalOrigin: m, getGlobalOrigin: b } = t(12808);
  A.exports.setGlobalOrigin = m, A.exports.getGlobalOrigin = b;
  const { CacheStorage: N } = t(41974), { kConstruct: S } = t(71716);
  A.exports.caches = new N(S);
  const { deleteCookie: M, getCookies: U, getSetCookies: L, setCookie: T } = t(34412);
  A.exports.deleteCookie = M, A.exports.getCookies = U, A.exports.getSetCookies = L, A.exports.setCookie = T;
  const { parseMIMEType: Y, serializeAMimeType: G } = t(52603);
  A.exports.parseMIMEType = Y, A.exports.serializeAMimeType = G;
  const { CloseEvent: J, ErrorEvent: v, MessageEvent: H } = t(63315);
  A.exports.WebSocket = t(75519).WebSocket, A.exports.CloseEvent = J, A.exports.ErrorEvent = v, A.exports.MessageEvent = H, A.exports.request = R(I.request), A.exports.stream = R(I.stream), A.exports.pipeline = R(I.pipeline), A.exports.connect = R(I.connect), A.exports.upgrade = R(I.upgrade), A.exports.MockClient = h, A.exports.MockPool = u, A.exports.MockAgent = l, A.exports.mockErrors = d;
  const { EventSource: V } = t(85399);
  A.exports.EventSource = V;
}