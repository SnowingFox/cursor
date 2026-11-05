// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 5747 range:498970..503660
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5747: (e2, n2, t2) => {
    "use strict";
    const { staticPropertyDescriptors: a2, readOperation: s2, fireAProgressEvent: o2 } = t2(2074), { kState: r, kError: i, kResult: A, kEvents: c, kAborted: l } = t2(3153), { webidl: d } = t2(8005), { kEnumerableProperty: m } = t2(9361);
    class u extends EventTarget {
      constructor() {
        super(), this[r] = "empty", this[A] = null, this[i] = null, this[c] = { loadend: null, error: null, abort: null, load: null, progress: null, loadstart: null };
      }
      readAsArrayBuffer(e3) {
        d.brandCheck(this, u), d.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsArrayBuffer" }), e3 = d.converters.Blob(e3, { strict: false }), s2(this, e3, "ArrayBuffer");
      }
      readAsBinaryString(e3) {
        d.brandCheck(this, u), d.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsBinaryString" }), e3 = d.converters.Blob(e3, { strict: false }), s2(this, e3, "BinaryString");
      }
      readAsText(e3, n3 = void 0) {
        d.brandCheck(this, u), d.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsText" }), e3 = d.converters.Blob(e3, { strict: false }), void 0 !== n3 && (n3 = d.converters.DOMString(n3)), s2(this, e3, "Text", n3);
      }
      readAsDataURL(e3) {
        d.brandCheck(this, u), d.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsDataURL" }), e3 = d.converters.Blob(e3, { strict: false }), s2(this, e3, "DataURL");
      }
      abort() {
        "empty" !== this[r] && "done" !== this[r] ? ("loading" === this[r] && (this[r] = "done", this[A] = null), this[l] = true, o2("abort", this), "loading" !== this[r] && o2("loadend", this)) : this[A] = null;
      }
      get readyState() {
        switch (d.brandCheck(this, u), this[r]) {
          case "empty":
            return this.EMPTY;
          case "loading":
            return this.LOADING;
          case "done":
            return this.DONE;
        }
      }
      get result() {
        return d.brandCheck(this, u), this[A];
      }
      get error() {
        return d.brandCheck(this, u), this[i];
      }
      get onloadend() {
        return d.brandCheck(this, u), this[c].loadend;
      }
      set onloadend(e3) {
        d.brandCheck(this, u), this[c].loadend && this.removeEventListener("loadend", this[c].loadend), "function" == typeof e3 ? (this[c].loadend = e3, this.addEventListener("loadend", e3)) : this[c].loadend = null;
      }
      get onerror() {
        return d.brandCheck(this, u), this[c].error;
      }
      set onerror(e3) {
        d.brandCheck(this, u), this[c].error && this.removeEventListener("error", this[c].error), "function" == typeof e3 ? (this[c].error = e3, this.addEventListener("error", e3)) : this[c].error = null;
      }
      get onloadstart() {
        return d.brandCheck(this, u), this[c].loadstart;
      }
      set onloadstart(e3) {
        d.brandCheck(this, u), this[c].loadstart && this.removeEventListener("loadstart", this[c].loadstart), "function" == typeof e3 ? (this[c].loadstart = e3, this.addEventListener("loadstart", e3)) : this[c].loadstart = null;
      }
      get onprogress() {
        return d.brandCheck(this, u), this[c].progress;
      }
      set onprogress(e3) {
        d.brandCheck(this, u), this[c].progress && this.removeEventListener("progress", this[c].progress), "function" == typeof e3 ? (this[c].progress = e3, this.addEventListener("progress", e3)) : this[c].progress = null;
      }
      get onload() {
        return d.brandCheck(this, u), this[c].load;
      }
      set onload(e3) {
        d.brandCheck(this, u), this[c].load && this.removeEventListener("load", this[c].load), "function" == typeof e3 ? (this[c].load = e3, this.addEventListener("load", e3)) : this[c].load = null;
      }
      get onabort() {
        return d.brandCheck(this, u), this[c].abort;
      }
      set onabort(e3) {
        d.brandCheck(this, u), this[c].abort && this.removeEventListener("abort", this[c].abort), "function" == typeof e3 ? (this[c].abort = e3, this.addEventListener("abort", e3)) : this[c].abort = null;
      }
    }
    u.EMPTY = u.prototype.EMPTY = 0, u.LOADING = u.prototype.LOADING = 1, u.DONE = u.prototype.DONE = 2, Object.defineProperties(u.prototype, { EMPTY: a2, LOADING: a2, DONE: a2, readAsArrayBuffer: m, readAsBinaryString: m, readAsText: m, readAsDataURL: m, abort: m, readyState: m, result: m, error: m, onloadstart: m, onprogress: m, onload: m, onabort: m, onerror: m, onloadend: m, [Symbol.toStringTag]: { value: "FileReader", writable: false, enumerable: false, configurable: true } }), Object.defineProperties(u, { EMPTY: a2, LOADING: a2, DONE: a2 }), e2.exports = { FileReader: u };
  }