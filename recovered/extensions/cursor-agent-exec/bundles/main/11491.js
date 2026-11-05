// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 11491 range:842302..851713
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
11491: (e, t, r) => {
    "use strict";
    r.d(t, { $j: () => f, Bk: () => x, FL: () => d, IR: () => y, U6: () => u, _L: () => p, _x: () => h, aF: () => g, b$: () => a, cl: () => k, cr: () => w, dU: () => c, iq: () => _, l0: () => b, p_: () => m, qL: () => l, sx: () => S, zn: () => v, zz: () => E });
    var n = r(36038), s = r(8592);
    const o = "agent.v1.";
    class i extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return o;
      }
    }
    var a = (0, s.QT)(n.proto3, o, "CustomSubagentPermissionMode", [[0, "UNSPECIFIED"], [1, "DEFAULT"], [2, "READONLY"], [3, "AGENT_ONLY"]], 1), c = (0, s.QT)(n.proto3, o, "SubagentExecutionEnvironment", [[0, "UNSPECIFIED"], [1, "LOCAL"], [2, "CLOUD"]], 1), l = (0, s.QT)(n.proto3, o, "SubagentBackgroundReason", [[0, "UNSPECIFIED"], [1, "AGENT_REQUEST"], [2, "USER_REQUEST"], [3, "QUEUED_FOLLOW_UP"]], 1), u = (0, s.QT)(n.proto3, o, "BackgroundTaskCompletionReason", [[0, "UNSPECIFIED"], [1, "TASK_FINISHED"], [2, "TASK_PROGRESS"], [3, "WORKER_REPARENTED"], [4, "WORKER_MESSAGE"], [5, "WORKER_NEEDS_ATTENTION"]], 1), d = (0, s.QT)(n.proto3, o, "TaskMode", [[0, "UNSPECIFIED"], [1, "AGENT"], [2, "PLAN"]], 1);
    class p extends i {
      constructor(e2) {
        super(), this.type = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["SubagentType|1 unspecified #0 type|2 computer_use #1 type|3 custom #2 type|4 explore #3 type|5 media_review #4 type|6 bash #5 type|7 browser_use #6 type|8 shell #7 type|9 vm_setup_helper #8 type|10 debug #9 type|11 cursor_guide #10 type|12 watch_video #11 type", m, h, x, f, g, y, v, w, _, b, S, k];
      }
    }
    class m extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["SubagentTypeUnspecified"];
      }
    }
    class h extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["SubagentTypeComputerUse"];
      }
    }
    class f extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["SubagentTypeExplore"];
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
        return ["SubagentTypeMediaReview"];
      }
    }
    class y extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["SubagentTypeBash"];
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
        return ["SubagentTypeShell"];
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
        return ["SubagentTypeBrowserUse"];
      }
    }
    class _ extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["SubagentTypeVmSetupHelper"];
      }
    }
    class b extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["SubagentTypeDebug"];
      }
    }
    class S extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["SubagentTypeCursorGuide"];
      }
    }
    class k extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["SubagentTypeWatchVideo"];
      }
    }
    class x extends i {
      constructor(e2) {
        super(), this.name = "", n.proto3.util.initPartial(e2, this);
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
        return ["SubagentTypeCustom|1 name 9"];
      }
    }
    class E extends i {
      constructor(e2) {
        super(), this.fullPath = "", this.name = "", this.description = "", this.tools = [], this.model = "", this.prompt = "", this.permissionMode = a.UNSPECIFIED, this.isBackground = false, this.forceDefaultModel = false, n.proto3.util.initPartial(e2, this);
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
        return ["CustomSubagent|1 full_path 9|2 name 9|3 description 9|4 tools 9*|5 model 9|6 prompt 9|7 permission_mode #0|8 is_background 8|9 plugin 9?|10 marketplace 9?|11 plugin_id 9?|12 marketplace_id 9?|13 force_default_model 8|14 source 9?", a];
      }
    }
  }