// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3917 range:294418..295424
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3917: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.ContextAPI = void 0;
    const n2 = r2(5120), o2 = r2(7976), s2 = r2(71), i2 = "context", a2 = new n2.NoopContextManager();
    class c {
      constructor() {
      }
      static getInstance() {
        return this._instance || (this._instance = new c()), this._instance;
      }
      setGlobalContextManager(e3) {
        return (0, o2.registerGlobal)(i2, e3, s2.DiagAPI.instance());
      }
      active() {
        return this._getContextManager().active();
      }
      with(e3, t3, r3, ...n3) {
        return this._getContextManager().with(e3, t3, r3, ...n3);
      }
      bind(e3, t3) {
        return this._getContextManager().bind(e3, t3);
      }
      _getContextManager() {
        return (0, o2.getGlobal)(i2) || a2;
      }
      disable() {
        this._getContextManager().disable(), (0, o2.unregisterGlobal)(i2, s2.DiagAPI.instance());
      }
    }
    t2.ContextAPI = c;
  }