// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 15791 range:4150365..4155857
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
15791: (e, t, r) => {
    var n = r(76017), s = r(44556), o = r(28066), i = r(72179), a = r(49229), c = r(66722);
    const l = (function() {
      const e2 = [new a(), new s(), new o(), new i()], t2 = ["UTF-8", "UTF-32LE", "UTF-32BE", "UTF-32BE", "UTF-16LE", "UTF-16BE", "X-ISO-10646-UCS-4-3412", "X-ISO-10646-UCS-4-2143"].slice(0);
      for (const r2 of e2) [].push.apply(t2, r2.getSupportedCharsetNames());
      return t2;
    })(), u = (function() {
      const e2 = [];
      for (const t2 of l) e2.push(t2.toLocaleLowerCase(), t2.toLocaleLowerCase().replace(/-/g, ""));
      return e2;
    })();
    e.exports = function(e2) {
      if (e2 || (e2 = {}), "number" != typeof e2.minimumThreshold && (e2.detectEncodings ? e2.minimumThreshold = 0 : e2.minimumThreshold = 0.2), e2.detectEncodings) {
        for (const t3 of e2.detectEncodings) if (!u.includes(t3.toLowerCase())) throw new Error(`Encoding ${t3} is not supported. Supported encodings: ${l}.`);
      }
      var t2 = 0, r2 = 1, d = 2, p = this;
      function m(t3) {
        if (!e2.detectEncodings) return true;
        var r3 = e2.detectEncodings.map((e3) => e3.toLowerCase());
        return r3.includes(t3.toLowerCase());
      }
      this.reset = function() {
        this.result = { encoding: null, confidence: 0 }, this.results = [], this.done = false, this._mStart = true, this._mGotData = false, this._mInputState = t2, this._mLastChar = [], this._mBOM = "", this._mEscCharsetProber && this._mEscCharsetProber.reset();
        for (var e3, r3 = 0; e3 = this._mCharsetProbers[r3]; r3++) e3.reset();
      }, this.feed = function(e3) {
        if (!this.done && e3.length) {
          if (this._mGotData || (this._mBOM += e3, "ï»¿" == this._mBOM.slice(0, 3) && m("UTF-8") ? this.result = { encoding: "UTF-8", confidence: 1 } : "ÿþ\0\0" == this._mBOM.slice(0, 4) && m("UTF-32LE") ? this.result = { encoding: "UTF-32LE", confidence: 1 } : "\0\0þÿ" == this._mBOM.slice(0, 4) && m("UTF-32BE") ? this.result = { encoding: "UTF-32BE", confidence: 1 } : "þÿ\0\0" == this._mBOM.slice(0, 4) && m("X-ISO-10646-UCS-4-3412") ? this.result = { encoding: "X-ISO-10646-UCS-4-3412", confidence: 1 } : "\0\0ÿþ" == this._mBOM.slice(0, 4) && m("X-ISO-10646-UCS-4-2143") ? this.result = { encoding: "X-ISO-10646-UCS-4-2143", confidence: 1 } : "ÿþ" == this._mBOM.slice(0, 2) && m("UTF-16LE") ? this.result = { encoding: "UTF-16LE", confidence: 1 } : "þÿ" == this._mBOM.slice(0, 2) && m("UTF-16BE") && (this.result = { encoding: "UTF-16BE", confidence: 1 }), this.result.confidence > 0 && (this.results = [this.result]), this._mBOM.length > 3 && (this._mGotData = true)), this.result.encoding && this.result.confidence > 0) this.done = true;
          else if (this._mInputState == t2 && (this._highBitDetector.test(e3) ? this._mInputState = d : this._escDetector.test(this._mLastChar.join("") + e3) && (this._mInputState = r2)), this._mLastChar = e3.slice(-1).split(""), this._mInputState == r2) this._mEscCharsetProber || (this._mEscCharsetProber = new a()), this._mEscCharsetProber.feed(e3) == n.foundIt && m(this._mEscCharsetProber.getCharsetName()) && (this.result = { encoding: this._mEscCharsetProber.getCharsetName(), confidence: this._mEscCharsetProber.getConfidence() }, this.results = [this.result], this.done = true);
          else if (this._mInputState == d) {
            0 == this._mCharsetProbers.length && (this._mCharsetProbers = [new s(), new o(), new i()]);
            for (var c2, l2 = 0; c2 = this._mCharsetProbers[l2]; l2++) if (c2.feed(e3) == n.foundIt && m(c2.getCharsetName())) {
              this.result = { encoding: c2.getCharsetName(), confidence: c2.getConfidence() }, this.results = [this.result], this.done = true;
              break;
            }
          }
        }
      }, this.close = function() {
        if (!this.done) if (0 !== this._mBOM.length) {
          if (this.done = true, this._mInputState == t2 && m("ascii")) return c.log("pure ascii"), this.result = { encoding: "ascii", confidence: 1 }, this.results.push(this.result), this.result;
          if (this._mInputState == d) {
            let t3 = 0, o2 = false;
            for (var r3 = 0; s2 = this._mCharsetProbers[r3]; r3++) {
              if (!s2) continue;
              const e3 = s2.getCharsetName(), r4 = s2.getConfidence();
              "windows-1252" === s2.getCharsetName() && (t3 = r4), e3 && m(e3) && (this.results.push({ encoding: s2.getCharsetName(), confidence: r4 }), "windows-1250" === s2.getCharsetName() && (o2 = true), c.log(s2.getCharsetName() + " confidence " + r4));
            }
            if (t3 && !o2 && m("windows-1250") && this.results.push({ encoding: "windows-1250", confidence: t3 - Math.pow(0.5, String(t3).length - 1) }), this.results.sort(function(e3, t4) {
              return t4.confidence - e3.confidence;
            }), this.results.length > 0) {
              var n2 = this.results[0];
              if (n2.confidence >= e2.minimumThreshold) return this.result = n2, n2;
            }
          }
          if (c.enabled) {
            c.log("no probers hit minimum threshhold\n");
            var s2;
            for (r3 = 0; s2 = this._mCharsetProbers[r3]; r3++) s2 && m(s2.getCharsetName()) && c.log(s2.getCharsetName() + " confidence = " + s2.getConfidence() + "\n");
          }
        } else c.log("no data received!\n");
      }, p._highBitDetector = /[\x80-\xFF]/, p._escDetector = /(\x1B|~\{)/, p._mEscCharsetProber = null, p._mCharsetProbers = [], p.reset();
    };
  }