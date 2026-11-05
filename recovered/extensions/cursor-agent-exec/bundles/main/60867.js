// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 60867 range:4738150..4742288
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
60867: (e, t, r) => {
    "use strict";
    r.d(t, { Ht: () => p, L1: () => a, RH: () => u, U_: () => m, Y6: () => c, p4: () => l, q3: () => d });
    var n = r(36038), s = r(8592);
    const o = "agent.v1.";
    class i extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return o;
      }
    }
    var a = (0, s.QT)(n.proto3, o, "BugfixVerdict", [[0, "UNSPECIFIED"], [1, "FIXED"], [2, "FALSE_POSITIVE"], [3, "COULD_NOT_FIX"], [4, "RESOLVED_BY_OTHER_FIX"]], 1);
    class c extends i {
      constructor(e2) {
        super(), this.bugId = "", this.bugTitle = "", this.verdict = a.UNSPECIFIED, this.explanation = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new c().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new c().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new c().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(c, e2, t2);
      }
      static $() {
        return ["BugfixResultItem|1 bug_id 9|2 bug_title 9|3 verdict #0|4 explanation 9|5 severity 9?", a];
      }
    }
    class l extends i {
      constructor(e2) {
        super(), this.summary = "", this.results = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new l().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new l().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new l().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(l, e2, t2);
      }
      static $() {
        return ["ReportBugfixResultsArgs|1 summary 9|2 results #0*", c];
      }
    }
    class u extends i {
      constructor(e2) {
        super(), this.results = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new u().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new u().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new u().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(u, e2, t2);
      }
      static $() {
        return ["ReportBugfixResultsSuccess|1 results #0*", c];
      }
    }
    class d extends i {
      constructor(e2) {
        super(), this.error = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new d().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new d().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new d().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(d, e2, t2);
      }
      static $() {
        return ["ReportBugfixResultsError|1 error 9"];
      }
    }
    class p extends i {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new p().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new p().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new p().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(p, e2, t2);
      }
      static $() {
        return ["ReportBugfixResultsResult|1 success #0 result|2 error #1 result", u, d];
      }
    }
    class m extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new m().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new m().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new m().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(m, e2, t2);
      }
      static $() {
        return ["ReportBugfixResultsToolCall|1 args #0|2 result #1", l, p];
      }
    }
  }