// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 4887 range:745812..746373
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4887: (e2) => {
    "use strict";
    e2.exports.mixin = function(e3, a2) {
      const n2 = Object.getOwnPropertyNames(a2);
      for (let t2 = 0; t2 < n2.length; ++t2) Object.defineProperty(e3, n2[t2], Object.getOwnPropertyDescriptor(a2, n2[t2]));
    }, e2.exports.wrapperSymbol = /* @__PURE__ */ Symbol("wrapper"), e2.exports.implSymbol = /* @__PURE__ */ Symbol("impl"), e2.exports.wrapperForImpl = function(a2) {
      return a2[e2.exports.wrapperSymbol];
    }, e2.exports.implForWrapper = function(a2) {
      return a2[e2.exports.implSymbol];
    };
  }