// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 85399 range:469192..474251
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
85399: (A, e, t) => {
  "use strict";
  const { pipeline: r } = t(57075), { fetching: s } = t(75319), { makeRequest: o } = t(78078), { webidl: n } = t(43290), { EventSourceStream: i } = t(51364), { parseMIMEType: a } = t(52603), { createFastMessageEvent: Q } = t(63315), { isNetworkError: g } = t(54768), { delay: E } = t(42136), { kEnumerableProperty: B } = t(55201), { environmentSettingsObject: c } = t(48215);
  let I = false;
  class C extends EventTarget {
    #_ = { open: null, error: null, message: null };
    #tA = null;
    #rA = false;
    #sA = 0;
    #oA = null;
    #nA = null;
    #M;
    #c;
    constructor(A2, e2 = {}) {
      super(), n.util.markAsUncloneable(this);
      const t2 = "EventSource constructor";
      n.argumentLengthCheck(arguments, 1, t2), I || (I = true, process.emitWarning("EventSource is experimental, expect them to change at any time.", { code: "UNDICI-ES" })), A2 = n.converters.USVString(A2, t2, "url"), e2 = n.converters.EventSourceInitDict(e2, t2, "eventSourceInitDict"), this.#M = e2.dispatcher, this.#c = { lastEventId: "", reconnectionTime: 3e3 };
      const r2 = c;
      let s2;
      try {
        s2 = new URL(A2, r2.settingsObject.baseUrl), this.#c.origin = s2.origin;
      } catch (A3) {
        throw new DOMException(A3, "SyntaxError");
      }
      this.#tA = s2.href;
      let i2 = "anonymous";
      e2.withCredentials && (i2 = "use-credentials", this.#rA = true);
      const a2 = { redirect: "follow", keepalive: true, mode: "cors", credentials: "anonymous" === i2 ? "same-origin" : "omit", referrer: "no-referrer" };
      a2.client = c.settingsObject, a2.headersList = [["accept", { name: "accept", value: "text/event-stream" }]], a2.cache = "no-store", a2.initiator = "other", a2.urlList = [new URL(this.#tA)], this.#oA = o(a2), this.#iA();
    }
    get readyState() {
      return this.#sA;
    }
    get url() {
      return this.#tA;
    }
    get withCredentials() {
      return this.#rA;
    }
    #iA() {
      if (2 === this.#sA) return;
      this.#sA = 0;
      const A2 = { request: this.#oA, dispatcher: this.#M };
      A2.processResponseEndOfBody = (A3) => {
        g(A3) && (this.dispatchEvent(new Event("error")), this.close()), this.#aA();
      }, A2.processResponse = (A3) => {
        if (g(A3)) return A3.aborted ? (this.close(), void this.dispatchEvent(new Event("error"))) : void this.#aA();
        const e2 = A3.headersList.get("content-type", true), t2 = null !== e2 ? a(e2) : "failure", s2 = "failure" !== t2 && "text/event-stream" === t2.essence;
        if (200 !== A3.status || false === s2) return this.close(), void this.dispatchEvent(new Event("error"));
        this.#sA = 1, this.dispatchEvent(new Event("open")), this.#c.origin = A3.urlList[A3.urlList.length - 1].origin;
        const o2 = new i({ eventSourceSettings: this.#c, push: (A4) => {
          this.dispatchEvent(Q(A4.type, A4.options));
        } });
        r(A3.body.stream, o2, (A4) => {
          false === A4?.aborted && (this.close(), this.dispatchEvent(new Event("error")));
        });
      }, this.#nA = s(A2);
    }
    async #aA() {
      2 !== this.#sA && (this.#sA = 0, this.dispatchEvent(new Event("error")), await E(this.#c.reconnectionTime), 0 === this.#sA && (this.#c.lastEventId.length && this.#oA.headersList.set("last-event-id", this.#c.lastEventId, true), this.#iA()));
    }
    close() {
      n.brandCheck(this, C), 2 !== this.#sA && (this.#sA = 2, this.#nA.abort(), this.#oA = null);
    }
    get onopen() {
      return this.#_.open;
    }
    set onopen(A2) {
      this.#_.open && this.removeEventListener("open", this.#_.open), "function" == typeof A2 ? (this.#_.open = A2, this.addEventListener("open", A2)) : this.#_.open = null;
    }
    get onmessage() {
      return this.#_.message;
    }
    set onmessage(A2) {
      this.#_.message && this.removeEventListener("message", this.#_.message), "function" == typeof A2 ? (this.#_.message = A2, this.addEventListener("message", A2)) : this.#_.message = null;
    }
    get onerror() {
      return this.#_.error;
    }
    set onerror(A2) {
      this.#_.error && this.removeEventListener("error", this.#_.error), "function" == typeof A2 ? (this.#_.error = A2, this.addEventListener("error", A2)) : this.#_.error = null;
    }
  }
  const h = { CONNECTING: { __proto__: null, configurable: false, enumerable: true, value: 0, writable: false }, OPEN: { __proto__: null, configurable: false, enumerable: true, value: 1, writable: false }, CLOSED: { __proto__: null, configurable: false, enumerable: true, value: 2, writable: false } };
  Object.defineProperties(C, h), Object.defineProperties(C.prototype, h), Object.defineProperties(C.prototype, { close: B, onerror: B, onmessage: B, onopen: B, readyState: B, url: B, withCredentials: B }), n.converters.EventSourceInitDict = n.dictionaryConverter([{ key: "withCredentials", converter: n.converters.boolean, defaultValue: () => false }, { key: "dispatcher", converter: n.converters.any }]), A.exports = { EventSource: C, defaultReconnectionTime: 3e3 };
}