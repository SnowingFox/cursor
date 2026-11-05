// @recovered-by cursor-re
// artifact: app/extensions/cursor-browser-automation/dist/928.js sha256:e04ed350b40bd579ab3a39967750106d673508f05e9f3a77bfeb2f4eca08d90f
// module: 2589 range:104493..114438
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2589: (e, t, r) => {
  "use strict";
  var n = r(7353);
  function a(e2) {
    for (var t2 = e2.length; --t2 >= 0; ) e2[t2] = 0;
  }
  var i = 256, o = 286, s = 30, f = 15, l = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], h = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], u = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], c = new Array(576);
  a(c);
  var _ = new Array(60);
  a(_);
  var v = new Array(512);
  a(v);
  var w = new Array(256);
  a(w);
  var g = new Array(29);
  a(g);
  var b, p, m, k = new Array(s);
  function y(e2, t2, r2, n2, a2) {
    this.static_tree = e2, this.extra_bits = t2, this.extra_base = r2, this.elems = n2, this.max_length = a2, this.has_stree = e2 && e2.length;
  }
  function x(e2, t2) {
    this.dyn_tree = e2, this.max_code = 0, this.stat_desc = t2;
  }
  function A(e2) {
    return e2 < 256 ? v[e2] : v[256 + (e2 >>> 7)];
  }
  function E(e2, t2) {
    e2.pending_buf[e2.pending++] = 255 & t2, e2.pending_buf[e2.pending++] = t2 >>> 8 & 255;
  }
  function I(e2, t2, r2) {
    e2.bi_valid > 16 - r2 ? (e2.bi_buf |= t2 << e2.bi_valid & 65535, E(e2, e2.bi_buf), e2.bi_buf = t2 >> 16 - e2.bi_valid, e2.bi_valid += r2 - 16) : (e2.bi_buf |= t2 << e2.bi_valid & 65535, e2.bi_valid += r2);
  }
  function B(e2, t2, r2) {
    I(e2, r2[2 * t2], r2[2 * t2 + 1]);
  }
  function U(e2, t2) {
    var r2 = 0;
    do {
      r2 |= 1 & e2, e2 >>>= 1, r2 <<= 1;
    } while (--t2 > 0);
    return r2 >>> 1;
  }
  function z(e2, t2, r2) {
    var n2, a2, i2 = new Array(16), o2 = 0;
    for (n2 = 1; n2 <= f; n2++) i2[n2] = o2 = o2 + r2[n2 - 1] << 1;
    for (a2 = 0; a2 <= t2; a2++) {
      var s2 = e2[2 * a2 + 1];
      0 !== s2 && (e2[2 * a2] = U(i2[s2]++, s2));
    }
  }
  function D(e2) {
    var t2;
    for (t2 = 0; t2 < o; t2++) e2.dyn_ltree[2 * t2] = 0;
    for (t2 = 0; t2 < s; t2++) e2.dyn_dtree[2 * t2] = 0;
    for (t2 = 0; t2 < 19; t2++) e2.bl_tree[2 * t2] = 0;
    e2.dyn_ltree[512] = 1, e2.opt_len = e2.static_len = 0, e2.last_lit = e2.matches = 0;
  }
  function S(e2) {
    e2.bi_valid > 8 ? E(e2, e2.bi_buf) : e2.bi_valid > 0 && (e2.pending_buf[e2.pending++] = e2.bi_buf), e2.bi_buf = 0, e2.bi_valid = 0;
  }
  function M(e2, t2, r2, n2) {
    var a2 = 2 * t2, i2 = 2 * r2;
    return e2[a2] < e2[i2] || e2[a2] === e2[i2] && n2[t2] <= n2[r2];
  }
  function F(e2, t2, r2) {
    for (var n2 = e2.heap[r2], a2 = r2 << 1; a2 <= e2.heap_len && (a2 < e2.heap_len && M(t2, e2.heap[a2 + 1], e2.heap[a2], e2.depth) && a2++, !M(t2, n2, e2.heap[a2], e2.depth)); ) e2.heap[r2] = e2.heap[a2], r2 = a2, a2 <<= 1;
    e2.heap[r2] = n2;
  }
  function C(e2, t2, r2) {
    var n2, a2, o2, s2, f2 = 0;
    if (0 !== e2.last_lit) do {
      n2 = e2.pending_buf[e2.d_buf + 2 * f2] << 8 | e2.pending_buf[e2.d_buf + 2 * f2 + 1], a2 = e2.pending_buf[e2.l_buf + f2], f2++, 0 === n2 ? B(e2, a2, t2) : (B(e2, (o2 = w[a2]) + i + 1, t2), 0 !== (s2 = l[o2]) && I(e2, a2 -= g[o2], s2), B(e2, o2 = A(--n2), r2), 0 !== (s2 = h[o2]) && I(e2, n2 -= k[o2], s2));
    } while (f2 < e2.last_lit);
    B(e2, 256, t2);
  }
  function N(e2, t2) {
    var r2, n2, a2, i2 = t2.dyn_tree, o2 = t2.stat_desc.static_tree, s2 = t2.stat_desc.has_stree, l2 = t2.stat_desc.elems, h2 = -1;
    for (e2.heap_len = 0, e2.heap_max = 573, r2 = 0; r2 < l2; r2++) 0 !== i2[2 * r2] ? (e2.heap[++e2.heap_len] = h2 = r2, e2.depth[r2] = 0) : i2[2 * r2 + 1] = 0;
    for (; e2.heap_len < 2; ) i2[2 * (a2 = e2.heap[++e2.heap_len] = h2 < 2 ? ++h2 : 0)] = 1, e2.depth[a2] = 0, e2.opt_len--, s2 && (e2.static_len -= o2[2 * a2 + 1]);
    for (t2.max_code = h2, r2 = e2.heap_len >> 1; r2 >= 1; r2--) F(e2, i2, r2);
    a2 = l2;
    do {
      r2 = e2.heap[1], e2.heap[1] = e2.heap[e2.heap_len--], F(e2, i2, 1), n2 = e2.heap[1], e2.heap[--e2.heap_max] = r2, e2.heap[--e2.heap_max] = n2, i2[2 * a2] = i2[2 * r2] + i2[2 * n2], e2.depth[a2] = (e2.depth[r2] >= e2.depth[n2] ? e2.depth[r2] : e2.depth[n2]) + 1, i2[2 * r2 + 1] = i2[2 * n2 + 1] = a2, e2.heap[1] = a2++, F(e2, i2, 1);
    } while (e2.heap_len >= 2);
    e2.heap[--e2.heap_max] = e2.heap[1], (function(e3, t3) {
      var r3, n3, a3, i3, o3, s3, l3 = t3.dyn_tree, h3 = t3.max_code, d2 = t3.stat_desc.static_tree, u2 = t3.stat_desc.has_stree, c2 = t3.stat_desc.extra_bits, _2 = t3.stat_desc.extra_base, v2 = t3.stat_desc.max_length, w2 = 0;
      for (i3 = 0; i3 <= f; i3++) e3.bl_count[i3] = 0;
      for (l3[2 * e3.heap[e3.heap_max] + 1] = 0, r3 = e3.heap_max + 1; r3 < 573; r3++) (i3 = l3[2 * l3[2 * (n3 = e3.heap[r3]) + 1] + 1] + 1) > v2 && (i3 = v2, w2++), l3[2 * n3 + 1] = i3, n3 > h3 || (e3.bl_count[i3]++, o3 = 0, n3 >= _2 && (o3 = c2[n3 - _2]), s3 = l3[2 * n3], e3.opt_len += s3 * (i3 + o3), u2 && (e3.static_len += s3 * (d2[2 * n3 + 1] + o3)));
      if (0 !== w2) {
        do {
          for (i3 = v2 - 1; 0 === e3.bl_count[i3]; ) i3--;
          e3.bl_count[i3]--, e3.bl_count[i3 + 1] += 2, e3.bl_count[v2]--, w2 -= 2;
        } while (w2 > 0);
        for (i3 = v2; 0 !== i3; i3--) for (n3 = e3.bl_count[i3]; 0 !== n3; ) (a3 = e3.heap[--r3]) > h3 || (l3[2 * a3 + 1] !== i3 && (e3.opt_len += (i3 - l3[2 * a3 + 1]) * l3[2 * a3], l3[2 * a3 + 1] = i3), n3--);
      }
    })(e2, t2), z(i2, h2, e2.bl_count);
  }
  function O(e2, t2, r2) {
    var n2, a2, i2 = -1, o2 = t2[1], s2 = 0, f2 = 7, l2 = 4;
    for (0 === o2 && (f2 = 138, l2 = 3), t2[2 * (r2 + 1) + 1] = 65535, n2 = 0; n2 <= r2; n2++) a2 = o2, o2 = t2[2 * (n2 + 1) + 1], ++s2 < f2 && a2 === o2 || (s2 < l2 ? e2.bl_tree[2 * a2] += s2 : 0 !== a2 ? (a2 !== i2 && e2.bl_tree[2 * a2]++, e2.bl_tree[32]++) : s2 <= 10 ? e2.bl_tree[34]++ : e2.bl_tree[36]++, s2 = 0, i2 = a2, 0 === o2 ? (f2 = 138, l2 = 3) : a2 === o2 ? (f2 = 6, l2 = 3) : (f2 = 7, l2 = 4));
  }
  function L(e2, t2, r2) {
    var n2, a2, i2 = -1, o2 = t2[1], s2 = 0, f2 = 7, l2 = 4;
    for (0 === o2 && (f2 = 138, l2 = 3), n2 = 0; n2 <= r2; n2++) if (a2 = o2, o2 = t2[2 * (n2 + 1) + 1], !(++s2 < f2 && a2 === o2)) {
      if (s2 < l2) do {
        B(e2, a2, e2.bl_tree);
      } while (0 !== --s2);
      else 0 !== a2 ? (a2 !== i2 && (B(e2, a2, e2.bl_tree), s2--), B(e2, 16, e2.bl_tree), I(e2, s2 - 3, 2)) : s2 <= 10 ? (B(e2, 17, e2.bl_tree), I(e2, s2 - 3, 3)) : (B(e2, 18, e2.bl_tree), I(e2, s2 - 11, 7));
      s2 = 0, i2 = a2, 0 === o2 ? (f2 = 138, l2 = 3) : a2 === o2 ? (f2 = 6, l2 = 3) : (f2 = 7, l2 = 4);
    }
  }
  a(k);
  var Z = false;
  function R(e2, t2, r2, a2) {
    I(e2, 0 + (a2 ? 1 : 0), 3), (function(e3, t3, r3, a3) {
      S(e3), a3 && (E(e3, r3), E(e3, ~r3)), n.arraySet(e3.pending_buf, e3.window, t3, r3, e3.pending), e3.pending += r3;
    })(e2, t2, r2, true);
  }
  t._tr_init = function(e2) {
    Z || (!(function() {
      var e3, t2, r2, n2, a2, i2 = new Array(16);
      for (r2 = 0, n2 = 0; n2 < 28; n2++) for (g[n2] = r2, e3 = 0; e3 < 1 << l[n2]; e3++) w[r2++] = n2;
      for (w[r2 - 1] = n2, a2 = 0, n2 = 0; n2 < 16; n2++) for (k[n2] = a2, e3 = 0; e3 < 1 << h[n2]; e3++) v[a2++] = n2;
      for (a2 >>= 7; n2 < s; n2++) for (k[n2] = a2 << 7, e3 = 0; e3 < 1 << h[n2] - 7; e3++) v[256 + a2++] = n2;
      for (t2 = 0; t2 <= f; t2++) i2[t2] = 0;
      for (e3 = 0; e3 <= 143; ) c[2 * e3 + 1] = 8, e3++, i2[8]++;
      for (; e3 <= 255; ) c[2 * e3 + 1] = 9, e3++, i2[9]++;
      for (; e3 <= 279; ) c[2 * e3 + 1] = 7, e3++, i2[7]++;
      for (; e3 <= 287; ) c[2 * e3 + 1] = 8, e3++, i2[8]++;
      for (z(c, 287, i2), e3 = 0; e3 < s; e3++) _[2 * e3 + 1] = 5, _[2 * e3] = U(e3, 5);
      b = new y(c, l, 257, o, f), p = new y(_, h, 0, s, f), m = new y(new Array(0), d, 0, 19, 7);
    })(), Z = true), e2.l_desc = new x(e2.dyn_ltree, b), e2.d_desc = new x(e2.dyn_dtree, p), e2.bl_desc = new x(e2.bl_tree, m), e2.bi_buf = 0, e2.bi_valid = 0, D(e2);
  }, t._tr_stored_block = R, t._tr_flush_block = function(e2, t2, r2, n2) {
    var a2, o2, s2 = 0;
    e2.level > 0 ? (2 === e2.strm.data_type && (e2.strm.data_type = (function(e3) {
      var t3, r3 = 4093624447;
      for (t3 = 0; t3 <= 31; t3++, r3 >>>= 1) if (1 & r3 && 0 !== e3.dyn_ltree[2 * t3]) return 0;
      if (0 !== e3.dyn_ltree[18] || 0 !== e3.dyn_ltree[20] || 0 !== e3.dyn_ltree[26]) return 1;
      for (t3 = 32; t3 < i; t3++) if (0 !== e3.dyn_ltree[2 * t3]) return 1;
      return 0;
    })(e2)), N(e2, e2.l_desc), N(e2, e2.d_desc), s2 = (function(e3) {
      var t3;
      for (O(e3, e3.dyn_ltree, e3.l_desc.max_code), O(e3, e3.dyn_dtree, e3.d_desc.max_code), N(e3, e3.bl_desc), t3 = 18; t3 >= 3 && 0 === e3.bl_tree[2 * u[t3] + 1]; t3--) ;
      return e3.opt_len += 3 * (t3 + 1) + 5 + 5 + 4, t3;
    })(e2), a2 = e2.opt_len + 3 + 7 >>> 3, (o2 = e2.static_len + 3 + 7 >>> 3) <= a2 && (a2 = o2)) : a2 = o2 = r2 + 5, r2 + 4 <= a2 && -1 !== t2 ? R(e2, t2, r2, n2) : 4 === e2.strategy || o2 === a2 ? (I(e2, 2 + (n2 ? 1 : 0), 3), C(e2, c, _)) : (I(e2, 4 + (n2 ? 1 : 0), 3), (function(e3, t3, r3, n3) {
      var a3;
      for (I(e3, t3 - 257, 5), I(e3, r3 - 1, 5), I(e3, n3 - 4, 4), a3 = 0; a3 < n3; a3++) I(e3, e3.bl_tree[2 * u[a3] + 1], 3);
      L(e3, e3.dyn_ltree, t3 - 1), L(e3, e3.dyn_dtree, r3 - 1);
    })(e2, e2.l_desc.max_code + 1, e2.d_desc.max_code + 1, s2 + 1), C(e2, e2.dyn_ltree, e2.dyn_dtree)), D(e2), n2 && S(e2);
  }, t._tr_tally = function(e2, t2, r2) {
    return e2.pending_buf[e2.d_buf + 2 * e2.last_lit] = t2 >>> 8 & 255, e2.pending_buf[e2.d_buf + 2 * e2.last_lit + 1] = 255 & t2, e2.pending_buf[e2.l_buf + e2.last_lit] = 255 & r2, e2.last_lit++, 0 === t2 ? e2.dyn_ltree[2 * r2]++ : (e2.matches++, t2--, e2.dyn_ltree[2 * (w[r2] + i + 1)]++, e2.dyn_dtree[2 * A(t2)]++), e2.last_lit === e2.lit_bufsize - 1;
  }, t._tr_align = function(e2) {
    I(e2, 2, 3), B(e2, 256, c), (function(e3) {
      16 === e3.bi_valid ? (E(e3, e3.bi_buf), e3.bi_buf = 0, e3.bi_valid = 0) : e3.bi_valid >= 8 && (e3.pending_buf[e3.pending++] = 255 & e3.bi_buf, e3.bi_buf >>= 8, e3.bi_valid -= 8);
    })(e2);
  };
}