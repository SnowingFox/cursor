// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 60153 range:4720977..4734723
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
60153: (e, t, r) => {
    const { createReadStream: n } = r(73024), { Writable: s } = r(57075), { toUint8Array: o, concatBytes: i } = r(96851), { createHash: a, createHmac: c } = r(77598), l = r(38522);
    async function u(e2, t2, r2 = 1048576) {
      const n2 = e2.size;
      let s2 = 0;
      for (; s2 < n2; ) {
        const o2 = e2.slice(s2, Math.min(n2, s2 + r2));
        t2(new Uint8Array(await o2.arrayBuffer())), s2 += o2.size;
      }
    }
    class d extends s {
      hash;
      constructor(e2, t2) {
        super(t2), this.hash = e2;
      }
      _write(e2, t2, r2) {
        try {
          this.hash.update(o(e2));
        } catch (e3) {
          return r2(e3);
        }
        r2();
      }
    }
    const p = (e2) => "string" == typeof e2.path;
    class m {
      digestLength = 16;
      state = Uint32Array.from(h);
      writeBuffer = new DataView(new ArrayBuffer(64));
      bufferLength = 0;
      bytesHashed = 0;
      update(e2) {
        const t2 = o(e2);
        let r2 = 0, n2 = t2.byteLength;
        for (this.bytesHashed += n2; n2 > 0; ) this.writeBuffer.setUint8(this.bufferLength++, t2[r2++]), --n2, 64 === this.bufferLength && (w(this.state, this.writeBuffer), this.bufferLength = 0);
      }
      async digest() {
        const e2 = Uint32Array.from(this.state), t2 = new DataView(this.writeBuffer.buffer.slice(0));
        let r2 = this.bufferLength;
        const n2 = 8 * this.bytesHashed;
        if (t2.setUint8(r2++, 128), this.bufferLength % 64 >= 56) {
          for (let e3 = r2; e3 < 64; ++e3) t2.setUint8(e3, 0);
          w(e2, t2), r2 = 0;
        }
        for (let e3 = r2; e3 < 56; ++e3) t2.setUint8(e3, 0);
        t2.setUint32(56, n2 >>> 0, true), t2.setUint32(60, Math.floor(n2 / 2 ** 32), true), w(e2, t2);
        const s2 = new Uint8Array(16), o2 = new DataView(s2.buffer);
        for (let t3 = 0; t3 < 4; ++t3) o2.setUint32(4 * t3, e2[t3], true);
        return s2;
      }
      reset() {
        this.state.set(h), this.writeBuffer = new DataView(new ArrayBuffer(64)), this.bufferLength = 0, this.bytesHashed = 0;
      }
    }
    const h = [1732584193, 4023233417, 2562383102, 271733878], f = 4294967295, g = Uint8Array.of(7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21), y = Array.from({ length: 64 }, (e2, t2) => Math.abs(Math.sin(t2 + 1)) * 2 ** 32 >>> 0);
    function w(e2, t2) {
      let r2 = e2[0], n2 = e2[1], s2 = e2[2], o2 = e2[3];
      for (let e3 = 0; e3 < 64; ++e3) {
        let i2, a2;
        e3 < 16 ? (i2 = n2 & s2 | ~n2 & o2, a2 = e3) : e3 < 32 ? (i2 = o2 & n2 | s2 & ~o2, a2 = (5 * e3 + 1) % 16) : e3 < 48 ? (i2 = n2 ^ s2 ^ o2, a2 = (3 * e3 + 5) % 16) : (i2 = s2 ^ (n2 | ~o2), a2 = 7 * e3 % 16);
        const c2 = t2.getUint32(4 * a2, true), l2 = o2;
        o2 = s2, s2 = n2;
        const u2 = g[4 * (e3 >> 4) + (3 & e3)], d2 = (r2 + i2 & f) + (c2 + y[e3] & f) & f;
        n2 = n2 + ((d2 << u2 | d2 >>> 32 - u2) >>> 0) & f, r2 = l2;
      }
      e2[0] = e2[0] + r2 & f, e2[1] = e2[1] + n2 & f, e2[2] = e2[2] + s2 & f, e2[3] = e2[3] + o2 & f;
    }
    const v = (() => {
      try {
        return a("md5"), true;
      } catch {
        return false;
      }
    })() ? class {
      digestLength = 16;
      hash = a("md5");
      update(e2) {
        this.hash.update(o(e2));
      }
      async digest() {
        const e2 = this.hash.copy().digest();
        return new Uint8Array(e2.buffer, e2.byteOffset, e2.byteLength);
      }
      reset() {
        this.hash = a("md5");
      }
    } : m;
    const _ = new Uint32Array(256);
    for (let e2 = 0; e2 < 256; ++e2) {
      let t2 = e2;
      for (let e3 = 0; e3 < 8; ++e3) t2 = 1 & t2 ? 3988292384 ^ t2 >>> 1 : t2 >>> 1;
      _[e2] = t2 >>> 0;
    }
    const b = 4294967295;
    class S {
      digestLength = 4;
      checksum = b;
      update(e2) {
        for (let t2 = 0; t2 < e2.length; ++t2) this.checksum = this.checksum >>> 8 ^ _[255 & (this.checksum ^ e2[t2])];
      }
      digestSync() {
        return (this.checksum ^ b) >>> 0;
      }
      async digest() {
        const e2 = this.digestSync(), t2 = new Uint8Array(4);
        return new DataView(t2.buffer).setUint32(0, e2, false), t2;
      }
      reset() {
        this.checksum = b;
      }
    }
    const k = "function" == typeof l.crc32 ? l.crc32 : void 0, x = k ? (E = k, class {
      digestLength = 4;
      value = 0;
      update(e2) {
        this.value = E(e2, this.value);
      }
      digestSync() {
        return this.value >>> 0;
      }
      async digest() {
        const e2 = new Uint8Array(4);
        return new DataView(e2.buffer).setUint32(0, this.digestSync(), false), e2;
      }
      reset() {
        this.value = 0;
      }
    }) : S;
    var E;
    const I = 64, T = 2 ** 53 - 1;
    class C {
      digestLength = 32;
      state = Int32Array.from(P);
      w;
      buffer = new Uint8Array(64);
      bufferLength = 0;
      bytesHashed = 0;
      finished = false;
      inner;
      outer;
      constructor(e2) {
        if (e2) {
          const t2 = C.normalizeKey(e2);
          this.inner = new C(), this.outer = new C();
          const { inner: r2, outer: n2 } = this, s2 = new Uint8Array(128);
          for (let e3 = 0; e3 < I; ++e3) s2[e3] = 54 ^ t2[e3], s2[e3 + I] = 92 ^ t2[e3];
          r2.update(s2.subarray(0, I)), n2.update(s2.subarray(I));
        }
      }
      update(e2) {
        if (this.finished) throw new Error("Attempted to update an already finished HMAC.");
        if (this.inner) return void this.inner.update(e2);
        const t2 = o(e2);
        let r2 = 0, { byteLength: n2 } = t2;
        if (this.bytesHashed += n2, 8 * this.bytesHashed > T) throw new Error("Cannot hash more than 2^53 - 1 bits");
        for (; n2 > 0; ) this.buffer[this.bufferLength++] = t2[r2++], n2--, this.bufferLength === I && (this.hashBuffer(), this.bufferLength = 0);
      }
      async digest() {
        const { inner: e2, outer: t2 } = this;
        if (e2 && t2) {
          if (this.finished) throw new Error("Attempted to digest an already finished HMAC.");
          this.finished = true;
          const r2 = e2.digestSync();
          return t2.update(r2), t2.digestSync();
        }
        return this.digestSync();
      }
      reset() {
        this.state = Int32Array.from(P), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0;
      }
      digestSync() {
        const e2 = this.state.slice(), t2 = this.buffer.slice();
        let r2 = this.bufferLength;
        const n2 = 8 * this.bytesHashed, s2 = new DataView(t2.buffer, t2.byteOffset, t2.byteLength);
        if (s2.setUint8(r2++, 128), (r2 - 1) % I >= 56) {
          for (let e3 = r2; e3 < I; ++e3) s2.setUint8(e3, 0);
          this.hashBufferWith(e2, t2), r2 = 0;
        }
        for (let e3 = r2; e3 < 56; ++e3) s2.setUint8(e3, 0);
        s2.setUint32(56, Math.floor(n2 / 4294967296), false), s2.setUint32(60, n2, false), this.hashBufferWith(e2, t2);
        const o2 = new Uint8Array(32);
        for (let t3 = 0; t3 < 8; ++t3) o2[4 * t3] = e2[t3] >>> 24 & 255, o2[4 * t3 + 1] = e2[t3] >>> 16 & 255, o2[4 * t3 + 2] = e2[t3] >>> 8 & 255, o2[4 * t3 + 3] = e2[t3] >>> 0 & 255;
        return o2;
      }
      static normalizeKey(e2) {
        const t2 = o(e2);
        if (t2.byteLength > I) {
          const e3 = new C();
          e3.update(t2);
          const r2 = e3.digestSync(), n2 = new Uint8Array(I);
          return n2.set(r2), n2;
        }
        if (t2.byteLength < I) {
          const e3 = new Uint8Array(I);
          return e3.set(t2), e3;
        }
        return t2;
      }
      hashBuffer() {
        this.hashBufferWith(this.state, this.buffer);
      }
      hashBufferWith(e2, t2) {
        const r2 = this.w ??= new Int32Array(64);
        let n2 = e2[0], s2 = e2[1], o2 = e2[2], i2 = e2[3], a2 = e2[4], c2 = e2[5], l2 = e2[6], u2 = e2[7];
        for (let e3 = 0; e3 < I; ++e3) {
          if (e3 < 16) r2[e3] = (255 & t2[4 * e3]) << 24 | (255 & t2[4 * e3 + 1]) << 16 | (255 & t2[4 * e3 + 2]) << 8 | 255 & t2[4 * e3 + 3];
          else {
            let t3 = r2[e3 - 2];
            const n3 = (t3 >>> 17 | t3 << 15) ^ (t3 >>> 19 | t3 << 13) ^ t3 >>> 10;
            t3 = r2[e3 - 15];
            const s3 = (t3 >>> 7 | t3 << 25) ^ (t3 >>> 18 | t3 << 14) ^ t3 >>> 3;
            r2[e3] = (n3 + r2[e3 - 7] | 0) + (s3 + r2[e3 - 16] | 0);
          }
          const d2 = (((a2 >>> 6 | a2 << 26) ^ (a2 >>> 11 | a2 << 21) ^ (a2 >>> 25 | a2 << 7)) + (a2 & c2 ^ ~a2 & l2) | 0) + (u2 + (A[e3] + r2[e3] | 0) | 0) | 0, p2 = ((n2 >>> 2 | n2 << 30) ^ (n2 >>> 13 | n2 << 19) ^ (n2 >>> 22 | n2 << 10)) + (n2 & s2 ^ n2 & o2 ^ s2 & o2) | 0;
          u2 = l2, l2 = c2, c2 = a2, a2 = i2 + d2 | 0, i2 = o2, o2 = s2, s2 = n2, n2 = d2 + p2 | 0;
        }
        e2[0] += n2, e2[1] += s2, e2[2] += o2, e2[3] += i2, e2[4] += a2, e2[5] += c2, e2[6] += l2, e2[7] += u2;
      }
    }
    const P = new Int32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]), A = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), R = (() => {
      try {
        return a("sha256"), true;
      } catch {
        return false;
      }
    })() ? class {
      digestLength = 32;
      secret;
      hash;
      isHmac;
      finished = false;
      constructor(e2) {
        this.secret = e2, this.isHmac = !!e2, this.hash = this.createHash();
      }
      update(e2) {
        if (this.finished) throw new Error("Attempted to update an already finished hash.");
        this.hash.update(e2);
      }
      async digest() {
        let e2;
        return this.isHmac ? (this.finished = true, e2 = this.hash.digest()) : e2 = this.hash.copy().digest(), new Uint8Array(e2.buffer, e2.byteOffset, e2.byteLength);
      }
      reset() {
        this.hash = this.createHash(), this.finished = false;
      }
      createHash() {
        return this.secret ? c("sha256", "string" == typeof (e2 = this.secret) ? e2 : ArrayBuffer.isView(e2) ? Buffer.from(e2.buffer, e2.byteOffset, e2.byteLength) : Buffer.from(e2)) : a("sha256");
        var e2;
      }
    } : C;
    const { digest: M, sign: J, importKey: O } = globalThis?.crypto?.subtle ?? {}, B = "function" == typeof M && "function" == typeof J && "function" == typeof O ? globalThis.crypto.subtle : void 0;
    t.Crc32 = x, t.Crc32Js = S, t.Crc32Node = x, t.Md5 = v, t.Md5Js = m, t.Md5Node = v, t.Sha256 = R, t.Sha256Js = C, t.Sha256Node = R, t.Sha256WebCrypto = class {
      digestLength = 32;
      secret;
      pending = [];
      pendingBytes = 0;
      fallback;
      finished = false;
      constructor(e2) {
        e2 && (this.secret = o(e2));
      }
      update(e2) {
        if (this.finished) throw new Error("Attempted to update an already finished HMAC.");
        this.fallback ? this.fallback.update(e2) : (this.pending.push(e2.slice()), this.pendingBytes += e2.byteLength, this.pendingBytes >= 8388608 && this.switchToFallback());
      }
      async digest() {
        if (this.fallback) return this.fallback.digest();
        if (this.secret && this.finished) throw new Error("Attempted to digest an already finished HMAC.");
        const e2 = i(this.pending);
        if (B) {
          if (this.secret) {
            this.finished = true;
            const t4 = await B.importKey("raw", this.secret, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]), r2 = await B.sign("HMAC", t4, e2);
            return new Uint8Array(r2);
          }
          const t3 = await B.digest("SHA-256", e2);
          return new Uint8Array(t3);
        }
        const t2 = new C(this.secret);
        return t2.update(e2), t2.digest();
      }
      reset() {
        this.pending = [], this.pendingBytes = 0, this.fallback = void 0, this.finished = false;
      }
      switchToFallback() {
        const e2 = new C(this.secret);
        for (const t2 of this.pending) e2.update(t2);
        this.fallback = e2, this.pending = [], this.pendingBytes = 0;
      }
    }, t.blobHasher = async function(e2, t2) {
      const r2 = new e2();
      return await u(t2, (e3) => {
        r2.update(e3);
      }), r2.digest();
    }, t.blobReader = u, t.fileStreamHasher = (e2, t2) => new Promise((r2, s2) => {
      if (!p(t2)) return void s2(new Error("Unable to calculate hash for non-file streams."));
      const o2 = n(t2.path, { start: t2.start, end: t2.end }), i2 = new e2(), a2 = new d(i2);
      o2.pipe(a2), o2.on("error", (e3) => {
        a2.end(), s2(e3);
      }), a2.on("error", s2), a2.on("finish", function() {
        i2.digest().then(r2).catch(s2);
      });
    }), t.readableStreamHasher = (e2, t2) => {
      if (null !== t2.readableFlowing) throw new Error("Unable to calculate hash for flowing readable stream");
      const r2 = new e2(), n2 = new d(r2);
      return t2.pipe(n2), new Promise((e3, s2) => {
        t2.on("error", (e4) => {
          n2.end(), s2(e4);
        }), n2.on("error", s2), n2.on("finish", () => {
          r2.digest().then(e3).catch(s2);
        });
      });
    };
  }