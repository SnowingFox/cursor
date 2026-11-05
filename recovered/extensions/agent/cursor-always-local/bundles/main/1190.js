// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1190 range:430866..433061
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1190: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { N: () => m, P$: () => c, uW: () => l });
    var n2 = r2(6038);
    class s2 extends n2.Message {
      constructor(t3) {
        super(), this.code = 0, this.message = "", this.details = [], n2.proto3.util.initPartial(t3, this);
      }
      static fromBinary(t3, e3) {
        return new s2().fromBinary(t3, e3);
      }
      static fromJson(t3, e3) {
        return new s2().fromJson(t3, e3);
      }
      static fromJsonString(t3, e3) {
        return new s2().fromJsonString(t3, e3);
      }
      static equals(t3, e3) {
        return n2.proto3.util.equals(s2, t3, e3);
      }
    }
    s2.runtime = n2.proto3, s2.typeName = "google.rpc.Status", s2.fields = n2.proto3.util.newFieldList(() => [{ no: 1, name: "code", kind: "scalar", T: 5 }, { no: 2, name: "message", kind: "scalar", T: 9 }, { no: 3, name: "details", kind: "message", T: n2.Any, repeated: true }]);
    var i2 = r2(328), o2 = r2(6422), a = r2(8032), u = r2(6551);
    const c = "0";
    function l(t3, e3) {
      if (e3) {
        if (t3.set(u.OJ, e3.code.toString(10)), t3.set(u.vw, encodeURIComponent(e3.rawMessage)), e3.details.length > 0) {
          const r3 = new s2({ code: e3.code, message: e3.rawMessage, details: e3.details.map((t4) => "getType" in t4 ? n2.Any.pack(t4) : new n2.Any({ typeUrl: `type.googleapis.com/${t4.type}`, value: t4.value })) });
          t3.set(u.P7, (0, o2.Zj)(r3));
        }
      } else t3.set(u.OJ, c.toString());
      return t3;
    }
    function m(t3) {
      var e3;
      const r3 = t3.get(u.P7);
      if (null != r3) {
        const e4 = (0, o2.by)(r3, s2);
        if (0 == e4.code) return;
        const n4 = new i2.T(e4.message, e4.code, t3);
        return n4.details = e4.details.map((t4) => ({ type: t4.typeUrl.substring(t4.typeUrl.lastIndexOf("/") + 1), value: t4.value })), n4;
      }
      const n3 = t3.get(u.OJ);
      if (null != n3) {
        if (n3 === c) return;
        const r4 = parseInt(n3, 10);
        return r4 in a.C ? new i2.T(decodeURIComponent(null !== (e3 = t3.get(u.vw)) && void 0 !== e3 ? e3 : ""), r4, t3) : new i2.T(`invalid grpc-status: ${n3}`, a.C.Internal, t3);
      }
    }
  }