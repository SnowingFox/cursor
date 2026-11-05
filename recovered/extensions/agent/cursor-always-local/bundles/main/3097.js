// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3097 range:912554..914266
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3097: (t2, e2, r2) => {
    "use strict";
    const n2 = r2(7075).Writable, { inherits: s2 } = r2(7975), i2 = r2(8938), o2 = r2(908), a = r2(3531), u = r2(8613);
    function c(t3) {
      if (!(this instanceof c)) return new c(t3);
      if ("object" != typeof t3) throw new TypeError("Busboy expected an options-Object.");
      if ("object" != typeof t3.headers) throw new TypeError("Busboy expected an options-Object with headers-attribute.");
      if ("string" != typeof t3.headers["content-type"]) throw new TypeError("Missing Content-Type-header.");
      const { headers: e3, ...r3 } = t3;
      this.opts = { autoDestroy: false, ...r3 }, n2.call(this, this.opts), this._done = false, this._parser = this.getParserByHeaders(e3), this._finished = false;
    }
    s2(c, n2), c.prototype.emit = function(t3) {
      if ("finish" === t3) {
        if (!this._done) return void this._parser?.end();
        if (this._finished) return;
        this._finished = true;
      }
      n2.prototype.emit.apply(this, arguments);
    }, c.prototype.getParserByHeaders = function(t3) {
      const e3 = u(t3["content-type"]), r3 = { defCharset: this.opts.defCharset, fileHwm: this.opts.fileHwm, headers: t3, highWaterMark: this.opts.highWaterMark, isPartAFile: this.opts.isPartAFile, limits: this.opts.limits, parsedConType: e3, preservePath: this.opts.preservePath };
      if (o2.detect.test(e3[0])) return new o2(this, r3);
      if (a.detect.test(e3[0])) return new a(this, r3);
      throw new Error("Unsupported Content-Type.");
    }, c.prototype._write = function(t3, e3, r3) {
      this._parser.write(t3, r3);
    }, t2.exports = c, t2.exports.default = c, t2.exports.Busboy = c, t2.exports.Dicer = i2;
  }