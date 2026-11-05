// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 95183 range:7786192..7803405
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
95183: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.or = t.and = t.not = t.CodeGen = t.operators = t.varKinds = t.ValueScopeName = t.ValueScope = t.Scope = t.Name = t.regexpCode = t.stringify = t.getProperty = t.nil = t.strConcat = t.str = t._ = void 0;
    const n = r(77442), o = r(77207);
    var s = r(77442);
    Object.defineProperty(t, "_", { enumerable: true, get: function() {
      return s._;
    } }), Object.defineProperty(t, "str", { enumerable: true, get: function() {
      return s.str;
    } }), Object.defineProperty(t, "strConcat", { enumerable: true, get: function() {
      return s.strConcat;
    } }), Object.defineProperty(t, "nil", { enumerable: true, get: function() {
      return s.nil;
    } }), Object.defineProperty(t, "getProperty", { enumerable: true, get: function() {
      return s.getProperty;
    } }), Object.defineProperty(t, "stringify", { enumerable: true, get: function() {
      return s.stringify;
    } }), Object.defineProperty(t, "regexpCode", { enumerable: true, get: function() {
      return s.regexpCode;
    } }), Object.defineProperty(t, "Name", { enumerable: true, get: function() {
      return s.Name;
    } });
    var i = r(77207);
    Object.defineProperty(t, "Scope", { enumerable: true, get: function() {
      return i.Scope;
    } }), Object.defineProperty(t, "ValueScope", { enumerable: true, get: function() {
      return i.ValueScope;
    } }), Object.defineProperty(t, "ValueScopeName", { enumerable: true, get: function() {
      return i.ValueScopeName;
    } }), Object.defineProperty(t, "varKinds", { enumerable: true, get: function() {
      return i.varKinds;
    } }), t.operators = { GT: new n._Code(">"), GTE: new n._Code(">="), LT: new n._Code("<"), LTE: new n._Code("<="), EQ: new n._Code("==="), NEQ: new n._Code("!=="), NOT: new n._Code("!"), OR: new n._Code("||"), AND: new n._Code("&&"), ADD: new n._Code("+") };
    class a {
      optimizeNodes() {
        return this;
      }
      optimizeNames(e2, t2) {
        return this;
      }
    }
    class l extends a {
      constructor(e2, t2, r2) {
        super(), this.varKind = e2, this.name = t2, this.rhs = r2;
      }
      render({ es5: e2, _n: t2 }) {
        const r2 = e2 ? o.varKinds.var : this.varKind, n2 = void 0 === this.rhs ? "" : ` = ${this.rhs}`;
        return `${r2} ${this.name}${n2};` + t2;
      }
      optimizeNames(e2, t2) {
        if (e2[this.name.str]) return this.rhs && (this.rhs = M(this.rhs, e2, t2)), this;
      }
      get names() {
        return this.rhs instanceof n._CodeOrName ? this.rhs.names : {};
      }
    }
    class c extends a {
      constructor(e2, t2, r2) {
        super(), this.lhs = e2, this.rhs = t2, this.sideEffects = r2;
      }
      render({ _n: e2 }) {
        return `${this.lhs} = ${this.rhs};` + e2;
      }
      optimizeNames(e2, t2) {
        if (!(this.lhs instanceof n.Name) || e2[this.lhs.str] || this.sideEffects) return this.rhs = M(this.rhs, e2, t2), this;
      }
      get names() {
        return P(this.lhs instanceof n.Name ? {} : { ...this.lhs.names }, this.rhs);
      }
    }
    class u extends c {
      constructor(e2, t2, r2, n2) {
        super(e2, r2, n2), this.op = t2;
      }
      render({ _n: e2 }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + e2;
      }
    }
    class d extends a {
      constructor(e2) {
        super(), this.label = e2, this.names = {};
      }
      render({ _n: e2 }) {
        return `${this.label}:` + e2;
      }
    }
    class p extends a {
      constructor(e2) {
        super(), this.label = e2, this.names = {};
      }
      render({ _n: e2 }) {
        return `break${this.label ? ` ${this.label}` : ""};` + e2;
      }
    }
    class h extends a {
      constructor(e2) {
        super(), this.error = e2;
      }
      render({ _n: e2 }) {
        return `throw ${this.error};` + e2;
      }
      get names() {
        return this.error.names;
      }
    }
    class m extends a {
      constructor(e2) {
        super(), this.code = e2;
      }
      render({ _n: e2 }) {
        return `${this.code};` + e2;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(e2, t2) {
        return this.code = M(this.code, e2, t2), this;
      }
      get names() {
        return this.code instanceof n._CodeOrName ? this.code.names : {};
      }
    }
    class f extends a {
      constructor(e2 = []) {
        super(), this.nodes = e2;
      }
      render(e2) {
        return this.nodes.reduce((t2, r2) => t2 + r2.render(e2), "");
      }
      optimizeNodes() {
        const { nodes: e2 } = this;
        let t2 = e2.length;
        for (; t2--; ) {
          const r2 = e2[t2].optimizeNodes();
          Array.isArray(r2) ? e2.splice(t2, 1, ...r2) : r2 ? e2[t2] = r2 : e2.splice(t2, 1);
        }
        return e2.length > 0 ? this : void 0;
      }
      optimizeNames(e2, t2) {
        const { nodes: r2 } = this;
        let n2 = r2.length;
        for (; n2--; ) {
          const o2 = r2[n2];
          o2.optimizeNames(e2, t2) || (R(e2, o2.names), r2.splice(n2, 1));
        }
        return r2.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((e2, t2) => A(e2, t2.names), {});
      }
    }
    class g extends f {
      render(e2) {
        return "{" + e2._n + super.render(e2) + "}" + e2._n;
      }
    }
    class y extends f {
    }
    class v extends g {
    }
    v.kind = "else";
    class w extends g {
      constructor(e2, t2) {
        super(t2), this.condition = e2;
      }
      render(e2) {
        let t2 = `if(${this.condition})` + super.render(e2);
        return this.else && (t2 += "else " + this.else.render(e2)), t2;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const e2 = this.condition;
        if (true === e2) return this.nodes;
        let t2 = this.else;
        if (t2) {
          const e3 = t2.optimizeNodes();
          t2 = this.else = Array.isArray(e3) ? new v(e3) : e3;
        }
        return t2 ? false === e2 ? t2 instanceof w ? t2 : t2.nodes : this.nodes.length ? this : new w(O(e2), t2 instanceof w ? [t2] : t2.nodes) : false !== e2 && this.nodes.length ? this : void 0;
      }
      optimizeNames(e2, t2) {
        var r2;
        if (this.else = null === (r2 = this.else) || void 0 === r2 ? void 0 : r2.optimizeNames(e2, t2), super.optimizeNames(e2, t2) || this.else) return this.condition = M(this.condition, e2, t2), this;
      }
      get names() {
        const e2 = super.names;
        return P(e2, this.condition), this.else && A(e2, this.else.names), e2;
      }
    }
    w.kind = "if";
    class b extends g {
    }
    b.kind = "for";
    class _ extends b {
      constructor(e2) {
        super(), this.iteration = e2;
      }
      render(e2) {
        return `for(${this.iteration})` + super.render(e2);
      }
      optimizeNames(e2, t2) {
        if (super.optimizeNames(e2, t2)) return this.iteration = M(this.iteration, e2, t2), this;
      }
      get names() {
        return A(super.names, this.iteration.names);
      }
    }
    class S extends b {
      constructor(e2, t2, r2, n2) {
        super(), this.varKind = e2, this.name = t2, this.from = r2, this.to = n2;
      }
      render(e2) {
        const t2 = e2.es5 ? o.varKinds.var : this.varKind, { name: r2, from: n2, to: s2 } = this;
        return `for(${t2} ${r2}=${n2}; ${r2}<${s2}; ${r2}++)` + super.render(e2);
      }
      get names() {
        const e2 = P(super.names, this.from);
        return P(e2, this.to);
      }
    }
    class x extends b {
      constructor(e2, t2, r2, n2) {
        super(), this.loop = e2, this.varKind = t2, this.name = r2, this.iterable = n2;
      }
      render(e2) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(e2);
      }
      optimizeNames(e2, t2) {
        if (super.optimizeNames(e2, t2)) return this.iterable = M(this.iterable, e2, t2), this;
      }
      get names() {
        return A(super.names, this.iterable.names);
      }
    }
    class k extends g {
      constructor(e2, t2, r2) {
        super(), this.name = e2, this.args = t2, this.async = r2;
      }
      render(e2) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(e2);
      }
    }
    k.kind = "func";
    class E extends f {
      render(e2) {
        return "return " + super.render(e2);
      }
    }
    E.kind = "return";
    class T extends g {
      render(e2) {
        let t2 = "try" + super.render(e2);
        return this.catch && (t2 += this.catch.render(e2)), this.finally && (t2 += this.finally.render(e2)), t2;
      }
      optimizeNodes() {
        var e2, t2;
        return super.optimizeNodes(), null === (e2 = this.catch) || void 0 === e2 || e2.optimizeNodes(), null === (t2 = this.finally) || void 0 === t2 || t2.optimizeNodes(), this;
      }
      optimizeNames(e2, t2) {
        var r2, n2;
        return super.optimizeNames(e2, t2), null === (r2 = this.catch) || void 0 === r2 || r2.optimizeNames(e2, t2), null === (n2 = this.finally) || void 0 === n2 || n2.optimizeNames(e2, t2), this;
      }
      get names() {
        const e2 = super.names;
        return this.catch && A(e2, this.catch.names), this.finally && A(e2, this.finally.names), e2;
      }
    }
    class C extends g {
      constructor(e2) {
        super(), this.error = e2;
      }
      render(e2) {
        return `catch(${this.error})` + super.render(e2);
      }
    }
    C.kind = "catch";
    class I extends g {
      render(e2) {
        return "finally" + super.render(e2);
      }
    }
    I.kind = "finally";
    function A(e2, t2) {
      for (const r2 in t2) e2[r2] = (e2[r2] || 0) + (t2[r2] || 0);
      return e2;
    }
    function P(e2, t2) {
      return t2 instanceof n._CodeOrName ? A(e2, t2.names) : e2;
    }
    function M(e2, t2, r2) {
      return e2 instanceof n.Name ? s2(e2) : (o2 = e2) instanceof n._Code && o2._items.some((e3) => e3 instanceof n.Name && 1 === t2[e3.str] && void 0 !== r2[e3.str]) ? new n._Code(e2._items.reduce((e3, t3) => (t3 instanceof n.Name && (t3 = s2(t3)), t3 instanceof n._Code ? e3.push(...t3._items) : e3.push(t3), e3), [])) : e2;
      var o2;
      function s2(e3) {
        const n2 = r2[e3.str];
        return void 0 === n2 || 1 !== t2[e3.str] ? e3 : (delete t2[e3.str], n2);
      }
    }
    function R(e2, t2) {
      for (const r2 in t2) e2[r2] = (e2[r2] || 0) - (t2[r2] || 0);
    }
    function O(e2) {
      return "boolean" == typeof e2 || "number" == typeof e2 || null === e2 ? !e2 : n._`!${L(e2)}`;
    }
    t.CodeGen = class {
      constructor(e2, t2 = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...t2, _n: t2.lines ? "\n" : "" }, this._extScope = e2, this._scope = new o.Scope({ parent: e2 }), this._nodes = [new y()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      name(e2) {
        return this._scope.name(e2);
      }
      scopeName(e2) {
        return this._extScope.name(e2);
      }
      scopeValue(e2, t2) {
        const r2 = this._extScope.value(e2, t2);
        return (this._values[r2.prefix] || (this._values[r2.prefix] = /* @__PURE__ */ new Set())).add(r2), r2;
      }
      getScopeValue(e2, t2) {
        return this._extScope.getValue(e2, t2);
      }
      scopeRefs(e2) {
        return this._extScope.scopeRefs(e2, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(e2, t2, r2, n2) {
        const o2 = this._scope.toName(t2);
        return void 0 !== r2 && n2 && (this._constants[o2.str] = r2), this._leafNode(new l(e2, o2, r2)), o2;
      }
      const(e2, t2, r2) {
        return this._def(o.varKinds.const, e2, t2, r2);
      }
      let(e2, t2, r2) {
        return this._def(o.varKinds.let, e2, t2, r2);
      }
      var(e2, t2, r2) {
        return this._def(o.varKinds.var, e2, t2, r2);
      }
      assign(e2, t2, r2) {
        return this._leafNode(new c(e2, t2, r2));
      }
      add(e2, r2) {
        return this._leafNode(new u(e2, t.operators.ADD, r2));
      }
      code(e2) {
        return "function" == typeof e2 ? e2() : e2 !== n.nil && this._leafNode(new m(e2)), this;
      }
      object(...e2) {
        const t2 = ["{"];
        for (const [r2, o2] of e2) t2.length > 1 && t2.push(","), t2.push(r2), (r2 !== o2 || this.opts.es5) && (t2.push(":"), (0, n.addCodeArg)(t2, o2));
        return t2.push("}"), new n._Code(t2);
      }
      if(e2, t2, r2) {
        if (this._blockNode(new w(e2)), t2 && r2) this.code(t2).else().code(r2).endIf();
        else if (t2) this.code(t2).endIf();
        else if (r2) throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      elseIf(e2) {
        return this._elseNode(new w(e2));
      }
      else() {
        return this._elseNode(new v());
      }
      endIf() {
        return this._endBlockNode(w, v);
      }
      _for(e2, t2) {
        return this._blockNode(e2), t2 && this.code(t2).endFor(), this;
      }
      for(e2, t2) {
        return this._for(new _(e2), t2);
      }
      forRange(e2, t2, r2, n2, s2 = this.opts.es5 ? o.varKinds.var : o.varKinds.let) {
        const i2 = this._scope.toName(e2);
        return this._for(new S(s2, i2, t2, r2), () => n2(i2));
      }
      forOf(e2, t2, r2, s2 = o.varKinds.const) {
        const i2 = this._scope.toName(e2);
        if (this.opts.es5) {
          const e3 = t2 instanceof n.Name ? t2 : this.var("_arr", t2);
          return this.forRange("_i", 0, n._`${e3}.length`, (t3) => {
            this.var(i2, n._`${e3}[${t3}]`), r2(i2);
          });
        }
        return this._for(new x("of", s2, i2, t2), () => r2(i2));
      }
      forIn(e2, t2, r2, s2 = this.opts.es5 ? o.varKinds.var : o.varKinds.const) {
        if (this.opts.ownProperties) return this.forOf(e2, n._`Object.keys(${t2})`, r2);
        const i2 = this._scope.toName(e2);
        return this._for(new x("in", s2, i2, t2), () => r2(i2));
      }
      endFor() {
        return this._endBlockNode(b);
      }
      label(e2) {
        return this._leafNode(new d(e2));
      }
      break(e2) {
        return this._leafNode(new p(e2));
      }
      return(e2) {
        const t2 = new E();
        if (this._blockNode(t2), this.code(e2), 1 !== t2.nodes.length) throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(E);
      }
      try(e2, t2, r2) {
        if (!t2 && !r2) throw new Error('CodeGen: "try" without "catch" and "finally"');
        const n2 = new T();
        if (this._blockNode(n2), this.code(e2), t2) {
          const e3 = this.name("e");
          this._currNode = n2.catch = new C(e3), t2(e3);
        }
        return r2 && (this._currNode = n2.finally = new I(), this.code(r2)), this._endBlockNode(C, I);
      }
      throw(e2) {
        return this._leafNode(new h(e2));
      }
      block(e2, t2) {
        return this._blockStarts.push(this._nodes.length), e2 && this.code(e2).endBlock(t2), this;
      }
      endBlock(e2) {
        const t2 = this._blockStarts.pop();
        if (void 0 === t2) throw new Error("CodeGen: not in self-balancing block");
        const r2 = this._nodes.length - t2;
        if (r2 < 0 || void 0 !== e2 && r2 !== e2) throw new Error(`CodeGen: wrong number of nodes: ${r2} vs ${e2} expected`);
        return this._nodes.length = t2, this;
      }
      func(e2, t2 = n.nil, r2, o2) {
        return this._blockNode(new k(e2, t2, r2)), o2 && this.code(o2).endFunc(), this;
      }
      endFunc() {
        return this._endBlockNode(k);
      }
      optimize(e2 = 1) {
        for (; e2-- > 0; ) this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(e2) {
        return this._currNode.nodes.push(e2), this;
      }
      _blockNode(e2) {
        this._currNode.nodes.push(e2), this._nodes.push(e2);
      }
      _endBlockNode(e2, t2) {
        const r2 = this._currNode;
        if (r2 instanceof e2 || t2 && r2 instanceof t2) return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${t2 ? `${e2.kind}/${t2.kind}` : e2.kind}"`);
      }
      _elseNode(e2) {
        const t2 = this._currNode;
        if (!(t2 instanceof w)) throw new Error('CodeGen: "else" without "if"');
        return this._currNode = t2.else = e2, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const e2 = this._nodes;
        return e2[e2.length - 1];
      }
      set _currNode(e2) {
        const t2 = this._nodes;
        t2[t2.length - 1] = e2;
      }
    }, t.not = O;
    const D = F(t.operators.AND);
    t.and = function(...e2) {
      return e2.reduce(D);
    };
    const N = F(t.operators.OR);
    function F(e2) {
      return (t2, r2) => t2 === n.nil ? r2 : r2 === n.nil ? t2 : n._`${L(t2)} ${e2} ${L(r2)}`;
    }
    function L(e2) {
      return e2 instanceof n.Name ? e2 : n._`(${e2})`;
    }
    t.or = function(...e2) {
      return e2.reduce(N);
    };
  }