// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CardList.js range:14905769..14907836
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.514Z
m8h = L({ "CardList.js"() {
  "use strict";
  E(), Va(), V5r(), f2(), dy(), zWe = { gutter: { k71WvV: "ui-8ky9kg", keTefX: "ui-2imrbv", $$css: true }, sectionStack: { kOIVth: "ui-1qhopif", $$css: true }, content: { k1xSpc: "ui-78zum5", kXwgrk: "ui-dt5ytf", kLKAdn: "ui-uve7l6", kwRFfy: "ui-1w8q5y7", kGO01o: "ui-1rgtt3y", kZCmMZ: "ui-9s6atj", $$css: true }, contentFlush: { kLKAdn: "ui-exx8yu", kwRFfy: "ui-13botnq", kGO01o: "ui-18d9i69", kZCmMZ: "ui-1sudrl5", $$css: true }, titleRow: { k1xSpc: "ui-78zum5", k7Eaqz: "ui-euugli", kwnvtZ: "ui-1a02dak", kGNEyG: "ui-1pha0wt", kOIVth: "ui-pkkfsy", $$css: true }, count: { kcqcaj: "ui-ss6m8b", $$css: true }, empty: { kzqmXN: "ui-h8yej3", k9WMMc: "ui-2b8uid", kLKAdn: "ui-1t8xvyj", kwRFfy: "ui-19bzwdx", kGO01o: "ui-usxwy5", kZCmMZ: "ui-v853mj", $$css: true }, overflowToggleRoot: { kE3dHu: "ui-1uhho1l", $$css: true }, overflowToggleIcon: { kzqmXN: "ui-y1keyj", $$css: true } }, p8h = { default: { kMwMTN: "ui-1lbmi28", $$css: true }, accent: { kMwMTN: "ui-scuw3h", $$css: true }, blue: { kMwMTN: "ui-101qeuz", $$css: true }, green: { kMwMTN: "ui-p6nzhx", $$css: true }, yellow: { kMwMTN: "ui-1hn9r2r", $$css: true }, orange: { kMwMTN: "ui-4qtrdv", $$css: true }, red: { kMwMTN: "ui-ku4wcm", $$css: true }, purple: { kMwMTN: "ui-1b0hn6l", $$css: true }, magenta: { kMwMTN: "ui-pwp9en", $$css: true }, cyan: { kMwMTN: "ui-1rbygr4", $$css: true } }, Rfa = NCS(null), o0e = { Root: FCS, ContentInset: BCS, Empty: UCS, Section: jCS, SectionHeader: $CS, Items: HCS, Row: WCS, Item: GCS, OverflowToggle: qCS };
} });
import { jsx as zCS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as VCS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function g8h(t) {
  const e = VCS(5), { isExpanded: n, onToggle: i } = t;
  let r;
  e[0] !== i ? (r = () => i(), e[0] = i, e[1] = r) : r = e[1];
  const s = n ? "expanded" : "collapsed";
  let o;
  return e[2] !== r || e[3] !== s ? (o = zCS(o0e.OverflowToggle, { onStateChange: r, state: s }), e[2] = r, e[3] = s, e[4] = o) : o = e[4], o;
}
