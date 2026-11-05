// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3080 range:240288..244120
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3080: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { U: () => f });
    const n2 = /* @__PURE__ */ new Set(["access_not_configured", "admin_policy_enforced", "policy_enforced"]), o2 = /* @__PURE__ */ new Set(["invalid_grant", "interaction_required", "unauthorized_client"]), s2 = /* @__PURE__ */ new Set(["50105", "53000", "53001", "53002", "53003", "53004", "530032", "90094", "7000112"]), i2 = "missing or unknown user", a2 = /* @__PURE__ */ new Set(["InvalidGrantError", "InvalidRequestError"]), c = /^http 4\d\d: invalid oauth error response\b.*\braw body: (.*)$/s, u = [{ reason: "refresh_token_does_not_exist", needle: "no such refresh token" }, { reason: "refresh_token_does_not_exist", needle: "refresh token not found" }, { reason: "refresh_token_invalid", needle: "refresh token is invalid" }], l = [{ reason: "client_id_mismatch", needle: "client id mismatch" }, { reason: "client_id_mismatch", needle: "client_id mismatch" }, { reason: "issued_to_different_client", needle: "issued to different client" }, { reason: "issued_to_different_client", needle: "issued to another client" }, { reason: "grant_not_found", needle: "grant not found" }, { reason: "refresh_token_revoked", needle: "has been revoked" }, { reason: "refresh_token_revoked", needle: "token revoked" }, { reason: "refresh_token_does_not_exist", needle: "refresh token does not exist" }, { reason: "refresh_token_expired", needle: "token has expired" }, { reason: "refresh_token_expired", needle: "token is expired" }, { reason: "refresh_token_expired", needle: "token expired" }, { reason: "refresh_token_invalid", needle: "token was invalid" }, { reason: "refresh_token_invalid", needle: "token is invalid" }], d = ["invalid refresh token", "refresh token is invalid", "invalid or expired refresh token", "failed to refresh token", "invalid_grant"];
    function p(e3) {
      const { code: t3, message: r3 } = e3;
      if (void 0 !== t3) return n2.has(t3) ? { reason: "admin_blocked", matchedMessage: t3 } : o2.has(t3) ? (function(e4) {
        const t4 = /^aadsts(\d+)\b/.exec(e4)?.[1];
        return void 0 !== t4 && s2.has(t4) ? { reason: "admin_blocked", matchedMessage: `aadsts${t4}` } : void 0;
      })(r3) : e3.allowNonRfcDeadGrant ? (function(e4) {
        const { code: t4, message: r4 } = e4;
        return "unauthorized_user" === t4 || "access_denied" === t4 && r4 === i2 ? { reason: "user_access_revoked", matchedMessage: t4 } : void 0;
      })({ code: t3, message: r3 }) : void 0;
    }
    function f(e3, t3) {
      const r3 = (function(e4) {
        return e4 instanceof Error || null !== e4 && "object" == typeof e4 ? e4 : void 0;
      })(e3);
      if (void 0 === r3) return;
      const n3 = t3 ?? {}, o3 = "string" == typeof (s3 = r3.message) ? s3.toLowerCase().trim() : "";
      var s3;
      const i3 = true === n3.allowNonRfcDeadGrant, f2 = p({ code: n3.tokenEndpointErrorCode?.toLowerCase(), message: o3, allowNonRfcDeadGrant: i3 });
      if (void 0 !== f2) return f2;
      const h = "string" == typeof r3.name ? r3.name : "";
      return a2.has(h) ? (function(e4) {
        const t4 = l.find(({ needle: t5 }) => e4.includes(t5));
        return void 0 === t4 ? void 0 : { reason: t4.reason, matchedMessage: e4 };
      })(o3) ?? (true === n3.allowInvalidGrantGeneric ? (function(e4) {
        return d.some((t4) => e4.includes(t4)) ? { reason: "invalid_grant_generic", matchedMessage: e4 } : void 0;
      })(o3) : void 0) : i3 ? (function(e4) {
        const { name: t4, message: r4 } = e4;
        if ("ServerError" !== t4) return;
        const n4 = c.exec(r4)?.[1];
        if (void 0 === n4) return;
        const o4 = u.find(({ needle: e5 }) => n4.includes(e5));
        return void 0 === o4 ? void 0 : { reason: o4.reason, matchedMessage: o4.needle };
      })({ name: h, message: o3 }) : void 0;
    }
  }