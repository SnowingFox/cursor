// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 2524 range:3386..4648
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2524: (A, e, t) => {
  "use strict";
  const { webidl: r } = t(43290), s = /* @__PURE__ */ Symbol("ProgressEvent state");
  class o extends Event {
    constructor(A2, e2 = {}) {
      super(A2 = r.converters.DOMString(A2, "ProgressEvent constructor", "type"), e2 = r.converters.ProgressEventInit(e2 ?? {})), this[s] = { lengthComputable: e2.lengthComputable, loaded: e2.loaded, total: e2.total };
    }
    get lengthComputable() {
      return r.brandCheck(this, o), this[s].lengthComputable;
    }
    get loaded() {
      return r.brandCheck(this, o), this[s].loaded;
    }
    get total() {
      return r.brandCheck(this, o), this[s].total;
    }
  }
  r.converters.ProgressEventInit = r.dictionaryConverter([{ key: "lengthComputable", converter: r.converters.boolean, defaultValue: () => false }, { key: "loaded", converter: r.converters["unsigned long long"], defaultValue: () => 0 }, { key: "total", converter: r.converters["unsigned long long"], defaultValue: () => 0 }, { key: "bubbles", converter: r.converters.boolean, defaultValue: () => false }, { key: "cancelable", converter: r.converters.boolean, defaultValue: () => false }, { key: "composed", converter: r.converters.boolean, defaultValue: () => false }]), A.exports = { ProgressEvent: o };
}