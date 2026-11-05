// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/273.js sha256:918321c092763b0f5509b45d1560ac236164a596e0ab5a603460d95abe18903b
// module: 92774 range:78939..81472
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
92774: (e) => {
  function t(e2, t2, i, a, n, r) {
    this.global = n, t2 = t2 || 0, i = i || e2.byteLength - t2, this.arrayBuffer = e2.slice(t2, t2 + i), this.view = new n.DataView(this.arrayBuffer, 0, this.arrayBuffer.byteLength), this.setBigEndian(a), this.offset = 0, this.parentOffset = (r || 0) + t2;
  }
  t.prototype = { setBigEndian: function(e2) {
    this.littleEndian = !e2;
  }, nextUInt8: function() {
    var e2 = this.view.getUint8(this.offset);
    return this.offset += 1, e2;
  }, nextInt8: function() {
    var e2 = this.view.getInt8(this.offset);
    return this.offset += 1, e2;
  }, nextUInt16: function() {
    var e2 = this.view.getUint16(this.offset, this.littleEndian);
    return this.offset += 2, e2;
  }, nextUInt32: function() {
    var e2 = this.view.getUint32(this.offset, this.littleEndian);
    return this.offset += 4, e2;
  }, nextInt16: function() {
    var e2 = this.view.getInt16(this.offset, this.littleEndian);
    return this.offset += 2, e2;
  }, nextInt32: function() {
    var e2 = this.view.getInt32(this.offset, this.littleEndian);
    return this.offset += 4, e2;
  }, nextFloat: function() {
    var e2 = this.view.getFloat32(this.offset, this.littleEndian);
    return this.offset += 4, e2;
  }, nextDouble: function() {
    var e2 = this.view.getFloat64(this.offset, this.littleEndian);
    return this.offset += 8, e2;
  }, nextBuffer: function(e2) {
    var t2 = this.arrayBuffer.slice(this.offset, this.offset + e2);
    return this.offset += e2, t2;
  }, remainingLength: function() {
    return this.arrayBuffer.byteLength - this.offset;
  }, nextString: function(e2) {
    var t2 = this.arrayBuffer.slice(this.offset, this.offset + e2);
    return t2 = String.fromCharCode.apply(null, new this.global.Uint8Array(t2)), this.offset += e2, t2;
  }, mark: function() {
    var e2 = this;
    return { openWithOffset: function(i) {
      return i = (i || 0) + this.offset, new t(e2.arrayBuffer, i, e2.arrayBuffer.byteLength - i, !e2.littleEndian, e2.global, e2.parentOffset);
    }, offset: this.offset, getParentOffset: function() {
      return e2.parentOffset;
    } };
  }, offsetFrom: function(e2) {
    return this.parentOffset + this.offset - (e2.offset + e2.getParentOffset());
  }, skip: function(e2) {
    this.offset += e2;
  }, branch: function(e2, i) {
    return i = "number" == typeof i ? i : this.arrayBuffer.byteLength - (this.offset + e2), new t(this.arrayBuffer, this.offset + e2, i, !this.littleEndian, this.global, this.parentOffset);
  } }, e.exports = t;
}