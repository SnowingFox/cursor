"use strict";
exports.id = 102, exports.ids = [102], exports.modules = { 11762: (e, t, i) => {
  i.d(t, { I_: () => u, t6: () => l });
  var r = i(51455), n = i(91105), o = i(76760);
  const s = "canvas", a = ["EEXIST", "ENOTEMPTY", "ENOENT"];
  function l(e2) {
    const t2 = e2?.code;
    if ("string" == typeof t2 && a.includes(t2)) return true;
    const i2 = e2 instanceof Error ? e2.message : "string" == typeof e2 ? e2 : "";
    return a.some((e3) => i2.includes(e3));
  }
  const c = /* @__PURE__ */ new Map();
  async function u(e2) {
    const t2 = e2.skillsDir ?? (0, n.T2h)(), i2 = (function(e3 = (0, n.T2h)()) {
      return (0, o.join)(e3, s, "sdk");
    })(t2), a2 = c.get(i2);
    if (void 0 !== a2) return a2;
    const l2 = (async function(e3, t3, i3) {
      const n2 = (function(e4) {
        return (0, o.join)(e4, "dist", "agent-sdk", "cursor", "canvas");
      })(e3), a3 = (0, o.join)(t3, s);
      try {
        await (0, r.access)(n2);
      } catch (e4) {
        if ("ENOENT" === e4.code) return false;
        throw e4;
      }
      try {
        await (0, r.access)(a3);
      } catch (e4) {
        if ("ENOENT" === e4.code) return false;
        throw e4;
      }
      return await (0, r.mkdir)(a3, { recursive: true }), await (0, r.rm)(i3, { recursive: true, force: true }), await (0, r.cp)(n2, i3, { force: true, recursive: true }), true;
    })(e2.extensionPath, t2, i2);
    c.set(i2, l2);
    try {
      return await l2;
    } finally {
      c.delete(i2);
    }
  }
}, 34102: (e, t, i) => {
  i.d(t, { WP: () => _e, Ps: () => l, FJ: () => M, Vo: () => Fe, zT: () => Ue, Pd: () => Dt, Vs: () => jt, zZ: () => $t, e6: () => ve, Dx: () => we, x7: () => g });
  var r = i(33002), n = i(91398);
  const o = "agent_skills_batch_update", s = 4e3;
  function a(e2) {
    return { scopedTo: e2.scopedTo, disabledEnvironments: e2.disabledEnvironments, disableModelInvocation: e2.disableModelInvocation, description: e2.description, environments: e2.environments, fullPath: e2.fullPath, gitRemoteOrigin: e2.gitRemoteOrigin, globs: e2.globs, marketplace: e2.marketplace, marketplaceId: e2.marketplaceId, parseError: e2.parseError, plugin: e2.plugin, pluginId: e2.pluginId, argumentHint: e2.argumentHint, disableUserInvocation: e2.disableUserInvocation };
  }
  function l(e2) {
    const t2 = [], i2 = e2.serviceCtx ?? (0, r.q6)();
    let l2, c2 = false, u2 = 0;
    const d2 = async (e3) => {
      if (c2) return;
      const t3 = (function(e4) {
        return e4.map((e5) => JSON.stringify(a(e5))).sort().join("\n");
      })(e3);
      if (t3 === l2) return;
      const i3 = ++u2, r2 = e3.map(a), s2 = await Promise.resolve(n.cursor.checkFeatureGate(o)).catch(() => false);
      c2 || i3 !== u2 || t3 === l2 || (s2 ? await n.cursor.updateAgentSkillsInBatches(r2) : await n.cursor.updateAgentSkills(r2), c2 || i3 !== u2 || (l2 = t3));
    };
    let p2;
    e2.agentSkillsService.getAllAgentSkills(i2).then((e3) => {
      c2 || d2(e3);
    }).catch((t3) => {
      c2 || e2.appendLine(`Failed to load or push initial agent skills: ${String(t3)}`);
    });
    const g2 = e2.agentSkillsService.onDidChangeSkills(() => {
      c2 || (void 0 !== p2 && clearTimeout(p2), p2 = setTimeout(() => {
        p2 = void 0, c2 || (async () => {
          const t3 = await e2.agentSkillsService.getAllAgentSkills(i2);
          c2 || await d2(t3);
        })().catch((t3) => {
          c2 || e2.appendLine(`agentSkillsService.onDidChangeSkills failed: ${String(t3)}`);
        });
      }, s));
    });
    return t2.push({ dispose: g2 }), t2.push({ dispose: () => {
      c2 = true, void 0 !== p2 && clearTimeout(p2);
    } }), n.Disposable.from(...t2);
  }
  var c = i(91105), u = i(89350), d = i(11762);
  const p = 18e5;
  function g(e2) {
    const t2 = (function(e3, t3, i3) {
      return { ctx: e3, extensionPath: i3, getAuthToken: () => n.cursor.getCursorAuthToken(), getManagedSkills: () => Promise.resolve(n.cursor.getManagedSkills()), syncBuiltinSkills: c.Rhp, ensureCanvasSdkMirror: d.I_, appendLine: t3 };
    })((0, r.q6)(), e2.appendLine, e2.extensionPath), i2 = (function(e3) {
      const t3 = e3.setTimeoutFn ?? setTimeout, i3 = e3.clearTimeoutFn ?? clearTimeout;
      let r2, n2 = false;
      const o3 = () => {
        void 0 !== r2 && (i3(r2), r2 = void 0);
      };
      return { schedule() {
        n2 || (o3(), r2 = t3(() => {
          r2 = void 0, e3.run().catch(() => {
          });
        }, e3.intervalMs));
      }, dispose() {
        n2 = true, o3();
      } };
    })({ intervalMs: e2.intervalMs ?? p, setTimeoutFn: e2.setTimeoutFn, clearTimeoutFn: e2.clearTimeoutFn, run: async () => {
      try {
        await (0, u.w)(t2);
      } catch (t3) {
        e2.appendLine(`Failed to refresh Cursor-managed skills on schedule: ${String(t3)}`);
      } finally {
        i2.schedule();
      }
    } });
    i2.schedule();
    const o2 = n.cursor.onDidChangeCursorAuthToken(() => {
      (0, u.w)(t2).catch((t3) => {
        e2.appendLine(`Failed to refresh Cursor-managed skills after auth change: ${String(t3)}`);
      }).finally(() => {
        i2.schedule();
      });
    });
    return { dispose: () => {
      o2.dispose(), i2.dispose();
    } };
  }
  var m = i(31421), f = i(51455), h = i(48161), y = i(76760);
  const w = "cursor.installSkills.runSkillsCliAdd", v = /^[A-Za-z0-9@._~:/?=+\\][A-Za-z0-9@._~:/#?=+\\-]*$/, k = /^[A-Za-z0-9._][A-Za-z0-9._-]*$/, S = /^[A-Za-z0-9._][A-Za-z0-9._-]*$/, P = "skills@1.5.23", b = /* @__PURE__ */ new Set(["PATH", "HOME", "USER", "LOGNAME", "SHELL", "TMPDIR", "LANG", "LC_ALL", "LC_CTYPE", "SSH_AUTH_SOCK", "XDG_CACHE_HOME", "XDG_CONFIG_HOME", "XDG_DATA_HOME", "HTTP_PROXY", "HTTPS_PROXY", "NO_PROXY", "http_proxy", "https_proxy", "no_proxy"]), D = 3e5, C = 65536, I = 320, T = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]|(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)|\x1b(?:[ #%()*+\-./]?[a-zA-Z0-9|}~@])/g, E = /[\r\n│┃└┌├─╭╮╯╰→◇◆■□●○◒◐◓◑▲▼]+/;
  function x(e2) {
    return /^[A-Za-z0-9-][A-Za-z0-9@.=-]*$/.test(e2) ? e2 : `"${e2.replace(/\\+$/, (e3) => e3 + e3)}"`;
  }
  function R(e2) {
    return ["npx", ...e2.map(x)].join(" ");
  }
  function N(e2) {
    const t2 = { NO_COLOR: "1" };
    for (const [i2, r2] of Object.entries(e2)) void 0 !== r2 && (b.has(i2) || i2.startsWith("GIT_")) && (t2[i2] = r2);
    return t2;
  }
  async function j(e2) {
    try {
      const t2 = await (0, f.readdir)(e2, { withFileTypes: true });
      return new Set(t2.filter((e3) => !e3.isFile()).map((e3) => e3.name));
    } catch {
      return /* @__PURE__ */ new Set();
    }
  }
  function _(e2) {
    return new Promise((t2) => {
      const i2 = (0, m.spawn)("npx", e2, { cwd: (0, h.homedir)(), env: N(process.env), stdio: ["ignore", "pipe", "pipe"], detached: true });
      let r2 = "";
      const n2 = (e3) => {
        r2 = (r2 + e3.toString()).slice(-C);
      };
      i2.stdout.on("data", n2), i2.stderr.on("data", n2);
      let o2 = false;
      const s2 = (e3) => {
        o2 || (o2 = true, clearTimeout(a2), t2({ ...e3, output: r2.replace(T, "") }));
      }, a2 = setTimeout(() => {
        !(function(e3) {
          if (void 0 !== e3.pid) try {
            return void process.kill(-e3.pid, "SIGKILL");
          } catch {
          }
          e3.kill("SIGKILL");
        })(i2), s2({ exitCode: void 0, reason: "Timed out after 5 minutes" });
      }, D);
      i2.on("error", (t3) => {
        const i3 = "ENOENT" === t3.code;
        s2({ exitCode: void 0, reason: i3 ? `npx was not found. Install Node.js (https://nodejs.org), then run: ${R(e2)}` : `Could not run npx: ${t3.message}` });
      }), i2.on("close", (e3, t3) => {
        s2(null === e3 ? { exitCode: void 0, reason: `The skills CLI was stopped by ${t3 ?? "a signal"}` } : { exitCode: e3 });
      });
    });
  }
  function F(e2) {
    const t2 = [];
    for (const i3 of e2.split(E)) {
      const e3 = i3.replace(/\s+/g, " ").trim();
      e3.length > 0 && e3 !== t2[t2.length - 1] && t2.push(e3);
    }
    const i2 = t2.join(" ");
    return i2.length <= I ? i2 : i2.slice(-I).replace(/^\S+\s+/, "");
  }
  async function A(e2) {
    const t2 = (function(e3) {
      return ["-y", void 0 === e3.version ? P : `skills@${e3.version}`, "add", e3.source, ...e3.skills.flatMap((e4) => ["--skill", e4]), "-g", "-a", "cursor", "-y"];
    })(e2);
    if ("win32" === process.platform) return { ok: false, exitCode: void 0, output: "", errorMessage: `Automatic install isn't supported on Windows yet. Run this in a terminal: ${R(t2)}`, unsupportedPlatform: true };
    const i2 = (function() {
      const e3 = (0, h.homedir)();
      return [(0, y.join)(e3, ".agents", "skills"), (0, y.join)(e3, ".cursor", "skills")];
    })(), r2 = await Promise.all(i2.map(j)), n2 = await _(t2);
    if (0 !== n2.exitCode) return { ok: false, exitCode: n2.exitCode, output: n2.output, errorMessage: void 0 === n2.exitCode ? n2.reason : F(n2.output) || `The skills CLI exited with code ${n2.exitCode}` };
    const o2 = await Promise.all(i2.map(j)), s2 = /* @__PURE__ */ new Set();
    return o2.forEach((e3, t3) => {
      for (const i3 of e3) r2[t3].has(i3) || s2.add(i3);
    }), { ok: true, installedSkills: [...s2].sort(), output: n2.output };
  }
  function M(e2) {
    e2.subscriptions.push(n.commands.registerCommand(w, async (e3) => ((function(e4) {
      if (void 0 === e4 || "string" != typeof e4.source || !v.test(e4.source) || !Array.isArray(e4.skills) || e4.skills.some((e5) => "string" != typeof e5 || !k.test(e5)) || void 0 !== e4.version && ("string" != typeof e4.version || !S.test(e4.version))) throw new Error("runSkillsCliAdd requires a source, skill filters, and version made of URL-safe characters");
    })(e3), await A(e3))));
  }
  var L = i(63553), U = i(47859), O = i(79896), $ = i(91943), H = i(70857), q = i(16928);
  const G = (0, i(37949).h)("cursor-agent-host");
  var V = i(42761), W = i(47777);
  function K(e2) {
    if (e2 instanceof V.T) return e2.code === W.C.Canceled;
    if (!(e2 instanceof Error)) return false;
    if ("Canceled" === e2.name && "Canceled" === e2.message) return true;
    if ("ConnectError" !== e2.name) return false;
    const t2 = e2.code;
    return t2 === W.C.Canceled || "Canceled" === t2 || ("Canceled" === e2.message || e2.message.startsWith("Canceled:"));
  }
  var z = i(32180), J = i(36038), B = i(87016);
  const X = 1, Z = 2, Y = 3;
  function Q(e2) {
    switch (e2.installMode) {
      case X:
      case "EFFECTIVE_PLUGIN_INSTALL_MODE_USER":
        return "user";
      case Z:
      case "EFFECTIVE_PLUGIN_INSTALL_MODE_TEAM_DEFAULT":
        return "team-default";
      case Y:
      case "EFFECTIVE_PLUGIN_INSTALL_MODE_TEAM_REQUIRED":
        return "team-required";
      default:
        return true === e2.isTeamRequired ? "team-required" : "user";
    }
  }
  var ee = i(77598);
  const te = "plugin_mcp_census", ie = "mcp_plugin_census", re = "MCP plugin census", ne = "local";
  class oe {
    constructor(e2) {
      this.emit = e2;
    }
    report(e2) {
      const t2 = (function(e3) {
        return [e3.execHostRemoteName, e3.pluginHomeDirHash, e3.pluginsLoaded, e3.retainedFromPreviousLoad, e3.wasFirstLoad, e3.sourceUnavailable, e3.mcpDescriptorsProduced].join("|");
      })(e2);
      t2 !== this.lastSignature && (this.lastSignature = t2, this.emit(e2));
    }
  }
  var se = i(64472);
  async function ae(e2) {
    return { plugins: await e2.getAllEnabledPlugins(), loadFailures: e2.getLoadFailures(), pluginSetIncomplete: e2.isPluginSetIncomplete() };
  }
  function le(e2) {
    return void 0 !== e2 && "config" in e2 ? Object.keys(e2.config.hooks) : [];
  }
  async function ce(e2) {
    try {
      const t2 = await (0, $.readFile)(e2, "utf-8");
      return JSON.parse(t2);
    } catch {
      return null;
    }
  }
  function ue(e2) {
    const { pluginsService: t2, pluginMcpService: i2, pluginHooksService: o2, pluginCommandsService: s2, githubPluginsStore: a2, refreshPlugins: l2, pluginMetricsLogger: c2, backendMarketplaceClient: u2, workspacePaths: d2, requestRefreshSchedule: p2, secretStorage: g2, primitiveAuthorshipResolver: m2, sparsePluginClones: f2 } = e2, h2 = "localPluginVariables:", y2 = new oe((e3) => {
      c2.log("info", re, { ...e3 }), (0, se.b)({ subkey: te, message: re, metadata: { event: ie, ...e3 } });
    }), w2 = async (e3) => Promise.all(e3.map(async (e4) => {
      const t3 = e4.identifier.sourceInfo.name, i3 = e4.identifier.source, r2 = (0, L.xJd)(e4.identifier) ?? (0, L.s4m)(e4.identifier), n2 = "cursor-first-party" === e4.identifier.source || "cursor-third-party" === e4.identifier.source || "claude-plugin" === e4.identifier.source ? e4.identifier.sourceInfo.version : void 0, o3 = "extension" === e4.identifier.source ? e4.identifier.sourceInfo.localPath : void 0, s3 = "extension" === e4.identifier.source ? e4.identifier.sourceInfo.extensionId : void 0;
      let a3;
      if ("user-local" === i3) try {
        const e5 = await g2.get(`${h2}${t3}`);
        e5 && (a3 = JSON.parse(e5));
      } catch {
      }
      const l3 = (0, L.R3Q)(e4.identifier), c3 = void 0 !== e4.hooks && "config" in e4.hooks, u3 = le(e4.hooks);
      return { id: r2, name: t3, source: i3, version: n2, manifestVersion: e4.version, homepageUrl: e4.homepage, repositoryUrl: e4.repository, ...void 0 !== l3 && { marketplace: l3 }, installPath: e4.installPath, localPath: o3, extensionId: s3, loadError: e4.loadError, logoUrl: e4.logoUrl, skillsCount: e4.skills.length, agentsCount: e4.agents.length, commandsCount: e4.commands.length, hasHooks: c3, hooksCount: u3.length, mcpServersCount: e4.mcpConfig?.mcpServers ? Object.keys(e4.mcpConfig.mcpServers).length : 0, skillNames: e4.skills.map((e5) => e5.name ?? e5.path), agentNames: e4.agents.map((e5) => e5.name), ruleNames: e4.rules.map((e5) => e5.name), commandNames: e4.commands.map((e5) => e5.name), hookNames: u3, mcpServerNames: e4.mcpConfig?.mcpServers ? Object.keys(e4.mcpConfig.mcpServers) : [], capabilities: e4.capabilities, variablesSchema: e4.variablesSchema, configuredVariables: a3 };
    })), v2 = (e3, t3, i3) => {
      const r2 = e3.identifier.sourceInfo, n2 = e3.hooks && "config" in e3.hooks ? e3.hooks.sourcePath : void 0;
      return { rawIdentifier: t3, name: r2.name, displayName: e3.displayName ?? r2.name, description: e3.description ?? "", sources: i3, projectInstallKey: i3.includes("project") ? t3 : void 0, publisherName: e3.authorName, skills: e3.skills.map((e4) => ({ name: e4.name || e4.path, description: e4.description, sourcePath: e4.path })), subagents: e3.agents.map((e4) => ({ name: e4.name, description: e4.description, sourcePath: e4.path })), rules: e3.rules.map((e4) => ({ name: e4.name, description: e4.description, sourcePath: e4.path })), commands: e3.commands.map((e4) => ({ name: e4.name, description: e4.description, sourcePath: e4.path })), hooks: le(e3.hooks).map((e4) => ({ name: e4, sourcePath: n2 })), mcpServers: e3.mcpConfig?.mcpServers ? Object.keys(e3.mcpConfig.mcpServers).map((t4) => ({ name: t4, sourcePath: e3.mcpConfig?.mcpServerSourcePaths?.[t4] })) : [] };
    }, k2 = (e3, t3 = 0) => (e3.sort((e4, t4) => e4.rawIdentifier.localeCompare(t4.rawIdentifier)), e3.map((e4, i3) => ({ plugin: { id: -(t3 + i3 + 1), name: e4.name, displayName: e4.displayName, description: e4.description, ...void 0 !== e4.publisherName && e4.publisherName.trim().length > 0 && { publisher: { name: e4.publisherName, displayName: e4.publisherName } }, skills: e4.skills, subagents: e4.subagents, rules: e4.rules, commands: e4.commands, hooks: e4.hooks, mcpServers: e4.mcpServers }, scopes: e4.sources, projectInstallKey: e4.projectInstallKey }))), S2 = async () => {
      const e3 = [], i3 = /* @__PURE__ */ new Set();
      try {
        const { userEnabledPluginIds: r2, projectEnabledPluginIds: n2 } = await (async function(e4, t3) {
          const i4 = (0, q.join)(e4, ".claude", "settings.json"), [r3, n3] = await Promise.all([ce(i4), Promise.all(t3.map(async (e5) => {
            const [t4, i5] = await Promise.all([ce((0, q.join)(e5, ".claude", "settings.json")), ce((0, q.join)(e5, ".claude", "settings.local.json"))]);
            return { ...t4?.enabledPlugins ?? {}, ...i5?.enabledPlugins ?? {} };
          }))]), o4 = new Set(Object.entries(r3?.enabledPlugins ?? {}).filter(([, e5]) => true === e5).map(([e5]) => e5)), s3 = /* @__PURE__ */ new Set();
          for (const e5 of n3) for (const [t4, i5] of Object.entries(e5)) true === i5 && s3.add(t4);
          return { userEnabledPluginIds: o4, projectEnabledPluginIds: s3 };
        })(H.homedir(), d2), o3 = await t2.getAllEnabledPlugins();
        for (const t3 of o3) {
          if ("claude-plugin" !== t3.identifier.source) continue;
          const o4 = t3.identifier.sourceInfo, s3 = "raw" in o4 && "string" == typeof o4.raw ? o4.raw : o4.name;
          if (i3.has(s3)) continue;
          i3.add(s3);
          const a3 = [];
          r2.has(s3) && a3.push("user"), n2.has(s3) && a3.push("project"), 0 === a3.length && a3.push("user"), e3.push(v2(t3, s3, a3));
        }
      } catch (e4) {
        G.error((0, r.q6)(), "Failed to get imported external plugins", { error: String(e4) });
      }
      return k2(e3, 0);
    }, P2 = async () => {
      const e3 = [], i3 = /* @__PURE__ */ new Set();
      try {
        const r2 = await (0, L.JJ1)(d2), n2 = await t2.getAllEnabledPlugins();
        for (const t3 of n2) {
          if ("cursor-third-party" !== t3.identifier.source) continue;
          const n3 = t3.identifier.sourceInfo, o3 = n3.name;
          if (i3.has(o3)) continue;
          i3.add(o3);
          const s3 = r2.find(({ key: e4 }) => {
            const t4 = (0, L.kXx)(e4);
            return t4.name === n3.name && t4.marketplaceName === n3.marketplace;
          });
          if (!s3) continue;
          const a3 = v2(t3, s3.key, ["project"]);
          a3.projectInstallKey = s3.key, e3.push(a3);
        }
      } catch (e4) {
        G.error((0, r.q6)(), "Failed to get cursor third-party plugins", { error: String(e4) });
      }
      return k2(e3, 1e6);
    }, b2 = async (e3) => {
      const t3 = [];
      try {
        const i4 = await n.cursor.getEffectiveUserPlugins(e3);
        for (const e4 of i4?.plugins ?? []) e4.plugin && e4.isEnabled && t3.push({ plugin: e4.plugin, source: e4.isTeamRequired ? "team" : "user", isTeamRequired: e4.isTeamRequired, installMode: Q(e4), pinnedGitRef: e4.pinnedGitRef, configuredVariables: e4.configuredVariables, hasTeamConfiguredVariables: e4.hasTeamConfiguredVariables });
      } catch (e4) {
        throw K(e4) || G.error((0, r.q6)(), "Failed to get effective user plugins for installed list", { error: String(e4) }), e4;
      }
      try {
        const e4 = (await (0, L.JJ1)(d2)).filter((e5) => !e5.entry.gitUrl);
        if (e4.length > 0) {
          const i4 = e4.map((e5) => (0, L.kXx)(e5.key)), r2 = await n.cursor.resolveProjectPlugins(i4.map((e5) => ({ name: e5.name, marketplaceName: e5.marketplaceName })));
          for (const i5 of r2?.plugins ?? []) {
            const r3 = e4.find((e5) => {
              const t4 = (0, L.kXx)(e5.key);
              return t4.name === i5.name && t4.marketplaceName === i5.marketplace?.name;
            });
            t3.push({ plugin: i5, source: "project", projectInstallKey: r3?.key });
          }
        }
      } catch (e4) {
        G.error((0, r.q6)(), "Failed to resolve project plugins for installed list", { error: String(e4) });
      }
      const i3 = { project: 0, team: 1, user: 2 }, o3 = /* @__PURE__ */ new Map();
      for (const e4 of t3) {
        const t4 = void 0 !== e4.plugin.id ? String(e4.plugin.id) : void 0;
        if (!t4) continue;
        const r2 = o3.get(t4);
        if (!r2) {
          o3.set(t4, { plugin: e4.plugin, scopes: [e4.source], projectInstallKey: e4.projectInstallKey, isTeamRequired: e4.isTeamRequired, installMode: e4.installMode, pinnedGitRef: e4.pinnedGitRef, configuredVariables: e4.configuredVariables, hasTeamConfiguredVariables: e4.hasTeamConfiguredVariables });
          continue;
        }
        r2.scopes.includes(e4.source) || r2.scopes.push(e4.source);
        const n2 = r2.scopes[0];
        (void 0 === n2 || i3[e4.source] < i3[n2]) && (r2.isTeamRequired = e4.isTeamRequired, r2.pinnedGitRef = e4.pinnedGitRef), void 0 !== e4.installMode && (r2.installMode = e4.installMode), void 0 !== e4.hasTeamConfiguredVariables && (r2.hasTeamConfiguredVariables = e4.hasTeamConfiguredVariables), void 0 !== e4.projectInstallKey && (r2.projectInstallKey = e4.projectInstallKey), o3.set(t4, r2);
      }
      return Array.from(o3.values()).map((e4) => ({ ...e4, scopes: [...e4.scopes].sort((e5, t4) => i3[e5] - i3[t4]) }));
    };
    return { getPluginMcpServers: async () => {
      const e3 = await i2.getPluginMcpServers();
      var r2, o3;
      return y2.report({ execHostRemoteName: (r2 = { diagnostics: t2.getLoadDiagnostics(), mcpDescriptorsProduced: e3.length, execHostRemoteName: n.env.remoteName }).execHostRemoteName ?? ne, pluginHomeDirHash: (o3 = r2.diagnostics.userHomeDirectory, (0, ee.createHash)("sha256").update(o3).digest("hex")), pluginsLoaded: r2.diagnostics.pluginsLoaded, retainedFromPreviousLoad: r2.diagnostics.retainedFromPreviousLoad, wasFirstLoad: r2.diagnostics.wasFirstLoad, sourceUnavailable: r2.diagnostics.sourceUnavailable, mcpDescriptorsProduced: r2.mcpDescriptorsProduced }), e3.map((e4) => ({ ...e4, plugin: e4.pluginName, pluginSource: "cursor-third-party" === e4.pluginSource ? "cursor-first-party" : e4.pluginSource }));
    }, getPluginHooks: async () => o2.getPluginHooks(), getPluginCommands: async () => s2.getPluginCommands(), getLoadedPluginsSummary: async () => w2((await ae(t2)).plugins), getPluginLoadFailures: async () => (await ae(t2)).loadFailures, getPluginSetIncomplete: async () => (await ae(t2)).pluginSetIncomplete, getInstalledGitHubPlugins: async () => a2.listPlugins(), addGitHubPlugin: async (e3) => {
      throw new Error("Direct GitHub plugin installs are no longer supported. Use a marketplace instead.");
    }, removeGitHubPlugin: async (e3) => {
      await a2.removePlugin(e3), await l2();
    }, removeLocalPlugin: async (e3) => {
      await (0, L._fm)(e3, { userHomeDir: H.homedir(), log: c2 }), await l2();
    }, saveLocalPluginVariables: async (e3, t3) => {
      if ((i3 = e3).includes("/") || i3.includes("\\") || ".." === i3 || "." === i3) throw new Error(`Invalid local plugin variables key: ${e3}`);
      var i3;
      await g2.store(`${h2}${e3}`, JSON.stringify(t3)), p2();
    }, discoverMarketplacePlugins: async (e3, t3, i3) => u2.discoverMarketplacePlugins(e3, t3, i3), parseGitHubRepoForPluginsLocally: async (e3, t3) => {
      try {
        const i3 = (0, L.z4A)(e3) ? (0, B.fileURLToPath)(e3.trim()) : void 0, r2 = (0, q.join)(H.homedir(), ".cursor", "plugins", "marketplaces"), n2 = void 0 !== i3 ? await (0, L.e1t)({ localPath: i3, pluginMetricsLogger: c2 }) : await (0, L.U27)({ gitUrl: e3, gitRef: t3, marketplaceCacheRoot: r2, allowNonGitHubHosts: true, pluginMetricsLogger: c2, sparsePluginClones: f2 }), o3 = (e4) => new z.ngG({ name: e4.name, description: e4.description }), s3 = (e4) => new z.Vdt({ name: e4.name, description: e4.description }), a3 = (e4) => new z.$el({ name: e4.name, description: e4.description }), l3 = (e4) => new z.Q63({ name: e4.name, description: e4.description }), u3 = (e4) => new z.UCU({ name: e4.name, description: e4.description }), d3 = (e4) => new z.tlS({ name: e4.name, description: e4.description });
        return (0, J.toPlainMessage)(new z.nXe({ marketplaceName: n2.marketplaceName, marketplaceDescription: n2.marketplaceDescription, defaultBranch: n2.defaultBranch, repositoryUrl: n2.repositoryUrl, commitSha: n2.commitSha, plugins: n2.plugins.map((e4) => new z.HvA({ name: e4.name, displayName: e4.displayName, description: e4.description, gitPath: e4.gitPath, logoUrl: e4.logoUrl, variables: e4.variables ? J.Struct.fromJson(e4.variables) : void 0, sourceGitUrl: e4.externalUrl, sourceGitRef: e4.externalRef, skills: e4.skills.map(o3), subagents: e4.subagents.map(s3), hooks: e4.hooks.map(a3), rules: e4.rules.map(l3), mcpServers: e4.mcpServers.map(u3), commands: e4.commands.map(d3), parseError: e4.parseError })) }));
      } catch (e4) {
        throw c2.captureException(e4, { error_type: "parse_github_repo_for_plugins_locally" }), e4;
      }
    }, discoverClaudeMarketplacePayloads: async (e3) => {
      const t3 = { log: (e4, t4) => {
        c2.log("info", `[cc-marketplace-import] ${e4}`, t4 ?? {});
      } };
      try {
        const { payloads: i3 } = await (0, L.kxb)({ existingUserMarketplaceNames: e3, logger: t3 });
        return i3.map((e4) => ({ gitUrl: e4.gitUrl, gitRef: e4.gitRef, marketplaceName: e4.marketplaceName, commitSha: e4.commitSha, plugins: e4.plugins.map((e5) => ({ name: e5.name, displayName: e5.displayName, description: e5.description, gitPath: e5.gitPath, gitUrl: e5.gitUrl, gitRef: e5.gitRef, skills: e5.skills, subagents: e5.subagents, hooks: e5.hooks, rules: e5.rules, mcpServers: e5.mcpServers, commands: e5.commands, logoUrl: e5.logoUrl, variables: e5.variables })) }));
      } catch (e4) {
        throw c2.captureException(e4, { error_type: "discover_claude_marketplace_payloads" }), e4;
      }
    }, installProjectPlugin: async (e3) => {
      const t3 = d2[0];
      if (!t3) throw new Error("No workspace path available for project plugin installation");
      "third-party" === e3.type ? await (0, L.YUn)(t3, e3.key, e3.gitInfo) : await (0, L.QOY)(t3, e3.key), await l2();
    }, removeProjectPlugin: async (e3) => {
      if (0 === d2.length) throw new Error("No workspace path available for project plugin removal");
      await (0, L.Lsv)(d2, e3), await l2();
    }, getEffectiveInstalledPlugins: b2, getPluginsSnapshot: async (e3) => (async function(e4) {
      const [t3, i3, r2, n2, o3] = await Promise.all([e4.getEffectiveInstalledPlugins(), e4.getImportedExternalPlugins(), e4.getCursorThirdPartyPlugins(), e4.getInstalledGitHubPlugins(), e4.readLoadedPlugins()]);
      return { effectiveInstalledPlugins: t3, importedExternalPlugins: i3, installedCursorThirdPartyPlugins: r2, installedGitHubPlugins: n2, ...o3 };
    })({ getEffectiveInstalledPlugins: () => b2(e3), getImportedExternalPlugins: S2, getCursorThirdPartyPlugins: P2, getInstalledGitHubPlugins: () => a2.listPlugins(), readLoadedPlugins: async () => {
      const { plugins: e4, loadFailures: i3, pluginSetIncomplete: r2 } = await ae(t2);
      return { loadedPluginsSummary: await w2(e4), loadFailures: i3, pluginSetIncomplete: r2 };
    } }), getPluginComponentFiles: async () => {
      const e3 = await t2.getAllEnabledPlugins();
      let i3 = [];
      try {
        i3 = await b2(false);
      } catch (e4) {
        K(e4) || c2.log("error", "Failed to resolve installed plugins for component metadata", { error: String(e4) });
      }
      const r2 = /* @__PURE__ */ new Map();
      for (const e4 of i3) {
        const t3 = e4.plugin;
        if (void 0 === t3.name) continue;
        r2.set(t3.name, t3);
        const i4 = t3.marketplace?.name;
        void 0 !== i4 && "cursor-public" !== i4 && r2.set(`${t3.name}@${i4}`, t3);
      }
      return Promise.all(e3.map(async (e4) => {
        const t3 = e4.identifier.sourceInfo.name, i4 = e4.identifier.source, n2 = e4.identifier.sourceInfo;
        let o3 = t3;
        if ("claude-plugin" === e4.identifier.source) {
          const i5 = e4.identifier.sourceInfo.marketplace;
          i5 && "cursor-public" !== i5 && (o3 = `${t3}@${i5}`);
        } else "cursor-first-party" !== e4.identifier.source && "cursor-third-party" !== e4.identifier.source || !("marketplace" in n2) || "string" != typeof n2.marketplace || "cursor-public" === n2.marketplace || (o3 = `${t3}@${n2.marketplace}`);
        const s3 = r2.get(o3) ?? r2.get(t3), a3 = [], l3 = (e5) => {
          const t4 = (0, q.dirname)(e5);
          return "." !== t4 ? (0, q.basename)(t4) : (0, q.basename)(e5);
        };
        for (const t4 of e4.skills) a3.push({ type: "Skills", name: l3(t4.path), filePath: (0, q.join)(e4.installPath, t4.path), description: t4.description });
        for (const t4 of e4.rules) a3.push({ type: "Rules", name: t4.name, filePath: (0, q.join)(e4.installPath, t4.path), description: t4.description });
        for (const t4 of e4.agents) a3.push({ type: "Subagents", name: t4.name, filePath: (0, q.join)(e4.installPath, t4.path), description: t4.description });
        for (const t4 of e4.commands) a3.push({ type: "Commands", name: t4.name, filePath: (0, q.join)(e4.installPath, t4.path), description: t4.description });
        if (e4.hooks && "config" in e4.hooks && a3.push({ type: "Hooks", name: "hooks.json", filePath: e4.hooks.sourcePath ?? (0, q.join)(e4.installPath, "hooks", "hooks.json") }), e4.mcpConfig?.mcpServers) {
          const t4 = (0, q.join)(e4.installPath, ".mcp.json");
          let i5 = (0, q.join)(e4.installPath, "mcp.json");
          try {
            await (0, $.access)(t4), i5 = t4;
          } catch {
          }
          for (const t5 of Object.keys(e4.mcpConfig.mcpServers)) a3.push({ type: "MCPs", name: t5, filePath: e4.mcpConfig.mcpServerSourcePaths?.[t5] ?? i5 });
        }
        return { pluginName: t3, pluginId: s3?.id?.toString(), marketplaceId: s3?.marketplace?.id?.toString(), pluginKey: o3, pluginSource: i4, publisherName: e4.authorName, components: a3 };
      }));
    }, getPrimitiveAuthorship: async (e3) => m2.getPrimitiveAuthorship(e3), requestRefresh: async () => {
      p2();
    }, addExtensionPlugin: async ({ path: e3, extensionId: i3 }) => {
      await t2.registerExtensionPlugin({ path: e3, extensionId: i3 }), await l2();
    }, removeExtensionPlugin: async ({ path: e3, extensionId: i3 }) => {
      await t2.unregisterExtensionPlugin({ path: e3, extensionId: i3 }) && await l2();
    } };
  }
  const de = 5e3;
  async function pe(e2, t2, i2) {
    const r2 = [];
    let n2 = 0;
    const o2 = Array.from({ length: Math.min(t2, e2.length) }, () => (async function() {
      for (; n2 < e2.length; ) {
        const t3 = n2;
        n2 += 1;
        const o3 = e2[t3];
        void 0 !== o3 && (r2[t3] = await i2(o3));
      }
    })());
    return await Promise.all(o2), r2;
  }
  class ge {
    constructor(e2) {
      this.options = e2;
    }
    async getPrimitiveAuthorship(e2) {
      return pe(e2, 4, async (e3) => {
        const t2 = (function(e4) {
          if (void 0 === e4.pluginSource) return;
          const t3 = e4.publisherName?.trim();
          return t3 ? { label: t3, kind: "publisher", authorName: t3 } : void 0;
        })(e3) ?? await this.resolveGitAuthorship(e3);
        return { sourceId: e3.sourceId, authorship: t2 };
      });
    }
    async resolveGitAuthorship(e2) {
      if (void 0 === e2.pluginSource) try {
        const t2 = await this.options.gitExecutorPromise, i2 = (0, r.q6)(), n2 = (0, q.dirname)(e2.filePath), o2 = await (0, c.ky5)(i2, t2, n2);
        if (null === o2) return;
        const s2 = (0, q.relative)(o2, e2.filePath);
        if (".." === s2 || s2.startsWith(`..${q.sep}`)) return;
        return (function(e3) {
          const t3 = [...e3.split("\n")].reverse().find((e4) => e4.trim().length > 0);
          if (void 0 === t3) return;
          const [i3, r2, n3, o3] = t3.trim().split("\0");
          return i3 && r2 ? { label: r2, kind: "git", authorName: r2, ...void 0 !== n3 && n3.length > 0 && { authorEmail: n3 }, commitSha: i3, ...void 0 !== o3 && o3.length > 0 && { committedAt: o3 } } : void 0;
        })((await t2.exec(i2, o2, ["log", "--follow", "--diff-filter=AR", "--format=%H%x00%an%x00%ae%x00%aI", "--", s2], { timeout: 3e4, caller: "primitiveAuthorship" })).stdout);
      } catch (e3) {
        return void this.options.logDebug?.(`[primitive-authorship] git authorship failed: ${String(e3)}`);
      }
    }
  }
  async function me(e2) {
    try {
      await e2.reload(), e2.notifyPluginsChanged();
    } catch (t2) {
      throw e2.onFailure?.(t2), t2;
    }
  }
  async function fe(e2) {
    try {
      await me(e2);
    } catch {
    }
  }
  function he(e2, t2) {
    let i2;
    return { schedule: () => {
      i2 && clearTimeout(i2), i2 = setTimeout(async () => {
        i2 = void 0, await t2();
      }, e2);
    }, dispose: () => {
      i2 && (clearTimeout(i2), i2 = void 0);
    } };
  }
  async function ye() {
    delete process.env.CURSOR_PLUGIN_ROOT, delete process.env.CLAUDE_PLUGIN_ROOT;
  }
  async function we(e2) {
    const { workspacePaths: t2, getThirdPartyExtensibilityEnabled: i2, getAllowUserLocalPluginImports: o2, deactivateTasks: s2, context: a2, gitExecutorPromise: l2 } = e2, u2 = new L.KYw(H.homedir()), d2 = await n.cursor.getAuthId() ?? "anonymous", p2 = await n.cursor.checkFeatureGate("enable_marketplace_plugin_logging"), g2 = n.window.createOutputChannel("Cursor Plugins", { log: true }), m2 = { log: (e3, t3, i3) => {
      const o3 = `[pluginsSubsystem] ${t3}`, s3 = (/* @__PURE__ */ new Date()).toISOString();
      if (g2?.appendLine(`[${s3}] [${e3}] ${t3}`), p2) try {
        switch (e3) {
          case "debug":
            n.cursor.logStructuredDebug("agent_exec", o3, i3, { disableConsoleFallback: true });
            break;
          case "info":
            n.cursor.logStructuredInfo("agent_exec", o3, i3, { disableConsoleFallback: true });
            break;
          case "warn":
            n.cursor.logStructuredWarn("agent_exec", o3, i3, { disableConsoleFallback: true });
            break;
          case "error":
            n.cursor.logStructuredError("agent_exec", o3, void 0, i3, { disableConsoleFallback: true });
            break;
          default:
            throw new Error(`Unhandled plugin metrics log level: ${e3}`);
        }
      } catch (e4) {
        G.error((0, r.q6)(), "Failed to log plugin metrics", { error: String(e4) });
      }
    }, increment: (e3, t3, i3) => {
      p2 && n.cursor.metricsIncrement({ stat: e3, value: t3, tags: i3 });
    }, distribution: (e3, t3, i3) => {
      p2 && n.cursor.metricsDistribution({ stat: e3, value: t3, tags: i3 });
    }, captureException: (e3, t3) => {
      p2 && n.cursor.captureException(e3, t3);
    } }, f2 = (0, q.join)(H.homedir(), ".cursor", "plugins", "marketplaces"), h2 = await n.cursor.checkFeatureGate("team_marketplace_mcps"), y2 = await n.cursor.checkFeatureGate("enable_sparse_plugin_clones"), w2 = await n.cursor.checkFeatureGate("marketplace_origin_distribution");
    let v2;
    const k2 = w2 ? () => (v2 ??= (async () => {
      const e3 = Date.now();
      await (function(e4) {
        if (void 0 !== e4.getToken()) return Promise.resolve();
        const t3 = e4.timeoutMs ?? de;
        return new Promise((i3) => {
          let r2 = false;
          const n2 = () => {
            r2 || (r2 = true, clearTimeout(o3), s3.dispose(), i3());
          }, o3 = setTimeout(n2, t3), s3 = e4.onDidChangeToken((e5) => {
            void 0 !== e5 && n2();
          });
          void 0 !== e4.getToken() && n2();
        });
      })({ getToken: () => n.cursor.getCursorAuthToken(), onDidChangeToken: (e4) => n.cursor.onDidChangeCursorAuthToken(e4) }), (async (e4) => {
        try {
          if (m2.distribution("marketplace.origin_distribution.auth_wait", Math.min(e4, de)), void 0 !== n.cursor.getCursorAuthToken()) return;
          const t3 = await n.cursor.getAuthId();
          m2.increment("marketplace.origin_distribution.auth_wait.error", 1, { reason: void 0 === t3 ? "logged_out" : "exthost_lag" });
        } catch {
        }
      })(Date.now() - e3);
    })(), v2) : void 0, S2 = (0, L.NwZ)(async () => {
      m2.increment("backend_marketplace_client.get_effective_user_plugins.count", 1);
      try {
        return await n.cursor.getEffectiveUserPlugins(true) ?? { plugins: [] };
      } catch (e3) {
        throw K(e3) || (m2.log("error", "Failed to get effective user plugins", { error: String(e3) }), m2.increment("backend_marketplace_client.get_effective_user_plugins.error", 1)), e3;
      }
    }, { marketplaceCacheRoot: f2, pluginLogger: m2, extraGitConfig: () => {
      const e3 = (0, U.w)(n.cursor.getCursorCreds()?.originBackendUrl);
      return (0, L.kdU)(n.cursor.getCursorAuthToken(), void 0 !== e3 ? [e3] : []);
    }, awaitAuthReady: k2, listOptions: { enableInlinePlugins: h2 }, sparsePluginClones: y2 }), P2 = [{ client: S2, userId: d2, cacheManager: new L.WCg(H.homedir()) }, { client: (0, L.NwZ)(async () => {
      try {
        const e3 = await (0, L.JJ1)(t2);
        if (0 === e3.length) return { plugins: [] };
        const i3 = e3.filter((e4) => e4.entry.gitUrl), o3 = e3.filter((e4) => !e4.entry.gitUrl), s3 = i3.filter(({ key: e4, entry: t3 }) => {
          const i4 = t3.gitUrl;
          return !(i4 && !(0, L.QY1)(i4)) || (G.warn((0, r.q6)(), "Ignoring project plugin with invalid gitUrl in .cursor/settings.json", { key: e4, gitUrl: i4 }), false);
        }).map(({ key: e4, entry: t3 }) => {
          const i4 = (0, L.kXx)(e4);
          return { plugin: { name: i4.name, gitUrl: t3.gitUrl, gitRef: t3.gitRef, gitPath: t3.gitPath, marketplace: { name: i4.marketplaceName, gitUrl: t3.gitUrl, gitRef: t3.gitRef } }, isEnabled: true };
        }), a3 = o3.length > 0 ? (await n.cursor.resolveProjectPlugins(o3.map((e4) => (0, L.kXx)(e4.key)).map((e4) => ({ name: e4.name, marketplaceName: e4.marketplaceName }))))?.plugins?.map((e4) => ({ plugin: e4, isEnabled: true })) ?? [] : [];
        return { plugins: [...s3, ...a3] };
      } catch (e3) {
        throw G.error((0, r.q6)(), "Failed to resolve project plugins", { error: String(e3) }), e3;
      }
    }, { marketplaceCacheRoot: f2, pluginLogger: m2, extraGitConfig: () => {
      const e3 = (0, U.w)(n.cursor.getCursorCreds()?.originBackendUrl);
      return (0, L.kdU)(n.cursor.getCursorAuthToken(), void 0 !== e3 ? [e3] : []);
    }, awaitAuthReady: k2, listOptions: { enableInlinePlugins: h2 }, sparsePluginClones: y2 }), userId: d2, cacheManager: new L.WCg(H.homedir()), pruneOldVersions: true }], b2 = (function(e3) {
      const t3 = n.cursor.getCursorAgentExecSecretStorage();
      return { get: async (i3) => await t3.get(i3) ?? await e3.secrets.get(i3), store: (e4, i3) => t3.store(e4, i3), delete: (e4) => t3.delete(e4), keys: () => t3.keys(), onDidChange: t3.onDidChange };
    })(a2), D2 = new c.Npg(t2, H.homedir(), () => ({ importThirdPartyPlugins: i2(), loadUserLocalPlugins: o2(), loadCursorFirstParty: true }), P2, m2, async (e3) => {
      try {
        const t3 = await b2.get(`localPluginVariables:${e3}`);
        if (t3) return JSON.parse(t3);
      } catch {
      }
    }), C2 = new c.gRo(D2), I2 = new c.aAA(D2), T2 = new c.O0K(D2), E2 = { reload: async () => {
      await D2.reload();
    }, notifyPluginsChanged: () => {
      n.cursor.notifyPluginsChanged();
    }, onFailure: (e3) => {
      G.warn((0, r.q6)(), "Failed to refresh plugins", { error: String(e3) });
    } }, x2 = /* @__PURE__ */ (function(e3) {
      let t3;
      const i3 = (e4, i4) => {
        void 0 !== i4 && t3 === e4 && (t3 = i4);
      };
      return { initializeLastSeenUserTeamPluginSignature: async () => {
        const r2 = t3, n2 = await e3.getUserTeamPluginSignatureFromBackend();
        i3(r2, n2);
      }, refreshPlugins: async () => {
        const r2 = t3, n2 = await e3.getUserTeamPluginSignatureFromBackend();
        await e3.refreshPluginsStrict(), i3(r2, n2);
      }, refreshPluginsOnWindowFocus: async () => {
        const r2 = await e3.getUserTeamPluginSignatureFromBackend();
        if (void 0 === r2) return void await e3.refreshPluginsBestEffort();
        const n2 = t3;
        n2 !== r2 && (await e3.refreshPluginsStrict(), i3(n2, r2));
      }, getLastSeenUserTeamPluginSignature: () => t3 };
    })({ getUserTeamPluginSignatureFromBackend: async () => {
      try {
        return (function(e3, t3 = {}) {
          const { enableInlinePlugins: i3 = false } = t3, r2 = [], n2 = e3?.marketplaces ?? [];
          for (const t4 of e3?.plugins ?? []) {
            if (!t4.isEnabled) continue;
            const e4 = t4.plugin;
            if (e4?.name) if (e4.gitUrl) r2.push(JSON.stringify([t4.isTeamRequired ? "team" : "user", e4.name, e4.gitUrl, (0, L.gFi)(t4, n2), e4.gitPath ?? "", e4.releaseRepo ?? "", e4.releaseAsset ?? "", e4.releaseTag ?? ""]));
            else {
              if (!i3) continue;
              r2.push(JSON.stringify([t4.isTeamRequired ? "team" : "user", e4.name, `inline:${e4.id ?? ""}`, String(e4.updatedAt ?? "")]));
            }
          }
          return r2.sort(), JSON.stringify(r2);
        })(await n.cursor.getEffectiveUserPlugins(true) ?? { plugins: [] }, { enableInlinePlugins: h2 });
      } catch (e3) {
        return void (K(e3) || G.warn((0, r.q6)(), "Failed to fetch effective user/team plugins for focus refresh", { error: String(e3) }));
      }
    }, refreshPluginsStrict: async () => {
      await me(E2);
    }, refreshPluginsBestEffort: async () => {
      await fe(E2);
    } });
    x2.initializeLastSeenUserTeamPluginSignature();
    const R2 = async () => {
      await x2.refreshPlugins();
    }, N2 = /* @__PURE__ */ (function(e3, t3) {
      let i3, r2 = 0, n2 = false, o3 = false, s3 = false;
      const a3 = async () => {
        if (!s3 && !n2) {
          n2 = true, r2 = Date.now();
          try {
            await t3();
          } finally {
            n2 = false, o3 && !s3 && (o3 = false, l3());
          }
        }
      }, l3 = () => {
        if (s3) return;
        const t4 = Date.now(), l4 = e3 - (t4 - r2);
        if (l4 <= 0) return n2 ? void (o3 = true) : void a3();
        i3 || (i3 = setTimeout(() => {
          i3 = void 0, s3 || (n2 ? o3 = true : a3());
        }, l4));
      };
      return { schedule: l3, dispose: () => {
        s3 = true, o3 = false, i3 && (clearTimeout(i3), i3 = void 0);
      } };
    })(5e3, async () => {
      try {
        await x2.refreshPluginsOnWindowFocus();
      } catch {
      }
    }), j2 = he(2e3, async () => {
      try {
        await R2();
      } catch {
      }
    });
    let _2, F2 = false;
    const A2 = () => {
      _2 ? F2 = true : _2 = (async () => {
        do {
          F2 = false, await R2();
        } while (F2);
      })().catch((e3) => {
        G.error((0, r.q6)(), "Failed to refresh plugins after project settings change", { error: String(e3) });
      }).finally(() => {
        _2 = void 0;
      });
    }, M2 = n.workspace.createFileSystemWatcher("**/.cursor/settings.json");
    M2.onDidCreate(() => {
      A2();
    }), M2.onDidChange(() => {
      A2();
    }), M2.onDidDelete(() => {
      A2();
    }), s2.push(() => {
      M2.dispose();
    });
    const V2 = (0, q.join)(H.homedir(), ".cursor", "plugins", L.DDg), W2 = he(1e3, async () => {
      o2() && await fe(E2);
    });
    (async () => {
      if (o2()) try {
        await (0, $.mkdir)(V2, { recursive: true });
        const e3 = (0, O.watch)(V2, { recursive: true }, () => {
          W2.schedule();
        });
        s2.push(() => {
          e3.close(), W2.dispose();
        });
      } catch (e3) {
        G.warn((0, r.q6)(), "Failed to watch user-local plugins directory", { error: String(e3) });
      }
    })();
    const z2 = /* @__PURE__ */ new Map(), J2 = he(1e3, async () => {
      await fe(E2);
    }), B2 = ue({ pluginsService: D2, pluginMcpService: C2, pluginHooksService: I2, pluginCommandsService: T2, githubPluginsStore: u2, refreshPlugins: R2, pluginMetricsLogger: m2, backendMarketplaceClient: S2, workspacePaths: t2, requestRefreshSchedule: () => j2.schedule(), secretStorage: b2, primitiveAuthorshipResolver: new ge({ gitExecutorPromise: l2, logDebug: (e3) => G.debug((0, r.q6)(), e3) }), sparsePluginClones: y2 }), X2 = n.cursor.registerPluginsProvider({ ...B2, addExtensionPlugin: async (e3) => {
      let t3;
      await B2.addExtensionPlugin(e3);
      try {
        t3 = await (0, $.realpath)(e3.path);
      } catch {
        t3 = e3.path;
      }
      if (!z2.has(t3)) try {
        const e4 = (0, O.watch)(t3, { recursive: true }, () => {
          J2.schedule();
        });
        z2.set(t3, e4);
      } catch (e4) {
        G.warn((0, r.q6)(), "Failed to watch extension plugin directory", { path: t3, error: String(e4) });
      }
    }, removeExtensionPlugin: async (e3) => {
      let t3;
      await B2.removeExtensionPlugin(e3);
      try {
        t3 = await (0, $.realpath)(e3.path);
      } catch {
        t3 = e3.path;
      }
      const i3 = z2.get(t3);
      i3 && (i3.close(), z2.delete(t3));
    } });
    a2.subscriptions.push(X2), s2.push(() => {
      for (const e3 of z2.values()) e3.close();
      z2.clear(), J2.dispose();
    });
    const Z2 = n.window.onDidChangeWindowState((e3) => {
      e3.focused && N2.schedule();
    }), Y2 = n.cursor.onDidChangeAllowUserLocalPluginImports(() => {
      fe(E2);
    });
    return a2.subscriptions.push({ dispose: () => {
      Z2.dispose(), Y2.dispose(), N2.dispose(), j2.dispose();
    } }), { pluginsService: D2, refreshPluginHooks: ye };
  }
  async function ve(e2) {
    const t2 = n.Uri.file(e2).fsPath, i2 = t2.endsWith(y.sep) ? t2 : `${t2}${y.sep}`, r2 = (await Promise.all(n.workspace.textDocuments.filter((e3) => e3.isDirty && "file" === e3.uri.scheme && e3.uri.fsPath.startsWith(i2)).map(async (e3) => ({ path: e3.uri.fsPath, saved: await e3.save() })))).filter(({ saved: e3 }) => !e3).map(({ path: e3 }) => e3);
    if (r2.length > 0) throw new Error(`Unsaved edits could not be written to disk (${r2.join(", ")}).`);
  }
  const ke = 5, Se = 500;
  function Pe(e2) {
    return "cursor-first-party" === e2.identifier.source || "cursor-third-party" === e2.identifier.source ? e2.identifier.sourceInfo : void 0;
  }
  async function be(e2, t2) {
    return (await e2.getAllEnabledPlugins()).find((e3) => Pe(e3)?.pluginDbId === t2);
  }
  function De(e2) {
    return new Promise((t2) => setTimeout(t2, e2));
  }
  async function Ce(e2, t2, i2, r2) {
    for (let n2 = 0; n2 < ke; n2++) {
      let o2;
      try {
        o2 = await e2.reloadPlugin({ name: t2.pluginName, pluginDbId: t2.pluginId });
      } catch (e3) {
        return void r2(e3);
      }
      if (i2(o2)) return o2;
      n2 < ke - 1 && await De(Se);
    }
  }
  function Ie(e2, t2) {
    return void 0 !== e2 && void 0 === e2.loadError && Pe(e2)?.version === t2;
  }
  class Te extends Error {
    constructor(e2) {
      super(`Refusing to remove "${e2}": it is not a skill folder under the user's .cursor/skills`), this.skillDir = e2, this.name = "PublishSkillGuardViolationError";
    }
  }
  function Ee(e2) {
    return e2.replace(/\\/g, "/");
  }
  function xe(e2) {
    const t2 = (0, y.resolve)((0, y.join)(e2.userHomeDirectory, ".cursor", "skills")), i2 = (0, y.relative)(t2, (0, y.resolve)(e2.skillDir));
    if ("" !== i2 && !(0, y.isAbsolute)(i2) && ".." !== i2.split(y.sep)[0]) return Ee(i2);
  }
  async function Re(e2, t2) {
    const { pluginsService: i2 } = e2, n2 = (0, y.dirname)(t2.skillFilePath), o2 = xe({ skillDir: n2, userHomeDirectory: e2.userHomeDirectory });
    if (void 0 === o2) throw new Te(n2);
    const s2 = await Ce(i2, { pluginName: t2.pluginName, pluginId: t2.pluginId }, (e3) => (function(e4, t3) {
      if (void 0 === e4 || !Ie(e4, t3.commitSha)) return false;
      const i3 = `skills/${t3.skillPath}/SKILL.md`;
      return e4.skills.some((e5) => {
        const t4 = Ee(e5.path);
        return t4 === i3 || t4.endsWith(`/${i3}`);
      });
    })(e3, { commitSha: t2.commitSha, skillPath: o2 }), (e3) => G.warn((0, r.q6)(), "Publish skill: plugin reload failed", { error: String(e3) }));
    if (void 0 === s2) return { confirmed: false, deleted: false };
    if (!await (async function(e3) {
      try {
        return await (0, f.stat)(e3), true;
      } catch {
        return false;
      }
    })(t2.skillFilePath)) return G.warn((0, r.q6)(), "Publish skill: local skill vanished before cleanup", { skillDir: n2 }), { confirmed: true, deleted: false };
    try {
      return await e2.deleteDirectoryToTrash(n2), { confirmed: true, deleted: true, filesMove: { previousDir: n2, nextDir: (0, y.join)(s2.installPath, "skills", o2) } };
    } catch (e3) {
      return G.warn((0, r.q6)(), "Publish skill: confirmed plugin loaded but failed to trash local skill", { skillDir: n2, error: String(e3) }), { confirmed: true, deleted: false };
    }
  }
  const Ne = "cursor.publishSkill.packSkillPlugin", je = "cursor.publishSkill.reloadConfirmAndDeleteLocalSkill";
  async function _e(e2) {
    await n.workspace.fs.delete(n.Uri.file(e2), { recursive: true, useTrash: true });
  }
  function Fe(e2, t2) {
    e2.subscriptions.push(n.commands.registerCommand(Ne, (e3) => {
      if (void 0 === e3 || "string" != typeof e3.skillFilePath || "" === e3.skillFilePath.trim() || "string" != typeof e3.pluginName || "" === e3.pluginName.trim()) throw new Error("packSkillPlugin requires a non-empty skillFilePath and pluginName");
      return (async function(e4) {
        const t3 = (0, y.dirname)(e4.skillFilePath), i2 = xe({ skillDir: t3, userHomeDirectory: (0, h.homedir)() });
        if (void 0 === i2) throw new Error(`Only skills under ~/.cursor/skills can be published; "${t3}" is not one.`);
        await ve(t3);
        const r2 = await (0, f.mkdtemp)((0, y.join)((0, h.tmpdir)(), "publish-skill-"));
        try {
          const n2 = await (0, L.ALO)({ skills: [{ dir: t3, relativePath: i2 }], targetDir: r2, pluginName: e4.pluginName }), o2 = await (0, f.readFile)((0, y.join)(n2, "plugin.json"), "utf-8"), s2 = JSON.parse(o2), a2 = "string" == typeof s2.name && "" !== s2.name.trim() ? s2.name : e4.pluginName;
          return { tarGzBase64: (await (0, L.Jwk)(n2)).toString("base64"), pluginName: a2 };
        } finally {
          await (0, f.rm)(r2, { recursive: true, force: true }).catch(() => {
          });
        }
      })(e3);
    }), n.commands.registerCommand(je, async (e3) => {
      if (void 0 === e3 || "string" != typeof e3.skillFilePath || "" === e3.skillFilePath.trim() || "string" != typeof e3.pluginName || "" === e3.pluginName.trim() || "string" != typeof e3.pluginId || "" === e3.pluginId.trim() || "string" != typeof e3.commitSha || "" === e3.commitSha.trim()) throw new Error("reloadConfirmAndDeleteLocalSkill requires skillFilePath, pluginName, pluginId, and commitSha");
      let i2;
      try {
        i2 = await t2;
      } catch {
        return { confirmed: false, deleted: false };
      }
      try {
        return await Re(i2, e3);
      } catch (e4) {
        if (e4 instanceof Te) return { confirmed: false, deleted: false, guardViolation: true };
        throw e4;
      }
    }));
  }
  async function Ae(e2, t2) {
    const i2 = await be(e2.pluginsService, t2.pluginId);
    if (void 0 === i2) throw new Error("The published plugin is not installed locally, so its edits cannot be synced.");
    const r2 = Pe(i2)?.name;
    if (void 0 === r2 || "" === r2) throw new Error("The installed plugin has no marketplace name to sync to.");
    if ((0, L.UDB)(r2) !== r2) throw new Error(`Cannot sync "${r2}": its published name is not in the form a plugin manifest can carry.`);
    const n2 = (function(e3) {
      const t3 = (0, y.join)(e3.installPath, "skills"), i3 = /* @__PURE__ */ new Map();
      for (const r3 of e3.skills) {
        const n3 = (0, y.join)(e3.installPath, (0, y.dirname)(r3.path)), o3 = (0, y.relative)(t3, n3);
        "" === o3 || o3.startsWith("..") || (0, y.join)(t3, o3) !== n3 || i3.set(n3, { dir: n3, relativePath: o3 });
      }
      return [...i3.values()];
    })(i2);
    if (0 === n2.length) throw new Error("The published plugin has no skill folder to sync.");
    await e2.saveDirtyDocumentsUnder(i2.installPath);
    const o2 = await (0, f.mkdtemp)((0, y.join)((0, h.tmpdir)(), "resync-skill-"));
    try {
      const e3 = await (0, L.ALO)({ skills: n2, targetDir: o2, pluginName: r2, displayName: t2.displayName });
      return { tarGzBase64: (await (0, L.Jwk)(e3)).toString("base64"), pluginName: r2, installPath: i2.installPath };
    } finally {
      await (0, f.rm)(o2, { recursive: true, force: true }).catch(() => {
      });
    }
  }
  const Me = "cursor.resyncSkill.packInstalledSkillPlugin", Le = "cursor.resyncSkill.reloadAndConfirmResync";
  function Ue(e2, t2) {
    e2.subscriptions.push(n.commands.registerCommand(Me, async (e3) => {
      const i2 = (function(e4) {
        const t3 = e4;
        if (void 0 === t3 || "string" != typeof t3.pluginId || "" === t3.pluginId.trim() || "string" != typeof t3.displayName || "" === t3.displayName.trim()) throw new Error("packInstalledSkillPlugin requires a non-empty pluginId and displayName");
        return { pluginId: t3.pluginId, displayName: t3.displayName };
      })(e3);
      return Ae(await t2, i2);
    }), n.commands.registerCommand(Le, async (e3) => {
      const i2 = (function(e4) {
        const t3 = e4;
        if (void 0 === t3 || "string" != typeof t3.pluginName || "" === t3.pluginName.trim() || "string" != typeof t3.pluginId || "" === t3.pluginId.trim() || "string" != typeof t3.commitSha || "" === t3.commitSha.trim()) throw new Error("reloadAndConfirmResync requires pluginName, pluginId, and commitSha");
        return { pluginName: t3.pluginName, pluginId: t3.pluginId, commitSha: t3.commitSha };
      })(e3);
      let n2;
      try {
        n2 = await t2;
      } catch {
        return { confirmed: false };
      }
      return (async function(e4, t3) {
        const i3 = await Ce(e4.pluginsService, { pluginName: t3.pluginName, pluginId: t3.pluginId }, (e5) => Ie(e5, t3.commitSha), (e5) => G.warn((0, r.q6)(), "Resync skill: plugin reload failed", { pluginId: t3.pluginId, error: String(e5) }));
        return void 0 === i3 ? { confirmed: false } : { confirmed: true, installPath: i3.installPath };
      })(n2, i2);
    }));
  }
  var Oe = i(7334), $e = i(65716);
  class He extends Error {
    constructor(e2, t2) {
      super(`Refusing to move "${e2}": it is not a skill folder under "${t2}"`), this.skillDir = e2, this.expectedRoot = t2, this.name = "StoreSkillGuardViolationError";
    }
  }
  function qe(e2) {
    const t2 = e2?.code;
    return "string" == typeof t2 ? t2 : e2 instanceof Error ? e2.name : "unknown";
  }
  function Ge(e2, t2) {
    if (!(0, y.isAbsolute)(t2) || !(0, y.isAbsolute)(e2)) return;
    const i2 = (0, y.relative)((0, y.resolve)(t2), (0, y.resolve)(e2));
    return "" === i2 || (0, y.isAbsolute)(i2) || ".." === i2.split(y.sep)[0] ? void 0 : i2.replace(/\\/g, "/");
  }
  function Ve(e2) {
    return (0, y.join)(e2, ".cursor", "skills");
  }
  async function We(e2) {
    try {
      return await (0, f.stat)(e2), true;
    } catch {
      return false;
    }
  }
  async function Ke(e2) {
    const t2 = [];
    let i2;
    try {
      i2 = await (0, f.readdir)(e2, { withFileTypes: true });
    } catch {
      return t2;
    }
    for (const r2 of i2) {
      const i3 = (0, y.join)(e2, r2.name);
      r2.isDirectory() ? t2.push(...await Ke(i3)) : r2.isFile() && t2.push(i3);
    }
    return t2;
  }
  async function ze(e2) {
    let t2 = 0;
    for (const i2 of await Ke(e2)) try {
      t2 = Math.max(t2, (await (0, f.stat)(i2)).mtimeMs);
    } catch {
    }
    return t2;
  }
  function Je(e2) {
    return { confirmed: false, deleted: false, reason: e2 };
  }
  async function Be(e2, t2, i2) {
    if (!await We(i2.sourceSkillFilePath)) return { confirmed: false, reason: t2.sourceMissingReason };
    await e2.saveDirtyDocumentsUnder(t2.sourceDir);
    const r2 = void 0 === i2.clearExistingDestination ? void 0 : { clear: i2.clearExistingDestination, stagingDir: (n2 = t2.destinationDir, (0, y.join)((0, y.dirname)(n2), `.${(0, y.basename)(n2)}.copy-${(0, ee.randomUUID)().slice(0, 8)}`)) };
    var n2;
    const o2 = void 0 !== r2;
    if (void 0 === r2 && await (async function(e3) {
      try {
        return await (0, f.lstat)(e3), true;
      } catch {
        return false;
      }
    })(t2.destinationDir)) return { confirmed: false, reason: "destination-exists" };
    const s2 = r2?.stagingDir ?? t2.destinationDir;
    try {
      await (0, f.mkdir)((0, y.dirname)(s2), { recursive: true }), await (0, f.cp)(t2.sourceDir, s2, { recursive: true, dereference: true, force: false, errorOnExist: true });
    } catch (i3) {
      return (function(e3) {
        const t3 = e3?.code;
        return "ERR_FS_CP_EEXIST" === t3 || "ERR_FS_CP_DIR_TO_NON_DIR" === t3;
      })(i3) ? { confirmed: false, reason: "destination-exists" } : (e2.logWarning(`${t2.label}: copy failed`, { code: qe(i3) }), await Qe({ deps: e2, copyTarget: s2, label: t2.label }), { confirmed: false, reason: "copy-failed" });
    }
    if (!await We((0, y.join)(s2, "SKILL.md"))) return await Qe({ deps: e2, copyTarget: s2, label: t2.label }), { confirmed: false, reason: "destination-missing" };
    if (void 0 !== r2) {
      const i3 = await r2.clear();
      if (void 0 !== i3) return await Qe({ deps: e2, copyTarget: r2.stagingDir, label: t2.label }), { confirmed: false, reason: i3 };
      try {
        await (0, f.rename)(r2.stagingDir, t2.destinationDir);
      } catch (i4) {
        return e2.logWarning(`${t2.label}: could not move the staged copy in`, { code: qe(i4) }), { confirmed: false, reason: "copy-failed" };
      }
    }
    const a2 = await Ke(t2.destinationDir);
    if (0 === a2.length) return await Qe({ deps: e2, copyTarget: t2.destinationDir, label: t2.label }), { confirmed: false, reason: "destination-missing" };
    let l2;
    try {
      l2 = await t2.confirmDurable(a2);
    } catch (i3) {
      e2.logWarning(`${t2.label}: durability check failed`, { code: qe(i3) }), l2 = "not-synced";
    }
    if (void 0 !== l2) return e2.logWarning(`${t2.label}: destination not durable, keeping source`, { code: l2 }), o2 || await Qe({ deps: e2, copyTarget: t2.destinationDir, label: t2.label }), { confirmed: false, reason: l2 };
    for (const i3 of a2) if (!await We(i3)) return e2.logWarning(`${t2.label}: destination vanished during the round`, { code: "destination-missing" }), { confirmed: false, reason: "destination-missing" };
    return { confirmed: true, copiedFiles: a2 };
  }
  async function Xe(e2, t2, i2) {
    if (!await We(i2)) return { confirmed: true, deleted: false, reason: t2.sourceMissingReason };
    try {
      await e2.deleteDirectoryToTrash(t2.sourceDir);
    } catch (i3) {
      return e2.logWarning(`${t2.label}: confirmed but failed to trash the source`, { code: qe(i3) }), { confirmed: true, deleted: false, reason: "delete-failed" };
    }
    return { confirmed: true, deleted: true, filesMove: { previousDir: t2.sourceDir, nextDir: t2.destinationDir } };
  }
  async function Ze(e2, t2, i2) {
    if (!await We(i2.skillFilePath)) return Je(t2.sourceMissingReason);
    const r2 = await We(t2.destinationDir);
    if (r2 && true !== i2.overwriteAlreadyApproved) {
      const i3 = await (async function(e3) {
        const [t3, i4] = await Promise.all([ze(e3.destinationDir), ze(e3.sourceDir)]);
        return { relativePath: e3.relativePath, destinationModifiedMs: t3, sourceModifiedMs: i4, newerCopy: t3 === i4 ? "same" : t3 > i4 ? "destination" : "source" };
      })({ relativePath: t2.relativePath, destinationDir: t2.destinationDir, sourceDir: t2.sourceDir });
      if (!await e2.confirmStoreOverwrite(i3)) return Je("destination-declined");
    }
    const n2 = await Be(e2, t2, { sourceSkillFilePath: i2.skillFilePath, clearExistingDestination: r2 ? Ye({ deps: e2, destinationDir: t2.destinationDir, label: t2.label }) : void 0 });
    return n2.confirmed ? await Xe(e2, t2, i2.skillFilePath) : Je(n2.reason);
  }
  function Ye(e2) {
    return async () => {
      try {
        return void await e2.deps.deleteDirectoryToTrash(e2.destinationDir);
      } catch (t2) {
        return e2.deps.logWarning(`${e2.label}: failed to trash the copy being replaced`, { code: qe(t2) }), "delete-failed";
      }
    };
  }
  async function Qe(e2) {
    const t2 = await (0, f.lstat)(e2.copyTarget).catch(() => {
    });
    if (void 0 !== t2 && t2.isDirectory()) try {
      await (0, f.rm)(e2.copyTarget, { recursive: true, force: true });
    } catch (t3) {
      e2.deps.logWarning(`${e2.label}: failed to clean up a partial copy`, { code: qe(t3) });
    }
  }
  async function et(e2, t2) {
    const i2 = (0, y.dirname)(t2.skillFilePath), r2 = (function(e3) {
      if ((0, y.isAbsolute)(e3.userHomeDirectory)) return Ge(e3.skillDir, Ve(e3.userHomeDirectory));
    })({ skillDir: i2, userHomeDirectory: e2.userHomeDirectory });
    if (void 0 === r2) throw new He(i2, Ve(e2.userHomeDirectory));
    if (!(0, y.isAbsolute)(e2.agentStoreSkillsDir)) throw new He(i2, e2.agentStoreSkillsDir);
    return await Ze(e2, { sourceDir: i2, destinationDir: (0, y.join)(e2.agentStoreSkillsDir, ...r2.split("/")), relativePath: r2, sourceMissingReason: "source-missing", confirmDurable: async (t3) => /* @__PURE__ */ (function(e3) {
      return "synced-path" === e3;
    })(await e2.requestScopedSync(t3)) ? void 0 : "not-synced", label: "Move skill to store" }, t2);
  }
  async function tt(e2, t2) {
    const i2 = (0, y.dirname)(t2.skillFilePath), r2 = (function(e3) {
      return Ge(e3.skillDir, e3.agentStoreSkillsDir);
    })({ skillDir: i2, agentStoreSkillsDir: e2.agentStoreSkillsDir });
    if (void 0 === r2) throw new He(i2, e2.agentStoreSkillsDir);
    if (!(0, y.isAbsolute)(e2.userHomeDirectory)) throw new He(i2, e2.userHomeDirectory);
    return await Ze(e2, { sourceDir: i2, destinationDir: (0, y.join)(Ve(e2.userHomeDirectory), ...r2.split("/")), relativePath: r2, sourceMissingReason: "nothing-to-move", confirmDurable: async () => {
    }, label: "Move skill out of store" }, t2);
  }
  const it = 4;
  async function rt(e2) {
    const t2 = [];
    return await nt(e2, e2, t2), t2;
  }
  async function nt(e2, t2, i2) {
    let r2;
    try {
      r2 = await (0, f.readdir)(t2, { withFileTypes: true });
    } catch (e3) {
      if ("ENOENT" === qe(e3)) return;
      throw e3;
    }
    r2.sort((e3, t3) => e3.name < t3.name ? -1 : e3.name > t3.name ? 1 : 0);
    for (const n2 of r2) {
      if (!n2.isDirectory() || n2.name.startsWith(".")) continue;
      const r3 = (0, y.join)(t2, n2.name), o2 = Ge(r3, e2);
      void 0 !== o2 && (await We((0, y.join)(r3, "SKILL.md")) ? i2.push(o2) : await nt(e2, r3, i2));
    }
  }
  async function ot(e2, t2, i2) {
    for (const e3 of [t2.sourceRoot, t2.destinationRoot]) if (!(0, y.isAbsolute)(e3)) throw new He(t2.sourceRoot, e3);
    const r2 = await rt(t2.sourceRoot), n2 = r2.length, o2 = [], s2 = [];
    return await (0, $e.up)(r2, async (r3) => {
      if (true === i2.isCancelled?.()) return;
      const a2 = await (async function(e3, t3, i3) {
        const r4 = i3.split("/"), n3 = (0, y.join)(t3.destinationRoot, ...r4);
        for (let i4 = 1; i4 < r4.length; i4++) {
          const n4 = (0, y.join)(t3.destinationRoot, ...r4.slice(0, i4));
          if (await We((0, y.join)(n4, "SKILL.md"))) return e3.logWarning(`${t3.label}: destination path is inside an existing skill`, { code: "destination-exists" }), { status: "failed", reason: "destination-exists" };
        }
        const o3 = await We((0, y.join)(n3, "SKILL.md")), s3 = (0, y.join)(t3.sourceRoot, ...r4);
        try {
          const r5 = await Be(e3, { sourceDir: s3, destinationDir: n3, relativePath: i3, sourceMissingReason: t3.sourceMissingReason, confirmDurable: t3.confirmDurable, label: t3.label }, { sourceSkillFilePath: (0, y.join)(s3, "SKILL.md"), clearExistingDestination: o3 ? Ye({ deps: e3, destinationDir: n3, label: t3.label }) : void 0 });
          return r5.confirmed ? { status: "copied" } : { status: "failed", reason: r5.reason };
        } catch (i4) {
          return e3.logWarning(`${t3.label}: copy threw`, { code: qe(i4) }), { status: "failed", reason: "copy-failed" };
        }
      })(e2, t2, r3);
      switch (a2.status) {
        case "copied":
          o2.push(r3);
          break;
        case "failed":
          s2.push({ relativePath: r3, reason: a2.reason });
      }
      i2.onProgress?.({ total: n2, done: o2.length });
    }, { max: it }), { complete: o2.length === n2, copied: o2, failed: s2 };
  }
  async function st(e2, t2) {
    for (const e3 of [t2.sourceRoot, t2.destinationRoot]) if (!(0, y.isAbsolute)(e3)) throw new He(t2.sourceRoot, e3);
    const i2 = t2.relativePaths.map((e3) => {
      const i3 = e3.split("/"), r3 = (0, y.join)(t2.sourceRoot, ...i3);
      if (void 0 === Ge(r3, t2.sourceRoot)) throw new He(r3, t2.sourceRoot);
      return i3;
    }), r2 = await (0, $e.up)(i2, async (i3) => await Xe(e2, { sourceDir: (0, y.join)(t2.sourceRoot, ...i3), destinationDir: (0, y.join)(t2.destinationRoot, ...i3), sourceMissingReason: t2.sourceMissingReason, label: t2.label }, (0, y.join)(t2.sourceRoot, ...i3, "SKILL.md")), { max: it }), n2 = [];
    let o2 = 0;
    for (const e3 of r2) {
      const t3 = "fulfilled" === e3.status ? e3.value.filesMove : void 0;
      void 0 !== t3 ? n2.push(t3) : o2++;
    }
    return { moves: n2, failedCount: o2 };
  }
  const at = "cursor.skillStore.copySkillsToStore", lt = "cursor.skillStore.copySkillsFromStore", ct = "cursor.skillStore.confirmStoreSkillsSynced", ut = "cursor.skillStore.trashMigratedHomeSkills", dt = "cursor.skillStore.trashMigratedStoreSkills", pt = "cursor.skillStore.reportMigrationProgress", gt = "cursor.skillStore.isMigrationCancelled", mt = Object.freeze({ complete: false, doneCount: 0, total: 0, failed: Object.freeze([Object.freeze({ reason: "store-unavailable" })]) }), ft = "Move skill to store", ht = "Move skill out of store";
  function yt() {
    const [e2] = Oe.dw.targetDirs();
    return e2;
  }
  function wt() {
    const e2 = yt();
    if (void 0 !== e2) return { deleteDirectoryToTrash: _e, requestScopedSync: Oe.C, saveDirtyDocumentsUnder: ve, confirmStoreOverwrite: async () => false, userHomeDirectory: (0, h.homedir)(), agentStoreSkillsDir: e2, logWarning: (e3, t2) => {
      G.warn((0, r.q6)(), e3, { code: t2.code });
    } };
  }
  let vt;
  async function kt(e2) {
    const t2 = vt;
    if (void 0 !== t2) return await t2;
    const i2 = (async function(e3) {
      const t3 = wt();
      if (void 0 === t3) return mt;
      const i3 = e3(t3);
      let r2 = false;
      const o2 = () => {
        (async () => {
          try {
            r2 = true === await n.commands.executeCommand(gt);
          } catch {
          }
        })();
      };
      o2();
      let s2 = 0;
      const a2 = await ot(t3, i3, { isCancelled: () => r2, onProgress: (e4) => {
        s2 = e4.total, o2(), n.commands.executeCommand(pt, { done: e4.done, total: e4.total }).then(void 0, () => {
        });
      } }), l2 = a2.copied.length;
      if (!a2.complete) return { complete: false, doneCount: l2, total: Math.max(s2, l2 + a2.failed.length), failed: a2.failed.map((e4) => ({ reason: e4.reason })) };
      return { complete: true, doneCount: l2, total: Math.max(s2, l2), migratedRelativePaths: [...a2.copied].sort() };
    })(e2);
    vt = i2;
    try {
      return await i2;
    } finally {
      vt === i2 && (vt = void 0);
    }
  }
  function St(e2) {
    return { sourceRoot: Ve(e2.userHomeDirectory), destinationRoot: e2.agentStoreSkillsDir, confirmDurable: async (t2) => "synced-path" === await e2.requestScopedSync(t2) ? void 0 : "not-synced", sourceMissingReason: "source-missing", label: ft };
  }
  function Pt(e2) {
    return { sourceRoot: e2.agentStoreSkillsDir, destinationRoot: Ve(e2.userHomeDirectory), confirmDurable: async () => {
    }, sourceMissingReason: "nothing-to-move", label: ht };
  }
  function bt(e2, t2) {
    if (void 0 === t2 || !Array.isArray(t2.relativePaths) || t2.relativePaths.some((e3) => "string" != typeof e3 || "" === e3.trim())) throw new Error(`${e2} requires relativePaths, a list of non-empty strings`);
  }
  function Dt(e2) {
    e2.subscriptions.push(n.commands.registerCommand(at, async () => await kt(St)), n.commands.registerCommand(lt, async () => await kt(Pt)), n.commands.registerCommand(ct, async () => await (async function() {
      const e3 = yt();
      if (void 0 === e3) return { confirmed: false, reason: "store-unavailable" };
      const t2 = await Ke(e3), i2 = await (0, Oe.C)(t2);
      return "synced-path" === i2 || 0 === t2.length && "synced" === i2 ? { confirmed: true } : { confirmed: false, reason: i2 };
    })()), n.commands.registerCommand(ut, async (e3) => (bt("trashMigratedHomeSkills", e3), await (async function(e4) {
      const t2 = wt();
      return void 0 === t2 ? { moves: [], failedCount: e4.relativePaths.length } : await st(t2, { sourceRoot: Ve(t2.userHomeDirectory), destinationRoot: t2.agentStoreSkillsDir, relativePaths: e4.relativePaths, sourceMissingReason: "source-missing", label: ft });
    })(e3))), n.commands.registerCommand(dt, async (e3) => (bt("trashMigratedStoreSkills", e3), await (async function(e4) {
      const t2 = wt();
      return void 0 === t2 ? { moves: [], failedCount: e4.relativePaths.length } : await st(t2, { sourceRoot: t2.agentStoreSkillsDir, destinationRoot: Ve(t2.userHomeDirectory), relativePaths: e4.relativePaths, sourceMissingReason: "nothing-to-move", label: ht });
    })(e3))));
  }
  const Ct = "cursor.skillStore.moveSkillToStore", It = "cursor.skillStore.moveSkillOutOfStore", Tt = "cursor.skillStore.confirmOverwrite", Et = { confirmed: false, deleted: false, storeUnavailable: true };
  function xt(e2) {
    const [t2] = Oe.dw.get();
    if (void 0 !== t2) return { deleteDirectoryToTrash: _e, requestScopedSync: Oe.C, saveDirtyDocumentsUnder: ve, confirmStoreOverwrite: async (t3) => await (async function(e3, t4) {
      try {
        return true === await n.commands.executeCommand(Tt, { kind: e3, collision: t4 });
      } catch (e4) {
        return G.warn((0, r.q6)(), "Skill store move: overwrite prompt failed", { error: String(e4) }), false;
      }
    })(e2, t3), userHomeDirectory: (0, h.homedir)(), agentStoreSkillsDir: t2, logWarning: (e3, t3) => {
      G.warn((0, r.q6)(), e3, { code: t3.code });
    } };
  }
  async function Rt(e2, t2) {
    const i2 = xt(e2);
    if (void 0 === i2) return Et;
    const r2 = "moveToStore" === e2 ? et : tt;
    try {
      return await r2(i2, { skillFilePath: t2.skillFilePath });
    } catch (e3) {
      if (e3 instanceof He) return { confirmed: false, deleted: false, guardViolation: true };
      throw e3;
    }
  }
  function Nt(e2, t2) {
    if (void 0 === t2 || "string" != typeof t2.skillFilePath || "" === t2.skillFilePath.trim()) throw new Error(`${e2} requires a non-empty skillFilePath`);
  }
  function jt(e2) {
    e2.subscriptions.push(n.commands.registerCommand(Ct, async (e3) => (Nt("moveSkillToStore", e3), await Rt("moveToStore", e3))), n.commands.registerCommand(It, async (e3) => (Nt("moveSkillOutOfStore", e3), await Rt("moveOutOfStore", e3))));
  }
  async function _t(e2, t2) {
    let i2;
    try {
      i2 = await be(e2.pluginsService, t2.pluginId);
    } catch (e3) {
      return Ft(`Could not read the installed plugins: ${Mt(e3)}`, t2);
    }
    if (void 0 === i2) return Ft("The published plugin is not installed locally, so its skill files cannot be restored.", t2);
    const r2 = (function(e3) {
      const t3 = e3.skills.map((e4) => (0, y.dirname)(e4.path)).filter((e4) => "" !== e4 && "." !== e4 && ".." !== e4).map((t4) => (0, y.join)(e3.installPath, t4));
      return [...new Set(t3)];
    })(i2);
    if (0 === r2.length) return Ft("The published plugin has no skill folder to restore.", t2);
    const n2 = (0, y.join)(i2.installPath, "skills"), o2 = (0, y.join)(e2.userHomeDirectory, ".cursor", "skills");
    try {
      return { restored: true, skillPaths: await (0, L.V3H)({ skillDirs: r2, pluginSkillsRoot: n2, skillsRoot: o2 }), filesMove: { previousDir: n2, nextDir: o2 } };
    } catch (e3) {
      return Ft(Mt(e3), t2);
    }
  }
  function Ft(e2, t2) {
    return G.warn((0, r.q6)(), "Unpublish skill: restore failed", { pluginId: t2.pluginId, error: e2 }), { restored: false, skillPaths: [], error: e2 };
  }
  function At(e2, t2) {
    return G.warn((0, r.q6)(), "Unpublish skill: cache removal skipped", { pluginId: t2.pluginId, error: e2 }), { removed: false };
  }
  function Mt(e2) {
    return e2 instanceof Error ? e2.message : String(e2);
  }
  const Lt = "cursor.unpublishSkill.restoreLocalSkill", Ut = "cursor.unpublishSkill.removePluginCache";
  function Ot(e2) {
    const t2 = e2;
    if (void 0 === t2 || "string" != typeof t2.pluginId || "" === t2.pluginId.trim()) throw new Error("unpublishSkill commands require a non-empty pluginId");
    return { pluginId: t2.pluginId };
  }
  function $t(e2, t2) {
    e2.subscriptions.push(n.commands.registerCommand(Lt, async (e3) => {
      const i2 = Ot(e3);
      let r2;
      try {
        r2 = await t2;
      } catch {
        return { restored: false, skillPaths: [], error: "The plugin subsystem is unavailable, so the skill files cannot be restored." };
      }
      return _t(r2, i2);
    }), n.commands.registerCommand(Ut, async (e3) => {
      const i2 = Ot(e3);
      let r2;
      try {
        r2 = await t2;
      } catch {
        return { removed: false };
      }
      return (async function(e4, t3) {
        let i3;
        try {
          const r4 = await be(e4.pluginsService, t3.pluginId);
          i3 = void 0 === r4 ? void 0 : Pe(r4);
        } catch (e5) {
          return At(Mt(e5), t3);
        }
        const r3 = i3?.marketplace;
        if (void 0 === i3 || void 0 === r3) return At("plugin is no longer loaded from a marketplace", t3);
        try {
          return await e4.cacheManager.removeAllVersions({ marketplaceSlug: r3, pluginId: i3.name }), await e4.pluginsService.reload(), { removed: true };
        } catch (e5) {
          return At(Mt(e5), t3);
        }
      })(r2, i2);
    }));
  }
}, 89350: (e, t, i) => {
  i.d(t, { w: () => o });
  var r = i(11762);
  function n(e2, t2, i2) {
    e2.appendLine?.(`${t2}: ${String(i2)}`);
  }
  async function o(e2) {
    const t2 = async () => {
      if (void 0 !== e2.extensionPath && 0 !== e2.extensionPath.length) try {
        await e2.ensureCanvasSdkMirror({ extensionPath: e2.extensionPath });
      } catch (t3) {
        if ((0, r.t6)(t3)) return;
        n(e2, "Canvas SDK mirror failed", t3);
      }
    };
    try {
      if (!e2.getAuthToken()) return void await t2();
      const i2 = await e2.getManagedSkills();
      await e2.syncBuiltinSkills(e2.ctx, { managedSkills: i2.skills ?? [] }), await t2();
    } catch (i2) {
      n(e2, "Failed to sync builtin skills", i2), await t2();
    }
  }
} };
