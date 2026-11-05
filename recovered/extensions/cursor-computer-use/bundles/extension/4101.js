// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 4101 range:388569..391797
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4101: (e2, n2, t2) => {
    var a2 = t2(9896), s2 = t2(9023), o2 = t2(2203), r = o2.Readable, i = o2.PassThrough, A = t2(363), c = t2(4434).EventEmitter;
    function l(e3) {
      c.call(this), this.fd = e3, this.pend = new A(), this.pend.max = 1, this.refCount = 0;
    }
    function d(e3, n3) {
      n3 = n3 || {}, r.call(this, n3), this.context = e3, this.context.ref(), this.start = n3.start || 0, this.endOffset = n3.end, this.pos = this.start;
    }
    function m(e3) {
      c.call(this), this.refCount = 0, this.buffer = e3;
    }
    n2.BufferSlicer = m, n2.FdSlicer = l, s2.inherits(l, c), l.prototype.read = function(e3, n3, t3, s3, o3) {
      var r2 = this;
      r2.pend.go(function(i2) {
        a2.read(r2.fd, e3, n3, t3, s3, function(e4, n4, t4) {
          i2(), o3(e4, n4, t4);
        });
      });
    }, l.prototype.createReadStream = function(e3) {
      return new d(this, e3);
    }, l.prototype.ref = function() {
      this.refCount += 1;
    }, l.prototype.unref = function() {
      var e3 = this;
      if (e3.refCount -= 1, e3.refCount < 0) throw new Error("invalid unref");
      e3.refCount > 0 || a2.close(e3.fd, function(n3) {
        n3 ? e3.emit("error", n3) : e3.emit("close");
      });
    }, s2.inherits(d, r), d.prototype._read = function(e3) {
      var n3 = this, t3 = Math.min(n3._readableState.highWaterMark, e3);
      if (null != n3.endOffset && (t3 = Math.min(t3, n3.endOffset - n3.pos)), t3 <= 0) return n3.push(null), void this._cleanup();
      n3.context.pend.go(function(e4) {
        var s3 = Buffer.allocUnsafe(t3);
        a2.read(n3.context.fd, s3, 0, t3, n3.pos, function(t4, a3) {
          t4 ? n3.destroy(t4) : 0 === a3 ? (n3.push(null), n3._cleanup()) : (n3.pos += a3, n3.push(s3.slice(0, a3))), e4();
        });
      });
    }, d.prototype._destroy = function(e3, n3) {
      this._cleanup(), n3(e3);
    }, d.prototype._cleanup = function() {
      null != this.context && (this.context.unref(), this.context = null);
    }, s2.inherits(m, c), m.prototype.read = function(e3, n3, t3, a3, s3) {
      if (!(0 <= n3 && n3 <= e3.length)) throw new RangeError("offset outside buffer: 0 <= " + n3 + " <= " + e3.length);
      if (a3 < 0) throw new RangeError("position is negative: " + a3);
      n3 + t3 > e3.length && (t3 = e3.length - n3), a3 + t3 > this.buffer.length && (t3 = this.buffer.length - a3), t3 <= 0 ? setImmediate(function() {
        s3(null, 0);
      }) : (this.buffer.copy(e3, n3, a3, a3 + t3), setImmediate(function() {
        s3(null, t3);
      }));
    }, m.prototype.createReadStream = function(e3) {
      var n3 = new i(e3 = e3 || {});
      n3.start = e3.start || 0, n3.endOffset = e3.end, n3.pos = n3.endOffset || this.buffer.length;
      for (var t3 = this.buffer.slice(n3.start, n3.pos), a3 = 0; ; ) {
        var s3 = a3 + 65536;
        if (s3 >= t3.length) {
          a3 < t3.length && n3.write(t3.slice(a3, t3.length));
          break;
        }
        n3.write(t3.slice(a3, s3)), a3 = s3;
      }
      return n3.end(), n3;
    }, m.prototype.ref = function() {
      this.refCount += 1;
    }, m.prototype.unref = function() {
      if (this.refCount -= 1, this.refCount < 0) throw new Error("invalid unref");
    };
  }