// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 65819 range:10344067..10346255
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
      function s(e3, r3) {
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
      }, s.prototype = Object.create(t2.prototype, { constructor: { value: s } }), s.prototype._transform = function(e3, t3, r3) {
        if (!(n.isBuffer(e3) || e3 instanceof Uint8Array)) return r3(new Error("Iconv decoding stream needs buffers as its input."));
        try {
          var s2 = this.conv.write(e3);
          s2 && s2.length && this.push(s2, this.encoding), r3();
        } catch (e4) {
          r3(e4);
        }
      }, s.prototype._flush = function(e3) {
        try {
          var t3 = this.conv.end();
          t3 && t3.length && this.push(t3, this.encoding), e3();
        } catch (t4) {
          e3(t4);
        }
      }, s.prototype.collect = function(e3) {
        var t3 = "";
        return this.on("error", e3), this.on("data", function(e4) {
          t3 += e4;
        }), this.on("end", function() {
          e3(null, t3);
        }), this;
      }, { IconvLiteEncoderStream: r2, IconvLiteDecoderStream: s };
    };
  }