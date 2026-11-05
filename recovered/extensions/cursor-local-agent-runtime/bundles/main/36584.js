// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 36584 range:1064776..1069693
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
36584: (e, t, r) => {
    "use strict";
    r.d(t, { Ag: () => u, LO: () => c, Ro: () => d, XR: () => l, dF: () => a, ge: () => p, v4: () => i });
    var n = r(36038), o = r(8592);
    class s extends o.HL {
      static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class i extends s {
      constructor(e2) {
        super(), this.checkName = "", this.tldr = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new i().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new i().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new i().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(i, e2, t2);
      }
      static $() {
        return ["RecordCiInvestigationFinding|1 check_name 9|2 details_url 9?|3 tldr 9|4 root_cause 9?|5 failing_signal 9?|6 suggested_next_step 9?|7 diff_relation 9?|8 diff_relation_evidence 9?|9 flake_assessment 9?|10 flake_evidence 9?|11 rerun_available 8?|12 rerun_evidence 9?|13 recommended_action 9?|14 recommended_action_evidence 9?|15 confidence 9?"];
      }
    }
    class a extends s {
      constructor(e2) {
        super(), this.summary = "", this.themes = [], this.checkKeys = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new a().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new a().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new a().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(a, e2, t2);
      }
      static $() {
        return ["RecordCiInvestigationOverall|1 summary 9|2 themes 9*|3 recommended_action 9?|4 recommended_action_evidence 9?|5 check_keys 9*"];
      }
    }
    class l extends s {
      constructor(e2) {
        super(), this.findings = [], this.toolCallId = "", n.proto3.util.initPartial(e2, this);
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
        return ["RecordCiInvestigationFindingsArgs|1 findings #0*|2 overall #1?|3 tool_call_id 9", i, a];
      }
    }
    class c extends s {
      constructor(e2) {
        super(), this.message = "", n.proto3.util.initPartial(e2, this);
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
        return ["RecordCiInvestigationFindingsSuccess|1 message 9"];
      }
    }
    class u extends s {
      constructor(e2) {
        super(), this.error = "", n.proto3.util.initPartial(e2, this);
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
        return ["RecordCiInvestigationFindingsError|1 error 9"];
      }
    }
    class d extends s {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["RecordCiInvestigationFindingsResult|1 success #0 result|2 error #1 result", c, u];
      }
    }
    class p extends s {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["RecordCiInvestigationFindingsToolCall|1 args #0|2 result #1", l, d];
      }
    }
  }