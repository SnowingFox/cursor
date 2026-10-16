"use strict";
exports.id = 77, exports.ids = [77, 859], exports.modules = { 60077: (e, r, t) => {
  t.d(r, { createIdeDiskExtensibility: () => D });
  var s = t(70857), o = t(75088), n = t(33002), i = t(98875), a = t(91105), c = t(91398), l = t(34102), u = t(89350), d = t(11762);
  function p(e2, r2) {
    const t2 = e2.split(/\r?\n/).find((e3) => new RegExp(`^\\s*${r2}\\s*:`).test(e3)), s2 = t2?.replace(new RegExp(`^\\s*${r2}\\s*:\\s*`), "");
    if (!s2) return;
    const o2 = (function(e3) {
      let r3;
      for (let t3 = 0; t3 < e3.length; t3++) {
        const s3 = e3[t3];
        if ('"' !== s3 && "'" !== s3 || 0 !== t3 && "\\" === e3[t3 - 1]) {
          if ("#" === s3 && void 0 === r3) return e3.slice(0, t3);
        } else r3 = r3 === s3 ? void 0 : r3 ?? s3;
      }
      return e3;
    })(s2).trim(), n2 = o2.match(/^(['"])(.*)\1$/);
    return n2 ? n2[2]?.trim() : o2;
  }
  function h(e2) {
    return e2.map((e3) => {
      if ("agentFetched" !== e3.type?.type.case || !e3.content) return e3;
      if ((function(e4) {
        const r3 = e4.match(/^\s*---\r?\n([\s\S]*?)\r?\n---/);
        if (!r3) return false;
        const t2 = r3[1] ?? "";
        return "true" === p(t2, "mode")?.toLowerCase() && ["icon", "color", "reminder"].every((e5) => {
          const r4 = p(t2, e5);
          return void 0 !== r4 && r4.length > 0;
        });
      })(e3.content)) return e3;
      const r2 = e3.clone();
      return r2.content = "", r2;
    });
  }
  var g = t(89859), f = (e2, r2) => (r2 = Symbol[e2]) ? r2 : /* @__PURE__ */ Symbol.for("Symbol." + e2), v = (e2) => {
    throw TypeError(e2);
  }, y = (e2, r2, t2) => {
    var s2, o2;
    null != r2 ? ("object" != typeof r2 && "function" != typeof r2 && v("Object expected"), t2 && (s2 = r2[f("asyncDispose")]), void 0 === s2 && (s2 = r2[f("dispose")], t2 && (o2 = s2)), "function" != typeof s2 && v("Object not disposable"), o2 && (s2 = function() {
      try {
        o2.call(this);
      } catch (e3) {
        return Promise.reject(e3);
      }
    }), e2.push([t2, s2, r2])) : t2 && e2.push([t2]);
    return r2;
  }, S = (e2, r2, t2) => {
    var s2 = "function" == typeof SuppressedError ? SuppressedError : function(e3, r3, t3, s3) {
      return (s3 = Error(t3)).name = "SuppressedError", s3.error = e3, s3.suppressed = r3, s3;
    }, o2 = (e3) => r2 = t2 ? new s2(e3, r2, "An error was suppressed during disposal") : (t2 = true, e3), n2 = (s3) => {
      for (; s3 = e2.pop(); ) try {
        var i2 = s3[1] && s3[1].call(s3[2]);
        if (s3[0]) return Promise.resolve(i2).then(n2, (e3) => (o2(e3), n2()));
      } catch (e3) {
        o2(e3);
      }
      if (t2) throw r2;
    };
    return n2();
  };
  const m = "cursor_rules_batch_update", w = 4e3, b = "cursorAgentExec.waitForInitialRulesReadyForTesting";
  function k(e2) {
    const r2 = [], t2 = (function(e3) {
      return e3.pushRequestContextEnabled && "rootWorkspace" === e3.glassWorkspaceRole && 0 === e3.workspacePathCount;
    })({ pushRequestContextEnabled: e2.pushRequestContextEnabled, glassWorkspaceRole: c.cursor.glassWorkspaceRole, workspacePathCount: e2.workspacePaths.length });
    let s2, o2 = Promise.resolve();
    const a2 = (e3, r3 = false) => {
      const n2 = o2.then(async () => {
        const o3 = h(((e4) => {
          if (!t2) return e4;
          const r4 = (0, g.H)();
          return e4.some((e5) => e5.fullPath === r4.fullPath) ? e4 : [r4, ...e4];
        })(e3));
        if (!r3 && void 0 !== s2 && (i2 = o3, (n3 = s2).length === i2.length && n3.every((e4, r4) => e4.equals(i2[r4])))) return;
        var n3, i2;
        s2 = void 0;
        await Promise.resolve(c.cursor.checkFeatureGate(m)).catch(() => false) ? await c.cursor.updateCursorRulesInBatches(o3) : await c.cursor.updateCursorRules(o3), s2 = o3;
      });
      return o2 = n2.catch(() => {
      }), n2;
    }, l2 = (0, n.q6)(), u2 = e2.cursorRulesService.getAllCursorRules(l2).then(async (r3) => {
      e2.appendLine("cursorRulesService.getAllCursorRules"), await a2(r3);
    });
    let d2;
    u2.catch((r3) => {
      e2.appendLine(`Failed to load or push initial cursor rules: ${String(r3)}`);
    }), r2.push(c.commands.registerCommand(b, async () => {
      await u2;
    }));
    const p2 = e2.cursorRulesService.onDidChangeRules(() => {
      void 0 !== d2 && clearTimeout(d2), d2 = setTimeout(() => {
        d2 = void 0, (async () => {
          const r3 = await e2.cursorRulesService.getAllCursorRules(l2);
          await a2(r3);
        })().catch((r3) => {
          e2.appendLine(`cursorRulesService.onDidChangeRules failed: ${String(r3)}`);
        });
      }, w);
    });
    return r2.push({ dispose: p2 }), r2.push({ dispose: () => {
      void 0 !== d2 && clearTimeout(d2);
    } }), r2.push(c.cursor.registerCursorRulesProvider({ reloadRules: async () => {
      var r3 = [];
      try {
        const t4 = (0, n.q6)(), s4 = y(r3, (0, i.VI)(t4.withName("cursorRulesProvider.reloadRules")));
        e2.cursorRulesService.reload(s4.ctx);
        const o3 = await e2.cursorRulesService.getAllCursorRules(s4.ctx);
        void 0 !== d2 && (clearTimeout(d2), d2 = void 0), await a2(o3, true);
      } catch (e3) {
        var t3 = e3, s3 = true;
      } finally {
        S(r3, t3, s3);
      }
    } })), r2.push(c.cursor.registerSubagentsProvider({ getAllSubagents: async () => e2.subagentsService.getAllSubagents(), reload: async () => {
      await e2.subagentsService.reload();
    }, reloadAndGetAllSubagents: async () => await e2.subagentsService.reload() })), c.Disposable.from(...r2);
  }
  class P {
    async getCodebaseReference(e2, r2) {
      const [t2, s2] = await Promise.all([c.cursor.getRepoInfo(), c.cursor.getPathEncryptionKey()]);
      if (t2 && s2) return { relativeWorkspacePath: t2.relativeWorkspacePath, repoName: t2.repoName, repoOwner: t2.repoOwner, isTracked: false, isLocal: true, numFiles: 0, orthogonalTransformSeed: t2.orthogonalTransformSeed ?? 0, pathEncryptionKey: s2 };
    }
  }
  var R = (e2, r2) => (r2 = Symbol[e2]) ? r2 : /* @__PURE__ */ Symbol.for("Symbol." + e2), x = (e2) => {
    throw TypeError(e2);
  }, C = (e2, r2, t2) => {
    var s2, o2;
    null != r2 ? ("object" != typeof r2 && "function" != typeof r2 && x("Object expected"), t2 && (s2 = r2[R("asyncDispose")]), void 0 === s2 && (s2 = r2[R("dispose")], t2 && (o2 = s2)), "function" != typeof s2 && x("Object not disposable"), o2 && (s2 = function() {
      try {
        o2.call(this);
      } catch (e3) {
        return Promise.reject(e3);
      }
    }), e2.push([t2, s2, r2])) : t2 && e2.push([t2]);
    return r2;
  }, E = (e2, r2, t2) => {
    var s2 = "function" == typeof SuppressedError ? SuppressedError : function(e3, r3, t3, s3) {
      return (s3 = Error(t3)).name = "SuppressedError", s3.error = e3, s3.suppressed = r3, s3;
    }, o2 = (e3) => r2 = t2 ? new s2(e3, r2, "An error was suppressed during disposal") : (t2 = true, e3), n2 = (s3) => {
      for (; s3 = e2.pop(); ) try {
        var i2 = s3[1] && s3[1].call(s3[2]);
        if (s3[0]) return Promise.resolve(i2).then(n2, (e3) => (o2(e3), n2()));
      } catch (e3) {
        o2(e3);
      }
      if (t2) throw r2;
    };
    return n2();
  };
  const j = "rules_discovery_respect_cursorignore", _ = "subagents_discovery_allow_external_symlinks", A = "skill_catalog_ide_cache";
  async function D(e2) {
    const [r2, t2, p2, h2] = await Promise.all([Promise.resolve(c.cursor.checkFeatureGate(j)).catch(() => false), Promise.resolve(c.cursor.checkFeatureGate(_)).catch(() => false), Promise.resolve(c.cursor.getPushRequestContextEnabled()).catch(() => false), Promise.resolve(c.cursor.checkFeatureGate(A)).catch(() => false)]);
    (0, a.ba_)(true === r2);
    const g2 = (function(e3, r3) {
      const t3 = (0, n.q6)();
      return (0, u.w)({ ctx: t3, extensionPath: r3, getAuthToken: () => c.cursor.getCursorAuthToken(), getManagedSkills: () => Promise.resolve(c.cursor.getManagedSkills()), syncBuiltinSkills: a.Rhp, ensureCanvasSdkMirror: d.I_, appendLine: e3 }).catch((r4) => {
        e3(`Failed to sync Cursor-managed skills: ${String(r4)}`);
      });
    })(e2.appendLine, e2.extensionPath), f2 = { subscribe: (e3, r3, t3) => {
      const s2 = [], o2 = (e4) => {
        "git" !== e4.scheme && t3(e4.fsPath);
      };
      for (const t4 of r3) {
        const r4 = new c.RelativePattern(e3, t4), n2 = c.workspace.createFileSystemWatcher(r4);
        n2.onDidCreate(o2), n2.onDidChange(o2), n2.onDidDelete(o2), s2.push(n2);
      }
      return () => {
        for (const e4 of s2) e4.dispose();
      };
    } }, v2 = e2.getAgentStoreSkillsContext ?? (() => a.$3f), y2 = (0, o.xD)({ workspacePaths: e2.workspacePaths, gitExecutor: e2.gitExecutor, sources: ["project", "user"], userHome: e2.userHome ?? s.homedir(), fileWatcher: f2, ignoreService: e2.ignoreService, getThirdPartyExtensibilityEnabled: () => c.cursor.getThirdPartyExtensibilityEnabled(), allowExternalSubagentSymlinks: true === t2, surface: "ide", initialBuiltinSkillsSyncPromise: g2, ripgrepPath: e2.ripgrepPath, getAgentStoreSkillsContext: v2, ...void 0 === e2.globalStoragePath || true !== h2 ? {} : { agentSkillsCatalogCache: (0, a.V2h)(e2.globalStoragePath) } }), S2 = void 0 === e2.pluginsService ? void 0 : (function(e3) {
      const r3 = () => ({ importThirdPartyPlugins: c.cursor.getThirdPartyExtensibilityEnabled() }), t3 = new a.Rxj((0, n.q6)(), r3, e3.fileWatcher, e3.pluginsService), s2 = new a._Ji(r3, e3.pluginsService);
      return { cursorRulesService: new a.Px0([e3.diskRules, t3], e3.getAgentStoreSkillsContext), subagentsService: new a.o_K([e3.diskSubagents, s2]), agentSkillsService: new a.NB([e3.diskSkills, t3], () => [], () => ({ ...e3.getAgentStoreSkillsContext(), workspacePaths: e3.workspacePaths })) };
    })({ diskRules: y2.cursorRulesService, diskSubagents: y2.subagentsService, diskSkills: y2.agentSkillsService, pluginsService: e2.pluginsService, fileWatcher: f2, workspacePaths: e2.workspacePaths, getAgentStoreSkillsContext: v2 }), m2 = S2?.cursorRulesService ?? y2.cursorRulesService, w2 = S2?.subagentsService ?? y2.subagentsService, b2 = S2?.agentSkillsService ?? y2.agentSkillsService, R2 = k({ cursorRulesService: m2, subagentsService: w2, workspacePaths: e2.workspacePaths, appendLine: e2.appendLine, pushRequestContextEnabled: true === p2 }), x2 = (0, l.Ps)({ agentSkillsService: b2, appendLine: e2.appendLine }), D2 = new P(), T = c.cursor.onDidChangeThirdPartyExtensibilityEnabled(() => {
      var e3 = [];
      try {
        const r4 = (0, n.q6)(), t4 = C(e3, (0, i.VI)(r4.withName("thirdPartyExtensibilityEnabledChanged")));
        m2.reload(t4.ctx), w2.reload();
      } catch (e4) {
        var r3 = e4, t3 = true;
      } finally {
        E(e3, r3, t3);
      }
    });
    let q = void 0 === e2.whenProviderRegistered;
    e2.whenProviderRegistered?.then(() => {
      q = true;
    });
    const W = e2.onDidChangeAgentStoreSkillRoots?.(() => {
      q ? y2.reloadSkillRoots() : e2.whenProviderRegistered?.then(() => {
        y2.reloadSkillRoots();
      });
    });
    return { cursorRulesService: m2, subagentsService: w2, codebaseReferenceProvider: D2, getAgentSkills: (e3) => b2.getAllAgentSkills(e3), dispose() {
      W?.(), T.dispose(), x2.dispose(), R2.dispose(), void 0 !== S2 ? S2.cursorRulesService.dispose() : y2.dispose();
    } };
  }
}, 89859: (e, r, t) => {
  t.d(r, { H: () => n, glassRootAdditionalRules: () => i });
  var s = t(43955);
  const o = "You are in the user's home directory—the starting point, not a project workspace. Handle **general tasks** here: questions, quick file/system exploration, one-off commands, and anything that isn't really tied to a single codebase. Use your judgment.\n\nWhen the work belongs in a **project workspace**, infer or confirm the folder (recent paths, ~/Projects/, ~/Developer/, ~/repos/, and what the user said). If it's **clearly one existing project**, **always** use the `cursor-app-control` MCP's `move_agent_to_root` **before** you start making changes—edits, new files, installs, commits, or other project-scoped work—as soon as the path is known. Do that work only **after** the move; don't begin from home and relocate later. Working inside the project beats staying on home. If **which project or path is unclear**, use the ask question tool first. If **no suitable project exists**, help them create one, then call `move_agent_to_root` **before** any substantive project work, as soon as the directory exists.\n\n## Questions About Cursor\n\nWhen users ask how to use Cursor, configure settings, or have questions about Cursor features, use the cursor-guide skill to provide accurate, up-to-date answers.\n\n## Creating New Projects\n\nWhen a user wants to build something, help them get set up in a new project:\n\n1. Use the ask question tool to confirm the project name. Suggest a sensible default based on what they described. Include a brief \"any preferences for setup?\" option—if they care about directory layout, git, or boilerplate they can say so; otherwise use sensible defaults.\n2. Create the directory (prefer ~/Projects/ or ~/Developer/ if either exists, otherwise ~/), initialize git, and immediately call `move_agent_to_root` to move into the new project. Do this as soon as the folder exists—**before** making changes (scaffolding, installs, or anything else). Do not start project work from home and move afterward. Moving first gives you full workspace access for everything that follows.\n3. Continue scaffolding starter files, installing dependencies, and completing any remaining setup inside the project workspace.\n\nKeep setup frictionless by default—handle git, structure, and boilerplate without forcing decisions on things they may not care about. If they state preferences, respect them and go as deep as they want.";
  function n() {
    return new s.DX({ fullPath: "Home workspace guidance", content: o, type: new s.f5({ type: { case: "global", value: new s.i9() } }), source: s.gv.TEAM });
  }
  function i(e2) {
    return true === e2 ? [n()] : [];
  }
} };
