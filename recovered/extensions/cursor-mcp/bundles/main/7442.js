// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7442 range:688774..692540
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7442: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.regexpCode = t2.getEsmExportName = t2.getProperty = t2.safeStringify = t2.stringify = t2.strConcat = t2.addCodeArg = t2.str = t2._ = t2.nil = t2._Code = t2.Name = t2.IDENTIFIER = t2._CodeOrName = void 0;
    class r2 {
    }
    t2._CodeOrName = r2, t2.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class n2 extends r2 {
      constructor(e3) {
        if (super(), !t2.IDENTIFIER.test(e3)) throw new Error("CodeGen: name must be a valid identifier");
        this.str = e3;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        return false;
      }
      get names() {
        return { [this.str]: 1 };
      }
    }
    t2.Name = n2;
    class o2 extends r2 {
      constructor(e3) {
        super(), this._items = "string" == typeof e3 ? [e3] : e3;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1) return false;
        const e3 = this._items[0];
        return "" === e3 || '""' === e3;
      }
      get str() {
        var e3;
        return null !== (e3 = this._str) && void 0 !== e3 ? e3 : this._str = this._items.reduce((e4, t3) => `${e4}${t3}`, "");
      }
      get names() {
        var e3;
        return null !== (e3 = this._names) && void 0 !== e3 ? e3 : this._names = this._items.reduce((e4, t3) => (t3 instanceof n2 && (e4[t3.str] = (e4[t3.str] || 0) + 1), e4), {});
      }
    }
    function s2(e3, ...t3) {
      const r3 = [e3[0]];
      let n3 = 0;
      for (; n3 < t3.length; ) c(r3, t3[n3]), r3.push(e3[++n3]);
      return new o2(r3);
    }
    t2._Code = o2, t2.nil = new o2(""), t2._ = s2;
    const i2 = new o2("+");
    function a2(e3, ...t3) {
      const r3 = [l(e3[0])];
      let n3 = 0;
      for (; n3 < t3.length; ) r3.push(i2), c(r3, t3[n3]), r3.push(i2, l(e3[++n3]));
      return (function(e4) {
        let t4 = 1;
        for (; t4 < e4.length - 1; ) {
          if (e4[t4] === i2) {
            const r4 = u(e4[t4 - 1], e4[t4 + 1]);
            if (void 0 !== r4) {
              e4.splice(t4 - 1, 3, r4);
              continue;
            }
            e4[t4++] = "+";
          }
          t4++;
        }
      })(r3), new o2(r3);
    }
    function c(e3, t3) {
      var r3;
      t3 instanceof o2 ? e3.push(...t3._items) : t3 instanceof n2 ? e3.push(t3) : e3.push("number" == typeof (r3 = t3) || "boolean" == typeof r3 || null === r3 ? r3 : l(Array.isArray(r3) ? r3.join(",") : r3));
    }
    function u(e3, t3) {
      if ('""' === t3) return e3;
      if ('""' === e3) return t3;
      if ("string" == typeof e3) {
        if (t3 instanceof n2 || '"' !== e3[e3.length - 1]) return;
        return "string" != typeof t3 ? `${e3.slice(0, -1)}${t3}"` : '"' === t3[0] ? e3.slice(0, -1) + t3.slice(1) : void 0;
      }
      return "string" != typeof t3 || '"' !== t3[0] || e3 instanceof n2 ? void 0 : `"${e3}${t3.slice(1)}`;
    }
    function l(e3) {
      return JSON.stringify(e3).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    t2.str = a2, t2.addCodeArg = c, t2.strConcat = function(e3, t3) {
      return t3.emptyStr() ? e3 : e3.emptyStr() ? t3 : a2`${e3}${t3}`;
    }, t2.stringify = function(e3) {
      return new o2(l(e3));
    }, t2.safeStringify = l, t2.getProperty = function(e3) {
      return "string" == typeof e3 && t2.IDENTIFIER.test(e3) ? new o2(`.${e3}`) : s2`[${e3}]`;
    }, t2.getEsmExportName = function(e3) {
      if ("string" == typeof e3 && t2.IDENTIFIER.test(e3)) return new o2(`${e3}`);
      throw new Error(`CodeGen: invalid export name: ${e3}, use explicit $id name mapping`);
    }, t2.regexpCode = function(e3) {
      return new o2(e3.toString());
    };
  }