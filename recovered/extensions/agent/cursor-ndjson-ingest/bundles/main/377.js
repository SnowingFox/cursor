// @recovered-by cursor-re
// artifact: app/extensions/cursor-ndjson-ingest/dist/main.js sha256:c20522000288197a1017b7169f8d5c503fe24f6cafe518222b9f24bea4fea3dc
// module: 377 range:18466..20456
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
377: function(e2, t2, r2) {
    var o2, n2 = this && this.__createBinding || (Object.create ? function(e3, t3, r3, o3) {
      void 0 === o3 && (o3 = r3);
      var n3 = Object.getOwnPropertyDescriptor(t3, r3);
      n3 && !("get" in n3 ? !t3.__esModule : n3.writable || n3.configurable) || (n3 = { enumerable: true, get: function() {
        return t3[r3];
      } }), Object.defineProperty(e3, o3, n3);
    } : function(e3, t3, r3, o3) {
      void 0 === o3 && (o3 = r3), e3[o3] = t3[r3];
    }), s2 = this && this.__setModuleDefault || (Object.create ? function(e3, t3) {
      Object.defineProperty(e3, "default", { enumerable: true, value: t3 });
    } : function(e3, t3) {
      e3.default = t3;
    }), i = this && this.__importStar || (o2 = function(e3) {
      return o2 = Object.getOwnPropertyNames || function(e4) {
        var t3 = [];
        for (var r3 in e4) Object.prototype.hasOwnProperty.call(e4, r3) && (t3[t3.length] = r3);
        return t3;
      }, o2(e3);
    }, function(e3) {
      if (e3 && e3.__esModule) return e3;
      var t3 = {};
      if (null != e3) for (var r3 = o2(e3), i2 = 0; i2 < r3.length; i2++) "default" !== r3[i2] && n2(t3, e3, r3[i2]);
      return s2(t3, e3), t3;
    });
    Object.defineProperty(t2, "__esModule", { value: true }), t2.NdjsonIngestLogger = void 0;
    const a = i(r2(398));
    class c {
      static init() {
        c.output = a.window.createOutputChannel("NDJSON Ingest", { log: true });
      }
      static error(e3, ...t3) {
        c.output || c.init(), c.output?.error(e3, ...t3);
      }
      static warn(e3, ...t3) {
        c.output || c.init(), c.output?.warn(e3, ...t3);
      }
      static info(e3, ...t3) {
        c.output || c.init(), c.output?.info(e3, ...t3);
      }
      static debug(e3, ...t3) {
        c.output || c.init(), c.output?.debug(e3, ...t3);
      }
      static trace(e3, ...t3) {
        c.output || c.init(), c.output?.trace(e3, ...t3);
      }
    }
    t2.NdjsonIngestLogger = c;
  }