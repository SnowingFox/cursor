// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 5747 range:468111..472812
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5747: (e2, n2, a2) => {
    "use strict";
    const { staticPropertyDescriptors: t2, readOperation: s2, fireAProgressEvent: o2 } = a2(2074), { kState: r2, kError: i2, kResult: A, kEvents: l, kAborted: c } = a2(3153), { webidl: m } = a2(8005), { kEnumerableProperty: d } = a2(9361);
    class g extends EventTarget {
      constructor() {
        super(), this[r2] = "empty", this[A] = null, this[i2] = null, this[l] = { loadend: null, error: null, abort: null, load: null, progress: null, loadstart: null };
      }
      readAsArrayBuffer(e3) {
        m.brandCheck(this, g), m.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsArrayBuffer" }), e3 = m.converters.Blob(e3, { strict: false }), s2(this, e3, "ArrayBuffer");
      }
      readAsBinaryString(e3) {
        m.brandCheck(this, g), m.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsBinaryString" }), e3 = m.converters.Blob(e3, { strict: false }), s2(this, e3, "BinaryString");
      }
      readAsText(e3, n3 = void 0) {
        m.brandCheck(this, g), m.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsText" }), e3 = m.converters.Blob(e3, { strict: false }), void 0 !== n3 && (n3 = m.converters.DOMString(n3)), s2(this, e3, "Text", n3);
      }
      readAsDataURL(e3) {
        m.brandCheck(this, g), m.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsDataURL" }), e3 = m.converters.Blob(e3, { strict: false }), s2(this, e3, "DataURL");
      }
      abort() {
        "empty" !== this[r2] && "done" !== this[r2] ? ("loading" === this[r2] && (this[r2] = "done", this[A] = null), this[c] = true, o2("abort", this), "loading" !== this[r2] && o2("loadend", this)) : this[A] = null;
      }
      get readyState() {
        switch (m.brandCheck(this, g), this[r2]) {
          case "empty":
            return this.EMPTY;
          case "loading":
            return this.LOADING;
          case "done":
            return this.DONE;
        }
      }
      get result() {
        return m.brandCheck(this, g), this[A];
      }
      get error() {
        return m.brandCheck(this, g), this[i2];
      }
      get onloadend() {
        return m.brandCheck(this, g), this[l].loadend;
      }
      set onloadend(e3) {
        m.brandCheck(this, g), this[l].loadend && this.removeEventListener("loadend", this[l].loadend), "function" == typeof e3 ? (this[l].loadend = e3, this.addEventListener("loadend", e3)) : this[l].loadend = null;
      }
      get onerror() {
        return m.brandCheck(this, g), this[l].error;
      }
      set onerror(e3) {
        m.brandCheck(this, g), this[l].error && this.removeEventListener("error", this[l].error), "function" == typeof e3 ? (this[l].error = e3, this.addEventListener("error", e3)) : this[l].error = null;
      }
      get onloadstart() {
        return m.brandCheck(this, g), this[l].loadstart;
      }
      set onloadstart(e3) {
        m.brandCheck(this, g), this[l].loadstart && this.removeEventListener("loadstart", this[l].loadstart), "function" == typeof e3 ? (this[l].loadstart = e3, this.addEventListener("loadstart", e3)) : this[l].loadstart = null;
      }
      get onprogress() {
        return m.brandCheck(this, g), this[l].progress;
      }
      set onprogress(e3) {
        m.brandCheck(this, g), this[l].progress && this.removeEventListener("progress", this[l].progress), "function" == typeof e3 ? (this[l].progress = e3, this.addEventListener("progress", e3)) : this[l].progress = null;
      }
      get onload() {
        return m.brandCheck(this, g), this[l].load;
      }
      set onload(e3) {
        m.brandCheck(this, g), this[l].load && this.removeEventListener("load", this[l].load), "function" == typeof e3 ? (this[l].load = e3, this.addEventListener("load", e3)) : this[l].load = null;
      }
      get onabort() {
        return m.brandCheck(this, g), this[l].abort;
      }
      set onabort(e3) {
        m.brandCheck(this, g), this[l].abort && this.removeEventListener("abort", this[l].abort), "function" == typeof e3 ? (this[l].abort = e3, this.addEventListener("abort", e3)) : this[l].abort = null;
      }
    }
    g.EMPTY = g.prototype.EMPTY = 0, g.LOADING = g.prototype.LOADING = 1, g.DONE = g.prototype.DONE = 2, Object.defineProperties(g.prototype, { EMPTY: t2, LOADING: t2, DONE: t2, readAsArrayBuffer: d, readAsBinaryString: d, readAsText: d, readAsDataURL: d, abort: d, readyState: d, result: d, error: d, onloadstart: d, onprogress: d, onload: d, onabort: d, onerror: d, onloadend: d, [Symbol.toStringTag]: { value: "FileReader", writable: false, enumerable: false, configurable: true } }), Object.defineProperties(g, { EMPTY: t2, LOADING: t2, DONE: t2 }), e2.exports = { FileReader: g };
  }