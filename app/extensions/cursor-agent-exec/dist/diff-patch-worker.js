(() => {
  "use strict";
  var e = { d: (n2, t2) => {
    for (var o2 in t2) e.o(t2, o2) && !e.o(n2, o2) && Object.defineProperty(n2, o2, { enumerable: true, get: t2[o2] });
  }, o: (e2, n2) => Object.prototype.hasOwnProperty.call(e2, n2), r: (e2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
  } }, n = {};
  e.r(n), e.d(n, { default: () => d });
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
      let a2 = 1, c2 = l2 + r2;
      null != t2.maxEditLength && (c2 = Math.min(c2, t2.maxEditLength));
      const d2 = null !== (s2 = t2.timeout) && void 0 !== s2 ? s2 : 1 / 0, u = Date.now() + d2, h = [{ oldPos: -1, lastComponent: void 0 }];
      let p = this.extractCommon(h[0], n2, e2, 0, t2);
      if (h[0].oldPos + 1 >= r2 && p + 1 >= l2) return i2(this.buildValues(h[0].lastComponent, n2, e2));
      let f = -1 / 0, m = 1 / 0;
      const g = () => {
        for (let o3 = Math.max(f, -a2); o3 <= Math.min(m, a2); o3 += 2) {
          let s3;
          const a3 = h[o3 - 1], c3 = h[o3 + 1];
          a3 && (h[o3 - 1] = void 0);
          let d3 = false;
          if (c3) {
            const e3 = c3.oldPos - o3;
            d3 = c3 && 0 <= e3 && e3 < l2;
          }
          const u2 = a3 && a3.oldPos + 1 < r2;
          if (d3 || u2) {
            if (s3 = !u2 || d3 && a3.oldPos < c3.oldPos ? this.addToPath(c3, true, false, 0, t2) : this.addToPath(a3, false, true, 1, t2), p = this.extractCommon(s3, n2, e2, o3, t2), s3.oldPos + 1 >= r2 && p + 1 >= l2) return i2(this.buildValues(s3.lastComponent, n2, e2)) || true;
            h[o3] = s3, s3.oldPos + 1 >= r2 && (m = Math.min(m, o3 - 1)), p + 1 >= l2 && (f = Math.max(f, o3 + 1));
          } else h[o3] = void 0;
        }
        a2++;
      };
      if (o2) !(function e3() {
        setTimeout(function() {
          if (a2 > c2 || Date.now() > u) return o2(void 0);
          g() || e3();
        }, 0);
      })();
      else for (; a2 <= c2 && Date.now() <= u; ) {
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
      let r2 = e2.oldPos, a2 = r2 - o2, c2 = 0;
      for (; a2 + 1 < i2 && r2 + 1 < l2 && this.equals(t2[r2 + 1], n2[a2 + 1], s2); ) a2++, r2++, c2++, s2.oneChangePerToken && (e2.lastComponent = { count: 1, previousComponent: e2.lastComponent, added: false, removed: false });
      return c2 && !s2.oneChangePerToken && (e2.lastComponent = { count: c2, previousComponent: e2.lastComponent, added: false, removed: false }), e2.oldPos = r2, a2;
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
  const l = { includeIndex: true, includeUnderline: true, includeFileHeaders: true };
  function r(e2, n2, t2, o2, i2, l2, r2) {
    let a2;
    a2 = r2 ? "function" == typeof r2 ? { callback: r2 } : r2 : {}, void 0 === a2.context && (a2.context = 4);
    const d2 = a2.context;
    if (a2.newlineIsToken) throw new Error("newlineIsToken may not be used with patch-generation functions, only with diffing functions");
    if (!a2.callback) return u(s(t2, o2, a2));
    {
      const { callback: e3 } = a2;
      s(t2, o2, Object.assign(Object.assign({}, a2), { callback: (n3) => {
        const t3 = u(n3);
        e3(t3);
      } }));
    }
    function u(t3) {
      if (!t3) return;
      function o3(e3) {
        return e3.map(function(e4) {
          return " " + e4;
        });
      }
      t3.push({ value: "", lines: [] });
      const s2 = [];
      let r3 = 0, a3 = 0, u2 = [], h = 1, p = 1;
      for (let e3 = 0; e3 < t3.length; e3++) {
        const n3 = t3[e3], i3 = n3.lines || c(n3.value);
        if (n3.lines = i3, n3.added || n3.removed) {
          if (!r3) {
            const n4 = t3[e3 - 1];
            r3 = h, a3 = p, n4 && (u2 = d2 > 0 ? o3(n4.lines.slice(-d2)) : [], r3 -= u2.length, a3 -= u2.length);
          }
          for (const e4 of i3) u2.push((n3.added ? "+" : "-") + e4);
          n3.added ? p += i3.length : h += i3.length;
        } else {
          if (r3) if (i3.length <= 2 * d2 && e3 < t3.length - 2) for (const e4 of o3(i3)) u2.push(e4);
          else {
            const e4 = Math.min(i3.length, d2);
            for (const n5 of o3(i3.slice(0, e4))) u2.push(n5);
            const n4 = { oldStart: r3, oldLines: h - r3 + e4, newStart: a3, newLines: p - a3 + e4, lines: u2 };
            s2.push(n4), r3 = 0, a3 = 0, u2 = [];
          }
          h += i3.length, p += i3.length;
        }
      }
      for (const e3 of s2) for (let n3 = 0; n3 < e3.lines.length; n3++) e3.lines[n3].endsWith("\n") ? e3.lines[n3] = e3.lines[n3].slice(0, -1) : (e3.lines.splice(n3 + 1, 0, "\\ No newline at end of file"), n3++);
      return { oldFileName: e2, newFileName: n2, oldHeader: i2, newHeader: l2, hunks: s2 };
    }
  }
  function a(e2, n2) {
    if (n2 || (n2 = l), Array.isArray(e2)) {
      if (e2.length > 1 && !n2.includeFileHeaders) throw new Error("Cannot omit file headers on a multi-file patch. (The result would be unparseable; how would a tool trying to apply the patch know which changes are to which file?)");
      return e2.map((e3) => a(e3, n2)).join("\n");
    }
    const t2 = [];
    n2.includeIndex && e2.oldFileName == e2.newFileName && t2.push("Index: " + e2.oldFileName), n2.includeUnderline && t2.push("==================================================================="), n2.includeFileHeaders && (t2.push("--- " + e2.oldFileName + (void 0 === e2.oldHeader ? "" : "	" + e2.oldHeader)), t2.push("+++ " + e2.newFileName + (void 0 === e2.newHeader ? "" : "	" + e2.newHeader)));
    for (let n3 = 0; n3 < e2.hunks.length; n3++) {
      const o2 = e2.hunks[n3];
      0 === o2.oldLines && (o2.oldStart -= 1), 0 === o2.newLines && (o2.newStart -= 1), t2.push("@@ -" + o2.oldStart + "," + o2.oldLines + " +" + o2.newStart + "," + o2.newLines + " @@");
      for (const e3 of o2.lines) t2.push(e3);
    }
    return t2.join("\n") + "\n";
  }
  function c(e2) {
    const n2 = e2.endsWith("\n"), t2 = e2.split("\n").map((e3) => e3 + "\n");
    return n2 ? t2.pop() : t2.push(t2.pop().slice(0, -1)), t2;
  }
  function d(e2) {
    return { patch: (n2 = e2.filePath || "", t2 = e2.original, o2 = e2.new, s2 = "", i2 = "", l2 = { context: 2 }, (function(e3, n3, t3, o3, s3, i3, l3) {
      if ("function" == typeof l3 && (l3 = { callback: l3 }), !(null == l3 ? void 0 : l3.callback)) {
        const c2 = r(e3, n3, t3, o3, s3, i3, l3);
        if (!c2) return;
        return a(c2, null == l3 ? void 0 : l3.headerOptions);
      }
      {
        const { callback: c2 } = l3;
        r(e3, n3, t3, o3, s3, i3, Object.assign(Object.assign({}, l3), { callback: (e4) => {
          c2(e4 ? a(e4, l3.headerOptions) : void 0);
        } }));
      }
    })(n2, n2, t2, o2, s2, i2, l2)) };
    var n2, t2, o2, s2, i2, l2;
  }
  module.exports = n;
})();
