// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 50768 range:1639334..1648533
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
50768: (e, t, r) => {
    "use strict";
    r.d(t, { $H: () => N, b6: () => D, bi: () => A });
    const n = BigInt(0), o = BigInt(8), s = BigInt(16), i = BigInt(65535);
    function a(e2) {
      const t2 = e2.split(".");
      if (4 !== t2.length) return;
      let r2 = n;
      for (const e3 of t2) {
        if (!/^\d{1,3}$/.test(e3)) return;
        const t3 = Number(e3);
        if (!Number.isInteger(t3) || t3 < 0 || t3 > 255) return;
        r2 = r2 << o | BigInt(t3);
      }
      return { version: 4, value: r2 };
    }
    function l(e2) {
      if (0 === e2.length) return [];
      const t2 = [], r2 = e2.split(":");
      for (let e3 = 0; e3 < r2.length; e3++) {
        const n2 = r2[e3];
        if (0 === n2.length) return;
        if (n2.includes(".")) {
          if (e3 !== r2.length - 1) return;
          const o2 = a(n2);
          if (!o2) return;
          t2.push(Number(o2.value >> s & i)), t2.push(Number(o2.value & i));
          continue;
        }
        if (!/^[0-9a-f]{1,4}$/i.test(n2)) return;
        t2.push(Number.parseInt(n2, 16));
      }
      return t2;
    }
    function c(e2) {
      return a(e2) ?? (function(e3) {
        const t2 = O(e3);
        if (0 === t2.length || t2.includes(":::")) return;
        const r2 = t2.indexOf("::");
        if (-1 === r2) {
          const e4 = l(t2);
          if (!e4 || 8 !== e4.length) return;
          return { version: 6, value: e4.reduce((e5, t3) => e5 << s | BigInt(t3), n) };
        }
        if (-1 !== t2.indexOf("::", r2 + 1)) return;
        const o2 = t2.slice(0, r2), i2 = t2.slice(r2 + 2), a2 = l(o2), c2 = l(i2);
        if (!a2 || !c2) return;
        const u2 = a2.length + c2.length;
        if (u2 > 7) return;
        return { version: 6, value: [...a2, ...new Array(8 - u2).fill(0), ...c2].reduce((e4, t3) => e4 << s | BigInt(t3), n) };
      })(e2);
    }
    const u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
    function p(e2) {
      const t2 = u.get(e2);
      if (t2) return t2;
      u.size >= P && u.clear();
      const r2 = (function(e3) {
        const t3 = O(e3);
        if ("*" === t3) return { kind: "matchAll" };
        if (t3.includes("/")) {
          const e4 = t3.lastIndexOf("/");
          if (e4 <= 0 || e4 === t3.length - 1) return { kind: "invalidCidr" };
          const r3 = c(t3.slice(0, e4));
          if (!r3) return { kind: "invalidCidr" };
          const n2 = Number(t3.slice(e4 + 1)), o2 = 4 === r3.version ? 32 : 128;
          if (!Number.isInteger(n2) || n2 < 0 || n2 > o2) return { kind: "invalidCidr" };
          const s2 = BigInt(o2 - n2);
          return { kind: "cidr", version: r3.version, shift: s2, shiftedNetwork: r3.value >> s2 };
        }
        return t3.startsWith("*.") ? { kind: "subdomainOrBase", suffix: t3.slice(2) } : { kind: "exact", value: t3 };
      })(e2);
      return u.set(e2, r2), r2;
    }
    function h(e2, t2) {
      switch (t2.kind) {
        case "matchAll":
          return true;
        case "invalidCidr":
          return false;
        case "cidr": {
          const r2 = (function(e3) {
            if (d.has(e3)) return d.get(e3);
            d.size >= P && d.clear();
            const t3 = c(e3);
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
    function m(e2, t2) {
      return h(O(e2), p(t2));
    }
    /* @__PURE__ */ new Set(["airtable.com", "anysphere.co", "api.aws", "apify.com", "asana.com", "ashbyhq.com", "atlassian.com", "atlassian.net", "azuredatabricks.net", "box.com", "buildkite.com", "calendly.com", "canva.com", "clickhouse.cloud", "clickup.com", "cloudflare.com", "composio.dev", "context7.com", "cursor.com", "cursor.sh", "cursorapi.com", "databricks.com", "datadoghq.com", "datadoghq.eu", "ddog-gov.com", "dropbox.com", "elevenlabs.io", "exa.ai", "figma.com", "firecrawl.dev", "github.com", "githubcopilot.com", "gitlab.com", "google.com", "googleapis.com", "granola.ai", "hex.tech", "hubspot.com", "huggingface.co", "intercom.com", "linear.app", "monday.com", "neon.tech", "notion.com", "plain.com", "posthog.com", "prisma.io", "railway.com", "ramp.com", "render.com", "salesforce.com", "sentry.dev", "sentry.io", "slack.com", "snowflakecomputing.com", "spacelift.io", "statsig.com", "stripe.com", "supabase.com", "todoist.net", "vercel.com", "workos.com", "x.ai", "x.com", "zapier.com"]);
    function f(e2) {
      return /\s/.test(e2);
    }
    const g = "[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?", y = new RegExp(`^(?:${g}\\.)*${g}$`), v = new RegExp(`^\\*\\.(?:${g}\\.)*${g}$`), w = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)", b = new RegExp(`^${w}(?:\\.${w}){3}$`), _ = /^[0-9a-f:]+$/, S = new RegExp(`^(?:${w}(?:\\.${w}){3}|[0-9a-f:]+)\\/\\d{1,3}$`);
    function x(e2) {
      const t2 = O(e2);
      return t2.length > 0 && t2.length <= 253 && y.test(t2);
    }
    function k(e2) {
      const t2 = O(e2);
      return b.test(t2) || (function(e3) {
        const t3 = O(e3);
        if (!_.test(t3)) return false;
        try {
          return new URL(`https://[${t3}]`), true;
        } catch {
          return false;
        }
      })(t2);
    }
    function E(e2, t2) {
      return "" === t2 || "http:" === e2 && "80" === t2 || "https:" === e2 && "443" === t2;
    }
    function T(e2) {
      try {
        const t2 = new URL(e2);
        return ("http:" === t2.protocol || "https:" === t2.protocol) && (!(0 === t2.hostname.length || t2.username.length > 0 || t2.password.length > 0) && ("" === t2.hash && (function(e3) {
          const t3 = e3.toLowerCase();
          return !t3.includes("*") && (x(t3) || k(t3));
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
        return E(t3, e2.port) || (r3 += `:${e2.port}`), r3;
      }
      const r2 = e2.protocol.toLowerCase();
      let n2 = `${r2}//${e2.hostname.toLowerCase()}`;
      return E(r2, e2.port) || (n2 += `:${e2.port}`), `${n2}${t2.pathname}${t2.search}`;
    }
    function I(e2) {
      if (e2.includes("://")) return T(e2);
      const t2 = O(e2);
      return "*" === t2 || (!!v.test(t2) || (t2.includes("/") ? (function(e3) {
        const t3 = O(e3);
        if (!S.test(t3)) return false;
        const [r2] = t3.split("/");
        return void 0 !== r2 && m(r2, t3);
      })(t2) : x(t2) || k(t2)));
    }
    function A(e2) {
      if (M.has(e2)) return M.get(e2);
      M.size >= P && M.clear();
      const t2 = (function(e3) {
        const t3 = e3.trim();
        if (0 === t3.length) return;
        const r2 = t3.lastIndexOf("/");
        if (!t3.includes("://") && r2 > 0 && /^\d+$/.test(t3.slice(r2 + 1).trim())) {
          const e4 = `${O(t3.slice(0, r2))}/${t3.slice(r2 + 1).trim()}`;
          return I(e4) ? e4 : void 0;
        }
        if (f(t3) || t3.includes("#") || t3.includes("@")) return;
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
              if (!I(t4)) return;
              return t4;
            }
            {
              const t4 = C(e5);
              if (!I(t4)) return;
              return t4;
            }
          } catch {
            return;
          }
        } else if (t3.includes("/")) return;
        const o2 = t3.trim().toLowerCase(), s2 = (function(e4) {
          const t4 = e4.indexOf(":");
          if (-1 === t4) return e4;
          const r3 = e4.slice(t4 + 1);
          return /^\d+$/.test(r3) ? e4.slice(0, t4) : e4;
        })(o2);
        if (0 === s2.length || !I(s2)) return;
        if (s2 !== o2 && "*" === s2) return;
        return s2;
      })(e2);
      return M.set(e2, t2), t2;
    }
    const P = 2048, M = /* @__PURE__ */ new Map();
    /* @__PURE__ */ new Map();
    function R(e2) {
      return (e2 ?? []).flatMap((e3) => {
        const t2 = A(e3);
        return void 0 === t2 ? [] : [t2];
      });
    }
    function O(e2) {
      const t2 = e2.trim().toLowerCase();
      return t2.startsWith("[") && t2.endsWith("]") ? t2.slice(1, -1) : t2;
    }
    function D(e2) {
      return R(e2.mcpNetworkAllowlist);
    }
    function N(e2) {
      if (true === e2?.enabled && "no_sandbox" !== e2.mcpNetworkMode) return e2;
    }
  }