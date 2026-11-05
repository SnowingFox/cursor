// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 53097 range:8565644..8567340
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
53097: (e, t, r) => {
    "use strict";
    const n = r(57075).Writable, { inherits: s } = r(57975), o = r(78938), i = r(30908), a = r(13531), c = r(48613);
    function l(e2) {
      if (!(this instanceof l)) return new l(e2);
      if ("object" != typeof e2) throw new TypeError("Busboy expected an options-Object.");
      if ("object" != typeof e2.headers) throw new TypeError("Busboy expected an options-Object with headers-attribute.");
      if ("string" != typeof e2.headers["content-type"]) throw new TypeError("Missing Content-Type-header.");
      const { headers: t2, ...r2 } = e2;
      this.opts = { autoDestroy: false, ...r2 }, n.call(this, this.opts), this._done = false, this._parser = this.getParserByHeaders(t2), this._finished = false;
    }
    s(l, n), l.prototype.emit = function(e2) {
      if ("finish" === e2) {
        if (!this._done) return void this._parser?.end();
        if (this._finished) return;
        this._finished = true;
      }
      n.prototype.emit.apply(this, arguments);
    }, l.prototype.getParserByHeaders = function(e2) {
      const t2 = c(e2["content-type"]), r2 = { defCharset: this.opts.defCharset, fileHwm: this.opts.fileHwm, headers: e2, highWaterMark: this.opts.highWaterMark, isPartAFile: this.opts.isPartAFile, limits: this.opts.limits, parsedConType: t2, preservePath: this.opts.preservePath };
      if (i.detect.test(t2[0])) return new i(this, r2);
      if (a.detect.test(t2[0])) return new a(this, r2);
      throw new Error("Unsupported Content-Type.");
    }, l.prototype._write = function(e2, t2, r2) {
      this._parser.write(e2, r2);
    }, e.exports = l, e.exports.default = l, e.exports.Busboy = l, e.exports.Dicer = o;
  }