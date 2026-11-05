// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/305.js sha256:54d5fa4cf215825eafb00493b51c809c66436b8598c487bd6b63e2be18968ff2
// module: "../mcp-core/dist/transport/mcp-url-utils.js" range:1128516..1139372
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
const n = BigInt(0),
  o = BigInt(8),
  s = BigInt(16),
  i = BigInt(65535);
function a(e) {
  const t = e.split(".");
  if (4 !== t.length) return;
  let r = n;
  for (const e of t) {
    if (!/^\d{1,3}$/.test(e)) return;
    const t = Number(e);
    if (!Number.isInteger(t) || t < 0 || t > 255) return;
    r = r << o | BigInt(t);
  }
  return {
    version: 4,
    value: r
  };
}
function c(e) {
  if (0 === e.length) return [];
  const t = [],
    r = e.split(":");
  for (let e = 0; e < r.length; e++) {
    const n = r[e];
    if (0 === n.length) return;
    if (n.includes(".")) {
      if (e !== r.length - 1) return;
      const o = a(n);
      if (!o) return;
      t.push(Number(o.value >> s & i)), t.push(Number(o.value & i));
    } else {
      if (!/^[0-9a-f]{1,4}$/i.test(n)) return;
      t.push(Number.parseInt(n, 16));
    }
  }
  return t;
}
function l(e) {
  return a(e) ?? function (e) {
    const t = F(e);
    if (0 === t.length || t.includes(":::")) return;
    const r = t.indexOf("::");
    if (-1 === r) {
      const e = c(t);
      if (!e || 8 !== e.length) return;
      return {
        version: 6,
        value: e.reduce((e, t) => e << s | BigInt(t), n)
      };
    }
    if (-1 !== t.indexOf("::", r + 1)) return;
    const o = t.slice(0, r),
      i = t.slice(r + 2),
      a = c(o),
      l = c(i);
    if (!a || !l) return;
    const u = a.length + l.length;
    return u > 7 ? void 0 : {
      version: 6,
      value: [...a, ...new Array(8 - u).fill(0), ...l].reduce((e, t) => e << s | BigInt(t), n)
    };
  }(e);
}
const u = new Map(),
  d = new Map();
function h(e, t) {
  return function (e, t) {
    switch (t.kind) {
      case "matchAll":
        return !0;
      case "invalidCidr":
        return !1;
      case "cidr":
        {
          const r = function (e) {
            if (d.has(e)) return d.get(e);
            d.size >= I && d.clear();
            const t = l(e);
            return d.set(e, t), t;
          }(e);
          return void 0 !== r && r.version === t.version && r.value >> t.shift === t.shiftedNetwork;
        }
      case "subdomainOrBase":
        return e === t.suffix || e.endsWith(`.${t.suffix}`);
      case "exact":
        return e === t.value;
      default:
        return t;
    }
  }(F(e), function (e) {
    const t = u.get(e);
    if (t) return t;
    u.size >= I && u.clear();
    const r = function (e) {
      const t = F(e);
      if ("*" === t) return {
        kind: "matchAll"
      };
      if (t.includes("/")) {
        const e = t.lastIndexOf("/");
        if (e <= 0 || e === t.length - 1) return {
          kind: "invalidCidr"
        };
        const r = l(t.slice(0, e));
        if (!r) return {
          kind: "invalidCidr"
        };
        const n = Number(t.slice(e + 1)),
          o = 4 === r.version ? 32 : 128;
        if (!Number.isInteger(n) || n < 0 || n > o) return {
          kind: "invalidCidr"
        };
        const s = BigInt(o - n);
        return {
          kind: "cidr",
          version: r.version,
          shift: s,
          shiftedNetwork: r.value >> s
        };
      }
      return t.startsWith("*.") ? {
        kind: "subdomainOrBase",
        suffix: t.slice(2)
      } : {
        kind: "exact",
        value: t
      };
    }(e);
    return u.set(e, r), r;
  }(t));
}
new Set(["airtable.com", "anysphere.co", "api.aws", "apify.com", "asana.com", "ashbyhq.com", "atlassian.com", "atlassian.net", "azuredatabricks.net", "box.com", "buildkite.com", "calendly.com", "canva.com", "clickhouse.cloud", "clickup.com", "cloudflare.com", "composio.dev", "context7.com", "cursor.com", "cursor.sh", "cursorapi.com", "databricks.com", "datadoghq.com", "datadoghq.eu", "ddog-gov.com", "dropbox.com", "elevenlabs.io", "exa.ai", "figma.com", "firecrawl.dev", "github.com", "githubcopilot.com", "gitlab.com", "google.com", "googleapis.com", "granola.ai", "hex.tech", "hubspot.com", "huggingface.co", "intercom.com", "linear.app", "monday.com", "neon.tech", "notion.com", "plain.com", "posthog.com", "prisma.io", "railway.com", "ramp.com", "render.com", "salesforce.com", "sentry.dev", "sentry.io", "slack.com", "snowflakecomputing.com", "spacelift.io", "statsig.com", "stripe.com", "supabase.com", "todoist.net", "vercel.com", "workos.com", "x.ai", "x.com", "zapier.com"]);
const p = "Blocked by MCP Network Admin Server Controls";
function f(e) {
  return /\s/.test(e);
}
const m = "[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?",
  g = new RegExp(`^(?:${m}\\.)*${m}$`),
  w = new RegExp(`^\\*\\.(?:${m}\\.)*${m}$`),
  y = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)",
  v = new RegExp(`^${y}(?:\\.${y}){3}$`),
  b = /^[0-9a-f:]+$/,
  S = new RegExp(`^(?:${y}(?:\\.${y}){3}|[0-9a-f:]+)\\/\\d{1,3}$`);
