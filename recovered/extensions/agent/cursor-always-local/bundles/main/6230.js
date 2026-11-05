// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6230 range:2841794..2843577
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6230: function(t2, e2, r2) {
    "use strict";
    var n2, s2 = this && this.__createBinding || (Object.create ? function(t3, e3, r3, n3) {
      void 0 === n3 && (n3 = r3);
      var s3 = Object.getOwnPropertyDescriptor(e3, r3);
      s3 && !("get" in s3 ? !e3.__esModule : s3.writable || s3.configurable) || (s3 = { enumerable: true, get: function() {
        return e3[r3];
      } }), Object.defineProperty(t3, n3, s3);
    } : function(t3, e3, r3, n3) {
      void 0 === n3 && (n3 = r3), t3[n3] = e3[r3];
    }), i2 = this && this.__setModuleDefault || (Object.create ? function(t3, e3) {
      Object.defineProperty(t3, "default", { enumerable: true, value: e3 });
    } : function(t3, e3) {
      t3.default = e3;
    }), o2 = this && this.__importStar || (n2 = function(t3) {
      return n2 = Object.getOwnPropertyNames || function(t4) {
        var e3 = [];
        for (var r3 in t4) Object.prototype.hasOwnProperty.call(t4, r3) && (e3[e3.length] = r3);
        return e3;
      }, n2(t3);
    }, function(t3) {
      if (t3 && t3.__esModule) return t3;
      var e3 = {};
      if (null != t3) for (var r3 = n2(t3), o3 = 0; o3 < r3.length; o3++) "default" !== r3[o3] && s2(e3, t3, r3[o3]);
      return i2(e3, t3), e3;
    });
    Object.defineProperty(e2, "__esModule", { value: true }), e2.adaptiveGzip = void 0;
    const a = r2(7975), u = o2(r2(8522)), c = r2(4384), l = (0, a.promisify)(u.gzip);
    e2.adaptiveGzip = { ...c.compressionGzip, compress(t3) {
      const e3 = (function(t4) {
        const e4 = t4.subarray(0, 4096);
        return u.deflateRawSync(e4, { level: u.constants.Z_BEST_SPEED }).byteLength < 0.9 * e4.byteLength;
      })(t3) ? u.constants.Z_DEFAULT_COMPRESSION : u.constants.Z_NO_COMPRESSION;
      return l(t3, { level: e3 });
    } };
  }