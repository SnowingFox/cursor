// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/runtime/compact.js" range:2478387..2480520
// basis: webpack-key
// confidence: B
// method: split+rewire+generated
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: generated (do not hand-edit descriptors)
import * as __dep0 from "@bufbuild/protobuf";
var n = __dep0;
const s = {};
function i(t, r, e) {
  return Object.defineProperty(t, r, {
    value: e,
    writable: !0,
    enumerable: !0,
    configurable: !0
  }), e;
}
function o(t, r, e) {
  if ("#" !== e.charAt(0)) return {
    kind: "scalar",
    T: Number(e)
  };
  const n = r[Number(e.slice(1))];
  return "function" == typeof n ? {
    kind: "message",
    T: n
  } : {
    kind: "enum",
    T: t.getEnumType(n)
  };
}
function a(t) {
  return "?" === t ? {
    opt: !0
  } : "*" === t ? {
    repeated: !0
  } : void 0 === t ? s : {
    oneof: t
  };
}
class u extends n.Message {
  static get typeName() {
    const t = c(this);
    return i(t, "typeName", t.$p() + function (t) {
      const r = t[0],
        e = r.indexOf("|");
      return -1 === e ? r : r.slice(0, e);
    }(t.$()));
  }
  static get fields() {
    const t = c(this),
      r = t.$(),
      e = t.runtime;
    return i(t, "fields", e.util.newFieldList(() => function (t, r) {
      const [e, ...n] = r,
        s = e.split("|"),
        i = [];
      for (let r = 1; r < s.length; r++) {
        const e = s[r].split(" ");
        let u;
        const c = e[e.length - 1];
        void 0 !== c && "=" === c.charAt(0) && (u = c.slice(1), e.pop());
        const l = Number(e[0]),
          m = e[1];
        let d = e[2],
          p = e[3];
        const f = d.charAt(d.length - 1);
        "?" !== f && "*" !== f || (p = f, d = d.slice(0, -1));
        const h = d.indexOf(",");
        if (-1 !== h) {
          const r = {
            no: l,
            name: m,
            kind: "map",
            K: Number(d.slice(0, h)),
            V: o(t, n, d.slice(h + 1))
          };
          void 0 !== u && (r.jsonName = u), i.push(r);
          continue;
        }
        const g = Object.assign({
          no: l,
          name: m
        }, o(t, n, d), a(p));
        void 0 !== u && (g.jsonName = u), i.push(g);
      }
      return i;
    }(e, r)));
  }
}
function c(t) {
  if (!function (t) {
    return "$" in t && "function" == typeof t.$ && "$p" in t && "function" == typeof t.$p;
  }(t)) throw new TypeError(`${t.name} has no compact message descriptor`);
  return t;
}
function l(t, r, e, n, s) {
  const i = e.slice(e.lastIndexOf(".") + 1);
  let o, a;
  if (1 === s) {
    const t = function (t) {
      return (t.charAt(0) + t.slice(1).replace(/[A-Z]/g, t => "_" + t)).toUpperCase() + "_";
    }(i);
    a = n.map(t => t[1]), o = a.map(r => t + r);
  } else o = n.map(t => t[1]), a = void 0 === s ? function (t, r) {
    const e = (t.charAt(0) + t.slice(1).replace(/[A-Z]/g, t => "_" + t)).toLowerCase() + "_",
      n = [];
    for (const t of r) {
      if (!t.toLowerCase().startsWith(e)) return r.slice();
      const s = t.slice(e.length);
      if ("" === s || /^[0-9]/.test(s)) return r.slice();
      n.push(s);
    }
    return n;
  }(i, o) : s;
  const u = {},
    c = [];
  for (let t = 0; t < n.length; t++) {
    const r = n[t][0];
    u[a[t]] = r, u[r] = a[t], c.push({
      no: r,
      name: o[t]
    });
  }
  return t.util.setEnumType(u, r + e, c), u;
}
export { u as HL, l as QT, i as kU };
