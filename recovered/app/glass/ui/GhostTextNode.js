// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: GhostTextNode.js range:28081470..28086366
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.701Z
vhs = L({ "GhostTextNode.js"() {
  "use strict";
  E(), Ak(), Vvl = class PXs extends nqe {
    static getType() {
      return "composer-ghost-text";
    }
    static clone(e) {
      const n = new PXs(e.getTextContent(), e.getKey());
      return n.__pendingMention = e.__pendingMention, n.__canonicalSuggestion = e.__canonicalSuggestion, n;
    }
    constructor(e, n) {
      super(e, n);
    }
    createDOM(e) {
      const n = super.createDOM(e);
      return n.classList.add("composer-ghost-text"), n.setAttribute("data-ghost", "true"), n;
    }
    static importJSON(e) {
      const n = new PXs(e.text ?? "");
      return e.format !== void 0 && n.setFormat(e.format), e.detail !== void 0 && n.setDetail(e.detail), e.mode !== void 0 && n.setMode(e.mode), e.style !== void 0 && n.setStyle(e.style), n;
    }
    exportJSON() {
      return { ...super.exportJSON(), type: "composer-ghost-text", version: 1 };
    }
    setPendingFileMention(e) {
      this.__pendingMention = { kind: "file", name: e.name, relativePath: e.relativePath, uri: e.uri, typedFragmentLength: e.typedFragmentLength };
    }
    getPendingFileMention() {
      return this.__pendingMention;
    }
    setCanonicalSuggestion(e) {
      this.__canonicalSuggestion = e;
    }
    getCanonicalSuggestion() {
      return this.__canonicalSuggestion;
    }
    getTextContent() {
      return PXs.forceEmptyText ? "" : super.getTextContent();
    }
  }, Vvl.forceEmptyText = false, gKt = Vvl, BPg = (t) => new gKt(t), U9e = (t) => t instanceof gKt;
} }), a3k = L({ "aiInput2.css"() {
} });
function UPg(t) {
  return t.experimentService?.getDynamicConfigParam("gemini_video_attachment_config", "inlineMaxBytes", { disableExposureLog: false }) ?? zPg;
}
function _hs(t) {
  const e = t.split(".");
  return e.length > 1 ? e[e.length - 1].toLowerCase() : "";
}
function l3k(t) {
  const e = _hs(t.name);
  return t.type === "application/pdf" || e === "pdf";
}
function c3k(t) {
  const e = _hs(t.name);
  return qPg.has(t.type) || GPg.has(e);
}
function bhs(t) {
  return l3k(t) || c3k(t);
}
function I2n(t) {
  if (t.type.startsWith("video/")) return true;
  const e = _hs(t.name);
  return VPg.has(e);
}
function u3k(t) {
  return t.type === "video/quicktime" || _hs(t.name) === "mov";
}
function d3k(t, e) {
  const { name: n } = $Pg(t);
  return `${n || "video"}${e}`;
}
function h3k(t) {
  return u3k(t) ? new File([t], d3k(t.name, ".mp4"), { type: "video/mp4", lastModified: t.lastModified }) : t;
}
function Kvl(t) {
  return Iat(t) ? "image" : bhs(t) ? "document" : I2n(t) ? "video" : "unsupported";
}
function p3k(t) {
  return t < 100 * 1024 ? "lt_100kb" : t < 1024 * 1024 ? "lt_1mb" : t < 10 * 1024 * 1024 ? "lt_10mb" : "gte_10mb";
}
function jPg(t) {
  const e = Kvl(t);
  return { typeBucket: e === "unsupported" ? "other" : e, sizeBucket: p3k(t.size) };
}
function Yvl(t) {
  const n = t.trim().replace(/[^a-zA-Z0-9._-]/g, "_");
  return n.length === 0 || n === "." || n === ".." ? "attachment" : n;
}
function $Pg(t) {
  const e = t.lastIndexOf(".");
  return e <= 0 ? { name: t, extension: "" } : { name: t.slice(0, e), extension: t.slice(e) };
}
async function m3k(t, e, n) {
  const i = Yvl(t), { name: r, extension: s } = $Pg(i);
  let o = i;
  for (let a = 1; await n.fileService.exists(Os(e, o)); a++) o = `${r}_${a}${s}`;
  return o;
}
async function g3k(t, e) {
  const i = (ZAi.get(t) ?? Promise.resolve()).catch(() => {
  }).then(e), r = i.then(() => {
  }, () => {
  });
  ZAi.set(t, r);
  try {
    return await i;
  } finally {
    ZAi.get(t) === r && ZAi.delete(t);
  }
}
async function HPg(t, e, n) {
  const i = Tr.wrap(new Uint8Array(await t.arrayBuffer())), r = Ai(), s = n.workspaceContextService.getWorkspace(), o = await wX(s, n.pathService), a = Os(o, "attachments", Yvl(e));
  try {
    await n.fileService.createFolder(a);
  } catch (u) {
    if (lAe(u) !== IS.FileExists) throw u;
  }
  const l = Yvl(t.name), c = await g3k(a.toString(), async () => {
    const u = await m3k(l, a, n), d = Os(a, u);
    return await n.fileService.writeFile(d, i), d;
  });
  return { uuid: r, path: c.fsPath, filename: l, mimeType: t.type || "application/octet-stream" };
}
async function WPg(t, e, n) {
  return bhs(t) ? { ...await HPg(t, e, n), loadedAt: Date.now() } : void 0;
}
async function Xvl(t, e, n) {
  const i = Zvl(t, n);
  if (i === "unsupported_type") {
    n.notificationService?.error("Unsupported video file format. Please choose a common video file such as .mp4 or .mov.");
    return;
  }
  if (i === "too_large") {
    const s = UPg(n), o = Math.round(s / 1024 / 1024);
    n.notificationService?.error(`Video attachments must be ${o} MB or smaller.`);
    return;
  }
  return { ...await HPg(h3k(t), e, n), loadedAt: Date.now() };
}
function Zvl(t, e) {
  if (!I2n(t)) return "unsupported_type";
  if (t.size > UPg(e)) return "too_large";
}
var GPg, qPg, zPg, Qvl, VPg, ZAi, 