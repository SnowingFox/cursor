// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 7997 range:926554..927807
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7997: (e2, a2, n2) => {
    "use strict";
    const { webidl: t2 } = n2(8005), s2 = /* @__PURE__ */ Symbol("ProgressEvent state");
    class o2 extends Event {
      constructor(e3, a3 = {}) {
        super(e3 = t2.converters.DOMString(e3), a3 = t2.converters.ProgressEventInit(a3 ?? {})), this[s2] = { lengthComputable: a3.lengthComputable, loaded: a3.loaded, total: a3.total };
      }
      get lengthComputable() {
        return t2.brandCheck(this, o2), this[s2].lengthComputable;
      }
      get loaded() {
        return t2.brandCheck(this, o2), this[s2].loaded;
      }
      get total() {
        return t2.brandCheck(this, o2), this[s2].total;
      }
    }
    t2.converters.ProgressEventInit = t2.dictionaryConverter([{ key: "lengthComputable", converter: t2.converters.boolean, defaultValue: false }, { key: "loaded", converter: t2.converters["unsigned long long"], defaultValue: 0 }, { key: "total", converter: t2.converters["unsigned long long"], defaultValue: 0 }, { key: "bubbles", converter: t2.converters.boolean, defaultValue: false }, { key: "cancelable", converter: t2.converters.boolean, defaultValue: false }, { key: "composed", converter: t2.converters.boolean, defaultValue: false }]), e2.exports = { ProgressEvent: o2 };
  }