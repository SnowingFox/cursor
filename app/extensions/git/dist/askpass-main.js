"use strict";
var T = Object.create;
var h = Object.defineProperty;
var E = Object.getOwnPropertyDescriptor;
var P = Object.getOwnPropertyNames;
var d = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var C = (s, t, e, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (let n of P(t)) !l.call(s, n) && n !== e && h(s, n, { get: () => t[n], enumerable: !(r = E(t, n)) || r.enumerable });
  return s;
};
var _ = (s, t, e) => (e = s != null ? T(d(s)) : {}, C(t || !s || !s.__esModule ? h(e, "default", { value: s, enumerable: true }) : e, s));
var f = _(require("fs"));
var u = _(require("http")), p = class {
  constructor(t) {
    this.handlerName = t;
    let e = process.env.VSCODE_GIT_IPC_HANDLE;
    if (!e) throw new Error("Missing VSCODE_GIT_IPC_HANDLE");
    let r = process.env.VSCODE_GIT_IPC_AUTH_TOKEN;
    if (!r) throw new Error("Missing VSCODE_GIT_IPC_AUTH_TOKEN");
    this.ipcHandlePath = e, this.authToken = r;
  }
  call(t) {
    let e = { socketPath: this.ipcHandlePath, path: `/${this.handlerName}`, method: "POST", headers: { "x-cursor-git-auth-token": this.authToken } };
    return new Promise((r, n) => {
      let o = u.request(e, (i) => {
        if (i.statusCode !== 200) return n(new Error(`Bad status code: ${i.statusCode}`));
        let S = [];
        i.on("data", (a) => S.push(a)), i.on("end", () => r(JSON.parse(Buffer.concat(S).toString("utf8"))));
      });
      o.on("error", (i) => n(i)), o.write(JSON.stringify(t)), o.end();
    });
  }
};
function c(s) {
  console.error("Missing or invalid credentials."), console.error(s), process.exit(1);
}
function I(s) {
  if (!process.env.VSCODE_GIT_ASKPASS_PIPE) return c("Missing pipe");
  if (!process.env.VSCODE_GIT_ASKPASS_TYPE) return c("Missing type");
  if (process.env.VSCODE_GIT_ASKPASS_TYPE !== "https" && process.env.VSCODE_GIT_ASKPASS_TYPE !== "ssh") return c(`Invalid type: ${process.env.VSCODE_GIT_ASKPASS_TYPE}`);
  if (process.env.VSCODE_GIT_COMMAND === "fetch" && process.env.VSCODE_GIT_FETCH_SILENT) return c("Skip silent fetch commands");
  let t = process.env.VSCODE_GIT_ASKPASS_PIPE, e = process.env.VSCODE_GIT_ASKPASS_TYPE, r = e === "https" ? s[2] : s[3], n, o, i;
  e === "https" && (n = s[4].replace(/^["']+|["':]+$/g, "")), e === "ssh" && (/passphrase/i.test(r) ? o = s[6]?.replace(/^["']+|["':]+$/g, "") : (n = s[6].replace(/^["']+|["':]+$/g, ""), i = s[15])), new p("askpass").call({ askpassType: e, request: r, host: n, file: o, fingerprint: i }).then((a) => {
    f.writeFileSync(t, a + `
`), setTimeout(() => process.exit(0), 0);
  }).catch((a) => c(a));
}
I(process.argv);
