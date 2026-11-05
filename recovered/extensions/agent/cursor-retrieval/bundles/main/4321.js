// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 4321 range:699561..701472
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4321: (e2, a2, n2) => {
    "use strict";
    const { kReadyState: t2, kController: s2, kResponse: o2, kBinaryType: r2, kWebSocketURL: i2 } = n2(7696), { states: l, opcodes: d } = n2(5440), { MessageEvent: m, ErrorEvent: c } = n2(2740);
    function p(e3, a3, n3 = Event, t3) {
      const s3 = new n3(e3, t3);
      a3.dispatchEvent(s3);
    }
    function A(e3, a3) {
      const { [s2]: n3, [o2]: t3 } = e3;
      n3.abort(), t3?.socket && !t3.socket.destroyed && t3.socket.destroy(), a3 && p("error", e3, c, { error: new Error(a3) });
    }
    e2.exports = { isEstablished: function(e3) {
      return e3[t2] === l.OPEN;
    }, isClosing: function(e3) {
      return e3[t2] === l.CLOSING;
    }, isClosed: function(e3) {
      return e3[t2] === l.CLOSED;
    }, fireEvent: p, isValidSubprotocol: function(e3) {
      if (0 === e3.length) return false;
      for (const a3 of e3) {
        const e4 = a3.charCodeAt(0);
        if (e4 < 33 || e4 > 126 || "(" === a3 || ")" === a3 || "<" === a3 || ">" === a3 || "@" === a3 || "," === a3 || ";" === a3 || ":" === a3 || "\\" === a3 || '"' === a3 || "/" === a3 || "[" === a3 || "]" === a3 || "?" === a3 || "=" === a3 || "{" === a3 || "}" === a3 || 32 === e4 || 9 === e4) return false;
      }
      return true;
    }, isValidStatusCode: function(e3) {
      return e3 >= 1e3 && e3 < 1015 ? 1004 !== e3 && 1005 !== e3 && 1006 !== e3 : e3 >= 3e3 && e3 <= 4999;
    }, failWebsocketConnection: A, websocketMessageReceived: function(e3, a3, n3) {
      if (e3[t2] !== l.OPEN) return;
      let s3;
      if (a3 === d.TEXT) try {
        s3 = new TextDecoder("utf-8", { fatal: true }).decode(n3);
      } catch {
        return void A(e3, "Received invalid UTF-8 in text frame.");
      }
      else a3 === d.BINARY && (s3 = "blob" === e3[r2] ? new Blob([n3]) : new Uint8Array(n3).buffer);
      p("message", e3, m, { origin: e3[i2].origin, data: s3 });
    } };
  }