// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5183 range:364247..381570
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5183: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.or = t2.and = t2.not = t2.CodeGen = t2.operators = t2.varKinds = t2.ValueScopeName = t2.ValueScope = t2.Scope = t2.Name = t2.regexpCode = t2.stringify = t2.getProperty = t2.nil = t2.strConcat = t2.str = t2._ = void 0;
    const n2 = r2(7442), o2 = r2(7207);
    var s2 = r2(7442);
    Object.defineProperty(t2, "_", { enumerable: true, get: function() {
      return s2._;
    } }), Object.defineProperty(t2, "str", { enumerable: true, get: function() {
      return s2.str;
    } }), Object.defineProperty(t2, "strConcat", { enumerable: true, get: function() {
      return s2.strConcat;
    } }), Object.defineProperty(t2, "nil", { enumerable: true, get: function() {
      return s2.nil;
    } }), Object.defineProperty(t2, "getProperty", { enumerable: true, get: function() {
      return s2.getProperty;
    } }), Object.defineProperty(t2, "stringify", { enumerable: true, get: function() {
      return s2.stringify;
    } }), Object.defineProperty(t2, "regexpCode", { enumerable: true, get: function() {
      return s2.regexpCode;
    } }), Object.defineProperty(t2, "Name", { enumerable: true, get: function() {
      return s2.Name;
    } });
    var i2 = r2(7207);
    Object.defineProperty(t2, "Scope", { enumerable: true, get: function() {
      return i2.Scope;
    } }), Object.defineProperty(t2, "ValueScope", { enumerable: true, get: function() {
      return i2.ValueScope;
    } }), Object.defineProperty(t2, "ValueScopeName", { enumerable: true, get: function() {
      return i2.ValueScopeName;
    } }), Object.defineProperty(t2, "varKinds", { enumerable: true, get: function() {
      return i2.varKinds;
    } }), t2.operators = { GT: new n2._Code(">"), GTE: new n2._Code(">="), LT: new n2._Code("<"), LTE: new n2._Code("<="), EQ: new n2._Code("==="), NEQ: new n2._Code("!=="), NOT: new n2._Code("!"), OR: new n2._Code("||"), AND: new n2._Code("&&"), ADD: new n2._Code("+") };
    class a2 {
      optimizeNodes() {
        return this;
      }
      optimizeNames(e3, t3) {
        return this;
      }
    }
    class c extends a2 {
      constructor(e3, t3, r3) {
        super(), this.varKind = e3, this.name = t3, this.rhs = r3;
      }
      render({ es5: e3, _n: t3 }) {
        const r3 = e3 ? o2.varKinds.var : this.varKind, n3 = void 0 === this.rhs ? "" : ` = ${this.rhs}`;
        return `${r3} ${this.name}${n3};` + t3;
      }
      optimizeNames(e3, t3) {
        if (e3[this.name.str]) return this.rhs && (this.rhs = A(this.rhs, e3, t3)), this;
      }
      get names() {
        return this.rhs instanceof n2._CodeOrName ? this.rhs.names : {};
      }
    }
    class u extends a2 {
      constructor(e3, t3, r3) {
        super(), this.lhs = e3, this.rhs = t3, this.sideEffects = r3;
      }
      render({ _n: e3 }) {
        return `${this.lhs} = ${this.rhs};` + e3;
      }
      optimizeNames(e3, t3) {
        if (!(this.lhs instanceof n2.Name) || e3[this.lhs.str] || this.sideEffects) return this.rhs = A(this.rhs, e3, t3), this;
      }
      get names() {
        return C(this.lhs instanceof n2.Name ? {} : { ...this.lhs.names }, this.rhs);
      }
    }
    class l extends u {
      constructor(e3, t3, r3, n3) {
        super(e3, r3, n3), this.op = t3;
      }
      render({ _n: e3 }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + e3;
      }
    }
    class d extends a2 {
      constructor(e3) {
        super(), this.label = e3, this.names = {};
      }
      render({ _n: e3 }) {
        return `${this.label}:` + e3;
      }
    }
    class p extends a2 {
      constructor(e3) {
        super(), this.label = e3, this.names = {};
      }
      render({ _n: e3 }) {
        return `break${this.label ? ` ${this.label}` : ""};` + e3;
      }
    }
    class f extends a2 {
      constructor(e3) {
        super(), this.error = e3;
      }
      render({ _n: e3 }) {
        return `throw ${this.error};` + e3;
      }
      get names() {
        return this.error.names;
      }
    }
    class h extends a2 {
      constructor(e3) {
        super(), this.code = e3;
      }
      render({ _n: e3 }) {
        return `${this.code};` + e3;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(e3, t3) {
        return this.code = A(this.code, e3, t3), this;
      }
      get names() {
        return this.code instanceof n2._CodeOrName ? this.code.names : {};
      }
    }
    class m extends a2 {
      constructor(e3 = []) {
        super(), this.nodes = e3;
      }
      render(e3) {
        return this.nodes.reduce((t3, r3) => t3 + r3.render(e3), "");
      }
      optimizeNodes() {
        const { nodes: e3 } = this;
        let t3 = e3.length;
        for (; t3--; ) {
          const r3 = e3[t3].optimizeNodes();
          Array.isArray(r3) ? e3.splice(t3, 1, ...r3) : r3 ? e3[t3] = r3 : e3.splice(t3, 1);
        }
        return e3.length > 0 ? this : void 0;
      }
      optimizeNames(e3, t3) {
        const { nodes: r3 } = this;
        let n3 = r3.length;
        for (; n3--; ) {
          const o3 = r3[n3];
          o3.optimizeNames(e3, t3) || ($(e3, o3.names), r3.splice(n3, 1));
        }
        return r3.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((e3, t3) => I(e3, t3.names), {});
      }
    }
    class g extends m {
      render(e3) {
        return "{" + e3._n + super.render(e3) + "}" + e3._n;
      }
    }
    class y extends m {
    }
    class _ extends g {
    }
    _.kind = "else";
    class v extends g {
      constructor(e3, t3) {
        super(t3), this.condition = e3;
      }
      render(e3) {
        let t3 = `if(${this.condition})` + super.render(e3);
        return this.else && (t3 += "else " + this.else.render(e3)), t3;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const e3 = this.condition;
        if (true === e3) return this.nodes;
        let t3 = this.else;
        if (t3) {
          const e4 = t3.optimizeNodes();
          t3 = this.else = Array.isArray(e4) ? new _(e4) : e4;
        }
        return t3 ? false === e3 ? t3 instanceof v ? t3 : t3.nodes : this.nodes.length ? this : new v(R(e3), t3 instanceof v ? [t3] : t3.nodes) : false !== e3 && this.nodes.length ? this : void 0;
      }
      optimizeNames(e3, t3) {
        var r3;
        if (this.else = null === (r3 = this.else) || void 0 === r3 ? void 0 : r3.optimizeNames(e3, t3), super.optimizeNames(e3, t3) || this.else) return this.condition = A(this.condition, e3, t3), this;
      }
      get names() {
        const e3 = super.names;
        return C(e3, this.condition), this.else && I(e3, this.else.names), e3;
      }
    }
    v.kind = "if";
    class w extends g {
    }
    w.kind = "for";
    class b extends w {
      constructor(e3) {
        super(), this.iteration = e3;
      }
      render(e3) {
        return `for(${this.iteration})` + super.render(e3);
      }
      optimizeNames(e3, t3) {
        if (super.optimizeNames(e3, t3)) return this.iteration = A(this.iteration, e3, t3), this;
      }
      get names() {
        return I(super.names, this.iteration.names);
      }
    }
    class S extends w {
      constructor(e3, t3, r3, n3) {
        super(), this.varKind = e3, this.name = t3, this.from = r3, this.to = n3;
      }
      render(e3) {
        const t3 = e3.es5 ? o2.varKinds.var : this.varKind, { name: r3, from: n3, to: s3 } = this;
        return `for(${t3} ${r3}=${n3}; ${r3}<${s3}; ${r3}++)` + super.render(e3);
      }
      get names() {
        const e3 = C(super.names, this.from);
        return C(e3, this.to);
      }
    }
    class k extends w {
      constructor(e3, t3, r3, n3) {
        super(), this.loop = e3, this.varKind = t3, this.name = r3, this.iterable = n3;
      }
      render(e3) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(e3);
      }
      optimizeNames(e3, t3) {
        if (super.optimizeNames(e3, t3)) return this.iterable = A(this.iterable, e3, t3), this;
      }
      get names() {
        return I(super.names, this.iterable.names);
      }
    }
    class E extends g {
      constructor(e3, t3, r3) {
        super(), this.name = e3, this.args = t3, this.async = r3;
      }
      render(e3) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(e3);
      }
    }
    E.kind = "func";
    class x extends m {
      render(e3) {
        return "return " + super.render(e3);
      }
    }
    x.kind = "return";
    class T extends g {
      render(e3) {
        let t3 = "try" + super.render(e3);
        return this.catch && (t3 += this.catch.render(e3)), this.finally && (t3 += this.finally.render(e3)), t3;
      }
      optimizeNodes() {
        var e3, t3;
        return super.optimizeNodes(), null === (e3 = this.catch) || void 0 === e3 || e3.optimizeNodes(), null === (t3 = this.finally) || void 0 === t3 || t3.optimizeNodes(), this;
      }
      optimizeNames(e3, t3) {
        var r3, n3;
        return super.optimizeNames(e3, t3), null === (r3 = this.catch) || void 0 === r3 || r3.optimizeNames(e3, t3), null === (n3 = this.finally) || void 0 === n3 || n3.optimizeNames(e3, t3), this;
      }
      get names() {
        const e3 = super.names;
        return this.catch && I(e3, this.catch.names), this.finally && I(e3, this.finally.names), e3;
      }
    }
    class O extends g {
      constructor(e3) {
        super(), this.error = e3;
      }
      render(e3) {
        return `catch(${this.error})` + super.render(e3);
      }
    }
    O.kind = "catch";
    class P extends g {
      render(e3) {
        return "finally" + super.render(e3);
      }
    }
    P.kind = "finally";
    function I(e3, t3) {
      for (const r3 in t3) e3[r3] = (e3[r3] || 0) + (t3[r3] || 0);
      return e3;
    }
    function C(e3, t3) {
      return t3 instanceof n2._CodeOrName ? I(e3, t3.names) : e3;
    }
    function A(e3, t3, r3) {
      return e3 instanceof n2.Name ? s3(e3) : (o3 = e3) instanceof n2._Code && o3._items.some((e4) => e4 instanceof n2.Name && 1 === t3[e4.str] && void 0 !== r3[e4.str]) ? new n2._Code(e3._items.reduce((e4, t4) => (t4 instanceof n2.Name && (t4 = s3(t4)), t4 instanceof n2._Code ? e4.push(...t4._items) : e4.push(t4), e4), [])) : e3;
      var o3;
      function s3(e4) {
        const n3 = r3[e4.str];
        return void 0 === n3 || 1 !== t3[e4.str] ? e4 : (delete t3[e4.str], n3);
      }
    }
    function $(e3, t3) {
      for (const r3 in t3) e3[r3] = (e3[r3] || 0) - (t3[r3] || 0);
    }
    function R(e3) {
      return "boolean" == typeof e3 || "number" == typeof e3 || null === e3 ? !e3 : n2._`!${j(e3)}`;
    }
    t2.CodeGen = class {
      constructor(e3, t3 = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...t3, _n: t3.lines ? "\n" : "" }, this._extScope = e3, this._scope = new o2.Scope({ parent: e3 }), this._nodes = [new y()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      name(e3) {
        return this._scope.name(e3);
      }
      scopeName(e3) {
        return this._extScope.name(e3);
      }
      scopeValue(e3, t3) {
        const r3 = this._extScope.value(e3, t3);
        return (this._values[r3.prefix] || (this._values[r3.prefix] = /* @__PURE__ */ new Set())).add(r3), r3;
      }
      getScopeValue(e3, t3) {
        return this._extScope.getValue(e3, t3);
      }
      scopeRefs(e3) {
        return this._extScope.scopeRefs(e3, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(e3, t3, r3, n3) {
        const o3 = this._scope.toName(t3);
        return void 0 !== r3 && n3 && (this._constants[o3.str] = r3), this._leafNode(new c(e3, o3, r3)), o3;
      }
      const(e3, t3, r3) {
        return this._def(o2.varKinds.const, e3, t3, r3);
      }
      let(e3, t3, r3) {
        return this._def(o2.varKinds.let, e3, t3, r3);
      }
      var(e3, t3, r3) {
        return this._def(o2.varKinds.var, e3, t3, r3);
      }
      assign(e3, t3, r3) {
        return this._leafNode(new u(e3, t3, r3));
      }
      add(e3, r3) {
        return this._leafNode(new l(e3, t2.operators.ADD, r3));
      }
      code(e3) {
        return "function" == typeof e3 ? e3() : e3 !== n2.nil && this._leafNode(new h(e3)), this;
      }
      object(...e3) {
        const t3 = ["{"];
        for (const [r3, o3] of e3) t3.length > 1 && t3.push(","), t3.push(r3), (r3 !== o3 || this.opts.es5) && (t3.push(":"), (0, n2.addCodeArg)(t3, o3));
        return t3.push("}"), new n2._Code(t3);
      }
      if(e3, t3, r3) {
        if (this._blockNode(new v(e3)), t3 && r3) this.code(t3).else().code(r3).endIf();
        else if (t3) this.code(t3).endIf();
        else if (r3) throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      elseIf(e3) {
        return this._elseNode(new v(e3));
      }
      else() {
        return this._elseNode(new _());
      }
      endIf() {
        return this._endBlockNode(v, _);
      }
      _for(e3, t3) {
        return this._blockNode(e3), t3 && this.code(t3).endFor(), this;
      }
      for(e3, t3) {
        return this._for(new b(e3), t3);
      }
      forRange(e3, t3, r3, n3, s3 = this.opts.es5 ? o2.varKinds.var : o2.varKinds.let) {
        const i3 = this._scope.toName(e3);
        return this._for(new S(s3, i3, t3, r3), () => n3(i3));
      }
      forOf(e3, t3, r3, s3 = o2.varKinds.const) {
        const i3 = this._scope.toName(e3);
        if (this.opts.es5) {
          const e4 = t3 instanceof n2.Name ? t3 : this.var("_arr", t3);
          return this.forRange("_i", 0, n2._`${e4}.length`, (t4) => {
            this.var(i3, n2._`${e4}[${t4}]`), r3(i3);
          });
        }
        return this._for(new k("of", s3, i3, t3), () => r3(i3));
      }
      forIn(e3, t3, r3, s3 = this.opts.es5 ? o2.varKinds.var : o2.varKinds.const) {
        if (this.opts.ownProperties) return this.forOf(e3, n2._`Object.keys(${t3})`, r3);
        const i3 = this._scope.toName(e3);
        return this._for(new k("in", s3, i3, t3), () => r3(i3));
      }
      endFor() {
        return this._endBlockNode(w);
      }
      label(e3) {
        return this._leafNode(new d(e3));
      }
      break(e3) {
        return this._leafNode(new p(e3));
      }
      return(e3) {
        const t3 = new x();
        if (this._blockNode(t3), this.code(e3), 1 !== t3.nodes.length) throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(x);
      }
      try(e3, t3, r3) {
        if (!t3 && !r3) throw new Error('CodeGen: "try" without "catch" and "finally"');
        const n3 = new T();
        if (this._blockNode(n3), this.code(e3), t3) {
          const e4 = this.name("e");
          this._currNode = n3.catch = new O(e4), t3(e4);
        }
        return r3 && (this._currNode = n3.finally = new P(), this.code(r3)), this._endBlockNode(O, P);
      }
      throw(e3) {
        return this._leafNode(new f(e3));
      }
      block(e3, t3) {
        return this._blockStarts.push(this._nodes.length), e3 && this.code(e3).endBlock(t3), this;
      }
      endBlock(e3) {
        const t3 = this._blockStarts.pop();
        if (void 0 === t3) throw new Error("CodeGen: not in self-balancing block");
        const r3 = this._nodes.length - t3;
        if (r3 < 0 || void 0 !== e3 && r3 !== e3) throw new Error(`CodeGen: wrong number of nodes: ${r3} vs ${e3} expected`);
        return this._nodes.length = t3, this;
      }
      func(e3, t3 = n2.nil, r3, o3) {
        return this._blockNode(new E(e3, t3, r3)), o3 && this.code(o3).endFunc(), this;
      }
      endFunc() {
        return this._endBlockNode(E);
      }
      optimize(e3 = 1) {
        for (; e3-- > 0; ) this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(e3) {
        return this._currNode.nodes.push(e3), this;
      }
      _blockNode(e3) {
        this._currNode.nodes.push(e3), this._nodes.push(e3);
      }
      _endBlockNode(e3, t3) {
        const r3 = this._currNode;
        if (r3 instanceof e3 || t3 && r3 instanceof t3) return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${t3 ? `${e3.kind}/${t3.kind}` : e3.kind}"`);
      }
      _elseNode(e3) {
        const t3 = this._currNode;
        if (!(t3 instanceof v)) throw new Error('CodeGen: "else" without "if"');
        return this._currNode = t3.else = e3, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const e3 = this._nodes;
        return e3[e3.length - 1];
      }
      set _currNode(e3) {
        const t3 = this._nodes;
        t3[t3.length - 1] = e3;
      }
    }, t2.not = R;
    const N = J(t2.operators.AND);
    t2.and = function(...e3) {
      return e3.reduce(N);
    };
    const M = J(t2.operators.OR);
    function J(e3) {
      return (t3, r3) => t3 === n2.nil ? r3 : r3 === n2.nil ? t3 : n2._`${j(t3)} ${e3} ${j(r3)}`;
    }
    function j(e3) {
      return e3 instanceof n2.Name ? e3 : n2._`(${e3})`;
    }
    t2.or = function(...e3) {
      return e3.reduce(M);
    };
  }