// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 2740 range:224494..229141
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2740: (e2, n2, a2) => {
    "use strict";
    const { webidl: t2 } = a2(8005), { kEnumerableProperty: s2 } = a2(9361), { MessagePort: o2 } = a2(8167);
    class r2 extends Event {
      #e;
      constructor(e3, n3 = {}) {
        t2.argumentLengthCheck(arguments, 1, { header: "MessageEvent constructor" }), super(e3 = t2.converters.DOMString(e3), n3 = t2.converters.MessageEventInit(n3)), this.#e = n3;
      }
      get data() {
        return t2.brandCheck(this, r2), this.#e.data;
      }
      get origin() {
        return t2.brandCheck(this, r2), this.#e.origin;
      }
      get lastEventId() {
        return t2.brandCheck(this, r2), this.#e.lastEventId;
      }
      get source() {
        return t2.brandCheck(this, r2), this.#e.source;
      }
      get ports() {
        return t2.brandCheck(this, r2), Object.isFrozen(this.#e.ports) || Object.freeze(this.#e.ports), this.#e.ports;
      }
      initMessageEvent(e3, n3 = false, a3 = false, s3 = null, o3 = "", i3 = "", A2 = null, l2 = []) {
        return t2.brandCheck(this, r2), t2.argumentLengthCheck(arguments, 1, { header: "MessageEvent.initMessageEvent" }), new r2(e3, { bubbles: n3, cancelable: a3, data: s3, origin: o3, lastEventId: i3, source: A2, ports: l2 });
      }
    }
    class i2 extends Event {
      #e;
      constructor(e3, n3 = {}) {
        t2.argumentLengthCheck(arguments, 1, { header: "CloseEvent constructor" }), super(e3 = t2.converters.DOMString(e3), n3 = t2.converters.CloseEventInit(n3)), this.#e = n3;
      }
      get wasClean() {
        return t2.brandCheck(this, i2), this.#e.wasClean;
      }
      get code() {
        return t2.brandCheck(this, i2), this.#e.code;
      }
      get reason() {
        return t2.brandCheck(this, i2), this.#e.reason;
      }
    }
    class A extends Event {
      #e;
      constructor(e3, n3) {
        t2.argumentLengthCheck(arguments, 1, { header: "ErrorEvent constructor" }), super(e3, n3), e3 = t2.converters.DOMString(e3), n3 = t2.converters.ErrorEventInit(n3 ?? {}), this.#e = n3;
      }
      get message() {
        return t2.brandCheck(this, A), this.#e.message;
      }
      get filename() {
        return t2.brandCheck(this, A), this.#e.filename;
      }
      get lineno() {
        return t2.brandCheck(this, A), this.#e.lineno;
      }
      get colno() {
        return t2.brandCheck(this, A), this.#e.colno;
      }
      get error() {
        return t2.brandCheck(this, A), this.#e.error;
      }
    }
    Object.defineProperties(r2.prototype, { [Symbol.toStringTag]: { value: "MessageEvent", configurable: true }, data: s2, origin: s2, lastEventId: s2, source: s2, ports: s2, initMessageEvent: s2 }), Object.defineProperties(i2.prototype, { [Symbol.toStringTag]: { value: "CloseEvent", configurable: true }, reason: s2, code: s2, wasClean: s2 }), Object.defineProperties(A.prototype, { [Symbol.toStringTag]: { value: "ErrorEvent", configurable: true }, message: s2, filename: s2, lineno: s2, colno: s2, error: s2 }), t2.converters.MessagePort = t2.interfaceConverter(o2), t2.converters["sequence<MessagePort>"] = t2.sequenceConverter(t2.converters.MessagePort);
    const l = [{ key: "bubbles", converter: t2.converters.boolean, defaultValue: false }, { key: "cancelable", converter: t2.converters.boolean, defaultValue: false }, { key: "composed", converter: t2.converters.boolean, defaultValue: false }];
    t2.converters.MessageEventInit = t2.dictionaryConverter([...l, { key: "data", converter: t2.converters.any, defaultValue: null }, { key: "origin", converter: t2.converters.USVString, defaultValue: "" }, { key: "lastEventId", converter: t2.converters.DOMString, defaultValue: "" }, { key: "source", converter: t2.nullableConverter(t2.converters.MessagePort), defaultValue: null }, { key: "ports", converter: t2.converters["sequence<MessagePort>"], get defaultValue() {
      return [];
    } }]), t2.converters.CloseEventInit = t2.dictionaryConverter([...l, { key: "wasClean", converter: t2.converters.boolean, defaultValue: false }, { key: "code", converter: t2.converters["unsigned short"], defaultValue: 0 }, { key: "reason", converter: t2.converters.USVString, defaultValue: "" }]), t2.converters.ErrorEventInit = t2.dictionaryConverter([...l, { key: "message", converter: t2.converters.DOMString, defaultValue: "" }, { key: "filename", converter: t2.converters.USVString, defaultValue: "" }, { key: "lineno", converter: t2.converters["unsigned long"], defaultValue: 0 }, { key: "colno", converter: t2.converters["unsigned long"], defaultValue: 0 }, { key: "error", converter: t2.converters.any }]), e2.exports = { MessageEvent: r2, CloseEvent: i2, ErrorEvent: A };
  }