// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 50768 range:3785337..3802058
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
50768: (e, t, r) => {
    "use strict";
    r.d(t, { $H: () => X, ME: () => z, _N: () => Q, b6: () => G, bi: () => A, mD: () => O, vc: () => F });
    const n = BigInt(0), s = BigInt(8), o = BigInt(16), i = BigInt(65535);
    function a(e2) {
      const t2 = e2.split(".");
      if (4 !== t2.length) return;
      let r2 = n;
      for (const e3 of t2) {
        if (!/^\d{1,3}$/.test(e3)) return;
        const t3 = Number(e3);
        if (!Number.isInteger(t3) || t3 < 0 || t3 > 255) return;
        r2 = r2 << s | BigInt(t3);
      }
      return { version: 4, value: r2 };
    }
    function c(e2) {
      if (0 === e2.length) return [];
      const t2 = [], r2 = e2.split(":");
      for (let e3 = 0; e3 < r2.length; e3++) {
        const n2 = r2[e3];
        if (0 === n2.length) return;
        if (n2.includes(".")) {
          if (e3 !== r2.length - 1) return;
          const s2 = a(n2);
          if (!s2) return;
          t2.push(Number(s2.value >> o & i)), t2.push(Number(s2.value & i));
          continue;
        }
        if (!/^[0-9a-f]{1,4}$/i.test(n2)) return;
        t2.push(Number.parseInt(n2, 16));
      }
      return t2;
    }
    function l(e2) {
      return a(e2) ?? (function(e3) {
        const t2 = $(e3);
        if (0 === t2.length || t2.includes(":::")) return;
        const r2 = t2.indexOf("::");
        if (-1 === r2) {
          const e4 = c(t2);
          if (!e4 || 8 !== e4.length) return;
          return { version: 6, value: e4.reduce((e5, t3) => e5 << o | BigInt(t3), n) };
        }
        if (-1 !== t2.indexOf("::", r2 + 1)) return;
        const s2 = t2.slice(0, r2), i2 = t2.slice(r2 + 2), a2 = c(s2), l2 = c(i2);
        if (!a2 || !l2) return;
        const u2 = a2.length + l2.length;
        if (u2 > 7) return;
        return { version: 6, value: [...a2, ...new Array(8 - u2).fill(0), ...l2].reduce((e4, t3) => e4 << o | BigInt(t3), n) };
      })(e2);
    }
    const u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
    function p(e2) {
      const t2 = u.get(e2);
      if (t2) return t2;
      u.size >= R && u.clear();
      const r2 = (function(e3) {
        const t3 = $(e3);
        if ("*" === t3) return { kind: "matchAll" };
        if (t3.includes("/")) {
          const e4 = t3.lastIndexOf("/");
          if (e4 <= 0 || e4 === t3.length - 1) return { kind: "invalidCidr" };
          const r3 = l(t3.slice(0, e4));
          if (!r3) return { kind: "invalidCidr" };
          const n2 = Number(t3.slice(e4 + 1)), s2 = 4 === r3.version ? 32 : 128;
          if (!Number.isInteger(n2) || n2 < 0 || n2 > s2) return { kind: "invalidCidr" };
          const o2 = BigInt(s2 - n2);
          return { kind: "cidr", version: r3.version, shift: o2, shiftedNetwork: r3.value >> o2 };
        }
        return t3.startsWith("*.") ? { kind: "subdomainOrBase", suffix: t3.slice(2) } : { kind: "exact", value: t3 };
      })(e2);
      return u.set(e2, r2), r2;
    }
    function m(e2, t2) {
      switch (t2.kind) {
        case "matchAll":
          return true;
        case "invalidCidr":
          return false;
        case "cidr": {
          const r2 = (function(e3) {
            if (d.has(e3)) return d.get(e3);
            d.size >= R && d.clear();
            const t3 = l(e3);
            return d.set(e3, t3), t3;
          })(e2);
          return void 0 !== r2 && r2.version === t2.version && r2.value >> t2.shift === t2.shiftedNetwork;
        }
        case "subdomainOrBase":
          return e2 === t2.suffix || e2.endsWith(`.${t2.suffix}`);
        case "exact":
          return e2 === t2.value;
      }
    }
    function h(e2, t2) {
      return m($(e2), p(t2));
    }
    /* @__PURE__ */ new Set(["airtable.com", "anysphere.co", "api.aws", "apify.com", "asana.com", "ashbyhq.com", "atlassian.com", "atlassian.net", "azuredatabricks.net", "box.com", "buildkite.com", "calendly.com", "canva.com", "clickhouse.cloud", "clickup.com", "cloudflare.com", "composio.dev", "context7.com", "cursor.com", "cursor.sh", "cursorapi.com", "databricks.com", "datadoghq.com", "datadoghq.eu", "ddog-gov.com", "dropbox.com", "elevenlabs.io", "exa.ai", "figma.com", "firecrawl.dev", "github.com", "githubcopilot.com", "gitlab.com", "google.com", "googleapis.com", "granola.ai", "hex.tech", "hubspot.com", "huggingface.co", "intercom.com", "linear.app", "monday.com", "neon.tech", "notion.com", "plain.com", "posthog.com", "prisma.io", "railway.com", "ramp.com", "render.com", "salesforce.com", "sentry.dev", "sentry.io", "slack.com", "snowflakecomputing.com", "spacelift.io", "statsig.com", "stripe.com", "supabase.com", "todoist.net", "vercel.com", "workos.com", "x.ai", "x.com", "zapier.com"]);
    const f = "Blocked by MCP Network Admin Server Controls";
    function g(e2) {
      return /\s/.test(e2);
    }
    const y = "[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?", w = new RegExp(`^(?:${y}\\.)*${y}$`), v = new RegExp(`^\\*\\.(?:${y}\\.)*${y}$`), _ = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)", b = new RegExp(`^${_}(?:\\.${_}){3}$`), S = /^[0-9a-f:]+$/, k = new RegExp(`^(?:${_}(?:\\.${_}){3}|[0-9a-f:]+)\\/\\d{1,3}$`);
    function x(e2) {
      const t2 = $(e2);
      return t2.length > 0 && t2.length <= 253 && w.test(t2);
    }
    function E(e2) {
      const t2 = $(e2);
      return b.test(t2) || (function(e3) {
        const t3 = $(e3);
        if (!S.test(t3)) return false;
        try {
          return new URL(`https://[${t3}]`), true;
        } catch {
          return false;
        }
      })(t2);
    }
    function I(e2, t2) {
      return "" === t2 || "http:" === e2 && "80" === t2 || "https:" === e2 && "443" === t2;
    }
    function T(e2) {
      try {
        const t2 = new URL(e2);
        return ("http:" === t2.protocol || "https:" === t2.protocol) && (!(0 === t2.hostname.length || t2.username.length > 0 || t2.password.length > 0) && ("" === t2.hash && (function(e3) {
          const t3 = e3.toLowerCase();
          return !t3.includes("*") && (x(t3) || E(t3));
        })(t2.hostname)));
      } catch {
        return false;
      }
    }
    function C(e2) {
      const t2 = new URL(e2.pathname || "/", e2.origin);
      if (t2.search = e2.search, t2.pathname.endsWith("/") && t2.pathname.length > 1 && (t2.pathname = t2.pathname.slice(0, -1)), "/" === t2.pathname && "" === t2.search) {
        const t3 = e2.protocol.toLowerCase();
        let r3 = `${t3}//${e2.hostname.toLowerCase()}`;
        return I(t3, e2.port) || (r3 += `:${e2.port}`), r3;
      }
      const r2 = e2.protocol.toLowerCase();
      let n2 = `${r2}//${e2.hostname.toLowerCase()}`;
      return I(r2, e2.port) || (n2 += `:${e2.port}`), `${n2}${t2.pathname}${t2.search}`;
    }
    function P(e2) {
      if (e2.includes("://")) return T(e2);
      const t2 = $(e2);
      return "*" === t2 || (!!v.test(t2) || (t2.includes("/") ? (function(e3) {
        const t3 = $(e3);
        if (!k.test(t3)) return false;
        const [r2] = t3.split("/");
        return void 0 !== r2 && h(r2, t3);
      })(t2) : x(t2) || E(t2)));
    }
    function A(e2) {
      if (M.has(e2)) return M.get(e2);
      M.size >= R && M.clear();
      const t2 = (function(e3) {
        const t3 = e3.trim();
        if (0 === t3.length) return;
        const r2 = t3.lastIndexOf("/");
        if (!t3.includes("://") && r2 > 0 && /^\d+$/.test(t3.slice(r2 + 1).trim())) {
          const e4 = `${$(t3.slice(0, r2))}/${t3.slice(r2 + 1).trim()}`;
          return P(e4) ? e4 : void 0;
        }
        if (g(t3) || t3.includes("#") || t3.includes("@")) return;
        const n2 = t3.indexOf("://");
        if (-1 !== n2) {
          const e4 = t3.slice(0, n2).toLowerCase();
          if ("http" !== e4 && "https" !== e4) return;
          try {
            const e5 = new URL(t3);
            if (0 === e5.hostname.length || e5.username.length > 0 || e5.password.length > 0) return;
            const r3 = "/" !== e5.pathname && "" !== e5.pathname, n3 = "" !== e5.search;
            if (e5.hostname.includes("*")) return;
            if (r3 || n3) {
              const t4 = C(e5);
              if (!P(t4)) return;
              return t4;
            }
            {
              const t4 = C(e5);
              if (!P(t4)) return;
              return t4;
            }
          } catch {
            return;
          }
        } else if (t3.includes("/")) return;
        const s2 = t3.trim().toLowerCase(), o2 = (function(e4) {
          const t4 = e4.indexOf(":");
          if (-1 === t4) return e4;
          const r3 = e4.slice(t4 + 1);
          return /^\d+$/.test(r3) ? e4.slice(0, t4) : e4;
        })(s2);
        if (0 === o2.length || !P(o2)) return;
        if (o2 !== s2 && "*" === o2) return;
        return o2;
      })(e2);
      return M.set(e2, t2), t2;
    }
    const R = 2048, M = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map();
    function O(e2, t2) {
      if (!e2.includes("*")) return e2 === t2;
      const r2 = e2.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
      return new RegExp(`^${r2}$`).test(t2);
    }
    function B(e2) {
      return e2.endsWith("/") && e2.length > 1 ? e2.slice(0, -1) : e2;
    }
    function D(e2, t2, r2) {
      const n2 = N(t2);
      if (!n2) return false;
      let s2;
      try {
        s2 = new URL(e2);
      } catch {
        return false;
      }
      return "" === s2.username && "" === s2.password && "" === n2.username && "" === n2.password && s2.protocol === n2.protocol && s2.port === n2.port && (o2 = s2.hostname, i2 = n2.hostname, !o2.includes("*") && $(o2) === $(i2) && (a2 = s2.pathname, c2 = n2.pathname, (O(a2, c2) || O(B(a2), B(c2))) && (function(e3, t3, r3) {
        return "" === e3 ? r3.allowRequestQueryWhenPatternOmitsQuery || "" === t3 : O(e3, t3);
      })(s2.search, n2.search, r2)));
      var o2, i2, a2, c2;
    }
    function q(e2, t2) {
      return D(e2, t2, { allowRequestQueryWhenPatternOmitsQuery: true });
    }
    function N(e2) {
      const t2 = e2.trim();
      if (0 === t2.length || g(t2)) return;
      if ((function(e3) {
        const t3 = e3.indexOf("[");
        return -1 !== t3 && -1 === e3.indexOf("]", t3);
      })(t2)) return;
      const r2 = j(t2);
      if (r2 && ("http:" === r2.protocol || "https:" === r2.protocol) && "" === r2.username && "" === r2.password && 0 !== r2.hostname.length && (!$(r2.hostname).includes(":") || t2.includes("["))) {
        if (t2.includes("[")) {
          const e3 = t2.indexOf("["), n2 = t2.indexOf("]", e3);
          if (-1 === n2) return;
          const s2 = t2.slice(e3 + 1, n2);
          if ($(r2.hostname) !== $(s2)) return;
        }
        return r2;
      }
    }
    function F(e2, t2) {
      if (O(e2, t2)) return true;
      let r2;
      return J.has(t2) ? r2 = J.get(t2) : (J.size >= R && J.clear(), r2 = j(t2), J.set(t2, r2)), !!r2 && h(r2.hostname, e2);
    }
    function U(e2, t2) {
      const r2 = N(t2);
      if (!r2) return false;
      if (!e2.includes("://")) return h($(r2.hostname), e2);
      if (q(e2, t2)) return true;
      const n2 = (function(e3) {
        try {
          const t3 = new URL(e3);
          if ("" !== t3.username || "" !== t3.password || "/" !== t3.pathname || "" !== t3.search || "" !== t3.hash) return;
          return `${t3.protocol}//${t3.host}/*`;
        } catch {
          return;
        }
      })(e2);
      return void 0 !== n2 && q(n2, t2);
    }
    function L(e2) {
      return (e2 ?? []).flatMap((e3) => {
        const t2 = A(e3);
        return void 0 === t2 ? [] : [t2];
      });
    }
    function $(e2) {
      const t2 = e2.trim().toLowerCase();
      return t2.startsWith("[") && t2.endsWith("]") ? t2.slice(1, -1) : t2;
    }
    function j(e2) {
      const t2 = e2.trim();
      if (0 === t2.length) return;
      const r2 = t2.includes("://") ? t2 : `https://${t2}`;
      try {
        return new URL(r2);
      } catch {
        return;
      }
    }
    function G(e2) {
      return L(e2.mcpNetworkAllowlist);
    }
    function z(e2, t2) {
      if (true !== t2.enabled) return { allowed: true };
      if ("no_sandbox" === t2.mcpNetworkMode) return { allowed: true };
      if (!N(e2)) return { allowed: false, message: t2.blockMessage ?? f };
      const r2 = G(t2);
      return r2.length > 0 && r2.some((t3) => U(t3, e2)) ? { allowed: true } : { allowed: false, message: t2.blockMessage ?? f };
    }
    function W(e2) {
      const t2 = e2?.trim();
      return t2 && t2.length > 0 ? t2 : void 0;
    }
    function H(e2) {
      if (true !== e2?.allowUserOverrideMcpServers) return;
      const t2 = (e2.deniedMcpServers ?? []).flatMap((e3) => {
        const t3 = W(e3.serverUrl), r2 = void 0 === t3 ? void 0 : (function(e4) {
          const t4 = e4.trim();
          if (0 === t4.length) return;
          if ((function(e5) {
            const t5 = e5.indexOf("://");
            if (-1 === t5) return false;
            const r4 = e5.slice(t5 + 3), n3 = r4.indexOf("/");
            return -1 === n3 ? r4.includes("?") : r4.slice(n3).includes("*");
          })(t4)) {
            const e5 = t4.indexOf("://");
            if (-1 !== e5) {
              const r4 = t4.slice(e5 + 3).split(/[/?#]/, 1)[0];
              if (r4?.includes("*")) {
                const e6 = A(r4.replace(/:\d+$/, ""));
                if (void 0 !== e6) return e6;
              }
            }
            return;
          }
          if (!t4.includes("://") && t4.includes("*") && "*" !== t4 && !t4.startsWith("*.")) return;
          const r3 = A(e4);
          if (void 0 !== r3) return r3;
          const n2 = e4.indexOf("://");
          if (-1 === n2) return;
          const s2 = e4.slice(0, n2).toLowerCase();
          if ("http" !== s2 && "https" !== s2) return;
          const o2 = e4.slice(n2 + 3).split(/[/?#]/, 1)[0];
          if (void 0 === o2 || o2.includes("@")) return;
          const i2 = A(o2.replace(/:\d+$/, ""));
          if (void 0 !== i2) return i2;
          try {
            return A(new URL(e4).hostname);
          } catch {
            return;
          }
        })(t3);
        return void 0 === r2 ? [] : [r2];
      });
      return t2.length > 0 ? t2 : void 0;
    }
    function K(e2) {
      return W(e2)?.toLowerCase();
    }
    function V(e2, t2) {
      return e2?.find((e3) => (function(e4, t3) {
        const r2 = K(e4.builtinServer), n2 = K(t3.builtinServer);
        if (void 0 !== r2 || void 0 !== n2) return void 0 !== r2 && r2 === n2;
        const s2 = W(e4.command), o2 = W(e4.serverUrl);
        if (void 0 === s2 && void 0 === o2) return false;
        const i2 = void 0 === s2 || void 0 !== t3.command && O(s2, t3.command), a2 = void 0 === o2 || void 0 !== t3.url && F(o2, t3.url);
        return i2 && a2;
      })(e3, t2));
    }
    function Y(e2, t2, r2) {
      return void 0 !== r2?.command && void 0 === r2.url && void 0 === t2 && true === e2?.allowUserOverrideMcpServers;
    }
    function Q({ allowedMcpConfiguration: e2, server: t2, localAgentNetworkAllowlist: r2, blockMessage: n2, unmatchedServerAllowlist: s2, aggregateManagedServerNetworkAllowlists: o2 = true, stdioPlatform: i2, unsandboxUserExtensionStdio: a2 }) {
      const c2 = e2?.allowedMcpServers, l2 = H(e2), u2 = void 0 === t2 ? void 0 : V(c2, t2), d2 = Y(e2, u2, t2), p2 = (function({ allowedMcpConfiguration: e3, matchedServer: t3, server: r3 }) {
        return void 0 === r3 ? (e3?.allowedMcpServers?.length ?? 0) > 0 : void 0 !== t3 || Y(e3, t3, r3);
      })({ allowedMcpConfiguration: e2, matchedServer: u2, server: t2 }) || void 0 === t2 && void 0 !== l2, m2 = void 0 === t2 ? o2 ? c2?.flatMap((e3) => e3.networkAllowlist ?? []) : void 0 : d2 ? [] : (function(e3, t3, r3) {
        return void 0 === e3 ? r3 : [...e3.networkAllowlist ?? [], ...void 0 !== W(e3.serverUrl) && void 0 !== t3.url ? [t3.url] : []];
      })(u2, t2, s2), h2 = d2 && "win32" === i2 && true === a2;
      let f2;
      f2 = void 0 === t2 ? void 0 : h2 ? "no_sandbox" : d2 ? "allow_all" : (function(e3, t3) {
        var r3;
        if (void 0 !== W(e3?.command) && void 0 !== t3.command && void 0 === t3.url) return r3 = e3?.networkMode, ("allow_all" === r3 || "allowlist" === r3 || "deny_all" === r3 || "no_sandbox" === r3 ? r3 : void 0) ?? "no_sandbox";
      })(u2, t2);
      const g2 = void 0 === t2 || d2 ? l2 : void 0;
      return { enabled: p2, mcpNetworkAllowlist: m2, ...void 0 !== f2 ? { mcpNetworkMode: f2 } : {}, ...void 0 !== g2 ? { mcpNetworkDenylist: g2 } : {}, ...void 0 !== r2 ? { localAgentNetworkAllowlist: r2 } : {}, ...void 0 !== n2 ? { blockMessage: n2 } : {}, ...h2 ? { win32UserExtensionUnsandbox: true } : {} };
    }
    function X(e2) {
      if (true === e2?.enabled && "no_sandbox" !== e2.mcpNetworkMode) return e2;
    }
  }