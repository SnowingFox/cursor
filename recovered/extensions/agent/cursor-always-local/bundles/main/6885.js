// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6885 range:3758545..3763983
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6885: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { Ek: () => l, _B: () => c, h_: () => u, oQ: () => d });
    var n2 = r2(6038), s2 = r2(4500), i2 = r2(8592);
    const o2 = "agent.v1.";
    class a extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return o2;
      }
    }
    var u = (0, i2.QT)(n2.proto3, o2, "DiagnosticSeverity", [[0, "UNSPECIFIED"], [1, "ERROR"], [2, "WARNING"], [3, "INFORMATION"], [4, "HINT"]], 1);
    class c extends a {
      constructor(t3) {
        super(), this.path = "", this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new c().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new c().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new c().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(c, t3, e3);
      }
      static $() {
        return ["DiagnosticsArgs|1 path 9|2 tool_call_id 9"];
      }
    }
    class l extends a {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["DiagnosticsResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 file_not_found #3 result|5 permission_denied #4 result", m, f, p, h, g];
      }
    }
    class m extends a {
      constructor(t3) {
        super(), this.path = "", this.diagnostics = [], this.totalDiagnostics = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["DiagnosticsSuccess|1 path 9|2 diagnostics #0*|3 total_diagnostics 5", d];
      }
    }
    class d extends a {
      constructor(t3) {
        super(), this.severity = u.UNSPECIFIED, this.message = "", this.source = "", this.code = "", this.isStale = false, n2.proto3.util.initPartial(t3, this);
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
        return ["Diagnostic|1 severity #0|2 range #1|3 message 9|4 source 9|5 code 9|6 is_stale 8", u, s2.Q6];
      }
    }
    class f extends a {
      constructor(t3) {
        super(), this.path = "", this.error = "", n2.proto3.util.initPartial(t3, this);
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
        return ["DiagnosticsError|1 path 9|2 error 9"];
      }
    }
    class p extends a {
      constructor(t3) {
        super(), this.path = "", this.reason = "", n2.proto3.util.initPartial(t3, this);
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
        return ["DiagnosticsRejected|1 path 9|2 reason 9"];
      }
    }
    class h extends a {
      constructor(t3) {
        super(), this.path = "", n2.proto3.util.initPartial(t3, this);
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
        return ["DiagnosticsFileNotFound|1 path 9"];
      }
    }
    class g extends a {
      constructor(t3) {
        super(), this.path = "", n2.proto3.util.initPartial(t3, this);
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
        return ["DiagnosticsPermissionDenied|1 path 9"];
      }
    }
  }