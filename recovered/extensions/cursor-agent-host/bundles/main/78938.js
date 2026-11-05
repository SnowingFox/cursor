// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 78938 range:11626854..11631846
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
78938: (e, t, r) => {
    "use strict";
    const n = r(57075).Writable, s = r(57975).inherits, o = r(88940), i = r(14568), a = r(83123), c = Buffer.from("-"), l = Buffer.from("\r\n"), u = function() {
    };
    function d(e2) {
      if (!(this instanceof d)) return new d(e2);
      if (n.call(this, e2), !e2 || !e2.headerFirst && "string" != typeof e2.boundary) throw new TypeError("Boundary required");
      "string" == typeof e2.boundary ? this.setBoundary(e2.boundary) : this._bparser = void 0, this._headerFirst = e2.headerFirst, this._dashes = 0, this._parts = 0, this._finished = false, this._realFinish = false, this._isPreamble = true, this._justMatched = false, this._firstWrite = true, this._inHeader = true, this._part = void 0, this._cb = void 0, this._ignoreData = false, this._partOpts = { highWaterMark: e2.partHwm }, this._pause = false;
      const t2 = this;
      this._hparser = new a(e2), this._hparser.on("header", function(e3) {
        t2._inHeader = false, t2._part.emit("header", e3);
      });
    }
    s(d, n), d.prototype.emit = function(e2) {
      if ("finish" !== e2 || this._realFinish) n.prototype.emit.apply(this, arguments);
      else if (!this._finished) {
        const e3 = this;
        process.nextTick(function() {
          if (e3.emit("error", new Error("Unexpected end of multipart data")), e3._part && !e3._ignoreData) {
            const t2 = e3._isPreamble ? "Preamble" : "Part";
            return e3._part.emit("error", new Error(t2 + " terminated early due to unexpected end of multipart data")), e3._part.push(null), void process.nextTick(function() {
              e3._realFinish = true, e3.emit("finish"), e3._realFinish = false;
            });
          }
          e3._realFinish = true, e3.emit("finish"), e3._realFinish = false;
        });
      }
    }, d.prototype._write = function(e2, t2, r2) {
      if (!this._hparser && !this._bparser) return r2();
      if (this._headerFirst && this._isPreamble) {
        this._part || (this._part = new i(this._partOpts), 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : this._ignore());
        const t3 = this._hparser.push(e2);
        if (this._inHeader || void 0 === t3 || !(t3 < e2.length)) return r2();
        e2 = e2.slice(t3);
      }
      this._firstWrite && (this._bparser.push(l), this._firstWrite = false), this._bparser.push(e2), this._pause ? this._cb = r2 : r2();
    }, d.prototype.reset = function() {
      this._part = void 0, this._bparser = void 0, this._hparser = void 0;
    }, d.prototype.setBoundary = function(e2) {
      const t2 = this;
      this._bparser = new o("\r\n--" + e2), this._bparser.on("info", function(e3, r2, n2, s2) {
        t2._oninfo(e3, r2, n2, s2);
      });
    }, d.prototype._ignore = function() {
      this._part && !this._ignoreData && (this._ignoreData = true, this._part.on("error", u), this._part.resume());
    }, d.prototype._oninfo = function(e2, t2, r2, n2) {
      let s2;
      const o2 = this;
      let a2, l2 = 0, u2 = true;
      if (!this._part && this._justMatched && t2) {
        for (; this._dashes < 2 && r2 + l2 < n2; ) {
          if (45 !== t2[r2 + l2]) {
            this._dashes && (s2 = c), this._dashes = 0;
            break;
          }
          ++l2, ++this._dashes;
        }
        if (2 === this._dashes && (r2 + l2 < n2 && 0 !== this.listenerCount("trailer") && this.emit("trailer", t2.slice(r2 + l2, n2)), this.reset(), this._finished = true, 0 === o2._parts && (o2._realFinish = true, o2.emit("finish"), o2._realFinish = false)), this._dashes) return;
      }
      this._justMatched && (this._justMatched = false), this._part || (this._part = new i(this._partOpts), this._part._read = function(e3) {
        o2._unpause();
      }, this._isPreamble && 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : true !== this._isPreamble && 0 !== this.listenerCount("part") ? this.emit("part", this._part) : this._ignore(), this._isPreamble || (this._inHeader = true)), t2 && r2 < n2 && !this._ignoreData && (this._isPreamble || !this._inHeader ? (s2 && (u2 = this._part.push(s2)), u2 = this._part.push(t2.slice(r2, n2)), u2 || (this._pause = true)) : !this._isPreamble && this._inHeader && (s2 && this._hparser.push(s2), a2 = this._hparser.push(t2.slice(r2, n2)), !this._inHeader && void 0 !== a2 && a2 < n2 && this._oninfo(false, t2, r2 + a2, n2))), e2 && (this._hparser.reset(), this._isPreamble ? this._isPreamble = false : r2 !== n2 && (++this._parts, this._part.on("end", function() {
        0 === --o2._parts && (o2._finished ? (o2._realFinish = true, o2.emit("finish"), o2._realFinish = false) : o2._unpause());
      })), this._part.push(null), this._part = void 0, this._ignoreData = false, this._justMatched = true, this._dashes = 0);
    }, d.prototype._unpause = function() {
      if (this._pause && (this._pause = false, this._cb)) {
        const e2 = this._cb;
        this._cb = void 0, e2();
      }
    }, e.exports = d;
  }