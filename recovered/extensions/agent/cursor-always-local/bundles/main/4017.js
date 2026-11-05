// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 4017 range:1057185..1058438
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4017: (t2, e2, r2) => {
    "use strict";
    const { webidl: n2 } = r2(8193), s2 = /* @__PURE__ */ Symbol("ProgressEvent state");
    class i2 extends Event {
      constructor(t3, e3 = {}) {
        super(t3 = n2.converters.DOMString(t3), e3 = n2.converters.ProgressEventInit(e3 ?? {})), this[s2] = { lengthComputable: e3.lengthComputable, loaded: e3.loaded, total: e3.total };
      }
      get lengthComputable() {
        return n2.brandCheck(this, i2), this[s2].lengthComputable;
      }
      get loaded() {
        return n2.brandCheck(this, i2), this[s2].loaded;
      }
      get total() {
        return n2.brandCheck(this, i2), this[s2].total;
      }
    }
    n2.converters.ProgressEventInit = n2.dictionaryConverter([{ key: "lengthComputable", converter: n2.converters.boolean, defaultValue: false }, { key: "loaded", converter: n2.converters["unsigned long long"], defaultValue: 0 }, { key: "total", converter: n2.converters["unsigned long long"], defaultValue: 0 }, { key: "bubbles", converter: n2.converters.boolean, defaultValue: false }, { key: "cancelable", converter: n2.converters.boolean, defaultValue: false }, { key: "composed", converter: n2.converters.boolean, defaultValue: false }]), t2.exports = { ProgressEvent: i2 };
  }