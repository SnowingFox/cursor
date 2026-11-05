// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1531 range:522927..527288
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1531: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { Tj: () => l, zH: () => c });
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
    var a = (0, s2.QT)(n2.proto3, i2, "RecordingMode", [[0, "UNSPECIFIED"], [1, "START_RECORDING"], [2, "SAVE_RECORDING"], [3, "DISCARD_RECORDING"]], 1), u = (0, s2.QT)(n2.proto3, i2, "RequestedFilePathRejectedReason", [[0, "UNSPECIFIED"], [1, "SLASHES_NOT_ALLOWED"]], 1);
    class c extends o2 {
      constructor(t3) {
        super(), this.mode = a.UNSPECIFIED, this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RecordScreenArgs|1 mode #0|2 tool_call_id 9|3 save_as_filename 9?", a];
      }
    }
    class l extends o2 {
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
        return ["RecordScreenResult|1 start_success #0 result|2 save_success #1 result|3 discard_success #2 result|4 failure #3 result", m, d, f, p];
      }
    }
    class m extends o2 {
      constructor(t3) {
        super(), this.wasPriorRecordingCancelled = false, this.wasSaveAsFilenameIgnored = false, n2.proto3.util.initPartial(t3, this);
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
        return ["RecordScreenStartSuccess|1 was_prior_recording_cancelled 8|2 was_save_as_filename_ignored 8"];
      }
    }
    class d extends o2 {
      constructor(t3) {
        super(), this.path = "", this.recordingDurationMs = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
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
        return ["RecordScreenSaveSuccess|1 path 9|2 recording_duration_ms 3|3 requested_file_path_rejected_reason #0?", u];
      }
    }
    class f extends o2 {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["RecordScreenDiscardSuccess"];
      }
    }
    class p extends o2 {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
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
        return ["RecordScreenFailure|1 error 9"];
      }
    }
  }