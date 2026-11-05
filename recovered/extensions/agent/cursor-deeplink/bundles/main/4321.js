// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 4321 range:496844..498751
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4321: (e2, t2, A2) => {
    "use strict";
    const { kReadyState: n2, kController: r2, kResponse: o2, kBinaryType: s, kWebSocketURL: i } = A2(7696), { states: a, opcodes: c } = A2(5440), { MessageEvent: l, ErrorEvent: u } = A2(2740);
    function g(e3, t3, A3 = Event, n3) {
      const r3 = new A3(e3, n3);
      t3.dispatchEvent(r3);
    }
    function E(e3, t3) {
      const { [r2]: A3, [o2]: n3 } = e3;
      A3.abort(), n3?.socket && !n3.socket.destroyed && n3.socket.destroy(), t3 && g("error", e3, u, { error: new Error(t3) });
    }
    e2.exports = { isEstablished: function(e3) {
      return e3[n2] === a.OPEN;
    }, isClosing: function(e3) {
      return e3[n2] === a.CLOSING;
    }, isClosed: function(e3) {
      return e3[n2] === a.CLOSED;
    }, fireEvent: g, isValidSubprotocol: function(e3) {
      if (0 === e3.length) return false;
      for (const t3 of e3) {
        const e4 = t3.charCodeAt(0);
        if (e4 < 33 || e4 > 126 || "(" === t3 || ")" === t3 || "<" === t3 || ">" === t3 || "@" === t3 || "," === t3 || ";" === t3 || ":" === t3 || "\\" === t3 || '"' === t3 || "/" === t3 || "[" === t3 || "]" === t3 || "?" === t3 || "=" === t3 || "{" === t3 || "}" === t3 || 32 === e4 || 9 === e4) return false;
      }
      return true;
    }, isValidStatusCode: function(e3) {
      return e3 >= 1e3 && e3 < 1015 ? 1004 !== e3 && 1005 !== e3 && 1006 !== e3 : e3 >= 3e3 && e3 <= 4999;
    }, failWebsocketConnection: E, websocketMessageReceived: function(e3, t3, A3) {
      if (e3[n2] !== a.OPEN) return;
      let r3;
      if (t3 === c.TEXT) try {
        r3 = new TextDecoder("utf-8", { fatal: true }).decode(A3);
      } catch {
        return void E(e3, "Received invalid UTF-8 in text frame.");
      }
      else t3 === c.BINARY && (r3 = "blob" === e3[s] ? new Blob([A3]) : new Uint8Array(A3).buffer);
      g("message", e3, l, { origin: e3[i].origin, data: r3 });
    } };
  }