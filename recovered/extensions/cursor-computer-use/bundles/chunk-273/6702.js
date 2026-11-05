// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/273.js sha256:057ec17488f68f7434e12ce31e59180a7183ddc2aab226744d2893aed3fcf167
// module: 6702 range:47727..50105
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6702: (e) => {
  function t(e2, t2, i, a) {
    this.buffer = e2, this.offset = t2 || 0, i = "number" == typeof i ? i : e2.length, this.endPosition = this.offset + i, this.setBigEndian(a);
  }
  t.prototype = { setBigEndian: function(e2) {
    this.bigEndian = !!e2;
  }, nextUInt8: function() {
    var e2 = this.buffer.readUInt8(this.offset);
    return this.offset += 1, e2;
  }, nextInt8: function() {
    var e2 = this.buffer.readInt8(this.offset);
    return this.offset += 1, e2;
  }, nextUInt16: function() {
    var e2 = this.bigEndian ? this.buffer.readUInt16BE(this.offset) : this.buffer.readUInt16LE(this.offset);
    return this.offset += 2, e2;
  }, nextUInt32: function() {
    var e2 = this.bigEndian ? this.buffer.readUInt32BE(this.offset) : this.buffer.readUInt32LE(this.offset);
    return this.offset += 4, e2;
  }, nextInt16: function() {
    var e2 = this.bigEndian ? this.buffer.readInt16BE(this.offset) : this.buffer.readInt16LE(this.offset);
    return this.offset += 2, e2;
  }, nextInt32: function() {
    var e2 = this.bigEndian ? this.buffer.readInt32BE(this.offset) : this.buffer.readInt32LE(this.offset);
    return this.offset += 4, e2;
  }, nextFloat: function() {
    var e2 = this.bigEndian ? this.buffer.readFloatBE(this.offset) : this.buffer.readFloatLE(this.offset);
    return this.offset += 4, e2;
  }, nextDouble: function() {
    var e2 = this.bigEndian ? this.buffer.readDoubleBE(this.offset) : this.buffer.readDoubleLE(this.offset);
    return this.offset += 8, e2;
  }, nextBuffer: function(e2) {
    var t2 = this.buffer.slice(this.offset, this.offset + e2);
    return this.offset += e2, t2;
  }, remainingLength: function() {
    return this.endPosition - this.offset;
  }, nextString: function(e2) {
    var t2 = this.buffer.toString("utf8", this.offset, this.offset + e2);
    return this.offset += e2, t2;
  }, mark: function() {
    var e2 = this;
    return { openWithOffset: function(i) {
      return i = (i || 0) + this.offset, new t(e2.buffer, i, e2.endPosition - i, e2.bigEndian);
    }, offset: this.offset };
  }, offsetFrom: function(e2) {
    return this.offset - e2.offset;
  }, skip: function(e2) {
    this.offset += e2;
  }, branch: function(e2, i) {
    return i = "number" == typeof i ? i : this.endPosition - (this.offset + e2), new t(this.buffer, this.offset + e2, i, this.bigEndian);
  } }, e.exports = t;
}