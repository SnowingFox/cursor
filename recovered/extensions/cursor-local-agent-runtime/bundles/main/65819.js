// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 65819 range:1985231..1987419
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
65819: (e, t, r) => {
    "use strict";
    var n = r(30129).Buffer;
    e.exports = function(e2) {
      var t2 = e2.Transform;
      function r2(e3, r3) {
        this.conv = e3, (r3 = r3 || {}).decodeStrings = false, t2.call(this, r3);
      }
      function o(e3, r3) {
        this.conv = e3, (r3 = r3 || {}).encoding = this.encoding = "utf8", t2.call(this, r3);
      }
      return r2.prototype = Object.create(t2.prototype, { constructor: { value: r2 } }), r2.prototype._transform = function(e3, t3, r3) {
        if ("string" != typeof e3) return r3(new Error("Iconv encoding stream needs strings as its input."));
        try {
          var n2 = this.conv.write(e3);
          n2 && n2.length && this.push(n2), r3();
        } catch (e4) {
          r3(e4);
        }
      }, r2.prototype._flush = function(e3) {
        try {
          var t3 = this.conv.end();
          t3 && t3.length && this.push(t3), e3();
        } catch (t4) {
          e3(t4);
        }
      }, r2.prototype.collect = function(e3) {
        var t3 = [];
        return this.on("error", e3), this.on("data", function(e4) {
          t3.push(e4);
        }), this.on("end", function() {
          e3(null, n.concat(t3));
        }), this;
      }, o.prototype = Object.create(t2.prototype, { constructor: { value: o } }), o.prototype._transform = function(e3, t3, r3) {
        if (!(n.isBuffer(e3) || e3 instanceof Uint8Array)) return r3(new Error("Iconv decoding stream needs buffers as its input."));
        try {
          var o2 = this.conv.write(e3);
          o2 && o2.length && this.push(o2, this.encoding), r3();
        } catch (e4) {
          r3(e4);
        }
      }, o.prototype._flush = function(e3) {
        try {
          var t3 = this.conv.end();
          t3 && t3.length && this.push(t3, this.encoding), e3();
        } catch (t4) {
          e3(t4);
        }
      }, o.prototype.collect = function(e3) {
        var t3 = "";
        return this.on("error", e3), this.on("data", function(e4) {
          t3 += e4;
        }), this.on("end", function() {
          e3(null, t3);
        }), this;
      }, { IconvLiteEncoderStream: r2, IconvLiteDecoderStream: o };
    };
  }