// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ClientInterfaces.js range:640982..641603
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.528Z
kyy = L({ "ClientInterfaces.js"() {
  "use strict";
  E();
} });
function kgr() {
  if (typeof crypto < "u" && typeof crypto.randomUUID == "function") return crypto.randomUUID();
  let t = (/* @__PURE__ */ new Date()).getTime(), e = typeof performance < "u" && performance.now && performance.now() * 1e3 || 0;
  return `xxxxxxxx-xxxx-4xxx-${"89ab"[Math.floor(Math.random() * 4)]}xxx-xxxxxxxxxxxx`.replace(/[xy]/g, (i) => {
    let r = Math.random() * 16;
    return t > 0 ? (r = (t + r) % 16 | 0, t = Math.floor(t / 16)) : (r = (e + r) % 16 | 0, e = Math.floor(e / 16)), (i === "x" ? r : r & 7 | 8).toString(16);
  });
}
