// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 7710 range:908533..913541
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7710: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(7075).Writable, s2 = n2(7975).inherits, o2 = n2(9512), r2 = n2(2340), i2 = n2(6879), l = Buffer.from("-"), d = Buffer.from("\r\n"), m = function() {
    };
    function c(e3) {
      if (!(this instanceof c)) return new c(e3);
      if (t2.call(this, e3), !e3 || !e3.headerFirst && "string" != typeof e3.boundary) throw new TypeError("Boundary required");
      "string" == typeof e3.boundary ? this.setBoundary(e3.boundary) : this._bparser = void 0, this._headerFirst = e3.headerFirst, this._dashes = 0, this._parts = 0, this._finished = false, this._realFinish = false, this._isPreamble = true, this._justMatched = false, this._firstWrite = true, this._inHeader = true, this._part = void 0, this._cb = void 0, this._ignoreData = false, this._partOpts = { highWaterMark: e3.partHwm }, this._pause = false;
      const a3 = this;
      this._hparser = new i2(e3), this._hparser.on("header", function(e4) {
        a3._inHeader = false, a3._part.emit("header", e4);
      });
    }
    s2(c, t2), c.prototype.emit = function(e3) {
      if ("finish" !== e3 || this._realFinish) t2.prototype.emit.apply(this, arguments);
      else if (!this._finished) {
        const e4 = this;
        process.nextTick(function() {
          if (e4.emit("error", new Error("Unexpected end of multipart data")), e4._part && !e4._ignoreData) {
            const a3 = e4._isPreamble ? "Preamble" : "Part";
            return e4._part.emit("error", new Error(a3 + " terminated early due to unexpected end of multipart data")), e4._part.push(null), void process.nextTick(function() {
              e4._realFinish = true, e4.emit("finish"), e4._realFinish = false;
            });
          }
          e4._realFinish = true, e4.emit("finish"), e4._realFinish = false;
        });
      }
    }, c.prototype._write = function(e3, a3, n3) {
      if (!this._hparser && !this._bparser) return n3();
      if (this._headerFirst && this._isPreamble) {
        this._part || (this._part = new r2(this._partOpts), 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : this._ignore());
        const a4 = this._hparser.push(e3);
        if (this._inHeader || void 0 === a4 || !(a4 < e3.length)) return n3();
        e3 = e3.slice(a4);
      }
      this._firstWrite && (this._bparser.push(d), this._firstWrite = false), this._bparser.push(e3), this._pause ? this._cb = n3 : n3();
    }, c.prototype.reset = function() {
      this._part = void 0, this._bparser = void 0, this._hparser = void 0;
    }, c.prototype.setBoundary = function(e3) {
      const a3 = this;
      this._bparser = new o2("\r\n--" + e3), this._bparser.on("info", function(e4, n3, t3, s3) {
        a3._oninfo(e4, n3, t3, s3);
      });
    }, c.prototype._ignore = function() {
      this._part && !this._ignoreData && (this._ignoreData = true, this._part.on("error", m), this._part.resume());
    }, c.prototype._oninfo = function(e3, a3, n3, t3) {
      let s3;
      const o3 = this;
      let i3, d2 = 0, m2 = true;
      if (!this._part && this._justMatched && a3) {
        for (; this._dashes < 2 && n3 + d2 < t3; ) {
          if (45 !== a3[n3 + d2]) {
            this._dashes && (s3 = l), this._dashes = 0;
            break;
          }
          ++d2, ++this._dashes;
        }
        if (2 === this._dashes && (n3 + d2 < t3 && 0 !== this.listenerCount("trailer") && this.emit("trailer", a3.slice(n3 + d2, t3)), this.reset(), this._finished = true, 0 === o3._parts && (o3._realFinish = true, o3.emit("finish"), o3._realFinish = false)), this._dashes) return;
      }
      this._justMatched && (this._justMatched = false), this._part || (this._part = new r2(this._partOpts), this._part._read = function(e4) {
        o3._unpause();
      }, this._isPreamble && 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : true !== this._isPreamble && 0 !== this.listenerCount("part") ? this.emit("part", this._part) : this._ignore(), this._isPreamble || (this._inHeader = true)), a3 && n3 < t3 && !this._ignoreData && (this._isPreamble || !this._inHeader ? (s3 && (m2 = this._part.push(s3)), m2 = this._part.push(a3.slice(n3, t3)), m2 || (this._pause = true)) : !this._isPreamble && this._inHeader && (s3 && this._hparser.push(s3), i3 = this._hparser.push(a3.slice(n3, t3)), !this._inHeader && void 0 !== i3 && i3 < t3 && this._oninfo(false, a3, n3 + i3, t3))), e3 && (this._hparser.reset(), this._isPreamble ? this._isPreamble = false : n3 !== t3 && (++this._parts, this._part.on("end", function() {
        0 === --o3._parts && (o3._finished ? (o3._realFinish = true, o3.emit("finish"), o3._realFinish = false) : o3._unpause());
      })), this._part.push(null), this._part = void 0, this._ignoreData = false, this._justMatched = true, this._dashes = 0);
    }, c.prototype._unpause = function() {
      if (this._pause && (this._pause = false, this._cb)) {
        const e3 = this._cb;
        this._cb = void 0, e3();
      }
    }, e2.exports = c;
  }