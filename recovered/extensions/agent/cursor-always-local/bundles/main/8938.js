// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8938 range:5425534..5430540
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8938: (t2, e2, r2) => {
    "use strict";
    const n2 = r2(7075).Writable, s2 = r2(7975).inherits, i2 = r2(8940), o2 = r2(4568), a = r2(3123), u = Buffer.from("-"), c = Buffer.from("\r\n"), l = function() {
    };
    function m(t3) {
      if (!(this instanceof m)) return new m(t3);
      if (n2.call(this, t3), !t3 || !t3.headerFirst && "string" != typeof t3.boundary) throw new TypeError("Boundary required");
      "string" == typeof t3.boundary ? this.setBoundary(t3.boundary) : this._bparser = void 0, this._headerFirst = t3.headerFirst, this._dashes = 0, this._parts = 0, this._finished = false, this._realFinish = false, this._isPreamble = true, this._justMatched = false, this._firstWrite = true, this._inHeader = true, this._part = void 0, this._cb = void 0, this._ignoreData = false, this._partOpts = { highWaterMark: t3.partHwm }, this._pause = false;
      const e3 = this;
      this._hparser = new a(t3), this._hparser.on("header", function(t4) {
        e3._inHeader = false, e3._part.emit("header", t4);
      });
    }
    s2(m, n2), m.prototype.emit = function(t3) {
      if ("finish" !== t3 || this._realFinish) n2.prototype.emit.apply(this, arguments);
      else if (!this._finished) {
        const t4 = this;
        process.nextTick(function() {
          if (t4.emit("error", new Error("Unexpected end of multipart data")), t4._part && !t4._ignoreData) {
            const e3 = t4._isPreamble ? "Preamble" : "Part";
            return t4._part.emit("error", new Error(e3 + " terminated early due to unexpected end of multipart data")), t4._part.push(null), void process.nextTick(function() {
              t4._realFinish = true, t4.emit("finish"), t4._realFinish = false;
            });
          }
          t4._realFinish = true, t4.emit("finish"), t4._realFinish = false;
        });
      }
    }, m.prototype._write = function(t3, e3, r3) {
      if (!this._hparser && !this._bparser) return r3();
      if (this._headerFirst && this._isPreamble) {
        this._part || (this._part = new o2(this._partOpts), 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : this._ignore());
        const e4 = this._hparser.push(t3);
        if (this._inHeader || void 0 === e4 || !(e4 < t3.length)) return r3();
        t3 = t3.slice(e4);
      }
      this._firstWrite && (this._bparser.push(c), this._firstWrite = false), this._bparser.push(t3), this._pause ? this._cb = r3 : r3();
    }, m.prototype.reset = function() {
      this._part = void 0, this._bparser = void 0, this._hparser = void 0;
    }, m.prototype.setBoundary = function(t3) {
      const e3 = this;
      this._bparser = new i2("\r\n--" + t3), this._bparser.on("info", function(t4, r3, n3, s3) {
        e3._oninfo(t4, r3, n3, s3);
      });
    }, m.prototype._ignore = function() {
      this._part && !this._ignoreData && (this._ignoreData = true, this._part.on("error", l), this._part.resume());
    }, m.prototype._oninfo = function(t3, e3, r3, n3) {
      let s3;
      const i3 = this;
      let a2, c2 = 0, l2 = true;
      if (!this._part && this._justMatched && e3) {
        for (; this._dashes < 2 && r3 + c2 < n3; ) {
          if (45 !== e3[r3 + c2]) {
            this._dashes && (s3 = u), this._dashes = 0;
            break;
          }
          ++c2, ++this._dashes;
        }
        if (2 === this._dashes && (r3 + c2 < n3 && 0 !== this.listenerCount("trailer") && this.emit("trailer", e3.slice(r3 + c2, n3)), this.reset(), this._finished = true, 0 === i3._parts && (i3._realFinish = true, i3.emit("finish"), i3._realFinish = false)), this._dashes) return;
      }
      this._justMatched && (this._justMatched = false), this._part || (this._part = new o2(this._partOpts), this._part._read = function(t4) {
        i3._unpause();
      }, this._isPreamble && 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : true !== this._isPreamble && 0 !== this.listenerCount("part") ? this.emit("part", this._part) : this._ignore(), this._isPreamble || (this._inHeader = true)), e3 && r3 < n3 && !this._ignoreData && (this._isPreamble || !this._inHeader ? (s3 && (l2 = this._part.push(s3)), l2 = this._part.push(e3.slice(r3, n3)), l2 || (this._pause = true)) : !this._isPreamble && this._inHeader && (s3 && this._hparser.push(s3), a2 = this._hparser.push(e3.slice(r3, n3)), !this._inHeader && void 0 !== a2 && a2 < n3 && this._oninfo(false, e3, r3 + a2, n3))), t3 && (this._hparser.reset(), this._isPreamble ? this._isPreamble = false : r3 !== n3 && (++this._parts, this._part.on("end", function() {
        0 === --i3._parts && (i3._finished ? (i3._realFinish = true, i3.emit("finish"), i3._realFinish = false) : i3._unpause());
      })), this._part.push(null), this._part = void 0, this._ignoreData = false, this._justMatched = true, this._dashes = 0);
    }, m.prototype._unpause = function() {
      if (this._pause && (this._pause = false, this._cb)) {
        const t3 = this._cb;
        this._cb = void 0, t3();
      }
    }, t2.exports = m;
  }