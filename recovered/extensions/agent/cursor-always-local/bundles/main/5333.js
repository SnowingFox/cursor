// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 5333 range:1231873..1235281
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5333: (t2, e2, r2) => {
    "use strict";
    const n2 = r2(1637), { uid: s2, states: i2 } = r2(5948), { kReadyState: o2, kSentClose: a, kByteParser: u, kReceivedClose: c } = r2(6140), { fireEvent: l, failWebsocketConnection: m } = r2(8149), { CloseEvent: d } = r2(1448), { makeRequest: f } = r2(547), { fetching: p } = r2(3914), { Headers: h } = r2(2848), { getGlobalDispatcher: g } = r2(7582), { kHeadersList: A } = r2(5532), _ = {};
    let y;
    _.open = n2.channel("undici:websocket:open"), _.close = n2.channel("undici:websocket:close"), _.socketError = n2.channel("undici:websocket:socket_error");
    try {
      y = r2(6982);
    } catch {
    }
    function w(t3) {
      this.ws[u].write(t3) || this.pause();
    }
    function S() {
      const { ws: t3 } = this, e3 = t3[a] && t3[c];
      let r3 = 1005, n3 = "";
      const s3 = t3[u].closingInfo;
      s3 ? (r3 = s3.code ?? 1005, n3 = s3.reason) : t3[a] || (r3 = 1006), t3[o2] = i2.CLOSED, l("close", t3, d, { wasClean: e3, code: r3, reason: n3 }), _.close.hasSubscribers && _.close.publish({ websocket: t3, code: r3, reason: n3 });
    }
    function J(t3) {
      const { ws: e3 } = this;
      e3[o2] = i2.CLOSING, _.socketError.hasSubscribers && _.socketError.publish(t3), this.destroy();
    }
    t2.exports = { establishWebSocketConnection: function(t3, e3, r3, n3, i3) {
      const o3 = t3;
      o3.protocol = "ws:" === t3.protocol ? "http:" : "https:";
      const a2 = f({ urlList: [o3], serviceWorkers: "none", referrer: "no-referrer", mode: "websocket", credentials: "include", cache: "no-store", redirect: "error" });
      if (i3.headers) {
        const t4 = new h(i3.headers)[A];
        a2.headersList = t4;
      }
      const u2 = y.randomBytes(16).toString("base64");
      a2.headersList.append("sec-websocket-key", u2), a2.headersList.append("sec-websocket-version", "13");
      for (const t4 of e3) a2.headersList.append("sec-websocket-protocol", t4);
      return p({ request: a2, useParallelQueue: true, dispatcher: i3.dispatcher ?? g(), processResponse(t4) {
        if ("error" === t4.type || 101 !== t4.status) return void m(r3, "Received network error or non-101 status code.");
        if (0 !== e3.length && !t4.headersList.get("Sec-WebSocket-Protocol")) return void m(r3, "Server did not respond with sent protocols.");
        if ("websocket" !== t4.headersList.get("Upgrade")?.toLowerCase()) return void m(r3, 'Server did not set Upgrade header to "websocket".');
        if ("upgrade" !== t4.headersList.get("Connection")?.toLowerCase()) return void m(r3, 'Server did not set Connection header to "upgrade".');
        if (t4.headersList.get("Sec-WebSocket-Accept") !== y.createHash("sha1").update(u2 + s2).digest("base64")) return void m(r3, "Incorrect hash received in Sec-WebSocket-Accept header.");
        const i4 = t4.headersList.get("Sec-WebSocket-Extensions");
        if (null !== i4 && "" !== i4) return void m(r3, "Received different permessage-deflate than the one set.");
        const o4 = t4.headersList.get("Sec-WebSocket-Protocol");
        null === o4 || o4 === a2.headersList.get("Sec-WebSocket-Protocol") ? (t4.socket.on("data", w), t4.socket.on("close", S), t4.socket.on("error", J), _.open.hasSubscribers && _.open.publish({ address: t4.socket.address(), protocol: o4, extensions: i4 }), n3(t4)) : m(r3, "Protocol was not set in the opening handshake.");
      } });
    } };
  }