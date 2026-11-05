// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: NumberRoll.js range:15204565..15207250
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.836Z
I_a = L({ "NumberRoll.js"() {
  "use strict";
  E(), Va(), qu(), dy(), IGh = 300, E_a = { base: { "--ui-number-roll-enter-offset": "ui-oxm7ql", "--ui-number-roll-exit-offset": "ui-1wfozv5", k1xSpc: "ui-wz0xwf", kC13JO: "ui-1eb9911", kMwMTN: "ui-1heor9g", kcqcaj: "ui-ss6m8b", kLWn49: "ui-15bjb6t", kXLuUW: "ui-3ajldb", $$css: true }, directionDown: { "--ui-number-roll-enter-offset": "ui-6dtbq7", "--ui-number-roll-exit-offset": "ui-wz9i54", $$css: true } }, xGh = { base: { kJuA4N: "ui-1azrgbz", k1xSpc: "ui-3nfvp2", kqGvvJ: "ui-qyz6jc", k8WAf4: "ui-1lqmthn", kXHlph: "ui-6ikm8r", kORKVm: "ui-10wlt62", kMwMTN: "ui-1heor9g", kLWn49: "ui-15bjb6t", kX1K2I: "ui-gywrlq ui-1t5kwm9", kAExgp: "ui-4n4sbr ui-et542o", kJcbqH: "ui-16fucec", kucrf1: "ui-1qsw9wy", kn1fP1: "ui-3b2oae", kRUf43: "ui-1vluf5", $$css: true } }, AGh = { base: { k1xSpc: "ui-wz0xwf", kC13JO: "ui-1c1ldix", k7Eaqz: "ui-4dcj2i", kXHlph: "ui-6ikm8r", kORKVm: "ui-10wlt62", k9WMMc: "ui-2b8uid", $$css: true } }, qFr = { base: { kJuA4N: "ui-5r2puq", k1xSpc: "ui-1lliihq", kMwMTN: "ui-1heor9g", kLWn49: "ui-15bjb6t", kqG3fB: "ui-1qty7v1", k8aIck: "ui-jlip5", kKVMdj: "ui-1aquc0h", kSiTet: "ui-16dpw5u", k3aq6I: "ui-uupxpy", $$css: true }, previous: { kKVMdj: "ui-uu5dgr", k44tkh: "ui-4ar09x", kyAemX: "ui-1yky480", kWV6AL: "ui-1u6ievf", k1xSpc: "ui-1lliihq ui-kio4u3", $$css: true }, currentChanged: { kKVMdj: "ui-lj39aj", k44tkh: "ui-4ar09x", kyAemX: "ui-1yky480", kWV6AL: "ui-1u6ievf", $$css: true } }, RGh = { base: { kJuA4N: "ui-1azrgbz", kVAEAm: "ui-10l6tqk", kzqmXN: "ui-1i1rx1s", kZKoxP: "ui-jm9jq1", kLKAdn: "ui-exx8yu", kpe85a: "ui-1xpa7k", kGO01o: "ui-18d9i69", kE3dHu: "ui-1uhho1l", keoZOQ: "ui-1y332i5", km5ZXQ: "ui-1y7amh", k1K539: "ui-1jyxor1", koQZXg: "ui-h9i6ac", kXHlph: "ui-6ikm8r", kORKVm: "ui-10wlt62", kMcinP: "ui-zpqnlu", kqG3fB: "ui-kyw5k8", k8aIck: "ui-jlip5", kEafiO: "ui-972fbf", kWqL5O: "ui-gfja2r", kt9PQ7: "ui-1qhh985", kZ1KPB: "ui-yj58a3", $$css: true } };
} });
import { c as U2S } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as j2S, useRef as PGh, useEffect as $2S } from "./react-runtime/react/esm-index-production.js";
function x_a(t, e, n) {
  const i = U2S(5), [r, s] = j2S(t), o = PGh(0), a = PGh(void 0);
  let l, c;
  return i[0] !== n || i[1] !== e || i[2] !== t ? (l = () => {
    if (!n) return;
    const u = Date.now(), d = u - o.current;
    return d >= e ? (s(t), o.current = u) : (clearTimeout(a.current), a.current = setTimeout(() => {
      s(t), o.current = Date.now();
    }, e - d)), () => clearTimeout(a.current);
  }, c = [t, e, n], i[0] = n, i[1] = e, i[2] = t, i[3] = l, i[4] = c) : (l = i[3], c = i[4]), $2S(l, c), n ? r : t;
}
