"use strict";
var K = Object.create;
var M = Object.defineProperty;
var V = Object.getOwnPropertyDescriptor;
var j = Object.getOwnPropertyNames;
var J = Object.getPrototypeOf, G = Object.prototype.hasOwnProperty;
var $ = (a3, e) => {
  for (var t in e) M(a3, t, { get: e[t], enumerable: true });
}, H = (a3, e, t, n) => {
  if (e && typeof e == "object" || typeof e == "function") for (let o of j(e)) !G.call(a3, o) && o !== t && M(a3, o, { get: () => e[o], enumerable: !(n = V(e, o)) || n.enumerable });
  return a3;
};
var x = (a3, e, t) => (t = a3 != null ? K(J(a3)) : {}, H(e || !a3 || !a3.__esModule ? M(t, "default", { value: a3, enumerable: true }) : t, a3)), z = (a3) => H(M({}, "__esModule", { value: true }), a3);
var oe = {};
$(oe, { activate: () => te, deactivate: () => ne });
module.exports = z(oe);
var W = x(require("vscode"));
var p = x(require("vscode"));
var L = class {
  constructor(e, t) {
    this.telemetryReporter = t;
    this.applied = false;
    this.range = e.range, this.current = e.current, this.incoming = e.incoming, this.commonAncestors = e.commonAncestors, this.splitter = e.splitter;
  }
  commitEdit(e, t, n) {
    function o(r) {
      switch (r) {
        case 0:
          return "current";
        case 1:
          return "incoming";
        case 2:
          return "both";
      }
    }
    return this.telemetryReporter.sendTelemetryEvent("mergeMarkers.accept", { resolution: o(e) }), n ? (this.applyEdit(e, t.document, n), Promise.resolve(true)) : t.edit((r) => this.applyEdit(e, t.document, r));
  }
  applyEdit(e, t, n) {
    if (!this.applied) {
      if (this.applied = true, e === 0) {
        let o = t.getText(this.current.content);
        this.replaceRangeWithContent(o, n);
      } else if (e === 1) {
        let o = t.getText(this.incoming.content);
        this.replaceRangeWithContent(o, n);
      } else if (e === 2) {
        let o = t.getText(this.current.content), r = t.getText(this.incoming.content);
        n.replace(this.range, o.concat(r));
      }
    }
  }
  replaceRangeWithContent(e, t) {
    if (this.isNewlineOnly(e)) {
      t.replace(this.range, "");
      return;
    }
    t.replace(this.range, e);
  }
  isNewlineOnly(e) {
    return e === `
` || e === `\r
`;
  }
};
var O = "<<<<<<<", _ = "|||||||", X = "=======", B = ">>>>>>>", y = class a {
  static scanDocument(e, t) {
    let n = null, o = [];
    for (let r = 0; r < e.lineCount; r++) {
      let i = e.lineAt(r);
      if (!(!i || i.isEmptyOrWhitespace)) {
        if (i.text.startsWith(O)) {
          if (n !== null) {
            n = null;
            break;
          }
          n = { startHeader: i, commonAncestors: [] };
        } else if (n && !n.splitter && i.text.startsWith(_)) n.commonAncestors.push(i);
        else if (n && !n.splitter && i.text === X) n.splitter = i;
        else if (n && i.text.startsWith(B)) {
          n.endFooter = i;
          let l = a.scanItemTolMergeConflictDescriptor(e, n);
          l !== null && o.push(l), n = null;
        }
      }
    }
    return o.filter(Boolean).map((r) => new L(r, t));
  }
  static scanItemTolMergeConflictDescriptor(e, t) {
    if (!t.startHeader || !t.splitter || !t.endFooter) return null;
    let n = t.commonAncestors[0] || t.splitter;
    return { current: { header: t.startHeader.range, decoratorContent: new p.Range(t.startHeader.rangeIncludingLineBreak.end, a.shiftBackOneCharacter(e, n.range.start, t.startHeader.rangeIncludingLineBreak.end)), content: new p.Range(t.startHeader.rangeIncludingLineBreak.end, n.range.start), name: t.startHeader.text.substring(O.length + 1) }, commonAncestors: t.commonAncestors.map((o, r, i) => {
      let l = i[r + 1] || t.splitter;
      return { header: o.range, decoratorContent: new p.Range(o.rangeIncludingLineBreak.end, a.shiftBackOneCharacter(e, l.range.start, o.rangeIncludingLineBreak.end)), content: new p.Range(o.rangeIncludingLineBreak.end, l.range.start), name: o.text.substring(_.length + 1) };
    }), splitter: t.splitter.range, incoming: { header: t.endFooter.range, decoratorContent: new p.Range(t.splitter.rangeIncludingLineBreak.end, a.shiftBackOneCharacter(e, t.endFooter.range.start, t.splitter.rangeIncludingLineBreak.end)), content: new p.Range(t.splitter.rangeIncludingLineBreak.end, t.endFooter.range.start), name: t.endFooter.text.substring(B.length + 1) }, range: new p.Range(t.startHeader.range.start, t.endFooter.rangeIncludingLineBreak.end) };
  }
  static containsConflict(e) {
    if (!e) return false;
    let t = e.getText();
    return t.includes(O) && t.includes(B);
  }
  static shiftBackOneCharacter(e, t, n) {
    if (t.isEqual(n)) return t;
    let o = t.line, r = t.character - 1;
    return r < 0 && (o--, r = e.lineAt(o).range.end.character), new p.Position(o, r);
  }
};
var A = class {
  constructor(e) {
    this.defaultDelay = e, this.timeout = null, this.completionPromise = null, this.onSuccess = null, this.task = null;
  }
  trigger(e, t = this.defaultDelay) {
    return this.task = e, t >= 0 && this.cancelTimeout(), this.completionPromise || (this.completionPromise = new Promise((n) => {
      this.onSuccess = n;
    }).then(() => {
      this.completionPromise = null, this.onSuccess = null;
      let n = this.task();
      return this.task = null, n;
    })), (t >= 0 || this.timeout === null) && (this.timeout = setTimeout(() => {
      this.timeout = null, this.onSuccess(void 0);
    }, t >= 0 ? t : this.defaultDelay)), this.completionPromise;
  }
  forceDelivery() {
    if (!this.completionPromise) return null;
    this.cancelTimeout();
    let e = this.completionPromise;
    return this.onSuccess(void 0), e;
  }
  isTriggered() {
    return this.timeout !== null;
  }
  cancel() {
    this.cancelTimeout(), this.completionPromise = null;
  }
  cancelTimeout() {
    this.timeout !== null && (clearTimeout(this.timeout), this.timeout = null);
  }
};
var S = class {
  constructor(e, t) {
    this.origins = /* @__PURE__ */ new Set();
    this.origins.add(t), this.delayTask = new A(e);
  }
  addOrigin(e) {
    this.origins.add(e);
  }
  hasOrigin(e) {
    return this.origins.has(e);
  }
}, N = class {
  constructor(e, t) {
    this.parent = e;
    this.origin = t;
  }
  getConflicts(e) {
    return this.parent.getConflicts(e, this.origin);
  }
  isPending(e) {
    return this.parent.isPending(e, this.origin);
  }
  forget(e) {
    this.parent.forget(e);
  }
}, E = class {
  constructor(e) {
    this.telemetryReporter = e;
    this.cache = /* @__PURE__ */ new Map();
    this.delayExpireTime = 0;
    this.seenDocumentsWithConflicts = /* @__PURE__ */ new Set();
  }
  getConflicts(e, t) {
    let n = this.getCacheKey(e);
    if (!n) return Promise.resolve(this.getConflictsOrEmpty(e, [t]));
    let o = this.cache.get(n);
    return o ? o.addOrigin(t) : (o = new S(this.delayExpireTime, t), this.cache.set(n, o)), o.delayTask.trigger(() => {
      let r = this.getConflictsOrEmpty(e, Array.from(o.origins));
      return this.cache?.delete(n), r;
    });
  }
  isPending(e, t) {
    if (!e) return false;
    let n = this.getCacheKey(e);
    if (!n) return false;
    let o = this.cache.get(n);
    return o ? o.hasOrigin(t) : false;
  }
  createTracker(e) {
    return new N(this, e);
  }
  forget(e) {
    let t = this.getCacheKey(e);
    t && this.cache.delete(t);
  }
  dispose() {
    this.cache.clear();
  }
  getConflictsOrEmpty(e, t) {
    if (!y.containsConflict(e)) return [];
    let o = y.scanDocument(e, this.telemetryReporter), r = e.uri.toString();
    return this.seenDocumentsWithConflicts.has(r) || (this.seenDocumentsWithConflicts.add(r), this.telemetryReporter.sendTelemetryEvent("mergeMarkers.documentWithConflictMarkersOpened", {}, { conflictCount: o.length })), o;
  }
  getCacheKey(e) {
    return e.uri ? e.uri.toString() : null;
  }
};
var m = x(require("vscode")), D = class {
  constructor(e) {
    this.tracker = e.createTracker("codelens");
  }
  begin(e) {
    this.config = e, this.config.enableCodeLens && this.registerCodeLensProvider();
  }
  configurationUpdated(e) {
    e.enableCodeLens === false && this.codeLensRegistrationHandle ? (this.codeLensRegistrationHandle.dispose(), this.codeLensRegistrationHandle = null) : e.enableCodeLens === true && !this.codeLensRegistrationHandle && this.registerCodeLensProvider(), this.config = e;
  }
  dispose() {
    this.codeLensRegistrationHandle && (this.codeLensRegistrationHandle.dispose(), this.codeLensRegistrationHandle = null);
  }
  async provideCodeLenses(e, t) {
    if (!this.config || !this.config.enableCodeLens) return null;
    let n = await this.tracker.getConflicts(e), o = n?.length ?? 0;
    if (m.commands.executeCommand("setContext", "mergeConflictsCount", o), !o) return null;
    let r = [];
    return n.forEach((i) => {
      let l = { command: "merge-conflict.accept.current", title: m.l10n.t("Accept Current Change"), arguments: ["known-conflict", i] }, d = { command: "merge-conflict.accept.incoming", title: m.l10n.t("Accept Incoming Change"), arguments: ["known-conflict", i] }, h = { command: "merge-conflict.accept.both", title: m.l10n.t("Accept Both Changes"), arguments: ["known-conflict", i] }, v = { command: "merge-conflict.compare", title: m.l10n.t("Compare Changes"), arguments: [i] }, T = { command: "merge-conflict.resolve-in-chat", title: m.l10n.t("Resolve with AI"), arguments: ["known-conflict", i] }, u = e.lineAt(i.range.start.line).range, w = [new m.CodeLens(u, l), new m.CodeLens(u, d), new m.CodeLens(u, h), new m.CodeLens(u, v), new m.CodeLens(u, T)];
      r.push(...w);
    }), r;
  }
  registerCodeLensProvider() {
    this.codeLensRegistrationHandle = m.languages.registerCodeLensProvider([{ scheme: "file" }, { scheme: "vscode-vfs" }, { scheme: "untitled" }, { scheme: "vscode-userdata" }], this);
  }
};
var s = x(require("vscode"));
var g = x(require("vscode")), C = class a2 {
  constructor(e) {
    this.context = e;
  }
  static {
    this.scheme = "merge-conflict.conflict-diff";
  }
  begin() {
    this.context.subscriptions.push(g.workspace.registerTextDocumentContentProvider(a2.scheme, this));
  }
  dispose() {
  }
  async provideTextDocumentContent(e) {
    try {
      let { scheme: t, ranges: n } = JSON.parse(e.query), o = await g.workspace.openTextDocument(e.with({ scheme: t, query: "" })), r = "", i = new g.Position(0, 0);
      n.forEach((d) => {
        let [h, v] = d, [T, u] = h, [w, P] = v;
        r += o.getText(new g.Range(i.line, i.character, w.line, w.character)), r += o.getText(new g.Range(T.line, T.character, u.line, u.character)), i = new g.Position(P.line, P.character);
      });
      let l = o.lineAt(o.lineCount - 1).range.end;
      return r += o.getText(new g.Range(i.line, i.character, l.line, l.character)), r;
    } catch {
      return await g.window.showErrorMessage("Unable to show comparison"), null;
    }
  }
};
var b = class {
  constructor(e) {
    this.disposables = [];
    this.tracker = e.createTracker("commands");
  }
  begin() {
    let e = [this.registerTextEditorCommand("merge-conflict.accept.current", this.acceptCurrent), this.registerTextEditorCommand("merge-conflict.accept.incoming", this.acceptIncoming), this.registerTextEditorCommand("merge-conflict.accept.selection", this.acceptSelection), this.registerTextEditorCommand("merge-conflict.accept.both", this.acceptBoth), this.registerTextEditorCommand("merge-conflict.accept.all-current", this.acceptAllCurrent, this.acceptAllCurrentResources), this.registerTextEditorCommand("merge-conflict.accept.all-incoming", this.acceptAllIncoming, this.acceptAllIncomingResources), this.registerTextEditorCommand("merge-conflict.accept.all-both", this.acceptAllBoth), this.registerTextEditorCommand("merge-conflict.next", this.navigateNext), this.registerTextEditorCommand("merge-conflict.previous", this.navigatePrevious), this.registerTextEditorCommand("merge-conflict.compare", this.compare), this.registerTextEditorCommand("merge-conflict.resolve-in-chat", this.resolveInChat)];
    this.disposables.push(...e);
  }
  registerTextEditorCommand(e, t, n) {
    return s.commands.registerCommand(e, (...o) => {
      if (n && o.length && o.every((i) => i && i.resourceUri)) return n.call(this, o.map((i) => i.resourceUri));
      let r = s.window.activeTextEditor;
      return r && t.call(this, r, ...o);
    });
  }
  acceptCurrent(e, ...t) {
    return this.accept(0, e, ...t);
  }
  acceptIncoming(e, ...t) {
    return this.accept(1, e, ...t);
  }
  acceptBoth(e, ...t) {
    return this.accept(2, e, ...t);
  }
  acceptAllCurrent(e) {
    return this.acceptAll(0, e);
  }
  acceptAllIncoming(e) {
    return this.acceptAll(1, e);
  }
  acceptAllCurrentResources(e) {
    return this.acceptAllResources(0, e);
  }
  acceptAllIncomingResources(e) {
    return this.acceptAllResources(1, e);
  }
  acceptAllBoth(e) {
    return this.acceptAll(2, e);
  }
  async compare(e, t) {
    if (!t && (t = await this.findConflictContainingSelection(e), !t)) {
      s.window.showWarningMessage(s.l10n.t("Editor cursor is not within a merge conflict"));
      return;
    }
    let n = await this.tracker.getConflicts(e.document);
    if (!n) {
      s.window.showWarningMessage(s.l10n.t("Editor cursor is not within a merge conflict"));
      return;
    }
    let o = e.document.uri.scheme, r = t.current.content, i = n.map((f) => [f.current.content, f.range]), l = n.map((f) => [f.incoming.content, f.range]), d = e.document.uri.with({ scheme: C.scheme, query: JSON.stringify({ scheme: o, range: r, ranges: i }) });
    r = t.incoming.content;
    let h = d.with({ query: JSON.stringify({ scheme: o, ranges: l }) }), v = 0;
    for (let f of n) {
      if (f.range.isEqual(t.range)) break;
      v += f.range.end.line - f.range.start.line - (f.incoming.content.end.line - f.incoming.content.start.line);
    }
    let T = new s.Range(t.range.start.line - v, t.range.start.character, t.range.start.line - v, t.range.start.character), u = e.document.uri.path, w = u.substring(u.lastIndexOf("/") + 1), P = s.l10n.t("{0}: Current Changes ↔ Incoming Changes", w), F = s.workspace.getConfiguration("merge-conflict").get("diffViewPosition"), q = { viewColumn: F === "Beside" ? s.ViewColumn.Beside : s.ViewColumn.Active, selection: T };
    F === "Below" && await s.commands.executeCommand("workbench.action.newGroupBelow"), await s.commands.executeCommand("vscode.diff", d, h, P, q);
  }
  navigateNext(e) {
    return this.navigate(e, 0);
  }
  navigatePrevious(e) {
    return this.navigate(e, 1);
  }
  async acceptSelection(e) {
    let t = await this.findConflictContainingSelection(e);
    if (!t) {
      s.window.showWarningMessage(s.l10n.t("Editor cursor is not within a merge conflict"));
      return;
    }
    let n, o = t.splitter;
    if (t.commonAncestors.length > 0 && (o = t.commonAncestors[0].header), e.selection.active.isBefore(o.start)) n = 0;
    else if (e.selection.active.isAfter(t.splitter.end)) n = 1;
    else if (e.selection.active.isBefore(t.splitter.start)) {
      s.window.showWarningMessage(s.l10n.t('Editor cursor is within the common ancestors block, please move it to either the "current" or "incoming" block'));
      return;
    } else {
      s.window.showWarningMessage(s.l10n.t('Editor cursor is within the merge conflict splitter, please move it to either the "current" or "incoming" block'));
      return;
    }
    this.tracker.forget(e.document), t.commitEdit(n, e);
  }
  dispose() {
    this.disposables.forEach((e) => e.dispose()), this.disposables = [];
  }
  async navigate(e, t) {
    let n = await this.findConflictForNavigation(e, t);
    if (n) if (n.canNavigate) {
      if (!n.conflict) return;
    } else {
      s.window.showWarningMessage(s.l10n.t("No other merge conflicts within this file"));
      return;
    }
    else {
      if (s.workspace.getConfiguration("merge-conflict").get("autoNavigateNextConflict.enabled")) return;
      s.window.showWarningMessage(s.l10n.t("No merge conflicts found in this file"));
      return;
    }
    e.selection = new s.Selection(n.conflict.range.start, n.conflict.range.start), e.revealRange(n.conflict.range, s.TextEditorRevealType.Default);
  }
  async accept(e, t, ...n) {
    let o;
    if (n[0] === "known-conflict" ? o = n[1] : o = await this.findConflictContainingSelection(t), !o) {
      s.window.showWarningMessage(s.l10n.t("Editor cursor is not within a merge conflict"));
      return;
    }
    this.tracker.forget(t.document), o.commitEdit(e, t), s.workspace.getConfiguration("merge-conflict").get("autoNavigateNextConflict.enabled") && this.navigateNext(t);
  }
  async acceptAll(e, t) {
    let n = await this.tracker.getConflicts(t.document);
    if (!n || n.length === 0) {
      s.window.showWarningMessage(s.l10n.t("No merge conflicts found in this file"));
      return;
    }
    this.tracker.forget(t.document), await t.edit((o) => n.forEach((r) => {
      r.applyEdit(e, t.document, o);
    }));
  }
  async acceptAllResources(e, t) {
    let n = await Promise.all(t.map((r) => s.workspace.openTextDocument(r))), o = new s.WorkspaceEdit();
    for (let r of n) {
      let i = await this.tracker.getConflicts(r);
      !i || i.length === 0 || (this.tracker.forget(r), i.forEach((l) => {
        l.applyEdit(e, r, { replace: (d, h) => o.replace(r.uri, d, h) });
      }));
    }
    s.workspace.applyEdit(o);
  }
  async findConflictContainingSelection(e, t) {
    if (t || (t = await this.tracker.getConflicts(e.document)), !t || t.length === 0) return null;
    for (let n of t) if (n.range.contains(e.selection.active)) return n;
    return null;
  }
  async findConflictForNavigation(e, t, n) {
    if (n || (n = await this.tracker.getConflicts(e.document)), !n || n.length === 0) return null;
    let o = e.selection.active;
    if (n.length === 1) return n[0].range.contains(o) ? { canNavigate: false } : { canNavigate: true, conflict: n[0] };
    let r, i, l;
    if (t === 0) r = (d) => o.isBefore(d.range.start), i = () => n[0], l = n;
    else if (t === 1) r = (d) => o.isAfter(d.range.start), i = () => n[n.length - 1], l = n.slice().reverse();
    else throw new Error(`Unsupported direction ${t}`);
    for (let d of l) if (r(d) && !d.range.contains(o)) return { canNavigate: true, conflict: d };
    return { canNavigate: true, conflict: i() };
  }
  async resolveInChat(e, ...t) {
    let n;
    if (t[0] === "known-conflict" ? n = t[1] : n = await this.findConflictContainingSelection(e), !n) {
      s.window.showWarningMessage(s.l10n.t("Editor cursor is not within a merge conflict"));
      return;
    }
    let o = n.range.start.line + 1, r = n.range.end.line + 1, i = { uri: e.document.uri.toString(), startLine: o, endLine: r, text: e.document.getText(n.range) };
    await s.commands.executeCommand("cmdK.resolveConflictInCmdK", i);
  }
};
var c = x(require("vscode")), k = class {
  constructor(e, t) {
    this.context = e;
    this.decorations = {};
    this.decorationUsesWholeLine = true;
    this.updating = /* @__PURE__ */ new Map();
    this.tracker = t.createTracker("decorator");
  }
  begin(e) {
    this.config = e, this.registerDecorationTypes(e), c.window.visibleTextEditors.forEach((t) => this.applyDecorations(t)), c.workspace.onDidOpenTextDocument((t) => {
      this.applyDecorationsFromEvent(t);
    }, null, this.context.subscriptions), c.workspace.onDidChangeTextDocument((t) => {
      this.applyDecorationsFromEvent(t.document);
    }, null, this.context.subscriptions), c.window.onDidChangeVisibleTextEditors((t) => {
      t.forEach((n) => this.applyDecorations(n));
    }, null, this.context.subscriptions);
  }
  configurationUpdated(e) {
    this.config = e, this.registerDecorationTypes(e), c.window.visibleTextEditors.forEach((t) => {
      this.removeDecorations(t), this.applyDecorations(t);
    });
  }
  registerDecorationTypes(e) {
    Object.keys(this.decorations).forEach((t) => this.decorations[t].dispose()), this.decorations = {}, !(!e.enableDecorations || !e.enableEditorOverview) && ((e.enableDecorations || e.enableEditorOverview) && (this.decorations["current.content"] = c.window.createTextEditorDecorationType(this.generateBlockRenderOptions("merge.currentContentBackground", "editorOverviewRuler.currentContentForeground", e)), this.decorations["incoming.content"] = c.window.createTextEditorDecorationType(this.generateBlockRenderOptions("merge.incomingContentBackground", "editorOverviewRuler.incomingContentForeground", e)), this.decorations["commonAncestors.content"] = c.window.createTextEditorDecorationType(this.generateBlockRenderOptions("merge.commonContentBackground", "editorOverviewRuler.commonContentForeground", e))), e.enableDecorations && (this.decorations["current.header"] = c.window.createTextEditorDecorationType({ isWholeLine: this.decorationUsesWholeLine, backgroundColor: new c.ThemeColor("merge.currentHeaderBackground"), color: new c.ThemeColor("editor.foreground"), outlineStyle: "solid", outlineWidth: "1pt", outlineColor: new c.ThemeColor("merge.border"), after: { contentText: " " + c.l10n.t("(Current Change)"), color: new c.ThemeColor("descriptionForeground") } }), this.decorations["commonAncestors.header"] = c.window.createTextEditorDecorationType({ isWholeLine: this.decorationUsesWholeLine, backgroundColor: new c.ThemeColor("merge.commonHeaderBackground"), color: new c.ThemeColor("editor.foreground"), outlineStyle: "solid", outlineWidth: "1pt", outlineColor: new c.ThemeColor("merge.border") }), this.decorations.splitter = c.window.createTextEditorDecorationType({ color: new c.ThemeColor("editor.foreground"), outlineStyle: "solid", outlineWidth: "1pt", outlineColor: new c.ThemeColor("merge.border"), isWholeLine: this.decorationUsesWholeLine }), this.decorations["incoming.header"] = c.window.createTextEditorDecorationType({ backgroundColor: new c.ThemeColor("merge.incomingHeaderBackground"), color: new c.ThemeColor("editor.foreground"), outlineStyle: "solid", outlineWidth: "1pt", outlineColor: new c.ThemeColor("merge.border"), isWholeLine: this.decorationUsesWholeLine, after: { contentText: " " + c.l10n.t("(Incoming Change)"), color: new c.ThemeColor("descriptionForeground") } })));
  }
  dispose() {
    Object.keys(this.decorations).forEach((e) => {
      this.decorations[e].dispose();
    }), this.decorations = {};
  }
  generateBlockRenderOptions(e, t, n) {
    let o = {};
    return n.enableDecorations && (o.backgroundColor = new c.ThemeColor(e), o.isWholeLine = this.decorationUsesWholeLine), n.enableEditorOverview && (o.overviewRulerColor = new c.ThemeColor(t), o.overviewRulerLane = c.OverviewRulerLane.Full), o;
  }
  applyDecorationsFromEvent(e) {
    for (let t of c.window.visibleTextEditors) t.document === e && this.applyDecorations(t);
  }
  async applyDecorations(e) {
    if (!(!e || !e.document) && !(!this.config || !this.config.enableDecorations && !this.config.enableEditorOverview) && !this.updating.get(e)) try {
      this.updating.set(e, true);
      let t = await this.tracker.getConflicts(e.document);
      if (c.window.visibleTextEditors.indexOf(e) === -1) return;
      if (t.length === 0) {
        this.removeDecorations(e);
        return;
      }
      let n = {}, o = (r, i) => {
        n[r] = n[r] || [], n[r].push(i);
      };
      t.forEach((r) => {
        r.current.decoratorContent.isEmpty || o("current.content", r.current.decoratorContent), r.incoming.decoratorContent.isEmpty || o("incoming.content", r.incoming.decoratorContent), r.commonAncestors.forEach((i) => {
          i.decoratorContent.isEmpty || o("commonAncestors.content", i.decoratorContent);
        }), this.config.enableDecorations && (o("current.header", r.current.header), o("splitter", r.splitter), o("incoming.header", r.incoming.header), r.commonAncestors.forEach((i) => {
          o("commonAncestors.header", i.header);
        }));
      }), Object.keys(n).forEach((r) => {
        let i = this.decorations[r];
        i && e.setDecorations(i, n[r]);
      });
    } finally {
      this.updating.delete(e);
    }
  }
  removeDecorations(e) {
    Object.keys(this.decorations).forEach((t) => {
      let n = this.decorations[t];
      n && e.setDecorations(n, []);
    });
  }
};
var Y = { dispose: () => {
} }, Z = (a3, e, t) => Y, I = class {
  constructor(e, t) {
    this.telemetryLevel = "off";
    this.onDidChangeTelemetryLevel = Z;
  }
  sendTelemetryEvent(e, t, n) {
  }
  sendRawTelemetryEvent(e, t, n) {
  }
  sendDangerousTelemetryEvent(e, t, n) {
  }
  sendTelemetryErrorEvent(e, t, n) {
  }
  sendDangerousTelemetryErrorEvent(e, t, n) {
  }
  dispose() {
    return Promise.resolve();
  }
};
var ee = "merge-conflict", R = class {
  constructor(e) {
    this.context = e;
    this.services = [];
    this.telemetryReporter = new I(""), e.subscriptions.push(this.telemetryReporter);
  }
  begin() {
    let e = this.createExtensionConfiguration(), t = new E(this.telemetryReporter);
    this.services.push(t, new b(t), new D(t), new C(this.context), new k(this.context, t)), this.services.forEach((n) => {
      n.begin && n.begin instanceof Function && n.begin(e);
    }), W.workspace.onDidChangeConfiguration(() => {
      this.services.forEach((n) => {
        n.configurationUpdated && n.configurationUpdated instanceof Function && n.configurationUpdated(this.createExtensionConfiguration());
      });
    });
  }
  createExtensionConfiguration() {
    let e = W.workspace.getConfiguration(ee), t = e.get("codeLens.enabled", true), n = e.get("decorators.enabled", true);
    return { enableCodeLens: t, enableDecorations: n, enableEditorOverview: n };
  }
  dispose() {
    this.services.forEach((e) => e.dispose()), this.services = [];
  }
};
function te(a3) {
  let e = new R(a3);
  e.begin(), a3.subscriptions.push(e);
}
function ne() {
}
