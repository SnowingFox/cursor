// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../proto/dist/generated/aiserver/v1/unify_eligibility_pb.js" range:2424393..2427539
// basis: webpack-key
// confidence: B
// method: split+rewire+generated
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: generated (do not hand-edit descriptors)
import * as __dep0 from "@bufbuild/protobuf";
import * as __dep1 from "../../../runtime/compact";
var n = __dep0,
  s = __dep1;
const i = "aiserver.v1.";
class o extends s.HL {
  static get runtime() {
    return (0, s.kU)(this, "runtime", n.proto3);
  }
  static $p() {
    return i;
  }
}
var a = (0, s.QT)(n.proto3, i, "UnifyEligibilityReason", [[0, "UNSPECIFIED"], [1, "BLOCKLISTED"], [2, "ENTERPRISE"], [3, "REQUEST_BASED_PRICING"], [4, "OUTSTANDING_INVOICE"], [5, "STRIPE_CREDIT_BALANCE"], [7, "UNSAFE_SUBSCRIPTION_STATUS"], [8, "ALIPAY_PAYMENT_METHOD"], [9, "SSO"]], 1),
  u = (0, s.QT)(n.proto3, i, "UnifyPendingMergeState", [[0, "UNSPECIFIED"], [1, "IN_PROGRESS"], [2, "DELAYED"]], 1);
class c extends o {
  constructor(t) {
    super(), n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new c().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new c().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new c().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(c, t, r);
  }
  static $() {
    return ["IndividualUnifyEligibilitySubject"];
  }
}
class l extends o {
  constructor(t) {
    super(), this.subject = {
      case: void 0
    }, n.proto3.util.initPartial(t, this);
  }
  static fromBinary(t, r) {
    return new l().fromBinary(t, r);
  }
  static fromJson(t, r) {
    return new l().fromJson(t, r);
  }
  static fromJsonString(t, r) {
    return new l().fromJsonString(t, r);
  }
  static equals(t, r) {
    return n.proto3.util.equals(l, t, r);
  }
  static $() {
    return ["GetUnifyEligibilityRequest|1 individual #0 subject|2 cursor_team_id 5 subject", c];
  }
}
class m extends o {
  constructor(t) {
    super(), this.eligible = !1, this.reason = a.UNSPECIFIED, this.userFacingMessage = "", this.reasons = [], this.canOptInToNewPricing = !1, this.outstandingInvoiceUrl = "", n.proto3.util.initPartial(t, this);
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
    return ["GetUnifyEligibilityResponse|1 eligible 8|2 reason #0|3 user_facing_message 9|4 reasons #0*|5 can_opt_in_to_new_pricing 8|7 outstanding_invoice_url 9|8 pending_merge #1?", a, d];
  }
}
class d extends o {
  constructor(t) {
    super(), this.state = u.UNSPECIFIED, n.proto3.util.initPartial(t, this);
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
    return ["UnifyPendingMerge|1 state #0", u];
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
    return ["GetUnifyPendingMergeRequest"];
  }
}
class f extends o {
  constructor(t) {
    super(), this.pendingMergeUnread = !1, n.proto3.util.initPartial(t, this);
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
    return ["GetUnifyPendingMergeResponse|1 pending_merge #0?|2 pending_merge_unread 8", d];
  }
}
export { p as EV, f as IN, d as j9, m as uS, l as uo };
