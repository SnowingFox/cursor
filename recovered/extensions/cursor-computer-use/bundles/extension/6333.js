// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 6333 range:519643..521353
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6333: (e2, n2, t2) => {
    "use strict";
    const a2 = t2(7075).Writable, { inherits: s2 } = t2(7975), o2 = t2(7710), r = t2(1464), i = t2(2663), A = t2(1537);
    function c(e3) {
      if (!(this instanceof c)) return new c(e3);
      if ("object" != typeof e3) throw new TypeError("Busboy expected an options-Object.");
      if ("object" != typeof e3.headers) throw new TypeError("Busboy expected an options-Object with headers-attribute.");
      if ("string" != typeof e3.headers["content-type"]) throw new TypeError("Missing Content-Type-header.");
      const { headers: n3, ...t3 } = e3;
      this.opts = { autoDestroy: false, ...t3 }, a2.call(this, this.opts), this._done = false, this._parser = this.getParserByHeaders(n3), this._finished = false;
    }
    s2(c, a2), c.prototype.emit = function(e3) {
      if ("finish" === e3) {
        if (!this._done) return void this._parser?.end();
        if (this._finished) return;
        this._finished = true;
      }
      a2.prototype.emit.apply(this, arguments);
    }, c.prototype.getParserByHeaders = function(e3) {
      const n3 = A(e3["content-type"]), t3 = { defCharset: this.opts.defCharset, fileHwm: this.opts.fileHwm, headers: e3, highWaterMark: this.opts.highWaterMark, isPartAFile: this.opts.isPartAFile, limits: this.opts.limits, parsedConType: n3, preservePath: this.opts.preservePath };
      if (r.detect.test(n3[0])) return new r(this, t3);
      if (i.detect.test(n3[0])) return new i(this, t3);
      throw new Error("Unsupported Content-Type.");
    }, c.prototype._write = function(e3, n3, t3) {
      this._parser.write(e3, t3);
    }, e2.exports = c, e2.exports.default = c, e2.exports.Busboy = c, e2.exports.Dicer = o2;
  }