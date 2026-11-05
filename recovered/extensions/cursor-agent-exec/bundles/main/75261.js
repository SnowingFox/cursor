// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 75261 range:6422965..6432808
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
75261: (e, t, r) => {
    "use strict";
    r.d(t, { ss: () => u, YB: () => c });
    class n {
      diff(e2, t2, r2 = {}) {
        let n2;
        "function" == typeof r2 ? (n2 = r2, r2 = {}) : "callback" in r2 && (n2 = r2.callback);
        const s2 = this.castInput(e2, r2), o2 = this.castInput(t2, r2), i2 = this.removeEmpty(this.tokenize(s2, r2)), a2 = this.removeEmpty(this.tokenize(o2, r2));
        return this.diffWithOptionsObj(i2, a2, r2, n2);
      }
      diffWithOptionsObj(e2, t2, r2, n2) {
        var s2;
        const o2 = (e3) => (e3 = this.postProcess(e3, r2), n2 ? void setTimeout(function() {
          n2(e3);
        }, 0) : e3), i2 = t2.length, a2 = e2.length;
        let c2 = 1, l2 = i2 + a2;
        null != r2.maxEditLength && (l2 = Math.min(l2, r2.maxEditLength));
        const u2 = null !== (s2 = r2.timeout) && void 0 !== s2 ? s2 : 1 / 0, d2 = Date.now() + u2, p = [{ oldPos: -1, lastComponent: void 0 }];
        let m = this.extractCommon(p[0], t2, e2, 0, r2);
        if (p[0].oldPos + 1 >= a2 && m + 1 >= i2) return o2(this.buildValues(p[0].lastComponent, t2, e2));
        let h = -1 / 0, f = 1 / 0;
        const g = () => {
          for (let n3 = Math.max(h, -c2); n3 <= Math.min(f, c2); n3 += 2) {
            let s3;
            const c3 = p[n3 - 1], l3 = p[n3 + 1];
            c3 && (p[n3 - 1] = void 0);
            let u3 = false;
            if (l3) {
              const e3 = l3.oldPos - n3;
              u3 = l3 && 0 <= e3 && e3 < i2;
            }
            const d3 = c3 && c3.oldPos + 1 < a2;
            if (u3 || d3) {
              if (s3 = !d3 || u3 && c3.oldPos < l3.oldPos ? this.addToPath(l3, true, false, 0, r2) : this.addToPath(c3, false, true, 1, r2), m = this.extractCommon(s3, t2, e2, n3, r2), s3.oldPos + 1 >= a2 && m + 1 >= i2) return o2(this.buildValues(s3.lastComponent, t2, e2)) || true;
              p[n3] = s3, s3.oldPos + 1 >= a2 && (f = Math.min(f, n3 - 1)), m + 1 >= i2 && (h = Math.max(h, n3 + 1));
            } else p[n3] = void 0;
          }
          c2++;
        };
        if (n2) !(function e3() {
          setTimeout(function() {
            if (c2 > l2 || Date.now() > d2) return n2(void 0);
            g() || e3();
          }, 0);
        })();
        else for (; c2 <= l2 && Date.now() <= d2; ) {
          const e3 = g();
          if (e3) return e3;
        }
      }
      addToPath(e2, t2, r2, n2, s2) {
        const o2 = e2.lastComponent;
        return o2 && !s2.oneChangePerToken && o2.added === t2 && o2.removed === r2 ? { oldPos: e2.oldPos + n2, lastComponent: { count: o2.count + 1, added: t2, removed: r2, previousComponent: o2.previousComponent } } : { oldPos: e2.oldPos + n2, lastComponent: { count: 1, added: t2, removed: r2, previousComponent: o2 } };
      }
      extractCommon(e2, t2, r2, n2, s2) {
        const o2 = t2.length, i2 = r2.length;
        let a2 = e2.oldPos, c2 = a2 - n2, l2 = 0;
        for (; c2 + 1 < o2 && a2 + 1 < i2 && this.equals(r2[a2 + 1], t2[c2 + 1], s2); ) c2++, a2++, l2++, s2.oneChangePerToken && (e2.lastComponent = { count: 1, previousComponent: e2.lastComponent, added: false, removed: false });
        return l2 && !s2.oneChangePerToken && (e2.lastComponent = { count: l2, previousComponent: e2.lastComponent, added: false, removed: false }), e2.oldPos = a2, c2;
      }
      equals(e2, t2, r2) {
        return r2.comparator ? r2.comparator(e2, t2) : e2 === t2 || !!r2.ignoreCase && e2.toLowerCase() === t2.toLowerCase();
      }
      removeEmpty(e2) {
        const t2 = [];
        for (let r2 = 0; r2 < e2.length; r2++) e2[r2] && t2.push(e2[r2]);
        return t2;
      }
      castInput(e2, t2) {
        return e2;
      }
      tokenize(e2, t2) {
        return Array.from(e2);
      }
      join(e2) {
        return e2.join("");
      }
      postProcess(e2, t2) {
        return e2;
      }
      get useLongestToken() {
        return false;
      }
      buildValues(e2, t2, r2) {
        const n2 = [];
        let s2;
        for (; e2; ) n2.push(e2), s2 = e2.previousComponent, delete e2.previousComponent, e2 = s2;
        n2.reverse();
        const o2 = n2.length;
        let i2 = 0, a2 = 0, c2 = 0;
        for (; i2 < o2; i2++) {
          const e3 = n2[i2];
          if (e3.removed) e3.value = this.join(r2.slice(c2, c2 + e3.count)), c2 += e3.count;
          else {
            if (!e3.added && this.useLongestToken) {
              let n3 = t2.slice(a2, a2 + e3.count);
              n3 = n3.map(function(e4, t3) {
                const n4 = r2[c2 + t3];
                return n4.length > e4.length ? n4 : e4;
              }), e3.value = this.join(n3);
            } else e3.value = this.join(t2.slice(a2, a2 + e3.count));
            a2 += e3.count, e3.added || (c2 += e3.count);
          }
        }
        return n2;
      }
    }
    const s = new class extends n {
      constructor() {
        super(...arguments), this.tokenize = i;
      }
      equals(e2, t2, r2) {
        return r2.ignoreWhitespace ? (r2.newlineIsToken && e2.includes("\n") || (e2 = e2.trim()), r2.newlineIsToken && t2.includes("\n") || (t2 = t2.trim())) : r2.ignoreNewlineAtEof && !r2.newlineIsToken && (e2.endsWith("\n") && (e2 = e2.slice(0, -1)), t2.endsWith("\n") && (t2 = t2.slice(0, -1))), super.equals(e2, t2, r2);
      }
    }();
    function o(e2, t2, r2) {
      return s.diff(e2, t2, r2);
    }
    function i(e2, t2) {
      t2.stripTrailingCr && (e2 = e2.replace(/\r\n/g, "\n"));
      const r2 = [], n2 = e2.split(/(\n|\r\n)/);
      n2[n2.length - 1] || n2.pop();
      for (let e3 = 0; e3 < n2.length; e3++) {
        const s2 = n2[e3];
        e3 % 2 && !t2.newlineIsToken ? r2[r2.length - 1] += s2 : r2.push(s2);
      }
      return r2;
    }
    const a = { includeIndex: true, includeUnderline: true, includeFileHeaders: true };
    function c(e2, t2, r2, n2, s2, i2, a2) {
      let c2;
      c2 = a2 ? "function" == typeof a2 ? { callback: a2 } : a2 : {}, void 0 === c2.context && (c2.context = 4);
      const l2 = c2.context;
      if (c2.newlineIsToken) throw new Error("newlineIsToken may not be used with patch-generation functions, only with diffing functions");
      if (!c2.callback) return u2(o(r2, n2, c2));
      {
        const { callback: e3 } = c2;
        o(r2, n2, Object.assign(Object.assign({}, c2), { callback: (t3) => {
          const r3 = u2(t3);
          e3(r3);
        } }));
      }
      function u2(r3) {
        if (!r3) return;
        function n3(e3) {
          return e3.map(function(e4) {
            return " " + e4;
          });
        }
        r3.push({ value: "", lines: [] });
        const o2 = [];
        let a3 = 0, c3 = 0, u3 = [], p = 1, m = 1;
        for (let e3 = 0; e3 < r3.length; e3++) {
          const t3 = r3[e3], s3 = t3.lines || d(t3.value);
          if (t3.lines = s3, t3.added || t3.removed) {
            if (!a3) {
              const t4 = r3[e3 - 1];
              a3 = p, c3 = m, t4 && (u3 = l2 > 0 ? n3(t4.lines.slice(-l2)) : [], a3 -= u3.length, c3 -= u3.length);
            }
            for (const e4 of s3) u3.push((t3.added ? "+" : "-") + e4);
            t3.added ? m += s3.length : p += s3.length;
          } else {
            if (a3) if (s3.length <= 2 * l2 && e3 < r3.length - 2) for (const e4 of n3(s3)) u3.push(e4);
            else {
              const e4 = Math.min(s3.length, l2);
              for (const t5 of n3(s3.slice(0, e4))) u3.push(t5);
              const t4 = { oldStart: a3, oldLines: p - a3 + e4, newStart: c3, newLines: m - c3 + e4, lines: u3 };
              o2.push(t4), a3 = 0, c3 = 0, u3 = [];
            }
            p += s3.length, m += s3.length;
          }
        }
        for (const e3 of o2) for (let t3 = 0; t3 < e3.lines.length; t3++) e3.lines[t3].endsWith("\n") ? e3.lines[t3] = e3.lines[t3].slice(0, -1) : (e3.lines.splice(t3 + 1, 0, "\\ No newline at end of file"), t3++);
        return { oldFileName: e2, newFileName: t2, oldHeader: s2, newHeader: i2, hunks: o2 };
      }
    }
    function l(e2, t2) {
      if (t2 || (t2 = a), Array.isArray(e2)) {
        if (e2.length > 1 && !t2.includeFileHeaders) throw new Error("Cannot omit file headers on a multi-file patch. (The result would be unparseable; how would a tool trying to apply the patch know which changes are to which file?)");
        return e2.map((e3) => l(e3, t2)).join("\n");
      }
      const r2 = [];
      t2.includeIndex && e2.oldFileName == e2.newFileName && r2.push("Index: " + e2.oldFileName), t2.includeUnderline && r2.push("==================================================================="), t2.includeFileHeaders && (r2.push("--- " + e2.oldFileName + (void 0 === e2.oldHeader ? "" : "	" + e2.oldHeader)), r2.push("+++ " + e2.newFileName + (void 0 === e2.newHeader ? "" : "	" + e2.newHeader)));
      for (let t3 = 0; t3 < e2.hunks.length; t3++) {
        const n2 = e2.hunks[t3];
        0 === n2.oldLines && (n2.oldStart -= 1), 0 === n2.newLines && (n2.newStart -= 1), r2.push("@@ -" + n2.oldStart + "," + n2.oldLines + " +" + n2.newStart + "," + n2.newLines + " @@");
        for (const e3 of n2.lines) r2.push(e3);
      }
      return r2.join("\n") + "\n";
    }
    function u(e2, t2, r2, n2, s2, o2, i2) {
      if ("function" == typeof i2 && (i2 = { callback: i2 }), !(null == i2 ? void 0 : i2.callback)) {
        const a2 = c(e2, t2, r2, n2, s2, o2, i2);
        if (!a2) return;
        return l(a2, null == i2 ? void 0 : i2.headerOptions);
      }
      {
        const { callback: a2 } = i2;
        c(e2, t2, r2, n2, s2, o2, Object.assign(Object.assign({}, i2), { callback: (e3) => {
          a2(e3 ? l(e3, i2.headerOptions) : void 0);
        } }));
      }
    }
    function d(e2) {
      const t2 = e2.endsWith("\n"), r2 = e2.split("\n").map((e3) => e3 + "\n");
      return t2 ? r2.pop() : r2.push(r2.pop().slice(0, -1)), r2;
    }
  }