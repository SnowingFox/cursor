// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 6333 range:488920..490636
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6333: (e2, n2, a2) => {
    "use strict";
    const t2 = a2(7075).Writable, { inherits: s2 } = a2(7975), o2 = a2(7710), r2 = a2(1464), i2 = a2(2663), A = a2(1537);
    function l(e3) {
      if (!(this instanceof l)) return new l(e3);
      if ("object" != typeof e3) throw new TypeError("Busboy expected an options-Object.");
      if ("object" != typeof e3.headers) throw new TypeError("Busboy expected an options-Object with headers-attribute.");
      if ("string" != typeof e3.headers["content-type"]) throw new TypeError("Missing Content-Type-header.");
      const { headers: n3, ...a3 } = e3;
      this.opts = { autoDestroy: false, ...a3 }, t2.call(this, this.opts), this._done = false, this._parser = this.getParserByHeaders(n3), this._finished = false;
    }
    s2(l, t2), l.prototype.emit = function(e3) {
      if ("finish" === e3) {
        if (!this._done) return void this._parser?.end();
        if (this._finished) return;
        this._finished = true;
      }
      t2.prototype.emit.apply(this, arguments);
    }, l.prototype.getParserByHeaders = function(e3) {
      const n3 = A(e3["content-type"]), a3 = { defCharset: this.opts.defCharset, fileHwm: this.opts.fileHwm, headers: e3, highWaterMark: this.opts.highWaterMark, isPartAFile: this.opts.isPartAFile, limits: this.opts.limits, parsedConType: n3, preservePath: this.opts.preservePath };
      if (r2.detect.test(n3[0])) return new r2(this, a3);
      if (i2.detect.test(n3[0])) return new i2(this, a3);
      throw new Error("Unsupported Content-Type.");
    }, l.prototype._write = function(e3, n3, a3) {
      this._parser.write(e3, a3);
    }, e2.exports = l, e2.exports.default = l, e2.exports.Busboy = l, e2.exports.Dicer = o2;
  }