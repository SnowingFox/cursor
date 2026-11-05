// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: WebviewDevtoolsSection.js range:39348595..39350853
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.160Z
nuC = L({ "WebviewDevtoolsSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), at(), Am(), pi(), FS(), e_(), mk(), yZv = wt('<form class="flex gap-2 items-center flex-wrap"><label class="text-xs opacity-70">URL:</label><input type=text placeholder=https://... class="flex-1 min-w-[200px] text-xs px-2 py-1 rounded border border-[var(--vscode-input-border)] bg-[var(--vscode-input-background)] text-[var(--vscode-input-foreground)]">'), SZv = wt('<div class="text-xs opacity-70">Status: '), kZv = wt('<div class="flex gap-2 flex-wrap">'), wZv = wt('<div class="flex flex-1 w-full min-h-[500px]"><div class="flex-1 min-w-0 border border-[var(--vscode-input-border)] rounded overflow-hidden flex flex-col"><div class="text-xs opacity-50 px-2 py-1 border-b border-[var(--vscode-input-border)] truncate"></div><webview></webview></div><div><webview src=about:blank>'), CZv = wt('<div class="absolute inset-0 flex items-center justify-center text-xs opacity-50 pointer-events-none">DevTools webview loading...'), TZv = globalThis.vscode, Edc = TZv?.ipcRenderer, Idc = "https://example.com", xdc = cs(false), Adc = cs("Waiting for webviews..."), Rdc = cs(false), Pdc = cs(false), Mdc = cs(Idc), Ddc = cs(Idc), gBi = cs(null);
} });
function iuC() {
  return `
		let intervalId = null;

		function clearExistingInterval() {
			if (intervalId !== null) {
				clearInterval(intervalId);
				intervalId = null;
			}
		}

		onmessage = (e) => {
			const { interval, signal } = e.data;

			if (signal === 'start') {
				clearExistingInterval();
				if (interval !== undefined) {
					intervalId = setInterval(() => {
						postMessage('tick');
					}, interval);
				}
			} else if (signal === 'stop') {
				clearExistingInterval();
			}
		};
	`;
}
function ruC() {
  const t = new Blob([iuC()], { type: "application/javascript" }), e = URL.createObjectURL(t), n = cfl(e, { name: "interval-worker" });
  return URL.revokeObjectURL(e), n;
}
function Ndc(t, e) {
  const n = ruC();
  return n.postMessage({ signal: "start", interval: e }), n.onmessage = (i) => {
    i.data === "tick" && t();
  }, () => {
    n.postMessage({ signal: "stop" }), n.terminate();
  };
}
function suC(t, e) {
  Xc(() => {
    const n = Ndc(t, e);
    On(n);
  });
}
