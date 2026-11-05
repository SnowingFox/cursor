// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 7884 range:18646..23154
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7884: (A, e, t) => {
  "use strict";
  const { staticPropertyDescriptors: r, readOperation: s, fireAProgressEvent: o } = t(21289), { kState: n, kError: i, kResult: a, kEvents: Q, kAborted: g } = t(47192), { webidl: E } = t(43290), { kEnumerableProperty: B } = t(55201);
  class c extends EventTarget {
    constructor() {
      super(), this[n] = "empty", this[a] = null, this[i] = null, this[Q] = { loadend: null, error: null, abort: null, load: null, progress: null, loadstart: null };
    }
    readAsArrayBuffer(A2) {
      E.brandCheck(this, c), E.argumentLengthCheck(arguments, 1, "FileReader.readAsArrayBuffer"), A2 = E.converters.Blob(A2, { strict: false }), s(this, A2, "ArrayBuffer");
    }
    readAsBinaryString(A2) {
      E.brandCheck(this, c), E.argumentLengthCheck(arguments, 1, "FileReader.readAsBinaryString"), A2 = E.converters.Blob(A2, { strict: false }), s(this, A2, "BinaryString");
    }
    readAsText(A2, e2 = void 0) {
      E.brandCheck(this, c), E.argumentLengthCheck(arguments, 1, "FileReader.readAsText"), A2 = E.converters.Blob(A2, { strict: false }), void 0 !== e2 && (e2 = E.converters.DOMString(e2, "FileReader.readAsText", "encoding")), s(this, A2, "Text", e2);
    }
    readAsDataURL(A2) {
      E.brandCheck(this, c), E.argumentLengthCheck(arguments, 1, "FileReader.readAsDataURL"), A2 = E.converters.Blob(A2, { strict: false }), s(this, A2, "DataURL");
    }
    abort() {
      "empty" !== this[n] && "done" !== this[n] ? ("loading" === this[n] && (this[n] = "done", this[a] = null), this[g] = true, o("abort", this), "loading" !== this[n] && o("loadend", this)) : this[a] = null;
    }
    get readyState() {
      switch (E.brandCheck(this, c), this[n]) {
        case "empty":
          return this.EMPTY;
        case "loading":
          return this.LOADING;
        case "done":
          return this.DONE;
      }
    }
    get result() {
      return E.brandCheck(this, c), this[a];
    }
    get error() {
      return E.brandCheck(this, c), this[i];
    }
    get onloadend() {
      return E.brandCheck(this, c), this[Q].loadend;
    }
    set onloadend(A2) {
      E.brandCheck(this, c), this[Q].loadend && this.removeEventListener("loadend", this[Q].loadend), "function" == typeof A2 ? (this[Q].loadend = A2, this.addEventListener("loadend", A2)) : this[Q].loadend = null;
    }
    get onerror() {
      return E.brandCheck(this, c), this[Q].error;
    }
    set onerror(A2) {
      E.brandCheck(this, c), this[Q].error && this.removeEventListener("error", this[Q].error), "function" == typeof A2 ? (this[Q].error = A2, this.addEventListener("error", A2)) : this[Q].error = null;
    }
    get onloadstart() {
      return E.brandCheck(this, c), this[Q].loadstart;
    }
    set onloadstart(A2) {
      E.brandCheck(this, c), this[Q].loadstart && this.removeEventListener("loadstart", this[Q].loadstart), "function" == typeof A2 ? (this[Q].loadstart = A2, this.addEventListener("loadstart", A2)) : this[Q].loadstart = null;
    }
    get onprogress() {
      return E.brandCheck(this, c), this[Q].progress;
    }
    set onprogress(A2) {
      E.brandCheck(this, c), this[Q].progress && this.removeEventListener("progress", this[Q].progress), "function" == typeof A2 ? (this[Q].progress = A2, this.addEventListener("progress", A2)) : this[Q].progress = null;
    }
    get onload() {
      return E.brandCheck(this, c), this[Q].load;
    }
    set onload(A2) {
      E.brandCheck(this, c), this[Q].load && this.removeEventListener("load", this[Q].load), "function" == typeof A2 ? (this[Q].load = A2, this.addEventListener("load", A2)) : this[Q].load = null;
    }
    get onabort() {
      return E.brandCheck(this, c), this[Q].abort;
    }
    set onabort(A2) {
      E.brandCheck(this, c), this[Q].abort && this.removeEventListener("abort", this[Q].abort), "function" == typeof A2 ? (this[Q].abort = A2, this.addEventListener("abort", A2)) : this[Q].abort = null;
    }
  }
  c.EMPTY = c.prototype.EMPTY = 0, c.LOADING = c.prototype.LOADING = 1, c.DONE = c.prototype.DONE = 2, Object.defineProperties(c.prototype, { EMPTY: r, LOADING: r, DONE: r, readAsArrayBuffer: B, readAsBinaryString: B, readAsText: B, readAsDataURL: B, abort: B, readyState: B, result: B, error: B, onloadstart: B, onprogress: B, onload: B, onabort: B, onerror: B, onloadend: B, [Symbol.toStringTag]: { value: "FileReader", writable: false, enumerable: false, configurable: true } }), Object.defineProperties(c, { EMPTY: r, LOADING: r, DONE: r }), A.exports = { FileReader: c };
}