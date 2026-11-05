// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 31448 range:5080085..5084643
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
31448: (e, t, r) => {
    "use strict";
    const { webidl: n } = r(18193), { kEnumerableProperty: s } = r(83589), { MessagePort: o } = r(28167);
    class i extends Event {
      #f;
      constructor(e2, t2 = {}) {
        n.argumentLengthCheck(arguments, 1, { header: "MessageEvent constructor" }), super(e2 = n.converters.DOMString(e2), t2 = n.converters.MessageEventInit(t2)), this.#f = t2;
      }
      get data() {
        return n.brandCheck(this, i), this.#f.data;
      }
      get origin() {
        return n.brandCheck(this, i), this.#f.origin;
      }
      get lastEventId() {
        return n.brandCheck(this, i), this.#f.lastEventId;
      }
      get source() {
        return n.brandCheck(this, i), this.#f.source;
      }
      get ports() {
        return n.brandCheck(this, i), Object.isFrozen(this.#f.ports) || Object.freeze(this.#f.ports), this.#f.ports;
      }
      initMessageEvent(e2, t2 = false, r2 = false, s2 = null, o2 = "", a2 = "", c2 = null, l2 = []) {
        return n.brandCheck(this, i), n.argumentLengthCheck(arguments, 1, { header: "MessageEvent.initMessageEvent" }), new i(e2, { bubbles: t2, cancelable: r2, data: s2, origin: o2, lastEventId: a2, source: c2, ports: l2 });
      }
    }
    class a extends Event {
      #f;
      constructor(e2, t2 = {}) {
        n.argumentLengthCheck(arguments, 1, { header: "CloseEvent constructor" }), super(e2 = n.converters.DOMString(e2), t2 = n.converters.CloseEventInit(t2)), this.#f = t2;
      }
      get wasClean() {
        return n.brandCheck(this, a), this.#f.wasClean;
      }
      get code() {
        return n.brandCheck(this, a), this.#f.code;
      }
      get reason() {
        return n.brandCheck(this, a), this.#f.reason;
      }
    }
    class c extends Event {
      #f;
      constructor(e2, t2) {
        n.argumentLengthCheck(arguments, 1, { header: "ErrorEvent constructor" }), super(e2, t2), e2 = n.converters.DOMString(e2), t2 = n.converters.ErrorEventInit(t2 ?? {}), this.#f = t2;
      }
      get message() {
        return n.brandCheck(this, c), this.#f.message;
      }
      get filename() {
        return n.brandCheck(this, c), this.#f.filename;
      }
      get lineno() {
        return n.brandCheck(this, c), this.#f.lineno;
      }
      get colno() {
        return n.brandCheck(this, c), this.#f.colno;
      }
      get error() {
        return n.brandCheck(this, c), this.#f.error;
      }
    }
    Object.defineProperties(i.prototype, { [Symbol.toStringTag]: { value: "MessageEvent", configurable: true }, data: s, origin: s, lastEventId: s, source: s, ports: s, initMessageEvent: s }), Object.defineProperties(a.prototype, { [Symbol.toStringTag]: { value: "CloseEvent", configurable: true }, reason: s, code: s, wasClean: s }), Object.defineProperties(c.prototype, { [Symbol.toStringTag]: { value: "ErrorEvent", configurable: true }, message: s, filename: s, lineno: s, colno: s, error: s }), n.converters.MessagePort = n.interfaceConverter(o), n.converters["sequence<MessagePort>"] = n.sequenceConverter(n.converters.MessagePort);
    const l = [{ key: "bubbles", converter: n.converters.boolean, defaultValue: false }, { key: "cancelable", converter: n.converters.boolean, defaultValue: false }, { key: "composed", converter: n.converters.boolean, defaultValue: false }];
    n.converters.MessageEventInit = n.dictionaryConverter([...l, { key: "data", converter: n.converters.any, defaultValue: null }, { key: "origin", converter: n.converters.USVString, defaultValue: "" }, { key: "lastEventId", converter: n.converters.DOMString, defaultValue: "" }, { key: "source", converter: n.nullableConverter(n.converters.MessagePort), defaultValue: null }, { key: "ports", converter: n.converters["sequence<MessagePort>"], get defaultValue() {
      return [];
    } }]), n.converters.CloseEventInit = n.dictionaryConverter([...l, { key: "wasClean", converter: n.converters.boolean, defaultValue: false }, { key: "code", converter: n.converters["unsigned short"], defaultValue: 0 }, { key: "reason", converter: n.converters.USVString, defaultValue: "" }]), n.converters.ErrorEventInit = n.dictionaryConverter([...l, { key: "message", converter: n.converters.DOMString, defaultValue: "" }, { key: "filename", converter: n.converters.USVString, defaultValue: "" }, { key: "lineno", converter: n.converters["unsigned long"], defaultValue: 0 }, { key: "colno", converter: n.converters["unsigned long"], defaultValue: 0 }, { key: "error", converter: n.converters.any }]), e.exports = { MessageEvent: i, CloseEvent: a, ErrorEvent: c };
  }