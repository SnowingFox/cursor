// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MentionChipPlugin.js range:15911981..15918651
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.120Z
// wrapper: lGe deps:14 [E, Fy, nBS, gE, Doe, Ymi, S4r, Mkt, pBS, k9r, Aw, HQ]
// declarations: ABS, bep, RBS, PBS, q1a, MBS, yep, C9r, cGe, z1a, Sep (segment truncated)
// anchors: (none)
// group: editor-plugins-third-party
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
lGe = L({ "MentionChipPlugin.js"() {
  "use strict";
  E(), Fy(), nBS(), gE(), Doe(), Ymi(), S4r(), Mkt(), pBS(), k9r(), Aw(), HQ(), Hkt = new j1("mentionChipFocus"), vep = "mentionChipResolverUpdate", w9r = "@", pae = "mentionNode", _ep = "ui-prompt-input-mention-chip--selected", Wgi = iep.extend({ name: pae, addStorage() {
    return { mentionChipResolve: _2e, onMentionChipAction: void 0, onMentionChipContextMenu: void 0, readOnlyMentionChrome: false, hideRemoveButton: false, mentionChipPresentation: void 0 };
  }, addCommands() {
    return { insertMention: (t) => ({ commands: e }) => {
      const n = t.mentionTypeRaw ?? t.mentionType ?? "file", i = Pkt(String(n)) ?? null;
      return e.insertContent({ type: this.name, attrs: { ...t, mentionTypeRaw: n, mentionType: i } });
    } };
  }, addNodeView() {
    return cBS(this.options.HTMLAttributes ?? {});
  }, addProseMirrorPlugins() {
    return [...this.parent?.() ?? [], new MS({ key: Hkt, state: { init: () => false, apply(t, e) {
      const n = t.getMeta(Hkt);
      return typeof n == "boolean" ? n : e;
    } }, props: { handleDOMEvents: { focus(t) {
      return Hkt.getState(t.state) !== true && t.dispatch(t.state.tr.setMeta(Hkt, true)), false;
    }, blur(t) {
      return Hkt.getState(t.state) !== false && t.dispatch(t.state.tr.setMeta(Hkt, false)), false;
    } }, decorations: (t) => {
      const { doc: e, selection: n } = t, i = [], r = Hkt.getState(t) === true;
      return e.descendants((s, o) => {
        s.type.name === this.name && r && !n.empty && n.from < o + s.nodeSize && n.to > o && i.push(Rx.node(o, o + s.nodeSize, { class: _ep }));
      }), i.length === 0 ? null : wP.create(e, i);
    } } })];
  }, addAttributes() {
    return { ...this.parent?.() ?? {}, uuid: { default: null, parseHTML: (e) => e.getAttribute("data-mention-uuid"), renderHTML: (e) => e.uuid ? { "data-mention-uuid": e.uuid } : {} }, rawText: { default: null, parseHTML: (e) => e.getAttribute("data-mention-raw-text"), renderHTML: (e) => e.rawText ? { "data-mention-raw-text": e.rawText } : {} }, plainText: { default: null, parseHTML: (e) => e.getAttribute("data-mention-plain-text"), renderHTML: (e) => e.plainText ? { "data-mention-plain-text": e.plainText } : {} }, chipIcon: { default: null, parseHTML: (e) => _BS(e.getAttribute("data-mention-chip-icon-json")), renderHTML: (e) => {
      const n = bBS(e.chipIcon);
      return n ? { "data-mention-chip-icon-json": n } : {};
    } }, mentionTypeRaw: { default: null, parseHTML: (e) => e.getAttribute("data-mention-type"), renderHTML: (e) => {
      const n = typeof e.mentionTypeRaw == "string" && e.mentionTypeRaw.length > 0 && e.mentionTypeRaw || e.mentionType;
      return n ? { "data-mention-type": String(n) } : {};
    } }, mentionType: { default: null, parseHTML: (e) => Pkt(e.getAttribute("data-mention-type")) ?? null, renderHTML: () => ({}) }, secondaryText: { default: null, parseHTML: (e) => e.getAttribute("data-mention-secondary-text"), renderHTML: (e) => e.secondaryText ? { "data-mention-secondary-text": e.secondaryText } : {} }, payload: { default: null, parseHTML: (e) => fBS(e.getAttribute("data-mention-payload-json")), renderHTML: (e) => {
      const n = vBS(e.payload);
      return n ? { "data-mention-payload-json": n } : {};
    } } };
  }, renderText({ node: t }) {
    const e = typeof this.options.suggestion?.char == "string" && this.options.suggestion.char.length > 0 ? this.options.suggestion.char : w9r;
    return Hgi(t.attrs, e);
  }, renderHTML({ node: t, HTMLAttributes: e }) {
    const n = typeof this.options.suggestion?.char == "string" && this.options.suggestion.char.length > 0 ? this.options.suggestion.char : w9r, i = Hgi(t.attrs, n);
    return ["span", fE({ "data-type": pae, class: Dkt, ...Kmi }, this.options.HTMLAttributes, e), i];
  } }).configure({ deleteTriggerWithBackspace: true, HTMLAttributes: { class: Dkt } });
} });
import { c as IBS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useLayoutEffect as xBS } from "./react-runtime/react/esm-index-production.js";
function ABS(t = {}) {
  return { name: "commandChip", extensions: [Ggi.configure({ HTMLAttributes: { class: t.chipClassName ?? "ui-prompt-input-command-chip" } })] };
}
function bep(t) {
  if (!t) return [];
  const e = [];
  let n = 0, i = true;
  return t.state.doc.descendants((r) => {
    if (r.isTextblock) {
      i ? i = false : n += 1;
      return;
    }
    if (r.type.name === jne) return e.push({ id: r.attrs.id, name: r.attrs.name, content: r.attrs.content, type: r.attrs.type ?? void 0, ...r.attrs.slashSubject ? { slashSubject: r.attrs.slashSubject } : {}, position: n }), n += L1n(String(r.attrs.name ?? "")).length, false;
    if (r.type.name === "mentionNode") return n += Hgi(r.attrs).length, false;
    if (r.type.name === "hardBreak") return n += 1, false;
    if (r.isText) return n += r.text?.length ?? 0, false;
  }), e;
}
function RBS(t) {
  let e = false;
  return t.descendants((n) => {
    if (n.type.name === jne) return e = true, false;
  }), e;
}
function PBS(t) {
  return t ? RBS(t.state.doc) : false;
}
function q1a(t) {
  t.view.dispatch(t.state.tr.setSelection(Q_.atEnd(t.state.doc))), t.view.focus();
}
function MBS(t) {
  return t.commands.command(({ state: e, dispatch: n }) => mXo(e, n));
}
function yep(t) {
  return { id: t.id, name: t.name, ...t.displayName ? { displayName: t.displayName } : {}, content: t.content ?? "", type: t.type, slashSubject: t.slashSubject, ...t.description ? { description: t.description } : {}, ...t.tooltipPath ? { tooltipPath: t.tooltipPath } : {}, ...t.authorshipLabel ? { authorshipLabel: t.authorshipLabel } : {}, ...t.sourceUri ? { sourceUri: t.sourceUri } : {}, badgeAppearance: t.badgeAppearance };
}
function C9r(t, e, n) {
  const { from: i, to: r } = t.state.selection;
  t.chain().focus().deleteRange({ from: i, to: r }).insertCommand(yep(e)).insertContent(" ").command(({ tr: s, state: o }) => (n && n.length > 0 && WJh(s, o.schema, n), true)).run();
}
function cGe(t, e, n, i) {
  const { state: r } = t, { from: s, to: o } = r.selection, a = n ?? s, l = i ?? o;
  t.chain().focus().deleteRange({ from: a, to: l }).insertCommand(yep(e)).insertContent(" ").run();
}
function z1a(t, e) {
  const n = IBS(5), { onCommandChipClick: i, isCommandChipClickable: r } = e;
  let s, o;
  n[0] !== t || n[1] !== r || n[2] !== i ? (s = () => {
    if (!t) return;
    const a = YJh(t, jne, { onCommandChipClick: void 0 });
    a.onCommandChipClick = i, a.isCommandChipClickable = r;
  }, o = [t, i, r], n[0] = t, n[1] = r, n[2] = i, n[3] = s, n[4] = o) : (s = n[3], o = n[4]), xBS(s, o);
}
var Sep, Wkt, kep, wep, Ggi,
