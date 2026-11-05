// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 18846 range:570708..575806
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
18846: (e, t, r) => {
    "use strict";
    r.d(t, { B9: () => m, GR: () => u, RZ: () => p, Th: () => d, WZ: () => g, bN: () => h, mH: () => a });
    var n = r(36038), o = r(8592);
    const s = "agent.v1.";
    class i extends o.HL {
      static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return s;
      }
    }
    var a = (0, o.QT)(n.proto3, s, "SmartModeClassifierDecision", [[0, "UNSPECIFIED"], [1, "ALLOW"], [2, "BLOCK"]], 1), l = (0, o.QT)(n.proto3, s, "SmartModeClassifierRuleEffect", [[0, "UNSPECIFIED"], [1, "ALLOW"], [2, "ASK_FIRST"]], 1), c = (0, o.QT)(n.proto3, s, "SmartModeClassifierRuleSource", [[0, "UNSPECIFIED"], [1, "CUSTOM_RULE"], [2, "TEAM_RULE"]], 1);
    class u extends i {
      constructor(e2) {
        super(), this.role = "", this.content = "", n.proto3.util.initPartial(e2, this);
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
        return ["SmartModeClassifierConversationMessage|1 role 9|2 content 9"];
      }
    }
    class d extends i {
      constructor(e2) {
        super(), this.toolCallId = "", this.conversationContext = [], n.proto3.util.initPartial(e2, this);
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
        return ["SmartModeClassifierArgs|1 tool_call_id 9|2 parent_conversation_id 9?|3 target #0|4 conversation_context #1*", p, u];
      }
    }
    class p extends i {
      constructor(e2) {
        super(), this.action = "", n.proto3.util.initPartial(e2, this);
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
        return ["SmartModeRiskTarget|1 action 9|2 arguments #0", n.Struct];
      }
    }
    class h extends i {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new h().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new h().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new h().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(h, e2, t2);
      }
      static $() {
        return ["SmartModeClassifierResult|1 success #0 result|2 error #1 result", m, g];
      }
    }
    class m extends i {
      constructor(e2) {
        super(), this.decision = a.UNSPECIFIED, this.appliedRules = [], n.proto3.util.initPartial(e2, this);
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
        return ["SmartModeClassifierSuccess|1 decision #0|2 block_reason 9?|3 proposed_allow_rule 9?|4 applied_rules #1*", a, f];
      }
    }
    class f extends i {
      constructor(e2) {
        super(), this.effect = l.UNSPECIFIED, this.text = "", this.source = c.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new f().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new f().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new f().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(f, e2, t2);
      }
      static $() {
        return ["SmartModeClassifierAppliedRule|1 effect #0|2 text 9|3 source #1", l, c];
      }
    }
    class g extends i {
      constructor(e2) {
        super(), this.error = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new g().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new g().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new g().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(g, e2, t2);
      }
      static $() {
        return ["SmartModeClassifierError|1 error 9"];
      }
    }
  }