"use strict";
var se = Object.create;
var A = Object.defineProperty;
var re = Object.getOwnPropertyDescriptor;
var ae = Object.getOwnPropertyNames;
var ce = Object.getPrototypeOf, de = Object.prototype.hasOwnProperty;
var le = (i8, e) => {
  for (var t in e) A(i8, t, { get: e[t], enumerable: true });
}, Y = (i8, e, t, o) => {
  if (e && typeof e == "object" || typeof e == "function") for (let n of ae(e)) !de.call(i8, n) && n !== t && A(i8, n, { get: () => e[n], enumerable: !(o = re(e, n)) || o.enumerable });
  return i8;
};
var _ = (i8, e, t) => (t = i8 != null ? se(ce(i8)) : {}, Y(e || !i8 || !i8.__esModule ? A(t, "default", { value: i8, enumerable: true }) : t, i8)), me = (i8) => Y(A({}, "__esModule", { value: true }), i8);
var Te = {};
le(Te, { activate: () => _e });
module.exports = me(Te);
var w = _(require("vscode"));
var f = _(require("vscode"));
function x(i8, e) {
  let t = i8.indexOf(e);
  t >= 0 && i8.splice(t, 1);
}
function S(i8) {
  return i8[i8.length - 1];
}
function k(i8, e) {
  return i8.with({ fragment: `L${1 + e.start.line},${1 + e.start.character}-${1 + e.end.line},${1 + e.end.character}` });
}
async function Z(i8, e) {
  let t = await f.workspace.openTextDocument(i8), o = t.getWordRangeAtPosition(e);
  return o || (o = t.getWordRangeAtPosition(e, /[^\s]+/)), !!o;
}
function V(i8, e, t = 8, o = true) {
  let n = e.start.with({ character: Math.max(0, e.start.character - t) }), s = i8.getWordRangeAtPosition(n), r = i8.getText(new f.Range(s ? s.start : n, e.start)), d = i8.getText(e), u = e.end.translate(0, 331), H = i8.getText(new f.Range(e.end, u));
  return o && (r = r.replace(/^\s*/g, ""), H = H.replace(/\s*$/g, "")), { before: r, inside: d, after: H };
}
var g = class {
  constructor(e) {
    this.name = e;
  }
  async set(e) {
    await f.commands.executeCommand("setContext", this.name, e);
  }
  async reset() {
    await f.commands.executeCommand("setContext", this.name, void 0);
  }
}, F = class {
  constructor(e, t) {
    this._doc = e;
    this._position = t;
    this._version = e.version, this._word = this._getAnchorWord(e, t);
  }
  _getAnchorWord(e, t) {
    let o = e.getWordRangeAtPosition(t) || e.getWordRangeAtPosition(t, /[^\s]+/);
    return o && e.getText(o);
  }
  guessedTrackedPosition() {
    if (!this._word) return this._position;
    if (this._version === this._doc.version) return this._position;
    let e = this._getAnchorWord(this._doc, this._position);
    if (this._word === e) return this._position;
    let t = this._position.line, o = 0, n, s;
    do {
      if (s = false, n = t + o, n < this._doc.lineCount) {
        s = true;
        let r = this._doc.lineAt(n).text.indexOf(this._word);
        if (r >= 0) return new f.Position(n, r);
      }
      if (o += 1, n = t - o, n >= 0) {
        s = true;
        let r = this._doc.lineAt(n).text.indexOf(this._word);
        if (r >= 0) return new f.Position(n, r);
      }
    } while (o < 100 && s);
    return this._position;
  }
}, ue = ["symbol-file", "symbol-module", "symbol-namespace", "symbol-package", "symbol-class", "symbol-method", "symbol-property", "symbol-field", "symbol-constructor", "symbol-enum", "symbol-interface", "symbol-function", "symbol-variable", "symbol-constant", "symbol-string", "symbol-number", "symbol-boolean", "symbol-array", "symbol-object", "symbol-key", "symbol-null", "symbol-enum-member", "symbol-struct", "symbol-event", "symbol-operator", "symbol-type-parameter"];
function O(i8) {
  let e = ue[i8];
  return e ? new f.ThemeIcon(e) : void 0;
}
var m = _(require("vscode"));
var R = class i {
  constructor(e, t) {
    this.location = e;
    this.direction = t;
    this.contextValue = "callHierarchy";
    this.title = t === 0 ? m.l10n.t("Callers Of") : m.l10n.t("Calls From");
  }
  async resolve() {
    let e = await Promise.resolve(m.commands.executeCommand("vscode.prepareCallHierarchy", this.location.uri, this.location.range.start)), t = new $(this.direction, e ?? []), o = new W(t);
    if (t.roots.length !== 0) return { provider: o, get message() {
      return t.roots.length === 0 ? m.l10n.t("No results.") : void 0;
    }, navigation: t, highlights: t, dnd: t, dispose() {
      o.dispose();
    } };
  }
  with(e) {
    return new i(e, this.direction);
  }
};
var C = class {
  constructor(e, t, o, n) {
    this.model = e;
    this.item = t;
    this.parent = o;
    this.locations = n;
  }
  remove() {
    this.model.remove(this);
  }
}, $ = class {
  constructor(e, t) {
    this.direction = e;
    this.roots = [];
    this._onDidChange = new m.EventEmitter();
    this.onDidChange = this._onDidChange.event;
    this.roots = t.map((o) => new C(this, o, void 0, void 0));
  }
  async _resolveCalls(e) {
    if (this.direction === 0) {
      let t = await m.commands.executeCommand("vscode.provideIncomingCalls", e.item);
      return t ? t.map((o) => new C(this, o.from, e, o.fromRanges.map((n) => new m.Location(o.from.uri, n)))) : [];
    } else {
      let t = await m.commands.executeCommand("vscode.provideOutgoingCalls", e.item);
      return t ? t.map((o) => new C(this, o.to, e, o.fromRanges.map((n) => new m.Location(e.item.uri, n)))) : [];
    }
  }
  async getCallChildren(e) {
    return e.children || (e.children = await this._resolveCalls(e)), e.children;
  }
  location(e) {
    return new m.Location(e.item.uri, e.item.range);
  }
  nearest(e, t) {
    return this.roots.find((o) => o.item.uri.toString() === e.toString()) ?? this.roots[0];
  }
  next(e) {
    return this._move(e, true) ?? e;
  }
  previous(e) {
    return this._move(e, false) ?? e;
  }
  _move(e, t) {
    if (e.children?.length) return t ? e.children[0] : S(e.children);
    let o = this.roots.includes(e) ? this.roots : e.parent?.children;
    if (o?.length) {
      let n = o.indexOf(e);
      return o[n + (t ? 1 : -1) + o.length % o.length];
    }
  }
  getDragUri(e) {
    return k(e.item.uri, e.item.range);
  }
  getEditorHighlights(e, t) {
    return e.locations ? e.locations.filter((o) => o.uri.toString() === t.toString()).map((o) => o.range) : e.item.uri.toString() === t.toString() ? [e.item.selectionRange] : void 0;
  }
  remove(e) {
    let o = this.roots.includes(e) ? this.roots : e.parent?.children;
    o && (x(o, e), this._onDidChange.fire(this));
  }
}, W = class {
  constructor(e) {
    this._model = e;
    this._emitter = new m.EventEmitter();
    this.onDidChangeTreeData = this._emitter.event;
    this._modelListener = e.onDidChange((t) => this._emitter.fire(t instanceof C ? t : void 0));
  }
  dispose() {
    this._emitter.dispose(), this._modelListener.dispose();
  }
  getTreeItem(e) {
    let t = new m.TreeItem(e.item.name);
    t.description = e.item.detail, t.tooltip = t.label && e.item.detail ? `${t.label} - ${e.item.detail}` : t.label ? `${t.label}` : e.item.detail, t.contextValue = "call-item", t.iconPath = O(e.item.kind);
    let o;
    if (e.model.direction === 1) o = [e.item.uri, { selection: e.item.selectionRange.with({ end: e.item.selectionRange.start }) }];
    else {
      let n;
      if (e.locations) for (let s of e.locations) s.uri.toString() === e.item.uri.toString() && (n = n?.isBefore(s.range.start) ? n : s.range.start);
      n || (n = e.item.selectionRange.start), o = [e.item.uri, { selection: new m.Range(n, n) }];
    }
    return t.command = { command: "vscode.open", title: m.l10n.t("Open Call"), arguments: o }, t.collapsibleState = m.TreeItemCollapsibleState.Collapsed, t;
  }
  getChildren(e) {
    return e ? this._model.getCallChildren(e) : this._model.roots;
  }
  getParent(e) {
    return e.parent;
  }
};
function ee(i8, e) {
  let t = new B(e.workspaceState, 0);
  function o() {
    if (w.window.activeTextEditor) {
      let s = new R(new w.Location(w.window.activeTextEditor.document.uri, w.window.activeTextEditor.selection.active), t.value);
      i8.setInput(s);
    }
  }
  function n(s, r) {
    t.value = s;
    let d, u = i8.getInput();
    r instanceof C ? d = new R(new w.Location(r.item.uri, r.item.selectionRange.start), t.value) : u instanceof R && (d = new R(u.location, t.value)), d && i8.setInput(d);
  }
  e.subscriptions.push(w.commands.registerCommand("references-view.showCallHierarchy", o), w.commands.registerCommand("references-view.showOutgoingCalls", (s) => n(1, s)), w.commands.registerCommand("references-view.showIncomingCalls", (s) => n(0, s)), w.commands.registerCommand("references-view.removeCallItem", ve));
}
function ve(i8) {
  i8 instanceof C && i8.remove();
}
var B = class i2 {
  constructor(e, t = 1) {
    this._mem = e;
    this._value = t;
    this._ctxMode = new g("references-view.callHierarchyMode");
    let o = e.get(i2._key);
    typeof o == "number" && o >= 0 && o <= 1 ? this.value = o : this.value = t;
  }
  static {
    this._key = "references-view.callHierarchyMode";
  }
  get value() {
    return this._value;
  }
  set value(e) {
    this._value = e, this._ctxMode.set(this._value === 0 ? "showIncoming" : "showOutgoing"), this._mem.update(i2._key, e);
  }
};
var l = _(require("vscode"));
var c = _(require("vscode"));
var L = class i3 {
  constructor(e, t, o, n) {
    this.title = e;
    this.location = t;
    this._command = o;
    this._result = n;
    this.contextValue = o;
  }
  async resolve() {
    let e;
    if (this._result) e = new P(this._result);
    else {
      let o = await Promise.resolve(c.commands.executeCommand(this._command, this.location.uri, this.location.range.start));
      e = new P(o ?? []);
    }
    if (e.items.length === 0) return;
    let t = new K(e);
    return { provider: t, get message() {
      return e.message;
    }, navigation: e, highlights: e, dnd: e, dispose() {
      t.dispose();
    } };
  }
  with(e) {
    return new i3(this.title, e, this._command);
  }
}, P = class i4 {
  constructor(e) {
    this._onDidChange = new c.EventEmitter();
    this.onDidChangeTreeData = this._onDidChange.event;
    this.items = [];
    let t;
    for (let o of e.sort(i4._compareLocations)) {
      let n = o instanceof c.Location ? o : new c.Location(o.targetUri, o.targetRange);
      (!t || i4._compareUriIgnoreFragment(t.uri, n.uri) !== 0) && (t = new p(n.uri.with({ fragment: "" }), [], this), this.items.push(t)), t.references.push(new T(n, t));
    }
  }
  static _compareUriIgnoreFragment(e, t) {
    let o = e.with({ fragment: "" }).toString(), n = t.with({ fragment: "" }).toString();
    return o < n ? -1 : o > n ? 1 : 0;
  }
  static _compareLocations(e, t) {
    let o = e instanceof c.Location ? e.uri : e.targetUri, n = t instanceof c.Location ? t.uri : t.targetUri;
    if (o.toString() < n.toString()) return -1;
    if (o.toString() > n.toString()) return 1;
    let s = e instanceof c.Location ? e.range : e.targetRange, r = t instanceof c.Location ? t.range : t.targetRange;
    return s.start.isBefore(r.start) ? -1 : s.start.isAfter(r.start) ? 1 : 0;
  }
  get message() {
    if (this.items.length === 0) return c.l10n.t("No results.");
    let e = this.items.reduce((o, n) => o + n.references.length, 0), t = this.items.length;
    return e === 1 && t === 1 ? c.l10n.t("{0} result in {1} file", e, t) : e === 1 ? c.l10n.t("{0} result in {1} files", e, t) : t === 1 ? c.l10n.t("{0} results in {1} file", e, t) : c.l10n.t("{0} results in {1} files", e, t);
  }
  location(e) {
    return e instanceof T ? e.location : new c.Location(e.uri, e.references[0]?.location.range ?? new c.Position(0, 0));
  }
  nearest(e, t) {
    if (this.items.length === 0) return;
    for (let s of this.items) if (s.uri.toString() === e.toString()) {
      for (let d of s.references) if (d.location.range.contains(t)) return d;
      let r;
      for (let d of s.references) {
        if (d.location.range.end.isAfter(t)) return d;
        r = d;
      }
      if (r) return r;
      break;
    }
    let o = 0, n = i4._prefixLen(this.items[o].toString(), e.toString());
    for (let s = 1; s < this.items.length; s++) i4._prefixLen(this.items[s].uri.toString(), e.toString()) > n && (o = s);
    return this.items[o].references[0];
  }
  static _prefixLen(e, t) {
    let o = 0;
    for (; o < e.length && o < t.length && e.charCodeAt(o) === t.charCodeAt(o); ) o += 1;
    return o;
  }
  next(e) {
    return this._move(e, true) ?? e;
  }
  previous(e) {
    return this._move(e, false) ?? e;
  }
  _move(e, t) {
    let o = t ? 1 : -1, n = (s) => {
      let r = (this.items.indexOf(s) + o + this.items.length) % this.items.length;
      return this.items[r];
    };
    if (e instanceof p) return t ? n(e).references[0] : S(n(e).references);
    if (e instanceof T) {
      let s = e.file.references.indexOf(e) + o;
      return s < 0 ? S(n(e.file).references) : s >= e.file.references.length ? n(e.file).references[0] : e.file.references[s];
    }
  }
  getEditorHighlights(e, t) {
    return this.items.find((n) => n.uri.toString() === t.toString())?.references.map((n) => n.location.range);
  }
  remove(e) {
    e instanceof p ? (x(this.items, e), this._onDidChange.fire(void 0)) : (x(e.file.references, e), e.file.references.length === 0 ? (x(this.items, e.file), this._onDidChange.fire(void 0)) : this._onDidChange.fire(e.file));
  }
  async asCopyText() {
    let e = "";
    for (let t of this.items) e += `${await t.asCopyText()}
`;
    return e;
  }
  getDragUri(e) {
    return e instanceof p ? e.uri : k(e.file.uri, e.location.range);
  }
}, K = class {
  constructor(e) {
    this._model = e;
    this._onDidChange = new c.EventEmitter();
    this.onDidChangeTreeData = this._onDidChange.event;
    this._listener = e.onDidChangeTreeData(() => this._onDidChange.fire(void 0));
  }
  dispose() {
    this._onDidChange.dispose(), this._listener.dispose();
  }
  async getTreeItem(e) {
    if (e instanceof p) {
      let t = new c.TreeItem(e.uri);
      return t.contextValue = "file-item", t.description = true, t.iconPath = c.ThemeIcon.File, t.collapsibleState = c.TreeItemCollapsibleState.Collapsed, t;
    } else {
      let { range: t } = e.location, o = await e.getDocument(true), { before: n, inside: s, after: r } = V(o, t), d = { label: n + s + r, highlights: [[n.length, n.length + s.length]] }, u = new c.TreeItem(d);
      return u.collapsibleState = c.TreeItemCollapsibleState.None, u.contextValue = "reference-item", u.command = { command: "vscode.open", title: c.l10n.t("Open Reference"), arguments: [e.location.uri, { selection: t.with({ end: t.start }) }] }, u;
    }
  }
  async getChildren(e) {
    if (!e) return this._model.items;
    if (e instanceof p) return e.references;
  }
  getParent(e) {
    return e instanceof T ? e.file : void 0;
  }
}, p = class {
  constructor(e, t, o) {
    this.uri = e;
    this.references = t;
    this.model = o;
  }
  remove() {
    this.model.remove(this);
  }
  async asCopyText() {
    let e = `${c.workspace.asRelativePath(this.uri)}
`;
    for (let t of this.references) e += `  ${await t.asCopyText()}
`;
    return e;
  }
}, T = class i5 {
  constructor(e, t) {
    this.location = e;
    this.file = t;
  }
  async getDocument(e) {
    if (this._document || (this._document = c.workspace.openTextDocument(this.location.uri)), e) {
      let t = this.file.model.next(this.file);
      t instanceof p && t !== this.file ? c.workspace.openTextDocument(t.uri) : t instanceof i5 && c.workspace.openTextDocument(t.location.uri);
    }
    return this._document;
  }
  remove() {
    this.file.model.remove(this);
  }
  async asCopyText() {
    let e = await this.getDocument(), t = V(e, this.location.range, 21, false);
    return `${this.location.range.start.line + 1}, ${this.location.range.start.character + 1}: ${t.before + t.inside + t.after}`;
  }
};
function te(i8, e) {
  function t(r, d) {
    if (l.window.activeTextEditor) {
      let u = new L(r, new l.Location(l.window.activeTextEditor.document.uri, l.window.activeTextEditor.selection.active), d);
      i8.setInput(u);
    }
  }
  e.subscriptions.push(l.commands.registerCommand("references-view.findReferences", () => t("References", "vscode.executeReferenceProvider")), l.commands.registerCommand("references-view.findImplementations", () => t("Implementations", "vscode.executeImplementationProvider")), l.commands.registerCommand("references-view.find", (...r) => l.commands.executeCommand("references-view.findReferences", ...r)), l.commands.registerCommand("references-view.removeReferenceItem", fe), l.commands.registerCommand("references-view.copy", j), l.commands.registerCommand("references-view.copyAll", pe), l.commands.registerCommand("references-view.copyPath", ge));
  let o, n = "references.preferredLocation";
  function s(r) {
    if (r && !r.affectsConfiguration(n)) return;
    let d = l.workspace.getConfiguration().get(n);
    o?.dispose(), o = void 0, d === "view" && (o = l.commands.registerCommand("editor.action.showReferences", async (u, H, ie) => {
      let ne = new L(l.l10n.t("References"), new l.Location(u, H), "vscode.executeReferenceProvider", ie);
      i8.setInput(ne);
    }));
  }
  e.subscriptions.push(l.workspace.onDidChangeConfiguration(s)), e.subscriptions.push({ dispose: () => o?.dispose() }), s();
}
var pe = async (i8) => {
  i8 instanceof T ? j(i8.file.model) : i8 instanceof p && j(i8.model);
};
function fe(i8) {
  (i8 instanceof p || i8 instanceof T) && i8.remove();
}
async function j(i8) {
  let e;
  i8 instanceof P ? e = await i8.asCopyText() : i8 instanceof T ? e = await i8.asCopyText() : i8 instanceof p && (e = await i8.asCopyText()), e && await l.env.clipboard.writeText(e);
}
async function ge(i8) {
  i8 instanceof p && (i8.uri.scheme === "file" ? l.env.clipboard.writeText(i8.uri.fsPath) : l.env.clipboard.writeText(i8.uri.toString(true)));
}
var a = _(require("vscode"));
var h = _(require("vscode")), U = class {
  constructor(e, t) {
    this._view = e;
    this._delegate = t;
    this.disposables = [];
    this._ignore = /* @__PURE__ */ new Set();
    this._decorationType = h.window.createTextEditorDecorationType({ backgroundColor: new h.ThemeColor("editor.findMatchHighlightBackground"), rangeBehavior: h.DecorationRangeBehavior.ClosedClosed, overviewRulerLane: h.OverviewRulerLane.Center, overviewRulerColor: new h.ThemeColor("editor.findMatchHighlightBackground") }), this.disposables.push(this._decorationType, h.workspace.onDidChangeTextDocument((o) => this._ignore.add(o.document.uri.toString())), h.window.onDidChangeActiveTextEditor(() => e.visible && this.update()), e.onDidChangeVisibility((o) => o.visible ? this._show() : this._hide()), e.onDidChangeSelection(() => {
      e.visible && this.update();
    })), this._show();
  }
  dispose() {
    h.Disposable.from(...this.disposables).dispose();
  }
  _show() {
    let { activeTextEditor: e } = h.window;
    if (!e || !e.viewColumn || this._ignore.has(e.document.uri.toString())) return;
    let [t] = this._view.selection;
    if (!t) return;
    let o = this._delegate.getEditorHighlights(t, e.document.uri);
    o && e.setDecorations(this._decorationType, o);
  }
  _hide() {
    for (let e of h.window.visibleTextEditors) e.setDecorations(this._decorationType, []);
  }
  update() {
    this._hide(), this._show();
  }
};
var I = _(require("vscode"));
var M = class {
  constructor(e) {
    this._view = e;
    this._disposables = [];
    this._ctxCanNavigate = new g("references-view.canNavigate");
    this._disposables.push(I.commands.registerCommand("references-view.next", () => this.next(false)), I.commands.registerCommand("references-view.prev", () => this.previous(false)));
  }
  dispose() {
    I.Disposable.from(...this._disposables).dispose();
  }
  update(e) {
    this._delegate = e, this._ctxCanNavigate.set(!!this._delegate);
  }
  _anchor() {
    if (!this._delegate) return;
    let [e] = this._view.selection;
    if (e) return e;
    if (I.window.activeTextEditor) return this._delegate.nearest(I.window.activeTextEditor.document.uri, I.window.activeTextEditor.selection.active);
  }
  _open(e, t) {
    I.commands.executeCommand("vscode.open", e.uri, { selection: new I.Selection(e.range.start, e.range.start), preserveFocus: t });
  }
  previous(e) {
    if (!this._delegate) return;
    let t = this._anchor();
    if (!t) return;
    let o = this._delegate.previous(t), n = this._delegate.location(o);
    n && (this._view.reveal(o, { select: true, focus: true }), this._open(n, e));
  }
  next(e) {
    if (!this._delegate) return;
    let t = this._anchor();
    if (!t) return;
    let o = this._delegate.next(t), n = this._delegate.location(o);
    n && (this._view.reveal(o, { select: true, focus: true }), this._open(n, e));
  }
};
var N = class {
  constructor() {
    this.viewId = "references-view.tree";
    this._ctxIsActive = new g("reference-list.isActive");
    this._ctxHasResult = new g("reference-list.hasResult");
    this._ctxInputSource = new g("reference-list.source");
    this._history = new Q(this);
    this._provider = new q();
    this._dnd = new z();
    this._tree = a.window.createTreeView(this.viewId, { treeDataProvider: this._provider, showCollapseAll: true, dragAndDropController: this._dnd }), this._navigation = new M(this._tree);
  }
  dispose() {
    this._history.dispose(), this._tree.dispose(), this._sessionDisposable?.dispose();
  }
  getInput() {
    return this._input;
  }
  async setInput(e) {
    if (!await Z(e.location.uri, e.location.range.start)) {
      this.clearInput();
      return;
    }
    this._ctxInputSource.set(e.contextValue), this._ctxIsActive.set(true), this._ctxHasResult.set(true), a.commands.executeCommand(`${this.viewId}.focus`);
    let t = !this._input || Object.getPrototypeOf(this._input) !== Object.getPrototypeOf(e);
    this._input = e, this._sessionDisposable?.dispose(), this._tree.title = e.title, this._tree.message = t ? void 0 : this._tree.message;
    let o = Promise.resolve(e.resolve());
    this._provider.update(o.then((u) => u?.provider ?? this._history)), this._dnd.update(o.then((u) => u?.dnd));
    let n = await o;
    if (this._input !== e) return;
    if (!n) {
      this.clearInput();
      return;
    }
    this._history.add(e), this._tree.message = n.message, this._navigation.update(n.navigation);
    let s = n.navigation?.nearest(e.location.uri, e.location.range.start);
    s && this._tree.visible && await this._tree.reveal(s, { select: true, focus: true, expand: true });
    let r = [], d;
    n.highlights && (d = new U(this._tree, n.highlights), r.push(d)), n.provider.onDidChangeTreeData && r.push(n.provider.onDidChangeTreeData(() => {
      this._tree.title = e.title, this._tree.message = n.message, d?.update();
    })), typeof n.dispose == "function" && r.push(new a.Disposable(() => n.dispose())), this._sessionDisposable = a.Disposable.from(...r);
  }
  clearInput() {
    this._sessionDisposable?.dispose(), this._input = void 0, this._ctxHasResult.set(false), this._ctxInputSource.reset(), this._tree.title = a.l10n.t("References"), this._tree.message = this._history.size === 0 ? a.l10n.t("No results.") : a.l10n.t("No results. Try running a previous search again:"), this._provider.update(Promise.resolve(this._history));
  }
}, q = class {
  constructor() {
    this._onDidChange = new a.EventEmitter();
    this.onDidChangeTreeData = this._onDidChange.event;
  }
  update(e) {
    this._sessionDispoables?.dispose(), this._sessionDispoables = void 0, this._onDidChange.fire(void 0), this.provider = e, e.then((t) => {
      this.provider === e && t.onDidChangeTreeData && (this._sessionDispoables = t.onDidChangeTreeData(this._onDidChange.fire, this._onDidChange));
    }).catch((t) => {
      this.provider = void 0, console.error(t);
    });
  }
  async getTreeItem(e) {
    return this._assertProvider(), (await this.provider).getTreeItem(e);
  }
  async getChildren(e) {
    return this._assertProvider(), (await this.provider).getChildren(e);
  }
  async getParent(e) {
    this._assertProvider();
    let t = await this.provider;
    return t.getParent ? t.getParent(e) : void 0;
  }
  _assertProvider() {
    if (!this.provider) throw new Error("MISSING provider");
  }
}, z = class {
  constructor() {
    this.dropMimeTypes = [];
    this.dragMimeTypes = ["text/uri-list"];
  }
  update(e) {
    this._delegate = void 0, e.then((t) => this._delegate = t);
  }
  handleDrag(e, t) {
    if (this._delegate) {
      let o = [];
      for (let n of e) {
        let s = this._delegate.getDragUri(n);
        s && o.push(s.toString());
      }
      o.length > 0 && t.set("text/uri-list", new a.DataTransferItem(o.join(`\r
`)));
    }
  }
  handleDrop() {
    throw new Error("Method not implemented.");
  }
}, E = class {
  constructor(e, t, o, n) {
    this.key = e;
    this.word = t;
    this.anchor = o;
    this.input = n;
    this.description = `${a.workspace.asRelativePath(n.location.uri)} • ${n.title.toLocaleLowerCase()}`;
  }
}, Q = class {
  constructor(e) {
    this._tree = e;
    this._onDidChangeTreeData = new a.EventEmitter();
    this.onDidChangeTreeData = this._onDidChangeTreeData.event;
    this._disposables = [];
    this._ctxHasHistory = new g("reference-list.hasHistory");
    this._inputs = /* @__PURE__ */ new Map();
    this._disposables.push(a.commands.registerCommand("references-view.clear", () => e.clearInput()), a.commands.registerCommand("references-view.clearHistory", () => {
      this.clear(), e.clearInput();
    }), a.commands.registerCommand("references-view.refind", (t) => {
      t instanceof E && this._reRunHistoryItem(t);
    }), a.commands.registerCommand("references-view.refresh", () => {
      let t = Array.from(this._inputs.values()).pop();
      t && this._reRunHistoryItem(t);
    }), a.commands.registerCommand("_references-view.showHistoryItem", async (t) => {
      if (t instanceof E) {
        let o = t.anchor.guessedTrackedPosition() ?? t.input.location.range.start;
        await a.commands.executeCommand("vscode.open", t.input.location.uri, { selection: new a.Range(o, o) });
      }
    }), a.commands.registerCommand("references-view.pickFromHistory", async () => {
      let o = (await this.getChildren()).map((s) => ({ label: s.word, description: s.description, item: s })), n = await a.window.showQuickPick(o, { placeHolder: a.l10n.t("Select previous reference search") });
      n && this._reRunHistoryItem(n.item);
    }));
  }
  dispose() {
    a.Disposable.from(...this._disposables).dispose(), this._onDidChangeTreeData.dispose();
  }
  _reRunHistoryItem(e) {
    this._inputs.delete(e.key);
    let t = e.anchor.guessedTrackedPosition(), o = e.input;
    t && !e.input.location.range.start.isEqual(t) && (o = e.input.with(new a.Location(e.input.location.uri, t))), this._tree.setInput(o);
  }
  async add(e) {
    let t = await a.workspace.openTextDocument(e.location.uri), o = new F(t, e.location.range.start), n = t.getWordRangeAtPosition(e.location.range.start) ?? t.getWordRangeAtPosition(e.location.range.start, /[^\s]+/), s = n ? t.getText(n) : "???", r = new E(JSON.stringify([n?.start ?? e.location.range.start, e.location.uri, e.title]), s, o, e);
    this._inputs.delete(r.key), this._inputs.set(r.key, r), this._ctxHasHistory.set(true);
  }
  clear() {
    this._inputs.clear(), this._ctxHasHistory.set(false), this._onDidChangeTreeData.fire(void 0);
  }
  get size() {
    return this._inputs.size;
  }
  getTreeItem(e) {
    let t = new a.TreeItem(e.word);
    return t.description = e.description, t.command = { command: "_references-view.showHistoryItem", arguments: [e], title: a.l10n.t("Rerun") }, t.collapsibleState = a.TreeItemCollapsibleState.None, t.contextValue = "history-item", t;
  }
  getChildren() {
    return Promise.all([...this._inputs.values()].reverse());
  }
  getParent() {
  }
};
var y = _(require("vscode"));
var v = _(require("vscode"));
var D = class i6 {
  constructor(e, t) {
    this.location = e;
    this.direction = t;
    this.contextValue = "typeHierarchy";
    this.title = t === "supertypes" ? v.l10n.t("Supertypes Of") : v.l10n.t("Subtypes Of");
  }
  async resolve() {
    let e = await Promise.resolve(v.commands.executeCommand("vscode.prepareTypeHierarchy", this.location.uri, this.location.range.start)), t = new G(this.direction, e ?? []), o = new J(t);
    if (t.roots.length !== 0) return { provider: o, get message() {
      return t.roots.length === 0 ? v.l10n.t("No results.") : void 0;
    }, navigation: t, highlights: t, dnd: t, dispose() {
      o.dispose();
    } };
  }
  with(e) {
    return new i6(e, this.direction);
  }
};
var b = class {
  constructor(e, t, o) {
    this.model = e;
    this.item = t;
    this.parent = o;
  }
  remove() {
    this.model.remove(this);
  }
}, G = class {
  constructor(e, t) {
    this.direction = e;
    this.roots = [];
    this._onDidChange = new v.EventEmitter();
    this.onDidChange = this._onDidChange.event;
    this.roots = t.map((o) => new b(this, o, void 0));
  }
  async _resolveTypes(e) {
    if (this.direction === "supertypes") {
      let t = await v.commands.executeCommand("vscode.provideSupertypes", e.item);
      return t ? t.map((o) => new b(this, o, e)) : [];
    } else {
      let t = await v.commands.executeCommand("vscode.provideSubtypes", e.item);
      return t ? t.map((o) => new b(this, o, e)) : [];
    }
  }
  async getTypeChildren(e) {
    return e.children || (e.children = await this._resolveTypes(e)), e.children;
  }
  getDragUri(e) {
    return k(e.item.uri, e.item.range);
  }
  location(e) {
    return new v.Location(e.item.uri, e.item.range);
  }
  nearest(e, t) {
    return this.roots.find((o) => o.item.uri.toString() === e.toString()) ?? this.roots[0];
  }
  next(e) {
    return this._move(e, true) ?? e;
  }
  previous(e) {
    return this._move(e, false) ?? e;
  }
  _move(e, t) {
    if (e.children?.length) return t ? e.children[0] : S(e.children);
    let o = this.roots.includes(e) ? this.roots : e.parent?.children;
    if (o?.length) {
      let n = o.indexOf(e);
      return o[n + (t ? 1 : -1) + o.length % o.length];
    }
  }
  getEditorHighlights(e, t) {
    return e.item.uri.toString() === t.toString() ? [e.item.selectionRange] : void 0;
  }
  remove(e) {
    let o = this.roots.includes(e) ? this.roots : e.parent?.children;
    o && (x(o, e), this._onDidChange.fire(this));
  }
}, J = class {
  constructor(e) {
    this._model = e;
    this._emitter = new v.EventEmitter();
    this.onDidChangeTreeData = this._emitter.event;
    this._modelListener = e.onDidChange((t) => this._emitter.fire(t instanceof b ? t : void 0));
  }
  dispose() {
    this._emitter.dispose(), this._modelListener.dispose();
  }
  getTreeItem(e) {
    let t = new v.TreeItem(e.item.name);
    return t.description = e.item.detail, t.contextValue = "type-item", t.iconPath = O(e.item.kind), t.command = { command: "vscode.open", title: v.l10n.t("Open Type"), arguments: [e.item.uri, { selection: e.item.selectionRange.with({ end: e.item.selectionRange.start }) }] }, t.collapsibleState = v.TreeItemCollapsibleState.Collapsed, t;
  }
  getChildren(e) {
    return e ? this._model.getTypeChildren(e) : this._model.roots;
  }
  getParent(e) {
    return e.parent;
  }
};
function oe(i8, e) {
  let t = new X(e.workspaceState, "subtypes");
  function o() {
    if (y.window.activeTextEditor) {
      let s = new D(new y.Location(y.window.activeTextEditor.document.uri, y.window.activeTextEditor.selection.active), t.value);
      i8.setInput(s);
    }
  }
  function n(s, r) {
    t.value = s;
    let d, u = i8.getInput();
    r instanceof b ? d = new D(new y.Location(r.item.uri, r.item.selectionRange.start), t.value) : r instanceof y.Location ? d = new D(r, t.value) : u instanceof D && (d = new D(u.location, t.value)), d && i8.setInput(d);
  }
  e.subscriptions.push(y.commands.registerCommand("references-view.showTypeHierarchy", o), y.commands.registerCommand("references-view.showSupertypes", (s) => n("supertypes", s)), y.commands.registerCommand("references-view.showSubtypes", (s) => n("subtypes", s)), y.commands.registerCommand("references-view.removeTypeItem", we));
}
function we(i8) {
  i8 instanceof b && i8.remove();
}
var X = class i7 {
  constructor(e, t = "subtypes") {
    this._mem = e;
    this._value = t;
    this._ctxMode = new g("references-view.typeHierarchyMode");
    let o = e.get(i7._key);
    typeof o == "string" ? this.value = o : this.value = t;
  }
  static {
    this._key = "references-view.typeHierarchyMode";
  }
  get value() {
    return this._value;
  }
  set value(e) {
    this._value = e, this._ctxMode.set(e), this._mem.update(i7._key, e);
  }
};
function _e(i8) {
  let e = new N();
  te(e, i8), ee(e, i8), oe(e, i8);
  function t(n) {
    e.setInput(n);
  }
  function o() {
    return e.getInput();
  }
  return { setInput: t, getInput: o };
}
