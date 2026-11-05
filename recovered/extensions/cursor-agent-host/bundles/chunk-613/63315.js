// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 63315 range:373546..378672
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
63315: (A, e, t) => {
  "use strict";
  const { webidl: r } = t(43290), { kEnumerableProperty: s } = t(55201), { kConstruct: o } = t(76992), { MessagePort: n } = t(75919);
  class i extends Event {
    #X;
    constructor(A2, e2 = {}) {
      if (A2 === o) return super(arguments[1], arguments[2]), void r.util.markAsUncloneable(this);
      const t2 = "MessageEvent constructor";
      r.argumentLengthCheck(arguments, 1, t2), super(A2 = r.converters.DOMString(A2, t2, "type"), e2 = r.converters.MessageEventInit(e2, t2, "eventInitDict")), this.#X = e2, r.util.markAsUncloneable(this);
    }
    get data() {
      return r.brandCheck(this, i), this.#X.data;
    }
    get origin() {
      return r.brandCheck(this, i), this.#X.origin;
    }
    get lastEventId() {
      return r.brandCheck(this, i), this.#X.lastEventId;
    }
    get source() {
      return r.brandCheck(this, i), this.#X.source;
    }
    get ports() {
      return r.brandCheck(this, i), Object.isFrozen(this.#X.ports) || Object.freeze(this.#X.ports), this.#X.ports;
    }
    initMessageEvent(A2, e2 = false, t2 = false, s2 = null, o2 = "", n2 = "", a2 = null, Q2 = []) {
      return r.brandCheck(this, i), r.argumentLengthCheck(arguments, 1, "MessageEvent.initMessageEvent"), new i(A2, { bubbles: e2, cancelable: t2, data: s2, origin: o2, lastEventId: n2, source: a2, ports: Q2 });
    }
    static createFastMessageEvent(A2, e2) {
      const t2 = new i(o, A2, e2);
      return t2.#X = e2, t2.#X.data ??= null, t2.#X.origin ??= "", t2.#X.lastEventId ??= "", t2.#X.source ??= null, t2.#X.ports ??= [], t2;
    }
  }
  const { createFastMessageEvent: a } = i;
  delete i.createFastMessageEvent;
  class Q extends Event {
    #X;
    constructor(A2, e2 = {}) {
      const t2 = "CloseEvent constructor";
      r.argumentLengthCheck(arguments, 1, t2), super(A2 = r.converters.DOMString(A2, t2, "type"), e2 = r.converters.CloseEventInit(e2)), this.#X = e2, r.util.markAsUncloneable(this);
    }
    get wasClean() {
      return r.brandCheck(this, Q), this.#X.wasClean;
    }
    get code() {
      return r.brandCheck(this, Q), this.#X.code;
    }
    get reason() {
      return r.brandCheck(this, Q), this.#X.reason;
    }
  }
  class g extends Event {
    #X;
    constructor(A2, e2) {
      const t2 = "ErrorEvent constructor";
      r.argumentLengthCheck(arguments, 1, t2), super(A2, e2), r.util.markAsUncloneable(this), A2 = r.converters.DOMString(A2, t2, "type"), e2 = r.converters.ErrorEventInit(e2 ?? {}), this.#X = e2;
    }
    get message() {
      return r.brandCheck(this, g), this.#X.message;
    }
    get filename() {
      return r.brandCheck(this, g), this.#X.filename;
    }
    get lineno() {
      return r.brandCheck(this, g), this.#X.lineno;
    }
    get colno() {
      return r.brandCheck(this, g), this.#X.colno;
    }
    get error() {
      return r.brandCheck(this, g), this.#X.error;
    }
  }
  Object.defineProperties(i.prototype, { [Symbol.toStringTag]: { value: "MessageEvent", configurable: true }, data: s, origin: s, lastEventId: s, source: s, ports: s, initMessageEvent: s }), Object.defineProperties(Q.prototype, { [Symbol.toStringTag]: { value: "CloseEvent", configurable: true }, reason: s, code: s, wasClean: s }), Object.defineProperties(g.prototype, { [Symbol.toStringTag]: { value: "ErrorEvent", configurable: true }, message: s, filename: s, lineno: s, colno: s, error: s }), r.converters.MessagePort = r.interfaceConverter(n), r.converters["sequence<MessagePort>"] = r.sequenceConverter(r.converters.MessagePort);
  const E = [{ key: "bubbles", converter: r.converters.boolean, defaultValue: () => false }, { key: "cancelable", converter: r.converters.boolean, defaultValue: () => false }, { key: "composed", converter: r.converters.boolean, defaultValue: () => false }];
  r.converters.MessageEventInit = r.dictionaryConverter([...E, { key: "data", converter: r.converters.any, defaultValue: () => null }, { key: "origin", converter: r.converters.USVString, defaultValue: () => "" }, { key: "lastEventId", converter: r.converters.DOMString, defaultValue: () => "" }, { key: "source", converter: r.nullableConverter(r.converters.MessagePort), defaultValue: () => null }, { key: "ports", converter: r.converters["sequence<MessagePort>"], defaultValue: () => new Array(0) }]), r.converters.CloseEventInit = r.dictionaryConverter([...E, { key: "wasClean", converter: r.converters.boolean, defaultValue: () => false }, { key: "code", converter: r.converters["unsigned short"], defaultValue: () => 0 }, { key: "reason", converter: r.converters.USVString, defaultValue: () => "" }]), r.converters.ErrorEventInit = r.dictionaryConverter([...E, { key: "message", converter: r.converters.DOMString, defaultValue: () => "" }, { key: "filename", converter: r.converters.USVString, defaultValue: () => "" }, { key: "lineno", converter: r.converters["unsigned long"], defaultValue: () => 0 }, { key: "colno", converter: r.converters["unsigned long"], defaultValue: () => 0 }, { key: "error", converter: r.converters.any }]), A.exports = { MessageEvent: i, CloseEvent: Q, ErrorEvent: g, createFastMessageEvent: a };
}