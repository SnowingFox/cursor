// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1448 range:501116..505757
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1448: (t2, e2, r2) => {
    "use strict";
    const { webidl: n2 } = r2(8193), { kEnumerableProperty: s2 } = r2(3589), { MessagePort: i2 } = r2(8167);
    class o2 extends Event {
      #t;
      constructor(t3, e3 = {}) {
        n2.argumentLengthCheck(arguments, 1, { header: "MessageEvent constructor" }), super(t3 = n2.converters.DOMString(t3), e3 = n2.converters.MessageEventInit(e3)), this.#t = e3;
      }
      get data() {
        return n2.brandCheck(this, o2), this.#t.data;
      }
      get origin() {
        return n2.brandCheck(this, o2), this.#t.origin;
      }
      get lastEventId() {
        return n2.brandCheck(this, o2), this.#t.lastEventId;
      }
      get source() {
        return n2.brandCheck(this, o2), this.#t.source;
      }
      get ports() {
        return n2.brandCheck(this, o2), Object.isFrozen(this.#t.ports) || Object.freeze(this.#t.ports), this.#t.ports;
      }
      initMessageEvent(t3, e3 = false, r3 = false, s3 = null, i3 = "", a2 = "", u2 = null, c2 = []) {
        return n2.brandCheck(this, o2), n2.argumentLengthCheck(arguments, 1, { header: "MessageEvent.initMessageEvent" }), new o2(t3, { bubbles: e3, cancelable: r3, data: s3, origin: i3, lastEventId: a2, source: u2, ports: c2 });
      }
    }
    class a extends Event {
      #t;
      constructor(t3, e3 = {}) {
        n2.argumentLengthCheck(arguments, 1, { header: "CloseEvent constructor" }), super(t3 = n2.converters.DOMString(t3), e3 = n2.converters.CloseEventInit(e3)), this.#t = e3;
      }
      get wasClean() {
        return n2.brandCheck(this, a), this.#t.wasClean;
      }
      get code() {
        return n2.brandCheck(this, a), this.#t.code;
      }
      get reason() {
        return n2.brandCheck(this, a), this.#t.reason;
      }
    }
    class u extends Event {
      #t;
      constructor(t3, e3) {
        n2.argumentLengthCheck(arguments, 1, { header: "ErrorEvent constructor" }), super(t3, e3), t3 = n2.converters.DOMString(t3), e3 = n2.converters.ErrorEventInit(e3 ?? {}), this.#t = e3;
      }
      get message() {
        return n2.brandCheck(this, u), this.#t.message;
      }
      get filename() {
        return n2.brandCheck(this, u), this.#t.filename;
      }
      get lineno() {
        return n2.brandCheck(this, u), this.#t.lineno;
      }
      get colno() {
        return n2.brandCheck(this, u), this.#t.colno;
      }
      get error() {
        return n2.brandCheck(this, u), this.#t.error;
      }
    }
    Object.defineProperties(o2.prototype, { [Symbol.toStringTag]: { value: "MessageEvent", configurable: true }, data: s2, origin: s2, lastEventId: s2, source: s2, ports: s2, initMessageEvent: s2 }), Object.defineProperties(a.prototype, { [Symbol.toStringTag]: { value: "CloseEvent", configurable: true }, reason: s2, code: s2, wasClean: s2 }), Object.defineProperties(u.prototype, { [Symbol.toStringTag]: { value: "ErrorEvent", configurable: true }, message: s2, filename: s2, lineno: s2, colno: s2, error: s2 }), n2.converters.MessagePort = n2.interfaceConverter(i2), n2.converters["sequence<MessagePort>"] = n2.sequenceConverter(n2.converters.MessagePort);
    const c = [{ key: "bubbles", converter: n2.converters.boolean, defaultValue: false }, { key: "cancelable", converter: n2.converters.boolean, defaultValue: false }, { key: "composed", converter: n2.converters.boolean, defaultValue: false }];
    n2.converters.MessageEventInit = n2.dictionaryConverter([...c, { key: "data", converter: n2.converters.any, defaultValue: null }, { key: "origin", converter: n2.converters.USVString, defaultValue: "" }, { key: "lastEventId", converter: n2.converters.DOMString, defaultValue: "" }, { key: "source", converter: n2.nullableConverter(n2.converters.MessagePort), defaultValue: null }, { key: "ports", converter: n2.converters["sequence<MessagePort>"], get defaultValue() {
      return [];
    } }]), n2.converters.CloseEventInit = n2.dictionaryConverter([...c, { key: "wasClean", converter: n2.converters.boolean, defaultValue: false }, { key: "code", converter: n2.converters["unsigned short"], defaultValue: 0 }, { key: "reason", converter: n2.converters.USVString, defaultValue: "" }]), n2.converters.ErrorEventInit = n2.dictionaryConverter([...c, { key: "message", converter: n2.converters.DOMString, defaultValue: "" }, { key: "filename", converter: n2.converters.USVString, defaultValue: "" }, { key: "lineno", converter: n2.converters["unsigned long"], defaultValue: 0 }, { key: "colno", converter: n2.converters["unsigned long"], defaultValue: 0 }, { key: "error", converter: n2.converters.any }]), t2.exports = { MessageEvent: o2, CloseEvent: a, ErrorEvent: u };
  }