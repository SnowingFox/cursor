// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8149 range:5120623..5122532
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8149: (t2, e2, r2) => {
    "use strict";
    const { kReadyState: n2, kController: s2, kResponse: i2, kBinaryType: o2, kWebSocketURL: a } = r2(6140), { states: u, opcodes: c } = r2(5948), { MessageEvent: l, ErrorEvent: m } = r2(1448);
    function d(t3, e3, r3 = Event, n3) {
      const s3 = new r3(t3, n3);
      e3.dispatchEvent(s3);
    }
    function f(t3, e3) {
      const { [s2]: r3, [i2]: n3 } = t3;
      r3.abort(), n3?.socket && !n3.socket.destroyed && n3.socket.destroy(), e3 && d("error", t3, m, { error: new Error(e3) });
    }
    t2.exports = { isEstablished: function(t3) {
      return t3[n2] === u.OPEN;
    }, isClosing: function(t3) {
      return t3[n2] === u.CLOSING;
    }, isClosed: function(t3) {
      return t3[n2] === u.CLOSED;
    }, fireEvent: d, isValidSubprotocol: function(t3) {
      if (0 === t3.length) return false;
      for (const e3 of t3) {
        const t4 = e3.charCodeAt(0);
        if (t4 < 33 || t4 > 126 || "(" === e3 || ")" === e3 || "<" === e3 || ">" === e3 || "@" === e3 || "," === e3 || ";" === e3 || ":" === e3 || "\\" === e3 || '"' === e3 || "/" === e3 || "[" === e3 || "]" === e3 || "?" === e3 || "=" === e3 || "{" === e3 || "}" === e3 || 32 === t4 || 9 === t4) return false;
      }
      return true;
    }, isValidStatusCode: function(t3) {
      return t3 >= 1e3 && t3 < 1015 ? 1004 !== t3 && 1005 !== t3 && 1006 !== t3 : t3 >= 3e3 && t3 <= 4999;
    }, failWebsocketConnection: f, websocketMessageReceived: function(t3, e3, r3) {
      if (t3[n2] !== u.OPEN) return;
      let s3;
      if (e3 === c.TEXT) try {
        s3 = new TextDecoder("utf-8", { fatal: true }).decode(r3);
      } catch {
        return void f(t3, "Received invalid UTF-8 in text frame.");
      }
      else e3 === c.BINARY && (s3 = "blob" === t3[o2] ? new Blob([r3]) : new Uint8Array(r3).buffer);
      d("message", t3, l, { origin: t3[a].origin, data: s3 });
    } };
  }