// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 3917 range:33293..34280
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3917: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.ContextAPI = void 0;
    const n = r(12739), s = r(27976), o = r(30071), i = "context", a = new n.NoopContextManager();
    class c {
      constructor() {
      }
      static getInstance() {
        return this._instance || (this._instance = new c()), this._instance;
      }
      setGlobalContextManager(e2) {
        return (0, s.registerGlobal)(i, e2, o.DiagAPI.instance());
      }
      active() {
        return this._getContextManager().active();
      }
      with(e2, t2, r2, ...n2) {
        return this._getContextManager().with(e2, t2, r2, ...n2);
      }
      bind(e2, t2) {
        return this._getContextManager().bind(e2, t2);
      }
      _getContextManager() {
        return (0, s.getGlobal)(i) || a;
      }
      disable() {
        this._getContextManager().disable(), (0, s.unregisterGlobal)(i, o.DiagAPI.instance());
      }
    }
    t.ContextAPI = c;
  }