// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 6333 range:488317..490027
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6333: (e2, A2, t2) => {
    "use strict";
    const n2 = t2(7075).Writable, { inherits: r2 } = t2(7975), o2 = t2(7710), s = t2(1464), a = t2(2663), i = t2(1537);
    function c(e3) {
      if (!(this instanceof c)) return new c(e3);
      if ("object" != typeof e3) throw new TypeError("Busboy expected an options-Object.");
      if ("object" != typeof e3.headers) throw new TypeError("Busboy expected an options-Object with headers-attribute.");
      if ("string" != typeof e3.headers["content-type"]) throw new TypeError("Missing Content-Type-header.");
      const { headers: A3, ...t3 } = e3;
      this.opts = { autoDestroy: false, ...t3 }, n2.call(this, this.opts), this._done = false, this._parser = this.getParserByHeaders(A3), this._finished = false;
    }
    r2(c, n2), c.prototype.emit = function(e3) {
      if ("finish" === e3) {
        if (!this._done) return void this._parser?.end();
        if (this._finished) return;
        this._finished = true;
      }
      n2.prototype.emit.apply(this, arguments);
    }, c.prototype.getParserByHeaders = function(e3) {
      const A3 = i(e3["content-type"]), t3 = { defCharset: this.opts.defCharset, fileHwm: this.opts.fileHwm, headers: e3, highWaterMark: this.opts.highWaterMark, isPartAFile: this.opts.isPartAFile, limits: this.opts.limits, parsedConType: A3, preservePath: this.opts.preservePath };
      if (s.detect.test(A3[0])) return new s(this, t3);
      if (a.detect.test(A3[0])) return new a(this, t3);
      throw new Error("Unsupported Content-Type.");
    }, c.prototype._write = function(e3, A3, t3) {
      this._parser.write(e3, t3);
    }, e2.exports = c, e2.exports.default = c, e2.exports.Busboy = c, e2.exports.Dicer = o2;
  }