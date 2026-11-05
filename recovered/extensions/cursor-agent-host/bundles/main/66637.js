// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 66637 range:10370786..10383720
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
66637: (e, t, r) => {
    "use strict";
    r.d(t, { Gk: () => h, LD: () => v, M5: () => I, Ou: () => b, Yb: () => f, Zt: () => k, e9: () => y, h7: () => w, iz: () => g, m3: () => p, oF: () => E, sR: () => A, uh: () => u, vr: () => C, wY: () => d });
    var n = r(36038), s = r(67918), o = r(8592);
    const i = "aiserver.v1.";
    class a extends o.HL {
      static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return i;
      }
    }
    var c = (0, o.QT)(n.proto3, i, "FSUploadErrorType", [[0, "FS_UPLOAD_ERROR_TYPE_UNSPECIFIED"], [1, "FS_UPLOAD_ERROR_TYPE_NON_EXISTANT"], [2, "FS_UPLOAD_ERROR_TYPE_HASH_MISMATCH"]]), l = (0, o.QT)(n.proto3, i, "FSSyncErrorType", [[0, "FS_SYNC_ERROR_TYPE_UNSPECIFIED"], [1, "FS_SYNC_ERROR_TYPE_NON_EXISTANT"], [2, "FS_SYNC_ERROR_TYPE_HASH_MISMATCH"]]);
    class u extends a {
      constructor(e2) {
        super(), this.uuid = "", this.relativeWorkspacePath = "", this.contents = "", this.modelVersion = 0, n.proto3.util.initPartial(e2, this);
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
        return ["FSUploadFileRequest|1 uuid 9|2 relative_workspace_path 9|3 contents 9|4 model_version 5|5 sha256_hash 9?"];
      }
    }
    class d extends a {
      constructor(e2) {
        super(), this.error = c.FS_UPLOAD_ERROR_TYPE_UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["FSUploadFileResponse|1 error #0", c];
      }
    }
    class p extends a {
      constructor(e2) {
        super(), this.modelVersion = 0, this.relativeWorkspacePath = "", this.updates = [], this.expectedFileLength = 0, n.proto3.util.initPartial(e2, this);
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
        return ["FilesyncUpdateWithModelVersion|1 model_version 5|2 relative_workspace_path 9|3 updates #0*|4 expected_file_length 5", m];
      }
    }
    class m extends a {
      constructor(e2) {
        super(), this.startPosition = 0, this.endPosition = 0, this.changeLength = 0, this.replacedString = "", n.proto3.util.initPartial(e2, this);
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
        return ["SingleUpdateRequest|1 start_position 5|2 end_position 5|3 change_length 5|4 replaced_string 9|5 range #0", s.SimpleRange];
      }
    }
    class h extends a {
      constructor(e2) {
        super(), this.uuid = "", this.relativeWorkspacePath = "", this.modelVersion = 0, this.filesyncUpdates = [], this.sha256Hash = "", n.proto3.util.initPartial(e2, this);
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
        return ["FSSyncFileRequest|1 uuid 9|2 relative_workspace_path 9|3 model_version 5|4 filesync_updates #0*|5 sha256_hash 9", p];
      }
    }
    class f extends a {
      constructor(e2) {
        super(), this.error = l.FS_SYNC_ERROR_TYPE_UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["FSSyncFileResponse|1 error #0", l];
      }
    }
    class g extends a {
      constructor(e2) {
        super(), this.uuid = "", n.proto3.util.initPartial(e2, this);
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
        return ["FSIsEnabledForUserRequest|1 uuid 9"];
      }
    }
    class y extends a {
      constructor(e2) {
        super(), this.enabled = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new y().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new y().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new y().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(y, e2, t2);
      }
      static $() {
        return ["FSIsEnabledForUserResponse|1 enabled 8"];
      }
    }
    class w extends a {
      constructor(e2) {
        super(), this.uuid = "", this.authId = "", this.relativeWorkspacePath = "", this.modelVersion = 0, this.filesyncUpdates = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new w().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new w().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new w().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(w, e2, t2);
      }
      static $() {
        return ["FSGetFileContentsRequest|1 uuid 9|2 auth_id 9|3 relative_workspace_path 9|4 model_version 5|5 filesync_updates #0*|6 sha256_hash 9?|7 earliest_time #1?", p, n.Timestamp];
      }
    }
    class v extends a {
      constructor(e2) {
        super(), this.contents = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new v().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new v().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new v().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(v, e2, t2);
      }
      static $() {
        return ["FSGetFileContentsResponse|1 contents 9|2 sha256_hash 9?"];
      }
    }
    class _ extends a {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.required = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_, e2, t2);
      }
      static $() {
        return ["FileRequest|1 relative_workspace_path 9|2 requested_version 5?|3 sha256_hash 9?|4 required 8|5 earliest_time #0?", n.Timestamp];
      }
    }
    class A extends a {
      constructor(e2) {
        super(), this.authId = "", this.filesyncUpdates = [], this.fileRequests = [], this.getAllRecentFiles = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new A().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new A().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new A().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(A, e2, t2);
      }
      static $() {
        return ["FSGetMultiFileContentsRequest|1 auth_id 9|2 filesync_updates #0*|3 file_requests #1*|4 get_all_recent_files 8", p, _];
      }
    }
    class S extends a {
      constructor(e2) {
        super(), this.relativeWorkspacePath = "", this.contents = "", this.modelVersion = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new S().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new S().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new S().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(S, e2, t2);
      }
      static $() {
        return ["FileRetrieved|1 relative_workspace_path 9|2 contents 9|3 model_version 5|4 last_modified #0", n.Timestamp];
      }
    }
    class b extends a {
      constructor(e2) {
        super(), this.files = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new b().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new b().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new b().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(b, e2, t2);
      }
      static $() {
        return ["FSGetMultiFileContentsResponse|1 files #0*", S];
      }
    }
    class E extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new E().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new E().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new E().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(E, e2, t2);
      }
      static $() {
        return ["FSInternalHealthCheckRequest|1 from_server 8?"];
      }
    }
    class I extends a {
      constructor(e2) {
        super(), this.success = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new I().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new I().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new I().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(I, e2, t2);
      }
      static $() {
        return ["FSInternalHealthCheckResponse|1 success 8"];
      }
    }
    class C extends a {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new C().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new C().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new C().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(C, e2, t2);
      }
      static $() {
        return ["FSConfigRequest"];
      }
    }
    class k extends a {
      constructor(e2) {
        super(), this.checkFilesyncHashPercent = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new k().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new k().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new k().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(k, e2, t2);
      }
      static $() {
        return ["FSConfigResponse|1 check_filesync_hash_percent 2|2 rate_limiter_breaker_reset_time_ms 5?|3 rate_limiter_rps 5?|4 rate_limiter_burst_capacity 5?|5 max_recent_updates_stored 5?|6 max_model_version_cache_size 5?|7 max_file_size_to_sync_bytes 5?|8 sync_retry_max_attempts 5?|9 sync_retry_initial_delay_ms 5?|10 sync_retry_time_multiplier 5?|11 file_sync_status_max_cache_size 5?|12 successive_syncs_required_for_reliance 5?|13 extra_successful_syncs_needed_after_errors 5?|14 big_change_stripping_threshold_bytes 5?|15 last_n_updates_to_send 5?|16 file_sync_status_ttl_ms 5?|17 sync_debounce_ms 5?|18 sync_update_threshold 5?"];
      }
    }
  }