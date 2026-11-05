// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerTranscriptCodeBlock.react.js range:32161336..32163376
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt, Iy
// wrapper-init: oxw
// hoisted-owner: agentStoreVisualizationLoader.js (app-out-vs-workbench-workbench-glass-main-js:6053); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var oxw = L({ "ComposerTranscriptCodeBlock.react.js"() {
  "use strict";
  E(), Mt(), Iy();
} });
function Iks(t) {
  return W6f.exec(t.trim())?.[1];
}
async function axw(t) {
  const { fileService: e, storeRoot: n, sourcePath: i } = t, r = rt.joinPath(n, "visualizations"), s = rt.joinPath(r, i);
  try {
    const [l, c] = await Promise.all([e.stat(r), e.stat(s)]);
    if (!l.isDirectory || l.isSymbolicLink || !c.isFile || c.isSymbolicLink) return { status: "file-error", reason: "unsafe-path" };
    if (c.size !== void 0 && c.size > xks) return { status: "file-error", reason: "file-too-large" };
  } catch (l) {
    return ID(l) === 1 ? { status: "waiting-for-file" } : { status: "file-error", reason: "read-failed" };
  }
  const o = [n, r, s], a = await Promise.all(o.map((l) => e.realpath(l))).catch(() => {
  });
  if (a === void 0 || Iu.isEqual(a[1], a[0]) || !Iu.isEqualOrParent(a[1], a[0]) || Iu.isEqual(a[2], a[1]) || !Iu.isEqualOrParent(a[2], a[1])) return { status: "file-error", reason: "unsafe-path" };
  try {
    const l = await e.readFileStream(a[2], { position: 0, length: T4l, limits: { size: T4l } }), c = await Kq(l.value);
    if (c.byteLength > xks) return { status: "file-error", reason: "file-too-large" };
    const [u, d, h] = await Promise.all([Promise.all(o.map((p) => e.realpath(p))).catch(() => {
    }), e.stat(r), e.stat(s)]);
    return u === void 0 || !a.every((p, g) => Iu.isEqual(p, u[g])) || !d.isDirectory || d.isSymbolicLink || !h.isFile || h.isSymbolicLink ? { status: "file-error", reason: "unsafe-path" } : { status: "ready", html: c.toString() };
  } catch (l) {
    const c = ID(l);
    return c === 7 ? { status: "file-error", reason: "file-too-large" } : c === 1 ? { status: "waiting-for-file" } : { status: "file-error", reason: "read-failed" };
  }
}
async function lxw(t) {
  const e = Iks(t.src);
  return e === void 0 ? { status: "file-error", reason: "invalid-source" } : axw({ fileService: t.fileService, storeRoot: rt.file(t.storeFilesDir), sourcePath: e });
}
var xks, T4l, W6f, 