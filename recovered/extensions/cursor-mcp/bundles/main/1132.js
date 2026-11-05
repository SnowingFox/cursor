// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1132 range:109941..111218
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1132: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.PropagationAPI = void 0;
    const n2 = r2(7976), o2 = r2(5582), s2 = r2(8414), i2 = r2(3827), a2 = r2(2505), c = r2(71), u = "propagation", l = new o2.NoopTextMapPropagator();
    class d {
      constructor() {
        this.createBaggage = a2.createBaggage, this.getBaggage = i2.getBaggage, this.getActiveBaggage = i2.getActiveBaggage, this.setBaggage = i2.setBaggage, this.deleteBaggage = i2.deleteBaggage;
      }
      static getInstance() {
        return this._instance || (this._instance = new d()), this._instance;
      }
      setGlobalPropagator(e3) {
        return (0, n2.registerGlobal)(u, e3, c.DiagAPI.instance());
      }
      inject(e3, t3, r3 = s2.defaultTextMapSetter) {
        return this._getGlobalPropagator().inject(e3, t3, r3);
      }
      extract(e3, t3, r3 = s2.defaultTextMapGetter) {
        return this._getGlobalPropagator().extract(e3, t3, r3);
      }
      fields() {
        return this._getGlobalPropagator().fields();
      }
      disable() {
        (0, n2.unregisterGlobal)(u, c.DiagAPI.instance());
      }
      _getGlobalPropagator() {
        return (0, n2.getGlobal)(u) || l;
      }
    }
    t2.PropagationAPI = d;
  }