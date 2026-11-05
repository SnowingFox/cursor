// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 424 range:17405..18517
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
424: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(7912), r2 = A2(8720), o2 = A2(2276);
    function s(e3, t3) {
      this.name = e3, this.body = t3, this.decoders = {}, this.encoders = {};
    }
    t2.define = function(e3, t3) {
      return new s(e3, t3);
    }, s.prototype._createNamed = function(e3) {
      const t3 = this.name;
      function A3(e4) {
        this._initNamed(e4, t3);
      }
      return o2(A3, e3), A3.prototype._initNamed = function(t4, A4) {
        e3.call(this, t4, A4);
      }, new A3(this);
    }, s.prototype._getDecoder = function(e3) {
      return e3 = e3 || "der", this.decoders.hasOwnProperty(e3) || (this.decoders[e3] = this._createNamed(r2[e3])), this.decoders[e3];
    }, s.prototype.decode = function(e3, t3, A3) {
      return this._getDecoder(t3).decode(e3, A3);
    }, s.prototype._getEncoder = function(e3) {
      return e3 = e3 || "der", this.encoders.hasOwnProperty(e3) || (this.encoders[e3] = this._createNamed(n2[e3])), this.encoders[e3];
    }, s.prototype.encode = function(e3, t3, A3) {
      return this._getEncoder(t3).encode(e3, A3);
    };
  }