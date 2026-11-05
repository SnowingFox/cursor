// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/273.js sha256:057ec17488f68f7434e12ce31e59180a7183ddc2aab226744d2893aed3fcf167
// module: 9968 range:95273..96800
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9968: (e) => {
  "use strict";
  function t() {
    this._types = /* @__PURE__ */ Object.create(null), this._extensions = /* @__PURE__ */ Object.create(null);
    for (let e2 = 0; e2 < arguments.length; e2++) this.define(arguments[e2]);
    this.define = this.define.bind(this), this.getType = this.getType.bind(this), this.getExtension = this.getExtension.bind(this);
  }
  t.prototype.define = function(e2, t2) {
    for (let i in e2) {
      let a = e2[i].map(function(e3) {
        return e3.toLowerCase();
      });
      i = i.toLowerCase();
      for (let e3 = 0; e3 < a.length; e3++) {
        const n = a[e3];
        if ("*" !== n[0]) {
          if (!t2 && n in this._types) throw new Error('Attempt to change mapping for "' + n + '" extension from "' + this._types[n] + '" to "' + i + '". Pass `force=true` to allow this, otherwise remove "' + n + '" from the list of extensions for "' + i + '".');
          this._types[n] = i;
        }
      }
      if (t2 || !this._extensions[i]) {
        const e3 = a[0];
        this._extensions[i] = "*" !== e3[0] ? e3 : e3.substr(1);
      }
    }
  }, t.prototype.getType = function(e2) {
    let t2 = (e2 = String(e2)).replace(/^.*[/\\]/, "").toLowerCase(), i = t2.replace(/^.*\./, "").toLowerCase(), a = t2.length < e2.length;
    return (i.length < t2.length - 1 || !a) && this._types[i] || null;
  }, t.prototype.getExtension = function(e2) {
    return (e2 = /^\s*([^;\s]*)/.test(e2) && RegExp.$1) && this._extensions[e2.toLowerCase()] || null;
  }, e.exports = t;
}