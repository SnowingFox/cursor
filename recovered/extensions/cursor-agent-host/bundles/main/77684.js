// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 77684 range:11567598..11570853
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
77684: (e, t, r) => {
    "use strict";
    r.d(t, { $t: () => u, Fn: () => a, OO: () => m, V0: () => l, qb: () => d, zK: () => p });
    var n = r(40328), s = r(8032), o = r(13352), i = r(10278);
    function a(e2) {
      return new c(e2);
    }
    class c {
      constructor(e2) {
        this.readMaxBytes = e2, this.header = new Uint8Array(5), this.headerView = new DataView(this.header.buffer), this.buf = [];
      }
      get byteLength() {
        return this.buf.reduce((e2, t2) => e2 + t2.byteLength, 0);
      }
      decode(e2) {
        this.buf.push(e2);
        const t2 = [];
        for (; ; ) {
          let e3 = this.pop();
          if (!e3) break;
          t2.push(e3);
        }
        return t2;
      }
      pop() {
        if ((this.env || (this.env = this.head(), this.env)) && this.cons(this.env.data)) {
          const e2 = this.env;
          return this.env = void 0, e2;
        }
      }
      head() {
        if (!this.cons(this.header)) return;
        const e2 = this.headerView.getUint8(0), t2 = this.headerView.getUint32(1);
        return (0, i.kk)(this.readMaxBytes, t2, true), { flags: e2, data: new Uint8Array(t2) };
      }
      cons(e2) {
        const t2 = e2.byteLength;
        if (this.byteLength < t2) return false;
        let r2 = 0;
        for (; r2 < t2; ) {
          const n2 = this.buf.shift();
          n2.byteLength > t2 - r2 ? (e2.set(n2.subarray(0, t2 - r2), r2), this.buf.unshift(n2.subarray(t2 - r2)), r2 += t2 - r2) : (e2.set(n2, r2), r2 += n2.byteLength);
        }
        return true;
      }
    }
    function l(e2) {
      let t2;
      const r2 = a(4294967295);
      return new ReadableStream({ start() {
        t2 = e2.getReader();
      }, async pull(e3) {
        let o2 = false;
        for (; !o2; ) {
          const i2 = await t2.read();
          if (i2.done) r2.byteLength > 0 && e3.error(new n.T("protocol error: incomplete envelope", s.C.InvalidArgument)), e3.close();
          else for (const t3 of r2.decode(i2.value)) e3.enqueue(t3), o2 = true;
        }
      } });
    }
    async function u(e2, t2, r2) {
      let { flags: i2, data: a2 } = e2;
      if ((i2 & o.y) === o.y) throw new n.T("invalid envelope, already compressed", s.C.Internal);
      return t2 && a2.byteLength >= r2 && (a2 = await t2.compress(a2), i2 |= o.y), { data: a2, flags: i2 };
    }
    async function d(e2, t2, r2) {
      let { flags: i2, data: a2 } = e2;
      if ((i2 & o.y) === o.y) {
        if (!t2) throw new n.T("received compressed envelope, but do not know how to decompress", s.C.Internal);
        a2 = await t2.decompress(a2, r2), i2 ^= o.y;
      }
      return { data: a2, flags: i2 };
    }
    function p(e2, t2) {
      const r2 = new Uint8Array(t2.length + 5);
      r2.set(t2, 5);
      const n2 = new DataView(r2.buffer, r2.byteOffset, r2.byteLength);
      return n2.setUint8(0, e2), n2.setUint32(1, t2.length), r2;
    }
    function m(...e2) {
      const t2 = e2.reduce((e3, t3) => e3 + t3.data.length + 5, 0), r2 = new Uint8Array(t2), n2 = new DataView(r2.buffer);
      let s2 = 0;
      for (const t3 of e2) n2.setUint8(s2, t3.flags), n2.setUint32(s2 + 1, t3.data.length), r2.set(t3.data, s2 + 5), s2 += t3.data.length + 5;
      return r2;
    }
  }