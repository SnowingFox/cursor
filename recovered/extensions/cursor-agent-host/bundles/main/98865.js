// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 98865 range:15123917..15124752
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
98865: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.NonRecordingSpan = void 0;
    const n = r(63637);
    t.NonRecordingSpan = class {
      constructor(e2 = n.INVALID_SPAN_CONTEXT) {
        this._spanContext = e2;
      }
      spanContext() {
        return this._spanContext;
      }
      setAttribute(e2, t2) {
        return this;
      }
      setAttributes(e2) {
        return this;
      }
      addEvent(e2, t2) {
        return this;
      }
      addLink(e2) {
        return this;
      }
      addLinks(e2) {
        return this;
      }
      setStatus(e2) {
        return this;
      }
      updateName(e2) {
        return this;
      }
      end(e2) {
      }
      isRecording() {
        return false;
      }
      recordException(e2, t2) {
      }
    };
  }