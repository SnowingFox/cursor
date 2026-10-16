"use strict";
!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6909e491-29a0-590e-841e-e0dc54640326");
  } catch (e2) {
  }
})();
(function() {
  const { ipcRenderer: o, webFrame: n, contextBridge: s } = require("electron");
  function t(e) {
    if (!e || !e.startsWith("vscode:")) throw new Error(`Unsupported event IPC channel '${e}'`);
    return true;
  }
  const i = { ipcRenderer: { send(e, ...r) {
    t(e) && o.send(e, ...r);
  }, invoke(e, ...r) {
    return t(e), o.invoke(e, ...r);
  } }, webFrame: { setZoomLevel(e) {
    typeof e == "number" && n.setZoomLevel(e);
  } } };
  try {
    s.exposeInMainWorld("vscode", i);
  } catch (e) {
    console.error(e);
  }
})();
