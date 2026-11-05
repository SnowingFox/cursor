// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: BrowserToolsSection.js range:38926540..38939754
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.179Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js, solid.js, uuid.js, solidContext.js, gallerySection.js, BrowserToolsSection.css
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js, solid.js, uuid.js, solidContext.js, gallerySection.js, BrowserToolsSection.css
// path-candidate: none (no nls basename match; path inferred, confidence C)
GoC = L({ "BrowserToolsSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), pi(), Xo(), vo(), mk(), $oC(), Hqv = wt("<span class=browser-tools-url>"), Wqv = wt("<div class=browser-tools-browser-placeholder><span>Initializing browser..."), Gqv = wt("<div class=browser-tools-error>"), qqv = wt("<div class=browser-tools-history-list>"), zqv = wt("<img class=browser-tools-screenshot-img alt=Screenshot>"), Vqv = wt("<span class=browser-tools-stat-badge> refs"), Kqv = wt("<span class=browser-tools-stat-badge> tokens"), Yqv = wt("<pre class=browser-tools-snapshot-pre>"), Xqv = wt("<div class=browser-tools-snapshot-content>"), Zqv = wt("<div class=browser-tools-benchmark-content><table class=browser-tools-benchmark-table><thead><tr><th>Tool</th><th>Avg</th><th>P95</th></tr></thead><tbody>"), Qqv = wt('<div class=browser-tools-section><div class=browser-tools-top-row><div class=browser-tools-browser-panel><div class=browser-tools-panel-header><span>Browser View</span></div><div class=browser-tools-browser-container></div></div><div class=browser-tools-controls-column><div class=browser-tools-compact-panel><div class=browser-tools-panel-header>Navigation</div><div class=browser-tools-compact-content><div class=browser-tools-input-row><input type=text placeholder=https://example.com><button>Go</button><button title="Load test page">Test</button></div><div class=browser-tools-action-buttons><button>Back</button><button>Fwd</button><button>Reload</button></div></div></div><div class=browser-tools-compact-panel><div class=browser-tools-panel-header>Element Actions</div><div class=browser-tools-compact-content><div class=browser-tools-input-row><input type=text placeholder="e0, e1..."list=ref-suggestions><button>Click</button><button>Hover</button></div><datalist id=ref-suggestions></datalist><div class=browser-tools-input-row><input type=text placeholder="Text to type"><button>Type</button></div></div></div><div class=browser-tools-compact-panel><div class=browser-tools-panel-header>Tools</div><div class=browser-tools-compact-content><div class=browser-tools-action-buttons><button>Screenshot</button><button>Snapshot</button></div><div class=browser-tools-action-buttons><button>Up</button><button>Down</button><button>Esc</button><button>Enter</button><button>Tab</button></div></div></div></div></div><div class=browser-tools-bottom-row><div class=browser-tools-metrics-panel><div class=browser-tools-panel-header>Latency<button class=browser-tools-clear-btn>Clear</button></div><div class=browser-tools-metrics-content><div class=browser-tools-latency-grid></div></div></div><div class=browser-tools-screenshot-panel><div class=browser-tools-panel-header>Screenshot</div><div class=browser-tools-screenshot-content></div></div><div class=browser-tools-snapshot-panel><div class=browser-tools-panel-header><span>Snapshot</span><div class=browser-tools-header-controls><button class=browser-tools-toggle-btn></button></div></div></div><div class=browser-tools-benchmark-panel><div class=browser-tools-panel-header>Benchmark<div class=browser-tools-header-controls><input type=number min=1 max=100><button>'), Jqv = wt("<option>"), ezv = wt("<div class=browser-tools-latency-item><span class=browser-tools-latency-tool></span><span class=browser-tools-latency-value>"), tzv = wt("<div class=browser-tools-history-item><span class=browser-tools-history-tool></span><span class=browser-tools-history-latency></span><span>"), nzv = wt("<span class=browser-tools-placeholder>No screenshot yet"), izv = wt("<span class=browser-tools-placeholder>No snapshot yet"), rzv = wt("<tr><td></td><td></td><td>"), Ruc = `
<!DOCTYPE html>
<html>
<head>
	<title>Browser Tools Test Page</title>
	<style>
		body { font-family: system-ui, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; }
		h1 { color: #333; }
		.form-group { margin-bottom: 16px; }
		label { display: block; margin-bottom: 4px; font-weight: 500; }
		input, select, textarea { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
		button { padding: 10px 20px; background: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 8px; }
		button:hover { background: #0052a3; }
		.checkbox-group { display: flex; align-items: center; gap: 8px; }
		.checkbox-group input { width: auto; }
		a { color: #0066cc; }
		#results { margin-top: 20px; padding: 16px; background: #f5f5f5; border-radius: 4px; min-height: 50px; }
	</style>
</head>
<body>
	<h1>Browser Tools Test Page</h1>
	<form id="test-form">
		<div class="form-group">
			<label for="email">Email</label>
			<input type="text" id="email" name="email" placeholder="Enter your email">
		</div>
		<div class="form-group">
			<label for="password">Password</label>
			<input type="password" id="password" name="password" placeholder="Enter password">
		</div>
		<div class="form-group">
			<label for="country">Country</label>
			<select id="country" name="country">
				<option value="us">United States</option>
				<option value="ca">Canada</option>
				<option value="uk">United Kingdom</option>
				<option value="de">Germany</option>
			</select>
		</div>
		<div class="form-group">
			<label for="message">Message</label>
			<textarea id="message" name="message" rows="3" placeholder="Type your message"></textarea>
		</div>
		<div class="form-group checkbox-group">
			<input type="checkbox" id="remember" name="remember">
			<label for="remember" style="display:inline; font-weight:normal;">Remember me</label>
		</div>
		<button type="submit" id="submit-btn">Submit</button>
		<button type="button" id="clear-btn">Clear</button>
	</form>
	<p><a href="#forgot" id="forgot-link">Forgot password?</a></p>
	<div id="results">Results will appear here</div>
	<script>
		document.getElementById('test-form').addEventListener('submit', function(e) {
			e.preventDefault();
			const formData = new FormData(e.target);
			const data = Object.fromEntries(formData.entries());
			document.getElementById('results').textContent = 'Submitted: ' + JSON.stringify(data);
		});
		document.getElementById('clear-btn').addEventListener('click', function() {
			document.getElementById('test-form').reset();
			document.getElementById('results').textContent = 'Form cleared';
		});
	<\/script>
</body>
</html>
`;
} });
function qoC() {
  const t = jp(), [e, n] = Wt(t.get(V9i));
  On(t.sub(V9i, () => n(t.get(V9i))));
  const i = (a) => t.set(V9i, a), [r, s] = Wt(t.get(K9i));
  On(t.sub(K9i, () => s(t.get(K9i))));
  const o = (a) => t.set(K9i, a);
  return Ee(pk, { title: "Buttons", style: { display: "flex", padding: "10px", gap: "8px", "flex-wrap": "wrap", "flex-direction": "column", "align-items": "flex-start" }, get children() {
    return [(() => {
      var a = szv(), l = a.firstChild, c = l.nextSibling, u = c.firstChild, d = c.nextSibling;
      return Le(c, Ee(tye, { get value() {
        return r();
      }, onChange: (h) => o(h) }), u), Le(d, Ee(ol, { get isLoading() {
        return r();
      }, get codicon() {
        return yt.sync;
      }, children: "With Icon" }), null), Le(d, Ee(ol, { get isLoading() {
        return r();
      }, variant: "outline", get codicon() {
        return yt.sync;
      }, children: "Download" }), null), Le(d, Ee(ol, { get isLoading() {
        return r();
      }, variant: "secondary", get codicon() {
        return yt.refresh;
      }, children: "Refresh" }), null), Le(d, Ee(ol, { get isLoading() {
        return r();
      }, variant: "danger", get codicon() {
        return yt.trash;
      }, children: "Delete" }), null), Le(d, Ee(ol, { get isLoading() {
        return r();
      }, children: "No Icon" }), null), a;
    })(), (() => {
      var a = ozv(), l = a.firstChild, c = l.nextSibling;
      return Le(c, Ee(ol, { children: "Default" }), null), Le(c, Ee(ol, { variant: "secondary", children: "Secondary" }), null), Le(c, Ee(ol, { variant: "outline", children: "Outline" }), null), Le(c, Ee(ol, { variant: "text", children: "Text Only" }), null), Le(c, Ee(ol, { variant: "danger", children: "Danger" }), null), Le(c, Ee(ol, { variant: "focus-outline", children: "Focus Outline" }), null), a;
    })(), (() => {
      var a = azv(), l = a.firstChild, c = l.nextSibling;
      return Le(c, Ee(ol, { get codicon() {
        return yt.add;
      }, children: "Left Icon" }), null), Le(c, Ee(ol, { get rightCodicon() {
        return yt.chevronDown;
      }, children: "Right Icon" }), null), Le(c, Ee(ol, { get codicon() {
        return yt.sync;
      }, variant: "secondary", children: "Secondary Icon" }), null), Le(c, Ee(ol, { get codicon() {
        return yt.link;
      }, variant: "outline", children: "Outline Icon" }), null), Le(c, Ee(ol, { get codicon() {
        return yt.symbolText;
      }, variant: "text", children: "Text Icon" }), null), Le(c, Ee(ol, { get codicon() {
        return yt.trash;
      }, variant: "danger", children: "Delete" }), null), Le(c, Ee(ol, { get codicon() {
        return yt.imageTwo;
      }, variant: "focus-outline", children: "Focus Outline" }), null), Le(c, Ee(eb, { onClick: () => {
      }, get codicon() {
        return yt.imageTwo;
      } }), null), a;
    })(), (() => {
      var a = lzv(), l = a.firstChild, c = l.nextSibling;
      return Le(c, Ee(ol, { isLoading: true, children: "Loading" }), null), Le(c, Ee(ol, { isLoading: true, variant: "outline", children: "Loading Outline" }), null), a;
    })(), (() => {
      var a = czv(), l = a.firstChild, c = l.nextSibling;
      return Le(c, Ee(ol, { keybinding: "⌘K", children: "Command K" }), null), Le(c, Ee(ol, { keybinding: "⏎", variant: "secondary", children: "Enter" }), null), Le(c, Ee(ol, { keybinding: "⌘S", variant: "outline", children: "Save" }), null), Le(c, Ee(ol, { keybinding: "⌘⏎", variant: "focus-outline", children: "Enter" }), null), a;
    })(), (() => {
      var a = uzv(), l = a.firstChild, c = l.nextSibling;
      return Le(c, Ee(ol, { tabFocusable: true, children: "Focusable" }), null), Le(c, Ee(ol, { hintText: "This is a tooltip", children: "With Tooltip" }), null), Le(c, Ee(ol, { onClick: () => {
      }, get codicon() {
        return yt.bell;
      }, tabFocusable: true, hintText: "Notifications", children: "Interactive" }), null), a;
    })(), (() => {
      var a = dzv(), l = a.firstChild, c = l.nextSibling;
      return Le(c, Ee(ol, { isPulsing: true, children: "Default Pulsing" }), null), Le(c, Ee(ol, { isPulsing: true, variant: "outline", children: "Outline Pulsing" }), null), Le(c, Ee(ol, { isPulsing: true, variant: "secondary", children: "Secondary Pulsing" }), null), Le(c, Ee(ol, { isPulsing: true, get codicon() {
        return yt.bellDot;
      }, children: "Notification" }), null), Le(c, Ee(ol, { isPulsing: true, variant: "danger", children: "Important Action" }), null), Le(c, Ee(ol, { isPulsing: true, variant: "focus-outline", children: "Focus Outline Pulsing" }), null), a;
    })(), (() => {
      var a = hzv(), l = a.firstChild, c = l.nextSibling, u = c.firstChild;
      return u.addEventListener("click", (d) => d.preventDefault()), a;
    })(), (() => {
      var a = pzv(), l = a.firstChild, c = l.nextSibling, u = c.nextSibling, d = u.firstChild, h = d.nextSibling;
      return Le(c, Ee(eb, { onClick: () => {
      }, get codicon() {
        return yt.add;
      }, hintText: "Add" }), null), Le(c, Ee(eb, { onClick: () => {
      }, get codicon() {
        return yt.refresh;
      }, hintText: "Refresh" }), null), Le(c, Ee(eb, { onClick: () => {
      }, get codicon() {
        return yt.trash;
      }, hintText: "Delete", iconClass: "!text-[14px] text-error-foreground" }), null), Le(c, Ee(eb, { onClick: () => {
      }, get codicon() {
        return yt.settings;
      }, hintText: "Settings" }), null), Le(c, Ee(eb, { onClick: () => {
      }, get codicon() {
        return yt.check;
      }, hintText: "Completed", disabled: true }), null), Le(c, Ee(eb, { onClick: () => {
      }, get codicon() {
        return yt.arrowUpTwo;
      }, hintText: "Completed", get outlined() {
        return e();
      }, variant: "background" }), null), Le(c, Ee(eb, { onClick: () => {
      }, get codicon() {
        return yt.arrowUpTwo;
      }, hintText: "Loading State", outlined: true, variant: "background", isLoading: true }), null), Le(c, Ee(tye, { get value() {
        return e();
      }, onChange: (p) => i(p) }), null), Le(h, Ee(hp, { title: "Basic" }), null), Le(h, Ee(hp, { title: "Icon", get codicon() {
        return yt.copilot;
      } }), null), Le(h, Ee(hp, { title: "Primary", type: "primary" }), null), Le(h, Ee(hp, { title: "Secondary", type: "secondary" }), null), Le(h, Ee(hp, { title: "Tertiary", type: "tertiary" }), null), Le(h, Ee(hp, { title: "Disabled", type: "disabled" }), null), Le(h, Ee(hp, { title: "Danger", type: "danger" }), null), Le(h, Ee(hp, { title: "Secondary w icon", type: "secondary", size: "small", get codicon() {
        return yt.logOut;
      } }), null), Le(h, Ee(hp, { title: "Tertiary small w icon", type: "tertiary", size: "small", get codicon() {
        return yt.logOut;
      } }), null), a;
    })()];
  } });
}
var szv, ozv, azv, lzv, czv, uzv, dzv, hzv, pzv, V9i, K9i, 