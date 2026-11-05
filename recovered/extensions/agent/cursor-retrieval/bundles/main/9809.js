// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 9809 range:1062564..1065976
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9809: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(1637), { uid: s2, states: o2 } = n2(5440), { kReadyState: r2, kSentClose: i2, kByteParser: l, kReceivedClose: d } = n2(7696), { fireEvent: m, failWebsocketConnection: c } = n2(4321), { CloseEvent: p } = n2(2740), { makeRequest: A } = n2(2239), { fetching: u } = n2(3406), { Headers: g } = n2(2932), { getGlobalDispatcher: T } = n2(7362), { kHeadersList: h } = n2(8832), k = {};
    let _;
    k.open = t2.channel("undici:websocket:open"), k.close = t2.channel("undici:websocket:close"), k.socketError = t2.channel("undici:websocket:socket_error");
    try {
      _ = n2(6982);
    } catch {
    }
    function E(e3) {
      this.ws[l].write(e3) || this.pause();
    }
    function f() {
      const { ws: e3 } = this, a3 = e3[i2] && e3[d];
      let n3 = 1005, t3 = "";
      const s3 = e3[l].closingInfo;
      s3 ? (n3 = s3.code ?? 1005, t3 = s3.reason) : e3[i2] || (n3 = 1006), e3[r2] = o2.CLOSED, m("close", e3, p, { wasClean: a3, code: n3, reason: t3 }), k.close.hasSubscribers && k.close.publish({ websocket: e3, code: n3, reason: t3 });
    }
    function C(e3) {
      const { ws: a3 } = this;
      a3[r2] = o2.CLOSING, k.socketError.hasSubscribers && k.socketError.publish(e3), this.destroy();
    }
    e2.exports = { establishWebSocketConnection: function(e3, a3, n3, t3, o3) {
      const r3 = e3;
      r3.protocol = "ws:" === e3.protocol ? "http:" : "https:";
      const i3 = A({ urlList: [r3], serviceWorkers: "none", referrer: "no-referrer", mode: "websocket", credentials: "include", cache: "no-store", redirect: "error" });
      if (o3.headers) {
        const e4 = new g(o3.headers)[h];
        i3.headersList = e4;
      }
      const l2 = _.randomBytes(16).toString("base64");
      i3.headersList.append("sec-websocket-key", l2), i3.headersList.append("sec-websocket-version", "13");
      for (const e4 of a3) i3.headersList.append("sec-websocket-protocol", e4);
      return u({ request: i3, useParallelQueue: true, dispatcher: o3.dispatcher ?? T(), processResponse(e4) {
        if ("error" === e4.type || 101 !== e4.status) return void c(n3, "Received network error or non-101 status code.");
        if (0 !== a3.length && !e4.headersList.get("Sec-WebSocket-Protocol")) return void c(n3, "Server did not respond with sent protocols.");
        if ("websocket" !== e4.headersList.get("Upgrade")?.toLowerCase()) return void c(n3, 'Server did not set Upgrade header to "websocket".');
        if ("upgrade" !== e4.headersList.get("Connection")?.toLowerCase()) return void c(n3, 'Server did not set Connection header to "upgrade".');
        if (e4.headersList.get("Sec-WebSocket-Accept") !== _.createHash("sha1").update(l2 + s2).digest("base64")) return void c(n3, "Incorrect hash received in Sec-WebSocket-Accept header.");
        const o4 = e4.headersList.get("Sec-WebSocket-Extensions");
        if (null !== o4 && "" !== o4) return void c(n3, "Received different permessage-deflate than the one set.");
        const r4 = e4.headersList.get("Sec-WebSocket-Protocol");
        null === r4 || r4 === i3.headersList.get("Sec-WebSocket-Protocol") ? (e4.socket.on("data", E), e4.socket.on("close", f), e4.socket.on("error", C), k.open.hasSubscribers && k.open.publish({ address: e4.socket.address(), protocol: r4, extensions: o4 }), t3(e4)) : c(n3, "Protocol was not set in the opening handshake.");
      } });
    } };
  }