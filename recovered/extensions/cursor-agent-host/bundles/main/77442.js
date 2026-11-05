// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 77442 range:11337640..11341342
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
77442: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.regexpCode = t.getEsmExportName = t.getProperty = t.safeStringify = t.stringify = t.strConcat = t.addCodeArg = t.str = t._ = t.nil = t._Code = t.Name = t.IDENTIFIER = t._CodeOrName = void 0;
    class r {
    }
    t._CodeOrName = r, t.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class n extends r {
      constructor(e2) {
        if (super(), !t.IDENTIFIER.test(e2)) throw new Error("CodeGen: name must be a valid identifier");
        this.str = e2;
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
    t.Name = n;
    class s extends r {
      constructor(e2) {
        super(), this._items = "string" == typeof e2 ? [e2] : e2;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1) return false;
        const e2 = this._items[0];
        return "" === e2 || '""' === e2;
      }
      get str() {
        var e2;
        return null !== (e2 = this._str) && void 0 !== e2 ? e2 : this._str = this._items.reduce((e3, t2) => `${e3}${t2}`, "");
      }
      get names() {
        var e2;
        return null !== (e2 = this._names) && void 0 !== e2 ? e2 : this._names = this._items.reduce((e3, t2) => (t2 instanceof n && (e3[t2.str] = (e3[t2.str] || 0) + 1), e3), {});
      }
    }
    function o(e2, ...t2) {
      const r2 = [e2[0]];
      let n2 = 0;
      for (; n2 < t2.length; ) c(r2, t2[n2]), r2.push(e2[++n2]);
      return new s(r2);
    }
    t._Code = s, t.nil = new s(""), t._ = o;
    const i = new s("+");
    function a(e2, ...t2) {
      const r2 = [u(e2[0])];
      let n2 = 0;
      for (; n2 < t2.length; ) r2.push(i), c(r2, t2[n2]), r2.push(i, u(e2[++n2]));
      return (function(e3) {
        let t3 = 1;
        for (; t3 < e3.length - 1; ) {
          if (e3[t3] === i) {
            const r3 = l(e3[t3 - 1], e3[t3 + 1]);
            if (void 0 !== r3) {
              e3.splice(t3 - 1, 3, r3);
              continue;
            }
            e3[t3++] = "+";
          }
          t3++;
        }
      })(r2), new s(r2);
    }
    function c(e2, t2) {
      var r2;
      t2 instanceof s ? e2.push(...t2._items) : t2 instanceof n ? e2.push(t2) : e2.push("number" == typeof (r2 = t2) || "boolean" == typeof r2 || null === r2 ? r2 : u(Array.isArray(r2) ? r2.join(",") : r2));
    }
    function l(e2, t2) {
      if ('""' === t2) return e2;
      if ('""' === e2) return t2;
      if ("string" == typeof e2) {
        if (t2 instanceof n || '"' !== e2[e2.length - 1]) return;
        return "string" != typeof t2 ? `${e2.slice(0, -1)}${t2}"` : '"' === t2[0] ? e2.slice(0, -1) + t2.slice(1) : void 0;
      }
      return "string" != typeof t2 || '"' !== t2[0] || e2 instanceof n ? void 0 : `"${e2}${t2.slice(1)}`;
    }
    function u(e2) {
      return JSON.stringify(e2).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    t.str = a, t.addCodeArg = c, t.strConcat = function(e2, t2) {
      return t2.emptyStr() ? e2 : e2.emptyStr() ? t2 : a`${e2}${t2}`;
    }, t.stringify = function(e2) {
      return new s(u(e2));
    }, t.safeStringify = u, t.getProperty = function(e2) {
      return "string" == typeof e2 && t.IDENTIFIER.test(e2) ? new s(`.${e2}`) : o`[${e2}]`;
    }, t.getEsmExportName = function(e2) {
      if ("string" == typeof e2 && t.IDENTIFIER.test(e2)) return new s(`${e2}`);
      throw new Error(`CodeGen: invalid export name: ${e2}, use explicit $id name mapping`);
    }, t.regexpCode = function(e2) {
      return new s(e2.toString());
    };
  }