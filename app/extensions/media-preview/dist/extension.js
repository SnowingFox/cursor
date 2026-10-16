"use strict";
var ee = Object.create;
var R = Object.defineProperty;
var te = Object.getOwnPropertyDescriptor;
var ie = Object.getOwnPropertyNames;
var re = Object.getPrototypeOf, se = Object.prototype.hasOwnProperty;
var oe = (s2, t) => {
  for (var i in t) R(s2, i, { get: t[i], enumerable: true });
}, Z = (s2, t, i, n) => {
  if (t && typeof t == "object" || typeof t == "function") for (let e of ie(t)) !se.call(s2, e) && e !== i && R(s2, e, { get: () => t[e], enumerable: !(n = te(t, e)) || n.enumerable });
  return s2;
};
var S = (s2, t, i) => (i = s2 != null ? ee(re(s2)) : {}, Z(t || !s2 || !s2.__esModule ? R(i, "default", { value: s2, enumerable: true }) : i, s2)), ne = (s2) => Z(R({}, "__esModule", { value: true }), s2);
var he = {};
oe(he, { activate: () => de });
module.exports = ne(he);
var w = S(require("vscode"));
var C = S(require("vscode"));
var ae = { 975(s2) {
  function t(e) {
    if (typeof e != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
  }
  function i(e, r) {
    for (var o, a = "", c = 0, d = -1, u = 0, h = 0; h <= e.length; ++h) {
      if (h < e.length) o = e.charCodeAt(h);
      else {
        if (o === 47) break;
        o = 47;
      }
      if (o === 47) {
        if (!(d === h - 1 || u === 1)) if (d !== h - 1 && u === 2) {
          if (a.length < 2 || c !== 2 || a.charCodeAt(a.length - 1) !== 46 || a.charCodeAt(a.length - 2) !== 46) {
            if (a.length > 2) {
              var v = a.lastIndexOf("/");
              if (v !== a.length - 1) {
                v === -1 ? (a = "", c = 0) : c = (a = a.slice(0, v)).length - 1 - a.lastIndexOf("/"), d = h, u = 0;
                continue;
              }
            } else if (a.length === 2 || a.length === 1) {
              a = "", c = 0, d = h, u = 0;
              continue;
            }
          }
          r && (a.length > 0 ? a += "/.." : a = "..", c = 2);
        } else a.length > 0 ? a += "/" + e.slice(d + 1, h) : a = e.slice(d + 1, h), c = h - d - 1;
        d = h, u = 0;
      } else o === 46 && u !== -1 ? ++u : u = -1;
    }
    return a;
  }
  var n = { resolve: function() {
    for (var e, r = "", o = false, a = arguments.length - 1; a >= -1 && !o; a--) {
      var c;
      a >= 0 ? c = arguments[a] : (e === void 0 && (e = process.cwd()), c = e), t(c), c.length !== 0 && (r = c + "/" + r, o = c.charCodeAt(0) === 47);
    }
    return r = i(r, !o), o ? r.length > 0 ? "/" + r : "/" : r.length > 0 ? r : ".";
  }, normalize: function(e) {
    if (t(e), e.length === 0) return ".";
    var r = e.charCodeAt(0) === 47, o = e.charCodeAt(e.length - 1) === 47;
    return (e = i(e, !r)).length !== 0 || r || (e = "."), e.length > 0 && o && (e += "/"), r ? "/" + e : e;
  }, isAbsolute: function(e) {
    return t(e), e.length > 0 && e.charCodeAt(0) === 47;
  }, join: function() {
    if (arguments.length === 0) return ".";
    for (var e, r = 0; r < arguments.length; ++r) {
      var o = arguments[r];
      t(o), o.length > 0 && (e === void 0 ? e = o : e += "/" + o);
    }
    return e === void 0 ? "." : n.normalize(e);
  }, relative: function(e, r) {
    if (t(e), t(r), e === r || (e = n.resolve(e)) === (r = n.resolve(r))) return "";
    for (var o = 1; o < e.length && e.charCodeAt(o) === 47; ++o) ;
    for (var a = e.length, c = a - o, d = 1; d < r.length && r.charCodeAt(d) === 47; ++d) ;
    for (var u = r.length - d, h = c < u ? c : u, v = -1, l = 0; l <= h; ++l) {
      if (l === h) {
        if (u > h) {
          if (r.charCodeAt(d + l) === 47) return r.slice(d + l + 1);
          if (l === 0) return r.slice(d + l);
        } else c > h && (e.charCodeAt(o + l) === 47 ? v = l : l === 0 && (v = 0));
        break;
      }
      var b = e.charCodeAt(o + l);
      if (b !== r.charCodeAt(d + l)) break;
      b === 47 && (v = l);
    }
    var U = "";
    for (l = o + v + 1; l <= a; ++l) l !== a && e.charCodeAt(l) !== 47 || (U.length === 0 ? U += ".." : U += "/..");
    return U.length > 0 ? U + r.slice(d + v) : (d += v, r.charCodeAt(d) === 47 && ++d, r.slice(d));
  }, _makeLong: function(e) {
    return e;
  }, dirname: function(e) {
    if (t(e), e.length === 0) return ".";
    for (var r = e.charCodeAt(0), o = r === 47, a = -1, c = true, d = e.length - 1; d >= 1; --d) if ((r = e.charCodeAt(d)) === 47) {
      if (!c) {
        a = d;
        break;
      }
    } else c = false;
    return a === -1 ? o ? "/" : "." : o && a === 1 ? "//" : e.slice(0, a);
  }, basename: function(e, r) {
    if (r !== void 0 && typeof r != "string") throw new TypeError('"ext" argument must be a string');
    t(e);
    var o, a = 0, c = -1, d = true;
    if (r !== void 0 && r.length > 0 && r.length <= e.length) {
      if (r.length === e.length && r === e) return "";
      var u = r.length - 1, h = -1;
      for (o = e.length - 1; o >= 0; --o) {
        var v = e.charCodeAt(o);
        if (v === 47) {
          if (!d) {
            a = o + 1;
            break;
          }
        } else h === -1 && (d = false, h = o + 1), u >= 0 && (v === r.charCodeAt(u) ? --u === -1 && (c = o) : (u = -1, c = h));
      }
      return a === c ? c = h : c === -1 && (c = e.length), e.slice(a, c);
    }
    for (o = e.length - 1; o >= 0; --o) if (e.charCodeAt(o) === 47) {
      if (!d) {
        a = o + 1;
        break;
      }
    } else c === -1 && (d = false, c = o + 1);
    return c === -1 ? "" : e.slice(a, c);
  }, extname: function(e) {
    t(e);
    for (var r = -1, o = 0, a = -1, c = true, d = 0, u = e.length - 1; u >= 0; --u) {
      var h = e.charCodeAt(u);
      if (h !== 47) a === -1 && (c = false, a = u + 1), h === 46 ? r === -1 ? r = u : d !== 1 && (d = 1) : r !== -1 && (d = -1);
      else if (!c) {
        o = u + 1;
        break;
      }
    }
    return r === -1 || a === -1 || d === 0 || d === 1 && r === a - 1 && r === o + 1 ? "" : e.slice(r, a);
  }, format: function(e) {
    if (e === null || typeof e != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
    return (function(r, o) {
      var a = o.dir || o.root, c = o.base || (o.name || "") + (o.ext || "");
      return a ? a === o.root ? a + c : a + "/" + c : c;
    })(0, e);
  }, parse: function(e) {
    t(e);
    var r = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0) return r;
    var o, a = e.charCodeAt(0), c = a === 47;
    c ? (r.root = "/", o = 1) : o = 0;
    for (var d = -1, u = 0, h = -1, v = true, l = e.length - 1, b = 0; l >= o; --l) if ((a = e.charCodeAt(l)) !== 47) h === -1 && (v = false, h = l + 1), a === 46 ? d === -1 ? d = l : b !== 1 && (b = 1) : d !== -1 && (b = -1);
    else if (!v) {
      u = l + 1;
      break;
    }
    return d === -1 || h === -1 || b === 0 || b === 1 && d === h - 1 && d === u + 1 ? h !== -1 && (r.base = r.name = u === 0 && c ? e.slice(1, h) : e.slice(u, h)) : (u === 0 && c ? (r.name = e.slice(1, d), r.base = e.slice(1, h)) : (r.name = e.slice(u, d), r.base = e.slice(u, h)), r.ext = e.slice(d, h)), u > 0 ? r.dir = e.slice(0, u - 1) : c && (r.dir = "/"), r;
  }, sep: "/", delimiter: ":", win32: null, posix: null };
  n.posix = n, s2.exports = n;
} }, L = {};
function x(s2) {
  var t = L[s2];
  if (t !== void 0) return t.exports;
  var i = L[s2] = { exports: {} };
  return ae[s2](i, i.exports, x), i.exports;
}
var J;
x.d = (s2, t) => {
  for (var i in t) x.o(t, i) && !x.o(s2, i) && Object.defineProperty(s2, i, { enumerable: true, get: t[i] });
}, x.o = (s2, t) => Object.prototype.hasOwnProperty.call(s2, t), typeof process == "object" ? J = process.platform === "win32" : typeof navigator == "object" && (J = navigator.userAgent.indexOf("Windows") >= 0);
var K = x(975), $ = K.posix || K, I = "/", B;
(function(s2) {
  s2.joinPath = function(t, ...i) {
    return t.with({ path: $.join(t.path, ...i) });
  }, s2.resolvePath = function(t, ...i) {
    let n = t.path, e = false;
    n[0] !== I && (n = I + n, e = true);
    let r = $.resolve(n, ...i);
    return e && r[0] === I && !t.authority && (r = r.substring(1)), t.with({ path: r });
  }, s2.dirname = function(t) {
    if (t.path.length === 0 || t.path === I) return t;
    let i = $.dirname(t.path);
    return i.length === 1 && i.charCodeAt(0) === 46 && (i = ""), t.with({ path: i });
  }, s2.basename = function(t) {
    return $.basename(t.path);
  }, s2.extname = function(t) {
    return $.extname(t.path);
  };
})(B || (B = {}));
function ce(s2) {
  for (; s2.length; ) {
    let t = s2.pop();
    t && t.dispose();
  }
}
var E = class {
  constructor() {
    this._isDisposed = false;
    this._disposables = [];
  }
  dispose() {
    this._isDisposed || (this._isDisposed = true, ce(this._disposables));
  }
  _register(t) {
    return this._isDisposed ? t.dispose() : this._disposables.push(t), t;
  }
  get isDisposed() {
    return this._isDisposed;
  }
};
function z(s2, t) {
  C.commands.executeCommand("vscode.openWith", s2, "default", t);
}
var P = class extends E {
  constructor(i, n, e, r) {
    super();
    this.resource = n;
    this.webviewEditor = e;
    this.binarySizeStatusBarEntry = r;
    this.previewState = 1;
    e.webview.options = { enableScripts: true, enableForms: false, localResourceRoots: [B.dirname(n), i] }, this._register(e.onDidChangeViewState(() => {
      this.updateState();
    })), this._register(e.onDidDispose(() => {
      this.previewState = 0, this.dispose();
    }));
    let o = this._register(C.workspace.createFileSystemWatcher(new C.RelativePattern(n, "*")));
    this._register(o.onDidChange((a) => {
      a.toString() === this.resource.toString() && (this.updateBinarySize(), this.render());
    })), this._register(o.onDidDelete((a) => {
      a.toString() === this.resource.toString() && this.webviewEditor.dispose();
    }));
  }
  dispose() {
    super.dispose(), this.binarySizeStatusBarEntry.hide(this);
  }
  updateBinarySize() {
    C.workspace.fs.stat(this.resource).then(({ size: i }) => {
      this._binarySize = i, this.updateState();
    });
  }
  async render() {
    if (this.previewState === 0) return;
    let i = await this.getWebviewContents();
    this.previewState !== 0 && (this.webviewEditor.webview.html = i);
  }
  updateState() {
    this.previewState !== 0 && (this.webviewEditor.active ? (this.previewState = 2, this.binarySizeStatusBarEntry.show(this, this._binarySize)) : (this.binarySizeStatusBarEntry.hide(this), this.previewState = 1));
  }
};
function m(s2) {
  return s2.toString().replace(/"/g, "&quot;");
}
function D() {
  let s2 = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 64; i++) s2 += t.charAt(Math.floor(Math.random() * t.length));
  return s2;
}
var _ = class {
  constructor(t, i) {
    this.extensionRoot = t;
    this.binarySizeStatusBarEntry = i;
  }
  static {
    this.viewType = "vscode.audioPreview";
  }
  async openCustomDocument(t) {
    return { uri: t, dispose: () => {
    } };
  }
  async resolveCustomEditor(t, i) {
    new j(this.extensionRoot, t.uri, i, this.binarySizeStatusBarEntry);
  }
}, j = class extends P {
  constructor(i, n, e, r) {
    super(i, n, e, r);
    this.extensionRoot = i;
    this._register(e.webview.onDidReceiveMessage((o) => {
      switch (o.type) {
        case "reopen-as-text": {
          z(n, e.viewColumn);
          break;
        }
      }
    })), this.updateBinarySize(), this.render(), this.updateState();
  }
  async getWebviewContents() {
    let i = Date.now().toString(), n = { src: await this.getResourcePath(this.webviewEditor, this.resource, i) }, e = D(), r = this.webviewEditor.webview.cspSource;
    return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">

	<!-- Disable pinch zooming -->
	<meta name="viewport"
		content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">

	<title>Audio Preview</title>

	<link rel="stylesheet" href="${m(this.extensionResource("media", "audioPreview.css"))}" type="text/css" media="screen" nonce="${e}">

	<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data: ${r}; media-src ${r}; script-src 'nonce-${e}'; style-src ${r} 'nonce-${e}';">
	<meta id="settings" data-settings="${m(JSON.stringify(n))}">
</head>
<body class="container loading" data-vscode-context='{ "preventDefaultContextMenuItems": true }'>
	<div class="loading-indicator"></div>
	<div class="loading-error">
		<p>${w.l10n.t("An error occurred while loading the audio file.")}</p>
		<a href="#" class="open-file-link">${w.l10n.t("Open file using VS Code's standard text/binary editor?")}</a>
	</div>
	<script src="${m(this.extensionResource("media", "audioPreview.js"))}" nonce="${e}"><\/script>
</body>
</html>`;
  }
  async getResourcePath(i, n, e) {
    return n.scheme === "git" && (await w.workspace.fs.stat(n)).size === 0 ? null : n.query ? i.webview.asWebviewUri(n).toString() : i.webview.asWebviewUri(n).with({ query: `version=${e}` }).toString();
  }
  extensionResource(...i) {
    return this.webviewEditor.webview.asWebviewUri(w.Uri.joinPath(this.extensionRoot, ...i));
  }
};
function G(s2, t) {
  let i = new _(s2.extensionUri, t);
  return w.window.registerCustomEditorProvider(_.viewType, i, { supportsMultipleEditorsPerDocument: true, webviewOptions: { retainContextWhenHidden: true } });
}
var y = S(require("vscode"));
var Y = S(require("vscode"));
var A = class extends E {
  constructor(t, i, n, e) {
    super(), this.entry = this._register(Y.window.createStatusBarItem(t, n, e)), this.entry.name = i;
  }
  showItem(t, i) {
    this._showOwner = t, this.entry.text = i, this.entry.show();
  }
  hide(t) {
    t === this._showOwner && (this.entry.hide(), this._showOwner = void 0);
  }
};
var F = class s {
  static {
    this.KB = 1024;
  }
  static {
    this.MB = s.KB * s.KB;
  }
  static {
    this.GB = s.MB * s.KB;
  }
  static {
    this.TB = s.GB * s.KB;
  }
  static formatSize(t) {
    return t < s.KB ? y.l10n.t("{0}B", t) : t < s.MB ? y.l10n.t("{0}KB", (t / s.KB).toFixed(2)) : t < s.GB ? y.l10n.t("{0}MB", (t / s.MB).toFixed(2)) : t < s.TB ? y.l10n.t("{0}GB", (t / s.GB).toFixed(2)) : y.l10n.t("{0}TB", (t / s.TB).toFixed(2));
  }
}, k = class extends A {
  constructor() {
    super("status.imagePreview.binarySize", y.l10n.t("Image Binary Size"), y.StatusBarAlignment.Right, 100);
  }
  show(t, i) {
    typeof i == "number" ? super.showItem(t, F.formatSize(i)) : this.hide(t);
  }
};
var p = S(require("vscode"));
var W = S(require("vscode"));
var O = class extends A {
  constructor() {
    super("status.imagePreview.size", W.l10n.t("Image Size"), W.StatusBarAlignment.Right, 101);
  }
  show(t, i) {
    this.showItem(t, i);
  }
};
var g = S(require("vscode"));
var H = "_imagePreview.selectZoomLevel", M = class extends A {
  constructor() {
    super("status.imagePreview.zoom", g.l10n.t("Image Zoom"), g.StatusBarAlignment.Right, 102);
    this._onDidChangeScale = this._register(new g.EventEmitter());
    this.onDidChangeScale = this._onDidChangeScale.event;
    this._register(g.commands.registerCommand(H, async () => {
      let n = [10, 5, 2, 1, 0.5, 0.2, "fit"].map((r) => ({ label: this.zoomLabel(r), scale: r })), e = await g.window.showQuickPick(n, { placeHolder: g.l10n.t("Select zoom level") });
      e && this._onDidChangeScale.fire({ scale: e.scale });
    })), this.entry.command = H;
  }
  show(i, n) {
    this.showItem(i, this.zoomLabel(n));
  }
  zoomLabel(i) {
    return i === "fit" ? g.l10n.t("Whole Image") : `${Math.round(i * 100)}%`;
  }
};
var T = class {
  constructor(t, i, n, e) {
    this.extensionRoot = t;
    this.sizeStatusBarEntry = i;
    this.binarySizeStatusBarEntry = n;
    this.zoomStatusBarEntry = e;
    this._previews = /* @__PURE__ */ new Set();
  }
  static {
    this.viewType = "imagePreview.previewEditor";
  }
  async openCustomDocument(t) {
    return { uri: t, dispose: () => {
    } };
  }
  async resolveCustomEditor(t, i) {
    let n = new V(this.extensionRoot, t.uri, i, this.sizeStatusBarEntry, this.binarySizeStatusBarEntry, this.zoomStatusBarEntry);
    this._previews.add(n), this.setActivePreview(n), i.onDidDispose(() => {
      this._previews.delete(n);
    }), i.onDidChangeViewState(() => {
      i.active ? this.setActivePreview(n) : this._activePreview === n && !i.active && this.setActivePreview(void 0);
    });
  }
  get activePreview() {
    return this._activePreview;
  }
  setActivePreview(t) {
    this._activePreview = t;
  }
}, V = class extends P {
  constructor(i, n, e, r, o, a) {
    super(i, n, e, o);
    this.extensionRoot = i;
    this.sizeStatusBarEntry = r;
    this.zoomStatusBarEntry = a;
    this.emptyPngDataUri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAEElEQVR42gEFAPr/AP///wAI/AL+Sr4t6gAAAABJRU5ErkJggg==";
    this._register(e.webview.onDidReceiveMessage((c) => {
      switch (c.type) {
        case "size": {
          this._imageSize = c.value, this.updateState();
          break;
        }
        case "zoom": {
          this._imageZoom = c.value, this.updateState();
          break;
        }
        case "reopen-as-text": {
          z(n, e.viewColumn);
          break;
        }
      }
    })), this._register(a.onDidChangeScale((c) => {
      this.previewState === 2 && this.webviewEditor.webview.postMessage({ type: "setScale", scale: c.scale });
    })), this._register(e.onDidChangeViewState(() => {
      this.webviewEditor.webview.postMessage({ type: "setActive", value: this.webviewEditor.active });
    })), this._register(e.onDidDispose(() => {
      this.previewState === 2 && (this.sizeStatusBarEntry.hide(this), this.zoomStatusBarEntry.hide(this)), this.previewState = 0;
    })), this.updateBinarySize(), this.render(), this.updateState();
  }
  dispose() {
    super.dispose(), this.sizeStatusBarEntry.hide(this), this.zoomStatusBarEntry.hide(this);
  }
  zoomIn() {
    this.previewState === 2 && this.webviewEditor.webview.postMessage({ type: "zoomIn" });
  }
  zoomOut() {
    this.previewState === 2 && this.webviewEditor.webview.postMessage({ type: "zoomOut" });
  }
  copyImage() {
    this.previewState === 2 && (this.webviewEditor.reveal(), this.webviewEditor.webview.postMessage({ type: "copyImage" }));
  }
  async saveImageAs() {
    if (this.previewState !== 0) try {
      let i = await p.workspace.fs.readFile(this.resource), n = { saveLabel: p.l10n.t("Save"), title: p.l10n.t("Save Image As") };
      if (this.resource.scheme === "file") n.defaultUri = this.resource;
      else {
        let r = p.workspace.getWorkspaceFolder(this.resource);
        if (r) {
          let o = p.workspace.asRelativePath(this.resource, false);
          if (o && !o.startsWith("/") && !/^[a-zA-Z]:/.test(o)) {
            let a = o.split("/").filter((c) => c.length > 0);
            n.defaultUri = B.joinPath(r.uri, ...a);
          }
        }
      }
      let e = await p.window.showSaveDialog(n);
      if (!e) return;
      await p.workspace.fs.writeFile(e, i);
    } catch {
      p.window.showErrorMessage(p.l10n.t("Failed to save image."));
    }
  }
  updateState() {
    super.updateState(), this.previewState !== 0 && (this.webviewEditor.active ? (this.sizeStatusBarEntry.show(this, this._imageSize || ""), this.zoomStatusBarEntry.show(this, this._imageZoom || "fit")) : (this.sizeStatusBarEntry.hide(this), this.zoomStatusBarEntry.hide(this)));
  }
  async render() {
    await super.render(), this.webviewEditor.webview.postMessage({ type: "setActive", value: this.webviewEditor.active });
  }
  async getWebviewContents() {
    let i = Date.now().toString(), n = { src: await this.getResourcePath(this.webviewEditor, this.resource, i) }, e = D(), r = this.webviewEditor.webview.cspSource;
    return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">

	<!-- Disable pinch zooming -->
	<meta name="viewport"
		content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">

	<title>Image Preview</title>

	<link rel="stylesheet" href="${m(this.extensionResource("media", "imagePreview.css"))}" type="text/css" media="screen" nonce="${e}">

	<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data: ${r}; connect-src ${r}; script-src 'nonce-${e}'; style-src ${r} 'nonce-${e}';">
	<meta id="image-preview-settings" data-settings="${m(JSON.stringify(n))}">
</head>
<body class="container image scale-to-fit loading" data-vscode-context='{ "preventDefaultContextMenuItems": true }'>
	<div class="loading-indicator"></div>
	<div class="image-load-error">
		<p>${p.l10n.t("An error occurred while loading the image.")}</p>
		<a href="#" class="open-file-link">${p.l10n.t("Open file using VS Code's standard text/binary editor?")}</a>
	</div>
	<script src="${m(this.extensionResource("media", "imagePreview.js"))}" nonce="${e}"><\/script>
</body>
</html>`;
  }
  async getResourcePath(i, n, e) {
    return n.scheme === "git" && (await p.workspace.fs.stat(n)).size === 0 ? this.emptyPngDataUri : n.query ? i.webview.asWebviewUri(n).toString() : i.webview.asWebviewUri(n).with({ query: `version=${e}` }).toString();
  }
  extensionResource(...i) {
    return this.webviewEditor.webview.asWebviewUri(p.Uri.joinPath(this.extensionRoot, ...i));
  }
};
function Q(s2, t) {
  let i = [], n = new O();
  i.push(n);
  let e = new M();
  i.push(e);
  let r = new T(s2.extensionUri, n, t, e);
  return i.push(p.window.registerCustomEditorProvider(T.viewType, r, { supportsMultipleEditorsPerDocument: true })), i.push(p.commands.registerCommand("imagePreview.zoomIn", () => {
    r.activePreview?.zoomIn();
  })), i.push(p.commands.registerCommand("imagePreview.zoomOut", () => {
    r.activePreview?.zoomOut();
  })), i.push(p.commands.registerCommand("imagePreview.copyImage", () => {
    r.activePreview?.copyImage();
  })), i.push(p.commands.registerCommand("imagePreview.saveImageAs", () => {
    r.activePreview?.saveImageAs();
  })), p.Disposable.from(...i);
}
var f = S(require("vscode"));
var q = class {
  constructor(t, i) {
    this.extensionRoot = t;
    this.binarySizeStatusBarEntry = i;
  }
  static {
    this.viewType = "vscode.videoPreview";
  }
  async openCustomDocument(t) {
    return { uri: t, dispose: () => {
    } };
  }
  async resolveCustomEditor(t, i) {
    new N(this.extensionRoot, t.uri, i, this.binarySizeStatusBarEntry);
  }
}, N = class extends P {
  constructor(i, n, e, r) {
    super(i, n, e, r);
    this.extensionRoot = i;
    this._register(e.webview.onDidReceiveMessage((o) => {
      switch (o.type) {
        case "reopen-as-text": {
          z(n, e.viewColumn);
          break;
        }
      }
    })), this.updateBinarySize(), this.render(), this.updateState();
  }
  async getWebviewContents() {
    let i = Date.now().toString(), n = f.workspace.getConfiguration("mediaPreview.video"), e = { src: await this.getResourcePath(this.webviewEditor, this.resource, i), autoplay: n.get("autoPlay"), loop: n.get("loop") }, r = D(), o = this.webviewEditor.webview.cspSource;
    return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">

	<!-- Disable pinch zooming -->
	<meta name="viewport"
		content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">

	<title>Video Preview</title>

	<link rel="stylesheet" href="${m(this.extensionResource("media", "videoPreview.css"))}" type="text/css" media="screen" nonce="${r}">

	<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data: ${o}; media-src ${o}; script-src 'nonce-${r}'; style-src ${o} 'nonce-${r}';">
	<meta id="settings" data-settings="${m(JSON.stringify(e))}">
</head>
<body class="loading" data-vscode-context='{ "preventDefaultContextMenuItems": true }'>
	<div class="loading-indicator"></div>
	<div class="loading-error">
		<p>${f.l10n.t("An error occurred while loading the video file.")}</p>
		<a href="#" class="open-file-link">${f.l10n.t("Open file using VS Code's standard text/binary editor?")}</a>
	</div>
	<script src="${m(this.extensionResource("media", "videoPreview.js"))}" nonce="${r}"><\/script>
</body>
</html>`;
  }
  async getResourcePath(i, n, e) {
    return n.scheme === "git" && (await f.workspace.fs.stat(n)).size === 0 ? null : n.query ? i.webview.asWebviewUri(n).toString() : i.webview.asWebviewUri(n).with({ query: `version=${e}` }).toString();
  }
  extensionResource(...i) {
    return this.webviewEditor.webview.asWebviewUri(f.Uri.joinPath(this.extensionRoot, ...i));
  }
};
function X(s2, t) {
  let i = new q(s2.extensionUri, t);
  return f.window.registerCustomEditorProvider(q.viewType, i, { supportsMultipleEditorsPerDocument: true, webviewOptions: { retainContextWhenHidden: true } });
}
function de(s2) {
  let t = new k();
  s2.subscriptions.push(t), s2.subscriptions.push(Q(s2, t)), s2.subscriptions.push(G(s2, t)), s2.subscriptions.push(X(s2, t));
}
