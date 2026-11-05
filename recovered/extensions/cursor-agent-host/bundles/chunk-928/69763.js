// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/928.js sha256:1e34f3da2dac0c414cd02b42da502ab9dbc42f1b80782b7c58dc88e4d9ebf8e0
// module: 69763 range:27180..46345
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
69763: (e, t, r) => {
  "use strict";
  var n = r(77353), a = r(39761), i = r(17515), o = r(6417), s = r(56818), f = -2, l = 12, h = 30;
  function d(e2) {
    return (e2 >>> 24 & 255) + (e2 >>> 8 & 65280) + ((65280 & e2) << 8) + ((255 & e2) << 24);
  }
  function u() {
    this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new n.Buf16(320), this.work = new n.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
  }
  function c(e2) {
    var t2;
    return e2 && e2.state ? (t2 = e2.state, e2.total_in = e2.total_out = t2.total = 0, e2.msg = "", t2.wrap && (e2.adler = 1 & t2.wrap), t2.mode = 1, t2.last = 0, t2.havedict = 0, t2.dmax = 32768, t2.head = null, t2.hold = 0, t2.bits = 0, t2.lencode = t2.lendyn = new n.Buf32(852), t2.distcode = t2.distdyn = new n.Buf32(592), t2.sane = 1, t2.back = -1, 0) : f;
  }
  function _(e2) {
    var t2;
    return e2 && e2.state ? ((t2 = e2.state).wsize = 0, t2.whave = 0, t2.wnext = 0, c(e2)) : f;
  }
  function v(e2, t2) {
    var r2, n2;
    return e2 && e2.state ? (n2 = e2.state, t2 < 0 ? (r2 = 0, t2 = -t2) : (r2 = 1 + (t2 >> 4), t2 < 48 && (t2 &= 15)), t2 && (t2 < 8 || t2 > 15) ? f : (null !== n2.window && n2.wbits !== t2 && (n2.window = null), n2.wrap = r2, n2.wbits = t2, _(e2))) : f;
  }
  function w(e2, t2) {
    var r2, n2;
    return e2 ? (n2 = new u(), e2.state = n2, n2.window = null, 0 !== (r2 = v(e2, t2)) && (e2.state = null), r2) : f;
  }
  var g, b, p = true;
  function m(e2) {
    if (p) {
      var t2;
      for (g = new n.Buf32(512), b = new n.Buf32(32), t2 = 0; t2 < 144; ) e2.lens[t2++] = 8;
      for (; t2 < 256; ) e2.lens[t2++] = 9;
      for (; t2 < 280; ) e2.lens[t2++] = 7;
      for (; t2 < 288; ) e2.lens[t2++] = 8;
      for (s(1, e2.lens, 0, 288, g, 0, e2.work, { bits: 9 }), t2 = 0; t2 < 32; ) e2.lens[t2++] = 5;
      s(2, e2.lens, 0, 32, b, 0, e2.work, { bits: 5 }), p = false;
    }
    e2.lencode = g, e2.lenbits = 9, e2.distcode = b, e2.distbits = 5;
  }
  function k(e2, t2, r2, a2) {
    var i2, o2 = e2.state;
    return null === o2.window && (o2.wsize = 1 << o2.wbits, o2.wnext = 0, o2.whave = 0, o2.window = new n.Buf8(o2.wsize)), a2 >= o2.wsize ? (n.arraySet(o2.window, t2, r2 - o2.wsize, o2.wsize, 0), o2.wnext = 0, o2.whave = o2.wsize) : ((i2 = o2.wsize - o2.wnext) > a2 && (i2 = a2), n.arraySet(o2.window, t2, r2 - a2, i2, o2.wnext), (a2 -= i2) ? (n.arraySet(o2.window, t2, r2 - a2, a2, 0), o2.wnext = a2, o2.whave = o2.wsize) : (o2.wnext += i2, o2.wnext === o2.wsize && (o2.wnext = 0), o2.whave < o2.wsize && (o2.whave += i2))), 0;
  }
  t.inflateReset = _, t.inflateReset2 = v, t.inflateResetKeep = c, t.inflateInit = function(e2) {
    return w(e2, 15);
  }, t.inflateInit2 = w, t.inflate = function(e2, t2) {
    var r2, u2, c2, _2, v2, w2, g2, b2, p2, y, x, A, E, I, B, U, z, D, S, M, F, C, N, O, L = 0, Z = new n.Buf8(4), R = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    if (!e2 || !e2.state || !e2.output || !e2.input && 0 !== e2.avail_in) return f;
    (r2 = e2.state).mode === l && (r2.mode = 13), v2 = e2.next_out, c2 = e2.output, g2 = e2.avail_out, _2 = e2.next_in, u2 = e2.input, w2 = e2.avail_in, b2 = r2.hold, p2 = r2.bits, y = w2, x = g2, C = 0;
    e: for (; ; ) switch (r2.mode) {
      case 1:
        if (0 === r2.wrap) {
          r2.mode = 13;
          break;
        }
        for (; p2 < 16; ) {
          if (0 === w2) break e;
          w2--, b2 += u2[_2++] << p2, p2 += 8;
        }
        if (2 & r2.wrap && 35615 === b2) {
          r2.check = 0, Z[0] = 255 & b2, Z[1] = b2 >>> 8 & 255, r2.check = i(r2.check, Z, 2, 0), b2 = 0, p2 = 0, r2.mode = 2;
          break;
        }
        if (r2.flags = 0, r2.head && (r2.head.done = false), !(1 & r2.wrap) || (((255 & b2) << 8) + (b2 >> 8)) % 31) {
          e2.msg = "incorrect header check", r2.mode = h;
          break;
        }
        if (8 != (15 & b2)) {
          e2.msg = "unknown compression method", r2.mode = h;
          break;
        }
        if (p2 -= 4, F = 8 + (15 & (b2 >>>= 4)), 0 === r2.wbits) r2.wbits = F;
        else if (F > r2.wbits) {
          e2.msg = "invalid window size", r2.mode = h;
          break;
        }
        r2.dmax = 1 << F, e2.adler = r2.check = 1, r2.mode = 512 & b2 ? 10 : l, b2 = 0, p2 = 0;
        break;
      case 2:
        for (; p2 < 16; ) {
          if (0 === w2) break e;
          w2--, b2 += u2[_2++] << p2, p2 += 8;
        }
        if (r2.flags = b2, 8 != (255 & r2.flags)) {
          e2.msg = "unknown compression method", r2.mode = h;
          break;
        }
        if (57344 & r2.flags) {
          e2.msg = "unknown header flags set", r2.mode = h;
          break;
        }
        r2.head && (r2.head.text = b2 >> 8 & 1), 512 & r2.flags && (Z[0] = 255 & b2, Z[1] = b2 >>> 8 & 255, r2.check = i(r2.check, Z, 2, 0)), b2 = 0, p2 = 0, r2.mode = 3;
      case 3:
        for (; p2 < 32; ) {
          if (0 === w2) break e;
          w2--, b2 += u2[_2++] << p2, p2 += 8;
        }
        r2.head && (r2.head.time = b2), 512 & r2.flags && (Z[0] = 255 & b2, Z[1] = b2 >>> 8 & 255, Z[2] = b2 >>> 16 & 255, Z[3] = b2 >>> 24 & 255, r2.check = i(r2.check, Z, 4, 0)), b2 = 0, p2 = 0, r2.mode = 4;
      case 4:
        for (; p2 < 16; ) {
          if (0 === w2) break e;
          w2--, b2 += u2[_2++] << p2, p2 += 8;
        }
        r2.head && (r2.head.xflags = 255 & b2, r2.head.os = b2 >> 8), 512 & r2.flags && (Z[0] = 255 & b2, Z[1] = b2 >>> 8 & 255, r2.check = i(r2.check, Z, 2, 0)), b2 = 0, p2 = 0, r2.mode = 5;
      case 5:
        if (1024 & r2.flags) {
          for (; p2 < 16; ) {
            if (0 === w2) break e;
            w2--, b2 += u2[_2++] << p2, p2 += 8;
          }
          r2.length = b2, r2.head && (r2.head.extra_len = b2), 512 & r2.flags && (Z[0] = 255 & b2, Z[1] = b2 >>> 8 & 255, r2.check = i(r2.check, Z, 2, 0)), b2 = 0, p2 = 0;
        } else r2.head && (r2.head.extra = null);
        r2.mode = 6;
      case 6:
        if (1024 & r2.flags && ((A = r2.length) > w2 && (A = w2), A && (r2.head && (F = r2.head.extra_len - r2.length, r2.head.extra || (r2.head.extra = new Array(r2.head.extra_len)), n.arraySet(r2.head.extra, u2, _2, A, F)), 512 & r2.flags && (r2.check = i(r2.check, u2, A, _2)), w2 -= A, _2 += A, r2.length -= A), r2.length)) break e;
        r2.length = 0, r2.mode = 7;
      case 7:
        if (2048 & r2.flags) {
          if (0 === w2) break e;
          A = 0;
          do {
            F = u2[_2 + A++], r2.head && F && r2.length < 65536 && (r2.head.name += String.fromCharCode(F));
          } while (F && A < w2);
          if (512 & r2.flags && (r2.check = i(r2.check, u2, A, _2)), w2 -= A, _2 += A, F) break e;
        } else r2.head && (r2.head.name = null);
        r2.length = 0, r2.mode = 8;
      case 8:
        if (4096 & r2.flags) {
          if (0 === w2) break e;
          A = 0;
          do {
            F = u2[_2 + A++], r2.head && F && r2.length < 65536 && (r2.head.comment += String.fromCharCode(F));
          } while (F && A < w2);
          if (512 & r2.flags && (r2.check = i(r2.check, u2, A, _2)), w2 -= A, _2 += A, F) break e;
        } else r2.head && (r2.head.comment = null);
        r2.mode = 9;
      case 9:
        if (512 & r2.flags) {
          for (; p2 < 16; ) {
            if (0 === w2) break e;
            w2--, b2 += u2[_2++] << p2, p2 += 8;
          }
          if (b2 !== (65535 & r2.check)) {
            e2.msg = "header crc mismatch", r2.mode = h;
            break;
          }
          b2 = 0, p2 = 0;
        }
        r2.head && (r2.head.hcrc = r2.flags >> 9 & 1, r2.head.done = true), e2.adler = r2.check = 0, r2.mode = l;
        break;
      case 10:
        for (; p2 < 32; ) {
          if (0 === w2) break e;
          w2--, b2 += u2[_2++] << p2, p2 += 8;
        }
        e2.adler = r2.check = d(b2), b2 = 0, p2 = 0, r2.mode = 11;
      case 11:
        if (0 === r2.havedict) return e2.next_out = v2, e2.avail_out = g2, e2.next_in = _2, e2.avail_in = w2, r2.hold = b2, r2.bits = p2, 2;
        e2.adler = r2.check = 1, r2.mode = l;
      case l:
        if (5 === t2 || 6 === t2) break e;
      case 13:
        if (r2.last) {
          b2 >>>= 7 & p2, p2 -= 7 & p2, r2.mode = 27;
          break;
        }
        for (; p2 < 3; ) {
          if (0 === w2) break e;
          w2--, b2 += u2[_2++] << p2, p2 += 8;
        }
        switch (r2.last = 1 & b2, p2 -= 1, 3 & (b2 >>>= 1)) {
          case 0:
            r2.mode = 14;
            break;
          case 1:
            if (m(r2), r2.mode = 20, 6 === t2) {
              b2 >>>= 2, p2 -= 2;
              break e;
            }
            break;
          case 2:
            r2.mode = 17;
            break;
          case 3:
            e2.msg = "invalid block type", r2.mode = h;
        }
        b2 >>>= 2, p2 -= 2;
        break;
      case 14:
        for (b2 >>>= 7 & p2, p2 -= 7 & p2; p2 < 32; ) {
          if (0 === w2) break e;
          w2--, b2 += u2[_2++] << p2, p2 += 8;
        }
        if ((65535 & b2) != (b2 >>> 16 ^ 65535)) {
          e2.msg = "invalid stored block lengths", r2.mode = h;
          break;
        }
        if (r2.length = 65535 & b2, b2 = 0, p2 = 0, r2.mode = 15, 6 === t2) break e;
      case 15:
        r2.mode = 16;
      case 16:
        if (A = r2.length) {
          if (A > w2 && (A = w2), A > g2 && (A = g2), 0 === A) break e;
          n.arraySet(c2, u2, _2, A, v2), w2 -= A, _2 += A, g2 -= A, v2 += A, r2.length -= A;
          break;
        }
        r2.mode = l;
        break;
      case 17:
        for (; p2 < 14; ) {
          if (0 === w2) break e;
          w2--, b2 += u2[_2++] << p2, p2 += 8;
        }
        if (r2.nlen = 257 + (31 & b2), b2 >>>= 5, p2 -= 5, r2.ndist = 1 + (31 & b2), b2 >>>= 5, p2 -= 5, r2.ncode = 4 + (15 & b2), b2 >>>= 4, p2 -= 4, r2.nlen > 286 || r2.ndist > 30) {
          e2.msg = "too many length or distance symbols", r2.mode = h;
          break;
        }
        r2.have = 0, r2.mode = 18;
      case 18:
        for (; r2.have < r2.ncode; ) {
          for (; p2 < 3; ) {
            if (0 === w2) break e;
            w2--, b2 += u2[_2++] << p2, p2 += 8;
          }
          r2.lens[R[r2.have++]] = 7 & b2, b2 >>>= 3, p2 -= 3;
        }
        for (; r2.have < 19; ) r2.lens[R[r2.have++]] = 0;
        if (r2.lencode = r2.lendyn, r2.lenbits = 7, N = { bits: r2.lenbits }, C = s(0, r2.lens, 0, 19, r2.lencode, 0, r2.work, N), r2.lenbits = N.bits, C) {
          e2.msg = "invalid code lengths set", r2.mode = h;
          break;
        }
        r2.have = 0, r2.mode = 19;
      case 19:
        for (; r2.have < r2.nlen + r2.ndist; ) {
          for (; U = (L = r2.lencode[b2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, z = 65535 & L, !((B = L >>> 24) <= p2); ) {
            if (0 === w2) break e;
            w2--, b2 += u2[_2++] << p2, p2 += 8;
          }
          if (z < 16) b2 >>>= B, p2 -= B, r2.lens[r2.have++] = z;
          else {
            if (16 === z) {
              for (O = B + 2; p2 < O; ) {
                if (0 === w2) break e;
                w2--, b2 += u2[_2++] << p2, p2 += 8;
              }
              if (b2 >>>= B, p2 -= B, 0 === r2.have) {
                e2.msg = "invalid bit length repeat", r2.mode = h;
                break;
              }
              F = r2.lens[r2.have - 1], A = 3 + (3 & b2), b2 >>>= 2, p2 -= 2;
            } else if (17 === z) {
              for (O = B + 3; p2 < O; ) {
                if (0 === w2) break e;
                w2--, b2 += u2[_2++] << p2, p2 += 8;
              }
              p2 -= B, F = 0, A = 3 + (7 & (b2 >>>= B)), b2 >>>= 3, p2 -= 3;
            } else {
              for (O = B + 7; p2 < O; ) {
                if (0 === w2) break e;
                w2--, b2 += u2[_2++] << p2, p2 += 8;
              }
              p2 -= B, F = 0, A = 11 + (127 & (b2 >>>= B)), b2 >>>= 7, p2 -= 7;
            }
            if (r2.have + A > r2.nlen + r2.ndist) {
              e2.msg = "invalid bit length repeat", r2.mode = h;
              break;
            }
            for (; A--; ) r2.lens[r2.have++] = F;
          }
        }
        if (r2.mode === h) break;
        if (0 === r2.lens[256]) {
          e2.msg = "invalid code -- missing end-of-block", r2.mode = h;
          break;
        }
        if (r2.lenbits = 9, N = { bits: r2.lenbits }, C = s(1, r2.lens, 0, r2.nlen, r2.lencode, 0, r2.work, N), r2.lenbits = N.bits, C) {
          e2.msg = "invalid literal/lengths set", r2.mode = h;
          break;
        }
        if (r2.distbits = 6, r2.distcode = r2.distdyn, N = { bits: r2.distbits }, C = s(2, r2.lens, r2.nlen, r2.ndist, r2.distcode, 0, r2.work, N), r2.distbits = N.bits, C) {
          e2.msg = "invalid distances set", r2.mode = h;
          break;
        }
        if (r2.mode = 20, 6 === t2) break e;
      case 20:
        r2.mode = 21;
      case 21:
        if (w2 >= 6 && g2 >= 258) {
          e2.next_out = v2, e2.avail_out = g2, e2.next_in = _2, e2.avail_in = w2, r2.hold = b2, r2.bits = p2, o(e2, x), v2 = e2.next_out, c2 = e2.output, g2 = e2.avail_out, _2 = e2.next_in, u2 = e2.input, w2 = e2.avail_in, b2 = r2.hold, p2 = r2.bits, r2.mode === l && (r2.back = -1);
          break;
        }
        for (r2.back = 0; U = (L = r2.lencode[b2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, z = 65535 & L, !((B = L >>> 24) <= p2); ) {
          if (0 === w2) break e;
          w2--, b2 += u2[_2++] << p2, p2 += 8;
        }
        if (U && !(240 & U)) {
          for (D = B, S = U, M = z; U = (L = r2.lencode[M + ((b2 & (1 << D + S) - 1) >> D)]) >>> 16 & 255, z = 65535 & L, !(D + (B = L >>> 24) <= p2); ) {
            if (0 === w2) break e;
            w2--, b2 += u2[_2++] << p2, p2 += 8;
          }
          b2 >>>= D, p2 -= D, r2.back += D;
        }
        if (b2 >>>= B, p2 -= B, r2.back += B, r2.length = z, 0 === U) {
          r2.mode = 26;
          break;
        }
        if (32 & U) {
          r2.back = -1, r2.mode = l;
          break;
        }
        if (64 & U) {
          e2.msg = "invalid literal/length code", r2.mode = h;
          break;
        }
        r2.extra = 15 & U, r2.mode = 22;
      case 22:
        if (r2.extra) {
          for (O = r2.extra; p2 < O; ) {
            if (0 === w2) break e;
            w2--, b2 += u2[_2++] << p2, p2 += 8;
          }
          r2.length += b2 & (1 << r2.extra) - 1, b2 >>>= r2.extra, p2 -= r2.extra, r2.back += r2.extra;
        }
        r2.was = r2.length, r2.mode = 23;
      case 23:
        for (; U = (L = r2.distcode[b2 & (1 << r2.distbits) - 1]) >>> 16 & 255, z = 65535 & L, !((B = L >>> 24) <= p2); ) {
          if (0 === w2) break e;
          w2--, b2 += u2[_2++] << p2, p2 += 8;
        }
        if (!(240 & U)) {
          for (D = B, S = U, M = z; U = (L = r2.distcode[M + ((b2 & (1 << D + S) - 1) >> D)]) >>> 16 & 255, z = 65535 & L, !(D + (B = L >>> 24) <= p2); ) {
            if (0 === w2) break e;
            w2--, b2 += u2[_2++] << p2, p2 += 8;
          }
          b2 >>>= D, p2 -= D, r2.back += D;
        }
        if (b2 >>>= B, p2 -= B, r2.back += B, 64 & U) {
          e2.msg = "invalid distance code", r2.mode = h;
          break;
        }
        r2.offset = z, r2.extra = 15 & U, r2.mode = 24;
      case 24:
        if (r2.extra) {
          for (O = r2.extra; p2 < O; ) {
            if (0 === w2) break e;
            w2--, b2 += u2[_2++] << p2, p2 += 8;
          }
          r2.offset += b2 & (1 << r2.extra) - 1, b2 >>>= r2.extra, p2 -= r2.extra, r2.back += r2.extra;
        }
        if (r2.offset > r2.dmax) {
          e2.msg = "invalid distance too far back", r2.mode = h;
          break;
        }
        r2.mode = 25;
      case 25:
        if (0 === g2) break e;
        if (A = x - g2, r2.offset > A) {
          if ((A = r2.offset - A) > r2.whave && r2.sane) {
            e2.msg = "invalid distance too far back", r2.mode = h;
            break;
          }
          A > r2.wnext ? (A -= r2.wnext, E = r2.wsize - A) : E = r2.wnext - A, A > r2.length && (A = r2.length), I = r2.window;
        } else I = c2, E = v2 - r2.offset, A = r2.length;
        A > g2 && (A = g2), g2 -= A, r2.length -= A;
        do {
          c2[v2++] = I[E++];
        } while (--A);
        0 === r2.length && (r2.mode = 21);
        break;
      case 26:
        if (0 === g2) break e;
        c2[v2++] = r2.length, g2--, r2.mode = 21;
        break;
      case 27:
        if (r2.wrap) {
          for (; p2 < 32; ) {
            if (0 === w2) break e;
            w2--, b2 |= u2[_2++] << p2, p2 += 8;
          }
          if (x -= g2, e2.total_out += x, r2.total += x, x && (e2.adler = r2.check = r2.flags ? i(r2.check, c2, x, v2 - x) : a(r2.check, c2, x, v2 - x)), x = g2, (r2.flags ? b2 : d(b2)) !== r2.check) {
            e2.msg = "incorrect data check", r2.mode = h;
            break;
          }
          b2 = 0, p2 = 0;
        }
        r2.mode = 28;
      case 28:
        if (r2.wrap && r2.flags) {
          for (; p2 < 32; ) {
            if (0 === w2) break e;
            w2--, b2 += u2[_2++] << p2, p2 += 8;
          }
          if (b2 !== (4294967295 & r2.total)) {
            e2.msg = "incorrect length check", r2.mode = h;
            break;
          }
          b2 = 0, p2 = 0;
        }
        r2.mode = 29;
      case 29:
        C = 1;
        break e;
      case h:
        C = -3;
        break e;
      case 31:
        return -4;
      default:
        return f;
    }
    return e2.next_out = v2, e2.avail_out = g2, e2.next_in = _2, e2.avail_in = w2, r2.hold = b2, r2.bits = p2, (r2.wsize || x !== e2.avail_out && r2.mode < h && (r2.mode < 27 || 4 !== t2)) && k(e2, e2.output, e2.next_out, x - e2.avail_out) ? (r2.mode = 31, -4) : (y -= e2.avail_in, x -= e2.avail_out, e2.total_in += y, e2.total_out += x, r2.total += x, r2.wrap && x && (e2.adler = r2.check = r2.flags ? i(r2.check, c2, x, e2.next_out - x) : a(r2.check, c2, x, e2.next_out - x)), e2.data_type = r2.bits + (r2.last ? 64 : 0) + (r2.mode === l ? 128 : 0) + (20 === r2.mode || 15 === r2.mode ? 256 : 0), (0 === y && 0 === x || 4 === t2) && 0 === C && (C = -5), C);
  }, t.inflateEnd = function(e2) {
    if (!e2 || !e2.state) return f;
    var t2 = e2.state;
    return t2.window && (t2.window = null), e2.state = null, 0;
  }, t.inflateGetHeader = function(e2, t2) {
    var r2;
    return e2 && e2.state && 2 & (r2 = e2.state).wrap ? (r2.head = t2, t2.done = false, 0) : f;
  }, t.inflateSetDictionary = function(e2, t2) {
    var r2, n2 = t2.length;
    return e2 && e2.state ? 0 !== (r2 = e2.state).wrap && 11 !== r2.mode ? f : 11 === r2.mode && a(1, t2, n2, 0) !== r2.check ? -3 : k(e2, t2, n2, n2) ? (r2.mode = 31, -4) : (r2.havedict = 1, 0) : f;
  }, t.inflateInfo = "pako inflate (from Nodeca project)";
}