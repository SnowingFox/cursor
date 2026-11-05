// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8846 range:5410756..5415833
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8846: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { Th: () => m, bN: () => f });
    var n2 = r2(6038), s2 = r2(8592);
    const i2 = "agent.v1.";
    class o2 extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return i2;
      }
    }
    var a = (0, s2.QT)(n2.proto3, i2, "SmartModeClassifierDecision", [[0, "UNSPECIFIED"], [1, "ALLOW"], [2, "BLOCK"]], 1), u = (0, s2.QT)(n2.proto3, i2, "SmartModeClassifierRuleEffect", [[0, "UNSPECIFIED"], [1, "ALLOW"], [2, "ASK_FIRST"]], 1), c = (0, s2.QT)(n2.proto3, i2, "SmartModeClassifierRuleSource", [[0, "UNSPECIFIED"], [1, "CUSTOM_RULE"], [2, "TEAM_RULE"]], 1);
    class l extends o2 {
      constructor(t3) {
        super(), this.role = "", this.content = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new l().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new l().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new l().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(l, t3, e3);
      }
      static $() {
        return ["SmartModeClassifierConversationMessage|1 role 9|2 content 9"];
      }
    }
    class m extends o2 {
      constructor(t3) {
        super(), this.toolCallId = "", this.conversationContext = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new m().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new m().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new m().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(m, t3, e3);
      }
      static $() {
        return ["SmartModeClassifierArgs|1 tool_call_id 9|2 parent_conversation_id 9?|3 target #0|4 conversation_context #1*", d, l];
      }
    }
    class d extends o2 {
      constructor(t3) {
        super(), this.action = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new d().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new d().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new d().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(d, t3, e3);
      }
      static $() {
        return ["SmartModeRiskTarget|1 action 9|2 arguments #0", n2.Struct];
      }
    }
    class f extends o2 {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new f().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new f().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new f().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(f, t3, e3);
      }
      static $() {
        return ["SmartModeClassifierResult|1 success #0 result|2 error #1 result", p, g];
      }
    }
    class p extends o2 {
      constructor(t3) {
        super(), this.decision = a.UNSPECIFIED, this.appliedRules = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new p().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new p().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new p().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(p, t3, e3);
      }
      static $() {
        return ["SmartModeClassifierSuccess|1 decision #0|2 block_reason 9?|3 proposed_allow_rule 9?|4 applied_rules #1*", a, h];
      }
    }
    class h extends o2 {
      constructor(t3) {
        super(), this.effect = u.UNSPECIFIED, this.text = "", this.source = c.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new h().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new h().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new h().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(h, t3, e3);
      }
      static $() {
        return ["SmartModeClassifierAppliedRule|1 effect #0|2 text 9|3 source #1", u, c];
      }
    }
    class g extends o2 {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new g().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new g().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new g().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(g, t3, e3);
      }
      static $() {
        return ["SmartModeClassifierError|1 error 9"];
      }
    }
  }