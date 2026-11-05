// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/928.js sha256:1e34f3da2dac0c414cd02b42da502ab9dbc42f1b80782b7c58dc88e4d9ebf8e0
// module: 96095 range:153225..172940
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
96095: (e, t, r) => {
  "use strict";
  var n, a = r(77353), i = r(12589), o = r(39761), s = r(17515), f = r(55534), l = -2, h = 258, d = 262, u = 103, c = 113, _ = 666;
  function v(e2, t2) {
    return e2.msg = f[t2], t2;
  }
  function w(e2) {
    return (e2 << 1) - (e2 > 4 ? 9 : 0);
  }
  function g(e2) {
    for (var t2 = e2.length; --t2 >= 0; ) e2[t2] = 0;
  }
  function b(e2) {
    var t2 = e2.state, r2 = t2.pending;
    r2 > e2.avail_out && (r2 = e2.avail_out), 0 !== r2 && (a.arraySet(e2.output, t2.pending_buf, t2.pending_out, r2, e2.next_out), e2.next_out += r2, t2.pending_out += r2, e2.total_out += r2, e2.avail_out -= r2, t2.pending -= r2, 0 === t2.pending && (t2.pending_out = 0));
  }
  function p(e2, t2) {
    i._tr_flush_block(e2, e2.block_start >= 0 ? e2.block_start : -1, e2.strstart - e2.block_start, t2), e2.block_start = e2.strstart, b(e2.strm);
  }
  function m(e2, t2) {
    e2.pending_buf[e2.pending++] = t2;
  }
  function k(e2, t2) {
    e2.pending_buf[e2.pending++] = t2 >>> 8 & 255, e2.pending_buf[e2.pending++] = 255 & t2;
  }
  function y(e2, t2, r2, n2) {
    var i2 = e2.avail_in;
    return i2 > n2 && (i2 = n2), 0 === i2 ? 0 : (e2.avail_in -= i2, a.arraySet(t2, e2.input, e2.next_in, i2, r2), 1 === e2.state.wrap ? e2.adler = o(e2.adler, t2, i2, r2) : 2 === e2.state.wrap && (e2.adler = s(e2.adler, t2, i2, r2)), e2.next_in += i2, e2.total_in += i2, i2);
  }
  function x(e2, t2) {
    var r2, n2, a2 = e2.max_chain_length, i2 = e2.strstart, o2 = e2.prev_length, s2 = e2.nice_match, f2 = e2.strstart > e2.w_size - d ? e2.strstart - (e2.w_size - d) : 0, l2 = e2.window, u2 = e2.w_mask, c2 = e2.prev, _2 = e2.strstart + h, v2 = l2[i2 + o2 - 1], w2 = l2[i2 + o2];
    e2.prev_length >= e2.good_match && (a2 >>= 2), s2 > e2.lookahead && (s2 = e2.lookahead);
    do {
      if (l2[(r2 = t2) + o2] === w2 && l2[r2 + o2 - 1] === v2 && l2[r2] === l2[i2] && l2[++r2] === l2[i2 + 1]) {
        i2 += 2, r2++;
        do {
        } while (l2[++i2] === l2[++r2] && l2[++i2] === l2[++r2] && l2[++i2] === l2[++r2] && l2[++i2] === l2[++r2] && l2[++i2] === l2[++r2] && l2[++i2] === l2[++r2] && l2[++i2] === l2[++r2] && l2[++i2] === l2[++r2] && i2 < _2);
        if (n2 = h - (_2 - i2), i2 = _2 - h, n2 > o2) {
          if (e2.match_start = t2, o2 = n2, n2 >= s2) break;
          v2 = l2[i2 + o2 - 1], w2 = l2[i2 + o2];
        }
      }
    } while ((t2 = c2[t2 & u2]) > f2 && 0 !== --a2);
    return o2 <= e2.lookahead ? o2 : e2.lookahead;
  }
  function A(e2) {
    var t2, r2, n2, i2, o2, s2 = e2.w_size;
    do {
      if (i2 = e2.window_size - e2.lookahead - e2.strstart, e2.strstart >= s2 + (s2 - d)) {
        a.arraySet(e2.window, e2.window, s2, s2, 0), e2.match_start -= s2, e2.strstart -= s2, e2.block_start -= s2, t2 = r2 = e2.hash_size;
        do {
          n2 = e2.head[--t2], e2.head[t2] = n2 >= s2 ? n2 - s2 : 0;
        } while (--r2);
        t2 = r2 = s2;
        do {
          n2 = e2.prev[--t2], e2.prev[t2] = n2 >= s2 ? n2 - s2 : 0;
        } while (--r2);
        i2 += s2;
      }
      if (0 === e2.strm.avail_in) break;
      if (r2 = y(e2.strm, e2.window, e2.strstart + e2.lookahead, i2), e2.lookahead += r2, e2.lookahead + e2.insert >= 3) for (o2 = e2.strstart - e2.insert, e2.ins_h = e2.window[o2], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[o2 + 1]) & e2.hash_mask; e2.insert && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[o2 + 3 - 1]) & e2.hash_mask, e2.prev[o2 & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = o2, o2++, e2.insert--, !(e2.lookahead + e2.insert < 3)); ) ;
    } while (e2.lookahead < d && 0 !== e2.strm.avail_in);
  }
  function E(e2, t2) {
    for (var r2, n2; ; ) {
      if (e2.lookahead < d) {
        if (A(e2), e2.lookahead < d && 0 === t2) return 1;
        if (0 === e2.lookahead) break;
      }
      if (r2 = 0, e2.lookahead >= 3 && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + 3 - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 !== r2 && e2.strstart - r2 <= e2.w_size - d && (e2.match_length = x(e2, r2)), e2.match_length >= 3) if (n2 = i._tr_tally(e2, e2.strstart - e2.match_start, e2.match_length - 3), e2.lookahead -= e2.match_length, e2.match_length <= e2.max_lazy_match && e2.lookahead >= 3) {
        e2.match_length--;
        do {
          e2.strstart++, e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + 3 - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart;
        } while (0 !== --e2.match_length);
        e2.strstart++;
      } else e2.strstart += e2.match_length, e2.match_length = 0, e2.ins_h = e2.window[e2.strstart], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + 1]) & e2.hash_mask;
      else n2 = i._tr_tally(e2, 0, e2.window[e2.strstart]), e2.lookahead--, e2.strstart++;
      if (n2 && (p(e2, false), 0 === e2.strm.avail_out)) return 1;
    }
    return e2.insert = e2.strstart < 2 ? e2.strstart : 2, 4 === t2 ? (p(e2, true), 0 === e2.strm.avail_out ? 3 : 4) : e2.last_lit && (p(e2, false), 0 === e2.strm.avail_out) ? 1 : 2;
  }
  function I(e2, t2) {
    for (var r2, n2, a2; ; ) {
      if (e2.lookahead < d) {
        if (A(e2), e2.lookahead < d && 0 === t2) return 1;
        if (0 === e2.lookahead) break;
      }
      if (r2 = 0, e2.lookahead >= 3 && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + 3 - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), e2.prev_length = e2.match_length, e2.prev_match = e2.match_start, e2.match_length = 2, 0 !== r2 && e2.prev_length < e2.max_lazy_match && e2.strstart - r2 <= e2.w_size - d && (e2.match_length = x(e2, r2), e2.match_length <= 5 && (1 === e2.strategy || 3 === e2.match_length && e2.strstart - e2.match_start > 4096) && (e2.match_length = 2)), e2.prev_length >= 3 && e2.match_length <= e2.prev_length) {
        a2 = e2.strstart + e2.lookahead - 3, n2 = i._tr_tally(e2, e2.strstart - 1 - e2.prev_match, e2.prev_length - 3), e2.lookahead -= e2.prev_length - 1, e2.prev_length -= 2;
        do {
          ++e2.strstart <= a2 && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + 3 - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart);
        } while (0 !== --e2.prev_length);
        if (e2.match_available = 0, e2.match_length = 2, e2.strstart++, n2 && (p(e2, false), 0 === e2.strm.avail_out)) return 1;
      } else if (e2.match_available) {
        if ((n2 = i._tr_tally(e2, 0, e2.window[e2.strstart - 1])) && p(e2, false), e2.strstart++, e2.lookahead--, 0 === e2.strm.avail_out) return 1;
      } else e2.match_available = 1, e2.strstart++, e2.lookahead--;
    }
    return e2.match_available && (n2 = i._tr_tally(e2, 0, e2.window[e2.strstart - 1]), e2.match_available = 0), e2.insert = e2.strstart < 2 ? e2.strstart : 2, 4 === t2 ? (p(e2, true), 0 === e2.strm.avail_out ? 3 : 4) : e2.last_lit && (p(e2, false), 0 === e2.strm.avail_out) ? 1 : 2;
  }
  function B(e2, t2, r2, n2, a2) {
    this.good_length = e2, this.max_lazy = t2, this.nice_length = r2, this.max_chain = n2, this.func = a2;
  }
  function U() {
    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = 8, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(1146), this.dyn_dtree = new a.Buf16(122), this.bl_tree = new a.Buf16(78), g(this.dyn_ltree), g(this.dyn_dtree), g(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(16), this.heap = new a.Buf16(573), g(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(573), g(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
  }
  function z(e2) {
    var t2;
    return e2 && e2.state ? (e2.total_in = e2.total_out = 0, e2.data_type = 2, (t2 = e2.state).pending = 0, t2.pending_out = 0, t2.wrap < 0 && (t2.wrap = -t2.wrap), t2.status = t2.wrap ? 42 : c, e2.adler = 2 === t2.wrap ? 0 : 1, t2.last_flush = 0, i._tr_init(t2), 0) : v(e2, l);
  }
  function D(e2) {
    var t2, r2 = z(e2);
    return 0 === r2 && ((t2 = e2.state).window_size = 2 * t2.w_size, g(t2.head), t2.max_lazy_match = n[t2.level].max_lazy, t2.good_match = n[t2.level].good_length, t2.nice_match = n[t2.level].nice_length, t2.max_chain_length = n[t2.level].max_chain, t2.strstart = 0, t2.block_start = 0, t2.lookahead = 0, t2.insert = 0, t2.match_length = t2.prev_length = 2, t2.match_available = 0, t2.ins_h = 0), r2;
  }
  function S(e2, t2, r2, n2, i2, o2) {
    if (!e2) return l;
    var s2 = 1;
    if (-1 === t2 && (t2 = 6), n2 < 0 ? (s2 = 0, n2 = -n2) : n2 > 15 && (s2 = 2, n2 -= 16), i2 < 1 || i2 > 9 || 8 !== r2 || n2 < 8 || n2 > 15 || t2 < 0 || t2 > 9 || o2 < 0 || o2 > 4) return v(e2, l);
    8 === n2 && (n2 = 9);
    var f2 = new U();
    return e2.state = f2, f2.strm = e2, f2.wrap = s2, f2.gzhead = null, f2.w_bits = n2, f2.w_size = 1 << f2.w_bits, f2.w_mask = f2.w_size - 1, f2.hash_bits = i2 + 7, f2.hash_size = 1 << f2.hash_bits, f2.hash_mask = f2.hash_size - 1, f2.hash_shift = ~~((f2.hash_bits + 3 - 1) / 3), f2.window = new a.Buf8(2 * f2.w_size), f2.head = new a.Buf16(f2.hash_size), f2.prev = new a.Buf16(f2.w_size), f2.lit_bufsize = 1 << i2 + 6, f2.pending_buf_size = 4 * f2.lit_bufsize, f2.pending_buf = new a.Buf8(f2.pending_buf_size), f2.d_buf = 1 * f2.lit_bufsize, f2.l_buf = 3 * f2.lit_bufsize, f2.level = t2, f2.strategy = o2, f2.method = r2, D(e2);
  }
  n = [new B(0, 0, 0, 0, function(e2, t2) {
    var r2 = 65535;
    for (r2 > e2.pending_buf_size - 5 && (r2 = e2.pending_buf_size - 5); ; ) {
      if (e2.lookahead <= 1) {
        if (A(e2), 0 === e2.lookahead && 0 === t2) return 1;
        if (0 === e2.lookahead) break;
      }
      e2.strstart += e2.lookahead, e2.lookahead = 0;
      var n2 = e2.block_start + r2;
      if ((0 === e2.strstart || e2.strstart >= n2) && (e2.lookahead = e2.strstart - n2, e2.strstart = n2, p(e2, false), 0 === e2.strm.avail_out)) return 1;
      if (e2.strstart - e2.block_start >= e2.w_size - d && (p(e2, false), 0 === e2.strm.avail_out)) return 1;
    }
    return e2.insert = 0, 4 === t2 ? (p(e2, true), 0 === e2.strm.avail_out ? 3 : 4) : (e2.strstart > e2.block_start && (p(e2, false), e2.strm.avail_out), 1);
  }), new B(4, 4, 8, 4, E), new B(4, 5, 16, 8, E), new B(4, 6, 32, 32, E), new B(4, 4, 16, 16, I), new B(8, 16, 32, 32, I), new B(8, 16, 128, 128, I), new B(8, 32, 128, 256, I), new B(32, 128, 258, 1024, I), new B(32, 258, 258, 4096, I)], t.deflateInit = function(e2, t2) {
    return S(e2, t2, 8, 15, 8, 0);
  }, t.deflateInit2 = S, t.deflateReset = D, t.deflateResetKeep = z, t.deflateSetHeader = function(e2, t2) {
    return e2 && e2.state ? 2 !== e2.state.wrap ? l : (e2.state.gzhead = t2, 0) : l;
  }, t.deflate = function(e2, t2) {
    var r2, a2, o2, f2;
    if (!e2 || !e2.state || t2 > 5 || t2 < 0) return e2 ? v(e2, l) : l;
    if (a2 = e2.state, !e2.output || !e2.input && 0 !== e2.avail_in || a2.status === _ && 4 !== t2) return v(e2, 0 === e2.avail_out ? -5 : l);
    if (a2.strm = e2, r2 = a2.last_flush, a2.last_flush = t2, 42 === a2.status) if (2 === a2.wrap) e2.adler = 0, m(a2, 31), m(a2, 139), m(a2, 8), a2.gzhead ? (m(a2, (a2.gzhead.text ? 1 : 0) + (a2.gzhead.hcrc ? 2 : 0) + (a2.gzhead.extra ? 4 : 0) + (a2.gzhead.name ? 8 : 0) + (a2.gzhead.comment ? 16 : 0)), m(a2, 255 & a2.gzhead.time), m(a2, a2.gzhead.time >> 8 & 255), m(a2, a2.gzhead.time >> 16 & 255), m(a2, a2.gzhead.time >> 24 & 255), m(a2, 9 === a2.level ? 2 : a2.strategy >= 2 || a2.level < 2 ? 4 : 0), m(a2, 255 & a2.gzhead.os), a2.gzhead.extra && a2.gzhead.extra.length && (m(a2, 255 & a2.gzhead.extra.length), m(a2, a2.gzhead.extra.length >> 8 & 255)), a2.gzhead.hcrc && (e2.adler = s(e2.adler, a2.pending_buf, a2.pending, 0)), a2.gzindex = 0, a2.status = 69) : (m(a2, 0), m(a2, 0), m(a2, 0), m(a2, 0), m(a2, 0), m(a2, 9 === a2.level ? 2 : a2.strategy >= 2 || a2.level < 2 ? 4 : 0), m(a2, 3), a2.status = c);
    else {
      var d2 = 8 + (a2.w_bits - 8 << 4) << 8;
      d2 |= (a2.strategy >= 2 || a2.level < 2 ? 0 : a2.level < 6 ? 1 : 6 === a2.level ? 2 : 3) << 6, 0 !== a2.strstart && (d2 |= 32), d2 += 31 - d2 % 31, a2.status = c, k(a2, d2), 0 !== a2.strstart && (k(a2, e2.adler >>> 16), k(a2, 65535 & e2.adler)), e2.adler = 1;
    }
    if (69 === a2.status) if (a2.gzhead.extra) {
      for (o2 = a2.pending; a2.gzindex < (65535 & a2.gzhead.extra.length) && (a2.pending !== a2.pending_buf_size || (a2.gzhead.hcrc && a2.pending > o2 && (e2.adler = s(e2.adler, a2.pending_buf, a2.pending - o2, o2)), b(e2), o2 = a2.pending, a2.pending !== a2.pending_buf_size)); ) m(a2, 255 & a2.gzhead.extra[a2.gzindex]), a2.gzindex++;
      a2.gzhead.hcrc && a2.pending > o2 && (e2.adler = s(e2.adler, a2.pending_buf, a2.pending - o2, o2)), a2.gzindex === a2.gzhead.extra.length && (a2.gzindex = 0, a2.status = 73);
    } else a2.status = 73;
    if (73 === a2.status) if (a2.gzhead.name) {
      o2 = a2.pending;
      do {
        if (a2.pending === a2.pending_buf_size && (a2.gzhead.hcrc && a2.pending > o2 && (e2.adler = s(e2.adler, a2.pending_buf, a2.pending - o2, o2)), b(e2), o2 = a2.pending, a2.pending === a2.pending_buf_size)) {
          f2 = 1;
          break;
        }
        f2 = a2.gzindex < a2.gzhead.name.length ? 255 & a2.gzhead.name.charCodeAt(a2.gzindex++) : 0, m(a2, f2);
      } while (0 !== f2);
      a2.gzhead.hcrc && a2.pending > o2 && (e2.adler = s(e2.adler, a2.pending_buf, a2.pending - o2, o2)), 0 === f2 && (a2.gzindex = 0, a2.status = 91);
    } else a2.status = 91;
    if (91 === a2.status) if (a2.gzhead.comment) {
      o2 = a2.pending;
      do {
        if (a2.pending === a2.pending_buf_size && (a2.gzhead.hcrc && a2.pending > o2 && (e2.adler = s(e2.adler, a2.pending_buf, a2.pending - o2, o2)), b(e2), o2 = a2.pending, a2.pending === a2.pending_buf_size)) {
          f2 = 1;
          break;
        }
        f2 = a2.gzindex < a2.gzhead.comment.length ? 255 & a2.gzhead.comment.charCodeAt(a2.gzindex++) : 0, m(a2, f2);
      } while (0 !== f2);
      a2.gzhead.hcrc && a2.pending > o2 && (e2.adler = s(e2.adler, a2.pending_buf, a2.pending - o2, o2)), 0 === f2 && (a2.status = u);
    } else a2.status = u;
    if (a2.status === u && (a2.gzhead.hcrc ? (a2.pending + 2 > a2.pending_buf_size && b(e2), a2.pending + 2 <= a2.pending_buf_size && (m(a2, 255 & e2.adler), m(a2, e2.adler >> 8 & 255), e2.adler = 0, a2.status = c)) : a2.status = c), 0 !== a2.pending) {
      if (b(e2), 0 === e2.avail_out) return a2.last_flush = -1, 0;
    } else if (0 === e2.avail_in && w(t2) <= w(r2) && 4 !== t2) return v(e2, -5);
    if (a2.status === _ && 0 !== e2.avail_in) return v(e2, -5);
    if (0 !== e2.avail_in || 0 !== a2.lookahead || 0 !== t2 && a2.status !== _) {
      var y2 = 2 === a2.strategy ? (function(e3, t3) {
        for (var r3; ; ) {
          if (0 === e3.lookahead && (A(e3), 0 === e3.lookahead)) {
            if (0 === t3) return 1;
            break;
          }
          if (e3.match_length = 0, r3 = i._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++, r3 && (p(e3, false), 0 === e3.strm.avail_out)) return 1;
        }
        return e3.insert = 0, 4 === t3 ? (p(e3, true), 0 === e3.strm.avail_out ? 3 : 4) : e3.last_lit && (p(e3, false), 0 === e3.strm.avail_out) ? 1 : 2;
      })(a2, t2) : 3 === a2.strategy ? (function(e3, t3) {
        for (var r3, n2, a3, o3, s2 = e3.window; ; ) {
          if (e3.lookahead <= h) {
            if (A(e3), e3.lookahead <= h && 0 === t3) return 1;
            if (0 === e3.lookahead) break;
          }
          if (e3.match_length = 0, e3.lookahead >= 3 && e3.strstart > 0 && (n2 = s2[a3 = e3.strstart - 1]) === s2[++a3] && n2 === s2[++a3] && n2 === s2[++a3]) {
            o3 = e3.strstart + h;
            do {
            } while (n2 === s2[++a3] && n2 === s2[++a3] && n2 === s2[++a3] && n2 === s2[++a3] && n2 === s2[++a3] && n2 === s2[++a3] && n2 === s2[++a3] && n2 === s2[++a3] && a3 < o3);
            e3.match_length = h - (o3 - a3), e3.match_length > e3.lookahead && (e3.match_length = e3.lookahead);
          }
          if (e3.match_length >= 3 ? (r3 = i._tr_tally(e3, 1, e3.match_length - 3), e3.lookahead -= e3.match_length, e3.strstart += e3.match_length, e3.match_length = 0) : (r3 = i._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++), r3 && (p(e3, false), 0 === e3.strm.avail_out)) return 1;
        }
        return e3.insert = 0, 4 === t3 ? (p(e3, true), 0 === e3.strm.avail_out ? 3 : 4) : e3.last_lit && (p(e3, false), 0 === e3.strm.avail_out) ? 1 : 2;
      })(a2, t2) : n[a2.level].func(a2, t2);
      if (3 !== y2 && 4 !== y2 || (a2.status = _), 1 === y2 || 3 === y2) return 0 === e2.avail_out && (a2.last_flush = -1), 0;
      if (2 === y2 && (1 === t2 ? i._tr_align(a2) : 5 !== t2 && (i._tr_stored_block(a2, 0, 0, false), 3 === t2 && (g(a2.head), 0 === a2.lookahead && (a2.strstart = 0, a2.block_start = 0, a2.insert = 0))), b(e2), 0 === e2.avail_out)) return a2.last_flush = -1, 0;
    }
    return 4 !== t2 ? 0 : a2.wrap <= 0 ? 1 : (2 === a2.wrap ? (m(a2, 255 & e2.adler), m(a2, e2.adler >> 8 & 255), m(a2, e2.adler >> 16 & 255), m(a2, e2.adler >> 24 & 255), m(a2, 255 & e2.total_in), m(a2, e2.total_in >> 8 & 255), m(a2, e2.total_in >> 16 & 255), m(a2, e2.total_in >> 24 & 255)) : (k(a2, e2.adler >>> 16), k(a2, 65535 & e2.adler)), b(e2), a2.wrap > 0 && (a2.wrap = -a2.wrap), 0 !== a2.pending ? 0 : 1);
  }, t.deflateEnd = function(e2) {
    var t2;
    return e2 && e2.state ? 42 !== (t2 = e2.state.status) && 69 !== t2 && 73 !== t2 && 91 !== t2 && t2 !== u && t2 !== c && t2 !== _ ? v(e2, l) : (e2.state = null, t2 === c ? v(e2, -3) : 0) : l;
  }, t.deflateSetDictionary = function(e2, t2) {
    var r2, n2, i2, s2, f2, h2, d2, u2, c2 = t2.length;
    if (!e2 || !e2.state) return l;
    if (2 === (s2 = (r2 = e2.state).wrap) || 1 === s2 && 42 !== r2.status || r2.lookahead) return l;
    for (1 === s2 && (e2.adler = o(e2.adler, t2, c2, 0)), r2.wrap = 0, c2 >= r2.w_size && (0 === s2 && (g(r2.head), r2.strstart = 0, r2.block_start = 0, r2.insert = 0), u2 = new a.Buf8(r2.w_size), a.arraySet(u2, t2, c2 - r2.w_size, r2.w_size, 0), t2 = u2, c2 = r2.w_size), f2 = e2.avail_in, h2 = e2.next_in, d2 = e2.input, e2.avail_in = c2, e2.next_in = 0, e2.input = t2, A(r2); r2.lookahead >= 3; ) {
      n2 = r2.strstart, i2 = r2.lookahead - 2;
      do {
        r2.ins_h = (r2.ins_h << r2.hash_shift ^ r2.window[n2 + 3 - 1]) & r2.hash_mask, r2.prev[n2 & r2.w_mask] = r2.head[r2.ins_h], r2.head[r2.ins_h] = n2, n2++;
      } while (--i2);
      r2.strstart = n2, r2.lookahead = 2, A(r2);
    }
    return r2.strstart += r2.lookahead, r2.block_start = r2.strstart, r2.insert = r2.lookahead, r2.lookahead = 0, r2.match_length = r2.prev_length = 2, r2.match_available = 0, e2.next_in = h2, e2.input = d2, e2.avail_in = f2, r2.wrap = s2, 0;
  }, t.deflateInfo = "pako deflate (from Nodeca project)";
}