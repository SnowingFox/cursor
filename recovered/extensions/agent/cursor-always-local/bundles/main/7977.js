// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7977 range:4691392..4706491
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7977: (t2, e2, r2) => {
    "use strict";
    r2.r(e2), r2.d(e2, { AnalyticsContext: () => _, AnalyticsEvent: () => p, BatchEvent: () => A, BatchRequest: () => w, BatchResponse: () => S, BootstrapStatsigRequest: () => c, BootstrapStatsigResponse: () => l, ClientInfo: () => y, ClientLogEntry: () => J, ClientLogLevel: () => u, ClientOS: () => a, DownloadIssueTracesRequest: () => v, DownloadIssueTracesResponse: () => q, EventData: () => f, GetFirstWindowStatsigDecisionRequest: () => m, GetFirstWindowStatsigDecisionResponse: () => d, IngestConversationRequest: () => I, IngestConversationResponse: () => C, SubmitLogsRequest: () => B, SubmitLogsResponse: () => E, TrackEventsRequest: () => h, TrackEventsResponse: () => g, UploadIssueTraceRequest: () => b, UploadIssueTraceResponse: () => k });
    var n2 = r2(6038), s2 = r2(8592);
    const i2 = "aiserver.v1.";
    class o2 extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return i2;
      }
    }
    var a = (0, s2.QT)(n2.proto3, i2, "ClientOS", [[0, "CLIENT_OS_UNSPECIFIED"], [1, "CLIENT_OS_WINDOWS"], [2, "CLIENT_OS_MACOS"], [3, "CLIENT_OS_LINUX"], [4, "CLIENT_OS_IOS"], [5, "CLIENT_OS_ANDROID"]]), u = (0, s2.QT)(n2.proto3, i2, "ClientLogLevel", [[0, "UNSPECIFIED"], [1, "INFO"], [2, "DEBUG"], [3, "WARN"], [4, "ERROR"]], 1);
    class c extends o2 {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["BootstrapStatsigRequest|1 ignore_dev_status 8?|2 operating_system #0?|3 device_model 9?|4 os_version 9?|5 form_factor 9?|6 stable_id 9?|7 client_channel 9?|8 bundle_id 9?|9 mobile_app_store_country 9?|10 native_build 9?|11 ota_update_id 9?|12 ota_runtime_version 9?|13 ota_embedded_launch 8?", a];
      }
    }
    class l extends o2 {
      constructor(t3) {
        super(), this.config = "", this.generatedAtMs = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
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
        return ["BootstrapStatsigResponse|1 config 9|2 generated_at_ms 4"];
      }
    }
    class m extends o2 {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["GetFirstWindowStatsigDecisionRequest|1 operating_system #0?", a];
      }
    }
    class d extends o2 {
      constructor(t3) {
        super(), this.variant = "", this.reason = "", n2.proto3.util.initPartial(t3, this);
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
        return ["GetFirstWindowStatsigDecisionResponse|1 variant 9|2 reason 9"];
      }
    }
    class f extends o2 {
      constructor(t3) {
        super(), this.data = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["EventData|1 string_value 9 data|2 int_value 3 data|3 bool_value 8 data|4 double_value 1 data"];
      }
    }
    class p extends o2 {
      constructor(t3) {
        super(), this.eventName = "", this.eventData = {}, this.timestamp = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
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
        return ["AnalyticsEvent|1 event_name 9|2 event_data 9,#0|3 timestamp 3", f];
      }
    }
    class h extends o2 {
      constructor(t3) {
        super(), this.events = [], n2.proto3.util.initPartial(t3, this);
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
        return ["TrackEventsRequest|1 events #0*", p];
      }
    }
    class g extends o2 {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["TrackEventsResponse"];
      }
    }
    class A extends o2 {
      constructor(t3) {
        super(), this.event = "", this.timestamp = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
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
        return ["BatchEvent|1 event 9|2 properties #0|3 timestamp 3|4 user_id 9?|5 anonymous_id 9?|6 message_id 9?|7 context #1?", n2.Struct, _];
      }
    }
    class _ extends o2 {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["AnalyticsContext|1 client #0?", y];
      }
    }
    class y extends o2 {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ClientInfo|1 os 9?|2 arch 9?|3 os_version 9?|4 version 9?|5 layout 9?"];
      }
    }
    class w extends o2 {
      constructor(t3) {
        super(), this.events = [], n2.proto3.util.initPartial(t3, this);
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
        return ["BatchRequest|1 events #0*", A];
      }
    }
    class S extends o2 {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["BatchResponse"];
      }
    }
    class J extends o2 {
      constructor(t3) {
        super(), this.level = u.UNSPECIFIED, this.message = "", this.metadata = {}, this.timestamp = n2.protoInt64.zero, this.key = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ClientLogEntry|1 level #0|2 message 9|3 metadata 9,9|4 timestamp 3|5 error_message 9?|6 error_stack 9?|7 key 9", u];
      }
    }
    class B extends o2 {
      constructor(t3) {
        super(), this.logs = [], n2.proto3.util.initPartial(t3, this);
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
        return ["SubmitLogsRequest|1 logs #0*", J];
      }
    }
    class E extends o2 {
      constructor(t3) {
        super(), this.success = false, this.logsProcessed = 0, this.logsDropped = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["SubmitLogsResponse|1 success 8|2 error_message 9?|3 logs_processed 13|4 logs_dropped 13"];
      }
    }
    class I extends o2 {
      constructor(t3) {
        super(), this.conversationId = "", this.transcript = "", this.lastUpdatedAt = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
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
        return ["IngestConversationRequest|1 conversation_id 9|2 transcript 9|3 transcript_json 9?|4 mode 9?|5 model 9?|6 last_updated_at 3"];
      }
    }
    class C extends o2 {
      constructor(t3) {
        super(), this.success = false, n2.proto3.util.initPartial(t3, this);
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
        return ["IngestConversationResponse|1 success 8|2 summary 9?|3 detailed_summary 9?|4 error_message 9?"];
      }
    }
    class b extends o2 {
      constructor(t3) {
        super(), this.token = "", this.payload = "", this.payloadHash = "", n2.proto3.util.initPartial(t3, this);
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
        return ["UploadIssueTraceRequest|1 token 9|2 payload 9|3 payload_hash 9"];
      }
    }
    class k extends o2 {
      constructor(t3) {
        super(), this.eventId = "", this.size = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new k().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new k().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new k().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(k, t3, e3);
      }
      static $() {
        return ["UploadIssueTraceResponse|1 event_id 9|2 size 3"];
      }
    }
    class v extends o2 {
      constructor(t3) {
        super(), this.token = "", this.limit = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new v().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new v().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new v().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(v, t3, e3);
      }
      static $() {
        return ["DownloadIssueTracesRequest|1 token 9|2 limit 5"];
      }
    }
    class q extends o2 {
      constructor(t3) {
        super(), this.data = new Uint8Array(0), this.totalTraces = 0, this.totalBytes = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new q().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new q().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new q().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(q, t3, e3);
      }
      static $() {
        return ["DownloadIssueTracesResponse|1 data 12|2 total_traces 5|3 total_bytes 3"];
      }
    }
  }