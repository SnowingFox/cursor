// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8865 range:827740..828582
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8865: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.NonRecordingSpan = void 0;
    const n2 = r2(3637);
    t2.NonRecordingSpan = class {
      constructor(e3 = n2.INVALID_SPAN_CONTEXT) {
        this._spanContext = e3;
      }
      spanContext() {
        return this._spanContext;
      }
      setAttribute(e3, t3) {
        return this;
      }
      setAttributes(e3) {
        return this;
      }
      addEvent(e3, t3) {
        return this;
      }
      addLink(e3) {
        return this;
      }
      addLinks(e3) {
        return this;
      }
      setStatus(e3) {
        return this;
      }
      updateName(e3) {
        return this;
      }
      end(e3) {
      }
      isRecording() {
        return false;
      }
      recordException(e3, t3) {
      }
    };
  }