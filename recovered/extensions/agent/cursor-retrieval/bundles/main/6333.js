// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 6333 range:799086..800802
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6333: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(7075).Writable, { inherits: s2 } = n2(7975), o2 = n2(7710), r2 = n2(1464), i2 = n2(2663), l = n2(1537);
    function d(e3) {
      if (!(this instanceof d)) return new d(e3);
      if ("object" != typeof e3) throw new TypeError("Busboy expected an options-Object.");
      if ("object" != typeof e3.headers) throw new TypeError("Busboy expected an options-Object with headers-attribute.");
      if ("string" != typeof e3.headers["content-type"]) throw new TypeError("Missing Content-Type-header.");
      const { headers: a3, ...n3 } = e3;
      this.opts = { autoDestroy: false, ...n3 }, t2.call(this, this.opts), this._done = false, this._parser = this.getParserByHeaders(a3), this._finished = false;
    }
    s2(d, t2), d.prototype.emit = function(e3) {
      if ("finish" === e3) {
        if (!this._done) return void this._parser?.end();
        if (this._finished) return;
        this._finished = true;
      }
      t2.prototype.emit.apply(this, arguments);
    }, d.prototype.getParserByHeaders = function(e3) {
      const a3 = l(e3["content-type"]), n3 = { defCharset: this.opts.defCharset, fileHwm: this.opts.fileHwm, headers: e3, highWaterMark: this.opts.highWaterMark, isPartAFile: this.opts.isPartAFile, limits: this.opts.limits, parsedConType: a3, preservePath: this.opts.preservePath };
      if (r2.detect.test(a3[0])) return new r2(this, n3);
      if (i2.detect.test(a3[0])) return new i2(this, n3);
      throw new Error("Unsupported Content-Type.");
    }, d.prototype._write = function(e3, a3, n3) {
      this._parser.write(e3, n3);
    }, e2.exports = d, e2.exports.default = d, e2.exports.Busboy = d, e2.exports.Dicer = o2;
  }