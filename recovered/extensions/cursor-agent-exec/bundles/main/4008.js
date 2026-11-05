// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 4008 range:34282..401569
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4008: (e, t, r) => {
    "use strict";
    r.d(t, { WCg: () => Mi, DDg: () => zu, KYw: () => Bi, QOY: () => Ld, YUn: () => $d, kdU: () => gd, NwZ: () => mc, kxb: () => rd, e1t: () => pd, JJ1: () => zd, ICo: () => Yu, xJd: () => h, s4m: () => d, R3Q: () => m, iUy: () => f, dBY: () => p, QY1: () => Ad, r6M: () => we.r, z4A: () => xa, wpN: () => Ku, FY4: () => Hu, Y__: () => Lu, NzK: () => s, UDB: () => ee, Jwk: () => yd, U27: () => dd, nSO: () => Ru, kXx: () => Kd, Lsv: () => Wd, _fm: () => Wu, gFi: () => Qa, V3H: () => Vd, ALO: () => Xd, Iqv: () => Be, DuR: () => Sd, Vwy: () => vd, AkQ: () => wd });
    var n = r(81958);
    const s = { log: () => {
    }, increment: () => {
    }, distribution: () => {
    }, captureException: () => {
    } }, o = n.Ik({ command: n.Yj().optional(), args: n.YO(n.Yj()).optional(), env: n.g1(n.Yj(), n.Yj()).optional(), url: n.Yj().optional(), headers: n.g1(n.Yj(), n.Yj()).optional(), cwd: n.Yj().optional(), envFile: n.Yj().optional(), auth: n.Ik({ CLIENT_ID: n.Yj(), CLIENT_SECRET: n.Yj().optional(), scopes: n.YO(n.Yj()).optional() }).optional(), enabledTools: n.YO(n.Yj()).optional(), placement: n.k5(["server", "client"]).optional(), tls: n.Ik({ caBundle: n.Yj().trim().min(1).max(131072) }).optional() }), i = n.Ik({ mcpServers: n.g1(n.Yj(), o).optional() }), a = n.k5(["canvas"]), c = n.YO(a).transform((e2) => [...new Set(e2)].sort());
    class l extends Error {
      constructor(e2, t2) {
        super(`Invalid Claude Code plugin identifier "${t2}": ${e2}`), this.raw = t2, this.name = "CCPluginIdentifierError";
      }
    }
    function u(e2) {
      const t2 = e2.trim();
      if (!t2) throw new l("Empty identifier", e2);
      const r2 = /^[a-zA-Z0-9_-]+$/, n2 = t2.indexOf("@");
      if (n2 !== t2.lastIndexOf("@")) throw new l("Plugin identifier cannot contain multiple @ symbols", e2);
      if (-1 === n2) {
        if (!r2.test(t2)) throw new l("Plugin name must contain only alphanumeric characters, dashes, and underscores", e2);
        if (t2.length > 100) throw new l("Plugin name must be 100 characters or less", e2);
        return { name: t2, sourceType: "marketplace", marketplace: "claude-plugins-official", raw: e2 };
      }
      const s2 = t2.slice(0, n2).trim(), o2 = t2.slice(n2 + 1).trim();
      if (!s2) throw new l("Missing plugin name before @", e2);
      if (!o2) throw new l("Missing source after @", e2);
      if (!r2.test(s2)) throw new l("Plugin name must contain only alphanumeric characters, dashes, and underscores", e2);
      if (s2.length > 100) throw new l("Plugin name must be 100 characters or less", e2);
      if (o2.startsWith("github:")) {
        const t3 = o2.slice(7).trim();
        if (!t3 || !/^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/.test(t3)) throw new l("Invalid GitHub repo format, expected 'org/repo' (e.g., 'anthropics/claude-plugins')", e2);
        return { name: s2, sourceType: "github", githubRepo: t3, raw: e2 };
      }
      if (o2.startsWith("local:")) {
        const t3 = o2.slice(6).trim();
        if (!t3) throw new l("Missing path after 'local:'", e2);
        return { name: s2, sourceType: "local", localPath: t3, raw: e2 };
      }
      if (o2.startsWith("url:")) {
        const t3 = o2.slice(4).trim();
        if (!t3) throw new l("Missing Git URL after 'url:'", e2);
        try {
          new URL(t3);
        } catch {
          throw new l("Invalid Git URL format", e2);
        }
        return { name: s2, sourceType: "url", gitUrl: t3, raw: e2 };
      }
      const i2 = o2.indexOf("#");
      let a2, c2;
      if (-1 !== i2 ? (a2 = o2.slice(0, i2).trim(), c2 = o2.slice(i2 + 1).trim()) : a2 = o2, !a2) throw new l("Missing marketplace name", e2);
      if (!r2.test(a2)) throw new l("Marketplace name must contain only alphanumeric characters, dashes, and underscores", e2);
      return { name: s2, sourceType: "marketplace", marketplace: a2, version: c2, raw: e2 };
    }
    function d(e2) {
      if ("claude-plugin" === e2.source) return e2.sourceInfo.raw;
      if ("user-local" === e2.source) {
        return `user-local:${e2.sourceInfo.name}`;
      }
      if ("extension" === e2.source) {
        const t3 = e2.sourceInfo;
        return `extension:${t3.extensionId}:${t3.localPath}`;
      }
      const t2 = e2.sourceInfo;
      return `${t2.name}-${t2.version}`;
    }
    function p(e2) {
      return e2.sourceInfo.name;
    }
    function m(e2) {
      switch (e2.source) {
        case "claude-plugin":
        case "cursor-first-party":
        case "cursor-third-party":
          return e2.sourceInfo.marketplace;
        case "user-local":
        case "extension":
          return;
        default:
          return;
      }
    }
    function h(e2) {
      switch (e2.source) {
        case "cursor-first-party":
        case "cursor-third-party":
          return e2.sourceInfo.pluginDbId;
        case "claude-plugin":
        case "user-local":
        case "extension":
          return;
        default:
          return;
      }
    }
    function f(e2) {
      switch (e2.source) {
        case "cursor-first-party":
        case "cursor-third-party":
          return e2.sourceInfo.marketplaceDbId;
        case "claude-plugin":
        case "user-local":
        case "extension":
          return;
        default:
          return;
      }
    }
    const g = /* @__PURE__ */ new Set(["CREDENTIAL", "CREDENTIALS", "KEY", "PASSPHRASE", "PASSWORD", "SECRET", "TOKEN"]);
    function y(e2) {
      return (function(e3) {
        return e3.replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/[^a-z\d]+/gi, "_").toUpperCase().split("_").filter((e4) => e4.length > 0);
      })(e2).some((e3) => g.has(e3));
    }
    const w = /\$\{(?:env:([A-Z][A-Z0-9_]*)|([A-Z][A-Z0-9_]*)(?::-([^}]*))?)\}/g, v = /* @__PURE__ */ new Set(["CURSOR_PLUGIN_ROOT", "CLAUDE_PLUGIN_ROOT"]), _ = /* @__PURE__ */ new Set(["api", "aws", "db", "dd", "gcp", "http", "https", "id", "mcp", "ssl", "tls", "uri", "url"]);
    function b(e2) {
      return e2.split("_").filter((e3) => e3.length > 0).map((e3) => {
        const t2 = e3.toLowerCase();
        return _.has(t2) ? e3.toUpperCase() : e3.charAt(0).toUpperCase() + t2.slice(1);
      }).join(" ");
    }
    function S(e2, t2) {
      if ("string" != typeof e2) {
        if (Array.isArray(e2)) for (const r2 of e2) S(r2, t2);
        else if (null !== e2 && "object" == typeof e2) for (const r2 of Object.values(e2)) S(r2, t2);
      } else for (const [, r2, n2, s2] of e2.matchAll(w)) {
        const e3 = r2 ?? n2;
        if (void 0 === e3 || v.has(e3) || t2.has(e3)) continue;
        const o2 = void 0 === r2 ? `\${${e3}}` : `\${env:${e3}}`;
        t2.set(e3, { reference: o2, defaultValue: s2 });
      }
    }
    function k(e2) {
      if (void 0 === e2?.mcpServers) return;
      const t2 = /* @__PURE__ */ new Map();
      if (S(e2.mcpServers, t2), 0 === t2.size) return;
      const r2 = {};
      for (const e3 of [...t2.keys()].sort()) {
        const { reference: n2, defaultValue: s2 } = t2.get(e3);
        r2[e3] = { type: "string", title: b(e3), description: void 0 === s2 || 0 === s2.length ? `Referenced as \`${n2}\` in this plugin's MCP configuration.` : `Referenced as \`${n2}\` in this plugin's MCP configuration. Defaults to \`${s2}\` when left blank.`, ...y(e3) ? { writeOnly: true } : {} };
      }
      return { type: "object", properties: r2 };
    }
    var x = r(97712), E = r(77598), I = r(76760), T = r(82590);
    const C = /* @__PURE__ */ new Set(["https://agent-plugins.org/schemas/1.0.0/plugin.schema.json", "https://agent-plugins.org/schemas/1.0.0/mcp.schema.json"]), P = /^v?(\d+\.\d+(?:\.\d+)?)$/;
    function A(e2) {
      if ("object" != typeof e2 || null === e2 || Array.isArray(e2)) return;
      const t2 = e2.$schema;
      return "string" == typeof t2 && t2.length > 0 ? t2 : void 0;
    }
    function R(e2) {
      let t2;
      try {
        t2 = new URL(e2).pathname.split("/");
      } catch {
        t2 = e2.split("/");
      }
      for (const e3 of t2) {
        const t3 = P.exec(e3);
        if (null !== t3) return t3[1];
      }
    }
    function M(e2) {
      return void 0 === e2 ? { kind: "absent" } : C.has(e2) ? { kind: "supported", id: e2, version: R(e2) ?? e2 } : { kind: "unsupported", id: e2 };
    }
    const J = 10485760, O = /^[a-z0-9]([a-z0-9.-]*[a-z0-9])?$/, B = [".cursor-plugin/plugin.json", ".claude-plugin/plugin.json", "plugin.json"], D = [".cursor-plugin", ".claude-plugin"], q = [".cursor-plugin/marketplace.json", ".claude-plugin/marketplace.json"], N = n.Ik({ source: n.eu("github"), repo: n.Yj().regex(/^[^/]+\/[^/]+$/, "Must be in owner/repo format"), ref: n.Yj().optional(), sha: n.Yj().length(40, "SHA must be 40 characters").regex(/^[a-f0-9]+$/, "SHA must be hexadecimal").optional() }), F = n.Ik({ source: n.eu("url"), url: n.Yj().url().endsWith(".git", "URL must end with .git"), ref: n.Yj().optional(), sha: n.Yj().length(40, "SHA must be 40 characters").regex(/^[a-f0-9]+$/, "SHA must be hexadecimal").optional() }), U = n.Ik({ source: n.eu("git-subdir"), url: n.Yj().url().endsWith(".git", "URL must end with .git"), path: n.Yj().min(1), ref: n.Yj().optional(), sha: n.Yj().length(40, "SHA must be 40 characters").regex(/^[a-f0-9]+$/, "SHA must be hexadecimal").optional() }), L = n.KC([n.Yj(), N, F, U]), $ = /^(\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?|never)$/, j = 'Must be a semver version (X.Y.Z) or "never"', G = n.Ik({ cursor: n.Yj().regex($, j).optional(), sand: n.Yj().regex($, j).optional() });
    const z = n.Ik({ name: n.Yj().min(1, "Author name is required"), email: n.Yj().email().optional() }), W = n.k5(["string", "number", "integer", "boolean", "object", "array", "null"]), H = n.KC([W, n.YO(W).nonempty().superRefine((e2, t2) => {
      new Set(e2).size !== e2.length && t2.addIssue({ code: T.eq.custom, message: "Schema type arrays must not contain duplicates" });
    })]);
    function K(e2, t2) {
      if (void 0 !== e2.required) if (void 0 === e2.properties) for (const r2 of e2.required) t2.addIssue({ code: T.eq.custom, message: `Required property "${r2}" must be declared in properties`, path: ["required"] });
      else for (const r2 of e2.required) r2 in e2.properties || t2.addIssue({ code: T.eq.custom, message: `Required property "${r2}" must be declared in properties`, path: ["required"] });
      void 0 !== e2.minLength && void 0 !== e2.maxLength && e2.minLength > e2.maxLength && t2.addIssue({ code: T.eq.custom, message: "minLength must be less than or equal to maxLength", path: ["minLength"] }), void 0 !== e2.minimum && void 0 !== e2.maximum && e2.minimum > e2.maximum && t2.addIssue({ code: T.eq.custom, message: "minimum must be less than or equal to maximum", path: ["minimum"] }), void 0 !== e2.exclusiveMinimum && void 0 !== e2.exclusiveMaximum && e2.exclusiveMinimum >= e2.exclusiveMaximum && t2.addIssue({ code: T.eq.custom, message: "exclusiveMinimum must be less than exclusiveMaximum", path: ["exclusiveMinimum"] }), void 0 !== e2.minItems && void 0 !== e2.maxItems && e2.minItems > e2.maxItems && t2.addIssue({ code: T.eq.custom, message: "minItems must be less than or equal to maxItems", path: ["minItems"] }), void 0 !== e2.minProperties && void 0 !== e2.maxProperties && e2.minProperties > e2.maxProperties && t2.addIssue({ code: T.eq.custom, message: "minProperties must be less than or equal to maxProperties", path: ["minProperties"] });
    }
    const V = n.RZ(() => n.Ik({ type: H.optional(), title: n.Yj().optional(), description: n.Yj().optional(), format: n.Yj().optional(), writeOnly: n.zM().optional(), default: n.L5().optional(), enum: n.YO(n.bz()).nonempty().optional(), const: n.L5().optional(), properties: n.g1(n.Yj(), V).optional(), required: n.YO(n.Yj()).optional(), additionalProperties: n.KC([n.zM(), V]).optional(), items: n.KC([V, n.YO(V)]).optional(), minLength: n.ai().int().nonnegative().optional(), maxLength: n.ai().int().nonnegative().optional(), minimum: n.ai().optional(), maximum: n.ai().optional(), exclusiveMinimum: n.ai().optional(), exclusiveMaximum: n.ai().optional(), multipleOf: n.ai().positive().optional(), minItems: n.ai().int().nonnegative().optional(), maxItems: n.ai().int().nonnegative().optional(), uniqueItems: n.zM().optional(), minProperties: n.ai().int().nonnegative().optional(), maxProperties: n.ai().int().nonnegative().optional() }).strict().superRefine(K));
    function Y(e2) {
      const t2 = V.superRefine((e3, t3) => {
        "object" !== e3.type && t3.addIssue({ code: T.eq.custom, message: 'Plugin variable schemas must declare type "object"', path: ["type"] });
      }).safeParse(e2);
      return t2.success ? { success: true, data: t2.data } : t2;
    }
    const Q = n.L5().superRefine((e2, t2) => {
      const r2 = Y(e2);
      if (!r2.success) for (const e3 of r2.error.issues) t2.addIssue(e3);
    }).transform((e2) => e2), X = (n.Ik({ name: n.Yj().min(1).transform((e2) => e2.toLowerCase()).refine((e2) => O.test(e2), "Name must be kebab-case (lowercase alphanumeric with hyphens and periods)"), displayName: n.Yj().optional(), source: L, description: n.Yj().optional(), version: n.Yj().optional(), author: z.optional(), publisher: n.Yj().min(1).optional(), homepage: n.Yj().url().optional(), repository: n.Yj().url().optional(), license: n.Yj().optional(), keywords: n.YO(n.Yj()).optional(), capabilities: c.optional(), logo: n.Yj().optional(), category: n.Yj().optional(), tags: n.YO(n.Yj()).optional(), minClientVersions: G.optional(), strict: n.zM().default(true), commands: n.KC([n.Yj(), n.YO(n.Yj())]).optional(), agents: n.KC([n.Yj(), n.YO(n.Yj())]).optional(), skills: n.KC([n.Yj(), n.YO(n.Yj())]).optional(), rules: n.KC([n.Yj(), n.YO(n.Yj())]).optional(), hooks: n.KC([n.Yj(), n.g1(n.L5())]).optional(), variables: Q.optional(), mcpServers: n.KC([n.Yj(), n.g1(n.L5()), n.YO(n.KC([n.Yj(), n.g1(n.L5())]))]).optional() }), n.Ik({ description: n.Yj().optional(), version: n.Yj().optional(), pluginRoot: n.Yj().optional() }), n.Ik({ name: n.Yj().min(1).regex(O, "Name must be kebab-case (lowercase alphanumeric with hyphens and periods)"), displayName: n.Yj().optional(), description: n.Yj().optional(), version: n.Yj().optional(), author: z.optional(), publisher: n.Yj().min(1).optional(), homepage: n.Yj().url().optional(), repository: n.Yj().url().optional(), license: n.Yj().optional(), logo: n.Yj().optional(), keywords: n.YO(n.Yj()).optional(), capabilities: c.optional(), minClientVersions: G.optional(), commands: n.KC([n.Yj(), n.YO(n.Yj())]).optional(), agents: n.KC([n.Yj(), n.YO(n.Yj())]).optional(), skills: n.KC([n.Yj(), n.YO(n.Yj())]).optional(), rules: n.KC([n.Yj(), n.YO(n.Yj())]).optional(), hooks: n.KC([n.Yj(), n.g1(n.L5())]).optional(), variables: Q.optional(), mcpServers: n.KC([n.Yj(), n.g1(n.L5()), n.YO(n.KC([n.Yj(), n.g1(n.L5())]))]).optional() }));
    function Z(e2) {
      return "object" == typeof e2 && null !== e2 && !Array.isArray(e2);
    }
    function ee(e2) {
      return e2.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]+/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
    }
    function te(e2, t2) {
      if (Z(e2) && "string" == typeof e2.name) {
        const t3 = ee(e2.name);
        if (t3.length > 0) return t3;
      }
      return (function(e3) {
        const t3 = void 0 !== e3.repoName ? ee(e3.repoName) : "";
        return t3.length > 0 ? t3 : `cursor-marketplace-${e3.fallbackId ?? (0, E.randomUUID)()}`;
      })(t2);
    }
    function re(e2) {
      if (Z(e2) && Z(e2.owner)) {
        const t2 = "string" == typeof e2.owner.name && e2.owner.name.trim().length > 0 ? e2.owner.name : "Unknown", r2 = "string" == typeof e2.owner.email && e2.owner.email.trim().length > 0 ? e2.owner.email : void 0;
        return { name: t2, ...void 0 !== r2 ? { email: r2 } : {} };
      }
      return { name: "Unknown" };
    }
    function ne(e2) {
      return "string" == typeof e2 ? e2 : void 0;
    }
    function se(e2) {
      if (!Array.isArray(e2)) return;
      const t2 = e2.filter((e3) => "string" == typeof e3);
      return t2.length > 0 ? t2 : void 0;
    }
    function oe(e2) {
      return "string" == typeof e2 ? e2 : se(e2);
    }
    function ie(e2) {
      if (!Z(e2) || !Z(e2.metadata)) return;
      const t2 = { description: ne(e2.metadata.description), version: ne(e2.metadata.version), pluginRoot: ne(e2.metadata.pluginRoot) };
      return void 0 !== t2.description || void 0 !== t2.version || void 0 !== t2.pluginRoot ? t2 : void 0;
    }
    function ae(e2) {
      if (!Z(e2)) return;
      const t2 = ne(e2.name);
      if (void 0 === t2 || 0 === t2.length) return;
      const r2 = ne(e2.email);
      return { name: t2, ...void 0 !== r2 ? { email: r2 } : {} };
    }
    function ce(e2) {
      if ("string" == typeof e2 || Z(e2)) return e2;
      if (Array.isArray(e2)) {
        const t2 = e2.filter((e3) => "string" == typeof e3 || Z(e3));
        return t2.length > 0 ? t2 : void 0;
      }
    }
    function le(e2) {
      if ("string" == typeof e2 || Z(e2)) return e2;
    }
    function ue(e2) {
      if (void 0 === e2) return;
      const t2 = Y(e2);
      return t2.success ? t2.data : void 0;
    }
    function de(e2, t2) {
      if (!Z(e2)) return { skippedEntry: { index: t2, error: `Plugin entry at index ${t2} is not an object` } };
      const r2 = "string" == typeof (n2 = e2.source) ? n2 : Z(n2) ? "github" === n2.source && "string" == typeof n2.repo && n2.repo.length > 0 ? { source: "github", repo: n2.repo, ref: ne(n2.ref), sha: ne(n2.sha) } : ("url" === n2.source || void 0 === n2.source) && "string" == typeof n2.url && n2.url.length > 0 ? { source: "url", url: n2.url, ref: ne(n2.ref), sha: ne(n2.sha) } : "git-subdir" === n2.source && "string" == typeof n2.url && n2.url.length > 0 && "string" == typeof n2.path && n2.path.length > 0 ? { source: "git-subdir", url: n2.url, path: n2.path, ref: ne(n2.ref), sha: ne(n2.sha) } : "string" == typeof n2.repo && n2.repo.length > 0 ? { source: "github", repo: n2.repo, ref: ne(n2.ref), sha: ne(n2.sha) } : void 0 : void 0;
      var n2;
      if (void 0 === r2) {
        const r3 = ne(e2.name);
        return { skippedEntry: { index: t2, ...void 0 !== r3 && r3.length > 0 ? { name: r3 } : {}, error: `Plugin entry at index ${t2} has no usable source` } };
      }
      const s2 = ("string" == typeof e2.name ? ee(e2.name) : "") || (function(e3) {
        if ("string" == typeof e3) {
          const t4 = ee((0, I.basename)(e3));
          return t4.length > 0 ? t4 : void 0;
        }
        if ("github" === e3.source) {
          const t4 = ee(e3.repo.split("/").at(-1) ?? "");
          return t4.length > 0 ? t4 : void 0;
        }
        if ("git-subdir" === e3.source) {
          const t4 = ee((0, I.basename)(e3.path));
          return t4.length > 0 ? t4 : void 0;
        }
        let t3 = e3.url;
        try {
          t3 = new URL(e3.url).pathname;
        } catch {
        }
        for (; t3.endsWith("/"); ) t3 = t3.slice(0, -1);
        t3.toLowerCase().endsWith(".git") && (t3 = t3.slice(0, -4));
        const r3 = ee((0, I.basename)(t3));
        return r3.length > 0 ? r3 : void 0;
      })(r2);
      if (void 0 === s2) return { skippedEntry: { index: t2, error: `Plugin entry at index ${t2} has no usable name` } };
      const o2 = c.safeParse(e2.capabilities);
      if (void 0 !== e2.capabilities && !o2.success) return { skippedEntry: { index: t2, name: s2, error: `Plugin entry at index ${t2} has invalid capabilities: ${o2.error.issues.map((e3) => `${e3.path.join(".")}: ${e3.message}`).join(", ")}` } };
      const i2 = o2.success ? o2.data : void 0, a2 = (function(e3) {
        const t3 = G.safeParse(e3);
        if (t3.success && (void 0 !== t3.data.cursor || void 0 !== t3.data.sand)) return t3.data;
      })(e2.minClientVersions);
      return { entry: { name: s2, displayName: ne(e2.displayName), source: r2, description: ne(e2.description), version: ne(e2.version), author: ae(e2.author), publisher: ne(e2.publisher), homepage: ne(e2.homepage), repository: ne(e2.repository), license: ne(e2.license), keywords: se(e2.keywords), logo: ne(e2.logo), category: ne(e2.category), tags: se(e2.tags), strict: "boolean" != typeof e2.strict || e2.strict, commands: oe(e2.commands), agents: oe(e2.agents), skills: oe(e2.skills), rules: oe(e2.rules), hooks: le(e2.hooks), variables: ue(e2.variables), mcpServers: ce(e2.mcpServers), ...void 0 !== i2 && { capabilities: i2 }, ...void 0 !== a2 && { minClientVersions: a2 } } };
    }
    function pe(e2, t2 = {}) {
      if (e2.length > J) return { success: false, error: `Manifest exceeds maximum size of ${J} bytes` };
      let r2;
      try {
        r2 = JSON.parse(e2);
      } catch (e3) {
        return { success: false, error: `Invalid JSON: ${e3 instanceof Error ? e3.message : "Unknown error"}` };
      }
      if (!Z(r2)) return { success: false, error: "Invalid marketplace manifest: expected a JSON object" };
      const n2 = [], s2 = [], o2 = /* @__PURE__ */ new Set();
      return (Array.isArray(r2.plugins) ? r2.plugins : []).forEach((e3, t3) => {
        const r3 = de(e3, t3);
        "skippedEntry" in r3 ? s2.push(r3.skippedEntry) : o2.has(r3.entry.name) ? s2.push({ index: t3, name: r3.entry.name, error: `Duplicate plugin name "${r3.entry.name}" at index ${t3}` }) : (o2.add(r3.entry.name), n2.push(r3.entry));
      }), { success: true, data: { name: te(r2, t2), owner: re(r2), description: ne(r2.description), plugins: n2, metadata: ie(r2), skippedPluginEntries: s2 } };
    }
    function me(e2) {
      if (e2.length > J) return { success: false, error: `Manifest exceeds maximum size of ${J} bytes` };
      let t2;
      try {
        t2 = JSON.parse(e2);
      } catch (e3) {
        return { success: false, error: `Invalid JSON: ${e3 instanceof Error ? e3.message : "Unknown error"}` };
      }
      const r2 = M(A(t2)), n2 = X.safeParse(t2);
      return n2.success ? { success: true, data: n2.data, ..."unsupported" === r2.kind && { unrecognizedSchemaId: r2.id } } : { success: false, error: `Invalid plugin manifest: ${n2.error.errors.map((e3) => `${e3.path.join(".")}: ${e3.message}`).join(", ")}`, details: n2.error };
    }
    function he(e2, t2) {
      if ("string" != typeof e2) return null;
      let r2 = e2;
      if (r2.startsWith("./") && (r2 = r2.slice(2)), void 0 !== t2) {
        let e3 = t2;
        e3.startsWith("./") && (e3 = e3.slice(2)), e3.endsWith("/") && (e3 = e3.slice(0, -1)), r2 = `${e3}/${r2}`;
      }
      return r2 || ".";
    }
    function fe({ logo: e2, owner: t2, repo: r2, ref: n2, basePath: s2 }) {
      if (void 0 === e2) return;
      if (e2.startsWith("http://") || e2.startsWith("https://")) return e2;
      let o2 = e2;
      return o2.startsWith("./") && (o2 = o2.slice(2)), s2 && (o2 = `${s2}/${o2}`), `https://raw.githubusercontent.com/${t2}/${r2}/${n2}/${o2}`;
    }
    function ge(e2) {
      return !e2.includes("..") && (!(0, I.isAbsolute)(e2) && !e2.includes("://"));
    }
    function ye(...e2) {
      for (const t2 of e2) if (t2.displayName) return t2.displayName;
      for (const t2 of e2) if (t2.name) return t2.name;
      return "";
    }
    new x.Ajv({ allErrors: true, strict: false, validateSchema: true });
    var we = r(49137), ve = r(51455), _e = r(40283);
    const be = /\$\{(?:env:([A-Za-z_][A-Za-z0-9_]*)|([^:}]+)(?::-([^}]*))?)\}/g;
    function Se(e2, t2) {
      return ke(e2, "function" == typeof t2 ? t2 : (function(e3) {
        const t3 = new Map(Object.entries(e3).map(([e4, t4]) => [e4.toLowerCase(), t4]));
        return (r2) => e3[r2] ?? t3.get(r2.toLowerCase());
      })(t2));
    }
    function ke(e2, t2) {
      if ("string" == typeof e2) return e2.replace(be, (e3, r2, n2, s2) => {
        if (void 0 !== r2) return t2(r2) ?? e3;
        const o2 = t2(n2);
        return void 0 !== o2 ? o2 : void 0 !== s2 ? s2 : e3;
      });
      if (Array.isArray(e2)) return e2.map((e3) => ke(e3, t2));
      if (null !== e2 && "object" == typeof e2) {
        const r2 = {};
        for (const [n2, s2] of Object.entries(e2)) r2[n2] = ke(s2, t2);
        return r2;
      }
      return e2;
    }
    function xe(e2, t2) {
      return e2.replace(/\$\{CLAUDE_PLUGIN_ROOT\}/g, () => t2).replace(/\$\{CURSOR_PLUGIN_ROOT\}/g, () => t2);
    }
    const Ee = [".mcp.json", "mcp.json"], Ie = new Set(["author", "owner", "source", "metadata"].map((e2) => e2.toLowerCase()));
    function Te(e2, t2) {
      if (!(function(e3) {
        return Ie.has(e3.toLowerCase());
      })(e2)) return false;
      if ("object" != typeof t2 || null === t2) return false;
      const r2 = t2;
      switch (e2.toLowerCase()) {
        case "author":
        case "owner":
          return "string" == typeof r2.name;
        case "source":
          return "string" == typeof r2.source || "string" == typeof r2.repo || "string" == typeof r2.path || "string" == typeof r2.ref || "string" == typeof r2.sha;
        case "metadata":
          return "string" == typeof r2.description || "string" == typeof r2.version || "string" == typeof r2.pluginRoot;
        default:
          return false;
      }
    }
    function Ce(e2) {
      return "object" == typeof e2 && null !== e2 && ("command" in e2 || "url" in e2);
    }
    function Pe(e2) {
      const t2 = void 0 !== e2 && e2.length > 0 ? e2.replace(/\/+$/, "") : void 0;
      return Ee.map((e3) => void 0 !== t2 ? `${t2}/${e3}` : e3);
    }
    function Ae(e2, t2, r2) {
      if (!e2.mcpServers) return e2;
      const n2 = {};
      for (const [r3, s2] of Object.entries(e2.mcpServers)) {
        const e3 = { ...s2 };
        if ("string" == typeof s2.command && (e3.command = xe(s2.command, t2)), Array.isArray(s2.args) && (e3.args = s2.args.map((e4) => "string" == typeof e4 ? xe(e4, t2) : e4)), s2.env && "object" == typeof s2.env) {
          const r4 = {};
          for (const [e4, n3] of Object.entries(s2.env)) r4[e4] = "string" == typeof n3 ? xe(n3, t2) : n3;
          e3.env = r4;
        }
        "string" == typeof s2.cwd && (e3.cwd = xe(s2.cwd, t2)), n2[r3] = e3;
      }
      return (function(e3, t3) {
        const r3 = t3?.cloudAgentEnvLookup, n3 = t3?.configuredVariables;
        return Se(e3, void 0 !== r3 ? r3 : (e4) => {
          const t4 = process.env[e4];
          if (void 0 !== t4) return t4;
          const r4 = n3?.[e4];
          return null != r4 ? "string" == typeof r4 ? r4 : String(r4) : void 0;
        });
      })({ ...e2, mcpServers: n2 }, r2);
    }
    function Re(e2, t2, r2) {
      try {
        const n2 = (0, _e.qg)(e2), o2 = A(n2);
        if (void 0 !== o2) {
          const e3 = r2?.log ?? s;
          "unsupported" === M(o2).kind ? e3.log("debug", `mcp.json declares an unrecognized $schema, loading anyway: ${o2}`) : (function(e4, t3) {
            if (void 0 === e4 || void 0 === t3) return false;
            const r3 = R(e4), n3 = R(t3);
            return void 0 !== r3 && void 0 !== n3 && r3 !== n3;
          })(r2?.pluginSchemaId, o2) && e3.log("debug", `mcp.json $schema ${o2} disagrees with plugin.json $schema ${r2?.pluginSchemaId}, loading anyway`);
        }
        const a2 = i.safeParse(n2), c2 = true === r2?.skipExpansion;
        if (a2.success && a2.data.mcpServers && Object.keys(a2.data.mcpServers).length > 0) return c2 ? a2.data : Ae(a2.data, t2, r2);
        const l2 = {};
        for (const [e3, t3] of Object.entries(n2)) "mcpServers" !== e3 && !Te(e3, t3) && Ce(t3) && (l2[e3] = t3);
        if (Object.keys(l2).length > 0) {
          const e3 = i.safeParse({ mcpServers: l2 });
          if (e3.success) return c2 ? e3.data : Ae(e3.data, t2, r2);
        }
        return null;
      } catch {
        return null;
      }
    }
    function Me(e2, t2, r2) {
      for (const [n2, s2] of Object.entries(t2)) e2.mcpServers[n2] = s2, e2.mcpServerSourcePaths[n2] = r2;
    }
    async function Je(e2, t2, r2 = {}) {
      const n2 = r2.toSourcePath ?? ((e3) => e3), s2 = r2.installPathForExpansion ?? "", o2 = { mcpServers: {}, mcpServerSourcePaths: {} }, i2 = async (e3) => {
        const i3 = e3.replace(/^\.\//, "");
        if (!ge(i3)) return;
        const a3 = await t2(i3);
        if (null === a3) return;
        const c2 = Re(a3, s2, r2.parserOptions);
        c2?.mcpServers && Object.keys(c2.mcpServers).length > 0 && Me(o2, c2.mcpServers, n2(i3));
      }, a2 = (e3) => {
        const t3 = Re(JSON.stringify(e3), s2, r2.parserOptions);
        t3?.mcpServers && Object.keys(t3.mcpServers).length > 0 && Me(o2, t3.mcpServers, r2.manifestSourcePath ?? "manifest");
      };
      if ("string" == typeof e2) await i2(e2);
      else if (Array.isArray(e2)) for (const t3 of e2) "string" == typeof t3 ? await i2(t3) : "object" == typeof t3 && null !== t3 && a2(t3);
      else "object" == typeof e2 && null !== e2 && a2(e2);
      return o2;
    }
    async function Oe(e2, t2, r2, n2 = {}) {
      const s2 = n2.toSourcePath ?? ((e3) => e3), o2 = n2.installPathForExpansion ?? "", i2 = n2.fallbackFileNames ?? Ee, a2 = n2.manifestPrecedence ?? "override", c2 = {}, l2 = {};
      for (const t3 of i2) {
        const r3 = await e2(t3);
        if (null === r3) continue;
        const i3 = Re(r3, o2, n2.parserOptions);
        if (i3?.mcpServers) for (const [e3, r4] of Object.entries(i3.mcpServers)) void 0 === c2[e3] && (c2[e3] = r4, l2[e3] = s2(t3));
      }
      if (void 0 !== t2) {
        const i3 = await Je(t2, e2, { toSourcePath: s2, manifestSourcePath: r2, installPathForExpansion: o2, parserOptions: n2.parserOptions });
        for (const [e3, t3] of Object.entries(i3.mcpServers)) "fill" === a2 && void 0 !== c2[e3] || (c2[e3] = t3, l2[e3] = i3.mcpServerSourcePaths[e3]);
      }
      return 0 === Object.keys(c2).length ? null : { mcpServers: c2, ...Object.keys(l2).length > 0 && { mcpServerSourcePaths: l2 } };
    }
    function Be(e2, t2, r2, n2, s2, o2) {
      const i2 = [], a2 = e2.mcpServers;
      if (!a2) return i2;
      for (const [e3, c2] of Object.entries(a2)) {
        const a3 = c2, l2 = `plugin-${n2}-${e3}`, u2 = e3;
        a3.url ? i2.push({ identifier: l2, name: u2, marketplace: t2, marketplaceId: r2, pluginName: n2, pluginId: s2, pluginSource: o2, type: "streamableHttp", url: a3.url, headers: a3.headers, auth: a3.auth, tls: a3.tls, enabledTools: a3.enabledTools, placement: a3.placement, projectManaged: false, pluginManaged: true }) : a3.command && i2.push({ identifier: l2, name: u2, marketplace: t2, marketplaceId: r2, pluginName: n2, pluginId: s2, pluginSource: o2, type: "stdio", command: a3.command, args: a3.args ?? [], env: a3.env ?? {}, cwd: a3.cwd, envFile: a3.envFile, enabledTools: a3.enabledTools, projectManaged: false, pluginManaged: true });
      }
      return i2;
    }
    var De = r(57075), qe = r(46466), Ne = r(38522), Fe = r(90066), Ue = r(24434), Le = r(79896), $e = r(78474);
    const je = require("node:string_decoder");
    var Ge = r(73024), ze = r(16928), We = r(42613), He = r(20181), Ke = r(43106), Ve = r.t(Ke, 2);
    const Ye = require("node:assert");
    var Qe = Object.defineProperty, Xe = "object" == typeof process && process ? process : { stdout: null, stderr: null }, Ze = (e2) => !!e2 && "object" == typeof e2 && (e2 instanceof qt || e2 instanceof De || et(e2) || tt(e2)), et = (e2) => !!e2 && "object" == typeof e2 && e2 instanceof $e.EventEmitter && "function" == typeof e2.pipe && e2.pipe !== De.Writable.prototype.pipe, tt = (e2) => !!e2 && "object" == typeof e2 && e2 instanceof $e.EventEmitter && "function" == typeof e2.write && "function" == typeof e2.end, rt = /* @__PURE__ */ Symbol("EOF"), nt = /* @__PURE__ */ Symbol("maybeEmitEnd"), st = /* @__PURE__ */ Symbol("emittedEnd"), ot = /* @__PURE__ */ Symbol("emittingEnd"), it = /* @__PURE__ */ Symbol("emittedError"), at = /* @__PURE__ */ Symbol("closed"), ct = /* @__PURE__ */ Symbol("read"), lt = /* @__PURE__ */ Symbol("flush"), ut = /* @__PURE__ */ Symbol("flushChunk"), dt = /* @__PURE__ */ Symbol("encoding"), pt = /* @__PURE__ */ Symbol("decoder"), mt = /* @__PURE__ */ Symbol("flowing"), ht = /* @__PURE__ */ Symbol("paused"), ft = /* @__PURE__ */ Symbol("resume"), gt = /* @__PURE__ */ Symbol("buffer"), yt = /* @__PURE__ */ Symbol("pipes"), wt = /* @__PURE__ */ Symbol("bufferLength"), vt = /* @__PURE__ */ Symbol("bufferPush"), _t = /* @__PURE__ */ Symbol("bufferShift"), bt = /* @__PURE__ */ Symbol("objectMode"), St = /* @__PURE__ */ Symbol("destroyed"), kt = /* @__PURE__ */ Symbol("error"), xt = /* @__PURE__ */ Symbol("emitData"), Et = /* @__PURE__ */ Symbol("emitEnd"), It = /* @__PURE__ */ Symbol("emitEnd2"), Tt = /* @__PURE__ */ Symbol("async"), Ct = /* @__PURE__ */ Symbol("abort"), Pt = /* @__PURE__ */ Symbol("aborted"), At = /* @__PURE__ */ Symbol("signal"), Rt = /* @__PURE__ */ Symbol("dataListeners"), Mt = /* @__PURE__ */ Symbol("discarded"), Jt = (e2) => Promise.resolve().then(e2), Ot = (e2) => e2(), Bt = class {
      src;
      dest;
      opts;
      ondrain;
      constructor(e2, t2, r2) {
        this.src = e2, this.dest = t2, this.opts = r2, this.ondrain = () => e2[ft](), this.dest.on("drain", this.ondrain);
      }
      unpipe() {
        this.dest.removeListener("drain", this.ondrain);
      }
      proxyErrors(e2) {
      }
      end() {
        this.unpipe(), this.opts.end && this.dest.end();
      }
    }, Dt = class extends Bt {
      unpipe() {
        this.src.removeListener("error", this.proxyErrors), super.unpipe();
      }
      constructor(e2, t2, r2) {
        super(e2, t2, r2), this.proxyErrors = (e3) => this.dest.emit("error", e3), e2.on("error", this.proxyErrors);
      }
    }, qt = class extends $e.EventEmitter {
      [mt] = false;
      [ht] = false;
      [yt] = [];
      [gt] = [];
      [bt];
      [dt];
      [Tt];
      [pt];
      [rt] = false;
      [st] = false;
      [ot] = false;
      [at] = false;
      [it] = null;
      [wt] = 0;
      [St] = false;
      [At];
      [Pt] = false;
      [Rt] = 0;
      [Mt] = false;
      writable = true;
      readable = true;
      constructor(...e2) {
        let t2 = e2[0] || {};
        if (super(), t2.objectMode && "string" == typeof t2.encoding) throw new TypeError("Encoding and objectMode may not be used together");
        t2.objectMode ? (this[bt] = true, this[dt] = null) : ((e3) => !e3.objectMode && !!e3.encoding && "buffer" !== e3.encoding)(t2) ? (this[dt] = t2.encoding, this[bt] = false) : (this[bt] = false, this[dt] = null), this[Tt] = !!t2.async, this[pt] = this[dt] ? new je.StringDecoder(this[dt]) : null, t2 && true === t2.debugExposeBuffer && Object.defineProperty(this, "buffer", { get: () => this[gt] }), t2 && true === t2.debugExposePipes && Object.defineProperty(this, "pipes", { get: () => this[yt] });
        let { signal: r2 } = t2;
        r2 && (this[At] = r2, r2.aborted ? this[Ct]() : r2.addEventListener("abort", () => this[Ct]()));
      }
      get bufferLength() {
        return this[wt];
      }
      get encoding() {
        return this[dt];
      }
      set encoding(e2) {
        throw new Error("Encoding must be set at instantiation time");
      }
      setEncoding(e2) {
        throw new Error("Encoding must be set at instantiation time");
      }
      get objectMode() {
        return this[bt];
      }
      set objectMode(e2) {
        throw new Error("objectMode must be set at instantiation time");
      }
      get async() {
        return this[Tt];
      }
      set async(e2) {
        this[Tt] = this[Tt] || !!e2;
      }
      [Ct]() {
        this[Pt] = true, this.emit("abort", this[At]?.reason), this.destroy(this[At]?.reason);
      }
      get aborted() {
        return this[Pt];
      }
      set aborted(e2) {
      }
      write(e2, t2, r2) {
        if (this[Pt]) return false;
        if (this[rt]) throw new Error("write after end");
        if (this[St]) return this.emit("error", Object.assign(new Error("Cannot call write after a stream was destroyed"), { code: "ERR_STREAM_DESTROYED" })), true;
        "function" == typeof t2 && (r2 = t2, t2 = "utf8"), t2 || (t2 = "utf8");
        let n2 = this[Tt] ? Jt : Ot;
        if (!this[bt] && !Buffer.isBuffer(e2)) {
          if (s2 = e2, !Buffer.isBuffer(s2) && ArrayBuffer.isView(s2)) e2 = Buffer.from(e2.buffer, e2.byteOffset, e2.byteLength);
          else if (((e3) => e3 instanceof ArrayBuffer || !!e3 && "object" == typeof e3 && e3.constructor && "ArrayBuffer" === e3.constructor.name && e3.byteLength >= 0)(e2)) e2 = Buffer.from(e2);
          else if ("string" != typeof e2) throw new Error("Non-contiguous data written to non-objectMode stream");
        }
        var s2;
        return this[bt] ? (this[mt] && 0 !== this[wt] && this[lt](true), this[mt] ? this.emit("data", e2) : this[vt](e2), 0 !== this[wt] && this.emit("readable"), r2 && n2(r2), this[mt]) : e2.length ? ("string" == typeof e2 && !(t2 === this[dt] && !this[pt]?.lastNeed) && (e2 = Buffer.from(e2, t2)), Buffer.isBuffer(e2) && this[dt] && (e2 = this[pt].write(e2)), this[mt] && 0 !== this[wt] && this[lt](true), this[mt] ? this.emit("data", e2) : this[vt](e2), 0 !== this[wt] && this.emit("readable"), r2 && n2(r2), this[mt]) : (0 !== this[wt] && this.emit("readable"), r2 && n2(r2), this[mt]);
      }
      read(e2) {
        if (this[St]) return null;
        if (this[Mt] = false, 0 === this[wt] || 0 === e2 || e2 && e2 > this[wt]) return this[nt](), null;
        this[bt] && (e2 = null), this[gt].length > 1 && !this[bt] && (this[gt] = [this[dt] ? this[gt].join("") : Buffer.concat(this[gt], this[wt])]);
        let t2 = this[ct](e2 || null, this[gt][0]);
        return this[nt](), t2;
      }
      [ct](e2, t2) {
        if (this[bt]) this[_t]();
        else {
          let r2 = t2;
          e2 === r2.length || null === e2 ? this[_t]() : "string" == typeof r2 ? (this[gt][0] = r2.slice(e2), t2 = r2.slice(0, e2), this[wt] -= e2) : (this[gt][0] = r2.subarray(e2), t2 = r2.subarray(0, e2), this[wt] -= e2);
        }
        return this.emit("data", t2), !this[gt].length && !this[rt] && this.emit("drain"), t2;
      }
      end(e2, t2, r2) {
        return "function" == typeof e2 && (r2 = e2, e2 = void 0), "function" == typeof t2 && (r2 = t2, t2 = "utf8"), void 0 !== e2 && this.write(e2, t2), r2 && this.once("end", r2), this[rt] = true, this.writable = false, (this[mt] || !this[ht]) && this[nt](), this;
      }
      [ft]() {
        this[St] || (!this[Rt] && !this[yt].length && (this[Mt] = true), this[ht] = false, this[mt] = true, this.emit("resume"), this[gt].length ? this[lt]() : this[rt] ? this[nt]() : this.emit("drain"));
      }
      resume() {
        return this[ft]();
      }
      pause() {
        this[mt] = false, this[ht] = true, this[Mt] = false;
      }
      get destroyed() {
        return this[St];
      }
      get flowing() {
        return this[mt];
      }
      get paused() {
        return this[ht];
      }
      [vt](e2) {
        this[bt] ? this[wt] += 1 : this[wt] += e2.length, this[gt].push(e2);
      }
      [_t]() {
        return this[bt] ? this[wt] -= 1 : this[wt] -= this[gt][0].length, this[gt].shift();
      }
      [lt](e2 = false) {
        do {
        } while (this[ut](this[_t]()) && this[gt].length);
        !e2 && !this[gt].length && !this[rt] && this.emit("drain");
      }
      [ut](e2) {
        return this.emit("data", e2), this[mt];
      }
      pipe(e2, t2) {
        if (this[St]) return e2;
        this[Mt] = false;
        let r2 = this[st];
        return t2 = t2 || {}, e2 === Xe.stdout || e2 === Xe.stderr ? t2.end = false : t2.end = false !== t2.end, t2.proxyErrors = !!t2.proxyErrors, r2 ? t2.end && e2.end() : (this[yt].push(t2.proxyErrors ? new Dt(this, e2, t2) : new Bt(this, e2, t2)), this[Tt] ? Jt(() => this[ft]()) : this[ft]()), e2;
      }
      unpipe(e2) {
        let t2 = this[yt].find((t3) => t3.dest === e2);
        t2 && (1 === this[yt].length ? (this[mt] && 0 === this[Rt] && (this[mt] = false), this[yt] = []) : this[yt].splice(this[yt].indexOf(t2), 1), t2.unpipe());
      }
      addListener(e2, t2) {
        return this.on(e2, t2);
      }
      on(e2, t2) {
        let r2 = super.on(e2, t2);
        if ("data" === e2) this[Mt] = false, this[Rt]++, !this[yt].length && !this[mt] && this[ft]();
        else if ("readable" === e2 && 0 !== this[wt]) super.emit("readable");
        else if ("end" !== (n2 = e2) && "finish" !== n2 && "prefinish" !== n2 || !this[st]) {
          if ("error" === e2 && this[it]) {
            let e3 = t2;
            this[Tt] ? Jt(() => e3.call(this, this[it])) : e3.call(this, this[it]);
          }
        } else super.emit(e2), this.removeAllListeners(e2);
        var n2;
        return r2;
      }
      removeListener(e2, t2) {
        return this.off(e2, t2);
      }
      off(e2, t2) {
        let r2 = super.off(e2, t2);
        return "data" === e2 && (this[Rt] = this.listeners("data").length, 0 === this[Rt] && !this[Mt] && !this[yt].length && (this[mt] = false)), r2;
      }
      removeAllListeners(e2) {
        let t2 = super.removeAllListeners(e2);
        return ("data" === e2 || void 0 === e2) && (this[Rt] = 0, !this[Mt] && !this[yt].length && (this[mt] = false)), t2;
      }
      get emittedEnd() {
        return this[st];
      }
      [nt]() {
        !this[ot] && !this[st] && !this[St] && 0 === this[gt].length && this[rt] && (this[ot] = true, this.emit("end"), this.emit("prefinish"), this.emit("finish"), this[at] && this.emit("close"), this[ot] = false);
      }
      emit(e2, ...t2) {
        let r2 = t2[0];
        if ("error" !== e2 && "close" !== e2 && e2 !== St && this[St]) return false;
        if ("data" === e2) return !(!this[bt] && !r2) && (this[Tt] ? (Jt(() => this[xt](r2)), true) : this[xt](r2));
        if ("end" === e2) return this[Et]();
        if ("close" === e2) {
          if (this[at] = true, !this[st] && !this[St]) return false;
          let e3 = super.emit("close");
          return this.removeAllListeners("close"), e3;
        }
        if ("error" === e2) {
          this[it] = r2, super.emit(kt, r2);
          let e3 = !(this[At] && !this.listeners("error").length) && super.emit("error", r2);
          return this[nt](), e3;
        }
        if ("resume" === e2) {
          let e3 = super.emit("resume");
          return this[nt](), e3;
        }
        if ("finish" === e2 || "prefinish" === e2) {
          let t3 = super.emit(e2);
          return this.removeAllListeners(e2), t3;
        }
        let n2 = super.emit(e2, ...t2);
        return this[nt](), n2;
      }
      [xt](e2) {
        for (let t3 of this[yt]) false === t3.dest.write(e2) && this.pause();
        let t2 = !this[Mt] && super.emit("data", e2);
        return this[nt](), t2;
      }
      [Et]() {
        return !this[st] && (this[st] = true, this.readable = false, this[Tt] ? (Jt(() => this[It]()), true) : this[It]());
      }
      [It]() {
        if (this[pt]) {
          let e3 = this[pt].end();
          if (e3) {
            for (let t2 of this[yt]) t2.dest.write(e3);
            this[Mt] || super.emit("data", e3);
          }
        }
        for (let e3 of this[yt]) e3.end();
        let e2 = super.emit("end");
        return this.removeAllListeners("end"), e2;
      }
      async collect() {
        let e2 = Object.assign([], { dataLength: 0 });
        this[bt] || (e2.dataLength = 0);
        let t2 = this.promise();
        return this.on("data", (t3) => {
          e2.push(t3), this[bt] || (e2.dataLength += t3.length);
        }), await t2, e2;
      }
      async concat() {
        if (this[bt]) throw new Error("cannot concat in objectMode");
        let e2 = await this.collect();
        return this[dt] ? e2.join("") : Buffer.concat(e2, e2.dataLength);
      }
      async promise() {
        return new Promise((e2, t2) => {
          this.on(St, () => t2(new Error("stream destroyed"))), this.on("error", (e3) => t2(e3)), this.on("end", () => e2());
        });
      }
      [Symbol.asyncIterator]() {
        this[Mt] = false;
        let e2 = false, t2 = async () => (this.pause(), e2 = true, { value: void 0, done: true });
        return { next: () => {
          if (e2) return t2();
          let r2 = this.read();
          if (null !== r2) return Promise.resolve({ done: false, value: r2 });
          if (this[rt]) return t2();
          let n2, s2, o2 = (e3) => {
            this.off("data", i2), this.off("end", a2), this.off(St, c2), t2(), s2(e3);
          }, i2 = (e3) => {
            this.off("error", o2), this.off("end", a2), this.off(St, c2), this.pause(), n2({ value: e3, done: !!this[rt] });
          }, a2 = () => {
            this.off("error", o2), this.off("data", i2), this.off(St, c2), t2(), n2({ done: true, value: void 0 });
          }, c2 = () => o2(new Error("stream destroyed"));
          return new Promise((e3, t3) => {
            s2 = t3, n2 = e3, this.once(St, c2), this.once("error", o2), this.once("end", a2), this.once("data", i2);
          });
        }, throw: t2, return: t2, [Symbol.asyncIterator]() {
          return this;
        }, [Symbol.asyncDispose]: async () => {
        } };
      }
      [Symbol.iterator]() {
        this[Mt] = false;
        let e2 = false, t2 = () => (this.pause(), this.off(kt, t2), this.off(St, t2), this.off("end", t2), e2 = true, { done: true, value: void 0 });
        return this.once("end", t2), this.once(kt, t2), this.once(St, t2), { next: () => {
          if (e2) return t2();
          let r2 = this.read();
          return null === r2 ? t2() : { done: false, value: r2 };
        }, throw: t2, return: t2, [Symbol.iterator]() {
          return this;
        }, [Symbol.dispose]: () => {
        } };
      }
      destroy(e2) {
        if (this[St]) return e2 ? this.emit("error", e2) : this.emit(St), this;
        this[St] = true, this[Mt] = true, this[gt].length = 0, this[wt] = 0;
        return "function" == typeof this.close && !this[at] && this.close(), e2 ? this.emit("error", e2) : this.emit(St), this;
      }
      static get isStream() {
        return Ze;
      }
    }, Nt = Le.writev, Ft = /* @__PURE__ */ Symbol("_autoClose"), Ut = /* @__PURE__ */ Symbol("_close"), Lt = /* @__PURE__ */ Symbol("_ended"), $t = /* @__PURE__ */ Symbol("_fd"), jt = /* @__PURE__ */ Symbol("_finished"), Gt = /* @__PURE__ */ Symbol("_flags"), zt = /* @__PURE__ */ Symbol("_flush"), Wt = /* @__PURE__ */ Symbol("_handleChunk"), Ht = /* @__PURE__ */ Symbol("_makeBuf"), Kt = /* @__PURE__ */ Symbol("_mode"), Vt = /* @__PURE__ */ Symbol("_needDrain"), Yt = /* @__PURE__ */ Symbol("_onerror"), Qt = /* @__PURE__ */ Symbol("_onopen"), Xt = /* @__PURE__ */ Symbol("_onread"), Zt = /* @__PURE__ */ Symbol("_onwrite"), er = /* @__PURE__ */ Symbol("_open"), tr = /* @__PURE__ */ Symbol("_path"), rr = /* @__PURE__ */ Symbol("_pos"), nr = /* @__PURE__ */ Symbol("_queue"), sr = /* @__PURE__ */ Symbol("_read"), or = /* @__PURE__ */ Symbol("_readSize"), ir = /* @__PURE__ */ Symbol("_reading"), ar = /* @__PURE__ */ Symbol("_remain"), cr = /* @__PURE__ */ Symbol("_size"), lr = /* @__PURE__ */ Symbol("_write"), ur = /* @__PURE__ */ Symbol("_writing"), dr = /* @__PURE__ */ Symbol("_defaultFlag"), pr = /* @__PURE__ */ Symbol("_errored"), mr = class extends qt {
      [pr] = false;
      [$t];
      [tr];
      [or];
      [ir] = false;
      [cr];
      [ar];
      [Ft];
      constructor(e2, t2) {
        if (super(t2 = t2 || {}), this.readable = true, this.writable = false, "string" != typeof e2) throw new TypeError("path must be a string");
        this[pr] = false, this[$t] = "number" == typeof t2.fd ? t2.fd : void 0, this[tr] = e2, this[or] = t2.readSize || 16777216, this[ir] = false, this[cr] = "number" == typeof t2.size ? t2.size : 1 / 0, this[ar] = this[cr], this[Ft] = "boolean" != typeof t2.autoClose || t2.autoClose, "number" == typeof this[$t] ? this[sr]() : this[er]();
      }
      get fd() {
        return this[$t];
      }
      get path() {
        return this[tr];
      }
      write() {
        throw new TypeError("this is a readable stream");
      }
      end() {
        throw new TypeError("this is a readable stream");
      }
      [er]() {
        Le.open(this[tr], "r", (e2, t2) => this[Qt](e2, t2));
      }
      [Qt](e2, t2) {
        e2 ? this[Yt](e2) : (this[$t] = t2, this.emit("open", t2), this[sr]());
      }
      [Ht]() {
        return Buffer.allocUnsafe(Math.min(this[or], this[ar]));
      }
      [sr]() {
        if (!this[ir]) {
          this[ir] = true;
          let e2 = this[Ht]();
          if (0 === e2.length) return process.nextTick(() => this[Xt](null, 0, e2));
          Le.read(this[$t], e2, 0, e2.length, null, (e3, t2, r2) => this[Xt](e3, t2, r2));
        }
      }
      [Xt](e2, t2, r2) {
        this[ir] = false, e2 ? this[Yt](e2) : this[Wt](t2, r2) && this[sr]();
      }
      [Ut]() {
        if (this[Ft] && "number" == typeof this[$t]) {
          let e2 = this[$t];
          this[$t] = void 0, Le.close(e2, (e3) => e3 ? this.emit("error", e3) : this.emit("close"));
        }
      }
      [Yt](e2) {
        this[ir] = true, this[Ut](), this.emit("error", e2);
      }
      [Wt](e2, t2) {
        let r2 = false;
        return this[ar] -= e2, e2 > 0 && (r2 = super.write(e2 < t2.length ? t2.subarray(0, e2) : t2)), (0 === e2 || this[ar] <= 0) && (r2 = false, this[Ut](), super.end()), r2;
      }
      emit(e2, ...t2) {
        switch (e2) {
          case "prefinish":
          case "finish":
            return false;
          case "drain":
            return "number" == typeof this[$t] && this[sr](), false;
          case "error":
            return !this[pr] && (this[pr] = true, super.emit(e2, ...t2));
          default:
            return super.emit(e2, ...t2);
        }
      }
    }, hr = class extends mr {
      [er]() {
        let e2 = true;
        try {
          this[Qt](null, Le.openSync(this[tr], "r")), e2 = false;
        } finally {
          e2 && this[Ut]();
        }
      }
      [sr]() {
        let e2 = true;
        try {
          if (!this[ir]) {
            for (this[ir] = true; ; ) {
              let e3 = this[Ht](), t2 = 0 === e3.length ? 0 : Le.readSync(this[$t], e3, 0, e3.length, null);
              if (!this[Wt](t2, e3)) break;
            }
            this[ir] = false;
          }
          e2 = false;
        } finally {
          e2 && this[Ut]();
        }
      }
      [Ut]() {
        if (this[Ft] && "number" == typeof this[$t]) {
          let e2 = this[$t];
          this[$t] = void 0, Le.closeSync(e2), this.emit("close");
        }
      }
    }, fr = class extends Ue {
      readable = false;
      writable = true;
      [pr] = false;
      [ur] = false;
      [Lt] = false;
      [nr] = [];
      [Vt] = false;
      [tr];
      [Kt];
      [Ft];
      [$t];
      [dr];
      [Gt];
      [jt] = false;
      [rr];
      constructor(e2, t2) {
        super(t2 = t2 || {}), this[tr] = e2, this[$t] = "number" == typeof t2.fd ? t2.fd : void 0, this[Kt] = void 0 === t2.mode ? 438 : t2.mode, this[rr] = "number" == typeof t2.start ? t2.start : void 0, this[Ft] = "boolean" != typeof t2.autoClose || t2.autoClose;
        let r2 = void 0 !== this[rr] ? "r+" : "w";
        this[dr] = void 0 === t2.flags, this[Gt] = void 0 === t2.flags ? r2 : t2.flags, void 0 === this[$t] && this[er]();
      }
      emit(e2, ...t2) {
        if ("error" === e2) {
          if (this[pr]) return false;
          this[pr] = true;
        }
        return super.emit(e2, ...t2);
      }
      get fd() {
        return this[$t];
      }
      get path() {
        return this[tr];
      }
      [Yt](e2) {
        this[Ut](), this[ur] = true, this.emit("error", e2);
      }
      [er]() {
        Le.open(this[tr], this[Gt], this[Kt], (e2, t2) => this[Qt](e2, t2));
      }
      [Qt](e2, t2) {
        this[dr] && "r+" === this[Gt] && e2 && "ENOENT" === e2.code ? (this[Gt] = "w", this[er]()) : e2 ? this[Yt](e2) : (this[$t] = t2, this.emit("open", t2), this[ur] || this[zt]());
      }
      end(e2, t2) {
        return e2 && this.write(e2, t2), this[Lt] = true, !this[ur] && !this[nr].length && "number" == typeof this[$t] && this[Zt](null, 0), this;
      }
      write(e2, t2) {
        return "string" == typeof e2 && (e2 = Buffer.from(e2, t2)), this[Lt] ? (this.emit("error", new Error("write() after end()")), false) : void 0 === this[$t] || this[ur] || this[nr].length ? (this[nr].push(e2), this[Vt] = true, false) : (this[ur] = true, this[lr](e2), true);
      }
      [lr](e2) {
        Le.write(this[$t], e2, 0, e2.length, this[rr], (e3, t2) => this[Zt](e3, t2));
      }
      [Zt](e2, t2) {
        e2 ? this[Yt](e2) : (void 0 !== this[rr] && "number" == typeof t2 && (this[rr] += t2), this[nr].length ? this[zt]() : (this[ur] = false, this[Lt] && !this[jt] ? (this[jt] = true, this[Ut](), this.emit("finish")) : this[Vt] && (this[Vt] = false, this.emit("drain"))));
      }
      [zt]() {
        if (0 === this[nr].length) this[Lt] && this[Zt](null, 0);
        else if (1 === this[nr].length) this[lr](this[nr].pop());
        else {
          let e2 = this[nr];
          this[nr] = [], Nt(this[$t], e2, this[rr], (e3, t2) => this[Zt](e3, t2));
        }
      }
      [Ut]() {
        if (this[Ft] && "number" == typeof this[$t]) {
          let e2 = this[$t];
          this[$t] = void 0, Le.close(e2, (e3) => e3 ? this.emit("error", e3) : this.emit("close"));
        }
      }
    }, gr = class extends fr {
      [er]() {
        let e2;
        if (this[dr] && "r+" === this[Gt]) try {
          e2 = Le.openSync(this[tr], this[Gt], this[Kt]);
        } catch (e3) {
          if ("ENOENT" === e3?.code) return this[Gt] = "w", this[er]();
          throw e3;
        }
        else e2 = Le.openSync(this[tr], this[Gt], this[Kt]);
        this[Qt](null, e2);
      }
      [Ut]() {
        if (this[Ft] && "number" == typeof this[$t]) {
          let e2 = this[$t];
          this[$t] = void 0, Le.closeSync(e2), this.emit("close");
        }
      }
      [lr](e2) {
        let t2 = true;
        try {
          this[Zt](null, Le.writeSync(this[$t], e2, 0, e2.length, this[rr])), t2 = false;
        } finally {
          if (t2) try {
            this[Ut]();
          } catch {
          }
        }
      }
    }, yr = /* @__PURE__ */ new Map([["C", "cwd"], ["f", "file"], ["z", "gzip"], ["P", "preservePaths"], ["U", "unlink"], ["strip-components", "strip"], ["stripComponents", "strip"], ["keep-newer", "newer"], ["keepNewer", "newer"], ["keep-newer-files", "newer"], ["keepNewerFiles", "newer"], ["k", "keep"], ["keep-existing", "keep"], ["keepExisting", "keep"], ["m", "noMtime"], ["no-mtime", "noMtime"], ["p", "preserveOwner"], ["L", "follow"], ["h", "follow"], ["onentry", "onReadEntry"]]), wr = (e2) => yr.get(e2) || e2, vr = (e2 = {}) => {
      if (!e2) return {};
      let t2 = {};
      for (let [r2, n2] of Object.entries(e2)) {
        t2[wr(r2)] = n2;
      }
      return void 0 === t2.chmod && false === t2.noChmod && (t2.chmod = true), delete t2.noChmod, t2;
    }, _r = (e2, t2, r2, n2, s2) => Object.assign((o2 = [], i2, a2) => {
      Array.isArray(o2) && (i2 = o2, o2 = {}), "function" == typeof i2 && (a2 = i2, i2 = void 0), i2 = i2 ? Array.from(i2) : [];
      let c2 = vr(o2);
      if (s2?.(c2, i2), ((e3) => !!e3.sync && !!e3.file)(c2)) {
        if ("function" == typeof a2) throw new TypeError("callback not supported for sync tar functions");
        return e2(c2, i2);
      }
      if (((e3) => !e3.sync && !!e3.file)(c2)) {
        let e3 = t2(c2, i2);
        return a2 ? e3.then(() => a2(), a2) : e3;
      }
      if (((e3) => !!e3.sync && !e3.file)(c2)) {
        if ("function" == typeof a2) throw new TypeError("callback not supported for sync tar functions");
        return r2(c2, i2);
      }
      if (((e3) => !e3.sync && !e3.file)(c2)) {
        if ("function" == typeof a2) throw new TypeError("callback only supported with file option");
        return n2(c2, i2);
      }
      throw new Error("impossible options??");
    }, { syncFile: e2, asyncFile: t2, syncNoFile: r2, asyncNoFile: n2, validate: s2 }), br = Ke.constants || { ZLIB_VERNUM: 4736 }, Sr = Object.freeze(Object.assign(/* @__PURE__ */ Object.create(null), { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_MEM_ERROR: -4, Z_BUF_ERROR: -5, Z_VERSION_ERROR: -6, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, DEFLATE: 1, INFLATE: 2, GZIP: 3, GUNZIP: 4, DEFLATERAW: 5, INFLATERAW: 6, UNZIP: 7, BROTLI_DECODE: 8, BROTLI_ENCODE: 9, Z_MIN_WINDOWBITS: 8, Z_MAX_WINDOWBITS: 15, Z_DEFAULT_WINDOWBITS: 15, Z_MIN_CHUNK: 64, Z_MAX_CHUNK: 1 / 0, Z_DEFAULT_CHUNK: 16384, Z_MIN_MEMLEVEL: 1, Z_MAX_MEMLEVEL: 9, Z_DEFAULT_MEMLEVEL: 8, Z_MIN_LEVEL: -1, Z_MAX_LEVEL: 9, Z_DEFAULT_LEVEL: -1, BROTLI_OPERATION_PROCESS: 0, BROTLI_OPERATION_FLUSH: 1, BROTLI_OPERATION_FINISH: 2, BROTLI_OPERATION_EMIT_METADATA: 3, BROTLI_MODE_GENERIC: 0, BROTLI_MODE_TEXT: 1, BROTLI_MODE_FONT: 2, BROTLI_DEFAULT_MODE: 0, BROTLI_MIN_QUALITY: 0, BROTLI_MAX_QUALITY: 11, BROTLI_DEFAULT_QUALITY: 11, BROTLI_MIN_WINDOW_BITS: 10, BROTLI_MAX_WINDOW_BITS: 24, BROTLI_LARGE_MAX_WINDOW_BITS: 30, BROTLI_DEFAULT_WINDOW: 22, BROTLI_MIN_INPUT_BLOCK_BITS: 16, BROTLI_MAX_INPUT_BLOCK_BITS: 24, BROTLI_PARAM_MODE: 0, BROTLI_PARAM_QUALITY: 1, BROTLI_PARAM_LGWIN: 2, BROTLI_PARAM_LGBLOCK: 3, BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: 4, BROTLI_PARAM_SIZE_HINT: 5, BROTLI_PARAM_LARGE_WINDOW: 6, BROTLI_PARAM_NPOSTFIX: 7, BROTLI_PARAM_NDIRECT: 8, BROTLI_DECODER_RESULT_ERROR: 0, BROTLI_DECODER_RESULT_SUCCESS: 1, BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: 2, BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: 3, BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: 0, BROTLI_DECODER_PARAM_LARGE_WINDOW: 1, BROTLI_DECODER_NO_ERROR: 0, BROTLI_DECODER_SUCCESS: 1, BROTLI_DECODER_NEEDS_MORE_INPUT: 2, BROTLI_DECODER_NEEDS_MORE_OUTPUT: 3, BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: -1, BROTLI_DECODER_ERROR_FORMAT_RESERVED: -2, BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: -3, BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: -4, BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: -5, BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: -6, BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: -7, BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: -8, BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: -9, BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: -10, BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: -11, BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: -12, BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: -13, BROTLI_DECODER_ERROR_FORMAT_PADDING_1: -14, BROTLI_DECODER_ERROR_FORMAT_PADDING_2: -15, BROTLI_DECODER_ERROR_FORMAT_DISTANCE: -16, BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: -19, BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: -20, BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: -21, BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: -22, BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: -25, BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: -26, BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: -27, BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: -30, BROTLI_DECODER_ERROR_UNREACHABLE: -31 }, br)), kr = He.Buffer.concat, xr = Object.getOwnPropertyDescriptor(He.Buffer, "concat"), Er = (e2) => e2, Ir = true === xr?.writable || void 0 !== xr?.set ? (e2) => {
      He.Buffer.concat = e2 ? Er : kr;
    } : (e2) => {
    }, Tr = /* @__PURE__ */ Symbol("_superWrite"), Cr = class extends Error {
      code;
      errno;
      constructor(e2, t2) {
        super("zlib: " + e2.message, { cause: e2 }), this.code = e2.code, this.errno = e2.errno, this.code || (this.code = "ZLIB_ERROR"), this.message = "zlib: " + e2.message, Error.captureStackTrace(this, t2 ?? this.constructor);
      }
      get name() {
        return "ZlibError";
      }
    }, Pr = /* @__PURE__ */ Symbol("flushFlag"), Ar = class extends qt {
      #e = false;
      #t = false;
      #r;
      #n;
      #s;
      #o;
      #i;
      get sawError() {
        return this.#e;
      }
      get handle() {
        return this.#o;
      }
      get flushFlag() {
        return this.#r;
      }
      constructor(e2, t2) {
        if (!e2 || "object" != typeof e2) throw new TypeError("invalid options for ZlibBase constructor");
        if (super(e2), this.#r = e2.flush ?? 0, this.#n = e2.finishFlush ?? 0, this.#s = e2.fullFlushFlag ?? 0, "function" != typeof Ve[t2]) throw new TypeError("Compression method not supported: " + t2);
        try {
          this.#o = new Ve[t2](e2);
        } catch (e3) {
          throw new Cr(e3, this.constructor);
        }
        this.#i = (e3) => {
          this.#e || (this.#e = true, this.close(), this.emit("error", e3));
        }, this.#o?.on("error", (e3) => this.#i(new Cr(e3))), this.once("end", () => this.close);
      }
      close() {
        this.#o && (this.#o.close(), this.#o = void 0, this.emit("close"));
      }
      reset() {
        if (!this.#e) return We(this.#o, "zlib binding closed"), this.#o.reset?.();
      }
      flush(e2) {
        this.ended || ("number" != typeof e2 && (e2 = this.#s), this.write(Object.assign(He.Buffer.alloc(0), { [Pr]: e2 })));
      }
      end(e2, t2, r2) {
        return "function" == typeof e2 && (r2 = e2, t2 = void 0, e2 = void 0), "function" == typeof t2 && (r2 = t2, t2 = void 0), e2 && (t2 ? this.write(e2, t2) : this.write(e2)), this.flush(this.#n), this.#t = true, super.end(r2);
      }
      get ended() {
        return this.#t;
      }
      [Tr](e2) {
        return super.write(e2);
      }
      write(e2, t2, r2) {
        if ("function" == typeof t2 && (r2 = t2, t2 = "utf8"), "string" == typeof e2 && (e2 = He.Buffer.from(e2, t2)), this.#e) return;
        We(this.#o, "zlib binding closed");
        let n2 = this.#o._handle, s2 = n2.close;
        n2.close = () => {
        };
        let o2, i2, a2 = this.#o.close;
        this.#o.close = () => {
        }, Ir(true);
        try {
          let t3 = "number" == typeof e2[Pr] ? e2[Pr] : this.#r;
          o2 = this.#o._processChunk(e2, t3), Ir(false);
        } catch (e3) {
          Ir(false), this.#i(new Cr(e3, this.write));
        } finally {
          this.#o && (this.#o._handle = n2, n2.close = s2, this.#o.close = a2, this.#o.removeAllListeners("error"));
        }
        if (this.#o && this.#o.on("error", (e3) => this.#i(new Cr(e3, this.write))), o2) if (Array.isArray(o2) && o2.length > 0) {
          let e3 = o2[0];
          i2 = this[Tr](He.Buffer.from(e3));
          for (let e4 = 1; e4 < o2.length; e4++) i2 = this[Tr](o2[e4]);
        } else i2 = this[Tr](He.Buffer.from(o2));
        return r2 && r2(), i2;
      }
    }, Rr = class extends Ar {
      #e;
      #t;
      constructor(e2, t2) {
        (e2 = e2 || {}).flush = e2.flush || Sr.Z_NO_FLUSH, e2.finishFlush = e2.finishFlush || Sr.Z_FINISH, e2.fullFlushFlag = Sr.Z_FULL_FLUSH, super(e2, t2), this.#e = e2.level, this.#t = e2.strategy;
      }
      params(e2, t2) {
        if (!this.sawError) {
          if (!this.handle) throw new Error("cannot switch params when binding is closed");
          if (!this.handle.params) throw new Error("not supported in this implementation");
          if (this.#e !== e2 || this.#t !== t2) {
            this.flush(Sr.Z_SYNC_FLUSH), We(this.handle, "zlib binding closed");
            let r2 = this.handle.flush;
            this.handle.flush = (e3, t3) => {
              "function" == typeof e3 && (t3 = e3, e3 = this.flushFlag), this.flush(e3), t3?.();
            };
            try {
              this.handle.params(e2, t2);
            } finally {
              this.handle.flush = r2;
            }
            this.handle && (this.#e = e2, this.#t = t2);
          }
        }
      }
    }, Mr = class extends Rr {
      #e;
      constructor(e2) {
        super(e2, "Gzip"), this.#e = e2 && !!e2.portable;
      }
      [Tr](e2) {
        return this.#e ? (this.#e = false, e2[9] = 255, super[Tr](e2)) : super[Tr](e2);
      }
    }, Jr = class extends Rr {
      constructor(e2) {
        super(e2, "Unzip");
      }
    }, Or = class extends Ar {
      constructor(e2, t2) {
        (e2 = e2 || {}).flush = e2.flush || Sr.BROTLI_OPERATION_PROCESS, e2.finishFlush = e2.finishFlush || Sr.BROTLI_OPERATION_FINISH, e2.fullFlushFlag = Sr.BROTLI_OPERATION_FLUSH, super(e2, t2);
      }
    }, Br = class extends Or {
      constructor(e2) {
        super(e2, "BrotliCompress");
      }
    }, Dr = class extends Or {
      constructor(e2) {
        super(e2, "BrotliDecompress");
      }
    }, qr = class extends Ar {
      constructor(e2, t2) {
        (e2 = e2 || {}).flush = e2.flush || Sr.ZSTD_e_continue, e2.finishFlush = e2.finishFlush || Sr.ZSTD_e_end, e2.fullFlushFlag = Sr.ZSTD_e_flush, super(e2, t2);
      }
    }, Nr = class extends qr {
      constructor(e2) {
        super(e2, "ZstdCompress");
      }
    }, Fr = class extends qr {
      constructor(e2) {
        super(e2, "ZstdDecompress");
      }
    }, Ur = (e2, t2) => {
      t2[0] = 128;
      for (var r2 = t2.length; r2 > 1; r2--) t2[r2 - 1] = 255 & e2, e2 = Math.floor(e2 / 256);
    }, Lr = (e2, t2) => {
      t2[0] = 255;
      var r2 = false;
      e2 *= -1;
      for (var n2 = t2.length; n2 > 1; n2--) {
        var s2 = 255 & e2;
        e2 = Math.floor(e2 / 256), r2 ? t2[n2 - 1] = Gr(s2) : 0 === s2 ? t2[n2 - 1] = 0 : (r2 = true, t2[n2 - 1] = zr(s2));
      }
    }, $r = (e2) => {
      for (var t2 = e2.length, r2 = 0, n2 = false, s2 = t2 - 1; s2 > -1; s2--) {
        var o2, i2 = Number(e2[s2]);
        n2 ? o2 = Gr(i2) : 0 === i2 ? o2 = i2 : (n2 = true, o2 = zr(i2)), 0 !== o2 && (r2 -= o2 * Math.pow(256, t2 - s2 - 1));
      }
      return r2;
    }, jr = (e2) => {
      for (var t2 = e2.length, r2 = 0, n2 = t2 - 1; n2 > -1; n2--) {
        var s2 = Number(e2[n2]);
        0 !== s2 && (r2 += s2 * Math.pow(256, t2 - n2 - 1));
      }
      return r2;
    }, Gr = (e2) => 255 & (255 ^ e2), zr = (e2) => 1 + (255 ^ e2) & 255;
    ((e2, t2) => {
      for (var r2 in t2) Qe(e2, r2, { get: t2[r2], enumerable: true });
    })({}, { code: () => Yr, isCode: () => Wr, isName: () => Hr, name: () => Vr, normalFsTypes: () => Kr });
    var Wr = (e2) => Vr.has(e2), Hr = (e2) => Yr.has(e2), Kr = /* @__PURE__ */ new Set(["0", "", "1", "2", "3", "4", "5", "6", "7", "D"]), Vr = /* @__PURE__ */ new Map([["0", "File"], ["", "OldFile"], ["1", "Link"], ["2", "SymbolicLink"], ["3", "CharacterDevice"], ["4", "BlockDevice"], ["5", "Directory"], ["6", "FIFO"], ["7", "ContiguousFile"], ["g", "GlobalExtendedHeader"], ["x", "ExtendedHeader"], ["A", "SolarisACL"], ["D", "GNUDumpDir"], ["I", "Inode"], ["K", "NextFileHasLongLinkpath"], ["L", "NextFileHasLongPath"], ["M", "ContinuationFile"], ["N", "OldGnuLongPath"], ["S", "SparseFile"], ["V", "TapeVolumeHeader"], ["X", "OldExtendedHeader"]]), Yr = new Map(Array.from(Vr).map((e2) => [e2[1], e2[0]])), Qr = class {
      cksumValid = false;
      needPax = false;
      nullBlock = false;
      block;
      path;
      mode;
      uid;
      gid;
      size;
      cksum;
      #e = "Unsupported";
      linkpath;
      uname;
      gname;
      devmaj = 0;
      devmin = 0;
      atime;
      ctime;
      mtime;
      charset;
      comment;
      constructor(e2, t2 = 0, r2, n2) {
        Buffer.isBuffer(e2) ? this.decode(e2, t2 || 0, r2, n2) : e2 && this.#t(e2);
      }
      decode(e2, t2, r2, n2) {
        if (t2 || (t2 = 0), !(e2 && e2.length >= t2 + 512)) throw new Error("need 512 bytes for header");
        let s2 = Zr(e2, t2 + 156, 1), o2 = Kr.has(s2), i2 = o2 ? r2 : void 0, a2 = o2 ? n2 : void 0;
        if (this.path = i2?.path ?? Zr(e2, t2, 100), this.mode = i2?.mode ?? a2?.mode ?? rn(e2, t2 + 100, 8), this.uid = i2?.uid ?? a2?.uid ?? rn(e2, t2 + 108, 8), this.gid = i2?.gid ?? a2?.gid ?? rn(e2, t2 + 116, 8), this.size = void 0 === (c2 = i2?.size ?? a2?.size ?? rn(e2, t2 + 124, 12)) || c2 < 0 ? void 0 : c2, this.mtime = i2?.mtime ?? a2?.mtime ?? en(e2, t2 + 136, 12), this.cksum = rn(e2, t2 + 148, 12), a2 && this.#t(a2, true), i2 && this.#t(i2), Wr(s2) && (this.#e = s2 || "0"), "0" === this.#e && "/" === this.path.slice(-1) && (this.#e = "5"), "5" === this.#e && (this.size = 0), this.linkpath = Zr(e2, t2 + 157, 100), "ustar\x0000" === e2.subarray(t2 + 257, t2 + 265).toString()) if (this.uname = i2?.uname ?? a2?.uname ?? Zr(e2, t2 + 265, 32), this.gname = i2?.gname ?? a2?.gname ?? Zr(e2, t2 + 297, 32), this.devmaj = i2?.devmaj ?? a2?.devmaj ?? rn(e2, t2 + 329, 8) ?? 0, this.devmin = i2?.devmin ?? a2?.devmin ?? rn(e2, t2 + 337, 8) ?? 0, 0 !== e2[t2 + 475]) {
          let r3 = Zr(e2, t2 + 345, 155);
          this.path = r3 + "/" + this.path;
        } else {
          let s3 = Zr(e2, t2 + 345, 130);
          s3 && (this.path = s3 + "/" + this.path), this.atime = r2?.atime ?? n2?.atime ?? en(e2, t2 + 476, 12), this.ctime = r2?.ctime ?? n2?.ctime ?? en(e2, t2 + 488, 12);
        }
        var c2;
        let l2 = 256;
        for (let r3 = t2; r3 < t2 + 148; r3++) l2 += e2[r3];
        for (let r3 = t2 + 156; r3 < t2 + 512; r3++) l2 += e2[r3];
        this.cksumValid = l2 === this.cksum, void 0 === this.cksum && 256 === l2 && (this.nullBlock = true);
      }
      #t(e2, t2 = false) {
        Object.assign(this, Object.fromEntries(Object.entries(e2).filter(([e3, r2]) => !(null == r2 || "size" === e3 && Number(r2) < 0 || "path" === e3 && t2 || "linkpath" === e3 && t2 || "global" === e3))));
      }
      encode(e2, t2 = 0) {
        if (e2 || (e2 = this.block = Buffer.alloc(512)), "Unsupported" === this.#e && (this.#e = "0"), !(e2.length >= t2 + 512)) throw new Error("need 512 bytes for header");
        let r2 = this.ctime || this.atime ? 130 : 155, n2 = Xr(this.path || "", r2), s2 = n2[0], o2 = n2[1];
        this.needPax = !!n2[2], this.needPax = pn(e2, t2, 100, s2) || this.needPax, this.needPax = on(e2, t2 + 100, 8, this.mode) || this.needPax, this.needPax = on(e2, t2 + 108, 8, this.uid) || this.needPax, this.needPax = on(e2, t2 + 116, 8, this.gid) || this.needPax, this.needPax = on(e2, t2 + 124, 12, this.size) || this.needPax, this.needPax = un(e2, t2 + 136, 12, this.mtime) || this.needPax, e2[t2 + 156] = Number(this.#e.codePointAt(0)), this.needPax = pn(e2, t2 + 157, 100, this.linkpath) || this.needPax, e2.write("ustar\x0000", t2 + 257, 8), this.needPax = pn(e2, t2 + 265, 32, this.uname) || this.needPax, this.needPax = pn(e2, t2 + 297, 32, this.gname) || this.needPax, this.needPax = on(e2, t2 + 329, 8, this.devmaj) || this.needPax, this.needPax = on(e2, t2 + 337, 8, this.devmin) || this.needPax, this.needPax = pn(e2, t2 + 345, r2, o2) || this.needPax, 0 !== e2[t2 + 475] ? this.needPax = pn(e2, t2 + 345, 155, o2) || this.needPax : (this.needPax = pn(e2, t2 + 345, 130, o2) || this.needPax, this.needPax = un(e2, t2 + 476, 12, this.atime) || this.needPax, this.needPax = un(e2, t2 + 488, 12, this.ctime) || this.needPax);
        let i2 = 256;
        for (let r3 = t2; r3 < t2 + 148; r3++) i2 += e2[r3];
        for (let r3 = t2 + 156; r3 < t2 + 512; r3++) i2 += e2[r3];
        return this.cksum = i2, on(e2, t2 + 148, 8, this.cksum), this.cksumValid = true, this.needPax;
      }
      get type() {
        return "Unsupported" === this.#e ? this.#e : Vr.get(this.#e);
      }
      get typeKey() {
        return this.#e;
      }
      set type(e2) {
        let t2 = String(Yr.get(e2));
        if (Wr(t2) || "Unsupported" === t2) this.#e = t2;
        else {
          if (!Wr(e2)) throw new TypeError("invalid entry type: " + e2);
          this.#e = e2;
        }
      }
    }, Xr = (e2, t2) => {
      let r2, n2 = e2, s2 = "", o2 = I.posix.parse(e2).root || ".";
      if (Buffer.byteLength(n2) < 100) r2 = [n2, s2, false];
      else {
        s2 = I.posix.dirname(n2), n2 = I.posix.basename(n2);
        do {
          Buffer.byteLength(n2) <= 100 && Buffer.byteLength(s2) <= t2 ? r2 = [n2, s2, false] : Buffer.byteLength(n2) > 100 && Buffer.byteLength(s2) <= t2 ? r2 = [n2.slice(0, 99), s2, true] : (n2 = I.posix.join(I.posix.basename(s2), n2), s2 = I.posix.dirname(s2));
        } while (s2 !== o2 && void 0 === r2);
        r2 || (r2 = [e2.slice(0, 99), "", true]);
      }
      return r2;
    }, Zr = (e2, t2, r2) => e2.subarray(t2, t2 + r2).toString("utf8").replace(/\0.*/, ""), en = (e2, t2, r2) => tn(rn(e2, t2, r2)), tn = (e2) => void 0 === e2 ? void 0 : new Date(1e3 * e2), rn = (e2, t2, r2) => 128 & Number(e2[t2]) ? ((e3) => {
      let t3 = e3[0], r3 = 128 === t3 ? jr(e3.subarray(1, e3.length)) : 255 === t3 ? $r(e3) : null;
      if (null === r3) throw Error("invalid base256 encoding");
      if (!Number.isSafeInteger(r3)) throw Error("parsed number outside of javascript safe integer range");
      return r3;
    })(e2.subarray(t2, t2 + r2)) : nn(e2, t2, r2), nn = (e2, t2, r2) => ((e3) => isNaN(e3) ? void 0 : e3)(parseInt(e2.subarray(t2, t2 + r2).toString("utf8").replace(/\0.*$/, "").trim(), 8)), sn = { 12: 8589934591, 8: 2097151 }, on = (e2, t2, r2, n2) => void 0 !== n2 && (n2 > sn[r2] || n2 < 0 ? (((e3, t3) => {
      if (!Number.isSafeInteger(e3)) throw Error("cannot encode number outside of javascript safe integer range");
      e3 < 0 ? Lr(e3, t3) : Ur(e3, t3);
    })(n2, e2.subarray(t2, t2 + r2)), true) : (an(e2, t2, r2, n2), false)), an = (e2, t2, r2, n2) => e2.write(cn(n2, r2), t2, r2, "ascii"), cn = (e2, t2) => ln(Math.floor(e2).toString(8), t2), ln = (e2, t2) => (e2.length === t2 - 1 ? e2 : new Array(t2 - e2.length - 1).join("0") + e2 + " ") + "\0", un = (e2, t2, r2, n2) => void 0 !== n2 && on(e2, t2, r2, n2.getTime() / 1e3), dn = new Array(156).join("\0"), pn = (e2, t2, r2, n2) => void 0 !== n2 && (e2.write(n2 + dn, t2, r2, "utf8"), n2.length !== Buffer.byteLength(n2) || n2.length > r2), mn = class e2 {
      atime;
      mtime;
      ctime;
      charset;
      comment;
      gid;
      uid;
      gname;
      uname;
      linkpath;
      dev;
      ino;
      nlink;
      path;
      size;
      mode;
      global;
      constructor(e3, t2 = false) {
        this.atime = e3.atime, this.charset = e3.charset, this.comment = e3.comment, this.ctime = e3.ctime, this.dev = e3.dev, this.gid = e3.gid, this.global = t2, this.gname = e3.gname, this.ino = e3.ino, this.linkpath = e3.linkpath, this.mtime = e3.mtime, this.nlink = e3.nlink, this.path = e3.path, this.size = e3.size, this.uid = e3.uid, this.uname = e3.uname;
      }
      encode() {
        let e3 = this.encodeBody();
        if ("" === e3) return Buffer.allocUnsafe(0);
        let t2 = Buffer.byteLength(e3), r2 = 512 * Math.ceil(1 + t2 / 512), n2 = Buffer.allocUnsafe(r2);
        for (let e4 = 0; e4 < 512; e4++) n2[e4] = 0;
        new Qr({ path: ("PaxHeader/" + (0, I.basename)(this.path ?? "")).slice(0, 99), mode: this.mode || 420, uid: this.uid, gid: this.gid, size: t2, mtime: this.mtime, type: this.global ? "GlobalExtendedHeader" : "ExtendedHeader", linkpath: "", uname: this.uname || "", gname: this.gname || "", devmaj: 0, devmin: 0, atime: this.atime, ctime: this.ctime }).encode(n2), n2.write(e3, 512, t2, "utf8");
        for (let e4 = t2 + 512; e4 < n2.length; e4++) n2[e4] = 0;
        return n2;
      }
      encodeBody() {
        return this.encodeField("path") + this.encodeField("ctime") + this.encodeField("atime") + this.encodeField("dev") + this.encodeField("ino") + this.encodeField("nlink") + this.encodeField("charset") + this.encodeField("comment") + this.encodeField("gid") + this.encodeField("gname") + this.encodeField("linkpath") + this.encodeField("mtime") + this.encodeField("size") + this.encodeField("uid") + this.encodeField("uname");
      }
      encodeField(e3) {
        if (void 0 === this[e3]) return "";
        let t2 = this[e3], r2 = " " + ("dev" === e3 || "ino" === e3 || "nlink" === e3 ? "SCHILY." : "") + e3 + "=" + (t2 instanceof Date ? t2.getTime() / 1e3 : t2) + "\n", n2 = Buffer.byteLength(r2), s2 = Math.floor(Math.log(n2) / Math.log(10)) + 1;
        return n2 + s2 >= Math.pow(10, s2) && (s2 += 1), s2 + n2 + r2;
      }
      static parse(t2, r2, n2 = false) {
        return new e2(hn(fn(t2), r2), n2);
      }
    }, hn = (e2, t2) => t2 ? Object.assign({}, t2, e2) : e2, fn = (e2) => e2.replace(/\n$/, "").split("\n").reduce(gn, /* @__PURE__ */ Object.create(null)), gn = (e2, t2) => {
      let r2 = parseInt(t2, 10);
      if (r2 !== Buffer.byteLength(t2) + 1) return e2;
      let n2 = (t2 = t2.slice((r2 + " ").length)).split("="), s2 = n2.shift();
      if (!s2) return e2;
      let o2 = s2.replace(/^SCHILY\.(dev|ino|nlink)/, "$1"), i2 = n2.join("=").replace(/\0.*/, "");
      switch (o2) {
        case "path":
        case "linkpath":
        case "type":
        case "charset":
        case "comment":
        case "gname":
        case "uname":
          e2[o2] = i2;
          break;
        case "ctime":
        case "atime":
        case "mtime":
          e2[o2] = new Date(1e3 * Number(i2));
          break;
        case "size":
          let t3 = +i2;
          t3 >= 0 && (e2[o2] = t3);
          break;
        case "gid":
        case "uid":
        case "dev":
        case "ino":
        case "nlink":
        case "mode":
          e2[o2] = +i2;
      }
      return e2;
    }, yn = "win32" !== (process.env.TESTING_TAR_FAKE_PLATFORM || process.platform) ? (e2) => String(e2) : (e2) => String(e2).replaceAll(/\\/g, "/"), wn = class extends qt {
      extended;
      globalExtended;
      header;
      startBlockSize;
      blockRemain;
      remain;
      type;
      meta = false;
      ignore = false;
      path;
      mode;
      uid;
      gid;
      uname;
      gname;
      size = 0;
      mtime;
      atime;
      ctime;
      linkpath;
      dev;
      ino;
      nlink;
      invalid = false;
      absolute;
      unsupported = false;
      constructor(e2, t2, r2) {
        switch (super({}), this.pause(), this.extended = t2, this.globalExtended = r2, this.header = e2, this.remain = e2.size ?? 0, this.startBlockSize = 512 * Math.ceil(this.remain / 512), this.blockRemain = this.startBlockSize, this.type = e2.type, this.type) {
          case "File":
          case "OldFile":
          case "Link":
          case "SymbolicLink":
          case "CharacterDevice":
          case "BlockDevice":
          case "Directory":
          case "FIFO":
          case "ContiguousFile":
          case "GNUDumpDir":
            break;
          case "NextFileHasLongLinkpath":
          case "NextFileHasLongPath":
          case "OldGnuLongPath":
          case "GlobalExtendedHeader":
          case "ExtendedHeader":
          case "OldExtendedHeader":
            this.meta = true;
            break;
          default:
            this.ignore = true;
        }
        if (!e2.path) throw new Error("no path provided for tar.ReadEntry");
        this.path = yn(e2.path), this.mode = e2.mode, this.mode && (this.mode = 4095 & this.mode), this.uid = e2.uid, this.gid = e2.gid, this.uname = e2.uname, this.gname = e2.gname, this.size = this.remain, this.mtime = e2.mtime, this.atime = e2.atime, this.ctime = e2.ctime, this.linkpath = e2.linkpath ? yn(e2.linkpath) : void 0, this.uname = e2.uname, this.gname = e2.gname, t2 && this.#e(t2), r2 && this.#e(r2, true);
      }
      write(e2) {
        let t2 = e2.length;
        if (t2 > this.blockRemain) throw new Error("writing more to entry than is appropriate");
        let r2 = this.remain, n2 = this.blockRemain;
        return this.remain = Math.max(0, r2 - t2), this.blockRemain = Math.max(0, n2 - t2), !!this.ignore || (r2 >= t2 ? super.write(e2) : super.write(e2.subarray(0, r2)));
      }
      #e(e2, t2 = false) {
        e2.path && (e2.path = yn(e2.path)), e2.linkpath && (e2.linkpath = yn(e2.linkpath)), Object.assign(this, Object.fromEntries(Object.entries(e2).filter(([e3, r2]) => !(null == r2 || "path" === e3 && t2))));
      }
    }, vn = (e2, t2, r2, n2 = {}) => {
      e2.file && (n2.file = e2.file), e2.cwd && (n2.cwd = e2.cwd), n2.code = r2 instanceof Error && r2.code || t2, n2.tarCode = t2, e2.strict || false === n2.recoverable ? r2 instanceof Error ? e2.emit("error", Object.assign(r2, n2)) : e2.emit("error", Object.assign(new Error(`${t2}: ${r2}`), n2)) : (r2 instanceof Error && (n2 = Object.assign(r2, n2), r2 = r2.message), e2.emit("warn", t2, r2, n2));
    }, _n = Buffer.from([31, 139]), bn = Buffer.from([40, 181, 47, 253]), Sn = Math.max(_n.length, bn.length), kn = /* @__PURE__ */ Symbol("state"), xn = /* @__PURE__ */ Symbol("writeEntry"), En = /* @__PURE__ */ Symbol("readEntry"), In = /* @__PURE__ */ Symbol("nextEntry"), Tn = /* @__PURE__ */ Symbol("processEntry"), Cn = /* @__PURE__ */ Symbol("extendedHeader"), Pn = /* @__PURE__ */ Symbol("globalExtendedHeader"), An = /* @__PURE__ */ Symbol("meta"), Rn = /* @__PURE__ */ Symbol("emitMeta"), Mn = /* @__PURE__ */ Symbol("buffer"), Jn = /* @__PURE__ */ Symbol("queue"), On = /* @__PURE__ */ Symbol("ended"), Bn = /* @__PURE__ */ Symbol("emittedEnd"), Dn = /* @__PURE__ */ Symbol("emit"), qn = /* @__PURE__ */ Symbol("unzip"), Nn = /* @__PURE__ */ Symbol("consumeChunk"), Fn = /* @__PURE__ */ Symbol("consumeChunkSub"), Un = /* @__PURE__ */ Symbol("consumeBody"), Ln = /* @__PURE__ */ Symbol("consumeMeta"), $n = /* @__PURE__ */ Symbol("consumeHeader"), jn = /* @__PURE__ */ Symbol("consuming"), Gn = /* @__PURE__ */ Symbol("bufferConcat"), zn = /* @__PURE__ */ Symbol("maybeEnd"), Wn = /* @__PURE__ */ Symbol("writing"), Hn = /* @__PURE__ */ Symbol("aborted"), Kn = /* @__PURE__ */ Symbol("onDone"), Vn = /* @__PURE__ */ Symbol("sawValidEntry"), Yn = /* @__PURE__ */ Symbol("sawNullBlock"), Qn = /* @__PURE__ */ Symbol("sawEOF"), Xn = /* @__PURE__ */ Symbol("closeStream"), Zn = /* @__PURE__ */ Symbol("compressedBytesRead"), es = /* @__PURE__ */ Symbol("decompressedBytesRead"), ts = /* @__PURE__ */ Symbol("checkDecompressionRatio"), rs = () => true, ns = class extends Ue.EventEmitter {
      file;
      strict;
      maxMetaEntrySize;
      filter;
      brotli;
      zstd;
      maxDecompressionRatio;
      writable = true;
      readable = false;
      [Jn] = [];
      [Mn];
      [En];
      [xn];
      [kn] = "begin";
      [An] = "";
      [Cn];
      [Pn];
      [On] = false;
      [qn];
      [Hn] = false;
      [Vn];
      [Yn] = false;
      [Qn] = false;
      [Wn] = false;
      [jn] = false;
      [Bn] = false;
      [Zn] = 0;
      [es] = 0;
      constructor(e2 = {}) {
        super(), this.file = e2.file || "", this.on(Kn, () => {
          ("begin" === this[kn] || false === this[Vn]) && this.warn("TAR_BAD_ARCHIVE", "Unrecognized archive format");
        }), e2.ondone ? this.on(Kn, e2.ondone) : this.on(Kn, () => {
          this.emit("prefinish"), this.emit("finish"), this.emit("end");
        }), this.strict = !!e2.strict, this.maxDecompressionRatio = "number" == typeof e2.maxDecompressionRatio ? e2.maxDecompressionRatio : 1e3, this.maxMetaEntrySize = e2.maxMetaEntrySize || 1048576, this.filter = "function" == typeof e2.filter ? e2.filter : rs;
        let t2 = e2.file && (e2.file.endsWith(".tar.br") || e2.file.endsWith(".tbr"));
        this.brotli = e2.gzip || e2.zstd || void 0 === e2.brotli ? !!t2 && void 0 : e2.brotli;
        let r2 = e2.file && (e2.file.endsWith(".tar.zst") || e2.file.endsWith(".tzst"));
        this.zstd = e2.gzip || e2.brotli || void 0 === e2.zstd ? !!r2 || void 0 : e2.zstd, this.on("end", () => this[Xn]()), "function" == typeof e2.onwarn && this.on("warn", e2.onwarn), "function" == typeof e2.onReadEntry && this.on("entry", e2.onReadEntry);
      }
      warn(e2, t2, r2 = {}) {
        vn(this, e2, t2, r2);
      }
      [$n](e2, t2) {
        let r2;
        void 0 === this[Vn] && (this[Vn] = false);
        try {
          r2 = new Qr(e2, t2, this[Cn], this[Pn]);
        } catch (e3) {
          return this.warn("TAR_ENTRY_INVALID", e3);
        }
        if (r2.nullBlock) this[Yn] ? (this[Qn] = true, "begin" === this[kn] && (this[kn] = "header"), this[Dn]("eof")) : (this[Yn] = true, this[Dn]("nullBlock"));
        else if (this[Yn] = false, r2.cksumValid) if (r2.path) {
          let e3 = r2.type;
          if (/^(Symbolic)?Link$/.test(e3) && !r2.linkpath) this.warn("TAR_ENTRY_INVALID", "linkpath required", { header: r2 });
          else if (/^(Symbolic)?Link$/.test(e3) || /^(Global)?ExtendedHeader$/.test(e3) || !r2.linkpath) {
            let e4 = this[xn] = new wn(r2, this[Cn], this[Pn]);
            if (!this[Vn]) if (e4.remain) {
              let t3 = () => {
                e4.invalid || (this[Vn] = true);
              };
              e4.on("end", t3);
            } else this[Vn] = true;
            e4.meta ? e4.size > this.maxMetaEntrySize ? (e4.ignore = true, this[Dn]("ignoredEntry", e4), this[kn] = "ignore", e4.resume()) : e4.size > 0 && (this[An] = "", e4.on("data", (e5) => this[An] += e5), this[kn] = "meta") : (this[Cn] = void 0, e4.ignore = e4.ignore || !this.filter(e4.path, e4), e4.ignore ? (this[Dn]("ignoredEntry", e4), this[kn] = e4.remain ? "ignore" : "header", e4.resume()) : (e4.remain ? this[kn] = "body" : (this[kn] = "header", e4.end()), this[En] ? this[Jn].push(e4) : (this[Jn].push(e4), this[In]())));
          } else this.warn("TAR_ENTRY_INVALID", "linkpath forbidden", { header: r2 });
        } else this.warn("TAR_ENTRY_INVALID", "path is required", { header: r2 });
        else this.warn("TAR_ENTRY_INVALID", "checksum failure", { header: r2 });
      }
      [Xn]() {
        queueMicrotask(() => this.emit("close"));
      }
      [Tn](e2) {
        let t2 = true;
        if (e2) if (Array.isArray(e2)) {
          let [t3, ...r2] = e2;
          this.emit(t3, ...r2);
        } else this[En] = e2, this.emit("entry", e2), e2.emittedEnd || (e2.on("end", () => this[In]()), t2 = false);
        else this[En] = void 0, t2 = false;
        return t2;
      }
      [In]() {
        do {
        } while (this[Tn](this[Jn].shift()));
        if (0 === this[Jn].length) {
          let e2 = this[En];
          !e2 || e2.flowing || e2.size === e2.remain ? this[Wn] || this.emit("drain") : e2.once("drain", () => this.emit("drain"));
        }
      }
      [Un](e2, t2) {
        let r2 = this[xn];
        if (!r2) throw new Error("attempt to consume body without entry??");
        let n2 = r2.blockRemain ?? 0, s2 = n2 >= e2.length && 0 === t2 ? e2 : e2.subarray(t2, t2 + n2);
        return r2.write(s2), r2.blockRemain || (this[kn] = "header", this[xn] = void 0, r2.end()), s2.length;
      }
      [Ln](e2, t2) {
        let r2 = this[xn], n2 = this[Un](e2, t2);
        return !this[xn] && r2 && this[Rn](r2), n2;
      }
      [Dn](e2, t2, r2) {
        0 !== this[Jn].length || this[En] ? this[Jn].push([e2, t2, r2]) : this.emit(e2, t2, r2);
      }
      [Rn](e2) {
        switch (this[Dn]("meta", this[An]), e2.type) {
          case "ExtendedHeader":
          case "OldExtendedHeader":
            this[Cn] = mn.parse(this[An], this[Cn], false);
            break;
          case "GlobalExtendedHeader":
            this[Pn] = mn.parse(this[An], this[Pn], true);
            break;
          case "NextFileHasLongPath":
          case "OldGnuLongPath": {
            let e3 = this[Cn] ?? /* @__PURE__ */ Object.create(null);
            this[Cn] = e3, e3.path = this[An].replace(/\0.*/, "");
            break;
          }
          case "NextFileHasLongLinkpath": {
            let e3 = this[Cn] || /* @__PURE__ */ Object.create(null);
            this[Cn] = e3, e3.linkpath = this[An].replace(/\0.*/, "");
            break;
          }
          default:
            throw new Error("unknown meta: " + e2.type);
        }
      }
      abort(e2) {
        if (!this[Hn]) {
          if (this[qn]) {
            let e3 = this[qn];
            e3.write = () => true, e3.end = () => e3, e3.emit = () => false, e3.destroy?.();
          }
          this[Hn] = true, this.emit("abort", e2), this.warn("TAR_ABORT", e2, { recoverable: false });
        }
      }
      [ts](e2) {
        this[es] += e2.length;
        let t2 = this[es] / this[Zn];
        return !(t2 > this.maxDecompressionRatio) || (this.abort(new Error(`max decompression ratio exceeded: ${t2.toFixed(2)} > ${this.maxDecompressionRatio}`)), false);
      }
      write(e2, t2, r2) {
        if ("function" == typeof t2 && (r2 = t2, t2 = void 0), "string" == typeof e2 && (e2 = Buffer.from(e2, "string" == typeof t2 ? t2 : "utf8")), this[Hn]) return r2?.(), false;
        if ((void 0 === this[qn] || void 0 === this.brotli && false === this[qn]) && e2) {
          if (this[Mn] && (e2 = Buffer.concat([this[Mn], e2]), this[Mn] = void 0), e2.length < Sn) return this[Mn] = e2, r2?.(), true;
          for (let t4 = 0; void 0 === this[qn] && t4 < _n.length; t4++) e2[t4] !== _n[t4] && (this[qn] = false);
          let t3 = false;
          if (false === this[qn] && false !== this.zstd) {
            t3 = true;
            for (let r3 = 0; r3 < bn.length; r3++) if (e2[r3] !== bn[r3]) {
              t3 = false;
              break;
            }
          }
          let n3 = void 0 === this.brotli && !t3;
          if (false === this[qn] && n3) if (e2.length < 512) {
            if (!this[On]) return this[Mn] = e2, r2?.(), true;
            this.brotli = true;
          } else try {
            new Qr(e2.subarray(0, 512)), this.brotli = false;
          } catch {
            this.brotli = true;
          }
          if (void 0 === this[qn] || false === this[qn] && (this.brotli || t3)) {
            let n4 = this[On];
            this[On] = false, this[qn] = void 0 === this[qn] ? new Jr({}) : t3 ? new Fr({}) : new Dr({}), this[qn].on("data", (e3) => {
              this[ts](e3) && this[Nn](e3);
            }), this[qn].on("error", (e3) => {
              this[Hn] || this.abort(e3);
            }), this[qn].on("end", () => {
              this[On] = true, this[Nn]();
            }), this[Wn] = true, this[Zn] += e2.length;
            let s2 = !!this[qn][n4 ? "end" : "write"](e2);
            return this[Wn] = false, r2?.(), s2;
          }
        }
        this[Wn] = true, this[qn] ? (this[Zn] += e2.length, this[qn].write(e2)) : this[Nn](e2), this[Wn] = false;
        let n2 = !(this[Jn].length > 0) && (!this[En] || this[En].flowing);
        return !n2 && 0 === this[Jn].length && this[En]?.once("drain", () => this.emit("drain")), r2?.(), n2;
      }
      [Gn](e2) {
        e2 && !this[Hn] && (this[Mn] = this[Mn] ? Buffer.concat([this[Mn], e2]) : e2);
      }
      [zn]() {
        if (this[On] && !this[Bn] && !this[Hn] && !this[jn]) {
          this[Bn] = true;
          let e2 = this[xn];
          if (e2?.blockRemain) {
            let t2 = this[Mn] ? this[Mn].length : 0;
            this.warn("TAR_BAD_ARCHIVE", `Truncated input (needed ${e2.blockRemain} more bytes, only ${t2} available)`, { entry: e2 }), this[Mn] && e2.write(this[Mn]), e2.end();
          }
          this[Dn](Kn);
        }
      }
      [Nn](e2) {
        if (this[jn] && e2) this[Gn](e2);
        else if (e2 || this[Mn]) {
          if (e2) {
            if (this[jn] = true, this[Mn]) {
              this[Gn](e2);
              let t2 = this[Mn];
              this[Mn] = void 0, this[Fn](t2);
            } else this[Fn](e2);
            for (; this[Mn] && this[Mn]?.length >= 512 && !this[Hn] && !this[Qn]; ) {
              let e3 = this[Mn];
              this[Mn] = void 0, this[Fn](e3);
            }
            this[jn] = false;
          }
        } else this[zn]();
        (!this[Mn] || this[On]) && this[zn]();
      }
      [Fn](e2) {
        let t2 = 0, r2 = e2.length;
        for (; t2 + 512 <= r2 && !this[Hn] && !this[Qn]; ) switch (this[kn]) {
          case "begin":
          case "header":
            this[$n](e2, t2), t2 += 512;
            break;
          case "ignore":
          case "body":
            t2 += this[Un](e2, t2);
            break;
          case "meta":
            t2 += this[Ln](e2, t2);
            break;
          default:
            throw new Error("invalid state: " + this[kn]);
        }
        t2 < r2 && (this[Mn] = this[Mn] ? Buffer.concat([e2.subarray(t2), this[Mn]]) : e2.subarray(t2));
      }
      end(e2, t2, r2) {
        return "function" == typeof e2 && (r2 = e2, t2 = void 0, e2 = void 0), "function" == typeof t2 && (r2 = t2, t2 = void 0), "string" == typeof e2 && (e2 = Buffer.from(e2, t2)), r2 && this.once("finish", r2), this[Hn] || (this[qn] ? (e2 && (this[Zn] += e2.length, this[qn].write(e2)), this[qn].end()) : (this[On] = true, (void 0 === this.brotli || void 0 === this.zstd) && (e2 = e2 || Buffer.alloc(0)), e2 && this.write(e2), this[zn]())), this;
      }
    }, ss = (e2) => {
      let t2 = e2.length - 1, r2 = -1;
      for (; t2 > -1 && "/" === e2.charAt(t2); ) r2 = t2, t2--;
      return -1 === r2 ? e2 : e2.slice(0, r2);
    }, os = (e2, t2) => {
      let r2 = new Map(t2.map((e3) => [ss(e3), true])), n2 = e2.filter, s2 = (e3, t3 = "", n3 = 0) => {
        if (n3 >= 100) return r2.set(e3, false), false;
        let o2, i2 = t3 || (0, ze.parse)(e3).root || ".";
        if (e3 === i2) o2 = false;
        else {
          let t4 = r2.get(e3);
          o2 = void 0 !== t4 ? t4 : s2((0, ze.dirname)(e3), i2, n3 + 1);
        }
        return r2.set(e3, o2), o2;
      };
      e2.filter = n2 ? (e3, t3) => n2(e3, t3) && s2(ss(e3)) : (e3) => s2(ss(e3));
    }, is = _r((e2) => {
      let t2, r2 = new ns(e2), n2 = e2.file;
      try {
        t2 = Ge.openSync(n2, "r");
        let s2 = Ge.fstatSync(t2), o2 = e2.maxReadSize || 16777216;
        if (s2.size < o2) {
          let e3 = Buffer.allocUnsafe(s2.size), n3 = Ge.readSync(t2, e3, 0, s2.size, 0);
          r2.end(n3 === e3.byteLength ? e3 : e3.subarray(0, n3));
        } else {
          let e3 = 0, n3 = Buffer.allocUnsafe(o2);
          for (; e3 < s2.size; ) {
            let s3 = Ge.readSync(t2, n3, 0, o2, e3);
            if (0 === s3) break;
            e3 += s3, r2.write(n3.subarray(0, s3));
          }
          r2.end();
        }
      } finally {
        if ("number" == typeof t2) try {
          Ge.closeSync(t2);
        } catch {
        }
      }
    }, (e2, t2) => {
      let r2 = new ns(e2), n2 = e2.maxReadSize || 16777216, s2 = e2.file;
      return new Promise((e3, t3) => {
        r2.on("error", t3), r2.on("end", e3), Ge.stat(s2, (e4, o2) => {
          if (e4) t3(e4);
          else {
            let e5 = new mr(s2, { readSize: n2, size: o2.size });
            e5.on("error", t3), e5.pipe(r2);
          }
        });
      });
    }, (e2) => new ns(e2), (e2) => new ns(e2), (e2, t2) => {
      t2?.length && os(e2, t2), e2.noResume || ((e3) => {
        let t3 = e3.onReadEntry;
        e3.onReadEntry = t3 ? (e4) => {
          t3(e4), e4.resume();
        } : (e4) => e4.resume();
      })(e2);
    }), as = (e2, t2, r2) => (e2 &= 4095, r2 && (e2 = -19 & e2 | 384), t2 && (256 & e2 && (e2 |= 64), 32 & e2 && (e2 |= 8), 4 & e2 && (e2 |= 1)), e2), { isAbsolute: cs, parse: ls } = I.win32, us = (e2) => {
      let t2 = "", r2 = ls(e2);
      for (; cs(e2) || r2.root; ) {
        let n2 = "/" === e2.charAt(0) && "//?/" !== e2.slice(0, 4) ? "/" : r2.root;
        e2 = e2.slice(n2.length), t2 += n2, r2 = ls(e2);
      }
      return [t2, e2];
    }, ds = ["|", "<", ">", "?", ":"], ps = ds.map((e2) => String.fromCodePoint(61440 + Number(e2.codePointAt(0)))), ms = new Map(ds.map((e2, t2) => [e2, ps[t2]])), hs = new Map(ps.map((e2, t2) => [e2, ds[t2]])), fs = (e2) => ds.reduce((e3, t2) => e3.split(t2).join(ms.get(t2)), e2), gs = (e2, t2) => t2 ? (e2 = yn(e2).replace(/^\.(\/|$)/, ""), ss(t2) + "/" + e2) : yn(e2), ys = /* @__PURE__ */ Symbol("process"), ws = /* @__PURE__ */ Symbol("file"), vs = /* @__PURE__ */ Symbol("directory"), _s = /* @__PURE__ */ Symbol("symlink"), bs = /* @__PURE__ */ Symbol("hardlink"), Ss = /* @__PURE__ */ Symbol("header"), ks = /* @__PURE__ */ Symbol("read"), xs = /* @__PURE__ */ Symbol("lstat"), Es = /* @__PURE__ */ Symbol("onlstat"), Is = /* @__PURE__ */ Symbol("onread"), Ts = /* @__PURE__ */ Symbol("onreadlink"), Cs = /* @__PURE__ */ Symbol("openfile"), Ps = /* @__PURE__ */ Symbol("onopenfile"), As = /* @__PURE__ */ Symbol("close"), Rs = /* @__PURE__ */ Symbol("mode"), Ms = /* @__PURE__ */ Symbol("awaitDrain"), Js = /* @__PURE__ */ Symbol("ondrain"), Os = /* @__PURE__ */ Symbol("prefix"), Bs = class extends qt {
      path;
      portable;
      myuid = process.getuid && process.getuid() || 0;
      myuser = process.env.USER || "";
      maxReadSize;
      linkCache;
      statCache;
      preservePaths;
      cwd;
      strict;
      mtime;
      noPax;
      noMtime;
      prefix;
      fd;
      blockLen = 0;
      blockRemain = 0;
      buf;
      pos = 0;
      remain = 0;
      length = 0;
      offset = 0;
      win32;
      absolute;
      header;
      type;
      linkpath;
      stat;
      onWriteEntry;
      #e = false;
      constructor(e2, t2 = {}) {
        let r2 = vr(t2);
        super(), this.path = yn(e2), this.portable = !!r2.portable, this.maxReadSize = r2.maxReadSize || 16777216, this.linkCache = r2.linkCache || /* @__PURE__ */ new Map(), this.statCache = r2.statCache || /* @__PURE__ */ new Map(), this.preservePaths = !!r2.preservePaths, this.cwd = yn(r2.cwd || process.cwd()), this.strict = !!r2.strict, this.noPax = !!r2.noPax, this.noMtime = !!r2.noMtime, this.mtime = r2.mtime, this.prefix = r2.prefix ? yn(r2.prefix) : void 0, this.onWriteEntry = r2.onWriteEntry, "function" == typeof r2.onwarn && this.on("warn", r2.onwarn);
        let n2 = false;
        if (!this.preservePaths) {
          let [e3, t3] = us(this.path);
          e3 && "string" == typeof t3 && (this.path = t3, n2 = e3);
        }
        var s2;
        this.win32 = !!r2.win32 || "win32" === process.platform, this.win32 && (this.path = (s2 = this.path.replaceAll(/\\/g, "/"), ps.reduce((e3, t3) => e3.split(t3).join(hs.get(t3)), s2)), e2 = e2.replaceAll(/\\/g, "/")), this.absolute = yn(r2.absolute || ze.resolve(this.cwd, e2)), "" === this.path && (this.path = "./"), n2 && this.warn("TAR_ENTRY_INFO", `stripping ${n2} from absolute path`, { entry: this, path: n2 + this.path });
        let o2 = this.statCache.get(this.absolute);
        o2 ? this[Es](o2) : this[xs]();
      }
      warn(e2, t2, r2 = {}) {
        return vn(this, e2, t2, r2);
      }
      emit(e2, ...t2) {
        return "error" === e2 && (this.#e = true), super.emit(e2, ...t2);
      }
      [xs]() {
        Le.lstat(this.absolute, (e2, t2) => {
          if (e2) return this.emit("error", e2);
          this[Es](t2);
        });
      }
      [Es](e2) {
        this.statCache.set(this.absolute, e2), this.stat = e2, e2.isFile() || (e2.size = 0), this.type = Ns(e2), this.emit("stat", e2), this[ys]();
      }
      [ys]() {
        switch (this.type) {
          case "File":
            return this[ws]();
          case "Directory":
            return this[vs]();
          case "SymbolicLink":
            return this[_s]();
          default:
            return this.end();
        }
      }
      [Rs](e2) {
        return as(e2, "Directory" === this.type, this.portable);
      }
      [Os](e2) {
        return gs(e2, this.prefix);
      }
      [Ss]() {
        if (!this.stat) throw new Error("cannot write header before stat");
        "Directory" === this.type && this.portable && (this.noMtime = true), this.onWriteEntry?.(this), this.header = new Qr({ path: this[Os](this.path), linkpath: "Link" === this.type && void 0 !== this.linkpath ? this[Os](this.linkpath) : this.linkpath, mode: this[Rs](this.stat.mode), uid: this.portable ? void 0 : this.stat.uid, gid: this.portable ? void 0 : this.stat.gid, size: this.stat.size, mtime: this.noMtime ? void 0 : this.mtime || this.stat.mtime, type: "Unsupported" === this.type ? void 0 : this.type, uname: this.portable ? void 0 : this.stat.uid === this.myuid ? this.myuser : "", atime: this.portable ? void 0 : this.stat.atime, ctime: this.portable ? void 0 : this.stat.ctime }), this.header.encode() && !this.noPax && super.write(new mn({ atime: this.portable ? void 0 : this.header.atime, ctime: this.portable ? void 0 : this.header.ctime, gid: this.portable ? void 0 : this.header.gid, mtime: this.noMtime ? void 0 : this.mtime || this.header.mtime, path: this[Os](this.path), linkpath: "Link" === this.type && void 0 !== this.linkpath ? this[Os](this.linkpath) : this.linkpath, size: this.header.size, uid: this.portable ? void 0 : this.header.uid, uname: this.portable ? void 0 : this.header.uname, dev: this.portable ? void 0 : this.stat.dev, ino: this.portable ? void 0 : this.stat.ino, nlink: this.portable ? void 0 : this.stat.nlink }).encode());
        let e2 = this.header?.block;
        if (!e2) throw new Error("failed to encode header");
        super.write(e2);
      }
      [vs]() {
        if (!this.stat) throw new Error("cannot create directory entry without stat");
        "/" !== this.path.slice(-1) && (this.path += "/"), this.stat.size = 0, this[Ss](), this.end();
      }
      [_s]() {
        Le.readlink(this.absolute, (e2, t2) => {
          if (e2) return this.emit("error", e2);
          this[Ts](t2);
        });
      }
      [Ts](e2) {
        this.linkpath = yn(e2), this[Ss](), this.end();
      }
      [bs](e2) {
        if (!this.stat) throw new Error("cannot create link entry without stat");
        this.type = "Link", this.linkpath = yn(ze.relative(this.cwd, e2)), this.stat.size = 0, this[Ss](), this.end();
      }
      [ws]() {
        if (!this.stat) throw new Error("cannot create file entry without stat");
        if (this.stat.nlink > 1) {
          let e2 = `${this.stat.dev}:${this.stat.ino}`, t2 = this.linkCache.get(e2);
          if (0 === t2?.indexOf(this.cwd)) return this[bs](t2);
          this.linkCache.set(e2, this.absolute);
        }
        if (this[Ss](), 0 === this.stat.size) return this.end();
        this[Cs]();
      }
      [Cs]() {
        Le.open(this.absolute, "r", (e2, t2) => {
          if (e2) return this.emit("error", e2);
          this[Ps](t2);
        });
      }
      [Ps](e2) {
        if (this.fd = e2, this.#e) return this[As]();
        if (!this.stat) throw new Error("should stat before calling onopenfile");
        this.blockLen = 512 * Math.ceil(this.stat.size / 512), this.blockRemain = this.blockLen;
        let t2 = Math.min(this.blockLen, this.maxReadSize);
        this.buf = Buffer.allocUnsafe(t2), this.offset = 0, this.pos = 0, this.remain = this.stat.size, this.length = this.buf.length, this[ks]();
      }
      [ks]() {
        let { fd: e2, buf: t2, offset: r2, length: n2, pos: s2 } = this;
        if (void 0 === e2 || void 0 === t2) throw new Error("cannot read file without first opening");
        Le.read(e2, t2, r2, n2, s2, (e3, t3) => {
          if (e3) return this[As](() => this.emit("error", e3));
          this[Is](t3);
        });
      }
      [As](e2 = () => {
      }) {
        void 0 !== this.fd && Le.close(this.fd, e2);
      }
      [Is](e2) {
        if (e2 <= 0 && this.remain > 0) {
          let e3 = Object.assign(new Error("encountered unexpected EOF"), { path: this.absolute, syscall: "read", code: "EOF" });
          return this[As](() => this.emit("error", e3));
        }
        if (e2 > this.remain) {
          let e3 = Object.assign(new Error("did not encounter expected EOF"), { path: this.absolute, syscall: "read", code: "EOF" });
          return this[As](() => this.emit("error", e3));
        }
        if (!this.buf) throw new Error("should have created buffer prior to reading");
        if (e2 === this.remain) for (let t3 = e2; t3 < this.length && e2 < this.blockRemain; t3++) this.buf[t3 + this.offset] = 0, e2++, this.remain++;
        let t2 = 0 === this.offset && e2 === this.buf.length ? this.buf : this.buf.subarray(this.offset, this.offset + e2);
        this.write(t2) ? this[Js]() : this[Ms](() => this[Js]());
      }
      [Ms](e2) {
        this.once("drain", e2);
      }
      write(e2, t2, r2) {
        if ("function" == typeof t2 && (r2 = t2, t2 = void 0), "string" == typeof e2 && (e2 = Buffer.from(e2, "string" == typeof t2 ? t2 : "utf8")), this.blockRemain < e2.length) {
          let e3 = Object.assign(new Error("writing more data than expected"), { path: this.absolute });
          return this.emit("error", e3);
        }
        return this.remain -= e2.length, this.blockRemain -= e2.length, this.pos += e2.length, this.offset += e2.length, super.write(e2, null, r2);
      }
      [Js]() {
        if (!this.remain) return this.blockRemain && super.write(Buffer.alloc(this.blockRemain)), this[As]((e2) => e2 ? this.emit("error", e2) : this.end());
        if (!this.buf) throw new Error("buffer lost somehow in ONDRAIN");
        this.offset >= this.length && (this.buf = Buffer.allocUnsafe(Math.min(this.blockRemain, this.buf.length)), this.offset = 0), this.length = this.buf.length - this.offset, this[ks]();
      }
    }, Ds = class extends Bs {
      sync = true;
      [xs]() {
        this[Es](Le.lstatSync(this.absolute));
      }
      [_s]() {
        this[Ts](Le.readlinkSync(this.absolute));
      }
      [Cs]() {
        this[Ps](Le.openSync(this.absolute, "r"));
      }
      [ks]() {
        let e2 = true;
        try {
          let { fd: t2, buf: r2, offset: n2, length: s2, pos: o2 } = this;
          if (void 0 === t2 || void 0 === r2) throw new Error("fd and buf must be set in READ method");
          let i2 = Le.readSync(t2, r2, n2, s2, o2);
          this[Is](i2), e2 = false;
        } finally {
          if (e2) try {
            this[As](() => {
            });
          } catch {
          }
        }
      }
      [Ms](e2) {
        e2();
      }
      [As](e2 = () => {
      }) {
        void 0 !== this.fd && Le.closeSync(this.fd), e2();
      }
    }, qs = class extends qt {
      blockLen = 0;
      blockRemain = 0;
      buf = 0;
      pos = 0;
      remain = 0;
      length = 0;
      preservePaths;
      portable;
      strict;
      noPax;
      noMtime;
      readEntry;
      type;
      prefix;
      path;
      mode;
      uid;
      gid;
      uname;
      gname;
      header;
      mtime;
      atime;
      ctime;
      linkpath;
      size;
      onWriteEntry;
      warn(e2, t2, r2 = {}) {
        return vn(this, e2, t2, r2);
      }
      constructor(e2, t2 = {}) {
        let r2 = vr(t2);
        super(), this.preservePaths = !!r2.preservePaths, this.portable = !!r2.portable, this.strict = !!r2.strict, this.noPax = !!r2.noPax, this.noMtime = !!r2.noMtime, this.onWriteEntry = r2.onWriteEntry, this.readEntry = e2;
        let { type: n2 } = e2;
        if ("Unsupported" === n2) throw new Error("writing entry that should be ignored");
        this.type = n2, "Directory" === this.type && this.portable && (this.noMtime = true), this.prefix = r2.prefix, this.path = yn(e2.path), this.mode = void 0 !== e2.mode ? this[Rs](e2.mode) : void 0, this.uid = this.portable ? void 0 : e2.uid, this.gid = this.portable ? void 0 : e2.gid, this.uname = this.portable ? void 0 : e2.uname, this.gname = this.portable ? void 0 : e2.gname, this.size = e2.size, this.mtime = this.noMtime ? void 0 : r2.mtime || e2.mtime, this.atime = this.portable ? void 0 : e2.atime, this.ctime = this.portable ? void 0 : e2.ctime, this.linkpath = void 0 !== e2.linkpath ? yn(e2.linkpath) : void 0, "function" == typeof r2.onwarn && this.on("warn", r2.onwarn);
        let s2 = false;
        if (!this.preservePaths) {
          let [e3, t3] = us(this.path);
          e3 && "string" == typeof t3 && (this.path = t3, s2 = e3);
        }
        this.remain = e2.size, this.blockRemain = e2.startBlockSize, this.onWriteEntry?.(this), this.header = new Qr({ path: this[Os](this.path), linkpath: "Link" === this.type && void 0 !== this.linkpath ? this[Os](this.linkpath) : this.linkpath, mode: this.mode, uid: this.portable ? void 0 : this.uid, gid: this.portable ? void 0 : this.gid, size: this.size, mtime: this.noMtime ? void 0 : this.mtime, type: this.type, uname: this.portable ? void 0 : this.uname, atime: this.portable ? void 0 : this.atime, ctime: this.portable ? void 0 : this.ctime }), s2 && this.warn("TAR_ENTRY_INFO", `stripping ${s2} from absolute path`, { entry: this, path: s2 + this.path }), this.header.encode() && !this.noPax && super.write(new mn({ atime: this.portable ? void 0 : this.atime, ctime: this.portable ? void 0 : this.ctime, gid: this.portable ? void 0 : this.gid, mtime: this.noMtime ? void 0 : this.mtime, path: this[Os](this.path), linkpath: "Link" === this.type && void 0 !== this.linkpath ? this[Os](this.linkpath) : this.linkpath, size: this.size, uid: this.portable ? void 0 : this.uid, uname: this.portable ? void 0 : this.uname, dev: this.portable ? void 0 : this.readEntry.dev, ino: this.portable ? void 0 : this.readEntry.ino, nlink: this.portable ? void 0 : this.readEntry.nlink }).encode());
        let o2 = this.header?.block;
        if (!o2) throw new Error("failed to encode header");
        super.write(o2), e2.pipe(this);
      }
      [Os](e2) {
        return gs(e2, this.prefix);
      }
      [Rs](e2) {
        return as(e2, "Directory" === this.type, this.portable);
      }
      write(e2, t2, r2) {
        "function" == typeof t2 && (r2 = t2, t2 = void 0), "string" == typeof e2 && (e2 = Buffer.from(e2, "string" == typeof t2 ? t2 : "utf8"));
        let n2 = e2.length;
        if (n2 > this.blockRemain) throw new Error("writing more to entry than is appropriate");
        return this.blockRemain -= n2, super.write(e2, r2);
      }
      end(e2, t2, r2) {
        return this.blockRemain && super.write(Buffer.alloc(this.blockRemain)), "function" == typeof e2 && (r2 = e2, t2 = void 0, e2 = void 0), "function" == typeof t2 && (r2 = t2, t2 = void 0), "string" == typeof e2 && (e2 = Buffer.from(e2, t2 ?? "utf8")), r2 && this.once("finish", r2), e2 ? super.end(e2, r2) : super.end(r2), this;
      }
    }, Ns = (e2) => e2.isFile() ? "File" : e2.isDirectory() ? "Directory" : e2.isSymbolicLink() ? "SymbolicLink" : "Unsupported", Fs = class e2 {
      tail;
      head;
      length = 0;
      static create(t2 = []) {
        return new e2(t2);
      }
      constructor(e3 = []) {
        for (let t2 of e3) this.push(t2);
      }
      *[Symbol.iterator]() {
        for (let e3 = this.head; e3; e3 = e3.next) yield e3.value;
      }
      removeNode(e3) {
        if (e3.list !== this) throw new Error("removing node which does not belong to this list");
        let t2 = e3.next, r2 = e3.prev;
        return t2 && (t2.prev = r2), r2 && (r2.next = t2), e3 === this.head && (this.head = t2), e3 === this.tail && (this.tail = r2), this.length--, e3.next = void 0, e3.prev = void 0, e3.list = void 0, t2;
      }
      unshiftNode(e3) {
        if (e3 === this.head) return;
        e3.list && e3.list.removeNode(e3);
        let t2 = this.head;
        e3.list = this, e3.next = t2, t2 && (t2.prev = e3), this.head = e3, this.tail || (this.tail = e3), this.length++;
      }
      pushNode(e3) {
        if (e3 === this.tail) return;
        e3.list && e3.list.removeNode(e3);
        let t2 = this.tail;
        e3.list = this, e3.prev = t2, t2 && (t2.next = e3), this.tail = e3, this.head || (this.head = e3), this.length++;
      }
      push(...e3) {
        for (let t2 = 0, r2 = e3.length; t2 < r2; t2++) Ls(this, e3[t2]);
        return this.length;
      }
      unshift(...e3) {
        for (var t2 = 0, r2 = e3.length; t2 < r2; t2++) $s(this, e3[t2]);
        return this.length;
      }
      pop() {
        if (!this.tail) return;
        let e3 = this.tail.value, t2 = this.tail;
        return this.tail = this.tail.prev, this.tail ? this.tail.next = void 0 : this.head = void 0, t2.list = void 0, this.length--, e3;
      }
      shift() {
        if (!this.head) return;
        let e3 = this.head.value, t2 = this.head;
        return this.head = this.head.next, this.head ? this.head.prev = void 0 : this.tail = void 0, t2.list = void 0, this.length--, e3;
      }
      forEach(e3, t2) {
        t2 = t2 || this;
        for (let r2 = this.head, n2 = 0; r2; n2++) e3.call(t2, r2.value, n2, this), r2 = r2.next;
      }
      forEachReverse(e3, t2) {
        t2 = t2 || this;
        for (let r2 = this.tail, n2 = this.length - 1; r2; n2--) e3.call(t2, r2.value, n2, this), r2 = r2.prev;
      }
      get(e3) {
        let t2 = 0, r2 = this.head;
        for (; r2 && t2 < e3; t2++) r2 = r2.next;
        if (t2 === e3 && r2) return r2.value;
      }
      getReverse(e3) {
        let t2 = 0, r2 = this.tail;
        for (; r2 && t2 < e3; t2++) r2 = r2.prev;
        if (t2 === e3 && r2) return r2.value;
      }
      map(t2, r2) {
        r2 = r2 || this;
        let n2 = new e2();
        for (let e3 = this.head; e3; ) n2.push(t2.call(r2, e3.value, this)), e3 = e3.next;
        return n2;
      }
      mapReverse(t2, r2) {
        r2 = r2 || this;
        var n2 = new e2();
        for (let e3 = this.tail; e3; ) n2.push(t2.call(r2, e3.value, this)), e3 = e3.prev;
        return n2;
      }
      reduce(e3, t2) {
        let r2, n2 = this.head;
        if (arguments.length > 1) r2 = t2;
        else {
          if (!this.head) throw new TypeError("Reduce of empty list with no initial value");
          n2 = this.head.next, r2 = this.head.value;
        }
        for (var s2 = 0; n2; s2++) r2 = e3(r2, n2.value, s2), n2 = n2.next;
        return r2;
      }
      reduceReverse(e3, t2) {
        let r2, n2 = this.tail;
        if (arguments.length > 1) r2 = t2;
        else {
          if (!this.tail) throw new TypeError("Reduce of empty list with no initial value");
          n2 = this.tail.prev, r2 = this.tail.value;
        }
        for (let t3 = this.length - 1; n2; t3--) r2 = e3(r2, n2.value, t3), n2 = n2.prev;
        return r2;
      }
      toArray() {
        let e3 = new Array(this.length);
        for (let t2 = 0, r2 = this.head; r2; t2++) e3[t2] = r2.value, r2 = r2.next;
        return e3;
      }
      toArrayReverse() {
        let e3 = new Array(this.length);
        for (let t2 = 0, r2 = this.tail; r2; t2++) e3[t2] = r2.value, r2 = r2.prev;
        return e3;
      }
      slice(t2 = 0, r2 = this.length) {
        r2 < 0 && (r2 += this.length), t2 < 0 && (t2 += this.length);
        let n2 = new e2();
        if (r2 < t2 || r2 < 0) return n2;
        t2 < 0 && (t2 = 0), r2 > this.length && (r2 = this.length);
        let s2 = this.head, o2 = 0;
        for (o2 = 0; s2 && o2 < t2; o2++) s2 = s2.next;
        for (; s2 && o2 < r2; o2++, s2 = s2.next) n2.push(s2.value);
        return n2;
      }
      sliceReverse(t2 = 0, r2 = this.length) {
        r2 < 0 && (r2 += this.length), t2 < 0 && (t2 += this.length);
        let n2 = new e2();
        if (r2 < t2 || r2 < 0) return n2;
        t2 < 0 && (t2 = 0), r2 > this.length && (r2 = this.length);
        let s2 = this.length, o2 = this.tail;
        for (; o2 && s2 > r2; s2--) o2 = o2.prev;
        for (; o2 && s2 > t2; s2--, o2 = o2.prev) n2.push(o2.value);
        return n2;
      }
      splice(e3, t2 = 0, ...r2) {
        e3 > this.length && (e3 = this.length - 1), e3 < 0 && (e3 = this.length + e3);
        let n2 = this.head;
        for (let t3 = 0; n2 && t3 < e3; t3++) n2 = n2.next;
        let s2 = [];
        for (let e4 = 0; n2 && e4 < t2; e4++) s2.push(n2.value), n2 = this.removeNode(n2);
        n2 ? n2 !== this.tail && (n2 = n2.prev) : n2 = this.tail;
        for (let e4 of r2) n2 = Us(this, n2, e4);
        return s2;
      }
      reverse() {
        let e3 = this.head, t2 = this.tail;
        for (let t3 = e3; t3; t3 = t3.prev) {
          let e4 = t3.prev;
          t3.prev = t3.next, t3.next = e4;
        }
        return this.head = t2, this.tail = e3, this;
      }
    };
    function Us(e2, t2, r2) {
      let n2 = t2, s2 = t2 ? t2.next : e2.head, o2 = new js(r2, n2, s2, e2);
      return void 0 === o2.next && (e2.tail = o2), void 0 === o2.prev && (e2.head = o2), e2.length++, o2;
    }
    function Ls(e2, t2) {
      e2.tail = new js(t2, e2.tail, void 0, e2), e2.head || (e2.head = e2.tail), e2.length++;
    }
    function $s(e2, t2) {
      e2.head = new js(t2, void 0, e2.head, e2), e2.tail || (e2.tail = e2.head), e2.length++;
    }
    var js = class {
      list;
      next;
      prev;
      value;
      constructor(e2, t2, r2, n2) {
        this.list = n2, this.value = e2, t2 ? (t2.next = this, this.prev = t2) : this.prev = void 0, r2 ? (r2.prev = this, this.next = r2) : this.next = void 0;
      }
    }, Gs = class {
      path;
      absolute;
      entry;
      stat;
      readdir;
      pending = false;
      pendingLink = false;
      ignore = false;
      piped = false;
      constructor(e2, t2) {
        this.path = e2 || "./", this.absolute = t2;
      }
    }, zs = Buffer.alloc(1024), Ws = /* @__PURE__ */ Symbol("onStat"), Hs = /* @__PURE__ */ Symbol("ended"), Ks = /* @__PURE__ */ Symbol("queue"), Vs = /* @__PURE__ */ Symbol("pendingLinks"), Ys = /* @__PURE__ */ Symbol("current"), Qs = /* @__PURE__ */ Symbol("process"), Xs = /* @__PURE__ */ Symbol("processing"), Zs = /* @__PURE__ */ Symbol("processJob"), eo = /* @__PURE__ */ Symbol("jobs"), to = /* @__PURE__ */ Symbol("jobDone"), ro = /* @__PURE__ */ Symbol("addFSEntry"), no = /* @__PURE__ */ Symbol("addTarEntry"), so = /* @__PURE__ */ Symbol("stat"), oo = /* @__PURE__ */ Symbol("readdir"), io = /* @__PURE__ */ Symbol("onreaddir"), ao = /* @__PURE__ */ Symbol("pipe"), co = /* @__PURE__ */ Symbol("entry"), lo = /* @__PURE__ */ Symbol("entryOpt"), uo = /* @__PURE__ */ Symbol("writeEntryClass"), po = /* @__PURE__ */ Symbol("write"), mo = /* @__PURE__ */ Symbol("ondrain"), ho = class extends qt {
      sync = false;
      opt;
      cwd;
      maxReadSize;
      preservePaths;
      strict;
      noPax;
      prefix;
      linkCache;
      statCache;
      file;
      portable;
      zip;
      readdirCache;
      noDirRecurse;
      follow;
      noMtime;
      mtime;
      filter;
      jobs;
      [uo];
      onWriteEntry;
      [Ks];
      [Vs] = /* @__PURE__ */ new Map();
      [eo] = 0;
      [Xs] = false;
      [Hs] = false;
      constructor(e2 = {}) {
        if (super(), this.opt = e2, this.file = e2.file || "", this.cwd = e2.cwd || process.cwd(), this.maxReadSize = e2.maxReadSize, this.preservePaths = !!e2.preservePaths, this.strict = !!e2.strict, this.noPax = !!e2.noPax, this.prefix = yn(e2.prefix || ""), this.linkCache = e2.linkCache || /* @__PURE__ */ new Map(), this.statCache = e2.statCache || /* @__PURE__ */ new Map(), this.readdirCache = e2.readdirCache || /* @__PURE__ */ new Map(), this.onWriteEntry = e2.onWriteEntry, this[uo] = Bs, "function" == typeof e2.onwarn && this.on("warn", e2.onwarn), this.portable = !!e2.portable, e2.gzip || e2.brotli || e2.zstd) {
          if ((e2.gzip ? 1 : 0) + (e2.brotli ? 1 : 0) + (e2.zstd ? 1 : 0) > 1) throw new TypeError("gzip, brotli, zstd are mutually exclusive");
          if (e2.gzip && ("object" != typeof e2.gzip && (e2.gzip = {}), this.portable && (e2.gzip.portable = true), this.zip = new Mr(e2.gzip)), e2.brotli && ("object" != typeof e2.brotli && (e2.brotli = {}), this.zip = new Br(e2.brotli)), e2.zstd && ("object" != typeof e2.zstd && (e2.zstd = {}), this.zip = new Nr(e2.zstd)), !this.zip) throw new Error("impossible");
          let t2 = this.zip;
          t2.on("data", (e3) => super.write(e3)), t2.on("end", () => super.end()), t2.on("drain", () => this[mo]()), this.on("resume", () => t2.resume());
        } else this.on("drain", this[mo]);
        this.noDirRecurse = !!e2.noDirRecurse, this.follow = !!e2.follow, this.noMtime = !!e2.noMtime, e2.mtime && (this.mtime = e2.mtime), this.filter = "function" == typeof e2.filter ? e2.filter : () => true, this[Ks] = new Fs(), this[eo] = 0, this.jobs = Number(e2.jobs) || 4, this[Xs] = false, this[Hs] = false;
      }
      [po](e2) {
        return super.write(e2);
      }
      add(e2) {
        return this.write(e2), this;
      }
      end(e2, t2, r2) {
        return "function" == typeof e2 && (r2 = e2, e2 = void 0), "function" == typeof t2 && (r2 = t2, t2 = void 0), e2 && this.add(e2), this[Hs] = true, this[Qs](), r2 && r2(), this;
      }
      write(e2) {
        if (this[Hs]) throw new Error("write after end");
        return "string" == typeof e2 ? this[ro](e2) : this[no](e2), this.flowing;
      }
      [no](e2) {
        let t2 = yn(ze.resolve(this.cwd, e2.path));
        if (this.filter(e2.path, e2)) {
          let r2 = new Gs(e2.path, t2);
          r2.entry = new qs(e2, this[lo](r2)), r2.entry.on("end", () => this[to](r2)), this[eo] += 1, this[Ks].push(r2);
        } else e2.resume();
        this[Qs]();
      }
      [ro](e2) {
        let t2 = yn(ze.resolve(this.cwd, e2));
        this[Ks].push(new Gs(e2, t2)), this[Qs]();
      }
      [so](e2) {
        e2.pending = true, this[eo] += 1;
        let t2 = this.follow ? "stat" : "lstat";
        Le[t2](e2.absolute, (t3, r2) => {
          e2.pending = false, this[eo] -= 1, t3 ? this.emit("error", t3) : this[Ws](e2, r2);
        });
      }
      [Ws](e2, t2) {
        if (this.statCache.set(e2.absolute, t2), e2.stat = t2, this.filter(e2.path, t2)) {
          if (t2.isFile() && t2.nlink > 1 && !this.linkCache.get(`${t2.dev}:${t2.ino}`) && !this.sync) if (e2 === this[Ys]) this[Zs](e2);
          else {
            let r2 = `${t2.dev}:${t2.ino}`, n2 = this[Vs].get(r2);
            n2 ? n2.push(e2) : this[Vs].set(r2, [e2]), e2.pendingLink = true, e2.pending = true;
          }
        } else e2.ignore = true;
        this[Qs]();
      }
      [oo](e2) {
        e2.pending = true, this[eo] += 1, Le.readdir(e2.absolute, (t2, r2) => {
          if (e2.pending = false, this[eo] -= 1, t2) return this.emit("error", t2);
          this[io](e2, r2);
        });
      }
      [io](e2, t2) {
        this.readdirCache.set(e2.absolute, t2), e2.readdir = t2, this[Qs]();
      }
      [Qs]() {
        if (!this[Xs]) {
          this[Xs] = true;
          for (let e2 = this[Ks].head; e2 && this[eo] < this.jobs; e2 = e2.next) if (this[Zs](e2.value), e2.value.ignore) {
            let t2 = e2.next;
            this[Ks].removeNode(e2), e2.next = t2;
          }
          this[Xs] = false, this[Hs] && 0 === this[Ks].length && 0 === this[eo] && (this.zip ? this.zip.end(zs) : (super.write(zs), super.end()));
        }
      }
      get [Ys]() {
        return this[Ks] && this[Ks].head && this[Ks].head.value;
      }
      [to](e2) {
        this[Ks].shift(), this[eo] -= 1;
        let { stat: t2 } = e2;
        if (t2 && t2.isFile() && t2.nlink > 1) {
          let e3 = `${t2.dev}:${t2.ino}`, r2 = this[Vs].get(e3);
          if (r2) {
            this[Vs].delete(e3);
            for (let e4 of r2) e4.pending = false, this[Zs](e4);
          }
        }
        this[Qs]();
      }
      [Zs](e2) {
        if (e2.pending && e2.pendingLink && e2 === this[Ys] && (e2.pending = false, e2.pendingLink = false), !e2.pending) {
          if (e2.entry) return void (e2 === this[Ys] && !e2.piped && this[ao](e2));
          if (!e2.stat) {
            let t2 = this.statCache.get(e2.absolute);
            t2 ? this[Ws](e2, t2) : this[so](e2);
          }
          if (e2.stat && !e2.ignore) {
            if (!this.noDirRecurse && e2.stat.isDirectory() && !e2.readdir) {
              let t2 = this.readdirCache.get(e2.absolute);
              if (t2 ? this[io](e2, t2) : this[oo](e2), !e2.readdir) return;
            }
            if (e2.entry = this[co](e2), !e2.entry) return void (e2.ignore = true);
            e2 === this[Ys] && !e2.piped && this[ao](e2);
          }
        }
      }
      [lo](e2) {
        return { onwarn: (e3, t2, r2) => this.warn(e3, t2, r2), noPax: this.noPax, cwd: this.cwd, absolute: e2.absolute, preservePaths: this.preservePaths, maxReadSize: this.maxReadSize, strict: this.strict, portable: this.portable, linkCache: this.linkCache, statCache: this.statCache, noMtime: this.noMtime, mtime: this.mtime, prefix: this.prefix, onWriteEntry: this.onWriteEntry };
      }
      [co](e2) {
        this[eo] += 1;
        try {
          return new this[uo](e2.path, this[lo](e2)).on("end", () => this[to](e2)).on("error", (e3) => this.emit("error", e3));
        } catch (e3) {
          this.emit("error", e3);
        }
      }
      [mo]() {
        this[Ys] && this[Ys].entry && this[Ys].entry.resume();
      }
      [ao](e2) {
        e2.piped = true, e2.readdir && e2.readdir.forEach((t3) => {
          let r3 = e2.path, n2 = "./" === r3 ? "" : r3.replace(/\/*$/, "/");
          this[ro](n2 + t3);
        });
        let t2 = e2.entry, r2 = this.zip;
        if (!t2) throw new Error("cannot pipe without source");
        r2 ? t2.on("data", (e3) => {
          r2.write(e3) || t2.pause();
        }) : t2.on("data", (e3) => {
          super.write(e3) || t2.pause();
        });
      }
      pause() {
        return this.zip && this.zip.pause(), super.pause();
      }
      warn(e2, t2, r2 = {}) {
        vn(this, e2, t2, r2);
      }
    }, fo = class extends ho {
      sync = true;
      constructor(e2) {
        super(e2), this[uo] = Ds;
      }
      pause() {
      }
      resume() {
      }
      [so](e2) {
        let t2 = this.follow ? "statSync" : "lstatSync";
        this[Ws](e2, Le[t2](e2.absolute));
      }
      [oo](e2) {
        this[io](e2, Le.readdirSync(e2.absolute));
      }
      [ao](e2) {
        let t2 = e2.entry, r2 = this.zip;
        if (e2.readdir && e2.readdir.forEach((t3) => {
          let r3 = e2.path, n2 = "./" === r3 ? "" : r3.replace(/\/*$/, "/");
          this[ro](n2 + t3);
        }), !t2) throw new Error("Cannot pipe without source");
        r2 ? t2.on("data", (e3) => {
          r2.write(e3);
        }) : t2.on("data", (e3) => {
          super[po](e3);
        });
      }
    }, go = (e2, t2) => {
      t2.forEach((t3) => {
        "@" === t3.charAt(0) ? is({ file: I.resolve(e2.cwd, t3.slice(1)), sync: true, noResume: true, onReadEntry: (t4) => e2.add(t4) }) : e2.add(t3);
      }), e2.end();
    }, yo = async (e2, t2) => {
      for (let r2 of t2) "@" === r2.charAt(0) ? await is({ file: I.resolve(String(e2.cwd), r2.slice(1)), noResume: true, onReadEntry: (t3) => {
        e2.add(t3);
      } }) : e2.add(r2);
      e2.end();
    }, wo = _r((e2, t2) => {
      let r2 = new fo(e2), n2 = new gr(e2.file, { mode: e2.mode || 438 });
      r2.pipe(n2), go(r2, t2);
    }, (e2, t2) => {
      let r2 = new ho(e2), n2 = new fr(e2.file, { mode: e2.mode || 438 });
      r2.pipe(n2);
      let s2 = new Promise((e3, t3) => {
        n2.on("error", t3), n2.on("close", e3), r2.on("error", t3);
      });
      return yo(r2, t2).catch((e3) => r2.emit("error", e3)), s2;
    }, (e2, t2) => {
      let r2 = new fo(e2);
      return go(r2, t2), r2;
    }, (e2, t2) => {
      let r2 = new ho(e2);
      return yo(r2, t2).catch((e3) => r2.emit("error", e3)), r2;
    }, (e2, t2) => {
      if (!t2?.length) throw new TypeError("no paths specified to add to archive");
    }), vo = "win32" === (process.env.__FAKE_PLATFORM__ || process.platform), { O_CREAT: _o, O_NOFOLLOW: bo, O_TRUNC: So, O_WRONLY: ko } = Le.constants, xo = Number(process.env.__FAKE_FS_O_FILENAME__) || Le.constants.UV_FS_O_FILEMAP || 0, Eo = xo | So | _o | ko, Io = vo || "number" != typeof bo ? null : bo | So | _o | ko, To = null !== Io ? () => Io : vo && !!xo ? (e2) => e2 < 524288 ? Eo : "w" : () => "w", Co = (e2, t2, r2) => {
      try {
        return Ge.lchownSync(e2, t2, r2);
      } catch (e3) {
        if ("ENOENT" !== e3?.code) throw e3;
      }
    }, Po = (e2, t2, r2, n2) => {
      Ge.lchown(e2, t2, r2, (e3) => {
        n2(e3 && "ENOENT" !== e3?.code ? e3 : null);
      });
    }, Ao = (e2, t2, r2, n2, s2) => {
      if (t2.isDirectory()) Ro(I.resolve(e2, t2.name), r2, n2, (o2) => {
        if (o2) return s2(o2);
        let i2 = I.resolve(e2, t2.name);
        Po(i2, r2, n2, s2);
      });
      else {
        let o2 = I.resolve(e2, t2.name);
        Po(o2, r2, n2, s2);
      }
    }, Ro = (e2, t2, r2, n2) => {
      Ge.readdir(e2, { withFileTypes: true }, (s2, o2) => {
        if (s2) {
          if ("ENOENT" === s2.code) return n2();
          if ("ENOTDIR" !== s2.code && "ENOTSUP" !== s2.code) return n2(s2);
        }
        if (s2 || !o2.length) return Po(e2, t2, r2, n2);
        let i2 = o2.length, a2 = null, c2 = (s3) => {
          if (!a2) {
            if (s3) return n2(a2 = s3);
            if (0 === --i2) return Po(e2, t2, r2, n2);
          }
        };
        for (let n3 of o2) Ao(e2, n3, t2, r2, c2);
      });
    }, Mo = (e2, t2, r2, n2) => {
      t2.isDirectory() && Jo(I.resolve(e2, t2.name), r2, n2), Co(I.resolve(e2, t2.name), r2, n2);
    }, Jo = (e2, t2, r2) => {
      let n2;
      try {
        n2 = Ge.readdirSync(e2, { withFileTypes: true });
      } catch (n3) {
        let s2 = n3;
        if ("ENOENT" === s2?.code) return;
        if ("ENOTDIR" === s2?.code || "ENOTSUP" === s2?.code) return Co(e2, t2, r2);
        throw s2;
      }
      for (let s2 of n2) Mo(e2, s2, t2, r2);
      return Co(e2, t2, r2);
    }, Oo = class extends Error {
      path;
      code;
      syscall = "chdir";
      constructor(e2, t2) {
        super(`${t2}: Cannot cd into '${e2}'`), this.path = e2, this.code = t2;
      }
      get name() {
        return "CwdError";
      }
    }, Bo = class extends Error {
      path;
      symlink;
      syscall = "symlink";
      code = "TAR_SYMLINK_ERROR";
      constructor(e2, t2) {
        super("TAR_SYMLINK_ERROR: Cannot extract through symbolic link"), this.symlink = e2, this.path = t2;
      }
      get name() {
        return "SymlinkError";
      }
    }, Do = (e2, t2, r2) => {
      e2 = yn(e2);
      let n2 = t2.umask ?? 18, s2 = 448 | t2.mode, o2 = 0 !== (s2 & n2), i2 = t2.uid, a2 = t2.gid, c2 = "number" == typeof i2 && "number" == typeof a2 && (i2 !== t2.processUid || a2 !== t2.processGid), l2 = t2.preserve, u2 = t2.unlink, d2 = yn(t2.cwd), p2 = (t3, n3) => {
        t3 ? r2(t3) : n3 && c2 ? Ro(n3, i2, a2, (e3) => p2(e3)) : o2 ? Ge.chmod(e2, s2, r2) : r2();
      };
      if (e2 === d2) return ((e3, t3) => {
        Ge.stat(e3, (r3, n3) => {
          (r3 || !n3.isDirectory()) && (r3 = new Oo(e3, r3?.code || "ENOTDIR")), t3(r3);
        });
      })(e2, p2);
      if (l2) return ve.mkdir(e2, { mode: s2, recursive: true }).then((e3) => p2(null, e3 ?? void 0), p2);
      let m2 = yn(I.relative(d2, e2)).split("/");
      qo(d2, m2, s2, u2, d2, void 0, p2);
    }, qo = (e2, t2, r2, n2, s2, o2, i2) => {
      if (0 === t2.length) return i2(null, o2);
      let a2 = t2.shift(), c2 = yn(I.resolve(e2 + "/" + a2));
      Ge.mkdir(c2, r2, No(c2, t2, r2, n2, s2, o2, i2));
    }, No = (e2, t2, r2, n2, s2, o2, i2) => (a2) => {
      a2 ? Ge.lstat(e2, (c2, l2) => {
        if (c2) c2.path = c2.path && yn(c2.path), i2(c2);
        else if (l2.isDirectory()) qo(e2, t2, r2, n2, s2, o2, i2);
        else if (n2) Ge.unlink(e2, (a3) => {
          if (a3) return i2(a3);
          Ge.mkdir(e2, r2, No(e2, t2, r2, n2, s2, o2, i2));
        });
        else {
          if (l2.isSymbolicLink()) return i2(new Bo(e2, e2 + "/" + t2.join("/")));
          i2(a2);
        }
      }) : qo(e2, t2, r2, n2, s2, o2 = o2 || e2, i2);
    }, Fo = (e2, t2) => {
      e2 = yn(e2);
      let r2 = t2.umask ?? 18, n2 = 448 | t2.mode, s2 = 0 !== (n2 & r2), o2 = t2.uid, i2 = t2.gid, a2 = "number" == typeof o2 && "number" == typeof i2 && (o2 !== t2.processUid || i2 !== t2.processGid), c2 = t2.preserve, l2 = t2.unlink, u2 = yn(t2.cwd), d2 = (t3) => {
        t3 && a2 && Jo(t3, o2, i2), s2 && Ge.chmodSync(e2, n2);
      };
      if (e2 === u2) return ((e3) => {
        let t3, r3 = false;
        try {
          r3 = Ge.statSync(e3).isDirectory();
        } catch (e4) {
          t3 = e4?.code;
        } finally {
          if (!r3) throw new Oo(e3, t3 ?? "ENOTDIR");
        }
      })(u2), d2();
      if (c2) return d2(Ge.mkdirSync(e2, { mode: n2, recursive: true }) ?? void 0);
      let p2, m2 = yn(I.relative(u2, e2)).split("/");
      for (let e3 = m2.shift(), t3 = u2; e3 && (t3 += "/" + e3); e3 = m2.shift()) {
        t3 = yn(I.resolve(t3));
        try {
          Ge.mkdirSync(t3, n2), p2 = p2 || t3;
        } catch {
          let e4 = Ge.lstatSync(t3);
          if (e4.isDirectory()) continue;
          if (l2) {
            Ge.unlinkSync(t3), Ge.mkdirSync(t3, n2), p2 = p2 || t3;
            continue;
          }
          if (e4.isSymbolicLink()) return new Bo(t3, t3 + "/" + m2.join("/"));
        }
      }
      return d2(p2);
    }, Uo = /* @__PURE__ */ Object.create(null), Lo = /* @__PURE__ */ new Set(), $o = "win32" === (process.env.TESTING_TAR_FAKE_PLATFORM || process.platform), jo = class {
      #e = /* @__PURE__ */ new Map();
      #t = /* @__PURE__ */ new Map();
      #r = /* @__PURE__ */ new Set();
      reserve(e2, t2) {
        e2 = $o ? ["win32 parallelization disabled"] : e2.map((e3) => ss((0, I.join)(((e4) => {
          Lo.has(e4) ? Lo.delete(e4) : Uo[e4] = e4.normalize("NFD").toLocaleLowerCase("en").toLocaleUpperCase("en"), Lo.add(e4);
          let t3 = Uo[e4], r3 = Lo.size - 1e4;
          if (r3 > 1e3) {
            for (let e5 of Lo) if (Lo.delete(e5), delete Uo[e5], --r3 <= 0) break;
          }
          return t3;
        })(e3))));
        let r2 = new Set(e2.map((e3) => e3.split("/").slice(0, -1).reduce((e4, t3) => {
          let r3 = e4.at(-1);
          return void 0 !== r3 && (t3 = (0, I.join)(r3, t3)), e4.push(t3 || "/"), e4;
        }, [])).reduce((e3, t3) => e3.concat(t3)));
        this.#t.set(t2, { dirs: r2, paths: e2 });
        for (let r3 of e2) {
          let e3 = this.#e.get(r3);
          e3 ? e3.push(t2) : this.#e.set(r3, [t2]);
        }
        for (let e3 of r2) {
          let r3 = this.#e.get(e3);
          if (r3) {
            let e4 = r3.at(-1);
            e4 instanceof Set ? e4.add(t2) : r3.push(/* @__PURE__ */ new Set([t2]));
          } else this.#e.set(e3, [/* @__PURE__ */ new Set([t2])]);
        }
        return this.#s(t2);
      }
      #n(e2) {
        let t2 = this.#t.get(e2);
        if (!t2) throw new Error("function does not have any path reservations");
        return { paths: t2.paths.map((e3) => this.#e.get(e3)), dirs: [...t2.dirs].map((e3) => this.#e.get(e3)) };
      }
      check(e2) {
        let { paths: t2, dirs: r2 } = this.#n(e2);
        return t2.every((t3) => t3 && t3[0] === e2) && r2.every((t3) => t3 && t3[0] instanceof Set && t3[0].has(e2));
      }
      #s(e2) {
        return !(this.#r.has(e2) || !this.check(e2)) && (this.#r.add(e2), e2(() => this.#o(e2)), true);
      }
      #o(e2) {
        if (!this.#r.has(e2)) return false;
        let t2 = this.#t.get(e2);
        if (!t2) throw new Error("invalid reservation");
        let { paths: r2, dirs: n2 } = t2, s2 = /* @__PURE__ */ new Set();
        for (let t3 of r2) {
          let r3 = this.#e.get(t3);
          if (!r3 || r3?.[0] !== e2) continue;
          let n3 = r3[1];
          if (n3) if (r3.shift(), "function" == typeof n3) s2.add(n3);
          else for (let e3 of n3) s2.add(e3);
          else this.#e.delete(t3);
        }
        for (let t3 of n2) {
          let r3 = this.#e.get(t3), n3 = r3?.[0];
          if (r3 && n3 instanceof Set) {
            if (1 === n3.size && 1 === r3.length) {
              this.#e.delete(t3);
              continue;
            }
            if (1 === n3.size) {
              r3.shift();
              let e3 = r3[0];
              "function" == typeof e3 && s2.add(e3);
            } else n3.delete(e2);
          }
        }
        return this.#r.delete(e2), s2.forEach((e3) => this.#s(e3)), true;
      }
    }, Go = /* @__PURE__ */ Symbol("onEntry"), zo = /* @__PURE__ */ Symbol("checkFs"), Wo = /* @__PURE__ */ Symbol("checkFs2"), Ho = /* @__PURE__ */ Symbol("isReusable"), Ko = /* @__PURE__ */ Symbol("makeFs"), Vo = /* @__PURE__ */ Symbol("file"), Yo = /* @__PURE__ */ Symbol("directory"), Qo = /* @__PURE__ */ Symbol("link"), Xo = /* @__PURE__ */ Symbol("symlink"), Zo = /* @__PURE__ */ Symbol("hardlink"), ei = /* @__PURE__ */ Symbol("ensureNoSymlink"), ti = /* @__PURE__ */ Symbol("unsupported"), ri = /* @__PURE__ */ Symbol("checkPath"), ni = /* @__PURE__ */ Symbol("stripAbsolutePath"), si = /* @__PURE__ */ Symbol("mkdir"), oi = /* @__PURE__ */ Symbol("onError"), ii = /* @__PURE__ */ Symbol("pending"), ai = /* @__PURE__ */ Symbol("pend"), ci = /* @__PURE__ */ Symbol("unpend"), li = /* @__PURE__ */ Symbol("ended"), ui = /* @__PURE__ */ Symbol("maybeClose"), di = /* @__PURE__ */ Symbol("skip"), pi = /* @__PURE__ */ Symbol("doChown"), mi = /* @__PURE__ */ Symbol("uid"), hi = /* @__PURE__ */ Symbol("gid"), fi = /* @__PURE__ */ Symbol("checkedCwd"), gi = "win32" === (process.env.TESTING_TAR_FAKE_PLATFORM || process.platform), yi = (e2, t2, r2) => void 0 !== e2 && e2 === e2 >>> 0 ? e2 : void 0 !== t2 && t2 === t2 >>> 0 ? t2 : r2, wi = class extends ns {
      [li] = false;
      [fi] = false;
      [ii] = 0;
      reservations = new jo();
      transform;
      writable = true;
      readable = false;
      uid;
      gid;
      setOwner;
      preserveOwner;
      processGid;
      processUid;
      maxDepth;
      forceChown;
      win32;
      newer;
      keep;
      noMtime;
      preservePaths;
      unlink;
      cwd;
      strip;
      processUmask;
      umask;
      dmode;
      fmode;
      chmod;
      constructor(e2 = {}) {
        if (e2.ondone = () => {
          this[li] = true, this[ui]();
        }, super(e2), this.transform = e2.transform, this.chmod = !!e2.chmod, "number" == typeof e2.uid || "number" == typeof e2.gid) {
          if ("number" != typeof e2.uid || "number" != typeof e2.gid) throw new TypeError("cannot set owner without number uid and gid");
          if (e2.preserveOwner) throw new TypeError("cannot preserve owner in archive and also set owner explicitly");
          this.uid = e2.uid, this.gid = e2.gid, this.setOwner = true;
        } else this.uid = void 0, this.gid = void 0, this.setOwner = false;
        this.preserveOwner = void 0 === e2.preserveOwner && "number" != typeof e2.uid ? 0 === process.getuid?.() : !!e2.preserveOwner, this.processUid = (this.preserveOwner || this.setOwner) && process.getuid ? process.getuid() : void 0, this.processGid = (this.preserveOwner || this.setOwner) && process.getgid ? process.getgid() : void 0, this.maxDepth = "number" == typeof e2.maxDepth ? e2.maxDepth : 1024, this.forceChown = true === e2.forceChown, this.win32 = !!e2.win32 || gi, this.newer = !!e2.newer, this.keep = !!e2.keep, this.noMtime = !!e2.noMtime, this.preservePaths = !!e2.preservePaths, this.unlink = !!e2.unlink, this.cwd = yn(I.resolve(e2.cwd || process.cwd())), this.strip = Number(e2.strip) || 0, this.processUmask = this.chmod ? "number" == typeof e2.processUmask ? e2.processUmask : process.umask() : 0, this.umask = "number" == typeof e2.umask ? e2.umask : this.processUmask, this.dmode = e2.dmode || 511 & ~this.umask, this.fmode = e2.fmode || 438 & ~this.umask, this.on("entry", (e3) => this[Go](e3));
      }
      warn(e2, t2, r2 = {}) {
        return ("TAR_BAD_ARCHIVE" === e2 || "TAR_ABORT" === e2) && (r2.recoverable = false), super.warn(e2, t2, r2);
      }
      [ui]() {
        this[li] && 0 === this[ii] && (this.emit("prefinish"), this.emit("finish"), this.emit("end"));
      }
      [ni](e2, t2) {
        let r2 = e2[t2], { type: n2 } = e2;
        if (!r2 || this.preservePaths) return true;
        let [s2, o2] = us(r2), i2 = o2.replaceAll(/\\/g, "/").split("/");
        if (i2.includes("..") || gi && /^[a-z]:\.\.$/i.test(i2[0] ?? "")) {
          if ("path" === t2 || "Link" === n2) return this.warn("TAR_ENTRY_ERROR", `${t2} contains '..'`, { entry: e2, [t2]: r2 }), false;
          let s3 = I.posix.dirname(e2.path), o3 = I.posix.normalize(I.posix.join(s3, i2.join("/")));
          if (o3.startsWith("../") || ".." === o3) return this.warn("TAR_ENTRY_ERROR", `${t2} escapes extraction directory`, { entry: e2, [t2]: r2 }), false;
        }
        return s2 && (e2[t2] = String(o2), this.warn("TAR_ENTRY_INFO", `stripping ${s2} from absolute ${t2}`, { entry: e2, [t2]: r2 })), true;
      }
      [ri](e2) {
        let t2 = yn(e2.path), r2 = t2.split("/");
        if (this.strip) {
          if (r2.length < this.strip) return false;
          if ("Link" === e2.type) {
            let t3 = yn(String(e2.linkpath)).split("/");
            if (!(t3.length >= this.strip)) return false;
            e2.linkpath = t3.slice(this.strip).join("/");
          }
          r2.splice(0, this.strip), e2.path = r2.join("/");
        }
        if (isFinite(this.maxDepth) && r2.length > this.maxDepth) return this.warn("TAR_ENTRY_ERROR", "path excessively deep", { entry: e2, path: t2, depth: r2.length, maxDepth: this.maxDepth }), false;
        if (!this[ni](e2, "path") || !this[ni](e2, "linkpath")) return false;
        if (e2.absolute = I.isAbsolute(e2.path) ? yn(I.resolve(e2.path)) : yn(I.resolve(this.cwd, e2.path)), !this.preservePaths && "string" == typeof e2.absolute && 0 !== e2.absolute.indexOf(this.cwd + "/") && e2.absolute !== this.cwd) return this.warn("TAR_ENTRY_ERROR", "path escaped extraction target", { entry: e2, path: yn(e2.path), resolvedPath: e2.absolute, cwd: this.cwd }), false;
        if (e2.absolute === this.cwd && "Directory" !== e2.type && "GNUDumpDir" !== e2.type) return false;
        if (this.win32) {
          let { root: t3 } = I.win32.parse(String(e2.absolute));
          e2.absolute = t3 + fs(String(e2.absolute).slice(t3.length));
          let { root: r3 } = I.win32.parse(e2.path);
          e2.path = r3 + fs(e2.path.slice(r3.length));
        }
        return true;
      }
      [Go](e2) {
        if (!this[ri](e2)) return e2.resume();
        switch (Ye.equal(typeof e2.absolute, "string"), e2.type) {
          case "Directory":
          case "GNUDumpDir":
            e2.mode && (e2.mode = 448 | e2.mode);
          case "File":
          case "OldFile":
          case "ContiguousFile":
          case "Link":
          case "SymbolicLink":
            return this[zo](e2);
          default:
            return this[ti](e2);
        }
      }
      [oi](e2, t2) {
        "CwdError" === e2.name ? this.emit("error", e2) : (this.warn("TAR_ENTRY_ERROR", e2, { entry: t2 }), this[ci](), t2.resume());
      }
      [si](e2, t2, r2) {
        Do(yn(e2), { uid: this.uid, gid: this.gid, processUid: this.processUid, processGid: this.processGid, umask: this.processUmask, preserve: this.preservePaths, unlink: this.unlink, cwd: this.cwd, mode: t2 }, r2);
      }
      [pi](e2) {
        return this.forceChown || this.preserveOwner && ("number" == typeof e2.uid && e2.uid !== this.processUid || "number" == typeof e2.gid && e2.gid !== this.processGid) || "number" == typeof this.uid && this.uid !== this.processUid || "number" == typeof this.gid && this.gid !== this.processGid;
      }
      [mi](e2) {
        return yi(this.uid, e2.uid, this.processUid);
      }
      [hi](e2) {
        return yi(this.gid, e2.gid, this.processGid);
      }
      [Vo](e2, t2) {
        let r2 = "number" == typeof e2.mode ? 4095 & e2.mode : this.fmode, n2 = new fr(String(e2.absolute), { flags: To(e2.size), mode: r2, autoClose: false });
        n2.on("error", (r3) => {
          n2.fd && Ge.close(n2.fd, () => {
          }), n2.write = () => true, this[oi](r3, e2), t2();
        });
        let s2 = 1, o2 = (r3) => {
          if (r3) return n2.fd && Ge.close(n2.fd, () => {
          }), this[oi](r3, e2), void t2();
          0 === --s2 && void 0 !== n2.fd && Ge.close(n2.fd, (r4) => {
            r4 ? this[oi](r4, e2) : this[ci](), t2();
          });
        };
        n2.on("finish", () => {
          let t3 = String(e2.absolute), r3 = n2.fd;
          if ("number" == typeof r3 && e2.mtime && !this.noMtime) {
            s2++;
            let n3 = e2.atime || /* @__PURE__ */ new Date(), i3 = e2.mtime;
            Ge.futimes(r3, n3, i3, (e3) => e3 ? Ge.utimes(t3, n3, i3, (t4) => o2(t4 && e3)) : o2());
          }
          if ("number" == typeof r3 && this[pi](e2)) {
            s2++;
            let n3 = this[mi](e2), i3 = this[hi](e2);
            "number" == typeof n3 && "number" == typeof i3 && Ge.fchown(r3, n3, i3, (e3) => e3 ? Ge.chown(t3, n3, i3, (t4) => o2(t4 && e3)) : o2());
          }
          o2();
        });
        let i2 = this.transform && this.transform(e2) || e2;
        i2 !== e2 && (i2.on("error", (r3) => {
          this[oi](r3, e2), t2();
        }), e2.pipe(i2)), i2.pipe(n2);
      }
      [Yo](e2, t2) {
        let r2 = "number" == typeof e2.mode ? 4095 & e2.mode : this.dmode;
        this[si](String(e2.absolute), r2, (r3) => {
          if (r3) return this[oi](r3, e2), void t2();
          let n2 = 1, s2 = () => {
            0 === --n2 && (t2(), this[ci](), e2.resume());
          };
          e2.mtime && !this.noMtime && (n2++, Ge.utimes(String(e2.absolute), e2.atime || /* @__PURE__ */ new Date(), e2.mtime, s2)), this[pi](e2) && (n2++, Ge.chown(String(e2.absolute), Number(this[mi](e2)), Number(this[hi](e2)), s2)), s2();
        });
      }
      [ti](e2) {
        e2.unsupported = true, this.warn("TAR_ENTRY_UNSUPPORTED", `unsupported entry type: ${e2.type}`, { entry: e2 }), e2.resume();
      }
      [Xo](e2, t2) {
        let r2 = yn(I.relative(this.cwd, I.resolve(I.dirname(String(e2.absolute)), String(e2.linkpath)))).split("/");
        this[ei](e2, this.cwd, r2, () => this[Qo](e2, String(e2.linkpath), "symlink", t2), (r3) => {
          this[oi](r3, e2), t2();
        });
      }
      [Zo](e2, t2) {
        let r2 = yn(I.resolve(this.cwd, String(e2.linkpath))), n2 = yn(String(e2.linkpath)).split("/");
        this[ei](e2, this.cwd, n2, () => this[Qo](e2, r2, "link", t2), (r3) => {
          this[oi](r3, e2), t2();
        });
      }
      [ei](e2, t2, r2, n2, s2) {
        let o2 = r2.shift();
        if (this.preservePaths || void 0 === o2) return n2();
        let i2 = I.resolve(t2, o2);
        Ge.lstat(i2, (t3, o3) => t3 ? n2() : o3?.isSymbolicLink() ? s2(new Bo(i2, I.resolve(i2, r2.join("/")))) : void this[ei](e2, i2, r2, n2, s2));
      }
      [ai]() {
        this[ii]++;
      }
      [ci]() {
        this[ii]--, this[ui]();
      }
      [di](e2) {
        this[ci](), e2.resume();
      }
      [Ho](e2, t2) {
        return "File" === e2.type && !this.unlink && t2.isFile() && t2.nlink <= 1 && !gi;
      }
      [zo](e2) {
        this[ai]();
        let t2 = [e2.path];
        e2.linkpath && t2.push(e2.linkpath), this.reservations.reserve(t2, (t3) => this[Wo](e2, t3));
      }
      [Wo](e2, t2) {
        let r2 = (e3) => {
          t2(e3);
        }, n2 = () => {
          if (e2.absolute !== this.cwd) {
            let t3 = yn(I.dirname(String(e2.absolute)));
            if (t3 !== this.cwd) return this[si](t3, this.dmode, (t4) => {
              if (t4) return this[oi](t4, e2), void r2();
              s2();
            });
          }
          s2();
        }, s2 = () => {
          Ge.lstat(String(e2.absolute), (t3, n3) => {
            if (n3 && (this.keep || this.newer && n3.mtime > (e2.mtime ?? n3.mtime))) return this[di](e2), void r2();
            if (t3 || this[Ho](e2, n3)) return this[Ko](null, e2, r2);
            if (n3.isDirectory()) {
              if ("Directory" === e2.type) {
                let t4 = (t5) => this[Ko](t5 ?? null, e2, r2);
                return this.chmod && e2.mode && (4095 & n3.mode) !== e2.mode ? Ge.chmod(String(e2.absolute), Number(e2.mode), t4) : t4();
              }
              if (e2.absolute !== this.cwd) return Ge.rmdir(String(e2.absolute), (t4) => this[Ko](t4 ?? null, e2, r2));
            }
            if (e2.absolute === this.cwd) return this[Ko](null, e2, r2);
            ((e3, t4) => {
              if (!gi) return Ge.unlink(e3, t4);
              let r3 = e3 + ".DELETE." + (0, E.randomBytes)(16).toString("hex");
              Ge.rename(e3, r3, (e4) => {
                if (e4) return t4(e4);
                Ge.unlink(r3, t4);
              });
            })(String(e2.absolute), (t4) => this[Ko](t4 ?? null, e2, r2));
          });
        };
        this[fi] ? n2() : (() => {
          this[si](this.cwd, this.dmode, (t3) => {
            if (t3) return this[oi](t3, e2), void r2();
            this[fi] = true, n2();
          });
        })();
      }
      [Ko](e2, t2, r2) {
        if (e2) return this[oi](e2, t2), void r2();
        switch (t2.type) {
          case "File":
          case "OldFile":
          case "ContiguousFile":
            return this[Vo](t2, r2);
          case "Link":
            return this[Zo](t2, r2);
          case "SymbolicLink":
            return this[Xo](t2, r2);
          case "Directory":
          case "GNUDumpDir":
            return this[Yo](t2, r2);
        }
      }
      [Qo](e2, t2, r2, n2) {
        Ge[r2](t2, String(e2.absolute), (t3) => {
          t3 ? this[oi](t3, e2) : (this[ci](), e2.resume()), n2();
        });
      }
    }, vi = (e2) => {
      try {
        return [null, e2()];
      } catch (e3) {
        return [e3, null];
      }
    }, _i = class extends wi {
      sync = true;
      [Ko](e2, t2) {
        return super[Ko](e2, t2, () => {
        });
      }
      [zo](e2) {
        if (!this[fi]) {
          let t3 = this[si](this.cwd, this.dmode);
          if (t3) return this[oi](t3, e2);
          this[fi] = true;
        }
        if (e2.absolute !== this.cwd) {
          let t3 = yn(I.dirname(String(e2.absolute)));
          if (t3 !== this.cwd) {
            let r3 = this[si](t3, this.dmode);
            if (r3) return this[oi](r3, e2);
          }
        }
        let [t2, r2] = vi(() => Ge.lstatSync(String(e2.absolute)));
        if (r2 && (this.keep || this.newer && r2.mtime > (e2.mtime ?? r2.mtime))) return this[di](e2);
        if (t2 || this[Ho](e2, r2)) return this[Ko](null, e2);
        if (r2.isDirectory()) {
          if ("Directory" === e2.type) {
            let t4 = this.chmod && e2.mode && (4095 & r2.mode) !== e2.mode, [n3] = t4 ? vi(() => {
              Ge.chmodSync(String(e2.absolute), Number(e2.mode));
            }) : [];
            return this[Ko](n3, e2);
          }
          let [t3] = vi(() => Ge.rmdirSync(String(e2.absolute)));
          this[Ko](t3, e2);
        }
        let [n2] = e2.absolute === this.cwd ? [] : vi(() => ((e3) => {
          if (!gi) return Ge.unlinkSync(e3);
          let t3 = e3 + ".DELETE." + (0, E.randomBytes)(16).toString("hex");
          Ge.renameSync(e3, t3), Ge.unlinkSync(t3);
        })(String(e2.absolute)));
        this[Ko](n2, e2);
      }
      [Vo](e2, t2) {
        let r2, n2 = "number" == typeof e2.mode ? 4095 & e2.mode : this.fmode, s2 = (n3) => {
          let s3;
          try {
            Ge.closeSync(r2);
          } catch (e3) {
            s3 = e3;
          }
          (n3 || s3) && this[oi](n3 || s3, e2), t2();
        };
        try {
          r2 = Ge.openSync(String(e2.absolute), To(e2.size), n2);
        } catch (e3) {
          return s2(e3);
        }
        let o2 = this.transform && this.transform(e2) || e2;
        o2 !== e2 && (o2.on("error", (t3) => this[oi](t3, e2)), e2.pipe(o2)), o2.on("data", (e3) => {
          try {
            Ge.writeSync(r2, e3, 0, e3.length);
          } catch (e4) {
            s2(e4);
          }
        }), o2.on("end", () => {
          let t3 = null;
          if (e2.mtime && !this.noMtime) {
            let n3 = e2.atime || /* @__PURE__ */ new Date(), s3 = e2.mtime;
            try {
              Ge.futimesSync(r2, n3, s3);
            } catch (r3) {
              try {
                Ge.utimesSync(String(e2.absolute), n3, s3);
              } catch {
                t3 = r3;
              }
            }
          }
          if (this[pi](e2)) {
            let n3 = this[mi](e2), s3 = this[hi](e2);
            try {
              Ge.fchownSync(r2, Number(n3), Number(s3));
            } catch (r3) {
              try {
                Ge.chownSync(String(e2.absolute), Number(n3), Number(s3));
              } catch {
                t3 = t3 || r3;
              }
            }
          }
          s2(t3);
        });
      }
      [Yo](e2, t2) {
        let r2 = "number" == typeof e2.mode ? 4095 & e2.mode : this.dmode, n2 = this[si](String(e2.absolute), r2);
        if (n2) return this[oi](n2, e2), void t2();
        if (e2.mtime && !this.noMtime) try {
          Ge.utimesSync(String(e2.absolute), e2.atime || /* @__PURE__ */ new Date(), e2.mtime);
        } catch {
        }
        if (this[pi](e2)) try {
          Ge.chownSync(String(e2.absolute), Number(this[mi](e2)), Number(this[hi](e2)));
        } catch {
        }
        t2(), e2.resume();
      }
      [si](e2, t2) {
        try {
          return Fo(yn(e2), { uid: this.uid, gid: this.gid, processUid: this.processUid, processGid: this.processGid, umask: this.processUmask, preserve: this.preservePaths, unlink: this.unlink, cwd: this.cwd, mode: t2 });
        } catch (e3) {
          return e3;
        }
      }
      [ei](e2, t2, r2, n2, s2) {
        if (this.preservePaths || 0 === r2.length) return n2();
        let o2 = t2;
        for (let e3 of r2) {
          o2 = I.resolve(o2, e3);
          let [i2, a2] = vi(() => Ge.lstatSync(o2));
          if (i2) return n2();
          if (a2.isSymbolicLink()) return s2(new Bo(o2, I.resolve(t2, r2.join("/"))));
        }
        n2();
      }
      [Qo](e2, t2, r2, n2) {
        let s2 = `${r2}Sync`;
        try {
          Ge[s2](t2, String(e2.absolute)), n2(), e2.resume();
        } catch (t3) {
          return this[oi](t3, e2);
        }
      }
    }, bi = _r((e2) => {
      let t2 = new _i(e2), r2 = e2.file, n2 = Ge.statSync(r2), s2 = e2.maxReadSize || 16777216;
      new hr(r2, { readSize: s2, size: n2.size }).pipe(t2);
    }, (e2, t2) => {
      let r2 = new wi(e2), n2 = e2.maxReadSize || 16777216, s2 = e2.file;
      return new Promise((e3, t3) => {
        r2.on("error", t3), r2.on("close", e3), Ge.stat(s2, (e4, o2) => {
          if (e4) t3(e4);
          else {
            let e5 = new mr(s2, { readSize: n2, size: o2.size });
            e5.on("error", t3), e5.pipe(r2);
          }
        });
      });
    }, (e2) => new _i(e2), (e2) => new wi(e2), (e2, t2) => {
      t2?.length && os(e2, t2);
    }), Si = (e2, t2, r2, n2, s2) => {
      let o2 = new gr(e2.file, { fd: n2, start: r2 });
      t2.pipe(o2), ki(t2, s2);
    }, ki = (e2, t2) => {
      t2.forEach((t3) => {
        "@" === t3.charAt(0) ? is({ file: I.resolve(e2.cwd, t3.slice(1)), sync: true, noResume: true, onReadEntry: (t4) => e2.add(t4) }) : e2.add(t3);
      }), e2.end();
    }, xi = async (e2, t2) => {
      for (let r2 of t2) "@" === r2.charAt(0) ? await is({ file: I.resolve(String(e2.cwd), r2.slice(1)), noResume: true, onReadEntry: (t3) => e2.add(t3) }) : e2.add(r2);
      e2.end();
    }, Ei = _r((e2, t2) => {
      let r2, n2, s2 = new fo(e2), o2 = true;
      try {
        try {
          r2 = Ge.openSync(e2.file, "r+");
        } catch (t3) {
          if ("ENOENT" !== t3?.code) throw t3;
          r2 = Ge.openSync(e2.file, "w+");
        }
        let i2 = Ge.fstatSync(r2), a2 = Buffer.alloc(512);
        e: for (n2 = 0; n2 < i2.size; n2 += 512) {
          for (let e3 = 0, t4 = 0; e3 < 512; e3 += t4) {
            if (t4 = Ge.readSync(r2, a2, e3, a2.length - e3, n2 + e3), 0 === n2 && 31 === a2[0] && 139 === a2[1]) throw new Error("cannot append to compressed archives");
            if (!t4) break e;
          }
          let t3 = new Qr(a2);
          if (!t3.cksumValid) break;
          let s3 = 512 * Math.ceil((t3.size || 0) / 512);
          if (n2 + s3 + 512 > i2.size) break;
          n2 += s3, e2.mtimeCache && t3.mtime && e2.mtimeCache.set(String(t3.path), t3.mtime);
        }
        o2 = false, Si(e2, s2, n2, r2, t2);
      } finally {
        if (o2) try {
          Ge.closeSync(r2);
        } catch {
        }
      }
    }, (e2, t2) => {
      t2 = Array.from(t2);
      let r2 = new ho(e2);
      return new Promise((n2, s2) => {
        r2.on("error", s2);
        let o2 = "r+", i2 = (a2, c2) => a2 && "ENOENT" === a2.code && "r+" === o2 ? (o2 = "w+", Ge.open(e2.file, o2, i2)) : a2 || !c2 ? s2(a2) : void Ge.fstat(c2, (o3, i3) => {
          if (o3) return Ge.close(c2, () => s2(o3));
          ((t3, r3, n3) => {
            let s3 = (e3, r4) => {
              e3 ? Ge.close(t3, (t4) => n3(e3)) : n3(null, r4);
            }, o4 = 0;
            if (0 === r3) return s3(null, 0);
            let i4 = 0, a3 = Buffer.alloc(512), c3 = (n4, l2) => {
              if (n4 || void 0 === l2) return s3(n4);
              if (i4 += l2, i4 < 512 && l2) return Ge.read(t3, a3, i4, a3.length - i4, o4 + i4, c3);
              if (0 === o4 && 31 === a3[0] && 139 === a3[1]) return s3(new Error("cannot append to compressed archives"));
              if (i4 < 512) return s3(null, o4);
              let u2 = new Qr(a3);
              if (!u2.cksumValid) return s3(null, o4);
              let d2 = 512 * Math.ceil((u2.size ?? 0) / 512);
              if (o4 + d2 + 512 > r3 || (o4 += d2 + 512, o4 >= r3)) return s3(null, o4);
              e2.mtimeCache && u2.mtime && e2.mtimeCache.set(String(u2.path), u2.mtime), i4 = 0, Ge.read(t3, a3, 0, 512, o4, c3);
            };
            Ge.read(t3, a3, 0, 512, o4, c3);
          })(c2, i3.size, (o4, i4) => {
            if (o4) return s2(o4);
            let a3 = new fr(e2.file, { fd: c2, start: i4 });
            r2.pipe(a3), a3.on("error", s2), a3.on("close", n2), xi(r2, t2);
          });
        });
        Ge.open(e2.file, o2, i2);
      });
    }, () => {
      throw new TypeError("file is required");
    }, () => {
      throw new TypeError("file is required");
    }, (e2, t2) => {
      if (!((e3) => !!e3.file)(e2)) throw new TypeError("file is required");
      if (e2.gzip || e2.brotli || e2.zstd || e2.file.endsWith(".br") || e2.file.endsWith(".tbr")) throw new TypeError("cannot append to compressed archives");
      if (!t2?.length) throw new TypeError("no paths specified to add/replace");
    }), Ii = (_r(Ei.syncFile, Ei.asyncFile, Ei.syncNoFile, Ei.asyncNoFile, (e2, t2 = []) => {
      Ei.validate?.(e2, t2), Ii(e2);
    }), (e2) => {
      let t2 = e2.filter;
      e2.mtimeCache || (e2.mtimeCache = /* @__PURE__ */ new Map()), e2.filter = t2 ? (r2, n2) => t2(r2, n2) && !((e2.mtimeCache?.get(r2) ?? n2.mtime ?? 0) > (n2.mtime ?? 0)) : (t3, r2) => !((e2.mtimeCache?.get(t3) ?? r2.mtime ?? 0) > (r2.mtime ?? 0));
    });
    const Ti = ".cache-complete";
    function Ci(e2) {
      return e2.replace(/[^a-zA-Z0-9_-]/g, "_");
    }
    function Pi(e2) {
      return e2.replace(/[^a-zA-Z0-9_-]/g, "_");
    }
    function Ai(e2) {
      return (0, Fe.Nz)(e2);
    }
    function Ri(e2, t2) {
      return (function(e3, t3, r2, n2) {
        const s2 = [e3, t3, r2];
        return void 0 !== n2 && s2.push(n2), (0, I.join)(...s2);
      })(e2, Ci(t2.marketplaceSlug), Pi(t2.pluginId), void 0 !== t2.version ? Ai(t2.version) : void 0);
    }
    class Mi {
      constructor(e2, t2) {
        const r2 = e2 ?? process.env.HOME ?? "";
        this.cacheRoot = t2?.cacheRoot ?? (0, I.join)(r2, ".cursor", "plugins/cache");
      }
      getCacheDir(e2) {
        return Ri(this.cacheRoot, e2);
      }
      async isCached(e2) {
        const t2 = this.getCacheDir(e2);
        try {
          const e3 = (0, I.join)(t2, Ti);
          return (await (0, ve.stat)(e3)).isFile();
        } catch {
          return false;
        }
      }
      async extractToCache(e2) {
        const t2 = this.getCacheDir(e2);
        await (0, ve.mkdir)(t2, { recursive: true });
        const r2 = De.Readable.from(e2.tarball);
        return await (0, qe.pipeline)(r2, (0, Ne.createGunzip)(), bi({ cwd: t2, strip: 1 })), await this.markCacheComplete(e2), t2;
      }
      async listCachedVersions(e2) {
        const t2 = Ci(e2.marketplaceSlug), r2 = Pi(e2.pluginId), n2 = (0, I.join)(this.cacheRoot, t2, r2);
        try {
          return (await (0, ve.readdir)(n2, { withFileTypes: true })).filter((e3) => e3.isDirectory()).map((e3) => e3.name);
        } catch {
          return [];
        }
      }
      async removeVersion(e2) {
        const t2 = this.getCacheDir(e2);
        try {
          await (0, ve.rm)(t2, { recursive: true, force: true });
        } catch {
        }
      }
      async removeAllVersions(e2) {
        const t2 = Ri(this.cacheRoot, e2);
        await (0, ve.rm)(t2, { recursive: true, force: true });
      }
      async pruneOldVersions(e2) {
        const t2 = await this.listCachedVersions({ marketplaceSlug: e2.marketplaceSlug, pluginId: e2.pluginId }), r2 = new Set(e2.keepVersions.map((e3) => Ai(e3)));
        for (const n2 of t2) r2.has(n2) || await this.removeVersion({ marketplaceSlug: e2.marketplaceSlug, pluginId: e2.pluginId, version: n2 });
      }
      async markCacheComplete(e2) {
        const t2 = this.getCacheDir(e2);
        await (0, ve.writeFile)((0, I.join)(t2, Ti), "");
      }
    }
    const Ji = /^https?:\/\/(?:www\.)?github\.com\/([^/]+)\/([^/]+?)(?:\/tree\/(.+?)(?=(?:\/?\.git)?\/?$))?(?:\/?\.git)?\/?$/i;
    function Oi(e2) {
      const t2 = e2.trim().match(Ji);
      if (!t2) return null;
      const [, r2, n2, s2] = t2;
      return { owner: r2, repo: n2.replace(/\.git$/i, ""), branch: s2 ?? "main" };
    }
    class Bi {
      constructor(e2) {
        const t2 = e2 ?? process.env.HOME ?? "";
        this.filePath = (0, I.join)(t2, ".cursor", "plugins", "github-plugins.json");
      }
      async ensureDir() {
        const { mkdir: e2 } = await Promise.resolve().then(r.t.bind(r, 51455, 19));
        await e2((0, I.dirname)(this.filePath), { recursive: true });
      }
      async readFile() {
        try {
          const e2 = await (0, ve.readFile)(this.filePath, "utf-8"), t2 = JSON.parse(e2);
          return Array.isArray(t2.plugins) ? { plugins: t2.plugins } : { plugins: [] };
        } catch {
          return { plugins: [] };
        }
      }
      async writeFile(e2) {
        await this.ensureDir(), await (0, ve.writeFile)(this.filePath, JSON.stringify({ version: 1, ...e2 }, null, 2), "utf-8");
      }
      async addPlugin(e2) {
        const t2 = Oi(e2);
        if (!t2) throw new Error(`Invalid GitHub URL: "${e2}". Expected format: https://github.com/owner/repo or .../owner/repo/tree/branch`);
        const r2 = `${t2.owner}-${t2.repo}`, n2 = t2.repo, s2 = await this.readFile();
        if (s2.plugins.some((e3) => e3.id === r2)) throw new Error(`Plugin "${r2}" is already added.`);
        return s2.plugins.push({ id: r2, url: `https://github.com/${t2.owner}/${t2.repo}`, branch: t2.branch, owner: t2.owner, repo: t2.repo }), await this.writeFile(s2), { id: r2, name: n2 };
      }
      async removePlugin(e2) {
        const t2 = await this.readFile(), r2 = t2.plugins.length;
        t2.plugins = t2.plugins.filter((t3) => t3.id !== e2), t2.plugins.length !== r2 && await this.writeFile(t2);
      }
      async listPlugins() {
        return (await this.readFile()).plugins.map((e2) => {
          const t2 = Oi(e2.url);
          return { ...e2, owner: e2.owner ?? t2?.owner ?? "unknown", repo: e2.repo ?? t2?.repo ?? "unknown" };
        });
      }
    }
    var Di = r(48161);
    var qi = r(57975);
    function Ni(e2, t2) {
      const r2 = e2.releaseTag ?? t2;
      if (e2.releaseRepo && e2.releaseAsset && r2) return { kind: "release", releaseRepo: e2.releaseRepo, releaseAsset: e2.releaseAsset, releaseTag: r2 };
    }
    var Fi = r(66058);
    function Ui() {
      const e2 = ["-c", "credential.interactive=false", "-c", "core.fsmonitor=false"];
      return "win32" === process.platform && e2.push("-c", "core.longpaths=true"), e2;
    }
    function Li(e2) {
      return "function" == typeof e2 ? e2() : e2;
    }
    async function $i(e2, t2) {
      const r2 = (function(e3) {
        const t3 = { ...process.env, GIT_TERMINAL_PROMPT: "0", GIT_ASKPASS: void 0, VSCODE_GIT_ASKPASS_NODE: void 0, VSCODE_GIT_ASKPASS_MAIN: void 0, VSCODE_GIT_ASKPASS_EXTRA_ARGS: void 0, GCM_INTERACTIVE: "Never" };
        if (t3.GIT_CONFIG_NOSYSTEM = void 0, true === e3?.sshBatchMode) {
          const e4 = process.env.GIT_SSH_COMMAND?.trim() || "ssh";
          t3.GIT_SSH_COMMAND = `${e4} -oBatchMode=yes`;
        }
        if (void 0 !== e3?.extraGitConfig) {
          const r3 = Object.entries(e3.extraGitConfig).flatMap(([e4, t4]) => Array.isArray(t4) ? t4.map((t5) => [e4, t5]) : [[e4, t4]]);
          t3.GIT_CONFIG_COUNT = String(r3.length);
          for (const [e4, [n2, s2]] of r3.entries()) t3[`GIT_CONFIG_KEY_${e4}`] = n2, t3[`GIT_CONFIG_VALUE_${e4}`] = s2;
        }
        return { cwd: e3?.cwd, env: t3 };
      })({ cwd: t2?.cwd, sshBatchMode: t2?.sshBatchMode, extraGitConfig: t2?.extraGitConfig });
      return (0, Fi.uM)("git", [...Ui(), ...e2], { ...r2, ...void 0 !== t2?.timeoutMs && { timeout: t2.timeoutMs, killSignal: "SIGTERM" } });
    }
    const ji = /^[0-9a-f]{7,40}$/i, Gi = /^[0-9a-f]{40}$/i;
    function zi(e2) {
      for (const t2 of e2.split(/\r?\n/)) {
        const [e3, r2] = t2.split("	");
        if (!e3?.startsWith("ref: ") || "HEAD" !== r2) continue;
        const n2 = e3.slice(5).trim();
        return n2.startsWith("refs/heads/") ? n2.slice(11) : n2;
      }
    }
    function Wi(e2) {
      if (void 0 === e2 || "" === e2) return;
      const t2 = e2.split(/\r?\n/).map((e3) => {
        const [t3, r2] = e3.split("	");
        if (t3 && r2 && /^[0-9a-f]{40}$/i.test(t3)) return { sha: t3, refName: r2 };
      }).filter((e3) => void 0 !== e3);
      return 0 !== t2.length ? t2.find((e3) => e3.refName.endsWith("^{}"))?.sha ?? t2[0].sha : void 0;
    }
    async function Hi(e2, t2, r2) {
      const n2 = t2.trim();
      if (Gi.test(n2)) return { fullSha: n2.toLowerCase() };
      if (ji.test(n2)) {
        try {
          const t3 = await (async function(e3, t4, r3) {
            const { stdout: n3 } = await $i(["ls-remote", e3, `refs/heads/${t4}`, `refs/tags/${t4}`, `refs/tags/${t4}^{}`], { sshBatchMode: r3?.sshBatchMode, extraGitConfig: r3?.extraGitConfig, timeoutMs: r3?.timeoutMs });
            return Wi(n3)?.toLowerCase();
          })(e2, n2, r2);
          if (t3) return { fullSha: t3 };
        } catch {
        }
        return { fullSha: n2.toLowerCase() };
      }
      let s2;
      try {
        if ("HEAD" === n2.toUpperCase()) {
          const t3 = await $i(["ls-remote", "--symref", e2, "HEAD"], { sshBatchMode: r2?.sshBatchMode, extraGitConfig: r2?.extraGitConfig, timeoutMs: r2?.timeoutMs }), n3 = Wi(t3.stdout);
          if (!n3) throw new Error(`git ls-remote did not return a resolvable commit for HEAD (${e2})`);
          return { fullSha: n3.toLowerCase(), headSymrefStdout: t3.stdout };
        }
        s2 = (await $i(["ls-remote", e2, n2], { sshBatchMode: r2?.sshBatchMode, extraGitConfig: r2?.extraGitConfig, timeoutMs: r2?.timeoutMs })).stdout;
      } catch (t3) {
        const r3 = t3 instanceof Error ? t3.message : String(t3), s3 = new Error(`Failed to resolve git ref "${n2}" for ${e2}: ${r3}`);
        throw s3.cause = t3, s3;
      }
      const o2 = Wi(s2);
      if (!o2) throw new Error(`git ls-remote did not return a resolvable commit for ref "${n2}" (${e2})`);
      return { fullSha: o2.toLowerCase() };
    }
    const Ki = q.map((e2) => e2.split("/")[0]);
    const Vi = 2, Yi = 28;
    let Qi;
    function Xi() {
      return process.env.CURSOR_DISABLE_SPARSE_PLUGIN_CLONES ? Promise.resolve(false) : (Qi ??= (async () => {
        try {
          const { stdout: e2 } = await $i(["--version"]), t2 = (function(e3) {
            const t3 = /git version (\d+)\.(\d+)/.exec(e3);
            return t3 ? { major: Number(t3[1]), minor: Number(t3[2]) } : null;
          })(e2);
          return null !== t2 && (t2.major > Vi || t2.major === Vi && t2.minor >= Yi);
        } catch {
          return false;
        }
      })(), Qi);
    }
    function Zi(e2) {
      let t2 = e2.trim().replaceAll("\\", "/");
      for (; t2.startsWith("./"); ) t2 = t2.slice(2);
      if (t2 = t2.replace(/\/+$/, ""), "" === t2 || "." === t2) return null;
      if (t2.startsWith("/") || /^[a-zA-Z]:/.test(t2)) return null;
      return t2.split("/").some((e3) => "" === e3 || "." === e3 || ".." === e3) ? null : t2;
    }
    function ea(e2) {
      const t2 = [];
      for (const r2 of e2) {
        const e3 = Zi(r2);
        if (null === e3) return "all";
        t2.push(e3);
      }
      return t2;
    }
    async function ta(e2, t2) {
      const r2 = "all" === e2 ? "all" : ea(e2), n2 = t2 && "all" !== r2 && await Xi();
      return { materialize: r2, sparse: n2, sparseDirs: n2 ? (s2 = r2, [.../* @__PURE__ */ new Set([...Ki, ...s2])]) : [] };
      var s2;
    }
    function ra(e2) {
      return e2.toLowerCase().includes("filtering not recognized by server");
    }
    async function na(e2, t2, r2) {
      await $i(["sparse-checkout", "set", "--cone", "--", ...t2], { ...r2, cwd: e2 });
    }
    async function sa(e2) {
      try {
        await (0, ve.access)((0, I.join)(e2, ".git", "info", "sparse-checkout"));
      } catch {
        return false;
      }
      try {
        const { stdout: t2 } = await $i(["config", "--bool", "--get", "core.sparseCheckout"], { cwd: e2 });
        return "true" === t2.trim();
      } catch {
        return false;
      }
    }
    async function oa(e2, t2, r2) {
      if ("all" !== t2 && 0 === t2.length) return;
      if (!await sa(e2)) return;
      const n2 = { ...r2, cwd: e2, sshBatchMode: true };
      if ("all" === t2) return void await $i(["sparse-checkout", "disable"], n2);
      const s2 = ea(t2);
      "all" !== s2 ? await $i(["sparse-checkout", "add", "--", ...s2], n2) : await $i(["sparse-checkout", "disable"], n2);
    }
    const ia = /\.git$/i, aa = /* @__PURE__ */ new Set(["account", "dashboard"]);
    function ca(e2) {
      return e2.replace(ia, "");
    }
    function la(e2) {
      let t2;
      try {
        t2 = decodeURIComponent(e2);
      } catch {
        return;
      }
      return t2.length > 0 && !t2.includes("/") ? t2 : void 0;
    }
    function ua(e2) {
      const t2 = e2.toLowerCase();
      return "github.com" === t2 || t2.endsWith(".github.com");
    }
    function da(e2) {
      return e2.toLowerCase().split(".").includes("gitlab");
    }
    function pa(e2) {
      const t2 = e2.toLowerCase();
      return "bitbucket.org" === t2 || "www.bitbucket.org" === t2;
    }
    var ma = r(15071);
    function ha(e2) {
      const t2 = e2.toLowerCase();
      return da(e2) ? "GitLab" : t2.includes("bitbucket") ? "Bitbucket" : t2.includes("gitea") || t2.includes("codeberg") ? "Gitea/Codeberg" : t2.includes("azure") && t2.includes("dev") ? "Azure DevOps" : null;
    }
    function fa(e2) {
      return ua(e2) ? "github" : da(e2) ? "gitlab" : pa(e2) ? "bitbucket" : (function(e3) {
        const t2 = e3.toLowerCase();
        return "dev.azure.com" === t2 || "www.dev.azure.com" === t2;
      })(e2) ? "azure_devops" : "generic";
    }
    function ga(e2) {
      let t2;
      try {
        const r3 = e2.startsWith("git@") ? `ssh://${e2.replace(":", "/")}` : e2;
        t2 = new URL(r3.includes("://") ? r3 : `https://${r3}`);
      } catch {
        return null;
      }
      const r2 = t2.hostname;
      let n2 = t2.pathname.split("/").filter(Boolean);
      (0, ma.ve)(r2) && "git" === n2[0]?.toLowerCase() && (n2 = n2.slice(1)), n2.length >= 3 && "scm" === n2[0].toLowerCase() && (n2 = n2.slice(1));
      const s2 = (function(e3) {
        const t3 = e3[0], r3 = e3[1];
        if (!t3 || !r3) return;
        const n3 = ca(r3);
        return n3 ? { owner: t3, repo: n3, hasSubpath: e3.length > 2 } : void 0;
      })(n2);
      return void 0 === s2 ? null : { provider: fa(r2), owner: s2.owner, repo: s2.repo, host: r2 };
    }
    function ya(e2) {
      const t2 = va(e2);
      if (null === t2) return false;
      const r2 = t2.pathname.split("/").filter(Boolean);
      return r2.length >= 3 && "scm" === r2[0].toLowerCase();
    }
    function wa(e2) {
      const t2 = e2.trim();
      if ("" === t2) return { error: "URL cannot be empty" };
      const r2 = ga(t2);
      if (null === r2) return { error: "Invalid URL format. Expected: github.com/owner/repo or https://github.example.com/owner/repo" };
      const n2 = ha(r2.host);
      if (null !== n2) return { error: `Only GitHub URLs are currently supported. ${n2} is not supported yet.` };
      const s2 = Ea(r2.host.replace(/^www\./i, ""));
      return { url: `https://${s2}/${ya(t2) ? "scm/" : ""}${r2.owner}/${r2.repo}`, owner: r2.owner, repo: r2.repo, host: s2 };
    }
    function va(e2) {
      try {
        const t2 = e2.startsWith("git@") ? `ssh://${e2.replace(":", "/")}` : e2;
        return new URL(t2.includes("://") ? t2 : `https://${t2}`);
      } catch {
        return null;
      }
    }
    function _a(e2) {
      const t2 = va(e2.trim());
      if (null !== t2 && pa(t2.hostname)) return (function(e3) {
        const t3 = e3[0], r2 = e3[1];
        if (void 0 === t3 || void 0 === r2) return;
        const n2 = la(t3), s2 = la(r2);
        if (void 0 === n2 || void 0 === s2 || aa.has(n2.toLowerCase())) return;
        const o2 = ca(s2);
        return o2 ? { workspace: encodeURIComponent(n2), repo: encodeURIComponent(o2), hasSubpath: e3.length > 2 } : void 0;
      })((function(e3) {
        const t3 = e3.pathname.split("/");
        return "" === t3[0] && t3.shift(), "" === t3[t3.length - 1] && t3.pop(), t3;
      })(t2));
    }
    function ba(e2) {
      const t2 = e2.trim();
      if ("" === t2) return { error: "URL cannot be empty" };
      const r2 = ga(t2);
      if (null === r2) return { error: "Invalid URL format. Expected: github.com/owner/repo or gitlab.com/namespace/repo" };
      if (da(r2.host)) {
        const e3 = va(t2), r3 = null === e3 ? void 0 : (function(e4) {
          const t3 = e4.indexOf("-"), r4 = -1 !== t3, n4 = r4 ? e4.slice(0, t3) : [...e4];
          if (n4.length < 2 || n4.some((e5) => 0 === e5.length)) return;
          const s2 = ca(n4[n4.length - 1]);
          return s2 ? (n4[n4.length - 1] = s2, { repositorySegments: n4, hasSpecialRouteSeparator: r4 }) : void 0;
        })(e3.pathname.split("/").filter(Boolean));
        if (null === e3 || void 0 === r3) return { error: "Invalid GitLab repository URL format. Expected: https://gitlab.com/namespace/repo" };
        const n3 = e3.host.replace(/^www\./i, "");
        return { url: `https://${n3}/${r3.repositorySegments.join("/")}`, owner: r3.repositorySegments[0], repo: r3.repositorySegments[r3.repositorySegments.length - 1], host: n3, provider: "gitlab" };
      }
      if ("bitbucket" === r2.provider) {
        const e3 = _a(t2);
        if (void 0 === e3) return { error: "Invalid Bitbucket repository URL format. Expected: https://bitbucket.org/{workspace}/{repo}" };
        const n3 = r2.host.replace(/^www\./i, "");
        return { url: `https://${n3}/${e3.workspace}/${e3.repo}`, owner: e3.workspace, repo: e3.repo, host: n3, provider: "bitbucket" };
      }
      if ("azure_devops" === r2.provider) {
        const e3 = va(t2), n3 = null === e3 ? void 0 : (function(e4) {
          const t3 = e4.findIndex((e5) => "_git" === e5.toLowerCase());
          if (t3 < 1 || t3 > 2) return;
          const r3 = e4[0], n4 = e4[t3 + 1];
          if (!r3 || !n4) return;
          const s3 = ca(n4);
          if (!s3) return;
          const o2 = 2 === t3 ? e4[1] : s3;
          return o2 ? { organization: r3, project: o2, repo: s3, hasSubpath: e4.length > t3 + 2 } : void 0;
        })(e3.pathname.split("/").filter(Boolean));
        if (null === e3 || void 0 === n3) return { error: "Invalid Azure DevOps repository URL format. Expected: https://dev.azure.com/{organization}/{project}/_git/{repo}" };
        const s2 = r2.host.replace(/^www\./i, "");
        return { url: `https://${s2}/${n3.organization}/${n3.project}/_git/${n3.repo}`, owner: n3.organization, repo: n3.repo, host: s2, provider: "azure_devops", project: n3.project };
      }
      if (Sa(r2)) {
        const e3 = Ea(r2.host.replace(/^www\./i, ""));
        return { url: `https://${e3}/${ya(t2) ? "scm/" : ""}${r2.owner}/${r2.repo}`, owner: r2.owner, repo: r2.repo, host: e3, provider: "github" };
      }
      const n2 = ha(r2.host);
      return { error: "Only GitHub, GitLab, Bitbucket, and Azure DevOps URLs are currently supported." + (null !== n2 ? ` ${n2} is not supported yet.` : "") };
    }
    function Sa(e2) {
      switch (e2.provider) {
        case "github":
          return true;
        case "generic":
          return !(0, ma.ve)(e2.host) && null === ha(e2.host);
        case "gitlab":
        case "bitbucket":
        case "azure_devops":
          return false;
        default:
          e2.provider;
          return false;
      }
    }
    function ka(e2) {
      const t2 = ba(e2);
      if ("error" in t2) return null;
      switch (t2.provider) {
        case "github":
          return `git@${t2.host}:${t2.owner}/${t2.repo}.git`;
        case "gitlab":
          return (function(e3) {
            let t3;
            try {
              t3 = new URL(e3.url).pathname.replace(/^\//, "").replace(/\.git$/i, "");
            } catch {
              return null;
            }
            if (0 === t3.length) return null;
            const r2 = e3.host.replace(/:\d+$/, "");
            return `git@${r2}:${t3}.git`;
          })(t2);
        case "bitbucket":
        case "azure_devops":
          return null;
        default:
          t2.provider;
          return null;
      }
    }
    function xa(e2) {
      return null != e2 && e2.trim().toLowerCase().startsWith("file://");
    }
    function Ea(e2) {
      return ua(e2) ? "github.com" : e2;
    }
    function Ia(e2) {
      return !e2.operatingSystems || 0 === e2.operatingSystems.length || e2.operatingSystems.includes((function() {
        const e3 = (0, Di.platform)();
        return "win32" === e3 ? "Windows" : "darwin" === e3 ? "Macintosh" : "Linux";
      })());
    }
    function Ta(e2) {
      return /[\n\r:#[\]{}&*!|>'"%@`]/.test(e2) || e2.startsWith(" ") || e2.endsWith(" ") ? `"${e2.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"` : e2;
    }
    var Ca = r(65716);
    function Pa(e2, t2) {
      const r2 = (0, I.resolve)(e2), n2 = (0, I.resolve)(e2, t2), s2 = (0, I.relative)(r2, n2);
      if (s2.startsWith("..") || (0, I.isAbsolute)(s2)) throw new Error(`Invalid subPath: path traversal not allowed (${JSON.stringify(t2)})`);
      return n2;
    }
    const Aa = /* @__PURE__ */ new Set(["con", "prn", "aux", "nul", "com1", "com2", "com3", "com4", "com5", "com6", "com7", "com8", "com9", "lpt1", "lpt2", "lpt3", "lpt4", "lpt5", "lpt6", "lpt7", "lpt8", "lpt9"]);
    function Ra(e2) {
      const t2 = (0, Fe.Nz)(e2).replace(/[. ]+$/g, "");
      return "" === t2 || "." === t2 || ".." === t2 ? "_" : Aa.has(t2.toLowerCase()) ? `_${t2}` : t2;
    }
    const Ma = 18e5, Ja = 6e5, Oa = { recursive: true, force: true, maxRetries: 3 }, Ba = ["terminal prompts disabled", "could not read username", "host key verification failed", "could not read from remote repository", "permission denied", "repository not found", "user cancelled dialog", "spawn git enoent", "authentication failed", "unable to get password from user"], Da = ["enotempty: directory not empty, rename", "/_staging/"], qa = ["upload-pack: not our ref", "server does not allow request for unadvertised object"];
    function Na(e2) {
      const t2 = String(e2).toLowerCase().replaceAll("\\", "/");
      return Ba.some((e3) => t2.includes(e3)) ? "user_git_access" : Da.every((e3) => t2.includes(e3)) ? "local_cache_race" : qa.some((e3) => t2.includes(e3)) ? "stale_pinned_ref" : "infrastructure";
    }
    function Fa(e2) {
      return "object" == typeof e2 && null !== e2 && (true === e2.killed || Fa(e2.cause));
    }
    function Ua(e2) {
      return Fa(e2) ? "killed_by_budget" : Na(e2);
    }
    function La(e2) {
      const t2 = ba(e2);
      if (!("error" in t2) && "gitlab" === t2.provider) {
        let r3;
        try {
          r3 = new URL(t2.url).pathname.replace(/^\//, "");
        } catch {
          throw new Error(`Invalid git URL: ${e2}`);
        }
        const n2 = r3.split("/").filter(Boolean).map((e3) => e3.toLowerCase());
        if (n2.length < 2) throw new Error(`Invalid git URL: ${e2}`);
        return { host: t2.host.toLowerCase(), pathSegments: n2 };
      }
      const r2 = ga(e2);
      if (null === r2) throw new Error(`Invalid git URL: ${e2}`);
      return { host: Ea(r2.host.replace(/^www\./i, "")).toLowerCase(), pathSegments: [r2.owner.toLowerCase(), r2.repo.toLowerCase()] };
    }
    const $a = /* @__PURE__ */ new Map();
    class ja {
      constructor(e2, t2) {
        this.cacheRoot = e2, this.options = t2, this.manifestCache = /* @__PURE__ */ new Map();
      }
      get sparsePluginClones() {
        return this.options?.sparsePluginClones ?? false;
      }
      remoteTimeoutMs() {
        return this.sparsePluginClones ? Ma : void 0;
      }
      localTimeoutMs() {
        return this.sparsePluginClones ? Ja : void 0;
      }
      lsRemoteTimeoutMs() {
        return this.sparsePluginClones ? 3e4 : void 0;
      }
      async cloneResolvedRef(e2, t2, r2, n2) {
        const s2 = { cwd: e2, sshBatchMode: n2?.sshBatchMode, extraGitConfig: { ...Li(this.options?.extraGitConfig), "safe.directory": e2 } }, { sparse: o2, sparseDirs: i2 } = await ta(n2?.materialize ?? "all", this.sparsePluginClones);
        await $i(["init"], { ...s2, timeoutMs: this.localTimeoutMs() }), o2 && await na(e2, i2, { sshBatchMode: n2?.sshBatchMode, extraGitConfig: Li(this.options?.extraGitConfig), timeoutMs: this.localTimeoutMs() });
        const { stderr: a2 } = await $i(["fetch", "--depth", "1", ...o2 ? ["--filter=blob:none"] : [], t2, r2], { ...s2, timeoutMs: this.remoteTimeoutMs() });
        return await $i(["checkout", "FETCH_HEAD"], { ...s2, timeoutMs: this.remoteTimeoutMs() }), { strategy: o2 ? "sparse" : "full", filterIgnoredByServer: o2 && ra(a2 ?? "") };
      }
      async createStagingDir() {
        const e2 = (0, I.join)(this.cacheRoot, "_staging", (0, E.randomUUID)());
        return await (0, ve.mkdir)(e2, { recursive: true }), e2;
      }
      async moveToCanonicalDir(e2, t2) {
        return await (0, ve.mkdir)((0, I.dirname)(t2), { recursive: true }), await (0, ve.rm)(t2, Oa), await (0, ve.rename)(e2, t2), t2;
      }
      async cleanStaleStagingDirs() {
        const e2 = (0, I.join)(this.cacheRoot, "_staging");
        try {
          const t2 = await (0, ve.readdir)(e2, { withFileTypes: true }), r2 = Date.now();
          await Promise.all(t2.filter((e3) => e3.isDirectory()).map(async (t3) => {
            try {
              const n2 = (0, I.join)(e2, t3.name), s2 = await (0, ve.stat)(n2);
              r2 - s2.mtimeMs > ja.STALE_STAGING_THRESHOLD_MS && await (0, ve.rm)(n2, Oa);
            } catch {
            }
          }));
        } catch {
        }
      }
      getLegacyCloneDir(e2, t2) {
        return (0, I.join)(this.cacheRoot, Ra(e2), Ra(t2));
      }
      getCanonicalCloneDir(e2, t2) {
        const { host: r2, pathSegments: n2 } = La(e2);
        return (0, I.join)(this.cacheRoot, Ra(r2), ...n2.map(Ra), Ra(t2));
      }
      getCanonicalRepoRootDir(e2) {
        const { host: t2, pathSegments: r2 } = La(e2);
        return (0, I.join)(this.cacheRoot, Ra(t2), ...r2.map(Ra));
      }
      async pruneSiblingCloneDirs(e2, t2, r2) {
        const n2 = this.getCanonicalRepoRootDir(e2), s2 = Ra(t2);
        try {
          const e3 = await (0, ve.readdir)(n2, { withFileTypes: true });
          await Promise.all(e3.filter((e4) => e4.isDirectory() && e4.name !== s2).map((e4) => (0, ve.rm)((0, I.join)(n2, e4.name), Oa)));
        } catch {
        }
        if (void 0 !== r2) try {
          await (0, ve.rm)(r2, Oa);
        } catch {
        }
      }
      async ensureCloned(e2, t2, r2, n2 = s, o2) {
        const i2 = this.serializedOnRepo(this.getCanonicalRepoRootDir(t2), () => this.ensureClonedImpl(e2, t2, r2, n2, o2?.materialize ?? "all"));
        if (this.sparsePluginClones) return i2;
        return (0, Ca.wj)(i2, 3e4, `ensureCloned timed out after 30000ms for ${t2} @ ${r2}`);
      }
      async ensureMaterialized(e2, t2, r2 = s) {
        const n2 = this.serializedOnRepo((0, I.dirname)(e2), async () => {
          const n3 = performance.now();
          try {
            await oa(e2, t2, { extraGitConfig: Li(this.options?.extraGitConfig), timeoutMs: this.remoteTimeoutMs() }), r2.increment("marketplace_cache_manager.ensure_materialized.success", 1), r2.distribution("marketplace_cache_manager.ensure_materialized.duration", performance.now() - n3);
          } catch (s2) {
            throw r2.log("error", "Failed to materialize plugin directories in sparse marketplace clone", { clonePath: e2, spec: "all" === t2 ? "all" : t2.join(","), error: String(s2), errorCategory: Ua(s2) }), r2.increment("marketplace_cache_manager.ensure_materialized.error", 1, { error_category: Ua(s2) }), r2.distribution("marketplace_cache_manager.ensure_materialized.duration", performance.now() - n3, { outcome: "error" }), s2;
          }
        });
        if (this.sparsePluginClones) return n2;
        return (0, Ca.wj)(n2, 3e4, `ensureMaterialized timed out after 30000ms for ${e2}`);
      }
      async serializedOnRepo(e2, t2) {
        const r2 = `${this.cacheRoot}:${e2}`, n2 = ($a.get(r2) ?? Promise.resolve()).catch(() => {
        }).then(t2);
        $a.set(r2, n2);
        try {
          return await n2;
        } finally {
          $a.get(r2) === n2 && $a.delete(r2);
        }
      }
      async ensureClonedImpl(e2, t2, r2, n2, s2) {
        n2.log("info", `MarketplaceCacheManager: Ensuring cloned ${e2} at ${t2}@${r2}`, { marketplaceId: e2, gitUrl: t2, ref: r2 });
        const o2 = r2.trim();
        let i2, a2 = t2.startsWith("git@") || t2.startsWith("ssh://") ? null : ka(t2);
        if (null !== a2) try {
          i2 = (await Hi(a2, o2, { sshBatchMode: true, extraGitConfig: Li(this.options?.extraGitConfig), timeoutMs: this.lsRemoteTimeoutMs() })).fullSha;
        } catch (e3) {
          if (this.sparsePluginClones && Fa(e3)) throw e3;
          n2.log("debug", "Failed to resolve remote ref using SSH URL, falling back to HTTPS", { gitUrl: t2, ref: r2, error: String(e3), errorCategory: Na(e3) }), a2 = null, i2 = (await Hi(t2, o2, { extraGitConfig: Li(this.options?.extraGitConfig), timeoutMs: this.lsRemoteTimeoutMs() })).fullSha;
        }
        else i2 = (await Hi(t2, o2, { extraGitConfig: Li(this.options?.extraGitConfig), timeoutMs: this.lsRemoteTimeoutMs() })).fullSha;
        const c2 = this.getCanonicalCloneDir(t2, i2), l2 = this.getLegacyCloneDir(e2, o2);
        n2.log("info", `MarketplaceCacheManager: Resolved clone directory for ${e2} at ${t2}@${r2} to ${c2}`, { marketplaceId: e2, resolvedRef: i2, originalRef: o2 });
        const u2 = performance.now(), d2 = (e3, t3) => {
          n2.increment(`marketplace_cache_manager.ensure_cloned.${e3}`, 1, t3), n2.distribution(`marketplace_cache_manager.ensure_cloned.${e3}.duration`, performance.now() - u2, t3);
        };
        if (await this.isCloneComplete(c2)) {
          await this.pruneSiblingCloneDirs(t2, i2, l2);
          const e3 = await sa(c2);
          return e3 && await oa(c2, s2, { extraGitConfig: Li(this.options?.extraGitConfig), timeoutMs: this.remoteTimeoutMs() }), d2("cache_hit", { strategy: e3 ? "sparse" : "full" }), c2;
        }
        return n2.increment("marketplace_cache_manager.ensure_cloned.cache_miss", 1), this.cloneViaStaging(c2, t2, a2, i2, l2, r2, n2, d2, s2);
      }
      async cloneViaStaging(e2, t2, r2, n2, s2, o2, i2, a2, c2) {
        await this.cleanStaleStagingDirs();
        const l2 = await this.createStagingDir();
        i2.log("info", `MarketplaceCacheManager: Cloning ${t2}@${o2} into staging directory: ${l2}`, { gitUrl: t2, ref: o2, cloneDir: e2 });
        const u2 = this.sparsePluginClones ? setInterval(() => {
          const e3 = /* @__PURE__ */ new Date();
          (0, ve.utimes)(l2, e3, e3).catch(() => {
          });
        }, ja.STAGING_HEARTBEAT_INTERVAL_MS) : void 0;
        u2?.unref?.();
        try {
          let u3;
          if (null !== r2) try {
            u3 = await this.cloneResolvedRef(l2, r2, n2, { sshBatchMode: true, materialize: c2 });
          } catch (e3) {
            if (this.sparsePluginClones && Fa(e3)) throw e3;
            i2.log("debug", "Falling back to HTTPS clone due to SSH clone failure", { gitUrl: t2, ref: o2, error: String(e3), errorCategory: Ua(e3) }), await (0, ve.rm)(l2, Oa), await (0, ve.mkdir)(l2, { recursive: true }), u3 = await this.cloneResolvedRef(l2, t2, n2, { materialize: c2 });
          }
          else u3 = await this.cloneResolvedRef(l2, t2, n2, { materialize: c2 });
          u3.filterIgnoredByServer && (i2.log("warn", "Server ignored --filter=blob:none; sparse clone downloaded a full pack", { gitUrl: t2, ref: o2 }), i2.increment("marketplace_cache_manager.ensure_cloned.filter_ignored_by_server", 1));
          const d2 = await this.moveToCanonicalDir(l2, e2);
          return await this.pruneSiblingCloneDirs(t2, n2, s2), a2("cache_write_success", { strategy: u3.strategy }), d2;
        } catch (e3) {
          const r3 = Ua(e3);
          throw a2("error", { error_category: r3 }), i2.log("error", "Failed to clone marketplace repository via staging clone", { gitUrl: t2, ref: o2, error: String(e3), errorCategory: r3 }), i2.captureException(e3, { error_type: "clone_marketplace_repository", error_category: r3 }), e3;
        } finally {
          void 0 !== u2 && clearInterval(u2);
          try {
            await (0, ve.rm)(l2, Oa);
          } catch {
          }
        }
      }
      async isCloneComplete(e2) {
        try {
          if (!(await (0, ve.stat)(e2)).isDirectory()) return false;
          const t2 = await (0, ve.readdir)(e2);
          if (!t2.includes(".git")) return false;
          if (t2.length > 1) return true;
          try {
            return (await (0, ve.stat)((0, I.join)(e2, ".git", "info", "sparse-checkout"))).isFile();
          } catch {
            return false;
          }
        } catch {
          return false;
        }
      }
      getPluginDir(e2, t2) {
        return Pa(e2, t2);
      }
      async copyPluginToDir(e2, t2) {
        await (0, ve.mkdir)(t2, { recursive: true }), await (0, ve.cp)(e2, t2, { recursive: true, verbatimSymlinks: true });
      }
      async readManifest(e2, t2 = {}) {
        const r2 = (function(e3, t3) {
          return JSON.stringify({ clonePath: e3, repoName: t3.repoName ?? null, fallbackId: t3.fallbackId ?? null });
        })(e2, t2);
        if (this.manifestCache.has(r2)) return this.manifestCache.get(r2) ?? null;
        const n2 = await Ga(e2, t2);
        return this.manifestCache.set(r2, n2), n2;
      }
      async resolvePluginPath(e2, t2) {
        const r2 = await this.readManifest(e2);
        if (!r2) return null;
        const n2 = r2.plugins.find((e3) => e3.name === t2.toLowerCase());
        if (!n2) return null;
        const s2 = he(n2.source, r2.metadata?.pluginRoot);
        return s2 && ge(s2) ? s2 : null;
      }
      async discoverPlugins(e2) {
        const t2 = await this.readManifest(e2);
        return t2 ? za(t2) : [];
      }
    }
    async function Ga(e2, t2 = {}) {
      for (const r2 of q) {
        const n2 = (0, I.join)(e2, r2);
        let s2;
        try {
          s2 = await (0, ve.readFile)(n2, "utf-8");
        } catch {
          continue;
        }
        const o2 = pe(s2, t2);
        if (o2.success) return o2.data;
      }
      return null;
    }
    function za(e2) {
      const t2 = [], r2 = (function(e3, t3) {
        const r3 = [];
        for (const n2 of e3) {
          const e4 = n2.source;
          if ("string" == typeof e4) {
            const s2 = he(e4, t3);
            null !== s2 ? r3.push({ entry: n2, kind: "local", localPath: s2 }) : r3.push({ entry: n2, kind: "unresolvable", rawSource: e4 });
            continue;
          }
          switch (e4.source) {
            case "github":
              r3.push({ entry: n2, kind: "external-github", externalUrl: `https://github.com/${e4.repo}.git`, externalRef: e4.ref, externalSha: e4.sha, effectiveRef: e4.sha ?? e4.ref });
              break;
            case "url":
              r3.push({ entry: n2, kind: "external-url", externalUrl: e4.url, externalRef: e4.ref, externalSha: e4.sha, effectiveRef: e4.sha ?? e4.ref });
              break;
            case "git-subdir":
              r3.push({ entry: n2, kind: "external-git-subdir", externalUrl: e4.url, externalRef: e4.ref, externalSha: e4.sha, effectiveRef: e4.sha ?? e4.ref, subdirPath: e4.path });
          }
        }
        return r3;
      })(e2.plugins, e2.metadata?.pluginRoot);
      for (const e3 of r2) {
        const { name: r3, displayName: n2, description: s2, version: o2 } = e3.entry, i2 = { name: r3, displayName: n2, description: s2, version: o2 };
        switch (e3.kind) {
          case "local":
            ge(e3.localPath) && t2.push({ ...i2, sourceType: "local", gitPath: e3.localPath });
            break;
          case "external-github":
            t2.push({ ...i2, sourceType: "github", gitUrl: e3.externalUrl, gitRef: e3.externalRef, sha: e3.externalSha });
            break;
          case "external-url":
            t2.push({ ...i2, sourceType: "url", gitUrl: e3.externalUrl, gitRef: e3.externalRef, sha: e3.externalSha });
            break;
          case "external-git-subdir":
            t2.push({ ...i2, sourceType: "git-subdir", gitUrl: e3.externalUrl, gitRef: e3.externalRef, sha: e3.externalSha, subdirPath: e3.subdirPath });
            break;
          case "unresolvable":
            break;
          default:
        }
      }
      return t2;
    }
    ja.STALE_STAGING_THRESHOLD_MS = 3e5, ja.STAGING_HEARTBEAT_INTERVAL_MS = 6e4;
    const Wa = (0, qi.debuglog)("cursor-plugins");
    function Ha(e2) {
      const t2 = e2.name?.trim();
      return void 0 !== t2 && t2.length > 0 ? t2 : e2.pluginId;
    }
    function Ka(e2, t2) {
      return void 0 !== e2?.marketplace ? e2.marketplace : void 0 !== e2?.marketplaceId ? (t2 ?? []).find((t3) => void 0 !== t3.id && String(t3.id) === String(e2.marketplaceId)) : void 0;
    }
    function Va(e2, t2) {
      const r2 = t2?.distributionGitUrl?.trim();
      return r2 ? t2?.gitUrl && !ic(e2, t2.gitUrl) ? e2 : r2 : e2;
    }
    function Ya(e2) {
      return e2?.distributionGitUrl?.trim() || e2?.gitUrl;
    }
    function Qa(e2, t2) {
      if (e2.pinnedGitRef) return e2.pinnedGitRef;
      if (e2.plugin?.gitRef) return e2.plugin.gitRef;
      const r2 = Ka(e2.plugin, t2), n2 = e2.plugin?.gitUrl, s2 = r2?.gitUrl;
      return !(n2 && s2 && n2 !== s2) && r2?.gitRef ? r2.gitRef : "main";
    }
    const Xa = "backend-git://";
    function Za(e2, t2, r2) {
      const n2 = r2 ? `#${encodeURIComponent(r2)}` : "";
      return `${Xa}${encodeURIComponent(e2)}@${encodeURIComponent(t2)}${n2}`;
    }
    function ec(e2) {
      if (!e2.startsWith(Xa)) return null;
      const t2 = e2.slice(14), r2 = t2.indexOf("#"), n2 = r2 >= 0 ? t2.slice(0, r2) : t2, s2 = r2 >= 0 ? t2.slice(r2 + 1) : void 0, o2 = n2.lastIndexOf("@");
      if (o2 < 0) return null;
      return { gitUrl: decodeURIComponent(n2.slice(0, o2)), ref: decodeURIComponent(n2.slice(o2 + 1)), gitPath: s2 ? decodeURIComponent(s2) : void 0 };
    }
    const tc = "backend-release://";
    function rc(e2) {
      const t2 = e2.tag ? `@${encodeURIComponent(e2.tag)}` : "";
      return `${tc}${encodeURIComponent(e2.repo)}#${encodeURIComponent(e2.asset)}${t2}`;
    }
    function nc(e2) {
      if (!e2.startsWith(tc)) return null;
      const t2 = e2.slice(18), r2 = t2.indexOf("#");
      if (r2 < 0) return null;
      const n2 = decodeURIComponent(t2.slice(0, r2)), s2 = t2.slice(r2 + 1), o2 = s2.lastIndexOf("@");
      return { repo: n2, asset: o2 >= 0 ? decodeURIComponent(s2.slice(0, o2)) : decodeURIComponent(s2), tag: o2 >= 0 ? decodeURIComponent(s2.slice(o2 + 1)) : void 0 };
    }
    const sc = /^[0-9a-f]{7,40}$/i;
    function oc(e2) {
      let t2;
      try {
        t2 = La(e2);
      } catch {
        return null;
      }
      return `${t2.host}\0${t2.pathSegments.join("\0")}`;
    }
    function ic(e2, t2) {
      if (e2.trim() === t2.trim()) return true;
      const r2 = oc(e2), n2 = oc(t2);
      return null !== r2 && r2 === n2;
    }
    const ac = 524288e3, cc = 104857600;
    async function lc(e2, t2, r2, n2, s2, o2) {
      const i2 = await (async function(e3) {
        const { repo: t3, asset: r3, tag: n3 } = e3, { apiBase: s3, ownerRepo: o3, host: i3 } = (function(e4) {
          const t4 = e4.split("/");
          if (3 === t4.length) return { apiBase: `https://${t4[0]}/api/v3`, ownerRepo: `${t4[1]}/${t4[2]}`, host: t4[0] };
          if (2 === t4.length) return { apiBase: "https://api.github.com", ownerRepo: e4, host: "github.com" };
          throw new Error(`Invalid release repo format: ${e4}`);
        })(t3), a3 = "github.com" === i3 && void 0 !== e3.githubToken && e3.githubToken.length > 0 ? { Authorization: `token ${e3.githubToken}` } : {}, c3 = n3 ? `${s3}/repos/${o3}/releases/tags/${encodeURIComponent(n3)}` : `${s3}/repos/${o3}/releases/latest`, l3 = await fetch(c3, { headers: { Accept: "application/vnd.github.v3+json", "User-Agent": "CursorPluginInstaller", ...a3 } });
        if (!l3.ok) throw new Error(`Failed to fetch release from ${c3}: ${l3.status} ${l3.statusText}`);
        const u3 = await l3.json(), d2 = u3.assets.find((e4) => e4.name === r3);
        if (!d2) {
          const e4 = u3.assets.map((e5) => e5.name).join(", ");
          throw new Error(`Release asset "${r3}" not found. Available assets: ${e4}`);
        }
        if (d2.size > cc) throw new Error(`Release asset "${r3}" exceeds maximum size of 104857600 bytes (actual: ${d2.size})`);
        const p2 = new URL(d2.browser_download_url);
        if ("https:" !== p2.protocol || !uc(p2.hostname, i3)) throw new Error(`Refusing to download release asset from untrusted host: ${p2.hostname}`);
        const m2 = await fetch(d2.browser_download_url, { headers: { "User-Agent": "CursorPluginInstaller", Accept: "application/octet-stream", ...a3 } });
        if (!m2.ok) throw new Error(`Failed to download release asset: ${m2.status} ${m2.statusText}`);
        if (m2.url) {
          const e4 = new URL(m2.url);
          if ("https:" !== e4.protocol || !uc(e4.hostname, i3)) throw new Error(`Refusing to download release asset: redirected to untrusted host: ${e4.hostname}`);
        }
        const h2 = Buffer.from(await m2.arrayBuffer());
        if (h2.byteLength > cc) throw new Error(`Release asset "${r3}" actual download size exceeds maximum of 104857600 bytes (actual: ${h2.byteLength})`);
        if (e3.expectedSha256) {
          const t4 = (0, E.createHash)("sha256").update(h2).digest("hex");
          if (t4 !== e3.expectedSha256) throw new Error(`Release asset "${r3}" integrity check failed: expected SHA-256 ${e3.expectedSha256}, got ${t4}`);
        }
        return h2;
      })({ repo: e2, asset: t2, tag: r2, expectedSha256: s2, githubToken: o2 }), a2 = i2.byteLength;
      await (0, ve.mkdir)(n2, { recursive: true });
      const c2 = await (0, ve.mkdtemp)((0, I.join)((0, Di.tmpdir)(), "release-asset-")), l2 = (0, I.join)(c2, "asset.tar.gz"), u2 = (0, I.join)(c2, "extracted");
      try {
        await (0, ve.writeFile)(l2, i2), await (0, ve.mkdir)(u2, { recursive: true });
        let e3 = 0, t3 = 0;
        await bi({ file: l2, cwd: u2, onReadEntry: (r4) => {
          if (t3++, t3 > 5e4) throw new Error("Release archive contains too many files (>50000).");
          if (e3 += r4.size, e3 > ac) throw new Error("Release archive uncompressed size exceeds maximum of 524288000 bytes.");
          if (a2 > 0 && e3 / a2 > 100) throw new Error("Release archive has suspicious compression ratio (>100x).");
        } });
        const r3 = await (0, ve.readdir)(u2, { withFileTypes: true }), s3 = r3.filter((e4) => e4.isDirectory()), o3 = r3.filter((e4) => e4.isFile());
        let c3 = u2;
        if (1 === s3.length && 0 === o3.length) {
          const e4 = (0, I.join)(u2, s3[0].name), t4 = await (0, ve.readdir)(e4);
          t4.some((e5) => D.includes(e5)) && (c3 = e4);
        }
        const d2 = await (0, ve.readdir)(c3);
        await Promise.all(d2.map((e4) => (0, ve.cp)((0, I.join)(c3, e4), (0, I.join)(n2, e4), { recursive: true, verbatimSymlinks: true })));
      } finally {
        await (0, ve.rm)(c2, { recursive: true, force: true }).catch(() => {
        });
      }
    }
    function uc(e2, t2) {
      return !(e2 !== t2 && !e2.endsWith(".githubusercontent.com")) || ("github.com" === t2 ? "github.com" === e2 : e2.endsWith(`.${t2}`));
    }
    async function dc(e2, t2, r2 = s, n2, o2) {
      const i2 = o2?.sparsePluginClones ?? false, a2 = i2 ? Ma : void 0, c2 = nc(e2.downloadUrl);
      if (c2) {
        if (e2.gitPath) {
          const r3 = await (0, ve.mkdtemp)((0, I.join)((0, Di.tmpdir)(), "release-plugin-"));
          try {
            await lc(c2.repo, c2.asset, c2.tag, r3, o2?.expectedReleaseAssetSha256, o2?.githubToken);
            const n3 = Pa(r3, e2.gitPath);
            await (0, ve.mkdir)(t2, { recursive: true }), await (0, ve.cp)(n3, t2, { recursive: true, verbatimSymlinks: true });
          } finally {
            await (0, ve.rm)(r3, { recursive: true, force: true }).catch(() => {
            });
          }
        } else await lc(c2.repo, c2.asset, c2.tag, t2, o2?.expectedReleaseAssetSha256, o2?.githubToken);
        return;
      }
      const l2 = ec(e2.downloadUrl);
      if (!l2) throw new Error(`Invalid download URL format for plugin ${e2.pluginId}: ${e2.downloadUrl}`);
      const u2 = await (0, ve.mkdtemp)((0, I.join)((0, Di.tmpdir)(), "backend-plugin-"));
      try {
        let o3;
        if (await (async function(e3, t3, r3, n3 = s, o4, i3 = "all", a3 = false) {
          const c3 = performance.now(), l3 = sc.test(t3), u3 = "HEAD" === t3.toUpperCase(), d2 = { ...o4, "safe.directory": r3 }, p2 = a3 ? Ma : void 0, m2 = a3 ? Ja : void 0, { sparse: h2, sparseDirs: f2 } = await ta(i3, a3), g2 = h2 ? ["--filter=blob:none", "--sparse"] : [], y2 = !!h2 || void 0, w2 = async (e4) => {
            h2 && await na(r3, f2, { extraGitConfig: d2, timeoutMs: e4, sshBatchMode: true });
          }, v2 = async (e4, n4) => {
            let s2 = "";
            return u3 ? ({ stderr: s2 } = await $i(["clone", "--depth", "1", ...g2, e4, r3], { extraGitConfig: d2, timeoutMs: p2, sshBatchMode: n4 }), await w2(p2)) : l3 ? (await $i(["init"], { cwd: r3, extraGitConfig: d2, timeoutMs: m2 }), await $i(["remote", "add", "origin", e4], { cwd: r3, extraGitConfig: d2, timeoutMs: m2 }), await w2(m2), { stderr: s2 } = await $i(["fetch", "--depth", "1", ...h2 ? ["--filter=blob:none"] : [], "origin", t3], { cwd: r3, extraGitConfig: d2, timeoutMs: p2, sshBatchMode: n4 }), await $i(["checkout", "FETCH_HEAD"], { cwd: r3, extraGitConfig: d2, timeoutMs: p2, sshBatchMode: n4 })) : ({ stderr: s2 } = await $i(["clone", "--depth", "1", "--branch", t3, ...g2, e4, r3], { extraGitConfig: d2, timeoutMs: p2, sshBatchMode: n4 }), await w2(p2)), s2;
          }, _2 = e3.startsWith("git@") || e3.startsWith("ssh://") ? null : ka(e3);
          let b2 = "";
          if (null !== _2) try {
            b2 = await v2(_2, true);
          } catch (t4) {
            if (a3 && Fa(t4)) throw t4;
            await (0, ve.rm)(r3, { recursive: true, force: true }), await (0, ve.mkdir)(r3, { recursive: true }), b2 = await v2(e3, y2);
          }
          else b2 = await v2(e3, y2);
          h2 && ra(b2) && (n3.log("warn", `shallowClone: server ignored --filter=blob:none for ${e3}; sparse clone downloaded a full pack`), n3.increment("backend_marketplace_client.shallow_clone.filter_ignored_by_server", 1));
          const S2 = (performance.now() - c3).toFixed(1);
          Wa("shallowClone %s@%s completed in %sms", e3, t3, S2), n3.log("info", `shallowClone ${e3}@${t3} completed in ${S2}ms (${h2 ? "sparse" : "full"})`);
        })(l2.gitUrl, l2.ref, u2, r2, n2, l2.gitPath ? ea([l2.gitPath]) : [], i2), l2.gitPath) o3 = Pa(u2, l2.gitPath);
        else {
          const t3 = await (async function(e3, t4) {
            for (const r3 of q) {
              const n3 = (0, I.join)(e3, r3);
              let s2;
              try {
                s2 = await (0, ve.readFile)(n3, "utf-8");
              } catch {
                continue;
              }
              const o4 = pe(s2);
              if (!o4.success) return { type: "manifest-unresolved", reason: `Invalid marketplace manifest at ${r3}: ${o4.error}` };
              const i3 = o4.data, a3 = i3.plugins.find((e4) => e4.name === t4.toLowerCase());
              if (!a3) return { type: "manifest-unresolved", reason: `Plugin ${JSON.stringify(t4)} not found in ${r3}` };
              if ("string" != typeof a3.source && "git-subdir" === a3.source.source) return { type: "manifest-unresolved", reason: `Plugin ${JSON.stringify(t4)} uses unsupported git-subdir source` };
              const c3 = he(a3.source, i3.metadata?.pluginRoot);
              return c3 && ge(c3) ? { type: "resolved", gitPath: c3 } : { type: "manifest-unresolved", reason: `Plugin ${JSON.stringify(t4)} has unresolved or unsafe source path` };
            }
            return { type: "no-manifest" };
          })(u2, e2.name);
          if ("resolved" === t3.type) await oa(u2, ea([t3.gitPath]), { extraGitConfig: n2, timeoutMs: a2 }), o3 = Pa(u2, t3.gitPath);
          else {
            if ("manifest-unresolved" === t3.type) throw new Error(`Unable to install plugin ${JSON.stringify(e2.name)} without gitPath: ${t3.reason}`);
            await oa(u2, "all", { extraGitConfig: n2, timeoutMs: a2 }), o3 = u2;
          }
        }
        await (0, ve.mkdir)(t2, { recursive: true }), await (0, ve.cp)(o3, t2, { recursive: true, verbatimSymlinks: true });
      } finally {
        await (0, ve.rm)(u2, { recursive: true, force: true }).catch(() => {
        });
      }
    }
    class pc {
      constructor(e2, t2, r2, n2, o2) {
        this.getEffectiveUserPlugins = e2;
        const i2 = "string" == typeof t2 || void 0 === t2 ? { marketplaceCacheRoot: t2, pluginLogger: r2, marketplaceCacheOptions: n2, listOptions: o2 } : t2, a2 = i2.marketplaceCacheOptions ?? n2;
        this.pluginLogger = i2.pluginLogger ?? r2 ?? s, this.extraGitConfig = i2.extraGitConfig, this.awaitAuthReady = i2.awaitAuthReady, this.githubToken = i2.githubToken, this.sparsePluginClones = i2.sparsePluginClones ?? false, this.marketplaceCache = i2.marketplaceCacheRoot ? new ja(i2.marketplaceCacheRoot, { ...a2, extraGitConfig: a2?.extraGitConfig ?? i2.extraGitConfig, sparsePluginClones: this.sparsePluginClones }) : void 0;
        const c2 = i2.listOptions ?? o2;
        this.allowedMarketplaceNames = c2?.allowedMarketplaceNames ? new Set(c2.allowedMarketplaceNames) : void 0, this.enableInlinePlugins = c2?.enableInlinePlugins ?? false;
      }
      isMarketplaceAllowed(e2) {
        return void 0 === this.allowedMarketplaceNames || void 0 !== e2?.name && this.allowedMarketplaceNames.has(e2.name);
      }
      async listEnabledPlugins(e2, t2) {
        const r2 = await this.getEffectiveUserPlugins(), n2 = r2.plugins ?? [], s2 = r2.marketplaces ?? [], o2 = [], i2 = [], a2 = /* @__PURE__ */ new Map(), c2 = async (e3, t3) => {
          const r3 = `${e3}\0${t3}`;
          let n3 = a2.get(r3);
          if (!n3) {
            const s3 = Li(this.extraGitConfig), o3 = this.sparsePluginClones ? 3e4 : void 0, i3 = e3.startsWith("git@") || e3.startsWith("ssh://") ? null : ka(e3), c3 = async (e4, r4) => {
              const n4 = {};
              return r4 && (n4.sshBatchMode = true), void 0 !== s3 && (n4.extraGitConfig = s3), void 0 !== o3 && (n4.timeoutMs = o3), (Object.keys(n4).length > 0 ? await Hi(e4, t3, n4) : await Hi(e4, t3)).fullSha;
            };
            if (null !== i3) try {
              n3 = await c3(i3, true);
            } catch (t4) {
              if (this.sparsePluginClones && Fa(t4)) throw t4;
              n3 = await c3(e3, false);
            }
            else n3 = await c3(e3, false);
            a2.set(r3, n3);
          }
          return n3;
        }, l2 = async (e3) => {
          const { preferredGitUrl: t3, sourceGitUrl: r3, gitRef: n3, pluginId: s3 } = e3;
          if (t3 !== r3) {
            void 0 !== this.awaitAuthReady && await this.awaitAuthReady();
            const e4 = `${t3}\0${n3}`, o3 = !a2.has(e4);
            let i3;
            o3 && this.pluginLogger.increment("marketplace.origin_distribution.fetch", 1);
            try {
              i3 = { sha: await c2(t3, n3), gitUrl: t3 };
            } catch (e5) {
              o3 && this.pluginLogger.increment("marketplace.origin_distribution.fetch.error", 1), this.pluginLogger.captureException(e5, { error_type: "distribution_url_fallback" }), this.pluginLogger.log("warn", `Distribution mirror ${t3}@${n3} unavailable (not synced yet or unreachable); falling back to source ${r3}`, { pluginId: s3, preferredGitUrl: t3, sourceGitUrl: r3, gitRef: n3, error: String(e5) });
            }
            if (void 0 !== i3) {
              if (o3) try {
                this.pluginLogger.log("info", `Resolved plugin ${s3} from Origin distribution mirror ${t3}@${n3}`, { pluginId: s3, preferredGitUrl: t3, gitRef: n3 });
              } catch {
              }
              return i3;
            }
          }
          return { sha: await c2(r3, n3), gitUrl: r3 };
        };
        for (const e3 of n2) {
          if (!e3.isEnabled || !e3.plugin?.name) continue;
          const t3 = e3.plugin, r3 = Ka(t3, s2);
          if (!this.isMarketplaceAllowed(r3)) {
            this.pluginLogger.log("info", `Skipping plugin ${t3.name} because marketplace ${r3?.name ?? "<none>"} is not allowed`, { pluginId: t3.name, marketplaceName: r3?.name, allowedMarketplaceNames: void 0 !== this.allowedMarketplaceNames ? Array.from(this.allowedMarketplaceNames) : void 0 });
            continue;
          }
          const n3 = Ha({ name: t3.name, pluginId: void 0 !== t3.id ? String(t3.id) : t3.name ?? "" }), a3 = n3;
          if (!t3.gitUrl) {
            if (!this.enableInlinePlugins) {
              this.pluginLogger.log("info", `Skipping plugin ${n3} without gitUrl (enableInlinePlugins=false)`, { pluginId: a3 });
              continue;
            }
            const s3 = e3.inlineContentJson;
            if (!s3) {
              this.pluginLogger.log("info", `Skipping DB-inline plugin ${n3}: no inline content provided`, { pluginId: a3 });
              continue;
            }
            const i3 = (0, E.createHash)("sha256").update(`${t3.id ?? "0"}:${t3.updatedAt ?? "0"}`).digest("hex").slice(0, 40), c4 = r3?.name ? { id: void 0 !== r3.id ? `${r3.name}-${r3.id}` : `${r3.name}-inline`, name: r3.name } : void 0;
            this.pluginLogger.log("info", `BackendMarketplaceClient: Adding DB-inline plugin: ${a3}`, { pluginId: a3, marketplaceId: c4?.id ?? "unknown", version: i3 }), o2.push({ pluginId: a3, pluginDbId: void 0 !== t3.id ? String(t3.id) : void 0, configuredVariables: e3.configuredVariables, isTeamRequired: e3.isTeamRequired, name: n3, version: i3, downloadUrl: `inline://${t3.id ?? a3}`, marketplaceDbId: void 0 !== r3?.id ? String(r3.id) : void 0, marketplace: c4, inlineContentJson: s3 });
            continue;
          }
          const c3 = t3.gitUrl, u2 = Va(c3, r3), d2 = Qa(e3, s2), p2 = Ni(t3, d2), m2 = r3?.gitRef ?? d2;
          let h2, f2, g2 = u2;
          try {
            if (void 0 !== p2) h2 = `release/${p2.releaseTag}`;
            else {
              const e4 = await l2({ preferredGitUrl: u2, sourceGitUrl: c3, gitRef: d2, pluginId: a3 });
              h2 = e4.sha, g2 = e4.gitUrl;
            }
          } catch (e4) {
            this.pluginLogger.captureException(e4, { error_type: "resolve_version_sha" }), this.pluginLogger.log("error", `Failed to resolve version for plugin ${n3}@${d2}, skipping plugin`, { pluginId: a3, ref: d2, error: String(e4) });
            const s3 = e4 instanceof Error ? e4.message : String(e4);
            i2.push({ pluginName: n3, pluginId: a3, pluginDbId: void 0 !== t3.id ? String(t3.id) : void 0, marketplaceName: r3?.name, errorMessage: s3, errorType: /timed?\s*out/i.test(s3) ? "timeout" : "clone" });
            continue;
          }
          f2 = void 0 !== p2 ? rc({ repo: p2.releaseRepo, asset: p2.releaseAsset, tag: p2.releaseTag }) : Za(g2, d2, t3.gitPath ?? void 0);
          const y2 = Ya(r3);
          let w2 = y2, v2 = r3?.gitUrl, _2 = m2;
          if (r3?.gitUrl && y2) {
            const e4 = ic(c3, r3.gitUrl), t4 = e4 ? g2 : y2, s3 = e4 ? c3 : r3.gitUrl, o3 = e4 ? d2 : m2;
            v2 = s3;
            try {
              const e5 = await l2({ preferredGitUrl: t4, sourceGitUrl: s3, gitRef: o3, pluginId: a3 });
              _2 = e5.sha, w2 = e5.gitUrl;
            } catch (e5) {
              this.pluginLogger.captureException(e5, { error_type: "resolve_marketplace_cache_ref" }), this.pluginLogger.log("warn", `Failed to resolve marketplace cache ref for plugin ${n3} from ${t4}@${o3}, falling back to raw ref`, { pluginId: a3, cacheRepoUrl: t4, cacheRef: o3, error: String(e5) }), w2 = s3;
            }
          }
          const b2 = r3?.name ? { id: void 0 !== r3.id ? `${r3.name}-${r3.id}` : `${r3.name}-${encodeURIComponent(r3.gitUrl ?? "project")}`, name: r3.name, ...w2 && { gitUrl: w2, gitRef: _2 } } : void 0, S2 = void 0 === p2 && (g2 !== c3 || w2 !== v2) ? { downloadUrl: Za(c3, d2, t3.gitPath ?? void 0), marketplaceGitUrl: v2 } : void 0;
          this.pluginLogger.log("info", `BackendMarketplaceClient: Adding enabled plugin: ${a3} from ${_2} at ${t3.gitPath}`, { pluginId: a3, marketplaceId: b2?.id ?? "unknown", gitPath: t3.gitPath ?? void 0, gitRef: _2 }), o2.push({ pluginId: a3, pluginDbId: void 0 !== t3.id ? String(t3.id) : void 0, configuredVariables: e3.configuredVariables, isTeamRequired: e3.isTeamRequired, name: n3, version: h2, downloadUrl: f2, marketplaceDbId: void 0 !== r3?.id ? String(r3.id) : void 0, marketplace: b2, gitPath: t3.gitPath ?? void 0, isOriginBacked: void 0 === p2 && g2 !== c3 || void 0, originSourceFallback: S2 });
        }
        return { plugins: o2, listFailures: i2 };
      }
      isDirectInstallSameFetch(e2) {
        const t2 = e2.marketplace;
        if (!t2?.gitUrl || !t2.gitRef) return false;
        const r2 = ec(e2.downloadUrl);
        return !!r2 && (!!ic(r2.gitUrl, t2.gitUrl) && (r2.ref === t2.gitRef || e2.version === t2.gitRef));
      }
      async installPlugin(e2, t2) {
        if (e2.inlineContentJson) await (async function(e3) {
          const { targetDir: t3, inlineContentJson: r2, pluginName: n2 } = e3, s2 = JSON.parse(r2);
          await (0, ve.mkdir)(t3, { recursive: true });
          const o2 = {};
          if (s2.rules && s2.rules.length > 0) {
            const e4 = (0, I.join)(t3, "rules");
            await (0, ve.mkdir)(e4, { recursive: true });
            const r3 = [];
            for (const t4 of s2.rules) {
              if (!t4.content) continue;
              if (false === t4.isActive) continue;
              const n3 = `${(0, Fe.Nz)(t4.name)}.md`, s3 = [];
              s3.push(`description: ${Ta(t4.name)}`), t4.globs && t4.globs.length > 0 && s3.push(`globs: ${Ta(t4.globs.join(", "))}`), s3.push(`alwaysApply: ${true === t4.isRequired}`);
              const o3 = `---
${s3.join("\n")}
---

`;
              await (0, ve.writeFile)((0, I.join)(e4, n3), o3 + t4.content, "utf-8"), r3.push(`rules/${n3}`);
            }
            r3.length > 0 && (o2.rules = r3);
          }
          if (s2.commands && s2.commands.length > 0) {
            const e4 = (0, I.join)(t3, "commands");
            await (0, ve.mkdir)(e4, { recursive: true });
            const r3 = [];
            for (const t4 of s2.commands) {
              if (!t4.content) continue;
              if (false === t4.isActive) continue;
              const n3 = `${(0, Fe.Nz)(t4.name)}.md`, s3 = t4.description ? `---
description: ${Ta(t4.description)}
---

` : "";
              await (0, ve.writeFile)((0, I.join)(e4, n3), s3 + t4.content, "utf-8"), r3.push(`commands/${n3}`);
            }
            r3.length > 0 && (o2.commands = r3);
          }
          if (s2.hooks && s2.hooks.length > 0) {
            const e4 = (0, I.join)(t3, "hooks");
            await (0, ve.mkdir)(e4, { recursive: true });
            const r3 = {};
            for (const e5 of s2.hooks) {
              const t4 = e5.hookStep;
              t4 && false !== e5.isActive && Ia(e5) && (r3[t4] || (r3[t4] = []), "prompt" === e5.hookType ? r3[t4].push({ type: "prompt", prompt: e5.promptContent ?? "", ...e5.promptModel ? { model: e5.promptModel } : {} }) : r3[t4].push({ type: "command", command: e5.scriptContent ?? "" }));
            }
            await (0, ve.writeFile)((0, I.join)(e4, "hooks.json"), JSON.stringify({ version: 1, hooks: r3 }, null, 2), "utf-8");
          }
          if (s2.mcpServers && s2.mcpServers.length > 0) {
            const e4 = {};
            for (const t4 of s2.mcpServers) t4.config && (e4[t4.name] = t4.config);
            Object.keys(e4).length > 0 && await (0, ve.writeFile)((0, I.join)(t3, ".mcp.json"), JSON.stringify({ mcpServers: e4 }, null, 2), "utf-8");
          }
          const i2 = { name: n2, ...o2 }, a2 = (0, I.join)(t3, ".cursor-plugin");
          await (0, ve.mkdir)(a2, { recursive: true }), await (0, ve.writeFile)((0, I.join)(a2, "plugin.json"), JSON.stringify(i2, null, 2), "utf-8");
        })({ targetDir: t2, inlineContentJson: e2.inlineContentJson, pluginName: e2.name });
        else {
          e2.isOriginBacked && void 0 !== this.awaitAuthReady && await this.awaitAuthReady();
          try {
            return void await this.installFromEntryUrls(e2, t2);
          } catch (r2) {
            const n2 = (function(e3) {
              const t3 = e3.originSourceFallback;
              if (void 0 === t3) return;
              let r3 = e3.marketplace;
              if (void 0 !== r3) if (void 0 !== t3.marketplaceGitUrl) r3 = { ...r3, gitUrl: t3.marketplaceGitUrl };
              else {
                const { gitUrl: e4, gitRef: t4, ...n3 } = r3;
                r3 = n3;
              }
              return { ...e3, downloadUrl: t3.downloadUrl, marketplace: r3, isOriginBacked: void 0, originSourceFallback: void 0 };
            })(e2);
            if (void 0 === n2) throw r2;
            this.pluginLogger.captureException(r2, { error_type: "install_plugin_from_origin_distribution" }), this.pluginLogger.log("warn", `Failed to install plugin ${e2.name} from the Origin distribution mirror, falling back to the source repo`, { pluginId: e2.pluginId, version: e2.version, sourceDownloadUrl: n2.downloadUrl, sourceMarketplaceGitUrl: n2.marketplace?.gitUrl, error: String(r2) }), this.pluginLogger.increment("marketplace.origin_distribution.install.source_fallback", 1), await (0, ve.rm)(t2, { recursive: true, force: true });
            try {
              await this.installFromEntryUrls(n2, t2);
            } catch (e3) {
              throw this.pluginLogger.increment("marketplace.origin_distribution.install.source_fallback.error", 1), e3;
            }
          }
        }
      }
      async installFromEntryUrls(e2, t2) {
        if (!(null !== nc(e2.downloadUrl))) try {
          if (await this.tryInstallFromMarketplaceCache(e2, t2)) return void this.emitOriginLoadIfApplicable(e2);
        } catch (t3) {
          if (this.pluginLogger.captureException(t3, { error_type: "install_plugin_from_marketplace_cache" }), this.sparsePluginClones && this.isDirectInstallSameFetch(e2) && Fa(t3)) throw this.pluginLogger.log("warn", `Failed to install plugin ${e2.name} from marketplace cache; skipping direct install fallback because it would repeat the identical fetch`, { pluginId: e2.pluginId, version: e2.version, error: String(t3) }), t3;
          this.pluginLogger.log("warn", `Failed to install plugin ${e2.name} from marketplace cache, falling back to direct install`, { pluginId: e2.pluginId, version: e2.version, error: String(t3) });
        }
        await dc(e2, t2, this.pluginLogger, Li(this.extraGitConfig), { githubToken: this.githubToken, sparsePluginClones: this.sparsePluginClones }), this.emitOriginLoadIfApplicable(e2);
      }
      emitOriginLoadIfApplicable(e2) {
        if (e2.isOriginBacked) try {
          this.pluginLogger.increment("marketplace.origin_distribution.load", 1), this.pluginLogger.log("info", `Loaded plugin ${e2.pluginId} from Origin distribution (fetch complete)`, { pluginId: e2.pluginId });
        } catch {
        }
      }
      async prewarmMarketplaceClones(e2) {
        const t2 = this.marketplaceCache;
        if (!t2) return;
        const r2 = /* @__PURE__ */ new Map();
        for (const t3 of e2) {
          const e3 = t3.marketplace;
          if (!e3?.gitUrl) continue;
          const n2 = e3.gitRef ?? "main", s2 = `${e3.id}\0${e3.gitUrl}\0${n2}`;
          let o2 = r2.get(s2);
          void 0 === o2 && (o2 = { marketplaceId: e3.id, gitUrl: e3.gitUrl, gitRef: n2, gitPaths: [] }, r2.set(s2, o2)), t3.gitPath && o2.gitPaths.push(t3.gitPath);
        }
        for (const e3 of r2.values()) {
          const r3 = ea(e3.gitPaths), n2 = performance.now();
          try {
            await t2.ensureCloned(e3.marketplaceId, e3.gitUrl, e3.gitRef, this.pluginLogger, { materialize: r3 }), this.pluginLogger.log("info", `Prewarmed marketplace clone ${e3.gitUrl}@${e3.gitRef} for ${e3.gitPaths.length} plugin directories`, { marketplaceId: e3.marketplaceId, gitUrl: e3.gitUrl, gitRef: e3.gitRef, requestedDirs: e3.gitPaths.length, materialize: "all" === r3 ? "all" : r3.length }), this.pluginLogger.increment("marketplace_cache_manager.prewarm.success", 1, { materialize: "all" === r3 ? "all" : "dirs" });
          } catch (t3) {
            this.pluginLogger.captureException(t3, { error_type: "prewarm_marketplace_clone" }), this.pluginLogger.log("warn", `Failed to prewarm marketplace clone ${e3.gitUrl}@${e3.gitRef}; falling back to per-plugin materialization`, { marketplaceId: e3.marketplaceId, gitUrl: e3.gitUrl, gitRef: e3.gitRef, error: String(t3) }), this.pluginLogger.increment("marketplace_cache_manager.prewarm.error", 1);
          }
          this.pluginLogger.distribution("marketplace_cache_manager.prewarm.duration", performance.now() - n2);
        }
      }
      async tryInstallFromMarketplaceCache(e2, t2) {
        const r2 = this.marketplaceCache, n2 = e2.marketplace;
        if (!r2 || !n2 || !n2.gitUrl) return this.pluginLogger.log("info", "No marketplace cache or marketplace metadata, skipping cache check", { pluginId: e2.pluginId, name: e2.name, version: e2.version, marketplaceId: e2.marketplace?.id }), false;
        const s2 = await r2.ensureCloned(n2.id, n2.gitUrl, n2.gitRef ?? "main", this.pluginLogger, { materialize: e2.gitPath ? ea([e2.gitPath]) : [] }), o2 = e2.gitPath ?? await r2.resolvePluginPath(s2, e2.name);
        if (!o2) return this.pluginLogger.log("info", "No git path found for plugin, skipping cache check", { pluginId: e2.pluginId, name: e2.name, version: e2.version, marketplaceId: e2.marketplace?.id }), false;
        void 0 === e2.gitPath && await r2.ensureMaterialized(s2, ea([o2]), this.pluginLogger);
        const i2 = r2.getPluginDir(s2, o2);
        return await r2.copyPluginToDir(i2, t2), true;
      }
      async discoverMarketplacePlugins(e2, t2, r2) {
        const n2 = this.marketplaceCache;
        if (!n2) throw new Error("discoverMarketplacePlugins requires a MarketplaceCacheManager (marketplaceCacheRoot)");
        const s2 = await n2.ensureCloned(e2, t2, r2, this.pluginLogger, { materialize: [] });
        return n2.discoverPlugins(s2);
      }
    }
    function mc(e2, t2, r2, n2, s2) {
      return new pc(e2, t2, r2, n2, s2);
    }
    var hc = r(73136), fc = r(91022), gc = r(60896);
    function yc(e2) {
      return e2.replace(/\\/g, "/").replace(/\/+$/, "") || "/";
    }
    function wc(e2, t2, r2, n2) {
      const s2 = e2?.plugins;
      if (!s2 || "object" != typeof s2) return [];
      const o2 = t2?.enabledPlugins ?? {}, i2 = {};
      r2?.enabledPlugins && Object.assign(i2, r2.enabledPlugins);
      const a2 = void 0 !== n2 ? yc(n2) : void 0, c2 = /* @__PURE__ */ new Set(), l2 = [];
      for (const [e3, t3] of Object.entries(s2)) {
        if (!Array.isArray(t3) || 0 === t3.length) continue;
        if (void 0 !== a2 && false === i2[e3]) continue;
        let r3;
        void 0 !== a2 && (r3 = t3.find((t4) => {
          if (!("project" === t4.scope || "local" === t4.scope) || !t4.projectPath) return false;
          return yc(t4.projectPath) === a2 && true === i2[e3];
        })), r3 || true !== o2[e3] || (r3 = t3.find((e4) => "user" === e4.scope)), r3?.installPath && !c2.has(e3) && (l2.push({ pluginId: e3, installPath: r3.installPath }), c2.add(e3));
      }
      return l2;
    }
    function vc(e2) {
      return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
    }
    var _c, bc, Sc, kc, xc, Ec, Ic, Tc, Cc, Pc, Ac, Rc, Mc, Jc, Oc, Bc, Dc, qc, Nc, Fc, Uc, Lc, $c, jc, Gc, zc, Wc, Hc, Kc, Vc, Yc, Qc, Xc, Zc, el, tl, rl, nl, sl, ol, il, al, cl, ll, ul = {}, dl = {}, pl = {};
    function ml() {
      if (_c) return pl;
      function e2(e3) {
        return null == e3;
      }
      return _c = 1, pl.isNothing = e2, pl.isObject = function(e3) {
        return "object" == typeof e3 && null !== e3;
      }, pl.toArray = function(t2) {
        return Array.isArray(t2) ? t2 : e2(t2) ? [] : [t2];
      }, pl.repeat = function(e3, t2) {
        let r2 = "";
        for (let n2 = 0; n2 < t2; n2 += 1) r2 += e3;
        return r2;
      }, pl.isNegativeZero = function(e3) {
        return 0 === e3 && Number.NEGATIVE_INFINITY === 1 / e3;
      }, pl.extend = function(e3, t2) {
        if (t2) {
          const r2 = Object.keys(t2);
          for (let n2 = 0, s2 = r2.length; n2 < s2; n2 += 1) {
            const s3 = r2[n2];
            e3[s3] = t2[s3];
          }
        }
        return e3;
      }, pl;
    }
    function hl() {
      if (Sc) return bc;
      function e2(e3, t3) {
        let r2 = "";
        const n2 = e3.reason || "(unknown reason)";
        return e3.mark ? (e3.mark.name && (r2 += 'in "' + e3.mark.name + '" '), r2 += "(" + (e3.mark.line + 1) + ":" + (e3.mark.column + 1) + ")", !t3 && e3.mark.snippet && (r2 += "\n\n" + e3.mark.snippet), n2 + " " + r2) : n2;
      }
      function t2(t3, r2) {
        Error.call(this), this.name = "YAMLException", this.reason = t3, this.mark = r2, this.message = e2(this, false), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
      }
      return Sc = 1, t2.prototype = Object.create(Error.prototype), t2.prototype.constructor = t2, t2.prototype.toString = function(t3) {
        return this.name + ": " + e2(this, t3);
      }, bc = t2;
    }
    function fl() {
      if (Ic) return Ec;
      Ic = 1;
      const e2 = hl(), t2 = ["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"], r2 = ["scalar", "sequence", "mapping"];
      return Ec = function(n2, s2) {
        if (s2 = s2 || {}, Object.keys(s2).forEach(function(r3) {
          if (-1 === t2.indexOf(r3)) throw new e2('Unknown option "' + r3 + '" is met in definition of "' + n2 + '" YAML type.');
        }), this.options = s2, this.tag = n2, this.kind = s2.kind || null, this.resolve = s2.resolve || function() {
          return true;
        }, this.construct = s2.construct || function(e3) {
          return e3;
        }, this.instanceOf = s2.instanceOf || null, this.predicate = s2.predicate || null, this.represent = s2.represent || null, this.representName = s2.representName || null, this.defaultStyle = s2.defaultStyle || null, this.multi = s2.multi || false, this.styleAliases = (function(e3) {
          const t3 = {};
          return null !== e3 && Object.keys(e3).forEach(function(r3) {
            e3[r3].forEach(function(e4) {
              t3[String(e4)] = r3;
            });
          }), t3;
        })(s2.styleAliases || null), -1 === r2.indexOf(this.kind)) throw new e2('Unknown kind "' + this.kind + '" is specified for "' + n2 + '" YAML type.');
      };
    }
    function gl() {
      if (Cc) return Tc;
      Cc = 1;
      const e2 = hl(), t2 = fl();
      function r2(e3, t3) {
        const r3 = [];
        return e3[t3].forEach(function(e4) {
          let t4 = r3.length;
          r3.forEach(function(r4, n3) {
            r4.tag === e4.tag && r4.kind === e4.kind && r4.multi === e4.multi && (t4 = n3);
          }), r3[t4] = e4;
        }), r3;
      }
      function n2(e3) {
        return this.extend(e3);
      }
      return n2.prototype.extend = function(s2) {
        let o2 = [], i2 = [];
        if (s2 instanceof t2) i2.push(s2);
        else if (Array.isArray(s2)) i2 = i2.concat(s2);
        else {
          if (!s2 || !Array.isArray(s2.implicit) && !Array.isArray(s2.explicit)) throw new e2("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
          s2.implicit && (o2 = o2.concat(s2.implicit)), s2.explicit && (i2 = i2.concat(s2.explicit));
        }
        o2.forEach(function(r3) {
          if (!(r3 instanceof t2)) throw new e2("Specified list of YAML types (or a single Type object) contains a non-Type object.");
          if (r3.loadKind && "scalar" !== r3.loadKind) throw new e2("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
          if (r3.multi) throw new e2("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
        }), i2.forEach(function(r3) {
          if (!(r3 instanceof t2)) throw new e2("Specified list of YAML types (or a single Type object) contains a non-Type object.");
        });
        const a2 = Object.create(n2.prototype);
        return a2.implicit = (this.implicit || []).concat(o2), a2.explicit = (this.explicit || []).concat(i2), a2.compiledImplicit = r2(a2, "implicit"), a2.compiledExplicit = r2(a2, "explicit"), a2.compiledTypeMap = (function() {
          const e3 = { scalar: {}, sequence: {}, mapping: {}, fallback: {}, multi: { scalar: [], sequence: [], mapping: [], fallback: [] } };
          function t3(t4) {
            t4.multi ? (e3.multi[t4.kind].push(t4), e3.multi.fallback.push(t4)) : e3[t4.kind][t4.tag] = e3.fallback[t4.tag] = t4;
          }
          for (let e4 = 0, r3 = arguments.length; e4 < r3; e4 += 1) arguments[e4].forEach(t3);
          return e3;
        })(a2.compiledImplicit, a2.compiledExplicit), a2;
      }, Tc = n2;
    }
    function yl() {
      if (Ac) return Pc;
      Ac = 1;
      const e2 = fl();
      return Pc = new e2("tag:yaml.org,2002:str", { kind: "scalar", construct: function(e3) {
        return null !== e3 ? e3 : "";
      } });
    }
    function wl() {
      if (Mc) return Rc;
      Mc = 1;
      const e2 = fl();
      return Rc = new e2("tag:yaml.org,2002:seq", { kind: "sequence", construct: function(e3) {
        return null !== e3 ? e3 : [];
      } });
    }
    function vl() {
      if (Oc) return Jc;
      Oc = 1;
      const e2 = fl();
      return Jc = new e2("tag:yaml.org,2002:map", { kind: "mapping", construct: function(e3) {
        return null !== e3 ? e3 : {};
      } });
    }
    function _l() {
      if (Dc) return Bc;
      Dc = 1;
      const e2 = gl();
      return Bc = new e2({ explicit: [yl(), wl(), vl()] });
    }
    function bl() {
      if (Nc) return qc;
      Nc = 1;
      const e2 = fl();
      return qc = new e2("tag:yaml.org,2002:null", { kind: "scalar", resolve: function(e3) {
        if (null === e3) return true;
        const t2 = e3.length;
        return 1 === t2 && "~" === e3 || 4 === t2 && ("null" === e3 || "Null" === e3 || "NULL" === e3);
      }, construct: function() {
        return null;
      }, predicate: function(e3) {
        return null === e3;
      }, represent: { canonical: function() {
        return "~";
      }, lowercase: function() {
        return "null";
      }, uppercase: function() {
        return "NULL";
      }, camelcase: function() {
        return "Null";
      }, empty: function() {
        return "";
      } }, defaultStyle: "lowercase" });
    }
    function Sl() {
      if (Uc) return Fc;
      Uc = 1;
      const e2 = fl();
      return Fc = new e2("tag:yaml.org,2002:bool", { kind: "scalar", resolve: function(e3) {
        if (null === e3) return false;
        const t2 = e3.length;
        return 4 === t2 && ("true" === e3 || "True" === e3 || "TRUE" === e3) || 5 === t2 && ("false" === e3 || "False" === e3 || "FALSE" === e3);
      }, construct: function(e3) {
        return "true" === e3 || "True" === e3 || "TRUE" === e3;
      }, predicate: function(e3) {
        return "[object Boolean]" === Object.prototype.toString.call(e3);
      }, represent: { lowercase: function(e3) {
        return e3 ? "true" : "false";
      }, uppercase: function(e3) {
        return e3 ? "TRUE" : "FALSE";
      }, camelcase: function(e3) {
        return e3 ? "True" : "False";
      } }, defaultStyle: "lowercase" });
    }
    function kl() {
      if ($c) return Lc;
      $c = 1;
      const e2 = ml(), t2 = fl();
      function r2(e3) {
        return e3 >= 48 && e3 <= 57 || e3 >= 65 && e3 <= 70 || e3 >= 97 && e3 <= 102;
      }
      function n2(e3) {
        return e3 >= 48 && e3 <= 55;
      }
      function s2(e3) {
        return e3 >= 48 && e3 <= 57;
      }
      function o2(e3) {
        let t3 = e3, r3 = 1, n3 = t3[0];
        if ("-" !== n3 && "+" !== n3 || ("-" === n3 && (r3 = -1), t3 = t3.slice(1), n3 = t3[0]), "0" === t3) return 0;
        if ("0" === n3) {
          if ("b" === t3[1]) return r3 * parseInt(t3.slice(2), 2);
          if ("x" === t3[1]) return r3 * parseInt(t3.slice(2), 16);
          if ("o" === t3[1]) return r3 * parseInt(t3.slice(2), 8);
        }
        return r3 * parseInt(t3, 10);
      }
      return Lc = new t2("tag:yaml.org,2002:int", { kind: "scalar", resolve: function(e3) {
        if (null === e3) return false;
        const t3 = e3.length;
        let i2 = 0, a2 = false;
        if (!t3) return false;
        let c2 = e3[i2];
        if ("-" !== c2 && "+" !== c2 || (c2 = e3[++i2]), "0" === c2) {
          if (i2 + 1 === t3) return true;
          if (c2 = e3[++i2], "b" === c2) {
            for (i2++; i2 < t3; i2++) {
              if (c2 = e3[i2], "0" !== c2 && "1" !== c2) return false;
              a2 = true;
            }
            return a2 && isFinite(o2(e3));
          }
          if ("x" === c2) {
            for (i2++; i2 < t3; i2++) {
              if (!r2(e3.charCodeAt(i2))) return false;
              a2 = true;
            }
            return a2 && isFinite(o2(e3));
          }
          if ("o" === c2) {
            for (i2++; i2 < t3; i2++) {
              if (!n2(e3.charCodeAt(i2))) return false;
              a2 = true;
            }
            return a2 && isFinite(o2(e3));
          }
        }
        for (; i2 < t3; i2++) {
          if (!s2(e3.charCodeAt(i2))) return false;
          a2 = true;
        }
        return !!a2 && isFinite(o2(e3));
      }, construct: function(e3) {
        return o2(e3);
      }, predicate: function(t3) {
        return "[object Number]" === Object.prototype.toString.call(t3) && t3 % 1 == 0 && !e2.isNegativeZero(t3);
      }, represent: { binary: function(e3) {
        return e3 >= 0 ? "0b" + e3.toString(2) : "-0b" + e3.toString(2).slice(1);
      }, octal: function(e3) {
        return e3 >= 0 ? "0o" + e3.toString(8) : "-0o" + e3.toString(8).slice(1);
      }, decimal: function(e3) {
        return e3.toString(10);
      }, hexadecimal: function(e3) {
        return e3 >= 0 ? "0x" + e3.toString(16).toUpperCase() : "-0x" + e3.toString(16).toUpperCase().slice(1);
      } }, defaultStyle: "decimal", styleAliases: { binary: [2, "bin"], octal: [8, "oct"], decimal: [10, "dec"], hexadecimal: [16, "hex"] } });
    }
    function xl() {
      if (Gc) return jc;
      Gc = 1;
      const e2 = ml(), t2 = fl(), r2 = new RegExp("^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"), n2 = new RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
      const s2 = /^[-+]?[0-9]+e/;
      return jc = new t2("tag:yaml.org,2002:float", { kind: "scalar", resolve: function(e3) {
        return null !== e3 && (!!r2.test(e3) && (!!isFinite(parseFloat(e3, 10)) || n2.test(e3)));
      }, construct: function(e3) {
        let t3 = e3.toLowerCase();
        const r3 = "-" === t3[0] ? -1 : 1;
        return "+-".indexOf(t3[0]) >= 0 && (t3 = t3.slice(1)), ".inf" === t3 ? 1 === r3 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : ".nan" === t3 ? NaN : r3 * parseFloat(t3, 10);
      }, predicate: function(t3) {
        return "[object Number]" === Object.prototype.toString.call(t3) && (t3 % 1 != 0 || e2.isNegativeZero(t3));
      }, represent: function(t3, r3) {
        if (isNaN(t3)) switch (r3) {
          case "lowercase":
            return ".nan";
          case "uppercase":
            return ".NAN";
          case "camelcase":
            return ".NaN";
        }
        else if (Number.POSITIVE_INFINITY === t3) switch (r3) {
          case "lowercase":
            return ".inf";
          case "uppercase":
            return ".INF";
          case "camelcase":
            return ".Inf";
        }
        else if (Number.NEGATIVE_INFINITY === t3) switch (r3) {
          case "lowercase":
            return "-.inf";
          case "uppercase":
            return "-.INF";
          case "camelcase":
            return "-.Inf";
        }
        else if (e2.isNegativeZero(t3)) return "-0.0";
        const n3 = t3.toString(10);
        return s2.test(n3) ? n3.replace("e", ".e") : n3;
      }, defaultStyle: "lowercase" });
    }
    function El() {
      return Wc ? zc : (Wc = 1, zc = _l().extend({ implicit: [bl(), Sl(), kl(), xl()] }));
    }
    function Il() {
      return Kc ? Hc : (Kc = 1, Hc = El());
    }
    function Tl() {
      if (Yc) return Vc;
      Yc = 1;
      const e2 = fl(), t2 = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), r2 = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
      return Vc = new e2("tag:yaml.org,2002:timestamp", { kind: "scalar", resolve: function(e3) {
        return null !== e3 && (null !== t2.exec(e3) || null !== r2.exec(e3));
      }, construct: function(e3) {
        let n2 = 0, s2 = null, o2 = t2.exec(e3);
        if (null === o2 && (o2 = r2.exec(e3)), null === o2) throw new Error("Date resolve error");
        const i2 = +o2[1], a2 = +o2[2] - 1, c2 = +o2[3];
        if (!o2[4]) return new Date(Date.UTC(i2, a2, c2));
        const l2 = +o2[4], u2 = +o2[5], d2 = +o2[6];
        if (o2[7]) {
          for (n2 = o2[7].slice(0, 3); n2.length < 3; ) n2 += "0";
          n2 = +n2;
        }
        if (o2[9]) {
          s2 = 6e4 * (60 * +o2[10] + +(o2[11] || 0)), "-" === o2[9] && (s2 = -s2);
        }
        const p2 = new Date(Date.UTC(i2, a2, c2, l2, u2, d2, n2));
        return s2 && p2.setTime(p2.getTime() - s2), p2;
      }, instanceOf: Date, represent: function(e3) {
        return e3.toISOString();
      } });
    }
    function Cl() {
      if (Xc) return Qc;
      Xc = 1;
      const e2 = fl();
      return Qc = new e2("tag:yaml.org,2002:merge", { kind: "scalar", resolve: function(e3) {
        return "<<" === e3 || null === e3;
      } });
    }
    function Pl() {
      if (el) return Zc;
      el = 1;
      const e2 = fl(), t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
      return Zc = new e2("tag:yaml.org,2002:binary", { kind: "scalar", resolve: function(e3) {
        if (null === e3) return false;
        let r2 = 0;
        const n2 = e3.length, s2 = t2;
        for (let t3 = 0; t3 < n2; t3++) {
          const n3 = s2.indexOf(e3.charAt(t3));
          if (!(n3 > 64)) {
            if (n3 < 0) return false;
            r2 += 6;
          }
        }
        return r2 % 8 == 0;
      }, construct: function(e3) {
        const r2 = e3.replace(/[\r\n=]/g, ""), n2 = r2.length, s2 = t2;
        let o2 = 0;
        const i2 = [];
        for (let e4 = 0; e4 < n2; e4++) e4 % 4 == 0 && e4 && (i2.push(o2 >> 16 & 255), i2.push(o2 >> 8 & 255), i2.push(255 & o2)), o2 = o2 << 6 | s2.indexOf(r2.charAt(e4));
        const a2 = n2 % 4 * 6;
        return 0 === a2 ? (i2.push(o2 >> 16 & 255), i2.push(o2 >> 8 & 255), i2.push(255 & o2)) : 18 === a2 ? (i2.push(o2 >> 10 & 255), i2.push(o2 >> 2 & 255)) : 12 === a2 && i2.push(o2 >> 4 & 255), new Uint8Array(i2);
      }, predicate: function(e3) {
        return "[object Uint8Array]" === Object.prototype.toString.call(e3);
      }, represent: function(e3) {
        let r2 = "", n2 = 0;
        const s2 = e3.length, o2 = t2;
        for (let t3 = 0; t3 < s2; t3++) t3 % 3 == 0 && t3 && (r2 += o2[n2 >> 18 & 63], r2 += o2[n2 >> 12 & 63], r2 += o2[n2 >> 6 & 63], r2 += o2[63 & n2]), n2 = (n2 << 8) + e3[t3];
        const i2 = s2 % 3;
        return 0 === i2 ? (r2 += o2[n2 >> 18 & 63], r2 += o2[n2 >> 12 & 63], r2 += o2[n2 >> 6 & 63], r2 += o2[63 & n2]) : 2 === i2 ? (r2 += o2[n2 >> 10 & 63], r2 += o2[n2 >> 4 & 63], r2 += o2[n2 << 2 & 63], r2 += o2[64]) : 1 === i2 && (r2 += o2[n2 >> 2 & 63], r2 += o2[n2 << 4 & 63], r2 += o2[64], r2 += o2[64]), r2;
      } });
    }
    function Al() {
      if (rl) return tl;
      rl = 1;
      const e2 = fl(), t2 = Object.prototype.hasOwnProperty, r2 = Object.prototype.toString;
      return tl = new e2("tag:yaml.org,2002:omap", { kind: "sequence", resolve: function(e3) {
        if (null === e3) return true;
        const n2 = {}, s2 = e3;
        for (let e4 = 0, o2 = s2.length; e4 < o2; e4 += 1) {
          const o3 = s2[e4];
          let i2, a2 = false;
          if ("[object Object]" !== r2.call(o3)) return false;
          for (i2 in o3) if (t2.call(o3, i2)) {
            if (a2) return false;
            a2 = true;
          }
          if (!a2) return false;
          if (t2.call(n2, i2)) return false;
          Object.defineProperty(n2, i2, { value: true });
        }
        return true;
      }, construct: function(e3) {
        return null !== e3 ? e3 : [];
      } });
    }
    function Rl() {
      if (sl) return nl;
      sl = 1;
      const e2 = fl(), t2 = Object.prototype.toString;
      return nl = new e2("tag:yaml.org,2002:pairs", { kind: "sequence", resolve: function(e3) {
        if (null === e3) return true;
        const r2 = e3, n2 = new Array(r2.length);
        for (let e4 = 0, s2 = r2.length; e4 < s2; e4 += 1) {
          const s3 = r2[e4];
          if ("[object Object]" !== t2.call(s3)) return false;
          const o2 = Object.keys(s3);
          if (1 !== o2.length) return false;
          n2[e4] = [o2[0], s3[o2[0]]];
        }
        return true;
      }, construct: function(e3) {
        if (null === e3) return [];
        const t3 = e3, r2 = new Array(t3.length);
        for (let e4 = 0, n2 = t3.length; e4 < n2; e4 += 1) {
          const n3 = t3[e4], s2 = Object.keys(n3);
          r2[e4] = [s2[0], n3[s2[0]]];
        }
        return r2;
      } });
    }
    function Ml() {
      if (il) return ol;
      il = 1;
      const e2 = fl(), t2 = Object.prototype.hasOwnProperty;
      return ol = new e2("tag:yaml.org,2002:set", { kind: "mapping", resolve: function(e3) {
        if (null === e3) return true;
        const r2 = e3;
        for (const e4 in r2) if (t2.call(r2, e4) && null !== r2[e4]) return false;
        return true;
      }, construct: function(e3) {
        return null !== e3 ? e3 : {};
      } });
    }
    function Jl() {
      return cl ? al : (cl = 1, al = Il().extend({ implicit: [Tl(), Cl()], explicit: [Pl(), Al(), Rl(), Ml()] }));
    }
    function Ol() {
      if (ll) return dl;
      ll = 1;
      const e2 = ml(), t2 = hl(), r2 = (function() {
        if (xc) return kc;
        xc = 1;
        const e3 = ml();
        function t3(e4, t4, r4, n3, s3) {
          let o3 = "", i3 = "";
          const a3 = Math.floor(s3 / 2) - 1;
          return n3 - t4 > a3 && (o3 = " ... ", t4 = n3 - a3 + o3.length), r4 - n3 > a3 && (i3 = " ...", r4 = n3 + a3 - i3.length), { str: o3 + e4.slice(t4, r4).replace(/\t/g, "→") + i3, pos: n3 - t4 + o3.length };
        }
        function r3(t4, r4) {
          return e3.repeat(" ", r4 - t4.length) + t4;
        }
        return kc = function(n3, s3) {
          if (s3 = Object.create(s3 || null), !n3.buffer) return null;
          s3.maxLength || (s3.maxLength = 79), "number" != typeof s3.indent && (s3.indent = 1), "number" != typeof s3.linesBefore && (s3.linesBefore = 3), "number" != typeof s3.linesAfter && (s3.linesAfter = 2);
          const o3 = /\r?\n|\r|\0/g, i3 = [0], a3 = [];
          let c3, l3 = -1;
          for (; c3 = o3.exec(n3.buffer); ) a3.push(c3.index), i3.push(c3.index + c3[0].length), n3.position <= c3.index && l3 < 0 && (l3 = i3.length - 2);
          l3 < 0 && (l3 = i3.length - 1);
          let u3 = "";
          const d3 = Math.min(n3.line + s3.linesAfter, a3.length).toString().length, p3 = s3.maxLength - (s3.indent + d3 + 3);
          for (let o4 = 1; o4 <= s3.linesBefore && !(l3 - o4 < 0); o4++) {
            const c4 = t3(n3.buffer, i3[l3 - o4], a3[l3 - o4], n3.position - (i3[l3] - i3[l3 - o4]), p3);
            u3 = e3.repeat(" ", s3.indent) + r3((n3.line - o4 + 1).toString(), d3) + " | " + c4.str + "\n" + u3;
          }
          const m3 = t3(n3.buffer, i3[l3], a3[l3], n3.position, p3);
          u3 += e3.repeat(" ", s3.indent) + r3((n3.line + 1).toString(), d3) + " | " + m3.str + "\n", u3 += e3.repeat("-", s3.indent + d3 + 3 + m3.pos) + "^\n";
          for (let o4 = 1; o4 <= s3.linesAfter && !(l3 + o4 >= a3.length); o4++) {
            const c4 = t3(n3.buffer, i3[l3 + o4], a3[l3 + o4], n3.position - (i3[l3] - i3[l3 + o4]), p3);
            u3 += e3.repeat(" ", s3.indent) + r3((n3.line + o4 + 1).toString(), d3) + " | " + c4.str + "\n";
          }
          return u3.replace(/\n$/, "");
        }, kc;
      })(), n2 = Jl(), s2 = Object.prototype.hasOwnProperty, o2 = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, i2 = /[\x85\u2028\u2029]/, a2 = /[,\[\]{}]/, c2 = /^(?:!|!!|![0-9A-Za-z-]+!)$/, l2 = /^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;
      function u2(e3) {
        return Object.prototype.toString.call(e3);
      }
      function d2(e3) {
        return 10 === e3 || 13 === e3;
      }
      function p2(e3) {
        return 9 === e3 || 32 === e3;
      }
      function m2(e3) {
        return 9 === e3 || 32 === e3 || 10 === e3 || 13 === e3;
      }
      function h2(e3) {
        return 44 === e3 || 91 === e3 || 93 === e3 || 123 === e3 || 125 === e3;
      }
      function f2(e3) {
        if (e3 >= 48 && e3 <= 57) return e3 - 48;
        const t3 = 32 | e3;
        return t3 >= 97 && t3 <= 102 ? t3 - 97 + 10 : -1;
      }
      function g2(e3) {
        return 120 === e3 ? 2 : 117 === e3 ? 4 : 85 === e3 ? 8 : 0;
      }
      function y2(e3) {
        return e3 >= 48 && e3 <= 57 ? e3 - 48 : -1;
      }
      function w2(e3) {
        switch (e3) {
          case 48:
            return "\0";
          case 97:
            return "\x07";
          case 98:
            return "\b";
          case 116:
          case 9:
            return "	";
          case 110:
            return "\n";
          case 118:
            return "\v";
          case 102:
            return "\f";
          case 114:
            return "\r";
          case 101:
            return "\x1B";
          case 32:
            return " ";
          case 34:
            return '"';
          case 47:
            return "/";
          case 92:
            return "\\";
          case 78:
            return "";
          case 95:
            return " ";
          case 76:
            return "\u2028";
          case 80:
            return "\u2029";
          default:
            return "";
        }
      }
      function v2(e3) {
        return e3 <= 65535 ? String.fromCharCode(e3) : String.fromCharCode(55296 + (e3 - 65536 >> 10), 56320 + (e3 - 65536 & 1023));
      }
      function _2(e3, t3, r3) {
        "__proto__" === t3 ? Object.defineProperty(e3, t3, { configurable: true, enumerable: true, writable: true, value: r3 }) : e3[t3] = r3;
      }
      const b2 = new Array(256), S2 = new Array(256);
      for (let e3 = 0; e3 < 256; e3++) b2[e3] = w2(e3) ? 1 : 0, S2[e3] = w2(e3);
      function k2(e3, t3) {
        this.input = e3, this.filename = t3.filename || null, this.schema = t3.schema || n2, this.onWarning = t3.onWarning || null, this.legacy = t3.legacy || false, this.json = t3.json || false, this.listener = t3.listener || null, this.maxDepth = "number" == typeof t3.maxDepth ? t3.maxDepth : 100, this.maxTotalMergeKeys = "number" == typeof t3.maxTotalMergeKeys ? t3.maxTotalMergeKeys : 1e4, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e3.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.depth = 0, this.totalMergeKeys = 0, this.firstTabInLine = -1, this.documents = [], this.anchorMapTransactions = [];
      }
      function x2(e3, n3) {
        const s3 = { name: e3.filename, buffer: e3.input.slice(0, -1), position: e3.position, line: e3.line, column: e3.position - e3.lineStart };
        return s3.snippet = r2(s3), new t2(n3, s3);
      }
      function E2(e3, t3) {
        throw x2(e3, t3);
      }
      function I2(e3, t3) {
        e3.onWarning && e3.onWarning.call(null, x2(e3, t3));
      }
      function T2(e3, t3, r3) {
        const n3 = e3.anchorMapTransactions;
        if (0 !== n3.length) {
          const r4 = n3[n3.length - 1];
          s2.call(r4, t3) || (r4[t3] = { existed: s2.call(e3.anchorMap, t3), value: e3.anchorMap[t3] });
        }
        e3.anchorMap[t3] = r3;
      }
      function C2(e3) {
        return { position: e3.position, line: e3.line, lineStart: e3.lineStart, lineIndent: e3.lineIndent, firstTabInLine: e3.firstTabInLine, tag: e3.tag, anchor: e3.anchor, kind: e3.kind, result: e3.result };
      }
      function P2(e3, t3) {
        e3.position = t3.position, e3.line = t3.line, e3.lineStart = t3.lineStart, e3.lineIndent = t3.lineIndent, e3.firstTabInLine = t3.firstTabInLine, e3.tag = t3.tag, e3.anchor = t3.anchor, e3.kind = t3.kind, e3.result = t3.result;
      }
      const A2 = { YAML: function(e3, t3, r3) {
        null !== e3.version && E2(e3, "duplication of %YAML directive"), 1 !== r3.length && E2(e3, "YAML directive accepts exactly one argument");
        const n3 = /^([0-9]+)\.([0-9]+)$/.exec(r3[0]);
        null === n3 && E2(e3, "ill-formed argument of the YAML directive");
        const s3 = parseInt(n3[1], 10), o3 = parseInt(n3[2], 10);
        1 !== s3 && E2(e3, "unacceptable YAML version of the document"), e3.version = r3[0], e3.checkLineBreaks = o3 < 2, 1 !== o3 && 2 !== o3 && I2(e3, "unsupported YAML version of the document");
      }, TAG: function(e3, t3, r3) {
        let n3;
        2 !== r3.length && E2(e3, "TAG directive accepts exactly two arguments");
        const o3 = r3[0];
        n3 = r3[1], c2.test(o3) || E2(e3, "ill-formed tag handle (first argument) of the TAG directive"), s2.call(e3.tagMap, o3) && E2(e3, 'there is a previously declared suffix for "' + o3 + '" tag handle'), l2.test(n3) || E2(e3, "ill-formed tag prefix (second argument) of the TAG directive");
        try {
          n3 = decodeURIComponent(n3);
        } catch (t4) {
          E2(e3, "tag prefix is malformed: " + n3);
        }
        e3.tagMap[o3] = n3;
      } };
      function R2(e3, t3, r3, n3) {
        if (t3 < r3) {
          const s3 = e3.input.slice(t3, r3);
          if (n3) for (let t4 = 0, r4 = s3.length; t4 < r4; t4 += 1) {
            const r5 = s3.charCodeAt(t4);
            9 === r5 || r5 >= 32 && r5 <= 1114111 || E2(e3, "expected valid JSON character");
          }
          else o2.test(s3) && E2(e3, "the stream contains non-printable characters");
          e3.result += s3;
        }
      }
      function M2(t3, r3, n3, o3) {
        e2.isObject(n3) || E2(t3, "cannot merge mappings; the provided source object is unacceptable");
        const i3 = Object.keys(n3);
        for (let e3 = 0, a3 = i3.length; e3 < a3; e3 += 1) {
          const a4 = i3[e3];
          -1 !== t3.maxTotalMergeKeys && ++t3.totalMergeKeys > t3.maxTotalMergeKeys && E2(t3, "merge keys exceeded maxTotalMergeKeys (" + t3.maxTotalMergeKeys + ")"), s2.call(r3, a4) || (_2(r3, a4, n3[a4]), o3[a4] = true);
        }
      }
      function J2(e3, t3, r3, n3, o3, i3, a3, c3, l3) {
        if (Array.isArray(o3)) for (let t4 = 0, r4 = (o3 = Array.prototype.slice.call(o3)).length; t4 < r4; t4 += 1) Array.isArray(o3[t4]) && E2(e3, "nested arrays are not supported inside keys"), "object" == typeof o3 && "[object Object]" === u2(o3[t4]) && (o3[t4] = "[object Object]");
        if ("object" == typeof o3 && "[object Object]" === u2(o3) && (o3 = "[object Object]"), o3 = String(o3), null === t3 && (t3 = {}), "tag:yaml.org,2002:merge" === n3) if (Array.isArray(i3)) for (let n4 = 0, s3 = i3.length; n4 < s3; n4 += 1) M2(e3, t3, i3[n4], r3);
        else M2(e3, t3, i3, r3);
        else e3.json || s2.call(r3, o3) || !s2.call(t3, o3) || (e3.line = a3 || e3.line, e3.lineStart = c3 || e3.lineStart, e3.position = l3 || e3.position, E2(e3, "duplicated mapping key")), _2(t3, o3, i3), delete r3[o3];
        return t3;
      }
      function O2(e3) {
        const t3 = e3.input.charCodeAt(e3.position);
        10 === t3 ? e3.position++ : 13 === t3 ? (e3.position++, 10 === e3.input.charCodeAt(e3.position) && e3.position++) : E2(e3, "a line break is expected"), e3.line += 1, e3.lineStart = e3.position, e3.firstTabInLine = -1;
      }
      function B2(e3, t3, r3) {
        let n3 = 0, s3 = e3.input.charCodeAt(e3.position);
        for (; 0 !== s3; ) {
          for (; p2(s3); ) 9 === s3 && -1 === e3.firstTabInLine && (e3.firstTabInLine = e3.position), s3 = e3.input.charCodeAt(++e3.position);
          if (t3 && 35 === s3) do {
            s3 = e3.input.charCodeAt(++e3.position);
          } while (10 !== s3 && 13 !== s3 && 0 !== s3);
          if (!d2(s3)) break;
          for (O2(e3), s3 = e3.input.charCodeAt(e3.position), n3++, e3.lineIndent = 0; 32 === s3; ) e3.lineIndent++, s3 = e3.input.charCodeAt(++e3.position);
        }
        return -1 !== r3 && 0 !== n3 && e3.lineIndent < r3 && I2(e3, "deficient indentation"), n3;
      }
      function D2(e3) {
        let t3 = e3.position, r3 = e3.input.charCodeAt(t3);
        return !(45 !== r3 && 46 !== r3 || r3 !== e3.input.charCodeAt(t3 + 1) || r3 !== e3.input.charCodeAt(t3 + 2) || (t3 += 3, r3 = e3.input.charCodeAt(t3), 0 !== r3 && !m2(r3)));
      }
      function q2(t3, r3) {
        1 === r3 ? t3.result += " " : r3 > 1 && (t3.result += e2.repeat("\n", r3 - 1));
      }
      function N2(e3, t3) {
        const r3 = e3.tag, n3 = e3.anchor, s3 = [];
        let o3 = false;
        if (-1 !== e3.firstTabInLine) return false;
        null !== e3.anchor && T2(e3, e3.anchor, s3);
        let i3 = e3.input.charCodeAt(e3.position);
        for (; 0 !== i3 && (-1 !== e3.firstTabInLine && (e3.position = e3.firstTabInLine, E2(e3, "tab characters must not be used in indentation")), 45 === i3); ) {
          if (!m2(e3.input.charCodeAt(e3.position + 1))) break;
          if (o3 = true, e3.position++, B2(e3, true, -1) && e3.lineIndent <= t3) {
            s3.push(null), i3 = e3.input.charCodeAt(e3.position);
            continue;
          }
          const r4 = e3.line;
          if (j2(e3, t3, 3, false, true), s3.push(e3.result), B2(e3, true, -1), i3 = e3.input.charCodeAt(e3.position), (e3.line === r4 || e3.lineIndent > t3) && 0 !== i3) E2(e3, "bad indentation of a sequence entry");
          else if (e3.lineIndent < t3) break;
        }
        return !!o3 && (e3.tag = r3, e3.anchor = n3, e3.kind = "sequence", e3.result = s3, true);
      }
      function F2(e3, t3, r3) {
        let n3, s3, o3, i3;
        const a3 = e3.tag, c3 = e3.anchor, l3 = {}, u3 = /* @__PURE__ */ Object.create(null);
        let d3 = null, h3 = null, f3 = null, g3 = false, y3 = false;
        if (-1 !== e3.firstTabInLine) return false;
        null !== e3.anchor && T2(e3, e3.anchor, l3);
        let w3 = e3.input.charCodeAt(e3.position);
        for (; 0 !== w3; ) {
          g3 || -1 === e3.firstTabInLine || (e3.position = e3.firstTabInLine, E2(e3, "tab characters must not be used in indentation"));
          const v3 = e3.input.charCodeAt(e3.position + 1), _3 = e3.line;
          if (63 !== w3 && 58 !== w3 || !m2(v3)) {
            if (s3 = e3.line, o3 = e3.lineStart, i3 = e3.position, !j2(e3, r3, 2, false, true)) break;
            if (e3.line === _3) {
              for (w3 = e3.input.charCodeAt(e3.position); p2(w3); ) w3 = e3.input.charCodeAt(++e3.position);
              if (58 === w3) w3 = e3.input.charCodeAt(++e3.position), m2(w3) || E2(e3, "a whitespace character is expected after the key-value separator within a block mapping"), g3 && (J2(e3, l3, u3, d3, h3, null, s3, o3, i3), d3 = h3 = f3 = null), y3 = true, g3 = false, n3 = false, d3 = e3.tag, h3 = e3.result;
              else {
                if (!y3) return e3.tag = a3, e3.anchor = c3, true;
                E2(e3, "can not read an implicit mapping pair; a colon is missed");
              }
            } else {
              if (!y3) return e3.tag = a3, e3.anchor = c3, true;
              E2(e3, "can not read a block mapping entry; a multiline key may not be an implicit key");
            }
          } else 63 === w3 ? (g3 && (J2(e3, l3, u3, d3, h3, null, s3, o3, i3), d3 = h3 = f3 = null), y3 = true, g3 = true, n3 = true) : g3 ? (g3 = false, n3 = true) : E2(e3, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e3.position += 1, w3 = v3;
          if ((e3.line === _3 || e3.lineIndent > t3) && (g3 && (s3 = e3.line, o3 = e3.lineStart, i3 = e3.position), j2(e3, t3, 4, true, n3) && (g3 ? h3 = e3.result : f3 = e3.result), g3 || (J2(e3, l3, u3, d3, h3, f3, s3, o3, i3), d3 = h3 = f3 = null), B2(e3, true, -1), w3 = e3.input.charCodeAt(e3.position)), (e3.line === _3 || e3.lineIndent > t3) && 0 !== w3) E2(e3, "bad indentation of a mapping entry");
          else if (e3.lineIndent < t3) break;
        }
        return g3 && J2(e3, l3, u3, d3, h3, null, s3, o3, i3), y3 && (e3.tag = a3, e3.anchor = c3, e3.kind = "mapping", e3.result = l3), y3;
      }
      function U2(e3) {
        let t3, r3, n3 = false, o3 = false, i3 = e3.input.charCodeAt(e3.position);
        if (33 !== i3) return false;
        null !== e3.tag && E2(e3, "duplication of a tag property"), i3 = e3.input.charCodeAt(++e3.position), 60 === i3 ? (n3 = true, i3 = e3.input.charCodeAt(++e3.position)) : 33 === i3 ? (o3 = true, t3 = "!!", i3 = e3.input.charCodeAt(++e3.position)) : t3 = "!";
        let u3 = e3.position;
        if (n3) {
          do {
            i3 = e3.input.charCodeAt(++e3.position);
          } while (0 !== i3 && 62 !== i3);
          e3.position < e3.length ? (r3 = e3.input.slice(u3, e3.position), i3 = e3.input.charCodeAt(++e3.position)) : E2(e3, "unexpected end of the stream within a verbatim tag");
        } else {
          for (; 0 !== i3 && !m2(i3); ) 33 === i3 && (o3 ? E2(e3, "tag suffix cannot contain exclamation marks") : (t3 = e3.input.slice(u3 - 1, e3.position + 1), c2.test(t3) || E2(e3, "named tag handle cannot contain such characters"), o3 = true, u3 = e3.position + 1)), i3 = e3.input.charCodeAt(++e3.position);
          r3 = e3.input.slice(u3, e3.position), a2.test(r3) && E2(e3, "tag suffix cannot contain flow indicator characters");
        }
        r3 && !l2.test(r3) && E2(e3, "tag name cannot contain such characters: " + r3);
        try {
          r3 = decodeURIComponent(r3);
        } catch (t4) {
          E2(e3, "tag name is malformed: " + r3);
        }
        return n3 ? e3.tag = r3 : s2.call(e3.tagMap, t3) ? e3.tag = e3.tagMap[t3] + r3 : "!" === t3 ? e3.tag = "!" + r3 : "!!" === t3 ? e3.tag = "tag:yaml.org,2002:" + r3 : E2(e3, 'undeclared tag handle "' + t3 + '"'), true;
      }
      function L2(e3) {
        let t3 = e3.input.charCodeAt(e3.position);
        if (38 !== t3) return false;
        null !== e3.anchor && E2(e3, "duplication of an anchor property"), t3 = e3.input.charCodeAt(++e3.position);
        const r3 = e3.position;
        for (; 0 !== t3 && !m2(t3) && !h2(t3); ) t3 = e3.input.charCodeAt(++e3.position);
        return e3.position === r3 && E2(e3, "name of an anchor node must contain at least one character"), e3.anchor = e3.input.slice(r3, e3.position), true;
      }
      function $2(e3, t3, r3, n3) {
        const o3 = C2(e3);
        return (function(e4) {
          e4.anchorMapTransactions.push(/* @__PURE__ */ Object.create(null));
        })(e3), P2(e3, t3), e3.tag = null, e3.anchor = null, e3.kind = null, e3.result = null, F2(e3, r3, n3) && "mapping" === e3.kind ? ((function(e4) {
          const t4 = e4.anchorMapTransactions.pop(), r4 = e4.anchorMapTransactions;
          if (0 === r4.length) return;
          const n4 = r4[r4.length - 1], o4 = Object.keys(t4);
          for (let e5 = 0, r5 = o4.length; e5 < r5; e5 += 1) {
            const r6 = o4[e5];
            s2.call(n4, r6) || (n4[r6] = t4[r6]);
          }
        })(e3), true) : ((function(e4) {
          const t4 = e4.anchorMapTransactions.pop(), r4 = Object.keys(t4);
          for (let n4 = r4.length - 1; n4 >= 0; n4 -= 1) {
            const s3 = t4[r4[n4]];
            s3.existed ? e4.anchorMap[r4[n4]] = s3.value : delete e4.anchorMap[r4[n4]];
          }
        })(e3), P2(e3, o3), false);
      }
      function j2(t3, r3, n3, o3, i3) {
        let a3, c3, l3, u3, w3, _3 = 1, k3 = false, x3 = false, I3 = null;
        t3.depth >= t3.maxDepth && E2(t3, "nesting exceeded maxDepth (" + t3.maxDepth + ")"), t3.depth += 1, null !== t3.listener && t3.listener("open", t3), t3.tag = null, t3.anchor = null, t3.kind = null, t3.result = null;
        const P3 = a3 = c3 = 4 === n3 || 3 === n3;
        if (o3 && B2(t3, true, -1) && (k3 = true, t3.lineIndent > r3 ? _3 = 1 : t3.lineIndent === r3 ? _3 = 0 : t3.lineIndent < r3 && (_3 = -1)), 1 === _3) for (; ; ) {
          const e3 = t3.input.charCodeAt(t3.position), n4 = C2(t3);
          if (k3 && (33 === e3 && null !== t3.tag || 38 === e3 && null !== t3.anchor)) break;
          if (!U2(t3) && !L2(t3)) break;
          null === I3 && (I3 = n4), B2(t3, true, -1) ? (k3 = true, c3 = P3, t3.lineIndent > r3 ? _3 = 1 : t3.lineIndent === r3 ? _3 = 0 : t3.lineIndent < r3 && (_3 = -1)) : c3 = false;
        }
        if (c3 && (c3 = k3 || i3), 1 === _3 || 4 === n3) if (u3 = 1 === n3 || 2 === n3 ? r3 : r3 + 1, w3 = t3.position - t3.lineStart, 1 === _3) if (c3 && (N2(t3, w3) || F2(t3, w3, u3)) || (function(e3, t4) {
          let r4, n4, s3, o4 = true;
          const i4 = e3.tag;
          let a4;
          const c4 = e3.anchor;
          let l4, u4, d3, p3;
          const h3 = /* @__PURE__ */ Object.create(null);
          let f3, g3, y3, w4 = e3.input.charCodeAt(e3.position);
          if (91 === w4) l4 = 93, p3 = false, a4 = [];
          else {
            if (123 !== w4) return false;
            l4 = 125, p3 = true, a4 = {};
          }
          for (null !== e3.anchor && T2(e3, e3.anchor, a4), w4 = e3.input.charCodeAt(++e3.position); 0 !== w4; ) {
            if (B2(e3, true, t4), w4 = e3.input.charCodeAt(e3.position), w4 === l4) return e3.position++, e3.tag = i4, e3.anchor = c4, e3.kind = p3 ? "mapping" : "sequence", e3.result = a4, true;
            o4 ? 44 === w4 && E2(e3, "expected the node content, but found ','") : E2(e3, "missed comma between flow collection entries"), g3 = f3 = y3 = null, u4 = d3 = false, 63 === w4 && m2(e3.input.charCodeAt(e3.position + 1)) && (u4 = d3 = true, e3.position++, B2(e3, true, t4)), r4 = e3.line, n4 = e3.lineStart, s3 = e3.position, j2(e3, t4, 1, false, true), g3 = e3.tag, f3 = e3.result, B2(e3, true, t4), w4 = e3.input.charCodeAt(e3.position), !d3 && e3.line !== r4 || 58 !== w4 || (u4 = true, w4 = e3.input.charCodeAt(++e3.position), B2(e3, true, t4), j2(e3, t4, 1, false, true), y3 = e3.result), p3 ? J2(e3, a4, h3, g3, f3, y3, r4, n4, s3) : u4 ? a4.push(J2(e3, null, h3, g3, f3, y3, r4, n4, s3)) : a4.push(f3), B2(e3, true, t4), w4 = e3.input.charCodeAt(e3.position), 44 === w4 ? (o4 = true, w4 = e3.input.charCodeAt(++e3.position)) : o4 = false;
          }
          E2(e3, "unexpected end of the stream within a flow collection");
        })(t3, u3)) x3 = true;
        else {
          const r4 = t3.input.charCodeAt(t3.position);
          null !== I3 && P3 && !c3 && 124 !== r4 && 62 !== r4 && $2(t3, I3, I3.position - I3.lineStart, u3) || a3 && (function(t4, r5) {
            let n4, s3, o4 = 1, i4 = false, a4 = false, c4 = r5, l4 = 0, u4 = false, m3 = t4.input.charCodeAt(t4.position);
            if (124 === m3) n4 = false;
            else {
              if (62 !== m3) return false;
              n4 = true;
            }
            for (t4.kind = "scalar", t4.result = ""; 0 !== m3; ) if (m3 = t4.input.charCodeAt(++t4.position), 43 === m3 || 45 === m3) 1 === o4 ? o4 = 43 === m3 ? 3 : 2 : E2(t4, "repeat of a chomping mode identifier");
            else {
              if (!((s3 = y2(m3)) >= 0)) break;
              0 === s3 ? E2(t4, "bad explicit indentation width of a block scalar; it cannot be less than one") : a4 ? E2(t4, "repeat of an indentation width identifier") : (c4 = r5 + s3 - 1, a4 = true);
            }
            if (p2(m3)) {
              do {
                m3 = t4.input.charCodeAt(++t4.position);
              } while (p2(m3));
              if (35 === m3) do {
                m3 = t4.input.charCodeAt(++t4.position);
              } while (!d2(m3) && 0 !== m3);
            }
            for (; 0 !== m3; ) {
              for (O2(t4), t4.lineIndent = 0, m3 = t4.input.charCodeAt(t4.position); (!a4 || t4.lineIndent < c4) && 32 === m3; ) t4.lineIndent++, m3 = t4.input.charCodeAt(++t4.position);
              if (!a4 && t4.lineIndent > c4 && (c4 = t4.lineIndent), d2(m3)) {
                l4++;
                continue;
              }
              if (a4 || 0 !== c4 || E2(t4, "missing indentation for block scalar"), t4.lineIndent < c4) {
                3 === o4 ? t4.result += e2.repeat("\n", i4 ? 1 + l4 : l4) : 1 === o4 && i4 && (t4.result += "\n");
                break;
              }
              n4 ? p2(m3) ? (u4 = true, t4.result += e2.repeat("\n", i4 ? 1 + l4 : l4)) : u4 ? (u4 = false, t4.result += e2.repeat("\n", l4 + 1)) : 0 === l4 ? i4 && (t4.result += " ") : t4.result += e2.repeat("\n", l4) : t4.result += e2.repeat("\n", i4 ? 1 + l4 : l4), i4 = true, a4 = true, l4 = 0;
              const r6 = t4.position;
              for (; !d2(m3) && 0 !== m3; ) m3 = t4.input.charCodeAt(++t4.position);
              R2(t4, r6, t4.position, false);
            }
            return true;
          })(t3, u3) || (function(e3, t4) {
            let r5, n4, s3 = e3.input.charCodeAt(e3.position);
            if (39 !== s3) return false;
            for (e3.kind = "scalar", e3.result = "", e3.position++, r5 = n4 = e3.position; 0 !== (s3 = e3.input.charCodeAt(e3.position)); ) if (39 === s3) {
              if (R2(e3, r5, e3.position, true), s3 = e3.input.charCodeAt(++e3.position), 39 !== s3) return true;
              r5 = e3.position, e3.position++, n4 = e3.position;
            } else d2(s3) ? (R2(e3, r5, n4, true), q2(e3, B2(e3, false, t4)), r5 = n4 = e3.position) : e3.position === e3.lineStart && D2(e3) ? E2(e3, "unexpected end of the document within a single quoted scalar") : (e3.position++, p2(s3) || (n4 = e3.position));
            E2(e3, "unexpected end of the stream within a single quoted scalar");
          })(t3, u3) || (function(e3, t4) {
            let r5, n4, s3, o4 = e3.input.charCodeAt(e3.position);
            if (34 !== o4) return false;
            for (e3.kind = "scalar", e3.result = "", e3.position++, r5 = n4 = e3.position; 0 !== (o4 = e3.input.charCodeAt(e3.position)); ) {
              if (34 === o4) return R2(e3, r5, e3.position, true), e3.position++, true;
              if (92 === o4) {
                if (R2(e3, r5, e3.position, true), o4 = e3.input.charCodeAt(++e3.position), d2(o4)) B2(e3, false, t4);
                else if (o4 < 256 && b2[o4]) e3.result += S2[o4], e3.position++;
                else if ((s3 = g2(o4)) > 0) {
                  let t5 = s3, r6 = 0;
                  for (; t5 > 0; t5--) o4 = e3.input.charCodeAt(++e3.position), (s3 = f2(o4)) >= 0 ? r6 = (r6 << 4) + s3 : E2(e3, "expected hexadecimal character");
                  e3.result += v2(r6), e3.position++;
                } else E2(e3, "unknown escape sequence");
                r5 = n4 = e3.position;
              } else d2(o4) ? (R2(e3, r5, n4, true), q2(e3, B2(e3, false, t4)), r5 = n4 = e3.position) : e3.position === e3.lineStart && D2(e3) ? E2(e3, "unexpected end of the document within a double quoted scalar") : (e3.position++, p2(o4) || (n4 = e3.position));
            }
            E2(e3, "unexpected end of the stream within a double quoted scalar");
          })(t3, u3) ? x3 = true : !(function(e3) {
            let t4 = e3.input.charCodeAt(e3.position);
            if (42 !== t4) return false;
            t4 = e3.input.charCodeAt(++e3.position);
            const r5 = e3.position;
            for (; 0 !== t4 && !m2(t4) && !h2(t4); ) t4 = e3.input.charCodeAt(++e3.position);
            e3.position === r5 && E2(e3, "name of an alias node must contain at least one character");
            const n4 = e3.input.slice(r5, e3.position);
            return s2.call(e3.anchorMap, n4) || E2(e3, 'unidentified alias "' + n4 + '"'), e3.result = e3.anchorMap[n4], B2(e3, true, -1), true;
          })(t3) ? (function(e3, t4, r5) {
            let n4, s3, o4, i4, a4, c4;
            const l4 = e3.kind, u4 = e3.result;
            let f3 = e3.input.charCodeAt(e3.position);
            if (m2(f3) || h2(f3) || 35 === f3 || 38 === f3 || 42 === f3 || 33 === f3 || 124 === f3 || 62 === f3 || 39 === f3 || 34 === f3 || 37 === f3 || 64 === f3 || 96 === f3) return false;
            if (63 === f3 || 45 === f3) {
              const t5 = e3.input.charCodeAt(e3.position + 1);
              if (m2(t5) || r5 && h2(t5)) return false;
            }
            for (e3.kind = "scalar", e3.result = "", n4 = s3 = e3.position, o4 = false; 0 !== f3; ) {
              if (58 === f3) {
                const t5 = e3.input.charCodeAt(e3.position + 1);
                if (m2(t5) || r5 && h2(t5)) break;
              } else if (35 === f3) {
                if (m2(e3.input.charCodeAt(e3.position - 1))) break;
              } else {
                if (e3.position === e3.lineStart && D2(e3) || r5 && h2(f3)) break;
                if (d2(f3)) {
                  if (i4 = e3.line, a4 = e3.lineStart, c4 = e3.lineIndent, B2(e3, false, -1), e3.lineIndent >= t4) {
                    o4 = true, f3 = e3.input.charCodeAt(e3.position);
                    continue;
                  }
                  e3.position = s3, e3.line = i4, e3.lineStart = a4, e3.lineIndent = c4;
                  break;
                }
              }
              o4 && (R2(e3, n4, s3, false), q2(e3, e3.line - i4), n4 = s3 = e3.position, o4 = false), p2(f3) || (s3 = e3.position + 1), f3 = e3.input.charCodeAt(++e3.position);
            }
            return R2(e3, n4, s3, false), !!e3.result || (e3.kind = l4, e3.result = u4, false);
          })(t3, u3, 1 === n3) && (x3 = true, null === t3.tag && (t3.tag = "?")) : (x3 = true, null === t3.tag && null === t3.anchor || E2(t3, "alias node should not have any properties")), null !== t3.anchor && T2(t3, t3.anchor, t3.result);
        }
        else 0 === _3 && (x3 = c3 && N2(t3, w3));
        if (null === t3.tag) null !== t3.anchor && T2(t3, t3.anchor, t3.result);
        else if ("?" === t3.tag) {
          null !== t3.result && "scalar" !== t3.kind && E2(t3, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t3.kind + '"');
          for (let e3 = 0, r4 = t3.implicitTypes.length; e3 < r4; e3 += 1) if (l3 = t3.implicitTypes[e3], l3.resolve(t3.result)) {
            t3.result = l3.construct(t3.result), t3.tag = l3.tag, null !== t3.anchor && T2(t3, t3.anchor, t3.result);
            break;
          }
        } else if ("!" !== t3.tag) {
          if (s2.call(t3.typeMap[t3.kind || "fallback"], t3.tag)) l3 = t3.typeMap[t3.kind || "fallback"][t3.tag];
          else {
            l3 = null;
            const e3 = t3.typeMap.multi[t3.kind || "fallback"];
            for (let r4 = 0, n4 = e3.length; r4 < n4; r4 += 1) if (t3.tag.slice(0, e3[r4].tag.length) === e3[r4].tag) {
              l3 = e3[r4];
              break;
            }
          }
          l3 || E2(t3, "unknown tag !<" + t3.tag + ">"), null !== t3.result && l3.kind !== t3.kind && E2(t3, "unacceptable node kind for !<" + t3.tag + '> tag; it should be "' + l3.kind + '", not "' + t3.kind + '"'), l3.resolve(t3.result, t3.tag) ? (t3.result = l3.construct(t3.result, t3.tag), null !== t3.anchor && T2(t3, t3.anchor, t3.result)) : E2(t3, "cannot resolve a node with !<" + t3.tag + "> explicit tag");
        }
        return null !== t3.listener && t3.listener("close", t3), t3.depth -= 1, null !== t3.tag || null !== t3.anchor || x3;
      }
      function G2(e3) {
        const t3 = e3.position;
        let r3, n3 = false;
        for (e3.version = null, e3.checkLineBreaks = e3.legacy, e3.tagMap = /* @__PURE__ */ Object.create(null), e3.anchorMap = /* @__PURE__ */ Object.create(null); 0 !== (r3 = e3.input.charCodeAt(e3.position)) && (B2(e3, true, -1), r3 = e3.input.charCodeAt(e3.position), !(e3.lineIndent > 0 || 37 !== r3)); ) {
          n3 = true, r3 = e3.input.charCodeAt(++e3.position);
          let t4 = e3.position;
          for (; 0 !== r3 && !m2(r3); ) r3 = e3.input.charCodeAt(++e3.position);
          const o3 = e3.input.slice(t4, e3.position), i3 = [];
          for (o3.length < 1 && E2(e3, "directive name must not be less than one character in length"); 0 !== r3; ) {
            for (; p2(r3); ) r3 = e3.input.charCodeAt(++e3.position);
            if (35 === r3) {
              do {
                r3 = e3.input.charCodeAt(++e3.position);
              } while (0 !== r3 && !d2(r3));
              break;
            }
            if (d2(r3)) break;
            for (t4 = e3.position; 0 !== r3 && !m2(r3); ) r3 = e3.input.charCodeAt(++e3.position);
            i3.push(e3.input.slice(t4, e3.position));
          }
          0 !== r3 && O2(e3), s2.call(A2, o3) ? A2[o3](e3, o3, i3) : I2(e3, 'unknown document directive "' + o3 + '"');
        }
        B2(e3, true, -1), 0 === e3.lineIndent && 45 === e3.input.charCodeAt(e3.position) && 45 === e3.input.charCodeAt(e3.position + 1) && 45 === e3.input.charCodeAt(e3.position + 2) ? (e3.position += 3, B2(e3, true, -1)) : n3 && E2(e3, "directives end mark is expected"), j2(e3, e3.lineIndent - 1, 4, false, true), B2(e3, true, -1), e3.checkLineBreaks && i2.test(e3.input.slice(t3, e3.position)) && I2(e3, "non-ASCII line breaks are interpreted as content"), e3.documents.push(e3.result), e3.position === e3.lineStart && D2(e3) ? 46 === e3.input.charCodeAt(e3.position) && (e3.position += 3, B2(e3, true, -1)) : e3.position < e3.length - 1 && E2(e3, "end of the stream or a document separator is expected");
      }
      function z2(e3, t3) {
        t3 = t3 || {}, 0 !== (e3 = String(e3)).length && (10 !== e3.charCodeAt(e3.length - 1) && 13 !== e3.charCodeAt(e3.length - 1) && (e3 += "\n"), 65279 === e3.charCodeAt(0) && (e3 = e3.slice(1)));
        const r3 = new k2(e3, t3), n3 = e3.indexOf("\0");
        for (-1 !== n3 && (r3.position = n3, E2(r3, "null byte is not allowed in input")), r3.input += "\0"; 32 === r3.input.charCodeAt(r3.position); ) r3.lineIndent += 1, r3.position += 1;
        for (; r3.position < r3.length - 1; ) G2(r3);
        return r3.documents;
      }
      return dl.loadAll = function(e3, t3, r3) {
        null !== t3 && "object" == typeof t3 && void 0 === r3 && (r3 = t3, t3 = null);
        const n3 = z2(e3, r3);
        if ("function" != typeof t3) return n3;
        for (let e4 = 0, r4 = n3.length; e4 < r4; e4 += 1) t3(n3[e4]);
      }, dl.load = function(e3, r3) {
        const n3 = z2(e3, r3);
        if (0 !== n3.length) {
          if (1 === n3.length) return n3[0];
          throw new t2("expected a single document in the stream, but found more");
        }
      }, dl;
    }
    var Bl, Dl, ql = {};
    function Nl() {
      if (Bl) return ql;
      Bl = 1;
      const e2 = ml(), t2 = hl(), r2 = Jl(), n2 = Object.prototype.toString, s2 = Object.prototype.hasOwnProperty, o2 = 65279, i2 = { 0: "\\0", 7: "\\a", 8: "\\b", 9: "\\t", 10: "\\n", 11: "\\v", 12: "\\f", 13: "\\r", 27: "\\e", 34: '\\"', 92: "\\\\", 133: "\\N", 160: "\\_", 8232: "\\L", 8233: "\\P" }, a2 = ["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"], c2 = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
      function l2(r3) {
        let n3, s3;
        const o3 = r3.toString(16).toUpperCase();
        if (r3 <= 255) n3 = "x", s3 = 2;
        else if (r3 <= 65535) n3 = "u", s3 = 4;
        else {
          if (!(r3 <= 4294967295)) throw new t2("code point within a string may not be greater than 0xFFFFFFFF");
          n3 = "U", s3 = 8;
        }
        return "\\" + n3 + e2.repeat("0", s3 - o3.length) + o3;
      }
      function u2(t3) {
        this.schema = t3.schema || r2, this.indent = Math.max(1, t3.indent || 2), this.noArrayIndent = t3.noArrayIndent || false, this.skipInvalid = t3.skipInvalid || false, this.flowLevel = e2.isNothing(t3.flowLevel) ? -1 : t3.flowLevel, this.styleMap = (function(e3, t4) {
          if (null === t4) return {};
          const r3 = {}, n3 = Object.keys(t4);
          for (let o3 = 0, i3 = n3.length; o3 < i3; o3 += 1) {
            let i4 = n3[o3], a3 = String(t4[i4]);
            "!!" === i4.slice(0, 2) && (i4 = "tag:yaml.org,2002:" + i4.slice(2));
            const c3 = e3.compiledTypeMap.fallback[i4];
            c3 && s2.call(c3.styleAliases, a3) && (a3 = c3.styleAliases[a3]), r3[i4] = a3;
          }
          return r3;
        })(this.schema, t3.styles || null), this.sortKeys = t3.sortKeys || false, this.lineWidth = t3.lineWidth || 80, this.noRefs = t3.noRefs || false, this.noCompatMode = t3.noCompatMode || false, this.condenseFlow = t3.condenseFlow || false, this.quotingType = '"' === t3.quotingType ? 2 : 1, this.forceQuotes = t3.forceQuotes || false, this.replacer = "function" == typeof t3.replacer ? t3.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
      }
      function d2(t3, r3) {
        const n3 = e2.repeat(" ", r3);
        let s3 = 0, o3 = "";
        const i3 = t3.length;
        for (; s3 < i3; ) {
          let e3;
          const r4 = t3.indexOf("\n", s3);
          -1 === r4 ? (e3 = t3.slice(s3), s3 = i3) : (e3 = t3.slice(s3, r4 + 1), s3 = r4 + 1), e3.length && "\n" !== e3 && (o3 += n3), o3 += e3;
        }
        return o3;
      }
      function p2(t3, r3) {
        return "\n" + e2.repeat(" ", t3.indent * r3);
      }
      function m2(e3) {
        return 32 === e3 || 9 === e3;
      }
      function h2(e3) {
        return e3 >= 32 && e3 <= 126 || e3 >= 161 && e3 <= 55295 && 8232 !== e3 && 8233 !== e3 || e3 >= 57344 && e3 <= 65533 && e3 !== o2 || e3 >= 65536 && e3 <= 1114111;
      }
      function f2(e3) {
        return h2(e3) && e3 !== o2 && 13 !== e3 && 10 !== e3;
      }
      function g2(e3, t3, r3) {
        const n3 = f2(e3), s3 = n3 && !m2(e3);
        return (r3 ? n3 : n3 && 44 !== e3 && 91 !== e3 && 93 !== e3 && 123 !== e3 && 125 !== e3) && 35 !== e3 && !(58 === t3 && !s3) || f2(t3) && !m2(t3) && 35 === e3 || 58 === t3 && s3;
      }
      function y2(e3, t3) {
        const r3 = e3.charCodeAt(t3);
        let n3;
        return r3 >= 55296 && r3 <= 56319 && t3 + 1 < e3.length && (n3 = e3.charCodeAt(t3 + 1), n3 >= 56320 && n3 <= 57343) ? 1024 * (r3 - 55296) + n3 - 56320 + 65536 : r3;
      }
      function w2(e3) {
        return /^\n* /.test(e3);
      }
      function v2(e3, t3, r3, n3, s3, i3, a3, c3) {
        let l3, u3 = 0, d3 = null, p3 = false, f3 = false;
        const v3 = -1 !== n3;
        let _3 = -1, b3 = h2(S3 = y2(e3, 0)) && S3 !== o2 && !m2(S3) && 45 !== S3 && 63 !== S3 && 58 !== S3 && 44 !== S3 && 91 !== S3 && 93 !== S3 && 123 !== S3 && 125 !== S3 && 35 !== S3 && 38 !== S3 && 42 !== S3 && 33 !== S3 && 124 !== S3 && 61 !== S3 && 62 !== S3 && 39 !== S3 && 34 !== S3 && 37 !== S3 && 64 !== S3 && 96 !== S3 && (function(e4) {
          return !m2(e4) && 58 !== e4;
        })(y2(e3, e3.length - 1));
        var S3;
        if (t3 || a3) for (l3 = 0; l3 < e3.length; u3 >= 65536 ? l3 += 2 : l3++) {
          if (u3 = y2(e3, l3), !h2(u3)) return 5;
          b3 = b3 && g2(u3, d3, c3), d3 = u3;
        }
        else {
          for (l3 = 0; l3 < e3.length; u3 >= 65536 ? l3 += 2 : l3++) {
            if (u3 = y2(e3, l3), 10 === u3) p3 = true, v3 && (f3 = f3 || l3 - _3 - 1 > n3 && " " !== e3[_3 + 1], _3 = l3);
            else if (!h2(u3)) return 5;
            b3 = b3 && g2(u3, d3, c3), d3 = u3;
          }
          f3 = f3 || v3 && l3 - _3 - 1 > n3 && " " !== e3[_3 + 1];
        }
        return p3 || f3 ? r3 > 9 && w2(e3) ? 5 : a3 ? 2 === i3 ? 5 : 2 : f3 ? 4 : 3 : !b3 || a3 || s3(e3) ? 2 === i3 ? 5 : 2 : 1;
      }
      function _2(e3, r3, n3, s3, o3) {
        e3.dump = (function() {
          if (0 === r3.length) return 2 === e3.quotingType ? '""' : "''";
          if (!e3.noCompatMode && (-1 !== a2.indexOf(r3) || c2.test(r3))) return 2 === e3.quotingType ? '"' + r3 + '"' : "'" + r3 + "'";
          const u3 = e3.indent * Math.max(1, n3), p3 = -1 === e3.lineWidth ? -1 : Math.max(Math.min(e3.lineWidth, 40), e3.lineWidth - u3), m3 = s3 || e3.flowLevel > -1 && n3 >= e3.flowLevel;
          switch (v2(r3, m3, e3.indent, p3, function(t3) {
            return (function(e4, t4) {
              for (let r4 = 0, n4 = e4.implicitTypes.length; r4 < n4; r4 += 1) if (e4.implicitTypes[r4].resolve(t4)) return true;
              return false;
            })(e3, t3);
          }, e3.quotingType, e3.forceQuotes && !s3, o3)) {
            case 1:
              return r3;
            case 2:
              return "'" + r3.replace(/'/g, "''") + "'";
            case 3:
              return "|" + b2(r3, e3.indent) + S2(d2(r3, u3));
            case 4:
              return ">" + b2(r3, e3.indent) + S2(d2((function(e4, t3) {
                const r4 = /(\n+)([^\n]*)/g;
                let n4, s4, o4 = (function() {
                  let n5 = e4.indexOf("\n");
                  return n5 = -1 !== n5 ? n5 : e4.length, r4.lastIndex = n5, k2(e4.slice(0, n5), t3);
                })(), i3 = "\n" === e4[0] || " " === e4[0];
                for (; s4 = r4.exec(e4); ) {
                  const e5 = s4[1], r5 = s4[2];
                  n4 = " " === r5[0], o4 += e5 + (i3 || n4 || "" === r5 ? "" : "\n") + k2(r5, t3), i3 = n4;
                }
                return o4;
              })(r3, p3), u3));
            case 5:
              return '"' + (function(e4) {
                let t3 = "", r4 = 0;
                for (let n4 = 0; n4 < e4.length; r4 >= 65536 ? n4 += 2 : n4++) {
                  r4 = y2(e4, n4);
                  const s4 = i2[r4];
                  !s4 && h2(r4) ? (t3 += e4[n4], r4 >= 65536 && (t3 += e4[n4 + 1])) : t3 += s4 || l2(r4);
                }
                return t3;
              })(r3) + '"';
            default:
              throw new t2("impossible error: invalid scalar style");
          }
        })();
      }
      function b2(e3, t3) {
        const r3 = w2(e3) ? String(t3) : "", n3 = "\n" === e3[e3.length - 1];
        return r3 + (n3 && ("\n" === e3[e3.length - 2] || "\n" === e3) ? "+" : n3 ? "" : "-") + "\n";
      }
      function S2(e3) {
        return "\n" === e3[e3.length - 1] ? e3.slice(0, -1) : e3;
      }
      function k2(e3, t3) {
        if ("" === e3 || " " === e3[0]) return e3;
        const r3 = / [^ ]/g;
        let n3, s3, o3 = 0, i3 = 0, a3 = 0, c3 = "";
        for (; n3 = r3.exec(e3); ) a3 = n3.index, a3 - o3 > t3 && (s3 = i3 > o3 ? i3 : a3, c3 += "\n" + e3.slice(o3, s3), o3 = s3 + 1), i3 = a3;
        return c3 += "\n", e3.length - o3 > t3 && i3 > o3 ? c3 += e3.slice(o3, i3) + "\n" + e3.slice(i3 + 1) : c3 += e3.slice(o3), c3.slice(1);
      }
      function x2(e3, t3, r3, n3) {
        let s3 = "";
        const o3 = e3.tag;
        for (let o4 = 0, i3 = r3.length; o4 < i3; o4 += 1) {
          let i4 = r3[o4];
          e3.replacer && (i4 = e3.replacer.call(r3, String(o4), i4)), (I2(e3, t3 + 1, i4, true, true, false, true) || void 0 === i4 && I2(e3, t3 + 1, null, true, true, false, true)) && (n3 && "" === s3 || (s3 += p2(e3, t3)), e3.dump && 10 === e3.dump.charCodeAt(0) ? s3 += "-" : s3 += "- ", s3 += e3.dump);
        }
        e3.tag = o3, e3.dump = s3 || "[]";
      }
      function E2(e3, r3, o3) {
        const i3 = o3 ? e3.explicitTypes : e3.implicitTypes;
        for (let a3 = 0, c3 = i3.length; a3 < c3; a3 += 1) {
          const c4 = i3[a3];
          if ((c4.instanceOf || c4.predicate) && (!c4.instanceOf || "object" == typeof r3 && r3 instanceof c4.instanceOf) && (!c4.predicate || c4.predicate(r3))) {
            if (o3 ? c4.multi && c4.representName ? e3.tag = c4.representName(r3) : e3.tag = c4.tag : e3.tag = "?", c4.represent) {
              const o4 = e3.styleMap[c4.tag] || c4.defaultStyle;
              let i4;
              if ("[object Function]" === n2.call(c4.represent)) i4 = c4.represent(r3, o4);
              else {
                if (!s2.call(c4.represent, o4)) throw new t2("!<" + c4.tag + '> tag resolver accepts not "' + o4 + '" style');
                i4 = c4.represent[o4](r3, o4);
              }
              e3.dump = i4;
            }
            return true;
          }
        }
        return false;
      }
      function I2(e3, r3, s3, o3, i3, a3, c3) {
        e3.tag = null, e3.dump = s3, E2(e3, s3, false) || E2(e3, s3, true);
        const l3 = n2.call(e3.dump), u3 = o3;
        o3 && (o3 = e3.flowLevel < 0 || e3.flowLevel > r3);
        const d3 = "[object Object]" === l3 || "[object Array]" === l3;
        let m3, h3;
        if (d3 && (m3 = e3.duplicates.indexOf(s3), h3 = -1 !== m3), (null !== e3.tag && "?" !== e3.tag || h3 || 2 !== e3.indent && r3 > 0) && (i3 = false), h3 && e3.usedDuplicates[m3]) e3.dump = "*ref_" + m3;
        else {
          if (d3 && h3 && !e3.usedDuplicates[m3] && (e3.usedDuplicates[m3] = true), "[object Object]" === l3) o3 && 0 !== Object.keys(e3.dump).length ? (!(function(e4, r4, n3, s4) {
            let o4 = "";
            const i4 = e4.tag, a4 = Object.keys(n3);
            if (true === e4.sortKeys) a4.sort();
            else if ("function" == typeof e4.sortKeys) a4.sort(e4.sortKeys);
            else if (e4.sortKeys) throw new t2("sortKeys must be a boolean or a function");
            for (let t3 = 0, i5 = a4.length; t3 < i5; t3 += 1) {
              let i6 = "";
              s4 && "" === o4 || (i6 += p2(e4, r4));
              const c4 = a4[t3];
              let l4 = n3[c4];
              if (e4.replacer && (l4 = e4.replacer.call(n3, c4, l4)), !I2(e4, r4 + 1, c4, true, true, true)) continue;
              const u4 = null !== e4.tag && "?" !== e4.tag || e4.dump && e4.dump.length > 1024;
              u4 && (e4.dump && 10 === e4.dump.charCodeAt(0) ? i6 += "?" : i6 += "? "), i6 += e4.dump, u4 && (i6 += p2(e4, r4)), I2(e4, r4 + 1, l4, true, u4) && (e4.dump && 10 === e4.dump.charCodeAt(0) ? i6 += ":" : i6 += ": ", i6 += e4.dump, o4 += i6);
            }
            e4.tag = i4, e4.dump = o4 || "{}";
          })(e3, r3, e3.dump, i3), h3 && (e3.dump = "&ref_" + m3 + e3.dump)) : (!(function(e4, t3, r4) {
            let n3 = "";
            const s4 = e4.tag, o4 = Object.keys(r4);
            for (let s5 = 0, i4 = o4.length; s5 < i4; s5 += 1) {
              let i5 = "";
              "" !== n3 && (i5 += ", "), e4.condenseFlow && (i5 += '"');
              const a4 = o4[s5];
              let c4 = r4[a4];
              e4.replacer && (c4 = e4.replacer.call(r4, a4, c4)), I2(e4, t3, a4, false, false) && (e4.dump.length > 1024 && (i5 += "? "), i5 += e4.dump + (e4.condenseFlow ? '"' : "") + ":" + (e4.condenseFlow ? "" : " "), I2(e4, t3, c4, false, false) && (i5 += e4.dump, n3 += i5));
            }
            e4.tag = s4, e4.dump = "{" + n3 + "}";
          })(e3, r3, e3.dump), h3 && (e3.dump = "&ref_" + m3 + " " + e3.dump));
          else if ("[object Array]" === l3) o3 && 0 !== e3.dump.length ? (e3.noArrayIndent && !c3 && r3 > 0 ? x2(e3, r3 - 1, e3.dump, i3) : x2(e3, r3, e3.dump, i3), h3 && (e3.dump = "&ref_" + m3 + e3.dump)) : (!(function(e4, t3, r4) {
            let n3 = "";
            const s4 = e4.tag;
            for (let s5 = 0, o4 = r4.length; s5 < o4; s5 += 1) {
              let o5 = r4[s5];
              e4.replacer && (o5 = e4.replacer.call(r4, String(s5), o5)), (I2(e4, t3, o5, false, false) || void 0 === o5 && I2(e4, t3, null, false, false)) && ("" !== n3 && (n3 += "," + (e4.condenseFlow ? "" : " ")), n3 += e4.dump);
            }
            e4.tag = s4, e4.dump = "[" + n3 + "]";
          })(e3, r3, e3.dump), h3 && (e3.dump = "&ref_" + m3 + " " + e3.dump));
          else {
            if ("[object String]" !== l3) {
              if ("[object Undefined]" === l3) return false;
              if (e3.skipInvalid) return false;
              throw new t2("unacceptable kind of an object to dump " + l3);
            }
            "?" !== e3.tag && _2(e3, e3.dump, r3, a3, u3);
          }
          if (null !== e3.tag && "?" !== e3.tag) {
            let t3 = encodeURI("!" === e3.tag[0] ? e3.tag.slice(1) : e3.tag).replace(/!/g, "%21");
            t3 = "!" === e3.tag[0] ? "!" + t3 : "tag:yaml.org,2002:" === t3.slice(0, 18) ? "!!" + t3.slice(18) : "!<" + t3 + ">", e3.dump = t3 + " " + e3.dump;
          }
        }
        return true;
      }
      function T2(e3, t3) {
        const r3 = [], n3 = [];
        C2(e3, r3, n3);
        const s3 = n3.length;
        for (let e4 = 0; e4 < s3; e4 += 1) t3.duplicates.push(r3[n3[e4]]);
        t3.usedDuplicates = new Array(s3);
      }
      function C2(e3, t3, r3) {
        if (null !== e3 && "object" == typeof e3) {
          const n3 = t3.indexOf(e3);
          if (-1 !== n3) -1 === r3.indexOf(n3) && r3.push(n3);
          else if (t3.push(e3), Array.isArray(e3)) for (let n4 = 0, s3 = e3.length; n4 < s3; n4 += 1) C2(e3[n4], t3, r3);
          else {
            const n4 = Object.keys(e3);
            for (let s3 = 0, o3 = n4.length; s3 < o3; s3 += 1) C2(e3[n4[s3]], t3, r3);
          }
        }
      }
      return ql.dump = function(e3, t3) {
        const r3 = new u2(t3 = t3 || {});
        r3.noRefs || T2(e3, r3);
        let n3 = e3;
        return r3.replacer && (n3 = r3.replacer.call({ "": n3 }, "", n3)), I2(r3, 0, n3, true, true) ? r3.dump + "\n" : "";
      }, ql;
    }
    var Fl = (function() {
      if (Dl) return ul;
      Dl = 1;
      const e2 = Ol(), t2 = Nl();
      function r2(e3, t3) {
        return function() {
          throw new Error("Function yaml." + e3 + " is removed in js-yaml 4. Use yaml." + t3 + " instead, which is now safe by default.");
        };
      }
      return ul.Type = fl(), ul.Schema = gl(), ul.FAILSAFE_SCHEMA = _l(), ul.JSON_SCHEMA = El(), ul.CORE_SCHEMA = Il(), ul.DEFAULT_SCHEMA = Jl(), ul.load = e2.load, ul.loadAll = e2.loadAll, ul.dump = t2.dump, ul.YAMLException = hl(), ul.types = { binary: Pl(), float: xl(), map: vl(), null: bl(), pairs: Rl(), set: Ml(), timestamp: Tl(), bool: Sl(), int: kl(), merge: Cl(), omap: Al(), seq: wl(), str: yl() }, ul.safeLoad = r2("safeLoad", "load"), ul.safeLoadAll = r2("safeLoadAll", "loadAll"), ul.safeDump = r2("safeDump", "dump"), ul;
    })();
    const Ul = vc(Fl), { Type: Ll, Schema: $l, FAILSAFE_SCHEMA: jl, JSON_SCHEMA: Gl, CORE_SCHEMA: zl, DEFAULT_SCHEMA: Wl, load: Hl, loadAll: Kl, dump: Vl, YAMLException: Yl, types: Ql, safeLoad: Xl, safeLoadAll: Zl, safeDump: eu } = Ul, tu = [".md", ".mdc", ".markdown"], ru = [...tu, ".txt"], nu = /^---\s*\n([\s\S]*?)\n---/;
    function su(e2) {
      return e2.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9.-]/g, "");
    }
    function ou(e2) {
      const t2 = e2.match(nu);
      if (!t2) return {};
      try {
        const e3 = Ul.load(t2[1], { schema: Ul.JSON_SCHEMA });
        if (!e3 || "object" != typeof e3) return {};
        const r2 = null !== e3.metadata && "object" == typeof e3.metadata ? e3.metadata : void 0, n2 = iu(e3.environments ?? r2?.environments);
        return { disabledEnvironments: iu(e3["disabled-environments"] ?? r2?.disabledEnvironments), environments: n2, name: "string" == typeof e3.name ? e3.name : void 0, description: "string" == typeof e3.description ? e3.description : void 0 };
      } catch {
        const e3 = t2[1], r2 = e3.match(/^name:\s*(.+)$/m), n2 = e3.match(/^description:\s*(.+)$/m);
        return r2 || n2 ? { name: r2 ? r2[1].trim() : void 0, description: n2 ? n2[1].trim() : void 0 } : {};
      }
    }
    function iu(e2) {
      if (Array.isArray(e2)) {
        const t2 = e2.filter((e3) => "string" == typeof e3 && e3.length > 0);
        return 0 === t2.length ? void 0 : t2;
      }
      if ("string" == typeof e2) {
        const t2 = e2.split(",").map((e3) => e3.trim()).filter((e3) => e3.length > 0);
        return 0 === t2.length ? void 0 : t2;
      }
    }
    function au(e2) {
      return su((0, I.basename)(e2).replace(/\.(md|mdc|markdown|txt)$/i, ""));
    }
    function cu(e2) {
      const t2 = /* @__PURE__ */ new Set(), r2 = [];
      for (const n2 of e2) t2.has(n2.name) || (t2.add(n2.name), r2.push(n2));
      return r2;
    }
    class lu {
      constructor(e2) {
        this.fetcher = e2;
      }
      async discoverComponents(e2 = {}) {
        const t2 = e2.basePath ?? "", r2 = t2 ? `${t2}/` : "", n2 = e2.manifest;
        let s2;
        try {
          s2 = await this.fetcher.listDirectory(t2);
        } catch {
          s2 = [];
        }
        const o2 = new Set(s2.filter((e3) => "dir" === e3.type).map((e3) => e3.name.toLowerCase())), i2 = Ee.filter((e3) => s2.some((t3) => "file" === t3.type && t3.name === e3)), a2 = s2.some((e3) => "file" === e3.type && "SKILL.md" === e3.name), [c2, l2, u2, d2, p2, m2, h2] = await Promise.all([a2 && void 0 === n2?.skills ? this.discoverRootSkill(r2) : Promise.resolve(null), void 0 !== n2?.skills ? this.discoverFromManifestPaths(r2, n2.skills, true, tu) : o2.has("skills") ? this.discoverSkills(`${r2}skills`) : Promise.resolve([]), void 0 !== n2?.agents ? this.discoverFromManifestPaths(r2, n2.agents, false, tu) : o2.has("agents") ? this.discoverMarkdownComponents(`${r2}agents`, tu) : Promise.resolve([]), void 0 !== n2?.hooks ? this.discoverHooksFromManifest(r2, n2.hooks) : o2.has("hooks") ? this.discoverHooksFromJson(`${r2}hooks/hooks.json`) : Promise.resolve([]), void 0 !== n2?.commands ? this.discoverFromManifestPaths(r2, n2.commands, false, ru) : o2.has("commands") ? this.discoverMarkdownComponents(`${r2}commands`, ru) : Promise.resolve([]), void 0 !== n2?.rules ? this.discoverFromManifestPaths(r2, n2.rules, false, tu) : o2.has("rules") ? this.discoverMarkdownComponents(`${r2}rules`, tu) : Promise.resolve([]), this.discoverMcpServers(r2, n2?.mcpServers, i2)]);
        return { skills: cu(c2 ? [c2, ...l2] : l2), agents: cu(u2), hooks: d2, commands: cu(p2), rules: cu(m2), mcpServers: h2.servers, mcpVariables: h2.variables, mcpConfigs: h2.configs };
      }
      async discoverHooksFromJson(e2) {
        try {
          if (!await this.fetcher.fileExists(e2)) return [];
          const { content: t2 } = await this.fetcher.fetchFile(e2), r2 = JSON.parse(t2);
          if (!r2.hooks || "object" != typeof r2.hooks || Array.isArray(r2.hooks)) return [];
          return Object.keys(r2.hooks).map((t3) => ({ name: su(t3), path: e2, description: `Hook: ${t3}` }));
        } catch {
          return [];
        }
      }
      async discoverHooksFromManifest(e2, t2) {
        if ("string" == typeof t2) {
          if (!ge(t2)) return [];
          const r3 = `${e2}${t2.replace(/^\.\//, "")}`;
          return r3.endsWith(".json") ? this.discoverHooksFromJson(r3) : this.discoverHooksFromJson(`${r3}/hooks.json`);
        }
        const r2 = t2.hooks ?? t2;
        if (!r2 || "object" != typeof r2 || Array.isArray(r2)) return [];
        return Object.keys(r2).map((e3) => ({ name: su(e3), path: "manifest", description: `Hook: ${e3}` }));
      }
      async discoverFromManifestPaths(e2, t2, r2 = false, n2 = tu) {
        if ("string" == typeof t2) {
          if (!ge(t2)) return [];
          const s3 = `${e2}${t2.replace(/^\.\//, "")}`.replace(/\/$/, "");
          return r2 ? this.discoverSkills(s3) : this.discoverMarkdownComponents(s3, n2);
        }
        const s2 = [];
        for (const n3 of t2) try {
          if (!ge(n3)) continue;
          const t3 = `${e2}${n3.replace(/^\.\//, "")}`;
          if (r2) {
            const e3 = t3.endsWith("SKILL.md") ? t3 : `${t3.replace(/\/$/, "")}/SKILL.md`;
            if (!await this.fetcher.fileExists(e3)) {
              const e4 = t3.replace(/\/$/, ""), r4 = await this.discoverSkills(e4);
              s2.push(...r4);
              continue;
            }
            let r3 = au(t3.endsWith("SKILL.md") ? t3.slice(0, -8).replace(/\/$/, "") : t3);
            const { content: n4 } = await this.fetcher.fetchFile(e3), o2 = ou(n4);
            if (r3 = o2.name ?? r3, r3) {
              const t4 = { disabledEnvironments: o2.disabledEnvironments, environments: o2.environments, name: su(r3), path: e3 };
              void 0 !== o2.description && (t4.description = o2.description), s2.push(t4);
            }
          } else {
            if (!await this.fetcher.fileExists(t3)) continue;
            let e3 = au(t3);
            const { content: r3 } = await this.fetcher.fetchFile(t3), n4 = ou(r3);
            e3 = n4.name ?? e3;
            const o2 = n4.description;
            if (e3) {
              const r4 = { name: su(e3), path: t3 };
              void 0 !== o2 && (r4.description = o2), s2.push(r4);
            }
          }
        } catch {
        }
        return s2;
      }
      async discoverMarkdownComponents(e2, t2 = tu, r2 = /* @__PURE__ */ new Set()) {
        let n2;
        try {
          n2 = await this.fetcher.listDirectory(e2, r2);
        } catch {
          return [];
        }
        const s2 = n2.filter((e3) => "file" === e3.type && t2.some((t3) => e3.name.endsWith(t3))), o2 = n2.filter((e3) => "dir" === e3.type), [i2, a2] = await Promise.all([Promise.all(s2.map(async (e3) => {
          try {
            let t3 = au(e3.name);
            const { content: r3 } = await this.fetcher.fetchFile(e3.path), n3 = ou(r3);
            t3 = n3.name ? su(n3.name) : t3;
            const s3 = n3.description;
            if (!t3) return null;
            const o3 = { name: t3, path: e3.path };
            return void 0 !== s3 && (o3.description = s3), o3;
          } catch {
            return null;
          }
        })), Promise.all(o2.map((e3) => this.discoverMarkdownComponents(e3.path, t2, r2)))]);
        return [...i2.filter((e3) => null !== e3), ...a2.flat()];
      }
      async discoverRootSkill(e2) {
        try {
          const t2 = `${e2}SKILL.md`;
          let r2 = su((0, I.basename)(e2.replace(/[\\/]+$/, "")));
          const { content: n2 } = await this.fetcher.fetchFile(t2), s2 = ou(n2);
          if (r2 = s2.name ? su(s2.name) : r2, !r2) return null;
          const o2 = { disabledEnvironments: s2.disabledEnvironments, environments: s2.environments, name: r2, path: t2 };
          return void 0 !== s2.description && (o2.description = s2.description), o2;
        } catch {
          return null;
        }
      }
      async discoverSkills(e2) {
        let t2;
        try {
          t2 = await this.fetcher.listDirectory(e2);
        } catch {
          return [];
        }
        const r2 = t2.filter((e3) => "dir" === e3.type);
        return (await Promise.all(r2.map(async (e3) => {
          try {
            const t3 = `${e3.path}/SKILL.md`;
            if (!await this.fetcher.fileExists(t3)) return null;
            const { content: r3 } = await this.fetcher.fetchFile(t3), n2 = ou(r3), s2 = n2.name ? su(n2.name) : su(e3.name);
            if (!s2) return null;
            const o2 = { disabledEnvironments: n2.disabledEnvironments, environments: n2.environments, name: s2, path: t3 };
            return void 0 !== n2.description && (o2.description = n2.description), o2;
          } catch {
            return null;
          }
        }))).filter((e3) => null !== e3);
      }
      async discoverMcpServers(e2, t2, r2) {
        const n2 = /* @__PURE__ */ new Map(), s2 = async (t3) => {
          const r3 = n2.get(t3);
          if (void 0 !== r3) return r3;
          const s3 = this.fetcher.fetchFile(`${e2}${t3}`).then(({ content: e3 }) => e3).catch(() => null);
          return n2.set(t3, s3), s3;
        }, o2 = async (n3) => Oe(s2, t2, void 0 !== t2 ? "manifest" : void 0, { fallbackFileNames: r2, manifestPrecedence: n3, toSourcePath: (t3) => `${e2}${t3}`, parserOptions: { skipExpansion: true } }), i2 = await o2("fill");
        if (void 0 === i2?.mcpServers) return { servers: [], variables: void 0, configs: void 0 };
        const a2 = void 0 === t2 ? i2 : await o2("override"), c2 = a2?.mcpServers ?? i2.mcpServers, l2 = {};
        for (const [e3, t3] of Object.entries(c2)) l2[e3] = t3;
        return { servers: Object.keys(i2.mcpServers).map((e3) => ({ name: su(e3), path: i2.mcpServerSourcePaths?.[e3] ?? "manifest" })), variables: k(a2 ?? i2), configs: l2 };
      }
    }
    function uu(e2) {
      const t2 = e2 ?? process.env.HOME ?? "";
      return (0, I.join)(t2, ".claude");
    }
    async function du(e2) {
      const t2 = uu(e2), r2 = (0, I.join)(t2, "settings.json");
      try {
        const e3 = await (0, ve.readFile)(r2, "utf-8");
        return JSON.parse(e3);
      } catch (e3) {
        return e3.code, null;
      }
    }
    async function pu(e2) {
      const t2 = { enabledPlugins: {} };
      let r2 = false;
      const n2 = (0, I.join)(e2, ".claude", "settings.json");
      try {
        const e3 = await (0, ve.readFile)(n2, "utf-8"), s3 = JSON.parse(e3);
        s3.enabledPlugins && (Object.assign(t2.enabledPlugins, s3.enabledPlugins), r2 = true);
      } catch {
      }
      const s2 = (0, I.join)(e2, ".claude", "settings.local.json");
      try {
        const e3 = await (0, ve.readFile)(s2, "utf-8"), n3 = JSON.parse(e3);
        n3.enabledPlugins && (Object.assign(t2.enabledPlugins, n3.enabledPlugins), r2 = true);
      } catch {
      }
      return r2 ? t2 : null;
    }
    const mu = 10485760;
    async function hu(e2) {
      try {
        return (await (0, ve.lstat)(e2)).isSymbolicLink();
      } catch {
        return false;
      }
    }
    async function fu(e2) {
      if (await hu(e2)) throw new Error(`Refusing to read symlink: ${e2}`);
      return (0, ve.readFile)(e2, "utf-8");
    }
    async function gu(e2) {
      if ((await (0, ve.stat)(e2)).size > mu) throw new Error(`File ${e2} exceeds maximum size of ${mu} bytes`);
    }
    Error;
    function yu(e2) {
      const t2 = e2 instanceof Error ? e2.message : String(e2);
      return /timed?\s*out/i.test(t2) ? "timeout" : /clone|fetch|git/i.test(t2) ? "clone" : /manifest|marketplace\.json/i.test(t2) ? "manifest" : /parse|invalid|malformed/i.test(t2) ? "parse" : /install|download|copy/i.test(t2) ? "install" : "unknown";
    }
    function wu(e2, t2) {
      const r2 = /* @__PURE__ */ new Map(), n2 = (0, I.resolve)(e2), s2 = (0, I.resolve)(t2?.symlinkTargetRoot ?? n2), o2 = (0, ve.realpath)(s2).catch(() => s2);
      function i2(e3) {
        const t3 = (0, I.resolve)(e3);
        try {
          return Pa(n2, t3);
        } catch {
          throw new Error(`Path escapes plugin directory: ${e3}`);
        }
      }
      async function a2(e3) {
        const t3 = i2(e3), r3 = await o2, n3 = await (0, ve.realpath)(t3);
        try {
          return Pa(r3, n3);
        } catch {
          throw new Error(`Path escapes plugin directory via symlink: ${e3}`);
        }
      }
      return { async listDirectory(t3, r3) {
        const n3 = i2(t3 ? (0, I.join)(e2, t3) : e2);
        try {
          const e3 = await a2(n3);
          if (r3?.has(e3)) return [];
          r3?.add(e3);
          const s3 = await (0, ve.readdir)(e3, { withFileTypes: true }), o3 = [];
          for (const e4 of s3) {
            const r4 = (0, I.join)(n3, e4.name);
            let s4 = e4.isDirectory() ? "dir" : "file";
            if (e4.isSymbolicLink()) try {
              const e5 = await a2(r4);
              s4 = (await (0, ve.stat)(e5)).isDirectory() ? "dir" : "file";
            } catch {
              continue;
            }
            o3.push({ name: e4.name, type: s4, path: t3 ? `${t3}/${e4.name}` : e4.name });
          }
          return o3;
        } catch {
          return [];
        }
      }, async fetchFile(t3) {
        const n3 = r2.get(t3);
        if (void 0 !== n3) return { content: n3 };
        const s3 = i2((0, I.join)(e2, t3)), o3 = await a2(s3);
        await gu(o3);
        const c2 = await (0, ve.readFile)(o3, "utf-8");
        return r2.set(t3, c2), { content: c2 };
      }, async fileExists(t3) {
        try {
          const r3 = i2((0, I.join)(e2, t3)), n3 = await a2(r3);
          return (await (0, ve.stat)(n3)).isFile();
        } catch {
          return false;
        }
      } };
    }
    async function vu({ installPath: e2, logo: t2 }) {
      const r2 = t2?.trim();
      if (r2 && !(0, I.isAbsolute)(r2) && !r2.includes("://")) try {
        const t3 = await (0, ve.realpath)(e2), n2 = Pa(t3, r2), s2 = await (0, ve.realpath)(n2);
        Pa(t3, s2);
        if (!(await (0, ve.stat)(s2)).isFile()) return;
        return await gu(s2), (0, hc.pathToFileURL)(s2).href;
      } catch {
        return;
      }
    }
    function _u(e2) {
      const t2 = {};
      return void 0 !== e2.version && (t2.version = e2.version), void 0 !== e2.homepage && (t2.homepage = e2.homepage), void 0 !== e2.repository && (t2.repository = e2.repository), t2;
    }
    function bu(e2) {
      return void 0 !== e2.version || void 0 !== e2.homepage || void 0 !== e2.repository;
    }
    function Su(e2, t2) {
      return _u({ version: e2.version ?? t2?.version, homepage: e2.homepage ?? t2?.homepage, repository: e2.repository ?? t2?.repository });
    }
    async function ku(e2, t2, r2) {
      let n2;
      for (const s2 of B) {
        const o2 = (0, I.join)(e2, s2);
        let i2;
        try {
          if (await hu(o2)) continue;
          if (!(await (0, ve.stat)(o2)).isFile()) continue;
          await gu(o2), i2 = await fu(o2);
        } catch {
          continue;
        }
        const a2 = me(i2);
        if (!a2.success) continue;
        const c2 = a2.data, l2 = c2.commands, u2 = c2.agents, d2 = c2.skills, p2 = c2.rules, m2 = c2.hooks, h2 = c2.mcpServers, f2 = void 0 !== l2 || void 0 !== u2 || void 0 !== d2 || void 0 !== p2 || void 0 !== m2 || void 0 !== h2, g2 = "string" == typeof c2.displayName ? c2.displayName : void 0, y2 = "string" == typeof c2.description ? c2.description : void 0, w2 = c2.author?.name, v2 = await vu({ installPath: e2, logo: c2.logo }), _2 = _u(c2), b2 = c2.variables, S2 = c2.capabilities, k2 = void 0 !== g2 || void 0 !== y2 || void 0 !== w2 || void 0 !== v2 || void 0 !== b2 || void 0 !== S2;
        if (!f2 && !k2 && !bu(_2)) continue;
        if (!f2 && !k2) {
          n2 = n2 ? { ...n2, fields: Su(n2.fields, _2) } : { fields: _2, path: o2, relPath: s2, unrecognizedSchemaId: a2.unrecognizedSchemaId };
          continue;
        }
        void 0 !== a2.unrecognizedSchemaId && r2.log("debug", `${t2}: ${s2} declares an unrecognized $schema, loading anyway: ${a2.unrecognizedSchemaId}`);
        const x2 = Su(_2, n2?.fields);
        return { manifestFilePath: o2, ...f2 && { manifestOptions: { commands: l2, agents: u2, skills: d2, rules: p2, hooks: m2, mcpServers: h2 } }, ...(k2 || bu(x2)) && { metadata: { displayName: g2, description: y2, authorName: w2, logoUrl: v2, ...x2, variables: b2, capabilities: S2 } } };
      }
      if (void 0 !== n2) return void 0 !== n2.unrecognizedSchemaId && r2.log("debug", `${t2}: ${n2.relPath} declares an unrecognized $schema, loading anyway: ${n2.unrecognizedSchemaId}`), { manifestFilePath: n2.path, metadata: n2.fields };
    }
    function xu(e2) {
      return { name: e2.name, ...e2.description ? { description: e2.description } : {} };
    }
    async function Eu(e2, t2) {
      const r2 = await (async function(e3) {
        for (const t3 of B) {
          const r3 = (0, I.join)(e3, t3);
          try {
            if (await hu(r3)) continue;
            if (!(await (0, ve.stat)(r3)).isFile()) continue;
            await gu(r3);
            const e4 = me(await fu(r3));
            if (e4.success) return e4.data;
          } catch {
          }
        }
      })(e2) ?? {}, n2 = void 0 === r2.commands && void 0 === r2.agents && void 0 === r2.skills && void 0 === r2.rules && void 0 === r2.hooks && void 0 === r2.mcpServers ? void 0 : { commands: r2.commands, agents: r2.agents, skills: r2.skills, rules: r2.rules, hooks: r2.hooks, mcpServers: r2.mcpServers }, s2 = new lu(wu(e2, { symlinkTargetRoot: t2?.symlinkTargetRoot })), o2 = await s2.discoverComponents({ manifest: n2 });
      return { manifest: r2, skills: o2.skills.map(xu), subagents: o2.agents.map(xu), hooks: o2.hooks.map(xu), rules: o2.rules.map(xu), mcpServers: o2.mcpServers.map(xu), commands: o2.commands.map(xu) };
    }
    async function Iu(e2, t2) {
      const r2 = wu(e2), n2 = new lu(r2), s2 = await n2.discoverComponents({ manifest: t2 }), [o2, i2, a2, c2] = await Promise.all([Tu(r2, s2.skills, e2), Pu(r2, s2.agents, e2), Au(r2, s2.commands, e2), Cu(r2, s2.rules, e2)]);
      return { skills: o2, agents: i2, commands: a2, rules: c2 };
    }
    async function Tu(e2, t2, r2) {
      const n2 = [];
      for (const s2 of t2) try {
        const { content: t3 } = await e2.fetchFile(s2.path), o2 = Mu({ content: xe(t3, r2), relativePath: s2.path });
        o2 && n2.push(o2);
      } catch {
      }
      return n2;
    }
    async function Cu(e2, t2, r2) {
      const n2 = [];
      for (const s2 of t2) try {
        const { content: t3 } = await e2.fetchFile(s2.path), o2 = Mu({ content: xe(t3, r2), relativePath: s2.path });
        o2 && n2.push({ ...o2, name: s2.name });
      } catch {
      }
      return n2;
    }
    async function Pu(e2, t2, r2) {
      const n2 = [];
      for (const s2 of t2) try {
        const { content: t3 } = await e2.fetchFile(s2.path), o2 = Ju({ content: xe(t3, r2), relativePath: s2.path });
        o2 && n2.push(o2);
      } catch {
      }
      return n2;
    }
    async function Au(e2, t2, r2) {
      const n2 = [];
      for (const s2 of t2) try {
        const { content: t3 } = await e2.fetchFile(s2.path), o2 = Ou({ content: xe(t3, r2), relativePath: s2.path });
        o2 && n2.push(o2);
      } catch {
      }
      return n2;
    }
    function Ru(e2) {
      if ("string" == typeof e2) {
        const t2 = (function(e3) {
          const t3 = [];
          let r2 = 0, n2 = 0;
          for (let s3 = 0; s3 < e3.length; s3++) {
            const o2 = e3[s3];
            if ("{" === o2) n2++;
            else if ("}" === o2 && n2 > 0) n2--;
            else if ("," === o2 && 0 === n2) {
              const n3 = e3.slice(r2, s3).trim();
              n3 && t3.push(n3), r2 = s3 + 1;
            }
          }
          const s2 = e3.slice(r2).trim();
          return s2 && t3.push(s2), t3;
        })(e2);
        return t2.length > 0 ? t2 : void 0;
      }
      if (Array.isArray(e2)) {
        const t2 = e2.filter((e3) => "string" == typeof e3).map((e3) => e3.trim()).filter(Boolean);
        return t2.length > 0 ? t2 : void 0;
      }
    }
    function Mu({ content: e2, relativePath: t2 }) {
      try {
        const r2 = (0, gc.be)(e2), n2 = t2.replace(/\\/g, "/"), s2 = n2.split("/").filter((e3) => e3.length > 0), o2 = s2.length >= 2 ? s2[s2.length - 2] : void 0, i2 = s2[s2.length - 1] ?? n2, a2 = o2 ?? i2.replace(/\.md$/i, ""), c2 = "string" == typeof r2.data.name ? r2.data.name.trim() : void 0, l2 = iu(r2.data.environments ?? r2.data.metadata?.environments), u2 = iu(r2.data["disabled-environments"] ?? r2.data.metadata?.disabledEnvironments);
        return { path: t2, name: c2 && c2.length > 0 ? c2 : a2, description: "string" == typeof r2.data.description ? r2.data.description : void 0, globs: Ru(r2.data.globs), alwaysApply: true === r2.data.alwaysApply, content: e2, environments: l2, disabledEnvironments: u2 };
      } catch {
        return null;
      }
    }
    function Ju({ content: e2, relativePath: t2 }) {
      try {
        const n2 = (0, gc.be)(e2), s2 = n2.content.trim();
        if (!s2) return null;
        let o2;
        "string" == typeof n2.data.tools ? o2 = n2.data.tools.split(",").map((e3) => e3.trim()).filter(Boolean) : Array.isArray(n2.data.tools) && (o2 = n2.data.tools.map((e3) => "string" == typeof e3 ? e3.trim() : String(e3)).filter(Boolean));
        const i2 = n2.data.permissionMode ?? n2.data.permissionmode, a2 = (0, I.basename)(t2);
        return { path: t2, name: "string" == typeof n2.data.name ? n2.data.name : (0, I.basename)(a2, (0, I.extname)(a2)).replace(/[\s_]+/g, "-"), description: "string" == typeof n2.data.description ? n2.data.description : void 0, tools: o2, model: "string" == typeof n2.data.model ? n2.data.model : "inherit", prompt: s2, permissionMode: (r2 = i2, "readonly" === (r2 ?? "").trim().toLowerCase() ? "readonly" : "default") };
      } catch {
        return null;
      }
      var r2;
    }
    function Ou({ content: e2, relativePath: t2 }) {
      try {
        const r2 = (0, gc.be)(e2);
        let n2;
        const s2 = r2.data["argument-hint"];
        "string" == typeof s2 ? n2 = s2 : Array.isArray(s2) && (n2 = `[${s2.join(" ")}]`);
        const o2 = (0, I.basename)(t2);
        return { path: t2, name: "string" == typeof r2.data.name ? r2.data.name : (0, I.basename)(o2, (0, I.extname)(o2)), description: "string" == typeof r2.data.description ? r2.data.description : void 0, argumentHint: n2, content: r2.content.trim() };
      } catch {
        return null;
      }
    }
    function Bu(e2) {
      if (void 0 !== e2) return { configuredVariables: e2.configuredVariables };
    }
    async function Du(e2, t2, r2) {
      const n2 = r2 ?? Bu(t2);
      return (async function(e3, t3 = {}) {
        const r3 = t3.toSourcePath ?? ((e4) => e4);
        let n3, s2, o2;
        for (const t4 of B) {
          const i2 = await e3(t4);
          if (null === i2) continue;
          let a2;
          try {
            a2 = JSON.parse(i2);
          } catch {
            continue;
          }
          o2 = A(a2);
          const c2 = me(i2);
          if (c2.success) {
            void 0 !== c2.data.mcpServers && (n3 = c2.data.mcpServers, s2 = r3(t4));
            break;
          }
        }
        return Oe(e3, n3, s2, void 0 === o2 ? t3 : { ...t3, parserOptions: { ...t3.parserOptions, pluginSchemaId: o2 } });
      })(/* @__PURE__ */ (function(e3) {
        return async (t3) => {
          if (!ge(t3)) return null;
          const r3 = (0, I.join)(e3, t3);
          try {
            return await hu(r3) ? null : (await (0, ve.stat)(r3)).isFile() ? (await gu(r3), await fu(r3)) : null;
          } catch {
            return null;
          }
        };
      })(e2), { fallbackFileNames: Pe(), manifestPrecedence: "override", toSourcePath: (t3) => (0, I.join)(e2, t3), installPathForExpansion: e2, parserOptions: n2 });
    }
    async function qu(e2, t2, r2) {
      const n2 = await Du(e2, void 0, { log: r2 });
      if (n2) return n2;
      for (const n3 of q) {
        const s2 = (0, I.join)(e2, n3);
        try {
          if (!(await (0, ve.stat)(s2)).isFile()) continue;
          const n4 = await (0, ve.readFile)(s2, "utf-8"), o2 = JSON.parse(n4).plugins;
          if (!Array.isArray(o2)) continue;
          const i2 = t2.name, a2 = o2.find((e3) => e3.name === i2);
          if (!a2?.mcpServers?.length) continue;
          for (const t3 of a2.mcpServers) {
            const n5 = t3.replace(/^\.\//, "");
            if (!ge(n5)) continue;
            const s3 = (0, I.join)(e2, n5);
            try {
              await gu(s3);
              const t4 = Re(await fu(s3), e2, { log: r2 });
              if (t4?.mcpServers && Object.keys(t4.mcpServers).length > 0) {
                const e3 = Object.fromEntries(Object.keys(t4.mcpServers).map((e4) => [e4, s3]));
                return { ...t4, mcpServerSourcePaths: e3 };
              }
            } catch {
            }
          }
          return null;
        } catch {
        }
      }
      return null;
    }
    function Nu(e2, t2) {
      const r2 = {};
      for (const [n2, s2] of Object.entries(e2.hooks)) Array.isArray(s2) && (r2[n2] = s2.map((e3) => "command" in e3 && "string" == typeof e3.command ? { ...e3, command: xe(e3.command, t2) } : "prompt" in e3 && "string" == typeof e3.prompt ? { ...e3, prompt: xe(e3.prompt, t2) } : e3));
      return { ...e2, hooks: r2 };
    }
    async function Fu(e2, t2, r2, n2) {
      if ("object" == typeof r2) {
        const s3 = Uu(r2, t2);
        return s3 && "config" in s3 ? { config: Nu(s3.config, e2), ...void 0 !== n2 && { sourcePath: n2 } } : s3;
      }
      let s2, o2, i2;
      if ("string" == typeof r2) {
        const t3 = r2.replace(/^\.\//, "");
        if (!ge(t3)) return;
        s2 = t3.endsWith(".json") ? (0, I.join)(e2, t3) : (0, I.join)(e2, t3, "hooks.json");
      } else s2 = (0, I.join)(e2, "hooks", "hooks.json");
      try {
        if (await hu(s2)) return;
        if (!(await (0, ve.stat)(s2)).isFile()) return;
      } catch {
        return;
      }
      try {
        await gu(s2), o2 = await (0, ve.readFile)(s2, "utf-8");
      } catch {
        return;
      }
      try {
        i2 = JSON.parse(o2);
      } catch {
        return { error: { source: "claude-plugin", message: `Plugin ${t2} ${s2}: invalid JSON` } };
      }
      const a2 = Uu(i2, t2);
      return a2 && "config" in a2 ? { config: Nu(a2.config, e2), sourcePath: s2 } : a2;
    }
    function Uu(e2, t2) {
      const r2 = (0, fc.fp)(e2);
      if ("cursor" === r2) {
        const r3 = e2, n2 = (0, fc.RV)(r3);
        return n2.isValid ? { config: r3 } : { error: { source: "claude-plugin", message: `Plugin ${t2} hooks: ${n2.errors.join("; ")}` } };
      }
      if ("claude-code" === r2) {
        const r3 = e2, n2 = r3?.hooks;
        if (!n2 || 0 === Object.keys(n2).length) return;
        const s2 = (0, fc.sl)(n2), o2 = (0, fc.RV)(s2);
        return o2.isValid ? { config: s2 } : { error: { source: "claude-plugin", message: `Plugin ${t2} hooks: ${o2.errors.join("; ")}` } };
      }
    }
    async function Lu(e2, t2, r2, n2) {
      const o2 = n2?.log ?? s, i2 = await ku(e2, t2, o2), a2 = { ...Bu(r2) ?? (n2?.configuredVariables ? { configuredVariables: n2.configuredVariables } : void 0), log: o2 }, [c2, l2, u2] = await Promise.all([Iu(e2, i2?.manifestOptions), Du(e2, r2, a2), Fu(e2, t2, i2?.manifestOptions?.hooks, i2?.manifestFilePath)]);
      return { ...c2, ...void 0 !== i2?.metadata?.displayName && { displayName: i2.metadata.displayName }, ...void 0 !== i2?.metadata?.description && { description: i2.metadata.description }, ...void 0 !== i2?.metadata?.authorName && { authorName: i2.metadata.authorName }, ...void 0 !== i2?.metadata?.logoUrl && { logoUrl: i2.metadata.logoUrl }, ...void 0 !== i2?.metadata?.version && { version: i2.metadata.version }, ...void 0 !== i2?.metadata?.homepage && { homepage: i2.metadata.homepage }, ...void 0 !== i2?.metadata?.repository && { repository: i2.metadata.repository }, variablesSchema: i2?.metadata?.variables, mcpConfig: l2, capabilities: i2?.metadata?.capabilities ?? [], hooks: u2 };
    }
    async function $u(e2, t2, r2) {
      const n2 = r2?.log ?? s, o2 = await ku(e2, t2.raw, n2), [i2, a2, c2] = await Promise.all([Iu(e2, o2?.manifestOptions), qu(e2, t2, n2), Fu(e2, t2.raw, o2?.manifestOptions?.hooks, o2?.manifestFilePath)]);
      return { identifier: { source: "claude-plugin", sourceInfo: t2 }, installPath: e2, ...void 0 !== o2?.metadata?.displayName && { displayName: o2.metadata.displayName }, ...void 0 !== o2?.metadata?.description && { description: o2.metadata.description }, ...void 0 !== o2?.metadata?.authorName && { authorName: o2.metadata.authorName }, ...void 0 !== o2?.metadata?.logoUrl && { logoUrl: o2.metadata.logoUrl }, ...void 0 !== o2?.metadata?.version && { version: o2.metadata.version }, ...void 0 !== o2?.metadata?.homepage && { homepage: o2.metadata.homepage }, ...void 0 !== o2?.metadata?.repository && { repository: o2.metadata.repository }, ...i2, mcpConfig: a2 ?? void 0, capabilities: o2?.metadata?.capabilities ?? [], hooks: c2 };
    }
    async function ju(e2, t2, r2, n2) {
      const s2 = `${r2.name}@${r2.version}`, { displayName: o2, description: i2, authorName: a2, logoUrl: c2, version: l2, homepage: u2, repository: d2, variablesSchema: p2, skills: m2, rules: h2, agents: f2, commands: g2, mcpConfig: y2, capabilities: w2, hooks: v2 } = await Lu(e2, s2, r2, { log: n2?.log });
      return { identifier: { source: t2, sourceInfo: r2 }, installPath: e2, ...void 0 !== o2 && { displayName: o2 }, ...void 0 !== i2 && { description: i2 }, ...void 0 !== a2 && { authorName: a2 }, ...void 0 !== c2 && { logoUrl: c2 }, ...void 0 !== l2 && { version: l2 }, ...void 0 !== u2 && { homepage: u2 }, ...void 0 !== d2 && { repository: d2 }, variablesSchema: p2, skills: m2, rules: h2, agents: f2, commands: g2, mcpConfig: y2 ?? void 0, capabilities: w2, hooks: v2 };
    }
    async function Gu(e2, t2, r2 = {}) {
      const n2 = r2.log ?? s, o2 = performance.now(), i2 = await (async function(e3) {
        const t3 = uu(e3), r3 = (0, I.join)(t3, "plugins", "installed_plugins.json");
        try {
          const e4 = await (0, ve.readFile)(r3, "utf-8");
          return JSON.parse(e4);
        } catch (e4) {
          return e4.code, null;
        }
      })(r2.userHomeDir);
      if (!i2?.plugins) return n2.log("info", `loadAllEnabledPlugins: no installed plugins metadata found (${(performance.now() - o2).toFixed(1)}ms)`), [];
      const a2 = await du(r2.userHomeDir), c2 = (function(e3) {
        if (void 0 === e3) return [];
        const t3 = "string" == typeof e3 ? [e3] : e3, r3 = /* @__PURE__ */ new Set(), n3 = [];
        for (const e4 of t3) {
          if (!e4) continue;
          const t4 = (0, I.resolve)(e4);
          r3.has(t4) || (r3.add(t4), n3.push(t4));
        }
        return n3;
      })(e2), l2 = (function(e3, t3, r3) {
        if (0 === r3.length) return wc(e3, t3, null, void 0);
        const n3 = /* @__PURE__ */ new Set();
        for (const { settings: e4 } of r3) for (const [t4, r4] of Object.entries(e4?.enabledPlugins ?? {})) false === r4 && n3.add(t4);
        const s2 = /* @__PURE__ */ new Set(), o3 = [];
        for (const { workspacePath: i3, settings: a3 } of r3) {
          const r4 = wc(e3, t3, a3, i3);
          for (const e4 of r4) s2.has(e4.pluginId) || n3.has(e4.pluginId) || (s2.add(e4.pluginId), o3.push(e4));
        }
        return o3;
      })(i2, a2, await (0, Ca.PH)(c2, async (e3) => ({ workspacePath: e3, settings: await pu(e3) }), { max: 8 })), d2 = [], p2 = r2.onError;
      for (const { pluginId: e3, installPath: t3 } of l2) try {
        const r3 = performance.now(), s2 = u(e3), o3 = await $u(t3, s2, { log: n2 });
        d2.push(o3), n2.log("info", `loadClaudePlugin ${e3} loaded in ${(performance.now() - r3).toFixed(1)}ms`);
      } catch (t4) {
        const r3 = t4 instanceof Error ? t4 : new Error(String(t4));
        if (p2) try {
          p2(u(e3), r3);
        } catch {
          p2({ name: e3.split("@")[0] ?? e3, sourceType: "marketplace", marketplace: "unknown", raw: e3 }, r3);
        }
      }
      return n2.log("info", `loadAllEnabledPlugins completed in ${(performance.now() - o2).toFixed(1)}ms (${l2.length} resolved, ${d2.length} loaded)`), d2;
    }
    const zu = "local";
    async function Wu(e2, t2 = {}) {
      const r2 = t2.log ?? s, n2 = t2.userHomeDir ?? process.env.HOME;
      if (!n2) throw new Error("removeUserLocalPlugin: no home directory available");
      if (!e2 || e2.includes("/") || e2.includes("\\") || "." === e2 || ".." === e2) throw new Error(`removeUserLocalPlugin: invalid plugin name "${e2}"`);
      const o2 = (0, I.join)(n2, ".cursor", "plugins", zu, e2);
      r2.log("info", `removeUserLocalPlugin: removing ${o2}`), await (0, ve.rm)(o2, { recursive: true, force: true }), r2.log("info", `removeUserLocalPlugin: removed ${o2}`);
    }
    async function Hu(e2) {
      const t2 = e2.log ?? s, r2 = performance.now(), { client: n2, userId: o2, teamId: i2, onCursorError: a2, pruneOldVersions: c2, pluginFilter: l2, onPluginsListed: u2 } = e2, d2 = [], p2 = e2.cacheManager ?? new Mi(e2.userHomeDir), m2 = performance.now();
      let h2;
      try {
        h2 = await n2.listEnabledPlugins(o2, i2);
      } catch (e3) {
        return t2.captureException(e3, { error_type: "list_enabled_plugins" }), t2.increment("marketplace.source_unavailable", 1), t2.log("error", `marketplace listEnabledPlugins failed after ${(performance.now() - m2).toFixed(1)}ms; treating source as unavailable: ${e3 instanceof Error ? e3.message : String(e3)}`), { plugins: [], failures: [], sourceUnavailable: true };
      }
      t2.log("info", `marketplace listEnabledPlugins completed in ${(performance.now() - m2).toFixed(1)}ms (${h2.plugins.length} plugins)`), u2 && await u2(h2.plugins);
      const f2 = [];
      if (h2.listFailures) {
        d2.push(...h2.listFailures);
        for (const e3 of h2.listFailures) f2.push({ identifier: { source: e3.marketplaceName && "cursor-public" !== e3.marketplaceName ? "cursor-third-party" : "cursor-first-party", sourceInfo: { name: e3.pluginName, version: "", ...void 0 !== e3.pluginDbId && { pluginDbId: e3.pluginDbId }, marketplace: e3.marketplaceName } }, installPath: "", loadError: e3.errorMessage, skills: [], rules: [], agents: [], commands: [], capabilities: [] });
      }
      const g2 = /* @__PURE__ */ new Map();
      for (const e3 of h2.plugins) if (!l2 || l2(e3)) try {
        const r3 = e3.marketplace?.name;
        if (!r3) {
          const t3 = new Error(`Plugin ${e3.name} has no marketplace metadata — cannot determine cache path`);
          d2.push({ pluginName: e3.name, pluginId: e3.pluginId, marketplaceName: void 0, errorMessage: t3.message, errorType: "manifest" }), a2 && a2(e3, t3);
          continue;
        }
        const s2 = `${r3}/${e3.pluginId}`;
        let o3 = g2.get(s2);
        o3 || (o3 = { slug: r3, pluginId: e3.pluginId, versions: [] }, g2.set(s2, o3)), o3.versions.push(e3.version);
        let i3;
        if (await p2.isCached({ marketplaceSlug: r3, pluginId: e3.pluginId, version: e3.version })) i3 = p2.getCacheDir({ marketplaceSlug: r3, pluginId: e3.pluginId, version: e3.version }), t2.log("info", `loadFromMarketplaceSource: Found cached plugin: ${e3.pluginId} at ${i3}`, { marketplaceSlug: r3, pluginId: e3.pluginId, gitRef: e3.version, marketplaceId: e3.marketplace?.id });
        else {
          const s3 = p2.getCacheDir({ marketplaceSlug: r3, pluginId: e3.pluginId, version: e3.version });
          t2.log("info", `loadFromMarketplaceSource: Plugin missing from cache, installing: ${e3.pluginId} at ${s3}`, { marketplaceSlug: r3, pluginId: e3.pluginId, gitRef: e3.version, marketplaceId: e3.marketplace?.id }), await (0, ve.mkdir)(s3, { recursive: true });
          try {
            await n2.installPlugin(e3, s3), await p2.markCacheComplete({ marketplaceSlug: r3, pluginId: e3.pluginId, version: e3.version });
          } catch (e4) {
            try {
              await (0, ve.rm)(s3, { recursive: true, force: true });
            } catch {
            }
            throw e4;
          }
          i3 = s3;
        }
        const c3 = e3.marketplace?.name, l3 = void 0 !== c3 && "cursor-public" !== c3 && c3.length > 0 ? "cursor-third-party" : "cursor-first-party", u3 = { name: e3.name, version: e3.version, pluginDbId: e3.pluginDbId, configuredVariables: e3.configuredVariables, marketplace: c3, marketplaceDbId: e3.marketplaceDbId, isTeamRequired: e3.isTeamRequired }, m3 = await ju(i3, l3, u3, { log: t2 });
        f2.push(m3);
        try {
          await p2.pruneOldVersions({ marketplaceSlug: r3, pluginId: e3.pluginId, keepVersions: [e3.version] });
        } catch {
        }
      } catch (r3) {
        t2.captureException(r3, { error_type: "load_plugin_from_marketplace" });
        const n3 = r3 instanceof Error ? r3 : new Error(String(r3));
        d2.push({ pluginName: e3.name, pluginId: e3.pluginId, marketplaceName: e3.marketplace?.name, errorMessage: n3.message, errorType: yu(n3) });
        const s2 = e3.marketplace?.name, o3 = void 0 !== s2 && "cursor-public" !== s2 && s2.length > 0;
        f2.push({ identifier: { source: o3 ? "cursor-third-party" : "cursor-first-party", sourceInfo: { name: e3.name, version: e3.version, pluginDbId: e3.pluginDbId, marketplace: s2, marketplaceDbId: e3.marketplaceDbId, isTeamRequired: e3.isTeamRequired } }, installPath: "", loadError: n3.message || "Plugin load failed", skills: [], rules: [], agents: [], commands: [], capabilities: [] }), a2 && a2(e3, n3);
      }
      if (c2) for (const { slug: e3, pluginId: t3, versions: r3 } of g2.values()) try {
        await p2.pruneOldVersions({ marketplaceSlug: e3, pluginId: t3, keepVersions: r3 });
      } catch {
      }
      return t2.log("info", `loadFromMarketplaceSource completed in ${(performance.now() - r2).toFixed(1)}ms (${f2.length} plugins loaded, ${d2.length} failures)`), { plugins: f2, failures: d2, sourceUnavailable: false };
    }
    async function Ku(e2, t2 = {}) {
      const r2 = t2.log ?? s, n2 = performance.now(), o2 = t2.loadClaude ?? true, i2 = t2.loadUserLocal ?? true, a2 = t2.marketplaceSources ?? [], c2 = t2.loadCursorFirstParty ?? a2.length > 0, l2 = [], u2 = [];
      let d2;
      o2 && l2.push(Gu(e2, 0, { userHomeDir: t2.userHomeDir, onError: t2.onError, log: r2 })), c2 && a2.length > 0 && (d2 = Promise.allSettled(a2.map((e3) => Hu({ ...e3, userHomeDir: e3.userHomeDir ?? t2.userHomeDir, log: e3.log ?? r2 })))), i2 && l2.push((async function(e3 = {}) {
        const t3 = e3.log ?? s, r3 = performance.now(), n3 = e3.userHomeDir ?? process.env.HOME;
        if (!n3) return t3.log("info", "loadUserLocalPlugins: no home directory available, skipping"), [];
        const o3 = (0, I.join)(n3, ".cursor", "plugins", zu);
        let i3;
        try {
          i3 = await (0, ve.readdir)(o3, { withFileTypes: true });
        } catch {
          return t3.log("info", `loadUserLocalPlugins: ${o3} not found or not readable (${(performance.now() - r3).toFixed(1)}ms)`), [];
        }
        const a3 = await (0, ve.realpath)(o3).catch(() => (0, I.resolve)(o3)), c3 = [];
        for (const r4 of i3) {
          if (!r4.isDirectory() && !r4.isSymbolicLink()) continue;
          if (r4.name.startsWith(".")) continue;
          const n4 = (0, I.join)(o3, r4.name);
          try {
            if (r4.isSymbolicLink()) {
              let e4;
              try {
                e4 = await (0, ve.realpath)(n4);
              } catch (e5) {
                t3.log("warn", `loadUserLocalPlugin ${r4.name} rejected: failed to resolve symlink (${e5 instanceof Error ? e5.message : String(e5)})`);
                continue;
              }
              try {
                Pa(a3, e4);
              } catch {
                t3.log("warn", `loadUserLocalPlugin ${r4.name} rejected: symlink target ${e4} is outside ${o3}`);
                continue;
              }
            }
            if (!(await (0, ve.stat)(n4)).isDirectory()) {
              r4.isSymbolicLink() && t3.log("warn", `loadUserLocalPlugin ${r4.name} rejected: symlink target is not a directory`);
              continue;
            }
            const s2 = performance.now(), i4 = await e3.localPluginVariablesLookup?.(r4.name), { displayName: l3, description: u3, authorName: d3, logoUrl: p3, version: m3, homepage: h3, repository: f3, variablesSchema: g3, skills: y3, rules: w3, agents: v3, commands: _3, mcpConfig: b2, capabilities: S2, hooks: k2 } = await Lu(n4, r4.name, void 0, { configuredVariables: i4, log: t3 }), x2 = { source: "user-local", sourceInfo: { name: r4.name, localPath: n4 } };
            c3.push({ identifier: x2, installPath: n4, ...void 0 !== l3 && { displayName: l3 }, ...void 0 !== u3 && { description: u3 }, ...void 0 !== d3 && { authorName: d3 }, ...void 0 !== p3 && { logoUrl: p3 }, ...void 0 !== m3 && { version: m3 }, ...void 0 !== h3 && { homepage: h3 }, ...void 0 !== f3 && { repository: f3 }, variablesSchema: g3, skills: y3, rules: w3, agents: v3, commands: _3, mcpConfig: b2 ?? void 0, capabilities: S2, hooks: k2 }), t3.log("info", `loadUserLocalPlugin ${r4.name} loaded in ${(performance.now() - s2).toFixed(1)}ms`);
          } catch (e4) {
            t3.log("error", `loadUserLocalPlugin ${r4.name} failed: ${e4 instanceof Error ? e4.message : String(e4)}`);
          }
        }
        return t3.log("info", `loadUserLocalPlugins completed in ${(performance.now() - r3).toFixed(1)}ms (${c3.length} plugins loaded)`), c3;
      })({ userHomeDir: t2.userHomeDir, log: r2, localPluginVariablesLookup: t2.localPluginVariablesLookup }));
      const [p2, m2] = await Promise.all([Promise.allSettled(l2), d2 ?? Promise.resolve([])]);
      let h2 = false;
      const f2 = [];
      for (const e3 of m2) "rejected" !== e3.status ? (e3.value.sourceUnavailable && (h2 = true), f2.push(...e3.value.plugins), u2.push(...e3.value.failures)) : (h2 = true, r2.log("error", `marketplace source threw while loading; treating it as unavailable: ${String(e3.reason)}`));
      for (const e3 of p2) "rejected" !== e3.status ? f2.push(...e3.value) : (h2 = true, r2.log("error", `plugin source threw while loading; treating it as unavailable: ${String(e3.reason)}`));
      const g2 = /* @__PURE__ */ new Set(), y2 = [];
      for (const e3 of f2) {
        if (!e3.installPath) {
          y2.push(e3);
          continue;
        }
        const t3 = await (0, ve.realpath)(e3.installPath).catch(() => e3.installPath);
        g2.has(t3) || (g2.add(t3), y2.push(e3));
      }
      const w2 = /* @__PURE__ */ new Map(), v2 = [];
      for (const e3 of y2) {
        const t3 = Vu(e3);
        if (void 0 !== t3) {
          const r3 = w2.get(t3), n3 = !e3.loadError;
          if (true === r3) continue;
          if (false === r3 && n3) {
            const r4 = v2.findIndex((e4) => Vu(e4) === t3 && e4.loadError);
            -1 !== r4 && v2.splice(r4, 1), w2.set(t3, true), v2.push(e3);
            continue;
          }
          w2.set(t3, n3);
        }
        v2.push(e3);
      }
      const _2 = performance.now() - n2;
      return r2.log("info", `loadAllPlugins completed in ${_2.toFixed(1)}ms (claude=${o2}, userLocal=${i2}, marketplace=${a2.length} sources, total=${v2.length} plugins, failures=${u2.length}, sourceUnavailable=${h2})`), { plugins: v2, failures: u2, sourceUnavailable: h2 };
    }
    function Vu(e2) {
      const { identifier: t2 } = e2;
      switch (t2.source) {
        case "claude-plugin":
          return "marketplace" === t2.sourceInfo.sourceType && t2.sourceInfo.marketplace ? `${t2.sourceInfo.marketplace}/${t2.sourceInfo.name}` : void 0;
        case "cursor-first-party":
        case "cursor-third-party":
          return t2.sourceInfo.marketplace ? `${t2.sourceInfo.marketplace}/${t2.sourceInfo.name}` : void 0;
        case "user-local":
        case "extension":
          return;
        default:
          return;
      }
    }
    function Yu(e2) {
      return Vu(e2) ?? `path:${e2.installPath}`;
    }
    function Qu(e2, t2 = {}) {
      return { ...e2, model: t2.stripModel ? void 0 : e2.model, tools: t2.stripTools ? void 0 : e2.tools };
    }
    const Xu = (0, I.join)((0, Di.homedir)(), ".claude", "plugins", "marketplaces"), Zu = 4, ed = { log: () => {
    } };
    async function td(e2) {
      const { dirPath: t2, existingUserMarketplaceNames: r2, logger: n2 } = e2, s2 = (0, I.basename)(t2), o2 = await (async function(e3) {
        const t3 = (0, I.join)(e3, ".git", "config");
        try {
          const e4 = (await (0, ve.readFile)(t3, "utf-8")).match(/\[remote\s+"origin"\][^[]*\burl\s*=\s*(.+)/m);
          if (e4?.[1]) return e4[1].trim();
        } catch {
        }
      })(t2);
      if (!o2) return n2.log("cc-marketplace-import.noGitUrl", { dirPath: t2 }), { kind: "unparseable", reason: "no-git-url" };
      const i2 = await Ga(t2, { repoName: s2 });
      if (null === i2) return n2.log("cc-marketplace-import.noManifest", { dirPath: t2 }), { kind: "unparseable", reason: "no-manifest" };
      if (r2.has(i2.name)) return n2.log("cc-marketplace-import.skippedExistingUserMarketplace", { marketplaceName: i2.name, dirPath: t2 }), { kind: "skipped-existing", marketplaceName: i2.name };
      const a2 = await (async function(e3) {
        const t3 = (0, I.join)(e3, ".git", "HEAD");
        try {
          const r3 = (await (0, ve.readFile)(t3, "utf-8")).trim();
          if (r3.startsWith("ref: ")) {
            const t4 = (0, I.join)(e3, ".git", r3.slice(5)), n3 = (await (0, ve.readFile)(t4, "utf-8")).trim();
            return 40 === n3.length ? n3 : void 0;
          }
          return 40 === r3.length ? r3 : void 0;
        } catch {
        }
      })(t2), c2 = await (async function(e3) {
        const t3 = (0, I.join)(e3, ".git", "HEAD");
        try {
          const e4 = (await (0, ve.readFile)(t3, "utf-8")).trim();
          if (e4.startsWith("ref: refs/heads/")) return e4.slice(16);
        } catch {
        }
        return "main";
      })(t2), l2 = [], u2 = i2.metadata?.pluginRoot;
      for (const e3 of i2.plugins) {
        const r3 = "string" == typeof e3.name ? e3.name : e3.name ?? s2, o3 = he(e3.source, u2);
        if (null === o3) {
          n2.log("cc-marketplace-import.skippingExternalPlugin", { name: r3, source: e3.source });
          continue;
        }
        if (!ge(o3)) {
          n2.log("cc-marketplace-import.skippingUnsafePluginPath", { name: r3, source: e3.source, gitPath: o3 });
          continue;
        }
        const i3 = (0, I.join)(t2, o3);
        try {
          if (!(await (0, ve.stat)(i3)).isDirectory()) continue;
        } catch {
          continue;
        }
        try {
          const t3 = await Eu(i3), n3 = t3.manifest.name ?? e3.displayName ?? r3, s3 = t3.manifest.description ?? e3.description ?? "";
          l2.push({ name: r3, displayName: n3, description: s3, gitPath: o3, gitUrl: "", gitRef: "", skills: t3.skills, subagents: t3.subagents, hooks: t3.hooks, rules: t3.rules, mcpServers: t3.mcpServers, commands: t3.commands, logoUrl: e3.logo, variables: t3.manifest.variables });
        } catch (e4) {
          n2.log("cc-marketplace-import.pluginLoadError", { name: r3, pluginPath: i3, error: e4 instanceof Error ? e4.message : String(e4) });
        }
      }
      return 0 === l2.length ? (n2.log("cc-marketplace-import.noPlugins", { dirPath: t2 }), { kind: "unparseable", reason: "no-plugins" }) : { kind: "payload", payload: { gitUrl: o2, gitRef: a2 ?? c2, marketplaceName: i2.name, commitSha: a2 ?? void 0, plugins: l2 } };
    }
    async function rd(e2 = {}) {
      const t2 = e2.marketplacesDir ?? Xu, r2 = void 0 === e2.existingUserMarketplaceNames ? /* @__PURE__ */ new Set() : e2.existingUserMarketplaceNames instanceof Set ? e2.existingUserMarketplaceNames : new Set(e2.existingUserMarketplaceNames), n2 = e2.logger ?? ed, s2 = e2.maxConcurrent ?? Zu, o2 = { payloads: [], marketplacesDir: t2, totalDirectories: 0, skippedExisting: 0, unparseable: 0 };
      let i2;
      n2.log("cc-marketplace-import.start", { dir: t2 });
      try {
        i2 = await (0, ve.readdir)(t2, { withFileTypes: true });
      } catch (e3) {
        return n2.log("cc-marketplace-import.readdirError", { dir: t2, error: e3 instanceof Error ? e3.message : String(e3) }), o2;
      }
      const a2 = [];
      for (const e3 of i2) e3.isDirectory() && a2.push((0, I.join)(t2, e3.name));
      if (0 === a2.length) return n2.log("cc-marketplace-import.noMarketplaces"), { ...o2 };
      n2.log("cc-marketplace-import.foundMarketplaces", { count: a2.length });
      const c2 = await (0, Ca.up)(a2, async (e3) => td({ dirPath: e3, existingUserMarketplaceNames: r2, logger: n2 }), { max: s2 }), l2 = [];
      let u2 = 0, d2 = 0;
      return c2.forEach((e3, t3) => {
        if ("fulfilled" !== e3.status) return d2 += 1, void n2.log("cc-marketplace-import.parseError", { dirPath: a2[t3], error: e3.reason instanceof Error ? e3.reason.message : String(e3.reason) });
        switch (e3.value.kind) {
          case "payload":
            l2.push(e3.value.payload);
            break;
          case "skipped-existing":
            u2 += 1;
            break;
          case "unparseable":
            d2 += 1;
            break;
          default:
            e3.value;
        }
      }), n2.log("cc-marketplace-import.discoveryComplete", { totalDirectories: a2.length, payloads: l2.length, skippedExisting: u2, unparseable: d2 }), { payloads: l2, marketplacesDir: t2, totalDirectories: a2.length, skippedExisting: u2, unparseable: d2 };
    }
    async function nd(e2, t2, r2) {
      const n2 = t2?.trim() || "HEAD", s2 = await (async function(e3) {
        const { primaryGitUrl: t3, fallbackGitUrl: r3, requestedRef: n3 } = e3;
        try {
          return await Hi(t3, n3, { sshBatchMode: t3.startsWith("git@") || t3.startsWith("ssh://") });
        } catch (e4) {
          if (void 0 === r3 || r3 === t3) throw e4;
          return await Hi(r3, n3);
        }
      })({ primaryGitUrl: r2 ?? e2, fallbackGitUrl: void 0 === r2 ? void 0 : e2, requestedRef: n2 });
      return "HEAD" === n2.toUpperCase() ? { requestedRef: n2, cloneRef: s2.fullSha, commitSha: s2.fullSha, defaultBranch: zi(s2.headSymrefStdout ?? "") ?? "HEAD" } : { requestedRef: n2, cloneRef: s2.fullSha, commitSha: s2.fullSha, defaultBranch: n2 };
    }
    function sd(e2) {
      const { pluginLogo: t2, entryLogo: r2, owner: n2, repo: s2, ref: o2, basePath: i2 } = e2;
      return t2?.startsWith("http") ? t2 : t2 ? fe({ logo: t2, owner: n2, repo: s2, ref: o2, basePath: i2 }) : r2 ? "string" == typeof r2 && r2.startsWith("http") ? r2 : fe({ logo: r2, owner: n2, repo: s2, ref: o2, basePath: i2 }) : void 0;
    }
    function od(e2) {
      return "local" !== e2.sourceType;
    }
    const id = { skills: [], subagents: [], hooks: [], rules: [], mcpServers: [], commands: [], variables: void 0, logoUrl: void 0 };
    function ad(e2, t2, r2, n2) {
      if (e2?.startsWith("http")) return e2;
      const s2 = wa(t2.gitUrl);
      return "error" in s2 ? void 0 : e2 ? fe({ logo: e2, owner: s2.owner, repo: s2.repo, ref: t2.gitRef ?? "HEAD", basePath: n2 }) : void 0;
    }
    function cd(e2) {
      return { name: e2.name, displayName: e2.displayName, description: e2.description ?? "", gitPath: "", skills: [], subagents: [], hooks: [], rules: [], mcpServers: [], commands: [], parseError: e2.parseError };
    }
    function ld(e2, t2) {
      const r2 = new Set(e2.map((e3) => e3.name));
      for (const n2 of t2) {
        let t3 = n2.name;
        if (!t3 || r2.has(t3)) {
          let e3 = n2.index;
          do {
            t3 = `errored-plugin-${e3}`, e3++;
          } while (r2.has(t3));
        }
        r2.add(t3), e2.push(cd({ name: t3, displayName: n2.name ?? t3, parseError: n2.error }));
      }
    }
    async function ud(e2) {
      const t2 = e2.logger ?? s, r2 = [];
      for (const n2 of e2.localPlugins) {
        const s2 = e2.manifest.plugins.find((e3) => e3.name === n2.name);
        if (void 0 === s2) continue;
        let o2, i2;
        try {
          o2 = Pa(e2.rootDir, n2.gitPath);
        } catch (e3) {
          t2.log("warn", "loadLocalPluginEntries: plugin path escapes marketplace folder, skipping", { plugin: n2.name, gitPath: n2.gitPath, error: e3 instanceof Error ? e3.message : String(e3) });
          continue;
        }
        try {
          i2 = await Eu(o2, { symlinkTargetRoot: e2.rootDir });
        } catch (e3) {
          t2.log("warn", "loadLocalPluginEntries: failed to load plugin preview, skipping", { plugin: n2.name, error: e3 instanceof Error ? e3.message : String(e3) });
          continue;
        }
        const a2 = ye(i2.manifest, s2), c2 = i2.manifest.description ?? s2.description ?? "";
        r2.push({ name: s2.name, displayName: a2 || s2.name, description: c2, gitPath: n2.gitPath, logoUrl: e2.resolveEntryLogoUrl?.({ manifestLogo: i2.manifest.logo, entry: s2, gitPath: n2.gitPath }), variables: i2.manifest.variables ?? s2.variables, skills: i2.skills, subagents: i2.subagents, hooks: i2.hooks, rules: i2.rules, mcpServers: i2.mcpServers, commands: i2.commands });
      }
      return r2;
    }
    async function dd(e2) {
      const { pluginMetricsLogger: t2 = s, onParsedMarketplace: r2 } = e2, n2 = wa(e2.gitUrl);
      if ("error" in n2) throw new Error(n2.error);
      if (!e2.allowNonGitHubHosts && !ua(n2.host)) throw new Error(`Only github.com repositories are supported for local preview. Host "${n2.host}" is not allowed.`);
      const o2 = `${n2.url}.git`, i2 = e2.gitUrl.trim(), a2 = i2.startsWith("git@") || i2.startsWith("ssh://"), c2 = n2.url.startsWith(`https://${n2.host}/`), l2 = a2 ? i2 : c2 ? n2.url : void 0, u2 = e2.allowNonGitHubHosts && !ua(n2.host) && void 0 !== l2 ? ka(l2) ?? void 0 : void 0, d2 = await nd(o2, e2.gitRef, u2), p2 = `${n2.owner}-${n2.repo}-local`.toLowerCase();
      t2.log("info", "parseGitHubRepoForPluginsLocally: Resolved remote ref", { marketplaceRepo: n2.repo, marketplaceId: p2, resolvedRef: d2, gitRef: e2.gitRef, gitUrl: e2.gitUrl });
      const m2 = new ja(e2.marketplaceCacheRoot, { sparsePluginClones: e2.sparsePluginClones }), h2 = await m2.ensureCloned(p2, o2, d2.cloneRef, t2, { materialize: [] });
      let f2 = d2.commitSha ?? "";
      try {
        if ("" === f2) {
          const { stdout: e3 } = await $i(["rev-parse", "HEAD"], { cwd: h2 });
          f2 = e3.trim();
        }
      } catch {
        f2 = d2.commitSha ?? "";
      }
      let g2 = d2.defaultBranch;
      if ("HEAD" === g2) try {
        const { stdout: e3 } = await $i(["rev-parse", "--abbrev-ref", "HEAD"], { cwd: h2 }), t3 = e3.trim();
        t3 && "HEAD" !== t3 && (g2 = t3);
      } catch {
      }
      const y2 = n2.url, { owner: w2, repo: v2 } = n2, _2 = await m2.readManifest(h2, { repoName: v2 });
      if (null !== _2) {
        const s2 = await m2.discoverPlugins(h2), o3 = s2.filter((e3) => "local" === e3.sourceType), i3 = s2.filter(od);
        o3.length > 0 && await m2.ensureMaterialized(h2, ea(o3.map((e3) => e3.gitPath)), t2);
        const a3 = await ud({ rootDir: h2, manifest: _2, localPlugins: o3, resolveEntryLogoUrl: ({ manifestLogo: e3, entry: t3, gitPath: r3 }) => sd({ pluginLogo: e3, entryLogo: t3.logo, owner: w2, repo: v2, ref: f2 || g2, basePath: r3 }), logger: t2 });
        if (i3.length > 0) {
          const r3 = await (async function(e3, t3, r4, n3) {
            const s3 = /* @__PURE__ */ new Map();
            if (0 === e3.length) return s3;
            const o4 = /* @__PURE__ */ new Map();
            for (const [t4, r5] of e3.entries()) {
              const e4 = r5.sha ?? r5.gitRef ?? "HEAD", n4 = `${r5.gitUrl}\0${e4}`;
              let s4 = o4.get(n4);
              s4 || (s4 = { gitUrl: r5.gitUrl, ref: e4, plugins: [] }, o4.set(n4, s4)), s4.plugins.push({ index: t4, plugin: r5 });
            }
            for (const e4 of o4.values()) {
              const o5 = wa(e4.gitUrl);
              if ("error" in o5) {
                r4.log("warn", "loadExternalPluginsLocally: Rejecting external plugin URL", { gitUrl: e4.gitUrl, reason: o5.error });
                for (const { index: t4 } of e4.plugins) s3.set(t4, id);
                continue;
              }
              if (!ua(o5.host) && o5.host !== n3) {
                r4.log("warn", "loadExternalPluginsLocally: Rejecting non-github.com external plugin URL", { gitUrl: e4.gitUrl, host: o5.host });
                for (const { index: t4 } of e4.plugins) s3.set(t4, id);
                continue;
              }
              const i4 = `${o5.owner}-${o5.repo}-external`.toLowerCase(), a4 = `${o5.url}.git`, c4 = e4.plugins.some(({ plugin: e5 }) => "git-subdir" !== e5.sourceType) ? "all" : ea(e4.plugins.flatMap(({ plugin: e5 }) => "git-subdir" === e5.sourceType ? [e5.subdirPath] : []));
              let l3;
              try {
                l3 = await t3.ensureCloned(i4, a4, e4.ref, r4, { materialize: c4 });
              } catch (t4) {
                r4.log("warn", "loadExternalPluginsLocally: Failed to clone external repo, falling back to metadata only", { gitUrl: e4.gitUrl, gitRef: e4.ref, error: t4 instanceof Error ? t4.message : String(t4) });
                for (const { index: t5 } of e4.plugins) s3.set(t5, id);
                continue;
              }
              for (const { index: n4, plugin: o6 } of e4.plugins) {
                const i5 = "git-subdir" === o6.sourceType ? o6.subdirPath : void 0;
                let a5;
                try {
                  a5 = i5 ? t3.getPluginDir(l3, i5) : l3;
                } catch {
                  s3.set(n4, id);
                  continue;
                }
                try {
                  const e5 = await Eu(a5, { symlinkTargetRoot: l3 }), t4 = ad(e5.manifest.logo, o6, 0, i5);
                  s3.set(n4, { skills: e5.skills, subagents: e5.subagents, hooks: e5.hooks, rules: e5.rules, mcpServers: e5.mcpServers, commands: e5.commands, variables: e5.manifest.variables, logoUrl: t4 });
                } catch (t4) {
                  r4.log("warn", "loadExternalPluginsLocally: Failed to discover external plugin components, falling back to metadata only", { gitUrl: e4.gitUrl, pluginName: o6.name, subdirPath: i5, error: t4 instanceof Error ? t4.message : String(t4) }), s3.set(n4, id);
                }
              }
            }
            return s3;
          })(i3, m2, t2, e2.allowNonGitHubHosts ? n2.host : void 0);
          for (const [e3, t3] of i3.entries()) {
            const n3 = _2.plugins.find((e4) => e4.name === t3.name), s3 = r3.get(e3) ?? id, o4 = "git-subdir" === t3.sourceType ? t3.subdirPath : void 0;
            a3.push({ name: t3.name, displayName: ye({ displayName: t3.displayName }, { name: t3.name }), description: t3.description ?? "", gitPath: o4 ?? "", logoUrl: s3.logoUrl ?? n3?.logo, variables: s3.variables ?? n3?.variables, externalUrl: t3.gitUrl, externalRef: t3.sha ?? t3.gitRef ?? "HEAD", subdirPath: o4, skills: s3.skills, subagents: s3.subagents, hooks: s3.hooks, rules: s3.rules, mcpServers: s3.mcpServers, commands: s3.commands });
          }
        }
        ld(a3, _2.skippedPluginEntries);
        const c3 = { marketplaceName: _2.name, marketplaceDescription: _2.metadata?.description ?? _2.description ?? "", defaultBranch: g2, repositoryUrl: y2, commitSha: f2, plugins: a3 };
        return r2 && r2({ gitUrl: e2.gitUrl, gitRef: e2.gitRef, result: c3 }).catch((e3) => {
          t2.log("warn", "parseGitHubRepoForPluginsLocally: onParsedMarketplace callback failed", { error: e3 instanceof Error ? e3.message : String(e3) });
        }), c3;
      }
      await m2.ensureMaterialized(h2, "all", t2);
      const b2 = await Eu(h2, { symlinkTargetRoot: h2 }), S2 = b2.manifest.name ? su(b2.manifest.name) : su(v2), k2 = ye(b2.manifest, { name: v2 }), x2 = b2.manifest.description ?? "", E2 = sd({ pluginLogo: b2.manifest.logo, owner: w2, repo: v2, ref: f2 || g2 }), I2 = { marketplaceName: S2, marketplaceDescription: x2, defaultBranch: g2, repositoryUrl: y2, commitSha: f2, plugins: [{ name: S2, displayName: k2 || S2, description: x2, gitPath: "", logoUrl: E2, variables: b2.manifest.variables, skills: b2.skills, subagents: b2.subagents, hooks: b2.hooks, rules: b2.rules, mcpServers: b2.mcpServers, commands: b2.commands }] };
      return r2 && r2({ gitUrl: e2.gitUrl, gitRef: e2.gitRef, result: I2 }).catch((e3) => {
        t2.log("warn", "parseGitHubRepoForPluginsLocally: onParsedMarketplace callback failed", { error: e3 instanceof Error ? e3.message : String(e3) });
      }), I2;
    }
    async function pd(e2) {
      const t2 = e2.pluginMetricsLogger ?? s, r2 = (0, I.resolve)(e2.localPath), n2 = await Ga(r2);
      if (null === n2) throw new Error(`No marketplace manifest found in ${r2} (expected .cursor-plugin/marketplace.json or .claude-plugin/marketplace.json)`);
      const { commitSha: o2, defaultBranch: i2 } = await (async function(e3) {
        let t3 = "", r3 = "HEAD";
        try {
          const { stdout: r4 } = await $i(["rev-parse", "HEAD"], { cwd: e3 });
          t3 = r4.trim();
        } catch {
        }
        try {
          const { stdout: t4 } = await $i(["rev-parse", "--abbrev-ref", "HEAD"], { cwd: e3 }), n3 = t4.trim();
          n3 && "HEAD" !== n3 && (r3 = n3);
        } catch {
        }
        return { commitSha: t3, defaultBranch: r3 };
      })(r2), a2 = (0, hc.pathToFileURL)(r2).toString(), c2 = za(n2), l2 = c2.filter((e3) => "local" === e3.sourceType), u2 = await ud({ rootDir: r2, manifest: n2, localPlugins: l2, logger: t2 }), d2 = c2.filter((e3) => "local" !== e3.sourceType), p2 = new Set(u2.map((e3) => e3.name));
      for (const e3 of d2) p2.has(e3.name) || (p2.add(e3.name), u2.push(cd({ name: e3.name, displayName: e3.displayName ?? e3.name, description: e3.description ?? "", parseError: 'External-source plugins are not supported by local indexing yet. Host the plugin inside the marketplace folder (source: "./...").' })));
      return ld(u2, n2.skippedPluginEntries), { marketplaceName: n2.name, marketplaceDescription: n2.metadata?.description ?? n2.description ?? "", defaultBranch: i2, repositoryUrl: a2, commitSha: o2, plugins: u2 };
    }
    var md = r(47859);
    const hd = ["origin.cursor.com"], fd = "x-prefer-origin-reads: true";
    function gd(e2, t2 = []) {
      const r2 = t2.filter((e3) => "" !== e3.trim()), n2 = 0 === r2.length ? hd : [.../* @__PURE__ */ new Set([...hd, ...r2])], s2 = (0, md.a)(n2, e2);
      if (void 0 !== s2) return Object.fromEntries(Object.entries(s2).map(([e3, t3]) => [e3, [t3, fd]]));
    }
    async function yd(e2) {
      const t2 = (0, I.join)(await (0, ve.mkdtemp)((0, I.join)((0, Di.tmpdir)(), "cursor-plugin-artifact-")), "plugin.tgz");
      try {
        const r2 = await (0, ve.readdir)(e2);
        return await wo({ cwd: e2, file: t2, gzip: true, portable: true, filter: (e3, t3) => !t3.isSymbolicLink?.() }, r2), await (0, ve.readFile)(t2);
      } finally {
        await (0, ve.rm)((0, I.dirname)(t2), { recursive: true, force: true }).catch(() => {
        });
      }
    }
    function wd(e2) {
      return _d(e2, (e3) => e3.skills);
    }
    function vd(e2) {
      return _d(e2, (e3) => e3.rules);
    }
    function _d(e2, t2) {
      const r2 = [];
      for (const n2 of e2) {
        const e3 = d(n2.identifier), s2 = `plugin:${e3}`, o2 = p(n2.identifier), i2 = m(n2.identifier), a2 = h(n2.identifier), c2 = f(n2.identifier);
        for (const l2 of t2(n2)) {
          const t3 = (0, I.join)(n2.installPath, l2.path), { type: u2, globs: d2, description: p2 } = bd(l2);
          r2.push({ fullPath: t3, content: l2.content, type: u2, globs: d2, description: p2, pluginIdentifier: e3, gitRemoteOrigin: s2, plugin: o2, marketplace: i2, pluginId: a2, marketplaceId: c2, environments: l2.environments, disabledEnvironments: l2.disabledEnvironments });
        }
      }
      return r2;
    }
    function bd(e2) {
      return e2.alwaysApply ? { type: "global" } : e2.globs && e2.globs.length > 0 ? { type: "fileGlobbed", globs: e2.globs } : e2.description ? { type: "agentFetched", description: e2.description } : { type: "manuallyAttached" };
    }
    function Sd(e2, t2 = { stripModel: true, stripTools: true }) {
      const r2 = [];
      for (const n2 of e2) {
        const e3 = p(n2.identifier), s2 = m(n2.identifier), o2 = h(n2.identifier), i2 = f(n2.identifier);
        for (const a2 of n2.agents) {
          const c2 = Qu(a2, t2), l2 = (0, I.join)(n2.installPath, c2.path);
          r2.push({ name: c2.name, description: c2.description ?? "", prompt: c2.prompt, fullPath: l2, permissionMode: "readonly" === c2.permissionMode ? "readonly" : "default", plugin: e3, marketplace: s2, pluginId: o2, marketplaceId: i2 });
        }
      }
      return r2;
    }
    const kd = n.Ik({ path: n.Yj(), name: n.Yj().optional(), description: n.Yj().optional(), globs: n.YO(n.Yj()).optional(), alwaysApply: n.zM().optional(), content: n.Yj(), environments: n.YO(n.Yj()).optional(), disabledEnvironments: n.YO(n.Yj()).optional() }), xd = kd.extend({ name: n.Yj() }), Ed = n.Ik({ path: n.Yj(), name: n.Yj(), description: n.Yj().optional(), tools: n.YO(n.Yj()).optional(), model: n.Yj().optional(), prompt: n.Yj(), permissionMode: n.k5(["default", "readonly"]).optional() }), Id = n.Ik({ path: n.Yj(), name: n.Yj(), description: n.Yj().optional(), argumentHint: n.Yj().optional(), content: n.Yj() }), Td = n.Ie((e2) => "object" == typeof e2 && null !== e2 && "object" == typeof e2.hooks && null !== e2.hooks), Cd = n.Ik({ config: Td, sourcePath: n.Yj().optional() }), Pd = n.Ie((e2) => "object" == typeof e2 && null !== e2);
    n.Ik({ schemaVersion: n.ai().int(), displayName: n.Yj().optional(), description: n.Yj().optional(), authorName: n.Yj().optional(), skills: n.YO(kd), rules: n.YO(xd), agents: n.YO(Ed), commands: n.YO(Id), mcpConfig: i.extend({ mcpServerSourcePaths: n.g1(n.Yj(), n.Yj()).optional() }).optional(), hooks: Cd.optional(), hooksError: n.Yj().optional(), capabilities: n.YO(n.Yj()), variablesSchema: Pd.optional() });
    Error;
    function Ad(e2) {
      const t2 = e2.trim();
      if (!t2) return false;
      if (t2.startsWith("git@")) {
        return /^git@[a-zA-Z0-9.-]+:[a-zA-Z0-9._~\-/]+(?:\.git)?$/.test(t2);
      }
      try {
        const e3 = new URL(t2);
        return "https:" === e3.protocol && "" === e3.username && "" === e3.password && "" === e3.search && "" === e3.hash;
      } catch {
        return false;
      }
    }
    class Rd extends Error {
      constructor(e2) {
        super(e2), this.name = "SettingsParseError";
      }
    }
    const Md = ".cursor", Jd = "settings.json", Od = { formattingOptions: { tabSize: 2, insertSpaces: true, eol: "\n", insertFinalNewline: true } };
    function Bd(e2) {
      return (0, I.join)(e2, Md, Jd);
    }
    function Dd(e2) {
      return 65279 === e2.charCodeAt(0) ? e2.slice(1) : e2;
    }
    async function qd(e2) {
      try {
        return Dd(await (0, ve.readFile)(Bd(e2), "utf-8"));
      } catch (e3) {
        if ((function(e4) {
          return e4 instanceof Error && "code" in e4;
        })(e3) && ("ENOENT" === e3.code || "ENOTDIR" === e3.code)) return;
        throw e3;
      }
    }
    function Nd(e2) {
      const t2 = Dd(e2);
      if (0 === t2.trim().length) return {};
      const r2 = [], n2 = (0, _e.qg)(t2, r2, { allowTrailingComma: true });
      if (r2.length > 0) {
        const e3 = r2.slice(0, 3).map((e4) => `${(0, _e._n)(e4.error)} at offset ${e4.offset}`).join("; ");
        throw new Rd(`.cursor/settings.json contains syntax errors: ${e3}`);
      }
      if ("object" != typeof n2 || null === n2 || Array.isArray(n2)) return {};
      const s2 = n2;
      return void 0 === s2.plugins || "object" == typeof s2.plugins && null !== s2.plugins && !Array.isArray(s2.plugins) ? s2 : {};
    }
    async function Fd(e2) {
      const t2 = await qd(e2);
      return void 0 === t2 ? {} : Nd(t2);
    }
    async function Ud(e2, t2) {
      const r2 = (0, I.join)(e2, Md);
      await (0, ve.mkdir)(r2, { recursive: true });
      const n2 = t2.endsWith("\n") ? t2 : `${t2}
`;
      await (0, ve.writeFile)(Bd(e2), n2, "utf-8");
    }
    async function Ld(e2, t2) {
      const r2 = await qd(e2), n2 = r2 ?? "{}";
      void 0 !== r2 && Nd(r2);
      const s2 = (0, _e.JP)(n2, ["plugins", t2], { enabled: true }, Od), o2 = (0, _e.ct)(n2, s2);
      await Ud(e2, o2);
    }
    async function $d(e2, t2, r2) {
      if (!Ad(r2.gitUrl)) throw new Error(`Invalid project plugin git URL. Only https:// and git@ URLs are allowed: ${JSON.stringify(r2.gitUrl)}`);
      const n2 = await qd(e2), s2 = n2 ?? "{}";
      void 0 !== n2 && Nd(n2);
      const o2 = { enabled: true, gitUrl: r2.gitUrl, gitRef: r2.gitRef }, i2 = (0, _e.JP)(s2, ["plugins", t2], o2, Od), a2 = (0, _e.ct)(s2, i2);
      await Ud(e2, a2);
    }
    async function jd(e2, t2) {
      const r2 = await qd(e2);
      if (void 0 === r2) return;
      const n2 = Nd(r2);
      if (!n2.plugins || !(t2 in n2.plugins)) return;
      let s2 = (0, _e.JP)(r2, ["plugins", t2], void 0, Od), o2 = (0, _e.ct)(r2, s2);
      const i2 = Nd(o2);
      if (i2.plugins && 0 === Object.keys(i2.plugins).length) {
        s2 = (0, _e.JP)(o2, ["plugins"], void 0, Od), o2 = (0, _e.ct)(o2, s2);
        const e3 = Nd(o2);
        0 === Object.keys(e3).length && /^\{\n\}\n?$/.test(o2) && (o2 = "{}");
      }
      await Ud(e2, o2);
    }
    async function Gd(e2) {
      const t2 = await qd(e2);
      return void 0 === t2 ? [] : (function(e3) {
        const t3 = Nd(e3);
        if (!t3.plugins) return [];
        return Object.entries(t3.plugins).filter(([, e4]) => true === e4.enabled).filter(([, e4]) => !e4.gitUrl || Ad(e4.gitUrl)).map(([e4, t4]) => ({ key: e4, entry: t4 }));
      })(t2);
    }
    async function zd(e2) {
      const t2 = await (0, Ca.PH)(Hd(e2), async (e3) => ({ workspacePath: e3, entries: await Gd(e3) }), { max: 8 }), r2 = /* @__PURE__ */ new Set(), n2 = [];
      for (const { workspacePath: e3, entries: s2 } of t2) for (const { key: t3, entry: o2 } of s2) r2.has(t3) || (r2.add(t3), n2.push({ key: t3, entry: o2, workspacePath: e3 }));
      return n2;
    }
    async function Wd(e2, t2) {
      const r2 = [];
      for (const n2 of Hd(e2)) {
        const e3 = await Fd(n2);
        void 0 !== e3.plugins?.[t2] && (await jd(n2, t2), r2.push(n2));
      }
      return r2;
    }
    function Hd(e2) {
      const t2 = /* @__PURE__ */ new Set(), r2 = [];
      for (const n2 of e2) {
        if (!n2) continue;
        const e3 = (0, I.resolve)(n2);
        t2.has(e3) || (t2.add(e3), r2.push(n2));
      }
      return r2;
    }
    function Kd(e2) {
      const t2 = e2.indexOf("/");
      return -1 === t2 ? { name: e2 } : { name: e2.slice(t2 + 1), marketplaceName: e2.slice(0, t2) };
    }
    async function Vd(e2) {
      const { skillDirs: t2, pluginSkillsRoot: r2, skillsRoot: n2 } = e2;
      if (0 === t2.length) throw new Error("At least one skill directory is required");
      const s2 = t2.map((e3) => {
        const t3 = (0, I.relative)((0, I.resolve)(r2), (0, I.resolve)(e3));
        if ("" === t3 || (0, I.isAbsolute)(t3) || ".." === t3.split(I.sep)[0]) throw new Error(`Skill folder "${e3}" is not inside the plugin's skills directory`);
        return { skillDir: e3, target: (0, I.join)(n2, t3) };
      }), o2 = s2.map(({ target: e3 }) => e3).filter((e3, t3, r3) => r3.indexOf(e3) !== t3);
      if (o2.length > 0) throw new Error(`Multiple skill folders would restore to the same path: ${o2.join(", ")}`);
      for (const { skillDir: e3, target: t3 } of s2) {
        if (!await Yd(e3)) throw new Error(`Skill folder "${e3}" is not a directory`);
        if (await Qd(t3)) throw new Error(`Cannot restore skill to "${t3}": that path already exists`);
      }
      await (0, ve.mkdir)(n2, { recursive: true });
      for (const { skillDir: e3, target: t3 } of s2) await (0, ve.mkdir)((0, I.dirname)(t3), { recursive: true }), await (0, ve.cp)(e3, t3, { recursive: true, force: false, errorOnExist: true });
      return s2.map(({ target: e3 }) => e3);
    }
    async function Yd(e2) {
      try {
        return (await (0, ve.stat)(e2)).isDirectory();
      } catch {
        return false;
      }
    }
    async function Qd(e2) {
      try {
        return await (0, ve.lstat)(e2), true;
      } catch {
        return false;
      }
    }
    async function Xd(e2) {
      const { skills: t2, targetDir: r2, pluginName: n2 } = e2;
      if (0 === t2.length) throw new Error("At least one skill directory is required");
      const s2 = ee(n2);
      if ("" === s2) throw new Error(`Plugin name "${n2}" has no usable characters`);
      const o2 = t2.map(({ dir: e3, relativePath: t3 }) => {
        const r3 = (function(e4) {
          if ((0, I.isAbsolute)(e4)) throw new Error(`Skill path "${e4}" must be relative to the skills root`);
          const t4 = e4.split(/[/\\]/).filter((e5) => e5.length > 0);
          if (0 === t4.length || t4.some((e5) => "." === e5 || ".." === e5)) throw new Error(`Skill path "${e4}" resolves to an unsafe path`);
          return t4;
        })(t3);
        return { dir: e3, segments: r3, manifestPath: `skills/${r3.join("/")}` };
      }), i2 = o2.map(({ manifestPath: e3 }) => e3).filter((e3, t3, r3) => r3.indexOf(e3) !== t3);
      if (i2.length > 0) throw new Error(`Multiple skill folders would pack to the same path: ${i2.join(", ")}`);
      const a2 = (0, I.join)(r2, s2), c2 = (0, I.join)(a2, "skills");
      await (0, ve.mkdir)(c2, { recursive: true });
      for (const { dir: e3, segments: t3 } of o2) {
        const r3 = (0, I.join)(c2, ...t3);
        await (0, ve.mkdir)((0, I.dirname)(r3), { recursive: true }), await (0, ve.cp)(e3, r3, { recursive: true, dereference: true });
      }
      const l2 = { name: s2, displayName: e2.displayName ?? n2, skills: o2.map(({ manifestPath: e3 }) => e3) };
      return await (0, ve.writeFile)((0, I.join)(a2, "plugin.json"), JSON.stringify(l2, null, 2), "utf-8"), a2;
    }
  }