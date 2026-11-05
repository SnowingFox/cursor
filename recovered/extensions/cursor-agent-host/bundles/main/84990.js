// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 84990 range:12011503..12020343
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
84990: (e, t, r) => {
    "use strict";
    r.d(t, { K1: () => N, Oj: () => _, P9: () => O, Sh: () => g, T1: () => d, VW: () => v, WI: () => q, fg: () => y, h1: () => u, k_: () => M, sr: () => F, xL: () => U });
    var n = r(77598), s = r(73024), o = r(76760), i = r(81958), a = r(82590), c = r(56215), l = r(28967);
    const u = "manifest.json", d = { manifestBytes: 1048576, files: 1024, fileBytes: 536870912, name: 255, label: 200, commit: 128, builtAt: 64, mainVersion: 64, kind: 32, list: 256, capability: 64, packDepth: 8, packBytes: 65536, requiredRevision: 1e6 };
    function p(e2) {
      for (const t2 of e2) {
        const e3 = t2.codePointAt(0) ?? 0;
        if (e3 < 32 || 127 === e3) return true;
      }
      return false;
    }
    const m = /^(?:CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(?:\.|$)/i, h = /[<>:"|?*]/;
    const f = /\.(?:node|dylib|dll)$|\.so(?:\.\d+)*$/i;
    class g extends Error {
      constructor(e2, t2) {
        super(e2), this.check = t2, this.name = "ManifestError";
      }
    }
    function y(e2) {
      return n.createHash("sha256").update(e2).digest("hex");
    }
    const w = /^(\d{1,9})\.(\d{1,9})\.(\d{1,9})(?:-pre\.(\d{1,9})(?:\.patch\.(\d{1,9}))?)?$/;
    function v(e2) {
      const t2 = w.exec(e2);
      if (null === t2) return;
      const [, r2, n2, s2, o2, i2] = t2;
      return { major: Number(r2), minor: Number(n2), patch: Number(s2), pre: void 0 === o2 ? void 0 : [Number(o2), Number(i2 ?? 0)] };
    }
    function _(e2, t2) {
      const r2 = e2.major - t2.major || e2.minor - t2.minor || e2.patch - t2.patch;
      return 0 !== r2 ? r2 : void 0 === e2.pre || void 0 === t2.pre ? (void 0 === e2.pre ? 1 : 0) - (void 0 === t2.pre ? 1 : 0) : e2.pre[0] - t2.pre[0] || e2.pre[1] - t2.pre[1];
    }
    function A(e2) {
      return v(e2.startsWith(">=") ? e2.slice(2) : e2);
    }
    const S = i.Yj().regex(/^[0-9a-f]{64}$/, "expected a sha256 hex digest"), b = i.Yj().min(1), E = (e2) => b.max(e2).refine((e3) => !p(e3), { message: "contains a control character" }), I = i.Yj().refine(function(e2) {
      return e2.length > 0 && e2.length <= d.name && !p(e2) && !e2.includes("/") && !e2.includes("\\") && "." !== e2 && ".." !== e2 && "__proto__" !== e2 && e2 !== u && !(function(e3) {
        return m.test(e3) || h.test(e3) || e3.endsWith(".") || e3.endsWith(" ");
      })(e2);
    }, { message: "is not a plain name" }), C = I.refine((e2) => !(function(e3) {
      return f.test(e3);
    })(e2), { message: "is a native binary; a generation carries code only" }), k = i.Yj().max(d.name).regex(/^(@[a-z0-9~-][a-z0-9._~-]*\/)?[a-z0-9~-][a-z0-9._~-]*$/, "is not a package name"), x = i.Yj().max(d.capability).regex(/^[a-z0-9][a-z0-9-]*$/, "is not a capability name"), T = (e2) => i.YO(e2).max(d.list), R = (e2, t2) => {
      if (void 0 === e2) return;
      if ((function(e3, t3) {
        let r3 = 0, n2 = [e3];
        for (; n2.length > 0 && r3 < t3 + 1; ) {
          r3 += 1;
          const e4 = [];
          for (const t4 of n2) if (Array.isArray(t4)) for (const r4 of t4) e4.push(r4);
          else if ("object" == typeof t4 && null !== t4) for (const r4 of Object.values(t4)) e4.push(r4);
          n2 = e4;
        }
        return r3;
      })(e2, d.packDepth) > d.packDepth) return void t2.addIssue({ code: a.eq.custom, message: `nests deeper than ${d.packDepth} levels` });
      const r2 = JSON.stringify(e2);
      (void 0 === r2 || r2.length > d.packBytes) && t2.addIssue({ code: a.eq.custom, message: `serializes to more than ${d.packBytes} bytes` });
    }, B = i.L5().superRefine(R), P = i.Ik({ algorithm: i.Yj() }).passthrough().superRefine(R), J = i.Ik({ schema: i.eu(1), generation: S, label: E(d.label), commit: E(d.commit), builtAt: E(d.builtAt), entry: I, workers: T(C), natives: T(k), requiredRevision: i.ai().int().min(0).max(d.requiredRevision), capabilities: T(x), engines: i.Ik({ cursor: i.Yj().refine((e2) => void 0 !== A(e2), { message: "is not >=X.Y.Z, >=X.Y.Z-pre.N or >=X.Y.Z-pre.N.patch.M" }) }).optional(), files: i.g1(C, i.Ik({ bytes: i.ai().int().min(0).max(d.fileBytes), sha256: S })).refine((e2) => Object.keys(e2).length <= d.files, { message: `lists more than ${d.files} files` }), mainVersion: i.Yj().max(d.mainVersion).refine((e2) => void 0 !== v(e2), { message: "is not X.Y.Z, X.Y.Z-pre.N or X.Y.Z-pre.N.patch.M" }).optional(), kind: E(d.kind).optional(), pack: B.optional(), signature: P.optional() }).superRefine((e2, t2) => {
      Object.hasOwn(e2.files, e2.entry) || t2.addIssue({ code: a.eq.custom, path: ["entry"], message: `entry ${e2.entry} is not in files` }), e2.workers.forEach((r2, n2) => {
        Object.hasOwn(e2.files, r2) || t2.addIssue({ code: a.eq.custom, path: ["workers", n2], message: `worker ${r2} is not in files` });
      });
    });
    function M(e2, t2) {
      const r2 = "string" == typeof e2 ? Buffer.byteLength(e2, "utf8") : e2.byteLength;
      if (r2 > d.manifestBytes) throw new g(`${t2}: ${r2} bytes, more than the ${d.manifestBytes} a manifest may have`, "schema");
      let n2;
      try {
        n2 = JSON.parse("string" == typeof e2 ? e2 : Buffer.from(e2).toString("utf8"));
      } catch (e3) {
        throw new g(`${t2}: not JSON: ${e3 instanceof Error ? e3.message : String(e3)}`, "schema");
      }
      return (function(e3, t3) {
        const r3 = J.safeParse(e3);
        if (!r3.success) throw new g(`${t3}: ${n3 = r3.error.issues, n3.map((e4) => 0 === e4.path.length ? e4.message : `${e4.path.join(".")}: ${e4.message}`).join("; ")}`, "schema");
        var n3;
        const { pack: s2, signature: o2, ...i2 } = r3.data;
        return { ...i2, ...void 0 === s2 ? {} : { pack: s2 }, ...void 0 === o2 ? {} : { signature: o2 } };
      })(n2, t2);
    }
    function q(e2) {
      const t2 = o.join(e2, u);
      let r2;
      try {
        r2 = D(t2, d.manifestBytes);
      } catch (e3) {
        throw new g(`unreadable ${t2}: ${e3 instanceof Error ? e3.message : String(e3)}`, "schema");
      }
      return M(r2, t2);
    }
    function D(e2, t2) {
      const r2 = o.basename(e2);
      if (!s.lstatSync(e2).isFile()) throw new g(`${r2}: is not a regular file`, "files");
      const n2 = s.openSync(e2, "r");
      try {
        const e3 = s.fstatSync(n2);
        if (!e3.isFile()) throw new g(`${r2}: is not a regular file`, "files");
        if (e3.size > t2) throw new g(`${r2}: ${e3.size} bytes on disk, more than the ${t2} allowed`, "files");
        return s.readFileSync(n2);
      } finally {
        s.closeSync(n2);
      }
    }
    function O(e2) {
      if (e2.requiredRevision !== c.nl) throw new g(`built against interface revision ${e2.requiredRevision}; this host requires ${c.nl}`, "revision");
      const t2 = c.us.filter((t3) => !e2.capabilities.includes(t3));
      if (t2.length > 0) throw new g(`lacks required capabilities: ${t2.join(", ")}`, "capabilities");
      const r2 = (0, l.Mt)(e2.natives);
      if (r2.length > 0) throw new g(`requires natives this host does not provide: ${r2.join(", ")}`, "natives");
    }
    function N({ candidateBuiltAt: e2, floorBuiltAt: t2 }) {
      const r2 = void 0 === t2 ? Number.NaN : Date.parse(t2);
      if (Number.isNaN(r2)) return;
      const n2 = Date.parse(e2);
      return Number.isNaN(n2) ? `builtAt ${JSON.stringify(e2)} is not a date, so it cannot be ordered against the floor built ${t2}` : n2 < r2 ? `built ${e2}, before the floor built ${t2}; never below the floor` : void 0;
    }
    function F(e2, t2) {
      const r2 = (function({ range: e3, clientVersion: t3 }) {
        const r3 = void 0 === e3 ? void 0 : A(e3), n2 = void 0 === t3 ? void 0 : v(t3);
        if (!(void 0 === r3 || void 0 === n2 || _(n2, r3) >= 0)) return `engines.cursor is ${e3}; this client is ${t3}`;
      })({ range: e2.engines?.cursor, clientVersion: t2 });
      if (void 0 !== r2) throw new g(r2, "client");
    }
    function U(e2, t2) {
      const r2 = (function(e3) {
        const t3 = n.createHash("sha256");
        for (const r3 of Object.keys(e3).sort()) t3.update(`${r3}
${e3[r3].sha256}
`);
        return t3.digest("hex");
      })(t2.files);
      if (t2.generation !== r2) throw new g(`generation ${t2.generation.slice(0, 12)} does not match its files (${r2.slice(0, 12)})`, "hash");
      for (const [r3, n2] of Object.entries(t2.files)) {
        let t3;
        try {
          t3 = D(o.join(e2, r3), n2.bytes);
        } catch (e3) {
          if (e3 instanceof g) throw e3;
          throw new g(`${r3}: ${e3 instanceof Error ? e3.message : String(e3)}`, "files");
        }
        if (t3.length !== n2.bytes) throw new g(`${r3}: ${t3.length} bytes on disk, manifest says ${n2.bytes}`, "files");
        const s2 = y(t3);
        if (s2 !== n2.sha256) throw new g(`${r3}: sha256 ${s2.slice(0, 12)} on disk, manifest says ${n2.sha256.slice(0, 12)}`, "files");
      }
    }
  }