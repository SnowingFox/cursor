// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/agent/v1/computer_use_tool_pb.js" range:667982..677708
// basis: webpack-key
// confidence: B
// method: split+rewire+generated
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: generated (do not hand-edit descriptors)
import * as __dep0 from "@bufbuild/protobuf";
import * as __dep1 from "../../../runtime/compact";
var n = __dep0,
  s = __dep1;
const i = "agent.v1.";
class o extends s.HL {
  static get runtime() {
    return (0, s.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return i;
  }
}
var a = (0, s.QT)(n.proto3, i, "MouseButton", [[0, "UNSPECIFIED"], [1, "LEFT"], [2, "RIGHT"], [3, "MIDDLE"], [4, "BACK"], [5, "FORWARD"]], 1),
  u = (0, s.QT)(n.proto3, i, "ScrollDirection", [[0, "UNSPECIFIED"], [1, "UP"], [2, "DOWN"], [3, "LEFT"], [4, "RIGHT"]], 1),
  c = (0, s.QT)(n.proto3, i, "KeyStroke", [[0, "UNSPECIFIED"], [1, "TAP"], [2, "DOWN"], [3, "UP"]], 1),
  l = (0, s.QT)(n.proto3, i, "ComputerUseDriver", [[0, "UNSPECIFIED"], [1, "XDOTOOL"], [2, "NATIVE_X11"]], 1);
class m extends o {
  constructor(t) {
    super(), this.x = 0, this.y = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new m().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new m().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new m().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(m, t, r);
  }
  static $() {
    return ["Coordinate|1 x 5|2 y 5"];
  }
}
class d extends o {
  constructor(t) {
    super(), this.toolCallId = "", this.actions = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new d().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new d().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new d().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(d, t, r);
  }
  static $() {
    return ["ComputerUseArgs|1 tool_call_id 9|2 actions #0*|3 description 9?|4 bind_unmapped_characters 8?|5 desktop_lease_actor_id 9?|6 screenshot_settle_ms 5?|10 native_x11_driver #1?|11 mark_monitor_busy 8?|9 full_resolution_screenshot 8?|12 capture_name_prefix 9?|13 omit_inline_screenshot 8?", f, p];
  }
}
class p extends o {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new p().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new p().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new p().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(p, t, r);
  }
  static $() {
    return ["NativeX11Driver|1 typing_delay_ms 5?|2 allow_fallback 8?"];
  }
}
class f extends o {
  constructor(t) {
    super(), this.action = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new f().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new f().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new f().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(f, t, r);
  }
  static $() {
    return ["ComputerUseAction|1 mouse_move #0 action|2 click #1 action|3 mouse_down #2 action|4 mouse_up #3 action|5 drag #4 action|6 scroll #5 action|7 type #6 action|8 key #7 action|9 wait #8 action|10 screenshot #9 action|11 cursor_position #10 action", h, g, _, w, y, J, S, q, B, b, P];
  }
}
class h extends o {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new h().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new h().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new h().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(h, t, r);
  }
  static $() {
    return ["MouseMoveAction|1 coordinate #0", m];
  }
}
class g extends o {
  constructor(t) {
    super(), this.button = a.UNSPECIFIED, this.count = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new g().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new g().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new g().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(g, t, r);
  }
  static $() {
    return ["ClickAction|1 coordinate #0?|2 button #1|3 count 5|4 modifier_keys 9?", m, a];
  }
}
class _ extends o {
  constructor(t) {
    super(), this.button = a.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new _().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new _().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new _().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(_, t, r);
  }
  static $() {
    return ["MouseDownAction|1 button #0", a];
  }
}
class w extends o {
  constructor(t) {
    super(), this.button = a.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new w().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new w().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new w().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(w, t, r);
  }
  static $() {
    return ["MouseUpAction|1 button #0", a];
  }
}
class y extends o {
  constructor(t) {
    super(), this.path = [], this.button = a.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new y().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new y().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new y().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(y, t, r);
  }
  static $() {
    return ["DragAction|1 path #0*|2 button #1|3 modifier_keys 9?", m, a];
  }
}
class J extends o {
  constructor(t) {
    super(), this.direction = u.UNSPECIFIED, this.amount = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new J().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new J().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new J().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(J, t, r);
  }
  static $() {
    return ["ScrollAction|1 coordinate #0?|2 direction #1|3 amount 5|4 modifier_keys 9?", m, u];
  }
}
class S extends o {
  constructor(t) {
    super(), this.text = "", n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new S().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new S().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new S().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(S, t, r);
  }
  static $() {
    return ["TypeAction|1 text 9"];
  }
}
class q extends o {
  constructor(t) {
    super(), this.key = "", this.stroke = c.UNSPECIFIED, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new q().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new q().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new q().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(q, t, r);
  }
  static $() {
    return ["KeyAction|1 key 9|2 hold_duration_ms 5?|3 stroke #0", c];
  }
}
class B extends o {
  constructor(t) {
    super(), this.durationMs = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new B().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new B().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new B().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(B, t, r);
  }
  static $() {
    return ["WaitAction|1 duration_ms 5"];
  }
}
class b extends o {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new b().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new b().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new b().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(b, t, r);
  }
  static $() {
    return ["ScreenshotAction"];
  }
}
class P extends o {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new P().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new P().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new P().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(P, t, r);
  }
  static $() {
    return ["CursorPositionAction"];
  }
}
class I extends o {
  constructor(t) {
    super(), this.result = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new I().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new I().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new I().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(I, t, r);
  }
  static $() {
    return ["ComputerUseResult|1 success #0 result|2 error #1 result", x, E];
  }
}
class x extends o {
  constructor(t) {
    super(), this.actionCount = 0, this.durationMs = 0, this.typing = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new x().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new x().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new x().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(x, t, r);
  }
  static $() {
    return ["ComputerUseSuccess|1 action_count 5|2 duration_ms 5|3 screenshot 9?|4 log 9?|5 screenshot_path 9?|6 cursor_position #0?|7 settle_ms 5?|9 driver #1?|10 monitor_busy_marked 8?|11 full_resolution_screenshot #2?|12 typing #3*", m, l, v, R];
  }
}
class v extends o {
  constructor(t) {
    super(), this.path = "", this.sha256 = "", this.sizeBytes = 0, this.width = 0, this.height = 0, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new v().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new v().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new v().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(v, t, r);
  }
  static $() {
    return ["ComputerUseFullResolutionScreenshot|1 path 9|2 sha256 9|3 size_bytes 13|4 width 5|5 height 5"];
  }
}
class R extends o {
  constructor(t) {
    super(), this.method = "", this.chars = 0, this.atoms = 0, this.typedAtoms = 0, this.aborted = !1, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new R().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new R().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new R().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(R, t, r);
  }
  static $() {
    return ["ComputerUseTyping|1 method 9|2 chars 5|3 atoms 5|4 typed_atoms 5|5 aborted 8|6 check 9?|7 verified 5?|8 unchecked 9?|9 landing 9?"];
  }
}
class E extends o {
  constructor(t) {
    super(), this.error = "", this.actionCount = 0, this.durationMs = 0, this.typing = [], n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new E().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new E().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new E().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(E, t, r);
  }
  static $() {
    return ["ComputerUseError|1 error 9|2 action_count 5|3 duration_ms 5|4 log 9?|5 screenshot 9?|6 screenshot_path 9?|7 driver #0?|8 monitor_busy_marked 8?|9 typing #1*", l, R];
  }
}
class k extends o {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new k().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new k().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new k().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(k, t, r);
  }
  static $() {
    return ["ComputerUseToolCall|1 args #0|2 result #1", d, I];
  }
}
export { u as Dh, c as EB, E as Jb, d as K5, x as Wd, l as Z8, f as ho, I as ks, R as qA, k as t8, a as w3, m as xp };
