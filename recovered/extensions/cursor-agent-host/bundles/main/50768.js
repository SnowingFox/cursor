// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 50768 range:8444891..8462488
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
50768: (e, t, r) => {
    "use strict";
    r.d(t, { $H: () => te, HH: () => y, ME: () => W, Yl: () => f, _N: () => ee, b6: () => z, bi: () => J, mD: () => O, vc: () => $ });
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
        const t2 = G(e3);
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
      u.size >= M && u.clear();
      const r2 = (function(e3) {
        const t3 = G(e3);
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
            d.size >= M && d.clear();
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
      return m(G(e2), p(t2));
    }
    function f(e2) {
      try {
        const t2 = new URL(e2), r2 = new URL(t2.pathname, t2.origin);
        return r2.search = t2.search, r2.pathname.endsWith("/") && r2.pathname.length > 1 && (r2.pathname = r2.pathname.slice(0, -1)), "/" === r2.pathname ? r2.origin + r2.search : r2.toString();
      } catch {
        return e2.toLowerCase().trim();
      }
    }
    const g = /* @__PURE__ */ new Set(["airtable.com", "anysphere.co", "api.aws", "apify.com", "asana.com", "ashbyhq.com", "atlassian.com", "atlassian.net", "azuredatabricks.net", "box.com", "buildkite.com", "calendly.com", "canva.com", "clickhouse.cloud", "clickup.com", "cloudflare.com", "composio.dev", "context7.com", "cursor.com", "cursor.sh", "cursorapi.com", "databricks.com", "datadoghq.com", "datadoghq.eu", "ddog-gov.com", "dropbox.com", "elevenlabs.io", "exa.ai", "figma.com", "firecrawl.dev", "github.com", "githubcopilot.com", "gitlab.com", "google.com", "googleapis.com", "granola.ai", "hex.tech", "hubspot.com", "huggingface.co", "intercom.com", "linear.app", "monday.com", "neon.tech", "notion.com", "plain.com", "posthog.com", "prisma.io", "railway.com", "ramp.com", "render.com", "salesforce.com", "sentry.dev", "sentry.io", "slack.com", "snowflakecomputing.com", "spacelift.io", "statsig.com", "stripe.com", "supabase.com", "todoist.net", "vercel.com", "workos.com", "x.ai", "x.com", "zapier.com"]);
    function y(e2) {
      if (void 0 === e2 || 0 === e2.trim().length) return "unknown";
      const t2 = (function(e3) {
        let t3;
        try {
          t3 = new URL(e3).hostname.toLowerCase();
        } catch {
          return "invalid";
        }
        const r2 = t3.split(".").filter((e4) => e4.length > 0);
        return r2.length <= 2 ? r2.join(".") || "invalid" : r2.slice(-2).join(".");
      })(e2);
      return g.has(t2) ? t2 : "other";
    }
    const w = "Blocked by MCP Network Admin Server Controls";
    function v(e2) {
      return /\s/.test(e2);
    }
    const _ = "[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?", A = new RegExp(`^(?:${_}\\.)*${_}$`), S = new RegExp(`^\\*\\.(?:${_}\\.)*${_}$`), b = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)", E = new RegExp(`^${b}(?:\\.${b}){3}$`), I = /^[0-9a-f:]+$/, C = new RegExp(`^(?:${b}(?:\\.${b}){3}|[0-9a-f:]+)\\/\\d{1,3}$`);
    function k(e2) {
      const t2 = G(e2);
      return t2.length > 0 && t2.length <= 253 && A.test(t2);
    }
    function x(e2) {
      const t2 = G(e2);
      return E.test(t2) || (function(e3) {
        const t3 = G(e3);
        if (!I.test(t3)) return false;
        try {
          return new URL(`https://[${t3}]`), true;
        } catch {
          return false;
        }
      })(t2);
    }
    function T(e2, t2) {
      return "" === t2 || "http:" === e2 && "80" === t2 || "https:" === e2 && "443" === t2;
    }
    function R(e2) {
      try {
        const t2 = new URL(e2);
        return ("http:" === t2.protocol || "https:" === t2.protocol) && (!(0 === t2.hostname.length || t2.username.length > 0 || t2.password.length > 0) && ("" === t2.hash && (function(e3) {
          const t3 = e3.toLowerCase();
          return !t3.includes("*") && (k(t3) || x(t3));
        })(t2.hostname)));
      } catch {
        return false;
      }
    }
    function B(e2) {
      const t2 = new URL(e2.pathname || "/", e2.origin);
      if (t2.search = e2.search, t2.pathname.endsWith("/") && t2.pathname.length > 1 && (t2.pathname = t2.pathname.slice(0, -1)), "/" === t2.pathname && "" === t2.search) {
        const t3 = e2.protocol.toLowerCase();
        let r3 = `${t3}//${e2.hostname.toLowerCase()}`;
        return T(t3, e2.port) || (r3 += `:${e2.port}`), r3;
      }
      const r2 = e2.protocol.toLowerCase();
      let n2 = `${r2}//${e2.hostname.toLowerCase()}`;
      return T(r2, e2.port) || (n2 += `:${e2.port}`), `${n2}${t2.pathname}${t2.search}`;
    }
    function P(e2) {
      if (e2.includes("://")) return R(e2);
      const t2 = G(e2);
      return "*" === t2 || (!!S.test(t2) || (t2.includes("/") ? (function(e3) {
        const t3 = G(e3);
        if (!C.test(t3)) return false;
        const [r2] = t3.split("/");
        return void 0 !== r2 && h(r2, t3);
      })(t2) : k(t2) || x(t2)));
    }
    function J(e2) {
      if (q.has(e2)) return q.get(e2);
      q.size >= M && q.clear();
      const t2 = (function(e3) {
        const t3 = e3.trim();
        if (0 === t3.length) return;
        const r2 = t3.lastIndexOf("/");
        if (!t3.includes("://") && r2 > 0 && /^\d+$/.test(t3.slice(r2 + 1).trim())) {
          const e4 = `${G(t3.slice(0, r2))}/${t3.slice(r2 + 1).trim()}`;
          return P(e4) ? e4 : void 0;
        }
        if (v(t3) || t3.includes("#") || t3.includes("@")) return;
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
              const t4 = B(e5);
              if (!P(t4)) return;
              return t4;
            }
            {
              const t4 = B(e5);
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
      return q.set(e2, t2), t2;
    }
    const M = 2048, q = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map();
    function O(e2, t2) {
      if (!e2.includes("*")) return e2 === t2;
      const r2 = e2.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
      return new RegExp(`^${r2}$`).test(t2);
    }
    function N(e2) {
      return e2.endsWith("/") && e2.length > 1 ? e2.slice(0, -1) : e2;
    }
    function F(e2, t2, r2) {
      const n2 = L(t2);
      if (!n2) return false;
      let s2;
      try {
        s2 = new URL(e2);
      } catch {
        return false;
      }
      return "" === s2.username && "" === s2.password && "" === n2.username && "" === n2.password && s2.protocol === n2.protocol && s2.port === n2.port && (o2 = s2.hostname, i2 = n2.hostname, !o2.includes("*") && G(o2) === G(i2) && (a2 = s2.pathname, c2 = n2.pathname, (O(a2, c2) || O(N(a2), N(c2))) && (function(e3, t3, r3) {
        return "" === e3 ? r3.allowRequestQueryWhenPatternOmitsQuery || "" === t3 : O(e3, t3);
      })(s2.search, n2.search, r2)));
      var o2, i2, a2, c2;
    }
    function U(e2, t2) {
      return F(e2, t2, { allowRequestQueryWhenPatternOmitsQuery: true });
    }
    function L(e2) {
      const t2 = e2.trim();
      if (0 === t2.length || v(t2)) return;
      if ((function(e3) {
        const t3 = e3.indexOf("[");
        return -1 !== t3 && -1 === e3.indexOf("]", t3);
      })(t2)) return;
      const r2 = H(t2);
      if (r2 && ("http:" === r2.protocol || "https:" === r2.protocol) && "" === r2.username && "" === r2.password && 0 !== r2.hostname.length && (!G(r2.hostname).includes(":") || t2.includes("["))) {
        if (t2.includes("[")) {
          const e3 = t2.indexOf("["), n2 = t2.indexOf("]", e3);
          if (-1 === n2) return;
          const s2 = t2.slice(e3 + 1, n2);
          if (G(r2.hostname) !== G(s2)) return;
        }
        return r2;
      }
    }
    function $(e2, t2) {
      if (O(e2, t2)) return true;
      let r2;
      return D.has(t2) ? r2 = D.get(t2) : (D.size >= M && D.clear(), r2 = H(t2), D.set(t2, r2)), !!r2 && h(r2.hostname, e2);
    }
    function Q(e2, t2) {
      const r2 = L(t2);
      if (!r2) return false;
      if (!e2.includes("://")) return h(G(r2.hostname), e2);
      if (U(e2, t2)) return true;
      const n2 = (function(e3) {
        try {
          const t3 = new URL(e3);
          if ("" !== t3.username || "" !== t3.password || "/" !== t3.pathname || "" !== t3.search || "" !== t3.hash) return;
          return `${t3.protocol}//${t3.host}/*`;
        } catch {
          return;
        }
      })(e2);
      return void 0 !== n2 && U(n2, t2);
    }
    function j(e2) {
      return (e2 ?? []).flatMap((e3) => {
        const t2 = J(e3);
        return void 0 === t2 ? [] : [t2];
      });
    }
    function G(e2) {
      const t2 = e2.trim().toLowerCase();
      return t2.startsWith("[") && t2.endsWith("]") ? t2.slice(1, -1) : t2;
    }
    function H(e2) {
      const t2 = e2.trim();
      if (0 === t2.length) return;
      const r2 = t2.includes("://") ? t2 : `https://${t2}`;
      try {
        return new URL(r2);
      } catch {
        return;
      }
    }
    function z(e2) {
      return j(e2.mcpNetworkAllowlist);
    }
    function W(e2, t2) {
      if (true !== t2.enabled) return { allowed: true };
      if ("no_sandbox" === t2.mcpNetworkMode) return { allowed: true };
      if (!L(e2)) return { allowed: false, message: t2.blockMessage ?? w };
      const r2 = z(t2);
      return r2.length > 0 && r2.some((t3) => Q(t3, e2)) ? { allowed: true } : { allowed: false, message: t2.blockMessage ?? w };
    }
    function V(e2) {
      const t2 = e2?.trim();
      return t2 && t2.length > 0 ? t2 : void 0;
    }
    function K(e2) {
      if (true !== e2?.allowUserOverrideMcpServers) return;
      const t2 = (e2.deniedMcpServers ?? []).flatMap((e3) => {
        const t3 = V(e3.serverUrl), r2 = void 0 === t3 ? void 0 : (function(e4) {
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
                const e6 = J(r4.replace(/:\d+$/, ""));
                if (void 0 !== e6) return e6;
              }
            }
            return;
          }
          if (!t4.includes("://") && t4.includes("*") && "*" !== t4 && !t4.startsWith("*.")) return;
          const r3 = J(e4);
          if (void 0 !== r3) return r3;
          const n2 = e4.indexOf("://");
          if (-1 === n2) return;
          const s2 = e4.slice(0, n2).toLowerCase();
          if ("http" !== s2 && "https" !== s2) return;
          const o2 = e4.slice(n2 + 3).split(/[/?#]/, 1)[0];
          if (void 0 === o2 || o2.includes("@")) return;
          const i2 = J(o2.replace(/:\d+$/, ""));
          if (void 0 !== i2) return i2;
          try {
            return J(new URL(e4).hostname);
          } catch {
            return;
          }
        })(t3);
        return void 0 === r2 ? [] : [r2];
      });
      return t2.length > 0 ? t2 : void 0;
    }
    function Y(e2) {
      return V(e2)?.toLowerCase();
    }
    function Z(e2, t2) {
      return e2?.find((e3) => (function(e4, t3) {
        const r2 = Y(e4.builtinServer), n2 = Y(t3.builtinServer);
        if (void 0 !== r2 || void 0 !== n2) return void 0 !== r2 && r2 === n2;
        const s2 = V(e4.command), o2 = V(e4.serverUrl);
        if (void 0 === s2 && void 0 === o2) return false;
        const i2 = void 0 === s2 || void 0 !== t3.command && O(s2, t3.command), a2 = void 0 === o2 || void 0 !== t3.url && $(o2, t3.url);
        return i2 && a2;
      })(e3, t2));
    }
    function X(e2, t2, r2) {
      return void 0 !== r2?.command && void 0 === r2.url && void 0 === t2 && true === e2?.allowUserOverrideMcpServers;
    }
    function ee({ allowedMcpConfiguration: e2, server: t2, localAgentNetworkAllowlist: r2, blockMessage: n2, unmatchedServerAllowlist: s2, aggregateManagedServerNetworkAllowlists: o2 = true, stdioPlatform: i2, unsandboxUserExtensionStdio: a2 }) {
      const c2 = e2?.allowedMcpServers, l2 = K(e2), u2 = void 0 === t2 ? void 0 : Z(c2, t2), d2 = X(e2, u2, t2), p2 = (function({ allowedMcpConfiguration: e3, matchedServer: t3, server: r3 }) {
        return void 0 === r3 ? (e3?.allowedMcpServers?.length ?? 0) > 0 : void 0 !== t3 || X(e3, t3, r3);
      })({ allowedMcpConfiguration: e2, matchedServer: u2, server: t2 }) || void 0 === t2 && void 0 !== l2, m2 = void 0 === t2 ? o2 ? c2?.flatMap((e3) => e3.networkAllowlist ?? []) : void 0 : d2 ? [] : (function(e3, t3, r3) {
        return void 0 === e3 ? r3 : [...e3.networkAllowlist ?? [], ...void 0 !== V(e3.serverUrl) && void 0 !== t3.url ? [t3.url] : []];
      })(u2, t2, s2), h2 = d2 && "win32" === i2 && true === a2;
      let f2;
      f2 = void 0 === t2 ? void 0 : h2 ? "no_sandbox" : d2 ? "allow_all" : (function(e3, t3) {
        var r3;
        if (void 0 !== V(e3?.command) && void 0 !== t3.command && void 0 === t3.url) return r3 = e3?.networkMode, ("allow_all" === r3 || "allowlist" === r3 || "deny_all" === r3 || "no_sandbox" === r3 ? r3 : void 0) ?? "no_sandbox";
      })(u2, t2);
      const g2 = void 0 === t2 || d2 ? l2 : void 0;
      return { enabled: p2, mcpNetworkAllowlist: m2, ...void 0 !== f2 ? { mcpNetworkMode: f2 } : {}, ...void 0 !== g2 ? { mcpNetworkDenylist: g2 } : {}, ...void 0 !== r2 ? { localAgentNetworkAllowlist: r2 } : {}, ...void 0 !== n2 ? { blockMessage: n2 } : {}, ...h2 ? { win32UserExtensionUnsandbox: true } : {} };
    }
    function te(e2) {
      if (true === e2?.enabled && "no_sandbox" !== e2.mcpNetworkMode) return e2;
    }
  }