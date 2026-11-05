// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 79946 range:459303..462641
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
79946: (A, e, t) => {
  "use strict";
  const { kReadyState: r, kController: s, kResponse: o, kBinaryType: n, kWebSocketURL: i } = t(47489), { states: a, opcodes: Q } = t(30229), { ErrorEvent: g, createFastMessageEvent: E } = t(63315), { isUtf8: B } = t(4573), { collectASequenceOfCodePointsFast: c, removeHTTPWhitespace: I } = t(52603);
  function C(A2, e2, t2 = (A3, e3) => new Event(A3, e3), r2 = {}) {
    const s2 = t2(A2, r2);
    e2.dispatchEvent(s2);
  }
  function h(A2, e2) {
    const { [s]: t2, [o]: r2 } = A2;
    t2.abort(), r2?.socket && !r2.socket.destroyed && r2.socket.destroy(), e2 && C("error", A2, (A3, e3) => new g(A3, e3), { error: new Error(e2), message: e2 });
  }
  function l(A2) {
    return A2 === Q.CLOSE || A2 === Q.PING || A2 === Q.PONG;
  }
  function u(A2) {
    return A2 === Q.CONTINUATION;
  }
  function d(A2) {
    return A2 === Q.TEXT || A2 === Q.BINARY;
  }
  const f = "string" == typeof process.versions.icu, w = f ? new TextDecoder("utf-8", { fatal: true }) : void 0, y = f ? w.decode.bind(w) : function(A2) {
    if (B(A2)) return A2.toString("utf-8");
    throw new TypeError("Invalid utf-8 received.");
  };
  A.exports = { isConnecting: function(A2) {
    return A2[r] === a.CONNECTING;
  }, isEstablished: function(A2) {
    return A2[r] === a.OPEN;
  }, isClosing: function(A2) {
    return A2[r] === a.CLOSING;
  }, isClosed: function(A2) {
    return A2[r] === a.CLOSED;
  }, fireEvent: C, isValidSubprotocol: function(A2) {
    if (0 === A2.length) return false;
    for (let e2 = 0; e2 < A2.length; ++e2) {
      const t2 = A2.charCodeAt(e2);
      if (t2 < 33 || t2 > 126 || 34 === t2 || 40 === t2 || 41 === t2 || 44 === t2 || 47 === t2 || 58 === t2 || 59 === t2 || 60 === t2 || 61 === t2 || 62 === t2 || 63 === t2 || 64 === t2 || 91 === t2 || 92 === t2 || 93 === t2 || 123 === t2 || 125 === t2) return false;
    }
    return true;
  }, isValidStatusCode: function(A2) {
    return A2 >= 1e3 && A2 < 1015 ? 1004 !== A2 && 1005 !== A2 && 1006 !== A2 : A2 >= 3e3 && A2 <= 4999;
  }, failWebsocketConnection: h, websocketMessageReceived: function(A2, e2, t2) {
    if (A2[r] !== a.OPEN) return;
    let s2;
    if (e2 === Q.TEXT) try {
      s2 = y(t2);
    } catch {
      return void h(A2, "Received invalid UTF-8 in text frame.");
    }
    else e2 === Q.BINARY && (s2 = "blob" === A2[n] ? new Blob([t2]) : (function(A3) {
      if (A3.byteLength === A3.buffer.byteLength) return A3.buffer;
      return A3.buffer.slice(A3.byteOffset, A3.byteOffset + A3.byteLength);
    })(t2));
    C("message", A2, E, { origin: A2[i].origin, data: s2 });
  }, utf8Decode: y, isControlFrame: l, isContinuationFrame: u, isTextBinaryFrame: d, isValidOpcode: function(A2) {
    return d(A2) || u(A2) || l(A2);
  }, parseExtensions: function(A2) {
    const e2 = { position: 0 }, t2 = /* @__PURE__ */ new Map();
    for (; e2.position < A2.length; ) {
      const r2 = c(";", A2, e2), [s2, o2 = ""] = r2.split("=");
      t2.set(I(s2, true, false), I(o2, false, true)), e2.position++;
    }
    return t2;
  }, isValidClientWindowBits: function(A2) {
    if (0 === A2.length) return false;
    for (let e3 = 0; e3 < A2.length; e3++) {
      const t2 = A2.charCodeAt(e3);
      if (t2 < 48 || t2 > 57) return false;
    }
    const e2 = Number.parseInt(A2, 10);
    return e2 >= 8 && e2 <= 15;
  } };
}