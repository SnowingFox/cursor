// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 7710 range:586769..591772
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7710: (e2, A2, t2) => {
    "use strict";
    const n2 = t2(7075).Writable, r2 = t2(7975).inherits, o2 = t2(9512), s = t2(2340), a = t2(6879), i = Buffer.from("-"), c = Buffer.from("\r\n"), l = function() {
    };
    function g(e3) {
      if (!(this instanceof g)) return new g(e3);
      if (n2.call(this, e3), !e3 || !e3.headerFirst && "string" != typeof e3.boundary) throw new TypeError("Boundary required");
      "string" == typeof e3.boundary ? this.setBoundary(e3.boundary) : this._bparser = void 0, this._headerFirst = e3.headerFirst, this._dashes = 0, this._parts = 0, this._finished = false, this._realFinish = false, this._isPreamble = true, this._justMatched = false, this._firstWrite = true, this._inHeader = true, this._part = void 0, this._cb = void 0, this._ignoreData = false, this._partOpts = { highWaterMark: e3.partHwm }, this._pause = false;
      const A3 = this;
      this._hparser = new a(e3), this._hparser.on("header", function(e4) {
        A3._inHeader = false, A3._part.emit("header", e4);
      });
    }
    r2(g, n2), g.prototype.emit = function(e3) {
      if ("finish" !== e3 || this._realFinish) n2.prototype.emit.apply(this, arguments);
      else if (!this._finished) {
        const e4 = this;
        process.nextTick(function() {
          if (e4.emit("error", new Error("Unexpected end of multipart data")), e4._part && !e4._ignoreData) {
            const A3 = e4._isPreamble ? "Preamble" : "Part";
            return e4._part.emit("error", new Error(A3 + " terminated early due to unexpected end of multipart data")), e4._part.push(null), void process.nextTick(function() {
              e4._realFinish = true, e4.emit("finish"), e4._realFinish = false;
            });
          }
          e4._realFinish = true, e4.emit("finish"), e4._realFinish = false;
        });
      }
    }, g.prototype._write = function(e3, A3, t3) {
      if (!this._hparser && !this._bparser) return t3();
      if (this._headerFirst && this._isPreamble) {
        this._part || (this._part = new s(this._partOpts), 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : this._ignore());
        const A4 = this._hparser.push(e3);
        if (this._inHeader || void 0 === A4 || !(A4 < e3.length)) return t3();
        e3 = e3.slice(A4);
      }
      this._firstWrite && (this._bparser.push(c), this._firstWrite = false), this._bparser.push(e3), this._pause ? this._cb = t3 : t3();
    }, g.prototype.reset = function() {
      this._part = void 0, this._bparser = void 0, this._hparser = void 0;
    }, g.prototype.setBoundary = function(e3) {
      const A3 = this;
      this._bparser = new o2("\r\n--" + e3), this._bparser.on("info", function(e4, t3, n3, r3) {
        A3._oninfo(e4, t3, n3, r3);
      });
    }, g.prototype._ignore = function() {
      this._part && !this._ignoreData && (this._ignoreData = true, this._part.on("error", l), this._part.resume());
    }, g.prototype._oninfo = function(e3, A3, t3, n3) {
      let r3;
      const o3 = this;
      let a2, c2 = 0, l2 = true;
      if (!this._part && this._justMatched && A3) {
        for (; this._dashes < 2 && t3 + c2 < n3; ) {
          if (45 !== A3[t3 + c2]) {
            this._dashes && (r3 = i), this._dashes = 0;
            break;
          }
          ++c2, ++this._dashes;
        }
        if (2 === this._dashes && (t3 + c2 < n3 && 0 !== this.listenerCount("trailer") && this.emit("trailer", A3.slice(t3 + c2, n3)), this.reset(), this._finished = true, 0 === o3._parts && (o3._realFinish = true, o3.emit("finish"), o3._realFinish = false)), this._dashes) return;
      }
      this._justMatched && (this._justMatched = false), this._part || (this._part = new s(this._partOpts), this._part._read = function(e4) {
        o3._unpause();
      }, this._isPreamble && 0 !== this.listenerCount("preamble") ? this.emit("preamble", this._part) : true !== this._isPreamble && 0 !== this.listenerCount("part") ? this.emit("part", this._part) : this._ignore(), this._isPreamble || (this._inHeader = true)), A3 && t3 < n3 && !this._ignoreData && (this._isPreamble || !this._inHeader ? (r3 && (l2 = this._part.push(r3)), l2 = this._part.push(A3.slice(t3, n3)), l2 || (this._pause = true)) : !this._isPreamble && this._inHeader && (r3 && this._hparser.push(r3), a2 = this._hparser.push(A3.slice(t3, n3)), !this._inHeader && void 0 !== a2 && a2 < n3 && this._oninfo(false, A3, t3 + a2, n3))), e3 && (this._hparser.reset(), this._isPreamble ? this._isPreamble = false : t3 !== n3 && (++this._parts, this._part.on("end", function() {
        0 === --o3._parts && (o3._finished ? (o3._realFinish = true, o3.emit("finish"), o3._realFinish = false) : o3._unpause());
      })), this._part.push(null), this._part = void 0, this._ignoreData = false, this._justMatched = true, this._dashes = 0);
    }, g.prototype._unpause = function() {
      if (this._pause && (this._pause = false, this._cb)) {
        const e3 = this._cb;
        this._cb = void 0, e3();
      }
    }, e2.exports = g;
  }