function k(e) {
  const t = F(e);
  return t.length > 0 && t.length <= 253 && g.test(t);
}
function _(e) {
  const t = F(e);
  return v.test(t) || function (e) {
    const t = F(e);
    if (!b.test(t)) return !1;
    try {
      return new URL(`https://[${t}]`), !0;
    } catch {
      return !1;
    }
  }(t);
}
function C(e, t) {
  return "" === t || "http:" === e && "80" === t || "https:" === e && "443" === t;
}
function E(e) {
  const t = new URL(e.pathname || "/", e.origin);
  if (t.search = e.search, t.pathname.endsWith("/") && t.pathname.length > 1 && (t.pathname = t.pathname.slice(0, -1)), "/" === t.pathname && "" === t.search) {
    const t = e.protocol.toLowerCase();
    let r = `${t}//${e.hostname.toLowerCase()}`;
    return C(t, e.port) || (r += `:${e.port}`), r;
  }
  const r = e.protocol.toLowerCase();
  let n = `${r}//${e.hostname.toLowerCase()}`;
  return C(r, e.port) || (n += `:${e.port}`), `${n}${t.pathname}${t.search}`;
}
function x(e) {
  if (e.includes("://")) return function (e) {
    try {
      const t = new URL(e);
      return ("http:" === t.protocol || "https:" === t.protocol) && !(0 === t.hostname.length || t.username.length > 0 || t.password.length > 0) && "" === t.hash && function (e) {
        const t = e.toLowerCase();
        return !t.includes("*") && (k(t) || _(t));
      }(t.hostname);
    } catch {
      return !1;
    }
  }(e);
  const t = F(e);
  return "*" === t || !!w.test(t) || (t.includes("/") ? function (e) {
    const t = F(e);
    if (!S.test(t)) return !1;
    const [r] = t.split("/");
    return void 0 !== r && h(r, t);
  }(t) : k(t) || _(t));
}
function P(e) {
  if (R.has(e)) return R.get(e);
  R.size >= I && R.clear();
  const t = function (e) {
    const t = e.trim();
    if (0 === t.length) return;
    const r = t.lastIndexOf("/");
    if (!t.includes("://") && r > 0 && /^\d+$/.test(t.slice(r + 1).trim())) {
      const e = `${F(t.slice(0, r))}/${t.slice(r + 1).trim()}`;
      return x(e) ? e : void 0;
    }
    if (f(t) || t.includes("#") || t.includes("@")) return;
    const n = t.indexOf("://");
    if (-1 !== n) {
      const e = t.slice(0, n).toLowerCase();
      if ("http" !== e && "https" !== e) return;
      try {
        const e = new URL(t);
        if (0 === e.hostname.length || e.username.length > 0 || e.password.length > 0) return;
        const r = "/" !== e.pathname && "" !== e.pathname,
          n = "" !== e.search;
        if (e.hostname.includes("*")) return;
        if (r || n) {
          const t = E(e);
          if (!x(t)) return;
          return t;
        }
        {
          const t = E(e);
          if (!x(t)) return;
          return t;
        }
      } catch {
        return;
      }
    } else if (t.includes("/")) return;
    const o = t.trim().toLowerCase(),
      s = function (e) {
        const t = e.indexOf(":");
        if (-1 === t) return e;
        const r = e.slice(t + 1);
        return /^\d+$/.test(r) ? e.slice(0, t) : e;
      }(o);
    return 0 === s.length || !x(s) || s !== o && "*" === s ? void 0 : s;
  }(e);
  return R.set(e, t), t;
}
const I = 2048,
  R = new Map(),
  T = new Map();
