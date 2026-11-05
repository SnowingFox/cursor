// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 42918 range:7741325..7744126
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
42918: (e) => {
    "use strict";
    const t = "undefined" != typeof Buffer, r = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, n = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    function s(e2, s2, i2) {
      null == i2 && null !== s2 && "object" == typeof s2 && (i2 = s2, s2 = void 0), t && Buffer.isBuffer(e2) && (e2 = e2.toString()), e2 && 65279 === e2.charCodeAt(0) && (e2 = e2.slice(1));
      const a = JSON.parse(e2, s2);
      if (null === a || "object" != typeof a) return a;
      const c = i2 && i2.protoAction || "error", l = i2 && i2.constructorAction || "error";
      if ("ignore" === c && "ignore" === l) return a;
      if ("ignore" !== c && "ignore" !== l) {
        if (false === r.test(e2) && false === n.test(e2)) return a;
      } else if ("ignore" !== c && "ignore" === l) {
        if (false === r.test(e2)) return a;
      } else if (false === n.test(e2)) return a;
      return o(a, { protoAction: c, constructorAction: l, safe: i2 && i2.safe });
    }
    function o(e2, { protoAction: t2 = "error", constructorAction: r2 = "error", safe: n2 } = {}) {
      let s2 = [e2];
      for (; s2.length; ) {
        const e3 = s2;
        s2 = [];
        for (const o2 of e3) {
          if ("ignore" !== t2 && Object.prototype.hasOwnProperty.call(o2, "__proto__")) {
            if (true === n2) return null;
            if ("error" === t2) throw new SyntaxError("Object contains forbidden prototype property");
            delete o2.__proto__;
          }
          if ("ignore" !== r2 && Object.prototype.hasOwnProperty.call(o2, "constructor") && Object.prototype.hasOwnProperty.call(o2.constructor, "prototype")) {
            if (true === n2) return null;
            if ("error" === r2) throw new SyntaxError("Object contains forbidden prototype property");
            delete o2.constructor;
          }
          for (const e4 in o2) {
            const t3 = o2[e4];
            t3 && "object" == typeof t3 && s2.push(t3);
          }
        }
      }
      return e2;
    }
    function i(e2, t2, r2) {
      const n2 = Error.stackTraceLimit;
      Error.stackTraceLimit = 0;
      try {
        return s(e2, t2, r2);
      } finally {
        Error.stackTraceLimit = n2;
      }
    }
    e.exports = i, e.exports.default = i, e.exports.parse = i, e.exports.safeParse = function(e2, t2) {
      const r2 = Error.stackTraceLimit;
      Error.stackTraceLimit = 0;
      try {
        return s(e2, t2, { safe: true });
      } catch (e3) {
        return null;
      } finally {
        Error.stackTraceLimit = r2;
      }
    }, e.exports.scan = o;
  }