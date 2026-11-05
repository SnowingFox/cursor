// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1771 range:178575..188501
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1771: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { G$: () => T, HY: () => H, HZ: () => s2, Hj: () => Y, NC: () => E, OY: () => W, Qy: () => l, RJ: () => G, TG: () => g, TI: () => n2, TS: () => x, U4: () => _, U_: () => S, Yv: () => J, aG: () => I, b0: () => U, ix: () => B, jQ: () => O, kG: () => z, nG: () => P, ny: () => V, qN: () => A, sr: () => p, tl: () => N, uS: () => k, vI: () => f });
    const n2 = "cursor/requiresConfirmation", o2 = { identifier: "cursor-origin", serverUrl: "https://api.origin.cursor.com/mcp" };
    function s2(e3) {
      return e3.identifier === o2.identifier && e3.serverUrl === o2.serverUrl;
    }
    const i2 = "https://grok.com/connectors-oauth-exchange-code/", a2 = "https://x.com/i/connectors/oauth_callback", c = { provider: "google-workspace", clientRegistration: "static", unauthenticatedConnect: true, rejectsCustomSchemeRedirects: true, authorizationParams: { access_type: "offline", prompt: "select_account consent" } }, u = { provider: "x-money", clientRegistration: "static", rejectsCustomSchemeRedirects: true, unauthenticatedConnect: false, backendOnlyTokenExchange: true, registeredAppRedirectUris: [i2, a2] }, l = "x-cursor-auth", d = { notConnected: "scm_not_connected", tokenUnavailable: "scm_token_unavailable", tokenRejected: "scm_token_rejected", repoNotAccessible: "scm_repo_not_accessible", orgBlocked: "scm_org_blocked" };
    new Set(Object.values(d)), new Set(Object.values({ originNotEnabled: "origin_not_enabled", teamDisabled: "team_disabled", admissionRejected: "admission_rejected" }));
    function p(e3) {
      if (void 0 === e3) return;
      let t3;
      try {
        t3 = new URL(e3);
      } catch {
        return;
      }
      const r3 = /^\/rest-mcp\/([^/]+)\/mcp\/?$/.exec(t3.pathname);
      return r3?.[1];
    }
    function f(e3) {
      if ("object" != typeof e3 || null === e3) return {};
      const t3 = e3, r3 = "string" == typeof t3.cursor_client_id && t3.cursor_client_id.length > 0 ? t3.cursor_client_id : void 0;
      let n3;
      if ("object" == typeof t3.cursor_authorization_params && null !== t3.cursor_authorization_params) {
        const e4 = Object.entries(t3.cursor_authorization_params).filter((e5) => "string" == typeof e5[1]);
        e4.length > 0 && (n3 = Object.fromEntries(e4));
      }
      return { ...void 0 !== r3 ? { clientId: r3 } : {}, ...true === t3.cursor_omit_resource_indicator ? { omitResourceIndicator: true } : {}, ...true === t3.cursor_omit_consent_prompt ? { omitConsentPrompt: true } : {}, ...void 0 !== n3 ? { authorizationParams: n3 } : {}, ...true === t3.cursor_rejects_custom_scheme_redirects ? { rejectsCustomSchemeRedirects: true } : {}, ...true === t3.cursor_unauthenticated_connect ? { unauthenticatedConnect: true } : {}, ...true === t3.cursor_loopback_ipv4 ? { loopbackIpv4: true } : {}, ...true === t3.cursor_backend_only_token_exchange ? { backendOnlyTokenExchange: true } : {} };
    }
    const h = { provider: "grok-connectors", clientRegistration: "static", rejectsCustomSchemeRedirects: true, unauthenticatedConnect: false, scopes: ["grok-plugins:access", "offline_access"] }, m = /* @__PURE__ */ new Map([["gmailmcp.googleapis.com", { ...c, scopes: ["https://www.googleapis.com/auth/gmail.readonly", "https://www.googleapis.com/auth/gmail.compose", "https://www.googleapis.com/auth/gmail.modify"] }], ["drivemcp.googleapis.com", { ...c, scopes: ["https://www.googleapis.com/auth/drive.readonly", "https://www.googleapis.com/auth/drive.file"] }], ["calendarmcp.googleapis.com", { ...c, scopes: ["https://www.googleapis.com/auth/calendar.events", "https://www.googleapis.com/auth/calendar.calendarlist.readonly", "https://www.googleapis.com/auth/calendar.events.readonly", "https://www.googleapis.com/auth/calendar.events.freebusy"] }], ["docsmcp.googleapis.com", { ...c, scopes: ["https://www.googleapis.com/auth/documents"] }], ["sheetsmcp.googleapis.com", { ...c, scopes: ["https://www.googleapis.com/auth/spreadsheets"] }], ["slidesmcp.googleapis.com", { ...c, scopes: ["https://www.googleapis.com/auth/presentations"] }], ["bigquery.googleapis.com", { ...c, scopes: ["https://www.googleapis.com/auth/bigquery"] }], ["api.x.com", { provider: "x", clientRegistration: "static", unauthenticatedConnect: false, rejectsCustomSchemeRedirects: false, scopes: ["tweet.read", "users.read", "follows.read", "space.read", "mute.read", "like.read", "list.read", "list.write", "block.read", "block.write", "bookmark.read", "bookmark.write", "dm.read", "dm.write", "developer.billing.write", "developer.write", "offline.access"], pinsScopesOverConfiguredScopes: true }], ["mcp.money-dev.x.com", u], ["mcp.money-staging.x.com", u], ["mcp.money.x.com", u], ["connectors-gateway.grok.gcp.mouseion.dev", h], ["connectors-gateway.grok.com", h], ["mcp.hubspot.com", { provider: "hubspot", clientRegistration: "static", rejectsCustomSchemeRedirects: true, unauthenticatedConnect: false, backendOnlyTokenExchange: true }], ["setup.shopify.com", { provider: "shopify", clientRegistration: "static", unauthenticatedConnect: true, rejectsCustomSchemeRedirects: false }]]);
    function g(e3) {
      if (void 0 === e3) return;
      let t3;
      try {
        t3 = new URL(e3).hostname;
      } catch {
        return;
      }
      return (function(e4) {
        return m.get(e4.toLowerCase());
      })(t3);
    }
    function y(e3) {
      return e3.endsWith("/") ? e3 : `${e3}/`;
    }
    async function _(e3, t3) {
      if (void 0 === t3) return;
      const r3 = new URL(e3), n3 = new URL(t3);
      if (r3.origin !== n3.origin || !y(r3.pathname).startsWith(y(n3.pathname))) throw new Error(`Protected resource ${t3} does not match expected ${r3.href} (or origin)`);
      return n3;
    }
    const v = /^\/shops\/[A-Za-z0-9-]+\/mcp$/;
    function w(e3) {
      if (void 0 !== e3) try {
        return new URL(e3);
      } catch {
        return;
      }
    }
    async function b(e3, t3) {
      if (void 0 === t3) return;
      const r3 = new URL(e3), n3 = w(t3);
      if (!(void 0 !== n3 && n3.origin === r3.origin && (n3.pathname === r3.pathname || v.test(n3.pathname)))) throw new Error(`Protected resource ${t3} does not match expected ${r3.href} (or origin)`);
      return n3;
    }
    function S(e3) {
      if ((function(e4) {
        if (void 0 === e4) return false;
        let t4;
        try {
          t4 = new URL(e4);
        } catch {
          return false;
        }
        return "https:" === t4.protocol && "gtm-api.corp.anysphere.co" === t4.hostname && "" === t4.port && "/mcp" === t4.pathname;
      })(e3)) return async () => {
      };
      const t3 = w(e3);
      return void 0 !== t3 && (function(e4) {
        return "https:" === e4.protocol && "setup.shopify.com" === e4.hostname && "" === e4.port && "/mcp" === e4.pathname;
      })(t3) ? b : _;
    }
    function k(e3, t3) {
      const r3 = g(t3)?.authorizationParams;
      if (void 0 !== r3) for (const [t4, n3] of Object.entries(r3)) e3.searchParams.set(t4, n3);
    }
    function E(e3) {
      return "login.microsoftonline.com" === e3.hostname;
    }
    function x(e3) {
      const t3 = new Set(e3.searchParams.getAll("prompt").flatMap((e4) => e4.split(" ")).filter((e4) => "" !== e4 && "consent" !== e4));
      e3.searchParams.delete("prompt"), t3.size > 0 && e3.searchParams.set("prompt", [...t3].join(" "));
    }
    new Set([...m].filter(([, e3]) => "google-workspace" === e3.provider).map(([e3]) => e3));
    const T = "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/uploads/cursorlogomcpv3.svg", O = "anysphere.cursor-mcp", P = "/oauth/callback", I = "/oauth/return", C = ["cursor"], A = "https://www.cursor.com/agents/mcp/oauth/callback", $ = "https://www.cursor.com/bot/mcp/oauth/callback";
    const R = "grokbot://mcp/oauth/callback", N = "http://localhost:8787/callback", M = "gb", J = "gd", j = ".t", D = [18787, 28787, 31787];
    function F(e3) {
      const t3 = new URL(N);
      return t3.port = String(e3), t3.toString();
    }
    const q = new Map([[M, R], ["gw", i2], [J, N], ["xa", a2], ...D.map((e3) => [`${J}${e3}`, F(e3)])]);
    /* @__PURE__ */ new Map([[R, M], [$, M], [i2, "gw"], [a2, "xa"]]);
    function z(e3, t3) {
      return `${e3}${j}${t3}`;
    }
    function U(e3) {
      if (null == e3) return;
      const t3 = e3.lastIndexOf(j);
      return -1 !== t3 ? q.get(e3.slice(t3 + j.length)) : void 0;
    }
    function B(e3) {
      const t3 = e3.lastIndexOf(j);
      return -1 !== t3 && q.has(e3.slice(t3 + j.length)) ? e3.slice(0, t3) : e3;
    }
    function L(e3) {
      return `${e3}://${O}${P}`;
    }
    function V(e3) {
      return Array.from(/* @__PURE__ */ new Set([...e3 ? [e3] : [], ...C])).map(L);
    }
    function K(e3) {
      try {
        const t3 = new URL(e3);
        if ("http:" !== t3.protocol) return false;
        const r3 = t3.hostname;
        return "localhost" === r3 || "127.0.0.1" === r3 || "[::1]" === r3;
      } catch {
        return false;
      }
    }
    const Z = "127.0.0.1";
    function W(e3) {
      const t3 = e3.redirectUrl ?? N;
      if (true !== e3.loopbackIpv4 || !K(t3)) return t3;
      const r3 = new URL(t3);
      return r3.hostname = Z, r3.toString();
    }
    W({ loopbackIpv4: true });
    function H(e3, t3) {
      if (void 0 === e3 || void 0 === t3 || 0 === t3.length) return false;
      try {
        const r3 = new URL(e3).hostname.toLowerCase();
        return t3.some((e4) => e4.toLowerCase() === r3);
      } catch {
        return false;
      }
    }
    function Y(e3) {
      const { echoed: t3, requested: r3 } = e3;
      return void 0 !== t3 && t3.length > 0 && t3.every((e4) => r3.includes(e4)) ? [...t3] : [...r3];
    }
    function G(e3) {
      const t3 = /* @__PURE__ */ new Set(), r3 = void 0 !== e3 && K(e3);
      return e3 && !r3 && t3.add(e3), t3.add(A), e3 === R && t3.add($), t3.add(N), e3 && r3 && t3.add(e3), Array.from(t3);
    }
  }