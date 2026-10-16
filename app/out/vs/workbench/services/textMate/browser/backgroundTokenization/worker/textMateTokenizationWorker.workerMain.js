/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ca024cbe-cac2-5011-84b7-44f92fbafbd7");
  } catch (e2) {
  }
})();
function getNLSMessages() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function getNLSLanguage() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
var isPseudo = getNLSLanguage() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;
function _format(e, t) {
  let n;
  return t.length === 0 ? n = e : n = e.replace(/\{(\d+)\}/g, (i, s) => {
    const r = parseInt(s, 10), o = t[r];
    let a = i;
    return typeof o == "string" ? a = o : (typeof o == "number" || typeof o == "boolean" || o === void 0 || o === null) && (a = String(o)), a;
  }), isPseudo && (n = "［" + n.replace(/[aouei]/g, "$&$&") + "］"), n;
}
function localize(e, t, ...n) {
  return _format(typeof e == "number" ? lookupMessage(e, t) : t, n);
}
function lookupMessage(e, t) {
  const n = getNLSMessages()?.[e];
  if (typeof n != "string") {
    if (typeof t == "string") return t;
    throw new Error(`!!! NLS MISSING: ${e} !!!`);
  }
  return n;
}
var LANGUAGE_DEFAULT = "en", _isWindows = false, _isMacintosh = false, _isLinux = false, _isLinuxSnap = false, _isNative = false, _isWeb = false, _isElectron = false, _isIOS = false, _isCI = false, _isMobile = false, _locale = void 0, _language = LANGUAGE_DEFAULT, _platformLocale = LANGUAGE_DEFAULT, _translationsConfigFile = void 0, _userAgent = void 0, $globalThis = globalThis, nodeProcess = void 0;
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
var isWindows = _isWindows, isMacintosh = _isMacintosh, isLinux = _isLinux, isNative = _isNative, isWeb = _isWeb, isWebWorker = _isWeb && typeof $globalThis.importScripts == "function", webWorkerOrigin = isWebWorker ? $globalThis.origin : void 0, userAgent = _userAgent, language = _language, Language;
((e) => {
  function t() {
    return language;
  }
  e.value = t;
  function n() {
    return language.length === 2 ? language === "en" : language.length >= 3 ? language[0] === "e" && language[1] === "n" && language[2] === "-" : false;
  }
  e.isDefaultVariant = n;
  function i() {
    return language === "en";
  }
  e.isDefault = i;
})(Language || (Language = {}));
var setTimeout0IsFaster = typeof $globalThis.postMessage == "function" && !$globalThis.importScripts, setTimeout0 = (() => {
  if (setTimeout0IsFaster) {
    const e = [];
    $globalThis.addEventListener("message", (n) => {
      if (n.data && n.data.vscodeScheduleAsyncWork) for (let i = 0, s = e.length; i < s; i++) {
        const r = e[i];
        if (r.id === n.data.vscodeScheduleAsyncWork) {
          e.splice(i, 1), r.callback();
          return;
        }
      }
    });
    let t = 0;
    return (n) => {
      const i = ++t;
      e.push({ id: i, callback: n }), $globalThis.postMessage({ vscodeScheduleAsyncWork: i }, "*");
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
  constructor(e, t, n) {
    let i;
    typeof t == "string" && t.indexOf("not ") === 0 ? (i = "must not be", t = t.replace(/^not /, "")) : i = "must be";
    const s = e.indexOf(".") !== -1 ? "property" : "argument";
    let r = `The "${e}" ${s} ${i} of type ${t}`;
    r += `. Received type ${typeof n}`, super(r), this.code = "ERR_INVALID_ARG_TYPE";
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
function normalizeString(e, t, n, i) {
  let s = "", r = 0, o = -1, a = 0, l = 0;
  for (let u = 0; u <= e.length; ++u) {
    if (u < e.length) l = e.charCodeAt(u);
    else {
      if (i(l)) break;
      l = CHAR_FORWARD_SLASH;
    }
    if (i(l)) {
      if (!(o === u - 1 || a === 1)) if (a === 2) {
        if (s.length < 2 || r !== 2 || s.charCodeAt(s.length - 1) !== CHAR_DOT || s.charCodeAt(s.length - 2) !== CHAR_DOT) {
          if (s.length > 2) {
            const d = s.lastIndexOf(n);
            d === -1 ? (s = "", r = 0) : (s = s.slice(0, d), r = s.length - 1 - s.lastIndexOf(n)), o = u, a = 0;
            continue;
          } else if (s.length !== 0) {
            s = "", r = 0, o = u, a = 0;
            continue;
          }
        }
        t && (s += s.length > 0 ? `${n}..` : "..", r = 2);
      } else s.length > 0 ? s += `${n}${e.slice(o + 1, u)}` : s = e.slice(o + 1, u), r = u - o - 1;
      o = u, a = 0;
    } else l === CHAR_DOT && a !== -1 ? ++a : a = -1;
  }
  return s;
}
function formatExt(e) {
  return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function _format2(e, t) {
  validateObject(t, "pathObject");
  const n = t.dir || t.root, i = t.base || `${t.name || ""}${formatExt(t.ext)}`;
  return n ? n === t.root ? `${n}${i}` : `${n}${e}${i}` : i;
}
var win32 = { resolve(...e) {
  let t = "", n = "", i = false;
  for (let s = e.length - 1; s >= -1; s--) {
    let r;
    if (s >= 0) {
      if (r = e[s], validateString(r, `paths[${s}]`), r.length === 0) continue;
    } else t.length === 0 ? r = cwd() : (r = env[`=${t}`] || cwd(), (r === void 0 || r.slice(0, 2).toLowerCase() !== t.toLowerCase() && r.charCodeAt(2) === CHAR_BACKWARD_SLASH) && (r = `${t}\\`));
    const o = r.length;
    let a = 0, l = "", u = false;
    const d = r.charCodeAt(0);
    if (o === 1) isPathSeparator(d) && (a = 1, u = true);
    else if (isPathSeparator(d)) if (u = true, isPathSeparator(r.charCodeAt(1))) {
      let c = 2, g = c;
      for (; c < o && !isPathSeparator(r.charCodeAt(c)); ) c++;
      if (c < o && c !== g) {
        const w = r.slice(g, c);
        for (g = c; c < o && isPathSeparator(r.charCodeAt(c)); ) c++;
        if (c < o && c !== g) {
          for (g = c; c < o && !isPathSeparator(r.charCodeAt(c)); ) c++;
          (c === o || c !== g) && (l = `\\\\${w}\\${r.slice(g, c)}`, a = c);
        }
      }
    } else a = 1;
    else isWindowsDeviceRoot(d) && r.charCodeAt(1) === CHAR_COLON && (l = r.slice(0, 2), a = 2, o > 2 && isPathSeparator(r.charCodeAt(2)) && (u = true, a = 3));
    if (l.length > 0) if (t.length > 0) {
      if (l.toLowerCase() !== t.toLowerCase()) continue;
    } else t = l;
    if (i) {
      if (t.length > 0) break;
    } else if (n = `${r.slice(a)}\\${n}`, i = u, u && t.length > 0) break;
  }
  return n = normalizeString(n, !i, "\\", isPathSeparator), i ? `${t}\\${n}` : `${t}${n}` || ".";
}, normalize(e) {
  validateString(e, "path");
  const t = e.length;
  if (t === 0) return ".";
  let n = 0, i, s = false;
  const r = e.charCodeAt(0);
  if (t === 1) return isPosixPathSeparator(r) ? "\\" : e;
  if (isPathSeparator(r)) if (s = true, isPathSeparator(e.charCodeAt(1))) {
    let a = 2, l = a;
    for (; a < t && !isPathSeparator(e.charCodeAt(a)); ) a++;
    if (a < t && a !== l) {
      const u = e.slice(l, a);
      for (l = a; a < t && isPathSeparator(e.charCodeAt(a)); ) a++;
      if (a < t && a !== l) {
        for (l = a; a < t && !isPathSeparator(e.charCodeAt(a)); ) a++;
        if (a === t) return `\\\\${u}\\${e.slice(l)}\\`;
        a !== l && (i = `\\\\${u}\\${e.slice(l, a)}`, n = a);
      }
    }
  } else n = 1;
  else isWindowsDeviceRoot(r) && e.charCodeAt(1) === CHAR_COLON && (i = e.slice(0, 2), n = 2, t > 2 && isPathSeparator(e.charCodeAt(2)) && (s = true, n = 3));
  let o = n < t ? normalizeString(e.slice(n), !s, "\\", isPathSeparator) : "";
  if (o.length === 0 && !s && (o = "."), o.length > 0 && isPathSeparator(e.charCodeAt(t - 1)) && (o += "\\"), !s && i === void 0 && e.includes(":")) {
    if (o.length >= 2 && isWindowsDeviceRoot(o.charCodeAt(0)) && o.charCodeAt(1) === CHAR_COLON) return `.\\${o}`;
    let a = e.indexOf(":");
    do
      if (a === t - 1 || isPathSeparator(e.charCodeAt(a + 1))) return `.\\${o}`;
    while ((a = e.indexOf(":", a + 1)) !== -1);
  }
  return i === void 0 ? s ? `\\${o}` : o : s ? `${i}\\${o}` : `${i}${o}`;
}, isAbsolute(e) {
  validateString(e, "path");
  const t = e.length;
  if (t === 0) return false;
  const n = e.charCodeAt(0);
  return isPathSeparator(n) || t > 2 && isWindowsDeviceRoot(n) && e.charCodeAt(1) === CHAR_COLON && isPathSeparator(e.charCodeAt(2));
}, join(...e) {
  if (e.length === 0) return ".";
  let t, n;
  for (let r = 0; r < e.length; ++r) {
    const o = e[r];
    validateString(o, "path"), o.length > 0 && (t === void 0 ? t = n = o : t += `\\${o}`);
  }
  if (t === void 0) return ".";
  let i = true, s = 0;
  if (typeof n == "string" && isPathSeparator(n.charCodeAt(0))) {
    ++s;
    const r = n.length;
    r > 1 && isPathSeparator(n.charCodeAt(1)) && (++s, r > 2 && (isPathSeparator(n.charCodeAt(2)) ? ++s : i = false));
  }
  if (i) {
    for (; s < t.length && isPathSeparator(t.charCodeAt(s)); ) s++;
    s >= 2 && (t = `\\${t.slice(s)}`);
  }
  return win32.normalize(t);
}, relative(e, t) {
  if (validateString(e, "from"), validateString(t, "to"), e === t) return "";
  const n = win32.resolve(e), i = win32.resolve(t);
  if (n === i || (e = n.toLowerCase(), t = i.toLowerCase(), e === t)) return "";
  if (n.length !== e.length || i.length !== t.length) {
    const T = n.split("\\"), O = i.split("\\");
    T[T.length - 1] === "" && T.pop(), O[O.length - 1] === "" && O.pop();
    const R = T.length, M = O.length, P = R < M ? R : M;
    let A;
    for (A = 0; A < P && T[A].toLowerCase() === O[A].toLowerCase(); A++) ;
    return A === 0 ? i : A === P ? M > P ? O.slice(A).join("\\") : R > P ? "..\\".repeat(R - 1 - A) + ".." : "" : "..\\".repeat(R - A) + O.slice(A).join("\\");
  }
  let s = 0;
  for (; s < e.length && e.charCodeAt(s) === CHAR_BACKWARD_SLASH; ) s++;
  let r = e.length;
  for (; r - 1 > s && e.charCodeAt(r - 1) === CHAR_BACKWARD_SLASH; ) r--;
  const o = r - s;
  let a = 0;
  for (; a < t.length && t.charCodeAt(a) === CHAR_BACKWARD_SLASH; ) a++;
  let l = t.length;
  for (; l - 1 > a && t.charCodeAt(l - 1) === CHAR_BACKWARD_SLASH; ) l--;
  const u = l - a, d = o < u ? o : u;
  let c = -1, g = 0;
  for (; g < d; g++) {
    const T = e.charCodeAt(s + g);
    if (T !== t.charCodeAt(a + g)) break;
    T === CHAR_BACKWARD_SLASH && (c = g);
  }
  if (g !== d) {
    if (c === -1) return i;
  } else {
    if (u > d) {
      if (t.charCodeAt(a + g) === CHAR_BACKWARD_SLASH) return i.slice(a + g + 1);
      if (g === 2) return i.slice(a + g);
    }
    o > d && (e.charCodeAt(s + g) === CHAR_BACKWARD_SLASH ? c = g : g === 2 && (c = 3)), c === -1 && (c = 0);
  }
  let w = "";
  for (g = s + c + 1; g <= r; ++g) (g === r || e.charCodeAt(g) === CHAR_BACKWARD_SLASH) && (w += w.length === 0 ? ".." : "\\..");
  return a += c, w.length > 0 ? `${w}${i.slice(a, l)}` : (i.charCodeAt(a) === CHAR_BACKWARD_SLASH && ++a, i.slice(a, l));
}, toNamespacedPath(e) {
  if (typeof e != "string" || e.length === 0) return e;
  const t = win32.resolve(e);
  if (t.length <= 2) return e;
  if (t.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
    if (t.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
      const n = t.charCodeAt(2);
      if (n !== CHAR_QUESTION_MARK && n !== CHAR_DOT) return `\\\\?\\UNC\\${t.slice(2)}`;
    }
  } else if (isWindowsDeviceRoot(t.charCodeAt(0)) && t.charCodeAt(1) === CHAR_COLON && t.charCodeAt(2) === CHAR_BACKWARD_SLASH) return `\\\\?\\${t}`;
  return t;
}, dirname(e) {
  validateString(e, "path");
  const t = e.length;
  if (t === 0) return ".";
  let n = -1, i = 0;
  const s = e.charCodeAt(0);
  if (t === 1) return isPathSeparator(s) ? e : ".";
  if (isPathSeparator(s)) {
    if (n = i = 1, isPathSeparator(e.charCodeAt(1))) {
      let a = 2, l = a;
      for (; a < t && !isPathSeparator(e.charCodeAt(a)); ) a++;
      if (a < t && a !== l) {
        for (l = a; a < t && isPathSeparator(e.charCodeAt(a)); ) a++;
        if (a < t && a !== l) {
          for (l = a; a < t && !isPathSeparator(e.charCodeAt(a)); ) a++;
          if (a === t) return e;
          a !== l && (n = i = a + 1);
        }
      }
    }
  } else isWindowsDeviceRoot(s) && e.charCodeAt(1) === CHAR_COLON && (n = t > 2 && isPathSeparator(e.charCodeAt(2)) ? 3 : 2, i = n);
  let r = -1, o = true;
  for (let a = t - 1; a >= i; --a) if (isPathSeparator(e.charCodeAt(a))) {
    if (!o) {
      r = a;
      break;
    }
  } else o = false;
  if (r === -1) {
    if (n === -1) return ".";
    r = n;
  }
  return e.slice(0, r);
}, basename(e, t) {
  t !== void 0 && validateString(t, "suffix"), validateString(e, "path");
  let n = 0, i = -1, s = true, r;
  if (e.length >= 2 && isWindowsDeviceRoot(e.charCodeAt(0)) && e.charCodeAt(1) === CHAR_COLON && (n = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
    if (t === e) return "";
    let o = t.length - 1, a = -1;
    for (r = e.length - 1; r >= n; --r) {
      const l = e.charCodeAt(r);
      if (isPathSeparator(l)) {
        if (!s) {
          n = r + 1;
          break;
        }
      } else a === -1 && (s = false, a = r + 1), o >= 0 && (l === t.charCodeAt(o) ? --o === -1 && (i = r) : (o = -1, i = a));
    }
    return n === i ? i = a : i === -1 && (i = e.length), e.slice(n, i);
  }
  for (r = e.length - 1; r >= n; --r) if (isPathSeparator(e.charCodeAt(r))) {
    if (!s) {
      n = r + 1;
      break;
    }
  } else i === -1 && (s = false, i = r + 1);
  return i === -1 ? "" : e.slice(n, i);
}, extname(e) {
  validateString(e, "path");
  let t = 0, n = -1, i = 0, s = -1, r = true, o = 0;
  e.length >= 2 && e.charCodeAt(1) === CHAR_COLON && isWindowsDeviceRoot(e.charCodeAt(0)) && (t = i = 2);
  for (let a = e.length - 1; a >= t; --a) {
    const l = e.charCodeAt(a);
    if (isPathSeparator(l)) {
      if (!r) {
        i = a + 1;
        break;
      }
      continue;
    }
    s === -1 && (r = false, s = a + 1), l === CHAR_DOT ? n === -1 ? n = a : o !== 1 && (o = 1) : n !== -1 && (o = -1);
  }
  return n === -1 || s === -1 || o === 0 || o === 1 && n === s - 1 && n === i + 1 ? "" : e.slice(n, s);
}, format: _format2.bind(null, "\\"), parse(e) {
  validateString(e, "path");
  const t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (e.length === 0) return t;
  const n = e.length;
  let i = 0, s = e.charCodeAt(0);
  if (n === 1) return isPathSeparator(s) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
  if (isPathSeparator(s)) {
    if (i = 1, isPathSeparator(e.charCodeAt(1))) {
      let c = 2, g = c;
      for (; c < n && !isPathSeparator(e.charCodeAt(c)); ) c++;
      if (c < n && c !== g) {
        for (g = c; c < n && isPathSeparator(e.charCodeAt(c)); ) c++;
        if (c < n && c !== g) {
          for (g = c; c < n && !isPathSeparator(e.charCodeAt(c)); ) c++;
          c === n ? i = c : c !== g && (i = c + 1);
        }
      }
    }
  } else if (isWindowsDeviceRoot(s) && e.charCodeAt(1) === CHAR_COLON) {
    if (n <= 2) return t.root = t.dir = e, t;
    if (i = 2, isPathSeparator(e.charCodeAt(2))) {
      if (n === 3) return t.root = t.dir = e, t;
      i = 3;
    }
  }
  i > 0 && (t.root = e.slice(0, i));
  let r = -1, o = i, a = -1, l = true, u = e.length - 1, d = 0;
  for (; u >= i; --u) {
    if (s = e.charCodeAt(u), isPathSeparator(s)) {
      if (!l) {
        o = u + 1;
        break;
      }
      continue;
    }
    a === -1 && (l = false, a = u + 1), s === CHAR_DOT ? r === -1 ? r = u : d !== 1 && (d = 1) : r !== -1 && (d = -1);
  }
  return a !== -1 && (r === -1 || d === 0 || d === 1 && r === a - 1 && r === o + 1 ? t.base = t.name = e.slice(o, a) : (t.name = e.slice(o, r), t.base = e.slice(o, a), t.ext = e.slice(r, a))), o > 0 && o !== i ? t.dir = e.slice(0, o - 1) : t.dir = t.root, t;
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
  let t = "", n = false;
  for (let i = e.length - 1; i >= 0 && !n; i--) {
    const s = e[i];
    validateString(s, `paths[${i}]`), s.length !== 0 && (t = `${s}/${t}`, n = s.charCodeAt(0) === CHAR_FORWARD_SLASH);
  }
  if (!n) {
    const i = posixCwd();
    t = `${i}/${t}`, n = i.charCodeAt(0) === CHAR_FORWARD_SLASH;
  }
  return t = normalizeString(t, !n, "/", isPosixPathSeparator), n ? `/${t}` : t.length > 0 ? t : ".";
}, normalize(e) {
  if (validateString(e, "path"), e.length === 0) return ".";
  const t = e.charCodeAt(0) === CHAR_FORWARD_SLASH, n = e.charCodeAt(e.length - 1) === CHAR_FORWARD_SLASH;
  return e = normalizeString(e, !t, "/", isPosixPathSeparator), e.length === 0 ? t ? "/" : n ? "./" : "." : (n && (e += "/"), t ? `/${e}` : e);
}, isAbsolute(e) {
  return validateString(e, "path"), e.length > 0 && e.charCodeAt(0) === CHAR_FORWARD_SLASH;
}, join(...e) {
  if (e.length === 0) return ".";
  const t = [];
  for (let n = 0; n < e.length; ++n) {
    const i = e[n];
    validateString(i, "path"), i.length > 0 && t.push(i);
  }
  return t.length === 0 ? "." : posix.normalize(t.join("/"));
}, relative(e, t) {
  if (validateString(e, "from"), validateString(t, "to"), e === t || (e = posix.resolve(e), t = posix.resolve(t), e === t)) return "";
  const n = 1, i = e.length, s = i - n, r = 1, o = t.length - r, a = s < o ? s : o;
  let l = -1, u = 0;
  for (; u < a; u++) {
    const c = e.charCodeAt(n + u);
    if (c !== t.charCodeAt(r + u)) break;
    c === CHAR_FORWARD_SLASH && (l = u);
  }
  if (u === a) if (o > a) {
    if (t.charCodeAt(r + u) === CHAR_FORWARD_SLASH) return t.slice(r + u + 1);
    if (u === 0) return t.slice(r + u);
  } else s > a && (e.charCodeAt(n + u) === CHAR_FORWARD_SLASH ? l = u : u === 0 && (l = 0));
  let d = "";
  for (u = n + l + 1; u <= i; ++u) (u === i || e.charCodeAt(u) === CHAR_FORWARD_SLASH) && (d += d.length === 0 ? ".." : "/..");
  return `${d}${t.slice(r + l)}`;
}, toNamespacedPath(e) {
  return e;
}, dirname(e) {
  if (validateString(e, "path"), e.length === 0) return ".";
  const t = e.charCodeAt(0) === CHAR_FORWARD_SLASH;
  let n = -1, i = true;
  for (let s = e.length - 1; s >= 1; --s) if (e.charCodeAt(s) === CHAR_FORWARD_SLASH) {
    if (!i) {
      n = s;
      break;
    }
  } else i = false;
  return n === -1 ? t ? "/" : "." : t && n === 1 ? "//" : e.slice(0, n);
}, basename(e, t) {
  t !== void 0 && validateString(t, "suffix"), validateString(e, "path");
  let n = 0, i = -1, s = true, r;
  if (t !== void 0 && t.length > 0 && t.length <= e.length) {
    if (t === e) return "";
    let o = t.length - 1, a = -1;
    for (r = e.length - 1; r >= 0; --r) {
      const l = e.charCodeAt(r);
      if (l === CHAR_FORWARD_SLASH) {
        if (!s) {
          n = r + 1;
          break;
        }
      } else a === -1 && (s = false, a = r + 1), o >= 0 && (l === t.charCodeAt(o) ? --o === -1 && (i = r) : (o = -1, i = a));
    }
    return n === i ? i = a : i === -1 && (i = e.length), e.slice(n, i);
  }
  for (r = e.length - 1; r >= 0; --r) if (e.charCodeAt(r) === CHAR_FORWARD_SLASH) {
    if (!s) {
      n = r + 1;
      break;
    }
  } else i === -1 && (s = false, i = r + 1);
  return i === -1 ? "" : e.slice(n, i);
}, extname(e) {
  validateString(e, "path");
  let t = -1, n = 0, i = -1, s = true, r = 0;
  for (let o = e.length - 1; o >= 0; --o) {
    const a = e[o];
    if (a === "/") {
      if (!s) {
        n = o + 1;
        break;
      }
      continue;
    }
    i === -1 && (s = false, i = o + 1), a === "." ? t === -1 ? t = o : r !== 1 && (r = 1) : t !== -1 && (r = -1);
  }
  return t === -1 || i === -1 || r === 0 || r === 1 && t === i - 1 && t === n + 1 ? "" : e.slice(t, i);
}, format: _format2.bind(null, "/"), parse(e) {
  validateString(e, "path");
  const t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (e.length === 0) return t;
  const n = e.charCodeAt(0) === CHAR_FORWARD_SLASH;
  let i;
  n ? (t.root = "/", i = 1) : i = 0;
  let s = -1, r = 0, o = -1, a = true, l = e.length - 1, u = 0;
  for (; l >= i; --l) {
    const d = e.charCodeAt(l);
    if (d === CHAR_FORWARD_SLASH) {
      if (!a) {
        r = l + 1;
        break;
      }
      continue;
    }
    o === -1 && (a = false, o = l + 1), d === CHAR_DOT ? s === -1 ? s = l : u !== 1 && (u = 1) : s !== -1 && (u = -1);
  }
  if (o !== -1) {
    const d = r === 0 && n ? 1 : r;
    s === -1 || u === 0 || u === 1 && s === o - 1 && s === r + 1 ? t.base = t.name = e.slice(d, o) : (t.name = e.slice(d, s), t.base = e.slice(d, o), t.ext = e.slice(s, o));
  }
  return r > 0 ? t.dir = e.slice(0, r - 1) : n && (t.dir = "/"), t;
}, sep: "/", delimiter: ":", win32: null, posix: null };
posix.win32 = win32.win32 = win32, posix.posix = win32.posix = posix;
var normalize = platformIsWin32 ? win32.normalize : posix.normalize, isAbsolute = platformIsWin32 ? win32.isAbsolute : posix.isAbsolute, join = platformIsWin32 ? win32.join : posix.join, resolve = platformIsWin32 ? win32.resolve : posix.resolve, relative = platformIsWin32 ? win32.relative : posix.relative, dirname = platformIsWin32 ? win32.dirname : posix.dirname, basename = platformIsWin32 ? win32.basename : posix.basename, extname = platformIsWin32 ? win32.extname : posix.extname, format = platformIsWin32 ? win32.format : posix.format, parse = platformIsWin32 ? win32.parse : posix.parse, toNamespacedPath = platformIsWin32 ? win32.toNamespacedPath : posix.toNamespacedPath, sep = platformIsWin32 ? win32.sep : posix.sep, delimiter = platformIsWin32 ? win32.delimiter : posix.delimiter, ErrorHandler = class {
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
function onBugIndicatingError(e) {
  errorHandler.onUnexpectedError(e);
}
function onUnexpectedError(e) {
  isCancellationError(e) || errorHandler.onUnexpectedError(e);
}
function transformErrorForSerialization(e) {
  if (e instanceof Error) {
    const { name: t, message: n, cause: i } = e, s = e.stacktrace || e.stack;
    return { $isError: true, name: t, message: n, stack: s, noTelemetry: ErrorNoTelemetry.isErrorNoTelemetry(e), cause: i ? transformErrorForSerialization(i) : void 0, code: e.code };
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
}, ErrorNoTelemetry = class te extends Error {
  constructor(t) {
    super(t), this.name = "CodeExpectedError";
  }
  static fromError(t) {
    if (t instanceof te) return t;
    const n = new te();
    return n.message = t.message, n.stack = t.stack, n;
  }
  static isErrorNoTelemetry(t) {
    return t.name === "CodeExpectedError";
  }
}, BugIndicatingError = class de extends Error {
  constructor(t) {
    super(t || "An unexpected bug occurred."), Object.setPrototypeOf(this, de.prototype);
  }
}, ALLOWLIST_FOR_CANCELLATION_ERROR_LOGGING = ["composerChatService", "composerService", "composerUtilsService", "composerAgentService", "composerCapabilities", "composerDecisionsService", "aiServiceImpl", "toolsV2Service", "toolsV2HandlerRegistryService", "agentCompatService", "mockAgentStreamController", "mockComposerStreamController", "toolFormer", "ToolFormer", "tool", "agent", "Agent", "stream", "Stream", "ComposerFullInputBox", "composerActions", "cancelAll", "abortChatAndWaitForFinish", "abortGenerationUUID"], CANCELLATION_DEBUG_TRACE_THROTTLE_MS = 5e3, _nextCancellationDebugTraceTime = 0;
function shouldLogCancellationDebugTrace() {
  const e = Date.now();
  return e < _nextCancellationDebugTraceTime ? false : (_nextCancellationDebugTraceTime = e + CANCELLATION_DEBUG_TRACE_THROTTLE_MS, true);
}
var _cancellationErrorLoggingEnabled = false, _a, _b;
function groupBy(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const i of e) {
    const s = t(i);
    let r = n[s];
    r || (r = n[s] = []), r.push(i);
  }
  return n;
}
var SetWithKey = class {
  constructor(e, t) {
    this.toKey = t, this._map = /* @__PURE__ */ new Map(), this[_a] = "SetWithKey";
    for (const n of e) this.add(n);
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
    this._map.forEach((n) => e.call(t, n, n, this));
  }
  [(_b = Symbol.iterator, _a = Symbol.toStringTag, _b)]() {
    return this.values();
  }
};
function createSingleCallFunction(e, t) {
  const n = this;
  let i = false, s;
  return function() {
    if (i) return s;
    if (i = true, t) try {
      s = e.apply(n, arguments);
    } finally {
      t();
    }
    else s = e.apply(n, arguments);
    return s;
  };
}
function findLastMonotonous(e, t) {
  const n = findLastIdxMonotonous(e, t);
  return n === -1 ? void 0 : e[n];
}
function findLastIdxMonotonous(e, t, n = 0, i = e.length) {
  let s = n, r = i;
  for (; s < r; ) {
    const o = Math.floor((s + r) / 2);
    t(e[o]) ? s = o + 1 : r = o;
  }
  return s - 1;
}
function findFirstIdxMonotonousOrArrLen(e, t, n = 0, i = e.length) {
  let s = n, r = i;
  for (; s < r; ) {
    const o = Math.floor((s + r) / 2);
    t(e[o]) ? r = o : s = o + 1;
  }
  return s;
}
var _MonotonousArray = class he {
  constructor(t) {
    this._array = t, this._findLastMonotonousLastIdx = 0;
  }
  findLastMonotonous(t) {
    if (he.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (const i of this._array) if (this._prevFindLastPredicate(i) && !t(i)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
      }
      this._prevFindLastPredicate = t;
    }
    const n = findLastIdxMonotonous(this._array, t, this._findLastMonotonousLastIdx);
    return this._findLastMonotonousLastIdx = n + 1, n === -1 ? void 0 : this._array[n];
  }
};
_MonotonousArray.assertInvariants = false;
function arrayInsert(e, t, n) {
  const i = e.slice(0, t), s = e.slice(t);
  return i.concat(n, s);
}
var CompareResult;
((e) => {
  function t(r) {
    return r < 0;
  }
  e.isLessThan = t;
  function n(r) {
    return r <= 0;
  }
  e.isLessThanOrEqual = n;
  function i(r) {
    return r > 0;
  }
  e.isGreaterThan = i;
  function s(r) {
    return r === 0;
  }
  e.isNeitherLessOrGreaterThan = s, e.greaterThan = 1, e.lessThan = -1, e.neitherLessOrGreaterThan = 0;
})(CompareResult || (CompareResult = {}));
function compareBy(e, t) {
  return (n, i) => t(e(n), e(i));
}
var numberComparator = (e, t) => e - t, _CallbackIterable = class ne {
  constructor(t) {
    this.iterate = t;
  }
  forEach(t) {
    this.iterate((n) => (t(n), true));
  }
  toArray() {
    const t = [];
    return this.iterate((n) => (t.push(n), true)), t;
  }
  filter(t) {
    return new ne((n) => this.iterate((i) => t(i) ? n(i) : true));
  }
  map(t) {
    return new ne((n) => this.iterate((i) => n(t(i))));
  }
  some(t) {
    let n = false;
    return this.iterate((i) => (n = t(i), !n)), n;
  }
  findFirst(t) {
    let n;
    return this.iterate((i) => t(i) ? (n = i, false) : true), n;
  }
  findLast(t) {
    let n;
    return this.iterate((i) => (t(i) && (n = i), true)), n;
  }
  findLastMaxBy(t) {
    let n, i = true;
    return this.iterate((s) => ((i || CompareResult.isGreaterThan(t(s, n))) && (i = false, n = s), true)), n;
  }
};
_CallbackIterable.empty = new _CallbackIterable((e) => {
});
var _a2, _b2, _c, ResourceMapEntry = class {
  constructor(e, t) {
    this.uri = e, this.value = t;
  }
};
function isEntries(e) {
  return Array.isArray(e);
}
var _ResourceMap = class G {
  constructor(t, n) {
    if (this[_a2] = "ResourceMap", t instanceof G) this.map = new Map(t.map), this.toKey = n ?? G.defaultToKey;
    else if (isEntries(t)) {
      this.map = /* @__PURE__ */ new Map(), this.toKey = n ?? G.defaultToKey;
      for (const [i, s] of t) this.set(i, s);
    } else this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? G.defaultToKey;
  }
  set(t, n) {
    return this.map.set(this.toKey(t), new ResourceMapEntry(t, n)), this;
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
  forEach(t, n) {
    typeof n < "u" && (t = t.bind(n));
    for (const [i, s] of this.map) t(s.value, s.uri, this);
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
    this._map.forEach((n, i) => e.call(t, i, i, this));
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
    const n = this._map.get(e);
    if (n) return t !== 0 && this.touch(n, t), n.value;
  }
  set(e, t, n = 0) {
    let i = this._map.get(e);
    if (i) i.value = t, n !== 0 && this.touch(i, n);
    else {
      switch (i = { key: e, value: t, next: void 0, previous: void 0 }, n) {
        case 0:
          this.addItemLast(i);
          break;
        case 1:
          this.addItemFirst(i);
          break;
        case 2:
          this.addItemLast(i);
          break;
        default:
          this.addItemLast(i);
          break;
      }
      this._map.set(e, i), this._size++;
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
    const n = this._state;
    let i = this._head;
    for (; i; ) {
      if (t ? e.bind(t)(i.value, i.key, this) : e(i.value, i.key, this), this._state !== n) throw new Error("LinkedMap got modified during iteration.");
      i = i.next;
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
  *iterateLinked(e, t, n) {
    for (; ; ) {
      if (this._state !== e) throw new Error("LinkedMap got modified during iteration.");
      if (!t) return;
      const i = n(t);
      t = t.next, yield i;
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
    let t = this._head, n = this.size;
    for (; t && n > e; ) this._map.delete(t.key), t = t.next, n--;
    this._head = t, this._size = n, t && (t.previous = void 0), this._state++;
  }
  trimNew(e) {
    if (e >= this.size) return;
    if (e === 0) {
      this.clear();
      return;
    }
    let t = this._tail, n = this.size;
    for (; t && n > e; ) this._map.delete(t.key), t = t.previous, n--;
    this._tail = t, this._size = n, t && (t.next = void 0), this._state++;
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
      const t = e.next, n = e.previous;
      if (!t || !n) throw new Error("Invalid list");
      t.previous = n, n.next = t;
    }
    e.next = void 0, e.previous = void 0, this._state++;
  }
  touch(e, t) {
    if (!this._head || !this._tail) throw new Error("Invalid list");
    if (!(t !== 1 && t !== 2)) {
      if (t === 1) {
        if (e === this._head) return;
        const n = e.next, i = e.previous;
        e === this._tail ? (i.next = void 0, this._tail = i) : (n.previous = i, i.next = n), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
      } else if (t === 2) {
        if (e === this._tail) return;
        const n = e.next, i = e.previous;
        e === this._head ? (n.previous = void 0, this._head = n) : (n.previous = i, i.next = n), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++;
      }
    }
  }
  toJSON() {
    const e = [];
    return this.forEach((t, n) => {
      e.push([n, t]);
    }), e;
  }
  fromJSON(e) {
    this.clear();
    for (const [t, n] of e) this.set(t, n);
  }
}, SetMap = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  add(e, t) {
    let n = this.map.get(e);
    n || (n = /* @__PURE__ */ new Set(), this.map.set(e, n)), n.add(t);
  }
  delete(e, t) {
    const n = this.map.get(e);
    n && (n.delete(t), n.size === 0 && this.map.delete(e));
  }
  forEach(e, t) {
    const n = this.map.get(e);
    n && n.forEach(t);
  }
  get(e) {
    const t = this.map.get(e);
    return t || /* @__PURE__ */ new Set();
  }
};
function assertFn(e) {
  if (!e()) {
    debugger;
    e(), onUnexpectedError(new BugIndicatingError("Assertion Failed"));
  }
}
function isString(e) {
  return typeof e == "string";
}
function isIterable(e) {
  return !!e && typeof e[Symbol.iterator] == "function";
}
function isUndefined(e) {
  return typeof e > "u";
}
function isDefined(e) {
  return !isUndefinedOrNull(e);
}
function isUndefinedOrNull(e) {
  return isUndefined(e) || e === null;
}
var Iterable;
((e) => {
  function t(p) {
    return p && typeof p == "object" && typeof p[Symbol.iterator] == "function";
  }
  e.is = t;
  const n = Object.freeze([]);
  function i() {
    return n;
  }
  e.empty = i;
  function* s(p) {
    yield p;
  }
  e.single = s;
  function r(p) {
    return t(p) ? p : s(p);
  }
  e.wrap = r;
  function o(p) {
    return p || n;
  }
  e.from = o;
  function* a(p) {
    for (let E = p.length - 1; E >= 0; E--) yield p[E];
  }
  e.reverse = a;
  function l(p) {
    return !p || p[Symbol.iterator]().next().done === true;
  }
  e.isEmpty = l;
  function u(p) {
    return p[Symbol.iterator]().next().value;
  }
  e.first = u;
  function d(p, E) {
    let L = 0;
    for (const U of p) if (E(U, L++)) return true;
    return false;
  }
  e.some = d;
  function c(p, E) {
    for (const L of p) if (E(L)) return L;
  }
  e.find = c;
  function* g(p, E) {
    for (const L of p) E(L) && (yield L);
  }
  e.filter = g;
  function* w(p, E) {
    let L = 0;
    for (const U of p) yield E(U, L++);
  }
  e.map = w;
  function* T(p, E) {
    let L = 0;
    for (const U of p) yield* E(U, L++);
  }
  e.flatMap = T;
  function* O(...p) {
    for (const E of p) isIterable(E) ? yield* E : yield E;
  }
  e.concat = O;
  function R(p, E, L) {
    let U = L;
    for (const z of p) U = E(U, z);
    return U;
  }
  e.reduce = R;
  function M(p) {
    let E = 0;
    for (const L of p) E++;
    return E;
  }
  e.length = M;
  function* P(p, E, L = p.length) {
    for (E < -p.length && (E = 0), E < 0 && (E += p.length), L < 0 ? L += p.length : L > p.length && (L = p.length); E < L; E++) yield p[E];
  }
  e.slice = P;
  function A(p, E = Number.POSITIVE_INFINITY) {
    const L = [];
    if (E === 0) return [L, p];
    const U = p[Symbol.iterator]();
    for (let z = 0; z < E; z++) {
      const C = U.next();
      if (C.done) return [L, e.empty()];
      L.push(C.value);
    }
    return [L, { [Symbol.iterator]() {
      return U;
    } }];
  }
  e.consume = A;
  async function ee(p) {
    const E = [];
    for await (const L of p) E.push(L);
    return Promise.resolve(E);
  }
  e.asyncToArray = ee;
})(Iterable || (Iterable = {}));
var shouldReportLeaks = void 0, reportedLifecycleMisuses = /* @__PURE__ */ new Set(), MAX_REPORTED_LIFECYCLE_MISUSES = 50;
function reportLifecycleMisuse(e, t) {
  if (disposableTracker?.onLifecycleMisuse?.(e, t), !shouldReportLeaks) return;
  const n = `${t}\0${e.stack ?? ""}`;
  reportedLifecycleMisuses.has(n) || reportedLifecycleMisuses.size >= MAX_REPORTED_LIFECYCLE_MISUSES || (reportedLifecycleMisuses.add(n), shouldReportLeaks(e, t));
}
function reportPostDisposeWrite(e) {
  reportLifecycleMisuse(e, "disposable_post_dispose_set");
}
var TRACK_DISPOSABLES = false, disposableTracker = null, _DisposableTracker = class fe {
  constructor() {
    this.livingDisposables = /* @__PURE__ */ new Map();
  }
  getDisposableData(t) {
    let n = this.livingDisposables.get(t);
    return n || (n = { parent: null, source: null, isSingleton: false, value: t, idx: fe.idx++ }, this.livingDisposables.set(t, n)), n;
  }
  trackDisposable(t) {
    const n = this.getDisposableData(t);
    n.source || (n.source = new Error().stack);
  }
  setParent(t, n) {
    const i = this.getDisposableData(t);
    i.parent = n;
  }
  markAsDisposed(t) {
    this.livingDisposables.delete(t);
  }
  markAsSingleton(t) {
    this.getDisposableData(t).isSingleton = true;
  }
  getRootParent(t, n) {
    const i = n.get(t);
    if (i) return i;
    const s = t.parent ? this.getRootParent(this.getDisposableData(t.parent), n) : t;
    return n.set(t, s), s;
  }
  getTrackedDisposables() {
    const t = /* @__PURE__ */ new Map();
    return [...this.livingDisposables.entries()].filter(([, i]) => i.source !== null && !this.getRootParent(i, t).isSingleton).flatMap(([i]) => i);
  }
  computeLeakingDisposables(t = 10, n) {
    let i;
    if (n) i = n;
    else {
      const l = /* @__PURE__ */ new Map(), u = [...this.livingDisposables.values()].filter((c) => c.source !== null && !this.getRootParent(c, l).isSingleton);
      if (u.length === 0) return;
      const d = new Set(u.map((c) => c.value));
      if (i = u.filter((c) => !(c.parent && d.has(c.parent))), i.length === 0) throw new Error("There are cyclic diposable chains!");
    }
    if (!i) return;
    function s(l) {
      function u(c, g) {
        for (; c.length > 0 && g.some((w) => typeof w == "string" ? w === c[0] : c[0].match(w)); ) c.shift();
      }
      const d = l.source.split(`
`).map((c) => c.trim().replace("at ", "")).filter((c) => c !== "");
      return u(d, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), d.reverse();
    }
    const r = new SetMap();
    for (const l of i) {
      const u = s(l);
      for (let d = 0; d <= u.length; d++) r.add(u.slice(0, d).join(`
`), l);
    }
    i.sort(compareBy((l) => l.idx, numberComparator));
    let o = "", a = 0;
    for (const l of i.slice(0, t)) {
      a++;
      const u = s(l), d = [];
      for (let c = 0; c < u.length; c++) {
        let g = u[c];
        g = `(shared with ${r.get(u.slice(0, c + 1).join(`
`)).size}/${i.length} leaks) at ${g}`;
        const T = r.get(u.slice(0, c).join(`
`)), O = groupBy([...T].map((R) => s(R)[c]), (R) => R);
        delete O[u[c]];
        for (const [R, M] of Object.entries(O)) d.unshift(`    - stacktraces of ${M.length} other leaks continue with ${R}`);
        d.unshift(g);
      }
      o += `


==================== Leaking disposable ${a}/${i.length}: ${l.value.constructor.name} ====================
${d.join(`
`)}
============================================================

`;
    }
    return i.length > t && (o += `


... and ${i.length - t} more leaking disposables

`), { leaks: i, details: o };
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
      const n = new Error("Potentially leaked disposable").stack;
      setTimeout(() => {
        t[e] || console.log(n);
      }, 3e3);
    }
    setParent(t, n) {
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
  if (disposableTracker) for (const n of e) disposableTracker.setParent(n, t);
}
function dispose(e) {
  if (Iterable.is(e)) {
    let t;
    for (const n of e) if (n) try {
      n.dispose();
    } catch (i) {
      (t ??= []).push(i);
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
var _DisposableStore = class ie {
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
      const n = new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!");
      ie.DISABLE_DISPOSED_WARNING || console.warn(n.stack), reportPostDisposeWrite(n);
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
      const n = new Error("Trying to transfer a disposable out of a DisposableStore that has already been disposed of. The value may already be disposed!");
      ie.DISABLE_DISPOSED_WARNING || console.warn(n.stack), reportLifecycleMisuse(n, "disposable_use_after_dispose");
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
var MutableDisposable = class {
  constructor() {
    this._isDisposed = false, trackDisposable(this);
  }
  get value() {
    return this._isDisposed ? void 0 : this._value;
  }
  set value(e) {
    if (this._isDisposed) {
      if (e) {
        const t = new Error("Trying to set a value on a MutableDisposable that has already been disposed of. The value was disposed.");
        DisposableStore.DISABLE_DISPOSED_WARNING || console.warn(t.stack), reportPostDisposeWrite(t), e.dispose();
      }
      return;
    }
    e !== this._value && (this._value?.dispose(), e && setParentOfDisposable(e, this), this._value = e);
  }
  clear() {
    this.value = void 0;
  }
  dispose() {
    this._isDisposed = true, markAsDisposed(this), this._value?.dispose(), this._value = void 0;
  }
  clearAndLeak() {
    const e = this._value;
    return this._value = void 0, e && setParentOfDisposable(e, null), e;
  }
}, _Node = class se {
  constructor(t) {
    this.element = t, this.next = se.Undefined, this.prev = se.Undefined;
  }
};
_Node.Undefined = new _Node(void 0);
var hasPerformanceNow = globalThis.performance && typeof globalThis.performance.now == "function", StopWatch = class _e {
  static create(t) {
    return new _e(t);
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
  function t(m) {
    if (_enableSnapshotPotentialLeakWarning) {
      const { onDidAddListener: h } = m, _ = Stacktrace.create();
      let f = 0;
      m.onDidAddListener = () => {
        ++f === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), _.print()), h?.();
      };
    }
  }
  function n(m, h) {
    return w(m, () => {
    }, 0, void 0, true, void 0, h);
  }
  e.defer = n;
  function i(m) {
    return (h, _ = null, f) => {
      let b = false, v;
      return v = m((y) => {
        if (!b) return v ? v.dispose() : b = true, h.call(_, y);
      }, null, f), b && v.dispose(), v;
    };
  }
  e.once = i;
  function s(m, h) {
    return e.once(e.filter(m, h));
  }
  e.onceIf = s;
  function r(m, h, _) {
    return c((f, b = null, v) => m((y) => f.call(b, h(y)), null, v), _);
  }
  e.map = r;
  function o(m, h, _) {
    return c((f, b = null, v) => m((y) => {
      h(y), f.call(b, y);
    }, null, v), _);
  }
  e.forEach = o;
  function a(m, h, _) {
    return c((f, b = null, v) => m((y) => h(y) && f.call(b, y), null, v), _);
  }
  e.filter = a;
  function l(m) {
    return m;
  }
  e.signal = l;
  function u(...m) {
    return (h, _ = null, f) => {
      const b = combinedDisposable(...m.map((v) => v((y) => h.call(_, y))));
      return g(b, f);
    };
  }
  e.any = u;
  function d(m, h, _, f) {
    let b = _;
    return r(m, (v) => (b = h(b, v), b), f);
  }
  e.reduce = d;
  function c(m, h) {
    let _;
    const f = { onWillAddFirstListener() {
      _ = m(b.fire, b);
    }, onDidRemoveLastListener() {
      _?.dispose();
    } };
    h || t(f);
    const b = new Emitter(f);
    return h?.add(b), b.event;
  }
  function g(m, h) {
    return h instanceof Array ? h.push(m) : h && h.add(m), m;
  }
  function w(m, h, _ = 100, f = false, b = false, v, y) {
    let S, N, W, Q = 0, q;
    const ce = { leakWarningThreshold: v, onWillAddFirstListener() {
      S = m((ye) => {
        Q++, N = h(N, ye), f && !W && (Y.fire(N), N = void 0), q ??= () => {
          const Le = N;
          N = void 0, W = void 0, (!f || Q > 1) && Y.fire(Le), Q = 0;
        }, typeof _ == "number" ? (clearTimeout(W), W = setTimeout(q, _)) : W === void 0 && (W = 0, queueMicrotask(q));
      });
    }, onWillRemoveListener() {
      b && Q > 0 && q?.();
    }, onDidRemoveLastListener() {
      q = void 0, S.dispose();
    } };
    y || t(ce);
    const Y = new Emitter(ce);
    return y?.add(Y), Y.event;
  }
  e.debounce = w;
  function T(m, h = 0, _) {
    return e.debounce(m, (f, b) => f ? (f.push(b), f) : [b], h, void 0, true, void 0, _);
  }
  e.accumulate = T;
  function O(m, h = (f, b) => f === b, _) {
    let f = true, b;
    return a(m, (v) => {
      const y = f || !h(v, b);
      return f = false, b = v, y;
    }, _);
  }
  e.latch = O;
  function R(m, h, _) {
    return [e.filter(m, h, _), e.filter(m, (f) => !h(f), _)];
  }
  e.split = R;
  function M(m, h = false, _ = [], f) {
    let b = _.slice(), v = m((N) => {
      b ? b.push(N) : S.fire(N);
    });
    f && f.add(v);
    const y = () => {
      b?.forEach((N) => S.fire(N)), b = null;
    }, S = new Emitter({ onWillAddFirstListener() {
      v || (v = m((N) => S.fire(N)), f && f.add(v));
    }, onDidAddFirstListener() {
      b && (h ? setTimeout(y) : y());
    }, onDidRemoveLastListener() {
      v && v.dispose(), v = null;
    } });
    return f && f.add(S), S.event;
  }
  e.buffer = M;
  function P(m, h) {
    return (f, b, v) => {
      const y = h(new ee());
      return m(function(S) {
        const N = y.evaluate(S);
        N !== A && f.call(b, N);
      }, void 0, v);
    };
  }
  e.chain = P;
  const A = /* @__PURE__ */ Symbol("HaltChainable");
  class ee {
    constructor() {
      this.steps = [];
    }
    map(h) {
      return this.steps.push(h), this;
    }
    forEach(h) {
      return this.steps.push((_) => (h(_), _)), this;
    }
    filter(h) {
      return this.steps.push((_) => h(_) ? _ : A), this;
    }
    reduce(h, _) {
      let f = _;
      return this.steps.push((b) => (f = h(f, b), f)), this;
    }
    latch(h = (_, f) => _ === f) {
      let _ = true, f;
      return this.steps.push((b) => {
        const v = _ || !h(b, f);
        return _ = false, f = b, v ? b : A;
      }), this;
    }
    evaluate(h) {
      for (const _ of this.steps) if (h = _(h), h === A) break;
      return h;
    }
  }
  function p(m, h, _ = (f) => f) {
    const f = (...S) => y.fire(_(...S)), b = () => m.on(h, f), v = () => m.removeListener(h, f), y = new Emitter({ onWillAddFirstListener: b, onDidRemoveLastListener: v });
    return y.event;
  }
  e.fromNodeEventEmitter = p;
  function E(m) {
    let h;
    const _ = () => {
      h = m.subscribe((v) => b.fire(v));
    }, f = () => {
      h?.unsubscribe(), h = void 0;
    }, b = new Emitter({ onWillAddFirstListener: _, onDidRemoveLastListener: f });
    return b.event;
  }
  e.fromRxJS = E;
  function L(m, h, _ = (f) => f) {
    const f = (...S) => y.fire(_(...S)), b = () => m.addEventListener(h, f), v = () => m.removeEventListener(h, f), y = new Emitter({ onWillAddFirstListener: b, onDidRemoveLastListener: v });
    return y.event;
  }
  e.fromDOMEventEmitter = L;
  function U(m, h) {
    return new Promise((_) => i(m)(_, null, h));
  }
  e.toPromise = U;
  function z(m) {
    const h = new Emitter();
    return m.then((_) => {
      h.fire(_);
    }, () => {
      h.fire(void 0);
    }).finally(() => {
      h.dispose();
    }), h.event;
  }
  e.fromPromise = z;
  function C(m, h) {
    return m((_) => h.fire(_));
  }
  e.forward = C;
  function pe(m, h, _) {
    return h(_), m((f) => h(f));
  }
  e.runAndSubscribe = pe;
  class ve {
    constructor(h, _) {
      this._observable = h, this._counter = 0, this._hasChanged = false;
      const f = { onWillAddFirstListener: () => {
        h.addObserver(this), this._observable.reportChanges();
      }, onDidRemoveLastListener: () => {
        h.removeObserver(this);
      } };
      _ || t(f), this.emitter = new Emitter(f), _ && _.add(this.emitter);
    }
    beginUpdate(h) {
      this._counter++;
    }
    handlePossibleChange(h) {
    }
    handleChange(h, _) {
      this._hasChanged = true;
    }
    endUpdate(h) {
      this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = false, this.emitter.fire(this._observable.get())));
    }
  }
  function Ee(m, h) {
    return new ve(m, h).emitter.event;
  }
  e.fromObservable = Ee;
  function we(m) {
    return (h, _, f) => {
      let b = 0, v = false;
      const y = { beginUpdate() {
        b++;
      }, endUpdate() {
        b--, b === 0 && (m.reportChanges(), v && (v = false, h.call(_)));
      }, handlePossibleChange() {
      }, handleChange() {
        v = true;
      } };
      m.addObserver(y), m.reportChanges();
      const S = { dispose() {
        m.removeObserver(y);
      } };
      return f instanceof DisposableStore ? f.add(S) : Array.isArray(f) && f.push(S), S;
    };
  }
  e.fromObservableLight = we;
})(Event || (Event = {}));
var _EventProfiling = class re {
  constructor(t) {
    this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${re._idPool++}`, re.all.add(this);
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
  constructor(e, t, n = nextLeakageMonitorName()) {
    this._errorHandler = e, this.threshold = t, this.name = n, this._warnCountdown = 0;
  }
  dispose() {
    this._stacks?.clear();
  }
  check(e, t) {
    const n = this.threshold;
    if (n <= 0 || t < n) return;
    this._stacks || (this._stacks = /* @__PURE__ */ new Map());
    const i = e.value, s = this._stacks.get(i) || 0;
    if (this._stacks.set(i, s + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
      this._warnCountdown = n * 0.5;
      const [r, o] = this.getMostFrequentStack(), a = `[${this.name}] potential listener LEAK detected, having ${t} listeners already. MOST frequent listener (${o}):`;
      console.warn(a), console.warn(r);
      const l = o / t > 0.3 ? "dominated" : "popular", u = /^[0-9a-f]+$/i.test(this.name) ? void 0 : this.name, d = new ListenerLeakError(l, a, r, t, u);
      this._errorHandler(d), reportLifecycleMisuse(d, "emitter_listener_leak");
    }
    return () => {
      const r = this._stacks.get(i) || 0;
      r <= 1 ? this._stacks.delete(i) : this._stacks.set(i, r - 1);
    };
  }
  getMostFrequentStack() {
    if (!this._stacks) return;
    let e, t = 0;
    for (const [n, i] of this._stacks) (!e || t < i) && (e = [n, i], t = i);
    return e;
  }
}, Stacktrace = class me {
  constructor(t) {
    this.value = t;
  }
  static create() {
    const t = new Error();
    return new me(t.stack ?? "");
  }
  print() {
    console.warn(this.value.split(`
`).slice(2).join(`
`));
  }
}, ListenerLeakError = class extends Error {
  constructor(e, t, n, i, s) {
    super(s ? `[${s}] potential listener LEAK detected, ${e}` : `potential listener LEAK detected, ${e}`), this.name = "ListenerLeakError", this.kind = e, this.listenerCount = i, this.details = t, this.stack = n;
  }
}, ListenerRefusalError = class extends ListenerLeakError {
  constructor(e, t, n, i, s) {
    super(e, t, n, i, s), this.name = "ListenerRefusalError";
  }
}, UniqueContainer = class {
  constructor(e) {
    this.value = e;
  }
}, compactionThreshold = 2, forEachListener = (e, t) => {
  if (e instanceof UniqueContainer) t(e);
  else for (let n = 0; n < e.length; n++) {
    const i = e[n];
    i && t(i);
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
    return this._event ??= (e, t, n) => {
      if (this._leakWarningThreshold !== void 0 && this._size > this._leakWarningThreshold ** 2) {
        const a = this._getLeakageMonitor();
        if (a) {
          const l = `[${a.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${a.threshold})`;
          console.warn(l);
          const u = a.getMostFrequentStack() ?? ["UNKNOWN stack", -1], d = u[1] / this._size > 0.3 ? "dominated" : "popular", c = new ListenerRefusalError(d, `${l}. HINT: Stack shows most frequent listener (${u[1]}-times)`, u[0], this._size, this._options?.leakWarningName);
          return (this._options?.onListenerError || onUnexpectedError)(c), reportLifecycleMisuse(c, "emitter_listener_refusal"), Disposable.None;
        }
      }
      if (this._disposed) {
        const a = new Error("Trying to listen to an Emitter that has already been disposed of.");
        return reportLifecycleMisuse(a, "emitter_use_after_dispose"), Disposable.None;
      }
      t && (e = e.bind(t));
      const i = new UniqueContainer(e);
      let s, r;
      if (this._leakWarningThreshold !== void 0 && this._size >= Math.ceil(this._leakWarningThreshold * 0.2)) {
        const a = this._getLeakageMonitor();
        a && (i.stack = Stacktrace.create(), s = a.check(i.stack, this._size + 1));
      }
      _enableDisposeWithListenerWarning && (i.stack = r ?? Stacktrace.create()), this._listeners ? this._listeners instanceof UniqueContainer ? (this._deliveryQueue ??= new EventDeliveryQueuePrivate(), this._listeners = [this._listeners, i]) : this._listeners.push(i) : (this._options?.onWillAddFirstListener?.(this), this._listeners = i, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
      const o = toDisposable(() => {
        s?.(), this._removeListener(i);
      });
      return n instanceof DisposableStore ? n.add(o) : Array.isArray(n) && n.push(o), o;
    }, this._event;
  }
  _removeListener(e) {
    if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
    if (this._size === 1) {
      this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), this._size = 0;
      return;
    }
    const t = this._listeners, n = t.indexOf(e);
    if (n === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
    this._size--, t[n] = void 0;
    const i = this._deliveryQueue.current === this;
    if (this._size * compactionThreshold <= t.length) {
      let s = 0;
      for (let r = 0; r < t.length; r++) t[r] ? t[s++] = t[r] : i && s < this._deliveryQueue.end && (this._deliveryQueue.end--, s < this._deliveryQueue.i && this._deliveryQueue.i--);
      t.length = s;
    }
  }
  _deliver(e, t) {
    if (!e) return;
    const n = this._options?.onListenerError || onUnexpectedError;
    if (!n) {
      e.value(t);
      return;
    }
    try {
      e.value(t);
    } catch (i) {
      n(i);
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
  enqueue(e, t, n) {
    this.i = 0, this.end = n, this.current = e, this.value = t;
  }
  reset() {
    this.i = this.end, this.current = void 0, this.value = void 0;
  }
}, shortcutEvent = Object.freeze(function(e, t) {
  const n = setTimeout(e.bind(t), 0);
  return { dispose() {
    clearTimeout(n);
  } };
}), CancellationToken;
((e) => {
  function t(n) {
    return n === e.None || n === e.Cancelled || n instanceof MutableToken ? true : !n || typeof n != "object" ? false : typeof n.isCancellationRequested == "boolean" && typeof n.onCancellationRequested == "function";
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
function splitLines(e) {
  return e.split(/\r\n|\r|\n/);
}
function compare(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function compareSubstring(e, t, n = 0, i = e.length, s = 0, r = t.length) {
  for (; n < i && s < r; n++, s++) {
    const l = e.charCodeAt(n), u = t.charCodeAt(s);
    if (l < u) return -1;
    if (l > u) return 1;
  }
  const o = i - n, a = r - s;
  return o < a ? -1 : o > a ? 1 : 0;
}
function compareSubstringIgnoreCase(e, t, n = 0, i = e.length, s = 0, r = t.length) {
  for (; n < i && s < r; n++, s++) {
    let l = e.charCodeAt(n), u = t.charCodeAt(s);
    if (l === u) continue;
    if (l >= 128 || u >= 128) return compareSubstring(e.toLowerCase(), t.toLowerCase(), n, i, s, r);
    isLowerAsciiLetter(l) && (l -= 32), isLowerAsciiLetter(u) && (u -= 32);
    const d = l - u;
    if (d !== 0) return d;
  }
  const o = i - n, a = r - s;
  return o < a ? -1 : o > a ? 1 : 0;
}
function isLowerAsciiLetter(e) {
  return e >= 97 && e <= 122;
}
function isUpperAsciiLetter(e) {
  return e >= 65 && e <= 90;
}
function equalsIgnoreCase(e, t) {
  return e.length === t.length && compareSubstringIgnoreCase(e, t) === 0;
}
var CSI_SEQUENCE = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/, OSC_SEQUENCE = /(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/, ESC_SEQUENCE = /\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/, CONTROL_SEQUENCES = new RegExp("(?:" + [CSI_SEQUENCE.source, OSC_SEQUENCE.source, ESC_SEQUENCE.source].join("|") + ")", "g"), UTF8_BOM_CHARACTER = "\uFEFF", _GraphemeBreakTree = class V {
  static getInstance() {
    return V._INSTANCE || (V._INSTANCE = new V()), V._INSTANCE;
  }
  constructor() {
    this._data = getGraphemeBreakRawData();
  }
  getGraphemeBreakType(t) {
    if (t < 32) return t === 10 ? 3 : t === 13 ? 2 : 4;
    if (t < 127) return 0;
    const n = this._data, i = n.length / 3;
    let s = 1;
    for (; s <= i; ) if (t < n[3 * s]) s = 2 * s;
    else if (t > n[3 * s + 1]) s = 2 * s + 1;
    else return n[3 * s + 2];
    return 0;
  }
};
_GraphemeBreakTree._INSTANCE = null;
function getGraphemeBreakRawData() {
  return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
var _AmbiguousCharacters = class oe {
  constructor(t) {
    this.confusableDictionary = t;
  }
  static getInstance(t) {
    return oe.cache.get(Array.from(t).join(","));
  }
  static getLocales() {
    return oe._locales.value;
  }
  isAmbiguous(t) {
    return this.confusableDictionary.has(t);
  }
  containsAmbiguousCharacter(t) {
    for (let n = 0; n < t.length; n++) {
      const i = t.codePointAt(n);
      if (typeof i == "number" && this.isAmbiguous(i)) return true;
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
  function n(d) {
    const c = /* @__PURE__ */ new Map();
    for (let g = 0; g < d.length; g += 2) c.set(d[g], d[g + 1]);
    return c;
  }
  function i(d, c) {
    const g = new Map(d);
    for (const [w, T] of c) g.set(w, T);
    return g;
  }
  function s(d, c) {
    if (!d) return c;
    const g = /* @__PURE__ */ new Map();
    for (const [w, T] of d) c.has(w) && g.set(w, T);
    return g;
  }
  const r = _AmbiguousCharacters.ambiguousCharacterData.value;
  let o = t.filter((d) => !d.startsWith("_") && d in r);
  o.length === 0 && (o = ["_default"]);
  let a;
  for (const d of o) {
    const c = n(r[d]);
    a = s(a, c);
  }
  const l = n(r._common), u = i(l, a);
  return new _AmbiguousCharacters(u);
}), _AmbiguousCharacters._locales = new Lazy(() => Object.keys(_AmbiguousCharacters.ambiguousCharacterData.value).filter((e) => !e.startsWith("_")));
var _InvisibleCharacters = class H {
  static getRawData() {
    return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
  }
  static getData() {
    return this._data || (this._data = new Set([...Object.values(H.getRawData())].flat())), this._data;
  }
  static isInvisibleCharacter(t) {
    return H.getData().has(t);
  }
  static containsInvisibleCharacter(t) {
    for (let n = 0; n < t.length; n++) {
      const i = t.codePointAt(n);
      if (typeof i == "number" && (H.isInvisibleCharacter(i) || i === 32)) return true;
    }
    return false;
  }
  static get codePoints() {
    return H.getData();
  }
};
_InvisibleCharacters._data = void 0;
var Schemas;
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
  set(e, t, n) {
    this._hosts[e] = t, this._ports[e] = n;
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
    } catch (o) {
      return onUnexpectedError(o), e;
    }
    const t = e.authority;
    let n = this._hosts[t];
    n && n.indexOf(":") !== -1 && n.indexOf("[") === -1 && (n = `[${n}]`);
    const i = this._ports[t], s = this._connectionTokens[t];
    let r = `path=${encodeURIComponent(e.path)}`;
    return typeof s == "string" && (r += `&${connectionTokenQueryName}=${encodeURIComponent(s)}`), URI.from({ scheme: isWeb ? this._preferredWebSchema : Schemas.vscodeRemoteResource, authority: `${n}:${i}`, path: this._remoteResourcesPath, query: r });
  }
}, RemoteAuthorities = new RemoteAuthoritiesImpl();
function getServerProductSegment(e) {
  return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
var nodeModulesPath = "vs/../../node_modules", nodeModulesAsarPath = "vs/../../node_modules.asar", VSCODE_AUTHORITY = "vscode-app", _FileAccessImpl = class X {
  asBrowserUri(t) {
    const n = this.toUri(t);
    return this.uriToBrowserUri(n);
  }
  uriToBrowserUri(t) {
    return t.scheme === Schemas.vscodeRemote ? RemoteAuthorities.rewrite(t) : t.scheme === Schemas.file && (isNative || webWorkerOrigin === `${Schemas.vscodeFileResource}://${X.FALLBACK_AUTHORITY}`) ? t.with({ scheme: Schemas.vscodeFileResource, authority: t.authority || X.FALLBACK_AUTHORITY, query: null, fragment: null }) : t;
  }
  asFileUri(t) {
    const n = this.toUri(t);
    return this.uriToFileUri(n);
  }
  uriToFileUri(t) {
    return t.scheme === Schemas.vscodeFileResource ? t.with({ scheme: Schemas.file, authority: t.authority !== X.FALLBACK_AUTHORITY ? t.authority : null, query: null, fragment: null }) : t;
  }
  toUri(t) {
    if (URI.isUri(t)) return t;
    if (globalThis._VSCODE_FILE_ROOT) {
      const n = globalThis._VSCODE_FILE_ROOT;
      if (/^\w[\w\d+.-]*:\/\//.test(n)) return URI.joinPath(URI.parse(n, true), t);
      const i = join(n, t);
      return URI.file(i);
    }
    throw new Error("Cannot determine URI for module id!");
  }
};
_FileAccessImpl.FALLBACK_AUTHORITY = VSCODE_AUTHORITY;
var FileAccessImpl = _FileAccessImpl, FileAccess = new FileAccessImpl(), CacheControlheaders = Object.freeze({ "Cache-Control": "no-cache, no-store" }), DocumentPolicyheaders = Object.freeze({ "Document-Policy": "include-js-call-stacks-in-crash-reports, js-profiling" }), COI;
((e) => {
  const t = /* @__PURE__ */ new Map([["1", { "Cross-Origin-Opener-Policy": "same-origin" }], ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }], ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }]]);
  e.CoopAndCoep = Object.freeze(t.get("3"));
  const n = "vscode-coi";
  function i(r) {
    let o;
    typeof r == "string" ? o = new URL(r).searchParams : r instanceof URL ? o = r.searchParams : URI.isUri(r) && (o = new URL(r.toString(true)).searchParams);
    const a = o?.get(n);
    if (a) return t.get(a);
  }
  e.getHeadersFromQuery = i;
  function s(r, o, a) {
    if (!globalThis.crossOriginIsolated) return;
    const l = o && a ? "3" : a ? "2" : "1";
    r instanceof URLSearchParams ? r.set(n, l) : r[n] = l;
  }
  e.addSearchParam = s;
})(COI || (COI = {}));
var indexOfTable = new Lazy(() => new Uint8Array(256)), MAX_POOLED_ENCODE_SCRATCH_BYTES = 512 * 1024;
function readUInt32BE(e, t) {
  return e[t] * 2 ** 24 + e[t + 1] * 2 ** 16 + e[t + 2] * 2 ** 8 + e[t + 3];
}
function writeUInt32BE(e, t, n) {
  e[n + 3] = t, t = t >>> 8, e[n + 2] = t, t = t >>> 8, e[n + 1] = t, t = t >>> 8, e[n] = t;
}
var _schemePattern = /^\w[\w\d+.-]*$/, _singleSlashStart = /^\//, _doubleSlashStart = /^\/\//;
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
var _empty = "", _slash = "/", _regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, URI = class J {
  static isUri(t) {
    return t instanceof J ? true : t ? typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function" : false;
  }
  constructor(t, n, i, s, r, o = false) {
    typeof t == "object" ? (this.scheme = t.scheme || _empty, this.authority = t.authority || _empty, this.path = t.path || _empty, this.query = t.query || _empty, this.fragment = t.fragment || _empty) : (this.scheme = _schemeFix(t, o), this.authority = n || _empty, this.path = _referenceResolution(this.scheme, i || _empty), this.query = s || _empty, this.fragment = r || _empty, _validateUri(this, o));
  }
  get fsPath() {
    return uriToFsPath(this, false);
  }
  with(t) {
    if (!t) return this;
    let { scheme: n, authority: i, path: s, query: r, fragment: o } = t;
    return n === void 0 ? n = this.scheme : n === null && (n = _empty), i === void 0 ? i = this.authority : i === null && (i = _empty), s === void 0 ? s = this.path : s === null && (s = _empty), r === void 0 ? r = this.query : r === null && (r = _empty), o === void 0 ? o = this.fragment : o === null && (o = _empty), n === this.scheme && i === this.authority && s === this.path && r === this.query && o === this.fragment ? this : new Uri(n, i, s, r, o);
  }
  static parse(t, n = false) {
    const i = _regexp.exec(t);
    return i ? new Uri(i[2] || _empty, percentDecode(i[4] || _empty), percentDecode(i[5] || _empty), percentDecode(i[7] || _empty), percentDecode(i[9] || _empty), n) : new Uri(_empty, _empty, _empty, _empty, _empty);
  }
  static file(t) {
    let n = _empty;
    if (isWindows && (t = t.replace(/\\/g, _slash)), t[0] === _slash && t[1] === _slash) {
      const i = t.indexOf(_slash, 2);
      i === -1 ? (n = t.substring(2), t = _slash) : (n = t.substring(2, i), t = t.substring(i) || _slash);
    }
    return new Uri("file", n, t, _empty, _empty);
  }
  static from(t, n) {
    return new Uri(t.scheme, t.authority, t.path, t.query, t.fragment, n);
  }
  static joinPath(t, ...n) {
    if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
    let i;
    return isWindows && t.scheme === "file" ? i = J.file(win32.join(uriToFsPath(t, true), ...n)).path : i = posix.join(t.path, ...n), t.with({ path: i });
  }
  toString(t = false) {
    return _asFormatted(this, t);
  }
  toJSON() {
    return this;
  }
  static revive(t) {
    if (t) {
      if (t instanceof J) return t;
      {
        const n = new Uri(t);
        return n._formatted = t.external ?? null, n._fsPath = t._sep === _pathSepMarker ? t.fsPath ?? null : null, n;
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
function encodeURIComponentFast(e, t, n) {
  let i, s = -1;
  for (let r = 0; r < e.length; r++) {
    const o = e.charCodeAt(r);
    if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || o === 45 || o === 46 || o === 95 || o === 126 || t && o === 47 || n && o === 91 || n && o === 93 || n && o === 58) s !== -1 && (i += encodeURIComponent(e.substring(s, r)), s = -1), i !== void 0 && (i += e.charAt(r));
    else {
      i === void 0 && (i = e.substr(0, r));
      const a = encodeTable[o];
      a !== void 0 ? (s !== -1 && (i += encodeURIComponent(e.substring(s, r)), s = -1), i += a) : s === -1 && (s = r);
    }
  }
  return s !== -1 && (i += encodeURIComponent(e.substring(s))), i !== void 0 ? i : e;
}
function encodeURIComponentMinimal(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const i = e.charCodeAt(n);
    i === 35 || i === 63 ? (t === void 0 && (t = e.substr(0, n)), t += encodeTable[i]) : t !== void 0 && (t += e[n]);
  }
  return t !== void 0 ? t : e;
}
function uriToFsPath(e, t) {
  let n;
  return e.authority && e.path.length > 1 && e.scheme === "file" ? n = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? n = e.path.substr(1) : n = e.path[1].toLowerCase() + e.path.substr(2) : n = e.path, isWindows && (n = n.replace(/\//g, "\\")), n;
}
function _asFormatted(e, t) {
  const n = t ? encodeURIComponentMinimal : encodeURIComponentFast;
  let i = "", { scheme: s, authority: r, path: o, query: a, fragment: l } = e;
  if (s && (i += s, i += ":"), (r || s === "file") && (i += _slash, i += _slash), r) {
    let u = r.indexOf("@");
    if (u !== -1) {
      const d = r.substr(0, u);
      r = r.substr(u + 1), u = d.lastIndexOf(":"), u === -1 ? i += n(d, false, false) : (i += n(d.substr(0, u), false, false), i += ":", i += n(d.substr(u + 1), false, true)), i += "@";
    }
    r = r.toLowerCase(), u = r.lastIndexOf(":"), u === -1 ? i += n(r, false, true) : (i += n(r.substr(0, u), false, true), i += r.substr(u));
  }
  if (o) {
    if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
      const u = o.charCodeAt(1);
      u >= 65 && u <= 90 && (o = `/${String.fromCharCode(u + 32)}:${o.substr(3)}`);
    } else if (o.length >= 2 && o.charCodeAt(1) === 58) {
      const u = o.charCodeAt(0);
      u >= 65 && u <= 90 && (o = `${String.fromCharCode(u + 32)}:${o.substr(2)}`);
    }
    i += n(o, true, false);
  }
  return a && (i += "?", i += n(a, false, false)), l && (i += "#", i += t ? l : encodeURIComponentFast(l, false, false)), i;
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
function isPathSeparator2(e) {
  return e === 47 || e === 92;
}
function toSlashes(e) {
  return e.replace(/[\\/]/g, posix.sep);
}
function toPosixPath(e) {
  return e.indexOf("/") === -1 && (e = toSlashes(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
}
function getRoot(e, t = posix.sep) {
  if (!e) return "";
  const n = e.length, i = e.charCodeAt(0);
  if (isPathSeparator2(i)) {
    if (isPathSeparator2(e.charCodeAt(1)) && !isPathSeparator2(e.charCodeAt(2))) {
      let r = 3;
      const o = r;
      for (; r < n && !isPathSeparator2(e.charCodeAt(r)); r++) ;
      if (o !== r && !isPathSeparator2(e.charCodeAt(r + 1))) {
        for (r += 1; r < n; r++) if (isPathSeparator2(e.charCodeAt(r))) return e.slice(0, r + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (isWindowsDriveLetter(i) && e.charCodeAt(1) === 58) return isPathSeparator2(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  let s = e.indexOf("://");
  if (s !== -1) {
    for (s += 3; s < n; s++) if (isPathSeparator2(e.charCodeAt(s))) return e.slice(0, s + 1);
  }
  return "";
}
function prefixEqualCaseSensitive(e, t, n) {
  return n === 0 ? true : e.charCodeAt(0) !== t.charCodeAt(0) ? false : n === 1 ? true : e.charCodeAt(n - 1) !== t.charCodeAt(n - 1) ? false : e.startsWith(t);
}
function prefixEqualIgnoreCase(e, t, n) {
  for (let i = 0; i < n; i++) {
    let s = e.charCodeAt(i), r = t.charCodeAt(i);
    if (s !== r) {
      if (s >= 128 || r >= 128) return compareSubstringIgnoreCase(e, t, i, n, i, n) === 0;
      if (s >= 97 && s <= 122 && (s -= 32), r >= 97 && r <= 122 && (r -= 32), s !== r) return false;
    }
  }
  return true;
}
function isEqualOrParent(e, t, n, i = sep) {
  if (e === t) return true;
  if (!e || !t) return false;
  const s = e.length, r = t.length;
  if (r > s) return false;
  const o = i.charCodeAt(0), a = t.charCodeAt(r - 1) === o;
  if (r < s && !a && e.charCodeAt(r) !== o) return false;
  if (n) {
    if (!prefixEqualIgnoreCase(e, t, r)) return false;
  } else if (!prefixEqualCaseSensitive(e, t, r)) return false;
  return r === s || a ? true : e.charCodeAt(r) === o;
}
function isWindowsDriveLetter(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
function originalFSPath(e) {
  return uriToFsPath(e, true);
}
var ExtUri = class {
  constructor(e) {
    this._ignorePathCasing = e;
  }
  compare(e, t, n = false) {
    return e === t ? 0 : compare(this.getComparisonKey(e, n), this.getComparisonKey(t, n));
  }
  isEqual(e, t, n = false) {
    return e === t ? true : !e || !t ? false : this.getComparisonKey(e, n) === this.getComparisonKey(t, n);
  }
  getComparisonKey(e, t = false) {
    return e.with({ path: this._ignorePathCasing(e) ? e.path.toLowerCase() : void 0, fragment: t ? null : void 0 }).toString();
  }
  ignorePathCasing(e) {
    return this._ignorePathCasing(e);
  }
  isEqualOrParent(e, t, n = false) {
    if (e.scheme === t.scheme) {
      if (e.scheme === Schemas.file) return isEqualOrParent(originalFSPath(e), originalFSPath(t), this._ignorePathCasing(e)) && e.query === t.query && (n || e.fragment === t.fragment);
      if (isEqualAuthority(e.authority, t.authority)) return isEqualOrParent(e.path, t.path, this._ignorePathCasing(e), "/") && e.query === t.query && (n || e.fragment === t.fragment);
    }
    return false;
  }
  joinPath(e, ...t) {
    return URI.joinPath(e, ...t);
  }
  basenameOrAuthority(e) {
    return basename2(e) || e.authority;
  }
  basename(e) {
    return posix.basename(e.path);
  }
  extname(e) {
    return posix.extname(e.path);
  }
  dirname(e) {
    if (e.path.length === 0) return e;
    let t;
    return e.scheme === Schemas.file ? t = URI.file(dirname(originalFSPath(e))).path : (t = posix.dirname(e.path), e.authority && t.length && t.charCodeAt(0) !== 47 && (console.error(`dirname("${e.toString})) resulted in a relative path`), t = "/")), e.with({ path: t });
  }
  normalizePath(e) {
    if (!e.path.length) return e;
    let t;
    return e.scheme === Schemas.file ? t = URI.file(normalize(originalFSPath(e))).path : t = posix.normalize(e.path), e.with({ path: t });
  }
  relativePath(e, t) {
    if (e.scheme !== t.scheme || !isEqualAuthority(e.authority, t.authority)) return;
    if (e.scheme === Schemas.file) {
      const s = relative(originalFSPath(e), originalFSPath(t));
      return isWindows ? toSlashes(s) : s;
    }
    let n = e.path || "/";
    const i = t.path || "/";
    if (this._ignorePathCasing(e)) {
      let s = 0;
      for (const r = Math.min(n.length, i.length); s < r && !(n.charCodeAt(s) !== i.charCodeAt(s) && n.charAt(s).toLowerCase() !== i.charAt(s).toLowerCase()); s++) ;
      n = i.substr(0, s) + n.substr(s);
    }
    return posix.relative(n, i);
  }
  resolvePath(e, t) {
    if (e.scheme === Schemas.file) {
      const n = URI.file(resolve(originalFSPath(e), t));
      return e.with({ authority: n.authority, path: n.path });
    }
    return t = toPosixPath(t), e.with({ path: posix.resolve(e.path, t) });
  }
  isAbsolutePath(e) {
    return !!e.path && e.path[0] === "/";
  }
  isEqualAuthority(e, t) {
    return e === t || e !== void 0 && t !== void 0 && equalsIgnoreCase(e, t);
  }
  hasTrailingPathSeparator(e, t = sep) {
    if (e.scheme === Schemas.file) {
      const n = originalFSPath(e);
      return n.length > getRoot(n).length && n[n.length - 1] === t;
    } else {
      const n = e.path;
      return n.length > 1 && n.charCodeAt(n.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath);
    }
  }
  removeTrailingPathSeparator(e, t = sep) {
    return hasTrailingPathSeparator(e, t) ? e.with({ path: e.path.substr(0, e.path.length - 1) }) : e;
  }
  addTrailingPathSeparator(e, t = sep) {
    let n = false;
    if (e.scheme === Schemas.file) {
      const i = originalFSPath(e);
      n = i !== void 0 && i.length === getRoot(i).length && i[i.length - 1] === t;
    } else {
      t = "/";
      const i = e.path;
      n = i.length === 1 && i.charCodeAt(i.length - 1) === 47;
    }
    return !n && !hasTrailingPathSeparator(e, t) ? e.with({ path: e.path + "/" }) : e;
  }
}, extUri = new ExtUri(() => false), extUriBiasedIgnorePathCase = new ExtUri((e) => e.scheme === Schemas.file ? !isLinux : true), extUriIgnorePathCase = new ExtUri((e) => true), isEqual = extUri.isEqual.bind(extUri), isEqualOrParent2 = extUri.isEqualOrParent.bind(extUri), getComparisonKey = extUri.getComparisonKey.bind(extUri), basenameOrAuthority = extUri.basenameOrAuthority.bind(extUri), basename2 = extUri.basename.bind(extUri), extname2 = extUri.extname.bind(extUri), dirname2 = extUri.dirname.bind(extUri), joinPath = extUri.joinPath.bind(extUri), normalizePath = extUri.normalizePath.bind(extUri), relativePath = extUri.relativePath.bind(extUri), resolvePath = extUri.resolvePath.bind(extUri), isAbsolutePath = extUri.isAbsolutePath.bind(extUri), isEqualAuthority = extUri.isEqualAuthority.bind(extUri), hasTrailingPathSeparator = extUri.hasTrailingPathSeparator.bind(extUri), removeTrailingPathSeparator = extUri.removeTrailingPathSeparator.bind(extUri), addTrailingPathSeparator = extUri.addTrailingPathSeparator.bind(extUri), DataUri;
((e) => {
  e.META_DATA_LABEL = "label", e.META_DATA_DESCRIPTION = "description", e.META_DATA_SIZE = "size", e.META_DATA_MIME = "mime";
  function t(n) {
    const i = /* @__PURE__ */ new Map();
    n.path.substring(n.path.indexOf(";") + 1, n.path.lastIndexOf(";")).split(";").forEach((o) => {
      const [a, l] = o.split(":");
      a && l && i.set(a, l);
    });
    const r = n.path.substring(0, n.path.indexOf(";"));
    return r && i.set(e.META_DATA_MIME, r), i;
  }
  e.parseMetaData = t;
})(DataUri || (DataUri = {}));
var TMScopeRegistry = class {
  constructor() {
    this._scopeNameToLanguageRegistration = /* @__PURE__ */ Object.create(null);
  }
  reset() {
    this._scopeNameToLanguageRegistration = /* @__PURE__ */ Object.create(null);
  }
  register(e) {
    if (this._scopeNameToLanguageRegistration[e.scopeName]) {
      const t = this._scopeNameToLanguageRegistration[e.scopeName];
      isEqual(t.location, e.location) || console.warn(`Overwriting grammar scope name to file mapping for scope ${e.scopeName}.
Old grammar file: ${t.location.toString()}.
New grammar file: ${e.location.toString()}`);
    }
    this._scopeNameToLanguageRegistration[e.scopeName] = e;
  }
  getGrammarDefinition(e) {
    return this._scopeNameToLanguageRegistration[e] || null;
  }
}, missingTMGrammarErrorMessage = "No TM Grammar registered for this language.", TMGrammarFactory = class extends Disposable {
  constructor(e, t, n, i) {
    super(), this._host = e, this._initialState = n.INITIAL, this._scopeRegistry = new TMScopeRegistry(), this._injections = {}, this._injectedEmbeddedLanguages = {}, this._languageToScope = /* @__PURE__ */ new Map(), this._grammarRegistry = this._register(new n.Registry({ onigLib: i, loadGrammar: async (s) => {
      const r = this._scopeRegistry.getGrammarDefinition(s);
      if (!r) return this._host.logTrace(`No grammar found for scope ${s}`), null;
      const o = r.location;
      try {
        const a = await this._host.readFile(o);
        return n.parseRawGrammar(a, o.path);
      } catch (a) {
        return this._host.logError(`Unable to load and parse grammar for scope ${s} from ${o}`, a), null;
      }
    }, getInjections: (s) => {
      const r = s.split(".");
      let o = [];
      for (let a = 1; a <= r.length; a++) {
        const l = r.slice(0, a).join(".");
        o = [...o, ...this._injections[l] || []];
      }
      return o;
    } }));
    for (const s of t) {
      if (this._scopeRegistry.register(s), s.injectTo) {
        for (const r of s.injectTo) {
          let o = this._injections[r];
          o || (this._injections[r] = o = []), o.push(s.scopeName);
        }
        if (s.embeddedLanguages) for (const r of s.injectTo) {
          let o = this._injectedEmbeddedLanguages[r];
          o || (this._injectedEmbeddedLanguages[r] = o = []), o.push(s.embeddedLanguages);
        }
      }
      s.language && this._languageToScope.set(s.language, s.scopeName);
    }
  }
  has(e) {
    return this._languageToScope.has(e);
  }
  setTheme(e, t) {
    this._grammarRegistry.setTheme(e, t);
  }
  getColorMap() {
    return this._grammarRegistry.getColorMap();
  }
  async createGrammar(e, t) {
    const n = this._languageToScope.get(e);
    if (typeof n != "string") throw new Error(missingTMGrammarErrorMessage);
    const i = this._scopeRegistry.getGrammarDefinition(n);
    if (!i) throw new Error(missingTMGrammarErrorMessage);
    const s = i.embeddedLanguages;
    if (this._injectedEmbeddedLanguages[n]) {
      const a = this._injectedEmbeddedLanguages[n];
      for (const l of a) for (const u of Object.keys(l)) s[u] = l[u];
    }
    const r = Object.keys(s).length > 0;
    let o;
    try {
      o = await this._grammarRegistry.loadGrammarWithConfiguration(n, t, { embeddedLanguages: s, tokenTypes: i.tokenTypes, balancedBracketSelectors: i.balancedBracketSelectors, unbalancedBracketSelectors: i.unbalancedBracketSelectors });
    } catch (a) {
      throw a.message && a.message.startsWith("No grammar provided for") ? new Error(missingTMGrammarErrorMessage) : a;
    }
    return { languageId: e, grammar: o, initialState: this._initialState, containsEmbeddedLanguages: r, sourceExtensionId: i.sourceExtensionId };
  }
}, _hex = [];
for (let e = 0; e < 256; e++) _hex.push(e.toString(16).padStart(2, "0"));
var generateUuid = (function() {
  if (typeof crypto.randomUUID == "function") return crypto.randomUUID.bind(crypto);
  const e = new Uint8Array(16);
  return function() {
    crypto.getRandomValues(e), e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128;
    let n = 0, i = "";
    return i += _hex[e[n++]], i += _hex[e[n++]], i += _hex[e[n++]], i += _hex[e[n++]], i += "-", i += _hex[e[n++]], i += _hex[e[n++]], i += "-", i += _hex[e[n++]], i += _hex[e[n++]], i += "-", i += _hex[e[n++]], i += _hex[e[n++]], i += "-", i += _hex[e[n++]], i += _hex[e[n++]], i += _hex[e[n++]], i += _hex[e[n++]], i += _hex[e[n++]], i += _hex[e[n++]], i;
  };
})(), canASAR = false, DefineCall = class {
  constructor(e, t, n) {
    this.id = e, this.dependencies = t, this.callback = n;
  }
}, _AMDModuleImporter = class {
  constructor() {
    this._isWebWorker = typeof self == "object" && self.constructor && self.constructor.name === "DedicatedWorkerGlobalScope", this._isRenderer = typeof document == "object", this._defineCalls = [], this._state = 1;
  }
  _initialize() {
    if (this._state === 1) {
      if (globalThis.define) {
        this._state = 3;
        return;
      }
    } else return;
    this._state = 2, globalThis.define = (t, n, i) => {
      typeof t != "string" && (i = n, n = t, t = null), (typeof n != "object" || !Array.isArray(n)) && (i = n, n = null), this._defineCalls.push(new DefineCall(t, n, i));
    }, globalThis.define.amd = true, this._isRenderer ? this._amdPolicy = globalThis._VSCODE_WEB_PACKAGE_TTP ?? window.trustedTypes?.createPolicy("amdLoader", { createScriptURL(t) {
      if (t.startsWith(window.location.origin) || t.startsWith(`${Schemas.vscodeFileResource}://${VSCODE_AUTHORITY}`)) return t;
      throw new Error(`[trusted_script_src] Invalid script url: ${t}`);
    } }) : this._isWebWorker && (this._amdPolicy = globalThis._VSCODE_WEB_PACKAGE_TTP ?? globalThis.trustedTypes?.createPolicy("amdLoader", { createScriptURL(t) {
      return t;
    } }));
  }
  async load(t) {
    if (this._initialize(), this._state === 3) return new Promise((o) => {
      const a = generateUuid();
      globalThis.define(a, [t], function(l) {
        o(l);
      });
    });
    const n = await (this._isWebWorker ? this._workerLoadScript(t) : this._isRenderer ? this._rendererLoadScript(t) : this._nodeJSLoadScript(t));
    if (!n) {
      console.warn(`Did not receive a define call from script ${t}`);
      return;
    }
    const i = {}, s = [], r = [];
    if (Array.isArray(n.dependencies)) for (const o of n.dependencies) o === "exports" ? s.push(i) : r.push(o);
    if (r.length > 0) throw new Error(`Cannot resolve dependencies for script ${t}. The dependencies are: ${r.join(", ")}`);
    return typeof n.callback == "function" ? n.callback(...s) ?? i : n.callback;
  }
  _rendererLoadScript(t) {
    return new Promise((n, i) => {
      const s = document.createElement("script");
      s.setAttribute("async", "async"), s.setAttribute("type", "text/javascript");
      const r = () => {
        s.removeEventListener("load", o), s.removeEventListener("error", a);
      }, o = (l) => {
        r(), n(this._defineCalls.pop());
      }, a = (l) => {
        r(), i(l);
      };
      s.addEventListener("load", o), s.addEventListener("error", a), this._amdPolicy && (t = this._amdPolicy.createScriptURL(t)), s.setAttribute("src", t), window.document.getElementsByTagName("head")[0].appendChild(s);
    });
  }
  async _workerLoadScript(t) {
    return this._amdPolicy && (t = this._amdPolicy.createScriptURL(t)), await import(t), this._defineCalls.pop();
  }
  async _nodeJSLoadScript(t) {
    try {
      const n = (await import("fs")).default, i = (await import("vm")).default, s = (await import("module")).default, r = URI.parse(t).fsPath, o = n.readFileSync(r).toString(), a = s.wrap(o.replace(/^#!.*/, ""));
      return new i.Script(a).runInThisContext().apply(), this._defineCalls.pop();
    } catch (n) {
      throw n;
    }
  }
};
_AMDModuleImporter.INSTANCE = new _AMDModuleImporter();
var AMDModuleImporter = _AMDModuleImporter, cache = /* @__PURE__ */ new Map();
async function importAMDNodeModule(e, t, n) {
  n === void 0 && (n = !!(globalThis._VSCODE_PRODUCT_JSON ?? globalThis.vscode?.context?.configuration()?.product)?.commit);
  const i = t ? `${e}/${t}` : e;
  if (cache.has(i)) return cache.get(i);
  let s;
  if (/^\w[\w\d+.-]*:\/\//.test(i)) s = i;
  else {
    const l = `${canASAR && n && !isWeb ? nodeModulesAsarPath : nodeModulesPath}/${i}`;
    s = FileAccess.asBrowserUri(l).toString(true);
  }
  const r = AMDModuleImporter.INSTANCE.load(s);
  return cache.set(i, r), r;
}
var MicrotaskDelay = /* @__PURE__ */ Symbol("MicrotaskDelay"), RunOnceScheduler = class {
  constructor(e, t) {
    this.timeoutToken = -1, this.runner = e, this.timeout = t, this.timeoutHandler = this.onTimeout.bind(this);
  }
  dispose() {
    this.cancel(), this.runner = null;
  }
  cancel() {
    this.isScheduled() && (clearTimeout(this.timeoutToken), this.timeoutToken = -1);
  }
  schedule(e = this.timeout) {
    this.cancel(), this.timeoutToken = setTimeout(this.timeoutHandler, e);
  }
  get delay() {
    return this.timeout;
  }
  set delay(e) {
    this.timeout = e;
  }
  isScheduled() {
    return this.timeoutToken !== -1;
  }
  flush() {
    this.isScheduled() && (this.cancel(), this.doRun());
  }
  onTimeout() {
    this.timeoutToken = -1, this.runner && this.doRun();
  }
  doRun() {
    this.runner?.();
  }
}, runWhenGlobalIdle, _runWhenIdle;
(function() {
  typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function" ? _runWhenIdle = (e, t, n) => {
    setTimeout0(() => {
      if (i) return;
      const s = Date.now() + 15;
      t(Object.freeze({ didTimeout: true, timeRemaining() {
        return Math.max(0, s - Date.now());
      } }));
    });
    let i = false;
    return { dispose() {
      i || (i = true);
    } };
  } : _runWhenIdle = (e, t, n) => {
    const i = e.requestIdleCallback(t, typeof n == "number" ? { timeout: n } : void 0);
    let s = false;
    return { dispose() {
      s || (s = true, e.cancelIdleCallback(i));
    } };
  }, runWhenGlobalIdle = (e, t) => _runWhenIdle(globalThis, e, t);
})();
var Promises;
((e) => {
  async function t(i) {
    let s;
    const r = await Promise.all(i.map((o) => o.then((a) => a, (a) => {
      s || (s = a);
    })));
    if (typeof s < "u") throw s;
    return r;
  }
  e.settled = t;
  function n(i) {
    return new Promise(async (s, r) => {
      try {
        await i(s, r);
      } catch (o) {
        r(o);
      }
    });
  }
  e.withAsyncBody = n;
})(Promises || (Promises = {}));
var _AsyncIterableObject = class D {
  static fromArray(t) {
    return new D((n) => {
      n.emitMany(t);
    });
  }
  static fromPromise(t) {
    return new D(async (n) => {
      n.emitMany(await t);
    });
  }
  static fromPromisesResolveOrder(t) {
    return new D(async (n) => {
      await Promise.all(t.map(async (i) => n.emitOne(await i)));
    });
  }
  static merge(t) {
    return new D(async (n) => {
      await Promise.all(t.map(async (i) => {
        for await (const s of i) n.emitOne(s);
      }));
    });
  }
  constructor(t, n) {
    this._state = 0, this._results = [], this._error = null, this._onReturn = n, this._onStateChanged = new Emitter(), queueMicrotask(async () => {
      const i = { emitOne: (s) => this.emitOne(s), emitMany: (s) => this.emitMany(s), reject: (s) => this.reject(s) };
      try {
        await Promise.resolve(t(i)), this.resolve();
      } catch (s) {
        this.reject(s);
      } finally {
        i.emitOne = void 0, i.emitMany = void 0, i.reject = void 0;
      }
    });
  }
  [Symbol.asyncIterator]() {
    let t = 0;
    return { next: async () => {
      do {
        if (this._state === 2) throw this._error;
        if (t < this._results.length) return { done: false, value: this._results[t++] };
        if (this._state === 1) return { done: true, value: void 0 };
        await Event.toPromise(this._onStateChanged.event);
      } while (true);
    }, return: async () => (this._onReturn?.(), { done: true, value: void 0 }) };
  }
  static map(t, n) {
    return new D(async (i) => {
      for await (const s of t) i.emitOne(n(s));
    });
  }
  map(t) {
    return D.map(this, t);
  }
  static filter(t, n) {
    return new D(async (i) => {
      for await (const s of t) n(s) && i.emitOne(s);
    });
  }
  filter(t) {
    return D.filter(this, t);
  }
  static coalesce(t) {
    return D.filter(t, (n) => !!n);
  }
  coalesce() {
    return D.coalesce(this);
  }
  static async toPromise(t) {
    const n = [];
    for await (const i of t) n.push(i);
    return n;
  }
  toPromise() {
    return D.toPromise(this);
  }
  emitOne(t) {
    this._state === 0 && (this._results.push(t), this._onStateChanged.fire());
  }
  emitMany(t) {
    this._state === 0 && (this._results = this._results.concat(t), this._onStateChanged.fire());
  }
  resolve() {
    this._state === 0 && (this._state = 1, this._onStateChanged.fire());
  }
  reject(t) {
    this._state === 0 && (this._state = 2, this._error = t, this._onStateChanged.fire());
  }
};
_AsyncIterableObject.EMPTY = _AsyncIterableObject.fromArray([]);
var DebugNameData = class {
  constructor(e, t, n) {
    this.owner = e, this.debugNameSource = t, this.referenceFn = n;
  }
  getDebugName(e) {
    return getDebugName(e, this);
  }
}, countPerName = /* @__PURE__ */ new Map(), cachedDebugName = /* @__PURE__ */ new WeakMap();
function getDebugName(e, t) {
  const n = cachedDebugName.get(e);
  if (n) return n;
  const i = computeDebugName(e, t);
  if (i) {
    let s = countPerName.get(i) ?? 0;
    s++, countPerName.set(i, s);
    const r = s === 1 ? i : `${i}#${s}`;
    return cachedDebugName.set(e, r), r;
  }
}
function computeDebugName(e, t) {
  const n = cachedDebugName.get(e);
  if (n) return n;
  const i = t.owner ? formatOwner(t.owner) + "." : "";
  let s;
  const r = t.debugNameSource;
  if (r !== void 0) if (typeof r == "function") {
    if (s = r(), s !== void 0) return i + s;
  } else return i + r;
  const o = t.referenceFn;
  if (o !== void 0 && (s = getFunctionName(o), s !== void 0)) return i + s;
  if (t.owner !== void 0) {
    const a = findKey(t.owner, e);
    if (a !== void 0) return i + a;
  }
}
function findKey(e, t) {
  for (const n in e) if (e[n] === t) return n;
}
var countPerClassName = /* @__PURE__ */ new Map(), ownerId = /* @__PURE__ */ new WeakMap();
function formatOwner(e) {
  const t = ownerId.get(e);
  if (t) return t;
  const n = getClassName(e) ?? "Object";
  let i = countPerClassName.get(n) ?? 0;
  i++, countPerClassName.set(n, i);
  const s = i === 1 ? n : `${n}#${i}`;
  return ownerId.set(e, s), s;
}
function getClassName(e) {
  const t = e.constructor;
  if (t) return t.name === "Object" ? void 0 : t.name;
}
function getFunctionName(e) {
  const t = e.toString(), i = /\/\*\*\s*@description\s*([^*]*)\*\//.exec(t);
  return (i ? i[1] : void 0)?.trim();
}
var strictEquals = (e, t) => e === t, globalObservableLogger;
function addLogger(e) {
  globalObservableLogger ? globalObservableLogger instanceof ComposedLogger ? globalObservableLogger.loggers.push(e) : globalObservableLogger = new ComposedLogger([globalObservableLogger, e]) : globalObservableLogger = e;
}
function getLogger() {
  return globalObservableLogger;
}
var globalObservableLoggerFn = void 0;
function setLogObservableFn(e) {
  globalObservableLoggerFn = e;
}
function logObservable(e) {
  globalObservableLoggerFn && globalObservableLoggerFn(e);
}
var ComposedLogger = class {
  constructor(e) {
    this.loggers = e;
  }
  handleObservableCreated(e) {
    for (const t of this.loggers) t.handleObservableCreated(e);
  }
  handleOnListenerCountChanged(e, t) {
    for (const n of this.loggers) n.handleOnListenerCountChanged(e, t);
  }
  handleObservableUpdated(e, t) {
    for (const n of this.loggers) n.handleObservableUpdated(e, t);
  }
  handleAutorunCreated(e) {
    for (const t of this.loggers) t.handleAutorunCreated(e);
  }
  handleAutorunDisposed(e) {
    for (const t of this.loggers) t.handleAutorunDisposed(e);
  }
  handleAutorunDependencyChanged(e, t, n) {
    for (const i of this.loggers) i.handleAutorunDependencyChanged(e, t, n);
  }
  handleAutorunStarted(e) {
    for (const t of this.loggers) t.handleAutorunStarted(e);
  }
  handleAutorunFinished(e) {
    for (const t of this.loggers) t.handleAutorunFinished(e);
  }
  handleDerivedDependencyChanged(e, t, n) {
    for (const i of this.loggers) i.handleDerivedDependencyChanged(e, t, n);
  }
  handleDerivedCleared(e) {
    for (const t of this.loggers) t.handleDerivedCleared(e);
  }
  handleBeginTransaction(e) {
    for (const t of this.loggers) t.handleBeginTransaction(e);
  }
  handleEndTransaction(e) {
    for (const t of this.loggers) t.handleEndTransaction(e);
  }
}, _recomputeInitiallyAndOnChange;
function _setRecomputeInitiallyAndOnChange(e) {
  _recomputeInitiallyAndOnChange = e;
}
var _keepObserved;
function _setKeepObserved(e) {
  _keepObserved = e;
}
var _derived;
function _setDerivedOpts(e) {
  _derived = e;
}
var ConvenientObservable = class {
  get TChange() {
    return null;
  }
  reportChanges() {
    this.get();
  }
  read(e) {
    return e ? e.readObservable(this) : this.get();
  }
  map(e, t) {
    const n = t === void 0 ? void 0 : e, i = t === void 0 ? e : t;
    return _derived({ owner: n, debugName: () => {
      const s = getFunctionName(i);
      if (s !== void 0) return s;
      const o = /^\s*\(?\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*\)?\s*=>\s*\1(?:\??)\.([a-zA-Z_$][a-zA-Z_$0-9]*)\s*$/.exec(i.toString());
      if (o) return `${this.debugName}.${o[2]}`;
      if (!n) return `${this.debugName} (mapped)`;
    }, debugReferenceFn: i }, (s) => i(this.read(s), s));
  }
  flatten() {
    return _derived({ owner: void 0, debugName: () => `${this.debugName} (flattened)` }, (e) => this.read(e).read(e));
  }
  recomputeInitiallyAndOnChange(e, t) {
    return e.add(_recomputeInitiallyAndOnChange(this, t)), this;
  }
  keepObserved(e) {
    return e.add(_keepObserved(this)), this;
  }
  get debugValue() {
    return this.get();
  }
}, BaseObservable = class extends ConvenientObservable {
  constructor() {
    super(), this._observers = /* @__PURE__ */ new Set(), getLogger()?.handleObservableCreated(this);
  }
  addObserver(e) {
    const t = this._observers.size;
    this._observers.add(e), t === 0 && this.onFirstObserverAdded(), t !== this._observers.size && getLogger()?.handleOnListenerCountChanged(this, this._observers.size);
  }
  removeObserver(e) {
    const t = this._observers.delete(e);
    t && this._observers.size === 0 && this.onLastObserverRemoved(), t && getLogger()?.handleOnListenerCountChanged(this, this._observers.size);
  }
  onFirstObserverAdded() {
  }
  onLastObserverRemoved() {
  }
  log() {
    const e = !!getLogger();
    return logObservable(this), e || getLogger()?.handleObservableCreated(this), this;
  }
  debugGetObservers() {
    return this._observers;
  }
};
function transaction(e, t) {
  const n = new TransactionImpl(e, t);
  try {
    e(n);
  } finally {
    n.finish();
  }
}
function subtransaction(e, t, n) {
  e ? t(e) : transaction(t, n);
}
var TransactionImpl = class {
  constructor(e, t) {
    this._fn = e, this._getDebugName = t, this._updatingObservers = [], getLogger()?.handleBeginTransaction(this);
  }
  getDebugName() {
    return this._getDebugName ? this._getDebugName() : getFunctionName(this._fn);
  }
  updateObserver(e, t) {
    if (!this._updatingObservers) {
      handleBugIndicatingErrorRecovery("Transaction already finished!"), transaction((n) => {
        n.updateObserver(e, t);
      });
      return;
    }
    this._updatingObservers.push({ observer: e, observable: t }), e.beginUpdate(t);
  }
  finish() {
    const e = this._updatingObservers;
    if (!e) {
      handleBugIndicatingErrorRecovery("transaction.finish() has already been called!");
      return;
    }
    for (let t = 0; t < e.length; t++) {
      const { observer: n, observable: i } = e[t];
      n.endUpdate(i);
    }
    this._updatingObservers = null, getLogger()?.handleEndTransaction(this);
  }
  debugGetUpdatingObservers() {
    return this._updatingObservers;
  }
};
function handleBugIndicatingErrorRecovery(e) {
  const t = new Error("BugIndicatingErrorRecovery: " + e);
  onUnexpectedError(t), console.error("recovered from an error that indicates a bug", t);
}
function observableValue(e, t) {
  let n;
  return typeof e == "string" ? n = new DebugNameData(void 0, e, void 0) : n = new DebugNameData(e, void 0, void 0), new ObservableValue(n, t, strictEquals);
}
var ObservableValue = class extends BaseObservable {
  constructor(e, t, n) {
    super(), this._debugNameData = e, this._equalityComparator = n, this._value = t, getLogger()?.handleObservableUpdated(this, { hadValue: false, newValue: t, change: void 0, didChange: true, oldValue: void 0 });
  }
  get debugName() {
    return this._debugNameData.getDebugName(this) ?? "ObservableValue";
  }
  get() {
    return this._value;
  }
  set(e, t, n) {
    if (n === void 0 && this._equalityComparator(this._value, e)) return;
    let i;
    t || (t = i = new TransactionImpl(() => {
    }, () => `Setting ${this.debugName}`));
    try {
      const s = this._value;
      this._setValue(e), getLogger()?.handleObservableUpdated(this, { oldValue: s, newValue: e, change: n, didChange: true, hadValue: true });
      for (const r of this._observers) t.updateObserver(r, this), r.handleChange(this, n);
    } finally {
      i && i.finish();
    }
  }
  toString() {
    return `${this.debugName}: ${this._value}`;
  }
  _setValue(e) {
    this._value = e;
  }
  debugGetState() {
    return { value: this._value };
  }
  debugSetValue(e) {
    this._value = e;
  }
};
function autorun(e) {
  return new AutorunObserver(new DebugNameData(void 0, void 0, e), e, void 0, void 0);
}
var AutorunObserver = class {
  constructor(e, t, n, i) {
    this._debugNameData = e, this._runFn = t, this.createChangeSummary = n, this._handleChange = i, this._state = 2, this._updateCount = 0, this._disposed = false, this._dependencies = /* @__PURE__ */ new Set(), this._dependenciesToBeRemoved = /* @__PURE__ */ new Set(), this._isRunning = false, this._changeSummary = this.createChangeSummary?.(), getLogger()?.handleAutorunCreated(this), this._run(), trackDisposable(this);
  }
  get debugName() {
    return this._debugNameData.getDebugName(this) ?? "(anonymous)";
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      for (const e of this._dependencies) e.removeObserver(this);
      this._dependencies.clear(), getLogger()?.handleAutorunDisposed(this), markAsDisposed(this);
    }
  }
  _run() {
    const e = this._dependenciesToBeRemoved;
    this._dependenciesToBeRemoved = this._dependencies, this._dependencies = e, this._state = 3;
    try {
      if (!this._disposed) {
        getLogger()?.handleAutorunStarted(this);
        const t = this._changeSummary;
        try {
          this._changeSummary = this.createChangeSummary?.(), this._isRunning = true, this._runFn(this, t);
        } catch (n) {
          onBugIndicatingError(n);
        } finally {
          this._isRunning = false;
        }
      }
    } finally {
      this._disposed || getLogger()?.handleAutorunFinished(this);
      for (const t of this._dependenciesToBeRemoved) t.removeObserver(this);
      this._dependenciesToBeRemoved.clear();
    }
  }
  toString() {
    return `Autorun<${this.debugName}>`;
  }
  beginUpdate(e) {
    this._state === 3 && (this._state = 1), this._updateCount++;
  }
  endUpdate(e) {
    try {
      if (this._updateCount === 1) do {
        if (this._state === 1) {
          this._state = 3;
          for (const t of this._dependencies) if (t.reportChanges(), this._state === 2) break;
        }
        this._state !== 3 && this._run();
      } while (this._state !== 3);
    } finally {
      this._updateCount--;
    }
    assertFn(() => this._updateCount >= 0);
  }
  handlePossibleChange(e) {
    this._state === 3 && this._isDependency(e) && (this._state = 1);
  }
  handleChange(e, t) {
    if (this._isDependency(e)) {
      getLogger()?.handleAutorunDependencyChanged(this, e, t);
      try {
        (this._handleChange ? this._handleChange({ changedObservable: e, change: t, didChange: (i) => i === e }, this._changeSummary) : true) && (this._state = 2);
      } catch (n) {
        onBugIndicatingError(n);
      }
    }
  }
  _isDependency(e) {
    return this._dependencies.has(e) && !this._dependenciesToBeRemoved.has(e);
  }
  readObservable(e) {
    if (!this._isRunning) throw new BugIndicatingError("The reader object cannot be used outside its compute function!");
    if (this._disposed) return e.get();
    e.addObserver(this);
    const t = e.get();
    return this._dependencies.add(e), this._dependenciesToBeRemoved.delete(e), t;
  }
  debugGetState() {
    return { isRunning: this._isRunning, updateCount: this._updateCount, dependencies: this._dependencies, state: this._state };
  }
  debugRerun() {
    this._isRunning ? this._state = 2 : this._run();
  }
};
((e) => {
  e.Observer = AutorunObserver;
})(autorun || (autorun = {}));
function derivedOpts(e, t) {
  return new Derived(new DebugNameData(e.owner, e.debugName, e.debugReferenceFn), t, void 0, void 0, e.onLastObserverRemoved, e.equalsFn ?? strictEquals);
}
_setDerivedOpts(derivedOpts);
var Derived = class extends BaseObservable {
  constructor(e, t, n, i, s = void 0, r) {
    super(), this._debugNameData = e, this._computeFn = t, this.createChangeSummary = n, this._handleChange = i, this._handleLastObserverRemoved = s, this._equalityComparator = r, this._state = 0, this._value = void 0, this._updateCount = 0, this._dependencies = /* @__PURE__ */ new Set(), this._dependenciesToBeRemoved = /* @__PURE__ */ new Set(), this._changeSummary = void 0, this._isUpdating = false, this._isComputing = false, this._removedObserverToCallEndUpdateOn = null, this._isReaderValid = false, this._changeSummary = this.createChangeSummary?.();
  }
  get debugName() {
    return this._debugNameData.getDebugName(this) ?? "(anonymous)";
  }
  onLastObserverRemoved() {
    this._state = 0, this._value = void 0, getLogger()?.handleDerivedCleared(this);
    for (const e of this._dependencies) e.removeObserver(this);
    this._dependencies.clear(), this._handleLastObserverRemoved?.();
  }
  get() {
    if (this._isComputing, this._observers.size === 0) {
      let t;
      try {
        this._isReaderValid = true, t = this._computeFn(this, this.createChangeSummary?.());
      } finally {
        this._isReaderValid = false;
      }
      return this.onLastObserverRemoved(), t;
    } else {
      do {
        if (this._state === 1) {
          for (const t of this._dependencies) if (t.reportChanges(), this._state === 2) break;
        }
        this._state === 1 && (this._state = 3), this._state !== 3 && this._recompute();
      } while (this._state !== 3);
      return this._value;
    }
  }
  _recompute() {
    const e = this._dependenciesToBeRemoved;
    this._dependenciesToBeRemoved = this._dependencies, this._dependencies = e;
    const t = this._state !== 0, n = this._value;
    this._state = 3;
    let i = false;
    this._isComputing = true;
    try {
      const s = this._changeSummary;
      this._changeSummary = this.createChangeSummary?.();
      try {
        this._isReaderValid = true, this._value = this._computeFn(this, s);
      } finally {
        this._isReaderValid = false;
        for (const r of this._dependenciesToBeRemoved) r.removeObserver(this);
        this._dependenciesToBeRemoved.clear();
      }
      i = t && !this._equalityComparator(n, this._value), getLogger()?.handleObservableUpdated(this, { oldValue: n, newValue: this._value, change: void 0, didChange: i, hadValue: t });
    } catch (s) {
      onBugIndicatingError(s);
    }
    if (this._isComputing = false, i) for (const s of this._observers) s.handleChange(this, void 0);
  }
  toString() {
    return `LazyDerived<${this.debugName}>`;
  }
  beginUpdate(e) {
    if (this._isUpdating) throw new BugIndicatingError("Cyclic deriveds are not supported yet!");
    this._updateCount++, this._isUpdating = true;
    try {
      const t = this._updateCount === 1;
      if (this._state === 3 && (this._state = 1, !t)) for (const n of this._observers) n.handlePossibleChange(this);
      if (t) for (const n of this._observers) n.beginUpdate(this);
    } finally {
      this._isUpdating = false;
    }
  }
  endUpdate(e) {
    if (this._updateCount--, this._updateCount === 0) {
      const t = [...this._observers];
      for (const n of t) n.endUpdate(this);
      if (this._removedObserverToCallEndUpdateOn) {
        const n = [...this._removedObserverToCallEndUpdateOn];
        this._removedObserverToCallEndUpdateOn = null;
        for (const i of n) i.endUpdate(this);
      }
    }
    assertFn(() => this._updateCount >= 0);
  }
  handlePossibleChange(e) {
    if (this._state === 3 && this._dependencies.has(e) && !this._dependenciesToBeRemoved.has(e)) {
      this._state = 1;
      for (const t of this._observers) t.handlePossibleChange(this);
    }
  }
  handleChange(e, t) {
    if (this._dependencies.has(e) && !this._dependenciesToBeRemoved.has(e)) {
      getLogger()?.handleDerivedDependencyChanged(this, e, t);
      let n = false;
      try {
        n = this._handleChange ? this._handleChange({ changedObservable: e, change: t, didChange: (s) => s === e }, this._changeSummary) : true;
      } catch (s) {
        onBugIndicatingError(s);
      }
      const i = this._state === 3;
      if (n && (this._state === 1 || i) && (this._state = 2, i)) for (const s of this._observers) s.handlePossibleChange(this);
    }
  }
  readObservable(e) {
    if (!this._isReaderValid) throw new BugIndicatingError("The reader object cannot be used outside its compute function!");
    e.addObserver(this);
    const t = e.get();
    return this._dependencies.add(e), this._dependenciesToBeRemoved.delete(e), t;
  }
  addObserver(e) {
    const t = !this._observers.has(e) && this._updateCount > 0;
    super.addObserver(e), t && (this._removedObserverToCallEndUpdateOn && this._removedObserverToCallEndUpdateOn.has(e) ? this._removedObserverToCallEndUpdateOn.delete(e) : e.beginUpdate(this));
  }
  removeObserver(e) {
    this._observers.has(e) && this._updateCount > 0 && (this._removedObserverToCallEndUpdateOn || (this._removedObserverToCallEndUpdateOn = /* @__PURE__ */ new Set()), this._removedObserverToCallEndUpdateOn.add(e)), super.removeObserver(e);
  }
  debugGetState() {
    return { state: this._state, updateCount: this._updateCount, isComputing: this._isComputing, dependencies: this._dependencies, value: this._value };
  }
  debugSetValue(e) {
    this._value = e;
  }
};
function mutableDisposableSlot() {
  const e = new MutableDisposable();
  return markAsDisposed(e), e;
}
function observableFromEvent(...e) {
  let t, n, i;
  return e.length === 3 ? [t, n, i] = e : [n, i] = e, new FromEventObservable(new DebugNameData(t, void 0, i), n, i, () => FromEventObservable.globalTransaction, strictEquals);
}
var FromEventObservable = class extends BaseObservable {
  constructor(e, t, n, i, s) {
    super(), this._debugNameData = e, this.event = t, this._getValue = n, this._getTransaction = i, this._equalityComparator = s, this._hasValue = false, this._subscription = mutableDisposableSlot(), this.handleEvent = (r) => {
      const o = this._getValue(r), a = this._value, l = this._hasValue, u = !l || !this._equalityComparator(a, o);
      let d = false;
      u && (this._value = o, this._hasValue = true, l && (d = true, subtransaction(this._getTransaction(), (c) => {
        getLogger()?.handleObservableUpdated(this, { oldValue: a, newValue: o, change: void 0, didChange: u, hadValue: l });
        for (const g of this._observers) c.updateObserver(g, this), g.handleChange(this, void 0);
      }, () => {
        const c = this.getDebugName();
        return "Event fired" + (c ? `: ${c}` : "");
      }))), d || getLogger()?.handleObservableUpdated(this, { oldValue: a, newValue: o, change: void 0, didChange: u, hadValue: l });
    };
  }
  getDebugName() {
    return this._debugNameData.getDebugName(this);
  }
  get debugName() {
    const e = this.getDebugName();
    return "From Event" + (e ? `: ${e}` : "");
  }
  onFirstObserverAdded() {
    this._subscription.value = this.event(this.handleEvent);
  }
  onLastObserverRemoved() {
    this._subscription.clear(), this._hasValue = false, this._value = void 0;
  }
  get() {
    return this._subscription.value ? (this._hasValue || this.handleEvent(void 0), this._value) : this._getValue(void 0);
  }
  debugSetValue(e) {
    this._value = e;
  }
};
((e) => {
  e.Observer = FromEventObservable;
  function t(n, i) {
    let s = false;
    FromEventObservable.globalTransaction === void 0 && (FromEventObservable.globalTransaction = n, s = true);
    try {
      i();
    } finally {
      s && (FromEventObservable.globalTransaction = void 0);
    }
  }
  e.batchEventsGlobally = t;
})(observableFromEvent || (observableFromEvent = {}));
function keepObserved(e) {
  const t = new KeepAliveObserver(false, void 0);
  return e.addObserver(t), toDisposable(() => {
    e.removeObserver(t);
  });
}
_setKeepObserved(keepObserved);
function recomputeInitiallyAndOnChange(e, t) {
  const n = new KeepAliveObserver(true, t);
  e.addObserver(n);
  try {
    n.beginUpdate(e);
  } finally {
    n.endUpdate(e);
  }
  return toDisposable(() => {
    e.removeObserver(n);
  });
}
_setRecomputeInitiallyAndOnChange(recomputeInitiallyAndOnChange);
var KeepAliveObserver = class {
  constructor(e, t) {
    this._forceRecompute = e, this._handleValue = t, this._counter = 0;
  }
  beginUpdate(e) {
    this._counter++;
  }
  endUpdate(e) {
    this._counter === 1 && this._forceRecompute && (this._handleValue ? this._handleValue(e.get()) : e.reportChanges()), this._counter--;
  }
  handlePossibleChange(e) {
  }
  handleChange(e, t) {
  }
}, consoleObservableLogger;
function logObservableToConsole(e) {
  consoleObservableLogger || (consoleObservableLogger = new ConsoleObservableLogger(), addLogger(consoleObservableLogger)), consoleObservableLogger.addFilteredObj(e);
}
var ConsoleObservableLogger = class {
  constructor() {
    this.indentation = 0, this.changedObservablesSets = /* @__PURE__ */ new WeakMap();
  }
  addFilteredObj(e) {
    this._filteredObjects || (this._filteredObjects = /* @__PURE__ */ new Set()), this._filteredObjects.add(e);
  }
  _isIncluded(e) {
    return this._filteredObjects?.has(e) ?? true;
  }
  textToConsoleArgs(e) {
    return consoleTextToArgs([normalText(repeat("|  ", this.indentation)), e]);
  }
  formatInfo(e) {
    return e.hadValue ? e.didChange ? [normalText(" "), styled(formatValue(e.oldValue, 70), { color: "red", strikeThrough: true }), normalText(" "), styled(formatValue(e.newValue, 60), { color: "green" })] : [normalText(" (unchanged)")] : [normalText(" "), styled(formatValue(e.newValue, 60), { color: "green" }), normalText(" (initial)")];
  }
  handleObservableCreated(e) {
    if (e instanceof Derived) {
      const t = e;
      if (this.changedObservablesSets.set(t, /* @__PURE__ */ new Set()), false) {
        const i = [];
        t.__debugUpdating = i;
        const s = t.beginUpdate;
        t.beginUpdate = (o) => (i.push(o), s.apply(t, [o]));
        const r = t.endUpdate;
        t.endUpdate = (o) => {
          const a = i.indexOf(o);
          return a === -1 && console.error("endUpdate called without beginUpdate", t.debugName, o.debugName), i.splice(a, 1), r.apply(t, [o]);
        };
      }
    }
  }
  handleOnListenerCountChanged(e, t) {
  }
  handleObservableUpdated(e, t) {
    if (this._isIncluded(e)) {
      if (e instanceof Derived) {
        this._handleDerivedRecomputed(e, t);
        return;
      }
      console.log(...this.textToConsoleArgs([formatKind("observable value changed"), styled(e.debugName, { color: "BlueViolet" }), ...this.formatInfo(t)]));
    }
  }
  formatChanges(e) {
    if (e.size !== 0) return styled(" (changed deps: " + [...e].map((t) => t.debugName).join(", ") + ")", { color: "gray" });
  }
  handleDerivedDependencyChanged(e, t, n) {
    this._isIncluded(e) && this.changedObservablesSets.get(e)?.add(t);
  }
  _handleDerivedRecomputed(e, t) {
    if (!this._isIncluded(e)) return;
    const n = this.changedObservablesSets.get(e);
    n && (console.log(...this.textToConsoleArgs([formatKind("derived recomputed"), styled(e.debugName, { color: "BlueViolet" }), ...this.formatInfo(t), this.formatChanges(n), { data: [{ fn: e._debugNameData.referenceFn ?? e._computeFn }] }])), n.clear());
  }
  handleDerivedCleared(e) {
    this._isIncluded(e) && console.log(...this.textToConsoleArgs([formatKind("derived cleared"), styled(e.debugName, { color: "BlueViolet" })]));
  }
  handleFromEventObservableTriggered(e, t) {
    this._isIncluded(e) && console.log(...this.textToConsoleArgs([formatKind("observable from event triggered"), styled(e.debugName, { color: "BlueViolet" }), ...this.formatInfo(t), { data: [{ fn: e._getValue }] }]));
  }
  handleAutorunCreated(e) {
    this._isIncluded(e) && this.changedObservablesSets.set(e, /* @__PURE__ */ new Set());
  }
  handleAutorunDisposed(e) {
  }
  handleAutorunDependencyChanged(e, t, n) {
    this._isIncluded(e) && this.changedObservablesSets.get(e).add(t);
  }
  handleAutorunStarted(e) {
    const t = this.changedObservablesSets.get(e);
    t && (this._isIncluded(e) && console.log(...this.textToConsoleArgs([formatKind("autorun"), styled(e.debugName, { color: "BlueViolet" }), this.formatChanges(t), { data: [{ fn: e._debugNameData.referenceFn ?? e._runFn }] }])), t.clear(), this.indentation++);
  }
  handleAutorunFinished(e) {
    this.indentation--;
  }
  handleBeginTransaction(e) {
    let t = e.getDebugName();
    t === void 0 && (t = ""), this._isIncluded(e) && console.log(...this.textToConsoleArgs([formatKind("transaction"), styled(t, { color: "BlueViolet" }), { data: [{ fn: e._fn }] }])), this.indentation++;
  }
  handleEndTransaction() {
    this.indentation--;
  }
};
function consoleTextToArgs(e) {
  const t = new Array(), n = [];
  let i = "";
  function s(o) {
    if ("length" in o) for (const a of o) a && s(a);
    else "text" in o ? (i += `%c${o.text}`, t.push(o.style), o.data && n.push(...o.data)) : "data" in o && n.push(...o.data);
  }
  s(e);
  const r = [i, ...t];
  return r.push(...n), r;
}
function normalText(e) {
  return styled(e, { color: "black" });
}
function formatKind(e) {
  return styled(padStr(`${e}: `, 10), { color: "black", bold: true });
}
function styled(e, t = { color: "black" }) {
  function n(s) {
    return Object.entries(s).reduce((r, [o, a]) => `${r}${o}:${a};`, "");
  }
  const i = { color: t.color };
  return t.strikeThrough && (i["text-decoration"] = "line-through"), t.bold && (i["font-weight"] = "bold"), { text: e, style: n(i) };
}
function formatValue(e, t) {
  switch (typeof e) {
    case "number":
      return "" + e;
    case "string":
      return e.length + 2 <= t ? `"${e}"` : `"${e.substr(0, t - 7)}"+...`;
    case "boolean":
      return e ? "true" : "false";
    case "undefined":
      return "undefined";
    case "object":
      return e === null ? "null" : Array.isArray(e) ? formatArray(e, t) : formatObject(e, t);
    case "symbol":
      return e.toString();
    case "function":
      return `[[Function${e.name ? " " + e.name : ""}]]`;
    default:
      return "" + e;
  }
}
function formatArray(e, t) {
  let n = "[ ", i = true;
  for (const s of e) {
    if (i || (n += ", "), n.length - 5 > t) {
      n += "...";
      break;
    }
    i = false, n += `${formatValue(s, t - n.length)}`;
  }
  return n += " ]", n;
}
function formatObject(e, t) {
  if (typeof e.toString == "function" && e.toString !== Object.prototype.toString) {
    const r = e.toString();
    return r.length <= t ? r : r.substring(0, t - 3) + "...";
  }
  const n = getClassName(e);
  let i = n ? n + "(" : "{ ", s = true;
  for (const [r, o] of Object.entries(e)) {
    if (s || (i += ", "), i.length - 5 > t) {
      i += "...";
      break;
    }
    s = false, i += `${r}: ${formatValue(o, t - i.length)}`;
  }
  return i += n ? ")" : " }", i;
}
function repeat(e, t) {
  let n = "";
  for (let i = 1; i <= t; i++) n += e;
  return n;
}
function padStr(e, t) {
  for (; e.length < t; ) e += " ";
  return e;
}
var SimpleTypedRpcConnection = class ae {
  constructor(t, n) {
    this._channelFactory = t, this._getHandler = n, this._channel = this._channelFactory({ handleNotification: (r) => {
      const o = r, a = this._getHandler().notifications[o[0]];
      if (!a) throw new Error(`Unknown notification "${o[0]}"!`);
      a(...o[1]);
    }, handleRequest: (r) => {
      const o = r;
      try {
        return { type: "result", value: this._getHandler().requests[o[0]](...o[1]) };
      } catch (a) {
        return { type: "error", value: a };
      }
    } });
    const i = new Proxy({}, { get: (r, o) => {
      if (o !== "then") return async (...a) => {
        const l = await this._channel.sendRequest([o, a]);
        if (l.type === "error") throw l.value;
        return l.value;
      };
    } }), s = new Proxy({}, { get: (r, o) => {
      if (o !== "then") return (...a) => {
        this._channel.sendNotification([o, a]);
      };
    } });
    this.api = { notifications: s, requests: i };
  }
  static createHost(t, n) {
    return new ae(t, n);
  }
  static createClient(t, n) {
    return new ae(t, n);
  }
};
function registerDebugChannel(e, t) {
  const n = globalThis;
  let i = [], s;
  const { channel: r, handler: o } = createChannelFactoryFromDebugChannel({ sendNotification: (l) => {
    s ? s.sendNotification(l) : i.push(l);
  } });
  let a;
  return (n.$$debugValueEditor_debugChannels ?? (n.$$debugValueEditor_debugChannels = {}))[e] = (l) => {
    a = t(), s = l;
    for (const u of i) l.sendNotification(u);
    return i = [], o;
  }, SimpleTypedRpcConnection.createClient(r, () => {
    if (!a) throw new Error("Not supported");
    return a;
  });
}
function createChannelFactoryFromDebugChannel(e) {
  let t;
  return { channel: (i) => (t = i, { sendNotification: (s) => {
    e.sendNotification(s);
  }, sendRequest: (s) => {
    throw new Error("not supported");
  } }), handler: { handleRequest: (i) => i.type === "notification" ? t?.handleNotification(i.data) : t?.handleRequest(i.data) } };
}
function getFirstStackFrameOutsideOf(e, t) {
  const n = e.split(`
`);
  let i = -1;
  for (const s of n.slice(1)) {
    if (i++, t && t.test(s)) continue;
    const r = parseLine(s);
    if (r) return r;
  }
}
function parseLine(e) {
  const t = e.match(/\((.*):(\d+):(\d+)\)/);
  if (t) return { fileName: t[1], line: parseInt(t[2]), column: parseInt(t[3]), id: e };
  const n = e.match(/at ([^\(\)]*):(\d+):(\d+)/);
  if (n) return { fileName: n[1], line: parseInt(n[2]), column: parseInt(n[3]), id: e };
}
var Throttler = class {
  constructor() {
    this._timeout = void 0;
  }
  throttle(e, t) {
    this._timeout === void 0 && (this._timeout = setTimeout(() => {
      this._timeout = void 0, e();
    }, t));
  }
  dispose() {
    this._timeout !== void 0 && clearTimeout(this._timeout);
  }
};
function deepAssign(e, t) {
  for (const n in t) e[n] && typeof e[n] == "object" && t[n] && typeof t[n] == "object" ? deepAssign(e[n], t[n]) : e[n] = t[n];
}
function deepAssignDeleteNulls(e, t) {
  for (const n in t) t[n] === null ? delete e[n] : e[n] && typeof e[n] == "object" && t[n] && typeof t[n] == "object" ? deepAssignDeleteNulls(e[n], t[n]) : e[n] = t[n];
}
var _DevToolsLogger = class j {
  constructor() {
    this._declarationId = 0, this._instanceId = 0, this._declarations = /* @__PURE__ */ new Map(), this._instanceInfos = /* @__PURE__ */ new WeakMap(), this._aliveInstances = /* @__PURE__ */ new Map(), this._activeTransactions = /* @__PURE__ */ new Set(), this._channel = registerDebugChannel("observableDevTools", () => ({ notifications: { setDeclarationIdFilter: (t) => {
    }, logObservableValue: (t) => {
      console.log("logObservableValue", t);
    }, flushUpdates: () => {
      this._flushUpdates();
    }, resetUpdates: () => {
      this._pendingChanges = null, this._channel.api.notifications.handleChange(this._fullState, true);
    } }, requests: { getDeclarations: () => {
      const t = {};
      for (const n of this._declarations.values()) t[n.id] = n;
      return { decls: t };
    }, getSummarizedInstances: () => null, getObservableValueInfo: (t) => ({ observers: [...this._aliveInstances.get(t).debugGetObservers()].map((i) => this._formatObserver(i)).filter(isDefined) }), getDerivedInfo: (t) => {
      const n = this._aliveInstances.get(t);
      return { dependencies: [...n.debugGetState().dependencies].map((i) => this._formatObservable(i)).filter(isDefined), observers: [...n.debugGetObservers()].map((i) => this._formatObserver(i)).filter(isDefined) };
    }, getAutorunInfo: (t) => ({ dependencies: [...this._aliveInstances.get(t).debugGetState().dependencies].map((i) => this._formatObservable(i)).filter(isDefined) }), getTransactionState: () => this.getTransactionState(), setValue: (t, n) => {
      const i = this._aliveInstances.get(t);
      if (i instanceof Derived) i.debugSetValue(n);
      else if (i instanceof ObservableValue) i.debugSetValue(n);
      else if (i instanceof FromEventObservable) i.debugSetValue(n);
      else throw new BugIndicatingError("Observable is not supported");
      const s = [...i.debugGetObservers()];
      for (const r of s) r.beginUpdate(i);
      for (const r of s) r.handleChange(i, void 0);
      for (const r of s) r.endUpdate(i);
    }, getValue: (t) => {
      const n = this._aliveInstances.get(t);
      if (n instanceof Derived) return formatValue(n.debugGetState().value, 200);
      if (n instanceof ObservableValue) return formatValue(n.debugGetState().value, 200);
    } } })), this._pendingChanges = null, this._changeThrottler = new Throttler(), this._fullState = {}, this._flushUpdates = () => {
      this._pendingChanges !== null && (this._channel.api.notifications.handleChange(this._pendingChanges, false), this._pendingChanges = null);
    };
  }
  static getInstance() {
    return j._instance === void 0 && (j._instance = new j()), j._instance;
  }
  getTransactionState() {
    const t = [], n = [...this._activeTransactions];
    if (n.length === 0) return;
    const i = n.flatMap((r) => r.debugGetUpdatingObservers() ?? []).map((r) => r.observer), s = /* @__PURE__ */ new Set();
    for (; i.length > 0; ) {
      const r = i.shift();
      if (s.has(r)) continue;
      s.add(r);
      const o = this._getInfo(r, (a) => {
        s.has(a) || i.push(a);
      });
      o && t.push(o);
    }
    return { names: n.map((r) => r.getDebugName() ?? "tx"), affected: t };
  }
  _getObservableInfo(t) {
    const n = this._instanceInfos.get(t);
    if (!n) {
      onUnexpectedError(new BugIndicatingError("No info found"));
      return;
    }
    return n;
  }
  _getAutorunInfo(t) {
    const n = this._instanceInfos.get(t);
    if (!n) {
      onUnexpectedError(new BugIndicatingError("No info found"));
      return;
    }
    return n;
  }
  _getInfo(t, n) {
    if (t instanceof Derived) {
      const i = [...t.debugGetObservers()];
      for (const l of i) n(l);
      const s = this._getObservableInfo(t);
      if (!s) return;
      const r = t.debugGetState(), o = { name: t.debugName, instanceId: s.instanceId, updateCount: r.updateCount }, a = [...s.changedObservables].map((l) => this._instanceInfos.get(l)?.instanceId).filter(isDefined);
      if (r.isComputing) return { ...o, type: "observable/derived", state: "updating", changedDependencies: a, initialComputation: false };
      switch (r.state) {
        case 0:
          return { ...o, type: "observable/derived", state: "noValue" };
        case 3:
          return { ...o, type: "observable/derived", state: "upToDate" };
        case 2:
          return { ...o, type: "observable/derived", state: "stale", changedDependencies: a };
        case 1:
          return { ...o, type: "observable/derived", state: "possiblyStale" };
      }
    } else if (t instanceof AutorunObserver) {
      const i = this._getAutorunInfo(t);
      if (!i) return;
      const s = { name: t.debugName, instanceId: i.instanceId, updateCount: i.updateCount }, r = [...i.changedObservables].map((o) => this._instanceInfos.get(o).instanceId);
      if (t.debugGetState().isRunning) return { ...s, type: "autorun", state: "updating", changedDependencies: r };
      switch (t.debugGetState().state) {
        case 3:
          return { ...s, type: "autorun", state: "upToDate" };
        case 2:
          return { ...s, type: "autorun", state: "stale", changedDependencies: r };
        case 1:
          return { ...s, type: "autorun", state: "possiblyStale" };
      }
    }
  }
  _formatObservable(t) {
    const n = this._getObservableInfo(t);
    if (n) return { name: t.debugName, instanceId: n.instanceId };
  }
  _formatObserver(t) {
    if (t instanceof Derived) return { name: t.toString(), instanceId: this._getObservableInfo(t)?.instanceId };
    const n = this._getAutorunInfo(t);
    if (n) return { name: t.toString(), instanceId: n.instanceId };
  }
  _handleChange(t) {
    deepAssignDeleteNulls(this._fullState, t), this._pendingChanges === null ? this._pendingChanges = t : deepAssign(this._pendingChanges, t), this._changeThrottler.throttle(this._flushUpdates, 10);
  }
  _getDeclarationId(t) {
    let n = true, i;
    const s = Error;
    for (; ; ) {
      const o = s.stackTraceLimit;
      s.stackTraceLimit = n ? 6 : 20;
      const a = new Error().stack;
      s.stackTraceLimit = o;
      let l = getFirstStackFrameOutsideOf(a, /[/\\]observableInternal[/\\]|\.observe|[/\\]util(s)?\./);
      if (!n && !l && (l = getFirstStackFrameOutsideOf(a, /[/\\]observableInternal[/\\]|\.observe/)), l) {
        i = l;
        break;
      }
      if (!n) {
        console.error("Could not find location for declaration", new Error().stack), i = { fileName: "unknown", line: 0, column: 0, id: "unknown" };
        break;
      }
      n = false;
    }
    let r = this._declarations.get(i.id);
    return r === void 0 && (r = { id: this._declarationId++, type: t, url: i.fileName, line: i.line, column: i.column }, this._declarations.set(i.id, r), this._handleChange({ decls: { [r.id]: r } })), r.id;
  }
  handleObservableCreated(t) {
    const i = { declarationId: this._getDeclarationId("observable/value"), instanceId: this._instanceId++, listenerCount: 0, lastValue: void 0, updateCount: 0, changedObservables: /* @__PURE__ */ new Set() };
    this._instanceInfos.set(t, i);
  }
  handleOnListenerCountChanged(t, n) {
    const i = this._getObservableInfo(t);
    if (i) {
      if (i.listenerCount === 0 && n > 0) {
        const s = t instanceof Derived ? "observable/derived" : "observable/value";
        this._aliveInstances.set(i.instanceId, t), this._handleChange({ instances: { [i.instanceId]: { instanceId: i.instanceId, declarationId: i.declarationId, formattedValue: i.lastValue, type: s, name: t.debugName } } });
      } else i.listenerCount > 0 && n === 0 && (this._handleChange({ instances: { [i.instanceId]: null } }), this._aliveInstances.delete(i.instanceId));
      i.listenerCount = n;
    }
  }
  handleObservableUpdated(t, n) {
    if (t instanceof Derived) {
      this._handleDerivedRecomputed(t, n);
      return;
    }
    const i = this._getObservableInfo(t);
    i && n.didChange && (i.lastValue = formatValue(n.newValue, 30), i.listenerCount > 0 && this._handleChange({ instances: { [i.instanceId]: { formattedValue: i.lastValue } } }));
  }
  handleAutorunCreated(t) {
    const i = { declarationId: this._getDeclarationId("autorun"), instanceId: this._instanceId++, updateCount: 0, changedObservables: /* @__PURE__ */ new Set() };
    this._instanceInfos.set(t, i), this._aliveInstances.set(i.instanceId, t), i && this._handleChange({ instances: { [i.instanceId]: { instanceId: i.instanceId, declarationId: i.declarationId, runCount: 0, type: "autorun", name: t.debugName } } });
  }
  handleAutorunDisposed(t) {
    const n = this._getAutorunInfo(t);
    n && (this._handleChange({ instances: { [n.instanceId]: null } }), this._instanceInfos.delete(t), this._aliveInstances.delete(n.instanceId));
  }
  handleAutorunDependencyChanged(t, n, i) {
    const s = this._getAutorunInfo(t);
    s && s.changedObservables.add(n);
  }
  handleAutorunStarted(t) {
  }
  handleAutorunFinished(t) {
    const n = this._getAutorunInfo(t);
    n && (n.changedObservables.clear(), n.updateCount++, this._handleChange({ instances: { [n.instanceId]: { runCount: n.updateCount } } }));
  }
  handleDerivedDependencyChanged(t, n, i) {
    const s = this._getObservableInfo(t);
    s && s.changedObservables.add(n);
  }
  _handleDerivedRecomputed(t, n) {
    const i = this._getObservableInfo(t);
    if (!i) return;
    const s = formatValue(n.newValue, 30);
    i.updateCount++, i.changedObservables.clear(), i.lastValue = s, i.listenerCount > 0 && this._handleChange({ instances: { [i.instanceId]: { formattedValue: s, recomputationCount: i.updateCount } } });
  }
  handleDerivedCleared(t) {
    const n = this._getObservableInfo(t);
    n && (n.lastValue = void 0, n.changedObservables.clear(), n.listenerCount > 0 && this._handleChange({ instances: { [n.instanceId]: { formattedValue: void 0 } } }));
  }
  handleBeginTransaction(t) {
    this._activeTransactions.add(t);
  }
  handleEndTransaction(t) {
    this._activeTransactions.delete(t);
  }
};
_DevToolsLogger._instance = void 0;
var DevToolsLogger = _DevToolsLogger;
setLogObservableFn(logObservableToConsole);
var enableLogging = false;
enableLogging && addLogger(new ConsoleObservableLogger()), env && env.VSCODE_DEV_DEBUG && addLogger(DevToolsLogger.getInstance());
var OffsetRange = class x {
  constructor(t, n) {
    if (this.start = t, this.endExclusive = n, t > n) throw new BugIndicatingError(`Invalid range: ${this.toString()}`);
  }
  static fromTo(t, n) {
    return new x(t, n);
  }
  static addRange(t, n) {
    let i = 0;
    for (; i < n.length && n[i].endExclusive < t.start; ) i++;
    let s = i;
    for (; s < n.length && n[s].start <= t.endExclusive; ) s++;
    if (i === s) n.splice(i, 0, t);
    else {
      const r = Math.min(t.start, n[i].start), o = Math.max(t.endExclusive, n[s - 1].endExclusive);
      n.splice(i, s - i, new x(r, o));
    }
  }
  static tryCreate(t, n) {
    if (!(t > n)) return new x(t, n);
  }
  static ofLength(t) {
    return new x(0, t);
  }
  static ofStartAndLength(t, n) {
    return new x(t, t + n);
  }
  static emptyAt(t) {
    return new x(t, t);
  }
  get isEmpty() {
    return this.start === this.endExclusive;
  }
  delta(t) {
    return new x(this.start + t, this.endExclusive + t);
  }
  deltaStart(t) {
    return new x(this.start + t, this.endExclusive);
  }
  deltaEnd(t) {
    return new x(this.start, this.endExclusive + t);
  }
  get length() {
    return this.endExclusive - this.start;
  }
  toString() {
    return `[${this.start}, ${this.endExclusive})`;
  }
  equals(t) {
    return this.start === t.start && this.endExclusive === t.endExclusive;
  }
  containsRange(t) {
    return this.start <= t.start && t.endExclusive <= this.endExclusive;
  }
  contains(t) {
    return this.start <= t && t < this.endExclusive;
  }
  join(t) {
    return new x(Math.min(this.start, t.start), Math.max(this.endExclusive, t.endExclusive));
  }
  intersect(t) {
    const n = Math.max(this.start, t.start), i = Math.min(this.endExclusive, t.endExclusive);
    if (n <= i) return new x(n, i);
  }
  intersectionLength(t) {
    const n = Math.max(this.start, t.start), i = Math.min(this.endExclusive, t.endExclusive);
    return Math.max(0, i - n);
  }
  intersects(t) {
    const n = Math.max(this.start, t.start), i = Math.min(this.endExclusive, t.endExclusive);
    return n < i;
  }
  intersectsOrTouches(t) {
    const n = Math.max(this.start, t.start), i = Math.min(this.endExclusive, t.endExclusive);
    return n <= i;
  }
  isBefore(t) {
    return this.endExclusive <= t.start;
  }
  isAfter(t) {
    return this.start >= t.endExclusive;
  }
  slice(t) {
    return t.slice(this.start, this.endExclusive);
  }
  substring(t) {
    return t.substring(this.start, this.endExclusive);
  }
  clip(t) {
    if (this.isEmpty) throw new BugIndicatingError(`Invalid clipping range: ${this.toString()}`);
    return Math.max(this.start, Math.min(this.endExclusive - 1, t));
  }
  clipCyclic(t) {
    if (this.isEmpty) throw new BugIndicatingError(`Invalid clipping range: ${this.toString()}`);
    return t < this.start ? this.endExclusive - (this.start - t) % this.length : t >= this.endExclusive ? this.start + (t - this.start) % this.length : t;
  }
  map(t) {
    const n = [];
    for (let i = this.start; i < this.endExclusive; i++) n.push(t(i));
    return n;
  }
  forEach(t) {
    for (let n = this.start; n < this.endExclusive; n++) t(n);
  }
}, Position = class B {
  constructor(t, n) {
    this.lineNumber = t, this.column = n;
  }
  with(t = this.lineNumber, n = this.column) {
    return t === this.lineNumber && n === this.column ? this : new B(t, n);
  }
  delta(t = 0, n = 0) {
    return this.with(Math.max(1, this.lineNumber + t), Math.max(1, this.column + n));
  }
  equals(t) {
    return B.equals(this, t);
  }
  static equals(t, n) {
    return !t && !n ? true : !!t && !!n && t.lineNumber === n.lineNumber && t.column === n.column;
  }
  isBefore(t) {
    return B.isBefore(this, t);
  }
  static isBefore(t, n) {
    return t.lineNumber < n.lineNumber ? true : n.lineNumber < t.lineNumber ? false : t.column < n.column;
  }
  isBeforeOrEqual(t) {
    return B.isBeforeOrEqual(this, t);
  }
  static isBeforeOrEqual(t, n) {
    return t.lineNumber < n.lineNumber ? true : n.lineNumber < t.lineNumber ? false : t.column <= n.column;
  }
  static compare(t, n) {
    const i = t.lineNumber | 0, s = n.lineNumber | 0;
    if (i === s) {
      const r = t.column | 0, o = n.column | 0;
      return r - o;
    }
    return i - s;
  }
  clone() {
    return new B(this.lineNumber, this.column);
  }
  toString() {
    return "(" + this.lineNumber + "," + this.column + ")";
  }
  static lift(t) {
    return new B(t.lineNumber, t.column);
  }
  static isIPosition(t) {
    return t && typeof t.lineNumber == "number" && typeof t.column == "number";
  }
  toJSON() {
    return { lineNumber: this.lineNumber, column: this.column };
  }
}, Range = class k {
  constructor(t, n, i, s) {
    let r, o, a, l;
    t == null || typeof t == "number" || Number.isNaN(t) ? (r = t, o = n, a = i, l = s) : "startLineNumber" in t && "startColumn" in t ? (r = t.startLineNumber, o = t.startColumn, a = t.endLineNumber, l = t.endColumn) : (r = t.startLineNumber, o = 1, a = t.endLineNumberExclusive, l = 1), r > a || r === a && o > l ? (this.startLineNumber = a, this.startColumn = l, this.endLineNumber = r, this.endColumn = o) : (this.startLineNumber = r, this.startColumn = o, this.endLineNumber = a, this.endColumn = l);
  }
  asIRange() {
    return { startLineNumber: this.startLineNumber, startColumn: this.startColumn, endLineNumber: this.endLineNumber, endColumn: this.endColumn };
  }
  isEmpty() {
    return k.isEmpty(this);
  }
  static isEmpty(t) {
    return t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn;
  }
  containsPosition(t) {
    return k.containsPosition(this, t);
  }
  static containsPosition(t, n) {
    return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column < t.startColumn || n.lineNumber === t.endLineNumber && n.column > t.endColumn);
  }
  static strictContainsPosition(t, n) {
    return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column <= t.startColumn || n.lineNumber === t.endLineNumber && n.column >= t.endColumn);
  }
  containsRange(t) {
    return k.containsRange(this, t);
  }
  static containsRange(t, n) {
    return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn < t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn > t.endColumn);
  }
  strictContainsRange(t) {
    return k.strictContainsRange(this, t);
  }
  static strictContainsRange(t, n) {
    return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn <= t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn >= t.endColumn);
  }
  plusRange(t) {
    return k.plusRange(this, t);
  }
  static getRangeAbove(t, n) {
    const i = Math.max(t.startLineNumber - n, 1), s = t.startLineNumber;
    return new k(i, t.startColumn, s, t.startColumn);
  }
  static getRangeOnBelow(t, n, i) {
    const s = t.endLineNumber, r = Math.min(t.endLineNumber + n, i);
    return new k(s, t.endColumn, r, t.endColumn);
  }
  static getExtendedRange(t, n, i) {
    const s = Math.max(t.startLineNumber - n, 0), r = Math.min(t.endLineNumber + n, i);
    return new k(s, t.startColumn, r, t.endColumn);
  }
  static plusRange(t, n) {
    let i, s, r, o;
    return n.startLineNumber < t.startLineNumber ? (i = n.startLineNumber, s = n.startColumn) : n.startLineNumber === t.startLineNumber ? (i = n.startLineNumber, s = Math.min(n.startColumn, t.startColumn)) : (i = t.startLineNumber, s = t.startColumn), n.endLineNumber > t.endLineNumber ? (r = n.endLineNumber, o = n.endColumn) : n.endLineNumber === t.endLineNumber ? (r = n.endLineNumber, o = Math.max(n.endColumn, t.endColumn)) : (r = t.endLineNumber, o = t.endColumn), new k(i, s, r, o);
  }
  intersectRanges(t) {
    return k.intersectRanges(this, t);
  }
  static intersectRanges(t, n) {
    let i = t.startLineNumber, s = t.startColumn, r = t.endLineNumber, o = t.endColumn;
    const a = n.startLineNumber, l = n.startColumn, u = n.endLineNumber, d = n.endColumn;
    return i < a ? (i = a, s = l) : i === a && (s = Math.max(s, l)), r > u ? (r = u, o = d) : r === u && (o = Math.min(o, d)), i > r || i === r && s > o ? null : new k(i, s, r, o);
  }
  static inverseEditRange(t, n) {
    return { startLineNumber: t.startLineNumber, startColumn: t.startColumn, endLineNumber: t.startLineNumber + n.split(`
`).length - 1, endColumn: n.lastIndexOf(`
`) === -1 ? t.startColumn + n.length : n.length - n.lastIndexOf(`
`) };
  }
  whereIs(t) {
    return t.endLineNumber < this.startLineNumber || t.endLineNumber === this.startLineNumber && t.endColumn <= this.startColumn ? "before" : t.startLineNumber > this.endLineNumber || t.startLineNumber === this.endLineNumber && t.startColumn >= this.endColumn ? "after" : "overlapping";
  }
  static rangeAfterEdit(t, n) {
    const i = k.lift(t).whereIs(n.range);
    switch (i) {
      case "overlapping":
        throw new Error("Range is overlapping. The range after edit is ambiguous.");
      case "after":
        return t;
      case "before": {
        const s = n.text.split(`
`).length - 1 - (n.range.endLineNumber - n.range.startLineNumber);
        if (n.range.endLineNumber < t.startLineNumber) return { startLineNumber: t.startLineNumber + s, startColumn: t.startColumn, endLineNumber: t.endLineNumber + s, endColumn: t.endColumn };
        {
          const r = n.text.lastIndexOf(`
`) === -1 ? n.text.length : n.text.length - n.text.lastIndexOf(`
`) - 1, o = n.range.startLineNumber === n.range.endLineNumber ? n.range.endColumn - n.range.startColumn : n.range.endColumn - 1, a = r - o;
          return { startLineNumber: t.startLineNumber + s, startColumn: t.startColumn + a, endLineNumber: t.endLineNumber + s, endColumn: t.startLineNumber === t.endLineNumber ? t.endColumn + a : t.endColumn };
        }
      }
      default: {
        const s = i;
        return t;
      }
    }
  }
  equalsRange(t) {
    return k.equalsRange(this, t);
  }
  static equalsRange(t, n) {
    return !t && !n ? true : !!t && !!n && t.startLineNumber === n.startLineNumber && t.startColumn === n.startColumn && t.endLineNumber === n.endLineNumber && t.endColumn === n.endColumn;
  }
  getEndPosition() {
    return k.getEndPosition(this);
  }
  static getEndPosition(t) {
    return new Position(t.endLineNumber, t.endColumn);
  }
  getStartPosition() {
    return k.getStartPosition(this);
  }
  static getStartPosition(t) {
    return new Position(t.startLineNumber, t.startColumn);
  }
  toString() {
    return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
  }
  setEndPosition(t, n) {
    return new k(this.startLineNumber, this.startColumn, t, n);
  }
  setStartPosition(t, n) {
    return new k(t, n, this.endLineNumber, this.endColumn);
  }
  collapseToStart() {
    return k.collapseToStart(this);
  }
  static collapseToStart(t) {
    return new k(t.startLineNumber, t.startColumn, t.startLineNumber, t.startColumn);
  }
  collapseToEnd() {
    return k.collapseToEnd(this);
  }
  static collapseToEnd(t) {
    return new k(t.endLineNumber, t.endColumn, t.endLineNumber, t.endColumn);
  }
  delta(t) {
    return new k(this.startLineNumber + t, this.startColumn, this.endLineNumber + t, this.endColumn);
  }
  isSingleLine() {
    return this.startLineNumber === this.endLineNumber;
  }
  static fromPositions(t, n = t) {
    return new k(t.lineNumber, t.column, n.lineNumber, n.column);
  }
  static lift(t) {
    return t ? new k(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : null;
  }
  static isIRange(t) {
    return t && typeof t.startLineNumber == "number" && typeof t.startColumn == "number" && typeof t.endLineNumber == "number" && typeof t.endColumn == "number";
  }
  static areIntersectingOrTouching(t, n) {
    return !(t.endLineNumber < n.startLineNumber || t.endLineNumber === n.startLineNumber && t.endColumn < n.startColumn || n.endLineNumber < t.startLineNumber || n.endLineNumber === t.startLineNumber && n.endColumn < t.startColumn);
  }
  static areIntersecting(t, n) {
    return !(t.endLineNumber < n.startLineNumber || t.endLineNumber === n.startLineNumber && t.endColumn <= n.startColumn || n.endLineNumber < t.startLineNumber || n.endLineNumber === t.startLineNumber && n.endColumn <= t.startColumn);
  }
  static areOnlyIntersecting(t, n) {
    return !(t.endLineNumber < n.startLineNumber - 1 || t.endLineNumber === n.startLineNumber && t.endColumn < n.startColumn - 1 || n.endLineNumber < t.startLineNumber - 1 || n.endLineNumber === t.startLineNumber && n.endColumn < t.startColumn - 1);
  }
  static compareRangesUsingStarts(t, n) {
    if (t && n) {
      const r = t.startLineNumber | 0, o = n.startLineNumber | 0;
      if (r === o) {
        const a = t.startColumn | 0, l = n.startColumn | 0;
        if (a === l) {
          const u = t.endLineNumber | 0, d = n.endLineNumber | 0;
          if (u === d) {
            const c = t.endColumn | 0, g = n.endColumn | 0;
            return c - g;
          }
          return u - d;
        }
        return a - l;
      }
      return r - o;
    }
    return (t ? 1 : 0) - (n ? 1 : 0);
  }
  static compareRangesUsingEnds(t, n) {
    return t.endLineNumber === n.endLineNumber ? t.endColumn === n.endColumn ? t.startLineNumber === n.startLineNumber ? t.startColumn - n.startColumn : t.startLineNumber - n.startLineNumber : t.endColumn - n.endColumn : t.endLineNumber - n.endLineNumber;
  }
  static spansMultipleLines(t) {
    return t.endLineNumber > t.startLineNumber;
  }
  toJSON() {
    return this;
  }
}, LineRange = class I {
  static fromRange(t) {
    return new I(t.startLineNumber, t.endLineNumber);
  }
  static fromRangeInclusive(t) {
    return new I(t.startLineNumber, t.endLineNumber + 1);
  }
  static subtract(t, n) {
    return n ? t.startLineNumber < n.startLineNumber && n.endLineNumberExclusive < t.endLineNumberExclusive ? [new I(t.startLineNumber, n.startLineNumber), new I(n.endLineNumberExclusive, t.endLineNumberExclusive)] : n.startLineNumber <= t.startLineNumber && t.endLineNumberExclusive <= n.endLineNumberExclusive ? [] : n.endLineNumberExclusive < t.endLineNumberExclusive ? [new I(Math.max(n.endLineNumberExclusive, t.startLineNumber), t.endLineNumberExclusive)] : [new I(t.startLineNumber, Math.min(n.startLineNumber, t.endLineNumberExclusive))] : [t];
  }
  static joinMany(t) {
    if (t.length === 0) return [];
    let n = new LineRangeSet(t[0].slice());
    for (let i = 1; i < t.length; i++) n = n.getUnion(new LineRangeSet(t[i].slice()));
    return n.ranges;
  }
  static join(t) {
    if (t.length === 0) throw new BugIndicatingError("lineRanges cannot be empty");
    let n = t[0].startLineNumber, i = t[0].endLineNumberExclusive;
    for (let s = 1; s < t.length; s++) n = Math.min(n, t[s].startLineNumber), i = Math.max(i, t[s].endLineNumberExclusive);
    return new I(n, i);
  }
  static ofLength(t, n) {
    return new I(t, t + n);
  }
  static deserialize(t) {
    return new I(t[0], t[1]);
  }
  constructor(t, n) {
    if (t > n) throw new BugIndicatingError(`startLineNumber ${t} cannot be after endLineNumberExclusive ${n}`);
    this.startLineNumber = t, this.endLineNumberExclusive = n;
  }
  contains(t) {
    return this.startLineNumber <= t && t < this.endLineNumberExclusive;
  }
  get isEmpty() {
    return this.startLineNumber === this.endLineNumberExclusive;
  }
  delta(t) {
    return new I(this.startLineNumber + t, this.endLineNumberExclusive + t);
  }
  deltaLength(t) {
    return new I(this.startLineNumber, this.endLineNumberExclusive + t);
  }
  get length() {
    return this.endLineNumberExclusive - this.startLineNumber;
  }
  join(t) {
    return new I(Math.min(this.startLineNumber, t.startLineNumber), Math.max(this.endLineNumberExclusive, t.endLineNumberExclusive));
  }
  toString() {
    return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
  }
  intersect(t) {
    const n = Math.max(this.startLineNumber, t.startLineNumber), i = Math.min(this.endLineNumberExclusive, t.endLineNumberExclusive);
    if (n <= i) return new I(n, i);
  }
  intersectsStrict(t) {
    return this.startLineNumber < t.endLineNumberExclusive && t.startLineNumber < this.endLineNumberExclusive;
  }
  overlapOrTouch(t) {
    return this.startLineNumber <= t.endLineNumberExclusive && t.startLineNumber <= this.endLineNumberExclusive;
  }
  equals(t) {
    return this.startLineNumber === t.startLineNumber && this.endLineNumberExclusive === t.endLineNumberExclusive;
  }
  toInclusiveRange() {
    return this.isEmpty ? null : new Range(this.startLineNumber, 1, this.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER);
  }
  toExclusiveRange() {
    return new Range(this.startLineNumber, 1, this.endLineNumberExclusive, 1);
  }
  mapToLineArray(t) {
    const n = [];
    for (let i = this.startLineNumber; i < this.endLineNumberExclusive; i++) n.push(t(i));
    return n;
  }
  forEach(t) {
    for (let n = this.startLineNumber; n < this.endLineNumberExclusive; n++) t(n);
  }
  serialize() {
    return [this.startLineNumber, this.endLineNumberExclusive];
  }
  includes(t) {
    return this.startLineNumber <= t && t < this.endLineNumberExclusive;
  }
  toOffsetRange() {
    return new OffsetRange(this.startLineNumber - 1, this.endLineNumberExclusive - 1);
  }
  distanceToRange(t) {
    return this.endLineNumberExclusive <= t.startLineNumber ? t.startLineNumber - this.endLineNumberExclusive : t.endLineNumberExclusive <= this.startLineNumber ? this.startLineNumber - t.endLineNumberExclusive : 0;
  }
  distanceToLine(t) {
    return this.contains(t) ? 0 : t < this.startLineNumber ? this.startLineNumber - t : t - this.endLineNumberExclusive;
  }
  addMargin(t, n) {
    return new I(this.startLineNumber - t, this.endLineNumberExclusive + n);
  }
}, LineRangeSet = class $ {
  constructor(t = []) {
    this._normalizedRanges = t;
  }
  get ranges() {
    return this._normalizedRanges;
  }
  addRange(t) {
    if (t.length === 0) return;
    const n = findFirstIdxMonotonousOrArrLen(this._normalizedRanges, (s) => s.endLineNumberExclusive >= t.startLineNumber), i = findLastIdxMonotonous(this._normalizedRanges, (s) => s.startLineNumber <= t.endLineNumberExclusive) + 1;
    if (n === i) this._normalizedRanges.splice(n, 0, t);
    else if (n === i - 1) {
      const s = this._normalizedRanges[n];
      this._normalizedRanges[n] = s.join(t);
    } else {
      const s = this._normalizedRanges[n].join(this._normalizedRanges[i - 1]).join(t);
      this._normalizedRanges.splice(n, i - n, s);
    }
  }
  contains(t) {
    const n = findLastMonotonous(this._normalizedRanges, (i) => i.startLineNumber <= t);
    return !!n && n.endLineNumberExclusive > t;
  }
  intersects(t) {
    const n = findLastMonotonous(this._normalizedRanges, (i) => i.startLineNumber < t.endLineNumberExclusive);
    return !!n && n.endLineNumberExclusive > t.startLineNumber;
  }
  getUnion(t) {
    if (this._normalizedRanges.length === 0) return t;
    if (t._normalizedRanges.length === 0) return this;
    const n = [];
    let i = 0, s = 0, r = null;
    for (; i < this._normalizedRanges.length || s < t._normalizedRanges.length; ) {
      let o = null;
      if (i < this._normalizedRanges.length && s < t._normalizedRanges.length) {
        const a = this._normalizedRanges[i], l = t._normalizedRanges[s];
        a.startLineNumber < l.startLineNumber ? (o = a, i++) : (o = l, s++);
      } else i < this._normalizedRanges.length ? (o = this._normalizedRanges[i], i++) : (o = t._normalizedRanges[s], s++);
      r === null ? r = o : r.endLineNumberExclusive >= o.startLineNumber ? r = new LineRange(r.startLineNumber, Math.max(r.endLineNumberExclusive, o.endLineNumberExclusive)) : (n.push(r), r = o);
    }
    return r !== null && n.push(r), new $(n);
  }
  subtractFrom(t) {
    const n = findFirstIdxMonotonousOrArrLen(this._normalizedRanges, (o) => o.endLineNumberExclusive >= t.startLineNumber), i = findLastIdxMonotonous(this._normalizedRanges, (o) => o.startLineNumber <= t.endLineNumberExclusive) + 1;
    if (n === i) return new $([t]);
    const s = [];
    let r = t.startLineNumber;
    for (let o = n; o < i; o++) {
      const a = this._normalizedRanges[o];
      a.startLineNumber > r && s.push(new LineRange(r, a.startLineNumber)), r = a.endLineNumberExclusive;
    }
    return r < t.endLineNumberExclusive && s.push(new LineRange(r, t.endLineNumberExclusive)), new $(s);
  }
  toString() {
    return this._normalizedRanges.map((t) => t.toString()).join(", ");
  }
  getIntersection(t) {
    const n = [];
    let i = 0, s = 0;
    for (; i < this._normalizedRanges.length && s < t._normalizedRanges.length; ) {
      const r = this._normalizedRanges[i], o = t._normalizedRanges[s], a = r.intersect(o);
      a && !a.isEmpty && n.push(a), r.endLineNumberExclusive < o.endLineNumberExclusive ? i++ : s++;
    }
    return new $(n);
  }
  getWithDelta(t) {
    return new $(this._normalizedRanges.map((n) => n.delta(t)));
  }
};
function toUint32(e) {
  return e < 0 ? 0 : e > 4294967295 ? 4294967295 : e | 0;
}
var PrefixSumComputer = class {
  constructor(e) {
    this.values = e, this.prefixSum = new Uint32Array(e.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1;
  }
  getCount() {
    return this.values.length;
  }
  insertValues(e, t) {
    e = toUint32(e);
    const n = this.values, i = this.prefixSum, s = t.length;
    return s === 0 ? false : (this.values = new Uint32Array(n.length + s), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e), e + s), this.values.set(t, e), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)), true);
  }
  setValue(e, t) {
    return e = toUint32(e), t = toUint32(t), this.values[e] === t ? false : (this.values[e] = t, e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), true);
  }
  removeValues(e, t) {
    e = toUint32(e), t = toUint32(t);
    const n = this.values, i = this.prefixSum;
    if (e >= n.length) return false;
    const s = n.length - e;
    return t >= s && (t = s), t === 0 ? false : (this.values = new Uint32Array(n.length - t), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e + t), e), this.prefixSum = new Uint32Array(this.values.length), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)), true);
  }
  getTotalSum() {
    return this.values.length === 0 ? 0 : this._getPrefixSum(this.values.length - 1);
  }
  getPrefixSum(e) {
    return e < 0 ? 0 : (e = toUint32(e), this._getPrefixSum(e));
  }
  _getPrefixSum(e) {
    if (e <= this.prefixSumValidIndex[0]) return this.prefixSum[e];
    let t = this.prefixSumValidIndex[0] + 1;
    t === 0 && (this.prefixSum[0] = this.values[0], t++), e >= this.values.length && (e = this.values.length - 1);
    for (let n = t; n <= e; n++) this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n];
    return this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], e), this.prefixSum[e];
  }
  getIndexOf(e) {
    e = Math.floor(e), this.getTotalSum();
    let t = 0, n = this.values.length - 1, i = 0, s = 0, r = 0;
    for (; t <= n; ) if (i = t + (n - t) / 2 | 0, s = this.prefixSum[i], r = s - this.values[i], e < r) n = i - 1;
    else if (e >= s) t = i + 1;
    else break;
    return new PrefixSumIndexOfResult(i, e - r);
  }
}, PrefixSumIndexOfResult = class {
  constructor(e, t) {
    this.index = e, this.remainder = t, this._prefixSumIndexOfResultBrand = void 0, this.index = e, this.remainder = t;
  }
}, MEMORY_ESTIMATE_LINE_CHECK_INTERVAL = 64, MirrorTextModel = class {
  constructor(e, t, n, i) {
    this._uri = e, this._lines = t, this._eol = n, this._versionId = i, this._lineStarts = null, this._cachedTextValue = null;
  }
  dispose() {
    this._lines.length = 0;
  }
  get version() {
    return this._versionId;
  }
  getText() {
    return this._cachedTextValue === null && (this._cachedTextValue = this._lines.join(this._eol)), this._cachedTextValue;
  }
  getTextLength() {
    const e = this._lines.length - 1;
    return e < 0 ? 0 : (this._ensureLineStarts(), this._lineStarts.getPrefixSum(e - 1) + this._lines[e].length);
  }
  getMemoryEstimate(e) {
    let t = 0;
    for (let s = 0; s < this._lines.length; s++) {
      if (s % MEMORY_ESTIMATE_LINE_CHECK_INTERVAL === 0 && e?.shouldContinue?.() === false) return;
      t += this._lines[s].length;
    }
    const n = t * 2, i = this._cachedTextValue === null ? 0 : this._cachedTextValue.length * 2;
    return n + i;
  }
  onEvents(e) {
    e.eol && e.eol !== this._eol && (this._eol = e.eol, this._lineStarts = null);
    const t = e.changes;
    for (const n of t) this._acceptDeleteRange(n.range), this._acceptInsertText(new Position(n.range.startLineNumber, n.range.startColumn), n.text);
    this._versionId = e.versionId, this._cachedTextValue = null;
  }
  _ensureLineStarts() {
    if (!this._lineStarts) {
      const e = this._eol.length, t = this._lines.length, n = new Uint32Array(t);
      for (let i = 0; i < t; i++) n[i] = this._lines[i].length + e;
      this._lineStarts = new PrefixSumComputer(n);
    }
  }
  _setLineText(e, t) {
    this._lines[e] = t, this._lineStarts && this._lineStarts.setValue(e, this._lines[e].length + this._eol.length);
  }
  _acceptDeleteRange(e) {
    if (e.startLineNumber === e.endLineNumber) {
      if (e.startColumn === e.endColumn) return;
      this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.startLineNumber - 1].substring(e.endColumn - 1));
      return;
    }
    this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.endLineNumber - 1].substring(e.endColumn - 1)), this._lines.splice(e.startLineNumber, e.endLineNumber - e.startLineNumber), this._lineStarts && this._lineStarts.removeValues(e.startLineNumber, e.endLineNumber - e.startLineNumber);
  }
  _acceptInsertText(e, t) {
    if (t.length === 0) return;
    const n = splitLines(t);
    if (n.length === 1) {
      this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0] + this._lines[e.lineNumber - 1].substring(e.column - 1));
      return;
    }
    n[n.length - 1] += this._lines[e.lineNumber - 1].substring(e.column - 1), this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0]);
    const i = new Uint32Array(n.length - 1);
    for (let s = 1; s < n.length; s++) this._lines.splice(e.lineNumber + s - 1, 0, n[s]), i[s - 1] = n[s].length + this._eol.length;
    this._lineStarts && this._lineStarts.insertValues(e.lineNumber, i);
  }
}, CharCode = ((e) => (e[e.Null = 0] = "Null", e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.LineFeed = 10] = "LineFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Hash = 35] = "Hash", e[e.DollarSign = 36] = "DollarSign", e[e.PercentSign = 37] = "PercentSign", e[e.Ampersand = 38] = "Ampersand", e[e.SingleQuote = 39] = "SingleQuote", e[e.OpenParen = 40] = "OpenParen", e[e.CloseParen = 41] = "CloseParen", e[e.Asterisk = 42] = "Asterisk", e[e.Plus = 43] = "Plus", e[e.Comma = 44] = "Comma", e[e.Dash = 45] = "Dash", e[e.Period = 46] = "Period", e[e.Slash = 47] = "Slash", e[e.Digit0 = 48] = "Digit0", e[e.Digit1 = 49] = "Digit1", e[e.Digit2 = 50] = "Digit2", e[e.Digit3 = 51] = "Digit3", e[e.Digit4 = 52] = "Digit4", e[e.Digit5 = 53] = "Digit5", e[e.Digit6 = 54] = "Digit6", e[e.Digit7 = 55] = "Digit7", e[e.Digit8 = 56] = "Digit8", e[e.Digit9 = 57] = "Digit9", e[e.Colon = 58] = "Colon", e[e.Semicolon = 59] = "Semicolon", e[e.LessThan = 60] = "LessThan", e[e.Equals = 61] = "Equals", e[e.GreaterThan = 62] = "GreaterThan", e[e.QuestionMark = 63] = "QuestionMark", e[e.AtSign = 64] = "AtSign", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.OpenSquareBracket = 91] = "OpenSquareBracket", e[e.Backslash = 92] = "Backslash", e[e.CloseSquareBracket = 93] = "CloseSquareBracket", e[e.Caret = 94] = "Caret", e[e.Underline = 95] = "Underline", e[e.BackTick = 96] = "BackTick", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.OpenCurlyBrace = 123] = "OpenCurlyBrace", e[e.Pipe = 124] = "Pipe", e[e.CloseCurlyBrace = 125] = "CloseCurlyBrace", e[e.Tilde = 126] = "Tilde", e[e.NoBreakSpace = 160] = "NoBreakSpace", e[e.U_Combining_Grave_Accent = 768] = "U_Combining_Grave_Accent", e[e.U_Combining_Acute_Accent = 769] = "U_Combining_Acute_Accent", e[e.U_Combining_Circumflex_Accent = 770] = "U_Combining_Circumflex_Accent", e[e.U_Combining_Tilde = 771] = "U_Combining_Tilde", e[e.U_Combining_Macron = 772] = "U_Combining_Macron", e[e.U_Combining_Overline = 773] = "U_Combining_Overline", e[e.U_Combining_Breve = 774] = "U_Combining_Breve", e[e.U_Combining_Dot_Above = 775] = "U_Combining_Dot_Above", e[e.U_Combining_Diaeresis = 776] = "U_Combining_Diaeresis", e[e.U_Combining_Hook_Above = 777] = "U_Combining_Hook_Above", e[e.U_Combining_Ring_Above = 778] = "U_Combining_Ring_Above", e[e.U_Combining_Double_Acute_Accent = 779] = "U_Combining_Double_Acute_Accent", e[e.U_Combining_Caron = 780] = "U_Combining_Caron", e[e.U_Combining_Vertical_Line_Above = 781] = "U_Combining_Vertical_Line_Above", e[e.U_Combining_Double_Vertical_Line_Above = 782] = "U_Combining_Double_Vertical_Line_Above", e[e.U_Combining_Double_Grave_Accent = 783] = "U_Combining_Double_Grave_Accent", e[e.U_Combining_Candrabindu = 784] = "U_Combining_Candrabindu", e[e.U_Combining_Inverted_Breve = 785] = "U_Combining_Inverted_Breve", e[e.U_Combining_Turned_Comma_Above = 786] = "U_Combining_Turned_Comma_Above", e[e.U_Combining_Comma_Above = 787] = "U_Combining_Comma_Above", e[e.U_Combining_Reversed_Comma_Above = 788] = "U_Combining_Reversed_Comma_Above", e[e.U_Combining_Comma_Above_Right = 789] = "U_Combining_Comma_Above_Right", e[e.U_Combining_Grave_Accent_Below = 790] = "U_Combining_Grave_Accent_Below", e[e.U_Combining_Acute_Accent_Below = 791] = "U_Combining_Acute_Accent_Below", e[e.U_Combining_Left_Tack_Below = 792] = "U_Combining_Left_Tack_Below", e[e.U_Combining_Right_Tack_Below = 793] = "U_Combining_Right_Tack_Below", e[e.U_Combining_Left_Angle_Above = 794] = "U_Combining_Left_Angle_Above", e[e.U_Combining_Horn = 795] = "U_Combining_Horn", e[e.U_Combining_Left_Half_Ring_Below = 796] = "U_Combining_Left_Half_Ring_Below", e[e.U_Combining_Up_Tack_Below = 797] = "U_Combining_Up_Tack_Below", e[e.U_Combining_Down_Tack_Below = 798] = "U_Combining_Down_Tack_Below", e[e.U_Combining_Plus_Sign_Below = 799] = "U_Combining_Plus_Sign_Below", e[e.U_Combining_Minus_Sign_Below = 800] = "U_Combining_Minus_Sign_Below", e[e.U_Combining_Palatalized_Hook_Below = 801] = "U_Combining_Palatalized_Hook_Below", e[e.U_Combining_Retroflex_Hook_Below = 802] = "U_Combining_Retroflex_Hook_Below", e[e.U_Combining_Dot_Below = 803] = "U_Combining_Dot_Below", e[e.U_Combining_Diaeresis_Below = 804] = "U_Combining_Diaeresis_Below", e[e.U_Combining_Ring_Below = 805] = "U_Combining_Ring_Below", e[e.U_Combining_Comma_Below = 806] = "U_Combining_Comma_Below", e[e.U_Combining_Cedilla = 807] = "U_Combining_Cedilla", e[e.U_Combining_Ogonek = 808] = "U_Combining_Ogonek", e[e.U_Combining_Vertical_Line_Below = 809] = "U_Combining_Vertical_Line_Below", e[e.U_Combining_Bridge_Below = 810] = "U_Combining_Bridge_Below", e[e.U_Combining_Inverted_Double_Arch_Below = 811] = "U_Combining_Inverted_Double_Arch_Below", e[e.U_Combining_Caron_Below = 812] = "U_Combining_Caron_Below", e[e.U_Combining_Circumflex_Accent_Below = 813] = "U_Combining_Circumflex_Accent_Below", e[e.U_Combining_Breve_Below = 814] = "U_Combining_Breve_Below", e[e.U_Combining_Inverted_Breve_Below = 815] = "U_Combining_Inverted_Breve_Below", e[e.U_Combining_Tilde_Below = 816] = "U_Combining_Tilde_Below", e[e.U_Combining_Macron_Below = 817] = "U_Combining_Macron_Below", e[e.U_Combining_Low_Line = 818] = "U_Combining_Low_Line", e[e.U_Combining_Double_Low_Line = 819] = "U_Combining_Double_Low_Line", e[e.U_Combining_Tilde_Overlay = 820] = "U_Combining_Tilde_Overlay", e[e.U_Combining_Short_Stroke_Overlay = 821] = "U_Combining_Short_Stroke_Overlay", e[e.U_Combining_Long_Stroke_Overlay = 822] = "U_Combining_Long_Stroke_Overlay", e[e.U_Combining_Short_Solidus_Overlay = 823] = "U_Combining_Short_Solidus_Overlay", e[e.U_Combining_Long_Solidus_Overlay = 824] = "U_Combining_Long_Solidus_Overlay", e[e.U_Combining_Right_Half_Ring_Below = 825] = "U_Combining_Right_Half_Ring_Below", e[e.U_Combining_Inverted_Bridge_Below = 826] = "U_Combining_Inverted_Bridge_Below", e[e.U_Combining_Square_Below = 827] = "U_Combining_Square_Below", e[e.U_Combining_Seagull_Below = 828] = "U_Combining_Seagull_Below", e[e.U_Combining_X_Above = 829] = "U_Combining_X_Above", e[e.U_Combining_Vertical_Tilde = 830] = "U_Combining_Vertical_Tilde", e[e.U_Combining_Double_Overline = 831] = "U_Combining_Double_Overline", e[e.U_Combining_Grave_Tone_Mark = 832] = "U_Combining_Grave_Tone_Mark", e[e.U_Combining_Acute_Tone_Mark = 833] = "U_Combining_Acute_Tone_Mark", e[e.U_Combining_Greek_Perispomeni = 834] = "U_Combining_Greek_Perispomeni", e[e.U_Combining_Greek_Koronis = 835] = "U_Combining_Greek_Koronis", e[e.U_Combining_Greek_Dialytika_Tonos = 836] = "U_Combining_Greek_Dialytika_Tonos", e[e.U_Combining_Greek_Ypogegrammeni = 837] = "U_Combining_Greek_Ypogegrammeni", e[e.U_Combining_Bridge_Above = 838] = "U_Combining_Bridge_Above", e[e.U_Combining_Equals_Sign_Below = 839] = "U_Combining_Equals_Sign_Below", e[e.U_Combining_Double_Vertical_Line_Below = 840] = "U_Combining_Double_Vertical_Line_Below", e[e.U_Combining_Left_Angle_Below = 841] = "U_Combining_Left_Angle_Below", e[e.U_Combining_Not_Tilde_Above = 842] = "U_Combining_Not_Tilde_Above", e[e.U_Combining_Homothetic_Above = 843] = "U_Combining_Homothetic_Above", e[e.U_Combining_Almost_Equal_To_Above = 844] = "U_Combining_Almost_Equal_To_Above", e[e.U_Combining_Left_Right_Arrow_Below = 845] = "U_Combining_Left_Right_Arrow_Below", e[e.U_Combining_Upwards_Arrow_Below = 846] = "U_Combining_Upwards_Arrow_Below", e[e.U_Combining_Grapheme_Joiner = 847] = "U_Combining_Grapheme_Joiner", e[e.U_Combining_Right_Arrowhead_Above = 848] = "U_Combining_Right_Arrowhead_Above", e[e.U_Combining_Left_Half_Ring_Above = 849] = "U_Combining_Left_Half_Ring_Above", e[e.U_Combining_Fermata = 850] = "U_Combining_Fermata", e[e.U_Combining_X_Below = 851] = "U_Combining_X_Below", e[e.U_Combining_Left_Arrowhead_Below = 852] = "U_Combining_Left_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_Below = 853] = "U_Combining_Right_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below = 854] = "U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below", e[e.U_Combining_Right_Half_Ring_Above = 855] = "U_Combining_Right_Half_Ring_Above", e[e.U_Combining_Dot_Above_Right = 856] = "U_Combining_Dot_Above_Right", e[e.U_Combining_Asterisk_Below = 857] = "U_Combining_Asterisk_Below", e[e.U_Combining_Double_Ring_Below = 858] = "U_Combining_Double_Ring_Below", e[e.U_Combining_Zigzag_Above = 859] = "U_Combining_Zigzag_Above", e[e.U_Combining_Double_Breve_Below = 860] = "U_Combining_Double_Breve_Below", e[e.U_Combining_Double_Breve = 861] = "U_Combining_Double_Breve", e[e.U_Combining_Double_Macron = 862] = "U_Combining_Double_Macron", e[e.U_Combining_Double_Macron_Below = 863] = "U_Combining_Double_Macron_Below", e[e.U_Combining_Double_Tilde = 864] = "U_Combining_Double_Tilde", e[e.U_Combining_Double_Inverted_Breve = 865] = "U_Combining_Double_Inverted_Breve", e[e.U_Combining_Double_Rightwards_Arrow_Below = 866] = "U_Combining_Double_Rightwards_Arrow_Below", e[e.U_Combining_Latin_Small_Letter_A = 867] = "U_Combining_Latin_Small_Letter_A", e[e.U_Combining_Latin_Small_Letter_E = 868] = "U_Combining_Latin_Small_Letter_E", e[e.U_Combining_Latin_Small_Letter_I = 869] = "U_Combining_Latin_Small_Letter_I", e[e.U_Combining_Latin_Small_Letter_O = 870] = "U_Combining_Latin_Small_Letter_O", e[e.U_Combining_Latin_Small_Letter_U = 871] = "U_Combining_Latin_Small_Letter_U", e[e.U_Combining_Latin_Small_Letter_C = 872] = "U_Combining_Latin_Small_Letter_C", e[e.U_Combining_Latin_Small_Letter_D = 873] = "U_Combining_Latin_Small_Letter_D", e[e.U_Combining_Latin_Small_Letter_H = 874] = "U_Combining_Latin_Small_Letter_H", e[e.U_Combining_Latin_Small_Letter_M = 875] = "U_Combining_Latin_Small_Letter_M", e[e.U_Combining_Latin_Small_Letter_R = 876] = "U_Combining_Latin_Small_Letter_R", e[e.U_Combining_Latin_Small_Letter_T = 877] = "U_Combining_Latin_Small_Letter_T", e[e.U_Combining_Latin_Small_Letter_V = 878] = "U_Combining_Latin_Small_Letter_V", e[e.U_Combining_Latin_Small_Letter_X = 879] = "U_Combining_Latin_Small_Letter_X", e[e.LINE_SEPARATOR = 8232] = "LINE_SEPARATOR", e[e.PARAGRAPH_SEPARATOR = 8233] = "PARAGRAPH_SEPARATOR", e[e.NEXT_LINE = 133] = "NEXT_LINE", e[e.U_CIRCUMFLEX = 94] = "U_CIRCUMFLEX", e[e.U_GRAVE_ACCENT = 96] = "U_GRAVE_ACCENT", e[e.U_DIAERESIS = 168] = "U_DIAERESIS", e[e.U_MACRON = 175] = "U_MACRON", e[e.U_ACUTE_ACCENT = 180] = "U_ACUTE_ACCENT", e[e.U_CEDILLA = 184] = "U_CEDILLA", e[e.U_MODIFIER_LETTER_LEFT_ARROWHEAD = 706] = "U_MODIFIER_LETTER_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_RIGHT_ARROWHEAD = 707] = "U_MODIFIER_LETTER_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_UP_ARROWHEAD = 708] = "U_MODIFIER_LETTER_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_DOWN_ARROWHEAD = 709] = "U_MODIFIER_LETTER_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING = 722] = "U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING", e[e.U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING = 723] = "U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING", e[e.U_MODIFIER_LETTER_UP_TACK = 724] = "U_MODIFIER_LETTER_UP_TACK", e[e.U_MODIFIER_LETTER_DOWN_TACK = 725] = "U_MODIFIER_LETTER_DOWN_TACK", e[e.U_MODIFIER_LETTER_PLUS_SIGN = 726] = "U_MODIFIER_LETTER_PLUS_SIGN", e[e.U_MODIFIER_LETTER_MINUS_SIGN = 727] = "U_MODIFIER_LETTER_MINUS_SIGN", e[e.U_BREVE = 728] = "U_BREVE", e[e.U_DOT_ABOVE = 729] = "U_DOT_ABOVE", e[e.U_RING_ABOVE = 730] = "U_RING_ABOVE", e[e.U_OGONEK = 731] = "U_OGONEK", e[e.U_SMALL_TILDE = 732] = "U_SMALL_TILDE", e[e.U_DOUBLE_ACUTE_ACCENT = 733] = "U_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_RHOTIC_HOOK = 734] = "U_MODIFIER_LETTER_RHOTIC_HOOK", e[e.U_MODIFIER_LETTER_CROSS_ACCENT = 735] = "U_MODIFIER_LETTER_CROSS_ACCENT", e[e.U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR = 741] = "U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_HIGH_TONE_BAR = 742] = "U_MODIFIER_LETTER_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_MID_TONE_BAR = 743] = "U_MODIFIER_LETTER_MID_TONE_BAR", e[e.U_MODIFIER_LETTER_LOW_TONE_BAR = 744] = "U_MODIFIER_LETTER_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR = 745] = "U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK = 746] = "U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK = 747] = "U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_UNASPIRATED = 749] = "U_MODIFIER_LETTER_UNASPIRATED", e[e.U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD = 751] = "U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_UP_ARROWHEAD = 752] = "U_MODIFIER_LETTER_LOW_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD = 753] = "U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD = 754] = "U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RING = 755] = "U_MODIFIER_LETTER_LOW_RING", e[e.U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT = 756] = "U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT = 757] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT = 758] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_LOW_TILDE = 759] = "U_MODIFIER_LETTER_LOW_TILDE", e[e.U_MODIFIER_LETTER_RAISED_COLON = 760] = "U_MODIFIER_LETTER_RAISED_COLON", e[e.U_MODIFIER_LETTER_BEGIN_HIGH_TONE = 761] = "U_MODIFIER_LETTER_BEGIN_HIGH_TONE", e[e.U_MODIFIER_LETTER_END_HIGH_TONE = 762] = "U_MODIFIER_LETTER_END_HIGH_TONE", e[e.U_MODIFIER_LETTER_BEGIN_LOW_TONE = 763] = "U_MODIFIER_LETTER_BEGIN_LOW_TONE", e[e.U_MODIFIER_LETTER_END_LOW_TONE = 764] = "U_MODIFIER_LETTER_END_LOW_TONE", e[e.U_MODIFIER_LETTER_SHELF = 765] = "U_MODIFIER_LETTER_SHELF", e[e.U_MODIFIER_LETTER_OPEN_SHELF = 766] = "U_MODIFIER_LETTER_OPEN_SHELF", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROW = 767] = "U_MODIFIER_LETTER_LOW_LEFT_ARROW", e[e.U_GREEK_LOWER_NUMERAL_SIGN = 885] = "U_GREEK_LOWER_NUMERAL_SIGN", e[e.U_GREEK_TONOS = 900] = "U_GREEK_TONOS", e[e.U_GREEK_DIALYTIKA_TONOS = 901] = "U_GREEK_DIALYTIKA_TONOS", e[e.U_GREEK_KORONIS = 8125] = "U_GREEK_KORONIS", e[e.U_GREEK_PSILI = 8127] = "U_GREEK_PSILI", e[e.U_GREEK_PERISPOMENI = 8128] = "U_GREEK_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_PERISPOMENI = 8129] = "U_GREEK_DIALYTIKA_AND_PERISPOMENI", e[e.U_GREEK_PSILI_AND_VARIA = 8141] = "U_GREEK_PSILI_AND_VARIA", e[e.U_GREEK_PSILI_AND_OXIA = 8142] = "U_GREEK_PSILI_AND_OXIA", e[e.U_GREEK_PSILI_AND_PERISPOMENI = 8143] = "U_GREEK_PSILI_AND_PERISPOMENI", e[e.U_GREEK_DASIA_AND_VARIA = 8157] = "U_GREEK_DASIA_AND_VARIA", e[e.U_GREEK_DASIA_AND_OXIA = 8158] = "U_GREEK_DASIA_AND_OXIA", e[e.U_GREEK_DASIA_AND_PERISPOMENI = 8159] = "U_GREEK_DASIA_AND_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_VARIA = 8173] = "U_GREEK_DIALYTIKA_AND_VARIA", e[e.U_GREEK_DIALYTIKA_AND_OXIA = 8174] = "U_GREEK_DIALYTIKA_AND_OXIA", e[e.U_GREEK_VARIA = 8175] = "U_GREEK_VARIA", e[e.U_GREEK_OXIA = 8189] = "U_GREEK_OXIA", e[e.U_GREEK_DASIA = 8190] = "U_GREEK_DASIA", e[e.U_IDEOGRAPHIC_FULL_STOP = 12290] = "U_IDEOGRAPHIC_FULL_STOP", e[e.U_LEFT_CORNER_BRACKET = 12300] = "U_LEFT_CORNER_BRACKET", e[e.U_RIGHT_CORNER_BRACKET = 12301] = "U_RIGHT_CORNER_BRACKET", e[e.U_LEFT_BLACK_LENTICULAR_BRACKET = 12304] = "U_LEFT_BLACK_LENTICULAR_BRACKET", e[e.U_RIGHT_BLACK_LENTICULAR_BRACKET = 12305] = "U_RIGHT_BLACK_LENTICULAR_BRACKET", e[e.U_OVERLINE = 8254] = "U_OVERLINE", e[e.UTF8_BOM = 65279] = "UTF8_BOM", e[e.U_FULLWIDTH_SEMICOLON = 65307] = "U_FULLWIDTH_SEMICOLON", e[e.U_FULLWIDTH_COMMA = 65292] = "U_FULLWIDTH_COMMA", e))(CharCode || {});
function countEOLInChange(e) {
  if (e.eolCount !== void 0 && e.firstLineLength !== void 0 && e.lastLineLength !== void 0) return [e.eolCount, e.firstLineLength, e.lastLineLength];
  const [t, n, i] = countEOL(e.text);
  return [t, n, i];
}
function countEOL(e) {
  let t = 0, n = 0, i = 0, s = 0;
  for (let r = 0, o = e.length; r < o; r++) {
    const a = e.charCodeAt(r);
    a === CharCode.CarriageReturn ? (t === 0 && (n = r), t++, r + 1 < o && e.charCodeAt(r + 1) === CharCode.LineFeed ? (s |= 2, r++) : s |= 3, i = r + 1) : a === CharCode.LineFeed && (s |= 1, t === 0 && (n = r), t++, i = r + 1);
  }
  return t === 0 && (n = e.length), [t, n, e.length - i, s];
}
var _codiconFontCharacters = /* @__PURE__ */ Object.create(null);
function register(e, t) {
  if (isString(t)) {
    const n = _codiconFontCharacters[t];
    if (n === void 0) throw new Error(`${e} references an unknown codicon: ${t}`);
    t = n;
  }
  return _codiconFontCharacters[e] = t, { id: e };
}
var codiconsLibrary = { semantic: register("semantic", 62e3), githubCopilot: register("github-copilot", 62001), plusCircle: register("plus-circle", 62002), smileySad: register("smiley-sad", 62003), smileyHappy: register("smiley-happy", 62004), smileyMedium: register("smiley-medium", 62005), sparkleStrikethrough: register("sparkle-strikethrough", 62006), keyPlusSparkle: register("key-plus-sparkle", 62007), paperclip: register("paperclip", 60500), atSign: register("at-sign", 60501), image: register("image", 60502), logo: register("logo", 60503), sparkleTwo: register("sparkle-two", 60504), logoSlash: register("logo-slash", 60505), arrowsExpand: register("arrows-expand", 60506), arrowsContract: register("arrows-contract", 60507), expandDiffUp: register("expand-diff-up", 60508), expandDiffDown: register("expand-diff-down", 60509), add: register("add", 6e4), plus: register("plus", 6e4), gistNew: register("gist-new", 6e4), repoCreate: register("repo-create", 6e4), lightbulb: register("lightbulb", 60001), lightBulb: register("light-bulb", 60001), repo: register("repo", 60002), repoDelete: register("repo-delete", 60002), gistFork: register("gist-fork", 60003), repoForked: register("repo-forked", 60003), gitPullRequest: register("git-pull-request", 60004), gitPullRequestAbandoned: register("git-pull-request-abandoned", 60004), recordKeys: register("record-keys", 60005), keyboard: register("keyboard", 60005), tag: register("tag", 60006), gitPullRequestLabel: register("git-pull-request-label", 60006), tagAdd: register("tag-add", 60006), tagRemove: register("tag-remove", 60006), person: register("person", 60007), personFollow: register("person-follow", 60007), personOutline: register("person-outline", 60007), personFilled: register("person-filled", 60007), gitBranch: register("git-branch", 60008), gitBranchCreate: register("git-branch-create", 60008), gitBranchDelete: register("git-branch-delete", 60008), sourceControl: register("source-control", 60008), mirror: register("mirror", 60009), mirrorPublic: register("mirror-public", 60009), star: register("star", 60010), starAdd: register("star-add", 60010), starDelete: register("star-delete", 60010), starEmpty: register("star-empty", 60010), comment: register("comment", 60011), commentAdd: register("comment-add", 60011), alert: register("alert", 60012), warning: register("warning", 60012), search: register("search", 60013), searchSave: register("search-save", 60013), logOut: register("log-out", 60014), signOut: register("sign-out", 60014), logIn: register("log-in", 60015), signIn: register("sign-in", 60015), eye: register("eye", 60016), eyeUnwatch: register("eye-unwatch", 60016), eyeWatch: register("eye-watch", 60016), circleFilled: register("circle-filled", 60017), primitiveDot: register("primitive-dot", 60017), closeDirty: register("close-dirty", 60017), debugBreakpoint: register("debug-breakpoint", 60017), debugBreakpointDisabled: register("debug-breakpoint-disabled", 60017), debugHint: register("debug-hint", 60017), terminalDecorationSuccess: register("terminal-decoration-success", 60017), primitiveSquare: register("primitive-square", 60018), edit: register("edit", 60019), pencil: register("pencil", 60019), info: register("info", 60020), issueOpened: register("issue-opened", 60020), gistPrivate: register("gist-private", 60021), gitForkPrivate: register("git-fork-private", 60021), lock: register("lock", 60021), mirrorPrivate: register("mirror-private", 60021), close: register("close", 60022), removeClose: register("remove-close", 60022), x: register("x", 60022), repoSync: register("repo-sync", 60023), sync: register("sync", 60023), clone: register("clone", 60024), desktopDownload: register("desktop-download", 60024), beaker: register("beaker", 60025), microscope: register("microscope", 60025), vm: register("vm", 60026), deviceDesktop: register("device-desktop", 60026), file: register("file", 60027), fileText: register("file-text", 60027), more: register("more", 60028), ellipsis: register("ellipsis", 60028), kebabHorizontal: register("kebab-horizontal", 60028), mailReply: register("mail-reply", 60029), reply: register("reply", 60029), organization: register("organization", 60030), organizationFilled: register("organization-filled", 60030), organizationOutline: register("organization-outline", 60030), newFile: register("new-file", 60031), fileAdd: register("file-add", 60031), newFolder: register("new-folder", 60032), fileDirectoryCreate: register("file-directory-create", 60032), trash: register("trash", 60033), trashcan: register("trashcan", 60033), history: register("history", 60034), clock: register("clock", 60034), folder: register("folder", 60035), fileDirectory: register("file-directory", 60035), symbolFolder: register("symbol-folder", 60035), logoGithub: register("logo-github", 60036), markGithub: register("mark-github", 60036), github: register("github", 60036), terminal: register("terminal", 60037), console: register("console", 60037), repl: register("repl", 60037), zap: register("zap", 60038), symbolEvent: register("symbol-event", 60038), error: register("error", 60039), stop: register("stop", 60039), variable: register("variable", 60040), symbolVariable: register("symbol-variable", 60040), array: register("array", 60042), symbolArray: register("symbol-array", 60042), symbolModule: register("symbol-module", 60043), symbolPackage: register("symbol-package", 60043), symbolNamespace: register("symbol-namespace", 60043), symbolObject: register("symbol-object", 60043), symbolMethod: register("symbol-method", 60044), symbolFunction: register("symbol-function", 60044), symbolConstructor: register("symbol-constructor", 60044), symbolBoolean: register("symbol-boolean", 60047), symbolNull: register("symbol-null", 60047), symbolNumeric: register("symbol-numeric", 60048), symbolNumber: register("symbol-number", 60048), symbolStructure: register("symbol-structure", 60049), symbolStruct: register("symbol-struct", 60049), symbolParameter: register("symbol-parameter", 60050), symbolTypeParameter: register("symbol-type-parameter", 60050), symbolKey: register("symbol-key", 60051), symbolText: register("symbol-text", 60051), symbolReference: register("symbol-reference", 60052), goToFile: register("go-to-file", 60052), symbolEnum: register("symbol-enum", 60053), symbolValue: register("symbol-value", 60053), symbolRuler: register("symbol-ruler", 60054), symbolUnit: register("symbol-unit", 60054), activateBreakpoints: register("activate-breakpoints", 60055), archive: register("archive", 60056), arrowBoth: register("arrow-both", 60057), arrowDown: register("arrow-down", 60058), arrowLeft: register("arrow-left", 60059), arrowRight: register("arrow-right", 60060), arrowSmallDown: register("arrow-small-down", 60061), arrowSmallLeft: register("arrow-small-left", 60062), arrowSmallRight: register("arrow-small-right", 60063), arrowSmallUp: register("arrow-small-up", 60064), arrowUp: register("arrow-up", 60065), bell: register("bell", 60066), bold: register("bold", 60067), book: register("book", 60068), bookmark: register("bookmark", 60069), debugBreakpointConditionalUnverified: register("debug-breakpoint-conditional-unverified", 60070), debugBreakpointConditional: register("debug-breakpoint-conditional", 60071), debugBreakpointConditionalDisabled: register("debug-breakpoint-conditional-disabled", 60071), debugBreakpointDataUnverified: register("debug-breakpoint-data-unverified", 60072), debugBreakpointData: register("debug-breakpoint-data", 60073), debugBreakpointDataDisabled: register("debug-breakpoint-data-disabled", 60073), debugBreakpointLogUnverified: register("debug-breakpoint-log-unverified", 60074), debugBreakpointLog: register("debug-breakpoint-log", 60075), debugBreakpointLogDisabled: register("debug-breakpoint-log-disabled", 60075), briefcase: register("briefcase", 60076), broadcast: register("broadcast", 60077), browser: register("browser", 60078), bug: register("bug", 60079), calendar: register("calendar", 60080), caseSensitive: register("case-sensitive", 60081), check: register("check", 60082), checklist: register("checklist", 60083), chevronDown: register("chevron-down", 60084), chevronLeft: register("chevron-left", 60085), chevronRight: register("chevron-right", 60086), chevronUp: register("chevron-up", 60087), chromeClose: register("chrome-close", 60088), chromeMaximize: register("chrome-maximize", 60089), chromeMinimize: register("chrome-minimize", 60090), chromeRestore: register("chrome-restore", 60091), circleOutline: register("circle-outline", 60092), circle: register("circle", 60092), debugBreakpointUnverified: register("debug-breakpoint-unverified", 60092), terminalDecorationIncomplete: register("terminal-decoration-incomplete", 60092), circleSlash: register("circle-slash", 60093), circuitBoard: register("circuit-board", 60094), clearAll: register("clear-all", 60095), clippy: register("clippy", 60096), closeAll: register("close-all", 60097), cloudDownload: register("cloud-download", 60098), cloudUpload: register("cloud-upload", 60099), code: register("code", 60100), collapseAll: register("collapse-all", 60101), colorMode: register("color-mode", 60102), commentDiscussion: register("comment-discussion", 60103), creditCard: register("credit-card", 60105), dash: register("dash", 60108), dashboard: register("dashboard", 60109), database: register("database", 60110), debugContinue: register("debug-continue", 60111), debugDisconnect: register("debug-disconnect", 60112), debugPause: register("debug-pause", 60113), debugRestart: register("debug-restart", 60114), debugStart: register("debug-start", 60115), debugStepInto: register("debug-step-into", 60116), debugStepOut: register("debug-step-out", 60117), debugStepOver: register("debug-step-over", 60118), debugStop: register("debug-stop", 60119), debug: register("debug", 60120), deviceCameraVideo: register("device-camera-video", 60121), deviceCamera: register("device-camera", 60122), deviceMobile: register("device-mobile", 60123), diffAdded: register("diff-added", 60124), diffIgnored: register("diff-ignored", 60125), diffModified: register("diff-modified", 60126), diffRemoved: register("diff-removed", 60127), diffRenamed: register("diff-renamed", 60128), diff: register("diff", 60129), diffSidebyside: register("diff-sidebyside", 60129), discard: register("discard", 60130), editorLayout: register("editor-layout", 60131), emptyWindow: register("empty-window", 60132), exclude: register("exclude", 60133), extensions: register("extensions", 60134), eyeClosed: register("eye-closed", 60135), fileBinary: register("file-binary", 60136), fileCode: register("file-code", 60137), fileMedia: register("file-media", 60138), filePdf: register("file-pdf", 60139), fileSubmodule: register("file-submodule", 60140), fileSymlinkDirectory: register("file-symlink-directory", 60141), fileSymlinkFile: register("file-symlink-file", 60142), fileZip: register("file-zip", 60143), files: register("files", 60144), filter: register("filter", 60145), flame: register("flame", 60146), foldDown: register("fold-down", 60147), foldUp: register("fold-up", 60148), fold: register("fold", 60149), folderActive: register("folder-active", 60150), folderOpened: register("folder-opened", 60151), gear: register("gear", 60152), gift: register("gift", 60153), gistSecret: register("gist-secret", 60154), gist: register("gist", 60155), gitCommit: register("git-commit", 60156), gitCompare: register("git-compare", 60157), compareChanges: register("compare-changes", 60157), gitMerge: register("git-merge", 60158), githubAction: register("github-action", 60159), githubAlt: register("github-alt", 60160), globe: register("globe", 60161), grabber: register("grabber", 60162), graph: register("graph", 60163), gripper: register("gripper", 60164), heart: register("heart", 60165), home: register("home", 60166), horizontalRule: register("horizontal-rule", 60167), hubot: register("hubot", 60168), inbox: register("inbox", 60169), issueReopened: register("issue-reopened", 60171), issues: register("issues", 60172), italic: register("italic", 60173), jersey: register("jersey", 60174), json: register("json", 60175), kebabVertical: register("kebab-vertical", 60176), key: register("key", 60177), law: register("law", 60178), lightbulbAutofix: register("lightbulb-autofix", 60179), linkExternal: register("link-external", 60180), link: register("link", 60181), listOrdered: register("list-ordered", 60182), listUnordered: register("list-unordered", 60183), liveShare: register("live-share", 60184), loading: register("loading", 60185), location: register("location", 60186), mailRead: register("mail-read", 60187), mail: register("mail", 60188), markdown: register("markdown", 60189), megaphone: register("megaphone", 60190), mention: register("mention", 60191), milestone: register("milestone", 60192), gitPullRequestMilestone: register("git-pull-request-milestone", 60192), mortarBoard: register("mortar-board", 60193), move: register("move", 60194), multipleWindows: register("multiple-windows", 60195), mute: register("mute", 60196), noNewline: register("no-newline", 60197), note: register("note", 60198), octoface: register("octoface", 60199), openPreview: register("open-preview", 60200), package: register("package", 60201), paintcan: register("paintcan", 60202), pin: register("pin", 60203), play: register("play", 60204), run: register("run", 60204), plug: register("plug", 60205), preserveCase: register("preserve-case", 60206), preview: register("preview", 60207), project: register("project", 60208), pulse: register("pulse", 60209), question: register("question", 60210), quote: register("quote", 60211), radioTower: register("radio-tower", 60212), reactions: register("reactions", 60213), references: register("references", 60214), refresh: register("refresh", 60215), regex: register("regex", 60216), remoteExplorer: register("remote-explorer", 60217), remote: register("remote", 60218), remove: register("remove", 60219), replaceAll: register("replace-all", 60220), replace: register("replace", 60221), repoClone: register("repo-clone", 60222), repoForcePush: register("repo-force-push", 60223), repoPull: register("repo-pull", 60224), repoPush: register("repo-push", 60225), report: register("report", 60226), requestChanges: register("request-changes", 60227), rocket: register("rocket", 60228), rootFolderOpened: register("root-folder-opened", 60229), rootFolder: register("root-folder", 60230), rss: register("rss", 60231), ruby: register("ruby", 60232), saveAll: register("save-all", 60233), saveAs: register("save-as", 60234), save: register("save", 60235), screenFull: register("screen-full", 60236), screenNormal: register("screen-normal", 60237), searchStop: register("search-stop", 60238), server: register("server", 60240), settingsGear: register("settings-gear", 60241), settings: register("settings", 60242), shield: register("shield", 60243), smiley: register("smiley", 60244), sortPrecedence: register("sort-precedence", 60245), splitHorizontal: register("split-horizontal", 60246), splitVertical: register("split-vertical", 60247), squirrel: register("squirrel", 60248), starFull: register("star-full", 60249), starHalf: register("star-half", 60250), symbolClass: register("symbol-class", 60251), symbolColor: register("symbol-color", 60252), symbolConstant: register("symbol-constant", 60253), symbolEnumMember: register("symbol-enum-member", 60254), symbolField: register("symbol-field", 60255), symbolFile: register("symbol-file", 60256), symbolInterface: register("symbol-interface", 60257), symbolKeyword: register("symbol-keyword", 60258), symbolMisc: register("symbol-misc", 60259), symbolOperator: register("symbol-operator", 60260), symbolProperty: register("symbol-property", 60261), wrench: register("wrench", 60261), wrenchSubaction: register("wrench-subaction", 60261), symbolSnippet: register("symbol-snippet", 60262), tasklist: register("tasklist", 60263), telescope: register("telescope", 60264), textSize: register("text-size", 60265), threeBars: register("three-bars", 60266), thumbsdown: register("thumbsdown", 60267), thumbsup: register("thumbsup", 60268), tools: register("tools", 60269), triangleDown: register("triangle-down", 60270), triangleLeft: register("triangle-left", 60271), triangleRight: register("triangle-right", 60272), triangleUp: register("triangle-up", 60273), twitter: register("twitter", 60274), unfold: register("unfold", 60275), unlock: register("unlock", 60276), unmute: register("unmute", 60277), unverified: register("unverified", 60278), verified: register("verified", 60279), versions: register("versions", 60280), vmActive: register("vm-active", 60281), vmOutline: register("vm-outline", 60282), vmRunning: register("vm-running", 60283), watch: register("watch", 60284), whitespace: register("whitespace", 60285), wholeWord: register("whole-word", 60286), window: register("window", 60287), wordWrap: register("word-wrap", 60288), zoomIn: register("zoom-in", 60289), zoomOut: register("zoom-out", 60290), listFilter: register("list-filter", 60291), listFlat: register("list-flat", 60292), listSelection: register("list-selection", 60293), selection: register("selection", 60293), listTree: register("list-tree", 60294), debugBreakpointFunctionUnverified: register("debug-breakpoint-function-unverified", 60295), debugBreakpointFunction: register("debug-breakpoint-function", 60296), debugBreakpointFunctionDisabled: register("debug-breakpoint-function-disabled", 60296), debugStackframeActive: register("debug-stackframe-active", 60297), circleSmallFilled: register("circle-small-filled", 60298), debugStackframeDot: register("debug-stackframe-dot", 60298), terminalDecorationMark: register("terminal-decoration-mark", 60298), debugStackframe: register("debug-stackframe", 60299), debugStackframeFocused: register("debug-stackframe-focused", 60299), debugBreakpointUnsupported: register("debug-breakpoint-unsupported", 60300), symbolString: register("symbol-string", 60301), debugReverseContinue: register("debug-reverse-continue", 60302), debugStepBack: register("debug-step-back", 60303), debugRestartFrame: register("debug-restart-frame", 60304), debugAlt: register("debug-alt", 60305), callIncoming: register("call-incoming", 60306), callOutgoing: register("call-outgoing", 60307), menu: register("menu", 60308), expandAll: register("expand-all", 60309), feedback: register("feedback", 60310), gitPullRequestReviewer: register("git-pull-request-reviewer", 60310), groupByRefType: register("group-by-ref-type", 60311), ungroupByRefType: register("ungroup-by-ref-type", 60312), account: register("account", 60313), gitPullRequestAssignee: register("git-pull-request-assignee", 60313), bellDot: register("bell-dot", 60314), debugConsole: register("debug-console", 60315), library: register("library", 60316), output: register("output", 60317), runAll: register("run-all", 60318), syncIgnored: register("sync-ignored", 60319), pinned: register("pinned", 60320), githubInverted: register("github-inverted", 60321), serverProcess: register("server-process", 60322), serverEnvironment: register("server-environment", 60323), pass: register("pass", 60324), issueClosed: register("issue-closed", 60324), stopCircle: register("stop-circle", 60325), playCircle: register("play-circle", 60326), record: register("record", 60327), debugAltSmall: register("debug-alt-small", 60328), vmConnect: register("vm-connect", 60329), cloud: register("cloud", 60330), merge: register("merge", 60331), export: register("export", 60332), graphLeft: register("graph-left", 60333), magnet: register("magnet", 60334), notebook: register("notebook", 60335), redo: register("redo", 60336), checkAll: register("check-all", 60337), pinnedDirty: register("pinned-dirty", 60338), passFilled: register("pass-filled", 60339), circleLargeFilled: register("circle-large-filled", 60340), circleLarge: register("circle-large", 60341), circleLargeOutline: register("circle-large-outline", 60341), combine: register("combine", 60342), gather: register("gather", 60342), table: register("table", 60343), variableGroup: register("variable-group", 60344), typeHierarchy: register("type-hierarchy", 60345), typeHierarchySub: register("type-hierarchy-sub", 60346), typeHierarchySuper: register("type-hierarchy-super", 60347), gitPullRequestCreate: register("git-pull-request-create", 60348), runAbove: register("run-above", 60349), runBelow: register("run-below", 60350), notebookTemplate: register("notebook-template", 60351), debugRerun: register("debug-rerun", 60352), workspaceTrusted: register("workspace-trusted", 60353), workspaceUntrusted: register("workspace-untrusted", 60354), workspaceUnknown: register("workspace-unknown", 60355), terminalCmd: register("terminal-cmd", 60356), terminalDebian: register("terminal-debian", 60357), terminalLinux: register("terminal-linux", 60358), terminalPowershell: register("terminal-powershell", 60359), terminalTmux: register("terminal-tmux", 60360), terminalUbuntu: register("terminal-ubuntu", 60361), terminalBash: register("terminal-bash", 60362), arrowSwap: register("arrow-swap", 60363), copy: register("copy", 60364), personAdd: register("person-add", 60365), filterFilled: register("filter-filled", 60366), wand: register("wand", 60367), debugLineByLine: register("debug-line-by-line", 60368), inspect: register("inspect", 60369), layers: register("layers", 60370), layersDot: register("layers-dot", 60371), layersActive: register("layers-active", 60372), compass: register("compass", 60373), compassDot: register("compass-dot", 60374), compassActive: register("compass-active", 60375), azure: register("azure", 60376), issueDraft: register("issue-draft", 60377), gitPullRequestClosed: register("git-pull-request-closed", 60378), gitPullRequestDraft: register("git-pull-request-draft", 60379), debugAll: register("debug-all", 60380), debugCoverage: register("debug-coverage", 60381), runErrors: register("run-errors", 60382), folderLibrary: register("folder-library", 60383), debugContinueSmall: register("debug-continue-small", 60384), beakerStop: register("beaker-stop", 60385), graphLine: register("graph-line", 60386), graphScatter: register("graph-scatter", 60387), pieChart: register("pie-chart", 60388), bracket: register("bracket", 60175), bracketDot: register("bracket-dot", 60389), bracketError: register("bracket-error", 60390), lockSmall: register("lock-small", 60391), azureDevops: register("azure-devops", 60392), verifiedFilled: register("verified-filled", 60393), newline: register("newline", 60394), layout: register("layout", 60395), layoutActivitybarLeft: register("layout-activitybar-left", 60396), layoutActivitybarRight: register("layout-activitybar-right", 60397), layoutPanelLeft: register("layout-panel-left", 60398), layoutPanelCenter: register("layout-panel-center", 60399), layoutPanelJustify: register("layout-panel-justify", 60400), layoutPanelRight: register("layout-panel-right", 60401), layoutPanel: register("layout-panel", 60402), layoutSidebarLeft: register("layout-sidebar-left", 60403), layoutSidebarRight: register("layout-sidebar-right", 60404), layoutStatusbar: register("layout-statusbar", 60405), layoutMenubar: register("layout-menubar", 60406), layoutCentered: register("layout-centered", 60407), target: register("target", 60408), indent: register("indent", 60409), recordSmall: register("record-small", 60410), errorSmall: register("error-small", 60411), terminalDecorationError: register("terminal-decoration-error", 60411), arrowCircleDown: register("arrow-circle-down", 60412), arrowCircleLeft: register("arrow-circle-left", 60413), arrowCircleRight: register("arrow-circle-right", 60414), arrowCircleUp: register("arrow-circle-up", 60415), layoutSidebarRightOff: register("layout-sidebar-right-off", 60416), layoutPanelOff: register("layout-panel-off", 60417), layoutSidebarLeftOff: register("layout-sidebar-left-off", 60418), blank: register("blank", 60419), heartFilled: register("heart-filled", 60420), map: register("map", 60421), mapHorizontal: register("map-horizontal", 60421), foldHorizontal: register("fold-horizontal", 60421), mapFilled: register("map-filled", 60422), mapHorizontalFilled: register("map-horizontal-filled", 60422), foldHorizontalFilled: register("fold-horizontal-filled", 60422), circleSmall: register("circle-small", 60423), bellSlash: register("bell-slash", 60424), bellSlashDot: register("bell-slash-dot", 60425), commentUnresolved: register("comment-unresolved", 60426), gitPullRequestGoToChanges: register("git-pull-request-go-to-changes", 60427), gitPullRequestNewChanges: register("git-pull-request-new-changes", 60428), searchFuzzy: register("search-fuzzy", 60429), commentDraft: register("comment-draft", 60430), send: register("send", 60431), sparkle: register("sparkle", 60432), insert: register("insert", 60433), mic: register("mic", 60434), thumbsdownFilled: register("thumbsdown-filled", 60435), thumbsupFilled: register("thumbsup-filled", 60436), coffee: register("coffee", 60437), snake: register("snake", 60438), game: register("game", 60439), vr: register("vr", 60440), chip: register("chip", 60441), piano: register("piano", 60442), music: register("music", 60443), micFilled: register("mic-filled", 60444), repoFetch: register("repo-fetch", 60445), copilot: register("copilot", 60446), lightbulbSparkle: register("lightbulb-sparkle", 60447), robot: register("robot", 60448), sparkleFilled: register("sparkle-filled", 60449), diffSingle: register("diff-single", 60450), diffMultiple: register("diff-multiple", 60451), surroundWith: register("surround-with", 60452), share: register("share", 60453), gitStash: register("git-stash", 60454), gitStashApply: register("git-stash-apply", 60455), gitStashPop: register("git-stash-pop", 60456), vscode: register("vscode", 60457), vscodeInsiders: register("vscode-insiders", 60458), codeOss: register("code-oss", 60459), runCoverage: register("run-coverage", 60460), runAllCoverage: register("run-all-coverage", 60461), coverage: register("coverage", 60462), githubProject: register("github-project", 60463), mapVertical: register("map-vertical", 60464), foldVertical: register("fold-vertical", 60464), mapVerticalFilled: register("map-vertical-filled", 60465), foldVerticalFilled: register("fold-vertical-filled", 60465), goToSearch: register("go-to-search", 60466), percentage: register("percentage", 60467), sortPercentage: register("sort-percentage", 60467), attach: register("attach", 60468), goToEditingSession: register("go-to-editing-session", 60469), editSession: register("edit-session", 60470), codeReview: register("code-review", 60471), copilotWarning: register("copilot-warning", 60472), python: register("python", 60473), copilotLarge: register("copilot-large", 60474), copilotWarningLarge: register("copilot-warning-large", 60475), keyboardTab: register("keyboard-tab", 60476), copilotBlocked: register("copilot-blocked", 60477), copilotNotConnected: register("copilot-not-connected", 60478), flag: register("flag", 60479), lightbulbEmpty: register("lightbulb-empty", 60480), symbolMethodArrow: register("symbol-method-arrow", 60481), copilotUnavailable: register("copilot-unavailable", 60482), repoPinned: register("repo-pinned", 60483), keyboardTabAbove: register("keyboard-tab-above", 60484), keyboardTabBelow: register("keyboard-tab-below", 60485), gitPullRequestDone: register("git-pull-request-done", 60486), mcp: register("mcp", 60487), extensionsLarge: register("extensions-large", 60488), layoutPanelDock: register("layout-panel-dock", 60489), layoutSidebarLeftDock: register("layout-sidebar-left-dock", 60490), layoutSidebarRightDock: register("layout-sidebar-right-dock", 60491), terminalTwo: register("terminal-two", 60800), checkTwo: register("check-two", 60801), xTwo: register("x-two", 60802), expander: register("expander", 60803), restore: register("restore", 60804), pinTwo: register("pin-two", 60805), stopTwo: register("stop-two", 60806), brain: register("brain", 60807), magnifyingGlass: register("magnifying-glass", 60808), imageTwo: register("image-two", 60809), microphone: register("microphone", 60810), submit: register("submit", 60811), running: register("running", 60812), fileAddTwo: register("file-add-two", 60813), infinity: register("infinity", 60814), editTwo: register("edit-two", 60815), stopThree: register("stop-three", 60816), warningTwo: register("warning-two", 60817), arrowLeftTwo: register("arrow-left-two", 60818), redoTwo: register("redo-two", 60819), infoTwo: register("info-two", 60820), chat: register("chat", 60821), thumbsDown: register("thumbs-down", 60822), thumbsUp: register("thumbs-up", 60823), thumbsDownFilled: register("thumbs-down-filled", 60824), thumbsUpFilled: register("thumbs-up-filled", 60825), copyTwo: register("copy-two", 60826), ellipsisTwo: register("ellipsis-two", 60827), eyeTwo: register("eye-two", 60828), globeTwo: register("globe-two", 60829), reload: register("reload", 60830), folderTwo: register("folder-two", 60831), eraser: register("eraser", 60832), swirlSparkle: register("swirl-sparkle", 60833), sendTwo: register("send-two", 60834), inboxTwo: register("inbox-two", 60835), fileTwo: register("file-two", 60836), list: register("list", 60837), calendarTwo: register("calendar-two", 60838), openNotebook: register("open-notebook", 60839), paperWords: register("paper-words", 60840), mortarboard: register("mortarboard", 60841), lightning: register("lightning", 60842), hammer: register("hammer", 60843), keyboardTwo: register("keyboard-two", 60844), arrowUpTwo: register("arrow-up-two", 60845), import: register("import", 60846), targetTwo: register("target-two", 60847), tab: register("tab", 60848), magic: register("magic", 60849), cloneTwo: register("clone-two", 60850), brush: register("brush", 60851), branch: register("branch", 60852), addTwo: register("add-two", 60853), historyTwo: register("history-two", 60854), cloudTwo: register("cloud-two", 60855), review: register("review", 60856), plusSquare: register("plus-square", 60857), checkCircled: register("check-circled", 60858), dottedCircle: register("dotted-circle", 60859), warnCircle: register("warn-circle", 60860), downLocalMachine: register("down-local-machine", 60861), mergeUpwards: register("merge-upwards", 60862), asterisk: register("asterisk", 60863), time: register("time", 60864), arrowUpRight: register("arrow-up-right", 60865), arrowUpRightSquare: register("arrow-up-right-square", 60866), bubbleAndPencil: register("bubble-and-pencil", 60867), downloadOnSquare: register("download-on-square", 60868), shippingBox: register("shipping-box", 60869), chevronForwardDotted: register("chevron-forward-dotted", 60870), cylinderSplit: register("cylinder-split", 60871), cubeNodes: register("cube-nodes", 60872), clipboardList: register("clipboard-list", 60873), circleShine: register("circle-shine", 60874), chevronUpDown: register("chevron-up-down", 60875), cube: register("cube", 60876), telecom: register("telecom", 60877), micTwo: register("mic-two", 60878), hourglass: register("hourglass", 60879), todos: register("todos", 60880), hourglassTwo: register("hourglass-two", 60881), laptop: register("laptop", 60882), grep: register("grep", 60883), chevronDblLeft: register("chevron-dbl-left", 60884), chevronDblRight: register("chevron-dbl-right", 62237), squareAndPencil: register("square-and-pencil", 60885), doubleTerminal: register("double-terminal", 60886), sidebarLeft: register("sidebar-left", 60887), filesTwo: register("files-two", 60888), cursor: register("cursor", 60889), testIcon3: register("test-icon-3", 60890), testIcon4: register("test-icon-4", 60891), testIconic: register("test-iconic", 60892), compose: register("compose", 60893), composeTwo: register("compose-two", 60894), cursorOutlineTransparent: register("cursor-outline-transparent", 60895), cursorFrame: register("cursor-frame", 60896), cursorFrames: register("cursor-frames", 60897), cursorBigger: register("cursor-bigger", 60898), cursorBiggest: register("cursor-biggest", 60899), terminalFilled: register("terminal-filled", 60900), rectangleDashed: register("rectangle-dashed", 60901), squareArrow: register("square-arrow", 60902), unfoldVertical: register("unfold-vertical", 60903), unfoldDashed: register("unfold-dashed", 60904), foldDashed: register("fold-dashed", 60905), playwright: register("playwright", 60906), searchSparkle: register("search-sparkle", 60496), settingsRound: register("settings-round", 60497), panelRounded: register("panel-rounded", 60498), fileList: register("file-list", 60499), rectangleArrow: register("rectangle-arrow", 60500), rectangleGlobe: register("rectangle-globe", 60501), rules: register("rules", 60502), squaresArrow: register("squares-arrow", 60504), bugbot: register("bugbot", 60505), thinking: register("thinking", 60506), splitDashed: register("split-dashed", 60507), splitPanel: register("split-panel", 60508), splitFile: register("split-file", 62008), splitDash: register("split-dash", 62009), panelExpand: register("panel-expand", 62010), panelCollapse: register("panel-collapse", 62011), chatQuestion: register("chat-question", 62012), branchDot: register("branch-dot", 62013), gitBranchDot: register("git-branch-dot", 62014), alignTop: register("align-top", 62023), alignHcenter: register("align-hcenter", 62024), alignVcenter: register("align-vcenter", 62025), alignBottom: register("align-bottom", 62026), alignRight: register("align-right", 62027), alignLeft: register("align-left", 62028), angle: register("angle", 62029), alignBottomfill: register("align-bottomfill", 62030), alignHcenterfill: register("align-hcenterfill", 62031), alignLeftfill: register("align-leftfill", 62032), alignRightfill: register("align-rightfill", 62033), alignTopfill: register("align-topfill", 62034), alignVcenterfill: register("align-vcenterfill", 62035), freeform: register("freeform", 62036), layoutGrid: register("layout-grid", 62037), corners: register("corners", 62038), opacity: register("opacity", 62039), maximize: register("maximize", 62040), minimize: register("minimize", 62041), panelBottomon: register("panel-bottomon", 62042), panelBottomoff: register("panel-bottomoff", 62043), panelFrame: register("panel-frame", 62044), panelBottomOverlay: register("panel-bottom-overlay", 62045), panelRightOverlay: register("panel-right-overlay", 62046), panelLeftOverlay: register("panel-left-overlay", 62047), chatRounded: register("chat-rounded", 62048), fileRounded: register("file-rounded", 62049), judge: register("judge", 62050), minmize: register("minmize", 62051), borderAll: register("border-all", 62052), borderBottom: register("border-bottom", 62053), borderLeft: register("border-left", 62054), borderRight: register("border-right", 62055), borderTop: register("border-top", 62056), rotate: register("rotate", 62057), flipVertical: register("flip-vertical", 62058), flipHorizontal: register("flip-horizontal", 62059), padVertical: register("pad-vertical", 62060), padHorizontal: register("pad-horizontal", 62061), padTop: register("pad-top", 62062), padLeft: register("pad-left", 62063), padRight: register("pad-right", 62064), padBottom: register("pad-bottom", 62065), weight: register("weight", 62066), padAll: register("pad-all", 62067), absolutePosition: register("absolute-position", 62068), minWidth: register("min-width", 62069), maxWidth: register("max-width", 62070), hug: register("hug", 62071), fixed: register("fixed", 62072), removeWidth: register("remove-width", 62073), fillWidth: register("fill-width", 62074), letterSpacing: register("letter-spacing", 62075), lineHeight: register("line-height", 62076), leftAlign: register("left-align", 62077), centerAlign: register("center-align", 62078), rightAlign: register("right-align", 62079), textTop: register("text-top", 62080), textCenter: register("text-center", 62081), textBottom: register("text-bottom", 62082), layerBlur: register("layer-blur", 62083), backgroundBlur: register("background-blur", 62084), cornerTl: register("corner-tl", 62085), cornerTr: register("corner-tr", 62086), cornerBl: register("corner-bl", 62087), cornerBr: register("corner-br", 62088), flowCol: register("flow-col", 62089), flowRow: register("flow-row", 62090), gap: register("gap", 62091), gridCol: register("grid-col", 62092), gridRow: register("grid-row", 62093), sun: register("sun", 62094), unlink: register("unlink", 62095), arrowFilled: register("arrow-filled", 62096) }, codiconsDerived = { dialogError: register("dialog-error", "error"), dialogWarning: register("dialog-warning", "warning"), dialogInfo: register("dialog-info", "info"), dialogClose: register("dialog-close", "close"), treeItemExpanded: register("tree-item-expanded", "chevron-down"), treeFilterOnTypeOn: register("tree-filter-on-type-on", "list-filter"), treeFilterOnTypeOff: register("tree-filter-on-type-off", "list-selection"), treeFilterClear: register("tree-filter-clear", "close"), treeItemLoading: register("tree-item-loading", "loading"), menuSelection: register("menu-selection", "check"), menuSubmenu: register("menu-submenu", "chevron-right"), menuBarMore: register("menubar-more", "more"), scrollbarButtonLeft: register("scrollbar-button-left", "triangle-left"), scrollbarButtonRight: register("scrollbar-button-right", "triangle-right"), scrollbarButtonUp: register("scrollbar-button-up", "triangle-up"), scrollbarButtonDown: register("scrollbar-button-down", "triangle-down"), toolBarMore: register("toolbar-more", "more"), quickInputBack: register("quick-input-back", "arrow-left"), dropDownButton: register("drop-down-button", 60084), symbolCustomColor: register("symbol-customcolor", 60252), exportIcon: register("export", 60332), workspaceUnspecified: register("workspace-unspecified", 60355), newLine: register("newline", 60394), gitFetch: register("git-fetch", 60445), lightbulbSparkleAutofix: register("lightbulb-sparkle-autofix", 60447), debugBreakpointPending: register("debug-breakpoint-pending", 60377), circles: register("circles", 62352) }, Codicon = { ...codiconsLibrary, ...codiconsDerived }, TokenizationRegistry = class {
  constructor() {
    this._tokenizationSupports = /* @__PURE__ */ new Map(), this._factories = /* @__PURE__ */ new Map(), this._requestedLanguages = /* @__PURE__ */ new Set(), this._onDidChange = new Emitter(), this.onDidChange = this._onDidChange.event, this._colorMap = null;
  }
  handleChange(e) {
    this._onDidChange.fire({ changedLanguages: e, changedColorMap: false });
  }
  register(e, t) {
    return this._tokenizationSupports.set(e, t), this.handleChange([e]), toDisposable(() => {
      this._tokenizationSupports.get(e) === t && (this._tokenizationSupports.delete(e), this.handleChange([e]));
    });
  }
  get(e) {
    return this._tokenizationSupports.get(e) || null;
  }
  registerFactory(e, t) {
    this._factories.get(e)?.dispose();
    const n = new TokenizationSupportFactoryData(this, e, t);
    this._factories.set(e, n), this._requestedLanguages.has(e) && n.resolve().catch(onUnexpectedError);
    const i = new WeakRef(n);
    return toDisposable(() => {
      const s = this._factories.get(e), r = i.deref();
      !s || !r || s !== r || (this._factories.delete(e), s.dispose());
    });
  }
  async getOrCreate(e) {
    this._requestedLanguages.add(e);
    const t = this.get(e);
    if (t) return t;
    const n = this._factories.get(e);
    return !n || n.isResolved ? null : (await n.resolve(), this.get(e));
  }
  isResolved(e) {
    if (this.get(e)) return true;
    const n = this._factories.get(e);
    return !!(!n || n.isResolved);
  }
  setColorMap(e) {
    this._colorMap = e, this._onDidChange.fire({ changedLanguages: Array.from(this._tokenizationSupports.keys()), changedColorMap: true });
  }
  getColorMap() {
    return this._colorMap;
  }
  getDefaultBackground() {
    return this._colorMap && this._colorMap.length > 2 ? this._colorMap[2] : null;
  }
}, TokenizationSupportFactoryData = class extends Disposable {
  constructor(e, t, n) {
    super(), this._registry = e, this._languageId = t, this._factory = n, this._isDisposed = false, this._resolvePromise = null, this._isResolved = false;
  }
  get isResolved() {
    return this._isResolved;
  }
  dispose() {
    this._isDisposed = true, super.dispose();
  }
  async resolve() {
    return this._resolvePromise || (this._resolvePromise = this._create()), this._resolvePromise;
  }
  async _create() {
    const e = await this._factory.tokenizationSupport;
    this._isResolved = true, e && !this._isDisposed && this._register(this._registry.register(this._languageId, e));
  }
}, EncodedTokenizationResult = class {
  constructor(e, t) {
    this.tokens = e, this.endState = t, this._encodedTokenizationResultBrand = void 0;
  }
}, CompletionItemKinds;
((e) => {
  const t = /* @__PURE__ */ new Map();
  t.set(0, Codicon.symbolMethod), t.set(1, Codicon.symbolFunction), t.set(2, Codicon.symbolConstructor), t.set(3, Codicon.symbolField), t.set(4, Codicon.symbolVariable), t.set(5, Codicon.symbolClass), t.set(6, Codicon.symbolStruct), t.set(7, Codicon.symbolInterface), t.set(8, Codicon.symbolModule), t.set(9, Codicon.symbolProperty), t.set(10, Codicon.symbolEvent), t.set(11, Codicon.symbolOperator), t.set(12, Codicon.symbolUnit), t.set(13, Codicon.symbolValue), t.set(15, Codicon.symbolEnum), t.set(14, Codicon.symbolConstant), t.set(15, Codicon.symbolEnum), t.set(16, Codicon.symbolEnumMember), t.set(17, Codicon.symbolKeyword), t.set(27, Codicon.symbolSnippet), t.set(18, Codicon.symbolText), t.set(19, Codicon.symbolColor), t.set(20, Codicon.symbolFile), t.set(21, Codicon.symbolReference), t.set(22, Codicon.symbolCustomColor), t.set(23, Codicon.symbolFolder), t.set(24, Codicon.symbolTypeParameter), t.set(25, Codicon.account), t.set(26, Codicon.issues);
  function n(o) {
    let a = t.get(o);
    return a || (console.info("No codicon found for CompletionItemKind " + o), a = Codicon.symbolProperty), a;
  }
  e.toIcon = n;
  function i(o) {
    switch (o) {
      case 0:
        return localize(828, null);
      case 1:
        return localize(829, null);
      case 2:
        return localize(830, null);
      case 3:
        return localize(831, null);
      case 4:
        return localize(832, null);
      case 5:
        return localize(833, null);
      case 6:
        return localize(834, null);
      case 7:
        return localize(835, null);
      case 8:
        return localize(836, null);
      case 9:
        return localize(837, null);
      case 10:
        return localize(838, null);
      case 11:
        return localize(839, null);
      case 12:
        return localize(840, null);
      case 13:
        return localize(841, null);
      case 14:
        return localize(842, null);
      case 15:
        return localize(843, null);
      case 16:
        return localize(844, null);
      case 17:
        return localize(845, null);
      case 18:
        return localize(846, null);
      case 19:
        return localize(847, null);
      case 20:
        return localize(848, null);
      case 21:
        return localize(849, null);
      case 22:
        return localize(850, null);
      case 23:
        return localize(851, null);
      case 24:
        return localize(852, null);
      case 25:
        return localize(853, null);
      case 26:
        return localize(854, null);
      case 27:
        return localize(855, null);
      default:
        return "";
    }
  }
  e.toLabel = i;
  const s = /* @__PURE__ */ new Map();
  s.set("method", 0), s.set("function", 1), s.set("constructor", 2), s.set("field", 3), s.set("variable", 4), s.set("class", 5), s.set("struct", 6), s.set("interface", 7), s.set("module", 8), s.set("property", 9), s.set("event", 10), s.set("operator", 11), s.set("unit", 12), s.set("value", 13), s.set("constant", 14), s.set("enum", 15), s.set("enum-member", 16), s.set("enumMember", 16), s.set("keyword", 17), s.set("snippet", 27), s.set("text", 18), s.set("color", 19), s.set("file", 20), s.set("reference", 21), s.set("customcolor", 22), s.set("folder", 23), s.set("type-parameter", 24), s.set("typeParameter", 24), s.set("account", 25), s.set("issue", 26);
  function r(o, a) {
    let l = s.get(o);
    return typeof l > "u" && !a && (l = 9), l;
  }
  e.fromString = r;
})(CompletionItemKinds || (CompletionItemKinds = {}));
var symbolKindNames = { 17: localize(856, null), 16: localize(857, null), 4: localize(858, null), 13: localize(859, null), 8: localize(860, null), 9: localize(861, null), 21: localize(862, null), 23: localize(863, null), 7: localize(864, null), 0: localize(865, null), 11: localize(866, null), 10: localize(867, null), 19: localize(868, null), 5: localize(869, null), 1: localize(870, null), 2: localize(871, null), 20: localize(872, null), 15: localize(873, null), 18: localize(874, null), 24: localize(875, null), 3: localize(876, null), 6: localize(877, null), 14: localize(878, null), 22: localize(879, null), 25: localize(880, null), 12: localize(881, null) }, SymbolKinds;
((e) => {
  const t = /* @__PURE__ */ new Map();
  t.set(0, Codicon.symbolFile), t.set(1, Codicon.symbolModule), t.set(2, Codicon.symbolNamespace), t.set(3, Codicon.symbolPackage), t.set(4, Codicon.symbolClass), t.set(5, Codicon.symbolMethod), t.set(6, Codicon.symbolProperty), t.set(7, Codicon.symbolField), t.set(8, Codicon.symbolConstructor), t.set(9, Codicon.symbolEnum), t.set(10, Codicon.symbolInterface), t.set(11, Codicon.symbolFunction), t.set(12, Codicon.symbolVariable), t.set(13, Codicon.symbolConstant), t.set(14, Codicon.symbolString), t.set(15, Codicon.symbolNumber), t.set(16, Codicon.symbolBoolean), t.set(17, Codicon.symbolArray), t.set(18, Codicon.symbolObject), t.set(19, Codicon.symbolKey), t.set(20, Codicon.symbolNull), t.set(21, Codicon.symbolEnumMember), t.set(22, Codicon.symbolStruct), t.set(23, Codicon.symbolEvent), t.set(24, Codicon.symbolOperator), t.set(25, Codicon.symbolTypeParameter);
  function n(r) {
    let o = t.get(r);
    return o || (console.info("No codicon found for SymbolKind " + r), o = Codicon.symbolProperty), o;
  }
  e.toIcon = n;
  const i = /* @__PURE__ */ new Map();
  i.set(0, 20), i.set(1, 8), i.set(2, 8), i.set(3, 8), i.set(4, 5), i.set(5, 0), i.set(6, 9), i.set(7, 3), i.set(8, 2), i.set(9, 15), i.set(10, 7), i.set(11, 1), i.set(12, 4), i.set(13, 14), i.set(14, 18), i.set(15, 13), i.set(16, 13), i.set(17, 13), i.set(18, 13), i.set(19, 17), i.set(20, 13), i.set(21, 16), i.set(22, 6), i.set(23, 10), i.set(24, 11), i.set(25, 24);
  function s(r) {
    let o = i.get(r);
    return o === void 0 && (console.info("No completion kind found for SymbolKind " + r), o = 20), o;
  }
  e.toCompletionKind = s;
})(SymbolKinds || (SymbolKinds = {}));
var _FoldingRangeKind = class K {
  constructor(t) {
    this.value = t;
  }
  static fromValue(t) {
    switch (t) {
      case "comment":
        return K.Comment;
      case "imports":
        return K.Imports;
      case "region":
        return K.Region;
    }
    return new K(t);
  }
};
_FoldingRangeKind.Comment = new _FoldingRangeKind("comment"), _FoldingRangeKind.Imports = new _FoldingRangeKind("imports"), _FoldingRangeKind.Region = new _FoldingRangeKind("region");
var Command;
((e) => {
  function t(n) {
    return !n || typeof n != "object" ? false : typeof n.id == "string" && typeof n.title == "string";
  }
  e.is = t;
})(Command || (Command = {}));
var TokenizationRegistry2 = new TokenizationRegistry(), TreeSitterTokenizationRegistry = new TokenizationRegistry(), NullState = new class {
  clone() {
    return this;
  }
  equals(e) {
    return this === e;
  }
}();
function nullTokenizeEncoded(e, t) {
  const n = new Uint32Array(2);
  return n[0] = 0, n[1] = (e << 0 | 0 | 0 | 32768 | 2 << 24) >>> 0, new EncodedTokenizationResult(n, t === null ? NullState : t);
}
var FixedArray = class {
  constructor(e) {
    this._default = e, this._store = [];
  }
  get(e) {
    return e < this._store.length ? this._store[e] : this._default;
  }
  set(e, t) {
    for (; e >= this._store.length; ) this._store[this._store.length] = this._default;
    this._store[e] = t;
  }
  replace(e, t, n) {
    if (e >= this._store.length) return;
    if (t === 0) {
      this.insert(e, n);
      return;
    } else if (n === 0) {
      this.delete(e, t);
      return;
    }
    const i = this._store.slice(0, e), s = this._store.slice(e + t), r = arrayFill(n, this._default);
    this._store = i.concat(r, s);
  }
  delete(e, t) {
    t === 0 || e >= this._store.length || this._store.splice(e, t);
  }
  insert(e, t) {
    if (t === 0 || e >= this._store.length) return;
    const n = [];
    for (let i = 0; i < t; i++) n[i] = this._default;
    this._store = arrayInsert(this._store, e, n);
  }
};
function arrayFill(e, t) {
  const n = [];
  for (let i = 0; i < e; i++) n[i] = t;
  return n;
}
var TokenMetadata = class {
  static getLanguageId(e) {
    return (e & 255) >>> 0;
  }
  static getTokenType(e) {
    return (e & 768) >>> 8;
  }
  static containsBalancedBrackets(e) {
    return (e & 1024) !== 0;
  }
  static getFontStyle(e) {
    return (e & 30720) >>> 11;
  }
  static getForeground(e) {
    return (e & 16744448) >>> 15;
  }
  static getBackground(e) {
    return (e & 4278190080) >>> 24;
  }
  static getClassNameFromMetadata(e) {
    let n = "mtk" + this.getForeground(e);
    const i = this.getFontStyle(e);
    return i & 1 && (n += " mtki"), i & 2 && (n += " mtkb"), i & 4 && (n += " mtku"), i & 8 && (n += " mtks"), n;
  }
  static getInlineStyleFromMetadata(e, t) {
    const n = this.getForeground(e), i = this.getFontStyle(e);
    let s = `color: ${t[n]};`;
    i & 1 && (s += "font-style: italic;"), i & 2 && (s += "font-weight: bold;");
    let r = "";
    return i & 4 && (r += " underline"), i & 8 && (r += " line-through"), r && (s += `text-decoration:${r};`), s;
  }
  static getPresentationFromMetadata(e) {
    const t = this.getForeground(e), n = this.getFontStyle(e);
    return { foreground: t, italic: !!(n & 1), bold: !!(n & 2), underline: !!(n & 4), strikethrough: !!(n & 8) };
  }
}, TokenArray = class Z {
  constructor(t) {
    this._tokenInfo = t;
  }
  static fromLineTokens(t) {
    const n = [];
    for (let i = 0; i < t.getCount(); i++) n.push(new TokenInfo(t.getEndOffset(i) - t.getStartOffset(i), t.getMetadata(i)));
    return Z.create(n);
  }
  static create(t) {
    return new Z(t);
  }
  toLineTokens(t, n) {
    return LineTokens.createFromTextAndMetadata(this.map((i, s) => ({ text: i.substring(t), metadata: s.metadata })), n);
  }
  forEach(t) {
    let n = 0;
    for (const i of this._tokenInfo) {
      const s = new OffsetRange(n, n + i.length);
      t(s, i), n += i.length;
    }
  }
  map(t) {
    const n = [];
    let i = 0;
    for (const s of this._tokenInfo) {
      const r = new OffsetRange(i, i + s.length);
      n.push(t(r, s)), i += s.length;
    }
    return n;
  }
  slice(t) {
    const n = [];
    let i = 0;
    for (const s of this._tokenInfo) {
      const r = i, o = r + s.length;
      if (o > t.start) {
        if (r >= t.endExclusive) break;
        const a = Math.max(0, t.start - r), l = Math.max(0, o - t.endExclusive);
        n.push(new TokenInfo(s.length - a - l, s.metadata));
      }
      i += s.length;
    }
    return Z.create(n);
  }
}, TokenInfo = class {
  constructor(e, t) {
    this.length = e, this.metadata = t;
  }
}, TokenArrayBuilder = class {
  constructor() {
    this._tokens = [];
  }
  add(e, t) {
    this._tokens.push(new TokenInfo(e, t));
  }
  build() {
    return TokenArray.create(this._tokens);
  }
}, _LineTokens = class F {
  constructor(t, n, i) {
    this._lineTokensBrand = void 0, (t.length > 1 ? t[t.length - 2] : 0) !== n.length && onUnexpectedError(new Error("Token length and text length do not match!")), this._tokens = t, this._tokensCount = this._tokens.length >>> 1, this._text = n, this.languageIdCodec = i;
  }
  static createEmpty(t, n) {
    const i = F.defaultTokenMetadata, s = new Uint32Array(2);
    return s[0] = t.length, s[1] = i, new F(s, t, n);
  }
  static createFromTextAndMetadata(t, n) {
    let i = 0, s = "";
    const r = new Array();
    for (const { text: o, metadata: a } of t) r.push(i + o.length, a), i += o.length, s += o;
    return new F(new Uint32Array(r), s, n);
  }
  static convertToEndOffset(t, n) {
    const s = (t.length >>> 1) - 1;
    for (let r = 0; r < s; r++) t[r << 1] = t[r + 1 << 1];
    t[s << 1] = n;
  }
  static findIndexInTokensArray(t, n) {
    if (t.length <= 2) return 0;
    let i = 0, s = (t.length >>> 1) - 1;
    for (; i < s; ) {
      const r = i + Math.floor((s - i) / 2), o = t[r << 1];
      if (o === n) return r + 1;
      o < n ? i = r + 1 : o > n && (s = r);
    }
    return i;
  }
  equals(t) {
    return t instanceof F ? this.slicedEquals(t, 0, this._tokensCount) : false;
  }
  slicedEquals(t, n, i) {
    if (this._text !== t._text || this._tokensCount !== t._tokensCount) return false;
    const s = n << 1, r = s + (i << 1);
    for (let o = s; o < r; o++) if (this._tokens[o] !== t._tokens[o]) return false;
    return true;
  }
  getLineContent() {
    return this._text;
  }
  getCount() {
    return this._tokensCount;
  }
  getStartOffset(t) {
    return t > 0 ? this._tokens[t - 1 << 1] : 0;
  }
  getMetadata(t) {
    return this._tokens[(t << 1) + 1];
  }
  getLanguageId(t) {
    const n = this._tokens[(t << 1) + 1], i = TokenMetadata.getLanguageId(n);
    return this.languageIdCodec.decodeLanguageId(i);
  }
  getStandardTokenType(t) {
    const n = this._tokens[(t << 1) + 1];
    return TokenMetadata.getTokenType(n);
  }
  getForeground(t) {
    const n = this._tokens[(t << 1) + 1];
    return TokenMetadata.getForeground(n);
  }
  getClassName(t) {
    const n = this._tokens[(t << 1) + 1];
    return TokenMetadata.getClassNameFromMetadata(n);
  }
  getInlineStyle(t, n) {
    const i = this._tokens[(t << 1) + 1];
    return TokenMetadata.getInlineStyleFromMetadata(i, n);
  }
  getPresentation(t) {
    const n = this._tokens[(t << 1) + 1];
    return TokenMetadata.getPresentationFromMetadata(n);
  }
  getEndOffset(t) {
    return this._tokens[t << 1];
  }
  findTokenIndexAtOffset(t) {
    return F.findIndexInTokensArray(this._tokens, t);
  }
  inflate() {
    return this;
  }
  sliceAndInflate(t, n, i) {
    return new SliceLineTokens(this, t, n, i);
  }
  sliceZeroCopy(t) {
    return this.sliceAndInflate(t.start, t.endExclusive, 0);
  }
  withInserted(t) {
    if (t.length === 0) return this;
    let n = 0, i = 0, s = "";
    const r = new Array();
    let o = 0;
    for (; ; ) {
      const a = n < this._tokensCount ? this._tokens[n << 1] : -1, l = i < t.length ? t[i] : null;
      if (a !== -1 && (l === null || a <= l.offset)) {
        s += this._text.substring(o, a);
        const u = this._tokens[(n << 1) + 1];
        r.push(s.length, u), n++, o = a;
      } else if (l) {
        if (l.offset > o) {
          s += this._text.substring(o, l.offset);
          const u = this._tokens[(n << 1) + 1];
          r.push(s.length, u), o = l.offset;
        }
        s += l.text, r.push(s.length, l.tokenMetadata), i++;
      } else break;
    }
    return new F(new Uint32Array(r), s, this.languageIdCodec);
  }
  getTokensInRange(t) {
    const n = new TokenArrayBuilder(), i = this.findTokenIndexAtOffset(t.start), s = this.findTokenIndexAtOffset(t.endExclusive);
    for (let r = i; r <= s; r++) {
      const a = new OffsetRange(this.getStartOffset(r), this.getEndOffset(r)).intersectionLength(t);
      a > 0 && n.add(a, this.getMetadata(r));
    }
    return n.build();
  }
  getTokenText(t) {
    const n = this.getStartOffset(t), i = this.getEndOffset(t);
    return this._text.substring(n, i);
  }
  forEach(t) {
    const n = this.getCount();
    for (let i = 0; i < n; i++) t(i);
  }
  extractObject() {
    return { tokens: this._tokens, text: this._text };
  }
  toString() {
    let t = "";
    return this.forEach((n) => {
      t += `[${this.getTokenText(n)}]{${this.getClassName(n)}}`;
    }), t;
  }
};
_LineTokens.defaultTokenMetadata = (32768 | 2 << 24) >>> 0;
var LineTokens = _LineTokens, SliceLineTokens = class ge {
  constructor(t, n, i, s) {
    this._source = t, this._startOffset = n, this._endOffset = i, this._deltaOffset = s, this._firstTokenIndex = t.findTokenIndexAtOffset(n), this.languageIdCodec = t.languageIdCodec, this._tokensCount = 0;
    for (let r = this._firstTokenIndex, o = t.getCount(); r < o && !(t.getStartOffset(r) >= i); r++) this._tokensCount++;
  }
  getMetadata(t) {
    return this._source.getMetadata(this._firstTokenIndex + t);
  }
  getLanguageId(t) {
    return this._source.getLanguageId(this._firstTokenIndex + t);
  }
  getLineContent() {
    return this._source.getLineContent().substring(this._startOffset, this._endOffset);
  }
  equals(t) {
    return t instanceof ge ? this._startOffset === t._startOffset && this._endOffset === t._endOffset && this._deltaOffset === t._deltaOffset && this._source.slicedEquals(t._source, this._firstTokenIndex, this._tokensCount) : false;
  }
  getCount() {
    return this._tokensCount;
  }
  getStandardTokenType(t) {
    return this._source.getStandardTokenType(this._firstTokenIndex + t);
  }
  getForeground(t) {
    return this._source.getForeground(this._firstTokenIndex + t);
  }
  getEndOffset(t) {
    const n = this._source.getEndOffset(this._firstTokenIndex + t);
    return Math.min(this._endOffset, n) - this._startOffset + this._deltaOffset;
  }
  getClassName(t) {
    return this._source.getClassName(this._firstTokenIndex + t);
  }
  getInlineStyle(t, n) {
    return this._source.getInlineStyle(this._firstTokenIndex + t, n);
  }
  getPresentation(t) {
    return this._source.getPresentation(this._firstTokenIndex + t);
  }
  findTokenIndexAtOffset(t) {
    return this._source.findTokenIndexAtOffset(t + this._startOffset - this._deltaOffset) - this._firstTokenIndex;
  }
  getTokenText(t) {
    const n = this._firstTokenIndex + t, i = this._source.getStartOffset(n), s = this._source.getEndOffset(n);
    let r = this._source.getTokenText(n);
    return i < this._startOffset && (r = r.substring(this._startOffset - i)), s > this._endOffset && (r = r.substring(0, r.length - (s - this._endOffset))), r;
  }
  forEach(t) {
    for (let n = 0; n < this.getCount(); n++) t(n);
  }
}, EMPTY_LINE_TOKENS = new Uint32Array(0).buffer, ContiguousTokensEditing = class le {
  static deleteBeginning(t, n) {
    return t === null || t === EMPTY_LINE_TOKENS ? t : le.delete(t, 0, n);
  }
  static deleteEnding(t, n) {
    if (t === null || t === EMPTY_LINE_TOKENS) return t;
    const i = toUint32Array(t), s = i[i.length - 2];
    return le.delete(t, n, s);
  }
  static delete(t, n, i) {
    if (t === null || t === EMPTY_LINE_TOKENS || n === i) return t;
    const s = toUint32Array(t), r = s.length >>> 1;
    if (n === 0 && s[s.length - 2] === i) return EMPTY_LINE_TOKENS;
    const o = LineTokens.findIndexInTokensArray(s, n), a = o > 0 ? s[o - 1 << 1] : 0, l = s[o << 1];
    if (i < l) {
      const w = i - n;
      for (let T = o; T < r; T++) s[T << 1] -= w;
      return t;
    }
    let u, d;
    a !== n ? (s[o << 1] = n, u = o + 1 << 1, d = n) : (u = o << 1, d = a);
    const c = i - n;
    for (let w = o + 1; w < r; w++) {
      const T = s[w << 1] - c;
      T > d && (s[u++] = T, s[u++] = s[(w << 1) + 1], d = T);
    }
    if (u === s.length) return t;
    const g = new Uint32Array(u);
    return g.set(s.subarray(0, u), 0), g.buffer;
  }
  static append(t, n) {
    if (n === EMPTY_LINE_TOKENS) return t;
    if (t === EMPTY_LINE_TOKENS) return n;
    if (t === null) return t;
    if (n === null) return null;
    const i = toUint32Array(t), s = toUint32Array(n), r = s.length >>> 1, o = new Uint32Array(i.length + s.length);
    o.set(i, 0);
    let a = i.length;
    const l = i[i.length - 2];
    for (let u = 0; u < r; u++) o[a++] = s[u << 1] + l, o[a++] = s[(u << 1) + 1];
    return o.buffer;
  }
  static insert(t, n, i) {
    if (t === null || t === EMPTY_LINE_TOKENS) return t;
    const s = toUint32Array(t), r = s.length >>> 1;
    let o = LineTokens.findIndexInTokensArray(s, n);
    o > 0 && s[o - 1 << 1] === n && o--;
    for (let a = o; a < r; a++) s[a << 1] += i;
    return t;
  }
};
function toUint32Array(e) {
  return e instanceof Uint32Array ? e : new Uint32Array(e);
}
var ContiguousMultilineTokens = class be {
  static deserialize(t, n, i) {
    const s = new Uint32Array(t.buffer), r = readUInt32BE(t, n);
    n += 4;
    const o = readUInt32BE(t, n);
    n += 4;
    const a = [];
    for (let l = 0; l < o; l++) {
      const u = readUInt32BE(t, n);
      n += 4, a.push(s.subarray(n / 4, n / 4 + u / 4)), n += u;
    }
    return i.push(new be(r, a)), n;
  }
  get startLineNumber() {
    return this._startLineNumber;
  }
  get endLineNumber() {
    return this._startLineNumber + this._tokens.length - 1;
  }
  constructor(t, n) {
    this._startLineNumber = t, this._tokens = n;
  }
  getLineRange() {
    return new LineRange(this._startLineNumber, this._startLineNumber + this._tokens.length);
  }
  getLineTokens(t) {
    return this._tokens[t - this._startLineNumber];
  }
  appendLineTokens(t) {
    this._tokens.push(t);
  }
  serializeSize() {
    let t = 0;
    t += 4, t += 4;
    for (let n = 0; n < this._tokens.length; n++) {
      const i = this._tokens[n];
      if (!(i instanceof Uint32Array)) throw new Error("Not supported!");
      t += 4, t += i.byteLength;
    }
    return t;
  }
  serialize(t, n) {
    writeUInt32BE(t, this._startLineNumber, n), n += 4, writeUInt32BE(t, this._tokens.length, n), n += 4;
    for (let i = 0; i < this._tokens.length; i++) {
      const s = this._tokens[i];
      if (!(s instanceof Uint32Array)) throw new Error("Not supported!");
      writeUInt32BE(t, s.byteLength, n), n += 4, t.set(new Uint8Array(s.buffer), n), n += s.byteLength;
    }
    return n;
  }
  applyEdit(t, n) {
    const [i, s] = countEOL(n);
    this._acceptDeleteRange(t), this._acceptInsertText(new Position(t.startLineNumber, t.startColumn), i, s);
  }
  _acceptDeleteRange(t) {
    if (t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn) return;
    const n = t.startLineNumber - this._startLineNumber, i = t.endLineNumber - this._startLineNumber;
    if (i < 0) {
      const s = i - n;
      this._startLineNumber -= s;
      return;
    }
    if (!(n >= this._tokens.length)) {
      if (n < 0 && i >= this._tokens.length) {
        this._startLineNumber = 0, this._tokens = [];
        return;
      }
      if (n === i) {
        this._tokens[n] = ContiguousTokensEditing.delete(this._tokens[n], t.startColumn - 1, t.endColumn - 1);
        return;
      }
      if (n >= 0) if (this._tokens[n] = ContiguousTokensEditing.deleteEnding(this._tokens[n], t.startColumn - 1), i < this._tokens.length) {
        const s = ContiguousTokensEditing.deleteBeginning(this._tokens[i], t.endColumn - 1);
        this._tokens[n] = ContiguousTokensEditing.append(this._tokens[n], s), this._tokens.splice(n + 1, i - n);
      } else this._tokens[n] = ContiguousTokensEditing.append(this._tokens[n], null), this._tokens = this._tokens.slice(0, n + 1);
      else {
        const s = -n;
        this._startLineNumber -= s, this._tokens[i] = ContiguousTokensEditing.deleteBeginning(this._tokens[i], t.endColumn - 1), this._tokens = this._tokens.slice(i);
      }
    }
  }
  _acceptInsertText(t, n, i) {
    if (n === 0 && i === 0) return;
    const s = t.lineNumber - this._startLineNumber;
    if (s < 0) {
      this._startLineNumber += n;
      return;
    }
    if (!(s >= this._tokens.length)) {
      if (n === 0) {
        this._tokens[s] = ContiguousTokensEditing.insert(this._tokens[s], t.column - 1, i);
        return;
      }
      this._tokens[s] = ContiguousTokensEditing.deleteEnding(this._tokens[s], t.column - 1), this._tokens[s] = ContiguousTokensEditing.insert(this._tokens[s], t.column - 1, i), this._insertLines(t.lineNumber, n);
    }
  }
  _insertLines(t, n) {
    if (n === 0) return;
    const i = [];
    for (let s = 0; s < n; s++) i[s] = null;
    this._tokens = arrayInsert(this._tokens, t, i);
  }
}, ContiguousMultilineTokensBuilder = class {
  static deserialize(e) {
    let t = 0;
    const n = readUInt32BE(e, t);
    t += 4;
    const i = [];
    for (let s = 0; s < n; s++) t = ContiguousMultilineTokens.deserialize(e, t, i);
    return i;
  }
  constructor() {
    this._tokens = [];
  }
  add(e, t) {
    if (this._tokens.length > 0) {
      const n = this._tokens[this._tokens.length - 1];
      if (n.endLineNumber + 1 === e) {
        n.appendLineTokens(t);
        return;
      }
    }
    this._tokens.push(new ContiguousMultilineTokens(e, [t]));
  }
  finalize() {
    return this._tokens;
  }
  serialize() {
    const e = this._serializeSize(), t = new Uint8Array(e);
    return this._serialize(t), t;
  }
  _serializeSize() {
    let e = 0;
    e += 4;
    for (let t = 0; t < this._tokens.length; t++) e += this._tokens[t].serializeSize();
    return e;
  }
  _serialize(e) {
    let t = 0;
    writeUInt32BE(e, this._tokens.length, t), t += 4;
    for (let n = 0; n < this._tokens.length; n++) t = this._tokens[n].serialize(e, t);
  }
}, TokenizerWithStateStore = class {
  constructor(e, t) {
    this.tokenizationSupport = t, this.initialState = this.tokenizationSupport.getInitialState(), this.store = new TrackingTokenizationStateStore(e);
  }
  getStartState(e) {
    return this.store.getStartState(e, this.initialState);
  }
  getFirstInvalidLine() {
    return this.store.getFirstInvalidLine(this.initialState);
  }
}, TrackingTokenizationStateStore = class {
  constructor(e) {
    this.lineCount = e, this._tokenizationStateStore = new TokenizationStateStore(), this._invalidEndStatesLineNumbers = new RangePriorityQueueImpl(), this._invalidEndStatesLineNumbers.addRange(new OffsetRange(1, e + 1));
  }
  getEndState(e) {
    return this._tokenizationStateStore.getEndState(e);
  }
  setEndState(e, t) {
    if (!t) throw new BugIndicatingError("Cannot set null/undefined state");
    this._invalidEndStatesLineNumbers.delete(e);
    const n = this._tokenizationStateStore.setEndState(e, t);
    return n && e < this.lineCount && this._invalidEndStatesLineNumbers.addRange(new OffsetRange(e + 1, e + 2)), n;
  }
  acceptChange(e, t) {
    this.lineCount += t - e.length, this._tokenizationStateStore.acceptChange(e, t), this._invalidEndStatesLineNumbers.addRangeAndResize(new OffsetRange(e.startLineNumber, e.endLineNumberExclusive), t);
  }
  acceptChanges(e) {
    for (const t of e) {
      const [n] = countEOLInChange(t);
      this.acceptChange(new LineRange(t.range.startLineNumber, t.range.endLineNumber + 1), n + 1);
    }
  }
  invalidateEndStateRange(e) {
    this._invalidEndStatesLineNumbers.addRange(new OffsetRange(e.startLineNumber, e.endLineNumberExclusive));
  }
  getFirstInvalidEndStateLineNumber() {
    return this._invalidEndStatesLineNumbers.min;
  }
  getFirstInvalidEndStateLineNumberOrMax() {
    return this.getFirstInvalidEndStateLineNumber() || Number.MAX_SAFE_INTEGER;
  }
  allStatesValid() {
    return this._invalidEndStatesLineNumbers.min === null;
  }
  getStartState(e, t) {
    return e === 1 ? t : this.getEndState(e - 1);
  }
  getFirstInvalidLine(e) {
    const t = this.getFirstInvalidEndStateLineNumber();
    if (t === null) return null;
    const n = this.getStartState(t, e);
    if (!n) throw new BugIndicatingError("Start state must be defined");
    return { lineNumber: t, startState: n };
  }
}, TokenizationStateStore = class {
  constructor() {
    this._lineEndStates = new FixedArray(null);
  }
  getEndState(e) {
    return this._lineEndStates.get(e);
  }
  setEndState(e, t) {
    const n = this._lineEndStates.get(e);
    return n && n.equals(t) ? false : (this._lineEndStates.set(e, t), true);
  }
  acceptChange(e, t) {
    let n = e.length;
    t > 0 && n > 0 && (n--, t--), this._lineEndStates.replace(e.startLineNumber, n, t);
  }
  acceptChanges(e) {
    for (const t of e) {
      const [n] = countEOLInChange(t);
      this.acceptChange(new LineRange(t.range.startLineNumber, t.range.endLineNumber + 1), n + 1);
    }
  }
}, RangePriorityQueueImpl = class {
  constructor() {
    this._ranges = [];
  }
  getRanges() {
    return this._ranges;
  }
  get min() {
    return this._ranges.length === 0 ? null : this._ranges[0].start;
  }
  removeMin() {
    if (this._ranges.length === 0) return null;
    const e = this._ranges[0];
    return e.start + 1 === e.endExclusive ? this._ranges.shift() : this._ranges[0] = new OffsetRange(e.start + 1, e.endExclusive), e.start;
  }
  delete(e) {
    const t = this._ranges.findIndex((n) => n.contains(e));
    if (t !== -1) {
      const n = this._ranges[t];
      n.start === e ? n.endExclusive === e + 1 ? this._ranges.splice(t, 1) : this._ranges[t] = new OffsetRange(e + 1, n.endExclusive) : n.endExclusive === e + 1 ? this._ranges[t] = new OffsetRange(n.start, e) : this._ranges.splice(t, 1, new OffsetRange(n.start, e), new OffsetRange(e + 1, n.endExclusive));
    }
  }
  addRange(e) {
    OffsetRange.addRange(e, this._ranges);
  }
  addRangeAndResize(e, t) {
    let n = 0;
    for (; !(n >= this._ranges.length || e.start <= this._ranges[n].endExclusive); ) n++;
    let i = n;
    for (; !(i >= this._ranges.length || e.endExclusive < this._ranges[i].start); ) i++;
    const s = t - e.length;
    for (let r = i; r < this._ranges.length; r++) this._ranges[r] = this._ranges[r].delta(s);
    if (n === i) {
      const r = new OffsetRange(e.start, e.start + t);
      r.isEmpty || this._ranges.splice(n, 0, r);
    } else {
      const r = Math.min(e.start, this._ranges[n].start), o = Math.max(e.endExclusive, this._ranges[i - 1].endExclusive), a = new OffsetRange(r, o + s);
      a.isEmpty ? this._ranges.splice(n, i - n) : this._ranges.splice(n, i - n, a);
    }
  }
  toString() {
    return this._ranges.map((e) => e.toString()).join(" + ");
  }
}, TextMateTokenizationSupport = class extends Disposable {
  constructor(e, t, n, i, s, r, o) {
    super(), this._grammar = e, this._initialState = t, this._containsEmbeddedLanguages = n, this._createBackgroundTokenizer = i, this._backgroundTokenizerShouldOnlyVerifyTokens = s, this._reportTokenizationTime = r, this._reportSlowTokenization = o, this._seenLanguages = [], this._onDidEncounterLanguage = this._register(new Emitter()), this.onDidEncounterLanguage = this._onDidEncounterLanguage.event;
  }
  get backgroundTokenizerShouldOnlyVerifyTokens() {
    return this._backgroundTokenizerShouldOnlyVerifyTokens();
  }
  getInitialState() {
    return this._initialState;
  }
  tokenize(e, t, n) {
    throw new Error("Not supported!");
  }
  createBackgroundTokenizer(e, t) {
    if (this._createBackgroundTokenizer) return this._createBackgroundTokenizer(e, t);
  }
  tokenizeEncoded(e, t, n) {
    const i = Math.random() * 1e4 < 1, s = this._reportSlowTokenization || i, r = s ? new StopWatch(true) : void 0, o = this._grammar.tokenizeLine2(e, n, 500);
    if (s) {
      const l = r.elapsed();
      (i || l > 32) && this._reportTokenizationTime(l, e.length, i);
    }
    if (o.stoppedEarly) return console.warn(`Time limit reached when tokenizing line: ${e.substring(0, 100)}`), new EncodedTokenizationResult(o.tokens, n);
    if (this._containsEmbeddedLanguages) {
      const l = this._seenLanguages, u = o.tokens;
      for (let d = 0, c = u.length >>> 1; d < c; d++) {
        const g = u[(d << 1) + 1], w = TokenMetadata.getLanguageId(g);
        l[w] || (l[w] = true, this._onDidEncounterLanguage.fire(w));
      }
    }
    let a;
    return n.equals(o.ruleStack) ? a = n : a = o.ruleStack, new EncodedTokenizationResult(o.tokens, a);
  }
}, TokenizationSupportWithLineLimit = class extends Disposable {
  constructor(e, t, n, i) {
    super(), this._encodedLanguageId = e, this._actual = t, this._maxTokenizationLineLength = i, this._register(keepObserved(this._maxTokenizationLineLength)), this._register(n);
  }
  get backgroundTokenizerShouldOnlyVerifyTokens() {
    return this._actual.backgroundTokenizerShouldOnlyVerifyTokens;
  }
  getInitialState() {
    return this._actual.getInitialState();
  }
  tokenize(e, t, n) {
    throw new Error("Not supported!");
  }
  tokenizeEncoded(e, t, n) {
    return e.length >= this._maxTokenizationLineLength.get() ? nullTokenizeEncoded(this._encodedLanguageId, n) : this._actual.tokenizeEncoded(e, t, n);
  }
  createBackgroundTokenizer(e, t) {
    if (this._actual.createBackgroundTokenizer) return this._actual.createBackgroundTokenizer(e, t);
  }
}, TextMateWorkerTokenizer = class extends MirrorTextModel {
  constructor(e, t, n, i, s, r, o, a) {
    super(e, t, n, i), this._host = s, this._languageId = r, this._encodedLanguageId = o, this._tokenizerWithStateStore = null, this._isDisposed = false, this._maxTokenizationLineLength = observableValue(this, -1), this._tokenizeDebouncer = new RunOnceScheduler(() => this._tokenize(), 10), this._maxTokenizationLineLength.set(a, void 0), this._resetTokenization();
  }
  dispose() {
    this._isDisposed = true, super.dispose();
  }
  onLanguageId(e, t) {
    this._languageId = e, this._encodedLanguageId = t, this._resetTokenization();
  }
  onEvents(e) {
    super.onEvents(e), this._tokenizerWithStateStore?.store.acceptChanges(e.changes), this._tokenizeDebouncer.schedule();
  }
  acceptMaxTokenizationLineLength(e) {
    this._maxTokenizationLineLength.set(e, void 0);
  }
  retokenize(e, t) {
    this._tokenizerWithStateStore && (this._tokenizerWithStateStore.store.invalidateEndStateRange(new LineRange(e, t)), this._tokenizeDebouncer.schedule());
  }
  async _resetTokenization() {
    this._tokenizerWithStateStore = null;
    const e = this._languageId, t = this._encodedLanguageId, n = await this._host.getOrCreateGrammar(e, t);
    if (!(this._isDisposed || e !== this._languageId || t !== this._encodedLanguageId || !n)) {
      if (n.grammar) {
        const i = new TokenizationSupportWithLineLimit(this._encodedLanguageId, new TextMateTokenizationSupport(n.grammar, n.initialState, false, void 0, () => false, (s, r, o) => {
          this._host.reportTokenizationTime(s, e, n.sourceExtensionId, r, o);
        }, false), Disposable.None, this._maxTokenizationLineLength);
        this._tokenizerWithStateStore = new TokenizerWithStateStore(this._lines.length, i);
      } else this._tokenizerWithStateStore = null;
      this._tokenize();
    }
  }
  async _tokenize() {
    if (this._isDisposed || !this._tokenizerWithStateStore) return;
    if (!this._diffStateStacksRefEqFn) {
      const { diffStateStacksRefEq: t } = await importAMDNodeModule("vscode-textmate", "release/main.js");
      this._diffStateStacksRefEqFn = t;
    }
    const e = (/* @__PURE__ */ new Date()).getTime();
    for (; ; ) {
      let t = 0;
      const n = new ContiguousMultilineTokensBuilder(), i = new StateDeltaBuilder();
      for (; ; ) {
        const o = this._tokenizerWithStateStore.getFirstInvalidLine();
        if (o === null || t > 200) break;
        t++;
        const a = this._lines[o.lineNumber - 1], l = this._tokenizerWithStateStore.tokenizationSupport.tokenizeEncoded(a, true, o.startState);
        if (this._tokenizerWithStateStore.store.setEndState(o.lineNumber, l.endState)) {
          const d = this._diffStateStacksRefEqFn(o.startState, l.endState);
          i.setState(o.lineNumber, d);
        } else i.setState(o.lineNumber, null);
        if (LineTokens.convertToEndOffset(l.tokens, a.length), n.add(o.lineNumber, l.tokens), (/* @__PURE__ */ new Date()).getTime() - e > 20) break;
      }
      if (t === 0) break;
      const s = i.getStateDeltas();
      if (this._host.setTokensAndStates(this._versionId, n.serialize(), s), (/* @__PURE__ */ new Date()).getTime() - e > 20) {
        setTimeout0(() => this._tokenize());
        return;
      }
    }
  }
}, StateDeltaBuilder = class {
  constructor() {
    this._lastStartLineNumber = -1, this._stateDeltas = [];
  }
  setState(e, t) {
    e === this._lastStartLineNumber + 1 ? this._stateDeltas[this._stateDeltas.length - 1].stateDeltas.push(t) : this._stateDeltas.push({ startLineNumber: e, stateDeltas: [t] }), this._lastStartLineNumber = e;
  }
  getStateDeltas() {
    return this._stateDeltas;
  }
}, _TextMateWorkerHost = class ue {
  static getChannel(t) {
    return t.getChannel(ue.CHANNEL_NAME);
  }
  static setChannel(t, n) {
    t.setChannel(ue.CHANNEL_NAME, n);
  }
};
_TextMateWorkerHost.CHANNEL_NAME = "textMateWorkerHost";
var TextMateWorkerHost = _TextMateWorkerHost;
function create(e) {
  return new TextMateTokenizationWorker(e);
}
var TextMateTokenizationWorker = class {
  constructor(e) {
    this._models = /* @__PURE__ */ new Map(), this._grammarCache = [], this._grammarFactory = Promise.resolve(null), this._host = TextMateWorkerHost.getChannel(e);
  }
  async $init(e) {
    const t = e.grammarDefinitions.map((n) => ({ location: URI.revive(n.location), language: n.language, scopeName: n.scopeName, embeddedLanguages: n.embeddedLanguages, tokenTypes: n.tokenTypes, injectTo: n.injectTo, balancedBracketSelectors: n.balancedBracketSelectors, unbalancedBracketSelectors: n.unbalancedBracketSelectors, sourceExtensionId: n.sourceExtensionId }));
    this._grammarFactory = this._loadTMGrammarFactory(t, e.onigurumaWASMUri);
  }
  async _loadTMGrammarFactory(e, t) {
    const n = await importAMDNodeModule("vscode-textmate", "release/main.js"), i = await importAMDNodeModule("vscode-oniguruma", "release/main.js"), r = await (await fetch(t)).arrayBuffer();
    await i.loadWASM(r);
    const o = Promise.resolve({ createOnigScanner: (a) => i.createOnigScanner(a), createOnigString: (a) => i.createOnigString(a) });
    return new TMGrammarFactory({ logTrace: (a) => {
    }, logError: (a, l) => console.error(a, l), readFile: (a) => this._host.$readFile(a) }, e, n, o);
  }
  $acceptNewModel(e) {
    const t = URI.revive(e.uri), n = this;
    this._models.set(e.controllerId, new TextMateWorkerTokenizer(t, e.lines, e.EOL, e.versionId, { async getOrCreateGrammar(i, s) {
      const r = await n._grammarFactory;
      return r ? (n._grammarCache[s] || (n._grammarCache[s] = r.createGrammar(i, s)), n._grammarCache[s]) : Promise.resolve(null);
    }, setTokensAndStates(i, s, r) {
      n._host.$setTokensAndStates(e.controllerId, i, s, r);
    }, reportTokenizationTime(i, s, r, o, a) {
      n._host.$reportTokenizationTime(i, s, r, o, a);
    } }, e.languageId, e.encodedLanguageId, e.maxTokenizationLineLength));
  }
  $acceptModelChanged(e, t) {
    this._models.get(e).onEvents(t);
  }
  $retokenize(e, t, n) {
    this._models.get(e).retokenize(t, n);
  }
  $acceptModelLanguageChanged(e, t, n) {
    this._models.get(e).onLanguageId(t, n);
  }
  $acceptRemovedModel(e) {
    const t = this._models.get(e);
    t && (t.dispose(), this._models.delete(e));
  }
  async $acceptTheme(e, t) {
    (await this._grammarFactory)?.setTheme(e, t);
  }
  $acceptMaxTokenizationLineLength(e, t) {
    this._models.get(e).acceptMaxTokenizationLineLength(t);
  }
}, DEFAULT_CHANNEL = "default", INITIALIZE = "$initialize", RequestMessage = class {
  constructor(e, t, n, i, s) {
    this.vsWorker = e, this.req = t, this.channel = n, this.method = i, this.args = s, this.type = 0;
  }
}, ReplyMessage = class {
  constructor(e, t, n, i) {
    this.vsWorker = e, this.seq = t, this.res = n, this.err = i, this.type = 1;
  }
}, SubscribeEventMessage = class {
  constructor(e, t, n, i, s) {
    this.vsWorker = e, this.req = t, this.channel = n, this.eventName = i, this.arg = s, this.type = 2;
  }
}, EventMessage = class {
  constructor(e, t, n) {
    this.vsWorker = e, this.req = t, this.event = n, this.type = 3;
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
  sendMessage(e, t, n) {
    const i = String(++this._lastSentReq);
    return new Promise((s, r) => {
      this._pendingReplies[i] = { resolve: s, reject: r }, this._send(new RequestMessage(this._workerId, i, e, t, n));
    });
  }
  listen(e, t, n) {
    let i = null;
    const s = new Emitter({ onWillAddFirstListener: () => {
      i = String(++this._lastSentReq), this._pendingEmitters.set(i, s), this._send(new SubscribeEventMessage(this._workerId, i, e, t, n));
    }, onDidRemoveLastListener: () => {
      this._pendingEmitters.delete(i), this._send(new UnsubscribeEventMessage(this._workerId, i)), i = null;
    } });
    return s.event;
  }
  handleMessage(e) {
    !e || !e.vsWorker || this._workerId !== -1 && e.vsWorker !== this._workerId || this._handleMessage(e);
  }
  createProxyToRemoteChannel(e, t) {
    const n = { get: (i, s) => (typeof s == "string" && !i[s] && (propertyIsDynamicEvent(s) ? i[s] = (r) => this.listen(e, s, r) : propertyIsEvent(s) ? i[s] = this.listen(e, s, void 0) : s.charCodeAt(0) === 36 && (i[s] = async (...r) => (await t?.(), this.sendMessage(e, s, r)))), i[s]) };
    return new Proxy(/* @__PURE__ */ Object.create(null), n);
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
      let n = e.err;
      e.err.$isError && (n = new Error(), n.name = e.err.name, n.message = e.err.message, n.stack = e.err.stack), t.reject(n);
      return;
    }
    t.resolve(e.res);
  }
  _handleRequestMessage(e) {
    const t = e.req;
    this._handler.handleMessage(e.channel, e.method, e.args).then((i) => {
      this._send(new ReplyMessage(this._workerId, t, i, void 0));
    }, (i) => {
      i.detail instanceof Error && (i.detail = transformErrorForSerialization(i.detail)), this._send(new ReplyMessage(this._workerId, t, void 0, transformErrorForSerialization(i)));
    });
  }
  _handleSubscribeEventMessage(e) {
    const t = e.req, n = this._handler.handleEvent(e.channel, e.eventName, e.arg)((i) => {
      this._send(new EventMessage(this._workerId, t, i));
    });
    this._pendingEvents.set(t, n);
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
    if (e.type === 0) for (let n = 0; n < e.args.length; n++) {
      const i = e.args[n];
      (i instanceof ArrayBuffer || typeof MessagePort < "u" && i instanceof MessagePort) && t.push(i);
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
    this._localChannels = /* @__PURE__ */ new Map(), this._remoteChannels = /* @__PURE__ */ new Map(), this._protocol = new WebWorkerProtocol({ sendMessage: (n, i) => {
      e(n, i);
    }, handleMessage: (n, i, s) => this._handleMessage(n, i, s), handleEvent: (n, i, s) => this._handleEvent(n, i, s) }), this.requestHandler = t(this);
  }
  onmessage(e) {
    this._protocol.handleMessage(e);
  }
  _handleMessage(e, t, n) {
    if (e === DEFAULT_CHANNEL && t === INITIALIZE) return this.initialize(n[0]);
    const i = e === DEFAULT_CHANNEL ? this.requestHandler : this._localChannels.get(e);
    if (!i) return Promise.reject(new Error(`Missing channel ${e} on worker thread`));
    if (typeof i[t] != "function") return Promise.reject(new Error(`Missing method ${t} on worker thread channel ${e}`));
    try {
      return Promise.resolve(i[t].apply(i, n));
    } catch (s) {
      return Promise.reject(s);
    }
  }
  _handleEvent(e, t, n) {
    const i = e === DEFAULT_CHANNEL ? this.requestHandler : this._localChannels.get(e);
    if (!i) throw new Error(`Missing channel ${e} on worker thread`);
    if (propertyIsDynamicEvent(t)) {
      const s = i[t].call(i, n);
      if (typeof s != "function") throw new Error(`Missing dynamic event ${t} on request handler.`);
      return s;
    }
    if (propertyIsEvent(t)) {
      const s = i[t];
      if (typeof s != "function") throw new Error(`Missing event ${t} on request handler.`);
      return s;
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
  const t = new WebWorkerServer((n, i) => globalThis.postMessage(n, i), (n) => e(n));
  return globalThis.onmessage = (n) => {
    t.onmessage(n.data);
  }, t;
}
function bootstrapWebWorker(e) {
  globalThis.onmessage = (t) => {
    initialized || initialize(e);
  };
}
bootstrapWebWorker(create);
