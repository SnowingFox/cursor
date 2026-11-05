// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PromptInputInlineChip.js range:17490483..17494871
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, Qjt, mf, Ymi, fd
// wrapper-init: Iu1
// hoisted-owner: rich-inline.js (app-out-vs-workbench-workbench-glass-main-js:2962); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

Iu1 = L({ "PromptInputInlineChip.js"() {
  "use strict";
  E(), Va(), Qjt(), mf(), Ymi(), fd(), obp = { "ui--default-marker": "ui--default-marker", $$css: true };
} });
function ejx(t) {
  return t;
}
function OUr(t) {
  return { segmentIndex: t.segmentIndex, graphemeIndex: t.graphemeIndex };
}
function abp(t) {
  return t.segmentIndex === 0 && t.graphemeIndex === 0;
}
function lbp(t) {
  return t === 32 || t === 9 || t === 10 || t === 12 || t === 13;
}
function kxa(t, e) {
  const { cache: n } = Pqh(t, false);
  return drt(" ", n).width + e;
}
function xu1(t) {
  return $qh(t, { segmentIndex: 0, graphemeIndex: 0 }, Number.POSITIVE_INFINITY);
}
function Au1(t, e) {
  return t === 0 && e > 0;
}
function Ru1(t) {
  const e = Array.from({ length: t.length });
  let n = null, i = false;
  for (let r = 0; r < t.length; r++) {
    const s = t[r], o = s.letterSpacing ?? 0;
    let a = 0;
    for (; a < s.text.length && lbp(s.text.charCodeAt(a)); ) a++;
    if (a === s.text.length) {
      a > 0 && n === null && (n = kxa(s.font, o));
      continue;
    }
    let l = s.text.length;
    for (; l > a && lbp(s.text.charCodeAt(l - 1)); ) l--;
    const c = a > 0, u = l < s.text.length, d = s.text.slice(a, l), h = n ?? (c ? kxa(s.font, o) : 0), p = n1n(d, s.font, o === 0 ? void 0 : { letterSpacing: o }), g = xu1(p), f = g !== null || p.kinds.includes("zero-width-break"), _ = { break: s.break ?? "normal", breakBefore: n !== null || c || i, establishesLine: f, extraWidth: s.extraWidth ?? 0, gapBefore: h, naturalWidth: g ?? 0, prepared: p };
    e[r] = _, f && (i = p.kinds.at(-1) === "zero-width-break"), n = u ? kxa(s.font, o) : null;
  }
  return { items: e };
}
function Pu1(t, e, n, i) {
  if (t.items.length === 0 || n.itemIndex >= t.items.length) return null;
  const r = Math.max(1, e);
  let s = false, o = 0, a = r, l = n.itemIndex;
  e: for (; l < t.items.length; ) {
    const c = t.items[l];
    if (c === void 0) {
      l++, n.segmentIndex = 0, n.graphemeIndex = 0;
      continue;
    }
    if (!abp(n) && n.segmentIndex === c.prepared.segments.length && n.graphemeIndex === 0) {
      l++, n.segmentIndex = 0, n.graphemeIndex = 0;
      continue;
    }
    if (!c.establishesLine) {
      i?.(l, 0, 0, OUr(FUr), { segmentIndex: c.prepared.segments.length, graphemeIndex: 0 }), l++, n.segmentIndex = 0, n.graphemeIndex = 0;
      continue;
    }
    const u = s ? c.gapBefore : 0, d = abp(n);
    if (c.break === "never") {
      if (!d) {
        l++, n.segmentIndex = 0, n.graphemeIndex = 0;
        continue;
      }
      const y = c.naturalWidth + c.extraWidth, S = u + y;
      if (s && S > a) break e;
      i?.(l, u, y, OUr(FUr), { segmentIndex: c.prepared.segments.length, graphemeIndex: 0 }), s = true, o += S, a = r - o, l++, n.segmentIndex = 0, n.graphemeIndex = 0;
      continue;
    }
    const h = u + c.extraWidth;
    if (s && h > a) break e;
    if (d) {
      const y = h + c.naturalWidth;
      if (y <= a) {
        i?.(l, u, c.naturalWidth + c.extraWidth, OUr(FUr), { segmentIndex: c.prepared.segments.length, graphemeIndex: 0 }), s = true, o += y, a = r - o, l++, n.segmentIndex = 0, n.graphemeIndex = 0;
        continue;
      }
    }
    const p = Math.max(1, a - h), g = { segmentIndex: n.segmentIndex, graphemeIndex: n.graphemeIndex }, f = $qh(c.prepared, g, p);
    if (f === null) {
      l++, n.segmentIndex = 0, n.graphemeIndex = 0;
      continue;
    }
    if (n.segmentIndex === g.segmentIndex && n.graphemeIndex === g.graphemeIndex) {
      l++, n.segmentIndex = 0, n.graphemeIndex = 0;
      continue;
    }
    const _ = f + c.extraWidth, b = u + _;
    if (s && d && b > a || s && d && c.breakBefore && Au1(g.segmentIndex, g.graphemeIndex)) break e;
    if (i?.(l, u, _, OUr(n), { segmentIndex: g.segmentIndex, graphemeIndex: g.graphemeIndex }), s = true, o += b, a = r - o, g.segmentIndex === c.prepared.segments.length && g.graphemeIndex === 0) {
      l++, n.segmentIndex = 0, n.graphemeIndex = 0;
      continue;
    }
    n.segmentIndex = g.segmentIndex, n.graphemeIndex = g.graphemeIndex;
    break;
  }
  return s ? (n.itemIndex = l, o) : null;
}
function Mu1(t, e) {
  const n = t;
  let i = 0, r = 0;
  const s = { itemIndex: 0, segmentIndex: 0, graphemeIndex: 0 };
  for (; ; ) {
    const o = Pu1(n, e, s);
    if (o === null) return { lineCount: i, maxLineWidth: r };
    i++, o > r && (r = o);
  }
}
var FUr, 