// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 47167 range:7962955..7967627
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
47167: (e, t, r) => {
    "use strict";
    const { staticPropertyDescriptors: n, readOperation: s, fireAProgressEvent: o } = r(33742), { kState: i, kError: a, kResult: c, kEvents: l, kAborted: u } = r(10749), { webidl: d } = r(18193), { kEnumerableProperty: p } = r(83589);
    class m extends EventTarget {
      constructor() {
        super(), this[i] = "empty", this[c] = null, this[a] = null, this[l] = { loadend: null, error: null, abort: null, load: null, progress: null, loadstart: null };
      }
      readAsArrayBuffer(e2) {
        d.brandCheck(this, m), d.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsArrayBuffer" }), e2 = d.converters.Blob(e2, { strict: false }), s(this, e2, "ArrayBuffer");
      }
      readAsBinaryString(e2) {
        d.brandCheck(this, m), d.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsBinaryString" }), e2 = d.converters.Blob(e2, { strict: false }), s(this, e2, "BinaryString");
      }
      readAsText(e2, t2 = void 0) {
        d.brandCheck(this, m), d.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsText" }), e2 = d.converters.Blob(e2, { strict: false }), void 0 !== t2 && (t2 = d.converters.DOMString(t2)), s(this, e2, "Text", t2);
      }
      readAsDataURL(e2) {
        d.brandCheck(this, m), d.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsDataURL" }), e2 = d.converters.Blob(e2, { strict: false }), s(this, e2, "DataURL");
      }
      abort() {
        "empty" !== this[i] && "done" !== this[i] ? ("loading" === this[i] && (this[i] = "done", this[c] = null), this[u] = true, o("abort", this), "loading" !== this[i] && o("loadend", this)) : this[c] = null;
      }
      get readyState() {
        switch (d.brandCheck(this, m), this[i]) {
          case "empty":
            return this.EMPTY;
          case "loading":
            return this.LOADING;
          case "done":
            return this.DONE;
        }
      }
      get result() {
        return d.brandCheck(this, m), this[c];
      }
      get error() {
        return d.brandCheck(this, m), this[a];
      }
      get onloadend() {
        return d.brandCheck(this, m), this[l].loadend;
      }
      set onloadend(e2) {
        d.brandCheck(this, m), this[l].loadend && this.removeEventListener("loadend", this[l].loadend), "function" == typeof e2 ? (this[l].loadend = e2, this.addEventListener("loadend", e2)) : this[l].loadend = null;
      }
      get onerror() {
        return d.brandCheck(this, m), this[l].error;
      }
      set onerror(e2) {
        d.brandCheck(this, m), this[l].error && this.removeEventListener("error", this[l].error), "function" == typeof e2 ? (this[l].error = e2, this.addEventListener("error", e2)) : this[l].error = null;
      }
      get onloadstart() {
        return d.brandCheck(this, m), this[l].loadstart;
      }
      set onloadstart(e2) {
        d.brandCheck(this, m), this[l].loadstart && this.removeEventListener("loadstart", this[l].loadstart), "function" == typeof e2 ? (this[l].loadstart = e2, this.addEventListener("loadstart", e2)) : this[l].loadstart = null;
      }
      get onprogress() {
        return d.brandCheck(this, m), this[l].progress;
      }
      set onprogress(e2) {
        d.brandCheck(this, m), this[l].progress && this.removeEventListener("progress", this[l].progress), "function" == typeof e2 ? (this[l].progress = e2, this.addEventListener("progress", e2)) : this[l].progress = null;
      }
      get onload() {
        return d.brandCheck(this, m), this[l].load;
      }
      set onload(e2) {
        d.brandCheck(this, m), this[l].load && this.removeEventListener("load", this[l].load), "function" == typeof e2 ? (this[l].load = e2, this.addEventListener("load", e2)) : this[l].load = null;
      }
      get onabort() {
        return d.brandCheck(this, m), this[l].abort;
      }
      set onabort(e2) {
        d.brandCheck(this, m), this[l].abort && this.removeEventListener("abort", this[l].abort), "function" == typeof e2 ? (this[l].abort = e2, this.addEventListener("abort", e2)) : this[l].abort = null;
      }
    }
    m.EMPTY = m.prototype.EMPTY = 0, m.LOADING = m.prototype.LOADING = 1, m.DONE = m.prototype.DONE = 2, Object.defineProperties(m.prototype, { EMPTY: n, LOADING: n, DONE: n, readAsArrayBuffer: p, readAsBinaryString: p, readAsText: p, readAsDataURL: p, abort: p, readyState: p, result: p, error: p, onloadstart: p, onprogress: p, onload: p, onabort: p, onerror: p, onloadend: p, [Symbol.toStringTag]: { value: "FileReader", writable: false, enumerable: false, configurable: true } }), Object.defineProperties(m, { EMPTY: n, LOADING: n, DONE: n }), e.exports = { FileReader: m };
  }