// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 2740 range:250656..255287
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2740: (e2, t2, A2) => {
    "use strict";
    const { webidl: n2 } = A2(8005), { kEnumerableProperty: r2 } = A2(9361), { MessagePort: o2 } = A2(8167);
    class s extends Event {
      #e;
      constructor(e3, t3 = {}) {
        n2.argumentLengthCheck(arguments, 1, { header: "MessageEvent constructor" }), super(e3 = n2.converters.DOMString(e3), t3 = n2.converters.MessageEventInit(t3)), this.#e = t3;
      }
      get data() {
        return n2.brandCheck(this, s), this.#e.data;
      }
      get origin() {
        return n2.brandCheck(this, s), this.#e.origin;
      }
      get lastEventId() {
        return n2.brandCheck(this, s), this.#e.lastEventId;
      }
      get source() {
        return n2.brandCheck(this, s), this.#e.source;
      }
      get ports() {
        return n2.brandCheck(this, s), Object.isFrozen(this.#e.ports) || Object.freeze(this.#e.ports), this.#e.ports;
      }
      initMessageEvent(e3, t3 = false, A3 = false, r3 = null, o3 = "", i2 = "", a2 = null, c2 = []) {
        return n2.brandCheck(this, s), n2.argumentLengthCheck(arguments, 1, { header: "MessageEvent.initMessageEvent" }), new s(e3, { bubbles: t3, cancelable: A3, data: r3, origin: o3, lastEventId: i2, source: a2, ports: c2 });
      }
    }
    class i extends Event {
      #e;
      constructor(e3, t3 = {}) {
        n2.argumentLengthCheck(arguments, 1, { header: "CloseEvent constructor" }), super(e3 = n2.converters.DOMString(e3), t3 = n2.converters.CloseEventInit(t3)), this.#e = t3;
      }
      get wasClean() {
        return n2.brandCheck(this, i), this.#e.wasClean;
      }
      get code() {
        return n2.brandCheck(this, i), this.#e.code;
      }
      get reason() {
        return n2.brandCheck(this, i), this.#e.reason;
      }
    }
    class a extends Event {
      #e;
      constructor(e3, t3) {
        n2.argumentLengthCheck(arguments, 1, { header: "ErrorEvent constructor" }), super(e3, t3), e3 = n2.converters.DOMString(e3), t3 = n2.converters.ErrorEventInit(t3 ?? {}), this.#e = t3;
      }
      get message() {
        return n2.brandCheck(this, a), this.#e.message;
      }
      get filename() {
        return n2.brandCheck(this, a), this.#e.filename;
      }
      get lineno() {
        return n2.brandCheck(this, a), this.#e.lineno;
      }
      get colno() {
        return n2.brandCheck(this, a), this.#e.colno;
      }
      get error() {
        return n2.brandCheck(this, a), this.#e.error;
      }
    }
    Object.defineProperties(s.prototype, { [Symbol.toStringTag]: { value: "MessageEvent", configurable: true }, data: r2, origin: r2, lastEventId: r2, source: r2, ports: r2, initMessageEvent: r2 }), Object.defineProperties(i.prototype, { [Symbol.toStringTag]: { value: "CloseEvent", configurable: true }, reason: r2, code: r2, wasClean: r2 }), Object.defineProperties(a.prototype, { [Symbol.toStringTag]: { value: "ErrorEvent", configurable: true }, message: r2, filename: r2, lineno: r2, colno: r2, error: r2 }), n2.converters.MessagePort = n2.interfaceConverter(o2), n2.converters["sequence<MessagePort>"] = n2.sequenceConverter(n2.converters.MessagePort);
    const c = [{ key: "bubbles", converter: n2.converters.boolean, defaultValue: false }, { key: "cancelable", converter: n2.converters.boolean, defaultValue: false }, { key: "composed", converter: n2.converters.boolean, defaultValue: false }];
    n2.converters.MessageEventInit = n2.dictionaryConverter([...c, { key: "data", converter: n2.converters.any, defaultValue: null }, { key: "origin", converter: n2.converters.USVString, defaultValue: "" }, { key: "lastEventId", converter: n2.converters.DOMString, defaultValue: "" }, { key: "source", converter: n2.nullableConverter(n2.converters.MessagePort), defaultValue: null }, { key: "ports", converter: n2.converters["sequence<MessagePort>"], get defaultValue() {
      return [];
    } }]), n2.converters.CloseEventInit = n2.dictionaryConverter([...c, { key: "wasClean", converter: n2.converters.boolean, defaultValue: false }, { key: "code", converter: n2.converters["unsigned short"], defaultValue: 0 }, { key: "reason", converter: n2.converters.USVString, defaultValue: "" }]), n2.converters.ErrorEventInit = n2.dictionaryConverter([...c, { key: "message", converter: n2.converters.DOMString, defaultValue: "" }, { key: "filename", converter: n2.converters.USVString, defaultValue: "" }, { key: "lineno", converter: n2.converters["unsigned long"], defaultValue: 0 }, { key: "colno", converter: n2.converters["unsigned long"], defaultValue: 0 }, { key: "error", converter: n2.converters.any }]), e2.exports = { MessageEvent: s, CloseEvent: i, ErrorEvent: a };
  }