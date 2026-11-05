// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DnsTxtQuery.js range:652769..653804
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.647Z
Oyy = L({ "DnsTxtQuery.js"() {
  "use strict";
  E(), IJu = new Uint8Array([0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101, 116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1]), xJu = "https://cloudflare-dns.com/dns-query", AJu = ["i", "e", "d"], RJu = 200;
} });
function Fyy(t, e) {
  const n = t?.toLowerCase() ?? "";
  return e || n.includes("uncaught exception") || n.includes("failed to fetch") || n.includes("networkerror when attempting to fetch resource");
}
function PJu(t) {
  return `statsig.network_fallback.${s_t(t)}`;
}
function fEo(t, e) {
  const n = PJu(t);
  if (!e || Object.keys(e).length === 0) {
    u7.removeItem(n);
    return;
  }
  u7.setItem(n, JSON.stringify(e));
}
function Byy(t) {
  const e = PJu(t), n = u7.getItem(e);
  if (!n) return null;
  try {
    return JSON.parse(n);
  } catch {
    return QR.error("Failed to parse FallbackInfo"), null;
  }
}
function Uyy(t) {
  try {
    return new URL(t).pathname;
  } catch {
    return null;
  }
}
var vEo, MJu, DJu, 