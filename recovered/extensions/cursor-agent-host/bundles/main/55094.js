// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 55094 range:8667375..8679874
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
55094: (e, t, r) => {
    "use strict";
    r.d(t, { $Y: () => U, D9: () => O, Fu: () => N, Kg: () => Q, Kw: () => W, Mq: () => H, Nv: () => $, S1: () => z, VA: () => F, Ye: () => j, dX: () => L, w5: () => V, yT: () => G });
    var n = r(36038), s = r(62671), o = r(19950), i = r(19260), a = r(59903), c = r(88623), l = r(72730), u = r(26885), d = r(89396), p = r(11197), m = r(44498), h = r(31489), f = r(11531), g = r(43643), y = r(12544), w = r(18846), v = r(91448), _ = r(82589), A = r(88107), S = r(83508), b = r(67918), E = r(39857), I = r(83407), C = r(98837), k = r(43464), x = r(71125), T = r(83426), R = r(53996), B = r(43081), P = r(88701), J = r(21180), M = r(70355), q = r(8592);
    class D extends q.HL {
      static get runtime() {
        return (0, q.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class O extends D {
      constructor(e2) {
        super(), this.id = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new O().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new O().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new O().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(O, e2, t2);
      }
      static $() {
        return ["ExecClientStreamClose|1 id 13"];
      }
    }
    class N extends D {
      constructor(e2) {
        super(), this.id = 0, this.error = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new N().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new N().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new N().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(N, e2, t2);
      }
      static $() {
        return ["ExecClientThrow|1 id 13|2 error 9|3 stack_trace 9?|4 error_code 9?"];
      }
    }
    class F extends D {
      constructor(e2) {
        super(), this.id = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new F().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new F().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new F().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(F, e2, t2);
      }
      static $() {
        return ["ExecClientHeartbeat|1 id 13"];
      }
    }
    class U extends D {
      constructor(e2) {
        super(), this.message = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new U().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new U().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new U().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(U, e2, t2);
      }
      static $() {
        return ["ExecClientControlMessage|1 stream_close #0 message|2 throw #1 message|3 heartbeat #2 message", O, N, F];
      }
    }
    class L extends D {
      constructor(e2) {
        super(), this.id = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new L().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new L().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new L().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(L, e2, t2);
      }
      static $() {
        return ["ExecServerAbort|1 id 13"];
      }
    }
    class $ extends D {
      constructor(e2) {
        super(), this.message = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($, e2, t2);
      }
      static $() {
        return ["ExecServerControlMessage|1 abort #0 message", L];
      }
    }
    class Q extends D {
      constructor(e2) {
        super(), this.traceId = "", this.spanId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Q().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Q().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Q().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Q, e2, t2);
      }
      static $() {
        return ["SpanContext|1 trace_id 9|2 span_id 9|3 trace_flags 13?|4 trace_state 9?"];
      }
    }
    class j extends D {
      constructor(e2) {
        super(), this.id = 0, this.execId = "", this.message = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new j().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new j().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new j().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(j, e2, t2);
      }
      static $() {
        return ["ExecServerMessage|1 id 13|15 exec_id 9|57 machine_id 9?|2 shell_args #0 message|3 write_args #1 message|4 delete_args #2 message|5 grep_args #3 message|7 read_args #4 message|29 redacted_read_args #4 message|8 ls_args #5 message|9 diagnostics_args #6 message|10 request_context_args #7 message|11 mcp_args #8 message|14 shell_stream_args #0 message|16 background_shell_spawn_args #9 message|17 list_mcp_resources_exec_args #10 message|18 read_mcp_resource_exec_args #11 message|36 mcp_state_exec_args #12 message|20 fetch_args #13 message|21 record_screen_args #14 message|22 computer_use_args #15 message|23 write_shell_stdin_args #16 message|27 execute_hook_args #17 message|28 subagent_args #18 message|30 force_background_shell_args #19 message|31 force_background_subagent_args #20 message|37 subagent_await_args #21 message|38 smart_mode_classifier_args #22 message|40 canvas_diagnostics_args #23 message|41 shell_allowlist_precheck_args #24 message|42 mcp_allowlist_precheck_args #25 message|43 web_fetch_allowlist_precheck_args #26 message|44 git_diff_request #27 message|45 pi_read_args #28 message|46 pi_bash_args #29 message|47 pi_edit_args #30 message|48 pi_write_args #31 message|49 pi_grep_args #32 message|50 pi_find_args #33 message|51 pi_ls_args #34 message|52 mini_swe_agent_bash_args #0 message|53 conversation_search_args #35 message|54 agent_store_conflict_args #36 message|19 span_context #37?|55 accept_hook_additional_contexts 8?", s.a, o.hY, i.dn, a.Qj, c.a2, l.xe, u._B, d._K, p.E_, m.$P, p.kj, p.DI, p.Km, h.UM, f.zH, g.K5, m.LL, H, y.Pw, s.Hu, y.S3, y.TN, w.Th, v.yN, _.C, A.c, S.K, b.GetDiffRequest, E.cE, I.CU, C.yZ, k.VA, x.gK, T.Vo, R.D8, B.$m, P.Uz, Q];
      }
    }
    class G extends D {
      constructor(e2) {
        super(), this.id = 0, this.execId = "", this.hookAdditionalContexts = [], this.message = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new G().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new G().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new G().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(G, e2, t2);
      }
      static $() {
        return ["ExecClientMessage|1 id 13|15 exec_id 9|39 local_execution_time_ms 5?|45 hook_additional_contexts #0*|2 shell_result #1 message|3 write_result #2 message|4 delete_result #3 message|5 grep_result #4 message|7 read_result #5 message|29 redacted_read_result #5 message|8 ls_result #6 message|9 diagnostics_result #7 message|10 request_context_result #8 message|11 mcp_result #9 message|14 shell_stream #10 message|16 background_shell_spawn_result #11 message|17 list_mcp_resources_exec_result #12 message|18 read_mcp_resource_exec_result #13 message|36 mcp_state_exec_result #14 message|20 fetch_result #15 message|21 record_screen_result #16 message|22 computer_use_result #17 message|23 write_shell_stdin_result #18 message|27 execute_hook_result #19 message|28 subagent_result #20 message|30 force_background_shell_result #21 message|31 force_background_subagent_result #22 message|37 subagent_await_result #23 message|38 smart_mode_classifier_result #24 message|40 canvas_diagnostics_result #25 message|41 shell_allowlist_precheck_result #26 message|42 mcp_allowlist_precheck_result #27 message|43 web_fetch_allowlist_precheck_result #28 message|44 git_diff_response #29 message|46 pi_read_result #30 message|47 pi_bash_result #31 message|48 pi_edit_result #32 message|49 pi_write_result #33 message|50 pi_grep_result #34 message|51 pi_find_result #35 message|52 pi_ls_result #36 message|53 conversation_search_result #37 message|54 agent_store_conflict_result #38 message|55 mini_swe_agent_bash_result #1 message", J.C, s.W4, o.v3, i.Pi, a.Ud, c.sV, l.fv, u.Ek, d._G, p.iz, s.FI, m.Lt, p.kP, p.ZD, p._W, h.uN, f.Tj, g.ks, m.nt, z, y.vS, s.jK, y.a3, y.zJ, w.bN, v.GL, _.e, A.M, S.M, b.GetDiffResponse, E.Q, I.AH, C.u7, k.hO, x.mr, T.bT, R.pX, B.pT, P.Ev];
      }
    }
    class H extends D {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new H().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new H().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new H().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(H, e2, t2);
      }
      static $() {
        return ["ExecuteHookArgs|1 request #0", W];
      }
    }
    class z extends D {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new z().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new z().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new z().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(z, e2, t2);
      }
      static $() {
        return ["ExecuteHookResult|1 response #0", V];
      }
    }
    class W extends D {
      constructor(e2) {
        super(), this.request = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new W().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new W().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new W().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(W, e2, t2);
      }
      static $() {
        return ["ExecuteHookRequest|1 pre_compact #0 request|2 subagent_start #1 request|3 subagent_stop #2 request|4 pre_tool_use #3 request|5 post_tool_use #4 request|6 post_tool_use_failure #5 request|7 before_submit_prompt #6 request|8 after_agent_response #7 request|9 after_agent_thought #8 request|11 stop #9 request", M.Ks, M.b3, M.ty, M.CI, M.rY, M.hy, M.D2, M.mL, M.AL, M.Od];
      }
    }
    class V extends D {
      constructor(e2) {
        super(), this.response = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new V().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new V().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new V().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(V, e2, t2);
      }
      static $() {
        return ["ExecuteHookResponse|1 pre_compact #0 response|2 subagent_start #1 response|3 subagent_stop #2 response|4 pre_tool_use #3 response|5 post_tool_use #4 response|6 post_tool_use_failure #5 response|7 before_submit_prompt #6 response|8 after_agent_response #7 response|9 after_agent_thought #8 response|11 stop #9 response", M.$_, M.W0, M.AH, M.Wn, M.uB, M.U1, M.u1, M.FW, M.H, M.rT];
      }
    }
  }