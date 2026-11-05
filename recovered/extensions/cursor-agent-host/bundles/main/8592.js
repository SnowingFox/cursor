// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 8592 range:3406054..3408905
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8592: (e, t, r) => {
    "use strict";
    r.d(t, { HL: () => i, QT: () => a, kU: () => s });
    var n = r(36038);
    function s(e2, t2, r2) {
      return Object.defineProperty(e2, t2, { value: r2, writable: true, enumerable: true, configurable: true }), r2;
    }
    function o(e2, t2, r2) {
      if ("#" !== r2.charAt(0)) return { kind: "scalar", T: Number(r2) };
      const n2 = t2[Number(r2.slice(1))];
      return "function" == typeof n2 ? { kind: "message", T: n2 } : { kind: "enum", T: e2.getEnumType(n2) };
    }
    class i extends n.Message {
      static get typeName() {
        const e2 = this;
        return s(e2, "typeName", e2.$p() + (function(e3) {
          const t2 = e3[0], r2 = t2.indexOf("|");
          return -1 === r2 ? t2 : t2.slice(0, r2);
        })(e2.$()));
      }
      static get fields() {
        const e2 = this, t2 = e2.$(), r2 = e2.runtime;
        return s(e2, "fields", r2.util.newFieldList(() => (function(e3, t3) {
          const r3 = t3[0].split("|"), n2 = t3.slice(1), s2 = [];
          for (let t4 = 1; t4 < r3.length; t4++) {
            const i2 = r3[t4].split(" "), a2 = Number(i2[0]), c = i2[1];
            let l = i2[2], u = i2[3];
            const d = l.charAt(l.length - 1);
            "?" !== d && "*" !== d || (u = d, l = l.slice(0, -1));
            const p = l.indexOf(",");
            if (-1 !== p) {
              s2.push({ no: a2, name: c, kind: "map", K: Number(l.slice(0, p)), V: o(e3, n2, l.slice(p + 1)) });
              continue;
            }
            const m = Object.assign({ no: a2, name: c }, o(e3, n2, l));
            "?" === u ? m.opt = true : "*" === u ? m.repeated = true : void 0 !== u && (m.oneof = u), s2.push(m);
          }
          return s2;
        })(r2, t2)));
      }
    }
    function a(e2, t2, r2, n2, s2) {
      const o2 = r2.slice(r2.lastIndexOf(".") + 1);
      let i2, a2;
      if (1 === s2) {
        const e3 = (function(e4) {
          return (e4.charAt(0) + e4.slice(1).replace(/[A-Z]/g, (e5) => "_" + e5)).toUpperCase() + "_";
        })(o2);
        a2 = n2.map((e4) => e4[1]), i2 = a2.map((t3) => e3 + t3);
      } else i2 = n2.map((e3) => e3[1]), a2 = void 0 === s2 ? (function(e3, t3) {
        const r3 = (e3.charAt(0) + e3.slice(1).replace(/[A-Z]/g, (e4) => "_" + e4)).toLowerCase() + "_", n3 = [];
        for (const e4 of t3) {
          if (!e4.toLowerCase().startsWith(r3)) return t3.slice();
          const s3 = e4.slice(r3.length);
          if ("" === s3 || /^[0-9]/.test(s3)) return t3.slice();
          n3.push(s3);
        }
        return n3;
      })(o2, i2) : s2;
      const c = {}, l = [];
      for (let e3 = 0; e3 < n2.length; e3++) {
        const t3 = n2[e3][0];
        c[a2[e3]] = t3, c[t3] = a2[e3], l.push({ no: t3, name: i2[e3] });
      }
      return e2.util.setEnumType(c, t2 + r2, l), c;
    }
  }