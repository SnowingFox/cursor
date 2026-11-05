// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: BrowserEditorContent.js range:26977843..26986143
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.178Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js, index.js, solid.js, lexical.js, hoverWidget.js, window.js, actions.js, +23 more
// anchors: classes=browser-cert-info-value,browser-cert-fingerprint,browser-cert-button,browser-cert-reject,browser-cert-trust
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js, index.js, solid.js, lexical.js, hoverWidget.js, window.js, actions.js, +23 more
// anchors: classes=browser-cert-info-value,browser-cert-fingerprint,browser-cert-button,browser-cert-reject,browser-cert-trust
// path-candidate: none (no nls basename match; path inferred, confidence C)
RIk = L({ "BrowserEditorContent.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), at(), Mt(), pi(), Ak(), Iw(), Bs(), vu(), gs(), Qe(), ta(), Xo(), aS(), vo(), Xat(), Sz(), qJ(), IRn(), Ppl(), eD(), mIk(), gIk(), vIk(), bwg(), rC(), _Ik(), ywg(), xwg(), Lcs(), Dxi(), xIk(), Hwg = wt('<div class="flex flex-col gap-0.5"><div class="flex items-center gap-1.5"><img alt=""class="w-3 h-3 rounded-xs shrink-0"><span class="text-[var(--cursor-text-primary)] text-[11px] font-medium truncate"></span></div><div class="text-[var(--cursor-text-secondary)] text-[10px] leading-[12px] truncate max-w-[280px]">'), Wwg = wt("<button class=nav-button><i>"), Gwg = wt("<span class=url-input-ghost><span class=url-input-ghost-typed></span><span class=url-input-ghost-completion>"), qwg = wt('<div class=url-input-wrapper><input class=url-input type=text placeholder="Enter URL or search..."autocomplete=off>'), zwg = wt("<div class=url-loading-bar><div class=url-loading-bar-progress>"), Vwg = wt('<div class=browser-tools><button title="Select element"><i></i></button><button><i>'), Kwg = wt("<div class=bookmark-drop-indicator-end>"), Ywg = wt("<div class=browser-bookmarks-inner>"), Xwg = wt("<div class=browser-bookmarks-bar>"), Zwg = wt('<div class=browser-error-overlay><div class=browser-error-content><div class=browser-error-icon><i></i></div><div class=browser-error-title>Certificate Error</div><div class=browser-error-subtitle>The certificate for this site is not trusted</div><div class=browser-cert-info><div class=browser-cert-info-row><span class=browser-cert-info-label>Error:</span><span class=browser-cert-info-value></span></div><div class=browser-cert-info-row><span class=browser-cert-info-label>Issuer:</span><span class=browser-cert-info-value></span></div><div class=browser-cert-info-row><span class=browser-cert-info-label>Subject:</span><span class=browser-cert-info-value></span></div><div class=browser-cert-info-row><span class=browser-cert-info-label>Valid:</span><span class=browser-cert-info-value> - </span></div><div class=browser-cert-info-row><span class=browser-cert-info-label>Fingerprint:</span><span class="browser-cert-info-value browser-cert-fingerprint"></span></div></div><div class=browser-cert-warning><i></i><span>Only trust certificates from sources you recognize. Accepting untrusted certificates can compromise your security.</span></div><div class=browser-cert-actions><div class=browser-cert-remember><span>Remember for this workspace</span></div><div class=browser-cert-buttons><button class="browser-cert-button browser-cert-reject">Reject</button><button class="browser-cert-button browser-cert-trust">'), Qwg = wt("<div class=browser-lock-overlay><div>"), Jwg = wt("<div class=browser-recording-indicator><div class=recording-dot></div><span>Recording "), e0g = wt('<div class=browser-device-emulation-indicator title="The agent set a device viewport override on this page"><i></i><span></span><button class=browser-device-emulation-reset title="Return the page to the panel size">Reset'), t0g = wt('<div><div class=browser-navbar><div class=nav-controls><button class=nav-button title="Navigate back"><i></i></button><button class=nav-button title="Navigate forward"><i></i></button><button class=nav-button title="Hard reload (clears cache)"><i></i></button></div><div class=url-input-container></div></div><div><div class=browser-frame-container>'), n0g = wt("<span class=url-placeholder>Loading..."), i0g = wt("<span class=url-raw>"), r0g = wt("<span>"), s0g = wt("<span class=url-placeholder>Enter URL or search..."), o0g = wt("<div class=url-display>"), a0g = wt("<span class=url-protocol>"), l0g = wt("<span class=url-domain>"), c0g = wt("<span class=url-port>"), u0g = wt("<span class=url-path>"), d0g = wt('<button><img alt=""class=bookmark-favicon><i></i><span class=bookmark-domain>'), h0g = wt("<div class=browser-tab-container tabindex=-1>"), p0g = Ok(Swg), m0g = Ok(dR), g0g = `
(function() {
	if (window.__cursorAreaScreenshotInjected) return;
	if (window !== window.top) return;
	window.__cursorAreaScreenshotInjected = true;

	let isDragging = false;
	let dragStartX = null;
	let dragStartY = null;
	let dragSelectionBox = null;
	let areaDragListeners = null;

	function enableAreaSelection() {
		if (areaDragListeners) {
			return; // Already enabled, prevent duplicate listeners
		}
		const mousedownListener = (e) => {
			if (!e.isTrusted) return;
			if (e.target.getAttribute && e.target.getAttribute('data-cursor-overlay') === 'true') return;
			e.preventDefault();
			e.stopPropagation();
			isDragging = true;
			dragStartX = e.clientX;
			dragStartY = e.clientY;
			const overlays = document.querySelectorAll('[data-cursor-overlay="true"]');
			overlays.forEach(el => el.style.display = 'none');
			if (!dragSelectionBox) {
				dragSelectionBox = document.createElement('div');
				dragSelectionBox.style.cssText = 'position:fixed;background:rgba(58,150,221,0.1);border:2px dashed #3a96dd;pointer-events:none;z-index:2147483647;';
				document.body.appendChild(dragSelectionBox);
			}
			dragSelectionBox.style.left = dragStartX + 'px';
			dragSelectionBox.style.top = dragStartY + 'px';
			dragSelectionBox.style.width = '0px';
			dragSelectionBox.style.height = '0px';
		};
		const mousemoveListener = (e) => {
			if (!isDragging || !dragSelectionBox) return;
			const left = Math.min(dragStartX, e.clientX);
			const top = Math.min(dragStartY, e.clientY);
			const width = Math.abs(e.clientX - dragStartX);
			const height = Math.abs(e.clientY - dragStartY);
			dragSelectionBox.style.left = left + 'px';
			dragSelectionBox.style.top = top + 'px';
			dragSelectionBox.style.width = width + 'px';
			dragSelectionBox.style.height = height + 'px';
		};
		const mouseupListener = (e) => {
			if (!isDragging || !e.isTrusted) return;
			e.preventDefault();
			e.stopPropagation();
			const left = Math.min(dragStartX, e.clientX);
			const top = Math.min(dragStartY, e.clientY);
			const width = Math.abs(e.clientX - dragStartX);
			const height = Math.abs(e.clientY - dragStartY);
			if (width > 5 && height > 5) {
				const bounds = { x: Math.round(left), y: Math.round(top), width: Math.round(width), height: Math.round(height) };
				if (dragSelectionBox) { dragSelectionBox.remove(); dragSelectionBox = null; }
				disableAreaSelection();
				requestAnimationFrame(() => {
					requestAnimationFrame(() => {
						if (window.cursorBrowser) {
							window.cursorBrowser.send('area-screenshot-selected', { bounds: bounds });
						}
					});
				});
			} else {
				if (dragSelectionBox) { dragSelectionBox.remove(); dragSelectionBox = null; }
			}
			isDragging = false;
		};
		document.addEventListener('mousedown', mousedownListener, true);
		document.addEventListener('mousemove', mousemoveListener);
		document.addEventListener('mouseup', mouseupListener, true);
		areaDragListeners = { mousedown: mousedownListener, mousemove: mousemoveListener, mouseup: mouseupListener };
	}

	function disableAreaSelection() {
		isDragging = false;
		dragStartX = null;
		dragStartY = null;
		if (dragSelectionBox) { dragSelectionBox.remove(); dragSelectionBox = null; }
		if (areaDragListeners) {
			document.removeEventListener('mousedown', areaDragListeners.mousedown, true);
			document.removeEventListener('mousemove', areaDragListeners.mousemove);
			document.removeEventListener('mouseup', areaDragListeners.mouseup, true);
			areaDragListeners = null;
		}
	}

	function onAreaScreenshotCommand(data) {
		if (!data) return;
		if (data.type === 'start-area-screenshot') {
			enableAreaSelection();
		} else if (data.type === 'stop-area-screenshot') {
			disableAreaSelection();
		}
	}
	window.__cursorAreaScreenshotCommand = onAreaScreenshotCommand;
})();
`, f0g = true, Ypl = (t) => {
    if (!t) return null;
    try {
      return new URL(t).origin;
    } catch {
      return null;
    }
  }, Xpl = (t) => {
    try {
      return new URL(t).host || void 0;
    } catch {
      return;
    }
  }, v0g = "about:blank", Zat = (t) => t === v0g;
} }), _0g = {};
Sa(_0g, { renderBrowserEditor: () => PIk });
function PIk(t, e, n, i) {
  return u0(() => Ee(AIk, { browserId: n, get initialPreserveFocus() {
    return i?.initialPreserveFocus;
  }, get transient() {
    return i?.transient;
  } }), t, e);
}
