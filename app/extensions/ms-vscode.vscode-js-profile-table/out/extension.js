(() => {
  "use strict";
  var e = { d: (t2, n2) => {
    for (var o2 in n2) e.o(n2, o2) && !e.o(t2, o2) && Object.defineProperty(t2, o2, { enumerable: true, get: n2[o2] });
  }, o: (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r: (e2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
  } }, t = {};
  e.r(t), e.d(t, { activate: () => Y, deactivate: () => Z });
  const n = require("vscode"), o = async (e2, t2) => {
    const n2 = (function(e3 = 32) {
      let t3 = "";
      for (let n3 = 0; n3 < e3; n3++) t3 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(62 * Math.random())];
      return t3;
    })();
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${((e3) => `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'nonce-${e3}';">`)(n2)}
      <title>Profile Custom Editor</title>
    </head>
    <body>
      <script type="text/javascript" nonce="${n2}">
        ${Object.entries(t2).map(([e3, t3]) => `globalThis.${e3} = ${JSON.stringify(t3)}`).join(";")}
      <\/script>
      <script nonce="${n2}" src="${e2}"><\/script>
    </body>
    </html>
  `;
  }, s = require("os"), i = require("path"), r = /* @__PURE__ */ new Set(["jsProfileVisualizer.heapsnapshot.flame.show"]), a = (e2) => {
    try {
      return JSON.stringify(e2) ?? String(e2);
    } catch {
      return String(e2);
    }
  };
  class c {
    static {
      this.scheme = "js-viz-download";
    }
    async provideTextDocumentContent(e2) {
      return n.window.withProgress({ location: n.ProgressLocation.Notification, title: `Retrieving ${e2.query}...` }, async () => {
        try {
          const t2 = await fetch(e2.query, {}), n2 = await t2.text();
          return t2.ok ? n2 : `Unexpected ${t2.status} from ${e2.query}: ${n2}`;
        } catch (e3) {
          return e3.message;
        }
      });
    }
  }
  function l(e2, t2) {
    return i.posix?.isAbsolute(e2) ? i.posix.relative(e2, t2) : i.win32?.isAbsolute(e2) ? i.win32.relative(e2, t2) : i.relative(e2, t2);
  }
  let u = "undefined" != typeof process && "win32" !== process.platform;
  function m(e2) {
    return u ? e2 : e2.toLowerCase();
  }
  function d(e2) {
    return e2.startsWith("file:///") ? (e2 = e2.replace("file:///", ""), "/" === (e2 = decodeURIComponent(e2))[0] || e2.match(/^[A-Za-z]:/) || (e2 = "/" + e2), h(e2) && (e2 = e2[0].toLowerCase() + e2.substr(1)), e2) : e2;
  }
  const h = (e2) => /^[A-Za-z]:/.test(e2), p = async (e2) => {
    try {
      const t2 = y(e2);
      return !!t2 && (0 === t2.type || await n.workspace.fs.stat(t2.uri), true);
    } catch {
      return false;
    }
  }, w = async ({ rootPath: e2, location: t2, viewColumn: o2, callFrame: s2 }) => {
    t2 && await g(e2, t2, o2) || s2 && await v(s2, o2) || n.window.showErrorMessage("Could not find the file in your workspace");
  }, f = async (e2, t2, o2, s2) => {
    const i2 = new n.Position(Math.max(0, t2 - 1), Math.max(0, o2 - 1));
    await n.window.showTextDocument(e2, { viewColumn: s2, selection: new n.Range(i2, i2) });
  }, g = async (e2, t2, o2) => {
    const s2 = b(e2, t2.source), i2 = (await Promise.all(s2.map(p))).findIndex((e3) => e3);
    if (-1 === i2) return false;
    const c2 = y(s2[i2]);
    if (!c2) return false;
    if (0 === c2.type) return await (l2 = c2, (async (e3, t3) => !(!r.has(e3) && !await (async (e4, t4) => {
      const o3 = n.l10n.t("Run Command");
      return await n.window.showWarningMessage(n.l10n.t('Do you want to run the command "{0}"?', e4), { modal: true, detail: n.l10n.t("This command was requested by the profile you have open, which may not be trustworthy. Only run it if you know what it does.\n\nArguments: {0}", a(t4)) }, o3) === o3;
    })(e3, t3) || (await n.commands.executeCommand(e3, ...t3), 0)))(l2.command, l2.args)), true;
    var l2;
    const u2 = await n.workspace.openTextDocument(c2.uri);
    return await f(u2, t2.lineNumber, t2.columnNumber, o2), true;
  }, v = async ({ url: e2, lineNumber: t2, columnNumber: o2 }, r2) => {
    let a2;
    try {
      a2 = new URL(e2);
    } catch {
      return false;
    }
    if ("http:" !== a2.protocol && "https:" !== a2.protocol) return false;
    const l2 = (0, i.resolve)(n.workspace.workspaceFolders?.[0].uri.fsPath ?? (0, s.tmpdir)(), a2.pathname.slice(1) || "index.js"), u2 = await n.workspace.openTextDocument(n.Uri.file(l2).with({ scheme: c.scheme, query: e2 }));
    return await f(u2, t2 + 1, o2 + 1, r2), true;
  }, y = (e2) => {
    const t2 = e2?.match(/^command:([\w\.]+)(?:\?(.*))?/);
    if (t2) {
      const [e3, n2] = t2.slice(1);
      let o2;
      try {
        o2 = n2 ? JSON.parse(decodeURIComponent(n2)) : [];
      } catch {
        return;
      }
      return { type: 0, command: e3, args: Array.isArray(o2) ? o2 : [o2] };
    }
    return e2?.match(/\w\w+:/) ? { type: 1, uri: n.Uri.parse(e2 || ""), isFile: false } : { type: 1, uri: n.Uri.file(e2 || ""), isFile: true };
  }, b = (e2, t2) => {
    if (!t2.path) return [];
    const o2 = y(t2.path), s2 = [t2.path];
    if (!e2 || !o2 || 0 === o2.type || !o2.isFile) return s2;
    for (const o3 of n.workspace.workspaceFolders ?? []) s2.push((0, i.resolve)(o3.uri.fsPath, l(e2, t2.path)));
    return s2;
  };
  class C {
    constructor(e2, t2) {
      this.uri = e2, this.userData = t2;
    }
    dispose() {
    }
  }
  function S(e2, t2, o2, s2) {
    return (function(o3) {
      if (!o3 || n.extensions.all.some((e3) => e3.id === o3)) return n.commands.executeCommand("vscode.openWith", e2, t2, s2 ? n.ViewColumn.Beside : n.ViewColumn.Active);
      n.commands.executeCommand("workbench.extensions.action.showExtensionsWithIds", [o3]);
    })(o2);
  }
  const x = /* @__PURE__ */ Symbol("unset"), T = /[^/\\]+$/, F = (e2) => T.exec(e2)?.[0] ?? e2;
  class D {
    constructor() {
      this.basenamesToExpand = /* @__PURE__ */ new Map();
    }
    add(e2, t2) {
      const o2 = /* @__PURE__ */ ((e3) => {
        let t3 = x;
        return () => (t3 === x && (t3 = e3()), t3);
      })(() => {
        const o3 = /* @__PURE__ */ new Set(), s2 = new n.Position(Math.max(0, t2.callFrame.lineNumber), Math.max(0, t2.callFrame.columnNumber));
        o3.add(`${t2.callFrame.url}/${s2.line}`), this.set(t2.callFrame.url, s2, t2);
        const i2 = t2.src;
        if (i2 && 0 === i2.source.sourceReference && i2.source.path && i2.source.path !== t2.callFrame.url) for (const s3 of b(e2, i2.source)) {
          const e3 = new n.Position(Math.max(0, i2.lineNumber - 1), Math.max(0, i2.columnNumber - 1)), r2 = `${s3}/${e3.line}`;
          o3.has(r2) || (o3.add(r2), this.set(s3, e3, t2));
        }
      });
      this.addExpansionFn(F(t2.callFrame.url), o2), t2.src?.source.path && this.addExpansionFn(F(t2.src.source.path), o2);
    }
    addExpansionFn(e2, t2) {
      let n2 = this.basenamesToExpand.get(e2);
      n2 || (n2 = [], this.basenamesToExpand.set(e2, n2)), n2.push(t2);
    }
    expandForFile(e2) {
      const t2 = F(e2), n2 = this.basenamesToExpand.get(t2);
      if (n2) {
        for (const e3 of n2) e3();
        this.basenamesToExpand.delete(t2);
      }
    }
  }
  const P = new Intl.NumberFormat(void 0, { maximumFractionDigits: 2, minimumFractionDigits: 2 });
  class k extends D {
    constructor() {
      super(...arguments), this.data = /* @__PURE__ */ new Map();
    }
    set(e2, t2, o2) {
      let s2 = this.data.get(m(e2));
      s2 || (s2 = [], this.data.set(m(e2), s2));
      let i2 = 0;
      for (; i2 < s2.length && s2[i2].position.line < t2.line; ) i2++;
      if (s2[i2]?.position.line === t2.line) {
        const e3 = s2[i2];
        t2.character < e3.position.character && (e3.position = new n.Position(t2.line, t2.character)), e3.data.aggregateTime += o2.aggregateTime, e3.data.selfTime += o2.selfTime, e3.data.ticks += o2.ticks;
      } else s2.splice(i2, 0, { position: new n.Position(t2.line, t2.character), data: { aggregateTime: o2.aggregateTime, selfTime: o2.selfTime, ticks: o2.ticks } });
    }
    getLensesForFile(e2) {
      return this.expandForFile(e2), this.data.get(m(e2))?.map(({ position: e3, data: t2 }) => {
        if (0 === t2.aggregateTime && 0 === t2.selfTime) return [];
        const o2 = new n.Range(e3, e3);
        return [new n.CodeLens(o2, { title: `${P.format(t2.selfTime / 1e3)}ms Self Time, ${P.format(t2.aggregateTime / 1e3)}ms Total`, command: "" }), new n.CodeLens(o2, { title: "Clear", command: "extension.jsProfileVisualizer.table.clearCodeLenses" })];
      }).reduce((e3, t2) => [...e3, ...t2], []) ?? [];
    }
  }
  const z = (e2, t2) => (e2.functionName = e2.functionName || "(anonymous)", e2.lineNumber < 0 ? 0 : e2.url.includes("node_modules") || !t2 ? 2 : 1), N = (e2, t2) => t2.source.path && 0 === t2.source.sourceReference ? { ...t2, relativePath: l(e2, t2.source.path) } : t2, E = (e2, t2 = []) => {
    if (!e2.$vscode?.rootPath) return t2[0];
    for (const n2 of t2) {
      const t3 = N(e2.$vscode.rootPath, n2);
      if (t3.relativePath) return t3;
    }
    return t2[0];
  }, $ = (e2, t2) => {
    const n2 = t2[e2];
    if (n2.aggregateTime) return n2.aggregateTime;
    let o2 = n2.selfTime;
    for (const e3 of n2.children) o2 += $(e3, t2);
    return n2.aggregateTime = o2;
  };
  class j {
    constructor(e2, t2, o2 = {}) {
      this.lens = e2, this.bundle = t2, this.extraConsts = o2, this.onDidChangeCustomDocument = new n.EventEmitter().event;
    }
    async openCustomDocument(e2) {
      const t2 = await n.workspace.fs.readFile(e2), o2 = JSON.parse(new TextDecoder().decode(t2)), s2 = new C(e2, ((e3) => {
        if (!e3.timeDeltas || !e3.samples) return { nodes: [], locations: [], samples: e3.samples || [], timeDeltas: e3.timeDeltas || [], rootPath: e3.$vscode?.rootPath, duration: e3.endTime - e3.startTime };
        const { samples: t3, timeDeltas: n2 } = e3, o3 = ((e4) => {
          if (e4.$vscode) return e4.$vscode.locations;
          let t4 = 0;
          const n3 = /* @__PURE__ */ new Map(), o4 = (e5) => {
            const o5 = [e5.functionName, e5.url, e5.scriptId, e5.lineNumber, e5.columnNumber].join(":"), s4 = n3.get(o5);
            if (s4) return s4.id;
            const i4 = t4++;
            return n3.set(o5, { id: i4, callFrame: e5, location: { lineNumber: e5.lineNumber + 1, columnNumber: e5.columnNumber + 1, source: { name: d(e5.url), path: d(e5.url), sourceReference: 0 } } }), i4;
          };
          for (const t5 of e4.nodes) t5.locationId = o4(t5.callFrame), t5.positionTicks = t5.positionTicks?.map((e5) => ({ ...e5, startLocationId: o4({ ...t5.callFrame, lineNumber: e5.line - 1, columnNumber: 0 }), endLocationId: o4({ ...t5.callFrame, lineNumber: e5.line, columnNumber: 0 }) }));
          return [...n3.values()].sort((e5, t5) => e5.id - t5.id).map((e5) => ({ locations: [e5.location], callFrame: e5.callFrame }));
        })(e3).map((t4, n3) => {
          const o4 = E(e3, t4.locations);
          return { id: n3, selfTime: 0, aggregateTime: 0, ticks: 0, category: z(t4.callFrame, o4), callFrame: t4.callFrame, src: o4 };
        }), s3 = /* @__PURE__ */ new Map(), i3 = (e4) => {
          let t4 = s3.get(e4);
          return void 0 === t4 && (t4 = s3.size, s3.set(e4, t4)), t4;
        }, r3 = new Array(e3.nodes.length);
        for (let t4 = 0; t4 < e3.nodes.length; t4++) {
          const n3 = e3.nodes[t4], s4 = i3(n3.id);
          r3[s4] = { id: s4, selfTime: 0, aggregateTime: 0, locationId: n3.locationId, children: n3.children?.map(i3) || [] };
          for (const e4 of n3.positionTicks || []) e4.startLocationId && (o3[e4.startLocationId].ticks += e4.ticks);
        }
        for (const e4 of r3) for (const t4 of e4.children) r3[t4].parent = e4.id;
        const a2 = e3.endTime - e3.startTime;
        let c2 = a2 - n2[0];
        for (let e4 = 0; e4 < n2.length - 1; e4++) {
          const o4 = n2[e4 + 1];
          r3[i3(t3[e4])].selfTime += o4, c2 -= o4;
        }
        r3.length && (r3[i3(t3[n2.length - 1])].selfTime += c2, n2.push(c2));
        for (let e4 = 0; e4 < r3.length; e4++) {
          const t4 = r3[e4], n3 = o3[t4.locationId];
          n3.aggregateTime += $(e4, r3), n3.selfTime += t4.selfTime;
        }
        return { nodes: r3, locations: o3, samples: t3.map(i3), timeDeltas: n2, rootPath: e3.$vscode?.rootPath, duration: a2 };
      })(o2)), i2 = new k(), r2 = s2.userData.rootPath;
      for (const e3 of s2.userData.locations) i2.add(r2, e3);
      return this.lens.registerLenses(i2), s2;
    }
    async resolveCustomEditor(e2, t2) {
      t2.webview.onDidReceiveMessage((t3) => {
        switch (t3.type) {
          case "openDocument":
            return void w({ rootPath: e2.userData?.rootPath, viewColumn: t3.toSide ? n.ViewColumn.Beside : n.ViewColumn.Active, callFrame: t3.callFrame, location: t3.location });
          case "reopenWith":
            return void S(e2.uri, t3.viewType, t3.requireExtension);
          default:
            console.warn(`Unknown request from webview: ${JSON.stringify(t3)}`);
        }
      }), t2.webview.options = { enableScripts: true }, t2.webview.html = await o(t2.webview.asWebviewUri(this.bundle), { MODEL: e2.userData, ...this.extraConsts });
    }
    async saveCustomDocument() {
    }
    async revertCustomDocument() {
    }
    async backupCustomDocument() {
      return { id: "", delete: () => {
      } };
    }
    saveCustomDocumentAs(e2, t2) {
      return n.workspace.fs.copy(e2.uri, t2, { overwrite: true });
    }
  }
  const M = /* @__PURE__ */ new Set(["jsProfileVisualizer.heapsnapshot.flame.show"]), L = (e2) => {
    try {
      return JSON.stringify(e2) ?? String(e2);
    } catch {
      return String(e2);
    }
  };
  function O(e2, t2) {
    if (!e2 || n.extensions.all.some((t3) => t3.id === e2)) return t2();
    n.commands.executeCommand("workbench.extensions.action.showExtensionsWithIds", [e2]);
  }
  const U = require("worker_threads");
  class I {
    constructor(e2, t2) {
      this.uri = e2, this.value = t2;
    }
    dispose() {
      this.value.dispose();
    }
  }
  const q = globalThis.__jsHeapSnapshotWorkers ??= new class {
    constructor() {
      this.workers = /* @__PURE__ */ new Map();
    }
    async create(e2) {
      let t2 = this.workers.get(e2.with({ query: "" }).toString());
      if (!t2) {
        const o2 = await (async (e3) => {
          const t3 = new U.Worker(`${__dirname}/heapsnapshotWorker.js`, { workerData: "file" === e3.scheme ? e3.fsPath : await n.workspace.fs.readFile(e3) });
          return { postMessage: (e4) => t3.postMessage(e4), onMessage: (e4) => (t3.on("message", e4), { dispose: () => t3.off("message", e4) }), terminate: async () => {
            await t3.terminate();
          } };
        })(e2);
        t2 = { worker: o2, rc: 0 }, this.workers.set(e2.toString(), t2);
      }
      return t2.rc++, t2.closer && (clearTimeout(t2.closer), t2.closer = void 0), { worker: t2.worker, dispose: () => {
        --t2.rc || (t2.closer = setTimeout(() => {
          t2.worker.terminate(), this.workers.delete(e2.toString());
        }, 5e3));
      } };
    }
  }(), R = async ({ worker: e2 }, t2, o2, s2, i2) => {
    s2.onDidReceiveMessage((t3) => {
      switch (t3.type) {
        case "reopenWith":
          return void (function(e3, t4, o3, s3) {
            O(o3, () => n.commands.executeCommand("vscode.openWith", e3, t4, s3 ? n.ViewColumn.Beside : n.ViewColumn.Active));
          })(o2.with({ query: t3.withQuery }), t3.viewType, t3.requireExtension, t3.toSide);
        case "command":
          return void O(t3.requireExtension, () => (async (e3, t4) => !(!M.has(e3) && !await (async (e4, t5) => {
            const o3 = n.l10n.t("Run Command");
            return await n.window.showWarningMessage(n.l10n.t('Do you want to run the command "{0}"?', e4), { modal: true, detail: n.l10n.t("This command was requested by the profile you have open, which may not be trustworthy. Only run it if you know what it does.\n\nArguments: {0}", L(t5)) }, o3) === o3;
          })(e3, t4) || (await n.commands.executeCommand(e3, ...t4), 0)))(t3.command, t3.args));
        case "callGraph":
          return void e2.postMessage(t3.inner);
        default:
          console.warn(`Unknown request from webview: ${JSON.stringify(t3)}`);
      }
    });
    const r2 = e2.onMessage((e3) => {
      s2.postMessage({ method: "graphRet", message: e3 });
    });
    return s2.options = { enableScripts: true }, s2.html = await (async (e3, t3) => {
      const n2 = (function(e4 = 32) {
        let t4 = "";
        for (let n3 = 0; n3 < e4; n3++) t4 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(62 * Math.random())];
        return t4;
      })();
      return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${((e4) => `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'nonce-${e4}';">`)(n2)}
      <title>Profile Custom Editor</title>
    </head>
    <body>
      <script type="text/javascript" nonce="${n2}">
        ${Object.entries(t3).map(([e4, t4]) => `globalThis.${e4} = ${JSON.stringify(t4)}`).join(";")}
      <\/script>
      <script nonce="${n2}" src="${e3}"><\/script>
    </body>
    </html>
  `;
    })(s2.asWebviewUri(t2), { SNAPSHOT_URI: s2.asWebviewUri(o2).toString(), DOCUMENT_URI: o2.toString(), ...i2 }), r2;
  };
  class W {
    constructor(e2, t2 = {}) {
      this.bundle = e2, this.extraConsts = t2, this.onDidChangeCustomDocument = new n.EventEmitter().event;
    }
    async openCustomDocument(e2) {
      const t2 = await ((e3) => q.create(e3))(e2);
      return new I(e2, t2);
    }
    async resolveCustomEditor(e2, t2) {
      const n2 = await R(e2.value, this.bundle, e2.uri, t2.webview, this.extraConsts);
      t2.onDidDispose(() => {
        n2.dispose();
      });
    }
    async saveCustomDocument() {
    }
    async revertCustomDocument() {
    }
    async backupCustomDocument() {
      return { id: "", delete: () => {
      } };
    }
    saveCustomDocumentAs(e2, t2) {
      return n.workspace.fs.copy(e2.uri, t2, { overwrite: true });
    }
  }
  const V = new Intl.NumberFormat(void 0, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
  class A extends D {
    constructor() {
      super(...arguments), this.data = /* @__PURE__ */ new Map();
    }
    set(e2, t2, o2) {
      let s2 = this.data.get(m(e2));
      s2 || (s2 = [], this.data.set(m(e2), s2));
      let i2 = 0;
      for (; i2 < s2.length && s2[i2].position.line < t2.line; ) i2++;
      if (s2[i2]?.position.line === t2.line) {
        const e3 = s2[i2];
        t2.character < e3.position.character && (e3.position = new n.Position(t2.line, t2.character)), e3.data.totalSize += o2.totalSize, e3.data.selfSize += o2.selfSize;
      } else s2.splice(i2, 0, { position: new n.Position(t2.line, t2.character), data: { totalSize: o2.totalSize, selfSize: o2.selfSize } });
    }
    getLensesForFile(e2) {
      return this.expandForFile(e2), this.data.get(m(e2))?.map(({ position: e3, data: t2 }) => {
        if (0 === t2.totalSize && 0 === t2.selfSize) return [];
        const o2 = new n.Range(e3, e3);
        return [new n.CodeLens(o2, { title: `${V.format(t2.selfSize / 1e3)}kB Self Size, ${V.format(t2.totalSize / 1e3)}kB Total Size`, command: "" }), new n.CodeLens(o2, { title: "Clear", command: "extension.jsProfileVisualizer.table.clearCodeLenses" })];
      }).reduce((e3, t2) => [...e3, ...t2], []) ?? [];
    }
  }
  class J {
    static root() {
      return new J({ id: -1, selfSize: 0, children: [], callFrame: { functionName: "(root)", lineNumber: -1, columnNumber: -1, scriptId: "0", url: "" } });
    }
    get id() {
      return this.node.id;
    }
    get callFrame() {
      return this.node.callFrame;
    }
    get src() {
      return this.node.src;
    }
    constructor(e2, t2) {
      this.node = e2, this.parent = t2, this.children = {}, this.totalSize = 0, this.selfSize = 0, this.childrenSize = 0, this.category = z(e2.callFrame, void 0);
    }
    toJSON() {
      return { category: this.category, children: this.children, childrenSize: this.childrenSize, selfSize: this.selfSize, totalSize: this.totalSize, id: this.id, callFrame: this.callFrame, src: this.src };
    }
  }
  const _ = (e2, t2) => {
    const n2 = new J(e2, t2);
    e2.children.forEach((e3) => {
      const t3 = _(e3, n2);
      n2.children[t3.id] = t3, n2.childrenSize++;
    }), n2.selfSize = e2.selfSize, n2.totalSize = e2.selfSize;
    for (const e3 in n2.children) n2.totalSize += n2.children[e3].totalSize;
    return n2;
  };
  class B {
    constructor(e2, t2, o2 = {}) {
      this.lens = e2, this.bundle = t2, this.extraConsts = o2, this.onDidChangeCustomDocument = new n.EventEmitter().event;
    }
    async openCustomDocument(e2) {
      const t2 = await n.workspace.fs.readFile(e2), o2 = JSON.parse(new TextDecoder().decode(t2)), s2 = new C(e2, ((e3) => {
        let t3 = [e3.head];
        const n2 = ((e4) => {
          if (e4.$vscode) return e4.$vscode.locations;
          let t4 = 0;
          const n3 = /* @__PURE__ */ new Map(), o3 = (e5) => {
            const o4 = [e5.functionName, e5.url, e5.scriptId, e5.lineNumber, e5.columnNumber].join(":"), s4 = n3.get(o4);
            if (s4) return s4.id;
            const i3 = t4++;
            return n3.set(o4, { id: i3, callFrame: e5, location: { lineNumber: e5.lineNumber + 1, columnNumber: e5.columnNumber + 1, source: { name: d(e5.url), path: d(e5.url), sourceReference: 0 } } }), i3;
          };
          let s3 = [e4.head];
          for (; s3.length; ) {
            const e5 = s3.pop();
            if (e5) {
              const { callFrame: t5 } = e5;
              e5.locationId = o3(t5), s3 = s3.concat(e5.children);
            }
          }
          return [...n3.values()].sort((e5, t5) => e5.id - t5.id).map((e5) => ({ locations: [e5.location], callFrame: e5.callFrame }));
        })(e3);
        for (; t3.length; ) {
          const o3 = t3.pop();
          o3 && (o3.locationId && (o3.src = E(e3, n2[o3.locationId].locations)), t3 = t3.concat(o3.children));
        }
        return { head: e3.head, samples: e3.samples, rootPath: e3.$vscode?.rootPath };
      })(o2)), i2 = ((e3) => {
        const t3 = J.root();
        for (const n2 of e3.head.children) {
          const e4 = _(n2, t3);
          t3.children[e4.id] = e4, t3.childrenSize++;
        }
        for (const e4 in t3.children) t3.totalSize += t3.children[e4].totalSize;
        return t3;
      })(s2.userData), r2 = [i2];
      let a2 = [i2];
      for (; a2.length; ) {
        const e3 = a2.pop();
        e3 && (r2.push(e3), a2 = a2.concat(Object.values(e3.children)));
      }
      const c2 = new A(), l2 = s2.userData.rootPath;
      for (const e3 of r2) c2.add(l2, e3);
      return this.lens.registerLenses(c2), s2;
    }
    async resolveCustomEditor(e2, t2) {
      t2.webview.onDidReceiveMessage((t3) => {
        switch (t3.type) {
          case "openDocument":
            return void w({ rootPath: void 0, viewColumn: t3.toSide ? n.ViewColumn.Beside : n.ViewColumn.Active, callFrame: t3.callFrame, location: t3.location });
          case "reopenWith":
            return void S(e2.uri, t3.viewType, t3.requireExtension);
          default:
            console.warn(`Unknown request from webview: ${JSON.stringify(t3)}`);
        }
      }), t2.webview.options = { enableScripts: true }, t2.webview.html = await o(t2.webview.asWebviewUri(this.bundle), { MODEL: e2.userData, ...this.extraConsts });
    }
    async saveCustomDocument() {
    }
    async revertCustomDocument() {
    }
    async backupCustomDocument() {
      return { id: "", delete: () => {
      } };
    }
    saveCustomDocumentAs(e2, t2) {
      return n.workspace.fs.copy(e2.uri, t2, { overwrite: true });
    }
  }
  class H {
    constructor() {
      this.changeEmitter = new n.EventEmitter(), this.onDidChangeCodeLenses = this.changeEmitter.event;
    }
    registerLenses(e2) {
      return n.commands.executeCommand("setContext", "jsProfileVisualizer.hasCodeLenses", true), this.lenses = e2, { dispose: () => {
        this.lenses === e2 && this.clear();
      } };
    }
    clear() {
      this.lenses && (this.lenses = void 0, n.commands.executeCommand("setContext", "jsProfileVisualizer.hasCodeLenses", false), this.changeEmitter.fire());
    }
    provideCodeLenses(e2) {
      const t2 = this.lenses?.getLensesForFile(m(e2.uri.fsPath));
      if (t2) return t2;
      return (e2.uri.scheme === c.scheme ? this.lenses?.getLensesForFile(e2.uri.query) : void 0) || [];
    }
  }
  function Y(e2) {
    const t2 = new H();
    e2.subscriptions.push(n.window.registerCustomEditorProvider("jsProfileVisualizer.cpuprofile.table", new j(t2, n.Uri.joinPath(e2.extensionUri, "out", "cpu-client.bundle.js")), { webviewOptions: { retainContextWhenHidden: true } }), n.window.registerCustomEditorProvider("jsProfileVisualizer.heapprofile.table", new B(t2, n.Uri.joinPath(e2.extensionUri, "out", "heap-client.bundle.js")), { webviewOptions: { retainContextWhenHidden: true } }), n.window.registerCustomEditorProvider("jsProfileVisualizer.heapsnapshot.table", new W(n.Uri.joinPath(e2.extensionUri, "out", "heapsnapshot-client.bundle.js"))), n.workspace.registerTextDocumentContentProvider("js-viz-download", new c()), n.languages.registerCodeLensProvider("*", t2), n.commands.registerCommand("extension.jsProfileVisualizer.table.clearCodeLenses", () => t2.clear()));
  }
  function Z() {
  }
  module.exports = t;
})();
