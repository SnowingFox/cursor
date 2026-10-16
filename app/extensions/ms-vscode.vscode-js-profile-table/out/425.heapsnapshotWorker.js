"use strict";
exports.id = 425, exports.ids = [425], exports.modules = { 425(_, e, t) {
  t.a(_, async (_2, n) => {
    try {
      t.d(e, { decode_bytes: () => i.pt, init_panic_hook: () => i.d3 });
      var r = t(871), i = t(763), s = _2([r]);
      r = (s.then ? (await s)() : s)[0], (0, i.lI)(r), n();
    } catch (_3) {
      n(_3);
    }
  });
}, 763(_, e, t) {
  let n;
  function r(_2) {
    n = _2;
  }
  t.d(e, { Mq: () => B, Qn: () => T, Rs: () => C, V5: () => A, Xu: () => R, bU: () => E, bk: () => U, d3: () => x, lI: () => r, pt: () => z, qN: () => H, u$: () => q, yc: () => j }), _ = t.hmd(_);
  let i = new ("undefined" == typeof TextDecoder ? (0, _.require)("util").TextDecoder : TextDecoder)("utf-8", { ignoreBOM: true, fatal: true });
  i.decode();
  let s = null;
  function g() {
    return null !== s && 0 !== s.byteLength || (s = new Uint8Array(n.memory.buffer)), s;
  }
  function o(_2, e2) {
    return _2 >>>= 0, i.decode(g().subarray(_2, _2 + e2));
  }
  const a = new Array(128).fill(void 0);
  a.push(void 0, null, true, false);
  let d = a.length;
  function c(_2) {
    d === a.length && a.push(a.length + 1);
    const e2 = d;
    return d = a[e2], a[e2] = _2, e2;
  }
  function l(_2) {
    return a[_2];
  }
  function b(_2) {
    const e2 = l(_2);
    return (function(_3) {
      _3 < 132 || (a[_3] = d, d = _3);
    })(_2), e2;
  }
  let w = 0, p = new ("undefined" == typeof TextEncoder ? (0, _.require)("util").TextEncoder : TextEncoder)("utf-8");
  const u = "function" == typeof p.encodeInto ? function(_2, e2) {
    return p.encodeInto(_2, e2);
  } : function(_2, e2) {
    const t2 = p.encode(_2);
    return e2.set(t2), { read: _2.length, written: t2.length };
  };
  function h(_2, e2, t2) {
    if (void 0 === t2) {
      const t3 = p.encode(_2), n3 = e2(t3.length, 1) >>> 0;
      return g().subarray(n3, n3 + t3.length).set(t3), w = t3.length, n3;
    }
    let n2 = _2.length, r2 = e2(n2, 1) >>> 0;
    const i2 = g();
    let s2 = 0;
    for (; s2 < n2; s2++) {
      const e3 = _2.charCodeAt(s2);
      if (e3 > 127) break;
      i2[r2 + s2] = e3;
    }
    if (s2 !== n2) {
      0 !== s2 && (_2 = _2.slice(s2)), r2 = t2(r2, n2, n2 = s2 + 3 * _2.length, 1) >>> 0;
      const e3 = g().subarray(r2 + s2, r2 + n2);
      s2 += u(_2, e3).written;
    }
    return w = s2, r2;
  }
  let f = null;
  function y() {
    return null !== f && 0 !== f.byteLength || (f = new Int32Array(n.memory.buffer)), f;
  }
  function z(_2) {
    try {
      const r2 = n.__wbindgen_add_to_stack_pointer(-16), i2 = (function(_3, e3) {
        const t3 = e3(1 * _3.length, 1) >>> 0;
        return g().set(_3, t3 / 1), w = _3.length, t3;
      })(_2, n.__wbindgen_malloc), s2 = w;
      n.decode_bytes(r2, i2, s2);
      var e2 = y()[r2 / 4 + 0], t2 = y()[r2 / 4 + 1];
      if (y()[r2 / 4 + 2]) throw b(t2);
      return I.__wrap(e2);
    } finally {
      n.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function x() {
    n.init_panic_hook();
  }
  let k = null;
  function m() {
    return null !== k && 0 !== k.byteLength || (k = new Uint32Array(n.memory.buffer)), k;
  }
  function v(_2, e2) {
    _2 >>>= 0;
    const t2 = m().subarray(_2 / 4, _2 / 4 + e2), n2 = [];
    for (let _3 = 0; _3 < t2.length; _3++) n2.push(b(t2[_3]));
    return n2;
  }
  Object.freeze({ Context: 0, 0: "Context", Element: 1, 1: "Element", Property: 2, 2: "Property", Internal: 3, 3: "Internal", Hidden: 4, 4: "Hidden", Shortcut: 5, 5: "Shortcut", Weak: 6, 6: "Weak", Invisible: 7, 7: "Invisible", Other: 8, 8: "Other" }), Object.freeze({ Hidden: 0, 0: "Hidden", Array: 1, 1: "Array", String: 2, 2: "String", Object: 3, 3: "Object", Code: 4, 4: "Code", Closure: 5, 5: "Closure", RegExp: 6, 6: "RegExp", Number: 7, 7: "Number", Native: 8, 8: "Native", Syntheic: 9, 9: "Syntheic", ConcatString: 10, 10: "ConcatString", SliceString: 11, 11: "SliceString", BigInt: 12, 12: "BigInt", Other: 13, 13: "Other" }), Object.freeze({ SelfSize: 0, 0: "SelfSize", RetainedSize: 1, 1: "RetainedSize", Name: 2, 2: "Name" });
  class S {
    static __wrap(_2) {
      _2 >>>= 0;
      const e2 = Object.create(S.prototype);
      return e2.__wbg_ptr = _2, e2;
    }
    __destroy_into_raw() {
      const _2 = this.__wbg_ptr;
      return this.__wbg_ptr = 0, _2;
    }
    free() {
      const _2 = this.__destroy_into_raw();
      n.__wbg_classgroup_free(_2);
    }
    get self_size() {
      const _2 = n.__wbg_get_classgroup_self_size(this.__wbg_ptr);
      return BigInt.asUintN(64, _2);
    }
    set self_size(_2) {
      n.__wbg_set_classgroup_self_size(this.__wbg_ptr, _2);
    }
    get retained_size() {
      const _2 = n.__wbg_get_classgroup_retained_size(this.__wbg_ptr);
      return BigInt.asUintN(64, _2);
    }
    set retained_size(_2) {
      n.__wbg_set_classgroup_retained_size(this.__wbg_ptr, _2);
    }
    get children_len() {
      return n.__wbg_get_classgroup_children_len(this.__wbg_ptr) >>> 0;
    }
    set children_len(_2) {
      n.__wbg_set_classgroup_children_len(this.__wbg_ptr, _2);
    }
    name() {
      let _2, e2;
      try {
        const i2 = n.__wbindgen_add_to_stack_pointer(-16);
        n.classgroup_name(i2, this.__wbg_ptr);
        var t2 = y()[i2 / 4 + 0], r2 = y()[i2 / 4 + 1];
        return _2 = t2, e2 = r2, o(t2, r2);
      } finally {
        n.__wbindgen_add_to_stack_pointer(16), n.__wbindgen_free(_2, e2, 1);
      }
    }
  }
  class I {
    static __wrap(_2) {
      _2 >>>= 0;
      const e2 = Object.create(I.prototype);
      return e2.__wbg_ptr = _2, e2;
    }
    __destroy_into_raw() {
      const _2 = this.__wbg_ptr;
      return this.__wbg_ptr = 0, _2;
    }
    free() {
      const _2 = this.__destroy_into_raw();
      n.__wbg_graph_free(_2);
    }
    get root_index() {
      return n.__wbg_get_graph_root_index(this.__wbg_ptr) >>> 0;
    }
    set root_index(_2) {
      n.__wbg_set_graph_root_index(this.__wbg_ptr, _2);
    }
    get_class_groups(_2, e2, t2) {
      try {
        const g2 = n.__wbindgen_add_to_stack_pointer(-16);
        n.graph_get_class_groups(g2, this.__wbg_ptr, _2, e2, t2);
        var r2 = y()[g2 / 4 + 0], i2 = y()[g2 / 4 + 1], s2 = v(r2, i2).slice();
        return n.__wbindgen_free(r2, 4 * i2, 4), s2;
      } finally {
        n.__wbindgen_add_to_stack_pointer(16);
      }
    }
    get_class_counts(_2) {
      try {
        const g2 = n.__wbindgen_add_to_stack_pointer(-16), o2 = (function(_3, e3) {
          const t3 = e3(4 * _3.length, 4) >>> 0, n2 = m();
          for (let e4 = 0; e4 < _3.length; e4++) n2[t3 / 4 + e4] = c(_3[e4]);
          return w = _3.length, t3;
        })(_2, n.__wbindgen_malloc), a2 = w;
        n.graph_get_class_counts(g2, this.__wbg_ptr, o2, a2);
        var e2 = y()[g2 / 4 + 0], t2 = y()[g2 / 4 + 1], r2 = (i2 = e2, s2 = t2, i2 >>>= 0, m().subarray(i2 / 4, i2 / 4 + s2)).slice();
        return n.__wbindgen_free(e2, 4 * t2, 4), r2;
      } finally {
        n.__wbindgen_add_to_stack_pointer(16);
      }
      var i2, s2;
    }
    class_children(_2, e2, t2, r2) {
      try {
        const o2 = n.__wbindgen_add_to_stack_pointer(-16);
        n.graph_class_children(o2, this.__wbg_ptr, _2, e2, t2, r2);
        var i2 = y()[o2 / 4 + 0], s2 = y()[o2 / 4 + 1], g2 = v(i2, s2).slice();
        return n.__wbindgen_free(i2, 4 * s2, 4), g2;
      } finally {
        n.__wbindgen_add_to_stack_pointer(16);
      }
    }
    node_children(_2, e2, t2, r2) {
      try {
        const o2 = n.__wbindgen_add_to_stack_pointer(-16);
        n.graph_node_children(o2, this.__wbg_ptr, _2, e2, t2, r2);
        var i2 = y()[o2 / 4 + 0], s2 = y()[o2 / 4 + 1], g2 = v(i2, s2).slice();
        return n.__wbindgen_free(i2, 4 * s2, 4), g2;
      } finally {
        n.__wbindgen_add_to_stack_pointer(16);
      }
    }
    get_all_retainers(_2, e2) {
      try {
        const s2 = n.__wbindgen_add_to_stack_pointer(-16);
        n.graph_get_all_retainers(s2, this.__wbg_ptr, _2, e2);
        var t2 = y()[s2 / 4 + 0], r2 = y()[s2 / 4 + 1], i2 = v(t2, r2).slice();
        return n.__wbindgen_free(t2, 4 * r2, 4), i2;
      } finally {
        n.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class N {
    static __wrap(_2) {
      _2 >>>= 0;
      const e2 = Object.create(N.prototype);
      return e2.__wbg_ptr = _2, e2;
    }
    __destroy_into_raw() {
      const _2 = this.__wbg_ptr;
      return this.__wbg_ptr = 0, _2;
    }
    free() {
      const _2 = this.__destroy_into_raw();
      n.__wbg_node_free(_2);
    }
    get children_len() {
      return n.__wbg_get_classgroup_children_len(this.__wbg_ptr) >>> 0;
    }
    set children_len(_2) {
      n.__wbg_set_classgroup_children_len(this.__wbg_ptr, _2);
    }
    get self_size() {
      const _2 = n.__wbg_get_classgroup_self_size(this.__wbg_ptr);
      return BigInt.asUintN(64, _2);
    }
    set self_size(_2) {
      n.__wbg_set_classgroup_self_size(this.__wbg_ptr, _2);
    }
    get retained_size() {
      const _2 = n.__wbg_get_classgroup_retained_size(this.__wbg_ptr);
      return BigInt.asUintN(64, _2);
    }
    set retained_size(_2) {
      n.__wbg_set_classgroup_retained_size(this.__wbg_ptr, _2);
    }
    get index() {
      return n.__wbg_get_node_index(this.__wbg_ptr) >>> 0;
    }
    set index(_2) {
      n.__wbg_set_node_index(this.__wbg_ptr, _2);
    }
    get typ() {
      return n.__wbg_get_node_typ(this.__wbg_ptr);
    }
    set typ(_2) {
      n.__wbg_set_node_typ(this.__wbg_ptr, _2);
    }
    get id() {
      return n.__wbg_get_node_id(this.__wbg_ptr) >>> 0;
    }
    set id(_2) {
      n.__wbg_set_node_id(this.__wbg_ptr, _2);
    }
    name() {
      let _2, e2;
      try {
        const i2 = n.__wbindgen_add_to_stack_pointer(-16);
        n.node_name(i2, this.__wbg_ptr);
        var t2 = y()[i2 / 4 + 0], r2 = y()[i2 / 4 + 1];
        return _2 = t2, e2 = r2, o(t2, r2);
      } finally {
        n.__wbindgen_add_to_stack_pointer(16), n.__wbindgen_free(_2, e2, 1);
      }
    }
  }
  class O {
    static __wrap(_2) {
      _2 >>>= 0;
      const e2 = Object.create(O.prototype);
      return e2.__wbg_ptr = _2, e2;
    }
    __destroy_into_raw() {
      const _2 = this.__wbg_ptr;
      return this.__wbg_ptr = 0, _2;
    }
    free() {
      const _2 = this.__destroy_into_raw();
      n.__wbg_retainernode_free(_2);
    }
    get retains_index() {
      return n.__wbg_get_retainernode_retains_index(this.__wbg_ptr) >>> 0;
    }
    set retains_index(_2) {
      n.__wbg_set_retainernode_retains_index(this.__wbg_ptr, _2);
    }
    get children_len() {
      return n.__wbg_get_classgroup_children_len(this.__wbg_ptr) >>> 0;
    }
    set children_len(_2) {
      n.__wbg_set_classgroup_children_len(this.__wbg_ptr, _2);
    }
    get self_size() {
      const _2 = n.__wbg_get_classgroup_self_size(this.__wbg_ptr);
      return BigInt.asUintN(64, _2);
    }
    set self_size(_2) {
      n.__wbg_set_classgroup_self_size(this.__wbg_ptr, _2);
    }
    get retained_size() {
      const _2 = n.__wbg_get_classgroup_retained_size(this.__wbg_ptr);
      return BigInt.asUintN(64, _2);
    }
    set retained_size(_2) {
      n.__wbg_set_classgroup_retained_size(this.__wbg_ptr, _2);
    }
    get index() {
      return n.__wbg_get_node_index(this.__wbg_ptr) >>> 0;
    }
    set index(_2) {
      n.__wbg_set_node_index(this.__wbg_ptr, _2);
    }
    get typ() {
      return n.__wbg_get_retainernode_typ(this.__wbg_ptr);
    }
    set typ(_2) {
      n.__wbg_set_retainernode_typ(this.__wbg_ptr, _2);
    }
    get id() {
      return n.__wbg_get_node_id(this.__wbg_ptr) >>> 0;
    }
    set id(_2) {
      n.__wbg_set_node_id(this.__wbg_ptr, _2);
    }
    get edge_typ() {
      return n.__wbg_get_retainernode_edge_typ(this.__wbg_ptr);
    }
    set edge_typ(_2) {
      n.__wbg_set_retainernode_edge_typ(this.__wbg_ptr, _2);
    }
    name() {
      let _2, e2;
      try {
        const i2 = n.__wbindgen_add_to_stack_pointer(-16);
        n.retainernode_name(i2, this.__wbg_ptr);
        var t2 = y()[i2 / 4 + 0], r2 = y()[i2 / 4 + 1];
        return _2 = t2, e2 = r2, o(t2, r2);
      } finally {
        n.__wbindgen_add_to_stack_pointer(16), n.__wbindgen_free(_2, e2, 1);
      }
    }
  }
  function j(_2, e2) {
    return c(o(_2, e2));
  }
  function U(_2) {
    b(_2);
  }
  function B(_2) {
    return c(S.__wrap(_2));
  }
  function C(_2) {
    return c(N.__wrap(_2));
  }
  function E(_2) {
    return c(O.__wrap(_2));
  }
  function A() {
    return c(new Error());
  }
  function q(_2, e2) {
    const t2 = h(l(e2).stack, n.__wbindgen_malloc, n.__wbindgen_realloc), r2 = w;
    y()[_2 / 4 + 1] = r2, y()[_2 / 4 + 0] = t2;
  }
  function R(_2, e2) {
    let t2, r2;
    try {
      t2 = _2, r2 = e2, console.error(o(_2, e2));
    } finally {
      n.__wbindgen_free(t2, r2, 1);
    }
  }
  function T(_2, e2) {
    throw new Error(o(_2, e2));
  }
  function H(_2, e2) {
    const t2 = l(e2), r2 = "string" == typeof t2 ? t2 : void 0;
    var i2 = null == r2 ? 0 : h(r2, n.__wbindgen_malloc, n.__wbindgen_realloc), s2 = w;
    y()[_2 / 4 + 1] = s2, y()[_2 / 4 + 0] = i2;
  }
}, 871(_, e, t) {
  var n = t(763);
  _.exports = t.v(e, _.id, "a443ca1a33b96237dd48", { "./v8_heap_parser_bg.js": { __wbindgen_string_new: n.yc, __wbindgen_object_drop_ref: n.bk, __wbg_classgroup_new: n.Mq, __wbg_node_new: n.Rs, __wbg_retainernode_new: n.bU, __wbg_new_abda76e883ba8a5f: n.V5, __wbg_stack_658279fe44541cf6: n.u$, __wbg_error_f851667af71bcfc6: n.Xu, __wbindgen_throw: n.Qn, __wbindgen_string_get: n.qN } });
} };
