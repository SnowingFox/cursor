// @recovered-by cursor-re
// artifact: app/extensions/cursor-browser-automation/dist/928.js sha256:e04ed350b40bd579ab3a39967750106d673508f05e9f3a77bfeb2f4eca08d90f
// module: 6417 range:143528..147235
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6417: (e) => {
  "use strict";
  e.exports = function(e2, t) {
    var r, n, a, i, o, s, f, l, h, d, u, c, _, v, w, g, b, p, m, k, y, x, A, E, I;
    r = e2.state, n = e2.next_in, E = e2.input, a = n + (e2.avail_in - 5), i = e2.next_out, I = e2.output, o = i - (t - e2.avail_out), s = i + (e2.avail_out - 257), f = r.dmax, l = r.wsize, h = r.whave, d = r.wnext, u = r.window, c = r.hold, _ = r.bits, v = r.lencode, w = r.distcode, g = (1 << r.lenbits) - 1, b = (1 << r.distbits) - 1;
    e: do {
      _ < 15 && (c += E[n++] << _, _ += 8, c += E[n++] << _, _ += 8), p = v[c & g];
      t: for (; ; ) {
        if (c >>>= m = p >>> 24, _ -= m, 0 === (m = p >>> 16 & 255)) I[i++] = 65535 & p;
        else {
          if (!(16 & m)) {
            if (64 & m) {
              if (32 & m) {
                r.mode = 12;
                break e;
              }
              e2.msg = "invalid literal/length code", r.mode = 30;
              break e;
            }
            p = v[(65535 & p) + (c & (1 << m) - 1)];
            continue t;
          }
          for (k = 65535 & p, (m &= 15) && (_ < m && (c += E[n++] << _, _ += 8), k += c & (1 << m) - 1, c >>>= m, _ -= m), _ < 15 && (c += E[n++] << _, _ += 8, c += E[n++] << _, _ += 8), p = w[c & b]; ; ) {
            if (c >>>= m = p >>> 24, _ -= m, 16 & (m = p >>> 16 & 255)) {
              if (y = 65535 & p, _ < (m &= 15) && (c += E[n++] << _, (_ += 8) < m && (c += E[n++] << _, _ += 8)), (y += c & (1 << m) - 1) > f) {
                e2.msg = "invalid distance too far back", r.mode = 30;
                break e;
              }
              if (c >>>= m, _ -= m, y > (m = i - o)) {
                if ((m = y - m) > h && r.sane) {
                  e2.msg = "invalid distance too far back", r.mode = 30;
                  break e;
                }
                if (x = 0, A = u, 0 === d) {
                  if (x += l - m, m < k) {
                    k -= m;
                    do {
                      I[i++] = u[x++];
                    } while (--m);
                    x = i - y, A = I;
                  }
                } else if (d < m) {
                  if (x += l + d - m, (m -= d) < k) {
                    k -= m;
                    do {
                      I[i++] = u[x++];
                    } while (--m);
                    if (x = 0, d < k) {
                      k -= m = d;
                      do {
                        I[i++] = u[x++];
                      } while (--m);
                      x = i - y, A = I;
                    }
                  }
                } else if (x += d - m, m < k) {
                  k -= m;
                  do {
                    I[i++] = u[x++];
                  } while (--m);
                  x = i - y, A = I;
                }
                for (; k > 2; ) I[i++] = A[x++], I[i++] = A[x++], I[i++] = A[x++], k -= 3;
                k && (I[i++] = A[x++], k > 1 && (I[i++] = A[x++]));
              } else {
                x = i - y;
                do {
                  I[i++] = I[x++], I[i++] = I[x++], I[i++] = I[x++], k -= 3;
                } while (k > 2);
                k && (I[i++] = I[x++], k > 1 && (I[i++] = I[x++]));
              }
              break;
            }
            if (64 & m) {
              e2.msg = "invalid distance code", r.mode = 30;
              break e;
            }
            p = w[(65535 & p) + (c & (1 << m) - 1)];
          }
        }
        break;
      }
    } while (n < a && i < s);
    n -= k = _ >> 3, c &= (1 << (_ -= k << 3)) - 1, e2.next_in = n, e2.next_out = i, e2.avail_in = n < a ? a - n + 5 : 5 - (n - a), e2.avail_out = i < s ? s - i + 257 : 257 - (i - s), r.hold = c, r.bits = _;
  };
}