// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 829 range:356046..358257
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
829: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { WH: () => u, WJ: () => a, WN: () => o2 });
    var n2 = r2(6038), s2 = r2(8592);
    class i2 extends s2.HL {
      static get runtime() {
        return (0, s2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "aiserver.v1.";
      }
    }
    class o2 extends i2 {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new o2().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new o2().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new o2().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(o2, t3, e3);
      }
      static $() {
        return ["RemoteControlV2AdminSettings|1 enabled 8?|2 automatic_registration_enabled 8?"];
      }
    }
    class a extends i2 {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new a().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new a().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new a().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(a, t3, e3);
      }
      static $() {
        return ["RemoteControlV2Policy|1 enabled 8?|2 automatic_registration_enabled 8?|3 available 8?|4 automatic_registration_released 8?|5 remote_control_denying_org_name 9?|6 automatic_registration_denying_org_name 9?"];
      }
    }
    class u extends i2 {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new u().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new u().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new u().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(u, t3, e3);
      }
      static $() {
        return ["RemoteControlV2UserSettings|2 automatic_registration_enabled 8?"];
      }
    }
  }