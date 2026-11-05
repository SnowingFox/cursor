// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../utils/dist/workspace-paths.js" range:2483558..2484190
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
const n = "agent-transcripts";
function s(t) {
  return t.replace(/[^a-zA-Z0-9]/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
}
function i(t, r) {
  return function (t, ...r) {
    if (!function (t) {
      return /^[A-Za-z]:[\\/]/.test(t) || t.startsWith("\\\\") || t.startsWith("//");
    }(t)) return [t.replace(/\/+$/, ""), ...r].join("/");
    const e = t.replace(/\//g, "\\").replace(/\\+$/, ""),
      n = r.map(t => t.replace(/\//g, "\\"));
    return 0 === e.length ? ["", "", ...n].join("\\") : [e, ...n].join("\\");
  }(t, ".cursor", "projects", s(r));
}
function o(t) {
  let r = encodeURIComponent(t);
  return r = r.replace(/%/g, "_"), r.length > 200 && (r = r.slice(0, 200)), r;
}
export { n as O2, i as Rv, s as r_, o as sh };
