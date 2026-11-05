// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 77977 range:11570855..11585859
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
77977: (e, t, r) => {
    "use strict";
    r.r(t), r.d(t, { AnalyticsContext: () => w, AnalyticsEvent: () => h, BatchEvent: () => y, BatchRequest: () => _, BatchResponse: () => A, BootstrapStatsigRequest: () => l, BootstrapStatsigResponse: () => u, ClientInfo: () => v, ClientLogEntry: () => S, ClientLogLevel: () => c, ClientOS: () => a, DownloadIssueTracesRequest: () => T, DownloadIssueTracesResponse: () => R, EventData: () => m, GetFirstWindowStatsigDecisionRequest: () => d, GetFirstWindowStatsigDecisionResponse: () => p, IngestConversationRequest: () => I, IngestConversationResponse: () => C, SubmitLogsRequest: () => b, SubmitLogsResponse: () => E, TrackEventsRequest: () => f, TrackEventsResponse: () => g, UploadIssueTraceRequest: () => k, UploadIssueTraceResponse: () => x });
    var n = r(36038), s = r(8592);
    const o = "aiserver.v1.";
    class i extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return o;
      }
    }
    var a = (0, s.QT)(n.proto3, o, "ClientOS", [[0, "CLIENT_OS_UNSPECIFIED"], [1, "CLIENT_OS_WINDOWS"], [2, "CLIENT_OS_MACOS"], [3, "CLIENT_OS_LINUX"], [4, "CLIENT_OS_IOS"], [5, "CLIENT_OS_ANDROID"]]), c = (0, s.QT)(n.proto3, o, "ClientLogLevel", [[0, "UNSPECIFIED"], [1, "INFO"], [2, "DEBUG"], [3, "WARN"], [4, "ERROR"]], 1);
    class l extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["BootstrapStatsigRequest|1 ignore_dev_status 8?|2 operating_system #0?|3 device_model 9?|4 os_version 9?|5 form_factor 9?|6 stable_id 9?|7 client_channel 9?|8 bundle_id 9?|9 mobile_app_store_country 9?|10 native_build 9?|11 ota_update_id 9?|12 ota_runtime_version 9?|13 ota_embedded_launch 8?", a];
      }
    }
    class u extends i {
      constructor(e2) {
        super(), this.config = "", this.generatedAtMs = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
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
        return ["BootstrapStatsigResponse|1 config 9|2 generated_at_ms 4"];
      }
    }
    class d extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["GetFirstWindowStatsigDecisionRequest|1 operating_system #0?", a];
      }
    }
    class p extends i {
      constructor(e2) {
        super(), this.variant = "", this.reason = "", n.proto3.util.initPartial(e2, this);
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
        return ["GetFirstWindowStatsigDecisionResponse|1 variant 9|2 reason 9"];
      }
    }
    class m extends i {
      constructor(e2) {
        super(), this.data = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["EventData|1 string_value 9 data|2 int_value 3 data|3 bool_value 8 data|4 double_value 1 data"];
      }
    }
    class h extends i {
      constructor(e2) {
        super(), this.eventName = "", this.eventData = {}, this.timestamp = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
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
        return ["AnalyticsEvent|1 event_name 9|2 event_data 9,#0|3 timestamp 3", m];
      }
    }
    class f extends i {
      constructor(e2) {
        super(), this.events = [], n.proto3.util.initPartial(e2, this);
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
        return ["TrackEventsRequest|1 events #0*", h];
      }
    }
    class g extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["TrackEventsResponse"];
      }
    }
    class y extends i {
      constructor(e2) {
        super(), this.event = "", this.timestamp = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
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
        return ["BatchEvent|1 event 9|2 properties #0|3 timestamp 3|4 user_id 9?|5 anonymous_id 9?|6 message_id 9?|7 context #1?", n.Struct, w];
      }
    }
    class w extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["AnalyticsContext|1 client #0?", v];
      }
    }
    class v extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["ClientInfo|1 os 9?|2 arch 9?|3 os_version 9?|4 version 9?|5 layout 9?"];
      }
    }
    class _ extends i {
      constructor(e2) {
        super(), this.events = [], n.proto3.util.initPartial(e2, this);
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
        return ["BatchRequest|1 events #0*", y];
      }
    }
    class A extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["BatchResponse"];
      }
    }
    class S extends i {
      constructor(e2) {
        super(), this.level = c.UNSPECIFIED, this.message = "", this.metadata = {}, this.timestamp = n.protoInt64.zero, this.key = "", n.proto3.util.initPartial(e2, this);
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
        return ["ClientLogEntry|1 level #0|2 message 9|3 metadata 9,9|4 timestamp 3|5 error_message 9?|6 error_stack 9?|7 key 9", c];
      }
    }
    class b extends i {
      constructor(e2) {
        super(), this.logs = [], n.proto3.util.initPartial(e2, this);
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
        return ["SubmitLogsRequest|1 logs #0*", S];
      }
    }
    class E extends i {
      constructor(e2) {
        super(), this.success = false, this.logsProcessed = 0, this.logsDropped = 0, n.proto3.util.initPartial(e2, this);
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
        return ["SubmitLogsResponse|1 success 8|2 error_message 9?|3 logs_processed 13|4 logs_dropped 13"];
      }
    }
    class I extends i {
      constructor(e2) {
        super(), this.conversationId = "", this.transcript = "", this.lastUpdatedAt = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
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
        return ["IngestConversationRequest|1 conversation_id 9|2 transcript 9|3 transcript_json 9?|4 mode 9?|5 model 9?|6 last_updated_at 3"];
      }
    }
    class C extends i {
      constructor(e2) {
        super(), this.success = false, n.proto3.util.initPartial(e2, this);
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
        return ["IngestConversationResponse|1 success 8|2 summary 9?|3 detailed_summary 9?|4 error_message 9?"];
      }
    }
    class k extends i {
      constructor(e2) {
        super(), this.token = "", this.payload = "", this.payloadHash = "", n.proto3.util.initPartial(e2, this);
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
        return ["UploadIssueTraceRequest|1 token 9|2 payload 9|3 payload_hash 9"];
      }
    }
    class x extends i {
      constructor(e2) {
        super(), this.eventId = "", this.size = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new x().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new x().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new x().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(x, e2, t2);
      }
      static $() {
        return ["UploadIssueTraceResponse|1 event_id 9|2 size 3"];
      }
    }
    class T extends i {
      constructor(e2) {
        super(), this.token = "", this.limit = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new T().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new T().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new T().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(T, e2, t2);
      }
      static $() {
        return ["DownloadIssueTracesRequest|1 token 9|2 limit 5"];
      }
    }
    class R extends i {
      constructor(e2) {
        super(), this.data = new Uint8Array(0), this.totalTraces = 0, this.totalBytes = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new R().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new R().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new R().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(R, e2, t2);
      }
      static $() {
        return ["DownloadIssueTracesResponse|1 data 12|2 total_traces 5|3 total_bytes 3"];
      }
    }
  }