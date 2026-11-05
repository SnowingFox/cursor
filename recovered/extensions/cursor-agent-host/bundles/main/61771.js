// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 61771 range:9363909..9379708
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
61771: (e, t, r) => {
    "use strict";
    r.d(t, { A1: () => ae, AB: () => q, Au: () => Te, B0: () => je, BI: () => Y, Cg: () => ve, Di: () => x, Dr: () => C, Ds: () => c, EJ: () => ke, G$: () => z, Gr: () => w, HA: () => be, HK: () => ge, HY: () => Ue, HZ: () => l, Hg: () => H, Hj: () => Le, IQ: () => n, JY: () => Se, KM: () => me, MY: () => Re, Me: () => Pe, NC: () => Q, Ns: () => re, O6: () => b, OJ: () => De, OM: () => i, OY: () => Ne, Pe: () => ee, Pr: () => Je, QU: () => ue, Qy: () => g, RJ: () => $e, SN: () => Z, T8: () => h, TG: () => M, TI: () => s, TS: () => j, U4: () => O, U_: () => L, VX: () => te, XJ: () => a, Y3: () => S, Yv: () => de, ZD: () => J, _1: () => He, _S: () => Me, _X: () => se, aG: () => K, b0: () => Ie, cK: () => y, ex: () => Ge, fE: () => _e, fK: () => fe, fU: () => X, fj: () => ze, g$: () => pe, hH: () => Fe, it: () => u, ix: () => Ce, jO: () => f, jQ: () => W, k$: () => d, kG: () => Ee, kV: () => G, lV: () => Qe, n: () => Ve, nG: () => V, ns: () => _, ny: () => qe, o7: () => A, qN: () => ne, qZ: () => oe, sJ: () => le, sf: () => P, sr: () => T, tl: () => ce, u4: () => o, uS: () => $, ug: () => ie, vI: () => R, vp: () => Be, wU: () => xe, zl: () => We });
    const n = "••••••••", s = "cursor/requiresConfirmation", o = "https://api.origin.cursor.com/mcp", i = { identifier: "cursor-origin", serverUrl: "https://api.origin.cursor.com/mcp" }, a = "https://api.origin.cursor.com/mcp/readonly";
    function c(e2) {
      return e2 === o || e2 === a;
    }
    function l(e2) {
      return e2.identifier === i.identifier && e2.serverUrl === i.serverUrl;
    }
    const u = "https://grok.com/connectors-oauth-exchange-code/", d = "https://x.com/i/connectors/oauth_callback", p = { provider: "google-workspace", clientRegistration: "static", unauthenticatedConnect: true, rejectsCustomSchemeRedirects: true, authorizationParams: { access_type: "offline", prompt: "select_account consent" } }, m = { provider: "x-money", clientRegistration: "static", rejectsCustomSchemeRedirects: true, unauthenticatedConnect: false, backendOnlyTokenExchange: true, registeredAppRedirectUris: [u, d] }, h = "cursor.hostedMcpRouting.reportState", f = "api.cursor.com", g = "x-cursor-auth", y = { notConnected: "scm_not_connected", tokenUnavailable: "scm_token_unavailable", tokenRejected: "scm_token_rejected", repoNotAccessible: "scm_repo_not_accessible", orgBlocked: "scm_org_blocked" }, w = { originNotEnabled: "origin_not_enabled", teamDisabled: "team_disabled", admissionRejected: "admission_rejected" }, v = "cursor-", _ = ["github", "origin"], A = ["github"];
    function S(e2) {
      return `${v}${e2}`;
    }
    function b(e2) {
      return _.find((t2) => S(t2) === e2);
    }
    const E = new Set(Object.values(y)), I = new Set(Object.values(w));
    function C(e2) {
      const t2 = b(e2.emittingServerIdentifier);
      if (void 0 === t2) return;
      let r2;
      try {
        r2 = JSON.parse(e2.text);
      } catch {
        return;
      }
      if ("object" != typeof r2 || null === r2) return;
      const n2 = r2;
      if ("string" != typeof n2.error || !E.has(n2.error) || n2.provider !== t2) return;
      const s2 = n2.error, o2 = t2, i2 = "string" == typeof n2.repo ? { repo: n2.repo } : {};
      if (s2 !== y.orgBlocked) {
        const e3 = s2 === y.notConnected && "string" == typeof n2.reason && I.has(n2.reason) ? n2.reason : void 0;
        return { code: s2, provider: o2, ...i2, ...void 0 === e3 ? {} : { reason: e3 } };
      }
      const a2 = "string" == typeof n2.org && n2.org.length > 0 ? { org: n2.org } : {};
      switch (n2.reason) {
        case "sso_required": {
          const e3 = (function(e4, t3) {
            if ("string" != typeof t3) return;
            let r3;
            try {
              r3 = new URL(t3);
            } catch {
              return;
            }
            const n3 = k[e4];
            if (void 0 === n3 || "https:" !== r3.protocol || r3.hostname.toLowerCase() !== n3.hostname || !n3.pathname.test(r3.pathname) || r3.username.length > 0 || r3.password.length > 0) return;
            return r3.toString();
          })(t2, n2.authorizationUrl);
          return { code: s2, provider: o2, ...i2, ...a2, reason: "sso_required", ...void 0 === e3 ? {} : { authorizationUrl: e3 } };
        }
        case "ip_allowlist":
          return { code: s2, provider: o2, ...i2, ...a2, reason: "ip_allowlist" };
        default:
          return { code: s2, provider: o2, ...i2, ...a2 };
      }
    }
    const k = { github: { hostname: "github.com", pathname: /^\/orgs\/[^/]+\/sso$/ } };
    function x(e2) {
      if (void 0 === e2) return;
      let t2;
      try {
        t2 = new URL(e2);
      } catch {
        return;
      }
      return "https:" === t2.protocol && t2.hostname.toLowerCase() === f && "" === t2.port ? T(e2) : void 0;
    }
    function T(e2) {
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
    function R(e2) {
      if ("object" != typeof e2 || null === e2) return {};
      const t2 = e2, r2 = "string" == typeof t2.cursor_client_id && t2.cursor_client_id.length > 0 ? t2.cursor_client_id : void 0;
      let n2;
      if ("object" == typeof t2.cursor_authorization_params && null !== t2.cursor_authorization_params) {
        const e3 = Object.entries(t2.cursor_authorization_params).filter((e4) => "string" == typeof e4[1]);
        e3.length > 0 && (n2 = Object.fromEntries(e3));
      }
      return { ...void 0 !== r2 ? { clientId: r2 } : {}, ...true === t2.cursor_omit_resource_indicator ? { omitResourceIndicator: true } : {}, ...true === t2.cursor_omit_consent_prompt ? { omitConsentPrompt: true } : {}, ...void 0 !== n2 ? { authorizationParams: n2 } : {}, ...true === t2.cursor_rejects_custom_scheme_redirects ? { rejectsCustomSchemeRedirects: true } : {}, ...true === t2.cursor_unauthenticated_connect ? { unauthenticatedConnect: true } : {}, ...true === t2.cursor_loopback_ipv4 ? { loopbackIpv4: true } : {}, ...true === t2.cursor_backend_only_token_exchange ? { backendOnlyTokenExchange: true } : {} };
    }
    const B = { provider: "grok-connectors", clientRegistration: "static", rejectsCustomSchemeRedirects: true, unauthenticatedConnect: false, scopes: ["grok-plugins:access", "offline_access"] }, P = /* @__PURE__ */ new Map([["gmailmcp.googleapis.com", { ...p, scopes: ["https://www.googleapis.com/auth/gmail.readonly", "https://www.googleapis.com/auth/gmail.compose", "https://www.googleapis.com/auth/gmail.modify"] }], ["drivemcp.googleapis.com", { ...p, scopes: ["https://www.googleapis.com/auth/drive.readonly", "https://www.googleapis.com/auth/drive.file"] }], ["calendarmcp.googleapis.com", { ...p, scopes: ["https://www.googleapis.com/auth/calendar.events", "https://www.googleapis.com/auth/calendar.calendarlist.readonly", "https://www.googleapis.com/auth/calendar.events.readonly", "https://www.googleapis.com/auth/calendar.events.freebusy"] }], ["docsmcp.googleapis.com", { ...p, scopes: ["https://www.googleapis.com/auth/documents"] }], ["sheetsmcp.googleapis.com", { ...p, scopes: ["https://www.googleapis.com/auth/spreadsheets"] }], ["slidesmcp.googleapis.com", { ...p, scopes: ["https://www.googleapis.com/auth/presentations"] }], ["bigquery.googleapis.com", { ...p, scopes: ["https://www.googleapis.com/auth/bigquery"] }], ["api.x.com", { provider: "x", clientRegistration: "static", unauthenticatedConnect: false, rejectsCustomSchemeRedirects: false, scopes: ["tweet.read", "users.read", "follows.read", "space.read", "mute.read", "like.read", "list.read", "list.write", "block.read", "block.write", "bookmark.read", "bookmark.write", "dm.read", "dm.write", "developer.billing.write", "developer.write", "offline.access"], pinsScopesOverConfiguredScopes: true }], ["mcp.money-dev.x.com", m], ["mcp.money-staging.x.com", m], ["mcp.money.x.com", m], ["connectors-gateway.grok.gcp.mouseion.dev", B], ["connectors-gateway.grok.com", B], ["mcp.hubspot.com", { provider: "hubspot", clientRegistration: "static", rejectsCustomSchemeRedirects: true, unauthenticatedConnect: false, backendOnlyTokenExchange: true }], ["setup.shopify.com", { provider: "shopify", clientRegistration: "static", unauthenticatedConnect: true, rejectsCustomSchemeRedirects: false }]]);
    function J(e2) {
      return P.get(e2.toLowerCase());
    }
    function M(e2) {
      if (void 0 === e2) return;
      let t2;
      try {
        t2 = new URL(e2).hostname;
      } catch {
        return;
      }
      return J(t2);
    }
    function q(e2) {
      if (void 0 === e2) return false;
      let t2;
      try {
        t2 = new URL(e2);
      } catch {
        return false;
      }
      return "https:" === t2.protocol && "gtm-api.corp.anysphere.co" === t2.hostname && "" === t2.port && "/mcp" === t2.pathname;
    }
    function D(e2) {
      return e2.endsWith("/") ? e2 : `${e2}/`;
    }
    async function O(e2, t2) {
      if (void 0 === t2) return;
      const r2 = new URL(e2), n2 = new URL(t2);
      if (r2.origin !== n2.origin || !D(r2.pathname).startsWith(D(n2.pathname))) throw new Error(`Protected resource ${t2} does not match expected ${r2.href} (or origin)`);
      return n2;
    }
    const N = /^\/shops\/[A-Za-z0-9-]+\/mcp$/;
    function F(e2) {
      if (void 0 !== e2) try {
        return new URL(e2);
      } catch {
        return;
      }
    }
    async function U(e2, t2) {
      if (void 0 === t2) return;
      const r2 = new URL(e2), n2 = F(t2);
      if (!(void 0 !== n2 && n2.origin === r2.origin && (n2.pathname === r2.pathname || N.test(n2.pathname)))) throw new Error(`Protected resource ${t2} does not match expected ${r2.href} (or origin)`);
      return n2;
    }
    function L(e2) {
      if (q(e2)) return async () => {
      };
      const t2 = F(e2);
      return void 0 !== t2 && (function(e3) {
        return "https:" === e3.protocol && "setup.shopify.com" === e3.hostname && "" === e3.port && "/mcp" === e3.pathname;
      })(t2) ? U : O;
    }
    function $(e2, t2) {
      const r2 = M(t2)?.authorizationParams;
      if (void 0 !== r2) for (const [t3, n2] of Object.entries(r2)) e2.searchParams.set(t3, n2);
    }
    function Q(e2) {
      return "login.microsoftonline.com" === e2.hostname;
    }
    function j(e2) {
      const t2 = new Set(e2.searchParams.getAll("prompt").flatMap((e3) => e3.split(" ")).filter((e3) => "" !== e3 && "consent" !== e3));
      e2.searchParams.delete("prompt"), t2.size > 0 && e2.searchParams.set("prompt", [...t2].join(" "));
    }
    function G(e2, t2) {
      const r2 = M(e2);
      return true === r2?.pinsScopesOverConfiguredScopes ? r2.scopes ?? t2 : t2;
    }
    const H = new Set([...P].filter(([, e2]) => "google-workspace" === e2.provider).map(([e2]) => e2)), z = "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/uploads/cursorlogomcpv3.svg", W = "anysphere.cursor-mcp", V = "/oauth/callback", K = "/oauth/return", Y = `cursor://${W}${K}`, Z = "grokbot://app/v1/mcp/oauth/return", X = Z, ee = "sand://app/v1/mcp/oauth/return", te = [Y, Z, ee], re = ["cursor"], ne = "https://www.cursor.com/agents/mcp/oauth/callback", se = "https://www.cursor.com/bot/mcp/oauth/callback", oe = "OAuth state was created by a different Cursor account";
    function ie(e2) {
      try {
        const t2 = new URL(e2);
        if ("localhost" === t2.hostname || "127.0.0.1" === t2.hostname) return `${t2.origin}/agents/mcp/oauth/callback`;
      } catch {
      }
      return ne;
    }
    const ae = "grokbot://mcp/oauth/callback", ce = "http://localhost:8787/callback", le = "gb", ue = "gw", de = "gd", pe = "x-cursor-mcp-oauth-relayed-loopback", me = "xa", he = ".t", fe = [18787, 28787, 31787];
    function ge(e2) {
      const t2 = new URL(ce);
      return t2.port = String(e2), t2.toString();
    }
    const ye = `${he}${de}`, we = new Map([[le, ae], [ue, u], [de, ce], [me, d], ...fe.map((e2) => [`${de}${e2}`, ge(e2)])]);
    function ve(e2, t2) {
      if (e2.endsWith(ye) && fe.includes(t2)) return `${e2}${t2}`;
    }
    function _e(e2) {
      for (const t2 of fe) {
        const r2 = `${ye}${t2}`;
        if (e2.endsWith(r2)) return e2.slice(0, e2.length - String(t2).length);
      }
      return e2;
    }
    const Ae = /* @__PURE__ */ new Map([[ae, le], [se, le], [u, ue], [d, me]]);
    function Se(e2, t2) {
      return void 0 === t2 ? e2 : ne;
    }
    function be(e2) {
      if (null != e2) return Ae.get(e2);
    }
    function Ee(e2, t2) {
      return `${e2}${he}${t2}`;
    }
    function Ie(e2) {
      if (null == e2) return;
      const t2 = e2.lastIndexOf(he);
      return -1 !== t2 ? we.get(e2.slice(t2 + he.length)) : void 0;
    }
    function Ce(e2) {
      const t2 = e2.lastIndexOf(he);
      return -1 !== t2 && we.has(e2.slice(t2 + he.length)) ? e2.slice(0, t2) : e2;
    }
    const ke = "313336824172-o9ui5flcldhm6d0gp487a9vnnpo8unap.apps.googleusercontent.com", xe = "com.googleusercontent.apps.313336824172-o9ui5flcldhm6d0gp487a9vnnpo8unap:/oauth2redirect", Te = "253367402103-5sehq8pc5rha37tkd0om6tj1l1576slb.apps.googleusercontent.com", Re = "com.googleusercontent.apps.253367402103-5sehq8pc5rha37tkd0om6tj1l1576slb:/oauth2redirect";
    function Be(e2) {
      return te.some((t2) => t2 === e2);
    }
    const Pe = ["/codebase/apps/install"];
    function Je(e2) {
      if (!e2.startsWith("/") || e2.startsWith("//")) return false;
      if (e2.includes("://") || e2.includes("\\") || e2.includes("#")) return false;
      const t2 = e2.indexOf("?");
      return !(-1 === t2 ? e2 : e2.slice(0, t2)).includes("..") && Pe.some((t3) => e2 === t3 || e2.startsWith(`${t3}?`));
    }
    function Me(e2) {
      return `${e2}://${W}${V}`;
    }
    function qe(e2) {
      return Array.from(/* @__PURE__ */ new Set([...e2 ? [e2] : [], ...re])).map(Me);
    }
    function De(e2) {
      try {
        const t2 = new URL(e2);
        if ("http:" !== t2.protocol) return false;
        const r2 = t2.hostname;
        return "localhost" === r2 || "127.0.0.1" === r2 || "[::1]" === r2;
      } catch {
        return false;
      }
    }
    const Oe = "127.0.0.1";
    function Ne(e2) {
      const t2 = e2.redirectUrl ?? ce;
      if (true !== e2.loopbackIpv4 || !De(t2)) return t2;
      const r2 = new URL(t2);
      return r2.hostname = Oe, r2.toString();
    }
    const Fe = Ne({ loopbackIpv4: true });
    function Ue(e2, t2) {
      if (void 0 === e2 || void 0 === t2 || 0 === t2.length) return false;
      try {
        const r2 = new URL(e2).hostname.toLowerCase();
        return t2.some((e3) => e3.toLowerCase() === r2);
      } catch {
        return false;
      }
    }
    function Le(e2) {
      const { echoed: t2, requested: r2 } = e2;
      return void 0 !== t2 && t2.length > 0 && t2.every((e3) => r2.includes(e3)) ? [...t2] : [...r2];
    }
    function $e(e2) {
      const t2 = /* @__PURE__ */ new Set(), r2 = void 0 !== e2 && De(e2);
      return e2 && !r2 && t2.add(e2), t2.add(ne), e2 === ae && t2.add(se), t2.add(ce), e2 && r2 && t2.add(e2), Array.from(t2);
    }
    const Qe = "/oauth/mcp-client.json", je = `https://cursor.com${Qe}`, Ge = [ne, se, u, ce, Fe], He = { clientName: "Cursor", logoUri: z, metadataDocumentPath: Qe }, ze = "/oauth/grok-bot-mcp-client.json", We = { clientName: "Grok Bot", logoUri: "https://cursor.com/assets/sand-onboarding/grok-bot-icon.png", metadataDocumentPath: ze };
    function Ve(e2 = je, t2 = He) {
      return { client_id: e2, client_name: t2.clientName, client_uri: new URL(e2).origin, logo_uri: t2.logoUri, redirect_uris: Ge, grant_types: ["authorization_code", "refresh_token"], response_types: ["code"], token_endpoint_auth_method: "none" };
    }
  }