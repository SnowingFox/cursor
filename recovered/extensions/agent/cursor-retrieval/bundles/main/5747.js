// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 5747 range:774506..779207
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5747: (e2, a2, n2) => {
    "use strict";
    const { staticPropertyDescriptors: t2, readOperation: s2, fireAProgressEvent: o2 } = n2(2074), { kState: r2, kError: i2, kResult: l, kEvents: d, kAborted: m } = n2(3153), { webidl: c } = n2(8005), { kEnumerableProperty: p } = n2(9361);
    class A extends EventTarget {
      constructor() {
        super(), this[r2] = "empty", this[l] = null, this[i2] = null, this[d] = { loadend: null, error: null, abort: null, load: null, progress: null, loadstart: null };
      }
      readAsArrayBuffer(e3) {
        c.brandCheck(this, A), c.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsArrayBuffer" }), e3 = c.converters.Blob(e3, { strict: false }), s2(this, e3, "ArrayBuffer");
      }
      readAsBinaryString(e3) {
        c.brandCheck(this, A), c.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsBinaryString" }), e3 = c.converters.Blob(e3, { strict: false }), s2(this, e3, "BinaryString");
      }
      readAsText(e3, a3 = void 0) {
        c.brandCheck(this, A), c.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsText" }), e3 = c.converters.Blob(e3, { strict: false }), void 0 !== a3 && (a3 = c.converters.DOMString(a3)), s2(this, e3, "Text", a3);
      }
      readAsDataURL(e3) {
        c.brandCheck(this, A), c.argumentLengthCheck(arguments, 1, { header: "FileReader.readAsDataURL" }), e3 = c.converters.Blob(e3, { strict: false }), s2(this, e3, "DataURL");
      }
      abort() {
        "empty" !== this[r2] && "done" !== this[r2] ? ("loading" === this[r2] && (this[r2] = "done", this[l] = null), this[m] = true, o2("abort", this), "loading" !== this[r2] && o2("loadend", this)) : this[l] = null;
      }
      get readyState() {
        switch (c.brandCheck(this, A), this[r2]) {
          case "empty":
            return this.EMPTY;
          case "loading":
            return this.LOADING;
          case "done":
            return this.DONE;
        }
      }
      get result() {
        return c.brandCheck(this, A), this[l];
      }
      get error() {
        return c.brandCheck(this, A), this[i2];
      }
      get onloadend() {
        return c.brandCheck(this, A), this[d].loadend;
      }
      set onloadend(e3) {
        c.brandCheck(this, A), this[d].loadend && this.removeEventListener("loadend", this[d].loadend), "function" == typeof e3 ? (this[d].loadend = e3, this.addEventListener("loadend", e3)) : this[d].loadend = null;
      }
      get onerror() {
        return c.brandCheck(this, A), this[d].error;
      }
      set onerror(e3) {
        c.brandCheck(this, A), this[d].error && this.removeEventListener("error", this[d].error), "function" == typeof e3 ? (this[d].error = e3, this.addEventListener("error", e3)) : this[d].error = null;
      }
      get onloadstart() {
        return c.brandCheck(this, A), this[d].loadstart;
      }
      set onloadstart(e3) {
        c.brandCheck(this, A), this[d].loadstart && this.removeEventListener("loadstart", this[d].loadstart), "function" == typeof e3 ? (this[d].loadstart = e3, this.addEventListener("loadstart", e3)) : this[d].loadstart = null;
      }
      get onprogress() {
        return c.brandCheck(this, A), this[d].progress;
      }
      set onprogress(e3) {
        c.brandCheck(this, A), this[d].progress && this.removeEventListener("progress", this[d].progress), "function" == typeof e3 ? (this[d].progress = e3, this.addEventListener("progress", e3)) : this[d].progress = null;
      }
      get onload() {
        return c.brandCheck(this, A), this[d].load;
      }
      set onload(e3) {
        c.brandCheck(this, A), this[d].load && this.removeEventListener("load", this[d].load), "function" == typeof e3 ? (this[d].load = e3, this.addEventListener("load", e3)) : this[d].load = null;
      }
      get onabort() {
        return c.brandCheck(this, A), this[d].abort;
      }
      set onabort(e3) {
        c.brandCheck(this, A), this[d].abort && this.removeEventListener("abort", this[d].abort), "function" == typeof e3 ? (this[d].abort = e3, this.addEventListener("abort", e3)) : this[d].abort = null;
      }
    }
    A.EMPTY = A.prototype.EMPTY = 0, A.LOADING = A.prototype.LOADING = 1, A.DONE = A.prototype.DONE = 2, Object.defineProperties(A.prototype, { EMPTY: t2, LOADING: t2, DONE: t2, readAsArrayBuffer: p, readAsBinaryString: p, readAsText: p, readAsDataURL: p, abort: p, readyState: p, result: p, error: p, onloadstart: p, onprogress: p, onload: p, onabort: p, onerror: p, onloadend: p, [Symbol.toStringTag]: { value: "FileReader", writable: false, enumerable: false, configurable: true } }), Object.defineProperties(A, { EMPTY: t2, LOADING: t2, DONE: t2 }), e2.exports = { FileReader: A };
  }