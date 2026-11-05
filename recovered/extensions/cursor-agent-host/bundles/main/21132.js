// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 21132 range:4403841..4405098
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
21132: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.PropagationAPI = void 0;
    const n = r(27976), s = r(75582), o = r(8414), i = r(53827), a = r(42505), c = r(30071), l = "propagation", u = new s.NoopTextMapPropagator();
    class d {
      constructor() {
        this.createBaggage = a.createBaggage, this.getBaggage = i.getBaggage, this.getActiveBaggage = i.getActiveBaggage, this.setBaggage = i.setBaggage, this.deleteBaggage = i.deleteBaggage;
      }
      static getInstance() {
        return this._instance || (this._instance = new d()), this._instance;
      }
      setGlobalPropagator(e2) {
        return (0, n.registerGlobal)(l, e2, c.DiagAPI.instance());
      }
      inject(e2, t2, r2 = o.defaultTextMapSetter) {
        return this._getGlobalPropagator().inject(e2, t2, r2);
      }
      extract(e2, t2, r2 = o.defaultTextMapGetter) {
        return this._getGlobalPropagator().extract(e2, t2, r2);
      }
      fields() {
        return this._getGlobalPropagator().fields();
      }
      disable() {
        (0, n.unregisterGlobal)(l, c.DiagAPI.instance());
      }
      _getGlobalPropagator() {
        return (0, n.getGlobal)(l) || u;
      }
    }
    t.PropagationAPI = d;
  }