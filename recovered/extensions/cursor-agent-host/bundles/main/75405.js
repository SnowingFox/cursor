// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 75405 range:11199648..11204165
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
75405: (e, t, r) => {
    "use strict";
    r.d(t, { JM: () => g, LY: () => S, Mv: () => b, XJ: () => y, g2: () => E, r$: () => A, zC: () => f });
    var n = r(77598), s = r(73024), o = r(76760), i = r(81958), a = r(84990);
    const c = "manifest.sig", l = "application/vnd.cursor.agent-harness.manifest+json", u = "ecdsa-p256-sha256", d = { bytes: 16384, signatures: 8, keyId: 64, algorithm: 64, signature: 256 }, p = /^[A-Za-z0-9._-]+$/, m = [{ keyId: "harness-prod-1", spki: "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAED+hfLq9Hmi9Lc/tHqO9nNNaKb/Y9UiJ3OJKflOhVsnJck0aLox8SYnE6dY6qgeSv0LAgUNGSBHlEjtr7U5nJ0g==" }, { keyId: "harness-standby-1", spki: "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAErZJDN/jiDTP13zIP1nhdVHUogD5CKlMmFkdtvl7nR7w1ukb0DqavYsrp63pudRGrXoVv2LLUi+TnaHoSQURX+g==" }], h = { keyId: "harness-dev-only-1", spki: "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEOgqYCkjo2I6HlIeMuNoY5HlRwm0kCWlRqsp6TRpFXDZFyO68/9QfIbQg3vl/V6MAkTKMY0LRzqlrViKpfIRsvA==" }, f = "--agent-harness-trust-dev-key";
    function g(e2) {
      return void 0 !== e2 && void 0 !== (0, a.VW)(e2)?.pre;
    }
    function y({ developmentBuild: e2, devKeySwitch: t2 = false, clientVersion: r2 }) {
      return { enforce: true, keys: e2 || t2 && g(r2) ? [...m, h] : m };
    }
    const w = (e2, t2) => i.Yj().min(1).max(e2).regex(t2), v = i.Ik({ schema: i.eu(1), payloadType: i.eu(l), signatures: i.YO(i.Ik({ keyId: w(d.keyId, p), algorithm: w(d.algorithm, p), signature: w(d.signature, /^[A-Za-z0-9+/]+={0,2}$/) })).min(1).max(d.signatures) });
    function _(e2, t2, r2) {
      try {
        const s2 = n.createPublicKey({ key: Buffer.from(e2.spki, "base64"), format: "der", type: "spki" });
        return n.verify("sha256", t2, { key: s2, dsaEncoding: "der" }, Buffer.from(r2, "base64"));
      } catch {
        return false;
      }
    }
    function A({ manifest: e2, signature: t2, keys: r2 }) {
      if (void 0 === t2) return { status: "unsigned" };
      const n2 = (function(e3) {
        if (e3.byteLength > d.bytes) return `${c} is more than ${d.bytes} bytes`;
        let t3;
        try {
          t3 = JSON.parse(Buffer.from(e3).toString("utf8"));
        } catch {
          return `${c} is not JSON`;
        }
        const r3 = v.safeParse(t3);
        if (!r3.success) {
          const e4 = r3.error.issues.map((e5) => 0 === e5.path.length ? e5.message : `${e5.path.join(".")}: ${e5.message}`);
          return `${c} is not a manifest signature: ${e4.join("; ")}`;
        }
        return r3.data.signatures;
      })(t2);
      if ("string" == typeof n2) return { status: "malformed", problem: n2 };
      const s2 = (function(e3, t3) {
        const r3 = Buffer.from(e3, "utf8");
        return Buffer.concat([Buffer.from(`DSSEv1 ${r3.length} `, "utf8"), r3, Buffer.from(` ${t3.byteLength} `, "utf8"), t3]);
      })(l, e2), o2 = [], i2 = [];
      for (const e3 of n2) {
        const t3 = r2.find((t4) => t4.keyId === e3.keyId);
        if (void 0 !== t3 && e3.algorithm === u) {
          if (_(t3, s2, e3.signature)) return { status: "valid", keyId: t3.keyId };
          o2.push(e3.keyId);
        } else i2.push(e3.keyId);
      }
      return o2.length > 0 ? { status: "invalid", keyIds: o2 } : { status: "untrusted", keyIds: i2 };
    }
    function S(e2) {
      switch (e2.status) {
        case "valid":
          return `is signed by ${e2.keyId}`;
        case "unsigned":
          return `has no ${c}`;
        case "untrusted":
          return `is signed only by keys this build does not trust (${e2.keyIds.join(", ")})`;
        case "invalid":
          return `has a signature from ${e2.keyIds.join(", ")} that does not verify over its manifest`;
        case "malformed":
          return `has an unreadable signature: ${e2.problem}`;
      }
    }
    function b(e2, t2) {
      let r2;
      try {
        r2 = s.lstatSync(e2);
      } catch (e3) {
        if (e3 instanceof Error && "code" in e3 && "ENOENT" === e3.code) return;
        throw e3;
      }
      if (!r2.isFile()) throw new Error(`${o.basename(e2)} is not a regular file`);
      const n2 = s.openSync(e2, "r");
      try {
        const e3 = Math.min(s.fstatSync(n2).size, t2 + 1), r3 = Buffer.alloc(e3);
        let o2 = 0;
        for (; o2 < e3; ) {
          const t3 = s.readSync(n2, r3, o2, e3 - o2, o2);
          if (0 === t3) break;
          o2 += t3;
        }
        return r3.subarray(0, o2);
      } finally {
        s.closeSync(n2);
      }
    }
    function E(e2) {
      return b(o.join(e2, c), d.bytes);
    }
  }