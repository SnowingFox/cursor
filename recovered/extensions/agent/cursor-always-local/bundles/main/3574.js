// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3574 range:958794..961768
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3574: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { Mw: () => l });
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
    class a extends o2 {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new a().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new a().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new a().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(a, t3, e3);
      }
      static $() {
        return ["NetworkPolicyLoggingConfig|1 decision_log_path 9?|2 log_format 9?"];
      }
    }
    class u extends o2 {
      constructor(t3) {
        super(), this.deny = [], this.allow = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new u().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new u().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new u().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(u, t3, e3);
      }
      static $() {
        return ["NetworkPolicy|1 version 13?|2 default_action #0?|3 deny 9*|4 allow 9*|5 logging #1?", c, a];
      }
    }
    var c = (0, s2.QT)(n2.proto3, i2, "NetworkPolicy.DefaultAction", [[0, "UNSPECIFIED"], [1, "ALLOW"], [2, "DENY"]], 1);
    class l extends o2 {
      constructor(t3) {
        super(), this.type = m.UNSPECIFIED, this.additionalReadwritePaths = [], this.additionalReadonlyPaths = [], this.readBoundary = d.UNSPECIFIED, this.additionalReadPaths = [], n2.proto3.util.initPartial(t3, this);
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
        return ["SandboxPolicy|1 type #0|2 network_access 8?|3 additional_readwrite_paths 9*|4 additional_readonly_paths 9*|5 debug_output_dir 9?|7 disable_tmp_write 8?|8 allowlist_escalated 8?|9 enable_shared_build_cache 8?|10 network_policy #1?|11 network_policy_strict 8?|12 capture_denies 8?|13 skip_statsig_defaults 8?|14 read_boundary #2|15 additional_read_paths 9*", m, u, d];
      }
    }
    var m = (0, s2.QT)(n2.proto3, i2, "SandboxPolicy.Type", [[0, "UNSPECIFIED"], [1, "INSECURE_NONE"], [2, "WORKSPACE_READWRITE"], [3, "WORKSPACE_READONLY"]], 1), d = (0, s2.QT)(n2.proto3, i2, "SandboxPolicy.ReadBoundaryMode", [[0, "UNSPECIFIED"], [1, "SYSTEM"], [2, "WORKSPACE"]], 1);
  }