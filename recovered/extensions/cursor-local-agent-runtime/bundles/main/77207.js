// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 77207 range:7281937..7285898
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
77207: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.ValueScope = t.ValueScopeName = t.Scope = t.varKinds = t.UsedValueState = void 0;
    const n = r(77442);
    class o extends Error {
      constructor(e2) {
        super(`CodeGen: "code" for ${e2} not defined`), this.value = e2.value;
      }
    }
    var s;
    !(function(e2) {
      e2[e2.Started = 0] = "Started", e2[e2.Completed = 1] = "Completed";
    })(s || (t.UsedValueState = s = {})), t.varKinds = { const: new n.Name("const"), let: new n.Name("let"), var: new n.Name("var") };
    class i {
      constructor({ prefixes: e2, parent: t2 } = {}) {
        this._names = {}, this._prefixes = e2, this._parent = t2;
      }
      toName(e2) {
        return e2 instanceof n.Name ? e2 : this.name(e2);
      }
      name(e2) {
        return new n.Name(this._newName(e2));
      }
      _newName(e2) {
        return `${e2}${(this._names[e2] || this._nameGroup(e2)).index++}`;
      }
      _nameGroup(e2) {
        var t2, r2;
        if ((null === (r2 = null === (t2 = this._parent) || void 0 === t2 ? void 0 : t2._prefixes) || void 0 === r2 ? void 0 : r2.has(e2)) || this._prefixes && !this._prefixes.has(e2)) throw new Error(`CodeGen: prefix "${e2}" is not allowed in this scope`);
        return this._names[e2] = { prefix: e2, index: 0 };
      }
    }
    t.Scope = i;
    class a extends n.Name {
      constructor(e2, t2) {
        super(t2), this.prefix = e2;
      }
      setValue(e2, { property: t2, itemIndex: r2 }) {
        this.value = e2, this.scopePath = n._`.${new n.Name(t2)}[${r2}]`;
      }
    }
    t.ValueScopeName = a;
    const l = n._`\n`;
    t.ValueScope = class extends i {
      constructor(e2) {
        super(e2), this._values = {}, this._scope = e2.scope, this.opts = { ...e2, _n: e2.lines ? l : n.nil };
      }
      get() {
        return this._scope;
      }
      name(e2) {
        return new a(e2, this._newName(e2));
      }
      value(e2, t2) {
        var r2;
        if (void 0 === t2.ref) throw new Error("CodeGen: ref must be passed in value");
        const n2 = this.toName(e2), { prefix: o2 } = n2, s2 = null !== (r2 = t2.key) && void 0 !== r2 ? r2 : t2.ref;
        let i2 = this._values[o2];
        if (i2) {
          const e3 = i2.get(s2);
          if (e3) return e3;
        } else i2 = this._values[o2] = /* @__PURE__ */ new Map();
        i2.set(s2, n2);
        const a2 = this._scope[o2] || (this._scope[o2] = []), l2 = a2.length;
        return a2[l2] = t2.ref, n2.setValue(t2, { property: o2, itemIndex: l2 }), n2;
      }
      getValue(e2, t2) {
        const r2 = this._values[e2];
        if (r2) return r2.get(t2);
      }
      scopeRefs(e2, t2 = this._values) {
        return this._reduceValues(t2, (t3) => {
          if (void 0 === t3.scopePath) throw new Error(`CodeGen: name "${t3}" has no value`);
          return n._`${e2}${t3.scopePath}`;
        });
      }
      scopeCode(e2 = this._values, t2, r2) {
        return this._reduceValues(e2, (e3) => {
          if (void 0 === e3.value) throw new Error(`CodeGen: name "${e3}" has no value`);
          return e3.value.code;
        }, t2, r2);
      }
      _reduceValues(e2, r2, i2 = {}, a2) {
        let l2 = n.nil;
        for (const c in e2) {
          const u = e2[c];
          if (!u) continue;
          const d = i2[c] = i2[c] || /* @__PURE__ */ new Map();
          u.forEach((e3) => {
            if (d.has(e3)) return;
            d.set(e3, s.Started);
            let i3 = r2(e3);
            if (i3) {
              const r3 = this.opts.es5 ? t.varKinds.var : t.varKinds.const;
              l2 = n._`${l2}${r3} ${e3} = ${i3};${this.opts._n}`;
            } else {
              if (!(i3 = null == a2 ? void 0 : a2(e3))) throw new o(e3);
              l2 = n._`${l2}${i3}${this.opts._n}`;
            }
            d.set(e3, s.Completed);
          });
        }
        return l2;
      }
    };
  }