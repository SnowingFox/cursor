// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 2740 range:228523..233154
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2740: (e2, n2, t2) => {
    "use strict";
    const { webidl: a2 } = t2(8005), { kEnumerableProperty: s2 } = t2(9361), { MessagePort: o2 } = t2(8167);
    class r extends Event {
      #e;
      constructor(e3, n3 = {}) {
        a2.argumentLengthCheck(arguments, 1, { header: "MessageEvent constructor" }), super(e3 = a2.converters.DOMString(e3), n3 = a2.converters.MessageEventInit(n3)), this.#e = n3;
      }
      get data() {
        return a2.brandCheck(this, r), this.#e.data;
      }
      get origin() {
        return a2.brandCheck(this, r), this.#e.origin;
      }
      get lastEventId() {
        return a2.brandCheck(this, r), this.#e.lastEventId;
      }
      get source() {
        return a2.brandCheck(this, r), this.#e.source;
      }
      get ports() {
        return a2.brandCheck(this, r), Object.isFrozen(this.#e.ports) || Object.freeze(this.#e.ports), this.#e.ports;
      }
      initMessageEvent(e3, n3 = false, t3 = false, s3 = null, o3 = "", i2 = "", A2 = null, c2 = []) {
        return a2.brandCheck(this, r), a2.argumentLengthCheck(arguments, 1, { header: "MessageEvent.initMessageEvent" }), new r(e3, { bubbles: n3, cancelable: t3, data: s3, origin: o3, lastEventId: i2, source: A2, ports: c2 });
      }
    }
    class i extends Event {
      #e;
      constructor(e3, n3 = {}) {
        a2.argumentLengthCheck(arguments, 1, { header: "CloseEvent constructor" }), super(e3 = a2.converters.DOMString(e3), n3 = a2.converters.CloseEventInit(n3)), this.#e = n3;
      }
      get wasClean() {
        return a2.brandCheck(this, i), this.#e.wasClean;
      }
      get code() {
        return a2.brandCheck(this, i), this.#e.code;
      }
      get reason() {
        return a2.brandCheck(this, i), this.#e.reason;
      }
    }
    class A extends Event {
      #e;
      constructor(e3, n3) {
        a2.argumentLengthCheck(arguments, 1, { header: "ErrorEvent constructor" }), super(e3, n3), e3 = a2.converters.DOMString(e3), n3 = a2.converters.ErrorEventInit(n3 ?? {}), this.#e = n3;
      }
      get message() {
        return a2.brandCheck(this, A), this.#e.message;
      }
      get filename() {
        return a2.brandCheck(this, A), this.#e.filename;
      }
      get lineno() {
        return a2.brandCheck(this, A), this.#e.lineno;
      }
      get colno() {
        return a2.brandCheck(this, A), this.#e.colno;
      }
      get error() {
        return a2.brandCheck(this, A), this.#e.error;
      }
    }
    Object.defineProperties(r.prototype, { [Symbol.toStringTag]: { value: "MessageEvent", configurable: true }, data: s2, origin: s2, lastEventId: s2, source: s2, ports: s2, initMessageEvent: s2 }), Object.defineProperties(i.prototype, { [Symbol.toStringTag]: { value: "CloseEvent", configurable: true }, reason: s2, code: s2, wasClean: s2 }), Object.defineProperties(A.prototype, { [Symbol.toStringTag]: { value: "ErrorEvent", configurable: true }, message: s2, filename: s2, lineno: s2, colno: s2, error: s2 }), a2.converters.MessagePort = a2.interfaceConverter(o2), a2.converters["sequence<MessagePort>"] = a2.sequenceConverter(a2.converters.MessagePort);
    const c = [{ key: "bubbles", converter: a2.converters.boolean, defaultValue: false }, { key: "cancelable", converter: a2.converters.boolean, defaultValue: false }, { key: "composed", converter: a2.converters.boolean, defaultValue: false }];
    a2.converters.MessageEventInit = a2.dictionaryConverter([...c, { key: "data", converter: a2.converters.any, defaultValue: null }, { key: "origin", converter: a2.converters.USVString, defaultValue: "" }, { key: "lastEventId", converter: a2.converters.DOMString, defaultValue: "" }, { key: "source", converter: a2.nullableConverter(a2.converters.MessagePort), defaultValue: null }, { key: "ports", converter: a2.converters["sequence<MessagePort>"], get defaultValue() {
      return [];
    } }]), a2.converters.CloseEventInit = a2.dictionaryConverter([...c, { key: "wasClean", converter: a2.converters.boolean, defaultValue: false }, { key: "code", converter: a2.converters["unsigned short"], defaultValue: 0 }, { key: "reason", converter: a2.converters.USVString, defaultValue: "" }]), a2.converters.ErrorEventInit = a2.dictionaryConverter([...c, { key: "message", converter: a2.converters.DOMString, defaultValue: "" }, { key: "filename", converter: a2.converters.USVString, defaultValue: "" }, { key: "lineno", converter: a2.converters["unsigned long"], defaultValue: 0 }, { key: "colno", converter: a2.converters["unsigned long"], defaultValue: 0 }, { key: "error", converter: a2.converters.any }]), e2.exports = { MessageEvent: r, CloseEvent: i, ErrorEvent: A };
  }