// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 3917 range:34103..35090
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3917: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.ContextAPI = void 0;
    const n = r(12739), o = r(27976), s = r(30071), i = "context", a = new n.NoopContextManager();
    class l {
      constructor() {
      }
      static getInstance() {
        return this._instance || (this._instance = new l()), this._instance;
      }
      setGlobalContextManager(e2) {
        return (0, o.registerGlobal)(i, e2, s.DiagAPI.instance());
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
        return (0, o.getGlobal)(i) || a;
      }
      disable() {
        this._getContextManager().disable(), (0, o.unregisterGlobal)(i, s.DiagAPI.instance());
      }
    }
    t.ContextAPI = l;
  }