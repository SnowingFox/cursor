/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ddea8af7-3026-5ab0-8bc2-2bdd17741a2f");
  } catch (e10) {
  }
})();
var H2 = Object.create, ba = Object.defineProperty, B2 = Object.getOwnPropertyDescriptor, wa = Object.getOwnPropertyNames, z2 = Object.getPrototypeOf, W2 = Object.prototype.hasOwnProperty, Eh = (e, t) => (t = Symbol[e]) ? t : /* @__PURE__ */ Symbol.for("Symbol." + e), Ah = (e) => {
  throw TypeError(e);
}, k = (e, t) => function() {
  return e && (t = (0, e[wa(e)[0]])(e = 0)), t;
}, G2 = (e, t) => function() {
  return t || (0, e[wa(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, Rh = (e, t) => {
  for (var r in t) ba(e, r, { get: t[r], enumerable: true });
}, K2 = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function") for (let s of wa(t)) !W2.call(e, s) && s !== r && ba(e, s, { get: () => t[s], enumerable: !(n = B2(t, s)) || n.enumerable });
  return e;
}, q2 = (e, t, r) => (r = e != null ? H2(z2(e)) : {}, K2(t || !e || !e.__esModule ? ba(r, "default", { value: e, enumerable: true }) : r, e)), hr = (e, t, r) => {
  if (t != null) {
    typeof t != "object" && typeof t != "function" && Ah("Object expected");
    var n, s;
    r && (n = t[Eh("asyncDispose")]), n === void 0 && (n = t[Eh("dispose")], r && (s = n)), typeof n != "function" && Ah("Object not disposable"), s && (n = function() {
      try {
        s.call(this);
      } catch (i) {
        return Promise.reject(i);
      }
    }), e.push([r, n, t]);
  } else r && e.push([r]);
  return t;
}, fr = (e, t, r) => {
  var n = typeof SuppressedError == "function" ? SuppressedError : function(o, a, c, l) {
    return l = Error(c), l.name = "SuppressedError", l.error = o, l.suppressed = a, l;
  }, s = (o) => t = r ? new n(o, t, "An error was suppressed during disposal") : (r = true, o), i = (o) => {
    for (; o = e.pop(); ) try {
      var a = o[1] && o[1].call(o[2]);
      if (o[0]) return Promise.resolve(a).then(i, (c) => (s(c), i()));
    } catch (c) {
      s(c);
    }
    if (r) throw t;
  };
  return i();
};
function X(e, t, r, n) {
  var s = arguments.length, i = s < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(e, t, r, n);
  else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (i = (s < 3 ? o(i) : s > 3 ? o(t, r, i) : o(t, r)) || i);
  return s > 3 && i && Object.defineProperty(t, r, i), i;
}
function ai(e, t) {
  return function(r, n) {
    t(r, n, e);
  };
}
var h = k({ "tslib.es6.js"() {
} });
function Th(e) {
  const t = e.split(".");
  if (t.length !== 4) return;
  let r = li;
  for (const n of t) {
    if (!/^\d{1,3}$/.test(n)) return;
    const s = Number(n);
    if (!Number.isInteger(s) || s < 0 || s > 255) return;
    r = r << Mh | BigInt(s);
  }
  return { version: 4, value: r };
}
function Ea(e) {
  if (e.length === 0) return [];
  const t = [], r = e.split(":");
  for (let n = 0; n < r.length; n++) {
    const s = r[n];
    if (s.length === 0) return;
    if (s.includes(".")) {
      if (n !== r.length - 1) return;
      const i = Th(s);
      if (!i) return;
      t.push(Number(i.value >> ui & Ra)), t.push(Number(i.value & Ra));
      continue;
    }
    if (!/^[0-9a-f]{1,4}$/i.test(s)) return;
    t.push(Number.parseInt(s, 16));
  }
  return t;
}
function j2(e) {
  const t = Et(e);
  if (t.length === 0 || t.includes(":::")) return;
  const r = t.indexOf("::");
  if (r === -1) {
    const l = Ea(t);
    return !l || l.length !== 8 ? void 0 : { version: 6, value: l.reduce((u, d) => u << ui | BigInt(d), li) };
  }
  if (t.indexOf("::", r + 1) !== -1) return;
  const n = t.slice(0, r), s = t.slice(r + 2), i = Ea(n), o = Ea(s);
  if (!i || !o) return;
  const a = i.length + o.length;
  return a > 7 ? void 0 : { version: 6, value: [...i, ...new Array(8 - a).fill(0), ...o].reduce((l, u) => l << ui | BigInt(u), li) };
}
function kh(e) {
  return Th(e) ?? j2(e);
}
function V2(e) {
  const t = Et(e);
  if (t === "*") return { kind: "matchAll" };
  if (t.includes("/")) {
    const r = t.lastIndexOf("/");
    if (r <= 0 || r === t.length - 1) return { kind: "invalidCidr" };
    const n = kh(t.slice(0, r));
    if (!n) return { kind: "invalidCidr" };
    const s = Number(t.slice(r + 1)), i = n.version === 4 ? 32 : 128;
    if (!Number.isInteger(s) || s < 0 || s > i) return { kind: "invalidCidr" };
    const o = BigInt(i - s);
    return { kind: "cidr", version: n.version, shift: o, shiftedNetwork: n.value >> o };
  }
  return t.startsWith("*.") ? { kind: "subdomainOrBase", suffix: t.slice(2) } : { kind: "exact", value: t };
}
function Y2(e) {
  const t = Hn.get(e);
  if (t) return t;
  Hn.size >= di && Hn.clear();
  const r = V2(e);
  return Hn.set(e, r), r;
}
function X2(e) {
  if (Dr.has(e)) return Dr.get(e);
  Dr.size >= di && Dr.clear();
  const t = kh(e);
  return Dr.set(e, t), t;
}
function J2(e, t) {
  switch (t.kind) {
    case "matchAll":
      return true;
    case "invalidCidr":
      return false;
    case "cidr": {
      const r = X2(e);
      return r !== void 0 && r.version === t.version && r.value >> t.shift === t.shiftedNetwork;
    }
    case "subdomainOrBase":
      return e === t.suffix || e.endsWith(`.${t.suffix}`);
    case "exact":
      return e === t.value;
  }
}
function Z2(e, t) {
  return J2(Et(e), Y2(t));
}
function wt(e) {
  try {
    const t = new URL(e), r = new URL(t.pathname, t.origin);
    return r.search = t.search, r.pathname.endsWith("/") && r.pathname.length > 1 && (r.pathname = r.pathname.slice(0, -1)), r.pathname === "/" ? r.origin + r.search : r.toString();
  } catch {
    return e.toLowerCase().trim();
  }
}
function Ih(e) {
  return { transportServerUrl: e, canonicalServerUrl: wt(e) };
}
function Q2(e) {
  try {
    return new URL(wt(e)).hostname.toLowerCase();
  } catch {
    return;
  }
}
function eS(e) {
  const t = e.indexOf(":");
  if (t === -1) return e;
  const r = e.slice(t + 1);
  return /^\d+$/.test(r) ? e.slice(0, t) : e;
}
function tS(e) {
  return /\s/.test(e);
}
function Ph(e) {
  const t = Et(e);
  return t.length > 0 && t.length <= 253 && Dh.test(t);
}
function rS(e) {
  const t = Et(e);
  if (!$h.test(t)) return false;
  try {
    return new URL(`https://[${t}]`), true;
  } catch {
    return false;
  }
}
function Oh(e) {
  const t = Et(e);
  return Uh.test(t) || rS(t);
}
function Ch(e, t) {
  return t === "" || e === "http:" && t === "80" || e === "https:" && t === "443";
}
function nS(e) {
  const t = Et(e);
  if (!Fh.test(t)) return false;
  const [r] = t.split("/");
  return r !== void 0 && Z2(r, t);
}
function sS(e) {
  const t = e.toLowerCase();
  return !t.includes("*") && (Ph(t) || Oh(t));
}
function iS(e) {
  try {
    const t = new URL(e);
    return t.protocol !== "http:" && t.protocol !== "https:" || t.hostname.length === 0 || t.username.length > 0 || t.password.length > 0 || t.hash !== "" ? false : sS(t.hostname);
  } catch {
    return false;
  }
}
function Lh(e) {
  const t = new URL(e.pathname || "/", e.origin);
  if (t.search = e.search, t.pathname.endsWith("/") && t.pathname.length > 1 && (t.pathname = t.pathname.slice(0, -1)), t.pathname === "/" && t.search === "") {
    const i = e.protocol.toLowerCase(), o = e.hostname.toLowerCase();
    let a = `${i}//${o}`;
    return Ch(i, e.port) || (a += `:${e.port}`), a;
  }
  const r = e.protocol.toLowerCase(), n = e.hostname.toLowerCase();
  let s = `${r}//${n}`;
  return Ch(r, e.port) || (s += `:${e.port}`), `${s}${t.pathname}${t.search}`;
}
function ci(e) {
  if (e.includes("://")) return iS(e);
  const t = Et(e);
  return t === "*" || Nh.test(t) ? true : t.includes("/") ? nS(t) : Ph(t) || Oh(t);
}
function Aa(e) {
  if (Nr.has(e)) return Nr.get(e);
  Nr.size >= di && Nr.clear();
  const t = oS(e);
  return Nr.set(e, t), t;
}
function oS(e) {
  const t = e.trim();
  if (t.length === 0) return;
  const r = t.lastIndexOf("/");
  if (!t.includes("://") && r > 0 && /^\d+$/.test(t.slice(r + 1).trim())) {
    const o = Et(t.slice(0, r)), a = t.slice(r + 1).trim(), c = `${o}/${a}`;
    return ci(c) ? c : void 0;
  }
  if (tS(t) || t.includes("#") || t.includes("@")) return;
  const n = t.indexOf("://");
  if (n !== -1) {
    const o = t.slice(0, n).toLowerCase();
    if (o !== "http" && o !== "https") return;
    try {
      const a = new URL(t);
      if (a.hostname.length === 0 || a.username.length > 0 || a.password.length > 0) return;
      const c = a.pathname !== "/" && a.pathname !== "", l = a.search !== "";
      if (a.hostname.includes("*")) return;
      if (!c && !l) {
        const u = Lh(a);
        return ci(u) ? u : void 0;
      } else {
        const u = Lh(a);
        return ci(u) ? u : void 0;
      }
    } catch {
      return;
    }
  } else if (t.includes("/")) return;
  const s = t.trim().toLowerCase(), i = eS(s);
  if (!(i.length === 0 || !ci(i)) && !(i !== s && i === "*")) return i;
}
function aS(e) {
  return (e ?? []).flatMap((t) => {
    const r = Aa(t);
    return r === void 0 ? [] : [r];
  });
}
function Et(e) {
  const t = e.trim().toLowerCase();
  return t.startsWith("[") && t.endsWith("]") ? t.slice(1, -1) : t;
}
function cS(e) {
  return aS(e.mcpNetworkAllowlist);
}
function xh(e) {
  if (e?.enabled === true && e.mcpNetworkMode !== "no_sandbox") return e;
}
var li, Mh, ui, Ra, Hn, Dr, Bn, Dh, Nh, zn, Uh, $h, Fh, di, Nr, Qe = k({ "mcp-url-utils.ts"() {
  "use strict";
  h(), li = BigInt(0), Mh = BigInt(8), ui = BigInt(16), Ra = BigInt(65535), Hn = /* @__PURE__ */ new Map(), Dr = /* @__PURE__ */ new Map(), Bn = "[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?", Dh = new RegExp(`^(?:${Bn}\\.)*${Bn}$`), Nh = new RegExp(`^\\*\\.(?:${Bn}\\.)*${Bn}$`), zn = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)", Uh = new RegExp(`^${zn}(?:\\.${zn}){3}$`), $h = /^[0-9a-f:]+$/, Fh = new RegExp(`^(?:${zn}(?:\\.${zn}){3}|[0-9a-f:]+)\\/\\d{1,3}$`), di = 2048, Nr = /* @__PURE__ */ new Map();
} });
function Ta(e) {
  return e.identifier === Oa.identifier && e.serverUrl === Oa.serverUrl;
}
function ka(e) {
  if (e === void 0) return;
  let t;
  try {
    t = new URL(e);
  } catch {
    return;
  }
  return /^\/rest-mcp\/([^/]+)\/mcp\/?$/.exec(t.pathname)?.[1];
}
function lS(e) {
  if (typeof e != "object" || e === null) return {};
  const t = e, r = typeof t.cursor_client_id == "string" && t.cursor_client_id.length > 0 ? t.cursor_client_id : void 0;
  let n;
  if (typeof t.cursor_authorization_params == "object" && t.cursor_authorization_params !== null) {
    const s = Object.entries(t.cursor_authorization_params).filter((i) => typeof i[1] == "string");
    s.length > 0 && (n = Object.fromEntries(s));
  }
  return { ...r !== void 0 ? { clientId: r } : {}, ...t.cursor_omit_resource_indicator === true ? { omitResourceIndicator: true } : {}, ...t.cursor_omit_consent_prompt === true ? { omitConsentPrompt: true } : {}, ...n !== void 0 ? { authorizationParams: n } : {}, ...t.cursor_rejects_custom_scheme_redirects === true ? { rejectsCustomSchemeRedirects: true } : {}, ...t.cursor_unauthenticated_connect === true ? { unauthenticatedConnect: true } : {}, ...t.cursor_loopback_ipv4 === true ? { loopbackIpv4: true } : {}, ...t.cursor_backend_only_token_exchange === true ? { backendOnlyTokenExchange: true } : {} };
}
function uS(e) {
  return Ma.get(e.toLowerCase());
}
function Ia(e) {
  if (e === void 0) return;
  let t;
  try {
    t = new URL(e).hostname;
  } catch {
    return;
  }
  return uS(t);
}
function Hh(e) {
  return e.endsWith("/") ? e : `${e}/`;
}
async function Bh(e, t) {
  if (t === void 0) return;
  const r = new URL(e), n = new URL(t);
  if (r.origin !== n.origin || !Hh(r.pathname).startsWith(Hh(n.pathname))) throw new Error(`Protected resource ${t} does not match expected ${r.href} (or origin)`);
  return n;
}
function dS(e) {
  return e.hostname === "login.microsoftonline.com";
}
function hS(e) {
  const t = new Set(e.searchParams.getAll("prompt").flatMap((r) => r.split(" ")).filter((r) => r !== "" && r !== "consent"));
  e.searchParams.delete("prompt"), t.size > 0 && e.searchParams.set("prompt", [...t].join(" "));
}
function fS(e) {
  const t = new URL(st);
  return t.port = String(e), t.toString();
}
function pS(e, t) {
  return `${e}${pr}${t}`;
}
function gS(e) {
  if (e == null) return;
  const t = e.lastIndexOf(pr);
  if (t !== -1) return $a.get(e.slice(t + pr.length));
}
function _S(e) {
  const t = e.lastIndexOf(pr);
  return t === -1 || !$a.has(e.slice(t + pr.length)) ? e : e.slice(0, t);
}
function zh(e) {
  try {
    const t = new URL(e);
    if (t.protocol !== "http:") return false;
    const r = t.hostname;
    return r === "localhost" || r === "127.0.0.1" || r === "[::1]";
  } catch {
    return false;
  }
}
function Wh(e) {
  const t = e.redirectUrl ?? st;
  if (e.loopbackIpv4 !== true || !zh(t)) return t;
  const r = new URL(t);
  return r.hostname = Qh, r.toString();
}
function mS(e, t) {
  if (e === void 0 || t === void 0 || t.length === 0) return false;
  try {
    const r = new URL(e).hostname.toLowerCase();
    return t.some((n) => n.toLowerCase() === r);
  } catch {
    return false;
  }
}
function vS(e) {
  const t = /* @__PURE__ */ new Set(), r = e !== void 0 && zh(e);
  return e && !r && t.add(e), t.add(pi), e === Ua && t.add(Vh), t.add(st), e && r && t.add(e), Array.from(t);
}
var Pa, Oa, Ca, La, zt, hi, Gh, fi, Kh, qh, yS, SS, xa, Ma, bS, jh, Da, Na, wS, pi, Vh, Ua, st, Yh, Xh, Wn, Jh, pr, Zh, ES, $a, Qh, AS, ef, RS, TS = k({ "mcp.ts"() {
  "use strict";
  h(), Pa = "cursor/requiresConfirmation", Oa = { identifier: "cursor-origin", serverUrl: "https://api.origin.cursor.com/mcp" }, Ca = "https://grok.com/connectors-oauth-exchange-code/", La = "https://x.com/i/connectors/oauth_callback", zt = { provider: "google-workspace", clientRegistration: "static", unauthenticatedConnect: true, rejectsCustomSchemeRedirects: true, authorizationParams: { access_type: "offline", prompt: "select_account consent" } }, hi = { provider: "x-money", clientRegistration: "static", rejectsCustomSchemeRedirects: true, unauthenticatedConnect: false, backendOnlyTokenExchange: true, registeredAppRedirectUris: [Ca, La] }, Gh = { provider: "hubspot", clientRegistration: "static", rejectsCustomSchemeRedirects: true, unauthenticatedConnect: false, backendOnlyTokenExchange: true }, fi = "x-cursor-auth", Kh = { notConnected: "scm_not_connected", tokenUnavailable: "scm_token_unavailable", tokenRejected: "scm_token_rejected", repoNotAccessible: "scm_repo_not_accessible", orgBlocked: "scm_org_blocked" }, qh = { originNotEnabled: "origin_not_enabled", teamDisabled: "team_disabled", admissionRejected: "admission_rejected" }, yS = new Set(Object.values(Kh)), SS = new Set(Object.values(qh)), xa = { provider: "grok-connectors", clientRegistration: "static", rejectsCustomSchemeRedirects: true, unauthenticatedConnect: false, scopes: ["grok-plugins:access", "offline_access"] }, Ma = /* @__PURE__ */ new Map([["gmailmcp.googleapis.com", { ...zt, scopes: ["https://www.googleapis.com/auth/gmail.readonly", "https://www.googleapis.com/auth/gmail.compose", "https://www.googleapis.com/auth/gmail.modify"] }], ["drivemcp.googleapis.com", { ...zt, scopes: ["https://www.googleapis.com/auth/drive.readonly", "https://www.googleapis.com/auth/drive.file"] }], ["calendarmcp.googleapis.com", { ...zt, scopes: ["https://www.googleapis.com/auth/calendar.events", "https://www.googleapis.com/auth/calendar.calendarlist.readonly", "https://www.googleapis.com/auth/calendar.events.readonly", "https://www.googleapis.com/auth/calendar.events.freebusy"] }], ["docsmcp.googleapis.com", { ...zt, scopes: ["https://www.googleapis.com/auth/documents"] }], ["sheetsmcp.googleapis.com", { ...zt, scopes: ["https://www.googleapis.com/auth/spreadsheets"] }], ["slidesmcp.googleapis.com", { ...zt, scopes: ["https://www.googleapis.com/auth/presentations"] }], ["bigquery.googleapis.com", { ...zt, scopes: ["https://www.googleapis.com/auth/bigquery"] }], ["api.x.com", { provider: "x", clientRegistration: "static", unauthenticatedConnect: false, rejectsCustomSchemeRedirects: false, scopes: ["tweet.read", "users.read", "follows.read", "space.read", "mute.read", "like.read", "list.read", "list.write", "block.read", "block.write", "bookmark.read", "bookmark.write", "dm.read", "dm.write", "developer.billing.write", "developer.write", "offline.access"], pinsScopesOverConfiguredScopes: true }], ["mcp.money-dev.x.com", hi], ["mcp.money-staging.x.com", hi], ["mcp.money.x.com", hi], ["connectors-gateway.grok.gcp.mouseion.dev", xa], ["connectors-gateway.grok.com", xa], ["mcp.hubspot.com", Gh], ["setup.shopify.com", { provider: "shopify", clientRegistration: "static", unauthenticatedConnect: true, rejectsCustomSchemeRedirects: false }]]), bS = new Set([...Ma].filter(([, e]) => e.provider === "google-workspace").map(([e]) => e)), jh = "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/uploads/cursorlogomcpv3.svg", Da = "anysphere.cursor-mcp", Na = "/oauth/return", wS = `cursor://${Da}${Na}`, pi = "https://www.cursor.com/agents/mcp/oauth/callback", Vh = "https://www.cursor.com/bot/mcp/oauth/callback", Ua = "grokbot://mcp/oauth/callback", st = "http://localhost:8787/callback", Yh = "gb", Xh = "gw", Wn = "gd", Jh = "xa", pr = ".t", Zh = [18787, 28787, 31787], ES = `${pr}${Wn}`, $a = new Map([[Yh, Ua], [Xh, Ca], [Wn, st], [Jh, La], ...Zh.map((e) => [`${Wn}${e}`, fS(e)])]), Qh = "127.0.0.1", AS = Wh({ loopbackIpv4: true }), ef = "/oauth/mcp-client.json", RS = `https://cursor.com${ef}`;
} }), tf, kS, rf, IS, nf, PS, sf, OS, of, CS, af, LS, cf, xS, lf, MS, uf, DS, NS = k({ "permissions.ts"() {
  "use strict";
  h(), tf = { ReadSpend: "team.spend.read", ReadTeamMemberSpend: "team.member_spend.read", ReadPrivacyMode: "team.privacy_mode.read", ReadSsoConfiguration: "team.sso.read", ReadTeamRules: "team.rules.read", ManageTeamRules: "team.rules.manage", ReadTeamHooks: "team.hooks.read", ManageTeamHooks: "team.hooks.manage", ReadCommitMetrics: "team.commit_metrics.read", ManageDirectoryGroups: "team.directory_groups.manage", ManageProtectedGitScopes: "team.protected_git_scopes.manage", ReadBackgroundComposers: "team.background_composers.read", ListTeamBackgroundComposers: "team.background_composers.list", ManageTeamBackgroundComposers: "team.background_composers.manage", ManageFullSelfDriving: "team.full_self_driving.manage", ManagePublicProfileSettings: "team.public_profile_settings.manage", ManageMemberSpendLimits: "team.member_spend_limits.manage", ManageTeamMcpServers: "team.mcp_servers.manage", ManageScimConfiguration: "team.scim_configuration.manage", ManageBillingGroups: "team.billing_groups.manage", ReadGroups: "team.groups.read", ManageGroups: "team.groups.manage", ReadTeamMembers: "team.members.read", ManageTeamMembers: "team.members.manage", ReadTeamMembership: "team.membership.read", ReadTeamInvites: "team.invites.read", ManageTeamInvites: "team.invites.manage", ManageTeamApiKeys: "team.api_keys.manage", ReadTeamRepos: "team.repos.read", ManageTeamRepos: "team.repos.manage", ReadTeamSettings: "team.settings.read", ManageTeamSettings: "team.settings.manage", ReadTeamBilling: "team.billing.read", ManageTeamBilling: "team.billing.manage", ReadAuditLogs: "team.audit_logs.read", ReadTeamAnalytics: "team.analytics.read", ManageTeamAnalytics: "team.analytics.manage", ManageTeamPrivacy: "team.privacy.manage", ReadTeamCommands: "team.commands.read", ManageTeamCommands: "team.commands.manage", ReadBugbot: "team.bugbot.read", ManageBugbot: "team.bugbot.manage", ReadTeamSharingSettings: "team.sharing_settings.read", ManageTeamSharingSettings: "team.sharing_settings.manage", ManageTeamBackgroundAgentSettings: "team.background_agent_settings.manage", ReadTeamPlugins: "team.plugins.read", ManageTeamPlugins: "team.plugins.manage", ReadTeamIntegrations: "team.integrations.read", ManageTeamIntegrations: "team.integrations.manage", ReadDataExports: "team.data_exports.read", ReadGithubIdentityMappings: "team.github_identity_mappings.read" }, kS = Object.values(tf), rf = { ReadMembers: "organization.members.read", WriteMembers: "organization.members.write", ManageMemberships: "organization.memberships.manage", ManageOrganization: "organization.manage", ManageTeams: "organization.teams.manage", ReadGroups: "organization.groups.read", ManageGroups: "organization.groups.manage", ManageApiKeys: "organization.api_keys.manage", ManageIdentityProviders: "organization.identity_providers.manage", ReadSpend: "organization.spend.read", ReadAuditLogs: "organization.audit_logs.read", ReadBilling: "organization.billing.read" }, IS = Object.values(rf), nf = { ReadAgentStore: "agent_store.read", WriteAgentStore: "agent_store.write", ShareAgentStore: "agent_store.share" }, PS = Object.values(nf), sf = { ReadAgentStoreShare: "agent_store_share.read" }, OS = Object.values(sf), of = { ReadGrokBotTemplate: "grok_bot_template.read", WriteGrokBotTemplate: "grok_bot_template.write", ShareGrokBotTemplate: "grok_bot_template.share", DeleteGrokBotTemplate: "grok_bot_template.delete" }, CS = Object.values(of), af = { ManageGrokBotAgent: "grok_bot_agent.manage", UseGrokBotAgent: "grok_bot_agent.use" }, LS = Object.values(af), cf = { ManageKeyring: "keyring.manage", AttachKeyring: "keyring.attach" }, xS = Object.values(cf), lf = { ManageEnvironmentSecurity: "environment.security.manage", ManageEnvironmentWorkload: "environment.workload.manage", UseEnvironment: "environment.use" }, MS = Object.values(lf), uf = { ReadAgentServeDeployment: "agent_serve_deployment.read", DeployAgentServeDeployment: "agent_serve_deployment.deploy", ManageAgentServeDeploymentSecrets: "agent_serve_deployment.secrets", ManageAgentServeDeploymentAccess: "agent_serve_deployment.manage_access" }, DS = Object.values(uf);
} }), Be = k({ "index.ts"() {
  h(), TS(), NS();
} });
function Fa(e, t) {
  return t?.[Pa] !== true ? e : { ...e, [Pa]: true };
}
var Ha = k({ "mcp-tool-annotations.ts"() {
  "use strict";
  h(), Be();
} }), gi, df = k({ "async-cache.ts"() {
  "use strict";
  h(), gi = class {
    constructor(e = 1e3 * 60 * 60 * 24) {
      this.ttl = e, this.staleDirty = false, this.refreshGeneration = 0;
    }
    async get(e) {
      const t = performance.now();
      if (this.state && this.state.expiresAt > t && !this.staleDirty) return this.state.value;
      if (this.staleDirty && this.state) {
        const n = this.state.value;
        if (!this.refreshInFlight) {
          const s = this.refreshGeneration;
          let i;
          i = (async () => {
            try {
              const o = await e();
              if (s !== this.refreshGeneration) return;
              this.state = { expiresAt: performance.now() + this.ttl, value: o }, this.staleDirty = false;
            } catch {
            } finally {
              i && this.refreshInFlight === i && (this.refreshInFlight = void 0);
            }
          })(), this.refreshInFlight = i;
        }
        return n;
      }
      const r = await e();
      return this.state = { expiresAt: performance.now() + this.ttl, value: r }, this.staleDirty = false, r;
    }
    invalidate() {
      this.refreshGeneration++, this.state = void 0, this.staleDirty = false, this.refreshInFlight = void 0;
    }
    invalidateKeepingStale() {
      this.state && (this.staleDirty = true);
    }
  };
} });
async function US(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  let n;
  for (let s = 1; ; s++) {
    const i = await e.fetchPage(n), o = e.itemsOf(i);
    t.push(...o);
    const a = e.nextCursorOf(i);
    if (!a || r.has(a)) return t;
    if (s >= Ba) throw new Error(`MCP list did not end after ${Ba} pages; refusing to keep paging`);
    r.add(a), n = a;
  }
}
var Ba, hf = k({ "collect-paginated-mcp-list.ts"() {
  "use strict";
  h(), Ba = 1e3;
} });
function $S(e) {
  ff = e;
}
function Ur(e) {
  return ff?.getLogger(e) ?? pf;
}
var ff, pf, $r = k({ "logger.ts"() {
  "use strict";
  h(), pf = { info: () => {
  }, warn: () => {
  }, error: () => {
  }, debug: () => {
  } };
} });
function FS(e) {
  const t = Ur(e.identifier);
  if (e.level === "error") {
    const r = e.error instanceof Error ? e.error : e.error !== void 0 ? new Error(String(e.error)) : void 0;
    t.error(e.message, r, e.metadata);
    return;
  }
  if (e.level === "warn") {
    t.warn(e.message, e.metadata);
    return;
  }
  if (e.level === "debug") {
    t.debug?.(e.message, e.metadata);
    return;
  }
  t.info(e.message, e.metadata);
}
function za(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function HS(e) {
  try {
    const t = new URL(e);
    return { host: t.host, origin: t.origin, pathname: t.pathname };
  } catch {
    return { host: null, origin: null, pathname: null };
  }
}
function Gn(e, t) {
  const r = HS(e), n = t?.includePath !== false;
  return { host: r.host, origin: r.origin, path: n ? r.pathname : null };
}
function gf(e, t) {
  const r = Gn(e, t), n = { host: r.host, origin: r.origin };
  for (const s of t?.duplicateHostAs ?? []) n[s] = r.host;
  return n;
}
function _f(e, t) {
  return Gn(e, t);
}
function mf(e, t) {
  return Gn(e, t);
}
function BS(e) {
  return { mcpAuthMeta: e };
}
var Wt = k({ "log-metadata.ts"() {
  "use strict";
  h(), $r();
} });
function vf(e) {
  const t = new TextEncoder().encode(e);
  let r = "";
  for (const s of t) r += String.fromCharCode(s);
  return (typeof btoa == "function" ? btoa(r) : Buffer.from(t).toString("base64")).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/u, "");
}
function zS(e) {
  const t = e.padEnd(Math.ceil(e.length / 4) * 4, "=").replace(/-/g, "+").replace(/_/g, "/"), r = typeof atob == "function" ? atob(t) : Buffer.from(t, "base64").toString("binary"), n = Uint8Array.from(r, (s) => s.charCodeAt(0));
  return new TextDecoder().decode(n);
}
var Wa = k({ "base64url.ts"() {
  "use strict";
  h();
} });
function Re({ baseKey: e, identifier: t }) {
  return `[${t}] ${e}`;
}
function _i({ baseKey: e, serverUrl: t }) {
  const r = wt(t);
  return `[url:${vf(r)}] ${e}`;
}
function Ga(e) {
  return `[oauth-attempt:${e}] ${te.OAUTH_ATTEMPT_CLIENT_SECRET}`;
}
function Fr(e) {
  return `[oauth-attempt:${e}] ${te.CODE_VERIFIER}`;
}
var te, Ka = k({ "mcp-oauth-keys.ts"() {
  "use strict";
  h(), Qe(), Wa(), Wa(), te = { CODE_VERIFIER: "mcp_code_verifier", SERVER_URL: "mcp_server_url", TOKENS: "mcp_tokens", CLIENT_INFORMATION: "mcp_client_information", OAUTH_RETENTION: "mcp_oauth_retention", OAUTH_ATTEMPT: "mcp_oauth_attempt", OAUTH_ATTEMPT_CLIENT_SECRET: "mcp_oauth_attempt_client_secret", UPDATED_AT: "mcp_oauth_updated_at_ms", GRANT_HOLD: "mcp_grant_hold" };
} });
function yf(e, t) {
  const r = e?.access_token, n = typeof r == "string" ? r.length : 0, s = !!e?.refresh_token, i = typeof e?.expires_in == "number" && Number.isFinite(e.expires_in) ? e.expires_in : null, o = t?.expiresInIsFresh && i !== null ? Date.now() + Math.round(i * 1e3) : null, a = typeof e?.scope == "string" && e.scope.length > 0 ? e.scope : null;
  return { accessTokenLen: n, refreshTokenPresent: s, expiresAtTimestamp: o, grantedScope: a };
}
function Sf(e) {
  return gf(e, { includePath: false, duplicateHostAs: ["serverUrlHost"] });
}
function WS(e) {
  return gf(e, { includePath: false, duplicateHostAs: ["authUrlHost"] });
}
function GS(e) {
  const t = {};
  return e.processRegistryKey && (t.processRegistryKey = e.processRegistryKey), e.activeIdentifier && (t.activeIdentifier = e.activeIdentifier), e.resolvedConfigHash && (t.resolvedConfigHash = e.resolvedConfigHash), t;
}
function KS(e) {
  return e.isDefaultProfile || !e.profileId ? "profile:default" : `profile:${e.profileId}`;
}
function bf(e) {
  const r = (e.startsWith("[profile:") ? e.replace(/^\[profile:[^\]]+\] /, "") : e).match(/^\[([^\]]+)\] /);
  if (!r) return;
  const n = r[1];
  if (!(n.startsWith("url:") || n.startsWith("oauth-attempt:"))) return n;
}
function qS(e) {
  return (e.startsWith("[profile:") ? e.replace(/^\[profile:[^\]]+\] /, "") : e).match(/^\[url:([^\]]+)\] /)?.[1];
}
function jS(e) {
  const t = bf(e);
  if (t) return t;
  const r = qS(e);
  return r ? `url:${r}` : "unknown";
}
function wf(e) {
  return e.includes(te.TOKENS) ? "tokens" : e.includes(te.CLIENT_INFORMATION) ? "client_information" : e.includes(te.CODE_VERIFIER) ? "verifier" : "multiple";
}
function me(e) {
  FS({ identifier: e.identifier, level: e.level ?? "info", message: e.message ?? Ef[e.event], metadata: BS({ event: e.event, commandsVersion: e.commandsVersion ?? "process", mcpOAuthOwner: e.mcpOAuthOwner ?? "mcp_process", ...e.fields ?? {} }), error: e.error });
}
function Hr(e) {
  me({ identifier: e.identifier, event: "mcp_oauth_credentials_cleared", level: e.level ?? "debug", commandsVersion: e.commandsVersion, mcpOAuthOwner: e.mcpOAuthOwner, fields: { reason: e.reason, clearScope: e.clearScope, storageKey: e.storageKey, hadRefreshToken: e.hadRefreshToken, ...e.fields ?? {} } });
}
var Ef, Af = k({ "oauth-log-events.ts"() {
  "use strict";
  h(), Wt(), Ka(), Ef = { mcp_oauth_callback_completion: "MCP OAuth callback exchange completed", mcp_oauth_token_save: "MCP OAuth tokens persisted", mcp_oauth_token_client_binding_mismatch: "MCP OAuth token client binding mismatch", mcp_oauth_tokens_returned: "MCP OAuth tokens returned to SDK", mcp_oauth_refresh_prepare: "MCP OAuth refresh prepared", mcp_oauth_refresh_error: "MCP OAuth refresh error", mcp_oauth_refresh_result: "MCP OAuth refresh result", mcp_oauth_refresh_lease_acquired: "MCP OAuth refresh lock acquired", mcp_oauth_refresh_lease_waiting: "MCP OAuth refresh lock held by sibling", mcp_oauth_refresh_lease_wait_complete: "MCP OAuth refresh lock released by sibling", mcp_oauth_refresh_lease_released: "MCP OAuth refresh lock released", mcp_oauth_refresh_lease_heartbeat_renewed: "MCP OAuth refresh lock heartbeat renewed", mcp_oauth_refresh_lease_heartbeat_lost: "MCP OAuth refresh lock heartbeat lost", mcp_oauth_sibling_refresh_detected: "MCP OAuth sibling already refreshed", mcp_oauth_invalidate_credentials_skipped: "MCP OAuth invalidate skipped — preserving tokens", mcp_oauth_sdk_refresh_catch_branch: "MCP OAuth SDK refresh catch branch", mcp_oauth_invalidate_credentials: "MCP OAuth credentials invalidated", mcp_oauth_credentials_cleared: "MCP OAuth credentials cleared (local housekeeping)", mcp_oauth_redirect: "MCP OAuth redirect" };
} });
import { createHash as VS } from "crypto";
function Kn(e) {
  if (e) return VS("sha256").update(e).digest("hex").slice(0, 12);
}
function YS(e) {
  const t = e.message?.toLowerCase(), r = e.code?.toLowerCase();
  if (t?.includes("timed out") || t?.includes("timeout") || t?.includes("etimedout") || r === "etimedout") return "timeout";
  if (t?.includes("enotfound") || t?.includes("eai_again") || t?.includes("dns") || r === "enotfound" || r === "eai_again") return "dns";
  if (t?.includes("certificate") || t?.includes("tls") || t?.includes("ssl")) return "tls";
  if (t?.includes("econnreset") || t?.includes("connection reset") || r === "econnreset") return "connection_reset";
  if (t?.includes("econnrefused") || t?.includes("connection refused") || r === "econnrefused") return "connection_refused";
}
function Gt(e, t) {
  let r = e;
  for (const n of t) {
    if (typeof r != "object" || r === null || !(n in r)) return;
    r = r[n];
  }
  return r;
}
function Rf(e, t) {
  for (const r of t) if (typeof Gt(e, r.split(".")) == "string") return Gt(e, r.split("."));
}
function Tf(e) {
  if (!e || typeof e != "object") return;
  const t = e.errorCode;
  return typeof t == "string" ? t : void 0;
}
function XS(e, t) {
  for (const r of t) {
    const n = Gt(e, r.split("."));
    if (typeof n == "number" && Number.isFinite(n)) return n;
  }
}
function kf(e) {
  if (!e) return;
  const t = e.match(/\(HTTP (\d+)\)|Non-200 status code \((\d+)\)|\bHTTP\s+(\d{3})\b/i), r = t?.[1] ?? t?.[2] ?? t?.[3];
  if (!r) return;
  const n = Number.parseInt(r, 10);
  return Number.isNaN(n) ? void 0 : n;
}
function qa(e) {
  if (e instanceof Error) {
    const t = e.message;
    return t && t !== e.name ? Br(t) : void 0;
  }
  if (e != null) {
    const t = String(e);
    return t ? Br(t) : void 0;
  }
}
function If(e) {
  if (!(!e || typeof e != "object")) return e.cause;
}
function JS(e, t = 4) {
  const r = [];
  let n = e;
  for (let s = 0; s < t && n != null; s++) {
    if (n instanceof Error) {
      const i = qa(n);
      r.push(i ? `${n.name}: ${i}` : n.name), n = If(n);
      continue;
    }
    r.push(Br(String(n)));
    break;
  }
  return r.length > 1 ? r.join(" > ") : void 0;
}
function ZS(e) {
  const t = e.toLowerCase();
  return t === "code" || t === "authorization" || t.includes("token") || t.includes("secret") || t.includes("password") || t.includes("assertion") || t.includes("verifier") || t.includes("challenge") || Of.test(t);
}
function ja(e) {
  return e.replace(/((?:access_token|refresh_token|id_token|client_secret|authorization|code|password|assertion|token|secret)[^:=\r\n]{0,32}[:=]\s*["']?)([^"',\s&}]+)/gi, `$1${mi}`).replace(/(\bBearer\s+)([A-Za-z0-9\-._~+/]+=*)/gi, `$1${mi}`);
}
function Va(e, t = 256) {
  return e.length > t ? `${e.slice(0, Math.max(0, t - 3))}...` : e;
}
function Br(e, t) {
  return Va(ja(e), t?.maxLength);
}
function QS(e) {
  return Pf(e);
}
function Pf(e) {
  if (typeof e == "string") return Va(ja(e));
  if (e !== void 0) try {
    const t = JSON.stringify(e, (r, n) => r && ZS(r) ? mi : typeof n == "string" ? ja(n) : n);
    return t ? Va(t) : void 0;
  } catch {
    return;
  }
}
function e5(e) {
  if (!e || typeof e != "object") return;
  const t = [e.response, e.cause?.response];
  for (const r of t) if (r && typeof r == "object" && "status" in r && typeof r.status == "number" && "headers" in r && typeof r.headers?.get == "function") return r;
}
function Ya(e) {
  const t = If(e), r = e instanceof Error ? e.name : e != null ? typeof e : void 0, n = t instanceof Error ? t.name : void 0, s = qa(t), i = qa(e) ?? s, o = Rf(e, ["code", "cause.code"]), a = Tf(e) ?? Tf(t) ?? Rf(e, ["errorCode", "error", "cause.errorCode", "cause.error", "body.error", "response.body.error"]), c = XS(e, ["status", "statusCode", "response.status", "response.statusCode", "cause.status", "cause.statusCode", "cause.response.status", "cause.response.statusCode"]) ?? kf(i) ?? kf(s), l = Pf(Gt(e, ["response", "body"]) ?? Gt(e, ["body"]) ?? Gt(e, ["data"]) ?? Gt(e, ["cause", "body"]) ?? Gt(e, ["cause", "response", "body"])), u = YS({ message: i, code: o }), d = a ? "oauth_error" : u ? "auth_transport_error" : i ? "generic_error" : void 0;
  return za({ errorName: r, errorMessage: i, errorType: e != null ? typeof e : void 0, httpStatus: c, oauthErrorCode: a, errorResponseSummary: l, networkClassification: u, causeName: n, causeMessage: s, causeChain: JS(e), sdkErrorKind: d });
}
var mi, Of, Xa = k({ "oauth-logging.ts"() {
  "use strict";
  h(), Wt(), Wt(), Af(), mi = "[REDACTED]", Of = /(^|_|-)(token|secret|password|assertion|authorization|verifier|challenge|code)(_|-|$)/i;
} });
function Cf(e) {
  return typeof e == "object" && e !== null && "url" in e && typeof e.url == "string";
}
function Lf(e) {
  return typeof e == "string" ? e : e instanceof URL ? e.toString() : e.url;
}
function t5(e, t) {
  const r = new Headers(Cf(e) ? e.headers : void 0);
  return new Headers(t?.headers).forEach((s, i) => {
    r.set(i, s);
  }), r;
}
function xf(e) {
  const t = [];
  return e.forEach((r, n) => {
    t.push(n);
  }), t.sort();
}
function At(e) {
  if (e === null) return null;
  const t = Number.parseInt(e, 10);
  return Number.isNaN(t) ? null : t;
}
function r5(e, t) {
  if (e == null) return { kind: "none", bytes: 0, contentLength: At(t.get("content-length")) };
  if (typeof e == "string") {
    const r = new TextEncoder().encode(e).length;
    return { kind: "text", bytes: r, contentLength: At(t.get("content-length")) ?? r };
  }
  if (e instanceof URLSearchParams) {
    const r = e.toString(), n = new TextEncoder().encode(r).length;
    return { kind: "text", bytes: n, contentLength: At(t.get("content-length")) ?? n };
  }
  return e instanceof Blob ? { kind: "blob", bytes: e.size, contentLength: At(t.get("content-length")) ?? e.size } : e instanceof ArrayBuffer ? { kind: "binary", bytes: e.byteLength, contentLength: At(t.get("content-length")) ?? e.byteLength } : ArrayBuffer.isView(e) ? { kind: "binary", bytes: e.byteLength, contentLength: At(t.get("content-length")) ?? e.byteLength } : typeof e == "object" && e !== null && ("getReader" in e || Symbol.asyncIterator in e) ? { kind: "stream", bytes: null, contentLength: At(t.get("content-length")) } : { kind: "unknown", bytes: null, contentLength: At(t.get("content-length")) };
}
function n5(e, t) {
  for (const r of e.split("&")) {
    const n = r.indexOf("="), s = n >= 0 ? r.slice(0, n) : r;
    let i;
    try {
      i = decodeURIComponent(s.replaceAll("+", " "));
    } catch {
      return;
    }
    if (i !== t) continue;
    const o = n >= 0 ? r.slice(n + 1) : "";
    try {
      return decodeURIComponent(o.replaceAll("+", " "));
    } catch {
      return;
    }
  }
}
function s5(e) {
  switch (e) {
    case "authorization_code":
    case "refresh_token":
    case "client_credentials":
    case "urn:ietf:params:oauth:grant-type:jwt-bearer":
    case "urn:ietf:params:oauth:grant-type:token-exchange":
      return e;
    default:
      return "other";
  }
}
function Ja(e, t) {
  if (e === null || !e.toLowerCase().startsWith("application/x-www-form-urlencoded")) return;
  const r = typeof t == "string" ? n5(t, "grant_type") : t instanceof URLSearchParams ? t.get("grant_type") ?? void 0 : void 0;
  return r ? s5(r) : void 0;
}
function Za(e) {
  const { input: t, init: r } = e, n = Lf(t), s = Gn(n), i = t5(t, r), o = xf(i), a = i.get("content-type"), c = Kn(i.get("mcp-session-id") ?? void 0), l = i.get("authorization"), u = l ? l.split(/\s+/, 1)[0] ?? null : null;
  return { method: (r?.method ?? (Cf(t) ? t.method : void 0) ?? "GET").toUpperCase(), url: s, headers: { names: o, count: o.length }, contentType: a, body: r5(r?.body, i), sessionIdHash: c ?? null, authorizationScheme: u };
}
function Mf(e, t) {
  const r = xf(e.headers), n = At(e.headers.get("content-length"));
  return { status: e.status, ok: e.ok, headers: { names: r, count: r.length }, contentType: e.headers.get("content-type"), body: { kind: e.body === null ? "none" : "stream", bytes: e.body === null ? 0 : n, contentLength: n, ...t !== void 0 ? { errorSummary: t } : {} }, sessionIdHash: Kn(e.headers.get("mcp-session-id") ?? void 0) ?? null, wwwAuthenticateHash: Kn(e.headers.get("www-authenticate") ?? void 0) ?? null, mcpProtocolVersion: e.headers.get("mcp-protocol-version") ?? null, requestId: e.headers.get("x-request-id") ?? null };
}
function i5(e) {
  const t = {};
  return e.errorName !== void 0 && (t.name = e.errorName), e.errorMessage !== void 0 && (t.message = e.errorMessage), e.errorType !== void 0 && (t.type = e.errorType), e.oauthErrorCode !== void 0 && (t.oauthErrorCode = e.oauthErrorCode), e.errorResponseSummary !== void 0 && (t.responseSummary = e.errorResponseSummary), e.networkClassification !== void 0 && (t.networkClassification = e.networkClassification), e.sdkErrorKind !== void 0 && (t.sdkErrorKind = e.sdkErrorKind), t;
}
function o5(e) {
  const { input: t, init: r, response: n, durationMs: s, metadata: i, responseErrorSummary: o, oauthTokenErrorBodySummary: a } = e, c = Za({ input: t, init: r }), l = Ja(c.contentType, r?.body);
  return { event: "mcp_http_exchange", outcome: n.ok ? "success" : "http_error", durationMs: s, cursorMcp: { transport: { ...i, request: c, response: Mf(n, o), ...l !== void 0 ? { oauth: { grantType: l } } : {}, ...a !== void 0 ? { oauthTokenErrorBodySummary: a } : {} } } };
}
function Df(e, t) {
  const r = Za({ input: e, init: t });
  if (Ja(r.contentType, t?.body) !== void 0) return true;
  const n = r.url.path?.toLowerCase() ?? "";
  return n.endsWith("/token") || n.includes("/oauth/token") || n.includes("/connect/token");
}
async function Nf(e, t) {
  try {
    const r = await e.clone().text();
    return r.length > t ? r.slice(0, t) : r;
  } catch {
    return;
  }
}
function a5(e) {
  const t = Gn(Lf(e.input)).path;
  if (!f5(t)) return Br(e.rawText, { maxLength: zr });
  try {
    const r = JSON.parse(e.rawText);
    return typeof r == "object" && r !== null ? p5(r) : void 0;
  } catch {
    return;
  }
}
async function c5(e) {
  if (!Df(e.input, e.init)) return;
  const t = await Nf(e.response, zr);
  if (t !== void 0) try {
    return QS(JSON.parse(t));
  } catch {
    return Br(t, { maxLength: zr });
  }
}
async function Uf(e) {
  const t = await g5(e.input, e.response), r = t === void 0 ? await c5({ input: e.input, response: e.response, init: e.init }) : void 0;
  return { responseErrorSummary: t, oauthTokenErrorBodySummary: r };
}
function l5(e) {
  const { input: t, init: r, error: n, durationMs: s, metadata: i, responseFromError: o, responseErrorSummary: a, oauthTokenErrorBodySummary: c } = e, l = Ya(n), u = Za({ input: t, init: r }), d = Ja(u.contentType, r?.body), f = o !== void 0 ? Mf(o, a) : { status: l.httpStatus ?? null, ok: null, headers: { names: [], count: 0 }, contentType: null, body: { kind: "none", bytes: null, contentLength: null, ...a !== void 0 ? { errorSummary: a } : {} }, requestId: null, sessionIdHash: null, wwwAuthenticateHash: null, mcpProtocolVersion: null };
  return { event: "mcp_http_exchange", outcome: "error", durationMs: s, cursorMcp: { transport: { ...i, request: u, response: f, ...d !== void 0 ? { oauth: { grantType: d } } : {}, ...c !== void 0 ? { oauthTokenErrorBodySummary: c } : {}, error: i5(l) } } };
}
function u5(e) {
  const { logger: t, response: r } = e, n = o5(e);
  r.ok ? t.info?.("MCP HTTP exchange completed", n) : d5({ response: r, request: n.cursorMcp.transport.request, input: e.input, init: e.init }) ? t.debug?.("MCP HTTP exchange completed", n) : t.warn?.("MCP HTTP exchange completed", n);
}
function d5(e) {
  return e.response.status === 401 && e.request.authorizationScheme === null && e.response.headers.has("www-authenticate") && !Df(e.input, e.init);
}
function h5(e) {
  const { logger: t } = e;
  t.warn?.("MCP HTTP exchange failed", l5(e));
}
function f5(e) {
  return e === "/mcp" || e?.endsWith("/mcp") === true;
}
function p5(e) {
  const t = e.error;
  if (typeof t == "string") return JSON.stringify({ error: t });
  if (typeof t != "object" || t === null) return;
  const r = t, n = typeof r.code == "number" || typeof r.code == "string" ? r.code : void 0, s = typeof r.message == "string" ? Br(r.message, { maxLength: zr }) : void 0;
  if (!(n === void 0 && s === void 0)) return JSON.stringify({ ...n !== void 0 ? { code: n } : {}, ...s !== void 0 ? { message: s } : {} });
}
async function g5(e, t) {
  try {
    if (t.ok) return;
    const r = t.headers.get("content-type")?.toLowerCase() ?? "";
    if (!r.includes("json") && !r.includes("text")) return;
    const n = await Nf(t, zr);
    return n === void 0 ? void 0 : a5({ input: e, rawText: n });
  } catch {
    return;
  }
}
function $f(e, t, r) {
  try {
    e();
  } catch {
    t.warn?.("MCP HTTP exchange logging failed", { event: "mcp_http_exchange_logging_failure", phase: r });
  }
}
function _5(e) {
  const { fetch: t, logger: r, metadata: n, logSuccessfulExchanges: s = true } = e;
  return async (i, o) => {
    const a = Date.now();
    try {
      const c = await t(i, o), { responseErrorSummary: l, oauthTokenErrorBodySummary: u } = c.ok ? {} : await Uf({ input: i, init: o, response: c });
      return (s || !c.ok) && $f(() => {
        u5({ logger: r, input: i, init: o, response: c, durationMs: Date.now() - a, metadata: n, responseErrorSummary: l, oauthTokenErrorBodySummary: u });
      }, r, "success"), c;
    } catch (c) {
      const l = e5(c), { responseErrorSummary: u, oauthTokenErrorBodySummary: d } = l ? await Uf({ input: i, init: o, response: l }) : {};
      throw $f(() => {
        h5({ logger: r, input: i, init: o, error: c, durationMs: Date.now() - a, metadata: n, responseFromError: l, responseErrorSummary: u, oauthTokenErrorBodySummary: d });
      }, r, "failure"), c;
    }
  };
}
var zr, Ff = k({ "http-logging.ts"() {
  "use strict";
  h(), Wt(), Xa(), zr = 4096;
} });
function m5(e) {
  if (e instanceof Error || e !== null && typeof e == "object") return e;
}
function v5(e) {
  return typeof e == "string" ? e.toLowerCase().trim() : "";
}
function y5(e) {
  const { name: t, message: r } = e;
  if (t !== "ServerError") return;
  const n = qf.exec(r)?.[1];
  if (n === void 0) return;
  const s = jf.find(({ needle: i }) => n.includes(i));
  return s === void 0 ? void 0 : { reason: s.reason, matchedMessage: s.needle };
}
function S5(e) {
  const t = /^aadsts(\d+)\b/.exec(e)?.[1];
  return t !== void 0 && Wf.has(t) ? { reason: "admin_blocked", matchedMessage: `aadsts${t}` } : void 0;
}
function b5(e) {
  const { code: t, message: r } = e;
  return t === "unauthorized_user" || t === "access_denied" && r === Gf ? { reason: "user_access_revoked", matchedMessage: t } : void 0;
}
function w5(e) {
  const { code: t, message: r } = e;
  if (t !== void 0) return Bf.has(t) ? { reason: "admin_blocked", matchedMessage: t } : zf.has(t) ? S5(r) : e.allowNonRfcDeadGrant ? b5({ code: t, message: r }) : void 0;
}
function E5(e) {
  const t = Vf.find(({ needle: r }) => e.includes(r));
  return t === void 0 ? void 0 : { reason: t.reason, matchedMessage: e };
}
function A5(e) {
  return Yf.some((t) => e.includes(t)) ? { reason: "invalid_grant_generic", matchedMessage: e } : void 0;
}
function Hf(e, t) {
  const r = m5(e);
  if (r === void 0) return;
  const n = t ?? {}, s = v5(r.message), i = n.allowNonRfcDeadGrant === true, o = w5({ code: n.tokenEndpointErrorCode?.toLowerCase(), message: s, allowNonRfcDeadGrant: i });
  if (o !== void 0) return o;
  const a = typeof r.name == "string" ? r.name : "";
  return Kf.has(a) ? E5(s) ?? (n.allowInvalidGrantGeneric === true ? A5(s) : void 0) : i ? y5({ name: a, message: s }) : void 0;
}
var Bf, zf, Wf, Gf, Kf, qf, jf, Vf, Yf, Qa = k({ "permanent-grant-failure.ts"() {
  "use strict";
  h(), Bf = /* @__PURE__ */ new Set(["access_not_configured", "admin_policy_enforced", "policy_enforced"]), zf = /* @__PURE__ */ new Set(["invalid_grant", "interaction_required", "unauthorized_client"]), Wf = /* @__PURE__ */ new Set(["50105", "53000", "53001", "53002", "53003", "53004", "530032", "90094", "7000112"]), Gf = "missing or unknown user", Kf = /* @__PURE__ */ new Set(["InvalidGrantError", "InvalidRequestError"]), qf = /^http 4\d\d: invalid oauth error response\b.*\braw body: (.*)$/s, jf = [{ reason: "refresh_token_does_not_exist", needle: "no such refresh token" }, { reason: "refresh_token_does_not_exist", needle: "refresh token not found" }, { reason: "refresh_token_invalid", needle: "refresh token is invalid" }], Vf = [{ reason: "client_id_mismatch", needle: "client id mismatch" }, { reason: "client_id_mismatch", needle: "client_id mismatch" }, { reason: "issued_to_different_client", needle: "issued to different client" }, { reason: "issued_to_different_client", needle: "issued to another client" }, { reason: "grant_not_found", needle: "grant not found" }, { reason: "refresh_token_revoked", needle: "has been revoked" }, { reason: "refresh_token_revoked", needle: "token revoked" }, { reason: "refresh_token_does_not_exist", needle: "refresh token does not exist" }, { reason: "refresh_token_expired", needle: "token has expired" }, { reason: "refresh_token_expired", needle: "token is expired" }, { reason: "refresh_token_expired", needle: "token expired" }, { reason: "refresh_token_invalid", needle: "token was invalid" }, { reason: "refresh_token_invalid", needle: "token is invalid" }], Yf = ["invalid refresh token", "refresh token is invalid", "invalid or expired refresh token", "failed to refresh token", "invalid_grant"];
} }), Xf, ec, vi, tc, qn, rc, Jf, R5, Rt, nc, jn, Zf, Qf, ep, tp, T5 = k({ "lru-cache.ts"() {
  "use strict";
  if (h(), Xf = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date, ec = /* @__PURE__ */ new Set(), vi = typeof process == "object" && process ? process : {}, tc = (e, t, r, n) => {
    typeof vi.emitWarning == "function" ? vi.emitWarning(e, t, r, n) : console.error(`[${r}] ${t}: ${e}`);
  }, qn = globalThis.AbortController, rc = globalThis.AbortSignal, typeof qn > "u") {
    rc = class {
      constructor() {
        this._onabort = [], this.aborted = false;
      }
      addEventListener(n, s) {
        this._onabort.push(s);
      }
    }, qn = class {
      constructor() {
        this.signal = new rc(), t();
      }
      abort(n) {
        if (!this.signal.aborted) {
          this.signal.reason = n, this.signal.aborted = true;
          for (const s of this.signal._onabort) s(n);
          this.signal.onabort?.(n);
        }
      }
    };
    let e = vi.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1";
    const t = () => {
      e && (e = false, tc("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t));
    };
  }
  Jf = (e) => !ec.has(e), R5 = /* @__PURE__ */ Symbol("type"), Rt = (e) => e && e === Math.floor(e) && e > 0 && Number.isFinite(e), nc = (e) => Rt(e) ? e <= 2 ** 8 ? Uint8Array : e <= 2 ** 16 ? Uint16Array : e <= 2 ** 32 ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? jn : null : null, jn = class extends Array {
    constructor(e) {
      super(e), this.fill(0);
    }
  }, Zf = class Qs {
    static #c = false;
    static create(t) {
      const r = nc(t);
      if (!r) return [];
      Qs.#c = true;
      const n = new Qs(t, r);
      return Qs.#c = false, n;
    }
    constructor(t, r) {
      if (!Qs.#c) throw new TypeError("instantiate Stack using Stack.create(n)");
      this.heap = new r(t), this.length = 0;
    }
    push(t) {
      this.heap[this.length++] = t;
    }
    pop() {
      return this.heap[--this.length];
    }
  }, tp = class i2 {
    constructor(t) {
      this.#I = () => {
      }, this.#E = () => {
      }, this.#N = () => {
      }, this.#d = () => false, this.#P = (H) => {
      }, this.#C = (H, ee, Y) => {
      }, this.#U = (H, ee, Y, B) => {
        if (Y || B) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
        return 0;
      }, this[Qf] = "LRUCache";
      const { max: r = 0, ttl: n, ttlResolution: s = 1, ttlAutopurge: i, updateAgeOnGet: o, updateAgeOnHas: a, allowStale: c, dispose: l, onInsert: u, disposeAfter: d, noDisposeOnSet: f, noUpdateTTL: p, maxSize: g = 0, maxEntrySize: _ = 0, sizeCalculation: y, fetchMethod: m, memoMethod: A, noDeleteOnFetchRejection: S, noDeleteOnStaleGet: v, allowStaleOnFetchRejection: b, allowStaleOnFetchAbort: I, ignoreFetchAbort: O, perf: M } = t;
      if (M !== void 0 && typeof M?.now != "function") throw new TypeError("perf option must have a now() method if specified");
      if (this.#m = M ?? Xf, r !== 0 && !Rt(r)) throw new TypeError("max option must be a nonnegative integer");
      const F = r ? nc(r) : Array;
      if (!F) throw new Error(`invalid max value: ${r}`);
      if (this.#c = r, this.#h = g, this.maxEntrySize = _ || this.#h, this.sizeCalculation = y, this.sizeCalculation) {
        if (!this.#h && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
        if (typeof this.sizeCalculation != "function") throw new TypeError("sizeCalculation set to non-function");
      }
      if (A !== void 0 && typeof A != "function") throw new TypeError("memoMethod must be a function if defined");
      if (this.#M = A, m !== void 0 && typeof m != "function") throw new TypeError("fetchMethod must be a function if specified");
      if (this.#x = m, this.#k = !!m, this.#n = /* @__PURE__ */ new Map(), this.#r = new Array(r).fill(void 0), this.#e = new Array(r).fill(void 0), this.#l = new F(r), this.#f = new F(r), this.#a = 0, this.#i = 0, this.#y = Zf.create(r), this.#s = 0, this.#v = 0, typeof l == "function" && (this.#g = l), typeof u == "function" && (this.#O = u), typeof d == "function" ? (this.#_ = d, this.#o = []) : (this.#_ = void 0, this.#o = void 0), this.#w = !!this.#g, this.#D = !!this.#O, this.#u = !!this.#_, this.noDisposeOnSet = !!f, this.noUpdateTTL = !!p, this.noDeleteOnFetchRejection = !!S, this.allowStaleOnFetchRejection = !!b, this.allowStaleOnFetchAbort = !!I, this.ignoreFetchAbort = !!O, this.maxEntrySize !== 0) {
        if (this.#h !== 0 && !Rt(this.#h)) throw new TypeError("maxSize must be a positive integer if specified");
        if (!Rt(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
        this.#G();
      }
      if (this.allowStale = !!c, this.noDeleteOnStaleGet = !!v, this.updateAgeOnGet = !!o, this.updateAgeOnHas = !!a, this.ttlResolution = Rt(s) || s === 0 ? s : 1, this.ttlAutopurge = !!i, this.ttl = n || 0, this.ttl) {
        if (!Rt(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
        this.#H();
      }
      if (this.#c === 0 && this.ttl === 0 && this.#h === 0) throw new TypeError("At least one of max, maxSize, or ttl is required");
      if (!this.ttlAutopurge && !this.#c && !this.#h) {
        const H = "LRU_CACHE_UNBOUNDED";
        Jf(H) && (ec.add(H), tc("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", H, i2));
      }
    }
    #c;
    #h;
    #g;
    #O;
    #_;
    #x;
    #M;
    #m;
    get perf() {
      return this.#m;
    }
    #s;
    #v;
    #n;
    #r;
    #e;
    #l;
    #f;
    #a;
    #i;
    #y;
    #o;
    #S;
    #b;
    #p;
    #w;
    #k;
    #u;
    #D;
    static unsafeExposeInternals(t) {
      return { starts: t.#b, ttls: t.#p, sizes: t.#S, keyMap: t.#n, keyList: t.#r, valList: t.#e, next: t.#l, prev: t.#f, get head() {
        return t.#a;
      }, get tail() {
        return t.#i;
      }, free: t.#y, isBackgroundFetch: (r) => t.#t(r), backgroundFetch: (r, n, s, i) => t.#F(r, n, s, i), moveToTail: (r) => t.#L(r), indexes: (r) => t.#A(r), rindexes: (r) => t.#R(r), isStale: (r) => t.#d(r) };
    }
    get max() {
      return this.#c;
    }
    get maxSize() {
      return this.#h;
    }
    get calculatedSize() {
      return this.#v;
    }
    get size() {
      return this.#s;
    }
    get fetchMethod() {
      return this.#x;
    }
    get memoMethod() {
      return this.#M;
    }
    get dispose() {
      return this.#g;
    }
    get onInsert() {
      return this.#O;
    }
    get disposeAfter() {
      return this.#_;
    }
    getRemainingTTL(t) {
      return this.#n.has(t) ? 1 / 0 : 0;
    }
    #H() {
      const t = new jn(this.#c), r = new jn(this.#c);
      this.#p = t, this.#b = r, this.#N = (i, o, a = this.#m.now()) => {
        if (r[i] = o !== 0 ? a : 0, t[i] = o, o !== 0 && this.ttlAutopurge) {
          const c = setTimeout(() => {
            this.#d(i) && this.#T(this.#r[i], "expire");
          }, o + 1);
          c.unref && c.unref();
        }
      }, this.#I = (i) => {
        r[i] = t[i] !== 0 ? this.#m.now() : 0;
      }, this.#E = (i, o) => {
        if (t[o]) {
          const a = t[o], c = r[o];
          if (!a || !c) return;
          i.ttl = a, i.start = c, i.now = n || s();
          const l = i.now - c;
          i.remainingTTL = a - l;
        }
      };
      let n = 0;
      const s = () => {
        const i = this.#m.now();
        if (this.ttlResolution > 0) {
          n = i;
          const o = setTimeout(() => {
            n = 0;
          }, this.ttlResolution);
          o.unref && o.unref();
        }
        return i;
      };
      this.getRemainingTTL = (i) => {
        const o = this.#n.get(i);
        if (o === void 0) return 0;
        const a = t[o], c = r[o];
        if (!a || !c) return 1 / 0;
        const l = (n || s()) - c;
        return a - l;
      }, this.#d = (i) => {
        const o = r[i], a = t[i];
        return !!a && !!o && (n || s()) - o > a;
      };
    }
    #I;
    #E;
    #N;
    #d;
    #G() {
      const t = new jn(this.#c);
      this.#v = 0, this.#S = t, this.#P = (r) => {
        this.#v -= t[r], t[r] = 0;
      }, this.#U = (r, n, s, i) => {
        if (this.#t(n)) return 0;
        if (!Rt(s)) if (i) {
          if (typeof i != "function") throw new TypeError("sizeCalculation must be a function");
          if (s = i(n, r), !Rt(s)) throw new TypeError("sizeCalculation return invalid (expect positive integer)");
        } else throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
        return s;
      }, this.#C = (r, n, s) => {
        if (t[r] = n, this.#h) {
          const i = this.#h - t[r];
          for (; this.#v > i; ) this.#$(true);
        }
        this.#v += t[r], s && (s.entrySize = n, s.totalCalculatedSize = this.#v);
      };
    }
    #P;
    #C;
    #U;
    *#A({ allowStale: t = this.allowStale } = {}) {
      if (this.#s) for (let r = this.#i; !(!this.#B(r) || ((t || !this.#d(r)) && (yield r), r === this.#a)); ) r = this.#f[r];
    }
    *#R({ allowStale: t = this.allowStale } = {}) {
      if (this.#s) for (let r = this.#a; !(!this.#B(r) || ((t || !this.#d(r)) && (yield r), r === this.#i)); ) r = this.#l[r];
    }
    #B(t) {
      return t !== void 0 && this.#n.get(this.#r[t]) === t;
    }
    *entries() {
      for (const t of this.#A()) this.#e[t] !== void 0 && this.#r[t] !== void 0 && !this.#t(this.#e[t]) && (yield [this.#r[t], this.#e[t]]);
    }
    *rentries() {
      for (const t of this.#R()) this.#e[t] !== void 0 && this.#r[t] !== void 0 && !this.#t(this.#e[t]) && (yield [this.#r[t], this.#e[t]]);
    }
    *keys() {
      for (const t of this.#A()) {
        const r = this.#r[t];
        r !== void 0 && !this.#t(this.#e[t]) && (yield r);
      }
    }
    *rkeys() {
      for (const t of this.#R()) {
        const r = this.#r[t];
        r !== void 0 && !this.#t(this.#e[t]) && (yield r);
      }
    }
    *values() {
      for (const t of this.#A()) this.#e[t] !== void 0 && !this.#t(this.#e[t]) && (yield this.#e[t]);
    }
    *rvalues() {
      for (const t of this.#R()) this.#e[t] !== void 0 && !this.#t(this.#e[t]) && (yield this.#e[t]);
    }
    [(ep = Symbol.iterator, Qf = Symbol.toStringTag, ep)]() {
      return this.entries();
    }
    find(t, r = {}) {
      for (const n of this.#A()) {
        const s = this.#e[n], i = this.#t(s) ? s.__staleWhileFetching : s;
        if (i !== void 0 && t(i, this.#r[n], this)) return this.get(this.#r[n], r);
      }
    }
    forEach(t, r = this) {
      for (const n of this.#A()) {
        const s = this.#e[n], i = this.#t(s) ? s.__staleWhileFetching : s;
        i !== void 0 && t.call(r, i, this.#r[n], this);
      }
    }
    rforEach(t, r = this) {
      for (const n of this.#R()) {
        const s = this.#e[n], i = this.#t(s) ? s.__staleWhileFetching : s;
        i !== void 0 && t.call(r, i, this.#r[n], this);
      }
    }
    purgeStale() {
      let t = false;
      for (const r of this.#R({ allowStale: true })) this.#d(r) && (this.#T(this.#r[r], "expire"), t = true);
      return t;
    }
    info(t) {
      const r = this.#n.get(t);
      if (r === void 0) return;
      const n = this.#e[r], s = this.#t(n) ? n.__staleWhileFetching : n;
      if (s === void 0) return;
      const i = { value: s };
      if (this.#p && this.#b) {
        const o = this.#p[r], a = this.#b[r];
        if (o && a) {
          const c = o - (this.#m.now() - a);
          i.ttl = c, i.start = Date.now();
        }
      }
      return this.#S && (i.size = this.#S[r]), i;
    }
    dump() {
      const t = [];
      for (const r of this.#A({ allowStale: true })) {
        const n = this.#r[r], s = this.#e[r], i = this.#t(s) ? s.__staleWhileFetching : s;
        if (i === void 0 || n === void 0) continue;
        const o = { value: i };
        if (this.#p && this.#b) {
          o.ttl = this.#p[r];
          const a = this.#m.now() - this.#b[r];
          o.start = Math.floor(Date.now() - a);
        }
        this.#S && (o.size = this.#S[r]), t.unshift([n, o]);
      }
      return t;
    }
    load(t) {
      this.clear();
      for (const [r, n] of t) {
        if (n.start) {
          const s = Date.now() - n.start;
          n.start = this.#m.now() - s;
        }
        this.set(r, n.value, n);
      }
    }
    set(t, r, n = {}) {
      if (r === void 0) return this.delete(t), this;
      const { ttl: s = this.ttl, start: i, noDisposeOnSet: o = this.noDisposeOnSet, sizeCalculation: a = this.sizeCalculation, status: c } = n;
      let { noUpdateTTL: l = this.noUpdateTTL } = n;
      const u = this.#U(t, r, n.size || 0, a);
      if (this.maxEntrySize && u > this.maxEntrySize) return c && (c.set = "miss", c.maxEntrySizeExceeded = true), this.#T(t, "set"), this;
      let d = this.#s === 0 ? void 0 : this.#n.get(t);
      if (d === void 0) d = this.#s === 0 ? this.#i : this.#y.length !== 0 ? this.#y.pop() : this.#s === this.#c ? this.#$(false) : this.#s, this.#r[d] = t, this.#e[d] = r, this.#n.set(t, d), this.#l[this.#i] = d, this.#f[d] = this.#i, this.#i = d, this.#s++, this.#C(d, u, c), c && (c.set = "add"), l = false, this.#D && this.#O?.(r, t, "add");
      else {
        this.#L(d);
        const f = this.#e[d];
        if (r !== f) {
          if (this.#k && this.#t(f)) {
            f.__abortController.abort(new Error("replaced"));
            const { __staleWhileFetching: p } = f;
            p !== void 0 && !o && (this.#w && this.#g?.(p, t, "set"), this.#u && this.#o?.push([p, t, "set"]));
          } else o || (this.#w && this.#g?.(f, t, "set"), this.#u && this.#o?.push([f, t, "set"]));
          if (this.#P(d), this.#C(d, u, c), this.#e[d] = r, c) {
            c.set = "replace";
            const p = f && this.#t(f) ? f.__staleWhileFetching : f;
            p !== void 0 && (c.oldValue = p);
          }
        } else c && (c.set = "update");
        this.#D && this.onInsert?.(r, t, r === f ? "update" : "replace");
      }
      if (s !== 0 && !this.#p && this.#H(), this.#p && (l || this.#N(d, s, i), c && this.#E(c, d)), !o && this.#u && this.#o) {
        const f = this.#o;
        let p;
        for (; p = f?.shift(); ) this.#_?.(...p);
      }
      return this;
    }
    pop() {
      try {
        for (; this.#s; ) {
          const t = this.#e[this.#a];
          if (this.#$(true), this.#t(t)) {
            if (t.__staleWhileFetching) return t.__staleWhileFetching;
          } else if (t !== void 0) return t;
        }
        return;
      } finally {
        if (this.#u && this.#o) {
          const t = this.#o;
          let r;
          for (; r = t?.shift(); ) this.#_?.(...r);
        }
      }
    }
    #$(t) {
      const r = this.#a, n = this.#r[r], s = this.#e[r];
      return this.#k && this.#t(s) ? s.__abortController.abort(new Error("evicted")) : (this.#w || this.#u) && (this.#w && this.#g?.(s, n, "evict"), this.#u && this.#o?.push([s, n, "evict"])), this.#P(r), t && (this.#r[r] = void 0, this.#e[r] = void 0, this.#y.push(r)), this.#s === 1 ? (this.#a = this.#i = 0, this.#y.length = 0) : this.#a = this.#l[r], this.#n.delete(n), this.#s--, r;
    }
    has(t, r = {}) {
      const { updateAgeOnHas: n = this.updateAgeOnHas, status: s } = r, i = this.#n.get(t);
      if (i !== void 0) {
        const o = this.#e[i];
        if (this.#t(o) && o.__staleWhileFetching === void 0) return false;
        if (this.#d(i)) s && (s.has = "stale", this.#E(s, i));
        else return n && this.#I(i), s && (s.has = "hit", this.#E(s, i)), true;
      } else s && (s.has = "miss");
      return false;
    }
    peek(t, r = {}) {
      const { allowStale: n = this.allowStale } = r, s = this.#n.get(t);
      if (s === void 0 || !n && this.#d(s)) return;
      const i = this.#e[s];
      return this.#t(i) ? i.__staleWhileFetching : i;
    }
    #F(t, r, n, s) {
      const i = r === void 0 ? void 0 : this.#e[r];
      if (this.#t(i)) return i;
      const o = new qn(), { signal: a } = n;
      a?.addEventListener("abort", () => o.abort(a.reason), { signal: o.signal });
      const c = { signal: o.signal, options: n, context: s }, l = (_, y = false) => {
        const { aborted: m } = o.signal, A = n.ignoreFetchAbort && _ !== void 0;
        if (n.status && (m && !y ? (n.status.fetchAborted = true, n.status.fetchError = o.signal.reason, A && (n.status.fetchAbortIgnored = true)) : n.status.fetchResolved = true), m && !A && !y) return d(o.signal.reason);
        const S = p, v = this.#e[r];
        return (v === p || A && y && v === void 0) && (_ === void 0 ? S.__staleWhileFetching !== void 0 ? this.#e[r] = S.__staleWhileFetching : this.#T(t, "fetch") : (n.status && (n.status.fetchUpdated = true), this.set(t, _, c.options))), _;
      }, u = (_) => (n.status && (n.status.fetchRejected = true, n.status.fetchError = _), d(_)), d = (_) => {
        const { aborted: y } = o.signal, m = y && n.allowStaleOnFetchAbort, A = m || n.allowStaleOnFetchRejection, S = A || n.noDeleteOnFetchRejection, v = p;
        if (this.#e[r] === p && (!S || v.__staleWhileFetching === void 0 ? this.#T(t, "fetch") : m || (this.#e[r] = v.__staleWhileFetching)), A) return n.status && v.__staleWhileFetching !== void 0 && (n.status.returnedStale = true), v.__staleWhileFetching;
        if (v.__returned === v) throw _;
      }, f = (_, y) => {
        const m = this.#x?.(t, i, c);
        m && m instanceof Promise && m.then((A) => _(A === void 0 ? void 0 : A), y), o.signal.addEventListener("abort", () => {
          (!n.ignoreFetchAbort || n.allowStaleOnFetchAbort) && (_(void 0), n.allowStaleOnFetchAbort && (_ = (A) => l(A, true)));
        });
      };
      n.status && (n.status.fetchDispatched = true);
      const p = new Promise(f).then(l, u), g = Object.assign(p, { __abortController: o, __staleWhileFetching: i, __returned: void 0 });
      return r === void 0 ? (this.set(t, g, { ...c.options, status: void 0 }), r = this.#n.get(t)) : this.#e[r] = g, g;
    }
    #t(t) {
      if (!this.#k) return false;
      const r = t;
      return !!r && r instanceof Promise && r.hasOwnProperty("__staleWhileFetching") && r.__abortController instanceof qn;
    }
    async fetch(t, r = {}) {
      const { allowStale: n = this.allowStale, updateAgeOnGet: s = this.updateAgeOnGet, noDeleteOnStaleGet: i = this.noDeleteOnStaleGet, ttl: o = this.ttl, noDisposeOnSet: a = this.noDisposeOnSet, size: c = 0, sizeCalculation: l = this.sizeCalculation, noUpdateTTL: u = this.noUpdateTTL, noDeleteOnFetchRejection: d = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: f = this.allowStaleOnFetchRejection, ignoreFetchAbort: p = this.ignoreFetchAbort, allowStaleOnFetchAbort: g = this.allowStaleOnFetchAbort, context: _, forceRefresh: y = false, status: m, signal: A } = r;
      if (!this.#k) return m && (m.fetch = "get"), this.get(t, { allowStale: n, updateAgeOnGet: s, noDeleteOnStaleGet: i, status: m });
      const S = { allowStale: n, updateAgeOnGet: s, noDeleteOnStaleGet: i, ttl: o, noDisposeOnSet: a, size: c, sizeCalculation: l, noUpdateTTL: u, noDeleteOnFetchRejection: d, allowStaleOnFetchRejection: f, allowStaleOnFetchAbort: g, ignoreFetchAbort: p, status: m, signal: A }, v = this.#n.get(t);
      if (v === void 0) {
        m && (m.fetch = "miss");
        const b = this.#F(t, v, S, _);
        return b.__returned = b;
      } else {
        const b = this.#e[v];
        if (this.#t(b)) {
          const H = n && b.__staleWhileFetching !== void 0;
          return m && (m.fetch = "inflight", H && (m.returnedStale = true)), H ? b.__staleWhileFetching : b.__returned = b;
        }
        const I = this.#d(v);
        if (!y && !I) return m && (m.fetch = "hit"), this.#L(v), s && this.#I(v), m && this.#E(m, v), b;
        const O = this.#F(t, v, S, _), F = O.__staleWhileFetching !== void 0 && n;
        return m && (m.fetch = I ? "stale" : "refresh", F && I && (m.returnedStale = true)), F ? O.__staleWhileFetching : O.__returned = O;
      }
    }
    async forceFetch(t, r = {}) {
      const n = await this.fetch(t, r);
      if (n === void 0) throw new Error("fetch() returned undefined");
      return n;
    }
    memo(t, r = {}) {
      const n = this.#M;
      if (!n) throw new Error("no memoMethod provided to constructor");
      const { context: s, forceRefresh: i, ...o } = r, a = this.get(t, o);
      if (!i && a !== void 0) return a;
      const c = n(t, a, { options: o, context: s });
      return this.set(t, c, o), c;
    }
    get(t, r = {}) {
      const { allowStale: n = this.allowStale, updateAgeOnGet: s = this.updateAgeOnGet, noDeleteOnStaleGet: i = this.noDeleteOnStaleGet, status: o } = r, a = this.#n.get(t);
      if (a !== void 0) {
        const c = this.#e[a], l = this.#t(c);
        return o && this.#E(o, a), this.#d(a) ? (o && (o.get = "stale"), l ? (o && n && c.__staleWhileFetching !== void 0 && (o.returnedStale = true), n ? c.__staleWhileFetching : void 0) : (i || this.#T(t, "expire"), o && n && (o.returnedStale = true), n ? c : void 0)) : (o && (o.get = "hit"), l ? c.__staleWhileFetching : (this.#L(a), s && this.#I(a), c));
      } else o && (o.get = "miss");
    }
    #z(t, r) {
      this.#f[r] = t, this.#l[t] = r;
    }
    #L(t) {
      t !== this.#i && (t === this.#a ? this.#a = this.#l[t] : this.#z(this.#f[t], this.#l[t]), this.#z(this.#i, t), this.#i = t);
    }
    delete(t) {
      return this.#T(t, "delete");
    }
    #T(t, r) {
      let n = false;
      if (this.#s !== 0) {
        const s = this.#n.get(t);
        if (s !== void 0) if (n = true, this.#s === 1) this.#W(r);
        else {
          this.#P(s);
          const i = this.#e[s];
          if (this.#t(i) ? i.__abortController.abort(new Error("deleted")) : (this.#w || this.#u) && (this.#w && this.#g?.(i, t, r), this.#u && this.#o?.push([i, t, r])), this.#n.delete(t), this.#r[s] = void 0, this.#e[s] = void 0, s === this.#i) this.#i = this.#f[s];
          else if (s === this.#a) this.#a = this.#l[s];
          else {
            const o = this.#f[s];
            this.#l[o] = this.#l[s];
            const a = this.#l[s];
            this.#f[a] = this.#f[s];
          }
          this.#s--, this.#y.push(s);
        }
      }
      if (this.#u && this.#o?.length) {
        const s = this.#o;
        let i;
        for (; i = s?.shift(); ) this.#_?.(...i);
      }
      return n;
    }
    clear() {
      this.#W("delete");
    }
    #W(t) {
      for (const r of this.#R({ allowStale: true })) {
        const n = this.#e[r];
        if (this.#t(n)) n.__abortController.abort(new Error("deleted"));
        else {
          const s = this.#r[r];
          this.#w && this.#g?.(n, s, t), this.#u && this.#o?.push([n, s, t]);
        }
      }
      if (this.#n.clear(), this.#e.fill(void 0), this.#r.fill(void 0), this.#p && this.#b && (this.#p.fill(0), this.#b.fill(0)), this.#S && this.#S.fill(0), this.#a = 0, this.#i = 0, this.#y.length = 0, this.#v = 0, this.#s = 0, this.#u && this.#o) {
        const r = this.#o;
        let n;
        for (; n = r?.shift(); ) this.#_?.(...n);
      }
    }
  };
} });
import * as yi from "node:fs";
import * as Si from "node:path";
function rp(e) {
  try {
    return yi.statSync(e);
  } catch {
    return null;
  }
}
function sc(e, t) {
  if (e.match(/[\\/]/)) return e;
  const r = t ? `${e}\0${t.source}\0${t.flags}` : e, n = Vn.get(r);
  if (n !== void 0) return n;
  const s = Si.join(".", e);
  if (rp(s)) return Vn.set(r, s), s;
  const i = process.env.PATH.split(np ? ";" : ":");
  for (const o of i) {
    const a = Si.join(o, e);
    if (rp(a) && (!t || t.test(a))) return Vn.set(r, a), a;
  }
  return Vn.set(r, e), e;
}
function Ke(e, t, r) {
  if (process.platform !== "win32") return { cmd: sc(e), args: t };
  if (!yi.existsSync(e)) {
    const n = [".exe", ".bat", ".cmd", ".ps1"], s = e.toLowerCase();
    if (n.some((i) => s.endsWith(i))) {
      const i = sc(e, r);
      if (yi.existsSync(i)) return Ke(i, t, r);
    }
    for (const i of n) {
      const o = sc(`${e}${i}`, r);
      if (yi.existsSync(o)) return Ke(o, t, r);
    }
  }
  if (e.match(/\.ps1$/i)) return { cmd: Si.join(process.env.SYSTEMROOT, "System32", "WindowsPowerShell", "v1.0", "PowerShell.exe"), args: ["-ExecutionPolicy", "Unrestricted", "-NoLogo", "-NonInteractive", "-File", e].concat(t) };
  if (e.match(/\.(bat|cmd)$/i)) {
    const n = Si.join(process.env.SYSTEMROOT, "System32", "cmd.exe"), s = ["/C", e, ...t];
    return { cmd: n, args: s };
  }
  return e.match(/\.(js)$/i) ? { cmd: process.execPath, args: [e].concat(t) } : { cmd: e, args: t };
}
var np, Vn, sp = k({ "find-executable.ts"() {
  "use strict";
  h(), T5(), np = typeof process < "u" && process.platform === "win32", Vn = new tp({ max: 512 });
} });
function Yn() {
  const e = [], t = [];
  let r = false, n, s = () => {
  }, i = () => {
  };
  const o = () => {
    const u = new Promise((d, f) => {
      s = d, i = f;
    });
    return u.catch(() => {
    }), u;
  };
  let a = o();
  function c(u, d) {
    for (; e.length > 0; ) {
      const f = e.shift();
      d ? f.reject(d) : f.resolve(u);
    }
  }
  function l(u) {
    t.length = 0, i(u), a = Promise.reject(u), a.catch(() => {
    });
  }
  return { async write(u) {
    if (r) throw n ?? new ic("WritableIterable is closed");
    const d = e.shift();
    if (d) {
      if (d.resolve({ done: false, value: u }), e.length > 0) return;
    } else t.push(u);
    const f = t.length + 1;
    for (let p = 0; p < f; p++) await a;
  }, throw(u) {
    r || (r = true, n = u, l(u), c({ done: true, value: void 0 }, u));
  }, close() {
    r || (r = true, t.length = 0, s(), a = Promise.reject(new ic("WritableIterable is closed")), a.catch(() => {
    }), c({ done: true, value: void 0 }));
  }, [Symbol.asyncIterator]() {
    return { next() {
      s(), a = o();
      const u = t.shift();
      return u !== void 0 ? Promise.resolve({ done: false, value: u }) : r ? n ? Promise.reject(n) : Promise.resolve({ done: true, value: void 0 }) : new Promise((d, f) => {
        e.push({ resolve: d, reject: f });
      });
    }, throw(u) {
      return r = true, n = u, t.length = 0, l(u), c({ done: true, value: void 0 }, u), Promise.resolve({ done: true, value: void 0 });
    }, return() {
      return r = true, t.length = 0, s(), a = Promise.reject(new Error("Iterator was closed")), a.catch(() => {
      }), c({ done: true, value: void 0 }), Promise.resolve({ done: true, value: void 0 });
    } };
  } };
}
var ic, k5 = k({ "writable-iterable.ts"() {
  "use strict";
  h(), ic = class extends Error {
    constructor(e) {
      super(e), this.name = "WriteIterableClosedError";
    }
  };
} });
import { writeFileSync as I5 } from "node:fs";
function P5(e) {
  if (!(process.platform !== "linux" || e === void 0 || e <= 0)) try {
    I5(`/proc/${e}/oom_score_adj`, "0");
  } catch {
  }
}
var O5 = k({ "oom-score-adj.ts"() {
  "use strict";
  h();
} });
import "node:fs/promises";
import { homedir as C5 } from "node:os";
import { isAbsolute as L5, resolve as ip } from "node:path";
import { fileURLToPath as x5 } from "node:url";
function M5(e) {
  return e.replace(/^~(?=$|\/|\\)/, C5());
}
function D5(e) {
  if (!e.startsWith("file://")) return e;
  try {
    return x5(e);
  } catch {
    return e;
  }
}
function oc(e, t) {
  const r = M5(D5(e));
  return t && !L5(r) ? ip(t, r) : ip(r);
}
var N5 = k({ "path-utils.ts"() {
  "use strict";
  h();
} });
import { createHash as U5 } from "node:crypto";
import { readFileSync as $5 } from "node:fs";
import { tmpdir as F5 } from "node:os";
import bi from "node:path";
import { PassThrough as H5 } from "node:stream";
function ac(e) {
  return Buffer.from(Buffer.concat(e));
}
function B5() {
  try {
    return $5(fp, "utf8");
  } catch {
    return;
  }
}
function z5(e) {
  return e?.readMountinfo ?? gp;
}
function W5(e) {
  return e.replace(/\\([0-7]{3})/g, (t, r) => String.fromCharCode(Number.parseInt(r, 8)));
}
function G5(e) {
  return e === "/" ? "/" : e.replace(/\/+$/, "");
}
function K5(e, t) {
  return t === "/" || e === t || e.startsWith(`${t}/`);
}
function q5(e) {
  return e === "fuse" || e === "fuseblk" || e.startsWith("fuse.");
}
function j5(e) {
  const t = [];
  for (const r of e.split(`
`)) {
    if (r.length === 0) continue;
    const n = r.split(" ");
    if (n.length < 10) continue;
    let s = -1;
    for (let a = 6; a < n.length; a++) if (n[a] === "-") {
      s = a;
      break;
    }
    const i = n[4], o = s === -1 ? void 0 : n[s + 1];
    i === void 0 || o === void 0 || o.length === 0 || t.push({ mountPoint: G5(W5(i)), fstype: o });
  }
  return t;
}
function V5(e) {
  return _p === e && ki !== void 0 || (_p = e, ki = j5(e)), ki;
}
function Y5(e, t) {
  let r;
  for (const n of t) K5(e, n.mountPoint) && (r === void 0 || n.mountPoint.length >= r.mountPoint.length) && (r = n);
  return r;
}
function wi(e, t) {
  const r = z5(t)();
  if (r === void 0) return false;
  const n = Y5(bi.resolve(e), V5(r));
  return n !== void 0 && q5(n.fstype);
}
function Ei(e) {
  const t = bi.resolve(e);
  return t === lc || t.startsWith(`${lc}/`);
}
function op(e) {
  const t = e?.processCwd ?? process.cwd();
  return (e?.platform ?? process.platform) === "linux" && wi(t, e) ? e?.tmpdir ?? F5() : t;
}
function X5(e, t, r, n) {
  const s = n?.platform ?? process.platform, i = r?.cwd;
  if (s !== "linux" || i === void 0 || r?.shell || !wi(i, n)) return { command: e, args: [...t], options: r, hopped: false };
  const o = bi.resolve(i), a = op({ processCwd: n?.processCwd, tmpdir: n?.tmpdir, platform: s, readMountinfo: n?.readMountinfo });
  return { command: "/bin/sh", args: ["-c", hc, uc, o, e, ...t], options: { ...r, cwd: a }, hopped: true, hopCwd: o };
}
function ap(e = process.env) {
  return e[pp] === "1";
}
function cp(e) {
  return { cwdKind: Ei(e) ? "agent_store_fuse" : "fuse", cwdHash: U5("sha256").update(e, "utf8").digest("hex").slice(0, 12) };
}
function lp(e, t = process.env) {
  return ap(t) && e !== void 0 && wi(e);
}
function up(e) {
  return `working directory is not accessible: ${bi.resolve(e)}`;
}
function J5(e) {
  return typeof e == "string" ? e === Wr : Buffer.from(e).equals(Buffer.from(Wr));
}
function Ai(e) {
  return lp(e.cwd, e.env) && e.exitCode === Xn && e.stdoutBytes === Wr.length && J5(e.stdoutPrefix);
}
function cc(e) {
  const t = new Error(up(e));
  return t.code = "ENOENT", t;
}
function Z5(e, t) {
  return e instanceof Error && e.code === "ENOENT" && e.message === up(t);
}
function Q5(e) {
  if (e.stdout == null) return { bytes: 0, prefix: Buffer.alloc(0) };
  const t = typeof e.stdout == "string" ? Buffer.from(e.stdout) : ac([e.stdout]);
  return { bytes: t.length, prefix: t.subarray(0, Ri) };
}
function eb(e, t) {
  if (typeof e != "object" || e === null || !("status" in e)) return false;
  const r = e, n = Q5(r);
  return Ai({ exitCode: typeof r.status == "number" ? r.status : null, stdoutBytes: n.bytes, stdoutPrefix: n.prefix, cwd: t });
}
function dp(e) {
  return typeof e == "object" && e !== null && "emit" in e && typeof e.emit == "function" && "on" in e && typeof e.on == "function" && "stdout" in e && "stdin" in e;
}
function tb(e) {
  return typeof e == "object" && e !== null && "then" in e && typeof e.then == "function";
}
function rb(e) {
  return typeof e == "object" && e !== null && !dp(e) && "onData" in e && typeof e.onData == "function" && "onExit" in e && typeof e.onExit == "function";
}
function nb(e, t) {
  const r = new Ti(), n = new H5();
  let s = false, i;
  const o = e.stdout, a = e.emit.bind(e), c = (p) => {
    if (p) r.takeHeld();
    else {
      const g = r.takeHeld();
      g !== void 0 && !n.writableEnded && n.write(g);
    }
    n.writableEnded || n.end();
  }, l = (p) => {
    const g = p?.[0];
    return g === null || typeof g == "number" ? g : null;
  }, u = (p) => Ai({ exitCode: l(p), stdoutBytes: r.bytes, stdoutPrefix: r.stdoutPrefix, cwd: t }), d = () => (s = true, c(true), a("error", cc(t))), f = () => {
    i !== void 0 && l(i) === Xn && (a("exit", ...i), i = void 0);
  };
  o && (o.on("data", (p) => {
    if (s) return;
    const g = r.note(p);
    if (g !== void 0) {
      n.write(g), f();
      return;
    }
    u(i) && d();
  }), o.on("error", (p) => {
    n.destroy(p);
  }), Object.defineProperty(e, "stdout", { configurable: true, enumerable: true, get() {
    return n;
  } })), e.emit = ((p, ...g) => s ? p === "exit" || p === "close" ? false : a(p, ...g) : p === "exit" ? (i = g, l(g) !== Xn ? a(p, ...g) : u(g) ? d() : r.diverged || o == null ? (i = void 0, a(p, ...g)) : false) : p === "close" ? u(g) || u(i) ? d() : (c(false), f(), a(p, ...g)) : a(p, ...g));
}
function sb(e, t) {
  const r = new Ti(), n = [], s = e.onData.bind(e), i = e.onExit.bind(e);
  e.onData = (o) => (n.push(o), s((a) => {
    const c = typeof a == "string" ? Buffer.from(a) : a, l = r.note(c);
    l !== void 0 && o(typeof a == "string" ? l.toString("utf8") : l);
  })), e.onExit = (o) => i((a) => {
    const c = r.takeHeld();
    if (Ai({ exitCode: a.exitCode, stdoutBytes: r.bytes, stdoutPrefix: r.stdoutPrefix, cwd: t })) {
      o(a);
      return;
    }
    if (c !== void 0) for (const l of n) l(c);
    o(a);
  });
}
function hp(e, t) {
  throw eb(e, t) ? cc(t) : e;
}
function ib(e, t) {
  return dp(e) ? (nb(e, t), e) : rb(e) ? (sb(e, t), e) : tb(e) ? e.then((r) => r, (r) => hp(r, t)) : e;
}
var lc, fp, pp, uc, Xn, Wr, dc, Ri, Ti, hc, gp, _p, ki, mp, fc, vp = k({ "safe-spawn-cwd.ts"() {
  "use strict";
  h(), lc = "/cursor/stores", fp = "/proc/self/mountinfo", pp = "CURSOR_SPAWN_CWD_HOP", uc = "cursor-fuse-cwd", Xn = 79, Wr = "cursor-fuse-cwd:cd", dc = Buffer.from(Wr), Ri = 32, Ti = class {
    constructor() {
      this.held = Buffer.alloc(0), this.released = false, this.seen = 0, this.prefix = Buffer.alloc(0);
    }
    get bytes() {
      return this.seen;
    }
    get stdoutPrefix() {
      return this.prefix;
    }
    get diverged() {
      return this.released;
    }
    note(e) {
      const t = Buffer.from(e);
      if (this.seen += t.length, this.prefix.length < Ri) {
        const n = Math.min(t.length, Ri - this.prefix.length);
        this.prefix = ac([this.prefix, t.subarray(0, n)]);
      }
      if (this.released) return t;
      const r = ac([this.held, t]);
      if (r.length <= dc.length && dc.subarray(0, r.length).equals(r)) {
        this.held = r;
        return;
      }
      return this.released = true, this.held = Buffer.alloc(0), r;
    }
    takeHeld() {
      if (this.held.length === 0) {
        this.released = true;
        return;
      }
      const e = this.held;
      return this.held = Buffer.alloc(0), this.released = true, e;
    }
  }, hc = `cd "$1" || { printf %s '${Wr}'; exit ${Xn}; }; shift; exec "$@"`, gp = B5, mp = "exec_daemon.spawn.cwd_hop", fc = "exec_daemon.spawn.cwd_hop_cd_failed";
} });
import { spawn as ob } from "node:child_process";
import { AsyncSubject as yp, merge as ab, Observable as cb, of as Sp, Subscription as bp, timer as lb } from "rxjs";
import { map as ub, reduce as db, retry as hb } from "rxjs/operators";
function wp(e, t, r) {
  r = r ?? {};
  let s = new cb((i) => {
    const { encoding: o, timeout: a, ...c } = r, { cmd: l, args: u } = Ke(e, t), d = c.stdin;
    d && (delete c.stdin, c.stdio ??= ["pipe", "pipe", "pipe"]), c.stdio ??= ["ignore", "pipe", "pipe"];
    const f = ob(l, u, c);
    r.processInfo && f.pid !== void 0 && (r.processInfo.pid = f.pid);
    let p = null;
    a && a > 0 && (p = setTimeout(() => {
      f.killed || f.kill();
      const S = new Kt(`Process timed out after ${a}ms`, -1, l, u);
      i.error(S);
    }, a));
    const g = (S) => (v) => {
      if (v.length < 1) return;
      r.echoOutput && (S === "stdout" ? process.stdout : process.stderr).write(v);
      let b = "<< String sent back was too long >>";
      try {
        typeof v == "string" ? b = v.toString() : b = v.toString(o || "utf8");
      } catch {
        b = `<< Lost chunk of process output for ${e} - length was ${v.length}>>`;
      }
      i.next({ source: S, text: b });
    }, _ = new bp();
    if (d) if (f.stdin) {
      const S = f.stdin;
      _.add(d.subscribe({ next: (v) => S.write(v), error: i.error.bind(i), complete: () => S.end() }));
    } else i.error(new Error("opts.stdio conflicts with provided spawn opts.stdin observable, 'pipe' is required"));
    let y = null, m = null, A = false;
    return f.stdout ? (m = new yp(), f.stdout.on("data", g("stdout")), f.stdout.on("close", () => {
      m.next(true), m.complete();
    })) : m = Sp(true), f.stderr ? (y = new yp(), f.stderr.on("data", g("stderr")), f.stderr.on("close", () => {
      y.next(true), y.complete();
    })) : y = Sp(true), f.on("error", (S) => {
      A = true, p && clearTimeout(p), i.error(S);
    }), f.on("close", (S) => {
      A = true, p && clearTimeout(p);
      const v = ab(m, y).pipe(db((b) => true, true));
      S === 0 ? v.subscribe(() => i.complete()) : v.subscribe(() => {
        const b = new Kt(`Process failed with exit code: ${S}`, S, l, u);
        i.error(b);
      });
    }), _.add(new bp(() => {
      A || (p && clearTimeout(p), f.kill());
    })), _;
  });
  if (r.retries && r.retries > 0) {
    const i = r.retries, o = r.retryDelay ?? 1e3;
    s = s.pipe(hb({ count: i, delay: (a, c) => {
      if (a instanceof Kt && a.exitCode !== 0) return lb(o);
      throw a;
    } }));
  }
  return r.split ? s : s.pipe(ub((i) => i?.text));
}
function fb(e) {
  return new Promise((t, r) => {
    let n = "";
    e.subscribe({ next: (s) => {
      n += s;
    }, error: (s) => {
      if (s instanceof Kt) {
        const i = new Kt(`${n}
${s.message}`, s.exitCode, s.command, s.args, n, s.stderr);
        r(i);
      } else {
        const i = new Error(`${n}
${s instanceof Error ? s.message : String(s)}`);
        r(i);
      }
    }, complete: () => t(n) });
  });
}
function pb(e) {
  return new Promise((t, r) => {
    let n = "", s = "";
    e.subscribe({ next: (i) => {
      i.source === "stdout" ? n += i.text : s += i.text;
    }, error: (i) => {
      if (i instanceof Kt) {
        const o = new Kt(`${n}
${i.message}`, i.exitCode, i.command, i.args, n, s);
        r(o);
      } else {
        const o = new Error(`${n}
${i instanceof Error ? i.message : String(i)}`);
        r(o);
      }
    }, complete: () => t([n, s]) });
  });
}
function Ep(e, t, r) {
  return r?.split ? pb(wp(e, t, { ...r ?? {}, split: true })) : fb(wp(e, t, { ...r ?? {}, split: false }));
}
var Kt, gb = k({ "spawn-promise.ts"() {
  "use strict";
  h(), sp(), Kt = class o2 extends Error {
    constructor(t, r, n, s, i, o) {
      super(t), this.name = "SpawnError", this.exitCode = r, this.code = r, this.stdout = i, this.stderr = o, this.command = n, this.args = s, Error.captureStackTrace && Error.captureStackTrace(this, o2);
    }
  };
} });
import { accessSync as _b, constants as mb, statSync as vb } from "node:fs";
function Ap({ workloadCgroupDir: e, hopCwd: t }) {
  const r = `echo $$ 2>/dev/null > '${e}/cgroup.procs'; echo 0 2>/dev/null > /proc/$$/oom_score_adj; `;
  return t !== void 0 ? r + hc : `${r}exec "$0" "$@"`;
}
function yb(e) {
  try {
    return vb(e).isDirectory() ? (_b(`${e}/cgroup.procs`, mb.W_OK), true) : false;
  } catch {
    return false;
  }
}
function Sb(e, t, r = yb) {
  return e !== "linux" || t === void 0 || !Tp.test(t) || t.includes("..") || !r(t) ? kp : Object.freeze({ kind: "armed", workloadCgroupDir: t, executable: "/bin/sh", argumentPrefix: Object.freeze(["-c", Ap({ workloadCgroupDir: t })]) });
}
function bb(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function wb(e, t) {
  return [t, ...e.slice(1)];
}
function Eb(e, t) {
  if (typeof e == "object" && e !== null && "pid" in e && typeof e.pid == "number") {
    t(e.pid);
    return;
  }
  typeof e == "object" && e !== null && "child" in e && typeof e.child == "object" && e.child !== null && "pid" in e.child && typeof e.child.pid == "number" && t(e.child.pid);
}
function Ab(e, t = P5) {
  return function(n, s, i, ...o) {
    const a = o[0], c = ap() && bb(a) ? X5(s, i, a) : void 0;
    let l = s, u = [...i], d = o;
    c?.hopped === true && c.hopCwd !== void 0 ? (d = wb(o, c.options), e.kind === "armed" ? (l = "/bin/sh", u = ["-c", Ap({ workloadCgroupDir: e.workloadCgroupDir, hopCwd: c.hopCwd }), uc, c.hopCwd, s, ...i]) : (l = c.command, u = c.args)) : e.kind === "armed" && (l = e.executable, u = [...e.argumentPrefix, s, ...i]);
    let f;
    try {
      f = n(l, u, ...d);
    } catch (p) {
      throw c?.hopped === true && c.hopCwd !== void 0 && hp(p, c.hopCwd), p;
    }
    return Eb(f, t), c?.hopped === true && c.hopCwd !== void 0 ? ib(f, c.hopCwd) : f;
  };
}
var Rp, Tp, kp, Ip, gr, Rb = k({ "workload-spawn.ts"() {
  "use strict";
  h(), O5(), vp(), Rp = "CURSOR_WORKLOAD_CGROUP", Tp = /^\/sys\/fs\/cgroup\/[A-Za-z0-9_/.-]+$/, kp = Object.freeze({ kind: "direct" }), Ip = Sb(process.platform, process.env[Rp]), gr = Ab(Ip);
} });
function Tb(e) {
  return e.replace(/[^a-zA-Z0-9]/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
}
var kb = k({ "workspace-paths.ts"() {
  "use strict";
  h();
} }), ze = k({ "index.ts"() {
  h(), sp(), N5(), vp(), gb(), Rb(), kb(), k5();
} }), Ib = k({ "abort-reason.ts"() {
  "use strict";
  h();
} });
import "@opentelemetry/api";
var Pb, Pp, Ob, Cb = k({ "browser-bridge.ts"() {
  "use strict";
  h(), Pb = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0")), Pp = new Uint8Array(1024), Ob = Pp.length;
} });
function Gr(e, t) {
  return { symbol: e, defaultValue: t };
}
function pc(e) {
  const t = new AbortController();
  if (e.aborted) return t.abort(e.reason), t;
  const r = () => t.abort(e.reason);
  return e.addEventListener("abort", r, { once: true }), { signal: t.signal, abort(n) {
    e.removeEventListener("abort", r), t.abort(n);
  } };
}
function Ii() {
  return new Op();
}
var Op, Cp = k({ "core.ts"() {
  "use strict";
  h(), Op = class Lr {
    constructor(t, r, n, s) {
      this.parent = t, this.values = n || /* @__PURE__ */ new Map(), this.name = s, r ? this.signal = r : t ? this.signal = t.signal : this.signal = new AbortController().signal;
    }
    get canceled() {
      return this.signal.aborted;
    }
    get reason() {
      return this.signal.reason;
    }
    get(t) {
      return this.values.has(t.symbol) ? this.values.get(t.symbol) : this.parent ? this.parent.get(t) : t.defaultValue;
    }
    with(t, r) {
      const n = new Map(this.values);
      return n.set(t.symbol, r), new Lr(this, void 0, n);
    }
    withCancel() {
      const t = pc(this.signal);
      return [new Lr(this, t.signal), (n) => t.abort(n)];
    }
    withTimeout(t) {
      const r = pc(this.signal), n = new Lr(this, r.signal), s = setTimeout(() => {
        r.abort(new Error("context deadline exceeded"));
      }, t);
      return r.signal.addEventListener("abort", () => {
        clearTimeout(s);
      }, { once: true }), n;
    }
    withDeadline(t) {
      const r = t.getTime() - Date.now();
      if (r <= 0) {
        const n = pc(this.signal);
        return n.abort(new Error("context deadline exceeded")), new Lr(this, n.signal);
      }
      return this.withTimeout(r);
    }
    withTimeoutAndCancel(t) {
      const [r, n] = this.withCancel();
      return [r.withTimeout(t), n];
    }
    withName(t) {
      return new Lr(this, void 0, void 0, t);
    }
    withDetached() {
      return new Lr(this, new AbortController().signal);
    }
    getParent() {
      return this.parent;
    }
    getPath() {
      const t = [];
      let r = this;
      for (; r; ) r.name && t.unshift(r.name), r = r.getParent();
      return t;
    }
  };
} });
function Lb(e) {
  if (typeof e == "boolean") return e;
  if (typeof process > "u") return false;
  const t = process.env ?? {};
  if ("NO_COLOR" in t || t.TERM === "dumb") return false;
  const r = t.FORCE_COLOR;
  return r === "1" || r === "true" ? true : r === "0" ? false : !!process.stdout?.isTTY;
}
function xb(e) {
  const t = "\x1B[0m", r = (p) => (g) => e ? `\x1B[${p.join(";")}m${g}${t}` : g, n = r([2]), s = r([90]), i = r([31]), o = r([32]), a = r([33]), c = r([34]), l = r([35]), u = r([36]), d = r([1]), f = r([1, 31]);
  return { dim: n, gray: s, red: i, green: o, yellow: a, blue: c, magenta: l, cyan: u, bold: d, level: (p, g) => {
    switch (p) {
      case "debug":
        return l(g);
      case "info":
        return c(g);
      case "warn":
        return a(g);
      case "error":
        return f(g);
      default:
        return p;
    }
  } };
}
function Mb(e) {
  return { indent: " ".repeat(e.indent ?? Dp), maxDepth: e.maxDepth ?? Np, maxEntries: e.maxEntries ?? Up, maxArrayLength: e.maxArrayLength ?? $p, maxStringLength: e.maxStringLength ?? Fp, includeTimestamp: e.includeTimestamp ?? true, includeContextPath: e.includeContextPath ?? true, inlineSerializer: e.inlineSerializer };
}
function Db(e) {
  return e.toISOString().slice(11, 23);
}
function Lp(e) {
  return typeof e == "object" && e !== null && "getPath" in e && typeof e.getPath == "function";
}
function gc(e) {
  return typeof e != "object" || e === null ? false : "message" in e || "stack" in e || "name" in e || "cause" in e;
}
function Nb(e) {
  return typeof e == "object" && e !== null && e.kind === "summary" && typeof e.summary == "string";
}
function Ub(e, t) {
  return e.length <= t ? e : `${e.slice(0, t)}...`;
}
function $b(e, t, r, n) {
  if (!t.inlineSerializer) return e;
  try {
    const s = t.inlineSerializer(e, { path: r, depth: n });
    return s === void 0 ? e : s;
  } catch {
    return e;
  }
}
function qt(e, t, r, n, s, i) {
  const o = $b(e, t, i, n);
  if (Nb(o)) return r.dim(`<${o.summary}>`);
  if (e = o, e === null) return r.gray("null");
  if (e === void 0) return r.gray("undefined");
  if (typeof e == "string") {
    const a = Ub(e, t.maxStringLength);
    return r.green(JSON.stringify(a));
  }
  if (typeof e == "number") return r.yellow(String(e));
  if (typeof e == "boolean") return r.magenta(String(e));
  if (typeof e == "bigint") return r.yellow(`${e}n`);
  if (typeof e == "symbol") return r.cyan(e.toString());
  if (typeof e == "function") {
    const a = e.name ? ` ${e.name}` : "";
    return r.dim(`[Function${a}]`);
  }
  if (e instanceof Date) {
    const a = Number.isNaN(e.getTime()) ? "Invalid Date" : e.toISOString();
    return r.green(a);
  }
  if (e instanceof RegExp) return r.cyan(e.toString());
  if (gc(e)) return xp(e, t, r, n, s, i);
  if (Array.isArray(e)) return Mp(e, t, r, n, s, i);
  if (typeof ArrayBuffer < "u" && e instanceof ArrayBuffer) return r.dim(`ArrayBuffer(${e.byteLength})`);
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && ArrayBuffer.isView(e)) {
    const a = e, c = a.constructor?.name ?? "TypedArray";
    return r.dim(`${c}(${a.byteLength})`);
  }
  return e instanceof Map ? Fb(e, t, r, n, s, i) : e instanceof Set ? Mp(Array.from(e.values()), t, r, n, s, i) : Hb(e, t, r, n, s, i);
}
function xp(e, t, r, n, s, i) {
  const o = e;
  if (s.has(o)) return r.dim("[Circular]");
  s.add(o);
  const a = typeof e.name == "string" ? e.name : "Error", c = typeof e.message == "string" ? e.message : "", l = c ? `${a}: ${c}` : a;
  let u = r.red(l);
  if ("cause" in e && e.cause !== void 0) {
    const d = qt(e.cause, t, r, n + 1, s, i.concat("cause"));
    u = `${u} ${r.dim("cause=")}${d}`;
  }
  return s.delete(o), u;
}
function Mp(e, t, r, n, s, i) {
  if (n >= t.maxDepth) return r.dim(`[Array(${e.length})]`);
  if (s.has(e)) return r.dim("[Circular]");
  if (s.add(e), e.length === 0) {
    const u = r.dim("[]");
    return s.delete(e), u;
  }
  const o = Math.min(e.length, t.maxArrayLength), a = e.slice(0, o).map((u, d) => qt(u, t, r, n + 1, s, i.concat(d)));
  e.length > o && a.push(r.dim(`... ${e.length - o} more`));
  const c = r.dim(", "), l = `${r.dim("[")}${a.join(c)}${r.dim("]")}`;
  return s.delete(e), l;
}
function Fb(e, t, r, n, s, i) {
  if (n >= t.maxDepth) return r.dim(`Map(${e.size})`);
  if (s.has(e)) return r.dim("[Circular]");
  s.add(e);
  const o = Array.from(e.entries()), a = Math.min(o.length, t.maxEntries), c = o.slice(0, a).map(([d, f]) => {
    const p = qt(d, t, r, n + 1, s, i.concat("<key>")), g = qt(f, t, r, n + 1, s, i.concat(String(d)));
    return `${p} ${r.dim("=>")} ${g}`;
  });
  o.length > a && c.push(r.dim(`... ${o.length - a} more`));
  const l = r.dim(", "), u = `${r.dim("Map{")}${c.join(l)}${r.dim("}")}`;
  return s.delete(e), u;
}
function Hb(e, t, r, n, s, i) {
  if (n >= t.maxDepth) {
    const d = e?.constructor?.name ?? "Object";
    return r.dim(`[${d}]`);
  }
  if (s.has(e)) return r.dim("[Circular]");
  s.add(e);
  const o = Object.entries(e);
  if (o.length === 0) {
    const d = r.dim("{}");
    return s.delete(e), d;
  }
  const a = Math.min(o.length, t.maxEntries), c = o.slice(0, a).map(([d, f]) => {
    const p = qt(f, t, r, n + 1, s, i.concat(d));
    return `${r.cyan(d)}: ${p}`;
  });
  o.length > a && c.push(r.dim(`... ${o.length - a} more`));
  const l = r.dim(", "), u = `${r.dim("{")}${c.join(l)}${r.dim("}")}`;
  return s.delete(e), u;
}
function Bb(e = {}) {
  const t = Mb(e), r = xb(Lb(e.useColors)), n = e.console ?? console;
  return { log: (s, i) => {
    const o = [];
    t.includeTimestamp && o.push(r.dim(Db(i.timestamp)));
    const a = i.level.toUpperCase().padEnd(5);
    o.push(r.level(i.level, a));
    const c = i.level === "error" ? r.bold(i.message) : i.message;
    if (o.push(c), t.includeContextPath && Lp(i.context)) {
      const f = i.context.getPath();
      f.length > 0 && o.push(r.dim(`ctx=${f.join("/")}`));
    }
    const l = /* @__PURE__ */ new WeakSet();
    if (!Lp(i.context) && i.context && Object.keys(i.context).length > 0) {
      const f = qt(i.context, t, r, 0, l, ["context"]);
      o.push(`${r.dim("context=")}${f}`);
    }
    if (i.metadata && Object.keys(i.metadata).length > 0) {
      const f = qt(i.metadata, t, r, 0, l, ["metadata"]);
      o.push(`${r.dim("meta=")}${f}`);
    }
    const u = [o.join(" ")];
    if (i.error !== void 0) {
      const f = gc(i.error) ? xp(i.error, t, r, 0, l, ["error"]) : qt(i.error, t, r, 0, l, ["error"]);
      if (u[0] = `${u[0]} ${r.dim("error=")}${f}`, gc(i.error) && typeof i.error.stack == "string") {
        const p = i.error.stack.split(`
`).slice(1);
        for (const g of p) {
          const _ = g.trim();
          _ && u.push(`${t.indent}${r.dim(_)}`);
        }
      }
    }
    const d = u.join(`
`);
    switch (i.level) {
      case "debug":
      case "info":
        n.log(d);
        break;
      case "warn":
        n.warn(d);
        break;
      case "error":
        n.error(d);
        break;
      default: {
        const f = i.level;
        throw new Error(`Unhandled log level: ${f}`);
      }
    }
  } };
}
function zb(e) {
  return e.get(zp);
}
function Wb(e) {
  function t(r, n) {
    const s = /* @__PURE__ */ new Date();
    zb(r).log(r, { ...n, timestamp: s, logger: e });
  }
  return { debug: (r, n, s) => {
    t(r, { level: "debug", message: n, context: r, metadata: s });
  }, info: (r, n, s) => {
    t(r, { level: "info", message: n, context: r, metadata: s });
  }, warn: (r, n, s) => {
    t(r, { level: "warn", message: n, context: r, metadata: s });
  }, error: (r, n, s, i) => {
    t(r, { level: "error", message: n, context: r, error: s, metadata: i });
  } };
}
var Dp, Np, Up, $p, Fp, Hp, Bp, zp, Gb = k({ "logger.ts"() {
  "use strict";
  h(), Tt(), Dp = 2, Np = 6, Up = 50, $p = 40, Fp = 200, Hp = Bb(), Bp = { log: (e, t) => Hp.log(e, t) }, zp = Gr(/* @__PURE__ */ Symbol("loggerBackend"), Bp);
} });
import { context as Wp, trace as _c } from "@opentelemetry/api";
function Kb(e) {
  return jb?.(e) ?? false;
}
function Gp(e) {
  return e.name || "anonymous-context";
}
function Kp(e, t) {
  return t ? e.get(jp) || Kb(Gp(e)) : false;
}
function qp(e = "context-tracer") {
  return _c.getTracer(e);
}
function qb(e, t) {
  const r = qp(), n = e.get(Pi);
  if (Kp(e, n)) return e;
  const s = Gp(e);
  let i;
  if (n) {
    const l = _c.setSpan(Wp.active(), n);
    i = r.startSpan(s, t, l);
  } else i = r.startSpan(s, t);
  const o = e.get(Sc);
  for (const l in o) i.setAttribute(l, o[l]);
  const a = Date.now();
  let c = e.with(Pi, i);
  return n || (c = c.with(vc, i).with(yc, a)), c;
}
function mc(e) {
  return e.get(Pi);
}
function jt(e, t) {
  try {
    const r = qp(), n = mc(e);
    if (!n) return;
    const s = _c.setSpan(Wp.active(), n), i = r.startSpan(t, void 0, s), o = e.get(Sc);
    for (const f in o) i.setAttribute(f, o[f]);
    const a = Date.now(), c = e.get(yc), l = typeof c == "number" ? a - c : 0, u = `event.${t}`;
    (e.get(vc) ?? n).setAttribute(u, l), i.setAttribute(u, l), i.end();
  } catch {
  }
}
function _r(e, t) {
  const r = mc(e), n = Kp(e, r), s = qb(e, t), i = mc(s);
  return new Vp(s, i, !n);
}
var Pi, vc, yc, jp, Sc, jb, Vb, Vp, Yb = k({ "otel.ts"() {
  "use strict";
  h(), Cp(), Pi = Gr(/* @__PURE__ */ Symbol("otel.span"), void 0), vc = Gr(/* @__PURE__ */ Symbol("otel.root_span"), void 0), yc = Gr(/* @__PURE__ */ Symbol("otel.root_start_ms"), void 0), jp = Gr(/* @__PURE__ */ Symbol("otel.suppress_child_spans"), false), Sc = Gr(/* @__PURE__ */ Symbol("otel.inheritable_span_attributes"), {}), Vb = /* @__PURE__ */ Symbol.for("anysphere.context.activeOtelSpanAls"), Vp = class {
    constructor(e, t, r = true) {
      this.ctx = e, this.span = t, this.shouldEnd = r;
    }
    [Symbol.dispose]() {
      this.shouldEnd && this.span.end();
    }
  };
} }), Tt = k({ "index.ts"() {
  h(), Ib(), Cb(), Cp(), Gb(), Yb();
} });
import { delimiter as Yp, dirname as Xb, isAbsolute as Jb } from "node:path";
function Zb() {
  const e = Ke("rg", []).cmd;
  return e !== "rg" ? e : void 0;
}
function Xp(e) {
  if (!e) throw new Error("configureRipgrepPath: path must not be empty");
  Vt = e;
}
function Jp(e) {
  const t = Object.keys(e).filter((r) => r.toLowerCase() === "path");
  if (t.length !== 0) return process.platform === "win32" ? t.find((r) => r === "Path") ?? t[0] : t.find((r) => r === "PATH") ?? t[0];
}
function Qb(e) {
  const t = Jp(e);
  return t !== void 0 ? e[t] ?? "" : "";
}
function e7(e, t) {
  const r = Jp(e) ?? (process.platform === "win32" ? "Path" : "PATH"), n = { ...e };
  for (const s of Object.keys(n)) s !== r && s.toLowerCase() === "path" && delete n[s];
  return n[r] = t, n;
}
function t7(e, t) {
  const r = Xb(t);
  if (!r || r === ".") return e;
  const n = Qb(e).split(Yp).filter(Boolean), s = [r, ...n.filter((i) => i !== r)].join(Yp);
  return e7(e, s);
}
function bc(e) {
  return !Vt || !Jb(Vt) ? e : { ...t7(e, Vt), CURSOR_RIPGREP_PATH: Vt };
}
function wc() {
  if (!Vt) throw new Error("Ripgrep path not configured. Call configureRipgrepPath() at startup.");
  return Vt;
}
function Zp() {
  return Vt !== void 0;
}
var Vt, Ec = k({ "ripgrep.ts"() {
  "use strict";
  h(), ze();
} });
function Ac(e) {
  const t = e || process.env, { ELECTRON_RUN_AS_NODE: r, ...n } = t;
  return n;
}
function Qp(e) {
  const t = { ...e };
  for (const r of e1) delete t[r];
  return t;
}
var e1, t1 = k({ "env-filter.ts"() {
  "use strict";
  h(), e1 = ["SSH_AUTH_SOCK", "DBUS_SESSION_BUS_ADDRESS", "XDG_RUNTIME_DIR", "WAYLAND_DISPLAY"];
} });
import { randomBytes as r7 } from "node:crypto";
import { lstatSync as n7, mkdirSync as s7 } from "node:fs";
import { tmpdir as r1 } from "node:os";
import { join as ce, resolve as i7 } from "node:path";
function o7() {
  return r7(16).toString("hex");
}
function a7() {
  return Tc || (Tc = o7()), Tc;
}
function c7(e, t) {
  const r = n7(e);
  return r.isDirectory() && r.uid === t && (r.mode & 18) === 0;
}
function l7(e) {
  try {
    s7(e, { mode: 448 });
  } catch (t) {
    if (t.code !== "EEXIST") throw t;
  }
}
function u7(e) {
  return n1(e, { create: true });
}
function d7(e) {
  return n1(e, { create: false });
}
function n1(e, { create: t }) {
  const r = process.getuid?.();
  if (r === void 0) return;
  const n = ce(r1(), `cursor-sandbox-${Tb(i7(e))}`);
  try {
    for (const s of [n, ce(n, "tmp")]) if (t && l7(s), !c7(s, r)) return;
    return n;
  } catch {
    return;
  }
}
function h7(e) {
  const t = ce(e, "tmp");
  return { TMPDIR: t, TMP: t, TEMP: t, TMPPREFIX: ce(t, "sh-") };
}
function Rc(e = ce(r1(), s1, a7())) {
  return { NPM_CONFIG_CACHE: ce(e, "npm"), PNPM_STORE_PATH: ce(e, "pnpm-store"), GOCACHE: ce(e, "go-build"), GOMODCACHE: ce(e, "go-mod"), CARGO_TARGET_DIR: ce(e, "cargo-target"), PIP_CACHE_DIR: ce(e, "pip"), UV_CACHE_DIR: ce(e, "uv"), BUN_INSTALL_CACHE_DIR: ce(e, "bun"), YARN_CACHE_FOLDER: ce(e, "yarn"), npm_config_devdir: ce(e, "node-gyp"), PLAYWRIGHT_BROWSERS_PATH: ce(e, "playwright"), PUPPETEER_CACHE_DIR: ce(e, "puppeteer"), TURBO_CACHE_DIR: ce(e, "turbo"), GRADLE_USER_HOME: ce(e, "gradle"), CONDA_PKGS_DIRS: ce(e, "conda"), POETRY_CACHE_DIR: ce(e, "poetry"), GEM_SPEC_CACHE: ce(e, "gem-specs"), BUNDLE_PATH: ce(e, "bundle"), COMPOSER_HOME: ce(e, "composer"), HOMEBREW_CACHE: ce(e, "homebrew"), CYPRESS_CACHE_FOLDER: ce(e, "cypress"), NX_CACHE_DIRECTORY: ce(e, "nx"), NUGET_PACKAGES: ce(e, "nuget"), CCACHE_DIR: ce(e, "ccache"), CP_HOME_DIR: ce(e, "cocoapods") };
}
var s1, Tc, Oi, Kr = k({ "cache-env.ts"() {
  "use strict";
  h(), ze(), s1 = "cursor-sandbox-cache", Oi = 'builtin eval "${__CURSOR_SANDBOX_TEMP_RESTORE:-}" 2>/dev/null; ';
} }), f7 = G2({ "index.js"(e, t) {
  h();
  function r(E) {
    return Array.isArray(E) ? E : [E];
  }
  var n = void 0, s = "", i = " ", o = "\\", a = /^\s+$/, c = /(?:[^\\]|^)\\$/, l = /^\\!/, u = /^\\#/, d = /\r?\n/g, f = /^\.{0,2}\/|^\.{1,2}$/, p = /\/$/, g = "/", _ = "node-ignore";
  typeof Symbol < "u" && (_ = /* @__PURE__ */ Symbol.for("node-ignore"));
  var y = _, m = (E, x, U) => (Object.defineProperty(E, x, { value: U }), U), A = /([0-z])-([0-z])/g, S = () => false, v = (E) => E.replace(A, (x, U, q) => U.charCodeAt(0) <= q.charCodeAt(0) ? x : s), b = (E) => {
    const { length: x } = E;
    return E.slice(0, x - x % 2);
  }, I = [[/^\uFEFF/, () => s], [/((?:\\\\)*?)(\\?\s+)$/, (E, x, U) => x + (U.indexOf("\\") === 0 ? i : s)], [/(\\+?)\s/g, (E, x) => {
    const { length: U } = x;
    return x.slice(0, U - U % 2) + i;
  }], [/[\\$.|*+(){^]/g, (E) => `\\${E}`], [/(?!\\)\?/g, () => "[^/]"], [/^\//, () => "^"], [/\//g, () => "\\/"], [/^\^*\\\*\\\*\\\//, () => "^(?:.*\\/)?"], [/^(?=[^^])/, function() {
    return /\/(?!$)/.test(this) ? "^" : "(?:^|\\/)";
  }], [/\\\/\\\*\\\*(?=\\\/|$)/g, (E, x, U) => x + 6 < U.length ? "(?:\\/[^\\/]+)*" : "\\/.+"], [/(^|[^\\]+)(\\\*)+(?=.+)/g, (E, x, U) => {
    const q = U.replace(/\\\*/g, "[^\\/]*");
    return x + q;
  }], [/\\\\\\(?=[$.|*+(){^])/g, () => o], [/\\\\/g, () => o], [/(\\)?\[([^\]/]*?)(\\*)($|\])/g, (E, x, U, q, ue) => x === o ? `\\[${U}${b(q)}${ue}` : ue === "]" && q.length % 2 === 0 ? `[${v(U)}${q}]` : "[]"], [/(?:[^*])$/, (E) => /\/$/.test(E) ? `${E}$` : `${E}(?=$|\\/$)`]], O = /(^|\\\/)?\\\*$/, M = "regex", F = "checkRegex", H = "_", ee = { [M](E, x) {
    return `${x ? `${x}[^/]+` : "[^/]*"}(?=$|\\/$)`;
  }, [F](E, x) {
    return `${x ? `${x}[^/]*` : "[^/]*"}(?=$|\\/$)`;
  } }, Y = (E) => I.reduce((x, [U, q]) => x.replace(U, q.bind(E)), E), B = (E) => typeof E == "string", P = (E) => E && B(E) && !a.test(E) && !c.test(E) && E.indexOf("#") !== 0, T = (E) => E.split(d).filter(Boolean), R = class {
    constructor(E, x, U, q, ue, ht) {
      this.pattern = E, this.mark = x, this.negative = ue, m(this, "body", U), m(this, "ignoreCase", q), m(this, "regexPrefix", ht);
    }
    get regex() {
      const E = H + M;
      return this[E] ? this[E] : this._make(M, E);
    }
    get checkRegex() {
      const E = H + F;
      return this[E] ? this[E] : this._make(F, E);
    }
    _make(E, x) {
      const U = this.regexPrefix.replace(O, ee[E]), q = this.ignoreCase ? new RegExp(U, "i") : new RegExp(U);
      return m(this, x, q);
    }
  }, C = ({ pattern: E, mark: x }, U) => {
    let q = false, ue = E;
    ue.indexOf("!") === 0 && (q = true, ue = ue.substr(1)), ue = ue.replace(l, "!").replace(u, "#");
    const ht = Y(ue);
    return new R(E, x, ue, U, q, ht);
  }, L = class {
    constructor(E) {
      this._ignoreCase = E, this._rules = [];
    }
    _add(E) {
      if (E && E[y]) {
        this._rules = this._rules.concat(E._rules._rules), this._added = true;
        return;
      }
      if (B(E) && (E = { pattern: E }), P(E.pattern)) {
        const x = C(E, this._ignoreCase);
        this._added = true, this._rules.push(x);
      }
    }
    add(E) {
      return this._added = false, r(B(E) ? T(E) : E).forEach(this._add, this), this._added;
    }
    test(E, x, U) {
      let q = false, ue = false, ht;
      this._rules.forEach((Dn) => {
        const { negative: lr } = Dn;
        ue === lr && q !== ue || lr && !q && !ue && !x || !Dn[U].test(E) || (q = !lr, ue = lr, ht = lr ? n : Dn);
      });
      const Mn = { ignored: q, unignored: ue };
      return ht && (Mn.rule = ht), Mn;
    }
  }, D = (E, x) => {
    throw new x(E);
  }, N = (E, x, U) => B(E) ? E ? N.isNotRelative(E) ? U(`path should be a \`path.relative()\`d string, but got "${x}"`, RangeError) : true : U("path must not be empty", TypeError) : U(`path must be a string, but got \`${x}\``, TypeError), z = (E) => f.test(E);
  N.isNotRelative = z, N.convert = (E) => E;
  var Q = class {
    constructor({ ignorecase: E = true, ignoreCase: x = E, allowRelativePaths: U = false } = {}) {
      m(this, y, true), this._rules = new L(x), this._strictPathCheck = !U, this._initCache();
    }
    _initCache() {
      this._ignoreCache = /* @__PURE__ */ Object.create(null), this._testCache = /* @__PURE__ */ Object.create(null);
    }
    add(E) {
      return this._rules.add(E) && this._initCache(), this;
    }
    addPattern(E) {
      return this.add(E);
    }
    _test(E, x, U, q) {
      const ue = E && N.convert(E);
      return N(ue, E, this._strictPathCheck ? D : S), this._t(ue, x, U, q);
    }
    checkIgnore(E) {
      if (!p.test(E)) return this.test(E);
      const x = E.split(g).filter(Boolean);
      if (x.pop(), x.length) {
        const U = this._t(x.join(g) + g, this._testCache, true, x);
        if (U.ignored) return U;
      }
      return this._rules.test(E, false, F);
    }
    _t(E, x, U, q) {
      if (E in x) return x[E];
      if (q || (q = E.split(g).filter(Boolean)), q.pop(), !q.length) return x[E] = this._rules.test(E, U, M);
      const ue = this._t(q.join(g) + g, x, U, q);
      return x[E] = ue.ignored ? ue : this._rules.test(E, U, M);
    }
    ignores(E) {
      return this._test(E, this._ignoreCache, false).ignored;
    }
    createFilter() {
      return (E) => !this.ignores(E);
    }
    filter(E) {
      return r(E).filter(this.createFilter());
    }
    test(E) {
      return this._test(E, this._testCache, true);
    }
  }, G = (E) => new Q(E), Me = (E) => N(E && N.convert(E), E, S), He = () => {
    const E = (U) => /^\\\\\?\\/.test(U) || /["<>|\u0000-\u001F]+/u.test(U) ? U : U.replace(/\\/g, "/");
    N.convert = E;
    const x = /^[a-z]:\//i;
    N.isNotRelative = (U) => x.test(U) || z(U);
  };
  typeof process < "u" && process.platform === "win32" && He(), t.exports = G, G.default = G, t.exports.isPathValid = Me, m(t.exports, /* @__PURE__ */ Symbol.for("setupWindows"), He);
} });
import { existsSync as p7, lstatSync as i1, statSync as o1 } from "node:fs";
import { stat as g7 } from "node:fs/promises";
import kc from "node:os";
import { dirname as _7, join as Ci, relative as a1, resolve as m7, sep as Ic } from "node:path";
function c1(e = process.platform, t = kc.homedir(), r = {}) {
  const n = [];
  for (const s of p1) {
    if (s.platform !== e) continue;
    if (s.scope === "global") {
      n.push(s.path);
      continue;
    }
    const i = s.scope === "bundled" ? r[s.path] : Ci(t, s.path);
    if (i) try {
      let o;
      switch (s.scope) {
        case "home":
          o = i1(i).isFile();
          break;
        case "home-dir":
          o = i1(i).isDirectory();
          break;
        case "bundled":
          o = o1(i).isFile();
          break;
      }
      o && n.push(i);
    } catch {
    }
  }
  return n;
}
function v7(...e) {
  const t = {};
  for (const r of e) {
    let n = false;
    try {
      n = p7(r) && o1(r).isDirectory();
    } catch {
    }
    if (n) t[r] || (t[r] = []), t[r].push("**");
    else {
      const s = r.lastIndexOf("/"), i = s > 0 ? r.slice(0, s) : "/", o = s >= 0 ? r.slice(s + 1) : r;
      t[i] || (t[i] = []), o ? t[i].push(o, `${o}/**`) : t[i].push("**");
    }
  }
  return t;
}
function y7(e) {
  const t = pt.filter((r) => r.type === "workspace").map((r) => r.pattern);
  return { [e]: t };
}
function S7(e) {
  const t = pt.filter((r) => r.type === "git").map((r) => r.pattern);
  return { [e]: t };
}
function b7(e) {
  const t = pt.filter((r) => r.type === "worktree").map((r) => r.pattern);
  return { [e]: t };
}
function w7() {
  if (xc.length !== 0) return { version: 1, deny: [...xc] };
}
function E7(e, t) {
  return t ? e ?? "system" : "system";
}
function A7(e) {
  const t = w7(), r = kc.homedir(), n = [];
  for (const s of pt) switch (s.type) {
    case "workspace":
      break;
    case "git":
      break;
    case "worktree":
      break;
    case "absolute": {
      n.push(s.pattern);
      break;
    }
    case "home": {
      r.length > 0 && n.push(Ci(r, s.pattern));
      break;
    }
    default: {
      const i = s.type;
      throw new Error(`Unknown entry type: ${i}`);
    }
  }
  return { type: "workspace_readwrite", additionalReadonlyPaths: n, writeProtectionMapping: y7(e), ...t && { networkPolicy: t }, networkPolicyStrict: true };
}
function R7() {
  return Jn === null && (Jn = (0, Oc.default)({ ignoreCase: true }), Jn.add(pt.filter((e) => e.type === "workspace").map((e) => e.pattern))), Jn;
}
function T7() {
  return Zn === null && (Zn = (0, Oc.default)({ ignoreCase: true }), Zn.add(pt.filter((e) => e.type === "git").map((e) => e.pattern))), Zn;
}
async function k7(e) {
  try {
    const t = await Ep("git", ["rev-parse", "--git-common-dir"], { cwd: e });
    return _7(m7(e, t.trim()));
  } catch {
    return null;
  }
}
function I7() {
  if (xi !== null) return xi;
  const e = kc.homedir(), t = [];
  for (const r of pt) switch (r.type) {
    case "absolute":
      t.push(r.pattern);
      break;
    case "home":
      e.length > 0 && t.push(Ci(e, r.pattern));
      break;
    default:
      break;
  }
  return xi = t, t;
}
async function P7(e) {
  const t = Mi.get(e);
  if (t) return t;
  if (!((await g7(Ci(e, ".git")).catch(() => null))?.isFile() ?? false)) {
    const o = { isWorktree: false, gitDirParent: e };
    return Mi.set(e, o), o;
  }
  const i = { isWorktree: true, gitDirParent: await k7(e) ?? e };
  return Mi.set(e, i), i;
}
function l1(e) {
  if (!e.endsWith(Ic)) return e;
  const t = e.slice(0, -1);
  return t === "" || process.platform === "win32" && /^[a-zA-Z]:$/.test(t) ? e : t;
}
function u1(e) {
  return e.endsWith(Ic) ? e : e + Ic;
}
function Li(e, t) {
  const r = l1(t);
  if (Mc) {
    const n = e.toLowerCase(), s = r.toLowerCase();
    return n === s || n.startsWith(u1(s));
  }
  return e === r || e.startsWith(u1(r));
}
function Pc(e, t) {
  const r = l1(e);
  return Mc ? a1(r.toLowerCase(), t.toLowerCase()).replace(/\\/g, "/") : a1(r, t).replace(/\\/g, "/");
}
async function O7(e, t) {
  if (Li(e, t)) {
    const s = Pc(t, e);
    if (R7().ignores(s)) return true;
  }
  const { isWorktree: r, gitDirParent: n } = await P7(t);
  if (Li(e, n)) {
    const s = Pc(n, e);
    if (T7().ignores(s)) return true;
  }
  if (r && Li(e, t) && Pc(t, e) === ".git") return true;
  for (const s of I7()) if (Li(e, s)) return true;
  return false;
}
var Oc, d1, h1, Cc, f1, Lc, p1, pt, C7, L7, xc, Jn, Zn, xi, Mi, Mc, Dc = k({ "hardcoded-policy.ts"() {
  "use strict";
  h(), ze(), Oc = q2(f7(), 1), d1 = [".local/bin", ".local/share/mise", ".local/share/pnpm", ".nvm", ".volta", ".asdf", ".pyenv", ".rbenv", ".rustup", ".cargo/bin", ".cargo/registry", ".cargo/git"], h1 = ["bin", "sbin", "lib", "opt", "Cellar", "share", "Frameworks", "etc/gitconfig", "etc/openssl@3/cert.pem", "etc/openssl@3/openssl.cnf", "etc/ca-certificates"], Cc = (e, t) => t.flatMap((r) => h1.map((n) => ({ platform: e, scope: "global", path: `${r}/${n}` }))), f1 = { linux: [".cache/node", ".cache/yarn"], darwin: [".cache/node", "Library/Caches/Yarn"] }, Lc = (e) => [...d1, ...f1[e]].map((t) => ({ platform: e, scope: "home-dir", path: t })), p1 = [{ platform: "linux", scope: "global", path: "/bin" }, { platform: "linux", scope: "global", path: "/sbin" }, { platform: "linux", scope: "global", path: "/usr/bin" }, { platform: "linux", scope: "global", path: "/usr/sbin" }, { platform: "linux", scope: "global", path: "/lib" }, { platform: "linux", scope: "global", path: "/lib64" }, { platform: "linux", scope: "global", path: "/usr/lib" }, { platform: "linux", scope: "global", path: "/usr/lib64" }, { platform: "linux", scope: "global", path: "/usr/libexec" }, { platform: "linux", scope: "global", path: "/usr/share" }, { platform: "linux", scope: "global", path: "/etc/ld.so.cache" }, { platform: "linux", scope: "global", path: "/etc/ld.so.conf" }, { platform: "linux", scope: "global", path: "/etc/ld.so.conf.d" }, { platform: "linux", scope: "global", path: "/etc/ssl/certs" }, { platform: "linux", scope: "global", path: "/etc/ssl/openssl.cnf" }, { platform: "linux", scope: "global", path: "/etc/ssl/cert.pem" }, { platform: "linux", scope: "global", path: "/etc/ssl/ca-bundle.pem" }, { platform: "linux", scope: "global", path: "/etc/ssl/certs/ca-certificates.crt" }, { platform: "linux", scope: "global", path: "/etc/pki/tls/certs" }, { platform: "linux", scope: "global", path: "/etc/pki/tls/openssl.cnf" }, { platform: "linux", scope: "global", path: "/etc/pki/ca-trust/extracted" }, { platform: "linux", scope: "global", path: "/etc/resolv.conf" }, { platform: "linux", scope: "global", path: "/etc/hosts" }, { platform: "linux", scope: "global", path: "/etc/nsswitch.conf" }, { platform: "linux", scope: "global", path: "/etc/gai.conf" }, { platform: "linux", scope: "global", path: "/etc/alternatives" }, { platform: "linux", scope: "global", path: "/etc/mime.types" }, { platform: "linux", scope: "global", path: "/etc/profile" }, { platform: "linux", scope: "global", path: "/etc/bash.bashrc" }, { platform: "linux", scope: "global", path: "/etc/zsh/zshenv" }, { platform: "linux", scope: "global", path: "/etc/zsh/zprofile" }, { platform: "linux", scope: "global", path: "/etc/zsh/zshrc" }, { platform: "linux", scope: "global", path: "/etc/zsh/zlogin" }, { platform: "linux", scope: "global", path: "/etc/gitconfig" }, { platform: "linux", scope: "home", path: ".bashrc" }, { platform: "linux", scope: "home", path: ".bash_profile" }, { platform: "linux", scope: "home", path: ".profile" }, { platform: "linux", scope: "home", path: ".zshenv" }, { platform: "linux", scope: "home", path: ".zprofile" }, { platform: "linux", scope: "home", path: ".zshrc" }, { platform: "linux", scope: "home", path: ".zlogin" }, { platform: "linux", scope: "home", path: ".gitconfig" }, { platform: "linux", scope: "home", path: ".ssh/known_hosts" }, { platform: "linux", scope: "home", path: ".config/mise/config.toml" }, { platform: "linux", scope: "home-dir", path: ".cache/dotslash" }, ...Lc("linux"), ...Cc("linux", ["/usr/local", "/home/linuxbrew/.linuxbrew"]), { platform: "linux", scope: "global", path: "/usr/local/go" }, { platform: "linux", scope: "global", path: "/nix/store" }, { platform: "linux", scope: "global", path: "/nix/var/nix/profiles" }, { platform: "linux", scope: "bundled", path: "ripgrep" }, { platform: "darwin", scope: "global", path: "/bin" }, { platform: "darwin", scope: "global", path: "/usr/bin" }, { platform: "darwin", scope: "global", path: "/usr/lib" }, { platform: "darwin", scope: "global", path: "/usr/libexec" }, { platform: "darwin", scope: "global", path: "/usr/share" }, { platform: "darwin", scope: "global", path: "/System/Library" }, { platform: "darwin", scope: "global", path: "/System/Cryptexes" }, { platform: "darwin", scope: "global", path: "/Library/Apple" }, { platform: "darwin", scope: "global", path: "/Library/Developer/CommandLineTools" }, { platform: "darwin", scope: "global", path: "/Applications/Xcode.app" }, { platform: "darwin", scope: "global", path: "/Library/Preferences/com.apple.dt.Xcode.plist" }, { platform: "darwin", scope: "global", path: "/private/etc/ssl/cert.pem" }, { platform: "darwin", scope: "global", path: "/private/etc/ssl/certs" }, { platform: "darwin", scope: "global", path: "/private/etc/ssl/openssl.cnf" }, { platform: "darwin", scope: "global", path: "/private/etc/hosts" }, { platform: "darwin", scope: "global", path: "/private/etc/resolv.conf" }, { platform: "darwin", scope: "global", path: "/private/etc/apache2/mime.types" }, { platform: "darwin", scope: "global", path: "/etc/profile" }, { platform: "darwin", scope: "global", path: "/etc/bashrc" }, { platform: "darwin", scope: "global", path: "/etc/zshenv" }, { platform: "darwin", scope: "global", path: "/etc/zprofile" }, { platform: "darwin", scope: "global", path: "/etc/zshrc" }, { platform: "darwin", scope: "global", path: "/etc/zlogin" }, { platform: "darwin", scope: "global", path: "/etc/gitconfig" }, { platform: "darwin", scope: "home", path: ".bashrc" }, { platform: "darwin", scope: "home", path: ".bash_profile" }, { platform: "darwin", scope: "home", path: ".profile" }, { platform: "darwin", scope: "home", path: ".zshenv" }, { platform: "darwin", scope: "home", path: ".zprofile" }, { platform: "darwin", scope: "home", path: ".zshrc" }, { platform: "darwin", scope: "home", path: ".zlogin" }, { platform: "darwin", scope: "home", path: ".gitconfig" }, { platform: "darwin", scope: "home", path: ".ssh/known_hosts" }, { platform: "darwin", scope: "home", path: "Library/Preferences/.GlobalPreferences.plist" }, { platform: "darwin", scope: "home", path: ".config/mise/config.toml" }, { platform: "darwin", scope: "home-dir", path: "Library/Python" }, { platform: "darwin", scope: "home-dir", path: "Library/Caches/dotslash" }, ...Lc("darwin"), ...Cc("darwin", ["/opt/homebrew", "/usr/local"]), { platform: "darwin", scope: "global", path: "/nix/store" }, { platform: "darwin", scope: "global", path: "/nix/var/nix/profiles" }, { platform: "darwin", scope: "bundled", path: "ripgrep" }, { platform: "darwin", scope: "global", path: "/dev/null" }, { platform: "darwin", scope: "global", path: "/dev/zero" }, { platform: "darwin", scope: "global", path: "/dev/random" }, { platform: "darwin", scope: "global", path: "/dev/urandom" }], pt = [{ type: "workspace", pattern: "**/.cursor/*.json" }, { type: "workspace", pattern: "**/.cursor/**/*.json" }, { type: "workspace", pattern: "**/.cursor/.workspace-trusted" }, { type: "workspace", pattern: "!**/.cursor/rules" }, { type: "workspace", pattern: "!**/.cursor/rules/**" }, { type: "workspace", pattern: "!**/.cursor/commands" }, { type: "workspace", pattern: "!**/.cursor/commands/**" }, { type: "workspace", pattern: "!**/.cursor/worktrees" }, { type: "workspace", pattern: "!**/.cursor/worktrees/**" }, { type: "workspace", pattern: "!**/.cursor/skills" }, { type: "workspace", pattern: "!**/.cursor/skills/**" }, { type: "workspace", pattern: "!**/.cursor/agents" }, { type: "workspace", pattern: "!**/.cursor/agents/**" }, { type: "workspace", pattern: "**/.claude/*.json" }, { type: "workspace", pattern: "**/.claude/**/*.json" }, { type: "workspace", pattern: "**/.vscode/**" }, { type: "workspace", pattern: "**/.idea/**" }, { type: "workspace", pattern: "**/.venv/" }, { type: "workspace", pattern: "**/venv/" }, { type: "workspace", pattern: "**/*.code-workspace" }, { type: "workspace", pattern: "**/.cursorignore" }, { type: "workspace", pattern: "**/.workspace-trusted" }, { type: "workspace", pattern: "**/.cursor/**/cli.json" }, { type: "workspace", pattern: "**/.cursor/**/cli-config.json" }, { type: "workspace", pattern: "**/.cursor/**/mcp.json" }, { type: "workspace", pattern: "**/.cursor/**/mcp-approvals.json" }, { type: "workspace", pattern: "**/.cursor/**/permissions.json" }, { type: "git", pattern: "**/.git/hooks/**" }, { type: "git", pattern: "**/.git/config" }, { type: "git", pattern: "**/.git/config.worktree" }, { type: "git", pattern: "**/.git/info/attributes" }, { type: "git", pattern: "**/.git/commondir" }, { type: "git", pattern: "**/.git/worktrees/*/commondir" }, { type: "worktree", pattern: ".git" }, { type: "absolute", pattern: "/etc/ssl/cert.pem" }, { type: "absolute", pattern: "/etc/ssl/ca-bundle.pem" }, { type: "absolute", pattern: "/private/etc/ssl/cert.pem" }, { type: "absolute", pattern: "/etc/ssl/certs/ca-certificates.crt" }, { type: "absolute", pattern: "/etc/pki/tls/certs/ca-bundle.crt" }, { type: "absolute", pattern: "/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem" }, { type: "home", pattern: ".cursor/sandbox-policies" }], C7 = pt.filter((e) => e.type === "git").map((e) => e.pattern), L7 = pt.filter((e) => e.type === "workspace" && e.pattern.startsWith("!") && !e.pattern.endsWith("/**")).map((e) => e.pattern.replace(/^!(\*\*\/)?/, "")), xc = [], Jn = null, Zn = null, xi = null, Mi = /* @__PURE__ */ new Map(), Mc = process.platform === "win32" || process.platform === "darwin";
} });
import { execFile as x7 } from "node:child_process";
function M7(e, t) {
  Nc.set(e, t);
}
async function D7(e) {
  const t = Nc.get(e);
  return t ? N7(t.pid, t.startTime, t.unrelatedPids) : (console.log("No sandbox metadata found on child process"), []);
}
function g1(e, t, r) {
  return e === t ? "related" : r?.has(e) ? "probably_unrelated" : "maybe_related";
}
function N7(e, t, r) {
  return new Promise((n) => {
    try {
      const o = ["show", "--style", "ndjson", "--predicate", 'process=="kernel" AND eventMessage CONTAINS "Sandbox:" AND eventMessage contains "deny"', "--last", Math.ceil(((/* @__PURE__ */ new Date()).getTime() - t.getTime()) / 1e3).toString()];
      gr(_1, "/usr/bin/log", o, (a, c) => {
        if (a) {
          n([{ raw: a.message }]);
          return;
        }
        const l = c.split(/\r?\n/).filter((d) => d.trim().length > 0), u = [];
        for (const d of l) try {
          const f = JSON.parse(d), p = f?.eventMessage ?? "";
          if (!p || typeof p != "string") continue;
          const g = /^Sandbox:\s+([^(]+)\((\d+)\)\s+([a-zA-Z-]+)\((\d+)\)\s+([^\s]+)\s+(.+)$/.exec(p);
          if (g) {
            const [, y, m, A, S, v, b] = g, I = Number(m);
            u.push({ timestamp: f.timestamp, processName: y.trim(), pid: I, decision: A.toLowerCase(), decisionCode: Number(S), operation: v, target: b, duplicateCount: 1, raw: p, relationship: g1(I, e, r) });
            continue;
          }
          const _ = /^(\d+) duplicate report for Sandbox: (.+)$/.exec(p);
          if (_) {
            const y = Number(_[1]), m = _[2], A = /^([^(]+)\((\d+)\)\s+([a-zA-Z-]+)\((\d+)\)\s+([^\s]+)\s+(.+)$/.exec(m);
            if (A) {
              const [, S, v, b, I, O, M] = A, F = Number(v);
              u.push({ timestamp: f.timestamp, processName: S.trim(), pid: F, decision: b.toLowerCase(), decisionCode: Number(I), operation: O, target: M, duplicateCount: y, raw: p, relationship: g1(F, e, r) });
            } else u.push({ timestamp: f.timestamp, duplicateCount: y, raw: p });
            continue;
          }
          u.push({ timestamp: f.timestamp, raw: p });
        } catch {
        }
        n(u);
      });
    } catch (s) {
      n([{ raw: String(s) }]);
    }
  });
}
var _1, Nc, m1 = k({ "seatbelt.ts"() {
  "use strict";
  h(), ze(), _1 = x7, Nc = /* @__PURE__ */ new WeakMap();
} });
function U7(e) {
  return e !== void 0 ? e : { version: 1, default: "deny" };
}
function Uc(e) {
  return e === void 0 ? false : e.default === "allow" || e.allow !== void 0 && e.allow.length > 0;
}
function $7(e) {
  return e === void 0 ? false : e.default === "allow";
}
function F7() {
  return { version: 1, default: "deny" };
}
function H7() {
  return { version: 1, default: "allow" };
}
var $c = k({ "network-policy-utils.ts"() {
  "use strict";
  h();
} });
import * as B7 from "node:crypto";
import * as qr from "node:fs";
import * as z7 from "node:os";
import * as Qn from "node:path";
function W7() {
  const e = process.env[b1]?.trim();
  return e ? Qn.resolve(e) : Qn.resolve(Qn.join(z7.homedir(), ".cursor", S1));
}
function G7(e) {
  let t;
  try {
    t = qr.readdirSync(e);
  } catch {
    return;
  }
  const r = Date.now();
  for (const n of t) {
    if (!n.startsWith("sandbox-policy-")) continue;
    const s = Qn.join(e, n);
    try {
      const i = qr.statSync(s);
      if (!i.isFile()) continue;
      r - i.mtimeMs > w1 && qr.unlinkSync(s);
    } catch {
    }
  }
}
function v1() {
  const e = W7();
  qr.mkdirSync(e, { recursive: true, mode: 448 });
  try {
    qr.chmodSync(e, 448);
  } catch {
  }
  const t = Date.now();
  return t - Fc >= E1 && (Fc = t, G7(e)), e;
}
function y1(e) {
  const t = v1(), r = B7.randomBytes(8).toString("hex"), n = Qn.join(t, `sandbox-policy-${r}`);
  return qr.writeFileSync(n, e, { encoding: "utf-8", mode: 384 }), n;
}
var S1, b1, w1, E1, Fc, K7 = k({ "policy-file.ts"() {
  "use strict";
  h(), S1 = "sandbox-policies", b1 = "CURSOR_SANDBOX_POLICY_DIR", w1 = 3600 * 1e3, E1 = 900 * 1e3, Fc = 0;
} });
import { execFileSync as q7, spawn as Hc } from "node:child_process";
import * as A1 from "node:fs";
import { realpathSync as j7 } from "node:fs";
import * as Bc from "node:os";
import * as mr from "node:path";
function V7(e) {
  const t = v1();
  return !e || e.length === 0 ? [t] : e.includes(t) ? e : [...e, t];
}
function Y7() {
  const e = jc;
  return typeof e == "function" ? e() : e;
}
function X7(e) {
  wc();
  const { sandboxBinaryPath: t, workspaceReadEnabled: r } = e;
  qc || (qc = t), r !== void 0 && (jc = r);
}
function zc() {
  return qc;
}
function R1(e) {
  process.platform === "linux" && Object.assign(e, bc(e));
}
function J7(e) {
  if (e.type === "insecure_none") return;
  const t = e.networkPolicy;
  if (t === void 0 || !Uc(t)) return;
  const r = t.deny !== void 0 && t.deny.length > 0;
  if (!(t.default === "allow" && !r)) return { version: 1, ...t };
}
function Z7(e = process.platform) {
  const t = [], r = /* @__PURE__ */ new Set(), n = {};
  try {
    n.ripgrep = wc();
  } catch {
  }
  for (const s of c1(e, Bc.homedir(), n)) r.has(s) || (r.add(s), t.push(s));
  return t;
}
function T1(e) {
  return { ...e, additionalReadonlyPaths: V7(e.additionalReadonlyPaths) };
}
function Q7(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    let s = n.trim();
    if (!s) continue;
    s === "~" ? s = Bc.homedir() : (s.startsWith("~/") || s.startsWith("~\\")) && (s = mr.join(Bc.homedir(), s.slice(2))), s = s.replace(/\/\*\*$/, "").replace(/\/\*$/, ""), s = s.replace(/\\\*\*$/, "").replace(/\\\*$/, "");
    const i = mr.basename(s);
    if ((i.includes("*") || i.includes("?")) && (s = mr.dirname(s)), !s || s === ".") continue;
    const o = mr.normalize(s);
    r.has(o) || (r.add(o), t.push(o));
  }
  return t;
}
function k1(e, t, r) {
  let n;
  e.ignoreMapping && (n = u9(e.ignoreMapping, t, [], []));
  const s = l9(e.additionalReadonlyPaths, e.writeProtectionMapping, t), i = E7(e.readBoundary, r?.workspaceReadEnabled ?? Y7()), o = Z7(), a = i === "workspace" ? Q7(e.additionalReadPaths ?? []) : [], c = [...o], l = new Set(o);
  for (const d of a) l.has(d) || (l.add(d), c.push(d));
  const u = { cwd: t, readBoundary: i, hardcodedReadPaths: c, additionalReadonlyPaths: s, networkAccess: Uc(e.networkPolicy), ignoreMapping: n };
  return e.type === "workspace_readonly" ? { type: e.type, ...u } : { type: e.type, ...u, additionalReadwritePaths: e.additionalReadwritePaths || [], disableTmpWrite: e.disableTmpWrite || false };
}
function e9(e) {
  if (!(e.readBoundary !== "workspace" || e.type === "workspace_readwrite" && e.disableTmpWrite || process.platform === "win32")) return u7(e.cwd);
}
function t9(e, t, r) {
  const n = h7(e);
  if (r) {
    const s = Rc();
    for (const [i, o] of Object.entries(Rc(e))) t[i] === s[i] && (n[i] = o);
  }
  return n;
}
function Wc(e) {
  if (kt !== null) return !!kt;
  try {
    const t = zc();
    return Te.info(e, `[checkBinaryAvailable] Resolved binary path: ${t}`), t ? (kt = A1.existsSync(t), kt ? Te.info(e, `[checkBinaryAvailable] Binary path exists: ${kt}`) : (jr = new Error(`Sandbox binary not found at ${t}`), Te.info(e, `[checkBinaryAvailable] Binary not found at: ${t}`)), !!kt) : (jr = new Error("Sandbox binary path was not configured"), kt = false, Te.info(e, "[checkBinaryAvailable] Binary path not set, returning false"), false);
  } catch (t) {
    return jr = t, kt = false, Te.info(e, `[checkBinaryAvailable] Exception checking binary: ${t}`), false;
  }
}
function Gc(e) {
  if (Oe !== null) return Oe;
  const t = e ?? Ii();
  if (Te.info(t, "[isSandboxHelperSupported] Starting sandbox support check..."), !Wc(t)) {
    const i = jr?.message || "Binary check failed";
    return gt = i, Te.info(t, `[isSandboxHelperSupported] Binary not available, returning false. Reason: ${i}`), Oe = false, Oe;
  }
  if (process.platform === "win32") return gt = "Windows sandbox helper only provides network proxy, not filesystem isolation", Te.info(t, "[isSandboxHelperSupported] win32: returning false (proxy-only, no filesystem sandbox)"), Oe = false, Oe;
  if (process.platform === "darwin") return gt = null, Te.info(t, `[isSandboxHelperSupported] ${process.platform} platform, binary available, sandbox supported!`), Oe = true, Oe;
  const { binaryPath: r, args: n, env: s } = I1(t, process.cwd());
  try {
    const i = Date.now();
    gr(q7, r, n, { stdio: ["ignore", "ignore", "pipe"], timeout: Vc, env: s, shell: false });
    const o = Date.now() - i;
    return gt = null, Te.info(t, `[isSandboxHelperSupported] Preflight succeeded in ${o}ms, sandbox supported!`), Oe = true, Oe;
  } catch (i) {
    const o = i;
    return P1(t, { message: o.message, status: o.status, stderrText: o.stderr?.toString?.() || "" });
  }
}
function I1(e, t) {
  const r = { sandbox: k1(T1({ type: "workspace_readwrite" }), t) }, n = String(zc());
  Te.info(e, `[sandboxPreflight] Running preflight with binary: ${n}`), Te.info(e, `[sandboxPreflight] CWD: ${t}`);
  const s = { ...process.env };
  R1(s);
  const i = y1(JSON.stringify(r));
  return { binaryPath: n, args: ["--policy", i, "--preflight-only", "--", "/bin/true"], env: s };
}
function P1(e, t) {
  const { message: r, status: n, stderrText: s } = t;
  return Te.error(e, `[sandboxPreflight] Preflight failed: ${r}`), Te.error(e, `[sandboxPreflight] Exit status: ${n}`), s && Te.error(e, `[sandboxPreflight] Stderr: ${s}`), n === 2 ? gt = `Linux preflight failed with exit code 2 (unsupported kernel features). stderr: ${s || "none"}` : gt = `Linux preflight failed: ${r || "unknown error"}. Exit status: ${n}. stderr: ${s || "none"}`, Oe = false, false;
}
async function r9(e) {
  return Vr && Oe !== null ? Oe : (Yr !== null || (Yr = n9(e).finally(() => {
    Yr = null;
  })), Yr);
}
async function n9(e) {
  const t = e.ctx ?? Ii();
  if (!Kc || !Wc(t)) {
    const l = Gc(t);
    return Vr = true, l;
  }
  Oe !== null && Te.info(t, `[primeSandboxHelperSupport] Re-probing from ${e.workspaceCwd}; the cached verdict (${Oe}) was measured from a different directory`);
  const r = e.timeoutMs ?? Vc, { binaryPath: n, args: s, env: i } = I1(t, e.workspaceCwd), o = Date.now(), a = await s9({ binaryPath: n, args: s, env: i, timeoutMs: r }), c = Date.now() - o;
  if (a.kind === "timeout") return gt = `Linux preflight rooted at ${e.workspaceCwd} did not finish within ${r}ms (sandbox setup for this workspace is slower than the terminal tool will wait). stderr: ${a.stderrText || "none"}`, Te.error(t, `[primeSandboxHelperSupport] Preflight timed out after ${r}ms, treating sandbox as unsupported`), Oe = false, Vr = true, false;
  if (a.kind === "failed") {
    const l = P1(t, { message: a.message, status: a.status, stderrText: a.stderrText });
    return Vr = true, l;
  }
  return gt = null, Te.info(t, `[primeSandboxHelperSupport] Preflight rooted at ${e.workspaceCwd} succeeded in ${c}ms, sandbox supported!`), Oe = true, Vr = true, true;
}
function s9(e) {
  return new Promise((t) => {
    let r;
    try {
      r = gr(Hc, e.binaryPath, e.args, { stdio: ["ignore", "ignore", "pipe"], env: e.env, shell: false, detached: true, windowsHide: true });
    } catch (a) {
      t({ kind: "failed", message: a instanceof Error ? a.message : String(a), stderrText: "" });
      return;
    }
    let n = "";
    r.stderr?.on("data", (a) => {
      n += a.toString();
    });
    let s = false;
    const i = setTimeout(() => {
      s || (s = true, i9(r), t({ kind: "timeout", stderrText: n }));
    }, e.timeoutMs);
    i.unref?.();
    const o = (a) => {
      s || (s = true, clearTimeout(i), t(a));
    };
    r.on("error", (a) => {
      o({ kind: "failed", message: a.message, stderrText: n });
    }), r.on("close", (a, c) => {
      if (a === 0) {
        o({ kind: "ok" });
        return;
      }
      o({ kind: "failed", message: `preflight exited with code ${a}${c ? ` (signal ${c})` : ""}`, status: a, stderrText: n });
    });
  });
}
function i9(e) {
  const t = e.pid;
  if (t !== void 0) try {
    process.kill(-t, "SIGKILL");
  } catch {
    try {
      e.kill("SIGKILL");
    } catch {
    }
  }
}
function o9(e, t = [], r = {}, n) {
  const s = Ii();
  if (r.env = Ac(r.env), !Wc(s)) throw new Error(`Sandbox binary not available: ${jr?.message || "binary not configured"}. Please build the binary or use 'insecure_none' policy.`);
  if (n.type === "insecure_none") return gr(Hc, e, t, { ...r, windowsHide: true });
  if (n.type === "workspace_readwrite" || n.type === "workspace_readonly") return a9(e, t, r, n);
  throw new Error(`Unsupported sandbox policy: ${String(n)}`);
}
function a9(e, t, r, n) {
  if (n.type !== "workspace_readwrite" && n.type !== "workspace_readonly") throw new Error("Expected workspace_readwrite or workspace_readonly policy");
  const s = String(r.cwd ?? process.cwd()), i = n.sandboxWorkspaceRoot ?? s;
  let o = e, a = t;
  r.shell && (process.platform === "win32" ? (o = typeof r.shell == "string" ? r.shell : "cmd.exe", a = ["/c", `${e} ${t.join(" ")}`]) : (o = typeof r.shell == "string" ? r.shell : "/bin/sh", a = ["-c", `${e} ${t.join(" ")}`]));
  const c = k1(T1(n), i), l = e9(c);
  l && (c.additionalReadwritePaths = [...c.additionalReadwritePaths ?? [], l]);
  const u = J7(n), d = { sandbox: c };
  u !== void 0 && (d.networkPolicy = u), n.networkPolicyStrict === false && (d.networkPolicyStrict = false);
  const p = ["--policy", y1(JSON.stringify(d)), "--", o, ...a], g = process.platform === "linux" ? Qp(process.env) : process.env, _ = process.platform === "linux" && r.env ? Qp(r.env) : r.env, y = { ...g, ..._, CURSOR_SANDBOX: "native" };
  if (R1(y), l) {
    const A = t9(l, y, n.enableSharedBuildCache);
    Object.assign(y, A), y.__CURSOR_SANDBOX_OWNED_ENV = Object.keys(A).join(" "), y.__CURSOR_SANDBOX_TEMP_RESTORE = Object.entries(A).map(([S, v]) => `builtin export ${S}='${v.replace(/'/g, "'\\''")}'`).join("; ");
  }
  const m = { cwd: r.cwd || s, env: y, stdio: r.stdio || ["pipe", "pipe", "pipe"], detached: r.detached, windowsHide: true };
  try {
    const A = /* @__PURE__ */ new Date(), S = gr(Hc, String(zc()), p, m);
    return L1 && S.pid && M7(S, { startTime: A, pid: S.pid }), S;
  } catch (A) {
    throw new Error(`Failed to spawn sandboxed process: ${A}`);
  }
}
function c9(e, t = (r) => A1.existsSync(r)) {
  if (Ei(e)) return true;
  let r = mr.resolve(e);
  for (; ; ) {
    try {
      const s = mr.join(r, ".git");
      if (t(s)) return true;
    } catch {
    }
    const n = mr.dirname(r);
    if (n === r) return false;
    r = n;
  }
}
function l9(e, t, r) {
  const n = e && e.length > 0 ? v7(...e) : {}, s = c9(r), i = !Kc || s ? t ?? {} : {}, o = { ...n };
  for (const [a, c] of Object.entries(i)) o[a] ? o[a] = [...o[a], ...c] : o[a] = c;
  if (Object.keys(o).length !== 0) return O1(o, r, [], []);
}
function u9(e, t, r, n) {
  return O1(e, t, r, n);
}
function O1(e, t, r, n) {
  const s = {};
  for (const [i, o] of Object.entries(e)) {
    const a = i.startsWith("file://") ? d9(i) : i;
    s[a] = o;
    const c = h9(a);
    c !== a && (s[c] = o);
  }
  return s;
}
function d9(e) {
  let t = e.replace(/^file:\/\//, "");
  return t = decodeURIComponent(t), t.length > 1 && t.endsWith("/") && (t = t.slice(0, -1)), t;
}
function h9(e, t) {
  if (Ei(e)) return e;
  try {
    return (t ?? j7)(e);
  } catch {
    return e;
  }
}
function C1() {
  return gt;
}
var L1, Kc, Te, qc, jc, kt, jr, gt, Oe, Vr, Yr, Vc, f9 = k({ "helper.ts"() {
  "use strict";
  h(), Tt(), ze(), t1(), Ec(), Kr(), Dc(), m1(), $c(), K7(), L1 = process.platform === "darwin", Kc = process.platform === "linux", Te = Wb("shell-exec:sandbox"), jc = true, kt = null, jr = null, gt = null, Oe = null, Vr = false, Yr = null, Vc = 15e3;
} });
import { spawn as p9 } from "node:child_process";
import { accessSync as x1, constants as M1 } from "node:fs";
function D1(e) {
  X7(e);
}
function N1(e, t = [], r = {}, n) {
  if (r.env = Ac(r.env), n.enableSharedBuildCache && (r = { ...r, env: { ...Ac(process.env), ...Rc(), ...r.env } }), n.type !== "insecure_none") {
    if (Gc()) return o9(e, t, r, n);
    const s = C1();
    throw new Yc(`Sandbox policy '${n.type}' is not supported on this system. Ensure the sandbox helper binary is available, or use 'insecure_none'. Reason: ${s || "unknown"}`, s ?? void 0);
  }
  return g9(e, t, r);
}
function g9(e, t, r) {
  return gr(p9, e, t, { ...r, windowsHide: true });
}
function Di(e) {
  return Ni ? D7(e) : Promise.resolve([]);
}
function _9(e, t) {
  if (Ni) try {
    x1("/usr/bin/sandbox-exec", M1.X_OK);
  } catch {
    return false;
  }
  return Gc(t?.ctx);
}
async function m9(e) {
  if (Ni) try {
    x1("/usr/bin/sandbox-exec", M1.X_OK);
  } catch {
    return false;
  }
  return r9(e);
}
var Yc, Ni, Xr = k({ "sandbox.ts"() {
  "use strict";
  h(), ze(), t1(), Kr(), f9(), m1(), Yc = class extends Error {
    constructor(e, t) {
      super(e), this.reason = t, this.name = "SandboxUnsupportedError";
    }
  }, Ni = process.platform === "darwin";
} }), Xc, It, Yt = k({ "types.ts"() {
  "use strict";
  h(), Xc = ((e) => (e.Zsh = "zsh", e.ZshLight = "zsh-light", e.Bash = "bash", e.PowerShell = "powershell", e.Naive = "naive", e))(Xc || {}), It = { TERM: "dumb", NO_COLOR: "1", FORCE_COLOR: "0", _ZO_DOCTOR: "0" };
} });
import { spawn as v9 } from "node:child_process";
import y9 from "node:stream";
function S9(e) {
  return e.platform === "win32" ? "windows_tree" : e.detached ? "process_group" : "single_process";
}
function U1(e, t, r) {
  const n = e.pid;
  if (n === void 0) return;
  const s = () => {
    try {
      e.kill(r);
    } catch {
    }
  };
  switch (t) {
    case "process_group":
      try {
        process.kill(-n, r);
      } catch {
        s();
      }
      return;
    case "windows_tree":
      try {
        v9("taskkill", ["/pid", String(n), "/t", "/f"], { stdio: "ignore", windowsHide: true }).on("error", s);
      } catch {
        s();
      }
      return;
    case "single_process":
      s();
      return;
    default: {
      const i = t;
      throw new Error(`Unknown process tree kill mode: ${String(t)}`);
    }
  }
}
function Pt(e, t = [], r = {}, n, s) {
  const i = N1(e, t, { ...r, env: bc(r.env ?? process.env) }, n);
  if (s) {
    const o = S9({ platform: process.platform, detached: r.detached === true }), a = () => {
      if (!i.pid) return;
      U1(i, o, "SIGTERM");
      const c = setTimeout(() => {
        !i.killed && i.pid && U1(i, o, "SIGKILL");
      }, 1e3);
      i.once("exit", () => {
        clearTimeout(c);
      });
    };
    s.aborted ? a() : (s.addEventListener("abort", a, { once: true }), i.once("exit", () => {
      s.removeEventListener("abort", a);
    }));
  }
  return i;
}
function b9(e, t, r) {
  if (e) {
    try {
      process.kill(-e, t);
    } catch {
      return;
    }
    t === "SIGTERM" && r !== void 0 && r > 0 && setTimeout(() => {
      try {
        process.kill(-e, "SIGKILL");
      } catch {
      }
    }, r);
  }
}
function Jc(e) {
  e?.on("error", () => {
  });
}
function $1() {
  return process.platform !== "win32";
}
function Zc(e, t) {
  const r = e.stdio.at(5);
  r instanceof y9.Writable && (Jc(r), r.end(`${t}\0`));
}
function Qc(e, t) {
  e && (Jc(e), e.write(t), e.end());
}
function el(e, t) {
  e && (Jc(e), e.on("data", (r) => {
    t(r.toString());
  }));
}
function vr(e) {
  const t = e.indexOf(`
`), r = e.substring(0, t), n = e.substring(t);
  return { cwd: r, rest: n };
}
function tl(e, t) {
  const r = `${t}
`, n = e.indexOf(r);
  return n >= 0 ? e.slice(n + r.length) : e;
}
var Ui, Jr = k({ "core.ts"() {
  "use strict";
  h(), Ec(), Xr(), Yt(), Ui = `IFS= builtin read -r -d '' __cursor_command <&5; exec 5<&-; builtin set -- "$__cursor_command"; builtin unset __cursor_command; `;
} }), rl, es, F1, H1, w9 = k({ "dump_bash_state.ts"() {
  "use strict";
  h(), rl = "__CURSOR_BASH_STATE_START__", es = "__CURSOR_BASH_STATE_END__", F1 = `#!/usr/bin/env bash

# Usage:
#   source dump_bash_state.bash
#   dump_bash_state OUTPUT_FILE
# Or execute directly (captures a subshell's state):
#   ./dump_bash_state.bash OUTPUT_FILE

dump_bash_state() {
  set -euo pipefail

  # Require base64 for safe encoding of emitted sections
  if ! command -v base64 >/dev/null 2>&1; then
    echo "Error: base64 command is required" >&2
    return 1
  fi

  # Helper to log timing, only if DUMP_BASH_STATE_TIMING is set
  if [[ -n "\${DUMP_BASH_STATE_TIMING:-}" ]]; then
    # Timing setup
    if [[ "\${BASH_VERSION%%.*}" -ge 5 ]]; then
      # Use EPOCHREALTIME if available (bash 5+)
      local start_time=\${EPOCHREALTIME}
      local step_start=\${EPOCHREALTIME}
      _log_timing() {
        local step_name="$1"
        local now=\${EPOCHREALTIME}
        local step_duration=$(command awk "BEGIN {printf "%.3f", $now - $step_start}")
        local total_duration=$(command awk "BEGIN {printf "%.3f", $now - $start_time}")
        builtin printf "[TIMING] %-20s: %6.3fs (total: %6.3fs)
" "$step_name" "$step_duration" "$total_duration" >&2
        step_start=$now
      }
    else
      # Fallback for older bash versions
      local start_time=$(command date +%s.%N)
      local step_start=$(command date +%s.%N)
      _log_timing() {
        local step_name="$1"
        local now=$(command date +%s.%N)
        local step_duration=$(command awk "BEGIN {printf "%.3f", $now - $step_start}")
        local total_duration=$(command awk "BEGIN {printf "%.3f", $now - $start_time}")
        builtin printf "[TIMING] %-20s: %6.3fs (total: %6.3fs)
" "$step_name" "$step_duration" "$total_duration" >&2
        step_start=$now
      }
    fi
  else
    _log_timing() { :; }
  fi

  # Helper to append a line to output file
  _emit() {
    builtin printf '%s
' "$1"
  }

  # Helper to safely encode and emit unsafe values
  _emit_encoded() {
    local content="$1"
    local var_name="$2"
    if [[ -n "$content" ]]; then
      # Builtin printf, not a here-document: no argument length limit, and no temp file
      builtin printf 'cursor_snap_%s=$(builtin printf %%s '"'"'%s'"'"' | command base64 -d)
' "$var_name" "$(command base64 <<<"$content" | command tr -d '
')"
      builtin printf 'eval "$cursor_snap_%s"
' "$var_name"
    fi
  }

  # Start fresh
  _log_timing "file_init"

  # Emit start marker at the very beginning of the output
  _emit "__CURSOR_BASH_STATE_START__"

  # Working directory
  _emit "$PWD"
  _log_timing "working_dir"

  # Drop ELECTRON_RUN_AS_NODE by exact name so one command exporting it can't
  # bake it into the snapshot that every later command re-evals (IDE-2911:
  # Cypress boots as plain Node until a new chat). Exact unset rather than the
  # line-based grep below, which would also eat vars whose name or multiline
  # value merely contains the token. The shell exits right after the dump.
  builtin unset ELECTRON_RUN_AS_NODE 2>/dev/null || true

  # Environment variables (export statements)
  # Filter out: proxy settings plus request/session-scoped vars that must not
  # leak across shell executions.
  local env_vars
  env_vars=$(builtin export -p 2>/dev/null | command grep -viE '_proxy=|CURSOR_SANDBOX|SUDO_ASKPASS|CURSOR_ASKPASS|CURSOR_CONVERSATION_ID|CURSOR_REQUEST_ID|CURSOR_AGENT_STORE' || true)
  if [[ -n "\${__CURSOR_SANDBOX_OWNED_ENV:-}" ]]; then
    env_vars=$(builtin printf '%s
' "$env_vars" | command grep -vE "^(export|declare|typeset)( -[a-zA-Z]+)* (\${__CURSOR_SANDBOX_OWNED_ENV// /|})=" || true)
  fi
  _emit_encoded "$env_vars" "ENV_VARS_B64"
  _log_timing "environment"

  # POSIX shell options (replayable as set +/-o lines). Exclude the errexit/nounset/
  # pipefail this function force-enables above, so they are not baked into the restored
  # snapshot and leaked onto every subsequent command (a stray pipefail makes a
  # successful 'cmd | head' report exit 141).
  local posix_opts
  posix_opts=$(builtin shopt -po 2>/dev/null | command grep -vE '^set [-+]o (errexit|nounset|pipefail)$' || true)
  _emit_encoded "$posix_opts" "POSIX_OPTS_B64"
  _log_timing "posix_options"

  # Bash shopt options (replayable as shopt -s/-u lines)
  local bash_opts
  bash_opts=$(builtin shopt -p 2>/dev/null || true)
  _emit_encoded "$bash_opts" "BASH_OPTS_B64"
  _log_timing "bash_options"

  # Functions: capture all functions
  local all_functions
  all_functions=$(builtin declare -f 2>/dev/null || true)
  _emit_encoded "$all_functions" "FUNCTIONS_B64"
  _log_timing "functions"

  # Aliases
  local aliases
  aliases=$(builtin alias -p 2>/dev/null || true)
  _emit_encoded "$aliases" "ALIASES_B64"
  _log_timing "aliases"

  # Done
  _emit "# end of bash state dump"
  _emit "__CURSOR_BASH_STATE_END__"
  _log_timing "finalize"
}
`, H1 = F1;
} });
function E9(e) {
  if (e.length === 0) return [];
  const t = [];
  let r = e[0].type, n = [e[0].data];
  for (let s = 1; s < e.length; s++) {
    const i = e[s];
    if (i.type === r) {
      n.push(i.data);
      continue;
    }
    t.push({ type: r, data: Buffer.concat(n) }), r = i.type, n = [i.data];
  }
  return t.push({ type: r, data: Buffer.concat(n) }), t;
}
function A9(e) {
  return e instanceof Error ? e : new Error(String(e));
}
function ts(e) {
  const t = new Ti();
  if (!e.bufferOutputEvents) {
    const i = (o, a) => {
      e.writable.write({ type: o, data: a }).catch(() => {
      });
    };
    return e.stdout?.on("data", (o) => {
      const a = t.note(o);
      a !== void 0 && a.length > 0 && i("stdout", a);
    }), e.stderr?.on("data", (o) => {
      i("stderr", o);
    }), { get stdoutBytes() {
      return t.bytes;
    }, get stdoutPrefix() {
      return t.stdoutPrefix;
    }, async waitForOutput() {
    }, async releaseHeldStdout() {
      const o = t.takeHeld();
      o !== void 0 && o.length > 0 && i("stdout", o);
    }, dropHeldStdout() {
      t.takeHeld();
    }, async flush() {
      await this.releaseHeldStdout();
    } };
  }
  const r = new B1(e.writable, e.outputLimiterOptions);
  let n;
  const s = Promise.all([R9(e.stdout, r, t), T9(e.stderr, "stderr", r)]).then(() => {
  }).catch((i) => {
    n = i;
  });
  return { get stdoutBytes() {
    return t.bytes;
  }, get stdoutPrefix() {
    return t.stdoutPrefix;
  }, async waitForOutput() {
    if (await s, n !== void 0) throw A9(n);
  }, async releaseHeldStdout() {
    const i = t.takeHeld();
    i !== void 0 && i.length > 0 && await r.push("stdout", i);
  }, dropHeldStdout() {
    t.takeHeld();
  }, async flush() {
    await this.releaseHeldStdout(), await r.flush();
  } };
}
async function R9(e, t, r) {
  if (e) for await (const n of e) {
    const s = r.note(n);
    s !== void 0 && s.length > 0 && await t.push("stdout", s);
  }
}
async function T9(e, t, r, n) {
  if (e) for await (const s of e) n?.(s), await r.push(t, s);
}
var nl, B1, rs = k({ "output-limiter.ts"() {
  "use strict";
  h(), ze(), nl = { flushIntervalMs: 50, maxBufferedBytes: 256 * 1024 }, B1 = class {
    constructor(e, t) {
      this.writable = e, this.flushIntervalMs = t?.flushIntervalMs ?? nl.flushIntervalMs, this.maxBufferedBytes = t?.maxBufferedBytes ?? nl.maxBufferedBytes;
    }
    pending = [];
    pendingBytes = 0;
    flushTimeout;
    flushPromise;
    flushIntervalMs;
    maxBufferedBytes;
    async push(e, t) {
      if (t.length !== 0) {
        if (this.pending.push({ type: e, data: t }), this.pendingBytes += t.length, this.pendingBytes >= this.maxBufferedBytes) {
          await this.flush();
          return;
        }
        this.scheduleFlush();
      }
    }
    async flush() {
      if (this.clearFlushTimeout(), this.flushPromise) {
        await this.flushPromise, this.pendingBytes > 0 && await this.flush();
        return;
      }
      if (this.pendingBytes === 0) return;
      const e = this.pending;
      this.pending = [], this.pendingBytes = 0, this.flushPromise = this.writeBufferedOutput(e);
      try {
        await this.flushPromise;
      } finally {
        this.flushPromise = void 0;
      }
    }
    async close() {
      await this.flush();
    }
    scheduleFlush() {
      this.flushTimeout === void 0 && (this.flushTimeout = setTimeout(() => {
        this.flushTimeout = void 0, this.flush();
      }, this.flushIntervalMs));
    }
    clearFlushTimeout() {
      this.flushTimeout !== void 0 && (clearTimeout(this.flushTimeout), this.flushTimeout = void 0);
    }
    async writeBufferedOutput(e) {
      for (const t of E9(e)) try {
        await this.writable.write(t);
      } catch {
      }
    }
  };
} });
import { stat as k9 } from "node:fs/promises";
import { dirname as I9, join as P9, resolve as O9 } from "node:path";
function z1(e) {
  return e.teamAdmin?.type ?? e.perRepo?.type ?? e.perUser?.type ?? "insecure_none";
}
function ns(...e) {
  return e.some((t) => t === true);
}
function W1(...e) {
  const t = e.filter((n) => n !== void 0);
  if (t.length === 0) return [];
  if (t.some((n) => n.length === 0)) return [];
  if (t.length === 1) return D9(t[0]).map(is);
  let r = new Set(t[0].map(is));
  for (let n = 1; n < t.length; n++) {
    const s = new Set(t[n].map(is));
    r = new Set([...r].filter((i) => s.has(i)));
  }
  return [...r];
}
function ss(...e) {
  const t = /* @__PURE__ */ new Set();
  for (const r of e) if (r) for (const n of r) t.add(is(n));
  return [...t];
}
function C9({ defaultValue: e, rank: t }) {
  return { defaultValue: e, merge: (...r) => {
    const n = r.filter((s) => s !== void 0);
    return n.length === 0 ? e : n.reduce((s, i) => t[i] < t[s] ? i : s);
  } };
}
function L9() {
  return { defaultValue: [], merge: (...e) => W1(...e) };
}
function x9(...e) {
  return V1.merge(...e);
}
function M9(...e) {
  return Y1.merge(...e);
}
function is(e) {
  const t = e.replace(/\\/g, "/").replace(/\/+$/, "");
  return t === "" ? "/" : /^[a-zA-Z]:$/.test(t) ? `${t}/` : t;
}
function D9(e) {
  const t = /* @__PURE__ */ new Set(), r = [];
  for (const n of e) {
    const s = is(n);
    t.has(s) || (t.add(s), r.push(n));
  }
  return r;
}
function G1(...e) {
  const t = e.filter((c) => c !== void 0);
  if (t.length === 0) return;
  let r;
  for (const c of t) if (c.default === "deny") {
    r = "deny";
    break;
  } else c.default === "allow" && r === void 0 && (r = "allow");
  const n = /* @__PURE__ */ new Set();
  for (const c of t) if (c.deny) for (const l of c.deny) n.add(l);
  const s = /* @__PURE__ */ new Set();
  for (const c of t) if (c.allow) for (const l of c.allow) s.add(l);
  const i = s.size > 0 ? [...s] : void 0;
  let o;
  for (let c = t.length - 1; c >= 0; c--) if (t[c].logging !== void 0) {
    o = t[c].logging;
    break;
  }
  const a = { version: 1 };
  if (r !== void 0 && (a.default = r), i !== void 0 && (a.allow = i), n.size > 0 && (a.deny = [...n]), o !== void 0 && (a.logging = o), !(a.default === void 0 && (a.allow === void 0 || a.allow.length === 0) && (a.deny === void 0 || a.deny.length === 0) && a.logging === void 0)) return a;
}
function sl(...e) {
  const t = e.filter((n) => n !== void 0);
  if (t.length === 0) return;
  const r = {};
  for (const n of t) for (const [s, i] of Object.entries(n)) {
    const o = r[s];
    if (o) {
      const a = new Set(o);
      for (const c of i) a.has(c) && a.delete(c), a.add(c);
      r[s] = [...a];
    } else r[s] = [...i];
  }
  if (Object.keys(r).length !== 0) return r;
}
function Zr(...e) {
  for (let t = e.length - 1; t >= 0; t--) if (e[t] !== void 0) return e[t];
}
async function Qr(e, t, r = {}) {
  if (!t) return { policy: { type: "insecure_none" } };
  if (Ei(e)) return il(t, { workspaceDir: e });
  const n = r.stat ?? k9, s = r.spawnPromise ?? Ep, i = await n(P9(e, ".git")).then((c) => c, () => null), o = i?.isFile() ?? false, a = i !== null;
  if (z1(t) === "workspace_readwrite") {
    let c = e;
    if (o) {
      const l = await s("git", ["rev-parse", "--git-common-dir"], { cwd: e }).then((u) => O9(e, u.trim()), () => null);
      if (l) {
        c = I9(l);
        const u = t.perRepo, d = u?.ignoreMapping;
        t = { ...t, perRepo: { ...u, type: "workspace_readwrite", additionalReadwritePaths: [...u?.additionalReadwritePaths ?? [], l], ignoreMapping: d, writeProtectionMapping: sl(u?.writeProtectionMapping, b7(e)) } };
      }
    }
    if (a) return il(t, { workspaceDir: e, gitDirParent: c });
  }
  return il(t, { workspaceDir: e });
}
function N9(e) {
  const { perUser: t, perRepo: r, teamAdmin: n } = e, s = [t, r, n].filter((o) => o !== void 0);
  if (s.length === 0) return;
  const i = s[0].type;
  for (const o of s) if (o.type !== i) throw new Error(`Cannot merge policies of different types: found "${i}" and "${o.type}". All policies must be of the same type (all workspace_readwrite, all workspace_readonly, or all insecure_none).`);
  return i;
}
function il(e, t) {
  const r = N9(e);
  if (r === void 0) return j1(e, t);
  switch (r) {
    case "workspace_readwrite":
      return j1(e, t);
    case "workspace_readonly":
      return U9(e, t);
    case "insecure_none":
      return $9(e, t);
    default: {
      const n = r;
      throw new Error(`Unknown policy type: ${r}`);
    }
  }
}
function K1(e, t) {
  const r = t?.debug, { perUser: n, perRepo: s, teamAdmin: i } = e, o = t?.workspaceDir ?? process.cwd(), a = A7(o), c = {}, l = [n, s, i], u = ["perUser", "perRepo", "teamAdmin", "hardcoded"], d = (P, T) => {
    r && (c[P] = u[T] ?? "unknown");
  }, f = ns(n?.disableTmpWrite, s?.disableTmpWrite, i?.disableTmpWrite);
  for (let P = l.length - 1; P >= 0; P--) if (l[P]?.disableTmpWrite === true) {
    d("disableTmpWrite", P);
    break;
  }
  const p = ns(n?.networkPolicyStrict, s?.networkPolicyStrict, i?.networkPolicyStrict, a.networkPolicyStrict);
  a.networkPolicyStrict && d("networkPolicyStrict", 3);
  const g = Zr(n?.readBoundary, s?.readBoundary, i?.readBoundary) ?? "system", _ = Zr(n?.additionalReadPaths, s?.additionalReadPaths), y = i?.allowUserOverrideReadPaths === false ? ss(i.additionalReadPaths) : ss(_, i?.additionalReadPaths), m = g === "workspace" ? y : void 0, A = ss(n?.additionalReadonlyPaths, s?.additionalReadonlyPaths, i?.additionalReadonlyPaths, a.additionalReadonlyPaths), S = A.length > 0 ? A : void 0;
  let v = G1(n?.networkPolicy, s?.networkPolicy, i?.networkPolicy, a.networkPolicy);
  const b = i?.networkPolicy?.allow;
  b !== void 0 && b.length > 0 && v !== void 0 && (v = { ...v, allow: [...b] }, r && (c["networkPolicy.allow"] = "teamAdmin (replace)"));
  const I = U7(v), O = Zr(n?.debugOutputDir, s?.debugOutputDir, i?.debugOutputDir), M = ns(n?.captureDenies, s?.captureDenies, i?.captureDenies), F = Zr(n?.enableSharedBuildCache, s?.enableSharedBuildCache, i?.enableSharedBuildCache), H = sl(n?.ignoreMapping, s?.ignoreMapping, i?.ignoreMapping, a.ignoreMapping), ee = t?.gitDirParent ?? o, Y = S7(ee), B = sl(n?.writeProtectionMapping, s?.writeProtectionMapping, i?.writeProtectionMapping, a.writeProtectionMapping, Y);
  return { disableTmpWrite: f || void 0, networkPolicyStrict: p, readBoundary: g, additionalReadPaths: m, additionalReadonlyPaths: S, networkPolicy: I, debugOutputDir: O, captureDenies: M || void 0, enableSharedBuildCache: F, ignoreMapping: H, writeProtectionMapping: B, fieldSources: c };
}
function q1(e, t) {
  const r = Object.fromEntries(Object.entries(e).filter(([n, s]) => s !== void 0));
  return r.type = t, r;
}
function j1(e, t) {
  const { perUser: r, perRepo: n, teamAdmin: s } = e, i = t?.debug, o = K1(e, t), a = [r, n, s], c = ["perUser", "perRepo", "teamAdmin", "hardcoded"], l = ss(r?.additionalReadwritePaths, n?.additionalReadwritePaths, s?.additionalReadwritePaths), u = { type: "workspace_readwrite", disableTmpWrite: o.disableTmpWrite, networkPolicyStrict: o.networkPolicyStrict, readBoundary: o.readBoundary, additionalReadPaths: o.additionalReadPaths, additionalReadwritePaths: l.length > 0 ? l : void 0, additionalReadonlyPaths: o.additionalReadonlyPaths, networkPolicy: o.networkPolicy, debugOutputDir: o.debugOutputDir, captureDenies: o.captureDenies, enableSharedBuildCache: o.enableSharedBuildCache, ignoreMapping: o.ignoreMapping, writeProtectionMapping: o.writeProtectionMapping }, d = { policy: q1(u, "workspace_readwrite") };
  return i && (d.debug = { fieldSources: o.fieldSources }), d;
}
function U9(e, t) {
  const r = t?.debug, n = K1(e, t), s = { type: "workspace_readonly", disableTmpWrite: n.disableTmpWrite, networkPolicyStrict: n.networkPolicyStrict, readBoundary: n.readBoundary, additionalReadPaths: n.additionalReadPaths, additionalReadonlyPaths: n.additionalReadonlyPaths, networkPolicy: n.networkPolicy, debugOutputDir: n.debugOutputDir, captureDenies: n.captureDenies, enableSharedBuildCache: n.enableSharedBuildCache, ignoreMapping: n.ignoreMapping, writeProtectionMapping: n.writeProtectionMapping }, i = { policy: q1(s, "workspace_readonly") };
  return r && (i.debug = { fieldSources: n.fieldSources }), i;
}
function $9(e, t) {
  const { perUser: r, perRepo: n, teamAdmin: s } = e, i = t?.debug, o = {}, a = ns(r?.allowlistEscalated, n?.allowlistEscalated, s?.allowlistEscalated), c = Zr(r?.debugOutputDir, n?.debugOutputDir, s?.debugOutputDir), l = ns(r?.captureDenies, n?.captureDenies, s?.captureDenies), u = Zr(r?.enableSharedBuildCache, n?.enableSharedBuildCache, s?.enableSharedBuildCache), f = Object.fromEntries(Object.entries({ type: "insecure_none", allowlistEscalated: a || void 0, debugOutputDir: c, captureDenies: l || void 0, enableSharedBuildCache: u }).filter(([g, _]) => _ !== void 0));
  f.type = "insecure_none";
  const p = { policy: f };
  return i && (p.debug = { fieldSources: o }), p;
}
var V1, Y1, en = k({ "policy-merge.ts"() {
  "use strict";
  h(), ze(), Dc(), $c(), V1 = C9({ defaultValue: "system", rank: { workspace: 0, system: 1 } }), Y1 = L9();
} });
function ol(e) {
  return J1 ? false : !!e?.SUDO_ASKPASS;
}
function al(e) {
  return ol(e) ? `${Z1}; ` : "";
}
function X1(e) {
  const t = [];
  let r = 0;
  for (; r < e.length; ) {
    const n = r === 0 || e.slice(Math.max(0, r - 2), r) === "&&" || e.slice(Math.max(0, r - 2), r) === "||" || e[r - 1] === "|" || e[r - 1] === ";", s = Math.max(0, r - 10), i = e.slice(s, r), o = /(?:&&|\|\||[|;])\s*$/.test(i) || r === 0 && /^\s*$/.test(i);
    if ((n || o) && e.slice(r, r + 4) === "sudo") {
      const a = r + 4;
      if (a >= e.length || /\s/.test(e[a])) {
        let c = a;
        for (; c < e.length && /\s/.test(e[c]); ) c++;
        let l = false;
        if (c < e.length && e[c] === "-") {
          let u = c + 1;
          for (; u < e.length && /[^\s]/.test(e[u]); ) u++;
          const d = e.slice(c, u);
          l = /^-[a-zA-Z]*A[a-zA-Z]*$/.test(d);
        }
        l ? (t.push("sudo"), r = a) : (t.push("sudo -A"), r = a);
        continue;
      }
    }
    t.push(e[r]), r++;
  }
  return t.join("");
}
var J1, Z1, os = k({ "sudo.ts"() {
  "use strict";
  h(), J1 = process.platform === "win32", Z1 = "alias sudo='sudo -A'";
} });
import { mkdtemp as F9, readFile as H9, rm as B9, writeFile as Q1 } from "node:fs/promises";
import z9 from "node:os";
import _t from "node:path";
function eg(e) {
  if (process.platform === "win32") {
    const n = /git.*bash/i;
    if (e && n.test(e)) return e;
    const s = Ke("bash", [], n).cmd;
    return n.test(s) ? s : null;
  }
  const t = process.env.SHELL;
  return t?.includes("bash") ? t : Ke("bash", []).cmd;
}
function tg(e) {
  if (process.platform !== "win32") return e;
  const t = _t.normalize(e), r = t[0]?.toLowerCase();
  return r && t[1] === ":" && t[2] === _t.sep ? `/${r}${t.slice(2).replace(/\\/g, "/")}` : t.replace(/\\/g, "/");
}
async function W9(e) {
  const t = { ...process.env, ...It, ...e?.env }, r = "__CURSOR_STATE_MARKER__", n = ["-O", "extglob", "-ilc", H1 + ` builtin printf '${r}\\n'; dump_bash_state`], s = eg(e?.userTerminalHint);
  if (!s) throw new Error("Can't find Bash");
  const i = Pt(s, n, { env: t, detached: true, stdio: ["ignore", "pipe", "pipe"] }, { type: "insecure_none" }, e?.signal);
  let o = "";
  i.stdout?.on("data", (_) => {
    o += _.toString();
  }), i.on("error", (_) => {
    console.warn(`[shell-exec] bash state init spawn failed; falling back to empty state: ${_ instanceof Error ? _.message : String(_)}`);
  }), await new Promise((_) => {
    i.on("close", () => {
      _(void 0);
    });
  });
  const a = tl(o, r), c = `${rl}
`, l = `${es}
`;
  let u;
  a.startsWith(c) && a.endsWith(l) ? (u = a.slice(c.length), u = u.slice(0, -(es.length + 1))) : u = `${process.cwd()}
`;
  const { cwd: d, rest: f } = vr(u), p = process.platform === "win32", g = process.platform === "win32" ? process.cwd() : d;
  return new cl(g, f, e?.userTerminalHint, p);
}
var cl, rg = k({ "bash.ts"() {
  "use strict";
  h(), Tt(), ze(), Jr(), w9(), rs(), Kr(), en(), Xr(), os(), Yt(), cl = class a2 {
    constructor(t, r, n, s = false) {
      this.cwd = t, this.state = r, this.userTerminalHint = n, this.useFileStateTransport = s;
    }
    async getCwd() {
      return this.cwd;
    }
    clone(t) {
      return new a2(t ?? this.cwd, this.state, this.userTerminalHint, this.useFileStateTransport);
    }
    resetSessionCwdAfterHopCdFailure(t) {
      const { cwd: r, sandboxWorkspaceRoot: n } = t;
      _t.resolve(r) === _t.resolve(this.cwd) && (this.cwd = n !== void 0 && _t.resolve(n) !== _t.resolve(r) && !wi(n) ? n : op());
    }
    async *execute(t, r, n) {
      var s = [];
      try {
        const a = hr(s, _r(t.withName("BashState.execute"))), c = n?.pipeStdin ?? false, l = Yn(), u = n?.workingDirectory ?? this.cwd, d = { ...process.env, ...It, ...n?.env };
        let f = 'builtin eval "$1"';
        c || (f += " < /dev/null");
        const p = al(d), g = this.useFileStateTransport;
        let _, y, m;
        if (g) {
          _ = await F9(_t.join(z9.tmpdir(), "cursor-bash-state-"));
          const z = _t.basename(_);
          y = _t.join(_, "state-in"), m = _t.join(_, "state-out"), await Q1(y, this.state, "utf8"), await Q1(m, "", "utf8").catch(() => {
          });
          const Q = tg(y), G = tg(m);
          d.CURSOR_STATE_INPUT_FILE = Q, d.CURSOR_STATE_OUTPUT_FILE = G;
        }
        const A = g ? 'snap=$(command cat "$CURSOR_STATE_INPUT_FILE")' : "snap=$(command cat <&3)", S = g ? 'mkdir -p "$(dirname "$CURSOR_STATE_OUTPUT_FILE")" 2>/dev/null; dump_bash_state > "$CURSOR_STATE_OUTPUT_FILE"' : "dump_bash_state >&4", b = ["-O", "extglob", "-c", (g ? "" : Ui) + `${A} && builtin shopt -s extglob && builtin eval -- "$snap" && { builtin set +u 2>/dev/null || true; builtin eval "\${__CURSOR_SANDBOX_ENV_RESTORE:-}" 2>/dev/null; ` + Oi + `builtin export PWD="$(builtin pwd)"; builtin shopt -s expand_aliases 2>/dev/null; ${p}${f}; }; COMMAND_EXIT_CODE=$?; ${S}; builtin exit $COMMAND_EXIT_CODE`, "--", ...g ? [r] : []], I = eg(this.userTerminalHint);
        if (!I) throw new Error("Can't find Bash");
        const O = n?.sandboxWorkspaceRoot ?? u, M = (await Qr(O, n?.sandboxPolicy)).policy, F = M.type !== "insecure_none" ? { ...M, sandboxWorkspaceRoot: O } : M;
        let H = "";
        const ee = async () => {
          if (g) {
            if (!m) {
              H = this.state;
              return;
            }
            try {
              H = await H9(m, "utf8");
            } catch (z) {
              console.warn("[shell-exec] Failed to read bash state file", z), H = this.state;
            }
          }
        }, Y = async () => {
          if (_) try {
            await B9(_, { recursive: true, force: true });
          } catch {
          }
        };
        lp(u) && jt(a.ctx, mp);
        let B;
        try {
          B = Pt(I, b, { env: d, stdio: [c ? "pipe" : "ignore", "pipe", "pipe", "pipe", "pipe", g ? "ignore" : "pipe"], cwd: u, detached: true }, F, n?.signal);
        } catch (z) {
          throw await Y(), z;
        }
        B.on("spawn", async () => {
          try {
            await l.write({ type: "stdin_ready", stdin: B.stdin ?? void 0, pid: B.pid });
          } catch {
          }
        });
        const P = ts({ stdout: B.stdout, stderr: B.stderr, writable: l, bufferOutputEvents: n?.bufferOutputEvents, outputLimiterOptions: n?.outputLimiterOptions });
        B.on("error", async (z) => {
          if (Z5(z, u)) {
            this.resetSessionCwdAfterHopCdFailure({ cwd: u, sandboxWorkspaceRoot: n?.sandboxWorkspaceRoot }), jt(a.ctx, fc);
            const Q = cp(u);
            console.warn(`[shell-exec] working directory is not accessible (${Q.cwdKind}:${Q.cwdHash})`);
          }
          await Y(), l.throw(z);
        });
        let T = null, R = null, C = false;
        const L = async (z) => {
          if (C) return;
          if (C = true, R && (clearTimeout(R), R = null), jt(a.ctx, "exit"), z) try {
            await P.waitForOutput();
          } catch (G) {
            await Y(), l.throw(G instanceof Error ? G : new Error(String(G)));
            return;
          }
          const Q = Ai({ exitCode: T, stdoutBytes: P.stdoutBytes, stdoutPrefix: P.stdoutPrefix, cwd: u }) && H === "";
          if (Q && P.dropHeldStdout(), await P.flush(), Q) {
            this.resetSessionCwdAfterHopCdFailure({ cwd: u, sandboxWorkspaceRoot: n?.sandboxWorkspaceRoot }), await Y(), jt(a.ctx, fc);
            const G = cp(u);
            console.warn(`[shell-exec] working directory is not accessible (${G.cwdKind}:${G.cwdHash})`), l.throw(cc(u));
            return;
          }
          if (!n?.signal?.aborted) {
            await ee();
            const G = `${rl}
`, Me = `${es}
`;
            if (H.startsWith(G) && H.endsWith(Me)) {
              let He = H.slice(G.length);
              He = He.slice(0, -(es.length + 1));
              const { cwd: E, rest: x } = vr(He);
              this.state = x, process.platform !== "win32" && E?.startsWith("/") && (this.cwd = E);
            }
          }
          if (F.captureDenies) try {
            const G = await Di(B);
            G && G.length > 0 && await l.write({ type: "sandbox_denies", events: G });
          } catch {
          }
          try {
            await l.write({ type: "exit", code: T, data: "", aborted: n?.signal?.aborted ?? false }), l.close();
          } catch {
            l.close();
          }
          await Y();
        };
        B.on("exit", (z, Q) => {
          T = z;
          const G = n?.closeTimeout ?? 5e3;
          G > 0 && (R = setTimeout(() => {
            console.warn(`[shell-exec] Close event did not fire within ${G}ms after exit. This may indicate a background process is holding file descriptors open. Proceeding anyway to prevent hang.`), L(false);
          }, G));
        }), B.on("close", async () => {
          await L(true);
        });
        const D = B.stdio[3], N = B.stdio[4];
        g || (Zc(B, r), Qc(D, this.state), el(N, (z) => {
          H += z;
        })), yield* l;
      } catch (a) {
        var i = a, o = true;
      } finally {
        fr(s, i, o);
      }
    }
  };
} }), as, G9 = k({ "lazy.ts"() {
  "use strict";
  h(), Tt(), as = class c2 {
    constructor(t) {
      this.initializer = t;
    }
    promise;
    getExecutor() {
      return this.promise === void 0 && (this.promise = this.initializer()), this.promise;
    }
    async getCwd() {
      return (await this.getExecutor()).getCwd();
    }
    clone(t) {
      return new c2(async () => (await this.getExecutor()).clone(t));
    }
    async *execute(t, r, n) {
      var s = [];
      try {
        const a = hr(s, _r(t.withName("LazyTerminalExecutor.execute"))), c = await this.getExecutor();
        for await (const l of c.execute(t, r, n)) yield l;
      } catch (a) {
        var i = a, o = true;
      } finally {
        fr(s, i, o);
      }
    }
  };
} }), ng, sg, ig, og, K9 = k({ "dump_powershell_state.ts"() {
  "use strict";
  h(), ng = `
function Dump-PowerShellState {
    param(
        [Parameter(Mandatory = $true)]
        [string]$OutputFile
    )

    function Emit {
        param([string]$Content)
        Add-Content -Path $OutputFile -Value $Content -Encoding UTF8
    }

    if (Test-Path $OutputFile) {
        Remove-Item $OutputFile -Force
    }
    New-Item -Path $OutputFile -ItemType File -Force | Out-Null
    #Log-Timing "file_init"

    Emit $PWD.Path
    #Log-Timing "working_dir"

    function ShouldPersistEnvVar {
        param([string]$Name)
        if ($Name -eq 'CURSOR_CONVERSATION_ID') {
            return $false
        }
        if ($Name -eq 'CURSOR_REQUEST_ID') {
            return $false
        }
        if ($Name -like 'CURSOR_AGENT_STORE*') {
            return $false
        }
        if ($Name -like '*CURSOR_SANDBOX*') {
            return $false
        }
        if ($Name -eq 'ELECTRON_RUN_AS_NODE') {
            return $false
        }
        return $true
    }

    $envVars = Get-ChildItem Env: | Sort-Object Name
    foreach ($var in $envVars) {
        if (-not (ShouldPersistEnvVar -Name $var.Name)) {
            continue
        }
        $encoded = [System.Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes([string]$var.Value))
        Emit ('Set-Item -LiteralPath ''Env:{0}'' -Value ([System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String(''{1}'')))' -f $var.Name, $encoded)
    }
    #Log-Timing "environment"

    $aliases = Get-Alias | Sort-Object Name
    foreach ($alias in $aliases) {
        $definition = $alias.Definition

        if ($alias.Options -band [System.Management.Automation.ScopedItemOptions]::ReadOnly) {
        }
        elseif ($alias.Options -band [System.Management.Automation.ScopedItemOptions]::Constant) {
        }
        elseif ($alias.Options -band [System.Management.Automation.ScopedItemOptions]::AllScope) {
        }
        else {
            Emit ('Set-Alias -Name "{0}" -Value "{1}"' -f $alias.Name, $definition)
        }
    }

    #Log-Timing "finalize"
}
`, sg = `
try { [Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false) } catch { }
try { [Console]::InputEncoding = [System.Text.UTF8Encoding]::new($false) } catch { }
try { $global:OutputEncoding = [System.Text.UTF8Encoding]::new($false) } catch { }
`, ig = (e, t, r, n, s) => `
${s?.utf8Console ? sg : ""}
${e}

Set-Location '${t}'

# Execute user command
${r}
$COMMAND_EXIT_CODE = $LASTEXITCODE

${ng}
Dump-PowerShellState -OutputFile "${n}"

exit $COMMAND_EXIT_CODE
`, og = ig;
} });
import { randomUUID as ag } from "node:crypto";
import { existsSync as q9 } from "node:fs";
import * as cg from "node:fs/promises";
import { rm as lg } from "node:fs/promises";
import * as j9 from "node:os";
import * as ll from "node:path";
function $i() {
  if (process.platform !== "win32") {
    const t = process.env.SHELL;
    if (t?.includes("pwsh") || t?.includes("powershell")) return t;
  }
  let e = Ke("pwsh", []).cmd;
  if (e !== "pwsh" || (e = Ke("powershell", []).cmd, e !== "powershell") || process.platform === "win32" && (e = ll.join(process.env.SYSTEMROOT, "System32", "WindowsPowerShell", "v1.0", "powershell.exe"), q9(e))) return e;
  throw new Error("Neither 'pwsh' (PowerShell Core) nor 'powershell' (Windows PowerShell) found in PATH");
}
async function V9(e, t) {
  await cg.writeFile(e, ug + t, { encoding: "utf8" });
}
async function Y9() {
  return new ul(process.cwd(), "");
}
var ul, ug, dl = k({ "powershell.ts"() {
  "use strict";
  h(), Tt(), ze(), Jr(), K9(), rs(), en(), os(), Yt(), ul = class l2 {
    constructor(t, r) {
      this.cwd = t, this.state = r;
    }
    async getCwd() {
      return this.cwd;
    }
    clone(t) {
      return new l2(t ?? this.cwd, this.state);
    }
    async *execute(t, r, n) {
      var s = [];
      try {
        const a = hr(s, _r(t.withName("PowerShellState.execute"))), c = n?.pipeStdin ?? false, l = n?.workingDirectory ?? this.cwd, u = Yn(), d = { ...process.env, ...It, ...n?.env }, f = ol(d) ? X1(r) : r, p = j9.tmpdir(), g = ll.join(p, `ps-state-out-${ag()}.txt`), _ = process.platform === "win32", y = og(this.state, l, f, g, { utf8Console: _ && n?.powershellUtf8Console === true }), m = ll.join(p, `ps-script-${ag()}.ps1`);
        await V9(m, y);
        const A = ["-ExecutionPolicy", "Bypass"];
        c || A.push("-NonInteractive"), A.push("-File", m);
        const S = $i(), v = n?.sandboxWorkspaceRoot ?? l, b = (await Qr(v, n?.sandboxPolicy)).policy, I = b.type !== "insecure_none" ? { ...b, sandboxWorkspaceRoot: v } : b, O = Pt(S, A, { env: d, stdio: [c ? "pipe" : "ignore", "pipe", "pipe"], cwd: l, detached: !_ }, I, n?.signal);
        O.on("spawn", async () => {
          try {
            await u.write({ type: "stdin_ready", stdin: O.stdin ?? void 0, pid: O.pid });
          } catch {
          }
        });
        const M = ts({ stdout: O.stdout, stderr: O.stderr, writable: u, bufferOutputEvents: n?.bufferOutputEvents, outputLimiterOptions: n?.outputLimiterOptions }), F = async () => {
          try {
            const P = await cg.readFile(g, "utf8"), { cwd: T, rest: R } = vr(P);
            this.state = R, this.cwd = T.trim(), await lg(g).catch(() => {
            });
          } catch {
          }
          await lg(m).catch(() => {
          });
        };
        let H = null, ee = null, Y = false;
        const B = async (P) => {
          if (!Y) {
            if (Y = true, ee && (clearTimeout(ee), ee = null), jt(a.ctx, "exit"), P) try {
              await M.waitForOutput();
            } catch (T) {
              await F(), u.throw(T instanceof Error ? T : new Error(String(T)));
              return;
            }
            await M.flush();
            try {
              await u.write({ type: "exit", code: H, data: "", aborted: n?.signal?.aborted ?? false }), await F(), u.close();
            } catch {
              u.close();
            }
          }
        };
        O.on("exit", (P, T) => {
          H = P;
          const R = n?.closeTimeout ?? 5e3;
          R > 0 && (ee = setTimeout(() => {
            console.warn(`[shell-exec] Close event did not fire within ${R}ms after exit. This may indicate a background process is holding file descriptors open. Proceeding anyway to prevent hang.`), B(false);
          }, R));
        }), O.on("close", async () => {
          await B(true);
        }), O.on("error", (P) => {
          F().catch(() => {
          }), u.throw(P);
        }), yield* u;
      } catch (a) {
        var i = a, o = true;
      } finally {
        fr(s, i, o);
      }
    }
  }, ug = "\uFEFF";
} });
function dg(e) {
  const t = process.platform === "win32", r = e?.shell ?? (t ? $i() : void 0), n = process.cwd();
  return new hl(n, { ...e, shell: r });
}
var hl, hg = k({ "naive.ts"() {
  "use strict";
  h(), Tt(), ze(), Jr(), rs(), dl(), en(), Xr(), os(), Yt(), hl = class u2 {
    constructor(t, r) {
      this.cwd = t, this.options = r;
    }
    async getCwd() {
      return this.cwd;
    }
    clone(t) {
      return new u2(t ?? this.cwd, this.options);
    }
    async *execute(t, r, n) {
      var s = [];
      try {
        const a = hr(s, _r(t.withName("NaiveTerminalExecutor.execute"))), c = Yn(), l = n?.pipeStdin ?? false, u = { ...process.env, ...It, ...n?.env }, d = ol(u) ? X1(r) : r, f = n?.workingDirectory ?? this.cwd, p = n?.sandboxWorkspaceRoot ?? f, g = (await Qr(p, n?.sandboxPolicy)).policy, _ = g.type !== "insecure_none" ? { ...g, sandboxWorkspaceRoot: p } : g, y = process.platform === "win32", m = Pt(this.options?.shell || process.env.SHELL || "/bin/sh", [...this.options?.shellArgs ?? [], "-c", d], { env: u, cwd: f, stdio: [l ? "pipe" : "ignore", "pipe", "pipe"], detached: !y }, _, n?.signal);
        m.on("spawn", async () => {
          try {
            await c.write({ type: "stdin_ready", stdin: m.stdin ?? void 0, pid: m.pid });
          } catch {
          }
        });
        const A = ts({ stdout: m.stdout, stderr: m.stderr, writable: c, bufferOutputEvents: n?.bufferOutputEvents, outputLimiterOptions: n?.outputLimiterOptions });
        m.on("error", (S) => {
          c.throw(S);
        }), m.on("exit", async (S) => {
          if (jt(a.ctx, "exit"), await A.flush(), _.captureDenies ?? false) try {
            const v = await Di(m);
            v && v.length > 0 && await c.write({ type: "sandbox_denies", events: v });
          } catch {
          }
          try {
            await c.write({ type: "exit", code: S, data: "", aborted: n?.signal?.aborted ?? false }), c.close();
          } catch {
            c.close();
          }
        }), yield* c;
      } catch (a) {
        var i = a, o = true;
      } finally {
        fr(s, i, o);
      }
    }
  };
} }), fl, cs, fg, pg, X9 = k({ "dump_zsh_state.ts"() {
  "use strict";
  h(), fl = "__CURSOR_ZSH_STATE_START__", cs = "__CURSOR_ZSH_STATE_END__", fg = `#!/usr/bin/env zsh

# Usage:
#   source dump_zsh_state.zsh
#   dump_zsh_state
# Or execute directly (captures a subshell's state):
#   ./dump_zsh_state.zsh

# Define a function so sourcing won't alter caller state; emulate locally inside
function dump_zsh_state() {
  emulate -L zsh -o errreturn -o pipefail
  set -u


  # Helper to log timing, only if DUMP_ZSH_STATE_TIMING is set
  if [[ -n "\${DUMP_ZSH_STATE_TIMING:-}" ]]; then
    # Timing setup
    typeset start_time=\${EPOCHREALTIME}
    typeset step_start=\${EPOCHREALTIME}
    _log_timing() {
      typeset step_name="$1"
      typeset now=\${EPOCHREALTIME}
      typeset step_duration=$((now - step_start))
      typeset total_duration=$((now - start_time))
      builtin printf "[TIMING] %-20s: %6.3fs (total: %6.3fs)
" "$step_name" "$step_duration" "$total_duration" >&2
      step_start=$now
    }
  else
    _log_timing() { :; }
  fi

  # Ensure parameter arrays are available
  builtin zmodload -F zsh/parameter p:parameters p:options p:functions p:aliases p:galiases p:saliases 2>/dev/null || true
  _log_timing "zmodload"

  # Helper to print a line to stdout
  _emit() {
    builtin print -r -- "$1"
  }

  # Helper to safely encode and emit unsafe values
  _emit_encoded() {
    local content="$1"
    local var_name="$2"
    if [[ -n "$content" ]]; then
      # Builtin printf, not a here-document: no argument length limit, and no temp file
      builtin printf 'cursor_snap_%s=$(builtin printf %%s '"'"'%s'"'"' | command base64 -d)
' "$var_name" "$(command base64 <<<"$content" | command tr -d '
')"
      builtin printf 'eval "$cursor_snap_%s"
' "$var_name"
    fi
  }

  _log_timing "init"

  # Emit start marker at the very beginning of the output
  _emit "__CURSOR_ZSH_STATE_START__"

  # Header
  _emit "$PWD"

  _emit "# zsh state dump generated on $(command date +'%Y-%m-%d %H:%M:%S %z')"
  _log_timing "header"

  # Working directory
  _log_timing "working_dir"

  # Drop ELECTRON_RUN_AS_NODE by exact name so one command exporting it can't
  # bake it into the snapshot that every later command re-evals (IDE-2911:
  # Cypress boots as plain Node until a new chat). Exact unset rather than the
  # line-based grep below, which would also eat vars whose name or multiline
  # value merely contains the token. The shell exits right after the dump.
  builtin unset ELECTRON_RUN_AS_NODE 2>/dev/null || true

  # Environment variables (exported)
  # Filter out: proxy settings plus request/session-scoped vars that must not
  # leak across shell executions.
  # Under a non-UTF-8 locale zsh writes byte 0xa7 inside $'...' as M-', which
  # its own parser reads as the closing quote (zsh 5.9 Src/utils.c quotestring,
  # https://github.com/zsh-users/zsh/blob/zsh-5.9/Src/utils.c); the sed rewrites
  # that one escape to the § form so the restore eval can parse it. It runs
  # only on scalar $'...' lines: a plain-quoted value can hold the same four
  # characters literally, and there they must stay.
  local env_vars
  env_vars=$(builtin typeset -xp 2>/dev/null | command grep -viE '_proxy=|CURSOR_SANDBOX|SUDO_ASKPASS|CURSOR_ASKPASS|CURSOR_CONVERSATION_ID|CURSOR_REQUEST_ID|CURSOR_AGENT_STORE' | command sed "/^export[^=]*=[\\$]'/ s/\\\\\\\\M-'/\\\\\\\\xa7/g" || true)
  if [[ -n "\${__CURSOR_SANDBOX_OWNED_ENV:-}" ]]; then
    env_vars=$(builtin printf '%s
' "$env_vars" | command grep -vE "^(export|declare|typeset)( -[a-zA-Z]+)* (\${__CURSOR_SANDBOX_OWNED_ENV// /|})=" || true)
  fi
  _emit_encoded "$env_vars" "ENV_VARS_B64"
  _log_timing "env_variables"

  # Options (replayable as setopt lines). Exclude the errreturn/nounset/pipefail this
  # function force-enables above, so they are not baked into the restored snapshot and
  # leaked onto every subsequent command (a stray pipefail makes a successful
  # 'cmd | head' report exit 141).
  local zsh_opts
  zsh_opts=$(setopt 2>/dev/null | command grep -vE '^(errreturn|nounset|pipefail)$' | command awk '{printf "builtin setopt %s 2>/dev/null || true\\n", $0}' || true)
  _emit_encoded "$zsh_opts" "ZSH_OPTS_B64"
  _log_timing "options"

  # Functions: dump all functions at once (much faster than individual processing)
  local all_functions
  all_functions=$(builtin typeset -f 2>/dev/null || true)
  _emit_encoded "$all_functions" "FUNCTIONS_B64"
  _log_timing "functions"

  # Aliases (regular, global, and suffix)
  {
    builtin alias -L 2>/dev/null || true
    builtin alias -gL 2>/dev/null || true
    builtin alias -sL 2>/dev/null || true
  }
  _log_timing "aliases"

  # Done
  _emit "# end of zsh state dump"
  _emit "__CURSOR_ZSH_STATE_END__"
  _log_timing "finalize"
}
`, pg = fg;
} });
function gg() {
  const e = process.env.SHELL;
  return e?.includes("zsh") ? e : Ke("zsh", []).cmd;
}
async function J9(e) {
  const t = { ...process.env, ...It, ...e?.env }, r = "__CURSOR_STATE_MARKER__", n = ["-o", "extendedglob", "-ilc", `${pg} builtin printf '${r}\\n'; dump_zsh_state`], s = Pt(gg(), n, { env: t, stdio: ["ignore", "pipe", "pipe"], detached: true }, { type: "insecure_none" }, e?.signal);
  let i = "";
  s.stdout?.on("data", (f) => {
    i += f.toString();
  }), s.on("error", (f) => {
    console.warn(`[shell-exec] zsh state init spawn failed; falling back to empty state: ${f instanceof Error ? f.message : String(f)}`);
  }), await new Promise((f) => {
    s.on("close", () => {
      f(void 0);
    });
  });
  const o = tl(i, r), a = `${fl}
`, c = `${cs}
`;
  let l;
  o.startsWith(a) && o.endsWith(c) ? (l = o.slice(a.length), l = l.slice(0, -(cs.length + 1))) : l = `${process.cwd()}
`;
  const { cwd: u, rest: d } = vr(l);
  return new pl(u, d);
}
var pl, _g = k({ "zsh.ts"() {
  "use strict";
  h(), Tt(), ze(), Jr(), X9(), rs(), Kr(), en(), Xr(), os(), Yt(), pl = class d2 {
    constructor(t, r) {
      this.cwd = t, this.state = r;
    }
    async getCwd() {
      return this.cwd;
    }
    clone(t) {
      return new d2(t ?? this.cwd, this.state);
    }
    async *execute(t, r, n) {
      var s = [];
      try {
        const a = hr(s, _r(t.withName("ZshState.execute"))), c = n?.pipeStdin ?? false, l = Yn(), u = n?.workingDirectory ?? this.cwd, d = { ...process.env, ...It, ...n?.env };
        let f = 'builtin eval "$1"';
        c || (f += " < /dev/null");
        const p = al(d), g = $1(), y = ["-c", (g ? Ui : "") + 'builtin export PATH="/usr/bin:/bin:/usr/sbin:/sbin${PATH:+:$PATH}"; snap=$(command cat <&3); builtin unsetopt aliases 2>/dev/null; builtin unalias -m \'*\' 2>/dev/null || true; builtin eval "$snap" && { builtin unsetopt nounset 2>/dev/null || true; builtin eval "${__CURSOR_SANDBOX_ENV_RESTORE:-}" 2>/dev/null; ' + Oi + `builtin export PWD="$(builtin pwd)"; builtin setopt aliases 2>/dev/null; ${p}${f}; }; COMMAND_EXIT_CODE=$?; dump_zsh_state >&4; builtin exit $COMMAND_EXIT_CODE`, "--", ...g ? [] : [r]], m = n?.sandboxWorkspaceRoot ?? u, A = (await Qr(m, n?.sandboxPolicy)).policy, S = A.type !== "insecure_none" ? { ...A, sandboxWorkspaceRoot: m } : A, v = Pt(gg(), y, { env: d, stdio: [c ? "pipe" : "ignore", "pipe", "pipe", "pipe", "pipe", g ? "pipe" : "ignore"], cwd: u, detached: true }, S, n?.signal);
        let b = "";
        v.on("spawn", async () => {
          try {
            await l.write({ type: "stdin_ready", stdin: v.stdin ?? void 0, pid: v.pid });
          } catch {
          }
        });
        const I = ts({ stdout: v.stdout, stderr: v.stderr, writable: l, bufferOutputEvents: n?.bufferOutputEvents, outputLimiterOptions: n?.outputLimiterOptions });
        v.on("error", (B) => {
          l.throw(B);
        });
        let O = null, M = null, F = false;
        const H = async (B) => {
          if (!F) {
            if (F = true, M && (clearTimeout(M), M = null), jt(a.ctx, "exit"), B) try {
              await I.waitForOutput();
            } catch (P) {
              l.throw(P instanceof Error ? P : new Error(String(P)));
              return;
            }
            if (await I.flush(), !n?.signal?.aborted) {
              const P = `${fl}
`, T = `${cs}
`;
              if (b.startsWith(P) && b.endsWith(T)) {
                let R = b.slice(P.length);
                R = R.slice(0, -(cs.length + 1));
                const { cwd: C, rest: L } = vr(R);
                C?.startsWith("/") && (this.state = L, this.cwd = C);
              }
            }
            if (S.captureDenies ?? false) try {
              const P = await Di(v);
              P && P.length > 0 && await l.write({ type: "sandbox_denies", events: P });
            } catch {
            }
            try {
              await l.write({ type: "exit", code: O, data: "", aborted: n?.signal?.aborted ?? false }), l.close();
            } catch {
              l.close();
            }
          }
        };
        v.on("exit", (B, P) => {
          O = B;
          const T = n?.closeTimeout ?? 5e3;
          T > 0 && (M = setTimeout(() => {
            F || (console.warn(`[shell-exec] Close event did not fire within ${T}ms after exit. This may indicate a background process is holding file descriptors open. Killing detached process group.`), b9(v.pid, "SIGKILL"), H(false));
          }, T));
        }), v.on("close", async () => {
          await H(true);
        });
        const ee = v.stdio[3], Y = v.stdio[4];
        g && Zc(v, r), Qc(ee, this.state), el(Y, (B) => {
          b += B;
        }), yield* l;
      } catch (a) {
        var i = a, o = true;
      } finally {
        fr(s, i, o);
      }
    }
  };
} }), gl, mg, _l, Z9 = k({ "dump_zsh_state_light.ts"() {
  "use strict";
  h(), gl = "__CURSOR_ZSH_STATE_LIGHT_VALID__", mg = `#!/usr/bin/env zsh

# Usage:
#   source dump_zsh_state_light.zsh
#   dump_zsh_state_light
# Or execute directly (captures a subshell's state):
#   ./dump_zsh_state_light.zsh

# Lightweight version that skips function tracking for better performance

# Define a function so sourcing won't alter caller state; emulate locally inside
function dump_zsh_state_light() {
  emulate -L zsh -o errreturn -o pipefail
  set -u


  # Helper to log timing, only if DUMP_ZSH_STATE_TIMING is set
  if [[ -n "\${DUMP_ZSH_STATE_TIMING:-}" ]]; then
    # Timing setup
    typeset start_time=\${EPOCHREALTIME}
    typeset step_start=\${EPOCHREALTIME}
    _log_timing() {
      typeset step_name="$1"
      typeset now=\${EPOCHREALTIME}
      typeset step_duration=$((now - step_start))
      typeset total_duration=$((now - start_time))
      builtin printf "[TIMING] %-20s: %6.3fs (total: %6.3fs)
" "$step_name" "$step_duration" "$total_duration" >&2
      step_start=$now
    }
  else
    _log_timing() { :; }
  fi

  # Ensure parameter arrays are available
  builtin zmodload -F zsh/parameter p:parameters p:options p:aliases p:galiases p:saliases 2>/dev/null || true
  _log_timing "zmodload"

  # Helper to print a line to stdout
  _emit() {
    builtin print -r -- "$1"
  }

  # Helper to safely encode and emit unsafe values
  _emit_encoded() {
    local content="$1"
    local var_name="$2"
    if [[ -n "$content" ]]; then
      # Builtin printf, not a here-document: no argument length limit, and no temp file
      builtin printf 'cursor_snap_%s=$(builtin printf %%s '"'"'%s'"'"' | command base64 -d)
' "$var_name" "$(command base64 <<<"$content" | command tr -d '
')"
      builtin printf 'eval "$cursor_snap_%s"
' "$var_name"
    fi
  }

  _log_timing "init"

  # Emit validity marker so we can detect if dump_zsh_state_light completed
  _emit "__CURSOR_ZSH_STATE_LIGHT_VALID__"

  # Header
  _emit "$PWD"

  _emit "# zsh state dump (light) generated on $(command date +'%Y-%m-%d %H:%M:%S %z')"
  _log_timing "header"

  # Working directory
  _log_timing "working_dir"

  # Drop ELECTRON_RUN_AS_NODE by exact name so one command exporting it can't
  # bake it into the snapshot that every later command re-evals (IDE-2911:
  # Cypress boots as plain Node until a new chat). Exact unset rather than the
  # line-based grep below, which would also eat vars whose name or multiline
  # value merely contains the token. The shell exits right after the dump.
  builtin unset ELECTRON_RUN_AS_NODE 2>/dev/null || true

  # Environment variables (exported)
  # Filter out: proxy settings plus request/session-scoped vars that must not
  # leak across shell executions.
  # Under a non-UTF-8 locale zsh writes byte 0xa7 inside $'...' as M-', which
  # its own parser reads as the closing quote (zsh 5.9 Src/utils.c quotestring,
  # https://github.com/zsh-users/zsh/blob/zsh-5.9/Src/utils.c); the sed rewrites
  # that one escape to the § form so the restore eval can parse it. It runs
  # only on scalar $'...' lines: a plain-quoted value can hold the same four
  # characters literally, and there they must stay.
  local env_vars
  env_vars=$(builtin typeset -xp 2>/dev/null | command grep -viE '_proxy=|CURSOR_SANDBOX|SUDO_ASKPASS|CURSOR_ASKPASS|CURSOR_CONVERSATION_ID|CURSOR_REQUEST_ID|CURSOR_AGENT_STORE' | command sed "/^export[^=]*=[\\$]'/ s/\\\\\\\\M-'/\\\\\\\\xa7/g" || true)
  if [[ -n "\${__CURSOR_SANDBOX_OWNED_ENV:-}" ]]; then
    env_vars=$(builtin printf '%s
' "$env_vars" | command grep -vE "^(export|declare|typeset)( -[a-zA-Z]+)* (\${__CURSOR_SANDBOX_OWNED_ENV// /|})=" || true)
  fi
  _emit_encoded "$env_vars" "ENV_VARS_B64"
  _log_timing "env_variables"

  # Options (replayable as setopt lines). Exclude the errreturn/nounset/pipefail this
  # function force-enables above, so they are not baked into the restored snapshot and
  # leaked onto every subsequent command (a stray pipefail makes a successful
  # 'cmd | head' report exit 141).
  local zsh_opts
  zsh_opts=$(setopt 2>/dev/null | command grep -vE '^(errreturn|nounset|pipefail)$' | command awk '{printf "builtin setopt %s 2>/dev/null || true\\n", $0}' || true)
  _emit_encoded "$zsh_opts" "ZSH_OPTS_B64"
  _log_timing "options"

  # SKIP FUNCTIONS - this is the key difference for performance

  # Aliases (regular, global, and suffix)
  {
    builtin alias -L 2>/dev/null || true
    builtin alias -gL 2>/dev/null || true
    builtin alias -sL 2>/dev/null || true
  }
  _log_timing "aliases"

  # Done
  _emit "# end of zsh state dump (light)"
  _log_timing "finalize"
}
`, _l = mg;
} });
function vg() {
  const e = process.env.SHELL;
  return e?.includes("zsh") ? e : Ke("zsh", []).cmd;
}
async function Q9(e) {
  const t = { ...process.env, ...It, ...e?.env }, r = "__CURSOR_STATE_MARKER__", n = ["-o", "extendedglob", "-ilc", `${_l} builtin printf '${r}\\n'; dump_zsh_state_light`], s = Pt(vg(), n, { env: t, stdio: ["ignore", "pipe", "pipe"], detached: true }, { type: "insecure_none" }, e?.signal);
  let i = "";
  s.stdout?.on("data", (d) => {
    i += d.toString();
  }), s.on("error", (d) => {
    console.warn(`[shell-exec] zsh-light state init spawn failed; falling back to empty state: ${d instanceof Error ? d.message : String(d)}`);
  }), await new Promise((d) => {
    s.on("close", () => {
      d(void 0);
    });
  });
  const o = tl(i, r), a = `${gl}
`, c = o.startsWith(a) ? o.slice(a.length) : `${process.cwd()}
`, { cwd: l, rest: u } = vr(c);
  return new yg(l, u);
}
var yg, ew = k({ "zsh-light.ts"() {
  "use strict";
  h(), Tt(), ze(), Jr(), Z9(), rs(), Kr(), en(), Xr(), os(), Yt(), yg = class h2 {
    constructor(t, r) {
      this.cwd = t, this.state = r;
    }
    async getCwd() {
      return this.cwd;
    }
    clone(t) {
      return new h2(t ?? this.cwd, this.state);
    }
    async *execute(t, r, n) {
      var s = [];
      try {
        const a = hr(s, _r(t.withName("ZshLightState.execute"))), c = n?.pipeStdin ?? false, l = Yn(), u = n?.workingDirectory ?? this.cwd, d = { ...process.env, ...It, ...n?.env };
        let f = 'builtin eval "$1"';
        c || (f += " < /dev/null");
        const p = al(d), g = $1(), y = ["-c", (g ? Ui : "") + `builtin export PATH="/usr/bin:/bin:/usr/sbin:/sbin\${PATH:+:$PATH}"; snap=$(command cat <&3); builtin unsetopt aliases 2>/dev/null; builtin unalias -m '*' 2>/dev/null || true; ${_l} builtin eval "$snap" && { builtin unsetopt nounset 2>/dev/null || true; builtin eval "\${__CURSOR_SANDBOX_ENV_RESTORE:-}" 2>/dev/null; ` + Oi + `builtin export PWD="$(builtin pwd)"; builtin setopt aliases 2>/dev/null; ${p}${f}; }; COMMAND_EXIT_CODE=$?; dump_zsh_state_light >&4; builtin exit $COMMAND_EXIT_CODE`, "--", ...g ? [] : [r]], m = n?.sandboxWorkspaceRoot ?? u, A = (await Qr(m, n?.sandboxPolicy)).policy, S = A.type !== "insecure_none" ? { ...A, sandboxWorkspaceRoot: m } : A, v = Pt(vg(), y, { env: d, stdio: [c ? "pipe" : "ignore", "pipe", "pipe", "pipe", "pipe", g ? "pipe" : "ignore"], cwd: u, detached: true }, S, n?.signal);
        let b = "";
        v.on("spawn", async () => {
          try {
            await l.write({ type: "stdin_ready", stdin: v.stdin ?? void 0, pid: v.pid });
          } catch {
          }
        });
        const I = ts({ stdout: v.stdout, stderr: v.stderr, writable: l, bufferOutputEvents: n?.bufferOutputEvents, outputLimiterOptions: n?.outputLimiterOptions });
        v.on("error", (B) => {
          l.throw(B);
        });
        let O = null, M = null, F = false;
        const H = async (B) => {
          if (!F) {
            if (F = true, M && (clearTimeout(M), M = null), jt(a.ctx, "exit"), B) try {
              await I.waitForOutput();
            } catch (P) {
              l.throw(P instanceof Error ? P : new Error(String(P)));
              return;
            }
            if (await I.flush(), !n?.signal?.aborted) {
              const P = `${gl}
`;
              if (b.startsWith(P)) {
                const T = b.slice(P.length), { cwd: R, rest: C } = vr(T);
                R?.startsWith("/") && (this.state = C, this.cwd = R);
              }
            }
            if (S.captureDenies ?? false) try {
              const P = await Di(v);
              P && P.length > 0 && await l.write({ type: "sandbox_denies", events: P });
            } catch {
            }
            try {
              await l.write({ type: "exit", code: O, data: "", aborted: n?.signal?.aborted ?? false }), l.close();
            } catch {
              l.close();
            }
          }
        };
        v.on("exit", (B, P) => {
          O = B;
          const T = n?.closeTimeout ?? 5e3;
          T > 0 && (M = setTimeout(() => {
            console.warn(`[shell-exec] Close event did not fire within ${T}ms after exit. This may indicate a background process is holding file descriptors open. Proceeding anyway to prevent hang.`), H(false);
          }, T));
        }), v.on("close", async () => {
          await H(true);
        });
        const ee = v.stdio[3], Y = v.stdio[4];
        g && Zc(v, r), Qc(ee, this.state), el(Y, (B) => {
          b += B;
        }), yield* l;
      } catch (a) {
        var i = a, o = true;
      } finally {
        fr(s, i, o);
      }
    }
  };
} });
function tw(e, t) {
  if (!e || e.length === 0) return {};
  const r = e.map((n) => n.trim()).filter((n) => n !== "" && !n.startsWith("#"));
  return r.length === 0 ? {} : { [t]: r };
}
var rw = k({ "ignore-mapping.ts"() {
  "use strict";
  h();
} });
import { monitorEventLoopDelay as nw, performance as Fi } from "node:perf_hooks";
function sw() {
  Hi++, tn === void 0 && (tn = new Sg());
  const e = tn;
  let t = false;
  return { isUnderPressure: () => e.isUnderPressure(), formatSuppressionSection: () => e.formatSuppressionSection(), dispose: () => {
    t || (t = true, Hi--, Hi === 0 && tn !== void 0 && (tn.dispose(), tn = void 0));
  } };
}
var ml, tn, Hi, Sg, iw = k({ "event-loop-pressure.ts"() {
  "use strict";
  h(), ml = { eventLoopDelayP95Ms: 0, eventLoopUtilization: 0 }, Hi = 0, Sg = class {
    eventLoopMonitor;
    sampleTimer;
    lastEventLoopUtilization = Fi.eventLoopUtilization();
    latestSnapshot = ml;
    constructor() {
      this.eventLoopMonitor = nw({ resolution: 20 }), this.lastEventLoopUtilization = Fi.eventLoopUtilization(), this.eventLoopMonitor.enable(), this.sample(), this.sampleTimer = setInterval(() => {
        this.sample();
      }, 250), this.sampleTimer.unref?.();
    }
    dispose() {
      this.sampleTimer !== void 0 && (clearInterval(this.sampleTimer), this.sampleTimer = void 0, this.eventLoopMonitor.disable(), this.latestSnapshot = ml, this.lastEventLoopUtilization = Fi.eventLoopUtilization());
    }
    isUnderPressure() {
      return this.latestSnapshot.eventLoopDelayP95Ms >= 50 || this.latestSnapshot.eventLoopUtilization >= 0.7;
    }
    formatSuppressionSection() {
      const e = this.latestSnapshot, t = [`event loop delay p95 ${e.eventLoopDelayP95Ms.toFixed(1)}ms (threshold 50ms)`, `event loop utilization ${(e.eventLoopUtilization * 100).toFixed(1)}% (threshold ${(0.7 * 100).toFixed(1)}%)`].join(", "), r = this.getPressureTriggerReasons(e);
      return `event loop pressure gate enabled; ${r.length > 0 ? `event loop under pressure (${r.join(", ")})` : "event loop not under pressure"}; event loop metrics: ${t}`;
    }
    getPressureTriggerReasons(e) {
      const t = [];
      return e.eventLoopDelayP95Ms >= 50 && t.push(`event loop delay p95 ${e.eventLoopDelayP95Ms.toFixed(1)}ms >= 50ms`), e.eventLoopUtilization >= 0.7 && t.push(`event loop utilization ${(e.eventLoopUtilization * 100).toFixed(1)}% >= ${(0.7 * 100).toFixed(1)}%`), t;
    }
    sample() {
      this.latestSnapshot = { eventLoopDelayP95Ms: this.computeEventLoopDelayP95Ms(), eventLoopUtilization: this.computeEventLoopUtilization() };
    }
    computeEventLoopDelayP95Ms() {
      const e = this.eventLoopMonitor.percentile(95);
      if (this.eventLoopMonitor.reset(), !Number.isFinite(e)) return 0;
      const t = e / 1e6;
      return Math.max(0, t - 20);
    }
    computeEventLoopUtilization() {
      const e = Fi.eventLoopUtilization(), t = e.active - this.lastEventLoopUtilization.active, r = e.idle - this.lastEventLoopUtilization.idle, n = t + r;
      return this.lastEventLoopUtilization = e, n <= 0 || !Number.isFinite(n) ? 0 : t / n;
    }
  };
} });
function ow(e) {
  const r = `volume thresholds met (${[`output volume ${e.charsInWindow} chars in window >= min ${e.minChars}`, `output rate ${Math.round(e.charsPerSecond)} chars/s >= threshold ${e.triggeredThresholdCharsPerSecond} chars/s`].join("; ")})`, n = e.suppressWithoutPressure ? "event loop pressure gate bypassed due to extreme output rate" : e.eventLoopPressureTracker.formatSuppressionSection();
  return `${r}; ${n}`;
}
var ls, Xt, bg, wg, aw = k({ "output-suppression.ts"() {
  "use strict";
  h(), iw(), ls = { windowMs: 6e4, minimumThresholdCharsPerSecond: 64 * 1024, thresholdCharsPerSecondWithoutPressure: 2 * 1024 * 1024, minChars: 256 * 1024 }, Xt = 1e3, bg = `
[This shell is producing too much output to stream. The command will still run.]
`, wg = class {
    bucketChars;
    bucketStarts;
    totalChars = 0;
    outputSuppressed = false;
    noticeSent = false;
    windowMs;
    minimumThresholdCharsPerSecond;
    thresholdCharsPerSecondWithoutPressure;
    minChars;
    eventLoopPressureTracker;
    disposed = false;
    constructor(e) {
      this.windowMs = e?.windowMs ?? ls.windowMs, this.minimumThresholdCharsPerSecond = e?.minimumThresholdCharsPerSecond ?? ls.minimumThresholdCharsPerSecond, this.thresholdCharsPerSecondWithoutPressure = e?.thresholdCharsPerSecondWithoutPressure ?? ls.thresholdCharsPerSecondWithoutPressure, this.minChars = e?.minChars ?? ls.minChars;
      const t = Math.ceil(this.windowMs / Xt) + 1;
      this.bucketChars = new Uint32Array(t), this.bucketStarts = new Float64Array(t);
    }
    record(e, t = Date.now()) {
      if (this.disposed) return { shouldForward: !this.outputSuppressed, noticeJustTriggered: false, charsPerSecond: 0, thresholdCharsPerSecond: this.minimumThresholdCharsPerSecond };
      this.recordChars(e, t);
      const r = this.getEventLoopPressureTracker().isUnderPressure(), n = this.getCharsInWindow(t), s = this.getAverageCharsPerSecond(t), i = this.getPeakBucketCharsPerSecond(t), o = Math.max(s, i), a = n >= this.minChars, c = a && o >= this.thresholdCharsPerSecondWithoutPressure, l = a && r && s >= this.minimumThresholdCharsPerSecond, u = c ? this.thresholdCharsPerSecondWithoutPressure : r ? this.minimumThresholdCharsPerSecond : this.thresholdCharsPerSecondWithoutPressure, d = c ? o : s;
      !this.outputSuppressed && (c || l) && (this.outputSuppressed = true);
      const f = this.outputSuppressed && !this.noticeSent;
      return f && (this.noticeSent = true, console.warn("[OutputSuppressionController] Suppressing shell output:", ow({ charsInWindow: n, charsPerSecond: d, minChars: this.minChars, triggeredThresholdCharsPerSecond: u, suppressWithoutPressure: c, eventLoopPressureTracker: this.getEventLoopPressureTracker() }))), { shouldForward: !this.outputSuppressed, noticeJustTriggered: f, charsPerSecond: d, thresholdCharsPerSecond: u };
    }
    reset() {
      this.disposed || (this.bucketChars.fill(0), this.bucketStarts.fill(0), this.totalChars = 0, this.outputSuppressed = false, this.noticeSent = false);
    }
    dispose() {
      this.disposed || (this.disposed = true, this.eventLoopPressureTracker?.dispose(), this.eventLoopPressureTracker = void 0);
    }
    getEventLoopPressureTracker() {
      return this.eventLoopPressureTracker === void 0 && (this.eventLoopPressureTracker = sw()), this.eventLoopPressureTracker;
    }
    recordChars(e, t) {
      if (this.prune(t), e <= 0) return;
      const r = Math.floor(t / Xt) * Xt, n = Math.floor(r / Xt) % this.bucketChars.length;
      this.bucketStarts[n] !== r && (this.totalChars -= this.bucketChars[n], this.bucketStarts[n] = r, this.bucketChars[n] = 0), this.bucketChars[n] += e, this.totalChars += e;
    }
    getAverageCharsPerSecond(e) {
      if (this.prune(e), this.totalChars === 0) return 0;
      const t = e - this.windowMs;
      let r = e;
      for (let s = 0; s < this.bucketStarts.length; s++) this.bucketChars[s] > 0 && this.bucketStarts[s] >= t && (r = Math.min(r, this.bucketStarts[s]));
      const n = Math.max(Xt, Math.min(this.windowMs, e - r + Xt));
      return this.totalChars / (n / 1e3);
    }
    getPeakBucketCharsPerSecond(e) {
      this.prune(e);
      const t = e - this.windowMs;
      let r = 0;
      for (let n = 0; n < this.bucketChars.length; n++) this.bucketStarts[n] >= t && (r = Math.max(r, this.bucketChars[n]));
      return r / (Xt / 1e3);
    }
    getCharsInWindow(e) {
      return this.prune(e), this.totalChars;
    }
    prune(e) {
      const t = e - this.windowMs;
      for (let r = 0; r < this.bucketStarts.length; r++) this.bucketStarts[r] !== 0 && this.bucketStarts[r] < t && (this.totalChars -= this.bucketChars[r], this.bucketStarts[r] = 0, this.bucketChars[r] = 0);
    }
  };
} });
import { readFile as cw } from "node:fs/promises";
function lw(e) {
  if (!e) return;
  const t = { version: 1 };
  if ((e.default === "allow" || e.default === "deny") && (t.default = e.default), Array.isArray(e.allow) && e.allow.length > 0 && (t.allow = e.allow.filter((r) => typeof r == "string")), Array.isArray(e.deny) && e.deny.length > 0 && (t.deny = e.deny.filter((r) => typeof r == "string")), e.logging) {
    const r = {};
    typeof e.logging.decisionLogPath == "string" && (r.decisionLogPath = e.logging.decisionLogPath), e.logging.logFormat === "jsonl" && (r.logFormat = "jsonl"), Object.keys(r).length > 0 && (t.logging = r);
  }
  return t;
}
function Eg(e) {
  const t = e.type ?? "workspace_readwrite", r = { debugOutputDir: e.debugOutputDir, captureDenies: e.captureDenies, enableSharedBuildCache: e.enableSharedBuildCache };
  if (t === "insecure_none") return { type: "insecure_none", ...r };
  let n;
  if (Array.isArray(e.additionalReadonlyPaths)) {
    const o = e.additionalReadonlyPaths;
    n = o.length > 0 ? o : void 0;
  }
  const s = { ...r, networkAccess: e.networkAccess, networkPolicy: lw(e.networkPolicy), networkPolicyStrict: e.networkPolicyStrict, additionalReadonlyPaths: n, readBoundary: e.readBoundary, additionalReadPaths: Array.isArray(e.additionalReadPaths) ? e.additionalReadPaths : void 0, disableTmpWrite: e.disableTmpWrite };
  return t === "workspace_readonly" ? { type: "workspace_readonly", ...s } : { type: "workspace_readwrite", ...s, additionalReadwritePaths: e.additionalReadwritePaths };
}
function uw(e) {
  if (typeof e != "object" || e === null) return "Expected an object";
  const t = e;
  if (t.type !== void 0) {
    const i = ["insecure_none", "workspace_readwrite", "workspace_readonly"];
    if (typeof t.type != "string" || !i.includes(t.type)) return `Invalid type: expected one of ${i.join(", ")}`;
  }
  const r = ["networkAccess", "networkPolicyStrict", "disableTmpWrite", "enableSharedBuildCache", "captureDenies"];
  for (const i of r) if (t[i] !== void 0 && typeof t[i] != "boolean") return `Invalid ${i}: expected boolean`;
  const n = ["debugOutputDir"];
  for (const i of n) if (t[i] !== void 0 && typeof t[i] != "string") return `Invalid ${i}: expected string`;
  const s = ["additionalReadwritePaths", "additionalReadonlyPaths", "additionalReadPaths"];
  for (const i of s) if (t[i] !== void 0) {
    if (!Array.isArray(t[i])) return `Invalid ${i}: expected array`;
    if (!t[i].every((a) => typeof a == "string")) return `Invalid ${i}: expected array of strings`;
  }
  if (t.readBoundary !== void 0 && t.readBoundary !== "system" && t.readBoundary !== "workspace") return 'Invalid readBoundary: expected "system" or "workspace"';
  if (t.networkPolicy !== void 0) {
    if (typeof t.networkPolicy != "object" || t.networkPolicy === null) return "Invalid networkPolicy: expected object";
    const i = t.networkPolicy;
    if (i.default !== void 0 && i.default !== "allow" && i.default !== "deny") return 'Invalid networkPolicy.default: expected "allow" or "deny"';
    if (i.allow !== void 0 && !Array.isArray(i.allow)) return "Invalid networkPolicy.allow: expected array";
    if (i.deny !== void 0 && !Array.isArray(i.deny)) return "Invalid networkPolicy.deny: expected array";
  }
}
async function dw(e, t) {
  try {
    const r = await cw(e, "utf-8"), n = JSON.parse(r), s = uw(n);
    if (s) return { success: false, error: `Invalid sandbox policy: ${s}` };
    let i = Eg(n);
    return t && (i = Ag(i, t)), { success: true, policy: i };
  } catch (r) {
    return r instanceof Error ? "code" in r && r.code === "ENOENT" ? { success: false, error: "File not found" } : r instanceof SyntaxError ? { success: false, error: `Invalid JSON: ${r.message}` } : { success: false, error: r.message } : { success: false, error: "Unknown error" };
  }
}
async function hw(e, t) {
  const r = await dw(e, t);
  if (r.success) return r.policy;
}
function Ag(e, t) {
  if (e.type === "insecure_none") return e;
  const r = e.additionalReadonlyPaths?.map((i) => oc(i, t)), n = e.additionalReadPaths?.map((i) => oc(i, t));
  if (e.type === "workspace_readonly") return { ...e, additionalReadonlyPaths: r, additionalReadPaths: n };
  const s = e.additionalReadwritePaths?.map((i) => oc(i, t));
  return { ...e, additionalReadonlyPaths: r, additionalReadPaths: n, additionalReadwritePaths: s };
}
var fw = k({ "policy-loader.ts"() {
  "use strict";
  h(), ze();
} }), us = {};
Rh(us, { BashState: () => cl, INSECURE_NONE_SANDBOX_POLICY: () => kg, KnownShellExecutor: () => Xc, NaiveTerminalExecutor: () => hl, OutputSuppressionController: () => wg, PowerShellState: () => ul, SHELL_OUTPUT_SUPPRESSED_NOTICE: () => bg, SandboxUnsupportedError: () => Yc, ZshState: () => pl, configureRipgrepPath: () => Xp, configureSandboxPrereqs: () => D1, createDefaultTerminalExecutor: () => _w, createIgnoreMapping: () => tw, createNaiveTerminalExecutor: () => dg, getHardcodedAllowedReadPaths: () => c1, getLastSandboxFailureReason: () => C1, getPowerShellExecutable: () => $i, getRipgrepBinaryPath: () => wc, getSandboxPolicyType: () => z1, getSandboxProjectDir: () => d7, getShellExecutablePath: () => pw, getSuggestedShell: () => Tg, isAllowAllNetworkByPolicy: () => $7, isHardcodedWriteProtected: () => O7, isNetworkEnabledByPolicy: () => Uc, isRipgrepConfigured: () => Zp, isSandboxSupported: () => _9, loadSandboxPolicyFromFileOrUndefined: () => hw, mergeAdditionalReadPaths: () => M9, mergeNetworkPolicies: () => G1, mergePathsIntersection: () => W1, mergePathsUnion: () => ss, mergeReadBoundary: () => x9, networkAllowAllPolicy: () => H7, networkDisabledPolicy: () => F7, parseSandboxPolicyJson: () => Eg, primeSandboxSupport: () => m9, resolvePolicyPaths: () => Ag, resolveRipgrepFromPath: () => Zb, resolveSandboxPolicyForWorkspace: () => Qr, spawnInSandbox: () => N1, spawnWithSignal: () => Pt, withConfiguredRipgrepEnv: () => bc });
import vl from "node:path";
function pw(e) {
  switch (e) {
    case "zsh":
    case "zsh-light":
      return Ke("zsh", []).cmd;
    case "bash":
      return Ke("bash", []).cmd;
    case "powershell":
      return $i();
    default:
      return process.env.SHELL || "/bin/sh";
  }
}
function rn(e) {
  try {
    return Ke(e, []).cmd !== e;
  } catch {
    return false;
  }
}
function gw(e) {
  const t = e.replace(/[\\/]+$/, ""), r = vl.win32.basename(t).toLowerCase();
  return r === "bash.exe" ? t : r === "bin" ? vl.win32.join(t, "bash.exe") : vl.win32.join(t, "bin", "bash.exe");
}
function Rg() {
  if (process.platform !== "win32" || !process.env.MSYSTEM) return;
  const t = process.env.EXEPATH;
  if (t) return gw(t);
  const r = ["C:\\Program Files\\Git\\bin\\bash.exe", "C:\\Program Files (x86)\\Git\\bin\\bash.exe"];
  for (const n of r) try {
    if (Ke(n, []).cmd === n) return n;
  } catch {
  }
  return "C:\\Program Files\\Git\\bin\\bash.exe";
}
function Tg(e) {
  if (e === "zsh-light") return "zsh-light";
  const t = e || process.env.SHELL || "", r = process.platform === "win32", n = r && !e ? Rg() : void 0, s = n !== void 0 || /git.*bash\.exe$/i.test(t) || /program.*git.*bin.*bash\.exe$/i.test(t), i = !r || s;
  return t.includes("zsh") ? "zsh" : t.includes("bash") && i ? "bash" : t.includes("pwsh") || t.includes("powershell") ? "powershell" : n ? "bash" : r && (rn("pwsh") || rn("powershell")) ? "powershell" : rn("zsh") ? "zsh" : rn("bash") && i ? "bash" : rn("pwsh") || rn("powershell") ? "powershell" : "naive";
}
function _w(e) {
  let t = e;
  if (!e?.userTerminalHint) {
    const n = Rg();
    n && (t = { ...e, userTerminalHint: n });
  }
  switch (Tg(t?.userTerminalHint ?? "")) {
    case "zsh":
      return new as(() => J9(t));
    case "bash":
      return new as(() => W9(t));
    case "powershell":
      return new as(() => Y9());
    case "zsh-light":
      return new as(() => Q9(t));
    default:
      return dg(t);
  }
}
var kg, ds = k({ "index.ts"() {
  h(), ze(), rg(), G9(), hg(), dl(), Yt(), _g(), ew(), rg(), Jr(), rw(), hg(), aw(), dl(), Ec(), Kr(), Dc(), $c(), fw(), en(), Xr(), Yt(), _g(), kg = { perUser: { type: "insecure_none" } };
} });
function Ig(e) {
  const t = (e ?? []).filter((n) => n.trim().length > 0), r = t.flatMap((n) => {
    const s = Aa(n);
    return s === void 0 ? [] : [s];
  });
  return { hasConfiguredEntries: t.length > 0, hasInvalidEntries: r.length !== t.length, entries: r };
}
function mw(e) {
  return e.entries.includes("*") ? [...Bi] : e.entries;
}
function vw(e) {
  const t = Ig(e.mcpNetworkAllowlist), r = Ig(e.mcpNetworkDenylist), n = e.mcpNetworkMode;
  if (n === "deny_all" || r.entries.includes("*") || r.hasInvalidEntries) return { version: 1, default: "deny" };
  if (n === "allow_all") return { version: 1, default: "deny", allow: [...Bi], ...r.entries.length > 0 ? { deny: r.entries } : {} };
  if (n === "allowlist" || t.hasConfiguredEntries) {
    const s = mw(t);
    return s.length > 0 ? { version: 1, default: "deny", allow: s, ...r.entries.length > 0 ? { deny: r.entries } : {} } : { version: 1, default: "deny" };
  }
  return { version: 1, default: "deny", allow: [...Bi], ...r.entries.length > 0 ? { deny: r.entries } : {} };
}
async function yw(e, t) {
  const { resolveSandboxPolicyForWorkspace: r } = await Promise.resolve().then(() => (ds(), us)), n = { type: "workspace_readwrite", sandboxWorkspaceRoot: t, networkPolicy: vw(e), networkPolicyStrict: true }, { policy: s } = await r(t, { perUser: n });
  return s;
}
var Bi, Pg = k({ "mcp-sandbox-policy.ts"() {
  "use strict";
  h(), Qe(), Bi = ["0.0.0.0/0", "::/0"];
} });
function Sw(e) {
  return (e.mcpNetworkAllowlist ?? []).some((t) => t.trim().length > 0);
}
function Og(e) {
  const t = (e ?? []).filter((n) => n.trim().length > 0), r = t.flatMap((n) => {
    const s = Aa(n);
    return s === void 0 ? [] : [s];
  });
  return { hasInvalidEntries: r.length !== t.length, entries: r };
}
function bw(e) {
  if (e.mcpNetworkMode === "allow_all") return [...hs];
  const t = Og(e.mcpNetworkAllowlist);
  if (e.mcpNetworkMode === "allowlist") return t.entries.includes("*") ? [...hs] : t.entries;
  if (!Sw(e)) return [...hs];
  const r = cS(e);
  return r.includes("*") ? [...hs] : r;
}
function Cg(e) {
  const t = e.enabled === true, r = Og(e.mcpNetworkDenylist), n = e.mcpNetworkMode === "deny_all" || r.entries.includes("*") || r.hasInvalidEntries, s = t ? bw(e) : [], i = t ? n ? ["*"] : r.entries : [];
  return JSON.stringify({ enabled: t, mode: e.mcpNetworkMode, allow: n ? [] : s, deny: i });
}
var hs, Lg = k({ "mcp-sandbox-policy-fingerprint.ts"() {
  "use strict";
  h(), Qe(), hs = ["0.0.0.0/0", "::/0"];
} }), yl, xg = k({ "mcp-sandbox-unavailable-error.ts"() {
  "use strict";
  h(), yl = class extends Error {
    constructor(e, t) {
      super(`MCP server "${e}" requires sandboxing because MCP Network Controls are enabled, but the sandbox is not supported on this platform or system. The server was not started.`), this.serverName = e, this.name = "McpSandboxUnavailableError", t !== void 0 && (this.cause = t);
    }
  };
} });
function ww(e, t) {
  const r = e[t];
  return typeof r == "number" && Number.isFinite(r) ? r : void 0;
}
function Ew(e, t) {
  const r = e[t];
  return typeof r == "boolean" ? r : void 0;
}
function Mg(e) {
  const t = {};
  for (const r of Ng) {
    const n = ww(e, r);
    n !== void 0 && (t[r] = n);
  }
  for (const r of Ug) {
    const n = Ew(e, r);
    n !== void 0 && (t[r] = n);
  }
  return t;
}
function Aw(e) {
  if (!e || typeof e != "object") return;
  const t = e, r = typeof t.identifier == "string" && t.identifier.length > 0 ? t.identifier : void 0, n = typeof t.hostname == "string" && t.hostname.length > 0 ? t.hostname.toLowerCase() : void 0;
  if (!(r === void 0 && n === void 0)) return { ...Mg(t), ...r !== void 0 ? { identifier: r } : {}, ...n !== void 0 ? { hostname: n } : {} };
}
function Rw(e) {
  if (!(!e || e.type === "stdio")) return Q2(e.serverUrl);
}
function Tw(e, t) {
  if (!t || e.identifier !== void 0 && e.identifier !== t.identifier) return false;
  if (e.hostname !== void 0) {
    const r = Rw(t.serverInfo);
    if (!r || r !== e.hostname) return false;
  }
  return true;
}
function Dg(e) {
  if (!e || typeof e != "object") {
    fs = {};
    return;
  }
  const t = e, r = Array.isArray(t.overrides) ? t.overrides.map(Aw).filter((n) => n !== void 0) : void 0;
  fs = { ...Mg(t), ...r !== void 0 ? { overrides: r } : {} };
}
function be(e, t) {
  let r = fs[e];
  for (const n of fs.overrides ?? []) {
    if (!Tw(n, t)) continue;
    const s = n[e];
    s !== void 0 && (r = s);
  }
  return r;
}
var Ng, Ug, fs, ot = k({ "mcp-reconnect-config.ts"() {
  "use strict";
  h(), Qe(), Ng = ["fastRetryBaseDelayMs", "fastRetryMaxDelayMs", "fastRetryMaxAttempts", "periodicRetryBaseDelayMs", "periodicRetryMaxDelayMs", "maxPeriodicCycles", "focusRetryCooldownMs", "inlineReconnectCooldownMs", "streamableHttpSession404TombstoneThreshold", "healthProbeTimeoutMs", "toolCallIdleTimeoutMs", "toolCallMaxTotalTimeoutMs", "degradedProbeDelayMs", "maxDegradedProbeFailures", "keepaliveProbeDelayMs", "keepaliveJitterMs", "stabilityThresholdMs", "nonRetryableWakeRetryCooldownMs", "networkResumeReconnectDebounceMs"], Ug = ["stdioConnectFailuresAreNonRetryable", "retryNonRetryableOnWake", "retryNonRetryableAutomatically", "networkResumeReconnectEnabled", "toolCallBoundedTimeoutEnabled"], fs = {};
} });
function $g(e) {
  const t = be("focusRetryCooldownMs", e) ?? ps;
  return Math.max(ps, Math.min(t, 36e5));
}
function Fg(e, t, r) {
  return t !== void 0 && e - t < r;
}
var ps, Sl = k({ "mcp-focus-retry-cooldown.ts"() {
  "use strict";
  h(), ot(), ps = 5 * 6e4;
} });
function zi(e) {
  const t = be("stabilityThresholdMs", e) ?? Gg;
  return Math.max(5e3, Math.min(Math.trunc(t), 6e5));
}
function bl(e) {
  const t = be("degradedProbeDelayMs", e) ?? Kg;
  return Math.max(1e3, Math.min(Math.trunc(t), 36e5));
}
function Hg(e) {
  const t = be("healthProbeTimeoutMs", e) ?? qg;
  return Math.max(1e3, Math.min(Math.trunc(t), 12e4));
}
function Bg(e) {
  const t = be("maxDegradedProbeFailures", e) ?? jg;
  return Math.max(1, Math.min(Math.trunc(t), 20));
}
function zg(e) {
  const t = be("keepaliveProbeDelayMs", e) ?? Vg;
  return Math.max(1e4, Math.min(Math.trunc(t), 36e5));
}
function Wg(e) {
  const t = be("keepaliveJitterMs", e) ?? Yg;
  return Math.max(0, Math.min(Math.trunc(t), 36e5));
}
var Gg, Kg, qg, jg, Vg, Yg, nn = k({ "mcp-fsm-timing-config.ts"() {
  "use strict";
  h(), ot(), Gg = 3e4, Kg = 3e4, qg = 1e4, jg = 3, Vg = 5 * 6e4, Yg = 3e4;
} });
function kw(e) {
  const t = be("inlineReconnectCooldownMs", e) ?? Xg;
  return Math.max(1e3, Math.min(t, 36e5));
}
var Xg, Jg = k({ "mcp-inline-reconnect-cooldown.ts"() {
  "use strict";
  h(), ot(), Xg = 5 * 6e4;
} });
function Zg(e) {
  return e?.type === "connected";
}
function wl(e) {
  return (e.type === "failed" || e.type === "closed") && e.automaticRetry === false;
}
function El(e, t, r) {
  return !(e.type !== "failed" && e.type !== "closed" || e.automaticRetry === false && be("retryNonRetryableOnWake", r) !== true || t.type === "needsUserAuth" || t.type === "expired");
}
function Qg(e, t) {
  return wl(e) ? be("nonRetryableWakeRetryCooldownMs", t) ?? ps : $g(t);
}
var e_ = k({ "mcp-network-resume-reconnect-policy.ts"() {
  "use strict";
  h(), Sl(), ot();
} });
function t_(e) {
  const t = be("fastRetryMaxAttempts", e) ?? a_;
  return Math.max(1, Math.min(Math.trunc(t), 20));
}
function r_(e) {
  const t = be("maxPeriodicCycles", e);
  if (t !== void 0) return Math.max(0, Math.min(Math.trunc(t), 1e4));
}
function n_(e) {
  return be("networkResumeReconnectEnabled", e) ?? false;
}
function s_(e) {
  const t = be("networkResumeReconnectDebounceMs", e) ?? c_;
  return Math.max(0, Math.min(Math.trunc(t), 18e5));
}
function i_(e, t) {
  return s_(t);
}
function o_(e, t) {
  switch (e) {
    case "power_monitor_resume":
    case "unlock_screen":
      return n_(t);
    default:
      return e;
  }
}
function Iw(e, t) {
  return { enabled: o_(e, t), debounceMs: i_(e, t) };
}
var a_, c_, Al = k({ "mcp-reconnect-runtime-policy.ts"() {
  "use strict";
  h(), ot(), a_ = 5, c_ = 5e3;
} });
function l_(e) {
  if (!e.sawSession404) return { nextCount: 0, shouldTombstone: false };
  const t = e.currentCount + 1;
  return t >= e.threshold ? { nextCount: 0, shouldTombstone: true } : { nextCount: t, shouldTombstone: false };
}
function u_(e) {
  const t = be("streamableHttpSession404TombstoneThreshold", e) ?? d_, r = Math.trunc(t);
  return Math.max(1, Math.min(r, 50));
}
var d_, h_ = k({ "mcp-session-404-tombstone-config.ts"() {
  "use strict";
  h(), ot(), d_ = 5;
} });
function Pw(e, t) {
  if (t.type === "needsUserAuth") return false;
  if (t.type === "expired") switch (e.type) {
    case "idle":
    case "transient_failure":
    case "dormant":
      return true;
    case "failed":
    case "closed":
      return e.automaticRetry !== false;
    case "connecting":
    case "connected":
    case "degraded":
      return false;
    default:
      return e;
  }
  switch (e.type) {
    case "idle":
    case "transient_failure":
    case "dormant":
      return true;
    case "failed":
    case "closed":
      return e.automaticRetry !== false;
    case "connecting":
    case "connected":
    case "degraded":
      return false;
    default:
      return e;
  }
}
var f_ = k({ "mcp-supervisor-reconnect-policy.ts"() {
  "use strict";
  h();
} });
function Wi(e) {
  return /\b(timeout|timed out|deadline exceeded)\b/i.test(e);
}
var Gi = k({ "error-message-utils.ts"() {
  "use strict";
  h();
} });
function Ow(e) {
  return be("toolCallBoundedTimeoutEnabled", e) ?? true;
}
function p_(e) {
  const t = be("toolCallIdleTimeoutMs", e) ?? v_;
  return Math.max(5e3, Math.min(Math.trunc(t), 30 * 6e4));
}
function Cw(e) {
  const t = p_(e), r = be("toolCallMaxTotalTimeoutMs", e) ?? y_;
  return Math.max(t, Math.min(Math.trunc(r), 60 * 6e4));
}
function g_(e, t, r) {
  if (!(t?.enabled ?? Ow(r))) return { timeout: S_, ...e !== void 0 ? { onprogress: e } : {} };
  const s = Math.max(5e3, Math.min(Math.trunc(t?.timeoutMs ?? p_(r)), 30 * 6e4)), i = Math.max(s, Math.min(Math.trunc(t?.maxTotalTimeoutMs ?? Cw(r)), 60 * 6e4));
  return { timeout: s, resetTimeoutOnProgress: true, maxTotalTimeout: i, ...e !== void 0 ? { onprogress: e } : {} };
}
function __(e, t, r = Date.now()) {
  if (e.maxTotalTimeout === void 0) return e;
  const n = e.maxTotalTimeout - (r - t);
  return n <= 0 ? null : { ...e, timeout: Math.min(e.timeout, n), maxTotalTimeout: n };
}
function m_() {
  return new Error(w_);
}
function Lw(e) {
  const t = e instanceof Error ? e.message : String(e);
  return Wi(t);
}
function xw(e, t, r) {
  return r === void 0 ? "legacy" : r > t && e >= r - b_ ? "max_total" : "idle";
}
var v_, y_, S_, b_, w_, E_ = k({ "mcp-tool-call-timeout.ts"() {
  "use strict";
  h(), Gi(), ot(), v_ = 12e4, y_ = 60 * 6e4, S_ = 60 * 6e4, b_ = 5e3, w_ = "MCP error -32001: Request timed out";
} });
function A_(e, t) {
  switch (e.type) {
    case "idle":
      return at;
    case "connecting":
      return at;
    case "connected":
      return e.stabilized ? e.probing || t?.getKeepaliveProbesEnabled?.() === false ? at : Fw(t) : $w(t);
    case "dormant":
      return at;
    case "degraded":
      return e.probing ? at : Hw(t);
    case "transient_failure":
      return /* @__PURE__ */ new Map([["backoff_timer", { delayMs: e.nextDelayMs }]]);
    case "failed":
      return e.automaticRetry === false && t?.getRetryNonRetryableAutomatically?.() !== true || e.exhausted ? at : /* @__PURE__ */ new Map([["periodic_retry_timer", { delayMs: e.periodicRetryDelayMs }]]);
    case "closed":
      return e.automaticRetry === false && t?.getRetryNonRetryableAutomatically?.() !== true || e.exhausted ? at : /* @__PURE__ */ new Map([["periodic_retry_timer", { delayMs: e.periodicRetryDelayMs }]]);
    default:
      return e;
  }
}
function R_(e) {
  switch (e.type) {
    case "idle":
      return Jt;
    case "connecting":
      return T_;
    case "connected":
      return e.probing ? Rl : Jt;
    case "dormant":
      return Jt;
    case "degraded":
      return e.probing ? Rl : Jt;
    case "transient_failure":
      return Jt;
    case "failed":
      return Jt;
    case "closed":
      return Jt;
    default:
      return e;
  }
}
function Mw(e) {
  return e?.getStabilityThresholdMs?.() ?? zi();
}
function Dw(e) {
  return e?.getKeepaliveProbeDelayMs?.() ?? zg();
}
function Nw(e) {
  return e?.getKeepaliveJitterMs?.() ?? Wg();
}
function Uw(e) {
  return e?.getDegradedProbeDelayMs?.() ?? bl();
}
function $w(e) {
  return /* @__PURE__ */ new Map([["stability_timer", { delayMs: Mw(e) }]]);
}
function Fw(e) {
  return /* @__PURE__ */ new Map([["health_probe_timer", { delayMs: Dw(e) + Math.floor(Math.random() * Nw(e)) }]]);
}
function Hw(e) {
  return /* @__PURE__ */ new Map([["health_probe_timer", { delayMs: Uw(e) }]]);
}
var at, Jt, T_, Rl, k_ = k({ "active-activities.ts"() {
  "use strict";
  h(), nn(), at = /* @__PURE__ */ new Map(), Jt = /* @__PURE__ */ new Set(), T_ = /* @__PURE__ */ new Set(["connection_attempt"]), Rl = /* @__PURE__ */ new Set(["health_probe"]);
} });
function Bw(e) {
  switch (e) {
    case "backoff_timer":
      return { target: "connection", kind: "backoff_timer_expired" };
    case "stability_timer":
      return { target: "connection", kind: "connection_stabilized" };
    case "periodic_retry_timer":
      return { target: "connection", kind: "periodic_retry_expired" };
    case "health_probe_timer":
      return { target: "connection", kind: "health_probe_due" };
    default:
      return e;
  }
}
function I_(e) {
  if (e.type === "connected" && e.stabilized && !e.probing) return "keepalive";
  if (e.type === "degraded" && !e.probing) return "degraded";
}
var P_, zw = k({ "activity-reconciler.ts"() {
  "use strict";
  h(), k_(), P_ = class {
    constructor(e = A_) {
      this.resolveActivities = e, this.activeTimers = /* @__PURE__ */ new Map(), this.activeServiceHandles = /* @__PURE__ */ new Map(), this.activeServicePromises = /* @__PURE__ */ new Map();
    }
    reconcile(e, t, r) {
      const n = this.resolveActivities(e), s = this.resolveActivities(t);
      for (const [i, o] of this.activeTimers) {
        const a = s.get(i), c = n.get(i), l = i === "health_probe_timer" && I_(e) !== I_(t), u = i !== "health_probe_timer" && a?.delayMs !== c?.delayMs;
        (!a || l || u) && (o.cancel(), this.activeTimers.delete(i));
      }
      for (const [i, o] of s) if (!this.activeTimers.has(i)) {
        const a = this.startTimer(i, o, r);
        this.activeTimers.set(i, a);
      }
    }
    reconcileServices(e, t, r, n) {
      const s = R_(e), i = R_(t), o = e.type === "connecting" ? e.generation : -1, a = t.type === "connecting" ? t.generation : -1, c = e.type === t.type && o !== a && a >= 0;
      for (const [l, u] of this.activeServiceHandles) (!i.has(l) || c) && (u.cancel(), this.activeServiceHandles.delete(l), this.activeServicePromises.delete(l));
      for (const l of i) if (!this.activeServiceHandles.has(l)) {
        const { handle: u, promise: d } = n(l, r);
        this.activeServiceHandles.set(l, u), this.activeServicePromises.set(l, d.catch(() => {
        }));
      }
    }
    getServicePromise(e) {
      return this.activeServicePromises.get(e);
    }
    dispose() {
      for (const [, e] of this.activeTimers) e.cancel();
      this.activeTimers.clear();
      for (const [, e] of this.activeServiceHandles) e.cancel();
      this.activeServiceHandles.clear(), this.activeServicePromises.clear();
    }
    get activeCount() {
      return this.activeTimers.size;
    }
    get activeServiceCount() {
      return this.activeServiceHandles.size;
    }
    has(e) {
      return this.activeTimers.has(e);
    }
    hasService(e) {
      return this.activeServiceHandles.has(e);
    }
    startTimer(e, t, r) {
      const n = Bw(e);
      let s = false;
      const i = setTimeout(() => {
        s || (this.activeTimers.delete(e), r([n]));
      }, t.delayMs);
      return { cancel: () => {
        s = true, clearTimeout(i);
      } };
    }
  };
} });
function O_(e, t) {
  switch (t.kind) {
    case "auth_required":
      return { type: "needsUserAuth", authorizationUrl: t.authorizationUrl };
    case "tokens_saved":
      switch (e.type) {
        case "needsUserAuth":
        case "expired":
          return { type: "valid" };
        case "unknown":
        case "valid":
          return null;
        default:
          return e;
      }
    case "auth_completed":
      switch (e.type) {
        case "needsUserAuth":
          return { type: "valid" };
        case "unknown":
        case "valid":
        case "expired":
          return null;
        default:
          return e;
      }
    case "operation_auth_failed":
      switch (e.type) {
        case "valid":
        case "unknown":
          return { type: "expired", error: t.error };
        case "needsUserAuth":
        case "expired":
          return null;
        default:
          return e;
      }
    case "operation_succeeded":
      switch (e.type) {
        case "expired":
        case "unknown":
          return { type: "valid" };
        case "valid":
        case "needsUserAuth":
          return null;
        default:
          return e;
      }
    case "server_removed":
      return { type: "unknown" };
    default:
      return t;
  }
}
var C_ = k({ "auth-fsm.ts"() {
  "use strict";
  h();
} }), Ww = k({ "connect-flow-logic.ts"() {
  "use strict";
  h();
} });
function Tl(e) {
  return e.maxAttempts ?? e.getMaxAttempts?.() ?? t_();
}
function L_(e) {
  return e.maxPeriodicCycles !== void 0 ? e.maxPeriodicCycles : e.getMaxPeriodicCycles?.() ?? r_();
}
function Gw(e) {
  return e.getStabilityThresholdMs?.() ?? zi();
}
function Kw(e) {
  return e.getMaxDegradedProbeFailures?.() ?? Bg();
}
function qw(e) {
  return e.type === "connecting" ? e.generation : 0;
}
function kl(e) {
  return qw(e) + 1;
}
function Il() {
  return { state: { type: "idle" }, commands: [{ type: "cancel_backoff_timer" }] };
}
function sn(e, t, r = 0) {
  return { state: { type: "connecting", attempt: t, generation: kl(e), periodicCycle: r }, commands: [] };
}
function Ki(e, t, r, n = 0) {
  return { state: { type: "connecting", attempt: t, generation: kl(e), periodicCycle: n }, commands: r };
}
function qi(e, t, r = 0, n = true) {
  return { state: { type: "failed", error: e, periodicRetryDelayMs: t.getPeriodicRetryDelay(r), periodicCycle: r, ...n === false ? { automaticRetry: false } : {} }, commands: [] };
}
function Pl(e, t, r, n = 0, s = true) {
  return { state: { type: "failed", error: e, periodicRetryDelayMs: t.getPeriodicRetryDelay(n), periodicCycle: n, ...s === false ? { automaticRetry: false } : {} }, commands: r };
}
function x_(e, t, r = [], n = 0, s = true) {
  return { state: { type: "closed", error: e, periodicRetryDelayMs: t.getPeriodicRetryDelay(n), periodicCycle: n, ...s === false ? { automaticRetry: false } : {} }, commands: r };
}
function ji(e, t, r = 0) {
  const n = t.getBackoffDelay(e);
  return { state: { type: "transient_failure", attempt: e, nextDelayMs: n, periodicCycle: r }, commands: [{ type: "start_backoff_timer", delayMs: n }] };
}
function jw(e, t, r, n, s = 0) {
  if (!r) return qi(t, n, s, false);
  const i = e + 1;
  return i >= Tl(n) ? qi(t, n, s) : ji(i, n, s);
}
function Vw(e, t, r) {
  switch (t.kind) {
    case "connect_start":
      return sn(e, 0);
    case "connect_failure":
      return qi(t.error, r, 0, t.isRetryable);
    case "server_removed":
      return Ne;
    case "connect_success":
    case "transport_error":
    case "transport_closed":
    case "session_invalidated":
    case "idle_suspend":
    case "backoff_timer_expired":
    case "connection_stabilized":
    case "periodic_retry_expired":
    case "request_degraded":
    case "health_probe_due":
    case "health_probe_succeeded":
    case "health_probe_failed":
      return Ne;
    default:
      return t;
  }
}
function Yw(e, t, r) {
  switch (t.kind) {
    case "connect_success":
      return { state: { type: "connected", attempt: e.attempt, stabilized: false, probing: false }, commands: [{ type: "cancel_backoff_timer" }, { type: "start_stability_timer", delayMs: Gw(r) }] };
    case "connect_failure":
      return jw(e.attempt, t.error, t.isRetryable, r, e.periodicCycle);
    case "server_removed":
      return Il();
    case "connect_start":
    case "transport_error":
    case "transport_closed":
    case "idle_suspend":
    case "backoff_timer_expired":
    case "connection_stabilized":
    case "periodic_retry_expired":
    case "request_degraded":
    case "health_probe_due":
    case "health_probe_succeeded":
    case "health_probe_failed":
      return Ne;
    case "session_invalidated":
      return Ki(e, 0, [{ type: "initiate_connection" }]);
    default:
      return t;
  }
}
function Xw(e, t, r) {
  switch (t.kind) {
    case "connect_start":
      return Ne;
    case "connection_stabilized":
      return { state: { type: "connected", attempt: 0, stabilized: true, probing: false }, commands: [] };
    case "transport_error":
      if (t.isRetryable) {
        const n = e.stabilized ? 0 : e.attempt + 1;
        return n >= Tl(r) ? Pl(t.error, r, [{ type: "cancel_stability_timer" }]) : { state: { type: "transient_failure", attempt: n, nextDelayMs: r.getBackoffDelay(n), periodicCycle: 0 }, commands: [{ type: "cancel_stability_timer" }, { type: "start_backoff_timer", delayMs: r.getBackoffDelay(n) }] };
      }
      return Pl(t.error, r, [{ type: "cancel_stability_timer" }], 0, false);
    case "transport_closed":
      if (t.isStdio) return x_("Client closed", r, [{ type: "cancel_stability_timer" }]);
      {
        const n = e.stabilized ? 0 : e.attempt + 1;
        return n >= Tl(r) ? Pl("Transport closed", r, [{ type: "cancel_stability_timer" }]) : { state: { type: "transient_failure", attempt: n, nextDelayMs: r.getBackoffDelay(n), periodicCycle: 0 }, commands: [{ type: "cancel_stability_timer" }, { type: "start_backoff_timer", delayMs: r.getBackoffDelay(n) }] };
      }
    case "session_invalidated":
      return Ki(e, 0, [{ type: "cancel_backoff_timer" }, { type: "cancel_stability_timer" }, { type: "initiate_connection" }]);
    case "idle_suspend":
      return { state: { type: "dormant" }, commands: [{ type: "cancel_stability_timer" }] };
    case "server_removed":
      return { state: { type: "idle" }, commands: [{ type: "cancel_backoff_timer" }, { type: "cancel_stability_timer" }] };
    case "request_degraded":
      return { state: { type: "degraded", consecutiveFailures: 0, reason: t.reason, probing: false }, commands: [{ type: "cancel_stability_timer" }] };
    case "health_probe_due":
      return e.probing ? Ne : { state: { ...e, probing: true }, commands: [] };
    case "health_probe_succeeded":
      return e.probing ? { state: { ...e, probing: false }, commands: [] } : Ne;
    case "health_probe_failed":
      return { state: { type: "degraded", consecutiveFailures: 1, reason: t.error, probing: false }, commands: [{ type: "cancel_stability_timer" }] };
    case "connect_success":
    case "connect_failure":
    case "backoff_timer_expired":
    case "periodic_retry_expired":
      return Ne;
    default:
      return t;
  }
}
function Jw(e, t, r) {
  switch (t.kind) {
    case "health_probe_due":
      return e.probing ? Ne : { state: { ...e, probing: true }, commands: [] };
    case "health_probe_succeeded":
      return { state: { type: "connected", attempt: 0, stabilized: true, probing: false }, commands: [] };
    case "health_probe_failed": {
      const n = e.consecutiveFailures + 1;
      return n >= Kw(r) ? ji(0, r) : { state: { type: "degraded", consecutiveFailures: n, reason: t.error, probing: false }, commands: [] };
    }
    case "request_degraded":
      return { state: { type: "degraded", consecutiveFailures: 0, reason: t.reason, probing: e.probing }, commands: [] };
    case "transport_error":
      return t.isRetryable ? ji(0, r) : qi(t.error, r, 0, false);
    case "transport_closed":
      return t.isStdio ? x_("Client closed", r) : ji(0, r);
    case "session_invalidated":
      return Ki(e, 0, [{ type: "cancel_backoff_timer" }, { type: "initiate_connection" }]);
    case "server_removed":
      return { state: { type: "idle" }, commands: [] };
    case "connect_start":
    case "connect_success":
    case "connect_failure":
    case "idle_suspend":
    case "backoff_timer_expired":
    case "connection_stabilized":
    case "periodic_retry_expired":
      return Ne;
    default:
      return t;
  }
}
function Zw(e, t) {
  switch (t.kind) {
    case "backoff_timer_expired":
      return { state: { type: "connecting", attempt: e.attempt, generation: kl(e), periodicCycle: e.periodicCycle }, commands: [{ type: "initiate_connection" }] };
    case "connect_start":
      return Ki(e, 0, [{ type: "cancel_backoff_timer" }]);
    case "server_removed":
      return Il();
    case "connect_success":
    case "connect_failure":
    case "transport_error":
    case "transport_closed":
    case "session_invalidated":
    case "idle_suspend":
    case "connection_stabilized":
    case "periodic_retry_expired":
    case "request_degraded":
    case "health_probe_due":
    case "health_probe_succeeded":
    case "health_probe_failed":
      return Ne;
    default:
      return t;
  }
}
function Qw(e, t, r) {
  switch (t.kind) {
    case "connect_start":
      return sn(e, 0);
    case "periodic_retry_expired": {
      const n = L_(r);
      return n !== void 0 && e.periodicCycle >= n ? e.exhausted ? Ne : { state: { ...e, exhausted: true }, commands: [] } : sn(e, 0, e.periodicCycle + 1);
    }
    case "server_removed":
      return { state: { type: "idle" }, commands: [] };
    case "connect_success":
    case "connect_failure":
    case "transport_error":
    case "transport_closed":
    case "session_invalidated":
    case "idle_suspend":
    case "backoff_timer_expired":
    case "connection_stabilized":
    case "request_degraded":
    case "health_probe_due":
    case "health_probe_succeeded":
    case "health_probe_failed":
      return Ne;
    default:
      return t;
  }
}
function eE(e, t, r) {
  switch (t.kind) {
    case "connect_start":
      return sn(e, 0);
    case "periodic_retry_expired": {
      const n = L_(r);
      return n !== void 0 && e.periodicCycle >= n ? e.exhausted ? Ne : { state: { ...e, exhausted: true }, commands: [] } : sn(e, 0, e.periodicCycle + 1);
    }
    case "server_removed":
      return { state: { type: "idle" }, commands: [] };
    case "connect_success":
    case "connect_failure":
    case "transport_error":
    case "transport_closed":
    case "session_invalidated":
    case "idle_suspend":
    case "backoff_timer_expired":
    case "connection_stabilized":
    case "request_degraded":
    case "health_probe_due":
    case "health_probe_succeeded":
    case "health_probe_failed":
      return Ne;
    default:
      return t;
  }
}
function tE(e, t) {
  switch (t.kind) {
    case "connect_start":
    case "session_invalidated":
      return sn(e, 0);
    case "server_removed":
      return Il();
    case "idle_suspend":
    case "connect_success":
    case "connect_failure":
    case "transport_error":
    case "transport_closed":
    case "backoff_timer_expired":
    case "connection_stabilized":
    case "periodic_retry_expired":
    case "request_degraded":
    case "health_probe_due":
    case "health_probe_succeeded":
    case "health_probe_failed":
      return Ne;
    default:
      return t;
  }
}
function M_(e, t, r) {
  switch (e.type) {
    case "idle":
      return Vw(e, t, r);
    case "connecting":
      return Yw(e, t, r);
    case "connected":
      return Xw(e, t, r);
    case "dormant":
      return tE(e, t);
    case "degraded":
      return Jw(e, t, r);
    case "transient_failure":
      return Zw(e, t);
    case "failed":
      return Qw(e, t, r);
    case "closed":
      return eE(e, t, r);
    default:
      return e;
  }
}
var Ne, D_ = k({ "connection-fsm.ts"() {
  "use strict";
  h(), nn(), Al(), Ne = { state: null, commands: [] };
} });
function rE(e, t) {
  return t.type === "needsUserAuth" ? { type: "needsAuth", authorizationUrl: t.authorizationUrl } : t.type === "expired" ? { type: "error", error: t.error } : e.type === "failed" ? e.automaticRetry === false ? { type: "error", error: e.error, isRetryable: false } : { type: "error", error: e.error } : e.type === "closed" && e.error ? e.automaticRetry === false ? { type: "error", error: e.error, isRetryable: false } : { type: "error", error: e.error } : e.type === "connecting" ? { type: "initializing" } : e.type === "degraded" ? { type: "degraded", reason: e.reason } : (e.type === "connected" || e.type === "dormant") && (t.type === "valid" || t.type === "unknown") ? { type: "connected" } : e.type === "transient_failure" ? { type: "connected" } : { type: "disconnected" };
}
var N_ = k({ "projection.ts"() {
  "use strict";
  h();
} });
function nE(e, t, r, n) {
  let s = e, i = t, o = [];
  switch (r.target) {
    case "connection": {
      const c = t.type === "needsUserAuth" || t.type === "expired";
      if (!((r.kind === "backoff_timer_expired" || r.kind === "periodic_retry_expired") && c)) {
        const { target: l, ...u } = r, f = M_(e, u, n.backoff);
        if (f.state !== null && (s = f.state), o = f.commands, r.kind === "connect_success" && t.type === "expired") {
          const p = O_(t, { kind: "operation_succeeded" });
          p !== null && (i = p);
        }
      }
      break;
    }
    case "auth": {
      const c = t, { target: l, ...u } = r, f = O_(t, u);
      f !== null && (i = f);
      const p = c.type === "needsUserAuth" || c.type === "expired", g = i.type !== "needsUserAuth" && i.type !== "expired", _ = s.type === "transient_failure" || s.type === "failed" || s.type === "closed";
      if (p && g && _) {
        const y = M_(s, { kind: "connect_start" }, n.backoff);
        y.state !== null && (s = y.state), o.push(...y.commands), o.push({ type: "initiate_connection" });
      }
      break;
    }
    default:
      return r;
  }
  const a = rE(s, i);
  return { connectionState: s, authState: i, commands: o, projectedStatus: a };
}
var sE = k({ "coordinator.ts"() {
  "use strict";
  h(), C_(), D_(), N_();
} });
function iE(e) {
  return e instanceof Error && e.name === "McpOAuthLoopbackUnavailableError";
}
function U_(e) {
  return e instanceof Error && e.name === Ol;
}
function oE(e) {
  if (e === null || typeof e != "object") return false;
  const t = e.name, r = e.errorCode;
  if (!(t === "InvalidRequestError" || typeof r == "string" && r.toLowerCase() === "invalid_request")) return false;
  const s = e.message;
  return typeof s == "string" && H_.some((i) => i.test(s));
}
function aE(e) {
  if (e === null || typeof e != "object") return false;
  const t = e.name;
  if (typeof t == "string" && Cl.has(t)) return true;
  const r = e.errorCode;
  return typeof r == "string" && Vi.has(r.toLowerCase()) ? true : oE(e);
}
var on, $_, Ol, Cl, Vi, F_, H_, gs = k({ "oauth-errors.ts"() {
  "use strict";
  h(), on = class extends Error {
    constructor(e) {
      super(`OAuth refresh race detected for ${e}: sibling already rotated tokens; reconnecting to use fresh credentials`), this.name = "SiblingAlreadyRefreshedError";
    }
  }, $_ = class extends Error {
    constructor(e) {
      super(`OAuth loopback redirect ${e} could not be bound; it is the only redirect registered for this desktop client`), this.name = "McpOAuthLoopbackUnavailableError";
    }
  }, Ol = "OAuthRefreshTransientError", Cl = /* @__PURE__ */ new Set(["UnauthorizedError", "InvalidGrantError", "InvalidTokenError", "InvalidClientError", "UnauthorizedClientError"]), Vi = /* @__PURE__ */ new Set(["invalid_grant", "invalid_token", "invalid_client", "unauthorized_client"]), F_ = /\btoken (?:has |is )?expired\b/i, H_ = [F_, /\btoken (?:was|is) invalid\b/i, /\binvalid (?:refresh[ _]?)?token\b/i, /\btoken (?:has been |was )?revoked\b/i];
} });
function cE(e) {
  return /Failed to open SSE stream:?\s*$/i.test(e.trim());
}
function B_(e) {
  const t = e.code, n = (e instanceof Error || typeof e.message == "string" ? e.message : "").match(/\(HTTP (\d+)\)|Non-200 status code \((\d+)\)|\bHTTP\s+(\d{3})\b/i), s = n?.[1] ?? n?.[2] ?? n?.[3], i = s !== void 0 ? parseInt(s, 10) : void 0;
  if (typeof t == "number" && t >= 100) return i !== void 0 && an.has(i) && !an.has(t) ? i : t;
  if (typeof t == "string" && /^\d{3}$/.test(t)) {
    const o = Number.parseInt(t, 10);
    return o >= 100 && o <= 599 ? o : i;
  }
  return i;
}
function Ot(e) {
  if (!e || typeof e != "object") return;
  const t = B_(e);
  if (t !== void 0) return t;
  const r = e.cause;
  if (r && typeof r == "object") return B_(r);
}
function z_(e) {
  const t = e.message ?? "", r = Ot(e);
  if (cE(t)) return r !== void 0 && an.has(r);
  if (q_.test(t)) return false;
  const s = e.code ?? e.cause?.code;
  return typeof s == "string" && Yi.has(s) || r !== void 0 && an.has(r) ? true : Xi.some((i) => i.test(t));
}
function lE(e) {
  return X_.some((t) => t.test(e));
}
function uE(e) {
  for (const t of Yi) if (e.includes(t)) return true;
  return Xi.some((t) => t.test(e));
}
function W_(e) {
  return /MCP error -32000:\s*Connection closed/i.test(e.message ?? "");
}
function G_(e, t) {
  return [e, ...t].map((n) => n.toLowerCase()).some((n) => n.includes("mcp-remote"));
}
function dE(e, t, r, n, s) {
  if (e instanceof Error) {
    const a = e.code ?? e.cause?.code;
    if (typeof a == "string" && Y_.has(a)) return false;
    if (G_(n, s) && Wi(e.message ?? "") || !W_(e) && z_(e)) return true;
  }
  const i = t;
  if (i.trim().length > 0) {
    if (lE(i)) return false;
    if (uE(i)) return true;
  }
  return e instanceof Error && W_(e) && i.trim().length === 0 && !G_(n, s) ? false : !r;
}
function hE(e) {
  const r = e.code ?? e.cause?.code;
  if (typeof r == "string" && j_.has(r)) return true;
  const n = e.message ?? "";
  return V_.some((s) => s.test(n));
}
var Yi, K_, q_, Xi, j_, V_, an, Ll, Y_, X_, cn = k({ "reconnect-manager.ts"() {
  "use strict";
  h(), Be(), Gi(), Yi = /* @__PURE__ */ new Set(["EAI_AGAIN", "ECONNABORTED", "ECONNREFUSED", "ECONNRESET", "EHOSTUNREACH", "ENETDOWN", "ENETUNREACH", "ENOTFOUND", "EPIPE", "ETIMEDOUT", "EADDRNOTAVAIL", "UND_ERR_CONNECT_TIMEOUT"]), K_ = /net::ERR_(?:NETWORK_CHANGED|NETWORK_IO_SUSPENDED|INTERNET_DISCONNECTED|CONNECTION_(?:RESET|CLOSED|ABORTED|FAILED|REFUSED|TIMED_OUT)|TIMED_OUT|ABORTED|NAME_NOT_RESOLVED|NAME_RESOLUTION_FAILED|DNS_TIMED_OUT|SOCKET_NOT_CONNECTED|ADDRESS_UNREACHABLE|TUNNEL_CONNECTION_FAILED|EMPTY_RESPONSE|HTTP2_(?:PROTOCOL_ERROR|PING_FAILED)|QUIC_PROTOCOL_ERROR)\b/, q_ = /net::ERR_(?:CERT_[A-Z_]+|SSL_[A-Z_]+|BAD_SSL_[A-Z_]+|BLOCKED_BY_[A-Z_]+|DISALLOWED_URL_SCHEME|UNKNOWN_URL_SCHEME|INVALID_[A-Z_]+|ACCESS_DENIED|NETWORK_ACCESS_DENIED|PROXY_AUTH_[A-Z_]+|INSUFFICIENT_RESOURCES|OUT_OF_MEMORY)\b/, Xi = [/fetch failed/i, /network error/i, /socket hang up/i, /client network socket disconnected/i, /connection (?:timed out|timeout|closed|terminated)/i, /request timed out/i, K_], j_ = /* @__PURE__ */ new Set(["ECONNRESET", "EPIPE"]), V_ = [/socket hang up/i, /client network socket disconnected/i, /connection (?:closed|terminated)/i, /ERR_STREAM_PREMATURE_CLOSE/i, /premature close/i, /net::ERR_(?:NETWORK_CHANGED|NETWORK_IO_SUSPENDED|CONNECTION_(?:RESET|CLOSED|ABORTED)|HTTP2_(?:PROTOCOL_ERROR|PING_FAILED)|QUIC_PROTOCOL_ERROR|EMPTY_RESPONSE)\b/], an = /* @__PURE__ */ new Set([429, 502, 503, 504]), Ll = 8192, Y_ = /* @__PURE__ */ new Set(["ENOENT", "EACCES", "ENOTDIR", "EPERM"]), X_ = [/cannot find module/i, /module not found/i, /syntaxerror/i, /command not found/i, /is not recognized as an internal or external command/i, /no such file or directory/i, /err_module_not_found/i];
} });
import { UnauthorizedError as fE } from "@modelcontextprotocol/sdk/client/auth.js";
import { InvalidClientError as pE, InvalidGrantError as gE, InvalidTokenError as _E, OAuthError as mE, UnauthorizedClientError as vE } from "@modelcontextprotocol/sdk/server/auth/errors.js";
function J_(e) {
  if (typeof e == "object" && e !== null && "code" in e) return e.code;
}
function yE(e) {
  return typeof e == "string" && Vi.has(e.toLowerCase());
}
function Z_(e) {
  return e.message.includes("Received a response for an unknown message ID");
}
function Zt(e) {
  if (e instanceof fE || e instanceof gE || e instanceof pE || e instanceof vE || e instanceof _E || e instanceof mE && yE(e.errorCode) || aE(e)) return true;
  if (e instanceof Error) {
    const t = e.message.toLowerCase();
    if (t.includes("unauthorized") || /\b401\b/.test(t) || J_(e) === 401) return true;
  }
  return false;
}
function Q_(e) {
  return e.message.includes("SSE stream disconnected") ? true : !e.message.startsWith("SSE error:") || Ot(e) !== void 0 ? false : !e.message.includes("Maximum reconnection attempts");
}
function ln(e, t) {
  return t !== "streamableHttp" || !(e instanceof Error) ? false : Ot(e) === 404 || J_(e) === 404 || e.message.includes("Maximum reconnection attempts") || e.message.includes("MCP error -32000: Connection closed") ? true : SE(e.message);
}
function SE(e) {
  const t = e.match(/MCP error -3200[01]:\s*(.+)/i);
  if (t) {
    const n = t[1];
    if (/session/i.test(n)) return true;
  }
  const r = e.match(/\{[\s\S]*"jsonrpc"[\s\S]*\}/);
  if (r) try {
    const n = JSON.parse(r[0]), s = n?.error?.code;
    if ((s === -32e3 || s === -32001) && typeof n?.error?.message == "string" && /session/i.test(n.error.message)) return true;
  } catch {
  }
  return false;
}
function bE(e) {
  if (e instanceof on) return { reason: "sibling_refreshed", retryable: true };
  if (U_(e)) return { reason: "network", retryable: true };
  if (iE(e)) return { reason: "oauth_loopback_unavailable", retryable: false };
}
function qe(e, t) {
  const r = bE(e);
  if (r !== void 0) return r;
  const n = e instanceof Error ? e.message : String(e), s = e instanceof Error ? z_(e) : false, i = Wi(n), o = s || i;
  if (Zt(e)) return { reason: "auth", retryable: false };
  if (t !== void 0 && ln(e, t)) return { reason: "session_invalidated", retryable: true, httpStatus: 404 };
  const a = e instanceof Error ? Ot(e) : void 0;
  if (a !== void 0) {
    if (a >= 500) return { reason: "http_5xx", retryable: o, httpStatus: a };
    if (a >= 400) return { reason: "http_4xx", retryable: o, httpStatus: a };
  }
  return i ? { reason: "timeout", retryable: true, httpStatus: a } : s ? { reason: "network", retryable: true, httpStatus: a } : { reason: "unknown", retryable: o, httpStatus: a };
}
function wE(e, t, r) {
  if (Q_(e) || Z_(e)) return "suppress";
  const n = r ?? qe(e, t);
  return n.reason === "session_invalidated" ? "warn" : n.retryable ? "debug" : "warn";
}
function EE(e, t) {
  if (t) return true;
  switch (e.kind) {
    case "connect_failure":
    case "transport_error":
      return !e.isRetryable;
    case "transport_closed":
      return e.isStdio;
    case "session_invalidated":
      return false;
    default:
      return e;
  }
}
var em = k({ "error-classification.ts"() {
  "use strict";
  h(), gs(), Gi(), cn();
} });
function AE(e, t) {
  const { authState: r, transportType: n } = t;
  if (Q_(e)) return [];
  if (Z_(e)) return [];
  if (r.type === "needsUserAuth") return [];
  const s = qe(e, n);
  if (s.reason === "auth") return [{ target: "auth", kind: "operation_auth_failed", error: e.message }];
  if (s.reason === "session_invalidated") return [{ target: "connection", kind: "session_invalidated" }];
  if (n !== "stdio") {
    const i = s.httpStatus;
    if (i === 429 || i === 503) return [{ target: "connection", kind: "request_degraded", reason: `HTTP ${i}` }];
  }
  return n !== "stdio" && s.retryable ? [{ target: "connection", kind: "transport_error", error: e.message, isRetryable: true }] : [{ target: "connection", kind: "transport_error", error: e.message, isRetryable: false }];
}
function RE(e) {
  const { authState: t, transportType: r } = e;
  return t.type === "needsUserAuth" ? [] : [{ target: "connection", kind: "transport_closed", isStdio: r === "stdio" }];
}
function tm(e) {
  const { result: t, error: r, authState: n } = e;
  return r !== void 0 ? Zt(r) && n.type !== "needsUserAuth" ? [{ target: "auth", kind: "operation_auth_failed", error: r instanceof Error ? r.message : String(r) }] : [] : t === void 0 ? [] : t.isError ? [{ target: "auth", kind: "operation_succeeded" }] : [{ target: "auth", kind: "operation_succeeded" }];
}
function rm(e) {
  const { authError: t, authState: r } = e;
  return t !== void 0 ? r.type !== "needsUserAuth" ? [{ target: "auth", kind: "operation_auth_failed", error: t }] : [] : [{ target: "auth", kind: "operation_succeeded" }];
}
var TE = k({ "event-classification.ts"() {
  "use strict";
  h(), em();
} }), nm, sm, kE = k({ "event-log.ts"() {
  "use strict";
  h(), nm = 200, sm = class {
    constructor(e = nm) {
      this.head = 0, this.count = 0, this.capacity = e, this.buffer = new Array(e);
    }
    push(e) {
      this.buffer[this.head] = e, this.head = (this.head + 1) % this.capacity, this.count < this.capacity && this.count++;
    }
    getEntries() {
      return this.count === 0 ? [] : this.count < this.capacity ? this.buffer.slice(0, this.count) : [...this.buffer.slice(this.head), ...this.buffer.slice(0, this.head)];
    }
    clear() {
      this.head = 0, this.count = 0, this.buffer = new Array(this.capacity);
    }
    get size() {
      return this.count;
    }
  };
} }), IE = k({ "types.ts"() {
  "use strict";
  h(), nn();
} });
function PE(e) {
  return !e.ok && e.needsAuth !== true && e.sessionReuseRequired === true;
}
var OE = k({ "v2-types.ts"() {
  "use strict";
  h();
} }), un = k({ "index.ts"() {
  "use strict";
  h(), k_(), zw(), C_(), Ww(), D_(), sE(), em(), TE(), kE(), N_(), IE(), OE();
} });
function CE(e) {
  Ji = e;
}
function LE() {
  return Ji;
}
function im() {
  if (!Ji) throw new Error("McpLifecycleOAuthClientProviderFactory has not been registered. The host (cursor-mcp or mcpProcess) must call setMcpLifecycleOAuthClientProviderFactory() at activation.");
  return Ji;
}
var Ji, xl = k({ "oauth-client-provider.ts"() {
  "use strict";
  h();
} });
function xE() {
  return Ml;
}
function Qt(e, t, r = "distribution", n = []) {
  if (!cm) return;
  const s = [`lease_connection:${Ml}`, ...n];
  try {
    cm.emit(e, t, r, s);
  } catch {
  }
}
function Zi() {
  return lm;
}
function om(e) {
  return um ? um(e) : { mcpAuthMeta: e };
}
function am(e) {
  const t = [`failure_reason:${e.reason}`, `retryable:${String(e.retryable)}`];
  return e.httpStatus !== void 0 && t.push(`status_code:${String(e.httpStatus)}`), t;
}
function Qi({ identifier: e, phase: t, error: r, serverType: n, classification: s, captureException: i = true, extraData: o }) {
  const a = s ?? qe(r, n), c = r instanceof Error ? r.message : String(r), l = { identifier: e, phase: t, reason: a.reason, retryable: a.retryable, http_status: a.httpStatus, server_type: n, ...o };
  if (Dl && (Dl.addBreadcrumb({ category: "mcp.v2.failure", level: "error", message: c, data: l }), i)) {
    const u = new Error(c);
    u.name = "McpV2Error", u.stack = r instanceof Error ? r.stack : void 0, u.mcpFailure = l, Dl.captureException(u);
  }
  return a;
}
var cm, Ml, Dl, lm, um, dn = k({ "observability.ts"() {
  "use strict";
  h(), un(), Ml = "local", lm = "v1";
} });
function ME(e, t) {
  return e instanceof dm || t?.aborted === true;
}
var dm, hm = k({ "abort-signal.ts"() {
  "use strict";
  h(), dm = class extends Error {
    constructor() {
      super("MCP operation aborted"), this.isMcpAbortError = true, this.name = "McpAbortError";
    }
  };
} });
function Nl(e, t) {
  if (t === void 0) return { headers: t, cursorAuthHeaderValue: void 0, cursorAuthOrigin: void 0 };
  const r = Object.entries(t), n = r.find(([i]) => i.toLowerCase() === fi);
  if (n === void 0) return { headers: t, cursorAuthHeaderValue: void 0, cursorAuthOrigin: void 0 };
  let s;
  try {
    s = new URL(e).origin;
  } catch {
    s = void 0;
  }
  return { headers: Object.fromEntries(r.filter(([i]) => i.toLowerCase() !== fi)), cursorAuthHeaderValue: n[1], cursorAuthOrigin: s };
}
function DE(e, t, r) {
  return async (n, s) => {
    let i;
    try {
      i = new URL(typeof n == "string" ? n : n.toString()).origin;
    } catch {
      return r(n, s);
    }
    if (i !== t) return r(n, s);
    const o = await e();
    if (o === void 0 || o.length === 0) return r(n, s);
    const a = new Headers(s?.headers);
    return a.set(fi, o), r(n, { ...s, headers: a, redirect: "manual" });
  };
}
var fm = k({ "rest-mcp-cursor-auth.ts"() {
  "use strict";
  h(), Be();
} });
function Ul(e) {
  if (!(e instanceof Error)) return false;
  const t = e, r = e.cause?.code;
  return t.code === "ECONNREFUSED" || r === "ECONNREFUSED" ? true : e.message.includes("ECONNREFUSED");
}
function NE(e) {
  if (!e || typeof e != "object") return;
  const t = e.code;
  if (typeof t == "number" && t >= 100 && t <= 599) return t;
  if (typeof t == "string" && /^\d{3}$/.test(t) && Number(t) >= 100 && Number(t) <= 599) return Number(t);
  const r = e instanceof Error || typeof e.message == "string" ? e.message : void 0;
  if (!r) return;
  const n = r.match(/\bHTTP\s+(\d{3})\b/i);
  if (!n?.[1]) return;
  const s = Number.parseInt(n[1], 10);
  return Number.isNaN(s) ? void 0 : s;
}
function UE(e) {
  const t = NE(e);
  return t !== void 0 ? t === 400 || t === 404 || t === 405 : e instanceof Error && e.message.toLowerCase().includes("sessionid must be provided") ? true : Ul(e);
}
var pm = k({ "sse-fallback.ts"() {
  "use strict";
  h();
} });
function $l(e) {
  const t = hn.get(e);
  if (t === void 0) return;
  const r = t - Date.now();
  if (r <= 0) {
    hn.delete(e);
    return;
  }
  return r;
}
function $E(e) {
  if (!e) return;
  const t = Number(e);
  if (Number.isFinite(t) && t > 0) return Math.ceil(t * 1e3);
  const r = Date.parse(e);
  if (Number.isFinite(r)) return Math.max(0, r - Date.now());
}
function FE(e) {
  hn.delete(e);
}
function gm(e, t) {
  return async (r, n) => {
    if (e !== void 0) {
      const i = hn.get(e);
      if (i !== void 0 && Date.now() < i) {
        const o = Math.max(1, Math.ceil((i - Date.now()) / 1e3));
        return new Response(JSON.stringify({ jsonrpc: "2.0", error: { code: -32004, message: "Too many requests. Please try again later." } }), { status: 429, headers: { "content-type": "application/json", "retry-after": String(o) } });
      }
    }
    const s = await t(r, n);
    if (e !== void 0 && s.status === 429) {
      const i = $E(s.headers.get("retry-after"));
      i !== void 0 && i > 0 && hn.set(e, Date.now() + Math.min(i, _m));
    }
    return s;
  };
}
var _m, hn, eo = k({ "retry-after-cooldown.ts"() {
  "use strict";
  h(), _m = 5 * 6e4, hn = /* @__PURE__ */ new Map();
} });
function HE(e) {
  const t = Ur(e);
  return { debug: (r, n) => t.debug(r, n), info: (r, n) => t.info(r, n), warn: (r, n) => t.warn(r, n), error: (r, n, s) => t.error(r, n instanceof Error ? n : void 0, s) };
}
function Fl(e) {
  return { logger: HE(e.identifier), metadata: { identifier: e.identifier, source: "mcp-oauth", oauthFlow: true, commandsVersion: e.commandsVersion ?? "v2", transportType: e.transportType ?? "oauth", ...e.serverUrl ? { serverUrl: _f(e.serverUrl, { includePath: false }) } : {}, ...e.clientSurface !== void 0 ? { clientSurface: e.clientSurface } : {}, ...e.processRegistryKey !== void 0 ? { processRegistryKey: e.processRegistryKey } : {}, ...e.resolvedConfigHash !== void 0 ? { resolvedConfigHash: e.resolvedConfigHash } : {}, ...e.extraMetadata } };
}
function Hl(e) {
  const t = Fl(e);
  return _5({ fetch: gm(e.identifier, e.baseFetch), logger: t.logger, metadata: t.metadata, logSuccessfulExchanges: false });
}
function to(e) {
  return Fl({ identifier: e.identifier, serverUrl: e.serverUrl, transportType: e.transportType, commandsVersion: e.commandsVersion, clientSurface: e.host ? e.host.isGlass() ? "glass" : "ide" : void 0, extraMetadata: { source: "cursor-mcp", configuredServerType: e.serverInfo?.type, ...e.extraMetadata } });
}
function _s(e, t, r, n) {
  const s = n ?? e?.fetch ?? (globalThis.fetch ? globalThis.fetch.bind(globalThis) : void 0);
  if (s === void 0) return;
  const i = typeof r.metadata.identifier == "string" ? r.metadata.identifier : void 0;
  if (i === void 0) return;
  const { identifier: o, transportType: a, commandsVersion: c, clientSurface: l, ...u } = r.metadata;
  return Hl({ identifier: i, baseFetch: s, transportType: t, commandsVersion: c, clientSurface: l, extraMetadata: u });
}
function mm(e) {
  const t = e.baseFetch ?? (globalThis.fetch ? globalThis.fetch.bind(globalThis) : void 0);
  if (t !== void 0) return _s(e.host, e.transportType, to({ identifier: e.identifier, host: e.host, serverInfo: e.serverInfo, serverUrl: e.serverUrl, transportType: e.transportType, commandsVersion: e.commandsVersion, extraMetadata: e.extraMetadata }), t);
}
var vm, Bl = k({ "http-exchange-logging.ts"() {
  "use strict";
  h(), Ff(), Wt(), $r(), eo(), vm = mm;
} });
function BE(e) {
  if (Cl.has(e.name)) return true;
  const t = e.errorCode;
  return typeof t == "string" && Vi.has(t.toLowerCase());
}
function zE(e) {
  const t = e.cause, r = e.code ?? (t && typeof t == "object" && "code" in t ? t.code : void 0);
  return typeof r == "string" ? r : void 0;
}
function WE(e) {
  return bm.test(e) ? false : wm.some((t) => t.test(e));
}
async function GE(e) {
  if (!e) return ro;
  try {
    const t = await e(ym);
    return !t || typeof t != "object" ? ro : { classifyBeforeWipe: typeof t.classifyBeforeWipe == "boolean" ? t.classifyBeforeWipe : false };
  } catch {
    return ro;
  }
}
function zl(e) {
  if (!(e instanceof Error) || Hf(e, { allowInvalidGrantGeneric: true })) return false;
  if (Sm.has(e.name)) return true;
  const t = e.message ?? "";
  if (Wi(t)) return true;
  const r = Ot(e);
  if (r !== void 0 && an.has(r) || (r === 403 || r === 407) && !BE(e)) return true;
  const n = zE(e);
  return !!(n !== void 0 && Yi.has(n) || WE(t));
}
function KE(e) {
  return zl(e);
}
function qE(e, t) {
  const r = new Error(e instanceof Error ? e.message : t);
  return r.name = Ol, e !== void 0 && (r.cause = e), e instanceof Error && e.stack && (r.stack = e.stack), r;
}
var ym, ro, Sm, bm, wm, Wl = k({ "mcp-oauth-refresh-policy.ts"() {
  "use strict";
  h(), Qa(), Gi(), cn(), gs(), ym = "mcp_oauth_refresh_policy", ro = { classifyBeforeWipe: false }, Sm = /* @__PURE__ */ new Set(["AbortError", "TimeoutError", "TemporarilyUnavailableError"]), bm = /net::ERR_(?:CERT_[A-Z_]+|SSL_[A-Z_]+|BAD_SSL_[A-Z_]+|BLOCKED_BY_[A-Z_]+|DISALLOWED_URL_SCHEME|UNKNOWN_URL_SCHEME|INVALID_[A-Z_]+|ACCESS_DENIED|NETWORK_ACCESS_DENIED|PROXY_AUTH_[A-Z_]+|INSUFFICIENT_RESOURCES|OUT_OF_MEMORY)\b/, wm = Xi.filter((e) => e.source !== "fetch failed");
} });
import { CallToolResultSchema as Em } from "@modelcontextprotocol/sdk/types.js";
function de(e) {
  return Ur(e);
}
function jE(e) {
  return e.replace(/[\s.]/g, "_").replace(/[^a-zA-Z0-9_-]/g, "");
}
function ms(e, t, r) {
  const n = `Invalid ${t} response`;
  return de(e).error(`${n}: ${JSON.stringify(r)}`), { kind: "invalid_response", items: [], message: n };
}
function VE(e) {
  if (!(e instanceof Error)) return false;
  const t = e.message.toLowerCase();
  return t.includes("method not found") || t.includes("unsupported") || t.includes("not supported") || t.includes("-32601");
}
function ct(e, t, r = "distribution", n = []) {
  Qt(e, t, r, ["commands_version:v2", `mcp_version:${Zi()}`, ...n]);
}
var Gl, Kl, Am = k({ "client-adapter.ts"() {
  "use strict";
  h(), df(), Ha(), hf(), E_(), un(), $r(), dn(), hm(), cn(), eo(), Gl = class {
    constructor(e) {
      this.page = e;
    }
  }, Kl = class {
    constructor(e, t, r, n, s) {
      this.serverName = t, this.identifier = r, this.deps = n, this.lastInlineReconnectAtMs = 0, this.client = e, this.config = s, this.toolsCache = new gi(1e3 * 60 * 60 * 24), this.instructionsCache = new gi(1e3 * 60 * 60 * 24), this.resourcesCache = new gi(1e3 * 60 * 60 * 24);
    }
    classifyAndReport(e, t, r = true) {
      const n = this.deps.getServerInfo(this.identifier)?.type, s = qe(e, n);
      return Qi({ identifier: this.identifier, phase: t, error: e, serverType: n, classification: s, captureException: r && !s.retryable && s.reason !== "auth" }), s;
    }
    maybeLogToolCallTimeout(e) {
      if (!Lw(e.error)) return;
      const t = xw(e.durationMs, e.idleTimeoutMs, e.maxTotalTimeoutMs), r = e.error instanceof Error ? e.error.message : String(e.error);
      de(this.identifier).warn(`MCP tool call timed out (${t}): ${e.toolName}`, { event: "mcp_tool_call_timeout", toolName: e.toolName, toolCallId: e.toolCallId, durationMs: e.durationMs, idleTimeoutMs: e.idleTimeoutMs, maxTotalTimeoutMs: e.maxTotalTimeoutMs, timeoutKind: t, entryPoint: e.entryPoint, errorMessage: r }), ct("mcp.ext.tool_call_timeout", 1, "increment", [`timeout_kind:${t}`, `entry_point:${e.entryPoint}`]);
    }
    async listAllPages(e, t, r) {
      try {
        return { ok: true, items: await US({ fetchPage: (s) => e(s === void 0 ? void 0 : { cursor: s }, { signal: r }), itemsOf: (s) => {
          const i = t(s);
          if (!i || !Array.isArray(i)) throw new Gl(s);
          return i;
        }, nextCursorOf: (s) => s?.nextCursor }) };
      } catch (n) {
        if (n instanceof Gl) return { ok: false, invalidPage: n.page };
        throw n;
      }
    }
    async listAllTools(e) {
      const t = await this.listAllPages((r, n) => this.client.listTools(r, n), (r) => r?.tools, e);
      return t.ok ? { kind: "success", tools: t.items } : ms(this.identifier, "tools", t.invalidPage);
    }
    async listToolsWithCapabilityProbe(e) {
      if (e?.throwIfAborted(), this.client.getServerCapabilities()?.tools) return await this.listAllTools(e);
      try {
        return await this.listAllTools(e);
      } catch (r) {
        if (VE(r)) return { kind: "unsupported" };
        throw r;
      }
    }
    emitDegradedIfApplicable(e) {
      const t = this.deps.getServerInfo(this.identifier);
      if (t?.type === "stdio") return;
      const r = e.httpStatus;
      (r === 429 || r === 503) && this.deps.dispatchEvents(this.identifier, [{ target: "connection", kind: "request_degraded", reason: `HTTP ${r}` }], t);
    }
    async getTools(e, t) {
      return await this.toolsCache.get(async () => await this.withSessionTerminationRetry(async () => {
        const r = await this.listToolsWithCapabilityProbe(t);
        return r.kind !== "success" ? [] : r.tools.map((n) => ({ name: n.name, description: n.description || void 0, inputSchema: n.inputSchema, outputSchema: n.outputSchema, title: n.title, annotations: Fa(n.annotations, n._meta), _meta: n._meta }));
      }, 0, t));
    }
    invalidateToolsCache() {
      this.toolsCache.invalidate();
    }
    invalidateToolsCacheKeepingStale() {
      this.toolsCache.invalidateKeepingStale();
    }
    invalidateResourcesCache() {
      this.resourcesCache.invalidate();
    }
    invalidateResourcesCacheKeepingStale() {
      this.resourcesCache.invalidateKeepingStale();
    }
    invalidateInstructionsCache() {
      this.instructionsCache.invalidate();
    }
    invalidateInstructionsCacheKeepingStale() {
      this.instructionsCache.invalidateKeepingStale();
    }
    async callTool(e, t, r, n, s) {
      const i = this.deps.toolNameMap.get(t) || t;
      s && this.deps.currentElicitationProvider.set(this.identifier, s);
      const o = Date.now(), a = { identifier: this.identifier, serverInfo: this.deps.getServerInfo(this.identifier) }, c = g_((l) => {
        de(this.identifier).debug(`ProgressNotification received for ${n}`, { progress: l }), this.deps.executeCommand("mcp.progressNotification", { serverIdentifier: this.identifier, progressToken: n, notification: l, toolCallId: n });
      }, void 0, a);
      try {
        const l = await this.withToolCallRetry(async () => {
          const u = __(c, o);
          if (u === null) throw m_();
          const d = await this.client.callTool({ name: i, arguments: r, _meta: { progressToken: n } }, Em, u);
          return { structuredContent: d.structuredContent, content: d.content, isError: d.isError === true };
        });
        return ct("mcp.ext.tool_call_duration_ms", Date.now() - o), ct("mcp.ext.tool_call_success", 1, "increment"), l;
      } catch (l) {
        const u = Date.now() - o;
        ct("mcp.ext.tool_call_duration_ms", u), this.maybeLogToolCallTimeout({ error: l, toolName: i, toolCallId: n, durationMs: u, idleTimeoutMs: c.timeout, maxTotalTimeoutMs: c.maxTotalTimeout, entryPoint: "callTool" });
        const d = this.classifyAndReport(l, "tool_call");
        throw ct("mcp.ext.tool_call_error", 1, "increment", am(d)), l;
      } finally {
        s && this.deps.currentElicitationProvider.delete(this.identifier);
      }
    }
    async getInstructions(e, t) {
      return await this.instructionsCache.get(async () => await this.withSessionTerminationRetry(async () => await this.client.getInstructions(), 0, t));
    }
    async getState(e) {
      const t = this.deps.getStatus(this.identifier);
      if (!t) return { kind: "loading" };
      switch (t.type) {
        case "initializing":
        case "disconnected":
          return { kind: "loading" };
        case "needsAuth":
          return { kind: "requires_authentication", url: t.authorizationUrl, callback: async (r) => {
            de(this.identifier).debug("OAuth callback received via getState");
          } };
        case "connected":
        case "degraded":
          return { kind: "ready" };
        case "error":
          return { kind: "ready" };
        default:
          return { kind: "loading" };
      }
    }
    async listResources(e, t) {
      return await this.resourcesCache.get(async () => await this.withSessionTerminationRetry(async () => {
        if (!(this.client.getServerCapabilities() ?? { resources: false }).resources) return [];
        const n = await this.listAllPages((s, i) => this.client.listResources(s, i), (s) => s?.resources, t);
        return n.ok ? n.items.map((s) => ({ uri: s.uri, name: s.name, description: s.description, mimeType: s.mimeType, annotations: s.annotations })) : (ms(this.identifier, "resources", n.invalidPage), []);
      }, 0, t)).then((r) => ({ resources: r }));
    }
    async readResource(e, t, r) {
      return await this.withSessionTerminationRetry(async () => ({ contents: (await this.client.readResource({ uri: t.uri }, { signal: r })).contents || [] }), 0, r);
    }
    async listPrompts(e, t) {
      return (this.client.getServerCapabilities() ?? { prompts: false }).prompts ? await this.withSessionTerminationRetry(async () => {
        const n = await this.listAllPages((s, i) => this.client.listPrompts(s, i), (s) => s?.prompts, t);
        return n.ok ? n.items.map((s) => ({ name: s.name, description: s.description || void 0, arguments: s.arguments?.map((i) => ({ name: i.name, description: i.description || void 0, required: i.required })) })) : (ms(this.identifier, "prompts", n.invalidPage), []);
      }, 0, t) : [];
    }
    async getPrompt(e, t, r, n) {
      return await this.withSessionTerminationRetry(async () => ({ messages: (await this.client.getPrompt({ name: t, arguments: r || {} }, { signal: n })).messages?.map((o) => {
        const a = Array.isArray(o.content) ? o.content : [];
        return { role: o.role, content: a.map((c) => c.type === "text" ? { type: "text", text: c.text || "" } : c.type === "image" ? { type: "image", data: c.data || "", mimeType: c.mimeType } : { type: "text", text: "" }) };
      }) || [] }), 0, n);
    }
    async getToolsForUI(e) {
      return await this.withSessionTerminationRetry(async () => {
        const t = await this.listToolsWithCapabilityProbe(e);
        switch (t.kind) {
          case "unsupported":
            return { kind: "unsupported", items: [] };
          case "invalid_response":
            return { kind: "invalid_response", items: [], message: t.message };
          case "success":
            break;
          default: {
            const r = t;
            throw new Error(`Unhandled tool probe result: ${JSON.stringify(r)}`);
          }
        }
        return de(this.identifier).debug(`listOfferings: Found ${t.tools.length} tools`), this.deps.toolNameMap.clear(), { kind: "success", items: t.tools.map((r) => {
          const n = r.inputSchema, s = jE(r.name);
          this.deps.toolNameMap.set(s, r.name);
          const i = !n?.properties || Object.keys(n.properties).length === 0, o = r.outputSchema ? JSON.stringify(r.outputSchema) : void 0;
          return i ? { name: s, originalName: r.name, description: r.description || "", parameters: JSON.stringify({ type: "object", properties: {} }), outputSchema: o, title: r.title, annotations: Fa(r.annotations, r._meta), _meta: r._meta } : { name: s, originalName: r.name, description: r.description || "", parameters: JSON.stringify(r.inputSchema), outputSchema: o, title: r.title, annotations: Fa(r.annotations, r._meta), _meta: r._meta };
        }) };
      }, 0, e);
    }
    async getPromptsForUI(e) {
      return await this.withSessionTerminationRetry(async () => {
        if (!(this.client.getServerCapabilities() ?? { prompts: false }).prompts) return { kind: "unsupported", items: [] };
        const r = await this.listAllPages((n, s) => this.client.listPrompts(n, s), (n) => n?.prompts, e);
        return r.ok ? (de(this.identifier).debug(`listPrompts: Found ${r.items.length} prompts`), { kind: "success", items: r.items.map((n) => {
          const s = { type: "object", properties: {}, required: [] };
          if (n.arguments && Array.isArray(n.arguments)) for (const i of n.arguments) s.properties[i.name] = { type: "string", description: i.description || "" }, i.required && s.required.push(i.name);
          return { name: n.name, description: n.description || "", parameters: JSON.stringify(s) };
        }) }) : ms(this.identifier, "prompts", r.invalidPage);
      }, 0, e);
    }
    async getResourcesForUI(e) {
      return await this.withSessionTerminationRetry(async () => {
        if (!(this.client.getServerCapabilities() ?? { resources: false }).resources) return { kind: "unsupported", items: [] };
        const r = await this.listAllPages((n, s) => this.client.listResources(n, s), (n) => n?.resources, e);
        return r.ok ? (de(this.identifier).debug(`listResources: Found ${r.items.length} resources`), { kind: "success", items: r.items.map((n) => ({ uri: n.uri, name: n.name, description: n.description, mimeType: n.mimeType, annotations: n.annotations })) }) : ms(this.identifier, "resources", r.invalidPage);
      }, 0, e);
    }
    async listOfferingsForUI(e) {
      const t = Date.now();
      let r = false, n;
      const s = $l(this.identifier);
      if (s !== void 0) {
        const f = Math.max(1, Math.ceil(s / 1e3)), p = { reason: "http_4xx", retryable: true, httpStatus: 429 }, g = () => ({ kind: "failure", items: [], authRelated: false, failure: p, message: `Rate limited by provider; retry after ${f}s` });
        return { offerings: { tools: [], prompts: [], resources: [] }, outcomes: { tools: g(), prompts: g(), resources: g() } };
      }
      const i = (f, p) => p.catch((g) => {
        if (ME(g, e)) return { kind: "aborted", items: [] };
        const _ = Zt(g);
        _ && n === void 0 && (r = true, n = g);
        const y = this.classifyAndReport(g, "list_offerings", false);
        return { kind: "failure", items: [], authRelated: _, failure: y, message: g instanceof Error ? g.message : String(g) };
      }), o = await i("tools", this.getToolsForUI(e)), a = await i("prompts", this.getPromptsForUI(e)), c = await i("resources", this.getResourcesForUI(e)), l = { offerings: { tools: o.items, prompts: a.items, resources: c.items }, outcomes: { tools: o, prompts: a, resources: c } }, { offerings: u } = l, d = [["tools", o], ["prompts", a], ["resources", c]].flatMap(([f, p]) => p.kind === "aborted" ? [{ subCall: f, authRelated: false, reason: "aborted", message: "metadata refresh aborted" }] : p.kind === "failure" ? [{ subCall: f, authRelated: p.authRelated, reason: p.failure.reason, message: p.message }] : []);
      if (d.length > 0) {
        const f = d.map((g) => `${g.subCall}(authRelated=${g.authRelated}, reason=${g.reason}): ${g.message}`).join(" | "), p = `listOfferingsForUI sub-call failed (count=${d.length}): ${f}`;
        d.every((g) => g.reason === "aborted") ? de(this.identifier).debug(p) : de(this.identifier).warn(p);
      }
      if (ct("mcp.ext.list_offerings_duration_ms", Date.now() - t), ct("mcp.ext.list_offerings_tool_count", u.tools.length), de(this.identifier).debug(`Found ${u.tools.length} tools, ${u.prompts.length} prompts, and ${u.resources.length} resources`), r) {
        const f = n, p = f instanceof Error ? f.message : String(f);
        de(this.identifier).warn("Auth error detected in listOfferingsForUI");
        const g = this.deps.getStatus(this.identifier), _ = this.deps.getAuthState(this.identifier);
        if (g?.type === "needsAuth" || _.type === "needsUserAuth") return de(this.identifier).debug("listOfferingsForUI: skipping operation_auth_failed dispatch (server already awaiting interactive auth)"), l;
        const y = rm({ hasResults: u.tools.length > 0 || u.prompts.length > 0 || u.resources.length > 0, authError: p, authState: _ });
        if (y.length > 0) {
          const m = this.deps.getServerInfo(this.identifier);
          this.deps.dispatchEvents(this.identifier, y, m);
        }
      }
      return l;
    }
    async callToolForUI(e, t, r, n) {
      const s = this.deps.toolNameMap.get(e) || e;
      de(this.identifier).debug(`Calling tool '${s}' with toolCallId: ${r}`), t && de(this.identifier).debug(`Tool arguments: ${JSON.stringify(t)}`, void 0, { localOnly: true }), n && this.deps.currentElicitationProvider.set(this.identifier, n);
      const i = Date.now(), o = { identifier: this.identifier, serverInfo: this.deps.getServerInfo(this.identifier) }, a = g_((c) => {
        de(this.identifier).debug(`ProgressNotification received for ${r}`, { progress: c }), this.deps.executeCommand("mcp.progressNotification", { serverIdentifier: this.identifier, progressToken: r, notification: c, toolCallId: r });
      }, void 0, o);
      try {
        r && this.deps.currentToolCallContext.set(this.identifier, r);
        const c = await this.withToolCallRetry(async () => {
          const l = __(a, i);
          if (l === null) throw m_();
          return this.client.callTool({ name: s, arguments: t, _meta: { progressToken: r } }, Em, l);
        });
        return de(this.identifier).debug(`Successfully called tool '${s}'`), r && this.deps.currentToolCallContext.delete(this.identifier), ct("mcp.ext.tool_call_duration_ms", Date.now() - i), ct("mcp.ext.tool_call_success", 1, "increment"), { result: c };
      } catch (c) {
        const l = Date.now() - i;
        de(this.identifier).error(`Error calling tool '${s}': ${c instanceof Error ? c.message : String(c)}`, c instanceof Error ? c : void 0), r && this.deps.currentToolCallContext.delete(this.identifier), ct("mcp.ext.tool_call_duration_ms", l), this.maybeLogToolCallTimeout({ error: c, toolName: s, toolCallId: r, durationMs: l, idleTimeoutMs: a.timeout, maxTotalTimeoutMs: a.maxTotalTimeout, entryPoint: "callToolForUI" });
        const u = this.classifyAndReport(c, "tool_call");
        return ct("mcp.ext.tool_call_error", 1, "increment", am(u)), this.emitDegradedIfApplicable(u), { result: { error: c instanceof Error ? c.message : String(c) } };
      } finally {
        n && this.deps.currentElicitationProvider.delete(this.identifier);
      }
    }
    async getInstructionsForUI(e) {
      try {
        return { instructions: await this.withSessionTerminationRetry(async () => this.client.getInstructions(), 0, e) };
      } catch (t) {
        return de(this.identifier).error(`Error fetching instructions: ${t instanceof Error ? t.message : String(t)}`, t instanceof Error ? t : void 0), this.classifyAndReport(t, "get_instructions"), { instructions: "" };
      }
    }
    async getPromptForUI(e, t, r) {
      de(this.identifier).debug(`Getting prompt '${e}'`), t && de(this.identifier).debug(`Prompt arguments: ${JSON.stringify(t)}`, void 0, { localOnly: true });
      try {
        const n = {};
        if (t) for (const [i, o] of Object.entries(t)) n[i] = typeof o == "string" ? o : JSON.stringify(o);
        const s = await this.withSessionTerminationRetry(async () => this.client.getPrompt({ name: e, arguments: n }, { signal: r }), 0, r);
        return de(this.identifier).debug(`Successfully retrieved prompt '${e}'`), { result: s };
      } catch (n) {
        return de(this.identifier).error(`Error getting prompt '${e}': ${n instanceof Error ? n.message : String(n)}`, n instanceof Error ? n : void 0), this.classifyAndReport(n, "get_prompt"), { result: { error: n instanceof Error ? n.message : String(n) } };
      }
    }
    async readResourceForUI(e, t) {
      de(this.identifier).debug(`Reading resource: ${e}`);
      try {
        const r = await this.withSessionTerminationRetry(async () => this.client.readResource({ uri: e }, { signal: t }), 0, t);
        return de(this.identifier).debug(`Successfully read resource: ${e}`), { result: r };
      } catch (r) {
        return de(this.identifier).error(`Error reading resource '${e}': ${r instanceof Error ? r.message : String(r)}`, r instanceof Error ? r : void 0), this.classifyAndReport(r, "read_resource"), { result: { error: r instanceof Error ? r.message : String(r) } };
      }
    }
    async reinitializeTransportAndRestoreElicitation(e) {
      const t = this.deps.currentElicitationProvider.get(this.identifier);
      await this.deps.reinitializeStreamableHttpConnection(this.identifier, e, this), t && this.deps.currentElicitationProvider.set(this.identifier, t);
    }
    async withSessionTerminationRetry(e, t = 0, r) {
      r?.throwIfAborted();
      try {
        return await e();
      } catch (n) {
        r?.throwIfAborted();
        const s = this.deps.getServerInfo(this.identifier);
        if (!s || t >= 1 || !ln(n, s.type)) throw n;
        return de(this.identifier).info("Detected session termination, re-initializing connection before retry"), await this.reinitializeTransportAndRestoreElicitation(s), this.withSessionTerminationRetry(e, t + 1, r);
      }
    }
    async withToolCallRetry(e, t = 0) {
      try {
        return await e();
      } catch (r) {
        const n = this.deps.getServerInfo(this.identifier);
        if (!n || t >= 1) throw r;
        const s = ln(r, n.type), o = qe(r, n.type).reason === "sibling_refreshed", a = r instanceof Error ? r : new Error(String(r)), c = !s && !o && n.type !== "stdio" && hE(a), l = this.deps.getStatus(this.identifier)?.type === "error";
        if (!s && !o && !(c && l)) throw r;
        if (!s && !o) {
          const f = Date.now(), p = this.deps.getInlineReconnectCooldownMs();
          if (f - this.lastInlineReconnectAtMs < p) throw de(this.identifier).info("Skipping inline reconnect during cooldown", { cooldownMs: p, msSinceLastReconnect: f - this.lastInlineReconnectAtMs }), r;
          this.lastInlineReconnectAtMs = f;
        }
        const d = s ? "Detected session termination, re-initializing connection before retry" : o ? "Sibling OAuth refresh completed, re-initializing connection before retrying tool call" : "FSM exhausted retries for network error, attempting inline recovery before tool call";
        return de(this.identifier).info(d), await this.reinitializeTransportAndRestoreElicitation(n), this.withToolCallRetry(e, t + 1);
      }
    }
  };
} });
function vs({ durationMs: e, status: t, transport: r, commandsVersion: n = "v1", failureReason: s, retryable: i, httpStatusCode: o }) {
  const a = [`mcp_version:${Zi()}`, `status:${t}`, `transport:${r}`, `commands_version:${n}`];
  s !== void 0 && a.push(`failure_reason:${s}`), i !== void 0 && a.push(`retryable:${String(i)}`), o !== void 0 && a.push(`status_code:${String(o)}`), Qt("mcp.ext.connection_time_ms", e, "distribution", a), Qt("mcp.ext.connection_attempts", 1, "increment", a);
}
var Rm, Tm = k({ "connection-metrics.ts"() {
  "use strict";
  h(), dn(), Rm = vs;
} });
function YE(e, t) {
  return t === "stdio" ? false : e.reason === "network" || e.reason === "timeout" || e.reason === "session_invalidated" ? true : e.httpStatus === 429 || e.httpStatus === 503;
}
function XE(e, t) {
  return t.failure.httpStatus === 429 || t.failure.httpStatus === 503 ? `${e}: HTTP ${t.failure.httpStatus}` : t.failure.reason === "session_invalidated" ? `${e}: session invalidated` : `${e}: ${t.message || t.failure.reason}`;
}
function km(e, t) {
  const { offerings: r, outcomes: n } = e, s = r.tools.length > 0 || r.prompts.length > 0 || r.resources.length > 0, i = Object.entries(n), o = i.some(([, u]) => u.kind === "success"), a = i.some(([, u]) => u.kind === "failure"), c = i.some(([, u]) => u.kind === "aborted");
  if (o) return { hasResults: s, hasSuccessfulSubCall: o, isAuthoritative: true, wasAborted: c };
  const l = i.flatMap(([u, d]) => d.kind !== "failure" || !YE(d.failure, t) ? [] : [XE(u, d)]);
  return { hasResults: s, hasSuccessfulSubCall: o, isAuthoritative: !a && !c, wasAborted: c, degradedReason: l.length > 0 ? l.join(", ") : void 0 };
}
var JE = k({ "offerings-types.ts"() {
  "use strict";
  h();
} });
function Im(e) {
  let t;
  try {
    t = new URL(e).hostname.toLowerCase();
  } catch {
    return false;
  }
  return Pm.has(t) || Ia(e)?.unauthenticatedConnect === true;
}
var Pm, Om = k({ "lazy-auth-hosts.ts"() {
  "use strict";
  h(), Be(), Pm = /* @__PURE__ */ new Set(["api.1inch.com"]);
} });
function ZE(e, t, r) {
  return Ta(e) ? async (n, s) => {
    const i = typeof n == "string" ? n : n.href;
    if (!Ta({ identifier: e.identifier, serverUrl: i })) return r(n, s);
    const o = await t();
    if (!o?.trim()) throw new Error("Cursor access token is required for Origin MCP");
    const a = new Headers(s?.headers);
    return a.set("Authorization", `Bearer ${o}`), a.has(ql) || a.set(ql, globalThis.crypto.randomUUID()), r(n, { ...s, headers: a, redirect: "manual" });
  } : r;
}
var ql, QE = k({ "origin-mcp-cursor-auth.ts"() {
  "use strict";
  h(), Be(), ql = "x-request-id";
} });
function e8(e) {
  return e?.getOAuthRefreshDiagnosticsForLog?.()?.refreshRetryClassificationEnabled === true;
}
function Cm(e, t, r) {
  if (U_(e) || r?.isRetryableOAuthRefreshError?.(e)) return true;
  if (e instanceof Error) {
    const n = qe(e, t);
    if (n.retryable && (n.reason === "network" || n.reason === "timeout" || n.reason === "sibling_refreshed")) return true;
  }
  return false;
}
function jl(e, t, r) {
  if (!e8(r) || Zt(e)) return false;
  if (Cm(e, t, r)) return true;
  if (e instanceof Error) {
    const s = e.cause;
    if (!Zt(s) && Cm(s, t, r)) return true;
  }
  const n = r?.getOAuthRefreshDiagnosticsForLog?.();
  if (n?.precededByRefreshError) {
    const s = typeof n.errorMessage == "string" ? n.errorMessage : void 0;
    if (s && zl(new Error(s))) return true;
  }
  return false;
}
var t8 = k({ "connect-needs-auth-retryability.ts"() {
  "use strict";
  h(), un(), Wl(), gs();
} });
import { createHash as r8 } from "node:crypto";
import * as n8 from "node:fs";
import * as ys from "node:os";
import * as no from "node:path";
import { auth as s8 } from "@modelcontextprotocol/sdk/client/auth.js";
import { SSEClientTransport as Lm } from "@modelcontextprotocol/sdk/client/sse.js";
import { StdioClientTransport as i8 } from "@modelcontextprotocol/sdk/client/stdio.js";
import { StreamableHTTPClientTransport as o8 } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
function he(e) {
  return Ur(e);
}
function so() {
  return Ur("mcp-core.transport-factory");
}
function Vl(e) {
  try {
    return process.kill(e, 0), true;
  } catch {
    return false;
  }
}
async function a8(e, t = 4500) {
  if (e === null) return;
  const r = Date.now() + t;
  for (; Date.now() < r; ) {
    if (!Vl(e)) return;
    await new Promise((n) => setTimeout(n, 50));
  }
  if (Vl(e)) {
    try {
      process.kill(e, "SIGKILL");
    } catch {
      return;
    }
    for (; Date.now() < r + 500; ) {
      if (!Vl(e)) return;
      await new Promise((n) => setTimeout(n, 50));
    }
  }
}
function c8(e) {
  const t = e.close.bind(e);
  let r;
  return e.close = async () => {
    if (r) return r;
    const n = e.pid;
    return r = (async () => {
      try {
        await t();
      } finally {
        await a8(n);
      }
    })(), r;
  }, { waitForClose: () => r ?? Promise.resolve() };
}
function l8(e, t) {
  return be("stdioConnectFailuresAreNonRetryable", { identifier: e, serverInfo: t }) ?? true;
}
function u8(e) {
  return e === void 0 ? "no_config" : e.enabled === true ? "sandbox_enabled" : e.enabled === false ? "controls_disabled" : "missing_enabled";
}
function Yl(e) {
  return e?.length ?? 0;
}
function d8(e) {
  if (e !== void 0) return r8("sha256").update(Cg(e)).digest("hex");
}
function xm(e) {
  if (!e) return;
  const t = e.toLowerCase();
  return t.includes("binary") ? "binary_unavailable" : t.includes("kernel") || t.includes("exit code 2") ? "unsupported_kernel" : t.includes("windows") ? "unsupported_platform" : t.includes("preflight") ? "preflight_failed" : "unknown";
}
function h8(e, t) {
  const r = u8(t), n = xh(t) !== void 0, s = d8(t), i = Yl(t?.mcpNetworkAllowlist), o = Yl(t?.mcpNetworkDenylist), a = Yl(t?.localAgentNetworkAllowlist), c = { event: "mcp_stdio_spawn_policy_decision", commandsVersion: "v2", sandboxed: n, sandboxReason: r, networkControlsEnabled: t?.enabled === true, mcpNetworkMode: t?.mcpNetworkMode, mcpNetworkAllowlistCount: i, mcpNetworkDenylistCount: o, localAgentNetworkAllowlistCount: a, sandboxPolicyHash: s, hasMcpNetworkAllowlist: i > 0, hasMcpNetworkDenylist: o > 0, hasLocalAgentNetworkAllowlist: a > 0, win32UserExtensionUnsandbox: t?.win32UserExtensionUnsandbox === true };
  he(e).info(`MCP stdio spawn policy decision: sandboxed=${String(n)}, sandboxReason=${r}, networkControlsEnabled=${String(t?.enabled === true)}, mcpNetworkMode=${t?.mcpNetworkMode ?? "unset"}, mcpNetworkAllowlistCount=${i}, mcpNetworkDenylistCount=${o}, localAgentNetworkAllowlistCount=${a}, sandboxPolicyHash=${s ?? "none"}`, c), Qt("mcp.ext.stdio_spawn_policy", 1, "increment", ["commands_version:v2", `mcp_version:${Zi()}`, `sandboxed:${String(n)}`, `sandbox_reason:${r}`, `network_controls_enabled:${String(t?.enabled === true)}`]), t?.win32UserExtensionUnsandbox === true && Qt("mcp.ext.win32_user_extension_stdio_unsandbox", 1, "increment", ["commands_version:v2", `mcp_version:${Zi()}`]);
}
function Xl(e) {
  if (oo) return oo;
  let t = "unknown";
  try {
    const n = no.join(e, "product.json");
    t = JSON.parse(n8.readFileSync(n, "utf8")).version || t;
  } catch (n) {
    so().warn(`Failed to read Cursor version from product.json, using VSCode version as fallback: ${n instanceof Error ? n.message : String(n)}`);
  }
  const r = `${ys.platform()} ${ys.arch()}`;
  return oo = `Cursor/${t} (${r})`, oo;
}
function io(e, t) {
  const r = t;
  if (!r || r.length === 0) return e.split(" ").some(Bm) ? so().warn("No workspace folders found, using current path for . expansion") : so().debug("No workspace folders found; input has no expandable path segments"), e;
  const n = r[0].uri.fsPath, s = (o) => no.join(n, o.replace(/^\.(?:[\\/])?/, "")), i = e.split(" ");
  i[0].startsWith("~") ? i[0] = no.join(ys.homedir(), i[0].slice(1)) : ao(i[0]) && (i[0] = s(i[0]));
  for (let o = 1; o < i.length; o++) i[o].startsWith("~") ? i[o] = no.join(ys.homedir(), i[o].slice(1)) : ao(i[o]) && (i[o] = s(i[o]));
  return i.join(" ");
}
function Mm(e) {
  return Ia(e.serverUrl)?.rejectsCustomSchemeRedirects === true || e.restMcpProviderMetadata?.rejectsCustomSchemeRedirects === true;
}
function Dm(e) {
  return e.hostedCallbackGate && !Mm(e) && Jl(e);
}
function Jl(e) {
  if (Mm(e)) return true;
  if (e.config?.enabled === false) return false;
  const t = e.config?.denylist ?? [], r = wt(e.serverUrl);
  return !t.some((n) => wt(n) === r);
}
function Nm(e) {
  return Object.entries(e ?? {}).some(([t, r]) => t.toLowerCase() === "authorization" && r.trim().length > 0);
}
function Um(e, t, r) {
  if (!t.createHttpFetch) return;
  const n = t.createHttpFetch({ identifier: e, serverUrl: r.serverUrl });
  if (!n) {
    he(e).warn("Host returned no HTTP fetch for MCP server; falling back to default fetch", { serverUrl: r.serverUrl });
    return;
  }
  return n;
}
function $m(e, t) {
  if (e.cursorAuthHeaderValue === void 0 || e.cursorAuthOrigin === void 0) return t;
  const r = e.cursorAuthHeaderValue;
  return DE(() => r, e.cursorAuthOrigin, t ?? globalThis.fetch.bind(globalThis));
}
function f8(e) {
  return typeof e == "string" ? e : e.href;
}
function p8(e, t) {
  if (!e) return false;
  try {
    const r = new URL(e), n = new URL(t);
    return r.origin === n.origin && r.pathname === n.pathname;
  } catch {
    return false;
  }
}
function g8(e) {
  const t = e.statusText.trim(), r = t ? ` ${t}` : "", n = new Error(`HTTP ${e.status}${r} from MCP server while using configured Authorization header`);
  return n.name = "StaticAuthorizationHeaderUnauthorizedError", n;
}
function Zl(e, t, r) {
  return !e || !t ? e : async (...n) => {
    const s = await e(...n);
    return s.status === 401 && !t.firstError && p8(f8(n[0]), r) && (t.firstError = g8(s)), s;
  };
}
function Fm(e) {
  return Nm(e) ? {} : void 0;
}
function Ql(e, t, r, n, s, i = false) {
  const o = t?.firstError;
  if (!(!o || r.hadAuthRequiredEvent)) return he(e).error("OAuth fallback failed after MCP server returned 401 for configured Authorization header; surfacing original 401", n instanceof Error ? n : void 0, { transportType: s, fallback: i, oauthFallbackError: n instanceof Error ? n.message : String(n) }), { connectResult: { ok: false, error: o.message, isRetryable: false } };
}
async function eu(e) {
  const { identifier: t, authProvider: r, staticClientInfo: n, transportServerUrl: s } = e;
  if (!r || !n && !Im(s)) return false;
  try {
    if (await r.tokens()) return false;
  } catch (i) {
    return he(t).warn(`Failed to read OAuth tokens after connect; skipping connect-phase auth for static-client server: ${i instanceof Error ? i.message : String(i)}`, { transportType: e.transportType }), false;
  }
  try {
    const i = r.getOAuthHttpFetch?.();
    return await s8(r, { serverUrl: s, ...i ? { fetchFn: i } : {} }) === "REDIRECT" ? (he(t).info("Server connected without stored tokens; interactive OAuth required", { transportType: e.transportType }), true) : false;
  } catch (i) {
    return he(t).warn(`Connect-phase OAuth for static-client server failed; keeping unauthenticated connection: ${i instanceof Error ? i.message : String(i)}`, { transportType: e.transportType }), false;
  }
}
async function mt(e, t, r, n, s) {
  let i = false;
  try {
    i = !!(await e.tokens())?.refresh_token;
  } catch (c) {
    so().warn(`Failed to snapshot OAuth tokens while building needsAuth result: ${c instanceof Error ? c.message : String(c)}`);
  }
  const o = t.authorizationUrl ?? r, a = e.getOAuthRefreshDiagnosticsForLog?.();
  return { ok: false, needsAuth: true, authorizationUrl: o, transport: n, refreshTokenPresent: i, hadAuthRequiredEvent: t.hadAuthRequiredEvent, needsAuthReason: s, oauthRefreshDiagnostics: a };
}
async function tu(e, t, r, n, s, i, o) {
  try {
    return t.type === "streamableHttp" ? await _8(e, t, r, n, s, i, o?.allowDeprecatedSseFallback ?? true) : t.type === "stdio" ? await y8(e, t, r, n) : t.type === "sse" ? await v8(e, t, r, n, s) : { connectResult: { ok: false, error: `Unknown server type: ${t.type}`, isRetryable: false } };
  } finally {
    s.markConnectPhaseComplete();
  }
}
async function _8(e, t, r, n, s, i, o = true) {
  const a = { identifier: n.getMcpPolicyTargetIdentifier?.(e) ?? e, serverUrl: t.serverUrl }, c = Ta(a), { transportServerUrl: l, canonicalServerUrl: u } = Ih(t.serverUrl), { authProvider: d, staticClientInfo: f } = await Hm({ identifier: e, serverInfo: t, host: n, authEventSink: s, canonicalServerUrl: u, transportServerUrl: l, suppressOAuth: c }), p = to({ identifier: e, host: n, serverUrl: u }), g = Fm(t.headers), _ = Nl(l, t.headers), y = _.headers, m = $m(_, Um(e, n, t)), A = ZE(a, () => n.executeCommand("mcp.cursorAccessToken", { serverIdentifier: e, serverUrl: t.serverUrl }), m ?? n.fetch ?? globalThis.fetch.bind(globalThis));
  if (d && f && d.saveClientInformation) try {
    await d.saveClientInformation({ ...f, redirect_uris: d.clientMetadata.redirect_uris, grant_types: ["authorization_code", "refresh_token"], response_types: ["code"] });
  } catch (v) {
    he(e).warn(`Failed to persist static OAuth client information: ${v instanceof Error ? v.message : String(v)}`);
  }
  const S = new o8(new URL(l), { ...d ? { authProvider: d } : {}, ...i ? { sessionId: i.sessionId } : {}, requestInit: { headers: { "User-Agent": Xl(n.getAppRoot()), ...y ?? {} } }, fetch: Zl(_s(n, "streamableHttp", p, A), g, l) });
  i?.protocolVersion && S.setProtocolVersion(i.protocolVersion);
  try {
    return await r.connect(S), await eu({ identifier: e, authProvider: d, staticClientInfo: f, transportServerUrl: l, transportType: "streamableHttp" }) ? { connectResult: await mt(d, s.getConnectPhaseAuthRequiredEvidence(), l, S, "connect_unauthenticated_static_client") } : { connectResult: { ok: true, client: r, transport: S, actualType: "streamableHttp" } };
  } catch (v) {
    if (i && v instanceof Error && v.message.includes("Server already initialized")) return he(e).warn('Streamable HTTP reconnect hit "Server already initialized"; lifecycle will retry with a fresh initialize (no cached session id)', { transportType: "streamableHttp", sessionReuse: true }), { connectResult: { ok: false, error: v.message, isRetryable: true, sessionReuseRequired: true, reconnectSession: i } };
    if (i && Ot(v instanceof Error ? v : new Error(String(v))) === 404) return he(e).warn("Streamable HTTP reconnect: HTTP 404 with Mcp-Session-Id — session invalid/expired per MCP spec; not falling back to SSE", { transportType: "streamableHttp" }), { connectResult: { ok: false, error: v instanceof Error ? v.message : String(v), isRetryable: true } };
    const b = s.getConnectPhaseAuthRequiredEvidence();
    if (b.hadAuthRequiredEvent && d) {
      if (jl(v, "streamableHttp", d)) {
        const F = v instanceof Error ? v : new Error(String(v));
        return he(e).info("Connect failed after auth_required with retryable OAuth/transport error; returning retryable failure (streamableHttp)", { transportType: "streamableHttp" }), { connectResult: { ok: false, error: F.message, isRetryable: true } };
      }
      return he(e).info("Connect failed after auth_required; returning needsAuth (streamableHttp)", { transportType: "streamableHttp" }), { connectResult: await mt(d, b, l, S, "connect_auth_error") };
    }
    const I = Ql(e, g, b, v, "streamableHttp");
    if (I) return I;
    if (Zt(v) && d) return he(e).error(`Auth-related error connecting to streamableHttp server: ${v instanceof Error ? v.message : String(v)}`, v instanceof Error ? v : void 0, { transportType: "streamableHttp" }), { connectResult: await mt(d, b, l, S, "connect_auth_error") };
    if (S8(v) && d) return he(e).error(`OAuth config error connecting to streamableHttp server: ${v instanceof Error ? v.message : String(v)}`, v instanceof Error ? v : void 0, { transportType: "streamableHttp", retryable: false }), { connectResult: await mt(d, b, l, S, "oauth_config_error") };
    if (UE(v)) {
      if (!o || c) {
        const F = Ul(v), H = !F;
        return he(e).warn(F ? "Streamable HTTP connect failed with ECONNREFUSED; skipping deprecated SSE fallback and surfacing non-retryable failure" : "Known streamable HTTP server returned a backwards-compatibility status; skipping deprecated SSE fallback and retrying streamable HTTP", { transportType: "streamableHttp", retryable: H }), { connectResult: { ok: false, error: v instanceof Error ? v.message : String(v), isRetryable: H } };
      }
      return he(e).warn(`Error connecting to streamableHttp server, falling back to SSE: ${v instanceof Error ? v.message : String(v)}`, { transportType: "streamableHttp", fallback: "sse" }), m8(e, t, r, d, f, n, s, l, p, g, i, v, m);
    }
    const O = v instanceof Error ? v : new Error(String(v)), M = qe(O, "streamableHttp").retryable || ru(v);
    return he(e).warn(`Transient error connecting to streamableHttp server: ${O.message}`, { transportType: "streamableHttp", retryable: M }), { connectResult: { ok: false, error: O.message, isRetryable: M } };
  }
}
async function m8(e, t, r, n, s, i, o, a, c, l, u, d, f) {
  if (u) return he(e).warn("Streamable HTTP reconnect using existing session ID failed; skipping SSE fallback", { transportType: "streamableHttp", sessionReuse: true }), { connectResult: { ok: false, error: d instanceof Error ? d.message : "Existing streamable HTTP session reconnect failed", isRetryable: true } };
  let p;
  const { headers: g } = Nl(a, t.headers);
  try {
    return p = new Lm(new URL(a), { ...n ? { authProvider: n } : {}, requestInit: { headers: { "User-Agent": Xl(i.getAppRoot()), ...g ?? {} } }, fetch: Zl(_s(i, "sse", c, f), l, a) }), await r.connect(p), await eu({ identifier: e, authProvider: n, staticClientInfo: s, transportServerUrl: a, transportType: "sse" }) ? { connectResult: await mt(n, o.getConnectPhaseAuthRequiredEvidence(), a, p, "connect_unauthenticated_static_client") } : { connectResult: { ok: true, client: r, transport: p, actualType: "sse" } };
  } catch (_) {
    const y = o.getConnectPhaseAuthRequiredEvidence();
    if (y.hadAuthRequiredEvent && n) {
      if (jl(_, "sse", n)) {
        const v = _ instanceof Error ? _ : new Error(String(_));
        return he(e).info("SSE fallback failed after auth_required with retryable OAuth/transport error; returning retryable failure", { transportType: "sse", fallback: true }), { connectResult: { ok: false, error: v.message, isRetryable: true } };
      }
      return he(e).info("SSE fallback failed after auth_required; returning needsAuth", { transportType: "sse", fallback: true }), { connectResult: await mt(n, y, a, p, "sse_fallback_auth_error") };
    }
    const m = Ql(e, l, y, _, "sse", true);
    if (m) return m;
    if (p && Zt(_) && n) return he(e).warn("Auth-related error connecting to SSE server (fallback)"), { connectResult: await mt(n, y, a, p, "sse_fallback_auth_error") };
    r.close();
    const A = _ instanceof Error ? _ : new Error(String(_)), S = Ul(A) ? false : qe(A, "sse").retryable || ru(A);
    return he(e).error(`Error connecting to SSE server after fallback: ${A.message}`, A, { transportType: "sse", fallback: true, retryable: S }), { connectResult: { ok: false, error: A.message, isRetryable: S } };
  }
}
async function v8(e, t, r, n, s) {
  const { transportServerUrl: i, canonicalServerUrl: o } = Ih(t.serverUrl), { authProvider: a, staticClientInfo: c } = await Hm({ identifier: e, serverInfo: t, host: n, authEventSink: s, canonicalServerUrl: o, transportServerUrl: i }), l = to({ identifier: e, host: n, serverUrl: o }), u = Fm(t.headers), d = Nl(i, t.headers), f = d.headers, p = $m(d, Um(e, n, t)), g = new Lm(new URL(i), { ...a ? { authProvider: a } : {}, requestInit: { headers: { "User-Agent": Xl(n.getAppRoot()), ...f ?? {} } }, fetch: Zl(_s(n, "sse", l, p), u, i) });
  try {
    return await r.connect(g), await eu({ identifier: e, authProvider: a, staticClientInfo: c, transportServerUrl: i, transportType: "sse" }) ? { connectResult: await mt(a, s.getConnectPhaseAuthRequiredEvidence(), i, g, "connect_unauthenticated_static_client") } : { connectResult: { ok: true, client: r, transport: g, actualType: "sse" } };
  } catch (_) {
    const y = s.getConnectPhaseAuthRequiredEvidence();
    if (y.hadAuthRequiredEvent && a) {
      if (jl(_, "sse", a)) {
        const S = _ instanceof Error ? _ : new Error(String(_));
        return he(e).info("Connect failed after auth_required with retryable OAuth/transport error; returning retryable failure (sse)", { transportType: "sse" }), { connectResult: { ok: false, error: S.message, isRetryable: true } };
      }
      return { connectResult: await mt(a, y, i, g, "connect_auth_error") };
    }
    const m = _ instanceof Error ? _ : new Error(String(_)), A = Ql(e, u, y, m, "sse");
    return A || (Zt(_) && a ? { connectResult: await mt(a, y, i, g, "connect_auth_error") } : (r.close(), { connectResult: { ok: false, error: m.message, isRetryable: qe(m, "sse").retryable || ru(m) } }));
  }
}
async function y8(e, t, r, n) {
  const s = n.getWorkspaceFolders(), i = { WORKSPACE_FOLDER_PATHS: s?.map((A) => A.uri.fsPath).join(",") ?? "", npm_config_yes: "true", NPM_CONFIG_YES: "true" }, o = io(t.command, s);
  let a, c;
  if (t.args && t.args.length > 0) a = o, c = t.args.map((A) => io(A, s));
  else {
    const A = o.split(" ");
    a = A[0], c = A.slice(1);
  }
  const l = n.getSpawnEnv();
  let u = ys.homedir();
  if (t.cwd) u = io(t.cwd, s);
  else if (t.projectPath) {
    const A = t.projectPath.split("-").slice(1).join("-"), S = s?.find((v) => A && v.uri.fsPath.endsWith(A));
    S && (u = S.uri.fsPath);
  }
  const d = { ...l, ...i, ...t.env }, f = await n.getMcpNetworkControlsConfig?.({ command: [t.command, ...t.args ?? []].join(" ") });
  h8(e, f);
  const p = xh(f);
  let g;
  if (p !== void 0) {
    const { SandboxUnsupportedError: A, spawnInSandbox: S } = await Promise.resolve().then(() => (ds(), us)), v = await yw(p, u);
    he(e).info(`MCP stdio sandbox spawn configured: mcpNetworkMode=${p.mcpNetworkMode ?? "unset"}, policyType=${v.type}`), g = (b, I, O) => {
      try {
        return S(b, I, O, v);
      } catch (M) {
        throw M instanceof A ? new yl(e, M) : M;
      }
    };
  }
  const _ = new i8({ cwd: u, command: a, args: c, env: d, stderr: "pipe", ...g ? { spawn: g } : {} }), y = c8(_);
  let m = "";
  _.stderr?.on("data", (A) => {
    const S = A.toString();
    if (he(e).error(`${S}`, void 0, void 0, { localOnly: true }), m.length < Ll) {
      const v = Ll - m.length;
      m += S.slice(0, v);
    }
  });
  try {
    return await r.connect(_), { connectResult: { ok: true, client: r, transport: _, actualType: "stdio" } };
  } catch (A) {
    try {
      await y.waitForClose();
    } catch (b) {
      he(e).debug(`Error waiting for failed stdio transport to exit: ${b instanceof Error ? b.message : String(b)}`);
    }
    if (A instanceof yl) {
      const { getLastSandboxFailureReason: b } = await Promise.resolve().then(() => (ds(), us)), I = b(), O = xm(I);
      return he(e).error(`MCP stdio sandbox unavailable: ${A.message}${O ? `; sandboxFailureReasonClass=${O}` : ""}`, void 0, { event: "mcp_stdio_sandbox_unavailable", sandboxFailureReasonClass: O, mcpNetworkMode: p?.mcpNetworkMode }), { connectResult: { ok: false, error: A.message, isRetryable: false } };
    }
    if (p !== void 0) {
      const { getLastSandboxFailureReason: b } = await Promise.resolve().then(() => (ds(), us)), I = xm(b());
      he(e).warn(`MCP stdio sandboxed connect failed: ${A.message}${I ? `; sandboxFailureReasonClass=${I}` : ""}`, { event: "mcp_stdio_sandbox_connect_failed", sandboxFailureReasonClass: I, stderrCaptured: m.length > 0, mcpNetworkMode: p.mcpNetworkMode });
    }
    const S = l8(e, t), v = dE(A, m, S, a, c);
    return { connectResult: { ok: false, error: A.message, isRetryable: v } };
  }
}
async function Hm(e) {
  return e.suppressOAuth ? {} : Nm(e.serverInfo.headers) ? {} : im()(e);
}
function S8(e) {
  if (!(e instanceof Error)) return false;
  const t = e.message;
  return t.includes("Redirect URI is not valid") || t.includes("redirect_uri_mismatch") || t.includes("Invalid redirect URI");
}
function ru(e) {
  if (e instanceof Error) {
    const t = Ot(e);
    if (t !== void 0) return t >= 500 && t < 600;
  }
  return false;
}
var oo, ao, Bm, nu, su = k({ "transport-factory.ts"() {
  h(), Be(), ot(), un(), $r(), Om(), dn(), Pg(), Lg(), xg(), Qe(), QE(), cn(), fm(), pm(), t8(), Bl(), xl(), ao = (e) => e.startsWith("./") || e.startsWith(".\\") || e === ".", Bm = (e) => e.startsWith("~") || ao(e), nu = "mcp_oauth_hosted_loopback_callback";
} });
import { Client as b8 } from "@modelcontextprotocol/sdk/client/index.js";
import { ElicitRequestSchema as w8, ListRootsRequestSchema as E8, PromptListChangedNotificationSchema as A8, ResourceListChangedNotificationSchema as R8, ResourceUpdatedNotificationSchema as T8, ToolListChangedNotificationSchema as k8 } from "@modelcontextprotocol/sdk/types.js";
function J(e) {
  return Ur(e);
}
function co(e, t) {
  return new Promise((r, n) => {
    const s = setTimeout(() => n(new Error(`Health probe timed out after ${t}ms`)), t);
    e.then((i) => {
      clearTimeout(s), r(i);
    }, (i) => {
      clearTimeout(s), n(i);
    });
  });
}
function I8(e) {
  if (!(e instanceof Error)) return false;
  const t = Ot(e);
  return t === 429 || t === 503;
}
function zm(e) {
  return e.type === "failed" && e.exhausted ? "conn=failed(exhausted)" : `conn=${e.type}`;
}
var Wm, Gm, Km, P8 = k({ "server-lifecycle.ts"() {
  "use strict";
  h(), nn(), Jg(), ot(), h_(), un(), Wt(), $r(), Om(), dn(), cn(), Am(), Tm(), eo(), su(), Wm = class {
    constructor(e) {
      this.onRuntimeEvent = e, this.connectPhaseComplete = false, this.connectPhaseEvents = [];
    }
    emit(e) {
      if (!this.connectPhaseComplete) {
        this.connectPhaseEvents.push(e);
        return;
      }
      this.onRuntimeEvent(this, e);
    }
    markConnectPhaseComplete() {
      this.connectPhaseComplete = true;
    }
    getConnectPhaseAuthRequiredEvidence() {
      const e = this.connectPhaseEvents.find((t) => t.kind === "auth_required");
      return { hadAuthRequiredEvent: e !== void 0, authorizationUrl: e?.authorizationUrl };
    }
    getConnectPhaseEvents() {
      return this.connectPhaseEvents;
    }
  }, Gm = class {
    constructor(e) {
      this.identifier = e, this.closePromises = /* @__PURE__ */ new WeakMap();
    }
    setClient(e) {
      this.client = e, this.closeRequestedReason !== void 0 && this.closeCurrent(this.closeRequestedReason);
    }
    requestClose(e) {
      return this.closeRequestedReason = e, this.closeCurrent(e);
    }
    commit(e) {
      this.client === e && (this.client = void 0);
    }
    closeCurrent(e) {
      const t = this.client;
      if (!t) return Promise.resolve();
      const r = this.closePromises.get(t);
      if (r) return r;
      J(this.identifier).debug("Closing in-flight MCP connection attempt", { reason: e });
      const n = Promise.resolve().then(() => t.close()).catch((s) => {
        J(this.identifier).debug("Error closing in-flight MCP connection attempt:", s);
      });
      return this.closePromises.set(t, n), n;
    }
  }, Km = class {
    constructor(e, t, r, n, s, i) {
      this.config = r, this.host = n, this.callbacks = s, this.connectionState = { type: "idle" }, this.authState = { type: "unknown" }, this.lastStatus = { type: "disconnected" }, this.eventLog = new sm(), this.subscribedResources = /* @__PURE__ */ new Set(), this.pendingElicitationRequests = /* @__PURE__ */ new Map(), this.currentElicitationProvider = /* @__PURE__ */ new Map(), this.currentToolCallContext = /* @__PURE__ */ new Map(), this.toolNameMap = /* @__PURE__ */ new Map(), this.queue = [], this.draining = false, this.disposed = false, this.probeInFlightCount = 0, this.clientGeneration = 0, this.omitReconnectSessionCaptureForNextAttempt = false, this.consecutiveStreamableHttpSession404Count = 0, this.identifier = e, this.serverInfo = t, this.serverName = i, this.activities = new P_((o) => A_(o, { getStabilityThresholdMs: () => zi(this.getReconnectConfigContext()), getDegradedProbeDelayMs: () => {
        const a = $l(this.identifier);
        return a !== void 0 ? Math.max(a, bl(this.getReconnectConfigContext())) : bl(this.getReconnectConfigContext());
      }, getKeepaliveProbeDelayMs: () => zg(this.getReconnectConfigContext()), getKeepaliveJitterMs: () => Wg(this.getReconnectConfigContext()), getKeepaliveProbesEnabled: () => !this.shouldSuppressConnectedKeepaliveProbe(), getRetryNonRetryableAutomatically: () => be("retryNonRetryableAutomatically", this.getReconnectConfigContext()) === true })), this.serviceStarter = this.createServiceStarter();
    }
    connect() {
      this.enqueue([{ target: "connection", kind: "connect_start" }]);
    }
    closeCurrentServerInstance(e) {
      if (this.activeRuntimeAuthEventSink = void 0, !!this.serverInstance) {
        this.nullifyCallbacks(), e.captureSession && this.captureReconnectSessionInfo(this.serverInstance);
        try {
          this.serverInstance.client.close();
        } catch (t) {
          J(this.identifier).debug(`Error closing client during ${e.reason}: ${t instanceof Error ? t.message : String(t)}`);
        }
        this.serverInstance = void 0;
      }
    }
    cancelPendingElicitations() {
      for (const [e, t] of this.pendingElicitationRequests.entries()) this.pendingElicitationRequests.delete(e), t({ action: "cancel" });
    }
    suspendTransport() {
      this.disposed || this.connectionState.type !== "connected" || (this.reconnectSessionInfo = void 0, this.closeCurrentServerInstance({ captureSession: false, reason: "idle suspend" }), this.cancelPendingElicitations(), this.adapter = void 0, this.callbacks.onAdapterRemoved(this.identifier), this.enqueue([{ target: "connection", kind: "idle_suspend" }]));
    }
    dispose() {
      this.disposed || (this.disposed = true, this.consecutiveStreamableHttpSession404Count = 0, this.activities.dispose(), this.activeConnectionAttempt?.requestClose("dispose"), this.closeCurrentServerInstance({ captureSession: true, reason: "dispose" }), this.subscribedResources.clear(), this.cancelPendingElicitations(), this.adapter = void 0, this.callbacks.onAdapterRemoved(this.identifier), this.queue.length = 0);
    }
    getConnectPromise() {
      return this.activities.getServicePromise("connection_attempt");
    }
    enqueue(e) {
      this.disposed || (this.queue.push(...e), this.draining || this.drain());
    }
    drain() {
      this.draining = true;
      let e;
      const t = this.connectionState, r = this.authState;
      let n;
      for (; this.queue.length > 0; ) {
        const s = this.queue.shift();
        if (this.disposed) break;
        const i = this.connectionState, o = this.authState, a = nE(this.connectionState, this.authState, s, this.config);
        this.connectionState = a.connectionState, this.authState = a.authState, e = a.projectedStatus;
        const c = `${s.target}:${s.kind}`, l = `${zm(i)},auth=${o.type}`, u = `${zm(a.connectionState)},auth=${a.authState.type}`;
        if (this.eventLog.push({ timestamp: Date.now(), event: c, stateBefore: l, stateAfter: u }), l !== u) {
          const p = a.connectionState.type === "failed" && a.connectionState.exhausted === true, g = p || s.kind === "connect_failure" || s.kind === "transport_error" || s.kind === "transport_closed" || s.kind === "session_invalidated", _ = s.kind === "connect_start" || s.kind === "connect_success" || s.kind === "request_degraded" || s.kind === "server_removed", y = { event: c, stateBefore: l, stateAfter: u, transportType: this.actualTransportType ?? this.serverInfo.type, serverName: this.serverName };
          g ? EE(s, p) ? J(this.identifier).warn(`[V2 FSM] ${c}: ${l} -> ${u}`, y) : J(this.identifier).debug(`[V2 FSM] ${c}: ${l} -> ${u}`, y) : _ ? J(this.identifier).info(`[V2 FSM] ${c}: ${l} -> ${u}`, y) : J(this.identifier).debug(`[V2 FSM] ${c}: ${l} -> ${u}`, y);
        }
        n = s.kind, s.target === "connection" && s.kind === "connection_stabilized" && (this.consecutiveStreamableHttpSession404Count = 0), i !== a.connectionState && (this.activities.reconcile(i, a.connectionState, (p) => this.enqueue(p)), this.activities.reconcileServices(i, a.connectionState, (p) => this.enqueue(p), this.serviceStarter));
      }
      e !== void 0 && this.hasStatusChanged(e) && (this.lastStatus = e, this.callbacks.onStatusChanged(this.identifier, e), (t.type !== this.connectionState.type || r.type !== this.authState.type) && Qt("mcp.ext.fsm_transitions", 1, "increment", [`conn_before:${t.type}`, `conn_after:${this.connectionState.type}`, `auth_before:${r.type}`, `auth_after:${this.authState.type}`, `event:${n ?? "unknown"}`, `transport:${this.actualTransportType ?? this.serverInfo.type}`])), this.draining = false;
    }
    createServiceStarter() {
      return (e, t) => {
        switch (e) {
          case "connection_attempt":
            return this.startConnectionService(t);
          case "health_probe":
            return this.startHealthProbeService(t);
          default:
            return e;
        }
      };
    }
    startConnectionService(e) {
      let t = false;
      const r = new Gm(this.identifier), n = this.runConnectionAttempt(() => t, e, r).finally(() => {
        this.activeConnectionAttempt === r && (this.activeConnectionAttempt = void 0);
      });
      return { handle: { cancel: () => {
        t = true, r.requestClose("cancel");
      } }, promise: n };
    }
    async runConnectionAttempt(e, t, r) {
      const n = Date.now(), s = this.reconnectSessionInfo, i = this.adapter;
      if (this.activeRuntimeAuthEventSink = void 0, e()) return;
      if (this.omitReconnectSessionCaptureForNextAttempt && !this.serverInstance && (this.omitReconnectSessionCaptureForNextAttempt = false, this.reconnectSessionInfo = void 0), this.serverInstance) {
        this.nullifyCallbacks();
        const p = this.omitReconnectSessionCaptureForNextAttempt;
        p && (this.omitReconnectSessionCaptureForNextAttempt = false), p || this.captureReconnectSessionInfo(this.serverInstance);
        try {
          this.serverInstance.client.close();
        } catch (g) {
          J(this.identifier).debug(`Error closing client during reconnect: ${g instanceof Error ? g.message : String(g)}`);
        }
        this.serverInstance = void 0, p && (this.reconnectSessionInfo = void 0);
      }
      for (const [p, g] of this.pendingElicitationRequests.entries()) this.pendingElicitationRequests.delete(p), g({ action: "cancel" });
      const o = ++this.clientGeneration;
      let a = this.createConnectionAttemptAuthEventSink(), c = this.createSdkClient();
      r.setClient(c), this.activeConnectionAttempt = r;
      const l = this.actualTransportType !== "streamableHttp";
      let u;
      try {
        u = await tu(this.identifier, this.serverInfo, c, this.host, a, this.reconnectSessionInfo, { allowDeprecatedSseFallback: l });
      } catch (p) {
        const g = p instanceof Error ? p : new Error(String(p));
        u = { connectResult: { ok: false, error: g.message, isRetryable: qe(g, this.serverInfo.type).retryable } };
      }
      if (!u.connectResult.ok && PE(u.connectResult)) {
        this.reconnectSessionInfo = void 0, J(this.identifier).info("Streamable HTTP reconnect: retrying connection with fresh initialize (no cached session id)");
        try {
          await r.closeCurrent("session-reuse-retry");
        } catch {
        }
        if (e()) return;
        c = this.createSdkClient(), r.setClient(c), a = this.createConnectionAttemptAuthEventSink();
        try {
          u = await tu(this.identifier, this.serverInfo, c, this.host, a, void 0, { allowDeprecatedSseFallback: l });
        } catch (p) {
          const g = p instanceof Error ? p : new Error(String(p));
          u = { connectResult: { ok: false, error: g.message, isRetryable: qe(g, this.serverInfo.type).retryable } };
        }
      }
      if (e()) {
        await r.requestClose("cancelled-after-connect");
        return;
      }
      const d = u.connectResult, f = [];
      for (const p of a.getConnectPhaseEvents()) p.target === "auth" && p.kind === "auth_required" || f.push(p);
      if (d.ok) J(this.identifier).info(`Successfully connected to ${d.actualType} server`), this.actualTransportType = d.actualType, this.serverInstance = { transport: d.transport, client: d.client, type: d.actualType, serverInfo: this.serverInfo }, r.commit(c), this.reconnectSessionInfo = void 0, this.wireTransportCallbacks(c, o), this.activateRuntimeAuthEventSinkIfEligible(a), s && i ? (i.client = c, i.invalidateToolsCacheKeepingStale(), i.invalidateInstructionsCacheKeepingStale(), i.invalidateResourcesCacheKeepingStale(), this.adapter = i, this.callbacks.onAdapterCreated(this.identifier, i)) : this.createAndRegisterAdapter(c), this.subscribeToResourcesIfSupported(c), vs({ durationMs: Date.now() - n, status: "success", transport: d.actualType, commandsVersion: "v2" }), f.push({ target: "connection", kind: "connect_success" });
      else if (d.needsAuth) {
        const p = { authUrl: mf(d.authorizationUrl, { includePath: false }) };
        J(this.identifier).info("MCP OAuth needsAuth (v2)", om({ event: "mcp_oauth_needs_auth_transition", commandsVersion: "v2", transportType: this.serverInfo.type, needsAuthReason: d.needsAuthReason, refreshTokenPresent: d.refreshTokenPresent, hadAuthRequiredEvent: d.hadAuthRequiredEvent, authorizationUrlPresent: !!d.authorizationUrl, siblingRefreshRace: !!d.oauthRefreshDiagnostics?.siblingRefreshRace, ...d.oauthRefreshDiagnostics ?? {}, ...p })), vs({ durationMs: Date.now() - n, status: "needs_auth", transport: this.serverInfo.type, commandsVersion: "v2", failureReason: "auth", retryable: true }), d.transport && (this.serverInstance = { transport: d.transport, client: c, type: this.serverInfo.type === "stdio" ? "stdio" : this.serverInfo.type === "sse" ? "sse" : "streamableHttp", serverInfo: this.serverInfo }, r.commit(c), this.wireTransportCallbacks(c, o), this.activateRuntimeAuthEventSinkIfEligible(a)), f.push({ target: "connection", kind: "connect_failure", error: "Authorization required", isRetryable: true }, { target: "auth", kind: "auth_required", authorizationUrl: d.authorizationUrl });
      } else {
        await r.closeCurrent("connect-failure");
        const p = new Error(d.error), g = qe(p, this.serverInfo.type);
        ln(p, this.serverInfo.type) && (this.reconnectSessionInfo = void 0);
        let _ = d.isRetryable ?? g.retryable;
        if (this.serverInfo.type === "streamableHttp") {
          const S = u_(this.getReconnectConfigContext()), v = l_({ currentCount: this.consecutiveStreamableHttpSession404Count, sawSession404: ln(p, "streamableHttp"), threshold: S });
          this.consecutiveStreamableHttpSession404Count = v.nextCount, v.shouldTombstone && (_ = false, J(this.identifier).warn(`Tombstoning streamable HTTP connection after ${S} consecutive session HTTP 404 responses; automatic retry disabled`, { transportType: "streamableHttp" }));
        }
        const y = { ...g, retryable: _ }, m = Date.now() - n, A = { transportType: this.serverInfo.type, reason: y.reason, httpStatus: y.httpStatus, retryable: y.retryable, durationMs: m };
        y.retryable ? J(this.identifier).debug(`Connection failed: ${d.error}`, A) : J(this.identifier).warn(`Connection failed: ${d.error}`, A), Qi({ identifier: this.identifier, phase: "connection", error: p, serverType: this.serverInfo.type, classification: y, captureException: !y.retryable && y.reason !== "auth", extraData: { transport: this.serverInfo.type } }), vs({ durationMs: Date.now() - n, status: "error", transport: this.serverInfo.type, commandsVersion: "v2", failureReason: y.reason, retryable: y.retryable, httpStatusCode: y.httpStatus }), f.push({ target: "connection", kind: "connect_failure", error: d.error, isRetryable: _ });
      }
      t(f);
    }
    createConnectionAttemptAuthEventSink() {
      return new Wm((e, t) => this.handleRuntimeAuthEvent(e, t));
    }
    isLazyAuthServer() {
      return this.serverInfo.type === "stdio" ? false : Im(this.serverInfo.serverUrl);
    }
    activateRuntimeAuthEventSinkIfEligible(e) {
      this.isLazyAuthServer() && (this.activeRuntimeAuthEventSink = e);
    }
    handleRuntimeAuthEvent(e, t) {
      if (!this.disposed) {
        if (this.activeRuntimeAuthEventSink !== e) {
          J(this.identifier).debug(`Ignoring runtime auth event '${t.kind}' from a superseded or ineligible connection attempt`);
          return;
        }
        J(this.identifier).info(`Dispatching runtime auth event '${t.kind}' to FSM`, om({ event: "mcp_runtime_auth_event", commandsVersion: "v2", transportType: this.actualTransportType ?? this.serverInfo.type, kind: t.kind, ...t.kind === "auth_required" ? { authUrl: mf(t.authorizationUrl, { includePath: false }) } : {} })), this.enqueue([t]);
      }
    }
    wireTransportCallbacks(e, t) {
      e.onerror = (r) => {
        if (this.clientGeneration !== t) {
          J(this.identifier).debug(`Ignoring stale onerror callback (gen=${t}, current=${this.clientGeneration})`);
          return;
        }
        if (this.probeInFlightCount > 0) {
          const i = Ot(r);
          if (i === 429 || i === 503) return;
        }
        const n = this.actualTransportType ?? this.serverInfo.type, s = AE(r, { authState: this.authState, transportType: n });
        if (s.length > 0) {
          const i = qe(r, n), o = this.serverInfo.type === "streamableHttp" && s.some((l) => l.target === "connection" && l.kind === "session_invalidated") && ln(r, "streamableHttp");
          if (this.serverInfo.type === "streamableHttp") {
            const l = u_(this.getReconnectConfigContext()), u = l_({ currentCount: this.consecutiveStreamableHttpSession404Count, sawSession404: o, threshold: l });
            if (this.consecutiveStreamableHttpSession404Count = u.nextCount, u.shouldTombstone) {
              this.omitReconnectSessionCaptureForNextAttempt = true;
              const d = { ...i, retryable: false };
              J(this.identifier).warn(`Tombstoning streamable HTTP transport after ${l} consecutive session HTTP 404 responses; automatic retry disabled`, { transportType: n, reason: i.reason, httpStatus: i.httpStatus, authState: this.authState.type }), J(this.identifier).error(`Client error: ${r.message}`, r, { transportType: n, reason: d.reason, httpStatus: d.httpStatus, retryable: false, authState: this.authState.type }), Qi({ identifier: this.identifier, phase: "transport", error: r, serverType: n, classification: d, captureException: !d.retryable && d.reason !== "auth" }), this.enqueue([{ target: "connection", kind: "transport_error", error: r.message, isRetryable: false }]);
              return;
            }
          }
          const a = { transportType: n, reason: i.reason, httpStatus: i.httpStatus, retryable: i.retryable, authState: this.authState.type }, c = wE(r, n, i);
          c === "warn" ? J(this.identifier).error(`Client error: ${r.message}`, r, a) : c === "debug" && J(this.identifier).debug(`Client error: ${r.message}`, a), Qi({ identifier: this.identifier, phase: "transport", error: r, serverType: n, classification: i, captureException: !i.retryable && i.reason !== "auth" }), s.some((l) => l.target === "connection" && l.kind === "session_invalidated") && (this.omitReconnectSessionCaptureForNextAttempt = true), this.enqueue(s);
        }
      }, e.onclose = () => {
        if (this.clientGeneration !== t) {
          J(this.identifier).debug(`Ignoring stale onclose callback (gen=${t}, current=${this.clientGeneration})`);
          return;
        }
        const r = this.actualTransportType ?? this.serverInfo.type, n = RE({ authState: this.authState, transportType: r });
        n.length > 0 && (J(this.identifier).debug("Client closed", { transportType: r, authState: this.authState.type }), this.enqueue(n));
      };
    }
    createSdkClient() {
      const e = { elicitation: { form: {} }, roots: { listChanged: false }, extensions: { "io.modelcontextprotocol/ui": { mimeTypes: ["text/html;profile=mcp-app"] } } }, t = new b8({ name: "cursor-vscode", version: "1.0.0" }, { capabilities: e });
      return t.setRequestHandler(E8, (r) => (J(this.identifier).debug("ListRootsRequest received"), { roots: this.host.getWorkspaceFolders().map((n) => ({ uri: n.uri.toString(), name: n.name })) })), t.setNotificationHandler(k8, (r) => {
        J(this.identifier).debug("ToolListChangedNotification received"), this.adapter?.invalidateToolsCache(), this.callbacks.onOfferingsChanged?.(this.identifier);
      }), t.setNotificationHandler(R8, (r) => {
        J(this.identifier).debug("ResourceListChangedNotification received"), this.adapter?.invalidateResourcesCache(), this.callbacks.onOfferingsChanged?.(this.identifier);
      }), t.setNotificationHandler(T8, (r) => {
        J(this.identifier).debug(`ResourceUpdatedNotification received for URI: ${r.params?.uri}`), this.adapter?.invalidateResourcesCache(), this.callbacks.onOfferingsChanged?.(this.identifier);
      }), t.setNotificationHandler(A8, () => {
        J(this.identifier).debug("PromptListChangedNotification received"), this.callbacks.onOfferingsChanged?.(this.identifier);
      }), t.setRequestHandler(w8, async (r) => {
        J(this.identifier).debug(`ElicitRequest received: ${r.params.message}`);
        const n = r.params, s = "requestedSchema" in n, i = this.currentElicitationProvider.get(this.identifier);
        if (i && s) try {
          const o = await i.elicit({ message: n.message, requestedSchema: n.requestedSchema });
          return { action: o.action, content: o.content };
        } catch (o) {
          return J(this.identifier).error(`Error in elicitation provider: ${o instanceof Error ? o.message : String(o)}`, o instanceof Error ? o : void 0), { action: "decline" };
        }
        return new Promise((o) => {
          const a = `${this.identifier}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, c = this.currentToolCallContext.get(this.identifier), l = { id: a, message: n.message, ...s ? { requestedSchema: n.requestedSchema } : { url: n.url, elicitationId: n.elicitationId }, serverIdentifier: this.identifier, toolCallId: c };
          this.pendingElicitationRequests.set(a, o), this.host.executeCommand("mcp.elicitationRequest", { request: l });
        });
      }), t;
    }
    createAndRegisterAdapter(e) {
      const t = this.serverName ?? this.stripIdentifierPrefix(this.identifier);
      let r;
      this.serverInfo.type === "streamableHttp" || this.serverInfo.type === "sse" ? r = { url: this.serverInfo.serverUrl, headers: this.serverInfo.headers } : this.serverInfo.type === "stdio" && (r = { command: this.serverInfo.command, args: this.serverInfo.args, env: this.serverInfo.env });
      const n = { executeCommand: (s, ...i) => this.host.executeCommand(s, ...i), getStatus: () => this.lastStatus, getAuthState: () => this.authState, getServerInfo: () => this.serverInfo, dispatchEvents: (s, i, o) => this.enqueue(i), reinitializeStreamableHttpConnection: (s, i, o) => this.handleSessionReinit(o), toolNameMap: this.toolNameMap, currentElicitationProvider: this.currentElicitationProvider, currentToolCallContext: this.currentToolCallContext, getInlineReconnectCooldownMs: () => kw(this.getReconnectConfigContext()) };
      this.adapter = new Kl(e, t, this.identifier, n, r), this.callbacks.onAdapterCreated(this.identifier, this.adapter);
    }
    async handleSessionReinit(e) {
      await this.withReconnectLock(async () => {
        let t = this.reconnectSessionInfo;
        if (this.serverInstance) {
          this.captureReconnectSessionInfo(this.serverInstance), t = this.reconnectSessionInfo, this.nullifyCallbacks();
          try {
            this.serverInstance.client.close();
          } catch (s) {
            J(this.identifier).debug(`Error closing client during session reinit: ${s instanceof Error ? s.message : String(s)}`);
          }
          this.serverInstance = void 0;
        }
        for (const [s, i] of this.pendingElicitationRequests.entries()) this.pendingElicitationRequests.delete(s), i({ action: "cancel" });
        let r = this.connectionState.type === "connecting" && this.serverInstance === void 0 ? this.getConnectPromise() : void 0;
        if (r || (this.reconnectSessionInfo = void 0, this.omitReconnectSessionCaptureForNextAttempt = true, this.enqueue([{ target: "connection", kind: "session_invalidated" }]), r = this.getConnectPromise()), !r) throw new Error("Failed to start MCP session reinitialization");
        await r;
        const n = this.serverInstance;
        if (!n) throw this.reconnectSessionInfo = t, new Error(this.getSessionReinitFailureMessage());
        e != null && (e.client = n.client, e.invalidateToolsCacheKeepingStale(), e.invalidateInstructionsCacheKeepingStale(), e.invalidateResourcesCacheKeepingStale(), this.adapter = e, this.callbacks.onAdapterCreated(this.identifier, e));
      });
    }
    getAdapter() {
      return this.adapter;
    }
    getServerInstance() {
      return this.serverInstance;
    }
    getConnectionState() {
      return this.connectionState;
    }
    getAuthState() {
      return this.authState;
    }
    getLastStatus() {
      return this.lastStatus;
    }
    getServerInfo() {
      return this.serverInfo;
    }
    getReconnectConfigContext() {
      return { identifier: this.identifier, serverInfo: this.serverInfo };
    }
    shouldSuppressConnectedKeepaliveProbe() {
      return this.serverInfo.type === "stdio" ? false : this.authState.type !== "unknown" || this.serverInfo.auth !== void 0;
    }
    getEventLog() {
      return this.eventLog.getEntries();
    }
    isDisposed() {
      return this.disposed;
    }
    startHealthProbeService(e) {
      let t = false;
      const r = this.runHealthProbe(() => t, e);
      return { handle: { cancel: () => {
        t = true;
      } }, promise: r };
    }
    async runHealthProbe(e, t) {
      const r = this.adapter;
      if (!r) {
        e() || (this.emitFalseConnectedHealthProbeMetric("no adapter"), t([{ target: "connection", kind: "health_probe_failed", error: "no adapter" }]));
        return;
      }
      const n = r.client;
      try {
        this.probeInFlightCount += 1;
        try {
          const s = Hg(this.getReconnectConfigContext());
          await co(n.ping(), s), e() || t([{ target: "connection", kind: "health_probe_succeeded" }]);
          return;
        } catch (s) {
          if (e()) return;
          if (I8(s)) {
            this.emitFalseConnectedHealthProbeMetric(s), t([{ target: "connection", kind: "health_probe_failed", error: s instanceof Error ? s.message : String(s) }]);
            return;
          }
        }
        try {
          const s = Hg(this.getReconnectConfigContext()), i = n.getServerCapabilities() ?? {};
          if (i.tools) await co(n.listTools(), s);
          else if (i.resources) await co(n.listResources(), s);
          else if (i.prompts) await co(n.listPrompts(), s);
          else {
            e() || (this.emitFalseConnectedHealthProbeMetric("ping timeout, no fallback capability"), t([{ target: "connection", kind: "health_probe_failed", error: "ping timeout, no fallback capability" }]));
            return;
          }
          e() || t([{ target: "connection", kind: "health_probe_succeeded" }]);
        } catch (s) {
          if (e()) return;
          this.emitFalseConnectedHealthProbeMetric(s), t([{ target: "connection", kind: "health_probe_failed", error: s instanceof Error ? s.message : String(s) }]);
        }
      } catch (s) {
        J(this.identifier).warn(`Health probe unexpected error: ${s instanceof Error ? s.message : String(s)}`), e() || (this.emitFalseConnectedHealthProbeMetric(s), t([{ target: "connection", kind: "health_probe_failed", error: String(s) }]));
      } finally {
        this.probeInFlightCount = Math.max(0, this.probeInFlightCount - 1);
      }
    }
    emitFalseConnectedHealthProbeMetric(e) {
      if (this.connectionState.type !== "connected") return;
      const t = this.actualTransportType ?? this.serverInfo.type, r = ["outcome:error", `source_state:${this.connectionState.type}`, `transport:${t}`, "commands_version:v2"], n = qe(e, t);
      r.push(`failure_reason:${n.reason}`), r.push(`retryable:${String(n.retryable)}`), n.httpStatus !== void 0 && r.push(`status_code:${String(n.httpStatus)}`), Qt("mcp.ext.health_probe", 1, "increment", r);
    }
    resolveElicitation(e, t) {
      const r = this.pendingElicitationRequests.get(e);
      return r ? (this.pendingElicitationRequests.delete(e), r(t), true) : false;
    }
    nullifyCallbacks() {
      this.serverInstance && (this.serverInstance.client.onclose = void 0, this.serverInstance.client.onerror = void 0);
    }
    captureReconnectSessionInfo(e) {
      if (e.type !== "streamableHttp") {
        this.reconnectSessionInfo = void 0;
        return;
      }
      const t = e.transport, r = t.sessionId;
      if (!r) {
        this.reconnectSessionInfo = void 0;
        return;
      }
      this.reconnectSessionInfo = { sessionId: r, protocolVersion: t.protocolVersion };
    }
    hasStatusChanged(e) {
      const t = this.lastStatus;
      return e.type !== t.type ? true : e.type === "error" && t.type === "error" ? e.error !== t.error || e.isRetryable !== t.isRetryable : e.type === "needsAuth" && t.type === "needsAuth" ? e.authorizationUrl !== t.authorizationUrl : e.type === "degraded" && t.type === "degraded" ? e.reason !== t.reason : false;
    }
    async withReconnectLock(e) {
      const t = this.reconnectLock;
      if (t) {
        await t;
        return;
      }
      const r = e().finally(() => {
        this.reconnectLock === r && (this.reconnectLock = void 0);
      });
      this.reconnectLock = r, await r;
    }
    getSessionReinitFailureMessage() {
      switch (this.lastStatus.type) {
        case "error":
          return this.lastStatus.error;
        case "needsAuth":
          return "Authorization required";
        case "disconnected":
        case "initializing":
        case "connected":
        case "degraded":
          return "Failed to reinitialize MCP session";
        default:
          return this.lastStatus;
      }
    }
    async subscribeToResourcesIfSupported(e) {
      try {
        const t = e.getServerCapabilities() ?? { resources: false };
        if (!t.resources || typeof t.resources != "object" || t.resources.subscribe !== true) return;
        const r = await e.listResources();
        if (!r?.resources?.length) return;
        for (const n of r.resources) try {
          await e.subscribeResource({ uri: n.uri }), this.subscribedResources.add(n.uri);
        } catch (s) {
          J(this.identifier).debug(`Failed to subscribe to resource ${n.uri}: ${s instanceof Error ? s.message : String(s)}`);
        }
        this.subscribedResources.size > 0 && J(this.identifier).info(`Subscribed to ${this.subscribedResources.size} resources`);
      } catch (t) {
        J(this.identifier).debug(`Error subscribing to resources: ${t instanceof Error ? t.message : String(t)}`);
      }
    }
    stripIdentifierPrefix(e) {
      if (e.startsWith("user-")) return e.slice(5);
      if (e.startsWith("project-")) {
        const t = e.indexOf("-"), r = e.indexOf("-", t + 1);
        return r > 0 ? e.slice(r + 1) : e.slice(8);
      }
      return e;
    }
  };
} });
function fn(e, t, r = "distribution") {
  Qt(e, t, r, jm);
}
async function qm(e, t, r, n, s) {
  var i = [];
  try {
    const c = hr(i, _r(e.withName(t)));
    c.span.setAttribute("mcp.lease.connection", xE());
    for (const [u, d] of Object.entries(r)) c.span.setAttribute(u, d);
    const l = Date.now();
    try {
      const u = await n(c.ctx), d = Date.now() - l;
      return c.span.setAttribute("mcp.op.duration_ms", String(d)), c.span.setAttribute("mcp.op.outcome", "success"), s?.(u, c.span, d), u;
    } catch (u) {
      const d = Date.now() - l;
      throw c.span.setAttribute("mcp.op.duration_ms", String(d)), c.span.setAttribute("mcp.op.outcome", "error"), c.span.setAttribute("mcp.op.error", u instanceof Error ? u.message.slice(0, 200) : String(u).slice(0, 200)), u;
    }
  } catch (c) {
    var o = c, a = true;
  } finally {
    fr(i, o, a);
  }
}
function O8(e) {
  return Ii().withName(e);
}
var jm, Vm = k({ "snapshot-metrics.ts"() {
  "use strict";
  h(), Tt(), dn(), jm = ["mcp_version:snapshots"];
} });
function Ym(e) {
  if (!e) return { status: "initializing" };
  switch (e.type) {
    case "connected":
      return { status: "connected" };
    case "degraded":
      return { status: "degraded", statusDetail: e.reason };
    case "disconnected":
      return { status: "disconnected" };
    case "error":
      return { status: "error", statusDetail: e.error, statusRetryable: e.isRetryable };
    case "initializing":
      return { status: "initializing" };
    case "needsAuth":
      return { status: "needsAuth", statusDetail: e.authorizationUrl };
    default:
      return { status: "error", statusDetail: `Unknown status: ${JSON.stringify(e)}` };
  }
}
async function C8(e, t, r, n, s, i) {
  const { status: o, statusDetail: a, statusRetryable: c } = Ym(n);
  if (o === "needsAuth" && i?.preserveOfferingsOnNeedsAuth === true) return { serverIdentifier: t, serverName: r.serverName, status: o, statusDetail: a, statusRetryable: c, tools: s?.tools ?? [], resources: s?.resources ?? [], prompts: s?.prompts ?? [], instructions: s?.instructions };
  const [l, u, d, f] = await qm(e, `fetchServerSnapshot(${t})`, { "mcp.fetch.identifier": t, "mcp.fetch.status": o }, async (m) => Promise.allSettled([r.getTools(m), r.listResources(m), r.listPrompts(m), r.getInstructions(m)]), (m, A, S) => {
    fn("mcp.snapshot.fetch_all_duration_ms", S), A.setAttribute("mcp.fetch.tools_ok", String(m[0].status === "fulfilled")), A.setAttribute("mcp.fetch.resources_ok", String(m[1].status === "fulfilled")), A.setAttribute("mcp.fetch.prompts_ok", String(m[2].status === "fulfilled")), A.setAttribute("mcp.fetch.instructions_ok", String(m[3].status === "fulfilled"));
  });
  l.status === "rejected" && fn("mcp.snapshot.fetch_tools_error", 1, "increment"), u.status === "rejected" && fn("mcp.snapshot.fetch_resources_error", 1, "increment"), d.status === "rejected" && fn("mcp.snapshot.fetch_prompts_error", 1, "increment"), f.status === "rejected" && fn("mcp.snapshot.fetch_instructions_error", 1, "increment");
  const p = l.status === "fulfilled" ? l.value : s?.tools ?? [], g = u.status === "fulfilled" ? u.value.resources : s?.resources ?? [], _ = d.status === "fulfilled" ? d.value : s?.prompts ?? [], y = f.status === "fulfilled" ? f.value : s?.instructions;
  return { serverIdentifier: t, serverName: r.serverName, status: o, statusDetail: a, statusRetryable: c, tools: p, resources: g, prompts: _, instructions: y };
}
var L8 = k({ "snapshot-fetch.ts"() {
  "use strict";
  h(), Vm();
} }), Xm = {};
Rh(Xm, { Client: () => x8, ClientToMcpClientAdapter: () => Kl, FOCUS_RETRY_MINIMUM_COOLDOWN_MS: () => ps, MCP_OAUTH_HOSTED_LOOPBACK_CALLBACK_GATE: () => nu, ServerLifecycle: () => Km, buildIdeMcpHttpExchangeLogging: () => to, buildMcpOAuthHttpExchangeLogging: () => Fl, clearRetryAfterCooldown: () => FE, createIdeLoggedFetch: () => _s, createIdeLoggedMcpHttpFetch: () => vm, createLoggedCursorMcpFetch: () => mm, createMcpOAuthLoggedFetch: () => Hl, createRetryAfterAwareFetch: () => gm, createTransport: () => tu, emitConnectionMetric: () => vs, emitSnapshotMetric: () => fn, emitV1ConnectionMetric: () => Rm, expandPath: () => io, fetchServerSnapshot: () => C8, getConnectivityRecoveryDebounceMs: () => i_, getConnectivityRecoveryEnabled: () => o_, getConnectivityRecoveryPolicy: () => Iw, getConnectivityRecoveryRetryCooldownMs: () => Qg, getFastRetryMaxAttempts: () => t_, getFocusRetryCooldownMs: () => $g, getMaxDegradedProbeFailures: () => Bg, getMaxPeriodicCycles: () => r_, getMcpLifecycleOAuthClientProviderFactory: () => LE, getMcpReconnectConfigValue: () => be, getNetworkResumeReconnectDebounceMs: () => s_, getNetworkResumeReconnectEnabled: () => n_, getRetryAfterCooldownDelayMs: () => $l, getStabilityThresholdMs: () => zi, isNonRetryablePeriodicFailureState: () => wl, isWithinFocusRetryCooldown: () => Fg, mapMcpStatusToSnapshot: () => Ym, requireMcpLifecycleOAuthClientProviderFactory: () => im, setMcpLifecycleOAuthClientProviderFactory: () => CE, setMcpReconnectConfigFromStatsig: () => Dg, shouldFastTrackReconnectOnConnectivityRecovery: () => El, shouldProbeOnConnectivityRecovery: () => Zg, shouldReconnectExistingLifecycle: () => Pw, shouldUseMcpOAuthHostedCallback: () => Dm, shouldUseMcpOAuthLoopbackRedirect: () => Jl, snapshotRootCtx: () => O8, summarizeListOfferingsForUIResult: () => km, tracedSnapshotOp: () => qm });
import { Client as x8 } from "@modelcontextprotocol/sdk/client/index.js";
var Jm = k({ "lifecycle.ts"() {
  h(), Sl(), nn(), e_(), ot(), Al(), f_(), Am(), Tm(), Bl(), xl(), JE(), eo(), P8(), L8(), Vm(), su();
} });
h(), h();
import * as pn from "@sentry/node";
h(), h();
var Zm = { extensionIsDev: false, developmentTooling: false, enableTraceSpanCollection: true, enableEmbeddingsModelToggle: false, enableCPPControlTokenToggle: false, cursorPredictionOptions: false, localMode: false }, M8 = "https://80ec2259ebfad12d8aa2afe6eb4f6dd5@metrics.cursor.sh/4508016051945472", D8 = "https://0a7b82d23ca5f4635708bc8e9957e4bd@o4504648565915648.ingest.us.sentry.io/4509635758522369";
function er() {
  return globalThis._CURSOR_SENTRY;
}
function N8() {
  return { send: function(t) {
    const r = er().buffer;
    return r.length < 64 && r.push(t), Promise.resolve({ statusCode: 200 });
  }, flush: function(t) {
    return Promise.resolve(true);
  } };
}
function U8() {
  return { send: function(e) {
    return er().transport.send(e);
  }, flush: function(e) {
    return er().transport.flush(e);
  } };
}
function $8() {
  return { defaultIntegrations: [], dsn: Zm.developmentTooling ? D8 : M8, maxBreadcrumbs: 200, transport: U8 };
}
globalThis._CURSOR_SENTRY === void 0 && (globalThis._CURSOR_SENTRY = { buffer: [], enabled: true, allowCrashReportsWhenDisabled: false, loggerSampleRate: 1, sentry: void 0, trace2SampleRate: Zm.developmentTooling ? 1 : 0.01, internalSampleRate: 1, profilesSampleRate: 0, jsonStringifySampleRate: 0, replaysSessionSampleRate: 0, isInternalUser: false, transport: N8() });
function F8() {
  try {
    pn.init({ ...$8(), integrations: [pn.eventFiltersIntegration(), pn.functionToStringIntegration(), pn.linkedErrorsIntegration(), pn.dedupeIntegration()] }), er().sentry = pn;
  } catch (e) {
    console.error("Failed to initialize tracing in shared process", e);
  }
}
F8(), h(), h(), h();
function H8(e, t, r = 0, n = e.length) {
  let s = r, i = n;
  for (; s < i; ) {
    const o = Math.floor((s + i) / 2);
    t(e[o]) ? s = o + 1 : i = o;
  }
  return s - 1;
}
var B8 = class f2 {
  constructor(t) {
    this._array = t, this._findLastMonotonousLastIdx = 0;
  }
  findLastMonotonous(t) {
    if (f2.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (const n of this._array) if (this._prevFindLastPredicate(n) && !t(n)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
      }
      this._prevFindLastPredicate = t;
    }
    const r = H8(this._array, t, this._findLastMonotonousLastIdx);
    return this._findLastMonotonousLastIdx = r + 1, r === -1 ? void 0 : this._array[r];
  }
};
B8.assertInvariants = false, h();
var z8 = class {
  constructor() {
    this.listeners = [], this.unexpectedErrorHandler = function(e) {
      setTimeout(() => {
        throw e.stack ? gn.isErrorNoTelemetry(e) ? new gn(e.message + `

` + e.stack) : new Error(e.message + `

` + e.stack) : e;
      }, 0);
    };
  }
  addListener(e) {
    return this.listeners.push(e), () => {
      this._removeListener(e);
    };
  }
  emit(e) {
    this.listeners.forEach((t) => {
      t(e);
    });
  }
  _removeListener(e) {
    this.listeners.splice(this.listeners.indexOf(e), 1);
  }
  setUnexpectedErrorHandler(e) {
    this.unexpectedErrorHandler = e;
  }
  getUnexpectedErrorHandler() {
    return this.unexpectedErrorHandler;
  }
  onUnexpectedError(e) {
    this.unexpectedErrorHandler(e), this.emit(e);
  }
  onUnexpectedExternalError(e) {
    this.unexpectedErrorHandler(e);
  }
}, Qm = new z8();
function W8(e) {
  Qm.setUnexpectedErrorHandler(e);
}
function Ct(e) {
  e0(e) || Qm.onUnexpectedError(e);
}
var iu = "Canceled";
function e0(e) {
  return e instanceof yr ? true : e instanceof Error && e.name === iu && e.message === iu;
}
var yr = class extends Error {
  constructor() {
    if (super(iu), this.name = this.message, j8 && typeof console < "u" && q8()) {
      const e = new Error().stack ?? "";
      G8.some((t) => e.includes(t)) && console.trace("[DebugCancellation] CancellationError created");
    }
  }
};
function t0(e) {
  return e ? new Error(`Illegal state: ${e}`) : new Error("Illegal state");
}
var gn = class ih extends Error {
  constructor(t) {
    super(t), this.name = "CodeExpectedError";
  }
  static fromError(t) {
    if (t instanceof ih) return t;
    const r = new ih();
    return r.message = t.message, r.stack = t.stack, r;
  }
  static isErrorNoTelemetry(t) {
    return t.name === "CodeExpectedError";
  }
}, G8 = ["composerChatService", "composerService", "composerUtilsService", "composerAgentService", "composerCapabilities", "composerDecisionsService", "aiServiceImpl", "toolsV2Service", "toolsV2HandlerRegistryService", "agentCompatService", "mockAgentStreamController", "mockComposerStreamController", "toolFormer", "ToolFormer", "tool", "agent", "Agent", "stream", "Stream", "ComposerFullInputBox", "composerActions", "cancelAll", "abortChatAndWaitForFinish", "abortGenerationUUID"], K8 = 5e3, r0 = 0;
function q8() {
  const e = Date.now();
  return e < r0 ? false : (r0 = e + K8, true);
}
var j8 = false;
function V8(e) {
  return e.filter((t) => !!t);
}
function Y8(e) {
  return e[Math.floor(Math.random() * e.length)];
}
var ou;
((e) => {
  function t(i) {
    return i < 0;
  }
  e.isLessThan = t;
  function r(i) {
    return i <= 0;
  }
  e.isLessThanOrEqual = r;
  function n(i) {
    return i > 0;
  }
  e.isGreaterThan = n;
  function s(i) {
    return i === 0;
  }
  e.isNeitherLessOrGreaterThan = s, e.greaterThan = 1, e.lessThan = -1, e.neitherLessOrGreaterThan = 0;
})(ou || (ou = {}));
function X8(e, t) {
  return (r, n) => t(e(r), e(n));
}
var J8 = (e, t) => e - t, n0 = class oh {
  constructor(t) {
    this.iterate = t;
  }
  forEach(t) {
    this.iterate((r) => (t(r), true));
  }
  toArray() {
    const t = [];
    return this.iterate((r) => (t.push(r), true)), t;
  }
  filter(t) {
    return new oh((r) => this.iterate((n) => t(n) ? r(n) : true));
  }
  map(t) {
    return new oh((r) => this.iterate((n) => r(t(n))));
  }
  some(t) {
    let r = false;
    return this.iterate((n) => (r = t(n), !r)), r;
  }
  findFirst(t) {
    let r;
    return this.iterate((n) => t(n) ? (r = n, false) : true), r;
  }
  findLast(t) {
    let r;
    return this.iterate((n) => (t(n) && (r = n), true)), r;
  }
  findLastMaxBy(t) {
    let r, n = true;
    return this.iterate((s) => ((n || ou.isGreaterThan(t(s, r))) && (n = false, r = s), true)), r;
  }
};
n0.empty = new n0((e) => {
}), h(), h();
function lo(e) {
  return typeof e == "string";
}
function Z8(e) {
  return typeof e == "number" && !isNaN(e);
}
function Q8(e) {
  return !!e && typeof e[Symbol.iterator] == "function";
}
function e6(e) {
  return typeof e > "u";
}
function t6(e) {
  return e6(e) || e === null;
}
function r6(e, t) {
  if (!e) throw new Error(t ? `Unexpected type, expected '${t}'` : "Unexpected type");
}
function s0(e) {
  return typeof e == "function";
}
h(), h();
function n6() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function i0() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
var s6 = i0() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;
function o0(e, t) {
  let r;
  return t.length === 0 ? r = e : r = e.replace(/\{(\d+)\}/g, (n, s) => {
    const i = parseInt(s, 10), o = t[i];
    let a = n;
    return typeof o == "string" ? a = o : (typeof o == "number" || typeof o == "boolean" || o === void 0 || o === null) && (a = String(o)), a;
  }), s6 && (r = "［" + r.replace(/[aouei]/g, "$&$&") + "］"), r;
}
function we(e, t, ...r) {
  return o0(typeof e == "number" ? i6(e, t) : t, r);
}
function i6(e, t) {
  const r = n6()?.[e];
  if (typeof r != "string") {
    if (typeof t == "string") return t;
    throw new Error(`!!! NLS MISSING: ${e} !!!`);
  }
  return r;
}
function au(e, t) {
  return t && (e.stack || e.stacktrace) ? we(108, null, c0(e), a0(e.stack) || a0(e.stacktrace)) : c0(e);
}
function a0(e) {
  return Array.isArray(e) ? e.join(`
`) : e;
}
function c0(e) {
  return e.code === "ERR_UNC_HOST_NOT_ALLOWED" ? `${e.message}. Please update the 'security.allowedUNCHosts' setting if you want to allow this host.` : typeof e.code == "string" && typeof e.errno == "number" && typeof e.syscall == "string" ? we(109, null, e.message) : e.message || we(110, null);
}
function uo(e = null, t = false) {
  if (!e) return we(111, null);
  if (Array.isArray(e)) {
    const r = V8(e), n = uo(r[0], t);
    return r.length > 1 ? we(112, null, n, r.length) : n;
  }
  if (lo(e)) return e;
  if (e.detail) {
    const r = e.detail;
    if (r.error) return au(r.error, t);
    if (r.exception) return au(r.exception, t);
  }
  return e.stack ? au(e, t) : e.message ? e.message : we(113, null);
}
h(), h();
var l0, u0;
function o6(e, t) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const n of e) {
    const s = t(n);
    let i = r[s];
    i || (i = r[s] = []), i.push(n);
  }
  return r;
}
var DL = class {
  constructor(e, t) {
    this.toKey = t, this._map = /* @__PURE__ */ new Map(), this[l0] = "SetWithKey";
    for (const r of e) this.add(r);
  }
  get size() {
    return this._map.size;
  }
  add(e) {
    const t = this.toKey(e);
    return this._map.set(t, e), this;
  }
  delete(e) {
    return this._map.delete(this.toKey(e));
  }
  has(e) {
    return this._map.has(this.toKey(e));
  }
  *entries() {
    for (const e of this._map.values()) yield [e, e];
  }
  keys() {
    return this.values();
  }
  *values() {
    for (const e of this._map.values()) yield e;
  }
  clear() {
    this._map.clear();
  }
  forEach(e, t) {
    this._map.forEach((r) => e.call(t, r, r, this));
  }
  [(u0 = Symbol.iterator, l0 = Symbol.toStringTag, u0)]() {
    return this.values();
  }
};
h();
var d0, h0, f0, a6 = class {
  constructor(e, t) {
    this.uri = e, this.value = t;
  }
};
function c6(e) {
  return Array.isArray(e);
}
var p0 = class ei {
  constructor(t, r) {
    if (this[d0] = "ResourceMap", t instanceof ei) this.map = new Map(t.map), this.toKey = r ?? ei.defaultToKey;
    else if (c6(t)) {
      this.map = /* @__PURE__ */ new Map(), this.toKey = r ?? ei.defaultToKey;
      for (const [n, s] of t) this.set(n, s);
    } else this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? ei.defaultToKey;
  }
  set(t, r) {
    return this.map.set(this.toKey(t), new a6(t, r)), this;
  }
  get(t) {
    return this.map.get(this.toKey(t))?.value;
  }
  has(t) {
    return this.map.has(this.toKey(t));
  }
  get size() {
    return this.map.size;
  }
  clear() {
    this.map.clear();
  }
  delete(t) {
    return this.map.delete(this.toKey(t));
  }
  forEach(t, r) {
    typeof r < "u" && (t = t.bind(r));
    for (const [n, s] of this.map) t(s.value, s.uri, this);
  }
  *values() {
    for (const t of this.map.values()) yield t.value;
  }
  *keys() {
    for (const t of this.map.values()) yield t.uri;
  }
  *entries() {
    for (const t of this.map.values()) yield [t.uri, t.value];
  }
  *[(d0 = Symbol.toStringTag, Symbol.iterator)]() {
    for (const [, t] of this.map) yield [t.uri, t.value];
  }
};
p0.defaultToKey = (e) => e.toString();
var cu = p0, NL = class {
  constructor(e, t) {
    this[h0] = "ResourceSet", !e || typeof e == "function" ? this._map = new cu(e) : (this._map = new cu(t), e.forEach(this.add, this));
  }
  get size() {
    return this._map.size;
  }
  add(e) {
    return this._map.set(e, e), this;
  }
  clear() {
    this._map.clear();
  }
  delete(e) {
    return this._map.delete(e);
  }
  forEach(e, t) {
    this._map.forEach((r, n) => e.call(t, n, n, this));
  }
  has(e) {
    return this._map.has(e);
  }
  *entries() {
    for (const e of this._map.entries()) yield e;
  }
  *keys() {
    yield* this._map.keys();
  }
  *values() {
    yield* this._map.keys();
  }
  [(h0 = Symbol.toStringTag, Symbol.iterator)]() {
    return this.keys();
  }
}, UL = class {
  constructor() {
    this[f0] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
  }
  clear() {
    this._map.clear(), this._head = void 0, this._tail = void 0, this._size = 0, this._state++;
  }
  isEmpty() {
    return !this._head && !this._tail;
  }
  get size() {
    return this._size;
  }
  get first() {
    return this._head?.value;
  }
  get last() {
    return this._tail?.value;
  }
  has(e) {
    return this._map.has(e);
  }
  get(e, t = 0) {
    const r = this._map.get(e);
    if (r) return t !== 0 && this.touch(r, t), r.value;
  }
  set(e, t, r = 0) {
    let n = this._map.get(e);
    if (n) n.value = t, r !== 0 && this.touch(n, r);
    else {
      switch (n = { key: e, value: t, next: void 0, previous: void 0 }, r) {
        case 0:
          this.addItemLast(n);
          break;
        case 1:
          this.addItemFirst(n);
          break;
        case 2:
          this.addItemLast(n);
          break;
        default:
          this.addItemLast(n);
          break;
      }
      this._map.set(e, n), this._size++;
    }
    return this;
  }
  delete(e) {
    return !!this.remove(e);
  }
  remove(e) {
    const t = this._map.get(e);
    if (t) return this._map.delete(e), this.removeItem(t), this._size--, t.value;
  }
  shift() {
    if (!this._head && !this._tail) return;
    if (!this._head || !this._tail) throw new Error("Invalid list");
    const e = this._head;
    return this._map.delete(e.key), this.removeItem(e), this._size--, e.value;
  }
  forEach(e, t) {
    const r = this._state;
    let n = this._head;
    for (; n; ) {
      if (t ? e.bind(t)(n.value, n.key, this) : e(n.value, n.key, this), this._state !== r) throw new Error("LinkedMap got modified during iteration.");
      n = n.next;
    }
  }
  keys() {
    return this.iterateLinked(this._state, this._head, (e) => e.key);
  }
  values() {
    return this.iterateLinked(this._state, this._head, (e) => e.value);
  }
  entries() {
    return this.iterateLinked(this._state, this._head, (e) => [e.key, e.value]);
  }
  *iterateLinked(e, t, r) {
    for (; ; ) {
      if (this._state !== e) throw new Error("LinkedMap got modified during iteration.");
      if (!t) return;
      const n = r(t);
      t = t.next, yield n;
    }
  }
  [(f0 = Symbol.toStringTag, Symbol.iterator)]() {
    return this.entries();
  }
  trimOld(e) {
    if (e >= this.size) return;
    if (e === 0) {
      this.clear();
      return;
    }
    let t = this._head, r = this.size;
    for (; t && r > e; ) this._map.delete(t.key), t = t.next, r--;
    this._head = t, this._size = r, t && (t.previous = void 0), this._state++;
  }
  trimNew(e) {
    if (e >= this.size) return;
    if (e === 0) {
      this.clear();
      return;
    }
    let t = this._tail, r = this.size;
    for (; t && r > e; ) this._map.delete(t.key), t = t.previous, r--;
    this._tail = t, this._size = r, t && (t.next = void 0), this._state++;
  }
  addItemFirst(e) {
    if (!this._head && !this._tail) this._tail = e;
    else if (this._head) e.next = this._head, this._head.previous = e;
    else throw new Error("Invalid list");
    this._head = e, this._state++;
  }
  addItemLast(e) {
    if (!this._head && !this._tail) this._head = e;
    else if (this._tail) e.previous = this._tail, this._tail.next = e;
    else throw new Error("Invalid list");
    this._tail = e, this._state++;
  }
  removeItem(e) {
    if (e === this._head && e === this._tail) this._head = void 0, this._tail = void 0;
    else if (e === this._head) {
      if (!e.next) throw new Error("Invalid list");
      e.next.previous = void 0, this._head = e.next;
    } else if (e === this._tail) {
      if (!e.previous) throw new Error("Invalid list");
      e.previous.next = void 0, this._tail = e.previous;
    } else {
      const t = e.next, r = e.previous;
      if (!t || !r) throw new Error("Invalid list");
      t.previous = r, r.next = t;
    }
    e.next = void 0, e.previous = void 0, this._state++;
  }
  touch(e, t) {
    if (!this._head || !this._tail) throw new Error("Invalid list");
    if (!(t !== 1 && t !== 2)) {
      if (t === 1) {
        if (e === this._head) return;
        const r = e.next, n = e.previous;
        e === this._tail ? (n.next = void 0, this._tail = n) : (r.previous = n, n.next = r), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
      } else if (t === 2) {
        if (e === this._tail) return;
        const r = e.next, n = e.previous;
        e === this._head ? (r.previous = void 0, this._head = r) : (r.previous = n, n.next = r), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++;
      }
    }
  }
  toJSON() {
    const e = [];
    return this.forEach((t, r) => {
      e.push([r, t]);
    }), e;
  }
  fromJSON(e) {
    this.clear();
    for (const [t, r] of e) this.set(t, r);
  }
}, l6 = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  add(e, t) {
    let r = this.map.get(e);
    r || (r = /* @__PURE__ */ new Set(), this.map.set(e, r)), r.add(t);
  }
  delete(e, t) {
    const r = this.map.get(e);
    r && (r.delete(t), r.size === 0 && this.map.delete(e));
  }
  forEach(e, t) {
    const r = this.map.get(e);
    r && r.forEach(t);
  }
  get(e) {
    const t = this.map.get(e);
    return t || /* @__PURE__ */ new Set();
  }
};
h();
function lu(e, t) {
  const r = this;
  let n = false, s;
  return function() {
    if (n) return s;
    if (n = true, t) try {
      s = e.apply(r, arguments);
    } finally {
      t();
    }
    else s = e.apply(r, arguments);
    return s;
  };
}
h();
var uu;
((e) => {
  function t(b) {
    return b && typeof b == "object" && typeof b[Symbol.iterator] == "function";
  }
  e.is = t;
  const r = Object.freeze([]);
  function n() {
    return r;
  }
  e.empty = n;
  function* s(b) {
    yield b;
  }
  e.single = s;
  function i(b) {
    return t(b) ? b : s(b);
  }
  e.wrap = i;
  function o(b) {
    return b || r;
  }
  e.from = o;
  function* a(b) {
    for (let I = b.length - 1; I >= 0; I--) yield b[I];
  }
  e.reverse = a;
  function c(b) {
    return !b || b[Symbol.iterator]().next().done === true;
  }
  e.isEmpty = c;
  function l(b) {
    return b[Symbol.iterator]().next().value;
  }
  e.first = l;
  function u(b, I) {
    let O = 0;
    for (const M of b) if (I(M, O++)) return true;
    return false;
  }
  e.some = u;
  function d(b, I) {
    for (const O of b) if (I(O)) return O;
  }
  e.find = d;
  function* f(b, I) {
    for (const O of b) I(O) && (yield O);
  }
  e.filter = f;
  function* p(b, I) {
    let O = 0;
    for (const M of b) yield I(M, O++);
  }
  e.map = p;
  function* g(b, I) {
    let O = 0;
    for (const M of b) yield* I(M, O++);
  }
  e.flatMap = g;
  function* _(...b) {
    for (const I of b) Q8(I) ? yield* I : yield I;
  }
  e.concat = _;
  function y(b, I, O) {
    let M = O;
    for (const F of b) M = I(M, F);
    return M;
  }
  e.reduce = y;
  function m(b) {
    let I = 0;
    for (const O of b) I++;
    return I;
  }
  e.length = m;
  function* A(b, I, O = b.length) {
    for (I < -b.length && (I = 0), I < 0 && (I += b.length), O < 0 ? O += b.length : O > b.length && (O = b.length); I < O; I++) yield b[I];
  }
  e.slice = A;
  function S(b, I = Number.POSITIVE_INFINITY) {
    const O = [];
    if (I === 0) return [O, b];
    const M = b[Symbol.iterator]();
    for (let F = 0; F < I; F++) {
      const H = M.next();
      if (H.done) return [O, e.empty()];
      O.push(H.value);
    }
    return [O, { [Symbol.iterator]() {
      return M;
    } }];
  }
  e.consume = S;
  async function v(b) {
    const I = [];
    for await (const O of b) I.push(O);
    return Promise.resolve(I);
  }
  e.asyncToArray = v;
})(uu || (uu = {}));
var g0 = void 0, du = /* @__PURE__ */ new Set(), u6 = 50;
function Ss(e, t) {
  if (tr?.onLifecycleMisuse?.(e, t), !g0) return;
  const r = `${t}\0${e.stack ?? ""}`;
  du.has(r) || du.size >= u6 || (du.add(r), g0(e, t));
}
function _0(e) {
  Ss(e, "disposable_post_dispose_set");
}
var d6 = false, tr = null, h6 = class p2 {
  constructor() {
    this.livingDisposables = /* @__PURE__ */ new Map();
  }
  getDisposableData(t) {
    let r = this.livingDisposables.get(t);
    return r || (r = { parent: null, source: null, isSingleton: false, value: t, idx: p2.idx++ }, this.livingDisposables.set(t, r)), r;
  }
  trackDisposable(t) {
    const r = this.getDisposableData(t);
    r.source || (r.source = new Error().stack);
  }
  setParent(t, r) {
    const n = this.getDisposableData(t);
    n.parent = r;
  }
  markAsDisposed(t) {
    this.livingDisposables.delete(t);
  }
  markAsSingleton(t) {
    this.getDisposableData(t).isSingleton = true;
  }
  getRootParent(t, r) {
    const n = r.get(t);
    if (n) return n;
    const s = t.parent ? this.getRootParent(this.getDisposableData(t.parent), r) : t;
    return r.set(t, s), s;
  }
  getTrackedDisposables() {
    const t = /* @__PURE__ */ new Map();
    return [...this.livingDisposables.entries()].filter(([, n]) => n.source !== null && !this.getRootParent(n, t).isSingleton).flatMap(([n]) => n);
  }
  computeLeakingDisposables(t = 10, r) {
    let n;
    if (r) n = r;
    else {
      const c = /* @__PURE__ */ new Map(), l = [...this.livingDisposables.values()].filter((d) => d.source !== null && !this.getRootParent(d, c).isSingleton);
      if (l.length === 0) return;
      const u = new Set(l.map((d) => d.value));
      if (n = l.filter((d) => !(d.parent && u.has(d.parent))), n.length === 0) throw new Error("There are cyclic diposable chains!");
    }
    if (!n) return;
    function s(c) {
      function l(d, f) {
        for (; d.length > 0 && f.some((p) => typeof p == "string" ? p === d[0] : d[0].match(p)); ) d.shift();
      }
      const u = c.source.split(`
`).map((d) => d.trim().replace("at ", "")).filter((d) => d !== "");
      return l(u, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), u.reverse();
    }
    const i = new l6();
    for (const c of n) {
      const l = s(c);
      for (let u = 0; u <= l.length; u++) i.add(l.slice(0, u).join(`
`), c);
    }
    n.sort(X8((c) => c.idx, J8));
    let o = "", a = 0;
    for (const c of n.slice(0, t)) {
      a++;
      const l = s(c), u = [];
      for (let d = 0; d < l.length; d++) {
        let f = l[d];
        f = `(shared with ${i.get(l.slice(0, d + 1).join(`
`)).size}/${n.length} leaks) at ${f}`;
        const g = i.get(l.slice(0, d).join(`
`)), _ = o6([...g].map((y) => s(y)[d]), (y) => y);
        delete _[l[d]];
        for (const [y, m] of Object.entries(_)) u.unshift(`    - stacktraces of ${m.length} other leaks continue with ${y}`);
        u.unshift(f);
      }
      o += `


==================== Leaking disposable ${a}/${n.length}: ${c.value.constructor.name} ====================
${u.join(`
`)}
============================================================

`;
    }
    return n.length > t && (o += `


... and ${n.length - t} more leaking disposables

`), { leaks: n, details: o };
  }
};
h6.idx = 0;
function f6(e) {
  tr = e;
}
if (d6) {
  const e = "__is_disposable_tracked__";
  f6(new class {
    trackDisposable(t) {
      const r = new Error("Potentially leaked disposable").stack;
      setTimeout(() => {
        t[e] || console.log(r);
      }, 3e3);
    }
    setParent(t, r) {
      if (t && t !== Ce.None) try {
        t[e] = true;
      } catch {
      }
    }
    markAsDisposed(t) {
      if (t && t !== Ce.None) try {
        t[e] = true;
      } catch {
      }
    }
    markAsSingleton(t) {
    }
  }());
}
function ho(e) {
  return tr?.trackDisposable(e), e;
}
function fo(e) {
  tr?.markAsDisposed(e);
}
function bs(e, t) {
  tr?.setParent(e, t);
}
function p6(e, t) {
  if (tr) for (const r of e) tr.setParent(r, t);
}
function m0(e) {
  return tr?.markAsSingleton(e), e;
}
function hu(e) {
  return typeof e == "object" && e !== null && typeof e.dispose == "function" && e.dispose.length === 0;
}
function po(e) {
  if (uu.is(e)) {
    let t;
    for (const r of e) if (r) try {
      r.dispose();
    } catch (n) {
      (t ??= []).push(n);
    }
    if (t !== void 0) throw t.length === 1 ? t[0] : new AggregateError(t, "Encountered errors while disposing of store");
    return Array.isArray(e) ? [] : e;
  } else if (e) return e.dispose(), e;
}
function g6(...e) {
  const t = rr(() => po(e));
  return p6(e, t), t;
}
function rr(e) {
  const t = ho({ dispose: lu(() => {
    fo(t), e();
  }) });
  return t;
}
var v0 = class ah {
  constructor() {
    this._toDispose = /* @__PURE__ */ new Set(), this._isDisposed = false, ho(this);
  }
  dispose() {
    this._isDisposed || (fo(this), this._isDisposed = true, this.clear());
  }
  [Symbol.dispose]() {
    this.dispose();
  }
  get isDisposed() {
    return this._isDisposed;
  }
  has(t) {
    return this._toDispose.has(t);
  }
  get size() {
    return this._toDispose.size;
  }
  clear() {
    if (this._toDispose.size !== 0) try {
      po(this._toDispose);
    } finally {
      this._toDispose.clear();
    }
  }
  add(t) {
    if (!t) return t;
    if (t === this) throw new Error("Cannot register a disposable on itself!");
    if (bs(t, this), this._isDisposed) {
      const r = new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!");
      ah.DISABLE_DISPOSED_WARNING || console.warn(r.stack), _0(r);
    } else this._toDispose.add(t);
    return t;
  }
  delete(t) {
    if (t) {
      if (t === this) throw new Error("Cannot dispose a disposable on itself!");
      this._toDispose.delete(t), t.dispose();
    }
  }
  deleteAndLeak(t) {
    t && this._toDispose.has(t) && (this._toDispose.delete(t), bs(t, null));
  }
  transferOut(t) {
    if (this._isDisposed) {
      const r = new Error("Trying to transfer a disposable out of a DisposableStore that has already been disposed of. The value may already be disposed!");
      ah.DISABLE_DISPOSED_WARNING || console.warn(r.stack), Ss(r, "disposable_use_after_dispose");
    }
    return this.deleteAndLeak(t), t;
  }
};
v0.DISABLE_DISPOSED_WARNING = false;
var Lt = v0, Ce = class {
  constructor() {
    this._store = new Lt(), ho(this), bs(this._store, this);
  }
  dispose() {
    fo(this), this._store.dispose();
  }
  _register(e) {
    if (e === this) throw new Error("Cannot register a disposable on itself!");
    return this._store.add(e);
  }
};
Ce.None = Object.freeze({ dispose() {
} });
var ws = class {
  constructor() {
    this._isDisposed = false, ho(this);
  }
  get value() {
    return this._isDisposed ? void 0 : this._value;
  }
  set value(e) {
    if (this._isDisposed) {
      if (e) {
        const t = new Error("Trying to set a value on a MutableDisposable that has already been disposed of. The value was disposed.");
        Lt.DISABLE_DISPOSED_WARNING || console.warn(t.stack), _0(t), e.dispose();
      }
      return;
    }
    e !== this._value && (this._value?.dispose(), e && bs(e, this), this._value = e);
  }
  clear() {
    this.value = void 0;
  }
  dispose() {
    this._isDisposed = true, fo(this), this._value?.dispose(), this._value = void 0;
  }
  clearAndLeak() {
    const e = this._value;
    return this._value = void 0, e && bs(e, null), e;
  }
};
h(), h();
function _6(e) {
  return !!e.parentPort;
}
h(), h();
var go = class {
  constructor(e) {
    this.executor = e, this._didRun = false;
  }
  get hasValue() {
    return this._didRun;
  }
  get value() {
    if (!this._didRun) try {
      this._value = this.executor();
    } catch (e) {
      this._error = e;
    } finally {
      this._didRun = true;
    }
    if (this._error) throw this._error;
    return this._value;
  }
  get rawValue() {
    return this._value;
  }
};
h();
var Es = typeof Buffer < "u", m6 = new go(() => new Uint8Array(256)), _n, fu, v6 = 512 * 1024, Sr = null, pu = false, y0 = false, y6 = 1 / 0, S0, S6 = 1 / 0, b0;
function w0(e, t) {
  if (b0 && e.byteLength >= S6) try {
    b0({ buffer: e, byteLength: e.byteLength, source: t });
  } catch {
  }
}
var We = class Fe {
  static alloc(t) {
    let r;
    return Es ? r = new Fe(Buffer.allocUnsafe(t)) : r = new Fe(new Uint8Array(t)), w0(r, "alloc"), r;
  }
  static wrap(t) {
    Es && !Buffer.isBuffer(t) && (t = Buffer.from(t.buffer, t.byteOffset, t.byteLength));
    const r = new Fe(t);
    return w0(r, "wrap"), r;
  }
  static fromString(t, r) {
    return !(r?.dontUseNodeBuffer || false) && Es ? new Fe(Buffer.from(t)) : (_n || (_n = new TextEncoder()), new Fe(_n.encode(t)));
  }
  static withPooledString(t, r) {
    if (Es) return r(Fe.fromString(t));
    if (pu) return y0 || (y0 = true, console.warn("VSBuffer.withPooledString: nested call while the pooled scratch is in use; falling back to a fresh allocation. Restructure the caller to avoid nesting.")), r(Fe.fromString(t));
    const n = t.length * 3;
    if (n > v6) return r(Fe.fromString(t));
    if (_n || (_n = new TextEncoder()), !Sr || Sr.byteLength < n) {
      let i = Sr ? Sr.byteLength * 2 : 16384;
      for (; i < n; ) i *= 2;
      Sr = new Uint8Array(i);
    }
    const s = _n.encodeInto(t, Sr).written;
    pu = true;
    try {
      return r(new Fe(Sr.subarray(0, s)));
    } finally {
      pu = false;
    }
  }
  static fromByteArray(t) {
    const r = Fe.alloc(t.length);
    for (let n = 0, s = t.length; n < s; n++) r.buffer[n] = t[n];
    return r;
  }
  static concat(t, r) {
    if (typeof r > "u") {
      r = 0;
      for (let i = 0, o = t.length; i < o; i++) r += t[i].byteLength;
    }
    const n = Fe.alloc(r);
    let s = 0;
    for (let i = 0, o = t.length; i < o; i++) {
      const a = t[i];
      n.set(a, s), s += a.byteLength;
    }
    return n;
  }
  constructor(t) {
    this.buffer = t, this.byteLength = this.buffer.byteLength;
  }
  clone() {
    const t = Fe.alloc(this.byteLength);
    return t.set(this), t;
  }
  toString() {
    if (Es) return this.buffer.toString();
    if (S0 && this.buffer.byteLength > y6) try {
      S0(this.buffer.byteLength);
    } catch {
    }
    return fu || (fu = new TextDecoder()), fu.decode(this.buffer);
  }
  slice(t, r) {
    return new Fe(this.buffer.subarray(t, r));
  }
  set(t, r) {
    if (t instanceof Fe) this.buffer.set(t.buffer, r);
    else if (t instanceof Uint8Array) this.buffer.set(t, r);
    else if (t instanceof ArrayBuffer) this.buffer.set(new Uint8Array(t), r);
    else if (ArrayBuffer.isView(t)) this.buffer.set(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), r);
    else throw new Error("Unknown argument 'array'");
  }
  readUInt32BE(t) {
    return w6(this.buffer, t);
  }
  writeUInt32BE(t, r) {
    E6(this.buffer, t, r);
  }
  readUInt32LE(t) {
    return A6(this.buffer, t);
  }
  writeUInt32LE(t, r) {
    R6(this.buffer, t, r);
  }
  readUInt8(t) {
    return T6(this.buffer, t);
  }
  writeUInt8(t, r) {
    k6(this.buffer, t, r);
  }
  indexOf(t, r = 0) {
    return b6(this.buffer, t instanceof Fe ? t.buffer : t, r);
  }
  equals(t) {
    return this === t ? true : this.byteLength !== t.byteLength ? false : this.buffer.every((r, n) => r === t.buffer[n]);
  }
};
function b6(e, t, r = 0) {
  const n = t.byteLength, s = e.byteLength;
  if (n === 0) return 0;
  if (n === 1) return e.indexOf(t[0]);
  if (n > s - r) return -1;
  const i = m6.value;
  i.fill(t.length);
  for (let l = 0; l < t.length; l++) i[t[l]] = t.length - l - 1;
  let o = r + t.length - 1, a = o, c = -1;
  for (; o < s; ) if (e[o] === t[a]) {
    if (a === 0) {
      c = o;
      break;
    }
    o--, a--;
  } else o += Math.max(t.length - a, i[e[o]]), a = t.length - 1;
  return c;
}
function w6(e, t) {
  return e[t] * 2 ** 24 + e[t + 1] * 2 ** 16 + e[t + 2] * 2 ** 8 + e[t + 3];
}
function E6(e, t, r) {
  e[r + 3] = t, t = t >>> 8, e[r + 2] = t, t = t >>> 8, e[r + 1] = t, t = t >>> 8, e[r] = t;
}
function A6(e, t) {
  return e[t + 0] << 0 >>> 0 | e[t + 1] << 8 >>> 0 | e[t + 2] << 16 >>> 0 | e[t + 3] << 24 >>> 0;
}
function R6(e, t, r) {
  e[r + 0] = t & 255, t = t >>> 8, e[r + 1] = t & 255, t = t >>> 8, e[r + 2] = t & 255, t = t >>> 8, e[r + 3] = t & 255;
}
function T6(e, t) {
  return e[t];
}
function k6(e, t, r) {
  e[r] = t;
}
var I6 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", P6 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function O6({ buffer: e }, t = true, r = false) {
  const n = e.toBase64;
  if (typeof n == "function") return n.call(e, { alphabet: r ? "base64url" : "base64", omitPadding: !t });
  const s = r ? P6 : I6;
  let i = "";
  const o = e.byteLength % 3;
  let a = 0;
  for (; a < e.byteLength - o; a += 3) {
    const c = e[a + 0], l = e[a + 1], u = e[a + 2];
    i += s[c >>> 2], i += s[(c << 4 | l >>> 4) & 63], i += s[(l << 2 | u >>> 6) & 63], i += s[u & 63];
  }
  if (o === 1) {
    const c = e[a + 0];
    i += s[c >>> 2], i += s[c << 4 & 63], t && (i += "==");
  } else if (o === 2) {
    const c = e[a + 0], l = e[a + 1];
    i += s[c >>> 2], i += s[(c << 4 | l >>> 4) & 63], i += s[l << 2 & 63], t && (i += "=");
  }
  return i;
}
h(), h(), h(), h(), h();
var gu = class ch {
  constructor(t) {
    this.element = t, this.next = ch.Undefined, this.prev = ch.Undefined;
  }
};
gu.Undefined = new gu(void 0);
var _e = gu, C6 = class {
  constructor() {
    this._first = _e.Undefined, this._last = _e.Undefined, this._size = 0;
  }
  get size() {
    return this._size;
  }
  get first() {
    return this._first;
  }
  isEmpty() {
    return this._first === _e.Undefined;
  }
  clear() {
    let e = this._first;
    for (; e !== _e.Undefined; ) {
      const t = e.next;
      e.prev = _e.Undefined, e.next = _e.Undefined, e = t;
    }
    this._first = _e.Undefined, this._last = _e.Undefined, this._size = 0;
  }
  unshift(e) {
    return this._insert(e, false);
  }
  push(e) {
    return this._insert(e, true);
  }
  _insert(e, t) {
    const r = new _e(e);
    if (this._first === _e.Undefined) this._first = r, this._last = r;
    else if (t) {
      const s = this._last;
      this._last = r, r.prev = s, s.next = r;
    } else {
      const s = this._first;
      this._first = r, r.next = s, s.prev = r;
    }
    this._size += 1;
    let n = false;
    return () => {
      n || (n = true, this._remove(r));
    };
  }
  shift() {
    if (this._first !== _e.Undefined) {
      const e = this._first.element;
      return this._remove(this._first), e;
    }
  }
  pop() {
    if (this._last !== _e.Undefined) {
      const e = this._last.element;
      return this._remove(this._last), e;
    }
  }
  remove(e) {
    this._remove(e);
  }
  _remove(e) {
    if (e.prev !== _e.Undefined && e.next !== _e.Undefined) {
      const t = e.prev;
      t.next = e.next, e.next.prev = t;
    } else e.prev === _e.Undefined && e.next === _e.Undefined ? (this._first = _e.Undefined, this._last = _e.Undefined) : e.next === _e.Undefined ? (this._last = this._last.prev, this._last.next = _e.Undefined) : e.prev === _e.Undefined && (this._first = this._first.next, this._first.prev = _e.Undefined);
    this._size -= 1;
  }
  *[Symbol.iterator]() {
    let e = this._first;
    for (; e !== _e.Undefined; ) yield e.element, e = e.next;
  }
};
h();
var L6 = globalThis.performance && typeof globalThis.performance.now == "function", x6 = class g2 {
  static create(t) {
    return new g2(t);
  }
  constructor(t) {
    this._now = L6 && t === false ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
  }
  stop() {
    this._stopTime = this._now();
  }
  reset() {
    this._startTime = this._now(), this._stopTime = -1;
  }
  elapsed() {
    return this._stopTime !== -1 ? this._stopTime - this._startTime : this._now() - this._startTime;
  }
}, E0 = false, M6 = false, ke;
((e) => {
  e.None = () => Ce.None;
  function t(T) {
    if (M6) {
      const { onDidAddListener: R } = T, C = mu.create();
      let L = 0;
      T.onDidAddListener = () => {
        ++L === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), C.print()), R?.();
      };
    }
  }
  function r(T, R) {
    return p(T, () => {
    }, 0, void 0, true, void 0, R);
  }
  e.defer = r;
  function n(T) {
    return (R, C = null, L) => {
      let D = false, N;
      return N = T((z) => {
        if (!D) return N ? N.dispose() : D = true, R.call(C, z);
      }, null, L), D && N.dispose(), N;
    };
  }
  e.once = n;
  function s(T, R) {
    return e.once(e.filter(T, R));
  }
  e.onceIf = s;
  function i(T, R, C) {
    return d((L, D = null, N) => T((z) => L.call(D, R(z)), null, N), C);
  }
  e.map = i;
  function o(T, R, C) {
    return d((L, D = null, N) => T((z) => {
      R(z), L.call(D, z);
    }, null, N), C);
  }
  e.forEach = o;
  function a(T, R, C) {
    return d((L, D = null, N) => T((z) => R(z) && L.call(D, z), null, N), C);
  }
  e.filter = a;
  function c(T) {
    return T;
  }
  e.signal = c;
  function l(...T) {
    return (R, C = null, L) => {
      const D = g6(...T.map((N) => N((z) => R.call(C, z))));
      return f(D, L);
    };
  }
  e.any = l;
  function u(T, R, C, L) {
    let D = C;
    return i(T, (N) => (D = R(D, N), D), L);
  }
  e.reduce = u;
  function d(T, R) {
    let C;
    const L = { onWillAddFirstListener() {
      C = T(D.fire, D);
    }, onDidRemoveLastListener() {
      C?.dispose();
    } };
    R || t(L);
    const D = new j(L);
    return R?.add(D), D.event;
  }
  function f(T, R) {
    return R instanceof Array ? R.push(T) : R && R.add(T), T;
  }
  function p(T, R, C = 100, L = false, D = false, N, z) {
    let Q, G, Me, He = 0, E;
    const x = { leakWarningThreshold: N, onWillAddFirstListener() {
      Q = T((q) => {
        He++, G = R(G, q), L && !Me && (U.fire(G), G = void 0), E ??= () => {
          const ue = G;
          G = void 0, Me = void 0, (!L || He > 1) && U.fire(ue), He = 0;
        }, typeof C == "number" ? (clearTimeout(Me), Me = setTimeout(E, C)) : Me === void 0 && (Me = 0, queueMicrotask(E));
      });
    }, onWillRemoveListener() {
      D && He > 0 && E?.();
    }, onDidRemoveLastListener() {
      E = void 0, Q.dispose();
    } };
    z || t(x);
    const U = new j(x);
    return z?.add(U), U.event;
  }
  e.debounce = p;
  function g(T, R = 0, C) {
    return e.debounce(T, (L, D) => L ? (L.push(D), L) : [D], R, void 0, true, void 0, C);
  }
  e.accumulate = g;
  function _(T, R = (L, D) => L === D, C) {
    let L = true, D;
    return a(T, (N) => {
      const z = L || !R(N, D);
      return L = false, D = N, z;
    }, C);
  }
  e.latch = _;
  function y(T, R, C) {
    return [e.filter(T, R, C), e.filter(T, (L) => !R(L), C)];
  }
  e.split = y;
  function m(T, R = false, C = [], L) {
    let D = C.slice(), N = T((G) => {
      D ? D.push(G) : Q.fire(G);
    });
    L && L.add(N);
    const z = () => {
      D?.forEach((G) => Q.fire(G)), D = null;
    }, Q = new j({ onWillAddFirstListener() {
      N || (N = T((G) => Q.fire(G)), L && L.add(N));
    }, onDidAddFirstListener() {
      D && (R ? setTimeout(z) : z());
    }, onDidRemoveLastListener() {
      N && N.dispose(), N = null;
    } });
    return L && L.add(Q), Q.event;
  }
  e.buffer = m;
  function A(T, R) {
    return (L, D, N) => {
      const z = R(new v());
      return T(function(Q) {
        const G = z.evaluate(Q);
        G !== S && L.call(D, G);
      }, void 0, N);
    };
  }
  e.chain = A;
  const S = /* @__PURE__ */ Symbol("HaltChainable");
  class v {
    constructor() {
      this.steps = [];
    }
    map(R) {
      return this.steps.push(R), this;
    }
    forEach(R) {
      return this.steps.push((C) => (R(C), C)), this;
    }
    filter(R) {
      return this.steps.push((C) => R(C) ? C : S), this;
    }
    reduce(R, C) {
      let L = C;
      return this.steps.push((D) => (L = R(L, D), L)), this;
    }
    latch(R = (C, L) => C === L) {
      let C = true, L;
      return this.steps.push((D) => {
        const N = C || !R(D, L);
        return C = false, L = D, N ? D : S;
      }), this;
    }
    evaluate(R) {
      for (const C of this.steps) if (R = C(R), R === S) break;
      return R;
    }
  }
  function b(T, R, C = (L) => L) {
    const L = (...Q) => z.fire(C(...Q)), D = () => T.on(R, L), N = () => T.removeListener(R, L), z = new j({ onWillAddFirstListener: D, onDidRemoveLastListener: N });
    return z.event;
  }
  e.fromNodeEventEmitter = b;
  function I(T) {
    let R;
    const C = () => {
      R = T.subscribe((N) => D.fire(N));
    }, L = () => {
      R?.unsubscribe(), R = void 0;
    }, D = new j({ onWillAddFirstListener: C, onDidRemoveLastListener: L });
    return D.event;
  }
  e.fromRxJS = I;
  function O(T, R, C = (L) => L) {
    const L = (...Q) => z.fire(C(...Q)), D = () => T.addEventListener(R, L), N = () => T.removeEventListener(R, L), z = new j({ onWillAddFirstListener: D, onDidRemoveLastListener: N });
    return z.event;
  }
  e.fromDOMEventEmitter = O;
  function M(T, R) {
    return new Promise((C) => n(T)(C, null, R));
  }
  e.toPromise = M;
  function F(T) {
    const R = new j();
    return T.then((C) => {
      R.fire(C);
    }, () => {
      R.fire(void 0);
    }).finally(() => {
      R.dispose();
    }), R.event;
  }
  e.fromPromise = F;
  function H(T, R) {
    return T((C) => R.fire(C));
  }
  e.forward = H;
  function ee(T, R, C) {
    return R(C), T((L) => R(L));
  }
  e.runAndSubscribe = ee;
  class Y {
    constructor(R, C) {
      this._observable = R, this._counter = 0, this._hasChanged = false;
      const L = { onWillAddFirstListener: () => {
        R.addObserver(this), this._observable.reportChanges();
      }, onDidRemoveLastListener: () => {
        R.removeObserver(this);
      } };
      C || t(L), this.emitter = new j(L), C && C.add(this.emitter);
    }
    beginUpdate(R) {
      this._counter++;
    }
    handlePossibleChange(R) {
    }
    handleChange(R, C) {
      this._hasChanged = true;
    }
    endUpdate(R) {
      this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = false, this.emitter.fire(this._observable.get())));
    }
  }
  function B(T, R) {
    return new Y(T, R).emitter.event;
  }
  e.fromObservable = B;
  function P(T) {
    return (R, C, L) => {
      let D = 0, N = false;
      const z = { beginUpdate() {
        D++;
      }, endUpdate() {
        D--, D === 0 && (T.reportChanges(), N && (N = false, R.call(C)));
      }, handlePossibleChange() {
      }, handleChange() {
        N = true;
      } };
      T.addObserver(z), T.reportChanges();
      const Q = { dispose() {
        T.removeObserver(z);
      } };
      return L instanceof Lt ? L.add(Q) : Array.isArray(L) && L.push(Q), Q;
    };
  }
  e.fromObservableLight = P;
})(ke || (ke = {}));
var _u = class lh {
  constructor(t) {
    this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${lh._idPool++}`, lh.all.add(this);
  }
  start(t) {
    this._stopWatch = new x6(), this.listenerCount = t;
  }
  stop() {
    if (this._stopWatch) {
      const t = this._stopWatch.elapsed();
      this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
    }
  }
};
_u.all = /* @__PURE__ */ new Set(), _u._idPool = 0;
var D6 = _u, A0 = -1, N6 = 1;
function R0() {
  return (N6++).toString(16).padStart(3, "0");
}
var U6 = class {
  constructor(e, t, r = R0()) {
    this._errorHandler = e, this.threshold = t, this.name = r, this._warnCountdown = 0;
  }
  dispose() {
    this._stacks?.clear();
  }
  check(e, t) {
    const r = this.threshold;
    if (r <= 0 || t < r) return;
    this._stacks || (this._stacks = /* @__PURE__ */ new Map());
    const n = e.value, s = this._stacks.get(n) || 0;
    if (this._stacks.set(n, s + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
      this._warnCountdown = r * 0.5;
      const [i, o] = this.getMostFrequentStack(), a = `[${this.name}] potential listener LEAK detected, having ${t} listeners already. MOST frequent listener (${o}):`;
      console.warn(a), console.warn(i);
      const c = o / t > 0.3 ? "dominated" : "popular", l = /^[0-9a-f]+$/i.test(this.name) ? void 0 : this.name, u = new T0(c, a, i, t, l);
      this._errorHandler(u), Ss(u, "emitter_listener_leak");
    }
    return () => {
      const i = this._stacks.get(n) || 0;
      i <= 1 ? this._stacks.delete(n) : this._stacks.set(n, i - 1);
    };
  }
  getMostFrequentStack() {
    if (!this._stacks) return;
    let e, t = 0;
    for (const [r, n] of this._stacks) (!e || t < n) && (e = [r, n], t = n);
    return e;
  }
}, mu = class _2 {
  constructor(t) {
    this.value = t;
  }
  static create() {
    const t = new Error();
    return new _2(t.stack ?? "");
  }
  print() {
    console.warn(this.value.split(`
`).slice(2).join(`
`));
  }
}, T0 = class extends Error {
  constructor(e, t, r, n, s) {
    super(s ? `[${s}] potential listener LEAK detected, ${e}` : `potential listener LEAK detected, ${e}`), this.name = "ListenerLeakError", this.kind = e, this.listenerCount = n, this.details = t, this.stack = r;
  }
}, $6 = class extends T0 {
  constructor(e, t, r, n, s) {
    super(e, t, r, n, s), this.name = "ListenerRefusalError";
  }
}, _o = class {
  constructor(e) {
    this.value = e;
  }
}, F6 = 2, k0 = (e, t) => {
  if (e instanceof _o) t(e);
  else for (let r = 0; r < e.length; r++) {
    const n = e[r];
    n && t(n);
  }
}, j = class {
  constructor(e) {
    this._size = 0, this._options = e, (A0 > 0 || this._options?.leakWarningThreshold) && (this._leakWarningThreshold = this._options?.leakWarningThreshold ?? A0, this._leakWarningName = this._options?.leakWarningName ?? R0(), this._leakWarningErrorHandler = this._options?.onListenerError ?? Ct), this._perfMon = this._options?._profName ? new D6(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
  }
  _getLeakageMonitor() {
    if (!(this._leakWarningThreshold === void 0 || this._leakWarningName === void 0 || this._leakWarningErrorHandler === void 0)) return this._leakageMon ??= new U6(this._leakWarningErrorHandler, this._leakWarningThreshold, this._leakWarningName);
  }
  dispose() {
    if (!this._disposed) {
      if (this._disposed = true, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
        if (E0) {
          const e = this._listeners;
          queueMicrotask(() => {
            k0(e, (t) => t.stack?.print());
          });
        }
        k0(this._listeners, (e) => {
          e.value = void 0;
        }), this._listeners = void 0, this._size = 0;
      }
      this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose();
    }
  }
  get event() {
    return this._event ??= (e, t, r) => {
      if (this._leakWarningThreshold !== void 0 && this._size > this._leakWarningThreshold ** 2) {
        const a = this._getLeakageMonitor();
        if (a) {
          const c = `[${a.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${a.threshold})`;
          console.warn(c);
          const l = a.getMostFrequentStack() ?? ["UNKNOWN stack", -1], u = l[1] / this._size > 0.3 ? "dominated" : "popular", d = new $6(u, `${c}. HINT: Stack shows most frequent listener (${l[1]}-times)`, l[0], this._size, this._options?.leakWarningName);
          return (this._options?.onListenerError || Ct)(d), Ss(d, "emitter_listener_refusal"), Ce.None;
        }
      }
      if (this._disposed) {
        const a = new Error("Trying to listen to an Emitter that has already been disposed of.");
        return Ss(a, "emitter_use_after_dispose"), Ce.None;
      }
      t && (e = e.bind(t));
      const n = new _o(e);
      let s, i;
      if (this._leakWarningThreshold !== void 0 && this._size >= Math.ceil(this._leakWarningThreshold * 0.2)) {
        const a = this._getLeakageMonitor();
        a && (n.stack = mu.create(), s = a.check(n.stack, this._size + 1));
      }
      E0 && (n.stack = i ?? mu.create()), this._listeners ? this._listeners instanceof _o ? (this._deliveryQueue ??= new H6(), this._listeners = [this._listeners, n]) : this._listeners.push(n) : (this._options?.onWillAddFirstListener?.(this), this._listeners = n, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
      const o = rr(() => {
        s?.(), this._removeListener(n);
      });
      return r instanceof Lt ? r.add(o) : Array.isArray(r) && r.push(o), o;
    }, this._event;
  }
  _removeListener(e) {
    if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
    if (this._size === 1) {
      this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), this._size = 0;
      return;
    }
    const t = this._listeners, r = t.indexOf(e);
    if (r === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
    this._size--, t[r] = void 0;
    const n = this._deliveryQueue.current === this;
    if (this._size * F6 <= t.length) {
      let s = 0;
      for (let i = 0; i < t.length; i++) t[i] ? t[s++] = t[i] : n && s < this._deliveryQueue.end && (this._deliveryQueue.end--, s < this._deliveryQueue.i && this._deliveryQueue.i--);
      t.length = s;
    }
  }
  _deliver(e, t) {
    if (!e) return;
    const r = this._options?.onListenerError || Ct;
    if (!r) {
      e.value(t);
      return;
    }
    try {
      e.value(t);
    } catch (n) {
      r(n);
    }
  }
  _deliverQueue(e) {
    const t = e.current._listeners;
    for (; e.i < e.end; ) this._deliver(t[e.i++], e.value);
    e.reset();
  }
  fire(e) {
    if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof _o) this._deliver(this._listeners, e);
    else {
      const t = this._deliveryQueue;
      t.enqueue(this, e, this._listeners.length), this._deliverQueue(t);
    }
    this._perfMon?.stop();
  }
  hasListeners() {
    return this._size > 0;
  }
}, H6 = class {
  constructor() {
    this.i = -1, this.end = 0;
  }
  enqueue(e, t, r) {
    this.i = 0, this.end = r, this.current = e, this.value = t;
  }
  reset() {
    this.i = this.end, this.current = void 0, this.value = void 0;
  }
}, B6 = class {
  constructor(e) {
    this.event = e, this._listener = new ws();
  }
  hook(e, t) {
    this._listener.value = this.event(e, t);
  }
  unhook() {
    this._listener.clear();
  }
  disposeListener() {
    this._listener.dispose();
  }
}, z6 = class {
  constructor() {
    this.hasListeners = false, this.sources = [], this.emitter = new j({ onWillAddFirstListener: () => this.onFirstListenerAdd(), onDidRemoveLastListener: () => this.onLastListenerRemove() });
  }
  get event() {
    return this.emitter.event;
  }
  add(e) {
    const t = new B6(e);
    return this.sources.push(t), this.hasListeners && t.hook(this.emitter.fire, this.emitter), rr(lu(() => {
      t.disposeListener();
      const n = this.sources.indexOf(t);
      n !== -1 && this.sources.splice(n, 1);
    }));
  }
  onFirstListenerAdd() {
    this.hasListeners = true, this.sources.forEach((e) => e.hook(this.emitter.fire, this.emitter));
  }
  onLastListenerRemove() {
    this.hasListeners = false, this.sources.forEach((e) => e.unhook());
  }
  dispose() {
    this.emitter.dispose();
    for (const e of this.sources) e.disposeListener();
    this.sources.length = 0;
  }
}, W6 = class {
  constructor() {
    this.listening = false, this.inputEvent = ke.None, this.emitter = new j({ onDidAddFirstListener: () => {
      this.listening = true, this.inputEventListener?.dispose(), this.inputEventListener = new ws(), this.inputEventListener.value = this.inputEvent(this.emitter.fire, this.emitter);
    }, onDidRemoveLastListener: () => {
      this.listening = false, this.inputEventListener?.dispose(), this.inputEventListener = void 0;
    } }), this.event = this.emitter.event;
  }
  set input(e) {
    this.inputEvent = e, this.listening && (this.inputEventListener ??= new ws(), this.inputEventListener.value = e(this.emitter.fire, this.emitter));
  }
  dispose() {
    this.inputEventListener?.dispose(), this.inputEventListener = void 0, this.inputEvent = ke.None, this.emitter.dispose();
  }
}, I0 = Object.freeze(function(e, t) {
  const r = setTimeout(e.bind(t), 0);
  return { dispose() {
    clearTimeout(r);
  } };
}), As;
((e) => {
  function t(r) {
    return r === e.None || r === e.Cancelled || r instanceof mo ? true : !r || typeof r != "object" ? false : typeof r.isCancellationRequested == "boolean" && typeof r.onCancellationRequested == "function";
  }
  e.isCancellationToken = t, e.None = Object.freeze({ isCancellationRequested: false, onCancellationRequested: ke.None }), e.Cancelled = Object.freeze({ isCancellationRequested: true, onCancellationRequested: I0 });
})(As || (As = {}));
var mo = class {
  constructor() {
    this._isCancelled = false, this._emitter = null;
  }
  cancel() {
    this._isCancelled || (this._isCancelled = true, this._emitter && (this._emitter.fire(void 0), this.dispose()));
  }
  get isCancellationRequested() {
    return this._isCancelled;
  }
  get onCancellationRequested() {
    return this._isCancelled ? I0 : (this._emitter || (this._emitter = new j()), this._emitter.event);
  }
  dispose() {
    this._emitter && (this._emitter.dispose(), this._emitter = null);
  }
}, P0 = class {
  constructor(e) {
    this._token = void 0, this._parentListener = void 0, this._parentListener = e && e.onCancellationRequested(this.cancel, this);
  }
  get token() {
    return this._token || (this._token = new mo()), this._token;
  }
  cancel() {
    this._token ? this._token instanceof mo && this._token.cancel() : this._token = As.Cancelled;
  }
  dispose(e = false) {
    e && this.cancel(), this._parentListener?.dispose(), this._token ? this._token instanceof mo && this._token.dispose() : this._token = As.None;
  }
};
h(), h(), h(), h(), h();
var mn = "en", vo = false, yo = false, Rs = false, G6 = false, O0 = false, vu = false, K6 = false, q6 = false, j6 = false, V6 = false, So = void 0, bo = mn, C0 = mn, Y6 = void 0, xt = void 0, Mt = globalThis, Ue = void 0;
typeof Mt.vscode < "u" && typeof Mt.vscode.process < "u" ? Ue = Mt.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (Ue = process);
var L0 = typeof Ue?.versions?.electron == "string", X6 = L0 && Ue?.type === "renderer";
if (typeof Ue == "object") {
  vo = Ue.platform === "win32", yo = Ue.platform === "darwin", Rs = Ue.platform === "linux", G6 = Rs && !!Ue.env.SNAP && !!Ue.env.SNAP_REVISION, K6 = L0, j6 = !!Ue.env.CI || !!Ue.env.BUILD_ARTIFACTSTAGINGDIRECTORY, So = mn, bo = mn;
  const e = Ue.env.VSCODE_NLS_CONFIG;
  if (e) try {
    const t = JSON.parse(e);
    So = t.userLocale, C0 = t.osLocale, bo = t.resolvedLanguage || mn, Y6 = t.languagePack?.translationsConfigFile;
  } catch {
  }
  O0 = true;
} else typeof navigator == "object" && !X6 ? (xt = navigator.userAgent, vo = xt.indexOf("Windows") >= 0, yo = xt.indexOf("Macintosh") >= 0, q6 = (xt.indexOf("Macintosh") >= 0 || xt.indexOf("iPad") >= 0 || xt.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, Rs = xt.indexOf("Linux") >= 0, V6 = xt?.indexOf("Mobi") >= 0, vu = true, bo = i0() || mn, So = navigator.language.toLowerCase(), C0 = So) : console.error("Unable to resolve platform.");
var yu = 0;
yo ? yu = 1 : vo ? yu = 3 : Rs && (yu = 2);
var br = vo, Su = yo, bu = Rs, J6 = O0, wu = vu, Z6 = vu && typeof Mt.importScripts == "function", Q6 = Z6 ? Mt.origin : void 0, vt = xt, nr = bo, x0;
((e) => {
  function t() {
    return nr;
  }
  e.value = t;
  function r() {
    return nr.length === 2 ? nr === "en" : nr.length >= 3 ? nr[0] === "e" && nr[1] === "n" && nr[2] === "-" : false;
  }
  e.isDefaultVariant = r;
  function n() {
    return nr === "en";
  }
  e.isDefault = n;
})(x0 || (x0 = {}));
var eA = typeof Mt.postMessage == "function" && !Mt.importScripts, tA = (() => {
  if (eA) {
    const e = [];
    Mt.addEventListener("message", (r) => {
      if (r.data && r.data.vscodeScheduleAsyncWork) for (let n = 0, s = e.length; n < s; n++) {
        const i = e[n];
        if (i.id === r.data.vscodeScheduleAsyncWork) {
          e.splice(n, 1), i.callback();
          return;
        }
      }
    });
    let t = 0;
    return (r) => {
      const n = ++t;
      e.push({ id: n, callback: r }), Mt.postMessage({ vscodeScheduleAsyncWork: n }, "*");
    };
  }
  return (e) => setTimeout(e);
})(), M0 = !!(vt && vt.indexOf("Chrome") >= 0), rA = !!(vt && vt.indexOf("Firefox") >= 0), nA = !!(!M0 && vt && vt.indexOf("Safari") >= 0), sA = !!(vt && vt.indexOf("Edg/") >= 0), $L = !!(vt && vt.indexOf("Android") >= 0), FL = Ue?.arch, HL = Ue?.platform, BL = Ue?.versions?.node, wr, Eu = globalThis.vscode;
if (typeof Eu < "u" && typeof Eu.process < "u") {
  const e = Eu.process;
  wr = { get platform() {
    return e.platform;
  }, get arch() {
    return e.arch;
  }, get env() {
    return e.env;
  }, cwd() {
    return e.cwd();
  } };
} else typeof process < "u" && typeof process?.versions?.node == "string" ? wr = { get platform() {
  return process.platform;
}, get arch() {
  return process.arch;
}, get env() {
  return process.env;
}, cwd() {
  return process.env.VSCODE_CWD || process.cwd();
} } : wr = { get platform() {
  return br ? "win32" : Su ? "darwin" : "linux";
}, get arch() {
}, get env() {
  return {};
}, cwd() {
  return "/";
} };
var wo = wr.cwd, sr = wr.env, iA = wr.platform, zL = wr.arch, oA = 65, aA = 97, cA = 90, lA = 122, Er = 46, Le = 47, je = 92, Dt = 58, uA = 63, D0 = class extends Error {
  constructor(e, t, r) {
    let n;
    typeof t == "string" && t.indexOf("not ") === 0 ? (n = "must not be", t = t.replace(/^not /, "")) : n = "must be";
    const s = e.indexOf(".") !== -1 ? "property" : "argument";
    let i = `The "${e}" ${s} ${n} of type ${t}`;
    i += `. Received type ${typeof r}`, super(i), this.code = "ERR_INVALID_ARG_TYPE";
  }
};
function dA(e, t) {
  if (e === null || typeof e != "object") throw new D0(t, "Object", e);
}
function ve(e, t) {
  if (typeof e != "string") throw new D0(t, "string", e);
}
var Ve = iA === "win32";
function K(e) {
  return e === Le || e === je;
}
function Au(e) {
  return e === Le;
}
function Nt(e) {
  return e >= oA && e <= cA || e >= aA && e <= lA;
}
function Eo(e, t, r, n) {
  let s = "", i = 0, o = -1, a = 0, c = 0;
  for (let l = 0; l <= e.length; ++l) {
    if (l < e.length) c = e.charCodeAt(l);
    else {
      if (n(c)) break;
      c = Le;
    }
    if (n(c)) {
      if (!(o === l - 1 || a === 1)) if (a === 2) {
        if (s.length < 2 || i !== 2 || s.charCodeAt(s.length - 1) !== Er || s.charCodeAt(s.length - 2) !== Er) {
          if (s.length > 2) {
            const u = s.lastIndexOf(r);
            u === -1 ? (s = "", i = 0) : (s = s.slice(0, u), i = s.length - 1 - s.lastIndexOf(r)), o = l, a = 0;
            continue;
          } else if (s.length !== 0) {
            s = "", i = 0, o = l, a = 0;
            continue;
          }
        }
        t && (s += s.length > 0 ? `${r}..` : "..", i = 2);
      } else s.length > 0 ? s += `${r}${e.slice(o + 1, l)}` : s = e.slice(o + 1, l), i = l - o - 1;
      o = l, a = 0;
    } else c === Er && a !== -1 ? ++a : a = -1;
  }
  return s;
}
function hA(e) {
  return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function N0(e, t) {
  dA(t, "pathObject");
  const r = t.dir || t.root, n = t.base || `${t.name || ""}${hA(t.ext)}`;
  return r ? r === t.root ? `${r}${n}` : `${r}${e}${n}` : n;
}
var Ee = { resolve(...e) {
  let t = "", r = "", n = false;
  for (let s = e.length - 1; s >= -1; s--) {
    let i;
    if (s >= 0) {
      if (i = e[s], ve(i, `paths[${s}]`), i.length === 0) continue;
    } else t.length === 0 ? i = wo() : (i = sr[`=${t}`] || wo(), (i === void 0 || i.slice(0, 2).toLowerCase() !== t.toLowerCase() && i.charCodeAt(2) === je) && (i = `${t}\\`));
    const o = i.length;
    let a = 0, c = "", l = false;
    const u = i.charCodeAt(0);
    if (o === 1) K(u) && (a = 1, l = true);
    else if (K(u)) if (l = true, K(i.charCodeAt(1))) {
      let d = 2, f = d;
      for (; d < o && !K(i.charCodeAt(d)); ) d++;
      if (d < o && d !== f) {
        const p = i.slice(f, d);
        for (f = d; d < o && K(i.charCodeAt(d)); ) d++;
        if (d < o && d !== f) {
          for (f = d; d < o && !K(i.charCodeAt(d)); ) d++;
          (d === o || d !== f) && (c = `\\\\${p}\\${i.slice(f, d)}`, a = d);
        }
      }
    } else a = 1;
    else Nt(u) && i.charCodeAt(1) === Dt && (c = i.slice(0, 2), a = 2, o > 2 && K(i.charCodeAt(2)) && (l = true, a = 3));
    if (c.length > 0) if (t.length > 0) {
      if (c.toLowerCase() !== t.toLowerCase()) continue;
    } else t = c;
    if (n) {
      if (t.length > 0) break;
    } else if (r = `${i.slice(a)}\\${r}`, n = l, l && t.length > 0) break;
  }
  return r = Eo(r, !n, "\\", K), n ? `${t}\\${r}` : `${t}${r}` || ".";
}, normalize(e) {
  ve(e, "path");
  const t = e.length;
  if (t === 0) return ".";
  let r = 0, n, s = false;
  const i = e.charCodeAt(0);
  if (t === 1) return Au(i) ? "\\" : e;
  if (K(i)) if (s = true, K(e.charCodeAt(1))) {
    let a = 2, c = a;
    for (; a < t && !K(e.charCodeAt(a)); ) a++;
    if (a < t && a !== c) {
      const l = e.slice(c, a);
      for (c = a; a < t && K(e.charCodeAt(a)); ) a++;
      if (a < t && a !== c) {
        for (c = a; a < t && !K(e.charCodeAt(a)); ) a++;
        if (a === t) return `\\\\${l}\\${e.slice(c)}\\`;
        a !== c && (n = `\\\\${l}\\${e.slice(c, a)}`, r = a);
      }
    }
  } else r = 1;
  else Nt(i) && e.charCodeAt(1) === Dt && (n = e.slice(0, 2), r = 2, t > 2 && K(e.charCodeAt(2)) && (s = true, r = 3));
  let o = r < t ? Eo(e.slice(r), !s, "\\", K) : "";
  if (o.length === 0 && !s && (o = "."), o.length > 0 && K(e.charCodeAt(t - 1)) && (o += "\\"), !s && n === void 0 && e.includes(":")) {
    if (o.length >= 2 && Nt(o.charCodeAt(0)) && o.charCodeAt(1) === Dt) return `.\\${o}`;
    let a = e.indexOf(":");
    do
      if (a === t - 1 || K(e.charCodeAt(a + 1))) return `.\\${o}`;
    while ((a = e.indexOf(":", a + 1)) !== -1);
  }
  return n === void 0 ? s ? `\\${o}` : o : s ? `${n}\\${o}` : `${n}${o}`;
}, isAbsolute(e) {
  ve(e, "path");
  const t = e.length;
  if (t === 0) return false;
  const r = e.charCodeAt(0);
  return K(r) || t > 2 && Nt(r) && e.charCodeAt(1) === Dt && K(e.charCodeAt(2));
}, join(...e) {
  if (e.length === 0) return ".";
  let t, r;
  for (let i = 0; i < e.length; ++i) {
    const o = e[i];
    ve(o, "path"), o.length > 0 && (t === void 0 ? t = r = o : t += `\\${o}`);
  }
  if (t === void 0) return ".";
  let n = true, s = 0;
  if (typeof r == "string" && K(r.charCodeAt(0))) {
    ++s;
    const i = r.length;
    i > 1 && K(r.charCodeAt(1)) && (++s, i > 2 && (K(r.charCodeAt(2)) ? ++s : n = false));
  }
  if (n) {
    for (; s < t.length && K(t.charCodeAt(s)); ) s++;
    s >= 2 && (t = `\\${t.slice(s)}`);
  }
  return Ee.normalize(t);
}, relative(e, t) {
  if (ve(e, "from"), ve(t, "to"), e === t) return "";
  const r = Ee.resolve(e), n = Ee.resolve(t);
  if (r === n || (e = r.toLowerCase(), t = n.toLowerCase(), e === t)) return "";
  if (r.length !== e.length || n.length !== t.length) {
    const g = r.split("\\"), _ = n.split("\\");
    g[g.length - 1] === "" && g.pop(), _[_.length - 1] === "" && _.pop();
    const y = g.length, m = _.length, A = y < m ? y : m;
    let S;
    for (S = 0; S < A && g[S].toLowerCase() === _[S].toLowerCase(); S++) ;
    return S === 0 ? n : S === A ? m > A ? _.slice(S).join("\\") : y > A ? "..\\".repeat(y - 1 - S) + ".." : "" : "..\\".repeat(y - S) + _.slice(S).join("\\");
  }
  let s = 0;
  for (; s < e.length && e.charCodeAt(s) === je; ) s++;
  let i = e.length;
  for (; i - 1 > s && e.charCodeAt(i - 1) === je; ) i--;
  const o = i - s;
  let a = 0;
  for (; a < t.length && t.charCodeAt(a) === je; ) a++;
  let c = t.length;
  for (; c - 1 > a && t.charCodeAt(c - 1) === je; ) c--;
  const l = c - a, u = o < l ? o : l;
  let d = -1, f = 0;
  for (; f < u; f++) {
    const g = e.charCodeAt(s + f);
    if (g !== t.charCodeAt(a + f)) break;
    g === je && (d = f);
  }
  if (f !== u) {
    if (d === -1) return n;
  } else {
    if (l > u) {
      if (t.charCodeAt(a + f) === je) return n.slice(a + f + 1);
      if (f === 2) return n.slice(a + f);
    }
    o > u && (e.charCodeAt(s + f) === je ? d = f : f === 2 && (d = 3)), d === -1 && (d = 0);
  }
  let p = "";
  for (f = s + d + 1; f <= i; ++f) (f === i || e.charCodeAt(f) === je) && (p += p.length === 0 ? ".." : "\\..");
  return a += d, p.length > 0 ? `${p}${n.slice(a, c)}` : (n.charCodeAt(a) === je && ++a, n.slice(a, c));
}, toNamespacedPath(e) {
  if (typeof e != "string" || e.length === 0) return e;
  const t = Ee.resolve(e);
  if (t.length <= 2) return e;
  if (t.charCodeAt(0) === je) {
    if (t.charCodeAt(1) === je) {
      const r = t.charCodeAt(2);
      if (r !== uA && r !== Er) return `\\\\?\\UNC\\${t.slice(2)}`;
    }
  } else if (Nt(t.charCodeAt(0)) && t.charCodeAt(1) === Dt && t.charCodeAt(2) === je) return `\\\\?\\${t}`;
  return t;
}, dirname(e) {
  ve(e, "path");
  const t = e.length;
  if (t === 0) return ".";
  let r = -1, n = 0;
  const s = e.charCodeAt(0);
  if (t === 1) return K(s) ? e : ".";
  if (K(s)) {
    if (r = n = 1, K(e.charCodeAt(1))) {
      let a = 2, c = a;
      for (; a < t && !K(e.charCodeAt(a)); ) a++;
      if (a < t && a !== c) {
        for (c = a; a < t && K(e.charCodeAt(a)); ) a++;
        if (a < t && a !== c) {
          for (c = a; a < t && !K(e.charCodeAt(a)); ) a++;
          if (a === t) return e;
          a !== c && (r = n = a + 1);
        }
      }
    }
  } else Nt(s) && e.charCodeAt(1) === Dt && (r = t > 2 && K(e.charCodeAt(2)) ? 3 : 2, n = r);
  let i = -1, o = true;
  for (let a = t - 1; a >= n; --a) if (K(e.charCodeAt(a))) {
    if (!o) {
      i = a;
      break;
    }
  } else o = false;
  if (i === -1) {
    if (r === -1) return ".";
    i = r;
  }
  return e.slice(0, i);
}, basename(e, t) {
  t !== void 0 && ve(t, "suffix"), ve(e, "path");
  let r = 0, n = -1, s = true, i;
  if (e.length >= 2 && Nt(e.charCodeAt(0)) && e.charCodeAt(1) === Dt && (r = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
    if (t === e) return "";
    let o = t.length - 1, a = -1;
    for (i = e.length - 1; i >= r; --i) {
      const c = e.charCodeAt(i);
      if (K(c)) {
        if (!s) {
          r = i + 1;
          break;
        }
      } else a === -1 && (s = false, a = i + 1), o >= 0 && (c === t.charCodeAt(o) ? --o === -1 && (n = i) : (o = -1, n = a));
    }
    return r === n ? n = a : n === -1 && (n = e.length), e.slice(r, n);
  }
  for (i = e.length - 1; i >= r; --i) if (K(e.charCodeAt(i))) {
    if (!s) {
      r = i + 1;
      break;
    }
  } else n === -1 && (s = false, n = i + 1);
  return n === -1 ? "" : e.slice(r, n);
}, extname(e) {
  ve(e, "path");
  let t = 0, r = -1, n = 0, s = -1, i = true, o = 0;
  e.length >= 2 && e.charCodeAt(1) === Dt && Nt(e.charCodeAt(0)) && (t = n = 2);
  for (let a = e.length - 1; a >= t; --a) {
    const c = e.charCodeAt(a);
    if (K(c)) {
      if (!i) {
        n = a + 1;
        break;
      }
      continue;
    }
    s === -1 && (i = false, s = a + 1), c === Er ? r === -1 ? r = a : o !== 1 && (o = 1) : r !== -1 && (o = -1);
  }
  return r === -1 || s === -1 || o === 0 || o === 1 && r === s - 1 && r === n + 1 ? "" : e.slice(r, s);
}, format: N0.bind(null, "\\"), parse(e) {
  ve(e, "path");
  const t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (e.length === 0) return t;
  const r = e.length;
  let n = 0, s = e.charCodeAt(0);
  if (r === 1) return K(s) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
  if (K(s)) {
    if (n = 1, K(e.charCodeAt(1))) {
      let d = 2, f = d;
      for (; d < r && !K(e.charCodeAt(d)); ) d++;
      if (d < r && d !== f) {
        for (f = d; d < r && K(e.charCodeAt(d)); ) d++;
        if (d < r && d !== f) {
          for (f = d; d < r && !K(e.charCodeAt(d)); ) d++;
          d === r ? n = d : d !== f && (n = d + 1);
        }
      }
    }
  } else if (Nt(s) && e.charCodeAt(1) === Dt) {
    if (r <= 2) return t.root = t.dir = e, t;
    if (n = 2, K(e.charCodeAt(2))) {
      if (r === 3) return t.root = t.dir = e, t;
      n = 3;
    }
  }
  n > 0 && (t.root = e.slice(0, n));
  let i = -1, o = n, a = -1, c = true, l = e.length - 1, u = 0;
  for (; l >= n; --l) {
    if (s = e.charCodeAt(l), K(s)) {
      if (!c) {
        o = l + 1;
        break;
      }
      continue;
    }
    a === -1 && (c = false, a = l + 1), s === Er ? i === -1 ? i = l : u !== 1 && (u = 1) : i !== -1 && (u = -1);
  }
  return a !== -1 && (i === -1 || u === 0 || u === 1 && i === a - 1 && i === o + 1 ? t.base = t.name = e.slice(o, a) : (t.name = e.slice(o, i), t.base = e.slice(o, a), t.ext = e.slice(i, a))), o > 0 && o !== n ? t.dir = e.slice(0, o - 1) : t.dir = t.root, t;
}, sep: "\\", delimiter: ";", win32: null, posix: null }, fA = (() => {
  if (Ve) {
    const e = /\\/g;
    return () => {
      const t = wo().replace(e, "/");
      return t.slice(t.indexOf("/"));
    };
  }
  return () => wo();
})(), le = { resolve(...e) {
  let t = "", r = false;
  for (let n = e.length - 1; n >= 0 && !r; n--) {
    const s = e[n];
    ve(s, `paths[${n}]`), s.length !== 0 && (t = `${s}/${t}`, r = s.charCodeAt(0) === Le);
  }
  if (!r) {
    const n = fA();
    t = `${n}/${t}`, r = n.charCodeAt(0) === Le;
  }
  return t = Eo(t, !r, "/", Au), r ? `/${t}` : t.length > 0 ? t : ".";
}, normalize(e) {
  if (ve(e, "path"), e.length === 0) return ".";
  const t = e.charCodeAt(0) === Le, r = e.charCodeAt(e.length - 1) === Le;
  return e = Eo(e, !t, "/", Au), e.length === 0 ? t ? "/" : r ? "./" : "." : (r && (e += "/"), t ? `/${e}` : e);
}, isAbsolute(e) {
  return ve(e, "path"), e.length > 0 && e.charCodeAt(0) === Le;
}, join(...e) {
  if (e.length === 0) return ".";
  const t = [];
  for (let r = 0; r < e.length; ++r) {
    const n = e[r];
    ve(n, "path"), n.length > 0 && t.push(n);
  }
  return t.length === 0 ? "." : le.normalize(t.join("/"));
}, relative(e, t) {
  if (ve(e, "from"), ve(t, "to"), e === t || (e = le.resolve(e), t = le.resolve(t), e === t)) return "";
  const r = 1, n = e.length, s = n - r, i = 1, o = t.length - i, a = s < o ? s : o;
  let c = -1, l = 0;
  for (; l < a; l++) {
    const d = e.charCodeAt(r + l);
    if (d !== t.charCodeAt(i + l)) break;
    d === Le && (c = l);
  }
  if (l === a) if (o > a) {
    if (t.charCodeAt(i + l) === Le) return t.slice(i + l + 1);
    if (l === 0) return t.slice(i + l);
  } else s > a && (e.charCodeAt(r + l) === Le ? c = l : l === 0 && (c = 0));
  let u = "";
  for (l = r + c + 1; l <= n; ++l) (l === n || e.charCodeAt(l) === Le) && (u += u.length === 0 ? ".." : "/..");
  return `${u}${t.slice(i + c)}`;
}, toNamespacedPath(e) {
  return e;
}, dirname(e) {
  if (ve(e, "path"), e.length === 0) return ".";
  const t = e.charCodeAt(0) === Le;
  let r = -1, n = true;
  for (let s = e.length - 1; s >= 1; --s) if (e.charCodeAt(s) === Le) {
    if (!n) {
      r = s;
      break;
    }
  } else n = false;
  return r === -1 ? t ? "/" : "." : t && r === 1 ? "//" : e.slice(0, r);
}, basename(e, t) {
  t !== void 0 && ve(t, "suffix"), ve(e, "path");
  let r = 0, n = -1, s = true, i;
  if (t !== void 0 && t.length > 0 && t.length <= e.length) {
    if (t === e) return "";
    let o = t.length - 1, a = -1;
    for (i = e.length - 1; i >= 0; --i) {
      const c = e.charCodeAt(i);
      if (c === Le) {
        if (!s) {
          r = i + 1;
          break;
        }
      } else a === -1 && (s = false, a = i + 1), o >= 0 && (c === t.charCodeAt(o) ? --o === -1 && (n = i) : (o = -1, n = a));
    }
    return r === n ? n = a : n === -1 && (n = e.length), e.slice(r, n);
  }
  for (i = e.length - 1; i >= 0; --i) if (e.charCodeAt(i) === Le) {
    if (!s) {
      r = i + 1;
      break;
    }
  } else n === -1 && (s = false, n = i + 1);
  return n === -1 ? "" : e.slice(r, n);
}, extname(e) {
  ve(e, "path");
  let t = -1, r = 0, n = -1, s = true, i = 0;
  for (let o = e.length - 1; o >= 0; --o) {
    const a = e[o];
    if (a === "/") {
      if (!s) {
        r = o + 1;
        break;
      }
      continue;
    }
    n === -1 && (s = false, n = o + 1), a === "." ? t === -1 ? t = o : i !== 1 && (i = 1) : t !== -1 && (i = -1);
  }
  return t === -1 || n === -1 || i === 0 || i === 1 && t === n - 1 && t === r + 1 ? "" : e.slice(t, n);
}, format: N0.bind(null, "/"), parse(e) {
  ve(e, "path");
  const t = { root: "", dir: "", base: "", ext: "", name: "" };
  if (e.length === 0) return t;
  const r = e.charCodeAt(0) === Le;
  let n;
  r ? (t.root = "/", n = 1) : n = 0;
  let s = -1, i = 0, o = -1, a = true, c = e.length - 1, l = 0;
  for (; c >= n; --c) {
    const u = e.charCodeAt(c);
    if (u === Le) {
      if (!a) {
        i = c + 1;
        break;
      }
      continue;
    }
    o === -1 && (a = false, o = c + 1), u === Er ? s === -1 ? s = c : l !== 1 && (l = 1) : s !== -1 && (l = -1);
  }
  if (o !== -1) {
    const u = i === 0 && r ? 1 : i;
    s === -1 || l === 0 || l === 1 && s === o - 1 && s === i + 1 ? t.base = t.name = e.slice(u, o) : (t.name = e.slice(u, s), t.base = e.slice(u, o), t.ext = e.slice(s, o));
  }
  return i > 0 ? t.dir = e.slice(0, i - 1) : r && (t.dir = "/"), t;
}, sep: "/", delimiter: ":", win32: null, posix: null };
le.win32 = Ee.win32 = Ee, le.posix = Ee.posix = le;
var Ao = Ve ? Ee.normalize : le.normalize, WL = Ve ? Ee.isAbsolute : le.isAbsolute, yt = Ve ? Ee.join : le.join, Ro = Ve ? Ee.resolve : le.resolve, pA = Ve ? Ee.relative : le.relative, U0 = Ve ? Ee.dirname : le.dirname, gA = Ve ? Ee.basename : le.basename, GL = Ve ? Ee.extname : le.extname, KL = Ve ? Ee.format : le.format, qL = Ve ? Ee.parse : le.parse, jL = Ve ? Ee.toNamespacedPath : le.toNamespacedPath, To = Ve ? Ee.sep : le.sep, VL = Ve ? Ee.delimiter : le.delimiter;
h(), h();
function _A(e) {
  return e;
}
var mA = class {
  constructor(e, t) {
    this.lastCache = void 0, this.lastArgKey = void 0, typeof e == "function" ? (this._fn = e, this._computeKey = _A) : (this._fn = t, this._computeKey = e.getCacheKey);
  }
  get(e) {
    const t = this._computeKey(e);
    return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache;
  }
};
h();
function vA(e) {
  return !e || typeof e != "string" ? true : e.trim().length === 0;
}
function yA(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function SA(e, t, r = 0, n = e.length, s = 0, i = t.length) {
  for (; r < n && s < i; r++, s++) {
    const c = e.charCodeAt(r), l = t.charCodeAt(s);
    if (c < l) return -1;
    if (c > l) return 1;
  }
  const o = n - r, a = i - s;
  return o < a ? -1 : o > a ? 1 : 0;
}
function $0(e, t, r = 0, n = e.length, s = 0, i = t.length) {
  for (; r < n && s < i; r++, s++) {
    let c = e.charCodeAt(r), l = t.charCodeAt(s);
    if (c === l) continue;
    if (c >= 128 || l >= 128) return SA(e.toLowerCase(), t.toLowerCase(), r, n, s, i);
    F0(c) && (c -= 32), F0(l) && (l -= 32);
    const u = c - l;
    if (u !== 0) return u;
  }
  const o = n - r, a = i - s;
  return o < a ? -1 : o > a ? 1 : 0;
}
function F0(e) {
  return e >= 97 && e <= 122;
}
function H0(e) {
  return e >= 65 && e <= 90;
}
function bA(e, t) {
  return e.length === t.length && $0(e, t) === 0;
}
function wA(e) {
  return 55296 <= e && e <= 56319;
}
function B0(e) {
  return 56320 <= e && e <= 57343;
}
function EA(e, t) {
  return (e - 55296 << 10) + (t - 56320) + 65536;
}
var AA = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/, RA = /(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/, TA = /\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/, YL = new RegExp("(?:" + [AA.source, RA.source, TA.source].join("|") + ")", "g"), XL = "\uFEFF", kA = class ti {
  static getInstance() {
    return ti._INSTANCE || (ti._INSTANCE = new ti()), ti._INSTANCE;
  }
  constructor() {
    this._data = IA();
  }
  getGraphemeBreakType(t) {
    if (t < 32) return t === 10 ? 3 : t === 13 ? 2 : 4;
    if (t < 127) return 0;
    const r = this._data, n = r.length / 3;
    let s = 1;
    for (; s <= n; ) if (t < r[3 * s]) s = 2 * s;
    else if (t > r[3 * s + 1]) s = 2 * s + 1;
    else return r[3 * s + 2];
    return 0;
  }
};
kA._INSTANCE = null;
function IA() {
  return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
var vn = class uh {
  constructor(t) {
    this.confusableDictionary = t;
  }
  static getInstance(t) {
    return uh.cache.get(Array.from(t).join(","));
  }
  static getLocales() {
    return uh._locales.value;
  }
  isAmbiguous(t) {
    return this.confusableDictionary.has(t);
  }
  containsAmbiguousCharacter(t) {
    for (let r = 0; r < t.length; r++) {
      const n = t.codePointAt(r);
      if (typeof n == "number" && this.isAmbiguous(n)) return true;
    }
    return false;
  }
  getPrimaryConfusable(t) {
    return this.confusableDictionary.get(t);
  }
  getConfusableCodePoints() {
    return new Set(this.confusableDictionary.keys());
  }
};
vn.ambiguousCharacterData = new go(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), vn.cache = new mA((e) => {
  const t = e.split(",");
  function r(u) {
    const d = /* @__PURE__ */ new Map();
    for (let f = 0; f < u.length; f += 2) d.set(u[f], u[f + 1]);
    return d;
  }
  function n(u, d) {
    const f = new Map(u);
    for (const [p, g] of d) f.set(p, g);
    return f;
  }
  function s(u, d) {
    if (!u) return d;
    const f = /* @__PURE__ */ new Map();
    for (const [p, g] of u) d.has(p) && f.set(p, g);
    return f;
  }
  const i = vn.ambiguousCharacterData.value;
  let o = t.filter((u) => !u.startsWith("_") && u in i);
  o.length === 0 && (o = ["_default"]);
  let a;
  for (const u of o) {
    const d = r(i[u]);
    a = s(a, d);
  }
  const c = r(i._common), l = n(c, a);
  return new vn(l);
}), vn._locales = new go(() => Object.keys(vn.ambiguousCharacterData.value).filter((e) => !e.startsWith("_")));
var PA = class ri {
  static getRawData() {
    return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
  }
  static getData() {
    return this._data || (this._data = new Set([...Object.values(ri.getRawData())].flat())), this._data;
  }
  static isInvisibleCharacter(t) {
    return ri.getData().has(t);
  }
  static containsInvisibleCharacter(t) {
    for (let r = 0; r < t.length; r++) {
      const n = t.codePointAt(r);
      if (typeof n == "number" && (ri.isInvisibleCharacter(n) || n === 32)) return true;
    }
    return false;
  }
  static get codePoints() {
    return ri.getData();
  }
};
PA._data = void 0;
function ir(e) {
  return e === 47 || e === 92;
}
function z0(e) {
  return e.replace(/[\\/]/g, le.sep);
}
function OA(e) {
  return e.indexOf("/") === -1 && (e = z0(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
}
function W0(e, t = le.sep) {
  if (!e) return "";
  const r = e.length, n = e.charCodeAt(0);
  if (ir(n)) {
    if (ir(e.charCodeAt(1)) && !ir(e.charCodeAt(2))) {
      let i = 3;
      const o = i;
      for (; i < r && !ir(e.charCodeAt(i)); i++) ;
      if (o !== i && !ir(e.charCodeAt(i + 1))) {
        for (i += 1; i < r; i++) if (ir(e.charCodeAt(i))) return e.slice(0, i + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (xA(n) && e.charCodeAt(1) === 58) return ir(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  let s = e.indexOf("://");
  if (s !== -1) {
    for (s += 3; s < r; s++) if (ir(e.charCodeAt(s))) return e.slice(0, s + 1);
  }
  return "";
}
function CA(e, t, r) {
  return r === 0 ? true : e.charCodeAt(0) !== t.charCodeAt(0) ? false : r === 1 ? true : e.charCodeAt(r - 1) !== t.charCodeAt(r - 1) ? false : e.startsWith(t);
}
function LA(e, t, r) {
  for (let n = 0; n < r; n++) {
    let s = e.charCodeAt(n), i = t.charCodeAt(n);
    if (s !== i) {
      if (s >= 128 || i >= 128) return $0(e, t, n, r, n, r) === 0;
      if (s >= 97 && s <= 122 && (s -= 32), i >= 97 && i <= 122 && (i -= 32), s !== i) return false;
    }
  }
  return true;
}
function G0(e, t, r, n = To) {
  if (e === t) return true;
  if (!e || !t) return false;
  const s = e.length, i = t.length;
  if (i > s) return false;
  const o = n.charCodeAt(0), a = t.charCodeAt(i - 1) === o;
  if (i < s && !a && e.charCodeAt(i) !== o) return false;
  if (r) {
    if (!LA(e, t, i)) return false;
  } else if (!CA(e, t, i)) return false;
  return i === s || a ? true : e.charCodeAt(i) === o;
}
function xA(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
h(), h();
var MA = /^\w[\w\d+.-]*$/, DA = /^\//, NA = /^\/\//;
function UA(e, t) {
  if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
  if (e.scheme && !MA.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
  if (e.path) {
    if (e.authority) {
      if (!DA.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
    } else if (NA.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
  }
}
function $A(e, t) {
  return !e && !t ? "file" : e;
}
function FA(e, t) {
  switch (e) {
    case "https":
    case "http":
    case "file":
      t ? t[0] !== lt && (t = lt + t) : t = lt;
      break;
  }
  return t;
}
var fe = "", lt = "/", HA = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, re = class ha {
  static isUri(t) {
    return t instanceof ha ? true : t ? typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function" : false;
  }
  constructor(t, r, n, s, i, o = false) {
    typeof t == "object" ? (this.scheme = t.scheme || fe, this.authority = t.authority || fe, this.path = t.path || fe, this.query = t.query || fe, this.fragment = t.fragment || fe) : (this.scheme = $A(t, o), this.authority = r || fe, this.path = FA(this.scheme, n || fe), this.query = s || fe, this.fragment = i || fe, UA(this, o));
  }
  get fsPath() {
    return ko(this, false);
  }
  with(t) {
    if (!t) return this;
    let { scheme: r, authority: n, path: s, query: i, fragment: o } = t;
    return r === void 0 ? r = this.scheme : r === null && (r = fe), n === void 0 ? n = this.authority : n === null && (n = fe), s === void 0 ? s = this.path : s === null && (s = fe), i === void 0 ? i = this.query : i === null && (i = fe), o === void 0 ? o = this.fragment : o === null && (o = fe), r === this.scheme && n === this.authority && s === this.path && i === this.query && o === this.fragment ? this : new yn(r, n, s, i, o);
  }
  static parse(t, r = false) {
    const n = HA.exec(t);
    return n ? new yn(n[2] || fe, Io(n[4] || fe), Io(n[5] || fe), Io(n[7] || fe), Io(n[9] || fe), r) : new yn(fe, fe, fe, fe, fe);
  }
  static file(t) {
    let r = fe;
    if (br && (t = t.replace(/\\/g, lt)), t[0] === lt && t[1] === lt) {
      const n = t.indexOf(lt, 2);
      n === -1 ? (r = t.substring(2), t = lt) : (r = t.substring(2, n), t = t.substring(n) || lt);
    }
    return new yn("file", r, t, fe, fe);
  }
  static from(t, r) {
    return new yn(t.scheme, t.authority, t.path, t.query, t.fragment, r);
  }
  static joinPath(t, ...r) {
    if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
    let n;
    return br && t.scheme === "file" ? n = ha.file(Ee.join(ko(t, true), ...r)).path : n = le.join(t.path, ...r), t.with({ path: n });
  }
  toString(t = false) {
    return Ru(this, t);
  }
  toJSON() {
    return this;
  }
  static revive(t) {
    if (t) {
      if (t instanceof ha) return t;
      {
        const r = new yn(t);
        return r._formatted = t.external ?? null, r._fsPath = t._sep === K0 ? t.fsPath ?? null : null, r;
      }
    } else return t;
  }
  [/* @__PURE__ */ Symbol.for("debug.description")]() {
    return `URI(${this.toString()})`;
  }
}, K0 = br ? 1 : void 0, yn = class extends re {
  constructor() {
    super(...arguments), this._formatted = null, this._fsPath = null;
  }
  get fsPath() {
    return this._fsPath || (this._fsPath = ko(this, false)), this._fsPath;
  }
  toString(e = false) {
    return e ? Ru(this, true) : (this._formatted || (this._formatted = Ru(this, false)), this._formatted);
  }
  toJSON() {
    const e = { $mid: 1 };
    return this._fsPath && (e.fsPath = this._fsPath, e._sep = K0), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
  }
}, q0 = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
function j0(e, t, r) {
  let n, s = -1;
  for (let i = 0; i < e.length; i++) {
    const o = e.charCodeAt(i);
    if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || o === 45 || o === 46 || o === 95 || o === 126 || t && o === 47 || r && o === 91 || r && o === 93 || r && o === 58) s !== -1 && (n += encodeURIComponent(e.substring(s, i)), s = -1), n !== void 0 && (n += e.charAt(i));
    else {
      n === void 0 && (n = e.substr(0, i));
      const a = q0[o];
      a !== void 0 ? (s !== -1 && (n += encodeURIComponent(e.substring(s, i)), s = -1), n += a) : s === -1 && (s = i);
    }
  }
  return s !== -1 && (n += encodeURIComponent(e.substring(s))), n !== void 0 ? n : e;
}
function BA(e) {
  let t;
  for (let r = 0; r < e.length; r++) {
    const n = e.charCodeAt(r);
    n === 35 || n === 63 ? (t === void 0 && (t = e.substr(0, r)), t += q0[n]) : t !== void 0 && (t += e[r]);
  }
  return t !== void 0 ? t : e;
}
function ko(e, t) {
  let r;
  return e.authority && e.path.length > 1 && e.scheme === "file" ? r = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? r = e.path.substr(1) : r = e.path[1].toLowerCase() + e.path.substr(2) : r = e.path, br && (r = r.replace(/\//g, "\\")), r;
}
function Ru(e, t) {
  const r = t ? BA : j0;
  let n = "", { scheme: s, authority: i, path: o, query: a, fragment: c } = e;
  if (s && (n += s, n += ":"), (i || s === "file") && (n += lt, n += lt), i) {
    let l = i.indexOf("@");
    if (l !== -1) {
      const u = i.substr(0, l);
      i = i.substr(l + 1), l = u.lastIndexOf(":"), l === -1 ? n += r(u, false, false) : (n += r(u.substr(0, l), false, false), n += ":", n += r(u.substr(l + 1), false, true)), n += "@";
    }
    i = i.toLowerCase(), l = i.lastIndexOf(":"), l === -1 ? n += r(i, false, true) : (n += r(i.substr(0, l), false, true), n += i.substr(l));
  }
  if (o) {
    if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
      const l = o.charCodeAt(1);
      l >= 65 && l <= 90 && (o = `/${String.fromCharCode(l + 32)}:${o.substr(3)}`);
    } else if (o.length >= 2 && o.charCodeAt(1) === 58) {
      const l = o.charCodeAt(0);
      l >= 65 && l <= 90 && (o = `${String.fromCharCode(l + 32)}:${o.substr(2)}`);
    }
    n += r(o, true, false);
  }
  return a && (n += "?", n += r(a, false, false)), c && (n += "#", n += t ? c : j0(c, false, false)), n;
}
function V0(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.length > 3 ? e.substr(0, 3) + V0(e.substr(3)) : e;
  }
}
var Y0 = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function Io(e) {
  return e.match(Y0) ? e.replace(Y0, (t) => V0(t)) : e;
}
var Ie;
((e) => {
  e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.git = "git", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebook = "vscode-notebook", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.terminal = "terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatSesssion = "vscode-chat-editor", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.aiChat = "cursor.aichat", e.contextObject = "cursor.context-object", e.composer = "cursor.composer", e.aiSettings = "cursor.aisettings", e.tinderDiffEditor = "cursor.tinderdiffeditor", e.vscodeFileResource = "vscode-file", e.cursorRpcDevtools = "cursor-rpc-devtools", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.cursorDev = "cursor-dev-utils", e.outputChannel = "output", e.accessibleView = "accessible-view", e.backgroundComposer = "cursor.backgroundcomposer", e.cursorAgent = "cursor.agent", e.personalEnvironmentJson = "cursor.personalenvironmentjson", e.bugbot = "cursor.bugbot", e.backgroundComposerPeek = "background-composer-peek", e.cursorPlan = "cursor-plan", e.cursorWorker = "cursor-worker", e.reviewChanges = "cursor.reviewchanges", e.cursorBlame = "cursor.blame", e.cursorFileBlame = "cursor.fileblame";
})(Ie || (Ie = {}));
var zA = "tkn", WA = class {
  constructor() {
    this._hosts = /* @__PURE__ */ Object.create(null), this._ports = /* @__PURE__ */ Object.create(null), this._connectionTokens = /* @__PURE__ */ Object.create(null), this._preferredWebSchema = "http", this._delegate = null, this._serverRootPath = "/";
  }
  setPreferredWebSchema(e) {
    this._preferredWebSchema = e;
  }
  setDelegate(e) {
    this._delegate = e;
  }
  setServerRootPath(e, t) {
    this._serverRootPath = le.join(t ?? "/", KA(e));
  }
  getServerRootPath() {
    return this._serverRootPath;
  }
  get _remoteResourcesPath() {
    return le.join(this._serverRootPath, Ie.vscodeRemoteResource);
  }
  set(e, t, r) {
    this._hosts[e] = t, this._ports[e] = r;
  }
  setConnectionToken(e, t) {
    this._connectionTokens[e] = t;
  }
  getPreferredWebSchema() {
    return this._preferredWebSchema;
  }
  rewrite(e) {
    if (this._delegate) try {
      return this._delegate(e);
    } catch (o) {
      return Ct(o), e;
    }
    const t = e.authority;
    let r = this._hosts[t];
    r && r.indexOf(":") !== -1 && r.indexOf("[") === -1 && (r = `[${r}]`);
    const n = this._ports[t], s = this._connectionTokens[t];
    let i = `path=${encodeURIComponent(e.path)}`;
    return typeof s == "string" && (i += `&${zA}=${encodeURIComponent(s)}`), re.from({ scheme: wu ? this._preferredWebSchema : Ie.vscodeRemoteResource, authority: `${r}:${n}`, path: this._remoteResourcesPath, query: i });
  }
}, GA = new WA();
function KA(e) {
  return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
var qA = "vscode-app", X0 = class fa {
  asBrowserUri(t) {
    const r = this.toUri(t);
    return this.uriToBrowserUri(r);
  }
  uriToBrowserUri(t) {
    return t.scheme === Ie.vscodeRemote ? GA.rewrite(t) : t.scheme === Ie.file && (J6 || Q6 === `${Ie.vscodeFileResource}://${fa.FALLBACK_AUTHORITY}`) ? t.with({ scheme: Ie.vscodeFileResource, authority: t.authority || fa.FALLBACK_AUTHORITY, query: null, fragment: null }) : t;
  }
  asFileUri(t) {
    const r = this.toUri(t);
    return this.uriToFileUri(r);
  }
  uriToFileUri(t) {
    return t.scheme === Ie.vscodeFileResource ? t.with({ scheme: Ie.file, authority: t.authority !== fa.FALLBACK_AUTHORITY ? t.authority : null, query: null, fragment: null }) : t;
  }
  toUri(t) {
    if (re.isUri(t)) return t;
    if (globalThis._VSCODE_FILE_ROOT) {
      const r = globalThis._VSCODE_FILE_ROOT;
      if (/^\w[\w\d+.-]*:\/\//.test(r)) return re.joinPath(re.parse(r, true), t);
      const n = yt(r, t);
      return re.file(n);
    }
    throw new Error("Cannot determine URI for module id!");
  }
};
X0.FALLBACK_AUTHORITY = qA;
var jA = X0, J0 = new jA(), JL = Object.freeze({ "Cache-Control": "no-cache, no-store" }), ZL = Object.freeze({ "Document-Policy": "include-js-call-stacks-in-crash-reports, js-profiling" }), Z0;
((e) => {
  const t = /* @__PURE__ */ new Map([["1", { "Cross-Origin-Opener-Policy": "same-origin" }], ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }], ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }]]);
  e.CoopAndCoep = Object.freeze(t.get("3"));
  const r = "vscode-coi";
  function n(i) {
    let o;
    typeof i == "string" ? o = new URL(i).searchParams : i instanceof URL ? o = i.searchParams : re.isUri(i) && (o = new URL(i.toString(true)).searchParams);
    const a = o?.get(r);
    if (a) return t.get(a);
  }
  e.getHeadersFromQuery = n;
  function s(i, o, a) {
    if (!globalThis.crossOriginIsolated) return;
    const c = o && a ? "3" : a ? "2" : "1";
    i instanceof URLSearchParams ? i.set(r, c) : i[r] = c;
  }
  e.addSearchParam = s;
})(Z0 || (Z0 = {}));
function Ut(e) {
  return ko(e, true);
}
var Tu = class {
  constructor(e) {
    this._ignorePathCasing = e;
  }
  compare(e, t, r = false) {
    return e === t ? 0 : yA(this.getComparisonKey(e, r), this.getComparisonKey(t, r));
  }
  isEqual(e, t, r = false) {
    return e === t ? true : !e || !t ? false : this.getComparisonKey(e, r) === this.getComparisonKey(t, r);
  }
  getComparisonKey(e, t = false) {
    return e.with({ path: this._ignorePathCasing(e) ? e.path.toLowerCase() : void 0, fragment: t ? null : void 0 }).toString();
  }
  ignorePathCasing(e) {
    return this._ignorePathCasing(e);
  }
  isEqualOrParent(e, t, r = false) {
    if (e.scheme === t.scheme) {
      if (e.scheme === Ie.file) return G0(Ut(e), Ut(t), this._ignorePathCasing(e)) && e.query === t.query && (r || e.fragment === t.fragment);
      if (Q0(e.authority, t.authority)) return G0(e.path, t.path, this._ignorePathCasing(e), "/") && e.query === t.query && (r || e.fragment === t.fragment);
    }
    return false;
  }
  joinPath(e, ...t) {
    return re.joinPath(e, ...t);
  }
  basenameOrAuthority(e) {
    return VA(e) || e.authority;
  }
  basename(e) {
    return le.basename(e.path);
  }
  extname(e) {
    return le.extname(e.path);
  }
  dirname(e) {
    if (e.path.length === 0) return e;
    let t;
    return e.scheme === Ie.file ? t = re.file(U0(Ut(e))).path : (t = le.dirname(e.path), e.authority && t.length && t.charCodeAt(0) !== 47 && (console.error(`dirname("${e.toString})) resulted in a relative path`), t = "/")), e.with({ path: t });
  }
  normalizePath(e) {
    if (!e.path.length) return e;
    let t;
    return e.scheme === Ie.file ? t = re.file(Ao(Ut(e))).path : t = le.normalize(e.path), e.with({ path: t });
  }
  relativePath(e, t) {
    if (e.scheme !== t.scheme || !Q0(e.authority, t.authority)) return;
    if (e.scheme === Ie.file) {
      const s = pA(Ut(e), Ut(t));
      return br ? z0(s) : s;
    }
    let r = e.path || "/";
    const n = t.path || "/";
    if (this._ignorePathCasing(e)) {
      let s = 0;
      for (const i = Math.min(r.length, n.length); s < i && !(r.charCodeAt(s) !== n.charCodeAt(s) && r.charAt(s).toLowerCase() !== n.charAt(s).toLowerCase()); s++) ;
      r = n.substr(0, s) + r.substr(s);
    }
    return le.relative(r, n);
  }
  resolvePath(e, t) {
    if (e.scheme === Ie.file) {
      const r = re.file(Ro(Ut(e), t));
      return e.with({ authority: r.authority, path: r.path });
    }
    return t = OA(t), e.with({ path: le.resolve(e.path, t) });
  }
  isAbsolutePath(e) {
    return !!e.path && e.path[0] === "/";
  }
  isEqualAuthority(e, t) {
    return e === t || e !== void 0 && t !== void 0 && bA(e, t);
  }
  hasTrailingPathSeparator(e, t = To) {
    if (e.scheme === Ie.file) {
      const r = Ut(e);
      return r.length > W0(r).length && r[r.length - 1] === t;
    } else {
      const r = e.path;
      return r.length > 1 && r.charCodeAt(r.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath);
    }
  }
  removeTrailingPathSeparator(e, t = To) {
    return ev(e, t) ? e.with({ path: e.path.substr(0, e.path.length - 1) }) : e;
  }
  addTrailingPathSeparator(e, t = To) {
    let r = false;
    if (e.scheme === Ie.file) {
      const n = Ut(e);
      r = n !== void 0 && n.length === W0(n).length && n[n.length - 1] === t;
    } else {
      t = "/";
      const n = e.path;
      r = n.length === 1 && n.charCodeAt(n.length - 1) === 47;
    }
    return !r && !ev(e, t) ? e.with({ path: e.path + "/" }) : e;
  }
}, se = new Tu(() => false), QL = new Tu((e) => e.scheme === Ie.file ? !bu : true), ex = new Tu((e) => true), tx = se.isEqual.bind(se), rx = se.isEqualOrParent.bind(se), nx = se.getComparisonKey.bind(se), sx = se.basenameOrAuthority.bind(se), VA = se.basename.bind(se), ix = se.extname.bind(se), ox = se.dirname.bind(se), ut = se.joinPath.bind(se), ax = se.normalizePath.bind(se), cx = se.relativePath.bind(se), lx = se.resolvePath.bind(se), ux = se.isAbsolutePath.bind(se), Q0 = se.isEqualAuthority.bind(se), ev = se.hasTrailingPathSeparator.bind(se), dx = se.removeTrailingPathSeparator.bind(se), hx = se.addTrailingPathSeparator.bind(se), tv;
((e) => {
  e.META_DATA_LABEL = "label", e.META_DATA_DESCRIPTION = "description", e.META_DATA_SIZE = "size", e.META_DATA_MIME = "mime";
  function t(r) {
    const n = /* @__PURE__ */ new Map();
    r.path.substring(r.path.indexOf(";") + 1, r.path.lastIndexOf(";")).split(";").forEach((o) => {
      const [a, c] = o.split(":");
      a && c && n.set(a, c);
    });
    const i = r.path.substring(0, r.path.indexOf(";"));
    return i && n.set(e.META_DATA_MIME, i), n;
  }
  e.parseMetaData = t;
})(tv || (tv = {})), h();
var fx = /* @__PURE__ */ Symbol("MicrotaskDelay");
function ku(e) {
  const t = new P0(), r = e(t.token);
  let n = false;
  const s = new Promise((i, o) => {
    const a = t.token.onCancellationRequested(() => {
      n = true, a.dispose(), o(new yr());
    });
    Promise.resolve(r).then((c) => {
      a.dispose(), t.dispose(), n ? hu(c) && c.dispose() : i(c);
    }, (c) => {
      a.dispose(), t.dispose(), o(c);
    });
  });
  return new class {
    cancel() {
      t.cancel(), t.dispose();
    }
    then(i, o) {
      return s.then(i, o);
    }
    catch(i) {
      return this.then(void 0, i);
    }
    finally(i) {
      return s.finally(i);
    }
  }();
}
function rv(e, t) {
  return t ? new Promise((r, n) => {
    const s = setTimeout(() => {
      i.dispose(), r();
    }, e), i = t.onCancellationRequested(() => {
      clearTimeout(s), i.dispose(), n(new yr());
    });
  }) : ku((r) => rv(e, r));
}
function YA(e, t = 0, r) {
  const n = setTimeout(() => {
    e(), r && s.dispose();
  }, t), s = rr(() => {
    clearTimeout(n), r?.delete(s);
  });
  return r?.add(s), s;
}
var XA = class {
  constructor(e) {
    this._size = 0, this._isDisposed = false, this.maxDegreeOfParalellism = e, this.outstandingPromises = [], this.runningPromises = 0, this._onDrained = new j();
  }
  whenIdle() {
    return this.size > 0 ? ke.toPromise(this.onDrained) : Promise.resolve();
  }
  get onDrained() {
    return this._onDrained.event;
  }
  get size() {
    return this._size;
  }
  queue(e) {
    if (this._isDisposed) throw new Error("Object has been disposed");
    return this._size++, new Promise((t, r) => {
      this.outstandingPromises.push({ factory: e, c: t, e: r }), this.consume();
    });
  }
  consume() {
    for (; this.outstandingPromises.length && this.runningPromises < this.maxDegreeOfParalellism; ) {
      const e = this.outstandingPromises.shift();
      this.runningPromises++;
      const t = e.factory();
      t.then(e.c, e.e), t.then(() => this.consumed(), () => this.consumed());
    }
  }
  consumed() {
    this._isDisposed || (this.runningPromises--, --this._size === 0 && this._onDrained.fire(), this.outstandingPromises.length > 0 && this.consume());
  }
  clear() {
    if (this._isDisposed) throw new Error("Object has been disposed");
    this.outstandingPromises.length = 0, this._size = this.runningPromises;
  }
  dispose() {
    this._isDisposed = true, this.outstandingPromises.length = 0, this._size = 0, this._onDrained.dispose();
  }
}, JA, Po;
(function() {
  typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function" ? Po = (e, t, r) => {
    tA(() => {
      if (n) return;
      const s = Date.now() + 15;
      t(Object.freeze({ didTimeout: true, timeRemaining() {
        return Math.max(0, s - Date.now());
      } }));
    });
    let n = false;
    return { dispose() {
      n || (n = true);
    } };
  } : Po = (e, t, r) => {
    const n = e.requestIdleCallback(t, typeof r == "number" ? { timeout: r } : void 0);
    let s = false;
    return { dispose() {
      s || (s = true, e.cancelIdleCallback(n));
    } };
  }, JA = (e, t) => Po(globalThis, e, t);
})();
var ZA = class {
  constructor(e, t) {
    this._didRun = false, this._executor = () => {
      try {
        this._value = t();
      } catch (r) {
        this._error = r;
      } finally {
        this._didRun = true;
      }
    }, this._handle = Po(e, () => this._executor());
  }
  dispose() {
    this._handle.dispose();
  }
  get value() {
    if (this._didRun || (this._handle.dispose(), this._executor()), this._error) throw this._error;
    return this._value;
  }
  get isInitialized() {
    return this._didRun;
  }
}, QA = class extends ZA {
  constructor(e) {
    super(globalThis, e);
  }
}, nv;
((e) => {
  async function t(n) {
    let s;
    const i = await Promise.all(n.map((o) => o.then((a) => a, (a) => {
      s || (s = a);
    })));
    if (typeof s < "u") throw s;
    return i;
  }
  e.settled = t;
  function r(n) {
    return new Promise(async (s, i) => {
      try {
        await n(s, i);
      } catch (o) {
        i(o);
      }
    });
  }
  e.withAsyncBody = r;
})(nv || (nv = {}));
var sv = class it {
  static fromArray(t) {
    return new it((r) => {
      r.emitMany(t);
    });
  }
  static fromPromise(t) {
    return new it(async (r) => {
      r.emitMany(await t);
    });
  }
  static fromPromisesResolveOrder(t) {
    return new it(async (r) => {
      await Promise.all(t.map(async (n) => r.emitOne(await n)));
    });
  }
  static merge(t) {
    return new it(async (r) => {
      await Promise.all(t.map(async (n) => {
        for await (const s of n) r.emitOne(s);
      }));
    });
  }
  constructor(t, r) {
    this._state = 0, this._results = [], this._error = null, this._onReturn = r, this._onStateChanged = new j(), queueMicrotask(async () => {
      const n = { emitOne: (s) => this.emitOne(s), emitMany: (s) => this.emitMany(s), reject: (s) => this.reject(s) };
      try {
        await Promise.resolve(t(n)), this.resolve();
      } catch (s) {
        this.reject(s);
      } finally {
        n.emitOne = void 0, n.emitMany = void 0, n.reject = void 0;
      }
    });
  }
  [Symbol.asyncIterator]() {
    let t = 0;
    return { next: async () => {
      do {
        if (this._state === 2) throw this._error;
        if (t < this._results.length) return { done: false, value: this._results[t++] };
        if (this._state === 1) return { done: true, value: void 0 };
        await ke.toPromise(this._onStateChanged.event);
      } while (true);
    }, return: async () => (this._onReturn?.(), { done: true, value: void 0 }) };
  }
  static map(t, r) {
    return new it(async (n) => {
      for await (const s of t) n.emitOne(r(s));
    });
  }
  map(t) {
    return it.map(this, t);
  }
  static filter(t, r) {
    return new it(async (n) => {
      for await (const s of t) r(s) && n.emitOne(s);
    });
  }
  filter(t) {
    return it.filter(this, t);
  }
  static coalesce(t) {
    return it.filter(t, (r) => !!r);
  }
  coalesce() {
    return it.coalesce(this);
  }
  static async toPromise(t) {
    const r = [];
    for await (const n of t) r.push(n);
    return r;
  }
  toPromise() {
    return it.toPromise(this);
  }
  emitOne(t) {
    this._state === 0 && (this._results.push(t), this._onStateChanged.fire());
  }
  emitMany(t) {
    this._state === 0 && (this._results = this._results.concat(t), this._onStateChanged.fire());
  }
  resolve() {
    this._state === 0 && (this._state = 1, this._onStateChanged.fire());
  }
  reject(t) {
    this._state === 0 && (this._state = 2, this._error = t, this._onStateChanged.fire());
  }
};
sv.EMPTY = sv.fromArray([]), h(), h();
function oe(e, t, r) {
  let n = null, s = null;
  if (typeof r.value == "function" ? (n = "value", s = r.value, s.length !== 0 && console.warn("Memoize should only be used in functions with zero parameters")) : typeof r.get == "function" && (n = "get", s = r.get), !s) throw new Error("not supported");
  const i = `$memoize$${t}`;
  r[n] = function(...o) {
    return this.hasOwnProperty(i) || Object.defineProperty(this, i, { configurable: false, enumerable: false, writable: false, value: s.apply(this, o) }), this[i];
  };
}
h();
var e3 = Object.prototype.hasOwnProperty;
function Oo(e, t = 0) {
  if (typeof e != "object" || e === null || t > 200) return e;
  switch (e.$mid) {
    case 1:
      return re.revive(e);
    case 2:
      return new RegExp(e.source, e.flags);
    case 17:
      return new Date(e.source);
  }
  if (Array.isArray(e)) for (let r = 0; r < e.length; ++r) {
    const n = e[r];
    if (n !== null && typeof n == "object") {
      const s = Oo(n, t + 1);
      s !== n && (e[r] = s);
    }
  }
  else {
    if (e instanceof We || e instanceof Uint8Array) return e;
    for (const r in e) if (e3.call(e, r)) {
      const n = e[r];
      if (n !== null && typeof n == "object") {
        const s = Oo(n, t + 1);
        s !== n && (e[r] = s);
      }
    }
  }
  return e;
}
var iv = 50, ov = false, av;
function Ar(e) {
  switch (e) {
    case 100:
      return "req";
    case 101:
      return "cancel";
    case 102:
      return "subscribe";
    case 103:
      return "unsubscribe";
  }
}
function Ts(e) {
  switch (e) {
    case 200:
      return "init";
    case 201:
      return "reply:";
    case 202:
    case 203:
      return "replyErr:";
    case 204:
      return "event:";
  }
}
function Rr(e) {
  let t = 0;
  for (let r = 0; ; r += 7) {
    const n = e.readUInt8();
    if (t |= (n & 127) << r, !(n & 128)) return t;
  }
}
function Tr(e, t) {
  if (t === 0) {
    e.writeUInt8(0);
    return;
  }
  do {
    let r = t & 127;
    t = t >>> 7, t > 0 && (r |= 128), e.writeUInt8(r);
  } while (t !== 0);
}
var Iu = class {
  constructor(e) {
    this.buffer = e, this.pos = 0;
  }
  read(e) {
    const t = this.buffer.slice(this.pos, this.pos + e);
    return this.pos += t.byteLength, t;
  }
  readUInt8() {
    return this.buffer.readUInt8(this.pos++);
  }
}, cv = 4 * 1024, t3 = 512 * 1024, r3 = 64 * 1024, ks, lv = We.alloc(0), uv = class {
  constructor() {
    this.length = 0, this.segmentStart = 0, this.totalLength = 0, this.fragments = void 0, ks ? (this.data = ks, ks = void 0) : this.data = We.alloc(cv);
  }
  get buffer() {
    if (!this.fragments) {
      const e = We.alloc(this.length);
      return e.set(this.data.slice(0, this.length), 0), e;
    }
    return this.flushSegment(), We.concat(this.fragments, this.totalLength);
  }
  ensureCapacity(e) {
    const t = this.length + e;
    if (t <= this.data.byteLength) return;
    let r = Math.max(this.data.byteLength * 2, cv);
    for (; r < t; ) r *= 2;
    const n = We.alloc(r);
    this.length > 0 && n.set(this.data.slice(0, this.length), 0), this.data = n;
  }
  flushSegment() {
    this.length > this.segmentStart && (this.fragments.push(this.data.slice(this.segmentStart, this.length)), this.segmentStart = this.length);
  }
  write(e) {
    this.ensureCapacity(e.byteLength), this.data.set(e, this.length), this.length += e.byteLength, this.totalLength += e.byteLength;
  }
  writeUInt8(e) {
    this.ensureCapacity(1), this.data.buffer[this.length++] = e, this.totalLength++;
  }
  writeReference(e) {
    if (e.byteLength < r3) {
      this.write(e);
      return;
    }
    this.fragments || (this.fragments = []), this.flushSegment(), this.fragments.push(e), this.totalLength += e.byteLength;
  }
  dispose() {
    !ks && this.data.byteLength <= t3 && this.data !== lv && (ks = this.data), this.data = lv, this.length = 0, this.segmentStart = 0, this.totalLength = 0, this.fragments = void 0;
  }
}, dv = typeof Buffer < "u", n3 = 64 * 1024, s3 = 8;
function i3(e) {
  return !(e === null || typeof e != "object" || Array.isArray(e) || e instanceof We || e instanceof Uint8Array || dv && Buffer.isBuffer(e));
}
function o3(e) {
  if (e.length < s3) return false;
  for (let t = 0; t < e.length; t++) if (!i3(e[t])) return false;
  return true;
}
function Pu(e, t) {
  if (t.length >= n3) {
    const r = We.fromString(t);
    Tr(e, r.byteLength), e.writeReference(r);
    return;
  }
  We.withPooledString(t, (r) => {
    Tr(e, r.byteLength), e.write(r);
  });
}
function Is(e, t) {
  if (typeof t > "u") e.writeUInt8(0);
  else if (typeof t == "string") e.writeUInt8(1), Pu(e, t);
  else if (dv && Buffer.isBuffer(t)) e.writeUInt8(2), Tr(e, t.byteLength), e.writeReference(We.wrap(t));
  else if (t instanceof We) e.writeUInt8(3), Tr(e, t.byteLength), e.writeReference(t);
  else if (Array.isArray(t)) {
    if (o3(t)) {
      const r = JSON.stringify(t);
      e.writeUInt8(5), Pu(e, r);
      return;
    }
    e.writeUInt8(4), Tr(e, t.length);
    for (const r of t) Is(e, r);
  } else if (typeof t == "number" && (t | 0) === t) e.writeUInt8(6), Tr(e, t);
  else if (t instanceof Uint8Array) e.writeUInt8(7), Tr(e, t.length), e.writeReference(We.wrap(t));
  else {
    const r = JSON.stringify(t);
    e.writeUInt8(5), Pu(e, r);
  }
}
function Sn(e) {
  switch (e.readUInt8()) {
    case 0:
      return;
    case 1:
      return e.read(Rr(e)).toString();
    case 2:
      return e.read(Rr(e)).buffer;
    case 3:
      return e.read(Rr(e));
    case 7:
      return e.read(Rr(e)).buffer;
    case 4: {
      const r = Rr(e), n = [];
      for (let s = 0; s < r; s++) n.push(Sn(e));
      return n;
    }
    case 5:
      return JSON.parse(e.read(Rr(e)).toString());
    case 6:
      return Rr(e);
  }
}
var a3 = class {
  constructor(e, t, r = null, n = 1e3) {
    this.protocol = e, this.ctx = t, this.logger = r, this.timeoutDelay = n, this.channels = /* @__PURE__ */ new Map(), this.activeRequests = /* @__PURE__ */ new Map(), this.protocolListener = new ws(), this.pendingRequests = /* @__PURE__ */ new Map(), this.protocolListener.value = this.protocol.onMessage((s) => this.onRawMessage(s)), this.sendResponse({ type: 200 });
  }
  registerChannel(e, t) {
    this.channels.set(e, t), setTimeout(() => this.flushPendingRequests(e), 0);
  }
  sendResponse(e) {
    switch (e.type) {
      case 200: {
        const t = this.send([e.type]);
        this.logger?.logOutgoing(t, 0, 1, Ts(e.type));
        return;
      }
      case 201:
      case 202:
      case 204:
      case 203: {
        const t = this.send([e.type, e.id], e.data);
        this.logger?.logOutgoing(t, e.id, 1, Ts(e.type), e.data);
        return;
      }
    }
  }
  send(e, t = void 0) {
    const r = new uv();
    try {
      return Is(r, e), Is(r, t), this.sendBuffer(r.buffer);
    } finally {
      r.dispose();
    }
  }
  sendBuffer(e) {
    try {
      return this.protocol.send(e), e.byteLength;
    } catch {
      return 0;
    }
  }
  onRawMessage(e) {
    const t = new Iu(e), r = ov, n = r ? performance.now() : 0, s = Sn(t), i = s[0];
    if (i !== 100 && i !== 101 && i !== 102 && i !== 103) return;
    const o = Sn(t);
    if (r) {
      const a = performance.now() - n;
      a > iv && av?.({ durationMs: a, byteLength: e.byteLength, requestId: s[1] ?? 0, channelName: s[2], command: s[3], messageType: Ar(i) });
    }
    switch (i) {
      case 100:
        return this.logger?.logIncoming(e.byteLength, s[1], 1, `${Ar(i)}: ${s[2]}.${s[3]}`, o), this.onPromise({ type: i, id: s[1], channelName: s[2], name: s[3], arg: o });
      case 102:
        return this.logger?.logIncoming(e.byteLength, s[1], 1, `${Ar(i)}: ${s[2]}.${s[3]}`, o), this.onEventListen({ type: i, id: s[1], channelName: s[2], name: s[3], arg: o });
      case 101:
        return this.logger?.logIncoming(e.byteLength, s[1], 1, `${Ar(i)}`), this.disposeActiveRequest({ type: i, id: s[1] });
      case 103:
        return this.logger?.logIncoming(e.byteLength, s[1], 1, `${Ar(i)}`), this.disposeActiveRequest({ type: i, id: s[1] });
    }
  }
  onPromise(e) {
    const t = this.channels.get(e.channelName);
    if (!t) {
      this.collectPendingRequest(e);
      return;
    }
    const r = new P0();
    let n;
    try {
      n = t.call(this.ctx, e.name, e.arg, r.token);
    } catch (o) {
      n = Promise.reject(o);
    }
    const s = e.id;
    n.then((o) => {
      this.sendResponse({ id: s, data: o, type: 201 });
    }, (o) => {
      o instanceof Error ? this.sendResponse({ id: s, data: { message: o.message, name: o.name, stack: o.stack ? o.stack.split(`
`) : void 0 }, type: 202 }) : this.sendResponse({ id: s, data: o, type: 203 });
    }).finally(() => {
      i.dispose(), this.activeRequests.delete(e.id);
    });
    const i = rr(() => r.cancel());
    this.activeRequests.set(e.id, i);
  }
  onEventListen(e) {
    const t = this.channels.get(e.channelName);
    if (!t) {
      this.collectPendingRequest(e);
      return;
    }
    const r = e.id, s = t.listen(this.ctx, e.name, e.arg)((i) => this.sendResponse({ id: r, data: i, type: 204 }));
    this.activeRequests.set(e.id, s);
  }
  disposeActiveRequest(e) {
    const t = this.activeRequests.get(e.id);
    t && (t.dispose(), this.activeRequests.delete(e.id));
  }
  collectPendingRequest(e) {
    let t = this.pendingRequests.get(e.channelName);
    t || (t = [], this.pendingRequests.set(e.channelName, t));
    const r = YA(() => {
      console.error(`Unknown channel: ${e.channelName}`), e.type === 100 && this.sendResponse({ id: e.id, data: { name: "Unknown channel", message: `Channel name '${e.channelName}' timed out after ${this.timeoutDelay}ms`, stack: void 0 }, type: 202 }), r.dispose();
    }, this.timeoutDelay);
    t.push({ request: e, timeoutTimer: r });
  }
  flushPendingRequests(e) {
    const t = this.pendingRequests.get(e);
    if (t) {
      for (const r of t) switch (r.timeoutTimer.dispose(), r.request.type) {
        case 100:
          this.onPromise(r.request);
          break;
        case 102:
          this.onEventListen(r.request);
          break;
      }
      this.pendingRequests.delete(e);
    }
  }
  dispose() {
    this.protocolListener.dispose(), po(this.activeRequests.values()), this.activeRequests.clear();
    for (const e of this.pendingRequests.values()) po(e.map((t) => t.timeoutTimer));
    this.pendingRequests.clear();
  }
}, hv = class {
  constructor(e, t = null) {
    this.protocol = e, this.isDisposed = false, this.state = 0, this.activeRequests = new Lt(), this.handlers = /* @__PURE__ */ new Map(), this.lastRequestId = 0, this.protocolListener = new ws(), this._pendingRPCDetails = /* @__PURE__ */ new Map(), this._onDidInitialize = new j(), this.onDidInitialize = this._onDidInitialize.event, this.initializeListener = new Lt(), this.protocolListener.value = this.protocol.onMessage((r) => this.onBuffer(r)), this.logger = t;
  }
  getChannel(e) {
    const t = this;
    return { call(r, n, s) {
      return t.isDisposed ? Promise.reject(new yr()) : t.requestPromise(e, r, n, s);
    }, listen(r, n) {
      return t.isDisposed ? ke.None : t.requestEvent(e, r, n);
    } };
  }
  requestPromise(e, t, r, n = As.None) {
    const s = this.lastRequestId++, o = { id: s, type: 100, channelName: e, name: t, arg: r };
    if (n.isCancellationRequested) return Promise.reject(new yr());
    let a, c;
    return new Promise((u, d) => {
      if (n.isCancellationRequested) return d(new yr());
      const f = () => {
        const _ = (y) => {
          switch (y.type) {
            case 201:
              this.handlers.delete(s), this._pendingRPCDetails.delete(s), u(y.data);
              break;
            case 202: {
              this.handlers.delete(s), this._pendingRPCDetails.delete(s);
              const m = new Error(y.data.message);
              m.stack = Array.isArray(y.data.stack) ? y.data.stack.join(`
`) : y.data.stack, m.name = y.data.name, d(m);
              break;
            }
            case 203:
              this.handlers.delete(s), this._pendingRPCDetails.delete(s), d(y.data);
              break;
          }
        };
        this.handlers.set(s, _), this._pendingRPCDetails.set(s, { channelName: e, command: t });
        try {
          this.sendRequest(o);
        } catch (y) {
          this.handlers.delete(s), this._pendingRPCDetails.delete(s), d(y);
        }
      };
      let p = null;
      this.state === 1 ? f() : (p = ku((_) => this.whenInitialized()), p.then(() => {
        p = null, f();
      }, () => {
      }));
      const g = () => {
        p ? (p.cancel(), p = null) : this.sendRequest({ id: s, type: 101 }), d(new yr());
      };
      a = n.onCancellationRequested(g), c = { dispose: lu(() => {
        g(), a.dispose();
      }) }, this.activeRequests.add(c);
    }).finally(() => {
      a?.dispose(), this.activeRequests.deleteAndLeak(c), m0(c);
    });
  }
  requestEvent(e, t, r) {
    const n = this.lastRequestId++, i = { id: n, type: 102, channelName: e, name: t, arg: r };
    let o = null;
    const a = new j({ onWillAddFirstListener: () => {
      if (this.isDisposed) return;
      const c = (u) => a.fire(u.data);
      this.handlers.set(n, c);
      const l = () => {
        this.activeRequests.add(a), this._pendingRPCDetails.set(n, { channelName: e, command: t }), this.sendRequest(i);
      };
      this.state === 1 ? l() : (o = ku((u) => this.whenInitialized()), o.then(() => {
        o = null, l();
      }, () => {
      }));
    }, onDidRemoveLastListener: () => {
      const c = this.handlers.delete(n);
      o ? (o.cancel(), o = null) : c && (this.activeRequests.deleteAndLeak(a), m0(a), this._pendingRPCDetails.delete(n), this.sendRequest({ id: n, type: 103 }));
    } });
    return a.event;
  }
  sendRequest(e) {
    switch (e.type) {
      case 100:
      case 102: {
        const t = this.send([e.type, e.id, e.channelName, e.name], e.arg);
        this.logger?.logOutgoing(t, e.id, 0, `${Ar(e.type)}: ${e.channelName}.${e.name}`, e.arg);
        return;
      }
      case 101:
      case 103: {
        const t = this.send([e.type, e.id]);
        this.logger?.logOutgoing(t, e.id, 0, Ar(e.type));
        return;
      }
    }
  }
  send(e, t = void 0) {
    const r = new uv();
    try {
      return Is(r, e), Is(r, t), this.sendBuffer(r.buffer);
    } finally {
      r.dispose();
    }
  }
  sendBuffer(e) {
    try {
      return this.protocol.send(e), e.byteLength;
    } catch {
      return 0;
    }
  }
  onBuffer(e) {
    const t = new Iu(e), r = ov, n = r ? performance.now() : 0, s = Sn(t), i = s[0];
    if (i !== 200 && i !== 201 && i !== 202 && i !== 203 && i !== 204) return;
    const o = Sn(t);
    if (r) {
      const a = performance.now() - n;
      if (a > iv) {
        const c = s[1] ?? 0, l = this._pendingRPCDetails.get(c);
        av?.({ durationMs: a, byteLength: e.byteLength, requestId: c, channelName: l?.channelName, command: l?.command, messageType: Ts(i) });
      }
    }
    switch (i) {
      case 200:
        return this.logger?.logIncoming(e.byteLength, 0, 0, Ts(i)), this.onResponse({ type: s[0] });
      case 201:
      case 202:
      case 204:
      case 203:
        return this.logger?.logIncoming(e.byteLength, s[1], 0, Ts(i), o), this.onResponse({ type: s[0], id: s[1], data: o });
    }
  }
  onResponse(e) {
    if (e.type === 200) {
      this.state = 1, this._onDidInitialize.fire();
      return;
    }
    this.handlers.get(e.id)?.(e);
  }
  get onDidInitializePromise() {
    return ke.toPromise(this.onDidInitialize, this.initializeListener);
  }
  whenInitialized() {
    return this.state === 1 ? Promise.resolve() : this.onDidInitializePromise;
  }
  dispose() {
    this.isDisposed = true, this.protocolListener.dispose(), this.activeRequests.dispose(), this._pendingRPCDetails.clear(), this.handlers.clear(), this.initializeListener.dispose(), this._onDidInitialize.dispose();
  }
};
X([oe], hv.prototype, "onDidInitializePromise", null);
var c3 = class {
  constructor(e, t, r) {
    this.channels = /* @__PURE__ */ new Map(), this._connections = /* @__PURE__ */ new Set(), this._onDidAddConnection = new j(), this.onDidAddConnection = this._onDidAddConnection.event, this._onDidRemoveConnection = new j(), this.onDidRemoveConnection = this._onDidRemoveConnection.event, this.disposables = new Lt(), this.disposables.add(e(({ protocol: n, onDidClientDisconnect: s }) => {
      const i = ke.once(n.onMessage), o = new Lt(), a = i((c) => {
        const l = new Iu(c), u = Sn(l), d = new a3(n, u, t, r), f = new hv(n, t);
        this.channels.forEach((g, _) => d.registerChannel(_, g));
        const p = { channelServer: d, channelClient: f, ctx: u };
        this._connections.add(p), this._onDidAddConnection.fire(p), o.add(s(() => {
          d.dispose(), f.dispose(), this._connections.delete(p), this._onDidRemoveConnection.fire(p), this.disposables.delete(o), o.dispose();
        }));
      });
      o.add(a), this.disposables.add(o);
    }));
  }
  get connections() {
    const e = [];
    return this._connections.forEach((t) => e.push(t)), e;
  }
  getChannel(e, t) {
    const r = this;
    return { call(n, s, i) {
      let o;
      if (s0(t)) {
        const c = Y8(r.connections.filter(t));
        o = c ? Promise.resolve(c) : ke.toPromise(ke.filter(r.onDidAddConnection, t));
      } else o = t.routeCall(r, n, s);
      const a = o.then((c) => c.channelClient.getChannel(e));
      return fv(a).call(n, s, i);
    }, listen(n, s) {
      if (s0(t)) return r.getMulticastEvent(e, t, n, s);
      const i = t.routeEvent(r, n, s).then((o) => o.channelClient.getChannel(e));
      return fv(i).listen(n, s);
    } };
  }
  getMulticastEvent(e, t, r, n) {
    const s = this;
    let i;
    const o = new j({ onWillAddFirstListener: () => {
      i = new Lt();
      const a = new z6(), c = /* @__PURE__ */ new Map(), l = (d) => {
        const p = d.channelClient.getChannel(e).listen(r, n), g = a.add(p);
        c.set(d, g);
      }, u = (d) => {
        const f = c.get(d);
        f && (f.dispose(), c.delete(d));
      };
      s.connections.filter(t).forEach(l), ke.filter(s.onDidAddConnection, t)(l, void 0, i), s.onDidRemoveConnection(u, void 0, i), a.event(o.fire, o, i), i.add(a);
    }, onDidRemoveLastListener: () => {
      i?.dispose(), i = void 0;
    } });
    return s.disposables.add(o), o.event;
  }
  registerChannel(e, t) {
    this.channels.set(e, t);
    for (const r of this._connections) r.channelServer.registerChannel(e, t);
  }
  dispose() {
    this.disposables.dispose();
    for (const e of this._connections) e.channelClient.dispose(), e.channelServer.dispose();
    this._connections.clear(), this.channels.clear(), this._onDidAddConnection.dispose(), this._onDidRemoveConnection.dispose();
  }
};
function fv(e) {
  return { call(t, r, n) {
    return e.then((s) => s.call(t, r, n));
  }, listen(t, r) {
    const n = new W6();
    return e.then((s) => n.input = s.listen(t, r)), n.event;
  } };
}
var Co = class {
  constructor(e) {
    this.fn = e;
  }
  routeCall(e) {
    return this.route(e);
  }
  routeEvent(e) {
    return this.route(e);
  }
  async route(e) {
    for (const t of e.connections) if (await Promise.resolve(this.fn(t.ctx))) return Promise.resolve(t);
    return await ke.toPromise(e.onDidAddConnection), await this.route(e);
  }
}, et;
((e) => {
  const t = () => {
  };
  function r(o, a, c) {
    const l = o, u = c && c.disableMarshalling, d = (p) => {
      const g = l[p];
      return c?.disableEventBuffering ? g : ke.buffer(g, true, void 0, a);
    }, f = /* @__PURE__ */ new Map();
    for (const p in l) s(p) && f.set(p, d(p));
    return new class {
      listen(p, g, _) {
        const y = f.get(g);
        if (y) return y;
        const m = l[g];
        if (typeof m == "function") {
          if (i(g)) return m.call(l, _);
          if (s(g)) return f.set(g, d(g)), f.get(g);
        }
        throw new gn(`Event not found: ${g}`);
      }
      call(p, g, _) {
        const y = l[g];
        if (typeof y == "function") {
          if (!u && Array.isArray(_)) for (let A = 0; A < _.length; A++) _[A] = Oo(_[A]);
          let m = y.apply(l, _);
          return m instanceof Promise || (m = Promise.resolve(m)), m;
        }
        throw new gn(`Method not found: ${g}`);
      }
    }();
  }
  e.fromService = r;
  function n(o, a) {
    const c = a && a.disableMarshalling;
    return new Proxy({}, { get(l, u) {
      if (typeof u != "symbol") {
        if (typeof u == "string") return a?.properties?.has(u) ? a.properties.get(u) : u === "dispose" ? t : i(u) ? function(d) {
          return o.listen(u, d);
        } : s(u) ? o.listen(u) : async function(...d) {
          let f;
          a && !t6(a.context) ? f = [a.context, ...d] : f = d;
          const p = await o.call(u, f);
          return c ? p : Oo(p);
        };
        throw new gn(`Property not found: ${String(u)}`);
      }
    } });
  }
  e.toService = n;
  function s(o) {
    return o[0] === "o" && o[1] === "n" && H0(o.charCodeAt(2));
  }
  function i(o) {
    return /^onDynamic/.test(o) && H0(o.charCodeAt(9));
  }
})(et || (et = {}));
var l3 = class {
  constructor(e) {
    this.port = e, this.onMessage = ke.fromNodeEventEmitter(this.port, "message", (t) => t.data ? We.wrap(t.data) : We.alloc(0)), e.start();
  }
  send(e) {
    this.port.postMessage(e.buffer);
  }
  disconnect() {
    this.port.close();
  }
}, u3 = class m2 extends c3 {
  static getOnDidClientConnect(t) {
    r6(_6(process), "Electron Utility Process");
    const r = new j();
    return process.parentPort.on("message", (n) => {
      if (t?.handledClientConnection(n)) return;
      const s = n.ports.at(0);
      s && r.fire(s);
    }), ke.map(r.event, (n) => ({ protocol: new l3(n), onDidClientDisconnect: ke.fromNodeEventEmitter(n, "close") }));
  }
  constructor(t) {
    super(m2.getOnDidClientConnect(t));
  }
};
function d3(e, t, r) {
  const n = (s) => {
    s.data === t && (e.removeListener("message", n), r());
  };
  e.on("message", n);
}
h(), h();
function h3(e) {
  return Ou(e, 0);
}
function Ou(e, t) {
  switch (typeof e) {
    case "object":
      return e === null ? $t(349, t) : Array.isArray(e) ? p3(e, t) : g3(e, t);
    case "string":
      return Cu(e, t);
    case "boolean":
      return f3(e, t);
    case "number":
      return $t(e, t);
    case "undefined":
      return $t(937, t);
    default:
      return $t(617, t);
  }
}
function $t(e, t) {
  return (t << 5) - t + e | 0;
}
function f3(e, t) {
  return $t(e ? 433 : 863, t);
}
function Cu(e, t) {
  t = $t(149417, t);
  for (let r = 0, n = e.length; r < n; r++) t = $t(e.charCodeAt(r), t);
  return t;
}
function p3(e, t) {
  return t = $t(104579, t), e.reduce((r, n) => Ou(n, r), t);
}
function g3(e, t) {
  return t = $t(181387, t), Object.keys(e).sort().reduce((r, n) => (r = Cu(n, r), Ou(e[n], r)), t);
}
function Lu(e, t, r = 32) {
  const n = r - t, s = ~((1 << n) - 1);
  return (e << t | (s & e) >>> n) >>> 0;
}
function Ps(e, t = 32) {
  return e instanceof ArrayBuffer ? Array.from(new Uint8Array(e)).map((r) => r.toString(16).padStart(2, "0")).join("") : (e >>> 0).toString(16).padStart(t / 4, "0");
}
var _3 = class v2 {
  constructor() {
    this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(67), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = false;
  }
  update(t) {
    const r = t.length;
    if (r === 0) return;
    const n = this._buff;
    let s = this._buffLen, i = this._leftoverHighSurrogate, o, a;
    for (i !== 0 ? (o = i, a = -1, i = 0) : (o = t.charCodeAt(0), a = 0); ; ) {
      let c = o;
      if (wA(o)) if (a + 1 < r) {
        const l = t.charCodeAt(a + 1);
        B0(l) ? (a++, c = EA(o, l)) : c = 65533;
      } else {
        i = o;
        break;
      }
      else B0(o) && (c = 65533);
      if (s = this._push(n, s, c), a++, a < r) o = t.charCodeAt(a);
      else break;
    }
    this._buffLen = s, this._leftoverHighSurrogate = i;
  }
  _push(t, r, n) {
    return n < 128 ? t[r++] = n : n < 2048 ? (t[r++] = 192 | (n & 1984) >>> 6, t[r++] = 128 | (n & 63) >>> 0) : n < 65536 ? (t[r++] = 224 | (n & 61440) >>> 12, t[r++] = 128 | (n & 4032) >>> 6, t[r++] = 128 | (n & 63) >>> 0) : (t[r++] = 240 | (n & 1835008) >>> 18, t[r++] = 128 | (n & 258048) >>> 12, t[r++] = 128 | (n & 4032) >>> 6, t[r++] = 128 | (n & 63) >>> 0), r >= 64 && (this._step(), r -= 64, this._totalLen += 64, t[0] = t[64], t[1] = t[65], t[2] = t[66]), r;
  }
  digest() {
    return this._finished || (this._finished = true, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, 65533)), this._totalLen += this._buffLen, this._wrapUp()), Ps(this._h0) + Ps(this._h1) + Ps(this._h2) + Ps(this._h3) + Ps(this._h4);
  }
  _wrapUp() {
    this._buff[this._buffLen++] = 128, this._buff.subarray(this._buffLen).fill(0), this._buffLen > 56 && (this._step(), this._buff.fill(0));
    const t = 8 * this._totalLen;
    this._buffDV.setUint32(56, Math.floor(t / 4294967296), false), this._buffDV.setUint32(60, t % 4294967296, false), this._step();
  }
  _step() {
    const t = v2._bigBlock32, r = this._buffDV;
    for (let d = 0; d < 64; d += 4) t.setUint32(d, r.getUint32(d, false), false);
    for (let d = 64; d < 320; d += 4) t.setUint32(d, Lu(t.getUint32(d - 12, false) ^ t.getUint32(d - 32, false) ^ t.getUint32(d - 56, false) ^ t.getUint32(d - 64, false), 1), false);
    let n = this._h0, s = this._h1, i = this._h2, o = this._h3, a = this._h4, c, l, u;
    for (let d = 0; d < 80; d++) d < 20 ? (c = s & i | ~s & o, l = 1518500249) : d < 40 ? (c = s ^ i ^ o, l = 1859775393) : d < 60 ? (c = s & i | s & o | i & o, l = 2400959708) : (c = s ^ i ^ o, l = 3395469782), u = Lu(n, 5) + c + a + l + t.getUint32(d * 4, false) & 4294967295, a = o, o = i, i = Lu(s, 30), s = n, n = u;
    this._h0 = this._h0 + n & 4294967295, this._h1 = this._h1 + s & 4294967295, this._h2 = this._h2 + i & 4294967295, this._h3 = this._h3 + o & 4294967295, this._h4 = this._h4 + a & 4294967295;
  }
};
_3._bigBlock32 = new DataView(new ArrayBuffer(320)), h(), h();
var Z = ((e) => (e[e.Null = 0] = "Null", e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.LineFeed = 10] = "LineFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Hash = 35] = "Hash", e[e.DollarSign = 36] = "DollarSign", e[e.PercentSign = 37] = "PercentSign", e[e.Ampersand = 38] = "Ampersand", e[e.SingleQuote = 39] = "SingleQuote", e[e.OpenParen = 40] = "OpenParen", e[e.CloseParen = 41] = "CloseParen", e[e.Asterisk = 42] = "Asterisk", e[e.Plus = 43] = "Plus", e[e.Comma = 44] = "Comma", e[e.Dash = 45] = "Dash", e[e.Period = 46] = "Period", e[e.Slash = 47] = "Slash", e[e.Digit0 = 48] = "Digit0", e[e.Digit1 = 49] = "Digit1", e[e.Digit2 = 50] = "Digit2", e[e.Digit3 = 51] = "Digit3", e[e.Digit4 = 52] = "Digit4", e[e.Digit5 = 53] = "Digit5", e[e.Digit6 = 54] = "Digit6", e[e.Digit7 = 55] = "Digit7", e[e.Digit8 = 56] = "Digit8", e[e.Digit9 = 57] = "Digit9", e[e.Colon = 58] = "Colon", e[e.Semicolon = 59] = "Semicolon", e[e.LessThan = 60] = "LessThan", e[e.Equals = 61] = "Equals", e[e.GreaterThan = 62] = "GreaterThan", e[e.QuestionMark = 63] = "QuestionMark", e[e.AtSign = 64] = "AtSign", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.OpenSquareBracket = 91] = "OpenSquareBracket", e[e.Backslash = 92] = "Backslash", e[e.CloseSquareBracket = 93] = "CloseSquareBracket", e[e.Caret = 94] = "Caret", e[e.Underline = 95] = "Underline", e[e.BackTick = 96] = "BackTick", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.OpenCurlyBrace = 123] = "OpenCurlyBrace", e[e.Pipe = 124] = "Pipe", e[e.CloseCurlyBrace = 125] = "CloseCurlyBrace", e[e.Tilde = 126] = "Tilde", e[e.NoBreakSpace = 160] = "NoBreakSpace", e[e.U_Combining_Grave_Accent = 768] = "U_Combining_Grave_Accent", e[e.U_Combining_Acute_Accent = 769] = "U_Combining_Acute_Accent", e[e.U_Combining_Circumflex_Accent = 770] = "U_Combining_Circumflex_Accent", e[e.U_Combining_Tilde = 771] = "U_Combining_Tilde", e[e.U_Combining_Macron = 772] = "U_Combining_Macron", e[e.U_Combining_Overline = 773] = "U_Combining_Overline", e[e.U_Combining_Breve = 774] = "U_Combining_Breve", e[e.U_Combining_Dot_Above = 775] = "U_Combining_Dot_Above", e[e.U_Combining_Diaeresis = 776] = "U_Combining_Diaeresis", e[e.U_Combining_Hook_Above = 777] = "U_Combining_Hook_Above", e[e.U_Combining_Ring_Above = 778] = "U_Combining_Ring_Above", e[e.U_Combining_Double_Acute_Accent = 779] = "U_Combining_Double_Acute_Accent", e[e.U_Combining_Caron = 780] = "U_Combining_Caron", e[e.U_Combining_Vertical_Line_Above = 781] = "U_Combining_Vertical_Line_Above", e[e.U_Combining_Double_Vertical_Line_Above = 782] = "U_Combining_Double_Vertical_Line_Above", e[e.U_Combining_Double_Grave_Accent = 783] = "U_Combining_Double_Grave_Accent", e[e.U_Combining_Candrabindu = 784] = "U_Combining_Candrabindu", e[e.U_Combining_Inverted_Breve = 785] = "U_Combining_Inverted_Breve", e[e.U_Combining_Turned_Comma_Above = 786] = "U_Combining_Turned_Comma_Above", e[e.U_Combining_Comma_Above = 787] = "U_Combining_Comma_Above", e[e.U_Combining_Reversed_Comma_Above = 788] = "U_Combining_Reversed_Comma_Above", e[e.U_Combining_Comma_Above_Right = 789] = "U_Combining_Comma_Above_Right", e[e.U_Combining_Grave_Accent_Below = 790] = "U_Combining_Grave_Accent_Below", e[e.U_Combining_Acute_Accent_Below = 791] = "U_Combining_Acute_Accent_Below", e[e.U_Combining_Left_Tack_Below = 792] = "U_Combining_Left_Tack_Below", e[e.U_Combining_Right_Tack_Below = 793] = "U_Combining_Right_Tack_Below", e[e.U_Combining_Left_Angle_Above = 794] = "U_Combining_Left_Angle_Above", e[e.U_Combining_Horn = 795] = "U_Combining_Horn", e[e.U_Combining_Left_Half_Ring_Below = 796] = "U_Combining_Left_Half_Ring_Below", e[e.U_Combining_Up_Tack_Below = 797] = "U_Combining_Up_Tack_Below", e[e.U_Combining_Down_Tack_Below = 798] = "U_Combining_Down_Tack_Below", e[e.U_Combining_Plus_Sign_Below = 799] = "U_Combining_Plus_Sign_Below", e[e.U_Combining_Minus_Sign_Below = 800] = "U_Combining_Minus_Sign_Below", e[e.U_Combining_Palatalized_Hook_Below = 801] = "U_Combining_Palatalized_Hook_Below", e[e.U_Combining_Retroflex_Hook_Below = 802] = "U_Combining_Retroflex_Hook_Below", e[e.U_Combining_Dot_Below = 803] = "U_Combining_Dot_Below", e[e.U_Combining_Diaeresis_Below = 804] = "U_Combining_Diaeresis_Below", e[e.U_Combining_Ring_Below = 805] = "U_Combining_Ring_Below", e[e.U_Combining_Comma_Below = 806] = "U_Combining_Comma_Below", e[e.U_Combining_Cedilla = 807] = "U_Combining_Cedilla", e[e.U_Combining_Ogonek = 808] = "U_Combining_Ogonek", e[e.U_Combining_Vertical_Line_Below = 809] = "U_Combining_Vertical_Line_Below", e[e.U_Combining_Bridge_Below = 810] = "U_Combining_Bridge_Below", e[e.U_Combining_Inverted_Double_Arch_Below = 811] = "U_Combining_Inverted_Double_Arch_Below", e[e.U_Combining_Caron_Below = 812] = "U_Combining_Caron_Below", e[e.U_Combining_Circumflex_Accent_Below = 813] = "U_Combining_Circumflex_Accent_Below", e[e.U_Combining_Breve_Below = 814] = "U_Combining_Breve_Below", e[e.U_Combining_Inverted_Breve_Below = 815] = "U_Combining_Inverted_Breve_Below", e[e.U_Combining_Tilde_Below = 816] = "U_Combining_Tilde_Below", e[e.U_Combining_Macron_Below = 817] = "U_Combining_Macron_Below", e[e.U_Combining_Low_Line = 818] = "U_Combining_Low_Line", e[e.U_Combining_Double_Low_Line = 819] = "U_Combining_Double_Low_Line", e[e.U_Combining_Tilde_Overlay = 820] = "U_Combining_Tilde_Overlay", e[e.U_Combining_Short_Stroke_Overlay = 821] = "U_Combining_Short_Stroke_Overlay", e[e.U_Combining_Long_Stroke_Overlay = 822] = "U_Combining_Long_Stroke_Overlay", e[e.U_Combining_Short_Solidus_Overlay = 823] = "U_Combining_Short_Solidus_Overlay", e[e.U_Combining_Long_Solidus_Overlay = 824] = "U_Combining_Long_Solidus_Overlay", e[e.U_Combining_Right_Half_Ring_Below = 825] = "U_Combining_Right_Half_Ring_Below", e[e.U_Combining_Inverted_Bridge_Below = 826] = "U_Combining_Inverted_Bridge_Below", e[e.U_Combining_Square_Below = 827] = "U_Combining_Square_Below", e[e.U_Combining_Seagull_Below = 828] = "U_Combining_Seagull_Below", e[e.U_Combining_X_Above = 829] = "U_Combining_X_Above", e[e.U_Combining_Vertical_Tilde = 830] = "U_Combining_Vertical_Tilde", e[e.U_Combining_Double_Overline = 831] = "U_Combining_Double_Overline", e[e.U_Combining_Grave_Tone_Mark = 832] = "U_Combining_Grave_Tone_Mark", e[e.U_Combining_Acute_Tone_Mark = 833] = "U_Combining_Acute_Tone_Mark", e[e.U_Combining_Greek_Perispomeni = 834] = "U_Combining_Greek_Perispomeni", e[e.U_Combining_Greek_Koronis = 835] = "U_Combining_Greek_Koronis", e[e.U_Combining_Greek_Dialytika_Tonos = 836] = "U_Combining_Greek_Dialytika_Tonos", e[e.U_Combining_Greek_Ypogegrammeni = 837] = "U_Combining_Greek_Ypogegrammeni", e[e.U_Combining_Bridge_Above = 838] = "U_Combining_Bridge_Above", e[e.U_Combining_Equals_Sign_Below = 839] = "U_Combining_Equals_Sign_Below", e[e.U_Combining_Double_Vertical_Line_Below = 840] = "U_Combining_Double_Vertical_Line_Below", e[e.U_Combining_Left_Angle_Below = 841] = "U_Combining_Left_Angle_Below", e[e.U_Combining_Not_Tilde_Above = 842] = "U_Combining_Not_Tilde_Above", e[e.U_Combining_Homothetic_Above = 843] = "U_Combining_Homothetic_Above", e[e.U_Combining_Almost_Equal_To_Above = 844] = "U_Combining_Almost_Equal_To_Above", e[e.U_Combining_Left_Right_Arrow_Below = 845] = "U_Combining_Left_Right_Arrow_Below", e[e.U_Combining_Upwards_Arrow_Below = 846] = "U_Combining_Upwards_Arrow_Below", e[e.U_Combining_Grapheme_Joiner = 847] = "U_Combining_Grapheme_Joiner", e[e.U_Combining_Right_Arrowhead_Above = 848] = "U_Combining_Right_Arrowhead_Above", e[e.U_Combining_Left_Half_Ring_Above = 849] = "U_Combining_Left_Half_Ring_Above", e[e.U_Combining_Fermata = 850] = "U_Combining_Fermata", e[e.U_Combining_X_Below = 851] = "U_Combining_X_Below", e[e.U_Combining_Left_Arrowhead_Below = 852] = "U_Combining_Left_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_Below = 853] = "U_Combining_Right_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below = 854] = "U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below", e[e.U_Combining_Right_Half_Ring_Above = 855] = "U_Combining_Right_Half_Ring_Above", e[e.U_Combining_Dot_Above_Right = 856] = "U_Combining_Dot_Above_Right", e[e.U_Combining_Asterisk_Below = 857] = "U_Combining_Asterisk_Below", e[e.U_Combining_Double_Ring_Below = 858] = "U_Combining_Double_Ring_Below", e[e.U_Combining_Zigzag_Above = 859] = "U_Combining_Zigzag_Above", e[e.U_Combining_Double_Breve_Below = 860] = "U_Combining_Double_Breve_Below", e[e.U_Combining_Double_Breve = 861] = "U_Combining_Double_Breve", e[e.U_Combining_Double_Macron = 862] = "U_Combining_Double_Macron", e[e.U_Combining_Double_Macron_Below = 863] = "U_Combining_Double_Macron_Below", e[e.U_Combining_Double_Tilde = 864] = "U_Combining_Double_Tilde", e[e.U_Combining_Double_Inverted_Breve = 865] = "U_Combining_Double_Inverted_Breve", e[e.U_Combining_Double_Rightwards_Arrow_Below = 866] = "U_Combining_Double_Rightwards_Arrow_Below", e[e.U_Combining_Latin_Small_Letter_A = 867] = "U_Combining_Latin_Small_Letter_A", e[e.U_Combining_Latin_Small_Letter_E = 868] = "U_Combining_Latin_Small_Letter_E", e[e.U_Combining_Latin_Small_Letter_I = 869] = "U_Combining_Latin_Small_Letter_I", e[e.U_Combining_Latin_Small_Letter_O = 870] = "U_Combining_Latin_Small_Letter_O", e[e.U_Combining_Latin_Small_Letter_U = 871] = "U_Combining_Latin_Small_Letter_U", e[e.U_Combining_Latin_Small_Letter_C = 872] = "U_Combining_Latin_Small_Letter_C", e[e.U_Combining_Latin_Small_Letter_D = 873] = "U_Combining_Latin_Small_Letter_D", e[e.U_Combining_Latin_Small_Letter_H = 874] = "U_Combining_Latin_Small_Letter_H", e[e.U_Combining_Latin_Small_Letter_M = 875] = "U_Combining_Latin_Small_Letter_M", e[e.U_Combining_Latin_Small_Letter_R = 876] = "U_Combining_Latin_Small_Letter_R", e[e.U_Combining_Latin_Small_Letter_T = 877] = "U_Combining_Latin_Small_Letter_T", e[e.U_Combining_Latin_Small_Letter_V = 878] = "U_Combining_Latin_Small_Letter_V", e[e.U_Combining_Latin_Small_Letter_X = 879] = "U_Combining_Latin_Small_Letter_X", e[e.LINE_SEPARATOR = 8232] = "LINE_SEPARATOR", e[e.PARAGRAPH_SEPARATOR = 8233] = "PARAGRAPH_SEPARATOR", e[e.NEXT_LINE = 133] = "NEXT_LINE", e[e.U_CIRCUMFLEX = 94] = "U_CIRCUMFLEX", e[e.U_GRAVE_ACCENT = 96] = "U_GRAVE_ACCENT", e[e.U_DIAERESIS = 168] = "U_DIAERESIS", e[e.U_MACRON = 175] = "U_MACRON", e[e.U_ACUTE_ACCENT = 180] = "U_ACUTE_ACCENT", e[e.U_CEDILLA = 184] = "U_CEDILLA", e[e.U_MODIFIER_LETTER_LEFT_ARROWHEAD = 706] = "U_MODIFIER_LETTER_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_RIGHT_ARROWHEAD = 707] = "U_MODIFIER_LETTER_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_UP_ARROWHEAD = 708] = "U_MODIFIER_LETTER_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_DOWN_ARROWHEAD = 709] = "U_MODIFIER_LETTER_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING = 722] = "U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING", e[e.U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING = 723] = "U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING", e[e.U_MODIFIER_LETTER_UP_TACK = 724] = "U_MODIFIER_LETTER_UP_TACK", e[e.U_MODIFIER_LETTER_DOWN_TACK = 725] = "U_MODIFIER_LETTER_DOWN_TACK", e[e.U_MODIFIER_LETTER_PLUS_SIGN = 726] = "U_MODIFIER_LETTER_PLUS_SIGN", e[e.U_MODIFIER_LETTER_MINUS_SIGN = 727] = "U_MODIFIER_LETTER_MINUS_SIGN", e[e.U_BREVE = 728] = "U_BREVE", e[e.U_DOT_ABOVE = 729] = "U_DOT_ABOVE", e[e.U_RING_ABOVE = 730] = "U_RING_ABOVE", e[e.U_OGONEK = 731] = "U_OGONEK", e[e.U_SMALL_TILDE = 732] = "U_SMALL_TILDE", e[e.U_DOUBLE_ACUTE_ACCENT = 733] = "U_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_RHOTIC_HOOK = 734] = "U_MODIFIER_LETTER_RHOTIC_HOOK", e[e.U_MODIFIER_LETTER_CROSS_ACCENT = 735] = "U_MODIFIER_LETTER_CROSS_ACCENT", e[e.U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR = 741] = "U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_HIGH_TONE_BAR = 742] = "U_MODIFIER_LETTER_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_MID_TONE_BAR = 743] = "U_MODIFIER_LETTER_MID_TONE_BAR", e[e.U_MODIFIER_LETTER_LOW_TONE_BAR = 744] = "U_MODIFIER_LETTER_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR = 745] = "U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK = 746] = "U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK = 747] = "U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_UNASPIRATED = 749] = "U_MODIFIER_LETTER_UNASPIRATED", e[e.U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD = 751] = "U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_UP_ARROWHEAD = 752] = "U_MODIFIER_LETTER_LOW_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD = 753] = "U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD = 754] = "U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RING = 755] = "U_MODIFIER_LETTER_LOW_RING", e[e.U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT = 756] = "U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT = 757] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT = 758] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_LOW_TILDE = 759] = "U_MODIFIER_LETTER_LOW_TILDE", e[e.U_MODIFIER_LETTER_RAISED_COLON = 760] = "U_MODIFIER_LETTER_RAISED_COLON", e[e.U_MODIFIER_LETTER_BEGIN_HIGH_TONE = 761] = "U_MODIFIER_LETTER_BEGIN_HIGH_TONE", e[e.U_MODIFIER_LETTER_END_HIGH_TONE = 762] = "U_MODIFIER_LETTER_END_HIGH_TONE", e[e.U_MODIFIER_LETTER_BEGIN_LOW_TONE = 763] = "U_MODIFIER_LETTER_BEGIN_LOW_TONE", e[e.U_MODIFIER_LETTER_END_LOW_TONE = 764] = "U_MODIFIER_LETTER_END_LOW_TONE", e[e.U_MODIFIER_LETTER_SHELF = 765] = "U_MODIFIER_LETTER_SHELF", e[e.U_MODIFIER_LETTER_OPEN_SHELF = 766] = "U_MODIFIER_LETTER_OPEN_SHELF", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROW = 767] = "U_MODIFIER_LETTER_LOW_LEFT_ARROW", e[e.U_GREEK_LOWER_NUMERAL_SIGN = 885] = "U_GREEK_LOWER_NUMERAL_SIGN", e[e.U_GREEK_TONOS = 900] = "U_GREEK_TONOS", e[e.U_GREEK_DIALYTIKA_TONOS = 901] = "U_GREEK_DIALYTIKA_TONOS", e[e.U_GREEK_KORONIS = 8125] = "U_GREEK_KORONIS", e[e.U_GREEK_PSILI = 8127] = "U_GREEK_PSILI", e[e.U_GREEK_PERISPOMENI = 8128] = "U_GREEK_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_PERISPOMENI = 8129] = "U_GREEK_DIALYTIKA_AND_PERISPOMENI", e[e.U_GREEK_PSILI_AND_VARIA = 8141] = "U_GREEK_PSILI_AND_VARIA", e[e.U_GREEK_PSILI_AND_OXIA = 8142] = "U_GREEK_PSILI_AND_OXIA", e[e.U_GREEK_PSILI_AND_PERISPOMENI = 8143] = "U_GREEK_PSILI_AND_PERISPOMENI", e[e.U_GREEK_DASIA_AND_VARIA = 8157] = "U_GREEK_DASIA_AND_VARIA", e[e.U_GREEK_DASIA_AND_OXIA = 8158] = "U_GREEK_DASIA_AND_OXIA", e[e.U_GREEK_DASIA_AND_PERISPOMENI = 8159] = "U_GREEK_DASIA_AND_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_VARIA = 8173] = "U_GREEK_DIALYTIKA_AND_VARIA", e[e.U_GREEK_DIALYTIKA_AND_OXIA = 8174] = "U_GREEK_DIALYTIKA_AND_OXIA", e[e.U_GREEK_VARIA = 8175] = "U_GREEK_VARIA", e[e.U_GREEK_OXIA = 8189] = "U_GREEK_OXIA", e[e.U_GREEK_DASIA = 8190] = "U_GREEK_DASIA", e[e.U_IDEOGRAPHIC_FULL_STOP = 12290] = "U_IDEOGRAPHIC_FULL_STOP", e[e.U_LEFT_CORNER_BRACKET = 12300] = "U_LEFT_CORNER_BRACKET", e[e.U_RIGHT_CORNER_BRACKET = 12301] = "U_RIGHT_CORNER_BRACKET", e[e.U_LEFT_BLACK_LENTICULAR_BRACKET = 12304] = "U_LEFT_BLACK_LENTICULAR_BRACKET", e[e.U_RIGHT_BLACK_LENTICULAR_BRACKET = 12305] = "U_RIGHT_BLACK_LENTICULAR_BRACKET", e[e.U_OVERLINE = 8254] = "U_OVERLINE", e[e.UTF8_BOM = 65279] = "UTF8_BOM", e[e.U_FULLWIDTH_SEMICOLON = 65307] = "U_FULLWIDTH_SEMICOLON", e[e.U_FULLWIDTH_COMMA = 65292] = "U_FULLWIDTH_COMMA", e))(Z || {});
h();
function xu(...e) {
  switch (e.length) {
    case 1:
      return we(1839, null, e[0]);
    case 2:
      return we(1840, null, e[0], e[1]);
    case 3:
      return we(1841, null, e[0], e[1], e[2]);
    default:
      return;
  }
}
var m3 = we(1842, null), v3 = we(1843, null), Mu = class dh {
  constructor() {
    this._input = "", this._start = 0, this._current = 0, this._tokens = [], this._errors = [], this.stringRe = /[a-zA-Z0-9_<>\-\./\\:\*\?\+\[\]\^,#@;"%\$\p{L}-]+/uy;
  }
  static getLexeme(t) {
    switch (t.type) {
      case 0:
        return "(";
      case 1:
        return ")";
      case 2:
        return "!";
      case 3:
        return t.isTripleEq ? "===" : "==";
      case 4:
        return t.isTripleEq ? "!==" : "!=";
      case 5:
        return "<";
      case 6:
        return "<=";
      case 7:
        return ">=";
      case 8:
        return ">=";
      case 9:
        return "=~";
      case 10:
        return t.lexeme;
      case 11:
        return "true";
      case 12:
        return "false";
      case 13:
        return "in";
      case 14:
        return "not";
      case 15:
        return "&&";
      case 16:
        return "||";
      case 17:
        return t.lexeme;
      case 18:
        return t.lexeme;
      case 19:
        return t.lexeme;
      case 20:
        return "EOF";
      default:
        throw t0(`unhandled token type: ${JSON.stringify(t)}; have you forgotten to add a case?`);
    }
  }
  get errors() {
    return this._errors;
  }
  reset(t) {
    return this._input = t, this._start = 0, this._current = 0, this._tokens = [], this._errors = [], this;
  }
  scan() {
    for (; !this._isAtEnd(); ) switch (this._start = this._current, this._advance()) {
      case Z.OpenParen:
        this._addToken(0);
        break;
      case Z.CloseParen:
        this._addToken(1);
        break;
      case Z.ExclamationMark:
        if (this._match(Z.Equals)) {
          const r = this._match(Z.Equals);
          this._tokens.push({ type: 4, offset: this._start, isTripleEq: r });
        } else this._addToken(2);
        break;
      case Z.SingleQuote:
        this._quotedString();
        break;
      case Z.Slash:
        this._regex();
        break;
      case Z.Equals:
        if (this._match(Z.Equals)) {
          const r = this._match(Z.Equals);
          this._tokens.push({ type: 3, offset: this._start, isTripleEq: r });
        } else this._match(Z.Tilde) ? this._addToken(9) : this._error(xu("==", "=~"));
        break;
      case Z.LessThan:
        this._addToken(this._match(Z.Equals) ? 6 : 5);
        break;
      case Z.GreaterThan:
        this._addToken(this._match(Z.Equals) ? 8 : 7);
        break;
      case Z.Ampersand:
        this._match(Z.Ampersand) ? this._addToken(15) : this._error(xu("&&"));
        break;
      case Z.Pipe:
        this._match(Z.Pipe) ? this._addToken(16) : this._error(xu("||"));
        break;
      case Z.Space:
      case Z.CarriageReturn:
      case Z.Tab:
      case Z.LineFeed:
      case Z.NoBreakSpace:
        break;
      default:
        this._string();
    }
    return this._start = this._current, this._addToken(20), Array.from(this._tokens);
  }
  _match(t) {
    return this._isAtEnd() || this._input.charCodeAt(this._current) !== t ? false : (this._current++, true);
  }
  _advance() {
    return this._input.charCodeAt(this._current++);
  }
  _peek() {
    return this._isAtEnd() ? Z.Null : this._input.charCodeAt(this._current);
  }
  _addToken(t) {
    this._tokens.push({ type: t, offset: this._start });
  }
  _error(t) {
    const r = this._start, n = this._input.substring(this._start, this._current), s = { type: 19, offset: this._start, lexeme: n };
    this._errors.push({ offset: r, lexeme: n, additionalInfo: t }), this._tokens.push(s);
  }
  _string() {
    this.stringRe.lastIndex = this._start;
    const t = this.stringRe.exec(this._input);
    if (t) {
      this._current = this._start + t[0].length;
      const r = this._input.substring(this._start, this._current), n = dh._keywords.get(r);
      n ? this._addToken(n) : this._tokens.push({ type: 17, lexeme: r, offset: this._start });
    }
  }
  _quotedString() {
    for (; this._peek() !== Z.SingleQuote && !this._isAtEnd(); ) this._advance();
    if (this._isAtEnd()) {
      this._error(m3);
      return;
    }
    this._advance(), this._tokens.push({ type: 18, lexeme: this._input.substring(this._start + 1, this._current - 1), offset: this._start + 1 });
  }
  _regex() {
    let t = this._current, r = false, n = false;
    for (; ; ) {
      if (t >= this._input.length) {
        this._current = t, this._error(v3);
        return;
      }
      const i = this._input.charCodeAt(t);
      if (r) r = false;
      else if (i === Z.Slash && !n) {
        t++;
        break;
      } else i === Z.OpenSquareBracket ? n = true : i === Z.Backslash ? r = true : i === Z.CloseSquareBracket && (n = false);
      t++;
    }
    for (; t < this._input.length && dh._regexFlags.has(this._input.charCodeAt(t)); ) t++;
    this._current = t;
    const s = this._input.substring(this._start, this._current);
    this._tokens.push({ type: 10, lexeme: s, offset: this._start });
  }
  _isAtEnd() {
    return this._current >= this._input.length;
  }
};
Mu._regexFlags = new Set(["i", "g", "s", "m", "y", "u"].map((e) => e.charCodeAt(0))), Mu._keywords = /* @__PURE__ */ new Map([["not", 14], ["in", 13], ["false", 12], ["true", 11]]);
var Os = Mu;
h();
var dt;
((e) => {
  e.serviceIds = /* @__PURE__ */ new Map(), e.DI_TARGET = "$di$target", e.DI_DEPENDENCIES = "$di$dependencies";
  function t(r) {
    return r[e.DI_DEPENDENCIES] || [];
  }
  e.getServiceDependencies = t;
})(dt || (dt = {}));
var Lo = or("instantiationService");
function y3(e, t, r) {
  t[dt.DI_TARGET] === t ? t[dt.DI_DEPENDENCIES].push({ id: e, index: r }) : (t[dt.DI_DEPENDENCIES] = [{ id: e, index: r }], t[dt.DI_TARGET] = t);
}
function or(e) {
  if (dt.serviceIds.has(e)) return dt.serviceIds.get(e);
  const t = function(r, n, s) {
    if (arguments.length !== 3) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
    y3(t, r, s);
  };
  return t.toString = () => e, dt.serviceIds.set(e, t), t;
}
function px(e) {
  return e;
}
var Pe = /* @__PURE__ */ new Map();
Pe.set("false", false), Pe.set("true", true), Pe.set("isMac", Su), Pe.set("isLinux", bu), Pe.set("isWindows", br), Pe.set("isWeb", wu), Pe.set("isMacNative", Su && !wu), Pe.set("isEdge", sA), Pe.set("isFirefox", rA), Pe.set("isChrome", M0), Pe.set("isSafari", nA);
var Cs = /* @__PURE__ */ new Map();
function S3(e, t) {
  return Cs.has(e) && (console.warn(`A context key function with id '${e}' is already registered. Function collisions can lead to unexpected behavior.`), Cs.delete(e)), Cs.set(e, t), { dispose: () => {
    Cs.delete(e);
  } };
}
function pv(e) {
  return Cs.get(e);
}
var b3 = Object.prototype.hasOwnProperty, w3 = { regexParsingWithErrorRecovery: true }, E3 = we(1818, null), A3 = we(1819, null), R3 = we(1820, null), gv = we(1821, null), T3 = we(1822, null), k3 = we(1823, null), I3 = we(1824, null), P3 = we(1825, null), _v = class ni {
  constructor(t = w3) {
    this._config = t, this._scanner = new Os(), this._tokens = [], this._current = 0, this._parsingErrors = [], this._flagsGYRe = /g|y/g;
  }
  get lexingErrors() {
    return this._scanner.errors;
  }
  get parsingErrors() {
    return this._parsingErrors;
  }
  parse(t) {
    if (t === "") {
      this._parsingErrors.push({ message: E3, offset: 0, lexeme: "", additionalInfo: A3 });
      return;
    }
    this._tokens = this._scanner.reset(t).scan(), this._current = 0, this._parsingErrors = [];
    try {
      const r = this._expr();
      if (!this._isAtEnd()) {
        const n = this._peek(), s = n.type === 17 ? k3 : void 0;
        throw this._parsingErrors.push({ message: T3, offset: n.offset, lexeme: Os.getLexeme(n), additionalInfo: s }), ni._parseError;
      }
      return r;
    } catch (r) {
      if (r !== ni._parseError) throw r;
      return;
    }
  }
  _expr() {
    return this._or();
  }
  _or() {
    const t = [this._and()];
    for (; this._matchOne(16); ) {
      const r = this._and();
      t.push(r);
    }
    return t.length === 1 ? t[0] : xe.or(...t);
  }
  _and() {
    const t = [this._term()];
    for (; this._matchOne(15); ) {
      const r = this._term();
      t.push(r);
    }
    return t.length === 1 ? t[0] : xe.and(...t);
  }
  _term() {
    if (this._matchOne(2)) {
      const t = this._peek();
      switch (t.type) {
        case 11:
          return this._advance(), Ge.INSTANCE;
        case 12:
          return this._advance(), Ye.INSTANCE;
        case 0: {
          this._advance();
          const r = this._expr();
          return this._consume(1, gv), r?.negate();
        }
        case 17:
          return this._advance(), Ms.create(t.lexeme);
        default:
          throw this._errExpectedButGot("KEY | true | false | '(' expression ')'", t);
      }
    }
    return this._primary();
  }
  _primary() {
    const t = this._peek();
    switch (t.type) {
      case 11:
        return this._advance(), xe.true();
      case 12:
        return this._advance(), xe.false();
      case 0: {
        this._advance();
        const r = this._expr();
        return this._consume(1, gv), r;
      }
      case 17: {
        if (t.lexeme.startsWith("@")) {
          this._advance();
          const s = t.lexeme.substring(1);
          if (s.startsWith("!")) {
            const o = s.substring(1), a = pv(o);
            if (a) return Du.createWithoutRegistration(s, () => !a());
          }
          const i = pv(s) || (() => false);
          return Du.createWithoutRegistration(s, i);
        }
        const r = t.lexeme;
        if (this._advance(), this._matchOne(9)) {
          const s = this._peek();
          if (!this._config.regexParsingWithErrorRecovery) {
            if (this._advance(), s.type !== 10) throw this._errExpectedButGot("REGEX", s);
            const i = s.lexeme, o = i.lastIndexOf("/"), a = o === i.length - 1 ? void 0 : this._removeFlagsGY(i.substring(o + 1));
            let c;
            try {
              c = new RegExp(i.substring(1, o), a);
            } catch {
              throw this._errExpectedButGot("REGEX", s);
            }
            return Wu.create(r, c);
          }
          switch (s.type) {
            case 10:
            case 19: {
              const i = [s.lexeme];
              this._advance();
              let o = this._peek(), a = 0;
              for (let f = 0; f < s.lexeme.length; f++) s.lexeme.charCodeAt(f) === Z.OpenParen ? a++ : s.lexeme.charCodeAt(f) === Z.CloseParen && a--;
              for (; !this._isAtEnd() && o.type !== 15 && o.type !== 16; ) {
                switch (o.type) {
                  case 0:
                    a++;
                    break;
                  case 1:
                    a--;
                    break;
                  case 10:
                  case 18:
                    for (let f = 0; f < o.lexeme.length; f++) o.lexeme.charCodeAt(f) === Z.OpenParen ? a++ : s.lexeme.charCodeAt(f) === Z.CloseParen && a--;
                }
                if (a < 0) break;
                i.push(Os.getLexeme(o)), this._advance(), o = this._peek();
              }
              const c = i.join(""), l = c.lastIndexOf("/"), u = l === c.length - 1 ? void 0 : this._removeFlagsGY(c.substring(l + 1));
              let d;
              try {
                d = new RegExp(c.substring(1, l), u);
              } catch {
                throw this._errExpectedButGot("REGEX", s);
              }
              return xe.regex(r, d);
            }
            case 18: {
              const i = s.lexeme;
              this._advance();
              let o = null;
              if (!vA(i)) {
                const a = i.indexOf("/"), c = i.lastIndexOf("/");
                if (a !== c && a >= 0) {
                  const l = i.slice(a + 1, c), u = i[c + 1] === "i" ? "i" : "";
                  try {
                    o = new RegExp(l, u);
                  } catch {
                    throw this._errExpectedButGot("REGEX", s);
                  }
                }
              }
              if (o === null) throw this._errExpectedButGot("REGEX", s);
              return Wu.create(r, o);
            }
            default:
              throw this._errExpectedButGot("REGEX", this._peek());
          }
        }
        if (this._matchOne(14)) {
          this._consume(13, R3);
          const s = this._value();
          return xe.notIn(r, s);
        }
        switch (this._peek().type) {
          case 3: {
            this._advance();
            const s = this._value();
            if (this._previous().type === 18) return xe.equals(r, s);
            switch (s) {
              case "true":
                return xe.has(r);
              case "false":
                return xe.not(r);
              default:
                return xe.equals(r, s);
            }
          }
          case 4: {
            this._advance();
            const s = this._value();
            if (this._previous().type === 18) return xe.notEquals(r, s);
            switch (s) {
              case "true":
                return xe.not(r);
              case "false":
                return xe.has(r);
              default:
                return xe.notEquals(r, s);
            }
          }
          case 5:
            return this._advance(), Bu.create(r, this._value());
          case 6:
            return this._advance(), zu.create(r, this._value());
          case 7:
            return this._advance(), Mo.create(r, this._value());
          case 8:
            return this._advance(), Hu.create(r, this._value());
          case 13:
            return this._advance(), xe.in(r, this._value());
          default:
            return xe.has(r);
        }
      }
      case 20:
        throw this._parsingErrors.push({ message: I3, offset: t.offset, lexeme: "", additionalInfo: P3 }), ni._parseError;
      default:
        throw this._errExpectedButGot(`true | false | KEY 
	| KEY '=~' REGEX 
	| KEY ('==' | '!=' | '<' | '<=' | '>' | '>=' | 'in' | 'not' 'in') value`, this._peek());
    }
  }
  _value() {
    const t = this._peek();
    switch (t.type) {
      case 17:
      case 18:
        return this._advance(), t.lexeme;
      case 11:
        return this._advance(), "true";
      case 12:
        return this._advance(), "false";
      case 13:
        return this._advance(), "in";
      default:
        return "";
    }
  }
  _removeFlagsGY(t) {
    return t.replaceAll(this._flagsGYRe, "");
  }
  _previous() {
    return this._tokens[this._current - 1];
  }
  _matchOne(t) {
    return this._check(t) ? (this._advance(), true) : false;
  }
  _advance() {
    return this._isAtEnd() || this._current++, this._previous();
  }
  _consume(t, r) {
    if (this._check(t)) return this._advance();
    throw this._errExpectedButGot(r, this._peek());
  }
  _errExpectedButGot(t, r, n) {
    const s = we(1826, null, t, Os.getLexeme(r)), i = r.offset, o = Os.getLexeme(r);
    return this._parsingErrors.push({ message: s, offset: i, lexeme: o, additionalInfo: n }), ni._parseError;
  }
  _check(t) {
    return this._peek().type === t;
  }
  _peek() {
    return this._tokens[this._current];
  }
  _isAtEnd() {
    return this._peek().type === 20;
  }
};
_v._parseError = new Error();
var O3 = _v, xe = class {
  static false() {
    return Ge.INSTANCE;
  }
  static true() {
    return Ye.INSTANCE;
  }
  static has(e) {
    return xs.create(e);
  }
  static equals(e, t) {
    return $u.create(e, t);
  }
  static notEquals(e, t) {
    return Fu.create(e, t);
  }
  static regex(e, t) {
    return Wu.create(e, t);
  }
  static in(e, t) {
    return mv.create(e, t);
  }
  static notIn(e, t) {
    return vv.create(e, t);
  }
  static not(e) {
    return Ms.create(e);
  }
  static and(...e) {
    return Sv.create(e, null, true);
  }
  static or(...e) {
    return Gu.create(e, null, true);
  }
  static greater(e, t) {
    return Mo.create(e, t);
  }
  static greaterEquals(e, t) {
    return Hu.create(e, t);
  }
  static smaller(e, t) {
    return Bu.create(e, t);
  }
  static smallerEquals(e, t) {
    return zu.create(e, t);
  }
  static function(e, t) {
    return Du.create(e, t);
  }
  static deserialize(e) {
    return e == null ? void 0 : this._parser.parse(e);
  }
};
xe._parser = new O3({ regexParsingWithErrorRecovery: false });
function Ls(e, t) {
  return e.cmp(t);
}
var Du = class pa {
  constructor(t, r) {
    this.type = 16, this.id = t, this.fn = r;
  }
  static create(t, r) {
    return S3(t, r), new pa(t, r);
  }
  static createWithoutRegistration(t, r) {
    return new pa(t, r);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : Ku(this.id, t.id);
  }
  equals(t) {
    return t.type === this.type && this.id === t.id;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    return this.fn();
  }
  serialize() {
    return `@${this.id}`;
  }
  keys() {
    return [];
  }
  map(t) {
    return this;
  }
  negate() {
    return pa.createWithoutRegistration(`!${this.id}`, () => !this.fn());
  }
}, Nu = class {
  constructor() {
    this.type = 0;
  }
  cmp(t) {
    return this.type - t.type;
  }
  equals(t) {
    return t.type === this.type;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    return false;
  }
  serialize() {
    return "false";
  }
  keys() {
    return [];
  }
  map(t) {
    return this;
  }
  negate() {
    return Ye.INSTANCE;
  }
};
Nu.INSTANCE = new Nu();
var Ge = Nu, Uu = class {
  constructor() {
    this.type = 1;
  }
  cmp(t) {
    return this.type - t.type;
  }
  equals(t) {
    return t.type === this.type;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    return true;
  }
  serialize() {
    return "true";
  }
  keys() {
    return [];
  }
  map(t) {
    return this;
  }
  negate() {
    return Ge.INSTANCE;
  }
};
Uu.INSTANCE = new Uu();
var Ye = Uu, xs = class y2 {
  constructor(t, r) {
    this.key = t, this.negated = r, this.type = 2;
  }
  static create(t, r = null) {
    const n = Pe.get(t);
    return typeof n == "boolean" ? n ? Ye.INSTANCE : Ge.INSTANCE : new y2(t, r);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : Ku(this.key, t.key);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key : false;
  }
  substituteConstants() {
    const t = Pe.get(this.key);
    return typeof t == "boolean" ? t ? Ye.INSTANCE : Ge.INSTANCE : this;
  }
  evaluate(t) {
    return !!t.getValue(this.key);
  }
  serialize() {
    return this.key;
  }
  keys() {
    return [this.key];
  }
  map(t) {
    return t.mapDefined(this.key);
  }
  negate() {
    return this.negated || (this.negated = Ms.create(this.key, this)), this.negated;
  }
}, $u = class S2 {
  constructor(t, r, n) {
    this.key = t, this.value = r, this.negated = n, this.type = 4;
  }
  static create(t, r, n = null) {
    if (typeof r == "boolean") return r ? xs.create(t, n) : Ms.create(t, n);
    const s = Pe.get(t);
    return typeof s == "boolean" ? r === (s ? "true" : "false") ? Ye.INSTANCE : Ge.INSTANCE : new S2(t, r, n);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : kr(this.key, this.value, t.key, t.value);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.value === t.value : false;
  }
  substituteConstants() {
    const t = Pe.get(this.key);
    if (typeof t == "boolean") {
      const r = t ? "true" : "false";
      return this.value === r ? Ye.INSTANCE : Ge.INSTANCE;
    }
    return this;
  }
  evaluate(t) {
    return t.getValue(this.key) == this.value;
  }
  serialize() {
    return `${this.key} == '${this.value}'`;
  }
  keys() {
    return [this.key];
  }
  map(t) {
    return t.mapEquals(this.key, this.value);
  }
  negate() {
    return this.negated || (this.negated = Fu.create(this.key, this.value, this)), this.negated;
  }
}, mv = class b2 {
  constructor(t, r) {
    this.key = t, this.valueKey = r, this.type = 10, this.negated = null;
  }
  static create(t, r) {
    return new b2(t, r);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : kr(this.key, this.valueKey, t.key, t.valueKey);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.valueKey === t.valueKey : false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    const r = t.getValue(this.valueKey), n = t.getValue(this.key);
    return Array.isArray(r) ? r.includes(n) : typeof n == "string" && typeof r == "object" && r !== null ? b3.call(r, n) : false;
  }
  serialize() {
    return `${this.key} in '${this.valueKey}'`;
  }
  keys() {
    return [this.key, this.valueKey];
  }
  map(t) {
    return t.mapIn(this.key, this.valueKey);
  }
  negate() {
    return this.negated || (this.negated = vv.create(this.key, this.valueKey)), this.negated;
  }
}, vv = class w2 {
  constructor(t, r) {
    this.key = t, this.valueKey = r, this.type = 11, this._negated = mv.create(t, r);
  }
  static create(t, r) {
    return new w2(t, r);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : this._negated.cmp(t._negated);
  }
  equals(t) {
    return t.type === this.type ? this._negated.equals(t._negated) : false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    return !this._negated.evaluate(t);
  }
  serialize() {
    return `${this.key} not in '${this.valueKey}'`;
  }
  keys() {
    return this._negated.keys();
  }
  map(t) {
    return t.mapNotIn(this.key, this.valueKey);
  }
  negate() {
    return this._negated;
  }
}, Fu = class E2 {
  constructor(t, r, n) {
    this.key = t, this.value = r, this.negated = n, this.type = 5;
  }
  static create(t, r, n = null) {
    if (typeof r == "boolean") return r ? Ms.create(t, n) : xs.create(t, n);
    const s = Pe.get(t);
    return typeof s == "boolean" ? r === (s ? "true" : "false") ? Ge.INSTANCE : Ye.INSTANCE : new E2(t, r, n);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : kr(this.key, this.value, t.key, t.value);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.value === t.value : false;
  }
  substituteConstants() {
    const t = Pe.get(this.key);
    if (typeof t == "boolean") {
      const r = t ? "true" : "false";
      return this.value === r ? Ge.INSTANCE : Ye.INSTANCE;
    }
    return this;
  }
  evaluate(t) {
    return t.getValue(this.key) != this.value;
  }
  serialize() {
    return `${this.key} != '${this.value}'`;
  }
  keys() {
    return [this.key];
  }
  map(t) {
    return t.mapNotEquals(this.key, this.value);
  }
  negate() {
    return this.negated || (this.negated = $u.create(this.key, this.value, this)), this.negated;
  }
}, Ms = class A2 {
  constructor(t, r) {
    this.key = t, this.negated = r, this.type = 3;
  }
  static create(t, r = null) {
    const n = Pe.get(t);
    return typeof n == "boolean" ? n ? Ge.INSTANCE : Ye.INSTANCE : new A2(t, r);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : Ku(this.key, t.key);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key : false;
  }
  substituteConstants() {
    const t = Pe.get(this.key);
    return typeof t == "boolean" ? t ? Ge.INSTANCE : Ye.INSTANCE : this;
  }
  evaluate(t) {
    return !t.getValue(this.key);
  }
  serialize() {
    return `!${this.key}`;
  }
  keys() {
    return [this.key];
  }
  map(t) {
    return t.mapNot(this.key);
  }
  negate() {
    return this.negated || (this.negated = xs.create(this.key, this)), this.negated;
  }
};
function xo(e, t) {
  if (typeof e == "string") {
    const r = parseFloat(e);
    isNaN(r) || (e = r);
  }
  return typeof e == "string" || typeof e == "number" ? t(e) : Ge.INSTANCE;
}
var Mo = class R2 {
  constructor(t, r, n) {
    this.key = t, this.value = r, this.negated = n, this.type = 12;
  }
  static create(t, r, n = null) {
    return xo(r, (s) => new R2(t, s, n));
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : kr(this.key, this.value, t.key, t.value);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.value === t.value : false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    return typeof this.value == "string" ? false : parseFloat(t.getValue(this.key)) > this.value;
  }
  serialize() {
    return `${this.key} > ${this.value}`;
  }
  keys() {
    return [this.key];
  }
  map(t) {
    return t.mapGreater(this.key, this.value);
  }
  negate() {
    return this.negated || (this.negated = zu.create(this.key, this.value, this)), this.negated;
  }
}, Hu = class T2 {
  constructor(t, r, n) {
    this.key = t, this.value = r, this.negated = n, this.type = 13;
  }
  static create(t, r, n = null) {
    return xo(r, (s) => new T2(t, s, n));
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : kr(this.key, this.value, t.key, t.value);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.value === t.value : false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    return typeof this.value == "string" ? false : parseFloat(t.getValue(this.key)) >= this.value;
  }
  serialize() {
    return `${this.key} >= ${this.value}`;
  }
  keys() {
    return [this.key];
  }
  map(t) {
    return t.mapGreaterEquals(this.key, this.value);
  }
  negate() {
    return this.negated || (this.negated = Bu.create(this.key, this.value, this)), this.negated;
  }
}, Bu = class k2 {
  constructor(t, r, n) {
    this.key = t, this.value = r, this.negated = n, this.type = 14;
  }
  static create(t, r, n = null) {
    return xo(r, (s) => new k2(t, s, n));
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : kr(this.key, this.value, t.key, t.value);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.value === t.value : false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    return typeof this.value == "string" ? false : parseFloat(t.getValue(this.key)) < this.value;
  }
  serialize() {
    return `${this.key} < ${this.value}`;
  }
  keys() {
    return [this.key];
  }
  map(t) {
    return t.mapSmaller(this.key, this.value);
  }
  negate() {
    return this.negated || (this.negated = Hu.create(this.key, this.value, this)), this.negated;
  }
}, zu = class I2 {
  constructor(t, r, n) {
    this.key = t, this.value = r, this.negated = n, this.type = 15;
  }
  static create(t, r, n = null) {
    return xo(r, (s) => new I2(t, s, n));
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : kr(this.key, this.value, t.key, t.value);
  }
  equals(t) {
    return t.type === this.type ? this.key === t.key && this.value === t.value : false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    return typeof this.value == "string" ? false : parseFloat(t.getValue(this.key)) <= this.value;
  }
  serialize() {
    return `${this.key} <= ${this.value}`;
  }
  keys() {
    return [this.key];
  }
  map(t) {
    return t.mapSmallerEquals(this.key, this.value);
  }
  negate() {
    return this.negated || (this.negated = Mo.create(this.key, this.value, this)), this.negated;
  }
}, Wu = class P2 {
  constructor(t, r) {
    this.key = t, this.regexp = r, this.type = 7, this.negated = null;
  }
  static create(t, r) {
    return new P2(t, r);
  }
  cmp(t) {
    if (t.type !== this.type) return this.type - t.type;
    if (this.key < t.key) return -1;
    if (this.key > t.key) return 1;
    const r = this.regexp ? this.regexp.source : "", n = t.regexp ? t.regexp.source : "";
    return r < n ? -1 : r > n ? 1 : 0;
  }
  equals(t) {
    if (t.type === this.type) {
      const r = this.regexp ? this.regexp.source : "", n = t.regexp ? t.regexp.source : "";
      return this.key === t.key && r === n;
    }
    return false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    const r = t.getValue(this.key);
    return this.regexp ? this.regexp.test(r) : false;
  }
  serialize() {
    const t = this.regexp ? `/${this.regexp.source}/${this.regexp.flags}` : "/invalid/";
    return `${this.key} =~ ${t}`;
  }
  keys() {
    return [this.key];
  }
  map(t) {
    return t.mapRegex(this.key, this.regexp);
  }
  negate() {
    return this.negated || (this.negated = C3.create(this)), this.negated;
  }
}, C3 = class hh {
  constructor(t) {
    this._actual = t, this.type = 8;
  }
  static create(t) {
    return new hh(t);
  }
  cmp(t) {
    return t.type !== this.type ? this.type - t.type : this._actual.cmp(t._actual);
  }
  equals(t) {
    return t.type === this.type ? this._actual.equals(t._actual) : false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(t) {
    return !this._actual.evaluate(t);
  }
  serialize() {
    return `!(${this._actual.serialize()})`;
  }
  keys() {
    return this._actual.keys();
  }
  map(t) {
    return new hh(this._actual.map(t));
  }
  negate() {
    return this._actual;
  }
};
function yv(e) {
  let t = null;
  for (let r = 0, n = e.length; r < n; r++) {
    const s = e[r].substituteConstants();
    if (e[r] !== s && t === null) {
      t = [];
      for (let i = 0; i < r; i++) t[i] = e[i];
    }
    t !== null && (t[r] = s);
  }
  return t === null ? e : t;
}
var Sv = class xn {
  constructor(t, r) {
    this.expr = t, this.negated = r, this.type = 6;
  }
  static create(t, r, n) {
    return xn._normalizeArr(t, r, n);
  }
  cmp(t) {
    if (t.type !== this.type) return this.type - t.type;
    if (this.expr.length < t.expr.length) return -1;
    if (this.expr.length > t.expr.length) return 1;
    for (let r = 0, n = this.expr.length; r < n; r++) {
      const s = Ls(this.expr[r], t.expr[r]);
      if (s !== 0) return s;
    }
    return 0;
  }
  equals(t) {
    if (t.type === this.type) {
      if (this.expr.length !== t.expr.length) return false;
      for (let r = 0, n = this.expr.length; r < n; r++) if (!this.expr[r].equals(t.expr[r])) return false;
      return true;
    }
    return false;
  }
  substituteConstants() {
    const t = yv(this.expr);
    return t === this.expr ? this : xn.create(t, this.negated, false);
  }
  evaluate(t) {
    for (let r = 0, n = this.expr.length; r < n; r++) if (!this.expr[r].evaluate(t)) return false;
    return true;
  }
  static _normalizeArr(t, r, n) {
    const s = [];
    let i = false;
    for (const o of t) if (o) {
      if (o.type === 1) {
        i = true;
        continue;
      }
      if (o.type === 0) return Ge.INSTANCE;
      if (o.type === 6) {
        s.push(...o.expr);
        continue;
      }
      s.push(o);
    }
    if (s.length === 0 && i) return Ye.INSTANCE;
    if (s.length !== 0) {
      if (s.length === 1) return s[0];
      s.sort(Ls);
      for (let o = 1; o < s.length; o++) s[o - 1].equals(s[o]) && (s.splice(o, 1), o--);
      if (s.length === 1) return s[0];
      for (; s.length > 1; ) {
        const o = s[s.length - 1];
        if (o.type !== 9) break;
        s.pop();
        const a = s.pop(), c = s.length === 0, l = Gu.create(o.expr.map((u) => xn.create([u, a], null, n)), null, c);
        l && (s.push(l), s.sort(Ls));
      }
      if (s.length === 1) return s[0];
      if (n) {
        for (let o = 0; o < s.length; o++) for (let a = o + 1; a < s.length; a++) if (s[o].negate().equals(s[a])) return Ge.INSTANCE;
        if (s.length === 1) return s[0];
      }
      return new xn(s, r);
    }
  }
  serialize() {
    return this.expr.map((t) => t.serialize()).join(" && ");
  }
  keys() {
    const t = [];
    for (const r of this.expr) t.push(...r.keys());
    return t;
  }
  map(t) {
    return new xn(this.expr.map((r) => r.map(t)), null);
  }
  negate() {
    if (!this.negated) {
      const t = [];
      for (const r of this.expr) t.push(r.negate());
      this.negated = Gu.create(t, this, true);
    }
    return this.negated;
  }
}, Gu = class xr {
  constructor(t, r) {
    this.expr = t, this.negated = r, this.type = 9;
  }
  static create(t, r, n) {
    return xr._normalizeArr(t, r, n);
  }
  cmp(t) {
    if (t.type !== this.type) return this.type - t.type;
    if (this.expr.length < t.expr.length) return -1;
    if (this.expr.length > t.expr.length) return 1;
    for (let r = 0, n = this.expr.length; r < n; r++) {
      const s = Ls(this.expr[r], t.expr[r]);
      if (s !== 0) return s;
    }
    return 0;
  }
  equals(t) {
    if (t.type === this.type) {
      if (this.expr.length !== t.expr.length) return false;
      for (let r = 0, n = this.expr.length; r < n; r++) if (!this.expr[r].equals(t.expr[r])) return false;
      return true;
    }
    return false;
  }
  substituteConstants() {
    const t = yv(this.expr);
    return t === this.expr ? this : xr.create(t, this.negated, false);
  }
  evaluate(t) {
    for (let r = 0, n = this.expr.length; r < n; r++) if (this.expr[r].evaluate(t)) return true;
    return false;
  }
  static _normalizeArr(t, r, n) {
    let s = [], i = false;
    if (t) {
      for (let o = 0, a = t.length; o < a; o++) {
        const c = t[o];
        if (c) {
          if (c.type === 0) {
            i = true;
            continue;
          }
          if (c.type === 1) return Ye.INSTANCE;
          if (c.type === 9) {
            s = s.concat(c.expr);
            continue;
          }
          s.push(c);
        }
      }
      if (s.length === 0 && i) return Ge.INSTANCE;
      s.sort(Ls);
    }
    if (s.length !== 0) {
      if (s.length === 1) return s[0];
      for (let o = 1; o < s.length; o++) s[o - 1].equals(s[o]) && (s.splice(o, 1), o--);
      if (s.length === 1) return s[0];
      if (n) {
        for (let o = 0; o < s.length; o++) for (let a = o + 1; a < s.length; a++) if (s[o].negate().equals(s[a])) return Ye.INSTANCE;
        if (s.length === 1) return s[0];
      }
      return new xr(s, r);
    }
  }
  serialize() {
    return this.expr.map((t) => t.serialize()).join(" || ");
  }
  keys() {
    const t = [];
    for (const r of this.expr) t.push(...r.keys());
    return t;
  }
  map(t) {
    return new xr(this.expr.map((r) => r.map(t)), null);
  }
  negate() {
    if (!this.negated) {
      const t = [];
      for (const r of this.expr) t.push(r.negate());
      for (; t.length > 1; ) {
        const r = t.shift(), n = t.shift(), s = [];
        for (const i of wv(r)) for (const o of wv(n)) s.push(Sv.create([i, o], null, false));
        t.unshift(xr.create(s, null, false));
      }
      this.negated = xr.create(t, this, true);
    }
    return this.negated;
  }
}, bv = class ga extends xs {
  static all() {
    return ga._info.values();
  }
  constructor(t, r, n) {
    super(t, null), this._defaultValue = r, typeof n == "object" ? ga._info.push({ ...n, key: t }) : n !== true && ga._info.push({ key: t, description: n, type: r != null ? typeof r : void 0 });
  }
  bindTo(t) {
    return t.createKey(this.key, this._defaultValue);
  }
  getValue(t) {
    return t.getContextKeyValue(this.key);
  }
  toNegated() {
    return this.negate();
  }
  isEqualTo(t) {
    return $u.create(this.key, t);
  }
  notEqualsTo(t) {
    return Fu.create(this.key, t);
  }
  greater(t) {
    return Mo.create(this.key, t);
  }
};
bv._info = [];
var L3 = bv, mx = or("contextKeyService");
function Ku(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function kr(e, t, r, n) {
  return e < r ? -1 : e > r ? 1 : t < n ? -1 : t > n ? 1 : 0;
}
function wv(e) {
  return e.type === 9 ? e.expr : [e];
}
var Ir = or("logService"), Ev = or("loggerService");
function x3(e) {
  return Z8(e);
}
var qu = 3;
function M3(e, t) {
  return e !== 0 && e <= t;
}
function bn(e, t = false) {
  let r = "";
  for (let n = 0; n < e.length; n++) {
    let s = e[n];
    if (s instanceof Error && (s = uo(s, t)), typeof s == "object") try {
      s = JSON.stringify(s);
    } catch {
    }
    r += (n > 0 ? " " : "") + s;
  }
  return r;
}
var Do = class extends Ce {
  constructor() {
    super(...arguments), this.level = qu, this._onDidChangeLogLevel = this._register(new j()), this.onDidChangeLogLevel = this._onDidChangeLogLevel.event;
  }
  get isDisposed() {
    return this._store.isDisposed;
  }
  setLevel(e) {
    this.level !== e && (this.level = e, this._onDidChangeLogLevel.fire(this.level));
  }
  getLevel() {
    return this.level;
  }
  checkLogLevel(e) {
    return M3(this.level, e);
  }
  canLog(e) {
    return this._store.isDisposed ? false : this.checkLogLevel(e);
  }
}, D3 = class extends Do {
  constructor(e) {
    super(), this.logAlways = e;
  }
  checkLogLevel(e) {
    return this.logAlways || super.checkLogLevel(e);
  }
  trace(e, ...t) {
    this.canLog(1) && this.log(1, bn([e, ...t], true));
  }
  debug(e, ...t) {
    this.canLog(2) && this.log(2, bn([e, ...t]));
  }
  info(e, ...t) {
    this.canLog(3) && this.log(3, bn([e, ...t]));
  }
  warn(e, ...t) {
    this.canLog(4) && this.log(4, bn([e, ...t]));
  }
  error(e, ...t) {
    if (this.canLog(5)) if (e instanceof Error) {
      const r = Array.prototype.slice.call(arguments);
      r[0] = e.stack, this.log(5, bn(r));
    } else this.log(5, bn([e, ...t]));
  }
  flush() {
  }
}, N3 = class extends Do {
  constructor(e = qu, t = true) {
    super(), this.useColors = t, this.setLevel(e);
  }
  trace(e, ...t) {
    this.canLog(1) && (this.useColors ? console.log("%cTRACE", "color: #888", e, ...t) : console.log(e, ...t));
  }
  debug(e, ...t) {
    this.canLog(2) && (this.useColors ? console.log("%cDEBUG", "background: #eee; color: #888", e, ...t) : console.log(e, ...t));
  }
  info(e, ...t) {
    this.canLog(3) && (this.useColors ? console.log("%c INFO", "color: #33f", e, ...t) : console.log(e, ...t));
  }
  warn(e, ...t) {
    this.canLog(4) && (this.useColors ? console.warn("%c WARN", "color: #993", e, ...t) : console.log(e, ...t));
  }
  error(e, ...t) {
    this.canLog(5) && (this.useColors ? console.error("%c  ERR", "color: #f33", e, ...t) : console.error(e, ...t));
  }
  flush() {
  }
}, U3 = class extends Do {
  constructor(e, t = qu) {
    super(), this.adapter = e, this.setLevel(t);
  }
  trace(e, ...t) {
    this.canLog(1) && this.adapter.log(1, [this.extractMessage(e), ...t]);
  }
  debug(e, ...t) {
    this.canLog(2) && this.adapter.log(2, [this.extractMessage(e), ...t]);
  }
  info(e, ...t) {
    this.canLog(3) && this.adapter.log(3, [this.extractMessage(e), ...t]);
  }
  warn(e, ...t) {
    this.canLog(4) && this.adapter.log(4, [this.extractMessage(e), ...t]);
  }
  error(e, ...t) {
    this.canLog(5) && this.adapter.log(5, [this.extractMessage(e), ...t]);
  }
  extractMessage(e) {
    return typeof e == "string" ? e : uo(e, this.canLog(1));
  }
  flush() {
  }
}, $3 = class extends Do {
  constructor(e) {
    super(), this.loggers = e, e.length && this.setLevel(e[0].getLevel());
  }
  setLevel(e) {
    for (const t of this.loggers) t.setLevel(e);
    super.setLevel(e);
  }
  trace(e, ...t) {
    for (const r of this.loggers) r.trace(e, ...t);
  }
  debug(e, ...t) {
    for (const r of this.loggers) r.debug(e, ...t);
  }
  info(e, ...t) {
    for (const r of this.loggers) r.info(e, ...t);
  }
  warn(e, ...t) {
    for (const r of this.loggers) r.warn(e, ...t);
  }
  error(e, ...t) {
    for (const r of this.loggers) r.error(e, ...t);
  }
  flush() {
    for (const e of this.loggers) e.flush();
  }
  dispose() {
    for (const e of this.loggers) e.dispose();
    super.dispose();
  }
}, F3 = class extends Ce {
  constructor(e, t, r) {
    if (super(), this.logLevel = e, this.logsHome = t, this._loggers = new cu(), this._onDidChangeLoggers = this._register(new j()), this.onDidChangeLoggers = this._onDidChangeLoggers.event, this._onDidChangeLogLevel = this._register(new j()), this.onDidChangeLogLevel = this._onDidChangeLogLevel.event, this._onDidChangeVisibility = this._register(new j()), this.onDidChangeVisibility = this._onDidChangeVisibility.event, r) for (const n of r) this._loggers.set(n.resource, { logger: void 0, info: n });
  }
  getLoggerEntry(e) {
    return lo(e) ? [...this._loggers.values()].find((t) => t.info.id === e) : this._loggers.get(e);
  }
  getLogger(e) {
    return this.getLoggerEntry(e)?.logger;
  }
  createLogger(e, t) {
    const r = this.toResource(e), n = lo(e) ? e : t?.id ?? h3(r.toString()).toString(16);
    let s = this._loggers.get(r)?.logger;
    const i = t?.logLevel === "always" ? 1 : t?.logLevel;
    s || (s = this.doCreateLogger(r, i ?? this.getLogLevel(r) ?? this.logLevel, { ...t, id: n }));
    const o = { logger: s, info: { resource: r, id: n, logLevel: i, name: t?.name, hidden: t?.hidden, group: t?.group, extensionId: t?.extensionId, workspaceId: t?.workspaceId, when: t?.when } };
    return this.registerLogger(o.info), this._loggers.set(r, o), s;
  }
  toResource(e) {
    return lo(e) ? ut(this.logsHome, `${e}.log`) : e;
  }
  setLogLevel(e, t) {
    if (re.isUri(e)) {
      const r = e, n = t, s = this._loggers.get(r);
      s && n !== s.info.logLevel && (s.info.logLevel = n === this.logLevel ? void 0 : n, s.logger?.setLevel(n), this._loggers.set(s.info.resource, s), this._onDidChangeLogLevel.fire([r, n]));
    } else {
      this.logLevel = e;
      for (const [r, n] of this._loggers.entries()) this._loggers.get(r)?.info.logLevel === void 0 && n.logger?.setLevel(this.logLevel);
      this._onDidChangeLogLevel.fire(this.logLevel);
    }
  }
  setVisibility(e, t) {
    const r = this.getLoggerEntry(e);
    r && t !== !r.info.hidden && (r.info.hidden = !t, this._loggers.set(r.info.resource, r), this._onDidChangeVisibility.fire([r.info.resource, t]));
  }
  getLogLevel(e) {
    let t;
    return e && (t = this._loggers.get(e)?.info.logLevel), t ?? this.logLevel;
  }
  registerLogger(e) {
    const t = this._loggers.get(e.resource);
    t ? t.info.hidden !== e.hidden && this.setVisibility(e.resource, !e.hidden) : (this._loggers.set(e.resource, { info: e, logger: void 0 }), this._onDidChangeLoggers.fire({ added: [e], removed: [] }));
  }
  deregisterLogger(e) {
    const t = this.toResource(e), r = this._loggers.get(t);
    r && (r.logger && r.logger.dispose(), this._loggers.delete(t), this._onDidChangeLoggers.fire({ added: [], removed: [r.info] }));
  }
  *getRegisteredLoggers() {
    for (const e of this._loggers.values()) yield e.info;
  }
  getRegisteredLogger(e) {
    return this._loggers.get(e)?.info;
  }
  dispose() {
    this._loggers.forEach((e) => e.logger?.dispose()), this._loggers.clear(), super.dispose();
  }
};
function H3(e) {
  switch (e) {
    case 1:
      return "trace";
    case 2:
      return "debug";
    case 3:
      return "info";
    case 4:
      return "warn";
    case 5:
      return "error";
    case 0:
      return "off";
  }
}
var vx = new L3("logLevel", H3(3));
h();
var B3 = class extends Ce {
  get vscodeService() {
    return this;
  }
  get isDisposed() {
    return this._store.isDisposed;
  }
  constructor(e, t = []) {
    super(), this.logger = new $3([e, ...t]), e.isDisposed || this._register(e.onDidChangeLogLevel((r) => this.setLevel(r)));
  }
  get onDidChangeLogLevel() {
    return this.logger.onDidChangeLogLevel;
  }
  setLevel(e) {
    this.logger.setLevel(e);
  }
  getLevel() {
    return this.logger.getLevel();
  }
  trace(e, ...t) {
    this.logger.trace(e, ...t);
  }
  debug(e, ...t) {
    this.logger.debug(e, ...t);
  }
  info(e, ...t) {
    this.logger.info(e, ...t);
  }
  warn(e, ...t) {
    this.logger.warn(e, ...t);
  }
  error(e, ...t) {
    this.logger.error(e, ...t);
  }
  flush() {
    this.logger.flush();
  }
};
h();
var z3 = class extends F3 {
  constructor(e, t, r, n, s) {
    super(t, r, n), this.windowId = e, this.channel = s, this._register(s.listen("onDidChangeLogLevel", e)((i) => {
      x3(i) ? super.setLogLevel(i) : super.setLogLevel(re.revive(i[0]), i[1]);
    })), this._register(s.listen("onDidChangeVisibility", e)(([i, o]) => super.setVisibility(re.revive(i), o))), this._register(s.listen("onDidChangeLoggers", e)(({ added: i, removed: o }) => {
      for (const a of i) super.registerLogger({ ...a, resource: re.revive(a.resource) });
      for (const a of o) super.deregisterLogger(a.resource);
    }));
  }
  createConsoleMainLogger() {
    return new U3({ log: (e, t) => {
      this.channel.call("consoleLog", [e, t]);
    } });
  }
  registerLogger(e) {
    super.registerLogger(e), this.channel.call("registerLogger", [e, this.windowId]);
  }
  deregisterLogger(e) {
    const t = this.toResource(e);
    super.deregisterLogger(t), this.channel.call("deregisterLogger", [t, this.windowId]);
  }
  setLogLevel(e, t) {
    super.setLogLevel(e, t), this.channel.call("setLogLevel", [e, t]);
  }
  setVisibility(e, t) {
    super.setVisibility(e, t), this.channel.call("setVisibility", [this.toResource(e), t]);
  }
  doCreateLogger(e, t, r) {
    return new W3(this.channel, e, t, r, this.windowId);
  }
  static setLogLevel(e, t, r) {
    return e.call("setLogLevel", [t, r]);
  }
}, Av = class si extends D3 {
  constructor(t, r, n, s, i) {
    super(s?.logLevel === "always"), this.channel = t, this.file = r, this.isLoggerCreated = false, this.buffer = [], this.flushScheduled = false, this.setLevel(n), this.channel.call("createLogger", [r, s, i]).then(() => {
      this.isLoggerCreated = true, this.flush();
    });
  }
  log(t, r) {
    this.buffer.push([t, r]), this.isLoggerCreated && (this.buffer.length >= si.maxBatchSize ? this.flush() : this.flushScheduled || (this.flushScheduled = true, queueMicrotask(() => {
      this.flushScheduled = false, this.flush();
    })));
  }
  flush() {
    if (!this.isLoggerCreated || !this.buffer.length) return;
    const t = this.buffer;
    if (this.buffer = [], t.length <= si.maxBatchSize) this.doLog(t);
    else for (let r = 0; r < t.length; r += si.maxBatchSize) this.doLog(t.slice(r, r + si.maxBatchSize));
  }
  dispose() {
    this.flush(), super.dispose();
  }
  doLog(t) {
    this.channel.call("log", [this.file, t]);
  }
};
Av.maxBatchSize = 256;
var W3 = Av;
h(), h();
var wn = class {
  constructor(e, t = [], r = false, n = false) {
    this.ctor = e, this.staticArguments = t, this.supportsDelayedInstantiation = r, this.supportsLazyInstantiation = n;
  }
};
h();
var G3 = class {
  constructor(e, t) {
    this.key = e, this.data = t, this.incoming = /* @__PURE__ */ new Map(), this.outgoing = /* @__PURE__ */ new Map();
  }
}, Rv = class {
  constructor(e) {
    this._hashFn = e, this._nodes = /* @__PURE__ */ new Map();
  }
  roots() {
    const e = [];
    for (const t of this._nodes.values()) t.outgoing.size === 0 && e.push(t);
    return e;
  }
  insertEdge(e, t) {
    const r = this.lookupOrInsertNode(e), n = this.lookupOrInsertNode(t);
    r.outgoing.set(n.key, n), n.incoming.set(r.key, r);
  }
  removeNode(e) {
    const t = this._hashFn(e);
    this._nodes.delete(t);
    for (const r of this._nodes.values()) r.outgoing.delete(t), r.incoming.delete(t);
  }
  lookupOrInsertNode(e) {
    const t = this._hashFn(e);
    let r = this._nodes.get(t);
    return r || (r = new G3(t, e), this._nodes.set(t, r)), r;
  }
  lookup(e) {
    return this._nodes.get(this._hashFn(e));
  }
  isEmpty() {
    return this._nodes.size === 0;
  }
  toString() {
    const e = [];
    for (const [t, r] of this._nodes) e.push(`${t}
	(-> incoming)[${[...r.incoming.keys()].join(", ")}]
	(outgoing ->)[${[...r.outgoing.keys()].join(",")}]
`);
    return e.join(`
`);
  }
  findCycleSlow() {
    for (const [e, t] of this._nodes) {
      const r = /* @__PURE__ */ new Set([e]), n = this._findCycle(t, r);
      if (n) return n;
    }
  }
  _findCycle(e, t) {
    for (const [r, n] of e.outgoing) {
      if (t.has(r)) return [...t, r].join(" -> ");
      t.add(r);
      const s = this._findCycle(n, t);
      if (s) return s;
      t.delete(r);
    }
  }
};
h();
var Tv = class {
  constructor(...e) {
    this._entries = /* @__PURE__ */ new Map();
    for (const [t, r] of e) this.set(t, r);
  }
  set(e, t) {
    const r = this._entries.get(e);
    return this._entries.set(e, t), r;
  }
  has(e) {
    return this._entries.has(e);
  }
  get(e) {
    return this._entries.get(e);
  }
}, K3 = class {
  constructor(e) {
    this._lazy = new go(e);
  }
  get value() {
    return this._lazy.value;
  }
  get isInitialized() {
    return this._lazy.hasValue;
  }
  dispose() {
  }
}, q3 = false, kv = class extends Error {
  constructor(e, t) {
    super("cyclic dependency between services"), this.message = `REASON: ${t}
` + (e.findCycleSlow() ?? `UNABLE to detect cycle, dumping graph: 
${e.toString()}`);
  }
}, j3 = class fh {
  constructor(t = new Tv(), r = false, n, s = q3, i = false, o) {
    this._services = t, this._strict = r, this._parent = n, this._enableTracing = s, this._enableLazyInstantiation = i, this._label = o, this._isDisposed = false, this._servicesToMaybeDispose = /* @__PURE__ */ new Set(), this._children = /* @__PURE__ */ new Set(), this._activeInstantiations = /* @__PURE__ */ new Set(), this._services.set(Lo, this), this._globalGraph = s ? n?._globalGraph ?? new Rv((a) => a) : void 0;
  }
  dispose() {
    if (!this._isDisposed) {
      this._isDisposed = true, this._disposedAt = new Error("InstantiationService disposed here");
      for (const t of [...this._children]) try {
        t.dispose();
      } catch (r) {
        Ct(r);
      }
      this._children.clear();
      for (const t of this._servicesToMaybeDispose) if (hu(t)) try {
        t.dispose();
      } catch (r) {
        Ct(r);
      }
      this._servicesToMaybeDispose.clear();
    }
  }
  _throwIfDisposed() {
    if (this._isDisposed) {
      const t = this._findLabel();
      let r = t ? `InstantiationService has been disposed (${t})` : "InstantiationService has been disposed";
      throw this._disposedAt?.stack && (r += `
--- disposed at: ---
${this._disposedAt.stack}
---`), new Error(r);
    }
  }
  _findLabel() {
    return this._label ?? this._parent?._findLabel();
  }
  createChild(t, r) {
    this._throwIfDisposed();
    const n = this, s = new class extends fh {
      dispose() {
        n._children.delete(s), super.dispose();
      }
    }(t, this._strict, this, this._enableTracing, this._enableLazyInstantiation);
    return this._children.add(s), r?.add(s), s;
  }
  invokeFunction(t, ...r) {
    this._throwIfDisposed();
    const n = ju.traceInvocation(this._enableTracing, t);
    let s = false;
    try {
      return t({ get: (o) => {
        if (s) throw t0("service accessor is only valid during the invocation of its target method");
        const a = this._getOrCreateServiceInstance(o, n);
        if (!a) throw new Error(`[invokeFunction] unknown service '${o}'`);
        return a;
      } }, ...r);
    } finally {
      s = true, n.stop();
    }
  }
  createInstance(t, ...r) {
    this._throwIfDisposed();
    let n, s;
    return t instanceof wn ? (n = ju.traceCreation(this._enableTracing, t.ctor), s = this._createInstance(t.ctor, t.staticArguments.concat(r), n)) : (n = ju.traceCreation(this._enableTracing, t), s = this._createInstance(t, r, n)), n.stop(), s;
  }
  _createInstance(t, r = [], n) {
    const s = dt.getServiceDependencies(t).sort((a, c) => a.index - c.index), i = [];
    for (const a of s) {
      const c = this._getOrCreateServiceInstance(a.id, n);
      c || this._throwIfStrict(`[createInstance] ${t.name} depends on UNKNOWN service ${a.id}.`, false), i.push(c);
    }
    const o = s.length > 0 ? s[0].index : r.length;
    if (r.length !== o) {
      console.trace(`[createInstance] First service dependency of ${t.name} at position ${o + 1} conflicts with ${r.length} static arguments`);
      const a = o - r.length;
      a > 0 ? r = r.concat(new Array(a)) : r = r.slice(0, o);
    }
    return Reflect.construct(t, r.concat(i));
  }
  _setCreatedServiceInstance(t, r) {
    if (this._services.get(t) instanceof wn) this._services.set(t, r);
    else if (this._parent) this._parent._setCreatedServiceInstance(t, r);
    else throw new Error("illegalState - setting UNKNOWN service instance");
  }
  _getServiceInstanceOrDescriptor(t) {
    const r = this._services.get(t);
    return !r && this._parent ? this._parent._getServiceInstanceOrDescriptor(t) : r;
  }
  _getOrCreateServiceInstance(t, r) {
    this._globalGraph && this._globalGraphImplicitDependency && this._globalGraph.insertEdge(this._globalGraphImplicitDependency, String(t));
    const n = this._getServiceInstanceOrDescriptor(t);
    return n instanceof wn ? this._safeCreateAndCacheServiceInstance(t, n, r.branch(t, true)) : (r.branch(t, false), n);
  }
  _safeCreateAndCacheServiceInstance(t, r, n) {
    if (this._activeInstantiations.has(t)) throw new Error(`illegal state - RECURSIVELY instantiating service '${t}'`);
    this._activeInstantiations.add(t);
    try {
      return this._createAndCacheServiceInstance(t, r, n);
    } finally {
      this._activeInstantiations.delete(t);
    }
  }
  _createAndCacheServiceInstance(t, r, n) {
    const s = new Rv((c) => c.id.toString());
    let i = 0;
    const o = [{ id: t, desc: r, _trace: n }], a = /* @__PURE__ */ new Set();
    for (; o.length; ) {
      const c = o.pop();
      if (!a.has(String(c.id))) {
        if (a.add(String(c.id)), s.lookupOrInsertNode(c), i++ > 1e4) throw new kv(s, "cycle count more than 1000");
        for (const l of dt.getServiceDependencies(c.desc.ctor)) {
          const u = this._getServiceInstanceOrDescriptor(l.id);
          if (u || this._throwIfStrict(`[createInstance] ${t} depends on ${l.id} which is NOT registered.`, true), this._globalGraph?.insertEdge(String(c.id), String(l.id)), u instanceof wn) {
            const d = { id: l.id, desc: u, _trace: c._trace.branch(l.id, true) };
            s.insertEdge(c, d), o.push(d);
          }
        }
      }
    }
    for (; ; ) {
      const c = s.roots();
      if (c.length === 0) {
        if (!s.isEmpty()) throw new kv(s, "no more roots but still nodes in the graph");
        break;
      }
      for (const { data: l } of c) {
        if (this._getServiceInstanceOrDescriptor(l.id) instanceof wn) {
          const d = this._createServiceInstanceWithOwner(l.id, l.desc.ctor, l.desc.staticArguments, l.desc.supportsDelayedInstantiation, l.desc.supportsLazyInstantiation, l._trace);
          this._setCreatedServiceInstance(l.id, d);
        }
        s.removeNode(l);
      }
    }
    return this._getServiceInstanceOrDescriptor(t);
  }
  _createServiceInstanceWithOwner(t, r, n = [], s, i, o) {
    if (this._services.get(t) instanceof wn) return this._createServiceInstance(t, r, n, s, i, o, this._servicesToMaybeDispose);
    if (this._parent) return this._parent._createServiceInstanceWithOwner(t, r, n, s, i, o);
    throw new Error(`illegalState - creating UNKNOWN service instance ${r.name}`);
  }
  _createServiceInstance(t, r, n = [], s, i, o, a) {
    if (s) {
      const c = new fh(void 0, this._strict, this, this._enableTracing, this._enableLazyInstantiation);
      c._globalGraphImplicitDependency = String(t);
      const l = /* @__PURE__ */ new Map(), u = i && this._enableLazyInstantiation, d = () => {
        if (this._isDisposed) {
          l.clear();
          return;
        }
        const p = c._createInstance(r, n, o);
        if (this._isDisposed) {
          if (hu(p)) try {
            p.dispose();
          } catch (g) {
            Ct(g);
          }
          l.clear();
          return;
        }
        for (const [g, _] of l) {
          const y = p[g];
          if (typeof y == "function") for (const m of _) m.disposable = y.apply(p, m.listener);
        }
        return l.clear(), a.add(p), p;
      }, f = u ? new K3(d) : new QA(d);
      return a.add(f), new Proxy(/* @__PURE__ */ Object.create(null), { get(p, g) {
        if (!f.isInitialized && typeof g == "string" && (g.startsWith("onDid") || g.startsWith("onWill"))) {
          let m = l.get(g);
          return m || (m = new C6(), l.set(g, m)), (S, v, b) => {
            if (f.isInitialized) {
              const I = f.value;
              return I ? I[g](S, v, b) : ke.None(S, v, b);
            } else {
              const I = { listener: [S, v, b], disposable: void 0 }, O = m.push(I);
              return rr(() => {
                O(), I.disposable?.dispose();
              });
            }
          };
        }
        if (g in p) return p[g];
        const _ = f.value;
        if (!_) return;
        let y = _[g];
        return typeof y != "function" || (y = y.bind(_), p[g] = y), y;
      }, set(p, g, _) {
        const y = f.value;
        return y && (y[g] = _), true;
      }, getPrototypeOf(p) {
        return r.prototype;
      } });
    } else {
      const c = this._createInstance(r, n, o);
      return a.add(c), c;
    }
  }
  _throwIfStrict(t, r) {
    if (r && console.warn(t), this._strict) throw new Error(t);
  }
}, Ds = class Ht {
  constructor(t, r) {
    this.type = t, this.name = r, this._start = Date.now(), this._dep = [];
  }
  static traceInvocation(t, r) {
    return t ? new Ht(2, r.name || new Error().stack.split(`
`).slice(3, 4).join(`
`)) : Ht._None;
  }
  static traceCreation(t, r) {
    return t ? new Ht(1, r.name) : Ht._None;
  }
  branch(t, r) {
    const n = new Ht(3, t.toString());
    return this._dep.push([t, r, n]), n;
  }
  stop() {
    const t = Date.now() - this._start;
    Ht._totals += t;
    let r = false;
    function n(i, o) {
      const a = [], c = new Array(i + 1).join("	");
      for (const [l, u, d] of o._dep) if (u && d) {
        r = true, a.push(`${c}CREATES -> ${l}`);
        const f = n(i + 1, d);
        f && a.push(f);
      } else a.push(`${c}uses -> ${l}`);
      return a.join(`
`);
    }
    const s = [`${this.type === 1 ? "CREATE" : "CALL"} ${this.name}`, `${n(1, this)}`, `DONE, took ${t.toFixed(2)}ms (grand total ${Ht._totals.toFixed(2)}ms)`];
    (t > 2 || r) && Ht.all.add(s.join(`
`));
  }
};
Ds.all = /* @__PURE__ */ new Set(), Ds._None = new class extends Ds {
  constructor() {
    super(0, null);
  }
  stop() {
  }
  branch() {
    return this;
  }
}(), Ds._totals = 0;
var ju = Ds;
h();
var Iv = or("mainProcessService"), V3 = class {
  constructor(e, t) {
    this.server = e, this.router = t;
  }
  getChannel(e) {
    return this.server.getChannel(e, this.router);
  }
  registerChannel(e, t) {
    this.server.registerChannel(e, t);
  }
  sendRawMessage(e, t) {
  }
};
h(), h(), h(), h(), h(), h(), h();
var V = false;
h(), h();
var pe = globalThis;
h(), h(), h(), h();
var Ns = "10.25.0-cursor";
function En() {
  return Vu(pe), pe;
}
function Vu(e) {
  const t = e.__SENTRY__ = e.__SENTRY__ || {};
  return t.version = t.version || Ns, t[Ns] = t[Ns] || {};
}
function Us(e, t, r = pe) {
  const n = r.__SENTRY__ = r.__SENTRY__ || {}, s = n[Ns] = n[Ns] || {};
  return s[e] || (s[e] = t());
}
var No = ["debug", "info", "warn", "error", "log", "assert", "trace"], Y3 = "Sentry Logger ", Uo = {};
function $o(e) {
  if (!("console" in pe)) return e();
  const t = pe.console, r = {}, n = Object.keys(Uo);
  n.forEach((s) => {
    const i = Uo[s];
    r[s] = t[s], t[s] = i;
  });
  try {
    return e();
  } finally {
    n.forEach((s) => {
      t[s] = r[s];
    });
  }
}
function X3() {
  Xu().enabled = true;
}
function J3() {
  Xu().enabled = false;
}
function Pv() {
  return Xu().enabled;
}
function Z3(...e) {
  Yu("log", ...e);
}
function Q3(...e) {
  Yu("warn", ...e);
}
function eR(...e) {
  Yu("error", ...e);
}
function Yu(e, ...t) {
  V && Pv() && $o(() => {
    pe.console[e](`${Y3}[${e}]:`, ...t);
  });
}
function Xu() {
  return V ? Us("loggerSettings", () => ({ enabled: false })) : { enabled: false };
}
var ne = { enable: X3, disable: J3, isEnabled: Pv, log: Z3, warn: Q3, error: eR };
h();
var Ju = "<anonymous>";
function Ov(e) {
  try {
    return !e || typeof e != "function" ? Ju : e.name || Ju;
  } catch {
    return Ju;
  }
}
function Zu(e) {
  const t = e.exception;
  if (t) {
    const r = [];
    try {
      return t.values.forEach((n) => {
        n.stacktrace.frames && r.push(...n.stacktrace.frames);
      }), r;
    } catch {
      return;
    }
  }
}
var Fo = {}, Cv = {};
function tR(e, t) {
  Fo[e] = Fo[e] || [], Fo[e].push(t);
}
function rR(e, t) {
  if (!Cv[e]) {
    Cv[e] = true;
    try {
      t();
    } catch (r) {
      V && ne.error(`Error while instrumenting ${e}`, r);
    }
  }
}
function nR(e, t) {
  const r = e && Fo[e];
  if (r) for (const n of r) try {
    n(t);
  } catch (s) {
    V && ne.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${Ov(n)}
Error:`, s);
  }
}
h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h();
var Lv = Object.prototype.toString;
function An(e) {
  switch (Lv.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return true;
    default:
      return Pr(e, Error);
  }
}
function Qu(e, t) {
  return Lv.call(e) === `[object ${t}]`;
}
function Ho(e) {
  return Qu(e, "String");
}
function xv(e) {
  return typeof e == "object" && e !== null && "__sentry_template_string__" in e && "__sentry_template_values__" in e;
}
function sR(e) {
  return e === null || xv(e) || typeof e != "object" && typeof e != "function";
}
function Bo(e) {
  return Qu(e, "Object");
}
function iR(e) {
  return typeof Event < "u" && Pr(e, Event);
}
function oR(e) {
  return typeof Element < "u" && Pr(e, Element);
}
function aR(e) {
  return Qu(e, "RegExp");
}
function Mv(e) {
  return !!(e?.then && typeof e.then == "function");
}
function cR(e) {
  return Bo(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
}
function Pr(e, t) {
  try {
    return e instanceof t;
  } catch {
    return false;
  }
}
function Dv(e) {
  return !!(typeof e == "object" && e !== null && (e.__isVue || e._isVue));
}
var lR = pe, uR = 80;
function dR(e, t = {}) {
  if (!e) return "<unknown>";
  try {
    let r = e;
    const n = 5, s = [];
    let i = 0, o = 0;
    const a = " > ", c = a.length;
    let l;
    const u = Array.isArray(t) ? t : t.keyAttrs, d = !Array.isArray(t) && t.maxStringLength || uR;
    for (; r && i++ < n && (l = hR(r, u), !(l === "html" || i > 1 && o + s.length * c + l.length >= d)); ) s.push(l), o += l.length, r = r.parentNode;
    return s.reverse().join(a);
  } catch {
    return "<unknown>";
  }
}
function hR(e, t) {
  const r = e, n = [];
  if (!r?.tagName) return "";
  if (lR.HTMLElement && r instanceof HTMLElement && r.dataset) {
    if (r.dataset.sentryComponent) return r.dataset.sentryComponent;
    if (r.dataset.sentryElement) return r.dataset.sentryElement;
  }
  n.push(r.tagName.toLowerCase());
  const s = t?.length ? t.filter((o) => r.getAttribute(o)).map((o) => [o, r.getAttribute(o)]) : null;
  if (s?.length) s.forEach((o) => {
    n.push(`[${o[0]}="${o[1]}"]`);
  });
  else {
    r.id && n.push(`#${r.id}`);
    const o = r.className;
    if (o && Ho(o)) {
      const a = o.split(/\s+/);
      for (const c of a) n.push(`.${c}`);
    }
  }
  const i = ["aria-label", "type", "name", "title", "alt"];
  for (const o of i) {
    const a = r.getAttribute(o);
    a && n.push(`[${o}="${a}"]`);
  }
  return n.join("");
}
function ed(e, t, r) {
  if (!(t in e)) return;
  const n = e[t];
  if (typeof n != "function") return;
  const s = r(n);
  typeof s == "function" && fR(s, n);
  try {
    e[t] = s;
  } catch {
    V && ne.log(`Failed to replace method "${t}" in object`, e);
  }
}
function ar(e, t, r) {
  try {
    Object.defineProperty(e, t, { value: r, writable: true, configurable: true });
  } catch {
    V && ne.log(`Failed to add non-enumerable property "${t}" to object`, e);
  }
}
function fR(e, t) {
  try {
    const r = t.prototype || {};
    e.prototype = t.prototype = r, ar(e, "__sentry_original__", t);
  } catch {
  }
}
function pR(e) {
  return e.__sentry_original__;
}
function gR(e) {
  if (An(e)) return { message: e.message, name: e.name, stack: e.stack, ...Uv(e) };
  if (iR(e)) {
    const t = { type: e.type, target: Nv(e.target), currentTarget: Nv(e.currentTarget), ...Uv(e) };
    return typeof CustomEvent < "u" && Pr(e, CustomEvent) && (t.detail = e.detail), t;
  } else return e;
}
function Nv(e) {
  try {
    return oR(e) ? dR(e) : Object.prototype.toString.call(e);
  } catch {
    return "<unknown>";
  }
}
function Uv(e) {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t;
  } else return {};
}
h(), h();
function td(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`;
}
function rd(e, t) {
  if (!Array.isArray(e)) return "";
  const r = [];
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    try {
      Dv(s) ? r.push("[VueViewModel]") : r.push(String(s));
    } catch {
      r.push("[value cannot be serialized]");
    }
  }
  return r.join(t);
}
function zo(e, t, r = false) {
  return Ho(e) ? aR(t) ? t.test(e) : Ho(t) ? r ? e === t : e.includes(t) : false : false;
}
function Wo(e, t = [], r = false) {
  return t.some((n) => zo(e, n, r));
}
function _R() {
  const e = pe;
  return e.crypto || e.msCrypto;
}
var nd;
function mR() {
  return Math.random() * 16;
}
function Rn(e = _R()) {
  try {
    if (e?.randomUUID) return e.randomUUID().replace(/-/g, "");
  } catch {
  }
  return nd || (nd = "10000000100040008000" + 1e11), nd.replace(/[018]/g, (t) => (t ^ (mR() & 15) >> t / 4).toString(16));
}
function $v(e) {
  return e.exception?.values?.[0];
}
function Tn(e) {
  const { message: t, event_id: r } = e;
  if (t) return t;
  const n = $v(e);
  return n ? n.type && n.value ? `${n.type}: ${n.value}` : n.type || n.value || r || "<unknown>" : r || "<unknown>";
}
function Fv(e, t) {
  const r = $v(e);
  if (!r) return;
  const n = { type: "generic", handled: true }, s = r.mechanism;
  if (r.mechanism = { ...n, ...s, ...t }, t && "data" in t) {
    const i = { ...s?.data, ...t.data };
    r.mechanism.data = i;
  }
}
h();
var Hv = 1e3;
function sd() {
  return Date.now() / Hv;
}
function vR() {
  const { performance: e } = pe;
  if (!e?.now || !e.timeOrigin) return sd;
  const t = e.timeOrigin;
  return () => (t + e.now()) / Hv;
}
var Bv;
function $s() {
  return (Bv ?? (Bv = vR()))();
}
function yR(e, t = {}) {
  if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || $s(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : Rn()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
  else if (typeof t.duration == "number") e.duration = t.duration;
  else {
    const r = e.timestamp - e.started;
    e.duration = r >= 0 ? r : 0;
  }
  t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status);
}
h();
function Go(e, t, r = 2) {
  if (!t || typeof t != "object" || r <= 0) return t;
  if (e && Object.keys(t).length === 0) return e;
  const n = { ...e };
  for (const s in t) Object.prototype.hasOwnProperty.call(t, s) && (n[s] = Go(n[s], t[s], r - 1));
  return n;
}
h();
function Ko() {
  return Rn();
}
function qo() {
  return Rn().substring(16);
}
h();
var id = "_sentrySpan";
function jo(e, t) {
  t ? ar(e, id, t) : delete e[id];
}
function Fs(e) {
  return e[id];
}
var SR = 100, kn = class ph {
  constructor() {
    this._notifyingListeners = false, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = { traceId: Ko(), sampleRand: Math.random() };
  }
  clone() {
    const t = new ph();
    return t._breadcrumbs = [...this._breadcrumbs], t._tags = { ...this._tags }, t._extra = { ...this._extra }, t._contexts = { ...this._contexts }, this._contexts.flags && (t._contexts.flags = { values: [...this._contexts.flags.values] }), t._user = this._user, t._level = this._level, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [...this._eventProcessors], t._attachments = [...this._attachments], t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }, t._propagationContext = { ...this._propagationContext }, t._client = this._client, t._lastEventId = this._lastEventId, jo(t, Fs(this)), t;
  }
  setClient(t) {
    this._client = t;
  }
  setLastEventId(t) {
    this._lastEventId = t;
  }
  getClient() {
    return this._client;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addScopeListener(t) {
    this._scopeListeners.push(t);
  }
  addEventProcessor(t) {
    return this._eventProcessors.push(t), this;
  }
  setUser(t) {
    return this._user = t || { email: void 0, id: void 0, ip_address: void 0, username: void 0 }, this._session && yR(this._session, { user: t }), this._notifyScopeListeners(), this;
  }
  getUser() {
    return this._user;
  }
  setTags(t) {
    return this._tags = { ...this._tags, ...t }, this._notifyScopeListeners(), this;
  }
  setTag(t, r) {
    return this._tags = { ...this._tags, [t]: r }, this._notifyScopeListeners(), this;
  }
  setExtras(t) {
    return this._extra = { ...this._extra, ...t }, this._notifyScopeListeners(), this;
  }
  setExtra(t, r) {
    return this._extra = { ...this._extra, [t]: r }, this._notifyScopeListeners(), this;
  }
  setFingerprint(t) {
    return this._fingerprint = t, this._notifyScopeListeners(), this;
  }
  setLevel(t) {
    return this._level = t, this._notifyScopeListeners(), this;
  }
  setTransactionName(t) {
    return this._transactionName = t, this._notifyScopeListeners(), this;
  }
  setContext(t, r) {
    return r === null ? delete this._contexts[t] : this._contexts[t] = r, this._notifyScopeListeners(), this;
  }
  setSession(t) {
    return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this;
  }
  getSession() {
    return this._session;
  }
  update(t) {
    if (!t) return this;
    const r = typeof t == "function" ? t(this) : t, n = r instanceof ph ? r.getScopeData() : Bo(r) ? t : void 0, { tags: s, extra: i, user: o, contexts: a, level: c, fingerprint: l = [], propagationContext: u } = n || {};
    return this._tags = { ...this._tags, ...s }, this._extra = { ...this._extra, ...i }, this._contexts = { ...this._contexts, ...a }, o && Object.keys(o).length && (this._user = o), c && (this._level = c), l.length && (this._fingerprint = l), u && (this._propagationContext = u), this;
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, jo(this, void 0), this._attachments = [], this.setPropagationContext({ traceId: Ko(), sampleRand: Math.random() }), this._notifyScopeListeners(), this;
  }
  addBreadcrumb(t, r) {
    const n = typeof r == "number" ? r : SR;
    if (n <= 0) return this;
    const s = { timestamp: sd(), ...t, message: t.message ? td(t.message, 2048) : t.message };
    return this._breadcrumbs.push(s), this._breadcrumbs.length > n && (this._breadcrumbs = this._breadcrumbs.slice(-n), this._client?.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this;
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    return this._breadcrumbs = [], this._notifyScopeListeners(), this;
  }
  addAttachment(t) {
    return this._attachments.push(t), this;
  }
  clearAttachments() {
    return this._attachments = [], this;
  }
  getScopeData() {
    return { breadcrumbs: this._breadcrumbs, attachments: this._attachments, contexts: this._contexts, tags: this._tags, extra: this._extra, user: this._user, level: this._level, fingerprint: this._fingerprint || [], eventProcessors: this._eventProcessors, propagationContext: this._propagationContext, sdkProcessingMetadata: this._sdkProcessingMetadata, transactionName: this._transactionName, span: Fs(this) };
  }
  setSDKProcessingMetadata(t) {
    return this._sdkProcessingMetadata = Go(this._sdkProcessingMetadata, t, 2), this;
  }
  setPropagationContext(t) {
    return this._propagationContext = t, this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(t, r) {
    const n = r?.event_id || Rn();
    if (!this._client) return V && ne.warn("No client configured on scope - will not capture exception!"), n;
    const s = new Error("Sentry syntheticException");
    return this._client.captureException(t, { originalException: t, syntheticException: s, ...r, event_id: n }, this), n;
  }
  captureMessage(t, r, n) {
    const s = n?.event_id || Rn();
    if (!this._client) return V && ne.warn("No client configured on scope - will not capture message!"), s;
    const i = new Error(t);
    return this._client.captureMessage(t, r, { originalException: t, syntheticException: i, ...n, event_id: s }, this), s;
  }
  captureEvent(t, r) {
    const n = r?.event_id || Rn();
    return this._client ? (this._client.captureEvent(t, { ...r, event_id: n }, this), n) : (V && ne.warn("No client configured on scope - will not capture event!"), n);
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = true, this._scopeListeners.forEach((t) => {
      t(this);
    }), this._notifyingListeners = false);
  }
};
function bR() {
  return Us("defaultCurrentScope", () => new kn());
}
function wR() {
  return Us("defaultIsolationScope", () => new kn());
}
var ER = class {
  constructor(e, t) {
    let r;
    e ? r = e : r = new kn();
    let n;
    t ? n = t : n = new kn(), this._stack = [{ scope: r }], this._isolationScope = n;
  }
  withScope(e) {
    const t = this._pushScope();
    let r;
    try {
      r = e(t);
    } catch (n) {
      throw this._popScope(), n;
    }
    return Mv(r) ? r.then((n) => (this._popScope(), n), (n) => {
      throw this._popScope(), n;
    }) : (this._popScope(), r);
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  _pushScope() {
    const e = this.getScope().clone();
    return this._stack.push({ client: this.getClient(), scope: e }), e;
  }
  _popScope() {
    return this._stack.length <= 1 ? false : !!this._stack.pop();
  }
};
function In() {
  const e = En(), t = Vu(e);
  return t.stack = t.stack || new ER(bR(), wR());
}
function AR(e) {
  return In().withScope(e);
}
function RR(e, t) {
  const r = In();
  return r.withScope(() => (r.getStackTop().scope = e, t(e)));
}
function zv(e) {
  return In().withScope(() => e(In().getIsolationScope()));
}
function TR() {
  return { withIsolationScope: zv, withScope: AR, withSetScope: RR, withSetIsolationScope: (e, t) => zv(t), getCurrentScope: () => In().getScope(), getIsolationScope: () => In().getIsolationScope() };
}
function Hs(e) {
  const t = Vu(e);
  return t.acs ? t.acs : TR();
}
h();
function Ft() {
  const e = En();
  return Hs(e).getCurrentScope();
}
function od() {
  const e = En();
  return Hs(e).getIsolationScope();
}
function kR() {
  return Us("globalScope", () => new kn());
}
function Vo(...e) {
  const t = En(), r = Hs(t);
  if (e.length === 2) {
    const [n, s] = e;
    return n ? r.withSetScope(n, s) : r.withScope(s);
  }
  return r.withScope(e[0]);
}
function tt() {
  return Ft().getClient();
}
function IR(e) {
  const t = e.getPropagationContext(), { traceId: r, parentSpanId: n, propagationSpanId: s } = t, i = { trace_id: r, span_id: s || qo() };
  return n && (i.parent_span_id = n), i;
}
h();
var Yo = "sentry.source", Wv = "sentry.sample_rate", PR = "sentry.previous_trace_sample_rate", Bs = "sentry.op", Pn = "sentry.origin", OR = "sentry.measurement_unit", CR = "sentry.measurement_value", Gv = "sentry.custom_span_name", LR = "sentry.profile_id", xR = "sentry.exclusive_time";
h();
var MR = 0, ad = 1, $e = 2;
function DR(e) {
  if (e < 400 && e >= 100) return { code: ad };
  if (e >= 400 && e < 500) switch (e) {
    case 401:
      return { code: $e, message: "unauthenticated" };
    case 403:
      return { code: $e, message: "permission_denied" };
    case 404:
      return { code: $e, message: "not_found" };
    case 409:
      return { code: $e, message: "already_exists" };
    case 413:
      return { code: $e, message: "failed_precondition" };
    case 429:
      return { code: $e, message: "resource_exhausted" };
    case 499:
      return { code: $e, message: "cancelled" };
    default:
      return { code: $e, message: "invalid_argument" };
  }
  if (e >= 500 && e < 600) switch (e) {
    case 501:
      return { code: $e, message: "unimplemented" };
    case 503:
      return { code: $e, message: "unavailable" };
    case 504:
      return { code: $e, message: "deadline_exceeded" };
    default:
      return { code: $e, message: "internal_error" };
  }
  return { code: $e, message: "internal_error" };
}
function Kv(e, t) {
  e.setAttribute("http.response.status_code", t);
  const r = DR(t);
  r.message !== "unknown_error" && e.setStatus(r);
}
h();
var qv = "_sentryScope", jv = "_sentryIsolationScope";
function NR(e) {
  try {
    const t = pe.WeakRef;
    if (typeof t == "function") return new t(e);
  } catch {
  }
  return e;
}
function UR(e) {
  if (e) {
    if (typeof e == "object" && "deref" in e && typeof e.deref == "function") try {
      return e.deref();
    } catch {
      return;
    }
    return e;
  }
}
function $R(e, t, r) {
  e && (ar(e, jv, NR(r)), ar(e, qv, t));
}
function Xo(e) {
  const t = e;
  return { scope: t[qv], isolationScope: UR(t[jv]) };
}
h(), h();
var FR = "sentry-", HR = /^sentry-/;
function BR(e) {
  const t = zR(e);
  if (!t) return;
  const r = Object.entries(t).reduce((n, [s, i]) => {
    if (s.match(HR)) {
      const o = s.slice(FR.length);
      n[o] = i;
    }
    return n;
  }, {});
  if (Object.keys(r).length > 0) return r;
}
function zR(e) {
  if (!(!e || !Ho(e) && !Array.isArray(e))) return Array.isArray(e) ? e.reduce((t, r) => {
    const n = Vv(r);
    return Object.entries(n).forEach(([s, i]) => {
      t[s] = i;
    }), t;
  }, {}) : Vv(e);
}
function Vv(e) {
  return e.split(",").map((t) => {
    const r = t.indexOf("=");
    if (r === -1) return [];
    const n = t.slice(0, r), s = t.slice(r + 1);
    return [n, s].map((i) => {
      try {
        return decodeURIComponent(i.trim());
      } catch {
        return;
      }
    });
  }).reduce((t, [r, n]) => (r && n && (t[r] = n), t), {});
}
h();
var WR = /^o(\d+)\./;
function Yv(e, t = false) {
  const { host: r, path: n, pass: s, port: i, projectId: o, protocol: a, publicKey: c } = e;
  return `${a}://${c}${t && s ? `:${s}` : ""}@${r}${i ? `:${i}` : ""}/${n && `${n}/`}${o}`;
}
function GR(e) {
  return e.match(WR)?.[1];
}
function KR(e) {
  const t = e.getOptions(), { host: r } = e.getDsn() || {};
  let n;
  return t.orgId ? n = String(t.orgId) : r && (n = GR(r)), n;
}
h();
function Xv(e) {
  if (typeof e == "boolean") return Number(e);
  const t = typeof e == "string" ? parseFloat(e) : e;
  if (!(typeof t != "number" || isNaN(t) || t < 0 || t > 1)) return t;
}
var yx = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"), Jv = 0, cd = 1, Zv = false;
function qR(e) {
  const { spanId: t, traceId: r } = e.spanContext(), { data: n, op: s, parent_span_id: i, status: o, origin: a, links: c } = rt(e);
  return { parent_span_id: i, span_id: t, trace_id: r, data: n, op: s, status: o, origin: a, links: c };
}
function jR(e) {
  const { spanId: t, traceId: r, isRemote: n } = e.spanContext(), s = n ? t : rt(e).parent_span_id, i = Xo(e).scope, o = n ? i?.getPropagationContext().propagationSpanId || qo() : t;
  return { parent_span_id: s, span_id: o, trace_id: r };
}
function Qv(e) {
  if (e && e.length > 0) return e.map(({ context: { spanId: t, traceId: r, traceFlags: n, ...s }, attributes: i }) => ({ span_id: t, trace_id: r, sampled: n === cd, attributes: i, ...s }));
}
function On(e) {
  return typeof e == "number" ? ey(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? ey(e.getTime()) : $s();
}
function ey(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function rt(e) {
  if (YR(e)) return e.getSpanJSON();
  const { spanId: t, traceId: r } = e.spanContext();
  if (VR(e)) {
    const { attributes: n, startTime: s, name: i, endTime: o, status: a, links: c } = e, l = "parentSpanId" in e ? e.parentSpanId : "parentSpanContext" in e ? e.parentSpanContext?.spanId : void 0;
    return { span_id: t, trace_id: r, data: n, description: i, parent_span_id: l, start_timestamp: On(s), timestamp: On(o) || void 0, status: ty(a), op: n[Bs], origin: n[Pn], links: Qv(c) };
  }
  return { span_id: t, trace_id: r, start_timestamp: 0, data: {} };
}
function VR(e) {
  const t = e;
  return !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status;
}
function YR(e) {
  return typeof e.getSpanJSON == "function";
}
function zs(e) {
  const { traceFlags: t } = e.spanContext();
  return t === cd;
}
function ty(e) {
  if (!(!e || e.code === MR)) return e.code === ad ? "ok" : e.message || "internal_error";
}
var Ws = "_sentryChildSpans", ld = "_sentryRootSpan";
function ry(e, t) {
  const r = e[ld] || e;
  ar(t, ld, r), e[Ws] ? e[Ws].add(t) : ar(e, Ws, /* @__PURE__ */ new Set([t]));
}
function XR(e) {
  const t = /* @__PURE__ */ new Set();
  function r(n) {
    if (!t.has(n) && zs(n)) {
      t.add(n);
      const s = n[Ws] ? Array.from(n[Ws]) : [];
      for (const i of s) r(i);
    }
  }
  return r(e), Array.from(t);
}
function Or(e) {
  return e[ld] || e;
}
function ny() {
  const e = En(), t = Hs(e);
  return t.getActiveSpan ? t.getActiveSpan() : Fs(Ft());
}
function JR() {
  Zv || ($o(() => {
    console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
  }), Zv = true);
}
h(), h();
function ud(e) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return false;
  const t = e || tt()?.getOptions();
  return !!t && (t.tracesSampleRate != null || !!t.tracesSampler);
}
h();
function sy(e) {
  ne.log(`Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`);
}
function ZR(e, t) {
  if (!t?.length || !e.description) return false;
  for (const r of t) {
    if (QR(r)) {
      if (zo(e.description, r)) return V && sy(e), true;
      continue;
    }
    if (!r.name && !r.op) continue;
    const n = r.name ? zo(e.description, r.name) : true, s = r.op ? e.op && zo(e.op, r.op) : true;
    if (n && s) return V && sy(e), true;
  }
  return false;
}
function QR(e) {
  return typeof e == "string" || e instanceof RegExp;
}
h(), h();
var eT = "production", iy = "_frozenDsc";
function dd(e, t) {
  ar(e, iy, t);
}
function oy(e, t) {
  const r = t.getOptions(), { publicKey: n } = t.getDsn() || {}, s = { environment: r.environment || eT, release: r.release, public_key: n, trace_id: e, org_id: KR(t) };
  return t.emit("createDsc", s), s;
}
function tT(e, t) {
  const r = t.getPropagationContext();
  return r.dsc || oy(r.traceId, e);
}
function Gs(e) {
  const t = tt();
  if (!t) return {};
  const r = Or(e), n = rt(r), s = n.data, i = r.spanContext().traceState, o = i?.get("sentry.sample_rate") ?? s[Wv] ?? s[PR];
  function a(g) {
    return (typeof o == "number" || typeof o == "string") && (g.sample_rate = `${o}`), g;
  }
  const c = r[iy];
  if (c) return a(c);
  const l = i?.get("sentry.dsc"), u = l && BR(l);
  if (u) return a(u);
  const d = oy(e.spanContext().traceId, t), f = s[Yo], p = n.description;
  return f !== "url" && p && (d.transaction = p), ud() && (d.sampled = String(zs(r)), d.sample_rand = i?.get("sentry.sample_rand") ?? Xo(r).scope?.getPropagationContext().sampleRand.toString()), a(d), t.emit("createDsc", d, r), d;
}
h();
var hd = class {
  constructor(e = {}) {
    this._traceId = e.traceId || Ko(), this._spanId = e.spanId || qo();
  }
  spanContext() {
    return { spanId: this._spanId, traceId: this._traceId, traceFlags: Jv };
  }
  end(e) {
  }
  setAttribute(e, t) {
    return this;
  }
  setAttributes(e) {
    return this;
  }
  setStatus(e) {
    return this;
  }
  updateName(e) {
    return this;
  }
  isRecording() {
    return false;
  }
  addEvent(e, t, r) {
    return this;
  }
  addLink(e) {
    return this;
  }
  addLinks(e) {
    return this;
  }
  recordException(e, t) {
  }
};
h(), h(), h(), h();
var rT = "solid-proxy";
function ay(e, t = 100, r = 1 / 0) {
  try {
    return fd("", e, t, r);
  } catch (n) {
    return { ERROR: `**non-serializable** (${n})` };
  }
}
function fd(e, t, r = 1 / 0, n = 1 / 0, s = oT()) {
  const [i, o] = s;
  if (t == null || ["boolean", "string"].includes(typeof t) || typeof t == "number" && Number.isFinite(t)) return t;
  if (sT(t)) return "[SolidStore]";
  const a = nT(e, t);
  if (!a.startsWith("[object ")) return a;
  if (t.__sentry_skip_normalization__) return t;
  const c = typeof t.__sentry_override_normalization_depth__ == "number" ? t.__sentry_override_normalization_depth__ : r;
  if (c === 0) return a.replace("object ", "");
  if (i(t)) return "[Circular ~]";
  const l = t;
  if (l && typeof l.toJSON == "function") try {
    const p = l.toJSON();
    return fd("", p, c - 1, n, s);
  } catch {
  }
  const u = Array.isArray(t) ? [] : {};
  let d = 0;
  const f = gR(t);
  for (const p in f) {
    if (!Object.prototype.hasOwnProperty.call(f, p)) continue;
    if (d >= n) {
      u[p] = "[MaxProperties ~]";
      break;
    }
    const g = Object.getOwnPropertyDescriptor(f, p);
    if (p === "children" && g && !("value" in g)) {
      u[p] = "[Getter]", d++;
      continue;
    }
    const _ = f[p];
    u[p] = fd(p, _, c - 1, n, s), d++;
  }
  return o(t), u;
}
function nT(e, t) {
  try {
    if (e === "domain" && t && typeof t == "object" && t._events) return "[Domain]";
    if (e === "domainEmitter") return "[DomainEmitter]";
    if (typeof global < "u" && t === global) return "[Global]";
    if (typeof window < "u" && t === window) return "[Window]";
    if (typeof document < "u" && t === document) return "[Document]";
    if (Dv(t)) return "[VueViewModel]";
    if (cR(t)) return "[SyntheticEvent]";
    if (typeof t == "number" && !Number.isFinite(t)) return `[${t}]`;
    if (typeof t == "function") return `[Function: ${Ov(t)}]`;
    if (typeof t == "symbol") return `[${String(t)}]`;
    if (typeof t == "bigint") return `[BigInt: ${String(t)}]`;
    const r = iT(t);
    return /^HTML(\w*)Element$/.test(r) ? `[HTMLElement: ${r}]` : `[object ${r}]`;
  } catch (r) {
    return `**non-serializable** (${r})`;
  }
}
function sT(e) {
  if (e === null || typeof e != "object") return false;
  try {
    return Object.getOwnPropertySymbols(e).some((t) => t.description === rT);
  } catch {
    return false;
  }
}
function iT(e) {
  const t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : "null prototype";
}
function oT() {
  const e = /* @__PURE__ */ new WeakSet();
  function t(n) {
    return e.has(n) ? true : (e.add(n), false);
  }
  function r(n) {
    e.delete(n);
  }
  return [t, r];
}
function cy(e, t = []) {
  return [e, t];
}
function ly(e, t) {
  const r = e[1];
  for (const n of r) {
    const s = n[0].type;
    if (t(n, s)) return true;
  }
  return false;
}
function aT(e) {
  return [{ type: "span" }, e];
}
function cT(e, t) {
  function r(p) {
    return !!p.trace_id && !!p.public_key;
  }
  const n = Gs(e[0]), s = t?.getDsn(), i = t?.getOptions().tunnel, o = { sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...r(n) && { trace: n }, ...!!i && s && { dsn: Yv(s) } }, { beforeSendSpan: a, ignoreSpans: c } = t?.getOptions() || {}, l = c?.length ? e.filter((p) => !ZR(rt(p), c)) : e, u = e.length - l.length;
  u && t?.recordDroppedEvent("before_send", "span", u);
  const d = a ? (p) => {
    const g = rt(p), _ = a(g);
    return _ || (JR(), g);
  } : rt, f = [];
  for (const p of l) {
    const g = d(p);
    g && f.push(aT(g));
  }
  return cy(o, f);
}
h();
function lT(e) {
  if (!V) return;
  const { description: t = "< unknown name >", op: r = "< unknown op >", parent_span_id: n } = rt(e), { spanId: s } = e.spanContext(), i = zs(e), o = Or(e), a = o === e, c = `[Tracing] Starting ${i ? "sampled" : "unsampled"} ${a ? "root " : ""}span`, l = [`op: ${r}`, `name: ${t}`, `ID: ${s}`];
  if (n && l.push(`parent ID: ${n}`), !a) {
    const { op: u, description: d } = rt(o);
    l.push(`root ID: ${o.spanContext().spanId}`), u && l.push(`root op: ${u}`), d && l.push(`root description: ${d}`);
  }
  ne.log(`${c}
  ${l.join(`
  `)}`);
}
function uT(e) {
  if (!V) return;
  const { description: t = "< unknown name >", op: r = "< unknown op >" } = rt(e), { spanId: n } = e.spanContext(), i = Or(e) === e, o = `[Tracing] Finishing "${r}" ${i ? "root " : ""}span "${t}" with ID ${n}`;
  ne.log(o);
}
h();
function uy(e) {
  if (!e || e.length === 0) return;
  const t = {};
  return e.forEach((r) => {
    const n = r.attributes || {}, s = n[OR], i = n[CR];
    typeof s == "string" && typeof i == "number" && (t[r.name] = { value: i, unit: s });
  }), t;
}
var dy = 1e3, pd = class {
  constructor(e = {}) {
    this._traceId = e.traceId || Ko(), this._spanId = e.spanId || qo(), this._startTime = e.startTimestamp || $s(), this._links = e.links, this._attributes = {}, this.setAttributes({ [Pn]: "manual", [Bs]: e.op, ...e.attributes }), this._name = e.name, e.parentSpanId && (this._parentSpanId = e.parentSpanId), "sampled" in e && (this._sampled = e.sampled), e.endTimestamp && (this._endTime = e.endTimestamp), this._events = [], this._isStandaloneSpan = e.isStandalone, this._endTime && this._onSpanEnded();
  }
  addLink(e) {
    return this._links ? this._links.push(e) : this._links = [e], this;
  }
  addLinks(e) {
    return this._links ? this._links.push(...e) : this._links = e, this;
  }
  recordException(e, t) {
  }
  spanContext() {
    const { _spanId: e, _traceId: t, _sampled: r } = this;
    return { spanId: e, traceId: t, traceFlags: r ? cd : Jv };
  }
  setAttribute(e, t) {
    return t === void 0 ? delete this._attributes[e] : this._attributes[e] = t, this;
  }
  setAttributes(e) {
    return Object.keys(e).forEach((t) => this.setAttribute(t, e[t])), this;
  }
  updateStartTime(e) {
    this._startTime = On(e);
  }
  setStatus(e) {
    return this._status = e, this;
  }
  updateName(e) {
    return this._name = e, this.setAttribute(Yo, "custom"), this;
  }
  end(e) {
    this._endTime || (this._endTime = On(e), uT(this), this._onSpanEnded());
  }
  getSpanJSON() {
    return { data: this._attributes, description: this._name, op: this._attributes[Bs], parent_span_id: this._parentSpanId, span_id: this._spanId, start_timestamp: this._startTime, status: ty(this._status), timestamp: this._endTime, trace_id: this._traceId, origin: this._attributes[Pn], profile_id: this._attributes[LR], exclusive_time: this._attributes[xR], measurements: uy(this._events), is_segment: this._isStandaloneSpan && Or(this) === this || void 0, segment_id: this._isStandaloneSpan ? Or(this).spanContext().spanId : void 0, links: Qv(this._links) };
  }
  isRecording() {
    return !this._endTime && !!this._sampled;
  }
  addEvent(e, t, r) {
    V && ne.log("[Tracing] Adding an event to span:", e);
    const n = hy(t) ? t : r || $s(), s = hy(t) ? {} : t || {}, i = { name: e, time: On(n), attributes: s };
    return this._events.push(i), this;
  }
  isStandaloneSpan() {
    return !!this._isStandaloneSpan;
  }
  _onSpanEnded() {
    const e = tt();
    if (e && e.emit("spanEnd", this), !(this._isStandaloneSpan || this === Or(this))) return;
    if (this._isStandaloneSpan) {
      this._sampled ? hT(cT([this], e)) : (V && ne.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), e && e.recordDroppedEvent("sample_rate", "span"));
      return;
    }
    const r = this._convertSpanToTransaction();
    r && (Xo(this).scope || Ft()).captureEvent(r);
  }
  _convertSpanToTransaction() {
    if (!fy(rt(this))) return;
    this._name || (V && ne.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
    const { scope: e, isolationScope: t } = Xo(this), r = e?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
    if (this._sampled !== true) return;
    const s = XR(this).filter((l) => l !== this && !dT(l)).map((l) => rt(l)).filter(fy), i = this._attributes[Yo];
    delete this._attributes[Gv], s.forEach((l) => {
      delete l.data[Gv];
    });
    const o = { contexts: { trace: qR(this) }, spans: s.length > dy ? s.sort((l, u) => l.start_timestamp - u.start_timestamp).slice(0, dy) : s, start_timestamp: this._startTime, timestamp: this._endTime, transaction: this._name, type: "transaction", sdkProcessingMetadata: { capturedSpanScope: e, capturedSpanIsolationScope: t, dynamicSamplingContext: Gs(this) }, request: r, ...i && { transaction_info: { source: i } } }, a = uy(this._events);
    return a && Object.keys(a).length && (V && ne.log("[Measurements] Adding measurements to transaction event", JSON.stringify(a, void 0, 2)), o.measurements = a), o;
  }
};
function hy(e) {
  return e && typeof e == "number" || e instanceof Date || Array.isArray(e);
}
function fy(e) {
  return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id;
}
function dT(e) {
  return e instanceof pd && e.isStandaloneSpan();
}
function hT(e) {
  const t = tt();
  if (!t) return;
  const r = e[1];
  if (!r || r.length === 0) {
    t.recordDroppedEvent("before_send", "span");
    return;
  }
  t.sendEnvelope(e);
}
h(), h();
function fT(e, t, r = () => {
}, n = () => {
}) {
  let s;
  try {
    s = e();
  } catch (i) {
    throw t(i), r(), i;
  }
  return pT(s, t, r, n);
}
function pT(e, t, r, n) {
  return Mv(e) ? e.then((s) => (r(), n(s), s), (s) => {
    throw t(s), r(), s;
  }) : (r(), n(e), e);
}
h();
function gT(e, t, r) {
  if (!ud(e)) return [false];
  let n, s;
  typeof e.tracesSampler == "function" ? (s = e.tracesSampler({ ...t, inheritOrSampleWith: (a) => typeof t.parentSampleRate == "number" ? t.parentSampleRate : typeof t.parentSampled == "boolean" ? Number(t.parentSampled) : a }), n = true) : t.parentSampled !== void 0 ? s = t.parentSampled : typeof e.tracesSampleRate < "u" && (s = e.tracesSampleRate, n = true);
  const i = Xv(s);
  if (i === void 0) return V && ne.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(s)} of type ${JSON.stringify(typeof s)}.`), [false];
  if (!i) return V && ne.log(`[Tracing] Discarding transaction because ${typeof e.tracesSampler == "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), [false, i, n];
  const o = r < i;
  return o || V && ne.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(s)})`), [o, i, n];
}
var py = "__SENTRY_SUPPRESS_TRACING__";
function gy(e, t) {
  const r = _y();
  if (r.startSpan) return r.startSpan(e, t);
  const n = vT(e), { forceTransaction: s, parentSpan: i, scope: o } = e, a = o?.clone();
  return Vo(a, () => bT(i)(() => {
    const l = Ft(), u = ST(l, i), f = e.onlyIfParent && !u ? new hd() : mT({ parentSpan: u, spanArguments: n, forceTransaction: s, scope: l });
    return jo(l, f), fT(() => t(f), () => {
      const { status: p } = rt(f);
      f.isRecording() && (!p || p === "ok") && f.setStatus({ code: $e, message: "internal_error" });
    }, () => {
      f.end();
    });
  }));
}
function _T(e, t) {
  const r = _y();
  return r.withActiveSpan ? r.withActiveSpan(e, t) : Vo((n) => (jo(n, e || void 0), t(n)));
}
function mT({ parentSpan: e, spanArguments: t, forceTransaction: r, scope: n }) {
  if (!ud()) {
    const o = new hd();
    if (r || !e) {
      const a = { sampled: "false", sample_rate: "0", transaction: t.name, ...Gs(o) };
      dd(o, a);
    }
    return o;
  }
  const s = od();
  let i;
  if (e && !r) i = yT(e, n, t), ry(e, i);
  else if (e) {
    const o = Gs(e), { traceId: a, spanId: c } = e.spanContext(), l = zs(e);
    i = my({ traceId: a, parentSpanId: c, ...t }, n, l), dd(i, o);
  } else {
    const { traceId: o, dsc: a, parentSpanId: c, sampled: l } = { ...s.getPropagationContext(), ...n.getPropagationContext() };
    i = my({ traceId: o, parentSpanId: c, ...t }, n, l), a && dd(i, a);
  }
  return lT(i), $R(i, n, s), i;
}
function vT(e) {
  const r = { isStandalone: (e.experimental || {}).standalone, ...e };
  if (e.startTime) {
    const n = { ...r };
    return n.startTimestamp = On(e.startTime), delete n.startTime, n;
  }
  return r;
}
function _y() {
  const e = En();
  return Hs(e);
}
function my(e, t, r) {
  const n = tt(), s = n?.getOptions() || {}, { name: i = "" } = e, o = { spanAttributes: { ...e.attributes }, spanName: i, parentSampled: r };
  n?.emit("beforeSampling", o, { decision: false });
  const a = o.parentSampled ?? r, c = o.spanAttributes, l = t.getPropagationContext(), [u, d, f] = t.getScopeData().sdkProcessingMetadata[py] ? [false] : gT(s, { name: i, parentSampled: a, attributes: c, parentSampleRate: Xv(l.dsc?.sample_rate) }, l.sampleRand), p = new pd({ ...e, attributes: { [Yo]: "custom", [Wv]: d !== void 0 && f ? d : void 0, ...c }, sampled: u });
  return !u && n && (V && ne.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."), n.recordDroppedEvent("sample_rate", "transaction")), n && n.emit("spanStart", p), p;
}
function yT(e, t, r) {
  const { spanId: n, traceId: s } = e.spanContext(), i = t.getScopeData().sdkProcessingMetadata[py] ? false : zs(e), o = i ? new pd({ ...r, parentSpanId: n, traceId: s, sampled: i }) : new hd({ traceId: s });
  ry(e, o);
  const a = tt();
  return a && (a.emit("spanStart", o), r.endTimestamp && a.emit("spanEnd", o)), o;
}
function ST(e, t) {
  if (t) return t;
  if (t === null) return;
  const r = Fs(e);
  if (!r) return;
  const n = tt();
  return (n ? n.getOptions() : {}).parentSpanIsAlwaysRootSpan ? Or(r) : r;
}
function bT(e) {
  return e !== void 0 ? (t) => _T(e, t) : (t) => t();
}
h(), h(), h(), h(), h();
function vy(e, t) {
  const { extra: r, tags: n, user: s, contexts: i, level: o, sdkProcessingMetadata: a, breadcrumbs: c, fingerprint: l, eventProcessors: u, attachments: d, propagationContext: f, transactionName: p, span: g } = t;
  Jo(e, "extra", r), Jo(e, "tags", n), Jo(e, "user", s), Jo(e, "contexts", i), e.sdkProcessingMetadata = Go(e.sdkProcessingMetadata, a, 2), o && (e.level = o), p && (e.transactionName = p), g && (e.span = g), c.length && (e.breadcrumbs = [...e.breadcrumbs, ...c]), l.length && (e.fingerprint = [...e.fingerprint, ...l]), u.length && (e.eventProcessors = [...e.eventProcessors, ...u]), d.length && (e.attachments = [...e.attachments, ...d]), e.propagationContext = { ...e.propagationContext, ...f };
}
function Jo(e, t, r) {
  e[t] = Go(e[t], r, 1);
}
h();
function wT(e) {
  if (e) return ET(e) ? { captureContext: e } : RT(e) ? { captureContext: e } : e;
}
function ET(e) {
  return e instanceof kn || typeof e == "function";
}
var AT = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];
function RT(e) {
  return Object.keys(e).some((t) => AT.includes(t));
}
function Ks(e, t) {
  return Ft().captureException(e, wT(t));
}
function yy(e, t) {
  const r = typeof t == "string" ? t : void 0, n = typeof t != "string" ? { captureContext: t } : void 0;
  return Ft().captureMessage(e, r, n);
}
h(), h(), h();
function Sx(e) {
  return e;
}
h(), h();
function TT(e, t) {
  return t ? Vo(t, () => {
    const r = ny(), n = r ? jR(r) : IR(t);
    return [r ? Gs(r) : tT(e, t), n];
  }) : [void 0, void 0];
}
h();
var kT = { trace: 1, debug: 5, info: 9, warn: 13, error: 17, fatal: 21 };
h();
function IT(e) {
  return [{ type: "log", item_count: e.length, content_type: "application/vnd.sentry.items.log+json" }, { items: e }];
}
function PT(e, t, r, n) {
  const s = {};
  return t?.sdk && (s.sdk = { name: t.sdk.name, version: t.sdk.version }), r && n && (s.dsn = Yv(n)), cy(s, [IT(e)]);
}
var OT = 100;
function CT(e) {
  switch (typeof e) {
    case "number":
      return Number.isInteger(e) ? { value: e, type: "integer" } : { value: e, type: "double" };
    case "boolean":
      return { value: e, type: "boolean" };
    case "string":
      return { value: e, type: "string" };
    default: {
      let t = "";
      try {
        t = JSON.stringify(e) ?? "";
      } catch {
      }
      return { value: t, type: "string" };
    }
  }
}
function St(e, t, r, n = true) {
  r && (!e[t] || n) && (e[t] = r);
}
function LT(e, t) {
  const r = gd(), n = by(e);
  n === void 0 ? r.set(e, [t]) : (r.set(e, [...n, t]), n.length >= OT && xT(e, n));
}
function Sy(e, t = Ft(), r = LT) {
  const n = t?.getClient() ?? tt();
  if (!n) {
    V && ne.warn("No client available to capture log.");
    return;
  }
  const { release: s, environment: i, enableLogs: o = false, beforeSendLog: a } = n.getOptions();
  if (!o) {
    V && ne.warn("logging option not enabled, log will not be captured.");
    return;
  }
  const [, c] = TT(n, t), l = { ...e.attributes }, { user: { id: u, email: d, username: f } } = MT(t);
  St(l, "user.id", u, false), St(l, "user.email", d, false), St(l, "user.name", f, false), St(l, "sentry.release", s), St(l, "sentry.environment", i);
  const { name: p, version: g } = n.getSdkMetadata()?.sdk ?? {};
  St(l, "sentry.sdk.name", p), St(l, "sentry.sdk.version", g);
  const _ = n.getIntegrationByName("Replay"), y = _?.getReplayId(true);
  St(l, "sentry.replay_id", y), y && _?.getRecordingMode() === "buffer" && St(l, "sentry._internal.replay_is_buffering", true);
  const m = e.message;
  if (xv(m)) {
    const { __sentry_template_string__: H, __sentry_template_values__: ee = [] } = m;
    ee?.length && (l["sentry.message.template"] = H), ee.forEach((Y, B) => {
      l[`sentry.message.parameter.${B}`] = Y;
    });
  }
  const A = Fs(t);
  St(l, "sentry.trace.parent_span_id", A?.spanContext().spanId);
  const S = { ...e, attributes: l };
  n.emit("beforeCaptureLog", S);
  const v = a ? $o(() => a(S)) : S;
  if (!v) {
    n.recordDroppedEvent("before_send", "log_item", 1), V && ne.warn("beforeSendLog returned null, log will not be captured.");
    return;
  }
  const { level: b, message: I, attributes: O = {}, severityNumber: M } = v, F = { timestamp: $s(), level: b, body: I, trace_id: c?.trace_id, severity_number: M ?? kT[b], attributes: Object.keys(O).reduce((H, ee) => (H[ee] = CT(O[ee]), H), {}) };
  r(n, F), n.emit("afterCaptureLog", v);
}
function xT(e, t) {
  const r = t ?? by(e) ?? [];
  if (r.length === 0) return;
  const n = e.getOptions(), s = PT(r, n._metadata, n.tunnel, e.getDsn());
  gd().set(e, []), e.emit("flushLogs"), e.sendEnvelope(s);
}
function by(e) {
  return gd().get(e);
}
function MT(e) {
  const t = kR().getScopeData();
  return vy(t, od().getScopeData()), vy(t, e.getScopeData()), t;
}
function gd() {
  return Us("clientToLogBufferMap", () => /* @__PURE__ */ new WeakMap());
}
h(), h(), h(), h();
function DT(e) {
  const t = [];
  e.message && t.push(e.message);
  try {
    const r = e.exception.values[e.exception.values.length - 1];
    r?.value && (t.push(r.value), r.type && t.push(`${r.type}: ${r.value}`));
  } catch {
  }
  return t;
}
h();
var bx = /* @__PURE__ */ Symbol.for("SentryInternalError"), wx = /* @__PURE__ */ Symbol.for("SentryDoNotSendEventError");
h(), h(), h(), h();
function NT(e, t) {
  return e(t.stack || "", 1);
}
function UT(e, t) {
  const r = { type: t.name || t.constructor.name, value: t.message }, n = NT(e, t);
  return n.length && (r.stacktrace = { frames: n }), r;
}
h(), h(), h();
var Ex = /* @__PURE__ */ Symbol.for("SentryBufferFullError");
h();
var Ax = 60 * 1e3;
h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h();
var $T = 100;
function wy(e, t) {
  const r = tt(), n = od();
  if (!r) return;
  const { beforeBreadcrumb: s = null, maxBreadcrumbs: i = $T } = r.getOptions();
  if (i <= 0) return;
  const a = { timestamp: sd(), ...e }, c = s ? $o(() => s(a, t)) : a;
  c !== null && (r.emit && r.emit("beforeAddBreadcrumb", c, t), n.addBreadcrumb(c, i));
}
h();
var Ey, FT = "FunctionToString", Ay = /* @__PURE__ */ new WeakMap(), HT = (() => ({ name: FT, setupOnce() {
  Ey = Function.prototype.toString;
  try {
    Function.prototype.toString = function(...e) {
      const t = pR(this), r = Ay.has(tt()) && t !== void 0 ? t : this;
      return Ey.apply(r, e);
    };
  } catch {
  }
}, setup(e) {
  Ay.set(e, true);
} })), Rx = HT;
h();
var BT = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/, /^Java exception was raised during method invocation$/], zT = "EventFilters", WT = (e = {}) => {
  let t;
  return { name: zT, setup(r) {
    const n = r.getOptions();
    t = Ry(e, n);
  }, processEvent(r, n, s) {
    if (!t) {
      const i = s.getOptions();
      t = Ry(e, i);
    }
    return GT(r, t) ? null : r;
  } };
}, Tx = ((e = {}) => ({ ...WT(e), name: "InboundFilters" }));
function Ry(e = {}, t = {}) {
  return { allowUrls: [...e.allowUrls || [], ...t.allowUrls || []], denyUrls: [...e.denyUrls || [], ...t.denyUrls || []], ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : BT], ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || []] };
}
function GT(e, t) {
  if (e.type) {
    if (e.type === "transaction" && qT(e, t.ignoreTransactions)) return V && ne.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Tn(e)}`), true;
  } else {
    if (KT(e, t.ignoreErrors)) return V && ne.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Tn(e)}`), true;
    if (XT(e)) return V && ne.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${Tn(e)}`), true;
    if (jT(e, t.denyUrls)) return V && ne.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Tn(e)}.
Url: ${Zo(e)}`), true;
    if (!VT(e, t.allowUrls)) return V && ne.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Tn(e)}.
Url: ${Zo(e)}`), true;
  }
  return false;
}
function KT(e, t) {
  return t?.length ? DT(e).some((r) => Wo(r, t)) : false;
}
function qT(e, t) {
  if (!t?.length) return false;
  const r = e.transaction;
  return r ? Wo(r, t) : false;
}
function jT(e, t) {
  if (!t?.length) return false;
  const r = Zo(e);
  return r ? Wo(r, t) : false;
}
function VT(e, t) {
  if (!t?.length) return true;
  const r = Zo(e);
  return r ? Wo(r, t) : true;
}
function YT(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const r = e[t];
    if (r && r.filename !== "<anonymous>" && r.filename !== "[native code]") return r.filename || null;
  }
  return null;
}
function Zo(e) {
  try {
    const r = [...e.exception?.values ?? []].reverse().find((n) => n.mechanism?.parent_id === void 0 && n.stacktrace?.frames?.length)?.stacktrace?.frames;
    return r ? YT(r) : null;
  } catch {
    return V && ne.error(`Cannot extract url for event ${Tn(e)}`), null;
  }
}
function XT(e) {
  return e.exception?.values?.length ? !e.message && !e.exception.values.some((t) => t.stacktrace || t.type && t.type !== "Error" || t.value) : false;
}
h(), h();
function JT(e, t, r, n, s, i) {
  if (!s.exception?.values || !i || !Pr(i.originalException, Error)) return;
  const o = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
  o && (s.exception.values = _d(e, t, n, i.originalException, r, s.exception.values, o, 0));
}
function _d(e, t, r, n, s, i, o, a) {
  if (i.length >= r + 1) return i;
  let c = [...i];
  if (Pr(n[s], Error)) {
    Ty(o, a);
    const l = e(t, n[s]), u = c.length;
    ky(l, s, u, a), c = _d(e, t, r, n[s], s, [l, ...c], l, u);
  }
  return Array.isArray(n.errors) && n.errors.forEach((l, u) => {
    if (Pr(l, Error)) {
      Ty(o, a);
      const d = e(t, l), f = c.length;
      ky(d, `errors[${u}]`, f, a), c = _d(e, t, r, l, s, [d, ...c], d, f);
    }
  }), c;
}
function Ty(e, t) {
  e.mechanism = { handled: true, type: "auto.core.linked_errors", ...e.mechanism, ...e.type === "AggregateError" && { is_exception_group: true }, exception_id: t };
}
function ky(e, t, r, n) {
  e.mechanism = { handled: true, ...e.mechanism, type: "chained", source: t, exception_id: r, parent_id: n };
}
var ZT = "cause", QT = 5, ek = "LinkedErrors", tk = ((e = {}) => {
  const t = e.limit || QT, r = e.key || ZT;
  return { name: ek, preprocessEvent(n, s, i) {
    const o = i.getOptions();
    JT(UT, o.stackParser, r, t, n, s);
  } };
}), kx = tk;
h(), h();
var Iy = /* @__PURE__ */ new Map(), Py = /* @__PURE__ */ new Set();
function rk(e) {
  if (pe._sentryModuleMetadata) for (const t of Object.keys(pe._sentryModuleMetadata)) {
    const r = pe._sentryModuleMetadata[t];
    if (Py.has(t)) continue;
    Py.add(t);
    const n = e(t);
    for (const s of n.reverse()) if (s.filename) {
      Iy.set(s.filename, r);
      break;
    }
  }
}
function nk(e, t) {
  return rk(e), Iy.get(t);
}
function Oy(e, t) {
  t.exception?.values?.forEach((r) => {
    r.stacktrace?.frames?.forEach((n) => {
      if (!n.filename || n.module_metadata) return;
      const s = nk(e, n.filename);
      s && (n.module_metadata = s);
    });
  });
}
function Cy(e) {
  e.exception?.values?.forEach((t) => {
    t.stacktrace?.frames?.forEach((r) => {
      delete r.module_metadata;
    });
  });
}
var Ix = () => ({ name: "ModuleMetadata", setup(e) {
  e.on("beforeEnvelope", (t) => {
    ly(t, (r, n) => {
      if (n === "event") {
        const s = Array.isArray(r) ? r[1] : void 0;
        s && (Cy(s), r[1] = s);
      }
    });
  }), e.on("applyFrameMetadata", (t) => {
    if (t.type) return;
    const r = e.getOptions().stackParser;
    Oy(r, t);
  });
} });
h(), h();
function sk(e) {
  const t = {};
  let r = 0;
  for (; r < e.length; ) {
    const n = e.indexOf("=", r);
    if (n === -1) break;
    let s = e.indexOf(";", r);
    if (s === -1) s = e.length;
    else if (s < n) {
      r = e.lastIndexOf(";", n - 1) + 1;
      continue;
    }
    const i = e.slice(r, n).trim();
    if (t[i] === void 0) {
      let o = e.slice(n + 1, s).trim();
      o.charCodeAt(0) === 34 && (o = o.slice(1, -1));
      try {
        t[i] = o.indexOf("%") !== -1 ? decodeURIComponent(o) : o;
      } catch {
        t[i] = o;
      }
    }
    r = s + 1;
  }
  return t;
}
h();
var Ly = ["X-Client-IP", "X-Forwarded-For", "Fly-Client-IP", "CF-Connecting-IP", "Fastly-Client-Ip", "True-Client-Ip", "X-Real-IP", "X-Cluster-Client-IP", "X-Forwarded", "Forwarded-For", "Forwarded", "X-Vercel-Forwarded-For"];
function ik(e) {
  return Ly.map((s) => {
    const i = e[s], o = Array.isArray(i) ? i.join(";") : i;
    return s === "Forwarded" ? ok(o) : o?.split(",").map((a) => a.trim());
  }).reduce((s, i) => i ? s.concat(i) : s, []).find((s) => s !== null && ak(s)) || null;
}
function ok(e) {
  if (!e) return null;
  for (const t of e.split(";")) if (t.startsWith("for=")) return t.slice(4);
  return null;
}
function ak(e) {
  return /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(?::[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(?::[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(?::[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(?::[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)/.test(e);
}
var ck = { cookies: true, data: true, headers: true, query_string: true, url: true }, lk = "RequestData", uk = ((e = {}) => {
  const t = { ...ck, ...e.include };
  return { name: lk, processEvent(r, n, s) {
    const { sdkProcessingMetadata: i = {} } = r, { normalizedRequest: o, ipAddress: a } = i, c = { ...t, ip: t.ip ?? s.getOptions().sendDefaultPii };
    return o && dk(r, o, { ipAddress: a }, c), r;
  } };
}), Px = uk;
function dk(e, t, r, n) {
  if (e.request = { ...e.request, ...hk(t, n) }, n.ip) {
    const s = t.headers && ik(t.headers) || r.ipAddress;
    s && (e.user = { ...e.user, ip_address: s });
  }
}
function hk(e, t) {
  const r = {}, n = { ...e.headers };
  if (t.headers && (r.headers = n, t.cookies || delete n.cookie, t.ip || Ly.forEach((s) => {
    delete n[s];
  })), r.method = e.method, t.url && (r.url = e.url), t.cookies) {
    const s = e.cookies || (n?.cookie ? sk(n.cookie) : void 0);
    r.cookies = s || {};
  }
  return t.query_string && (r.query_string = e.query_string), t.data && (r.data = e.data), r;
}
h(), h();
var md = false;
function vd(e) {
  const t = "console";
  tR(t, e), rR(t, fk);
}
function fk() {
  "console" in pe && No.forEach(function(e) {
    e in pe.console && ed(pe.console, e, function(t) {
      return Uo[e] = t, function(...r) {
        const n = Uo[e];
        if (md) {
          n?.apply(pe.console, r);
          return;
        }
        const s = { args: r, level: e };
        md = true;
        try {
          nR("console", s);
        } finally {
          md = false;
        }
        n?.apply(pe.console, r);
      };
    });
  });
}
h();
function xy(e) {
  return e === "warn" ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(e) ? e : "log";
}
var pk = "CaptureConsole", gk = ((e = {}) => {
  const t = e.levels || No, r = e.handled ?? true;
  return { name: pk, setup(n) {
    "console" in pe && vd(({ args: s, level: i }) => {
      tt() !== n || !t.includes(i) || _k(s, i, r);
    });
  } };
}), Ox = gk;
function _k(e, t, r) {
  const n = { level: xy(t), extra: { arguments: e } };
  Vo((s) => {
    if (s.addEventProcessor((a) => (a.logger = "console", Fv(a, { handled: r, type: "auto.core.capture_console" }), a)), t === "assert") {
      if (!e[0]) {
        const a = `Assertion failed: ${rd(e.slice(1), " ") || "console.assert"}`;
        s.setExtra("arguments", e.slice(1)), yy(a, n);
      }
      return;
    }
    const i = e.find((a) => a instanceof Error);
    if (i) {
      Ks(i, n);
      return;
    }
    const o = rd(e, " ");
    yy(o, n);
  });
}
h();
var mk = "Dedupe", vk = (() => {
  let e;
  return { name: mk, processEvent(t) {
    if (t.type) return t;
    try {
      if (yk(t, e)) return V && ne.warn("Event dropped due to being a duplicate of previously captured event."), null;
    } catch {
    }
    return e = t;
  } };
}), Cx = vk;
function yk(e, t) {
  return t ? !!(Sk(e, t) || bk(e, t)) : false;
}
function Sk(e, t) {
  const r = e.message, n = t.message;
  return !(!r && !n || r && !n || !r && n || r !== n || !Dy(e, t) || !My(e, t));
}
function bk(e, t) {
  const r = Ny(t), n = Ny(e);
  return !(!r || !n || r.type !== n.type || r.value !== n.value || !Dy(e, t) || !My(e, t));
}
function My(e, t) {
  let r = Zu(e), n = Zu(t);
  if (!r && !n) return true;
  if (r && !n || !r && n || (r = r, n = n, n.length !== r.length)) return false;
  for (let s = 0; s < n.length; s++) {
    const i = n[s], o = r[s];
    if (i.filename !== o.filename || i.lineno !== o.lineno || i.colno !== o.colno || i.function !== o.function) return false;
  }
  return true;
}
function Dy(e, t) {
  let r = e.fingerprint, n = t.fingerprint;
  if (!r && !n) return true;
  if (r && !n || !r && n) return false;
  r = r, n = n;
  try {
    return r.join("") === n.join("");
  } catch {
    return false;
  }
}
function Ny(e) {
  return e.exception?.values?.[0];
}
h();
var wk = "ExtraErrorData", Ek = ((e = {}) => {
  const { depth: t = 3, captureErrorCause: r = true } = e;
  return { name: wk, processEvent(n, s, i) {
    const { maxValueLength: o } = i.getOptions();
    return Ak(n, s, t, r, o);
  } };
}), Lx = Ek;
function Ak(e, t = {}, r, n, s) {
  if (!t.originalException || !An(t.originalException)) return e;
  const i = t.originalException.name || t.originalException.constructor.name, o = Uy(t.originalException, n, s);
  if (o) {
    const a = { ...e.contexts }, c = ay(o, r);
    return Bo(c) && (ar(c, "__sentry_skip_normalization__", true), a[i] = c), { ...e, contexts: a };
  }
  return e;
}
function Uy(e, t, r) {
  try {
    const n = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"], s = {};
    for (const i of Object.keys(e)) {
      if (n.indexOf(i) !== -1) continue;
      const o = e[i];
      s[i] = An(o) || typeof o == "string" ? r ? td(`${o}`, r) : `${o}` : o;
    }
    if (t && e.cause !== void 0) if (An(e.cause)) {
      const i = e.cause.name || e.cause.constructor.name;
      s.cause = { [i]: Uy(e.cause, false, r) };
    } else s.cause = e.cause;
    if (typeof e.toJSON == "function") {
      const i = e.toJSON();
      for (const o of Object.keys(i)) {
        const a = i[o];
        s[o] = An(a) ? a.toString() : a;
      }
    }
    return s;
  } catch (n) {
    V && ne.error("Unable to extract extra data from the Error object:", n);
  }
  return null;
}
h(), h();
function Rk(e, t) {
  let r = 0;
  for (let n = e.length - 1; n >= 0; n--) {
    const s = e[n];
    s === "." ? e.splice(n, 1) : s === ".." ? (e.splice(n, 1), r++) : r && (e.splice(n, 1), r--);
  }
  if (t) for (; r--; r) e.unshift("..");
  return e;
}
var Tk = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
function kk(e) {
  const t = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e, r = Tk.exec(t);
  return r ? r.slice(1) : [];
}
function $y(...e) {
  let t = "", r = false;
  for (let n = e.length - 1; n >= -1 && !r; n--) {
    const s = n >= 0 ? e[n] : "/";
    s && (t = `${s}/${t}`, r = s.charAt(0) === "/");
  }
  return t = Rk(t.split("/").filter((n) => !!n), !r).join("/"), (r ? "/" : "") + t || ".";
}
function Fy(e) {
  let t = 0;
  for (; t < e.length && e[t] === ""; t++) ;
  let r = e.length - 1;
  for (; r >= 0 && e[r] === ""; r--) ;
  return t > r ? [] : e.slice(t, r - t + 1);
}
function Ik(e, t) {
  e = $y(e).slice(1), t = $y(t).slice(1);
  const r = Fy(e.split("/")), n = Fy(t.split("/")), s = Math.min(r.length, n.length);
  let i = s;
  for (let a = 0; a < s; a++) if (r[a] !== n[a]) {
    i = a;
    break;
  }
  let o = [];
  for (let a = i; a < r.length; a++) o.push("..");
  return o = o.concat(n.slice(i)), o.join("/");
}
function Pk(e, t) {
  let r = kk(e)[2] || "";
  return t && r.slice(t.length * -1) === t && (r = r.slice(0, r.length - t.length)), r;
}
var Ok = "RewriteFrames", xx = (e = {}) => {
  const t = e.root, r = e.prefix || "app:///", n = "window" in pe && !!pe.window, s = e.iteratee || Ck({ isBrowser: n, root: t, prefix: r });
  function i(a) {
    try {
      return { ...a, exception: { ...a.exception, values: a.exception.values.map((c) => ({ ...c, ...c.stacktrace && { stacktrace: o(c.stacktrace) } })) } };
    } catch {
      return a;
    }
  }
  function o(a) {
    return { ...a, frames: a?.frames?.map((c) => s(c)) };
  }
  return { name: Ok, processEvent(a) {
    let c = a;
    return a.exception && Array.isArray(a.exception.values) && (c = i(c)), c;
  } };
};
function Ck({ isBrowser: e, root: t, prefix: r }) {
  return (n) => {
    if (!n.filename) return n;
    const s = /^[a-zA-Z]:\\/.test(n.filename) || n.filename.includes("\\") && !n.filename.includes("/"), i = /^\//.test(n.filename);
    if (e) {
      if (t) {
        const o = n.filename;
        o.indexOf(t) === 0 && (n.filename = o.replace(t, r));
      }
    } else if (s || i) {
      const o = s ? n.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : n.filename, a = t ? Ik(t, o) : Pk(o);
      n.filename = `${r}${a}`;
    }
    return n;
  };
}
h();
var Lk = ["reauthenticate", "signInAnonymously", "signInWithOAuth", "signInWithIdToken", "signInWithOtp", "signInWithPassword", "signInWithSSO", "signOut", "signUp", "verifyOtp"], xk = ["createUser", "deleteUser", "listUsers", "getUserById", "updateUserById", "inviteUserByEmail"], Mk = { eq: "eq", neq: "neq", gt: "gt", gte: "gte", lt: "lt", lte: "lte", like: "like", "like(all)": "likeAllOf", "like(any)": "likeAnyOf", ilike: "ilike", "ilike(all)": "ilikeAllOf", "ilike(any)": "ilikeAnyOf", is: "is", in: "in", cs: "contains", cd: "containedBy", sr: "rangeGt", nxl: "rangeGte", sl: "rangeLt", nxr: "rangeLte", adj: "rangeAdjacent", ov: "overlaps", fts: "", plfts: "plain", phfts: "phrase", wfts: "websearch", not: "not" }, Hy = ["select", "insert", "upsert", "update", "delete"];
function Qo(e) {
  try {
    e.__SENTRY_INSTRUMENTED__ = true;
  } catch {
  }
}
function ea(e) {
  try {
    return e.__SENTRY_INSTRUMENTED__;
  } catch {
    return false;
  }
}
function Dk(e, t = {}) {
  switch (e) {
    case "GET":
      return "select";
    case "POST":
      return t.Prefer?.includes("resolution=") ? "upsert" : "insert";
    case "PATCH":
      return "update";
    case "DELETE":
      return "delete";
    default:
      return "<unknown-op>";
  }
}
function Nk(e, t) {
  if (t === "" || t === "*") return "select(*)";
  if (e === "select") return `select(${t})`;
  if (e === "or" || e.endsWith(".or")) return `${e}${t}`;
  const [r, ...n] = t.split(".");
  let s;
  return r?.startsWith("fts") ? s = "textSearch" : r?.startsWith("plfts") ? s = "textSearch[plain]" : r?.startsWith("phfts") ? s = "textSearch[phrase]" : r?.startsWith("wfts") ? s = "textSearch[websearch]" : s = r && Mk[r] || "filter", `${s}(${e}, ${n.join(".")})`;
}
function By(e, t = false) {
  return new Proxy(e, { apply(r, n, s) {
    return gy({ name: `auth ${t ? "(admin) " : ""}${e.name}`, attributes: { [Pn]: "auto.db.supabase", [Bs]: "db", "db.system": "postgresql", "db.operation": `auth.${t ? "admin." : ""}${e.name}` } }, (i) => Reflect.apply(r, n, s).then((o) => (o && typeof o == "object" && "error" in o && o.error ? (i.setStatus({ code: $e }), Ks(o.error, { mechanism: { handled: false, type: "auto.db.supabase.auth" } })) : i.setStatus({ code: ad }), i.end(), o)).catch((o) => {
      throw i.setStatus({ code: $e }), i.end(), Ks(o, { mechanism: { handled: false, type: "auto.db.supabase.auth" } }), o;
    }).then(...s));
  } });
}
function Uk(e) {
  const t = e.auth;
  if (!(!t || ea(e.auth))) {
    for (const r of Lk) {
      const n = t[r];
      n && typeof e.auth[r] == "function" && (e.auth[r] = By(n));
    }
    for (const r of xk) {
      const n = t.admin[r];
      n && typeof e.auth.admin[r] == "function" && (e.auth.admin[r] = By(n, true));
    }
    Qo(e.auth);
  }
}
function $k(e) {
  ea(e.prototype.from) || (e.prototype.from = new Proxy(e.prototype.from, { apply(t, r, n) {
    const s = Reflect.apply(t, r, n), i = s.constructor;
    return Hk(i), s;
  } }), Qo(e.prototype.from));
}
function Fk(e) {
  ea(e.prototype.then) || (e.prototype.then = new Proxy(e.prototype.then, { apply(t, r, n) {
    const s = Hy, i = r, o = Dk(i.method, i.headers);
    if (!s.includes(o) || !i?.url?.pathname || typeof i.url.pathname != "string") return Reflect.apply(t, r, n);
    const a = i.url.pathname.split("/"), c = a.length > 0 ? a[a.length - 1] : "", l = [];
    for (const [p, g] of i.url.searchParams.entries()) l.push(Nk(p, g));
    const u = /* @__PURE__ */ Object.create(null);
    if (Bo(i.body)) for (const [p, g] of Object.entries(i.body)) u[p] = g;
    const d = `${o === "select" ? "" : `${o}${u ? "(...) " : ""}`}${l.join(" ")} from(${c})`, f = { "db.table": c, "db.schema": i.schema, "db.url": i.url.origin, "db.sdk": i.headers["X-Client-Info"], "db.system": "postgresql", "db.operation": o, [Pn]: "auto.db.supabase", [Bs]: "db" };
    return l.length && (f["db.query"] = l), Object.keys(u).length && (f["db.body"] = u), gy({ name: d, attributes: f }, (p) => Reflect.apply(t, r, []).then((g) => {
      if (p && (g && typeof g == "object" && "status" in g && Kv(p, g.status || 500), p.end()), g.error) {
        const m = new Error(g.error.message);
        g.error.code && (m.code = g.error.code), g.error.details && (m.details = g.error.details);
        const A = {};
        l.length && (A.query = l), Object.keys(u).length && (A.body = u), Ks(m, (S) => (S.addEventProcessor((v) => (Fv(v, { handled: false, type: "auto.db.supabase.postgres" }), v)), S.setContext("supabase", A), S));
      }
      const _ = { type: "supabase", category: `db.${o}`, message: d }, y = {};
      return l.length && (y.query = l), Object.keys(u).length && (y.body = u), Object.keys(y).length && (_.data = y), wy(_), g;
    }, (g) => {
      throw p && (Kv(p, 500), p.end()), g;
    }).then(...n));
  } }), Qo(e.prototype.then));
}
function Hk(e) {
  for (const t of Hy) ea(e.prototype[t]) || (e.prototype[t] = new Proxy(e.prototype[t], { apply(r, n, s) {
    const i = Reflect.apply(r, n, s), o = i.constructor;
    return V && ne.log(`Instrumenting ${t} operation's PostgRESTFilterBuilder`), Fk(o), i;
  } }), Qo(e.prototype[t]));
}
var Bk = (e) => {
  if (!e) {
    V && ne.warn("Supabase integration was not installed because no Supabase client was provided.");
    return;
  }
  const t = e.constructor === Function ? e : e.constructor;
  $k(t), Uk(e);
}, zk = "Supabase", Wk = ((e) => ({ setupOnce() {
  Bk(e);
}, name: zk })), Mx = (e) => Wk(e.supabaseClient);
h();
var Gk = 10, Kk = "ZodErrors";
function qk(e) {
  return An(e) && e.name === "ZodError" && Array.isArray(e.issues);
}
function jk(e) {
  return { ...e, path: "path" in e && Array.isArray(e.path) ? e.path.join(".") : void 0, keys: "keys" in e ? JSON.stringify(e.keys) : void 0, unionErrors: "unionErrors" in e ? JSON.stringify(e.unionErrors) : void 0 };
}
function Vk(e) {
  return e.map((t) => typeof t == "number" ? "<array>" : t).join(".");
}
function Yk(e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e.issues) {
    const s = Vk(n.path);
    s.length > 0 && t.add(s);
  }
  const r = Array.from(t);
  if (r.length === 0) {
    let n = "variable";
    if (e.issues.length > 0) {
      const s = e.issues[0];
      s !== void 0 && "expected" in s && typeof s.expected == "string" && (n = s.expected);
    }
    return `Failed to validate ${n}`;
  }
  return `Failed to validate keys: ${td(r.join(", "), 100)}`;
}
function Xk(e, t = false, r, n) {
  if (!r.exception?.values || !n.originalException || !qk(n.originalException) || n.originalException.issues.length === 0) return r;
  try {
    const i = (t ? n.originalException.issues : n.originalException.issues.slice(0, e)).map(jk);
    return t && (Array.isArray(n.attachments) || (n.attachments = []), n.attachments.push({ filename: "zod_issues.json", data: JSON.stringify({ issues: i }) })), { ...r, exception: { ...r.exception, values: [{ ...r.exception.values[0], value: Yk(n.originalException) }, ...r.exception.values.slice(1)] }, extra: { ...r.extra, "zoderror.issues": i.slice(0, e) } };
  } catch (s) {
    return { ...r, extra: { ...r.extra, "zoderrors sentry integration parse error": { message: "an exception was thrown while processing ZodError within applyZodErrorsToEvent()", error: s instanceof Error ? `${s.name}: ${s.message}
${s.stack}` : "unknown" } } };
  }
}
var Jk = ((e = {}) => {
  const t = e.limit ?? Gk;
  return { name: Kk, processEvent(r, n) {
    return Xk(t, e.saveZodIssuesAsAttachment, r, n);
  } };
}), Dx = Jk;
h();
var Nx = (e) => ({ name: "ThirdPartyErrorsFilter", setup(t) {
  t.on("beforeEnvelope", (r) => {
    ly(r, (n, s) => {
      if (s === "event") {
        const i = Array.isArray(n) ? n[1] : void 0;
        i && (Cy(i), n[1] = i);
      }
    });
  }), t.on("applyFrameMetadata", (r) => {
    if (r.type) return;
    const n = t.getOptions().stackParser;
    Oy(n, r);
  });
}, processEvent(t) {
  const r = Zk(t);
  if (r) {
    const n = e.behaviour === "drop-error-if-contains-third-party-frames" || e.behaviour === "apply-tag-if-contains-third-party-frames" ? "some" : "every";
    if (r[n]((i) => !i.some((o) => e.filterKeys.includes(o)))) {
      if (e.behaviour === "drop-error-if-contains-third-party-frames" || e.behaviour === "drop-error-if-exclusively-contains-third-party-frames") return null;
      t.tags = { ...t.tags, third_party_code: true };
    }
  }
  return t;
} });
function Zk(e) {
  const t = Zu(e);
  if (t) return t.filter((r) => !!r.filename && (r.lineno ?? r.colno) != null).map((r) => r.module_metadata ? Object.keys(r.module_metadata).filter((n) => n.startsWith(zy)).map((n) => n.slice(zy.length)) : []);
}
var zy = "_sentryBundlerPluginAppKey:";
h();
var Qk = "Console", Ux = (e = {}) => {
  const t = new Set(e.levels || No);
  return { name: Qk, setup(r) {
    vd(({ args: n, level: s }) => {
      tt() !== r || !t.has(s) || eI(s, n);
    });
  } };
};
function eI(e, t) {
  const r = { category: "console", data: { arguments: t, logger: "console" }, level: xy(e), message: Wy(t) };
  if (e === "assert") if (t[0] === false) {
    const n = t.slice(1);
    r.message = n.length > 0 ? `Assertion failed: ${Wy(n)}` : "Assertion failed", r.data.arguments = n;
  } else return;
  wy(r, { input: t, level: e });
}
function Wy(e) {
  return "util" in pe && typeof pe.util.format == "function" ? pe.util.format(...e) : rd(e, " ");
}
h(), h(), h();
var tI = 100, rI = 10, ta = "flag.evaluation.";
function Gy(e) {
  const r = Ft().getScopeData().contexts.flags, n = r ? r.values : [];
  return n.length && (e.contexts === void 0 && (e.contexts = {}), e.contexts.flags = { values: [...n] }), e;
}
function Ky(e, t, r = tI) {
  const n = Ft().getScopeData().contexts;
  n.flags || (n.flags = { values: [] });
  const s = n.flags.values;
  nI(s, e, t, r);
}
function nI(e, t, r, n) {
  if (typeof r != "boolean") return;
  if (e.length > n) {
    V && ne.error(`[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=${n}`);
    return;
  }
  const s = e.findIndex((i) => i.flag === t);
  s !== -1 && e.splice(s, 1), e.length === n && e.shift(), e.push({ flag: t, result: r });
}
function qy(e, t, r = rI) {
  if (typeof t != "boolean") return;
  const n = ny();
  if (!n) return;
  const s = rt(n).data;
  if (`${ta}${e}` in s) {
    n.setAttribute(`${ta}${e}`, t);
    return;
  }
  Object.keys(s).filter((o) => o.startsWith(ta)).length < r && n.setAttribute(`${ta}${e}`, t);
}
var $x = () => ({ name: "FeatureFlags", processEvent(e, t, r) {
  return Gy(e);
}, addFeatureFlag(e, t) {
  Ky(e, t), qy(e, t);
} });
h();
var Fx = ({ growthbookClass: e }) => ({ name: "GrowthBook", setupOnce() {
  const t = e.prototype;
  typeof t.isOn == "function" && ed(t, "isOn", jy), typeof t.getFeatureValue == "function" && ed(t, "getFeatureValue", jy);
}, processEvent(t, r, n) {
  return Gy(t);
} });
function jy(e) {
  return function(...t) {
    const r = t[0], n = e.apply(this, t);
    return typeof r == "string" && typeof n == "boolean" && (Ky(r, n), qy(r, n)), n;
  };
}
h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h();
function Vy(e, t, r) {
  return "util" in pe && typeof pe.util.format == "function" ? pe.util.format(...e) : sI(e, t, r);
}
function sI(e, t, r) {
  return e.map((n) => sR(n) ? String(n) : JSON.stringify(ay(n, t, r))).join(" ");
}
function iI(e) {
  return /%[sdifocO]/.test(e);
}
function oI(e, t) {
  const r = {}, n = new Array(t.length).fill("{}").join(" ");
  return r["sentry.message.template"] = `${e} ${n}`, t.forEach((s, i) => {
    r[`sentry.message.parameter.${i}`] = s;
  }), r;
}
var aI = "ConsoleLogs", Yy = { [Pn]: "auto.log.console" }, cI = ((e = {}) => {
  const t = e.levels || No;
  return { name: aI, setup(r) {
    const { enableLogs: n, normalizeDepth: s = 3, normalizeMaxBreadth: i = 1e3 } = r.getOptions();
    if (!n) {
      V && ne.warn("`enableLogs` is not enabled, ConsoleLogs integration disabled");
      return;
    }
    vd(({ args: o, level: a }) => {
      if (tt() !== r || !t.includes(a)) return;
      const c = o[0], l = o.slice(1);
      if (a === "assert") {
        if (!c) {
          const p = l.length > 0 ? `Assertion failed: ${Vy(l, s, i)}` : "Assertion failed";
          Sy({ level: "error", message: p, attributes: Yy });
        }
        return;
      }
      const u = a === "log", d = o.length > 1 && typeof o[0] == "string" && !iI(o[0]), f = { ...Yy, ...d ? oI(c, l) : {} };
      Sy({ level: u ? "info" : a, message: Vy(o, s, i), severityNumber: u ? 10 : void 0, attributes: f });
    });
  } };
}), Hx = cI;
h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h();
var lI = ["response.output_item.added", "response.function_call_arguments.delta", "response.function_call_arguments.done", "response.output_item.done"], Bx = ["response.created", "response.in_progress", "response.failed", "response.completed", "response.incomplete", "response.queued", "response.output_text.delta", ...lI];
h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h();
var yd;
function Sd(e) {
  return { traceId: e.traceId, spanId: e.spanId, parentSpanId: e.parentSpanId, name: e.name, startTime: e.startTime, endTime: e.endTime, attributes: e.attributes, error: e.status?.code === 2 };
}
function uI(e) {
  try {
    yd?.spanStarted(Sd(e));
  } catch {
  }
}
function dI(e) {
  try {
    yd?.spanEnded(Sd(e));
  } catch {
  }
}
function Xy(e) {
  try {
    yd?.spanUpdated(Sd(e));
  } catch {
  }
}
h();
var hI = 1e3, fI = 20, pI = class {
  constructor() {
    this._buffer = [], this._droppedByName = /* @__PURE__ */ new Map(), this._dropped = 0, this._totalSeen = 0, this._maxBuffer = hI, this._random = Math.random;
  }
  configure(e) {
    e.maxBuffer !== void 0 && (this._maxBuffer = e.maxBuffer), e.random !== void 0 && (this._random = e.random);
  }
  collect(e) {
    if (!e || !er().enabled) return;
    const t = "traceId" in e && typeof e.traceId == "string" && !("createChild" in e) ? e : this._convert(e);
    if (this._totalSeen++, this._buffer.length < this._maxBuffer) {
      this._buffer.push(t);
      return;
    }
    const r = Math.floor(this._random() * this._totalSeen), n = r < this._maxBuffer ? this._replaceAt(r, t) : t;
    this._incrementCount(this._droppedByName, n.name), this._dropped++;
  }
  takeAll() {
    const e = this._buffer, t = this._dropped, r = /* @__PURE__ */ new Map();
    for (const i of e) this._incrementCount(r, i.name);
    const n = this._topCounts(r), s = this._topCounts(this._droppedByName);
    return this._buffer = [], this._droppedByName.clear(), this._dropped = 0, this._totalSeen = 0, { spans: e, dropped: t, topEmittedNames: n, topDroppedNames: s, totalEmittedAttributeCount: e.reduce((i, o) => i + Object.keys(o.attributes).length, 0) };
  }
  _replaceAt(e, t) {
    const r = this._buffer[e];
    return this._buffer[e] = t, r;
  }
  _convert(e) {
    return { traceId: e.traceId, spanId: e.spanId, parentSpanId: e.parentSpanId, name: e.name, startTime: e.startTime, endTime: e.endTime ?? Date.now(), attributes: e.attributes, error: e.status?.code === 2, traceState: e.traceState, flags: e.traceFlags, kind: e.kind, statusCode: e.status?.code, statusMessage: e.status?.message, links: e.links.map((t) => ({ traceId: t.traceId, spanId: t.spanId, attributes: t.attributes, traceState: t.traceState, flags: t.flags })) };
  }
  _incrementCount(e, t) {
    e.set(t, (e.get(t) ?? 0) + 1);
  }
  _topCounts(e, t = fI) {
    return [...e.entries()].sort((r, n) => n[1] - r[1] || r[0].localeCompare(n[0])).slice(0, t).map(([r, n]) => ({ name: r, count: n }));
  }
}, bd = new pI();
h(), h();
var gI;
function _I() {
  return gI;
}
var wd = ((e) => (e[e.UNSPECIFIED = 0] = "UNSPECIFIED", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR", e))(wd || {}), Ed, Ad = new Array(256);
for (let e = 0; e < 256; e++) Ad[e] = (e < 16 ? "0" : "") + e.toString(16);
var Rd = 4096, Td = Rd * 2, Jy = "", qs = Td;
function mI() {
  const e = new Uint8Array(Rd);
  crypto.getRandomValues(e);
  let t = "";
  for (let r = 0; r < Rd; r++) t += Ad[e[r]];
  Jy = t, qs = 0;
}
function Zy(e) {
  if (e > Td) {
    const r = new Uint8Array(e / 2);
    crypto.getRandomValues(r);
    let n = "";
    for (let s = 0; s < r.length; s++) n += Ad[r[s]];
    return n;
  }
  qs + e > Td && mI();
  const t = Jy.slice(qs, qs + e);
  return qs += e, t;
}
var vI = class O2 {
  constructor(t) {
    if (this._attributes = {}, this._inheritableAttributes = {}, this._kind = 1, this._links = [], this._traceFlags = 1, this._ended = false, this._name = t.name, this._traceId = t.traceId || this._generateTraceId(), this._spanId = t.spanId || this._generateSpanId(), this._parentSpanId = t.parentSpanId, this._kind = t.kind || 1, this._startTime = t.startTime || Date.now(), this._traceFlags = t.traceFlags || 1, this._performanceTraceName = `span/${this._name}/${this._traceId}/${this._spanId}`, t.inheritableAttributes) {
      this._inheritableAttributes = { ...t.inheritableAttributes };
      for (const [r, n] of Object.entries(this._inheritableAttributes)) this._attributes[r] = n;
    }
    try {
      Ed?.mark(this._performanceTraceName, "start");
    } catch {
    }
    uI(this);
  }
  spanContext() {
    return { traceId: this._traceId, spanId: this._spanId, traceFlags: this._traceFlags, traceState: this._traceState, isRemote: false };
  }
  end(t) {
    if (!this._ended) {
      this._endTime = t || Date.now(), this._ended = true;
      try {
        this._attachOverlappingSleepSummary();
      } catch {
      }
      try {
        Ed?.mark(this._performanceTraceName, "end"), Ed?.measure(this._performanceTraceName);
      } catch {
      }
      dI(this);
    }
  }
  _attachOverlappingSleepSummary() {
    const t = this._endTime;
    if (t === void 0) return;
    const r = _I();
    if (r === void 0) return;
    const n = r.getEventsInRange(this._startTime, t);
    if (n.length === 0) return;
    let s = 0;
    const i = /* @__PURE__ */ new Set();
    for (const c of n) {
      const l = Math.max(this._startTime, c.suspendTime), u = Math.min(t, c.resumeTime);
      s += Math.max(0, u - l), i.add(c.source);
    }
    const o = Math.max(0, t - this._startTime), a = Math.max(0, o - s);
    this._attributes["cursor.os.suspended"] = "true", this._attributes["cursor.os.suspend_count"] = String(n.length), this._attributes["cursor.os.suspended_duration_ms"] = String(s), this._attributes["cursor.os.active_duration_ms"] = String(a), this._attributes["cursor.os.sleep_sources"] = [...i].sort().join(",");
  }
  setAttribute(t, r) {
    return r === void 0 ? delete this._attributes[t] : this._attributes[t] = String(r), Xy(this), this;
  }
  setAttributes(t) {
    for (const [r, n] of Object.entries(t)) this.setAttribute(r, n);
    return this;
  }
  setInheritableAttribute(t, r) {
    const n = String(r);
    return this._attributes[t] = n, this._inheritableAttributes[t] = n, Xy(this), this;
  }
  setStatus(t) {
    return this._status = t, this;
  }
  updateName(t) {
    return this._name = t, this;
  }
  isRecording() {
    return !this._ended;
  }
  addLink(t) {
    return this._links.push(t), this;
  }
  createChild(t, r) {
    return new O2({ name: t, traceId: this._traceId, parentSpanId: this._spanId, kind: r || 1, inheritableAttributes: this._inheritableAttributes });
  }
  get name() {
    return this._name;
  }
  get traceId() {
    return this._traceId;
  }
  get spanId() {
    return this._spanId;
  }
  get parentSpanId() {
    return this._parentSpanId;
  }
  get startTime() {
    return this._startTime;
  }
  get endTime() {
    return this._endTime;
  }
  get attributes() {
    return { ...this._attributes };
  }
  get status() {
    return this._status;
  }
  get kind() {
    return this._kind;
  }
  get links() {
    return [...this._links];
  }
  get traceState() {
    return this._traceState;
  }
  get traceFlags() {
    return this._traceFlags;
  }
  get ended() {
    return this._ended;
  }
  _generateTraceId() {
    return Zy(32);
  }
  _generateSpanId() {
    return Zy(16);
  }
  addEvent(t) {
    return this;
  }
  addLinks(t) {
    return this;
  }
  recordException(t, r) {
  }
};
function kd(e, t) {
  return new vI({ name: e, kind: t });
}
function Id(e, t, r) {
  return e.createChild(t, r);
}
h(), h(), h(), h();
var Qy, e4;
typeof Symbol.dispose != "symbol" && Object.defineProperty(Symbol, "dispose", { value: /* @__PURE__ */ Symbol("Symbol.dispose") }), typeof Symbol.asyncDispose != "symbol" && Object.defineProperty(Symbol, "asyncDispose", { value: /* @__PURE__ */ Symbol("Symbol.asyncDispose") });
function t4() {
  return !er().enabled;
}
function r4(e, t, r) {
  if (e.setAttribute("cursor.eventType", t), !!r) for (const [n, s] of Object.entries(r)) e.setAttribute(n, s === void 0 ? "undefined" : s);
}
function yI(e, t) {
  let r;
  return t ? r = Id(t, e) : r = kd(e), new wI(r);
}
var n4 = "__tracingCtx", SI = class {
  constructor() {
    this[Qy] = true;
  }
  spanContext() {
  }
  setAttribute(e, t) {
  }
  setInheritableAttribute(e, t) {
  }
  setError(e) {
  }
  end() {
  }
  startSpan(e) {
    return bI;
  }
  reportEvent(e, t) {
  }
  reportException(e, t) {
  }
  [(Qy = n4, Symbol.dispose)]() {
  }
}, bI = new SI(), wI = class {
  constructor(e, t = false) {
    this[e4] = true, this._ended = false, this._doNotReport = false, this._span = e, this._doNotReport = t;
  }
  end() {
    this._ended || (this._span?.end(), this._doNotReport || bd.collect(this._span), this._ended = true);
  }
  spanContext() {
    const e = this._span?.spanContext();
    if (e) return { traceId: e.traceId, spanId: e.spanId, traceFlags: e.traceFlags };
  }
  setAttribute(e, t) {
    this._span?.setAttribute(e, t);
  }
  setInheritableAttribute(e, t) {
    this._span?.setInheritableAttribute(e, t);
  }
  setError(e) {
    if (!this._span) return;
    let t = "internal_error";
    e instanceof Error ? (t = e.message || t, this._span.setAttribute("error.stack", e.stack ?? ""), this._span.setAttribute("error.type", e.name ?? e.constructor?.name ?? "Error")) : typeof e == "string" ? t = e : e != null && (t = String(e)), this._span.setAttribute("error.message", t), this._span.setStatus({ code: wd.ERROR, message: t });
  }
  startSpan(e) {
    return yI(e, this._span);
  }
  reportEvent(e, t) {
    if (t4()) return;
    const r = this._span ? Id(this._span, e) : kd(e);
    r4(r, "event", t), r.end(), bd.collect(r);
  }
  reportException(e, t) {
    if (t4()) return;
    const r = this._span ? Id(this._span, "exception") : kd("exception");
    let n = "internal_error", s = "", i = "Error";
    e instanceof Error ? (n = e.message || n, s = e.stack ?? "", i = e.name ?? e.constructor?.name ?? i) : (n = String(e), i = "StringError"), r4(r, "error", t), r.setAttribute("error.message", n), r.setAttribute("error.stack", s), r.setAttribute("error.type", i), r.setStatus({ code: wd.ERROR, message: n }), r.end(), bd.collect(r);
  }
  [(e4 = n4, Symbol.dispose)]() {
    this.end();
  }
};
function s4(e, t) {
  e0(e) || gn.isErrorNoTelemetry(e) || Ks(e, t);
}
var EI = class {
  constructor(e) {
    this.baseLogger = e, this.onDidChangeLogLevel = this.baseLogger.onDidChangeLogLevel;
  }
  get isDisposed() {
    return this.baseLogger.isDisposed;
  }
  getLevel() {
    return this.baseLogger.getLevel();
  }
  setLevel(e) {
    this.baseLogger.setLevel(e);
  }
  trace(e, ...t) {
    this.baseLogger.trace(e, ...t);
  }
  debug(e, ...t) {
    this.baseLogger.debug(e, ...t);
  }
  info(e, ...t) {
    this.baseLogger.info(e, ...t);
  }
  warn(e, ...t) {
    this.baseLogger.warn(e, ...t);
  }
  error(e, ...t) {
    if (this.baseLogger.error(e, ...t), !(er().enabled && Math.random() >= er().loggerSampleRate)) {
      if (e instanceof Error) {
        s4(e);
        return;
      }
      for (const r of t) if (r instanceof Error) {
        s4(r);
        return;
      }
    }
  }
  flush() {
    this.baseLogger.flush();
  }
  dispose() {
    this.baseLogger.dispose();
  }
};
h();
var AI = "mcpOAuthStore", zx = or("mcpOAuthStoreMainService");
h();
var ra = { exit: "vscode:electron-main->mcp-process=exit", ipcReady: "vscode:mcp-process->electron-main=ipc-ready", initDone: "vscode:mcp-process->electron-main=init-done", initFailed: "vscode:mcp-process->electron-main=init-failed" }, RI = "vscode:mcp-process->electron-main=startup-diagnostic", Xe = { entrypointLoaded: "entrypoint_loaded", configWaitStarted: "config_wait_started", configReceived: "config_received", mainEntered: "main_entered", beforeIpcReady: "before_ipc_ready", afterIpcReady: "after_ipc_ready", initServicesStart: "init_services_start", initServicesEnd: "init_services_end", initChannelsStart: "init_channels_start", initChannelsEnd: "init_channels_end", beforeInitDone: "before_init_done", afterInitDone: "after_init_done", initFailed: "init_failed" }, Wx = new Set(Object.values(Xe)), TI = { request: "vscode:createMcpProcessRawConnection", response: "vscode:createMcpProcessRawConnectionResult" }, bt = { diagnostics: "mcp.diagnostics", servers: "mcp.servers", lifecycle: "mcp.lifecycle", tools: "mcp.tools", snapshots: "mcp.snapshots", auth: "mcp.auth", elicitation: "mcp.elicitation", commandBridge: "mcpProcessCommandBridge", structuredLogs: "mcp.structuredLogs", experiments: "mcp.experiments", networkControls: "mcp.networkControls", networkResume: "mcp.networkResume", proxy: "mcp.proxy" }, Gx = 600 * 1e3;
h();
var Je, Pd = globalThis.vscode;
if (typeof Pd < "u" && typeof Pd.context < "u") {
  const e = Pd.context.configuration();
  if (e) Je = e.product;
  else throw new Error("Sandbox: unable to resolve product configuration from preload script.");
} else if (globalThis._VSCODE_PRODUCT_JSON && globalThis._VSCODE_PACKAGE_JSON) {
  if (Je = globalThis._VSCODE_PRODUCT_JSON, sr.VSCODE_DEV, sr.VSCODE_DEV_ONBOARDING && Object.assign(Je, { nameShort: `${Je.nameShort} Onboarding`, nameLong: `${Je.nameLong} Onboarding`, dataFolderName: `${Je.dataFolderName}-onboarding`, serverDataFolderName: Je.serverDataFolderName ? `${Je.serverDataFolderName}-onboarding` : void 0 }), !Je.version) {
    const e = globalThis._VSCODE_PACKAGE_JSON;
    Object.assign(Je, { version: e.version });
  }
} else Je = {}, Object.keys(Je).length === 0 && Object.assign(Je, { version: "1.94.0-dev", nameShort: "Cursor Dev", nameLong: "Cursor Dev", applicationName: "cursor", dataFolderName: ".cursor", urlProtocol: "cursor", reportIssueUrl: "https://github.com/getcursor/cursor/issues/new", licenseName: "MIT", licenseUrl: "https://github.com/getcursor/cursor/", serverLicenseUrl: "https://github.com/getcursor/cursor/" });
var na = Je;
h();
var kI = or("productService");
h();
var II = or("environmentService"), i4 = II;
h();
import { homedir as PI, tmpdir as OI } from "os";
h(), h();
var CI = 60, LI = CI * 60, Od = LI * 24, qx = Od * 7, jx = Od * 30, Vx = Od * 365;
function xI(e) {
  return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0") + "T" + String(e.getHours()).padStart(2, "0") + ":" + String(e.getMinutes()).padStart(2, "0") + ":" + String(e.getSeconds()).padStart(2, "0") + "." + (e.getMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
}
var o4 = /^([^.]+\..+)[:=](.+)$/, ae = class {
  constructor(e, t, r) {
    this._args = e, this.paths = t, this.productService = r;
  }
  get appRoot() {
    return U0(J0.asFileUri("").fsPath);
  }
  get userHome() {
    return re.file(this.paths.homeDir);
  }
  get userDataPath() {
    return this.paths.userDataDir;
  }
  get appSettingsHome() {
    return re.file(yt(this.userDataPath, "User"));
  }
  get tmpDir() {
    return re.file(this.paths.tmpDir);
  }
  get cacheHome() {
    return re.file(this.userDataPath);
  }
  get stateResource() {
    return ut(this.appSettingsHome, "globalStorage", "storage.json");
  }
  get userRoamingDataHome() {
    return this.appSettingsHome.with({ scheme: Ie.vscodeUserData });
  }
  get userDataSyncHome() {
    return ut(this.appSettingsHome, "sync");
  }
  get logsHome() {
    if (!this.args.logsPath) {
      const e = xI(/* @__PURE__ */ new Date()).replace(/-|:|\.\d+Z$/g, "");
      this.args.logsPath = yt(this.userDataPath, "logs", e);
    }
    return re.file(this.args.logsPath);
  }
  get sync() {
    return this.args.sync;
  }
  get machineSettingsResource() {
    return ut(re.file(yt(this.userDataPath, "Machine")), "settings.json");
  }
  get workspaceStorageHome() {
    return ut(this.appSettingsHome, "workspaceStorage");
  }
  get localHistoryHome() {
    return ut(this.appSettingsHome, "History");
  }
  get keyboardLayoutResource() {
    return ut(this.userRoamingDataHome, "keyboardLayout.json");
  }
  get argvResource() {
    const e = sr.VSCODE_PORTABLE;
    return e ? re.file(yt(e, "argv.json")) : ut(this.userHome, this.productService.dataFolderName, "argv.json");
  }
  get isExtensionDevelopment() {
    return !!this.args.extensionDevelopmentPath;
  }
  get untitledWorkspacesHome() {
    return re.file(yt(this.userDataPath, "Workspaces"));
  }
  get builtinExtensionsPath() {
    const e = this.args["builtin-extensions-dir"];
    return e ? Ro(e) : Ao(yt(J0.asFileUri("").fsPath, "..", "extensions"));
  }
  get extensionsDownloadLocation() {
    const e = this.args["extensions-download-dir"];
    return e ? re.file(Ro(e)) : re.file(yt(this.userDataPath, "CachedExtensionVSIXs"));
  }
  get extensionsPath() {
    const e = this.args["extensions-dir"];
    if (e) return Ro(e);
    const t = sr.VSCODE_EXTENSIONS;
    if (t) return t;
    const r = sr.VSCODE_PORTABLE;
    return r ? yt(r, "extensions") : ut(this.userHome, this.productService.dataFolderName, "extensions").fsPath;
  }
  get extensionDevelopmentLocationURI() {
    const e = this.args.extensionDevelopmentPath;
    if (Array.isArray(e)) return e.map((t) => /^[^:/?#]+?:\/\//.test(t) ? re.parse(t) : re.file(Ao(t)));
  }
  get extensionDevelopmentKind() {
    return this.args.extensionDevelopmentKind?.map((e) => e === "ui" || e === "workspace" || e === "web" ? e : "workspace");
  }
  get extensionTestsLocationURI() {
    const e = this.args.extensionTestsPath;
    if (e) return /^[^:/?#]+?:\/\//.test(e) ? re.parse(e) : re.file(Ao(e));
  }
  get disableExtensions() {
    if (this.args["disable-extensions"]) return true;
    const e = this.args["disable-extension"];
    if (e) {
      if (typeof e == "string") return [e];
      if (Array.isArray(e) && e.length > 0) return e;
    }
    return false;
  }
  get debugExtensionHost() {
    return MI(this.args, this.isBuilt);
  }
  get debugRenderer() {
    return !!this.args.debugRenderer;
  }
  get isBuilt() {
    return !sr.VSCODE_DEV;
  }
  get verbose() {
    return !!this.args.verbose;
  }
  get logLevel() {
    return this.args.log?.find((e) => !o4.test(e));
  }
  get extensionLogLevel() {
    const e = [];
    for (const t of this.args.log || []) {
      const r = o4.exec(t);
      r && r[1] && r[2] && e.push([r[1], r[2]]);
    }
    return e.length ? e : void 0;
  }
  get serviceMachineIdResource() {
    return ut(re.file(this.userDataPath), "machineid");
  }
  get crashReporterId() {
    return this.args["crash-reporter-id"];
  }
  get crashReporterDirectory() {
    return this.args["crash-reporter-directory"];
  }
  get disableTelemetry() {
    return !!this.args["disable-telemetry"];
  }
  get disableWorkspaceTrust() {
    return !!this.args["disable-workspace-trust"];
  }
  get useInMemorySecretStorage() {
    return !!this.args["use-inmemory-secretstorage"];
  }
  get policyFile() {
    if (this.args["__enable-file-policy"] || bu) {
      const e = sr.VSCODE_PORTABLE;
      return e ? re.file(yt(e, "policy.json")) : ut(this.userHome, this.productService.dataFolderName, "policy.json");
    }
  }
  get continueOn() {
    return this.args.continueOn;
  }
  set continueOn(e) {
    this.args.continueOn = e;
  }
  get args() {
    return this._args;
  }
};
X([oe], ae.prototype, "appRoot", null), X([oe], ae.prototype, "userHome", null), X([oe], ae.prototype, "userDataPath", null), X([oe], ae.prototype, "appSettingsHome", null), X([oe], ae.prototype, "tmpDir", null), X([oe], ae.prototype, "cacheHome", null), X([oe], ae.prototype, "stateResource", null), X([oe], ae.prototype, "userRoamingDataHome", null), X([oe], ae.prototype, "userDataSyncHome", null), X([oe], ae.prototype, "sync", null), X([oe], ae.prototype, "machineSettingsResource", null), X([oe], ae.prototype, "workspaceStorageHome", null), X([oe], ae.prototype, "localHistoryHome", null), X([oe], ae.prototype, "keyboardLayoutResource", null), X([oe], ae.prototype, "argvResource", null), X([oe], ae.prototype, "isExtensionDevelopment", null), X([oe], ae.prototype, "untitledWorkspacesHome", null), X([oe], ae.prototype, "builtinExtensionsPath", null), X([oe], ae.prototype, "extensionsPath", null), X([oe], ae.prototype, "extensionDevelopmentLocationURI", null), X([oe], ae.prototype, "extensionDevelopmentKind", null), X([oe], ae.prototype, "extensionTestsLocationURI", null), X([oe], ae.prototype, "debugExtensionHost", null), X([oe], ae.prototype, "logLevel", null), X([oe], ae.prototype, "extensionLogLevel", null), X([oe], ae.prototype, "serviceMachineIdResource", null), X([oe], ae.prototype, "disableTelemetry", null), X([oe], ae.prototype, "disableWorkspaceTrust", null), X([oe], ae.prototype, "useInMemorySecretStorage", null), X([oe], ae.prototype, "policyFile", null);
function MI(e, t) {
  return DI(e["inspect-extensions"], e["inspect-brk-extensions"], 5870, t, e.debugId, e.extensionEnvironment);
}
function DI(e, t, r, n, s, i) {
  const o = t || e, a = o !== void 0 && o !== "" ? Number(o) : NaN, c = Number.isNaN(a) ? n ? null : r : a, l = c !== null ? !!t : false;
  let u;
  if (i) try {
    u = JSON.parse(i);
  } catch {
  }
  return { port: c, break: l, debugId: s, env: u };
}
h();
import * as a4 from "os";
import * as cr from "path";
var NI = process.env.VSCODE_CWD || process.cwd();
function UI(e, t) {
  const r = $I(e, t), n = [r];
  return cr.isAbsolute(r) || n.unshift(NI), cr.resolve(...n);
}
function $I(e, t) {
  process.env.VSCODE_DEV && (t = "code-oss-dev");
  const r = process.env.VSCODE_PORTABLE;
  if (r) return cr.join(r, "user-data");
  let n = process.env.VSCODE_APPDATA;
  if (n) return cr.join(n, t);
  const s = e["user-data-dir"];
  if (s) return s;
  switch (process.platform) {
    case "win32":
      if (n = process.env.APPDATA, !n) {
        const i = process.env.USERPROFILE;
        if (typeof i != "string") throw new Error("Windows: Unexpected undefined %USERPROFILE% environment variable");
        n = cr.join(i, "AppData", "Roaming");
      }
      break;
    case "darwin":
      n = cr.join(a4.homedir(), "Library", "Application Support");
      break;
    case "linux":
      n = process.env.XDG_CONFIG_HOME || cr.join(a4.homedir(), ".config");
      break;
    default:
      throw new Error("Platform not supported");
  }
  return cr.join(n, t);
}
var FI = class extends ae {
  constructor(e, t) {
    super(e, { homeDir: PI(), tmpDir: OI(), userDataDir: UI(e, t.nameShort) }, t);
  }
};
h(), h(), h(), Qe(), h(), Ha(), Qe(), df(), hf(), h(), Qe(), Ff(), Wt(), Ha(), Xa(), Qa(), Pg(), Lg(), xg(), Qe(), h(), Qe(), h(), Sl(), nn(), Jg(), e_(), ot(), Al(), h_(), f_(), E_(), un(), $r(), xl(), dn(), gs(), h();
function HI(e, t) {
  t !== void 0 && t.length > 0 && e.searchParams.set("scope", t.join(" "));
}
h(), h();
var BI = /\$\{[^}]*\}/, zI = "This plugin's OAuth client is not configured. Set Client ID and Client Secret in the plugin settings.";
function c4(e) {
  if (e === void 0) return;
  const t = e.trim();
  if (t.length !== 0) return BI.test(t) ? t : void 0;
}
function l4(e) {
  if (c4(e) !== void 0) return;
  const t = e?.trim();
  return t && t.length > 0 ? t : void 0;
}
function WI(e) {
  return c4(e) !== void 0;
}
h(), Be();
var GI = 300 * 1e3, u4 = /* @__PURE__ */ new Map();
async function js(e, t = fetch) {
  if (ka(e) === void 0) return;
  const r = new URL(e), n = `${r.origin}/.well-known/oauth-protected-resource${r.pathname.replace(/\/+$/, "")}`, s = u4.get(n);
  if (s !== void 0 && s.expiresAtMs > Date.now()) return s.metadata;
  let i;
  try {
    const o = await t(n);
    if (!o.ok) return;
    i = lS(await o.json());
  } catch {
    return;
  }
  return u4.set(n, { metadata: i, expiresAtMs: Date.now() + GI }), i;
}
async function sa(e) {
  const t = await js(e.serverUrl, e.fetchImpl);
  return Wh({ loopbackIpv4: t?.loopbackIpv4 === true || mS(e.serverUrl, e.ipv4Hosts), redirectUrl: e.redirectUrl });
}
function KI(e, t) {
  return e === void 0 || ka(e) === void 0 ? Bh : async (r, n) => {
    if ((await js(e, t))?.omitResourceIndicator !== true) return Bh(r, n);
  };
}
h(), hm(), h(), Qe(), cn(), fm(), pm(), h(), Ka(), Qe(), h();
function Cd(e) {
  return O6(We.fromString(e, { dontUseNodeBuffer: true }), false, true);
}
function qI(e) {
  return /^\[profile:[A-Za-z0-9_-]+\] /.test(e);
}
function Ld({ key: e, profileId: t, isDefaultProfile: r }) {
  return !t || r ? e : `[profile:${Cd(t)}] ${e}`;
}
function jI({ key: e, profileId: t, isDefaultProfile: r }) {
  if (!t || r) return e;
  const s = `[profile:${Cd(t)}] `;
  return e.startsWith(s) ? e.slice(s.length) : e;
}
function xd({ profileId: e, isDefaultProfile: t }) {
  return e && !t ? `${Cd(e)}_` : "";
}
function VI(e) {
  return /_[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e);
}
var YI = /* @__PURE__ */ new Set([te.CODE_VERIFIER, te.SERVER_URL, te.TOKENS, te.CLIENT_INFORMATION, te.OAUTH_RETENTION, te.UPDATED_AT, te.GRANT_HOLD, "mcp_tokens_canonical_migration_complete", "mcp_client_information_canonical_migration_complete"]);
function d4(e) {
  return e === "authenticate";
}
var Md = class extends Ce {
  constructor(e, t, r, n) {
    super(), this.connectionManager = t, this.mcpOAuthStore = r, this.logService = n, this.ensureConnectedPromises = /* @__PURE__ */ new Map(), this.reloadPromises = /* @__PURE__ */ new Map(), this.pendingReloads = /* @__PURE__ */ new Map(), this.lastNetworkResumeReconnectAtMsByIdentifier = /* @__PURE__ */ new Map(), this.lastNonRetryableWakeReconnectAtMsByIdentifier = /* @__PURE__ */ new Map(), this._onDidChangeStatus = this._register(new j()), this.onDidChangeStatus = this._onDidChangeStatus.event, this._onDidStopServer = this._register(new j()), this.onDidStopServer = this._onDidStopServer.event, this.registry = e, this._register(this.registry.onDidChangeStatus((s) => {
      this.logService.trace(`[McpProcessServerService] status changed: ${s.identifier} → ${s.status.type}`), this._onDidChangeStatus.fire(s);
    })), this._register(this.registry.onDidStopServer((s) => {
      this.logService.trace(`[McpProcessServerService] server stopped: ${s.identifier}`), this._onDidStopServer.fire(s);
    }));
  }
  async subscribe(e, t) {
    this.logService.trace(`[McpProcessServerService] subscribe: window=${e.windowId}, workspace=${e.workspaceId}, server=${e.identifier}`), this.registry.subscribe(e, t);
    const r = this.registry.getStatus(e.identifier);
    return this.toSubscribeResult(true, r);
  }
  async unsubscribe(e) {
    this.logService.trace(`[McpProcessServerService] unsubscribe: window=${e.windowId}, workspace=${e.workspaceId}, server=${e.identifier}`), this.registry.unsubscribe(e);
  }
  async unsubscribeAllForWindow(e) {
    this.logService.trace(`[McpProcessServerService] unsubscribeAllForWindow: ${e}`), this.registry.unsubscribeAllForWindow(e);
  }
  async unsubscribeAllForWorkspace(e, t) {
    this.logService.trace(`[McpProcessServerService] unsubscribeAllForWorkspace: window=${e}, workspace=${t}`), this.registry.unsubscribeAllForWorkspace(e, t);
  }
  async ensureConnected(e, t, r) {
    this.logService.info(`[McpProcessServerService] ensureConnected: ${e.identifier} reason=${r}`), this.registry.subscribe(e, t);
    const n = this.registry.getStatus(e.identifier);
    if (n?.type === "connected" || n?.type === "degraded") return this.toSubscribeResult(true, n);
    if (n?.type === "needsAuth" || n?.type === "error" && n.isRetryable === false) return this.toSubscribeResult(true, n);
    const s = this.ensureConnectedPromises.get(e.identifier);
    if (s) return s;
    const i = this.runEnsureConnected(e.identifier);
    this.ensureConnectedPromises.set(e.identifier, i);
    try {
      return await i;
    } finally {
      this.ensureConnectedPromises.get(e.identifier) === i && this.ensureConnectedPromises.delete(e.identifier);
    }
  }
  async reload(e, t, r = "unknown") {
    for (this.logService.info(`[McpProcessServerService] reload: ${e} reason=${r}`); ; ) {
      const s = this.reloadPromises.get(e);
      if (!s) break;
      if (!d4(r)) return this.pendingReloads.set(e, { definition: t, reason: r }), s;
      this.logService.info(`[McpProcessServerService] reload: ${e} waiting for an in-flight reload before starting its own`), await s.catch(() => {
      });
    }
    d4(r) && this.connectionManager.markNextConnectArmsLoopback(e);
    const n = this.runReload(e, t);
    this.reloadPromises.set(e, n);
    try {
      return await n;
    } finally {
      this.reloadPromises.get(e) === n && this.reloadPromises.delete(e);
      const s = this.pendingReloads.get(e);
      s && (this.pendingReloads.delete(e), this.reload(e, s.definition, s.reason).catch((i) => {
        this.logService.warn(`[McpProcessServerService] pending reload failed for ${e}: ${i instanceof Error ? i.message : String(i)}`);
      }));
    }
  }
  async handleOAuthCallback(e) {
    return this.connectionManager.handleOAuthCallback(e);
  }
  async armCloudMcpOAuthLoopback(e) {
    return this.connectionManager.armCloudMcpOAuthLoopback(e);
  }
  async awaitCloudMcpOAuthCallback(e) {
    return this.connectionManager.awaitCloudMcpOAuthCallback(e);
  }
  async cancelCloudMcpOAuthLoopback(e) {
    return this.connectionManager.cancelCloudMcpOAuthLoopback(e);
  }
  async probeServers(e, t) {
    const r = e?.length ? e : this.registry.getActiveServers();
    this.logService.info(`[McpProcessServerService] probeServers: count=${r.length} reason=${t}`), await Promise.all(r.map((n) => this.connectionManager.probeConnection(n, t).catch((s) => {
      this.logService.warn(`[McpProcessServerService] probe failed for ${n}: ${s instanceof Error ? s.message : String(s)}`);
    })));
  }
  async reconnectServersInFailureState(e) {
    const t = Date.now();
    let r = 0;
    for (const n of this.registry.getActiveServers()) {
      const s = this.registry.getServer(n);
      if (!s) continue;
      const i = this.connectionManager.getConnectionState(n), o = this.connectionManager.getAuthState(n);
      if (i === void 0 || o === void 0) continue;
      const a = { identifier: n, serverInfo: this.connectionManager.getServerInfo(n, s.definition) };
      if (!El(i, o, a)) continue;
      const c = Qg(i, a), l = wl(i), u = l ? this.lastNonRetryableWakeReconnectAtMsByIdentifier.get(n) : this.lastNetworkResumeReconnectAtMsByIdentifier.get(n);
      Fg(t, u, c) || this.connectionManager.fastTrackPeriodicReconnect(n, a, e) && (l ? this.lastNonRetryableWakeReconnectAtMsByIdentifier.set(n, t) : this.lastNetworkResumeReconnectAtMsByIdentifier.set(n, t), r++);
    }
    return this.logService.info(`[McpProcessServerService] reconnectServersInFailureState: count=${r} reason=${e}`), r;
  }
  async runReload(e, t) {
    const r = this.registry.getStatus(e) !== void 0;
    if (this.registry.reload(e, t), this.registry.isOAuthScopeParked(t.oauthScopeKey ?? t.identifier)) return this.toSubscribeResult(r, this.registry.getStatus(e));
    await this.waitForConnectionSettled(e);
    const n = this.registry.getStatus(e);
    return this.toSubscribeResult(r, n);
  }
  async runEnsureConnected(e) {
    if (this.registry.isParked(e)) return this.toSubscribeResult(true, this.registry.getStatus(e));
    const t = this.registry.getStatus(e);
    return t?.type === "initializing" ? (await this.waitForConnectionSettled(e), this.toSubscribeResult(true, this.registry.getStatus(e))) : ((t?.type === "disconnected" || t?.type === "error" && t.isRetryable !== false) && (this.registry.startConnection(e), await this.waitForConnectionSettled(e)), this.toSubscribeResult(true, this.registry.getStatus(e)));
  }
  async waitForConnectionSettled(e) {
    const t = this.registry.getStatus(e);
    if (this.isConnectionSettledStatus(t)) return;
    let r;
    const n = new Promise((s) => {
      r = this.registry.onDidChangeStatus(({ identifier: i, status: o }) => {
        i === e && this.isConnectionSettledStatus(o) && s();
      });
    });
    try {
      await Promise.race([this.connectionManager.waitForConnection(e, 1e4), n]);
    } catch {
    } finally {
      r?.dispose();
    }
  }
  isConnectionSettledStatus(e) {
    return e?.type === "connected" || e?.type === "degraded" || e?.type === "needsAuth" || e?.type === "error" && e.isRetryable === false;
  }
  toSubscribeResult(e, t) {
    return { success: e, connected: t?.type === "connected", statusType: t?.type, error: t?.type === "error" ? t.error : void 0 };
  }
  async getStatus(e) {
    return this.registry.getStatus(e);
  }
  async getActiveServers() {
    return this.registry.getActiveServers();
  }
  async logoutServer(e) {
    const { identifier: t, processRegistryKey: r } = e;
    this.logService.info(`[McpProcessServerService] logoutServer: ${t} (processRegistryKey=${r ?? "none"})`), await this.clearIdentifierScopedOAuthState(e, "logout_clear_identifier");
    const n = r ?? this.registry.getServerByOAuthScopeKey(t)?.identifier ?? t;
    this.registry.stopConnection(n), this.registry.releaseOAuthScope(t);
  }
  async clearAllTokens(e) {
    const { identifier: t } = e;
    this.logService.info(`[McpProcessServerService] clearAllTokens: ${t}`), await this.clearIdentifierScopedOAuthState(e, "clear_all_tokens");
  }
  async stopAndParkServer(e) {
    const { identifier: t, processRegistryKey: r } = e;
    this.logService.info(`[McpProcessServerService] stopAndParkServer: ${t} (processRegistryKey=${r ?? "none"})`), this.registry.parkOAuthScope(t);
    const n = r !== void 0 ? this.registry.getServer(r) : void 0;
    n && (n.definition.oauthScopeKey ?? n.identifier) !== t && this.registry.stopConnection(n.identifier);
  }
  async releaseParkedServer(e) {
    this.logService.info(`[McpProcessServerService] releaseParkedServer: ${e.identifier}`), this.registry.releaseOAuthScope(e.identifier);
  }
  async clearAllTokensForProfile(e) {
    const t = KS(e), r = this.mcpOAuthStore;
    if (!r) return Hr({ identifier: t, reason: "clear_all_tokens_for_profile", clearScope: "all", level: "info", fields: { isDefaultProfile: e.isDefaultProfile ?? false, profileId: e.profileId, clearedKeysCount: 0, clearedTokenSecretsCount: 0, oauthStoreAvailable: false } }), [];
    this.logService.info(`[McpProcessServerService] clearAllTokensForProfile: ${e.profileId ?? "default"} (isDefaultProfile=${e.isDefaultProfile ?? false})`);
    const n = /* @__PURE__ */ new Set();
    let s = 0;
    for (const i of await r.getGlobalStateKeys()) {
      const o = this.getOAuthKeyInProfileScope(i, e);
      !o || !this.isProfileClearableOAuthKey(o) || (await r.updateGlobalState(i, void 0), n.add(o));
    }
    for (const i of await r.getSecretKeys()) {
      const o = this.getOAuthKeyInProfileScope(i, e);
      !o || !this.isProfileClearableOAuthKey(o) || (await r.deleteSecret(i), n.add(o), o.includes(te.TOKENS) && (s++, Hr({ identifier: jS(o), reason: "clear_all_tokens_for_profile", clearScope: wf(o), storageKey: o, fields: { profileId: e.profileId, isDefaultProfile: e.isDefaultProfile ?? false } })));
    }
    Hr({ identifier: t, reason: "clear_all_tokens_for_profile", clearScope: "all", level: "info", fields: { isDefaultProfile: e.isDefaultProfile ?? false, profileId: e.profileId, clearedKeysCount: n.size, clearedTokenSecretsCount: s, oauthStoreAvailable: true } }), await this.clearOAuthAttemptsForProfile(e);
    for (const i of this.registry.getActiveServers()) {
      const o = this.registry.getServer(i);
      o && this.isServerInProfileScope(o.definition, e) && this.registry.stopConnection(i);
    }
    return [...n];
  }
  async clearIdentifierScopedOAuthState({ identifier: e, profileId: t, isDefaultProfile: r }, n) {
    const s = this.mcpOAuthStore;
    if (!s) return;
    const i = (f) => Ld({ key: f, profileId: t, isDefaultProfile: r }), o = i(Re({ baseKey: te.SERVER_URL, identifier: e })), a = await s.getGlobalState(o), c = i(Re({ baseKey: te.TOKENS, identifier: e })), l = i(Re({ baseKey: te.CLIENT_INFORMATION, identifier: e })), u = i(Re({ baseKey: te.CODE_VERIFIER, identifier: e })), d = typeof a == "string" ? [i(_i({ baseKey: te.TOKENS, serverUrl: a })), i(_i({ baseKey: te.CLIENT_INFORMATION, serverUrl: a }))] : [];
    await Promise.all([s.deleteSecret(c), s.deleteSecret(l), s.deleteSecret(u), s.updateGlobalState(i(Re({ baseKey: te.CODE_VERIFIER, identifier: e })), void 0), s.updateGlobalState(o, void 0), s.updateGlobalState(i(Re({ baseKey: te.UPDATED_AT, identifier: e })), void 0), s.updateGlobalState(i(Re({ baseKey: te.OAUTH_RETENTION, identifier: e })), void 0), s.updateGlobalState(i(Re({ baseKey: te.GRANT_HOLD, identifier: e })), void 0), s.updateGlobalState(i(Re({ baseKey: "mcp_tokens_canonical_migration_complete", identifier: e })), true), s.updateGlobalState(i(Re({ baseKey: "mcp_client_information_canonical_migration_complete", identifier: e })), true), ...d.map((f) => s.deleteSecret(f)), this.clearOAuthAttemptsForScope({ identifier: e, profileId: t, isDefaultProfile: r })]), Hr({ identifier: e, reason: n, clearScope: "all" });
  }
  getOAuthKeyInProfileScope(e, t) {
    if (!t.profileId || t.isDefaultProfile) return qI(e) ? void 0 : e;
    const r = jI({ key: e, profileId: t.profileId, isDefaultProfile: t.isDefaultProfile });
    return r === e ? void 0 : r;
  }
  isProfileClearableOAuthKey(e) {
    const t = /^\[(?:[^\]]+|url:[^\]]+)\] (.+)$/.exec(e);
    return YI.has(t?.[1] ?? e);
  }
  isServerInProfileScope(e, t) {
    return !t.profileId || t.isDefaultProfile ? !e.profileId || e.isDefaultProfile === true : e.profileId === t.profileId && e.isDefaultProfile !== true;
  }
  async clearOAuthAttemptsForScope({ identifier: e, profileId: t, isDefaultProfile: r }) {
    const n = this.mcpOAuthStore;
    if (!n) return;
    const s = xd({ profileId: t, isDefaultProfile: r }), i = await n.listAttempts();
    await Promise.all(i.map(async (o) => {
      if (!o || typeof o != "object") return;
      const a = o;
      a.identifier !== e || typeof a.attemptId != "string" || !this.isAttemptInScope(a.attemptId, s) || await n.deleteAttempt(a.attemptId);
    }));
  }
  async clearOAuthAttemptsForProfile({ profileId: e, isDefaultProfile: t }) {
    const r = this.mcpOAuthStore;
    if (!r) return;
    const n = xd({ profileId: e, isDefaultProfile: t }), s = await r.listAttempts();
    for (const i of s) {
      if (!i || typeof i != "object") continue;
      const o = i;
      typeof o.attemptId != "string" || !this.isAttemptInScope(o.attemptId, n) || await r.deleteAttempt(o.attemptId);
    }
  }
  isAttemptInScope(e, t) {
    return t ? e.startsWith(t) : !VI(e);
  }
};
Md = X([ai(3, Ir)], Md), h();
var Dd = class extends Ce {
  constructor(e, t) {
    super(), this.registry = e, this.logService = t, this._onDidChangeConnectionState = this._register(new j()), this.onDidChangeConnectionState = this._onDidChangeConnectionState.event, this._register(this.registry.onDidChangeStatus((r) => {
      this._onDidChangeConnectionState.fire({ identifier: r.identifier, state: r.status.type });
    }));
  }
  async start(e) {
    this.logService.info(`[McpProcessLifecycle] manual start: ${e}`), this.registry.startConnection(e);
  }
  async stop(e) {
    this.logService.info(`[McpProcessLifecycle] manual stop: ${e}`), this.registry.stopConnection(e);
  }
  async restart(e) {
    this.logService.info(`[McpProcessLifecycle] manual restart: ${e}`);
    const t = this.registry.getServer(e);
    t && this.registry.reload(e, t.definition);
  }
};
Dd = X([ai(1, Ir)], Dd), h();
function XI(e) {
  return e.type;
}
function JI(e) {
  switch (e.type) {
    case "degraded":
      return e.reason;
    case "error":
      return e.error;
    case "needsAuth":
      return e.authorizationUrl;
    default:
      return;
  }
}
function ZI(e) {
  return e.type === "error" ? e.isRetryable : void 0;
}
function h4(e) {
  if (e !== void 0) try {
    return JSON.parse(e);
  } catch {
    return;
  }
}
function QI(e) {
  return e.map((t) => ({ name: t.name, description: t.description, inputSchema: h4(t.parameters), outputSchema: h4(t.outputSchema), title: t.title, annotations: t.annotations, _meta: t._meta }));
}
function eP(e) {
  return (e ?? []).map((t) => ({ uri: t.uri, name: t.name, description: t.description, mimeType: t.mimeType }));
}
function tP(e) {
  return (e ?? []).map((t) => ({ name: t.name, description: t.description, arguments: t.arguments }));
}
var rP = 10, Nd = class extends Ce {
  constructor(e, t, r) {
    super(), this.registry = e, this.connectionManager = t, this.logService = r, this.snapshotEpoch = Date.now(), this.revisionCounter = 0, this.snapshots = /* @__PURE__ */ new Map(), this.refreshPromises = /* @__PURE__ */ new Map(), this.pendingFollowUpRefreshes = /* @__PURE__ */ new Set(), this.refreshLimiter = this._register(new XA(rP)), this._onDidReceiveSnapshots = this._register(new j()), this.onDidReceiveSnapshots = this._onDidReceiveSnapshots.event, this._register(this.registry.onDidChangeStatus(({ identifier: n, status: s }) => {
      this.registry.hasSubscribers(n) && (this.publishStatusSnapshot(n, s), s.type === "connected" && this.shouldRefreshOnConnect(n) && this.refreshSnapshot(n));
    })), this._register(this.registry.onDidTouchServer(({ identifier: n, status: s }) => {
      this.registry.hasSubscribers(n) && this.publishTouchedServerSnapshot(n, s);
    })), this._register(this.registry.onDidRemoveServer(({ identifier: n }) => {
      this.snapshots.delete(n), this.refreshPromises.delete(n), this.pendingFollowUpRefreshes.delete(n);
    }));
    for (const n of this.registry.getActiveServers()) {
      const s = this.registry.getServer(n);
      s && this.registry.hasSubscribers(n) && this.publishTouchedServerSnapshot(n, s.status);
    }
  }
  async getSnapshots(e) {
    if (e === void 0) {
      const t = [];
      for (const [r, n] of this.snapshots) this.registry.hasSubscribers(r) && t.push(n);
      return t;
    }
    return e.flatMap((t) => {
      const r = this.snapshots.get(t);
      return !r || !this.registry.hasSubscribers(t) ? [] : [r];
    });
  }
  async refreshSnapshot(e) {
    const t = this.refreshPromises.get(e);
    return t ? (this.pendingFollowUpRefreshes.add(e), t) : this.startRefreshSnapshot(e);
  }
  pushSnapshots(e) {
    for (const t of e) this.storeAndEmit(t);
  }
  notifyToolsChanged(e) {
    const t = this.registry.getStatus(e);
    t?.type !== "connected" && t?.type !== "degraded" || this.refreshSnapshot(e);
  }
  shouldRefreshOnConnect(e) {
    return !this.hasPopulatedCatalogSnapshot(e);
  }
  hasPopulatedCatalogSnapshot(e) {
    const t = this.snapshots.get(e);
    return t ? t.tools.length > 0 || t.resources.length > 0 || t.prompts.length > 0 || t.instructions !== void 0 : false;
  }
  startRefreshSnapshot(e) {
    if (this._store.isDisposed) return Promise.resolve(void 0);
    const t = this.refreshLimiter.queue(() => this.doRefreshSnapshot(e)).finally(() => {
      this.refreshPromises.delete(e), !this._store.isDisposed && this.pendingFollowUpRefreshes.delete(e) && this.registry.getServer(e) && this.startRefreshSnapshot(e);
    });
    return this.refreshPromises.set(e, t), t;
  }
  async doRefreshSnapshot(e) {
    const t = this.registry.getServer(e);
    if (t) try {
      const r = await this.connectionManager.listOfferings(e), n = this.registry.getServer(e);
      if (!n || !this.registry.hasSubscribers(e)) return;
      const s = r.refreshState;
      if (s === "aborted") return this.snapshots.get(e);
      const i = this.snapshots.get(e), o = r.tools.length === 0 && (r.resources?.length ?? 0) === 0 && (r.prompts?.length ?? 0) === 0 && r.instructions === void 0;
      if (s === "transient_degraded" && o && i !== void 0) {
        const c = this.createSnapshot(e, n.status, void 0, i);
        return this.storeAndEmit(c), c;
      }
      const a = this.createSnapshot(e, n.status, r);
      return this.storeAndEmit(a), a;
    } catch (r) {
      return this.logService.warn(`[McpProcessSnapshotService] failed to refresh snapshot for ${e}:`, r), this.publishStatusSnapshot(e, t.status);
    }
  }
  publishStatusSnapshot(e, t) {
    if (!this.registry.getServer(e)) return;
    const n = this.snapshots.get(e), s = this.createSnapshot(e, t, void 0, n);
    return this.storeAndEmit(s), s;
  }
  publishTouchedServerSnapshot(e, t) {
    const r = this.snapshots.get(e);
    if (r) return this.storeAndEmit(r), r;
    const n = this.publishStatusSnapshot(e, t);
    return t.type === "connected" && this.refreshSnapshot(e), n;
  }
  createSnapshot(e, t, r, n) {
    const s = this.registry.getServer(e);
    return { serverIdentifier: e, serverName: s?.definition.name ?? n?.serverName ?? e, snapshotEpoch: this.snapshotEpoch, snapshotRevision: this.nextRevision(), status: XI(t), statusDetail: JI(t), statusRetryable: ZI(t), tools: r ? QI(r.tools) : n?.tools ?? [], resources: r ? eP(r.resources) : n?.resources ?? [], prompts: r ? tP(r.prompts) : n?.prompts ?? [], instructions: r ? r.instructions : n?.instructions };
  }
  nextRevision() {
    return this.revisionCounter += 1, this.revisionCounter;
  }
  storeAndEmit(e) {
    this.registry.hasSubscribers(e.serverIdentifier) && (this.snapshots.set(e.serverIdentifier, e), this._onDidReceiveSnapshots.fire([e]));
  }
};
Nd = X([ai(2, Ir)], Nd), h();
var Ud = class extends Ce {
  constructor(e, t) {
    super(), this.connectionManager = e, this.logService = t, this._onDidChangeTools = this._register(new j()), this.onDidChangeTools = this._onDidChangeTools.event, this.listOfferingsPromises = /* @__PURE__ */ new Map();
  }
  async callTool(e) {
    return this.logService.trace(`[McpProcessToolService] callTool: ${e.identifier}/${e.toolName}`), this.connectionManager.callTool(e.identifier, e.toolName, e.args, { toolCallId: e.toolCallId, useLeaseElicitation: e.useLeaseElicitation, correlationId: e.correlationId, callerWindowId: e.callerWindowId, callerWorkspaceId: e.callerWorkspaceId });
  }
  async listOfferings(e) {
    this.logService.trace(`[McpProcessToolService] listOfferings: ${e}`);
    const t = this.listOfferingsPromises.get(e);
    if (t) return t;
    const r = this.connectionManager.listOfferings(e);
    this.listOfferingsPromises.set(e, r);
    try {
      return await r;
    } finally {
      this.listOfferingsPromises.get(e) === r && this.listOfferingsPromises.delete(e);
    }
  }
  async listToolsRaw(e) {
    return this.logService.trace(`[McpProcessToolService] listToolsRaw: ${e}`), this.connectionManager.listToolsRaw(e);
  }
  async getInstructions(e) {
    return this.logService.trace(`[McpProcessToolService] getInstructions: ${e}`), this.connectionManager.getInstructions(e);
  }
  async getPrompt(e, t, r) {
    return this.logService.trace(`[McpProcessToolService] getPrompt: ${e}/${t}`), this.connectionManager.getPrompt(e, t, r);
  }
  async readResource(e, t) {
    return this.logService.trace(`[McpProcessToolService] readResource: ${e}/${t}`), this.connectionManager.readResource(e, t);
  }
  notifyToolsChanged(e) {
    this._onDidChangeTools.fire({ identifier: e });
  }
};
Ud = X([ai(1, Ir)], Ud), h(), h();
var nP = 3e4;
function f4(e) {
  return `${e.windowId}::${e.workspaceId}::${e.identifier}`;
}
function ia(e) {
  return e.oauthScopeKey ?? e.identifier;
}
var sP = class extends Ce {
  constructor(e = nP) {
    super(), this.graceMs = e, this.servers = /* @__PURE__ */ new Map(), this.parkedOAuthScopeKeys = /* @__PURE__ */ new Set(), this._onDidChangeStatus = this._register(new j()), this.onDidChangeStatus = this._onDidChangeStatus.event, this._onDidRequestStart = this._register(new j()), this.onDidRequestStart = this._onDidRequestStart.event, this._onDidRequestStop = this._register(new j()), this.onDidRequestStop = this._onDidRequestStop.event, this._onDidTouchServer = this._register(new j()), this.onDidTouchServer = this._onDidTouchServer.event, this._onDidStopServer = this._register(new j()), this.onDidStopServer = this._onDidStopServer.event, this._onDidRemoveServer = this._register(new j()), this.onDidRemoveServer = this._onDidRemoveServer.event;
  }
  subscribe(e, t) {
    const r = f4(e);
    let n = this.servers.get(t.identifier);
    if (n) {
      n.graceTimer !== void 0 && (clearTimeout(n.graceTimer), n.graceTimer = void 0), n.subscriptions.set(r, e), n.definition = t, this._onDidTouchServer.fire({ identifier: t.identifier, status: n.status });
      return;
    }
    const s = this.parkedOAuthScopeKeys.has(ia(t));
    n = { identifier: t.identifier, definition: t, status: s ? { type: "disconnected" } : { type: "initializing" }, subscriptions: /* @__PURE__ */ new Map([[r, e]]), graceTimer: void 0 }, this.servers.set(t.identifier, n), this._onDidChangeStatus.fire({ identifier: t.identifier, status: n.status }), s || this._onDidRequestStart.fire(t);
  }
  unsubscribe(e) {
    const t = f4(e), r = this.servers.get(e.identifier);
    r && (r.subscriptions.delete(t), r.subscriptions.size === 0 && r.graceTimer === void 0 && (r.graceTimer = setTimeout(() => {
      this.stopAndRemove(e.identifier);
    }, this.graceMs)));
  }
  unsubscribeAllForWindow(e) {
    for (const t of this.servers.values()) {
      const r = [];
      for (const [n, s] of t.subscriptions) s.windowId === e && r.push(n);
      for (const n of r) t.subscriptions.delete(n);
      t.subscriptions.size === 0 && t.graceTimer === void 0 && (t.graceTimer = setTimeout(() => {
        this.stopAndRemove(t.identifier);
      }, this.graceMs));
    }
  }
  unsubscribeAllForWorkspace(e, t) {
    for (const r of this.servers.values()) {
      const n = [];
      for (const [s, i] of r.subscriptions) i.windowId === e && i.workspaceId === t && n.push(s);
      for (const s of n) r.subscriptions.delete(s);
      r.subscriptions.size === 0 && r.graceTimer === void 0 && (r.graceTimer = setTimeout(() => {
        this.stopAndRemove(r.identifier);
      }, this.graceMs));
    }
  }
  reload(e, t) {
    const r = this.servers.get(e);
    if (r) {
      if (r.graceTimer !== void 0 && (clearTimeout(r.graceTimer), r.graceTimer = void 0), r.definition = t, this.isParked(e)) {
        this.updateStatus(e, { type: "disconnected" }), this._onDidRequestStop.fire({ identifier: e });
        return;
      }
      this.updateStatus(e, { type: "initializing" }), this._onDidRequestStop.fire({ identifier: e }), this._onDidRequestStart.fire(t);
    }
  }
  startConnection(e) {
    const t = this.servers.get(e);
    t && (t.graceTimer !== void 0 && (clearTimeout(t.graceTimer), t.graceTimer = void 0), !this.isParked(e) && (this.updateStatus(e, { type: "initializing" }), this._onDidRequestStart.fire(t.definition)));
  }
  parkOAuthScope(e) {
    this.parkedOAuthScopeKeys.add(e);
    for (const t of [...this.servers.values()]) ia(t.definition) === e && this.stopConnection(t.identifier);
  }
  releaseOAuthScope(e) {
    if (this.parkedOAuthScopeKeys.delete(e)) for (const t of [...this.servers.values()]) ia(t.definition) === e && t.subscriptions.size > 0 && this.startConnection(t.identifier);
  }
  isOAuthScopeParked(e) {
    return this.parkedOAuthScopeKeys.has(e);
  }
  isParked(e) {
    const t = this.servers.get(e);
    return t !== void 0 && this.parkedOAuthScopeKeys.has(ia(t.definition));
  }
  updateStatus(e, t) {
    const r = this.servers.get(e);
    r && (r.status = t, this._onDidChangeStatus.fire({ identifier: e, status: t }));
  }
  getStatus(e) {
    return this.servers.get(e)?.status;
  }
  getServer(e) {
    return this.servers.get(e);
  }
  getServerByOAuthScopeKey(e) {
    const t = [];
    for (const s of this.servers.values()) (s.definition.oauthScopeKey ?? s.identifier) === e && t.push(s);
    if (t.length <= 1) return t[0];
    const r = t.find((s) => s.status.type === "needsAuth");
    if (r) return r;
    const n = t.find((s) => s.graceTimer === void 0);
    return n || t[0];
  }
  getActiveServers() {
    return [...this.servers.keys()];
  }
  hasSubscribers(e) {
    const t = this.servers.get(e);
    return t !== void 0 && t.subscriptions.size > 0;
  }
  getSubscriberCount(e) {
    return this.servers.get(e)?.subscriptions.size ?? 0;
  }
  getFirstSubscriberWorkspaceId(e) {
    const t = this.servers.get(e);
    if (t) return t.subscriptions.values().next().value?.workspaceId;
  }
  getFirstSubscriber(e) {
    const t = this.servers.get(e);
    if (t) return t.subscriptions.values().next().value;
  }
  stopConnection(e) {
    const t = this.servers.get(e);
    if (t) {
      if (t.subscriptions.size === 0) {
        this.stopAndRemove(e);
        return;
      }
      t.graceTimer !== void 0 && (clearTimeout(t.graceTimer), t.graceTimer = void 0), this.updateStatus(e, { type: "disconnected" }), this._onDidRequestStop.fire({ identifier: e });
    }
  }
  stopAndRemove(e) {
    const t = this.servers.get(e);
    t && (t.graceTimer !== void 0 && (clearTimeout(t.graceTimer), t.graceTimer = void 0), this.updateStatus(e, { type: "disconnected" }), this._onDidRequestStop.fire({ identifier: e }), this._onDidStopServer.fire({ identifier: e }), this.servers.delete(e), this._onDidRemoveServer.fire({ identifier: e }));
  }
  dispose() {
    for (const e of this.servers.values()) e.graceTimer !== void 0 && (clearTimeout(e.graceTimer), e.graceTimer = void 0);
    this.servers.clear(), this.parkedOAuthScopeKeys.clear(), super.dispose();
  }
};
h(), Be(), h(), h(), Be(), Be(), Bl(), Wt(), Af(), Xa(), Qa(), h(), Be();
var $d = class extends Error {
  constructor(e) {
    super(`${e} must be authorized by the Cursor backend: its token endpoint requires client credentials held server-side. Connect this server from the cloud MCP surface (Cursor Settings, or the dashboard) instead of a local mcp.json entry.`), this.name = "McpBackendOnlyTokenExchangeError";
  }
};
function p4(e) {
  return Ia(e)?.backendOnlyTokenExchange === true;
}
function iP(e) {
  if (p4(e)) throw new $d(e);
}
async function oP(e, t) {
  iP(e);
  const r = await js(e, t);
  if (r?.backendOnlyTokenExchange === true) throw new $d(e);
  if (r === void 0 && ka(e) !== void 0) throw new Error(`Could not read ${e}'s provider metadata to determine how its tokens must be exchanged; not spending the authorization code. Retry the connection.`);
}
function aP(e) {
  if (p4(e)) return () => {
    throw new $d(e);
  };
}
h();
function cP(e) {
  return new RegExp(`(?:^|&)${e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}=([^&]*)`);
}
function g4(e) {
  return e.query.match(cP(e.key))?.[1];
}
function _4(e) {
  if (e !== void 0) try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function Vs(e) {
  return _4(g4(e));
}
function lP(e) {
  return e.startsWith("?") ? e.slice(1) : e;
}
h(), Be(), Wa();
function m4(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function v4(e) {
  if (!(!m4(e) || typeof e.workspaceId != "string")) return { workspaceId: e.workspaceId };
}
function uP(e) {
  if (!m4(e) || typeof e.id != "string") return;
  const t = v4(e.owner);
  if (!t || e.attemptId !== void 0 && typeof e.attemptId != "string") return;
  const r = e.surface === "mcp_process" || e.surface === "exthost" ? e.surface : void 0;
  return { id: e.id, owner: t, ...e.attemptId !== void 0 ? { attemptId: e.attemptId } : {}, ...r !== void 0 ? { surface: r } : {} };
}
function dP(e, t, r, n) {
  const s = { id: e, owner: t, ...r !== void 0 ? { attemptId: r } : {}, ...n?.surface !== void 0 ? { surface: n.surface } : {} };
  return vf(JSON.stringify(s));
}
function y4(e) {
  try {
    return uP(JSON.parse(zS(_S(e))));
  } catch {
    return;
  }
}
Qe(), Ka(), Wl(), gs(), h();
var oa = /* @__PURE__ */ new Map();
function hP(e, t) {
  const n = (oa.get(e) ?? Promise.resolve()).catch(() => {
  }).then(t);
  return oa.set(e, n), n.finally(() => {
    oa.get(e) === n && oa.delete(e);
  });
}
Wl();
var fP = 1e4, pP = 12e4;
function gP(e, t, r) {
  return e === "identifier" ? t : wt(r);
}
function _P(e, t, r) {
  return `mcp_oauth_refresh_lock::${gP(e, t, r)}`;
}
function Fd(e) {
  if (e !== void 0) try {
    return JSON.parse(e);
  } catch {
    return;
  }
}
function Hd(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Bd(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "string");
}
function S4(e) {
  return typeof e == "number" && Number.isFinite(e);
}
function aa(e) {
  return typeof e == "string" ? e : void 0;
}
function mP(e) {
  return typeof e == "boolean" ? e : void 0;
}
function b4() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  const e = new Uint8Array(16);
  if (globalThis.crypto?.getRandomValues) globalThis.crypto.getRandomValues(e);
  else for (let r = 0; r < e.length; r++) e[r] = Math.floor(Math.random() * 256);
  e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128;
  const t = Array.from(e, (r) => r.toString(16).padStart(2, "0")).join("");
  return `${t.slice(0, 8)}-${t.slice(8, 12)}-${t.slice(12, 16)}-${t.slice(16, 20)}-${t.slice(20)}`;
}
function w4() {
  return `${b4()}:${Date.now()}`;
}
function vP(e) {
  const t = e.lastIndexOf(":");
  return t <= 0 ? w4() : `${e.slice(0, t)}:${Date.now()}`;
}
function E4(e) {
  const t = e.lastIndexOf(":");
  if (t < 0) return 0;
  const r = parseInt(e.slice(t + 1), 10);
  return Number.isFinite(r) ? r : 0;
}
function yP(e) {
  if (!Hd(e) || !S4(e.clearedAtMs) || !S4(e.expiresAtMs)) return;
  const t = aa(e.normalizedServerUrl), r = aa(e.serverOrigin), n = aa(e.clientId), s = aa(e.authHash), i = mP(e.expiredTombstone);
  return { clearedAtMs: e.clearedAtMs, expiresAtMs: e.expiresAtMs, ...t !== void 0 ? { normalizedServerUrl: t } : {}, ...r !== void 0 ? { serverOrigin: r } : {}, ...n !== void 0 ? { clientId: n } : {}, ...s !== void 0 ? { authHash: s } : {}, ...i !== void 0 ? { expiredTombstone: i } : {} };
}
function SP(e) {
  if (!e) return;
  const t = JSON.stringify(Object.keys(e).sort().reduce((n, s) => (n[s] = e[s], n), {}));
  let r = 0;
  for (let n = 0; n < t.length; n++) {
    const s = t.charCodeAt(n);
    r = (r << 5) - r + s | 0;
  }
  return r.toString(36);
}
function bP(e) {
  if (!Hd(e) || typeof e.client_id != "string") return;
  const t = { ...e, client_id: e.client_id };
  if (!(e.client_secret !== void 0 && typeof e.client_secret != "string") && !(e.redirect_uris !== void 0 && !Bd(e.redirect_uris)) && !(e.grant_types !== void 0 && !Bd(e.grant_types)) && !(e.response_types !== void 0 && !Bd(e.response_types))) return t;
}
function wP(e) {
  if (!Hd(e) || typeof e.attemptId != "string" || typeof e.identifier != "string" || typeof e.createdAtMs != "number") return;
  const t = v4(e.owner);
  if (!t) return;
  const r = e.clientInformation !== void 0 ? bP(e.clientInformation) : void 0;
  if (!(e.clientInformation !== void 0 && r === void 0)) return { attemptId: e.attemptId, identifier: e.identifier, owner: t, createdAtMs: e.createdAtMs, ...typeof e.serverUrl == "string" ? { serverUrl: e.serverUrl } : {}, ...typeof e.transportServerUrl == "string" ? { transportServerUrl: e.transportServerUrl } : {}, ...typeof e.codeVerifier == "string" ? { codeVerifier: e.codeVerifier } : {}, ...r ? { clientInformation: r } : {}, ...typeof e.authorizationServerUrl == "string" ? { authorizationServerUrl: e.authorizationServerUrl } : {}, ...typeof e.activeIdentifier == "string" ? { activeIdentifier: e.activeIdentifier } : {} };
}
function EP(e) {
  if (!e || !("client_secret" in e)) return e;
  const { client_secret: t, ...r } = e;
  return r;
}
function A4(e) {
  try {
    const t = new URL(e);
    return { normalizedServerUrl: wt(e), serverOrigin: t.origin };
  } catch {
    return;
  }
}
function AP(e) {
  const t = A4(e.serverUrl);
  return { ...t ? { normalizedServerUrl: t.normalizedServerUrl, serverOrigin: t.serverOrigin } : {}, ...e.clientId !== void 0 ? { clientId: e.clientId } : {}, ...e.authHash !== void 0 ? { authHash: e.authHash } : {} };
}
function RP(e, t) {
  const r = AP(t);
  return e.normalizedServerUrl === r.normalizedServerUrl && e.clientId === r.clientId && e.authHash === r.authHash;
}
async function zd(e, t) {
  return wP(await e.readAttempt(t));
}
async function TP(e, t) {
  const r = await zd(e, t);
  if (!r) return;
  const [n, s] = await Promise.all([r.clientInformation?.client_secret ? void 0 : e.getSecret(Ga(t)), e.getSecret(Fr(t))]);
  return !n && !s ? r : { ...r, ...s ? { codeVerifier: s } : {}, ...n && r.clientInformation ? { clientInformation: { ...r.clientInformation, client_secret: n } } : {} };
}
async function kP(e, t, r) {
  const n = t.id;
  if (t.owner.workspaceId !== r.workspaceId) return { kind: "ignored", reason: "workspace_mismatch", identifier: n, attemptId: t.attemptId };
  if (!t.attemptId) return { kind: "ignored", reason: "legacy_callback_unsupported", identifier: n };
  const s = await TP(e, t.attemptId);
  return s ? s.identifier !== n || s.owner.workspaceId !== t.owner.workspaceId ? { kind: "ignored", reason: "attempt_identifier_mismatch", identifier: n, attemptId: t.attemptId } : s.serverUrl ? s.clientInformation ? { kind: "resolved", identifier: n, serverUrl: s.serverUrl, transportServerUrl: s.transportServerUrl ?? s.serverUrl, attemptState: s } : { kind: "error", reason: "missing_client_information", identifier: n, attemptId: t.attemptId, serverUrl: s.serverUrl, transportServerUrl: s.transportServerUrl ?? s.serverUrl } : { kind: "error", reason: "missing_server_url", identifier: n, attemptId: t.attemptId } : { kind: "ignored", reason: "stale_missing_attempt", identifier: n, attemptId: t.attemptId };
}
async function R4(e) {
  const t = await e.storage.getSecret(e.primaryKey);
  if (t !== void 0) {
    const n = await e.storage.getGlobalState(e.serverUrlKey);
    if (typeof n == "string" && wt(n) === e.normalizedServerUrl) return t;
    if (n === void 0) return await e.storage.updateGlobalState(e.migrationCompleteKey, true), await e.storage.updateGlobalState(e.serverUrlKey, e.serverUrl), t;
    Hr({ identifier: bf(e.primaryKey) ?? "unknown", reason: "canonical_server_url_mismatch", clearScope: wf(e.primaryKey), storageKey: e.primaryKey }), await e.storage.deleteSecret(e.primaryKey);
  } else if (await e.storage.getGlobalState(e.migrationCompleteKey)) return;
  const r = await e.storage.getSecret(e.canonicalKey);
  if (r === void 0) {
    await e.storage.updateGlobalState(e.migrationCompleteKey, true);
    return;
  }
  return await e.storage.setSecret(e.primaryKey, r), await e.storage.updateGlobalState(e.migrationCompleteKey, true), await e.storage.updateGlobalState(e.serverUrlKey, e.serverUrl), r;
}
function IP(e) {
  const { identifier: t, serverUrl: r, storage: n } = e, s = e.oauthHttpFetchBase !== void 0 ? Hl({ identifier: t, baseFetch: e.oauthHttpFetchBase, serverUrl: r, transportType: "oauth", processRegistryKey: e.processRegistryKey, resolvedConfigHash: e.resolvedConfigHash, clientSurface: e.oauthHttpClientSurface }) : void 0, i = e.scopeKey ?? ((w) => w), o = e.transportServerUrl ?? r, a = s, c = KI(r, a), l = aP(r), u = i(Re({ baseKey: te.TOKENS, identifier: t })), d = i(Re({ baseKey: te.CLIENT_INFORMATION, identifier: t })), f = i(Re({ baseKey: te.UPDATED_AT, identifier: t })), p = i(_i({ baseKey: te.TOKENS, serverUrl: r })), g = i(_i({ baseKey: te.CLIENT_INFORMATION, serverUrl: r })), _ = i(Re({ baseKey: te.CODE_VERIFIER, identifier: t })), y = i(Re({ baseKey: te.SERVER_URL, identifier: t })), m = i(Re({ baseKey: te.OAUTH_RETENTION, identifier: t })), A = i(Re({ baseKey: "mcp_tokens_canonical_migration_complete", identifier: t })), S = i(Re({ baseKey: "mcp_client_information_canonical_migration_complete", identifier: t })), v = wt(r), b = e.refreshLockScope ?? "identifier", I = e.refreshLockTtlMs ?? fP, O = Math.max(e.refreshLockMaxHoldMs ?? pP, I), M = i(_P(b, t, r));
  let F = e.oauthAttemptId, H, ee = false, Y, B, P, T, R, C = false;
  const L = Math.max(2e3, Math.floor(I / 3));
  let D, N, z, Q, G, Me;
  const He = e.redirectUrl;
  let E = He, x, U;
  const q = e.createRedirectHandle !== void 0, ue = q && e.armLoopbackOnRedirect === true, ht = q && e.hostedCallback === true && e.staticClientInformation === void 0, Mn = () => ht ? pi : E, Dn = async () => {
    const w = e.createRedirectHandle;
    if (!(!w || x)) {
      if (!U) {
        let $;
        U = w(() => {
          x === $ && (x = void 0, E = He);
        }).then(async (W) => {
          if (!W) return;
          $ = W, x = W, E = W.redirectUrl;
          const ie = await sa({ serverUrl: r, redirectUrl: W.redirectUrl, fetchImpl: a, ipv4Hosts: e.loopbackIpv4Hosts });
          x === W && (E = ie);
        }).finally(() => {
          U = void 0;
        });
      }
      await U;
    }
  }, lr = async (w) => {
    if (await Dn(), !x) throw new $_(E);
    const $ = w.searchParams.get("state");
    $ !== null && x.setExpectedState?.($), w.searchParams.set("redirect_uri", Mn());
  }, ye = () => Sf(r), Se = () => GS({ processRegistryKey: e.processRegistryKey ?? e.activeIdentifier, activeIdentifier: e.activeIdentifier, resolvedConfigHash: e.resolvedConfigHash }), _a = () => {
    const w = H?.client_id ?? e.attemptClientInformation?.client_id ?? e.staticClientInformation?.client_id;
    return w ? { refreshingClientId: w } : {};
  }, C2 = (w) => {
    D = w, N = { ...Ya(w) };
  }, gh = async () => Q || (G || (G = GE(e.getDynamicConfigValue).then((w) => (Q = w, w))), G), L2 = () => Q?.classifyBeforeWipe === true, x2 = () => za({ ...Se(), precededByRefreshError: !!N, ...N, lastContentionOutcome: z }), Mr = async (w, $) => {
    z = w, me({ identifier: t, event: "mcp_oauth_sibling_refresh_detected", fields: { outcome: w, ...Se(), ...ye(), ...$ } });
  }, _h = () => (F ??= `${e.attemptIdPrefix ?? ""}${e.randomId?.() ?? b4()}`, F), ma = async (w) => {
    const $ = _h(), W = await zd(n, $), ie = w.clientInformation ?? W?.clientInformation ?? e.attemptClientInformation ?? e.staticClientInformation, Ae = ie && "client_secret" in ie ? ie.client_secret : void 0;
    typeof Ae == "string" && await n.setSecret(Ga($), Ae), w.codeVerifier !== void 0 && await n.setSecret(Fr($), w.codeVerifier);
    const De = { attemptId: $, identifier: t, owner: { workspaceId: e.callbackOwnerWorkspaceId }, createdAtMs: W?.createdAtMs ?? Date.now(), serverUrl: r, transportServerUrl: o, clientInformation: EP(ie), authorizationServerUrl: w.authorizationServerUrl ?? W?.authorizationServerUrl, activeIdentifier: e.activeIdentifier ?? W?.activeIdentifier };
    await n.writeAttempt($, De);
  }, mh = async (w) => {
    const $ = w ?? F;
    $ && (await n.deleteSecret(Fr($)), await n.deleteSecret(Ga($)), await n.deleteAttempt($), F === $ && (F = void 0));
  }, M2 = async () => {
    const w = await n.getGlobalState(m);
    if (w === void 0) return;
    const $ = yP(w);
    if (!$) {
      await n.updateGlobalState(m, void 0);
      return;
    }
    return $;
  }, Nn = async () => {
    await n.updateGlobalState(m, void 0);
  }, ii = async () => (H = Fd(await R4({ storage: n, primaryKey: d, canonicalKey: g, migrationCompleteKey: S, serverUrlKey: y, serverUrl: r, normalizedServerUrl: v })) ?? e.staticClientInformation, H), Un = async () => R4({ storage: n, primaryKey: u, canonicalKey: p, migrationCompleteKey: A, serverUrlKey: y, serverUrl: r, normalizedServerUrl: v }), vh = async () => Fd(await Un()), yh = async (w) => {
    const $ = P;
    if ($) {
      P = void 0, T = void 0;
      try {
        await n.diskKVDelete?.(M, $), me({ identifier: t, event: "mcp_oauth_refresh_lease_released", fields: { reason: w, ...Se(), ...ye() } });
      } catch {
      }
    }
  }, va = () => {
    R !== void 0 && (clearInterval(R), R = void 0);
  }, Sh = async (w) => {
    va();
    const $ = P;
    if (P = void 0, T = void 0, me({ identifier: t, level: "warn", event: "mcp_oauth_refresh_lease_heartbeat_lost", fields: { ...Se(), ...w, ...ye() } }), $) try {
      await n.diskKVDelete?.(M, $);
    } catch {
    }
  }, D2 = async () => {
    const w = T !== void 0 ? Date.now() - T : void 0;
    await Sh({ reason: "max_hold_exceeded", ...w !== void 0 ? { heldMs: w } : {}, maxHoldMs: O });
  }, N2 = async () => {
    const w = n.diskKVReplaceIfEquals, $ = P;
    if (!(!$ || !w)) {
      if (T !== void 0 && Date.now() - T >= O) {
        await D2();
        return;
      }
      if (!C) {
        C = true;
        try {
          const W = vP($);
          if (!await w(M, $, W)) {
            await Sh({ reason: "renew_replace_if_equals_failed" });
            return;
          }
          P = W;
        } finally {
          C = false;
        }
      }
    }
  }, U2 = () => {
    va(), R = setInterval(() => {
      N2();
    }, L);
  }, $n = async (w) => {
    va(), ee = false, B = void 0, await yh(w);
  }, oi = async (w) => {
    if (!w) return false;
    const $ = await vh();
    return !!($?.refresh_token && $.refresh_token !== w);
  }, $2 = async (w) => await oi(Y) ? (P = w.lockValue, await yh("stale_evict_sibling_rotated"), await Mr("skipped_stale_lock_sibling_rotated", { staleLockAgeMs: w.staleLockAgeMs }), false) : (P = w.lockValue, T = Date.now(), me({ identifier: t, event: "mcp_oauth_refresh_lease_acquired", fields: { ...Se(), staleLockAgeMs: w.staleLockAgeMs, refreshLockScope: b, holdsDiskLock: true, ..._a(), ...ye() } }), true), F2 = async () => {
    const w = n.diskKVSetIfAbsent;
    if (!w) return true;
    const $ = w4(), W = n.diskKVGet, ie = n.diskKVDelete, Ae = Date.now(), De = await w(M, $);
    if (!De && W && ie) {
      const dr = await W(M);
      if (dr) {
        const Fn = E4(dr);
        if (Date.now() - Fn > I) {
          const Sa = Date.now() - Fn;
          if (await ie(M, dr), await w(M, $)) return $2({ lockValue: $, staleLockAgeMs: Sa });
        }
      }
    }
    if (De) return P = $, T = Date.now(), me({ identifier: t, event: "mcp_oauth_refresh_lease_acquired", fields: { ...Se(), refreshLockScope: b, holdsDiskLock: true, ..._a(), ...ye() } }), true;
    me({ identifier: t, event: "mcp_oauth_refresh_lease_waiting", fields: { ...Se(), refreshLockScope: b, ...ye() } });
    const ft = Date.now() + I + 2e3;
    let Ze = false, Bt;
    for (; Date.now() < ft; ) {
      await new Promise((Sa) => setTimeout(Sa, 200));
      const dr = await W?.(M);
      if (!dr) break;
      const Fn = E4(dr);
      if (Date.now() - Fn > I) {
        Ze = true, Bt = Date.now() - Fn, await ie?.(M, dr);
        break;
      }
    }
    const ur = Date.now() - Ae;
    return await oi(Y) ? (me({ identifier: t, event: "mcp_oauth_refresh_lease_wait_complete", fields: { ...Se(), refreshLockScope: b, siblingTokensRotated: true, waitDurationMs: ur, ...Ze ? { staleLockEvictedDuringWait: Ze, staleLockAgeMs: Bt } : {}, ...ye() } }), await Mr("skipped_sibling_rotated", { refreshLockScope: b, waitDurationMs: ur, ...Ze ? { staleLockEvictedDuringWait: Ze, staleLockAgeMs: Bt } : {} }), false) : await w(M, $) ? (P = $, T = Date.now(), me({ identifier: t, event: "mcp_oauth_refresh_lease_acquired", fields: { ...Se(), refreshLockScope: b, holdsDiskLock: true, acquiredAfterWaitTakeover: true, waitDurationMs: ur, ...Ze ? { staleLockEvictedDuringWait: Ze, staleLockAgeMs: Bt } : {}, ..._a(), ...ye() } }), true) : (me({ identifier: t, event: "mcp_oauth_refresh_lease_wait_complete", fields: { ...Se(), refreshLockScope: b, waitDurationMs: ur, ...Ze ? { staleLockEvictedDuringWait: Ze, staleLockAgeMs: Bt } : {}, ...ye() } }), false);
  }, ya = async (w) => {
    await $n("clear_identifier_scoped_state"), await mh(), await n.deleteSecret(d), await n.deleteSecret(u), await n.deleteSecret(_), await n.updateGlobalState(_, void 0), await n.updateGlobalState(y, void 0), await n.updateGlobalState(f, void 0), w.clearRetention && await Nn(), Hr({ identifier: t, reason: w.reason, clearScope: "all" });
  }, bh = async () => {
    if (e.skipRetentionStateReconciliation) return true;
    const w = await M2();
    return w ? Date.now() > w.expiresAtMs ? (w.expiredTombstone !== true && await n.updateGlobalState(m, { ...w, expiredTombstone: true }), await ya({ clearRetention: false, reason: "retention_expired" }), false) : RP(w, { serverUrl: r, clientId: e.staticClientInformation?.client_id, authHash: e.authHash }) ? (await Nn(), true) : (await ya({ clearRetention: false, reason: "retention_incompatible" }), false) : true;
  };
  return { get redirectUrl() {
    return Mn();
  }, prepareForClientRegistration: async () => {
    q && !x && (E = await sa({ serverUrl: r, fetchImpl: a, ipv4Hosts: e.loopbackIpv4Hosts }));
  }, ...s !== void 0 ? { getOAuthHttpFetch: () => s } : {}, validateResourceURL: c, ...l !== void 0 ? { addClientAuthentication: l } : {}, clientMetadata: { redirect_uris: [...e.redirectUris ?? [e.redirectUrl]], token_endpoint_auth_method: "none", grant_types: ["authorization_code", "refresh_token"], response_types: ["code"], client_name: e.clientName ?? "Cursor", ...e.logoUri ? { logo_uri: e.logoUri } : {} }, state: async () => {
    q && (E = await sa({ serverUrl: r, fetchImpl: a, ipv4Hosts: e.loopbackIpv4Hosts }));
    const w = dP(t, { workspaceId: e.callbackOwnerWorkspaceId }, _h(), { surface: e.oauthHttpClientSurface === "mcp_process" ? "mcp_process" : "exthost" });
    return ht ? pS(w, Wn) : w;
  }, clientInformation: async () => {
    if (!await bh()) return;
    const w = e.attemptClientInformation;
    return w ? (H = w, w) : ii();
  }, prepareForRefresh: async () => {
    await hP(M, async () => {
      if (D = void 0, N = void 0, z = void 0, await gh(), !await F2()) throw z || await Mr("skipped_disk_lock_not_acquired"), new on(t);
      B = Y, ee = true, U2(), me({ identifier: t, event: "mcp_oauth_refresh_prepare", fields: { ...Se(), refreshLockScope: b, holdsDiskLock: true, ...ye() } });
    });
  }, releaseRefreshLeaseOnError: async (w) => {
    C2(w), me({ identifier: t, level: "warn", event: "mcp_oauth_refresh_error", error: w, fields: { ...Se(), ...N, ...ye() } }), await $n("refresh_error_uncaught");
  }, logRefreshCatchBranch: (w) => {
    const $ = Ya(w.underlyingError ?? (w.errorMessage ? new Error(w.errorMessage) : void 0)), { underlyingError: W, ...ie } = w;
    me({ identifier: t, event: "mcp_oauth_sdk_refresh_catch_branch", fields: { ...Se(), ...ie, ...$, errorMessage: $.errorMessage ?? w.errorMessage, ...ye() } });
  }, getOAuthRefreshDiagnosticsForLog: () => za({ precededByRefreshError: !!N, refreshRetryClassificationEnabled: L2(), siblingRefreshRace: !!z, ...Se(), ...N, lastContentionOutcome: z }), isRetryableOAuthRefreshError: (w) => zl(w), saveClientInformation: async (w) => {
    await Nn(), H = w, await n.setSecret(d, JSON.stringify(w)), await n.updateGlobalState(S, true), await n.updateGlobalState(f, Date.now()), await n.updateGlobalState(y, r), await ma({ clientInformation: w });
  }, tokens: async () => {
    if (!await bh()) return;
    const w = await vh();
    if (!w) return;
    const W = (await ii())?.client_id;
    return Me && W && Me !== W && me({ identifier: t, level: "warn", event: "mcp_oauth_token_client_binding_mismatch", fields: { ...Se(), tokenBoundClientIdHash: Kn(Me), currentClientIdHash: Kn(W), refreshTokenPresent: !!w.refresh_token, ...ye() } }), Y = w.refresh_token, W && (Me = W), w;
  }, saveTokens: async (w) => {
    await Nn();
    const $ = await Un(), W = !!$, ie = $ ? await Fd($) : void 0;
    let Ae = w;
    W && ie?.refresh_token && !w.refresh_token && (Ae = { ...w, refresh_token: ie.refresh_token });
    const De = ee, ft = B;
    ee = false, B = void 0;
    const Ze = H ?? await ii(), Bt = Ze?.client_id, ur = yf(Ae, { expiresInIsFresh: true });
    if (De && await oi(ft)) throw await Mr("skipped_save_rotation", { scope: "saveTokens" }), await $n("save_skipped_sibling_rotated"), new on(t);
    if (await n.setSecret(u, JSON.stringify(Ae)), await n.updateGlobalState(A, true), await n.updateGlobalState(f, Date.now()), await n.updateGlobalState(y, r), Y = Ae.refresh_token, me({ identifier: t, event: "mcp_oauth_token_save", fields: { ...Se(), hadExistingTokens: W, isRefresh: De, tokenOwnerClientId: Bt, mergedPriorRefreshToken: !!(W && ie?.refresh_token && !w.refresh_token), ...ur, ...ye() } }), De && me({ identifier: t, event: "mcp_oauth_refresh_result", fields: { ...Se(), outcome: "success", tokenOwnerClientId: Bt, ...ur, ...ye() } }), Ze?.client_id && (Me = Ze.client_id), await $n("save_success"), x) {
      const wh = x;
      x = void 0, E = He, wh.dispose();
    }
    e.onTokensSaved?.();
  }, redirectToAuthorization: async (w) => {
    ue && await lr(w), HI(w, e.scopes);
    const $ = await js(r, a);
    for (const [ie, Ae] of Object.entries($?.authorizationParams ?? {})) w.searchParams.set(ie, Ae);
    ($?.omitConsentPrompt === true || dS(w)) && hS(w);
    const W = H ?? await ii();
    await ma({ clientInformation: W, authorizationServerUrl: w.origin }), me({ identifier: t, event: "mcp_oauth_redirect", fields: { ...WS(w.href), ...x2(), ...ye() } }), e.onNeedsAuth(w.href);
  }, saveCodeVerifier: async (w) => {
    await ma({ codeVerifier: w }), await n.setSecret(_, w), await n.updateGlobalState(_, void 0), await n.updateGlobalState(y, r);
  }, codeVerifier: async () => {
    if (F !== void 0) {
      const W = await n.getSecret(Fr(F));
      if (W !== void 0) return W;
      const ie = await zd(n, F);
      return ie?.codeVerifier ? (await n.setSecret(Fr(F), ie.codeVerifier), ie.codeVerifier) : "";
    }
    const w = await n.getSecret(_);
    if (w !== void 0) return w;
    const $ = await n.getGlobalState(_);
    return typeof $ == "string" && $.length > 0 ? (await n.setSecret(_, $), await n.updateGlobalState(_, void 0), $) : "";
  }, invalidateCredentials: async (w) => {
    const $ = B ?? Y;
    let W = false, ie = false;
    if (w === "all" || w === "tokens") {
      const Ae = await Un();
      if (Ae) try {
        const De = JSON.parse(Ae);
        W = !!De.refresh_token, w === "tokens" && Y && De.refresh_token && De.refresh_token !== Y && (ie = true);
      } catch {
        W = false;
      }
    }
    if (w === "verifier" ? (ee = false, B = void 0) : await $n(`invalidate_credentials_${w}`), (w === "all" || w === "client" || w === "tokens") && await Nn(), w === "all" || w === "tokens") {
      if (await oi($) && (ie = true), me({ identifier: t, level: "warn", event: "mcp_oauth_invalidate_credentials", fields: { ...Se(), scope: w, hadRefreshToken: W, siblingAlreadyRefreshed: ie, ...ye() } }), ie) throw await Mr("skipped_sibling_rotated", { scope: w }), new on(t);
      if (w === "tokens") {
        const De = await gh();
        if (De.classifyBeforeWipe && KE(D)) {
          me({ identifier: t, event: "mcp_oauth_invalidate_credentials_skipped", fields: { ...Se(), scope: w, hadRefreshToken: W, ...N, ...ye() } });
          const ft = D;
          throw D = void 0, qE(ft, "Network refresh failure");
        }
        if (De.classifyBeforeWipe) {
          const ft = Hf(D, { allowInvalidGrantGeneric: true });
          me({ identifier: t, level: "warn", event: "mcp_oauth_refresh_result", fields: { ...Se(), outcome: "failure_tokens_wiped", scope: w, hadRefreshToken: W, permanentReason: ft?.reason ?? "not_network_timeout", ...N, ...ye() } });
        } else me({ identifier: t, level: "warn", event: "mcp_oauth_refresh_result", fields: { ...Se(), outcome: "failure_tokens_wiped", scope: w, hadRefreshToken: W, ...N, ...ye() } });
        D = void 0;
      }
      const Ae = await Un();
      if (Ae && n.deleteSecretIfEquals) {
        if (!await n.deleteSecretIfEquals(u, Ae)) {
          const ft = await Un();
          if (ft && ft !== Ae) throw await Mr("skipped_invalidate_rotation", { scope: w }), new on(t);
        }
      } else await n.deleteSecret(u);
      await n.updateGlobalState(A, true);
    }
    (w === "all" || w === "client") && (await n.deleteSecret(d), await n.updateGlobalState(S, true)), (w === "all" || w === "verifier") && (F !== void 0 && await n.deleteSecret(Fr(F)), await n.deleteSecret(_), await n.updateGlobalState(_, void 0));
  }, clearOAuthAttemptState: mh, clearIdentifierScopedState: async () => {
    await ya({ clearRetention: true, reason: "clear_identifier_scoped_state" });
  }, softClear: async (w) => {
    const $ = w.serverUrl ?? r, W = A4($), ie = Date.now(), Ae = { clearedAtMs: ie, expiresAtMs: ie + w.expiresInMs, ...W ? { normalizedServerUrl: W.normalizedServerUrl, serverOrigin: W.serverOrigin } : {}, ...w.clientId !== void 0 ? { clientId: w.clientId } : {}, ...w.authHash !== void 0 ? { authHash: w.authHash } : {} };
    await n.updateGlobalState(m, Ae), await n.deleteSecret(_), await n.updateGlobalState(_, void 0), await n.updateGlobalState(y, void 0);
  } };
}
async function PP(e, t) {
  try {
    const r = await t(e, { method: "POST", headers: { "Content-Type": "application/json" } });
    if (r.status === 401) {
      const { extractWWWAuthenticateParams: n } = await import("@modelcontextprotocol/sdk/client/auth.js"), { resourceMetadataUrl: s } = n(r);
      return s;
    }
    await r.body?.cancel();
  } catch {
  }
}
async function OP(e) {
  const { discoverAuthorizationServerMetadata: t, discoverOAuthProtectedResourceMetadata: r, exchangeAuthorization: n, selectResourceURL: s } = await import("@modelcontextprotocol/sdk/client/auth.js"), i = e.fetch ?? e.provider.getOAuthHttpFetch?.() ?? globalThis.fetch;
  await oP(e.transportServerUrl, i);
  let o, a;
  const c = i ? await PP(e.transportServerUrl, i) : void 0;
  try {
    o = await r(e.transportServerUrl, { resourceMetadataUrl: c }, i), o.authorization_servers && o.authorization_servers.length > 0 && (a = o.authorization_servers[0]);
  } catch {
  }
  const l = a ?? e.persistedAuthorizationServerUrl ?? e.transportServerUrl, u = await s(e.transportServerUrl, e.provider, o), d = await t(l, { fetchFn: i }), f = await e.provider.clientInformation();
  if (!f) throw new Error("Existing OAuth client information is required when exchanging an authorization code");
  const p = await e.provider.codeVerifier(), g = await n(l, { metadata: d, clientInformation: f, authorizationCode: e.authorizationCode, codeVerifier: p, redirectUri: e.provider.redirectUrl, resource: u, fetchFn: i });
  await e.provider.saveTokens(g);
}
function CP(e, t) {
  const n = new URLSearchParams(e).get("code") ?? void 0, s = g4({ query: e, key: "code" });
  return t === "decode-percent-encoded" ? _4(s) ?? n : s ?? n;
}
Be();
function T4(e) {
  const t = e.redirectUrl ?? `${na.urlProtocol ?? "cursor"}://anysphere.cursor-mcp/oauth/callback`, r = xd(e), n = { getGlobalState: (o) => e.store.getGlobalState(o), updateGlobalState: (o, a) => e.store.updateGlobalState(o, a), getSecret: (o) => e.store.getSecret(o), setSecret: (o, a) => e.store.setSecret(o, a), deleteSecret: (o) => e.store.deleteSecret(o), deleteSecretIfEquals: (o, a) => e.store.deleteSecretIfEquals(o, a), diskKVSetIfAbsent: (o, a) => e.store.diskKVSetIfAbsent(o, a), diskKVReplaceIfEquals: (o, a, c) => e.store.diskKVReplaceIfEquals(o, a, c), diskKVGet: (o) => e.store.diskKVGet(o), diskKVDelete: (o, a) => e.store.diskKVDelete(o, a), readAttempt: (o) => e.store.readAttempt(o), writeAttempt: (o, a) => e.store.writeAttempt(o, a), deleteAttempt: (o) => e.store.deleteAttempt(o) }, s = l4(e.authConfig?.CLIENT_ID), i = s ? { client_id: s, ...e.authConfig?.CLIENT_SECRET ? { client_secret: e.authConfig.CLIENT_SECRET } : {} } : void 0;
  return IP({ identifier: e.identifier, serverUrl: e.serverUrl, storage: n, callbackOwnerWorkspaceId: e.callbackOwnerWorkspaceId, redirectUrl: t, redirectUris: vS(e.createRedirectHandle !== void 0 ? st : t), createRedirectHandle: e.createRedirectHandle, armLoopbackOnRedirect: e.armLoopbackOnRedirect, loopbackIpv4Hosts: e.loopbackIpv4Hosts, hostedCallback: e.hostedCallback, scopeKey: (o) => Ld({ key: o, profileId: e.profileId, isDefaultProfile: e.isDefaultProfile }), attemptIdPrefix: r, oauthAttemptId: e.oauthAttemptId, attemptClientInformation: e.attemptClientInformation, activeIdentifier: e.activeIdentifier, processRegistryKey: e.processRegistryKey, resolvedConfigHash: e.resolvedConfigHash, skipRetentionStateReconciliation: e.skipRetentionStateReconciliation, staticClientInformation: i, authHash: e.authConfig ? SP({ ...e.authConfig }) : void 0, scopes: e.authConfig?.scopes, logoUri: jh, onNeedsAuth: e.onNeedsAuth, onTokensSaved: e.onTokensSaved, refreshLockScope: "identifier", refreshLockTtlMs: e.refreshLockTtlMs, refreshLockMaxHoldMs: e.refreshLockMaxHoldMs, getDynamicConfigValue: e.getDynamicConfigValue, oauthHttpFetchBase: e.oauthHttpFetchBase, oauthHttpClientSurface: e.oauthHttpClientSurface ?? "mcp_process" });
}
h(), Be(), h(), Be();
import { createServer as LP } from "node:http";
h();
var xP = "Cursor Agent - Turn your ideas into code", MP = "Return to Cursor", DP = ["html,body{margin:0;min-height:100%;}", 'body{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#0c0c0d;color:#f4f4f5;}', ".page{display:flex;min-height:100vh;flex:1;align-items:center;justify-content:center;}", ".content{text-align:center;}", ".message{font-size:1.125rem;line-height:1.75rem;margin:0;font-weight:400;}", ".hint{margin:0.5rem 0 0;font-size:1rem;line-height:1.5rem;color:#a1a1aa;}", ".return-link{display:inline-block;margin-top:1rem;font-size:1rem;line-height:1.5rem;color:#f4f4f5;text-decoration:underline;text-underline-offset:4px;}"].join("");
function Ys(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function NP(e) {
  return JSON.stringify(e).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}
function Wd(e) {
  const t = e.returnUrl;
  return ["<!doctype html>", '<html lang="en">', "<head>", '<meta charset="utf-8">', '<meta name="viewport" content="width=device-width, initial-scale=1">', `<title>${Ys(e.title ?? xP)}</title>`, "<style>", DP, "</style>", "</head>", "<body>", '<main class="page">', '<div class="content">', `<p class="message">${Ys(e.message)}</p>`, `<p class="hint">${Ys(e.hint)}</p>`, t !== void 0 ? `<a class="return-link" href="${Ys(t)}">${Ys(e.returnLabel ?? MP)}</a>` : "", "</div>", "</main>", e.autoRedirect === true && t !== void 0 ? `<script>setTimeout(function(){ window.location.href = ${NP(t)}; }, 500);<\/script>` : "", "</body>", "</html>"].join("");
}
function UP() {
  return Wd({ message: "Authorization received.", hint: "Go back to the app that asked you to sign in. You can close this tab." });
}
function Gd(e) {
  return Wd({ message: "Authorization complete!", hint: "You can close this tab and return to Cursor.", returnUrl: e, autoRedirect: e !== void 0 });
}
function Kd(e) {
  return Wd({ message: "OAuth callback failed.", hint: "Return to Cursor and try connecting again.", returnUrl: e });
}
var qd = 120 * 1e3, k4 = "/cancel", I4 = "cancelled", jd = "/claim", P4 = "unclaimed", $P = 200, FP = 32, HP = 4096, BP = 16384, Cn = "OAuth login superseded by a newer attempt", O4 = 500, C4 = 10, zP = 50, L4 = "text/html; charset=utf-8";
function WP(e, t) {
  const r = lP(t.search);
  return { method: e, url: t, query: r, param: (n) => Vs({ query: r, key: n }) };
}
var Vd = { info: () => {
}, warn: () => {
} };
function Yd(e) {
  return e instanceof Error ? e.message : String(e);
}
function GP(e) {
  return e instanceof Error ? e : new Error(String(e));
}
function Xd(e) {
  return e.code === "EADDRINUSE" || e.message.includes("EADDRINUSE") || e.message.includes("already in use");
}
function x4(e, t) {
  const r = e.includes(":") ? `[${e}]` : e;
  return new URL(`http://${r}:${t}${k4}`);
}
async function M4(e) {
  try {
    const t = await fetch(x4(e.host, e.port), { method: "POST", signal: AbortSignal.timeout(O4) });
    return t.ok && await t.text() === I4;
  } catch {
    return false;
  }
}
function KP(e) {
  return e === void 0 ? jd : `${jd}?${new URLSearchParams({ state: e }).toString()}`;
}
var ca = async ({ host: e, port: t, state: r }) => {
  try {
    const n = await fetch(new URL(KP(r), x4(e, t)), { signal: AbortSignal.timeout(O4) });
    return { ok: n.ok, body: await n.text() };
  } catch {
    return;
  }
};
async function qP(e) {
  const t = e.claim ?? ca;
  for (const r of e.hosts) if ((await t({ host: r, port: e.port }))?.body === P4) return true;
  return false;
}
function D4(e, t) {
  const r = Vs({ query: e, key: "state" });
  if (r !== t) return;
  const n = Vs({ query: e, key: "error" });
  if (n !== void 0) return { ok: false, error: n, errorDescription: Vs({ query: e, key: "error_description" }), state: r, query: e };
  const s = Vs({ query: e, key: "code" });
  return s !== void 0 && s.length > 0 ? { ok: true, code: s, state: r, query: e } : void 0;
}
async function jP(e) {
  const t = e.claim ?? ca;
  for (const r of e.hosts) {
    const n = await t({ host: r, port: e.port, state: e.state }), s = n?.ok === true ? D4(n.body, e.state) : void 0;
    if (s !== void 0) return s;
  }
}
async function VP(e) {
  await new Promise((t) => {
    setTimeout(t, e).unref?.();
  });
}
async function YP(e) {
  await new Promise((t) => setTimeout(t, e));
}
var XP = new URL(st).hostname, Xs = "127.0.0.1";
function JP(e) {
  return e === XP || e === Xs || e === "[::1]" || e === "::1";
}
function N4(e) {
  return e === Xs ? [Xs] : e.includes(":") ? [e.replace(/^\[|\]$/g, "")] : [Xs, "::1"];
}
function Js(e) {
  if (e.protocol !== "http:" || !JP(e.hostname)) throw new Error("MCP OAuth redirect_uri must be a loopback HTTP URL.");
  const t = Number.parseInt(e.port, 10);
  if (!Number.isInteger(t) || t <= 0) throw new Error("MCP OAuth redirect_uri must include a port.");
  return { port: t };
}
var ZP = { hosts: (e) => N4(e.hostname), cancel: M4, claim: ca, bind: async ({ redirectUrl: e, host: t, onRequest: r }) => {
  const { port: n } = Js(e), s = LP({ maxHeaderSize: 64 * 1024 }, (i, o) => {
    let a;
    try {
      a = new URL(i.url ?? "/", e.origin);
    } catch {
      o.writeHead(400, { "Content-Type": L4 }).end("Bad request.");
      return;
    }
    r(WP(i.method ?? "GET", a)).then((c) => {
      const l = Buffer.from(c.body, "utf8");
      let u = false;
      const d = () => {
        u || (u = true, setImmediate(() => c.onFlushed?.()));
      };
      if (o.destroyed) {
        d();
        return;
      }
      o.once("finish", d), o.once("close", d), o.writeHead(c.statusCode, { "Content-Type": L4, "Content-Length": String(l.byteLength), Connection: "close" }), o.end(l);
    });
  });
  try {
    await new Promise((i, o) => {
      const a = (c) => o(c);
      s.once("error", a), s.listen(n, t, () => {
        s.off("error", a), i();
      });
    });
  } catch (i) {
    throw s.close(), i;
  }
  return s.unref(), { close: () => new Promise((i) => {
    s.close(() => i()), s.closeAllConnections?.();
  }), destroy: () => new Promise((i) => {
    s.close(() => i()), s.closeAllConnections?.();
  }) };
} };
function QP(e, t) {
  if (t.method !== "GET" || t.url.pathname !== e.pathname || t.query.length > BP || t.param("code") === void 0 && t.param("error") === void 0) return;
  const r = t.param("state");
  return r !== void 0 && r.length > 0 && r.length <= HP ? r : void 0;
}
var U4 = class {
  origins = /* @__PURE__ */ new Map();
  live = /* @__PURE__ */ new Map();
  closing = /* @__PURE__ */ new Map();
  bind;
  requestCancel;
  requestClaim;
  log;
  constructor(e) {
    this.bind = e?.bind ?? ZP, this.requestCancel = this.bind.cancel ?? M4, this.requestClaim = this.bind.claim ?? ca, this.log = e?.log ?? Vd;
  }
  async acquire(e, t, r, n = true) {
    Js(e);
    const s = e.origin, i = { handler: t, onPreempt: r };
    for (; ; ) {
      const o = this.closing.get(s);
      if (o != null) {
        await o;
        continue;
      }
      let a = this.origins.get(s);
      if (a == null) {
        a = this.bindOrigin(e, n), this.origins.set(s, a);
        const u = a;
        u.catch(() => {
          this.origins.get(s) === u && this.origins.delete(s);
        });
      }
      const c = await a;
      if (c.dead) throw new Error(Cn);
      if (this.origins.get(s) !== a || this.closing.has(s)) continue;
      c.registrations.add(i);
      let l = false;
      return async () => {
        if (l || (l = true, c.registrations.delete(i), c.registrations.size > 0) || (await Promise.allSettled([...c.inFlight]), c.registrations.size > 0)) return;
        if (this.origins.get(s) !== a) {
          const d = this.closing.get(s);
          d != null && await d;
          return;
        }
        this.origins.delete(s), this.forgetLive(s, c);
        const u = this.closeServers(c, "close");
        this.closing.set(s, u);
        try {
          await u;
        } finally {
          this.closing.get(s) === u && this.closing.delete(s);
        }
      };
    }
  }
  async bindMissing(e, t = true) {
    const r = this.live.get(e.origin);
    if (r == null || r.dead) return "incomplete";
    const n = await this.bindHosts(r, t);
    if (!r.dead && r.servers.size === r.hosts.length) return "complete";
    if (!n.some(Xd)) return "incomplete";
    const s = N4(e.hostname).includes("::1") ? "::1" : Xs;
    return !r.dead && r.servers.has(s) ? "reachable" : "occupied";
  }
  async foreignHolderSpeaksClaim(e) {
    const { port: t } = Js(e), r = this.unboundHosts(e);
    return r.length > 0 && qP({ hosts: r, port: t, claim: this.requestClaim });
  }
  async pollForeignClaim(e, t) {
    const { port: r } = Js(e), n = this.unboundHosts(e);
    return n.length === 0 ? void 0 : jP({ hosts: n, port: r, state: t, claim: this.requestClaim });
  }
  takeParkedCallback(e, t) {
    const r = this.live.get(e.origin);
    if (r == null || r.dead) return;
    const n = this.takeForeignCallback(r, t);
    return n === void 0 ? void 0 : D4(n, t);
  }
  unboundHosts(e) {
    const t = this.live.get(e.origin);
    return t == null || t.dead ? this.bind.hosts(e) : t.hosts.filter((r) => !t.servers.has(r));
  }
  async dispose() {
    const e = [...this.live.values()];
    this.live.clear();
    const t = [...this.origins.values()];
    this.origins.clear();
    for (const n of e) this.killRegistrations(n), await this.closeServers(n, "destroy");
    for (const n of t) try {
      const s = await n;
      this.killRegistrations(s), await this.closeServers(s, "destroy");
    } catch {
    }
    const r = [...this.closing.values()];
    this.closing.clear(), await Promise.allSettled(r);
  }
  async closeServers(e, t) {
    const r = [...e.servers.values()];
    e.servers.clear(), await Promise.all(r.map((n) => t === "close" ? n.close() : n.destroy()));
  }
  async bindOrigin(e, t) {
    const r = e.origin, n = { redirectUrl: e, hosts: this.bind.hosts(e), servers: /* @__PURE__ */ new Map(), registrations: /* @__PURE__ */ new Set(), inFlight: /* @__PURE__ */ new Set(), foreignCallbacks: /* @__PURE__ */ new Map(), dead: false };
    this.live.set(r, n);
    try {
      const s = await this.bindHosts(n, t);
      if (n.dead) throw new Error(Cn);
      if (n.servers.size === 0) throw this.forgetLive(r, n), s[0] ?? new Error(`MCP OAuth loopback could not bind ${r}.`);
      return this.log.info({ kind: "listening", detail: r }), n;
    } catch (s) {
      throw n.dead || (this.forgetLive(r, n), await this.closeServers(n, "destroy")), s;
    }
  }
  async bindOneHost(e, t, r) {
    if (e.dead) return false;
    const n = await this.bind.bind({ redirectUrl: e.redirectUrl, host: t, onRequest: (s) => this.dispatch(r, s) });
    return e.servers.set(t, n), e.dead || this.live.get(r) !== e ? (e.servers.delete(t), await n.destroy(), false) : true;
  }
  async bindHosts(e, t = true) {
    const r = e.redirectUrl.origin, { port: n } = Js(e.redirectUrl), s = [];
    for (const i of e.hosts) if (!e.servers.has(i)) try {
      if (!await this.bindOneHost(e, i, r)) break;
    } catch (o) {
      const a = GP(o);
      if (t && Xd(a) && (await this.requestCancel({ host: i, port: n }), await this.retryBindAfterCancel(e, i, r))) continue;
      s.push(a);
    }
    return s;
  }
  async retryBindAfterCancel(e, t, r) {
    for (let n = 0; n < C4; n++) try {
      return await this.bindOneHost(e, t, r);
    } catch {
      if (n === C4 - 1) return false;
      await YP(zP);
    }
    return false;
  }
  async dispatch(e, t) {
    const r = this.live.get(e);
    if (r == null || r.dead) return { statusCode: 404, body: "Not found." };
    const n = this.route(r, t);
    r.inFlight.add(n);
    try {
      return await n;
    } finally {
      r.inFlight.delete(n);
    }
  }
  async route(e, t) {
    if (t.method === "POST" && t.url.pathname === k4) return { statusCode: 200, body: I4, onFlushed: () => this.preemptOrigin(e) };
    if (t.method === "GET" && t.url.pathname === jd) {
      const n = this.takeForeignCallback(e, t.param("state"));
      return n === void 0 ? { statusCode: 404, body: P4 } : { statusCode: 200, body: n };
    }
    for (const n of [...e.registrations]) try {
      const s = await n.handler(t);
      if (s !== void 0) return s;
    } catch (s) {
      this.log.warn({ kind: "handler-failed", detail: Yd(s) });
    }
    const r = this.parkUnclaimedCallback(e, t);
    return r !== void 0 ? r : { statusCode: 404, body: "Not found." };
  }
  parkUnclaimedCallback(e, t) {
    const r = QP(e.redirectUrl, t);
    if (r === void 0) return;
    const n = Date.now();
    for (const [s, i] of e.foreignCallbacks) n - i.at > qd && e.foreignCallbacks.delete(s);
    if (!e.foreignCallbacks.has(r) && e.foreignCallbacks.size >= FP) {
      const s = e.foreignCallbacks.keys().next().value;
      s !== void 0 && e.foreignCallbacks.delete(s);
    }
    return e.foreignCallbacks.set(r, { query: t.query, at: n }), { statusCode: 200, body: UP() };
  }
  takeForeignCallback(e, t) {
    if (t === void 0 || t.length === 0) return;
    const r = e.foreignCallbacks.get(t);
    if (r !== void 0 && (e.foreignCallbacks.delete(t), !(Date.now() - r.at > qd))) return r.query;
  }
  forgetLive(e, t) {
    this.live.get(e) === t && this.live.delete(e);
  }
  killRegistrations(e) {
    if (e.dead) return;
    e.dead = true, e.foreignCallbacks.clear();
    const t = [...e.registrations];
    e.registrations.clear();
    for (const r of t) r.onPreempt?.();
  }
  preemptOrigin(e) {
    if (e.dead) return;
    const t = e.redirectUrl.origin;
    if (this.killRegistrations(e), this.forgetLive(t, e), this.origins.has(t) && this.origins.delete(t), this.closing.has(t)) {
      this.closeServers(e, "destroy");
      return;
    }
    const r = this.closeServers(e, "destroy");
    this.closing.set(t, r), r.finally(() => {
      this.closing.get(t) === r && this.closing.delete(t);
    }), this.log.info({ kind: "callback-aborted", detail: Cn });
  }
}, $4;
function eO() {
  return $4 ??= new U4(), $4;
}
async function tO(e) {
  const { registry: t, redirectUrl: r } = e, n = { release: void 0, handoff: false, finished: false };
  try {
    n.release = await t.acquire(r, e.handler, e.onPreempt);
  } catch (i) {
    if (!(i instanceof Error && Xd(i)) || !await t.foreignHolderSpeaksClaim(r)) throw i;
    return n.handoff = true, n;
  }
  const s = await t.bindMissing(r);
  return n.handoff = s !== "complete" && await t.foreignHolderSpeaksClaim(r), n;
}
async function rO(e, t) {
  if (t.release === void 0) {
    let r;
    try {
      r = await e.registry.acquire(e.redirectUrl, e.handler, e.onPreempt, false);
    } catch {
      return;
    }
    if (t.finished) {
      await r();
      return;
    }
    t.release = r;
  }
  await e.registry.bindMissing(e.redirectUrl, false) === "complete" && (t.handoff = false);
}
async function nO(e, t, r) {
  for (; t.handoff && !t.finished; ) {
    if (await rO(e, t), t.finished || await r()) return;
    await VP($P);
  }
}
function sO(e, t, r) {
  return e.ok ? (r.info({ kind: "callback-delivered", detail: t }), { result: { code: e.code, state: e.state, query: e.query } }) : (r.warn({ kind: "callback-failed", detail: e.error }), { error: new Error(e.error) });
}
function iO(e) {
  return { log: e.log ?? Vd, registry: e.registry ?? eO(), redirectUrl: e.redirectUrl ?? st, successPage: e.pages?.success ?? (() => Gd()), errorPage: e.pages?.error ?? (() => Kd()), timeoutMs: e.timeoutMs ?? qd };
}
async function F4(e) {
  const { log: t, registry: r, redirectUrl: n, successPage: s, errorPage: i, timeoutMs: o } = iO(e), a = new URL(n);
  let c;
  const l = new Promise((S) => {
    c = S;
  }), d = { registry: r, redirectUrl: a, handler: async (S) => {
    if (S.url.pathname !== a.pathname || S.method !== "GET") return;
    const v = S.param("state");
    if (!e.claims(v)) return;
    const b = S.param("error"), I = S.param("code"), O = b !== void 0 ? new Error(b) : I === void 0 ? new Error("No authorization code provided") : void 0;
    return O !== void 0 ? (t.warn({ kind: "callback-failed", detail: O.message }), { statusCode: 400, body: i(), onFlushed: () => c({ error: O }) }) : { statusCode: 200, body: s(), onFlushed: () => {
      t.info({ kind: "callback-delivered", detail: a.origin }), c({ result: { code: I, state: v, query: S.query } });
    } };
  }, onPreempt: () => {
    c({ error: new Error(Cn) }), t.info({ kind: "callback-aborted", detail: Cn });
  } }, f = await tO(d), p = setTimeout(() => {
    c({ error: new Error(`Timed out waiting for the OAuth callback on ${a.href}`) });
  }, o);
  p.unref?.();
  let g;
  const _ = (S) => f.finished || S === void 0 || !e.claims(S.state) ? false : (c(sO(S, a.origin, t)), true), y = (S) => {
    f.finished || g !== void 0 || S.length === 0 || (g = S, _(r.takeParkedCallback(a, S)));
  };
  f.handoff && nO(d, f, async () => g === void 0 ? false : _(r.takeParkedCallback(a, g)) ? true : _(await r.pollForeignClaim(a, g))), e.state !== void 0 && y(e.state);
  const m = async () => {
    f.finished || (f.finished = true, clearTimeout(p), await f.release?.());
  }, A = l.then(async (S) => {
    if (await m(), S.error !== void 0) throw S.error;
    return S.result;
  });
  return A.catch(() => {
  }), { redirectUrl: n, delivered: A, watchForeignClaim: y, cancel: async (S) => {
    c({ error: new Error(S ?? "OAuth login cancelled") }), S !== void 0 && t.info({ kind: "callback-aborted", detail: S }), await m();
  } };
}
async function oO(e) {
  const t = e.log ?? Vd, r = e.returnToCursorUrl;
  let n, s = false, i;
  try {
    i = await F4({ claims: (c) => s && c === n, redirectUrl: e.redirectUrl, registry: e.registry, pages: { success: () => Gd(r), error: () => Kd(r) }, log: t });
  } catch (c) {
    t.warn({ kind: "unavailable", detail: Yd(c) });
    return;
  }
  let o = false;
  const a = () => {
    o || (o = true, i.cancel().finally(() => e.onDispose?.()));
  };
  return i.delivered.then(async (c) => {
    o = true;
    try {
      await e.onDelivered(c);
    } catch (l) {
      t.warn({ kind: "callback-failed", detail: Yd(l) });
    }
    e.onDispose?.();
  }).catch(() => {
    o || (o = true, e.onDispose?.());
  }), { redirectUrl: i.redirectUrl, setExpectedState: (c) => {
    n = c, s = true, i.watchForeignClaim(c);
  }, dispose: a };
}
var Jd, la, ua, H4 = { info: ({ kind: e, detail: t }) => Jd?.info(`[McpOAuthLoopback] ${e}: ${t}`), warn: ({ kind: e, detail: t }) => Jd?.warn(`[McpOAuthLoopback] ${e}: ${t}`) };
function aO(e) {
  Jd = e;
}
function cO(e) {
  return la = e, { dispose: () => {
    la === e && (la = void 0);
  } };
}
function B4() {
  return ua ??= new U4({ log: H4 }), ua;
}
async function lO(e) {
  return oO({ ...e, redirectUrl: st, registry: B4(), log: H4, onDelivered: async ({ query: t }) => {
    await la?.(t);
  } });
}
async function uO() {
  await ua?.dispose(), ua = void 0;
}
h();
var dO = "::mcpScope:", hO = "MCP: ";
function ge(e) {
  const t = e.lastIndexOf(dO);
  return t === -1 ? e : e.slice(0, t);
}
function fO(e) {
  return `${hO}${ge(e)}`;
}
function z4(e) {
  return { id: Qd(e), name: fO(e) };
}
function Zd(e) {
  const t = ge(e);
  return t.startsWith("project-") ? `project-${W4(t)}` : t;
}
function W4(e) {
  return (Cu(e, 0) >>> 0).toString(16);
}
function Qd(e) {
  return `mcp-server-${encodeURIComponent(ge(e))}`;
}
h();
var G4 = "mcp", pO = "cursor_mcp", gO = "mcp_process", _O = "shared_process";
function Cr(e) {
  return e.replace(/\bauthorization\s*[:=]\s*(Bearer|Basic)\s+[A-Za-z0-9._~+/-]+=*/gi, "authorization=[REDACTED]").replace(/\b(Bearer|Basic)\s+[A-Za-z0-9._~+/-]+=*/gi, "$1 [REDACTED]").replace(/\b(authorization|access_token|refresh_token|id_token|client_secret|code|token)=([^&\s]+)/gi, "$1=[REDACTED]").replace(/\b(authorization|access_token|refresh_token|id_token|client_secret|api[_-]?key|token)["']?\s*[:=]\s*["']?[^"',\s}]+["']?/gi, "$1=[REDACTED]").replace(/\beyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\b/g, "[REDACTED_JWT]");
}
function eh(e) {
  if (typeof e == "string") return Cr(e);
  if (Array.isArray(e)) return e.map(eh);
  if (e && typeof e == "object") {
    const t = {};
    for (const [r, n] of Object.entries(e)) t[r] = eh(n);
    return t;
  }
  return e;
}
function mO(e) {
  return eh(e);
}
function K4(e, t) {
  return { mcpMeta: { subkey: pO, source: gO, mcp_version: _O, identifier: Zd(e), scopedIdentifierHash: W4(e), ...mO(t) } };
}
h();
function vO(e) {
  switch (e.type) {
    case "connected":
      return { type: "connected" };
    case "degraded":
      return { type: "degraded", reason: e.reason };
    case "disconnected":
      return { type: "disconnected" };
    case "error":
      return { type: "error", error: e.error, isRetryable: e.isRetryable };
    case "initializing":
      return { type: "initializing" };
    case "needsAuth":
      return { type: "needsAuth", authorizationUrl: e.authorizationUrl };
    default:
      return { type: "disconnected" };
  }
}
function yO(e, t, r) {
  const n = vO(e);
  return n.type === "connected" && t.type !== "connected" && t.type !== "dormant" && !r ? { type: "initializing" } : n;
}
Jm(), su();
var q4 = "mcp_oauth_loopback_redirect", SO = 900 * 1e3, bO = 5e3, wO = 6e4, EO = 5 * 6e4, AO = 30 * 6e4;
function RO(e, t) {
  const r = ge(e), n = Zd(e), s = r === n ? t : t.replaceAll(r, n);
  return Cr(s);
}
function TO(e) {
  if (e instanceof Error) return { name: Cr(e.name), message: Cr(e.message), stack: e.stack ? Cr(e.stack) : void 0 };
  if (typeof e == "string") return { message: Cr(e) };
}
function da({ raw: e, minDelayMs: t, maxDelayMs: r }) {
  return Math.max(t, Math.min(e, r));
}
function j4(e, t) {
  const r = da({ raw: e.getMcpReconnectConfigValue("fastRetryBaseDelayMs", t) ?? bO, minDelayMs: 1e3, maxDelayMs: 36e5 }), n = da({ raw: e.getMcpReconnectConfigValue("fastRetryMaxDelayMs", t) ?? wO, minDelayMs: r, maxDelayMs: 36e5 }), s = da({ raw: e.getMcpReconnectConfigValue("periodicRetryBaseDelayMs", t) ?? EO, minDelayMs: 3e4, maxDelayMs: 36e5 }), i = da({ raw: e.getMcpReconnectConfigValue("periodicRetryMaxDelayMs", t) ?? AO, minDelayMs: s, maxDelayMs: 36e5 });
  return { fastRetryBaseDelayMs: r, fastRetryMaxDelayMs: n, periodicRetryBaseDelayMs: s, periodicRetryMaxDelayMs: i };
}
function V4({ attempt: e, baseDelayMs: t, maxDelayMs: r }) {
  const n = Math.min(t * 2 ** e, r);
  return n <= t ? t : t + Math.random() * (n - t);
}
function kO(e, t, r) {
  const n = j4(e, r);
  return V4({ attempt: t, baseDelayMs: n.fastRetryBaseDelayMs, maxDelayMs: n.fastRetryMaxDelayMs });
}
function IO(e, t = 0, r) {
  const n = j4(e, r);
  return V4({ attempt: t, baseDelayMs: n.periodicRetryBaseDelayMs, maxDelayMs: n.periodicRetryMaxDelayMs });
}
function PO(e, t, r) {
  const n = { identifier: t, serverInfo: r };
  return { backoff: { getBackoffDelay: (s) => kO(e, s, n), getPeriodicRetryDelay: (s) => IO(e, s, n), getMaxAttempts: () => e.getFastRetryMaxAttempts(n), getMaxPeriodicCycles: () => e.getMaxPeriodicCycles(n), getStabilityThresholdMs: () => e.getStabilityThresholdMs(n), getMaxDegradedProbeFailures: () => e.getMaxDegradedProbeFailures(n) } };
}
function Y4(e) {
  const t = e.projectPath;
  switch (e.transport.type) {
    case "stdio":
      return { type: "stdio", command: e.transport.command, args: e.transport.args ? [...e.transport.args] : void 0, env: e.transport.env ? { ...e.transport.env } : void 0, cwd: e.transport.cwd, projectPath: t };
    case "sse":
      return { type: "sse", serverUrl: e.transport.serverUrl, headers: e.transport.headers ? { ...e.transport.headers } : void 0, auth: e.transport.auth ? { ...e.transport.auth, scopes: e.transport.auth.scopes ? [...e.transport.auth.scopes] : void 0 } : void 0, projectPath: t };
    case "streamableHttp":
      return { type: "streamableHttp", serverUrl: e.transport.serverUrl, headers: e.transport.headers ? { ...e.transport.headers } : void 0, auth: e.transport.auth ? { ...e.transport.auth, scopes: e.transport.auth.scopes ? [...e.transport.auth.scopes] : void 0 } : void 0, projectPath: t };
    default:
      return e.transport;
  }
}
async function OO(e, t, r) {
  let n;
  const s = new Promise((i, o) => {
    n = setTimeout(() => o(new Error(r)), t);
  });
  try {
    return await Promise.race([e, s]);
  } finally {
    n !== void 0 && clearTimeout(n);
  }
}
function X4(e) {
  const t = e.host?.createHttpFetch({ identifier: e.identifier, serverUrl: e.serverUrl });
  return t || (e.host?.fetch ? e.host.fetch : typeof globalThis.fetch == "function" ? globalThis.fetch.bind(globalThis) : void 0);
}
function CO(e) {
  const t = [e.outcomes.tools, e.outcomes.prompts, e.outcomes.resources];
  for (const r of t) if (r.kind === "failure" && r.authRelated) return r.message;
}
function LO(e) {
  const t = e.toLowerCase();
  return t.includes("unknown tool") || t.includes("tool not found") || t.includes("no such tool") || t.includes("method not found") || t.includes("-32601");
}
var th = "MCP server requires authentication", xO = "Could not verify sign-in state; retrying.", MO = "Sign-in for this server now runs on Cursor's servers. Sign in again from Cursor Settings to keep using it.", DO = "This server now signs in on Cursor's servers.", NO = 6e4, UO = 10 * 6e4, $O = 1440 * 6e4, FO = class extends Ce {
  constructor(e, t, r, n, s, i, o) {
    super(), this.registry = e, this.logService = t, this.mcpOAuthStore = r, this.loggerService = s, this.structuredLogService = i, this.mcpHostEnvironment = o, this.lifecycles = /* @__PURE__ */ new Map(), this.adapters = /* @__PURE__ */ new Map(), this.adapterWaiters = /* @__PURE__ */ new Map(), this.probePromises = /* @__PURE__ */ new Map(), this.startConnectionPromises = /* @__PURE__ */ new Map(), this.pendingLoopbackArmIdentifiers = /* @__PURE__ */ new Set(), this.pendingCloudLoopbackCallbacks = /* @__PURE__ */ new Map(), this.connectionGenerations = /* @__PURE__ */ new Map(), this.serverLoggers = /* @__PURE__ */ new Map(), this.toolCallTargets = /* @__PURE__ */ new Map(), this.didRegisterLifecycleOAuthProviderFactory = false, this.lastUsedAtMs = /* @__PURE__ */ new Map(), this.inFlightOps = /* @__PURE__ */ new Map(), this.lastOfferingsFetchedAtMs = /* @__PURE__ */ new Map(), this.lifecycleCallbacks = { onStatusChanged: (c, l) => {
      const u = this.lifecycles.get(c);
      if (!u) return;
      const d = yO(l, u.getConnectionState(), u.getAdapter() !== void 0 || this.adapters.has(c));
      this.registry.updateStatus(c, d), this.emitStructuredStatusLog(c, l, d, u.getServerInfo());
    }, onAdapterCreated: (c, l) => {
      this.adapters.set(c, l), this.resolveAdapterWaiters(c);
    }, onAdapterRemoved: (c) => {
      this.adapters.delete(c);
    }, onOfferingsChanged: (c) => {
      this._onToolsChanged?.(c);
    } }, this._onToolsChanged = n, this._register(this.registry.onDidRequestStart((c) => void this.startConnection(c))), this._register(this.registry.onDidRequestStop(({ identifier: c }) => this.stopConnection(c)));
    const a = setInterval(() => this.sweepIdleConnections(), NO);
    this._register(rr(() => clearInterval(a)));
  }
  getServerLogger(e) {
    if (!this.loggerService) return;
    let t = this.serverLoggers.get(e);
    return t || (t = this._register(this.loggerService.createLogger(Qd(e), { name: "Shared MCP process", group: z4(e) })), this.serverLoggers.set(e, t)), t;
  }
  traceServer(e, t) {
    this.logService.trace(t), this.getServerLogger(e)?.trace(t);
  }
  infoServer(e, t) {
    this.logService.info(t), this.getServerLogger(e)?.info(t);
  }
  warnServer(e, t) {
    this.logService.warn(t), this.getServerLogger(e)?.warn(t);
  }
  emitStructuredServerLog({ level: e, identifier: t, event: r, message: n, metadata: s = {}, error: i }) {
    if (!this.structuredLogService) return;
    const o = RO(t, n), a = this.registry.getServer(t)?.definition, c = a?.resolvedConfigHash ? { resolvedConfigHash: a.resolvedConfigHash } : {};
    this.structuredLogService.log({ level: e, key: G4, message: o, metadata: K4(t, { event: r, workspaceId: this.registry.getFirstSubscriberWorkspaceId(t), subscriberCount: this.registry.getSubscriberCount(t), ...c, ...s }), error: TO(i) }).catch((l) => {
      const u = ge(t);
      this.logService.debug(`failed to forward structured log for ${u}: ${l instanceof Error ? l.message : String(l)}`);
    });
  }
  emitStructuredStatusLog(e, t, r, n) {
    const s = this.registry.getServer(e)?.definition.name, i = n.type, o = ge(e);
    switch (r.type) {
      case "connected":
        this.emitStructuredServerLog({ level: "info", identifier: e, event: "mcp_process_connect_success", message: `connected: ${o}`, metadata: { serverName: s, transportType: i } });
        break;
      case "needsAuth":
        this.emitStructuredServerLog({ level: "info", identifier: e, event: "mcp_process_auth_required", message: `${o} requires OAuth authorization`, metadata: { serverName: s, transportType: i, reason: "lifecycle_needs_auth" } });
        break;
      case "error":
        this.emitStructuredServerLog({ level: t.type === "error" && t.isRetryable === false ? "error" : "warn", identifier: e, event: "mcp_process_connect_failure", message: `failed to connect ${o}: ${r.error}`, metadata: { serverName: s, transportType: i, errorMessage: r.error, isRetryable: r.isRetryable } });
        break;
      default:
        break;
    }
  }
  loadLifecycleModule() {
    return this.lifecycleModulePromise ??= Promise.resolve().then(() => (Jm(), Xm)), this.lifecycleModulePromise;
  }
  async refreshReconnectConfig(e) {
    if (this.mcpHostEnvironment) try {
      const t = await this.mcpHostEnvironment.getDynamicConfigValue("mcp_reconnect_config");
      e.setMcpReconnectConfigFromStatsig(t);
    } catch (t) {
      this.logService.warn(`[McpConnectionManager] failed to read mcp_reconnect_config: ${t instanceof Error ? t.message : String(t)}`);
    }
  }
  registerLifecycleOAuthProviderFactory(e) {
    this.didRegisterLifecycleOAuthProviderFactory || (this.didRegisterLifecycleOAuthProviderFactory = true, aO(this.logService), this._register(cO((t) => this.handleLoopbackOAuthCallback(t))), e.setMcpLifecycleOAuthClientProviderFactory(async ({ identifier: t, serverInfo: r, host: n, authEventSink: s, canonicalServerUrl: i, transportServerUrl: o }) => {
      const a = this.mcpOAuthStore;
      if (!a) throw new Error("MCP OAuth store is not available in the MCP process");
      const c = this.registry.getServer(t)?.definition, l = "auth" in r ? r.auth : void 0, u = await this.mcpHostEnvironment?.getDynamicConfigValue("mcp_oauth_sweep_config"), d = typeof u?.refreshLockTtlMs == "number" && u.refreshLockTtlMs > 0 ? u.refreshLockTtlMs : void 0, f = typeof u?.refreshLockMaxHoldMs == "number" && u.refreshLockMaxHoldMs > 0 ? u.refreshLockMaxHoldMs : void 0, p = await this.mcpHostEnvironment?.getDynamicConfigValue(q4), g = X4({ host: this.mcpHostEnvironment, identifier: t, serverUrl: i }), _ = { config: p, serverUrl: i, restMcpProviderMetadata: await js(i, g) }, y = Jl(_), m = this.consumeNextConnectArmsLoopback(t), A = y ? (O) => lO({ returnToCursorUrl: this.getLoopbackReturnToCursorUrl(), onDispose: O }) : void 0, S = Dm({ ..._, hostedCallbackGate: await this.mcpHostEnvironment?.checkFeatureGate(nu) ?? false }), v = T4({ identifier: c?.oauthScopeKey ?? t, serverUrl: i, store: a, createRedirectHandle: A, armLoopbackOnRedirect: m, loopbackIpv4Hosts: p?.ipv4Hosts, hostedCallback: S, profileId: c?.profileId, isDefaultProfile: c?.isDefaultProfile, authConfig: l, callbackOwnerWorkspaceId: this.registry.getFirstSubscriberWorkspaceId(t) ?? "empty-window", processRegistryKey: t, activeIdentifier: t, resolvedConfigHash: c?.resolvedConfigHash, refreshLockTtlMs: d, refreshLockMaxHoldMs: f, getDynamicConfigValue: async (O) => await this.mcpHostEnvironment?.getDynamicConfigValue(O), oauthHttpFetchBase: g, oauthHttpClientSurface: "mcp_process", onNeedsAuth: (O) => {
        s.emit({ target: "auth", kind: "auth_required", authorizationUrl: O });
      }, onTokensSaved: () => {
        s.emit({ target: "auth", kind: "tokens_saved" });
      } }), b = l4(l?.CLIENT_ID), I = b ? { client_id: b, ...l?.CLIENT_SECRET ? { client_secret: l.CLIENT_SECRET } : {} } : void 0;
      return { authProvider: v, staticClientInfo: I };
    }));
  }
  markNextConnectArmsLoopback(e) {
    this.pendingLoopbackArmIdentifiers.add(e);
  }
  consumeNextConnectArmsLoopback(e) {
    return this.pendingLoopbackArmIdentifiers.delete(e);
  }
  async startConnection(e) {
    const t = this.startConnectionPromises.get(e.identifier);
    if (t) {
      await t;
      return;
    }
    const r = this.bumpConnectionGeneration(e.identifier), n = this.doStartConnection(e, r);
    this.startConnectionPromises.set(e.identifier, n);
    try {
      await n;
    } finally {
      this.startConnectionPromises.get(e.identifier) === n && this.startConnectionPromises.delete(e.identifier);
    }
  }
  async readGrantHold(e) {
    const t = this.mcpOAuthStore;
    if (!t) return { kind: "clear" };
    const r = Ld({ key: Re({ baseKey: te.GRANT_HOLD, identifier: e.oauthScopeKey ?? e.identifier }), profileId: e.profileId, isDefaultProfile: e.isDefaultProfile });
    try {
      const n = await t.getGlobalState(r);
      return n === void 0 ? { kind: "clear" } : { kind: "held", reason: typeof n.reason == "string" ? n.reason : "persist_failed" };
    } catch (n) {
      return this.warnServer(e.identifier, `could not read the grant hold; not connecting until it can be read: ${n instanceof Error ? n.message : String(n)}`), { kind: "unknown" };
    }
  }
  bumpConnectionGeneration(e) {
    const t = (this.connectionGenerations.get(e) ?? 0) + 1;
    return this.connectionGenerations.set(e, t), t;
  }
  isCurrentConnectionGeneration(e, t) {
    return this.connectionGenerations.get(e) === t;
  }
  leftoverHttpMcpOAuthClientId(e) {
    const t = e.transport;
    if (!(t.type !== "sse" && t.type !== "streamableHttp")) return t.auth?.CLIENT_ID;
  }
  async doStartConnection(e, t) {
    if (WI(this.leftoverHttpMcpOAuthClientId(e))) {
      if (!this.isCurrentConnectionGeneration(e.identifier, t)) return;
      this.registry.updateStatus(e.identifier, { type: "error", error: zI, isRetryable: false }), this.infoServer(e.identifier, `oauth client is a leftover placeholder; parked instead of DCR: ${ge(e.identifier)}`);
      return;
    }
    const r = await this.readGrantHold(e);
    if (r.kind !== "clear") {
      if (!this.isCurrentConnectionGeneration(e.identifier, t)) return;
      if (r.kind === "held") {
        this.registry.parkOAuthScope(e.oauthScopeKey ?? e.identifier);
        const c = r.reason === "migrated";
        this.registry.updateStatus(e.identifier, { type: "error", error: c ? DO : MO, isRetryable: false }), this.infoServer(e.identifier, `grant ${c ? "migrated to the server" : "held after a failed migration"}; parked instead of connecting: ${ge(e.identifier)}`);
        return;
      }
      this.registry.updateStatus(e.identifier, { type: "error", error: xO, isRetryable: true });
      return;
    }
    const n = this.mcpHostEnvironment;
    if (!n) throw new Error("McpProcessHostEnvironment is required to start MCP lifecycles");
    const s = await this.loadLifecycleModule();
    this.registerLifecycleOAuthProviderFactory(s);
    const i = this.lifecycles.get(e.identifier);
    if (i) {
      const c = i.getConnectPromise(), l = i.getConnectionState(), u = i.getAuthState();
      !c && s.shouldReconnectExistingLifecycle(l, u) ? (this.infoServer(e.identifier, `restarting retryable lifecycle for ${ge(e.identifier)}`), this.markServerUsed(e.identifier), i.connect(), await i.getConnectPromise()) : c && await c;
      return;
    }
    if (await this.refreshReconnectConfig(s), !this.isCurrentConnectionGeneration(e.identifier, t)) return;
    const o = Y4(e);
    this.infoServer(e.identifier, `connecting ${e.transport.type} for "${e.name}" (${ge(e.identifier)})`), this.emitStructuredServerLog({ level: "info", identifier: e.identifier, event: "mcp_process_connect_start", message: `connecting ${e.transport.type} for "${e.name}" (${ge(e.identifier)})`, metadata: { serverName: e.name, transportType: e.transport.type } });
    const a = new s.ServerLifecycle(e.identifier, o, PO(s, e.identifier, o), n, this.lifecycleCallbacks, e.name);
    this.lifecycles.set(e.identifier, a), this.markServerUsed(e.identifier), a.connect(), await a.getConnectPromise();
  }
  stopConnection(e) {
    const t = ge(e), r = this.lifecycles.get(e);
    r && (r.dispose(), this.lifecycles.delete(e)), this.adapters.delete(e), this.rejectAdapterWaiters(e, new Error(`Connection stopped for server "${e}"`)), this.probePromises.delete(e), this.startConnectionPromises.delete(e), this.lastUsedAtMs.delete(e), this.inFlightOps.delete(e), this.lastOfferingsFetchedAtMs.delete(e), this.bumpConnectionGeneration(e), this.lifecycleModulePromise?.then((n) => n.clearRetryAfterCooldown(e)), this.infoServer(e, `stopped connection: ${t}`);
  }
  getClient(e) {
    return this.adapters.get(e)?.client;
  }
  markServerUsed(e) {
    this.lastUsedAtMs.set(e, Date.now());
  }
  async withInFlightOp(e, t) {
    this.inFlightOps.set(e, (this.inFlightOps.get(e) ?? 0) + 1), this.markServerUsed(e);
    try {
      return await t();
    } finally {
      const r = (this.inFlightOps.get(e) ?? 1) - 1;
      r <= 0 ? this.inFlightOps.delete(e) : this.inFlightOps.set(e, r), this.markServerUsed(e);
    }
  }
  isRemoteHttpServer(e) {
    const t = this.lifecycles.get(e)?.getServerInfo().type;
    return t === "streamableHttp" || t === "sse";
  }
  sweepIdleConnections() {
    if (this._store.isDisposed || this.lifecycles.size === 0) return;
    const e = Date.now();
    for (const t of [...this.lifecycles.keys()]) {
      if ((this.inFlightOps.get(t) ?? 0) > 0 || !this.isRemoteHttpServer(t) || !this.registry.getServer(t) || this.startConnectionPromises.has(t)) continue;
      const r = this.lifecycles.get(t);
      if (r?.getConnectionState().type !== "connected") continue;
      const n = this.lastUsedAtMs.get(t) ?? e;
      e - n < UO || (this.infoServer(t, `idle-suspending transport after ${Math.round((e - n) / 1e3)}s idle: ${ge(t)}`), r.suspendTransport());
    }
  }
  getConnectionState(e) {
    return this.lifecycles.get(e)?.getConnectionState();
  }
  getAuthState(e) {
    return this.lifecycles.get(e)?.getAuthState();
  }
  getServerInfo(e, t) {
    return this.lifecycles.get(e)?.getServerInfo() ?? Y4(t);
  }
  async probeConnection(e, t) {
    const r = this.probePromises.get(e);
    if (r) return r;
    const n = this.runProbeConnection(e, t);
    this.probePromises.set(e, n);
    try {
      await n;
    } finally {
      this.probePromises.get(e) === n && this.probePromises.delete(e);
    }
  }
  async runProbeConnection(e, t) {
    const r = ge(e), n = this.lifecycles.get(e);
    if (!n) return;
    const s = n.getConnectionState();
    if (!Zg(s)) {
      this.traceServer(e, `health probe skipped for ${r} in ${s.type}; lifecycle retry will reconnect when eligible`);
      return;
    }
    this.traceServer(e, `health probe: ${r} reason=${t}`), n.enqueue([{ target: "connection", kind: "health_probe_due" }]);
  }
  fastTrackPeriodicReconnect(e, t, r) {
    const n = ge(e), s = this.lifecycles.get(e);
    if (!s) return false;
    const i = s.getConnectionState(), o = s.getAuthState();
    return El(i, o, t) ? (this.traceServer(e, `fast-track periodic reconnect: ${n} reason=${r}`), s.enqueue([{ target: "connection", kind: "connect_start" }]), true) : false;
  }
  resolveAdapterWaiters(e) {
    const t = this.adapterWaiters.get(e);
    if (t) {
      this.adapterWaiters.delete(e);
      for (const r of t) r.resolve();
    }
  }
  rejectAdapterWaiters(e, t) {
    const r = this.adapterWaiters.get(e);
    if (r) {
      this.adapterWaiters.delete(e);
      for (const n of r) n.reject(t);
    }
  }
  createAdapterWaiter(e) {
    if (this.adapters.has(e)) return { promise: Promise.resolve(), dispose: () => {
    } };
    let t;
    return { promise: new Promise((n, s) => {
      t = { resolve: n, reject: s };
      let i = this.adapterWaiters.get(e);
      i || (i = /* @__PURE__ */ new Set(), this.adapterWaiters.set(e, i)), i.add(t);
    }), dispose: () => {
      if (!t) return;
      const n = this.adapterWaiters.get(e);
      n?.delete(t), n?.size === 0 && this.adapterWaiters.delete(e);
    } };
  }
  async waitForConnection(e, t = 1e4) {
    if (this.adapters.has(e)) return;
    const r = this.createAdapterWaiter(e);
    try {
      await OO(r.promise, t, `Timed out waiting for connection to "${e}"`);
    } finally {
      r.dispose();
    }
  }
  async getReadyAdapter(e) {
    if (this.markServerUsed(e), !this.adapters.has(e)) {
      const r = this.lifecycles.get(e);
      r?.getConnectionState().type === "dormant" && (this.infoServer(e, `resuming dormant transport on demand: ${ge(e)}`), r.connect());
    }
    await this.waitForConnection(e);
    const t = this.adapters.get(e);
    if (!t) throw new Error(`No active connection for server "${e}"`);
    return t;
  }
  createLeaseElicitationProvider(e, t, r) {
    return { elicit: async (n) => {
      try {
        return await this.mcpHostEnvironment?.executeCommand("mcp.leaseElicitationRequest", { identifier: e, toolCallId: t, correlationId: r, request: { message: n.message, requestedSchema: n.requestedSchema } }) ?? { action: "decline" };
      } catch (s) {
        return this.warnServer(e, `lease elicitation unavailable for ${ge(e)}: ${s instanceof Error ? s.message : String(s)}`), { action: "decline" };
      }
    } };
  }
  classifyToolCallResult(e, t, r, n) {
    if (!t) return;
    const s = r?.result, i = t.getAuthState(), o = s != null && typeof s.error == "string" && s.content === void 0 ? s.error : void 0, a = tm(o !== void 0 ? { result: void 0, error: new Error(o), authState: i } : { result: s != null ? { content: Array.isArray(s.content) ? s.content : void 0, isError: s.isError === true } : void 0, error: n, authState: i });
    a.length > 0 && t.enqueue(a);
    const c = o ?? (n instanceof Error ? n.message : typeof n == "string" ? n : void 0), l = this.adapters.get(e);
    l && c !== void 0 && LO(c) && (l.invalidateToolsCache(), this._onToolsChanged?.(e));
  }
  maybeRefreshStaleCatalog(e) {
    const t = this.lastOfferingsFetchedAtMs.get(e);
    t === void 0 || Date.now() - t < $O || (this.adapters.get(e)?.invalidateToolsCache(), this._onToolsChanged?.(e));
  }
  isAwaitingInteractiveAuth(e) {
    return this.lifecycles.get(e)?.getAuthState().type === "needsUserAuth";
  }
  async callTool(e, t, r, n = {}) {
    return this.isAwaitingInteractiveAuth(e) ? (this.infoServer(e, `skipping tool call '${t}' while server awaits interactive OAuth: ${ge(e)}`), { result: { error: th } }) : this.withInFlightOp(e, async () => {
      const s = await this.getReadyAdapter(e), i = this.lifecycles.get(e), o = n.toolCallId && n.useLeaseElicitation ? this.createLeaseElicitationProvider(e, n.toolCallId, n.correlationId) : void 0, a = n.toolCallId;
      a && n.callerWindowId && n.callerWorkspaceId && this.toolCallTargets.set(a, { windowId: n.callerWindowId, workspaceId: n.callerWorkspaceId });
      try {
        const c = await s.callToolForUI(t, r, n.toolCallId, o);
        return this.classifyToolCallResult(e, i, c, void 0), this.maybeRefreshStaleCatalog(e), c;
      } catch (c) {
        throw this.classifyToolCallResult(e, i, void 0, c), c;
      } finally {
        a && this.toolCallTargets.delete(a);
      }
    });
  }
  getToolCallTarget(e) {
    return this.toolCallTargets.get(e);
  }
  async listOfferings(e) {
    return this.isAwaitingInteractiveAuth(e) ? (this.infoServer(e, `skipping listOfferings while server awaits interactive OAuth: ${ge(e)}`), { tools: [], resources: [], prompts: [], refreshState: "transient_degraded" }) : this.withInFlightOp(e, async () => {
      const t = await this.getReadyAdapter(e), r = this.lifecycles.get(e), [n, s] = await Promise.all([t.listOfferingsForUI(), t.getInstructionsForUI()]), i = km(n, r?.getServerInfo().type);
      if (r) {
        i.degradedReason && r.enqueue([{ target: "connection", kind: "request_degraded", reason: i.degradedReason }]);
        const o = r.getAuthState(), a = CO(n);
        if (a !== void 0 || i.hasSuccessfulSubCall && o.type !== "expired" && o.type !== "needsUserAuth") {
          const c = rm({ hasResults: i.hasResults, authError: a, authState: o });
          c.length > 0 && r.enqueue(c);
        }
      }
      return this.lastOfferingsFetchedAtMs.set(e, Date.now()), { tools: n.offerings.tools.map((o) => ({ ...o })), resources: n.offerings.resources.map((o) => ({ ...o })), prompts: n.offerings.prompts.map((o) => ({ ...o })), instructions: s.instructions, refreshState: i.wasAborted && !i.hasSuccessfulSubCall ? "aborted" : i.isAuthoritative ? "authoritative" : "transient_degraded" };
    });
  }
  async listToolsRaw(e) {
    return (await this.listOfferings(e)).tools;
  }
  async getInstructions(e) {
    if (this.isAwaitingInteractiveAuth(e)) {
      this.infoServer(e, `skipping getInstructions while server awaits interactive OAuth: ${ge(e)}`);
      return;
    }
    const t = this.adapters.get(e);
    if (t) return (await t.getInstructionsForUI()).instructions;
  }
  async getPrompt(e, t, r) {
    return this.isAwaitingInteractiveAuth(e) ? (this.infoServer(e, `skipping prompt '${t}' while server awaits interactive OAuth: ${ge(e)}`), { error: th }) : this.withInFlightOp(e, async () => (await (await this.getReadyAdapter(e)).getPromptForUI(t, r)).result);
  }
  async readResource(e, t) {
    return this.isAwaitingInteractiveAuth(e) ? (this.infoServer(e, `skipping resource read while server awaits interactive OAuth: ${ge(e)}`), { error: th }) : this.withInFlightOp(e, async () => (await (await this.getReadyAdapter(e)).readResourceForUI(t)).result);
  }
  resolveElicitation(e, t) {
    for (const r of this.lifecycles.values()) if (r.resolveElicitation(e, t)) return true;
    return false;
  }
  getOAuthStorage() {
    if (this.mcpOAuthStore) return { getGlobalState: (e) => this.mcpOAuthStore.getGlobalState(e), updateGlobalState: (e, t) => this.mcpOAuthStore.updateGlobalState(e, t), getSecret: (e) => this.mcpOAuthStore.getSecret(e), setSecret: (e, t) => this.mcpOAuthStore.setSecret(e, t), deleteSecret: (e) => this.mcpOAuthStore.deleteSecret(e), readAttempt: (e) => this.mcpOAuthStore.readAttempt(e), writeAttempt: (e, t) => this.mcpOAuthStore.writeAttempt(e, t), deleteAttempt: (e) => this.mcpOAuthStore.deleteAttempt(e) };
  }
  getLoopbackReturnToCursorUrl() {
    return `${na.urlProtocol ?? "cursor"}://${Da}${Na}`;
  }
  async handleLoopbackOAuthCallback(e) {
    const t = new URLSearchParams(e).get("state"), n = (t ? y4(t) : void 0)?.owner.workspaceId ?? "empty-window";
    return (await this.handleOAuthCallback({ query: e, currentOwner: { workspaceId: n }, redirectUrl: st, authorizationCodeEncoding: "decode-percent-encoded" })).kind === "handled";
  }
  async armCloudMcpOAuthLoopback(e) {
    await this.cancelCloudMcpOAuthLoopback(e);
    try {
      const t = this.getLoopbackReturnToCursorUrl(), r = await F4({ claims: (n) => n === e.state, state: e.state, redirectUrl: st, timeoutMs: SO, registry: B4(), pages: { success: () => Gd(t), error: () => Kd(t) } });
      return this.pendingCloudLoopbackCallbacks.set(e.state, r), r.delivered.catch(() => {
      }), { kind: "armed" };
    } catch (t) {
      return this.logService.warn(`[McpConnectionManager] Failed to arm cloud MCP OAuth loopback: ${t instanceof Error ? t.message : String(t)}`), { kind: "unavailable", reason: "bind_failed", error: t instanceof Error ? t.message : String(t) };
    }
  }
  async awaitCloudMcpOAuthCallback(e) {
    const t = this.pendingCloudLoopbackCallbacks.get(e.state);
    if (!t) return { kind: "failed", reason: "not_armed" };
    try {
      return { kind: "delivered", authorizationCode: (await t.delivered).code };
    } catch (r) {
      const n = r instanceof Error ? r.message : String(r);
      return { kind: "failed", reason: n === Cn ? "superseded" : "timeout", error: n };
    } finally {
      this.pendingCloudLoopbackCallbacks.delete(e.state);
    }
  }
  async cancelCloudMcpOAuthLoopback(e) {
    const t = this.pendingCloudLoopbackCallbacks.get(e.state);
    t && (this.pendingCloudLoopbackCallbacks.delete(e.state), await t.cancel("cloud MCP login cancelled"));
  }
  async handleOAuthCallback(e) {
    const t = this.getOAuthStorage(), r = this.mcpOAuthStore;
    if (!t || !r) return { kind: "notHandled", reason: "attempt_not_found" };
    const n = new URLSearchParams(e.query).get("state");
    if (!n) return { kind: "notHandled", reason: "invalid_state" };
    const s = y4(n);
    if (!s) return { kind: "notHandled", reason: "invalid_state" };
    const i = await kP(t, s, e.currentOwner);
    if (i.kind === "ignored") return { kind: "notHandled", reason: i.reason === "stale_missing_attempt" ? "attempt_not_found" : i.reason, identifier: i.identifier, attemptId: i.attemptId };
    if (i.kind === "error") return { kind: "error", reason: i.reason, identifier: i.identifier, attemptId: i.attemptId };
    const o = CP(e.query, e.authorizationCodeEncoding ?? "preserve-url-encoded");
    if (!o) return { kind: "error", reason: "missing_code", identifier: i.identifier, attemptId: i.attemptState.attemptId };
    const a = (i.attemptState.activeIdentifier !== void 0 ? this.registry.getServer(i.attemptState.activeIdentifier) : void 0) ?? this.registry.getServerByOAuthScopeKey(i.identifier);
    if (!a) return { kind: "notHandled", reason: "attempt_not_found", identifier: i.identifier, attemptId: i.attemptState.attemptId };
    const c = a.definition, l = await this.mcpHostEnvironment?.getDynamicConfigValue("mcp_oauth_sweep_config"), u = typeof l?.refreshLockTtlMs == "number" && l.refreshLockTtlMs > 0 ? l.refreshLockTtlMs : void 0, d = typeof l?.refreshLockMaxHoldMs == "number" && l.refreshLockMaxHoldMs > 0 ? l.refreshLockMaxHoldMs : void 0, f = X4({ host: this.mcpHostEnvironment, identifier: a.identifier, serverUrl: i.serverUrl }), p = await this.mcpHostEnvironment?.getDynamicConfigValue(q4), g = T4({ identifier: i.identifier, serverUrl: i.serverUrl, store: r, profileId: c.profileId, isDefaultProfile: c.isDefaultProfile, refreshLockTtlMs: u, refreshLockMaxHoldMs: d, getDynamicConfigValue: async (_) => await this.mcpHostEnvironment?.getDynamicConfigValue(_), oauthHttpFetchBase: f, oauthHttpClientSurface: "mcp_process", authConfig: c.transport.type === "sse" || c.transport.type === "streamableHttp" ? c.transport.auth : void 0, callbackOwnerWorkspaceId: i.attemptState.owner.workspaceId, processRegistryKey: a.identifier, resolvedConfigHash: c.resolvedConfigHash, oauthAttemptId: i.attemptState.attemptId, attemptClientInformation: i.attemptState.clientInformation, redirectUrl: gS(n) === st ? pi : e.redirectUrl === void 0 ? void 0 : await sa({ serverUrl: i.serverUrl, redirectUrl: e.redirectUrl, fetchImpl: f, ipv4Hosts: p?.ipv4Hosts }), onNeedsAuth: (_) => {
      this.registry.updateStatus(a.identifier, { type: "needsAuth", authorizationUrl: _ });
    }, onTokensSaved: () => {
    } });
    try {
      await OP({ provider: g, transportServerUrl: i.transportServerUrl, authorizationCode: o, persistedAuthorizationServerUrl: i.attemptState.authorizationServerUrl }), await g.clearOAuthAttemptState(i.attemptState.attemptId);
      try {
        const _ = await g.tokens();
        me({ identifier: i.identifier, event: "mcp_oauth_callback_completion", fields: { ...yf(_), ...Sf(i.serverUrl) } });
      } catch (_) {
        this.warnServer(a.identifier, `OAuth callback token snapshot failed after successful exchange: ${_ instanceof Error ? _.message : String(_)}`);
      }
      return this.registry.reload(a.identifier, c), { kind: "handled", identifier: a.identifier };
    } catch (_) {
      const y = _ instanceof Error ? _.message : String(_);
      return this.warnServer(a.identifier, `OAuth callback exchange failed for ${ge(i.identifier)}: ${y}`), this.registry.updateStatus(a.identifier, { type: "error", error: `OAuth token exchange failed: ${y}` }), await g.clearOAuthAttemptState(i.attemptState.attemptId).catch((m) => {
        this.warnServer(a.identifier, `OAuth callback cleanup failed for ${ge(i.identifier)}: ${m instanceof Error ? m.message : String(m)}`);
      }), { kind: "error", reason: "exchange_failed", identifier: i.identifier, attemptId: i.attemptState.attemptId, error: y };
    }
  }
  dispose() {
    uO(), this.pendingCloudLoopbackCallbacks.clear();
    for (const e of [...this.lifecycles.keys()]) this.stopConnection(e);
    for (const e of [...this.adapterWaiters.keys()]) this.rejectAdapterWaiters(e, new Error(`Connection manager disposed while waiting for server "${e}"`));
    this.lifecycles.clear(), this.adapters.clear(), this.probePromises.clear(), this.startConnectionPromises.clear(), this.connectionGenerations.clear(), super.dispose();
  }
};
h(), h();
import { createFetchPatch as HO, createProxyResolver as BO, LogLevel as Ln } from "@vscode/proxy-agent";
function zO(e) {
  switch (e.getLevel()) {
    case 0:
      return Ln.Trace;
    case 1:
      return Ln.Debug;
    case 2:
      return Ln.Info;
    case 3:
      return Ln.Warning;
    case 4:
      return Ln.Error;
    default:
      return Ln.Off;
  }
}
function WO(e) {
  if (!(e === void 0 || e.length === 0)) return /^Negotiate /i.test(e) ? e : `Negotiate ${e}`;
}
function GO(e) {
  const t = {}, r = {};
  return async (n, s, i) => {
    const o = t[n];
    s !== void 0 && (t[n] = s);
    const a = s ?? o, c = Array.isArray(a) ? a : typeof a == "string" ? [a] : [];
    if (c.some((u) => /^(Negotiate|Kerberos)( |$)/i.test(u)) && !i.kerberosRequested) {
      i.kerberosRequested = true;
      try {
        return WO(await e.proxyService.lookupKerberosAuthorization(n));
      } catch (u) {
        e.logService.debug(`[McpProxyFetch] Kerberos proxy authorization failed: ${u instanceof Error ? u.message : String(u)}`);
      }
    }
    const l = c.find((u) => /^Basic( |$)/i.test(u));
    if (l !== void 0) {
      const u = r[n];
      if (u !== void 0 && !i.basicAuthCacheUsed) return i.basicAuthCacheUsed = true, u;
      i.basicAuthCacheUsed && delete r[n], i.basicAuthAttempt = (i.basicAuthAttempt ?? 0) + 1;
      const d = / realm="([^"]+)"/i.exec(l)?.[1] ?? "", f = new URL(n), p = { scheme: "basic", host: f.hostname, port: Number(f.port), realm: d, isProxy: true, attempt: i.basicAuthAttempt }, g = await e.proxyService.lookupAuthorization(p);
      if (g !== void 0) {
        const _ = `Basic ${Buffer.from(`${g.username}:${g.password}`).toString("base64")}`;
        return r[n] = _, _;
      }
    }
  };
}
var J4 = /* @__PURE__ */ new WeakMap();
function KO(e, t) {
  let r = J4.get(e);
  return r === void 0 && (r = GO({ proxyService: e, logService: t }), J4.set(e, r)), r;
}
function qO(e) {
  return { resolveProxy: (t) => e.proxyService.resolveProxy({ windowId: e.ownerWindowId, url: t }), lookupProxyAuthorization: KO(e.proxyService, e.logService), getProxyURL: () => e.getConfig()?.proxyUrl, getProxySupport: () => e.getConfig()?.proxySupport ?? "override", getNoProxyConfig: () => {
    const t = e.getConfig()?.noProxy;
    return t !== void 0 ? [...t] : [];
  }, isAdditionalFetchSupportEnabled: () => e.getConfig()?.fetchAdditionalSupport ?? true, isWebSocketPatchEnabled: () => false, addCertificatesV1: () => e.getConfig()?.systemCertificates ?? true, addCertificatesV2: () => e.getConfig()?.experimentalSystemCertificatesV2 ?? false, loadSystemCertificatesFromNode: () => false, log: e.logService, getLogLevel: () => zO(e.logService), proxyResolveTelemetry: () => {
  }, isUseHostProxyEnabled: () => e.getConfig()?.useHostProxy ?? true, loadAdditionalCertificates: () => e.proxyService.loadCertificates(), env: process.env };
}
function jO(e, t, r, n, s) {
  s.info(`[McpProxyFetch] Built VS Code proxy-aware MCP fetch for ${e.identifier} (origin: ${_f(e.serverUrl, { includePath: false }).origin ?? "<unknown>"}, ownerWindowId: ${t ?? "<none>"})`);
  let i;
  const o = qO({ ownerWindowId: t, getConfig: () => i, proxyService: n, logService: s }), { resolveProxyURL: a } = BO(o), l = HO(o, (u, d) => globalThis.fetch(u, d), a);
  return async (u, d) => (i = await n.getProxyConfig(), i.fetchAdditionalSupport ? l(u, d) : r(u, d));
}
h();
var Z4 = { action: "decline" };
function rh(e) {
  for (const t of e) {
    if (typeof t != "object" || t === null) continue;
    const r = t;
    if (typeof r.request?.id == "string") return r.request.id;
  }
}
function VO(e) {
  return async (t, r, n) => {
    if (r === "mcp.progressNotification") {
      try {
        await e.commandBridgeService.routeProgressNotification(t, n[0]);
      } catch (s) {
        e.logService.warn(`[McpProcessMain] progress notification bridge failed for ${t.identifier}: ${s instanceof Error ? s.message : String(s)}`);
      }
      return;
    }
    if (r === "mcp.elicitationRequest") {
      const s = rh(n);
      try {
        const i = await e.commandBridgeService.routeElicitationRequest(t, n[0]);
        return s && e.getElicitationResolver()?.resolveElicitation(s, i), i;
      } catch (i) {
        e.logService.warn(`[McpProcessMain] elicitation request bridge failed for ${t.identifier}: ${i instanceof Error ? i.message : String(i)}`), s && e.getElicitationResolver()?.resolveElicitation(s, Z4);
        return;
      }
    }
    if (r === "mcp.leaseElicitationRequest") try {
      return await e.commandBridgeService.routeLeaseElicitationRequest(t, n[0]);
    } catch (s) {
      return e.logService.warn(`[McpProcessMain] lease elicitation request bridge failed for ${t.identifier}: ${s instanceof Error ? s.message : String(s)}`), Z4;
    }
    if (r === "mcp.cursorAccessToken") {
      const s = n[0];
      if (typeof s?.serverIdentifier != "string") throw new Error("Origin MCP access-token request is missing its server identifier");
      if (typeof s.serverUrl != "string") throw new Error("Origin MCP access-token request is missing its server URL");
      const i = { serverIdentifier: s.serverIdentifier, serverUrl: s.serverUrl };
      return await e.commandBridgeService.routeCursorAccessToken(t, i);
    }
    throw new Error(`MCP process command bridge is not wired for ${r}`);
  };
}
var YO = /* @__PURE__ */ new Set(["mcp.progressNotification", "mcp.elicitationRequest", "mcp.leaseElicitationRequest", "mcp.cursorAccessToken"]);
function XO(e, t) {
  if (t?.redirect === "manual" || t?.integrity) return false;
  const r = typeof e == "string" ? e : e instanceof URL ? e.toString() : e.url;
  return !r.startsWith("data:") && !r.startsWith("blob:");
}
function Q4(e, t) {
  return typeof e == "string" ? e : e instanceof URL ? t ? e.toString() : e : e.url;
}
async function JO() {
  try {
    const { net: e } = await import("electron");
    return e.fetch.bind(e);
  } catch {
    return;
  }
}
var e2 = "net::ERR_SSL_CLIENT_AUTH_CERT_NEEDED", ZO = 5;
function QO(e) {
  let t = e;
  for (let r = 0; t instanceof Error && r < ZO; r++) {
    if (t.message.includes(e2)) return true;
    t = t.cause;
  }
  return false;
}
function eC(e) {
  const t = e?.body;
  return t == null || typeof t == "string" || t instanceof URLSearchParams || t instanceof ArrayBuffer || ArrayBuffer.isView(t);
}
function tC(e) {
  return async (t, r) => {
    try {
      return await e.electronFetch(Q4(t, true), r);
    } catch (n) {
      if (!QO(n) || !eC(r)) throw n;
      return e.logService.info(`[McpProcessHostEnvironment] Electron net.fetch failed with ${e2}; retrying over Node fetch`), e.nodeFetch(t, r);
    }
  };
}
function t2(e) {
  const t = (s, i) => globalThis.fetch(Q4(s, false), i);
  let r;
  const n = async () => {
    const s = await JO();
    if (s) return tC({ electronFetch: s, nodeFetch: t, logService: e });
  };
  return async (s, i) => {
    if (XO(s, i)) {
      r ??= n();
      const o = await r;
      if (o) return o(s, i);
      e.trace("[McpProcessHostEnvironment] Electron net.fetch unavailable; using global fetch");
    }
    return t(s, i);
  };
}
function r2(e) {
  return { name: gA(e) || e, uri: { fsPath: e, toString: () => e } };
}
function rC() {
  const e = {};
  for (const [t, r] of Object.entries(process.env)) typeof r == "string" && (e[t] = r);
  return e;
}
function nC(e) {
  for (const t of e) {
    if (typeof t != "object" || t === null) continue;
    const r = t;
    if (typeof r.toolCallId == "string") return r.toolCallId;
    if (typeof r.request?.toolCallId == "string") return r.request.toolCallId;
  }
}
function sC(e) {
  for (const t of e) {
    if (typeof t != "object" || t === null) continue;
    const r = t;
    if (typeof r.identifier == "string") return r.identifier;
    if (typeof r.serverIdentifier == "string") return r.serverIdentifier;
    if (typeof r.request?.serverIdentifier == "string") return r.request.serverIdentifier;
  }
}
var iC = class {
  constructor(e) {
    this.options = e, this.trustedMcpNetworkControlsConfigs = /* @__PURE__ */ new Map(), this.globalStateCache = /* @__PURE__ */ new Map(), this.localSecrets = /* @__PURE__ */ new Map(), this.localAttempts = /* @__PURE__ */ new Map(), this.localDiskKV = /* @__PURE__ */ new Map(), this.mcpSharedOAuth = { get: async () => [], store: async () => ({ applied: false, skippedBecauseBackendNewer: false }), delete: async () => {
    }, notifyStateChanged: async () => {
    }, refreshLockBegin: async () => ({ outcome: "skipped", enforce: false }), refreshLockRelease: async () => {
    } }, this.fetch = e.fetch ?? t2(e.logService), this.oauthContext = this.createOAuthContext(), this.refreshGlobalStateKeys();
  }
  getWorkspaceFolders() {
    const e = /* @__PURE__ */ new Map();
    for (const t of this.options.registry.getActiveServers()) {
      const r = this.options.registry.getServer(t)?.definition;
      if (r) {
        r.projectFsPath && !e.has(r.projectFsPath) && e.set(r.projectFsPath, r2(r.projectFsPath));
        for (const n of r.workspaceFolderFsPaths ?? []) e.has(n) || e.set(n, r2(n));
      }
    }
    return Array.from(e.values());
  }
  getAppRoot() {
    return this.options.appRoot;
  }
  isGlass() {
    return this.options.isGlass ?? true;
  }
  isRemote() {
    return this.options.isRemote ?? false;
  }
  getSpawnEnv() {
    return { ...this.options.stdioSpawnEnv ?? rC() };
  }
  getMcpPolicyTargetIdentifier(e) {
    return ge(e);
  }
  createHttpFetch(e) {
    if (!this.options.proxyService) return;
    const t = this.options.registry.getFirstSubscriber(e.identifier);
    return jO(e, t?.windowId, this.fetch, this.options.proxyService, this.options.logService);
  }
  async executeCommand(e, ...t) {
    if (!YO.has(e)) throw new Error(`MCP process host command is not supported: ${e}`);
    if (!this.options.executeCommandBridge) {
      if (e === "mcp.leaseElicitationRequest") return { action: "decline" };
      if (e === "mcp.elicitationRequest") {
        const n = rh(t);
        if (n) {
          this.options.onUnsupportedElicitationRequest?.(n);
          return;
        }
      }
      throw new Error(`MCP process host command bridge is not wired: ${e}`);
    }
    let r;
    try {
      r = this.resolveCommandTarget(t);
    } catch (n) {
      if (e === "mcp.progressNotification") {
        this.options.logService.warn(`[McpProcessHostEnvironment] dropping progress notification without a command target: ${n instanceof Error ? n.message : String(n)}`);
        return;
      }
      if (e === "mcp.elicitationRequest") {
        const s = rh(t);
        if (s) {
          this.options.onUnsupportedElicitationRequest?.(s);
          return;
        }
      }
      if (e === "mcp.leaseElicitationRequest") return { action: "decline" };
      throw n;
    }
    return this.options.executeCommandBridge(r, e, t);
  }
  async checkFeatureGate(e) {
    try {
      return await this.options.checkFeatureGate?.(e) ?? false;
    } catch (t) {
      return this.options.logService.warn(`[McpProcessHostEnvironment] feature gate check failed for ${e}:`, t), false;
    }
  }
  async getDynamicConfigValue(e) {
    try {
      return await this.options.getDynamicConfigValue?.(e);
    } catch (t) {
      this.options.logService.warn(`[McpProcessHostEnvironment] dynamic config read failed for ${e}:`, t);
      return;
    }
  }
  createEventEmitter() {
    const e = new j();
    return { event: (t) => e.event(t), fire: (t) => e.fire(t), dispose: () => e.dispose() };
  }
  getOAuthContext() {
    return this.oauthContext;
  }
  pushMcpSnapshots(e) {
    this.options.pushMcpSnapshots?.(e.map((t) => ({ ...t })));
  }
  async getMcpNetworkControlsConfig(e) {
    const t = JSON.stringify({ command: e?.command ?? "", url: e?.url ?? "" });
    try {
      const r = await this.options.getMcpNetworkControlsConfig?.(e) ?? {};
      return this.trustedMcpNetworkControlsConfigs.set(t, r), r;
    } catch (r) {
      this.options.logService.warn(`[McpProcessHostEnvironment] network-controls config read failed: ${r instanceof Error ? r.message : String(r)}`);
      const n = this.trustedMcpNetworkControlsConfigs.get(t);
      if (n !== void 0) return n;
      throw r;
    }
  }
  resolveCommandTarget(e) {
    const t = sC(e), r = this.options.registry.getActiveServers();
    if (!t && r.length !== 1) throw new Error("MCP process host command requires an explicit server target");
    const n = t ?? r[0];
    if (!n) throw new Error("MCP process host command has no active server target");
    const s = nC(e);
    if (s) {
      const o = this.options.resolveToolCallTarget?.(s);
      if (o) return { identifier: n, windowId: o.windowId, workspaceId: o.workspaceId };
    }
    const i = this.options.registry.getFirstSubscriber(n);
    if (!i) throw new Error(`MCP process host command has no subscriber for ${n}`);
    return { identifier: n, windowId: i.windowId, workspaceId: i.workspaceId };
  }
  createOAuthContext() {
    const e = { get: (r) => this.globalStateCache.get(r), update: async (r, n) => {
      n === void 0 ? this.globalStateCache.delete(r) : this.globalStateCache.set(r, n), await this.options.mcpOAuthStore?.updateGlobalState(r, n), await this.refreshGlobalStateKeys();
    }, keys: () => Array.from(this.globalStateCache.keys()) }, t = { get: async (r) => this.options.mcpOAuthStore ? await this.options.mcpOAuthStore.getSecret(r) : this.localSecrets.get(r), getFallback: async (r) => t.get(r), store: async (r, n) => {
      this.localSecrets.set(r, n), await this.options.mcpOAuthStore?.setSecret(r, n);
    }, delete: async (r) => {
      this.localSecrets.delete(r), await this.options.mcpOAuthStore?.deleteSecret(r);
    }, deleteFallback: async (r) => t.delete(r) };
    return { globalState: e, secrets: t, oauthAttempts: { readAttempt: async (r) => this.options.mcpOAuthStore ? await this.options.mcpOAuthStore.readAttempt(r) : this.localAttempts.get(r), writeAttempt: async (r, n) => {
      this.localAttempts.set(r, n), await this.options.mcpOAuthStore?.writeAttempt(r, n);
    }, deleteAttempt: async (r) => {
      this.localAttempts.delete(r), await this.options.mcpOAuthStore?.deleteAttempt(r);
    }, listAttempts: async () => this.options.mcpOAuthStore ? await this.options.mcpOAuthStore.listAttempts() : Array.from(this.localAttempts.values()), sweepStaleAttempts: async (r) => this.options.mcpOAuthStore ? await this.options.mcpOAuthStore.sweepStaleAttempts(r) : [] }, getDynamicConfigValue: (r) => this.getDynamicConfigValue(r), diskKVSetIfAbsent: async (r, n) => this.options.mcpOAuthStore ? await this.options.mcpOAuthStore.diskKVSetIfAbsent(r, n) : this.localDiskKV.has(r) ? false : (this.localDiskKV.set(r, n), true), diskKVReplaceIfEquals: async (r, n, s) => this.options.mcpOAuthStore ? await this.options.mcpOAuthStore.diskKVReplaceIfEquals(r, n, s) : this.localDiskKV.get(r) !== n ? false : (this.localDiskKV.set(r, s), true), diskKVDelete: async (r, n) => {
      if (this.options.mcpOAuthStore) {
        await this.options.mcpOAuthStore.diskKVDelete(r, n);
        return;
      }
      (n === void 0 || this.localDiskKV.get(r) === n) && this.localDiskKV.delete(r);
    }, diskKVGet: async (r) => this.options.mcpOAuthStore ? await this.options.mcpOAuthStore.diskKVGet(r) : this.localDiskKV.get(r) };
  }
  async refreshGlobalStateKeys() {
    if (this.options.mcpOAuthStore) try {
      const e = await this.options.mcpOAuthStore.getGlobalStateKeys(), t = new Set(e);
      for (const r of this.globalStateCache.keys()) t.has(r) || this.globalStateCache.delete(r);
      await Promise.all(e.map(async (r) => {
        const n = await this.options.mcpOAuthStore?.getGlobalState(r);
        n !== void 0 ? this.globalStateCache.set(r, n) : this.globalStateCache.delete(r);
      }));
    } catch (e) {
      this.options.logService.warn("[McpProcessHostEnvironment] failed to refresh OAuth global state keys:", e);
    }
  }
};
h();
function Zs(e, t) {
  const r = ge(e), n = Zd(e), s = r === n ? t : t.replaceAll(r, n);
  return Cr(s);
}
function nh(e, t) {
  if (typeof t == "string") return Zs(e, t);
  if (Array.isArray(t)) return t.map((r) => nh(e, r));
  if (t && typeof t == "object") {
    const r = {};
    for (const [n, s] of Object.entries(t)) r[n] = nh(e, s);
    return r;
  }
  return t;
}
function oC(e, t) {
  return t ? nh(e, t) : {};
}
var aC = class extends Ce {
  constructor(e, t, r) {
    super(), this.logService = e, this.loggerService = t, this.structuredLogService = r, this.serverLoggers = /* @__PURE__ */ new Map();
  }
  getLogger(e) {
    const t = this.getServerLogger(e), r = (n, s, i, o, a) => {
      if (a?.localOnly) return;
      const c = i ? { name: Zs(e, i.name), message: Zs(e, i.message), stack: i.stack ? Zs(e, i.stack) : void 0 } : void 0;
      this.structuredLogService.log({ level: n, key: G4, message: Zs(e, s), metadata: K4(e, { event: "mcp_core_logger", ...oC(e, o) }), error: c }).catch(() => {
      });
    };
    return { info: (n, s, i) => {
      this.logService.info(n), t.info(n), r("info", n, void 0, s, i);
    }, warn: (n, s, i) => {
      this.logService.warn(n), t.warn(n), r("warn", n, void 0, s, i);
    }, error: (n, s, i, o) => {
      this.logService.error(n, s), t.error(n, s), r("error", n, s, i, o);
    }, debug: (n, s, i) => {
      this.logService.debug(n), t.debug(n);
    }, trace: (n, s, i) => {
      this.logService.trace(n), t.trace(n);
    } };
  }
  getServerLogger(e) {
    let t = this.serverLoggers.get(e);
    return t || (t = this._register(this.loggerService.createLogger(Qd(e), { name: "Shared MCP process", group: z4(e) })), this.serverLoggers.set(e, t)), t;
  }
};
h();
var cC = class {
  routeCall(e, t, r) {
    return this.route(e, r);
  }
  routeEvent(e, t, r) {
    return this.route(e, r);
  }
  async route(e, t) {
    const r = Array.isArray(t) ? t[0] : void 0;
    if (typeof r?.windowId != "string") throw new Error("Cannot route MCP process command without a target window");
    const n = `window:${r.windowId}`, s = e.connections.find((i) => i.ctx === n);
    if (!s) throw new Error(`MCP process command target ${n} is disconnected`);
    return s;
  }
};
h();
var lC = class extends Ce {
  constructor(e, t, r, n, s) {
    super(), this.networkControlsService = e, this.serverService = t, this.registry = r, this.connectionManager = n, this.logService = s, this.initialize();
  }
  async initialize() {
    try {
      this.sandboxPolicyFingerprint = await this.computeActiveStdioSandboxPolicyFingerprint();
    } catch (e) {
      this.logService.warn(`[McpProcessSandboxPolicyRevocation] failed to seed network-controls fingerprint: ${e instanceof Error ? e.message : String(e)}`);
    }
    this._store.isDisposed || this._register(this.networkControlsService.onDidChange(() => {
      this.handleSandboxPolicyChange();
    }));
  }
  async handleSandboxPolicyChange() {
    let e;
    try {
      e = await this.computeActiveStdioSandboxPolicyFingerprint();
    } catch (n) {
      this.logService.warn(`[McpProcessSandboxPolicyRevocation] failed to read network-controls config: ${n instanceof Error ? n.message : String(n)}`);
      return;
    }
    const t = this.sandboxPolicyFingerprint;
    if (this.sandboxPolicyFingerprint = e, t === e) return;
    this.logService.info("[McpProcessSandboxPolicyRevocation] MCP network-controls sandbox policy changed; reloading stdio servers");
    const r = "config_changed";
    for (const n of this.registry.getActiveServers()) {
      const s = this.registry.getServer(n);
      if (!(!s || this.connectionManager.getServerInfo(n, s.definition).type !== "stdio")) try {
        await this.serverService.reload(n, s.definition, r);
      } catch (o) {
        this.logService.warn(`[McpProcessSandboxPolicyRevocation] reload failed for ${n}: ${o instanceof Error ? o.message : String(o)}`);
      }
    }
  }
  async computeActiveStdioSandboxPolicyFingerprint() {
    const e = [];
    for (const t of this.registry.getActiveServers()) {
      const r = this.registry.getServer(t);
      if (!r || this.connectionManager.getServerInfo(t, r.definition).type !== "stdio") continue;
      const s = await this.networkControlsService.getMcpNetworkControlsConfig(this.toNetworkControlsServer(r.definition));
      e.push({ identifier: t, configFingerprint: Cg(s) });
    }
    return JSON.stringify(e);
  }
  toNetworkControlsServer(e) {
    if (e.transport.type !== "stdio") return {};
    const t = e.transport.args ?? [];
    return { command: t.length > 0 ? `${e.transport.command} ${t.join(" ")}` : e.transport.command };
  }
};
h();
var uC = 3, dC = 250;
function hC(e) {
  return e instanceof Error ? e.message.includes("timed out after") || e.name.includes("Unknown channel") : false;
}
async function sh(e, t = {}) {
  const r = t.maxAttempts ?? uC, n = t.retryDelayMs ?? dC;
  let s;
  for (let i = 1; i <= r; i++) try {
    return await e();
  } catch (o) {
    if (s = o, !hC(o) || i === r) throw o;
    await rv(n);
  }
  throw s;
}
h(), ds();
function fC(e, t, r = { configureRipgrepPath: Xp, configureSandboxPrereqs: D1, isRipgrepConfigured: Zp }) {
  if (t.ripgrepBinaryPath && !r.isRipgrepConfigured()) try {
    r.configureRipgrepPath(t.ripgrepBinaryPath);
  } catch (n) {
    e.warn(`[McpProcessMain] Failed to configure ripgrep path for sandboxing: ${n instanceof Error ? n.message : String(n)}`);
  }
  if (!t.sandboxHelperBinaryPath) {
    e.warn("[McpProcessMain] Sandbox helper binary path not provided; sandboxed stdio MCP servers will be unavailable when MCP Network Controls are enabled");
    return;
  }
  try {
    r.configureSandboxPrereqs({ sandboxBinaryPath: t.sandboxHelperBinaryPath }), e.info(`[McpProcessMain] Sandbox configured: binary=${t.sandboxHelperBinaryPath}`);
  } catch (n) {
    e.warn(`[McpProcessMain] Failed to configure sandbox prerequisites: ${n instanceof Error ? n.message : String(n)}`);
  }
}
var n2 = Date.now(), pC = 5 * 6e4;
function gC(e) {
  if (!e) return;
  const t = {};
  for (const [r, n] of Object.entries(e)) (typeof n == "string" || typeof n == "number" || typeof n == "boolean" || n === null) && (t[r] = n);
  return t;
}
function nt(e, t, r) {
  const n = { type: RI, phase: e, elapsedMs: Date.now() - n2, timestampMs: Date.now(), message: r, data: gC(t) };
  process.parentPort.postMessage(n);
}
nt(Xe.entrypointLoaded);
var _C = class {
  constructor(e) {
    this._restartCount = e, this._coldStartDurationMs = void 0;
  }
  latchColdStartDuration() {
    this._coldStartDurationMs === void 0 && (this._coldStartDurationMs = Date.now() - n2);
  }
  async ping() {
    return "pong";
  }
  async getVersion() {
    return na.version ?? "dev";
  }
  async getStartupTimingMs() {
    return this._coldStartDurationMs ?? -1;
  }
  async getRestartCount() {
    return this._restartCount;
  }
}, mC = class extends Ce {
  constructor(e) {
    super(), this.configuration = e, this.server = this._register(new u3(this)), this.onDidWindowConnectRaw = this._register(new j()), this.registerListeners();
  }
  registerListeners() {
    let e = false;
    const t = () => {
      e || (e = true, this.dispose());
    };
    process.once("exit", t), d3(process.parentPort, ra.exit, t);
  }
  async init() {
    nt(Xe.initServicesStart);
    const e = await this.initServices();
    return nt(Xe.initServicesEnd), e.invokeFunction((t) => {
      const r = t.get(Ir), { args: n, stdioSpawnEnv: s, ...i } = this.configuration;
      r.trace("[McpProcessMain] configuration", JSON.stringify(i)), fC(r, { sandboxHelperBinaryPath: this.configuration.sandboxHelperBinaryPath, ripgrepBinaryPath: this.configuration.ripgrepBinaryPath }), nt(Xe.initChannelsStart);
      const o = this.initChannels(t);
      return nt(Xe.initChannelsEnd), this.registerErrorHandler(r), o;
    });
  }
  async initServices() {
    const e = new Tv(), t = { _serviceBrand: void 0, ...na };
    e.set(kI, t);
    const r = new Co((u) => u === "main"), n = new V3(this.server, r);
    e.set(Iv, n);
    const s = new FI(this.configuration.args, t);
    e.set(i4, s);
    const i = new z3(void 0, this.configuration.logLevel, s.logsHome, this.configuration.loggers.map((u) => ({ ...u, resource: re.revive(u.resource) })), n.getChannel("logger"));
    e.set(Ev, i);
    const o = i.createLogger("mcpprocess", { name: we(176, null) }), a = this._register(new EI(o)), c = this._register(new N3(a.getLevel())), l = this._register(new B3(a, [c]));
    return e.set(Ir, l), new j3(e);
  }
  initChannels(e) {
    const t = e.get(Ir), r = e.get(Ev), n = e.get(i4), s = new _C(this.configuration.restartCount), i = et.fromService(s, this._store);
    this.server.registerChannel(bt.diagnostics, i);
    const o = this._register(new sP()), a = e.get(Iv), c = et.toService(a.getChannel(AI)), l = et.toService(this.server.getChannel(bt.structuredLogs, new Co((P) => P.startsWith("window:")))), u = et.toService(this.server.getChannel(bt.experiments, new Co((P) => P.startsWith("window:")))), d = et.toService(this.server.getChannel(bt.networkControls, new Co((P) => P.startsWith("window:")))), f = et.toService(a.getChannel(bt.proxy)), p = et.toService(this.server.getChannel(bt.commandBridge, new cC()));
    $S(this._register(new aC(t, r, l)));
    const g = { current: void 0 }, _ = { current: void 0 }, y = { current: void 0 }, m = new iC({ registry: o, mcpOAuthStore: c, proxyService: f, logService: t, appRoot: n.appRoot, isGlass: true, isRemote: false, executeCommandBridge: VO({ commandBridgeService: p, logService: t, getElicitationResolver: () => y.current }), resolveToolCallTarget: (P) => y.current?.getToolCallTarget(P), onUnsupportedElicitationRequest: (P) => y.current?.resolveElicitation(P, { action: "decline" }), checkFeatureGate: async (P) => {
      try {
        return await sh(() => u.checkFeatureGate(P));
      } catch (T) {
        return t.warn(`[McpProcessMain] feature gate bridge failed for ${P}: ${T instanceof Error ? T.message : String(T)}`), false;
      }
    }, getDynamicConfigValue: async (P) => {
      try {
        return await sh(() => u.getDynamicConfigValue(P));
      } catch (T) {
        t.warn(`[McpProcessMain] dynamic config bridge failed for ${P}: ${T instanceof Error ? T.message : String(T)}`);
        return;
      }
    }, pushMcpSnapshots: (P) => _.current?.pushSnapshots(P), fetch: t2(t), stdioSpawnEnv: this.configuration.stdioSpawnEnv, getMcpNetworkControlsConfig: async (P) => sh(() => d.getMcpNetworkControlsConfig(P)) });
    let A;
    const S = () => {
      A === void 0 && (A = m.getDynamicConfigValue("mcp_reconnect_config").then((P) => {
        Dg(P);
      }, (P) => {
        t.warn(`[McpProcessMain] dynamic config refresh failed for mcp_reconnect_config: ${P instanceof Error ? P.message : String(P)}`);
      }).finally(() => {
        A = void 0;
      }));
    };
    S();
    const v = setInterval(S, pC);
    this._register(rr(() => clearInterval(v)));
    const b = this._register(new FO(o, t, c, (P) => {
      g.current?.notifyToolsChanged(P), _.current?.notifyToolsChanged(P);
    }, r, l, m));
    y.current = b;
    const I = this._register(e.get(Lo).createInstance(Md, o, b, c)), O = et.fromService(I, this._store);
    this.server.registerChannel(bt.servers, O), this._register(new lC(d, I, o, b, t));
    const M = this._register(e.get(Lo).createInstance(Dd, o)), F = et.fromService(M, this._store);
    this.server.registerChannel(bt.lifecycle, F);
    const H = this._register(e.get(Lo).createInstance(Nd, o, b));
    _.current = H;
    const ee = et.fromService(H, this._store);
    this.server.registerChannel(bt.snapshots, ee);
    const Y = this._register(new Ud(b, t));
    g.current = Y;
    const B = et.fromService(Y, this._store);
    return this.server.registerChannel(bt.tools, B), s;
  }
  registerErrorHandler(e) {
    process.on("uncaughtException", (t) => Ct(t)), process.on("unhandledRejection", (t) => Ct(t)), W8((t) => {
      const r = uo(t, true);
      r && e.error(`[uncaught exception in mcpProcess]: ${r}`);
    });
  }
  handledClientConnection(e) {
    if (e.data !== TI.response) return false;
    const t = e.ports.at(0);
    return t ? (this.onDidWindowConnectRaw.fire(t), true) : false;
  }
};
async function s2(e) {
  try {
    nt(Xe.mainEntered, { restartCount: e.restartCount, coldStartTimeoutMs: e.runtimeConfig.coldStartTimeoutMs, loggerCount: e.loggers.length, profileCount: e.profiles.all.length, logLevel: e.logLevel });
    const t = new mC(e);
    nt(Xe.beforeIpcReady), process.parentPort.postMessage(ra.ipcReady), nt(Xe.afterIpcReady), (await t.init()).latchColdStartDuration(), nt(Xe.beforeInitDone), process.parentPort.postMessage(ra.initDone), nt(Xe.afterInitDone);
  } catch (t) {
    const r = t instanceof Error ? t.message : String(t);
    nt(Xe.initFailed, void 0, r);
    const n = { type: ra.initFailed, error: r };
    process.parentPort.postMessage(n), process.exit(1);
  }
}
var vC = setTimeout(() => {
  process.parentPort.postMessage({ warning: "[McpProcess] did not receive configuration within 30s..." });
}, 3e4);
nt(Xe.configWaitStarted), process.parentPort.once("message", (e) => {
  clearTimeout(vC), nt(Xe.configReceived, { hasConfig: e.data !== void 0 }), s2(e.data);
});
export { s2 as main };
