// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MentionChipNodeView.js range:15894806..15911981
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.783Z
pBS = L({ "MentionChipNodeView.js"() {
  "use strict";
  E(), Va(), v_e(), Qjt(), mf(), SSa(), VXh(), XXh(), v4r(), Ymi(), qmi(), S4r(), Mkt(), oep(), k9r(), Z7t(), fd(), SWe(), lep = { "ui--default-marker": "ui--default-marker", $$css: true }, W1a = "mentionNode", cep = sBS(function(e) {
    const n = aep(160), { node: i, HTMLAttributes: r, extensionHTMLAttributes: s, editor: o, getPos: a } = e, l = mFe(), c = oBS(null), u = wSa(i.attrs);
    let d;
    n[0] !== o ? (d = { editor: o, selector: uBS }, n[0] = o, n[1] = d) : d = n[1];
    const h = GAr(d);
    let p;
    n[2] !== o ? (p = { editor: o, selector: dBS }, n[2] = o, n[3] = p) : p = n[3];
    const g = GAr(p), f = h?.matches?.(u) === false ? void 0 : h;
    let _;
    n[4] !== o ? (_ = H1a(o), n[4] = o, n[5] = _) : _ = n[5];
    const { onMentionChipAction: b, onMentionChipContextMenu: y, readOnlyMentionChrome: S, hideRemoveButton: k } = _, C = g(u), T = (C.tooltipText ?? C.primaryText).trim(), I = C.tooltipContent ? void 0 : T, A = C.action.kind !== "noop" && !!b, P = typeof s?.class == "string" ? s.class : "", M = typeof r?.class == "string" ? r.class : "";
    let O;
    n[6] !== P || n[7] !== M ? (O = [Dkt, P, M].filter(Boolean), n[6] = P, n[7] = M, n[8] = O) : O = n[8];
    const N = O.join(" "), U = !S && !k, j = C.icon.kind === "image";
    let $, H, G, q, K, V, Y, J, Q, te, ee, re, ie, oe, se, le;
    if (n[9] !== r || n[10] !== l || n[11] !== u.mentionType || n[12] !== u.plainText || n[13] !== C || n[14] !== N || n[15] !== o || n[16] !== s || n[17] !== a || n[18] !== j || n[19] !== U || n[20] !== A || n[21] !== f || n[22] !== I || n[23] !== i.nodeSize || n[24] !== b || n[25] !== y || n[26] !== S) {
      const Ce = gn(lep, CP.root, j && CP.rootWithMcpIcon).className;
      let Se;
      if (n[43] !== r || n[44] !== l || n[45] !== u.mentionType || n[46] !== u.plainText || n[47] !== C || n[48] !== o || n[49] !== s || n[50] !== a || n[51] !== U || n[52] !== A || n[53] !== f || n[54] !== I || n[55] !== i.nodeSize || n[56] !== b || n[57] !== y || n[58] !== S) {
        const Pe = gn(CP.icon, CP.leadingIcon).className;
        let we;
        n[72] !== r || n[73] !== s ? (we = lBS(s, r), n[72] = r, n[73] = s, n[74] = we) : we = n[74];
        let Ie;
        n[75] !== I ? (Ie = I ? { title: I } : {}, n[75] = I, n[76] = Ie) : Ie = n[76];
        let Me;
        n[77] !== S ? (Me = S ? { "data-read-only-mention": "true" } : {}, n[77] = S, n[78] = Me) : Me = n[78];
        let De;
        n[79] !== U ? (De = U ? { "data-has-remove-button": "true" } : {}, n[79] = U, n[80] = De) : De = n[80];
        let Ne;
        n[81] !== f ? (Ne = f ? { "data-mention-chip-presentation": f.kind } : {}, n[81] = f, n[82] = Ne) : Ne = n[82], n[83] !== Me || n[84] !== De || n[85] !== Ne || n[86] !== we || n[87] !== Ie ? (Se = { ...we, ...Kmi, "data-type": W1a, ...Ie, ...Me, ...De, ...Ne }, delete Se.class, n[83] = Me, n[84] = De, n[85] = Ne, n[86] = we, n[87] = Ie, n[88] = Se) : Se = n[88];
        const be = C.chipColor;
        let je;
        n[89] !== f ? (je = aBS(f), n[89] = f, n[90] = je) : je = n[90];
        const $e = je;
        let Je;
        n[91] !== be || n[92] !== $e ? (Je = be || $e ? { ...be ? { color: be } : {}, ...$e } : void 0, n[91] = be, n[92] = $e, n[93] = Je) : Je = n[93], ie = Je;
        let Ge;
        n[94] !== be ? (Ge = be ? { color: be } : { color: "inherit" }, n[94] = be, n[95] = Ge) : Ge = n[95];
        const xe = Ge;
        let Oe;
        n[96] !== o || n[97] !== a || n[98] !== i.nodeSize ? (Oe = (Be) => {
          Be.preventDefault(), Be.stopPropagation();
          const Ue = a();
          Ue !== void 0 && (o.view.dispatch(o.state.tr.delete(Ue, Ue + i.nodeSize).setMeta(_4r, true).scrollIntoView()), o.view.focus());
        }, n[96] = o, n[97] = a, n[98] = i.nodeSize, n[99] = Oe) : Oe = n[99], V = Oe;
        const ct = hBS;
        let Ye;
        n[100] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Ye = (Be) => {
          if (!ct(Be)) {
            c.current = null;
            return;
          }
          Be.preventDefault(), Be.stopPropagation(), c.current = Be.key;
        }, n[100] = Ye) : Ye = n[100], Q = Ye;
        let Ve;
        n[101] !== V ? (Ve = (Be) => {
          c.current === Be.key && (c.current = null, V(Be));
        }, n[101] = V, n[102] = Ve) : Ve = n[102], te = Ve;
        let Xe;
        n[103] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Xe = () => {
          c.current = null;
        }, n[103] = Xe) : Xe = n[103], Y = Xe;
        let lt;
        n[104] !== V ? (lt = (Be) => {
          if (Be.detail > 0) {
            Be.preventDefault(), Be.stopPropagation();
            return;
          }
          V(Be);
        }, n[104] = V, n[105] = lt) : lt = n[105], J = lt;
        let He;
        n[106] !== C.action || n[107] !== A || n[108] !== b ? (He = (Be) => {
          !A || !b || (Be.preventDefault(), Be.stopPropagation(), b(C.action, { metaKey: Be.metaKey, ctrlKey: Be.ctrlKey }));
        }, n[106] = C.action, n[107] = A, n[108] = b, n[109] = He) : He = n[109], H = He;
        const gt = u.mentionType === "clipboard" && u.plainText && !S ? u.plainText : void 0;
        ee = gt !== void 0;
        let ht;
        n[110] !== o || n[111] !== gt || n[112] !== a || n[113] !== i.nodeSize ? (ht = (Be) => {
          if (gt === void 0 || !o.isEditable) return;
          const Ue = a();
          Ue !== void 0 && (Be.preventDefault(), Be.stopPropagation(), o.chain().focus().insertContentAt({ from: Ue, to: Ue + i.nodeSize }, iBS(gt)).run());
        }, n[110] = o, n[111] = gt, n[112] = a, n[113] = i.nodeSize, n[114] = ht) : ht = n[114], q = ht;
        let Ae;
        n[115] !== C || n[116] !== y ? (Ae = (Be) => {
          !y || !xSa(C.action) || (Be.preventDefault(), Be.stopPropagation(), y(Be.nativeEvent, C));
        }, n[115] = C, n[116] = y, n[117] = Ae) : Ae = n[117], G = Ae;
        let ot;
        if (n[118] !== C.action || n[119] !== q || n[120] !== A || n[121] !== ee || n[122] !== b ? (ot = (Be) => {
          if (!(Be.key !== "Enter" && Be.key !== " ")) {
            if (ee) {
              q(Be);
              return;
            }
            !A || !b || (Be.preventDefault(), Be.stopPropagation(), b(C.action));
          }
        }, n[118] = C.action, n[119] = q, n[120] = A, n[121] = ee, n[122] = b, n[123] = ot) : ot = n[123], K = ot, C.icon.kind === "cursor") re = ZFe(zt, { className: ri("ui-prompt-input-mention-chip__icon ui-prompt-input-mention-chip__leading-icon", Pe), color: C.iconColor, name: C.icon.name, size: 12, "aria-hidden": "true", style: C.iconColor ? void 0 : xe, title: I });
        else if (C.icon.kind === "image") {
          let Be;
          n[124] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Be = [CP.icon, CP.leadingIcon, CP.mcpMentionIcon], n[124] = Be) : Be = n[124];
          let Ue;
          n[125] !== C.icon.src || n[126] !== I ? (Ue = ZFe(Vmi, { rootStyle: Be, src: C.icon.src, title: I }), n[125] = C.icon.src, n[126] = I, n[127] = Ue) : Ue = n[127], re = Ue;
        } else re = l !== "seti" ? ZFe(W5, { className: ri("ui-prompt-input-mention-chip__icon ui-prompt-input-mention-chip__leading-icon", Pe), name: C.icon.fileName, size: Gmi, "aria-hidden": "true", style: be ? xe : void 0, title: I }) : ZFe("span", { ...gn(CP.setiSlot, CP.leadingIcon), children: ZFe(W5, { className: ri("ui-seti ui-prompt-input-mention-chip__seti ui-prompt-input-mention-chip__leading-icon", gn(CP.setiGlyph).className), name: C.icon.fileName, size: 18, "aria-hidden": "true", style: be ? xe : void 0, title: I }) });
        n[43] = r, n[44] = l, n[45] = u.mentionType, n[46] = u.plainText, n[47] = C, n[48] = o, n[49] = s, n[50] = a, n[51] = U, n[52] = A, n[53] = f, n[54] = I, n[55] = i.nodeSize, n[56] = b, n[57] = y, n[58] = S, n[59] = H, n[60] = G, n[61] = q, n[62] = K, n[63] = V, n[64] = Y, n[65] = J, n[66] = Q, n[67] = te, n[68] = ee, n[69] = re, n[70] = Se, n[71] = ie;
      } else H = n[59], G = n[60], q = n[61], K = n[62], V = n[63], Y = n[64], J = n[65], Q = n[66], te = n[67], ee = n[68], re = n[69], Se = n[70], ie = n[71];
      $ = Unt, oe = "span", se = Se, le = ri(N, Ce), n[9] = r, n[10] = l, n[11] = u.mentionType, n[12] = u.plainText, n[13] = C, n[14] = N, n[15] = o, n[16] = s, n[17] = a, n[18] = j, n[19] = U, n[20] = A, n[21] = f, n[22] = I, n[23] = i.nodeSize, n[24] = b, n[25] = y, n[26] = S, n[27] = $, n[28] = H, n[29] = G, n[30] = q, n[31] = K, n[32] = V, n[33] = Y, n[34] = J, n[35] = Q, n[36] = te, n[37] = ee, n[38] = re, n[39] = ie, n[40] = oe, n[41] = se, n[42] = le;
    } else $ = n[27], H = n[28], G = n[29], q = n[30], K = n[31], V = n[32], Y = n[33], J = n[34], Q = n[35], te = n[36], ee = n[37], re = n[38], ie = n[39], oe = n[40], se = n[41], le = n[42];
    const ce = A || ee ? "button" : void 0, ae = A || ee ? 0 : void 0, de = ee ? q : A ? H : void 0, he = A || ee ? K : void 0;
    let ge;
    n[128] !== V || n[129] !== Y || n[130] !== J || n[131] !== Q || n[132] !== te || n[133] !== k || n[134] !== I || n[135] !== S ? (ge = S || k ? null : ZFe("button", { type: "button", className: ri("ui-pill__close ui-prompt-input-mention-chip__close-icon", gn(CP.closeIcon).className), "aria-label": "Remove mention", title: I, onMouseDown: V, onClick: J, onKeyDown: Q, onKeyUp: te, onBlur: Y, children: ZFe(zt, { name: "x", size: 11, rootStyle: CP.closeIconGlyph, "aria-hidden": "true" }) }), n[128] = V, n[129] = Y, n[130] = J, n[131] = Q, n[132] = te, n[133] = k, n[134] = I, n[135] = S, n[136] = ge) : ge = n[136];
    let pe;
    n[137] !== C.secondaryText ? (pe = C.secondaryText ? ZFe("span", { className: ri("ui-prompt-input-mention-chip__line-range", gn(CP.lineRange).className), children: C.secondaryText }) : null, n[137] = C.secondaryText, n[138] = pe) : pe = n[138];
    let ve;
    n[139] !== C.statusDot ? (ve = C.statusDot ? ZFe(zXh, { status: C.statusDot }) : null, n[139] = C.statusDot, n[140] = ve) : ve = n[140];
    let fe;
    n[141] !== $ || n[142] !== C.primaryText || n[143] !== G || n[144] !== re || n[145] !== ie || n[146] !== de || n[147] !== he || n[148] !== ge || n[149] !== pe || n[150] !== ve || n[151] !== oe || n[152] !== se || n[153] !== le || n[154] !== ce || n[155] !== ae ? (fe = rBS($, { as: oe, ...se, className: le, style: ie, role: ce, tabIndex: ae, onClick: de, onContextMenu: G, onKeyDown: he, children: [re, ge, C.primaryText, pe, ve] }), n[141] = $, n[142] = C.primaryText, n[143] = G, n[144] = re, n[145] = ie, n[146] = de, n[147] = he, n[148] = ge, n[149] = pe, n[150] = ve, n[151] = oe, n[152] = se, n[153] = le, n[154] = ce, n[155] = ae, n[156] = fe) : fe = n[156];
    const Te = fe;
    let _e;
    return n[157] !== C || n[158] !== Te ? (_e = ZFe(YXh, { chip: C, children: Te }), n[157] = C, n[158] = Te, n[159] = _e) : _e = n[159], _e;
  });
} });
import { c as mBS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useLayoutEffect as gBS } from "./react-runtime/react/esm-index-production.js";
function Hgi(t, e = w9r) {
  if (typeof t.plainText == "string") return t.plainText;
  const n = t.rawText ?? t.label ?? t.uuid ?? "";
  return n.length > 0 ? `${e}${n}` : "";
}
function fBS(t) {
  if (t) try {
    const e = JSON.parse(t);
    return frt(e);
  } catch {
    return;
  }
}
function vBS(t) {
  if (t) try {
    return JSON.stringify(t);
  } catch {
    return;
  }
}
function _BS(t) {
  if (t) try {
    return kSa(JSON.parse(t));
  } catch {
    return;
  }
}
function bBS(t) {
  const e = kSa(t);
  return e === void 0 ? void 0 : JSON.stringify(e);
}
function yBS(t = {}) {
  return { name: "mentionChip", extensions: [Wgi.configure({ HTMLAttributes: { class: t.chipClassName ?? Dkt } })] };
}
function uep(t) {
  return t ? t.isText ? t.text?.length ?? 0 : t.type.name === "commandNode" ? 1 + (t.attrs.name?.length ?? 0) : t.type.name === pae ? Hgi(t.attrs).length : 0 : 0;
}
function dep(t) {
  if (!t) return [];
  const e = [];
  return t.state.doc.descendants((n, i) => {
    if (n.type.name !== pae) return;
    let r = 0;
    t.state.doc.nodesBetween(0, i, (o) => {
      r += uep(o);
    });
    const s = CSa(n.attrs);
    s && e.push({ ...s, position: r });
  }), e;
}
function hep(t) {
  let e = false;
  return t.descendants((n) => {
    if (n.type.name === pae) return e = true, false;
  }), e;
}
function SBS(t) {
  return t ? hep(t.state.doc) : false;
}
function pep(t) {
  return { id: t.uuid, uuid: t.uuid, label: t.label, rawText: t.rawText, ...t.plainText !== void 0 ? { plainText: t.plainText } : {}, mentionType: Pkt(t.type) ?? null, mentionTypeRaw: t.type, ...t.chipIcon !== void 0 ? { chipIcon: t.chipIcon } : {}, secondaryText: t.secondaryText, payload: t.payload };
}
function G1a(t, e) {
  const n = [];
  return t.descendants((i, r) => {
    if (i.type.name !== pae) return;
    const s = i.attrs.uuid;
    typeof s == "string" && (e === void 0 || s.startsWith(e)) && n.push({ node: i, pos: r });
  }), n;
}
function mep(t, e) {
  const n = Math.max(0, Math.min(e, t.content.size));
  if (t.resolve(n).parent.inlineContent) return n;
  let i;
  return t.descendants((r, s) => i !== void 0 ? false : r.isTextblock ? (i = s + 1, false) : true), i ?? n;
}
function gep(t, e, n) {
  t.insert(e, n);
  const i = e + n.nodeSize, r = t.doc.resolve(i).nodeAfter;
  return r?.isText && /^\s/.test(r.text ?? "") ? i : (t.insertText(" ", i), i + 1);
}
function kBS(t, e) {
  const n = e.pos + e.node.nodeSize, i = t.doc.resolve(n).nodeAfter, r = i?.isText && /^\s/.test(i.text ?? "") ? 1 : 0;
  t.delete(e.pos, n + r);
}
function wBS(t, e, n) {
  const i = new Map(e.map((h) => [h.uuid, h])), { state: r } = t, s = /* @__PURE__ */ new Set(), o = [];
  for (const h of G1a(r.doc, void 0)) {
    const p = h.node.attrs.uuid;
    s.add(p), (n?.managedUuidPrefix === void 0 || p.startsWith(n.managedUuidPrefix)) && !i.has(p) && o.push(h);
  }
  const a = [...i.values()].filter((h) => !s.has(h.uuid));
  if (o.length === 0 && a.length === 0) return;
  const l = r.tr, c = o[0]?.pos ?? r.selection.from;
  for (let h = o.length - 1; h >= 0; h--) kBS(l, o[h]);
  const u = r.schema.nodes[pae];
  let d = mep(l.doc, l.mapping.map(c, -1));
  for (const h of a) d = gep(l, d, u.create(pep(h)));
  t.view.dispatch(l.setMeta("addToHistory", false).setMeta(_4r, true)), a.length > 0 && t.view.focus();
}
function CBS(t, e) {
  let n = t;
  for (const i of e) n = i.mapping.map(n, -1);
  return n;
}
function TBS(t) {
  return Rw.create({ name: "managedMentions", addProseMirrorPlugins() {
    return [new MS({ key: new j1("managedMentions"), appendTransaction(e, n, i) {
      const r = t.getManagedUuidPrefix();
      if (r === void 0 || !e.some((l) => l.docChanged) || e.some((l) => l.getMeta("addToHistory") === false || l.getMeta(_4r) === true)) return null;
      const s = new Set(G1a(i.doc, r).map(({ node: l }) => l.attrs.uuid)), o = G1a(n.doc, r).filter(({ node: l }) => !s.has(l.attrs.uuid));
      if (o.length === 0) return null;
      const a = i.tr;
      for (const { node: l, pos: c } of o) {
        const u = CBS(c, e), d = a.mapping.map(u, 1);
        gep(a, mep(a.doc, d), l);
      }
      return a;
    } })];
  } });
}
function aGe(t, e, n, i) {
  const { state: r } = t, { from: s, to: o } = r.selection, a = n ?? s, l = i ?? o, c = "uuid" in e ? e.uuid : e.id, u = "description" in e ? e.secondaryText ?? e.description : e.secondaryText;
  t.chain().focus().deleteRange({ from: a, to: l }).insertMention({ id: c, uuid: c, label: e.label, rawText: e.rawText, ...e.plainText !== void 0 ? { plainText: e.plainText } : {}, mentionType: Pkt(e.type) ?? null, mentionTypeRaw: e.type, ...e.chipIcon !== void 0 ? { chipIcon: e.chipIcon } : {}, secondaryText: u, payload: e.payload }).insertContent(" ").run();
}
function EBS(t, e) {
  if (!t) return;
  const n = YJh(t, pae, { mentionChipResolve: _2e, onMentionChipAction: void 0, onMentionChipContextMenu: void 0, readOnlyMentionChrome: false, hideRemoveButton: false, mentionChipPresentation: void 0 }), i = e.mentionChipResolve ?? _2e, r = n.mentionChipResolve !== i;
  n.mentionChipResolve = i, n.onMentionChipAction = e.onMentionChipAction, n.onMentionChipContextMenu = e.onMentionChipContextMenu, n.readOnlyMentionChrome = e.readOnlyMentionChrome ?? false, n.hideRemoveButton = e.hideRemoveButton ?? false, n.mentionChipPresentation = e.mentionChipPresentation, r && !t.isDestroyed && t.view.dispatch(t.state.tr.setMeta(vep, true).setMeta("addToHistory", false));
}
function fep(t, e) {
  const n = mBS(9), { mentionChipResolve: i, onMentionChipAction: r, onMentionChipContextMenu: s, readOnlyMentionChrome: o, hideRemoveButton: a, mentionChipPresentation: l } = e;
  let c, u;
  n[0] !== t || n[1] !== a || n[2] !== l || n[3] !== i || n[4] !== r || n[5] !== s || n[6] !== o ? (c = () => {
    t && EBS(t, { mentionChipResolve: i, onMentionChipAction: r, onMentionChipContextMenu: s, readOnlyMentionChrome: o, hideRemoveButton: a, mentionChipPresentation: l });
  }, u = [t, i, r, s, o, a, l], n[0] = t, n[1] = a, n[2] = l, n[3] = i, n[4] = r, n[5] = s, n[6] = o, n[7] = c, n[8] = u) : (c = n[7], u = n[8]), gBS(c, u);
}
var Hkt, vep, w9r, pae, _ep, Wgi, 