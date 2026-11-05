// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 13574 range:472495..475503
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
13574: (e, t, r) => {
    "use strict";
    r.d(t, { Mw: () => u, Qq: () => a, RB: () => l, Sz: () => p, h1: () => c, vc: () => d });
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
    class a extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["NetworkPolicyLoggingConfig|1 decision_log_path 9?|2 log_format 9?"];
      }
    }
    class l extends i {
      constructor(e2) {
        super(), this.deny = [], this.allow = [], n.proto3.util.initPartial(e2, this);
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
        return ["NetworkPolicy|1 version 13?|2 default_action #0?|3 deny 9*|4 allow 9*|5 logging #1?", c, a];
      }
    }
    var c = (0, o.QT)(n.proto3, s, "NetworkPolicy.DefaultAction", [[0, "UNSPECIFIED"], [1, "ALLOW"], [2, "DENY"]], 1);
    class u extends i {
      constructor(e2) {
        super(), this.type = d.UNSPECIFIED, this.additionalReadwritePaths = [], this.additionalReadonlyPaths = [], this.readBoundary = p.UNSPECIFIED, this.additionalReadPaths = [], n.proto3.util.initPartial(e2, this);
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
        return ["SandboxPolicy|1 type #0|2 network_access 8?|3 additional_readwrite_paths 9*|4 additional_readonly_paths 9*|5 debug_output_dir 9?|7 disable_tmp_write 8?|8 allowlist_escalated 8?|9 enable_shared_build_cache 8?|10 network_policy #1?|11 network_policy_strict 8?|12 capture_denies 8?|13 skip_statsig_defaults 8?|14 read_boundary #2|15 additional_read_paths 9*", d, l, p];
      }
    }
    var d = (0, o.QT)(n.proto3, s, "SandboxPolicy.Type", [[0, "UNSPECIFIED"], [1, "INSECURE_NONE"], [2, "WORKSPACE_READWRITE"], [3, "WORKSPACE_READONLY"]], 1), p = (0, o.QT)(n.proto3, s, "SandboxPolicy.ReadBoundaryMode", [[0, "UNSPECIFIED"], [1, "SYSTEM"], [2, "WORKSPACE"]], 1);
  }