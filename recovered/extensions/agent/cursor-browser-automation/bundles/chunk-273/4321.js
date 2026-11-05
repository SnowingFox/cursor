// @recovered-by cursor-re
// artifact: app/extensions/cursor-browser-automation/dist/273.js sha256:ab64b3e34dc97e1e5c85ecdaec9168b4137705ddedfa3c341bca35d6a42d36bc
// module: 4321 range:22244..24622
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4321: (e) => {
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