// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 7997 range:636180..637433
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7997: (e2, n2, t2) => {
    "use strict";
    const { webidl: a2 } = t2(8005), s2 = /* @__PURE__ */ Symbol("ProgressEvent state");
    class o2 extends Event {
      constructor(e3, n3 = {}) {
        super(e3 = a2.converters.DOMString(e3), n3 = a2.converters.ProgressEventInit(n3 ?? {})), this[s2] = { lengthComputable: n3.lengthComputable, loaded: n3.loaded, total: n3.total };
      }
      get lengthComputable() {
        return a2.brandCheck(this, o2), this[s2].lengthComputable;
      }
      get loaded() {
        return a2.brandCheck(this, o2), this[s2].loaded;
      }
      get total() {
        return a2.brandCheck(this, o2), this[s2].total;
      }
    }
    a2.converters.ProgressEventInit = a2.dictionaryConverter([{ key: "lengthComputable", converter: a2.converters.boolean, defaultValue: false }, { key: "loaded", converter: a2.converters["unsigned long long"], defaultValue: 0 }, { key: "total", converter: a2.converters["unsigned long long"], defaultValue: 0 }, { key: "bubbles", converter: a2.converters.boolean, defaultValue: false }, { key: "cancelable", converter: a2.converters.boolean, defaultValue: false }, { key: "composed", converter: a2.converters.boolean, defaultValue: false }]), e2.exports = { ProgressEvent: o2 };
  }