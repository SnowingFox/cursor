// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 9809 range:741011..744417
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9809: (e2, n2, t2) => {
    "use strict";
    const a2 = t2(1637), { uid: s2, states: o2 } = t2(5440), { kReadyState: r, kSentClose: i, kByteParser: A, kReceivedClose: c } = t2(7696), { fireEvent: l, failWebsocketConnection: d } = t2(4321), { CloseEvent: m } = t2(2740), { makeRequest: u } = t2(2239), { fetching: g } = t2(3406), { Headers: p } = t2(2932), { getGlobalDispatcher: E } = t2(7362), { kHeadersList: h } = t2(8832), T = {};
    let k;
    T.open = a2.channel("undici:websocket:open"), T.close = a2.channel("undici:websocket:close"), T.socketError = a2.channel("undici:websocket:socket_error");
    try {
      k = t2(6982);
    } catch {
    }
    function f(e3) {
      this.ws[A].write(e3) || this.pause();
    }
    function _() {
      const { ws: e3 } = this, n3 = e3[i] && e3[c];
      let t3 = 1005, a3 = "";
      const s3 = e3[A].closingInfo;
      s3 ? (t3 = s3.code ?? 1005, a3 = s3.reason) : e3[i] || (t3 = 1006), e3[r] = o2.CLOSED, l("close", e3, m, { wasClean: n3, code: t3, reason: a3 }), T.close.hasSubscribers && T.close.publish({ websocket: e3, code: t3, reason: a3 });
    }
    function I(e3) {
      const { ws: n3 } = this;
      n3[r] = o2.CLOSING, T.socketError.hasSubscribers && T.socketError.publish(e3), this.destroy();
    }
    e2.exports = { establishWebSocketConnection: function(e3, n3, t3, a3, o3) {
      const r2 = e3;
      r2.protocol = "ws:" === e3.protocol ? "http:" : "https:";
      const i2 = u({ urlList: [r2], serviceWorkers: "none", referrer: "no-referrer", mode: "websocket", credentials: "include", cache: "no-store", redirect: "error" });
      if (o3.headers) {
        const e4 = new p(o3.headers)[h];
        i2.headersList = e4;
      }
      const A2 = k.randomBytes(16).toString("base64");
      i2.headersList.append("sec-websocket-key", A2), i2.headersList.append("sec-websocket-version", "13");
      for (const e4 of n3) i2.headersList.append("sec-websocket-protocol", e4);
      return g({ request: i2, useParallelQueue: true, dispatcher: o3.dispatcher ?? E(), processResponse(e4) {
        if ("error" === e4.type || 101 !== e4.status) return void d(t3, "Received network error or non-101 status code.");
        if (0 !== n3.length && !e4.headersList.get("Sec-WebSocket-Protocol")) return void d(t3, "Server did not respond with sent protocols.");
        if ("websocket" !== e4.headersList.get("Upgrade")?.toLowerCase()) return void d(t3, 'Server did not set Upgrade header to "websocket".');
        if ("upgrade" !== e4.headersList.get("Connection")?.toLowerCase()) return void d(t3, 'Server did not set Connection header to "upgrade".');
        if (e4.headersList.get("Sec-WebSocket-Accept") !== k.createHash("sha1").update(A2 + s2).digest("base64")) return void d(t3, "Incorrect hash received in Sec-WebSocket-Accept header.");
        const o4 = e4.headersList.get("Sec-WebSocket-Extensions");
        if (null !== o4 && "" !== o4) return void d(t3, "Received different permessage-deflate than the one set.");
        const r3 = e4.headersList.get("Sec-WebSocket-Protocol");
        null === r3 || r3 === i2.headersList.get("Sec-WebSocket-Protocol") ? (e4.socket.on("data", f), e4.socket.on("close", _), e4.socket.on("error", I), T.open.hasSubscribers && T.open.publish({ address: e4.socket.address(), protocol: r3, extensions: o4 }), a3(e4)) : d(t3, "Protocol was not set in the opening handshake.");
      } });
    } };
  }