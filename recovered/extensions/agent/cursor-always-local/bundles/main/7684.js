// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7684 range:4594690..4597965
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7684: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { $t: () => l, Fn: () => a, OO: () => f, V0: () => c, qb: () => m, zK: () => d });
    var n2 = r2(328), s2 = r2(8032), i2 = r2(3352), o2 = r2(278);
    function a(t3) {
      return new u(t3);
    }
    class u {
      constructor(t3) {
        this.readMaxBytes = t3, this.header = new Uint8Array(5), this.headerView = new DataView(this.header.buffer), this.buf = [];
      }
      get byteLength() {
        return this.buf.reduce((t3, e3) => t3 + e3.byteLength, 0);
      }
      decode(t3) {
        this.buf.push(t3);
        const e3 = [];
        for (; ; ) {
          let t4 = this.pop();
          if (!t4) break;
          e3.push(t4);
        }
        return e3;
      }
      pop() {
        if ((this.env || (this.env = this.head(), this.env)) && this.cons(this.env.data)) {
          const t3 = this.env;
          return this.env = void 0, t3;
        }
      }
      head() {
        if (!this.cons(this.header)) return;
        const t3 = this.headerView.getUint8(0), e3 = this.headerView.getUint32(1);
        return (0, o2.kk)(this.readMaxBytes, e3, true), { flags: t3, data: new Uint8Array(e3) };
      }
      cons(t3) {
        const e3 = t3.byteLength;
        if (this.byteLength < e3) return false;
        let r3 = 0;
        for (; r3 < e3; ) {
          const n3 = this.buf.shift();
          n3.byteLength > e3 - r3 ? (t3.set(n3.subarray(0, e3 - r3), r3), this.buf.unshift(n3.subarray(e3 - r3)), r3 += e3 - r3) : (t3.set(n3, r3), r3 += n3.byteLength);
        }
        return true;
      }
    }
    function c(t3) {
      let e3;
      const r3 = a(4294967295);
      return new ReadableStream({ start() {
        e3 = t3.getReader();
      }, async pull(t4) {
        let i3 = false;
        for (; !i3; ) {
          const o3 = await e3.read();
          if (o3.done) r3.byteLength > 0 && t4.error(new n2.T("protocol error: incomplete envelope", s2.C.InvalidArgument)), t4.close();
          else for (const e4 of r3.decode(o3.value)) t4.enqueue(e4), i3 = true;
        }
      } });
    }
    async function l(t3, e3, r3) {
      let { flags: o3, data: a2 } = t3;
      if ((o3 & i2.y) === i2.y) throw new n2.T("invalid envelope, already compressed", s2.C.Internal);
      return e3 && a2.byteLength >= r3 && (a2 = await e3.compress(a2), o3 |= i2.y), { data: a2, flags: o3 };
    }
    async function m(t3, e3, r3) {
      let { flags: o3, data: a2 } = t3;
      if ((o3 & i2.y) === i2.y) {
        if (!e3) throw new n2.T("received compressed envelope, but do not know how to decompress", s2.C.Internal);
        a2 = await e3.decompress(a2, r3), o3 ^= i2.y;
      }
      return { data: a2, flags: o3 };
    }
    function d(t3, e3) {
      const r3 = new Uint8Array(e3.length + 5);
      r3.set(e3, 5);
      const n3 = new DataView(r3.buffer, r3.byteOffset, r3.byteLength);
      return n3.setUint8(0, t3), n3.setUint32(1, e3.length), r3;
    }
    function f(...t3) {
      const e3 = t3.reduce((t4, e4) => t4 + e4.data.length + 5, 0), r3 = new Uint8Array(e3), n3 = new DataView(r3.buffer);
      let s3 = 0;
      for (const e4 of t3) n3.setUint8(s3, e4.flags), n3.setUint32(s3 + 1, e4.data.length), r3.set(e4.data, s3 + 5), s3 += e4.data.length + 5;
      return r3;
    }
  }