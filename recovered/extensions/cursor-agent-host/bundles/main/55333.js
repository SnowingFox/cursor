// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 55333 range:8683154..8686548
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
55333: (e, t, r) => {
    "use strict";
    const n = r(31637), { uid: s, states: o } = r(15948), { kReadyState: i, kSentClose: a, kByteParser: c, kReceivedClose: l } = r(96140), { fireEvent: u, failWebsocketConnection: d } = r(18149), { CloseEvent: p } = r(31448), { makeRequest: m } = r(30547), { fetching: h } = r(93914), { Headers: f } = r(72848), { getGlobalDispatcher: g } = r(17582), { kHeadersList: y } = r(15532), w = {};
    let v;
    w.open = n.channel("undici:websocket:open"), w.close = n.channel("undici:websocket:close"), w.socketError = n.channel("undici:websocket:socket_error");
    try {
      v = r(76982);
    } catch {
    }
    function _(e2) {
      this.ws[c].write(e2) || this.pause();
    }
    function A() {
      const { ws: e2 } = this, t2 = e2[a] && e2[l];
      let r2 = 1005, n2 = "";
      const s2 = e2[c].closingInfo;
      s2 ? (r2 = s2.code ?? 1005, n2 = s2.reason) : e2[a] || (r2 = 1006), e2[i] = o.CLOSED, u("close", e2, p, { wasClean: t2, code: r2, reason: n2 }), w.close.hasSubscribers && w.close.publish({ websocket: e2, code: r2, reason: n2 });
    }
    function S(e2) {
      const { ws: t2 } = this;
      t2[i] = o.CLOSING, w.socketError.hasSubscribers && w.socketError.publish(e2), this.destroy();
    }
    e.exports = { establishWebSocketConnection: function(e2, t2, r2, n2, o2) {
      const i2 = e2;
      i2.protocol = "ws:" === e2.protocol ? "http:" : "https:";
      const a2 = m({ urlList: [i2], serviceWorkers: "none", referrer: "no-referrer", mode: "websocket", credentials: "include", cache: "no-store", redirect: "error" });
      if (o2.headers) {
        const e3 = new f(o2.headers)[y];
        a2.headersList = e3;
      }
      const c2 = v.randomBytes(16).toString("base64");
      a2.headersList.append("sec-websocket-key", c2), a2.headersList.append("sec-websocket-version", "13");
      for (const e3 of t2) a2.headersList.append("sec-websocket-protocol", e3);
      return h({ request: a2, useParallelQueue: true, dispatcher: o2.dispatcher ?? g(), processResponse(e3) {
        if ("error" === e3.type || 101 !== e3.status) return void d(r2, "Received network error or non-101 status code.");
        if (0 !== t2.length && !e3.headersList.get("Sec-WebSocket-Protocol")) return void d(r2, "Server did not respond with sent protocols.");
        if ("websocket" !== e3.headersList.get("Upgrade")?.toLowerCase()) return void d(r2, 'Server did not set Upgrade header to "websocket".');
        if ("upgrade" !== e3.headersList.get("Connection")?.toLowerCase()) return void d(r2, 'Server did not set Connection header to "upgrade".');
        if (e3.headersList.get("Sec-WebSocket-Accept") !== v.createHash("sha1").update(c2 + s).digest("base64")) return void d(r2, "Incorrect hash received in Sec-WebSocket-Accept header.");
        const o3 = e3.headersList.get("Sec-WebSocket-Extensions");
        if (null !== o3 && "" !== o3) return void d(r2, "Received different permessage-deflate than the one set.");
        const i3 = e3.headersList.get("Sec-WebSocket-Protocol");
        null === i3 || i3 === a2.headersList.get("Sec-WebSocket-Protocol") ? (e3.socket.on("data", _), e3.socket.on("close", A), e3.socket.on("error", S), w.open.hasSubscribers && w.open.publish({ address: e3.socket.address(), protocol: i3, extensions: o3 }), n2(e3)) : d(r2, "Protocol was not set in the opening handshake.");
      } });
    } };
  }