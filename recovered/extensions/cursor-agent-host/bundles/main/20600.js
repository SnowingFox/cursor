// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 20600 range:4396566..4398105
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
20600: (e, t, r) => {
    "use strict";
    r.d(t, { aD: () => l, bO: () => o, cm: () => i, nj: () => c, nk: () => u });
    const n = new TextDecoder(), s = new TextEncoder();
    const o = new class {
      serialize(e2) {
        return s.encode(e2);
      }
      deserialize(e2) {
        return n.decode(e2);
      }
      getBlobType() {
        return { kind: "string" };
      }
    }();
    class i {
      constructor(e2) {
        this.proto = e2;
      }
      serialize(e2) {
        return e2.toBinary();
      }
      deserialize(e2) {
        return this.proto.fromBinary(e2);
      }
      getBlobType() {
        return { kind: "proto", typeName: this.proto.typeName };
      }
    }
    const a = Array.from({ length: 256 }, (e2, t2) => t2.toString(16).padStart(2, "0"));
    function c(e2) {
      if ("undefined" != typeof Buffer) return Buffer.from(e2).toString("hex");
      let t2 = "";
      for (let r2 = 0; r2 < e2.length; r2++) t2 += a[e2[r2]];
      return t2;
    }
    function l(e2) {
      const t2 = e2.trim().toLowerCase();
      if (t2.length % 2 != 0) throw new Error("Invalid hex string length");
      const r2 = new Uint8Array(t2.length / 2);
      for (let e3 = 0; e3 < t2.length; e3 += 2) r2[e3 / 2] = parseInt(t2.slice(e3, e3 + 2), 16);
      return r2;
    }
    function u(e2) {
      if ("undefined" != typeof Buffer) return Buffer.from(e2).toString("base64");
      let t2 = "";
      for (let r2 = 0; r2 < e2.length; r2++) t2 += String.fromCharCode(e2[r2]);
      return btoa(t2);
    }
  }