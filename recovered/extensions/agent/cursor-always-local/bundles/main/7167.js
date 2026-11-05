// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7167 range:4215040..4219737
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7167: (t2, e2, r2) => {
    "use strict";
    const { staticPropertyDescriptors: n2, readOperation: s2, fireAProgressEvent: i2 } = r2(3742), { kState: o2, kError: a, kResult: u, kEvents: c, kAborted: l } = r2(749), { webidl: m } = r2(8193), { kEnumerableProperty: d } = r2(3589);
    class f extends EventTarget {
      constructor() {
        super(), this[o2] = "empty", this[u] = null, this[a] = null, this[c] = { loadend: null, error: null, abort: null, load: null, progress: null, loadstart: null };
      }
      readAsArrayBuffer(t3) {
        m.brandCheck(this, f), m.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsArrayBuffer" }), t3 = m.converters.Blob(t3, { strict: false }), s2(this, t3, "ArrayBuffer");
      }
      readAsBinaryString(t3) {
        m.brandCheck(this, f), m.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsBinaryString" }), t3 = m.converters.Blob(t3, { strict: false }), s2(this, t3, "BinaryString");
      }
      readAsText(t3, e3 = void 0) {
        m.brandCheck(this, f), m.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsText" }), t3 = m.converters.Blob(t3, { strict: false }), void 0 !== e3 && (e3 = m.converters.DOMString(e3)), s2(this, t3, "Text", e3);
      }
      readAsDataURL(t3) {
        m.brandCheck(this, f), m.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsDataURL" }), t3 = m.converters.Blob(t3, { strict: false }), s2(this, t3, "DataURL");
      }
      abort() {
        "empty" !== this[o2] && "done" !== this[o2] ? ("loading" === this[o2] && (this[o2] = "done", this[u] = null), this[l] = true, i2("abort", this), "loading" !== this[o2] && i2("loadend", this)) : this[u] = null;
      }
      get readyState() {
        switch (m.brandCheck(this, f), this[o2]) {
          case "empty":
            return this.EMPTY;
          case "loading":
            return this.LOADING;
          case "done":
            return this.DONE;
        }
      }
      get result() {
        return m.brandCheck(this, f), this[u];
      }
      get error() {
        return m.brandCheck(this, f), this[a];
      }
      get onloadend() {
        return m.brandCheck(this, f), this[c].loadend;
      }
      set onloadend(t3) {
        m.brandCheck(this, f), this[c].loadend && this.removeEventListener("loadend", this[c].loadend), "function" == typeof t3 ? (this[c].loadend = t3, this.addEventListener("loadend", t3)) : this[c].loadend = null;
      }
      get onerror() {
        return m.brandCheck(this, f), this[c].error;
      }
      set onerror(t3) {
        m.brandCheck(this, f), this[c].error && this.removeEventListener("error", this[c].error), "function" == typeof t3 ? (this[c].error = t3, this.addEventListener("error", t3)) : this[c].error = null;
      }
      get onloadstart() {
        return m.brandCheck(this, f), this[c].loadstart;
      }
      set onloadstart(t3) {
        m.brandCheck(this, f), this[c].loadstart && this.removeEventListener("loadstart", this[c].loadstart), "function" == typeof t3 ? (this[c].loadstart = t3, this.addEventListener("loadstart", t3)) : this[c].loadstart = null;
      }
      get onprogress() {
        return m.brandCheck(this, f), this[c].progress;
      }
      set onprogress(t3) {
        m.brandCheck(this, f), this[c].progress && this.removeEventListener("progress", this[c].progress), "function" == typeof t3 ? (this[c].progress = t3, this.addEventListener("progress", t3)) : this[c].progress = null;
      }
      get onload() {
        return m.brandCheck(this, f), this[c].load;
      }
      set onload(t3) {
        m.brandCheck(this, f), this[c].load && this.removeEventListener("load", this[c].load), "function" == typeof t3 ? (this[c].load = t3, this.addEventListener("load", t3)) : this[c].load = null;
      }
      get onabort() {
        return m.brandCheck(this, f), this[c].abort;
      }
      set onabort(t3) {
        m.brandCheck(this, f), this[c].abort && this.removeEventListener("abort", this[c].abort), "function" == typeof t3 ? (this[c].abort = t3, this.addEventListener("abort", t3)) : this[c].abort = null;
      }
    }
    f.EMPTY = f.prototype.EMPTY = 0, f.LOADING = f.prototype.LOADING = 1, f.DONE = f.prototype.DONE = 2, Object.defineProperties(f.prototype, { EMPTY: n2, LOADING: n2, DONE: n2, readAsArrayBuffer: d, readAsBinaryString: d, readAsText: d, readAsDataURL: d, abort: d, readyState: d, result: d, error: d, onloadstart: d, onprogress: d, onload: d, onabort: d, onerror: d, onloadend: d, [Symbol.toStringTag]: { value: "FileReader", writable: false, enumerable: false, configurable: true } }), Object.defineProperties(f, { EMPTY: n2, LOADING: n2, DONE: n2 }), t2.exports = { FileReader: f };
  }