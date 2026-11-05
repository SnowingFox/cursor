// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 7997 range:604760..606013
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7997: (e2, A2, t2) => {
    "use strict";
    const { webidl: n2 } = t2(8005), r2 = /* @__PURE__ */ Symbol("ProgressEvent state");
    class o2 extends Event {
      constructor(e3, A3 = {}) {
        super(e3 = n2.converters.DOMString(e3), A3 = n2.converters.ProgressEventInit(A3 ?? {})), this[r2] = { lengthComputable: A3.lengthComputable, loaded: A3.loaded, total: A3.total };
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