"use strict";
var d = Object.create;
var h = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var f = Object.getOwnPropertyNames;
var T = Object.getPrototypeOf, _ = Object.prototype.hasOwnProperty;
var m = (t, e, n, o) => {
  if (e && typeof e == "object" || typeof e == "function") for (let s of f(e)) !_.call(t, s) && s !== n && h(t, s, { get: () => e[s], enumerable: !(o = l(e, s)) || o.enumerable });
  return t;
};
var P = (t, e, n) => (n = t != null ? d(T(t)) : {}, m(e || !t || !t.__esModule ? h(n, "default", { value: t, enumerable: true }) : n, t));
var p = P(require("http")), i = class {
  constructor(e) {
    this.handlerName = e;
    let n = process.env.VSCODE_GIT_IPC_HANDLE;
    if (!n) throw new Error("Missing VSCODE_GIT_IPC_HANDLE");
    let o = process.env.VSCODE_GIT_IPC_AUTH_TOKEN;
    if (!o) throw new Error("Missing VSCODE_GIT_IPC_AUTH_TOKEN");
    this.ipcHandlePath = n, this.authToken = o;
  }
  call(e) {
    let n = { socketPath: this.ipcHandlePath, path: `/${this.handlerName}`, method: "POST", headers: { "x-cursor-git-auth-token": this.authToken } };
    return new Promise((o, s) => {
      let a = p.request(n, (r) => {
        if (r.statusCode !== 200) return s(new Error(`Bad status code: ${r.statusCode}`));
        let c = [];
        r.on("data", (u) => c.push(u)), r.on("end", () => o(JSON.parse(Buffer.concat(c).toString("utf8"))));
      });
      a.on("error", (r) => s(r)), a.write(JSON.stringify(e)), a.end();
    });
  }
};
function g(t) {
  console.error(t), process.exit(1);
}
function C(t) {
  let e = new i("git-editor"), n = t[t.length - 1];
  e.call({ commitMessagePath: n }).then(() => {
    setTimeout(() => process.exit(0), 0);
  }).catch((o) => g(o));
}
C(process.argv);
