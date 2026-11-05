// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 81190 range:11686145..11688309
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
81190: (e, t, r) => {
    "use strict";
    r.d(t, { N: () => d, P$: () => l, uW: () => u });
    var n = r(36038);
    class s extends n.Message {
      constructor(e2) {
        super(), this.code = 0, this.message = "", this.details = [], n.proto3.util.initPartial(e2, this);
      }
      static fromBinary(e2, t2) {
        return new s().fromBinary(e2, t2);
      }
      static fromJson(e2, t2) {
        return new s().fromJson(e2, t2);
      }
      static fromJsonString(e2, t2) {
        return new s().fromJsonString(e2, t2);
      }
      static equals(e2, t2) {
        return n.proto3.util.equals(s, e2, t2);
      }
    }
    s.runtime = n.proto3, s.typeName = "google.rpc.Status", s.fields = n.proto3.util.newFieldList(() => [{ no: 1, name: "code", kind: "scalar", T: 5 }, { no: 2, name: "message", kind: "scalar", T: 9 }, { no: 3, name: "details", kind: "message", T: n.Any, repeated: true }]);
    var o = r(40328), i = r(86422), a = r(8032), c = r(6551);
    const l = "0";
    function u(e2, t2) {
      if (t2) {
        if (e2.set(c.OJ, t2.code.toString(10)), e2.set(c.vw, encodeURIComponent(t2.rawMessage)), t2.details.length > 0) {
          const r2 = new s({ code: t2.code, message: t2.rawMessage, details: t2.details.map((e3) => "getType" in e3 ? n.Any.pack(e3) : new n.Any({ typeUrl: `type.googleapis.com/${e3.type}`, value: e3.value })) });
          e2.set(c.P7, (0, i.Zj)(r2));
        }
      } else e2.set(c.OJ, l.toString());
      return e2;
    }
    function d(e2) {
      var t2;
      const r2 = e2.get(c.P7);
      if (null != r2) {
        const t3 = (0, i.by)(r2, s);
        if (0 == t3.code) return;
        const n3 = new o.T(t3.message, t3.code, e2);
        return n3.details = t3.details.map((e3) => ({ type: e3.typeUrl.substring(e3.typeUrl.lastIndexOf("/") + 1), value: e3.value })), n3;
      }
      const n2 = e2.get(c.OJ);
      if (null != n2) {
        if (n2 === l) return;
        const r3 = parseInt(n2, 10);
        return r3 in a.C ? new o.T(decodeURIComponent(null !== (t2 = e2.get(c.vw)) && void 0 !== t2 ? t2 : ""), r3, e2) : new o.T(`invalid grpc-status: ${n2}`, a.C.Internal, e2);
      }
    }
  }