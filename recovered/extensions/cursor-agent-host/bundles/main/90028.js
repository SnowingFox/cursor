// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 90028 range:13012538..13020424
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
90028: (e, t, r) => {
    "use strict";
    r.d(t, { $1: () => h, D3: () => a, Lz: () => u, O9: () => g, TK: () => l, Uf: () => p, fW: () => i, iO: () => m, ik: () => w, lB: () => y, qG: () => f, sr: () => d, xy: () => c });
    var n = r(36038), s = r(8592);
    class o extends s.HL {
      static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class i extends o {
      constructor(e2) {
        super(), this.toolCallId = "", this.target = { case: void 0 }, n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new i().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new i().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new i().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(i, e2, t2);
      }
      static $() {
        return ["ConnectScmArgs|1 tool_call_id 9|2 github #0 target", a];
      }
    }
    class a extends o {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new a().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new a().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new a().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(a, e2, t2);
      }
      static $() {
        return ["ConnectScmGithub|1 repository #0|2 ghe_application 9?", c];
      }
    }
    class c extends o {
      constructor(e2) {
        super(), this.owner = "", this.repo = "", n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new c().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new c().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new c().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(c, e2, t2);
      }
      static $() {
        return ["ConnectScmGithubRepository|1 owner 9|2 repo 9"];
      }
    }
    class l extends o {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["ConnectScmResult|1 success #0 result|2 error #1 result|3 rejected #2 result", u, d, p];
      }
    }
    class u extends o {
      constructor(e2) {
        super(), n.proto3.util.initPartial(e2, this);
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
        return ["ConnectScmSuccess"];
      }
    }
    class d extends o {
      constructor(e2) {
        super(), this.error = "", n.proto3.util.initPartial(e2, this);
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
        return ["ConnectScmError|1 error 9"];
      }
    }
    class p extends o {
      constructor(e2) {
        super(), this.reason = "", n.proto3.util.initPartial(e2, this);
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
        return ["ConnectScmRejected|1 reason 9"];
      }
    }
    class m extends o {
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
        return ["ConnectScmToolCall|1 args #0|2 result #1", i, l];
      }
    }
    class h extends o {
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
        return ["ConnectScmRequestQuery|1 args #0", i];
      }
    }
    class f extends o {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["ConnectScmRequestResponse|1 approved #0 result|2 rejected #1 result|3 failed #2 result", g, y, w];
      }
    }
    class g extends o {
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
        return ["ConnectScmRequestResponse.Approved"];
      }
    }
    class y extends o {
      constructor(e2) {
        super(), this.reason = "", n.proto3.util.initPartial(e2, this);
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
        return ["ConnectScmRequestResponse.Rejected|1 reason 9"];
      }
    }
    class w extends o {
      constructor(e2) {
        super(), this.error = "", n.proto3.util.initPartial(e2, this);
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
        return ["ConnectScmRequestResponse.Failed|1 error 9"];
      }
    }
  }