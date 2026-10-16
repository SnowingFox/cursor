"use strict";
var d = require("worker_threads");
var f = { major: 4, minor: 5 };
var y = 1;
var C = ["text/plain", "text/markdown", "text/latex", "application/vnd.code.notebook.stderr", "application/vnd.code.notebook.stdout"];
var s = new TextDecoder();
function _(t, e) {
  let a;
  return t.kind === y ? a = w(t) : t.languageId === "raw" ? a = D(t) : a = h(t, e), a;
}
function b(t) {
  return Array.isArray(t) ? t.map(b) : t != null && typeof t == "object" && Object.keys(t).length > 0 ? Object.keys(t).sort().reduce((e, a) => (e[a] = b(t[a]), e), {}) : t;
}
function g(t) {
  if ("cell" in t) {
    let e = t.cell, a = { execution_count: null, ...e.metadata ?? {} };
    return e.kind === y && delete a.execution_count, a;
  } else return { ...t.metadata ?? {} };
}
function N(t, e) {
  t.metadata = t.metadata || {}, t.metadata.vscode = { languageId: e };
}
function I(t) {
  t.metadata?.vscode && delete t.metadata.vscode;
}
function h(t, e) {
  let a = JSON.parse(JSON.stringify(g({ cell: t })));
  a.metadata = a.metadata || {}, t.languageId !== e ? N(a, t.languageId) : I(a);
  let o = { cell_type: "code", execution_count: a.execution_count ?? null, source: u(t.value.replace(/\r\n/g, `
`)), outputs: (t.outputs || []).map(M), metadata: a.metadata };
  return a?.id && (o.id = a.id), o;
}
function D(t) {
  let e = g({ cell: t }), a = { cell_type: "raw", source: u(t.value.replace(/\r\n/g, `
`)), metadata: e?.metadata || {} };
  return e?.attachments && (a.attachments = e.attachments), e?.id && (a.id = e.id), a;
}
function u(t) {
  if (Array.isArray(t)) return t;
  let e = t.toString();
  if (e.length > 0) {
    let a = e.split(`
`);
    return a.map((o, n) => n < a.length - 1 ? `${o}
` : o).filter((o) => o.length > 0);
  }
  return [];
}
function M(t) {
  let e = t.metadata, a;
  switch (e?.outputType) {
    case "error": {
      a = k(t);
      break;
    }
    case "stream": {
      a = x(t);
      break;
    }
    case "display_data": {
      a = { output_type: "display_data", data: t.items.reduce((n, r) => (n[r.mime] = m(r.mime, r.data), n), {}), metadata: e?.metadata || {} };
      break;
    }
    case "execute_result": {
      a = { output_type: "execute_result", data: t.items.reduce((n, r) => (n[r.mime] = m(r.mime, r.data), n), {}), metadata: e?.metadata || {}, execution_count: typeof e?.executionCount == "number" ? e?.executionCount : null };
      break;
    }
    case "update_display_data": {
      a = { output_type: "update_display_data", data: t.items.reduce((n, r) => (n[r.mime] = m(r.mime, r.data), n), {}), metadata: e?.metadata || {} };
      break;
    }
    default: {
      let n = t.items.length === 1 && t.items.every((l) => l.mime === "application/vnd.code.notebook.error"), r = t.items.every((l) => l.mime === "application/vnd.code.notebook.stderr" || l.mime === "application/vnd.code.notebook.stdout");
      if (n) return k(t);
      let c = e?.outputType || (r ? "stream" : "display_data"), i;
      c === "stream" ? i = x(t) : c === "display_data" ? i = { data: {}, metadata: {}, output_type: "display_data" } : i = { output_type: c }, e?.metadata && (i.metadata = e.metadata), t.items.length > 0 && (i.data = t.items.reduce((l, p) => (l[p.mime] = m(p.mime, p.data), l), {})), a = i;
      break;
    }
  }
  return a && e && e.transient && (a.transient = e.transient), a;
}
function k(t) {
  let e = t.items[0];
  if (!e.data) return { output_type: "error", ename: "", evalue: "", traceback: [] };
  let a = t.metadata?.originalError, o = JSON.parse(s.decode(e.data));
  return { output_type: "error", ename: o.name, evalue: o.message, traceback: a?.traceback || u(o.stack || o.message || "") };
}
function S(t) {
  if (t.items.length > 0) return t.items[0].mime === "application/vnd.code.notebook.stderr" ? "stderr" : "stdout";
}
function x(t) {
  let e = [];
  t.items.filter((o) => o.mime === "application/vnd.code.notebook.stderr" || o.mime === "application/vnd.code.notebook.stdout").map((o) => s.decode(o.data)).forEach((o) => {
    let n = o.split(`
`);
    e.length && n.length && n[0].length > 0 && (e[e.length - 1] = `${e[e.length - 1]}${n.shift()}`);
    for (let r of n) e.push(r);
  });
  for (let o = 0; o < e.length - 1; o++) e[o] = `${e[o]}
`;
  return e.length && e[e.length - 1].length === 0 && e.pop(), { output_type: "stream", name: S(t) || "stdout", text: e };
}
function m(t, e) {
  if (!e) return "";
  try {
    if (t === "application/vnd.code.notebook.error") {
      let a = s.decode(e);
      return JSON.parse(a);
    } else if (t.startsWith("text/") || C.includes(t)) {
      let a = s.decode(e);
      return u(a);
    } else {
      if (t.startsWith("image/") && t !== "image/svg+xml") return typeof Buffer < "u" && typeof Buffer.from == "function" ? Buffer.from(e).toString("base64") : btoa(e.reduce((a, o) => a + String.fromCharCode(o), ""));
      if (t.toLowerCase().includes("json")) {
        let a = s.decode(e);
        return a.length > 0 ? JSON.parse(a) : a;
      } else return t === "image/svg+xml" ? u(s.decode(e)) : s.decode(e);
    }
  } catch {
    return "";
  }
}
function w(t) {
  let e = g({ cell: t }), a = { cell_type: "markdown", source: u(t.value.replace(/\r\n/g, `
`)), metadata: e?.metadata || {} };
  return e?.attachments && (a.attachments = e.attachments), e?.id && (a.id = e.id), a;
}
function T(t) {
  let e = { ...t, source: u(t.source) };
  return e.cell_type !== "code" ? (delete e.outputs, delete e.execution_count) : e.outputs = e.outputs ? e.outputs.map(j) : [], e;
}
var E = { output_type: "stream", name: "stdout", text: "" }, A = { output_type: "error", ename: "", evalue: "", traceback: [""] }, J = { output_type: "display_data", data: {}, metadata: {} }, R = { output_type: "execute_result", name: "", execution_count: 0, data: {}, metadata: {} }, v = { stream: new Set(Object.keys(E)), error: new Set(Object.keys(A)), display_data: new Set(Object.keys(J)), execute_result: new Set(Object.keys(R)) };
function j(t) {
  let e;
  switch (t.output_type) {
    case "stream":
    case "error":
    case "execute_result":
    case "display_data":
      e = v[t.output_type];
      break;
    default:
      return t;
  }
  let a = { ...t };
  for (let o of Object.keys(t)) e.has(o) || delete a[o];
  return a;
}
function O(t) {
  let e = K(t), a = e.metadata?.language_info?.name ?? t.cells.find((n) => n.kind === 2)?.languageId;
  e.cells = t.cells.map((n) => _(n, a)).map(T);
  let o = t.metadata && "indentAmount" in t.metadata && typeof t.metadata.indentAmount == "string" ? t.metadata.indentAmount : " ";
  return U(e, o);
}
function U(t, e) {
  let a = b(t);
  return JSON.stringify(a, void 0, e) + `
`;
}
function K(t) {
  let e = t.metadata || {}, a = {};
  return a.cells = e.cells || [], a.nbformat = e.nbformat || f.major, a.nbformat_minor = e.nbformat_minor ?? f.minor, a.metadata = e.metadata || {}, a;
}
d.parentPort && d.parentPort.on("message", ({ id: t, data: e }) => {
  if (d.parentPort) {
    let a = O(e), o = new TextEncoder().encode(a);
    d.parentPort.postMessage({ id: t, data: o });
  }
});
