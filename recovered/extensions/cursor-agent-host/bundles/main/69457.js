// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 69457 range:10747455..10752275
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
69457: (e, t, r) => {
    "use strict";
    r.d(t, { Ng: () => h, cC: () => m });
    var n = r(73024), s = r(51455), o = r(76760);
    const i = (0, r(37949).h)("agent-host"), a = 262144, c = 52428800, l = BigInt(0);
    class u extends Error {
      constructor(e2) {
        super(`Agent host file not found (${e2})`), this.code = "FILE_NOT_FOUND", this.name = "AgentHostFileNotFoundError", this.reason = e2;
      }
    }
    class d extends Error {
      constructor(e2) {
        super(`Agent host file changed during read: ${e2}`), this.code = "FILE_CHANGED", this.name = "AgentHostFileChangedError";
      }
    }
    class p extends Error {
      constructor(e2) {
        super(`Agent host file read_offset ${e2.readOffset} is past the end of the file (${e2.totalBytes} bytes)`), this.code = "FILE_OUT_OF_RANGE", this.name = "AgentHostFileOutOfRangeError", this.readOffset = e2.readOffset, this.totalBytes = e2.totalBytes;
      }
    }
    function m(e2) {
      if (0 === e2.length || e2.includes("\0")) throw new Error("Agent host file path must be a non-empty path");
      if (!(0, o.isAbsolute)(e2)) throw new Error("Agent host file path must be absolute");
      return (0, o.resolve)(e2);
    }
    async function* h(e2, t2, r2, n2 = w) {
      if (v(e2), r2.readOffset < l || r2.readLimit < l) throw new Error("Agent host file read_offset and read_limit must be non-negative");
      let s2, o2;
      try {
        s2 = await n2(t2);
      } catch (t3) {
        throw v(e2), (function(e3) {
          switch (e3 instanceof Error && "code" in e3 ? String(e3.code) : void 0) {
            case "ENOENT":
            case "ENOTDIR":
            case "ELOOP":
              return new u("missing");
            case "EISDIR":
            case "ENXIO":
              return new u("not_a_regular_file");
            case "EACCES":
            case "EPERM":
              return new u("unreadable");
            default:
              return new Error("Agent host file open failed", { cause: e3 });
          }
        })(t3);
      }
      const m2 = () => o2 ??= s2.close(), h2 = () => {
        m2().catch((t3) => {
          i.debug(e2, "File close after cancel failed", { error: t3 });
        });
      };
      e2.signal.addEventListener("abort", h2, { once: true });
      try {
        yield* (async function* (e3, t3, r3) {
          const n3 = await t3.stat({ bigint: true });
          if (v(e3), !n3.isFile()) throw new u("not_a_regular_file");
          const s3 = n3.size, o3 = n3.mtimeMs;
          if (void 0 !== r3.cachedMtimeMs && r3.cachedMtimeMs === o3) return void (yield { totalBytes: s3, mtimeMs: o3, result: { case: "notModified", value: {} } });
          if (r3.readOffset > s3) throw new p({ readOffset: r3.readOffset, totalBytes: s3 });
          const i2 = BigInt(c);
          if (r3.readLimit === l && s3 > i2) return void (yield { totalBytes: s3, mtimeMs: o3, result: { case: "tooLarge", value: { maxBytes: i2 } } });
          const d2 = r3.readOffset + r3.readLimit, m3 = r3.readLimit === l || d2 > s3 ? s3 : d2;
          let h3 = r3.readOffset;
          do {
            v(e3);
            const r4 = m3 - h3, i3 = Number(r4 < BigInt(a) ? r4 : BigInt(a)), c2 = await f(t3, h3, i3);
            v(e3);
            const l2 = h3 + BigInt(c2.byteLength);
            l2 === s3 && await g(t3, s3), await y(t3, n3), v(e3), yield { totalBytes: s3, mtimeMs: o3, result: { case: "chunk", value: { offset: h3, data: c2 } } }, h3 = l2;
          } while (h3 < m3);
        })(e2, s2, r2);
      } catch (t3) {
        if (v(e2), (function(e3) {
          return e3 instanceof u || e3 instanceof d || e3 instanceof p;
        })(t3)) throw t3;
        throw new Error("Agent host file read failed", { cause: t3 });
      } finally {
        e2.signal.removeEventListener("abort", h2), await m2();
      }
    }
    async function f(e2, t2, r2) {
      if (0 === r2) return new Uint8Array(0);
      const n2 = new Uint8Array(r2), { bytesRead: s2 } = await e2.read(n2, 0, r2, Number(t2));
      if (0 === s2) throw new d("ended before its reported size");
      return n2.subarray(0, s2);
    }
    async function g(e2, t2) {
      const { bytesRead: r2 } = await e2.read(new Uint8Array(1), 0, 1, Number(t2));
      if (0 !== r2) throw new d("bytes past its reported size");
    }
    async function y(e2, t2) {
      const r2 = await e2.stat({ bigint: true });
      if (r2.size !== t2.size || r2.mtimeNs !== t2.mtimeNs || r2.ctimeNs !== t2.ctimeNs) throw new d("size, mtime, or ctime moved");
    }
    function w(e2) {
      return (0, s.open)(e2, n.constants.O_RDONLY | (n.constants.O_NONBLOCK ?? 0));
    }
    function v(e2) {
      if (!e2.signal.aborted) return;
      const t2 = new Error("Agent host file read canceled");
      throw t2.name = "AbortError", t2;
    }
  }