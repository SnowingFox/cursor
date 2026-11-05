// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8592 range:5255128..5257995
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8592: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { HL: () => o2, QT: () => a, kU: () => s2 });
    var n2 = r2(6038);
    function s2(t3, e3, r3) {
      return Object.defineProperty(t3, e3, { value: r3, writable: true, enumerable: true, configurable: true }), r3;
    }
    function i2(t3, e3, r3) {
      if ("#" !== r3.charAt(0)) return { kind: "scalar", T: Number(r3) };
      const n3 = e3[Number(r3.slice(1))];
      return "function" == typeof n3 ? { kind: "message", T: n3 } : { kind: "enum", T: t3.getEnumType(n3) };
    }
    class o2 extends n2.Message {
      static get typeName() {
        const t3 = this;
        return s2(t3, "typeName", t3.$p() + (function(t4) {
          const e3 = t4[0], r3 = e3.indexOf("|");
          return -1 === r3 ? e3 : e3.slice(0, r3);
        })(t3.$()));
      }
      static get fields() {
        const t3 = this, e3 = t3.$(), r3 = t3.runtime;
        return s2(t3, "fields", r3.util.newFieldList(() => (function(t4, e4) {
          const r4 = e4[0].split("|"), n3 = e4.slice(1), s3 = [];
          for (let e5 = 1; e5 < r4.length; e5++) {
            const o3 = r4[e5].split(" "), a2 = Number(o3[0]), u = o3[1];
            let c = o3[2], l = o3[3];
            const m = c.charAt(c.length - 1);
            "?" !== m && "*" !== m || (l = m, c = c.slice(0, -1));
            const d = c.indexOf(",");
            if (-1 !== d) {
              s3.push({ no: a2, name: u, kind: "map", K: Number(c.slice(0, d)), V: i2(t4, n3, c.slice(d + 1)) });
              continue;
            }
            const f = Object.assign({ no: a2, name: u }, i2(t4, n3, c));
            "?" === l ? f.opt = true : "*" === l ? f.repeated = true : void 0 !== l && (f.oneof = l), s3.push(f);
          }
          return s3;
        })(r3, e3)));
      }
    }
    function a(t3, e3, r3, n3, s3) {
      const i3 = r3.slice(r3.lastIndexOf(".") + 1);
      let o3, a2;
      if (1 === s3) {
        const t4 = (function(t5) {
          return (t5.charAt(0) + t5.slice(1).replace(/[A-Z]/g, (t6) => "_" + t6)).toUpperCase() + "_";
        })(i3);
        a2 = n3.map((t5) => t5[1]), o3 = a2.map((e4) => t4 + e4);
      } else o3 = n3.map((t4) => t4[1]), a2 = void 0 === s3 ? (function(t4, e4) {
        const r4 = (t4.charAt(0) + t4.slice(1).replace(/[A-Z]/g, (t5) => "_" + t5)).toLowerCase() + "_", n4 = [];
        for (const t5 of e4) {
          if (!t5.toLowerCase().startsWith(r4)) return e4.slice();
          const s4 = t5.slice(r4.length);
          if ("" === s4 || /^[0-9]/.test(s4)) return e4.slice();
          n4.push(s4);
        }
        return n4;
      })(i3, o3) : s3;
      const u = {}, c = [];
      for (let t4 = 0; t4 < n3.length; t4++) {
        const e4 = n3[t4][0];
        u[a2[t4]] = e4, u[e4] = a2[t4], c.push({ no: e4, name: o3[t4] });
      }
      return t3.util.setEnumType(u, e3 + r3, c), u;
    }
  }