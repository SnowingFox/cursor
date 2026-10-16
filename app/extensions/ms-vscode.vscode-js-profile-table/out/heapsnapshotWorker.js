(() => {
  "use strict";
  var e, r, t, n, a, o, s = {}, i = {};
  function d(e2) {
    var r2 = i[e2];
    if (void 0 !== r2) return r2.exports;
    var t2 = i[e2] = { id: e2, loaded: false, exports: {} };
    return s[e2](t2, t2.exports, d), t2.loaded = true, t2.exports;
  }
  d.m = s, e = "function" == typeof Symbol, r = e ? /* @__PURE__ */ Symbol("webpack queues") : "__webpack_queues__", t = e ? /* @__PURE__ */ Symbol("webpack exports") : "__webpack_exports__", n = e ? /* @__PURE__ */ Symbol("webpack error") : "__webpack_error__", a = (e2) => {
    e2 && e2.d < 1 && (e2.d = 1, e2.forEach((e3) => e3.r--), e2.forEach((e3) => e3.r-- ? e3.r++ : e3()));
  }, d.a = (e2, o2, s2) => {
    var i2;
    s2 && ((i2 = []).d = -1);
    var d2, u2, l2, c2 = /* @__PURE__ */ new Set(), h2 = e2.exports, p2 = new Promise((e3, r2) => {
      l2 = r2, u2 = e3;
    });
    p2[t] = h2, p2[r] = (e3) => (i2 && e3(i2), c2.forEach(e3), p2.catch((e4) => {
    })), e2.exports = p2, o2((e3) => {
      var o3;
      d2 = ((e4) => e4.map((e5) => {
        if (null !== e5 && "object" == typeof e5) {
          if (e5[r]) return e5;
          if (e5.then) {
            var o4 = [];
            o4.d = 0, e5.then((e6) => {
              s4[t] = e6, a(o4);
            }, (e6) => {
              s4[n] = e6, a(o4);
            });
            var s4 = {};
            return s4[r] = (e6) => e6(o4), s4;
          }
        }
        var i3 = {};
        return i3[r] = (e6) => {
        }, i3[t] = e5, i3;
      }))(e3);
      var s3 = () => d2.map((e4) => {
        if (e4[n]) throw e4[n];
        return e4[t];
      }), u3 = new Promise((e4) => {
        (o3 = () => e4(s3)).r = 0;
        var t2 = (e5) => e5 !== i2 && !c2.has(e5) && (c2.add(e5), e5 && !e5.d && (o3.r++, e5.push(o3)));
        d2.map((e5) => e5[r](t2));
      });
      return o3.r ? u3 : s3();
    }, (e3) => (e3 ? l2(p2[n] = e3) : u2(h2), a(i2))), i2 && i2.d < 0 && (i2.d = 0);
  }, d.d = (e2, r2) => {
    for (var t2 in r2) d.o(r2, t2) && !d.o(e2, t2) && Object.defineProperty(e2, t2, { enumerable: true, get: r2[t2] });
  }, d.f = {}, d.e = (e2) => Promise.all(Object.keys(d.f).reduce((r2, t2) => (d.f[t2](e2, r2), r2), [])), d.u = (e2) => e2 + ".heapsnapshotWorker.js", d.hmd = (e2) => ((e2 = Object.create(e2)).children || (e2.children = []), Object.defineProperty(e2, "exports", { enumerable: true, set: () => {
    throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e2.id);
  } }), e2), d.o = (e2, r2) => Object.prototype.hasOwnProperty.call(e2, r2), d.v = (e2, r2, t2, n2) => new Promise(function(e3, r3) {
    try {
      var { readFile: n3 } = require("node:fs"), { join: a2 } = require("node:path");
      n3(a2(__dirname, t2 + ".module.wasm"), function(t3, n4) {
        if (t3) return r3(t3);
        e3({ arrayBuffer: () => n4 });
      });
    } catch (e4) {
      r3(e4);
    }
  }).then((e3) => e3.arrayBuffer()).then((e3) => WebAssembly.instantiate(e3, n2)).then((r3) => Object.assign(e2, r3.instance.exports)), o = { 792: 1 }, d.f.require = (e2, r2) => {
    if (!o[e2]) {
      var t2 = require("./" + d.u(e2));
      o[e2] || ((e3) => {
        var r3 = e3.modules, t3 = e3.ids, n2 = e3.runtime;
        for (var a2 in r3) d.o(r3, a2) && (d.m[a2] = r3[a2]);
        n2 && n2(d);
        for (var s2 = 0; s2 < t3.length; s2++) o[t3[s2]] = 1;
      })(t2);
    }
  };
  const u = require("fs/promises"), l = require("worker_threads"), c = (e2, r2) => r2.method === e2, h = (e2, r2) => {
    const t2 = new Array(e2.length);
    for (let n2 = 0; n2 < e2.length; n2++) {
      const a2 = e2[n2];
      t2[n2] = r2(a2, n2), a2.free();
    }
    return t2;
  }, p = (e2) => h(e2, (e3) => ({ name: e3.name(), childrenLen: e3.children_len, id: e3.id, index: e3.index, retainedSize: Number(e3.retained_size), selfSize: Number(e3.self_size), type: e3.typ, retainsIndex: e3.retains_index, edgeType: e3.edge_typ }));
  if (!l.parentPort) throw new Error("must be run in worker thread");
  const f = Promise.all(["string" == typeof l.workerData ? (0, u.readFile)(l.workerData) : Promise.resolve(l.workerData), (async () => {
    const { decode_bytes: e2, init_panic_hook: r2 } = await d.e(425).then(d.bind(d, 425));
    return r2(), e2;
  })()]).then(async ([e2, r2]) => r2(e2));
  l.parentPort.on("message", (e2) => {
    ((e3, r2) => e3.then((e4) => {
      if (c("getClassGroups", r2)) return h(e4.get_class_groups(...r2.args, false), (e5, r3) => ({ name: e5.name(), index: r3, retainedSize: Number(e5.retained_size), selfSize: Number(e5.self_size), childrenLen: e5.children_len }));
      if (c("getClassChildren", r2)) return p(e4.class_children(...r2.args));
      if (c("getNodeChildren", r2)) return p(e4.node_children(...r2.args));
      if (c("getRetainers", r2)) return p(e4.get_all_retainers(...r2.args));
      throw new Error(`unknown method ${r2.method}`);
    }).then((e4) => ({ id: r2.id, result: { ok: e4 } })).catch((e4) => ({ id: r2.id, result: { err: e4.stack || e4.message || String(e4) } })))(f, e2).then((e3) => l.parentPort.postMessage(e3));
  });
})();
