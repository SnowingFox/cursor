// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 8592 range:268542..271393
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8592: (e, t, r) => {
    "use strict";
    r.d(t, { HL: () => i, QT: () => a, kU: () => o });
    var n = r(36038);
    function o(e2, t2, r2) {
      return Object.defineProperty(e2, t2, { value: r2, writable: true, enumerable: true, configurable: true }), r2;
    }
    function s(e2, t2, r2) {
      if ("#" !== r2.charAt(0)) return { kind: "scalar", T: Number(r2) };
      const n2 = t2[Number(r2.slice(1))];
      return "function" == typeof n2 ? { kind: "message", T: n2 } : { kind: "enum", T: e2.getEnumType(n2) };
    }
    class i extends n.Message {
      static get typeName() {
        const e2 = this;
        return o(e2, "typeName", e2.$p() + (function(e3) {
          const t2 = e3[0], r2 = t2.indexOf("|");
          return -1 === r2 ? t2 : t2.slice(0, r2);
        })(e2.$()));
      }
      static get fields() {
        const e2 = this, t2 = e2.$(), r2 = e2.runtime;
        return o(e2, "fields", r2.util.newFieldList(() => (function(e3, t3) {
          const r3 = t3[0].split("|"), n2 = t3.slice(1), o2 = [];
          for (let t4 = 1; t4 < r3.length; t4++) {
            const i2 = r3[t4].split(" "), a2 = Number(i2[0]), l = i2[1];
            let c = i2[2], u = i2[3];
            const d = c.charAt(c.length - 1);
            "?" !== d && "*" !== d || (u = d, c = c.slice(0, -1));
            const p = c.indexOf(",");
            if (-1 !== p) {
              o2.push({ no: a2, name: l, kind: "map", K: Number(c.slice(0, p)), V: s(e3, n2, c.slice(p + 1)) });
              continue;
            }
            const h = Object.assign({ no: a2, name: l }, s(e3, n2, c));
            "?" === u ? h.opt = true : "*" === u ? h.repeated = true : void 0 !== u && (h.oneof = u), o2.push(h);
          }
          return o2;
        })(r2, t2)));
      }
    }
    function a(e2, t2, r2, n2, o2) {
      const s2 = r2.slice(r2.lastIndexOf(".") + 1);
      let i2, a2;
      if (1 === o2) {
        const e3 = (function(e4) {
          return (e4.charAt(0) + e4.slice(1).replace(/[A-Z]/g, (e5) => "_" + e5)).toUpperCase() + "_";
        })(s2);
        a2 = n2.map((e4) => e4[1]), i2 = a2.map((t3) => e3 + t3);
      } else i2 = n2.map((e3) => e3[1]), a2 = void 0 === o2 ? (function(e3, t3) {
        const r3 = (e3.charAt(0) + e3.slice(1).replace(/[A-Z]/g, (e4) => "_" + e4)).toLowerCase() + "_", n3 = [];
        for (const e4 of t3) {
          if (!e4.toLowerCase().startsWith(r3)) return t3.slice();
          const o3 = e4.slice(r3.length);
          if ("" === o3 || /^[0-9]/.test(o3)) return t3.slice();
          n3.push(o3);
        }
        return n3;
      })(s2, i2) : o2;
      const l = {}, c = [];
      for (let e3 = 0; e3 < n2.length; e3++) {
        const t3 = n2[e3][0];
        l[a2[e3]] = t3, l[t3] = a2[e3], c.push({ no: t3, name: i2[e3] });
      }
      return e2.util.setEnumType(l, t2 + r2, c), l;
    }
  }