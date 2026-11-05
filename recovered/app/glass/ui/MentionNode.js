// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MentionNode.js range:26784896..26794738
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.785Z
Xat = L({ "MentionNode.js"() {
  "use strict";
  E(), Mt(), NA(), cW(), Sz(), Hn(), Bt(), Tpl = "background-color: var(--ai-input-mention-background, var(--cursor-bg-blue-secondary)); color: var(--cursor-text-link)", Epl = "background-color: var(--ai-input-mention-background, var(--cursor-bg-yellow-secondary)); color: var(--cursor-text-yellow-primary)", bEt = class mPb extends nqe {
    static getType() {
      return "mention";
    }
    static clone(e) {
      const n = new mPb(e.__mention, e.__contextIntent, e.__text, e.__key, e.typeaheadType, e.metadata, e.storedKey, e.source);
      return n.__presentationFileIconVariant = e.__presentationFileIconVariant, n;
    }
    static importJSON(e) {
      const n = dTe(e.mentionName, e.contextIntent ? Ymn.fromJsonString(e.contextIntent) : void 0, void 0, e.typeaheadType, void 0, e.storedKey, void 0, e.source, e.text);
      if (e.typeaheadType === to.folder && e.text) {
        const i = e.text.endsWith("/") ? e.text.slice(0, -1).replace(/^@/, "") : e.text.replace(/^@/, "");
        n.setTextContent(i);
      } else if (e.typeaheadType === to.file || e.typeaheadType === to.terminal || e.typeaheadType === to.terminal_selection || e.typeaheadType === to.link || e.typeaheadType === to.mcp_attachment || e.typeaheadType === to.git_diff || e.typeaheadType === to.git_pr || e.typeaheadType === to.current_pr || e.typeaheadType === to.browser || e.typeaheadType === to.agent_store) {
        let i = e.text ? e.text.replace(/^@/, "") : e.text;
        e.typeaheadType === to.git_diff && i && (i = i.replace(/\s*\(Diff with Main\)\s*$/i, ""), n.metadata = n.metadata ?? {}, n.metadata.hoverText = n.metadata.hoverText ?? "Diff with Main"), n.setTextContent(i);
      } else n.setTextContent(e.text);
      return n.setFormat(e.format), n.setDetail(e.detail), n.setMode(e.mode), n.setStyle(e.style), n.metadata = e.metadata, e.typeaheadType && (n.typeaheadType = e.typeaheadType), n;
    }
    constructor(e, n, i, r, s, o, a, l) {
      const c = gIr(s), u = i ?? (s === to.folder || s === to.file || s === to.terminal || s === to.terminal_selection || s === to.git_diff || s === to.link || s === to.mcp_attachment || s === to.browser || s === to.agent_store ? e : (c ? "/" : "@") + e);
      super(u, r), this.storedKey = a ?? this.__key, this.__mention = e, this.__contextIntent = n, this.metadata = o, this.typeaheadType = s, this.source = l, this.__presentationFileIconVariant = "seti";
    }
    exportJSON() {
      return { ...super.exportJSON(), text: this.__text, mentionName: this.__mention, contextIntent: this.__contextIntent?.toJsonString(), type: "mention", typeaheadType: this.typeaheadType, storedKey: this.storedKey, version: 1, metadata: this.metadata, source: this.source };
    }
    setContextIntent(e) {
      const n = this.getWritable();
      n.__contextIntent = e;
    }
    getContextIntent() {
      return this.getLatest().__contextIntent;
    }
    setPresentationFileIconVariant(e) {
      const n = this.getWritable();
      return n.__presentationFileIconVariant = e, n;
    }
    updateDOM(e, n, i) {
      return e.__presentationFileIconVariant !== this.__presentationFileIconVariant ? true : super.updateDOM(e, n, i);
    }
    createDOM(e) {
      const n = gIr(this.typeaheadType), i = F5y(this.typeaheadType), r = rXd(this.typeaheadType), s = B5y(this.typeaheadType), o = this.typeaheadType === to.folder, a = this.typeaheadType === to.file, l = this.typeaheadType === "ui-element", c = this.typeaheadType === to.terminal || this.typeaheadType === to.terminal_selection, u = this.typeaheadType === to.link, d = this.typeaheadType === to.mcp_attachment, h = this.typeaheadType === to.git_diff || this.typeaheadType === "diffs", p = super.createDOM(e);
      if (this.source === "editor.cmdk") return p.style.cssText = n ? Epl : Tpl, p.className = "mention mention-plain", p.setAttribute("contenteditable", "false"), p.textContent = this.getTextContent(), p;
      if (p.style.cssText = n ? Epl : Tpl, p.className = "mention", p.setAttribute("contenteditable", "false"), o && (p.textContent = "", p.appendChild(Mle("codicon-folder-two", this.__mention))), a) {
        const T = Q7t({ filenameOrExt: this.__mention, preferred: this.__presentationFileIconVariant });
        if (T.variant !== "seti") p.textContent = "", p.appendChild(YEk({ fileName: this.__mention, iconName: T.iconName, iconStyle: T.style, iconColor: T.color }));
        else if (XEk()) {
          let A = this.metadata?.iconClasses;
          (!A || !Array.isArray(A)) && (A = ["file-icon"]);
          const P = document.createElement("span");
          P.className = ["monaco-icon-label", "mention-file-icon", "mention-file-icon-theme", "height-override-important", ...A].join(" "), p.textContent = "", p.appendChild(Kkg(P, this.__mention));
        } else p.textContent = "", p.appendChild(Mle("codicon-file", this.__mention));
      }
      if (l) {
        const I = (this.__text !== void 0 ? this.__text : this.__mention).match(/<\s*([a-zA-Z0-9-]+)/), A = I ? `<${I[1]}>` : this.__text && !this.__text.startsWith("<") ? this.__text : "<element>";
        p.textContent = "";
        const P = Mle("codicon-inspect", A, "mention-ui-element"), M = P.firstChild;
        M.setAttribute("data-mention-name", this.__mention), M.setAttribute("data-mention-key", this.__key), M.setAttribute("data-typeahead-type", "ui-element"), p.appendChild(P);
      }
      if (c && (p.textContent = "", p.appendChild(Mle("codicon-terminal", this.__mention))), u) if (p.textContent = "", this.__mention.startsWith("file://") && this.__mention.toLowerCase().endsWith(".pdf")) {
        const I = this.__mention.replace(/^file:\/\//, "");
        p.appendChild(Mle("codicon-file-pdf", I));
      } else {
        let I = this.__mention.replace(/^https?:\/\//, "").replace(/\/$/, "");
        p.appendChild(Mle("codicon-link", I));
      }
      if (d && (p.textContent = "", p.appendChild(Mle("codicon-attach", this.__mention))), h && (p.textContent = "", p.appendChild(Mle("codicon-git-branch", this.__mention))), this.typeaheadType === to.doc && (p.textContent = "", p.appendChild(Mle("codicon-book", this.__mention))), this.typeaheadType === to.playwright_mcp && (p.textContent = "", p.appendChild(Mle("codicon-globe", this.__mention))), this.typeaheadType === to.browser && (p.textContent = "", p.appendChild(Mle("codicon-globe", this.__mention, "mention-browser-selection"))), this.typeaheadType === to.agent_store && (p.textContent = "", p.appendChild(Mle("codicon-package", this.__mention))), this.typeaheadType === "console-log" && (p.textContent = "", p.appendChild(Mle("codicon-terminal", this.__mention))), this.typeaheadType === "browser-changes") {
        const T = this.__text || this.__mention;
        p.textContent = "", p.appendChild(Mle("codicon-inspect", T, "mention-browser-changes"));
      }
      if (this.typeaheadType === to.pr_diff && (p.textContent = "", p.appendChild(Mle("codicon-git-pull-request", this.__mention))), (this.typeaheadType === to.git_pr || this.typeaheadType === to.current_pr) && (p.textContent = "", p.appendChild(Mle("codicon-git-pull-request", this.__mention))), this.typeaheadType) {
        const T = zkg(this.typeaheadType), I = KEk(T);
        if (I) for (const [A, P] of Object.entries(I)) p.style[A] = P;
        (T === to.link || T === to.file || T === to.folder || T === to.cursor_command || T === to.pr_diff || T === to.git_pr || T === to.current_pr || T === to.mcp_attachment || T === "cursor_skill" || T === "subagent" || T === to.playwright_mcp || T === to.agent_store) && p.classList.add("mention-clickable"), p.setAttribute("data-mention-name", this.__mention), p.setAttribute("data-mention-key", this.__key), p.setAttribute("data-typeahead-type", T);
      }
      return p;
    }
    exportDOM() {
      const e = document.createElement("span"), n = this.typeaheadType, i = n === to.folder || n === to.file || n === to.terminal || n === to.terminal_selection || n === to.git_diff || n === to.agent_store ? `@${this.__text}` : this.__text;
      if (e.setAttribute("data-mention-key", this.storedKey), e.setAttribute("data-lexical-mention", "true"), e.setAttribute("data-mention-name", this.__mention), this.typeaheadType) {
        const r = zkg(this.typeaheadType);
        e.setAttribute("data-typeahead-type", r);
      }
      if (this.metadata) {
        const r = this.metadata, s = { iconClasses: r.iconClasses || void 0, selection: r.selection || void 0, selectedOption: void 0, hoverText: r.hoverText || void 0, uiElementData: r.uiElementData || void 0, consoleLogData: r.consoleLogData || void 0, prUrl: r.prUrl || void 0, filePath: r.filePath || void 0, startLine: r.startLine, endLine: r.endLine, agentStore: r.agentStore || void 0 }, o = JSON.stringify(s);
        e.setAttribute("data-mention-metadata", o);
      }
      return e.textContent = i, { element: e };
    }
    getTextContent() {
      const e = this.typeaheadType;
      return e === "ui-element" ? this.__mention : e === "browser-changes" ? this.metadata?.llmText ?? this.__mention : e === to.mcp_attachment ? this.metadata?.hoverText ?? this.__mention : this.typeaheadType === to.folder || this.typeaheadType === to.file || this.typeaheadType === to.terminal || this.typeaheadType === to.terminal_selection || this.typeaheadType === to.git_diff || this.typeaheadType === to.git_pr || this.typeaheadType === to.current_pr || this.typeaheadType === to.agent_store ? `@${this.__text}` : super.getTextContent();
    }
    isSegmented() {
      return false;
    }
    static importDOM() {
      return { span: (e) => e.hasAttribute("data-lexical-mention") ? { conversion: VEk, priority: 1 } : null };
    }
    isTextEntity() {
      return true;
    }
    isToken() {
      return true;
    }
  };
} }), ZEk = L({ "checkbox.css"() {
} }), Ykg, tye, 