// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/928.js sha256:1e34f3da2dac0c414cd02b42da502ab9dbc42f1b80782b7c58dc88e4d9ebf8e0
// module: 44803 range:15607..18424
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
44803: (e, t, r) => {
  "use strict";
  var n = r(96095), a = r(77353), i = r(63376), o = r(55534), s = r(3638), f = Object.prototype.toString;
  function l(e2) {
    if (!(this instanceof l)) return new l(e2);
    this.options = a.assign({ level: -1, method: 8, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: 0, to: "" }, e2 || {});
    var t2 = this.options;
    t2.raw && t2.windowBits > 0 ? t2.windowBits = -t2.windowBits : t2.gzip && t2.windowBits > 0 && t2.windowBits < 16 && (t2.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
    var r2 = n.deflateInit2(this.strm, t2.level, t2.method, t2.windowBits, t2.memLevel, t2.strategy);
    if (0 !== r2) throw new Error(o[r2]);
    if (t2.header && n.deflateSetHeader(this.strm, t2.header), t2.dictionary) {
      var h2;
      if (h2 = "string" == typeof t2.dictionary ? i.string2buf(t2.dictionary) : "[object ArrayBuffer]" === f.call(t2.dictionary) ? new Uint8Array(t2.dictionary) : t2.dictionary, 0 !== (r2 = n.deflateSetDictionary(this.strm, h2))) throw new Error(o[r2]);
      this._dict_set = true;
    }
  }
  function h(e2, t2) {
    var r2 = new l(t2);
    if (r2.push(e2, true), r2.err) throw r2.msg || o[r2.err];
    return r2.result;
  }
  l.prototype.push = function(e2, t2) {
    var r2, o2, s2 = this.strm, l2 = this.options.chunkSize;
    if (this.ended) return false;
    o2 = t2 === ~~t2 ? t2 : true === t2 ? 4 : 0, "string" == typeof e2 ? s2.input = i.string2buf(e2) : "[object ArrayBuffer]" === f.call(e2) ? s2.input = new Uint8Array(e2) : s2.input = e2, s2.next_in = 0, s2.avail_in = s2.input.length;
    do {
      if (0 === s2.avail_out && (s2.output = new a.Buf8(l2), s2.next_out = 0, s2.avail_out = l2), 1 !== (r2 = n.deflate(s2, o2)) && 0 !== r2) return this.onEnd(r2), this.ended = true, false;
      0 !== s2.avail_out && (0 !== s2.avail_in || 4 !== o2 && 2 !== o2) || ("string" === this.options.to ? this.onData(i.buf2binstring(a.shrinkBuf(s2.output, s2.next_out))) : this.onData(a.shrinkBuf(s2.output, s2.next_out)));
    } while ((s2.avail_in > 0 || 0 === s2.avail_out) && 1 !== r2);
    return 4 === o2 ? (r2 = n.deflateEnd(this.strm), this.onEnd(r2), this.ended = true, 0 === r2) : 2 !== o2 || (this.onEnd(0), s2.avail_out = 0, true);
  }, l.prototype.onData = function(e2) {
    this.chunks.push(e2);
  }, l.prototype.onEnd = function(e2) {
    0 === e2 && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
  }, t.Deflate = l, t.deflate = h, t.deflateRaw = function(e2, t2) {
    return (t2 = t2 || {}).raw = true, h(e2, t2);
  }, t.gzip = function(e2, t2) {
    return (t2 = t2 || {}).gzip = true, h(e2, t2);
  };
}