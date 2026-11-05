// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6993 range:3867209..4174547
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6993: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { xyI: () => Lo, Mpn: () => ec, Ibo: () => ju, QFf: () => Ea, Y9z: () => Wu, o7L: () => ou, YbX: () => Vo, Mzv: () => Ou, hGJ: () => Ya, Pd7: () => Nc, Y5: () => Dc, nh0: () => Au, Uq: () => Rc, D$r: () => Cu, Gmx: () => Xu, onr: () => tc, umU: () => Su, d2k: () => Qu, c_h: () => zo, Bjv: () => Zu, gan: () => _u, vns: () => Wo, iHX: () => Ia, _8g: () => yu });
    var n2 = r2(6038), s2 = r2(1491), i2 = r2(2671), o2 = r2(8592);
    class a extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class u extends a {
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
        return ["ShellToolCall|1 args #0|2 result #1|3 description 9?", i2.a, i2.W4];
      }
    }
    class c extends a {
      constructor(t3) {
        super(), this.content = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new c().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new c().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new c().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(c, t3, e3);
      }
      static $() {
        return ["ShellToolCallStdoutDelta|1 content 9"];
      }
    }
    class l extends a {
      constructor(t3) {
        super(), this.content = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new l().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new l().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new l().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(l, t3, e3);
      }
      static $() {
        return ["ShellToolCallStderrDelta|1 content 9"];
      }
    }
    class m extends a {
      constructor(t3) {
        super(), this.delta = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["ShellToolCallDelta|1 stdout #0 delta|2 stderr #1 delta", c, l];
      }
    }
    var d = r2(9260);
    class f extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class p extends f {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["DeleteToolCall|1 args #0|2 result #1", d.dn, d.Pi];
      }
    }
    class h extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class g extends h {
      constructor(t3) {
        super(), this.globPattern = "", n2.proto3.util.initPartial(t3, this);
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
        return ["GlobToolArgs|1 target_directory 9?|2 glob_pattern 9"];
      }
    }
    class A extends h {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["GlobToolResult|1 success #0 result|2 error #1 result", y, _];
      }
    }
    class _ extends h {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
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
        return ["GlobToolError|1 error 9"];
      }
    }
    class y extends h {
      constructor(t3) {
        super(), this.pattern = "", this.path = "", this.files = [], this.totalFiles = 0, this.clientTruncated = false, this.ripgrepTruncated = false, n2.proto3.util.initPartial(t3, this);
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
        return ["GlobToolSuccess|1 pattern 9|2 path 9|3 files 9*|4 total_files 5|5 client_truncated 8|6 ripgrep_truncated 8"];
      }
    }
    class w extends h {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["GlobToolCall|1 args #0|2 result #1", g, A];
      }
    }
    var S = r2(9903);
    class J extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class B extends J {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["GrepToolCall|1 args #0|2 result #1", S.Qj, S.Ud];
      }
    }
    var E = r2(3955);
    class I extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class C extends I {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ReadToolCall|1 args #0|2 result #1", b, k];
      }
    }
    class b extends I {
      constructor(t3) {
        super(), this.path = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ReadToolArgs|1 path 9|2 offset 5?|3 limit 5?|5 include_line_numbers 8?"];
      }
    }
    class k extends I {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["ReadToolResult|1 success #0 result|2 error #1 result", q, R];
      }
    }
    class v extends I {
      constructor(t3) {
        super(), this.startLine = 0, this.endLine = 0, n2.proto3.util.initPartial(t3, this);
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
        return ["ReadRange|1 start_line 13|2 end_line 13"];
      }
    }
    class q extends I {
      constructor(t3) {
        super(), this.output = { case: void 0 }, this.isEmpty = false, this.exceededLimit = false, this.totalLines = 0, this.fileSize = 0, this.path = "", this.relatedCursorRulePaths = [], this.relatedCursorRules = [], n2.proto3.util.initPartial(t3, this);
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
        return ["ReadToolSuccess|1 content 9 output|6 data 12 output|9 data_blob_id 12 output|10 content_blob_id 12 output|2 is_empty 8|3 exceeded_limit 8|4 total_lines 13|5 file_size 13|7 path 9|8 read_range #0?|11 include_line_numbers 8?|12 related_cursor_rule_paths 9*|13 related_cursor_rules #1*", v, E.DX];
      }
    }
    class R extends I {
      constructor(t3) {
        super(), this.errorMessage = "", n2.proto3.util.initPartial(t3, this);
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
        return ["ReadToolError|1 error_message 9"];
      }
    }
    const P = "agent.v1.";
    class T extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return P;
      }
    }
    var x = (0, o2.QT)(n2.proto3, P, "TodoStatus", [[0, "UNSPECIFIED"], [1, "PENDING"], [2, "IN_PROGRESS"], [3, "COMPLETED"], [4, "CANCELLED"]], 1);
    class N extends T {
      constructor(t3) {
        super(), this.id = "", this.content = "", this.status = x.UNSPECIFIED, this.createdAt = n2.protoInt64.zero, this.updatedAt = n2.protoInt64.zero, this.dependencies = [], n2.proto3.util.initPartial(t3, this);
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
        return ["TodoItem|1 id 9|2 content 9|3 status #0|4 created_at 3|5 updated_at 3|6 dependencies 9*", x];
      }
    }
    class D extends T {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["UpdateTodosToolCall|1 args #0|2 result #1", U, Q];
      }
    }
    class U extends T {
      constructor(t3) {
        super(), this.todos = [], this.merge = false, n2.proto3.util.initPartial(t3, this);
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
        return ["UpdateTodosArgs|1 todos #0*|2 merge 8", N];
      }
    }
    class Q extends T {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
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
        return ["UpdateTodosResult|1 success #0 result|2 error #1 result", M, O];
      }
    }
    class M extends T {
      constructor(t3) {
        super(), this.todos = [], this.totalCount = 0, this.wasMerge = false, n2.proto3.util.initPartial(t3, this);
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
        return ["UpdateTodosSuccess|1 todos #0*|2 total_count 5|3 was_merge 8", N];
      }
    }
    class O extends T {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
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
        return ["UpdateTodosError|1 error 9"];
      }
    }
    class F extends T {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
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
        return ["ReadTodosToolCall|1 args #0|2 result #1", L, $];
      }
    }
    class L extends T {
      constructor(t3) {
        super(), this.statusFilter = [], this.idFilter = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new L().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new L().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new L().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(L, t3, e3);
      }
      static $() {
        return ["ReadTodosArgs|1 status_filter #0*|2 id_filter 9*", x];
      }
    }
    class $ extends T {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($, t3, e3);
      }
      static $() {
        return ["ReadTodosResult|1 success #0 result|2 error #1 result", G, H];
      }
    }
    class G extends T {
      constructor(t3) {
        super(), this.todos = [], this.totalCount = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new G().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new G().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new G().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(G, t3, e3);
      }
      static $() {
        return ["ReadTodosSuccess|1 todos #0*|2 total_count 5", N];
      }
    }
    class H extends T {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new H().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new H().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new H().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(H, t3, e3);
      }
      static $() {
        return ["ReadTodosError|1 error 9"];
      }
    }
    class K extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class V extends K {
      constructor(t3) {
        super(), this.path = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new V().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new V().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new V().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(V, t3, e3);
      }
      static $() {
        return ["EditArgs|1 path 9|6 stream_content 9?"];
      }
    }
    class z extends K {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new z().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new z().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new z().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(z, t3, e3);
      }
      static $() {
        return ["EditResult|1 success #0 result|2 file_not_found #1 result|3 read_permission_denied #2 result|4 write_permission_denied #3 result|6 rejected #4 result|7 error #5 result", W, Y, j, X, Z, tt];
      }
    }
    class W extends K {
      constructor(t3) {
        super(), this.path = "", this.afterFullFileContent = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new W().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new W().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new W().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(W, t3, e3);
      }
      static $() {
        return ["EditSuccess|1 path 9|3 lines_added 5?|4 lines_removed 5?|5 diff_string 9?|6 before_full_file_content 9?|7 after_full_file_content 9|8 message 9?"];
      }
    }
    class Y extends K {
      constructor(t3) {
        super(), this.path = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Y().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Y().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Y().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Y, t3, e3);
      }
      static $() {
        return ["EditFileNotFound|1 path 9"];
      }
    }
    class j extends K {
      constructor(t3) {
        super(), this.path = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new j().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new j().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new j().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(j, t3, e3);
      }
      static $() {
        return ["EditReadPermissionDenied|1 path 9"];
      }
    }
    class X extends K {
      constructor(t3) {
        super(), this.path = "", this.error = "", this.isReadonly = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new X().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new X().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new X().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(X, t3, e3);
      }
      static $() {
        return ["EditWritePermissionDenied|1 path 9|2 error 9|3 is_readonly 8"];
      }
    }
    class Z extends K {
      constructor(t3) {
        super(), this.path = "", this.reason = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Z().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Z().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Z().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Z, t3, e3);
      }
      static $() {
        return ["EditRejected|1 path 9|2 reason 9"];
      }
    }
    class tt extends K {
      constructor(t3) {
        super(), this.path = "", this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new tt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new tt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new tt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(tt, t3, e3);
      }
      static $() {
        return ["EditError|1 path 9|2 error 9|5 model_visible_error 9?"];
      }
    }
    class et extends K {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new et().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new et().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new et().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(et, t3, e3);
      }
      static $() {
        return ["EditToolCall|1 args #0|2 result #1", V, z];
      }
    }
    class rt extends K {
      constructor(t3) {
        super(), this.streamContentDelta = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new rt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new rt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new rt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(rt, t3, e3);
      }
      static $() {
        return ["EditToolCallDelta|1 stream_content_delta 9"];
      }
    }
    var nt = r2(2730);
    class st extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class it extends st {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new it().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new it().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new it().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(it, t3, e3);
      }
      static $() {
        return ["LsToolCall|1 args #0|2 result #1", nt.xe, nt.fv];
      }
    }
    var ot = r2(6885), at = r2(4500);
    class ut extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class ct extends ut {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ct().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ct().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ct().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ct, t3, e3);
      }
      static $() {
        return ["ReadLintsToolCall|1 args #0|2 result #1", lt, mt];
      }
    }
    class lt extends ut {
      constructor(t3) {
        super(), this.paths = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new lt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new lt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new lt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(lt, t3, e3);
      }
      static $() {
        return ["ReadLintsToolArgs|1 paths 9*"];
      }
    }
    class mt extends ut {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new mt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new mt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new mt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(mt, t3, e3);
      }
      static $() {
        return ["ReadLintsToolResult|1 success #0 result|2 error #1 result", dt, gt];
      }
    }
    class dt extends ut {
      constructor(t3) {
        super(), this.fileDiagnostics = [], this.totalFiles = 0, this.totalDiagnostics = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new dt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new dt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new dt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(dt, t3, e3);
      }
      static $() {
        return ["ReadLintsToolSuccess|1 file_diagnostics #0*|2 total_files 5|3 total_diagnostics 5", ft];
      }
    }
    class ft extends ut {
      constructor(t3) {
        super(), this.path = "", this.diagnostics = [], this.diagnosticsCount = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ft().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ft().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ft().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ft, t3, e3);
      }
      static $() {
        return ["FileDiagnostics|1 path 9|2 diagnostics #0*|3 diagnostics_count 5", pt];
      }
    }
    class pt extends ut {
      constructor(t3) {
        super(), this.severity = ot.h_.UNSPECIFIED, this.message = "", this.source = "", this.code = "", this.isStale = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pt, t3, e3);
      }
      static $() {
        return ["DiagnosticItem|1 severity #0|2 range #1|3 message 9|4 source 9|5 code 9|6 is_stale 8", ot.h_, ht];
      }
    }
    class ht extends ut {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ht().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ht().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ht().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ht, t3, e3);
      }
      static $() {
        return ["DiagnosticRange|1 start #0|2 end #0", at.yX];
      }
    }
    class gt extends ut {
      constructor(t3) {
        super(), this.errorMessage = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new gt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new gt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new gt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(gt, t3, e3);
      }
      static $() {
        return ["ReadLintsToolError|1 error_message 9"];
      }
    }
    var At = r2(1197);
    class _t extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class yt extends _t {
      constructor(t3) {
        super(), this.error = "", this.readToolDefReminder = "", this.systemReminders = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yt, t3, e3);
      }
      static $() {
        return ["McpToolError|1 error 9|2 read_tool_def_reminder 9|3 system_reminders #0*", At.Kp];
      }
    }
    class wt extends _t {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wt, t3, e3);
      }
      static $() {
        return ["McpToolResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 permission_denied #3 result", At.QW, yt, At.xo, At.HQ];
      }
    }
    class St extends _t {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new St().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new St().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new St().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(St, t3, e3);
      }
      static $() {
        return ["McpToolCall|1 args #0|2 result #1|3 description 9?", At.E_, wt];
      }
    }
    var Jt = r2(1563);
    class Bt extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Et extends Bt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Et().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Et().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Et().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Et, t3, e3);
      }
      static $() {
        return ["SemSearchToolCall|1 args #0|2 result #1", It, Ct];
      }
    }
    class It extends Bt {
      constructor(t3) {
        super(), this.query = "", this.targetDirectories = [], this.explanation = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new It().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new It().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new It().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(It, t3, e3);
      }
      static $() {
        return ["SemSearchToolArgs|1 query 9|2 target_directories 9*|3 explanation 9"];
      }
    }
    class Ct extends Bt {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ct().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ct().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ct().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ct, t3, e3);
      }
      static $() {
        return ["SemSearchToolResult|1 success #0 result|2 error #1 result", bt, kt];
      }
    }
    class bt extends Bt {
      constructor(t3) {
        super(), this.results = "", this.codeResults = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new bt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new bt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new bt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(bt, t3, e3);
      }
      static $() {
        return ["SemSearchToolSuccess|1 results 9|2 code_results #0*", Jt.PT];
      }
    }
    class kt extends Bt {
      constructor(t3) {
        super(), this.errorMessage = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new kt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new kt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new kt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(kt, t3, e3);
      }
      static $() {
        return ["SemSearchToolError|1 error_message 9"];
      }
    }
    class vt extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class qt extends vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qt, t3, e3);
      }
      static $() {
        return ["CreatePlanToolCall|1 args #0|2 result #1", Pt, Tt];
      }
    }
    class Rt extends vt {
      constructor(t3) {
        super(), this.name = "", this.todos = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Rt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Rt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Rt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Rt, t3, e3);
      }
      static $() {
        return ["Phase|1 name 9|2 todos #0*", N];
      }
    }
    class Pt extends vt {
      constructor(t3) {
        super(), this.plan = "", this.todos = [], this.overview = "", this.name = "", this.isProject = false, this.phases = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pt, t3, e3);
      }
      static $() {
        return ["CreatePlanArgs|1 plan 9|2 todos #0*|3 overview 9|4 name 9|5 is_project 8|6 phases #1*", N, Rt];
      }
    }
    class Tt extends vt {
      constructor(t3) {
        super(), this.result = { case: void 0 }, this.planUri = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Tt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Tt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Tt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Tt, t3, e3);
      }
      static $() {
        return ["CreatePlanResult|1 success #0 result|2 error #1 result|3 plan_uri 9", xt, Nt];
      }
    }
    class xt extends vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xt, t3, e3);
      }
      static $() {
        return ["CreatePlanSuccess"];
      }
    }
    class Nt extends vt {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Nt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Nt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Nt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Nt, t3, e3);
      }
      static $() {
        return ["CreatePlanError|1 error 9"];
      }
    }
    class Dt extends vt {
      constructor(t3) {
        super(), this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Dt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Dt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Dt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Dt, t3, e3);
      }
      static $() {
        return ["CreatePlanRequestQuery|1 args #0|2 tool_call_id 9", Pt];
      }
    }
    class Ut extends vt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ut().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ut().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ut().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ut, t3, e3);
      }
      static $() {
        return ["CreatePlanRequestResponse|1 result #0", Tt];
      }
    }
    class Qt extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Mt extends Qt {
      constructor(t3) {
        super(), this.searchTerm = "", this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Mt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Mt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Mt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Mt, t3, e3);
      }
      static $() {
        return ["WebSearchArgs|1 search_term 9|2 tool_call_id 9"];
      }
    }
    class Ot extends Qt {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ot().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ot().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ot().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ot, t3, e3);
      }
      static $() {
        return ["WebSearchResult|1 success #0 result|2 error #1 result|3 rejected #2 result", Ft, Lt, $t];
      }
    }
    class Ft extends Qt {
      constructor(t3) {
        super(), this.references = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ft().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ft().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ft().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ft, t3, e3);
      }
      static $() {
        return ["WebSearchSuccess|1 references #0*", Gt];
      }
    }
    class Lt extends Qt {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Lt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Lt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Lt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Lt, t3, e3);
      }
      static $() {
        return ["WebSearchError|1 error 9"];
      }
    }
    class $t extends Qt {
      constructor(t3) {
        super(), this.reason = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $t().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $t().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $t().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($t, t3, e3);
      }
      static $() {
        return ["WebSearchRejected|1 reason 9"];
      }
    }
    class Gt extends Qt {
      constructor(t3) {
        super(), this.title = "", this.url = "", this.chunk = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Gt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Gt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Gt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Gt, t3, e3);
      }
      static $() {
        return ["WebSearchReference|1 title 9|2 url 9|3 chunk 9"];
      }
    }
    class Ht extends Qt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ht().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ht().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ht().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ht, t3, e3);
      }
      static $() {
        return ["WebSearchToolCall|1 args #0|2 result #1", Mt, Ot];
      }
    }
    class Kt extends Qt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Kt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Kt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Kt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Kt, t3, e3);
      }
      static $() {
        return ["WebSearchRequestQuery|1 args #0", Mt];
      }
    }
    class Vt extends Qt {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Vt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Vt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Vt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Vt, t3, e3);
      }
      static $() {
        return ["WebSearchRequestResponse|1 approved #0 result|2 rejected #1 result", zt, Wt];
      }
    }
    class zt extends Qt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new zt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new zt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new zt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(zt, t3, e3);
      }
      static $() {
        return ["WebSearchRequestResponse.Approved"];
      }
    }
    class Wt extends Qt {
      constructor(t3) {
        super(), this.reason = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Wt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Wt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Wt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Wt, t3, e3);
      }
      static $() {
        return ["WebSearchRequestResponse.Rejected|1 reason 9"];
      }
    }
    class Yt extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class jt extends Yt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new jt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new jt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new jt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(jt, t3, e3);
      }
      static $() {
        return ["ListMcpResourcesToolCall|1 args #0|2 result #1", At.kj, At.kP];
      }
    }
    class Xt extends Yt {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xt().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xt().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xt().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xt, t3, e3);
      }
      static $() {
        return ["ReadMcpResourceToolCall|1 args #0|2 result #1", At.DI, At.ZD];
      }
    }
    var Zt = r2(5814), te = r2(8892), ee = r2(1489);
    class re extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class ne extends re {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ne().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ne().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ne().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ne, t3, e3);
      }
      static $() {
        return ["FetchToolCall|1 args #0|2 result #1", ee.UM, ee.uN];
      }
    }
    class se extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class ie extends se {
      constructor(t3) {
        super(), this.targetModeId = "", this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ie().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ie().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ie().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ie, t3, e3);
      }
      static $() {
        return ["SwitchModeArgs|1 target_mode_id 9|2 explanation 9?|3 tool_call_id 9"];
      }
    }
    class oe extends se {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new oe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new oe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new oe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(oe, t3, e3);
      }
      static $() {
        return ["SwitchModeResult|1 success #0 result|2 error #1 result|3 rejected #2 result", ae, ue, ce];
      }
    }
    class ae extends se {
      constructor(t3) {
        super(), this.fromModeId = "", this.toModeId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ae().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ae().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ae().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ae, t3, e3);
      }
      static $() {
        return ["SwitchModeSuccess|1 from_mode_id 9|2 to_mode_id 9"];
      }
    }
    class ue extends se {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ue().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ue().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ue().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ue, t3, e3);
      }
      static $() {
        return ["SwitchModeError|1 error 9"];
      }
    }
    class ce extends se {
      constructor(t3) {
        super(), this.reason = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ce().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ce().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ce().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ce, t3, e3);
      }
      static $() {
        return ["SwitchModeRejected|1 reason 9"];
      }
    }
    class le extends se {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new le().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new le().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new le().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(le, t3, e3);
      }
      static $() {
        return ["SwitchModeToolCall|1 args #0|2 result #1", ie, oe];
      }
    }
    class me extends se {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new me().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new me().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new me().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(me, t3, e3);
      }
      static $() {
        return ["SwitchModeRequestQuery|1 args #0", ie];
      }
    }
    class de extends se {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new de().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new de().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new de().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(de, t3, e3);
      }
      static $() {
        return ["SwitchModeRequestResponse|1 approved #0 result|2 rejected #1 result", fe, pe];
      }
    }
    class fe extends se {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fe, t3, e3);
      }
      static $() {
        return ["SwitchModeRequestResponse.Approved"];
      }
    }
    class pe extends se {
      constructor(t3) {
        super(), this.reason = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pe, t3, e3);
      }
      static $() {
        return ["SwitchModeRequestResponse.Rejected|1 reason 9"];
      }
    }
    var he = r2(7747), ge = r2(1531);
    class Ae extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class _e extends Ae {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _e().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _e().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _e().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_e, t3, e3);
      }
      static $() {
        return ["RecordScreenToolCall|1 args #0|2 result #1", ge.zH, ge.Tj];
      }
    }
    var ye = r2(3643), we = r2(4498);
    class Se extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Je extends Se {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Je().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Je().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Je().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Je, t3, e3);
      }
      static $() {
        return ["WriteShellStdinToolCall|1 args #0|2 result #1", we.LL, we.nt];
      }
    }
    class Be extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Ee extends Be {
      constructor(t3) {
        super(), this.unexpectedActionOutcomes = "", this.relevantInstructions = "", this.scenarioAnalysis = "", this.criticalSynthesis = "", this.nextSteps = "", this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ee().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ee().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ee().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ee, t3, e3);
      }
      static $() {
        return ["ReflectArgs|1 unexpected_action_outcomes 9|2 relevant_instructions 9|3 scenario_analysis 9|4 critical_synthesis 9|5 next_steps 9|6 tool_call_id 9"];
      }
    }
    class Ie extends Be {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ie().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ie().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ie().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ie, t3, e3);
      }
      static $() {
        return ["ReflectResult|1 success #0 result|2 error #1 result", Ce, be];
      }
    }
    class Ce extends Be {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ce().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ce().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ce().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ce, t3, e3);
      }
      static $() {
        return ["ReflectSuccess"];
      }
    }
    class be extends Be {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new be().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new be().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new be().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(be, t3, e3);
      }
      static $() {
        return ["ReflectError|1 error 9"];
      }
    }
    class ke extends Be {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ke().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ke().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ke().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ke, t3, e3);
      }
      static $() {
        return ["ReflectToolCall|1 args #0|2 result #1", Ee, Ie];
      }
    }
    class ve extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class qe extends ve {
      constructor(t3) {
        super(), this.installCommand = "", this.startCommand = "", this.dockerfileContents = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qe, t3, e3);
      }
      static $() {
        return ["SetupVmEnvironmentArgs|2 install_command 9|3 start_command 9|4 dockerfile_contents 9"];
      }
    }
    class Re extends ve {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Re().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Re().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Re().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Re, t3, e3);
      }
      static $() {
        return ["SetupVmEnvironmentResult|1 success #0 result", Pe];
      }
    }
    class Pe extends ve {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pe, t3, e3);
      }
      static $() {
        return ["SetupVmEnvironmentSuccess"];
      }
    }
    class Te extends ve {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Te().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Te().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Te().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Te, t3, e3);
      }
      static $() {
        return ["SetupVmEnvironmentToolCall|1 args #0|2 result #1", qe, Re];
      }
    }
    class xe extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Ne extends xe {
      constructor(t3) {
        super(), this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ne().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ne().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ne().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ne, t3, e3);
      }
      static $() {
        return ["StartGrindExecutionArgs|1 explanation 9?|2 tool_call_id 9"];
      }
    }
    class De extends xe {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new De().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new De().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new De().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(De, t3, e3);
      }
      static $() {
        return ["StartGrindExecutionResult|1 success #0 result|2 error #1 result", Ue, Qe];
      }
    }
    class Ue extends xe {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ue().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ue().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ue().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ue, t3, e3);
      }
      static $() {
        return ["StartGrindExecutionSuccess"];
      }
    }
    class Qe extends xe {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qe, t3, e3);
      }
      static $() {
        return ["StartGrindExecutionError|1 error 9"];
      }
    }
    class Me extends xe {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Me().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Me().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Me().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Me, t3, e3);
      }
      static $() {
        return ["StartGrindExecutionToolCall|1 args #0|2 result #1", Ne, De];
      }
    }
    class Oe extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Fe extends Oe {
      constructor(t3) {
        super(), this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fe, t3, e3);
      }
      static $() {
        return ["StartGrindPlanningArgs|1 explanation 9?|2 tool_call_id 9"];
      }
    }
    class Le extends Oe {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Le().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Le().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Le().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Le, t3, e3);
      }
      static $() {
        return ["StartGrindPlanningResult|1 success #0 result|2 error #1 result", $e, Ge];
      }
    }
    class $e extends Oe {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $e().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $e().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $e().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($e, t3, e3);
      }
      static $() {
        return ["StartGrindPlanningSuccess"];
      }
    }
    class Ge extends Oe {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ge().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ge().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ge().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ge, t3, e3);
      }
      static $() {
        return ["StartGrindPlanningError|1 error 9"];
      }
    }
    class He extends Oe {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new He().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new He().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new He().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(He, t3, e3);
      }
      static $() {
        return ["StartGrindPlanningToolCall|1 args #0|2 result #1", Fe, Le];
      }
    }
    class Ke extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Ve extends Ke {
      constructor(t3) {
        super(), this.url = "", this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ve().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ve().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ve().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ve, t3, e3);
      }
      static $() {
        return ["WebFetchArgs|1 url 9|2 tool_call_id 9"];
      }
    }
    class ze extends Ke {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ze().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ze().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ze().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ze, t3, e3);
      }
      static $() {
        return ["WebFetchResult|1 success #0 result|2 error #1 result|3 rejected #2 result", We, Ye, je];
      }
    }
    class We extends Ke {
      constructor(t3) {
        super(), this.url = "", this.markdown = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new We().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new We().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new We().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(We, t3, e3);
      }
      static $() {
        return ["WebFetchSuccess|1 url 9|2 markdown 9|3 output_location #0?", at.pV];
      }
    }
    class Ye extends Ke {
      constructor(t3) {
        super(), this.url = "", this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ye().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ye().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ye().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ye, t3, e3);
      }
      static $() {
        return ["WebFetchError|1 url 9|2 error 9"];
      }
    }
    class je extends Ke {
      constructor(t3) {
        super(), this.reason = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new je().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new je().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new je().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(je, t3, e3);
      }
      static $() {
        return ["WebFetchRejected|1 reason 9"];
      }
    }
    class Xe extends Ke {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xe().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xe().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xe().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xe, t3, e3);
      }
      static $() {
        return ["WebFetchToolCall|1 args #0|2 result #1", Ve, ze];
      }
    }
    class Ze extends Ke {
      constructor(t3) {
        super(), this.skipApproval = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ze().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ze().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ze().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ze, t3, e3);
      }
      static $() {
        return ["WebFetchRequestQuery|1 args #0|2 skip_approval 8|3 smart_mode_approval #1", Ve, at.UC];
      }
    }
    class tr extends Ke {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new tr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new tr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new tr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(tr, t3, e3);
      }
      static $() {
        return ["WebFetchRequestResponse|1 approved #0 result|2 rejected #1 result", er, rr];
      }
    }
    class er extends Ke {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new er().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new er().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new er().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(er, t3, e3);
      }
      static $() {
        return ["WebFetchRequestResponse.Approved"];
      }
    }
    class rr extends Ke {
      constructor(t3) {
        super(), this.reason = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new rr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new rr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new rr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(rr, t3, e3);
      }
      static $() {
        return ["WebFetchRequestResponse.Rejected|1 reason 9"];
      }
    }
    var nr = r2(867), sr = r2(5178);
    const ir = "agent.v1.";
    class or extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return ir;
      }
    }
    var ar = (0, o2.QT)(n2.proto3, ir, "MergePrMode", [[0, "UNSPECIFIED"], [1, "MERGE"], [2, "AUTO"], [3, "DISABLE_AUTO"]], 1), ur = (0, o2.QT)(n2.proto3, ir, "MergePrMethod", [[0, "UNSPECIFIED"], [1, "MERGE"], [2, "SQUASH"]], 1), cr = (0, o2.QT)(n2.proto3, ir, "PullRequestStatus", [[0, "UNSPECIFIED"], [1, "OPEN"], [2, "CLOSED"]], 1);
    class lr extends or {
      constructor(t3) {
        super(), this.toolCallId = "", this.action = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new lr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new lr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new lr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(lr, t3, e3);
      }
      static $() {
        return ["PrManagementArgs|1 tool_call_id 9|2 create_pr #0 action|3 update_pr #1 action|4 post_comment #2 action|5 resolve_comment #3 action|6 get_ci_status #4 action|7 set_pr_status #5 action|8 merge_pr #6 action", mr, dr, fr, pr, hr, gr, Ar];
      }
    }
    class mr extends or {
      constructor(t3) {
        super(), this.title = "", this.body = "", this.branchName = "", this.addLabels = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new mr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new mr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new mr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(mr, t3, e3);
      }
      static $() {
        return ["CreatePrAction|1 title 9|2 body 9|3 base_branch 9?|4 draft 8?|5 branch_name 9|6 add_labels 9*|7 repo_url 9?|8 skip_branch_prefix_check 8?|9 stack_on_pr_number 3?"];
      }
    }
    class dr extends or {
      constructor(t3) {
        super(), this.addLabels = [], this.removeLabels = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new dr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new dr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new dr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(dr, t3, e3);
      }
      static $() {
        return ["UpdatePrAction|1 pr_url 9?|2 title 9?|3 body 9?|4 base_branch 9?|5 branch_name 9?|6 add_labels 9*|7 remove_labels 9*|8 repo_url 9?|9 stack_on_pr_number 3?|10 clear_stack 8?|11 draft 8?"];
      }
    }
    class fr extends or {
      constructor(t3) {
        super(), this.body = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fr, t3, e3);
      }
      static $() {
        return ["PostCommentAction|1 pr_url 9?|2 branch_name 9?|3 body 9|4 repo_url 9?|5 in_reply_to 3?|6 path 9?|7 line 5?|8 start_line 5?|9 side 9?|10 reply_to_reference 9?"];
      }
    }
    class pr extends or {
      constructor(t3) {
        super(), this.commentId = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pr, t3, e3);
      }
      static $() {
        return ["ResolveCommentAction|1 pr_url 9?|2 branch_name 9?|3 comment_id 3|4 repo_url 9?|5 comment_reference 9?"];
      }
    }
    class hr extends or {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new hr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new hr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new hr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(hr, t3, e3);
      }
      static $() {
        return ["GetCiStatusAction|1 pr_url 9?|2 branch_name 9?|3 repo_url 9?"];
      }
    }
    class gr extends or {
      constructor(t3) {
        super(), this.status = cr.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new gr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new gr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new gr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(gr, t3, e3);
      }
      static $() {
        return ["SetPrStatusAction|1 pr_url 9?|2 branch_name 9?|3 repo_url 9?|4 status #0", cr];
      }
    }
    class Ar extends or {
      constructor(t3) {
        super(), this.mode = ar.UNSPECIFIED, this.method = ur.UNSPECIFIED, this.expectedMemberHeadShas = {}, this.downstack = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ar().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ar().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ar().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ar, t3, e3);
      }
      static $() {
        return ["MergePrAction|1 pr_url 9?|2 branch_name 9?|3 repo_url 9?|4 mode #0|5 method #1|6 expected_head_sha 9?|7 expected_member_head_shas 9,9|8 downstack 8", ar, ur];
      }
    }
    class _r extends or {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _r().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _r().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _r().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_r, t3, e3);
      }
      static $() {
        return ["PrManagementResult|1 success #0 result|2 error #1 result|3 rejected #2 result|4 registered #3 result|5 needs_confirmation #4 result", yr, wr, Sr, Jr, Br];
      }
    }
    class yr extends or {
      constructor(t3) {
        super(), this.prUrl = "", this.prNumber = 0, this.message = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yr, t3, e3);
      }
      static $() {
        return ["PrManagementSuccess|1 pr_url 9|2 pr_number 5|3 message 9"];
      }
    }
    class wr extends or {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wr, t3, e3);
      }
      static $() {
        return ["PrManagementError|1 error 9"];
      }
    }
    class Sr extends or {
      constructor(t3) {
        super(), this.reason = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Sr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Sr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Sr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Sr, t3, e3);
      }
      static $() {
        return ["PrManagementRejected|1 reason 9"];
      }
    }
    class Jr extends or {
      constructor(t3) {
        super(), this.message = "", this.title = "", this.body = "", this.branchName = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Jr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Jr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Jr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Jr, t3, e3);
      }
      static $() {
        return ["PrManagementRegistered|1 message 9|2 title 9|3 body 9|4 base_branch 9?|5 draft 8?|6 branch_name 9"];
      }
    }
    class Br extends or {
      constructor(t3) {
        super(), this.message = "", this.discoveredPrUrl = "", this.discoveredPrNumber = 0, this.discoveredPrTitle = "", this.branchName = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Br().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Br().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Br().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Br, t3, e3);
      }
      static $() {
        return ["PrManagementNeedsConfirmation|1 message 9|2 discovered_pr_url 9|3 discovered_pr_number 5|4 discovered_pr_title 9|5 branch_name 9"];
      }
    }
    class Er extends or {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Er().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Er().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Er().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Er, t3, e3);
      }
      static $() {
        return ["PrManagementToolCall|1 args #0|2 result #1", lr, _r];
      }
    }
    class Ir extends or {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ir().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ir().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ir().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ir, t3, e3);
      }
      static $() {
        return ["PrManagementRequestQuery|1 args #0", lr];
      }
    }
    class Cr extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class br extends Cr {
      constructor(t3) {
        super(), this.serverIdentifier = "", this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new br().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new br().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new br().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(br, t3, e3);
      }
      static $() {
        return ["McpAuthArgs|1 server_identifier 9|2 tool_call_id 9"];
      }
    }
    class kr extends Cr {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new kr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new kr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new kr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(kr, t3, e3);
      }
      static $() {
        return ["McpAuthResult|1 success #0 result|2 error #1 result|3 rejected #2 result", vr, qr, Rr];
      }
    }
    class vr extends Cr {
      constructor(t3) {
        super(), this.serverIdentifier = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vr, t3, e3);
      }
      static $() {
        return ["McpAuthSuccess|1 server_identifier 9"];
      }
    }
    class qr extends Cr {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qr, t3, e3);
      }
      static $() {
        return ["McpAuthError|1 error 9"];
      }
    }
    class Rr extends Cr {
      constructor(t3) {
        super(), this.reason = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Rr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Rr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Rr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Rr, t3, e3);
      }
      static $() {
        return ["McpAuthRejected|1 reason 9"];
      }
    }
    class Pr extends Cr {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pr, t3, e3);
      }
      static $() {
        return ["McpAuthToolCall|1 args #0|2 result #1", br, kr];
      }
    }
    class Tr extends Cr {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Tr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Tr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Tr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Tr, t3, e3);
      }
      static $() {
        return ["McpAuthRequestQuery|1 args #0", br];
      }
    }
    class xr extends Cr {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xr, t3, e3);
      }
      static $() {
        return ["McpAuthRequestResponse|1 approved #0 result|2 rejected #1 result", Nr, Dr];
      }
    }
    class Nr extends Cr {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Nr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Nr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Nr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Nr, t3, e3);
      }
      static $() {
        return ["McpAuthRequestResponse.Approved"];
      }
    }
    class Dr extends Cr {
      constructor(t3) {
        super(), this.reason = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Dr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Dr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Dr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Dr, t3, e3);
      }
      static $() {
        return ["McpAuthRequestResponse.Rejected|1 reason 9"];
      }
    }
    class Ur extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Qr extends Ur {
      constructor(t3) {
        super(), this.taskId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qr, t3, e3);
      }
      static $() {
        return ["AwaitArgs|1 task_id 9|2 block_until_ms 13?|3 regex 9?"];
      }
    }
    class Mr extends Ur {
      constructor(t3) {
        super(), this.taskId = "", this.runtimeMs = n2.protoInt64.zero, this.outputFilePath = "", this.outputLength = n2.protoInt64.zero, this.regexRequested = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Mr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Mr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Mr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Mr, t3, e3);
      }
      static $() {
        return ["AwaitTaskComplete|1 task_id 9|2 runtime_ms 4|3 output_file_path 9|4 output_length 4|5 regex_requested 8|6 regex_match 9?|7 exit_code 17?|8 wake_reason 9?"];
      }
    }
    class Or extends Ur {
      constructor(t3) {
        super(), this.taskId = "", this.runtimeMs = n2.protoInt64.zero, this.outputFilePath = "", this.outputLength = n2.protoInt64.zero, this.regexRequested = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Or().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Or().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Or().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Or, t3, e3);
      }
      static $() {
        return ["AwaitTaskStillRunning|1 task_id 9|2 runtime_ms 4|3 output_file_path 9|4 output_length 4|5 regex_requested 8|6 regex_match 9?|7 wake_reason 9?"];
      }
    }
    class Fr extends Ur {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fr, t3, e3);
      }
      static $() {
        return ["AwaitError|1 error 9"];
      }
    }
    class Lr extends Ur {
      constructor(t3) {
        super(), this.awaitResult = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Lr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Lr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Lr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Lr, t3, e3);
      }
      static $() {
        return ["AwaitSuccess|1 complete #0 await_result|2 still_running #1 await_result", Mr, Or];
      }
    }
    class $r extends Ur {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $r().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $r().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $r().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($r, t3, e3);
      }
      static $() {
        return ["AwaitResult|1 complete #0 result|2 still_running #1 result|3 error #2 result|4 success #3 result", Mr, Or, Fr, Lr];
      }
    }
    class Gr extends Ur {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Gr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Gr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Gr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Gr, t3, e3);
      }
      static $() {
        return ["AwaitToolCall|1 args #0|2 result #1", Qr, $r];
      }
    }
    class Hr extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Kr extends Hr {
      constructor(t3) {
        super(), this.filePath = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Kr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Kr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Kr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Kr, t3, e3);
      }
      static $() {
        return ["BlameByFilePathArgs|1 file_path 9|2 start_line 5?|3 end_line 5?"];
      }
    }
    class Vr extends Hr {
      constructor(t3) {
        super(), this.content = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Vr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Vr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Vr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Vr, t3, e3);
      }
      static $() {
        return ["BlameByFilePathSuccess|1 content 9"];
      }
    }
    class zr extends Hr {
      constructor(t3) {
        super(), this.errorMessage = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new zr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new zr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new zr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(zr, t3, e3);
      }
      static $() {
        return ["BlameByFilePathError|1 error_message 9"];
      }
    }
    class Wr extends Hr {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Wr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Wr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Wr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Wr, t3, e3);
      }
      static $() {
        return ["BlameByFilePathResult|1 success #0 result|2 error #1 result", Vr, zr];
      }
    }
    class Yr extends Hr {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Yr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Yr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Yr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Yr, t3, e3);
      }
      static $() {
        return ["BlameByFilePathToolCall|1 args #0|2 result #1", Kr, Wr];
      }
    }
    class jr extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Xr extends jr {
      constructor(t3) {
        super(), this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xr, t3, e3);
      }
      static $() {
        return ["GetMcpToolsArgs|1 server 9?|2 tool_name 9?|3 pattern 9?|4 tool_call_id 9"];
      }
    }
    class Zr extends jr {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Zr().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Zr().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Zr().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Zr, t3, e3);
      }
      static $() {
        return ["GetMcpToolsAgentResult|1 success #0 result|2 error #1 result", tn, en];
      }
    }
    class tn extends jr {
      constructor(t3) {
        super(), this.content = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new tn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new tn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new tn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(tn, t3, e3);
      }
      static $() {
        return ["GetMcpToolsSuccess|1 content 9|2 output_file_path 9?"];
      }
    }
    class en extends jr {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new en().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new en().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new en().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(en, t3, e3);
      }
      static $() {
        return ["GetMcpToolsError|1 error 9"];
      }
    }
    class rn extends jr {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new rn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new rn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new rn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(rn, t3, e3);
      }
      static $() {
        return ["GetMcpToolsToolCall|1 args #0|2 result #1", Xr, Zr];
      }
    }
    class nn extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class sn extends nn {
      constructor(t3) {
        super(), this.title = "", this.file = "", this.startLine = 0, this.endLine = 0, this.description = "", this.severity = "", this.category = "", this.rationale = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new sn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new sn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new sn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(sn, t3, e3);
      }
      static $() {
        return ["ReportBugArgs|1 title 9|2 file 9|3 start_line 5|4 end_line 5|5 description 9|6 severity 9|7 category 9|8 rationale 9"];
      }
    }
    class on extends nn {
      constructor(t3) {
        super(), this.output = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new on().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new on().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new on().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(on, t3, e3);
      }
      static $() {
        return ["ReportBugSuccess|1 output 9"];
      }
    }
    class an extends nn {
      constructor(t3) {
        super(), this.errorMessage = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new an().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new an().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new an().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(an, t3, e3);
      }
      static $() {
        return ["ReportBugError|1 error_message 9"];
      }
    }
    class un extends nn {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new un().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new un().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new un().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(un, t3, e3);
      }
      static $() {
        return ["ReportBugResult|1 success #0 result|2 error #1 result", on, an];
      }
    }
    class cn extends nn {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new cn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new cn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new cn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(cn, t3, e3);
      }
      static $() {
        return ["ReportBugToolCall|1 args #0|2 result #1", sn, un];
      }
    }
    class ln extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class mn extends ln {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new mn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new mn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new mn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(mn, t3, e3);
      }
      static $() {
        return ["CommunicateUpdateArgs|1 current_step 9?|3 final_summary 9?|4 completed_subtitle 9?"];
      }
    }
    class dn extends ln {
      constructor(t3) {
        super(), this.currentStep = "", this.messageIndex = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new dn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new dn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new dn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(dn, t3, e3);
      }
      static $() {
        return ["CommunicateUpdateSuccess|1 current_step 9|3 message_index 13"];
      }
    }
    class fn extends ln {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fn, t3, e3);
      }
      static $() {
        return ["CommunicateUpdateError|1 error 9"];
      }
    }
    class pn extends ln {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pn, t3, e3);
      }
      static $() {
        return ["CommunicateUpdateResult|1 success #0 result|2 error #1 result", dn, fn];
      }
    }
    class hn extends ln {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new hn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new hn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new hn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(hn, t3, e3);
      }
      static $() {
        return ["CommunicateUpdateToolCall|1 args #0|2 result #1", mn, pn];
      }
    }
    class gn extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class An extends gn {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new An().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new An().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new An().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(An, t3, e3);
      }
      static $() {
        return ["SendFinalSummaryArgs|1 final_summary 9?"];
      }
    }
    class _n extends gn {
      constructor(t3) {
        super(), this.finalSummary = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _n().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _n().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _n().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_n, t3, e3);
      }
      static $() {
        return ["SendFinalSummarySuccess|1 final_summary 9"];
      }
    }
    class yn extends gn {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yn, t3, e3);
      }
      static $() {
        return ["SendFinalSummaryError|1 error 9"];
      }
    }
    class wn extends gn {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wn, t3, e3);
      }
      static $() {
        return ["SendFinalSummaryResult|1 success #0 result|2 error #1 result", _n, yn];
      }
    }
    class Sn extends gn {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Sn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Sn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Sn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Sn, t3, e3);
      }
      static $() {
        return ["SendFinalSummaryToolCall|1 args #0|2 result #1", An, wn];
      }
    }
    const Jn = "agent.v1.";
    class Bn extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return Jn;
      }
    }
    var En = (0, o2.QT)(n2.proto3, Jn, "ReplaceEnvMode", [[0, "UNSPECIFIED"], [1, "CUSTOM"], [2, "CLEAN_SLATE"], [3, "DEFAULT"]], 1);
    class In extends Bn {
      constructor(t3) {
        super(), this.repoUrl = "", this.ref = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new In().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new In().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new In().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(In, t3, e3);
      }
      static $() {
        return ["RepoCheckoutRefOverride|1 repo_url 9|2 ref 9"];
      }
    }
    class Cn extends Bn {
      constructor(t3) {
        super(), this.installScript = "", this.dockerfileContents = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Cn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Cn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Cn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Cn, t3, e3);
      }
      static $() {
        return ["ReplaceEnvConfig|1 install_script 9|2 dockerfile_contents 9"];
      }
    }
    class bn extends Bn {
      constructor(t3) {
        super(), this.mode = En.UNSPECIFIED, this.checkoutRefOverrides = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new bn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new bn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new bn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(bn, t3, e3);
      }
      static $() {
        return ["ReplaceEnvArgs|1 config #0|2 mode #1|3 checkout_ref_overrides #2*", Cn, En, In];
      }
    }
    class kn extends Bn {
      constructor(t3) {
        super(), this.setupLogs = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new kn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new kn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new kn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(kn, t3, e3);
      }
      static $() {
        return ["ReplaceEnvSuccess|1 setup_logs 9"];
      }
    }
    class vn extends Bn {
      constructor(t3) {
        super(), this.errorMessage = "", this.setupLogs = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vn, t3, e3);
      }
      static $() {
        return ["ReplaceEnvFailure|1 error_message 9|2 setup_logs 9"];
      }
    }
    class qn extends Bn {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qn, t3, e3);
      }
      static $() {
        return ["ReplaceEnvResult|1 success #0 result|2 failure #1 result", kn, vn];
      }
    }
    class Rn extends Bn {
      constructor(t3) {
        super(), this.associatedPodKey = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Rn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Rn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Rn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Rn, t3, e3);
      }
      static $() {
        return ["ReplaceEnvToolCall|1 args #0|2 result #1|3 associated_pod_key 9", bn, qn];
      }
    }
    class Pn extends Bn {
      constructor(t3) {
        super(), this.associatedPodKey = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pn, t3, e3);
      }
      static $() {
        return ["ReplaceEnvToolCallDelta|1 associated_pod_key 9"];
      }
    }
    class Tn extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class xn extends Tn {
      constructor(t3) {
        super(), this.toolCallId = "", this.prUrl = "", this.addLabels = [], this.removeLabels = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xn, t3, e3);
      }
      static $() {
        return ["EditPrLabelsArgs|1 tool_call_id 9|2 pr_url 9|4 add_labels 9*|5 remove_labels 9*"];
      }
    }
    class Nn extends Tn {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Nn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Nn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Nn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Nn, t3, e3);
      }
      static $() {
        return ["EditPrLabelsResult|1 success #0 result|2 error #1 result", Dn, Un];
      }
    }
    class Dn extends Tn {
      constructor(t3) {
        super(), this.prUrl = "", this.prNumber = 0, this.message = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Dn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Dn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Dn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Dn, t3, e3);
      }
      static $() {
        return ["EditPrLabelsSuccess|1 pr_url 9|2 pr_number 5|3 message 9"];
      }
    }
    class Un extends Tn {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Un().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Un().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Un().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Un, t3, e3);
      }
      static $() {
        return ["EditPrLabelsError|1 error 9"];
      }
    }
    class Qn extends Tn {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qn, t3, e3);
      }
      static $() {
        return ["EditPrLabelsToolCall|1 args #0|2 result #1", xn, Nn];
      }
    }
    class Mn extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class On extends Mn {
      constructor(t3) {
        super(), this.checkName = "", this.tldr = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new On().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new On().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new On().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(On, t3, e3);
      }
      static $() {
        return ["RecordCiInvestigationFinding|1 check_name 9|2 details_url 9?|3 tldr 9|4 root_cause 9?|5 failing_signal 9?|6 suggested_next_step 9?|7 diff_relation 9?|8 diff_relation_evidence 9?|9 flake_assessment 9?|10 flake_evidence 9?|11 rerun_available 8?|12 rerun_evidence 9?|13 recommended_action 9?|14 recommended_action_evidence 9?|15 confidence 9?"];
      }
    }
    class Fn extends Mn {
      constructor(t3) {
        super(), this.summary = "", this.themes = [], this.checkKeys = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fn, t3, e3);
      }
      static $() {
        return ["RecordCiInvestigationOverall|1 summary 9|2 themes 9*|3 recommended_action 9?|4 recommended_action_evidence 9?|5 check_keys 9*"];
      }
    }
    class Ln extends Mn {
      constructor(t3) {
        super(), this.findings = [], this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ln().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ln().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ln().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ln, t3, e3);
      }
      static $() {
        return ["RecordCiInvestigationFindingsArgs|1 findings #0*|2 overall #1?|3 tool_call_id 9", On, Fn];
      }
    }
    class $n extends Mn {
      constructor(t3) {
        super(), this.message = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $n().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $n().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $n().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($n, t3, e3);
      }
      static $() {
        return ["RecordCiInvestigationFindingsSuccess|1 message 9"];
      }
    }
    class Gn extends Mn {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Gn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Gn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Gn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Gn, t3, e3);
      }
      static $() {
        return ["RecordCiInvestigationFindingsError|1 error 9"];
      }
    }
    class Hn extends Mn {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Hn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Hn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Hn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Hn, t3, e3);
      }
      static $() {
        return ["RecordCiInvestigationFindingsResult|1 success #0 result|2 error #1 result", $n, Gn];
      }
    }
    class Kn extends Mn {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Kn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Kn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Kn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Kn, t3, e3);
      }
      static $() {
        return ["RecordCiInvestigationFindingsToolCall|1 args #0|2 result #1", Ln, Hn];
      }
    }
    class Vn extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class zn extends Vn {
      constructor(t3) {
        super(), this.content = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new zn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new zn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new zn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(zn, t3, e3);
      }
      static $() {
        return ["SendMessageText|1 content 9"];
      }
    }
    class Wn extends Vn {
      constructor(t3) {
        super(), this.url = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Wn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Wn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Wn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Wn, t3, e3);
      }
      static $() {
        return ["SendMessageAttachment|1 url 9|2 alt 9?"];
      }
    }
    class Yn extends Vn {
      constructor(t3) {
        super(), this.message = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Yn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Yn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Yn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Yn, t3, e3);
      }
      static $() {
        return ["SendMessageArgs|1 text #0 message|2 attachment #1 message", zn, Wn];
      }
    }
    class jn extends Vn {
      constructor(t3) {
        super(), this.timestamp = n2.protoInt64.zero, this.messageId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new jn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new jn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new jn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(jn, t3, e3);
      }
      static $() {
        return ["SendMessageSuccess|1 timestamp 4|2 message_id 9"];
      }
    }
    class Xn extends Vn {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xn, t3, e3);
      }
      static $() {
        return ["SendMessageError|1 error 9"];
      }
    }
    class Zn extends Vn {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Zn().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Zn().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Zn().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Zn, t3, e3);
      }
      static $() {
        return ["SendMessageResult|1 success #0 result|2 error #1 result", jn, Xn];
      }
    }
    class ts extends Vn {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ts().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ts().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ts().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ts, t3, e3);
      }
      static $() {
        return ["SendMessageToolCall|1 args #0|2 result #1", Yn, Zn];
      }
    }
    class es extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class rs extends es {
      constructor(t3) {
        super(), this.bcIds = [], this.sources = [], this.statuses = [], this.includeTeamWide = false, this.includeArchived = false, this.includeTranscript = false, this.activeSince = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new rs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new rs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new rs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(rs, t3, e3);
      }
      static $() {
        return ["FetchCloudAgentDataArgs|4 bc_ids 9*|6 sources 9*|7 statuses 9*|8 include_team_wide 8|9 include_archived 8|10 limit 5?|12 include_transcript 8|13 active_since 9"];
      }
    }
    class ns extends es {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ns().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ns().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ns().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ns, t3, e3);
      }
      static $() {
        return ["FetchCloudAgentDataResult|1 success #0 result|2 error #1 result", ss, is];
      }
    }
    class ss extends es {
      constructor(t3) {
        super(), this.summary = "", this.agentCount = 0, this.writtenPaths = [], this.unavailableBcIds = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ss().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ss().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ss().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ss, t3, e3);
      }
      static $() {
        return ["FetchCloudAgentDataSuccess|1 summary 9|2 agent_count 5|3 written_paths 9*|4 unavailable_bc_ids 9*"];
      }
    }
    class is extends es {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new is().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new is().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new is().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(is, t3, e3);
      }
      static $() {
        return ["FetchCloudAgentDataError|1 error 9"];
      }
    }
    class os extends es {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new os().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new os().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new os().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(os, t3, e3);
      }
      static $() {
        return ["FetchCloudAgentDataToolCall|1 args #0|2 result #1", rs, ns];
      }
    }
    class as extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class us extends as {
      constructor(t3) {
        super(), this.message = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new us().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new us().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new us().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(us, t3, e3);
      }
      static $() {
        return ["SendToUserArgs|1 message 9"];
      }
    }
    class cs extends as {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new cs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new cs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new cs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(cs, t3, e3);
      }
      static $() {
        return ["SendToUserSuccess"];
      }
    }
    class ls extends as {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ls().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ls().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ls().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ls, t3, e3);
      }
      static $() {
        return ["SendToUserError|1 error 9"];
      }
    }
    class ms extends as {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ms().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ms().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ms().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ms, t3, e3);
      }
      static $() {
        return ["SendToUserResult|1 success #0 result|2 error #1 result", cs, ls];
      }
    }
    class ds extends as {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ds().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ds().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ds().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ds, t3, e3);
      }
      static $() {
        return ["SendToUserToolCall|1 args #0|2 result #1", us, ms];
      }
    }
    var fs = r2(8036);
    class ps extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class hs extends ps {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new hs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new hs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new hs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(hs, t3, e3);
      }
      static $() {
        return ["PiReadToolCall|1 args #0|2 result #1", gs, As];
      }
    }
    class gs extends ps {
      constructor(t3) {
        super(), this.path = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new gs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new gs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new gs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(gs, t3, e3);
      }
      static $() {
        return ["PiReadToolArgs|1 path 9|2 offset 5?|3 limit 5?"];
      }
    }
    class As extends ps {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new As().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new As().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new As().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(As, t3, e3);
      }
      static $() {
        return ["PiReadToolResult|1 success #0 result|2 error #1 result", _s, ys];
      }
    }
    class _s extends ps {
      constructor(t3) {
        super(), this.output = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _s().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _s().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _s().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_s, t3, e3);
      }
      static $() {
        return ["PiReadToolSuccess|1 output 9|2 truncation #0?", fs.d];
      }
    }
    class ys extends ps {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ys().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ys().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ys().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ys, t3, e3);
      }
      static $() {
        return ["PiReadToolError|1 error 9"];
      }
    }
    class ws extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Ss extends ws {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ss().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ss().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ss().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ss, t3, e3);
      }
      static $() {
        return ["PiBashToolCall|1 args #0|2 result #1", Js, Bs];
      }
    }
    class Js extends ws {
      constructor(t3) {
        super(), this.command = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Js().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Js().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Js().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Js, t3, e3);
      }
      static $() {
        return ["PiBashToolArgs|1 command 9|2 timeout 1?"];
      }
    }
    class Bs extends ws {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bs, t3, e3);
      }
      static $() {
        return ["PiBashToolResult|1 success #0 result|2 error #1 result", Es, Is];
      }
    }
    class Es extends ws {
      constructor(t3) {
        super(), this.output = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Es().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Es().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Es().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Es, t3, e3);
      }
      static $() {
        return ["PiBashToolSuccess|1 output 9|2 truncation #0?|3 full_output_path 9?", fs.d];
      }
    }
    class Is extends ws {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Is().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Is().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Is().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Is, t3, e3);
      }
      static $() {
        return ["PiBashToolError|1 error 9|2 truncation #0?|3 full_output_path 9?", fs.d];
      }
    }
    var Cs = r2(2628);
    class bs extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class ks extends bs {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ks().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ks().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ks().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ks, t3, e3);
      }
      static $() {
        return ["PiWriteToolCall|1 args #0|2 result #1", vs, qs];
      }
    }
    class vs extends bs {
      constructor(t3) {
        super(), this.path = "", this.content = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vs, t3, e3);
      }
      static $() {
        return ["PiWriteToolArgs|1 path 9|2 content 9"];
      }
    }
    class qs extends bs {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qs, t3, e3);
      }
      static $() {
        return ["PiWriteToolResult|1 success #0 result|2 error #1 result|3 rejected #2 result", Rs, Ps, Ts];
      }
    }
    class Rs extends bs {
      constructor(t3) {
        super(), this.output = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Rs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Rs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Rs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Rs, t3, e3);
      }
      static $() {
        return ["PiWriteToolSuccess|1 output 9"];
      }
    }
    class Ps extends bs {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ps().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ps().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ps().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ps, t3, e3);
      }
      static $() {
        return ["PiWriteToolError|1 error 9"];
      }
    }
    class Ts extends bs {
      constructor(t3) {
        super(), this.reason = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ts().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ts().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ts().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ts, t3, e3);
      }
      static $() {
        return ["PiWriteToolRejected|1 reason 9"];
      }
    }
    class xs extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Ns extends xs {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ns().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ns().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ns().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ns, t3, e3);
      }
      static $() {
        return ["PiGrepToolCall|1 args #0|2 result #1", Ds, Us];
      }
    }
    class Ds extends xs {
      constructor(t3) {
        super(), this.pattern = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ds().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ds().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ds().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ds, t3, e3);
      }
      static $() {
        return ["PiGrepToolArgs|1 pattern 9|2 path 9?|3 glob 9?|4 ignore_case 8?|5 literal 8?|6 context 5?|7 limit 5?"];
      }
    }
    class Us extends xs {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Us().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Us().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Us().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Us, t3, e3);
      }
      static $() {
        return ["PiGrepToolResult|1 success #0 result|2 error #1 result", Qs, Ms];
      }
    }
    class Qs extends xs {
      constructor(t3) {
        super(), this.output = "", this.linesTruncated = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qs, t3, e3);
      }
      static $() {
        return ["PiGrepToolSuccess|1 output 9|2 truncation #0?|3 match_limit_reached 13?|4 lines_truncated 8", fs.d];
      }
    }
    class Ms extends xs {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ms().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ms().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ms().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ms, t3, e3);
      }
      static $() {
        return ["PiGrepToolError|1 error 9"];
      }
    }
    class Os extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Fs extends Os {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fs, t3, e3);
      }
      static $() {
        return ["PiFindToolCall|1 args #0|2 result #1", Ls, $s];
      }
    }
    class Ls extends Os {
      constructor(t3) {
        super(), this.pattern = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ls().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ls().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ls().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ls, t3, e3);
      }
      static $() {
        return ["PiFindToolArgs|1 pattern 9|2 path 9?|3 limit 5?"];
      }
    }
    class $s extends Os {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $s().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $s().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $s().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($s, t3, e3);
      }
      static $() {
        return ["PiFindToolResult|1 success #0 result|2 error #1 result", Gs, Hs];
      }
    }
    class Gs extends Os {
      constructor(t3) {
        super(), this.output = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Gs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Gs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Gs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Gs, t3, e3);
      }
      static $() {
        return ["PiFindToolSuccess|1 output 9|2 truncation #0?|3 result_limit_reached 13?", fs.d];
      }
    }
    class Hs extends Os {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Hs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Hs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Hs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Hs, t3, e3);
      }
      static $() {
        return ["PiFindToolError|1 error 9"];
      }
    }
    class Ks extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Vs extends Ks {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Vs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Vs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Vs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Vs, t3, e3);
      }
      static $() {
        return ["PiLsToolCall|1 args #0|2 result #1", zs, Ws];
      }
    }
    class zs extends Ks {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new zs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new zs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new zs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(zs, t3, e3);
      }
      static $() {
        return ["PiLsToolArgs|1 path 9?|2 limit 5?"];
      }
    }
    class Ws extends Ks {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ws().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ws().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ws().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ws, t3, e3);
      }
      static $() {
        return ["PiLsToolResult|1 success #0 result|2 error #1 result", Ys, js];
      }
    }
    class Ys extends Ks {
      constructor(t3) {
        super(), this.output = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ys().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ys().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ys().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ys, t3, e3);
      }
      static $() {
        return ["PiLsToolSuccess|1 output 9|2 truncation #0?|3 entry_limit_reached 13?", fs.d];
      }
    }
    class js extends Ks {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new js().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new js().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new js().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(js, t3, e3);
      }
      static $() {
        return ["PiLsToolError|1 error 9"];
      }
    }
    class Xs extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class Zs extends Xs {
      constructor(t3) {
        super(), this.toolCallId = "", this.target = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Zs().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Zs().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Zs().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Zs, t3, e3);
      }
      static $() {
        return ["ConnectScmArgs|1 tool_call_id 9|2 github #0 target", ti];
      }
    }
    class ti extends Xs {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ti().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ti().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ti().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ti, t3, e3);
      }
      static $() {
        return ["ConnectScmGithub|1 repository #0|2 ghe_application 9?", ei];
      }
    }
    class ei extends Xs {
      constructor(t3) {
        super(), this.owner = "", this.repo = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ei().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ei().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ei().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ei, t3, e3);
      }
      static $() {
        return ["ConnectScmGithubRepository|1 owner 9|2 repo 9"];
      }
    }
    class ri extends Xs {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ri().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ri().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ri().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ri, t3, e3);
      }
      static $() {
        return ["ConnectScmResult|1 success #0 result|2 error #1 result|3 rejected #2 result", ni, si, ii];
      }
    }
    class ni extends Xs {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ni().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ni().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ni().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ni, t3, e3);
      }
      static $() {
        return ["ConnectScmSuccess"];
      }
    }
    class si extends Xs {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new si().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new si().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new si().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(si, t3, e3);
      }
      static $() {
        return ["ConnectScmError|1 error 9"];
      }
    }
    class ii extends Xs {
      constructor(t3) {
        super(), this.reason = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ii().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ii().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ii().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ii, t3, e3);
      }
      static $() {
        return ["ConnectScmRejected|1 reason 9"];
      }
    }
    class oi extends Xs {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new oi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new oi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new oi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(oi, t3, e3);
      }
      static $() {
        return ["ConnectScmToolCall|1 args #0|2 result #1", Zs, ri];
      }
    }
    class ai extends Xs {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ai().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ai().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ai().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ai, t3, e3);
      }
      static $() {
        return ["ConnectScmRequestQuery|1 args #0", Zs];
      }
    }
    class ui extends Xs {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ui().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ui().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ui().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ui, t3, e3);
      }
      static $() {
        return ["ConnectScmRequestResponse|1 approved #0 result|2 rejected #1 result|3 failed #2 result", ci, li, mi];
      }
    }
    class ci extends Xs {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ci().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ci().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ci().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ci, t3, e3);
      }
      static $() {
        return ["ConnectScmRequestResponse.Approved"];
      }
    }
    class li extends Xs {
      constructor(t3) {
        super(), this.reason = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new li().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new li().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new li().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(li, t3, e3);
      }
      static $() {
        return ["ConnectScmRequestResponse.Rejected|1 reason 9"];
      }
    }
    class mi extends Xs {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new mi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new mi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new mi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(mi, t3, e3);
      }
      static $() {
        return ["ConnectScmRequestResponse.Failed|1 error 9"];
      }
    }
    var di = r2(3081);
    class fi extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class pi extends fi {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pi, t3, e3);
      }
      static $() {
        return ["SearchConversationsToolCall|1 args #0|2 result #1", di.$m, di.pT];
      }
    }
    const hi = "agent.v1.";
    class gi extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return hi;
      }
    }
    var Ai = (0, o2.QT)(n2.proto3, hi, "GoalStatus", [[0, "UNSPECIFIED"], [1, "ACTIVE"], [2, "PAUSED"], [3, "COMPLETE"], [4, "CLEARED"]], 1);
    class _i extends gi {
      constructor(t3) {
        super(), this.objective = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _i().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _i().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _i().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_i, t3, e3);
      }
      static $() {
        return ["CreateGoalArgs|1 objective 9"];
      }
    }
    class yi extends gi {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yi, t3, e3);
      }
      static $() {
        return ["CreateGoalSuccess"];
      }
    }
    class wi extends gi {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wi, t3, e3);
      }
      static $() {
        return ["GoalError|1 error 9"];
      }
    }
    class Si extends gi {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Si().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Si().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Si().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Si, t3, e3);
      }
      static $() {
        return ["CreateGoalResult|1 success #0 result|2 error #1 result", yi, wi];
      }
    }
    class Ji extends gi {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ji().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ji().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ji().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ji, t3, e3);
      }
      static $() {
        return ["CreateGoalToolCall|1 args #0|2 result #1", _i, Si];
      }
    }
    class Bi extends gi {
      constructor(t3) {
        super(), this.status = Ai.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bi, t3, e3);
      }
      static $() {
        return ["UpdateGoalArgs|1 status #0", Ai];
      }
    }
    class Ei extends gi {
      constructor(t3) {
        super(), this.status = Ai.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ei().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ei().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ei().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ei, t3, e3);
      }
      static $() {
        return ["UpdateGoalSuccess|1 status #0", Ai];
      }
    }
    class Ii extends gi {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ii().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ii().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ii().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ii, t3, e3);
      }
      static $() {
        return ["UpdateGoalResult|1 success #0 result|2 error #1 result", Ei, wi];
      }
    }
    class Ci extends gi {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ci().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ci().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ci().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ci, t3, e3);
      }
      static $() {
        return ["UpdateGoalToolCall|1 args #0|2 result #1", Bi, Ii];
      }
    }
    const bi = "agent.v1.";
    class ki extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return bi;
      }
    }
    var vi = (0, o2.QT)(n2.proto3, bi, "CreateAgentPlacementApprovalState", [[0, "UNSPECIFIED"], [1, "REQUIRED"], [2, "DENIED"]], 1);
    class qi extends ki {
      constructor(t3) {
        super(), this.toolCallId = "", this.agentIds = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qi, t3, e3);
      }
      static $() {
        return ["GetAgentStatusArgs|1 tool_call_id 9|2 agent_ids 9*"];
      }
    }
    class Ri extends ki {
      constructor(t3) {
        super(), this.bcId = "", this.name = "", this.lifecycle = "", this.turnInFlight = false, this.lastTerminalTurnStatus = "", this.prUrl = "", this.lastActivityAtMs = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ri().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ri().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ri().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ri, t3, e3);
      }
      static $() {
        return ["GetAgentStatusWorker|1 bc_id 9|2 name 9|3 lifecycle 9|4 turn_in_flight 8|5 last_terminal_turn_status 9|6 pr_url 9|7 last_activity_at_ms 4"];
      }
    }
    class Pi extends ki {
      constructor(t3) {
        super(), this.workers = [], this.message = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pi, t3, e3);
      }
      static $() {
        return ["GetAgentStatusSuccess|1 workers #0*|2 message 9", Ri];
      }
    }
    class Ti extends ki {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ti().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ti().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ti().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ti, t3, e3);
      }
      static $() {
        return ["GetAgentStatusError|1 error 9"];
      }
    }
    class xi extends ki {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xi, t3, e3);
      }
      static $() {
        return ["GetAgentStatusResult|1 success #0 result|2 error #1 result", Pi, Ti];
      }
    }
    class Ni extends ki {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ni().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ni().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ni().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ni, t3, e3);
      }
      static $() {
        return ["GetAgentStatusToolCall|1 args #0|2 result #1", qi, xi];
      }
    }
    class Di extends ki {
      constructor(t3) {
        super(), this.toolCallId = "", this.agentId = "", this.message = "", this.delivery = "", this.title = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Di().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Di().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Di().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Di, t3, e3);
      }
      static $() {
        return ["SendToAgentArgs|1 tool_call_id 9|2 agent_id 9|3 message 9|4 delivery 9|5 title 9|6 model 9?"];
      }
    }
    class Ui extends ki {
      constructor(t3) {
        super(), this.workerBcId = "", this.deliveredAs = "", this.message = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ui().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ui().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ui().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ui, t3, e3);
      }
      static $() {
        return ["SendToAgentSuccess|1 worker_bc_id 9|2 delivered_as 9|3 message 9"];
      }
    }
    class Qi extends ki {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qi, t3, e3);
      }
      static $() {
        return ["SendToAgentError|1 error 9"];
      }
    }
    class Mi extends ki {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Mi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Mi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Mi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Mi, t3, e3);
      }
      static $() {
        return ["SendToAgentResult|1 success #0 result|2 error #1 result", Ui, Qi];
      }
    }
    class Oi extends ki {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Oi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Oi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Oi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Oi, t3, e3);
      }
      static $() {
        return ["SendToAgentToolCall|1 args #0|2 result #1", Di, Mi];
      }
    }
    class Fi extends ki {
      constructor(t3) {
        super(), this.toolCallId = "", this.agentId = "", this.mode = "", this.maxTurns = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fi, t3, e3);
      }
      static $() {
        return ["ReadAgentTranscriptArgs|1 tool_call_id 9|2 agent_id 9|3 mode 9|4 max_turns 13"];
      }
    }
    class Li extends ki {
      constructor(t3) {
        super(), this.transcript = "", this.truncated = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Li().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Li().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Li().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Li, t3, e3);
      }
      static $() {
        return ["ReadAgentTranscriptSuccess|1 transcript 9|2 truncated 8"];
      }
    }
    class $i extends ki {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $i().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $i().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $i().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($i, t3, e3);
      }
      static $() {
        return ["ReadAgentTranscriptError|1 error 9"];
      }
    }
    class Gi extends ki {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Gi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Gi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Gi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Gi, t3, e3);
      }
      static $() {
        return ["ReadAgentTranscriptResult|1 success #0 result|2 error #1 result", Li, $i];
      }
    }
    class Hi extends ki {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Hi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Hi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Hi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Hi, t3, e3);
      }
      static $() {
        return ["ReadAgentTranscriptToolCall|1 args #0|2 result #1", Fi, Gi];
      }
    }
    class Ki extends ki {
      constructor(t3) {
        super(), this.toolCallId = "", this.prompt = "", this.labels = {}, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ki().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ki().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ki().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ki, t3, e3);
      }
      static $() {
        return ["CreateAgentArgs|1 tool_call_id 9|2 prompt 9|3 name 9?|4 model 9?|5 base_branch 9?|6 machine_type 9?|7 worker_id 9?|8 pool 9?|9 labels 9,9|10 environment_build_id 9?|11 environment_id 9?"];
      }
    }
    class Vi extends ki {
      constructor(t3) {
        super(), this.agentId = "", this.message = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Vi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Vi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Vi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Vi, t3, e3);
      }
      static $() {
        return ["CreateAgentSuccess|1 agent_id 9|2 message 9"];
      }
    }
    class zi extends ki {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new zi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new zi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new zi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(zi, t3, e3);
      }
      static $() {
        return ["CreateAgentError|1 error 9|2 placement_approval_state #0?", vi];
      }
    }
    class Wi extends ki {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Wi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Wi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Wi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Wi, t3, e3);
      }
      static $() {
        return ["CreateAgentResult|1 success #0 result|2 error #1 result", Vi, zi];
      }
    }
    class Yi extends ki {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Yi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Yi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Yi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Yi, t3, e3);
      }
      static $() {
        return ["CreateAgentToolCall|1 args #0|2 result #1", Ki, Wi];
      }
    }
    class ji extends ki {
      constructor(t3) {
        super(), this.toolCallId = "", this.agentId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ji().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ji().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ji().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ji, t3, e3);
      }
      static $() {
        return ["StopAgentArgs|1 tool_call_id 9|2 agent_id 9"];
      }
    }
    class Xi extends ki {
      constructor(t3) {
        super(), this.workerBcId = "", this.message = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xi, t3, e3);
      }
      static $() {
        return ["StopAgentSuccess|1 worker_bc_id 9|2 message 9"];
      }
    }
    class Zi extends ki {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Zi().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Zi().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Zi().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Zi, t3, e3);
      }
      static $() {
        return ["StopAgentError|1 error 9"];
      }
    }
    class to extends ki {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new to().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new to().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new to().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(to, t3, e3);
      }
      static $() {
        return ["StopAgentResult|1 success #0 result|2 error #1 result", Xi, Zi];
      }
    }
    class eo extends ki {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new eo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new eo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new eo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(eo, t3, e3);
      }
      static $() {
        return ["StopAgentToolCall|1 args #0|2 result #1", ji, to];
      }
    }
    const ro = "agent.v1.";
    class no extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return ro;
      }
    }
    var so = (0, o2.QT)(n2.proto3, ro, "WriteCanvasFailReason", [[0, "UNSPECIFIED"], [1, "TYPECHECK_FAILED"], [2, "COMPILE_FAILED"], [3, "TOO_LARGE"], [4, "UNAVAILABLE"], [5, "NOT_FOUND"], [6, "REFUSED"]], 1), io = (0, o2.QT)(n2.proto3, ro, "ReadCanvasFailReason", [[0, "UNSPECIFIED"], [1, "NOT_FOUND"], [2, "UNAVAILABLE"], [3, "REFUSED"], [4, "INVALID_REFERENCE"]], 1);
    class oo extends no {
      constructor(t3) {
        super(), this.line = 0, this.character = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new oo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new oo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new oo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(oo, t3, e3);
      }
      static $() {
        return ["CloudCanvasToolDiagnosticPosition|1 line 5|2 character 5"];
      }
    }
    class ao extends no {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ao().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ao().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ao().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ao, t3, e3);
      }
      static $() {
        return ["CloudCanvasToolDiagnosticRange|1 start #0|2 end #0", oo];
      }
    }
    class uo extends no {
      constructor(t3) {
        super(), this.message = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new uo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new uo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new uo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(uo, t3, e3);
      }
      static $() {
        return ["CloudCanvasToolDiagnostic|1 message 9|2 code 9?|3 severity 5?|4 range #0?", ao];
      }
    }
    class co extends no {
      constructor(t3) {
        super(), this.contents = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new co().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new co().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new co().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(co, t3, e3);
      }
      static $() {
        return ["WriteCanvasArgs|1 contents 9|2 canvas_id 9?|3 title 9?"];
      }
    }
    class lo extends no {
      constructor(t3) {
        super(), this.canvasId = "", this.url = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new lo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new lo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new lo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(lo, t3, e3);
      }
      static $() {
        return ["WriteCanvasSuccess|1 canvas_id 9|2 title 9?|3 url 9"];
      }
    }
    class mo extends no {
      constructor(t3) {
        super(), this.reason = so.UNSPECIFIED, this.diagnostics = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new mo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new mo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new mo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(mo, t3, e3);
      }
      static $() {
        return ["WriteCanvasFailure|1 reason #0|2 diagnostics #1*|3 detail 9?", so, uo];
      }
    }
    class fo extends no {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fo, t3, e3);
      }
      static $() {
        return ["WriteCanvasResult|1 success #0 result|2 failure #1 result", lo, mo];
      }
    }
    class po extends no {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new po().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new po().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new po().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(po, t3, e3);
      }
      static $() {
        return ["WriteCanvasToolCall|1 args #0|2 result #1", co, fo];
      }
    }
    class ho extends no {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ho().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ho().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ho().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ho, t3, e3);
      }
      static $() {
        return ["ReadCanvasArgs|1 canvas_id 9?|2 url 9?"];
      }
    }
    class go extends no {
      constructor(t3) {
        super(), this.canvasId = "", this.url = "", this.source = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new go().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new go().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new go().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(go, t3, e3);
      }
      static $() {
        return ["ReadCanvasSuccess|1 canvas_id 9|2 title 9?|3 url 9|4 source 9"];
      }
    }
    class Ao extends no {
      constructor(t3) {
        super(), this.reason = io.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ao().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ao().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ao().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ao, t3, e3);
      }
      static $() {
        return ["ReadCanvasFailure|1 reason #0|2 detail 9?", io];
      }
    }
    class _o extends no {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _o().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _o().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _o().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_o, t3, e3);
      }
      static $() {
        return ["ReadCanvasResult|1 success #0 result|2 failure #1 result", go, Ao];
      }
    }
    class yo extends no {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yo, t3, e3);
      }
      static $() {
        return ["ReadCanvasToolCall|1 args #0|2 result #1", ho, _o];
      }
    }
    class wo extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class So extends wo {
      constructor(t3) {
        super(), this.prompt = "", this.referenceImagePaths = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new So().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new So().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new So().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(So, t3, e3);
      }
      static $() {
        return ["GenerateVideoArgs|1 prompt 9|2 file_path 9?|3 image_path 9?|4 reference_image_paths 9*|5 duration_seconds 13?|6 aspect_ratio 9?|7 resolution 9?"];
      }
    }
    class Jo extends wo {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Jo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Jo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Jo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Jo, t3, e3);
      }
      static $() {
        return ["GenerateVideoResult|1 success #0 result|2 error #1 result", Bo, Eo];
      }
    }
    class Bo extends wo {
      constructor(t3) {
        super(), this.filePath = "", this.durationSeconds = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bo, t3, e3);
      }
      static $() {
        return ["GenerateVideoSuccess|1 file_path 9|2 duration_seconds 13"];
      }
    }
    class Eo extends wo {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Eo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Eo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Eo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Eo, t3, e3);
      }
      static $() {
        return ["GenerateVideoError|1 error 9"];
      }
    }
    class Io extends wo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Io().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Io().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Io().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Io, t3, e3);
      }
      static $() {
        return ["GenerateVideoToolCall|1 args #0|2 result #1", So, Jo];
      }
    }
    class Co extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return "agent.v1.";
      }
    }
    class bo extends Co {
      constructor(t3) {
        super(), this.query = "", this.allowedXHandles = [], this.excludedXHandles = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new bo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new bo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new bo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(bo, t3, e3);
      }
      static $() {
        return ["XSearchArgs|1 query 9|2 from_date 9?|3 to_date 9?|4 allowed_x_handles 9*|5 excluded_x_handles 9*"];
      }
    }
    class ko extends Co {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ko().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ko().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ko().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ko, t3, e3);
      }
      static $() {
        return ["XSearchResult|1 success #0 result|2 error #1 result|3 rejected #2 result", vo, Ro, Po];
      }
    }
    class vo extends Co {
      constructor(t3) {
        super(), this.answer = "", this.citations = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vo, t3, e3);
      }
      static $() {
        return ["XSearchSuccess|1 answer 9|2 citations #0*", qo];
      }
    }
    class qo extends Co {
      constructor(t3) {
        super(), this.url = "", this.title = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qo, t3, e3);
      }
      static $() {
        return ["XSearchCitation|1 url 9|2 title 9"];
      }
    }
    class Ro extends Co {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ro().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ro().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ro().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ro, t3, e3);
      }
      static $() {
        return ["XSearchError|1 error 9"];
      }
    }
    class Po extends Co {
      constructor(t3) {
        super(), this.reason = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Po().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Po().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Po().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Po, t3, e3);
      }
      static $() {
        return ["XSearchRejected|1 reason 9"];
      }
    }
    class To extends Co {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new To().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new To().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new To().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(To, t3, e3);
      }
      static $() {
        return ["XSearchToolCall|1 args #0|2 result #1", bo, ko];
      }
    }
    var xo = r2(1180), No = r2(9639), Do = r2(9582), Uo = r2(6209), Qo = r2(4175), Mo = r2(8427);
    const Oo = "agent.v1.";
    class Fo extends o2.HL {
      static get runtime() {
        return (0, o2.kU)(this, "runtime", n2.proto3);
      }
      static $p() {
        return Oo;
      }
    }
    var Lo = (0, o2.QT)(n2.proto3, Oo, "AgentMode", [[0, "UNSPECIFIED"], [1, "AGENT"], [2, "ASK"], [3, "PLAN"], [4, "DEBUG"], [5, "TRIAGE"], [7, "MULTITASK"], [8, "CUSTOM"]], 1), $o = (0, o2.QT)(n2.proto3, Oo, "BackgroundTaskKind", [[0, "UNSPECIFIED"], [1, "SHELL"], [2, "SUBAGENT"]], 1), Go = (0, o2.QT)(n2.proto3, Oo, "BackgroundTaskStatus", [[0, "UNSPECIFIED"], [1, "SUCCESS"], [2, "ERROR"], [3, "ABORTED"]], 1), Ho = (0, o2.QT)(n2.proto3, Oo, "BackgroundTaskNotificationContext", [[0, "UNSPECIFIED"], [1, "USER_DRIVEN_INTERACTIVE_CHILD"]], 1), Ko = (0, o2.QT)(n2.proto3, Oo, "SubagentRunStatus", [[0, "UNSPECIFIED"], [1, "RUNNING"], [2, "BACKGROUNDED"], [3, "SUCCESS"], [4, "ERROR"], [5, "ABORTED"]], 1), Vo = (n2.proto3, (0, o2.QT)(n2.proto3, Oo, "CustomModeSource", [[0, "UNSPECIFIED"], [1, "AGENT_SKILL"], [2, "PLUGIN_SKILL"], [3, "REPO_SKILL"], [4, "MANAGED_SKILL"]], 1)), zo = (0, o2.QT)(n2.proto3, Oo, "SimulatedMsgReason", [[0, "UNSPECIFIED"], [1, "PLAN_EXECUTION"], [2, "COMMIT_REMINDER"], [3, "BACKGROUND_TASK_COMPLETION"], [4, "DIFF_TAB_COMMIT"], [5, "DIFF_TAB_COMMIT_AND_PUSH"], [6, "DIFF_TAB_PUSH"], [7, "DIFF_TAB_CREATE_PR"], [8, "DIFF_TAB_FIX_MERGE_CONFLICTS"], [9, "USER_SENT_TO_SUBAGENT"], [10, "USER_INTERRUPTED_SUBAGENT"], [11, "USER_QUEUED_TO_SUBAGENT"], [12, "BABYSIT_PR_IN_CLOUD"], [13, "CI_PANEL_INVESTIGATE_FAILURE"], [14, "MULTITASK"], [15, "BUILD_IN_PARALLEL"], [16, "MULTITASK_SPLIT_PRS"], [17, "APPLY_LOCALLY"], [18, "CHECKOUT_BRANCH"], [19, "DIFF_TAB_UPDATE_BRANCH"], [20, "PR_TAB_BUGBOT_FIX"], [22, "RUN_BUGBOT_REVIEW"], [23, "RUN_SECURITY_REVIEW"], [24, "FSD_APPLY_FINDING"], [25, "FSD_UNDO_FINDING"], [26, "FSD_START"], [27, "FSD_PR_INTERRUPT"], [28, "SUBSCRIPTION"], [29, "DIFF_TAB_CREATE_BRANCH"], [30, "AGENT_STORE_CONFLICT"], [31, "GOAL_CONTINUATION"], [32, "PROJECT_KICKOFF"], [33, "MARKDOWN_PROMPT_BUTTON"], [34, "USER_QUICK_ACTION"], [35, "INTERACTION_RESPONSE"]], 1), Wo = (0, o2.QT)(n2.proto3, Oo, "SubscriptionSource", [[0, "UNSPECIFIED"], [1, "SLACK"], [2, "GITHUB"], [3, "LINEAR"], [4, "ORIGIN"], [5, "FACTORY"]], 1), Yo = (0, o2.QT)(n2.proto3, Oo, "ThinkingStyle", [[0, "UNSPECIFIED"], [1, "DEFAULT"], [2, "CODEX"], [3, "GPT5"]], 1), jo = (0, o2.QT)(n2.proto3, Oo, "ResponseComparisonDisplayOrder", [[0, "UNSPECIFIED"], [1, "PARENT_FIRST"], [2, "ALTERNATE_FIRST"]], 1), Xo = (0, o2.QT)(n2.proto3, Oo, "ResponseComparisonSkipReason", [[0, "UNSPECIFIED"], [1, "ALTERNATE_TOOL_CALL"], [2, "INFERENCE_ERROR"], [3, "TIMEOUT"], [4, "CANCELLED"]], 1);
    class Zo extends Fo {
      constructor(t3) {
        super(), this.description = "", this.prompt = "", this.attachments = [], this.mode = s2.FL.UNSPECIFIED, this.respondingToMessageIds = [], this.environment = s2.dU.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Zo().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Zo().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Zo().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Zo, t3, e3);
      }
      static $() {
        return ["TaskArgs|1 description 9|2 prompt 9|3 subagent_type #0|4 model 9?|5 resume 9?|6 agent_id 9?|7 attachments 9*|8 mode #1|9 responding_to_message_ids 9*|10 environment #2|11 machine #3?", s2._L, s2.FL, s2.dU, ta];
      }
    }
    class ta extends Fo {
      constructor(t3) {
        super(), this.machine = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ta().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ta().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ta().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ta, t3, e3);
      }
      static $() {
        return ["TargetMachine|1 same_machine #0 machine|2 new_cloud_vm #1 machine|3 self_hosted_worker #2 machine|4 self_hosted_pool #3 machine", ea, ra, na, sa];
      }
    }
    class ea extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ea().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ea().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ea().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ea, t3, e3);
      }
      static $() {
        return ["SameMachineTarget"];
      }
    }
    class ra extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ra().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ra().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ra().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ra, t3, e3);
      }
      static $() {
        return ["NewCloudVmTarget|1 environment_build_id 9?|2 base_branch 9?"];
      }
    }
    class na extends Fo {
      constructor(t3) {
        super(), this.workerId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new na().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new na().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new na().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(na, t3, e3);
      }
      static $() {
        return ["SelfHostedWorkerTarget|1 worker_id 9"];
      }
    }
    class sa extends Fo {
      constructor(t3) {
        super(), this.labels = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new sa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new sa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new sa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(sa, t3, e3);
      }
      static $() {
        return ["SelfHostedPoolTarget|1 pool 9?|2 labels #0*", ia];
      }
    }
    class ia extends Fo {
      constructor(t3) {
        super(), this.key = "", this.value = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ia().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ia().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ia().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ia, t3, e3);
      }
      static $() {
        return ["SelfHostedWorkerLabel|1 key 9|2 value 9"];
      }
    }
    class oa extends Fo {
      constructor(t3) {
        super(), this.conversationSteps = [], this.isBackground = false, this.backgroundReason = s2.qL.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new oa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new oa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new oa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(oa, t3, e3);
      }
      static $() {
        return ["TaskSuccess|1 conversation_steps #0*|2 agent_id 9?|3 is_background 8|4 duration_ms 4?|5 result_suffix 9?|6 background_reason #1|7 transcript_path 9?", Ba, s2.qL];
      }
    }
    class aa extends Fo {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new aa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new aa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new aa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(aa, t3, e3);
      }
      static $() {
        return ["TaskError|1 error 9"];
      }
    }
    class ua extends Fo {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ua().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ua().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ua().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ua, t3, e3);
      }
      static $() {
        return ["TaskResult|1 success #0 result|2 error #1 result", oa, aa];
      }
    }
    class ca extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ca().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ca().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ca().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ca, t3, e3);
      }
      static $() {
        return ["TaskToolCall|1 args #0|2 result #1|3 cloud_agent_bc_id 9?", Zo, ua];
      }
    }
    class la extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new la().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new la().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new la().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(la, t3, e3);
      }
      static $() {
        return ["TaskToolCallDelta|1 interaction_update #0", Rc];
      }
    }
    class ma extends Fo {
      constructor(t3) {
        super(), this.path = "", this.branchName = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ma().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ma().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ma().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ma, t3, e3);
      }
      static $() {
        return ["SetActiveBranchArgs|1 path 9|2 branch_name 9"];
      }
    }
    class da extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new da().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new da().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new da().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(da, t3, e3);
      }
      static $() {
        return ["SetActiveBranchSuccess"];
      }
    }
    class fa extends Fo {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fa, t3, e3);
      }
      static $() {
        return ["SetActiveBranchError|1 error 9"];
      }
    }
    class pa extends Fo {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pa, t3, e3);
      }
      static $() {
        return ["SetActiveBranchResult|1 success #0 result|2 error #1 result", da, fa];
      }
    }
    class ha extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ha().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ha().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ha().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ha, t3, e3);
      }
      static $() {
        return ["SetActiveBranchToolCall|1 args #0|2 result #1", ma, pa];
      }
    }
    class ga extends Fo {
      constructor(t3) {
        super(), this.tool = { case: void 0 }, this.hookAdditionalContexts = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ga().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ga().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ga().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ga, t3, e3);
      }
      static $() {
        return ["ToolCall|1 shell_tool_call #0 tool|3 delete_tool_call #1 tool|4 glob_tool_call #2 tool|5 grep_tool_call #3 tool|8 read_tool_call #4 tool|9 update_todos_tool_call #5 tool|10 read_todos_tool_call #6 tool|12 edit_tool_call #7 tool|13 ls_tool_call #8 tool|14 read_lints_tool_call #9 tool|15 mcp_tool_call #10 tool|16 sem_search_tool_call #11 tool|17 create_plan_tool_call #12 tool|18 web_search_tool_call #13 tool|19 task_tool_call #14 tool|20 list_mcp_resources_tool_call #15 tool|21 read_mcp_resource_tool_call #16 tool|22 apply_agent_diff_tool_call #17 tool|23 ask_question_tool_call #18 tool|24 fetch_tool_call #19 tool|25 switch_mode_tool_call #20 tool|28 generate_image_tool_call #21 tool|29 record_screen_tool_call #22 tool|30 computer_use_tool_call #23 tool|31 write_shell_stdin_tool_call #24 tool|32 reflect_tool_call #25 tool|33 setup_vm_environment_tool_call #26 tool|34 truncated_tool_call #27 tool|35 start_grind_execution_tool_call #28 tool|36 start_grind_planning_tool_call #29 tool|37 web_fetch_tool_call #30 tool|38 report_bugfix_results_tool_call #31 tool|39 ai_attribution_tool_call #32 tool|40 pr_management_tool_call #33 tool|41 mcp_auth_tool_call #34 tool|42 await_tool_call #35 tool|43 blame_by_file_path_tool_call #36 tool|44 get_mcp_tools_tool_call #37 tool|45 report_bug_tool_call #38 tool|46 set_active_branch_tool_call #39 tool|48 communicate_update_tool_call #40 tool|49 send_final_summary_tool_call #41 tool|51 replace_env_tool_call #42 tool|52 edit_pr_labels_tool_call #43 tool|53 record_ci_investigation_findings_tool_call #44 tool|55 send_message_tool_call #45 tool|56 fetch_cloud_agent_data_tool_call #46 tool|58 send_to_user_tool_call #47 tool|61 pi_read_tool_call #48 tool|62 pi_bash_tool_call #49 tool|63 pi_edit_tool_call #50 tool|64 pi_write_tool_call #51 tool|65 pi_grep_tool_call #52 tool|66 pi_find_tool_call #53 tool|67 pi_ls_tool_call #54 tool|68 connect_scm_tool_call #55 tool|69 search_conversations_tool_call #56 tool|70 create_goal_tool_call #57 tool|71 update_goal_tool_call #58 tool|73 get_agent_status_tool_call #59 tool|74 send_to_agent_tool_call #60 tool|75 read_agent_transcript_tool_call #61 tool|76 create_agent_tool_call #62 tool|77 stop_agent_tool_call #63 tool|79 write_canvas_tool_call #64 tool|80 read_canvas_tool_call #65 tool|81 generate_video_tool_call #66 tool|82 x_search_tool_call #67 tool|54 hook_additional_contexts #68*|57 tool_call_id 9?|59 started_at_ms 4?|60 completed_at_ms 4?", u, p, w, B, C, D, F, et, it, ct, St, Et, qt, Ht, ca, jt, Xt, Zt.JU, te.OU, ne, le, he.r9, _e, ye.t8, Je, ke, Te, Sa, Me, He, Xe, nr.U_, sr.ex, Er, Pr, Gr, Yr, rn, cn, ha, hn, Sn, Rn, Qn, Kn, ts, os, ds, hs, Ss, Cs.EN, ks, Ns, Fs, Vs, oi, pi, Ji, Ci, Ni, Oi, Hi, Yi, eo, po, yo, Io, To, xo.C];
      }
    }
    class Aa extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Aa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Aa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Aa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Aa, t3, e3);
      }
      static $() {
        return ["TruncatedToolCallArgs"];
      }
    }
    class _a extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _a().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _a().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _a().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_a, t3, e3);
      }
      static $() {
        return ["TruncatedToolCallSuccess"];
      }
    }
    class ya extends Fo {
      constructor(t3) {
        super(), this.error = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ya().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ya().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ya().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ya, t3, e3);
      }
      static $() {
        return ["TruncatedToolCallError|1 error 9"];
      }
    }
    class wa extends Fo {
      constructor(t3) {
        super(), this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wa, t3, e3);
      }
      static $() {
        return ["TruncatedToolCallResult|1 success #0 result|2 error #1 result", _a, ya];
      }
    }
    class Sa extends Fo {
      constructor(t3) {
        super(), this.originalStepBlobId = new Uint8Array(0), this.originalStepSizeBytes = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Sa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Sa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Sa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Sa, t3, e3);
      }
      static $() {
        return ["TruncatedToolCall|1 original_step_blob_id 12|2 args #0|3 result #1|4 original_step_size_bytes 13|5 preview #2", Aa, wa, ga];
      }
    }
    class Ja extends Fo {
      constructor(t3) {
        super(), this.delta = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ja().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ja().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ja().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ja, t3, e3);
      }
      static $() {
        return ["ToolCallDelta|1 shell_tool_call_delta #0 delta|2 task_tool_call_delta #1 delta|3 edit_tool_call_delta #2 delta|4 replace_env_tool_call_delta #3 delta", m, la, rt, Pn];
      }
    }
    class Ba extends Fo {
      constructor(t3) {
        super(), this.message = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ba().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ba().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ba().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ba, t3, e3);
      }
      static $() {
        return ["ConversationStep|1 assistant_message #0 message|2 tool_call #1 message|3 thinking_message #2 message", ku, ga, vu];
      }
    }
    class Ea extends Fo {
      constructor(t3) {
        super(), this.action = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ea().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ea().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ea().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ea, t3, e3);
      }
      static $() {
        return ["ConversationAction|1 user_message_action #0 action|2 resume_action #1 action|3 cancel_action #2 action|4 summarize_action #3 action|5 shell_command_action #4 action|6 start_plan_action #5 action|7 execute_plan_action #6 action|8 async_ask_question_completion_action #7 action|10 cancel_subagent_action #8 action|12 background_task_completion_action #9 action|13 background_shell_action #10 action|14 background_subagent_action #11 action|16 subscription_notification_action #12 action|18 goal_continuation_action #13 action|19 inject_context_action #14 action|11 triggering_auth_id 9?|15 triggering_user_info #15?|17 request_context_parts #16?", Va, mu, lu, fu, pu, hu, gu, du, va, Ca, qa, Ra, za, Wa, Ya, Ia, No.sG];
      }
    }
    class Ia extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ia().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ia().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ia().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ia, t3, e3);
      }
      static $() {
        return ["TriggeringUserInfo|1 auth_id 9?|2 user_id 5?"];
      }
    }
    class Ca extends Fo {
      constructor(t3) {
        super(), this.completions = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ca().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ca().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ca().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ca, t3, e3);
      }
      static $() {
        return ["BackgroundTaskCompletionAction|1 completions #0*|2 system_reminder 9?|3 request_context #1", ba, No.bb];
      }
    }
    class ba extends Fo {
      constructor(t3) {
        super(), this.taskId = "", this.kind = $o.UNSPECIFIED, this.status = Go.UNSPECIFIED, this.title = "", this.reason = s2.U6.UNSPECIFIED, this.notificationContext = Ho.UNSPECIFIED, this.recordOnly = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ba().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ba().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ba().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ba, t3, e3);
      }
      static $() {
        return ["BackgroundTaskCompletion|1 task_id 9|2 kind #0|3 status #1|4 title 9|5 detail 9?|6 output_path 9?|7 thread_id 9?|8 reason #2|9 subagent_id 9?|10 tool_call_id 9?|11 notification_context #3|12 completed_at_ms 4?|13 record_only 8", $o, Go, s2.U6, Ho];
      }
    }
    class ka extends Fo {
      constructor(t3) {
        super(), this.parentToolCallId = "", this.environment = s2.dU.UNSPECIFIED, this.status = Ko.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ka().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ka().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ka().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ka, t3, e3);
      }
      static $() {
        return ["SubagentRunState|1 parent_tool_call_id 9|2 subagent_id 9?|3 environment #0|4 status #1|5 title 9?|6 detail 9?|7 transcript_path 9?|8 output_path 9?|9 completed_timestamp_ms 4?|10 completion_reason #2?", s2.dU, Ko, s2.U6];
      }
    }
    class va extends Fo {
      constructor(t3) {
        super(), this.subagentId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new va().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new va().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new va().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(va, t3, e3);
      }
      static $() {
        return ["CancelSubagentAction|1 subagent_id 9"];
      }
    }
    class qa extends Fo {
      constructor(t3) {
        super(), this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qa, t3, e3);
      }
      static $() {
        return ["BackgroundShellAction|1 tool_call_id 9"];
      }
    }
    class Ra extends Fo {
      constructor(t3) {
        super(), this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ra().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ra().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ra().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ra, t3, e3);
      }
      static $() {
        return ["BackgroundSubagentAction|1 tool_call_id 9"];
      }
    }
    class Pa extends Fo {
      constructor(t3) {
        super(), this.toolCallId = "", this.resolution = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pa, t3, e3);
      }
      static $() {
        return ["InterruptedPendingToolCallResolution|1 tool_call_id 9|2 shell_result #0 resolution|3 task_result #1 resolution", i2.W4, ua];
      }
    }
    class Ta extends Fo {
      constructor(t3) {
        super(), this.resolutions = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ta().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ta().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ta().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ta, t3, e3);
      }
      static $() {
        return ["InterruptedPendingToolCallResolutions|1 resolutions #0*", Pa];
      }
    }
    class xa extends Fo {
      constructor(t3) {
        super(), this.messages = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xa, t3, e3);
      }
      static $() {
        return ["ConversationHistory|1 messages #0*|2 replace_user_info 8?", Na];
      }
    }
    class Na extends Fo {
      constructor(t3) {
        super(), this.message = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Na().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Na().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Na().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Na, t3, e3);
      }
      static $() {
        return ["ConversationHistoryMessage|1 user #0 message|2 assistant #1 message|3 tool #2 message", Da, Oa, Ha];
      }
    }
    class Da extends Fo {
      constructor(t3) {
        super(), this.content = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Da().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Da().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Da().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Da, t3, e3);
      }
      static $() {
        return ["ConversationHistoryUserMessage|1 content #0*", Ua];
      }
    }
    class Ua extends Fo {
      constructor(t3) {
        super(), this.content = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ua().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ua().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ua().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ua, t3, e3);
      }
      static $() {
        return ["ConversationHistoryUserContent|1 text #0 content|2 image #1 content", Qa, Ma];
      }
    }
    class Qa extends Fo {
      constructor(t3) {
        super(), this.text = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qa, t3, e3);
      }
      static $() {
        return ["ConversationHistoryTextContent|1 text 9"];
      }
    }
    class Ma extends Fo {
      constructor(t3) {
        super(), this.data = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ma().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ma().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ma().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ma, t3, e3);
      }
      static $() {
        return ["ConversationHistoryImageContent|1 data 9|2 mime_type 9?"];
      }
    }
    class Oa extends Fo {
      constructor(t3) {
        super(), this.content = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Oa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Oa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Oa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Oa, t3, e3);
      }
      static $() {
        return ["ConversationHistoryAssistantMessage|1 content #0*", Fa];
      }
    }
    class Fa extends Fo {
      constructor(t3) {
        super(), this.content = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fa, t3, e3);
      }
      static $() {
        return ["ConversationHistoryAssistantContent|1 text #0 content|2 reasoning #1 content|3 redacted_reasoning #2 content|4 tool_call #3 content", Qa, La, $a, Ga];
      }
    }
    class La extends Fo {
      constructor(t3) {
        super(), this.text = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new La().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new La().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new La().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(La, t3, e3);
      }
      static $() {
        return ["ConversationHistoryReasoningContent|1 text 9|2 signature 9?"];
      }
    }
    class $a extends Fo {
      constructor(t3) {
        super(), this.data = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $a().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $a().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $a().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($a, t3, e3);
      }
      static $() {
        return ["ConversationHistoryRedactedReasoningContent|1 data 9"];
      }
    }
    class Ga extends Fo {
      constructor(t3) {
        super(), this.toolCallId = "", this.toolName = "", this.argsJson = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ga().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ga().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ga().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ga, t3, e3);
      }
      static $() {
        return ["ConversationHistoryToolCall|1 tool_call_id 9|2 tool_name 9|3 args_json 9"];
      }
    }
    class Ha extends Fo {
      constructor(t3) {
        super(), this.toolCallId = "", this.toolName = "", this.content = [], this.hookAdditionalContexts = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ha().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ha().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ha().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ha, t3, e3);
      }
      static $() {
        return ["ConversationHistoryToolMessage|1 tool_call_id 9|2 tool_name 9|3 content #0*|4 is_error 8?|5 hook_additional_contexts #1*", Ka, xo.C];
      }
    }
    class Ka extends Fo {
      constructor(t3) {
        super(), this.content = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ka().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ka().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ka().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ka, t3, e3);
      }
      static $() {
        return ["ConversationHistoryToolResultContent|1 text #0 content|2 image #1 content", Qa, Ma];
      }
    }
    class Va extends Fo {
      constructor(t3) {
        super(), this.prependUserMessages = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Va().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Va().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Va().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Va, t3, e3);
      }
      static $() {
        return ["UserMessageAction|1 user_message #0|2 request_context #1|3 send_to_interaction_listener 8?|4 prepend_user_messages #0*|6 interrupted_pending_tool_call_resolutions #2?|7 conversation_history #3?|8 trailing_conversation_history #3?", Eu, No.bb, Ta, xa];
      }
    }
    class za extends Fo {
      constructor(t3) {
        super(), this.notifications = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new za().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new za().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new za().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(za, t3, e3);
      }
      static $() {
        return ["SubscriptionNotificationAction|1 notifications #0*|2 request_context #1|3 send_to_interaction_listener 8?", Eu, No.bb];
      }
    }
    class Wa extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Wa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Wa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Wa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Wa, t3, e3);
      }
      static $() {
        return ["GoalContinuationAction"];
      }
    }
    class Ya extends Fo {
      constructor(t3) {
        super(), this.injectionId = "", this.expectedRunId = "", this.payload = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ya().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ya().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ya().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ya, t3, e3);
      }
      static $() {
        return ["InjectContextAction|1 injection_id 9|2 expected_run_id 9|3 user_context #0 payload|4 system_context #1 payload", ja, Xa];
      }
    }
    class ja extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ja().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ja().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ja().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ja, t3, e3);
      }
      static $() {
        return ["UserContextInjection|1 user_message #0|2 request_context #1", Eu, No.bb];
      }
    }
    class Xa extends Fo {
      constructor(t3) {
        super(), this.producer = "", this.content = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xa().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xa().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xa().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xa, t3, e3);
      }
      static $() {
        return ["SystemContextInjection|1 producer 9|2 content 9"];
      }
    }
    class Za extends Fo {
      constructor(t3) {
        super(), this.state = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Za().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Za().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Za().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Za, t3, e3);
      }
      static $() {
        return ["ContextInjectionState|1 queued #0 state|2 delivered #1 state|3 queued_for_next_turn #2 state|4 cancelled #3 state|5 rejected #4 state", tu, eu, ru, nu, su];
      }
    }
    class tu extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new tu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new tu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new tu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(tu, t3, e3);
      }
      static $() {
        return ["ContextInjectionQueued"];
      }
    }
    class eu extends Fo {
      constructor(t3) {
        super(), this.step = 0, this.deliveryBatchId = "", this.deliveredAtMs = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new eu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new eu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new eu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(eu, t3, e3);
      }
      static $() {
        return ["ContextInjectionDelivered|1 step 5|2 delivery_batch_id 9|3 delivered_at_ms 3"];
      }
    }
    class ru extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ru().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ru().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ru().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ru, t3, e3);
      }
      static $() {
        return ["ContextInjectionQueuedForNextTurn"];
      }
    }
    class nu extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new nu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new nu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new nu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(nu, t3, e3);
      }
      static $() {
        return ["ContextInjectionCancelled"];
      }
    }
    class su extends Fo {
      constructor(t3) {
        super(), this.reason = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new su().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new su().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new su().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(su, t3, e3);
      }
      static $() {
        return ["ContextInjectionRejected|1 reason 9"];
      }
    }
    class iu extends Fo {
      constructor(t3) {
        super(), this.id = "", this.label = "", this.source = Vo.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new iu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new iu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new iu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(iu, t3, e3);
      }
      static $() {
        return ["SubmittedCustomMode|1 id 9|2 label 9|5 source #0|6 source_path 9?|7 source_hash 9?|10 managed_skill_id 9?|11 plugin_id 9?|12 plugin_snapshot_token 9?", Vo];
      }
    }
    class ou extends Fo {
      constructor(t3) {
        super(), this.id = "", this.label = "", this.source = Vo.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ou().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ou().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ou().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ou, t3, e3);
      }
      static $() {
        return ["CustomModeDescriptor|1 id 9|2 label 9|3 description 9?|4 icon 9?|5 color 9?|6 source #0|7 source_path 9?|8 source_hash 9?|9 managed_skill_id 9?|10 plugin_id 9?|11 plugin_snapshot_token 9?", Vo];
      }
    }
    class au extends Fo {
      constructor(t3) {
        super(), this.id = "", this.label = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new au().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new au().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new au().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(au, t3, e3);
      }
      static $() {
        return ["SubmittedExitedCustomMode|1 id 9|2 label 9"];
      }
    }
    class uu extends Fo {
      constructor(t3) {
        super(), this.nextMode = Lo.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new uu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new uu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new uu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(uu, t3, e3);
      }
      static $() {
        return ["CustomModeExitIntent|1 next_mode #0|2 exited_mode #1", Lo, au];
      }
    }
    class cu extends Fo {
      constructor(t3) {
        super(), this.intent = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new cu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new cu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new cu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(cu, t3, e3);
      }
      static $() {
        return ["CustomModeIntent|1 enter #0 intent|2 exit #1 intent", iu, uu];
      }
    }
    class lu extends Fo {
      constructor(t3) {
        super(), this.reason = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new lu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new lu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new lu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(lu, t3, e3);
      }
      static $() {
        return ["CancelAction|1 reason 9|3 interrupted_pending_tool_call_resolutions #0?", Ta];
      }
    }
    class mu extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new mu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new mu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new mu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(mu, t3, e3);
      }
      static $() {
        return ["ResumeAction|2 request_context #0", No.bb];
      }
    }
    class du extends Fo {
      constructor(t3) {
        super(), this.originalToolCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new du().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new du().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new du().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(du, t3, e3);
      }
      static $() {
        return ["AsyncAskQuestionCompletionAction|1 original_tool_call_id 9|2 original_args #0|3 result #1|4 request_context #2", te.ju, te.tz, No.bb];
      }
    }
    class fu extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fu, t3, e3);
      }
      static $() {
        return ["SummarizeAction"];
      }
    }
    class pu extends Fo {
      constructor(t3) {
        super(), this.execId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pu, t3, e3);
      }
      static $() {
        return ["ShellCommandAction|1 shell_command #0|2 exec_id 9", qu];
      }
    }
    class hu extends Fo {
      constructor(t3) {
        super(), this.isSpec = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new hu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new hu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new hu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(hu, t3, e3);
      }
      static $() {
        return ["StartPlanAction|1 user_message #0|2 request_context #1|3 is_spec 8", Eu, No.bb];
      }
    }
    class gu extends Fo {
      constructor(t3) {
        super(), this.executionMode = Lo.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new gu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new gu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new gu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(gu, t3, e3);
      }
      static $() {
        return ["ExecutePlanAction|1 request_context #0|2 plan #1?|3 plan_file_uri 9?|4 plan_file_content 9?|5 execution_mode #2|6 kickoff_message_id 9?|7 plan_id 9?|8 plan_file_path 9?", No.bb, Ru, Lo];
      }
    }
    class Au extends Fo {
      constructor(t3) {
        super(), this.interactionId = "", this.skippedQuestionIds = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Au().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Au().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Au().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Au, t3, e3);
      }
      static $() {
        return ["InteractionResponseMetadata|1 interaction_id 9|2 response #0?|3 skipped_question_ids 9*", Dc];
      }
    }
    class _u extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _u().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _u().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _u().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_u, t3, e3);
      }
      static $() {
        return ["SubscriptionEventDisplay|1 display_label 9?|2 resource_url 9?|3 subscription_id 9?"];
      }
    }
    class yu extends Fo {
      constructor(t3) {
        super(), this.userId = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yu, t3, e3);
      }
      static $() {
        return ["UserDisplayInfo|1 user_id 5|2 display_name 9?|3 email 9?|4 profile_picture_url 9?"];
      }
    }
    class wu extends Fo {
      constructor(t3) {
        super(), this.planId = "", this.planTitle = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wu, t3, e3);
      }
      static $() {
        return ["ExecutePlanInfo|1 plan_id 9|2 plan_title 9"];
      }
    }
    class Su extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Su().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Su().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Su().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Su, t3, e3);
      }
      static $() {
        return ["ProjectDetails|1 name 9?|2 subagent #0?|3 side_chat #1?|4 init_description 9?", Ju, Bu];
      }
    }
    class Ju extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ju().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ju().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ju().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ju, t3, e3);
      }
      static $() {
        return ["ProjectSubagentDetails|2 store_dir 9?"];
      }
    }
    class Bu extends Fo {
      constructor(t3) {
        super(), this.storeDir = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bu, t3, e3);
      }
      static $() {
        return ["ProjectSideChatDetails|1 store_dir 9"];
      }
    }
    class Eu extends Fo {
      constructor(t3) {
        super(), this.text = "", this.messageId = "", this.mode = Lo.UNSPECIFIED, this.conversationStateBlobId = new Uint8Array(0), this.hookAdditionalContexts = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Eu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Eu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Eu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Eu, t3, e3);
      }
      static $() {
        return ["UserMessage|1 text 9|2 message_id 9|3 selected_context #0?|4 mode #1|5 is_simulated_msg 8?|6 best_of_n_group_id 9?|7 try_use_best_of_n_promotion 8?|8 rich_text 9?|9 simulated_msg_reason #2?|10 conversation_state_blob_id 12|11 subagent_system_reminder 9?|13 triggering_user_info #3?|14 execute_plan_info #4?|15 simulated_message_metadata #5?|16 prompt_reference_id 9?|17 thread_id 9?|18 text_blob_id 12?|19 rich_text_blob_id 12?|21 hook_additional_contexts #6*|22 custom_mode_intent #7?|23 project_details #8?|24 turn_steer 8?|25 started_at_ms 4?|26 completed_at_ms 4?|27 sent_by_agent_id 9?|28 sent_by_voice_call 8?|29 sender #9?|30 forked_context 9?", Do.xv, Lo, zo, Ia, wu, Iu, xo.C, cu, Su, Cu];
      }
    }
    class Iu extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Iu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Iu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Iu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Iu, t3, e3);
      }
      static $() {
        return ["UserMessage.SimulatedMessageMetadata|1 title 9?|2 task_id 9?|3 fsd_finding_action 9?|4 url 9?|5 subscription_source #0?|6 subscription_event_display #1?|7 interaction_response #2?", Wo, _u, Au];
      }
    }
    class Cu extends Fo {
      constructor(t3) {
        super(), this.kind = bu.UNSPECIFIED, this.id = "", this.displayName = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Cu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Cu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Cu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Cu, t3, e3);
      }
      static $() {
        return ["MessageSender|1 kind #0|2 id 9|3 display_name 9", bu];
      }
    }
    var bu = (0, o2.QT)(n2.proto3, Oo, "MessageSender.Kind", [[0, "UNSPECIFIED"], [1, "AGENT"], [2, "VOICE_CALL"], [3, "MAIN_BOT"], [4, "PROJECT"]], 1);
    class ku extends Fo {
      constructor(t3) {
        super(), this.text = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ku().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ku().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ku().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ku, t3, e3);
      }
      static $() {
        return ["AssistantMessage|1 text 9|2 started_at_ms 4?|3 completed_at_ms 4?"];
      }
    }
    class vu extends Fo {
      constructor(t3) {
        super(), this.text = "", this.durationMs = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vu, t3, e3);
      }
      static $() {
        return ["ThinkingMessage|1 text 9|2 duration_ms 13|3 started_at_ms 4?|4 completed_at_ms 4?"];
      }
    }
    class qu extends Fo {
      constructor(t3) {
        super(), this.command = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qu, t3, e3);
      }
      static $() {
        return ["ShellCommand|1 command 9"];
      }
    }
    class Ru extends Fo {
      constructor(t3) {
        super(), this.plan = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ru().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ru().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ru().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ru, t3, e3);
      }
      static $() {
        return ["ConversationPlan|1 plan 9"];
      }
    }
    class Pu extends Fo {
      constructor(t3) {
        super(), this.id = "", this.path = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pu, t3, e3);
      }
      static $() {
        return ["PlanRegistryEntry|1 id 9|2 path 9"];
      }
    }
    class Tu extends Fo {
      constructor(t3) {
        super(), this.conversationId = "", this.goalId = "", this.objective = "", this.status = Ai.UNSPECIFIED, this.idleContinuationsWithoutToolCalls = 0, this.continuationCount = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Tu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Tu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Tu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Tu, t3, e3);
      }
      static $() {
        return ["GoalState|1 conversation_id 9|2 goal_id 9|3 objective 9|4 status #0|5 idle_continuations_without_tool_calls 13|6 active_duration_ms 4?|7 last_accrued_at_ms 4?|8 continuation_count 13|9 agent_session_id 9?", Ai];
      }
    }
    class xu extends Fo {
      constructor(t3) {
        super(), this.id = "", this.label = "", this.estimatedTokens = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xu, t3, e3);
      }
      static $() {
        return ["PromptTokenBreakdownCategory|1 id 9|2 label 9|3 estimated_tokens 13|4 character_count 13?"];
      }
    }
    class Nu extends Fo {
      constructor(t3) {
        super(), this.totalUsedTokens = 0, this.maxTokens = 0, this.categories = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Nu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Nu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Nu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Nu, t3, e3);
      }
      static $() {
        return ["PromptTokenBreakdownSnapshot|1 total_used_tokens 13|2 max_tokens 13|3 categories #0*", xu];
      }
    }
    class Du extends Fo {
      constructor(t3) {
        super(), this.sourceType = "", this.messageIndex = 0, this.contentPath = "", this.startOffset = 0, this.endOffset = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Du().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Du().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Du().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Du, t3, e3);
      }
      static $() {
        return ["PromptContextSourceRef|1 source_type 9|3 message_index 13|4 content_path 9|5 start_offset 13|6 end_offset 13"];
      }
    }
    class Uu extends Fo {
      constructor(t3) {
        super(), this.id = "", this.kind = "", this.label = "", this.categoryId = "", this.estimatedTokens = 0, this.characterCount = 0, this.contentAvailable = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Uu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Uu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Uu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Uu, t3, e3);
      }
      static $() {
        return ["PromptContextNode|1 id 9|2 parent_id 9?|3 kind 9|4 label 9|5 category_id 9|6 estimated_tokens 13|7 character_count 13|9 content_available 8|11 source #0?|12 inline_content 9?", Du];
      }
    }
    class Qu extends Fo {
      constructor(t3) {
        super(), this.schemaVersion = 0, this.nodes = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qu, t3, e3);
      }
      static $() {
        return ["PromptContextUsageTree|1 schema_version 13|2 nodes #0*", Uu];
      }
    }
    class Mu extends Fo {
      constructor(t3) {
        super(), this.usedTokens = 0, this.maxTokens = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Mu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Mu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Mu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Mu, t3, e3);
      }
      static $() {
        return ["ConversationTokenDetails|1 used_tokens 13|2 max_tokens 13|3 breakdown #0?|4 prompt_context_usage_tree #1?", Nu, Qu];
      }
    }
    class Ou extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ou().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ou().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ou().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ou, t3, e3);
      }
      static $() {
        return ["FileState|1 content 9?|2 initial_content 9?"];
      }
    }
    class Fu extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Fu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Fu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Fu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Fu, t3, e3);
      }
      static $() {
        return ["FileStateStructure|1 content 12?|2 initial_content 12?"];
      }
    }
    class Lu extends Fo {
      constructor(t3) {
        super(), this.durationMs = n2.protoInt64.zero, this.timestampMs = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Lu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Lu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Lu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Lu, t3, e3);
      }
      static $() {
        return ["StepTiming|1 duration_ms 4|2 timestamp_ms 4"];
      }
    }
    class $u extends Fo {
      constructor(t3) {
        super(), this.completedTurnCountCapped = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new $u().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new $u().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new $u().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals($u, t3, e3);
      }
      static $() {
        return ["TurnTelemetryState|1 completed_turn_count_capped 13|2 last_completed_turn_timestamp_ms 4?"];
      }
    }
    class Gu extends Fo {
      constructor(t3) {
        super(), this.step = "", this.messageIndex = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Gu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Gu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Gu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Gu, t3, e3);
      }
      static $() {
        return ["CommunicateUpdateHistoryEntry|1 step 9|3 message_index 13"];
      }
    }
    class Hu extends Fo {
      constructor(t3) {
        super(), this.history = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Hu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Hu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Hu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Hu, t3, e3);
      }
      static $() {
        return ["CommunicateUpdateTurnState|1 history #0*|2 final_summary 9?|3 completed_subtitle 9?", Gu];
      }
    }
    class Ku extends Fo {
      constructor(t3) {
        super(), this.createdTimestampMs = n2.protoInt64.zero, this.lastUsedTimestampMs = n2.protoInt64.zero, this.environment = s2.dU.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ku().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ku().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ku().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ku, t3, e3);
      }
      static $() {
        return ["SubagentPersistedState|1 conversation_state #0|2 created_timestamp_ms 4|3 last_used_timestamp_ms 4|4 subagent_type #1|5 model_id 9?|6 environment #2|7 cloud_subagent #3?|8 first_class_bc_id 9?|9 cloud_requested_environment_build_id 9?|10 machine #4?", Wu, s2._L, s2.dU, Vu, ta];
      }
    }
    class Vu extends Fo {
      constructor(t3) {
        super(), this.bcId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Vu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Vu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Vu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Vu, t3, e3);
      }
      static $() {
        return ["CloudSubagentReference|1 bc_id 9|2 transcript_path 9?"];
      }
    }
    class zu extends Fo {
      constructor(t3) {
        super(), this.repoPath = "", this.branchName = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new zu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new zu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new zu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(zu, t3, e3);
      }
      static $() {
        return ["TrackedGitRepo|1 repo_path 9|2 branch_name 9"];
      }
    }
    class Wu extends Fo {
      constructor(t3) {
        super(), this.rootPromptMessagesJson = [], this.turns = [], this.todos = [], this.pendingToolCalls = [], this.previousWorkspaceUris = [], this.fileStates = {}, this.fileStatesV2 = {}, this.summaryArchives = [], this.turnTimings = [], this.subagentStates = {}, this.selfSummaryCount = 0, this.readPaths = [], this.plans = {}, this.trackedGitRepoBranches = [], this.communicateUpdateHistory = [], this.subagentThreads = {}, this.communicateUpdateStatesByParentToolCallId = {}, this.subagentRunsByParentToolCallId = {}, this.subagentStateRefs = {}, this.completedAskQuestionToolCallIds = [], this.durableSkillBlocks = [], this.recentUserMessageIds = [], this.mentionedAgentIds = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Wu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Wu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Wu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Wu, t3, e3);
      }
      static $() {
        return ["ConversationStateStructure|1 root_prompt_messages_json 12*|8 turns 12*|3 todos 12*|4 pending_tool_calls 9*|5 token_details #0|6 summary 12?|7 plan 12?|9 previous_workspace_uris 9*|10 mode #1?|11 summary_archive 12?|12 file_states 9,12|15 file_states_v2 9,#2|13 summary_archives 12*|14 turn_timings #3*|16 subagent_states 9,#4|17 self_summary_count 13|18 read_paths 9*|19 active_branch_name 9?|20 plans 9,#5|21 tracked_git_repo_branches #6*|22 agent_type 9?|23 communicate_update_history #7*|24 subagent_threads 9,9|25 communicate_update_final_summary 9?|28 communicate_update_completed_subtitle 9?|29 communicate_update_states_by_parent_tool_call_id 9,#8|30 subagent_runs_by_parent_tool_call_id 9,#9|26 conversation_started_timestamp_ms 4?|27 conversation_started_time_zone 9?|31 subagent_state_refs 9,12|32 goal_state #10?|33 is_root_project_conversation 8?|34 completed_ask_question_tool_call_ids 9*|35 durable_skill_blocks 9*|36 durable_custom_mode_id 9?|37 message_count_at_last_compaction 13?|38 recent_user_message_ids 9*|39 recent_user_message_ids_older_turn_count 13?|40 turn_telemetry #11?|42 mentioned_agent_ids 9*", Mu, Lo, Fu, Lu, Ku, Pu, zu, Gu, Hu, ka, Tu, $u];
      }
    }
    class Yu extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Yu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Yu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Yu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Yu, t3, e3);
      }
      static $() {
        return ["ThinkingDetails"];
      }
    }
    class ju extends Fo {
      constructor(t3) {
        super(), this.bearerToken = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ju().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ju().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ju().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ju, t3, e3);
      }
      static $() {
        return ["ClientLlmGatewayCredential|1 bearer_token 9"];
      }
    }
    class Xu extends Fo {
      constructor(t3) {
        super(), this.modelId = "", this.displayModelId = "", this.displayName = "", this.displayNameShort = "", this.aliases = [], this.credentials = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Xu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Xu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Xu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Xu, t3, e3);
      }
      static $() {
        return ["ModelDetails|1 model_id 9|3 display_model_id 9|4 display_name 9|5 display_name_short 9|6 aliases 9*|2 thinking_details #0?|7 max_mode 8?|8 api_key_credentials #1 credentials|9 azure_credentials #2 credentials|10 bedrock_credentials #3 credentials", Yu, Uo.G0, Uo.ih, Uo.R4];
      }
    }
    class Zu extends Fo {
      constructor(t3) {
        super(), this.subagentType = "", this.selection = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Zu().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Zu().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Zu().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Zu, t3, e3);
      }
      static $() {
        return ["SubagentModelOverride|1 subagent_type 9|2 model #0 selection|3 inherit 8 selection|4 disabled 8 selection", Uo.G4];
      }
    }
    class tc extends Fo {
      constructor(t3) {
        super(), this.id = new Uint8Array(0), this.value = new Uint8Array(0), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new tc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new tc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new tc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(tc, t3, e3);
      }
      static $() {
        return ["PreFetchedBlob|1 id 12|2 value 12"];
      }
    }
    class ec extends Fo {
      constructor(t3) {
        super(), this.selectedSubagentModels = [], this.selectedSubagentModelDetails = [], this.preFetchedBlobs = [], this.subagentModelOverrides = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ec().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ec().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ec().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ec, t3, e3);
      }
      static $() {
        return ["AgentRunRequest|1 conversation_state #0|2 action #1|3 model_details #2|9 requested_model #3?|4 mcp_tools #4|5 conversation_id 9?|6 mcp_file_system_options #5?|7 skill_options #6?|8 custom_system_prompt 9?|10 suggest_next_prompt 8?|11 subagent_type_name 9?|12 exclude_workspace_context 8?|13 harness 9?|14 selected_subagent_models #3*|15 selected_subagent_model_details #2*|16 conversation_group_id 9?|17 pre_fetched_blobs #7*|18 dev_raw_model_slug 9?|19 client_supports_inline_images 8?|20 subagent_model_overrides #8*|21 can_create_cloud_subagents 8?|22 suppress_subagent_progress_update_tool 8?|23 client_supports_send_to_user 8?|24 computer_use_coordinate_mode 9?|25 run_id 9?|26 agent_session_id 9?|28 client_supports_routed_model_update 8?|29 system_prompt_spec #9?|30 client_llm_gateway_credential #10?|31 client_supports_preview_card 8?|32 started_as_new_project 8?|33 first_project_onboarding 8?|34 next_interaction_query_id 13?", Wu, Ea, Xu, Uo.G4, Qo.Or, Qo.Is, No.uw, tc, Zu, Mo.$, ju];
      }
    }
    class rc extends Fo {
      constructor(t3) {
        super(), this.text = "", this.isServerNotice = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new rc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new rc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new rc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(rc, t3, e3);
      }
      static $() {
        return ["TextDeltaUpdate|1 text 9|2 is_server_notice 8"];
      }
    }
    class nc extends Fo {
      constructor(t3) {
        super(), this.displayName = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new nc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new nc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new nc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(nc, t3, e3);
      }
      static $() {
        return ["RoutedModelUpdate|1 display_name 9"];
      }
    }
    class sc extends Fo {
      constructor(t3) {
        super(), this.callId = "", this.modelCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new sc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new sc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new sc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(sc, t3, e3);
      }
      static $() {
        return ["ToolCallStartedUpdate|1 call_id 9|2 tool_call #0|3 model_call_id 9", ga];
      }
    }
    class ic extends Fo {
      constructor(t3) {
        super(), this.callId = "", this.modelCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ic().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ic().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ic().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ic, t3, e3);
      }
      static $() {
        return ["ToolCallCompletedUpdate|1 call_id 9|2 tool_call #0|3 model_call_id 9", ga];
      }
    }
    class oc extends Fo {
      constructor(t3) {
        super(), this.callId = "", this.modelCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new oc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new oc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new oc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(oc, t3, e3);
      }
      static $() {
        return ["ToolCallDeltaUpdate|1 call_id 9|2 tool_call_delta #0|3 model_call_id 9", Ja];
      }
    }
    class ac extends Fo {
      constructor(t3) {
        super(), this.callId = "", this.argsTextDelta = "", this.modelCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new ac().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new ac().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new ac().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(ac, t3, e3);
      }
      static $() {
        return ["PartialToolCallUpdate|1 call_id 9|2 tool_call #0|3 args_text_delta 9|4 model_call_id 9", ga];
      }
    }
    class uc extends Fo {
      constructor(t3) {
        super(), this.text = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new uc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new uc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new uc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(uc, t3, e3);
      }
      static $() {
        return ["ThinkingDeltaUpdate|1 text 9|2 thinking_style #0?", Yo];
      }
    }
    class cc extends Fo {
      constructor(t3) {
        super(), this.thinkingDurationMs = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new cc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new cc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new cc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(cc, t3, e3);
      }
      static $() {
        return ["ThinkingCompletedUpdate|1 thinking_duration_ms 5"];
      }
    }
    class lc extends Fo {
      constructor(t3) {
        super(), this.tokens = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new lc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new lc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new lc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(lc, t3, e3);
      }
      static $() {
        return ["TokenDeltaUpdate|1 tokens 5"];
      }
    }
    class mc extends Fo {
      constructor(t3) {
        super(), this.summary = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new mc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new mc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new mc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(mc, t3, e3);
      }
      static $() {
        return ["SummaryUpdate|1 summary 9"];
      }
    }
    class dc extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new dc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new dc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new dc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(dc, t3, e3);
      }
      static $() {
        return ["SummaryStartedUpdate"];
      }
    }
    class fc extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new fc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new fc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new fc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(fc, t3, e3);
      }
      static $() {
        return ["HeartbeatUpdate"];
      }
    }
    class pc extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new pc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new pc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new pc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(pc, t3, e3);
      }
      static $() {
        return ["SummaryCompletedUpdate|1 hook_message 9?|2 failed 8?"];
      }
    }
    class hc extends Fo {
      constructor(t3) {
        super(), this.event = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new hc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new hc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new hc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(hc, t3, e3);
      }
      static $() {
        return ["ShellOutputDeltaUpdate|1 stdout #0 event|2 stderr #1 event|3 exit #2 event|4 start #3 event", i2.o0, i2.Db, i2.vb, i2.tD];
      }
    }
    class gc extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new gc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new gc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new gc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(gc, t3, e3);
      }
      static $() {
        return ["TurnEndedUpdate|1 input_tokens 3?|2 output_tokens 3?|3 cache_read_tokens 3?|4 cache_write_tokens 3?|5 reasoning_tokens 3?|6 ended_at_ms 4?"];
      }
    }
    class Ac extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ac().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ac().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ac().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ac, t3, e3);
      }
      static $() {
        return ["UserMessageAppendedUpdate|1 user_message #0", Eu];
      }
    }
    class _c extends Fo {
      constructor(t3) {
        super(), this.stepId = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new _c().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new _c().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new _c().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(_c, t3, e3);
      }
      static $() {
        return ["StepStartedUpdate|1 step_id 4"];
      }
    }
    class yc extends Fo {
      constructor(t3) {
        super(), this.callCount = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new yc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new yc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new yc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(yc, t3, e3);
      }
      static $() {
        return ["ToolRequestsListedUpdate|1 call_count 13"];
      }
    }
    class wc extends Fo {
      constructor(t3) {
        super(), this.stepId = n2.protoInt64.zero, this.stepDurationMs = n2.protoInt64.zero, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new wc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new wc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new wc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(wc, t3, e3);
      }
      static $() {
        return ["StepCompletedUpdate|1 step_id 4|2 step_duration_ms 3"];
      }
    }
    class Sc extends Fo {
      constructor(t3) {
        super(), this.suggestion = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Sc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Sc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Sc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Sc, t3, e3);
      }
      static $() {
        return ["PromptSuggestionUpdate|1 suggestion 9"];
      }
    }
    class Jc extends Fo {
      constructor(t3) {
        super(), this.path = "", this.branchName = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Jc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Jc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Jc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Jc, t3, e3);
      }
      static $() {
        return ["ActiveBranchChange|1 path 9|2 branch_name 9"];
      }
    }
    class Bc extends Fo {
      constructor(t3) {
        super(), this.id = "", this.label = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Bc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Bc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Bc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Bc, t3, e3);
      }
      static $() {
        return ["FeedbackRequestCategory|1 id 9|2 label 9"];
      }
    }
    class Ec extends Fo {
      constructor(t3) {
        super(), this.id = "", this.prompt = "", this.categories = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ec().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ec().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ec().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ec, t3, e3);
      }
      static $() {
        return ["FeedbackRequestCategoryGroup|1 id 9|2 prompt 9|3 categories #0*", Bc];
      }
    }
    class Ic extends Fo {
      constructor(t3) {
        super(), this.requestId = "", this.categories = [], this.categoryGroups = [], this.showFormImmediately = false, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Ic().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Ic().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Ic().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Ic, t3, e3);
      }
      static $() {
        return ["FeedbackRequestUpdate|1 request_id 9|2 canonical_model_name 9?|3 categories #0*|4 category_groups #1*|5 show_form_immediately 8|6 title 9?|7 negative_title 9?|8 comment_placeholder 9?", Bc, Ec];
      }
    }
    class Cc extends Fo {
      constructor(t3) {
        super(), this.displayOrder = jo.UNSPECIFIED, this.parentInvocationId = "", this.alternateInvocationId = "", this.parentResponse = "", this.comparisonConfigId = "", this.alternateModelId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Cc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Cc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Cc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Cc, t3, e3);
      }
      static $() {
        return ["ResponseComparisonStarted|1 display_order #0|2 parent_invocation_id 9|3 alternate_invocation_id 9|4 parent_response 9|5 comparison_config_id 9|6 alternate_model_id 9", jo];
      }
    }
    class bc extends Fo {
      constructor(t3) {
        super(), this.text = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new bc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new bc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new bc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(bc, t3, e3);
      }
      static $() {
        return ["ResponseComparisonTextDelta|1 text 9"];
      }
    }
    class kc extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new kc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new kc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new kc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(kc, t3, e3);
      }
      static $() {
        return ["ResponseComparisonCompleted"];
      }
    }
    class vc extends Fo {
      constructor(t3) {
        super(), this.reason = Xo.UNSPECIFIED, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new vc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new vc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new vc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(vc, t3, e3);
      }
      static $() {
        return ["ResponseComparisonSkipped|1 reason #0", Xo];
      }
    }
    class qc extends Fo {
      constructor(t3) {
        super(), this.comparisonId = "", this.event = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new qc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new qc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new qc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(qc, t3, e3);
      }
      static $() {
        return ["ResponseComparisonUpdate|1 comparison_id 9|2 started #0 event|3 text_delta #1 event|4 completed #2 event|5 skipped #3 event", Cc, bc, kc, vc];
      }
    }
    class Rc extends Fo {
      constructor(t3) {
        super(), this.message = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Rc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Rc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Rc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Rc, t3, e3);
      }
      static $() {
        return ["InteractionUpdate|1 text_delta #0 message|7 partial_tool_call #1 message|15 tool_call_delta #2 message|2 tool_call_started #3 message|3 tool_call_completed #4 message|4 thinking_delta #5 message|5 thinking_completed #6 message|6 user_message_appended #7 message|8 token_delta #8 message|9 summary #9 message|10 summary_started #10 message|11 summary_completed #11 message|12 shell_output_delta #12 message|13 heartbeat #13 message|14 turn_ended #14 message|16 step_started #15 message|17 step_completed #16 message|27 tool_requests_listed #17 message|18 prompt_suggestion #18 message|19 post_request_prompt #19 message|20 active_branch_change #20 message|21 feedback_request #21 message|22 response_comparison #22 message|23 context_injection_state #23 message|24 routed_model #24 message|26 grok_bot_nudge #25 message|25 message_started_at_ms 4?", rc, ac, oc, sc, ic, uc, cc, Ac, lc, mc, dc, pc, hc, fc, gc, _c, wc, yc, Sc, Tc, Jc, Ic, qc, Pc, nc, xc];
      }
    }
    class Pc extends Fo {
      constructor(t3) {
        super(), this.injectionId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Pc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Pc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Pc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Pc, t3, e3);
      }
      static $() {
        return ["ContextInjectionStateUpdate|1 injection_id 9|2 state #0", Za];
      }
    }
    class Tc extends Fo {
      constructor(t3) {
        super(), this.title = "", this.message = "", this.buttonLabel = "", this.buttonUrl = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Tc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Tc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Tc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Tc, t3, e3);
      }
      static $() {
        return ["PostRequestPromptUpdate|1 title 9|2 message 9|3 button_label 9|4 button_url 9"];
      }
    }
    class xc extends Fo {
      constructor(t3) {
        super(), this.job = "", this.description = "", this.showNumber = 0, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new xc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new xc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new xc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(xc, t3, e3);
      }
      static $() {
        return ["GrokBotNudgeUpdate|1 job 9|2 description 9|3 show_number 13"];
      }
    }
    class Nc extends Fo {
      constructor(t3) {
        super(), this.id = 0, this.query = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Nc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Nc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Nc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Nc, t3, e3);
      }
      static $() {
        return ["InteractionQuery|1 id 13|2 web_search_request_query #0 query|3 ask_question_interaction_query #1 query|4 switch_mode_request_query #2 query|7 create_plan_request_query #3 query|8 setup_vm_environment_args #4 query|9 web_fetch_request_query #5 query|10 pr_management_request_query #6 query|11 mcp_auth_request_query #7 query|12 generate_image_request_query #8 query|13 replace_env_args #9 query|14 connect_scm_request_query #10 query", Kt, Uc, me, Dt, qe, Ze, Ir, Tr, he.Uj, bn, ai];
      }
    }
    class Dc extends Fo {
      constructor(t3) {
        super(), this.id = 0, this.result = { case: void 0 }, n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Dc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Dc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Dc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Dc, t3, e3);
      }
      static $() {
        return ["InteractionResponse|1 id 13|2 web_search_request_response #0 result|3 ask_question_interaction_response #1 result|4 switch_mode_request_response #2 result|7 create_plan_request_response #3 result|8 setup_vm_environment_result #4 result|9 web_fetch_request_response #5 result|10 pr_management_result #6 result|11 mcp_auth_request_response #7 result|12 generate_image_request_response #8 result|13 replace_env_result #9 result|14 connect_scm_request_response #10 result", Vt, Qc, de, Ut, Re, tr, _r, xr, he.vW, qn, ui];
      }
    }
    class Uc extends Fo {
      constructor(t3) {
        super(), this.toolCallId = "", n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Uc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Uc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Uc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Uc, t3, e3);
      }
      static $() {
        return ["AskQuestionInteractionQuery|1 args #0|2 tool_call_id 9", te.ju];
      }
    }
    class Qc extends Fo {
      constructor(t3) {
        super(), n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new Qc().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new Qc().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new Qc().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(Qc, t3, e3);
      }
      static $() {
        return ["AskQuestionInteractionResponse|1 result #0", te.tz];
      }
    }
  }