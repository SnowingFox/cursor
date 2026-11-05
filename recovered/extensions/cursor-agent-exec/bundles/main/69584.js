// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 69584 range:6181837..6298523
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
69584: (e, t, r) => {
    "use strict";
    r.d(t, { $$B: () => qe, $Zl: () => Pe, $rl: () => Ie, AMN: () => Jr, Aiv: () => tr, Anz: () => vr, B1y: () => yt, BU$: () => nn, Bjv: () => Fr, Cnm: () => fn, D$r: () => rr, DC: () => Je, Dk0: () => Zt, Dm_: () => ze, Dsb: () => br, ECk: () => Vr, EKX: () => Ve, FPh: () => wt, FRJ: () => Or, FrG: () => _r, Fyz: () => Kr, Gd6: () => sr, Gmx: () => Nr, H1o: () => Xt, H3V: () => Cr, HMi: () => wn, HsH: () => Rt, I0n: () => Gr, IQS: () => Lr, IZk: () => Oe, Ibo: () => qr, IkE: () => De, JDM: () => vt, KFq: () => rt, KKi: () => ft, KRq: () => wr, Kwc: () => tt, LLS: () => jr, Lrv: () => sn, My2: () => st, Mzv: () => Ir, NH9: () => Ar, Nn_: () => Zr, Nsi: () => gt, O$x: () => Pt, OnN: () => ve, PSN: () => an, Pd7: () => _n, Pmj: () => Ft, PtE: () => Ur, PyH: () => Ke, QFf: () => Ze, RCW: () => Rr, RGk: () => er, RP3: () => Nt, TGR: () => Yt, TK5: () => xn, TNM: () => hn, TTG: () => Ut, ThX: () => lr, Tm3: () => ur, U4S: () => Ne, UU9: () => Re, Ulp: () => Sr, Uq: () => gn, V1v: () => Qe, VNy: () => Er, Vtf: () => kt, WAK: () => At, Xg3: () => Be, Y5: () => bn, Y9z: () => Br, YbX: () => Se, Yxp: () => fr, Yzv: () => Te, ZKF: () => $e, ZM9: () => Xr, ZVT: () => vn, _4P: () => Jt, _8g: () => Vt, aFC: () => We, aK_: () => Mr, aZc: () => ye, aon: () => Fe, apn: () => un, ayE: () => nt, b63: () => yn, bct: () => Ge, c0E: () => pn, cHB: () => Wr, cIe: () => ht, cX_: () => pt, c_h: () => ke, cmU: () => pr, czD: () => _t, d2k: () => xr, dDN: () => dr, dWK: () => Ce, dl_: () => Me, dwJ: () => rn, e9f: () => Bt, eus: () => Ue, f1A: () => Mt, fxF: () => zr, gan: () => Kt, hGJ: () => It, hNe: () => qt, i0p: () => En, iBA: () => ut, iBx: () => Tn, iDt: () => Pr, iF_: () => St, iHX: () => et, i_E: () => ct, ih1: () => Qr, j97: () => cr, kJk: () => Xe, kxJ: () => je, lJj: () => en, lWT: () => Yr, lkY: () => dt, lq6: () => _e, mDu: () => kr, mXO: () => mt, mue: () => dn, nh0: () => Ht, o7L: () => Dt, oIR: () => ir, q8c: () => mn, qKL: () => ar, qKo: () => Lt, qZY: () => Sn, qon: () => or, rhc: () => Tr, rq$: () => hr, sYv: () => be, sk_: () => yr, tr3: () => Hr, ttX: () => Ot, uHL: () => we, umU: () => Qt, upy: () => ln, v$T: () => tn, vns: () => xe, wBg: () => Le, xBB: () => cn, xF4: () => Ye, xQ8: () => Ae, xuG: () => $r, xyI: () => ge, y35: () => He, yfd: () => on, zT: () => kn, zg9: () => bt });
    var n = r(36038), s = r(11491), o = r(202), i = r(50565), a = r(58544), c = r(15354), l = r(42506), u = r(76222), d = r(6450), p = r(14151), m = r(43135), h = r(6060), f = r(48331), g = r(48170), y = r(32325), w = r(47103), v = r(85814), _ = r(68892), b = r(98320), S = r(70682), k = r(97747), x = r(35110), E = r(43643), I = r(69495), T = r(95621), C = r(37735), P = r(86592), A = r(7577), R = r(337), M = r(60867), J = r(75178), O = r(76476), B = r(16821), D = r(46326), q = r(99348), N = r(62379), F = r(28689), U = r(39129), L = r(7972), $ = r(23476), j = r(55525), G = r(36584), z = r(93520), W = r(21819), H = r(12522), K = r(26880), V = r(41834), Y = r(82628), Q = r(75377), X = r(64772), Z = r(78639), ee = r(35733), te = r(90028), re = r(35133), ne = r(53145), se = r(47385), oe = r(828), ie = r(92093), ae = r(63583), ce = r(21180), le = r(89396), ue = r(62671), de = r(89582), pe = r(86209), me = (r(34175), r(38427), r(8592));
    const he = "agent.v1.";
    class fe extends me.HL {
      static get runtime() {
        return (0, me.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return he;
      }
    }
    var ge = (0, me.QT)(n.proto3, he, "AgentMode", [[0, "UNSPECIFIED"], [1, "AGENT"], [2, "ASK"], [3, "PLAN"], [4, "DEBUG"], [5, "TRIAGE"], [7, "MULTITASK"], [8, "CUSTOM"]], 1), ye = (0, me.QT)(n.proto3, he, "BackgroundTaskKind", [[0, "UNSPECIFIED"], [1, "SHELL"], [2, "SUBAGENT"]], 1), we = (0, me.QT)(n.proto3, he, "BackgroundTaskStatus", [[0, "UNSPECIFIED"], [1, "SUCCESS"], [2, "ERROR"], [3, "ABORTED"]], 1), ve = (0, me.QT)(n.proto3, he, "BackgroundTaskNotificationContext", [[0, "UNSPECIFIED"], [1, "USER_DRIVEN_INTERACTIVE_CHILD"]], 1), _e = (0, me.QT)(n.proto3, he, "SubagentRunStatus", [[0, "UNSPECIFIED"], [1, "RUNNING"], [2, "BACKGROUNDED"], [3, "SUCCESS"], [4, "ERROR"], [5, "ABORTED"]], 1), be = (0, me.QT)(n.proto3, he, "SubagentDispatchTool", [[0, "UNSPECIFIED"], [1, "TASK"], [2, "CREATE_AGENT"], [3, "SEND_TO_AGENT"]], 1), Se = (0, me.QT)(n.proto3, he, "CustomModeSource", [[0, "UNSPECIFIED"], [1, "AGENT_SKILL"], [2, "PLUGIN_SKILL"], [3, "REPO_SKILL"], [4, "MANAGED_SKILL"]], 1), ke = (0, me.QT)(n.proto3, he, "SimulatedMsgReason", [[0, "UNSPECIFIED"], [1, "PLAN_EXECUTION"], [2, "COMMIT_REMINDER"], [3, "BACKGROUND_TASK_COMPLETION"], [4, "DIFF_TAB_COMMIT"], [5, "DIFF_TAB_COMMIT_AND_PUSH"], [6, "DIFF_TAB_PUSH"], [7, "DIFF_TAB_CREATE_PR"], [8, "DIFF_TAB_FIX_MERGE_CONFLICTS"], [9, "USER_SENT_TO_SUBAGENT"], [10, "USER_INTERRUPTED_SUBAGENT"], [11, "USER_QUEUED_TO_SUBAGENT"], [12, "BABYSIT_PR_IN_CLOUD"], [13, "CI_PANEL_INVESTIGATE_FAILURE"], [14, "MULTITASK"], [15, "BUILD_IN_PARALLEL"], [16, "MULTITASK_SPLIT_PRS"], [17, "APPLY_LOCALLY"], [18, "CHECKOUT_BRANCH"], [19, "DIFF_TAB_UPDATE_BRANCH"], [20, "PR_TAB_BUGBOT_FIX"], [22, "RUN_BUGBOT_REVIEW"], [23, "RUN_SECURITY_REVIEW"], [24, "FSD_APPLY_FINDING"], [25, "FSD_UNDO_FINDING"], [26, "FSD_START"], [27, "FSD_PR_INTERRUPT"], [28, "SUBSCRIPTION"], [29, "DIFF_TAB_CREATE_BRANCH"], [30, "AGENT_STORE_CONFLICT"], [31, "GOAL_CONTINUATION"], [32, "PROJECT_KICKOFF"], [33, "MARKDOWN_PROMPT_BUTTON"], [34, "USER_QUICK_ACTION"], [35, "INTERACTION_RESPONSE"]], 1), xe = (0, me.QT)(n.proto3, he, "SubscriptionSource", [[0, "UNSPECIFIED"], [1, "SLACK"], [2, "GITHUB"], [3, "LINEAR"], [4, "ORIGIN"], [5, "FACTORY"]], 1), Ee = (0, me.QT)(n.proto3, he, "ThinkingStyle", [[0, "UNSPECIFIED"], [1, "DEFAULT"], [2, "CODEX"], [3, "GPT5"]], 1), Ie = (0, me.QT)(n.proto3, he, "ResponseComparisonDisplayOrder", [[0, "UNSPECIFIED"], [1, "PARENT_FIRST"], [2, "ALTERNATE_FIRST"]], 1), Te = (0, me.QT)(n.proto3, he, "ResponseComparisonSkipReason", [[0, "UNSPECIFIED"], [1, "ALTERNATE_TOOL_CALL"], [2, "INFERENCE_ERROR"], [3, "TIMEOUT"], [4, "CANCELLED"]], 1);
    class Ce extends fe {
      constructor(e2) {
        super(), this.description = "", this.prompt = "", this.attachments = [], this.mode = s.FL.UNSPECIFIED, this.respondingToMessageIds = [], this.environment = s.dU.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ce().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ce().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ce().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ce, e2, t2);
      }
      static $() {
        return ["TaskArgs|1 description 9|2 prompt 9|3 subagent_type #0|4 model 9?|5 resume 9?|6 agent_id 9?|7 attachments 9*|8 mode #1|9 responding_to_message_ids 9*|10 environment #2|11 machine #3?", s._L, s.FL, s.dU, Pe];
      }
    }
    class Pe extends fe {
      constructor(e2) {
        super(), this.machine = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Pe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Pe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Pe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Pe, e2, t2);
      }
      static $() {
        return ["TargetMachine|1 same_machine #0 machine|2 new_cloud_vm #1 machine|3 self_hosted_worker #2 machine|4 self_hosted_pool #3 machine", Ae, Re, Me, Je];
      }
    }
    class Ae extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ae().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ae().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ae().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ae, e2, t2);
      }
      static $() {
        return ["SameMachineTarget"];
      }
    }
    class Re extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Re().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Re().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Re().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Re, e2, t2);
      }
      static $() {
        return ["NewCloudVmTarget|1 environment_build_id 9?|2 base_branch 9?"];
      }
    }
    class Me extends fe {
      constructor(e2) {
        super(), this.workerId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Me().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Me().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Me().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Me, e2, t2);
      }
      static $() {
        return ["SelfHostedWorkerTarget|1 worker_id 9"];
      }
    }
    class Je extends fe {
      constructor(e2) {
        super(), this.labels = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Je().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Je().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Je().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Je, e2, t2);
      }
      static $() {
        return ["SelfHostedPoolTarget|1 pool 9?|2 labels #0*", Oe];
      }
    }
    class Oe extends fe {
      constructor(e2) {
        super(), this.key = "", this.value = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Oe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Oe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Oe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Oe, e2, t2);
      }
      static $() {
        return ["SelfHostedWorkerLabel|1 key 9|2 value 9"];
      }
    }
    class Be extends fe {
      constructor(e2) {
        super(), this.conversationSteps = [], this.isBackground = false, this.backgroundReason = s.qL.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Be().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Be().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Be().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Be, e2, t2);
      }
      static $() {
        return ["TaskSuccess|1 conversation_steps #0*|2 agent_id 9?|3 is_background 8|4 duration_ms 4?|5 result_suffix 9?|6 background_reason #1|7 transcript_path 9?", Xe, s.qL];
      }
    }
    class De extends fe {
      constructor(e2) {
        super(), this.error = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new De().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new De().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new De().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(De, e2, t2);
      }
      static $() {
        return ["TaskError|1 error 9"];
      }
    }
    class qe extends fe {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qe, e2, t2);
      }
      static $() {
        return ["TaskResult|1 success #0 result|2 error #1 result", Be, De];
      }
    }
    class Ne extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ne().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ne().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ne().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ne, e2, t2);
      }
      static $() {
        return ["TaskToolCall|1 args #0|2 result #1|3 cloud_agent_bc_id 9?", Ce, qe];
      }
    }
    class Fe extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Fe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Fe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Fe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Fe, e2, t2);
      }
      static $() {
        return ["TaskToolCallDelta|1 interaction_update #0", gn];
      }
    }
    class Ue extends fe {
      constructor(e2) {
        super(), this.path = "", this.branchName = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ue().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ue().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ue().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ue, e2, t2);
      }
      static $() {
        return ["SetActiveBranchArgs|1 path 9|2 branch_name 9"];
      }
    }
    class Le extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Le().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Le().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Le().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Le, e2, t2);
      }
      static $() {
        return ["SetActiveBranchSuccess"];
      }
    }
    class $e extends fe {
      constructor(e2) {
        super(), this.error = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $e().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $e().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $e().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($e, e2, t2);
      }
      static $() {
        return ["SetActiveBranchError|1 error 9"];
      }
    }
    class je extends fe {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new je().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new je().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new je().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(je, e2, t2);
      }
      static $() {
        return ["SetActiveBranchResult|1 success #0 result|2 error #1 result", Le, $e];
      }
    }
    class Ge extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ge().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ge().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ge().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ge, e2, t2);
      }
      static $() {
        return ["SetActiveBranchToolCall|1 args #0|2 result #1", Ue, je];
      }
    }
    class ze extends fe {
      constructor(e2) {
        super(), this.tool = { case: void 0 }, this.hookAdditionalContexts = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ze().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ze().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ze().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ze, e2, t2);
      }
      static $() {
        return ["ToolCall|1 shell_tool_call #0 tool|3 delete_tool_call #1 tool|4 glob_tool_call #2 tool|5 grep_tool_call #3 tool|8 read_tool_call #4 tool|9 update_todos_tool_call #5 tool|10 read_todos_tool_call #6 tool|12 edit_tool_call #7 tool|13 ls_tool_call #8 tool|14 read_lints_tool_call #9 tool|15 mcp_tool_call #10 tool|16 sem_search_tool_call #11 tool|17 create_plan_tool_call #12 tool|18 web_search_tool_call #13 tool|19 task_tool_call #14 tool|20 list_mcp_resources_tool_call #15 tool|21 read_mcp_resource_tool_call #16 tool|22 apply_agent_diff_tool_call #17 tool|23 ask_question_tool_call #18 tool|24 fetch_tool_call #19 tool|25 switch_mode_tool_call #20 tool|28 generate_image_tool_call #21 tool|29 record_screen_tool_call #22 tool|30 computer_use_tool_call #23 tool|31 write_shell_stdin_tool_call #24 tool|32 reflect_tool_call #25 tool|33 setup_vm_environment_tool_call #26 tool|34 truncated_tool_call #27 tool|35 start_grind_execution_tool_call #28 tool|36 start_grind_planning_tool_call #29 tool|37 web_fetch_tool_call #30 tool|38 report_bugfix_results_tool_call #31 tool|39 ai_attribution_tool_call #32 tool|40 pr_management_tool_call #33 tool|41 mcp_auth_tool_call #34 tool|42 await_tool_call #35 tool|43 blame_by_file_path_tool_call #36 tool|44 get_mcp_tools_tool_call #37 tool|45 report_bug_tool_call #38 tool|46 set_active_branch_tool_call #39 tool|48 communicate_update_tool_call #40 tool|49 send_final_summary_tool_call #41 tool|51 replace_env_tool_call #42 tool|52 edit_pr_labels_tool_call #43 tool|53 record_ci_investigation_findings_tool_call #44 tool|55 send_message_tool_call #45 tool|56 fetch_cloud_agent_data_tool_call #46 tool|58 send_to_user_tool_call #47 tool|61 pi_read_tool_call #48 tool|62 pi_bash_tool_call #49 tool|63 pi_edit_tool_call #50 tool|64 pi_write_tool_call #51 tool|65 pi_grep_tool_call #52 tool|66 pi_find_tool_call #53 tool|67 pi_ls_tool_call #54 tool|68 connect_scm_tool_call #55 tool|69 search_conversations_tool_call #56 tool|70 create_goal_tool_call #57 tool|71 update_goal_tool_call #58 tool|73 get_agent_status_tool_call #59 tool|74 send_to_agent_tool_call #60 tool|75 read_agent_transcript_tool_call #61 tool|76 create_agent_tool_call #62 tool|77 stop_agent_tool_call #63 tool|79 write_canvas_tool_call #64 tool|80 read_canvas_tool_call #65 tool|81 generate_video_tool_call #66 tool|82 x_search_tool_call #67 tool|54 hook_additional_contexts #68*|57 tool_call_id 9?|59 started_at_ms 4?|60 completed_at_ms 4?", o.$M, i.Y, a.FM, c.j, l.D8, u.bk, u.AJ, d.T6, p.q, m.pP, h.nz, f.ks, g.Ih, y.pn, Ne, w.c, w.$, v.JU, _.OU, b.b, S.Cs, k.r9, x.q, E.t8, I.k, T.YF, C.MU, Ye, P.Jk, A.uo, R.fd, M.U_, J.ex, O.AU, B.NX, D.$0, q.EI, N.mJ, F.FW, Ge, U.fd, L.V2, $.us, j.Kn, G.ge, z.wl, W.H, H.fC, K.oT, V.WJ, Y.EN, Q.xP, X.Os, Z.h1, ee.Tf, te.iO, re.b, ne.GS, ne.Ll, se.kX, se.PL, se.wm, se.oV, se.UR, oe.Kn, oe.LM, ie.jm, ae.Vi, ce.C];
      }
    }
    class We extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new We().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new We().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new We().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(We, e2, t2);
      }
      static $() {
        return ["TruncatedToolCallArgs"];
      }
    }
    class He extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new He().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new He().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new He().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(He, e2, t2);
      }
      static $() {
        return ["TruncatedToolCallSuccess"];
      }
    }
    class Ke extends fe {
      constructor(e2) {
        super(), this.error = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ke().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ke().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ke().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ke, e2, t2);
      }
      static $() {
        return ["TruncatedToolCallError|1 error 9"];
      }
    }
    class Ve extends fe {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ve().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ve().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ve().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ve, e2, t2);
      }
      static $() {
        return ["TruncatedToolCallResult|1 success #0 result|2 error #1 result", He, Ke];
      }
    }
    class Ye extends fe {
      constructor(e2) {
        super(), this.originalStepBlobId = new Uint8Array(0), this.originalStepSizeBytes = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ye().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ye().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ye().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ye, e2, t2);
      }
      static $() {
        return ["TruncatedToolCall|1 original_step_blob_id 12|2 args #0|3 result #1|4 original_step_size_bytes 13|5 preview #2", We, Ve, ze];
      }
    }
    class Qe extends fe {
      constructor(e2) {
        super(), this.delta = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qe, e2, t2);
      }
      static $() {
        return ["ToolCallDelta|1 shell_tool_call_delta #0 delta|2 task_tool_call_delta #1 delta|3 edit_tool_call_delta #2 delta|4 replace_env_tool_call_delta #3 delta", o.Nl, Fe, d.fw, $.km];
      }
    }
    class Xe extends fe {
      constructor(e2) {
        super(), this.message = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xe().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xe().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xe().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xe, e2, t2);
      }
      static $() {
        return ["ConversationStep|1 assistant_message #0 message|2 tool_call #1 message|3 thinking_message #2 message", sr, ze, or];
      }
    }
    class Ze extends fe {
      constructor(e2) {
        super(), this.action = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ze().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ze().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ze().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ze, e2, t2);
      }
      static $() {
        return ["ConversationAction|1 user_message_action #0 action|2 resume_action #1 action|3 cancel_action #2 action|4 summarize_action #3 action|5 shell_command_action #4 action|6 start_plan_action #5 action|7 execute_plan_action #6 action|8 async_ask_question_completion_action #7 action|10 cancel_subagent_action #8 action|12 background_task_completion_action #9 action|13 background_shell_action #10 action|14 background_subagent_action #11 action|16 subscription_notification_action #12 action|18 goal_continuation_action #13 action|19 inject_context_action #14 action|11 triggering_auth_id 9?|15 triggering_user_info #15?|17 request_context_parts #16?", kt, Lt, Ut, jt, Gt, zt, Wt, $t, ot, tt, it, at, xt, Et, It, et, le.sG];
      }
    }
    class et extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new et().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new et().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new et().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(et, e2, t2);
      }
      static $() {
        return ["TriggeringUserInfo|1 auth_id 9?|2 user_id 5?"];
      }
    }
    class tt extends fe {
      constructor(e2) {
        super(), this.completions = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new tt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new tt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new tt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(tt, e2, t2);
      }
      static $() {
        return ["BackgroundTaskCompletionAction|1 completions #0*|2 system_reminder 9?|3 request_context #1", rt, le.bb];
      }
    }
    class rt extends fe {
      constructor(e2) {
        super(), this.taskId = "", this.kind = ye.UNSPECIFIED, this.status = we.UNSPECIFIED, this.title = "", this.reason = s.U6.UNSPECIFIED, this.notificationContext = ve.UNSPECIFIED, this.recordOnly = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new rt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new rt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new rt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(rt, e2, t2);
      }
      static $() {
        return ["BackgroundTaskCompletion|1 task_id 9|2 kind #0|3 status #1|4 title 9|5 detail 9?|6 output_path 9?|7 thread_id 9?|8 reason #2|9 subagent_id 9?|10 tool_call_id 9?|11 notification_context #3|12 completed_at_ms 4?|13 record_only 8", ye, we, s.U6, ve];
      }
    }
    class nt extends fe {
      constructor(e2) {
        super(), this.parentToolCallId = "", this.environment = s.dU.UNSPECIFIED, this.status = _e.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new nt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new nt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new nt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(nt, e2, t2);
      }
      static $() {
        return ["SubagentRunState|1 parent_tool_call_id 9|2 subagent_id 9?|3 environment #0|4 status #1|5 title 9?|6 detail 9?|7 transcript_path 9?|8 output_path 9?|9 completed_timestamp_ms 4?|10 completion_reason #2?", s.dU, _e, s.U6];
      }
    }
    class st extends fe {
      constructor(e2) {
        super(), this.stepIndex = 0, this.toolCallId = "", this.tool = be.UNSPECIFIED, this.backgrounded = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new st().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new st().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new st().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(st, e2, t2);
      }
      static $() {
        return ["SubagentDispatchStep|1 step_index 13|2 tool_call_id 9|3 tool #0|4 backgrounded 8", be];
      }
    }
    class ot extends fe {
      constructor(e2) {
        super(), this.subagentId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ot().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ot().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ot().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ot, e2, t2);
      }
      static $() {
        return ["CancelSubagentAction|1 subagent_id 9"];
      }
    }
    class it extends fe {
      constructor(e2) {
        super(), this.toolCallId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new it().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new it().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new it().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(it, e2, t2);
      }
      static $() {
        return ["BackgroundShellAction|1 tool_call_id 9"];
      }
    }
    class at extends fe {
      constructor(e2) {
        super(), this.toolCallId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new at().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new at().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new at().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(at, e2, t2);
      }
      static $() {
        return ["BackgroundSubagentAction|1 tool_call_id 9"];
      }
    }
    class ct extends fe {
      constructor(e2) {
        super(), this.toolCallId = "", this.resolution = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ct().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ct().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ct().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ct, e2, t2);
      }
      static $() {
        return ["InterruptedPendingToolCallResolution|1 tool_call_id 9|2 shell_result #0 resolution|3 task_result #1 resolution", ue.W4, qe];
      }
    }
    class lt extends fe {
      constructor(e2) {
        super(), this.resolutions = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new lt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new lt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new lt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(lt, e2, t2);
      }
      static $() {
        return ["InterruptedPendingToolCallResolutions|1 resolutions #0*", ct];
      }
    }
    class ut extends fe {
      constructor(e2) {
        super(), this.messages = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ut().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ut().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ut().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ut, e2, t2);
      }
      static $() {
        return ["ConversationHistory|1 messages #0*|2 replace_user_info 8?", dt];
      }
    }
    class dt extends fe {
      constructor(e2) {
        super(), this.message = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new dt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new dt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new dt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(dt, e2, t2);
      }
      static $() {
        return ["ConversationHistoryMessage|1 user #0 message|2 assistant #1 message|3 tool #2 message", pt, gt, bt];
      }
    }
    class pt extends fe {
      constructor(e2) {
        super(), this.content = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pt, e2, t2);
      }
      static $() {
        return ["ConversationHistoryUserMessage|1 content #0*", mt];
      }
    }
    class mt extends fe {
      constructor(e2) {
        super(), this.content = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new mt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new mt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new mt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(mt, e2, t2);
      }
      static $() {
        return ["ConversationHistoryUserContent|1 text #0 content|2 image #1 content", ht, ft];
      }
    }
    class ht extends fe {
      constructor(e2) {
        super(), this.text = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ht().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ht().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ht().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ht, e2, t2);
      }
      static $() {
        return ["ConversationHistoryTextContent|1 text 9"];
      }
    }
    class ft extends fe {
      constructor(e2) {
        super(), this.data = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ft().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ft().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ft().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ft, e2, t2);
      }
      static $() {
        return ["ConversationHistoryImageContent|1 data 9|2 mime_type 9?"];
      }
    }
    class gt extends fe {
      constructor(e2) {
        super(), this.content = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new gt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new gt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new gt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(gt, e2, t2);
      }
      static $() {
        return ["ConversationHistoryAssistantMessage|1 content #0*", yt];
      }
    }
    class yt extends fe {
      constructor(e2) {
        super(), this.content = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new yt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new yt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new yt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(yt, e2, t2);
      }
      static $() {
        return ["ConversationHistoryAssistantContent|1 text #0 content|2 reasoning #1 content|3 redacted_reasoning #2 content|4 tool_call #3 content", ht, wt, vt, _t];
      }
    }
    class wt extends fe {
      constructor(e2) {
        super(), this.text = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new wt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new wt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new wt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(wt, e2, t2);
      }
      static $() {
        return ["ConversationHistoryReasoningContent|1 text 9|2 signature 9?"];
      }
    }
    class vt extends fe {
      constructor(e2) {
        super(), this.data = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new vt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new vt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new vt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(vt, e2, t2);
      }
      static $() {
        return ["ConversationHistoryRedactedReasoningContent|1 data 9"];
      }
    }
    class _t extends fe {
      constructor(e2) {
        super(), this.toolCallId = "", this.toolName = "", this.argsJson = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _t().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _t().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _t().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_t, e2, t2);
      }
      static $() {
        return ["ConversationHistoryToolCall|1 tool_call_id 9|2 tool_name 9|3 args_json 9"];
      }
    }
    class bt extends fe {
      constructor(e2) {
        super(), this.toolCallId = "", this.toolName = "", this.content = [], this.hookAdditionalContexts = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new bt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new bt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new bt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(bt, e2, t2);
      }
      static $() {
        return ["ConversationHistoryToolMessage|1 tool_call_id 9|2 tool_name 9|3 content #0*|4 is_error 8?|5 hook_additional_contexts #1*", St, ce.C];
      }
    }
    class St extends fe {
      constructor(e2) {
        super(), this.content = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new St().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new St().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new St().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(St, e2, t2);
      }
      static $() {
        return ["ConversationHistoryToolResultContent|1 text #0 content|2 image #1 content", ht, ft];
      }
    }
    class kt extends fe {
      constructor(e2) {
        super(), this.prependUserMessages = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new kt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new kt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new kt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(kt, e2, t2);
      }
      static $() {
        return ["UserMessageAction|1 user_message #0|2 request_context #1|3 send_to_interaction_listener 8?|4 prepend_user_messages #0*|6 interrupted_pending_tool_call_resolutions #2?|7 conversation_history #3?|8 trailing_conversation_history #3?", er, le.bb, lt, ut];
      }
    }
    class xt extends fe {
      constructor(e2) {
        super(), this.notifications = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xt, e2, t2);
      }
      static $() {
        return ["SubscriptionNotificationAction|1 notifications #0*|2 request_context #1|3 send_to_interaction_listener 8?", er, le.bb];
      }
    }
    class Et extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Et().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Et().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Et().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Et, e2, t2);
      }
      static $() {
        return ["GoalContinuationAction"];
      }
    }
    class It extends fe {
      constructor(e2) {
        super(), this.injectionId = "", this.expectedRunId = "", this.payload = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new It().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new It().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new It().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(It, e2, t2);
      }
      static $() {
        return ["InjectContextAction|1 injection_id 9|2 expected_run_id 9|3 user_context #0 payload|4 system_context #1 payload", Tt, Ct];
      }
    }
    class Tt extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Tt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Tt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Tt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Tt, e2, t2);
      }
      static $() {
        return ["UserContextInjection|1 user_message #0|2 request_context #1", er, le.bb];
      }
    }
    class Ct extends fe {
      constructor(e2) {
        super(), this.producer = "", this.content = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ct().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ct().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ct().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ct, e2, t2);
      }
      static $() {
        return ["SystemContextInjection|1 producer 9|2 content 9"];
      }
    }
    class Pt extends fe {
      constructor(e2) {
        super(), this.state = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Pt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Pt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Pt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Pt, e2, t2);
      }
      static $() {
        return ["ContextInjectionState|1 queued #0 state|2 delivered #1 state|3 queued_for_next_turn #2 state|4 cancelled #3 state|5 rejected #4 state", At, Rt, Mt, Jt, Ot];
      }
    }
    class At extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new At().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new At().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new At().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(At, e2, t2);
      }
      static $() {
        return ["ContextInjectionQueued"];
      }
    }
    class Rt extends fe {
      constructor(e2) {
        super(), this.step = 0, this.deliveryBatchId = "", this.deliveredAtMs = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Rt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Rt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Rt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Rt, e2, t2);
      }
      static $() {
        return ["ContextInjectionDelivered|1 step 5|2 delivery_batch_id 9|3 delivered_at_ms 3"];
      }
    }
    class Mt extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Mt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Mt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Mt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Mt, e2, t2);
      }
      static $() {
        return ["ContextInjectionQueuedForNextTurn"];
      }
    }
    class Jt extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Jt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Jt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Jt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Jt, e2, t2);
      }
      static $() {
        return ["ContextInjectionCancelled"];
      }
    }
    class Ot extends fe {
      constructor(e2) {
        super(), this.reason = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ot().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ot().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ot().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ot, e2, t2);
      }
      static $() {
        return ["ContextInjectionRejected|1 reason 9"];
      }
    }
    class Bt extends fe {
      constructor(e2) {
        super(), this.id = "", this.label = "", this.source = Se.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Bt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Bt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Bt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Bt, e2, t2);
      }
      static $() {
        return ["SubmittedCustomMode|1 id 9|2 label 9|5 source #0|6 source_path 9?|7 source_hash 9?|10 managed_skill_id 9?|11 plugin_id 9?|12 plugin_snapshot_token 9?", Se];
      }
    }
    class Dt extends fe {
      constructor(e2) {
        super(), this.id = "", this.label = "", this.source = Se.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Dt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Dt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Dt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Dt, e2, t2);
      }
      static $() {
        return ["CustomModeDescriptor|1 id 9|2 label 9|3 description 9?|4 icon 9?|5 color 9?|6 source #0|7 source_path 9?|8 source_hash 9?|9 managed_skill_id 9?|10 plugin_id 9?|11 plugin_snapshot_token 9?", Se];
      }
    }
    class qt extends fe {
      constructor(e2) {
        super(), this.id = "", this.label = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qt, e2, t2);
      }
      static $() {
        return ["SubmittedExitedCustomMode|1 id 9|2 label 9"];
      }
    }
    class Nt extends fe {
      constructor(e2) {
        super(), this.nextMode = ge.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Nt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Nt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Nt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Nt, e2, t2);
      }
      static $() {
        return ["CustomModeExitIntent|1 next_mode #0|2 exited_mode #1", ge, qt];
      }
    }
    class Ft extends fe {
      constructor(e2) {
        super(), this.intent = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ft().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ft().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ft().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ft, e2, t2);
      }
      static $() {
        return ["CustomModeIntent|1 enter #0 intent|2 exit #1 intent", Bt, Nt];
      }
    }
    class Ut extends fe {
      constructor(e2) {
        super(), this.reason = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ut().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ut().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ut().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ut, e2, t2);
      }
      static $() {
        return ["CancelAction|1 reason 9|3 interrupted_pending_tool_call_resolutions #0?", lt];
      }
    }
    class Lt extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Lt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Lt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Lt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Lt, e2, t2);
      }
      static $() {
        return ["ResumeAction|2 request_context #0", le.bb];
      }
    }
    class $t extends fe {
      constructor(e2) {
        super(), this.originalToolCallId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $t().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $t().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $t().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($t, e2, t2);
      }
      static $() {
        return ["AsyncAskQuestionCompletionAction|1 original_tool_call_id 9|2 original_args #0|3 result #1|4 request_context #2", _.ju, _.tz, le.bb];
      }
    }
    class jt extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new jt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new jt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new jt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(jt, e2, t2);
      }
      static $() {
        return ["SummarizeAction"];
      }
    }
    class Gt extends fe {
      constructor(e2) {
        super(), this.execId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Gt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Gt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Gt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Gt, e2, t2);
      }
      static $() {
        return ["ShellCommandAction|1 shell_command #0|2 exec_id 9", ir];
      }
    }
    class zt extends fe {
      constructor(e2) {
        super(), this.isSpec = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new zt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new zt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new zt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(zt, e2, t2);
      }
      static $() {
        return ["StartPlanAction|1 user_message #0|2 request_context #1|3 is_spec 8", er, le.bb];
      }
    }
    class Wt extends fe {
      constructor(e2) {
        super(), this.executionMode = ge.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Wt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Wt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Wt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Wt, e2, t2);
      }
      static $() {
        return ["ExecutePlanAction|1 request_context #0|2 plan #1?|3 plan_file_uri 9?|4 plan_file_content 9?|5 execution_mode #2|6 kickoff_message_id 9?|7 plan_id 9?|8 plan_file_path 9?", le.bb, lr, ge];
      }
    }
    class Ht extends fe {
      constructor(e2) {
        super(), this.interactionId = "", this.skippedQuestionIds = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ht().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ht().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ht().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ht, e2, t2);
      }
      static $() {
        return ["InteractionResponseMetadata|1 interaction_id 9|2 response #0?|3 skipped_question_ids 9*", bn];
      }
    }
    class Kt extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Kt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Kt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Kt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Kt, e2, t2);
      }
      static $() {
        return ["SubscriptionEventDisplay|1 display_label 9?|2 resource_url 9?|3 subscription_id 9?"];
      }
    }
    class Vt extends fe {
      constructor(e2) {
        super(), this.userId = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Vt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Vt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Vt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Vt, e2, t2);
      }
      static $() {
        return ["UserDisplayInfo|1 user_id 5|2 display_name 9?|3 email 9?|4 profile_picture_url 9?"];
      }
    }
    class Yt extends fe {
      constructor(e2) {
        super(), this.planId = "", this.planTitle = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Yt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Yt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Yt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Yt, e2, t2);
      }
      static $() {
        return ["ExecutePlanInfo|1 plan_id 9|2 plan_title 9"];
      }
    }
    class Qt extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qt, e2, t2);
      }
      static $() {
        return ["ProjectDetails|1 name 9?|2 subagent #0?|3 side_chat #1?|4 init_description 9?", Xt, Zt];
      }
    }
    class Xt extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xt, e2, t2);
      }
      static $() {
        return ["ProjectSubagentDetails|2 store_dir 9?"];
      }
    }
    class Zt extends fe {
      constructor(e2) {
        super(), this.storeDir = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Zt().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Zt().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Zt().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Zt, e2, t2);
      }
      static $() {
        return ["ProjectSideChatDetails|1 store_dir 9"];
      }
    }
    class er extends fe {
      constructor(e2) {
        super(), this.text = "", this.messageId = "", this.mode = ge.UNSPECIFIED, this.conversationStateBlobId = new Uint8Array(0), this.hookAdditionalContexts = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new er().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new er().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new er().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(er, e2, t2);
      }
      static $() {
        return ["UserMessage|1 text 9|2 message_id 9|3 selected_context #0?|4 mode #1|5 is_simulated_msg 8?|6 best_of_n_group_id 9?|7 try_use_best_of_n_promotion 8?|8 rich_text 9?|9 simulated_msg_reason #2?|10 conversation_state_blob_id 12|11 subagent_system_reminder 9?|13 triggering_user_info #3?|14 execute_plan_info #4?|15 simulated_message_metadata #5?|16 prompt_reference_id 9?|17 thread_id 9?|18 text_blob_id 12?|19 rich_text_blob_id 12?|21 hook_additional_contexts #6*|22 custom_mode_intent #7?|23 project_details #8?|24 turn_steer 8?|25 started_at_ms 4?|26 completed_at_ms 4?|27 sent_by_agent_id 9?|28 sent_by_voice_call 8?|29 sender #9?|30 forked_context 9?", de.xv, ge, ke, et, Yt, tr, ce.C, Ft, Qt, rr];
      }
    }
    class tr extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new tr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new tr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new tr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(tr, e2, t2);
      }
      static $() {
        return ["UserMessage.SimulatedMessageMetadata|1 title 9?|2 task_id 9?|3 fsd_finding_action 9?|4 url 9?|5 subscription_source #0?|6 subscription_event_display #1?|7 interaction_response #2?", xe, Kt, Ht];
      }
    }
    class rr extends fe {
      constructor(e2) {
        super(), this.kind = nr.UNSPECIFIED, this.id = "", this.displayName = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new rr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new rr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new rr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(rr, e2, t2);
      }
      static $() {
        return ["MessageSender|1 kind #0|2 id 9|3 display_name 9", nr];
      }
    }
    var nr = (0, me.QT)(n.proto3, he, "MessageSender.Kind", [[0, "UNSPECIFIED"], [1, "AGENT"], [2, "VOICE_CALL"], [3, "MAIN_BOT"], [4, "PROJECT"]], 1);
    class sr extends fe {
      constructor(e2) {
        super(), this.text = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new sr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new sr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new sr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(sr, e2, t2);
      }
      static $() {
        return ["AssistantMessage|1 text 9|2 started_at_ms 4?|3 completed_at_ms 4?"];
      }
    }
    class or extends fe {
      constructor(e2) {
        super(), this.text = "", this.durationMs = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new or().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new or().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new or().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(or, e2, t2);
      }
      static $() {
        return ["ThinkingMessage|1 text 9|2 duration_ms 13|3 started_at_ms 4?|4 completed_at_ms 4?"];
      }
    }
    class ir extends fe {
      constructor(e2) {
        super(), this.command = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ir().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ir().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ir().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ir, e2, t2);
      }
      static $() {
        return ["ShellCommand|1 command 9"];
      }
    }
    class ar extends fe {
      constructor(e2) {
        super(), this.stdout = "", this.stderr = "", this.exitCode = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ar().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ar().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ar().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ar, e2, t2);
      }
      static $() {
        return ["ShellOutput|1 stdout 9|2 stderr 9|3 exit_code 5"];
      }
    }
    class cr extends fe {
      constructor(e2) {
        super(), this.turn = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new cr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new cr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new cr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(cr, e2, t2);
      }
      static $() {
        return ["ConversationTurn|1 agent_conversation_turn #0 turn|2 shell_conversation_turn #1 turn", mr, gr];
      }
    }
    class lr extends fe {
      constructor(e2) {
        super(), this.plan = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new lr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new lr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new lr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(lr, e2, t2);
      }
      static $() {
        return ["ConversationPlan|1 plan 9"];
      }
    }
    class ur extends fe {
      constructor(e2) {
        super(), this.id = "", this.path = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ur().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ur().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ur().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ur, e2, t2);
      }
      static $() {
        return ["PlanRegistryEntry|1 id 9|2 path 9"];
      }
    }
    class dr extends fe {
      constructor(e2) {
        super(), this.conversationId = "", this.goalId = "", this.objective = "", this.status = ne.O4.UNSPECIFIED, this.idleContinuationsWithoutToolCalls = 0, this.continuationCount = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new dr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new dr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new dr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(dr, e2, t2);
      }
      static $() {
        return ["GoalState|1 conversation_id 9|2 goal_id 9|3 objective 9|4 status #0|5 idle_continuations_without_tool_calls 13|6 active_duration_ms 4?|7 last_accrued_at_ms 4?|8 continuation_count 13|9 agent_session_id 9?", ne.O4];
      }
    }
    class pr extends fe {
      constructor(e2) {
        super(), this.turn = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pr, e2, t2);
      }
      static $() {
        return ["ConversationTurnStructure|1 agent_conversation_turn #0 turn|2 shell_conversation_turn #1 turn", hr, yr];
      }
    }
    class mr extends fe {
      constructor(e2) {
        super(), this.steps = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new mr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new mr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new mr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(mr, e2, t2);
      }
      static $() {
        return ["AgentConversationTurn|1 user_message #0|2 steps #1*|3 request_id 9?", er, Xe];
      }
    }
    class hr extends fe {
      constructor(e2) {
        super(), this.userMessage = new Uint8Array(0), this.steps = [], this.sendMessageStepIndices = [], this.subagentDispatchSteps = [], this.dynamicToolNames = [], this.longReasoningReminderExposureLogged = false, this.assistantTextStepIndices = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new hr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new hr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new hr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(hr, e2, t2);
      }
      static $() {
        return ["AgentConversationTurnStructure|1 user_message 12|2 steps 12*|3 request_id 9?|4 encrypted_model 9?|5 dynamic_tool_count 13?|6 send_message_step_indices 13*|7 routed_model_display_name 9?|8 subagent_dispatch_steps #0*|9 dynamic_tool_names 9*|10 user_message_id 9?|11 long_reasoning_reminder #1?|12 long_reasoning_reminder_exposure_logged 8|13 assistant_text_step_indices 13*|14 assistant_text_steps_recorded 8?", st, fr];
      }
    }
    class fr extends fe {
      constructor(e2) {
        super(), this.remainingDelayCalls = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new fr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new fr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new fr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(fr, e2, t2);
      }
      static $() {
        return ["LongReasoningReminderState|1 remaining_delay_calls 13"];
      }
    }
    class gr extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new gr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new gr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new gr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(gr, e2, t2);
      }
      static $() {
        return ["ShellConversationTurn|1 shell_command #0|2 shell_output #1", ir, ar];
      }
    }
    class yr extends fe {
      constructor(e2) {
        super(), this.shellCommand = new Uint8Array(0), this.shellOutput = new Uint8Array(0), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new yr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new yr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new yr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(yr, e2, t2);
      }
      static $() {
        return ["ShellConversationTurnStructure|1 shell_command 12|2 shell_output 12"];
      }
    }
    class wr extends fe {
      constructor(e2) {
        super(), this.summary = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new wr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new wr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new wr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(wr, e2, t2);
      }
      static $() {
        return ["ConversationSummary|1 summary 9"];
      }
    }
    class vr extends fe {
      constructor(e2) {
        super(), this.summarizedMessages = [], this.summary = "", this.windowTail = 0, this.summaryMessage = new Uint8Array(0), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new vr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new vr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new vr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(vr, e2, t2);
      }
      static $() {
        return ["ConversationSummaryArchive|1 summarized_messages 12*|2 summary 9|3 window_tail 13|4 summary_message 12"];
      }
    }
    class _r extends fe {
      constructor(e2) {
        super(), this.id = "", this.label = "", this.estimatedTokens = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _r().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _r().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _r().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_r, e2, t2);
      }
      static $() {
        return ["PromptTokenBreakdownCategory|1 id 9|2 label 9|3 estimated_tokens 13|4 character_count 13?"];
      }
    }
    class br extends fe {
      constructor(e2) {
        super(), this.totalUsedTokens = 0, this.maxTokens = 0, this.categories = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new br().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new br().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new br().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(br, e2, t2);
      }
      static $() {
        return ["PromptTokenBreakdownSnapshot|1 total_used_tokens 13|2 max_tokens 13|3 categories #0*", _r];
      }
    }
    class Sr extends fe {
      constructor(e2) {
        super(), this.sourceType = "", this.messageIndex = 0, this.contentPath = "", this.startOffset = 0, this.endOffset = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Sr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Sr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Sr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Sr, e2, t2);
      }
      static $() {
        return ["PromptContextSourceRef|1 source_type 9|3 message_index 13|4 content_path 9|5 start_offset 13|6 end_offset 13"];
      }
    }
    class kr extends fe {
      constructor(e2) {
        super(), this.id = "", this.kind = "", this.label = "", this.categoryId = "", this.estimatedTokens = 0, this.characterCount = 0, this.contentAvailable = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new kr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new kr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new kr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(kr, e2, t2);
      }
      static $() {
        return ["PromptContextNode|1 id 9|2 parent_id 9?|3 kind 9|4 label 9|5 category_id 9|6 estimated_tokens 13|7 character_count 13|9 content_available 8|11 source #0?|12 inline_content 9?", Sr];
      }
    }
    class xr extends fe {
      constructor(e2) {
        super(), this.schemaVersion = 0, this.nodes = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xr, e2, t2);
      }
      static $() {
        return ["PromptContextUsageTree|1 schema_version 13|2 nodes #0*", kr];
      }
    }
    class Er extends fe {
      constructor(e2) {
        super(), this.usedTokens = 0, this.maxTokens = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Er().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Er().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Er().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Er, e2, t2);
      }
      static $() {
        return ["ConversationTokenDetails|1 used_tokens 13|2 max_tokens 13|3 breakdown #0?|4 prompt_context_usage_tree #1?", br, xr];
      }
    }
    class Ir extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ir().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ir().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ir().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ir, e2, t2);
      }
      static $() {
        return ["FileState|1 content 9?|2 initial_content 9?"];
      }
    }
    class Tr extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Tr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Tr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Tr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Tr, e2, t2);
      }
      static $() {
        return ["FileStateStructure|1 content 12?|2 initial_content 12?"];
      }
    }
    class Cr extends fe {
      constructor(e2) {
        super(), this.durationMs = n.protoInt64.zero, this.timestampMs = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Cr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Cr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Cr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Cr, e2, t2);
      }
      static $() {
        return ["StepTiming|1 duration_ms 4|2 timestamp_ms 4"];
      }
    }
    class Pr extends fe {
      constructor(e2) {
        super(), this.completedTurnCountCapped = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Pr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Pr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Pr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Pr, e2, t2);
      }
      static $() {
        return ["TurnTelemetryState|1 completed_turn_count_capped 13|2 last_completed_turn_timestamp_ms 4?"];
      }
    }
    class Ar extends fe {
      constructor(e2) {
        super(), this.step = "", this.messageIndex = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ar().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ar().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ar().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ar, e2, t2);
      }
      static $() {
        return ["CommunicateUpdateHistoryEntry|1 step 9|3 message_index 13"];
      }
    }
    class Rr extends fe {
      constructor(e2) {
        super(), this.history = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Rr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Rr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Rr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Rr, e2, t2);
      }
      static $() {
        return ["CommunicateUpdateTurnState|1 history #0*|2 final_summary 9?|3 completed_subtitle 9?", Ar];
      }
    }
    class Mr extends fe {
      constructor(e2) {
        super(), this.createdTimestampMs = n.protoInt64.zero, this.lastUsedTimestampMs = n.protoInt64.zero, this.environment = s.dU.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Mr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Mr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Mr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Mr, e2, t2);
      }
      static $() {
        return ["SubagentPersistedState|1 conversation_state #0|2 created_timestamp_ms 4|3 last_used_timestamp_ms 4|4 subagent_type #1|5 model_id 9?|6 environment #2|7 cloud_subagent #3?|8 first_class_bc_id 9?|9 cloud_requested_environment_build_id 9?|10 machine #4?", Br, s._L, s.dU, Jr, Pe];
      }
    }
    class Jr extends fe {
      constructor(e2) {
        super(), this.bcId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Jr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Jr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Jr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Jr, e2, t2);
      }
      static $() {
        return ["CloudSubagentReference|1 bc_id 9|2 transcript_path 9?"];
      }
    }
    class Or extends fe {
      constructor(e2) {
        super(), this.repoPath = "", this.branchName = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Or().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Or().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Or().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Or, e2, t2);
      }
      static $() {
        return ["TrackedGitRepo|1 repo_path 9|2 branch_name 9"];
      }
    }
    class Br extends fe {
      constructor(e2) {
        super(), this.rootPromptMessagesJson = [], this.turns = [], this.todos = [], this.pendingToolCalls = [], this.previousWorkspaceUris = [], this.fileStates = {}, this.fileStatesV2 = {}, this.summaryArchives = [], this.turnTimings = [], this.subagentStates = {}, this.selfSummaryCount = 0, this.readPaths = [], this.plans = {}, this.trackedGitRepoBranches = [], this.communicateUpdateHistory = [], this.subagentThreads = {}, this.communicateUpdateStatesByParentToolCallId = {}, this.subagentRunsByParentToolCallId = {}, this.subagentStateRefs = {}, this.completedAskQuestionToolCallIds = [], this.durableSkillBlocks = [], this.recentUserMessageIds = [], this.mentionedAgentIds = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Br().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Br().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Br().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Br, e2, t2);
      }
      static $() {
        return ["ConversationStateStructure|1 root_prompt_messages_json 12*|8 turns 12*|3 todos 12*|4 pending_tool_calls 9*|5 token_details #0|6 summary 12?|7 plan 12?|9 previous_workspace_uris 9*|10 mode #1?|11 summary_archive 12?|12 file_states 9,12|15 file_states_v2 9,#2|13 summary_archives 12*|14 turn_timings #3*|16 subagent_states 9,#4|17 self_summary_count 13|18 read_paths 9*|19 active_branch_name 9?|20 plans 9,#5|21 tracked_git_repo_branches #6*|22 agent_type 9?|23 communicate_update_history #7*|24 subagent_threads 9,9|25 communicate_update_final_summary 9?|28 communicate_update_completed_subtitle 9?|29 communicate_update_states_by_parent_tool_call_id 9,#8|30 subagent_runs_by_parent_tool_call_id 9,#9|26 conversation_started_timestamp_ms 4?|27 conversation_started_time_zone 9?|31 subagent_state_refs 9,12|32 goal_state #10?|33 is_root_project_conversation 8?|34 completed_ask_question_tool_call_ids 9*|35 durable_skill_blocks 9*|36 durable_custom_mode_id 9?|37 message_count_at_last_compaction 13?|38 recent_user_message_ids 9*|39 recent_user_message_ids_older_turn_count 13?|40 turn_telemetry #11?|42 mentioned_agent_ids 9*", Er, ge, Tr, Cr, Mr, ur, Or, Ar, Rr, nt, dr, Pr];
      }
    }
    class Dr extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Dr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Dr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Dr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Dr, e2, t2);
      }
      static $() {
        return ["ThinkingDetails"];
      }
    }
    class qr extends fe {
      constructor(e2) {
        super(), this.bearerToken = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new qr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new qr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new qr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(qr, e2, t2);
      }
      static $() {
        return ["ClientLlmGatewayCredential|1 bearer_token 9"];
      }
    }
    class Nr extends fe {
      constructor(e2) {
        super(), this.modelId = "", this.displayModelId = "", this.displayName = "", this.displayNameShort = "", this.aliases = [], this.credentials = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Nr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Nr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Nr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Nr, e2, t2);
      }
      static $() {
        return ["ModelDetails|1 model_id 9|3 display_model_id 9|4 display_name 9|5 display_name_short 9|6 aliases 9*|2 thinking_details #0?|7 max_mode 8?|8 api_key_credentials #1 credentials|9 azure_credentials #2 credentials|10 bedrock_credentials #3 credentials", Dr, pe.G0, pe.ih, pe.R4];
      }
    }
    class Fr extends fe {
      constructor(e2) {
        super(), this.subagentType = "", this.selection = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Fr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Fr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Fr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Fr, e2, t2);
      }
      static $() {
        return ["SubagentModelOverride|1 subagent_type 9|2 model #0 selection|3 inherit 8 selection|4 disabled 8 selection", pe.G4];
      }
    }
    class Ur extends fe {
      constructor(e2) {
        super(), this.text = "", this.isServerNotice = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Ur().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Ur().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Ur().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Ur, e2, t2);
      }
      static $() {
        return ["TextDeltaUpdate|1 text 9|2 is_server_notice 8"];
      }
    }
    class Lr extends fe {
      constructor(e2) {
        super(), this.displayName = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Lr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Lr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Lr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Lr, e2, t2);
      }
      static $() {
        return ["RoutedModelUpdate|1 display_name 9"];
      }
    }
    class $r extends fe {
      constructor(e2) {
        super(), this.callId = "", this.modelCallId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new $r().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new $r().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new $r().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals($r, e2, t2);
      }
      static $() {
        return ["ToolCallStartedUpdate|1 call_id 9|2 tool_call #0|3 model_call_id 9", ze];
      }
    }
    class jr extends fe {
      constructor(e2) {
        super(), this.callId = "", this.modelCallId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new jr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new jr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new jr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(jr, e2, t2);
      }
      static $() {
        return ["ToolCallCompletedUpdate|1 call_id 9|2 tool_call #0|3 model_call_id 9", ze];
      }
    }
    class Gr extends fe {
      constructor(e2) {
        super(), this.callId = "", this.modelCallId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Gr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Gr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Gr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Gr, e2, t2);
      }
      static $() {
        return ["ToolCallDeltaUpdate|1 call_id 9|2 tool_call_delta #0|3 model_call_id 9", Qe];
      }
    }
    class zr extends fe {
      constructor(e2) {
        super(), this.callId = "", this.argsTextDelta = "", this.modelCallId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new zr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new zr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new zr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(zr, e2, t2);
      }
      static $() {
        return ["PartialToolCallUpdate|1 call_id 9|2 tool_call #0|3 args_text_delta 9|4 model_call_id 9", ze];
      }
    }
    class Wr extends fe {
      constructor(e2) {
        super(), this.text = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Wr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Wr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Wr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Wr, e2, t2);
      }
      static $() {
        return ["ThinkingDeltaUpdate|1 text 9|2 thinking_style #0?", Ee];
      }
    }
    class Hr extends fe {
      constructor(e2) {
        super(), this.thinkingDurationMs = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Hr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Hr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Hr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Hr, e2, t2);
      }
      static $() {
        return ["ThinkingCompletedUpdate|1 thinking_duration_ms 5"];
      }
    }
    class Kr extends fe {
      constructor(e2) {
        super(), this.tokens = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Kr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Kr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Kr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Kr, e2, t2);
      }
      static $() {
        return ["TokenDeltaUpdate|1 tokens 5"];
      }
    }
    class Vr extends fe {
      constructor(e2) {
        super(), this.summary = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Vr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Vr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Vr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Vr, e2, t2);
      }
      static $() {
        return ["SummaryUpdate|1 summary 9"];
      }
    }
    class Yr extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Yr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Yr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Yr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Yr, e2, t2);
      }
      static $() {
        return ["SummaryStartedUpdate"];
      }
    }
    class Qr extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Qr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Qr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Qr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Qr, e2, t2);
      }
      static $() {
        return ["HeartbeatUpdate"];
      }
    }
    class Xr extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Xr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Xr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Xr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Xr, e2, t2);
      }
      static $() {
        return ["SummaryCompletedUpdate|1 hook_message 9?|2 failed 8?"];
      }
    }
    class Zr extends fe {
      constructor(e2) {
        super(), this.event = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Zr().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Zr().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Zr().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Zr, e2, t2);
      }
      static $() {
        return ["ShellOutputDeltaUpdate|1 stdout #0 event|2 stderr #1 event|3 exit #2 event|4 start #3 event", ue.o0, ue.Db, ue.vb, ue.tD];
      }
    }
    class en extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new en().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new en().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new en().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(en, e2, t2);
      }
      static $() {
        return ["TurnEndedUpdate|1 input_tokens 3?|2 output_tokens 3?|3 cache_read_tokens 3?|4 cache_write_tokens 3?|5 reasoning_tokens 3?|6 ended_at_ms 4?"];
      }
    }
    class tn extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new tn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new tn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new tn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(tn, e2, t2);
      }
      static $() {
        return ["UserMessageAppendedUpdate|1 user_message #0", er];
      }
    }
    class rn extends fe {
      constructor(e2) {
        super(), this.stepId = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new rn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new rn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new rn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(rn, e2, t2);
      }
      static $() {
        return ["StepStartedUpdate|1 step_id 4"];
      }
    }
    class nn extends fe {
      constructor(e2) {
        super(), this.callCount = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new nn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new nn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new nn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(nn, e2, t2);
      }
      static $() {
        return ["ToolRequestsListedUpdate|1 call_count 13"];
      }
    }
    class sn extends fe {
      constructor(e2) {
        super(), this.stepId = n.protoInt64.zero, this.stepDurationMs = n.protoInt64.zero, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new sn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new sn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new sn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(sn, e2, t2);
      }
      static $() {
        return ["StepCompletedUpdate|1 step_id 4|2 step_duration_ms 3"];
      }
    }
    class on extends fe {
      constructor(e2) {
        super(), this.suggestion = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new on().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new on().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new on().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(on, e2, t2);
      }
      static $() {
        return ["PromptSuggestionUpdate|1 suggestion 9"];
      }
    }
    class an extends fe {
      constructor(e2) {
        super(), this.path = "", this.branchName = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new an().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new an().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new an().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(an, e2, t2);
      }
      static $() {
        return ["ActiveBranchChange|1 path 9|2 branch_name 9"];
      }
    }
    class cn extends fe {
      constructor(e2) {
        super(), this.id = "", this.label = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new cn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new cn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new cn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(cn, e2, t2);
      }
      static $() {
        return ["FeedbackRequestCategory|1 id 9|2 label 9"];
      }
    }
    class ln extends fe {
      constructor(e2) {
        super(), this.id = "", this.prompt = "", this.categories = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new ln().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new ln().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new ln().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(ln, e2, t2);
      }
      static $() {
        return ["FeedbackRequestCategoryGroup|1 id 9|2 prompt 9|3 categories #0*", cn];
      }
    }
    class un extends fe {
      constructor(e2) {
        super(), this.requestId = "", this.categories = [], this.categoryGroups = [], this.showFormImmediately = false, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new un().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new un().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new un().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(un, e2, t2);
      }
      static $() {
        return ["FeedbackRequestUpdate|1 request_id 9|2 canonical_model_name 9?|3 categories #0*|4 category_groups #1*|5 show_form_immediately 8|6 title 9?|7 negative_title 9?|8 comment_placeholder 9?", cn, ln];
      }
    }
    class dn extends fe {
      constructor(e2) {
        super(), this.displayOrder = Ie.UNSPECIFIED, this.parentInvocationId = "", this.alternateInvocationId = "", this.parentResponse = "", this.comparisonConfigId = "", this.alternateModelId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new dn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new dn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new dn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(dn, e2, t2);
      }
      static $() {
        return ["ResponseComparisonStarted|1 display_order #0|2 parent_invocation_id 9|3 alternate_invocation_id 9|4 parent_response 9|5 comparison_config_id 9|6 alternate_model_id 9", Ie];
      }
    }
    class pn extends fe {
      constructor(e2) {
        super(), this.text = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new pn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new pn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new pn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(pn, e2, t2);
      }
      static $() {
        return ["ResponseComparisonTextDelta|1 text 9"];
      }
    }
    class mn extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new mn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new mn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new mn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(mn, e2, t2);
      }
      static $() {
        return ["ResponseComparisonCompleted"];
      }
    }
    class hn extends fe {
      constructor(e2) {
        super(), this.reason = Te.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new hn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new hn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new hn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(hn, e2, t2);
      }
      static $() {
        return ["ResponseComparisonSkipped|1 reason #0", Te];
      }
    }
    class fn extends fe {
      constructor(e2) {
        super(), this.comparisonId = "", this.event = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new fn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new fn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new fn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(fn, e2, t2);
      }
      static $() {
        return ["ResponseComparisonUpdate|1 comparison_id 9|2 started #0 event|3 text_delta #1 event|4 completed #2 event|5 skipped #3 event", dn, pn, mn, hn];
      }
    }
    class gn extends fe {
      constructor(e2) {
        super(), this.message = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new gn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new gn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new gn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(gn, e2, t2);
      }
      static $() {
        return ["InteractionUpdate|1 text_delta #0 message|7 partial_tool_call #1 message|15 tool_call_delta #2 message|2 tool_call_started #3 message|3 tool_call_completed #4 message|4 thinking_delta #5 message|5 thinking_completed #6 message|6 user_message_appended #7 message|8 token_delta #8 message|9 summary #9 message|10 summary_started #10 message|11 summary_completed #11 message|12 shell_output_delta #12 message|13 heartbeat #13 message|14 turn_ended #14 message|16 step_started #15 message|17 step_completed #16 message|27 tool_requests_listed #17 message|18 prompt_suggestion #18 message|19 post_request_prompt #19 message|20 active_branch_change #20 message|21 feedback_request #21 message|22 response_comparison #22 message|23 context_injection_state #23 message|24 routed_model #24 message|26 grok_bot_nudge #25 message|25 message_started_at_ms 4?", Ur, zr, Gr, $r, jr, Wr, Hr, tn, Kr, Vr, Yr, Xr, Zr, Qr, en, rn, sn, nn, on, wn, an, un, fn, yn, Lr, vn];
      }
    }
    class yn extends fe {
      constructor(e2) {
        super(), this.injectionId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new yn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new yn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new yn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(yn, e2, t2);
      }
      static $() {
        return ["ContextInjectionStateUpdate|1 injection_id 9|2 state #0", Pt];
      }
    }
    class wn extends fe {
      constructor(e2) {
        super(), this.title = "", this.message = "", this.buttonLabel = "", this.buttonUrl = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new wn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new wn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new wn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(wn, e2, t2);
      }
      static $() {
        return ["PostRequestPromptUpdate|1 title 9|2 message 9|3 button_label 9|4 button_url 9"];
      }
    }
    class vn extends fe {
      constructor(e2) {
        super(), this.job = "", this.description = "", this.showNumber = 0, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new vn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new vn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new vn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(vn, e2, t2);
      }
      static $() {
        return ["GrokBotNudgeUpdate|1 job 9|2 description 9|3 show_number 13"];
      }
    }
    class _n extends fe {
      constructor(e2) {
        super(), this.id = 0, this.query = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new _n().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new _n().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new _n().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(_n, e2, t2);
      }
      static $() {
        return ["InteractionQuery|1 id 13|2 web_search_request_query #0 query|3 ask_question_interaction_query #1 query|4 switch_mode_request_query #2 query|7 create_plan_request_query #3 query|8 setup_vm_environment_args #4 query|9 web_fetch_request_query #5 query|10 pr_management_request_query #6 query|11 mcp_auth_request_query #7 query|12 generate_image_request_query #8 query|13 replace_env_args #9 query|14 connect_scm_request_query #10 query", y.KL, Sn, S.Nc, g.vR, C.BI, R.Un, O.DY, B.uL, k.Uj, $.TO, te.$1];
      }
    }
    class bn extends fe {
      constructor(e2) {
        super(), this.id = 0, this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new bn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new bn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new bn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(bn, e2, t2);
      }
      static $() {
        return ["InteractionResponse|1 id 13|2 web_search_request_response #0 result|3 ask_question_interaction_response #1 result|4 switch_mode_request_response #2 result|7 create_plan_request_response #3 result|8 setup_vm_environment_result #4 result|9 web_fetch_request_response #5 result|10 pr_management_result #6 result|11 mcp_auth_request_response #7 result|12 generate_image_request_response #8 result|13 replace_env_result #9 result|14 connect_scm_request_response #10 result", y.lI, kn, S.w$, g.gz, C.r$, R.fS, O.HL, B.h, k.vW, $.dV, te.qG];
      }
    }
    class Sn extends fe {
      constructor(e2) {
        super(), this.toolCallId = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Sn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Sn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Sn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Sn, e2, t2);
      }
      static $() {
        return ["AskQuestionInteractionQuery|1 args #0|2 tool_call_id 9", _.ju];
      }
    }
    class kn extends fe {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new kn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new kn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new kn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(kn, e2, t2);
      }
      static $() {
        return ["AskQuestionInteractionResponse|1 result #0", _.tz];
      }
    }
    class xn extends fe {
      constructor(e2) {
        super(), this.description = "", this.prompt = "", this.subagentType = "", this.attachments = [], this.environment = s.dU.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new xn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new xn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new xn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(xn, e2, t2);
      }
      static $() {
        return ["TaskToolCallArgsProto|1 description 9|2 prompt 9|3 model 9?|4 subagent_type 9|5 resume 9?|6 readonly 8?|7 run_in_background 8?|8 attachments 9*|9 environment #0|10 cloud_base_branch 9?|11 cloud_requested_environment_build_id 9?|12 machine #1?|13 interrupt 8?", s.dU, Pe];
      }
    }
    class En extends fe {
      constructor(e2) {
        super(), this.credentials = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new En().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new En().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new En().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(En, e2, t2);
      }
      static $() {
        return ["SubagentCredentials|1 api_key_credentials #0 credentials|2 azure_credentials #1 credentials|3 bedrock_credentials #2 credentials", pe.G0, pe.ih, pe.R4];
      }
    }
    class In extends fe {
      constructor(e2) {
        super(), this.resolved = false, this.inlineMcpConfigBlobId = new Uint8Array(0), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new In().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new In().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new In().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(In, e2, t2);
      }
      static $() {
        return ["CloudSubagentInheritedContext|1 automation_run_bc_id 9?|3 inline_mcp_config_json 9?|4 resolved 8|5 inline_mcp_config_blob_id 12"];
      }
    }
    class Tn extends fe {
      constructor(e2) {
        super(), this.subagentId = "", this.subagentTypeName = "", this.analyticsSubagentType = "", this.resolvedModelId = "", this.effectiveReadonly = false, this.useAskModeForSubagent = false, this.initialTurnsCount = 0, this.subagentRequestId = "", this.toolCallId = "", this.isResume = false, this.taskPrompt = "", this.taskDescription = "", this.parentModelName = "", this.enableExecuteHookExec = false, this.configuredSteps = [], this.readonlyShellEnabled = false, this.toolName = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new Tn().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new Tn().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new Tn().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(Tn, e2, t2);
      }
      static $() {
        return ["PreparedTaskSubagent|1 subagent_id 9|2 subagent_type_name 9|3 subagent_type #0|4 analytics_subagent_type 9|5 resolved_model_id 9|6 effective_readonly 8|7 use_ask_mode_for_subagent 8|8 conversation_state #1|9 initial_action #2|10 initial_turns_count 13|11 subagent_request_id 9|12 tool_call_id 9|13 is_resume 8|14 parent_request_id 9?|15 root_parent_request_id 9?|16 task_prompt 9|17 task_description 9|18 selected_context #3?|19 plugin 9?|20 marketplace 9?|21 parent_model_name 9|22 raw_args #4|23 subagent_credentials #5|25 result_suffix 9?|26 enable_execute_hook_exec 8|27 configured_steps 9*|28 readonly_shell_enabled 8|29 tool_name 9|30 prepared_timestamp_unix_ms 3?|31 plugin_id 9?|32 marketplace_id 9?|33 subagent_source 9?|34 cloud_subagent_bc_id 9?|35 provider_tool_name 9?|36 inherited_context #6?|37 usage_uuid 9?", s._L, Br, Ze, de.xv, xn, En, In];
      }
    }
  }