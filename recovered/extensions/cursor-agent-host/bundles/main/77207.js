// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 77207 range:11303366..11307327
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
77207: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.ValueScope = t.ValueScopeName = t.Scope = t.varKinds = t.UsedValueState = void 0;
    const n = r(77442);
    class s extends Error {
      constructor(e2) {
        super(`CodeGen: "code" for ${e2} not defined`), this.value = e2.value;
      }
    }
    var o;
    !(function(e2) {
      e2[e2.Started = 0] = "Started", e2[e2.Completed = 1] = "Completed";
    })(o || (t.UsedValueState = o = {})), t.varKinds = { const: new n.Name("const"), let: new n.Name("let"), var: new n.Name("var") };
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
    const c = n._`\n`;
    t.ValueScope = class extends i {
      constructor(e2) {
        super(e2), this._values = {}, this._scope = e2.scope, this.opts = { ...e2, _n: e2.lines ? c : n.nil };
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
        const n2 = this.toName(e2), { prefix: s2 } = n2, o2 = null !== (r2 = t2.key) && void 0 !== r2 ? r2 : t2.ref;
        let i2 = this._values[s2];
        if (i2) {
          const e3 = i2.get(o2);
          if (e3) return e3;
        } else i2 = this._values[s2] = /* @__PURE__ */ new Map();
        i2.set(o2, n2);
        const a2 = this._scope[s2] || (this._scope[s2] = []), c2 = a2.length;
        return a2[c2] = t2.ref, n2.setValue(t2, { property: s2, itemIndex: c2 }), n2;
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
        let c2 = n.nil;
        for (const l in e2) {
          const u = e2[l];
          if (!u) continue;
          const d = i2[l] = i2[l] || /* @__PURE__ */ new Map();
          u.forEach((e3) => {
            if (d.has(e3)) return;
            d.set(e3, o.Started);
            let i3 = r2(e3);
            if (i3) {
              const r3 = this.opts.es5 ? t.varKinds.var : t.varKinds.const;
              c2 = n._`${c2}${r3} ${e3} = ${i3};${this.opts._n}`;
            } else {
              if (!(i3 = null == a2 ? void 0 : a2(e3))) throw new s(e3);
              c2 = n._`${c2}${i3}${this.opts._n}`;
            }
            d.set(e3, o.Completed);
          });
        }
        return c2;
      }
    };
  }