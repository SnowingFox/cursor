// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 4321 range:400919..402826
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4321: (e2, n2, t2) => {
    "use strict";
    const { kReadyState: a2, kController: s2, kResponse: o2, kBinaryType: r, kWebSocketURL: i } = t2(7696), { states: A, opcodes: c } = t2(5440), { MessageEvent: l, ErrorEvent: d } = t2(2740);
    function m(e3, n3, t3 = Event, a3) {
      const s3 = new t3(e3, a3);
      n3.dispatchEvent(s3);
    }
    function u(e3, n3) {
      const { [s2]: t3, [o2]: a3 } = e3;
      t3.abort(), a3?.socket && !a3.socket.destroyed && a3.socket.destroy(), n3 && m("error", e3, d, { error: new Error(n3) });
    }
    e2.exports = { isEstablished: function(e3) {
      return e3[a2] === A.OPEN;
    }, isClosing: function(e3) {
      return e3[a2] === A.CLOSING;
    }, isClosed: function(e3) {
      return e3[a2] === A.CLOSED;
    }, fireEvent: m, isValidSubprotocol: function(e3) {
      if (0 === e3.length) return false;
      for (const n3 of e3) {
        const e4 = n3.charCodeAt(0);
        if (e4 < 33 || e4 > 126 || "(" === n3 || ")" === n3 || "<" === n3 || ">" === n3 || "@" === n3 || "," === n3 || ";" === n3 || ":" === n3 || "\\" === n3 || '"' === n3 || "/" === n3 || "[" === n3 || "]" === n3 || "?" === n3 || "=" === n3 || "{" === n3 || "}" === n3 || 32 === e4 || 9 === e4) return false;
      }
      return true;
    }, isValidStatusCode: function(e3) {
      return e3 >= 1e3 && e3 < 1015 ? 1004 !== e3 && 1005 !== e3 && 1006 !== e3 : e3 >= 3e3 && e3 <= 4999;
    }, failWebsocketConnection: u, websocketMessageReceived: function(e3, n3, t3) {
      if (e3[a2] !== A.OPEN) return;
      let s3;
      if (n3 === c.TEXT) try {
        s3 = new TextDecoder("utf-8", { fatal: true }).decode(t3);
      } catch {
        return void u(e3, "Received invalid UTF-8 in text frame.");
      }
      else n3 === c.BINARY && (s3 = "blob" === e3[r] ? new Blob([t3]) : new Uint8Array(t3).buffer);
      m("message", e3, l, { origin: e3[i].origin, data: s3 });
    } };
  }