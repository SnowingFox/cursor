/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4f996222-022c-515a-a55f-55ae15555a8c");
  } catch (e2) {
  }
})();
function getNLSLanguage() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
var isPseudo = getNLSLanguage() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0, LANGUAGE_DEFAULT = "en", _isWindows = false, _isMacintosh = false, _isLinux = false, _isLinuxSnap = false, _isNative = false, _isWeb = false, _isElectron = false, _isIOS = false, _isCI = false, _isMobile = false, _locale = void 0, _language = LANGUAGE_DEFAULT, _platformLocale = LANGUAGE_DEFAULT, _translationsConfigFile = void 0, _userAgent = void 0, $globalThis = globalThis, nodeProcess = void 0;
typeof $globalThis.vscode < "u" && typeof $globalThis.vscode.process < "u" ? nodeProcess = $globalThis.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (nodeProcess = process);
var isElectronProcess = typeof nodeProcess?.versions?.electron == "string", isElectronRenderer = isElectronProcess && nodeProcess?.type === "renderer";
if (typeof nodeProcess == "object") {
  _isWindows = nodeProcess.platform === "win32", _isMacintosh = nodeProcess.platform === "darwin", _isLinux = nodeProcess.platform === "linux", _isLinuxSnap = _isLinux && !!nodeProcess.env.SNAP && !!nodeProcess.env.SNAP_REVISION, _isElectron = isElectronProcess, _isCI = !!nodeProcess.env.CI || !!nodeProcess.env.BUILD_ARTIFACTSTAGINGDIRECTORY, _locale = LANGUAGE_DEFAULT, _language = LANGUAGE_DEFAULT;
  const e = nodeProcess.env.VSCODE_NLS_CONFIG;
  if (e) try {
    const t = JSON.parse(e);
    _locale = t.userLocale, _platformLocale = t.osLocale, _language = t.resolvedLanguage || LANGUAGE_DEFAULT, _translationsConfigFile = t.languagePack?.translationsConfigFile;
  } catch {
  }
  _isNative = true;
} else typeof navigator == "object" && !isElectronRenderer ? (_userAgent = navigator.userAgent, _isWindows = _userAgent.indexOf("Windows") >= 0, _isMacintosh = _userAgent.indexOf("Macintosh") >= 0, _isIOS = (_userAgent.indexOf("Macintosh") >= 0 || _userAgent.indexOf("iPad") >= 0 || _userAgent.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, _isLinux = _userAgent.indexOf("Linux") >= 0, _isMobile = _userAgent?.indexOf("Mobi") >= 0, _isWeb = true, _language = getNLSLanguage() || LANGUAGE_DEFAULT, _locale = navigator.language.toLowerCase(), _platformLocale = _locale) : console.error("Unable to resolve platform.");
var _platform = 0;
_isMacintosh ? _platform = 1 : _isWindows ? _platform = 3 : _isLinux && (_platform = 2);
var isWindows = _isWindows, isMacintosh = _isMacintosh, isNative = _isNative, isWeb = _isWeb, isWebWorker = _isWeb && typeof $globalThis.importScripts == "function", webWorkerOrigin = isWebWorker ? $globalThis.origin : void 0, userAgent = _userAgent, language = _language, Language;
((e) => {
  function t() {
    return language;
  }
  e.value = t;
  function s() {
    return language.length === 2 ? language === "en" : language.length >= 3 ? language[0] === "e" && language[1] === "n" && language[2] === "-" : false;
  }
  e.isDefaultVariant = s;
  function r() {
    return language === "en";
  }
  e.isDefault = r;
})(Language || (Language = {}));
var setTimeout0IsFaster = typeof $globalThis.postMessage == "function" && !$globalThis.importScripts, setTimeout0 = (() => {
  if (setTimeout0IsFaster) {
    const e = [];
    $globalThis.addEventListener("message", (s) => {
      if (s.data && s.data.vscodeScheduleAsyncWork) for (let r = 0, i = e.length; r < i; r++) {
        const n = e[r];
        if (n.id === s.data.vscodeScheduleAsyncWork) {
          e.splice(r, 1), n.callback();
          return;
        }
      }
    });
    let t = 0;
    return (s) => {
      const r = ++t;
      e.push({ id: r, callback: s }), $globalThis.postMessage({ vscodeScheduleAsyncWork: r }, "*");
    };
  }
  return (e) => setTimeout(e);
})(), isChrome = !!(userAgent && userAgent.indexOf("Chrome") >= 0), isFirefox = !!(userAgent && userAgent.indexOf("Firefox") >= 0), isSafari = !!(!isChrome && userAgent && userAgent.indexOf("Safari") >= 0), isEdge = !!(userAgent && userAgent.indexOf("Edg/") >= 0), isAndroid = !!(userAgent && userAgent.indexOf("Android") >= 0), arch = nodeProcess?.arch, platformString = nodeProcess?.platform, nodeVersion = nodeProcess?.versions?.node, safeProcess, vscodeGlobal = globalThis.vscode;
if (typeof vscodeGlobal < "u" && typeof vscodeGlobal.process < "u") {
  const e = vscodeGlobal.process;
  safeProcess = { get platform() {
    return e.platform;
  }, get arch() {
    return e.arch;
  }, get env() {
    return e.env;
  }, cwd() {
    return e.cwd();
  } };
} else typeof process < "u" && typeof process?.versions?.node == "string" ? safeProcess = { get platform() {
  return process.platform;
}, get arch() {
  return process.arch;
}, get env() {
  return process.env;
}, cwd() {
  return process.env.VSCODE_CWD || process.cwd();
} } : safeProcess = { get platform() {
  return isWindows ? "win32" : isMacintosh ? "darwin" : "linux";
}, get arch() {
}, get env() {
  return {};
}, cwd() {
  return "/";
} };
var cwd = safeProcess.cwd, env = safeProcess.env, platform = safeProcess.platform, arch2 = safeProcess.arch, CHAR_UPPERCASE_A = 65, CHAR_LOWERCASE_A = 97, CHAR_UPPERCASE_Z = 90, CHAR_LOWERCASE_Z = 122, CHAR_DOT = 46, CHAR_FORWARD_SLASH = 47, CHAR_BACKWARD_SLASH = 92, CHAR_COLON = 58, CHAR_QUESTION_MARK = 63, ErrorInvalidArgType = class extends Error {
  constructor(e, t, s) {
    let r;
    typeof t == "string" && t.indexOf("not ") === 0 ? (r = "must not be", t = t.replace(/^not /, "")) : r = "must be";
    const i = e.indexOf(".") !== -1 ? "property" : "argument";
    let n = `The "${e}" ${i} ${r} of type ${t}`;
    n += `. Received type ${typeof s}`, super(n), this.code = "ERR_INVALID_ARG_TYPE";
  }
};
function validateObject(e, t) {
  if (e === null || typeof e != "object") throw new ErrorInvalidArgType(t, "Object", e);
}
function validateString(e, t) {
  if (typeof e != "string") throw new ErrorInvalidArgType(t, "string", e);
}
var platformIsWin32 = platform === "win32";
function isPathSeparator(e) {
  return e === CHAR_FORWARD_SLASH || e === CHAR_BACKWARD_SLASH;
}
function isPosixPathSeparator(e) {
  return e === CHAR_FORWARD_SLASH;
}
function isWindowsDeviceRoot(e) {
  return e >= CHAR_UPPERCASE_A && e <= CHAR_UPPERCASE_Z || e >= CHAR_LOWERCASE_A && e <= CHAR_LOWERCASE_Z;
}
function normalizeString(e, t, s, r) {
  let i = "", n = 0, a = -1, o = 0, l = 0;
  for (let h = 0; h <= e.length; ++h) {
    if (h < e.length) l = e.charCodeAt(h);
    else {
      if (r(l)) break;
      l = CHAR_FORWARD_SLASH;
    }
    if (r(l)) {
      if (!(a === h - 1 || o === 1)) if (o === 2) {
        if (i.length < 2 || n !== 2 || i.charCodeAt(i.length - 1) !== CHAR_DOT || i.charCodeAt(i.length - 2) !== CHAR_DOT) {
          if (i.length > 2) {
            const u = i.lastIndexOf(s);
            u === -1 ? (i = "", n = 0) : (i = i.slice(0, u), n = i.length - 1 - i.lastIndexOf(s)), a = h, o = 0;
            continue;
          } else if (i.length !== 0) {
            i = "", n = 0, a = h, o = 0;
            continue;
          }
        }
        t && (i += i.length > 0 ? `${s}..` : "..", n = 2);
      } else i.length > 0 ? i += `${s}${e.slice(a + 1, h)}` : i = e.slice(a + 1, h), n = h - a - 1;
      a = h, o = 0;
    } else l === CHAR_DOT && o !== -1 ? ++o : o = -1;
  }
  return i;
}
function formatExt(e) {
  return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function _format(e, t) {
  validateObject(t, "pathObject");
  const s = t.dir || t.root, r = t.base || `${t.name || ""}${formatExt(t.ext)}`;
  return s ? s === t.root ? `${s}${r}` : `${s}${e}${r}` : r;
}
var win32 = { resolve(...e) {
  let t = "", s = "", r = false;
  for (let i = e.length - 1; i >= -1; i--) {
    let n;
    if (i >= 0) {
      if (n = e[i], validateString(n, `paths[${i}]`), n.length === 0) continue;
    } else t.length === 0 ? n = cwd() : (n = env[`=${t}`] || cwd(), (n === void 0 || n.slice(0, 2).toLowerCase() !== t.toLowerCase() && n.charCodeAt(2) === CHAR_BACKWARD_SLASH) && (n = `${t}\\`));
    const a = n.length;
    let o = 0, l = "", h = false;
    const u = n.charCodeAt(0);
    if (a === 1) isPathSeparator(u) && (o = 1, h = true);
    else if (isPathSeparator(u)) if (h = true, isPathSeparator(n.charCodeAt(1))) {
      let c = 2, p = c;
      for (; c < a && !isPathSeparator(n.charCodeAt(c)); ) c++;
      if (c < a && c !== p) {
        const A = n.slice(p, c);
        for (p = c; c < a && isPathSeparator(n.charCodeAt(c)); ) c++;
        if (c < a && c !== p) {
          for (p = c; c < a && !isPathSeparator(n.charCodeAt(c)); ) c++;
          (c === a || c !== p) && (l = `\\\\${A}\\${n.slice(p, c)}`, o = c);
        }
      }
    } else o = 1;
    else isWindowsDeviceRoot(u) && n.charCodeAt(1) === CHAR_COLON && (l = n.slice(0, 2), o = 2, a > 2 && isPathSeparator(n.charCodeAt(2)) && (h = true, o = 3));
    if (l.length > 0) if (t.length > 0) {
      if (l.toLowerCase() !== t.toLowerCase()) continue;
    } else t = l;
    if (r) {
      if (t.length > 0) break;
    } else if (s = `${n.slice(o)}\\${s}`, r = h, h && t.length > 0) break;
  }
  return s = normalizeString(s, !r, "\\", isPathSeparator), r ? `${t}\\${s}` : `${t}${s}` || ".";
}, normalize(e) {
  validateString(e, "path");
  const t = e.length;
  if (t === 0) return ".";
  let s = 0, r, i = false;
  const n = e.charCodeAt(0);
  if (t === 1) return isPosixPathSeparator(n) ? "\\" : e;
  if (isPathSeparator(n)) if (i = true, isPathSeparator(e.charCodeAt(1))) {
    let o = 2, l = o;
    for (; o < t && !isPathSeparator(e.charCodeAt(o)); ) o++;
    if (o < t && o !== l) {
      const h = e.slice(l, o);
      for (l = o; o < t && isPathSeparator(e.charCodeAt(o)); ) o++;
      if (o < t && o !== l) {
        for (l = o; o < t && !isPathSeparator(e.charCodeAt(o)); ) o++;
        if (o === t) return `\\\\${h}\\${e.slice(l)}\\`;
        o !== l && (r = `\\\\${h}\\${e.slice(l, o)}`, s = o);
      }
    }
  } else s = 1;
  else isWindowsDeviceRoot(n) && e.charCodeAt(1) === CHAR_COLON && (r = e.slice(0, 2), s = 2, t > 2 && isPathSeparator(e.charCodeAt(2)) && (i = true, s = 3));
  let a = s < t ? normalizeString(e.slice(s), !i, "\\", isPathSeparator) : "";
  if (a.length === 0 && !i && (a = "."), a.length > 0 && isPathSeparator(e.charCodeAt(t - 1)) && (a += "\\"), !i && r === void 0 && e.includes(":")) {
    if (a.length >= 2 && isWindowsDeviceRoot(a.charCodeAt(0)) && a.charCodeAt(1) === CHAR_COLON) return `.\\${a}`;
    let o = e.indexOf(":");
    do
      if (o === t - 1 || isPathSeparator(e.charCodeAt(o + 1))) return `.\\${a}`;
    while ((o = e.indexOf(":", o + 1)) !== -1);
  }
  return r === void 0 ? i ? `\\${a}` : a : i ? `${r}\\${a}` : `${r}${a}`;
}, isAbsolute(e) {
  validateString(e, "path");
  const t = e.length;
  if (t === 0) return false;
  const s = e.charCodeAt(0);
  return isPathSeparator(s) || t > 2 && isWindowsDeviceRoot(s) && e.charCodeAt(1) === CHAR_COLON && isPathSeparator(e.charCodeAt(2));
}, join(...e) {
  if (e.length === 0) return ".";
  let t, s;
  for (let n = 0; n < e.length; ++n) {
    const a = e[n];
    validateString(a, "path"), a.length > 0 && (t === void 0 ? t = s = a : t += `\\${a}`);
  }
  if (t === void 0) return ".";
  let r = true, i = 0;
  if (typeof s == "string" && isPathSeparator(s.charCodeAt(0))) {
    ++i;
    const n = s.length;
    n > 1 && isPathSeparator(s.charCodeAt(1)) && (++i, n > 2 && (isPathSeparator(s.charCodeAt(2)) ? ++i : r = false));
  }
  if (r) {
    for (; i < t.length && isPathSeparator(t.charCodeAt(i)); ) i++;
    i >= 2 && (t = `\\${t.slice(i)}`);
  }
  return win32.normalize(t);
}, relative(e, t) {
  if (validateString(e, "from"), validateString(t, "to"), e === t) return "";
  const s = win32.resolve(e), r = win32.resolve(t);
  if (s === r || (e = s.toLowerCase(), t = r.toLowerCase(), e === t)) return "";
  if (s.length !== e.length || r.length !== t.length) {
    const k = s.split("\\"), I = r.split("\\");
    k[k.length - 1] === "" && k.pop(), I[I.length - 1] === "" && I.pop();
    const S = k.length, D = I.length, R = S < D ? S : D;
    let E;
    for (E = 0; E < R && k[E].toLowerCase() === I[E].toLowerCase(); E++) ;
    return E === 0 ? r : E === R ? D > R ? I.slice(E).join("\\") : S > R ? "..\\".repeat(S - 1 - E) + ".." : "" : "..\\".repeat(S - E) + I.slice(E).join("\\");
  }
  let i = 0;
  for (; i < e.length && e.charCodeAt(i) === CHAR_BACKWARD_SLASH; ) i++;
  let n = e.length;
  for (; n - 1 > i && e.charCodeAt(n - 1) === CHAR_BACKWARD_SLASH; ) n--;
  const a = n - i;
  let o = 0;
  for (; o < t.length && t.charCodeAt(o) === CHAR_BACKWARD_SLASH; ) o++;
  let l = t.length;
  for (; l - 1 > o && t.charCodeAt(l - 1) === CHAR_BACKWARD_SLASH; ) l--;
  const h = l - o, u = a < h ? a : h;
  let c = -1, p = 0;
  for (; p < u; p++) {
    const k = e.charCodeAt(i + p);
    if (k !== t.charCodeAt(o + p)) break;
    k === CHAR_BACKWARD_SLASH && (c = p);
  }
  if (p !== u) {
    if (c === -1) return r;
  } else {
    if (h > u) {
      if (t.charCodeAt(o + p) === CHAR_BACKWARD_SLASH) return r.slice(o + p + 1);
      if (p === 2) return r.slice(o + p);
    }
    a > u && (e.charCodeAt(i + p) === CHAR_BACKWARD_SLASH ? c = p : p === 2 && (c = 3)), c === -1 && (c = 0);
  }
  let A = "";
  for (p = i + c + 1; p <= n; ++p) (p === n || e.charCodeAt(p) === CHAR_BACKWARD_SLASH) && (A += A.length === 0 ? ".." : "\\..");
  return o += c, A.length > 0 ? `${A}${r.slice(o, l)}` : (r.charCodeAt(o) === CHAR_BACKWARD_SLASH && ++o, r.slice(o, l));
}, toNamespacedPath(e) {
  if (typeof e != "string" || e.length === 0) return e;
  const t = win32.resolve(e);
  if (t.length <= 2) return e;
  if (t.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
    if (t.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
      const s = t.charCodeAt(2);
      if (s !== CHAR_QUESTION_MARK && s !== CHAR_DOT) return `\\\\?\\UNC\\${t.slice(2)}`;
    }
  } else if (isWindowsDeviceRoot(t.charCodeAt(0)) && t.charCodeAt(1) === CHAR_COLON && t.charCodeAt(2) === CHAR_BACKWARD_SLASH) return `\\\\?\\${t}`;
  return t;
}, dirname(e) {
  validateString(e, "path");
  const t = e.length;
  if (t === 0) return ".";
  let s = -1, r = 0;
  const i = e.charCodeAt(0);
  if (t === 1) return isPathSeparator(i) ? e : ".";
  if (isPathSeparator(i)) {
    if (s = r = 1, isPathSeparator(e.charCodeAt(1))) {
      let o = 2, l = o;
      for (; o < t && !isPathSeparator(e.charCodeAt(o)); ) o++;
      if (o < t && o !== l) {
        for (l = o; o < t && isPathSeparator(e.charCodeAt(o)); ) o++;
        if (o < t && o !== l) {
          for (l = o; o < t && !isPathSeparator(e.charCodeAt(o)); ) o++;
          if (o === t) return e;
          o !== l && (s = r = o + 1);
        }
      }
    }
  } else isWindowsDeviceRoot(i) && e.charCodeAt(1) === CHAR_COLON && (s = t > 2 && isPathSeparator(e.charCodeAt(2)) ? 3 : 2, r = s);
  let n = -1, a = true;
  for (let o = t - 1; o >= r; --o) if (isPathSeparator(e.charCodeAt(o))) {
    if (!a) {
      n = o;
      break;
    }
  } else a = false;
  if (n === -1) {
    if (s === -1) return ".";
    n = s;
  }
  return e.slice(0, n);
}, basename(e, t) {
  t !== void 0 && validateString(t, "suffix"), validateString(e, "path");
  let s = 0, r = -1, i = true, n;
  if (e.length >= 2 && isWindowsDeviceRoot(e.charCodeAt(0)) && e.charCodeAt(1) === CHAR_COLON && (s = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
    if (t === e) return "";
    let a = t.length - 1, o = -1;
    for (n = e.length - 1; n >= s; --n) {
      const l = e.charCodeAt(n);
      if (isPathSeparator(l)) {
        if (!i) {
          s = n + 1;
          break;
        }
      } else o === -1 && (i = false, o = n + 1), a >= 0 && (l === t.charCodeAt(a) ? --a === -1 && (r = n) : (a = -1, r = o));
    }
    return s === r ? r = o : r === -1 && (r = e.length), e.slice(s, r);
  }
  for (n = e.length - 1; n >= s; --n) if (isPathSeparator(e.charCodeAt(n))) {
    if (!i) {
      s = n + 1;
      break;
    }
  } else r === -1 && (i = false, r = n + 1);
  return r === -1 ? "" : e.slice(s, r);
}, extname(e) {
  validateString(e, "path");
  let t = 0, s = -1, r = 0, i = -1, n = true, a = 0;
  e.length >= 2 && e.charCodeAt(1) === CHAR_COLON && isWindowsDeviceRoot(e.charCodeAt(0)) && (t = r = 2);
  for (let o = e.length - 1; o >= t; --o) {
    const l = e.charCodeAt(o);
    if (isPathSeparator(l)) {
      if (!n) {
        r = o + 1;
        break;
      }
      continue;
    }
    i === -1 && (n = false, i = o + 1), l === CHAR_DOT ? s === -1 ? s = o : a !== 1 && (a = 1) : s !== -1 && (a = -1);
  }
  return s === -1 || i === -1 || a === 0 || a === 1 && s === i - 1 && s === r + 1 ? "" : e.slice(s, i);
}, format: _format.bind(null, "\\"), parse(e) {
  validateString(e, "path");
  const t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (e.length === 0) return t;
  const s = e.length;
  let r = 0, i = e.charCodeAt(0);
  if (s === 1) return isPathSeparator(i) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
  if (isPathSeparator(i)) {
    if (r = 1, isPathSeparator(e.charCodeAt(1))) {
      let c = 2, p = c;
      for (; c < s && !isPathSeparator(e.charCodeAt(c)); ) c++;
      if (c < s && c !== p) {
        for (p = c; c < s && isPathSeparator(e.charCodeAt(c)); ) c++;
        if (c < s && c !== p) {
          for (p = c; c < s && !isPathSeparator(e.charCodeAt(c)); ) c++;
          c === s ? r = c : c !== p && (r = c + 1);
        }
      }
    }
  } else if (isWindowsDeviceRoot(i) && e.charCodeAt(1) === CHAR_COLON) {
    if (s <= 2) return t.root = t.dir = e, t;
    if (r = 2, isPathSeparator(e.charCodeAt(2))) {
      if (s === 3) return t.root = t.dir = e, t;
      r = 3;
    }
  }
  r > 0 && (t.root = e.slice(0, r));
  let n = -1, a = r, o = -1, l = true, h = e.length - 1, u = 0;
  for (; h >= r; --h) {
    if (i = e.charCodeAt(h), isPathSeparator(i)) {
      if (!l) {
        a = h + 1;
        break;
      }
      continue;
    }
    o === -1 && (l = false, o = h + 1), i === CHAR_DOT ? n === -1 ? n = h : u !== 1 && (u = 1) : n !== -1 && (u = -1);
  }
  return o !== -1 && (n === -1 || u === 0 || u === 1 && n === o - 1 && n === a + 1 ? t.base = t.name = e.slice(a, o) : (t.name = e.slice(a, n), t.base = e.slice(a, o), t.ext = e.slice(n, o))), a > 0 && a !== r ? t.dir = e.slice(0, a - 1) : t.dir = t.root, t;
}, sep: "\\", delimiter: ";", win32: null, posix: null }, posixCwd = (() => {
  if (platformIsWin32) {
    const e = /\\/g;
    return () => {
      const t = cwd().replace(e, "/");
      return t.slice(t.indexOf("/"));
    };
  }
  return () => cwd();
})(), posix = { resolve(...e) {
  let t = "", s = false;
  for (let r = e.length - 1; r >= 0 && !s; r--) {
    const i = e[r];
    validateString(i, `paths[${r}]`), i.length !== 0 && (t = `${i}/${t}`, s = i.charCodeAt(0) === CHAR_FORWARD_SLASH);
  }
  if (!s) {
    const r = posixCwd();
    t = `${r}/${t}`, s = r.charCodeAt(0) === CHAR_FORWARD_SLASH;
  }
  return t = normalizeString(t, !s, "/", isPosixPathSeparator), s ? `/${t}` : t.length > 0 ? t : ".";
}, normalize(e) {
  if (validateString(e, "path"), e.length === 0) return ".";
  const t = e.charCodeAt(0) === CHAR_FORWARD_SLASH, s = e.charCodeAt(e.length - 1) === CHAR_FORWARD_SLASH;
  return e = normalizeString(e, !t, "/", isPosixPathSeparator), e.length === 0 ? t ? "/" : s ? "./" : "." : (s && (e += "/"), t ? `/${e}` : e);
}, isAbsolute(e) {
  return validateString(e, "path"), e.length > 0 && e.charCodeAt(0) === CHAR_FORWARD_SLASH;
}, join(...e) {
  if (e.length === 0) return ".";
  const t = [];
  for (let s = 0; s < e.length; ++s) {
    const r = e[s];
    validateString(r, "path"), r.length > 0 && t.push(r);
  }
  return t.length === 0 ? "." : posix.normalize(t.join("/"));
}, relative(e, t) {
  if (validateString(e, "from"), validateString(t, "to"), e === t || (e = posix.resolve(e), t = posix.resolve(t), e === t)) return "";
  const s = 1, r = e.length, i = r - s, n = 1, a = t.length - n, o = i < a ? i : a;
  let l = -1, h = 0;
  for (; h < o; h++) {
    const c = e.charCodeAt(s + h);
    if (c !== t.charCodeAt(n + h)) break;
    c === CHAR_FORWARD_SLASH && (l = h);
  }
  if (h === o) if (a > o) {
    if (t.charCodeAt(n + h) === CHAR_FORWARD_SLASH) return t.slice(n + h + 1);
    if (h === 0) return t.slice(n + h);
  } else i > o && (e.charCodeAt(s + h) === CHAR_FORWARD_SLASH ? l = h : h === 0 && (l = 0));
  let u = "";
  for (h = s + l + 1; h <= r; ++h) (h === r || e.charCodeAt(h) === CHAR_FORWARD_SLASH) && (u += u.length === 0 ? ".." : "/..");
  return `${u}${t.slice(n + l)}`;
}, toNamespacedPath(e) {
  return e;
}, dirname(e) {
  if (validateString(e, "path"), e.length === 0) return ".";
  const t = e.charCodeAt(0) === CHAR_FORWARD_SLASH;
  let s = -1, r = true;
  for (let i = e.length - 1; i >= 1; --i) if (e.charCodeAt(i) === CHAR_FORWARD_SLASH) {
    if (!r) {
      s = i;
      break;
    }
  } else r = false;
  return s === -1 ? t ? "/" : "." : t && s === 1 ? "//" : e.slice(0, s);
}, basename(e, t) {
  t !== void 0 && validateString(t, "suffix"), validateString(e, "path");
  let s = 0, r = -1, i = true, n;
  if (t !== void 0 && t.length > 0 && t.length <= e.length) {
    if (t === e) return "";
    let a = t.length - 1, o = -1;
    for (n = e.length - 1; n >= 0; --n) {
      const l = e.charCodeAt(n);
      if (l === CHAR_FORWARD_SLASH) {
        if (!i) {
          s = n + 1;
          break;
        }
      } else o === -1 && (i = false, o = n + 1), a >= 0 && (l === t.charCodeAt(a) ? --a === -1 && (r = n) : (a = -1, r = o));
    }
    return s === r ? r = o : r === -1 && (r = e.length), e.slice(s, r);
  }
  for (n = e.length - 1; n >= 0; --n) if (e.charCodeAt(n) === CHAR_FORWARD_SLASH) {
    if (!i) {
      s = n + 1;
      break;
    }
  } else r === -1 && (i = false, r = n + 1);
  return r === -1 ? "" : e.slice(s, r);
}, extname(e) {
  validateString(e, "path");
  let t = -1, s = 0, r = -1, i = true, n = 0;
  for (let a = e.length - 1; a >= 0; --a) {
    const o = e[a];
    if (o === "/") {
      if (!i) {
        s = a + 1;
        break;
      }
      continue;
    }
    r === -1 && (i = false, r = a + 1), o === "." ? t === -1 ? t = a : n !== 1 && (n = 1) : t !== -1 && (n = -1);
  }
  return t === -1 || r === -1 || n === 0 || n === 1 && t === r - 1 && t === s + 1 ? "" : e.slice(t, r);
}, format: _format.bind(null, "/"), parse(e) {
  validateString(e, "path");
  const t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (e.length === 0) return t;
  const s = e.charCodeAt(0) === CHAR_FORWARD_SLASH;
  let r;
  s ? (t.root = "/", r = 1) : r = 0;
  let i = -1, n = 0, a = -1, o = true, l = e.length - 1, h = 0;
  for (; l >= r; --l) {
    const u = e.charCodeAt(l);
    if (u === CHAR_FORWARD_SLASH) {
      if (!o) {
        n = l + 1;
        break;
      }
      continue;
    }
    a === -1 && (o = false, a = l + 1), u === CHAR_DOT ? i === -1 ? i = l : h !== 1 && (h = 1) : i !== -1 && (h = -1);
  }
  if (a !== -1) {
    const u = n === 0 && s ? 1 : n;
    i === -1 || h === 0 || h === 1 && i === a - 1 && i === n + 1 ? t.base = t.name = e.slice(u, a) : (t.name = e.slice(u, i), t.base = e.slice(u, a), t.ext = e.slice(i, a));
  }
  return n > 0 ? t.dir = e.slice(0, n - 1) : s && (t.dir = "/"), t;
}, sep: "/", delimiter: ":", win32: null, posix: null };
posix.win32 = win32.win32 = win32, posix.posix = win32.posix = posix;
var normalize = platformIsWin32 ? win32.normalize : posix.normalize, isAbsolute = platformIsWin32 ? win32.isAbsolute : posix.isAbsolute, join = platformIsWin32 ? win32.join : posix.join, resolve = platformIsWin32 ? win32.resolve : posix.resolve, relative = platformIsWin32 ? win32.relative : posix.relative, dirname = platformIsWin32 ? win32.dirname : posix.dirname, basename = platformIsWin32 ? win32.basename : posix.basename, extname = platformIsWin32 ? win32.extname : posix.extname, format = platformIsWin32 ? win32.format : posix.format, parse = platformIsWin32 ? win32.parse : posix.parse, toNamespacedPath = platformIsWin32 ? win32.toNamespacedPath : posix.toNamespacedPath, sep = platformIsWin32 ? win32.sep : posix.sep, delimiter = platformIsWin32 ? win32.delimiter : posix.delimiter;
function findLastIdxMonotonous(e, t, s = 0, r = e.length) {
  let i = s, n = r;
  for (; i < n; ) {
    const a = Math.floor((i + n) / 2);
    t(e[a]) ? i = a + 1 : n = a;
  }
  return i - 1;
}
var _MonotonousArray = class e1 {
  constructor(t) {
    this._array = t, this._findLastMonotonousLastIdx = 0;
  }
  findLastMonotonous(t) {
    if (e1.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (const r of this._array) if (this._prevFindLastPredicate(r) && !t(r)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
      }
      this._prevFindLastPredicate = t;
    }
    const s = findLastIdxMonotonous(this._array, t, this._findLastMonotonousLastIdx);
    return this._findLastMonotonousLastIdx = s + 1, s === -1 ? void 0 : this._array[s];
  }
};
_MonotonousArray.assertInvariants = false;
var ErrorHandler = class {
  constructor() {
    this.listeners = [], this.unexpectedErrorHandler = function(e) {
      setTimeout(() => {
        throw e.stack ? ErrorNoTelemetry.isErrorNoTelemetry(e) ? new ErrorNoTelemetry(e.message + `

` + e.stack) : new Error(e.message + `

` + e.stack) : e;
      }, 0);
    };
  }
  addListener(e) {
    return this.listeners.push(e), () => {
      this._removeListener(e);
    };
  }
  emit(e) {
    this.listeners.forEach((t) => {
      t(e);
    });
  }
  _removeListener(e) {
    this.listeners.splice(this.listeners.indexOf(e), 1);
  }
  setUnexpectedErrorHandler(e) {
    this.unexpectedErrorHandler = e;
  }
  getUnexpectedErrorHandler() {
    return this.unexpectedErrorHandler;
  }
  onUnexpectedError(e) {
    this.unexpectedErrorHandler(e), this.emit(e);
  }
  onUnexpectedExternalError(e) {
    this.unexpectedErrorHandler(e);
  }
}, errorHandler = new ErrorHandler();
function onUnexpectedError(e) {
  isCancellationError(e) || errorHandler.onUnexpectedError(e);
}
function transformErrorForSerialization(e) {
  if (e instanceof Error) {
    const { name: t, message: s, cause: r } = e, i = e.stacktrace || e.stack;
    return { $isError: true, name: t, message: s, stack: i, noTelemetry: ErrorNoTelemetry.isErrorNoTelemetry(e), cause: r ? transformErrorForSerialization(r) : void 0, code: e.code };
  }
  return e;
}
var canceledName = "Canceled";
function isCancellationError(e) {
  return e instanceof CancellationError ? true : e instanceof Error && e.name === canceledName && e.message === canceledName;
}
var CancellationError = class extends Error {
  constructor() {
    if (super(canceledName), this.name = this.message, _cancellationErrorLoggingEnabled && typeof console < "u" && shouldLogCancellationDebugTrace()) {
      const e = new Error().stack ?? "";
      ALLOWLIST_FOR_CANCELLATION_ERROR_LOGGING.some((t) => e.includes(t)) && console.trace("[DebugCancellation] CancellationError created");
    }
  }
}, ErrorNoTelemetry = class K extends Error {
  constructor(t) {
    super(t), this.name = "CodeExpectedError";
  }
  static fromError(t) {
    if (t instanceof K) return t;
    const s = new K();
    return s.message = t.message, s.stack = t.stack, s;
  }
  static isErrorNoTelemetry(t) {
    return t.name === "CodeExpectedError";
  }
}, ALLOWLIST_FOR_CANCELLATION_ERROR_LOGGING = ["composerChatService", "composerService", "composerUtilsService", "composerAgentService", "composerCapabilities", "composerDecisionsService", "aiServiceImpl", "toolsV2Service", "toolsV2HandlerRegistryService", "agentCompatService", "mockAgentStreamController", "mockComposerStreamController", "toolFormer", "ToolFormer", "tool", "agent", "Agent", "stream", "Stream", "ComposerFullInputBox", "composerActions", "cancelAll", "abortChatAndWaitForFinish", "abortGenerationUUID"], CANCELLATION_DEBUG_TRACE_THROTTLE_MS = 5e3, _nextCancellationDebugTraceTime = 0;
function shouldLogCancellationDebugTrace() {
  const e = Date.now();
  return e < _nextCancellationDebugTraceTime ? false : (_nextCancellationDebugTraceTime = e + CANCELLATION_DEBUG_TRACE_THROTTLE_MS, true);
}
var _cancellationErrorLoggingEnabled = false;
function shuffle(e, t) {
  let s;
  if (typeof t == "number") {
    let r = t;
    s = () => {
      const i = Math.sin(r++) * 179426549;
      return i - Math.floor(i);
    };
  } else s = Math.random;
  for (let r = e.length - 1; r > 0; r -= 1) {
    const i = Math.floor(s() * (r + 1)), n = e[r];
    e[r] = e[i], e[i] = n;
  }
}
var CompareResult;
((e) => {
  function t(n) {
    return n < 0;
  }
  e.isLessThan = t;
  function s(n) {
    return n <= 0;
  }
  e.isLessThanOrEqual = s;
  function r(n) {
    return n > 0;
  }
  e.isGreaterThan = r;
  function i(n) {
    return n === 0;
  }
  e.isNeitherLessOrGreaterThan = i, e.greaterThan = 1, e.lessThan = -1, e.neitherLessOrGreaterThan = 0;
})(CompareResult || (CompareResult = {}));
function compareBy(e, t) {
  return (s, r) => t(e(s), e(r));
}
var numberComparator = (e, t) => e - t, _CallbackIterable = class G {
  constructor(t) {
    this.iterate = t;
  }
  forEach(t) {
    this.iterate((s) => (t(s), true));
  }
  toArray() {
    const t = [];
    return this.iterate((s) => (t.push(s), true)), t;
  }
  filter(t) {
    return new G((s) => this.iterate((r) => t(r) ? s(r) : true));
  }
  map(t) {
    return new G((s) => this.iterate((r) => s(t(r))));
  }
  some(t) {
    let s = false;
    return this.iterate((r) => (s = t(r), !s)), s;
  }
  findFirst(t) {
    let s;
    return this.iterate((r) => t(r) ? (s = r, false) : true), s;
  }
  findLast(t) {
    let s;
    return this.iterate((r) => (t(r) && (s = r), true)), s;
  }
  findLastMaxBy(t) {
    let s, r = true;
    return this.iterate((i) => ((r || CompareResult.isGreaterThan(t(i, s))) && (r = false, s = i), true)), s;
  }
};
_CallbackIterable.empty = new _CallbackIterable((e) => {
});
var _a, _b;
function groupBy(e, t) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const r of e) {
    const i = t(r);
    let n = s[i];
    n || (n = s[i] = []), n.push(r);
  }
  return s;
}
var SetWithKey = class {
  constructor(e, t) {
    this.toKey = t, this._map = /* @__PURE__ */ new Map(), this[_a] = "SetWithKey";
    for (const s of e) this.add(s);
  }
  get size() {
    return this._map.size;
  }
  add(e) {
    const t = this.toKey(e);
    return this._map.set(t, e), this;
  }
  delete(e) {
    return this._map.delete(this.toKey(e));
  }
  has(e) {
    return this._map.has(this.toKey(e));
  }
  *entries() {
    for (const e of this._map.values()) yield [e, e];
  }
  keys() {
    return this.values();
  }
  *values() {
    for (const e of this._map.values()) yield e;
  }
  clear() {
    this._map.clear();
  }
  forEach(e, t) {
    this._map.forEach((s) => e.call(t, s, s, this));
  }
  [(_b = Symbol.iterator, _a = Symbol.toStringTag, _b)]() {
    return this.values();
  }
};
function createSingleCallFunction(e, t) {
  const s = this;
  let r = false, i;
  return function() {
    if (r) return i;
    if (r = true, t) try {
      i = e.apply(s, arguments);
    } finally {
      t();
    }
    else i = e.apply(s, arguments);
    return i;
  };
}
var _a2, _b2, _c, ResourceMapEntry = class {
  constructor(e, t) {
    this.uri = e, this.value = t;
  }
};
function isEntries(e) {
  return Array.isArray(e);
}
var _ResourceMap = class M {
  constructor(t, s) {
    if (this[_a2] = "ResourceMap", t instanceof M) this.map = new Map(t.map), this.toKey = s ?? M.defaultToKey;
    else if (isEntries(t)) {
      this.map = /* @__PURE__ */ new Map(), this.toKey = s ?? M.defaultToKey;
      for (const [r, i] of t) this.set(r, i);
    } else this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? M.defaultToKey;
  }
  set(t, s) {
    return this.map.set(this.toKey(t), new ResourceMapEntry(t, s)), this;
  }
  get(t) {
    return this.map.get(this.toKey(t))?.value;
  }
  has(t) {
    return this.map.has(this.toKey(t));
  }
  get size() {
    return this.map.size;
  }
  clear() {
    this.map.clear();
  }
  delete(t) {
    return this.map.delete(this.toKey(t));
  }
  forEach(t, s) {
    typeof s < "u" && (t = t.bind(s));
    for (const [r, i] of this.map) t(i.value, i.uri, this);
  }
  *values() {
    for (const t of this.map.values()) yield t.value;
  }
  *keys() {
    for (const t of this.map.values()) yield t.uri;
  }
  *entries() {
    for (const t of this.map.values()) yield [t.uri, t.value];
  }
  *[(_a2 = Symbol.toStringTag, Symbol.iterator)]() {
    for (const [, t] of this.map) yield [t.uri, t.value];
  }
};
_ResourceMap.defaultToKey = (e) => e.toString();
var ResourceMap = _ResourceMap, ResourceSet = class {
  constructor(e, t) {
    this[_b2] = "ResourceSet", !e || typeof e == "function" ? this._map = new ResourceMap(e) : (this._map = new ResourceMap(t), e.forEach(this.add, this));
  }
  get size() {
    return this._map.size;
  }
  add(e) {
    return this._map.set(e, e), this;
  }
  clear() {
    this._map.clear();
  }
  delete(e) {
    return this._map.delete(e);
  }
  forEach(e, t) {
    this._map.forEach((s, r) => e.call(t, r, r, this));
  }
  has(e) {
    return this._map.has(e);
  }
  *entries() {
    for (const e of this._map.entries()) yield e;
  }
  *keys() {
    yield* this._map.keys();
  }
  *values() {
    yield* this._map.keys();
  }
  [(_b2 = Symbol.toStringTag, Symbol.iterator)]() {
    return this.keys();
  }
}, LinkedMap = class {
  constructor() {
    this[_c] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
  }
  clear() {
    this._map.clear(), this._head = void 0, this._tail = void 0, this._size = 0, this._state++;
  }
  isEmpty() {
    return !this._head && !this._tail;
  }
  get size() {
    return this._size;
  }
  get first() {
    return this._head?.value;
  }
  get last() {
    return this._tail?.value;
  }
  has(e) {
    return this._map.has(e);
  }
  get(e, t = 0) {
    const s = this._map.get(e);
    if (s) return t !== 0 && this.touch(s, t), s.value;
  }
  set(e, t, s = 0) {
    let r = this._map.get(e);
    if (r) r.value = t, s !== 0 && this.touch(r, s);
    else {
      switch (r = { key: e, value: t, next: void 0, previous: void 0 }, s) {
        case 0:
          this.addItemLast(r);
          break;
        case 1:
          this.addItemFirst(r);
          break;
        case 2:
          this.addItemLast(r);
          break;
        default:
          this.addItemLast(r);
          break;
      }
      this._map.set(e, r), this._size++;
    }
    return this;
  }
  delete(e) {
    return !!this.remove(e);
  }
  remove(e) {
    const t = this._map.get(e);
    if (t) return this._map.delete(e), this.removeItem(t), this._size--, t.value;
  }
  shift() {
    if (!this._head && !this._tail) return;
    if (!this._head || !this._tail) throw new Error("Invalid list");
    const e = this._head;
    return this._map.delete(e.key), this.removeItem(e), this._size--, e.value;
  }
  forEach(e, t) {
    const s = this._state;
    let r = this._head;
    for (; r; ) {
      if (t ? e.bind(t)(r.value, r.key, this) : e(r.value, r.key, this), this._state !== s) throw new Error("LinkedMap got modified during iteration.");
      r = r.next;
    }
  }
  keys() {
    return this.iterateLinked(this._state, this._head, (e) => e.key);
  }
  values() {
    return this.iterateLinked(this._state, this._head, (e) => e.value);
  }
  entries() {
    return this.iterateLinked(this._state, this._head, (e) => [e.key, e.value]);
  }
  *iterateLinked(e, t, s) {
    for (; ; ) {
      if (this._state !== e) throw new Error("LinkedMap got modified during iteration.");
      if (!t) return;
      const r = s(t);
      t = t.next, yield r;
    }
  }
  [(_c = Symbol.toStringTag, Symbol.iterator)]() {
    return this.entries();
  }
  trimOld(e) {
    if (e >= this.size) return;
    if (e === 0) {
      this.clear();
      return;
    }
    let t = this._head, s = this.size;
    for (; t && s > e; ) this._map.delete(t.key), t = t.next, s--;
    this._head = t, this._size = s, t && (t.previous = void 0), this._state++;
  }
  trimNew(e) {
    if (e >= this.size) return;
    if (e === 0) {
      this.clear();
      return;
    }
    let t = this._tail, s = this.size;
    for (; t && s > e; ) this._map.delete(t.key), t = t.previous, s--;
    this._tail = t, this._size = s, t && (t.next = void 0), this._state++;
  }
  addItemFirst(e) {
    if (!this._head && !this._tail) this._tail = e;
    else if (this._head) e.next = this._head, this._head.previous = e;
    else throw new Error("Invalid list");
    this._head = e, this._state++;
  }
  addItemLast(e) {
    if (!this._head && !this._tail) this._head = e;
    else if (this._tail) e.previous = this._tail, this._tail.next = e;
    else throw new Error("Invalid list");
    this._tail = e, this._state++;
  }
  removeItem(e) {
    if (e === this._head && e === this._tail) this._head = void 0, this._tail = void 0;
    else if (e === this._head) {
      if (!e.next) throw new Error("Invalid list");
      e.next.previous = void 0, this._head = e.next;
    } else if (e === this._tail) {
      if (!e.previous) throw new Error("Invalid list");
      e.previous.next = void 0, this._tail = e.previous;
    } else {
      const t = e.next, s = e.previous;
      if (!t || !s) throw new Error("Invalid list");
      t.previous = s, s.next = t;
    }
    e.next = void 0, e.previous = void 0, this._state++;
  }
  touch(e, t) {
    if (!this._head || !this._tail) throw new Error("Invalid list");
    if (!(t !== 1 && t !== 2)) {
      if (t === 1) {
        if (e === this._head) return;
        const s = e.next, r = e.previous;
        e === this._tail ? (r.next = void 0, this._tail = r) : (s.previous = r, r.next = s), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
      } else if (t === 2) {
        if (e === this._tail) return;
        const s = e.next, r = e.previous;
        e === this._head ? (s.previous = void 0, this._head = s) : (s.previous = r, r.next = s), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++;
      }
    }
  }
  toJSON() {
    const e = [];
    return this.forEach((t, s) => {
      e.push([s, t]);
    }), e;
  }
  fromJSON(e) {
    this.clear();
    for (const [t, s] of e) this.set(t, s);
  }
}, SetMap = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  add(e, t) {
    let s = this.map.get(e);
    s || (s = /* @__PURE__ */ new Set(), this.map.set(e, s)), s.add(t);
  }
  delete(e, t) {
    const s = this.map.get(e);
    s && (s.delete(t), s.size === 0 && this.map.delete(e));
  }
  forEach(e, t) {
    const s = this.map.get(e);
    s && s.forEach(t);
  }
  get(e) {
    const t = this.map.get(e);
    return t || /* @__PURE__ */ new Set();
  }
};
function isIterable(e) {
  return !!e && typeof e[Symbol.iterator] == "function";
}
var Iterable;
((e) => {
  function t(m) {
    return m && typeof m == "object" && typeof m[Symbol.iterator] == "function";
  }
  e.is = t;
  const s = Object.freeze([]);
  function r() {
    return s;
  }
  e.empty = r;
  function* i(m) {
    yield m;
  }
  e.single = i;
  function n(m) {
    return t(m) ? m : i(m);
  }
  e.wrap = n;
  function a(m) {
    return m || s;
  }
  e.from = a;
  function* o(m) {
    for (let b = m.length - 1; b >= 0; b--) yield m[b];
  }
  e.reverse = o;
  function l(m) {
    return !m || m[Symbol.iterator]().next().done === true;
  }
  e.isEmpty = l;
  function h(m) {
    return m[Symbol.iterator]().next().value;
  }
  e.first = h;
  function u(m, b) {
    let C = 0;
    for (const x of m) if (b(x, C++)) return true;
    return false;
  }
  e.some = u;
  function c(m, b) {
    for (const C of m) if (b(C)) return C;
  }
  e.find = c;
  function* p(m, b) {
    for (const C of m) b(C) && (yield C);
  }
  e.filter = p;
  function* A(m, b) {
    let C = 0;
    for (const x of m) yield b(x, C++);
  }
  e.map = A;
  function* k(m, b) {
    let C = 0;
    for (const x of m) yield* b(x, C++);
  }
  e.flatMap = k;
  function* I(...m) {
    for (const b of m) isIterable(b) ? yield* b : yield b;
  }
  e.concat = I;
  function S(m, b, C) {
    let x = C;
    for (const N of m) x = b(x, N);
    return x;
  }
  e.reduce = S;
  function D(m) {
    let b = 0;
    for (const C of m) b++;
    return b;
  }
  e.length = D;
  function* R(m, b, C = m.length) {
    for (b < -m.length && (b = 0), b < 0 && (b += m.length), C < 0 ? C += m.length : C > m.length && (C = m.length); b < C; b++) yield m[b];
  }
  e.slice = R;
  function E(m, b = Number.POSITIVE_INFINITY) {
    const C = [];
    if (b === 0) return [C, m];
    const x = m[Symbol.iterator]();
    for (let N = 0; N < b; N++) {
      const W = x.next();
      if (W.done) return [C, e.empty()];
      C.push(W.value);
    }
    return [C, { [Symbol.iterator]() {
      return x;
    } }];
  }
  e.consume = E;
  async function B(m) {
    const b = [];
    for await (const C of m) b.push(C);
    return Promise.resolve(b);
  }
  e.asyncToArray = B;
})(Iterable || (Iterable = {}));
var shouldReportLeaks = void 0, reportedLifecycleMisuses = /* @__PURE__ */ new Set(), MAX_REPORTED_LIFECYCLE_MISUSES = 50;
function reportLifecycleMisuse(e, t) {
  if (disposableTracker?.onLifecycleMisuse?.(e, t), !shouldReportLeaks) return;
  const s = `${t}\0${e.stack ?? ""}`;
  reportedLifecycleMisuses.has(s) || reportedLifecycleMisuses.size >= MAX_REPORTED_LIFECYCLE_MISUSES || (reportedLifecycleMisuses.add(s), shouldReportLeaks(e, t));
}
function reportPostDisposeWrite(e) {
  reportLifecycleMisuse(e, "disposable_post_dispose_set");
}
var TRACK_DISPOSABLES = false, disposableTracker = null, _DisposableTracker = class t1 {
  constructor() {
    this.livingDisposables = /* @__PURE__ */ new Map();
  }
  getDisposableData(t) {
    let s = this.livingDisposables.get(t);
    return s || (s = { parent: null, source: null, isSingleton: false, value: t, idx: t1.idx++ }, this.livingDisposables.set(t, s)), s;
  }
  trackDisposable(t) {
    const s = this.getDisposableData(t);
    s.source || (s.source = new Error().stack);
  }
  setParent(t, s) {
    const r = this.getDisposableData(t);
    r.parent = s;
  }
  markAsDisposed(t) {
    this.livingDisposables.delete(t);
  }
  markAsSingleton(t) {
    this.getDisposableData(t).isSingleton = true;
  }
  getRootParent(t, s) {
    const r = s.get(t);
    if (r) return r;
    const i = t.parent ? this.getRootParent(this.getDisposableData(t.parent), s) : t;
    return s.set(t, i), i;
  }
  getTrackedDisposables() {
    const t = /* @__PURE__ */ new Map();
    return [...this.livingDisposables.entries()].filter(([, r]) => r.source !== null && !this.getRootParent(r, t).isSingleton).flatMap(([r]) => r);
  }
  computeLeakingDisposables(t = 10, s) {
    let r;
    if (s) r = s;
    else {
      const l = /* @__PURE__ */ new Map(), h = [...this.livingDisposables.values()].filter((c) => c.source !== null && !this.getRootParent(c, l).isSingleton);
      if (h.length === 0) return;
      const u = new Set(h.map((c) => c.value));
      if (r = h.filter((c) => !(c.parent && u.has(c.parent))), r.length === 0) throw new Error("There are cyclic diposable chains!");
    }
    if (!r) return;
    function i(l) {
      function h(c, p) {
        for (; c.length > 0 && p.some((A) => typeof A == "string" ? A === c[0] : c[0].match(A)); ) c.shift();
      }
      const u = l.source.split(`
`).map((c) => c.trim().replace("at ", "")).filter((c) => c !== "");
      return h(u, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), u.reverse();
    }
    const n = new SetMap();
    for (const l of r) {
      const h = i(l);
      for (let u = 0; u <= h.length; u++) n.add(h.slice(0, u).join(`
`), l);
    }
    r.sort(compareBy((l) => l.idx, numberComparator));
    let a = "", o = 0;
    for (const l of r.slice(0, t)) {
      o++;
      const h = i(l), u = [];
      for (let c = 0; c < h.length; c++) {
        let p = h[c];
        p = `(shared with ${n.get(h.slice(0, c + 1).join(`
`)).size}/${r.length} leaks) at ${p}`;
        const k = n.get(h.slice(0, c).join(`
`)), I = groupBy([...k].map((S) => i(S)[c]), (S) => S);
        delete I[h[c]];
        for (const [S, D] of Object.entries(I)) u.unshift(`    - stacktraces of ${D.length} other leaks continue with ${S}`);
        u.unshift(p);
      }
      a += `


==================== Leaking disposable ${o}/${r.length}: ${l.value.constructor.name} ====================
${u.join(`
`)}
============================================================

`;
    }
    return r.length > t && (a += `


... and ${r.length - t} more leaking disposables

`), { leaks: r, details: a };
  }
};
_DisposableTracker.idx = 0;
function setDisposableTracker(e) {
  disposableTracker = e;
}
if (TRACK_DISPOSABLES) {
  const e = "__is_disposable_tracked__";
  setDisposableTracker(new class {
    trackDisposable(t) {
      const s = new Error("Potentially leaked disposable").stack;
      setTimeout(() => {
        t[e] || console.log(s);
      }, 3e3);
    }
    setParent(t, s) {
      if (t && t !== Disposable.None) try {
        t[e] = true;
      } catch {
      }
    }
    markAsDisposed(t) {
      if (t && t !== Disposable.None) try {
        t[e] = true;
      } catch {
      }
    }
    markAsSingleton(t) {
    }
  }());
}
function trackDisposable(e) {
  return disposableTracker?.trackDisposable(e), e;
}
function markAsDisposed(e) {
  disposableTracker?.markAsDisposed(e);
}
function setParentOfDisposable(e, t) {
  disposableTracker?.setParent(e, t);
}
function setParentOfDisposables(e, t) {
  if (disposableTracker) for (const s of e) disposableTracker.setParent(s, t);
}
function dispose(e) {
  if (Iterable.is(e)) {
    let t;
    for (const s of e) if (s) try {
      s.dispose();
    } catch (r) {
      (t ??= []).push(r);
    }
    if (t !== void 0) throw t.length === 1 ? t[0] : new AggregateError(t, "Encountered errors while disposing of store");
    return Array.isArray(e) ? [] : e;
  } else if (e) return e.dispose(), e;
}
function combinedDisposable(...e) {
  const t = toDisposable(() => dispose(e));
  return setParentOfDisposables(e, t), t;
}
function toDisposable(e) {
  const t = trackDisposable({ dispose: createSingleCallFunction(() => {
    markAsDisposed(t), e();
  }) });
  return t;
}
var _DisposableStore = class Q {
  constructor() {
    this._toDispose = /* @__PURE__ */ new Set(), this._isDisposed = false, trackDisposable(this);
  }
  dispose() {
    this._isDisposed || (markAsDisposed(this), this._isDisposed = true, this.clear());
  }
  [Symbol.dispose]() {
    this.dispose();
  }
  get isDisposed() {
    return this._isDisposed;
  }
  has(t) {
    return this._toDispose.has(t);
  }
  get size() {
    return this._toDispose.size;
  }
  clear() {
    if (this._toDispose.size !== 0) try {
      dispose(this._toDispose);
    } finally {
      this._toDispose.clear();
    }
  }
  add(t) {
    if (!t) return t;
    if (t === this) throw new Error("Cannot register a disposable on itself!");
    if (setParentOfDisposable(t, this), this._isDisposed) {
      const s = new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!");
      Q.DISABLE_DISPOSED_WARNING || console.warn(s.stack), reportPostDisposeWrite(s);
    } else this._toDispose.add(t);
    return t;
  }
  delete(t) {
    if (t) {
      if (t === this) throw new Error("Cannot dispose a disposable on itself!");
      this._toDispose.delete(t), t.dispose();
    }
  }
  deleteAndLeak(t) {
    t && this._toDispose.has(t) && (this._toDispose.delete(t), setParentOfDisposable(t, null));
  }
  transferOut(t) {
    if (this._isDisposed) {
      const s = new Error("Trying to transfer a disposable out of a DisposableStore that has already been disposed of. The value may already be disposed!");
      Q.DISABLE_DISPOSED_WARNING || console.warn(s.stack), reportLifecycleMisuse(s, "disposable_use_after_dispose");
    }
    return this.deleteAndLeak(t), t;
  }
};
_DisposableStore.DISABLE_DISPOSED_WARNING = false;
var DisposableStore = _DisposableStore, Disposable = class {
  constructor() {
    this._store = new DisposableStore(), trackDisposable(this), setParentOfDisposable(this._store, this);
  }
  dispose() {
    markAsDisposed(this), this._store.dispose();
  }
  _register(e) {
    if (e === this) throw new Error("Cannot register a disposable on itself!");
    return this._store.add(e);
  }
};
Disposable.None = Object.freeze({ dispose() {
} });
var _Node = class V {
  constructor(t) {
    this.element = t, this.next = V.Undefined, this.prev = V.Undefined;
  }
};
_Node.Undefined = new _Node(void 0);
var hasPerformanceNow = globalThis.performance && typeof globalThis.performance.now == "function", StopWatch = class s1 {
  static create(t) {
    return new s1(t);
  }
  constructor(t) {
    this._now = hasPerformanceNow && t === false ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
  }
  stop() {
    this._stopTime = this._now();
  }
  reset() {
    this._startTime = this._now(), this._stopTime = -1;
  }
  elapsed() {
    return this._stopTime !== -1 ? this._stopTime - this._startTime : this._now() - this._startTime;
  }
}, _enableDisposeWithListenerWarning = false, _enableSnapshotPotentialLeakWarning = false, Event;
((e) => {
  e.None = () => Disposable.None;
  function t(_) {
    if (_enableSnapshotPotentialLeakWarning) {
      const { onDidAddListener: f } = _, v = Stacktrace.create();
      let d = 0;
      _.onDidAddListener = () => {
        ++d === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), v.print()), f?.();
      };
    }
  }
  function s(_, f) {
    return A(_, () => {
    }, 0, void 0, true, void 0, f);
  }
  e.defer = s;
  function r(_) {
    return (f, v = null, d) => {
      let g = false, w;
      return w = _((y) => {
        if (!g) return w ? w.dispose() : g = true, f.call(v, y);
      }, null, d), g && w.dispose(), w;
    };
  }
  e.once = r;
  function i(_, f) {
    return e.once(e.filter(_, f));
  }
  e.onceIf = i;
  function n(_, f, v) {
    return c((d, g = null, w) => _((y) => d.call(g, f(y)), null, w), v);
  }
  e.map = n;
  function a(_, f, v) {
    return c((d, g = null, w) => _((y) => {
      f(y), d.call(g, y);
    }, null, w), v);
  }
  e.forEach = a;
  function o(_, f, v) {
    return c((d, g = null, w) => _((y) => f(y) && d.call(g, y), null, w), v);
  }
  e.filter = o;
  function l(_) {
    return _;
  }
  e.signal = l;
  function h(..._) {
    return (f, v = null, d) => {
      const g = combinedDisposable(..._.map((w) => w((y) => f.call(v, y))));
      return p(g, d);
    };
  }
  e.any = h;
  function u(_, f, v, d) {
    let g = v;
    return n(_, (w) => (g = f(g, w), g), d);
  }
  e.reduce = u;
  function c(_, f) {
    let v;
    const d = { onWillAddFirstListener() {
      v = _(g.fire, g);
    }, onDidRemoveLastListener() {
      v?.dispose();
    } };
    f || t(d);
    const g = new Emitter(d);
    return f?.add(g), g.event;
  }
  function p(_, f) {
    return f instanceof Array ? f.push(_) : f && f.add(_), _;
  }
  function A(_, f, v = 100, d = false, g = false, w, y) {
    let L, T, P, z = 0, O;
    const X = { leakWarningThreshold: w, onWillAddFirstListener() {
      L = _((c1) => {
        z++, T = f(T, c1), d && !P && (q.fire(T), T = void 0), O ??= () => {
          const h1 = T;
          T = void 0, P = void 0, (!d || z > 1) && q.fire(h1), z = 0;
        }, typeof v == "number" ? (clearTimeout(P), P = setTimeout(O, v)) : P === void 0 && (P = 0, queueMicrotask(O));
      });
    }, onWillRemoveListener() {
      g && z > 0 && O?.();
    }, onDidRemoveLastListener() {
      O = void 0, L.dispose();
    } };
    y || t(X);
    const q = new Emitter(X);
    return y?.add(q), q.event;
  }
  e.debounce = A;
  function k(_, f = 0, v) {
    return e.debounce(_, (d, g) => d ? (d.push(g), d) : [g], f, void 0, true, void 0, v);
  }
  e.accumulate = k;
  function I(_, f = (d, g) => d === g, v) {
    let d = true, g;
    return o(_, (w) => {
      const y = d || !f(w, g);
      return d = false, g = w, y;
    }, v);
  }
  e.latch = I;
  function S(_, f, v) {
    return [e.filter(_, f, v), e.filter(_, (d) => !f(d), v)];
  }
  e.split = S;
  function D(_, f = false, v = [], d) {
    let g = v.slice(), w = _((T) => {
      g ? g.push(T) : L.fire(T);
    });
    d && d.add(w);
    const y = () => {
      g?.forEach((T) => L.fire(T)), g = null;
    }, L = new Emitter({ onWillAddFirstListener() {
      w || (w = _((T) => L.fire(T)), d && d.add(w));
    }, onDidAddFirstListener() {
      g && (f ? setTimeout(y) : y());
    }, onDidRemoveLastListener() {
      w && w.dispose(), w = null;
    } });
    return d && d.add(L), L.event;
  }
  e.buffer = D;
  function R(_, f) {
    return (d, g, w) => {
      const y = f(new B());
      return _(function(L) {
        const T = y.evaluate(L);
        T !== E && d.call(g, T);
      }, void 0, w);
    };
  }
  e.chain = R;
  const E = /* @__PURE__ */ Symbol("HaltChainable");
  class B {
    constructor() {
      this.steps = [];
    }
    map(f) {
      return this.steps.push(f), this;
    }
    forEach(f) {
      return this.steps.push((v) => (f(v), v)), this;
    }
    filter(f) {
      return this.steps.push((v) => f(v) ? v : E), this;
    }
    reduce(f, v) {
      let d = v;
      return this.steps.push((g) => (d = f(d, g), d)), this;
    }
    latch(f = (v, d) => v === d) {
      let v = true, d;
      return this.steps.push((g) => {
        const w = v || !f(g, d);
        return v = false, d = g, w ? g : E;
      }), this;
    }
    evaluate(f) {
      for (const v of this.steps) if (f = v(f), f === E) break;
      return f;
    }
  }
  function m(_, f, v = (d) => d) {
    const d = (...L) => y.fire(v(...L)), g = () => _.on(f, d), w = () => _.removeListener(f, d), y = new Emitter({ onWillAddFirstListener: g, onDidRemoveLastListener: w });
    return y.event;
  }
  e.fromNodeEventEmitter = m;
  function b(_) {
    let f;
    const v = () => {
      f = _.subscribe((w) => g.fire(w));
    }, d = () => {
      f?.unsubscribe(), f = void 0;
    }, g = new Emitter({ onWillAddFirstListener: v, onDidRemoveLastListener: d });
    return g.event;
  }
  e.fromRxJS = b;
  function C(_, f, v = (d) => d) {
    const d = (...L) => y.fire(v(...L)), g = () => _.addEventListener(f, d), w = () => _.removeEventListener(f, d), y = new Emitter({ onWillAddFirstListener: g, onDidRemoveLastListener: w });
    return y.event;
  }
  e.fromDOMEventEmitter = C;
  function x(_, f) {
    return new Promise((v) => r(_)(v, null, f));
  }
  e.toPromise = x;
  function N(_) {
    const f = new Emitter();
    return _.then((v) => {
      f.fire(v);
    }, () => {
      f.fire(void 0);
    }).finally(() => {
      f.dispose();
    }), f.event;
  }
  e.fromPromise = N;
  function W(_, f) {
    return _((v) => f.fire(v));
  }
  e.forward = W;
  function n1(_, f, v) {
    return f(v), _((d) => f(d));
  }
  e.runAndSubscribe = n1;
  class o1 {
    constructor(f, v) {
      this._observable = f, this._counter = 0, this._hasChanged = false;
      const d = { onWillAddFirstListener: () => {
        f.addObserver(this), this._observable.reportChanges();
      }, onDidRemoveLastListener: () => {
        f.removeObserver(this);
      } };
      v || t(d), this.emitter = new Emitter(d), v && v.add(this.emitter);
    }
    beginUpdate(f) {
      this._counter++;
    }
    handlePossibleChange(f) {
    }
    handleChange(f, v) {
      this._hasChanged = true;
    }
    endUpdate(f) {
      this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = false, this.emitter.fire(this._observable.get())));
    }
  }
  function a1(_, f) {
    return new o1(_, f).emitter.event;
  }
  e.fromObservable = a1;
  function l1(_) {
    return (f, v, d) => {
      let g = 0, w = false;
      const y = { beginUpdate() {
        g++;
      }, endUpdate() {
        g--, g === 0 && (_.reportChanges(), w && (w = false, f.call(v)));
      }, handlePossibleChange() {
      }, handleChange() {
        w = true;
      } };
      _.addObserver(y), _.reportChanges();
      const L = { dispose() {
        _.removeObserver(y);
      } };
      return d instanceof DisposableStore ? d.add(L) : Array.isArray(d) && d.push(L), L;
    };
  }
  e.fromObservableLight = l1;
})(Event || (Event = {}));
var _EventProfiling = class J {
  constructor(t) {
    this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${J._idPool++}`, J.all.add(this);
  }
  start(t) {
    this._stopWatch = new StopWatch(), this.listenerCount = t;
  }
  stop() {
    if (this._stopWatch) {
      const t = this._stopWatch.elapsed();
      this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
    }
  }
};
_EventProfiling.all = /* @__PURE__ */ new Set(), _EventProfiling._idPool = 0;
var EventProfiling = _EventProfiling, _globalLeakWarningThreshold = -1, leakageMonitorId = 1;
function nextLeakageMonitorName() {
  return (leakageMonitorId++).toString(16).padStart(3, "0");
}
var LeakageMonitor = class {
  constructor(e, t, s = nextLeakageMonitorName()) {
    this._errorHandler = e, this.threshold = t, this.name = s, this._warnCountdown = 0;
  }
  dispose() {
    this._stacks?.clear();
  }
  check(e, t) {
    const s = this.threshold;
    if (s <= 0 || t < s) return;
    this._stacks || (this._stacks = /* @__PURE__ */ new Map());
    const r = e.value, i = this._stacks.get(r) || 0;
    if (this._stacks.set(r, i + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
      this._warnCountdown = s * 0.5;
      const [n, a] = this.getMostFrequentStack(), o = `[${this.name}] potential listener LEAK detected, having ${t} listeners already. MOST frequent listener (${a}):`;
      console.warn(o), console.warn(n);
      const l = a / t > 0.3 ? "dominated" : "popular", h = /^[0-9a-f]+$/i.test(this.name) ? void 0 : this.name, u = new ListenerLeakError(l, o, n, t, h);
      this._errorHandler(u), reportLifecycleMisuse(u, "emitter_listener_leak");
    }
    return () => {
      const n = this._stacks.get(r) || 0;
      n <= 1 ? this._stacks.delete(r) : this._stacks.set(r, n - 1);
    };
  }
  getMostFrequentStack() {
    if (!this._stacks) return;
    let e, t = 0;
    for (const [s, r] of this._stacks) (!e || t < r) && (e = [s, r], t = r);
    return e;
  }
}, Stacktrace = class r1 {
  constructor(t) {
    this.value = t;
  }
  static create() {
    const t = new Error();
    return new r1(t.stack ?? "");
  }
  print() {
    console.warn(this.value.split(`
`).slice(2).join(`
`));
  }
}, ListenerLeakError = class extends Error {
  constructor(e, t, s, r, i) {
    super(i ? `[${i}] potential listener LEAK detected, ${e}` : `potential listener LEAK detected, ${e}`), this.name = "ListenerLeakError", this.kind = e, this.listenerCount = r, this.details = t, this.stack = s;
  }
}, ListenerRefusalError = class extends ListenerLeakError {
  constructor(e, t, s, r, i) {
    super(e, t, s, r, i), this.name = "ListenerRefusalError";
  }
}, UniqueContainer = class {
  constructor(e) {
    this.value = e;
  }
}, compactionThreshold = 2, forEachListener = (e, t) => {
  if (e instanceof UniqueContainer) t(e);
  else for (let s = 0; s < e.length; s++) {
    const r = e[s];
    r && t(r);
  }
}, Emitter = class {
  constructor(e) {
    this._size = 0, this._options = e, (_globalLeakWarningThreshold > 0 || this._options?.leakWarningThreshold) && (this._leakWarningThreshold = this._options?.leakWarningThreshold ?? _globalLeakWarningThreshold, this._leakWarningName = this._options?.leakWarningName ?? nextLeakageMonitorName(), this._leakWarningErrorHandler = this._options?.onListenerError ?? onUnexpectedError), this._perfMon = this._options?._profName ? new EventProfiling(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
  }
  _getLeakageMonitor() {
    if (!(this._leakWarningThreshold === void 0 || this._leakWarningName === void 0 || this._leakWarningErrorHandler === void 0)) return this._leakageMon ??= new LeakageMonitor(this._leakWarningErrorHandler, this._leakWarningThreshold, this._leakWarningName);
  }
  dispose() {
    if (!this._disposed) {
      if (this._disposed = true, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
        if (_enableDisposeWithListenerWarning) {
          const e = this._listeners;
          queueMicrotask(() => {
            forEachListener(e, (t) => t.stack?.print());
          });
        }
        forEachListener(this._listeners, (e) => {
          e.value = void 0;
        }), this._listeners = void 0, this._size = 0;
      }
      this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose();
    }
  }
  get event() {
    return this._event ??= (e, t, s) => {
      if (this._leakWarningThreshold !== void 0 && this._size > this._leakWarningThreshold ** 2) {
        const o = this._getLeakageMonitor();
        if (o) {
          const l = `[${o.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${o.threshold})`;
          console.warn(l);
          const h = o.getMostFrequentStack() ?? ["UNKNOWN stack", -1], u = h[1] / this._size > 0.3 ? "dominated" : "popular", c = new ListenerRefusalError(u, `${l}. HINT: Stack shows most frequent listener (${h[1]}-times)`, h[0], this._size, this._options?.leakWarningName);
          return (this._options?.onListenerError || onUnexpectedError)(c), reportLifecycleMisuse(c, "emitter_listener_refusal"), Disposable.None;
        }
      }
      if (this._disposed) {
        const o = new Error("Trying to listen to an Emitter that has already been disposed of.");
        return reportLifecycleMisuse(o, "emitter_use_after_dispose"), Disposable.None;
      }
      t && (e = e.bind(t));
      const r = new UniqueContainer(e);
      let i, n;
      if (this._leakWarningThreshold !== void 0 && this._size >= Math.ceil(this._leakWarningThreshold * 0.2)) {
        const o = this._getLeakageMonitor();
        o && (r.stack = Stacktrace.create(), i = o.check(r.stack, this._size + 1));
      }
      _enableDisposeWithListenerWarning && (r.stack = n ?? Stacktrace.create()), this._listeners ? this._listeners instanceof UniqueContainer ? (this._deliveryQueue ??= new EventDeliveryQueuePrivate(), this._listeners = [this._listeners, r]) : this._listeners.push(r) : (this._options?.onWillAddFirstListener?.(this), this._listeners = r, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
      const a = toDisposable(() => {
        i?.(), this._removeListener(r);
      });
      return s instanceof DisposableStore ? s.add(a) : Array.isArray(s) && s.push(a), a;
    }, this._event;
  }
  _removeListener(e) {
    if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
    if (this._size === 1) {
      this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), this._size = 0;
      return;
    }
    const t = this._listeners, s = t.indexOf(e);
    if (s === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
    this._size--, t[s] = void 0;
    const r = this._deliveryQueue.current === this;
    if (this._size * compactionThreshold <= t.length) {
      let i = 0;
      for (let n = 0; n < t.length; n++) t[n] ? t[i++] = t[n] : r && i < this._deliveryQueue.end && (this._deliveryQueue.end--, i < this._deliveryQueue.i && this._deliveryQueue.i--);
      t.length = i;
    }
  }
  _deliver(e, t) {
    if (!e) return;
    const s = this._options?.onListenerError || onUnexpectedError;
    if (!s) {
      e.value(t);
      return;
    }
    try {
      e.value(t);
    } catch (r) {
      s(r);
    }
  }
  _deliverQueue(e) {
    const t = e.current._listeners;
    for (; e.i < e.end; ) this._deliver(t[e.i++], e.value);
    e.reset();
  }
  fire(e) {
    if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof UniqueContainer) this._deliver(this._listeners, e);
    else {
      const t = this._deliveryQueue;
      t.enqueue(this, e, this._listeners.length), this._deliverQueue(t);
    }
    this._perfMon?.stop();
  }
  hasListeners() {
    return this._size > 0;
  }
}, EventDeliveryQueuePrivate = class {
  constructor() {
    this.i = -1, this.end = 0;
  }
  enqueue(e, t, s) {
    this.i = 0, this.end = s, this.current = e, this.value = t;
  }
  reset() {
    this.i = this.end, this.current = void 0, this.value = void 0;
  }
}, shortcutEvent = Object.freeze(function(e, t) {
  const s = setTimeout(e.bind(t), 0);
  return { dispose() {
    clearTimeout(s);
  } };
}), CancellationToken;
((e) => {
  function t(s) {
    return s === e.None || s === e.Cancelled || s instanceof MutableToken ? true : !s || typeof s != "object" ? false : typeof s.isCancellationRequested == "boolean" && typeof s.onCancellationRequested == "function";
  }
  e.isCancellationToken = t, e.None = Object.freeze({ isCancellationRequested: false, onCancellationRequested: Event.None }), e.Cancelled = Object.freeze({ isCancellationRequested: true, onCancellationRequested: shortcutEvent });
})(CancellationToken || (CancellationToken = {}));
var MutableToken = class {
  constructor() {
    this._isCancelled = false, this._emitter = null;
  }
  cancel() {
    this._isCancelled || (this._isCancelled = true, this._emitter && (this._emitter.fire(void 0), this.dispose()));
  }
  get isCancellationRequested() {
    return this._isCancelled;
  }
  get onCancellationRequested() {
    return this._isCancelled ? shortcutEvent : (this._emitter || (this._emitter = new Emitter()), this._emitter.event);
  }
  dispose() {
    this._emitter && (this._emitter.dispose(), this._emitter = null);
  }
};
function identity(e) {
  return e;
}
var LRUCachedFunction = class {
  constructor(e, t) {
    this.lastCache = void 0, this.lastArgKey = void 0, typeof e == "function" ? (this._fn = e, this._computeKey = identity) : (this._fn = t, this._computeKey = e.getCacheKey);
  }
  get(e) {
    const t = this._computeKey(e);
    return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache;
  }
}, Lazy = class {
  constructor(e) {
    this.executor = e, this._didRun = false;
  }
  get hasValue() {
    return this._didRun;
  }
  get value() {
    if (!this._didRun) try {
      this._value = this.executor();
    } catch (e) {
      this._error = e;
    } finally {
      this._didRun = true;
    }
    if (this._error) throw this._error;
    return this._value;
  }
  get rawValue() {
    return this._value;
  }
};
function compare(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function compareSubstring(e, t, s = 0, r = e.length, i = 0, n = t.length) {
  for (; s < r && i < n; s++, i++) {
    const l = e.charCodeAt(s), h = t.charCodeAt(i);
    if (l < h) return -1;
    if (l > h) return 1;
  }
  const a = r - s, o = n - i;
  return a < o ? -1 : a > o ? 1 : 0;
}
function compareIgnoreCase(e, t) {
  return compareSubstringIgnoreCase(e, t, 0, e.length, 0, t.length);
}
function compareSubstringIgnoreCase(e, t, s = 0, r = e.length, i = 0, n = t.length) {
  for (; s < r && i < n; s++, i++) {
    let l = e.charCodeAt(s), h = t.charCodeAt(i);
    if (l === h) continue;
    if (l >= 128 || h >= 128) return compareSubstring(e.toLowerCase(), t.toLowerCase(), s, r, i, n);
    isLowerAsciiLetter(l) && (l -= 32), isLowerAsciiLetter(h) && (h -= 32);
    const u = l - h;
    if (u !== 0) return u;
  }
  const a = r - s, o = n - i;
  return a < o ? -1 : a > o ? 1 : 0;
}
function isLowerAsciiLetter(e) {
  return e >= 97 && e <= 122;
}
function isUpperAsciiLetter(e) {
  return e >= 65 && e <= 90;
}
var CSI_SEQUENCE = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/, OSC_SEQUENCE = /(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/, ESC_SEQUENCE = /\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/, CONTROL_SEQUENCES = new RegExp("(?:" + [CSI_SEQUENCE.source, OSC_SEQUENCE.source, ESC_SEQUENCE.source].join("|") + ")", "g"), UTF8_BOM_CHARACTER = "\uFEFF", _GraphemeBreakTree = class $ {
  static getInstance() {
    return $._INSTANCE || ($._INSTANCE = new $()), $._INSTANCE;
  }
  constructor() {
    this._data = getGraphemeBreakRawData();
  }
  getGraphemeBreakType(t) {
    if (t < 32) return t === 10 ? 3 : t === 13 ? 2 : 4;
    if (t < 127) return 0;
    const s = this._data, r = s.length / 3;
    let i = 1;
    for (; i <= r; ) if (t < s[3 * i]) i = 2 * i;
    else if (t > s[3 * i + 1]) i = 2 * i + 1;
    else return s[3 * i + 2];
    return 0;
  }
};
_GraphemeBreakTree._INSTANCE = null;
function getGraphemeBreakRawData() {
  return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
var _AmbiguousCharacters = class Y {
  constructor(t) {
    this.confusableDictionary = t;
  }
  static getInstance(t) {
    return Y.cache.get(Array.from(t).join(","));
  }
  static getLocales() {
    return Y._locales.value;
  }
  isAmbiguous(t) {
    return this.confusableDictionary.has(t);
  }
  containsAmbiguousCharacter(t) {
    for (let s = 0; s < t.length; s++) {
      const r = t.codePointAt(s);
      if (typeof r == "number" && this.isAmbiguous(r)) return true;
    }
    return false;
  }
  getPrimaryConfusable(t) {
    return this.confusableDictionary.get(t);
  }
  getConfusableCodePoints() {
    return new Set(this.confusableDictionary.keys());
  }
};
_AmbiguousCharacters.ambiguousCharacterData = new Lazy(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), _AmbiguousCharacters.cache = new LRUCachedFunction((e) => {
  const t = e.split(",");
  function s(u) {
    const c = /* @__PURE__ */ new Map();
    for (let p = 0; p < u.length; p += 2) c.set(u[p], u[p + 1]);
    return c;
  }
  function r(u, c) {
    const p = new Map(u);
    for (const [A, k] of c) p.set(A, k);
    return p;
  }
  function i(u, c) {
    if (!u) return c;
    const p = /* @__PURE__ */ new Map();
    for (const [A, k] of u) c.has(A) && p.set(A, k);
    return p;
  }
  const n = _AmbiguousCharacters.ambiguousCharacterData.value;
  let a = t.filter((u) => !u.startsWith("_") && u in n);
  a.length === 0 && (a = ["_default"]);
  let o;
  for (const u of a) {
    const c = s(n[u]);
    o = i(o, c);
  }
  const l = s(n._common), h = r(l, o);
  return new _AmbiguousCharacters(h);
}), _AmbiguousCharacters._locales = new Lazy(() => Object.keys(_AmbiguousCharacters.ambiguousCharacterData.value).filter((e) => !e.startsWith("_")));
var _InvisibleCharacters = class F {
  static getRawData() {
    return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
  }
  static getData() {
    return this._data || (this._data = new Set([...Object.values(F.getRawData())].flat())), this._data;
  }
  static isInvisibleCharacter(t) {
    return F.getData().has(t);
  }
  static containsInvisibleCharacter(t) {
    for (let s = 0; s < t.length; s++) {
      const r = t.codePointAt(s);
      if (typeof r == "number" && (F.isInvisibleCharacter(r) || r === 32)) return true;
    }
    return false;
  }
  static get codePoints() {
    return F.getData();
  }
};
_InvisibleCharacters._data = void 0;
var StringIterator = class {
  constructor() {
    this._value = "", this._pos = 0;
  }
  reset(e) {
    return this._value = e, this._pos = 0, this;
  }
  next() {
    return this._pos += 1, this;
  }
  hasNext() {
    return this._pos < this._value.length - 1;
  }
  cmp(e) {
    const t = e.charCodeAt(0), s = this._value.charCodeAt(this._pos);
    return t - s;
  }
  value() {
    return this._value[this._pos];
  }
}, ConfigKeysIterator = class {
  constructor(e = true) {
    this._caseSensitive = e;
  }
  reset(e) {
    return this._value = e, this._from = 0, this._to = 0, this.next();
  }
  hasNext() {
    return this._to < this._value.length;
  }
  next() {
    this._from = this._to;
    let e = true;
    for (; this._to < this._value.length; this._to++) if (this._value.charCodeAt(this._to) === 46) if (e) this._from++;
    else break;
    else e = false;
    return this;
  }
  cmp(e) {
    return this._caseSensitive ? compareSubstring(e, this._value, 0, e.length, this._from, this._to) : compareSubstringIgnoreCase(e, this._value, 0, e.length, this._from, this._to);
  }
  value() {
    return this._value.substring(this._from, this._to);
  }
}, PathIterator = class {
  constructor(e = true, t = true) {
    this._splitOnBackslash = e, this._caseSensitive = t;
  }
  reset(e) {
    this._from = 0, this._to = 0, this._value = e, this._valueLen = e.length;
    for (let t = e.length - 1; t >= 0; t--, this._valueLen--) {
      const s = this._value.charCodeAt(t);
      if (!(s === 47 || this._splitOnBackslash && s === 92)) break;
    }
    return this.next();
  }
  hasNext() {
    return this._to < this._valueLen;
  }
  next() {
    this._from = this._to;
    let e = true;
    for (; this._to < this._valueLen; this._to++) {
      const t = this._value.charCodeAt(this._to);
      if (t === 47 || this._splitOnBackslash && t === 92) if (e) this._from++;
      else break;
      else e = false;
    }
    return this;
  }
  cmp(e) {
    return this._caseSensitive ? compareSubstring(e, this._value, 0, e.length, this._from, this._to) : compareSubstringIgnoreCase(e, this._value, 0, e.length, this._from, this._to);
  }
  value() {
    return this._value.substring(this._from, this._to);
  }
}, UriIterator = class {
  constructor(e, t) {
    this._ignorePathCasing = e, this._ignoreQueryAndFragment = t, this._states = [], this._stateIdx = 0;
  }
  reset(e) {
    return this._value = e, this._states = [], this._value.scheme && this._states.push(1), this._value.authority && this._states.push(2), this._value.path && (this._pathIterator = new PathIterator(false, !this._ignorePathCasing(e)), this._pathIterator.reset(e.path), this._pathIterator.value() && this._states.push(3)), this._ignoreQueryAndFragment(e) || (this._value.query && this._states.push(4), this._value.fragment && this._states.push(5)), this._stateIdx = 0, this;
  }
  next() {
    return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() ? this._pathIterator.next() : this._stateIdx += 1, this;
  }
  hasNext() {
    return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() || this._stateIdx < this._states.length - 1;
  }
  cmp(e) {
    if (this._states[this._stateIdx] === 1) return compareIgnoreCase(e, this._value.scheme);
    if (this._states[this._stateIdx] === 2) return compareIgnoreCase(e, this._value.authority);
    if (this._states[this._stateIdx] === 3) return this._pathIterator.cmp(e);
    if (this._states[this._stateIdx] === 4) return compare(e, this._value.query);
    if (this._states[this._stateIdx] === 5) return compare(e, this._value.fragment);
    throw new Error();
  }
  value() {
    if (this._states[this._stateIdx] === 1) return this._value.scheme;
    if (this._states[this._stateIdx] === 2) return this._value.authority;
    if (this._states[this._stateIdx] === 3) return this._pathIterator.value();
    if (this._states[this._stateIdx] === 4) return this._value.query;
    if (this._states[this._stateIdx] === 5) return this._value.fragment;
    throw new Error();
  }
}, _Undef = class Z {
  static wrap(t) {
    return t === void 0 ? Z.Val : t;
  }
  static unwrap(t) {
    return t === Z.Val ? void 0 : t;
  }
};
_Undef.Val = /* @__PURE__ */ Symbol("undefined_placeholder");
var Undef = _Undef, TernarySearchTreeNode = class {
  constructor() {
    this.height = 1;
  }
  isEmpty() {
    return !this.left && !this.mid && !this.right && this.value === void 0;
  }
  rotateLeft() {
    const e = this.right;
    return this.right = e.left, e.left = this, this.updateHeight(), e.updateHeight(), e;
  }
  rotateRight() {
    const e = this.left;
    return this.left = e.right, e.right = this, this.updateHeight(), e.updateHeight(), e;
  }
  updateHeight() {
    this.height = 1 + Math.max(this.heightLeft, this.heightRight);
  }
  balanceFactor() {
    return this.heightRight - this.heightLeft;
  }
  get heightLeft() {
    return this.left?.height ?? 0;
  }
  get heightRight() {
    return this.right?.height ?? 0;
  }
}, TernarySearchTree = class U {
  static forUris(t = () => false, s = () => false) {
    return new U(new UriIterator(t, s));
  }
  static forPaths(t = false) {
    return new U(new PathIterator(void 0, !t));
  }
  static forStrings() {
    return new U(new StringIterator());
  }
  static forConfigKeys() {
    return new U(new ConfigKeysIterator());
  }
  constructor(t) {
    this._iter = t;
  }
  clear() {
    this._root = void 0;
  }
  fill(t, s) {
    if (s) {
      const r = s.slice(0);
      shuffle(r);
      for (const i of r) this.set(i, t);
    } else {
      const r = t.slice(0);
      shuffle(r);
      for (const i of r) this.set(i[0], i[1]);
    }
  }
  set(t, s) {
    const r = this._iter.reset(t);
    let i;
    this._root || (this._root = new TernarySearchTreeNode(), this._root.segment = r.value());
    const n = [];
    for (i = this._root; ; ) {
      const o = r.cmp(i.segment);
      if (o > 0) i.left || (i.left = new TernarySearchTreeNode(), i.left.segment = r.value()), n.push([-1, i]), i = i.left;
      else if (o < 0) i.right || (i.right = new TernarySearchTreeNode(), i.right.segment = r.value()), n.push([1, i]), i = i.right;
      else if (r.hasNext()) r.next(), i.mid || (i.mid = new TernarySearchTreeNode(), i.mid.segment = r.value()), n.push([0, i]), i = i.mid;
      else break;
    }
    const a = Undef.unwrap(i.value);
    i.value = Undef.wrap(s), i.key = t;
    for (let o = n.length - 1; o >= 0; o--) {
      const l = n[o][1];
      l.updateHeight();
      const h = l.balanceFactor();
      if (h < -1 || h > 1) {
        const u = n[o][0], c = n[o + 1][0];
        if (u === 1 && c === 1) n[o][1] = l.rotateLeft();
        else if (u === -1 && c === -1) n[o][1] = l.rotateRight();
        else if (u === 1 && c === -1) l.right = n[o + 1][1] = n[o + 1][1].rotateRight(), n[o][1] = l.rotateLeft();
        else if (u === -1 && c === 1) l.left = n[o + 1][1] = n[o + 1][1].rotateLeft(), n[o][1] = l.rotateRight();
        else throw new Error();
        if (o > 0) switch (n[o - 1][0]) {
          case -1:
            n[o - 1][1].left = n[o][1];
            break;
          case 1:
            n[o - 1][1].right = n[o][1];
            break;
          case 0:
            n[o - 1][1].mid = n[o][1];
            break;
        }
        else this._root = n[0][1];
      }
    }
    return a;
  }
  get(t) {
    return Undef.unwrap(this._getNode(t)?.value);
  }
  _getNode(t) {
    const s = this._iter.reset(t);
    let r = this._root;
    for (; r; ) {
      const i = s.cmp(r.segment);
      if (i > 0) r = r.left;
      else if (i < 0) r = r.right;
      else if (s.hasNext()) s.next(), r = r.mid;
      else break;
    }
    return r;
  }
  has(t) {
    const s = this._getNode(t);
    return !(s?.value === void 0 && s?.mid === void 0);
  }
  delete(t) {
    return this._delete(t, false);
  }
  deleteSuperstr(t) {
    return this._delete(t, true);
  }
  _delete(t, s) {
    const r = this._iter.reset(t), i = [];
    let n = this._root;
    for (; n; ) {
      const a = r.cmp(n.segment);
      if (a > 0) i.push([-1, n]), n = n.left;
      else if (a < 0) i.push([1, n]), n = n.right;
      else if (r.hasNext()) r.next(), i.push([0, n]), n = n.mid;
      else break;
    }
    if (n) {
      if (s ? (n.left = void 0, n.mid = void 0, n.right = void 0, n.height = 1) : (n.key = void 0, n.value = void 0), !n.mid && !n.value) if (n.left && n.right) {
        const a = this._min(n.right);
        if (a.key) {
          const { key: o, value: l, segment: h } = a;
          this._delete(a.key, false), n.key = o, n.value = l, n.segment = h;
        }
      } else {
        const a = n.left ?? n.right;
        if (i.length > 0) {
          const [o, l] = i[i.length - 1];
          switch (o) {
            case -1:
              l.left = a;
              break;
            case 0:
              l.mid = a;
              break;
            case 1:
              l.right = a;
              break;
          }
        } else this._root = a;
      }
      for (let a = i.length - 1; a >= 0; a--) {
        const o = i[a][1];
        o.updateHeight();
        const l = o.balanceFactor();
        if (l > 1 ? (o.right.balanceFactor() >= 0 || (o.right = o.right.rotateRight()), i[a][1] = o.rotateLeft()) : l < -1 && (o.left.balanceFactor() <= 0 || (o.left = o.left.rotateLeft()), i[a][1] = o.rotateRight()), a > 0) switch (i[a - 1][0]) {
          case -1:
            i[a - 1][1].left = i[a][1];
            break;
          case 1:
            i[a - 1][1].right = i[a][1];
            break;
          case 0:
            i[a - 1][1].mid = i[a][1];
            break;
        }
        else this._root = i[0][1];
      }
    }
  }
  _min(t) {
    for (; t.left; ) t = t.left;
    return t;
  }
  findSubstr(t) {
    const s = this._iter.reset(t);
    let r = this._root, i;
    for (; r; ) {
      const n = s.cmp(r.segment);
      if (n > 0) r = r.left;
      else if (n < 0) r = r.right;
      else if (s.hasNext()) s.next(), i = Undef.unwrap(r.value) || i, r = r.mid;
      else break;
    }
    return r && Undef.unwrap(r.value) || i;
  }
  findSuperstr(t) {
    return this._findSuperstrOrElement(t, false);
  }
  _findSuperstrOrElement(t, s) {
    const r = this._iter.reset(t);
    let i = this._root;
    for (; i; ) {
      const n = r.cmp(i.segment);
      if (n > 0) i = i.left;
      else if (n < 0) i = i.right;
      else if (r.hasNext()) r.next(), i = i.mid;
      else return i.mid ? this._entries(i.mid) : s ? Undef.unwrap(i.value) : void 0;
    }
  }
  hasElementOrSubtree(t) {
    return this._findSuperstrOrElement(t, true) !== void 0;
  }
  forEach(t) {
    for (const [s, r] of this) t(r, s);
  }
  *[Symbol.iterator]() {
    yield* this._entries(this._root);
  }
  _entries(t) {
    const s = [];
    return this._dfsEntries(t, s), s[Symbol.iterator]();
  }
  _dfsEntries(t, s) {
    t && (t.left && this._dfsEntries(t.left, s), t.value !== void 0 && s.push([t.key, Undef.unwrap(t.value)]), t.mid && this._dfsEntries(t.mid, s), t.right && this._dfsEntries(t.right, s));
  }
  _isBalanced() {
    const t = (s) => {
      if (!s) return true;
      const r = s.balanceFactor();
      return r < -1 || r > 1 ? false : t(s.left) && t(s.right);
    };
    return t(this._root);
  }
}, Schemas;
((e) => {
  e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.git = "git", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebook = "vscode-notebook", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.terminal = "terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatSesssion = "vscode-chat-editor", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.aiChat = "cursor.aichat", e.contextObject = "cursor.context-object", e.composer = "cursor.composer", e.aiSettings = "cursor.aisettings", e.tinderDiffEditor = "cursor.tinderdiffeditor", e.vscodeFileResource = "vscode-file", e.cursorRpcDevtools = "cursor-rpc-devtools", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.cursorDev = "cursor-dev-utils", e.outputChannel = "output", e.accessibleView = "accessible-view", e.backgroundComposer = "cursor.backgroundcomposer", e.cursorAgent = "cursor.agent", e.personalEnvironmentJson = "cursor.personalenvironmentjson", e.bugbot = "cursor.bugbot", e.backgroundComposerPeek = "background-composer-peek", e.cursorPlan = "cursor-plan", e.cursorWorker = "cursor-worker", e.reviewChanges = "cursor.reviewchanges", e.cursorBlame = "cursor.blame", e.cursorFileBlame = "cursor.fileblame";
})(Schemas || (Schemas = {}));
var connectionTokenQueryName = "tkn", RemoteAuthoritiesImpl = class {
  constructor() {
    this._hosts = /* @__PURE__ */ Object.create(null), this._ports = /* @__PURE__ */ Object.create(null), this._connectionTokens = /* @__PURE__ */ Object.create(null), this._preferredWebSchema = "http", this._delegate = null, this._serverRootPath = "/";
  }
  setPreferredWebSchema(e) {
    this._preferredWebSchema = e;
  }
  setDelegate(e) {
    this._delegate = e;
  }
  setServerRootPath(e, t) {
    this._serverRootPath = posix.join(t ?? "/", getServerProductSegment(e));
  }
  getServerRootPath() {
    return this._serverRootPath;
  }
  get _remoteResourcesPath() {
    return posix.join(this._serverRootPath, Schemas.vscodeRemoteResource);
  }
  set(e, t, s) {
    this._hosts[e] = t, this._ports[e] = s;
  }
  setConnectionToken(e, t) {
    this._connectionTokens[e] = t;
  }
  getPreferredWebSchema() {
    return this._preferredWebSchema;
  }
  rewrite(e) {
    if (this._delegate) try {
      return this._delegate(e);
    } catch (a) {
      return onUnexpectedError(a), e;
    }
    const t = e.authority;
    let s = this._hosts[t];
    s && s.indexOf(":") !== -1 && s.indexOf("[") === -1 && (s = `[${s}]`);
    const r = this._ports[t], i = this._connectionTokens[t];
    let n = `path=${encodeURIComponent(e.path)}`;
    return typeof i == "string" && (n += `&${connectionTokenQueryName}=${encodeURIComponent(i)}`), URI.from({ scheme: isWeb ? this._preferredWebSchema : Schemas.vscodeRemoteResource, authority: `${s}:${r}`, path: this._remoteResourcesPath, query: n });
  }
}, RemoteAuthorities = new RemoteAuthoritiesImpl();
function getServerProductSegment(e) {
  return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
var VSCODE_AUTHORITY = "vscode-app", _FileAccessImpl = class j {
  asBrowserUri(t) {
    const s = this.toUri(t);
    return this.uriToBrowserUri(s);
  }
  uriToBrowserUri(t) {
    return t.scheme === Schemas.vscodeRemote ? RemoteAuthorities.rewrite(t) : t.scheme === Schemas.file && (isNative || webWorkerOrigin === `${Schemas.vscodeFileResource}://${j.FALLBACK_AUTHORITY}`) ? t.with({ scheme: Schemas.vscodeFileResource, authority: t.authority || j.FALLBACK_AUTHORITY, query: null, fragment: null }) : t;
  }
  asFileUri(t) {
    const s = this.toUri(t);
    return this.uriToFileUri(s);
  }
  uriToFileUri(t) {
    return t.scheme === Schemas.vscodeFileResource ? t.with({ scheme: Schemas.file, authority: t.authority !== j.FALLBACK_AUTHORITY ? t.authority : null, query: null, fragment: null }) : t;
  }
  toUri(t) {
    if (URI.isUri(t)) return t;
    if (globalThis._VSCODE_FILE_ROOT) {
      const s = globalThis._VSCODE_FILE_ROOT;
      if (/^\w[\w\d+.-]*:\/\//.test(s)) return URI.joinPath(URI.parse(s, true), t);
      const r = join(s, t);
      return URI.file(r);
    }
    throw new Error("Cannot determine URI for module id!");
  }
};
_FileAccessImpl.FALLBACK_AUTHORITY = VSCODE_AUTHORITY;
var FileAccessImpl = _FileAccessImpl, FileAccess = new FileAccessImpl(), CacheControlheaders = Object.freeze({ "Cache-Control": "no-cache, no-store" }), DocumentPolicyheaders = Object.freeze({ "Document-Policy": "include-js-call-stacks-in-crash-reports, js-profiling" }), COI;
((e) => {
  const t = /* @__PURE__ */ new Map([["1", { "Cross-Origin-Opener-Policy": "same-origin" }], ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }], ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }]]);
  e.CoopAndCoep = Object.freeze(t.get("3"));
  const s = "vscode-coi";
  function r(n) {
    let a;
    typeof n == "string" ? a = new URL(n).searchParams : n instanceof URL ? a = n.searchParams : URI.isUri(n) && (a = new URL(n.toString(true)).searchParams);
    const o = a?.get(s);
    if (o) return t.get(o);
  }
  e.getHeadersFromQuery = r;
  function i(n, a, o) {
    if (!globalThis.crossOriginIsolated) return;
    const l = a && o ? "3" : o ? "2" : "1";
    n instanceof URLSearchParams ? n.set(s, l) : n[s] = l;
  }
  e.addSearchParam = i;
})(COI || (COI = {}));
var indexOfTable = new Lazy(() => new Uint8Array(256)), MAX_POOLED_ENCODE_SCRATCH_BYTES = 512 * 1024, _schemePattern = /^\w[\w\d+.-]*$/, _singleSlashStart = /^\//, _doubleSlashStart = /^\/\//;
function _validateUri(e, t) {
  if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
  if (e.scheme && !_schemePattern.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
  if (e.path) {
    if (e.authority) {
      if (!_singleSlashStart.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
    } else if (_doubleSlashStart.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
  }
}
function _schemeFix(e, t) {
  return !e && !t ? "file" : e;
}
function _referenceResolution(e, t) {
  switch (e) {
    case "https":
    case "http":
    case "file":
      t ? t[0] !== _slash && (t = _slash + t) : t = _slash;
      break;
  }
  return t;
}
var _empty = "", _slash = "/", _regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, URI = class H {
  static isUri(t) {
    return t instanceof H ? true : t ? typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function" : false;
  }
  constructor(t, s, r, i, n, a = false) {
    typeof t == "object" ? (this.scheme = t.scheme || _empty, this.authority = t.authority || _empty, this.path = t.path || _empty, this.query = t.query || _empty, this.fragment = t.fragment || _empty) : (this.scheme = _schemeFix(t, a), this.authority = s || _empty, this.path = _referenceResolution(this.scheme, r || _empty), this.query = i || _empty, this.fragment = n || _empty, _validateUri(this, a));
  }
  get fsPath() {
    return uriToFsPath(this, false);
  }
  with(t) {
    if (!t) return this;
    let { scheme: s, authority: r, path: i, query: n, fragment: a } = t;
    return s === void 0 ? s = this.scheme : s === null && (s = _empty), r === void 0 ? r = this.authority : r === null && (r = _empty), i === void 0 ? i = this.path : i === null && (i = _empty), n === void 0 ? n = this.query : n === null && (n = _empty), a === void 0 ? a = this.fragment : a === null && (a = _empty), s === this.scheme && r === this.authority && i === this.path && n === this.query && a === this.fragment ? this : new Uri(s, r, i, n, a);
  }
  static parse(t, s = false) {
    const r = _regexp.exec(t);
    return r ? new Uri(r[2] || _empty, percentDecode(r[4] || _empty), percentDecode(r[5] || _empty), percentDecode(r[7] || _empty), percentDecode(r[9] || _empty), s) : new Uri(_empty, _empty, _empty, _empty, _empty);
  }
  static file(t) {
    let s = _empty;
    if (isWindows && (t = t.replace(/\\/g, _slash)), t[0] === _slash && t[1] === _slash) {
      const r = t.indexOf(_slash, 2);
      r === -1 ? (s = t.substring(2), t = _slash) : (s = t.substring(2, r), t = t.substring(r) || _slash);
    }
    return new Uri("file", s, t, _empty, _empty);
  }
  static from(t, s) {
    return new Uri(t.scheme, t.authority, t.path, t.query, t.fragment, s);
  }
  static joinPath(t, ...s) {
    if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
    let r;
    return isWindows && t.scheme === "file" ? r = H.file(win32.join(uriToFsPath(t, true), ...s)).path : r = posix.join(t.path, ...s), t.with({ path: r });
  }
  toString(t = false) {
    return _asFormatted(this, t);
  }
  toJSON() {
    return this;
  }
  static revive(t) {
    if (t) {
      if (t instanceof H) return t;
      {
        const s = new Uri(t);
        return s._formatted = t.external ?? null, s._fsPath = t._sep === _pathSepMarker ? t.fsPath ?? null : null, s;
      }
    } else return t;
  }
  [/* @__PURE__ */ Symbol.for("debug.description")]() {
    return `URI(${this.toString()})`;
  }
}, _pathSepMarker = isWindows ? 1 : void 0, Uri = class extends URI {
  constructor() {
    super(...arguments), this._formatted = null, this._fsPath = null;
  }
  get fsPath() {
    return this._fsPath || (this._fsPath = uriToFsPath(this, false)), this._fsPath;
  }
  toString(e = false) {
    return e ? _asFormatted(this, true) : (this._formatted || (this._formatted = _asFormatted(this, false)), this._formatted);
  }
  toJSON() {
    const e = { $mid: 1 };
    return this._fsPath && (e.fsPath = this._fsPath, e._sep = _pathSepMarker), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
  }
}, encodeTable = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
function encodeURIComponentFast(e, t, s) {
  let r, i = -1;
  for (let n = 0; n < e.length; n++) {
    const a = e.charCodeAt(n);
    if (a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57 || a === 45 || a === 46 || a === 95 || a === 126 || t && a === 47 || s && a === 91 || s && a === 93 || s && a === 58) i !== -1 && (r += encodeURIComponent(e.substring(i, n)), i = -1), r !== void 0 && (r += e.charAt(n));
    else {
      r === void 0 && (r = e.substr(0, n));
      const o = encodeTable[a];
      o !== void 0 ? (i !== -1 && (r += encodeURIComponent(e.substring(i, n)), i = -1), r += o) : i === -1 && (i = n);
    }
  }
  return i !== -1 && (r += encodeURIComponent(e.substring(i))), r !== void 0 ? r : e;
}
function encodeURIComponentMinimal(e) {
  let t;
  for (let s = 0; s < e.length; s++) {
    const r = e.charCodeAt(s);
    r === 35 || r === 63 ? (t === void 0 && (t = e.substr(0, s)), t += encodeTable[r]) : t !== void 0 && (t += e[s]);
  }
  return t !== void 0 ? t : e;
}
function uriToFsPath(e, t) {
  let s;
  return e.authority && e.path.length > 1 && e.scheme === "file" ? s = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? s = e.path.substr(1) : s = e.path[1].toLowerCase() + e.path.substr(2) : s = e.path, isWindows && (s = s.replace(/\//g, "\\")), s;
}
function _asFormatted(e, t) {
  const s = t ? encodeURIComponentMinimal : encodeURIComponentFast;
  let r = "", { scheme: i, authority: n, path: a, query: o, fragment: l } = e;
  if (i && (r += i, r += ":"), (n || i === "file") && (r += _slash, r += _slash), n) {
    let h = n.indexOf("@");
    if (h !== -1) {
      const u = n.substr(0, h);
      n = n.substr(h + 1), h = u.lastIndexOf(":"), h === -1 ? r += s(u, false, false) : (r += s(u.substr(0, h), false, false), r += ":", r += s(u.substr(h + 1), false, true)), r += "@";
    }
    n = n.toLowerCase(), h = n.lastIndexOf(":"), h === -1 ? r += s(n, false, true) : (r += s(n.substr(0, h), false, true), r += n.substr(h));
  }
  if (a) {
    if (a.length >= 3 && a.charCodeAt(0) === 47 && a.charCodeAt(2) === 58) {
      const h = a.charCodeAt(1);
      h >= 65 && h <= 90 && (a = `/${String.fromCharCode(h + 32)}:${a.substr(3)}`);
    } else if (a.length >= 2 && a.charCodeAt(1) === 58) {
      const h = a.charCodeAt(0);
      h >= 65 && h <= 90 && (a = `${String.fromCharCode(h + 32)}:${a.substr(2)}`);
    }
    r += s(a, true, false);
  }
  return o && (r += "?", r += s(o, false, false)), l && (r += "#", r += t ? l : encodeURIComponentFast(l, false, false)), r;
}
function decodeURIComponentGraceful(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.length > 3 ? e.substr(0, 3) + decodeURIComponentGraceful(e.substr(3)) : e;
  }
}
var _rEncodedAsHex = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function percentDecode(e) {
  return e.match(_rEncodedAsHex) ? e.replace(_rEncodedAsHex, (t) => decodeURIComponentGraceful(t)) : e;
}
var _util;
((e) => {
  e.serviceIds = /* @__PURE__ */ new Map(), e.DI_TARGET = "$di$target", e.DI_DEPENDENCIES = "$di$dependencies";
  function t(s) {
    return s[e.DI_DEPENDENCIES] || [];
  }
  e.getServiceDependencies = t;
})(_util || (_util = {}));
var IInstantiationService = createDecorator("instantiationService");
function storeServiceDependency(e, t, s) {
  t[_util.DI_TARGET] === t ? t[_util.DI_DEPENDENCIES].push({ id: e, index: s }) : (t[_util.DI_DEPENDENCIES] = [{ id: e, index: s }], t[_util.DI_TARGET] = t);
}
function createDecorator(e) {
  if (_util.serviceIds.has(e)) return _util.serviceIds.get(e);
  const t = function(s, r, i) {
    if (arguments.length !== 3) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
    storeServiceDependency(t, s, i);
  };
  return t.toString = () => e, _util.serviceIds.set(e, t), t;
}
var IV8InspectProfilingService = createDecorator("IV8InspectProfilingService"), Utils;
((e) => {
  function t(i) {
    return !!(i.samples && i.timeDeltas);
  }
  e.isValidProfile = t;
  function s(i, n = "noAbsolutePaths") {
    for (const a of i.nodes) a.callFrame && a.callFrame.url && (isAbsolute(a.callFrame.url) || /^\w[\w\d+.-]*:\/\/\/?/.test(a.callFrame.url)) && (a.callFrame.url = join(n, basename(a.callFrame.url)));
    return i;
  }
  e.rewriteAbsolutePaths = s;
  function r(i, n = "noAbsolutePaths") {
    const a = (o) => {
      o.callFrame.url && (isAbsolute(o.callFrame.url) || /^\w[\w\d+.-]*:\/\/\/?/.test(o.callFrame.url)) && (o.callFrame.url = join(n, basename(o.callFrame.url)));
      for (const l of o.children) a(l);
    };
    return a(i.head), i;
  }
  e.rewriteAbsolutePathsInHeapProfile = r;
})(Utils || (Utils = {}));
var computeAggregateTime = (e, t) => {
  const s = t[e];
  if (s.aggregateTime) return s.aggregateTime;
  let r = s.selfTime;
  for (const i of s.children) r += computeAggregateTime(i, t);
  return s.aggregateTime = r;
}, ensureSourceLocations = (e) => {
  let t = 0;
  const s = /* @__PURE__ */ new Map(), r = (i) => {
    const n = [i.functionName, i.url, i.scriptId, i.lineNumber, i.columnNumber].join(":"), a = s.get(n);
    if (a) return a.id;
    const o = t++;
    return s.set(n, { id: o, callFrame: i, location: { lineNumber: i.lineNumber + 1, columnNumber: i.columnNumber + 1 } }), o;
  };
  for (const i of e.nodes) i.locationId = r(i.callFrame), i.positionTicks = i.positionTicks?.map((n) => ({ ...n, startLocationId: r({ ...i.callFrame, lineNumber: n.line - 1, columnNumber: 0 }), endLocationId: r({ ...i.callFrame, lineNumber: n.line, columnNumber: 0 }) }));
  return [...s.values()].sort((i, n) => i.id - n.id).map((i) => ({ locations: [i.location], callFrame: i.callFrame }));
}, buildModel = (e) => {
  if (!e.timeDeltas || !e.samples) return { nodes: [], locations: [], samples: e.samples || [], timeDeltas: e.timeDeltas || [], duration: e.endTime - e.startTime };
  const { samples: t, timeDeltas: s } = e, i = ensureSourceLocations(e).map((u, c) => {
    const p = u.locations[0];
    return { id: c, selfTime: 0, aggregateTime: 0, ticks: 0, callFrame: u.callFrame, src: p };
  }), n = /* @__PURE__ */ new Map(), a = (u) => {
    let c = n.get(u);
    return c === void 0 && (c = n.size, n.set(u, c)), c;
  }, o = new Array(e.nodes.length);
  for (let u = 0; u < e.nodes.length; u++) {
    const c = e.nodes[u], p = a(c.id);
    o[p] = { id: p, selfTime: 0, aggregateTime: 0, locationId: c.locationId, children: c.children?.map(a) || [] };
    for (const A of c.positionTicks || []) A.startLocationId && (i[A.startLocationId].ticks += A.ticks);
  }
  for (const u of o) for (const c of u.children) o[c].parent = u.id;
  const l = e.endTime - e.startTime;
  let h = l - s[0];
  for (let u = 0; u < s.length - 1; u++) {
    const c = s[u + 1];
    o[a(t[u])].selfTime += c, h -= c;
  }
  o.length && (o[a(t[s.length - 1])].selfTime += h, s.push(h));
  for (let u = 0; u < o.length; u++) {
    const c = o[u], p = i[c.locationId];
    p.aggregateTime += computeAggregateTime(u, o), p.selfTime += c.selfTime;
  }
  return { nodes: o, locations: i, samples: t.map(a), timeDeltas: s, duration: l };
}, BottomUpNode = class i1 {
  constructor(t, s) {
    this.location = t, this.parent = s, this.children = {}, this.aggregateTime = 0, this.selfTime = 0, this.ticks = 0, this.childrenSize = 0;
  }
  static root() {
    return new i1({ id: -1, selfTime: 0, aggregateTime: 0, ticks: 0, callFrame: { functionName: "(root)", lineNumber: -1, columnNumber: -1, scriptId: "0", url: "" } });
  }
  get id() {
    return this.location.id;
  }
  get callFrame() {
    return this.location.callFrame;
  }
  get src() {
    return this.location.src;
  }
  addNode(t) {
    this.selfTime += t.selfTime, this.aggregateTime += t.aggregateTime;
  }
}, processNode = (e, t, s, r = t) => {
  let i = e.children[t.locationId];
  i || (i = new BottomUpNode(s.locations[t.locationId], e), e.childrenSize++, e.children[t.locationId] = i), i.addNode(r), t.parent && processNode(i, s.nodes[t.parent], s, r);
};
function create() {
  return new ProfileAnalysisWorker();
}
var ProfileAnalysisWorker = class {
  $analyseBottomUp(e) {
    if (!Utils.isValidProfile(e)) return { kind: 1, samples: [] };
    const t = buildModel(e), s = bottomUp(t, 5).filter((r) => !r.isSpecial);
    return s.length === 0 || s[0].percentage < 10 ? { kind: 1, samples: [] } : { kind: 2, samples: s };
  }
  $analyseByUrlCategory(e, t) {
    const s = TernarySearchTree.forUris();
    s.fill(t);
    const r = buildModel(e), i = /* @__PURE__ */ new Map();
    for (const a of r.nodes) {
      const o = r.locations[a.locationId];
      let l;
      try {
        l = s.findSubstr(URI.parse(o.callFrame.url));
      } catch {
      }
      l || (l = printCallFrameShort(o.callFrame));
      const u = (i.get(l) ?? 0) + a.selfTime;
      i.set(l, u);
    }
    const n = [];
    for (const [a, o] of i) n.push([a, o]);
    return n;
  }
};
function isSpecial(e) {
  return e.functionName.startsWith("(") && e.functionName.endsWith(")");
}
function printCallFrameShort(e) {
  let t = e.functionName || "(anonymous)";
  return e.url && (t += "#", t += basename(e.url), e.lineNumber >= 0 && (t += ":", t += e.lineNumber + 1), e.columnNumber >= 0 && (t += ":", t += e.columnNumber + 1)), t;
}
function printCallFrameStackLike(e) {
  let t = e.functionName || "(anonymous)";
  return e.url && (t += " (", t += e.url, e.lineNumber >= 0 && (t += ":", t += e.lineNumber + 1), e.columnNumber >= 0 && (t += ":", t += e.columnNumber + 1), t += ")"), t;
}
function getHeaviestLocationIds(e, t) {
  const s = {};
  for (const i of e.nodes) s[i.locationId] = (s[i.locationId] || 0) + i.selfTime;
  const r = Object.entries(s).sort(([, i], [, n]) => n - i).slice(0, t).map(([i]) => Number(i));
  return new Set(r);
}
function bottomUp(e, t) {
  const s = BottomUpNode.root(), r = getHeaviestLocationIds(e, t);
  for (const a of e.nodes) r.has(a.locationId) && (processNode(s, a, e), s.addNode(a));
  const i = Object.values(s.children).sort((a, o) => o.selfTime - a.selfTime).slice(0, t), n = [];
  for (const a of i) {
    const o = { selfTime: Math.round(a.selfTime / 1e3), totalTime: Math.round(a.aggregateTime / 1e3), location: printCallFrameShort(a.callFrame), absLocation: printCallFrameStackLike(a.callFrame), url: a.callFrame.url, caller: [], percentage: Math.round(a.selfTime / (e.duration / 100)), isSpecial: isSpecial(a.callFrame) }, l = [a];
    for (; l.length; ) {
      const h = l.pop();
      let u;
      for (const c of Object.values(h.children)) (!u || u.selfTime < c.selfTime) && (u = c);
      if (u) {
        const c = Math.round(u.selfTime / (h.selfTime / 100));
        o.caller.push({ percentage: c, location: printCallFrameShort(u.callFrame), absLocation: printCallFrameStackLike(u.callFrame) }), l.push(u);
      }
    }
    n.push(o);
  }
  return n;
}
var DEFAULT_CHANNEL = "default", INITIALIZE = "$initialize", RequestMessage = class {
  constructor(e, t, s, r, i) {
    this.vsWorker = e, this.req = t, this.channel = s, this.method = r, this.args = i, this.type = 0;
  }
}, ReplyMessage = class {
  constructor(e, t, s, r) {
    this.vsWorker = e, this.seq = t, this.res = s, this.err = r, this.type = 1;
  }
}, SubscribeEventMessage = class {
  constructor(e, t, s, r, i) {
    this.vsWorker = e, this.req = t, this.channel = s, this.eventName = r, this.arg = i, this.type = 2;
  }
}, EventMessage = class {
  constructor(e, t, s) {
    this.vsWorker = e, this.req = t, this.event = s, this.type = 3;
  }
}, UnsubscribeEventMessage = class {
  constructor(e, t) {
    this.vsWorker = e, this.req = t, this.type = 4;
  }
}, WebWorkerProtocol = class {
  constructor(e) {
    this._workerId = -1, this._handler = e, this._lastSentReq = 0, this._pendingReplies = /* @__PURE__ */ Object.create(null), this._pendingEmitters = /* @__PURE__ */ new Map(), this._pendingEvents = /* @__PURE__ */ new Map();
  }
  setWorkerId(e) {
    this._workerId = e;
  }
  sendMessage(e, t, s) {
    const r = String(++this._lastSentReq);
    return new Promise((i, n) => {
      this._pendingReplies[r] = { resolve: i, reject: n }, this._send(new RequestMessage(this._workerId, r, e, t, s));
    });
  }
  listen(e, t, s) {
    let r = null;
    const i = new Emitter({ onWillAddFirstListener: () => {
      r = String(++this._lastSentReq), this._pendingEmitters.set(r, i), this._send(new SubscribeEventMessage(this._workerId, r, e, t, s));
    }, onDidRemoveLastListener: () => {
      this._pendingEmitters.delete(r), this._send(new UnsubscribeEventMessage(this._workerId, r)), r = null;
    } });
    return i.event;
  }
  handleMessage(e) {
    !e || !e.vsWorker || this._workerId !== -1 && e.vsWorker !== this._workerId || this._handleMessage(e);
  }
  createProxyToRemoteChannel(e, t) {
    const s = { get: (r, i) => (typeof i == "string" && !r[i] && (propertyIsDynamicEvent(i) ? r[i] = (n) => this.listen(e, i, n) : propertyIsEvent(i) ? r[i] = this.listen(e, i, void 0) : i.charCodeAt(0) === 36 && (r[i] = async (...n) => (await t?.(), this.sendMessage(e, i, n)))), r[i]) };
    return new Proxy(/* @__PURE__ */ Object.create(null), s);
  }
  _handleMessage(e) {
    switch (e.type) {
      case 1:
        return this._handleReplyMessage(e);
      case 0:
        return this._handleRequestMessage(e);
      case 2:
        return this._handleSubscribeEventMessage(e);
      case 3:
        return this._handleEventMessage(e);
      case 4:
        return this._handleUnsubscribeEventMessage(e);
    }
  }
  _handleReplyMessage(e) {
    if (!this._pendingReplies[e.seq]) {
      console.warn("Got reply to unknown seq");
      return;
    }
    const t = this._pendingReplies[e.seq];
    if (delete this._pendingReplies[e.seq], e.err) {
      let s = e.err;
      e.err.$isError && (s = new Error(), s.name = e.err.name, s.message = e.err.message, s.stack = e.err.stack), t.reject(s);
      return;
    }
    t.resolve(e.res);
  }
  _handleRequestMessage(e) {
    const t = e.req;
    this._handler.handleMessage(e.channel, e.method, e.args).then((r) => {
      this._send(new ReplyMessage(this._workerId, t, r, void 0));
    }, (r) => {
      r.detail instanceof Error && (r.detail = transformErrorForSerialization(r.detail)), this._send(new ReplyMessage(this._workerId, t, void 0, transformErrorForSerialization(r)));
    });
  }
  _handleSubscribeEventMessage(e) {
    const t = e.req, s = this._handler.handleEvent(e.channel, e.eventName, e.arg)((r) => {
      this._send(new EventMessage(this._workerId, t, r));
    });
    this._pendingEvents.set(t, s);
  }
  _handleEventMessage(e) {
    if (!this._pendingEmitters.has(e.req)) {
      console.warn("Got event for unknown req");
      return;
    }
    this._pendingEmitters.get(e.req).fire(e.event);
  }
  _handleUnsubscribeEventMessage(e) {
    if (!this._pendingEvents.has(e.req)) {
      console.warn("Got unsubscribe for unknown req");
      return;
    }
    this._pendingEvents.get(e.req).dispose(), this._pendingEvents.delete(e.req);
  }
  _send(e) {
    const t = [];
    if (e.type === 0) for (let s = 0; s < e.args.length; s++) {
      const r = e.args[s];
      (r instanceof ArrayBuffer || typeof MessagePort < "u" && r instanceof MessagePort) && t.push(r);
    }
    else e.type === 1 && e.res instanceof ArrayBuffer && t.push(e.res);
    this._handler.sendMessage(e, t);
  }
};
function propertyIsEvent(e) {
  return e[0] === "o" && e[1] === "n" && isUpperAsciiLetter(e.charCodeAt(2));
}
function propertyIsDynamicEvent(e) {
  return /^onDynamic/.test(e) && isUpperAsciiLetter(e.charCodeAt(9));
}
var WebWorkerServer = class {
  constructor(e, t) {
    this._localChannels = /* @__PURE__ */ new Map(), this._remoteChannels = /* @__PURE__ */ new Map(), this._protocol = new WebWorkerProtocol({ sendMessage: (s, r) => {
      e(s, r);
    }, handleMessage: (s, r, i) => this._handleMessage(s, r, i), handleEvent: (s, r, i) => this._handleEvent(s, r, i) }), this.requestHandler = t(this);
  }
  onmessage(e) {
    this._protocol.handleMessage(e);
  }
  _handleMessage(e, t, s) {
    if (e === DEFAULT_CHANNEL && t === INITIALIZE) return this.initialize(s[0]);
    const r = e === DEFAULT_CHANNEL ? this.requestHandler : this._localChannels.get(e);
    if (!r) return Promise.reject(new Error(`Missing channel ${e} on worker thread`));
    if (typeof r[t] != "function") return Promise.reject(new Error(`Missing method ${t} on worker thread channel ${e}`));
    try {
      return Promise.resolve(r[t].apply(r, s));
    } catch (i) {
      return Promise.reject(i);
    }
  }
  _handleEvent(e, t, s) {
    const r = e === DEFAULT_CHANNEL ? this.requestHandler : this._localChannels.get(e);
    if (!r) throw new Error(`Missing channel ${e} on worker thread`);
    if (propertyIsDynamicEvent(t)) {
      const i = r[t].call(r, s);
      if (typeof i != "function") throw new Error(`Missing dynamic event ${t} on request handler.`);
      return i;
    }
    if (propertyIsEvent(t)) {
      const i = r[t];
      if (typeof i != "function") throw new Error(`Missing event ${t} on request handler.`);
      return i;
    }
    throw new Error(`Malformed event name ${t}`);
  }
  setChannel(e, t) {
    this._localChannels.set(e, t);
  }
  getChannel(e) {
    if (!this._remoteChannels.has(e)) {
      const t = this._protocol.createProxyToRemoteChannel(e);
      this._remoteChannels.set(e, t);
    }
    return this._remoteChannels.get(e);
  }
  async initialize(e) {
    this._protocol.setWorkerId(e);
  }
}, initialized = false;
function initialize(e) {
  if (initialized) throw new Error("WebWorker already initialized!");
  initialized = true;
  const t = new WebWorkerServer((s, r) => globalThis.postMessage(s, r), (s) => e(s));
  return globalThis.onmessage = (s) => {
    t.onmessage(s.data);
  }, t;
}
function bootstrapWebWorker(e) {
  globalThis.onmessage = (t) => {
    initialized || initialize(e);
  };
}
bootstrapWebWorker(create);
