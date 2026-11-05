// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1840 range:614058..637365
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1840: (t2, e2, r2) => {
    "use strict";
    r2.r(e2), r2.d(e2, { CapturedProfile: () => J, CapturedWebProfile: () => E, ChatRequestTelemetryEvent: () => F, Interaction: () => B, InteractionType: () => c, PerformanceEvent: () => _, PerformanceEventType: () => a, PerformanceMetric: () => v, ProfileKind: () => u, ReportInlineActionRequest: () => m, ReportInlineActionResponse: () => d, ReportMetricsRequest: () => f, ReportMetricsRequest_Metric: () => p, ReportMetricsRequest_NamedMetric: () => h, ReportMetricsResponse: () => g, ScriptTiming: () => A, SpanKind: () => l, Status: () => R, Status_StatusCode: () => P, SubmitChatRequestEventsRequest: () => M, SubmitChatRequestEventsResponse: () => O, SubmitInteractionWindowRequest: () => b, SubmitInteractionWindowResponse: () => k, SubmitPerformanceEventsRequest: () => w, SubmitPerformanceEventsResponse: () => S, SubmitProfileRequest: () => I, SubmitProfileResponse: () => C, SubmitSpansRequest: () => x, SubmitSpansResponse: () => N, SubmitToolCallEventsRequest: () => D, SubmitToolCallEventsResponse: () => U, SystemMetadata: () => y, ToolCallTelemetryEvent: () => Q, TraceLink: () => T, TraceSpan: () => q });
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
    var a = (0, s2.QT)(n2.proto3, i2, "PerformanceEventType", [[0, "UNSPECIFIED"], [1, "CLICK"], [2, "POINTER"], [3, "TOUCH"], [4, "KEYDOWN"], [5, "KEYUP"], [6, "SCROLL"], [7, "LONG_ANIMATION_FRAME"], [8, "MOUSEDOWN"], [9, "MOUSEUP"]], 1), u = (0, s2.QT)(n2.proto3, i2, "ProfileKind", [[0, "UNSPECIFIED"], [1, "WALL"], [2, "ALLOCATION"], [3, "CPU"]], 1), c = (0, s2.QT)(n2.proto3, i2, "InteractionType", [[0, "UNSPECIFIED"], [1, "CLICK"], [2, "KEYPRESS"]], 1), l = (0, s2.QT)(n2.proto3, i2, "SpanKind", [[0, "UNSPECIFIED"], [1, "INTERNAL"], [2, "SERVER"], [3, "CLIENT"], [4, "PRODUCER"], [5, "CONSUMER"]], 1);
    class m extends o2 {
      constructor(t3) {
        super(), this.action = "", this.generationUuid = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ReportInlineActionRequest|1 action 9|2 generation_uuid 9"];
      }
    }
    class d extends o2 {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ReportInlineActionResponse"];
      }
    }
    class f extends o2 {
      constructor(t3) {
        super(), this.metrics = {}, this.metricsList = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ReportMetricsRequest|1 metrics 9,#0|2 metrics_list #1*", p, h];
      }
    }
    class p extends o2 {
      constructor(t3) {
        super(), this.tags = {}, n2.proto3.util.initPartial(t3, this);
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
        return ["ReportMetricsRequest.Metric|1 value 1?|2 tags 9,9"];
      }
    }
    class h extends o2 {
      constructor(t3) {
        super(), this.name = "", this.tags = {}, n2.proto3.util.initPartial(t3, this);
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
        return ["ReportMetricsRequest.NamedMetric|1 name 9|2 value 1?|3 tags 9,9"];
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
        return ["ReportMetricsResponse"];
      }
    }
    class A extends o2 {
      constructor(t3) {
        super(), this.name = "", this.startTime = 0, this.duration = 0, this.executionStart = 0, this.forcedStyleAndLayoutDuration = 0, this.pauseDuration = 0, this.sourceUrl = "", this.sourceFunctionName = "", this.sourceCharPosition = 0, this.invokerType = "", this.windowAttribution = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ScriptTiming|1 name 9|2 start_time 1|3 duration 1|4 execution_start 1|5 forced_style_and_layout_duration 1|6 pause_duration 1|7 source_url 9|8 source_function_name 9|9 source_char_position 5|10 invoker 9?|11 invoker_type 9|12 window_attribution 9"];
      }
    }
    class _ extends o2 {
      constructor(t3) {
        super(), this.eventType = a.UNSPECIFIED, this.performanceTimestamp = 0, this.scripts = [], this.metadata = {}, n2.proto3.util.initPartial(t3, this);
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
        return ["PerformanceEvent|1 event_type #0|2 timestamp #1|3 performance_timestamp 1|4 duration 1?|5 target_element 9?|6 target_class 9?|7 target_id 9?|26 target_aria_id 9?|8 client_x 5?|9 client_y 5?|10 key 9?|11 code 9?|12 ctrl_key 8?|13 alt_key 8?|14 shift_key 8?|15 meta_key 8?|16 scroll_x 1?|17 scroll_y 1?|18 scroll_delta_x 1?|19 scroll_delta_y 1?|21 render_start 1?|22 style_and_layout_start 1?|23 first_ui_event_timestamp 1?|24 blocking_duration 1?|25 scripts #2*|20 metadata 9,9", a, n2.Timestamp, A];
      }
    }
    class y extends o2 {
      constructor(t3) {
        super(), this.additionalMetadata = {}, n2.proto3.util.initPartial(t3, this);
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
        return ["SystemMetadata|1 timestamp #0|2 memory_used_mb 1?|3 memory_total_mb 1?|4 cpu_usage_percent 1?|5 active_tabs_count 5?|6 open_editors_count 5?|7 window_focused 8?|8 window_size 9?|9 additional_metadata 9,9", n2.Timestamp];
      }
    }
    class w extends o2 {
      constructor(t3) {
        super(), this.sessionId = "", this.events = [], this.clientVersion = "", this.clientCommit = "", this.platformTags = {}, this.metrics = [], n2.proto3.util.initPartial(t3, this);
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
        return ["SubmitPerformanceEventsRequest|1 session_id 9|2 events #0*|3 system_metadata #1?|4 client_version 9|5 client_commit 9|6 platform_tags 9,9|7 window_type 9?|8 metrics #2*", _, y, v];
      }
    }
    class S extends o2 {
      constructor(t3) {
        super(), this.success = false, this.eventsProcessed = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["SubmitPerformanceEventsResponse|1 success 8|2 error_message 9?|3 events_processed 5"];
      }
    }
    class J extends o2 {
      constructor(t3) {
        super(), this.profileData = new Uint8Array(0), this.profileConfigId = "", this.profileKind = u.UNSPECIFIED, this.tags = {}, n2.proto3.util.initPartial(t3, this);
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
        return ["CapturedProfile|1 timestamp #0|2 duration #1|3 profile_data 12|4 profile_config_id 9|5 profile_kind #2|6 tags 9,9", n2.Timestamp, n2.Duration, u];
      }
    }
    class B extends o2 {
      constructor(t3) {
        super(), this.id = "", this.type = c.UNSPECIFIED, this.performanceStartTimestamp = 0, this.performanceEndTimestamp = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["Interaction|1 id 9|2 type #0|3 performance_start_timestamp 1|4 performance_end_timestamp 1", c];
      }
    }
    class E extends o2 {
      constructor(t3) {
        super(), this.traceData = new Uint8Array(0), this.tags = {}, n2.proto3.util.initPartial(t3, this);
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
        return ["CapturedWebProfile|1 timestamp #0|3 trace_data 12|4 tags 9,9", n2.Timestamp];
      }
    }
    class I extends o2 {
      constructor(t3) {
        super(), this.profiles = [], n2.proto3.util.initPartial(t3, this);
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
        return ["SubmitProfileRequest|1 profiles #0*", J];
      }
    }
    class C extends o2 {
      constructor(t3) {
        super(), this.profileIds = [], n2.proto3.util.initPartial(t3, this);
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
        return ["SubmitProfileResponse|1 profile_ids 9*"];
      }
    }
    class b extends o2 {
      constructor(t3) {
        super(), this.interactions = [], this.sessionId = "", n2.proto3.util.initPartial(t3, this);
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
        return ["SubmitInteractionWindowRequest|1 time_origin #0|2 web_profile #1|3 interactions #2*|4 session_id 9", n2.Timestamp, E, B];
      }
    }
    class k extends o2 {
      constructor(t3) {
        super(), this.success = false, n2.proto3.util.initPartial(t3, this);
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
        return ["SubmitInteractionWindowResponse|1 success 8|2 error_message 9?"];
      }
    }
    class v extends o2 {
      constructor(t3) {
        super(), this.name = "", this.value = 0, this.metadata = {}, n2.proto3.util.initPartial(t3, this);
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
        return ["PerformanceMetric|1 timestamp #0|2 name 9|3 value 1|4 unit 9?|5 metadata 9,9", n2.Timestamp];
      }
    }
    class q extends o2 {
      constructor(t3) {
        super(), this.traceId = "", this.spanId = "", this.name = "", this.attributes = {}, this.links = [], n2.proto3.util.initPartial(t3, this);
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
        return ["TraceSpan|1 trace_id 9|2 span_id 9|3 parent_span_id 9?|4 name 9|5 start_time #0|6 end_time #0|7 attributes 9,9|8 error 8?|9 trace_state 9?|10 flags 13?|11 kind #1?|12 status #2?|13 links #3*", n2.Timestamp, l, R, T];
      }
    }
    class R extends o2 {
      constructor(t3) {
        super(), this.message = "", this.code = P.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new R().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new R().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new R().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(R, t3, e3);
      }
      static $() {
        return ["Status|1 message 9|2 code #0", P];
      }
    }
    var P = (0, s2.QT)(n2.proto3, i2, "Status.StatusCode", [[0, "UNSPECIFIED"], [1, "OK"], [2, "ERROR"]], 1);
    class T extends o2 {
      constructor(t3) {
        super(), this.traceId = "", this.spanId = "", this.attributes = {}, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new T().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new T().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new T().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(T, t3, e3);
      }
      static $() {
        return ["TraceLink|1 trace_id 9|2 span_id 9|3 trace_state 9?|4 attributes 9,9|5 flags 13?"];
      }
    }
    class x extends o2 {
      constructor(t3) {
        super(), this.spans = [], this.clientVersion = "", this.clientCommit = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new x().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new x().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new x().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(x, t3, e3);
      }
      static $() {
        return ["SubmitSpansRequest|1 spans #0*|2 client_version 9|3 client_commit 9", q];
      }
    }
    class N extends o2 {
      constructor(t3) {
        super(), this.success = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new N().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new N().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new N().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(N, t3, e3);
      }
      static $() {
        return ["SubmitSpansResponse|1 success 8|2 error_message 9?"];
      }
    }
    class D extends o2 {
      constructor(t3) {
        super(), this.sessionId = "", this.events = [], this.clientVersion = "", this.clientCommit = "", this.platformTags = {}, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new D().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new D().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new D().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(D, t3, e3);
      }
      static $() {
        return ["SubmitToolCallEventsRequest|1 session_id 9|2 events #0*|3 client_version 9|4 client_commit 9|5 platform_tags 9,9|6 window_type 9?", Q];
      }
    }
    class U extends o2 {
      constructor(t3) {
        super(), this.success = false, this.eventsProcessed = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new U().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new U().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new U().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(U, t3, e3);
      }
      static $() {
        return ["SubmitToolCallEventsResponse|1 success 8|2 error_message 9?|3 events_processed 5"];
      }
    }
    class Q extends o2 {
      constructor(t3) {
        super(), this.toolCallId = "", this.toolType = "", this.chatRequestUuid = "", this.modelName = "", this.isParallel = false, this.success = false, this.metadata = {}, this.isStream = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Q().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Q().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Q().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Q, t3, e3);
      }
      static $() {
        return ["ToolCallTelemetryEvent|1 tool_call_id 9|2 tool_type 9|3 chat_request_uuid 9|4 model_name 9|5 start_time #0|6 end_time #0|7 duration #1|8 is_parallel 8|9 parallel_batch_size 5?|10 success 8|11 error_message 9?|12 metadata 9,9|13 approval_wait_duration #1?|14 is_stream 8", n2.Timestamp, n2.Duration];
      }
    }
    class M extends o2 {
      constructor(t3) {
        super(), this.sessionId = "", this.events = [], this.clientVersion = "", this.clientCommit = "", this.platformTags = {}, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new M().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new M().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new M().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(M, t3, e3);
      }
      static $() {
        return ["SubmitChatRequestEventsRequest|1 session_id 9|2 events #0*|3 client_version 9|4 client_commit 9|5 platform_tags 9,9|6 window_type 9?", F];
      }
    }
    class O extends o2 {
      constructor(t3) {
        super(), this.success = false, this.eventsProcessed = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new O().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new O().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new O().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(O, t3, e3);
      }
      static $() {
        return ["SubmitChatRequestEventsResponse|1 success 8|2 error_message 9?|3 events_processed 5"];
      }
    }
    class F extends o2 {
      constructor(t3) {
        super(), this.chatRequestUuid = "", this.requestedModel = "", this.actualModel = "", this.success = false, this.completionStatus = "", this.metadata = {}, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new F().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new F().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new F().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(F, t3, e3);
      }
      static $() {
        return ["ChatRequestTelemetryEvent|1 chat_request_uuid 9|2 requested_model 9|3 actual_model 9|4 start_time #0|5 end_time #0|6 duration #1|7 success 8|8 error_message 9?|9 transport 9?|10 completion_status 9|11 metadata 9,9|12 total_ttft_ms 1?|13 total_generate_ms 1?|14 total_stream_ms 1?|15 total_request_ms 1?|16 model_call_count 5?|17 total_tool_call_latency 1?|18 tool_call_count 5?", n2.Timestamp, n2.Duration];
      }
    }
  }