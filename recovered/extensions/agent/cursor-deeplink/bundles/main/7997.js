// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 7997 range:737233..738486
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7997: (e2, t2, A2) => {
    "use strict";
    const { webidl: n2 } = A2(8005), r2 = /* @__PURE__ */ Symbol("ProgressEvent state");
    class o2 extends Event {
      constructor(e3, t3 = {}) {
        super(e3 = n2.converters.DOMString(e3), t3 = n2.converters.ProgressEventInit(t3 ?? {})), this[r2] = { lengthComputable: t3.lengthComputable, loaded: t3.loaded, total: t3.total };
      }
      get lengthComputable() {
        return n2.brandCheck(this, o2), this[r2].lengthComputable;
      }
      get loaded() {
        return n2.brandCheck(this, o2), this[r2].loaded;
      }
      get total() {
        return n2.brandCheck(this, o2), this[r2].total;
      }
    }
    n2.converters.ProgressEventInit = n2.dictionaryConverter([{ key: "lengthComputable", converter: n2.converters.boolean, defaultValue: false }, { key: "loaded", converter: n2.converters["unsigned long long"], defaultValue: 0 }, { key: "total", converter: n2.converters["unsigned long long"], defaultValue: 0 }, { key: "bubbles", converter: n2.converters.boolean, defaultValue: false }, { key: "cancelable", converter: n2.converters.boolean, defaultValue: false }, { key: "composed", converter: n2.converters.boolean, defaultValue: false }]), e2.exports = { ProgressEvent: o2 };
  }