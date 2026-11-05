// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 6333 range:599039..600749
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6333: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(7075).Writable, { inherits: r2 } = A2(7975), o2 = A2(7710), s = A2(1464), i = A2(2663), a = A2(1537);
    function c(e3) {
      if (!(this instanceof c)) return new c(e3);
      if ("object" != typeof e3) throw new TypeError("Busboy expected an options-Object.");
      if ("object" != typeof e3.headers) throw new TypeError("Busboy expected an options-Object with headers-attribute.");
      if ("string" != typeof e3.headers["content-type"]) throw new TypeError("Missing Content-Type-header.");
      const { headers: t3, ...A3 } = e3;
      this.opts = { autoDestroy: false, ...A3 }, n2.call(this, this.opts), this._done = false, this._parser = this.getParserByHeaders(t3), this._finished = false;
    }
    r2(c, n2), c.prototype.emit = function(e3) {
      if ("finish" === e3) {
        if (!this._done) return void this._parser?.end();
        if (this._finished) return;
        this._finished = true;
      }
      n2.prototype.emit.apply(this, arguments);
    }, c.prototype.getParserByHeaders = function(e3) {
      const t3 = a(e3["content-type"]), A3 = { defCharset: this.opts.defCharset, fileHwm: this.opts.fileHwm, headers: e3, highWaterMark: this.opts.highWaterMark, isPartAFile: this.opts.isPartAFile, limits: this.opts.limits, parsedConType: t3, preservePath: this.opts.preservePath };
      if (s.detect.test(t3[0])) return new s(this, A3);
      if (i.detect.test(t3[0])) return new i(this, A3);
      throw new Error("Unsupported Content-Type.");
    }, c.prototype._write = function(e3, t3, A3) {
      this._parser.write(e3, A3);
    }, e2.exports = c, e2.exports.default = c, e2.exports.Busboy = c, e2.exports.Dicer = o2;
  }