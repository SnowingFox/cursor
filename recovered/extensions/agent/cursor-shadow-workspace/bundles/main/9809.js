// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 9809 range:709487..712893
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9809: (e2, A2, t2) => {
    "use strict";
    const n2 = t2(1637), { uid: r2, states: o2 } = t2(5440), { kReadyState: s, kSentClose: a, kByteParser: i, kReceivedClose: c } = t2(7696), { fireEvent: l, failWebsocketConnection: g } = t2(4321), { CloseEvent: E } = t2(2740), { makeRequest: u } = t2(2239), { fetching: d } = t2(3406), { Headers: I } = t2(2932), { getGlobalDispatcher: h } = t2(7362), { kHeadersList: Q } = t2(8832), m = {};
    let C;
    m.open = n2.channel("undici:websocket:open"), m.close = n2.channel("undici:websocket:close"), m.socketError = n2.channel("undici:websocket:socket_error");
    try {
      C = t2(6982);
    } catch {
    }
    function B(e3) {
      this.ws[i].write(e3) || this.pause();
    }
    function p() {
      const { ws: e3 } = this, A3 = e3[a] && e3[c];
      let t3 = 1005, n3 = "";
      const r3 = e3[i].closingInfo;
      r3 ? (t3 = r3.code ?? 1005, n3 = r3.reason) : e3[a] || (t3 = 1006), e3[s] = o2.CLOSED, l("close", e3, E, { wasClean: A3, code: t3, reason: n3 }), m.close.hasSubscribers && m.close.publish({ websocket: e3, code: t3, reason: n3 });
    }
    function f(e3) {
      const { ws: A3 } = this;
      A3[s] = o2.CLOSING, m.socketError.hasSubscribers && m.socketError.publish(e3), this.destroy();
    }
    e2.exports = { establishWebSocketConnection: function(e3, A3, t3, n3, o3) {
      const s2 = e3;
      s2.protocol = "ws:" === e3.protocol ? "http:" : "https:";
      const a2 = u({ urlList: [s2], serviceWorkers: "none", referrer: "no-referrer", mode: "websocket", credentials: "include", cache: "no-store", redirect: "error" });
      if (o3.headers) {
        const e4 = new I(o3.headers)[Q];
        a2.headersList = e4;
      }
      const i2 = C.randomBytes(16).toString("base64");
      a2.headersList.append("sec-websocket-key", i2), a2.headersList.append("sec-websocket-version", "13");
      for (const e4 of A3) a2.headersList.append("sec-websocket-protocol", e4);
      return d({ request: a2, useParallelQueue: true, dispatcher: o3.dispatcher ?? h(), processResponse(e4) {
        if ("error" === e4.type || 101 !== e4.status) return void g(t3, "Received network error or non-101 status code.");
        if (0 !== A3.length && !e4.headersList.get("Sec-WebSocket-Protocol")) return void g(t3, "Server did not respond with sent protocols.");
        if ("websocket" !== e4.headersList.get("Upgrade")?.toLowerCase()) return void g(t3, 'Server did not set Upgrade header to "websocket".');
        if ("upgrade" !== e4.headersList.get("Connection")?.toLowerCase()) return void g(t3, 'Server did not set Connection header to "upgrade".');
        if (e4.headersList.get("Sec-WebSocket-Accept") !== C.createHash("sha1").update(i2 + r2).digest("base64")) return void g(t3, "Incorrect hash received in Sec-WebSocket-Accept header.");
        const o4 = e4.headersList.get("Sec-WebSocket-Extensions");
        if (null !== o4 && "" !== o4) return void g(t3, "Received different permessage-deflate than the one set.");
        const s3 = e4.headersList.get("Sec-WebSocket-Protocol");
        null === s3 || s3 === a2.headersList.get("Sec-WebSocket-Protocol") ? (e4.socket.on("data", B), e4.socket.on("close", p), e4.socket.on("error", f), m.open.hasSubscribers && m.open.publish({ address: e4.socket.address(), protocol: s3, extensions: o4 }), n3(e4)) : g(t3, "Protocol was not set in the opening handshake.");
      } });
    } };
  }