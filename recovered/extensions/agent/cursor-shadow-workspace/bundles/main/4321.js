// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 4321 range:393498..395405
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4321: (e2, A2, t2) => {
    "use strict";
    const { kReadyState: n2, kController: r2, kResponse: o2, kBinaryType: s, kWebSocketURL: a } = t2(7696), { states: i, opcodes: c } = t2(5440), { MessageEvent: l, ErrorEvent: g } = t2(2740);
    function E(e3, A3, t3 = Event, n3) {
      const r3 = new t3(e3, n3);
      A3.dispatchEvent(r3);
    }
    function u(e3, A3) {
      const { [r2]: t3, [o2]: n3 } = e3;
      t3.abort(), n3?.socket && !n3.socket.destroyed && n3.socket.destroy(), A3 && E("error", e3, g, { error: new Error(A3) });
    }
    e2.exports = { isEstablished: function(e3) {
      return e3[n2] === i.OPEN;
    }, isClosing: function(e3) {
      return e3[n2] === i.CLOSING;
    }, isClosed: function(e3) {
      return e3[n2] === i.CLOSED;
    }, fireEvent: E, isValidSubprotocol: function(e3) {
      if (0 === e3.length) return false;
      for (const A3 of e3) {
        const e4 = A3.charCodeAt(0);
        if (e4 < 33 || e4 > 126 || "(" === A3 || ")" === A3 || "<" === A3 || ">" === A3 || "@" === A3 || "," === A3 || ";" === A3 || ":" === A3 || "\\" === A3 || '"' === A3 || "/" === A3 || "[" === A3 || "]" === A3 || "?" === A3 || "=" === A3 || "{" === A3 || "}" === A3 || 32 === e4 || 9 === e4) return false;
      }
      return true;
    }, isValidStatusCode: function(e3) {
      return e3 >= 1e3 && e3 < 1015 ? 1004 !== e3 && 1005 !== e3 && 1006 !== e3 : e3 >= 3e3 && e3 <= 4999;
    }, failWebsocketConnection: u, websocketMessageReceived: function(e3, A3, t3) {
      if (e3[n2] !== i.OPEN) return;
      let r3;
      if (A3 === c.TEXT) try {
        r3 = new TextDecoder("utf-8", { fatal: true }).decode(t3);
      } catch {
        return void u(e3, "Received invalid UTF-8 in text frame.");
      }
      else A3 === c.BINARY && (r3 = "blob" === e3[s] ? new Blob([t3]) : new Uint8Array(t3).buffer);
      E("message", e3, l, { origin: e3[a].origin, data: r3 });
    } };
  }