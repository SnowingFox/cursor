// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 98565 range:501820..506029
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
98565: (A, e, t) => {
  "use strict";
  const r = t(53053), s = t(57975), o = s.debuglog("undici"), n = s.debuglog("fetch"), i = s.debuglog("websocket");
  let a = false;
  const Q = { beforeConnect: r.channel("undici:client:beforeConnect"), connected: r.channel("undici:client:connected"), connectError: r.channel("undici:client:connectError"), sendHeaders: r.channel("undici:client:sendHeaders"), create: r.channel("undici:request:create"), bodySent: r.channel("undici:request:bodySent"), headers: r.channel("undici:request:headers"), trailers: r.channel("undici:request:trailers"), error: r.channel("undici:request:error"), open: r.channel("undici:websocket:open"), close: r.channel("undici:websocket:close"), socketError: r.channel("undici:websocket:socket_error"), ping: r.channel("undici:websocket:ping"), pong: r.channel("undici:websocket:pong") };
  if (o.enabled || n.enabled) {
    const A2 = n.enabled ? n : o;
    r.channel("undici:client:beforeConnect").subscribe((e2) => {
      const { connectParams: { version: t2, protocol: r2, port: s2, host: o2 } } = e2;
      A2("connecting to %s using %s%s", `${o2}${s2 ? `:${s2}` : ""}`, r2, t2);
    }), r.channel("undici:client:connected").subscribe((e2) => {
      const { connectParams: { version: t2, protocol: r2, port: s2, host: o2 } } = e2;
      A2("connected to %s using %s%s", `${o2}${s2 ? `:${s2}` : ""}`, r2, t2);
    }), r.channel("undici:client:connectError").subscribe((e2) => {
      const { connectParams: { version: t2, protocol: r2, port: s2, host: o2 }, error: n2 } = e2;
      A2("connection to %s using %s%s errored - %s", `${o2}${s2 ? `:${s2}` : ""}`, r2, t2, n2.message);
    }), r.channel("undici:client:sendHeaders").subscribe((e2) => {
      const { request: { method: t2, path: r2, origin: s2 } } = e2;
      A2("sending request to %s %s/%s", t2, s2, r2);
    }), r.channel("undici:request:headers").subscribe((e2) => {
      const { request: { method: t2, path: r2, origin: s2 }, response: { statusCode: o2 } } = e2;
      A2("received response to %s %s/%s - HTTP %d", t2, s2, r2, o2);
    }), r.channel("undici:request:trailers").subscribe((e2) => {
      const { request: { method: t2, path: r2, origin: s2 } } = e2;
      A2("trailers received from %s %s/%s", t2, s2, r2);
    }), r.channel("undici:request:error").subscribe((e2) => {
      const { request: { method: t2, path: r2, origin: s2 }, error: o2 } = e2;
      A2("request to %s %s/%s errored - %s", t2, s2, r2, o2.message);
    }), a = true;
  }
  if (i.enabled) {
    if (!a) {
      const A2 = o.enabled ? o : i;
      r.channel("undici:client:beforeConnect").subscribe((e2) => {
        const { connectParams: { version: t2, protocol: r2, port: s2, host: o2 } } = e2;
        A2("connecting to %s%s using %s%s", o2, s2 ? `:${s2}` : "", r2, t2);
      }), r.channel("undici:client:connected").subscribe((e2) => {
        const { connectParams: { version: t2, protocol: r2, port: s2, host: o2 } } = e2;
        A2("connected to %s%s using %s%s", o2, s2 ? `:${s2}` : "", r2, t2);
      }), r.channel("undici:client:connectError").subscribe((e2) => {
        const { connectParams: { version: t2, protocol: r2, port: s2, host: o2 }, error: n2 } = e2;
        A2("connection to %s%s using %s%s errored - %s", o2, s2 ? `:${s2}` : "", r2, t2, n2.message);
      }), r.channel("undici:client:sendHeaders").subscribe((e2) => {
        const { request: { method: t2, path: r2, origin: s2 } } = e2;
        A2("sending request to %s %s/%s", t2, s2, r2);
      });
    }
    r.channel("undici:websocket:open").subscribe((A2) => {
      const { address: { address: e2, port: t2 } } = A2;
      i("connection opened %s%s", e2, t2 ? `:${t2}` : "");
    }), r.channel("undici:websocket:close").subscribe((A2) => {
      const { websocket: e2, code: t2, reason: r2 } = A2;
      i("closed connection to %s - %s %s", e2.url, t2, r2);
    }), r.channel("undici:websocket:socket_error").subscribe((A2) => {
      i("connection errored - %s", A2.message);
    }), r.channel("undici:websocket:ping").subscribe((A2) => {
      i("ping received");
    }), r.channel("undici:websocket:pong").subscribe((A2) => {
      i("pong received");
    });
  }
  A.exports = { channels: Q };
}