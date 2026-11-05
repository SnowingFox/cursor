// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 5747 range:569138..573828
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5747: (e2, t2, A2) => {
    "use strict";
    const { staticPropertyDescriptors: n2, readOperation: r2, fireAProgressEvent: o2 } = A2(2074), { kState: s, kError: i, kResult: a, kEvents: c, kAborted: l } = A2(3153), { webidl: u } = A2(8005), { kEnumerableProperty: g } = A2(9361);
    class E extends EventTarget {
      constructor() {
        super(), this[s] = "empty", this[a] = null, this[i] = null, this[c] = { loadend: null, error: null, abort: null, load: null, progress: null, loadstart: null };
      }
      readAsArrayBuffer(e3) {
        u.brandCheck(this, E), u.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsArrayBuffer" }), e3 = u.converters.Blob(e3, { strict: false }), r2(this, e3, "ArrayBuffer");
      }
      readAsBinaryString(e3) {
        u.brandCheck(this, E), u.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsBinaryString" }), e3 = u.converters.Blob(e3, { strict: false }), r2(this, e3, "BinaryString");
      }
      readAsText(e3, t3 = void 0) {
        u.brandCheck(this, E), u.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsText" }), e3 = u.converters.Blob(e3, { strict: false }), void 0 !== t3 && (t3 = u.converters.DOMString(t3)), r2(this, e3, "Text", t3);
      }
      readAsDataURL(e3) {
        u.brandCheck(this, E), u.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsDataURL" }), e3 = u.converters.Blob(e3, { strict: false }), r2(this, e3, "DataURL");
      }
      abort() {
        "empty" !== this[s] && "done" !== this[s] ? ("loading" === this[s] && (this[s] = "done", this[a] = null), this[l] = true, o2("abort", this), "loading" !== this[s] && o2("loadend", this)) : this[a] = null;
      }
      get readyState() {
        switch (u.brandCheck(this, E), this[s]) {
          case "empty":
            return this.EMPTY;
          case "loading":
            return this.LOADING;
          case "done":
            return this.DONE;
        }
      }
      get result() {
        return u.brandCheck(this, E), this[a];
      }
      get error() {
        return u.brandCheck(this, E), this[i];
      }
      get onloadend() {
        return u.brandCheck(this, E), this[c].loadend;
      }
      set onloadend(e3) {
        u.brandCheck(this, E), this[c].loadend && this.removeEventListener("loadend", this[c].loadend), "function" == typeof e3 ? (this[c].loadend = e3, this.addEventListener("loadend", e3)) : this[c].loadend = null;
      }
      get onerror() {
        return u.brandCheck(this, E), this[c].error;
      }
      set onerror(e3) {
        u.brandCheck(this, E), this[c].error && this.removeEventListener("error", this[c].error), "function" == typeof e3 ? (this[c].error = e3, this.addEventListener("error", e3)) : this[c].error = null;
      }
      get onloadstart() {
        return u.brandCheck(this, E), this[c].loadstart;
      }
      set onloadstart(e3) {
        u.brandCheck(this, E), this[c].loadstart && this.removeEventListener("loadstart", this[c].loadstart), "function" == typeof e3 ? (this[c].loadstart = e3, this.addEventListener("loadstart", e3)) : this[c].loadstart = null;
      }
      get onprogress() {
        return u.brandCheck(this, E), this[c].progress;
      }
      set onprogress(e3) {
        u.brandCheck(this, E), this[c].progress && this.removeEventListener("progress", this[c].progress), "function" == typeof e3 ? (this[c].progress = e3, this.addEventListener("progress", e3)) : this[c].progress = null;
      }
      get onload() {
        return u.brandCheck(this, E), this[c].load;
      }
      set onload(e3) {
        u.brandCheck(this, E), this[c].load && this.removeEventListener("load", this[c].load), "function" == typeof e3 ? (this[c].load = e3, this.addEventListener("load", e3)) : this[c].load = null;
      }
      get onabort() {
        return u.brandCheck(this, E), this[c].abort;
      }
      set onabort(e3) {
        u.brandCheck(this, E), this[c].abort && this.removeEventListener("abort", this[c].abort), "function" == typeof e3 ? (this[c].abort = e3, this.addEventListener("abort", e3)) : this[c].abort = null;
      }
    }
    E.EMPTY = E.prototype.EMPTY = 0, E.LOADING = E.prototype.LOADING = 1, E.DONE = E.prototype.DONE = 2, Object.defineProperties(E.prototype, { EMPTY: n2, LOADING: n2, DONE: n2, readAsArrayBuffer: g, readAsBinaryString: g, readAsText: g, readAsDataURL: g, abort: g, readyState: g, result: g, error: g, onloadstart: g, onprogress: g, onload: g, onabort: g, onerror: g, onloadend: g, [Symbol.toStringTag]: { value: "FileReader", writable: false, enumerable: false, configurable: true } }), Object.defineProperties(E, { EMPTY: n2, LOADING: n2, DONE: n2 }), e2.exports = { FileReader: E };
  }