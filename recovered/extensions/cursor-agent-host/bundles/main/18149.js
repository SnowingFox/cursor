// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 18149 range:4311297..4313192
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
18149: (e, t, r) => {
    "use strict";
    const { kReadyState: n, kController: s, kResponse: o, kBinaryType: i, kWebSocketURL: a } = r(96140), { states: c, opcodes: l } = r(15948), { MessageEvent: u, ErrorEvent: d } = r(31448);
    function p(e2, t2, r2 = Event, n2) {
      const s2 = new r2(e2, n2);
      t2.dispatchEvent(s2);
    }
    function m(e2, t2) {
      const { [s]: r2, [o]: n2 } = e2;
      r2.abort(), n2?.socket && !n2.socket.destroyed && n2.socket.destroy(), t2 && p("error", e2, d, { error: new Error(t2) });
    }
    e.exports = { isEstablished: function(e2) {
      return e2[n] === c.OPEN;
    }, isClosing: function(e2) {
      return e2[n] === c.CLOSING;
    }, isClosed: function(e2) {
      return e2[n] === c.CLOSED;
    }, fireEvent: p, isValidSubprotocol: function(e2) {
      if (0 === e2.length) return false;
      for (const t2 of e2) {
        const e3 = t2.charCodeAt(0);
        if (e3 < 33 || e3 > 126 || "(" === t2 || ")" === t2 || "<" === t2 || ">" === t2 || "@" === t2 || "," === t2 || ";" === t2 || ":" === t2 || "\\" === t2 || '"' === t2 || "/" === t2 || "[" === t2 || "]" === t2 || "?" === t2 || "=" === t2 || "{" === t2 || "}" === t2 || 32 === e3 || 9 === e3) return false;
      }
      return true;
    }, isValidStatusCode: function(e2) {
      return e2 >= 1e3 && e2 < 1015 ? 1004 !== e2 && 1005 !== e2 && 1006 !== e2 : e2 >= 3e3 && e2 <= 4999;
    }, failWebsocketConnection: m, websocketMessageReceived: function(e2, t2, r2) {
      if (e2[n] !== c.OPEN) return;
      let s2;
      if (t2 === l.TEXT) try {
        s2 = new TextDecoder("utf-8", { fatal: true }).decode(r2);
      } catch {
        return void m(e2, "Received invalid UTF-8 in text frame.");
      }
      else t2 === l.BINARY && (s2 = "blob" === e2[i] ? new Blob([r2]) : new Uint8Array(r2).buffer);
      p("message", e2, u, { origin: e2[a].origin, data: s2 });
    } };
  }