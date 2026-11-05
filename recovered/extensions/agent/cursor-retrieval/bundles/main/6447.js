// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 6447 range:801494..805195
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6447: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(6151), s2 = n2(4887), o2 = n2(8706), r2 = s2.implSymbol;
    function i2(a3) {
      if (!this || this[r2] || !(this instanceof i2)) throw new TypeError("Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
      if (arguments.length < 1) throw new TypeError("Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.");
      const n3 = [];
      for (let e3 = 0; e3 < arguments.length && e3 < 2; ++e3) n3[e3] = arguments[e3];
      n3[0] = t2.USVString(n3[0]), void 0 !== n3[1] && (n3[1] = t2.USVString(n3[1])), e2.exports.setup(this, n3);
    }
    i2.prototype.toJSON = function() {
      if (!this || !e2.exports.is(this)) throw new TypeError("Illegal invocation");
      const a3 = [];
      for (let e3 = 0; e3 < arguments.length && e3 < 0; ++e3) a3[e3] = arguments[e3];
      return this[r2].toJSON.apply(this[r2], a3);
    }, Object.defineProperty(i2.prototype, "href", { get() {
      return this[r2].href;
    }, set(e3) {
      e3 = t2.USVString(e3), this[r2].href = e3;
    }, enumerable: true, configurable: true }), i2.prototype.toString = function() {
      if (!this || !e2.exports.is(this)) throw new TypeError("Illegal invocation");
      return this.href;
    }, Object.defineProperty(i2.prototype, "origin", { get() {
      return this[r2].origin;
    }, enumerable: true, configurable: true }), Object.defineProperty(i2.prototype, "protocol", { get() {
      return this[r2].protocol;
    }, set(e3) {
      e3 = t2.USVString(e3), this[r2].protocol = e3;
    }, enumerable: true, configurable: true }), Object.defineProperty(i2.prototype, "username", { get() {
      return this[r2].username;
    }, set(e3) {
      e3 = t2.USVString(e3), this[r2].username = e3;
    }, enumerable: true, configurable: true }), Object.defineProperty(i2.prototype, "password", { get() {
      return this[r2].password;
    }, set(e3) {
      e3 = t2.USVString(e3), this[r2].password = e3;
    }, enumerable: true, configurable: true }), Object.defineProperty(i2.prototype, "host", { get() {
      return this[r2].host;
    }, set(e3) {
      e3 = t2.USVString(e3), this[r2].host = e3;
    }, enumerable: true, configurable: true }), Object.defineProperty(i2.prototype, "hostname", { get() {
      return this[r2].hostname;
    }, set(e3) {
      e3 = t2.USVString(e3), this[r2].hostname = e3;
    }, enumerable: true, configurable: true }), Object.defineProperty(i2.prototype, "port", { get() {
      return this[r2].port;
    }, set(e3) {
      e3 = t2.USVString(e3), this[r2].port = e3;
    }, enumerable: true, configurable: true }), Object.defineProperty(i2.prototype, "pathname", { get() {
      return this[r2].pathname;
    }, set(e3) {
      e3 = t2.USVString(e3), this[r2].pathname = e3;
    }, enumerable: true, configurable: true }), Object.defineProperty(i2.prototype, "search", { get() {
      return this[r2].search;
    }, set(e3) {
      e3 = t2.USVString(e3), this[r2].search = e3;
    }, enumerable: true, configurable: true }), Object.defineProperty(i2.prototype, "hash", { get() {
      return this[r2].hash;
    }, set(e3) {
      e3 = t2.USVString(e3), this[r2].hash = e3;
    }, enumerable: true, configurable: true }), e2.exports = { is: (e3) => !!e3 && e3[r2] instanceof o2.implementation, create(e3, a3) {
      let n3 = Object.create(i2.prototype);
      return this.setup(n3, e3, a3), n3;
    }, setup(e3, a3, n3) {
      n3 || (n3 = {}), n3.wrapper = e3, e3[r2] = new o2.implementation(a3, n3), e3[r2][s2.wrapperSymbol] = e3;
    }, interface: i2, expose: { Window: { URL: i2 }, Worker: { URL: i2 } } };
  }