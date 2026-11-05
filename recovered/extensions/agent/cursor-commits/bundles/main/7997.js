// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 7997 range:605520..606773
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7997: (e2, n2, a2) => {
    "use strict";
    const { webidl: t2 } = a2(8005), s2 = /* @__PURE__ */ Symbol("ProgressEvent state");
    class o2 extends Event {
      constructor(e3, n3 = {}) {
        super(e3 = t2.converters.DOMString(e3), n3 = t2.converters.ProgressEventInit(n3 ?? {})), this[s2] = { lengthComputable: n3.lengthComputable, loaded: n3.loaded, total: n3.total };
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