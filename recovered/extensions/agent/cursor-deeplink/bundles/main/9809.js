// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 9809 range:847352..850758
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9809: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(1637), { uid: r2, states: o2 } = A2(5440), { kReadyState: s, kSentClose: i, kByteParser: a, kReceivedClose: c } = A2(7696), { fireEvent: l, failWebsocketConnection: u } = A2(4321), { CloseEvent: g } = A2(2740), { makeRequest: E } = A2(2239), { fetching: h } = A2(3406), { Headers: d } = A2(2932), { getGlobalDispatcher: I } = A2(7362), { kHeadersList: B } = A2(8832), Q = {};
    let f;
    Q.open = n2.channel("undici:websocket:open"), Q.close = n2.channel("undici:websocket:close"), Q.socketError = n2.channel("undici:websocket:socket_error");
    try {
      f = A2(6982);
    } catch {
    }
    function C(e3) {
      this.ws[a].write(e3) || this.pause();
    }
    function p() {
      const { ws: e3 } = this, t3 = e3[i] && e3[c];
      let A3 = 1005, n3 = "";
      const r3 = e3[a].closingInfo;
      r3 ? (A3 = r3.code ?? 1005, n3 = r3.reason) : e3[i] || (A3 = 1006), e3[s] = o2.CLOSED, l("close", e3, g, { wasClean: t3, code: A3, reason: n3 }), Q.close.hasSubscribers && Q.close.publish({ websocket: e3, code: A3, reason: n3 });
    }
    function m(e3) {
      const { ws: t3 } = this;
      t3[s] = o2.CLOSING, Q.socketError.hasSubscribers && Q.socketError.publish(e3), this.destroy();
    }
    e2.exports = { establishWebSocketConnection: function(e3, t3, A3, n3, o3) {
      const s2 = e3;
      s2.protocol = "ws:" === e3.protocol ? "http:" : "https:";
      const i2 = E({ urlList: [s2], serviceWorkers: "none", referrer: "no-referrer", mode: "websocket", credentials: "include", cache: "no-store", redirect: "error" });
      if (o3.headers) {
        const e4 = new d(o3.headers)[B];
        i2.headersList = e4;
      }
      const a2 = f.randomBytes(16).toString("base64");
      i2.headersList.append("sec-websocket-key", a2), i2.headersList.append("sec-websocket-version", "13");
      for (const e4 of t3) i2.headersList.append("sec-websocket-protocol", e4);
      return h({ request: i2, useParallelQueue: true, dispatcher: o3.dispatcher ?? I(), processResponse(e4) {
        if ("error" === e4.type || 101 !== e4.status) return void u(A3, "Received network error or non-101 status code.");
        if (0 !== t3.length && !e4.headersList.get("Sec-WebSocket-Protocol")) return void u(A3, "Server did not respond with sent protocols.");
        if ("websocket" !== e4.headersList.get("Upgrade")?.toLowerCase()) return void u(A3, 'Server did not set Upgrade header to "websocket".');
        if ("upgrade" !== e4.headersList.get("Connection")?.toLowerCase()) return void u(A3, 'Server did not set Connection header to "upgrade".');
        if (e4.headersList.get("Sec-WebSocket-Accept") !== f.createHash("sha1").update(a2 + r2).digest("base64")) return void u(A3, "Incorrect hash received in Sec-WebSocket-Accept header.");
        const o4 = e4.headersList.get("Sec-WebSocket-Extensions");
        if (null !== o4 && "" !== o4) return void u(A3, "Received different permessage-deflate than the one set.");
        const s3 = e4.headersList.get("Sec-WebSocket-Protocol");
        null === s3 || s3 === i2.headersList.get("Sec-WebSocket-Protocol") ? (e4.socket.on("data", C), e4.socket.on("close", p), e4.socket.on("error", m), Q.open.hasSubscribers && Q.open.publish({ address: e4.socket.address(), protocol: s3, extensions: o4 }), n3(e4)) : u(A3, "Protocol was not set in the opening handshake.");
      } });
    } };
  }