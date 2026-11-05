// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 7710 range:718737..723740
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7710: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(7075).Writable, r2 = A2(7975).inherits, o2 = A2(9512), s = A2(2340), i = A2(6879), a = Buffer.from("-"), c = Buffer.from("\r\n"), l = function() {
    };
    function u(e3) {
      if (!(this instanceof u)) return new u(e3);
      if (n2.call(this, e3), !e3 || !e3.headerFirst && "string" != typeof e3.boundary) throw new TypeError("Boundary required");
      "string" == typeof e3.boundary ? this.setBoundary(e3.boundary) : this._bparser = void 0, this._headerFirst = e3.headerFirst, this._dashes = 0, this._parts = 0, this._finished = false, this._realFinish = false, this._isPreamble = true, this._justMatched = false, this._firstWrite = true, this._inHeader = true, this._part = void 0, this._cb = void 0, this._ignoreData = false, this._partOpts = { highWaterMark: e3.partHwm }, this._pause = false;
      const t3 = this;
      this._hparser = new i(e3), this._hparser.on("header", function(e4) {
        t3._inHeader = false, t3._part.emit("header", e4);
      });
    }
    r2(u, n2), u.prototype.emit = function(e3) {
      if ("finish" !== e3 || this._realFinish) n2.prototype.emit.apply(this, arguments);
      else if (!this._finished) {
        const e4 = this;
        process.nextTick(function() {
          if (e4.emit("error", new Error("Unexpected end of multipart data")), e4._part && !e4._ignoreData) {
            const t3 = e4._isPreamble ? "Preamble" : "Part";
            return e4._part.emit("error", new Error(t3 + " terminated early due to unexpected end of multipart data")), e4._part.push(null), void process.nextTick(function() {
              e4._realFinish = true, e4.emit("finish"), e4._realFinish = false;
            });
          }
          e4._realFinish = true, e4.emit("finish"), e4._realFinish = false;
        });
      }
    }, u.prototype._write = function(e3, t3, A3) {
      if (!this._hparser && !this._bparser) return A3();
      if (this._headerFirst && this._isPreamble) {
        this._part || (this._part = new s(this._partOpts), 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : this._ignore());
        const t4 = this._hparser.push(e3);
        if (this._inHeader || void 0 === t4 || !(t4 < e3.length)) return A3();
        e3 = e3.slice(t4);
      }
      this._firstWrite && (this._bparser.push(c), this._firstWrite = false), this._bparser.push(e3), this._pause ? this._cb = A3 : A3();
    }, u.prototype.reset = function() {
      this._part = void 0, this._bparser = void 0, this._hparser = void 0;
    }, u.prototype.setBoundary = function(e3) {
      const t3 = this;
      this._bparser = new o2("\r\n--" + e3), this._bparser.on("info", function(e4, A3, n3, r3) {
        t3._oninfo(e4, A3, n3, r3);
      });
    }, u.prototype._ignore = function() {
      this._part && !this._ignoreData && (this._ignoreData = true, this._part.on("error", l), this._part.resume());
    }, u.prototype._oninfo = function(e3, t3, A3, n3) {
      let r3;
      const o3 = this;
      let i2, c2 = 0, l2 = true;
      if (!this._part && this._justMatched && t3) {
        for (; this._dashes < 2 && A3 + c2 < n3; ) {
          if (45 !== t3[A3 + c2]) {
            this._dashes && (r3 = a), this._dashes = 0;
            break;
          }
          ++c2, ++this._dashes;
        }
        if (2 === this._dashes && (A3 + c2 < n3 && 0 !== this.listenerCount("trailer") && this.emit("trailer", t3.slice(A3 + c2, n3)), this.reset(), this._finished = true, 0 === o3._parts && (o3._realFinish = true, o3.emit("finish"), o3._realFinish = false)), this._dashes) return;
      }
      this._justMatched && (this._justMatched = false), this._part || (this._part = new s(this._partOpts), this._part._read = function(e4) {
        o3._unpause();
      }, this._isPreamble && 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : true !== this._isPreamble && 0 !== this.listenerCount("part") ? this.emit("part", this._part) : this._ignore(), this._isPreamble || (this._inHeader = true)), t3 && A3 < n3 && !this._ignoreData && (this._isPreamble || !this._inHeader ? (r3 && (l2 = this._part.push(r3)), l2 = this._part.push(t3.slice(A3, n3)), l2 || (this._pause = true)) : !this._isPreamble && this._inHeader && (r3 && this._hparser.push(r3), i2 = this._hparser.push(t3.slice(A3, n3)), !this._inHeader && void 0 !== i2 && i2 < n3 && this._oninfo(false, t3, A3 + i2, n3))), e3 && (this._hparser.reset(), this._isPreamble ? this._isPreamble = false : A3 !== n3 && (++this._parts, this._part.on("end", function() {
        0 === --o3._parts && (o3._finished ? (o3._realFinish = true, o3.emit("finish"), o3._realFinish = false) : o3._unpause());
      })), this._part.push(null), this._part = void 0, this._ignoreData = false, this._justMatched = true, this._dashes = 0);
    }, u.prototype._unpause = function() {
      if (this._pause && (this._pause = false, this._cb)) {
        const e3 = this._cb;
        this._cb = void 0, e3();
      }
    }, e2.exports = u;
  }