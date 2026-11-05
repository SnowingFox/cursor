// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: KanbanCard.js range:14774044..14779595
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.765Z
$ga = L({ "KanbanCard.js"() {
  "use strict";
  E(), Va(), WRe(), eui(), nia(), ZZo(), git(), Jci(), AyS(), Iph(), wpi(), ikt(), Lz(), dy(), hL(), fd(), Z9h = { "ui--default-marker": "ui--default-marker", $$css: true }, Q9h = 512, B_e = { root: { kzqmXN: "ui-h8yej3", k7Eaqz: "ui-euugli", k9WMMc: "ui-dpxx8g", kMwMTN: "ui-1wd3ewq", kXHlph: "ui-6ikm8r", kORKVm: "ui-10wlt62", $$css: true }, shell: { kVAEAm: "ui-1n2onr6", k7Eaqz: "ui-euugli", kEafiO: "ui-178xt8z", kWqL5O: "ui-s1s249", kt9PQ7: "ui-so031l", kZ1KPB: "ui-e0pwq", kPef9Z: "ui-13fuv20", kSWEuD: "ui-32b0ac", kfdmCh: "ui-1q0q8m5", k4WBpm: "ui-19ypqd9", kLZC3w: "ui-1aeic0j", k26BEO: "ui-141kqco", kL6WhQ: "ui-17fyfba", kaZRDh: "ui-1arpupx", kaIpWk: "ui-1q4ynmn", kWkggS: "ui-f1vpex", kGVxlE: "ui-1gnnqk1 ui-mp3vqe", k1ekBW: "ui-1okb17s", kIyJzY: "ui-g3p6pi", kAMwcw: "ui-6tor67", $$css: true }, draggable: { kkrTdU: "ui-1jm3nie ui-ch2mbi", $$css: true }, dragging: { kSiTet: "ui-ti2d7y", $$css: true }, selectable: { kkrTdU: "ui-1ypdohk", $$css: true }, selected: { kMeerF: "ui-1de99jn", k3XXqK: "ui-aatb59", kjBf7l: "ui-1ac0jsk", kInvED: "ui-1y3gkto", $$css: true }, kanbanRoot: { kWkggS: "ui-f1vpex ui-qjnua1 ui-10co6l2", kMeerF: "ui-1k57tk5", $$css: true }, kanbanSelected: { kWkggS: "ui-i07v4r ui-1iuyybk ui-bc7umr", kGVxlE: "ui-1gnnqk1 ui-1wtrbu5 ui-1xk3k8f", kMeerF: "ui-1k57tk5", $$css: true }, attentionBorder: { kLZC3w: "ui-15d6f4y", k26BEO: "ui-n0zavr", kL6WhQ: "ui-1a8f8e8", kaZRDh: "ui-w1lrle", $$css: true }, gridRoot: { k1xSpc: "ui-78zum5", kZKoxP: "ui-5yr21d", kAzted: "ui-2lwn1j", kXwgrk: "ui-dt5ytf", $$css: true }, markdownTitle: { kGuDYH: "ui-1qlqyl8", kLWn49: "ui-15bjb6t", k63SB2: "ui-1pd3egz", $$css: true }, statusGlyph: { k1xSpc: "ui-3nfvp2", kmuXW: "ui-2lah0s", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", $$css: true } };
} });
import { jsxs as QwS, jsx as tjt } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as J9h } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as JwS } from "./react-runtime/react/esm-index-production.js";
function e0S(t) {
  const e = J9h(13), { groupPropertyId: n, groupValue: i, groupLabel: r, activeEditor: s, onCreateTask: o, onNewTaskEditorOpen: a, onNewTaskEditorClose: l, onNewTaskDraftChange: c } = t;
  let u;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = { 0: { className: "ui-h8yej3 ui-1e4uaio ui-1n2onr6 ui-euugli ui-178xt8z ui-s1s249 ui-so031l ui-e0pwq ui-13fuv20 ui-32b0ac ui-1q0q8m5 ui-19ypqd9 ui-1aeic0j ui-141kqco ui-17fyfba ui-1arpupx ui-1m7fhj7 ui-1gnnqk1 ui-1okb17s ui-g3p6pi ui-6tor67 ui-cq4si4" }, 1: { className: "ui-h8yej3 ui-1e4uaio ui-1n2onr6 ui-euugli ui-178xt8z ui-s1s249 ui-so031l ui-e0pwq ui-13fuv20 ui-32b0ac ui-1q0q8m5 ui-19ypqd9 ui-1aeic0j ui-141kqco ui-17fyfba ui-1arpupx ui-1m7fhj7 ui-1gnnqk1 ui-1okb17s ui-g3p6pi ui-6tor67 ui-jbqb8w ui-1sjiwpj ui-l7u3ym" } }, e[0] = u) : u = e[0];
  const d = u[(s === void 0) << 0];
  let h;
  e[1] !== s || e[2] !== r || e[3] !== n || e[4] !== i || e[5] !== o || e[6] !== c || e[7] !== l || e[8] !== a ? (h = s === void 0 ? QwS("button", { type: "button", onClick: a, className: "ui-78zum5 ui-h8yej3 ui-6s0dn4 ui-pkkfsy ui-oyc9vk ui-1jkygx ui-2lprc ui-1o7kk3e ui-c342km ui-jbqb8w ui-1heor9g ui-1ypdohk ui-dpxx8g", children: [tjt("span", { className: "ui-3nfvp2 ui-ncpac4 ui-1d74i34 ui-2lah0s ui-6s0dn4 ui-l56j7k ui-1lbmi28", children: tjt(zt, { name: "plus", size: "xs", "aria-hidden": true }) }), tjt(nn, { size: "md", children: "New Task" })] }) : tjt(t0S, { groupPropertyId: n, groupValue: i, groupLabel: r, draft: s.draft, onDraftChange: c, onCreateTask: o, onClose: l }, s.key), e[1] = s, e[2] = r, e[3] = n, e[4] = i, e[5] = o, e[6] = c, e[7] = l, e[8] = a, e[9] = h) : h = e[9];
  let p;
  return e[10] !== d || e[11] !== h ? (p = tjt("div", { ...d, children: h }), e[10] = d, e[11] = h, e[12] = p) : p = e[12], p;
}
function t0S(t) {
  const e = J9h(19), { groupPropertyId: n, groupValue: i, groupLabel: r, draft: s, onDraftChange: o, onCreateTask: a, onClose: l } = t, c = JwS(false);
  let u;
  e[0] !== s || e[1] !== n || e[2] !== i || e[3] !== a ? (u = () => {
    const S = s.trim();
    return S ? a({ title: S, properties: { [n]: i } }) ? "accepted" : "rejected" : "empty";
  }, e[0] = s, e[1] = n, e[2] = i, e[3] = a, e[4] = u) : u = e[4];
  const d = u;
  let h;
  e[5] !== d || e[6] !== l ? (h = (S) => {
    if (S.key === "Enter") {
      S.preventDefault(), d() === "accepted" && (c.current = true, l());
      return;
    }
    S.key === "Escape" && (S.preventDefault(), c.current = true, l());
  }, e[5] = d, e[6] = l, e[7] = h) : h = e[7];
  const p = h;
  let g;
  e[8] !== d || e[9] !== l ? (g = (S) => {
    c.current || d() !== "rejected" && l();
  }, e[8] = d, e[9] = l, e[10] = g) : g = e[10];
  const f = g, _ = `New task in ${r}`;
  let b;
  e[11] !== o ? (b = (S) => o(S.target.value), e[11] = o, e[12] = b) : b = e[12];
  let y;
  return e[13] !== s || e[14] !== f || e[15] !== p || e[16] !== _ || e[17] !== b ? (y = tjt("div", { className: "ui-78zum5 ui-euugli ui-6s0dn4 ui-6ikm8r ui-10wlt62 ui-oyc9vk ui-1jkygx ui-2lprc ui-1o7kk3e", children: tjt("input", { autoFocus: true, "aria-label": _, type: "text", value: s, placeholder: "Task title", onBlur: f, onChange: b, onKeyDown: p, className: "ui-h8yej3 ui-euugli ui-rar8zy ui-9f619 ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-c342km ui-1t137rt ui-jbqb8w ui-1heor9g ui-jb2p0i ui-11wthnw ui-1ja60sm ui-1bh5w5" }) }), e[13] = s, e[14] = f, e[15] = p, e[16] = _, e[17] = b, e[18] = y) : y = e[18], y;
}
