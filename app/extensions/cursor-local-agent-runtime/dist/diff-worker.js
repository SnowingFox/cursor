(() => {
  "use strict";
  var e = { d: (n2, t2) => {
    for (var o2 in t2) e.o(t2, o2) && !e.o(n2, o2) && Object.defineProperty(n2, o2, { enumerable: true, get: t2[o2] });
  }, o: (e2, n2) => Object.prototype.hasOwnProperty.call(e2, n2), r: (e2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
  } }, n = {};
  e.r(n), e.d(n, { default: () => a });
  class t {
    diff(e2, n2, t2 = {}) {
      let o2;
      "function" == typeof t2 ? (o2 = t2, t2 = {}) : "callback" in t2 && (o2 = t2.callback);
      const s2 = this.castInput(e2, t2), i2 = this.castInput(n2, t2), l2 = this.removeEmpty(this.tokenize(s2, t2)), r2 = this.removeEmpty(this.tokenize(i2, t2));
      return this.diffWithOptionsObj(l2, r2, t2, o2);
    }
    diffWithOptionsObj(e2, n2, t2, o2) {
      var s2;
      const i2 = (e3) => (e3 = this.postProcess(e3, t2), o2 ? void setTimeout(function() {
        o2(e3);
      }, 0) : e3), l2 = n2.length, r2 = e2.length;
      let a2 = 1, d = l2 + r2;
      null != t2.maxEditLength && (d = Math.min(d, t2.maxEditLength));
      const u = null !== (s2 = t2.timeout) && void 0 !== s2 ? s2 : 1 / 0, c = Date.now() + u, h = [{ oldPos: -1, lastComponent: void 0 }];
      let f = this.extractCommon(h[0], n2, e2, 0, t2);
      if (h[0].oldPos + 1 >= r2 && f + 1 >= l2) return i2(this.buildValues(h[0].lastComponent, n2, e2));
      let p = -1 / 0, m = 1 / 0;
      const g = () => {
        for (let o3 = Math.max(p, -a2); o3 <= Math.min(m, a2); o3 += 2) {
          let s3;
          const a3 = h[o3 - 1], d2 = h[o3 + 1];
          a3 && (h[o3 - 1] = void 0);
          let u2 = false;
          if (d2) {
            const e3 = d2.oldPos - o3;
            u2 = d2 && 0 <= e3 && e3 < l2;
          }
          const c2 = a3 && a3.oldPos + 1 < r2;
          if (u2 || c2) {
            if (s3 = !c2 || u2 && a3.oldPos < d2.oldPos ? this.addToPath(d2, true, false, 0, t2) : this.addToPath(a3, false, true, 1, t2), f = this.extractCommon(s3, n2, e2, o3, t2), s3.oldPos + 1 >= r2 && f + 1 >= l2) return i2(this.buildValues(s3.lastComponent, n2, e2)) || true;
            h[o3] = s3, s3.oldPos + 1 >= r2 && (m = Math.min(m, o3 - 1)), f + 1 >= l2 && (p = Math.max(p, o3 + 1));
          } else h[o3] = void 0;
        }
        a2++;
      };
      if (o2) !(function e3() {
        setTimeout(function() {
          if (a2 > d || Date.now() > c) return o2(void 0);
          g() || e3();
        }, 0);
      })();
      else for (; a2 <= d && Date.now() <= c; ) {
        const e3 = g();
        if (e3) return e3;
      }
    }
    addToPath(e2, n2, t2, o2, s2) {
      const i2 = e2.lastComponent;
      return i2 && !s2.oneChangePerToken && i2.added === n2 && i2.removed === t2 ? { oldPos: e2.oldPos + o2, lastComponent: { count: i2.count + 1, added: n2, removed: t2, previousComponent: i2.previousComponent } } : { oldPos: e2.oldPos + o2, lastComponent: { count: 1, added: n2, removed: t2, previousComponent: i2 } };
    }
    extractCommon(e2, n2, t2, o2, s2) {
      const i2 = n2.length, l2 = t2.length;
      let r2 = e2.oldPos, a2 = r2 - o2, d = 0;
      for (; a2 + 1 < i2 && r2 + 1 < l2 && this.equals(t2[r2 + 1], n2[a2 + 1], s2); ) a2++, r2++, d++, s2.oneChangePerToken && (e2.lastComponent = { count: 1, previousComponent: e2.lastComponent, added: false, removed: false });
      return d && !s2.oneChangePerToken && (e2.lastComponent = { count: d, previousComponent: e2.lastComponent, added: false, removed: false }), e2.oldPos = r2, a2;
    }
    equals(e2, n2, t2) {
      return t2.comparator ? t2.comparator(e2, n2) : e2 === n2 || !!t2.ignoreCase && e2.toLowerCase() === n2.toLowerCase();
    }
    removeEmpty(e2) {
      const n2 = [];
      for (let t2 = 0; t2 < e2.length; t2++) e2[t2] && n2.push(e2[t2]);
      return n2;
    }
    castInput(e2, n2) {
      return e2;
    }
    tokenize(e2, n2) {
      return Array.from(e2);
    }
    join(e2) {
      return e2.join("");
    }
    postProcess(e2, n2) {
      return e2;
    }
    get useLongestToken() {
      return false;
    }
    buildValues(e2, n2, t2) {
      const o2 = [];
      let s2;
      for (; e2; ) o2.push(e2), s2 = e2.previousComponent, delete e2.previousComponent, e2 = s2;
      o2.reverse();
      const i2 = o2.length;
      let l2 = 0, r2 = 0, a2 = 0;
      for (; l2 < i2; l2++) {
        const e3 = o2[l2];
        if (e3.removed) e3.value = this.join(t2.slice(a2, a2 + e3.count)), a2 += e3.count;
        else {
          if (!e3.added && this.useLongestToken) {
            let o3 = n2.slice(r2, r2 + e3.count);
            o3 = o3.map(function(e4, n3) {
              const o4 = t2[a2 + n3];
              return o4.length > e4.length ? o4 : e4;
            }), e3.value = this.join(o3);
          } else e3.value = this.join(n2.slice(r2, r2 + e3.count));
          r2 += e3.count, e3.added || (a2 += e3.count);
        }
      }
      return o2;
    }
  }
  const o = new class extends t {
    constructor() {
      super(...arguments), this.tokenize = i;
    }
    equals(e2, n2, t2) {
      return t2.ignoreWhitespace ? (t2.newlineIsToken && e2.includes("\n") || (e2 = e2.trim()), t2.newlineIsToken && n2.includes("\n") || (n2 = n2.trim())) : t2.ignoreNewlineAtEof && !t2.newlineIsToken && (e2.endsWith("\n") && (e2 = e2.slice(0, -1)), n2.endsWith("\n") && (n2 = n2.slice(0, -1))), super.equals(e2, n2, t2);
    }
  }();
  function s(e2, n2, t2) {
    return o.diff(e2, n2, t2);
  }
  function i(e2, n2) {
    n2.stripTrailingCr && (e2 = e2.replace(/\r\n/g, "\n"));
    const t2 = [], o2 = e2.split(/(\n|\r\n)/);
    o2[o2.length - 1] || o2.pop();
    for (let e3 = 0; e3 < o2.length; e3++) {
      const s2 = o2[e3];
      e3 % 2 && !n2.newlineIsToken ? t2[t2.length - 1] += s2 : t2.push(s2);
    }
    return t2;
  }
  function l(e2) {
    const n2 = e2.endsWith("\n"), t2 = e2.split("\n").map((e3) => e3 + "\n");
    return n2 ? t2.pop() : t2.push(t2.pop().slice(0, -1)), t2;
  }
  function r(e2, n2) {
    return "/dev/null" === e2 ? e2 : `${n2}/${e2}`;
  }
  function a(e2) {
    const n2 = (e3) => "" === e3 || e3.endsWith("\n") ? e3 : `${e3}
`, { hunks: t2 } = (function(e3, n3, t3, o3, i3, r2, a3) {
      let d2;
      d2 = a3 ? "function" == typeof a3 ? { callback: a3 } : a3 : {}, void 0 === d2.context && (d2.context = 4);
      const u2 = d2.context;
      if (d2.newlineIsToken) throw new Error("newlineIsToken may not be used with patch-generation functions, only with diffing functions");
      if (!d2.callback) return c2(s(t3, o3, d2));
      {
        const { callback: e4 } = d2;
        s(t3, o3, Object.assign(Object.assign({}, d2), { callback: (n4) => {
          const t4 = c2(n4);
          e4(t4);
        } }));
      }
      function c2(t4) {
        if (!t4) return;
        function o4(e4) {
          return e4.map(function(e5) {
            return " " + e5;
          });
        }
        t4.push({ value: "", lines: [] });
        const s2 = [];
        let a4 = 0, d3 = 0, c3 = [], h = 1, f = 1;
        for (let e4 = 0; e4 < t4.length; e4++) {
          const n4 = t4[e4], i4 = n4.lines || l(n4.value);
          if (n4.lines = i4, n4.added || n4.removed) {
            if (!a4) {
              const n5 = t4[e4 - 1];
              a4 = h, d3 = f, n5 && (c3 = u2 > 0 ? o4(n5.lines.slice(-u2)) : [], a4 -= c3.length, d3 -= c3.length);
            }
            for (const e5 of i4) c3.push((n4.added ? "+" : "-") + e5);
            n4.added ? f += i4.length : h += i4.length;
          } else {
            if (a4) if (i4.length <= 2 * u2 && e4 < t4.length - 2) for (const e5 of o4(i4)) c3.push(e5);
            else {
              const e5 = Math.min(i4.length, u2);
              for (const n6 of o4(i4.slice(0, e5))) c3.push(n6);
              const n5 = { oldStart: a4, oldLines: h - a4 + e5, newStart: d3, newLines: f - d3 + e5, lines: c3 };
              s2.push(n5), a4 = 0, d3 = 0, c3 = [];
            }
            h += i4.length, f += i4.length;
          }
        }
        for (const e4 of s2) for (let n4 = 0; n4 < e4.lines.length; n4++) e4.lines[n4].endsWith("\n") ? e4.lines[n4] = e4.lines[n4].slice(0, -1) : (e4.lines.splice(n4 + 1, 0, "\\ No newline at end of file"), n4++);
        return { oldFileName: e3, newFileName: n3, oldHeader: i3, newHeader: r2, hunks: s2 };
      }
    })("a", "b", n2(e2.original), n2(e2.new), "", "", { context: 3 }), o2 = (e3, n3) => 0 === n3 ? `${e3},0` : 1 === n3 ? `${e3}` : `${e3},${n3}`, i2 = e2.filePath?.trim(), a2 = i2 && i2.length > 0 ? i2 : "file", d = e2.fileChangeType ?? "modified", u = "added" === d ? "/dev/null" : a2, c = "deleted" === d ? "/dev/null" : a2;
    return { diffString: 0 === t2.length ? "" : [`--- ${r(u, "a")}`, `+++ ${r(c, "b")}`, ...t2.flatMap((e3) => [`@@ -${o2(e3.oldStart, e3.oldLines)} +${o2(e3.newStart, e3.newLines)} @@`, ...e3.lines])].join("\n"), linesAdded: t2.reduce((e3, n3) => e3 + n3.lines.filter((e4) => e4.startsWith("+")).length, 0), linesRemoved: t2.reduce((e3, n3) => e3 + n3.lines.filter((e4) => e4.startsWith("-")).length, 0) };
  }
  module.exports = n;
})();
