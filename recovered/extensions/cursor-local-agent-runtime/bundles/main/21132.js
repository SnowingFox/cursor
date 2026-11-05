// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 21132 range:605960..607217
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
21132: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.PropagationAPI = void 0;
    const n = r(27976), o = r(75582), s = r(8414), i = r(53827), a = r(42505), l = r(30071), c = "propagation", u = new o.NoopTextMapPropagator();
    class d {
      constructor() {
        this.createBaggage = a.createBaggage, this.getBaggage = i.getBaggage, this.getActiveBaggage = i.getActiveBaggage, this.setBaggage = i.setBaggage, this.deleteBaggage = i.deleteBaggage;
      }
      static getInstance() {
        return this._instance || (this._instance = new d()), this._instance;
      }
      setGlobalPropagator(e2) {
        return (0, n.registerGlobal)(c, e2, l.DiagAPI.instance());
      }
      inject(e2, t2, r2 = s.defaultTextMapSetter) {
        return this._getGlobalPropagator().inject(e2, t2, r2);
      }
      extract(e2, t2, r2 = s.defaultTextMapGetter) {
        return this._getGlobalPropagator().extract(e2, t2, r2);
      }
      fields() {
        return this._getGlobalPropagator().fields();
      }
      disable() {
        (0, n.unregisterGlobal)(c, l.DiagAPI.instance());
      }
      _getGlobalPropagator() {
        return (0, n.getGlobal)(c) || u;
      }
    }
    t.PropagationAPI = d;
  }