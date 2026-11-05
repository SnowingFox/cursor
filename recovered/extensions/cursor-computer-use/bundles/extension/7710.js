// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 7710 range:618189..623192
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7710: (e2, n2, t2) => {
    "use strict";
    const a2 = t2(7075).Writable, s2 = t2(7975).inherits, o2 = t2(9512), r = t2(2340), i = t2(6879), A = Buffer.from("-"), c = Buffer.from("\r\n"), l = function() {
    };
    function d(e3) {
      if (!(this instanceof d)) return new d(e3);
      if (a2.call(this, e3), !e3 || !e3.headerFirst && "string" != typeof e3.boundary) throw new TypeError("Boundary required");
      "string" == typeof e3.boundary ? this.setBoundary(e3.boundary) : this._bparser = void 0, this._headerFirst = e3.headerFirst, this._dashes = 0, this._parts = 0, this._finished = false, this._realFinish = false, this._isPreamble = true, this._justMatched = false, this._firstWrite = true, this._inHeader = true, this._part = void 0, this._cb = void 0, this._ignoreData = false, this._partOpts = { highWaterMark: e3.partHwm }, this._pause = false;
      const n3 = this;
      this._hparser = new i(e3), this._hparser.on("header", function(e4) {
        n3._inHeader = false, n3._part.emit("header", e4);
      });
    }
    s2(d, a2), d.prototype.emit = function(e3) {
      if ("finish" !== e3 || this._realFinish) a2.prototype.emit.apply(this, arguments);
      else if (!this._finished) {
        const e4 = this;
        process.nextTick(function() {
          if (e4.emit("error", new Error("Unexpected end of multipart data")), e4._part && !e4._ignoreData) {
            const n3 = e4._isPreamble ? "Preamble" : "Part";
            return e4._part.emit("error", new Error(n3 + " terminated early due to unexpected end of multipart data")), e4._part.push(null), void process.nextTick(function() {
              e4._realFinish = true, e4.emit("finish"), e4._realFinish = false;
            });
          }
          e4._realFinish = true, e4.emit("finish"), e4._realFinish = false;
        });
      }
    }, d.prototype._write = function(e3, n3, t3) {
      if (!this._hparser && !this._bparser) return t3();
      if (this._headerFirst && this._isPreamble) {
        this._part || (this._part = new r(this._partOpts), 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : this._ignore());
        const n4 = this._hparser.push(e3);
        if (this._inHeader || void 0 === n4 || !(n4 < e3.length)) return t3();
        e3 = e3.slice(n4);
      }
      this._firstWrite && (this._bparser.push(c), this._firstWrite = false), this._bparser.push(e3), this._pause ? this._cb = t3 : t3();
    }, d.prototype.reset = function() {
      this._part = void 0, this._bparser = void 0, this._hparser = void 0;
    }, d.prototype.setBoundary = function(e3) {
      const n3 = this;
      this._bparser = new o2("\r\n--" + e3), this._bparser.on("info", function(e4, t3, a3, s3) {
        n3._oninfo(e4, t3, a3, s3);
      });
    }, d.prototype._ignore = function() {
      this._part && !this._ignoreData && (this._ignoreData = true, this._part.on("error", l), this._part.resume());
    }, d.prototype._oninfo = function(e3, n3, t3, a3) {
      let s3;
      const o3 = this;
      let i2, c2 = 0, l2 = true;
      if (!this._part && this._justMatched && n3) {
        for (; this._dashes < 2 && t3 + c2 < a3; ) {
          if (45 !== n3[t3 + c2]) {
            this._dashes && (s3 = A), this._dashes = 0;
            break;
          }
          ++c2, ++this._dashes;
        }
        if (2 === this._dashes && (t3 + c2 < a3 && 0 !== this.listenerCount("trailer") && this.emit("trailer", n3.slice(t3 + c2, a3)), this.reset(), this._finished = true, 0 === o3._parts && (o3._realFinish = true, o3.emit("finish"), o3._realFinish = false)), this._dashes) return;
      }
      this._justMatched && (this._justMatched = false), this._part || (this._part = new r(this._partOpts), this._part._read = function(e4) {
        o3._unpause();
      }, this._isPreamble && 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : true !== this._isPreamble && 0 !== this.listenerCount("part") ? this.emit("part", this._part) : this._ignore(), this._isPreamble || (this._inHeader = true)), n3 && t3 < a3 && !this._ignoreData && (this._isPreamble || !this._inHeader ? (s3 && (l2 = this._part.push(s3)), l2 = this._part.push(n3.slice(t3, a3)), l2 || (this._pause = true)) : !this._isPreamble && this._inHeader && (s3 && this._hparser.push(s3), i2 = this._hparser.push(n3.slice(t3, a3)), !this._inHeader && void 0 !== i2 && i2 < a3 && this._oninfo(false, n3, t3 + i2, a3))), e3 && (this._hparser.reset(), this._isPreamble ? this._isPreamble = false : t3 !== a3 && (++this._parts, this._part.on("end", function() {
        0 === --o3._parts && (o3._finished ? (o3._realFinish = true, o3.emit("finish"), o3._realFinish = false) : o3._unpause());
      })), this._part.push(null), this._part = void 0, this._ignoreData = false, this._justMatched = true, this._dashes = 0);
    }, d.prototype._unpause = function() {
      if (this._pause && (this._pause = false, this._cb)) {
        const e3 = this._cb;
        this._cb = void 0, e3();
      }
    }, e2.exports = d;
  }