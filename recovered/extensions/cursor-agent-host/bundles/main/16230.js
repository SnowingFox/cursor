// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 16230 range:4158699..4160466
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
16230: function(e, t, r) {
    "use strict";
    var n, s = this && this.__createBinding || (Object.create ? function(e2, t2, r2, n2) {
      void 0 === n2 && (n2 = r2);
      var s2 = Object.getOwnPropertyDescriptor(t2, r2);
      s2 && !("get" in s2 ? !t2.__esModule : s2.writable || s2.configurable) || (s2 = { enumerable: true, get: function() {
        return t2[r2];
      } }), Object.defineProperty(e2, n2, s2);
    } : function(e2, t2, r2, n2) {
      void 0 === n2 && (n2 = r2), e2[n2] = t2[r2];
    }), o = this && this.__setModuleDefault || (Object.create ? function(e2, t2) {
      Object.defineProperty(e2, "default", { enumerable: true, value: t2 });
    } : function(e2, t2) {
      e2.default = t2;
    }), i = this && this.__importStar || (n = function(e2) {
      return n = Object.getOwnPropertyNames || function(e3) {
        var t2 = [];
        for (var r2 in e3) Object.prototype.hasOwnProperty.call(e3, r2) && (t2[t2.length] = r2);
        return t2;
      }, n(e2);
    }, function(e2) {
      if (e2 && e2.__esModule) return e2;
      var t2 = {};
      if (null != e2) for (var r2 = n(e2), i2 = 0; i2 < r2.length; i2++) "default" !== r2[i2] && s(t2, e2, r2[i2]);
      return o(t2, e2), t2;
    });
    Object.defineProperty(t, "__esModule", { value: true }), t.adaptiveGzip = void 0;
    const a = r(57975), c = i(r(38522)), l = r(54384), u = (0, a.promisify)(c.gzip);
    t.adaptiveGzip = { ...l.compressionGzip, compress(e2) {
      const t2 = (function(e3) {
        const t3 = e3.subarray(0, 4096);
        return c.deflateRawSync(t3, { level: c.constants.Z_BEST_SPEED }).byteLength < 0.9 * t3.byteLength;
      })(e2) ? c.constants.Z_DEFAULT_COMPRESSION : c.constants.Z_NO_COMPRESSION;
      return u(e2, { level: t2 });
    } };
  }