// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 5747 range:467644..472334
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5747: (e2, A2, t2) => {
    "use strict";
    const { staticPropertyDescriptors: n2, readOperation: r2, fireAProgressEvent: o2 } = t2(2074), { kState: s, kError: a, kResult: i, kEvents: c, kAborted: l } = t2(3153), { webidl: g } = t2(8005), { kEnumerableProperty: E } = t2(9361);
    class u extends EventTarget {
      constructor() {
        super(), this[s] = "empty", this[i] = null, this[a] = null, this[c] = { loadend: null, error: null, abort: null, load: null, progress: null, loadstart: null };
      }
      readAsArrayBuffer(e3) {
        g.brandCheck(this, u), g.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsArrayBuffer" }), e3 = g.converters.Blob(e3, { strict: false }), r2(this, e3, "ArrayBuffer");
      }
      readAsBinaryString(e3) {
        g.brandCheck(this, u), g.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsBinaryString" }), e3 = g.converters.Blob(e3, { strict: false }), r2(this, e3, "BinaryString");
      }
      readAsText(e3, A3 = void 0) {
        g.brandCheck(this, u), g.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsText" }), e3 = g.converters.Blob(e3, { strict: false }), void 0 !== A3 && (A3 = g.converters.DOMString(A3)), r2(this, e3, "Text", A3);
      }
      readAsDataURL(e3) {
        g.brandCheck(this, u), g.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsDataURL" }), e3 = g.converters.Blob(e3, { strict: false }), r2(this, e3, "DataURL");
      }
      abort() {
        "empty" !== this[s] && "done" !== this[s] ? ("loading" === this[s] && (this[s] = "done", this[i] = null), this[l] = true, o2("abort", this), "loading" !== this[s] && o2("loadend", this)) : this[i] = null;
      }
      get readyState() {
        switch (g.brandCheck(this, u), this[s]) {
          case "empty":
            return this.EMPTY;
          case "loading":
            return this.LOADING;
          case "done":
            return this.DONE;
        }
      }
      get result() {
        return g.brandCheck(this, u), this[i];
      }
      get error() {
        return g.brandCheck(this, u), this[a];
      }
      get onloadend() {
        return g.brandCheck(this, u), this[c].loadend;
      }
      set onloadend(e3) {
        g.brandCheck(this, u), this[c].loadend && this.removeEventListener("loadend", this[c].loadend), "function" == typeof e3 ? (this[c].loadend = e3, this.addEventListener("loadend", e3)) : this[c].loadend = null;
      }
      get onerror() {
        return g.brandCheck(this, u), this[c].error;
      }
      set onerror(e3) {
        g.brandCheck(this, u), this[c].error && this.removeEventListener("error", this[c].error), "function" == typeof e3 ? (this[c].error = e3, this.addEventListener("error", e3)) : this[c].error = null;
      }
      get onloadstart() {
        return g.brandCheck(this, u), this[c].loadstart;
      }
      set onloadstart(e3) {
        g.brandCheck(this, u), this[c].loadstart && this.removeEventListener("loadstart", this[c].loadstart), "function" == typeof e3 ? (this[c].loadstart = e3, this.addEventListener("loadstart", e3)) : this[c].loadstart = null;
      }
      get onprogress() {
        return g.brandCheck(this, u), this[c].progress;
      }
      set onprogress(e3) {
        g.brandCheck(this, u), this[c].progress && this.removeEventListener("progress", this[c].progress), "function" == typeof e3 ? (this[c].progress = e3, this.addEventListener("progress", e3)) : this[c].progress = null;
      }
      get onload() {
        return g.brandCheck(this, u), this[c].load;
      }
      set onload(e3) {
        g.brandCheck(this, u), this[c].load && this.removeEventListener("load", this[c].load), "function" == typeof e3 ? (this[c].load = e3, this.addEventListener("load", e3)) : this[c].load = null;
      }
      get onabort() {
        return g.brandCheck(this, u), this[c].abort;
      }
      set onabort(e3) {
        g.brandCheck(this, u), this[c].abort && this.removeEventListener("abort", this[c].abort), "function" == typeof e3 ? (this[c].abort = e3, this.addEventListener("abort", e3)) : this[c].abort = null;
      }
    }
    u.EMPTY = u.prototype.EMPTY = 0, u.LOADING = u.prototype.LOADING = 1, u.DONE = u.prototype.DONE = 2, Object.defineProperties(u.prototype, { EMPTY: n2, LOADING: n2, DONE: n2, readAsArrayBuffer: E, readAsBinaryString: E, readAsText: E, readAsDataURL: E, abort: E, readyState: E, result: E, error: E, onloadstart: E, onprogress: E, onload: E, onabort: E, onerror: E, onloadend: E, [Symbol.toStringTag]: { value: "FileReader", writable: false, enumerable: false, configurable: true } }), Object.defineProperties(u, { EMPTY: n2, LOADING: n2, DONE: n2 }), e2.exports = { FileReader: u };
  }