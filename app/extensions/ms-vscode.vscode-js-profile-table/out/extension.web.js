(() => {
  var e, t, n, r, o, i, s, a, c, l, u, d, m, h = { 572(e2, t2) {
    t2.jz = function() {
      return "/tmp";
    };
  }, 115(e2) {
    "use strict";
    function t2(e3) {
      if ("string" != typeof e3) throw new TypeError("Path must be a string. Received " + JSON.stringify(e3));
    }
    function n2(e3, t3) {
      for (var n3, r3 = "", o2 = 0, i2 = -1, s2 = 0, a2 = 0; a2 <= e3.length; ++a2) {
        if (a2 < e3.length) n3 = e3.charCodeAt(a2);
        else {
          if (47 === n3) break;
          n3 = 47;
        }
        if (47 === n3) {
          if (i2 === a2 - 1 || 1 === s2) ;
          else if (i2 !== a2 - 1 && 2 === s2) {
            if (r3.length < 2 || 2 !== o2 || 46 !== r3.charCodeAt(r3.length - 1) || 46 !== r3.charCodeAt(r3.length - 2)) {
              if (r3.length > 2) {
                var c2 = r3.lastIndexOf("/");
                if (c2 !== r3.length - 1) {
                  -1 === c2 ? (r3 = "", o2 = 0) : o2 = (r3 = r3.slice(0, c2)).length - 1 - r3.lastIndexOf("/"), i2 = a2, s2 = 0;
                  continue;
                }
              } else if (2 === r3.length || 1 === r3.length) {
                r3 = "", o2 = 0, i2 = a2, s2 = 0;
                continue;
              }
            }
            t3 && (r3.length > 0 ? r3 += "/.." : r3 = "..", o2 = 2);
          } else r3.length > 0 ? r3 += "/" + e3.slice(i2 + 1, a2) : r3 = e3.slice(i2 + 1, a2), o2 = a2 - i2 - 1;
          i2 = a2, s2 = 0;
        } else 46 === n3 && -1 !== s2 ? ++s2 : s2 = -1;
      }
      return r3;
    }
    var r2 = { resolve: function() {
      for (var e3, r3 = "", o2 = false, i2 = arguments.length - 1; i2 >= -1 && !o2; i2--) {
        var s2;
        i2 >= 0 ? s2 = arguments[i2] : (void 0 === e3 && (e3 = process.cwd()), s2 = e3), t2(s2), 0 !== s2.length && (r3 = s2 + "/" + r3, o2 = 47 === s2.charCodeAt(0));
      }
      return r3 = n2(r3, !o2), o2 ? r3.length > 0 ? "/" + r3 : "/" : r3.length > 0 ? r3 : ".";
    }, normalize: function(e3) {
      if (t2(e3), 0 === e3.length) return ".";
      var r3 = 47 === e3.charCodeAt(0), o2 = 47 === e3.charCodeAt(e3.length - 1);
      return 0 !== (e3 = n2(e3, !r3)).length || r3 || (e3 = "."), e3.length > 0 && o2 && (e3 += "/"), r3 ? "/" + e3 : e3;
    }, isAbsolute: function(e3) {
      return t2(e3), e3.length > 0 && 47 === e3.charCodeAt(0);
    }, join: function() {
      if (0 === arguments.length) return ".";
      for (var e3, n3 = 0; n3 < arguments.length; ++n3) {
        var o2 = arguments[n3];
        t2(o2), o2.length > 0 && (void 0 === e3 ? e3 = o2 : e3 += "/" + o2);
      }
      return void 0 === e3 ? "." : r2.normalize(e3);
    }, relative: function(e3, n3) {
      if (t2(e3), t2(n3), e3 === n3) return "";
      if ((e3 = r2.resolve(e3)) === (n3 = r2.resolve(n3))) return "";
      for (var o2 = 1; o2 < e3.length && 47 === e3.charCodeAt(o2); ++o2) ;
      for (var i2 = e3.length, s2 = i2 - o2, a2 = 1; a2 < n3.length && 47 === n3.charCodeAt(a2); ++a2) ;
      for (var c2 = n3.length - a2, l2 = s2 < c2 ? s2 : c2, u2 = -1, d2 = 0; d2 <= l2; ++d2) {
        if (d2 === l2) {
          if (c2 > l2) {
            if (47 === n3.charCodeAt(a2 + d2)) return n3.slice(a2 + d2 + 1);
            if (0 === d2) return n3.slice(a2 + d2);
          } else s2 > l2 && (47 === e3.charCodeAt(o2 + d2) ? u2 = d2 : 0 === d2 && (u2 = 0));
          break;
        }
        var m2 = e3.charCodeAt(o2 + d2);
        if (m2 !== n3.charCodeAt(a2 + d2)) break;
        47 === m2 && (u2 = d2);
      }
      var h2 = "";
      for (d2 = o2 + u2 + 1; d2 <= i2; ++d2) d2 !== i2 && 47 !== e3.charCodeAt(d2) || (0 === h2.length ? h2 += ".." : h2 += "/..");
      return h2.length > 0 ? h2 + n3.slice(a2 + u2) : (a2 += u2, 47 === n3.charCodeAt(a2) && ++a2, n3.slice(a2));
    }, _makeLong: function(e3) {
      return e3;
    }, dirname: function(e3) {
      if (t2(e3), 0 === e3.length) return ".";
      for (var n3 = e3.charCodeAt(0), r3 = 47 === n3, o2 = -1, i2 = true, s2 = e3.length - 1; s2 >= 1; --s2) if (47 === (n3 = e3.charCodeAt(s2))) {
        if (!i2) {
          o2 = s2;
          break;
        }
      } else i2 = false;
      return -1 === o2 ? r3 ? "/" : "." : r3 && 1 === o2 ? "//" : e3.slice(0, o2);
    }, basename: function(e3, n3) {
      if (void 0 !== n3 && "string" != typeof n3) throw new TypeError('"ext" argument must be a string');
      t2(e3);
      var r3, o2 = 0, i2 = -1, s2 = true;
      if (void 0 !== n3 && n3.length > 0 && n3.length <= e3.length) {
        if (n3.length === e3.length && n3 === e3) return "";
        var a2 = n3.length - 1, c2 = -1;
        for (r3 = e3.length - 1; r3 >= 0; --r3) {
          var l2 = e3.charCodeAt(r3);
          if (47 === l2) {
            if (!s2) {
              o2 = r3 + 1;
              break;
            }
          } else -1 === c2 && (s2 = false, c2 = r3 + 1), a2 >= 0 && (l2 === n3.charCodeAt(a2) ? -1 === --a2 && (i2 = r3) : (a2 = -1, i2 = c2));
        }
        return o2 === i2 ? i2 = c2 : -1 === i2 && (i2 = e3.length), e3.slice(o2, i2);
      }
      for (r3 = e3.length - 1; r3 >= 0; --r3) if (47 === e3.charCodeAt(r3)) {
        if (!s2) {
          o2 = r3 + 1;
          break;
        }
      } else -1 === i2 && (s2 = false, i2 = r3 + 1);
      return -1 === i2 ? "" : e3.slice(o2, i2);
    }, extname: function(e3) {
      t2(e3);
      for (var n3 = -1, r3 = 0, o2 = -1, i2 = true, s2 = 0, a2 = e3.length - 1; a2 >= 0; --a2) {
        var c2 = e3.charCodeAt(a2);
        if (47 !== c2) -1 === o2 && (i2 = false, o2 = a2 + 1), 46 === c2 ? -1 === n3 ? n3 = a2 : 1 !== s2 && (s2 = 1) : -1 !== n3 && (s2 = -1);
        else if (!i2) {
          r3 = a2 + 1;
          break;
        }
      }
      return -1 === n3 || -1 === o2 || 0 === s2 || 1 === s2 && n3 === o2 - 1 && n3 === r3 + 1 ? "" : e3.slice(n3, o2);
    }, format: function(e3) {
      if (null === e3 || "object" != typeof e3) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e3);
      return (function(e4, t3) {
        var n3 = t3.dir || t3.root, r3 = t3.base || (t3.name || "") + (t3.ext || "");
        return n3 ? n3 === t3.root ? n3 + r3 : n3 + "/" + r3 : r3;
      })(0, e3);
    }, parse: function(e3) {
      t2(e3);
      var n3 = { root: "", dir: "", base: "", ext: "", name: "" };
      if (0 === e3.length) return n3;
      var r3, o2 = e3.charCodeAt(0), i2 = 47 === o2;
      i2 ? (n3.root = "/", r3 = 1) : r3 = 0;
      for (var s2 = -1, a2 = 0, c2 = -1, l2 = true, u2 = e3.length - 1, d2 = 0; u2 >= r3; --u2) if (47 !== (o2 = e3.charCodeAt(u2))) -1 === c2 && (l2 = false, c2 = u2 + 1), 46 === o2 ? -1 === s2 ? s2 = u2 : 1 !== d2 && (d2 = 1) : -1 !== s2 && (d2 = -1);
      else if (!l2) {
        a2 = u2 + 1;
        break;
      }
      return -1 === s2 || -1 === c2 || 0 === d2 || 1 === d2 && s2 === c2 - 1 && s2 === a2 + 1 ? -1 !== c2 && (n3.base = n3.name = 0 === a2 && i2 ? e3.slice(1, c2) : e3.slice(a2, c2)) : (0 === a2 && i2 ? (n3.name = e3.slice(1, s2), n3.base = e3.slice(1, c2)) : (n3.name = e3.slice(a2, s2), n3.base = e3.slice(a2, c2)), n3.ext = e3.slice(s2, c2)), a2 > 0 ? n3.dir = e3.slice(0, a2 - 1) : i2 && (n3.dir = "/"), n3;
    }, sep: "/", delimiter: ":", win32: null, posix: null };
    r2.posix = r2, e2.exports = r2;
  }, 172(e2, t2, n2) {
    "use strict";
    n2.r(t2), n2.d(t2, { activate: () => X, deactivate: () => K });
    const r2 = require("vscode"), o2 = async (e3, t3) => {
      const n3 = (function(e4 = 32) {
        let t4 = "";
        for (let n4 = 0; n4 < e4; n4++) t4 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(62 * Math.random())];
        return t4;
      })();
      return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${((e4) => `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'nonce-${e4}';">`)(n3)}
      <title>Profile Custom Editor</title>
    </head>
    <body>
      <script type="text/javascript" nonce="${n3}">
        ${Object.entries(t3).map(([e4, t4]) => `globalThis.${e4} = ${JSON.stringify(t4)}`).join(";")}
      <\/script>
      <script nonce="${n3}" src="${e3}"><\/script>
    </body>
    </html>
  `;
    };
    var i2 = n2(572), s2 = n2(115);
    const a2 = /* @__PURE__ */ new Set(["jsProfileVisualizer.heapsnapshot.flame.show"]), c2 = (e3) => {
      try {
        return JSON.stringify(e3) ?? String(e3);
      } catch {
        return String(e3);
      }
    };
    class l2 {
      static {
        this.scheme = "js-viz-download";
      }
      async provideTextDocumentContent(e3) {
        return r2.window.withProgress({ location: r2.ProgressLocation.Notification, title: `Retrieving ${e3.query}...` }, async () => {
          try {
            const t3 = await fetch(e3.query, {}), n3 = await t3.text();
            return t3.ok ? n3 : `Unexpected ${t3.status} from ${e3.query}: ${n3}`;
          } catch (e4) {
            return e4.message;
          }
        });
      }
    }
    function u2(e3, t3) {
      return s2.posix?.isAbsolute(e3) ? s2.posix.relative(e3, t3) : s2.win32?.isAbsolute(e3) ? s2.win32.relative(e3, t3) : s2.relative(e3, t3);
    }
    let d2 = "undefined" != typeof process && "win32" !== process.platform;
    function m2(e3) {
      return d2 ? e3 : e3.toLowerCase();
    }
    function h2(e3) {
      return e3.startsWith("file:///") ? (e3 = e3.replace("file:///", ""), "/" === (e3 = decodeURIComponent(e3))[0] || e3.match(/^[A-Za-z]:/) || (e3 = "/" + e3), f2(e3) && (e3 = e3[0].toLowerCase() + e3.substr(1)), e3) : e3;
    }
    const f2 = (e3) => /^[A-Za-z]:/.test(e3), p2 = async (e3) => {
      try {
        const t3 = y(e3);
        return !!t3 && (0 === t3.type || await r2.workspace.fs.stat(t3.uri), true);
      } catch {
        return false;
      }
    }, w2 = async ({ rootPath: e3, location: t3, viewColumn: n3, callFrame: o3 }) => {
      t3 && await v(e3, t3, n3) || o3 && await b(o3, n3) || r2.window.showErrorMessage("Could not find the file in your workspace");
    }, g = async (e3, t3, n3, o3) => {
      const i3 = new r2.Position(Math.max(0, t3 - 1), Math.max(0, n3 - 1));
      await r2.window.showTextDocument(e3, { viewColumn: o3, selection: new r2.Range(i3, i3) });
    }, v = async (e3, t3, n3) => {
      const o3 = C(e3, t3.source), i3 = (await Promise.all(o3.map(p2))).findIndex((e4) => e4);
      if (-1 === i3) return false;
      const s3 = y(o3[i3]);
      if (!s3) return false;
      if (0 === s3.type) return await (l3 = s3, (async (e4, t4) => !(!a2.has(e4) && !await (async (e5, t5) => {
        const n4 = r2.l10n.t("Run Command");
        return await r2.window.showWarningMessage(r2.l10n.t('Do you want to run the command "{0}"?', e5), { modal: true, detail: r2.l10n.t("This command was requested by the profile you have open, which may not be trustworthy. Only run it if you know what it does.\n\nArguments: {0}", c2(t5)) }, n4) === n4;
      })(e4, t4) || (await r2.commands.executeCommand(e4, ...t4), 0)))(l3.command, l3.args)), true;
      var l3;
      const u3 = await r2.workspace.openTextDocument(s3.uri);
      return await g(u3, t3.lineNumber, t3.columnNumber, n3), true;
    }, b = async ({ url: e3, lineNumber: t3, columnNumber: n3 }, o3) => {
      let a3;
      try {
        a3 = new URL(e3);
      } catch {
        return false;
      }
      if ("http:" !== a3.protocol && "https:" !== a3.protocol) return false;
      const c3 = (0, s2.resolve)(r2.workspace.workspaceFolders?.[0].uri.fsPath ?? (0, i2.jz)(), a3.pathname.slice(1) || "index.js"), u3 = await r2.workspace.openTextDocument(r2.Uri.file(c3).with({ scheme: l2.scheme, query: e3 }));
      return await g(u3, t3 + 1, n3 + 1, o3), true;
    }, y = (e3) => {
      const t3 = e3?.match(/^command:([\w\.]+)(?:\?(.*))?/);
      if (t3) {
        const [e4, n3] = t3.slice(1);
        let r3;
        try {
          r3 = n3 ? JSON.parse(decodeURIComponent(n3)) : [];
        } catch {
          return;
        }
        return { type: 0, command: e4, args: Array.isArray(r3) ? r3 : [r3] };
      }
      return e3?.match(/\w\w+:/) ? { type: 1, uri: r2.Uri.parse(e3 || ""), isFile: false } : { type: 1, uri: r2.Uri.file(e3 || ""), isFile: true };
    }, C = (e3, t3) => {
      if (!t3.path) return [];
      const n3 = y(t3.path), o3 = [t3.path];
      if (!e3 || !n3 || 0 === n3.type || !n3.isFile) return o3;
      for (const n4 of r2.workspace.workspaceFolders ?? []) o3.push((0, s2.resolve)(n4.uri.fsPath, u2(e3, t3.path)));
      return o3;
    };
    class x {
      constructor(e3, t3) {
        this.uri = e3, this.userData = t3;
      }
      dispose() {
      }
    }
    function S(e3, t3, n3, o3) {
      return (function(n4) {
        if (!n4 || r2.extensions.all.some((e4) => e4.id === n4)) return r2.commands.executeCommand("vscode.openWith", e3, t3, o3 ? r2.ViewColumn.Beside : r2.ViewColumn.Active);
        r2.commands.executeCommand("workbench.extensions.action.showExtensionsWithIds", [n4]);
      })(n3);
    }
    const T = /* @__PURE__ */ Symbol("unset"), _ = /[^/\\]+$/, k = (e3) => _.exec(e3)?.[0] ?? e3;
    class P {
      constructor() {
        this.basenamesToExpand = /* @__PURE__ */ new Map();
      }
      add(e3, t3) {
        const n3 = /* @__PURE__ */ ((e4) => {
          let t4 = T;
          return () => (t4 === T && (t4 = e4()), t4);
        })(() => {
          const n4 = /* @__PURE__ */ new Set(), o3 = new r2.Position(Math.max(0, t3.callFrame.lineNumber), Math.max(0, t3.callFrame.columnNumber));
          n4.add(`${t3.callFrame.url}/${o3.line}`), this.set(t3.callFrame.url, o3, t3);
          const i3 = t3.src;
          if (i3 && 0 === i3.source.sourceReference && i3.source.path && i3.source.path !== t3.callFrame.url) for (const o4 of C(e3, i3.source)) {
            const e4 = new r2.Position(Math.max(0, i3.lineNumber - 1), Math.max(0, i3.columnNumber - 1)), s3 = `${o4}/${e4.line}`;
            n4.has(s3) || (n4.add(s3), this.set(o4, e4, t3));
          }
        });
        this.addExpansionFn(k(t3.callFrame.url), n3), t3.src?.source.path && this.addExpansionFn(k(t3.src.source.path), n3);
      }
      addExpansionFn(e3, t3) {
        let n3 = this.basenamesToExpand.get(e3);
        n3 || (n3 = [], this.basenamesToExpand.set(e3, n3)), n3.push(t3);
      }
      expandForFile(e3) {
        const t3 = k(e3), n3 = this.basenamesToExpand.get(t3);
        if (n3) {
          for (const e4 of n3) e4();
          this.basenamesToExpand.delete(t3);
        }
      }
    }
    const F = new Intl.NumberFormat(void 0, { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    class z extends P {
      constructor() {
        super(...arguments), this.data = /* @__PURE__ */ new Map();
      }
      set(e3, t3, n3) {
        let o3 = this.data.get(m2(e3));
        o3 || (o3 = [], this.data.set(m2(e3), o3));
        let i3 = 0;
        for (; i3 < o3.length && o3[i3].position.line < t3.line; ) i3++;
        if (o3[i3]?.position.line === t3.line) {
          const e4 = o3[i3];
          t3.character < e4.position.character && (e4.position = new r2.Position(t3.line, t3.character)), e4.data.aggregateTime += n3.aggregateTime, e4.data.selfTime += n3.selfTime, e4.data.ticks += n3.ticks;
        } else o3.splice(i3, 0, { position: new r2.Position(t3.line, t3.character), data: { aggregateTime: n3.aggregateTime, selfTime: n3.selfTime, ticks: n3.ticks } });
      }
      getLensesForFile(e3) {
        return this.expandForFile(e3), this.data.get(m2(e3))?.map(({ position: e4, data: t3 }) => {
          if (0 === t3.aggregateTime && 0 === t3.selfTime) return [];
          const n3 = new r2.Range(e4, e4);
          return [new r2.CodeLens(n3, { title: `${F.format(t3.selfTime / 1e3)}ms Self Time, ${F.format(t3.aggregateTime / 1e3)}ms Total`, command: "" }), new r2.CodeLens(n3, { title: "Clear", command: "extension.jsProfileVisualizer.table.clearCodeLenses" })];
        }).reduce((e4, t3) => [...e4, ...t3], []) ?? [];
      }
    }
    const D = (e3, t3) => (e3.functionName = e3.functionName || "(anonymous)", e3.lineNumber < 0 ? 0 : e3.url.includes("node_modules") || !t3 ? 2 : 1), N = (e3, t3) => t3.source.path && 0 === t3.source.sourceReference ? { ...t3, relativePath: u2(e3, t3.source.path) } : t3, E = (e3, t3 = []) => {
      if (!e3.$vscode?.rootPath) return t3[0];
      for (const n3 of t3) {
        const t4 = N(e3.$vscode.rootPath, n3);
        if (t4.relativePath) return t4;
      }
      return t3[0];
    }, j = (e3, t3) => {
      const n3 = t3[e3];
      if (n3.aggregateTime) return n3.aggregateTime;
      let r3 = n3.selfTime;
      for (const e4 of n3.children) r3 += j(e4, t3);
      return n3.aggregateTime = r3;
    };
    class A {
      constructor(e3, t3, n3 = {}) {
        this.lens = e3, this.bundle = t3, this.extraConsts = n3, this.onDidChangeCustomDocument = new r2.EventEmitter().event;
      }
      async openCustomDocument(e3) {
        const t3 = await r2.workspace.fs.readFile(e3), n3 = JSON.parse(new TextDecoder().decode(t3)), o3 = new x(e3, ((e4) => {
          if (!e4.timeDeltas || !e4.samples) return { nodes: [], locations: [], samples: e4.samples || [], timeDeltas: e4.timeDeltas || [], rootPath: e4.$vscode?.rootPath, duration: e4.endTime - e4.startTime };
          const { samples: t4, timeDeltas: n4 } = e4, r3 = ((e5) => {
            if (e5.$vscode) return e5.$vscode.locations;
            let t5 = 0;
            const n5 = /* @__PURE__ */ new Map(), r4 = (e6) => {
              const r5 = [e6.functionName, e6.url, e6.scriptId, e6.lineNumber, e6.columnNumber].join(":"), o5 = n5.get(r5);
              if (o5) return o5.id;
              const i5 = t5++;
              return n5.set(r5, { id: i5, callFrame: e6, location: { lineNumber: e6.lineNumber + 1, columnNumber: e6.columnNumber + 1, source: { name: h2(e6.url), path: h2(e6.url), sourceReference: 0 } } }), i5;
            };
            for (const t6 of e5.nodes) t6.locationId = r4(t6.callFrame), t6.positionTicks = t6.positionTicks?.map((e6) => ({ ...e6, startLocationId: r4({ ...t6.callFrame, lineNumber: e6.line - 1, columnNumber: 0 }), endLocationId: r4({ ...t6.callFrame, lineNumber: e6.line, columnNumber: 0 }) }));
            return [...n5.values()].sort((e6, t6) => e6.id - t6.id).map((e6) => ({ locations: [e6.location], callFrame: e6.callFrame }));
          })(e4).map((t5, n5) => {
            const r4 = E(e4, t5.locations);
            return { id: n5, selfTime: 0, aggregateTime: 0, ticks: 0, category: D(t5.callFrame, r4), callFrame: t5.callFrame, src: r4 };
          }), o4 = /* @__PURE__ */ new Map(), i4 = (e5) => {
            let t5 = o4.get(e5);
            return void 0 === t5 && (t5 = o4.size, o4.set(e5, t5)), t5;
          }, s4 = new Array(e4.nodes.length);
          for (let t5 = 0; t5 < e4.nodes.length; t5++) {
            const n5 = e4.nodes[t5], o5 = i4(n5.id);
            s4[o5] = { id: o5, selfTime: 0, aggregateTime: 0, locationId: n5.locationId, children: n5.children?.map(i4) || [] };
            for (const e5 of n5.positionTicks || []) e5.startLocationId && (r3[e5.startLocationId].ticks += e5.ticks);
          }
          for (const e5 of s4) for (const t5 of e5.children) s4[t5].parent = e5.id;
          const a3 = e4.endTime - e4.startTime;
          let c3 = a3 - n4[0];
          for (let e5 = 0; e5 < n4.length - 1; e5++) {
            const r4 = n4[e5 + 1];
            s4[i4(t4[e5])].selfTime += r4, c3 -= r4;
          }
          s4.length && (s4[i4(t4[n4.length - 1])].selfTime += c3, n4.push(c3));
          for (let e5 = 0; e5 < s4.length; e5++) {
            const t5 = s4[e5], n5 = r3[t5.locationId];
            n5.aggregateTime += j(e5, s4), n5.selfTime += t5.selfTime;
          }
          return { nodes: s4, locations: r3, samples: t4.map(i4), timeDeltas: n4, rootPath: e4.$vscode?.rootPath, duration: a3 };
        })(n3)), i3 = new z(), s3 = o3.userData.rootPath;
        for (const e4 of o3.userData.locations) i3.add(s3, e4);
        return this.lens.registerLenses(i3), o3;
      }
      async resolveCustomEditor(e3, t3) {
        t3.webview.onDidReceiveMessage((t4) => {
          switch (t4.type) {
            case "openDocument":
              return void w2({ rootPath: e3.userData?.rootPath, viewColumn: t4.toSide ? r2.ViewColumn.Beside : r2.ViewColumn.Active, callFrame: t4.callFrame, location: t4.location });
            case "reopenWith":
              return void S(e3.uri, t4.viewType, t4.requireExtension);
            default:
              console.warn(`Unknown request from webview: ${JSON.stringify(t4)}`);
          }
        }), t3.webview.options = { enableScripts: true }, t3.webview.html = await o2(t3.webview.asWebviewUri(this.bundle), { MODEL: e3.userData, ...this.extraConsts });
      }
      async saveCustomDocument() {
      }
      async revertCustomDocument() {
      }
      async backupCustomDocument() {
        return { id: "", delete: () => {
        } };
      }
      saveCustomDocumentAs(e3, t3) {
        return r2.workspace.fs.copy(e3.uri, t3, { overwrite: true });
      }
    }
    const $ = /* @__PURE__ */ new Set(["jsProfileVisualizer.heapsnapshot.flame.show"]), O = (e3) => {
      try {
        return JSON.stringify(e3) ?? String(e3);
      } catch {
        return String(e3);
      }
    };
    function M(e3, t3) {
      if (!e3 || r2.extensions.all.some((t4) => t4.id === e3)) return t3();
      r2.commands.executeCommand("workbench.extensions.action.showExtensionsWithIds", [e3]);
    }
    const L = (e3, t3) => t3.method === e3, U = (e3, t3) => {
      const n3 = new Array(e3.length);
      for (let r3 = 0; r3 < e3.length; r3++) {
        const o3 = e3[r3];
        n3[r3] = t3(o3, r3), o3.free();
      }
      return n3;
    }, I = (e3) => U(e3, (e4) => ({ name: e4.name(), childrenLen: e4.children_len, id: e4.id, index: e4.index, retainedSize: Number(e4.retained_size), selfSize: Number(e4.self_size), type: e4.typ, retainsIndex: e4.retains_index, edgeType: e4.edge_typ })), R = async () => {
      const { decode_bytes: e3, init_panic_hook: t3 } = await n2.e(848).then(n2.bind(n2, 848));
      return t3(), e3;
    };
    class W {
      constructor(e3, t3) {
        this.uri = e3, this.value = t3;
      }
      dispose() {
        this.value.dispose();
      }
    }
    const q = globalThis.__jsHeapSnapshotWorkers ??= new class {
      constructor() {
        this.workers = /* @__PURE__ */ new Map();
      }
      async create(e3) {
        let t3 = this.workers.get(e3.with({ query: "" }).toString());
        if (!t3) {
          const n3 = await (async (e4) => {
            const t4 = new r2.EventEmitter(), n4 = Promise.all([r2.workspace.fs.readFile(e4), R()]).then(([e5, t5]) => t5(e5));
            return { postMessage: (e5) => ((e6, t5) => e6.then((e7) => {
              if (L("getClassGroups", t5)) return U(e7.get_class_groups(...t5.args, false), (e8, t6) => ({ name: e8.name(), index: t6, retainedSize: Number(e8.retained_size), selfSize: Number(e8.self_size), childrenLen: e8.children_len }));
              if (L("getClassChildren", t5)) return I(e7.class_children(...t5.args));
              if (L("getNodeChildren", t5)) return I(e7.node_children(...t5.args));
              if (L("getRetainers", t5)) return I(e7.get_all_retainers(...t5.args));
              throw new Error(`unknown method ${t5.method}`);
            }).then((e7) => ({ id: t5.id, result: { ok: e7 } })).catch((e7) => ({ id: t5.id, result: { err: e7.stack || e7.message || String(e7) } })))(n4, e5).then((e6) => t4.fire(e6)), onMessage: t4.event, terminate: () => n4.then((e5) => e5.free()) };
          })(e3);
          t3 = { worker: n3, rc: 0 }, this.workers.set(e3.toString(), t3);
        }
        return t3.rc++, t3.closer && (clearTimeout(t3.closer), t3.closer = void 0), { worker: t3.worker, dispose: () => {
          --t3.rc || (t3.closer = setTimeout(() => {
            t3.worker.terminate(), this.workers.delete(e3.toString());
          }, 5e3));
        } };
      }
    }(), V = async ({ worker: e3 }, t3, n3, o3, i3) => {
      o3.onDidReceiveMessage((t4) => {
        switch (t4.type) {
          case "reopenWith":
            return void (function(e4, t5, n4, o4) {
              M(n4, () => r2.commands.executeCommand("vscode.openWith", e4, t5, o4 ? r2.ViewColumn.Beside : r2.ViewColumn.Active));
            })(n3.with({ query: t4.withQuery }), t4.viewType, t4.requireExtension, t4.toSide);
          case "command":
            return void M(t4.requireExtension, () => (async (e4, t5) => !(!$.has(e4) && !await (async (e5, t6) => {
              const n4 = r2.l10n.t("Run Command");
              return await r2.window.showWarningMessage(r2.l10n.t('Do you want to run the command "{0}"?', e5), { modal: true, detail: r2.l10n.t("This command was requested by the profile you have open, which may not be trustworthy. Only run it if you know what it does.\n\nArguments: {0}", O(t6)) }, n4) === n4;
            })(e4, t5) || (await r2.commands.executeCommand(e4, ...t5), 0)))(t4.command, t4.args));
          case "callGraph":
            return void e3.postMessage(t4.inner);
          default:
            console.warn(`Unknown request from webview: ${JSON.stringify(t4)}`);
        }
      });
      const s3 = e3.onMessage((e4) => {
        o3.postMessage({ method: "graphRet", message: e4 });
      });
      return o3.options = { enableScripts: true }, o3.html = await (async (e4, t4) => {
        const n4 = (function(e5 = 32) {
          let t5 = "";
          for (let n5 = 0; n5 < e5; n5++) t5 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(62 * Math.random())];
          return t5;
        })();
        return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${((e5) => `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'nonce-${e5}';">`)(n4)}
      <title>Profile Custom Editor</title>
    </head>
    <body>
      <script type="text/javascript" nonce="${n4}">
        ${Object.entries(t4).map(([e5, t5]) => `globalThis.${e5} = ${JSON.stringify(t5)}`).join(";")}
      <\/script>
      <script nonce="${n4}" src="${e4}"><\/script>
    </body>
    </html>
  `;
      })(o3.asWebviewUri(t3), { SNAPSHOT_URI: o3.asWebviewUri(n3).toString(), DOCUMENT_URI: n3.toString(), ...i3 }), s3;
    };
    class J {
      constructor(e3, t3 = {}) {
        this.bundle = e3, this.extraConsts = t3, this.onDidChangeCustomDocument = new r2.EventEmitter().event;
      }
      async openCustomDocument(e3) {
        const t3 = await ((e4) => q.create(e4))(e3);
        return new W(e3, t3);
      }
      async resolveCustomEditor(e3, t3) {
        const n3 = await V(e3.value, this.bundle, e3.uri, t3.webview, this.extraConsts);
        t3.onDidDispose(() => {
          n3.dispose();
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
      saveCustomDocumentAs(e3, t3) {
        return r2.workspace.fs.copy(e3.uri, t3, { overwrite: true });
      }
    }
    const B = new Intl.NumberFormat(void 0, { maximumFractionDigits: 0, minimumFractionDigits: 0 });
    class H extends P {
      constructor() {
        super(...arguments), this.data = /* @__PURE__ */ new Map();
      }
      set(e3, t3, n3) {
        let o3 = this.data.get(m2(e3));
        o3 || (o3 = [], this.data.set(m2(e3), o3));
        let i3 = 0;
        for (; i3 < o3.length && o3[i3].position.line < t3.line; ) i3++;
        if (o3[i3]?.position.line === t3.line) {
          const e4 = o3[i3];
          t3.character < e4.position.character && (e4.position = new r2.Position(t3.line, t3.character)), e4.data.totalSize += n3.totalSize, e4.data.selfSize += n3.selfSize;
        } else o3.splice(i3, 0, { position: new r2.Position(t3.line, t3.character), data: { totalSize: n3.totalSize, selfSize: n3.selfSize } });
      }
      getLensesForFile(e3) {
        return this.expandForFile(e3), this.data.get(m2(e3))?.map(({ position: e4, data: t3 }) => {
          if (0 === t3.totalSize && 0 === t3.selfSize) return [];
          const n3 = new r2.Range(e4, e4);
          return [new r2.CodeLens(n3, { title: `${B.format(t3.selfSize / 1e3)}kB Self Size, ${B.format(t3.totalSize / 1e3)}kB Total Size`, command: "" }), new r2.CodeLens(n3, { title: "Clear", command: "extension.jsProfileVisualizer.table.clearCodeLenses" })];
        }).reduce((e4, t3) => [...e4, ...t3], []) ?? [];
      }
    }
    class G {
      static root() {
        return new G({ id: -1, selfSize: 0, children: [], callFrame: { functionName: "(root)", lineNumber: -1, columnNumber: -1, scriptId: "0", url: "" } });
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
      constructor(e3, t3) {
        this.node = e3, this.parent = t3, this.children = {}, this.totalSize = 0, this.selfSize = 0, this.childrenSize = 0, this.category = D(e3.callFrame, void 0);
      }
      toJSON() {
        return { category: this.category, children: this.children, childrenSize: this.childrenSize, selfSize: this.selfSize, totalSize: this.totalSize, id: this.id, callFrame: this.callFrame, src: this.src };
      }
    }
    const Q = (e3, t3) => {
      const n3 = new G(e3, t3);
      e3.children.forEach((e4) => {
        const t4 = Q(e4, n3);
        n3.children[t4.id] = t4, n3.childrenSize++;
      }), n3.selfSize = e3.selfSize, n3.totalSize = e3.selfSize;
      for (const e4 in n3.children) n3.totalSize += n3.children[e4].totalSize;
      return n3;
    };
    class Y {
      constructor(e3, t3, n3 = {}) {
        this.lens = e3, this.bundle = t3, this.extraConsts = n3, this.onDidChangeCustomDocument = new r2.EventEmitter().event;
      }
      async openCustomDocument(e3) {
        const t3 = await r2.workspace.fs.readFile(e3), n3 = JSON.parse(new TextDecoder().decode(t3)), o3 = new x(e3, ((e4) => {
          let t4 = [e4.head];
          const n4 = ((e5) => {
            if (e5.$vscode) return e5.$vscode.locations;
            let t5 = 0;
            const n5 = /* @__PURE__ */ new Map(), r3 = (e6) => {
              const r4 = [e6.functionName, e6.url, e6.scriptId, e6.lineNumber, e6.columnNumber].join(":"), o5 = n5.get(r4);
              if (o5) return o5.id;
              const i4 = t5++;
              return n5.set(r4, { id: i4, callFrame: e6, location: { lineNumber: e6.lineNumber + 1, columnNumber: e6.columnNumber + 1, source: { name: h2(e6.url), path: h2(e6.url), sourceReference: 0 } } }), i4;
            };
            let o4 = [e5.head];
            for (; o4.length; ) {
              const e6 = o4.pop();
              if (e6) {
                const { callFrame: t6 } = e6;
                e6.locationId = r3(t6), o4 = o4.concat(e6.children);
              }
            }
            return [...n5.values()].sort((e6, t6) => e6.id - t6.id).map((e6) => ({ locations: [e6.location], callFrame: e6.callFrame }));
          })(e4);
          for (; t4.length; ) {
            const r3 = t4.pop();
            r3 && (r3.locationId && (r3.src = E(e4, n4[r3.locationId].locations)), t4 = t4.concat(r3.children));
          }
          return { head: e4.head, samples: e4.samples, rootPath: e4.$vscode?.rootPath };
        })(n3)), i3 = ((e4) => {
          const t4 = G.root();
          for (const n4 of e4.head.children) {
            const e5 = Q(n4, t4);
            t4.children[e5.id] = e5, t4.childrenSize++;
          }
          for (const e5 in t4.children) t4.totalSize += t4.children[e5].totalSize;
          return t4;
        })(o3.userData), s3 = [i3];
        let a3 = [i3];
        for (; a3.length; ) {
          const e4 = a3.pop();
          e4 && (s3.push(e4), a3 = a3.concat(Object.values(e4.children)));
        }
        const c3 = new H(), l3 = o3.userData.rootPath;
        for (const e4 of s3) c3.add(l3, e4);
        return this.lens.registerLenses(c3), o3;
      }
      async resolveCustomEditor(e3, t3) {
        t3.webview.onDidReceiveMessage((t4) => {
          switch (t4.type) {
            case "openDocument":
              return void w2({ rootPath: void 0, viewColumn: t4.toSide ? r2.ViewColumn.Beside : r2.ViewColumn.Active, callFrame: t4.callFrame, location: t4.location });
            case "reopenWith":
              return void S(e3.uri, t4.viewType, t4.requireExtension);
            default:
              console.warn(`Unknown request from webview: ${JSON.stringify(t4)}`);
          }
        }), t3.webview.options = { enableScripts: true }, t3.webview.html = await o2(t3.webview.asWebviewUri(this.bundle), { MODEL: e3.userData, ...this.extraConsts });
      }
      async saveCustomDocument() {
      }
      async revertCustomDocument() {
      }
      async backupCustomDocument() {
        return { id: "", delete: () => {
        } };
      }
      saveCustomDocumentAs(e3, t3) {
        return r2.workspace.fs.copy(e3.uri, t3, { overwrite: true });
      }
    }
    class Z {
      constructor() {
        this.changeEmitter = new r2.EventEmitter(), this.onDidChangeCodeLenses = this.changeEmitter.event;
      }
      registerLenses(e3) {
        return r2.commands.executeCommand("setContext", "jsProfileVisualizer.hasCodeLenses", true), this.lenses = e3, { dispose: () => {
          this.lenses === e3 && this.clear();
        } };
      }
      clear() {
        this.lenses && (this.lenses = void 0, r2.commands.executeCommand("setContext", "jsProfileVisualizer.hasCodeLenses", false), this.changeEmitter.fire());
      }
      provideCodeLenses(e3) {
        const t3 = this.lenses?.getLensesForFile(m2(e3.uri.fsPath));
        if (t3) return t3;
        return (e3.uri.scheme === l2.scheme ? this.lenses?.getLensesForFile(e3.uri.query) : void 0) || [];
      }
    }
    function X(e3) {
      const t3 = new Z();
      e3.subscriptions.push(r2.window.registerCustomEditorProvider("jsProfileVisualizer.cpuprofile.table", new A(t3, r2.Uri.joinPath(e3.extensionUri, "out", "cpu-client.bundle.js")), { webviewOptions: { retainContextWhenHidden: true } }), r2.window.registerCustomEditorProvider("jsProfileVisualizer.heapprofile.table", new Y(t3, r2.Uri.joinPath(e3.extensionUri, "out", "heap-client.bundle.js")), { webviewOptions: { retainContextWhenHidden: true } }), r2.window.registerCustomEditorProvider("jsProfileVisualizer.heapsnapshot.table", new J(r2.Uri.joinPath(e3.extensionUri, "out", "heapsnapshot-client.bundle.js"))), r2.workspace.registerTextDocumentContentProvider("js-viz-download", new l2()), r2.languages.registerCodeLensProvider("*", t3), r2.commands.registerCommand("extension.jsProfileVisualizer.table.clearCodeLenses", () => t3.clear()));
    }
    function K() {
    }
  } }, f = {};
  function p(e2) {
    var t2 = f[e2];
    if (void 0 !== t2) return t2.exports;
    var n2 = f[e2] = { id: e2, loaded: false, exports: {} };
    return h[e2](n2, n2.exports, p), n2.loaded = true, n2.exports;
  }
  p.m = h, p.c = f, p.d = (e2, t2) => {
    for (var n2 in t2) p.o(t2, n2) && !p.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: t2[n2] });
  }, p.f = {}, p.e = (e2) => Promise.all(Object.keys(p.f).reduce((t2, n2) => (p.f[n2](e2, t2), t2), [])), p.u = (e2) => e2 + ".extension.web.js", p.g = (function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e2) {
      if ("object" == typeof window) return window;
    }
  })(), p.hmd = (e2) => ((e2 = Object.create(e2)).children || (e2.children = []), Object.defineProperty(e2, "exports", { enumerable: true, set: () => {
    throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e2.id);
  } }), e2), p.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), p.r = (e2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
  }, (() => {
    var e2;
    p.g.importScripts && (e2 = p.g.location + "");
    var t2 = p.g.document;
    if (!e2 && t2 && (t2.currentScript && "SCRIPT" === t2.currentScript.tagName.toUpperCase() && (e2 = t2.currentScript.src), !e2)) {
      var n2 = t2.getElementsByTagName("script");
      if (n2.length) for (var r2 = n2.length - 1; r2 > -1 && (!e2 || !/^http(s?):/.test(e2)); ) e2 = n2[r2--].src;
    }
    if (!e2) throw new Error("Automatic publicPath is not supported in this browser");
    e2 = e2.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), p.p = e2;
  })(), (() => {
    var e2 = { 792: 1 };
    p.f.i = (t3, n3) => {
      e2[t3] || importScripts(p.p + p.u(t3));
    };
    var t2 = self.webpackChunkvscode_js_profile_table = self.webpackChunkvscode_js_profile_table || [], n2 = t2.push.bind(t2);
    t2.push = (t3) => {
      var [r2, o2, i2] = t3;
      for (var s2 in o2) p.o(o2, s2) && (p.m[s2] = o2[s2]);
      for (i2 && i2(p); r2.length; ) e2[r2.pop()] = 1;
      n2(t3);
    };
  })(), u = {}, d = { 16: function() {
    return { "./v8_heap_parser_bg.js": { __wbindgen_string_new: function(t2, n2) {
      return void 0 === e && (e = p.c[4].exports), e.yc(t2, n2);
    }, __wbindgen_object_drop_ref: function(e2) {
      return void 0 === t && (t = p.c[4].exports), t.bk(e2);
    }, __wbg_classgroup_new: function(e2) {
      return void 0 === n && (n = p.c[4].exports), n.Mq(e2);
    }, __wbg_node_new: function(e2) {
      return void 0 === r && (r = p.c[4].exports), r.Rs(e2);
    }, __wbg_retainernode_new: function(e2) {
      return void 0 === o && (o = p.c[4].exports), o.bU(e2);
    }, __wbg_new_abda76e883ba8a5f: function() {
      return void 0 === i && (i = p.c[4].exports), i.V5();
    }, __wbg_stack_658279fe44541cf6: function(e2, t2) {
      return void 0 === s && (s = p.c[4].exports), s.u$(e2, t2);
    }, __wbg_error_f851667af71bcfc6: function(e2, t2) {
      return void 0 === a && (a = p.c[4].exports), a.Xu(e2, t2);
    }, __wbindgen_throw: function(e2, t2) {
      return void 0 === c && (c = p.c[4].exports), c.Qn(e2, t2);
    }, __wbindgen_string_get: function(e2, t2) {
      return void 0 === l && (l = p.c[4].exports), l.qN(e2, t2);
    } } };
  } }, m = { 848: [16] }, p.w = {}, p.f.wasm = function(e2, t2) {
    (m[e2] || []).forEach(function(n2, r2) {
      var o2 = u[n2];
      if (o2) t2.push(o2);
      else {
        var i2, s2 = d[n2](), a2 = fetch(p.p + "" + { 848: { 16: "dbd61d846b1102299709" } }[e2][n2] + ".module.wasm");
        i2 = s2 && "function" == typeof s2.then && "function" == typeof WebAssembly.compileStreaming ? Promise.all([WebAssembly.compileStreaming(a2), s2]).then(function(e3) {
          return WebAssembly.instantiate(e3[0], e3[1]);
        }) : "function" == typeof WebAssembly.instantiateStreaming ? WebAssembly.instantiateStreaming(a2, s2) : a2.then(function(e3) {
          return e3.arrayBuffer();
        }).then(function(e3) {
          return WebAssembly.instantiate(e3, s2);
        }), t2.push(u[n2] = i2.then(function(e3) {
          return p.w[n2] = (e3.instance || e3).exports;
        }));
      }
    });
  };
  var w = p(172);
  module.exports = w;
})();
