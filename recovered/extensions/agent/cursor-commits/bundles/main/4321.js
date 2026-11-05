// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 4321 range:393806..395717
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4321: (e2, n2, a2) => {
    "use strict";
    const { kReadyState: t2, kController: s2, kResponse: o2, kBinaryType: r2, kWebSocketURL: i2 } = a2(7696), { states: A, opcodes: l } = a2(5440), { MessageEvent: c, ErrorEvent: m } = a2(2740);
    function d(e3, n3, a3 = Event, t3) {
      const s3 = new a3(e3, t3);
      n3.dispatchEvent(s3);
    }
    function g(e3, n3) {
      const { [s2]: a3, [o2]: t3 } = e3;
      a3.abort(), t3?.socket && !t3.socket.destroyed && t3.socket.destroy(), n3 && d("error", e3, m, { error: new Error(n3) });
    }
    e2.exports = { isEstablished: function(e3) {
      return e3[t2] === A.OPEN;
    }, isClosing: function(e3) {
      return e3[t2] === A.CLOSING;
    }, isClosed: function(e3) {
      return e3[t2] === A.CLOSED;
    }, fireEvent: d, isValidSubprotocol: function(e3) {
      if (0 === e3.length) return false;
      for (const n3 of e3) {
        const e4 = n3.charCodeAt(0);
        if (e4 < 33 || e4 > 126 || "(" === n3 || ")" === n3 || "<" === n3 || ">" === n3 || "@" === n3 || "," === n3 || ";" === n3 || ":" === n3 || "\\" === n3 || '"' === n3 || "/" === n3 || "[" === n3 || "]" === n3 || "?" === n3 || "=" === n3 || "{" === n3 || "}" === n3 || 32 === e4 || 9 === e4) return false;
      }
      return true;
    }, isValidStatusCode: function(e3) {
      return e3 >= 1e3 && e3 < 1015 ? 1004 !== e3 && 1005 !== e3 && 1006 !== e3 : e3 >= 3e3 && e3 <= 4999;
    }, failWebsocketConnection: g, websocketMessageReceived: function(e3, n3, a3) {
      if (e3[t2] !== A.OPEN) return;
      let s3;
      if (n3 === l.TEXT) try {
        s3 = new TextDecoder("utf-8", { fatal: true }).decode(a3);
      } catch {
        return void g(e3, "Received invalid UTF-8 in text frame.");
      }
      else n3 === l.BINARY && (s3 = "blob" === e3[r2] ? new Blob([a3]) : new Uint8Array(a3).buffer);
      d("message", e3, c, { origin: e3[i2].origin, data: s3 });
    } };
  }