(() => {
  "use strict";
  var t = {};
  const e = require("fs/promises"), a = require("path");
  async function r(t2) {
    const s2 = [];
    try {
      const n2 = await e.readdir(t2, { withFileTypes: true });
      for (const e2 of n2) {
        const n3 = a.join(t2, e2.name);
        if (e2.isDirectory()) {
          const t3 = await r(n3);
          s2.push(...t3);
        } else s2.push(n3);
      }
    } catch {
    }
    return s2;
  }
  async function s(t2) {
    try {
      const r2 = a.join(t2, ".git", "HEAD"), s2 = await e.readFile(r2, "utf-8");
      if (s2.startsWith("ref: ")) {
        const r3 = s2.slice(5).trim(), n2 = a.join(t2, ".git", r3);
        return (await e.readFile(n2, "utf-8")).trim();
      }
      return s2.trim();
    } catch {
      return null;
    }
  }
  async function n(t2) {
    try {
      const r2 = a.join(t2, ".git", "HEAD"), s2 = await e.readFile(r2, "utf-8");
      if (s2.startsWith("ref: ")) {
        return s2.slice(5).trim().replace("refs/heads/", "");
      }
      return null;
    } catch {
      return null;
    }
  }
  async function i(t2) {
    try {
      const e2 = a.join(t2, ".git", "refs", "heads");
      return (await r(e2)).map((t3) => t3.replace(e2 + a.sep, ""));
    } catch {
      return [];
    }
  }
  async function c(t2) {
    try {
      const e2 = a.join(t2, ".git", "refs", "tags");
      return (await r(e2)).map((t3) => t3.replace(e2 + a.sep, ""));
    } catch {
      return [];
    }
  }
  async function o(t2) {
    try {
      const s2 = a.join(t2, ".git", "refs", "remotes"), n2 = await r(s2), i2 = [];
      for (const t3 of n2) {
        const r2 = await e.readFile(t3, "utf-8"), n3 = t3.replace(s2 + a.sep, "");
        i2.push([n3, r2.trim()]);
      }
      return i2;
    } catch {
      return [];
    }
  }
  async function u(t2) {
    try {
      const r2 = a.join(t2, ".git", "refs", "remotes", "origin", "HEAD");
      try {
        const t3 = await e.readFile(r2, "utf-8");
        if (t3.startsWith("ref: ")) {
          return t3.slice(5).trim().replace("refs/remotes/origin/", "");
        }
      } catch {
      }
      const s2 = a.join(t2, ".git", "config"), n2 = (await e.readFile(s2, "utf-8")).match(/\[init\]\s*\n\s*defaultBranch\s*=\s*(.+)/);
      if (n2) return n2[1].trim();
      const c2 = await i(t2);
      return c2.includes("main") ? "main" : c2.includes("master") ? "master" : null;
    } catch {
      return null;
    }
  }
  async function l(t2) {
    try {
      const r2 = a.join(t2, ".git", "FETCH_HEAD");
      return (await e.readFile(r2, "utf-8")).split("\n")[0];
    } catch {
      return null;
    }
  }
  async function f(t2) {
    try {
      const r2 = a.join(t2, ".git", "refs", "stash");
      return (await e.readFile(r2, "utf-8")).trim();
    } catch {
      return null;
    }
  }
  async function h(t2) {
    try {
      return await e.stat(t2), true;
    } catch {
      return false;
    }
  }
  async function w(t2) {
    try {
      let r2;
      switch (t2.type) {
        case "getRepoState":
          r2 = await (async function(t3) {
            const [e2, a2, r3, h2, w2, p2, g2, m] = await Promise.all([s(t3), n(t3), u(t3), i(t3), c(t3), o(t3), l(t3), f(t3)]);
            return { commitHash: e2, currentBranch: a2, defaultBranch: r3, branches: h2, tags: w2, remoteRefs: p2, fetchHead: g2, stashHash: m };
          })(t2.workspacePath);
          break;
        case "getBranches":
          r2 = await i(t2.workspacePath);
          break;
        case "getTags":
          r2 = await c(t2.workspacePath);
          break;
        case "getRemoteRefs":
          r2 = await o(t2.workspacePath);
          break;
        case "getCurrentCommitHash":
          r2 = await s(t2.workspacePath);
          break;
        case "getCurrentBranch":
          r2 = await n(t2.workspacePath);
          break;
        case "getDefaultBranch":
          r2 = await u(t2.workspacePath);
          break;
        case "getFetchHead":
          r2 = await l(t2.workspacePath);
          break;
        case "getStashHash":
          r2 = await f(t2.workspacePath);
          break;
        case "isRebasing":
          r2 = await (async function(t3) {
            const e2 = a.join(t3, ".git", "rebase-merge"), r3 = a.join(t3, ".git", "rebase-apply"), [s2, n2] = await Promise.all([h(e2), h(r3)]);
            return s2 || n2;
          })(t2.workspacePath);
          break;
        case "fileExists":
          r2 = await h(t2.args?.filePath);
          break;
        case "getRemoteUrl":
          r2 = await (async function(t3, r3 = "origin") {
            try {
              const s2 = a.join(t3, ".git", "config"), n2 = await e.readFile(s2, "utf-8"), i2 = `[remote "${r3}"]`, c2 = n2.indexOf(i2);
              if (-1 === c2) return null;
              const o2 = n2.slice(c2).match(/\s*url\s*=\s*(.+)$/m);
              return o2 && o2[1] ? o2[1].trim() : null;
            } catch {
              return null;
            }
          })(t2.workspacePath, t2.args?.remoteName);
          break;
        default: {
          const e2 = t2.type;
          throw new Error(`Unknown request type: ${e2}`);
        }
      }
      return { id: t2.id, success: true, result: r2 };
    } catch (e2) {
      return { id: t2.id, success: false, error: e2 instanceof Error ? e2.message : String(e2) };
    }
  }
  process.on("message", async (t2) => {
    const e2 = await w(t2);
    process.send?.(e2);
  }), process.send?.({ type: "ready" });
  var p = exports;
  for (var g in t) p[g] = t[g];
  t.__esModule && Object.defineProperty(p, "__esModule", { value: true });
})();
