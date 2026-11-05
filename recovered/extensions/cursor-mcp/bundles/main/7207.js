// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7207 range:605257..609261
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7207: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.ValueScope = t2.ValueScopeName = t2.Scope = t2.varKinds = t2.UsedValueState = void 0;
    const n2 = r2(7442);
    class o2 extends Error {
      constructor(e3) {
        super(`CodeGen: "code" for ${e3} not defined`), this.value = e3.value;
      }
    }
    var s2;
    !(function(e3) {
      e3[e3.Started = 0] = "Started", e3[e3.Completed = 1] = "Completed";
    })(s2 || (t2.UsedValueState = s2 = {})), t2.varKinds = { const: new n2.Name("const"), let: new n2.Name("let"), var: new n2.Name("var") };
    class i2 {
      constructor({ prefixes: e3, parent: t3 } = {}) {
        this._names = {}, this._prefixes = e3, this._parent = t3;
      }
      toName(e3) {
        return e3 instanceof n2.Name ? e3 : this.name(e3);
      }
      name(e3) {
        return new n2.Name(this._newName(e3));
      }
      _newName(e3) {
        return `${e3}${(this._names[e3] || this._nameGroup(e3)).index++}`;
      }
      _nameGroup(e3) {
        var t3, r3;
        if ((null === (r3 = null === (t3 = this._parent) || void 0 === t3 ? void 0 : t3._prefixes) || void 0 === r3 ? void 0 : r3.has(e3)) || this._prefixes && !this._prefixes.has(e3)) throw new Error(`CodeGen: prefix "${e3}" is not allowed in this scope`);
        return this._names[e3] = { prefix: e3, index: 0 };
      }
    }
    t2.Scope = i2;
    class a2 extends n2.Name {
      constructor(e3, t3) {
        super(t3), this.prefix = e3;
      }
      setValue(e3, { property: t3, itemIndex: r3 }) {
        this.value = e3, this.scopePath = n2._`.${new n2.Name(t3)}[${r3}]`;
      }
    }
    t2.ValueScopeName = a2;
    const c = n2._`\n`;
    t2.ValueScope = class extends i2 {
      constructor(e3) {
        super(e3), this._values = {}, this._scope = e3.scope, this.opts = { ...e3, _n: e3.lines ? c : n2.nil };
      }
      get() {
        return this._scope;
      }
      name(e3) {
        return new a2(e3, this._newName(e3));
      }
      value(e3, t3) {
        var r3;
        if (void 0 === t3.ref) throw new Error("CodeGen: ref must be passed in value");
        const n3 = this.toName(e3), { prefix: o3 } = n3, s3 = null !== (r3 = t3.key) && void 0 !== r3 ? r3 : t3.ref;
        let i3 = this._values[o3];
        if (i3) {
          const e4 = i3.get(s3);
          if (e4) return e4;
        } else i3 = this._values[o3] = /* @__PURE__ */ new Map();
        i3.set(s3, n3);
        const a3 = this._scope[o3] || (this._scope[o3] = []), c2 = a3.length;
        return a3[c2] = t3.ref, n3.setValue(t3, { property: o3, itemIndex: c2 }), n3;
      }
      getValue(e3, t3) {
        const r3 = this._values[e3];
        if (r3) return r3.get(t3);
      }
      scopeRefs(e3, t3 = this._values) {
        return this._reduceValues(t3, (t4) => {
          if (void 0 === t4.scopePath) throw new Error(`CodeGen: name "${t4}" has no value`);
          return n2._`${e3}${t4.scopePath}`;
        });
      }
      scopeCode(e3 = this._values, t3, r3) {
        return this._reduceValues(e3, (e4) => {
          if (void 0 === e4.value) throw new Error(`CodeGen: name "${e4}" has no value`);
          return e4.value.code;
        }, t3, r3);
      }
      _reduceValues(e3, r3, i3 = {}, a3) {
        let c2 = n2.nil;
        for (const u in e3) {
          const l = e3[u];
          if (!l) continue;
          const d = i3[u] = i3[u] || /* @__PURE__ */ new Map();
          l.forEach((e4) => {
            if (d.has(e4)) return;
            d.set(e4, s2.Started);
            let i4 = r3(e4);
            if (i4) {
              const r4 = this.opts.es5 ? t2.varKinds.var : t2.varKinds.const;
              c2 = n2._`${c2}${r4} ${e4} = ${i4};${this.opts._n}`;
            } else {
              if (!(i4 = null == a3 ? void 0 : a3(e4))) throw new o2(e4);
              c2 = n2._`${c2}${i4}${this.opts._n}`;
            }
            d.set(e4, s2.Completed);
          });
        }
        return c2;
      }
    };
  }