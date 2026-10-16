"use strict";
!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c08d4ec4-6e7b-592b-b6f5-16f2c9f01ca5");
  } catch (e2) {
  }
})();
(function() {
  const { ipcRenderer: o, webFrame: n, contextBridge: u, webUtils: f } = require("electron");
  function t(e) {
    if (!e || !e.startsWith("vscode:")) throw new Error(`Unsupported event IPC channel '${e}'`);
    return true;
  }
  function d(e) {
    if (typeof e == "string") return { nonce: e, responseData: void 0 };
    if (typeof e == "object" && e !== null && "nonce" in e && typeof e.nonce == "string" && "responseData" in e) return { nonce: e.nonce, responseData: e.responseData };
  }
  function g(e) {
    for (const r of process.argv) if (r.indexOf(`--${e}=`) === 0) return r.split("=")[1];
  }
  let s;
  const i = (async () => {
    const e = g("vscode-window-config");
    if (!e) throw new Error("Preload: did not find expected vscode-window-config in renderer process arguments list.");
    try {
      t(e);
      const r = s = await o.invoke(e);
      return Object.assign(process.env, r.userEnv), n.setZoomLevel(r.zoomLevel ?? 0), r;
    } catch (r) {
      throw new Error(`Preload: unable to fetch vscode-window-config: ${r}`);
    }
  })(), v = (async () => {
    const [e, r] = await Promise.all([(async () => (await i).userEnv)(), o.invoke("vscode:fetchShellEnv")]);
    return { ...process.env, ...r, ...e };
  })(), c = { ipcRenderer: { send(e, ...r) {
    t(e) && o.send(e, ...r);
  }, invoke(e, ...r) {
    return t(e), o.invoke(e, ...r);
  }, on(e, r) {
    return t(e), o.on(e, r), this;
  }, once(e, r) {
    return t(e), o.once(e, r), this;
  }, removeListener(e, r) {
    return t(e), o.removeListener(e, r), this;
  } }, ipcMessagePort: { acquire(e, r) {
    if (t(e)) {
      const a = (w, l) => {
        const p = d(l);
        r === p?.nonce && (o.off(e, a), window.postMessage(p, "*", w.ports));
      };
      o.on(e, a);
    }
  } }, webFrame: { setZoomLevel(e) {
    typeof e == "number" && n.setZoomLevel(e);
  } }, webUtils: { getPathForFile(e) {
    return f.getPathForFile(e);
  } }, process: { get platform() {
    return process.platform;
  }, get arch() {
    return process.arch;
  }, get env() {
    return { ...process.env };
  }, get versions() {
    return process.versions;
  }, get type() {
    return "renderer";
  }, get execPath() {
    return process.execPath;
  }, get pid() {
    return process.pid;
  }, cwd() {
    return process.env.VSCODE_CWD || process.execPath.substr(0, process.execPath.lastIndexOf(process.platform === "win32" ? "\\" : "/"));
  }, shellEnv() {
    return v;
  }, getProcessMemoryInfo() {
    return process.getProcessMemoryInfo();
  }, on(e, r) {
    process.on(e, r);
  }, getHeapStatistics() {
    return process.getHeapStatistics();
  } }, context: { configuration() {
    return s;
  }, async resolveConfiguration() {
    return i;
  } } };
  if (process.contextIsolated) try {
    u.exposeInMainWorld("vscode", c);
  } catch (e) {
    console.error(e);
  }
  else window.vscode = c;
})();
