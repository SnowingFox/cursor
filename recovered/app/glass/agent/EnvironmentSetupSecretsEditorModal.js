// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: EnvironmentSetupSecretsEditorModal.js range:23009342..23013186
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.207Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, EnvironmentSetupRepoScopeDropdown.js, EnvironmentSetupSecretLevelSelect.js, env-setup-secret.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, EnvironmentSetupRepoScopeDropdown.js, EnvironmentSetupSecretLevelSelect.js, env-setup-secret.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
var Rek = L({ "EnvironmentSetupSecretsEditorModal.js"() {
  "use strict";
  E(), Mt(), hGm(), IGm(), sts();
} });
function bQa(t) {
  switch (t.type) {
    case "add_secrets":
    case "add_test_login":
      return "secrets";
    case "add_egress_allowlist_domain":
      return "egress";
    case "external_action":
      return `external:${t.id}`;
    default:
      return t;
  }
}
function Pek(t) {
  const e = /* @__PURE__ */ new Set();
  for (const n of t) {
    if (n.type === "add_secrets") {
      for (const i of n.secrets) {
        const r = i.name.trim();
        r && e.add(r);
      }
      continue;
    }
    if (n.type === "add_test_login") for (const i of [n.usernameSecretName, n.passwordSecretName, n.otpSeedSecretName]) {
      const r = i?.trim();
      r && e.add(r);
    }
  }
  return e.size;
}
function Mek(t) {
  const e = Math.max(Pek(t), 1);
  return e === 1 ? "Add 1 missing secret" : `Add ${e} missing secrets`;
}
function Dek(t) {
  const e = /* @__PURE__ */ new Set();
  for (const n of t) {
    if (n.type !== "add_egress_allowlist_domain") continue;
    const i = n.domain.trim();
    i && e.add(i);
  }
  return e.size;
}
function Nek(t) {
  const e = Math.max(Dek(t), 1);
  return e === 1 ? "Review 1 network access domain" : `Review ${e} network access domains`;
}
function Lek(t) {
  return t.instructions.trim() || "Complete external action";
}
function Oek(t, e = {}) {
  const n = [], i = t.filter((s) => s.type === "add_secrets" || s.type === "add_test_login"), r = t.filter((s) => s.type === "add_egress_allowlist_domain");
  if (i.length > 0) {
    const s = i.every((o) => o.type === "add_test_login");
    n.push({ key: "secrets", label: s ? "Add test login" : Mek(i), primaryLabel: s ? "Add test login" : "Enter secrets", secondaryLabel: "Skip", secondaryResolveDisposition: "skipped", target: "secrets" });
  }
  r.length > 0 && n.push({ key: "egress", label: Nek(r), primaryLabel: "Review", ...e.isEgressLockedByAdmin ? { primaryDisabledReason: AGm } : {}, secondaryLabel: "Reject", secondaryResolveDisposition: "rejected", target: "egress" });
  for (const s of t) s.type === "external_action" && n.push({ key: bQa(s), label: Lek(s), primaryLabel: "Mark as Done", primaryResolveDisposition: "completed", secondaryLabel: "Skip", secondaryResolveDisposition: "skipped", target: null });
  return n;
}
function Fek(t, e) {
  switch (t.type) {
    case "add_secrets":
    case "add_test_login":
      return "Secrets";
    case "add_egress_allowlist_domain":
      return "Network access";
    case "external_action":
      return `External action ${e}`;
    default:
      return t;
  }
}
function Bek(t, e) {
  switch (t.type) {
    case "add_secrets":
    case "add_test_login":
      return e === "completed" ? "The user completed the requested secret entry." : e === "rejected" ? "The user rejected entering the requested secrets." : "The user skipped entering the requested secrets.";
    case "add_egress_allowlist_domain":
      return e === "completed" ? "The user approved the requested network access." : e === "rejected" ? "The user rejected the requested network access." : "The user skipped reviewing the requested network access.";
    case "external_action":
      return e === "completed" ? "The user completed the requested external action." : e === "rejected" ? "The user rejected the requested external action." : "The user skipped the requested external action.";
    default:
      return t;
  }
}
function Uek(t, e) {
  const n = ["Env setup action status:"], i = /* @__PURE__ */ new Set();
  let r = 0;
  for (const s of t.actions) {
    const o = bQa(s);
    if (i.has(o)) continue;
    i.add(o), s.type === "external_action" && (r += 1);
    const a = e[o];
    n.push(`- ${Fek(s, r)}: ${Bek(s, a)}`);
  }
  return n.push(""), n.push(RGm), n.join(`
`);
}
var AGm, RGm, 