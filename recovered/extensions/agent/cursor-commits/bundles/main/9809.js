// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 9809 range:710556..713968
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9809: (e2, n2, a2) => {
    "use strict";
    const t2 = a2(1637), { uid: s2, states: o2 } = a2(5440), { kReadyState: r2, kSentClose: i2, kByteParser: A, kReceivedClose: l } = a2(7696), { fireEvent: c, failWebsocketConnection: m } = a2(4321), { CloseEvent: d } = a2(2740), { makeRequest: g } = a2(2239), { fetching: u } = a2(3406), { Headers: E } = a2(2932), { getGlobalDispatcher: p } = a2(7362), { kHeadersList: T } = a2(8832), k = {};
    let I;
    k.open = t2.channel("undici:websocket:open"), k.close = t2.channel("undici:websocket:close"), k.socketError = t2.channel("undici:websocket:socket_error");
    try {
      I = a2(6982);
    } catch {
    }
    function h(e3) {
      this.ws[A].write(e3) || this.pause();
    }
    function _() {
      const { ws: e3 } = this, n3 = e3[i2] && e3[l];
      let a3 = 1005, t3 = "";
      const s3 = e3[A].closingInfo;
      s3 ? (a3 = s3.code ?? 1005, t3 = s3.reason) : e3[i2] || (a3 = 1006), e3[r2] = o2.CLOSED, c("close", e3, d, { wasClean: n3, code: a3, reason: t3 }), k.close.hasSubscribers && k.close.publish({ websocket: e3, code: a3, reason: t3 });
    }
    function C(e3) {
      const { ws: n3 } = this;
      n3[r2] = o2.CLOSING, k.socketError.hasSubscribers && k.socketError.publish(e3), this.destroy();
    }
    e2.exports = { establishWebSocketConnection: function(e3, n3, a3, t3, o3) {
      const r3 = e3;
      r3.protocol = "ws:" === e3.protocol ? "http:" : "https:";
      const i3 = g({ urlList: [r3], serviceWorkers: "none", referrer: "no-referrer", mode: "websocket", credentials: "include", cache: "no-store", redirect: "error" });
      if (o3.headers) {
        const e4 = new E(o3.headers)[T];
        i3.headersList = e4;
      }
      const A2 = I.randomBytes(16).toString("base64");
      i3.headersList.append("sec-websocket-key", A2), i3.headersList.append("sec-websocket-version", "13");
      for (const e4 of n3) i3.headersList.append("sec-websocket-protocol", e4);
      return u({ request: i3, useParallelQueue: true, dispatcher: o3.dispatcher ?? p(), processResponse(e4) {
        if ("error" === e4.type || 101 !== e4.status) return void m(a3, "Received network error or non-101 status code.");
        if (0 !== n3.length && !e4.headersList.get("Sec-WebSocket-Protocol")) return void m(a3, "Server did not respond with sent protocols.");
        if ("websocket" !== e4.headersList.get("Upgrade")?.toLowerCase()) return void m(a3, 'Server did not set Upgrade header to "websocket".');
        if ("upgrade" !== e4.headersList.get("Connection")?.toLowerCase()) return void m(a3, 'Server did not set Connection header to "upgrade".');
        if (e4.headersList.get("Sec-WebSocket-Accept") !== I.createHash("sha1").update(A2 + s2).digest("base64")) return void m(a3, "Incorrect hash received in Sec-WebSocket-Accept header.");
        const o4 = e4.headersList.get("Sec-WebSocket-Extensions");
        if (null !== o4 && "" !== o4) return void m(a3, "Received different permessage-deflate than the one set.");
        const r4 = e4.headersList.get("Sec-WebSocket-Protocol");
        null === r4 || r4 === i3.headersList.get("Sec-WebSocket-Protocol") ? (e4.socket.on("data", h), e4.socket.on("close", _), e4.socket.on("error", C), k.open.hasSubscribers && k.open.publish({ address: e4.socket.address(), protocol: r4, extensions: o4 }), t3(e4)) : m(a3, "Protocol was not set in the opening handshake.");
      } });
    } };
  }