// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FormContext.js range:6096736..6097160
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.695Z
C_e = L({ "FormContext.js"() {
  E(), vA(), EJo = rlh.createContext({ formRef: { current: { fields: /* @__PURE__ */ new Map() } }, errors: {}, clearErrors: Ax, validationMode: "onSubmit", submitAttemptedRef: { current: false } }), process.env.NODE_ENV !== "production" && (EJo.displayName = "FormContext");
} });
function tci(t, e, n = (i, r) => i === r) {
  return t.length === e.length && t.every((i, r) => n(i, e[r]));
}