function A(e, t) {
  if (!e.includes("*")) return e === t;
  const r = e.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
  return new RegExp(`^${r}$`).test(t);
}
function $(e) {
  return e.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e;
}
function M(e, t) {
  return function (e, t, r) {
    const n = D(t);
    if (!n) return !1;
    let o;
    try {
      o = new URL(e);
    } catch {
      return !1;
    }
    return "" === o.username && "" === o.password && "" === n.username && "" === n.password && o.protocol === n.protocol && o.port === n.port && (s = o.hostname, i = n.hostname, !s.includes("*") && F(s) === F(i) && (A(a = o.pathname, c = n.pathname) || A($(a), $(c))) && function (e, t, r) {
      return "" === e ? r.allowRequestQueryWhenPatternOmitsQuery || "" === t : A(e, t);
    }(o.search, n.search, r));
    var s, i, a, c;
  }(e, t, {
    allowRequestQueryWhenPatternOmitsQuery: !0
  });
}
function D(e) {
  const t = e.trim();
  if (0 === t.length || f(t)) return;
  if (function (e) {
    const t = e.indexOf("[");
    return -1 !== t && -1 === e.indexOf("]", t);
  }(t)) return;
  const r = N(t);
  if (r && ("http:" === r.protocol || "https:" === r.protocol) && "" === r.username && "" === r.password && 0 !== r.hostname.length && (!F(r.hostname).includes(":") || t.includes("["))) {
    if (t.includes("[")) {
      const e = t.indexOf("["),
        n = t.indexOf("]", e);
      if (-1 === n) return;
      const o = t.slice(e + 1, n);
      if (F(r.hostname) !== F(o)) return;
    }
    return r;
  }
}
function O(e, t) {
  if (A(e, t)) return !0;
  let r;
  return T.has(t) ? r = T.get(t) : (T.size >= I && T.clear(), r = N(t), T.set(t, r)), !!r && h(r.hostname, e);
}
function F(e) {
  const t = e.trim().toLowerCase();
  return t.startsWith("[") && t.endsWith("]") ? t.slice(1, -1) : t;
}
function N(e) {
  const t = e.trim();
  if (0 === t.length) return;
  const r = t.includes("://") ? t : `https://${t}`;
  try {
    return new URL(r);
  } catch {
    return;
  }
}
function j(e) {
  return (e.mcpNetworkAllowlist ?? []).flatMap(e => {
    const t = P(e);
    return void 0 === t ? [] : [t];
  });
}
function L(e, t) {
  if (!0 !== t.enabled) return {
    allowed: !0
  };
  if ("no_sandbox" === t.mcpNetworkMode) return {
    allowed: !0
  };
  if (!D(e)) return {
    allowed: !1,
    message: t.blockMessage ?? p
  };
  const r = j(t);
  return r.length > 0 && r.some(t => function (e, t) {
    const r = D(t);
    if (!r) return !1;
    if (!e.includes("://")) return h(F(r.hostname), e);
    if (M(e, t)) return !0;
    const n = function (e) {
      try {
        const t = new URL(e);
        if ("" !== t.username || "" !== t.password || "/" !== t.pathname || "" !== t.search || "" !== t.hash) return;
        return `${t.protocol}//${t.host}/*`;
      } catch {
        return;
      }
    }(e);
    return void 0 !== n && M(n, t);
  }(t, e)) ? {
    allowed: !0
  } : {
    allowed: !1,
    message: t.blockMessage ?? p
  };
}
function U(e) {
  const t = e?.trim();
  return t && t.length > 0 ? t : void 0;
}
function B(e) {
  return U(e)?.toLowerCase();
}
function W(e, t, r) {
  return void 0 !== r?.command && void 0 === r.url && void 0 === t && !0 === e?.allowUserOverrideMcpServers;
}
function H({
  allowedMcpConfiguration: e,
  server: t,
  localAgentNetworkAllowlist: r,
  blockMessage: n,
  unmatchedServerAllowlist: o,
  aggregateManagedServerNetworkAllowlists: s = !0,
  stdioPlatform: i,
  unsandboxUserExtensionStdio: a
}) {
  const c = e?.allowedMcpServers,
    l = function (e) {
      if (!0 !== e?.allowUserOverrideMcpServers) return;
      const t = (e.deniedMcpServers ?? []).flatMap(e => {
        const t = U(e.serverUrl),
          r = void 0 === t ? void 0 : function (e) {
            const t = e.trim();
            if (0 === t.length) return;
            if (function (e) {
              const t = e.indexOf("://");
              if (-1 === t) return !1;
              const r = e.slice(t + 3),
                n = r.indexOf("/");
              return -1 === n ? r.includes("?") : r.slice(n).includes("*");
            }(t)) {
              const e = t.indexOf("://");
              if (-1 !== e) {
                const r = t.slice(e + 3).split(/[/?#]/, 1)[0];
                if (r?.includes("*")) {
                  const e = P(r.replace(/:\d+$/, ""));
                  if (void 0 !== e) return e;
                }
              }
              return;
            }
            if (!t.includes("://") && t.includes("*") && "*" !== t && !t.startsWith("*.")) return;
            const r = P(e);
            if (void 0 !== r) return r;
            const n = e.indexOf("://");
            if (-1 === n) return;
            const o = e.slice(0, n).toLowerCase();
            if ("http" !== o && "https" !== o) return;
            const s = e.slice(n + 3).split(/[/?#]/, 1)[0];
            if (void 0 === s || s.includes("@")) return;
            const i = P(s.replace(/:\d+$/, ""));
            if (void 0 !== i) return i;
            try {
              return P(new URL(e).hostname);
            } catch {
              return;
            }
          }(t);
        return void 0 === r ? [] : [r];
      });
      return t.length > 0 ? t : void 0;
    }(e),
    u = void 0 === t ? void 0 : function (e, t) {
      return e?.find(e => function (e, t) {
        const r = B(e.builtinServer),
          n = B(t.builtinServer);
        if (void 0 !== r || void 0 !== n) return void 0 !== r && r === n;
        const o = U(e.command),
          s = U(e.serverUrl);
        if (void 0 === o && void 0 === s) return !1;
        const i = void 0 === o || void 0 !== t.command && A(o, t.command),
          a = void 0 === s || void 0 !== t.url && O(s, t.url);
        return i && a;
      }(e, t));
    }(c, t),
    d = W(e, u, t),
    h = function ({
      allowedMcpConfiguration: e,
      matchedServer: t,
      server: r
    }) {
      return void 0 === r ? (e?.allowedMcpServers?.length ?? 0) > 0 : void 0 !== t || W(e, t, r);
    }({
      allowedMcpConfiguration: e,
      matchedServer: u,
      server: t
    }) || void 0 === t && void 0 !== l,
    p = void 0 === t ? s ? c?.flatMap(e => e.networkAllowlist ?? []) : void 0 : d ? [] : function (e, t, r) {
      return void 0 === e ? r : [...(e.networkAllowlist ?? []), ...(void 0 !== U(e.serverUrl) && void 0 !== t.url ? [t.url] : [])];
    }(u, t, o),
    f = d && "win32" === i && !0 === a;
  let m;
  m = void 0 === t ? void 0 : f ? "no_sandbox" : d ? "allow_all" : function (e, t) {
    var r;
    if (void 0 !== U(e?.command) && void 0 !== t.command && void 0 === t.url) return r = e?.networkMode, ("allow_all" === r || "allowlist" === r || "deny_all" === r || "no_sandbox" === r ? r : void 0) ?? "no_sandbox";
  }(u, t);
  const g = void 0 === t || d ? l : void 0;
  return {
    enabled: h,
    mcpNetworkAllowlist: p,
    ...(void 0 !== m ? {
      mcpNetworkMode: m
    } : {}),
    ...(void 0 !== g ? {
      mcpNetworkDenylist: g
    } : {}),
    ...(void 0 !== r ? {
      localAgentNetworkAllowlist: r
    } : {}),
    ...(void 0 !== n ? {
      blockMessage: n
    } : {}),
    ...(f ? {
      win32UserExtensionUnsandbox: !0
    } : {})
  };
}
function q(e) {
  if (!0 === e?.enabled && "no_sandbox" !== e.mcpNetworkMode) return e;
}
export { q as $H, L as ME, H as _N, j as b6, P as bi, A as mD, O as vc };
