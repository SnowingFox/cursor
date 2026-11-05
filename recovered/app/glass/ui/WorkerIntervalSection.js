// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: WorkerIntervalSection.js range:39355088..39357850
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.161Z
uuC = L({ "WorkerIntervalSection.js"() {
  "use strict";
  E(), at(), at(), at(), pi(), Am(), mk(), ouC(), EZv = wt("<div><div><div><span>Worker Interval</span><span></span><span>Continues when tab is hidden</span></div><div><span>Regular setInterval</span><span></span><span>Throttled when tab is hidden</span></div></div><div><button></button><button>Reset"), IZv = wt("<div><span>useWorkerInterval Hook</span><span>Automatically cleaned up on component unmount (500ms interval)</span><span>"), xZv = wt(`<div><div><h2>Worker Interval</h2><p>A Web Worker-based interval that continues running even when the browser tab is hidden. Regular setInterval is throttled by browsers to ~1Hz when the tab is not visible. Try hiding the tab and see the difference.</p></div><h3>Comparison Demo</h3><h3>useWorkerInterval Hook</h3><div><strong>Usage:</strong><pre>// Standalone function
const cleanup = setWorkerInterval(() => {
  console.log('tick');
}, 1000);
cleanup(); // Stop the interval

// SolidJS hook (auto-cleanup)
useWorkerInterval(() => {
  console.log('tick');
}, 1000);`), fBi = cs(true);
} });
import { createContext as duC, useContext as huC, useLayoutEffect as puC, useMemo as muC, useRef as guC } from "./react-runtime/react/esm-index-production.js";
import { jsx as s3e } from "./react-runtime/react/esm-jsx-runtime-production.js";
function fuC({ children: t, instantiationService: e }) {
  return s3e(Ldc.Provider, { value: e, children: t });
}
function AZv() {
  const t = huC(Ldc);
  if (!t) throw new Error("Gallery section rendered without GalleryInstantiationProvider");
  return t;
}
function vuC({ SolidComponent: t }) {
  const e = AZv(), n = guC(null);
  return puC(() => {
    const i = n.current;
    if (!i) return;
    const r = u0(() => Ee(t, {}), i, e);
    return () => r.dispose();
  }, [t, e]), s3e("div", { ref: n, style: { display: "contents" } });
}
function _uC() {
  return s3e(XFn, { children: s3e(vaC, {}) });
}
function buC() {
  return s3e(XFn, { style: { display: "flex", padding: 10, gap: 16, flexWrap: "wrap", flexDirection: "column", alignItems: "flex-start" }, children: s3e(ccC, {}) });
}
function yuC() {
  return s3e(XFn, { children: s3e(pcC, {}) });
}
function SuC() {
  const t = AZv(), { clipboardService: e, openerService: n } = muC(() => t.invokeFunction((i) => ({ clipboardService: i.get(hf), openerService: i.get(kc) })), [t]);
  return s3e(XFn, { style: { height: "100%" }, children: s3e(AcC, { copyToClipboard: (i) => {
    e.writeText(i);
  }, onUrlClick: (i) => {
    n.open(rt.parse(i));
  } }) });
}
function kuC({ section: t, hostSections: e }) {
  const n = e?.[t] ?? RZv[t];
  if (n) return s3e(n, {});
  const i = PZv[t];
  return i ? s3e(vuC, { SolidComponent: i }, t) : null;
}
var Ldc, RZv, PZv, 