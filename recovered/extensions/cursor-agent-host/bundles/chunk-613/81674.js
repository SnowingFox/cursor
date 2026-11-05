// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 81674 range:462643..466976
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
81674: (A, e, t) => {
  "use strict";
  const { uid: r, states: s, sentCloseFrameState: o, emptyBuffer: n, opcodes: i } = t(30229), { kReadyState: a, kSentClose: Q, kByteParser: g, kReceivedClose: E, kResponse: B } = t(47489), { fireEvent: c, failWebsocketConnection: I, isClosing: C, isClosed: h, isEstablished: l, parseExtensions: u } = t(79946), { channels: d } = t(98565), { CloseEvent: f } = t(63315), { makeRequest: w } = t(78078), { fetching: y } = t(75319), { Headers: D, getHeadersList: p } = t(48969), { getDecodeSplit: k } = t(48215), { WebsocketFrameSend: R } = t(35553);
  let F;
  try {
    F = t(77598);
  } catch {
  }
  function m(A2) {
    this.ws[g].write(A2) || this.pause();
  }
  function b() {
    const { ws: A2 } = this, { [B]: e2 } = A2;
    e2.socket.off("data", m), e2.socket.off("close", b), e2.socket.off("error", N);
    const t2 = A2[Q] === o.SENT && A2[E];
    let r2 = 1005, n2 = "";
    const i2 = A2[g].closingInfo;
    i2 && !i2.error ? (r2 = i2.code ?? 1005, n2 = i2.reason) : A2[E] || (r2 = 1006), A2[a] = s.CLOSED, c("close", A2, (A3, e3) => new f(A3, e3), { wasClean: t2, code: r2, reason: n2 }), d.close.hasSubscribers && d.close.publish({ websocket: A2, code: r2, reason: n2 });
  }
  function N(A2) {
    const { ws: e2 } = this;
    e2[a] = s.CLOSING, d.socketError.hasSubscribers && d.socketError.publish(A2), this.destroy();
  }
  A.exports = { establishWebSocketConnection: function(A2, e2, t2, s2, o2, n2) {
    const i2 = A2;
    i2.protocol = "ws:" === A2.protocol ? "http:" : "https:";
    const a2 = w({ urlList: [i2], client: t2, serviceWorkers: "none", referrer: "no-referrer", mode: "websocket", credentials: "include", cache: "no-store", redirect: "error" });
    if (n2.headers) {
      const A3 = p(new D(n2.headers));
      a2.headersList = A3;
    }
    const Q2 = F.randomBytes(16).toString("base64");
    a2.headersList.append("sec-websocket-key", Q2), a2.headersList.append("sec-websocket-version", "13");
    for (const A3 of e2) a2.headersList.append("sec-websocket-protocol", A3);
    return a2.headersList.append("sec-websocket-extensions", "permessage-deflate; client_max_window_bits"), y({ request: a2, useParallelQueue: true, dispatcher: n2.dispatcher, processResponse(A3) {
      if ("error" === A3.type || 101 !== A3.status) return void I(s2, "Received network error or non-101 status code.");
      if (0 !== e2.length && !A3.headersList.get("Sec-WebSocket-Protocol")) return void I(s2, "Server did not respond with sent protocols.");
      if ("websocket" !== A3.headersList.get("Upgrade")?.toLowerCase()) return void I(s2, 'Server did not set Upgrade header to "websocket".');
      if ("upgrade" !== A3.headersList.get("Connection")?.toLowerCase()) return void I(s2, 'Server did not set Connection header to "upgrade".');
      if (A3.headersList.get("Sec-WebSocket-Accept") !== F.createHash("sha1").update(Q2 + r).digest("base64")) return void I(s2, "Incorrect hash received in Sec-WebSocket-Accept header.");
      const t3 = A3.headersList.get("Sec-WebSocket-Extensions");
      let n3;
      if (null !== t3 && (n3 = u(t3), !n3.has("permessage-deflate"))) return void I(s2, "Sec-WebSocket-Extensions header does not match.");
      const i3 = A3.headersList.get("Sec-WebSocket-Protocol");
      if (null !== i3) {
        if (!k("sec-websocket-protocol", a2.headersList).includes(i3)) return void I(s2, "Protocol was not set in the opening handshake.");
      }
      A3.socket.on("data", m), A3.socket.on("close", b), A3.socket.on("error", N), d.open.hasSubscribers && d.open.publish({ address: A3.socket.address(), protocol: i3, extensions: t3 }), o2(A3, n3);
    } });
  }, closeWebSocketConnection: function(A2, e2, t2, r2) {
    if (C(A2) || h(A2)) ;
    else if (l(A2)) if (A2[Q] === o.NOT_SENT) {
      A2[Q] = o.PROCESSING;
      const g2 = new R();
      void 0 !== e2 && void 0 === t2 ? (g2.frameData = Buffer.allocUnsafe(2), g2.frameData.writeUInt16BE(e2, 0)) : void 0 !== e2 && void 0 !== t2 ? (g2.frameData = Buffer.allocUnsafe(2 + r2), g2.frameData.writeUInt16BE(e2, 0), g2.frameData.write(t2, 2, "utf-8")) : g2.frameData = n;
      A2[B].socket.write(g2.createFrame(i.CLOSE)), A2[Q] = o.SENT, A2[a] = s.CLOSING;
    } else A2[a] = s.CLOSING;
    else I(A2, "Connection was closed before it was established."), A2[a] = s.CLOSING;
  } };
}