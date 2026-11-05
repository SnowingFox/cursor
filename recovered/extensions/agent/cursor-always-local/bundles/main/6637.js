// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6637 range:3737930..3750923
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6637: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { Gk: () => p, LD: () => y, M5: () => I, Ou: () => B, Yb: () => h, Zt: () => b, e9: () => A, h7: () => _, iz: () => g, m3: () => d, oF: () => E, sR: () => S, uh: () => l, vr: () => C, wY: () => m });
    var n2 = r2(6038), s2 = r2(7918), i2 = r2(8592);
    const o2 = "aiserver.v1.";
    class a extends i2.HL {
      static get runtime() {
        return (0, i2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return o2;
      }
    }
    var u = (0, i2.QT)(n2.proto3, o2, "FSUploadErrorType", [[0, "FS_UPLOAD_ERROR_TYPE_UNSPECIFIED"], [1, "FS_UPLOAD_ERROR_TYPE_NON_EXISTANT"], [2, "FS_UPLOAD_ERROR_TYPE_HASH_MISMATCH"]]), c = (0, i2.QT)(n2.proto3, o2, "FSSyncErrorType", [[0, "FS_SYNC_ERROR_TYPE_UNSPECIFIED"], [1, "FS_SYNC_ERROR_TYPE_NON_EXISTANT"], [2, "FS_SYNC_ERROR_TYPE_HASH_MISMATCH"]]);
    class l extends a {
      constructor(t3) {
        super(), this.uuid = "", this.relativeWorkspacePath = "", this.contents = "", this.modelVersion = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["FSUploadFileRequest|1 uuid 9|2 relative_workspace_path 9|3 contents 9|4 model_version 5|5 sha256_hash 9?"];
      }
    }
    class m extends a {
      constructor(t3) {
        super(), this.error = u.FS_UPLOAD_ERROR_TYPE_UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["FSUploadFileResponse|1 error #0", u];
      }
    }
    class d extends a {
      constructor(t3) {
        super(), this.modelVersion = 0, this.relativeWorkspacePath = "", this.updates = [], this.expectedFileLength = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["FilesyncUpdateWithModelVersion|1 model_version 5|2 relative_workspace_path 9|3 updates #0*|4 expected_file_length 5", f];
      }
    }
    class f extends a {
      constructor(t3) {
        super(), this.startPosition = 0, this.endPosition = 0, this.changeLength = 0, this.replacedString = "", n2.proto3.util.initPartial(t3, this);
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
        return ["SingleUpdateRequest|1 start_position 5|2 end_position 5|3 change_length 5|4 replaced_string 9|5 range #0", s2.SimpleRange];
      }
    }
    class p extends a {
      constructor(t3) {
        super(), this.uuid = "", this.relativeWorkspacePath = "", this.modelVersion = 0, this.filesyncUpdates = [], this.sha256Hash = "", n2.proto3.util.initPartial(t3, this);
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
        return ["FSSyncFileRequest|1 uuid 9|2 relative_workspace_path 9|3 model_version 5|4 filesync_updates #0*|5 sha256_hash 9", d];
      }
    }
    class h extends a {
      constructor(t3) {
        super(), this.error = c.FS_SYNC_ERROR_TYPE_UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
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
        return ["FSSyncFileResponse|1 error #0", c];
      }
    }
    class g extends a {
      constructor(t3) {
        super(), this.uuid = "", n2.proto3.util.initPartial(t3, this);
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
        return ["FSIsEnabledForUserRequest|1 uuid 9"];
      }
    }
    class A extends a {
      constructor(t3) {
        super(), this.enabled = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new A().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new A().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new A().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(A, t3, e3);
      }
      static $() {
        return ["FSIsEnabledForUserResponse|1 enabled 8"];
      }
    }
    class _ extends a {
      constructor(t3) {
        super(), this.uuid = "", this.authId = "", this.relativeWorkspacePath = "", this.modelVersion = 0, this.filesyncUpdates = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_, t3, e3);
      }
      static $() {
        return ["FSGetFileContentsRequest|1 uuid 9|2 auth_id 9|3 relative_workspace_path 9|4 model_version 5|5 filesync_updates #0*|6 sha256_hash 9?|7 earliest_time #1?", d, n2.Timestamp];
      }
    }
    class y extends a {
      constructor(t3) {
        super(), this.contents = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new y().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new y().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new y().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(y, t3, e3);
      }
      static $() {
        return ["FSGetFileContentsResponse|1 contents 9|2 sha256_hash 9?"];
      }
    }
    class w extends a {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.required = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new w().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new w().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new w().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(w, t3, e3);
      }
      static $() {
        return ["FileRequest|1 relative_workspace_path 9|2 requested_version 5?|3 sha256_hash 9?|4 required 8|5 earliest_time #0?", n2.Timestamp];
      }
    }
    class S extends a {
      constructor(t3) {
        super(), this.authId = "", this.filesyncUpdates = [], this.fileRequests = [], this.getAllRecentFiles = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new S().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new S().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new S().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(S, t3, e3);
      }
      static $() {
        return ["FSGetMultiFileContentsRequest|1 auth_id 9|2 filesync_updates #0*|3 file_requests #1*|4 get_all_recent_files 8", d, w];
      }
    }
    class J extends a {
      constructor(t3) {
        super(), this.relativeWorkspacePath = "", this.contents = "", this.modelVersion = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new J().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new J().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new J().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(J, t3, e3);
      }
      static $() {
        return ["FileRetrieved|1 relative_workspace_path 9|2 contents 9|3 model_version 5|4 last_modified #0", n2.Timestamp];
      }
    }
    class B extends a {
      constructor(t3) {
        super(), this.files = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new B().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new B().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new B().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(B, t3, e3);
      }
      static $() {
        return ["FSGetMultiFileContentsResponse|1 files #0*", J];
      }
    }
    class E extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new E().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new E().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new E().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(E, t3, e3);
      }
      static $() {
        return ["FSInternalHealthCheckRequest|1 from_server 8?"];
      }
    }
    class I extends a {
      constructor(t3) {
        super(), this.success = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new I().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new I().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new I().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(I, t3, e3);
      }
      static $() {
        return ["FSInternalHealthCheckResponse|1 success 8"];
      }
    }
    class C extends a {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new C().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new C().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new C().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(C, t3, e3);
      }
      static $() {
        return ["FSConfigRequest"];
      }
    }
    class b extends a {
      constructor(t3) {
        super(), this.checkFilesyncHashPercent = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new b().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new b().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new b().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(b, t3, e3);
      }
      static $() {
        return ["FSConfigResponse|1 check_filesync_hash_percent 2|2 rate_limiter_breaker_reset_time_ms 5?|3 rate_limiter_rps 5?|4 rate_limiter_burst_capacity 5?|5 max_recent_updates_stored 5?|6 max_model_version_cache_size 5?|7 max_file_size_to_sync_bytes 5?|8 sync_retry_max_attempts 5?|9 sync_retry_initial_delay_ms 5?|10 sync_retry_time_multiplier 5?|11 file_sync_status_max_cache_size 5?|12 successive_syncs_required_for_reliance 5?|13 extra_successful_syncs_needed_after_errors 5?|14 big_change_stripping_threshold_bytes 5?|15 last_n_updates_to_send 5?|16 file_sync_status_ttl_ms 5?|17 sync_debounce_ms 5?|18 sync_update_threshold 5?"];
      }
    }
  }