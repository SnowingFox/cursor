// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerSubscriptionEvents.react.js range:30964485..30969460
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt
// wrapper-init: Paw
// hoisted-owner: promptInputCommandContext.js (app-out-vs-workbench-workbench-glass-main-js:5614); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var Paw = L({ "ComposerSubscriptionEvents.react.js"() {
  "use strict";
  E(), Mt();
} }), Lwf = L({ "ComposerHumanMessage.css"() {
} }), Maw = L({ "ComposerFadeOverlay.css"() {
} });
function cKe(t, e) {
  const n = /* @__PURE__ */ new Set(), i = [];
  for (const r of t) {
    const s = e(r);
    n.has(s) || (n.add(s), i.push(r));
  }
  return i;
}
function Daw(t, e, n) {
  const i = new Map(n.map((o) => [o.uuid, Rns(rt.revive(o.uri))])), r = e.flatMap((o) => {
    const a = i.get(o.uuid);
    if (a === void 0) return [];
    const l = o.plainText ?? o.rawText ?? o.label;
    return [{ position: o.position, serializedText: l, path: a }];
  }).sort((o, a) => a.position - o.position);
  let s = t;
  for (const { position: o, serializedText: a, path: l } of r) s.slice(o, o + a.length) === a && (s = s.slice(0, o) + l + s.slice(o + a.length));
  return s;
}
function Naw(t) {
  return t.some((e) => e.type === "skill" && cxn(e.content));
}
function Owf(t, e, n) {
  const i = t.trim();
  if (!(!i.startsWith(e) || !i.endsWith(n))) return i.slice(e.length, i.length - n.length);
}
function Fwf(t, e, n) {
  return Owf(t, e, n) !== void 0;
}
function Law(t) {
  return Fwf(t, mys, gys) || Fwf(t, qMl, zMl);
}
function Bwf(t, e) {
  const n = t.trim(), i = e.replace(/\r?\n/g, " ").replace(/\s+/g, " ").trim();
  return [`agent_id=${n}`, `agent_name=${i}`];
}
function Oaw(t, e) {
  return [mys, ...Bwf(t, e), gys].join(`
`);
}
function GMl(t) {
  if (t?.length) for (const e of t) {
    const n = Owf(e, mys, gys);
    if (n === void 0) continue;
    const r = n.split(`
`).map((s) => s.trim()).find((s) => s.startsWith("agent_name="))?.slice(11).replace(/\r?\n/g, " ").replace(/\s+/g, " ").trim();
    return r && r.length > 0 ? r : void 0;
  }
}
function Faw(t, e) {
  return [qMl, jwf, ...Bwf(t, e), zMl].join(`
`);
}
function WDn(t, e, n, i) {
  const r = _1(t ?? Uy()), s = [], o = [], a = [], l = [], c = [], u = [], d = [], h = [];
  let p = false;
  for (const g of e) {
    const f = x0t(g.slashSubject);
    switch (g.type) {
      case "skill": {
        const _ = vJm(g.content);
        if (_ !== void 0) {
          o.push({ filename: g.name, content: void 0, ...f !== void 0 ? { slashSubject: f } : {}, parameters: { pluginCapability: _ } });
          break;
        }
        if (cxn(g.content)) break;
        s.push({ filename: fTi(g.id), ...f !== void 0 ? { slashSubject: f } : {} });
        break;
      }
      case "command": {
        const _ = EJm(g);
        if (!_) break;
        o.push({ filename: _, content: g.content || void 0, ...f !== void 0 ? { slashSubject: f } : {} });
        break;
      }
      case "subagent": {
        const _ = EJm(g);
        if (!_) break;
        a.push({ name: _, uuid: g.id, ...f !== void 0 ? { slashSubject: f } : {} });
        break;
      }
      case "action":
      case "mode":
      case "mention":
      case "heading":
      case "divider":
      case void 0:
        break;
      default: {
        const _ = g.type;
        break;
      }
    }
  }
  for (const g of n) {
    const f = g.payload;
    if (g.type === "subagent") {
      h.push(Faw(g.uuid, g.label));
      continue;
    }
    if (g.type === "branch" && f?.case === "branch") {
      const _ = f.content.trim();
      o.push({ filename: f.commandFilename, ..._.length > 0 ? { content: _ } : {} });
      continue;
    }
    if (f?.case === "pastChatSelection") {
      const _ = f.transcriptUri === void 0 ? void 0 : htl(f.transcriptUri);
      _ !== void 0 ? u.push({ uri: _.toJSON(), uuid: g.uuid }) : c.push({ composerId: f.agentId, name: f.name });
      continue;
    }
    if (f?.case === "fileSelection") {
      const _ = htl(f.uri);
      _ !== void 0 && u.push({ uri: _.toJSON(), uuid: g.uuid });
      continue;
    }
    if (f?.case === "folderSelection") {
      d.push({ relativePath: f.relativePath, uuid: g.uuid });
      continue;
    }
    if (g.type === "browser") {
      if (yak(g.payload)) {
        p = true, o.push({ filename: Uwf });
        continue;
      }
      Sak(g.payload) && l.push({ browserId: g.payload.browserId, url: g.payload.url, pageTitle: g.payload.pageTitle, uuid: g.uuid });
    }
  }
  return r.cursorRules = cKe(s, (g) => g.filename), r.cursorCommands = cKe(o, (g) => g.filename), r.subagentSelections = cKe(a, (g) => g.name), r.browserSelections = cKe(l, (g) => g.browserId), r.composers = cKe([...r.composers ?? [], ...c], (g) => g.composerId), r.fileSelections = cKe([...r.fileSelections ?? [], ...u], (g) => rt.from(g.uri).toString()), r.folderSelections = cKe([...r.folderSelections ?? [], ...d], (g) => g.relativePath), r.extraContext = cKe((r.extraContext ?? []).filter((g) => !Law(g)), (g) => g), h.length > 0 && (r.extraContext = cKe([...r.extraContext, ...h], (g) => g)), i?.extraContext && i.extraContext.length > 0 && (r.extraContext = cKe([...r.extraContext, ...i.extraContext], (g) => g)), { context: r, hasBrowserMention: p };
}
var Uwf, mys, gys, qMl, zMl, jwf, 