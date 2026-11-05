// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LexicalHorizontalRuleNode.js range:27289379..27290568
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, NA, pi, NA, cI, tgl, LX
// wrapper-init: xus
// hoisted-owner: LexicalHorizontalRulePlugin.js (app-out-vs-workbench-workbench-glass-main-js:4728); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

xus = L({ "LexicalHorizontalRuleNode.js"() {
  "use strict";
  E(), at(), NA(), pi(), NA(), cI(), tgl(), LX(), TEg = jd("INSERT_HORIZONTAL_RULE_COMMAND"), tAi = class SPb extends RGr {
    static getType() {
      return "horizontalrule";
    }
    static clone(e) {
      return new SPb(e.__key);
    }
    static importJSON(e) {
      return Ius();
    }
    static importDOM() {
      return { hr: () => ({ conversion: ZAk, priority: 0 }) };
    }
    exportJSON() {
      return { type: "horizontalrule", version: 1 };
    }
    exportDOM() {
      return { element: document.createElement("hr") };
    }
    createDOM() {
      return document.createElement("hr");
    }
    getTextContent() {
      return `
`;
    }
    isInline() {
      return false;
    }
    updateDOM() {
      return false;
    }
    decorate() {
      const e = this;
      return Ee(XAk, { get nodeKey() {
        return e.__key;
      } });
    }
  };
} });
function QAk() {
  const [t] = t1();
  return On(t.registerCommand(TEg, (e) => {
    const n = ku();
    if (!Cc(n)) return false;
    if (n.focus.getNode() !== null) {
      const r = Ius();
      Mxk(r);
    }
    return true;
  }, Sb)), null;
}
