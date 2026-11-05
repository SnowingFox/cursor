// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 768 range:52254..67001
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
768: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { $H: () => Z, WV: () => g, Yl: () => m, _N: () => K, b6: () => q, bi: () => $, si: () => y });
    const n2 = BigInt(0), o2 = BigInt(8), s2 = BigInt(16), i2 = BigInt(65535);
    function a2(e3) {
      const t3 = e3.split(".");
      if (4 !== t3.length) return;
      let r3 = n2;
      for (const e4 of t3) {
        if (!/^\d{1,3}$/.test(e4)) return;
        const t4 = Number(e4);
        if (!Number.isInteger(t4) || t4 < 0 || t4 > 255) return;
        r3 = r3 << o2 | BigInt(t4);
      }
      return { version: 4, value: r3 };
    }
    function c(e3) {
      if (0 === e3.length) return [];
      const t3 = [], r3 = e3.split(":");
      for (let e4 = 0; e4 < r3.length; e4++) {
        const n3 = r3[e4];
        if (0 === n3.length) return;
        if (n3.includes(".")) {
          if (e4 !== r3.length - 1) return;
          const o3 = a2(n3);
          if (!o3) return;
          t3.push(Number(o3.value >> s2 & i2)), t3.push(Number(o3.value & i2));
          continue;
        }
        if (!/^[0-9a-f]{1,4}$/i.test(n3)) return;
        t3.push(Number.parseInt(n3, 16));
      }
      return t3;
    }
    function u(e3) {
      return a2(e3) ?? (function(e4) {
        const t3 = D(e4);
        if (0 === t3.length || t3.includes(":::")) return;
        const r3 = t3.indexOf("::");
        if (-1 === r3) {
          const e5 = c(t3);
          if (!e5 || 8 !== e5.length) return;
          return { version: 6, value: e5.reduce((e6, t4) => e6 << s2 | BigInt(t4), n2) };
        }
        if (-1 !== t3.indexOf("::", r3 + 1)) return;
        const o3 = t3.slice(0, r3), i3 = t3.slice(r3 + 2), a3 = c(o3), u2 = c(i3);
        if (!a3 || !u2) return;
        const l2 = a3.length + u2.length;
        if (l2 > 7) return;
        return { version: 6, value: [...a3, ...new Array(8 - l2).fill(0), ...u2].reduce((e5, t4) => e5 << s2 | BigInt(t4), n2) };
      })(e3);
    }
    const l = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
    function p(e3) {
      const t3 = l.get(e3);
      if (t3) return t3;
      l.size >= R && l.clear();
      const r3 = (function(e4) {
        const t4 = D(e4);
        if ("*" === t4) return { kind: "matchAll" };
        if (t4.includes("/")) {
          const e5 = t4.lastIndexOf("/");
          if (e5 <= 0 || e5 === t4.length - 1) return { kind: "invalidCidr" };
          const r4 = u(t4.slice(0, e5));
          if (!r4) return { kind: "invalidCidr" };
          const n3 = Number(t4.slice(e5 + 1)), o3 = 4 === r4.version ? 32 : 128;
          if (!Number.isInteger(n3) || n3 < 0 || n3 > o3) return { kind: "invalidCidr" };
          const s3 = BigInt(o3 - n3);
          return { kind: "cidr", version: r4.version, shift: s3, shiftedNetwork: r4.value >> s3 };
        }
        return t4.startsWith("*.") ? { kind: "subdomainOrBase", suffix: t4.slice(2) } : { kind: "exact", value: t4 };
      })(e3);
      return l.set(e3, r3), r3;
    }
    function f(e3, t3) {
      switch (t3.kind) {
        case "matchAll":
          return true;
        case "invalidCidr":
          return false;
        case "cidr": {
          const r3 = (function(e4) {
            if (d.has(e4)) return d.get(e4);
            d.size >= R && d.clear();
            const t4 = u(e4);
            return d.set(e4, t4), t4;
          })(e3);
          return void 0 !== r3 && r3.version === t3.version && r3.value >> t3.shift === t3.shiftedNetwork;
        }
        case "subdomainOrBase":
          return e3 === t3.suffix || e3.endsWith(`.${t3.suffix}`);
        case "exact":
          return e3 === t3.value;
      }
    }
    function h(e3, t3) {
      return f(D(e3), p(t3));
    }
    function m(e3) {
      try {
        const t3 = new URL(e3), r3 = new URL(t3.pathname, t3.origin);
        return r3.search = t3.search, r3.pathname.endsWith("/") && r3.pathname.length > 1 && (r3.pathname = r3.pathname.slice(0, -1)), "/" === r3.pathname ? r3.origin + r3.search : r3.toString();
      } catch {
        return e3.toLowerCase().trim();
      }
    }
    function g(e3) {
      return { transportServerUrl: e3, canonicalServerUrl: m(e3) };
    }
    function y(e3) {
      try {
        return new URL(m(e3)).hostname.toLowerCase();
      } catch {
        return;
      }
    }
    /* @__PURE__ */ new Set(["airtable.com", "anysphere.co", "api.aws", "apify.com", "asana.com", "ashbyhq.com", "atlassian.com", "atlassian.net", "azuredatabricks.net", "box.com", "buildkite.com", "calendly.com", "canva.com", "clickhouse.cloud", "clickup.com", "cloudflare.com", "composio.dev", "context7.com", "cursor.com", "cursor.sh", "cursorapi.com", "databricks.com", "datadoghq.com", "datadoghq.eu", "ddog-gov.com", "dropbox.com", "elevenlabs.io", "exa.ai", "figma.com", "firecrawl.dev", "github.com", "githubcopilot.com", "gitlab.com", "google.com", "googleapis.com", "granola.ai", "hex.tech", "hubspot.com", "huggingface.co", "intercom.com", "linear.app", "monday.com", "neon.tech", "notion.com", "plain.com", "posthog.com", "prisma.io", "railway.com", "ramp.com", "render.com", "salesforce.com", "sentry.dev", "sentry.io", "slack.com", "snowflakecomputing.com", "spacelift.io", "statsig.com", "stripe.com", "supabase.com", "todoist.net", "vercel.com", "workos.com", "x.ai", "x.com", "zapier.com"]);
    function _(e3) {
      return /\s/.test(e3);
    }
    const v = "[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?", w = new RegExp(`^(?:${v}\\.)*${v}$`), b = new RegExp(`^\\*\\.(?:${v}\\.)*${v}$`), S = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)", k = new RegExp(`^${S}(?:\\.${S}){3}$`), E = /^[0-9a-f:]+$/, x = new RegExp(`^(?:${S}(?:\\.${S}){3}|[0-9a-f:]+)\\/\\d{1,3}$`);
    function T(e3) {
      const t3 = D(e3);
      return t3.length > 0 && t3.length <= 253 && w.test(t3);
    }
    function O(e3) {
      const t3 = D(e3);
      return k.test(t3) || (function(e4) {
        const t4 = D(e4);
        if (!E.test(t4)) return false;
        try {
          return new URL(`https://[${t4}]`), true;
        } catch {
          return false;
        }
      })(t3);
    }
    function P(e3, t3) {
      return "" === t3 || "http:" === e3 && "80" === t3 || "https:" === e3 && "443" === t3;
    }
    function I(e3) {
      try {
        const t3 = new URL(e3);
        return ("http:" === t3.protocol || "https:" === t3.protocol) && (!(0 === t3.hostname.length || t3.username.length > 0 || t3.password.length > 0) && ("" === t3.hash && (function(e4) {
          const t4 = e4.toLowerCase();
          return !t4.includes("*") && (T(t4) || O(t4));
        })(t3.hostname)));
      } catch {
        return false;
      }
    }
    function C(e3) {
      const t3 = new URL(e3.pathname || "/", e3.origin);
      if (t3.search = e3.search, t3.pathname.endsWith("/") && t3.pathname.length > 1 && (t3.pathname = t3.pathname.slice(0, -1)), "/" === t3.pathname && "" === t3.search) {
        const t4 = e3.protocol.toLowerCase();
        let r4 = `${t4}//${e3.hostname.toLowerCase()}`;
        return P(t4, e3.port) || (r4 += `:${e3.port}`), r4;
      }
      const r3 = e3.protocol.toLowerCase();
      let n3 = `${r3}//${e3.hostname.toLowerCase()}`;
      return P(r3, e3.port) || (n3 += `:${e3.port}`), `${n3}${t3.pathname}${t3.search}`;
    }
    function A(e3) {
      if (e3.includes("://")) return I(e3);
      const t3 = D(e3);
      return "*" === t3 || (!!b.test(t3) || (t3.includes("/") ? (function(e4) {
        const t4 = D(e4);
        if (!x.test(t4)) return false;
        const [r3] = t4.split("/");
        return void 0 !== r3 && h(r3, t4);
      })(t3) : T(t3) || O(t3)));
    }
    function $(e3) {
      if (N.has(e3)) return N.get(e3);
      N.size >= R && N.clear();
      const t3 = (function(e4) {
        const t4 = e4.trim();
        if (0 === t4.length) return;
        const r3 = t4.lastIndexOf("/");
        if (!t4.includes("://") && r3 > 0 && /^\d+$/.test(t4.slice(r3 + 1).trim())) {
          const e5 = `${D(t4.slice(0, r3))}/${t4.slice(r3 + 1).trim()}`;
          return A(e5) ? e5 : void 0;
        }
        if (_(t4) || t4.includes("#") || t4.includes("@")) return;
        const n3 = t4.indexOf("://");
        if (-1 !== n3) {
          const e5 = t4.slice(0, n3).toLowerCase();
          if ("http" !== e5 && "https" !== e5) return;
          try {
            const e6 = new URL(t4);
            if (0 === e6.hostname.length || e6.username.length > 0 || e6.password.length > 0) return;
            const r4 = "/" !== e6.pathname && "" !== e6.pathname, n4 = "" !== e6.search;
            if (e6.hostname.includes("*")) return;
            if (r4 || n4) {
              const t5 = C(e6);
              if (!A(t5)) return;
              return t5;
            }
            {
              const t5 = C(e6);
              if (!A(t5)) return;
              return t5;
            }
          } catch {
            return;
          }
        } else if (t4.includes("/")) return;
        const o3 = t4.trim().toLowerCase(), s3 = (function(e5) {
          const t5 = e5.indexOf(":");
          if (-1 === t5) return e5;
          const r4 = e5.slice(t5 + 1);
          return /^\d+$/.test(r4) ? e5.slice(0, t5) : e5;
        })(o3);
        if (0 === s3.length || !A(s3)) return;
        if (s3 !== o3 && "*" === s3) return;
        return s3;
      })(e3);
      return N.set(e3, t3), t3;
    }
    const R = 2048, N = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map();
    function J(e3, t3) {
      if (!e3.includes("*")) return e3 === t3;
      const r3 = e3.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
      return new RegExp(`^${r3}$`).test(t3);
    }
    function j(e3) {
      return (e3 ?? []).flatMap((e4) => {
        const t3 = $(e4);
        return void 0 === t3 ? [] : [t3];
      });
    }
    function D(e3) {
      const t3 = e3.trim().toLowerCase();
      return t3.startsWith("[") && t3.endsWith("]") ? t3.slice(1, -1) : t3;
    }
    function F(e3) {
      const t3 = e3.trim();
      if (0 === t3.length) return;
      const r3 = t3.includes("://") ? t3 : `https://${t3}`;
      try {
        return new URL(r3);
      } catch {
        return;
      }
    }
    function q(e3) {
      return j(e3.mcpNetworkAllowlist);
    }
    function z(e3) {
      const t3 = e3?.trim();
      return t3 && t3.length > 0 ? t3 : void 0;
    }
    function U(e3) {
      if (true !== e3?.allowUserOverrideMcpServers) return;
      const t3 = (e3.deniedMcpServers ?? []).flatMap((e4) => {
        const t4 = z(e4.serverUrl), r3 = void 0 === t4 ? void 0 : (function(e5) {
          const t5 = e5.trim();
          if (0 === t5.length) return;
          if ((function(e6) {
            const t6 = e6.indexOf("://");
            if (-1 === t6) return false;
            const r5 = e6.slice(t6 + 3), n4 = r5.indexOf("/");
            return -1 === n4 ? r5.includes("?") : r5.slice(n4).includes("*");
          })(t5)) {
            const e6 = t5.indexOf("://");
            if (-1 !== e6) {
              const r5 = t5.slice(e6 + 3).split(/[/?#]/, 1)[0];
              if (r5?.includes("*")) {
                const e7 = $(r5.replace(/:\d+$/, ""));
                if (void 0 !== e7) return e7;
              }
            }
            return;
          }
          if (!t5.includes("://") && t5.includes("*") && "*" !== t5 && !t5.startsWith("*.")) return;
          const r4 = $(e5);
          if (void 0 !== r4) return r4;
          const n3 = e5.indexOf("://");
          if (-1 === n3) return;
          const o3 = e5.slice(0, n3).toLowerCase();
          if ("http" !== o3 && "https" !== o3) return;
          const s3 = e5.slice(n3 + 3).split(/[/?#]/, 1)[0];
          if (void 0 === s3 || s3.includes("@")) return;
          const i3 = $(s3.replace(/:\d+$/, ""));
          if (void 0 !== i3) return i3;
          try {
            return $(new URL(e5).hostname);
          } catch {
            return;
          }
        })(t4);
        return void 0 === r3 ? [] : [r3];
      });
      return t3.length > 0 ? t3 : void 0;
    }
    function B(e3) {
      return z(e3)?.toLowerCase();
    }
    function L(e3, t3) {
      const r3 = B(e3.builtinServer), n3 = B(t3.builtinServer);
      if (void 0 !== r3 || void 0 !== n3) return void 0 !== r3 && r3 === n3;
      const o3 = z(e3.command), s3 = z(e3.serverUrl);
      if (void 0 === o3 && void 0 === s3) return false;
      const i3 = void 0 === o3 || void 0 !== t3.command && J(o3, t3.command), a3 = void 0 === s3 || void 0 !== t3.url && (function(e4, t4) {
        if (J(e4, t4)) return true;
        let r4;
        return M.has(t4) ? r4 = M.get(t4) : (M.size >= R && M.clear(), r4 = F(t4), M.set(t4, r4)), !!r4 && h(r4.hostname, e4);
      })(s3, t3.url);
      return i3 && a3;
    }
    function V(e3, t3, r3) {
      return void 0 !== r3?.command && void 0 === r3.url && void 0 === t3 && true === e3?.allowUserOverrideMcpServers;
    }
    function K({ allowedMcpConfiguration: e3, server: t3, localAgentNetworkAllowlist: r3, blockMessage: n3, unmatchedServerAllowlist: o3, aggregateManagedServerNetworkAllowlists: s3 = true, stdioPlatform: i3, unsandboxUserExtensionStdio: a3 }) {
      const c2 = e3?.allowedMcpServers, u2 = U(e3), l2 = void 0 === t3 ? void 0 : (function(e4, t4) {
        return e4?.find((e5) => L(e5, t4));
      })(c2, t3), d2 = V(e3, l2, t3), p2 = (function({ allowedMcpConfiguration: e4, matchedServer: t4, server: r4 }) {
        return void 0 === r4 ? (e4?.allowedMcpServers?.length ?? 0) > 0 : void 0 !== t4 || V(e4, t4, r4);
      })({ allowedMcpConfiguration: e3, matchedServer: l2, server: t3 }) || void 0 === t3 && void 0 !== u2, f2 = void 0 === t3 ? s3 ? c2?.flatMap((e4) => e4.networkAllowlist ?? []) : void 0 : d2 ? [] : (function(e4, t4, r4) {
        return void 0 === e4 ? r4 : [...e4.networkAllowlist ?? [], ...void 0 !== z(e4.serverUrl) && void 0 !== t4.url ? [t4.url] : []];
      })(l2, t3, o3), h2 = d2 && "win32" === i3 && true === a3;
      let m2;
      m2 = void 0 === t3 ? void 0 : h2 ? "no_sandbox" : d2 ? "allow_all" : (function(e4, t4) {
        var r4;
        if (void 0 !== z(e4?.command) && void 0 !== t4.command && void 0 === t4.url) return r4 = e4?.networkMode, ("allow_all" === r4 || "allowlist" === r4 || "deny_all" === r4 || "no_sandbox" === r4 ? r4 : void 0) ?? "no_sandbox";
      })(l2, t3);
      const g2 = void 0 === t3 || d2 ? u2 : void 0;
      return { enabled: p2, mcpNetworkAllowlist: f2, ...void 0 !== m2 ? { mcpNetworkMode: m2 } : {}, ...void 0 !== g2 ? { mcpNetworkDenylist: g2 } : {}, ...void 0 !== r3 ? { localAgentNetworkAllowlist: r3 } : {}, ...void 0 !== n3 ? { blockMessage: n3 } : {}, ...h2 ? { win32UserExtensionUnsandbox: true } : {} };
    }
    function Z(e3) {
      if (true === e3?.enabled && "no_sandbox" !== e3.mcpNetworkMode) return e3;
    }
  }