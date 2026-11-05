// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ExternalLink.js range:29698033..29704903
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.662Z
L7k = L({ "ExternalLink.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), D7k(), Tof = wt('<a target=_blank rel="noopener noreferrer">');
} });
function O7k(t) {
  const e = t.trim();
  return e.length === 0 || /^[a-z][a-z0-9+.-]*:/i.test(e) && !/^[a-z]:[\\/]/i.test(e) ? false : e.includes("/") || e.includes("\\");
}
function Eof(t) {
  return t.split(/[\\/]+/).filter((e) => e.length > 0);
}
function F7k(t) {
  const e = Eof(t), n = e[e.length - 1] ?? t;
  for (const i of [".mdc", ".md"]) if (n.endsWith(i)) return n.slice(0, -i.length);
  return n;
}
function B7k(t) {
  const e = Eof(t), n = e[e.length - 1] ?? t;
  return n === "SKILL.md" && e.length >= 2 ? e[e.length - 2] ?? n : F7k(t);
}
function U7k(t) {
  const { categoryId: e, nodeLabel: n } = t;
  if (e !== "rules" && e !== "skills") return;
  const i = n.trim();
  if (O7k(i)) return { kind: "file", path: i, label: B7k(i) };
}
function j7k(t, e) {
  return e && typeof e == "object" && e.__type === "Uint8Array" && typeof e.hex == "string" ? fJ(e.hex) : e;
}
function $7k(t) {
  const e = zst.deserialize(t);
  return JSON.parse(e, j7k);
}
function bEl(t, e) {
  if (!(typeof t != "object" || t === null || !(e in t))) return t[e];
}
function H7k(t, e) {
  if (e === "content") return bEl(t, "content");
  const n = /^content\[(\d+)\](?:\.([A-Za-z0-9_]+))?$/.exec(e);
  if (n === null) return t;
  const i = bEl(t, "content");
  if (!Array.isArray(i)) return;
  const r = Number(n[1]), s = i[r], o = n[2];
  return o === void 0 ? s : bEl(s, o);
}
function W7k(t) {
  if (t == null) return "";
  if (typeof t == "string") return t;
  try {
    return JSON.stringify(t, void 0, 2);
  } catch {
    return String(t);
  }
}
function yEl(t) {
  return t.split(/\r?\n/).filter((e) => e.trim() !== xof).join(`
`);
}
function Iof(t) {
  const { estimatedTokens: e, rawCharacterCount: n, visibleCharacterCount: i } = t;
  if (e === void 0 || e <= 0 || n <= 0 || i <= 0) return;
  const r = Math.round(e * i / n);
  return r > 0 ? r : void 0;
}
function SEl(t) {
  if (!(typeof t != "object" || t === null)) return t;
}
function G7k(t) {
  const e = SEl(t);
  if (e !== void 0) {
    if (e.type === "text" && typeof e.text == "string") return { type: "text", text: e.text };
    if (e.type === "tool_use" && typeof e.name == "string") return { type: "tool_use", name: e.name, input: e.input };
  }
}
function q7k(t) {
  let e;
  try {
    e = JSON.parse(t);
  } catch {
    return;
  }
  const n = SEl(e);
  if (n === void 0 || typeof n.role != "string") return;
  const i = SEl(n.message);
  if (i === void 0 || !Array.isArray(i.content)) return;
  const r = [];
  for (const s of i.content) {
    const o = G7k(s);
    o !== void 0 && r.push(o);
  }
  if (r.length !== 0) return { role: n.role, message: { content: r } };
}
function z7k(t) {
  switch (t) {
    case "user":
      return "User Message";
    case "assistant":
      return "Agent Message";
    case "tool":
      return "Tool Message";
    default:
      return `${t.charAt(0).toUpperCase()}${t.slice(1)} Message`;
  }
}
function V7k(t) {
  try {
    return JSON.stringify(t, void 0, 2);
  } catch {
    return String(t);
  }
}
function K7k(t, e) {
  if (e <= 0 || t.length === 0) return t.map(() => 0);
  const n = t.reduce((o, a) => o + (a.characterCount ?? a.text.length), 0);
  if (n <= 0) return t.map(() => 0);
  const i = t.map((o, a) => {
    const l = o.characterCount ?? o.text.length, c = e * l / n, u = Math.floor(c);
    return { index: a, floor: u, remainder: c - u };
  });
  let r = e - i.reduce((o, a) => o + a.floor, 0);
  const s = i.map((o) => o.floor);
  for (const o of [...i].sort((a, l) => l.remainder - a.remainder)) {
    if (r <= 0) break;
    s[o.index]++, r--;
  }
  return s;
}
function Y7k(t, e) {
  const n = [];
  let i = 0, r = 0;
  const s = t.split(/\r?\n/);
  for (let a = 0; a < s.length; a++) {
    const l = s[a].trim();
    if (l.length === 0) continue;
    const c = q7k(l);
    if (c !== void 0) for (let u = 0; u < c.message.content.length; u++) {
      const d = c.message.content[u], h = d.type === "text" ? c.role === "user" ? qXm(d.text) : d.text : V7k(d.input), p = yEl(h);
      i += h.length, r += p.length, p.length !== 0 && n.push({ id: `message:${a}:transcript[${u}]`, parentId: "category:conversation", categoryId: "conversation", label: d.type === "tool_use" ? `Tool: ${d.name}` : z7k(c.role), text: p, characterCount: p.length });
    }
  }
  const o = K7k(n, Iof({ estimatedTokens: e, rawCharacterCount: i, visibleCharacterCount: r }) ?? 0);
  return n.map((a, l) => ({ ...a, estimatedTokens: o[l] > 0 ? o[l] : void 0 }));
}
async function X7k(t) {
  const { node: e, rootPromptMessagesJson: n, blobStore: i, ctx: r, rootPromptParsedByBlobHex: s } = t;
  if (e.inlineContent !== void 0 && e.inlineContent.length > 0) return yEl(e.inlineContent);
  const o = e.source;
  if (o === void 0) return;
  if (o.sourceType !== "root_prompt_message") return `Unsupported source type: ${o.sourceType}`;
  const a = n[o.messageIndex];
  if (a === void 0) return `Missing root prompt blob for message index ${o.messageIndex}`;
  const l = await i.getBlob(r, a);
  if (l === void 0) return `Blob ${$v(a)} is not available locally.`;
  const c = $v(a);
  let u = s.get(c);
  u === void 0 && (u = $7k(l), s.set(c, u));
  const d = H7k(u, o.contentPath), h = W7k(d), p = o.endOffset > 0 ? o.endOffset : h.length;
  return yEl(h.slice(o.startOffset, p));
}
function Z7k(t) {
  const e = [];
  return t.estimatedTokens > 0 && e.push(`~${Wlt(t.estimatedTokens)} tokens`), t.characterCount > 0 && e.push(`${t.characterCount.toLocaleString()} chars`), `${e.length > 0 ? e.join(" · ") : "metadata only"}. The full schema is sent to the model but not shown here.`;
}
async function Q7k(t) {
  const e = /* @__PURE__ */ new Map(), n = new xI(8), r = (await Promise.all(t.nodes.filter((s) => s.contentAvailable).map((s) => n.queue(async () => {
    const o = await X7k({ node: s, rootPromptMessagesJson: t.rootPromptMessagesJson, blobStore: t.blobStore, ctx: t.ctx, rootPromptParsedByBlobHex: e });
    if (!(o === void 0 || o.length === 0)) return { id: s.id, parentId: s.parentId, categoryId: s.categoryId, label: s.label ?? "", text: o, estimatedTokens: Iof({ estimatedTokens: s.estimatedTokens, rawCharacterCount: Math.max(s.characterCount, o.length), visibleCharacterCount: o.length }), characterCount: o.length, source: U7k({ categoryId: s.categoryId, nodeLabel: s.label ?? "" }) };
  })))).filter($m);
  t.transcriptContent !== void 0 && r.push(...Y7k(t.transcriptContent, t.conversationTokenTotal));
  for (const s of t.nodes) s.kind !== "tool_definition" || s.contentAvailable || r.push({ id: s.id, parentId: s.parentId, categoryId: s.categoryId, label: s.label ?? "", text: Z7k(s), estimatedTokens: s.estimatedTokens, characterCount: s.characterCount });
  return r;
}
var xof, 