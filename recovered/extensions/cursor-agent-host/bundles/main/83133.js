// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 83133 range:11883666..11886079
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
83133: (e, t, r) => {
    "use strict";
    r.d(t, { N: () => i, Q: () => a });
    var n = r(36038), s = r(8592);
    class o extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class i extends o {
      constructor(e2) {
        super(), this.fullPath = "", this.content = "", this.description = "", this.environments = [], this.disabledEnvironments = [], this.disableModelInvocation = false, this.globs = [], this.scopedTo = [], this.argumentHint = "", this.disableUserInvocation = false, n.proto3.util.initPartial(e2, this);
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
        return ["AgentSkill|1 full_path 9|2 content 9|3 description 9|4 parse_error 9?|5 environments 9*|6 disabled_environments 9*|7 git_remote_origin 9?|8 disable_model_invocation 8|9 plugin 9?|10 marketplace 9?|11 plugin_id 9?|12 marketplace_id 9?|13 globs 9*|14 scoped_to 9*|15 argument_hint 9|16 disable_user_invocation 8"];
      }
    }
    class a extends o {
      constructor(e2) {
        super(), this.fullPath = "", this.description = "", this.environments = [], this.disabledEnvironments = [], this.disableModelInvocation = false, this.globs = [], this.scopedTo = [], this.argumentHint = "", this.disableUserInvocation = false, n.proto3.util.initPartial(e2, this);
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
        return ["AgentSkillMetadata|1 full_path 9|2 description 9|3 parse_error 9?|4 environments 9*|5 disabled_environments 9*|6 git_remote_origin 9?|7 disable_model_invocation 8|8 plugin 9?|9 marketplace 9?|10 plugin_id 9?|11 marketplace_id 9?|12 globs 9*|13 scoped_to 9*|14 argument_hint 9|15 disable_user_invocation 8"];
      }
    }
  }