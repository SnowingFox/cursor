// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 74017 range:11139305..11140531
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
74017: (e, t, r) => {
    "use strict";
    const { webidl: n } = r(18193), s = /* @__PURE__ */ Symbol("ProgressEvent state");
    class o extends Event {
      constructor(e2, t2 = {}) {
        super(e2 = n.converters.DOMString(e2), t2 = n.converters.ProgressEventInit(t2 ?? {})), this[s] = { lengthComputable: t2.lengthComputable, loaded: t2.loaded, total: t2.total };
      }
      get lengthComputable() {
        return n.brandCheck(this, o), this[s].lengthComputable;
      }
      get loaded() {
        return n.brandCheck(this, o), this[s].loaded;
      }
      get total() {
        return n.brandCheck(this, o), this[s].total;
      }
    }
    n.converters.ProgressEventInit = n.dictionaryConverter([{ key: "lengthComputable", converter: n.converters.boolean, defaultValue: false }, { key: "loaded", converter: n.converters["unsigned long long"], defaultValue: 0 }, { key: "total", converter: n.converters["unsigned long long"], defaultValue: 0 }, { key: "bubbles", converter: n.converters.boolean, defaultValue: false }, { key: "cancelable", converter: n.converters.boolean, defaultValue: false }, { key: "composed", converter: n.converters.boolean, defaultValue: false }]), e.exports = { ProgressEvent: o };
  }