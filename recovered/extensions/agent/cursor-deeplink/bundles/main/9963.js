// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 9963 range:852956..855159
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9963: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(2276);
    function r2(e3) {
      this._reporterState = { obj: null, path: [], options: e3 || {}, errors: [] };
    }
    function o2(e3, t3) {
      this.path = e3, this.rethrow(t3);
    }
    t2.a = r2, r2.prototype.isError = function(e3) {
      return e3 instanceof o2;
    }, r2.prototype.save = function() {
      const e3 = this._reporterState;
      return { obj: e3.obj, pathLen: e3.path.length };
    }, r2.prototype.restore = function(e3) {
      const t3 = this._reporterState;
      t3.obj = e3.obj, t3.path = t3.path.slice(0, e3.pathLen);
    }, r2.prototype.enterKey = function(e3) {
      return this._reporterState.path.push(e3);
    }, r2.prototype.exitKey = function(e3) {
      const t3 = this._reporterState;
      t3.path = t3.path.slice(0, e3 - 1);
    }, r2.prototype.leaveKey = function(e3, t3, A3) {
      const n3 = this._reporterState;
      this.exitKey(e3), null !== n3.obj && (n3.obj[t3] = A3);
    }, r2.prototype.path = function() {
      return this._reporterState.path.join("/");
    }, r2.prototype.enterObject = function() {
      const e3 = this._reporterState, t3 = e3.obj;
      return e3.obj = {}, t3;
    }, r2.prototype.leaveObject = function(e3) {
      const t3 = this._reporterState, A3 = t3.obj;
      return t3.obj = e3, A3;
    }, r2.prototype.error = function(e3) {
      let t3;
      const A3 = this._reporterState, n3 = e3 instanceof o2;
      if (t3 = n3 ? e3 : new o2(A3.path.map(function(e4) {
        return "[" + JSON.stringify(e4) + "]";
      }).join(""), e3.message || e3, e3.stack), !A3.options.partial) throw t3;
      return n3 || A3.errors.push(t3), t3;
    }, r2.prototype.wrapResult = function(e3) {
      const t3 = this._reporterState;
      return t3.options.partial ? { result: this.isError(e3) ? null : e3, errors: t3.errors } : e3;
    }, n2(o2, Error), o2.prototype.rethrow = function(e3) {
      if (this.message = e3 + " at: " + (this.path || "(shallow)"), Error.captureStackTrace && Error.captureStackTrace(this, o2), !this.stack) try {
        throw new Error(this.message);
      } catch (e4) {
        this.stack = e4.stack;
      }
      return this;
    };
  }