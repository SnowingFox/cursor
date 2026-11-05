// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 43643 range:1319437..1331501
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
43643: (e, t, r) => {
    "use strict";
    r.d(t, { Dc: () => m, Dh: () => l, EB: () => c, HC: () => x, I8: () => _, IC: () => w, Jb: () => C, K5: () => p, RC: () => v, Wd: () => T, _3: () => g, bG: () => y, hn: () => b, ho: () => h, ks: () => E, oQ: () => k, t8: () => I, vV: () => f, w3: () => a, wm: () => S, xp: () => d, yq: () => u });
    var n = r(36038), o = r(8592);
    const s = "agent.v1.";
    class i extends o.HL {
      static get runtime() {
        return (0, o.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return s;
      }
    }
    var a = (0, o.QT)(n.proto3, s, "MouseButton", [[0, "UNSPECIFIED"], [1, "LEFT"], [2, "RIGHT"], [3, "MIDDLE"], [4, "BACK"], [5, "FORWARD"]], 1), l = (0, o.QT)(n.proto3, s, "ScrollDirection", [[0, "UNSPECIFIED"], [1, "UP"], [2, "DOWN"], [3, "LEFT"], [4, "RIGHT"]], 1), c = (0, o.QT)(n.proto3, s, "KeyStroke", [[0, "UNSPECIFIED"], [1, "TAP"], [2, "DOWN"], [3, "UP"]], 1), u = (0, o.QT)(n.proto3, s, "ComputerUseSettleOutcome", [[0, "UNSPECIFIED"], [1, "NONE"], [2, "FIXED"], [3, "STABLE"], [4, "CAP"], [5, "CAPTURE_FAILED"]], 1);
    class d extends i {
      constructor(e2) {
        super(), this.x = 0, this.y = 0, n.proto3.util.initPartial(e2, this);
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
        return ["Coordinate|1 x 5|2 y 5"];
      }
    }
    class p extends i {
      constructor(e2) {
        super(), this.toolCallId = "", this.actions = [], n.proto3.util.initPartial(e2, this);
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
        return ["ComputerUseArgs|1 tool_call_id 9|2 actions #0*|3 description 9?|4 bind_unmapped_characters 8?|5 desktop_lease_actor_id 9?|6 screenshot_settle_ms 5?|8 settle_until_stable 8?", h];
      }
    }
    class h extends i {
      constructor(e2) {
        super(), this.action = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["ComputerUseAction|1 mouse_move #0 action|2 click #1 action|3 mouse_down #2 action|4 mouse_up #3 action|5 drag #4 action|6 scroll #5 action|7 type #6 action|8 key #7 action|9 wait #8 action|10 screenshot #9 action|11 cursor_position #10 action", m, f, g, y, v, w, b, _, S, x, k];
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
        return ["MouseMoveAction|1 coordinate #0", d];
      }
    }
    class f extends i {
      constructor(e2) {
        super(), this.button = a.UNSPECIFIED, this.count = 0, n.proto3.util.initPartial(e2, this);
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
        return ["ClickAction|1 coordinate #0?|2 button #1|3 count 5|4 modifier_keys 9?", d, a];
      }
    }
    class g extends i {
      constructor(e2) {
        super(), this.button = a.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["MouseDownAction|1 button #0", a];
      }
    }
    class y extends i {
      constructor(e2) {
        super(), this.button = a.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["MouseUpAction|1 button #0", a];
      }
    }
    class v extends i {
      constructor(e2) {
        super(), this.path = [], this.button = a.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["DragAction|1 path #0*|2 button #1|3 modifier_keys 9?", d, a];
      }
    }
    class w extends i {
      constructor(e2) {
        super(), this.direction = l.UNSPECIFIED, this.amount = 0, n.proto3.util.initPartial(e2, this);
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
        return ["ScrollAction|1 coordinate #0?|2 direction #1|3 amount 5|4 modifier_keys 9?", d, l];
      }
    }
    class b extends i {
      constructor(e2) {
        super(), this.text = "", n.proto3.util.initPartial(e2, this);
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
        return ["TypeAction|1 text 9"];
      }
    }
    class _ extends i {
      constructor(e2) {
        super(), this.key = "", this.stroke = c.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["KeyAction|1 key 9|2 hold_duration_ms 5?|3 stroke #0", c];
      }
    }
    class S extends i {
      constructor(e2) {
        super(), this.durationMs = 0, n.proto3.util.initPartial(e2, this);
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
        return ["WaitAction|1 duration_ms 5"];
      }
    }
    class x extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["ScreenshotAction"];
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
        return ["CursorPositionAction"];
      }
    }
    class E extends i {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["ComputerUseResult|1 success #0 result|2 error #1 result", T, C];
      }
    }
    class T extends i {
      constructor(e2) {
        super(), this.actionCount = 0, this.durationMs = 0, n.proto3.util.initPartial(e2, this);
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
        return ["ComputerUseSuccess|1 action_count 5|2 duration_ms 5|3 screenshot 9?|4 log 9?|5 screenshot_path 9?|6 cursor_position #0?|7 settle_ms 5?|8 settle_outcome #1?", d, u];
      }
    }
    class C extends i {
      constructor(e2) {
        super(), this.error = "", this.actionCount = 0, this.durationMs = 0, n.proto3.util.initPartial(e2, this);
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
        return ["ComputerUseError|1 error 9|2 action_count 5|3 duration_ms 5|4 log 9?|5 screenshot 9?|6 screenshot_path 9?"];
      }
    }
    class I extends i {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["ComputerUseToolCall|1 args #0|2 result #1", p, E];
      }
    }
  }