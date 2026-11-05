// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 82590 range:11862802..11865321
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
82590: (e, t, r) => {
    "use strict";
    r.d(t, { G: () => o, eq: () => s });
    var n = r(98517);
    const s = n.ZS.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class o extends Error {
      get errors() {
        return this.issues;
      }
      constructor(e2) {
        super(), this.issues = [], this.addIssue = (e3) => {
          this.issues = [...this.issues, e3];
        }, this.addIssues = (e3 = []) => {
          this.issues = [...this.issues, ...e3];
        };
        const t2 = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, t2) : this.__proto__ = t2, this.name = "ZodError", this.issues = e2;
      }
      format(e2) {
        const t2 = e2 || function(e3) {
          return e3.message;
        }, r2 = { _errors: [] }, n2 = (e3) => {
          for (const s2 of e3.issues) if ("invalid_union" === s2.code) s2.unionErrors.map(n2);
          else if ("invalid_return_type" === s2.code) n2(s2.returnTypeError);
          else if ("invalid_arguments" === s2.code) n2(s2.argumentsError);
          else if (0 === s2.path.length) r2._errors.push(t2(s2));
          else {
            let e4 = r2, n3 = 0;
            for (; n3 < s2.path.length; ) {
              const r3 = s2.path[n3];
              n3 === s2.path.length - 1 ? (e4[r3] = e4[r3] || { _errors: [] }, e4[r3]._errors.push(t2(s2))) : e4[r3] = e4[r3] || { _errors: [] }, e4 = e4[r3], n3++;
            }
          }
        };
        return n2(this), r2;
      }
      static assert(e2) {
        if (!(e2 instanceof o)) throw new Error(`Not a ZodError: ${e2}`);
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, n.ZS.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return 0 === this.issues.length;
      }
      flatten(e2 = (e3) => e3.message) {
        const t2 = {}, r2 = [];
        for (const n2 of this.issues) if (n2.path.length > 0) {
          const r3 = n2.path[0];
          t2[r3] = t2[r3] || [], t2[r3].push(e2(n2));
        } else r2.push(e2(n2));
        return { formErrors: r2, fieldErrors: t2 };
      }
      get formErrors() {
        return this.flatten();
      }
    }
    o.create = (e2) => new o(e2);
  }