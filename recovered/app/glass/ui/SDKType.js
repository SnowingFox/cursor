// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SDKType.js range:647677..649098
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.970Z
mEo = L({ "SDKType.js"() {
  "use strict";
  E(), pEo = {}, NZn = { _get: (t) => (pEo[t] ?? "js-mono") + (Tgr ?? ""), _setClientType(t, e) {
    pEo[t] = e;
  }, _setBindingType(t) {
    (!Tgr || Tgr === "-react") && (Tgr = "-" + t);
  } };
} });
function bJu(t) {
  return t instanceof Error ? t : typeof t == "string" ? new Error(t) : new Error("An unknown error occurred.");
}
function yJu(t) {
  const e = new Error(t.message);
  return e.name = t.name, e.stack = t.stack, e;
}
function Iyy(t) {
  try {
    return JSON.stringify(t);
  } catch {
    return gEo;
  }
}
function xyy(t) {
  const e = /* @__PURE__ */ new Set();
  let n = Object.getPrototypeOf(t);
  for (; n && n !== Object.prototype; ) Object.getOwnPropertyNames(n).filter((i) => typeof n?.[i] == "function").forEach((i) => e.add(i)), n = Object.getPrototypeOf(n);
  return Array.from(e);
}
function Ayy(t) {
  if (!t) return {};
  const e = {};
  return Object.entries(t).forEach(([n, i]) => {
    switch (typeof i) {
      case "number":
      case "bigint":
      case "boolean":
        e[String(n)] = i;
        break;
      case "string":
        i.length < 50 ? e[String(n)] = i : e[String(n)] = "set";
        break;
      case "object":
        n === "environment" ? e.environment = i : n === "networkConfig" ? e.networkConfig = i : e[String(n)] = i != null ? "set" : "unset";
        break;
      default:
    }
  }), e;
}
var SJu, gEo, kJu, 