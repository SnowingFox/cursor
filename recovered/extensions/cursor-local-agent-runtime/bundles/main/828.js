// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 828 range:13887..22347
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
828: (e, t, r) => {
    "use strict";
    r.d(t, { $F: () => p, Kc: () => y, Kn: () => g, LM: () => _, M0: () => m, YH: () => u, Yn: () => c, a4: () => b, d: () => f, hR: () => d, p7: () => h, tk: () => w, y_: () => v });
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
    var a = (0, o.QT)(n.proto3, s, "WriteCanvasFailReason", [[0, "UNSPECIFIED"], [1, "TYPECHECK_FAILED"], [2, "COMPILE_FAILED"], [3, "TOO_LARGE"], [4, "UNAVAILABLE"], [5, "NOT_FOUND"], [6, "REFUSED"]], 1), l = (0, o.QT)(n.proto3, s, "ReadCanvasFailReason", [[0, "UNSPECIFIED"], [1, "NOT_FOUND"], [2, "UNAVAILABLE"], [3, "REFUSED"], [4, "INVALID_REFERENCE"]], 1);
    class c extends i {
      constructor(e2) {
        super(), this.line = 0, this.character = 0, n.proto3.util.initPartial(e2, this);
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
        return ["CloudCanvasToolDiagnosticPosition|1 line 5|2 character 5"];
      }
    }
    class u extends i {
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
        return ["CloudCanvasToolDiagnosticRange|1 start #0|2 end #0", c];
      }
    }
    class d extends i {
      constructor(e2) {
        super(), this.message = "", n.proto3.util.initPartial(e2, this);
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
        return ["CloudCanvasToolDiagnostic|1 message 9|2 code 9?|3 severity 5?|4 range #0?", u];
      }
    }
    class p extends i {
      constructor(e2) {
        super(), this.contents = "", n.proto3.util.initPartial(e2, this);
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
        return ["WriteCanvasArgs|1 contents 9|2 canvas_id 9?|3 title 9?"];
      }
    }
    class h extends i {
      constructor(e2) {
        super(), this.canvasId = "", this.url = "", n.proto3.util.initPartial(e2, this);
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
        return ["WriteCanvasSuccess|1 canvas_id 9|2 title 9?|3 url 9"];
      }
    }
    class m extends i {
      constructor(e2) {
        super(), this.reason = a.UNSPECIFIED, this.diagnostics = [], n.proto3.util.initPartial(e2, this);
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
        return ["WriteCanvasFailure|1 reason #0|2 diagnostics #1*|3 detail 9?", a, d];
      }
    }
    class f extends i {
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
        return ["WriteCanvasResult|1 success #0 result|2 failure #1 result", h, m];
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
        return ["WriteCanvasToolCall|1 args #0|2 result #1", p, f];
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
        return ["ReadCanvasArgs|1 canvas_id 9?|2 url 9?"];
      }
    }
    class v extends i {
      constructor(e2) {
        super(), this.canvasId = "", this.url = "", this.source = "", n.proto3.util.initPartial(e2, this);
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
        return ["ReadCanvasSuccess|1 canvas_id 9|2 title 9?|3 url 9|4 source 9"];
      }
    }
    class w extends i {
      constructor(e2) {
        super(), this.reason = l.UNSPECIFIED, n.proto3.util.initPartial(e2, this);
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
        return ["ReadCanvasFailure|1 reason #0|2 detail 9?", l];
      }
    }
    class b extends i {
      constructor(e2) {
        super(), this.result = { case: void 0 }, n.proto3.util.initPartial(e2, this);
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
        return ["ReadCanvasResult|1 success #0 result|2 failure #1 result", v, w];
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
        return ["ReadCanvasToolCall|1 args #0|2 result #1", y, b];
      }
    }
  }