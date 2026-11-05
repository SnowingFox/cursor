// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 61771 range:4764913..4773352
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
61771: (e, t, r) => {
    "use strict";
    r.d(t, { G$: () => x, NC: () => S, OY: () => B, Qy: () => c, RJ: () => D, TI: () => n, TS: () => k, U_: () => _, sr: () => u, tl: () => C, uS: () => b, vI: () => d });
    const n = "cursor/requiresConfirmation";
    const s = "https://grok.com/connectors-oauth-exchange-code/", o = "https://x.com/i/connectors/oauth_callback", i = { provider: "google-workspace", clientRegistration: "static", unauthenticatedConnect: true, rejectsCustomSchemeRedirects: true, authorizationParams: { access_type: "offline", prompt: "select_account consent" } }, a = { provider: "x-money", clientRegistration: "static", rejectsCustomSchemeRedirects: true, unauthenticatedConnect: false, backendOnlyTokenExchange: true, registeredAppRedirectUris: [s, o] }, c = "x-cursor-auth", l = { notConnected: "scm_not_connected", tokenUnavailable: "scm_token_unavailable", tokenRejected: "scm_token_rejected", repoNotAccessible: "scm_repo_not_accessible", orgBlocked: "scm_org_blocked" };
    new Set(Object.values(l)), new Set(Object.values({ originNotEnabled: "origin_not_enabled", teamDisabled: "team_disabled", admissionRejected: "admission_rejected" }));
    function u(e2) {
      if (void 0 === e2) return;
      let t2;
      try {
        t2 = new URL(e2);
      } catch {
        return;
      }
      const r2 = /^\/rest-mcp\/([^/]+)\/mcp\/?$/.exec(t2.pathname);
      return r2?.[1];
    }
    function d(e2) {
      if ("object" != typeof e2 || null === e2) return {};
      const t2 = e2, r2 = "string" == typeof t2.cursor_client_id && t2.cursor_client_id.length > 0 ? t2.cursor_client_id : void 0;
      let n2;
      if ("object" == typeof t2.cursor_authorization_params && null !== t2.cursor_authorization_params) {
        const e3 = Object.entries(t2.cursor_authorization_params).filter((e4) => "string" == typeof e4[1]);
        e3.length > 0 && (n2 = Object.fromEntries(e3));
      }
      return { ...void 0 !== r2 ? { clientId: r2 } : {}, ...true === t2.cursor_omit_resource_indicator ? { omitResourceIndicator: true } : {}, ...true === t2.cursor_omit_consent_prompt ? { omitConsentPrompt: true } : {}, ...void 0 !== n2 ? { authorizationParams: n2 } : {}, ...true === t2.cursor_rejects_custom_scheme_redirects ? { rejectsCustomSchemeRedirects: true } : {}, ...true === t2.cursor_unauthenticated_connect ? { unauthenticatedConnect: true } : {}, ...true === t2.cursor_loopback_ipv4 ? { loopbackIpv4: true } : {}, ...true === t2.cursor_backend_only_token_exchange ? { backendOnlyTokenExchange: true } : {} };
    }
    const p = { provider: "grok-connectors", clientRegistration: "static", rejectsCustomSchemeRedirects: true, unauthenticatedConnect: false, scopes: ["grok-plugins:access", "offline_access"] }, m = /* @__PURE__ */ new Map([["gmailmcp.googleapis.com", { ...i, scopes: ["https://www.googleapis.com/auth/gmail.readonly", "https://www.googleapis.com/auth/gmail.compose", "https://www.googleapis.com/auth/gmail.modify"] }], ["drivemcp.googleapis.com", { ...i, scopes: ["https://www.googleapis.com/auth/drive.readonly", "https://www.googleapis.com/auth/drive.file"] }], ["calendarmcp.googleapis.com", { ...i, scopes: ["https://www.googleapis.com/auth/calendar.events", "https://www.googleapis.com/auth/calendar.calendarlist.readonly", "https://www.googleapis.com/auth/calendar.events.readonly", "https://www.googleapis.com/auth/calendar.events.freebusy"] }], ["docsmcp.googleapis.com", { ...i, scopes: ["https://www.googleapis.com/auth/documents"] }], ["sheetsmcp.googleapis.com", { ...i, scopes: ["https://www.googleapis.com/auth/spreadsheets"] }], ["slidesmcp.googleapis.com", { ...i, scopes: ["https://www.googleapis.com/auth/presentations"] }], ["bigquery.googleapis.com", { ...i, scopes: ["https://www.googleapis.com/auth/bigquery"] }], ["api.x.com", { provider: "x", clientRegistration: "static", unauthenticatedConnect: false, rejectsCustomSchemeRedirects: false, scopes: ["tweet.read", "users.read", "follows.read", "space.read", "mute.read", "like.read", "list.read", "list.write", "block.read", "block.write", "bookmark.read", "bookmark.write", "dm.read", "dm.write", "developer.billing.write", "developer.write", "offline.access"], pinsScopesOverConfiguredScopes: true }], ["mcp.money-dev.x.com", a], ["mcp.money-staging.x.com", a], ["mcp.money.x.com", a], ["connectors-gateway.grok.gcp.mouseion.dev", p], ["connectors-gateway.grok.com", p], ["mcp.hubspot.com", { provider: "hubspot", clientRegistration: "static", rejectsCustomSchemeRedirects: true, unauthenticatedConnect: false, backendOnlyTokenExchange: true }], ["setup.shopify.com", { provider: "shopify", clientRegistration: "static", unauthenticatedConnect: true, rejectsCustomSchemeRedirects: false }]]);
    function h(e2) {
      if (void 0 === e2) return;
      let t2;
      try {
        t2 = new URL(e2).hostname;
      } catch {
        return;
      }
      return (function(e3) {
        return m.get(e3.toLowerCase());
      })(t2);
    }
    function f(e2) {
      return e2.endsWith("/") ? e2 : `${e2}/`;
    }
    async function g(e2, t2) {
      if (void 0 === t2) return;
      const r2 = new URL(e2), n2 = new URL(t2);
      if (r2.origin !== n2.origin || !f(r2.pathname).startsWith(f(n2.pathname))) throw new Error(`Protected resource ${t2} does not match expected ${r2.href} (or origin)`);
      return n2;
    }
    const y = /^\/shops\/[A-Za-z0-9-]+\/mcp$/;
    function w(e2) {
      if (void 0 !== e2) try {
        return new URL(e2);
      } catch {
        return;
      }
    }
    async function v(e2, t2) {
      if (void 0 === t2) return;
      const r2 = new URL(e2), n2 = w(t2);
      if (!(void 0 !== n2 && n2.origin === r2.origin && (n2.pathname === r2.pathname || y.test(n2.pathname)))) throw new Error(`Protected resource ${t2} does not match expected ${r2.href} (or origin)`);
      return n2;
    }
    function _(e2) {
      if ((function(e3) {
        if (void 0 === e3) return false;
        let t3;
        try {
          t3 = new URL(e3);
        } catch {
          return false;
        }
        return "https:" === t3.protocol && "gtm-api.corp.anysphere.co" === t3.hostname && "" === t3.port && "/mcp" === t3.pathname;
      })(e2)) return async () => {
      };
      const t2 = w(e2);
      return void 0 !== t2 && (function(e3) {
        return "https:" === e3.protocol && "setup.shopify.com" === e3.hostname && "" === e3.port && "/mcp" === e3.pathname;
      })(t2) ? v : g;
    }
    function b(e2, t2) {
      const r2 = h(t2)?.authorizationParams;
      if (void 0 !== r2) for (const [t3, n2] of Object.entries(r2)) e2.searchParams.set(t3, n2);
    }
    function S(e2) {
      return "login.microsoftonline.com" === e2.hostname;
    }
    function k(e2) {
      const t2 = new Set(e2.searchParams.getAll("prompt").flatMap((e3) => e3.split(" ")).filter((e3) => "" !== e3 && "consent" !== e3));
      e2.searchParams.delete("prompt"), t2.size > 0 && e2.searchParams.set("prompt", [...t2].join(" "));
    }
    new Set([...m].filter(([, e2]) => "google-workspace" === e2.provider).map(([e2]) => e2));
    const x = "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/uploads/cursorlogomcpv3.svg", E = "https://www.cursor.com/agents/mcp/oauth/callback", I = "https://www.cursor.com/bot/mcp/oauth/callback";
    const T = "grokbot://mcp/oauth/callback", C = "http://localhost:8787/callback", P = "gb", A = "gd", R = [18787, 28787, 31787];
    function M(e2) {
      const t2 = new URL(C);
      return t2.port = String(e2), t2.toString();
    }
    new Map([[P, T], ["gw", s], [A, C], ["xa", o], ...R.map((e2) => [`${A}${e2}`, M(e2)])]);
    /* @__PURE__ */ new Map([[T, P], [I, P], [s, "gw"], [o, "xa"]]);
    function J(e2) {
      try {
        const t2 = new URL(e2);
        if ("http:" !== t2.protocol) return false;
        const r2 = t2.hostname;
        return "localhost" === r2 || "127.0.0.1" === r2 || "[::1]" === r2;
      } catch {
        return false;
      }
    }
    const O = "127.0.0.1";
    function B(e2) {
      const t2 = e2.redirectUrl ?? C;
      if (true !== e2.loopbackIpv4 || !J(t2)) return t2;
      const r2 = new URL(t2);
      return r2.hostname = O, r2.toString();
    }
    B({ loopbackIpv4: true });
    function D(e2) {
      const t2 = /* @__PURE__ */ new Set(), r2 = void 0 !== e2 && J(e2);
      return e2 && !r2 && t2.add(e2), t2.add(E), e2 === T && t2.add(I), t2.add(C), e2 && r2 && t2.add(e2), Array.from(t2);
    }
  }