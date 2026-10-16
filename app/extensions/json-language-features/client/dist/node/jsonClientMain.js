"use strict";
var sC = Object.create;
var eo = Object.defineProperty;
var oC = Object.getOwnPropertyDescriptor;
var aC = Object.getOwnPropertyNames;
var cC = Object.getPrototypeOf, uC = Object.prototype.hasOwnProperty;
var ip = (n, e) => () => (n && (e = n(n = 0)), e);
var j = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports), Xa = (n, e) => {
  for (var t in e) eo(n, t, { get: e[t], enumerable: true });
}, sp = (n, e, t, r) => {
  if (e && typeof e == "object" || typeof e == "function") for (let i of aC(e)) !uC.call(n, i) && i !== t && eo(n, i, { get: () => e[i], enumerable: !(r = oC(e, i)) || r.enumerable });
  return n;
};
var Yi = (n, e, t) => (t = n != null ? sC(cC(n)) : {}, sp(e || !n || !n.__esModule ? eo(t, "default", { value: n, enumerable: true }) : t, n)), Zi = (n) => sp(eo({}, "__esModule", { value: true }), n);
var hi = j((Bn) => {
  "use strict";
  Object.defineProperty(Bn, "__esModule", { value: true });
  Bn.boolean = lC;
  Bn.string = op;
  Bn.number = dC;
  Bn.error = fC;
  Bn.func = hC;
  Bn.array = ap;
  Bn.stringArray = pC;
  function lC(n) {
    return n === true || n === false;
  }
  function op(n) {
    return typeof n == "string" || n instanceof String;
  }
  function dC(n) {
    return typeof n == "number" || n instanceof Number;
  }
  function fC(n) {
    return n instanceof Error;
  }
  function hC(n) {
    return typeof n == "function";
  }
  function ap(n) {
    return Array.isArray(n);
  }
  function pC(n) {
    return ap(n) && n.every((e) => op(e));
  }
});
var bc = j((Z) => {
  "use strict";
  var gC = Z && Z.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), mC = Z && Z.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), yC = Z && Z.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && gC(t, e, r[i]);
      return mC(t, e), t;
    };
  })();
  Object.defineProperty(Z, "__esModule", { value: true });
  Z.Message = Z.NotificationType9 = Z.NotificationType8 = Z.NotificationType7 = Z.NotificationType6 = Z.NotificationType5 = Z.NotificationType4 = Z.NotificationType3 = Z.NotificationType2 = Z.NotificationType1 = Z.NotificationType0 = Z.NotificationType = Z.RequestType9 = Z.RequestType8 = Z.RequestType7 = Z.RequestType6 = Z.RequestType5 = Z.RequestType4 = Z.RequestType3 = Z.RequestType2 = Z.RequestType1 = Z.RequestType = Z.RequestType0 = Z.AbstractMessageSignature = Z.ParameterStructures = Z.ResponseError = Z.ErrorCodes = void 0;
  var Kr = yC(hi()), Ja;
  (function(n) {
    n.ParseError = -32700, n.InvalidRequest = -32600, n.MethodNotFound = -32601, n.InvalidParams = -32602, n.InternalError = -32603, n.jsonrpcReservedErrorRangeStart = -32099, n.serverErrorStart = -32099, n.MessageWriteError = -32099, n.MessageReadError = -32098, n.PendingResponseRejected = -32097, n.ConnectionInactive = -32096, n.ServerNotInitialized = -32002, n.UnknownErrorCode = -32001, n.jsonrpcReservedErrorRangeEnd = -32e3, n.serverErrorEnd = -32e3;
  })(Ja || (Z.ErrorCodes = Ja = {}));
  var Qa = class n extends Error {
    code;
    data;
    constructor(e, t, r) {
      super(t), this.code = Kr.number(e) ? e : Ja.UnknownErrorCode, this.data = r, Object.setPrototypeOf(this, n.prototype);
    }
    toJson() {
      let e = { code: this.code, message: this.message };
      return this.data !== void 0 && (e.data = this.data), e;
    }
  };
  Z.ResponseError = Qa;
  var Sr = class n {
    kind;
    static auto = new n("auto");
    static byPosition = new n("byPosition");
    static byName = new n("byName");
    constructor(e) {
      this.kind = e;
    }
    static is(e) {
      return e === n.auto || e === n.byName || e === n.byPosition;
    }
    toString() {
      return this.kind;
    }
  };
  Z.ParameterStructures = Sr;
  var Ie = class {
    method;
    numberOfParams;
    constructor(e, t) {
      this.method = e, this.numberOfParams = t;
    }
    get parameterStructures() {
      return Sr.auto;
    }
  };
  Z.AbstractMessageSignature = Ie;
  var Ya = class extends Ie {
    _;
    constructor(e) {
      super(e, 0);
    }
  };
  Z.RequestType0 = Ya;
  var Za = class extends Ie {
    _parameterStructures;
    _;
    constructor(e, t = Sr.auto) {
      super(e, 1), this._parameterStructures = t;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  };
  Z.RequestType = Za;
  var ec = class extends Ie {
    _parameterStructures;
    _;
    constructor(e, t = Sr.auto) {
      super(e, 1), this._parameterStructures = t;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  };
  Z.RequestType1 = ec;
  var tc = class extends Ie {
    _;
    constructor(e) {
      super(e, 2);
    }
  };
  Z.RequestType2 = tc;
  var nc = class extends Ie {
    _;
    constructor(e) {
      super(e, 3);
    }
  };
  Z.RequestType3 = nc;
  var rc = class extends Ie {
    _;
    constructor(e) {
      super(e, 4);
    }
  };
  Z.RequestType4 = rc;
  var ic = class extends Ie {
    _;
    constructor(e) {
      super(e, 5);
    }
  };
  Z.RequestType5 = ic;
  var sc = class extends Ie {
    _;
    constructor(e) {
      super(e, 6);
    }
  };
  Z.RequestType6 = sc;
  var oc = class extends Ie {
    _;
    constructor(e) {
      super(e, 7);
    }
  };
  Z.RequestType7 = oc;
  var ac = class extends Ie {
    _;
    constructor(e) {
      super(e, 8);
    }
  };
  Z.RequestType8 = ac;
  var cc = class extends Ie {
    _;
    constructor(e) {
      super(e, 9);
    }
  };
  Z.RequestType9 = cc;
  var uc = class extends Ie {
    _parameterStructures;
    _;
    constructor(e, t = Sr.auto) {
      super(e, 1), this._parameterStructures = t;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  };
  Z.NotificationType = uc;
  var lc = class extends Ie {
    _;
    constructor(e) {
      super(e, 0);
    }
  };
  Z.NotificationType0 = lc;
  var dc = class extends Ie {
    _parameterStructures;
    _;
    constructor(e, t = Sr.auto) {
      super(e, 1), this._parameterStructures = t;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  };
  Z.NotificationType1 = dc;
  var fc = class extends Ie {
    _;
    constructor(e) {
      super(e, 2);
    }
  };
  Z.NotificationType2 = fc;
  var hc = class extends Ie {
    _;
    constructor(e) {
      super(e, 3);
    }
  };
  Z.NotificationType3 = hc;
  var pc = class extends Ie {
    _;
    constructor(e) {
      super(e, 4);
    }
  };
  Z.NotificationType4 = pc;
  var gc = class extends Ie {
    _;
    constructor(e) {
      super(e, 5);
    }
  };
  Z.NotificationType5 = gc;
  var mc = class extends Ie {
    _;
    constructor(e) {
      super(e, 6);
    }
  };
  Z.NotificationType6 = mc;
  var yc = class extends Ie {
    _;
    constructor(e) {
      super(e, 7);
    }
  };
  Z.NotificationType7 = yc;
  var _c = class extends Ie {
    _;
    constructor(e) {
      super(e, 8);
    }
  };
  Z.NotificationType8 = _c;
  var vc = class extends Ie {
    _;
    constructor(e) {
      super(e, 9);
    }
  };
  Z.NotificationType9 = vc;
  var cp;
  (function(n) {
    function e(i) {
      let s = i;
      return s && Kr.string(s.method) && (Kr.string(s.id) || Kr.number(s.id));
    }
    n.isRequest = e;
    function t(i) {
      let s = i;
      return s && Kr.string(s.method) && i.id === void 0;
    }
    n.isNotification = t;
    function r(i) {
      let s = i;
      return s && (s.result !== void 0 || !!s.error) && (Kr.string(s.id) || Kr.number(s.id) || s.id === null);
    }
    n.isResponse = r;
  })(cp || (Z.Message = cp = {}));
});
var wc = j((Dr) => {
  "use strict";
  Object.defineProperty(Dr, "__esModule", { value: true });
  Dr.LRUCache = Dr.LinkedMap = Dr.Touch = void 0;
  var bt;
  (function(n) {
    n.None = 0, n.First = 1, n.AsOld = n.First, n.Last = 2, n.AsNew = n.Last;
  })(bt || (Dr.Touch = bt = {}));
  var to = class {
    [Symbol.toStringTag] = "LinkedMap";
    _map;
    _head;
    _tail;
    _size;
    _state;
    constructor() {
      this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
    }
    clear() {
      this._map.clear(), this._head = void 0, this._tail = void 0, this._size = 0, this._state++;
    }
    isEmpty() {
      return !this._head && !this._tail;
    }
    get size() {
      return this._size;
    }
    get first() {
      return this._head?.value;
    }
    get last() {
      return this._tail?.value;
    }
    before(e) {
      let t = this._map.get(e);
      return t ? t.previous?.value : void 0;
    }
    after(e) {
      let t = this._map.get(e);
      return t ? t.next?.value : void 0;
    }
    has(e) {
      return this._map.has(e);
    }
    get(e, t = bt.None) {
      let r = this._map.get(e);
      if (r) return t !== bt.None && this.touch(r, t), r.value;
    }
    set(e, t, r = bt.None) {
      let i = this._map.get(e);
      if (i) i.value = t, r !== bt.None && this.touch(i, r);
      else {
        switch (i = { key: e, value: t, next: void 0, previous: void 0 }, r) {
          case bt.None:
            this.addItemLast(i);
            break;
          case bt.First:
            this.addItemFirst(i);
            break;
          case bt.Last:
            this.addItemLast(i);
            break;
          default:
            this.addItemLast(i);
            break;
        }
        this._map.set(e, i), this._size++;
      }
      return this;
    }
    delete(e) {
      return !!this.remove(e);
    }
    remove(e) {
      let t = this._map.get(e);
      if (t) return this._map.delete(e), this.removeItem(t), this._size--, t.value;
    }
    shift() {
      if (!this._head && !this._tail) return;
      if (!this._head || !this._tail) throw new Error("Invalid list");
      let e = this._head;
      return this._map.delete(e.key), this.removeItem(e), this._size--, e.value;
    }
    forEach(e, t) {
      let r = this._state, i = this._head;
      for (; i; ) {
        if (t ? e.bind(t)(i.value, i.key, this) : e(i.value, i.key, this), this._state !== r) throw new Error("LinkedMap got modified during iteration.");
        i = i.next;
      }
    }
    keys() {
      let e = this._state, t = this._head, r = { [Symbol.iterator]: () => r, next: () => {
        if (this._state !== e) throw new Error("LinkedMap got modified during iteration.");
        if (t) {
          let i = { value: t.key, done: false };
          return t = t.next, i;
        } else return { value: void 0, done: true };
      } };
      return r;
    }
    values() {
      let e = this._state, t = this._head, r = { [Symbol.iterator]: () => r, next: () => {
        if (this._state !== e) throw new Error("LinkedMap got modified during iteration.");
        if (t) {
          let i = { value: t.value, done: false };
          return t = t.next, i;
        } else return { value: void 0, done: true };
      } };
      return r;
    }
    entries() {
      let e = this._state, t = this._head, r = { [Symbol.iterator]: () => r, next: () => {
        if (this._state !== e) throw new Error("LinkedMap got modified during iteration.");
        if (t) {
          let i = { value: [t.key, t.value], done: false };
          return t = t.next, i;
        } else return { value: void 0, done: true };
      } };
      return r;
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    trimOld(e) {
      if (e >= this.size) return;
      if (e === 0) {
        this.clear();
        return;
      }
      let t = this._head, r = this.size;
      for (; t && r > e; ) this._map.delete(t.key), t = t.next, r--;
      this._head = t, this._size = r, t && (t.previous = void 0), this._state++;
    }
    addItemFirst(e) {
      if (!this._head && !this._tail) this._tail = e;
      else if (this._head) e.next = this._head, this._head.previous = e;
      else throw new Error("Invalid list");
      this._head = e, this._state++;
    }
    addItemLast(e) {
      if (!this._head && !this._tail) this._head = e;
      else if (this._tail) e.previous = this._tail, this._tail.next = e;
      else throw new Error("Invalid list");
      this._tail = e, this._state++;
    }
    removeItem(e) {
      if (e === this._head && e === this._tail) this._head = void 0, this._tail = void 0;
      else if (e === this._head) {
        if (!e.next) throw new Error("Invalid list");
        e.next.previous = void 0, this._head = e.next;
      } else if (e === this._tail) {
        if (!e.previous) throw new Error("Invalid list");
        e.previous.next = void 0, this._tail = e.previous;
      } else {
        let t = e.next, r = e.previous;
        if (!t || !r) throw new Error("Invalid list");
        t.previous = r, r.next = t;
      }
      e.next = void 0, e.previous = void 0, this._state++;
    }
    touch(e, t) {
      if (!this._head || !this._tail) throw new Error("Invalid list");
      if (!(t !== bt.First && t !== bt.Last)) {
        if (t === bt.First) {
          if (e === this._head) return;
          let r = e.next, i = e.previous;
          e === this._tail ? (i.next = void 0, this._tail = i) : (r.previous = i, i.next = r), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
        } else if (t === bt.Last) {
          if (e === this._tail) return;
          let r = e.next, i = e.previous;
          e === this._head ? (r.previous = void 0, this._head = r) : (r.previous = i, i.next = r), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++;
        }
      }
    }
    toJSON() {
      let e = [];
      return this.forEach((t, r) => {
        e.push([r, t]);
      }), e;
    }
    fromJSON(e) {
      this.clear();
      for (let [t, r] of e) this.set(t, r);
    }
  };
  Dr.LinkedMap = to;
  var Cc = class extends to {
    _limit;
    _ratio;
    constructor(e, t = 1) {
      super(), this._limit = e, this._ratio = Math.min(Math.max(0, t), 1);
    }
    get limit() {
      return this._limit;
    }
    set limit(e) {
      this._limit = e, this.checkTrim();
    }
    get ratio() {
      return this._ratio;
    }
    set ratio(e) {
      this._ratio = Math.min(Math.max(0, e), 1), this.checkTrim();
    }
    get(e, t = bt.AsNew) {
      return super.get(e, t);
    }
    peek(e) {
      return super.get(e, bt.None);
    }
    set(e, t) {
      return super.set(e, t, bt.Last), this.checkTrim(), this;
    }
    checkTrim() {
      this.size > this._limit && this.trimOld(Math.round(this._limit * this._ratio));
    }
  };
  Dr.LRUCache = Cc;
});
var lp = j((no) => {
  "use strict";
  Object.defineProperty(no, "__esModule", { value: true });
  no.Disposable = void 0;
  var up;
  (function(n) {
    function e(t) {
      return { dispose: t };
    }
    n.create = e;
  })(up || (no.Disposable = up = {}));
});
var Pr = j((Pc) => {
  "use strict";
  Object.defineProperty(Pc, "__esModule", { value: true });
  var Sc;
  function Dc() {
    if (Sc === void 0) throw new Error("No runtime abstraction layer installed");
    return Sc;
  }
  (function(n) {
    function e(t) {
      if (t === void 0) throw new Error("No runtime abstraction layer provided");
      Sc = t;
    }
    n.install = e;
  })(Dc || (Dc = {}));
  Pc.default = Dc;
});
var pi = j((Rr) => {
  "use strict";
  var _C = Rr && Rr.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(Rr, "__esModule", { value: true });
  Rr.Emitter = Rr.Event = void 0;
  var vC = _C(Pr()), dp;
  (function(n) {
    let e = { dispose() {
    } };
    n.None = function() {
      return e;
    };
  })(dp || (Rr.Event = dp = {}));
  var Rc = class {
    _callbacks;
    _contexts;
    add(e, t = null, r) {
      this._callbacks || (this._callbacks = [], this._contexts = []), this._callbacks.push(e), this._contexts.push(t), Array.isArray(r) && r.push({ dispose: () => this.remove(e, t) });
    }
    remove(e, t = null) {
      if (!this._callbacks) return;
      let r = false;
      for (let i = 0, s = this._callbacks.length; i < s; i++) if (this._callbacks[i] === e) if (this._contexts[i] === t) {
        this._callbacks.splice(i, 1), this._contexts.splice(i, 1);
        return;
      } else r = true;
      if (r) throw new Error("When adding a listener with a context, you should remove it with the same context");
    }
    invoke(...e) {
      if (!this._callbacks) return [];
      let t = [], r = this._callbacks.slice(0), i = this._contexts.slice(0);
      for (let s = 0, o = r.length; s < o; s++) try {
        t.push(r[s].apply(i[s], e));
      } catch (a) {
        (0, vC.default)().console.error(a);
      }
      return t;
    }
    isEmpty() {
      return !this._callbacks || this._callbacks.length === 0;
    }
    dispose() {
      this._callbacks = void 0, this._contexts = void 0;
    }
  }, Tc = class n {
    _options;
    static _noop = function() {
    };
    _event;
    _callbacks;
    constructor(e) {
      this._options = e;
    }
    get event() {
      return this._event || (this._event = (e, t, r) => {
        this._callbacks || (this._callbacks = new Rc()), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(e, t);
        let i = { dispose: () => {
          this._callbacks && (this._callbacks.remove(e, t), i.dispose = n._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this));
        } };
        return Array.isArray(r) && r.push(i), i;
      }), this._event;
    }
    fire(e) {
      this._callbacks && this._callbacks.invoke.call(this._callbacks, e);
    }
    dispose() {
      this._callbacks && (this._callbacks.dispose(), this._callbacks = void 0);
    }
  };
  Rr.Emitter = Tc;
});
var so = j((jt) => {
  "use strict";
  var bC = jt && jt.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), CC = jt && jt.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), wC = jt && jt.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && bC(t, e, r[i]);
      return CC(t, e), t;
    };
  })(), SC = jt && jt.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(jt, "__esModule", { value: true });
  jt.CancellationTokenSource = jt.CancellationToken = void 0;
  var DC = SC(Pr()), PC = wC(hi()), Oc = pi(), ro;
  (function(n) {
    n.None = Object.freeze({ isCancellationRequested: false, onCancellationRequested: Oc.Event.None }), n.Cancelled = Object.freeze({ isCancellationRequested: true, onCancellationRequested: Oc.Event.None });
    function e(t) {
      let r = t;
      return r && (r === n.None || r === n.Cancelled || PC.boolean(r.isCancellationRequested) && !!r.onCancellationRequested);
    }
    n.is = e;
  })(ro || (jt.CancellationToken = ro = {}));
  var RC = Object.freeze(function(n, e) {
    let t = (0, DC.default)().timer.setTimeout(n.bind(e), 0);
    return { dispose() {
      t.dispose();
    } };
  }), io = class {
    _isCancelled = false;
    _emitter;
    cancel() {
      this._isCancelled || (this._isCancelled = true, this._emitter && (this._emitter.fire(void 0), this.dispose()));
    }
    get isCancellationRequested() {
      return this._isCancelled;
    }
    get onCancellationRequested() {
      return this._isCancelled ? RC : (this._emitter || (this._emitter = new Oc.Emitter()), this._emitter.event);
    }
    dispose() {
      this._emitter && (this._emitter.dispose(), this._emitter = void 0);
    }
  }, Ec = class {
    _token;
    get token() {
      return this._token || (this._token = new io()), this._token;
    }
    cancel() {
      this._token ? this._token.cancel() : this._token = ro.Cancelled;
    }
    dispose() {
      this._token ? this._token instanceof io && this._token.dispose() : this._token = ro.None;
    }
  };
  jt.CancellationTokenSource = Ec;
});
var fp = j((gi) => {
  "use strict";
  Object.defineProperty(gi, "__esModule", { value: true });
  gi.SharedArrayReceiverStrategy = gi.SharedArraySenderStrategy = void 0;
  var TC = so(), es;
  (function(n) {
    n.Continue = 0, n.Cancelled = 1;
  })(es || (es = {}));
  var xc = class {
    buffers;
    constructor() {
      this.buffers = /* @__PURE__ */ new Map();
    }
    enableCancellation(e) {
      if (e.id === null) return;
      let t = new SharedArrayBuffer(4), r = new Int32Array(t, 0, 1);
      r[0] = es.Continue, this.buffers.set(e.id, t), e.$cancellationData = t;
    }
    async sendCancellation(e, t) {
      let r = this.buffers.get(t);
      if (r === void 0) return;
      let i = new Int32Array(r, 0, 1);
      Atomics.store(i, 0, es.Cancelled);
    }
    cleanup(e) {
      this.buffers.delete(e);
    }
    dispose() {
      this.buffers.clear();
    }
  };
  gi.SharedArraySenderStrategy = xc;
  var qc = class {
    data;
    constructor(e) {
      this.data = new Int32Array(e, 0, 1);
    }
    get isCancellationRequested() {
      return Atomics.load(this.data, 0) === es.Cancelled;
    }
    get onCancellationRequested() {
      throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events");
    }
  }, Mc = class {
    token;
    constructor(e) {
      this.token = new qc(e);
    }
    cancel() {
    }
    dispose() {
    }
  }, jc = class {
    kind = "request";
    createCancellationTokenSource(e) {
      let t = e.$cancellationData;
      return t === void 0 ? new TC.CancellationTokenSource() : new Mc(t);
    }
  };
  gi.SharedArrayReceiverStrategy = jc;
});
var Nc = j((mi) => {
  "use strict";
  var OC = mi && mi.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(mi, "__esModule", { value: true });
  mi.Semaphore = void 0;
  var EC = OC(Pr()), Ic = class {
    _capacity;
    _active;
    _waiting;
    constructor(e = 1) {
      if (e <= 0) throw new Error("Capacity must be greater than 0");
      this._capacity = e, this._active = 0, this._waiting = [];
    }
    lock(e) {
      return new Promise((t, r) => {
        this._waiting.push({ thunk: e, resolve: t, reject: r }), this.runNext();
      });
    }
    get active() {
      return this._active;
    }
    runNext() {
      this._waiting.length === 0 || this._active === this._capacity || (0, EC.default)().timer.setImmediate(() => this.doRunNext());
    }
    doRunNext() {
      if (this._waiting.length === 0 || this._active === this._capacity) return;
      let e = this._waiting.shift();
      if (this._active++, this._active > this._capacity) throw new Error("Too many thunks active");
      try {
        let t = e.thunk();
        t instanceof Promise ? t.then((r) => {
          this._active--, e.resolve(r), this.runNext();
        }, (r) => {
          this._active--, e.reject(r), this.runNext();
        }) : (this._active--, e.resolve(t), this.runNext());
      } catch (t) {
        this._active--, e.reject(t), this.runNext();
      }
    }
  };
  mi.Semaphore = Ic;
});
var pp = j((Ct) => {
  "use strict";
  var xC = Ct && Ct.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), qC = Ct && Ct.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), MC = Ct && Ct.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && xC(t, e, r[i]);
      return qC(t, e), t;
    };
  })(), jC = Ct && Ct.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(Ct, "__esModule", { value: true });
  Ct.ReadableStreamMessageReader = Ct.AbstractMessageReader = Ct.MessageReader = void 0;
  var Lc = jC(Pr()), yi = MC(hi()), Fc = pi(), IC = Nc(), hp;
  (function(n) {
    function e(t) {
      let r = t;
      return r && yi.func(r.listen) && yi.func(r.dispose) && yi.func(r.onError) && yi.func(r.onClose) && yi.func(r.onPartialMessage);
    }
    n.is = e;
  })(hp || (Ct.MessageReader = hp = {}));
  var oo = class {
    errorEmitter;
    closeEmitter;
    partialMessageEmitter;
    constructor() {
      this.errorEmitter = new Fc.Emitter(), this.closeEmitter = new Fc.Emitter(), this.partialMessageEmitter = new Fc.Emitter();
    }
    dispose() {
      this.errorEmitter.dispose(), this.closeEmitter.dispose(), this.partialMessageEmitter.dispose();
    }
    get onError() {
      return this.errorEmitter.event;
    }
    fireError(e) {
      this.errorEmitter.fire(this.asError(e));
    }
    get onClose() {
      return this.closeEmitter.event;
    }
    fireClose() {
      this.closeEmitter.fire(void 0);
    }
    get onPartialMessage() {
      return this.partialMessageEmitter.event;
    }
    firePartialMessage(e) {
      this.partialMessageEmitter.fire(e);
    }
    asError(e) {
      return e instanceof Error ? e : new Error(`Reader received error. Reason: ${yi.string(e.message) ? e.message : "unknown"}`);
    }
  };
  Ct.AbstractMessageReader = oo;
  var Ac;
  (function(n) {
    function e(t) {
      let r, i, s, o = /* @__PURE__ */ new Map(), a, c = /* @__PURE__ */ new Map();
      if (t === void 0 || typeof t == "string") r = t ?? "utf-8";
      else {
        if (r = t.charset ?? "utf-8", t.contentDecoder !== void 0 && (s = t.contentDecoder, o.set(s.name, s)), t.contentDecoders !== void 0) for (let l of t.contentDecoders) o.set(l.name, l);
        if (t.contentTypeDecoder !== void 0 && (a = t.contentTypeDecoder, c.set(a.name, a)), t.contentTypeDecoders !== void 0) for (let l of t.contentTypeDecoders) c.set(l.name, l);
      }
      return a === void 0 && (a = (0, Lc.default)().applicationJson.decoder, c.set(a.name, a)), { charset: r, contentDecoder: s, contentDecoders: o, contentTypeDecoder: a, contentTypeDecoders: c };
    }
    n.fromOptions = e;
  })(Ac || (Ac = {}));
  var kc = class extends oo {
    readable;
    options;
    callback;
    nextMessageLength;
    messageToken;
    buffer;
    partialMessageTimer;
    _partialMessageTimeout;
    readSemaphore;
    constructor(e, t) {
      super(), this.readable = e, this.options = Ac.fromOptions(t), this.buffer = (0, Lc.default)().messageBuffer.create(this.options.charset), this._partialMessageTimeout = 1e4, this.nextMessageLength = -1, this.messageToken = 0, this.readSemaphore = new IC.Semaphore(1);
    }
    set partialMessageTimeout(e) {
      this._partialMessageTimeout = e;
    }
    get partialMessageTimeout() {
      return this._partialMessageTimeout;
    }
    listen(e) {
      this.nextMessageLength = -1, this.messageToken = 0, this.partialMessageTimer = void 0, this.callback = e;
      let t = this.readable.onData((r) => {
        this.onData(r);
      });
      return this.readable.onError((r) => this.fireError(r)), this.readable.onClose(() => this.fireClose()), t;
    }
    onData(e) {
      try {
        for (this.buffer.append(e); ; ) {
          if (this.nextMessageLength === -1) {
            let r = this.buffer.tryReadHeaders(true);
            if (!r) return;
            let i = r.get("content-length");
            if (!i) {
              this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(r))}`));
              return;
            }
            let s = parseInt(i);
            if (isNaN(s)) {
              this.fireError(new Error(`Content-Length value must be a number. Got ${i}`));
              return;
            }
            this.nextMessageLength = s;
          }
          let t = this.buffer.tryReadBody(this.nextMessageLength);
          if (t === void 0) {
            this.setPartialMessageTimer();
            return;
          }
          this.clearPartialMessageTimer(), this.nextMessageLength = -1, this.readSemaphore.lock(async () => {
            let r = this.options.contentDecoder !== void 0 ? await this.options.contentDecoder.decode(t) : t, i = await this.options.contentTypeDecoder.decode(r, this.options);
            this.callback(i);
          }).catch((r) => {
            this.fireError(r);
          });
        }
      } catch (t) {
        this.fireError(t);
      }
    }
    clearPartialMessageTimer() {
      this.partialMessageTimer && (this.partialMessageTimer.dispose(), this.partialMessageTimer = void 0);
    }
    setPartialMessageTimer() {
      this.clearPartialMessageTimer(), !(this._partialMessageTimeout <= 0) && (this.partialMessageTimer = (0, Lc.default)().timer.setTimeout((e, t) => {
        this.partialMessageTimer = void 0, e === this.messageToken && (this.firePartialMessage({ messageToken: e, waitingTime: t }), this.setPartialMessageTimer());
      }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout));
    }
  };
  Ct.ReadableStreamMessageReader = kc;
});
var vp = j((wt) => {
  "use strict";
  var NC = wt && wt.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), FC = wt && wt.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), LC = wt && wt.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && NC(t, e, r[i]);
      return FC(t, e), t;
    };
  })(), AC = wt && wt.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(wt, "__esModule", { value: true });
  wt.WriteableStreamMessageWriter = wt.AbstractMessageWriter = wt.MessageWriter = void 0;
  var gp = AC(Pr()), ts = LC(hi()), kC = Nc(), mp = pi(), $C = "Content-Length: ", yp = `\r
`, _p;
  (function(n) {
    function e(t) {
      let r = t;
      return r && ts.func(r.dispose) && ts.func(r.onClose) && ts.func(r.onError) && ts.func(r.write);
    }
    n.is = e;
  })(_p || (wt.MessageWriter = _p = {}));
  var ao = class {
    errorEmitter;
    closeEmitter;
    constructor() {
      this.errorEmitter = new mp.Emitter(), this.closeEmitter = new mp.Emitter();
    }
    dispose() {
      this.errorEmitter.dispose(), this.closeEmitter.dispose();
    }
    get onError() {
      return this.errorEmitter.event;
    }
    fireError(e, t, r) {
      this.errorEmitter.fire([this.asError(e), t, r]);
    }
    get onClose() {
      return this.closeEmitter.event;
    }
    fireClose() {
      this.closeEmitter.fire(void 0);
    }
    asError(e) {
      return e instanceof Error ? e : new Error(`Writer received error. Reason: ${ts.string(e.message) ? e.message : "unknown"}`);
    }
  };
  wt.AbstractMessageWriter = ao;
  var $c;
  (function(n) {
    function e(t) {
      return t === void 0 || typeof t == "string" ? { charset: t ?? "utf-8", contentTypeEncoder: (0, gp.default)().applicationJson.encoder } : { charset: t.charset ?? "utf-8", contentEncoder: t.contentEncoder, contentTypeEncoder: t.contentTypeEncoder ?? (0, gp.default)().applicationJson.encoder };
    }
    n.fromOptions = e;
  })($c || ($c = {}));
  var Hc = class extends ao {
    writable;
    options;
    errorCount;
    writeSemaphore;
    constructor(e, t) {
      super(), this.writable = e, this.options = $c.fromOptions(t), this.errorCount = 0, this.writeSemaphore = new kC.Semaphore(1), this.writable.onError((r) => this.fireError(r)), this.writable.onClose(() => this.fireClose());
    }
    async write(e) {
      return this.writeSemaphore.lock(async () => this.options.contentTypeEncoder.encode(e, this.options).then((r) => this.options.contentEncoder !== void 0 ? this.options.contentEncoder.encode(r) : r).then((r) => {
        let i = [];
        return i.push($C, r.byteLength.toString(), yp), i.push(yp), this.doWrite(e, i, r);
      }, (r) => {
        throw this.fireError(r), r;
      }));
    }
    async doWrite(e, t, r) {
      try {
        return await this.writable.write(t.join(""), "ascii"), this.writable.write(r);
      } catch (i) {
        return this.handleError(i, e), Promise.reject(i);
      }
    }
    handleError(e, t) {
      this.errorCount++, this.fireError(e, t, this.errorCount);
    }
    end() {
      this.writable.end();
    }
  };
  wt.WriteableStreamMessageWriter = Hc;
});
var bp = j((co) => {
  "use strict";
  Object.defineProperty(co, "__esModule", { value: true });
  co.AbstractMessageBuffer = void 0;
  var HC = 13, UC = 10, WC = `\r
`, Uc = class {
    _encoding;
    _chunks;
    _totalLength;
    constructor(e = "utf-8") {
      this._encoding = e, this._chunks = [], this._totalLength = 0;
    }
    get encoding() {
      return this._encoding;
    }
    append(e) {
      let t = typeof e == "string" ? this.fromString(e, this._encoding) : e;
      this._chunks.push(t), this._totalLength += t.byteLength;
    }
    tryReadHeaders(e = false) {
      if (this._chunks.length === 0) return;
      let t = 0, r = 0, i = 0, s = 0;
      e: for (; r < this._chunks.length; ) {
        let l = this._chunks[r];
        for (i = 0; i < l.length; ) {
          switch (l[i]) {
            case HC:
              switch (t) {
                case 0:
                  t = 1;
                  break;
                case 2:
                  t = 3;
                  break;
                default:
                  t = 0;
              }
              break;
            case UC:
              switch (t) {
                case 1:
                  t = 2;
                  break;
                case 3:
                  t = 4, i++;
                  break e;
                default:
                  t = 0;
              }
              break;
            default:
              t = 0;
          }
          i++;
        }
        s += l.byteLength, r++;
      }
      if (t !== 4) return;
      let o = this._read(s + i), a = /* @__PURE__ */ new Map(), c = this.toString(o, "ascii").split(WC);
      if (c.length < 2) return a;
      for (let l = 0; l < c.length - 2; l++) {
        let d = c[l], p = d.indexOf(":");
        if (p === -1) throw new Error(`Message header must separate key and value using ':'
${d}`);
        let h = d.substr(0, p), m = d.substr(p + 1).trim();
        a.set(e ? h.toLowerCase() : h, m);
      }
      return a;
    }
    tryReadBody(e) {
      if (!(this._totalLength < e)) return this._read(e);
    }
    get numberOfBytes() {
      return this._totalLength;
    }
    _read(e) {
      if (e === 0) return this.emptyBuffer();
      if (e > this._totalLength) throw new Error("Cannot read so many bytes!");
      if (this._chunks[0].byteLength === e) {
        let s = this._chunks[0];
        return this._chunks.shift(), this._totalLength -= e, this.asNative(s);
      }
      if (this._chunks[0].byteLength > e) {
        let s = this._chunks[0], o = this.asNative(s, e);
        return this._chunks[0] = s.slice(e), this._totalLength -= e, o;
      }
      let t = this.allocNative(e), r = 0, i = 0;
      for (; e > 0; ) {
        let s = this._chunks[i];
        if (s.byteLength > e) {
          let o = s.slice(0, e);
          t.set(o, r), r += e, this._chunks[i] = s.slice(e), this._totalLength -= e, e -= e;
        } else t.set(s, r), r += s.byteLength, this._chunks.shift(), this._totalLength -= s.byteLength, e -= s.byteLength;
      }
      return t;
    }
  };
  co.AbstractMessageBuffer = Uc;
});
var Dp = j((re) => {
  "use strict";
  var zC = re && re.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), KC = re && re.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), BC = re && re.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && zC(t, e, r[i]);
      return KC(t, e), t;
    };
  })(), GC = re && re.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(re, "__esModule", { value: true });
  re.ConnectionOptions = re.MessageStrategy = re.CancellationStrategy = re.CancellationSenderStrategy = re.CancellationReceiverStrategy = re.RequestCancellationReceiverStrategy = re.IdCancellationReceiverStrategy = re.ConnectionStrategy = re.ConnectionError = re.ConnectionErrors = re.LogTraceNotification = re.SetTraceNotification = re.TraceFormat = re.TraceValues = re.TraceValue = re.Trace = re.NullLogger = re.ProgressType = re.ProgressToken = void 0;
  re.createMessageConnection = VC;
  var Cp = GC(Pr()), We = BC(hi()), le = bc(), wp = wc(), ns = pi(), Wc = so(), ss;
  (function(n) {
    n.type = new le.NotificationType("$/cancelRequest");
  })(ss || (ss = {}));
  var zc;
  (function(n) {
    function e(t) {
      return typeof t == "string" || typeof t == "number";
    }
    n.is = e;
  })(zc || (re.ProgressToken = zc = {}));
  var rs;
  (function(n) {
    n.type = new le.NotificationType("$/progress");
  })(rs || (rs = {}));
  var Kc = class {
    __;
    _pr;
    constructor() {
    }
  };
  re.ProgressType = Kc;
  var Bc;
  (function(n) {
    function e(t) {
      return We.func(t);
    }
    n.is = e;
  })(Bc || (Bc = {}));
  re.NullLogger = Object.freeze({ error: () => {
  }, warn: () => {
  }, info: () => {
  }, log: () => {
  } });
  var Se;
  (function(n) {
    n[n.Off = 0] = "Off", n[n.Messages = 1] = "Messages", n[n.Compact = 2] = "Compact", n[n.Verbose = 3] = "Verbose";
  })(Se || (re.Trace = Se = {}));
  var Gc;
  (function(n) {
    n.Off = "off", n.Messages = "messages", n.Compact = "compact", n.Verbose = "verbose";
  })(Gc || (re.TraceValue = Gc = {}));
  re.TraceValues = Gc;
  (function(n) {
    function e(r) {
      if (!We.string(r)) return n.Off;
      switch (r = r.toLowerCase(), r) {
        case "off":
          return n.Off;
        case "messages":
          return n.Messages;
        case "compact":
          return n.Compact;
        case "verbose":
          return n.Verbose;
        default:
          return n.Off;
      }
    }
    n.fromString = e;
    function t(r) {
      switch (r) {
        case n.Off:
          return "off";
        case n.Messages:
          return "messages";
        case n.Compact:
          return "compact";
        case n.Verbose:
          return "verbose";
        default:
          return "off";
      }
    }
    n.toString = t;
  })(Se || (re.Trace = Se = {}));
  var $t;
  (function(n) {
    n.Text = "text", n.JSON = "json";
  })($t || (re.TraceFormat = $t = {}));
  (function(n) {
    function e(t) {
      return We.string(t) ? (t = t.toLowerCase(), t === "json" ? n.JSON : n.Text) : n.Text;
    }
    n.fromString = e;
  })($t || (re.TraceFormat = $t = {}));
  var Vc;
  (function(n) {
    n.type = new le.NotificationType("$/setTrace");
  })(Vc || (re.SetTraceNotification = Vc = {}));
  var uo;
  (function(n) {
    n.type = new le.NotificationType("$/logTrace");
  })(uo || (re.LogTraceNotification = uo = {}));
  var is;
  (function(n) {
    n[n.Closed = 1] = "Closed", n[n.Disposed = 2] = "Disposed", n[n.AlreadyListening = 3] = "AlreadyListening";
  })(is || (re.ConnectionErrors = is = {}));
  var _i = class n extends Error {
    code;
    constructor(e, t) {
      super(t), this.code = e, Object.setPrototypeOf(this, n.prototype);
    }
  };
  re.ConnectionError = _i;
  var Xc;
  (function(n) {
    function e(t) {
      let r = t;
      return r && We.func(r.cancelUndispatched);
    }
    n.is = e;
  })(Xc || (re.ConnectionStrategy = Xc = {}));
  var lo;
  (function(n) {
    function e(t) {
      let r = t;
      return r && (r.kind === void 0 || r.kind === "id") && We.func(r.createCancellationTokenSource) && (r.dispose === void 0 || We.func(r.dispose));
    }
    n.is = e;
  })(lo || (re.IdCancellationReceiverStrategy = lo = {}));
  var Jc;
  (function(n) {
    function e(t) {
      let r = t;
      return r && r.kind === "request" && We.func(r.createCancellationTokenSource) && (r.dispose === void 0 || We.func(r.dispose));
    }
    n.is = e;
  })(Jc || (re.RequestCancellationReceiverStrategy = Jc = {}));
  var fo;
  (function(n) {
    n.Message = Object.freeze({ createCancellationTokenSource(t) {
      return new Wc.CancellationTokenSource();
    } });
    function e(t) {
      return lo.is(t) || Jc.is(t);
    }
    n.is = e;
  })(fo || (re.CancellationReceiverStrategy = fo = {}));
  var ho;
  (function(n) {
    n.Message = Object.freeze({ sendCancellation(t, r) {
      return t.sendNotification(ss.type, { id: r });
    }, cleanup(t) {
    } });
    function e(t) {
      let r = t;
      return r && We.func(r.sendCancellation) && We.func(r.cleanup);
    }
    n.is = e;
  })(ho || (re.CancellationSenderStrategy = ho = {}));
  var po;
  (function(n) {
    n.Message = Object.freeze({ receiver: fo.Message, sender: ho.Message });
    function e(t) {
      let r = t;
      return r && fo.is(r.receiver) && ho.is(r.sender);
    }
    n.is = e;
  })(po || (re.CancellationStrategy = po = {}));
  var go;
  (function(n) {
    function e(t) {
      let r = t;
      return r && We.func(r.handleMessage);
    }
    n.is = e;
  })(go || (re.MessageStrategy = go = {}));
  var Sp;
  (function(n) {
    function e(t) {
      let r = t;
      return r && (po.is(r.cancellationStrategy) || Xc.is(r.connectionStrategy) || go.is(r.messageStrategy) || We.number(r.maxParallelism));
    }
    n.is = e;
  })(Sp || (re.ConnectionOptions = Sp = {}));
  var nn;
  (function(n) {
    n[n.New = 1] = "New", n[n.Listening = 2] = "Listening", n[n.Closed = 3] = "Closed", n[n.Disposed = 4] = "Disposed";
  })(nn || (nn = {}));
  function VC(n, e, t, r) {
    let i = t !== void 0 ? t : re.NullLogger, s = 0, o = 0, a = 0, c = "2.0", l = r?.maxParallelism ?? -1, d = 0, p, h = /* @__PURE__ */ new Map(), m, g = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), T, R = new wp.LinkedMap(), v = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Set(), A = /* @__PURE__ */ new Map(), x = Se.Off, w = $t.Text, S, q = nn.New, H = new ns.Emitter(), O = new ns.Emitter(), F = new ns.Emitter(), $ = new ns.Emitter(), K = new ns.Emitter(), ee = r && r.cancellationStrategy ? r.cancellationStrategy : po.Message;
    function ce(b) {
    }
    function ue() {
      return q === nn.Listening;
    }
    function te() {
      return q === nn.Closed;
    }
    function pe() {
      return q === nn.Disposed;
    }
    function ie() {
      (q === nn.New || q === nn.Listening) && (q = nn.Closed, O.fire(void 0));
    }
    function ft(b) {
      H.fire([b, void 0, void 0]);
    }
    function ht(b) {
      H.fire(b);
    }
    n.onClose(ie), n.onError(ft), e.onClose(ie), e.onError(ht);
    function hn(b) {
      if (b === null) throw new Error("Can't send requests with id null since the response can't be correlated.");
      return "req-" + b.toString();
    }
    function $n(b) {
      return b === null ? "res-unknown-" + (++a).toString() : "res-" + b.toString();
    }
    function pn() {
      return "not-" + (++o).toString();
    }
    function gn(b, L) {
      le.Message.isRequest(L) ? b.set(hn(L.id), L) : le.Message.isResponse(L) ? l === -1 ? b.set($n(L.id), L) : _r(L) : b.set(pn(), L);
    }
    function Wr() {
      T || R.size === 0 || l !== -1 && d >= l || (T = (0, Cp.default)().timer.setImmediate(async () => {
        if (T = void 0, R.size === 0 || l !== -1 && d >= l) return;
        let b = R.shift(), L;
        try {
          d++;
          let U = r?.messageStrategy;
          go.is(U) ? L = U.handleMessage(b, ci) : L = ci(b);
        } catch (U) {
          i.error(`Processing message queue failed: ${U.toString()}`);
        } finally {
          L instanceof Promise ? L.then(() => {
            d--, Wr();
          }).catch((U) => {
            i.error(`Processing message queue failed: ${U.toString()}`);
          }) : d--, Wr();
        }
      }));
    }
    async function ci(b) {
      return le.Message.isRequest(b) ? yr(b) : le.Message.isNotification(b) ? Xi(b) : le.Message.isResponse(b) ? _r(b) : ui(b);
    }
    let mr = (b) => {
      try {
        if (le.Message.isNotification(b) && b.method === ss.type.method) {
          let L = b.params.id, U = hn(L), Q = R.get(U);
          if (le.Message.isRequest(Q)) {
            let Ce = r?.connectionStrategy, ve = Ce && Ce.cancelUndispatched ? Ce.cancelUndispatched(Q, ce) : void 0;
            if (ve && (ve.error !== void 0 || ve.result !== void 0)) {
              R.delete(U), A.delete(L), ve.id = Q.id, vr(ve, b.method, Date.now()), e.write(ve).catch(() => i.error("Sending response for canceled message failed."));
              return;
            }
          }
          let ge = A.get(L);
          if (ge !== void 0) {
            ge.cancel(), Hn(b);
            return;
          } else D.add(L);
        }
        gn(R, b);
      } finally {
        Wr();
      }
    };
    async function yr(b) {
      if (pe()) return Promise.resolve();
      function L(He, Ye, Oe) {
        let Me = { jsonrpc: c, id: b.id };
        return He instanceof le.ResponseError ? Me.error = He.toJson() : Me.result = He === void 0 ? null : He, vr(Me, Ye, Oe), e.write(Me);
      }
      function U(He, Ye, Oe) {
        let Me = { jsonrpc: c, id: b.id, error: He.toJson() };
        return vr(Me, Ye, Oe), e.write(Me);
      }
      br(b);
      let Q = h.get(b.method), ge, Ce;
      Q && (ge = Q.type, Ce = Q.handler);
      let ve = Date.now();
      if (Ce || p) {
        let He = b.id ?? String(Date.now()), Ye = lo.is(ee.receiver) ? ee.receiver.createCancellationTokenSource(He) : ee.receiver.createCancellationTokenSource(b);
        b.id !== null && D.has(b.id) && Ye.cancel(), b.id !== null && A.set(He, Ye);
        try {
          let Oe;
          if (Ce) if (b.params === void 0) {
            if (ge !== void 0 && ge.numberOfParams !== 0) return U(new le.ResponseError(le.ErrorCodes.InvalidParams, `Request ${b.method} defines ${ge.numberOfParams} params but received none.`), b.method, ve);
            Oe = Ce(Ye.token);
          } else if (Array.isArray(b.params)) {
            if (ge !== void 0 && ge.parameterStructures === le.ParameterStructures.byName) return U(new le.ResponseError(le.ErrorCodes.InvalidParams, `Request ${b.method} defines parameters by name but received parameters by position`), b.method, ve);
            Oe = Ce(...b.params, Ye.token);
          } else {
            if (ge !== void 0 && ge.parameterStructures === le.ParameterStructures.byPosition) return U(new le.ResponseError(le.ErrorCodes.InvalidParams, `Request ${b.method} defines parameters by position but received parameters by name`), b.method, ve);
            Oe = Ce(b.params, Ye.token);
          }
          else p && (Oe = p(b.method, b.params, Ye.token));
          let Me = await Oe;
          await L(Me, b.method, ve);
        } catch (Oe) {
          Oe instanceof le.ResponseError ? await L(Oe, b.method, ve) : Oe && We.string(Oe.message) ? await U(new le.ResponseError(le.ErrorCodes.InternalError, `Request ${b.method} failed with message: ${Oe.message}`), b.method, ve) : await U(new le.ResponseError(le.ErrorCodes.InternalError, `Request ${b.method} failed unexpectedly without providing any details.`), b.method, ve);
        } finally {
          A.delete(He);
        }
      } else await U(new le.ResponseError(le.ErrorCodes.MethodNotFound, `Unhandled method ${b.method}`), b.method, ve);
    }
    function _r(b) {
      if (!pe()) if (b.id === null) b.error ? i.error(`Received response message without id: Error is: 
${JSON.stringify(b.error, void 0, 4)}`) : i.error("Received response message without id. No further error information provided.");
      else {
        let L = b.id, U = v.get(L);
        if (li(b, U), U !== void 0) {
          v.delete(L);
          try {
            if (b.error) {
              let Q = b.error;
              U.reject(new le.ResponseError(Q.code, Q.message, Q.data));
            } else if (b.result !== void 0) U.resolve(b.result);
            else throw new Error("Should never happen.");
          } catch (Q) {
            Q.message ? i.error(`Response handler '${U.method}' failed with message: ${Q.message}`) : i.error(`Response handler '${U.method}' failed unexpectedly.`);
          }
        }
      }
    }
    async function Xi(b) {
      if (pe()) return;
      let L, U;
      if (b.method === ss.type.method) {
        let Q = b.params.id;
        D.delete(Q), Hn(b);
        return;
      } else {
        let Q = g.get(b.method);
        Q && (U = Q.handler, L = Q.type);
      }
      if (U || m) try {
        if (Hn(b), U) if (b.params === void 0) L !== void 0 && L.numberOfParams !== 0 && L.parameterStructures !== le.ParameterStructures.byName && i.error(`Notification ${b.method} defines ${L.numberOfParams} params but received none.`), await U();
        else if (Array.isArray(b.params)) {
          let Q = b.params;
          b.method === rs.type.method && Q.length === 2 && zc.is(Q[0]) ? await U({ token: Q[0], value: Q[1] }) : (L !== void 0 && (L.parameterStructures === le.ParameterStructures.byName && i.error(`Notification ${b.method} defines parameters by name but received parameters by position`), L.numberOfParams !== b.params.length && i.error(`Notification ${b.method} defines ${L.numberOfParams} params but received ${Q.length} arguments`)), await U(...Q));
        } else L !== void 0 && L.parameterStructures === le.ParameterStructures.byPosition && i.error(`Notification ${b.method} defines parameters by position but received parameters by name`), await U(b.params);
        else m && await m(b.method, b.params);
      } catch (Q) {
        Q.message ? i.error(`Notification handler '${b.method}' failed with message: ${Q.message}`) : i.error(`Notification handler '${b.method}' failed unexpectedly.`);
      }
      else F.fire(b);
    }
    function ui(b) {
      if (!b) {
        i.error("Received empty message.");
        return;
      }
      i.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(b, null, 4)}`);
      let L = b;
      if (We.string(L.id) || We.number(L.id)) {
        let U = L.id, Q = v.get(U);
        Q && Q.reject(new Error("The received response has neither a result nor an error property."));
      }
    }
    function At(b) {
      if (b != null) switch (x) {
        case Se.Verbose:
          return JSON.stringify(b, null, 4);
        case Se.Compact:
          return JSON.stringify(b);
        default:
          return;
      }
    }
    function Ji(b) {
      if (!(x === Se.Off || !S)) if (w === $t.Text) {
        let L;
        (x === Se.Verbose || x === Se.Compact) && b.params && (L = `Params: ${At(b.params)}`), S.log(`Sending request '${b.method} - (${b.id})'.`, L);
      } else yt("send-request", b);
    }
    function mn(b) {
      if (!(x === Se.Off || !S)) if (w === $t.Text) {
        let L;
        (x === Se.Verbose || x === Se.Compact) && (b.params ? L = `Params: ${At(b.params)}` : L = "No parameters provided."), S.log(`Sending notification '${b.method}'.`, L);
      } else yt("send-notification", b);
    }
    function vr(b, L, U) {
      if (!(x === Se.Off || !S)) if (w === $t.Text) {
        let Q;
        (x === Se.Verbose || x === Se.Compact) && (b.error && b.error.data ? Q = `Error data: ${At(b.error.data)}` : b.result ? Q = `Result: ${At(b.result)}` : b.error === void 0 && (Q = "No result returned.")), S.log(`Sending response '${L} - (${b.id})'. Processing request took ${Date.now() - U}ms`, Q);
      } else yt("send-response", b);
    }
    function br(b) {
      if (!(x === Se.Off || !S)) if (w === $t.Text) {
        let L;
        (x === Se.Verbose || x === Se.Compact) && b.params && (L = `Params: ${At(b.params)}`), S.log(`Received request '${b.method} - (${b.id})'.`, L);
      } else yt("receive-request", b);
    }
    function Hn(b) {
      if (!(x === Se.Off || !S || b.method === uo.type.method)) if (w === $t.Text) {
        let L;
        (x === Se.Verbose || x === Se.Compact) && (b.params ? L = `Params: ${At(b.params)}` : L = "No parameters provided."), S.log(`Received notification '${b.method}'.`, L);
      } else yt("receive-notification", b);
    }
    function li(b, L) {
      if (!(x === Se.Off || !S)) if (w === $t.Text) {
        let U;
        if ((x === Se.Verbose || x === Se.Compact) && (b.error && b.error.data ? U = `Error data: ${At(b.error.data)}` : b.result ? U = `Result: ${At(b.result)}` : b.error === void 0 && (U = "No result returned.")), L) {
          let Q = b.error ? ` Request failed: ${b.error.message} (${b.error.code}).` : "";
          S.log(`Received response '${L.method} - (${b.id})' in ${Date.now() - L.timerStart}ms.${Q}`, U);
        } else S.log(`Received response ${b.id} without active response promise.`, U);
      } else yt("receive-response", b);
    }
    function yt(b, L) {
      if (!S || x === Se.Off) return;
      let U = { isLSPMessage: true, type: b, message: L, timestamp: Date.now() };
      S.log(U);
    }
    function tn() {
      if (te()) throw new _i(is.Closed, "Connection is closed.");
      if (pe()) throw new _i(is.Disposed, "Connection is disposed.");
    }
    function _t() {
      if (ue()) throw new _i(is.AlreadyListening, "Connection is already listening");
    }
    function Qi() {
      if (!ue()) throw new Error("Call listen() first.");
    }
    function pt(b) {
      return b === void 0 ? null : b;
    }
    function Un(b) {
      if (b !== null) return b;
    }
    function di(b) {
      return b != null && !Array.isArray(b) && typeof b == "object";
    }
    function zr(b, L) {
      switch (b) {
        case le.ParameterStructures.auto:
          return di(L) ? Un(L) : [pt(L)];
        case le.ParameterStructures.byName:
          if (!di(L)) throw new Error("Received parameters by name but param is not an object literal.");
          return Un(L);
        case le.ParameterStructures.byPosition:
          return [pt(L)];
        default:
          throw new Error(`Unknown parameter structure ${b.toString()}`);
      }
    }
    function Cr(b, L) {
      let U, Q = b.numberOfParams;
      switch (Q) {
        case 0:
          U = void 0;
          break;
        case 1:
          U = zr(b.parameterStructures, L[0]);
          break;
        default:
          U = [];
          for (let ge = 0; ge < L.length && ge < Q; ge++) U.push(pt(L[ge]));
          if (L.length < Q) for (let ge = L.length; ge < Q; ge++) U.push(null);
          break;
      }
      return U;
    }
    let Gt = { sendNotification: (b, ...L) => {
      tn();
      let U, Q;
      if (We.string(b)) {
        U = b;
        let Ce = L[0], ve = 0, He = le.ParameterStructures.auto;
        le.ParameterStructures.is(Ce) && (ve = 1, He = Ce);
        let Ye = L.length, Oe = Ye - ve;
        switch (Oe) {
          case 0:
            Q = void 0;
            break;
          case 1:
            Q = zr(He, L[ve]);
            break;
          default:
            if (He === le.ParameterStructures.byName) throw new Error(`Received ${Oe} parameters for 'by Name' notification parameter structure.`);
            Q = L.slice(ve, Ye).map((Me) => pt(Me));
            break;
        }
      } else {
        let Ce = L;
        U = b.method, Q = Cr(b, Ce);
      }
      let ge = { jsonrpc: c, method: U, params: Q };
      return mn(ge), e.write(ge).catch((Ce) => {
        throw i.error("Sending notification failed."), Ce;
      });
    }, onNotification: (b, L) => {
      tn();
      let U;
      return We.func(b) ? m = b : L && (We.string(b) ? (U = b, g.set(b, { type: void 0, handler: L })) : (U = b.method, g.set(b.method, { type: b, handler: L }))), { dispose: () => {
        U !== void 0 ? g.get(U)?.handler === L && g.delete(U) : m === b && (m = void 0);
      } };
    }, onProgress: (b, L, U) => {
      if (y.has(L)) throw new Error(`Progress handler for token ${L} already registered`);
      return y.set(L, U), { dispose: () => {
        y.get(L) === U && y.delete(L);
      } };
    }, sendProgress: (b, L, U) => Gt.sendNotification(rs.type, { token: L, value: U }), onUnhandledProgress: $.event, sendRequest: (b, ...L) => {
      tn(), Qi();
      function U(Me, vt) {
        let xt = ee.sender.sendCancellation(Me, vt);
        xt === void 0 ? i.log(`Received no promise from cancellation strategy when cancelling id ${vt}`) : xt.catch(() => {
          i.log(`Sending cancellation messages for id ${vt} failed.`);
        });
      }
      let Q, ge, Ce;
      if (We.string(b)) {
        Q = b;
        let Me = L[0], vt = L[L.length - 1], xt = 0, Wn = le.ParameterStructures.auto;
        le.ParameterStructures.is(Me) && (xt = 1, Wn = Me);
        let kt = L.length;
        Wc.CancellationToken.is(vt) && (kt = kt - 1, Ce = vt);
        let qt = kt - xt;
        switch (qt) {
          case 0:
            ge = void 0;
            break;
          case 1:
            ge = zr(Wn, L[xt]);
            break;
          default:
            if (Wn === le.ParameterStructures.byName) throw new Error(`Received ${qt} parameters for 'by Name' request parameter structure.`);
            ge = L.slice(xt, kt).map((fi) => pt(fi));
            break;
        }
      } else {
        let Me = L;
        Q = b.method, ge = Cr(b, Me);
        let vt = b.numberOfParams;
        Ce = Wc.CancellationToken.is(Me[vt]) ? Me[vt] : void 0;
      }
      let ve = s++, He, Ye = false;
      Ce !== void 0 && (Ce.isCancellationRequested ? Ye = true : He = Ce.onCancellationRequested(() => {
        U(Gt, ve);
      }));
      let Oe = { jsonrpc: c, id: ve, method: Q, params: ge };
      return Ji(Oe), typeof ee.sender.enableCancellation == "function" && ee.sender.enableCancellation(Oe), new Promise(async (Me, vt) => {
        let xt = (qt) => {
          Me(qt), ee.sender.cleanup(ve), He?.dispose();
        }, Wn = (qt) => {
          vt(qt), ee.sender.cleanup(ve), He?.dispose();
        }, kt = { method: Q, timerStart: Date.now(), resolve: xt, reject: Wn };
        try {
          v.set(ve, kt), await e.write(Oe), Ye && U(Gt, ve);
        } catch (qt) {
          throw v.delete(ve), kt.reject(new le.ResponseError(le.ErrorCodes.MessageWriteError, qt.message ? qt.message : "Unknown reason")), i.error("Sending request failed."), qt;
        }
      });
    }, onRequest: (b, L) => {
      tn();
      let U = null;
      return Bc.is(b) ? (U = void 0, p = b) : We.string(b) ? (U = null, L !== void 0 && (U = b, h.set(b, { handler: L, type: void 0 }))) : L !== void 0 && (U = b.method, h.set(b.method, { type: b, handler: L })), { dispose: () => {
        U !== null && (U !== void 0 ? h.get(U)?.handler === L && h.delete(U) : p === b && (p = void 0));
      } };
    }, hasPendingResponse: () => v.size > 0, trace: async (b, L, U) => {
      let Q = false, ge = $t.Text;
      U !== void 0 && (We.boolean(U) ? Q = U : (Q = U.sendNotification || false, ge = U.traceFormat || $t.Text)), x = b, w = ge, x === Se.Off ? S = void 0 : S = L, Q && !te() && !pe() && await Gt.sendNotification(Vc.type, { value: Se.toString(b) });
    }, onError: H.event, onClose: O.event, onUnhandledNotification: F.event, onDispose: K.event, end: () => {
      e.end();
    }, dispose: () => {
      if (pe()) return;
      q = nn.Disposed, K.fire(void 0);
      let b = new le.ResponseError(le.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
      for (let L of v.values()) L.reject(b);
      v = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Set(), R = new wp.LinkedMap(), We.func(e.dispose) && e.dispose(), We.func(n.dispose) && n.dispose();
    }, listen: () => {
      tn(), _t(), q = nn.Listening, n.listen(mr);
    }, inspect: () => {
      (0, Cp.default)().console.log("inspect");
    } };
    return Gt.onNotification(uo.type, (b) => {
      if (x === Se.Off || !S) return;
      let L = x === Se.Verbose || x === Se.Compact;
      S.log(b.message, L ? b.verbose : void 0);
    }), Gt.onNotification(rs.type, async (b) => {
      let L = y.get(b.token);
      L ? await L(b.value) : $.fire(b);
    }), Gt;
  }
});
var Gn = j((M) => {
  "use strict";
  var XC = M && M.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(M, "__esModule", { value: true });
  M.ProgressType = M.ProgressToken = M.createMessageConnection = M.NullLogger = M.ConnectionOptions = M.ConnectionStrategy = M.AbstractMessageBuffer = M.WriteableStreamMessageWriter = M.AbstractMessageWriter = M.MessageWriter = M.ReadableStreamMessageReader = M.AbstractMessageReader = M.MessageReader = M.SharedArrayReceiverStrategy = M.SharedArraySenderStrategy = M.CancellationToken = M.CancellationTokenSource = M.Emitter = M.Event = M.Disposable = M.LRUCache = M.Touch = M.LinkedMap = M.ParameterStructures = M.NotificationType9 = M.NotificationType8 = M.NotificationType7 = M.NotificationType6 = M.NotificationType5 = M.NotificationType4 = M.NotificationType3 = M.NotificationType2 = M.NotificationType1 = M.NotificationType0 = M.NotificationType = M.ErrorCodes = M.ResponseError = M.RequestType9 = M.RequestType8 = M.RequestType7 = M.RequestType6 = M.RequestType5 = M.RequestType4 = M.RequestType3 = M.RequestType2 = M.RequestType1 = M.RequestType0 = M.RequestType = M.Message = M.RAL = void 0;
  M.MessageStrategy = M.CancellationStrategy = M.CancellationSenderStrategy = M.RequestCancellationReceiverStrategy = M.IdCancellationReceiverStrategy = M.CancellationReceiverStrategy = M.ConnectionError = M.ConnectionErrors = M.LogTraceNotification = M.SetTraceNotification = M.TraceFormat = M.TraceValues = M.TraceValue = M.Trace = void 0;
  var je = bc();
  Object.defineProperty(M, "Message", { enumerable: true, get: function() {
    return je.Message;
  } });
  Object.defineProperty(M, "RequestType", { enumerable: true, get: function() {
    return je.RequestType;
  } });
  Object.defineProperty(M, "RequestType0", { enumerable: true, get: function() {
    return je.RequestType0;
  } });
  Object.defineProperty(M, "RequestType1", { enumerable: true, get: function() {
    return je.RequestType1;
  } });
  Object.defineProperty(M, "RequestType2", { enumerable: true, get: function() {
    return je.RequestType2;
  } });
  Object.defineProperty(M, "RequestType3", { enumerable: true, get: function() {
    return je.RequestType3;
  } });
  Object.defineProperty(M, "RequestType4", { enumerable: true, get: function() {
    return je.RequestType4;
  } });
  Object.defineProperty(M, "RequestType5", { enumerable: true, get: function() {
    return je.RequestType5;
  } });
  Object.defineProperty(M, "RequestType6", { enumerable: true, get: function() {
    return je.RequestType6;
  } });
  Object.defineProperty(M, "RequestType7", { enumerable: true, get: function() {
    return je.RequestType7;
  } });
  Object.defineProperty(M, "RequestType8", { enumerable: true, get: function() {
    return je.RequestType8;
  } });
  Object.defineProperty(M, "RequestType9", { enumerable: true, get: function() {
    return je.RequestType9;
  } });
  Object.defineProperty(M, "ResponseError", { enumerable: true, get: function() {
    return je.ResponseError;
  } });
  Object.defineProperty(M, "ErrorCodes", { enumerable: true, get: function() {
    return je.ErrorCodes;
  } });
  Object.defineProperty(M, "NotificationType", { enumerable: true, get: function() {
    return je.NotificationType;
  } });
  Object.defineProperty(M, "NotificationType0", { enumerable: true, get: function() {
    return je.NotificationType0;
  } });
  Object.defineProperty(M, "NotificationType1", { enumerable: true, get: function() {
    return je.NotificationType1;
  } });
  Object.defineProperty(M, "NotificationType2", { enumerable: true, get: function() {
    return je.NotificationType2;
  } });
  Object.defineProperty(M, "NotificationType3", { enumerable: true, get: function() {
    return je.NotificationType3;
  } });
  Object.defineProperty(M, "NotificationType4", { enumerable: true, get: function() {
    return je.NotificationType4;
  } });
  Object.defineProperty(M, "NotificationType5", { enumerable: true, get: function() {
    return je.NotificationType5;
  } });
  Object.defineProperty(M, "NotificationType6", { enumerable: true, get: function() {
    return je.NotificationType6;
  } });
  Object.defineProperty(M, "NotificationType7", { enumerable: true, get: function() {
    return je.NotificationType7;
  } });
  Object.defineProperty(M, "NotificationType8", { enumerable: true, get: function() {
    return je.NotificationType8;
  } });
  Object.defineProperty(M, "NotificationType9", { enumerable: true, get: function() {
    return je.NotificationType9;
  } });
  Object.defineProperty(M, "ParameterStructures", { enumerable: true, get: function() {
    return je.ParameterStructures;
  } });
  var Qc = wc();
  Object.defineProperty(M, "LinkedMap", { enumerable: true, get: function() {
    return Qc.LinkedMap;
  } });
  Object.defineProperty(M, "LRUCache", { enumerable: true, get: function() {
    return Qc.LRUCache;
  } });
  Object.defineProperty(M, "Touch", { enumerable: true, get: function() {
    return Qc.Touch;
  } });
  var JC = lp();
  Object.defineProperty(M, "Disposable", { enumerable: true, get: function() {
    return JC.Disposable;
  } });
  var Pp = pi();
  Object.defineProperty(M, "Event", { enumerable: true, get: function() {
    return Pp.Event;
  } });
  Object.defineProperty(M, "Emitter", { enumerable: true, get: function() {
    return Pp.Emitter;
  } });
  var Rp = so();
  Object.defineProperty(M, "CancellationTokenSource", { enumerable: true, get: function() {
    return Rp.CancellationTokenSource;
  } });
  Object.defineProperty(M, "CancellationToken", { enumerable: true, get: function() {
    return Rp.CancellationToken;
  } });
  var Tp = fp();
  Object.defineProperty(M, "SharedArraySenderStrategy", { enumerable: true, get: function() {
    return Tp.SharedArraySenderStrategy;
  } });
  Object.defineProperty(M, "SharedArrayReceiverStrategy", { enumerable: true, get: function() {
    return Tp.SharedArrayReceiverStrategy;
  } });
  var Yc = pp();
  Object.defineProperty(M, "MessageReader", { enumerable: true, get: function() {
    return Yc.MessageReader;
  } });
  Object.defineProperty(M, "AbstractMessageReader", { enumerable: true, get: function() {
    return Yc.AbstractMessageReader;
  } });
  Object.defineProperty(M, "ReadableStreamMessageReader", { enumerable: true, get: function() {
    return Yc.ReadableStreamMessageReader;
  } });
  var Zc = vp();
  Object.defineProperty(M, "MessageWriter", { enumerable: true, get: function() {
    return Zc.MessageWriter;
  } });
  Object.defineProperty(M, "AbstractMessageWriter", { enumerable: true, get: function() {
    return Zc.AbstractMessageWriter;
  } });
  Object.defineProperty(M, "WriteableStreamMessageWriter", { enumerable: true, get: function() {
    return Zc.WriteableStreamMessageWriter;
  } });
  var QC = bp();
  Object.defineProperty(M, "AbstractMessageBuffer", { enumerable: true, get: function() {
    return QC.AbstractMessageBuffer;
  } });
  var et = Dp();
  Object.defineProperty(M, "ConnectionStrategy", { enumerable: true, get: function() {
    return et.ConnectionStrategy;
  } });
  Object.defineProperty(M, "ConnectionOptions", { enumerable: true, get: function() {
    return et.ConnectionOptions;
  } });
  Object.defineProperty(M, "NullLogger", { enumerable: true, get: function() {
    return et.NullLogger;
  } });
  Object.defineProperty(M, "createMessageConnection", { enumerable: true, get: function() {
    return et.createMessageConnection;
  } });
  Object.defineProperty(M, "ProgressToken", { enumerable: true, get: function() {
    return et.ProgressToken;
  } });
  Object.defineProperty(M, "ProgressType", { enumerable: true, get: function() {
    return et.ProgressType;
  } });
  Object.defineProperty(M, "Trace", { enumerable: true, get: function() {
    return et.Trace;
  } });
  Object.defineProperty(M, "TraceValue", { enumerable: true, get: function() {
    return et.TraceValue;
  } });
  Object.defineProperty(M, "TraceFormat", { enumerable: true, get: function() {
    return et.TraceFormat;
  } });
  Object.defineProperty(M, "SetTraceNotification", { enumerable: true, get: function() {
    return et.SetTraceNotification;
  } });
  Object.defineProperty(M, "LogTraceNotification", { enumerable: true, get: function() {
    return et.LogTraceNotification;
  } });
  Object.defineProperty(M, "ConnectionErrors", { enumerable: true, get: function() {
    return et.ConnectionErrors;
  } });
  Object.defineProperty(M, "ConnectionError", { enumerable: true, get: function() {
    return et.ConnectionError;
  } });
  Object.defineProperty(M, "CancellationReceiverStrategy", { enumerable: true, get: function() {
    return et.CancellationReceiverStrategy;
  } });
  Object.defineProperty(M, "IdCancellationReceiverStrategy", { enumerable: true, get: function() {
    return et.IdCancellationReceiverStrategy;
  } });
  Object.defineProperty(M, "RequestCancellationReceiverStrategy", { enumerable: true, get: function() {
    return et.RequestCancellationReceiverStrategy;
  } });
  Object.defineProperty(M, "CancellationSenderStrategy", { enumerable: true, get: function() {
    return et.CancellationSenderStrategy;
  } });
  Object.defineProperty(M, "CancellationStrategy", { enumerable: true, get: function() {
    return et.CancellationStrategy;
  } });
  Object.defineProperty(M, "MessageStrategy", { enumerable: true, get: function() {
    return et.MessageStrategy;
  } });
  Object.defineProperty(M, "TraceValues", { enumerable: true, get: function() {
    return et.TraceValues;
  } });
  var YC = XC(Pr());
  M.RAL = YC.default;
});
var Ro = {};
Xa(Ro, { AnnotatedTextEdit: () => Vn, ApplyKind: () => Cu, ChangeAnnotation: () => Tr, ChangeAnnotationIdentifier: () => ot, CodeAction: () => Lu, CodeActionContext: () => Fu, CodeActionKind: () => Nu, CodeActionTag: () => wo, CodeActionTriggerKind: () => fs, CodeDescription: () => uu, CodeLens: () => Au, Color: () => yo, ColorInformation: () => ru, ColorPresentation: () => iu, Command: () => Br, CompletionItem: () => Su, CompletionItemKind: () => mu, CompletionItemLabelDetails: () => wu, CompletionItemTag: () => _u, CompletionList: () => Du, CreateFile: () => bi, DeleteFile: () => wi, Diagnostic: () => cs, DiagnosticRelatedInformation: () => _o, DiagnosticSeverity: () => au, DiagnosticTag: () => cu, DocumentHighlight: () => Eu, DocumentHighlightKind: () => Ou, DocumentLink: () => $u, DocumentSymbol: () => Iu, DocumentUri: () => eu, EOL: () => ZC, FoldingRange: () => ou, FoldingRangeKind: () => su, FormattingOptions: () => ku, Hover: () => Pu, InlayHint: () => Xu, InlayHintKind: () => So, InlayHintLabelPart: () => Do, InlineCompletionContext: () => el, InlineCompletionItem: () => Ju, InlineCompletionList: () => Qu, InlineCompletionTriggerKind: () => Yu, InlineValueContext: () => Vu, InlineValueEvaluatableExpression: () => Gu, InlineValueText: () => Ku, InlineValueVariableLookup: () => Bu, InsertReplaceEdit: () => vu, InsertTextFormat: () => yu, InsertTextMode: () => bu, LanguageKind: () => pu, Location: () => as, LocationLink: () => nu, MarkedString: () => ds, MarkupContent: () => Or, MarkupKind: () => Co, OptionalVersionedTextDocumentIdentifier: () => ls, ParameterInformation: () => Ru, Position: () => Xt, Range: () => ze, RenameFile: () => Ci, SelectedCompletionInfo: () => Zu, SelectionRange: () => Hu, SemanticTokenModifiers: () => Wu, SemanticTokenTypes: () => Uu, SemanticTokens: () => zu, SignatureInformation: () => Tu, SnippetTextEdit: () => lu, StringValue: () => Po, SymbolInformation: () => Mu, SymbolKind: () => xu, SymbolTag: () => qu, TextDocument: () => nl, TextDocumentEdit: () => us, TextDocumentIdentifier: () => fu, TextDocumentItem: () => gu, TextEdit: () => yn, URI: () => mo, VersionedTextDocumentIdentifier: () => hu, WorkspaceChange: () => du, WorkspaceEdit: () => vo, WorkspaceFolder: () => tl, WorkspaceSymbol: () => ju, integer: () => tu, uinteger: () => os });
var eu, mo, tu, os, Xt, ze, as, nu, yo, ru, iu, su, ou, _o, au, cu, uu, cs, Br, yn, Tr, ot, Vn, us, bi, Ci, wi, vo, vi, lu, bo, du, fu, hu, ls, pu, gu, Co, Or, mu, yu, _u, vu, bu, Cu, wu, Su, Du, ds, Pu, Ru, Tu, Ou, Eu, xu, qu, Mu, ju, Iu, Nu, fs, Fu, wo, Lu, Au, ku, $u, Hu, Uu, Wu, zu, Ku, Bu, Gu, Vu, So, Do, Xu, Po, Ju, Qu, Yu, Zu, el, tl, ZC, nl, rl, P, To = ip(() => {
  "use strict";
  (function(n) {
    function e(t) {
      return typeof t == "string";
    }
    n.is = e;
  })(eu || (eu = {}));
  (function(n) {
    function e(t) {
      return typeof t == "string";
    }
    n.is = e;
  })(mo || (mo = {}));
  (function(n) {
    n.MIN_VALUE = -2147483648, n.MAX_VALUE = 2147483647;
    function e(t) {
      return typeof t == "number" && n.MIN_VALUE <= t && t <= n.MAX_VALUE;
    }
    n.is = e;
  })(tu || (tu = {}));
  (function(n) {
    n.MIN_VALUE = 0, n.MAX_VALUE = 2147483647;
    function e(t) {
      return typeof t == "number" && n.MIN_VALUE <= t && t <= n.MAX_VALUE;
    }
    n.is = e;
  })(os || (os = {}));
  (function(n) {
    function e(r, i) {
      return r === Number.MAX_VALUE && (r = os.MAX_VALUE), i === Number.MAX_VALUE && (i = os.MAX_VALUE), { line: r, character: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.objectLiteral(i) && P.uinteger(i.line) && P.uinteger(i.character);
    }
    n.is = t;
  })(Xt || (Xt = {}));
  (function(n) {
    function e(r, i, s, o) {
      if (P.uinteger(r) && P.uinteger(i) && P.uinteger(s) && P.uinteger(o)) return { start: Xt.create(r, i), end: Xt.create(s, o) };
      if (Xt.is(r) && Xt.is(i)) return { start: r, end: i };
      throw new Error(`Range#create called with invalid arguments[${r}, ${i}, ${s}, ${o}]`);
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.objectLiteral(i) && Xt.is(i.start) && Xt.is(i.end);
    }
    n.is = t;
  })(ze || (ze = {}));
  (function(n) {
    function e(r, i) {
      return { uri: r, range: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.objectLiteral(i) && ze.is(i.range) && (P.string(i.uri) || P.undefined(i.uri));
    }
    n.is = t;
  })(as || (as = {}));
  (function(n) {
    function e(r, i, s, o) {
      return { targetUri: r, targetRange: i, targetSelectionRange: s, originSelectionRange: o };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.objectLiteral(i) && ze.is(i.targetRange) && P.string(i.targetUri) && ze.is(i.targetSelectionRange) && (ze.is(i.originSelectionRange) || P.undefined(i.originSelectionRange));
    }
    n.is = t;
  })(nu || (nu = {}));
  (function(n) {
    function e(r, i, s, o) {
      return { red: r, green: i, blue: s, alpha: o };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.objectLiteral(i) && P.numberRange(i.red, 0, 1) && P.numberRange(i.green, 0, 1) && P.numberRange(i.blue, 0, 1) && P.numberRange(i.alpha, 0, 1);
    }
    n.is = t;
  })(yo || (yo = {}));
  (function(n) {
    function e(r, i) {
      return { range: r, color: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.objectLiteral(i) && ze.is(i.range) && yo.is(i.color);
    }
    n.is = t;
  })(ru || (ru = {}));
  (function(n) {
    function e(r, i, s) {
      return { label: r, textEdit: i, additionalTextEdits: s };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.objectLiteral(i) && P.string(i.label) && (P.undefined(i.textEdit) || yn.is(i)) && (P.undefined(i.additionalTextEdits) || P.typedArray(i.additionalTextEdits, yn.is));
    }
    n.is = t;
  })(iu || (iu = {}));
  (function(n) {
    n.Comment = "comment", n.Imports = "imports", n.Region = "region";
  })(su || (su = {}));
  (function(n) {
    function e(r, i, s, o, a, c) {
      let l = { startLine: r, endLine: i };
      return P.defined(s) && (l.startCharacter = s), P.defined(o) && (l.endCharacter = o), P.defined(a) && (l.kind = a), P.defined(c) && (l.collapsedText = c), l;
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.objectLiteral(i) && P.uinteger(i.startLine) && P.uinteger(i.startLine) && (P.undefined(i.startCharacter) || P.uinteger(i.startCharacter)) && (P.undefined(i.endCharacter) || P.uinteger(i.endCharacter)) && (P.undefined(i.kind) || P.string(i.kind));
    }
    n.is = t;
  })(ou || (ou = {}));
  (function(n) {
    function e(r, i) {
      return { location: r, message: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.defined(i) && as.is(i.location) && P.string(i.message);
    }
    n.is = t;
  })(_o || (_o = {}));
  (function(n) {
    n.Error = 1, n.Warning = 2, n.Information = 3, n.Hint = 4;
  })(au || (au = {}));
  (function(n) {
    n.Unnecessary = 1, n.Deprecated = 2;
  })(cu || (cu = {}));
  (function(n) {
    function e(t) {
      let r = t;
      return P.objectLiteral(r) && P.string(r.href);
    }
    n.is = e;
  })(uu || (uu = {}));
  (function(n) {
    function e(s, o, a, c, l, d) {
      let p = { range: s, message: o };
      return P.defined(a) && (p.severity = a), P.defined(c) && (p.code = c), P.defined(l) && (p.source = l), P.defined(d) && (p.relatedInformation = d), p;
    }
    n.create = e;
    function t(s) {
      var o;
      let a = s;
      return P.defined(a) && ze.is(a.range) && (P.string(a.message) || Or.is(a.message)) && (P.number(a.severity) || P.undefined(a.severity)) && (P.integer(a.code) || P.string(a.code) || P.undefined(a.code)) && (P.undefined(a.codeDescription) || P.string((o = a.codeDescription) === null || o === void 0 ? void 0 : o.href)) && (P.string(a.source) || P.undefined(a.source)) && (P.undefined(a.relatedInformation) || P.typedArray(a.relatedInformation, _o.is));
    }
    n.is = t;
    function r(s) {
      return P.string(s.message);
    }
    n.is3_17 = r;
    function i(s) {
      if (P.string(s.message)) return s.message;
      if (Or.is(s.message)) return s.message.value;
      throw new Error(`Unknown message type ${typeof s.message}`);
    }
    n.getMessageString = i;
  })(cs || (cs = {}));
  (function(n) {
    function e(r, i, ...s) {
      let o = { title: r, command: i };
      return P.defined(s) && s.length > 0 && (o.arguments = s), o;
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.defined(i) && P.string(i.title) && (i.tooltip === void 0 || P.string(i.tooltip)) && P.string(i.command);
    }
    n.is = t;
  })(Br || (Br = {}));
  (function(n) {
    function e(s, o) {
      return { range: s, newText: o };
    }
    n.replace = e;
    function t(s, o) {
      return { range: { start: s, end: s }, newText: o };
    }
    n.insert = t;
    function r(s) {
      return { range: s, newText: "" };
    }
    n.del = r;
    function i(s) {
      let o = s;
      return P.objectLiteral(o) && P.string(o.newText) && ze.is(o.range);
    }
    n.is = i;
  })(yn || (yn = {}));
  (function(n) {
    function e(r, i, s) {
      let o = { label: r };
      return i !== void 0 && (o.needsConfirmation = i), s !== void 0 && (o.description = s), o;
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.objectLiteral(i) && P.string(i.label) && (P.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) && (P.string(i.description) || i.description === void 0);
    }
    n.is = t;
  })(Tr || (Tr = {}));
  (function(n) {
    function e(t) {
      let r = t;
      return P.string(r);
    }
    n.is = e;
  })(ot || (ot = {}));
  (function(n) {
    function e(s, o, a) {
      return { range: s, newText: o, annotationId: a };
    }
    n.replace = e;
    function t(s, o, a) {
      return { range: { start: s, end: s }, newText: o, annotationId: a };
    }
    n.insert = t;
    function r(s, o) {
      return { range: s, newText: "", annotationId: o };
    }
    n.del = r;
    function i(s) {
      let o = s;
      return yn.is(o) && (Tr.is(o.annotationId) || ot.is(o.annotationId));
    }
    n.is = i;
  })(Vn || (Vn = {}));
  (function(n) {
    function e(r, i) {
      return { textDocument: r, edits: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.defined(i) && ls.is(i.textDocument) && Array.isArray(i.edits);
    }
    n.is = t;
  })(us || (us = {}));
  (function(n) {
    function e(r, i, s) {
      let o = { kind: "create", uri: r };
      return i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (o.options = i), s !== void 0 && (o.annotationId = s), o;
    }
    n.create = e;
    function t(r) {
      let i = r;
      return i && i.kind === "create" && P.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || P.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || P.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || ot.is(i.annotationId));
    }
    n.is = t;
  })(bi || (bi = {}));
  (function(n) {
    function e(r, i, s, o) {
      let a = { kind: "rename", oldUri: r, newUri: i };
      return s !== void 0 && (s.overwrite !== void 0 || s.ignoreIfExists !== void 0) && (a.options = s), o !== void 0 && (a.annotationId = o), a;
    }
    n.create = e;
    function t(r) {
      let i = r;
      return i && i.kind === "rename" && P.string(i.oldUri) && P.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || P.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || P.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || ot.is(i.annotationId));
    }
    n.is = t;
  })(Ci || (Ci = {}));
  (function(n) {
    function e(r, i, s) {
      let o = { kind: "delete", uri: r };
      return i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (o.options = i), s !== void 0 && (o.annotationId = s), o;
    }
    n.create = e;
    function t(r) {
      let i = r;
      return i && i.kind === "delete" && P.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || P.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || P.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || ot.is(i.annotationId));
    }
    n.is = t;
  })(wi || (wi = {}));
  (function(n) {
    function e(t) {
      let r = t;
      return r && (r.changes !== void 0 || r.documentChanges !== void 0) && (r.documentChanges === void 0 || r.documentChanges.every((i) => P.string(i.kind) ? bi.is(i) || Ci.is(i) || wi.is(i) : us.is(i)));
    }
    n.is = e;
  })(vo || (vo = {}));
  vi = class {
    constructor(e, t) {
      this.edits = e, this.changeAnnotations = t;
    }
    insert(e, t, r) {
      let i, s;
      if (r === void 0 ? i = yn.insert(e, t) : ot.is(r) ? (s = r, i = Vn.insert(e, t, r)) : (this.assertChangeAnnotations(this.changeAnnotations), s = this.changeAnnotations.manage(r), i = Vn.insert(e, t, s)), this.edits.push(i), s !== void 0) return s;
    }
    replace(e, t, r) {
      let i, s;
      if (r === void 0 ? i = yn.replace(e, t) : ot.is(r) ? (s = r, i = Vn.replace(e, t, r)) : (this.assertChangeAnnotations(this.changeAnnotations), s = this.changeAnnotations.manage(r), i = Vn.replace(e, t, s)), this.edits.push(i), s !== void 0) return s;
    }
    delete(e, t) {
      let r, i;
      if (t === void 0 ? r = yn.del(e) : ot.is(t) ? (i = t, r = Vn.del(e, t)) : (this.assertChangeAnnotations(this.changeAnnotations), i = this.changeAnnotations.manage(t), r = Vn.del(e, i)), this.edits.push(r), i !== void 0) return i;
    }
    add(e) {
      this.edits.push(e);
    }
    all() {
      return this.edits;
    }
    clear() {
      this.edits.splice(0, this.edits.length);
    }
    assertChangeAnnotations(e) {
      if (e === void 0) throw new Error("Text edit change is not configured to manage change annotations.");
    }
  };
  (function(n) {
    function e(t) {
      let r = t;
      return P.objectLiteral(r) && ze.is(r.range) && Po.isSnippet(r.snippet) && (r.annotationId === void 0 || Tr.is(r.annotationId) || ot.is(r.annotationId));
    }
    n.is = e;
  })(lu || (lu = {}));
  bo = class {
    constructor(e) {
      this._annotations = e === void 0 ? /* @__PURE__ */ Object.create(null) : e, this._counter = 0, this._size = 0;
    }
    all() {
      return this._annotations;
    }
    get size() {
      return this._size;
    }
    manage(e, t) {
      let r;
      if (ot.is(e) ? r = e : (r = this.nextId(), t = e), this._annotations[r] !== void 0) throw new Error(`Id ${r} is already in use.`);
      if (t === void 0) throw new Error(`No annotation provided for id ${r}`);
      return this._annotations[r] = t, this._size++, r;
    }
    nextId() {
      return this._counter++, this._counter.toString();
    }
  }, du = class {
    constructor(e) {
      this._textEditChanges = /* @__PURE__ */ Object.create(null), e !== void 0 ? (this._workspaceEdit = e, e.documentChanges ? (this._changeAnnotations = new bo(e.changeAnnotations), e.changeAnnotations = this._changeAnnotations.all(), e.documentChanges.forEach((t) => {
        if (us.is(t)) {
          let r = new vi(t.edits, this._changeAnnotations);
          this._textEditChanges[t.textDocument.uri] = r;
        }
      })) : e.changes && Object.keys(e.changes).forEach((t) => {
        let r = new vi(e.changes[t]);
        this._textEditChanges[t] = r;
      })) : this._workspaceEdit = {};
    }
    get edit() {
      return this.initDocumentChanges(), this._changeAnnotations !== void 0 && (this._changeAnnotations.size === 0 ? this._workspaceEdit.changeAnnotations = void 0 : this._workspaceEdit.changeAnnotations = this._changeAnnotations.all()), this._workspaceEdit;
    }
    getTextEditChange(e) {
      if (ls.is(e)) {
        if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
        let t = { uri: e.uri, version: e.version }, r = this._textEditChanges[t.uri];
        if (!r) {
          let i = [], s = { textDocument: t, edits: i };
          this._workspaceEdit.documentChanges.push(s), r = new vi(i, this._changeAnnotations), this._textEditChanges[t.uri] = r;
        }
        return r;
      } else {
        if (this.initChanges(), this._workspaceEdit.changes === void 0) throw new Error("Workspace edit is not configured for normal text edit changes.");
        let t = this._textEditChanges[e];
        if (!t) {
          let r = [];
          this._workspaceEdit.changes[e] = r, t = new vi(r), this._textEditChanges[e] = t;
        }
        return t;
      }
    }
    initDocumentChanges() {
      this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._changeAnnotations = new bo(), this._workspaceEdit.documentChanges = [], this._workspaceEdit.changeAnnotations = this._changeAnnotations.all());
    }
    initChanges() {
      this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null));
    }
    createFile(e, t, r) {
      if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
      let i;
      Tr.is(t) || ot.is(t) ? i = t : r = t;
      let s, o;
      if (i === void 0 ? s = bi.create(e, r) : (o = ot.is(i) ? i : this._changeAnnotations.manage(i), s = bi.create(e, r, o)), this._workspaceEdit.documentChanges.push(s), o !== void 0) return o;
    }
    renameFile(e, t, r, i) {
      if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
      let s;
      Tr.is(r) || ot.is(r) ? s = r : i = r;
      let o, a;
      if (s === void 0 ? o = Ci.create(e, t, i) : (a = ot.is(s) ? s : this._changeAnnotations.manage(s), o = Ci.create(e, t, i, a)), this._workspaceEdit.documentChanges.push(o), a !== void 0) return a;
    }
    deleteFile(e, t, r) {
      if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
      let i;
      Tr.is(t) || ot.is(t) ? i = t : r = t;
      let s, o;
      if (i === void 0 ? s = wi.create(e, r) : (o = ot.is(i) ? i : this._changeAnnotations.manage(i), s = wi.create(e, r, o)), this._workspaceEdit.documentChanges.push(s), o !== void 0) return o;
    }
  };
  (function(n) {
    function e(r) {
      return { uri: r };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.defined(i) && P.string(i.uri);
    }
    n.is = t;
  })(fu || (fu = {}));
  (function(n) {
    function e(r, i) {
      return { uri: r, version: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.defined(i) && P.string(i.uri) && P.integer(i.version);
    }
    n.is = t;
  })(hu || (hu = {}));
  (function(n) {
    function e(r, i) {
      return { uri: r, version: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.defined(i) && P.string(i.uri) && (i.version === null || P.integer(i.version));
    }
    n.is = t;
  })(ls || (ls = {}));
  (function(n) {
    n.ABAP = "abap", n.WindowsBat = "bat", n.BibTeX = "bibtex", n.Clojure = "clojure", n.Coffeescript = "coffeescript", n.C = "c", n.CPP = "cpp", n.CSharp = "csharp", n.CSS = "css", n.D = "d", n.Delphi = "pascal", n.Diff = "diff", n.Dart = "dart", n.Dockerfile = "dockerfile", n.Elixir = "elixir", n.Erlang = "erlang", n.FSharp = "fsharp", n.GitCommit = "git-commit", n.GitRebase = "git-rebase", n.Go = "go", n.Groovy = "groovy", n.Handlebars = "handlebars", n.Haskell = "haskell", n.HTML = "html", n.Ini = "ini", n.Java = "java", n.JavaScript = "javascript", n.JavaScriptReact = "javascriptreact", n.JSON = "json", n.LaTeX = "latex", n.Less = "less", n.Lua = "lua", n.Makefile = "makefile", n.Markdown = "markdown", n.ObjectiveC = "objective-c", n.ObjectiveCPP = "objective-cpp", n.Pascal = "pascal", n.Perl = "perl", n.Perl6 = "perl6", n.PHP = "php", n.Plaintext = "plaintext", n.Powershell = "powershell", n.Pug = "jade", n.Python = "python", n.R = "r", n.Razor = "razor", n.Ruby = "ruby", n.Rust = "rust", n.SCSS = "scss", n.SASS = "sass", n.Scala = "scala", n.ShaderLab = "shaderlab", n.ShellScript = "shellscript", n.SQL = "sql", n.Swift = "swift", n.TypeScript = "typescript", n.TypeScriptReact = "typescriptreact", n.TeX = "tex", n.VisualBasic = "vb", n.XML = "xml", n.XSL = "xsl", n.YAML = "yaml";
  })(pu || (pu = {}));
  (function(n) {
    function e(r, i, s, o) {
      return { uri: r, languageId: i, version: s, text: o };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.defined(i) && P.string(i.uri) && P.string(i.languageId) && P.integer(i.version) && P.string(i.text);
    }
    n.is = t;
  })(gu || (gu = {}));
  (function(n) {
    n.PlainText = "plaintext", n.Markdown = "markdown";
    function e(t) {
      let r = t;
      return r === n.PlainText || r === n.Markdown;
    }
    n.is = e;
  })(Co || (Co = {}));
  (function(n) {
    function e(t) {
      let r = t;
      return P.objectLiteral(t) && Co.is(r.kind) && P.string(r.value);
    }
    n.is = e;
  })(Or || (Or = {}));
  (function(n) {
    n.Text = 1, n.Method = 2, n.Function = 3, n.Constructor = 4, n.Field = 5, n.Variable = 6, n.Class = 7, n.Interface = 8, n.Module = 9, n.Property = 10, n.Unit = 11, n.Value = 12, n.Enum = 13, n.Keyword = 14, n.Snippet = 15, n.Color = 16, n.File = 17, n.Reference = 18, n.Folder = 19, n.EnumMember = 20, n.Constant = 21, n.Struct = 22, n.Event = 23, n.Operator = 24, n.TypeParameter = 25;
  })(mu || (mu = {}));
  (function(n) {
    n.PlainText = 1, n.Snippet = 2;
  })(yu || (yu = {}));
  (function(n) {
    n.Deprecated = 1;
  })(_u || (_u = {}));
  (function(n) {
    function e(r, i, s) {
      return { newText: r, insert: i, replace: s };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return i && P.string(i.newText) && ze.is(i.insert) && ze.is(i.replace);
    }
    n.is = t;
  })(vu || (vu = {}));
  (function(n) {
    n.asIs = 1, n.adjustIndentation = 2;
  })(bu || (bu = {}));
  (function(n) {
    n.Replace = 1, n.Merge = 2;
  })(Cu || (Cu = {}));
  (function(n) {
    function e(t) {
      let r = t;
      return r && (P.string(r.detail) || r.detail === void 0) && (P.string(r.description) || r.description === void 0);
    }
    n.is = e;
  })(wu || (wu = {}));
  (function(n) {
    function e(t) {
      return { label: t };
    }
    n.create = e;
  })(Su || (Su = {}));
  (function(n) {
    function e(t, r) {
      return { items: t || [], isIncomplete: !!r };
    }
    n.create = e;
  })(Du || (Du = {}));
  (function(n) {
    function e(r) {
      return r.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }
    n.fromPlainText = e;
    function t(r) {
      let i = r;
      return P.string(i) || P.objectLiteral(i) && P.string(i.language) && P.string(i.value);
    }
    n.is = t;
  })(ds || (ds = {}));
  (function(n) {
    function e(t) {
      let r = t;
      return !!r && P.objectLiteral(r) && (Or.is(r.contents) || ds.is(r.contents) || P.typedArray(r.contents, ds.is)) && (t.range === void 0 || ze.is(t.range));
    }
    n.is = e;
  })(Pu || (Pu = {}));
  (function(n) {
    function e(t, r) {
      return r ? { label: t, documentation: r } : { label: t };
    }
    n.create = e;
  })(Ru || (Ru = {}));
  (function(n) {
    function e(t, r, ...i) {
      let s = { label: t };
      return P.defined(r) && (s.documentation = r), P.defined(i) ? s.parameters = i : s.parameters = [], s;
    }
    n.create = e;
  })(Tu || (Tu = {}));
  (function(n) {
    n.Text = 1, n.Read = 2, n.Write = 3;
  })(Ou || (Ou = {}));
  (function(n) {
    function e(t, r) {
      let i = { range: t };
      return P.number(r) && (i.kind = r), i;
    }
    n.create = e;
  })(Eu || (Eu = {}));
  (function(n) {
    n.File = 1, n.Module = 2, n.Namespace = 3, n.Package = 4, n.Class = 5, n.Method = 6, n.Property = 7, n.Field = 8, n.Constructor = 9, n.Enum = 10, n.Interface = 11, n.Function = 12, n.Variable = 13, n.Constant = 14, n.String = 15, n.Number = 16, n.Boolean = 17, n.Array = 18, n.Object = 19, n.Key = 20, n.Null = 21, n.EnumMember = 22, n.Struct = 23, n.Event = 24, n.Operator = 25, n.TypeParameter = 26;
  })(xu || (xu = {}));
  (function(n) {
    n.Deprecated = 1;
  })(qu || (qu = {}));
  (function(n) {
    function e(t, r, i, s, o) {
      let a = { name: t, kind: r, location: { uri: s, range: i } };
      return o && (a.containerName = o), a;
    }
    n.create = e;
  })(Mu || (Mu = {}));
  (function(n) {
    function e(t, r, i, s) {
      return s !== void 0 ? { name: t, kind: r, location: { uri: i, range: s } } : { name: t, kind: r, location: { uri: i } };
    }
    n.create = e;
  })(ju || (ju = {}));
  (function(n) {
    function e(r, i, s, o, a, c) {
      let l = { name: r, detail: i, kind: s, range: o, selectionRange: a };
      return c !== void 0 && (l.children = c), l;
    }
    n.create = e;
    function t(r) {
      let i = r;
      return i && P.string(i.name) && P.number(i.kind) && ze.is(i.range) && ze.is(i.selectionRange) && (i.detail === void 0 || P.string(i.detail)) && (i.deprecated === void 0 || P.boolean(i.deprecated)) && (i.children === void 0 || Array.isArray(i.children)) && (i.tags === void 0 || Array.isArray(i.tags));
    }
    n.is = t;
  })(Iu || (Iu = {}));
  (function(n) {
    n.Empty = "", n.QuickFix = "quickfix", n.Refactor = "refactor", n.RefactorExtract = "refactor.extract", n.RefactorInline = "refactor.inline", n.RefactorMove = "refactor.move", n.RefactorRewrite = "refactor.rewrite", n.Source = "source", n.SourceOrganizeImports = "source.organizeImports", n.SourceFixAll = "source.fixAll", n.Notebook = "notebook";
  })(Nu || (Nu = {}));
  (function(n) {
    n.Invoked = 1, n.Automatic = 2;
  })(fs || (fs = {}));
  (function(n) {
    function e(r, i, s) {
      let o = { diagnostics: r };
      return i != null && (o.only = i), s != null && (o.triggerKind = s), o;
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.defined(i) && P.typedArray(i.diagnostics, cs.is) && (i.only === void 0 || P.typedArray(i.only, P.string)) && (i.triggerKind === void 0 || i.triggerKind === fs.Invoked || i.triggerKind === fs.Automatic);
    }
    n.is = t;
  })(Fu || (Fu = {}));
  (function(n) {
    n.LLMGenerated = 1;
    function e(t) {
      return P.defined(t) && t === n.LLMGenerated;
    }
    n.is = e;
  })(wo || (wo = {}));
  (function(n) {
    function e(r, i, s) {
      let o = { title: r }, a = true;
      return typeof i == "string" ? (a = false, o.kind = i) : Br.is(i) ? o.command = i : o.edit = i, a && s !== void 0 && (o.kind = s), o;
    }
    n.create = e;
    function t(r) {
      let i = r;
      return i && P.string(i.title) && (i.diagnostics === void 0 || P.typedArray(i.diagnostics, cs.is)) && (i.kind === void 0 || P.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || Br.is(i.command)) && (i.isPreferred === void 0 || P.boolean(i.isPreferred)) && (i.edit === void 0 || vo.is(i.edit)) && (i.tags === void 0 || P.typedArray(i.tags, wo.is));
    }
    n.is = t;
  })(Lu || (Lu = {}));
  (function(n) {
    function e(r, i) {
      let s = { range: r };
      return P.defined(i) && (s.data = i), s;
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.defined(i) && ze.is(i.range) && (P.undefined(i.command) || Br.is(i.command));
    }
    n.is = t;
  })(Au || (Au = {}));
  (function(n) {
    function e(r, i) {
      return { tabSize: r, insertSpaces: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.defined(i) && P.uinteger(i.tabSize) && P.boolean(i.insertSpaces);
    }
    n.is = t;
  })(ku || (ku = {}));
  (function(n) {
    function e(r, i, s) {
      return { range: r, target: i, data: s };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.defined(i) && ze.is(i.range) && (P.undefined(i.target) || P.string(i.target));
    }
    n.is = t;
  })($u || ($u = {}));
  (function(n) {
    function e(r, i) {
      return { range: r, parent: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.objectLiteral(i) && ze.is(i.range) && (i.parent === void 0 || n.is(i.parent));
    }
    n.is = t;
  })(Hu || (Hu = {}));
  (function(n) {
    n.namespace = "namespace", n.type = "type", n.class = "class", n.enum = "enum", n.interface = "interface", n.struct = "struct", n.typeParameter = "typeParameter", n.parameter = "parameter", n.variable = "variable", n.property = "property", n.enumMember = "enumMember", n.event = "event", n.function = "function", n.method = "method", n.macro = "macro", n.keyword = "keyword", n.modifier = "modifier", n.comment = "comment", n.string = "string", n.number = "number", n.regexp = "regexp", n.operator = "operator", n.decorator = "decorator", n.label = "label";
  })(Uu || (Uu = {}));
  (function(n) {
    n.declaration = "declaration", n.definition = "definition", n.readonly = "readonly", n.static = "static", n.deprecated = "deprecated", n.abstract = "abstract", n.async = "async", n.modification = "modification", n.documentation = "documentation", n.defaultLibrary = "defaultLibrary";
  })(Wu || (Wu = {}));
  (function(n) {
    function e(t) {
      let r = t;
      return P.objectLiteral(r) && (r.resultId === void 0 || typeof r.resultId == "string") && Array.isArray(r.data) && (r.data.length === 0 || typeof r.data[0] == "number");
    }
    n.is = e;
  })(zu || (zu = {}));
  (function(n) {
    function e(r, i) {
      return { range: r, text: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return i != null && ze.is(i.range) && P.string(i.text);
    }
    n.is = t;
  })(Ku || (Ku = {}));
  (function(n) {
    function e(r, i, s) {
      return { range: r, variableName: i, caseSensitiveLookup: s };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return i != null && ze.is(i.range) && P.boolean(i.caseSensitiveLookup) && (P.string(i.variableName) || i.variableName === void 0);
    }
    n.is = t;
  })(Bu || (Bu = {}));
  (function(n) {
    function e(r, i) {
      return { range: r, expression: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return i != null && ze.is(i.range) && (P.string(i.expression) || i.expression === void 0);
    }
    n.is = t;
  })(Gu || (Gu = {}));
  (function(n) {
    function e(r, i) {
      return { frameId: r, stoppedLocation: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.defined(i) && ze.is(r.stoppedLocation);
    }
    n.is = t;
  })(Vu || (Vu = {}));
  (function(n) {
    n.Type = 1, n.Parameter = 2;
    function e(t) {
      return t === 1 || t === 2;
    }
    n.is = e;
  })(So || (So = {}));
  (function(n) {
    function e(r) {
      return { value: r };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.objectLiteral(i) && (i.tooltip === void 0 || P.string(i.tooltip) || Or.is(i.tooltip)) && (i.location === void 0 || as.is(i.location)) && (i.command === void 0 || Br.is(i.command));
    }
    n.is = t;
  })(Do || (Do = {}));
  (function(n) {
    function e(r, i, s) {
      let o = { position: r, label: i };
      return s !== void 0 && (o.kind = s), o;
    }
    n.create = e;
    function t(r) {
      let i = r;
      return P.objectLiteral(i) && Xt.is(i.position) && (P.string(i.label) || P.typedArray(i.label, Do.is)) && (i.kind === void 0 || So.is(i.kind)) && i.textEdits === void 0 || P.typedArray(i.textEdits, yn.is) && (i.tooltip === void 0 || P.string(i.tooltip) || Or.is(i.tooltip)) && (i.paddingLeft === void 0 || P.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || P.boolean(i.paddingRight));
    }
    n.is = t;
  })(Xu || (Xu = {}));
  (function(n) {
    function e(r) {
      return { kind: "snippet", value: r };
    }
    n.createSnippet = e;
    function t(r) {
      let i = r;
      return P.objectLiteral(i) && i.kind === "snippet" && P.string(i.value);
    }
    n.isSnippet = t;
  })(Po || (Po = {}));
  (function(n) {
    function e(t, r, i, s) {
      return { insertText: t, filterText: r, range: i, command: s };
    }
    n.create = e;
  })(Ju || (Ju = {}));
  (function(n) {
    function e(t) {
      return { items: t };
    }
    n.create = e;
  })(Qu || (Qu = {}));
  (function(n) {
    n.Invoked = 1, n.Automatic = 2;
  })(Yu || (Yu = {}));
  (function(n) {
    function e(t, r) {
      return { range: t, text: r };
    }
    n.create = e;
  })(Zu || (Zu = {}));
  (function(n) {
    function e(t, r) {
      return { triggerKind: t, selectedCompletionInfo: r };
    }
    n.create = e;
  })(el || (el = {}));
  (function(n) {
    function e(t) {
      let r = t;
      return P.objectLiteral(r) && mo.is(r.uri) && P.string(r.name);
    }
    n.is = e;
  })(tl || (tl = {}));
  ZC = [`
`, `\r
`, "\r"];
  (function(n) {
    function e(s, o, a, c) {
      return new rl(s, o, a, c);
    }
    n.create = e;
    function t(s) {
      let o = s;
      return !!(P.defined(o) && P.string(o.uri) && (P.undefined(o.languageId) || P.string(o.languageId)) && P.uinteger(o.lineCount) && P.func(o.getText) && P.func(o.positionAt) && P.func(o.offsetAt));
    }
    n.is = t;
    function r(s, o) {
      let a = s.getText(), c = i(o, (d, p) => {
        let h = d.range.start.line - p.range.start.line;
        return h === 0 ? d.range.start.character - p.range.start.character : h;
      }), l = a.length;
      for (let d = c.length - 1; d >= 0; d--) {
        let p = c[d], h = s.offsetAt(p.range.start), m = s.offsetAt(p.range.end);
        if (m <= l) a = a.substring(0, h) + p.newText + a.substring(m, a.length);
        else throw new Error("Overlapping edit");
        l = h;
      }
      return a;
    }
    n.applyEdits = r;
    function i(s, o) {
      if (s.length <= 1) return s;
      let a = s.length / 2 | 0, c = s.slice(0, a), l = s.slice(a);
      i(c, o), i(l, o);
      let d = 0, p = 0, h = 0;
      for (; d < c.length && p < l.length; ) o(c[d], l[p]) <= 0 ? s[h++] = c[d++] : s[h++] = l[p++];
      for (; d < c.length; ) s[h++] = c[d++];
      for (; p < l.length; ) s[h++] = l[p++];
      return s;
    }
  })(nl || (nl = {}));
  rl = class {
    constructor(e, t, r, i) {
      this._uri = e, this._languageId = t, this._version = r, this._content = i, this._lineOffsets = void 0;
    }
    get uri() {
      return this._uri;
    }
    get languageId() {
      return this._languageId;
    }
    get version() {
      return this._version;
    }
    getText(e) {
      if (e) {
        let t = this.offsetAt(e.start), r = this.offsetAt(e.end);
        return this._content.substring(t, r);
      }
      return this._content;
    }
    update(e, t) {
      this._content = e.text, this._version = t, this._lineOffsets = void 0;
    }
    getLineOffsets() {
      if (this._lineOffsets === void 0) {
        let e = [], t = this._content, r = true;
        for (let i = 0; i < t.length; i++) {
          r && (e.push(i), r = false);
          let s = t.charAt(i);
          r = s === "\r" || s === `
`, s === "\r" && i + 1 < t.length && t.charAt(i + 1) === `
` && i++;
        }
        r && t.length > 0 && e.push(t.length), this._lineOffsets = e;
      }
      return this._lineOffsets;
    }
    positionAt(e) {
      e = Math.max(Math.min(e, this._content.length), 0);
      let t = this.getLineOffsets(), r = 0, i = t.length;
      if (i === 0) return Xt.create(0, e);
      for (; r < i; ) {
        let o = Math.floor((r + i) / 2);
        t[o] > e ? i = o : r = o + 1;
      }
      let s = r - 1;
      return Xt.create(s, e - t[s]);
    }
    offsetAt(e) {
      let t = this.getLineOffsets();
      if (e.line >= t.length) return this._content.length;
      if (e.line < 0) return 0;
      let r = t[e.line], i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
      return Math.max(Math.min(r + e.character, i), r);
    }
    get lineCount() {
      return this.getLineOffsets().length;
    }
  };
  (function(n) {
    let e = Object.prototype.toString;
    function t(m) {
      return typeof m < "u";
    }
    n.defined = t;
    function r(m) {
      return typeof m > "u";
    }
    n.undefined = r;
    function i(m) {
      return m === true || m === false;
    }
    n.boolean = i;
    function s(m) {
      return e.call(m) === "[object String]";
    }
    n.string = s;
    function o(m) {
      return e.call(m) === "[object Number]";
    }
    n.number = o;
    function a(m, g, y) {
      return e.call(m) === "[object Number]" && g <= m && m <= y;
    }
    n.numberRange = a;
    function c(m) {
      return e.call(m) === "[object Number]" && -2147483648 <= m && m <= 2147483647;
    }
    n.integer = c;
    function l(m) {
      return e.call(m) === "[object Number]" && 0 <= m && m <= 2147483647;
    }
    n.uinteger = l;
    function d(m) {
      return e.call(m) === "[object Function]";
    }
    n.func = d;
    function p(m) {
      return m !== null && typeof m == "object";
    }
    n.objectLiteral = p;
    function h(m, g) {
      return Array.isArray(m) && m.every(g);
    }
    n.typedArray = h;
  })(P || (P = {}));
});
var Ne = j((St) => {
  "use strict";
  Object.defineProperty(St, "__esModule", { value: true });
  St.CM = St.ProtocolNotificationType = St.ProtocolNotificationType0 = St.ProtocolRequestType = St.ProtocolRequestType0 = St.RegistrationType = St.MessageDirection = void 0;
  var Si = Gn(), Op;
  (function(n) {
    n.clientToServer = "clientToServer", n.serverToClient = "serverToClient", n.both = "both";
  })(Op || (St.MessageDirection = Op = {}));
  var il = class {
    ____;
    method;
    constructor(e) {
      this.method = e;
    }
  };
  St.RegistrationType = il;
  var sl = class extends Si.RequestType0 {
    __;
    ___;
    ____;
    _pr;
    constructor(e) {
      super(e);
    }
  };
  St.ProtocolRequestType0 = sl;
  var ol = class extends Si.RequestType {
    __;
    ___;
    ____;
    _pr;
    constructor(e) {
      super(e, Si.ParameterStructures.byName);
    }
  };
  St.ProtocolRequestType = ol;
  var al = class extends Si.NotificationType0 {
    ___;
    ____;
    constructor(e) {
      super(e);
    }
  };
  St.ProtocolNotificationType0 = al;
  var cl = class extends Si.NotificationType {
    ___;
    ____;
    constructor(e) {
      super(e, Si.ParameterStructures.byName);
    }
  };
  St.ProtocolNotificationType = cl;
  var Ep;
  (function(n) {
    function e(t, r) {
      return { client: t, server: r };
    }
    n.create = e;
  })(Ep || (St.CM = Ep = {}));
});
var Oo = j((rn) => {
  "use strict";
  Object.defineProperty(rn, "__esModule", { value: true });
  rn.boolean = ew;
  rn.string = xp;
  rn.number = tw;
  rn.error = nw;
  rn.func = rw;
  rn.array = qp;
  rn.stringArray = iw;
  rn.typedArray = sw;
  rn.objectLiteral = ow;
  function ew(n) {
    return n === true || n === false;
  }
  function xp(n) {
    return typeof n == "string" || n instanceof String;
  }
  function tw(n) {
    return typeof n == "number" || n instanceof Number;
  }
  function nw(n) {
    return n instanceof Error;
  }
  function rw(n) {
    return typeof n == "function";
  }
  function qp(n) {
    return Array.isArray(n);
  }
  function iw(n) {
    return qp(n) && n.every((e) => xp(e));
  }
  function sw(n, e) {
    return Array.isArray(n) && n.every(e);
  }
  function ow(n) {
    return n !== null && typeof n == "object";
  }
});
var jp = j((Eo) => {
  "use strict";
  Object.defineProperty(Eo, "__esModule", { value: true });
  Eo.ImplementationRequest = void 0;
  var ul = Ne(), Mp;
  (function(n) {
    n.method = "textDocument/implementation", n.messageDirection = ul.MessageDirection.clientToServer, n.type = new ul.ProtocolRequestType(n.method), n.capabilities = ul.CM.create("textDocument.implementation", "implementationProvider");
  })(Mp || (Eo.ImplementationRequest = Mp = {}));
});
var Np = j((xo) => {
  "use strict";
  Object.defineProperty(xo, "__esModule", { value: true });
  xo.TypeDefinitionRequest = void 0;
  var ll = Ne(), Ip;
  (function(n) {
    n.method = "textDocument/typeDefinition", n.messageDirection = ll.MessageDirection.clientToServer, n.type = new ll.ProtocolRequestType(n.method), n.capabilities = ll.CM.create("textDocument.typeDefinition", "typeDefinitionProvider");
  })(Ip || (xo.TypeDefinitionRequest = Ip = {}));
});
var Ap = j((Pi) => {
  "use strict";
  Object.defineProperty(Pi, "__esModule", { value: true });
  Pi.DidChangeWorkspaceFoldersNotification = Pi.WorkspaceFoldersRequest = void 0;
  var Di = Ne(), Fp;
  (function(n) {
    n.method = "workspace/workspaceFolders", n.messageDirection = Di.MessageDirection.serverToClient, n.type = new Di.ProtocolRequestType0(n.method), n.capabilities = Di.CM.create("workspace.workspaceFolders", "workspace.workspaceFolders");
  })(Fp || (Pi.WorkspaceFoldersRequest = Fp = {}));
  var Lp;
  (function(n) {
    n.method = "workspace/didChangeWorkspaceFolders", n.messageDirection = Di.MessageDirection.clientToServer, n.type = new Di.ProtocolNotificationType(n.method), n.capabilities = Di.CM.create(void 0, "workspace.workspaceFolders.changeNotifications");
  })(Lp || (Pi.DidChangeWorkspaceFoldersNotification = Lp = {}));
});
var $p = j((qo) => {
  "use strict";
  Object.defineProperty(qo, "__esModule", { value: true });
  qo.ConfigurationRequest = void 0;
  var dl = Ne(), kp;
  (function(n) {
    n.method = "workspace/configuration", n.messageDirection = dl.MessageDirection.serverToClient, n.type = new dl.ProtocolRequestType(n.method), n.capabilities = dl.CM.create("workspace.configuration", void 0);
  })(kp || (qo.ConfigurationRequest = kp = {}));
});
var Wp = j((Ti) => {
  "use strict";
  Object.defineProperty(Ti, "__esModule", { value: true });
  Ti.ColorPresentationRequest = Ti.DocumentColorRequest = void 0;
  var Ri = Ne(), Hp;
  (function(n) {
    n.method = "textDocument/documentColor", n.messageDirection = Ri.MessageDirection.clientToServer, n.type = new Ri.ProtocolRequestType(n.method), n.capabilities = Ri.CM.create("textDocument.colorProvider", "colorProvider");
  })(Hp || (Ti.DocumentColorRequest = Hp = {}));
  var Up;
  (function(n) {
    n.method = "textDocument/colorPresentation", n.messageDirection = Ri.MessageDirection.clientToServer, n.type = new Ri.ProtocolRequestType(n.method), n.capabilities = Ri.CM.create("textDocument.colorProvider", "colorProvider");
  })(Up || (Ti.ColorPresentationRequest = Up = {}));
});
var Bp = j((Ei) => {
  "use strict";
  Object.defineProperty(Ei, "__esModule", { value: true });
  Ei.FoldingRangeRefreshRequest = Ei.FoldingRangeRequest = void 0;
  var Oi = Ne(), zp;
  (function(n) {
    n.method = "textDocument/foldingRange", n.messageDirection = Oi.MessageDirection.clientToServer, n.type = new Oi.ProtocolRequestType(n.method), n.capabilities = Oi.CM.create("textDocument.foldingRange", "foldingRangeProvider");
  })(zp || (Ei.FoldingRangeRequest = zp = {}));
  var Kp;
  (function(n) {
    n.method = "workspace/foldingRange/refresh", n.messageDirection = Oi.MessageDirection.serverToClient, n.type = new Oi.ProtocolRequestType0(n.method), n.capabilities = Oi.CM.create("workspace.foldingRange.refreshSupport", void 0);
  })(Kp || (Ei.FoldingRangeRefreshRequest = Kp = {}));
});
var Vp = j((Mo) => {
  "use strict";
  Object.defineProperty(Mo, "__esModule", { value: true });
  Mo.DeclarationRequest = void 0;
  var fl = Ne(), Gp;
  (function(n) {
    n.method = "textDocument/declaration", n.messageDirection = fl.MessageDirection.clientToServer, n.type = new fl.ProtocolRequestType(n.method), n.capabilities = fl.CM.create("textDocument.declaration", "declarationProvider");
  })(Gp || (Mo.DeclarationRequest = Gp = {}));
});
var Jp = j((jo) => {
  "use strict";
  Object.defineProperty(jo, "__esModule", { value: true });
  jo.SelectionRangeRequest = void 0;
  var hl = Ne(), Xp;
  (function(n) {
    n.method = "textDocument/selectionRange", n.messageDirection = hl.MessageDirection.clientToServer, n.type = new hl.ProtocolRequestType(n.method), n.capabilities = hl.CM.create("textDocument.selectionRange", "selectionRangeProvider");
  })(Xp || (jo.SelectionRangeRequest = Xp = {}));
});
var eg = j((Er) => {
  "use strict";
  Object.defineProperty(Er, "__esModule", { value: true });
  Er.WorkDoneProgressCancelNotification = Er.WorkDoneProgressCreateRequest = Er.WorkDoneProgress = void 0;
  var aw = Gn(), hs = Ne(), Qp;
  (function(n) {
    n.type = new aw.ProgressType();
    function e(t) {
      return t === n.type;
    }
    n.is = e;
  })(Qp || (Er.WorkDoneProgress = Qp = {}));
  var Yp;
  (function(n) {
    n.method = "window/workDoneProgress/create", n.messageDirection = hs.MessageDirection.serverToClient, n.type = new hs.ProtocolRequestType(n.method), n.capabilities = hs.CM.create("window.workDoneProgress", void 0);
  })(Yp || (Er.WorkDoneProgressCreateRequest = Yp = {}));
  var Zp;
  (function(n) {
    n.method = "window/workDoneProgress/cancel", n.messageDirection = hs.MessageDirection.clientToServer, n.type = new hs.ProtocolNotificationType(n.method);
  })(Zp || (Er.WorkDoneProgressCancelNotification = Zp = {}));
});
var ig = j((xr) => {
  "use strict";
  Object.defineProperty(xr, "__esModule", { value: true });
  xr.CallHierarchyOutgoingCallsRequest = xr.CallHierarchyIncomingCallsRequest = xr.CallHierarchyPrepareRequest = void 0;
  var Xn = Ne(), tg;
  (function(n) {
    n.method = "textDocument/prepareCallHierarchy", n.messageDirection = Xn.MessageDirection.clientToServer, n.type = new Xn.ProtocolRequestType(n.method), n.capabilities = Xn.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
  })(tg || (xr.CallHierarchyPrepareRequest = tg = {}));
  var ng;
  (function(n) {
    n.method = "callHierarchy/incomingCalls", n.messageDirection = Xn.MessageDirection.clientToServer, n.type = new Xn.ProtocolRequestType(n.method), n.capabilities = Xn.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
  })(ng || (xr.CallHierarchyIncomingCallsRequest = ng = {}));
  var rg;
  (function(n) {
    n.method = "callHierarchy/outgoingCalls", n.messageDirection = Xn.MessageDirection.clientToServer, n.type = new Xn.ProtocolRequestType(n.method), n.capabilities = Xn.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
  })(rg || (xr.CallHierarchyOutgoingCallsRequest = rg = {}));
});
var lg = j((It) => {
  "use strict";
  Object.defineProperty(It, "__esModule", { value: true });
  It.SemanticTokensRefreshRequest = It.SemanticTokensRangeRequest = It.SemanticTokensDeltaRequest = It.SemanticTokensRequest = It.SemanticTokensRegistrationType = It.TokenFormat = void 0;
  var Ht = Ne(), sg;
  (function(n) {
    n.Relative = "relative";
  })(sg || (It.TokenFormat = sg = {}));
  var ps;
  (function(n) {
    n.method = "textDocument/semanticTokens", n.type = new Ht.RegistrationType(n.method);
  })(ps || (It.SemanticTokensRegistrationType = ps = {}));
  var og;
  (function(n) {
    n.method = "textDocument/semanticTokens/full", n.messageDirection = Ht.MessageDirection.clientToServer, n.type = new Ht.ProtocolRequestType(n.method), n.registrationMethod = ps.method, n.capabilities = Ht.CM.create("textDocument.semanticTokens", "semanticTokensProvider");
  })(og || (It.SemanticTokensRequest = og = {}));
  var ag;
  (function(n) {
    n.method = "textDocument/semanticTokens/full/delta", n.messageDirection = Ht.MessageDirection.clientToServer, n.type = new Ht.ProtocolRequestType(n.method), n.registrationMethod = ps.method, n.capabilities = Ht.CM.create("textDocument.semanticTokens.requests.full.delta", "semanticTokensProvider.full.delta");
  })(ag || (It.SemanticTokensDeltaRequest = ag = {}));
  var cg;
  (function(n) {
    n.method = "textDocument/semanticTokens/range", n.messageDirection = Ht.MessageDirection.clientToServer, n.type = new Ht.ProtocolRequestType(n.method), n.registrationMethod = ps.method, n.capabilities = Ht.CM.create("textDocument.semanticTokens.requests.range", "semanticTokensProvider.range");
  })(cg || (It.SemanticTokensRangeRequest = cg = {}));
  var ug;
  (function(n) {
    n.method = "workspace/semanticTokens/refresh", n.messageDirection = Ht.MessageDirection.serverToClient, n.type = new Ht.ProtocolRequestType0(n.method), n.capabilities = Ht.CM.create("workspace.semanticTokens.refreshSupport", void 0);
  })(ug || (It.SemanticTokensRefreshRequest = ug = {}));
});
var fg = j((Io) => {
  "use strict";
  Object.defineProperty(Io, "__esModule", { value: true });
  Io.ShowDocumentRequest = void 0;
  var pl = Ne(), dg;
  (function(n) {
    n.method = "window/showDocument", n.messageDirection = pl.MessageDirection.serverToClient, n.type = new pl.ProtocolRequestType(n.method), n.capabilities = pl.CM.create("window.showDocument.support", void 0);
  })(dg || (Io.ShowDocumentRequest = dg = {}));
});
var pg = j((No) => {
  "use strict";
  Object.defineProperty(No, "__esModule", { value: true });
  No.LinkedEditingRangeRequest = void 0;
  var gl = Ne(), hg;
  (function(n) {
    n.method = "textDocument/linkedEditingRange", n.messageDirection = gl.MessageDirection.clientToServer, n.type = new gl.ProtocolRequestType(n.method), n.capabilities = gl.CM.create("textDocument.linkedEditingRange", "linkedEditingRangeProvider");
  })(hg || (No.LinkedEditingRangeRequest = hg = {}));
});
var wg = j((Dt) => {
  "use strict";
  Object.defineProperty(Dt, "__esModule", { value: true });
  Dt.WillDeleteFilesRequest = Dt.DidDeleteFilesNotification = Dt.DidRenameFilesNotification = Dt.WillRenameFilesRequest = Dt.DidCreateFilesNotification = Dt.WillCreateFilesRequest = Dt.FileOperationPatternKind = void 0;
  var at = Ne(), gg;
  (function(n) {
    n.file = "file", n.folder = "folder";
  })(gg || (Dt.FileOperationPatternKind = gg = {}));
  var mg;
  (function(n) {
    n.method = "workspace/willCreateFiles", n.messageDirection = at.MessageDirection.clientToServer, n.type = new at.ProtocolRequestType(n.method), n.capabilities = at.CM.create("workspace.fileOperations.willCreate", "workspace.fileOperations.willCreate");
  })(mg || (Dt.WillCreateFilesRequest = mg = {}));
  var yg;
  (function(n) {
    n.method = "workspace/didCreateFiles", n.messageDirection = at.MessageDirection.clientToServer, n.type = new at.ProtocolNotificationType(n.method), n.capabilities = at.CM.create("workspace.fileOperations.didCreate", "workspace.fileOperations.didCreate");
  })(yg || (Dt.DidCreateFilesNotification = yg = {}));
  var _g;
  (function(n) {
    n.method = "workspace/willRenameFiles", n.messageDirection = at.MessageDirection.clientToServer, n.type = new at.ProtocolRequestType(n.method), n.capabilities = at.CM.create("workspace.fileOperations.willRename", "workspace.fileOperations.willRename");
  })(_g || (Dt.WillRenameFilesRequest = _g = {}));
  var vg;
  (function(n) {
    n.method = "workspace/didRenameFiles", n.messageDirection = at.MessageDirection.clientToServer, n.type = new at.ProtocolNotificationType(n.method), n.capabilities = at.CM.create("workspace.fileOperations.didRename", "workspace.fileOperations.didRename");
  })(vg || (Dt.DidRenameFilesNotification = vg = {}));
  var bg;
  (function(n) {
    n.method = "workspace/didDeleteFiles", n.messageDirection = at.MessageDirection.clientToServer, n.type = new at.ProtocolNotificationType(n.method), n.capabilities = at.CM.create("workspace.fileOperations.didDelete", "workspace.fileOperations.didDelete");
  })(bg || (Dt.DidDeleteFilesNotification = bg = {}));
  var Cg;
  (function(n) {
    n.method = "workspace/willDeleteFiles", n.messageDirection = at.MessageDirection.clientToServer, n.type = new at.ProtocolRequestType(n.method), n.capabilities = at.CM.create("workspace.fileOperations.willDelete", "workspace.fileOperations.willDelete");
  })(Cg || (Dt.WillDeleteFilesRequest = Cg = {}));
});
var Rg = j((qr) => {
  "use strict";
  Object.defineProperty(qr, "__esModule", { value: true });
  qr.MonikerRequest = qr.MonikerKind = qr.UniquenessLevel = void 0;
  var ml = Ne(), Sg;
  (function(n) {
    n.document = "document", n.project = "project", n.group = "group", n.scheme = "scheme", n.global = "global";
  })(Sg || (qr.UniquenessLevel = Sg = {}));
  var Dg;
  (function(n) {
    n.$import = "import", n.$export = "export", n.local = "local";
  })(Dg || (qr.MonikerKind = Dg = {}));
  var Pg;
  (function(n) {
    n.method = "textDocument/moniker", n.messageDirection = ml.MessageDirection.clientToServer, n.type = new ml.ProtocolRequestType(n.method), n.capabilities = ml.CM.create("textDocument.moniker", "monikerProvider");
  })(Pg || (qr.MonikerRequest = Pg = {}));
});
var xg = j((Mr) => {
  "use strict";
  Object.defineProperty(Mr, "__esModule", { value: true });
  Mr.TypeHierarchySubtypesRequest = Mr.TypeHierarchySupertypesRequest = Mr.TypeHierarchyPrepareRequest = void 0;
  var Gr = Ne(), Tg;
  (function(n) {
    n.method = "textDocument/prepareTypeHierarchy", n.messageDirection = Gr.MessageDirection.clientToServer, n.type = new Gr.ProtocolRequestType(n.method), n.capabilities = Gr.CM.create("textDocument.typeHierarchy", "typeHierarchyProvider");
  })(Tg || (Mr.TypeHierarchyPrepareRequest = Tg = {}));
  var Og;
  (function(n) {
    n.method = "typeHierarchy/supertypes", n.messageDirection = Gr.MessageDirection.clientToServer, n.type = new Gr.ProtocolRequestType(n.method);
  })(Og || (Mr.TypeHierarchySupertypesRequest = Og = {}));
  var Eg;
  (function(n) {
    n.method = "typeHierarchy/subtypes", n.messageDirection = Gr.MessageDirection.clientToServer, n.type = new Gr.ProtocolRequestType(n.method);
  })(Eg || (Mr.TypeHierarchySubtypesRequest = Eg = {}));
});
var jg = j((qi) => {
  "use strict";
  Object.defineProperty(qi, "__esModule", { value: true });
  qi.InlineValueRefreshRequest = qi.InlineValueRequest = void 0;
  var xi = Ne(), qg;
  (function(n) {
    n.method = "textDocument/inlineValue", n.messageDirection = xi.MessageDirection.clientToServer, n.type = new xi.ProtocolRequestType(n.method), n.capabilities = xi.CM.create("textDocument.inlineValue", "inlineValueProvider");
  })(qg || (qi.InlineValueRequest = qg = {}));
  var Mg;
  (function(n) {
    n.method = "workspace/inlineValue/refresh", n.messageDirection = xi.MessageDirection.serverToClient, n.type = new xi.ProtocolRequestType0(n.method), n.capabilities = xi.CM.create("workspace.inlineValue.refreshSupport", void 0);
  })(Mg || (qi.InlineValueRefreshRequest = Mg = {}));
});
var Lg = j((jr) => {
  "use strict";
  Object.defineProperty(jr, "__esModule", { value: true });
  jr.InlayHintRefreshRequest = jr.InlayHintResolveRequest = jr.InlayHintRequest = void 0;
  var Jn = Ne(), Ig;
  (function(n) {
    n.method = "textDocument/inlayHint", n.messageDirection = Jn.MessageDirection.clientToServer, n.type = new Jn.ProtocolRequestType(n.method), n.capabilities = Jn.CM.create("textDocument.inlayHint", "inlayHintProvider");
  })(Ig || (jr.InlayHintRequest = Ig = {}));
  var Ng;
  (function(n) {
    n.method = "inlayHint/resolve", n.messageDirection = Jn.MessageDirection.clientToServer, n.type = new Jn.ProtocolRequestType(n.method), n.capabilities = Jn.CM.create("textDocument.inlayHint.resolveSupport", "inlayHintProvider.resolveProvider");
  })(Ng || (jr.InlayHintResolveRequest = Ng = {}));
  var Fg;
  (function(n) {
    n.method = "workspace/inlayHint/refresh", n.messageDirection = Jn.MessageDirection.serverToClient, n.type = new Jn.ProtocolRequestType0(n.method), n.capabilities = Jn.CM.create("workspace.inlayHint.refreshSupport", void 0);
  })(Fg || (jr.InlayHintRefreshRequest = Fg = {}));
});
var zg = j((ct) => {
  "use strict";
  var cw = ct && ct.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), uw = ct && ct.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), lw = ct && ct.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && cw(t, e, r[i]);
      return uw(t, e), t;
    };
  })();
  Object.defineProperty(ct, "__esModule", { value: true });
  ct.DiagnosticRefreshRequest = ct.WorkspaceDiagnosticRequest = ct.DocumentDiagnosticRequest = ct.DocumentDiagnosticReportKind = ct.DiagnosticServerCancellationData = void 0;
  var Wg = Gn(), dw = lw(Oo()), Qn = Ne(), Ag;
  (function(n) {
    function e(t) {
      let r = t;
      return r && dw.boolean(r.retriggerRequest);
    }
    n.is = e;
  })(Ag || (ct.DiagnosticServerCancellationData = Ag = {}));
  var kg;
  (function(n) {
    n.Full = "full", n.Unchanged = "unchanged";
  })(kg || (ct.DocumentDiagnosticReportKind = kg = {}));
  var $g;
  (function(n) {
    n.method = "textDocument/diagnostic", n.messageDirection = Qn.MessageDirection.clientToServer, n.type = new Qn.ProtocolRequestType(n.method), n.partialResult = new Wg.ProgressType(), n.capabilities = Qn.CM.create("textDocument.diagnostic", "diagnosticProvider");
  })($g || (ct.DocumentDiagnosticRequest = $g = {}));
  var Hg;
  (function(n) {
    n.method = "workspace/diagnostic", n.messageDirection = Qn.MessageDirection.clientToServer, n.type = new Qn.ProtocolRequestType(n.method), n.partialResult = new Wg.ProgressType(), n.capabilities = Qn.CM.create("workspace.diagnostics", "diagnosticProvider.workspaceDiagnostics");
  })(Hg || (ct.WorkspaceDiagnosticRequest = Hg = {}));
  var Ug;
  (function(n) {
    n.method = "workspace/diagnostic/refresh", n.messageDirection = Qn.MessageDirection.serverToClient, n.type = new Qn.ProtocolRequestType0(n.method), n.capabilities = Qn.CM.create("workspace.diagnostics.refreshSupport", void 0);
  })(Ug || (ct.DiagnosticRefreshRequest = Ug = {}));
});
var Qg = j((Pe) => {
  "use strict";
  var fw = Pe && Pe.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), hw = Pe && Pe.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), pw = Pe && Pe.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && fw(t, e, r[i]);
      return hw(t, e), t;
    };
  })();
  Object.defineProperty(Pe, "__esModule", { value: true });
  Pe.DidCloseNotebookDocumentNotification = Pe.DidSaveNotebookDocumentNotification = Pe.DidChangeNotebookDocumentNotification = Pe.NotebookCellArrayChange = Pe.DidOpenNotebookDocumentNotification = Pe.NotebookDocumentSyncRegistrationType = Pe.NotebookDocument = Pe.NotebookCell = Pe.ExecutionSummary = Pe.NotebookCellKind = void 0;
  var gs = (To(), Zi(Ro)), sn = pw(Oo()), _n = Ne(), yl;
  (function(n) {
    n.Markup = 1, n.Code = 2;
    function e(t) {
      return t === 1 || t === 2;
    }
    n.is = e;
  })(yl || (Pe.NotebookCellKind = yl = {}));
  var _l;
  (function(n) {
    function e(i, s) {
      let o = { executionOrder: i };
      return (s === true || s === false) && (o.success = s), o;
    }
    n.create = e;
    function t(i) {
      let s = i;
      return sn.objectLiteral(s) && gs.uinteger.is(s.executionOrder) && (s.success === void 0 || sn.boolean(s.success));
    }
    n.is = t;
    function r(i, s) {
      return i === s ? true : i == null || s === null || s === void 0 ? false : i.executionOrder === s.executionOrder && i.success === s.success;
    }
    n.equals = r;
  })(_l || (Pe.ExecutionSummary = _l = {}));
  var Fo;
  (function(n) {
    function e(s, o) {
      return { kind: s, document: o };
    }
    n.create = e;
    function t(s) {
      let o = s;
      return sn.objectLiteral(o) && yl.is(o.kind) && gs.DocumentUri.is(o.document) && (o.metadata === void 0 || sn.objectLiteral(o.metadata));
    }
    n.is = t;
    function r(s, o) {
      let a = /* @__PURE__ */ new Set();
      return s.document !== o.document && a.add("document"), s.kind !== o.kind && a.add("kind"), s.executionSummary !== o.executionSummary && a.add("executionSummary"), (s.metadata !== void 0 || o.metadata !== void 0) && !i(s.metadata, o.metadata) && a.add("metadata"), (s.executionSummary !== void 0 || o.executionSummary !== void 0) && !_l.equals(s.executionSummary, o.executionSummary) && a.add("executionSummary"), a;
    }
    n.diff = r;
    function i(s, o) {
      if (s === o) return true;
      if (s == null || o === null || o === void 0 || typeof s != typeof o || typeof s != "object") return false;
      let a = Array.isArray(s), c = Array.isArray(o);
      if (a !== c) return false;
      if (a && c) {
        if (s.length !== o.length) return false;
        for (let l = 0; l < s.length; l++) if (!i(s[l], o[l])) return false;
      }
      if (sn.objectLiteral(s) && sn.objectLiteral(o)) {
        let l = Object.keys(s), d = Object.keys(o);
        if (l.length !== d.length || (l.sort(), d.sort(), !i(l, d))) return false;
        for (let p = 0; p < l.length; p++) {
          let h = l[p];
          if (!i(s[h], o[h])) return false;
        }
      }
      return true;
    }
  })(Fo || (Pe.NotebookCell = Fo = {}));
  var Kg;
  (function(n) {
    function e(r, i, s, o) {
      return { uri: r, notebookType: i, version: s, cells: o };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return sn.objectLiteral(i) && sn.string(i.uri) && gs.integer.is(i.version) && sn.typedArray(i.cells, Fo.is);
    }
    n.is = t;
  })(Kg || (Pe.NotebookDocument = Kg = {}));
  var Mi;
  (function(n) {
    n.method = "notebookDocument/sync", n.messageDirection = _n.MessageDirection.clientToServer, n.type = new _n.RegistrationType(n.method);
  })(Mi || (Pe.NotebookDocumentSyncRegistrationType = Mi = {}));
  var Bg;
  (function(n) {
    n.method = "notebookDocument/didOpen", n.messageDirection = _n.MessageDirection.clientToServer, n.type = new _n.ProtocolNotificationType(n.method), n.registrationMethod = Mi.method;
  })(Bg || (Pe.DidOpenNotebookDocumentNotification = Bg = {}));
  var Gg;
  (function(n) {
    function e(r) {
      let i = r;
      return sn.objectLiteral(i) && gs.uinteger.is(i.start) && gs.uinteger.is(i.deleteCount) && (i.cells === void 0 || sn.typedArray(i.cells, Fo.is));
    }
    n.is = e;
    function t(r, i, s) {
      let o = { start: r, deleteCount: i };
      return s !== void 0 && (o.cells = s), o;
    }
    n.create = t;
  })(Gg || (Pe.NotebookCellArrayChange = Gg = {}));
  var Vg;
  (function(n) {
    n.method = "notebookDocument/didChange", n.messageDirection = _n.MessageDirection.clientToServer, n.type = new _n.ProtocolNotificationType(n.method), n.registrationMethod = Mi.method;
  })(Vg || (Pe.DidChangeNotebookDocumentNotification = Vg = {}));
  var Xg;
  (function(n) {
    n.method = "notebookDocument/didSave", n.messageDirection = _n.MessageDirection.clientToServer, n.type = new _n.ProtocolNotificationType(n.method), n.registrationMethod = Mi.method;
  })(Xg || (Pe.DidSaveNotebookDocumentNotification = Xg = {}));
  var Jg;
  (function(n) {
    n.method = "notebookDocument/didClose", n.messageDirection = _n.MessageDirection.clientToServer, n.type = new _n.ProtocolNotificationType(n.method), n.registrationMethod = Mi.method;
  })(Jg || (Pe.DidCloseNotebookDocumentNotification = Jg = {}));
});
var Zg = j((Lo) => {
  "use strict";
  Object.defineProperty(Lo, "__esModule", { value: true });
  Lo.InlineCompletionRequest = void 0;
  var vl = Ne(), Yg;
  (function(n) {
    n.method = "textDocument/inlineCompletion", n.messageDirection = vl.MessageDirection.clientToServer, n.type = new vl.ProtocolRequestType(n.method), n.capabilities = vl.CM.create("textDocument.inlineCompletion", "inlineCompletionProvider");
  })(Yg || (Lo.InlineCompletionRequest = Yg = {}));
});
var nm = j((ji) => {
  "use strict";
  Object.defineProperty(ji, "__esModule", { value: true });
  ji.TextDocumentContentRefreshRequest = ji.TextDocumentContentRequest = void 0;
  var ms = Ne(), em;
  (function(n) {
    n.method = "workspace/textDocumentContent", n.messageDirection = ms.MessageDirection.clientToServer, n.type = new ms.ProtocolRequestType(n.method), n.capabilities = ms.CM.create("workspace.textDocumentContent", "workspace.textDocumentContent");
  })(em || (ji.TextDocumentContentRequest = em = {}));
  var tm;
  (function(n) {
    n.method = "workspace/textDocumentContent/refresh", n.messageDirection = ms.MessageDirection.serverToClient, n.type = new ms.ProtocolRequestType(n.method);
  })(tm || (ji.TextDocumentContentRefreshRequest = tm = {}));
});
var my = j((_) => {
  "use strict";
  var gw = _ && _.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), mw = _ && _.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), yw = _ && _.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && gw(t, e, r[i]);
      return mw(t, e), t;
    };
  })();
  Object.defineProperty(_, "__esModule", { value: true });
  _.CodeActionRequest = _.DocumentSymbolRequest = _.DocumentHighlightRequest = _.ReferencesRequest = _.DefinitionRequest = _.SignatureHelpRequest = _.SignatureHelpTriggerKind = _.HoverRequest = _.CompletionResolveRequest = _.CompletionRequest = _.CompletionTriggerKind = _.PublishDiagnosticsNotification = _.WatchKind = _.GlobPattern = _.RelativePattern = _.FileChangeType = _.DidChangeWatchedFilesNotification = _.WillSaveTextDocumentWaitUntilRequest = _.WillSaveTextDocumentNotification = _.TextDocumentSaveReason = _.DidSaveTextDocumentNotification = _.DidCloseTextDocumentNotification = _.DidChangeTextDocumentNotification = _.TextDocumentContentChangeEvent = _.DidOpenTextDocumentNotification = _.TextDocumentSyncKind = _.TelemetryEventNotification = _.LogMessageNotification = _.ShowMessageRequest = _.ShowMessageNotification = _.MessageType = _.DidChangeConfigurationNotification = _.ExitNotification = _.ShutdownRequest = _.InitializedNotification = _.InitializeErrorCodes = _.InitializeRequest = _.WorkDoneProgressOptions = _.TextDocumentRegistrationOptions = _.StaticRegistrationOptions = _.PositionEncodingKind = _.RegularExpressionEngineKind = _.FailureHandlingKind = _.ResourceOperationKind = _.UnregistrationRequest = _.RegistrationRequest = _.DocumentSelector = _.NotebookCellTextDocumentFilter = _.NotebookDocumentFilter = _.TextDocumentFilter = void 0;
  _.UniquenessLevel = _.WillDeleteFilesRequest = _.DidDeleteFilesNotification = _.WillRenameFilesRequest = _.DidRenameFilesNotification = _.WillCreateFilesRequest = _.DidCreateFilesNotification = _.FileOperationPatternKind = _.LinkedEditingRangeRequest = _.ShowDocumentRequest = _.SemanticTokensRegistrationType = _.SemanticTokensRefreshRequest = _.SemanticTokensRangeRequest = _.SemanticTokensDeltaRequest = _.SemanticTokensRequest = _.TokenFormat = _.CallHierarchyPrepareRequest = _.CallHierarchyOutgoingCallsRequest = _.CallHierarchyIncomingCallsRequest = _.WorkDoneProgressCancelNotification = _.WorkDoneProgressCreateRequest = _.WorkDoneProgress = _.SelectionRangeRequest = _.DeclarationRequest = _.FoldingRangeRefreshRequest = _.FoldingRangeRequest = _.ColorPresentationRequest = _.DocumentColorRequest = _.ConfigurationRequest = _.DidChangeWorkspaceFoldersNotification = _.WorkspaceFoldersRequest = _.TypeDefinitionRequest = _.ImplementationRequest = _.ApplyWorkspaceEditRequest = _.ExecuteCommandRequest = _.PrepareRenameRequest = _.RenameRequest = _.PrepareSupportDefaultBehavior = _.DocumentOnTypeFormattingRequest = _.DocumentRangesFormattingRequest = _.DocumentRangeFormattingRequest = _.DocumentFormattingRequest = _.DocumentLinkResolveRequest = _.DocumentLinkRequest = _.CodeLensRefreshRequest = _.CodeLensResolveRequest = _.CodeLensRequest = _.WorkspaceSymbolResolveRequest = _.WorkspaceSymbolRequest = _.CodeActionResolveRequest = void 0;
  _.TextDocumentContentRefreshRequest = _.TextDocumentContentRequest = _.InlineCompletionRequest = _.DidCloseNotebookDocumentNotification = _.DidSaveNotebookDocumentNotification = _.DidChangeNotebookDocumentNotification = _.NotebookCellArrayChange = _.DidOpenNotebookDocumentNotification = _.NotebookDocumentSyncRegistrationType = _.NotebookDocument = _.NotebookCell = _.ExecutionSummary = _.NotebookCellKind = _.DiagnosticRefreshRequest = _.WorkspaceDiagnosticRequest = _.DocumentDiagnosticRequest = _.DocumentDiagnosticReportKind = _.DiagnosticServerCancellationData = _.InlayHintRefreshRequest = _.InlayHintResolveRequest = _.InlayHintRequest = _.InlineValueRefreshRequest = _.InlineValueRequest = _.TypeHierarchySupertypesRequest = _.TypeHierarchySubtypesRequest = _.TypeHierarchyPrepareRequest = _.MonikerRequest = _.MonikerKind = void 0;
  var N = Ne(), rm = (To(), Zi(Ro)), ut = yw(Oo()), _w = jp();
  Object.defineProperty(_, "ImplementationRequest", { enumerable: true, get: function() {
    return _w.ImplementationRequest;
  } });
  var vw = Np();
  Object.defineProperty(_, "TypeDefinitionRequest", { enumerable: true, get: function() {
    return vw.TypeDefinitionRequest;
  } });
  var dy = Ap();
  Object.defineProperty(_, "WorkspaceFoldersRequest", { enumerable: true, get: function() {
    return dy.WorkspaceFoldersRequest;
  } });
  Object.defineProperty(_, "DidChangeWorkspaceFoldersNotification", { enumerable: true, get: function() {
    return dy.DidChangeWorkspaceFoldersNotification;
  } });
  var bw = $p();
  Object.defineProperty(_, "ConfigurationRequest", { enumerable: true, get: function() {
    return bw.ConfigurationRequest;
  } });
  var fy = Wp();
  Object.defineProperty(_, "DocumentColorRequest", { enumerable: true, get: function() {
    return fy.DocumentColorRequest;
  } });
  Object.defineProperty(_, "ColorPresentationRequest", { enumerable: true, get: function() {
    return fy.ColorPresentationRequest;
  } });
  var hy = Bp();
  Object.defineProperty(_, "FoldingRangeRequest", { enumerable: true, get: function() {
    return hy.FoldingRangeRequest;
  } });
  Object.defineProperty(_, "FoldingRangeRefreshRequest", { enumerable: true, get: function() {
    return hy.FoldingRangeRefreshRequest;
  } });
  var Cw = Vp();
  Object.defineProperty(_, "DeclarationRequest", { enumerable: true, get: function() {
    return Cw.DeclarationRequest;
  } });
  var ww = Jp();
  Object.defineProperty(_, "SelectionRangeRequest", { enumerable: true, get: function() {
    return ww.SelectionRangeRequest;
  } });
  var Rl = eg();
  Object.defineProperty(_, "WorkDoneProgress", { enumerable: true, get: function() {
    return Rl.WorkDoneProgress;
  } });
  Object.defineProperty(_, "WorkDoneProgressCreateRequest", { enumerable: true, get: function() {
    return Rl.WorkDoneProgressCreateRequest;
  } });
  Object.defineProperty(_, "WorkDoneProgressCancelNotification", { enumerable: true, get: function() {
    return Rl.WorkDoneProgressCancelNotification;
  } });
  var Tl = ig();
  Object.defineProperty(_, "CallHierarchyIncomingCallsRequest", { enumerable: true, get: function() {
    return Tl.CallHierarchyIncomingCallsRequest;
  } });
  Object.defineProperty(_, "CallHierarchyOutgoingCallsRequest", { enumerable: true, get: function() {
    return Tl.CallHierarchyOutgoingCallsRequest;
  } });
  Object.defineProperty(_, "CallHierarchyPrepareRequest", { enumerable: true, get: function() {
    return Tl.CallHierarchyPrepareRequest;
  } });
  var Ii = lg();
  Object.defineProperty(_, "TokenFormat", { enumerable: true, get: function() {
    return Ii.TokenFormat;
  } });
  Object.defineProperty(_, "SemanticTokensRequest", { enumerable: true, get: function() {
    return Ii.SemanticTokensRequest;
  } });
  Object.defineProperty(_, "SemanticTokensDeltaRequest", { enumerable: true, get: function() {
    return Ii.SemanticTokensDeltaRequest;
  } });
  Object.defineProperty(_, "SemanticTokensRangeRequest", { enumerable: true, get: function() {
    return Ii.SemanticTokensRangeRequest;
  } });
  Object.defineProperty(_, "SemanticTokensRefreshRequest", { enumerable: true, get: function() {
    return Ii.SemanticTokensRefreshRequest;
  } });
  Object.defineProperty(_, "SemanticTokensRegistrationType", { enumerable: true, get: function() {
    return Ii.SemanticTokensRegistrationType;
  } });
  var Sw = fg();
  Object.defineProperty(_, "ShowDocumentRequest", { enumerable: true, get: function() {
    return Sw.ShowDocumentRequest;
  } });
  var Dw = pg();
  Object.defineProperty(_, "LinkedEditingRangeRequest", { enumerable: true, get: function() {
    return Dw.LinkedEditingRangeRequest;
  } });
  var Vr = wg();
  Object.defineProperty(_, "FileOperationPatternKind", { enumerable: true, get: function() {
    return Vr.FileOperationPatternKind;
  } });
  Object.defineProperty(_, "DidCreateFilesNotification", { enumerable: true, get: function() {
    return Vr.DidCreateFilesNotification;
  } });
  Object.defineProperty(_, "WillCreateFilesRequest", { enumerable: true, get: function() {
    return Vr.WillCreateFilesRequest;
  } });
  Object.defineProperty(_, "DidRenameFilesNotification", { enumerable: true, get: function() {
    return Vr.DidRenameFilesNotification;
  } });
  Object.defineProperty(_, "WillRenameFilesRequest", { enumerable: true, get: function() {
    return Vr.WillRenameFilesRequest;
  } });
  Object.defineProperty(_, "DidDeleteFilesNotification", { enumerable: true, get: function() {
    return Vr.DidDeleteFilesNotification;
  } });
  Object.defineProperty(_, "WillDeleteFilesRequest", { enumerable: true, get: function() {
    return Vr.WillDeleteFilesRequest;
  } });
  var Ol = Rg();
  Object.defineProperty(_, "UniquenessLevel", { enumerable: true, get: function() {
    return Ol.UniquenessLevel;
  } });
  Object.defineProperty(_, "MonikerKind", { enumerable: true, get: function() {
    return Ol.MonikerKind;
  } });
  Object.defineProperty(_, "MonikerRequest", { enumerable: true, get: function() {
    return Ol.MonikerRequest;
  } });
  var El = xg();
  Object.defineProperty(_, "TypeHierarchyPrepareRequest", { enumerable: true, get: function() {
    return El.TypeHierarchyPrepareRequest;
  } });
  Object.defineProperty(_, "TypeHierarchySubtypesRequest", { enumerable: true, get: function() {
    return El.TypeHierarchySubtypesRequest;
  } });
  Object.defineProperty(_, "TypeHierarchySupertypesRequest", { enumerable: true, get: function() {
    return El.TypeHierarchySupertypesRequest;
  } });
  var py = jg();
  Object.defineProperty(_, "InlineValueRequest", { enumerable: true, get: function() {
    return py.InlineValueRequest;
  } });
  Object.defineProperty(_, "InlineValueRefreshRequest", { enumerable: true, get: function() {
    return py.InlineValueRefreshRequest;
  } });
  var xl = Lg();
  Object.defineProperty(_, "InlayHintRequest", { enumerable: true, get: function() {
    return xl.InlayHintRequest;
  } });
  Object.defineProperty(_, "InlayHintResolveRequest", { enumerable: true, get: function() {
    return xl.InlayHintResolveRequest;
  } });
  Object.defineProperty(_, "InlayHintRefreshRequest", { enumerable: true, get: function() {
    return xl.InlayHintRefreshRequest;
  } });
  var ys = zg();
  Object.defineProperty(_, "DiagnosticServerCancellationData", { enumerable: true, get: function() {
    return ys.DiagnosticServerCancellationData;
  } });
  Object.defineProperty(_, "DocumentDiagnosticReportKind", { enumerable: true, get: function() {
    return ys.DocumentDiagnosticReportKind;
  } });
  Object.defineProperty(_, "DocumentDiagnosticRequest", { enumerable: true, get: function() {
    return ys.DocumentDiagnosticRequest;
  } });
  Object.defineProperty(_, "WorkspaceDiagnosticRequest", { enumerable: true, get: function() {
    return ys.WorkspaceDiagnosticRequest;
  } });
  Object.defineProperty(_, "DiagnosticRefreshRequest", { enumerable: true, get: function() {
    return ys.DiagnosticRefreshRequest;
  } });
  var vn = Qg();
  Object.defineProperty(_, "NotebookCellKind", { enumerable: true, get: function() {
    return vn.NotebookCellKind;
  } });
  Object.defineProperty(_, "ExecutionSummary", { enumerable: true, get: function() {
    return vn.ExecutionSummary;
  } });
  Object.defineProperty(_, "NotebookCell", { enumerable: true, get: function() {
    return vn.NotebookCell;
  } });
  Object.defineProperty(_, "NotebookDocument", { enumerable: true, get: function() {
    return vn.NotebookDocument;
  } });
  Object.defineProperty(_, "NotebookDocumentSyncRegistrationType", { enumerable: true, get: function() {
    return vn.NotebookDocumentSyncRegistrationType;
  } });
  Object.defineProperty(_, "DidOpenNotebookDocumentNotification", { enumerable: true, get: function() {
    return vn.DidOpenNotebookDocumentNotification;
  } });
  Object.defineProperty(_, "NotebookCellArrayChange", { enumerable: true, get: function() {
    return vn.NotebookCellArrayChange;
  } });
  Object.defineProperty(_, "DidChangeNotebookDocumentNotification", { enumerable: true, get: function() {
    return vn.DidChangeNotebookDocumentNotification;
  } });
  Object.defineProperty(_, "DidSaveNotebookDocumentNotification", { enumerable: true, get: function() {
    return vn.DidSaveNotebookDocumentNotification;
  } });
  Object.defineProperty(_, "DidCloseNotebookDocumentNotification", { enumerable: true, get: function() {
    return vn.DidCloseNotebookDocumentNotification;
  } });
  var Pw = Zg();
  Object.defineProperty(_, "InlineCompletionRequest", { enumerable: true, get: function() {
    return Pw.InlineCompletionRequest;
  } });
  var gy = nm();
  Object.defineProperty(_, "TextDocumentContentRequest", { enumerable: true, get: function() {
    return gy.TextDocumentContentRequest;
  } });
  Object.defineProperty(_, "TextDocumentContentRefreshRequest", { enumerable: true, get: function() {
    return gy.TextDocumentContentRefreshRequest;
  } });
  var bl;
  (function(n) {
    function e(t) {
      let r = t;
      return ut.string(r) || ut.string(r.language) || ut.string(r.scheme) || Pl.is(r.pattern);
    }
    n.is = e;
  })(bl || (_.TextDocumentFilter = bl = {}));
  var Cl;
  (function(n) {
    function e(t) {
      let r = t;
      return ut.objectLiteral(r) && (ut.string(r.notebookType) || ut.string(r.scheme) || ut.string(r.pattern));
    }
    n.is = e;
  })(Cl || (_.NotebookDocumentFilter = Cl = {}));
  var wl;
  (function(n) {
    function e(t) {
      let r = t;
      return ut.objectLiteral(r) && (ut.string(r.notebook) || Cl.is(r.notebook)) && (r.language === void 0 || ut.string(r.language));
    }
    n.is = e;
  })(wl || (_.NotebookCellTextDocumentFilter = wl = {}));
  var Sl;
  (function(n) {
    function e(t) {
      if (!Array.isArray(t)) return false;
      for (let r of t) if (!ut.string(r) && !bl.is(r) && !wl.is(r)) return false;
      return true;
    }
    n.is = e;
  })(Sl || (_.DocumentSelector = Sl = {}));
  var im;
  (function(n) {
    n.method = "client/registerCapability", n.messageDirection = N.MessageDirection.serverToClient, n.type = new N.ProtocolRequestType(n.method);
  })(im || (_.RegistrationRequest = im = {}));
  var sm;
  (function(n) {
    n.method = "client/unregisterCapability", n.messageDirection = N.MessageDirection.serverToClient, n.type = new N.ProtocolRequestType(n.method);
  })(sm || (_.UnregistrationRequest = sm = {}));
  var om;
  (function(n) {
    n.Create = "create", n.Rename = "rename", n.Delete = "delete";
  })(om || (_.ResourceOperationKind = om = {}));
  var am;
  (function(n) {
    n.Abort = "abort", n.Transactional = "transactional", n.TextOnlyTransactional = "textOnlyTransactional", n.Undo = "undo";
  })(am || (_.FailureHandlingKind = am = {}));
  var cm;
  (function(n) {
    n.ES2020 = "ES2020";
  })(cm || (_.RegularExpressionEngineKind = cm = {}));
  var um;
  (function(n) {
    n.UTF8 = "utf-8", n.UTF16 = "utf-16", n.UTF32 = "utf-32";
  })(um || (_.PositionEncodingKind = um = {}));
  var lm;
  (function(n) {
    function e(t) {
      let r = t;
      return r && ut.string(r.id) && r.id.length > 0;
    }
    n.hasId = e;
  })(lm || (_.StaticRegistrationOptions = lm = {}));
  var dm;
  (function(n) {
    function e(t) {
      let r = t;
      return r && (r.documentSelector === null || Sl.is(r.documentSelector));
    }
    n.is = e;
  })(dm || (_.TextDocumentRegistrationOptions = dm = {}));
  var fm;
  (function(n) {
    function e(r) {
      let i = r;
      return ut.objectLiteral(i) && (i.workDoneProgress === void 0 || ut.boolean(i.workDoneProgress));
    }
    n.is = e;
    function t(r) {
      let i = r;
      return i && ut.boolean(i.workDoneProgress);
    }
    n.hasWorkDoneProgress = t;
  })(fm || (_.WorkDoneProgressOptions = fm = {}));
  var hm;
  (function(n) {
    n.method = "initialize", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method);
  })(hm || (_.InitializeRequest = hm = {}));
  var pm;
  (function(n) {
    n.unknownProtocolVersion = 1;
  })(pm || (_.InitializeErrorCodes = pm = {}));
  var gm;
  (function(n) {
    n.method = "initialized", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolNotificationType(n.method);
  })(gm || (_.InitializedNotification = gm = {}));
  var mm;
  (function(n) {
    n.method = "shutdown", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType0(n.method);
  })(mm || (_.ShutdownRequest = mm = {}));
  var ym;
  (function(n) {
    n.method = "exit", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolNotificationType0(n.method);
  })(ym || (_.ExitNotification = ym = {}));
  var _m;
  (function(n) {
    n.method = "workspace/didChangeConfiguration", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolNotificationType(n.method), n.capabilities = N.CM.create("workspace.didChangeConfiguration", void 0);
  })(_m || (_.DidChangeConfigurationNotification = _m = {}));
  var vm;
  (function(n) {
    n.Error = 1, n.Warning = 2, n.Info = 3, n.Log = 4, n.Debug = 5;
  })(vm || (_.MessageType = vm = {}));
  var bm;
  (function(n) {
    n.method = "window/showMessage", n.messageDirection = N.MessageDirection.serverToClient, n.type = new N.ProtocolNotificationType(n.method), n.capabilities = N.CM.create("window.showMessage", void 0);
  })(bm || (_.ShowMessageNotification = bm = {}));
  var Cm;
  (function(n) {
    n.method = "window/showMessageRequest", n.messageDirection = N.MessageDirection.serverToClient, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("window.showMessage", void 0);
  })(Cm || (_.ShowMessageRequest = Cm = {}));
  var wm;
  (function(n) {
    n.method = "window/logMessage", n.messageDirection = N.MessageDirection.serverToClient, n.type = new N.ProtocolNotificationType(n.method);
  })(wm || (_.LogMessageNotification = wm = {}));
  var Sm;
  (function(n) {
    n.method = "telemetry/event", n.messageDirection = N.MessageDirection.serverToClient, n.type = new N.ProtocolNotificationType(n.method);
  })(Sm || (_.TelemetryEventNotification = Sm = {}));
  var Dm;
  (function(n) {
    n.None = 0, n.Full = 1, n.Incremental = 2;
  })(Dm || (_.TextDocumentSyncKind = Dm = {}));
  var Pm;
  (function(n) {
    n.method = "textDocument/didOpen", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolNotificationType(n.method), n.capabilities = N.CM.create("textDocument.synchronization", "textDocumentSync.openClose");
  })(Pm || (_.DidOpenTextDocumentNotification = Pm = {}));
  var Rm;
  (function(n) {
    function e(r) {
      let i = r;
      return i != null && typeof i.text == "string" && i.range !== void 0 && (i.rangeLength === void 0 || typeof i.rangeLength == "number");
    }
    n.isIncremental = e;
    function t(r) {
      let i = r;
      return i != null && typeof i.text == "string" && i.range === void 0 && i.rangeLength === void 0;
    }
    n.isFull = t;
  })(Rm || (_.TextDocumentContentChangeEvent = Rm = {}));
  var Tm;
  (function(n) {
    n.method = "textDocument/didChange", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolNotificationType(n.method), n.capabilities = N.CM.create("textDocument.synchronization", "textDocumentSync");
  })(Tm || (_.DidChangeTextDocumentNotification = Tm = {}));
  var Om;
  (function(n) {
    n.method = "textDocument/didClose", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolNotificationType(n.method), n.capabilities = N.CM.create("textDocument.synchronization", "textDocumentSync.openClose");
  })(Om || (_.DidCloseTextDocumentNotification = Om = {}));
  var Em;
  (function(n) {
    n.method = "textDocument/didSave", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolNotificationType(n.method), n.capabilities = N.CM.create("textDocument.synchronization.didSave", "textDocumentSync.save");
  })(Em || (_.DidSaveTextDocumentNotification = Em = {}));
  var xm;
  (function(n) {
    n.Manual = 1, n.AfterDelay = 2, n.FocusOut = 3;
  })(xm || (_.TextDocumentSaveReason = xm = {}));
  var qm;
  (function(n) {
    n.method = "textDocument/willSave", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolNotificationType(n.method), n.capabilities = N.CM.create("textDocument.synchronization.willSave", "textDocumentSync.willSave");
  })(qm || (_.WillSaveTextDocumentNotification = qm = {}));
  var Mm;
  (function(n) {
    n.method = "textDocument/willSaveWaitUntil", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("textDocument.synchronization.willSaveWaitUntil", "textDocumentSync.willSaveWaitUntil");
  })(Mm || (_.WillSaveTextDocumentWaitUntilRequest = Mm = {}));
  var jm;
  (function(n) {
    n.method = "workspace/didChangeWatchedFiles", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolNotificationType(n.method), n.capabilities = N.CM.create("workspace.didChangeWatchedFiles", void 0);
  })(jm || (_.DidChangeWatchedFilesNotification = jm = {}));
  var Im;
  (function(n) {
    n.Created = 1, n.Changed = 2, n.Deleted = 3;
  })(Im || (_.FileChangeType = Im = {}));
  var Dl;
  (function(n) {
    function e(t) {
      let r = t;
      return ut.objectLiteral(r) && (rm.URI.is(r.baseUri) || rm.WorkspaceFolder.is(r.baseUri)) && ut.string(r.pattern);
    }
    n.is = e;
  })(Dl || (_.RelativePattern = Dl = {}));
  var Pl;
  (function(n) {
    function e(t) {
      let r = t;
      return ut.string(r) || Dl.is(r);
    }
    n.is = e;
  })(Pl || (_.GlobPattern = Pl = {}));
  var Nm;
  (function(n) {
    n.Create = 1, n.Change = 2, n.Delete = 4;
  })(Nm || (_.WatchKind = Nm = {}));
  var Fm;
  (function(n) {
    n.method = "textDocument/publishDiagnostics", n.messageDirection = N.MessageDirection.serverToClient, n.type = new N.ProtocolNotificationType(n.method), n.capabilities = N.CM.create("textDocument.publishDiagnostics", void 0);
  })(Fm || (_.PublishDiagnosticsNotification = Fm = {}));
  var Lm;
  (function(n) {
    n.Invoked = 1, n.TriggerCharacter = 2, n.TriggerForIncompleteCompletions = 3;
  })(Lm || (_.CompletionTriggerKind = Lm = {}));
  var Am;
  (function(n) {
    n.method = "textDocument/completion", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("textDocument.completion", "completionProvider");
  })(Am || (_.CompletionRequest = Am = {}));
  var km;
  (function(n) {
    n.method = "completionItem/resolve", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("textDocument.completion.completionItem.resolveSupport", "completionProvider.resolveProvider");
  })(km || (_.CompletionResolveRequest = km = {}));
  var $m;
  (function(n) {
    n.method = "textDocument/hover", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("textDocument.hover", "hoverProvider");
  })($m || (_.HoverRequest = $m = {}));
  var Hm;
  (function(n) {
    n.Invoked = 1, n.TriggerCharacter = 2, n.ContentChange = 3;
  })(Hm || (_.SignatureHelpTriggerKind = Hm = {}));
  var Um;
  (function(n) {
    n.method = "textDocument/signatureHelp", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("textDocument.signatureHelp", "signatureHelpProvider");
  })(Um || (_.SignatureHelpRequest = Um = {}));
  var Wm;
  (function(n) {
    n.method = "textDocument/definition", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("textDocument.definition", "definitionProvider");
  })(Wm || (_.DefinitionRequest = Wm = {}));
  var zm;
  (function(n) {
    n.method = "textDocument/references", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("textDocument.references", "referencesProvider");
  })(zm || (_.ReferencesRequest = zm = {}));
  var Km;
  (function(n) {
    n.method = "textDocument/documentHighlight", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("textDocument.documentHighlight", "documentHighlightProvider");
  })(Km || (_.DocumentHighlightRequest = Km = {}));
  var Bm;
  (function(n) {
    n.method = "textDocument/documentSymbol", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("textDocument.documentSymbol", "documentSymbolProvider");
  })(Bm || (_.DocumentSymbolRequest = Bm = {}));
  var Gm;
  (function(n) {
    n.method = "textDocument/codeAction", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("textDocument.codeAction", "codeActionProvider");
  })(Gm || (_.CodeActionRequest = Gm = {}));
  var Vm;
  (function(n) {
    n.method = "codeAction/resolve", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("textDocument.codeAction.resolveSupport", "codeActionProvider.resolveProvider");
  })(Vm || (_.CodeActionResolveRequest = Vm = {}));
  var Xm;
  (function(n) {
    n.method = "workspace/symbol", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("workspace.symbol", "workspaceSymbolProvider");
  })(Xm || (_.WorkspaceSymbolRequest = Xm = {}));
  var Jm;
  (function(n) {
    n.method = "workspaceSymbol/resolve", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("workspace.symbol.resolveSupport", "workspaceSymbolProvider.resolveProvider");
  })(Jm || (_.WorkspaceSymbolResolveRequest = Jm = {}));
  var Qm;
  (function(n) {
    n.method = "textDocument/codeLens", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("textDocument.codeLens", "codeLensProvider");
  })(Qm || (_.CodeLensRequest = Qm = {}));
  var Ym;
  (function(n) {
    n.method = "codeLens/resolve", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("textDocument.codeLens.resolveSupport", "codeLensProvider.resolveProvider");
  })(Ym || (_.CodeLensResolveRequest = Ym = {}));
  var Zm;
  (function(n) {
    n.method = "workspace/codeLens/refresh", n.messageDirection = N.MessageDirection.serverToClient, n.type = new N.ProtocolRequestType0(n.method), n.capabilities = N.CM.create("workspace.codeLens", void 0);
  })(Zm || (_.CodeLensRefreshRequest = Zm = {}));
  var ey;
  (function(n) {
    n.method = "textDocument/documentLink", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("textDocument.documentLink", "documentLinkProvider");
  })(ey || (_.DocumentLinkRequest = ey = {}));
  var ty;
  (function(n) {
    n.method = "documentLink/resolve", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("textDocument.documentLink", "documentLinkProvider.resolveProvider");
  })(ty || (_.DocumentLinkResolveRequest = ty = {}));
  var ny;
  (function(n) {
    n.method = "textDocument/formatting", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("textDocument.formatting", "documentFormattingProvider");
  })(ny || (_.DocumentFormattingRequest = ny = {}));
  var ry;
  (function(n) {
    n.method = "textDocument/rangeFormatting", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("textDocument.rangeFormatting", "documentRangeFormattingProvider");
  })(ry || (_.DocumentRangeFormattingRequest = ry = {}));
  var iy;
  (function(n) {
    n.method = "textDocument/rangesFormatting", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("textDocument.rangeFormatting.rangesSupport", "documentRangeFormattingProvider.rangesSupport");
  })(iy || (_.DocumentRangesFormattingRequest = iy = {}));
  var sy;
  (function(n) {
    n.method = "textDocument/onTypeFormatting", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("textDocument.onTypeFormatting", "documentOnTypeFormattingProvider");
  })(sy || (_.DocumentOnTypeFormattingRequest = sy = {}));
  var oy;
  (function(n) {
    n.Identifier = 1;
  })(oy || (_.PrepareSupportDefaultBehavior = oy = {}));
  var ay;
  (function(n) {
    n.method = "textDocument/rename", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("textDocument.rename", "renameProvider");
  })(ay || (_.RenameRequest = ay = {}));
  var cy;
  (function(n) {
    n.method = "textDocument/prepareRename", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("textDocument.rename.prepareSupport", "renameProvider.prepareProvider");
  })(cy || (_.PrepareRenameRequest = cy = {}));
  var uy;
  (function(n) {
    n.method = "workspace/executeCommand", n.messageDirection = N.MessageDirection.clientToServer, n.type = new N.ProtocolRequestType(n.method), n.capabilities = N.CM.create("workspace.executeCommand", "executeCommandProvider");
  })(uy || (_.ExecuteCommandRequest = uy = {}));
  var ly;
  (function(n) {
    n.method = "workspace/applyEdit", n.messageDirection = N.MessageDirection.serverToClient, n.type = new N.ProtocolRequestType("workspace/applyEdit"), n.capabilities = N.CM.create("workspace.applyEdit", void 0);
  })(ly || (_.ApplyWorkspaceEditRequest = ly = {}));
});
var _y = j((ql) => {
  "use strict";
  Object.defineProperty(ql, "__esModule", { value: true });
  ql.createProtocolConnection = Rw;
  var yy = Gn();
  function Rw(n, e, t, r) {
    return yy.ConnectionStrategy.is(r) && (r = { connectionStrategy: r }), (0, yy.createMessageConnection)(n, e, t, r);
  }
});
var ae = j((Nt) => {
  "use strict";
  var Tw = Nt && Nt.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), Ao = Nt && Nt.__exportStar || function(n, e) {
    for (var t in n) t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && Tw(e, n, t);
  };
  Object.defineProperty(Nt, "__esModule", { value: true });
  Nt.LSPErrorCodes = Nt.createProtocolConnection = void 0;
  Ao(Gn(), Nt);
  Ao((To(), Zi(Ro)), Nt);
  Ao(Ne(), Nt);
  Ao(my(), Nt);
  var Ow = _y();
  Object.defineProperty(Nt, "createProtocolConnection", { enumerable: true, get: function() {
    return Ow.createProtocolConnection;
  } });
  var vy;
  (function(n) {
    n.lspReservedErrorRangeStart = -32899, n.RequestFailed = -32803, n.ServerCancelled = -32802, n.ContentModified = -32801, n.RequestCancelled = -32800, n.lspReservedErrorRangeEnd = -32800;
  })(vy || (Nt.LSPErrorCodes = vy = {}));
});
var Qt = j((Jt) => {
  "use strict";
  Object.defineProperty(Jt, "__esModule", { value: true });
  Jt.boolean = Ew;
  Jt.string = by;
  Jt.number = xw;
  Jt.error = qw;
  Jt.func = Cy;
  Jt.array = wy;
  Jt.stringArray = Mw;
  Jt.typedArray = jw;
  Jt.thenable = Sy;
  Jt.asPromise = Iw;
  function Ew(n) {
    return n === true || n === false;
  }
  function by(n) {
    return typeof n == "string" || n instanceof String;
  }
  function xw(n) {
    return typeof n == "number" || n instanceof Number;
  }
  function qw(n) {
    return n instanceof Error;
  }
  function Cy(n) {
    return typeof n == "function";
  }
  function wy(n) {
    return Array.isArray(n);
  }
  function Mw(n) {
    return wy(n) && n.every((e) => by(e));
  }
  function jw(n, e) {
    return Array.isArray(n) && n.every(e);
  }
  function Sy(n) {
    return n && Cy(n.then);
  }
  function Iw(n) {
    return n instanceof Promise ? n : Sy(n) ? new Promise((e, t) => {
      n.then((r) => e(r), (r) => t(r));
    }) : Promise.resolve(n);
  }
});
var Fe = j((Ir) => {
  "use strict";
  Object.defineProperty(Ir, "__esModule", { value: true });
  Ir.empty = void 0;
  Ir.v4 = Dy;
  Ir.isUUID = Py;
  Ir.parse = Fw;
  Ir.generateUuid = Lw;
  var _s = class {
    _value;
    constructor(e) {
      this._value = e;
    }
    asHex() {
      return this._value;
    }
    equals(e) {
      return this.asHex() === e.asHex();
    }
  }, Ml = class n extends _s {
    static _chars = ["0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    static _timeHighBits = ["8", "9", "a", "b"];
    static _oneOf(e) {
      return e[Math.floor(e.length * Math.random())];
    }
    static _randomHex() {
      return n._oneOf(n._chars);
    }
    constructor() {
      super([n._randomHex(), n._randomHex(), n._randomHex(), n._randomHex(), n._randomHex(), n._randomHex(), n._randomHex(), n._randomHex(), "-", n._randomHex(), n._randomHex(), n._randomHex(), n._randomHex(), "-", "4", n._randomHex(), n._randomHex(), n._randomHex(), "-", n._oneOf(n._timeHighBits), n._randomHex(), n._randomHex(), n._randomHex(), "-", n._randomHex(), n._randomHex(), n._randomHex(), n._randomHex(), n._randomHex(), n._randomHex(), n._randomHex(), n._randomHex(), n._randomHex(), n._randomHex(), n._randomHex(), n._randomHex()].join(""));
    }
  };
  Ir.empty = new _s("00000000-0000-0000-0000-000000000000");
  function Dy() {
    return new Ml();
  }
  var Nw = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  function Py(n) {
    return Nw.test(n);
  }
  function Fw(n) {
    if (!Py(n)) throw new Error("invalid uuid");
    return new _s(n);
  }
  function Lw() {
    return Dy().asHex();
  }
});
var ye = j((qe) => {
  "use strict";
  var Aw = qe && qe.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), kw = qe && qe.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), xy = qe && qe.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && Aw(t, e, r[i]);
      return kw(t, e), t;
    };
  })();
  Object.defineProperty(qe, "__esModule", { value: true });
  qe.DefaultDiagnosticCollectionProvider = qe.DiagnosticCollectionSource = qe.WorkspaceFeature = qe.TextDocumentLanguageFeature = qe.TextDocumentEventFeature = qe.DynamicDocumentFeature = qe.DynamicFeature = qe.StaticFeature = qe.LSPCancellationError = void 0;
  qe.ensure = $w;
  var on = require("vscode"), jl = ae(), Ot = xy(Qt()), Ry = xy(Fe()), Il = class extends on.CancellationError {
    data;
    constructor(e) {
      super(), this.data = e;
    }
  };
  qe.LSPCancellationError = Il;
  function $w(n, e) {
    return n[e] === void 0 && (n[e] = {}), n[e];
  }
  var Ty;
  (function(n) {
    function e(t) {
      let r = t;
      return r != null && Ot.func(r.fillClientCapabilities) && Ot.func(r.initialize) && Ot.func(r.getState) && Ot.func(r.clear) && (r.fillInitializeParams === void 0 || Ot.func(r.fillInitializeParams));
    }
    n.is = e;
  })(Ty || (qe.StaticFeature = Ty = {}));
  var Oy;
  (function(n) {
    function e(t) {
      let r = t;
      return r != null && Ot.func(r.fillClientCapabilities) && Ot.func(r.initialize) && Ot.func(r.getState) && Ot.func(r.clear) && (r.fillInitializeParams === void 0 || Ot.func(r.fillInitializeParams)) && Ot.func(r.register) && Ot.func(r.unregister) && r.registrationType !== void 0;
    }
    n.is = e;
  })(Oy || (qe.DynamicFeature = Oy = {}));
  var vs = class {
    _client;
    constructor(e) {
      this._client = e;
    }
    getState() {
      let e = this.getDocumentSelectors(), t = 0;
      for (let i of e) {
        t++;
        for (let s of on.workspace.textDocuments) if (on.languages.match(i, s) > 0) return { kind: "document", id: this.registrationType.method, registrations: true, matches: true };
      }
      let r = t > 0;
      return { kind: "document", id: this.registrationType.method, registrations: r, matches: false };
    }
  };
  qe.DynamicDocumentFeature = vs;
  var Nl = class extends vs {
    _event;
    _type;
    _middleware;
    _createParams;
    _textDocument;
    _selectorFilter;
    _listener;
    _selectors;
    _onAboutToSendNotification;
    _onNotificationSent;
    static textDocumentFilter(e, t) {
      for (let r of e) if (on.languages.match(r, t) > 0) return true;
      return false;
    }
    constructor(e, t, r, i, s, o, a) {
      super(e), this._event = t, this._type = r, this._middleware = i, this._createParams = s, this._textDocument = o, this._selectorFilter = a, this._selectors = /* @__PURE__ */ new Map(), this._onAboutToSendNotification = new on.EventEmitter(), this._onNotificationSent = new on.EventEmitter();
    }
    getStateInfo() {
      return [this._selectors.values(), false];
    }
    getDocumentSelectors() {
      return this._selectors.values();
    }
    register(e) {
      e.registerOptions.documentSelector && (this._listener || (this._listener = this._event((t) => {
        this.callback(t).catch((r) => {
          this._client.error(`Sending document notification ${this._type.method} failed.`, r);
        });
      })), this._selectors.set(e.id, this._client.protocol2CodeConverter.asDocumentSelector(e.registerOptions.documentSelector)));
    }
    async callback(e) {
      let t = async (r) => {
        let i = this.getTextDocument(r), s = this._createParams(r);
        this.aboutToSendNotification(i, this._type, s), await this._client.sendNotification(this._type, s), this.notificationSent(i, this._type, s);
      };
      if (this.matches(e)) {
        let r = this._middleware();
        return r ? r(e, (i) => t(i)) : t(e);
      }
    }
    matches(e) {
      return this._client.hasDedicatedTextSynchronizationFeature(this._textDocument(e)) ? false : !this._selectorFilter || this._selectorFilter(this._selectors.values(), e);
    }
    get onAboutToSendNotification() {
      return this._onAboutToSendNotification.event;
    }
    aboutToSendNotification(e, t, r) {
      this._onAboutToSendNotification.fire({ textDocument: e, type: t, params: r });
    }
    get onNotificationSent() {
      return this._onNotificationSent.event;
    }
    notificationSent(e, t, r) {
      this._onNotificationSent.fire({ textDocument: e, type: t, params: r });
    }
    unregister(e) {
      this._selectors.delete(e), this._selectors.size === 0 && this._listener && (this._listener.dispose(), this._listener = void 0);
    }
    clear() {
      this._selectors.clear(), this._onNotificationSent.dispose(), this._onNotificationSent = new on.EventEmitter(), this._listener && (this._listener.dispose(), this._listener = void 0);
    }
    getProvider(e) {
      for (let t of this._selectors.values()) if (on.languages.match(t, e) > 0) return { send: (r) => this.callback(r) };
    }
  };
  qe.TextDocumentEventFeature = Nl;
  var Fl = class extends vs {
    _registrationType;
    _registrations;
    constructor(e, t) {
      super(e), this._registrationType = t, this._registrations = /* @__PURE__ */ new Map();
    }
    *getDocumentSelectors() {
      for (let e of this._registrations.values()) {
        let t = e.data.registerOptions.documentSelector;
        t !== null && (yield this._client.protocol2CodeConverter.asDocumentSelector(t));
      }
    }
    get registrationType() {
      return this._registrationType;
    }
    register(e) {
      if (!e.registerOptions.documentSelector) return;
      let t = this.registerLanguageProvider(e.registerOptions, e.id);
      this._registrations.set(e.id, { disposable: t[0], data: e, provider: t[1] });
    }
    unregister(e) {
      let t = this._registrations.get(e);
      t !== void 0 && (this._registrations.delete(e), t.disposable.dispose());
    }
    clear() {
      this._registrations.forEach((e) => {
        e.disposable.dispose();
      }), this._registrations.clear();
    }
    getRegistration(e, t) {
      if (t) {
        if (jl.TextDocumentRegistrationOptions.is(t)) {
          let r = jl.StaticRegistrationOptions.hasId(t) ? t.id : Ry.generateUuid(), i = t.documentSelector ?? e;
          if (i) return [r, Object.assign({}, t, { documentSelector: i })];
        } else if (Ot.boolean(t) && t === true || jl.WorkDoneProgressOptions.is(t)) {
          if (!e) return [void 0, void 0];
          let r = Ot.boolean(t) && t === true ? { documentSelector: e } : Object.assign({}, t, { documentSelector: e });
          return [Ry.generateUuid(), r];
        }
      } else return [void 0, void 0];
      return [void 0, void 0];
    }
    getRegistrationOptions(e, t) {
      if (!(!e || !t)) return Ot.boolean(t) && t === true ? { documentSelector: e } : Object.assign({}, t, { documentSelector: e });
    }
    getProvider(e) {
      for (let t of this._registrations.values()) {
        let r = t.data.registerOptions.documentSelector;
        if (r !== null && on.languages.match(this._client.protocol2CodeConverter.asDocumentSelector(r), e) > 0) return t.provider;
      }
    }
    getAllProviders() {
      let e = [];
      for (let t of this._registrations.values()) e.push(t.provider);
      return e;
    }
  };
  qe.TextDocumentLanguageFeature = Fl;
  var Ll = class {
    _client;
    _registrationType;
    _registrations;
    constructor(e, t) {
      this._client = e, this._registrationType = t, this._registrations = /* @__PURE__ */ new Map();
    }
    getState() {
      let e = this._registrations.size > 0;
      return { kind: "workspace", id: this._registrationType.method, registrations: e };
    }
    get registrationType() {
      return this._registrationType;
    }
    register(e) {
      let t = this.registerLanguageProvider(e.registerOptions);
      this._registrations.set(e.id, { disposable: t[0], provider: t[1] });
    }
    unregister(e) {
      let t = this._registrations.get(e);
      t !== void 0 && (this._registrations.delete(e), t.disposable.dispose());
    }
    clear() {
      this._registrations.forEach((e) => {
        e.disposable.dispose();
      }), this._registrations.clear();
    }
    getProviders() {
      let e = [];
      for (let t of this._registrations.values()) e.push(t.provider);
      return e;
    }
  };
  qe.WorkspaceFeature = Ll;
  var Ey;
  (function(n) {
    n.push = "push", n.pull = "pull";
  })(Ey || (qe.DiagnosticCollectionSource = Ey = {}));
  var Al = class {
    create(e, t) {
      return e !== void 0 ? on.languages.createDiagnosticCollection(e) : on.languages.createDiagnosticCollection();
    }
    dispose(e, t) {
      e.dispose();
    }
  };
  qe.DefaultDiagnosticCollectionProvider = Al;
});
var My = j((Xr) => {
  "use strict";
  Object.defineProperty(Xr, "__esModule", { value: true });
  Xr.range = Xr.balanced = void 0;
  var Hw = (n, e, t) => {
    let r = n instanceof RegExp ? qy(n, t) : n, i = e instanceof RegExp ? qy(e, t) : e, s = r !== null && i != null && (0, Xr.range)(r, i, t);
    return s && { start: s[0], end: s[1], pre: t.slice(0, s[0]), body: t.slice(s[0] + r.length, s[1]), post: t.slice(s[1] + i.length) };
  };
  Xr.balanced = Hw;
  var qy = (n, e) => {
    let t = e.match(n);
    return t ? t[0] : null;
  }, Uw = (n, e, t) => {
    let r, i, s, o, a, c = t.indexOf(n), l = t.indexOf(e, c + 1), d = c;
    if (c >= 0 && l > 0) {
      if (n === e) return [c, l];
      for (r = [], s = t.length; d >= 0 && !a; ) {
        if (d === c) r.push(d), c = t.indexOf(n, d + 1);
        else if (r.length === 1) {
          let p = r.pop();
          p !== void 0 && (a = [p, l]);
        } else i = r.pop(), i !== void 0 && i < s && (s = i, o = l), l = t.indexOf(e, d + 1);
        d = c < l && c >= 0 ? c : l;
      }
      r.length && o !== void 0 && (a = [s, o]);
    }
    return a;
  };
  Xr.range = Uw;
});
var ky = j((Yn) => {
  "use strict";
  Object.defineProperty(Yn, "__esModule", { value: true });
  Yn.EXPANSION_MAX_LENGTH = Yn.EXPANSION_MAX = void 0;
  Yn.expand = tS;
  var jy = My(), Iy = "\0SLASH" + Math.random() + "\0", Ny = "\0OPEN" + Math.random() + "\0", Hl = "\0CLOSE" + Math.random() + "\0", Fy = "\0COMMA" + Math.random() + "\0", Ly = "\0PERIOD" + Math.random() + "\0", Ww = new RegExp(Iy, "g"), zw = new RegExp(Ny, "g"), Kw = new RegExp(Hl, "g"), Bw = new RegExp(Fy, "g"), Gw = new RegExp(Ly, "g"), Vw = /\\\\/g, Xw = /\\{/g, Jw = /\\}/g, Qw = /\\,/g, Yw = /\\\./g;
  Yn.EXPANSION_MAX = 1e5;
  Yn.EXPANSION_MAX_LENGTH = 4e6;
  function kl(n) {
    return isNaN(n) ? n.charCodeAt(0) : parseInt(n, 10);
  }
  function Zw(n) {
    return n.replace(Vw, Iy).replace(Xw, Ny).replace(Jw, Hl).replace(Qw, Fy).replace(Yw, Ly);
  }
  function eS(n) {
    return n.replace(Ww, "\\").replace(zw, "{").replace(Kw, "}").replace(Bw, ",").replace(Gw, ".");
  }
  function Ay(n) {
    if (!n) return [""];
    let e = [], t = (0, jy.balanced)("{", "}", n);
    if (!t) return n.split(",");
    let { pre: r, body: i, post: s } = t, o = r.split(",");
    o[o.length - 1] += "{" + i + "}";
    let a = Ay(s);
    return s.length && (o[o.length - 1] += a.shift(), o.push.apply(o, a)), e.push.apply(e, o), e;
  }
  function tS(n, e = {}) {
    if (!n) return [];
    let { max: t = Yn.EXPANSION_MAX, maxLength: r = Yn.EXPANSION_MAX_LENGTH } = e;
    return n.slice(0, 2) === "{}" && (n = "\\{\\}" + n.slice(2)), $l(Zw(n), t, r, true).map(eS);
  }
  function nS(n) {
    return "{" + n + "}";
  }
  function rS(n) {
    return /^-?0\d/.test(n);
  }
  function iS(n, e) {
    return n <= e;
  }
  function sS(n, e) {
    return n >= e;
  }
  function bs(n, e, t, r, i, s) {
    let o = [], a = 0;
    for (let c = 0; c < n.length; c++) for (let l = 0; l < t.length; l++) {
      if (o.length >= r) return o;
      let d = n[c] + e + t[l];
      if (!(s && !d)) {
        if (a + d.length > i) return o;
        o.push(d), a += d.length;
      }
    }
    return o;
  }
  function oS(n, e, t, r) {
    let i = n.split(/\.\./), s = [];
    if (i[0] === void 0 || i[1] === void 0) return s;
    let o = kl(i[0]), a = kl(i[1]), c = Math.max(i[0].length, i[1].length), l = i.length === 3 && i[2] !== void 0 ? Math.max(Math.abs(kl(i[2])), 1) : 1, d = iS;
    a < o && (l *= -1, d = sS);
    let h = i.some(rS), m = 0;
    for (let g = o; d(g, a) && s.length < t; g += l) {
      let y;
      if (e) y = String.fromCharCode(g), y === "\\" && (y = "");
      else if (y = String(g), h) {
        let T = c - y.length;
        if (T > 0) {
          let R = new Array(T + 1).join("0");
          g < 0 ? y = "-" + R + y.slice(1) : y = R + y;
        }
      }
      if (m + y.length > r) break;
      s.push(y), m += y.length;
    }
    return s;
  }
  function $l(n, e, t, r) {
    let i = [""], s = false, o = true;
    for (; ; ) {
      let a = (0, jy.balanced)("{", "}", n);
      if (!a) return bs(i, n, [""], e, t, s);
      let c = a.pre;
      if (/\$$/.test(c)) {
        if (i = bs(i, c + "{" + a.body + "}", [""], e, t, s && !a.post.length), o = false, !a.post.length) break;
        n = a.post;
        continue;
      }
      let l = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(a.body), d = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(a.body), p = l || d, h = a.body.indexOf(",") >= 0;
      if (!p && !h) {
        if (a.post.match(/,(?!,).*\}/)) {
          n = a.pre + "{" + a.body + Hl + a.post, r = true;
          continue;
        }
        return bs(i, c + "{" + a.body + "}" + a.post, [""], e, t, s);
      }
      o && (s = r && !p, o = false);
      let m;
      if (p) m = oS(a.body, d, e, t);
      else {
        let g = Ay(a.body);
        if (g.length === 1 && g[0] !== void 0 && (g = $l(g[0], e, t, false).map(nS), g.length === 1)) {
          if (i = bs(i, c + g[0], [""], e, t, s && !a.post.length), !a.post.length) break;
          n = a.post;
          continue;
        }
        let y = s && !a.post.length && !c;
        for (let R = 0; y && R < i.length; R++) i[R] && (y = false);
        m = [];
        let T = 0;
        e: for (let R = 0; R < g.length; R++) {
          let v = $l(g[R], e, t, false);
          for (let D = 0; D < v.length; D++) {
            let A = v[D];
            if (!(y && !A)) {
              if (m.length >= e || T + A.length > t) break e;
              m.push(A), T += A.length;
            }
          }
        }
      }
      if (i = bs(i, c, m, e, t, s && !a.post.length), !a.post.length) break;
      n = a.post;
    }
    return i;
  }
});
var $y = j((ko) => {
  "use strict";
  Object.defineProperty(ko, "__esModule", { value: true });
  ko.assertValidPattern = void 0;
  var aS = 1024 * 64, cS = (n) => {
    if (typeof n != "string") throw new TypeError("invalid pattern");
    if (n.length > aS) throw new TypeError("pattern is too long");
  };
  ko.assertValidPattern = cS;
});
var Uy = j(($o) => {
  "use strict";
  Object.defineProperty($o, "__esModule", { value: true });
  $o.parseClass = void 0;
  var uS = { "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", true], "[:alpha:]": ["\\p{L}\\p{Nl}", true], "[:ascii:]": ["\\x00-\\x7f", false], "[:blank:]": ["\\p{Zs}\\t", true], "[:cntrl:]": ["\\p{Cc}", true], "[:digit:]": ["\\p{Nd}", true], "[:graph:]": ["\\p{Z}\\p{C}", true, true], "[:lower:]": ["\\p{Ll}", true], "[:print:]": ["\\p{C}", true], "[:punct:]": ["\\p{P}", true], "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", true], "[:upper:]": ["\\p{Lu}", true], "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", true], "[:xdigit:]": ["A-Fa-f0-9", false] }, Cs = (n) => n.replace(/[[\]\\-]/g, "\\$&"), lS = (n) => n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Hy = (n) => n.join(""), dS = (n, e) => {
    let t = e;
    if (n.charAt(t) !== "[") throw new Error("not in a brace expression");
    let r = [], i = [], s = t + 1, o = false, a = false, c = false, l = false, d = t, p = "";
    e: for (; s < n.length; ) {
      let y = n.charAt(s);
      if ((y === "!" || y === "^") && s === t + 1) {
        l = true, s++;
        continue;
      }
      if (y === "]" && o && !c) {
        d = s + 1;
        break;
      }
      if (o = true, y === "\\" && !c) {
        c = true, s++;
        continue;
      }
      if (y === "[" && !c) {
        for (let [T, [R, v, D]] of Object.entries(uS)) if (n.startsWith(T, s)) {
          if (p) return ["$.", false, n.length - t, true];
          s += T.length, D ? i.push(R) : r.push(R), a = a || v;
          continue e;
        }
      }
      if (c = false, p) {
        y > p ? r.push(Cs(p) + "-" + Cs(y)) : y === p && r.push(Cs(y)), p = "", s++;
        continue;
      }
      if (n.startsWith("-]", s + 1)) {
        r.push(Cs(y + "-")), s += 2;
        continue;
      }
      if (n.startsWith("-", s + 1)) {
        p = y, s += 2;
        continue;
      }
      r.push(Cs(y)), s++;
    }
    if (d < s) return ["", false, 0, false];
    if (!r.length && !i.length) return ["$.", false, n.length - t, true];
    if (i.length === 0 && r.length === 1 && /^\\?.$/.test(r[0]) && !l) {
      let y = r[0].length === 2 ? r[0].slice(-1) : r[0];
      return [lS(y), false, d - t, false];
    }
    let h = "[" + (l ? "^" : "") + Hy(r) + "]", m = "[" + (l ? "" : "^") + Hy(i) + "]";
    return [r.length && i.length ? "(" + h + "|" + m + ")" : r.length ? h : m, a, d - t, true];
  };
  $o.parseClass = dS;
});
var Uo = j((Ho) => {
  "use strict";
  Object.defineProperty(Ho, "__esModule", { value: true });
  Ho.unescape = void 0;
  var fS = (n, { windowsPathsNoEscape: e = false, magicalBraces: t = true } = {}) => t ? e ? n.replace(/\[([^/\\])\]/g, "$1") : n.replace(/((?!\\).|^)\[([^/\\])\]/g, "$1$2").replace(/\\([^/])/g, "$1") : e ? n.replace(/\[([^/\\{}])\]/g, "$1") : n.replace(/((?!\\).|^)\[([^/\\{}])\]/g, "$1$2").replace(/\\([^/{}])/g, "$1");
  Ho.unescape = fS;
});
var zl = j((Bo) => {
  "use strict";
  var Ft;
  Object.defineProperty(Bo, "__esModule", { value: true });
  Bo.AST = void 0;
  var hS = Uy(), Wo = Uo(), pS = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), Ul = (n) => pS.has(n), Wy = (n) => Ul(n.type), gS = /* @__PURE__ */ new Map([["!", ["@"]], ["?", ["?", "@"]], ["@", ["@"]], ["*", ["*", "+", "?", "@"]], ["+", ["+", "@"]]]), mS = /* @__PURE__ */ new Map([["!", ["?"]], ["@", ["?"]], ["+", ["?", "*"]]]), yS = /* @__PURE__ */ new Map([["!", ["?", "@"]], ["?", ["?", "@"]], ["@", ["?", "@"]], ["*", ["*", "+", "?", "@"]], ["+", ["+", "@", "?", "*"]]]), zy = /* @__PURE__ */ new Map([["!", /* @__PURE__ */ new Map([["!", "@"]])], ["?", /* @__PURE__ */ new Map([["*", "*"], ["+", "*"]])], ["@", /* @__PURE__ */ new Map([["!", "!"], ["?", "?"], ["@", "@"], ["*", "*"], ["+", "+"]])], ["+", /* @__PURE__ */ new Map([["?", "*"], ["*", "*"]])]]), _S = "(?!(?:^|/)\\.\\.?(?:$|/))", zo = "(?!\\.)", vS = /* @__PURE__ */ new Set(["[", "."]), bS = /* @__PURE__ */ new Set(["..", "."]), CS = new Set("().*{}+?[]^$\\!"), wS = (n) => n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Wl = "[^/]", Ky = Wl + "*?", By = Wl + "+?", SS = 0, Ko = class {
    type;
    #n;
    #r;
    #i = false;
    #e = [];
    #t;
    #a;
    #u;
    #c = false;
    #s;
    #o;
    #l = false;
    id = ++SS;
    get depth() {
      return (this.#t?.depth ?? -1) + 1;
    }
    [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
      return { "@@type": "AST", id: this.id, type: this.type, root: this.#n.id, parent: this.#t?.id, depth: this.depth, partsLength: this.#e.length, parts: this.#e };
    }
    constructor(e, t, r = {}) {
      this.type = e, e && (this.#r = true), this.#t = t, this.#n = this.#t ? this.#t.#n : this, this.#s = this.#n === this ? r : this.#n.#s, this.#u = this.#n === this ? [] : this.#n.#u, e === "!" && !this.#n.#c && this.#u.push(this), this.#a = this.#t ? this.#t.#e.length : 0;
    }
    get hasMagic() {
      if (this.#r !== void 0) return this.#r;
      for (let e of this.#e) if (typeof e != "string" && (e.type || e.hasMagic)) return this.#r = true;
      return this.#r;
    }
    toString() {
      return this.#o !== void 0 ? this.#o : this.type ? this.#o = this.type + "(" + this.#e.map((e) => String(e)).join("|") + ")" : this.#o = this.#e.map((e) => String(e)).join("");
    }
    #y() {
      if (this !== this.#n) throw new Error("should only call on root");
      if (this.#c) return this;
      this.toString(), this.#c = true;
      let e;
      for (; e = this.#u.pop(); ) {
        if (e.type !== "!") continue;
        let t = e, r = t.#t;
        for (; r; ) {
          for (let i = t.#a + 1; !r.type && i < r.#e.length; i++) for (let s of e.#e) {
            if (typeof s == "string") throw new Error("string part in extglob AST??");
            s.copyIn(r.#e[i]);
          }
          t = r, r = t.#t;
        }
      }
      return this;
    }
    push(...e) {
      for (let t of e) if (t !== "") {
        if (typeof t != "string" && !(t instanceof Ft && t.#t === this)) throw new Error("invalid part: " + t);
        this.#e.push(t);
      }
    }
    toJSON() {
      let e = this.type === null ? this.#e.slice().map((t) => typeof t == "string" ? t : t.toJSON()) : [this.type, ...this.#e.map((t) => t.toJSON())];
      return this.isStart() && !this.type && e.unshift([]), this.isEnd() && (this === this.#n || this.#n.#c && this.#t?.type === "!") && e.push({}), e;
    }
    isStart() {
      if (this.#n === this) return true;
      if (!this.#t?.isStart()) return false;
      if (this.#a === 0) return true;
      let e = this.#t;
      for (let t = 0; t < this.#a; t++) {
        let r = e.#e[t];
        if (!(r instanceof Ft && r.type === "!")) return false;
      }
      return true;
    }
    isEnd() {
      if (this.#n === this || this.#t?.type === "!") return true;
      if (!this.#t?.isEnd()) return false;
      if (!this.type) return this.#t?.isEnd();
      let e = this.#t ? this.#t.#e.length : 0;
      return this.#a === e - 1;
    }
    copyIn(e) {
      typeof e == "string" ? this.push(e) : this.push(e.clone(this));
    }
    clone(e) {
      let t = new Ft(this.type, e);
      for (let r of this.#e) t.copyIn(r);
      return t;
    }
    static #d(e, t, r, i, s) {
      let o = i.maxExtglobRecursion ?? 2, a = false, c = false, l = -1, d = false;
      if (t.type === null) {
        let y = r, T = "";
        for (; y < e.length; ) {
          let R = e.charAt(y++);
          if (a || R === "\\") {
            a = !a, T += R;
            continue;
          }
          if (c) {
            y === l + 1 ? (R === "^" || R === "!") && (d = true) : R === "]" && !(y === l + 2 && d) && (c = false), T += R;
            continue;
          } else if (R === "[") {
            c = true, l = y, d = false, T += R;
            continue;
          }
          if (!i.noext && Ul(R) && e.charAt(y) === "(" && s <= o) {
            t.push(T), T = "";
            let D = new Ft(R, t);
            y = Ft.#d(e, D, y, i, s + 1), t.push(D);
            continue;
          }
          T += R;
        }
        return t.push(T), y;
      }
      let p = r + 1, h = new Ft(null, t), m = [], g = "";
      for (; p < e.length; ) {
        let y = e.charAt(p++);
        if (a || y === "\\") {
          a = !a, g += y;
          continue;
        }
        if (c) {
          p === l + 1 ? (y === "^" || y === "!") && (d = true) : y === "]" && !(p === l + 2 && d) && (c = false), g += y;
          continue;
        } else if (y === "[") {
          c = true, l = p, d = false, g += y;
          continue;
        }
        if (!i.noext && Ul(y) && e.charAt(p) === "(" && (s <= o || t && t.#f(y))) {
          let R = t && t.#f(y) ? 0 : 1;
          h.push(g), g = "";
          let v = new Ft(y, h);
          h.push(v), p = Ft.#d(e, v, p, i, s + R);
          continue;
        }
        if (y === "|") {
          h.push(g), g = "", m.push(h), h = new Ft(null, t);
          continue;
        }
        if (y === ")") return g === "" && t.#e.length === 0 && (t.#l = true), h.push(g), g = "", t.push(...m, h), p;
        g += y;
      }
      return t.type = null, t.#r = void 0, t.#e = [e.substring(r - 1)], p;
    }
    #_(e) {
      return this.#p(e, mS);
    }
    #p(e, t = gS) {
      if (!e || typeof e != "object" || e.type !== null || e.#e.length !== 1 || this.type === null) return false;
      let r = e.#e[0];
      return !r || typeof r != "object" || r.type === null ? false : this.#f(r.type, t);
    }
    #f(e, t = yS) {
      return !!t.get(this.type)?.includes(e);
    }
    #v(e, t) {
      let r = e.#e[0], i = new Ft(null, r, this.options);
      i.#e.push(""), r.push(i), this.#g(e, t);
    }
    #g(e, t) {
      let r = e.#e[0];
      this.#e.splice(t, 1, ...r.#e);
      for (let i of r.#e) typeof i == "object" && (i.#t = this);
      this.#o = void 0;
    }
    #b(e) {
      return !!zy.get(this.type)?.has(e);
    }
    #C(e) {
      if (!e || typeof e != "object" || e.type !== null || e.#e.length !== 1 || this.type === null || this.#e.length !== 1) return false;
      let t = e.#e[0];
      return !t || typeof t != "object" || t.type === null ? false : this.#b(t.type);
    }
    #w(e) {
      let t = zy.get(this.type), r = e.#e[0], i = t?.get(r.type);
      if (!i) return false;
      this.#e = r.#e;
      for (let s of this.#e) typeof s == "object" && (s.#t = this);
      this.type = i, this.#o = void 0, this.#l = false;
    }
    static fromGlob(e, t = {}) {
      let r = new Ft(null, void 0, t);
      return Ft.#d(e, r, 0, t, 0), r;
    }
    toMMPattern() {
      if (this !== this.#n) return this.#n.toMMPattern();
      let e = this.toString(), [t, r, i, s] = this.toRegExpSource();
      if (!(i || this.#r || this.#s.nocase && !this.#s.nocaseMagicOnly && e.toUpperCase() !== e.toLowerCase())) return r;
      let a = (this.#s.nocase ? "i" : "") + (s ? "u" : "");
      return Object.assign(new RegExp(`^${t}$`, a), { _src: t, _glob: e });
    }
    get options() {
      return this.#s;
    }
    toRegExpSource(e) {
      let t = e ?? !!this.#s.dot;
      if (this.#n === this && (this.#h(), this.#y()), !Wy(this)) {
        let c = this.isStart() && this.isEnd() && !this.#e.some((m) => typeof m != "string"), l = this.#e.map((m) => {
          let [g, y, T, R] = typeof m == "string" ? Ft.#S(m, this.#r, c) : m.toRegExpSource(e);
          return this.#r = this.#r || T, this.#i = this.#i || R, g;
        }).join(""), d = "";
        if (this.isStart() && typeof this.#e[0] == "string" && !(this.#e.length === 1 && bS.has(this.#e[0]))) {
          let g = vS, y = t && g.has(l.charAt(0)) || l.startsWith("\\.") && g.has(l.charAt(2)) || l.startsWith("\\.\\.") && g.has(l.charAt(4)), T = !t && !e && g.has(l.charAt(0));
          d = y ? _S : T ? zo : "";
        }
        let p = "";
        return this.isEnd() && this.#n.#c && this.#t?.type === "!" && (p = "(?:$|\\/)"), [d + l + p, (0, Wo.unescape)(l), this.#r = !!this.#r, this.#i];
      }
      let r = this.type === "*" || this.type === "+", i = this.type === "!" ? "(?:(?!(?:" : "(?:", s = this.#m(t);
      if (this.isStart() && this.isEnd() && !s && this.type !== "!") {
        let c = this.toString(), l = this;
        return l.#e = [c], l.type = null, l.#r = void 0, [c, (0, Wo.unescape)(this.toString()), false, false];
      }
      let o = !r || e || t || !zo ? "" : this.#m(true);
      o === s && (o = ""), o && (s = `(?:${s})(?:${o})*?`);
      let a = "";
      if (this.type === "!" && this.#l) a = (this.isStart() && !t ? zo : "") + By;
      else {
        let c = this.type === "!" ? "))" + (this.isStart() && !t && !e ? zo : "") + Ky + ")" : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && o ? ")" : this.type === "*" && o ? ")?" : `)${this.type}`;
        a = i + s + c;
      }
      return [a, (0, Wo.unescape)(s), this.#r = !!this.#r, this.#i];
    }
    #h() {
      if (Wy(this)) {
        let e = 0, t = false;
        do {
          t = true;
          for (let r = 0; r < this.#e.length; r++) {
            let i = this.#e[r];
            typeof i == "object" && (i.#h(), this.#p(i) ? (t = false, this.#g(i, r)) : this.#_(i) ? (t = false, this.#v(i, r)) : this.#C(i) && (t = false, this.#w(i)));
          }
        } while (!t && ++e < 10);
      } else for (let e of this.#e) typeof e == "object" && e.#h();
      this.#o = void 0;
    }
    #m(e) {
      return this.#e.map((t) => {
        if (typeof t == "string") throw new Error("string type in extglob ast??");
        let [r, i, s, o] = t.toRegExpSource(e);
        return this.#i = this.#i || o, r;
      }).filter((t) => !(this.isStart() && this.isEnd()) || !!t).join("|");
    }
    static #S(e, t, r = false) {
      let i = false, s = "", o = false, a = false;
      for (let c = 0; c < e.length; c++) {
        let l = e.charAt(c);
        if (i) {
          i = false, s += (CS.has(l) ? "\\" : "") + l;
          continue;
        }
        if (l === "*") {
          if (a) continue;
          a = true, s += r && /^[*]+$/.test(e) ? By : Ky, t = true;
          continue;
        } else a = false;
        if (l === "\\") {
          c === e.length - 1 ? s += "\\\\" : i = true;
          continue;
        }
        if (l === "[") {
          let [d, p, h, m] = (0, hS.parseClass)(e, c);
          if (h) {
            s += d, o = o || p, c += h - 1, t = t || m;
            continue;
          }
        }
        if (l === "?") {
          s += Wl, t = true;
          continue;
        }
        s += wS(l);
      }
      return [s, (0, Wo.unescape)(e), !!t, o];
    }
  };
  Bo.AST = Ko;
  Ft = Ko;
});
var Kl = j((Go) => {
  "use strict";
  Object.defineProperty(Go, "__esModule", { value: true });
  Go.escape = void 0;
  var DS = (n, { windowsPathsNoEscape: e = false, magicalBraces: t = false } = {}) => t ? e ? n.replace(/[?*()[\]{}]/g, "[$&]") : n.replace(/[?*()[\]\\{}]/g, "\\$&") : e ? n.replace(/[?*()[\]]/g, "[$&]") : n.replace(/[?*()[\]\\]/g, "\\$&");
  Go.escape = DS;
});
var Bl = j((Y) => {
  "use strict";
  Object.defineProperty(Y, "__esModule", { value: true });
  Y.unescape = Y.escape = Y.AST = Y.Minimatch = Y.match = Y.makeRe = Y.braceExpand = Y.defaults = Y.filter = Y.GLOBSTAR = Y.sep = Y.minimatch = void 0;
  var PS = ky(), Vo = $y(), Xy = zl(), RS = Kl(), TS = Uo(), OS = (n, e, t = {}) => ((0, Vo.assertValidPattern)(e), !t.nocomment && e.charAt(0) === "#" ? false : new Jr(e, t).match(n));
  Y.minimatch = OS;
  var ES = /^\*+([^+@!?*[(]*)$/, xS = (n) => (e) => !e.startsWith(".") && e.endsWith(n), qS = (n) => (e) => e.endsWith(n), MS = (n) => (n = n.toLowerCase(), (e) => !e.startsWith(".") && e.toLowerCase().endsWith(n)), jS = (n) => (n = n.toLowerCase(), (e) => e.toLowerCase().endsWith(n)), IS = /^\*+\.\*+$/, NS = (n) => !n.startsWith(".") && n.includes("."), FS = (n) => n !== "." && n !== ".." && n.includes("."), LS = /^\.\*+$/, AS = (n) => n !== "." && n !== ".." && n.startsWith("."), kS = /^\*+$/, $S = (n) => n.length !== 0 && !n.startsWith("."), HS = (n) => n.length !== 0 && n !== "." && n !== "..", US = /^\?+([^+@!?*[(]*)?$/, WS = ([n, e = ""]) => {
    let t = Jy([n]);
    return e ? (e = e.toLowerCase(), (r) => t(r) && r.toLowerCase().endsWith(e)) : t;
  }, zS = ([n, e = ""]) => {
    let t = Qy([n]);
    return e ? (e = e.toLowerCase(), (r) => t(r) && r.toLowerCase().endsWith(e)) : t;
  }, KS = ([n, e = ""]) => {
    let t = Qy([n]);
    return e ? (r) => t(r) && r.endsWith(e) : t;
  }, BS = ([n, e = ""]) => {
    let t = Jy([n]);
    return e ? (r) => t(r) && r.endsWith(e) : t;
  }, Jy = ([n]) => {
    let e = n.length;
    return (t) => t.length === e && !t.startsWith(".");
  }, Qy = ([n]) => {
    let e = n.length;
    return (t) => t.length === e && t !== "." && t !== "..";
  }, Yy = typeof process == "object" && process ? typeof process.env == "object" && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix", Gy = { win32: { sep: "\\" }, posix: { sep: "/" } };
  Y.sep = Yy === "win32" ? Gy.win32.sep : Gy.posix.sep;
  Y.minimatch.sep = Y.sep;
  Y.GLOBSTAR = /* @__PURE__ */ Symbol("globstar **");
  Y.minimatch.GLOBSTAR = Y.GLOBSTAR;
  var GS = "[^/]", VS = GS + "*?", XS = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", JS = "(?:(?!(?:\\/|^)\\.).)*?", QS = (n, e = {}) => (t) => (0, Y.minimatch)(t, n, e);
  Y.filter = QS;
  Y.minimatch.filter = Y.filter;
  var Yt = (n, e = {}) => Object.assign({}, n, e), YS = (n) => {
    if (!n || typeof n != "object" || !Object.keys(n).length) return Y.minimatch;
    let e = Y.minimatch;
    return Object.assign((r, i, s = {}) => e(r, i, Yt(n, s)), { Minimatch: class extends e.Minimatch {
      constructor(i, s = {}) {
        super(i, Yt(n, s));
      }
      static defaults(i) {
        return e.defaults(Yt(n, i)).Minimatch;
      }
    }, AST: class extends e.AST {
      constructor(i, s, o = {}) {
        super(i, s, Yt(n, o));
      }
      static fromGlob(i, s = {}) {
        return e.AST.fromGlob(i, Yt(n, s));
      }
    }, unescape: (r, i = {}) => e.unescape(r, Yt(n, i)), escape: (r, i = {}) => e.escape(r, Yt(n, i)), filter: (r, i = {}) => e.filter(r, Yt(n, i)), defaults: (r) => e.defaults(Yt(n, r)), makeRe: (r, i = {}) => e.makeRe(r, Yt(n, i)), braceExpand: (r, i = {}) => e.braceExpand(r, Yt(n, i)), match: (r, i, s = {}) => e.match(r, i, Yt(n, s)), sep: e.sep, GLOBSTAR: Y.GLOBSTAR });
  };
  Y.defaults = YS;
  Y.minimatch.defaults = Y.defaults;
  var ZS = (n, e = {}) => ((0, Vo.assertValidPattern)(n), e.nobrace || !/\{(?:(?!\{).)*\}/.test(n) ? [n] : (0, PS.expand)(n, { max: e.braceExpandMax }));
  Y.braceExpand = ZS;
  Y.minimatch.braceExpand = Y.braceExpand;
  var eD = (n, e = {}) => new Jr(n, e).makeRe();
  Y.makeRe = eD;
  Y.minimatch.makeRe = Y.makeRe;
  var tD = (n, e, t = {}) => {
    let r = new Jr(e, t);
    return n = n.filter((i) => r.match(i)), r.options.nonull && !n.length && n.push(e), n;
  };
  Y.match = tD;
  Y.minimatch.match = Y.match;
  var Vy = /[?*]|[+@!]\(.*?\)|\[|\]/, nD = (n) => n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Jr = class {
    options;
    set;
    pattern;
    windowsPathsNoEscape;
    nonegate;
    negate;
    comment;
    empty;
    preserveMultipleSlashes;
    partial;
    globSet;
    globParts;
    nocase;
    isWindows;
    platform;
    windowsNoMagicRoot;
    maxGlobstarRecursion;
    regexp;
    constructor(e, t = {}) {
      (0, Vo.assertValidPattern)(e), t = t || {}, this.options = t, this.maxGlobstarRecursion = t.maxGlobstarRecursion ?? 200, this.pattern = e, this.platform = t.platform || Yy, this.isWindows = this.platform === "win32";
      let r = "allowWindowsEscape";
      this.windowsPathsNoEscape = !!t.windowsPathsNoEscape || t[r] === false, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!t.preserveMultipleSlashes, this.regexp = null, this.negate = false, this.nonegate = !!t.nonegate, this.comment = false, this.empty = false, this.partial = !!t.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = t.windowsNoMagicRoot !== void 0 ? t.windowsNoMagicRoot : !!(this.isWindows && this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
    }
    hasMagic() {
      if (this.options.magicalBraces && this.set.length > 1) return true;
      for (let e of this.set) for (let t of e) if (typeof t != "string") return true;
      return false;
    }
    debug(...e) {
    }
    make() {
      let e = this.pattern, t = this.options;
      if (!t.nocomment && e.charAt(0) === "#") {
        this.comment = true;
        return;
      }
      if (!e) {
        this.empty = true;
        return;
      }
      this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], t.debug && (this.debug = (...s) => console.error(...s)), this.debug(this.pattern, this.globSet);
      let r = this.globSet.map((s) => this.slashSplit(s));
      this.globParts = this.preprocess(r), this.debug(this.pattern, this.globParts);
      let i = this.globParts.map((s, o, a) => {
        if (this.isWindows && this.windowsNoMagicRoot) {
          let c = s[0] === "" && s[1] === "" && (s[2] === "?" || !Vy.test(s[2])) && !Vy.test(s[3]), l = /^[a-z]:/i.test(s[0]);
          if (c) return [...s.slice(0, 4), ...s.slice(4).map((d) => this.parse(d))];
          if (l) return [s[0], ...s.slice(1).map((d) => this.parse(d))];
        }
        return s.map((c) => this.parse(c));
      });
      if (this.debug(this.pattern, i), this.set = i.filter((s) => s.indexOf(false) === -1), this.isWindows) for (let s = 0; s < this.set.length; s++) {
        let o = this.set[s];
        o[0] === "" && o[1] === "" && this.globParts[s][2] === "?" && typeof o[3] == "string" && /^[a-z]:$/i.test(o[3]) && (o[2] = "?");
      }
      this.debug(this.pattern, this.set);
    }
    preprocess(e) {
      if (this.options.noglobstar) for (let r of e) for (let i = 0; i < r.length; i++) r[i] === "**" && (r[i] = "*");
      let { optimizationLevel: t = 1 } = this.options;
      return t >= 2 ? (e = this.firstPhasePreProcess(e), e = this.secondPhasePreProcess(e)) : t >= 1 ? e = this.levelOneOptimize(e) : e = this.adjascentGlobstarOptimize(e), e;
    }
    adjascentGlobstarOptimize(e) {
      return e.map((t) => {
        let r = -1;
        for (; (r = t.indexOf("**", r + 1)) !== -1; ) {
          let i = r;
          for (; t[i + 1] === "**"; ) i++;
          i !== r && t.splice(r, i - r);
        }
        return t;
      });
    }
    levelOneOptimize(e) {
      return e.map((t) => (t = t.reduce((r, i) => {
        let s = r[r.length - 1];
        return i === "**" && s === "**" ? r : i === ".." && s && s !== ".." && s !== "." && s !== "**" ? (r.pop(), r) : (r.push(i), r);
      }, []), t.length === 0 ? [""] : t));
    }
    levelTwoFileOptimize(e) {
      Array.isArray(e) || (e = this.slashSplit(e));
      let t = false;
      do {
        if (t = false, !this.preserveMultipleSlashes) {
          for (let i = 1; i < e.length - 1; i++) {
            let s = e[i];
            i === 1 && s === "" && e[0] === "" || (s === "." || s === "") && (t = true, e.splice(i, 1), i--);
          }
          e[0] === "." && e.length === 2 && (e[1] === "." || e[1] === "") && (t = true, e.pop());
        }
        let r = 0;
        for (; (r = e.indexOf("..", r + 1)) !== -1; ) {
          let i = e[r - 1];
          i && i !== "." && i !== ".." && i !== "**" && !(this.isWindows && /^[a-z]:$/i.test(i)) && (t = true, e.splice(r - 1, 2), r -= 2);
        }
      } while (t);
      return e.length === 0 ? [""] : e;
    }
    firstPhasePreProcess(e) {
      let t = false;
      do {
        t = false;
        for (let r of e) {
          let i = -1;
          for (; (i = r.indexOf("**", i + 1)) !== -1; ) {
            let o = i;
            for (; r[o + 1] === "**"; ) o++;
            o > i && r.splice(i + 1, o - i);
            let a = r[i + 1], c = r[i + 2], l = r[i + 3];
            if (a !== ".." || !c || c === "." || c === ".." || !l || l === "." || l === "..") continue;
            t = true, r.splice(i, 1);
            let d = r.slice(0);
            d[i] = "**", e.push(d), i--;
          }
          if (!this.preserveMultipleSlashes) {
            for (let o = 1; o < r.length - 1; o++) {
              let a = r[o];
              o === 1 && a === "" && r[0] === "" || (a === "." || a === "") && (t = true, r.splice(o, 1), o--);
            }
            r[0] === "." && r.length === 2 && (r[1] === "." || r[1] === "") && (t = true, r.pop());
          }
          let s = 0;
          for (; (s = r.indexOf("..", s + 1)) !== -1; ) {
            let o = r[s - 1];
            if (o && o !== "." && o !== ".." && o !== "**") {
              t = true;
              let c = s === 1 && r[s + 1] === "**" ? ["."] : [];
              r.splice(s - 1, 2, ...c), r.length === 0 && r.push(""), s -= 2;
            }
          }
        }
      } while (t);
      return e;
    }
    secondPhasePreProcess(e) {
      for (let t = 0; t < e.length - 1; t++) for (let r = t + 1; r < e.length; r++) {
        let i = this.partsMatch(e[t], e[r], !this.preserveMultipleSlashes);
        if (i) {
          e[t] = [], e[r] = i;
          break;
        }
      }
      return e.filter((t) => t.length);
    }
    partsMatch(e, t, r = false) {
      let i = 0, s = 0, o = [], a = "";
      for (; i < e.length && s < t.length; ) if (e[i] === t[s]) o.push(a === "b" ? t[s] : e[i]), i++, s++;
      else if (r && e[i] === "**" && t[s] === e[i + 1]) o.push(e[i]), i++;
      else if (r && t[s] === "**" && e[i] === t[s + 1]) o.push(t[s]), s++;
      else if (e[i] === "*" && t[s] && (this.options.dot || !t[s].startsWith(".")) && t[s] !== "**") {
        if (a === "b") return false;
        a = "a", o.push(e[i]), i++, s++;
      } else if (t[s] === "*" && e[i] && (this.options.dot || !e[i].startsWith(".")) && e[i] !== "**") {
        if (a === "a") return false;
        a = "b", o.push(t[s]), i++, s++;
      } else return false;
      return e.length === t.length && o;
    }
    parseNegate() {
      if (this.nonegate) return;
      let e = this.pattern, t = false, r = 0;
      for (let i = 0; i < e.length && e.charAt(i) === "!"; i++) t = !t, r++;
      r && (this.pattern = e.slice(r)), this.negate = t;
    }
    matchOne(e, t, r = false) {
      let i = 0, s = 0;
      if (this.isWindows) {
        let a = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]), c = !a && e[0] === "" && e[1] === "" && e[2] === "?" && /^[a-z]:$/i.test(e[3]), l = typeof t[0] == "string" && /^[a-z]:$/i.test(t[0]), d = !l && t[0] === "" && t[1] === "" && t[2] === "?" && typeof t[3] == "string" && /^[a-z]:$/i.test(t[3]), p = c ? 3 : a ? 0 : void 0, h = d ? 3 : l ? 0 : void 0;
        if (typeof p == "number" && typeof h == "number") {
          let [m, g] = [e[p], t[h]];
          m.toLowerCase() === g.toLowerCase() && (t[h] = m, s = h, i = p);
        }
      }
      let { optimizationLevel: o = 1 } = this.options;
      return o >= 2 && (e = this.levelTwoFileOptimize(e)), t.includes(Y.GLOBSTAR) ? this.#n(e, t, r, i, s) : this.#i(e, t, r, i, s);
    }
    #n(e, t, r, i, s) {
      let o = t.indexOf(Y.GLOBSTAR, s), a = t.lastIndexOf(Y.GLOBSTAR), [c, l, d] = r ? [t.slice(s, o), t.slice(o + 1), []] : [t.slice(s, o), t.slice(o + 1, a), t.slice(a + 1)];
      if (c.length) {
        let v = e.slice(i, i + c.length);
        if (!this.#i(v, c, r, 0, 0)) return false;
        i += c.length, s += c.length;
      }
      let p = 0;
      if (d.length) {
        if (d.length + i > e.length) return false;
        let v = e.length - d.length;
        if (this.#i(e, d, r, v, 0)) p = d.length;
        else {
          if (e[e.length - 1] !== "" || i + d.length === e.length || (v--, !this.#i(e, d, r, v, 0))) return false;
          p = d.length + 1;
        }
      }
      if (!l.length) {
        let v = !!p;
        for (let D = i; D < e.length - p; D++) {
          let A = String(e[D]);
          if (v = true, A === "." || A === ".." || !this.options.dot && A.startsWith(".")) return false;
        }
        return r || v;
      }
      let h = [[[], 0]], m = h[0], g = 0, y = [0];
      for (let v of l) v === Y.GLOBSTAR ? (y.push(g), m = [[], 0], h.push(m)) : (m[0].push(v), g++);
      let T = h.length - 1, R = e.length - p;
      for (let v of h) v[1] = R - (y[T--] + v[0].length);
      return !!this.#r(e, h, i, 0, r, 0, !!p);
    }
    #r(e, t, r, i, s, o, a) {
      let c = t[i];
      if (!c) {
        for (let p = r; p < e.length; p++) {
          a = true;
          let h = e[p];
          if (h === "." || h === ".." || !this.options.dot && h.startsWith(".")) return false;
        }
        return a;
      }
      let [l, d] = c;
      for (; r <= d; ) {
        if (this.#i(e.slice(0, r + l.length), l, s, r, 0) && o < this.maxGlobstarRecursion) {
          let m = this.#r(e, t, r + l.length, i + 1, s, o + 1, a);
          if (m !== false) return m;
        }
        let h = e[r];
        if (h === "." || h === ".." || !this.options.dot && h.startsWith(".")) return false;
        r++;
      }
      return s || null;
    }
    #i(e, t, r, i, s) {
      let o, a, c, l;
      for (o = i, a = s, l = e.length, c = t.length; o < l && a < c; o++, a++) {
        this.debug("matchOne loop");
        let d = t[a], p = e[o];
        if (this.debug(t, d, p), d === false || d === Y.GLOBSTAR) return false;
        let h;
        if (typeof d == "string" ? (h = p === d, this.debug("string match", d, p, h)) : (h = d.test(p), this.debug("pattern match", d, p, h)), !h) return false;
      }
      if (o === l && a === c) return true;
      if (o === l) return r;
      if (a === c) return o === l - 1 && e[o] === "";
      throw new Error("wtf?");
    }
    braceExpand() {
      return (0, Y.braceExpand)(this.pattern, this.options);
    }
    parse(e) {
      (0, Vo.assertValidPattern)(e);
      let t = this.options;
      if (e === "**") return Y.GLOBSTAR;
      if (e === "") return "";
      let r, i = null;
      (r = e.match(kS)) ? i = t.dot ? HS : $S : (r = e.match(ES)) ? i = (t.nocase ? t.dot ? jS : MS : t.dot ? qS : xS)(r[1]) : (r = e.match(US)) ? i = (t.nocase ? t.dot ? zS : WS : t.dot ? KS : BS)(r) : (r = e.match(IS)) ? i = t.dot ? FS : NS : (r = e.match(LS)) && (i = AS);
      let s = Xy.AST.fromGlob(e, this.options).toMMPattern();
      return i && typeof s == "object" && Reflect.defineProperty(s, "test", { value: i }), s;
    }
    makeRe() {
      if (this.regexp || this.regexp === false) return this.regexp;
      let e = this.set;
      if (!e.length) return this.regexp = false, this.regexp;
      let t = this.options, r = t.noglobstar ? VS : t.dot ? XS : JS, i = new Set(t.nocase ? ["i"] : []), s = e.map((c) => {
        let l = c.map((p) => {
          if (p instanceof RegExp) for (let h of p.flags.split("")) i.add(h);
          return typeof p == "string" ? nD(p) : p === Y.GLOBSTAR ? Y.GLOBSTAR : p._src;
        });
        l.forEach((p, h) => {
          let m = l[h + 1], g = l[h - 1];
          p !== Y.GLOBSTAR || g === Y.GLOBSTAR || (g === void 0 ? m !== void 0 && m !== Y.GLOBSTAR ? l[h + 1] = "(?:\\/|" + r + "\\/)?" + m : l[h] = r : m === void 0 ? l[h - 1] = g + "(?:\\/|\\/" + r + ")?" : m !== Y.GLOBSTAR && (l[h - 1] = g + "(?:\\/|\\/" + r + "\\/)" + m, l[h + 1] = Y.GLOBSTAR));
        });
        let d = l.filter((p) => p !== Y.GLOBSTAR);
        if (this.partial && d.length >= 1) {
          let p = [];
          for (let h = 1; h <= d.length; h++) p.push(d.slice(0, h).join("/"));
          return "(?:" + p.join("|") + ")";
        }
        return d.join("/");
      }).join("|"), [o, a] = e.length > 1 ? ["(?:", ")"] : ["", ""];
      s = "^" + o + s + a + "$", this.partial && (s = "^(?:\\/|" + o + s.slice(1, -1) + a + ")$"), this.negate && (s = "^(?!" + s + ").+$");
      try {
        this.regexp = new RegExp(s, [...i].join(""));
      } catch {
        this.regexp = false;
      }
      return this.regexp;
    }
    slashSplit(e) {
      return this.preserveMultipleSlashes ? e.split("/") : this.isWindows && /^\/\/[^/]+/.test(e) ? ["", ...e.split(/\/+/)] : e.split(/\/+/);
    }
    match(e, t = this.partial) {
      if (this.debug("match", e, this.pattern), this.comment) return false;
      if (this.empty) return e === "";
      if (e === "/" && t) return true;
      let r = this.options;
      this.isWindows && (e = e.split("\\").join("/"));
      let i = this.slashSplit(e);
      this.debug(this.pattern, "split", i);
      let s = this.set;
      this.debug(this.pattern, "set", s);
      let o = i[i.length - 1];
      if (!o) for (let a = i.length - 2; !o && a >= 0; a--) o = i[a];
      for (let a of s) {
        let c = i;
        if (r.matchBase && a.length === 1 && (c = [o]), this.matchOne(c, a, t)) return r.flipNegate ? true : !this.negate;
      }
      return r.flipNegate ? false : this.negate;
    }
    static defaults(e) {
      return Y.minimatch.defaults(e).Minimatch;
    }
  };
  Y.Minimatch = Jr;
  var rD = zl();
  Object.defineProperty(Y, "AST", { enumerable: true, get: function() {
    return rD.AST;
  } });
  var iD = Kl();
  Object.defineProperty(Y, "escape", { enumerable: true, get: function() {
    return iD.escape;
  } });
  var sD = Uo();
  Object.defineProperty(Y, "unescape", { enumerable: true, get: function() {
    return sD.unescape;
  } });
  Y.minimatch.AST = Xy.AST;
  Y.minimatch.Minimatch = Jr;
  Y.minimatch.escape = RS.escape;
  Y.minimatch.unescape = TS.unescape;
});
var Gl = j((Zn) => {
  "use strict";
  var oD = Zn && Zn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), aD = Zn && Zn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), cD = Zn && Zn.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && oD(t, e, r[i]);
      return aD(t, e), t;
    };
  })();
  Object.defineProperty(Zn, "__esModule", { value: true });
  Zn.matchGlobPattern = dD;
  var uD = cD(Bl()), lD = require("vscode");
  function dD(n, e) {
    let t;
    if (typeof n == "string") t = n.replace(/\\/g, "/");
    else try {
      let i = lD.Uri.parse(typeof n.baseUri == "string" ? n.baseUri : n.baseUri.uri);
      t = i.with({ path: i.path + "/" + n.pattern }).fsPath.replace(/\\/g, "/");
    } catch {
      return false;
    }
    let r = new uD.Minimatch(t, { noext: true });
    return r.makeRe() ? r.match(e.fsPath) : false;
  }
});
var Zl = j((Nr) => {
  "use strict";
  Object.defineProperty(Nr, "__esModule", { value: true });
  Nr.DiagnosticFeature = Nr.DiagnosticPullMode = Nr.vsdiag = void 0;
  var Le = require("vscode"), Ae = ae(), fD = Fe(), hD = Gl(), ws = ye();
  function Xo(n, e) {
    return n[e] === void 0 && (n[e] = {}), n[e];
  }
  var Ut;
  (function(n) {
    let e;
    (function(t) {
      t.full = "full", t.unChanged = "unChanged";
    })(e = n.DocumentDiagnosticReportKind || (n.DocumentDiagnosticReportKind = {}));
  })(Ut || (Nr.vsdiag = Ut = {}));
  var Ss;
  (function(n) {
    n.onType = "onType", n.onSave = "onSave", n.onFocus = "onFocus";
  })(Ss || (Nr.DiagnosticPullMode = Ss = {}));
  var lt;
  (function(n) {
    n.active = "open", n.reschedule = "reschedule", n.outDated = "drop";
  })(lt || (lt = {}));
  var tt;
  (function(n) {
    n[n.document = 1] = "document", n[n.workspace = 2] = "workspace";
  })(tt || (tt = {}));
  var bn;
  (function(n) {
    function e(t) {
      return t instanceof Le.Uri ? t.toString() : t.uri.toString();
    }
    n.asKey = e;
  })(bn || (bn = {}));
  var Vl = class {
    documentPullStates;
    workspacePullStates;
    constructor() {
      this.documentPullStates = /* @__PURE__ */ new Map(), this.workspacePullStates = /* @__PURE__ */ new Map();
    }
    track(e, t, r) {
      let i = e === tt.document ? this.documentPullStates : this.workspacePullStates, [s, o, a] = t instanceof Le.Uri ? [t.toString(), t, r] : [t.uri.toString(), t.uri, t.version], c = i.get(s);
      return c === void 0 && (c = { document: o, pulledVersion: a, resultId: void 0 }, i.set(s, c)), c;
    }
    update(e, t, r, i) {
      let s = e === tt.document ? this.documentPullStates : this.workspacePullStates, [o, a, c, l] = t instanceof Le.Uri ? [t.toString(), t, r, i] : [t.uri.toString(), t.uri, t.version, r], d = s.get(o);
      d === void 0 ? (d = { document: a, pulledVersion: c, resultId: l }, s.set(o, d)) : (d.pulledVersion = c, d.resultId = l);
    }
    unTrack(e, t) {
      let r = bn.asKey(t);
      (e === tt.document ? this.documentPullStates : this.workspacePullStates).delete(r);
    }
    tracks(e, t) {
      let r = bn.asKey(t);
      return (e === tt.document ? this.documentPullStates : this.workspacePullStates).has(r);
    }
    tracksSameVersion(e, t) {
      let r = t.uri.toString(), s = (e === tt.document ? this.documentPullStates : this.workspacePullStates).get(r);
      return s !== void 0 && s.pulledVersion === t.version;
    }
    getResultId(e, t) {
      let r = bn.asKey(t);
      return (e === tt.document ? this.documentPullStates : this.workspacePullStates).get(r)?.resultId;
    }
    getAllResultIds() {
      let e = [];
      for (let [t, r] of this.workspacePullStates) this.documentPullStates.has(t) && (r = this.documentPullStates.get(t)), r.resultId !== void 0 && e.push({ uri: t, value: r.resultId });
      return e;
    }
  }, Xl = class {
    isDisposed;
    client;
    visibleDocuments;
    options;
    onDidChangeDiagnosticsEmitter;
    provider;
    diagnostics;
    openRequests;
    pendingDocumentForgets;
    documentStates;
    workspaceErrorCounter;
    workspaceCancellation;
    workspaceTimeout;
    constructor(e, t, r) {
      this.client = e, this.visibleDocuments = t, this.options = r, this.isDisposed = false, this.onDidChangeDiagnosticsEmitter = new Le.EventEmitter(), this.provider = this.createProvider(), this.diagnostics = this.createDiagnosticCollection(), this.openRequests = /* @__PURE__ */ new Map(), this.pendingDocumentForgets = /* @__PURE__ */ new Map(), this.documentStates = new Vl(), this.workspaceErrorCounter = 0;
    }
    createDiagnosticCollection() {
      return this.client.clientOptions.diagnosticCollectionProvider === void 0 ? Le.languages.createDiagnosticCollection(this.options.identifier) : this.client.clientOptions.diagnosticCollectionProvider.create(this.options.identifier, ws.DiagnosticCollectionSource.pull);
    }
    knows(e, t) {
      let r = t instanceof Le.Uri ? t : t.uri;
      return this.documentStates.tracks(e, t) || this.openRequests.has(r.toString());
    }
    knowsSameVersion(e, t) {
      let r = this.openRequests.get(t.uri.toString());
      return r === void 0 ? this.documentStates.tracksSameVersion(e, t) : r.state === lt.reschedule ? true : r.state === lt.outDated ? false : r.version === t.version;
    }
    forget(e, t) {
      this.documentStates.unTrack(e, t);
    }
    cancelPendingForget(e) {
      this.pendingDocumentForgets.delete(bn.asKey(e));
    }
    pull(e, t) {
      if (this.isDisposed) return;
      let r = e instanceof Le.Uri ? e : e.uri;
      this.pullAsync(e).then(() => {
        t && t();
      }, (i) => {
        this.client.error(`Document pull failed for text document ${r.toString()}`, i, false);
      });
    }
    async pullAsync(e, t) {
      if (this.isDisposed) return;
      let r = e instanceof Le.Uri, i = r ? e : e.uri, s = i.toString();
      t = r ? t : e.version;
      let o = this.openRequests.get(s), a = r ? this.documentStates.track(tt.document, e, t) : this.documentStates.track(tt.document, e);
      if (o === void 0) {
        let c = new Le.CancellationTokenSource();
        this.openRequests.set(s, { state: lt.active, document: e, version: t, tokenSource: c });
        let l, d;
        try {
          l = await this.provider.provideDiagnostics(e, a.resultId, c.token) ?? { kind: Ut.DocumentDiagnosticReportKind.full, items: [] };
        } catch (p) {
          if (p instanceof ws.LSPCancellationError && Ae.DiagnosticServerCancellationData.is(p.data) && p.data.retriggerRequest === false && (d = { state: lt.outDated, document: e }), d === void 0 && p instanceof Le.CancellationError) d = { state: lt.reschedule, document: e };
          else throw p;
        }
        if (d = d ?? this.openRequests.get(s), d === void 0) {
          this.client.error(`Lost request state in diagnostic pull model. Clearing diagnostics for ${s}`), this.diagnostics.delete(i);
          return;
        }
        if (this.openRequests.delete(s), !this.visibleDocuments.isVisible(e)) {
          this.documentStates.unTrack(tt.document, e);
          return;
        }
        if (d.state === lt.outDated) return;
        l !== void 0 && (l.kind === Ut.DocumentDiagnosticReportKind.full && this.diagnostics.set(i, l.items), a.pulledVersion = t, a.resultId = l.resultId), d.state === lt.reschedule && this.pull(e);
      } else o.state === lt.active ? (o.tokenSource.cancel(), this.openRequests.set(s, { state: lt.reschedule, document: o.document })) : o.state === lt.outDated && this.openRequests.set(s, { state: lt.reschedule, document: o.document });
    }
    forgetDocument(e) {
      if (this.isDisposed) return;
      let t = e instanceof Le.Uri ? e : e.uri, r = t.toString(), i = this.openRequests.get(r);
      if (this.options.workspaceDiagnostics && t.scheme !== "untitled") {
        if (i !== void 0) this.openRequests.set(r, { state: lt.reschedule, document: e });
        else {
          let s = /* @__PURE__ */ Symbol();
          this.pendingDocumentForgets.set(r, s), this.pull(e, () => {
            this.pendingDocumentForgets.get(r) === s && (this.pendingDocumentForgets.delete(r), this.forget(tt.document, e));
          });
        }
        this.forget(tt.workspace, e);
      } else i !== void 0 && (i.state === lt.active && i.tokenSource.cancel(), this.openRequests.set(r, { state: lt.outDated, document: e })), this.diagnostics.delete(t), this.forget(tt.document, e);
    }
    pullWorkspace() {
      this.isDisposed || this.pullWorkspaceAsync().then(() => {
        this.workspaceTimeout = (0, Ae.RAL)().timer.setTimeout(() => {
          this.pullWorkspace();
        }, 2e3);
      }, (e) => {
        !(e instanceof ws.LSPCancellationError) && !Ae.DiagnosticServerCancellationData.is(e.data) && (this.client.error("Workspace diagnostic pull failed.", e, false), this.workspaceErrorCounter++), this.workspaceErrorCounter <= 5 && (this.workspaceTimeout = (0, Ae.RAL)().timer.setTimeout(() => {
          this.pullWorkspace();
        }, 2e3));
      });
    }
    async pullWorkspaceAsync() {
      if (!this.provider.provideWorkspaceDiagnostics || this.isDisposed) return;
      this.workspaceCancellation !== void 0 && (this.workspaceCancellation.cancel(), this.workspaceCancellation = void 0), this.workspaceCancellation = new Le.CancellationTokenSource();
      let e = this.documentStates.getAllResultIds().map((t) => ({ uri: this.client.protocol2CodeConverter.asUri(t.uri), value: t.value }));
      await this.provider.provideWorkspaceDiagnostics(e, this.workspaceCancellation.token, (t) => {
        if (!(!t || this.isDisposed)) for (let r of t.items) r.kind === Ut.DocumentDiagnosticReportKind.full && (this.documentStates.tracks(tt.document, r.uri) || this.diagnostics.set(r.uri, r.items)), this.documentStates.update(tt.workspace, r.uri, r.version ?? void 0, r.resultId);
      });
    }
    createProvider() {
      let e = { onDidChangeDiagnostics: this.onDidChangeDiagnosticsEmitter.event, provideDiagnostics: (t, r, i) => {
        let s = (a, c, l) => {
          let d = { identifier: this.options.identifier, textDocument: { uri: this.client.code2ProtocolConverter.asUri(a instanceof Le.Uri ? a : a.uri) }, previousResultId: c };
          return this.isDisposed === true || !this.client.isRunning() ? { kind: Ut.DocumentDiagnosticReportKind.full, items: [] } : this.client.sendRequest(Ae.DocumentDiagnosticRequest.type, d, l).then(async (p) => {
            if (this.isDisposed) return { kind: Ut.DocumentDiagnosticReportKind.full, items: [] };
            if (l.isCancellationRequested) throw new Le.CancellationError();
            return p == null ? { kind: Ut.DocumentDiagnosticReportKind.full, items: [] } : p.kind === Ae.DocumentDiagnosticReportKind.Full ? { kind: Ut.DocumentDiagnosticReportKind.full, resultId: p.resultId, items: await this.client.protocol2CodeConverter.asDiagnostics(p.items, l) } : { kind: Ut.DocumentDiagnosticReportKind.unChanged, resultId: p.resultId };
          }, (p) => this.client.handleFailedRequest(Ae.DocumentDiagnosticRequest.type, l, p, { kind: Ut.DocumentDiagnosticReportKind.full, items: [] }, true, true));
        }, o = this.client.middleware;
        return o.provideDiagnostics ? o.provideDiagnostics(t, r, i, s) : s(t, r, i);
      } };
      return this.options.workspaceDiagnostics && (e.provideWorkspaceDiagnostics = (t, r, i) => {
        let s = async (l) => l.kind === Ae.DocumentDiagnosticReportKind.Full ? { kind: Ut.DocumentDiagnosticReportKind.full, uri: this.client.protocol2CodeConverter.asUri(l.uri), resultId: l.resultId, version: l.version, items: await this.client.protocol2CodeConverter.asDiagnostics(l.items, r) } : { kind: Ut.DocumentDiagnosticReportKind.unChanged, uri: this.client.protocol2CodeConverter.asUri(l.uri), resultId: l.resultId, version: l.version }, o = (l) => {
          let d = [];
          for (let p of l) d.push({ uri: this.client.code2ProtocolConverter.asUri(p.uri), value: p.value });
          return d;
        }, a = (l, d, p) => {
          let h = (0, fD.generateUuid)(), m = this.client.onProgress(Ae.WorkspaceDiagnosticRequest.partialResult, h, async (y) => {
            if (y == null) {
              p(null);
              return;
            }
            let T = { items: [] };
            for (let R of y.items) try {
              T.items.push(await s(R));
            } catch (v) {
              this.client.error("Converting workspace diagnostics failed.", v);
            }
            p(T);
          }), g = { identifier: this.options.identifier, previousResultIds: o(l), partialResultToken: h };
          return this.isDisposed === true || !this.client.isRunning() ? { items: [] } : this.client.sendRequest(Ae.WorkspaceDiagnosticRequest.type, g, d).then(async (y) => {
            if (d.isCancellationRequested) return { items: [] };
            let T = { items: [] };
            for (let R of y.items) T.items.push(await s(R));
            return m.dispose(), p(T), { items: [] };
          }, (y) => (m.dispose(), this.client.handleFailedRequest(Ae.DocumentDiagnosticRequest.type, d, y, { items: [] })));
        }, c = this.client.middleware;
        return c.provideWorkspaceDiagnostics ? c.provideWorkspaceDiagnostics(t, r, i, a) : a(t, r, i);
      }), e;
    }
    dispose() {
      this.isDisposed = true, this.workspaceCancellation?.cancel(), this.workspaceTimeout?.dispose();
      for (let [e, t] of this.openRequests) t.state === lt.active && t.tokenSource.cancel(), this.openRequests.set(e, { state: lt.outDated, document: t.document });
      this.client.clientOptions.diagnosticCollectionProvider !== void 0 ? this.client.clientOptions.diagnosticCollectionProvider.dispose(this.diagnostics, ws.DiagnosticCollectionSource.pull) : this.diagnostics.dispose();
    }
  }, Jl = class {
    client;
    diagnosticRequestor;
    lastDocumentToPull;
    documents;
    timeoutHandle;
    isDisposed;
    constructor(e, t) {
      this.client = e, this.diagnosticRequestor = t, this.documents = new Ae.LinkedMap(), this.isDisposed = false;
    }
    add(e) {
      if (this.isDisposed === true) return;
      let t = bn.asKey(e);
      this.documents.has(t) || (this.documents.set(t, e, Ae.Touch.Last), this.lastDocumentToPull = e);
    }
    remove(e) {
      let t = bn.asKey(e);
      if (this.documents.delete(t), this.documents.size === 0) {
        this.stop();
        return;
      } else if (t === this.lastDocumentToPullKey()) {
        let r = this.documents.before(t);
        r === void 0 ? this.stop() : this.lastDocumentToPull = r;
      }
    }
    trigger() {
      this.lastDocumentToPull = this.documents.last, this.runLoop();
    }
    runLoop() {
      if (this.isDisposed !== true) {
        if (this.documents.size === 0) {
          this.stop();
          return;
        }
        this.lastDocumentToPull !== void 0 && this.timeoutHandle === void 0 && (this.timeoutHandle = (0, Ae.RAL)().timer.setTimeout(() => {
          let e = this.documents.first;
          if (e === void 0) return;
          let t = bn.asKey(e);
          this.diagnosticRequestor.pullAsync(e).catch((r) => {
            this.client.error(`Document pull failed for text document ${t}`, r, false);
          }).finally(() => {
            this.timeoutHandle = void 0, this.documents.set(t, e, Ae.Touch.Last), t !== this.lastDocumentToPullKey() && this.runLoop();
          });
        }, 500));
      }
    }
    dispose() {
      this.isDisposed = true, this.stop(), this.documents.clear(), this.lastDocumentToPull = void 0;
    }
    stop() {
      this.timeoutHandle?.dispose(), this.timeoutHandle = void 0, this.lastDocumentToPull = void 0;
    }
    lastDocumentToPullKey() {
      return this.lastDocumentToPull !== void 0 ? bn.asKey(this.lastDocumentToPull) : void 0;
    }
  }, Ql = class {
    disposable;
    diagnosticRequestor;
    activeTextDocument;
    backgroundScheduler;
    constructor(e, t, r) {
      let i = Object.assign({ onChange: false, onSave: false, onFocus: false }, e.clientOptions.diagnosticPullOptions), s = e.protocol2CodeConverter.asDocumentSelector(r.documentSelector), o = [], a = (v, D) => !(typeof v == "string" || v.language !== void 0 && v.language !== "*" || v.scheme !== void 0 && v.scheme !== "*" && v.scheme !== D.scheme || v.pattern !== void 0 && !(0, hD.matchGlobPattern)(v.pattern, D)), c = (v) => {
        let D = r.documentSelector;
        if (i.match !== void 0) return i.match(D, v);
        for (let A of D) if (Ae.TextDocumentFilter.is(A) && a(A, v)) return true;
        return false;
      }, l = (v) => v instanceof Le.Uri ? c(v) : Le.languages.match(s, v) > 0 && t.isVisible(v), d = (v) => Le.languages.match(s, v.document) > 0 && t.isVisible(v.notebook.uri), p = (v) => v instanceof Le.Uri ? this.activeTextDocument?.uri.toString() === v.toString() : this.activeTextDocument === v;
      this.diagnosticRequestor = new Xl(e, t, r), this.backgroundScheduler = new Jl(e, this.diagnosticRequestor);
      let h = (v) => {
        !l(v) || !r.interFileDependencies || p(v) || i.onChange === false || this.backgroundScheduler.add(v);
      }, m = (v, D) => (i.filter === void 0 || !i.filter(v, D)) && this.diagnosticRequestor.knows(tt.document, v);
      this.activeTextDocument = Le.window.activeTextEditor?.document, o.push(Le.window.onDidChangeActiveTextEditor((v) => {
        let D = this.activeTextDocument;
        this.activeTextDocument = v?.document, D !== void 0 && h(D), this.activeTextDocument !== void 0 && (this.backgroundScheduler.remove(this.activeTextDocument), i.onFocus === true && l(this.activeTextDocument) && m(this.activeTextDocument, Ss.onFocus) && this.diagnosticRequestor.pull(this.activeTextDocument));
      }));
      let g = e.getFeature(Ae.DidOpenTextDocumentNotification.method);
      o.push(g.onNotificationSent((v) => {
        let D = v.textDocument;
        if (l(D)) {
          if (this.diagnosticRequestor.cancelPendingForget(D), this.diagnosticRequestor.knowsSameVersion(tt.document, D)) return;
          this.diagnosticRequestor.pull(D, () => {
            h(D);
          });
        }
      }));
      let y = e.getFeature(Ae.NotebookDocumentSyncRegistrationType.method);
      o.push(y.onOpenNotificationSent((v) => {
        for (let D of v.getCells()) d(D) && (this.diagnosticRequestor.cancelPendingForget(D.document), this.diagnosticRequestor.pull(D.document, () => {
          h(D.document);
        }));
      })), o.push(t.onOpen((v) => {
        for (let D of v) {
          if (this.diagnosticRequestor.knows(tt.document, D)) continue;
          let A = D.toString(), x;
          for (let w of Le.workspace.textDocuments) if (A === w.uri.toString()) {
            x = w;
            break;
          }
          x !== void 0 && l(x) && this.diagnosticRequestor.pull(x, () => {
            h(x);
          });
        }
      }));
      let T = /* @__PURE__ */ new Set();
      for (let v of Le.workspace.textDocuments) l(v) && (this.diagnosticRequestor.pull(v, () => {
        h(v);
      }), T.add(v.uri.toString()));
      for (let v of Le.workspace.notebookDocuments) for (let D of v.getCells()) d(D) && (this.diagnosticRequestor.pull(D.document, () => {
        h(D.document);
      }), T.add(D.document.uri.toString()));
      if (i.onTabs === true) for (let v of t.getResources()) !T.has(v.toString()) && l(v) && this.diagnosticRequestor.pull(v, () => {
        h(v);
      });
      if (i.onChange === true) {
        let v = e.getFeature(Ae.DidChangeTextDocumentNotification.method);
        o.push(v.onNotificationSent(async (D) => {
          let A = D.textDocument;
          m(A, Ss.onType) && this.diagnosticRequestor.pull(A, () => {
            this.backgroundScheduler.trigger();
          });
        })), o.push(y.onChangeNotificationSent(async (D) => {
          let x = (D.cells?.textContent || []).map((q) => D.notebook.getCells().find((H) => H.document.uri.toString() === q.document.uri.toString()));
          for (let q of x) q && d(q) && this.diagnosticRequestor.pull(q.document, () => {
            this.backgroundScheduler.trigger();
          });
          let w = D.cells?.structure?.didClose || [];
          for (let q of w) this.diagnosticRequestor.forgetDocument(q.document);
          let S = D.cells?.structure?.didOpen || [];
          for (let q of S) d(q) && this.diagnosticRequestor.pull(q.document, () => {
            this.backgroundScheduler.trigger();
          });
        }));
      }
      if (i.onSave === true) {
        let v = e.getFeature(Ae.DidSaveTextDocumentNotification.method);
        o.push(v.onNotificationSent((D) => {
          let A = D.textDocument;
          m(A, Ss.onSave) && this.diagnosticRequestor.pull(D.textDocument);
        })), o.push(y.onSaveNotificationSent((D) => {
          for (let A of D.getCells()) d(A) && this.diagnosticRequestor.pull(A.document);
        }));
      }
      let R = e.getFeature(Ae.DidCloseTextDocumentNotification.method);
      o.push(R.onAboutToSendNotification((v) => {
        this.cleanUpDocument(v.textDocument);
      })), o.push(y.onCloseNotificationSent((v) => {
        for (let D of v.getCells()) this.cleanUpDocument(D.document);
      })), o.push(t.onClose((v) => {
        for (let D of v) this.cleanUpDocument(D);
      })), this.diagnosticRequestor.onDidChangeDiagnosticsEmitter.event(() => {
        for (let v of Le.workspace.textDocuments) l(v) && this.diagnosticRequestor.pull(v);
      }), r.workspaceDiagnostics === true && r.identifier !== "da348dc5-c30a-4515-9d98-31ff3be38d14" && this.diagnosticRequestor.pullWorkspace(), this.disposable = Le.Disposable.from(...o, this.backgroundScheduler, this.diagnosticRequestor);
    }
    get onDidChangeDiagnosticsEmitter() {
      return this.diagnosticRequestor.onDidChangeDiagnosticsEmitter;
    }
    get diagnostics() {
      return this.diagnosticRequestor.provider;
    }
    forget(e) {
      this.cleanUpDocument(e);
    }
    cleanUpDocument(e) {
      this.backgroundScheduler.remove(e), this.diagnosticRequestor.knows(tt.document, e) && this.diagnosticRequestor.forgetDocument(e);
    }
  }, Yl = class extends ws.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Ae.DocumentDiagnosticRequest.type);
    }
    fillClientCapabilities(e) {
      let t = Xo(Xo(e, "textDocument"), "diagnostic");
      t.relatedInformation = true, t.tagSupport = { valueSet: [Ae.DiagnosticTag.Unnecessary, Ae.DiagnosticTag.Deprecated] }, t.codeDescriptionSupport = true, t.dataSupport = true, t.dynamicRegistration = true, t.relatedDocumentSupport = false, t.markupMessageSupport = false, Xo(Xo(e, "workspace"), "diagnostics").refreshSupport = true;
    }
    initialize(e, t) {
      this._client.onRequest(Ae.DiagnosticRefreshRequest.type, async () => {
        for (let o of this.getAllProviders()) o.onDidChangeDiagnosticsEmitter.fire();
      });
      let [i, s] = this.getRegistration(t, e.diagnosticProvider);
      !i || !s || this.register({ id: i, registerOptions: s });
    }
    clear() {
      super.clear();
    }
    refresh() {
      for (let e of this.getAllProviders()) e.onDidChangeDiagnosticsEmitter.fire();
    }
    registerLanguageProvider(e) {
      let t = new Ql(this._client, this._client.visibleDocuments, e);
      return [t.disposable, t];
    }
  };
  Nr.DiagnosticFeature = Yl;
});
var Jo = j((an) => {
  "use strict";
  Object.defineProperty(an, "__esModule", { value: true });
  an.Semaphore = an.Delayer = void 0;
  an.setTestMode = pD;
  an.clearTestMode = gD;
  an.map = mD;
  an.mapAsync = yD;
  an.forEach = _D;
  var Ps = ae(), ed = class {
    defaultDelay;
    timeout;
    completionPromise;
    onSuccess;
    task;
    constructor(e) {
      this.defaultDelay = e, this.timeout = void 0, this.completionPromise = void 0, this.onSuccess = void 0, this.task = void 0;
    }
    trigger(e, t = this.defaultDelay) {
      return this.task = e, t >= 0 && this.cancelTimeout(), this.completionPromise || (this.completionPromise = new Promise((r) => {
        this.onSuccess = r;
      }).then(() => {
        this.completionPromise = void 0, this.onSuccess = void 0;
        let r = this.task();
        return this.task = void 0, r;
      })), (t >= 0 || this.timeout === void 0) && (this.timeout = (0, Ps.RAL)().timer.setTimeout(() => {
        this.timeout = void 0, this.onSuccess(void 0);
      }, t >= 0 ? t : this.defaultDelay)), this.completionPromise;
    }
    forceDelivery() {
      if (!this.completionPromise) return;
      this.cancelTimeout();
      let e = this.task();
      return this.completionPromise = void 0, this.onSuccess = void 0, this.task = void 0, e;
    }
    isTriggered() {
      return this.timeout !== void 0;
    }
    cancel() {
      this.cancelTimeout(), this.completionPromise = void 0;
    }
    cancelTimeout() {
      this.timeout !== void 0 && (this.timeout.dispose(), this.timeout = void 0);
    }
  };
  an.Delayer = ed;
  var td = class {
    _capacity;
    _active;
    _waiting;
    constructor(e = 1) {
      if (e <= 0) throw new Error("Capacity must be greater than 0");
      this._capacity = e, this._active = 0, this._waiting = [];
    }
    lock(e) {
      return new Promise((t, r) => {
        this._waiting.push({ thunk: e, resolve: t, reject: r }), this.runNext();
      });
    }
    get active() {
      return this._active;
    }
    runNext() {
      this._waiting.length === 0 || this._active === this._capacity || (0, Ps.RAL)().timer.setImmediate(() => this.doRunNext());
    }
    doRunNext() {
      if (this._waiting.length === 0 || this._active === this._capacity) return;
      let e = this._waiting.shift();
      if (this._active++, this._active > this._capacity) throw new Error("To many thunks active");
      try {
        let t = e.thunk();
        t instanceof Promise ? t.then((r) => {
          this._active--, e.resolve(r), this.runNext();
        }, (r) => {
          this._active--, e.reject(r), this.runNext();
        }) : (this._active--, e.resolve(t), this.runNext());
      } catch (t) {
        this._active--, e.reject(t), this.runNext();
      }
    }
  };
  an.Semaphore = td;
  var nd = false;
  function pD() {
    nd = true;
  }
  function gD() {
    nd = false;
  }
  var Zy = 15, Ds = class {
    yieldAfter;
    startTime;
    counter;
    total;
    counterInterval;
    constructor(e = Zy) {
      this.yieldAfter = nd === true ? Math.max(e, 2) : Math.max(e, Zy), this.startTime = Date.now(), this.counter = 0, this.total = 0, this.counterInterval = 1;
    }
    start() {
      this.counter = 0, this.total = 0, this.counterInterval = 1, this.startTime = Date.now();
    }
    shouldYield() {
      if (++this.counter >= this.counterInterval) {
        let e = Date.now() - this.startTime, t = Math.max(0, this.yieldAfter - e);
        if (this.total += this.counter, this.counter = 0, e >= this.yieldAfter || t <= 1) return this.counterInterval = 1, this.total = 0, true;
        switch (e) {
          case 0:
          case 1:
            this.counterInterval = this.total * 2;
            break;
        }
      }
      return false;
    }
  };
  async function mD(n, e, t, r) {
    if (n.length === 0) return [];
    let i = new Array(n.length), s = new Ds(r?.yieldAfter);
    function o(c) {
      s.start();
      for (let l = c; l < n.length; l++) if (i[l] = e(n[l]), s.shouldYield()) return r?.yieldCallback && r.yieldCallback(), l + 1;
      return -1;
    }
    let a = o(0);
    for (; a !== -1 && !(t !== void 0 && t.isCancellationRequested); ) a = await new Promise((c) => {
      (0, Ps.RAL)().timer.setImmediate(() => {
        t !== void 0 && t.isCancellationRequested ? c(-1) : c(o(a));
      });
    });
    return i;
  }
  async function yD(n, e, t, r) {
    if (n.length === 0) return [];
    let i = new Array(n.length), s = new Ds(r?.yieldAfter);
    async function o(c) {
      s.start();
      for (let l = c; l < n.length; l++) if (i[l] = await e(n[l], t), s.shouldYield()) return r?.yieldCallback && r.yieldCallback(), l + 1;
      return -1;
    }
    let a = await o(0);
    for (; a !== -1 && !(t !== void 0 && t.isCancellationRequested); ) a = await new Promise((c) => {
      (0, Ps.RAL)().timer.setImmediate(() => {
        t !== void 0 && t.isCancellationRequested ? c(-1) : c(o(a));
      });
    });
    return i;
  }
  async function _D(n, e, t, r) {
    if (n.length === 0) return;
    let i = new Ds(r?.yieldAfter);
    function s(a) {
      i.start();
      for (let c = a; c < n.length; c++) if (e(n[c]), i.shouldYield()) return r?.yieldCallback && r.yieldCallback(), c + 1;
      return -1;
    }
    let o = s(0);
    for (; o !== -1 && !(t !== void 0 && t.isCancellationRequested); ) o = await new Promise((a) => {
      (0, Ps.RAL)().timer.setImmediate(() => {
        t !== void 0 && t.isCancellationRequested ? a(-1) : a(s(o));
      });
    });
  }
});
var id = j((er) => {
  "use strict";
  var vD = er && er.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), bD = er && er.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), CD = er && er.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && vD(t, e, r[i]);
      return bD(t, e), t;
    };
  })();
  Object.defineProperty(er, "__esModule", { value: true });
  var wD = CD(require("vscode")), rd = class extends wD.CompletionItem {
    data;
    fromEdit;
    documentationFormat;
    originalItemKind;
    deprecated;
    insertTextMode;
    constructor(e) {
      super(e);
    }
  };
  er.default = rd;
});
var od = j((tr) => {
  "use strict";
  var SD = tr && tr.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), DD = tr && tr.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), PD = tr && tr.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && SD(t, e, r[i]);
      return DD(t, e), t;
    };
  })();
  Object.defineProperty(tr, "__esModule", { value: true });
  var RD = PD(require("vscode")), sd = class extends RD.CodeLens {
    data;
    constructor(e) {
      super(e);
    }
  };
  tr.default = sd;
});
var cd = j((nr) => {
  "use strict";
  var TD = nr && nr.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), OD = nr && nr.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), ED = nr && nr.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && TD(t, e, r[i]);
      return OD(t, e), t;
    };
  })();
  Object.defineProperty(nr, "__esModule", { value: true });
  var xD = ED(require("vscode")), ad = class extends xD.DocumentLink {
    data;
    constructor(e, t) {
      super(e, t);
    }
  };
  nr.default = ad;
});
var ld = j((rr) => {
  "use strict";
  var qD = rr && rr.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), MD = rr && rr.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), jD = rr && rr.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && qD(t, e, r[i]);
      return MD(t, e), t;
    };
  })();
  Object.defineProperty(rr, "__esModule", { value: true });
  var ID = jD(require("vscode")), ud = class extends ID.CodeAction {
    data;
    constructor(e, t) {
      super(e), this.data = t;
    }
  };
  rr.default = ud;
});
var hd = j((Zt) => {
  "use strict";
  var ND = Zt && Zt.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), FD = Zt && Zt.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), t_ = Zt && Zt.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && ND(t, e, r[i]);
      return FD(t, e), t;
    };
  })();
  Object.defineProperty(Zt, "__esModule", { value: true });
  Zt.ProtocolDiagnostic = Zt.DiagnosticCode = void 0;
  var LD = t_(require("vscode")), dd = t_(Qt()), e_;
  (function(n) {
    function e(t) {
      let r = t;
      return r != null && (dd.number(r.value) || dd.string(r.value)) && dd.string(r.target);
    }
    n.is = e;
  })(e_ || (Zt.DiagnosticCode = e_ = {}));
  var fd = class extends LD.Diagnostic {
    data;
    hasDiagnosticCode;
    constructor(e, t, r, i) {
      super(e, t, r), this.data = i, this.hasDiagnosticCode = false;
    }
  };
  Zt.ProtocolDiagnostic = fd;
});
var gd = j((ir) => {
  "use strict";
  var AD = ir && ir.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), kD = ir && ir.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), $D = ir && ir.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && AD(t, e, r[i]);
      return kD(t, e), t;
    };
  })();
  Object.defineProperty(ir, "__esModule", { value: true });
  var HD = $D(require("vscode")), pd = class extends HD.CallHierarchyItem {
    data;
    constructor(e, t, r, i, s, o, a) {
      super(e, t, r, i, s, o), a !== void 0 && (this.data = a);
    }
  };
  ir.default = pd;
});
var yd = j((sr) => {
  "use strict";
  var UD = sr && sr.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), WD = sr && sr.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), zD = sr && sr.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && UD(t, e, r[i]);
      return WD(t, e), t;
    };
  })();
  Object.defineProperty(sr, "__esModule", { value: true });
  var KD = zD(require("vscode")), md = class extends KD.TypeHierarchyItem {
    data;
    constructor(e, t, r, i, s, o, a) {
      super(e, t, r, i, s, o), a !== void 0 && (this.data = a);
    }
  };
  sr.default = md;
});
var vd = j((or) => {
  "use strict";
  var BD = or && or.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), GD = or && or.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), VD = or && or.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && BD(t, e, r[i]);
      return GD(t, e), t;
    };
  })();
  Object.defineProperty(or, "__esModule", { value: true });
  var Qo = VD(require("vscode")), _d = class extends Qo.SymbolInformation {
    data;
    hasRange;
    constructor(e, t, r, i, s) {
      let o = !(i instanceof Qo.Uri);
      super(e, t, r, o ? i : new Qo.Location(i, new Qo.Range(0, 0, 0, 0))), this.hasRange = o, s !== void 0 && (this.data = s);
    }
  };
  or.default = _d;
});
var Cd = j((ar) => {
  "use strict";
  var XD = ar && ar.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), JD = ar && ar.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), QD = ar && ar.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && XD(t, e, r[i]);
      return JD(t, e), t;
    };
  })();
  Object.defineProperty(ar, "__esModule", { value: true });
  var YD = QD(require("vscode")), bd = class extends YD.InlayHint {
    data;
    constructor(e, t, r) {
      super(e, t, r);
    }
  };
  ar.default = bd;
});
var s_ = j((cn) => {
  "use strict";
  var ZD = cn && cn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), eP = cn && cn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), Yo = cn && cn.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && ZD(t, e, r[i]);
      return eP(t, e), t;
    };
  })(), Fr = cn && cn.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(cn, "__esModule", { value: true });
  cn.createConverter = cP;
  var Xe = Yo(require("vscode")), se = Yo(ae()), Qr = Yo(Qt()), n_ = Yo(Jo()), tP = Fr(id()), nP = Fr(od()), rP = Fr(cd()), r_ = Fr(ld()), i_ = hd(), iP = Fr(gd()), sP = Fr(yd()), oP = Fr(vd()), aP = Fr(Cd()), wd;
  (function(n) {
    function e(t) {
      let r = t;
      return r && !!r.inserting && !!r.replacing;
    }
    n.is = e;
  })(wd || (wd = {}));
  function cP(n) {
    let t = n || ((f) => f.toString());
    function r(f) {
      return t(f);
    }
    function i(f) {
      return { uri: t(f.uri) };
    }
    function s(f) {
      return { uri: t(f.uri), languageId: f.languageId, version: f.version, text: f.getText() };
    }
    function o(f) {
      return { uri: t(f.uri), version: f.version };
    }
    function a(f) {
      return { textDocument: s(f) };
    }
    function c(f) {
      let E = f;
      return !!E.document && !!E.contentChanges;
    }
    function l(f) {
      let E = f;
      return !!E.uri && !!E.version;
    }
    function d(f, E, J) {
      if (l(f)) return { textDocument: { uri: t(f.uri), version: f.version }, contentChanges: [{ text: f.getText() }] };
      if (c(f)) {
        let Ee = E, we = J;
        return { textDocument: { uri: t(Ee), version: we }, contentChanges: f.contentChanges.map((Mt) => {
          let zn = Mt.range;
          return { range: { start: { line: zn.start.line, character: zn.start.character }, end: { line: zn.end.line, character: zn.end.character } }, rangeLength: Mt.rangeLength, text: Mt.text };
        }) };
      } else throw Error("Unsupported text document change parameter");
    }
    function p(f) {
      return { textDocument: i(f) };
    }
    function h(f, E = false) {
      let J = { textDocument: i(f) };
      return E && (J.text = f.getText()), J;
    }
    function m(f) {
      switch (f) {
        case Xe.TextDocumentSaveReason.Manual:
          return se.TextDocumentSaveReason.Manual;
        case Xe.TextDocumentSaveReason.AfterDelay:
          return se.TextDocumentSaveReason.AfterDelay;
        case Xe.TextDocumentSaveReason.FocusOut:
          return se.TextDocumentSaveReason.FocusOut;
      }
      return se.TextDocumentSaveReason.Manual;
    }
    function g(f) {
      return { textDocument: i(f.document), reason: m(f.reason) };
    }
    function y(f) {
      return { files: f.files.map((E) => ({ uri: t(E) })) };
    }
    function T(f) {
      return { files: f.files.map((E) => ({ oldUri: t(E.oldUri), newUri: t(E.newUri) })) };
    }
    function R(f) {
      return { files: f.files.map((E) => ({ uri: t(E) })) };
    }
    function v(f) {
      return { files: f.files.map((E) => ({ uri: t(E) })) };
    }
    function D(f) {
      return { files: f.files.map((E) => ({ oldUri: t(E.oldUri), newUri: t(E.newUri) })) };
    }
    function A(f) {
      return { files: f.files.map((E) => ({ uri: t(E) })) };
    }
    function x(f, E) {
      return { textDocument: i(f), position: ce(E) };
    }
    function w(f) {
      switch (f) {
        case Xe.CompletionTriggerKind.TriggerCharacter:
          return se.CompletionTriggerKind.TriggerCharacter;
        case Xe.CompletionTriggerKind.TriggerForIncompleteCompletions:
          return se.CompletionTriggerKind.TriggerForIncompleteCompletions;
        default:
          return se.CompletionTriggerKind.Invoked;
      }
    }
    function S(f, E, J) {
      return { textDocument: i(f), position: ce(E), context: { triggerKind: w(J.triggerKind), triggerCharacter: J.triggerCharacter } };
    }
    function q(f) {
      switch (f) {
        case Xe.SignatureHelpTriggerKind.Invoke:
          return se.SignatureHelpTriggerKind.Invoked;
        case Xe.SignatureHelpTriggerKind.TriggerCharacter:
          return se.SignatureHelpTriggerKind.TriggerCharacter;
        case Xe.SignatureHelpTriggerKind.ContentChange:
          return se.SignatureHelpTriggerKind.ContentChange;
      }
    }
    function H(f) {
      return { label: f.label };
    }
    function O(f) {
      return f.map(H);
    }
    function F(f) {
      return { label: f.label, parameters: O(f.parameters) };
    }
    function $(f) {
      return f.map(F);
    }
    function K(f) {
      return f === void 0 ? f : { signatures: $(f.signatures), activeSignature: f.activeSignature, activeParameter: f.activeParameter };
    }
    function ee(f, E, J) {
      return { textDocument: i(f), position: ce(E), context: { isRetrigger: J.isRetrigger, triggerCharacter: J.triggerCharacter, triggerKind: q(J.triggerKind), activeSignatureHelp: K(J.activeSignatureHelp) } };
    }
    function ce(f) {
      return { line: f.line, character: f.character };
    }
    function ue(f) {
      return f == null ? f : { line: f.line > se.uinteger.MAX_VALUE ? se.uinteger.MAX_VALUE : f.line, character: f.character > se.uinteger.MAX_VALUE ? se.uinteger.MAX_VALUE : f.character };
    }
    function te(f, E) {
      return n_.map(f, ue, E);
    }
    function pe(f) {
      return f.map(ue);
    }
    function ie(f) {
      return f == null ? f : { start: ue(f.start), end: ue(f.end) };
    }
    function ft(f) {
      return f.map(ie);
    }
    function ht(f) {
      return f == null ? f : se.Location.create(r(f.uri), ie(f.range));
    }
    function hn(f) {
      switch (f) {
        case Xe.DiagnosticSeverity.Error:
          return se.DiagnosticSeverity.Error;
        case Xe.DiagnosticSeverity.Warning:
          return se.DiagnosticSeverity.Warning;
        case Xe.DiagnosticSeverity.Information:
          return se.DiagnosticSeverity.Information;
        case Xe.DiagnosticSeverity.Hint:
          return se.DiagnosticSeverity.Hint;
      }
    }
    function $n(f) {
      if (!f) return;
      let E = [];
      for (let J of f) {
        let Ee = pn(J);
        Ee !== void 0 && E.push(Ee);
      }
      return E.length > 0 ? E : void 0;
    }
    function pn(f) {
      switch (f) {
        case Xe.DiagnosticTag.Unnecessary:
          return se.DiagnosticTag.Unnecessary;
        case Xe.DiagnosticTag.Deprecated:
          return se.DiagnosticTag.Deprecated;
        default:
          return;
      }
    }
    function gn(f) {
      return { message: f.message, location: ht(f.location) };
    }
    function Wr(f) {
      return f.map(gn);
    }
    function ci(f) {
      if (f != null) return Qr.number(f) || Qr.string(f) ? f : { value: f.value, target: r(f.target) };
    }
    function mr(f) {
      let E = se.Diagnostic.create(ie(f.range), f.message), J = f instanceof i_.ProtocolDiagnostic ? f : void 0;
      J !== void 0 && J.data !== void 0 && (E.data = J.data);
      let Ee = ci(f.code);
      return i_.DiagnosticCode.is(Ee) ? J !== void 0 && J.hasDiagnosticCode ? E.code = Ee : (E.code = Ee.value, E.codeDescription = { href: Ee.target }) : E.code = Ee, Qr.number(f.severity) && (E.severity = hn(f.severity)), Array.isArray(f.tags) && (E.tags = $n(f.tags)), f.relatedInformation && (E.relatedInformation = Wr(f.relatedInformation)), f.source && (E.source = f.source), E;
    }
    function yr(f, E) {
      return f == null ? f : n_.map(f, mr, E);
    }
    function _r(f) {
      return f == null ? f : f.map(mr);
    }
    function Xi(f, E) {
      switch (f) {
        case "$string":
          return E;
        case se.MarkupKind.PlainText:
          return { kind: f, value: E };
        case se.MarkupKind.Markdown:
          return { kind: f, value: E.value };
        default:
          return `Unsupported Markup content received. Kind is: ${f}`;
      }
    }
    function ui(f) {
      switch (f) {
        case Xe.CompletionItemTag.Deprecated:
          return se.CompletionItemTag.Deprecated;
      }
    }
    function At(f) {
      if (f === void 0) return f;
      let E = [];
      for (let J of f) {
        let Ee = ui(J);
        Ee !== void 0 && E.push(Ee);
      }
      return E;
    }
    function Ji(f, E) {
      return E !== void 0 ? E : f + 1;
    }
    function mn(f, E = false) {
      let J, Ee;
      Qr.string(f.label) ? J = f.label : (J = f.label.label, E && (f.label.detail !== void 0 || f.label.description !== void 0) && (Ee = { detail: f.label.detail, description: f.label.description }));
      let we = { label: J };
      Ee !== void 0 && (we.labelDetails = Ee);
      let gt = f instanceof tP.default ? f : void 0;
      f.detail && (we.detail = f.detail), f.documentation && (!gt || gt.documentationFormat === "$string" ? we.documentation = f.documentation : we.documentation = Xi(gt.documentationFormat, f.documentation)), f.filterText && (we.filterText = f.filterText), vr(we, f), Qr.number(f.kind) && (we.kind = Ji(f.kind, gt && gt.originalItemKind)), f.sortText && (we.sortText = f.sortText), f.additionalTextEdits && (we.additionalTextEdits = li(f.additionalTextEdits)), f.commitCharacters && (we.commitCharacters = f.commitCharacters.slice()), f.command && (we.command = Ce(f.command)), (f.preselect === true || f.preselect === false) && (we.preselect = f.preselect);
      let Mt = At(f.tags);
      if (gt) {
        if (gt.data !== void 0 && (we.data = gt.data), gt.deprecated === true || gt.deprecated === false) {
          if (gt.deprecated === true && Mt !== void 0 && Mt.length > 0) {
            let zn = Mt.indexOf(Xe.CompletionItemTag.Deprecated);
            zn !== -1 && Mt.splice(zn, 1);
          }
          we.deprecated = gt.deprecated;
        }
        gt.insertTextMode !== void 0 && (we.insertTextMode = gt.insertTextMode);
      }
      return Mt !== void 0 && Mt.length > 0 && (we.tags = Mt), we.insertTextMode === void 0 && f.keepWhitespace === true && (we.insertTextMode = se.InsertTextMode.adjustIndentation), we;
    }
    function vr(f, E) {
      let J = se.InsertTextFormat.PlainText, Ee, we;
      E.textEdit ? (Ee = E.textEdit.newText, we = E.textEdit.range) : E.insertText instanceof Xe.SnippetString ? (J = se.InsertTextFormat.Snippet, Ee = E.insertText.value) : Ee = E.insertText, E.range && (we = E.range), f.insertTextFormat = J, E.fromEdit && Ee !== void 0 && we !== void 0 ? f.textEdit = br(Ee, we) : f.insertText = Ee;
    }
    function br(f, E) {
      return wd.is(E) ? se.InsertReplaceEdit.create(f, ie(E.inserting), ie(E.replacing)) : { newText: f, range: ie(E) };
    }
    function Hn(f) {
      return { range: ie(f.range), newText: f.newText };
    }
    function li(f) {
      return f == null ? f : f.map(Hn);
    }
    function yt(f) {
      return f <= Xe.SymbolKind.TypeParameter ? f + 1 : se.SymbolKind.Property;
    }
    function tn(f) {
      return f;
    }
    function _t(f) {
      return f.map(tn);
    }
    function Qi(f, E, J) {
      return { textDocument: i(f), position: ce(E), context: { includeDeclaration: J.includeDeclaration } };
    }
    async function pt(f, E) {
      let J = se.CodeAction.create(f.title);
      if (f instanceof r_.default && f.data !== void 0 && (J.data = f.data), f.kind !== void 0 && (J.kind = Gt(f.kind)), f.diagnostics !== void 0 && (J.diagnostics = await yr(f.diagnostics, E)), f.edit !== void 0) throw new Error("VS Code code actions can only be converted to a protocol code action without an edit.");
      return f.command !== void 0 && (J.command = Ce(f.command)), f.isPreferred !== void 0 && (J.isPreferred = f.isPreferred), f.disabled !== void 0 && (J.disabled = { reason: f.disabled.reason }), f.isAI && (J.tags ??= [], J.tags.push(se.CodeActionTag.LLMGenerated)), J;
    }
    function Un(f) {
      let E = se.CodeAction.create(f.title);
      if (f instanceof r_.default && f.data !== void 0 && (E.data = f.data), f.kind !== void 0 && (E.kind = Gt(f.kind)), f.diagnostics !== void 0 && (E.diagnostics = _r(f.diagnostics)), f.edit !== void 0) throw new Error("VS Code code actions can only be converted to a protocol code action without an edit.");
      return f.command !== void 0 && (E.command = Ce(f.command)), f.isPreferred !== void 0 && (E.isPreferred = f.isPreferred), f.disabled !== void 0 && (E.disabled = { reason: f.disabled.reason }), f.isAI && (E.tags ??= [], E.tags.push(se.CodeActionTag.LLMGenerated)), E;
    }
    async function di(f, E) {
      if (f == null) return f;
      let J;
      return f.only && Qr.string(f.only.value) && (J = [f.only.value]), se.CodeActionContext.create(await yr(f.diagnostics, E), J, Cr(f.triggerKind));
    }
    function zr(f) {
      if (f == null) return f;
      let E;
      return f.only && Qr.string(f.only.value) && (E = [f.only.value]), se.CodeActionContext.create(_r(f.diagnostics), E, Cr(f.triggerKind));
    }
    function Cr(f) {
      switch (f) {
        case Xe.CodeActionTriggerKind.Invoke:
          return se.CodeActionTriggerKind.Invoked;
        case Xe.CodeActionTriggerKind.Automatic:
          return se.CodeActionTriggerKind.Automatic;
        default:
          return;
      }
    }
    function Gt(f) {
      if (f != null) return f.value;
    }
    function b(f) {
      return se.InlineValueContext.create(f.frameId, ie(f.stoppedLocation));
    }
    function L(f, E, J) {
      return { textDocument: i(f), position: ue(E), context: U(J) };
    }
    function U(f) {
      return { triggerKind: Q(f.triggerKind), selectedCompletionInfo: ge(f.selectedCompletionInfo) };
    }
    function Q(f) {
      switch (f) {
        case Xe.InlineCompletionTriggerKind.Invoke:
          return se.InlineCompletionTriggerKind.Invoked;
        case Xe.InlineCompletionTriggerKind.Automatic:
          return se.InlineCompletionTriggerKind.Automatic;
      }
    }
    function ge(f) {
      if (f != null) return { range: ie(f.range), text: f.text };
    }
    function Ce(f) {
      let E = se.Command.create(f.title, f.command);
      return f.tooltip && (E.tooltip = f.tooltip), f.arguments && (E.arguments = f.arguments), E;
    }
    function ve(f) {
      let E = se.CodeLens.create(ie(f.range));
      return f.command && (E.command = Ce(f.command)), f instanceof nP.default && f.data && (E.data = f.data), E;
    }
    function He(f, E) {
      let J = { tabSize: f.tabSize, insertSpaces: f.insertSpaces };
      return E.trimTrailingWhitespace && (J.trimTrailingWhitespace = true), E.trimFinalNewlines && (J.trimFinalNewlines = true), E.insertFinalNewline && (J.insertFinalNewline = true), J;
    }
    function Ye(f) {
      return { textDocument: i(f) };
    }
    function Oe(f) {
      return { textDocument: i(f) };
    }
    function Me(f) {
      let E = se.DocumentLink.create(ie(f.range));
      f.target && (E.target = r(f.target)), f.tooltip !== void 0 && (E.tooltip = f.tooltip);
      let J = f instanceof rP.default ? f : void 0;
      return J && J.data && (E.data = J.data), E;
    }
    function vt(f) {
      return { textDocument: i(f) };
    }
    function xt(f) {
      let E = { name: f.name, kind: yt(f.kind), uri: r(f.uri), range: ie(f.range), selectionRange: ie(f.selectionRange) };
      return f.detail !== void 0 && f.detail.length > 0 && (E.detail = f.detail), f.tags !== void 0 && (E.tags = _t(f.tags)), f instanceof iP.default && f.data !== void 0 && (E.data = f.data), E;
    }
    function Wn(f) {
      let E = { name: f.name, kind: yt(f.kind), uri: r(f.uri), range: ie(f.range), selectionRange: ie(f.selectionRange) };
      return f.detail !== void 0 && f.detail.length > 0 && (E.detail = f.detail), f.tags !== void 0 && (E.tags = _t(f.tags)), f instanceof sP.default && f.data !== void 0 && (E.data = f.data), E;
    }
    function kt(f) {
      let E = f instanceof oP.default ? { name: f.name, kind: yt(f.kind), location: f.hasRange ? ht(f.location) : { uri: t(f.location.uri) }, data: f.data } : { name: f.name, kind: yt(f.kind), location: ht(f.location) };
      return f.tags !== void 0 && (E.tags = _t(f.tags)), f.containerName !== "" && (E.containerName = f.containerName), E;
    }
    function qt(f) {
      let E = typeof f.label == "string" ? f.label : f.label.map(fi), J = se.InlayHint.create(ue(f.position), E);
      return f.kind !== void 0 && (J.kind = f.kind), f.textEdits !== void 0 && (J.textEdits = li(f.textEdits)), f.tooltip !== void 0 && (J.tooltip = Ys(f.tooltip)), f.paddingLeft !== void 0 && (J.paddingLeft = f.paddingLeft), f.paddingRight !== void 0 && (J.paddingRight = f.paddingRight), f instanceof aP.default && f.data !== void 0 && (J.data = f.data), J;
    }
    function fi(f) {
      let E = se.InlayHintLabelPart.create(f.value);
      return f.location !== void 0 && (E.location = ht(f.location)), f.command !== void 0 && (E.command = Ce(f.command)), f.tooltip !== void 0 && (E.tooltip = Ys(f.tooltip)), E;
    }
    function Ys(f) {
      return typeof f == "string" ? f : { kind: se.MarkupKind.Markdown, value: f.value };
    }
    return { asUri: r, asTextDocumentIdentifier: i, asTextDocumentItem: s, asVersionedTextDocumentIdentifier: o, asOpenTextDocumentParams: a, asChangeTextDocumentParams: d, asCloseTextDocumentParams: p, asSaveTextDocumentParams: h, asWillSaveTextDocumentParams: g, asDidCreateFilesParams: y, asDidRenameFilesParams: T, asDidDeleteFilesParams: R, asWillCreateFilesParams: v, asWillRenameFilesParams: D, asWillDeleteFilesParams: A, asTextDocumentPositionParams: x, asCompletionParams: S, asSignatureHelpParams: ee, asWorkerPosition: ce, asRange: ie, asRanges: ft, asPosition: ue, asPositions: te, asPositionsSync: pe, asLocation: ht, asDiagnosticSeverity: hn, asDiagnosticTag: pn, asDiagnostic: mr, asDiagnostics: yr, asDiagnosticsSync: _r, asCompletionItem: mn, asTextEdit: Hn, asSymbolKind: yt, asSymbolTag: tn, asSymbolTags: _t, asReferenceParams: Qi, asCodeAction: pt, asCodeActionSync: Un, asCodeActionContext: di, asCodeActionContextSync: zr, asInlineValueContext: b, asCommand: Ce, asCodeLens: ve, asFormattingOptions: He, asDocumentSymbolParams: Ye, asCodeLensParams: Oe, asDocumentLink: Me, asDocumentLinkParams: vt, asCallHierarchyItem: xt, asTypeHierarchyItem: Wn, asInlayHint: qt, asWorkspaceSymbol: kt, asInlineCompletionParams: L, asInlineCompletionContext: U };
  }
});
var c_ = j((un) => {
  "use strict";
  var uP = un && un.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), lP = un && un.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), ea = un && un.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && uP(t, e, r[i]);
      return lP(t, e), t;
    };
  })(), Lr = un && un.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(un, "__esModule", { value: true });
  un.createConverter = vP;
  var W = ea(require("vscode")), ne = ea(ae()), Wt = ea(Qt()), be = ea(Jo()), dP = Lr(id()), fP = Lr(od()), hP = Lr(cd()), pP = Lr(ld()), o_ = hd(), gP = Lr(gd()), mP = Lr(yd()), yP = Lr(vd()), _P = Lr(Cd()), a_ = ae(), Zo;
  (function(n) {
    function e(t) {
      let r = t;
      return r && Wt.string(r.language) && Wt.string(r.value);
    }
    n.is = e;
  })(Zo || (Zo = {}));
  function vP(n, e, t, r) {
    let s = n || ((u) => W.Uri.parse(u));
    function o(u) {
      return s(u);
    }
    function a(u) {
      let C = [];
      for (let I of u) if (typeof I == "string") C.push(I);
      else if (a_.NotebookCellTextDocumentFilter.is(I)) if (typeof I.notebook == "string") C.push({ notebookType: I.notebook, language: I.language });
      else {
        let B = I.notebook.notebookType ?? "*";
        C.push({ notebookType: B, scheme: I.notebook.scheme, pattern: Ba(I.notebook.pattern), language: I.language });
      }
      else a_.TextDocumentFilter.is(I) && C.push({ language: I.language, scheme: I.scheme, pattern: Ba(I.pattern) });
      return C;
    }
    async function c(u, C) {
      return be.map(u, d, C);
    }
    function l(u) {
      let C = new Array(u.length);
      for (let I = 0; I < u.length; I++) C[I] = d(u[I]);
      return C;
    }
    function d(u) {
      let C = typeof u.message == "string" ? u.message : u.message.kind === "plaintext" ? u.message.value : "Received a markup diagnostic message but the client does not support it.", I = new o_.ProtocolDiagnostic(y(u.range), C, R(u.severity), u.data);
      if (u.code !== void 0) {
        if (typeof u.code == "string" || typeof u.code == "number") ne.CodeDescription.is(u.codeDescription) ? I.code = { value: u.code, target: o(u.codeDescription.href) } : I.code = u.code;
        else if (o_.DiagnosticCode.is(u.code)) {
          I.hasDiagnosticCode = true;
          let B = u.code;
          I.code = { value: B.value, target: o(B.target) };
        }
      }
      return u.source && (I.source = u.source), u.relatedInformation && (I.relatedInformation = p(u.relatedInformation)), Array.isArray(u.tags) && (I.tags = h(u.tags)), I;
    }
    function p(u) {
      let C = new Array(u.length);
      for (let I = 0; I < u.length; I++) {
        let B = u[I];
        C[I] = new W.DiagnosticRelatedInformation(gn(B.location), B.message);
      }
      return C;
    }
    function h(u) {
      if (!u) return;
      let C = [];
      for (let I of u) {
        let B = m(I);
        B !== void 0 && C.push(B);
      }
      return C.length > 0 ? C : void 0;
    }
    function m(u) {
      switch (u) {
        case ne.DiagnosticTag.Unnecessary:
          return W.DiagnosticTag.Unnecessary;
        case ne.DiagnosticTag.Deprecated:
          return W.DiagnosticTag.Deprecated;
        default:
          return;
      }
    }
    function g(u) {
      return u ? new W.Position(u.line, u.character) : void 0;
    }
    function y(u) {
      return u ? new W.Range(u.start.line, u.start.character, u.end.line, u.end.character) : void 0;
    }
    async function T(u, C) {
      return be.map(u, (I) => new W.Range(I.start.line, I.start.character, I.end.line, I.end.character), C);
    }
    function R(u) {
      if (u == null) return W.DiagnosticSeverity.Error;
      switch (u) {
        case ne.DiagnosticSeverity.Error:
          return W.DiagnosticSeverity.Error;
        case ne.DiagnosticSeverity.Warning:
          return W.DiagnosticSeverity.Warning;
        case ne.DiagnosticSeverity.Information:
          return W.DiagnosticSeverity.Information;
        case ne.DiagnosticSeverity.Hint:
          return W.DiagnosticSeverity.Hint;
      }
      return W.DiagnosticSeverity.Error;
    }
    function v(u) {
      if (Wt.string(u)) return A(u);
      if (Zo.is(u)) return A().appendCodeblock(u.value, u.language);
      if (Array.isArray(u)) {
        let C = [];
        for (let I of u) {
          let B = A();
          Zo.is(I) ? B.appendCodeblock(I.value, I.language) : B.appendMarkdown(I), C.push(B);
        }
        return C;
      } else return A(u);
    }
    function D(u) {
      if (Wt.string(u)) return u;
      switch (u.kind) {
        case ne.MarkupKind.Markdown:
          return A(u.value);
        case ne.MarkupKind.PlainText:
          return u.value;
        default:
          return `Unsupported Markup content received. Kind is: ${u.kind}`;
      }
    }
    function A(u) {
      let C;
      if (u === void 0 || typeof u == "string") C = new W.MarkdownString(u);
      else switch (u.kind) {
        case ne.MarkupKind.Markdown:
          C = new W.MarkdownString(u.value);
          break;
        case ne.MarkupKind.PlainText:
          C = new W.MarkdownString(), C.appendText(u.value);
          break;
        default:
          C = new W.MarkdownString(), C.appendText(`Unsupported Markup content received. Kind is: ${u.kind}`);
          break;
      }
      return C.isTrusted = e, C.supportHtml = t, C.supportThemeIcons = r, C;
    }
    function x(u) {
      if (u) return new W.Hover(v(u.contents), y(u.range));
    }
    async function w(u, C, I) {
      if (!u) return;
      if (Array.isArray(u)) return be.map(u, (Kn) => F(Kn, C), I);
      let B = u, { defaultRange: Ue, commitCharacters: Je } = S(B, C), xe = await be.map(B.items, (Kn) => F(Kn, Je, B.applyKind?.commitCharacters, Ue, B.itemDefaults?.insertTextMode, B.itemDefaults?.insertTextFormat, B.itemDefaults?.data, B.applyKind?.data), I);
      return new W.CompletionList(xe, B.isIncomplete);
    }
    function S(u, C) {
      let I = u.itemDefaults?.editRange, B = u.itemDefaults?.commitCharacters ?? C;
      return ne.Range.is(I) ? { defaultRange: y(I), commitCharacters: B } : I !== void 0 ? { defaultRange: { inserting: y(I.insert), replacing: y(I.replace) }, commitCharacters: B } : { defaultRange: void 0, commitCharacters: B };
    }
    function q(u) {
      return ne.CompletionItemKind.Text <= u && u <= ne.CompletionItemKind.TypeParameter ? [u - 1, void 0] : [W.CompletionItemKind.Text, u];
    }
    function H(u) {
      switch (u) {
        case ne.CompletionItemTag.Deprecated:
          return W.CompletionItemTag.Deprecated;
      }
    }
    function O(u) {
      if (u == null) return [];
      let C = [];
      for (let I of u) {
        let B = H(I);
        B !== void 0 && C.push(B);
      }
      return C;
    }
    function F(u, C, I, B, Ue, Je, xe, Kn) {
      let wr = O(u.tags), Vt = ee(u), Ze = new dP.default(Vt);
      u.detail && (Ze.detail = u.detail), u.documentation && (Ze.documentation = D(u.documentation), Ze.documentationFormat = Wt.string(u.documentation) ? "$string" : u.documentation.kind), u.filterText && (Ze.filterText = u.filterText);
      let Zs = ce(u, B, Je);
      if (Zs && (Ze.insertText = Zs.text, Ze.range = Zs.range, Ze.fromEdit = Zs.fromEdit), Wt.number(u.kind)) {
        let [iC, rp] = q(u.kind);
        Ze.kind = iC, rp && (Ze.originalItemKind = rp);
      }
      u.sortText && (Ze.sortText = u.sortText), u.additionalTextEdits && (Ze.additionalTextEdits = ie(u.additionalTextEdits));
      let tp = $(u, C, I);
      tp && (Ze.commitCharacters = tp.slice()), u.command && (Ze.command = _t(u.command)), (u.deprecated === true || u.deprecated === false) && (Ze.deprecated = u.deprecated, u.deprecated === true && wr.push(W.CompletionItemTag.Deprecated)), (u.preselect === true || u.preselect === false) && (Ze.preselect = u.preselect);
      let np = K(u, xe, Kn);
      np !== void 0 && (Ze.data = np), wr.length > 0 && (Ze.tags = wr);
      let Va = u.insertTextMode ?? Ue;
      return Va !== void 0 && (Ze.insertTextMode = Va, Va === ne.InsertTextMode.asIs && (Ze.keepWhitespace = true)), Ze;
    }
    function $(u, C, I) {
      if (I === ne.ApplyKind.Merge) {
        if (!C && !u.commitCharacters) return;
        let B = /* @__PURE__ */ new Set();
        if (C) for (let Ue of C) B.add(Ue);
        if (Wt.stringArray(u.commitCharacters)) for (let Ue of u.commitCharacters) B.add(Ue);
        return Array.from(B);
      }
      return u.commitCharacters !== void 0 ? Wt.stringArray(u.commitCharacters) ? u.commitCharacters : void 0 : C;
    }
    function K(u, C, I) {
      if (I === ne.ApplyKind.Merge) {
        let B = { ...C };
        return u.data && Object.entries(u.data).forEach(([Ue, Je]) => {
          Je != null && (B[Ue] = Je);
        }), B;
      }
      return u.data ?? C;
    }
    function ee(u) {
      return ne.CompletionItemLabelDetails.is(u.labelDetails) ? { label: u.label, detail: u.labelDetails.detail, description: u.labelDetails.description } : u.label;
    }
    function ce(u, C, I) {
      let B = u.insertTextFormat ?? I;
      if (u.textEdit !== void 0 || C !== void 0) {
        let [Ue, Je] = u.textEdit !== void 0 ? ue(u.textEdit) : [C, u.textEditText ?? u.label];
        return B === ne.InsertTextFormat.Snippet ? { text: new W.SnippetString(Je), range: Ue, fromEdit: true } : { text: Je, range: Ue, fromEdit: true };
      } else return u.insertText ? B === ne.InsertTextFormat.Snippet ? { text: new W.SnippetString(u.insertText), fromEdit: false } : { text: u.insertText, fromEdit: false } : void 0;
    }
    function ue(u) {
      return ne.InsertReplaceEdit.is(u) ? [{ inserting: y(u.insert), replacing: y(u.replace) }, u.newText] : [y(u.range), u.newText];
    }
    function te(u) {
      if (u) return new W.TextEdit(y(u.range), u.newText);
    }
    async function pe(u, C) {
      if (u) return be.map(u, te, C);
    }
    function ie(u) {
      if (!u) return;
      let C = new Array(u.length);
      for (let I = 0; I < u.length; I++) C[I] = te(u[I]);
      return C;
    }
    async function ft(u, C) {
      if (!u) return;
      let I = new W.SignatureHelp();
      return Wt.number(u.activeSignature) ? I.activeSignature = u.activeSignature : I.activeSignature = 0, Wt.number(u.activeParameter) ? I.activeParameter = u.activeParameter : u.activeParameter === null ? I.activeParameter = -1 : I.activeParameter = 0, u.signatures && (I.signatures = await ht(u.signatures, C)), I;
    }
    async function ht(u, C) {
      return be.mapAsync(u, hn, C);
    }
    async function hn(u, C) {
      let I = new W.SignatureInformation(u.label);
      return u.documentation !== void 0 && (I.documentation = D(u.documentation)), u.parameters !== void 0 && (I.parameters = await $n(u.parameters, C)), u.activeParameter !== void 0 && (I.activeParameter = u.activeParameter ?? -1), I;
    }
    function $n(u, C) {
      return be.map(u, pn, C);
    }
    function pn(u) {
      let C = new W.ParameterInformation(u.label);
      return u.documentation && (C.documentation = D(u.documentation)), C;
    }
    function gn(u) {
      return u ? new W.Location(s(u.uri), y(u.range)) : void 0;
    }
    async function Wr(u, C) {
      if (u) return yr(u, C);
    }
    async function ci(u, C) {
      if (u) return yr(u, C);
    }
    function mr(u) {
      if (!u) return;
      let C = { targetUri: s(u.targetUri), targetRange: y(u.targetRange), originSelectionRange: y(u.originSelectionRange), targetSelectionRange: y(u.targetSelectionRange) };
      if (!C.targetSelectionRange) throw new Error("targetSelectionRange must not be undefined or null");
      return C;
    }
    async function yr(u, C) {
      if (u) if (Wt.array(u)) {
        if (u.length === 0) return [];
        if (ne.LocationLink.is(u[0])) {
          let I = u;
          return be.map(I, mr, C);
        } else {
          let I = u;
          return be.map(I, gn, C);
        }
      } else return ne.LocationLink.is(u) ? [mr(u)] : gn(u);
    }
    async function _r(u, C) {
      if (u) return be.map(u, gn, C);
    }
    async function Xi(u, C) {
      if (u) return be.map(u, ui, C);
    }
    function ui(u) {
      let C = new W.DocumentHighlight(y(u.range));
      return Wt.number(u.kind) && (C.kind = At(u.kind)), C;
    }
    function At(u) {
      switch (u) {
        case ne.DocumentHighlightKind.Text:
          return W.DocumentHighlightKind.Text;
        case ne.DocumentHighlightKind.Read:
          return W.DocumentHighlightKind.Read;
        case ne.DocumentHighlightKind.Write:
          return W.DocumentHighlightKind.Write;
      }
      return W.DocumentHighlightKind.Text;
    }
    async function Ji(u, C) {
      if (u) return be.map(u, Hn, C);
    }
    function mn(u) {
      return u <= ne.SymbolKind.TypeParameter ? u - 1 : W.SymbolKind.Property;
    }
    function vr(u) {
      switch (u) {
        case ne.SymbolTag.Deprecated:
          return W.SymbolTag.Deprecated;
        default:
          return;
      }
    }
    function br(u) {
      if (u == null) return;
      let C = [];
      for (let I of u) {
        let B = vr(I);
        B !== void 0 && C.push(B);
      }
      return C.length === 0 ? void 0 : C;
    }
    function Hn(u) {
      let C = u.data, I = u.location, B = I.range === void 0 || C !== void 0 ? new yP.default(u.name, mn(u.kind), u.containerName ?? "", I.range === void 0 ? s(I.uri) : new W.Location(s(u.location.uri), y(I.range)), C) : new W.SymbolInformation(u.name, mn(u.kind), u.containerName ?? "", new W.Location(s(u.location.uri), y(I.range)));
      return tn(B, u), B;
    }
    async function li(u, C) {
      if (u != null) return be.map(u, yt, C);
    }
    function yt(u) {
      let C = new W.DocumentSymbol(u.name, u.detail || "", mn(u.kind), y(u.range), y(u.selectionRange));
      if (tn(C, u), u.children !== void 0 && u.children.length > 0) {
        let I = [];
        for (let B of u.children) I.push(yt(B));
        C.children = I;
      }
      return C;
    }
    function tn(u, C) {
      u.tags = br(C.tags), C.deprecated && (u.tags ? u.tags.includes(W.SymbolTag.Deprecated) || (u.tags = u.tags.concat(W.SymbolTag.Deprecated)) : u.tags = [W.SymbolTag.Deprecated]);
    }
    function _t(u) {
      let C = { title: u.title, command: u.command };
      return u.tooltip && (C.tooltip = u.tooltip), u.arguments && (C.arguments = u.arguments), C;
    }
    async function Qi(u, C) {
      if (u) return be.map(u, _t, C);
    }
    let pt = /* @__PURE__ */ new Map();
    pt.set(ne.CodeActionKind.Empty, W.CodeActionKind.Empty), pt.set(ne.CodeActionKind.QuickFix, W.CodeActionKind.QuickFix), pt.set(ne.CodeActionKind.Refactor, W.CodeActionKind.Refactor), pt.set(ne.CodeActionKind.RefactorExtract, W.CodeActionKind.RefactorExtract), pt.set(ne.CodeActionKind.RefactorInline, W.CodeActionKind.RefactorInline), pt.set(ne.CodeActionKind.RefactorRewrite, W.CodeActionKind.RefactorRewrite), pt.set(ne.CodeActionKind.Source, W.CodeActionKind.Source), pt.set(ne.CodeActionKind.SourceOrganizeImports, W.CodeActionKind.SourceOrganizeImports);
    function Un(u) {
      if (u == null) return;
      let C = pt.get(u);
      if (C) return C;
      let I = u.split(".");
      C = W.CodeActionKind.Empty;
      for (let B of I) C = C.append(B);
      return C;
    }
    function di(u) {
      if (u != null) return u.map((C) => Un(C));
    }
    function zr(u) {
      if (u != null) return u.map((C) => ({ kind: Un(C.kind), command: _t(C.command) }));
    }
    async function Cr(u, C) {
      if (u == null) return;
      let I = new pP.default(u.title, u.data);
      return u.kind !== void 0 && (I.kind = Un(u.kind)), u.diagnostics !== void 0 && (I.diagnostics = l(u.diagnostics)), u.edit !== void 0 && (I.edit = await U(u.edit, C)), u.command !== void 0 && (I.command = _t(u.command)), u.isPreferred !== void 0 && (I.isPreferred = u.isPreferred), u.disabled !== void 0 && (I.disabled = { reason: u.disabled.reason }), u.tags?.includes(ne.CodeActionTag.LLMGenerated) && (I.isAI = true), I;
    }
    function Gt(u, C) {
      return be.mapAsync(u, async (I) => ne.Command.is(I) ? _t(I) : Cr(I, C), C);
    }
    function b(u) {
      if (!u) return;
      let C = new fP.default(y(u.range));
      return u.command && (C.command = _t(u.command)), u.data !== void 0 && u.data !== null && (C.data = u.data), C;
    }
    async function L(u, C) {
      if (u) return be.map(u, b, C);
    }
    async function U(u, C) {
      if (!u) return;
      let I = /* @__PURE__ */ new Map();
      if (u.changeAnnotations !== void 0) {
        let Je = u.changeAnnotations;
        await be.forEach(Object.keys(Je), (xe) => {
          let Kn = Q(Je[xe]);
          I.set(xe, Kn);
        }, C);
      }
      let B = (Je) => {
        if (Je !== void 0) return I.get(Je);
      }, Ue = new W.WorkspaceEdit();
      if (u.documentChanges) {
        let Je = u.documentChanges;
        await be.forEach(Je, (xe) => {
          if (ne.CreateFile.is(xe)) Ue.createFile(s(xe.uri), xe.options, B(xe.annotationId));
          else if (ne.RenameFile.is(xe)) Ue.renameFile(s(xe.oldUri), s(xe.newUri), xe.options, B(xe.annotationId));
          else if (ne.DeleteFile.is(xe)) Ue.deleteFile(s(xe.uri), xe.options, B(xe.annotationId));
          else if (ne.TextDocumentEdit.is(xe)) {
            let Kn = s(xe.textDocument.uri), wr = [];
            for (let Vt of xe.edits) ne.AnnotatedTextEdit.is(Vt) ? wr.push([new W.TextEdit(y(Vt.range), Vt.newText), B(Vt.annotationId)]) : ne.SnippetTextEdit.is(Vt) ? wr.push([new W.SnippetTextEdit(y(Vt.range), new W.SnippetString(Vt.snippet.value)), B(Vt.annotationId)]) : wr.push([new W.TextEdit(y(Vt.range), Vt.newText), void 0]);
            Ue.set(Kn, wr);
          } else throw new Error(`Unknown workspace edit change received:
${JSON.stringify(xe, void 0, 4)}`);
        }, C);
      } else if (u.changes) {
        let Je = u.changes;
        await be.forEach(Object.keys(Je), (xe) => {
          Ue.set(s(xe), ie(Je[xe]));
        }, C);
      }
      return Ue;
    }
    function Q(u) {
      if (u !== void 0) return { label: u.label, needsConfirmation: !!u.needsConfirmation, description: u.description };
    }
    function ge(u) {
      let C = y(u.range), I = u.target ? o(u.target) : void 0, B = new hP.default(C, I);
      return u.tooltip !== void 0 && (B.tooltip = u.tooltip), u.data !== void 0 && u.data !== null && (B.data = u.data), B;
    }
    async function Ce(u, C) {
      if (u) return be.map(u, ge, C);
    }
    function ve(u) {
      return new W.Color(u.red, u.green, u.blue, u.alpha);
    }
    function He(u) {
      return new W.ColorInformation(y(u.range), ve(u.color));
    }
    async function Ye(u, C) {
      if (u) return be.map(u, He, C);
    }
    function Oe(u) {
      let C = new W.ColorPresentation(u.label);
      return C.additionalTextEdits = ie(u.additionalTextEdits), u.textEdit && (C.textEdit = te(u.textEdit)), C;
    }
    async function Me(u, C) {
      if (u) return be.map(u, Oe, C);
    }
    function vt(u) {
      if (u) switch (u) {
        case ne.FoldingRangeKind.Comment:
          return W.FoldingRangeKind.Comment;
        case ne.FoldingRangeKind.Imports:
          return W.FoldingRangeKind.Imports;
        case ne.FoldingRangeKind.Region:
          return W.FoldingRangeKind.Region;
      }
    }
    function xt(u) {
      return new W.FoldingRange(u.startLine, u.endLine, vt(u.kind));
    }
    async function Wn(u, C) {
      if (u) return be.map(u, xt, C);
    }
    function kt(u) {
      return new W.SelectionRange(y(u.range), u.parent ? kt(u.parent) : void 0);
    }
    async function qt(u, C) {
      return Array.isArray(u) ? be.map(u, kt, C) : [];
    }
    function fi(u) {
      return ne.InlineValueText.is(u) ? new W.InlineValueText(y(u.range), u.text) : ne.InlineValueVariableLookup.is(u) ? new W.InlineValueVariableLookup(y(u.range), u.variableName, u.caseSensitiveLookup) : new W.InlineValueEvaluatableExpression(y(u.range), u.expression);
    }
    async function Ys(u, C) {
      return Array.isArray(u) ? be.map(u, fi, C) : [];
    }
    async function f(u, C) {
      let I = typeof u.label == "string" ? u.label : await be.map(u.label, E, C), B = new _P.default(g(u.position), I);
      return u.kind !== void 0 && (B.kind = u.kind), u.textEdits !== void 0 && (B.textEdits = await pe(u.textEdits, C)), u.tooltip !== void 0 && (B.tooltip = J(u.tooltip)), u.paddingLeft !== void 0 && (B.paddingLeft = u.paddingLeft), u.paddingRight !== void 0 && (B.paddingRight = u.paddingRight), u.data !== void 0 && (B.data = u.data), B;
    }
    function E(u) {
      let C = new W.InlayHintLabelPart(u.value);
      return u.location !== void 0 && (C.location = gn(u.location)), u.tooltip !== void 0 && (C.tooltip = J(u.tooltip)), u.command !== void 0 && (C.command = _t(u.command)), C;
    }
    function J(u) {
      return typeof u == "string" ? u : A(u);
    }
    async function Ee(u, C) {
      if (Array.isArray(u)) return be.mapAsync(u, f, C);
    }
    function we(u) {
      if (u === null) return;
      let C = new gP.default(mn(u.kind), u.name, u.detail || "", o(u.uri), y(u.range), y(u.selectionRange), u.data);
      return u.tags !== void 0 && (C.tags = br(u.tags)), C;
    }
    async function gt(u, C) {
      if (u !== null) return be.map(u, we, C);
    }
    async function Mt(u, C) {
      return new W.CallHierarchyIncomingCall(we(u.from), await T(u.fromRanges, C));
    }
    async function zn(u, C) {
      if (u !== null) return be.mapAsync(u, Mt, C);
    }
    async function Yh(u, C) {
      return new W.CallHierarchyOutgoingCall(we(u.to), await T(u.fromRanges, C));
    }
    async function Jb(u, C) {
      if (u !== null) return be.mapAsync(u, Yh, C);
    }
    async function Qb(u, C) {
      if (u != null) return new W.SemanticTokens(new Uint32Array(u.data), u.resultId);
    }
    function Zh(u) {
      return new W.SemanticTokensEdit(u.start, u.deleteCount, u.data !== void 0 ? new Uint32Array(u.data) : void 0);
    }
    async function Yb(u, C) {
      if (u != null) return new W.SemanticTokensEdits(u.edits.map(Zh), u.resultId);
    }
    function Zb(u) {
      return u;
    }
    async function eC(u, C) {
      if (u != null) return new W.LinkedEditingRanges(await T(u.ranges, C), tC(u.wordPattern));
    }
    function tC(u) {
      if (u != null) return new RegExp(u);
    }
    function ep(u) {
      if (u === null) return;
      let C = new mP.default(mn(u.kind), u.name, u.detail || "", o(u.uri), y(u.range), y(u.selectionRange), u.data);
      return u.tags !== void 0 && (C.tags = br(u.tags)), C;
    }
    async function nC(u, C) {
      if (u !== null) return be.map(u, ep, C);
    }
    function Ba(u) {
      if (Wt.string(u)) return u;
      if (ne.RelativePattern.is(u)) {
        if (ne.URI.is(u.baseUri)) return new W.RelativePattern(o(u.baseUri), u.pattern);
        if (ne.WorkspaceFolder.is(u.baseUri)) {
          let C = W.workspace.getWorkspaceFolder(o(u.baseUri.uri));
          return C !== void 0 ? new W.RelativePattern(C, u.pattern) : void 0;
        }
      }
    }
    async function rC(u, C) {
      if (!u) return;
      if (Array.isArray(u)) return be.map(u, (Ue) => Ga(Ue), C);
      let I = u, B = await be.map(I.items, (Ue) => Ga(Ue), C);
      return new W.InlineCompletionList(B);
    }
    function Ga(u) {
      let C;
      typeof u.insertText == "string" ? C = u.insertText : C = new W.SnippetString(u.insertText.value);
      let I;
      u.command && (I = _t(u.command));
      let B = new W.InlineCompletionItem(C, y(u.range), I);
      return u.filterText && (B.filterText = u.filterText), B;
    }
    return { asUri: o, asDocumentSelector: a, asDiagnostics: c, asDiagnostic: d, asRange: y, asRanges: T, asPosition: g, asDiagnosticSeverity: R, asDiagnosticTag: m, asHover: x, asCompletionResult: w, asCompletionItem: F, asTextEdit: te, asTextEdits: pe, asSignatureHelp: ft, asSignatureInformations: ht, asSignatureInformation: hn, asParameterInformations: $n, asParameterInformation: pn, asDeclarationResult: Wr, asDefinitionResult: ci, asLocation: gn, asReferences: _r, asDocumentHighlights: Xi, asDocumentHighlight: ui, asDocumentHighlightKind: At, asSymbolKind: mn, asSymbolTag: vr, asSymbolTags: br, asSymbolInformations: Ji, asSymbolInformation: Hn, asDocumentSymbols: li, asDocumentSymbol: yt, asCommand: _t, asCommands: Qi, asCodeAction: Cr, asCodeActionKind: Un, asCodeActionKinds: di, asCodeActionDocumentations: zr, asCodeActionResult: Gt, asCodeLens: b, asCodeLenses: L, asWorkspaceEdit: U, asDocumentLink: ge, asDocumentLinks: Ce, asFoldingRangeKind: vt, asFoldingRange: xt, asFoldingRanges: Wn, asColor: ve, asColorInformation: He, asColorInformations: Ye, asColorPresentation: Oe, asColorPresentations: Me, asSelectionRange: kt, asSelectionRanges: qt, asInlineValue: fi, asInlineValues: Ys, asInlayHint: f, asInlayHints: Ee, asSemanticTokensLegend: Zb, asSemanticTokens: Qb, asSemanticTokensEdit: Zh, asSemanticTokensEdits: Yb, asCallHierarchyItem: we, asCallHierarchyItems: gt, asCallHierarchyIncomingCall: Mt, asCallHierarchyIncomingCalls: zn, asCallHierarchyOutgoingCall: Yh, asCallHierarchyOutgoingCalls: Jb, asLinkedEditingRanges: eC, asTypeHierarchyItem: ep, asTypeHierarchyItems: nC, asGlobPattern: Ba, asInlineCompletionResult: rC, asInlineCompletionItem: Ga };
  }
});
var Dd = j((Cn) => {
  "use strict";
  var bP = Cn && Cn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), CP = Cn && Cn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), wP = Cn && Cn.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && bP(t, e, r[i]);
      return CP(t, e), t;
    };
  })();
  Object.defineProperty(Cn, "__esModule", { value: true });
  Cn.ProgressPart = void 0;
  var u_ = require("vscode"), l_ = ae(), d_ = wP(Qt()), Sd = class {
    _client;
    _token;
    _infinite;
    _reported;
    _lspProgressDisposable;
    _progress;
    _cancellationToken;
    _tokenDisposable;
    _resolve;
    _reject;
    constructor(e, t, r) {
      this._client = e, this._token = t, this._reported = 0, this._infinite = false, this._lspProgressDisposable = this._client.onProgress(l_.WorkDoneProgress.type, this._token, (i) => {
        switch (i.kind) {
          case "begin":
            this.begin(i);
            break;
          case "report":
            this.report(i);
            break;
          case "end":
            this.done(), r && r(this);
            break;
        }
      });
    }
    begin(e) {
      this._infinite = e.percentage === void 0, this._lspProgressDisposable !== void 0 && u_.window.withProgress({ location: u_.ProgressLocation.Window, cancellable: e.cancellable, title: e.title }, async (t, r) => {
        if (this._lspProgressDisposable !== void 0) return this._progress = t, this._cancellationToken = r, this._tokenDisposable = this._cancellationToken.onCancellationRequested(() => {
          this._client.sendNotification(l_.WorkDoneProgressCancelNotification.type, { token: this._token });
        }), this.report(e), new Promise((i, s) => {
          this._resolve = i, this._reject = s;
        });
      });
    }
    report(e) {
      if (this._infinite && d_.string(e.message)) this._progress !== void 0 && this._progress.report({ message: e.message });
      else if (d_.number(e.percentage)) {
        let t = Math.max(0, Math.min(e.percentage, 100)), r = Math.max(0, t - this._reported);
        this._reported += r, this._progress !== void 0 && this._progress.report({ message: e.message, increment: r });
      }
    }
    cancel() {
      this.cleanup(), this._reject !== void 0 && (this._reject(), this._resolve = void 0, this._reject = void 0);
    }
    done() {
      this.cleanup(), this._resolve !== void 0 && (this._resolve(), this._resolve = void 0, this._reject = void 0);
    }
    cleanup() {
      this._lspProgressDisposable !== void 0 && (this._lspProgressDisposable.dispose(), this._lspProgressDisposable = void 0), this._tokenDisposable !== void 0 && (this._tokenDisposable.dispose(), this._tokenDisposable = void 0), this._progress = void 0, this._cancellationToken = void 0;
    }
  };
  Cn.ProgressPart = Sd;
});
var p_ = j((wn) => {
  "use strict";
  var SP = wn && wn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), DP = wn && wn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), ia = wn && wn.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && SP(t, e, r[i]);
      return DP(t, e), t;
    };
  })();
  Object.defineProperty(wn, "__esModule", { value: true });
  wn.NotebookDocumentSyncFeature = void 0;
  var $e = ia(require("vscode")), cr = ia(ae()), PP = ia(Fe()), f_ = ia(Qt()), RP = Gl();
  function h_(n, e) {
    return n[e] === void 0 && (n[e] = {}), n[e];
  }
  var Ni;
  (function(n) {
    let e;
    (function(t) {
      function r(h, m) {
        return { version: h.version, uri: m.asUri(h.uri) };
      }
      t.asVersionedNotebookDocumentIdentifier = r;
      function i(h, m, g) {
        let y = cr.NotebookDocument.create(g.asUri(h.uri), h.notebookType, h.version, s(m, g));
        return Object.keys(h.metadata).length > 0 && (y.metadata = o(h.metadata)), y;
      }
      t.asNotebookDocument = i;
      function s(h, m) {
        return h.map((g) => a(g, m));
      }
      t.asNotebookCells = s;
      function o(h) {
        return l(/* @__PURE__ */ new Set(), h);
      }
      t.asMetadata = o;
      function a(h, m) {
        let g = cr.NotebookCell.create(c(h.kind), m.asUri(h.document.uri));
        return Object.keys(h.metadata).length > 0 && (g.metadata = o(h.metadata)), h.executionSummary !== void 0 && f_.number(h.executionSummary.executionOrder) && f_.boolean(h.executionSummary.success) && (g.executionSummary = { executionOrder: h.executionSummary.executionOrder, success: h.executionSummary.success }), g;
      }
      t.asNotebookCell = a;
      function c(h) {
        switch (h) {
          case $e.NotebookCellKind.Markup:
            return cr.NotebookCellKind.Markup;
          case $e.NotebookCellKind.Code:
            return cr.NotebookCellKind.Code;
        }
      }
      function l(h, m) {
        if (h.has(m)) throw new Error("Can't deep copy cyclic structures.");
        if (Array.isArray(m)) {
          let g = [];
          for (let y of m) if (y !== null && typeof y == "object" || Array.isArray(y)) g.push(l(h, y));
          else {
            if (y instanceof RegExp) throw new Error("Can't transfer regular expressions to the server");
            g.push(y);
          }
          return g;
        } else {
          let g = Object.keys(m), y = /* @__PURE__ */ Object.create(null);
          for (let T of g) {
            let R = m[T];
            if (R !== null && typeof R == "object" || Array.isArray(R)) y[T] = l(h, R);
            else {
              if (R instanceof RegExp) throw new Error("Can't transfer regular expressions to the server");
              y[T] = R;
            }
          }
          return y;
        }
      }
      function d(h, m) {
        let g = m.asChangeTextDocumentParams(h, h.document.uri, h.document.version);
        return { document: g.textDocument, changes: g.contentChanges };
      }
      t.asTextContentChange = d;
      function p(h, m) {
        let g = /* @__PURE__ */ Object.create(null);
        if (h.metadata && (g.metadata = n.c2p.asMetadata(h.metadata)), h.cells !== void 0) {
          let y = /* @__PURE__ */ Object.create(null), T = h.cells;
          T.structure && (y.structure = { array: { start: T.structure.array.start, deleteCount: T.structure.array.deleteCount, cells: T.structure.array.cells !== void 0 ? T.structure.array.cells.map((R) => n.c2p.asNotebookCell(R, m)) : void 0 }, didOpen: T.structure.didOpen !== void 0 ? T.structure.didOpen.map((R) => m.asOpenTextDocumentParams(R.document).textDocument) : void 0, didClose: T.structure.didClose !== void 0 ? T.structure.didClose.map((R) => m.asCloseTextDocumentParams(R.document).textDocument) : void 0 }), T.data !== void 0 && (y.data = T.data.map((R) => n.c2p.asNotebookCell(R, m))), T.textContent !== void 0 && (y.textContent = T.textContent.map((R) => n.c2p.asTextContentChange(R, m))), Object.keys(y).length > 0 && (g.cells = y);
        }
        return g;
      }
      t.asNotebookDocumentChangeEvent = p;
    })(e = n.c2p || (n.c2p = {}));
  })(Ni || (Ni = {}));
  var Pd;
  (function(n) {
    function e(a, c, l) {
      let d = a.length, p = c.length, h = 0;
      for (; h < p && h < d && t(a[h], c[h], l); ) h++;
      if (h < p && h < d) {
        let m = d - 1, g = p - 1;
        for (; m >= 0 && g >= 0 && t(a[m], c[g], l); ) m--, g--;
        let y = m + 1 - h, T = h === g + 1 ? void 0 : c.slice(h, g + 1);
        return T !== void 0 ? { start: h, deleteCount: y, cells: T } : { start: h, deleteCount: y };
      } else return h < p ? { start: h, deleteCount: 0, cells: c.slice(h) } : h < d ? { start: h, deleteCount: d - h } : void 0;
    }
    n.computeDiff = e;
    function t(a, c, l = true) {
      return a.kind !== c.kind || a.document.uri.toString() !== c.document.uri.toString() || a.document.languageId !== c.document.languageId || !r(a.executionSummary, c.executionSummary) ? false : !l || l && s(a.metadata, c.metadata);
    }
    function r(a, c) {
      return a === c ? true : a === void 0 || c === void 0 ? false : a.executionOrder === c.executionOrder && a.success === c.success && i(a.timing, c.timing);
    }
    function i(a, c) {
      return a === c ? true : a === void 0 || c === void 0 ? false : a.startTime === c.startTime && a.endTime === c.endTime;
    }
    function s(a, c) {
      if (a === c) return true;
      if (a == null || c === null || c === void 0 || typeof a != typeof c || typeof a != "object") return false;
      let l = Array.isArray(a), d = Array.isArray(c);
      if (l !== d) return false;
      if (l && d) {
        if (a.length !== c.length) return false;
        for (let p = 0; p < a.length; p++) if (!s(a[p], c[p])) return false;
      }
      if (o(a) && o(c)) {
        let p = Object.keys(a), h = Object.keys(c);
        if (p.length !== h.length || (p.sort(), h.sort(), !s(p, h))) return false;
        for (let m = 0; m < p.length; m++) {
          let g = p[m];
          if (!s(a[g], c[g])) return false;
        }
        return true;
      }
      return false;
    }
    function o(a) {
      return a !== null && typeof a == "object";
    }
    n.isObjectLiteral = o;
  })(Pd || (Pd = {}));
  var ta;
  (function(n) {
    function e(t, r) {
      if (typeof t == "string") return t === "*" || r.notebookType === t;
      if (t.notebookType !== void 0 && t.notebookType !== "*" && r.notebookType !== t.notebookType) return false;
      let i = r.uri;
      return !(t.scheme !== void 0 && t.scheme !== "*" && i.scheme !== t.scheme || t.pattern !== void 0 && !(0, RP.matchGlobPattern)(t.pattern, i));
    }
    n.matchNotebook = e;
  })(ta || (ta = {}));
  var na;
  (function(n) {
    function e(r) {
      let i = r.notebookSelector, s = [];
      for (let o of i) {
        let a = (typeof o.notebook == "string" ? o.notebook : o.notebook?.notebookType) ?? "*", c = typeof o.notebook == "string" ? void 0 : o.notebook?.scheme, l = typeof o.notebook == "string" ? void 0 : o.notebook?.pattern;
        if (o.cells !== void 0) for (let d of o.cells) s.push(t(a, c, l, d.language));
        else s.push(t(a, c, l, void 0));
      }
      return s;
    }
    n.asDocumentSelector = e;
    function t(r, i, s, o) {
      return i === void 0 && s === void 0 ? { notebook: r, language: o } : { notebook: { notebookType: r, scheme: i, pattern: s }, language: o };
    }
  })(na || (na = {}));
  var ra;
  (function(n) {
    function e(t) {
      return { cells: t, uris: new Set(t.map((r) => r.document.uri.toString())) };
    }
    n.create = e;
  })(ra || (ra = {}));
  var Fi = class {
    client;
    options;
    notebookSyncInfo;
    notebookDidOpen;
    disposables;
    selector;
    onChangeNotificationSent;
    onOpenNotificationSent;
    onCloseNotificationSent;
    onSaveNotificationSent;
    constructor(e, t, r, i, s, o) {
      this.client = e, this.options = t, this.notebookSyncInfo = /* @__PURE__ */ new Map(), this.notebookDidOpen = /* @__PURE__ */ new Set(), this.disposables = [], this.selector = e.protocol2CodeConverter.asDocumentSelector(na.asDocumentSelector(t)), this.onChangeNotificationSent = r, this.onOpenNotificationSent = i, this.onCloseNotificationSent = s, this.onSaveNotificationSent = o, $e.workspace.onDidOpenNotebookDocument((a) => {
        this.notebookDidOpen.add(a.uri.toString()), this.didOpen(a);
      }, void 0, this.disposables);
      for (let a of $e.workspace.notebookDocuments) this.notebookDidOpen.add(a.uri.toString()), this.didOpen(a);
      $e.workspace.onDidChangeNotebookDocument((a) => this.didChangeNotebookDocument(a), void 0, this.disposables), this.options.save === true && $e.workspace.onDidSaveNotebookDocument((a) => this.didSave(a), void 0, this.disposables), $e.workspace.onDidCloseNotebookDocument((a) => {
        this.didClose(a), this.notebookDidOpen.delete(a.uri.toString());
      }, void 0, this.disposables);
    }
    getState() {
      for (let e of $e.workspace.notebookDocuments) if (this.getMatchingCellsConsideringSyncInfo(e) !== void 0) return { kind: "document", id: "$internal", registrations: true, matches: true };
      return { kind: "document", id: "$internal", registrations: true, matches: false };
    }
    get mode() {
      return "notebook";
    }
    handles(e) {
      if ($e.languages.match(this.selector, e) > 0) return true;
      let t = e.uri.toString();
      for (let r of this.notebookSyncInfo.values()) if (r.uris.has(t)) return true;
      return false;
    }
    didOpenNotebookCellTextDocument(e, t) {
      if ($e.languages.match(this.selector, t.document) === 0 || !this.notebookDidOpen.has(e.uri.toString())) return;
      let r = this.getSyncInfo(e), i = this.cellMatches(e, t);
      if (r !== void 0) {
        let s = r.uris.has(t.document.uri.toString());
        if (i && s || !i && !s) return;
        if (i) {
          let o = this.mergeCells(e, r, [t]);
          if (o !== void 0) {
            let a = this.asNotebookDocumentChangeEvent(e, void 0, r, o);
            a !== void 0 && this.doSendChange(a, o).catch(() => {
            });
          }
        }
      } else i && this.doSendOpen(e, [t]).catch(() => {
      });
    }
    didChangeNotebookCellTextDocument(e, t, r) {
      if ($e.languages.match(this.selector, r.document) === 0) return;
      let i = this.getSyncInfo(e);
      i === void 0 || !i.uris.has(t.document.uri.toString()) || this.doSendChange({ notebook: e, cells: { textContent: [r] } }, i.cells).catch(() => {
      });
    }
    didCloseNotebookCellTextDocument(e, t) {
      let r = this.getSyncInfo(e);
      if (r === void 0) return;
      let i = t.document.uri, s = r.cells.findIndex((o) => o.document.uri.toString() === i.toString());
      if (s !== -1) if (s === 0 && r.cells.length === 1) this.doSendClose(e, r.cells).catch(() => {
      });
      else {
        let o = r.cells.slice(), a = o.splice(s, 1);
        this.doSendChange({ notebook: e, cells: { structure: { array: { start: s, deleteCount: 1 }, didClose: a } } }, o).catch(() => {
        });
      }
    }
    dispose() {
      for (let e of this.disposables) e.dispose();
    }
    didOpen(e, t, r = this.getSyncInfo(e)) {
      if (r !== void 0) if (t === void 0 && (t = r.cells.slice()), t !== void 0) {
        let i = this.asNotebookDocumentChangeEvent(e, void 0, r, t);
        i !== void 0 && this.doSendChange(i, t).catch(() => {
        });
      } else this.doSendClose(e, []).catch(() => {
      });
      else {
        if (t = this.getMatchingCells(e), t === void 0) return;
        this.doSendOpen(e, t).catch(() => {
        });
      }
    }
    didChangeNotebookDocument(e) {
      let t = e.notebook, r = this.getSyncInfo(t);
      if (r === void 0) {
        if (e.contentChanges.length === 0) return;
        let i = this.getMatchingCells(t);
        if (i === void 0) return;
        this.didOpen(t, i, r);
      } else {
        let i = this.getMatchingCellsFromEvent(t, r, e);
        if (i === void 0) {
          this.didClose(t, r);
          return;
        }
        let s = this.asNotebookDocumentChangeEvent(e.notebook, e, r, i);
        s !== void 0 && this.doSendChange(s, i).catch(() => {
        });
      }
    }
    didSave(e) {
      this.getSyncInfo(e) !== void 0 && this.doSendSave(e).catch(() => {
      });
    }
    didClose(e, t = this.getSyncInfo(e)) {
      if (t === void 0) return;
      let r = e.getCells().filter((i) => t.uris.has(i.document.uri.toString()));
      this.doSendClose(e, r).catch(() => {
      });
    }
    async sendDidOpenNotebookDocument(e) {
      if (this.getSyncInfo(e) !== void 0) throw new Error(`Notebook document ${e.uri.toString()} is already open`);
      let r = this.getMatchingCells(e);
      if (r !== void 0) return this.doSendOpen(e, r);
    }
    async doSendOpen(e, t) {
      let r = async (s, o) => {
        let a = o.map((c) => this.client.code2ProtocolConverter.asTextDocumentItem(c.document));
        try {
          await this.client.sendNotification(cr.DidOpenNotebookDocumentNotification.type, { notebookDocument: Ni.c2p.asNotebookDocument(s, o, this.client.code2ProtocolConverter), cellTextDocuments: a }), this.onOpenNotificationSent.fire(s);
        } catch (c) {
          throw this.client.error("Sending DidOpenNotebookDocumentNotification failed", c), c;
        }
      }, i = this.client.middleware?.notebooks;
      return this.notebookSyncInfo.set(e.uri.toString(), ra.create(t)), i?.didOpen !== void 0 ? i.didOpen(e, t, r) : r(e, t);
    }
    async sendDidChangeNotebookDocument(e) {
      let t = this.getMatchingCellsFromSyncInfo(e.notebook);
      if (t === void 0) throw new Error(`Received changed event for un-synced notebook ${e.notebook.uri.toString()}`);
      return this.doSendChange(e, t);
    }
    async doSendChange(e, t) {
      let r = async (s) => {
        try {
          await this.client.sendNotification(cr.DidChangeNotebookDocumentNotification.type, { notebookDocument: Ni.c2p.asVersionedNotebookDocumentIdentifier(s.notebook, this.client.code2ProtocolConverter), change: Ni.c2p.asNotebookDocumentChangeEvent(s, this.client.code2ProtocolConverter) }), this.onChangeNotificationSent.fire(s);
        } catch (o) {
          throw this.client.error("Sending DidChangeNotebookDocumentNotification failed", o), o;
        }
      }, i = this.client.middleware?.notebooks;
      return e.cells?.structure !== void 0 && this.notebookSyncInfo.set(e.notebook.uri.toString(), ra.create(t)), i?.didChange !== void 0 ? i?.didChange(e, r) : r(e);
    }
    async sendDidSaveNotebookDocument(e) {
      return this.doSendSave(e);
    }
    async doSendSave(e) {
      let t = async (i) => {
        try {
          await this.client.sendNotification(cr.DidSaveNotebookDocumentNotification.type, { notebookDocument: { uri: this.client.code2ProtocolConverter.asUri(i.uri) } }), this.onSaveNotificationSent.fire(i);
        } catch (s) {
          throw this.client.error("Sending DidSaveNotebookDocumentNotification failed", s), s;
        }
      }, r = this.client.middleware?.notebooks;
      return r?.didSave !== void 0 ? r.didSave(e, t) : t(e);
    }
    async sendDidCloseNotebookDocument(e) {
      let t = this.getMatchingCellsFromSyncInfo(e);
      if (t === void 0) throw new Error(`Received close event for un-synced notebook ${e.uri.toString()}`);
      return this.doSendClose(e, t);
    }
    async doSendClose(e, t) {
      let r = async (s, o) => {
        try {
          await this.client.sendNotification(cr.DidCloseNotebookDocumentNotification.type, { notebookDocument: { uri: this.client.code2ProtocolConverter.asUri(s.uri) }, cellTextDocuments: o.map((a) => this.client.code2ProtocolConverter.asTextDocumentIdentifier(a.document)) }), this.onCloseNotificationSent.fire(s);
        } catch (a) {
          throw this.client.error("Sending DidCloseNotebookDocumentNotification failed", a), a;
        }
      }, i = this.client.middleware?.notebooks;
      return this.notebookSyncInfo.delete(e.uri.toString()), i?.didClose !== void 0 ? i.didClose(e, t, r) : r(e, t);
    }
    getSynchronizedCells(e) {
      return this.getSyncInfo(e)?.cells;
    }
    asNotebookDocumentChangeEvent(e, t, r, i) {
      if (t !== void 0 && t.notebook !== e) throw new Error("Notebook must be identical");
      let s = { notebook: e };
      t?.metadata !== void 0 && (s.metadata = Ni.c2p.asMetadata(t.metadata));
      let o;
      if (t?.cellChanges !== void 0 && t.cellChanges.length > 0) {
        let a = [];
        o = new Set(i.map((c) => c.document.uri.toString()));
        for (let c of t.cellChanges) o.has(c.cell.document.uri.toString()) && (c.executionSummary !== void 0 || c.metadata !== void 0) && a.push(c.cell);
        a.length > 0 && (s.cells = s.cells ?? {}, s.cells.data = a);
      }
      if ((t?.contentChanges !== void 0 && t.contentChanges.length > 0 || t === void 0) && r !== void 0 && i !== void 0) {
        let a = r.cells, c = i, l = Pd.computeDiff(a, c, false), d, p;
        if (l !== void 0) {
          d = l.cells === void 0 ? /* @__PURE__ */ new Map() : new Map(l.cells.map((g) => [g.document.uri.toString(), g])), p = l.deleteCount === 0 ? /* @__PURE__ */ new Map() : new Map(a.slice(l.start, l.start + l.deleteCount).map((g) => [g.document.uri.toString(), g]));
          for (let g of Array.from(p.keys())) d.has(g) && (p.delete(g), d.delete(g));
          s.cells = s.cells ?? {};
          let h = [], m = [];
          if (d.size > 0 || p.size > 0) {
            for (let g of d.values()) h.push(g);
            for (let g of p.values()) m.push(g);
          }
          s.cells.structure = { array: l, didOpen: h, didClose: m };
        }
      }
      return Object.keys(s).length > 1 ? s : void 0;
    }
    getMatchingCells(e, t = e.getCells()) {
      if (this.options.notebookSelector !== void 0) {
        for (let r of this.options.notebookSelector) if (r.notebook === void 0 || ta.matchNotebook(r.notebook, e)) {
          let i = this.filterCells(e, t, r.cells);
          return i.length === 0 ? void 0 : i;
        }
      }
    }
    getMatchingCellsFromEvent(e, t, r) {
      if (this.options.notebookSelector === void 0) return;
      let i;
      for (let c of this.options.notebookSelector) if (c.notebook === void 0 || ta.matchNotebook(c.notebook, e)) {
        i = c;
        break;
      }
      if (i === void 0) return;
      if ((r.cellChanges === void 0 || r.cellChanges.length === 0) && (r.contentChanges === void 0 || r.contentChanges.length === 0)) return t.cells;
      let s;
      if (r.cellChanges !== void 0 && r.cellChanges.length > 0) {
        let c = r.cellChanges.map((d) => d.cell), l = this.filterCells(e, c, i.cells);
        if (l.length !== c.length) {
          s = new Set(t.uris);
          for (let d of c) s.delete(d.document.uri.toString());
          for (let d of l) s.add(d.document.uri.toString());
        }
      }
      if (r.contentChanges !== void 0 && r.contentChanges.length > 0) {
        s === void 0 && (s = new Set(t.uris));
        for (let c of r.contentChanges) {
          for (let d of c.removedCells) s.delete(d.document.uri.toString());
          let l = this.filterCells(e, new Array(...c.addedCells), i.cells);
          for (let d of l) s.add(d.document.uri.toString());
        }
      }
      if (s === void 0) return t.cells;
      let o = [], a = e.getCells();
      for (let c of a) s.has(c.document.uri.toString()) && o.push(c);
      return o;
    }
    getMatchingCellsFromSyncInfo(e) {
      let t = this.getSyncInfo(e);
      return t !== void 0 ? t.cells : void 0;
    }
    getMatchingCellsConsideringSyncInfo(e) {
      let t = this.getSyncInfo(e);
      return t !== void 0 ? t.cells : this.getMatchingCells(e);
    }
    mergeCells(e, t, r) {
      let i = [], s = new Set(t.uris);
      for (let o of r) s.add(o.document.uri.toString());
      for (let o of e.getCells()) s.has(o.document.uri.toString()) && i.push(o);
      return i;
    }
    cellMatches(e, t) {
      let r = this.getMatchingCells(e, [t]);
      return r !== void 0 && r[0] === t;
    }
    filterCells(e, t, r) {
      let i = r !== void 0 ? t.filter((s) => {
        let o = s.document.languageId;
        return r.some(((a) => a.language === "*" || o === a.language));
      }) : t;
      return typeof this.client.clientOptions.notebookDocumentOptions?.filterCells == "function" ? this.client.clientOptions.notebookDocumentOptions.filterCells(e, i) : i;
    }
    getSyncInfo(e) {
      return this.notebookSyncInfo.get(e.uri.toString());
    }
  }, Rd = class n {
    static CellScheme = "vscode-notebook-cell";
    client;
    registrations;
    dedicatedChannel;
    _onChangeNotificationSent;
    _onOpenNotificationSent;
    _onCloseNotificationSent;
    _onSaveNotificationSent;
    constructor(e) {
      this.client = e, this.registrations = /* @__PURE__ */ new Map(), this.registrationType = cr.NotebookDocumentSyncRegistrationType.type, this._onChangeNotificationSent = new $e.EventEmitter(), this._onOpenNotificationSent = new $e.EventEmitter(), this._onCloseNotificationSent = new $e.EventEmitter(), this._onSaveNotificationSent = new $e.EventEmitter(), $e.workspace.onDidOpenTextDocument((t) => {
        if (t.uri.scheme !== n.CellScheme) return;
        let [r, i] = this.findNotebookDocumentAndCell(t);
        if (!(r === void 0 || i === void 0)) for (let s of this.registrations.values()) s instanceof Fi && s.didOpenNotebookCellTextDocument(r, i);
      }), $e.workspace.onDidChangeTextDocument((t) => {
        if (t.contentChanges.length === 0) return;
        let r = t.document;
        if (r.uri.scheme !== n.CellScheme) return;
        let [i, s] = this.findNotebookDocumentAndCell(r);
        if (!(i === void 0 || s === void 0)) for (let o of this.registrations.values()) o instanceof Fi && o.didChangeNotebookCellTextDocument(i, s, t);
      }), $e.workspace.onDidCloseTextDocument((t) => {
        if (t.uri.scheme !== n.CellScheme) return;
        let [r, i] = this.findNotebookDocumentAndCell(t);
        if (!(r === void 0 || i === void 0)) for (let s of this.registrations.values()) s instanceof Fi && s.didCloseNotebookCellTextDocument(r, i);
      });
    }
    getState() {
      if (this.registrations.size === 0) return { kind: "document", id: this.registrationType.method, registrations: false, matches: false };
      for (let e of this.registrations.values()) {
        let t = e.getState();
        if (t.kind === "document" && t.registrations === true && t.matches === true) return { kind: "document", id: this.registrationType.method, registrations: true, matches: true };
      }
      return { kind: "document", id: this.registrationType.method, registrations: true, matches: false };
    }
    registrationType;
    get onOpenNotificationSent() {
      return this._onOpenNotificationSent.event;
    }
    get onChangeNotificationSent() {
      return this._onChangeNotificationSent.event;
    }
    get onCloseNotificationSent() {
      return this._onCloseNotificationSent.event;
    }
    get onSaveNotificationSent() {
      return this._onSaveNotificationSent.event;
    }
    fillClientCapabilities(e) {
      let t = h_(h_(e, "notebookDocument"), "synchronization");
      t.dynamicRegistration = true, t.executionSummarySupport = true;
    }
    preInitialize(e) {
      let t = e.notebookDocumentSync;
      t !== void 0 && (this.dedicatedChannel = this.client.protocol2CodeConverter.asDocumentSelector(na.asDocumentSelector(t)));
    }
    initialize(e) {
      let t = e.notebookDocumentSync;
      if (t === void 0) return;
      let r = t.id ?? PP.generateUuid();
      this.register({ id: r, registerOptions: t });
    }
    register(e) {
      let t = new Fi(this.client, e.registerOptions, this._onChangeNotificationSent, this._onOpenNotificationSent, this._onCloseNotificationSent, this._onSaveNotificationSent);
      this.registrations.set(e.id, t);
    }
    unregister(e) {
      let t = this.registrations.get(e);
      t !== void 0 && (this.registrations.delete(e), t.dispose());
    }
    clear() {
      for (let e of this.registrations.values()) e.dispose();
      this.registrations.clear(), this._onChangeNotificationSent.dispose(), this._onChangeNotificationSent = new $e.EventEmitter(), this._onOpenNotificationSent.dispose(), this._onOpenNotificationSent = new $e.EventEmitter(), this._onCloseNotificationSent.dispose(), this._onCloseNotificationSent = new $e.EventEmitter(), this._onSaveNotificationSent.dispose(), this._onSaveNotificationSent = new $e.EventEmitter();
    }
    handles(e) {
      if (e.uri.scheme !== n.CellScheme) return false;
      if (this.dedicatedChannel !== void 0 && $e.languages.match(this.dedicatedChannel, e) > 0) return true;
      for (let t of this.registrations.values()) if (t.handles(e)) return true;
      return false;
    }
    getProvider(e) {
      for (let t of this.registrations.values()) if (t.handles(e.document)) return t;
    }
    findNotebookDocumentAndCell(e) {
      let t = e.uri.toString();
      for (let r of $e.workspace.notebookDocuments) for (let i of r.getCells()) if (i.document.uri.toString() === t) return [r, i];
      return [void 0, void 0];
    }
  };
  wn.NotebookDocumentSyncFeature = Rd;
});
var y_ = j((zt) => {
  "use strict";
  var TP = zt && zt.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), OP = zt && zt.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), m_ = zt && zt.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && TP(t, e, r[i]);
      return OP(t, e), t;
    };
  })();
  Object.defineProperty(zt, "__esModule", { value: true });
  zt.SyncConfigurationFeature = zt.ConfigurationFeature = void 0;
  zt.toJSONObject = Yr;
  var Li = require("vscode"), Rs = ae(), EP = m_(Qt()), xP = m_(Fe()), g_ = ye(), Td = class {
    _client;
    constructor(e) {
      this._client = e;
    }
    getState() {
      return { kind: "static" };
    }
    fillClientCapabilities(e) {
      e.workspace = e.workspace || {}, e.workspace.configuration = true;
    }
    initialize() {
      let e = this._client;
      e.onRequest(Rs.ConfigurationRequest.type, (t, r) => {
        let i = (o) => {
          let a = [];
          for (let c of o.items) {
            let l = c.scopeUri !== void 0 && c.scopeUri !== null ? this._client.protocol2CodeConverter.asUri(c.scopeUri) : void 0;
            a.push(this.getConfiguration(l, c.section !== null ? c.section : void 0));
          }
          return a;
        }, s = e.middleware.workspace;
        return s && s.configuration ? s.configuration(t, r, i) : i(t, r);
      });
    }
    getConfiguration(e, t) {
      let r = null;
      if (t) {
        let i = t.lastIndexOf(".");
        if (i === -1) r = Yr(Li.workspace.getConfiguration(void 0, e).get(t));
        else {
          let s = Li.workspace.getConfiguration(t.substr(0, i), e);
          s && (r = Yr(s.get(t.substr(i + 1))));
        }
      } else {
        let i = Li.workspace.getConfiguration(void 0, e);
        r = {};
        for (let s of Object.keys(i)) i.has(s) && (r[s] = Yr(i.get(s)));
      }
      return r === void 0 && (r = null), r;
    }
    clear() {
    }
  };
  zt.ConfigurationFeature = Td;
  function Yr(n) {
    if (n) {
      if (Array.isArray(n)) return n.map(Yr);
      if (typeof n == "object") {
        let e = /* @__PURE__ */ Object.create(null);
        for (let t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = Yr(n[t]));
        return e;
      }
    }
    return n;
  }
  var Od = class {
    _client;
    isCleared;
    _listeners;
    constructor(e) {
      this._client = e, this.isCleared = false, this._listeners = /* @__PURE__ */ new Map();
    }
    getState() {
      return { kind: "workspace", id: this.registrationType.method, registrations: this._listeners.size > 0 };
    }
    get registrationType() {
      return Rs.DidChangeConfigurationNotification.type;
    }
    fillClientCapabilities(e) {
      (0, g_.ensure)((0, g_.ensure)(e, "workspace"), "didChangeConfiguration").dynamicRegistration = true;
    }
    initialize() {
      this.isCleared = false;
      let e = this._client.clientOptions.synchronize?.configurationSection;
      e !== void 0 && this.register({ id: xP.generateUuid(), registerOptions: { section: e } });
    }
    register(e) {
      let t = Li.workspace.onDidChangeConfiguration((r) => {
        this.onDidChangeConfiguration(e.registerOptions.section, r);
      });
      this._listeners.set(e.id, t), e.registerOptions.section !== void 0 && this.onDidChangeConfiguration(e.registerOptions.section, void 0);
    }
    unregister(e) {
      let t = this._listeners.get(e);
      t && (this._listeners.delete(e), t.dispose());
    }
    clear() {
      for (let e of this._listeners.values()) e.dispose();
      this._listeners.clear(), this.isCleared = true;
    }
    onDidChangeConfiguration(e, t) {
      if (this.isCleared) return;
      let r;
      if (EP.string(e) ? r = [e] : r = e, r !== void 0 && t !== void 0 && !r.some((a) => t.affectsConfiguration(a))) return;
      let i = async (o) => o === void 0 ? this._client.sendNotification(Rs.DidChangeConfigurationNotification.type, { settings: null }) : this._client.sendNotification(Rs.DidChangeConfigurationNotification.type, { settings: this.extractSettingsInformation(o) }), s = this._client.middleware.workspace?.didChangeConfiguration;
      (s ? s(r, i) : i(r)).catch((o) => {
        this._client.error(`Sending notification ${Rs.DidChangeConfigurationNotification.type.method} failed`, o);
      });
    }
    extractSettingsInformation(e) {
      function t(s, o) {
        let a = s;
        for (let c = 0; c < o.length - 1; c++) {
          let l = a[o[c]];
          l || (l = /* @__PURE__ */ Object.create(null), a[o[c]] = l), a = l;
        }
        return a;
      }
      let r = this._client.clientOptions.workspaceFolder ? this._client.clientOptions.workspaceFolder.uri : void 0, i = /* @__PURE__ */ Object.create(null);
      for (let s = 0; s < e.length; s++) {
        let o = e[s], a = o.indexOf("."), c = null;
        if (a >= 0 ? c = Li.workspace.getConfiguration(o.substr(0, a), r).get(o.substr(a + 1)) : c = Li.workspace.getConfiguration(void 0, r).get(o), c) {
          let l = e[s].split(".");
          t(i, l)[l[l.length - 1]] = Yr(c);
        }
      }
      return i;
    }
  };
  zt.SyncConfigurationFeature = Od;
});
var C_ = {};
Xa(C_, { TextDocument: () => Ed });
function xd(n, e) {
  if (n.length <= 1) return n;
  let t = n.length / 2 | 0, r = n.slice(0, t), i = n.slice(t);
  xd(r, e), xd(i, e);
  let s = 0, o = 0, a = 0;
  for (; s < r.length && o < i.length; ) e(r[s], i[o]) <= 0 ? n[a++] = r[s++] : n[a++] = i[o++];
  for (; s < r.length; ) n[a++] = r[s++];
  for (; o < i.length; ) n[a++] = i[o++];
  return n;
}
function __(n, e, t = 0) {
  let r = e ? [t] : [];
  for (let i = 0; i < n.length; i++) {
    let s = n.charCodeAt(i);
    v_(s) && (s === 13 && i + 1 < n.length && n.charCodeAt(i + 1) === 10 && i++, r.push(t + i + 1));
  }
  return r;
}
function v_(n) {
  return n === 13 || n === 10;
}
function b_(n) {
  let e = n.start, t = n.end;
  return e.line > t.line || e.line === t.line && e.character > t.character ? { start: t, end: e } : n;
}
function qP(n) {
  let e = b_(n.range);
  return e !== n.range ? { newText: n.newText, range: e } : n;
}
var sa, Ed, w_ = ip(() => {
  "use strict";
  sa = class n {
    constructor(e, t, r, i) {
      this._uri = e, this._languageId = t, this._version = r, this._content = i, this._lineOffsets = void 0;
    }
    get uri() {
      return this._uri;
    }
    get languageId() {
      return this._languageId;
    }
    get version() {
      return this._version;
    }
    getText(e) {
      if (e) {
        let t = this.offsetAt(e.start), r = this.offsetAt(e.end);
        return this._content.substring(t, r);
      }
      return this._content;
    }
    update(e, t) {
      for (let r of e) if (n.isIncremental(r)) {
        let i = b_(r.range), s = this.offsetAt(i.start), o = this.offsetAt(i.end);
        this._content = this._content.substring(0, s) + r.text + this._content.substring(o, this._content.length);
        let a = Math.max(i.start.line, 0), c = Math.max(i.end.line, 0), l = this._lineOffsets, d = __(r.text, false, s);
        if (c - a === d.length) for (let h = 0, m = d.length; h < m; h++) l[h + a + 1] = d[h];
        else d.length < 1e4 ? l.splice(a + 1, c - a, ...d) : this._lineOffsets = l = l.slice(0, a + 1).concat(d, l.slice(c + 1));
        let p = r.text.length - (o - s);
        if (p !== 0) for (let h = a + 1 + d.length, m = l.length; h < m; h++) l[h] = l[h] + p;
      } else if (n.isFull(r)) this._content = r.text, this._lineOffsets = void 0;
      else throw new Error("Unknown change event received");
      this._version = t;
    }
    getLineOffsets() {
      return this._lineOffsets === void 0 && (this._lineOffsets = __(this._content, true)), this._lineOffsets;
    }
    positionAt(e) {
      e = Math.max(Math.min(e, this._content.length), 0);
      let t = this.getLineOffsets(), r = 0, i = t.length;
      if (i === 0) return { line: 0, character: e };
      for (; r < i; ) {
        let o = Math.floor((r + i) / 2);
        t[o] > e ? i = o : r = o + 1;
      }
      let s = r - 1;
      return e = this.ensureBeforeEOL(e, t[s]), { line: s, character: e - t[s] };
    }
    offsetAt(e) {
      let t = this.getLineOffsets();
      if (e.line >= t.length) return this._content.length;
      if (e.line < 0) return 0;
      let r = t[e.line];
      if (e.character <= 0) return r;
      let i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length, s = Math.min(r + e.character, i);
      return this.ensureBeforeEOL(s, r);
    }
    getLineRange(e) {
      let t = this.getLineOffsets();
      if (e >= t.length) {
        let o = t.length - 1;
        return { start: { line: o, character: 0 }, end: { line: o, character: this._content.length - t[o] } };
      } else if (e < 0) return { start: { line: 0, character: 0 }, end: { line: 0, character: 0 } };
      let r = t[e], i = e + 1 < t.length ? t[e + 1] : this._content.length, s = this.ensureBeforeEOL(i, r);
      return { start: { line: e, character: 0 }, end: { line: e, character: s - r } };
    }
    getEOLCharacters(e) {
      let t = this.getLineOffsets();
      if (e >= t.length) return "";
      if (e < 0) return "";
      let r = e + 1 < t.length ? t[e + 1] : this._content.length, i = this.ensureBeforeEOL(r, t[e]);
      return this._content.substring(i, r);
    }
    ensureBeforeEOL(e, t) {
      for (; e > t && v_(this._content.charCodeAt(e - 1)); ) e--;
      return e;
    }
    get lineCount() {
      return this.getLineOffsets().length;
    }
    static isIncremental(e) {
      let t = e;
      return t != null && typeof t.text == "string" && t.range !== void 0 && (t.rangeLength === void 0 || typeof t.rangeLength == "number");
    }
    static isFull(e) {
      let t = e;
      return t != null && typeof t.text == "string" && t.range === void 0 && t.rangeLength === void 0;
    }
  };
  (function(n) {
    function e(i, s, o, a) {
      return new sa(i, s, o, a);
    }
    n.create = e;
    function t(i, s, o) {
      if (i instanceof sa) return i.update(s, o), i;
      throw new Error("TextDocument.update: document must be created by TextDocument.create");
    }
    n.update = t;
    function r(i, s) {
      let o = i.getText(), a = xd(s.map(qP), (d, p) => {
        let h = d.range.start.line - p.range.start.line;
        return h === 0 ? d.range.start.character - p.range.start.character : h;
      }), c = 0, l = [];
      for (let d of a) {
        let p = i.offsetAt(d.range.start);
        if (p < c) throw new Error("Overlapping edit");
        p > c && l.push(o.substring(c, p)), d.newText.length && l.push(d.newText), c = i.offsetAt(d.range.end);
      }
      return l.push(o.substr(c)), l.join("");
    }
    n.applyEdits = r;
  })(Ed || (Ed = {}));
});
var S_ = j((nt) => {
  "use strict";
  var MP = nt && nt.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), jP = nt && nt.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), IP = nt && nt.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && MP(t, e, r[i]);
      return jP(t, e), t;
    };
  })();
  Object.defineProperty(nt, "__esModule", { value: true });
  nt.DidSaveTextDocumentFeature = nt.WillSaveWaitUntilFeature = nt.WillSaveFeature = nt.DidChangeTextDocumentFeature = nt.DidCloseTextDocumentFeature = nt.DidOpenTextDocumentFeature = void 0;
  var Qe = require("vscode"), Re = ae(), Ke = ye(), Ai = IP(Fe()), NP = (w_(), Zi(C_)), qd = class extends Ke.TextDocumentEventFeature {
    _syncedDocuments;
    _pendingOpenNotifications;
    _delayOpen;
    _pendingOpenListeners;
    constructor(e, t) {
      super(e, Qe.workspace.onDidOpenTextDocument, Re.DidOpenTextDocumentNotification.type, () => e.middleware.didOpen, (r) => e.code2ProtocolConverter.asOpenTextDocumentParams(r), (r) => r, Ke.TextDocumentEventFeature.textDocumentFilter), this._syncedDocuments = t, this._pendingOpenNotifications = /* @__PURE__ */ new Map(), this._delayOpen = e.clientOptions.textSynchronization?.delayOpenNotifications ?? false;
    }
    async callback(e) {
      if (this._delayOpen) {
        if (!this.matches(e)) return;
        if (this._client.visibleDocuments.isVisible(e)) return super.callback(e);
        {
          let r = new Ld(e);
          this._pendingOpenNotifications.set(r.uri.toString(), r);
        }
      } else return super.callback(e);
    }
    get openDocuments() {
      return this._syncedDocuments.values();
    }
    fillClientCapabilities(e) {
      (0, Ke.ensure)((0, Ke.ensure)(e, "textDocument"), "synchronization").dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = e.resolvedTextDocumentSync;
      t && r && r.openClose && this.register({ id: Ai.generateUuid(), registerOptions: { documentSelector: t } });
    }
    get registrationType() {
      return Re.DidOpenTextDocumentNotification.type;
    }
    register(e) {
      if (super.register(e), !e.registerOptions.documentSelector) return;
      let t = this._client.protocol2CodeConverter.asDocumentSelector(e.registerOptions.documentSelector);
      if (Qe.workspace.textDocuments.forEach((r) => {
        let i = r.uri.toString();
        if (!this._syncedDocuments.has(i) && Qe.languages.match(t, r) > 0 && !this._client.hasDedicatedTextSynchronizationFeature(r)) if (this._client.visibleDocuments.isVisible(r)) {
          let o = this._client.middleware, a = (c) => this._client.sendNotification(this._type, this._createParams(c));
          (o.didOpen ? o.didOpen(r, a) : a(r)).catch((c) => {
            this._client.error(`Sending document notification ${this._type.method} failed`, c);
          }), this._syncedDocuments.set(i, r);
        } else this._pendingOpenNotifications.set(i, r);
      }), this._delayOpen && this._pendingOpenListeners === void 0) {
        this._pendingOpenListeners = [];
        let r = this._client.visibleDocuments;
        this._pendingOpenListeners.push(r.onClose((i) => {
          for (let s of i) this._pendingOpenNotifications.delete(s.toString());
        })), this._pendingOpenListeners.push(r.onOpen((i) => {
          for (let s of i) {
            let o = this._pendingOpenNotifications.get(s.toString());
            o !== void 0 && (super.callback(o).catch(((a) => {
              this._client.error(`Sending document notification ${this._type.method} failed`, a);
            })), this._pendingOpenNotifications.delete(s.toString()));
          }
        })), this._pendingOpenListeners.push(Qe.workspace.onDidCloseTextDocument((i) => {
          this._pendingOpenNotifications.delete(i.uri.toString());
        }));
      }
    }
    async sendPendingOpenNotifications(e) {
      let t = Array.from(this._pendingOpenNotifications.values());
      this._pendingOpenNotifications.clear();
      let r = false;
      for (let i of t) {
        if (e !== void 0 && i.uri.toString() === e) {
          r = true;
          continue;
        }
        await super.callback(i);
      }
      return r;
    }
    getTextDocument(e) {
      return e;
    }
    notificationSent(e, t, r) {
      this._syncedDocuments.set(e.uri.toString(), e), super.notificationSent(e, t, r);
    }
    clear() {
      if (this._pendingOpenNotifications.clear(), this._pendingOpenListeners !== void 0) {
        for (let e of this._pendingOpenListeners) e.dispose();
        this._pendingOpenListeners = void 0;
      }
      super.clear();
    }
  };
  nt.DidOpenTextDocumentFeature = qd;
  var Md = class extends Ke.TextDocumentEventFeature {
    _syncedDocuments;
    _pendingTextDocumentChanges;
    constructor(e, t, r) {
      super(e, Qe.workspace.onDidCloseTextDocument, Re.DidCloseTextDocumentNotification.type, () => e.middleware.didClose, (i) => e.code2ProtocolConverter.asCloseTextDocumentParams(i), (i) => i, Ke.TextDocumentEventFeature.textDocumentFilter), this._syncedDocuments = t, this._pendingTextDocumentChanges = r;
    }
    get registrationType() {
      return Re.DidCloseTextDocumentNotification.type;
    }
    fillClientCapabilities(e) {
      (0, Ke.ensure)((0, Ke.ensure)(e, "textDocument"), "synchronization").dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = e.resolvedTextDocumentSync;
      t && r && r.openClose && this.register({ id: Ai.generateUuid(), registerOptions: { documentSelector: t } });
    }
    async callback(e) {
      await super.callback(e), this._pendingTextDocumentChanges.delete(e.uri.toString());
    }
    getTextDocument(e) {
      return e;
    }
    notificationSent(e, t, r) {
      this._syncedDocuments.delete(e.uri.toString()), super.notificationSent(e, t, r);
    }
    unregister(e) {
      let t = this._selectors.get(e);
      if (t === void 0) return;
      super.unregister(e);
      let r = this._selectors.values();
      this._syncedDocuments.forEach((i) => {
        if (Qe.languages.match(t, i) > 0 && !this._selectorFilter(r, i) && !this._client.hasDedicatedTextSynchronizationFeature(i)) {
          let s = this._client.middleware, o = (a) => this._client.sendNotification(this._type, this._createParams(a));
          this._syncedDocuments.delete(i.uri.toString()), (s.didClose ? s.didClose(i, o) : o(i)).catch((a) => {
            this._client.error(`Sending document notification ${this._type.method} failed`, a);
          });
        }
      });
    }
  };
  nt.DidCloseTextDocumentFeature = Md;
  var jd = class extends Ke.DynamicDocumentFeature {
    _listener;
    _changeData;
    _onAboutToSendNotification;
    _onNotificationSent;
    _onPendingChangeAdded;
    _pendingTextDocumentChanges;
    _syncKind;
    constructor(e, t) {
      super(e), this._changeData = /* @__PURE__ */ new Map(), this._onAboutToSendNotification = new Qe.EventEmitter(), this._onNotificationSent = new Qe.EventEmitter(), this._onPendingChangeAdded = new Qe.EventEmitter(), this._pendingTextDocumentChanges = t, this._syncKind = Re.TextDocumentSyncKind.None;
    }
    get onAboutToSendNotification() {
      return this._onAboutToSendNotification.event;
    }
    get onNotificationSent() {
      return this._onNotificationSent.event;
    }
    get onPendingChangeAdded() {
      return this._onPendingChangeAdded.event;
    }
    get syncKind() {
      return this._syncKind;
    }
    get registrationType() {
      return Re.DidChangeTextDocumentNotification.type;
    }
    fillClientCapabilities(e) {
      (0, Ke.ensure)((0, Ke.ensure)(e, "textDocument"), "synchronization").dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = e.resolvedTextDocumentSync;
      t && r && r.change !== void 0 && r.change !== Re.TextDocumentSyncKind.None && this.register({ id: Ai.generateUuid(), registerOptions: Object.assign({}, { documentSelector: t }, { syncKind: r.change }) });
    }
    register(e) {
      e.registerOptions.documentSelector && (this._listener || (this._listener = Qe.workspace.onDidChangeTextDocument(this.callback, this)), this._changeData.set(e.id, { syncKind: e.registerOptions.syncKind, documentSelector: this._client.protocol2CodeConverter.asDocumentSelector(e.registerOptions.documentSelector) }), this.updateSyncKind(e.registerOptions.syncKind));
    }
    *getDocumentSelectors() {
      for (let e of this._changeData.values()) yield e.documentSelector;
    }
    async callback(e) {
      if (e.contentChanges.length === 0) return;
      let t = e.document.uri, r = e.document.version, i = [];
      for (let s of this._changeData.values()) if (Qe.languages.match(s.documentSelector, e.document) > 0 && !this._client.hasDedicatedTextSynchronizationFeature(e.document)) {
        let o = this._client.middleware;
        if (s.syncKind === Re.TextDocumentSyncKind.Incremental) {
          let a = async (c) => {
            let l = this._client.code2ProtocolConverter.asChangeTextDocumentParams(c, t, r);
            this.aboutToSendNotification(c.document, Re.DidChangeTextDocumentNotification.type, l), await this._client.sendNotification(Re.DidChangeTextDocumentNotification.type, l), this.notificationSent(c.document, Re.DidChangeTextDocumentNotification.type, l);
          };
          i.push(o.didChange ? o.didChange(e, (c) => a(c)) : a(e));
        } else if (s.syncKind === Re.TextDocumentSyncKind.Full) {
          let a = async (c) => {
            let l = c.document.uri.toString();
            this._pendingTextDocumentChanges.set(l, c.document), this._onPendingChangeAdded.fire();
          };
          i.push(o.didChange ? o.didChange(e, (c) => a(c)) : a(e));
        }
      }
      return Promise.all(i).then(void 0, (s) => {
        throw this._client.error(`Sending document notification ${Re.DidChangeTextDocumentNotification.type.method} failed`, s), s;
      });
    }
    aboutToSendNotification(e, t, r) {
      this._onAboutToSendNotification.fire({ textDocument: e, type: t, params: r });
    }
    notificationSent(e, t, r) {
      this._onNotificationSent.fire({ textDocument: e, type: t, params: r });
    }
    unregister(e) {
      if (this._changeData.delete(e), this._changeData.size === 0) this._listener && (this._listener.dispose(), this._listener = void 0), this._syncKind = Re.TextDocumentSyncKind.None;
      else {
        this._syncKind = Re.TextDocumentSyncKind.None;
        for (let t of this._changeData.values()) if (this.updateSyncKind(t.syncKind), this._syncKind === Re.TextDocumentSyncKind.Full) break;
      }
    }
    clear() {
      this._pendingTextDocumentChanges.clear(), this._changeData.clear(), this._syncKind = Re.TextDocumentSyncKind.None, this._listener && (this._listener.dispose(), this._listener = void 0);
    }
    getPendingDocumentChanges(e) {
      if (this._pendingTextDocumentChanges.size === 0) return [];
      let t;
      if (e.size === 0) t = Array.from(this._pendingTextDocumentChanges.values()), this._pendingTextDocumentChanges.clear();
      else {
        t = [];
        for (let r of this._pendingTextDocumentChanges) e.has(r[0]) || (t.push(r[1]), this._pendingTextDocumentChanges.delete(r[0]));
      }
      return t;
    }
    getProvider(e) {
      for (let t of this._changeData.values()) if (Qe.languages.match(t.documentSelector, e) > 0) return { send: (r) => this.callback(r) };
    }
    updateSyncKind(e) {
      if (this._syncKind !== Re.TextDocumentSyncKind.Full) switch (e) {
        case Re.TextDocumentSyncKind.Full:
          this._syncKind = e;
          break;
        case Re.TextDocumentSyncKind.Incremental:
          this._syncKind === Re.TextDocumentSyncKind.None && (this._syncKind = Re.TextDocumentSyncKind.Incremental);
          break;
      }
    }
  };
  nt.DidChangeTextDocumentFeature = jd;
  var Id = class extends Ke.TextDocumentEventFeature {
    constructor(e) {
      super(e, Qe.workspace.onWillSaveTextDocument, Re.WillSaveTextDocumentNotification.type, () => e.middleware.willSave, (t) => e.code2ProtocolConverter.asWillSaveTextDocumentParams(t), (t) => t.document, (t, r) => Ke.TextDocumentEventFeature.textDocumentFilter(t, r.document));
    }
    get registrationType() {
      return Re.WillSaveTextDocumentNotification.type;
    }
    fillClientCapabilities(e) {
      let t = (0, Ke.ensure)((0, Ke.ensure)(e, "textDocument"), "synchronization");
      t.willSave = true;
    }
    initialize(e, t) {
      let r = e.resolvedTextDocumentSync;
      t && r && r.willSave && this.register({ id: Ai.generateUuid(), registerOptions: { documentSelector: t } });
    }
    getTextDocument(e) {
      return e.document;
    }
  };
  nt.WillSaveFeature = Id;
  var Nd = class extends Ke.DynamicDocumentFeature {
    _listener;
    _selectors;
    constructor(e) {
      super(e), this._selectors = /* @__PURE__ */ new Map();
    }
    getDocumentSelectors() {
      return this._selectors.values();
    }
    get registrationType() {
      return Re.WillSaveTextDocumentWaitUntilRequest.type;
    }
    fillClientCapabilities(e) {
      let t = (0, Ke.ensure)((0, Ke.ensure)(e, "textDocument"), "synchronization");
      t.willSaveWaitUntil = true;
    }
    initialize(e, t) {
      let r = e.resolvedTextDocumentSync;
      t && r && r.willSaveWaitUntil && this.register({ id: Ai.generateUuid(), registerOptions: { documentSelector: t } });
    }
    register(e) {
      e.registerOptions.documentSelector && (this._listener || (this._listener = Qe.workspace.onWillSaveTextDocument(this.callback, this)), this._selectors.set(e.id, this._client.protocol2CodeConverter.asDocumentSelector(e.registerOptions.documentSelector)));
    }
    callback(e) {
      if (Ke.TextDocumentEventFeature.textDocumentFilter(this._selectors.values(), e.document) && !this._client.hasDedicatedTextSynchronizationFeature(e.document)) {
        let t = this._client.middleware, r = (i) => this._client.sendRequest(Re.WillSaveTextDocumentWaitUntilRequest.type, this._client.code2ProtocolConverter.asWillSaveTextDocumentParams(i)).then(async (s) => {
          let o = await this._client.protocol2CodeConverter.asTextEdits(s);
          return o === void 0 ? [] : o;
        });
        e.waitUntil(t.willSaveWaitUntil ? t.willSaveWaitUntil(e, r) : r(e));
      }
    }
    unregister(e) {
      this._selectors.delete(e), this._selectors.size === 0 && this._listener && (this._listener.dispose(), this._listener = void 0);
    }
    clear() {
      this._selectors.clear(), this._listener && (this._listener.dispose(), this._listener = void 0);
    }
  };
  nt.WillSaveWaitUntilFeature = Nd;
  var Fd = class extends Ke.TextDocumentEventFeature {
    _includeText;
    constructor(e) {
      super(e, Qe.workspace.onDidSaveTextDocument, Re.DidSaveTextDocumentNotification.type, () => e.middleware.didSave, (t) => e.code2ProtocolConverter.asSaveTextDocumentParams(t, this._includeText), (t) => t, Ke.TextDocumentEventFeature.textDocumentFilter), this._includeText = false;
    }
    get registrationType() {
      return Re.DidSaveTextDocumentNotification.type;
    }
    fillClientCapabilities(e) {
      (0, Ke.ensure)((0, Ke.ensure)(e, "textDocument"), "synchronization").didSave = true;
    }
    initialize(e, t) {
      let r = e.resolvedTextDocumentSync;
      if (t && r && r.save) {
        let i = typeof r.save == "boolean" ? { includeText: false } : { includeText: !!r.save.includeText };
        this.register({ id: Ai.generateUuid(), registerOptions: Object.assign({}, { documentSelector: t }, i) });
      }
    }
    register(e) {
      this._includeText = !!e.registerOptions.includeText, super.register(e);
    }
    getTextDocument(e) {
      return e;
    }
  };
  nt.DidSaveTextDocumentFeature = Fd;
  var FP = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
  function LP(n = "") {
    let e = "(-?\\d*\\.\\d\\w*)|([^";
    for (let t of FP) n.indexOf(t) >= 0 || (e += "\\" + t);
    return e += "\\s]+)", new RegExp(e, "g");
  }
  var AP = LP(), Ld = class n {
    _extTextDocument;
    _capturedTextDocument;
    _content;
    _uri;
    _fileName;
    _languageId;
    _version;
    _eol;
    _isUntitled;
    _encoding;
    _isDirty;
    _isClosed;
    constructor(e) {
      this._extTextDocument = e, this._content = e.getText(), this._uri = e.uri, this._fileName = e.fileName, this._languageId = e.languageId, this._version = e.version, this._eol = e.eol, this._isUntitled = e.isUntitled, this._encoding = e.encoding, this._isDirty = e.isDirty, this._isClosed = e.isClosed, this._capturedTextDocument = NP.TextDocument.create(this._uri.toString(), this._languageId, this._version, this._content);
    }
    get uri() {
      return this._uri;
    }
    get languageId() {
      return this._languageId;
    }
    get version() {
      return this._version;
    }
    get eol() {
      return this._eol;
    }
    get isUntitled() {
      return this._isUntitled;
    }
    get encoding() {
      return this._encoding;
    }
    get fileName() {
      return this._fileName;
    }
    get isDirty() {
      return this._isDirty;
    }
    get isClosed() {
      return this._isClosed;
    }
    save() {
      return this.version === this._extTextDocument.version ? this._extTextDocument.save() : Promise.resolve(false);
    }
    get lineCount() {
      return this._capturedTextDocument.lineCount;
    }
    offsetAt(e) {
      return this._capturedTextDocument.offsetAt(e);
    }
    positionAt(e) {
      let t = this._capturedTextDocument.positionAt(e);
      return new Qe.Position(t.line, t.character);
    }
    getText(e) {
      return this._capturedTextDocument.getText(e);
    }
    lineAt(e) {
      let t = typeof e == "number" ? e : this.validatePosition(e).line;
      if (t < 0 || t >= this.lineCount) throw new RangeError(`Illegal value for line: ${t}`);
      let r = this._capturedTextDocument.getLineRange(t), i = this._capturedTextDocument.getText(r), s = i.search(/\S/), o = new Qe.Range(r.start.line, r.start.character, r.end.line, r.end.character), a = t + 1 < this.lineCount ? new Qe.Range(o.start.line, o.start.character, t + 1, 0) : o;
      return { lineNumber: t, text: i, range: o, rangeIncludingLineBreak: a, firstNonWhitespaceCharacterIndex: s === -1 ? i.length : s, isEmptyOrWhitespace: s === -1 };
    }
    getWordRangeAtPosition(e, t) {
      let r = this.validatePosition(e).line, i = this.lineAt(r).text, s = n.getWordRegExp(t), o;
      for (s.lastIndex = 0; (o = s.exec(i)) !== null; ) if (o.index <= e.character && s.lastIndex >= e.character) return new Qe.Range(r, o.index, r, s.lastIndex);
    }
    validateRange(e) {
      let t = this.validatePosition(e.start), r = this.validatePosition(e.end);
      return t === e.start && r === e.end ? e : new Qe.Range(t.line, t.character, r.line, r.character);
    }
    validatePosition(e) {
      let t = Math.min(Math.max(e.line, 0), this.lineCount - 1), r = this._capturedTextDocument.getLineRange(t), i = Math.min(Math.max(e.character, 0), r.end.character);
      return t === e.line && i === e.character ? e : new Qe.Position(t, i);
    }
    static getWordRegExp(e) {
      let t = e ?? AP;
      if (t.flags.includes("g")) return t;
      let r = `${t.flags}g`;
      return new RegExp(t.source, r);
    }
  };
});
var D_ = j((Sn) => {
  "use strict";
  var kP = Sn && Sn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), $P = Sn && Sn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), HP = Sn && Sn.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && kP(t, e, r[i]);
      return $P(t, e), t;
    };
  })();
  Object.defineProperty(Sn, "__esModule", { value: true });
  Sn.CompletionItemFeature = void 0;
  var UP = require("vscode"), me = ae(), Ad = ye(), WP = HP(Fe()), zP = [me.CompletionItemKind.Text, me.CompletionItemKind.Method, me.CompletionItemKind.Function, me.CompletionItemKind.Constructor, me.CompletionItemKind.Field, me.CompletionItemKind.Variable, me.CompletionItemKind.Class, me.CompletionItemKind.Interface, me.CompletionItemKind.Module, me.CompletionItemKind.Property, me.CompletionItemKind.Unit, me.CompletionItemKind.Value, me.CompletionItemKind.Enum, me.CompletionItemKind.Keyword, me.CompletionItemKind.Snippet, me.CompletionItemKind.Color, me.CompletionItemKind.File, me.CompletionItemKind.Reference, me.CompletionItemKind.Folder, me.CompletionItemKind.EnumMember, me.CompletionItemKind.Constant, me.CompletionItemKind.Struct, me.CompletionItemKind.Event, me.CompletionItemKind.Operator, me.CompletionItemKind.TypeParameter], kd = class extends Ad.TextDocumentLanguageFeature {
    labelDetailsSupport;
    constructor(e) {
      super(e, me.CompletionRequest.type), this.labelDetailsSupport = /* @__PURE__ */ new Map();
    }
    fillClientCapabilities(e) {
      let t = (0, Ad.ensure)((0, Ad.ensure)(e, "textDocument"), "completion");
      t.dynamicRegistration = true, t.contextSupport = true, t.completionItem = { snippetSupport: true, commitCharactersSupport: true, documentationFormat: [me.MarkupKind.Markdown, me.MarkupKind.PlainText], deprecatedSupport: true, preselectSupport: true, tagSupport: { valueSet: [me.CompletionItemTag.Deprecated] }, insertReplaceSupport: true, resolveSupport: { properties: ["documentation", "detail", "additionalTextEdits"] }, insertTextModeSupport: { valueSet: [me.InsertTextMode.asIs, me.InsertTextMode.adjustIndentation] }, labelDetailsSupport: true }, t.insertTextMode = me.InsertTextMode.adjustIndentation, t.completionItemKind = { valueSet: zP }, t.completionList = { itemDefaults: ["commitCharacters", "editRange", "insertTextFormat", "insertTextMode", "data"], applyKindSupport: true };
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.completionProvider);
      r && this.register({ id: WP.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e, t) {
      this.labelDetailsSupport.set(t, !!e.completionItem?.labelDetailsSupport);
      let r = e.triggerCharacters ?? [], i = e.allCommitCharacters, s = e.documentSelector, o = { provideCompletionItems: (a, c, l, d) => {
        let p = this._client, h = this._client.middleware, m = (g, y, T, R) => p.sendRequest(me.CompletionRequest.type, p.code2ProtocolConverter.asCompletionParams(g, y, T), R).then((v) => R.isCancellationRequested ? null : p.protocol2CodeConverter.asCompletionResult(v, i, R), (v) => p.handleFailedRequest(me.CompletionRequest.type, R, v, null));
        return h.provideCompletionItem ? h.provideCompletionItem(a, c, d, l, m) : m(a, c, d, l);
      }, resolveCompletionItem: e.resolveProvider ? (a, c) => {
        let l = this._client, d = this._client.middleware, p = (h, m) => l.sendRequest(me.CompletionResolveRequest.type, l.code2ProtocolConverter.asCompletionItem(h, !!this.labelDetailsSupport.get(t)), m).then((g) => m.isCancellationRequested ? null : l.protocol2CodeConverter.asCompletionItem(g), (g) => l.handleFailedRequest(me.CompletionResolveRequest.type, m, g, h));
        return d.resolveCompletionItem ? d.resolveCompletionItem(a, c, p) : p(a, c);
      } : void 0 };
      return [UP.languages.registerCompletionItemProvider(this._client.protocol2CodeConverter.asDocumentSelector(s), o, ...r), o];
    }
  };
  Sn.CompletionItemFeature = kd;
});
var P_ = j((Dn) => {
  "use strict";
  var KP = Dn && Dn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), BP = Dn && Dn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), GP = Dn && Dn.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && KP(t, e, r[i]);
      return BP(t, e), t;
    };
  })();
  Object.defineProperty(Dn, "__esModule", { value: true });
  Dn.HoverFeature = void 0;
  var VP = require("vscode"), Ts = ae(), $d = ye(), XP = GP(Fe()), Hd = class extends $d.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Ts.HoverRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, $d.ensure)((0, $d.ensure)(e, "textDocument"), "hover");
      t.dynamicRegistration = true, t.contentFormat = [Ts.MarkupKind.Markdown, Ts.MarkupKind.PlainText];
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.hoverProvider);
      r && this.register({ id: XP.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideHover: (i, s, o) => {
        let a = this._client, c = (d, p, h) => a.sendRequest(Ts.HoverRequest.type, a.code2ProtocolConverter.asTextDocumentPositionParams(d, p), h).then((m) => h.isCancellationRequested ? null : a.protocol2CodeConverter.asHover(m), (m) => a.handleFailedRequest(Ts.HoverRequest.type, h, m, null)), l = a.middleware;
        return l.provideHover ? l.provideHover(i, s, o, c) : c(i, s, o);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return VP.languages.registerHoverProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  Dn.HoverFeature = Hd;
});
var R_ = j((Pn) => {
  "use strict";
  var JP = Pn && Pn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), QP = Pn && Pn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), YP = Pn && Pn.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && JP(t, e, r[i]);
      return QP(t, e), t;
    };
  })();
  Object.defineProperty(Pn, "__esModule", { value: true });
  Pn.DefinitionFeature = void 0;
  var ZP = require("vscode"), Ud = ae(), Wd = ye(), eR = YP(Fe()), zd = class extends Wd.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Ud.DefinitionRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Wd.ensure)((0, Wd.ensure)(e, "textDocument"), "definition");
      t.dynamicRegistration = true, t.linkSupport = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.definitionProvider);
      r && this.register({ id: eR.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideDefinition: (i, s, o) => {
        let a = this._client, c = (d, p, h) => a.sendRequest(Ud.DefinitionRequest.type, a.code2ProtocolConverter.asTextDocumentPositionParams(d, p), h).then((m) => h.isCancellationRequested ? null : a.protocol2CodeConverter.asDefinitionResult(m, h), (m) => a.handleFailedRequest(Ud.DefinitionRequest.type, h, m, null)), l = a.middleware;
        return l.provideDefinition ? l.provideDefinition(i, s, o, c) : c(i, s, o);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return ZP.languages.registerDefinitionProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  Pn.DefinitionFeature = zd;
});
var O_ = j((Rn) => {
  "use strict";
  var tR = Rn && Rn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), nR = Rn && Rn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), rR = Rn && Rn.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && tR(t, e, r[i]);
      return nR(t, e), t;
    };
  })();
  Object.defineProperty(Rn, "__esModule", { value: true });
  Rn.SignatureHelpFeature = void 0;
  var T_ = require("vscode"), Os = ae(), Kd = ye(), iR = rR(Fe()), Bd = class extends Kd.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Os.SignatureHelpRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Kd.ensure)((0, Kd.ensure)(e, "textDocument"), "signatureHelp");
      t.dynamicRegistration = true, t.signatureInformation = { documentationFormat: [Os.MarkupKind.Markdown, Os.MarkupKind.PlainText] }, t.signatureInformation.parameterInformation = { labelOffsetSupport: true }, t.signatureInformation.activeParameterSupport = true, t.signatureInformation.noActiveParameterSupport = true, t.contextSupport = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.signatureHelpProvider);
      r && this.register({ id: iR.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = { provideSignatureHelp: (r, i, s, o) => {
        let a = this._client, c = (d, p, h, m) => a.sendRequest(Os.SignatureHelpRequest.type, a.code2ProtocolConverter.asSignatureHelpParams(d, p, h), m).then((g) => m.isCancellationRequested ? null : a.protocol2CodeConverter.asSignatureHelp(g, m), (g) => a.handleFailedRequest(Os.SignatureHelpRequest.type, m, g, null)), l = a.middleware;
        return l.provideSignatureHelp ? l.provideSignatureHelp(r, i, o, s, c) : c(r, i, o, s);
      } };
      return [this.registerProvider(e, t), t];
    }
    registerProvider(e, t) {
      let r = this._client.protocol2CodeConverter.asDocumentSelector(e.documentSelector);
      if (e.retriggerCharacters === void 0) {
        let i = e.triggerCharacters || [];
        return T_.languages.registerSignatureHelpProvider(r, t, ...i);
      } else {
        let i = { triggerCharacters: e.triggerCharacters || [], retriggerCharacters: e.retriggerCharacters || [] };
        return T_.languages.registerSignatureHelpProvider(r, t, i);
      }
    }
  };
  Rn.SignatureHelpFeature = Bd;
});
var E_ = j((Tn) => {
  "use strict";
  var sR = Tn && Tn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), oR = Tn && Tn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), aR = Tn && Tn.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && sR(t, e, r[i]);
      return oR(t, e), t;
    };
  })();
  Object.defineProperty(Tn, "__esModule", { value: true });
  Tn.DocumentHighlightFeature = void 0;
  var cR = require("vscode"), Gd = ae(), Vd = ye(), uR = aR(Fe()), Xd = class extends Vd.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Gd.DocumentHighlightRequest.type);
    }
    fillClientCapabilities(e) {
      (0, Vd.ensure)((0, Vd.ensure)(e, "textDocument"), "documentHighlight").dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.documentHighlightProvider);
      r && this.register({ id: uR.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideDocumentHighlights: (i, s, o) => {
        let a = this._client, c = (d, p, h) => a.sendRequest(Gd.DocumentHighlightRequest.type, a.code2ProtocolConverter.asTextDocumentPositionParams(d, p), h).then((m) => h.isCancellationRequested ? null : a.protocol2CodeConverter.asDocumentHighlights(m, h), (m) => a.handleFailedRequest(Gd.DocumentHighlightRequest.type, h, m, null)), l = a.middleware;
        return l.provideDocumentHighlights ? l.provideDocumentHighlights(i, s, o, c) : c(i, s, o);
      } };
      return [cR.languages.registerDocumentHighlightProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r), r];
    }
  };
  Tn.DocumentHighlightFeature = Xd;
});
var Yd = j((Pt) => {
  "use strict";
  var lR = Pt && Pt.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), dR = Pt && Pt.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), fR = Pt && Pt.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && lR(t, e, r[i]);
      return dR(t, e), t;
    };
  })();
  Object.defineProperty(Pt, "__esModule", { value: true });
  Pt.DocumentSymbolFeature = Pt.SupportedSymbolTags = Pt.SupportedSymbolKinds = void 0;
  var hR = require("vscode"), De = ae(), Jd = ye(), pR = fR(Fe());
  Pt.SupportedSymbolKinds = [De.SymbolKind.File, De.SymbolKind.Module, De.SymbolKind.Namespace, De.SymbolKind.Package, De.SymbolKind.Class, De.SymbolKind.Method, De.SymbolKind.Property, De.SymbolKind.Field, De.SymbolKind.Constructor, De.SymbolKind.Enum, De.SymbolKind.Interface, De.SymbolKind.Function, De.SymbolKind.Variable, De.SymbolKind.Constant, De.SymbolKind.String, De.SymbolKind.Number, De.SymbolKind.Boolean, De.SymbolKind.Array, De.SymbolKind.Object, De.SymbolKind.Key, De.SymbolKind.Null, De.SymbolKind.EnumMember, De.SymbolKind.Struct, De.SymbolKind.Event, De.SymbolKind.Operator, De.SymbolKind.TypeParameter];
  Pt.SupportedSymbolTags = [De.SymbolTag.Deprecated];
  var Qd = class extends Jd.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, De.DocumentSymbolRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Jd.ensure)((0, Jd.ensure)(e, "textDocument"), "documentSymbol");
      t.dynamicRegistration = true, t.symbolKind = { valueSet: Pt.SupportedSymbolKinds }, t.hierarchicalDocumentSymbolSupport = true, t.tagSupport = { valueSet: Pt.SupportedSymbolTags }, t.labelSupport = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.documentSymbolProvider);
      r && this.register({ id: pR.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideDocumentSymbols: (s, o) => {
        let a = this._client, c = async (d, p) => {
          try {
            let h = await a.sendRequest(De.DocumentSymbolRequest.type, a.code2ProtocolConverter.asDocumentSymbolParams(d), p);
            if (p.isCancellationRequested || h === void 0 || h === null) return null;
            if (h.length === 0) return [];
            {
              let m = h[0];
              return De.DocumentSymbol.is(m) ? await a.protocol2CodeConverter.asDocumentSymbols(h, p) : await a.protocol2CodeConverter.asSymbolInformations(h, p);
            }
          } catch (h) {
            return a.handleFailedRequest(De.DocumentSymbolRequest.type, p, h, null);
          }
        }, l = a.middleware;
        return l.provideDocumentSymbols ? l.provideDocumentSymbols(s, o, c) : c(s, o);
      } }, i = e.label !== void 0 ? { label: e.label } : void 0;
      return [hR.languages.registerDocumentSymbolProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r, i), r];
    }
  };
  Pt.DocumentSymbolFeature = Qd;
});
var q_ = j((On) => {
  "use strict";
  var gR = On && On.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), mR = On && On.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), yR = On && On.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && gR(t, e, r[i]);
      return mR(t, e), t;
    };
  })();
  Object.defineProperty(On, "__esModule", { value: true });
  On.WorkspaceSymbolFeature = void 0;
  var _R = require("vscode"), Es = ae(), Zd = ye(), x_ = Yd(), vR = yR(Fe()), ef = class extends Zd.WorkspaceFeature {
    constructor(e) {
      super(e, Es.WorkspaceSymbolRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Zd.ensure)((0, Zd.ensure)(e, "workspace"), "symbol");
      t.dynamicRegistration = true, t.symbolKind = { valueSet: x_.SupportedSymbolKinds }, t.tagSupport = { valueSet: x_.SupportedSymbolTags }, t.resolveSupport = { properties: ["location.range"] };
    }
    initialize(e) {
      e.workspaceSymbolProvider && this.register({ id: vR.generateUuid(), registerOptions: e.workspaceSymbolProvider === true ? { workDoneProgress: false } : e.workspaceSymbolProvider });
    }
    registerLanguageProvider(e) {
      let t = { provideWorkspaceSymbols: (r, i) => {
        let s = this._client, o = (c, l) => s.sendRequest(Es.WorkspaceSymbolRequest.type, { query: c }, l).then((d) => l.isCancellationRequested ? null : s.protocol2CodeConverter.asSymbolInformations(d, l), (d) => s.handleFailedRequest(Es.WorkspaceSymbolRequest.type, l, d, null)), a = s.middleware;
        return a.provideWorkspaceSymbols ? a.provideWorkspaceSymbols(r, i, o) : o(r, i);
      }, resolveWorkspaceSymbol: e.resolveProvider === true ? (r, i) => {
        let s = this._client, o = (c, l) => s.sendRequest(Es.WorkspaceSymbolResolveRequest.type, s.code2ProtocolConverter.asWorkspaceSymbol(c), l).then((d) => l.isCancellationRequested ? null : s.protocol2CodeConverter.asSymbolInformation(d), (d) => s.handleFailedRequest(Es.WorkspaceSymbolResolveRequest.type, l, d, null)), a = s.middleware;
        return a.resolveWorkspaceSymbol ? a.resolveWorkspaceSymbol(r, i, o) : o(r, i);
      } : void 0 };
      return [_R.languages.registerWorkspaceSymbolProvider(t), t];
    }
  };
  On.WorkspaceSymbolFeature = ef;
});
var M_ = j((En) => {
  "use strict";
  var bR = En && En.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), CR = En && En.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), wR = En && En.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && bR(t, e, r[i]);
      return CR(t, e), t;
    };
  })();
  Object.defineProperty(En, "__esModule", { value: true });
  En.ReferencesFeature = void 0;
  var SR = require("vscode"), tf = ae(), nf = ye(), DR = wR(Fe()), rf = class extends nf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, tf.ReferencesRequest.type);
    }
    fillClientCapabilities(e) {
      (0, nf.ensure)((0, nf.ensure)(e, "textDocument"), "references").dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.referencesProvider);
      r && this.register({ id: DR.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideReferences: (i, s, o, a) => {
        let c = this._client, l = (p, h, m, g) => c.sendRequest(tf.ReferencesRequest.type, c.code2ProtocolConverter.asReferenceParams(p, h, m), g).then((y) => g.isCancellationRequested ? null : c.protocol2CodeConverter.asReferences(y, g), (y) => c.handleFailedRequest(tf.ReferencesRequest.type, g, y, null)), d = c.middleware;
        return d.provideReferences ? d.provideReferences(i, s, o, a, l) : l(i, s, o, a);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return SR.languages.registerReferenceProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  En.ReferencesFeature = rf;
});
var j_ = j((oa) => {
  "use strict";
  Object.defineProperty(oa, "__esModule", { value: true });
  oa.TypeDefinitionFeature = void 0;
  var PR = require("vscode"), sf = ae(), xs = ye(), of = class extends xs.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, sf.TypeDefinitionRequest.type);
    }
    fillClientCapabilities(e) {
      (0, xs.ensure)((0, xs.ensure)(e, "textDocument"), "typeDefinition").dynamicRegistration = true;
      let t = (0, xs.ensure)((0, xs.ensure)(e, "textDocument"), "typeDefinition");
      t.dynamicRegistration = true, t.linkSupport = true;
    }
    initialize(e, t) {
      let [r, i] = this.getRegistration(t, e.typeDefinitionProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideTypeDefinition: (i, s, o) => {
        let a = this._client, c = (d, p, h) => a.sendRequest(sf.TypeDefinitionRequest.type, a.code2ProtocolConverter.asTextDocumentPositionParams(d, p), h).then((m) => h.isCancellationRequested ? null : a.protocol2CodeConverter.asDefinitionResult(m, h), (m) => a.handleFailedRequest(sf.TypeDefinitionRequest.type, h, m, null)), l = a.middleware;
        return l.provideTypeDefinition ? l.provideTypeDefinition(i, s, o, c) : c(i, s, o);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return PR.languages.registerTypeDefinitionProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  oa.TypeDefinitionFeature = of;
});
var I_ = j((aa) => {
  "use strict";
  Object.defineProperty(aa, "__esModule", { value: true });
  aa.ImplementationFeature = void 0;
  var RR = require("vscode"), af = ae(), cf = ye(), uf = class extends cf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, af.ImplementationRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, cf.ensure)((0, cf.ensure)(e, "textDocument"), "implementation");
      t.dynamicRegistration = true, t.linkSupport = true;
    }
    initialize(e, t) {
      let [r, i] = this.getRegistration(t, e.implementationProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideImplementation: (i, s, o) => {
        let a = this._client, c = (d, p, h) => a.sendRequest(af.ImplementationRequest.type, a.code2ProtocolConverter.asTextDocumentPositionParams(d, p), h).then((m) => h.isCancellationRequested ? null : a.protocol2CodeConverter.asDefinitionResult(m, h), (m) => a.handleFailedRequest(af.ImplementationRequest.type, h, m, null)), l = a.middleware;
        return l.provideImplementation ? l.provideImplementation(i, s, o, c) : c(i, s, o);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return RR.languages.registerImplementationProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  aa.ImplementationFeature = uf;
});
var N_ = j((ca) => {
  "use strict";
  Object.defineProperty(ca, "__esModule", { value: true });
  ca.ColorProviderFeature = void 0;
  var TR = require("vscode"), qs = ae(), lf = ye(), df = class extends lf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, qs.DocumentColorRequest.type);
    }
    fillClientCapabilities(e) {
      (0, lf.ensure)((0, lf.ensure)(e, "textDocument"), "colorProvider").dynamicRegistration = true;
    }
    initialize(e, t) {
      let [r, i] = this.getRegistration(t, e.colorProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideColorPresentations: (i, s, o) => {
        let a = this._client, c = (d, p, h) => {
          let m = { color: d, textDocument: a.code2ProtocolConverter.asTextDocumentIdentifier(p.document), range: a.code2ProtocolConverter.asRange(p.range) };
          return a.sendRequest(qs.ColorPresentationRequest.type, m, h).then((g) => h.isCancellationRequested ? null : this._client.protocol2CodeConverter.asColorPresentations(g, h), (g) => a.handleFailedRequest(qs.ColorPresentationRequest.type, h, g, null));
        }, l = a.middleware;
        return l.provideColorPresentations ? l.provideColorPresentations(i, s, o, c) : c(i, s, o);
      }, provideDocumentColors: (i, s) => {
        let o = this._client, a = (l, d) => {
          let p = { textDocument: o.code2ProtocolConverter.asTextDocumentIdentifier(l) };
          return o.sendRequest(qs.DocumentColorRequest.type, p, d).then((h) => d.isCancellationRequested ? null : this._client.protocol2CodeConverter.asColorInformations(h, d), (h) => o.handleFailedRequest(qs.DocumentColorRequest.type, d, h, null));
        }, c = o.middleware;
        return c.provideDocumentColors ? c.provideDocumentColors(i, s, a) : a(i, s);
      } };
      return [TR.languages.registerColorProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r), r];
    }
  };
  ca.ColorProviderFeature = df;
});
var F_ = j((xn) => {
  "use strict";
  var OR = xn && xn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), ER = xn && xn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), xR = xn && xn.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && OR(t, e, r[i]);
      return ER(t, e), t;
    };
  })();
  Object.defineProperty(xn, "__esModule", { value: true });
  xn.CodeActionFeature = void 0;
  var qR = require("vscode"), Rt = ae(), MR = xR(Fe()), ff = ye(), hf = class extends ff.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Rt.CodeActionRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, ff.ensure)((0, ff.ensure)(e, "textDocument"), "codeAction");
      t.dynamicRegistration = true, t.isPreferredSupport = true, t.disabledSupport = true, t.dataSupport = true, t.resolveSupport = { properties: ["edit", "command"] }, t.codeActionLiteralSupport = { codeActionKind: { valueSet: [Rt.CodeActionKind.Empty, Rt.CodeActionKind.QuickFix, Rt.CodeActionKind.Refactor, Rt.CodeActionKind.RefactorExtract, Rt.CodeActionKind.RefactorInline, Rt.CodeActionKind.RefactorMove, Rt.CodeActionKind.RefactorRewrite, Rt.CodeActionKind.Source, Rt.CodeActionKind.SourceOrganizeImports, Rt.CodeActionKind.Notebook] } }, t.honorsChangeAnnotations = true, t.documentationSupport = true, t.tagSupport = { valueSet: [Rt.CodeActionTag.LLMGenerated] };
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.codeActionProvider);
      r && this.register({ id: MR.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideCodeActions: (i, s, o, a) => {
        let c = this._client, l = async (p, h, m, g) => {
          let y = { textDocument: c.code2ProtocolConverter.asTextDocumentIdentifier(p), range: c.code2ProtocolConverter.asRange(h), context: c.code2ProtocolConverter.asCodeActionContextSync(m) };
          return c.sendRequest(Rt.CodeActionRequest.type, y, g).then((T) => g.isCancellationRequested || T === null || T === void 0 ? null : c.protocol2CodeConverter.asCodeActionResult(T, g), (T) => c.handleFailedRequest(Rt.CodeActionRequest.type, g, T, null));
        }, d = c.middleware;
        return d.provideCodeActions ? d.provideCodeActions(i, s, o, a, l) : l(i, s, o, a);
      }, resolveCodeAction: e.resolveProvider ? (i, s) => {
        let o = this._client, a = this._client.middleware, c = async (l, d) => o.sendRequest(Rt.CodeActionResolveRequest.type, o.code2ProtocolConverter.asCodeActionSync(l), d).then((p) => d.isCancellationRequested ? l : o.protocol2CodeConverter.asCodeAction(p, d), (p) => o.handleFailedRequest(Rt.CodeActionResolveRequest.type, d, p, l));
        return a.resolveCodeAction ? a.resolveCodeAction(i, s, c) : c(i, s);
      } : void 0 };
      return [qR.languages.registerCodeActionsProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r, this.getMetadata(e)), r];
    }
    getMetadata(e) {
      if (!(e.codeActionKinds === void 0 && e.documentation === void 0)) return { providedCodeActionKinds: this._client.protocol2CodeConverter.asCodeActionKinds(e.codeActionKinds), documentation: this._client.protocol2CodeConverter.asCodeActionDocumentations(e.documentation) };
    }
  };
  xn.CodeActionFeature = hf;
});
var A_ = j((qn) => {
  "use strict";
  var jR = qn && qn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), IR = qn && qn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), NR = qn && qn.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && jR(t, e, r[i]);
      return IR(t, e), t;
    };
  })();
  Object.defineProperty(qn, "__esModule", { value: true });
  qn.CodeLensFeature = void 0;
  var L_ = require("vscode"), ki = ae(), FR = NR(Fe()), Ms = ye(), pf = class extends Ms.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, ki.CodeLensRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Ms.ensure)((0, Ms.ensure)(e, "textDocument"), "codeLens");
      t.dynamicRegistration = true, t.resolveSupport = { properties: ["command"] }, (0, Ms.ensure)((0, Ms.ensure)(e, "workspace"), "codeLens").refreshSupport = true;
    }
    initialize(e, t) {
      this._client.onRequest(ki.CodeLensRefreshRequest.type, async () => {
        for (let s of this.getAllProviders()) s.onDidChangeCodeLensEmitter.fire();
      });
      let i = this.getRegistrationOptions(t, e.codeLensProvider);
      i && this.register({ id: FR.generateUuid(), registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = new L_.EventEmitter(), i = { onDidChangeCodeLenses: r.event, provideCodeLenses: (s, o) => {
        let a = this._client, c = (d, p) => a.sendRequest(ki.CodeLensRequest.type, a.code2ProtocolConverter.asCodeLensParams(d), p).then((h) => p.isCancellationRequested ? null : a.protocol2CodeConverter.asCodeLenses(h, p), (h) => a.handleFailedRequest(ki.CodeLensRequest.type, p, h, null)), l = a.middleware;
        return l.provideCodeLenses ? l.provideCodeLenses(s, o, c) : c(s, o);
      }, resolveCodeLens: e.resolveProvider ? (s, o) => {
        let a = this._client, c = (d, p) => a.sendRequest(ki.CodeLensResolveRequest.type, a.code2ProtocolConverter.asCodeLens(d), p).then((h) => p.isCancellationRequested ? d : a.protocol2CodeConverter.asCodeLens(h), (h) => a.handleFailedRequest(ki.CodeLensResolveRequest.type, p, h, d)), l = a.middleware;
        return l.resolveCodeLens ? l.resolveCodeLens(s, o, c) : c(s, o);
      } : void 0 };
      return [L_.languages.registerCodeLensProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), i), { provider: i, onDidChangeCodeLensEmitter: r }];
    }
  };
  qn.CodeLensFeature = pf;
});
var k_ = j((Lt) => {
  "use strict";
  var LR = Lt && Lt.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), AR = Lt && Lt.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), kR = Lt && Lt.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && LR(t, e, r[i]);
      return AR(t, e), t;
    };
  })();
  Object.defineProperty(Lt, "__esModule", { value: true });
  Lt.DocumentOnTypeFormattingFeature = Lt.DocumentRangeFormattingFeature = Lt.DocumentFormattingFeature = void 0;
  var ua = require("vscode"), ln = ae(), _f = kR(Fe()), ur = ye(), $i;
  (function(n) {
    function e(t) {
      let r = ua.workspace.getConfiguration("files", t);
      return { trimTrailingWhitespace: r.get("trimTrailingWhitespace"), trimFinalNewlines: r.get("trimFinalNewlines"), insertFinalNewline: r.get("insertFinalNewline") };
    }
    n.fromConfiguration = e;
  })($i || ($i = {}));
  var gf = class extends ur.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, ln.DocumentFormattingRequest.type);
    }
    fillClientCapabilities(e) {
      (0, ur.ensure)((0, ur.ensure)(e, "textDocument"), "formatting").dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.documentFormattingProvider);
      r && this.register({ id: _f.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideDocumentFormattingEdits: (i, s, o) => {
        let a = this._client, c = (d, p, h) => {
          let m = { textDocument: a.code2ProtocolConverter.asTextDocumentIdentifier(d), options: a.code2ProtocolConverter.asFormattingOptions(p, $i.fromConfiguration(d)) };
          return a.sendRequest(ln.DocumentFormattingRequest.type, m, h).then((g) => h.isCancellationRequested ? null : a.protocol2CodeConverter.asTextEdits(g, h), (g) => a.handleFailedRequest(ln.DocumentFormattingRequest.type, h, g, null));
        }, l = a.middleware;
        return l.provideDocumentFormattingEdits ? l.provideDocumentFormattingEdits(i, s, o, c) : c(i, s, o);
      } };
      return [ua.languages.registerDocumentFormattingEditProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r), r];
    }
  };
  Lt.DocumentFormattingFeature = gf;
  var mf = class extends ur.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, ln.DocumentRangeFormattingRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, ur.ensure)((0, ur.ensure)(e, "textDocument"), "rangeFormatting");
      t.dynamicRegistration = true, t.rangesSupport = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.documentRangeFormattingProvider);
      r && this.register({ id: _f.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideDocumentRangeFormattingEdits: (i, s, o, a) => {
        let c = this._client, l = (p, h, m, g) => {
          let y = { textDocument: c.code2ProtocolConverter.asTextDocumentIdentifier(p), range: c.code2ProtocolConverter.asRange(h), options: c.code2ProtocolConverter.asFormattingOptions(m, $i.fromConfiguration(p)) };
          return c.sendRequest(ln.DocumentRangeFormattingRequest.type, y, g).then((T) => g.isCancellationRequested ? null : c.protocol2CodeConverter.asTextEdits(T, g), (T) => c.handleFailedRequest(ln.DocumentRangeFormattingRequest.type, g, T, null));
        }, d = c.middleware;
        return d.provideDocumentRangeFormattingEdits ? d.provideDocumentRangeFormattingEdits(i, s, o, a, l) : l(i, s, o, a);
      } };
      return e.rangesSupport && (r.provideDocumentRangesFormattingEdits = (i, s, o, a) => {
        let c = this._client, l = (p, h, m, g) => {
          let y = { textDocument: c.code2ProtocolConverter.asTextDocumentIdentifier(p), ranges: c.code2ProtocolConverter.asRanges(h), options: c.code2ProtocolConverter.asFormattingOptions(m, $i.fromConfiguration(p)) };
          return c.sendRequest(ln.DocumentRangesFormattingRequest.type, y, g).then((T) => g.isCancellationRequested ? null : c.protocol2CodeConverter.asTextEdits(T, g), (T) => c.handleFailedRequest(ln.DocumentRangesFormattingRequest.type, g, T, null));
        }, d = c.middleware;
        return d.provideDocumentRangesFormattingEdits ? d.provideDocumentRangesFormattingEdits(i, s, o, a, l) : l(i, s, o, a);
      }), [ua.languages.registerDocumentRangeFormattingEditProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r), r];
    }
  };
  Lt.DocumentRangeFormattingFeature = mf;
  var yf = class extends ur.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, ln.DocumentOnTypeFormattingRequest.type);
    }
    fillClientCapabilities(e) {
      (0, ur.ensure)((0, ur.ensure)(e, "textDocument"), "onTypeFormatting").dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.documentOnTypeFormattingProvider);
      r && this.register({ id: _f.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideOnTypeFormattingEdits: (s, o, a, c, l) => {
        let d = this._client, p = (m, g, y, T, R) => {
          let v = { textDocument: d.code2ProtocolConverter.asTextDocumentIdentifier(m), position: d.code2ProtocolConverter.asPosition(g), ch: y, options: d.code2ProtocolConverter.asFormattingOptions(T, $i.fromConfiguration(m)) };
          return d.sendRequest(ln.DocumentOnTypeFormattingRequest.type, v, R).then((D) => R.isCancellationRequested ? null : d.protocol2CodeConverter.asTextEdits(D, R), (D) => d.handleFailedRequest(ln.DocumentOnTypeFormattingRequest.type, R, D, null));
        }, h = d.middleware;
        return h.provideOnTypeFormattingEdits ? h.provideOnTypeFormattingEdits(s, o, a, c, l, p) : p(s, o, a, c, l);
      } }, i = e.moreTriggerCharacter || [];
      return [ua.languages.registerOnTypeFormattingEditProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r, e.firstTriggerCharacter, ...i), r];
    }
  };
  Lt.DocumentOnTypeFormattingFeature = yf;
});
var U_ = j((Mn) => {
  "use strict";
  var $R = Mn && Mn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), HR = Mn && Mn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), H_ = Mn && Mn.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && $R(t, e, r[i]);
      return HR(t, e), t;
    };
  })();
  Object.defineProperty(Mn, "__esModule", { value: true });
  Mn.RenameFeature = void 0;
  var UR = require("vscode"), Zr = ae(), WR = H_(Fe()), $_ = H_(Qt()), vf = ye(), bf = class extends vf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Zr.RenameRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, vf.ensure)((0, vf.ensure)(e, "textDocument"), "rename");
      t.dynamicRegistration = true, t.prepareSupport = true, t.prepareSupportDefaultBehavior = Zr.PrepareSupportDefaultBehavior.Identifier, t.honorsChangeAnnotations = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.renameProvider);
      r && ($_.boolean(e.renameProvider) && (r.prepareProvider = false), this.register({ id: WR.generateUuid(), registerOptions: r }));
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideRenameEdits: (i, s, o, a) => {
        let c = this._client, l = async (p, h, m, g) => {
          let y = { textDocument: c.code2ProtocolConverter.asTextDocumentIdentifier(p), position: c.code2ProtocolConverter.asPosition(h), newName: m }, T = null;
          try {
            T = await c.sendRequest(Zr.RenameRequest.type, y, g);
          } catch (v) {
            return c.handleFailedRequest(Zr.RenameRequest.type, g, v, null, false);
          }
          if (g.isCancellationRequested || T === null) return null;
          let R = await c.protocol2CodeConverter.asWorkspaceEdit(T, g);
          if (g.isCancellationRequested) return null;
          if (!c.validateWorkspaceEdit(T)) throw new Error("The rename edit returned from the server is not valid anymore and cannot be applied.");
          return R;
        }, d = c.middleware;
        return d.provideRenameEdits ? d.provideRenameEdits(i, s, o, a, l) : l(i, s, o, a);
      }, prepareRename: e.prepareProvider ? (i, s, o) => {
        let a = this._client, c = (d, p, h) => {
          let m = { textDocument: a.code2ProtocolConverter.asTextDocumentIdentifier(d), position: a.code2ProtocolConverter.asPosition(p) };
          return a.sendRequest(Zr.PrepareRenameRequest.type, m, h).then((g) => h.isCancellationRequested ? null : Zr.Range.is(g) ? a.protocol2CodeConverter.asRange(g) : this.isDefaultBehavior(g) ? g.defaultBehavior === true ? null : Promise.reject(new Error("The element can't be renamed.")) : g && Zr.Range.is(g.range) ? { range: a.protocol2CodeConverter.asRange(g.range), placeholder: g.placeholder } : Promise.reject(new Error("The element can't be renamed.")), (g) => {
            throw typeof g.message == "string" ? new Error(g.message) : new Error("The element can't be renamed.");
          });
        }, l = a.middleware;
        return l.prepareRename ? l.prepareRename(i, s, o, c) : c(i, s, o);
      } : void 0 };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return UR.languages.registerRenameProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
    isDefaultBehavior(e) {
      let t = e;
      return t && $_.boolean(t.defaultBehavior);
    }
  };
  Mn.RenameFeature = bf;
});
var W_ = j((jn) => {
  "use strict";
  var zR = jn && jn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), KR = jn && jn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), BR = jn && jn.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && zR(t, e, r[i]);
      return KR(t, e), t;
    };
  })();
  Object.defineProperty(jn, "__esModule", { value: true });
  jn.DocumentLinkFeature = void 0;
  var GR = require("vscode"), js = ae(), Cf = ye(), VR = BR(Fe()), wf = class extends Cf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, js.DocumentLinkRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Cf.ensure)((0, Cf.ensure)(e, "textDocument"), "documentLink");
      t.dynamicRegistration = true, t.tooltipSupport = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.documentLinkProvider);
      r && this.register({ id: VR.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideDocumentLinks: (i, s) => {
        let o = this._client, a = (l, d) => o.sendRequest(js.DocumentLinkRequest.type, o.code2ProtocolConverter.asDocumentLinkParams(l), d).then((p) => d.isCancellationRequested ? null : o.protocol2CodeConverter.asDocumentLinks(p, d), (p) => o.handleFailedRequest(js.DocumentLinkRequest.type, d, p, null)), c = o.middleware;
        return c.provideDocumentLinks ? c.provideDocumentLinks(i, s, a) : a(i, s);
      }, resolveDocumentLink: e.resolveProvider ? (i, s) => {
        let o = this._client, a = (l, d) => o.sendRequest(js.DocumentLinkResolveRequest.type, o.code2ProtocolConverter.asDocumentLink(l), d).then((p) => d.isCancellationRequested ? l : o.protocol2CodeConverter.asDocumentLink(p), (p) => o.handleFailedRequest(js.DocumentLinkResolveRequest.type, d, p, l)), c = o.middleware;
        return c.resolveDocumentLink ? c.resolveDocumentLink(i, s, a) : a(i, s);
      } : void 0 };
      return [GR.languages.registerDocumentLinkProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r), r];
    }
  };
  jn.DocumentLinkFeature = wf;
});
var K_ = j((In) => {
  "use strict";
  var XR = In && In.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), JR = In && In.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), QR = In && In.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && XR(t, e, r[i]);
      return JR(t, e), t;
    };
  })();
  Object.defineProperty(In, "__esModule", { value: true });
  In.ExecuteCommandFeature = void 0;
  var YR = require("vscode"), Sf = ae(), ZR = QR(Fe()), z_ = ye(), Df = class {
    _client;
    _commands;
    constructor(e) {
      this._client = e, this._commands = /* @__PURE__ */ new Map();
    }
    getState() {
      return { kind: "workspace", id: this.registrationType.method, registrations: this._commands.size > 0 };
    }
    get registrationType() {
      return Sf.ExecuteCommandRequest.type;
    }
    fillClientCapabilities(e) {
      (0, z_.ensure)((0, z_.ensure)(e, "workspace"), "executeCommand").dynamicRegistration = true;
    }
    initialize(e) {
      e.executeCommandProvider && this.register({ id: ZR.generateUuid(), registerOptions: Object.assign({}, e.executeCommandProvider) });
    }
    register(e) {
      let t = this._client, r = t.middleware, i = (s, o) => {
        let a = { command: s, arguments: o };
        return t.sendRequest(Sf.ExecuteCommandRequest.type, a).then(void 0, (c) => t.handleFailedRequest(Sf.ExecuteCommandRequest.type, void 0, c, void 0));
      };
      if (e.registerOptions.commands) {
        let s = [];
        for (let o of e.registerOptions.commands) s.push(YR.commands.registerCommand(o, (...a) => r.executeCommand ? r.executeCommand(o, a, i) : i(o, a)));
        this._commands.set(e.id, s);
      }
    }
    unregister(e) {
      let t = this._commands.get(e);
      t && (this._commands.delete(e), t.forEach((r) => r.dispose()));
    }
    clear() {
      this._commands.forEach((e) => {
        e.forEach((t) => t.dispose());
      }), this._commands.clear();
    }
  };
  In.ExecuteCommandFeature = Df;
});
var G_ = j((la) => {
  "use strict";
  Object.defineProperty(la, "__esModule", { value: true });
  la.FoldingRangeFeature = void 0;
  var B_ = require("vscode"), ei = ae(), Is = ye(), Pf = class extends Is.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, ei.FoldingRangeRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Is.ensure)((0, Is.ensure)(e, "textDocument"), "foldingRange");
      t.dynamicRegistration = true, t.rangeLimit = 5e3, t.lineFoldingOnly = true, t.foldingRangeKind = { valueSet: [ei.FoldingRangeKind.Comment, ei.FoldingRangeKind.Imports, ei.FoldingRangeKind.Region] }, t.foldingRange = { collapsedText: false }, (0, Is.ensure)((0, Is.ensure)(e, "workspace"), "foldingRange").refreshSupport = true;
    }
    initialize(e, t) {
      this._client.onRequest(ei.FoldingRangeRefreshRequest.type, async () => {
        for (let s of this.getAllProviders()) s.onDidChangeFoldingRange.fire();
      });
      let [r, i] = this.getRegistration(t, e.foldingRangeProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = new B_.EventEmitter(), i = { onDidChangeFoldingRanges: r.event, provideFoldingRanges: (s, o, a) => {
        let c = this._client, l = (p, h, m) => {
          let g = { textDocument: c.code2ProtocolConverter.asTextDocumentIdentifier(p) };
          return c.sendRequest(ei.FoldingRangeRequest.type, g, m).then((y) => m.isCancellationRequested ? null : c.protocol2CodeConverter.asFoldingRanges(y, m), (y) => c.handleFailedRequest(ei.FoldingRangeRequest.type, m, y, null));
        }, d = c.middleware;
        return d.provideFoldingRanges ? d.provideFoldingRanges(s, o, a, l) : l(s, o, a);
      } };
      return [B_.languages.registerFoldingRangeProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), i), { provider: i, onDidChangeFoldingRange: r }];
    }
  };
  la.FoldingRangeFeature = Pf;
});
var V_ = j((da) => {
  "use strict";
  Object.defineProperty(da, "__esModule", { value: true });
  da.DeclarationFeature = void 0;
  var eT = require("vscode"), Rf = ae(), Tf = ye(), Of = class extends Tf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Rf.DeclarationRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Tf.ensure)((0, Tf.ensure)(e, "textDocument"), "declaration");
      t.dynamicRegistration = true, t.linkSupport = true;
    }
    initialize(e, t) {
      let [r, i] = this.getRegistration(t, e.declarationProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideDeclaration: (i, s, o) => {
        let a = this._client, c = (d, p, h) => a.sendRequest(Rf.DeclarationRequest.type, a.code2ProtocolConverter.asTextDocumentPositionParams(d, p), h).then((m) => h.isCancellationRequested ? null : a.protocol2CodeConverter.asDeclarationResult(m, h), (m) => a.handleFailedRequest(Rf.DeclarationRequest.type, h, m, null)), l = a.middleware;
        return l.provideDeclaration ? l.provideDeclaration(i, s, o, c) : c(i, s, o);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return eT.languages.registerDeclarationProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  da.DeclarationFeature = Of;
});
var X_ = j((fa) => {
  "use strict";
  Object.defineProperty(fa, "__esModule", { value: true });
  fa.SelectionRangeFeature = void 0;
  var tT = require("vscode"), Ef = ae(), xf = ye(), qf = class extends xf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Ef.SelectionRangeRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, xf.ensure)((0, xf.ensure)(e, "textDocument"), "selectionRange");
      t.dynamicRegistration = true;
    }
    initialize(e, t) {
      let [r, i] = this.getRegistration(t, e.selectionRangeProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideSelectionRanges: (i, s, o) => {
        let a = this._client, c = async (d, p, h) => {
          let m = { textDocument: a.code2ProtocolConverter.asTextDocumentIdentifier(d), positions: a.code2ProtocolConverter.asPositionsSync(p, h) };
          return a.sendRequest(Ef.SelectionRangeRequest.type, m, h).then((g) => h.isCancellationRequested ? null : a.protocol2CodeConverter.asSelectionRanges(g, h), (g) => a.handleFailedRequest(Ef.SelectionRangeRequest.type, h, g, null));
        }, l = a.middleware;
        return l.provideSelectionRanges ? l.provideSelectionRanges(i, s, o, c) : c(i, s, o);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return tT.languages.registerSelectionRangeProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  fa.SelectionRangeFeature = qf;
});
var J_ = j((ha) => {
  "use strict";
  Object.defineProperty(ha, "__esModule", { value: true });
  ha.CallHierarchyFeature = void 0;
  var nT = require("vscode"), ti = ae(), Mf = ye(), jf = class {
    client;
    middleware;
    constructor(e) {
      this.client = e, this.middleware = e.middleware;
    }
    prepareCallHierarchy(e, t, r) {
      let i = this.client, s = this.middleware, o = (a, c, l) => {
        let d = i.code2ProtocolConverter.asTextDocumentPositionParams(a, c);
        return i.sendRequest(ti.CallHierarchyPrepareRequest.type, d, l).then((p) => l.isCancellationRequested ? null : i.protocol2CodeConverter.asCallHierarchyItems(p, l), (p) => i.handleFailedRequest(ti.CallHierarchyPrepareRequest.type, l, p, null));
      };
      return s.prepareCallHierarchy ? s.prepareCallHierarchy(e, t, r, o) : o(e, t, r);
    }
    provideCallHierarchyIncomingCalls(e, t) {
      let r = this.client, i = this.middleware, s = (o, a) => {
        let c = { item: r.code2ProtocolConverter.asCallHierarchyItem(o) };
        return r.sendRequest(ti.CallHierarchyIncomingCallsRequest.type, c, a).then((l) => a.isCancellationRequested ? null : r.protocol2CodeConverter.asCallHierarchyIncomingCalls(l, a), (l) => r.handleFailedRequest(ti.CallHierarchyIncomingCallsRequest.type, a, l, null));
      };
      return i.provideCallHierarchyIncomingCalls ? i.provideCallHierarchyIncomingCalls(e, t, s) : s(e, t);
    }
    provideCallHierarchyOutgoingCalls(e, t) {
      let r = this.client, i = this.middleware, s = (o, a) => {
        let c = { item: r.code2ProtocolConverter.asCallHierarchyItem(o) };
        return r.sendRequest(ti.CallHierarchyOutgoingCallsRequest.type, c, a).then((l) => a.isCancellationRequested ? null : r.protocol2CodeConverter.asCallHierarchyOutgoingCalls(l, a), (l) => r.handleFailedRequest(ti.CallHierarchyOutgoingCallsRequest.type, a, l, null));
      };
      return i.provideCallHierarchyOutgoingCalls ? i.provideCallHierarchyOutgoingCalls(e, t, s) : s(e, t);
    }
  }, If = class extends Mf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, ti.CallHierarchyPrepareRequest.type);
    }
    fillClientCapabilities(e) {
      let t = e, r = (0, Mf.ensure)((0, Mf.ensure)(t, "textDocument"), "callHierarchy");
      r.dynamicRegistration = true;
    }
    initialize(e, t) {
      let [r, i] = this.getRegistration(t, e.callHierarchyProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = this._client, r = new jf(t);
      return [nT.languages.registerCallHierarchyProvider(this._client.protocol2CodeConverter.asDocumentSelector(e.documentSelector), r), r];
    }
  };
  ha.CallHierarchyFeature = If;
});
var Y_ = j((Nn) => {
  "use strict";
  var rT = Nn && Nn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), iT = Nn && Nn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), Q_ = Nn && Nn.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && rT(t, e, r[i]);
      return iT(t, e), t;
    };
  })();
  Object.defineProperty(Nn, "__esModule", { value: true });
  Nn.SemanticTokensFeature = void 0;
  var pa = Q_(require("vscode")), de = ae(), Ns = ye(), sT = Q_(Qt()), Nf = class extends Ns.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, de.SemanticTokensRegistrationType.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Ns.ensure)((0, Ns.ensure)(e, "textDocument"), "semanticTokens");
      t.dynamicRegistration = true, t.tokenTypes = [de.SemanticTokenTypes.namespace, de.SemanticTokenTypes.type, de.SemanticTokenTypes.class, de.SemanticTokenTypes.enum, de.SemanticTokenTypes.interface, de.SemanticTokenTypes.struct, de.SemanticTokenTypes.typeParameter, de.SemanticTokenTypes.parameter, de.SemanticTokenTypes.variable, de.SemanticTokenTypes.property, de.SemanticTokenTypes.enumMember, de.SemanticTokenTypes.event, de.SemanticTokenTypes.function, de.SemanticTokenTypes.method, de.SemanticTokenTypes.macro, de.SemanticTokenTypes.keyword, de.SemanticTokenTypes.comment, de.SemanticTokenTypes.string, de.SemanticTokenTypes.number, de.SemanticTokenTypes.regexp, de.SemanticTokenTypes.operator, de.SemanticTokenTypes.decorator, de.SemanticTokenTypes.label], t.tokenModifiers = [de.SemanticTokenModifiers.declaration, de.SemanticTokenModifiers.definition, de.SemanticTokenModifiers.readonly, de.SemanticTokenModifiers.static, de.SemanticTokenModifiers.deprecated, de.SemanticTokenModifiers.abstract, de.SemanticTokenModifiers.async, de.SemanticTokenModifiers.modification, de.SemanticTokenModifiers.documentation, de.SemanticTokenModifiers.defaultLibrary], t.formats = [de.TokenFormat.Relative], t.requests = { range: true, full: { delta: true } }, t.multilineTokenSupport = false, t.overlappingTokenSupport = false, t.serverCancelSupport = true, t.augmentsSyntaxTokens = true, (0, Ns.ensure)((0, Ns.ensure)(e, "workspace"), "semanticTokens").refreshSupport = true;
    }
    initialize(e, t) {
      this._client.onRequest(de.SemanticTokensRefreshRequest.type, async () => {
        for (let o of this.getAllProviders()) o.onDidChangeSemanticTokensEmitter.fire();
      });
      let [i, s] = this.getRegistration(t, e.semanticTokensProvider);
      !i || !s || this.register({ id: i, registerOptions: s });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = sT.boolean(e.full) ? e.full : e.full !== void 0, i = e.full !== void 0 && typeof e.full != "boolean" && e.full.delta === true, s = new pa.EventEmitter(), o = r ? { onDidChangeSemanticTokens: s.event, provideDocumentSemanticTokens: (m, g) => {
        let y = this._client, T = y.middleware, R = (v, D) => {
          let A = { textDocument: y.code2ProtocolConverter.asTextDocumentIdentifier(v) };
          return y.sendRequest(de.SemanticTokensRequest.type, A, D).then((x) => D.isCancellationRequested ? null : y.protocol2CodeConverter.asSemanticTokens(x, D), (x) => y.handleFailedRequest(de.SemanticTokensRequest.type, D, x, null));
        };
        return T.provideDocumentSemanticTokens ? T.provideDocumentSemanticTokens(m, g, R) : R(m, g);
      }, provideDocumentSemanticTokensEdits: i ? (m, g, y) => {
        let T = this._client, R = T.middleware, v = (D, A, x) => {
          let w = { textDocument: T.code2ProtocolConverter.asTextDocumentIdentifier(D), previousResultId: A };
          return T.sendRequest(de.SemanticTokensDeltaRequest.type, w, x).then(async (S) => x.isCancellationRequested ? null : de.SemanticTokens.is(S) ? await T.protocol2CodeConverter.asSemanticTokens(S, x) : await T.protocol2CodeConverter.asSemanticTokensEdits(S, x), (S) => T.handleFailedRequest(de.SemanticTokensDeltaRequest.type, x, S, null));
        };
        return R.provideDocumentSemanticTokensEdits ? R.provideDocumentSemanticTokensEdits(m, g, y, v) : v(m, g, y);
      } : void 0 } : void 0, c = e.range === true ? { onDidChangeSemanticTokens: s.event, provideDocumentRangeSemanticTokens: (m, g, y) => {
        let T = this._client, R = T.middleware, v = (D, A, x) => {
          let w = { textDocument: T.code2ProtocolConverter.asTextDocumentIdentifier(D), range: T.code2ProtocolConverter.asRange(A) };
          return T.sendRequest(de.SemanticTokensRangeRequest.type, w, x).then((S) => x.isCancellationRequested ? null : T.protocol2CodeConverter.asSemanticTokens(S, x), (S) => T.handleFailedRequest(de.SemanticTokensRangeRequest.type, x, S, null));
        };
        return R.provideDocumentRangeSemanticTokens ? R.provideDocumentRangeSemanticTokens(m, g, y, v) : v(m, g, y);
      } } : void 0, l = [], d = this._client, p = d.protocol2CodeConverter.asSemanticTokensLegend(e.legend), h = d.protocol2CodeConverter.asDocumentSelector(t);
      return o !== void 0 && l.push(pa.languages.registerDocumentSemanticTokensProvider(h, o, p)), c !== void 0 && l.push(pa.languages.registerDocumentRangeSemanticTokensProvider(h, c, p)), [new pa.Disposable(() => l.forEach((m) => m.dispose())), { range: c, full: o, onDidChangeSemanticTokensEmitter: s }];
    }
  };
  Nn.SemanticTokensFeature = Nf;
});
var ev = j((Fn) => {
  "use strict";
  var oT = Fn && Fn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), aT = Fn && Fn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), Z_ = Fn && Fn.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && oT(t, e, r[i]);
      return aT(t, e), t;
    };
  })();
  Object.defineProperty(Fn, "__esModule", { value: true });
  Fn.LinkedEditingFeature = void 0;
  var cT = Z_(require("vscode")), Ff = Z_(ae()), Lf = ye(), Af = class extends Lf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Ff.LinkedEditingRangeRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Lf.ensure)((0, Lf.ensure)(e, "textDocument"), "linkedEditingRange");
      t.dynamicRegistration = true;
    }
    initialize(e, t) {
      let [r, i] = this.getRegistration(t, e.linkedEditingRangeProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideLinkedEditingRanges: (i, s, o) => {
        let a = this._client, c = (d, p, h) => a.sendRequest(Ff.LinkedEditingRangeRequest.type, a.code2ProtocolConverter.asTextDocumentPositionParams(d, p), h).then((m) => h.isCancellationRequested ? null : a.protocol2CodeConverter.asLinkedEditingRanges(m, h), (m) => a.handleFailedRequest(Ff.LinkedEditingRangeRequest.type, h, m, null)), l = a.middleware;
        return l.provideLinkedEditingRange ? l.provideLinkedEditingRange(i, s, o, c) : c(i, s, o);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return cT.languages.registerLinkedEditingRangeProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  Fn.LinkedEditingFeature = Af;
});
var tv = j((ga) => {
  "use strict";
  Object.defineProperty(ga, "__esModule", { value: true });
  ga.TypeHierarchyFeature = void 0;
  var uT = require("vscode"), ni = ae(), kf = ye(), $f = class {
    client;
    middleware;
    constructor(e) {
      this.client = e, this.middleware = e.middleware;
    }
    prepareTypeHierarchy(e, t, r) {
      let i = this.client, s = this.middleware, o = (a, c, l) => {
        let d = i.code2ProtocolConverter.asTextDocumentPositionParams(a, c);
        return i.sendRequest(ni.TypeHierarchyPrepareRequest.type, d, l).then((p) => l.isCancellationRequested ? null : i.protocol2CodeConverter.asTypeHierarchyItems(p, l), (p) => i.handleFailedRequest(ni.TypeHierarchyPrepareRequest.type, l, p, null));
      };
      return s.prepareTypeHierarchy ? s.prepareTypeHierarchy(e, t, r, o) : o(e, t, r);
    }
    provideTypeHierarchySupertypes(e, t) {
      let r = this.client, i = this.middleware, s = (o, a) => {
        let c = { item: r.code2ProtocolConverter.asTypeHierarchyItem(o) };
        return r.sendRequest(ni.TypeHierarchySupertypesRequest.type, c, a).then((l) => a.isCancellationRequested ? null : r.protocol2CodeConverter.asTypeHierarchyItems(l, a), (l) => r.handleFailedRequest(ni.TypeHierarchySupertypesRequest.type, a, l, null));
      };
      return i.provideTypeHierarchySupertypes ? i.provideTypeHierarchySupertypes(e, t, s) : s(e, t);
    }
    provideTypeHierarchySubtypes(e, t) {
      let r = this.client, i = this.middleware, s = (o, a) => {
        let c = { item: r.code2ProtocolConverter.asTypeHierarchyItem(o) };
        return r.sendRequest(ni.TypeHierarchySubtypesRequest.type, c, a).then((l) => a.isCancellationRequested ? null : r.protocol2CodeConverter.asTypeHierarchyItems(l, a), (l) => r.handleFailedRequest(ni.TypeHierarchySubtypesRequest.type, a, l, null));
      };
      return i.provideTypeHierarchySubtypes ? i.provideTypeHierarchySubtypes(e, t, s) : s(e, t);
    }
  }, Hf = class extends kf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, ni.TypeHierarchyPrepareRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, kf.ensure)((0, kf.ensure)(e, "textDocument"), "typeHierarchy");
      t.dynamicRegistration = true;
    }
    initialize(e, t) {
      let [r, i] = this.getRegistration(t, e.typeHierarchyProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = this._client, r = new $f(t);
      return [uT.languages.registerTypeHierarchyProvider(t.protocol2CodeConverter.asDocumentSelector(e.documentSelector), r), r];
    }
  };
  ga.TypeHierarchyFeature = Hf;
});
var rv = j((ya) => {
  "use strict";
  Object.defineProperty(ya, "__esModule", { value: true });
  ya.InlineValueFeature = void 0;
  var nv = require("vscode"), ma = ae(), Fs = ye(), Uf = class extends Fs.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, ma.InlineValueRequest.type);
    }
    fillClientCapabilities(e) {
      (0, Fs.ensure)((0, Fs.ensure)(e, "textDocument"), "inlineValue").dynamicRegistration = true, (0, Fs.ensure)((0, Fs.ensure)(e, "workspace"), "inlineValue").refreshSupport = true;
    }
    initialize(e, t) {
      this._client.onRequest(ma.InlineValueRefreshRequest.type, async () => {
        for (let s of this.getAllProviders()) s.onDidChangeInlineValues.fire();
      });
      let [r, i] = this.getRegistration(t, e.inlineValueProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = new nv.EventEmitter(), i = { onDidChangeInlineValues: r.event, provideInlineValues: (s, o, a, c) => {
        let l = this._client, d = (h, m, g, y) => {
          let T = { textDocument: l.code2ProtocolConverter.asTextDocumentIdentifier(h), range: l.code2ProtocolConverter.asRange(m), context: l.code2ProtocolConverter.asInlineValueContext(g) };
          return l.sendRequest(ma.InlineValueRequest.type, T, y).then((R) => y.isCancellationRequested ? null : l.protocol2CodeConverter.asInlineValues(R, y), (R) => l.handleFailedRequest(ma.InlineValueRequest.type, y, R, null));
        }, p = l.middleware;
        return p.provideInlineValues ? p.provideInlineValues(s, o, a, c, d) : d(s, o, a, c);
      } };
      return [this.registerProvider(t, i), { provider: i, onDidChangeInlineValues: r }];
    }
    registerProvider(e, t) {
      return nv.languages.registerInlineValuesProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  ya.InlineValueFeature = Uf;
});
var sv = j((_a) => {
  "use strict";
  Object.defineProperty(_a, "__esModule", { value: true });
  _a.InlayHintsFeature = void 0;
  var iv = require("vscode"), Hi = ae(), Ls = ye(), Wf = class extends Ls.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Hi.InlayHintRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Ls.ensure)((0, Ls.ensure)(e, "textDocument"), "inlayHint");
      t.dynamicRegistration = true, t.resolveSupport = { properties: ["tooltip", "textEdits", "label.tooltip", "label.location", "label.command"] }, (0, Ls.ensure)((0, Ls.ensure)(e, "workspace"), "inlayHint").refreshSupport = true;
    }
    initialize(e, t) {
      this._client.onRequest(Hi.InlayHintRefreshRequest.type, async () => {
        for (let s of this.getAllProviders()) s.onDidChangeInlayHints.fire();
      });
      let [r, i] = this.getRegistration(t, e.inlayHintProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = new iv.EventEmitter(), i = { onDidChangeInlayHints: r.event, provideInlayHints: (s, o, a) => {
        let c = this._client, l = async (p, h, m) => {
          let g = { textDocument: c.code2ProtocolConverter.asTextDocumentIdentifier(p), range: c.code2ProtocolConverter.asRange(h) };
          try {
            let y = await c.sendRequest(Hi.InlayHintRequest.type, g, m);
            return m.isCancellationRequested ? null : c.protocol2CodeConverter.asInlayHints(y, m);
          } catch (y) {
            return c.handleFailedRequest(Hi.InlayHintRequest.type, m, y, null);
          }
        }, d = c.middleware;
        return d.provideInlayHints ? d.provideInlayHints(s, o, a, l) : l(s, o, a);
      } };
      return i.resolveInlayHint = e.resolveProvider === true ? (s, o) => {
        let a = this._client, c = async (d, p) => {
          try {
            let h = await a.sendRequest(Hi.InlayHintResolveRequest.type, a.code2ProtocolConverter.asInlayHint(d), p);
            if (p.isCancellationRequested) return null;
            let m = a.protocol2CodeConverter.asInlayHint(h, p);
            return p.isCancellationRequested ? null : m;
          } catch (h) {
            return a.handleFailedRequest(Hi.InlayHintResolveRequest.type, p, h, null);
          }
        }, l = a.middleware;
        return l.resolveInlayHint ? l.resolveInlayHint(s, o, c) : c(s, o);
      } : void 0, [this.registerProvider(t, i), { provider: i, onDidChangeInlayHints: r }];
    }
    registerProvider(e, t) {
      return iv.languages.registerInlayHintsProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  _a.InlayHintsFeature = Wf;
});
var ov = j((dn) => {
  "use strict";
  var lT = dn && dn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), dT = dn && dn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), fT = dn && dn.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && lT(t, e, r[i]);
      return dT(t, e), t;
    };
  })();
  Object.defineProperty(dn, "__esModule", { value: true });
  dn.WorkspaceFoldersFeature = void 0;
  dn.arrayDiff = Kf;
  var hT = fT(Fe()), va = require("vscode"), As = ae();
  function zf(n, e) {
    if (n != null) return n[e];
  }
  function Kf(n, e) {
    return n.filter((t) => e.indexOf(t) < 0);
  }
  var Bf = class {
    _client;
    _listeners;
    _initialFolders;
    constructor(e) {
      this._client = e, this._listeners = /* @__PURE__ */ new Map();
    }
    getState() {
      return { kind: "workspace", id: this.registrationType.method, registrations: this._listeners.size > 0 };
    }
    get registrationType() {
      return As.DidChangeWorkspaceFoldersNotification.type;
    }
    fillInitializeParams(e) {
      let t = va.workspace.workspaceFolders;
      this.initializeWithFolders(t), t === void 0 ? e.workspaceFolders = null : e.workspaceFolders = t.map((r) => this.asProtocol(r));
    }
    initializeWithFolders(e) {
      this._initialFolders = e;
    }
    fillClientCapabilities(e) {
      e.workspace = e.workspace || {}, e.workspace.workspaceFolders = true;
    }
    initialize(e) {
      let t = this._client;
      t.onRequest(As.WorkspaceFoldersRequest.type, (s) => {
        let o = () => {
          let c = va.workspace.workspaceFolders;
          return c === void 0 ? null : c.map((d) => this.asProtocol(d));
        }, a = t.middleware.workspace;
        return a && a.workspaceFolders ? a.workspaceFolders(s, o) : o(s);
      });
      let r = zf(zf(zf(e, "workspace"), "workspaceFolders"), "changeNotifications"), i;
      typeof r == "string" ? i = r : r === true && (i = hT.generateUuid()), i && this.register({ id: i, registerOptions: void 0 });
    }
    sendInitialEvent(e) {
      let t;
      if (this._initialFolders && e) {
        let r = Kf(this._initialFolders, e), i = Kf(e, this._initialFolders);
        (i.length > 0 || r.length > 0) && (t = this.doSendEvent(i, r));
      } else this._initialFolders ? t = this.doSendEvent([], this._initialFolders) : e && (t = this.doSendEvent(e, []));
      t !== void 0 && t.catch((r) => {
        this._client.error(`Sending notification ${As.DidChangeWorkspaceFoldersNotification.type.method} failed`, r);
      });
    }
    doSendEvent(e, t) {
      let r = { event: { added: e.map((i) => this.asProtocol(i)), removed: t.map((i) => this.asProtocol(i)) } };
      return this._client.sendNotification(As.DidChangeWorkspaceFoldersNotification.type, r);
    }
    register(e) {
      let t = e.id, r = this._client, i = va.workspace.onDidChangeWorkspaceFolders((s) => {
        let o = (l) => this.doSendEvent(l.added, l.removed), a = r.middleware.workspace;
        (a && a.didChangeWorkspaceFolders ? a.didChangeWorkspaceFolders(s, o) : o(s)).catch((l) => {
          this._client.error(`Sending notification ${As.DidChangeWorkspaceFoldersNotification.type.method} failed`, l);
        });
      });
      this._listeners.set(t, i), this.sendInitialEvent(va.workspace.workspaceFolders);
    }
    unregister(e) {
      let t = this._listeners.get(e);
      t !== void 0 && (this._listeners.delete(e), t.dispose());
    }
    clear() {
      for (let e of this._listeners.values()) e.dispose();
      this._listeners.clear();
    }
    asProtocol(e) {
      return e === void 0 ? null : { uri: this._client.code2ProtocolConverter.asUri(e.uri), name: e.name };
    }
  };
  dn.WorkspaceFoldersFeature = Bf;
});
var uv = j((rt) => {
  "use strict";
  var pT = rt && rt.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), gT = rt && rt.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), wa = rt && rt.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && pT(t, e, r[i]);
      return gT(t, e), t;
    };
  })();
  Object.defineProperty(rt, "__esModule", { value: true });
  rt.WillDeleteFilesFeature = rt.WillRenameFilesFeature = rt.WillCreateFilesFeature = rt.DidDeleteFilesFeature = rt.DidRenameFilesFeature = rt.DidCreateFilesFeature = void 0;
  var en = wa(require("vscode")), mT = wa(Bl()), lr = wa(ae()), yT = wa(Fe());
  function av(n, e) {
    return n[e] === void 0 && (n[e] = {}), n[e];
  }
  function _T(n, e) {
    return n[e];
  }
  function cv(n, e, t) {
    n[e] = t;
  }
  var ks = class n {
    _client;
    _event;
    _registrationType;
    _clientCapability;
    _serverCapability;
    _listener;
    _filters;
    constructor(e, t, r, i, s) {
      this._client = e, this._event = t, this._registrationType = r, this._clientCapability = i, this._serverCapability = s, this._filters = /* @__PURE__ */ new Map();
    }
    getState() {
      return { kind: "workspace", id: this._registrationType.method, registrations: this._filters.size > 0 };
    }
    filterSize() {
      return this._filters.size;
    }
    get registrationType() {
      return this._registrationType;
    }
    fillClientCapabilities(e) {
      let t = av(av(e, "workspace"), "fileOperations");
      cv(t, "dynamicRegistration", true), cv(t, this._clientCapability, true);
    }
    initialize(e) {
      let t = e.workspace?.fileOperations, r = t !== void 0 ? _T(t, this._serverCapability) : void 0;
      if (r?.filters !== void 0) try {
        this.register({ id: yT.generateUuid(), registerOptions: { filters: r.filters } });
      } catch (i) {
        this._client.warn(`Ignoring invalid glob pattern for ${this._serverCapability} registration: ${i}`);
      }
    }
    register(e) {
      this._listener || (this._listener = this._event(this.send, this));
      let t = e.registerOptions.filters.map((r) => {
        let i = new mT.Minimatch(r.pattern.glob, n.asMinimatchOptions(r.pattern.options));
        if (!i.makeRe()) throw new Error(`Invalid pattern ${r.pattern.glob}!`);
        return { scheme: r.scheme, matcher: i, kind: r.pattern.matches };
      });
      this._filters.set(e.id, t);
    }
    unregister(e) {
      this._filters.delete(e), this._filters.size === 0 && this._listener && (this._listener.dispose(), this._listener = void 0);
    }
    clear() {
      this._filters.clear(), this._listener && (this._listener.dispose(), this._listener = void 0);
    }
    getFileType(e) {
      return n.getFileType(e);
    }
    async filter(e, t) {
      let r = await Promise.all(e.files.map(async (s) => {
        let o = t(s), a = o.fsPath.replace(/\\/g, "/");
        for (let c of this._filters.values()) for (let l of c) if (!(l.scheme !== void 0 && l.scheme !== o.scheme)) {
          if (l.matcher.match(a)) {
            if (l.kind === void 0) return true;
            let d = await this.getFileType(o);
            if (d === void 0) return this._client.info(`Unable to determine file type for ${o.toString()}. Treating as a match.`), true;
            if (d === en.FileType.File && l.kind === lr.FileOperationPatternKind.file || d === en.FileType.Directory && l.kind === lr.FileOperationPatternKind.folder) return true;
          } else if (l.kind === lr.FileOperationPatternKind.folder && await n.getFileType(o) === en.FileType.Directory && l.matcher.match(`${a}/`)) return true;
        }
        return false;
      })), i = e.files.filter((s, o) => r[o]);
      return { ...e, files: i };
    }
    static async getFileType(e) {
      try {
        return (await en.workspace.fs.stat(e)).type;
      } catch {
        return;
      }
    }
    static asMinimatchOptions(e) {
      let t = { dot: true };
      return e?.ignoreCase === true && (t.nocase = true), t;
    }
  }, ba = class extends ks {
    _notificationType;
    _accessUri;
    _createParams;
    constructor(e, t, r, i, s, o, a) {
      super(e, t, r, i, s), this._notificationType = r, this._accessUri = o, this._createParams = a;
    }
    async send(e) {
      let t = await this.filter(e, this._accessUri);
      if (t.files.length) {
        let r = async (i) => this._client.sendNotification(this._notificationType, this._createParams(i));
        return this.doSend(t, r);
      }
    }
  }, Ca = class extends ba {
    _willListener;
    _fsPathFileTypes = /* @__PURE__ */ new Map();
    async getFileType(e) {
      let t = e.fsPath;
      if (this._fsPathFileTypes.has(t)) return this._fsPathFileTypes.get(t);
      let r = await ks.getFileType(e);
      return r && this._fsPathFileTypes.set(t, r), r;
    }
    async cacheFileTypes(e, t) {
      await this.filter(e, t);
    }
    clearFileTypeCache() {
      this._fsPathFileTypes.clear();
    }
    unregister(e) {
      super.unregister(e), this.filterSize() === 0 && this._willListener && (this._willListener.dispose(), this._willListener = void 0);
    }
    clear() {
      super.clear(), this._willListener && (this._willListener.dispose(), this._willListener = void 0);
    }
  }, Gf = class extends ba {
    constructor(e) {
      super(e, en.workspace.onDidCreateFiles, lr.DidCreateFilesNotification.type, "didCreate", "didCreate", (t) => t, e.code2ProtocolConverter.asDidCreateFilesParams);
    }
    doSend(e, t) {
      let r = this._client.middleware.workspace;
      return r?.didCreateFiles ? r.didCreateFiles(e, t) : t(e);
    }
  };
  rt.DidCreateFilesFeature = Gf;
  var Vf = class extends Ca {
    constructor(e) {
      super(e, en.workspace.onDidRenameFiles, lr.DidRenameFilesNotification.type, "didRename", "didRename", (t) => t.oldUri, e.code2ProtocolConverter.asDidRenameFilesParams);
    }
    register(e) {
      this._willListener || (this._willListener = en.workspace.onWillRenameFiles(this.willRename, this)), super.register(e);
    }
    willRename(e) {
      e.waitUntil(this.cacheFileTypes(e, (t) => t.oldUri));
    }
    doSend(e, t) {
      this.clearFileTypeCache();
      let r = this._client.middleware.workspace;
      return r?.didRenameFiles ? r.didRenameFiles(e, t) : t(e);
    }
  };
  rt.DidRenameFilesFeature = Vf;
  var Xf = class extends Ca {
    constructor(e) {
      super(e, en.workspace.onDidDeleteFiles, lr.DidDeleteFilesNotification.type, "didDelete", "didDelete", (t) => t, e.code2ProtocolConverter.asDidDeleteFilesParams);
    }
    register(e) {
      this._willListener || (this._willListener = en.workspace.onWillDeleteFiles(this.willDelete, this)), super.register(e);
    }
    willDelete(e) {
      e.waitUntil(this.cacheFileTypes(e, (t) => t));
    }
    doSend(e, t) {
      this.clearFileTypeCache();
      let r = this._client.middleware.workspace;
      return r?.didDeleteFiles ? r.didDeleteFiles(e, t) : t(e);
    }
  };
  rt.DidDeleteFilesFeature = Xf;
  var $s = class extends ks {
    _requestType;
    _accessUri;
    _createParams;
    constructor(e, t, r, i, s, o, a) {
      super(e, t, r, i, s), this._requestType = r, this._accessUri = o, this._createParams = a;
    }
    async send(e) {
      let t = this.waitUntil(e);
      e.waitUntil(t);
    }
    async waitUntil(e) {
      let t = await this.filter(e, this._accessUri);
      if (t.files.length) {
        let r = (i) => this._client.sendRequest(this._requestType, this._createParams(i), i.token).then(this._client.protocol2CodeConverter.asWorkspaceEdit);
        return this.doSend(t, r);
      } else return;
    }
  }, Jf = class extends $s {
    constructor(e) {
      super(e, en.workspace.onWillCreateFiles, lr.WillCreateFilesRequest.type, "willCreate", "willCreate", (t) => t, e.code2ProtocolConverter.asWillCreateFilesParams);
    }
    doSend(e, t) {
      let r = this._client.middleware.workspace;
      return r?.willCreateFiles ? r.willCreateFiles(e, t) : t(e);
    }
  };
  rt.WillCreateFilesFeature = Jf;
  var Qf = class extends $s {
    constructor(e) {
      super(e, en.workspace.onWillRenameFiles, lr.WillRenameFilesRequest.type, "willRename", "willRename", (t) => t.oldUri, e.code2ProtocolConverter.asWillRenameFilesParams);
    }
    doSend(e, t) {
      let r = this._client.middleware.workspace;
      return r?.willRenameFiles ? r.willRenameFiles(e, t) : t(e);
    }
  };
  rt.WillRenameFilesFeature = Qf;
  var Yf = class extends $s {
    constructor(e) {
      super(e, en.workspace.onWillDeleteFiles, lr.WillDeleteFilesRequest.type, "willDelete", "willDelete", (t) => t, e.code2ProtocolConverter.asWillDeleteFilesParams);
    }
    doSend(e, t) {
      let r = this._client.middleware.workspace;
      return r?.willDeleteFiles ? r.willDeleteFiles(e, t) : t(e);
    }
  };
  rt.WillDeleteFilesFeature = Yf;
});
var lv = j((Ln) => {
  "use strict";
  var vT = Ln && Ln.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), bT = Ln && Ln.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), CT = Ln && Ln.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && vT(t, e, r[i]);
      return bT(t, e), t;
    };
  })();
  Object.defineProperty(Ln, "__esModule", { value: true });
  Ln.InlineCompletionItemFeature = void 0;
  var wT = require("vscode"), Zf = ae(), eh = ye(), ST = CT(Fe()), th = class extends eh.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Zf.InlineCompletionRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, eh.ensure)((0, eh.ensure)(e, "textDocument"), "inlineCompletion");
      t.dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.inlineCompletionProvider);
      r && this.register({ id: ST.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideInlineCompletionItems: (i, s, o, a) => {
        let c = this._client, l = this._client.middleware, d = (p, h, m, g) => c.sendRequest(Zf.InlineCompletionRequest.type, c.code2ProtocolConverter.asInlineCompletionParams(p, h, m), g).then((y) => g.isCancellationRequested ? null : c.protocol2CodeConverter.asInlineCompletionResult(y, g), (y) => c.handleFailedRequest(Zf.InlineCompletionRequest.type, g, y, null));
        return l.provideInlineCompletionItems ? l.provideInlineCompletionItems(i, s, o, a, d) : d(i, s, o, a);
      } };
      return [wT.languages.registerInlineCompletionItemProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r), r];
    }
  };
  Ln.InlineCompletionItemFeature = th;
});
var hv = j((An) => {
  "use strict";
  var DT = An && An.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), PT = An && An.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), fv = An && An.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && DT(t, e, r[i]);
      return PT(t, e), t;
    };
  })();
  Object.defineProperty(An, "__esModule", { value: true });
  An.TextDocumentContentFeature = void 0;
  var nh = fv(require("vscode")), Ui = ae(), dv = ye(), RT = fv(Fe()), rh = class {
    _client;
    _registrations = /* @__PURE__ */ new Map();
    constructor(e) {
      this._client = e;
    }
    getState() {
      let e = this._registrations.size > 0;
      return { kind: "workspace", id: Ui.TextDocumentContentRequest.method, registrations: e };
    }
    get registrationType() {
      return Ui.TextDocumentContentRequest.type;
    }
    getProviders() {
      let e = [];
      for (let t of this._registrations.values()) e.push(...t.providers);
      return e;
    }
    fillClientCapabilities(e) {
      let t = (0, dv.ensure)((0, dv.ensure)(e, "workspace"), "textDocumentContent");
      t.dynamicRegistration = true;
    }
    initialize(e) {
      let t = this._client;
      if (t.onRequest(Ui.TextDocumentContentRefreshRequest.type, async (s) => {
        let o = t.protocol2CodeConverter.asUri(s.uri);
        for (let a of this._registrations.values()) for (let c of a.providers) c.scheme === o.scheme && c.onDidChangeEmitter.fire(o);
      }), !e?.workspace?.textDocumentContent) return;
      let r = e.workspace.textDocumentContent, i = Ui.StaticRegistrationOptions.hasId(r) ? r.id : RT.generateUuid();
      this.register({ id: i, registerOptions: r });
    }
    register(e) {
      let t = [], r = [];
      for (let i of e.registerOptions.schemes) {
        let [s, o] = this.registerTextDocumentContentProvider(i);
        t.push(o), r.push(s);
      }
      this._registrations.set(e.id, { disposable: nh.Disposable.from(...r), providers: t });
    }
    registerTextDocumentContentProvider(e) {
      let t = new nh.EventEmitter(), r = { onDidChange: t.event, provideTextDocumentContent: (i, s) => {
        let o = this._client, a = (l, d) => {
          let p = { uri: o.code2ProtocolConverter.asUri(l) };
          return o.sendRequest(Ui.TextDocumentContentRequest.type, p, d).then((h) => d.isCancellationRequested ? null : h.text, (h) => o.handleFailedRequest(Ui.TextDocumentContentRequest.type, d, h, null));
        }, c = o.middleware;
        return c.provideTextDocumentContent ? c.provideTextDocumentContent(i, s, a) : a(i, s);
      } };
      return [nh.workspace.registerTextDocumentContentProvider(e, r), { scheme: e, onDidChangeEmitter: t, provider: r }];
    }
    unregister(e) {
      let t = this._registrations.get(e);
      t !== void 0 && (this._registrations.delete(e), t.disposable.dispose());
    }
    clear() {
      this._registrations.forEach((e) => {
        e.disposable.dispose();
      }), this._registrations.clear();
    }
  };
  An.TextDocumentContentFeature = rh;
});
var pv = j((Da) => {
  "use strict";
  Object.defineProperty(Da, "__esModule", { value: true });
  Da.FileSystemWatcherFeature = void 0;
  var TT = require("vscode"), ri = ae(), Sa = ye(), ih = class {
    _client;
    _notifyFileEvent;
    _watchers;
    constructor(e, t) {
      this._client = e, this._notifyFileEvent = t, this._watchers = /* @__PURE__ */ new Map();
    }
    getState() {
      return { kind: "workspace", id: this.registrationType.method, registrations: this._watchers.size > 0 };
    }
    get registrationType() {
      return ri.DidChangeWatchedFilesNotification.type;
    }
    fillClientCapabilities(e) {
      (0, Sa.ensure)((0, Sa.ensure)(e, "workspace"), "didChangeWatchedFiles").dynamicRegistration = true, (0, Sa.ensure)((0, Sa.ensure)(e, "workspace"), "didChangeWatchedFiles").relativePatternSupport = true;
    }
    initialize(e, t) {
    }
    register(e) {
      if (!Array.isArray(e.registerOptions.watchers)) return;
      let t = [];
      for (let r of e.registerOptions.watchers) {
        let i = this._client.protocol2CodeConverter.asGlobPattern(r.globPattern);
        if (i === void 0) continue;
        let s = true, o = true, a = true;
        r.kind !== void 0 && r.kind !== null && (s = (r.kind & ri.WatchKind.Create) !== 0, o = (r.kind & ri.WatchKind.Change) !== 0, a = (r.kind & ri.WatchKind.Delete) !== 0);
        let c = TT.workspace.createFileSystemWatcher(i, !s, !o, !a);
        this.hookListeners(c, s, o, a, t), t.push(c);
      }
      this._watchers.set(e.id, t);
    }
    registerRaw(e, t) {
      let r = [];
      for (let i of t) this.hookListeners(i, true, true, true, r);
      this._watchers.set(e, r);
    }
    hookListeners(e, t, r, i, s) {
      t && e.onDidCreate((o) => this._notifyFileEvent({ uri: this._client.code2ProtocolConverter.asUri(o), type: ri.FileChangeType.Created }), null, s), r && e.onDidChange((o) => this._notifyFileEvent({ uri: this._client.code2ProtocolConverter.asUri(o), type: ri.FileChangeType.Changed }), null, s), i && e.onDidDelete((o) => this._notifyFileEvent({ uri: this._client.code2ProtocolConverter.asUri(o), type: ri.FileChangeType.Deleted }), null, s);
    }
    unregister(e) {
      let t = this._watchers.get(e);
      if (t) {
        this._watchers.delete(e);
        for (let r of t) r.dispose();
      }
    }
    clear() {
      this._watchers.forEach((e) => {
        for (let t of e) t.dispose();
      }), this._watchers.clear();
    }
  };
  Da.FileSystemWatcherFeature = ih;
});
var mv = j((Pa) => {
  "use strict";
  Object.defineProperty(Pa, "__esModule", { value: true });
  Pa.ProgressFeature = void 0;
  var gv = ae(), OT = Dd();
  function ET(n, e) {
    return n[e] === void 0 && (n[e] = /* @__PURE__ */ Object.create(null)), n[e];
  }
  var sh = class {
    _client;
    activeParts;
    constructor(e) {
      this._client = e, this.activeParts = /* @__PURE__ */ new Set();
    }
    getState() {
      return { kind: "window", id: gv.WorkDoneProgressCreateRequest.method, registrations: this.activeParts.size > 0 };
    }
    fillClientCapabilities(e) {
      ET(e, "window").workDoneProgress = true;
    }
    initialize() {
      let e = this._client, t = (i) => {
        this.activeParts.delete(i);
      }, r = (i) => {
        this.activeParts.add(new OT.ProgressPart(this._client, i.token, t));
      };
      e.onRequest(gv.WorkDoneProgressCreateRequest.type, r);
    }
    clear() {
      for (let e of this.activeParts) e.done();
      this.activeParts.clear();
    }
  };
  Pa.ProgressFeature = sh;
});
var ph = j((Te) => {
  "use strict";
  var xT = Te && Te.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), qT = Te && Te.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), Oa = Te && Te.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && xT(t, e, r[i]);
      return qT(t, e), t;
    };
  })();
  Object.defineProperty(Te, "__esModule", { value: true });
  Te.ProposedFeatures = Te.LanguageClient = Te.BaseLanguageClient = Te.ShutdownMode = Te.MessageTransports = Te.SuspendMode = Te.State = Te.CloseAction = Te.ErrorAction = Te.RevealOutputChannelOn = void 0;
  var oe = require("vscode"), k = ae(), MT = Oa(s_()), jT = Oa(c_()), fn = Oa(Qt()), Ra = Jo(), yv = Oa(Fe()), IT = Dd(), Tt = ye(), NT = Zl(), ah = p_(), _v = y_(), Wi = S_(), FT = D_(), LT = P_(), AT = R_(), kT = O_(), $T = E_(), HT = Yd(), UT = q_(), WT = M_(), zT = j_(), KT = I_(), BT = N_(), GT = F_(), VT = A_(), oh = k_(), XT = U_(), JT = W_(), QT = K_(), YT = G_(), ZT = V_(), eO = X_(), tO = J_(), nO = Y_(), rO = ev(), iO = tv(), sO = rv(), oO = sv(), aO = ov(), zi = uv(), cO = lv(), uO = hv(), lO = pv(), dO = mv(), ii;
  (function(n) {
    n[n.Debug = 0] = "Debug", n[n.Info = 1] = "Info", n[n.Warn = 2] = "Warn", n[n.Error = 3] = "Error", n[n.Never = 4] = "Never";
  })(ii || (Te.RevealOutputChannelOn = ii = {}));
  var Hs;
  (function(n) {
    n[n.Continue = 1] = "Continue", n[n.Shutdown = 2] = "Shutdown";
  })(Hs || (Te.ErrorAction = Hs = {}));
  var kr;
  (function(n) {
    n[n.DoNotRestart = 1] = "DoNotRestart", n[n.Restart = 2] = "Restart";
  })(kr || (Te.CloseAction = kr = {}));
  var Ki;
  (function(n) {
    n[n.Stopped = 1] = "Stopped", n[n.Starting = 3] = "Starting", n[n.StartFailed = 4] = "StartFailed", n[n.Running = 2] = "Running";
  })(Ki || (Te.State = Ki = {}));
  var vv;
  (function(n) {
    n.off = "off", n.on = "on";
  })(vv || (Te.SuspendMode = vv = {}));
  var ch;
  (function(n) {
    function e(t) {
      return t == null ? false : typeof t == "boolean" || typeof t == "object" && t !== null && fn.stringArray(t.enabledCommands) ? t : false;
    }
    n.sanitizeIsTrusted = e;
  })(ch || (ch = {}));
  var uh = class {
    client;
    maxRestartCount;
    restarts;
    constructor(e, t) {
      this.client = e, this.maxRestartCount = t, this.restarts = [];
    }
    error(e, t, r) {
      return r && r <= 3 ? { action: Hs.Continue } : { action: Hs.Shutdown };
    }
    closed() {
      return this.restarts.push(Date.now()), this.restarts.length <= this.maxRestartCount ? { action: kr.Restart } : this.restarts[this.restarts.length - 1] - this.restarts[0] <= 180 * 1e3 ? { action: kr.DoNotRestart, message: `The ${this.client.name} server crashed ${this.maxRestartCount + 1} times in the last 3 minutes. The server will not be restarted. See the output for more information.` } : (this.restarts.shift(), { action: kr.Restart });
    }
  }, he;
  (function(n) {
    n.Initial = "initial", n.Starting = "starting", n.StartFailed = "startFailed", n.Running = "running", n.Stopping = "stopping", n.Stopped = "stopped";
  })(he || (he = {}));
  var bv;
  (function(n) {
    function e(t) {
      return t && k.MessageReader.is(t.reader) && k.MessageWriter.is(t.writer);
    }
    n.is = e;
  })(bv || (Te.MessageTransports = bv = {}));
  var Ar;
  (function(n) {
    n.Restart = "restart", n.Stop = "stop";
  })(Ar || (Te.ShutdownMode = Ar = {}));
  var lh = class n {
    open;
    _onOpen;
    _onClose;
    disposables;
    constructor() {
      this.disposables = [], this.open = /* @__PURE__ */ new Set(), this._onOpen = new oe.EventEmitter(), this._onClose = new oe.EventEmitter(), n.fillVisibleResources(this.open);
      let e = () => {
        let t = this.open, r = /* @__PURE__ */ new Set();
        n.fillVisibleResources(r);
        let i = /* @__PURE__ */ new Set(), s = new Set(r);
        for (let o of t.values()) r.has(o) ? s.delete(o) : i.add(o);
        if (this.open = r, i.size > 0) {
          let o = /* @__PURE__ */ new Set();
          for (let a of i) o.add(oe.Uri.parse(a));
          this._onClose.fire(o);
        }
        if (s.size > 0) {
          let o = /* @__PURE__ */ new Set();
          for (let a of s) o.add(oe.Uri.parse(a));
          this._onOpen.fire(o);
        }
      };
      this.disposables.push(oe.window.tabGroups.onDidChangeTabs((t) => {
        t.closed.length === 0 && t.opened.length === 0 || e();
      })), this.disposables.push(oe.window.onDidChangeVisibleTextEditors((t) => {
        e();
      }));
    }
    get onClose() {
      return this._onClose.event;
    }
    get onOpen() {
      return this._onOpen.event;
    }
    dispose() {
      this.disposables.forEach((e) => e.dispose());
    }
    isActive(e) {
      return e instanceof oe.Uri ? oe.window.activeTextEditor?.document.uri === e : oe.window.activeTextEditor?.document === e;
    }
    isVisible(e) {
      let t = e instanceof oe.Uri ? e : e.uri;
      return t.scheme === ah.NotebookDocumentSyncFeature.CellScheme ? oe.workspace.notebookDocuments.some((r) => this.open.has(r.uri.toString()) ? r.getCells().find((s) => s.document.uri.toString() === t.toString()) !== void 0 : false) : this.open.has(t.toString());
    }
    getResources() {
      let e = /* @__PURE__ */ new Set();
      return n.fillVisibleResources(/* @__PURE__ */ new Set(), e), e;
    }
    static fillVisibleResources(e, t) {
      let r = e ?? /* @__PURE__ */ new Set();
      for (let i of oe.window.tabGroups.all) for (let s of i.tabs) {
        let o = s.input, a;
        o instanceof oe.TabInputText ? a = o.uri : o instanceof oe.TabInputTextDiff ? a = o.modified : (o instanceof oe.TabInputCustom || o instanceof oe.TabInputNotebook) && (a = o.uri), a !== void 0 && !r.has(a.toString()) && (r.add(a.toString()), t !== void 0 && t.add(a));
      }
      for (let i of oe.window.visibleTextEditors) {
        let s = i.document.uri;
        r.has(s.toString()) || (r.add(s.toString()), t !== void 0 && t.add(s));
      }
    }
  }, Ta = class n {
    _id;
    _name;
    _clientOptions;
    _state;
    _onStart;
    _onStop;
    _connection;
    _idleInterval;
    _ignoredRegistrations;
    _listeners;
    _disposed;
    _notificationHandlers;
    _notificationDisposables;
    _pendingNotificationHandlers;
    _requestHandlers;
    _requestDisposables;
    _pendingRequestHandlers;
    _progressHandlers;
    _pendingProgressHandlers;
    _progressDisposables;
    _initializeResult;
    _outputChannel;
    _disposeOutputChannel;
    _traceOutputChannel;
    _traceLogLevel;
    _capabilities;
    _diagnostics;
    _syncedDocuments;
    _didChangeTextDocumentFeature;
    _inFlightOpenNotifications;
    _pendingChangeSemaphore;
    _pendingChangeDelayer;
    _didOpenTextDocumentFeature;
    _fileEvents;
    _fileEventDelayer;
    _telemetryEmitter;
    _stateChangeEmitter;
    _trace;
    _traceFormat = k.TraceFormat.Text;
    _tracer;
    _c2p;
    _p2c;
    _visibleDocuments;
    constructor(e, t, r) {
      this._id = e, this._name = t, r = r || {};
      let i = { isTrusted: false, supportHtml: false, supportThemeIcons: false };
      r.markdown !== void 0 && (i.isTrusted = ch.sanitizeIsTrusted(r.markdown.isTrusted), i.supportHtml = r.markdown.supportHtml === true, i.supportThemeIcons = r.markdown.supportThemeIcons === true), this._clientOptions = { documentSelector: r.documentSelector ?? [], synchronize: r.synchronize ?? {}, diagnosticCollectionName: r.diagnosticCollectionName, outputChannelName: r.outputChannelName ?? this._name, revealOutputChannelOn: r.revealOutputChannelOn ?? ii.Error, stdioEncoding: r.stdioEncoding ?? "utf8", initializationOptions: r.initializationOptions, initializationFailedHandler: r.initializationFailedHandler, progressOnInitialization: !!r.progressOnInitialization, errorHandler: r.errorHandler ?? this.createDefaultErrorHandler(r.connectionOptions?.maxRestartCount), middleware: r.middleware ?? {}, uriConverters: r.uriConverters, workspaceFolder: r.workspaceFolder, connectionOptions: r.connectionOptions, markdown: i, diagnosticPullOptions: r.diagnosticPullOptions ?? { onChange: true, onSave: false }, diagnosticCollectionProvider: r.diagnosticCollectionProvider ?? new Tt.DefaultDiagnosticCollectionProvider(), notebookDocumentOptions: r.notebookDocumentOptions ?? {}, textSynchronization: this.createTextSynchronizationOptions(r.textSynchronization) }, this._clientOptions.synchronize = this._clientOptions.synchronize || {}, this._state = he.Initial, this._ignoredRegistrations = /* @__PURE__ */ new Set(), this._listeners = [], this._notificationHandlers = /* @__PURE__ */ new Map(), this._pendingNotificationHandlers = /* @__PURE__ */ new Map(), this._notificationDisposables = /* @__PURE__ */ new Map(), this._requestHandlers = /* @__PURE__ */ new Map(), this._pendingRequestHandlers = /* @__PURE__ */ new Map(), this._requestDisposables = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this._pendingProgressHandlers = /* @__PURE__ */ new Map(), this._progressDisposables = /* @__PURE__ */ new Map(), this._connection = void 0, this._initializeResult = void 0, r.outputChannel ? (this._outputChannel = r.outputChannel, this._disposeOutputChannel = false, this._traceLogLevel = this._outputChannel.logLevel) : (this._outputChannel = void 0, this._disposeOutputChannel = true, this._traceLogLevel = oe.LogLevel.Info), this._traceOutputChannel = r.traceOutputChannel, this._traceOutputChannel !== void 0 && (this._traceLogLevel = this._traceOutputChannel.logLevel), this._diagnostics = void 0, this._inFlightOpenNotifications = /* @__PURE__ */ new Set(), this._pendingChangeSemaphore = new Ra.Semaphore(1), this._pendingChangeDelayer = new Ra.Delayer(250), this._fileEvents = [], this._fileEventDelayer = new Ra.Delayer(250), this._onStop = void 0, this._telemetryEmitter = new k.Emitter(), this._stateChangeEmitter = new k.Emitter(), this._trace = k.Trace.Off, this._tracer = { log: (s, o) => {
        fn.string(s) ? this.trace(s, o) : this.traceObject(s);
      } }, this._c2p = MT.createConverter(r.uriConverters ? r.uriConverters.code2Protocol : void 0), this._p2c = jT.createConverter(r.uriConverters ? r.uriConverters.protocol2Code : void 0, this._clientOptions.markdown.isTrusted, this._clientOptions.markdown.supportHtml, this._clientOptions.markdown.supportThemeIcons), this._syncedDocuments = /* @__PURE__ */ new Map(), this.registerBuiltinFeatures();
    }
    createTextSynchronizationOptions(e) {
      return e ? typeof e.delayOpenNotifications == "boolean" ? { delayOpenNotifications: e.delayOpenNotifications } : { delayOpenNotifications: false } : { delayOpenNotifications: false };
    }
    get name() {
      return this._name;
    }
    get middleware() {
      return this._clientOptions.middleware ?? /* @__PURE__ */ Object.create(null);
    }
    get clientOptions() {
      return this._clientOptions;
    }
    get protocol2CodeConverter() {
      return this._p2c;
    }
    get code2ProtocolConverter() {
      return this._c2p;
    }
    get visibleDocuments() {
      return this._visibleDocuments === void 0 && (this._visibleDocuments = new lh()), this._visibleDocuments;
    }
    get onTelemetry() {
      return this._telemetryEmitter.event;
    }
    get onDidChangeState() {
      return this._stateChangeEmitter.event;
    }
    get outputChannel() {
      return this._outputChannel || (this._outputChannel = oe.window.createOutputChannel(this._clientOptions.outputChannelName ? this._clientOptions.outputChannelName : this._name, { log: true }), this._traceOutputChannel === void 0 && (this._traceLogLevel = this._outputChannel.logLevel)), this._outputChannel;
    }
    get traceOutputChannel() {
      return this._traceOutputChannel ? this._traceOutputChannel : this.outputChannel;
    }
    get diagnostics() {
      if (this._diagnostics !== null) return this._diagnostics === void 0 && (this._diagnostics = this._clientOptions.diagnosticCollectionProvider.create(this._clientOptions.diagnosticCollectionName ?? this._id, Tt.DiagnosticCollectionSource.push)), this._diagnostics;
    }
    get state() {
      return this.getPublicState();
    }
    get $state() {
      return this._state;
    }
    set $state(e) {
      let t = this.getPublicState();
      this._state = e;
      let r = this.getPublicState();
      r !== t && this._stateChangeEmitter.fire({ oldState: t, newState: r });
    }
    getPublicState() {
      switch (this.$state) {
        case he.Starting:
          return Ki.Starting;
        case he.Running:
          return Ki.Running;
        case he.StartFailed:
          return Ki.StartFailed;
        default:
          return Ki.Stopped;
      }
    }
    get initializeResult() {
      return this._initializeResult;
    }
    async sendRequest(e, ...t) {
      if (this.$state === he.StartFailed || this.$state === he.Stopping || this.$state === he.Stopped) return Promise.reject(new k.ResponseError(k.ErrorCodes.ConnectionInactive, "Client is not running"));
      let r = await this.$start();
      await this._didOpenTextDocumentFeature.sendPendingOpenNotifications(), this._didChangeTextDocumentFeature.syncKind === k.TextDocumentSyncKind.Full && await this.sendPendingFullTextDocumentChanges(r);
      let i, s;
      if (t.length === 1 ? k.CancellationToken.is(t[0]) ? s = t[0] : i = t[0] : t.length === 2 && (i = t[0], s = t[1]), s !== void 0 && s.isCancellationRequested) return Promise.reject(new k.ResponseError(k.LSPErrorCodes.RequestCancelled, "Request got cancelled"));
      let o = this._clientOptions.middleware?.sendRequest;
      return o !== void 0 ? o(e, i, s, (a, c, l) => {
        let d = [];
        return c !== void 0 && d.push(c), l !== void 0 && d.push(l), r.sendRequest(a, ...d);
      }) : r.sendRequest(e, ...t);
    }
    onRequest(e, t) {
      let r = typeof e == "string" ? e : e.method;
      this._requestHandlers.set(r, t);
      let i = this.activeConnection(), s;
      return i !== void 0 ? (this._requestDisposables.set(r, i.onRequest(e, t)), s = { dispose: () => {
        let o = this._requestDisposables.get(r);
        o !== void 0 && (o.dispose(), this._requestDisposables.delete(r));
      } }) : (this._pendingRequestHandlers.set(r, t), s = { dispose: () => {
        this._pendingRequestHandlers.delete(r);
        let o = this._requestDisposables.get(r);
        o !== void 0 && (o.dispose(), this._requestDisposables.delete(r));
      } }), { dispose: () => {
        this._requestHandlers.delete(r), s.dispose();
      } };
    }
    async sendNotification(e, t) {
      if (this.$state === he.StartFailed || this.$state === he.Stopping || this.$state === he.Stopped) return Promise.reject(new k.ResponseError(k.ErrorCodes.ConnectionInactive, "Client is not running"));
      let r = this._didChangeTextDocumentFeature.syncKind === k.TextDocumentSyncKind.Full, i;
      r && typeof e != "string" && e.method === k.DidOpenTextDocumentNotification.method && (i = t?.textDocument.uri, this._inFlightOpenNotifications.add(i));
      let s;
      typeof e != "string" && e.method === k.DidCloseTextDocumentNotification.method && (s = t.textDocument.uri);
      let o = await this.$start();
      if (await this._didOpenTextDocumentFeature.sendPendingOpenNotifications(s)) return;
      r && await this.sendPendingFullTextDocumentChanges(o), i !== void 0 && this._inFlightOpenNotifications.delete(i);
      let c = this._clientOptions.middleware?.sendNotification;
      return c ? c(e, o.sendNotification.bind(o), t) : o.sendNotification(e, t);
    }
    onNotification(e, t) {
      let r = typeof e == "string" ? e : e.method;
      this._notificationHandlers.set(r, t);
      let i = this.activeConnection(), s;
      return i !== void 0 ? (this._notificationDisposables.set(r, i.onNotification(e, t)), s = { dispose: () => {
        let o = this._notificationDisposables.get(r);
        o !== void 0 && (o.dispose(), this._notificationDisposables.delete(r));
      } }) : (this._pendingNotificationHandlers.set(r, t), s = { dispose: () => {
        this._pendingNotificationHandlers.delete(r);
        let o = this._notificationDisposables.get(r);
        o !== void 0 && (o.dispose(), this._notificationDisposables.delete(r));
      } }), { dispose: () => {
        this._notificationHandlers.delete(r), s.dispose();
      } };
    }
    async sendProgress(e, t, r) {
      if (this.$state === he.StartFailed || this.$state === he.Stopping || this.$state === he.Stopped) return Promise.reject(new k.ResponseError(k.ErrorCodes.ConnectionInactive, "Client is not running"));
      try {
        return (await this.$start()).sendProgress(e, t, r);
      } catch (i) {
        throw this.error(`Sending progress for token ${t} failed.`, i), i;
      }
    }
    onProgress(e, t, r) {
      this._progressHandlers.set(t, { type: e, handler: r });
      let i = this.activeConnection(), s, o = this._clientOptions.middleware?.handleWorkDoneProgress, a = k.WorkDoneProgress.is(e) && o !== void 0 ? (c) => {
        o(t, c, () => r(c));
      } : r;
      return i !== void 0 ? (this._progressDisposables.set(t, i.onProgress(e, t, a)), s = { dispose: () => {
        let c = this._progressDisposables.get(t);
        c !== void 0 && (c.dispose(), this._progressDisposables.delete(t));
      } }) : (this._pendingProgressHandlers.set(t, { type: e, handler: r }), s = { dispose: () => {
        this._pendingProgressHandlers.delete(t);
        let c = this._progressDisposables.get(t);
        c !== void 0 && (c.dispose(), this._progressDisposables.delete(t));
      } }), { dispose: () => {
        this._progressHandlers.delete(t), s.dispose();
      } };
    }
    createDefaultErrorHandler(e) {
      if (e !== void 0 && e < 0) throw new Error(`Invalid maxRestartCount: ${e}`);
      return new uh(this, e ?? 4);
    }
    async setTrace(e) {
      this._trace = e;
      let t = this.activeConnection();
      t !== void 0 && await t.trace(this._trace, this._tracer, { sendNotification: false, traceFormat: this._traceFormat });
    }
    data2String(e) {
      if (e instanceof k.ResponseError) {
        let t = e;
        return `  Message: ${t.message}
  Code: ${t.code} ${t.data ? `
` + t.data.toString() : ""}`;
      }
      return e instanceof Error ? fn.string(e.stack) ? e.stack : e.message : fn.string(e) ? e : e.toString();
    }
    shouldLogToOutputChannel() {
      return this.$state !== he.Stopped ? true : this._outputChannel !== void 0;
    }
    error(e, t, r = true) {
      this.shouldLogToOutputChannel() && this.outputChannel.error(this.getLogMessage(e, t)), (r === "force" || r && this._clientOptions.revealOutputChannelOn <= ii.Error) && this.showNotificationMessage(k.MessageType.Error, e, t);
    }
    warn(e, t, r = true) {
      this.shouldLogToOutputChannel() && this.outputChannel.warn(this.getLogMessage(e, t)), r && this._clientOptions.revealOutputChannelOn <= ii.Warn && this.showNotificationMessage(k.MessageType.Warning, e, t);
    }
    info(e, t, r = true) {
      this.shouldLogToOutputChannel() && this.outputChannel.info(this.getLogMessage(e, t)), r && this._clientOptions.revealOutputChannelOn <= ii.Info && this.showNotificationMessage(k.MessageType.Info, e, t);
    }
    debug(e, t, r = true) {
      this.shouldLogToOutputChannel() && this.outputChannel.debug(this.getLogMessage(e, t)), r && this._clientOptions.revealOutputChannelOn <= ii.Debug && this.showNotificationMessage(k.MessageType.Debug, e, t);
    }
    trace(e, t) {
      this.traceOutputChannel.trace(this.getLogMessage(e, t));
    }
    traceObject(e) {
      this.traceOutputChannel.trace(JSON.stringify(e));
    }
    showNotificationMessage(e, t, r) {
      t = t ?? "A request has failed. See the output for more information.", r && (t += `
` + this.data2String(r)), (e === k.MessageType.Error ? oe.window.showErrorMessage : e === k.MessageType.Warning ? oe.window.showWarningMessage : oe.window.showInformationMessage)(t, "Go to output").then((s) => {
        s !== void 0 && this.outputChannel.show(true);
      });
    }
    getLogMessage(e, t) {
      return t != null ? `${e}
${this.data2String(t)}` : e;
    }
    needsStart() {
      return this.$state === he.Initial || this.$state === he.Stopping || this.$state === he.Stopped;
    }
    needsStop() {
      return this.$state === he.Starting || this.$state === he.Running;
    }
    activeConnection() {
      return this.$state === he.Running && this._connection !== void 0 ? this._connection : void 0;
    }
    isRunning() {
      return this.$state === he.Running;
    }
    async start() {
      if (this._disposed === "disposing" || this._disposed === "disposed") throw new Error("Client got disposed and can't be restarted.");
      if (this.$state === he.Stopping) throw new Error("Client is currently stopping. Can only restart a full stopped client");
      if (this._onStart !== void 0) return this._onStart;
      let [e, t, r] = this.createOnStartPromise();
      this._onStart = e, this._diagnostics = void 0;
      for (let [i, s] of this._notificationHandlers) this._pendingNotificationHandlers.has(i) || this._pendingNotificationHandlers.set(i, s);
      for (let [i, s] of this._requestHandlers) this._pendingRequestHandlers.has(i) || this._pendingRequestHandlers.set(i, s);
      for (let [i, s] of this._progressHandlers) this._pendingProgressHandlers.has(i) || this._pendingProgressHandlers.set(i, s);
      this.$state = he.Starting;
      try {
        let i = await this.createConnection();
        i.onNotification(k.LogMessageNotification.type, (s) => {
          switch (s.type) {
            case k.MessageType.Error:
              this.error(s.message, void 0, false);
              break;
            case k.MessageType.Warning:
              this.warn(s.message, void 0, false);
              break;
            case k.MessageType.Info:
              this.info(s.message, void 0, false);
              break;
            case k.MessageType.Debug:
              this.debug(s.message, void 0, false);
              break;
            default:
              this.outputChannel.appendLine(s.message);
          }
        }), i.onNotification(k.ShowMessageNotification.type, (s) => {
          switch (s.type) {
            case k.MessageType.Error:
              oe.window.showErrorMessage(s.message);
              break;
            case k.MessageType.Warning:
              oe.window.showWarningMessage(s.message);
              break;
            case k.MessageType.Info:
              oe.window.showInformationMessage(s.message);
              break;
            default:
              oe.window.showInformationMessage(s.message);
          }
        }), i.onRequest(k.ShowMessageRequest.type, (s) => {
          let o;
          switch (s.type) {
            case k.MessageType.Error:
              o = oe.window.showErrorMessage;
              break;
            case k.MessageType.Warning:
              o = oe.window.showWarningMessage;
              break;
            case k.MessageType.Info:
              o = oe.window.showInformationMessage;
              break;
            default:
              o = oe.window.showInformationMessage;
          }
          let a = s.actions || [];
          return o(s.message, ...a);
        }), i.onNotification(k.TelemetryEventNotification.type, (s) => {
          this._telemetryEmitter.fire(s);
        }), i.onRequest(k.ShowDocumentRequest.type, async (s, o) => {
          let a = async (l) => {
            let d = this.protocol2CodeConverter.asUri(l.uri);
            try {
              if (l.external === true) return { success: await oe.env.openExternal(d) };
              {
                let p = {};
                return l.selection !== void 0 && (p.selection = this.protocol2CodeConverter.asRange(l.selection)), l.takeFocus === void 0 || l.takeFocus === false ? p.preserveFocus = true : l.takeFocus === true && (p.preserveFocus = false), await oe.window.showTextDocument(d, p), { success: true };
              }
            } catch {
              return { success: false };
            }
          }, c = this._clientOptions.middleware.window?.showDocument;
          return c !== void 0 ? c(s, o, a) : a(s);
        }), i.listen(), await this.initialize(i), t();
      } catch (i) {
        this.$state = he.StartFailed, this.error(`${this._name} client: couldn't create connection to server.`, i, "force"), r(i);
      }
      return this._onStart;
    }
    createOnStartPromise() {
      let e, t;
      return [new Promise((i, s) => {
        e = i, t = s;
      }), e, t];
    }
    async initialize(e) {
      this.refreshTrace(e, false);
      let t = this._clientOptions.initializationOptions, [r, i] = this._clientOptions.workspaceFolder !== void 0 ? [this._clientOptions.workspaceFolder.uri.fsPath, [{ uri: this._c2p.asUri(this._clientOptions.workspaceFolder.uri), name: this._clientOptions.workspaceFolder.name }]] : [this._clientGetRootPath(), null], s = { processId: null, clientInfo: { name: oe.env.appName, version: oe.version }, locale: this.getLocale(), rootPath: r || null, rootUri: r ? this._c2p.asUri(oe.Uri.file(r)) : null, capabilities: this.computeClientCapabilities(), initializationOptions: fn.func(t) ? t() : t, trace: k.Trace.toString(this._trace), workspaceFolders: i };
      if (this.fillInitializeParams(s), this._clientOptions.progressOnInitialization) {
        let o = yv.generateUuid(), a = new IT.ProgressPart(e, o);
        s.workDoneToken = o;
        try {
          let c = await this.doInitialize(e, s);
          return a.done(), c;
        } catch (c) {
          throw a.cancel(), c;
        }
      } else return this.doInitialize(e, s);
    }
    async doInitialize(e, t) {
      try {
        let r = await e.initialize(t);
        if (r.capabilities.positionEncoding !== void 0 && r.capabilities.positionEncoding !== k.PositionEncodingKind.UTF16) throw new Error(`Unsupported position encoding (${r.capabilities.positionEncoding}) received from server ${this.name}`);
        this._initializeResult = r, this.$state = he.Running;
        let i;
        fn.number(r.capabilities.textDocumentSync) ? r.capabilities.textDocumentSync === k.TextDocumentSyncKind.None ? i = { openClose: false, change: k.TextDocumentSyncKind.None, save: void 0 } : i = { openClose: true, change: r.capabilities.textDocumentSync, save: { includeText: false } } : r.capabilities.textDocumentSync !== void 0 && r.capabilities.textDocumentSync !== null && (i = r.capabilities.textDocumentSync), this._capabilities = Object.assign({}, r.capabilities, { resolvedTextDocumentSync: i }), e.onNotification(k.PublishDiagnosticsNotification.type, (s) => this.handleDiagnostics(s)), e.onRequest(k.RegistrationRequest.type, (s) => this.handleRegistrationRequest(s)), e.onRequest("client/registerFeature", (s) => this.handleRegistrationRequest(s)), e.onRequest(k.UnregistrationRequest.type, (s) => this.handleUnregistrationRequest(s)), e.onRequest("client/unregisterFeature", (s) => this.handleUnregistrationRequest(s)), e.onRequest(k.ApplyWorkspaceEditRequest.type, (s) => this.handleApplyWorkspaceEdit(s));
        for (let [s, o] of this._pendingNotificationHandlers) this._notificationDisposables.set(s, e.onNotification(s, o));
        this._pendingNotificationHandlers.clear();
        for (let [s, o] of this._pendingRequestHandlers) this._requestDisposables.set(s, e.onRequest(s, o));
        this._pendingRequestHandlers.clear();
        for (let [s, o] of this._pendingProgressHandlers) this._progressDisposables.set(s, e.onProgress(o.type, s, o.handler));
        return this._pendingProgressHandlers.clear(), await e.sendNotification(k.InitializedNotification.type, {}), this.hookFileEvents(e), this.hookLogLevelChanged(e), this.hookConfigurationChanged(e), this.initializeFeatures(e), r;
      } catch (r) {
        throw this._clientOptions.initializationFailedHandler ? this._clientOptions.initializationFailedHandler(r) ? this.initialize(e) : this.stop() : r instanceof k.ResponseError && r.data && r.data.retry ? oe.window.showErrorMessage(r.message, { title: "Retry", id: "retry" }).then((i) => {
          i && i.id === "retry" ? this.initialize(e) : this.stop();
        }) : (r && r.message && oe.window.showErrorMessage(r.message), this.error("Server initialization failed.", r), this.stop()), r;
      }
    }
    _clientGetRootPath() {
      let e = oe.workspace.workspaceFolders;
      if (!e || e.length === 0) return;
      let t = e[0];
      if (t.uri.scheme === "file") return t.uri.fsPath;
    }
    stop(e = 2e3) {
      return this.shutdown(Ar.Stop, e);
    }
    dispose(e = 2e3) {
      try {
        return this._disposed = "disposing", this.stop(e);
      } finally {
        this._disposed = "disposed";
      }
    }
    async shutdown(e, t = 2e3) {
      if (this.$state === he.Stopped || this.$state === he.Initial) return;
      if (this.$state === he.Stopping) {
        if (this._onStop !== void 0) return this._onStop;
        throw new Error("Client is stopping but no stop promise available.");
      }
      let r = this.activeConnection();
      if (r === void 0 || this.$state !== he.Running) throw new Error(`Client is not running and can't be stopped. It's current state is: ${this.$state}`);
      this._initializeResult = void 0, this.$state = he.Stopping, this.cleanUp(e);
      let i = new Promise((o) => {
        (0, k.RAL)().timer.setTimeout(o, t);
      }), s = (async (o) => (await o.shutdown(), await o.exit(), o))(r);
      return this._onStop = Promise.race([i, s]).then((o) => {
        if (o !== void 0) o.end(), o.dispose();
        else throw this.error("Stopping server timed out", void 0, false), new Error("Stopping the server timed out");
      }, (o) => {
        throw this.error("Stopping server failed", o, false), o;
      }).finally(() => {
        this.$state = he.Stopped, e === Ar.Stop && this.cleanUpChannel(), this._onStart = void 0, this._onStop = void 0, this._connection = void 0, this._ignoredRegistrations.clear();
      });
    }
    cleanUp(e) {
      this._fileEvents = [], this._fileEventDelayer.cancel();
      let t = this._listeners.splice(0, this._listeners.length);
      for (let r of t) r.dispose();
      this._syncedDocuments && this._syncedDocuments.clear();
      for (let r of Array.from(this._features.entries()).map((i) => i[1]).reverse()) r.clear();
      (e === Ar.Stop || e === Ar.Restart) && (this._diagnostics === void 0 && (this._diagnostics = null), this._diagnostics !== null && (this._clientOptions.diagnosticCollectionProvider.dispose(this._diagnostics, Tt.DiagnosticCollectionSource.push), this._diagnostics = null)), this._idleInterval !== void 0 && (this._idleInterval.dispose(), this._idleInterval = void 0);
    }
    cleanUpChannel() {
      this._outputChannel !== void 0 && this._disposeOutputChannel && (this._outputChannel.dispose(), this._outputChannel = void 0);
    }
    notifyFileEvent(e) {
      let t = this;
      async function r(s) {
        return t._fileEvents.push(s), t._fileEventDelayer.trigger(async () => {
          let o = t._fileEvents;
          t._fileEvents = [];
          try {
            await t.sendNotification(k.DidChangeWatchedFilesNotification.type, { changes: o });
          } catch (a) {
            throw t._fileEvents.push(...o), a;
          }
        });
      }
      let i = this.clientOptions.middleware?.workspace;
      (i?.didChangeWatchedFile ? i.didChangeWatchedFile(e, r) : r(e)).catch((s) => {
        t.error("Notifying file events failed.", s);
      });
    }
    async sendPendingFullTextDocumentChanges(e) {
      return this._pendingChangeSemaphore.lock(async () => {
        try {
          let t = this._didChangeTextDocumentFeature.getPendingDocumentChanges(this._inFlightOpenNotifications);
          if (t.length === 0) return;
          for (let r of t) {
            let i = this.code2ProtocolConverter.asChangeTextDocumentParams(r);
            this._didChangeTextDocumentFeature.aboutToSendNotification(r, k.DidChangeTextDocumentNotification.type, i), await e.sendNotification(k.DidChangeTextDocumentNotification.type, i), this._didChangeTextDocumentFeature.notificationSent(r, k.DidChangeTextDocumentNotification.type, i);
          }
        } catch (t) {
          throw this.error("Sending pending changes failed", t, false), t;
        }
      });
    }
    triggerPendingChangeDelivery() {
      this._pendingChangeDelayer.trigger(async () => {
        let e = this.activeConnection();
        if (e === void 0) {
          this.triggerPendingChangeDelivery();
          return;
        }
        await this.sendPendingFullTextDocumentChanges(e);
      }).catch((e) => this.error("Delivering pending changes failed", e, false));
    }
    _diagnosticQueue = /* @__PURE__ */ new Map();
    _diagnosticQueueState = { state: "idle" };
    handleDiagnostics(e) {
      if (this._diagnostics === null) return;
      let t = e.uri;
      this._diagnosticQueueState.state === "busy" && this._diagnosticQueueState.document === t && this._diagnosticQueueState.tokenSource.cancel(), this._diagnosticQueue.set(e.uri, e.diagnostics), this.triggerDiagnosticQueue();
    }
    triggerDiagnosticQueue() {
      (0, k.RAL)().timer.setImmediate(() => {
        this.workDiagnosticQueue();
      });
    }
    workDiagnosticQueue() {
      if (this._diagnosticQueueState.state === "busy") return;
      let e = this._diagnosticQueue.entries().next();
      if (e.done === true) return;
      let [t, r] = e.value;
      this._diagnosticQueue.delete(t);
      let i = new oe.CancellationTokenSource();
      this._diagnosticQueueState = { state: "busy", document: t, tokenSource: i }, this._p2c.asDiagnostics(r, i.token).then((s) => {
        if (!i.token.isCancellationRequested) {
          let o = this._p2c.asUri(t), a = this.clientOptions.middleware;
          a.handleDiagnostics ? a.handleDiagnostics(o, s, (c, l) => this.setDiagnostics(c, l)) : this.setDiagnostics(o, s);
        }
      }).catch((s) => {
        this.error("Processing diagnostic queue failed.", s);
      }).finally(() => {
        this._diagnosticQueueState = { state: "idle" }, this.triggerDiagnosticQueue();
      });
    }
    setDiagnostics(e, t) {
      if (this._diagnostics === null) return;
      let r = this.diagnostics;
      r !== void 0 && r.set(e, t);
    }
    getLocale() {
      return oe.env.language;
    }
    async $start() {
      if (this.$state === he.StartFailed) throw new Error("Previous start failed. Can't restart server.");
      await this.start();
      let e = this.activeConnection();
      if (e === void 0) throw new Error("Starting server failed");
      return e;
    }
    async createConnection() {
      let e = (i, s, o) => {
        this.handleConnectionError(i, s, o).catch((a) => this.error("Handling connection error failed", a));
      }, t = () => {
        this.handleConnectionClosed().catch((i) => this.error("Handling connection close failed", i));
      }, r = await this.createMessageTransports(this._clientOptions.stdioEncoding || "utf8");
      return this._connection = fO(r.reader, r.writer, e, t, this._clientOptions.connectionOptions), this._connection;
    }
    async handleConnectionClosed() {
      if (this.$state === he.Stopped) return;
      try {
        this._connection !== void 0 && this._connection.dispose();
      } catch {
      }
      let e = { action: kr.DoNotRestart };
      if (this.$state !== he.Stopping) try {
        e = await this._clientOptions.errorHandler.closed();
      } catch {
      }
      this._connection = void 0, e.action === kr.DoNotRestart ? (this.error(e.message ?? "Connection to server got closed. Server will not be restarted.", void 0, e.handled === true ? false : "force"), this.cleanUp(Ar.Stop), this.$state === he.Starting ? this.$state = he.StartFailed : this.$state = he.Stopped, this._onStop = Promise.resolve(), this._onStart = void 0) : e.action === kr.Restart && (this.info(e.message ?? "Connection to server got closed. Server will restart.", void 0, !e.handled), this.cleanUp(Ar.Restart), this.$state = he.Initial, this._onStop = Promise.resolve(), this._onStart = void 0, this.start().catch((t) => this.error("Restarting server failed", t, "force")));
    }
    async handleConnectionError(e, t, r) {
      let i = await this._clientOptions.errorHandler.error(e, t, r);
      i.action === Hs.Shutdown ? (this.error(i.message ?? `Client ${this._name}: connection to server is erroring.
${e.message}
Shutting down server.`, void 0, i.handled === true ? false : "force"), this.stop().catch((s) => {
        this.error("Stopping server failed", s, false);
      })) : this.error(i.message ?? `Client ${this._name}: connection to server is erroring.
${e.message}`, void 0, i.handled === true ? false : "force");
    }
    hookConfigurationChanged(e) {
      this._listeners.push(oe.workspace.onDidChangeConfiguration(() => {
        this.refreshTrace(e, true);
      }));
    }
    hookLogLevelChanged(e) {
      this._listeners.push(this.traceOutputChannel.onDidChangeLogLevel((t) => {
        this._traceLogLevel = t, this.refreshTrace(e, true);
      }));
    }
    refreshTrace(e, t = false) {
      let r = oe.workspace.getConfiguration(this._id), i = this._traceLogLevel !== oe.LogLevel.Trace ? k.Trace.Off : k.Trace.Messages, s = k.TraceFormat.Text;
      if (r && i !== k.Trace.Off) {
        let o = r.get("trace.server", "messages");
        typeof o == "string" ? (i = k.Trace.fromString(o), i === k.Trace.Off && (i = k.Trace.Messages)) : (i = k.Trace.fromString(r.get("trace.server.verbosity", "messages")), i === k.Trace.Off && (i = k.Trace.Messages), s = k.TraceFormat.fromString(r.get("trace.server.format", "text")));
      }
      this._trace = i, this._traceFormat = s, e.trace(this._trace, this._tracer, { sendNotification: t, traceFormat: this._traceFormat }).catch((o) => {
        this.error("Updating trace failed with error", o, false);
      });
    }
    hookFileEvents(e) {
      let t = this._clientOptions.synchronize.fileEvents;
      if (!t) return;
      let r;
      fn.array(t) ? r = t : r = [t], r && this._dynamicFeatures.get(k.DidChangeWatchedFilesNotification.type.method).registerRaw(yv.generateUuid(), r);
    }
    _features = [];
    _dynamicFeatures = /* @__PURE__ */ new Map();
    registerFeatures(e) {
      for (let t of e) this.registerFeature(t);
    }
    registerFeature(e) {
      if (this._features.push(e), Tt.DynamicFeature.is(e)) {
        let t = e.registrationType;
        this._dynamicFeatures.set(t.method, e);
      }
    }
    getFeature(e) {
      return this._dynamicFeatures.get(e);
    }
    hasDedicatedTextSynchronizationFeature(e) {
      let t = this.getFeature(k.NotebookDocumentSyncRegistrationType.method);
      return t === void 0 || !(t instanceof ah.NotebookDocumentSyncFeature) ? false : t.handles(e);
    }
    registerBuiltinFeatures() {
      let e = /* @__PURE__ */ new Map();
      this.registerFeature(new _v.ConfigurationFeature(this)), this._didOpenTextDocumentFeature = new Wi.DidOpenTextDocumentFeature(this, this._syncedDocuments), this.registerFeature(this._didOpenTextDocumentFeature), this._didChangeTextDocumentFeature = new Wi.DidChangeTextDocumentFeature(this, e), this._didChangeTextDocumentFeature.onPendingChangeAdded(() => {
        this.triggerPendingChangeDelivery();
      }), this.registerFeature(this._didChangeTextDocumentFeature), this.registerFeature(new Wi.WillSaveFeature(this)), this.registerFeature(new Wi.WillSaveWaitUntilFeature(this)), this.registerFeature(new Wi.DidSaveTextDocumentFeature(this)), this.registerFeature(new Wi.DidCloseTextDocumentFeature(this, this._syncedDocuments, e)), this.registerFeature(new lO.FileSystemWatcherFeature(this, (t) => this.notifyFileEvent(t))), this.registerFeature(new FT.CompletionItemFeature(this)), this.registerFeature(new LT.HoverFeature(this)), this.registerFeature(new kT.SignatureHelpFeature(this)), this.registerFeature(new AT.DefinitionFeature(this)), this.registerFeature(new WT.ReferencesFeature(this)), this.registerFeature(new $T.DocumentHighlightFeature(this)), this.registerFeature(new HT.DocumentSymbolFeature(this)), this.registerFeature(new UT.WorkspaceSymbolFeature(this)), this.registerFeature(new GT.CodeActionFeature(this)), this.registerFeature(new VT.CodeLensFeature(this)), this.registerFeature(new oh.DocumentFormattingFeature(this)), this.registerFeature(new oh.DocumentRangeFormattingFeature(this)), this.registerFeature(new oh.DocumentOnTypeFormattingFeature(this)), this.registerFeature(new XT.RenameFeature(this)), this.registerFeature(new JT.DocumentLinkFeature(this)), this.registerFeature(new QT.ExecuteCommandFeature(this)), this.registerFeature(new _v.SyncConfigurationFeature(this)), this.registerFeature(new zT.TypeDefinitionFeature(this)), this.registerFeature(new KT.ImplementationFeature(this)), this.registerFeature(new BT.ColorProviderFeature(this)), this.clientOptions.workspaceFolder === void 0 && this.registerFeature(new aO.WorkspaceFoldersFeature(this)), this.registerFeature(new YT.FoldingRangeFeature(this)), this.registerFeature(new ZT.DeclarationFeature(this)), this.registerFeature(new eO.SelectionRangeFeature(this)), this.registerFeature(new dO.ProgressFeature(this)), this.registerFeature(new tO.CallHierarchyFeature(this)), this.registerFeature(new nO.SemanticTokensFeature(this)), this.registerFeature(new rO.LinkedEditingFeature(this)), this.registerFeature(new zi.DidCreateFilesFeature(this)), this.registerFeature(new zi.DidRenameFilesFeature(this)), this.registerFeature(new zi.DidDeleteFilesFeature(this)), this.registerFeature(new zi.WillCreateFilesFeature(this)), this.registerFeature(new zi.WillRenameFilesFeature(this)), this.registerFeature(new zi.WillDeleteFilesFeature(this)), this.registerFeature(new iO.TypeHierarchyFeature(this)), this.registerFeature(new sO.InlineValueFeature(this)), this.registerFeature(new oO.InlayHintsFeature(this)), this.registerFeature(new NT.DiagnosticFeature(this)), this.registerFeature(new ah.NotebookDocumentSyncFeature(this)), this.registerFeature(new cO.InlineCompletionItemFeature(this)), this.registerFeature(new uO.TextDocumentContentFeature(this));
    }
    registerProposedFeatures() {
      this.registerFeatures(hh.createAll(this));
    }
    fillInitializeParams(e) {
      for (let t of this._features) fn.func(t.fillInitializeParams) && t.fillInitializeParams(e);
    }
    computeClientCapabilities() {
      let e = {};
      (0, Tt.ensure)(e, "workspace").applyEdit = true;
      let t = (0, Tt.ensure)((0, Tt.ensure)(e, "workspace"), "workspaceEdit");
      t.documentChanges = true, t.resourceOperations = [k.ResourceOperationKind.Create, k.ResourceOperationKind.Rename, k.ResourceOperationKind.Delete], t.failureHandling = k.FailureHandlingKind.TextOnlyTransactional, t.normalizesLineEndings = true, t.changeAnnotationSupport = { groupsOnLabel: true }, t.metadataSupport = true, t.snippetEditSupport = true;
      let r = (0, Tt.ensure)((0, Tt.ensure)(e, "textDocument"), "publishDiagnostics");
      r.relatedInformation = true, r.versionSupport = false, r.tagSupport = { valueSet: [k.DiagnosticTag.Unnecessary, k.DiagnosticTag.Deprecated] }, r.codeDescriptionSupport = true, r.dataSupport = true;
      let i = (0, Tt.ensure)((0, Tt.ensure)(e, "textDocument"), "filters");
      i.relativePatternSupport = true;
      let s = (0, Tt.ensure)(e, "window"), o = (0, Tt.ensure)(s, "showMessage");
      o.messageActionItem = { additionalPropertiesSupport: true };
      let a = (0, Tt.ensure)(s, "showDocument");
      a.support = true;
      let c = (0, Tt.ensure)(e, "general");
      c.staleRequestSupport = { cancel: true, retryOnContentModified: Array.from(n.RequestsToCancelOnContentModified) }, c.regularExpressions = { engine: "ECMAScript", version: "ES2020" }, c.markdown = { parser: "marked", version: "1.1.0" }, c.positionEncodings = ["utf-16"], this._clientOptions.markdown.supportHtml && (c.markdown.allowedTags = ["ul", "li", "p", "code", "blockquote", "ol", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "em", "pre", "table", "thead", "tbody", "tr", "th", "td", "div", "del", "a", "strong", "br", "img", "span"]);
      for (let l of this._features) l.fillClientCapabilities(e);
      return e;
    }
    initializeFeatures(e) {
      let t = this._clientOptions.documentSelector;
      for (let r of this._features) fn.func(r.preInitialize) && r.preInitialize(this._capabilities, t);
      for (let r of this._features) r.initialize(this._capabilities, t);
    }
    async handleRegistrationRequest(e) {
      let t = this.clientOptions.middleware?.handleRegisterCapability;
      return t ? t(e, (r) => this.doRegisterCapability(r)) : this.doRegisterCapability(e);
    }
    async doRegisterCapability(e) {
      if (!this.isRunning()) {
        for (let t of e.registrations) this._ignoredRegistrations.add(t.id);
        return;
      }
      for (let t of e.registrations) {
        let r = this._dynamicFeatures.get(t.method);
        if (r === void 0) return Promise.reject(new Error(`No feature implementation for ${t.method} found. Registration failed.`));
        let i = t.registerOptions ?? {};
        i.documentSelector = i.documentSelector ?? this._clientOptions.documentSelector;
        let s = { id: t.id, registerOptions: i };
        try {
          r.register(s);
        } catch (o) {
          return Promise.reject(o);
        }
      }
    }
    async handleUnregistrationRequest(e) {
      let t = this.clientOptions.middleware?.handleUnregisterCapability;
      return t ? t(e, (r) => this.doUnregisterCapability(r)) : this.doUnregisterCapability(e);
    }
    async doUnregisterCapability(e) {
      for (let t of e.unregisterations) {
        if (this._ignoredRegistrations.has(t.id)) continue;
        let r = this._dynamicFeatures.get(t.method);
        if (!r) return Promise.reject(new Error(`No feature implementation for ${t.method} found. Unregistration failed.`));
        r.unregister(t.id);
      }
    }
    async handleApplyWorkspaceEdit(e) {
      let t = this.clientOptions.middleware?.workspace?.handleApplyEdit;
      if (t) {
        let r = await t(e, (i) => this.doHandleApplyWorkspaceEdit(i));
        return r instanceof k.ResponseError ? Promise.reject(r) : r;
      } else return this.doHandleApplyWorkspaceEdit(e);
    }
    workspaceEditLock = new Ra.Semaphore(1);
    async doHandleApplyWorkspaceEdit(e) {
      let t = e.edit, r = await this.workspaceEditLock.lock(() => this._p2c.asWorkspaceEdit(t));
      return this.validateWorkspaceEdit(t) ? fn.asPromise(oe.workspace.applyEdit(r, { isRefactoring: e.metadata?.isRefactoring }).then((s) => ({ applied: s }))) : Promise.resolve({ applied: false });
    }
    validateWorkspaceEdit(e) {
      let t = /* @__PURE__ */ new Map();
      if (oe.workspace.textDocuments.forEach((r) => t.set(r.uri.toString(), r)), e.documentChanges) {
        for (let r of e.documentChanges) if (k.TextDocumentEdit.is(r) && r.textDocument.version !== null && r.textDocument.version >= 0) {
          let i = this._p2c.asUri(r.textDocument.uri).toString(), s = t.get(i);
          if (s && s.version !== r.textDocument.version) return false;
        }
      }
      return true;
    }
    static RequestsToCancelOnContentModified = /* @__PURE__ */ new Set([k.SemanticTokensRequest.method, k.SemanticTokensRangeRequest.method, k.SemanticTokensDeltaRequest.method]);
    static CancellableResolveCalls = /* @__PURE__ */ new Set([k.CompletionResolveRequest.method, k.CodeLensResolveRequest.method, k.CodeActionResolveRequest.method, k.InlayHintResolveRequest.method, k.DocumentLinkResolveRequest.method, k.WorkspaceSymbolResolveRequest.method]);
    handleFailedRequest(e, t, r, i, s = true, o = false) {
      if (r instanceof k.ResponseError) {
        if (r.code === k.ErrorCodes.PendingResponseRejected || r.code === k.ErrorCodes.ConnectionInactive) return i;
        if (r.code === k.LSPErrorCodes.RequestCancelled || r.code === k.LSPErrorCodes.ServerCancelled) {
          if (t !== void 0 && t.isCancellationRequested && !o) return i;
          throw r.data !== void 0 ? new Tt.LSPCancellationError(r.data) : new oe.CancellationError();
        } else if (r.code === k.LSPErrorCodes.ContentModified) {
          if (n.RequestsToCancelOnContentModified.has(e.method) || n.CancellableResolveCalls.has(e.method)) throw new oe.CancellationError();
          return i;
        }
      }
      throw this.error(`Request ${e.method} failed.`, r, s), r;
    }
  };
  Te.BaseLanguageClient = Ta;
  var dh = class extends Ta {
    serverOptions;
    constructor(e, t, r, i) {
      super(e, t, i), this.serverOptions = r;
    }
    async createMessageTransports(e) {
      return this.serverOptions();
    }
  };
  Te.LanguageClient = dh;
  var fh = class {
    error(e) {
      (0, k.RAL)().console.error(e);
    }
    warn(e) {
      (0, k.RAL)().console.warn(e);
    }
    info(e) {
      (0, k.RAL)().console.info(e);
    }
    log(e) {
      (0, k.RAL)().console.log(e);
    }
  };
  function fO(n, e, t, r, i) {
    let s = new fh(), o = (0, k.createProtocolConnection)(n, e, s, i);
    return o.onError((c) => {
      t(c[0], c[1], c[2]);
    }), o.onClose(r), { listen: () => o.listen(), sendRequest: o.sendRequest, onRequest: o.onRequest, hasPendingResponse: o.hasPendingResponse, sendNotification: o.sendNotification, onNotification: o.onNotification, onProgress: o.onProgress, sendProgress: o.sendProgress, trace: (c, l, d) => {
      let p = { sendNotification: false, traceFormat: k.TraceFormat.Text };
      return d === void 0 ? o.trace(c, l, p) : (fn.boolean(d), o.trace(c, l, d));
    }, initialize: (c) => o.sendRequest(k.InitializeRequest.type, c), shutdown: () => o.sendRequest(k.ShutdownRequest.type, void 0), exit: () => o.sendNotification(k.ExitNotification.type), end: () => o.end(), dispose: () => o.dispose() };
  }
  var hh;
  (function(n) {
    function e(t) {
      return [];
    }
    n.createAll = e;
  })(hh || (Te.ProposedFeatures = hh = {}));
});
var mh = j((Kt) => {
  "use strict";
  var hO = Kt && Kt.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), gh = Kt && Kt.__exportStar || function(n, e) {
    for (var t in n) t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && hO(e, n, t);
  };
  Object.defineProperty(Kt, "__esModule", { value: true });
  Kt.DiagnosticPullMode = Kt.vsdiag = void 0;
  gh(ae(), Kt);
  gh(ye(), Kt);
  var Cv = Zl();
  Object.defineProperty(Kt, "vsdiag", { enumerable: true, get: function() {
    return Cv.vsdiag;
  } });
  Object.defineProperty(Kt, "DiagnosticPullMode", { enumerable: true, get: function() {
    return Cv.DiagnosticPullMode;
  } });
  gh(ph(), Kt);
});
var Uv = j((dr) => {
  "use strict";
  var PO = dr && dr.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), RO = dr && dr.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), TO = dr && dr.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && PO(t, e, r[i]);
      return RO(t, e), t;
    };
  })();
  Object.defineProperty(dr, "__esModule", { value: true });
  dr.terminate = qO;
  var Hv = TO(require("child_process")), OO = process.platform === "win32", EO = process.platform === "darwin", xO = process.platform === "linux";
  function qO(n, e) {
    if (OO) try {
      let t = { stdio: ["pipe", "pipe", "ignore"] };
      return e && (t.cwd = e), Hv.execFileSync("taskkill", ["/T", "/F", "/PID", n.pid.toString()], t), true;
    } catch {
      return false;
    }
    else if (xO || EO) try {
      let t = n.pid.toString();
      if (!/^\d+$/.test(t)) return false;
      let r = `
terminateTree() {
	for cpid in $(pgrep -P "$1"); do
		terminateTree "$cpid"
	done
	kill -9 "$1" > /dev/null 2>&1
}

terminateTree "${t}"
`;
      return !Hv.spawnSync("/bin/sh", [], { input: r, stdio: ["pipe", "inherit", "inherit"] }).error;
    } catch {
      return false;
    }
    else return n.kill("SIGKILL"), true;
  }
});
var Kv = j((Dh) => {
  "use strict";
  Object.defineProperty(Dh, "__esModule", { value: true });
  var Wv = require("util"), fr = Gn(), bh = class n extends fr.AbstractMessageBuffer {
    static emptyBuffer = Buffer.allocUnsafe(0);
    constructor(e = "utf-8") {
      super(e);
    }
    emptyBuffer() {
      return n.emptyBuffer;
    }
    fromString(e, t) {
      return Buffer.from(e, t);
    }
    toString(e, t) {
      return e instanceof Buffer ? e.toString(t) : new Wv.TextDecoder(t).decode(e);
    }
    asNative(e, t) {
      return t === void 0 ? e instanceof Buffer ? e : Buffer.from(e) : e instanceof Buffer ? e.slice(0, t) : Buffer.from(e, 0, t);
    }
    allocNative(e) {
      return Buffer.allocUnsafe(e);
    }
  }, Ch = class {
    stream;
    constructor(e) {
      this.stream = e;
    }
    onClose(e) {
      return this.stream.on("close", e), fr.Disposable.create(() => this.stream.off("close", e));
    }
    onError(e) {
      return this.stream.on("error", e), fr.Disposable.create(() => this.stream.off("error", e));
    }
    onEnd(e) {
      return this.stream.on("end", e), fr.Disposable.create(() => this.stream.off("end", e));
    }
    onData(e) {
      return this.stream.on("data", e), fr.Disposable.create(() => this.stream.off("data", e));
    }
  }, wh = class {
    stream;
    constructor(e) {
      this.stream = e;
    }
    onClose(e) {
      return this.stream.on("close", e), fr.Disposable.create(() => this.stream.off("close", e));
    }
    onError(e) {
      return this.stream.on("error", e), fr.Disposable.create(() => this.stream.off("error", e));
    }
    onEnd(e) {
      return this.stream.on("end", e), fr.Disposable.create(() => this.stream.off("end", e));
    }
    write(e, t) {
      return new Promise((r, i) => {
        let s = (o) => {
          o == null ? r() : i(o);
        };
        typeof e == "string" ? this.stream.write(e, t, s) : this.stream.write(e, s);
      });
    }
    end() {
      this.stream.end();
    }
  }, zv = Object.freeze({ messageBuffer: Object.freeze({ create: (n) => new bh(n) }), applicationJson: Object.freeze({ encoder: Object.freeze({ name: "application/json", encode: (n, e) => {
    try {
      return Promise.resolve(Buffer.from(JSON.stringify(n, void 0, 0), e.charset));
    } catch (t) {
      return Promise.reject(t);
    }
  } }), decoder: Object.freeze({ name: "application/json", decode: (n, e) => {
    try {
      return n instanceof Buffer ? Promise.resolve(JSON.parse(n.toString(e.charset))) : Promise.resolve(JSON.parse(new Wv.TextDecoder(e.charset).decode(n)));
    } catch (t) {
      return Promise.reject(t);
    }
  } }) }), stream: Object.freeze({ asReadableStream: (n) => new Ch(n), asWritableStream: (n) => new wh(n) }), console, timer: Object.freeze({ setTimeout(n, e, ...t) {
    let r = setTimeout(n, e, ...t);
    return { dispose: () => clearTimeout(r) };
  }, setImmediate(n, ...e) {
    let t = setImmediate(n, ...e);
    return { dispose: () => clearImmediate(t) };
  }, setInterval(n, e, ...t) {
    let r = setInterval(n, e, ...t);
    return { dispose: () => clearInterval(r) };
  } }) });
  function Sh() {
    return zv;
  }
  (function(n) {
    function e() {
      fr.RAL.install(zv);
    }
    n.install = e;
  })(Sh || (Sh = {}));
  Dh.default = Sh;
});
var xh = j((_e) => {
  "use strict";
  var Gv = _e && _e.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), MO = _e && _e.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), Eh = _e && _e.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && Gv(t, e, r[i]);
      return MO(t, e), t;
    };
  })(), jO = _e && _e.__exportStar || function(n, e) {
    for (var t in n) t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && Gv(e, n, t);
  }, IO = _e && _e.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(_e, "__esModule", { value: true });
  _e.StreamMessageWriter = _e.StreamMessageReader = _e.SocketMessageWriter = _e.SocketMessageReader = _e.PortMessageWriter = _e.PortMessageReader = _e.IPCMessageWriter = _e.IPCMessageReader = void 0;
  _e.generateRandomPipeName = $O;
  _e.createClientPipeTransport = HO;
  _e.createServerPipeTransport = UO;
  _e.createClientSocketTransport = WO;
  _e.createServerSocketTransport = zO;
  _e.createMessageConnection = GO;
  var zs = IO(Kv());
  zs.default.install();
  var NO = Eh(require("path")), FO = Eh(require("os")), LO = Eh(require("fs")), Bv = require("crypto"), Na = require("net"), Bt = Gn();
  jO(Gn(), _e);
  var Ph = class extends Bt.AbstractMessageReader {
    process;
    constructor(e) {
      super(), this.process = e;
      let t = this.process;
      t.on("error", (r) => this.fireError(r)), t.on("close", () => this.fireClose());
    }
    listen(e) {
      return this.process.on("message", e), Bt.Disposable.create(() => this.process.off("message", e));
    }
  };
  _e.IPCMessageReader = Ph;
  var Rh = class extends Bt.AbstractMessageWriter {
    process;
    errorCount;
    constructor(e) {
      super(), this.process = e, this.errorCount = 0;
      let t = this.process;
      t.on("error", (r) => this.fireError(r)), t.on("close", () => this.fireClose);
    }
    write(e) {
      try {
        return typeof this.process.send == "function" && this.process.send(e, void 0, void 0, (t) => {
          t ? (this.errorCount++, this.handleError(t, e)) : this.errorCount = 0;
        }), Promise.resolve();
      } catch (t) {
        return this.handleError(t, e), Promise.reject(t);
      }
    }
    handleError(e, t) {
      this.errorCount++, this.fireError(e, t, this.errorCount);
    }
    end() {
    }
  };
  _e.IPCMessageWriter = Rh;
  var Th = class extends Bt.AbstractMessageReader {
    onData;
    constructor(e) {
      super(), this.onData = new Bt.Emitter(), e.on("close", () => this.fireClose), e.on("error", (t) => this.fireError(t)), e.on("message", (t) => {
        this.onData.fire(t);
      });
    }
    listen(e) {
      return this.onData.event(e);
    }
  };
  _e.PortMessageReader = Th;
  var Oh = class extends Bt.AbstractMessageWriter {
    port;
    errorCount;
    constructor(e) {
      super(), this.port = e, this.errorCount = 0, e.on("close", () => this.fireClose()), e.on("error", (t) => this.fireError(t));
    }
    write(e) {
      try {
        return this.port.postMessage(e), Promise.resolve();
      } catch (t) {
        return this.handleError(t, e), Promise.reject(t);
      }
    }
    handleError(e, t) {
      this.errorCount++, this.fireError(e, t, this.errorCount);
    }
    end() {
    }
  };
  _e.PortMessageWriter = Oh;
  var si = class extends Bt.ReadableStreamMessageReader {
    constructor(e, t = "utf-8") {
      super((0, zs.default)().stream.asReadableStream(e), t);
    }
  };
  _e.SocketMessageReader = si;
  var oi = class extends Bt.WriteableStreamMessageWriter {
    socket;
    constructor(e, t) {
      super((0, zs.default)().stream.asWritableStream(e), t), this.socket = e;
    }
    dispose() {
      super.dispose(), this.socket.destroy();
    }
  };
  _e.SocketMessageWriter = oi;
  var ja = class extends Bt.ReadableStreamMessageReader {
    constructor(e, t) {
      super((0, zs.default)().stream.asReadableStream(e), t);
    }
  };
  _e.StreamMessageReader = ja;
  var Ia = class extends Bt.WriteableStreamMessageWriter {
    constructor(e, t) {
      super((0, zs.default)().stream.asWritableStream(e), t);
    }
  };
  _e.StreamMessageWriter = Ia;
  var AO = process.env.XDG_RUNTIME_DIR, kO = /* @__PURE__ */ new Map([["linux", 107], ["darwin", 102]]);
  function $O() {
    if (process.platform === "win32") return `\\\\.\\pipe\\lsp-${(0, Bv.randomBytes)(16).toString("hex")}-sock`;
    let n = 32, e = 10, t = LO.realpathSync(AO ?? FO.tmpdir()), r = kO.get(process.platform);
    if (r !== void 0 && (n = Math.min(r - t.length - e, n)), n < 16) throw new Error(`Unable to generate a random pipe name with ${n} characters.`);
    let i = (0, Bv.randomBytes)(Math.floor(n / 2)).toString("hex");
    return NO.join(t, `lsp-${i}.sock`);
  }
  function HO(n, e = "utf-8") {
    let t, r = new Promise((i, s) => {
      t = i;
    });
    return new Promise((i, s) => {
      let o = (0, Na.createServer)((a) => {
        o.close(), t([new si(a, e), new oi(a, e)]);
      });
      o.on("error", s), o.listen(n, () => {
        o.removeListener("error", s), i({ onConnected: () => r });
      });
    });
  }
  function UO(n, e = "utf-8") {
    let t = (0, Na.createConnection)(n);
    return [new si(t, e), new oi(t, e)];
  }
  function WO(n, e = "utf-8") {
    let t, r = new Promise((i, s) => {
      t = i;
    });
    return new Promise((i, s) => {
      let o = (0, Na.createServer)((a) => {
        o.close(), t([new si(a, e), new oi(a, e)]);
      });
      o.on("error", s), o.listen(n, "127.0.0.1", () => {
        o.removeListener("error", s), i({ onConnected: () => r });
      });
    });
  }
  function zO(n, e = "utf-8") {
    let t = (0, Na.createConnection)(n, "127.0.0.1");
    return [new si(t, e), new oi(t, e)];
  }
  function KO(n) {
    let e = n;
    return e.read !== void 0 && e.addListener !== void 0;
  }
  function BO(n) {
    let e = n;
    return e.write !== void 0 && e.addListener !== void 0;
  }
  function GO(n, e, t, r) {
    t || (t = Bt.NullLogger);
    let i = KO(n) ? new ja(n) : n, s = BO(e) ? new Ia(e) : e;
    return Bt.ConnectionStrategy.is(r) && (r = { connectionStrategy: r }), (0, Bt.createMessageConnection)(i, s, t, r);
  }
});
var qh = j((hr) => {
  "use strict";
  var VO = hr && hr.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), Vv = hr && hr.__exportStar || function(n, e) {
    for (var t in n) t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && VO(e, n, t);
  };
  Object.defineProperty(hr, "__esModule", { value: true });
  hr.createProtocolConnection = JO;
  var XO = xh();
  Vv(xh(), hr);
  Vv(ae(), hr);
  function JO(n, e, t, r) {
    return (0, XO.createMessageConnection)(n, e, t, r);
  }
});
var Ks = j((gM, Xv) => {
  "use strict";
  var QO = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  };
  Xv.exports = QO;
});
var Fa = j((mM, Jv) => {
  "use strict";
  var YO = "2.0.0", ZO = Number.MAX_SAFE_INTEGER || 9007199254740991, eE = 16, tE = 250, nE = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
  Jv.exports = { MAX_LENGTH: 256, MAX_SAFE_COMPONENT_LENGTH: eE, MAX_SAFE_BUILD_LENGTH: tE, MAX_SAFE_INTEGER: ZO, RELEASE_TYPES: nE, SEMVER_SPEC_VERSION: YO, FLAG_INCLUDE_PRERELEASE: 1, FLAG_LOOSE: 2 };
});
var La = j((kn, Qv) => {
  "use strict";
  var { MAX_SAFE_COMPONENT_LENGTH: Mh, MAX_SAFE_BUILD_LENGTH: rE, MAX_LENGTH: iE } = Fa(), sE = Ks();
  kn = Qv.exports = {};
  var oE = kn.re = [], aE = kn.safeRe = [], V = kn.src = [], cE = kn.safeSrc = [], X = kn.t = {}, uE = 0, jh = "[a-zA-Z0-9-]", lE = [["\\s", 1], ["\\d", iE], [jh, rE]], dE = (n) => {
    for (let [e, t] of lE) n = n.split(`${e}*`).join(`${e}{0,${t}}`).split(`${e}+`).join(`${e}{1,${t}}`);
    return n;
  }, fe = (n, e, t) => {
    let r = dE(e), i = uE++;
    sE(n, i, e), X[n] = i, V[i] = e, cE[i] = r, oE[i] = new RegExp(e, t ? "g" : void 0), aE[i] = new RegExp(r, t ? "g" : void 0);
  };
  fe("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  fe("NUMERICIDENTIFIERLOOSE", "\\d+");
  fe("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${jh}*`);
  fe("MAINVERSION", `(${V[X.NUMERICIDENTIFIER]})\\.(${V[X.NUMERICIDENTIFIER]})\\.(${V[X.NUMERICIDENTIFIER]})`);
  fe("MAINVERSIONLOOSE", `(${V[X.NUMERICIDENTIFIERLOOSE]})\\.(${V[X.NUMERICIDENTIFIERLOOSE]})\\.(${V[X.NUMERICIDENTIFIERLOOSE]})`);
  fe("PRERELEASEIDENTIFIER", `(?:${V[X.NONNUMERICIDENTIFIER]}|${V[X.NUMERICIDENTIFIER]})`);
  fe("PRERELEASEIDENTIFIERLOOSE", `(?:${V[X.NONNUMERICIDENTIFIER]}|${V[X.NUMERICIDENTIFIERLOOSE]})`);
  fe("PRERELEASE", `(?:-(${V[X.PRERELEASEIDENTIFIER]}(?:\\.${V[X.PRERELEASEIDENTIFIER]})*))`);
  fe("PRERELEASELOOSE", `(?:-?(${V[X.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${V[X.PRERELEASEIDENTIFIERLOOSE]})*))`);
  fe("BUILDIDENTIFIER", `${jh}+`);
  fe("BUILD", `(?:\\+(${V[X.BUILDIDENTIFIER]}(?:\\.${V[X.BUILDIDENTIFIER]})*))`);
  fe("FULLPLAIN", `v?${V[X.MAINVERSION]}${V[X.PRERELEASE]}?${V[X.BUILD]}?`);
  fe("FULL", `^${V[X.FULLPLAIN]}$`);
  fe("LOOSEPLAIN", `[v=\\s]*${V[X.MAINVERSIONLOOSE]}${V[X.PRERELEASELOOSE]}?${V[X.BUILD]}?`);
  fe("LOOSE", `^${V[X.LOOSEPLAIN]}$`);
  fe("GTLT", "((?:<|>)?=?)");
  fe("XRANGEIDENTIFIERLOOSE", `${V[X.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  fe("XRANGEIDENTIFIER", `${V[X.NUMERICIDENTIFIER]}|x|X|\\*`);
  fe("XRANGEPLAIN", `[v=\\s]*(${V[X.XRANGEIDENTIFIER]})(?:\\.(${V[X.XRANGEIDENTIFIER]})(?:\\.(${V[X.XRANGEIDENTIFIER]})(?:${V[X.PRERELEASE]})?${V[X.BUILD]}?)?)?`);
  fe("XRANGEPLAINLOOSE", `[v=\\s]*(${V[X.XRANGEIDENTIFIERLOOSE]})(?:\\.(${V[X.XRANGEIDENTIFIERLOOSE]})(?:\\.(${V[X.XRANGEIDENTIFIERLOOSE]})(?:${V[X.PRERELEASELOOSE]})?${V[X.BUILD]}?)?)?`);
  fe("XRANGE", `^${V[X.GTLT]}\\s*${V[X.XRANGEPLAIN]}$`);
  fe("XRANGELOOSE", `^${V[X.GTLT]}\\s*${V[X.XRANGEPLAINLOOSE]}$`);
  fe("COERCEPLAIN", `(^|[^\\d])(\\d{1,${Mh}})(?:\\.(\\d{1,${Mh}}))?(?:\\.(\\d{1,${Mh}}))?`);
  fe("COERCE", `${V[X.COERCEPLAIN]}(?:$|[^\\d])`);
  fe("COERCEFULL", V[X.COERCEPLAIN] + `(?:${V[X.PRERELEASE]})?(?:${V[X.BUILD]})?(?:$|[^\\d])`);
  fe("COERCERTL", V[X.COERCE], true);
  fe("COERCERTLFULL", V[X.COERCEFULL], true);
  fe("LONETILDE", "(?:~>?)");
  fe("TILDETRIM", `(\\s*)${V[X.LONETILDE]}\\s+`, true);
  kn.tildeTrimReplace = "$1~";
  fe("TILDE", `^${V[X.LONETILDE]}${V[X.XRANGEPLAIN]}$`);
  fe("TILDELOOSE", `^${V[X.LONETILDE]}${V[X.XRANGEPLAINLOOSE]}$`);
  fe("LONECARET", "(?:\\^)");
  fe("CARETTRIM", `(\\s*)${V[X.LONECARET]}\\s+`, true);
  kn.caretTrimReplace = "$1^";
  fe("CARET", `^${V[X.LONECARET]}${V[X.XRANGEPLAIN]}$`);
  fe("CARETLOOSE", `^${V[X.LONECARET]}${V[X.XRANGEPLAINLOOSE]}$`);
  fe("COMPARATORLOOSE", `^${V[X.GTLT]}\\s*(${V[X.LOOSEPLAIN]})$|^$`);
  fe("COMPARATOR", `^${V[X.GTLT]}\\s*(${V[X.FULLPLAIN]})$|^$`);
  fe("COMPARATORTRIM", `(\\s*)${V[X.GTLT]}\\s*(${V[X.LOOSEPLAIN]}|${V[X.XRANGEPLAIN]})`, true);
  kn.comparatorTrimReplace = "$1$2$3";
  fe("HYPHENRANGE", `^\\s*(${V[X.XRANGEPLAIN]})\\s+-\\s+(${V[X.XRANGEPLAIN]})\\s*$`);
  fe("HYPHENRANGELOOSE", `^\\s*(${V[X.XRANGEPLAINLOOSE]})\\s+-\\s+(${V[X.XRANGEPLAINLOOSE]})\\s*$`);
  fe("STAR", "(<|>)?=?\\s*\\*");
  fe("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  fe("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
});
var Aa = j((yM, Yv) => {
  "use strict";
  var fE = Object.freeze({ loose: true }), hE = Object.freeze({}), pE = (n) => n ? typeof n != "object" ? fE : n : hE;
  Yv.exports = pE;
});
var nb = j((_M, tb) => {
  "use strict";
  var Zv = /^[0-9]+$/, eb = (n, e) => {
    if (typeof n == "number" && typeof e == "number") return n === e ? 0 : n < e ? -1 : 1;
    let t = Zv.test(n), r = Zv.test(e);
    return t && r && (n = +n, e = +e), n === e ? 0 : t && !r ? -1 : r && !t ? 1 : n < e ? -1 : 1;
  }, gE = (n, e) => eb(e, n);
  tb.exports = { compareIdentifiers: eb, rcompareIdentifiers: gE };
});
var Bs = j((vM, ib) => {
  "use strict";
  var ka = Ks(), { MAX_LENGTH: rb, MAX_SAFE_INTEGER: $a } = Fa(), { safeRe: Ha, t: Ua } = La(), mE = Aa(), { compareIdentifiers: Ih } = nb(), yE = (n, e) => {
    let t = e.split(".");
    if (t.length > n.length) return false;
    for (let r = 0; r < t.length; r++) if (Ih(n[r], t[r]) !== 0) return false;
    return true;
  }, Nh = class n {
    constructor(e, t) {
      if (t = mE(t), e instanceof n) {
        if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;
        e = e.version;
      } else if (typeof e != "string") throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
      if (e.length > rb) throw new TypeError(`version is longer than ${rb} characters`);
      ka("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
      let r = e.trim().match(t.loose ? Ha[Ua.LOOSE] : Ha[Ua.FULL]);
      if (!r) throw new TypeError(`Invalid Version: ${e}`);
      if (this.raw = e, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > $a || this.major < 0) throw new TypeError("Invalid major version");
      if (this.minor > $a || this.minor < 0) throw new TypeError("Invalid minor version");
      if (this.patch > $a || this.patch < 0) throw new TypeError("Invalid patch version");
      r[4] ? this.prerelease = r[4].split(".").map((i) => {
        if (/^[0-9]+$/.test(i)) {
          let s = +i;
          if (s >= 0 && s < $a) return s;
        }
        return i;
      }) : this.prerelease = [], this.build = r[5] ? r[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(e) {
      if (ka("SemVer.compare", this.version, this.options, e), !(e instanceof n)) {
        if (typeof e == "string" && e === this.version) return 0;
        e = new n(e, this.options);
      }
      return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
    }
    compareMain(e) {
      return e instanceof n || (e = new n(e, this.options)), this.major < e.major ? -1 : this.major > e.major ? 1 : this.minor < e.minor ? -1 : this.minor > e.minor ? 1 : this.patch < e.patch ? -1 : this.patch > e.patch ? 1 : 0;
    }
    comparePre(e) {
      if (e instanceof n || (e = new n(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
      if (!this.prerelease.length && e.prerelease.length) return 1;
      if (!this.prerelease.length && !e.prerelease.length) return 0;
      let t = 0;
      do {
        let r = this.prerelease[t], i = e.prerelease[t];
        if (ka("prerelease compare", t, r, i), r === void 0 && i === void 0) return 0;
        if (i === void 0) return 1;
        if (r === void 0) return -1;
        if (r === i) continue;
        return Ih(r, i);
      } while (++t);
    }
    compareBuild(e) {
      e instanceof n || (e = new n(e, this.options));
      let t = 0;
      do {
        let r = this.build[t], i = e.build[t];
        if (ka("build compare", t, r, i), r === void 0 && i === void 0) return 0;
        if (i === void 0) return 1;
        if (r === void 0) return -1;
        if (r === i) continue;
        return Ih(r, i);
      } while (++t);
    }
    inc(e, t, r) {
      if (e.startsWith("pre")) {
        if (!t && r === false) throw new Error("invalid increment argument: identifier is empty");
        if (t) {
          let i = `-${t}`.match(this.options.loose ? Ha[Ua.PRERELEASELOOSE] : Ha[Ua.PRERELEASE]);
          if (!i || i[1] !== t) throw new Error(`invalid identifier: ${t}`);
        }
      }
      switch (e) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t, r);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t, r);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", t, r), this.inc("pre", t, r);
          break;
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", t, r), this.inc("pre", t, r);
          break;
        case "release":
          if (this.prerelease.length === 0) throw new Error(`version ${this.raw} is not a prerelease`);
          this.prerelease.length = 0;
          break;
        case "major":
          (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
          break;
        case "minor":
          (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
          break;
        case "patch":
          this.prerelease.length === 0 && this.patch++, this.prerelease = [];
          break;
        case "pre": {
          let i = Number(r) ? 1 : 0;
          if (this.prerelease.length === 0) this.prerelease = [i];
          else {
            let s = this.prerelease.length;
            for (; --s >= 0; ) typeof this.prerelease[s] == "number" && (this.prerelease[s]++, s = -2);
            if (s === -1) {
              if (t === this.prerelease.join(".") && r === false) throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(i);
            }
          }
          if (t) {
            let s = [t, i];
            if (r === false && (s = [t]), yE(this.prerelease, t)) {
              let o = this.prerelease[t.split(".").length];
              isNaN(o) && (this.prerelease = s);
            } else this.prerelease = s;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${e}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  };
  ib.exports = Nh;
});
var ab = j((bM, ob) => {
  "use strict";
  var sb = Bs(), _E = (n, e, t = false) => {
    if (n instanceof sb) return n;
    try {
      return new sb(n, e);
    } catch (r) {
      if (!t) return null;
      throw r;
    }
  };
  ob.exports = _E;
});
var ub = j((CM, cb) => {
  "use strict";
  var Fh = class {
    constructor() {
      this.max = 1e3, this.map = /* @__PURE__ */ new Map();
    }
    get(e) {
      let t = this.map.get(e);
      if (t !== void 0) return this.map.delete(e), this.map.set(e, t), t;
    }
    delete(e) {
      return this.map.delete(e);
    }
    set(e, t) {
      if (!this.delete(e) && t !== void 0) {
        if (this.map.size >= this.max) {
          let i = this.map.keys().next().value;
          this.delete(i);
        }
        this.map.set(e, t);
      }
      return this;
    }
  };
  cb.exports = Fh;
});
var ai = j((wM, db) => {
  "use strict";
  var lb = Bs(), vE = (n, e, t) => new lb(n, t).compare(new lb(e, t));
  db.exports = vE;
});
var hb = j((SM, fb) => {
  "use strict";
  var bE = ai(), CE = (n, e, t) => bE(n, e, t) === 0;
  fb.exports = CE;
});
var gb = j((DM, pb) => {
  "use strict";
  var wE = ai(), SE = (n, e, t) => wE(n, e, t) !== 0;
  pb.exports = SE;
});
var yb = j((PM, mb) => {
  "use strict";
  var DE = ai(), PE = (n, e, t) => DE(n, e, t) > 0;
  mb.exports = PE;
});
var vb = j((RM, _b) => {
  "use strict";
  var RE = ai(), TE = (n, e, t) => RE(n, e, t) >= 0;
  _b.exports = TE;
});
var Cb = j((TM, bb) => {
  "use strict";
  var OE = ai(), EE = (n, e, t) => OE(n, e, t) < 0;
  bb.exports = EE;
});
var Sb = j((OM, wb) => {
  "use strict";
  var xE = ai(), qE = (n, e, t) => xE(n, e, t) <= 0;
  wb.exports = qE;
});
var Pb = j((EM, Db) => {
  "use strict";
  var ME = hb(), jE = gb(), IE = yb(), NE = vb(), FE = Cb(), LE = Sb(), AE = (n, e, t, r) => {
    switch (e) {
      case "===":
        return typeof n == "object" && (n = n.version), typeof t == "object" && (t = t.version), n === t;
      case "!==":
        return typeof n == "object" && (n = n.version), typeof t == "object" && (t = t.version), n !== t;
      case "":
      case "=":
      case "==":
        return ME(n, t, r);
      case "!=":
        return jE(n, t, r);
      case ">":
        return IE(n, t, r);
      case ">=":
        return NE(n, t, r);
      case "<":
        return FE(n, t, r);
      case "<=":
        return LE(n, t, r);
      default:
        throw new TypeError(`Invalid operator: ${e}`);
    }
  };
  Db.exports = AE;
});
var Mb = j((xM, qb) => {
  "use strict";
  var Gs = /* @__PURE__ */ Symbol("SemVer ANY"), kh = class n {
    static get ANY() {
      return Gs;
    }
    constructor(e, t) {
      if (t = Rb(t), e instanceof n) {
        if (e.loose === !!t.loose) return e;
        e = e.value;
      }
      e = e.trim().split(/\s+/).join(" "), Ah("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === Gs ? this.value = "" : this.value = this.operator + this.semver.version, Ah("comp", this);
    }
    parse(e) {
      let t = this.options.loose ? Tb[Ob.COMPARATORLOOSE] : Tb[Ob.COMPARATOR], r = e.match(t);
      if (!r) throw new TypeError(`Invalid comparator: ${e}`);
      this.operator = r[1] !== void 0 ? r[1] : "", this.operator === "=" && (this.operator = ""), r[2] ? this.semver = new Eb(r[2], this.options.loose) : this.semver = Gs;
    }
    toString() {
      return this.value;
    }
    test(e) {
      if (Ah("Comparator.test", e, this.options.loose), this.semver === Gs || e === Gs) return true;
      if (typeof e == "string") try {
        e = new Eb(e, this.options);
      } catch {
        return false;
      }
      return Lh(e, this.operator, this.semver, this.options);
    }
    intersects(e, t) {
      if (!(e instanceof n)) throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? true : new xb(e.value, t).test(this.value) : e.operator === "" ? e.value === "" ? true : new xb(this.value, t).test(e.semver) : (t = Rb(t), t.includePrerelease && (this.value === "<0.0.0-0" || e.value === "<0.0.0-0") || !t.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0")) ? false : !!(this.operator.startsWith(">") && e.operator.startsWith(">") || this.operator.startsWith("<") && e.operator.startsWith("<") || this.semver.version === e.semver.version && this.operator.includes("=") && e.operator.includes("=") || Lh(this.semver, "<", e.semver, t) && this.operator.startsWith(">") && e.operator.startsWith("<") || Lh(this.semver, ">", e.semver, t) && this.operator.startsWith("<") && e.operator.startsWith(">")));
    }
  };
  qb.exports = kh;
  var Rb = Aa(), { safeRe: Tb, t: Ob } = La(), Lh = Pb(), Ah = Ks(), Eb = Bs(), xb = $h();
});
var $h = j((qM, Fb) => {
  "use strict";
  var kE = /\s+/g, Hh = class n {
    constructor(e, t) {
      if (t = HE(t), e instanceof n) return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new n(e.raw, t);
      if (e instanceof Uh) return this.raw = e.value, this.set = [[e]], this.formatted = void 0, this;
      if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e.trim().replace(kE, " "), this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((r) => r.length), !this.set.length) throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        let r = this.set[0];
        if (this.set = this.set.filter((i) => !Ib(i[0])), this.set.length === 0) this.set = [r];
        else if (this.set.length > 1) {
          for (let i of this.set) if (i.length === 1 && JE(i[0])) {
            this.set = [i];
            break;
          }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let e = 0; e < this.set.length; e++) {
          e > 0 && (this.formatted += "||");
          let t = this.set[e];
          for (let r = 0; r < t.length; r++) r > 0 && (this.formatted += " "), this.formatted += t[r].toString().trim();
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(e) {
      e = e.replace(XE, "");
      let r = ((this.options.includePrerelease && GE) | (this.options.loose && VE)) + ":" + e, i = jb.get(r);
      if (i) return i;
      let s = this.options.loose, o = s ? Et[mt.HYPHENRANGELOOSE] : Et[mt.HYPHENRANGE];
      e = e.replace(o, a0(this.options.includePrerelease)), ke("hyphen replace", e), e = e.replace(Et[mt.COMPARATORTRIM], zE), ke("comparator trim", e), e = e.replace(Et[mt.TILDETRIM], KE), ke("tilde trim", e), e = e.replace(Et[mt.CARETTRIM], BE), ke("caret trim", e);
      let a = e.split(" ").map((p) => QE(p, this.options)).join(" ").split(/\s+/).map((p) => o0(p, this.options));
      s && (a = a.filter((p) => (ke("loose invalid filter", p, this.options), !!p.match(Et[mt.COMPARATORLOOSE])))), ke("range list", a);
      let c = /* @__PURE__ */ new Map(), l = a.map((p) => new Uh(p, this.options));
      for (let p of l) {
        if (Ib(p)) return [p];
        c.set(p.value, p);
      }
      c.size > 1 && c.has("") && c.delete("");
      let d = [...c.values()];
      return jb.set(r, d), d;
    }
    intersects(e, t) {
      if (!(e instanceof n)) throw new TypeError("a Range is required");
      return this.set.some((r) => Nb(r, t) && e.set.some((i) => Nb(i, t) && r.every((s) => i.every((o) => s.intersects(o, t)))));
    }
    test(e) {
      if (!e) return false;
      if (typeof e == "string") try {
        e = new UE(e, this.options);
      } catch {
        return false;
      }
      for (let t = 0; t < this.set.length; t++) if (c0(this.set[t], e, this.options)) return true;
      return false;
    }
  };
  Fb.exports = Hh;
  var $E = ub(), jb = new $E(), HE = Aa(), Uh = Mb(), ke = Ks(), UE = Bs(), { safeRe: Et, src: WE, t: mt, comparatorTrimReplace: zE, tildeTrimReplace: KE, caretTrimReplace: BE } = La(), { FLAG_INCLUDE_PRERELEASE: GE, FLAG_LOOSE: VE } = Fa(), XE = new RegExp(WE[mt.BUILD], "g"), Ib = (n) => n.value === "<0.0.0-0", JE = (n) => n.value === "", Nb = (n, e) => {
    let t = true, r = n.slice(), i = r.pop();
    for (; t && r.length; ) t = r.every((s) => i.intersects(s, e)), i = r.pop();
    return t;
  }, QE = (n, e) => (n = n.replace(Et[mt.BUILD], ""), ke("comp", n, e), n = t0(n, e), ke("caret", n), n = ZE(n, e), ke("tildes", n), n = r0(n, e), ke("xrange", n), n = s0(n, e), ke("stars", n), n), st = (n) => !n || n.toLowerCase() === "x" || n === "*", YE = (n, e, t) => st(n) && !st(e) || st(e) && t && !st(t), ZE = (n, e) => n.trim().split(/\s+/).map((t) => e0(t, e)).join(" "), e0 = (n, e) => {
    let t = e.loose ? Et[mt.TILDELOOSE] : Et[mt.TILDE], r = e.includePrerelease ? "-0" : "";
    return n.replace(t, (i, s, o, a, c) => {
      ke("tilde", n, i, s, o, a, c);
      let l;
      return st(s) ? l = "" : st(o) ? l = `>=${s}.0.0${r} <${+s + 1}.0.0-0` : st(a) ? l = `>=${s}.${o}.0${r} <${s}.${+o + 1}.0-0` : c ? (ke("replaceTilde pr", c), l = `>=${s}.${o}.${a}-${c} <${s}.${+o + 1}.0-0`) : l = `>=${s}.${o}.${a} <${s}.${+o + 1}.0-0`, ke("tilde return", l), l;
    });
  }, t0 = (n, e) => n.trim().split(/\s+/).map((t) => n0(t, e)).join(" "), n0 = (n, e) => {
    ke("caret", n, e);
    let t = e.loose ? Et[mt.CARETLOOSE] : Et[mt.CARET], r = e.includePrerelease ? "-0" : "";
    return n.replace(t, (i, s, o, a, c) => {
      ke("caret", n, i, s, o, a, c);
      let l;
      return st(s) ? l = "" : st(o) ? l = `>=${s}.0.0${r} <${+s + 1}.0.0-0` : st(a) ? s === "0" ? l = `>=${s}.${o}.0${r} <${s}.${+o + 1}.0-0` : l = `>=${s}.${o}.0${r} <${+s + 1}.0.0-0` : c ? (ke("replaceCaret pr", c), s === "0" ? o === "0" ? l = `>=${s}.${o}.${a}-${c} <${s}.${o}.${+a + 1}-0` : l = `>=${s}.${o}.${a}-${c} <${s}.${+o + 1}.0-0` : l = `>=${s}.${o}.${a}-${c} <${+s + 1}.0.0-0`) : (ke("no pr"), s === "0" ? o === "0" ? l = `>=${s}.${o}.${a} <${s}.${o}.${+a + 1}-0` : l = `>=${s}.${o}.${a} <${s}.${+o + 1}.0-0` : l = `>=${s}.${o}.${a} <${+s + 1}.0.0-0`), ke("caret return", l), l;
    });
  }, r0 = (n, e) => (ke("replaceXRanges", n, e), n.split(/\s+/).map((t) => i0(t, e)).join(" ")), i0 = (n, e) => {
    n = n.trim();
    let t = e.loose ? Et[mt.XRANGELOOSE] : Et[mt.XRANGE];
    return n.replace(t, (r, i, s, o, a, c) => {
      if (ke("xRange", n, r, i, s, o, a, c), YE(s, o, a)) return n;
      let l = st(s), d = l || st(o), p = d || st(a), h = p;
      return i === "=" && h && (i = ""), c = e.includePrerelease ? "-0" : "", l ? i === ">" || i === "<" ? r = "<0.0.0-0" : r = "*" : i && h ? (d && (o = 0), a = 0, i === ">" ? (i = ">=", d ? (s = +s + 1, o = 0, a = 0) : (o = +o + 1, a = 0)) : i === "<=" && (i = "<", d ? s = +s + 1 : o = +o + 1), i === "<" && (c = "-0"), r = `${i + s}.${o}.${a}${c}`) : d ? r = `>=${s}.0.0${c} <${+s + 1}.0.0-0` : p && (r = `>=${s}.${o}.0${c} <${s}.${+o + 1}.0-0`), ke("xRange return", r), r;
    });
  }, s0 = (n, e) => (ke("replaceStars", n, e), n.trim().replace(Et[mt.STAR], "")), o0 = (n, e) => (ke("replaceGTE0", n, e), n.trim().replace(Et[e.includePrerelease ? mt.GTE0PRE : mt.GTE0], "")), a0 = (n) => (e, t, r, i, s, o, a, c, l, d, p, h) => (st(r) ? t = "" : st(i) ? t = `>=${r}.0.0${n ? "-0" : ""}` : st(s) ? t = `>=${r}.${i}.0${n ? "-0" : ""}` : o ? t = `>=${t}` : t = `>=${t}${n ? "-0" : ""}`, st(l) ? c = "" : st(d) ? c = `<${+l + 1}.0.0-0` : st(p) ? c = `<${l}.${+d + 1}.0-0` : h ? c = `<=${l}.${d}.${p}-${h}` : n ? c = `<${l}.${d}.${+p + 1}-0` : c = `<=${c}`, `${t} ${c}`.trim()), c0 = (n, e, t) => {
    for (let r = 0; r < n.length; r++) if (!n[r].test(e)) return false;
    if (e.prerelease.length && !t.includePrerelease) {
      for (let r = 0; r < n.length; r++) if (ke(n[r].semver), n[r].semver !== Uh.ANY && n[r].semver.prerelease.length > 0) {
        let i = n[r].semver;
        if (i.major === e.major && i.minor === e.minor && i.patch === e.patch) return true;
      }
      return false;
    }
    return true;
  };
});
var Ab = j((MM, Lb) => {
  "use strict";
  var u0 = $h(), l0 = (n, e, t) => {
    try {
      e = new u0(e, t);
    } catch {
      return false;
    }
    return e.test(n);
  };
  Lb.exports = l0;
});
var zb = j((dt) => {
  "use strict";
  var Ub = dt && dt.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), d0 = dt && dt.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), Vs = dt && dt.__importStar || /* @__PURE__ */ (function() {
    var n = function(e) {
      return n = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && Ub(t, e, r[i]);
      return d0(t, e), t;
    };
  })(), Wb = dt && dt.__exportStar || function(n, e) {
    for (var t in n) t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && Ub(e, n, t);
  };
  Object.defineProperty(dt, "__esModule", { value: true });
  dt.SettingMonitor = dt.LanguageClient = dt.TransportKind = void 0;
  var pr = Vs(require("child_process")), Wh = Vs(require("fs")), zh = Vs(require("path")), kb = Vs(require("readline")), Ur = require("vscode"), Gi = Vs(Qt()), $b = ph(), f0 = Uv(), Ge = qh(), h0 = ab(), p0 = Ab();
  Wb(qh(), dt);
  Wb(mh(), dt);
  var Hb = "^1.91.0", Ve;
  (function(n) {
    n[n.stdio = 0] = "stdio", n[n.ipc = 1] = "ipc", n[n.pipe = 2] = "pipe", n[n.socket = 3] = "socket";
  })(Ve || (dt.TransportKind = Ve = {}));
  var Hr;
  (function(n) {
    function e(t) {
      let r = t;
      return r && r.kind === Ve.socket && Gi.number(r.port);
    }
    n.isSocket = e;
  })(Hr || (Hr = {}));
  var Kh;
  (function(n) {
    function e(t) {
      return Gi.string(t.command);
    }
    n.is = e;
  })(Kh || (Kh = {}));
  var Bh;
  (function(n) {
    function e(t) {
      return Gi.string(t.module);
    }
    n.is = e;
  })(Bh || (Bh = {}));
  var Gh;
  (function(n) {
    function e(t) {
      let r = t;
      return r && r.writer !== void 0 && r.reader !== void 0;
    }
    n.is = e;
  })(Gh || (Gh = {}));
  var Vh;
  (function(n) {
    function e(t) {
      let r = t;
      return r && r.process !== void 0 && typeof r.detached == "boolean";
    }
    n.is = e;
  })(Vh || (Vh = {}));
  var Xh = class extends $b.BaseLanguageClient {
    _serverOptions;
    _stdioOptions;
    _forceDebug;
    _serverProcess;
    _isDetached;
    _isInDebugMode;
    constructor(e, t, r, i, s) {
      let o, a, c, l, d;
      Gi.string(t) ? (o = e, a = t, c = r, l = i, d = !!s) : (o = e.toLowerCase(), a = e, c = t, l = r, d = i), d === void 0 && (d = false), super(o, a, l), this._serverOptions = c, this._stdioOptions = l.stdioOptions ?? { stdout: (p, h) => {
        kb.createInterface({ input: p, crlfDelay: 1 / 0, terminal: false, historySize: 0 }).on("line", (m) => h.info(m));
      }, stderr: (p, h) => {
        kb.createInterface({ input: p, crlfDelay: 1 / 0, terminal: false, historySize: 0 }).on("line", (m) => h.error(m));
      } }, this._forceDebug = d, this._isInDebugMode = d;
      try {
        this.checkVersion();
      } catch (p) {
        throw Gi.string(p.message) && this.outputChannel.appendLine(p.message), p;
      }
    }
    checkVersion() {
      let e = h0(Ur.version);
      if (!e) throw new Error(`No valid VS Code version detected. Version string is: ${Ur.version}`);
      if (e.prerelease && e.prerelease.length > 0 && (e.prerelease = []), !p0(e, Hb)) throw new Error(`The language client requires VS Code version ${Hb} but received version ${Ur.version}`);
    }
    get isInDebugMode() {
      return this._isInDebugMode;
    }
    get serverProcess() {
      return this._serverProcess;
    }
    async restart() {
      await this.stop(), this.isInDebugMode ? (await new Promise((e) => setTimeout(e, 1e3)), await this.start()) : await this.start();
    }
    shutdown(e, t = 2e3) {
      return super.shutdown(e, t).finally(() => {
        if (this._serverProcess) {
          let r = this._serverProcess;
          this._serverProcess = void 0, (this._isDetached === void 0 || !this._isDetached) && this.checkProcessDied(r), this._isDetached = void 0;
        }
      });
    }
    checkProcessDied(e) {
      !e || e.pid === void 0 || setTimeout(() => {
        try {
          e.pid !== void 0 && (process.kill(e.pid, 0), (0, f0.terminate)(e));
        } catch {
        }
      }, 2e3);
    }
    handleConnectionClosed() {
      return this._serverProcess = void 0, super.handleConnectionClosed();
    }
    fillInitializeParams(e) {
      super.fillInitializeParams(e), e.processId === null && (e.processId = process.pid);
    }
    createMessageTransports(e) {
      function t(h, m) {
        if (!h && !m) return;
        let g = /* @__PURE__ */ Object.create(null);
        return Object.keys(process.env).forEach((y) => g[y] = process.env[y]), m && (g.ELECTRON_RUN_AS_NODE = "1", g.ELECTRON_NO_ASAR = "1"), h && Object.keys(h).forEach((y) => g[y] = h[y]), g;
      }
      let r = ["--debug=", "--debug-brk=", "--inspect=", "--inspect-brk="], i = ["--debug", "--debug-brk", "--inspect", "--inspect-brk"];
      function s() {
        let h = process.execArgv;
        return h ? h.some((m) => r.some((g) => m.startsWith(g)) || i.some((g) => m === g)) : false;
      }
      function o(h) {
        if (h.stdin === null || h.stdout === null || h.stderr === null) throw new Error("Process created without stdio streams");
      }
      let a = this._stdioOptions.stdout, c = this._stdioOptions.stderr, l = this._serverOptions;
      if (Gi.func(l)) return l().then((h) => {
        if ($b.MessageTransports.is(h)) return this._isDetached = !!h.detached, h;
        if (Gh.is(h)) return this._isDetached = !!h.detached, { reader: new Ge.StreamMessageReader(h.reader), writer: new Ge.StreamMessageWriter(h.writer) };
        {
          let m;
          return Vh.is(h) ? (m = h.process, this._isDetached = h.detached) : (m = h, this._isDetached = false), c(m.stderr, this.outputChannel), { reader: new Ge.StreamMessageReader(m.stdout), writer: new Ge.StreamMessageWriter(m.stdin) };
        }
      });
      let d, p = l;
      return p.run || p.debug ? this._forceDebug || s() ? (d = p.debug, this._isInDebugMode = true) : (d = p.run, this._isInDebugMode = false) : d = l, this._getServerWorkingDir(d.options).then((h) => {
        if (Bh.is(d) && d.module) {
          let m = d, g = m.transport || Ve.stdio;
          if (m.runtime) {
            let y = [], T = m.options ?? /* @__PURE__ */ Object.create(null);
            T.execArgv && T.execArgv.forEach((A) => y.push(A)), y.push(m.module), m.args && m.args.forEach((A) => y.push(A));
            let R = /* @__PURE__ */ Object.create(null);
            R.cwd = h, R.env = t(T.env, false);
            let v = this._getRuntimePath(m.runtime, h), D;
            if (g === Ve.ipc ? (R.stdio = [null, null, null, "ipc"], y.push("--node-ipc")) : g === Ve.stdio ? y.push("--stdio") : g === Ve.pipe ? (D = (0, Ge.generateRandomPipeName)(), y.push(`--pipe=${D}`)) : Hr.isSocket(g) && y.push(`--socket=${g.port}`), y.push(`--clientProcessId=${process.pid.toString()}`), g === Ve.ipc || g === Ve.stdio) {
              let A = pr.spawn(v, y, R);
              return !A || !A.pid ? Bi(A, `Launching server using runtime ${v} failed.`) : (this._serverProcess = A, c(A.stderr, this.outputChannel), g === Ve.ipc ? (a(A.stdout, this.outputChannel), Promise.resolve({ reader: new Ge.IPCMessageReader(A), writer: new Ge.IPCMessageWriter(A) })) : Promise.resolve({ reader: new Ge.StreamMessageReader(A.stdout), writer: new Ge.StreamMessageWriter(A.stdin) }));
            } else {
              if (g === Ve.pipe) return (0, Ge.createClientPipeTransport)(D).then((A) => {
                let x = pr.spawn(v, y, R);
                return !x || !x.pid ? Bi(x, `Launching server using runtime ${v} failed.`) : (this._serverProcess = x, c(x.stderr, this.outputChannel), a(x.stdout, this.outputChannel), A.onConnected().then((w) => ({ reader: w[0], writer: w[1] })));
              });
              if (Hr.isSocket(g)) return (0, Ge.createClientSocketTransport)(g.port).then((A) => {
                let x = pr.spawn(v, y, R);
                return !x || !x.pid ? Bi(x, `Launching server using runtime ${v} failed.`) : (this._serverProcess = x, c(x.stderr, this.outputChannel), a(x.stdout, this.outputChannel), A.onConnected().then((w) => ({ reader: w[0], writer: w[1] })));
              });
            }
          } else {
            let y;
            return new Promise((T, R) => {
              let v = (m.args && m.args.slice()) ?? [];
              g === Ve.ipc ? v.push("--node-ipc") : g === Ve.stdio ? v.push("--stdio") : g === Ve.pipe ? (y = (0, Ge.generateRandomPipeName)(), v.push(`--pipe=${y}`)) : Hr.isSocket(g) && v.push(`--socket=${g.port}`), v.push(`--clientProcessId=${process.pid.toString()}`);
              let D = m.options ? { ...m.options } : /* @__PURE__ */ Object.create(null);
              if (D.env = t(D.env, true), D.execArgv = D.execArgv || [], D.cwd = h, D.silent = true, g === Ve.ipc || g === Ve.stdio) {
                let A = pr.fork(m.module, v || [], D);
                o(A), this._serverProcess = A, c(A.stderr, this.outputChannel), g === Ve.ipc ? (a(A.stdout, this.outputChannel), T({ reader: new Ge.IPCMessageReader(this._serverProcess), writer: new Ge.IPCMessageWriter(this._serverProcess) })) : T({ reader: new Ge.StreamMessageReader(A.stdout), writer: new Ge.StreamMessageWriter(A.stdin) });
              } else g === Ve.pipe ? (0, Ge.createClientPipeTransport)(y).then((A) => {
                let x = pr.fork(m.module, v || [], D);
                o(x), this._serverProcess = x, c(x.stderr, this.outputChannel), a(x.stdout, this.outputChannel), A.onConnected().then((w) => {
                  T({ reader: w[0], writer: w[1] });
                }, R);
              }, R) : Hr.isSocket(g) && (0, Ge.createClientSocketTransport)(g.port).then((A) => {
                let x = pr.fork(m.module, v || [], D);
                o(x), this._serverProcess = x, c(x.stderr, this.outputChannel), a(x.stdout, this.outputChannel), A.onConnected().then((w) => {
                  T({ reader: w[0], writer: w[1] });
                }, R);
              }, R);
            });
          }
        } else if (Kh.is(d) && d.command) {
          let m = d, g = d.args !== void 0 ? d.args.slice(0) : [], y, T = d.transport;
          if (T === Ve.stdio) g.push("--stdio");
          else if (T === Ve.pipe) y = (0, Ge.generateRandomPipeName)(), g.push(`--pipe=${y}`);
          else if (Hr.isSocket(T)) g.push(`--socket=${T.port}`);
          else if (T === Ve.ipc) throw new Error("Transport kind ipc is not support for command executable");
          let R = Object.assign({}, m.options);
          if (R.cwd = R.cwd || h, T === void 0 || T === Ve.stdio) {
            let v = pr.spawn(m.command, g, R);
            return !v || !v.pid ? Bi(v, `Launching server using command ${m.command} failed.`) : (c(v.stderr, this.outputChannel), this._serverProcess = v, this._isDetached = !!R.detached, Promise.resolve({ reader: new Ge.StreamMessageReader(v.stdout), writer: new Ge.StreamMessageWriter(v.stdin) }));
          } else {
            if (T === Ve.pipe) return (0, Ge.createClientPipeTransport)(y).then((v) => {
              let D = pr.spawn(m.command, g, R);
              return !D || !D.pid ? Bi(D, `Launching server using command ${m.command} failed.`) : (this._serverProcess = D, this._isDetached = !!R.detached, c(D.stderr, this.outputChannel), a(D.stdout, this.outputChannel), v.onConnected().then((A) => ({ reader: A[0], writer: A[1] })));
            });
            if (Hr.isSocket(T)) return (0, Ge.createClientSocketTransport)(T.port).then((v) => {
              let D = pr.spawn(m.command, g, R);
              return !D || !D.pid ? Bi(D, `Launching server using command ${m.command} failed.`) : (this._serverProcess = D, this._isDetached = !!R.detached, c(D.stderr, this.outputChannel), a(D.stdout, this.outputChannel), v.onConnected().then((A) => ({ reader: A[0], writer: A[1] })));
            });
          }
        }
        return Promise.reject(new Error("Unsupported server configuration " + JSON.stringify(l, null, 4)));
      }).finally(() => {
        this._serverProcess !== void 0 && this._serverProcess.on("exit", (h, m) => {
          h === 0 ? this.info("Server process exited successfully", void 0, false) : h !== null && this.error(`Server process exited with code ${h}.`, void 0, false), m !== null && this.error(`Server process exited with signal ${m}.`, void 0, false);
        });
      });
    }
    _getRuntimePath(e, t) {
      if (zh.isAbsolute(e)) return e;
      let r = this._mainGetRootPath();
      if (r !== void 0) {
        let i = zh.join(r, e);
        if (Wh.existsSync(i)) return i;
      }
      if (t !== void 0) {
        let i = zh.join(t, e);
        if (Wh.existsSync(i)) return i;
      }
      return e;
    }
    _mainGetRootPath() {
      let e = Ur.workspace.workspaceFolders;
      if (!e || e.length === 0) return;
      let t = e[0];
      if (t.uri.scheme === "file") return t.uri.fsPath;
    }
    _getServerWorkingDir(e) {
      let t = e && e.cwd;
      return t || (t = this.clientOptions.workspaceFolder ? this.clientOptions.workspaceFolder.uri.fsPath : this._mainGetRootPath()), t ? new Promise((r) => {
        Wh.lstat(t, (i, s) => {
          r(!i && s.isDirectory() ? t : void 0);
        });
      }) : Promise.resolve(void 0);
    }
  };
  dt.LanguageClient = Xh;
  var Jh = class {
    _client;
    _setting;
    _listeners;
    constructor(e, t) {
      this._client = e, this._setting = t, this._listeners = [];
    }
    start() {
      return Ur.workspace.onDidChangeConfiguration(this.onDidChangeConfiguration, this, this._listeners), this.onDidChangeConfiguration(), new Ur.Disposable(() => {
        this._client.needsStop() && this._client.stop();
      });
    }
    onDidChangeConfiguration() {
      let e = this._setting.indexOf("."), t = e >= 0 ? this._setting.substr(0, e) : this._setting, r = e >= 0 ? this._setting.substr(e + 1) : void 0, i = r ? Ur.workspace.getConfiguration(t).get(r, false) : Ur.workspace.getConfiguration(t);
      i && this._client.needsStart() ? this._client.start().catch((s) => this._client.error("Start failed after configuration change", s, "force")) : !i && this._client.needsStop() && this._client.stop().catch((s) => this._client.error("Stop failed after configuration change", s, "force"));
    }
  };
  dt.SettingMonitor = Jh;
  function Bi(n, e) {
    return n === null ? Promise.reject(e) : new Promise((t, r) => {
      n.on("error", (i) => {
        r(`${e} ${i}`);
      }), setImmediate(() => r(e));
    });
  }
});
var Bb = j((Kb) => {
  "use strict";
  (() => {
    var n = { 747: (s, o, a) => {
      "use strict";
      var c, l = Object.defineProperty, d = Object.getOwnPropertyDescriptor, p = Object.getOwnPropertyNames, h = Object.prototype.hasOwnProperty, m = {};
      ((w, S) => {
        for (var q in S) l(w, q, { get: S[q], enumerable: true });
      })(m, { config: () => R, t: () => v }), s.exports = (c = m, ((w, S, q, H) => {
        if (S && typeof S == "object" || typeof S == "function") for (let O of p(S)) h.call(w, O) || O === void 0 || l(w, O, { get: () => S[O], enumerable: !(H = d(S, O)) || H.enumerable });
        return w;
      })(l({}, "__esModule", { value: true }), c));
      var g, y = a(896), T = a(943);
      function R(w) {
        if ("contents" in w) g = typeof w.contents == "string" ? JSON.parse(w.contents) : w.contents;
        else if ("fsPath" in w) {
          let q = (S = w.fsPath, (0, y.readFileSync)(S, "utf8")), H = JSON.parse(q);
          g = x(H) ? H.contents.bundle : H;
        } else {
          var S;
          if (w.uri) {
            let q = w.uri;
            return typeof w.uri == "string" && (q = new URL(w.uri)), new Promise(((H, O) => {
              (async function(F) {
                if (F.protocol === "file:") return await (0, T.readFile)(F, "utf8");
                if (F.protocol === "http:" || F.protocol === "https:") {
                  let $ = await fetch(F.toString(), { headers: { "Accept-Encoding": "gzip, deflate", Accept: "application/json" }, redirect: "follow" });
                  if (!$.ok) {
                    let K = `Unexpected ${$.status} response while trying to read ${F}`;
                    try {
                      K += `: ${await $.text()}`;
                    } catch {
                    }
                    throw new Error(K);
                  }
                  return await $.text();
                }
                throw new Error("Unsupported protocol");
              })(q).then(((F) => {
                try {
                  let $ = JSON.parse(F);
                  g = x($) ? $.contents.bundle : $, H();
                } catch ($) {
                  O($);
                }
              })).catch(((F) => {
                O(F);
              }));
            }));
          }
        }
      }
      function v(...w) {
        let S = w[0], q, H, O;
        if (typeof S == "string") q = S, H = S, w.splice(0, 1), O = w && typeof w[0] == "object" ? w[0] : w;
        else {
          if (S instanceof Array) {
            let $ = w.slice(1);
            if (S.length !== $.length + 1) throw new Error("expected a string as the first argument to l10n.t");
            let K = S[0];
            for (let ee = 1; ee < S.length; ee++) K += `{${ee - 1}}` + S[ee];
            return v(K, ...$);
          }
          H = S.message, q = H, S.comment && S.comment.length > 0 && (q += `/${Array.isArray(S.comment) ? S.comment.join("") : S.comment}`), O = S.args ?? {};
        }
        let F = g?.[q];
        return F ? typeof F == "string" ? A(F, O) : F.comment ? A(F.message, O) : A(H, O) : A(H, O);
      }
      var D = /{([^}]+)}/g;
      function A(w, S) {
        return Object.keys(S).length === 0 ? w : w.replace(D, ((q, H) => S[H] ?? q));
      }
      function x(w) {
        return !(typeof w?.contents?.bundle != "object" || typeof w?.version != "string");
      }
    }, 544: function(s, o, a) {
      "use strict";
      var c = this && this.__createBinding || (Object.create ? function(g, y, T, R) {
        R === void 0 && (R = T);
        var v = Object.getOwnPropertyDescriptor(y, T);
        v && !("get" in v ? !y.__esModule : v.writable || v.configurable) || (v = { enumerable: true, get: function() {
          return y[T];
        } }), Object.defineProperty(g, R, v);
      } : function(g, y, T, R) {
        R === void 0 && (R = T), g[R] = y[T];
      }), l = this && this.__setModuleDefault || (Object.create ? function(g, y) {
        Object.defineProperty(g, "default", { enumerable: true, value: y });
      } : function(g, y) {
        g.default = y;
      }), d = this && this.__importStar || function(g) {
        if (g && g.__esModule) return g;
        var y = {};
        if (g != null) for (var T in g) T !== "default" && Object.prototype.hasOwnProperty.call(g, T) && c(y, g, T);
        return l(y, g), y;
      };
      Object.defineProperty(o, "__esModule", { value: true }), o.req = o.json = o.toBuffer = void 0;
      let p = d(a(611)), h = d(a(692));
      async function m(g) {
        let y = 0, T = [];
        for await (let R of g) y += R.length, T.push(R);
        return Buffer.concat(T, y);
      }
      o.toBuffer = m, o.json = async function(g) {
        let y = (await m(g)).toString("utf8");
        try {
          return JSON.parse(y);
        } catch (T) {
          let R = T;
          throw R.message += ` (input: ${y})`, R;
        }
      }, o.req = function(g, y = {}) {
        let T = ((typeof g == "string" ? g : g.href).startsWith("https:") ? h : p).request(g, y), R = new Promise(((v, D) => {
          T.once("response", v).once("error", D).end();
        }));
        return T.then = R.then.bind(R), T;
      };
    }, 917: function(s, o, a) {
      "use strict";
      var c = this && this.__createBinding || (Object.create ? function(R, v, D, A) {
        A === void 0 && (A = D);
        var x = Object.getOwnPropertyDescriptor(v, D);
        x && !("get" in x ? !v.__esModule : x.writable || x.configurable) || (x = { enumerable: true, get: function() {
          return v[D];
        } }), Object.defineProperty(R, A, x);
      } : function(R, v, D, A) {
        A === void 0 && (A = D), R[A] = v[D];
      }), l = this && this.__setModuleDefault || (Object.create ? function(R, v) {
        Object.defineProperty(R, "default", { enumerable: true, value: v });
      } : function(R, v) {
        R.default = v;
      }), d = this && this.__importStar || function(R) {
        if (R && R.__esModule) return R;
        var v = {};
        if (R != null) for (var D in R) D !== "default" && Object.prototype.hasOwnProperty.call(R, D) && c(v, R, D);
        return l(v, R), v;
      }, p = this && this.__exportStar || function(R, v) {
        for (var D in R) D === "default" || Object.prototype.hasOwnProperty.call(v, D) || c(v, R, D);
      };
      Object.defineProperty(o, "__esModule", { value: true }), o.Agent = void 0;
      let h = d(a(278)), m = d(a(611)), g = a(692);
      p(a(544), o);
      let y = /* @__PURE__ */ Symbol("AgentBaseInternalState");
      class T extends m.Agent {
        constructor(v) {
          super(v), this[y] = {};
        }
        isSecureEndpoint(v) {
          if (v) {
            if (typeof v.secureEndpoint == "boolean") return v.secureEndpoint;
            if (typeof v.protocol == "string") return v.protocol === "https:";
          }
          let { stack: D } = new Error();
          return typeof D == "string" && D.split(`
`).some(((A) => A.indexOf("(https.js:") !== -1 || A.indexOf("node:https:") !== -1));
        }
        incrementSockets(v) {
          if (this.maxSockets === 1 / 0 && this.maxTotalSockets === 1 / 0) return null;
          this.sockets[v] || (this.sockets[v] = []);
          let D = new h.Socket({ writable: false });
          return this.sockets[v].push(D), this.totalSocketCount++, D;
        }
        decrementSockets(v, D) {
          if (!this.sockets[v] || D === null) return;
          let A = this.sockets[v], x = A.indexOf(D);
          x !== -1 && (A.splice(x, 1), this.totalSocketCount--, A.length === 0 && delete this.sockets[v]);
        }
        getName(v) {
          return (typeof v.secureEndpoint == "boolean" ? v.secureEndpoint : this.isSecureEndpoint(v)) ? g.Agent.prototype.getName.call(this, v) : super.getName(v);
        }
        createSocket(v, D, A) {
          let x = { ...D, secureEndpoint: this.isSecureEndpoint(D) }, w = this.getName(x), S = this.incrementSockets(w);
          Promise.resolve().then((() => this.connect(v, x))).then(((q) => {
            if (this.decrementSockets(w, S), q instanceof m.Agent) return q.addRequest(v, x);
            this[y].currentSocket = q, super.createSocket(v, D, A);
          }), ((q) => {
            this.decrementSockets(w, S), A(q);
          }));
        }
        createConnection() {
          let v = this[y].currentSocket;
          if (this[y].currentSocket = void 0, !v) throw new Error("No socket was returned in the `connect()` function");
          return v;
        }
        get defaultPort() {
          return this[y].defaultPort ?? (this.protocol === "https:" ? 443 : 80);
        }
        set defaultPort(v) {
          this[y] && (this[y].defaultPort = v);
        }
        get protocol() {
          return this[y].protocol ?? (this.isSecureEndpoint() ? "https:" : "http:");
        }
        set protocol(v) {
          this[y] && (this[y].protocol = v);
        }
      }
      o.Agent = T;
    }, 645: function(s, o, a) {
      "use strict";
      var c = this && this.__createBinding || (Object.create ? function(x, w, S, q) {
        q === void 0 && (q = S);
        var H = Object.getOwnPropertyDescriptor(w, S);
        H && !("get" in H ? !w.__esModule : H.writable || H.configurable) || (H = { enumerable: true, get: function() {
          return w[S];
        } }), Object.defineProperty(x, q, H);
      } : function(x, w, S, q) {
        q === void 0 && (q = S), x[q] = w[S];
      }), l = this && this.__setModuleDefault || (Object.create ? function(x, w) {
        Object.defineProperty(x, "default", { enumerable: true, value: w });
      } : function(x, w) {
        x.default = w;
      }), d = this && this.__importStar || function(x) {
        if (x && x.__esModule) return x;
        var w = {};
        if (x != null) for (var S in x) S !== "default" && Object.prototype.hasOwnProperty.call(x, S) && c(w, x, S);
        return l(w, x), w;
      }, p = this && this.__importDefault || function(x) {
        return x && x.__esModule ? x : { default: x };
      };
      Object.defineProperty(o, "__esModule", { value: true }), o.HttpProxyAgent = void 0;
      let h = d(a(278)), m = d(a(756)), g = p(a(150)), y = a(434), T = a(917), R = a(16), v = (0, g.default)("http-proxy-agent");
      class D extends T.Agent {
        constructor(w, S) {
          super(S), this.proxy = typeof w == "string" ? new R.URL(w) : w, this.proxyHeaders = S?.headers ?? {}, v("Creating new HttpProxyAgent instance: %o", this.proxy.href);
          let q = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""), H = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
          this.connectOpts = { ...S ? A(S, "headers") : null, host: q, port: H };
        }
        addRequest(w, S) {
          w._header = null, this.setRequestProps(w, S), super.addRequest(w, S);
        }
        setRequestProps(w, S) {
          let { proxy: q } = this, H = `${S.secureEndpoint ? "https:" : "http:"}//${w.getHeader("host") || "localhost"}`, O = new R.URL(w.path, H);
          S.port !== 80 && (O.port = String(S.port)), w.path = String(O);
          let F = typeof this.proxyHeaders == "function" ? this.proxyHeaders() : { ...this.proxyHeaders };
          if (q.username || q.password) {
            let $ = `${decodeURIComponent(q.username)}:${decodeURIComponent(q.password)}`;
            F["Proxy-Authorization"] = `Basic ${Buffer.from($).toString("base64")}`;
          }
          F["Proxy-Connection"] || (F["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close");
          for (let $ of Object.keys(F)) {
            let K = F[$];
            K && w.setHeader($, K);
          }
        }
        async connect(w, S) {
          let q, H, O;
          return w._header = null, w.path.includes("://") || this.setRequestProps(w, S), v("Regenerating stored HTTP header string for request"), w._implicitHeader(), w.outputData && w.outputData.length > 0 && (v("Patching connection write() output buffer with updated header"), q = w.outputData[0].data, H = q.indexOf(`\r
\r
`) + 4, w.outputData[0].data = w._header + q.substring(H), v("Output buffer: %o", w.outputData[0].data)), this.proxy.protocol === "https:" ? (v("Creating `tls.Socket`: %o", this.connectOpts), O = m.connect(this.connectOpts)) : (v("Creating `net.Socket`: %o", this.connectOpts), O = h.connect(this.connectOpts)), await (0, y.once)(O, "connect"), O;
        }
      }
      function A(x, ...w) {
        let S = {}, q;
        for (q in x) w.includes(q) || (S[q] = x[q]);
        return S;
      }
      D.protocols = ["http", "https"], o.HttpProxyAgent = D;
    }, 288: function(s, o, a) {
      "use strict";
      var c = this && this.__createBinding || (Object.create ? function(S, q, H, O) {
        O === void 0 && (O = H);
        var F = Object.getOwnPropertyDescriptor(q, H);
        F && !("get" in F ? !q.__esModule : F.writable || F.configurable) || (F = { enumerable: true, get: function() {
          return q[H];
        } }), Object.defineProperty(S, O, F);
      } : function(S, q, H, O) {
        O === void 0 && (O = H), S[O] = q[H];
      }), l = this && this.__setModuleDefault || (Object.create ? function(S, q) {
        Object.defineProperty(S, "default", { enumerable: true, value: q });
      } : function(S, q) {
        S.default = q;
      }), d = this && this.__importStar || function(S) {
        if (S && S.__esModule) return S;
        var q = {};
        if (S != null) for (var H in S) H !== "default" && Object.prototype.hasOwnProperty.call(S, H) && c(q, S, H);
        return l(q, S), q;
      }, p = this && this.__importDefault || function(S) {
        return S && S.__esModule ? S : { default: S };
      };
      Object.defineProperty(o, "__esModule", { value: true }), o.HttpsProxyAgent = void 0;
      let h = d(a(278)), m = d(a(756)), g = p(a(613)), y = p(a(150)), T = a(917), R = a(16), v = a(868), D = (0, y.default)("https-proxy-agent");
      class A extends T.Agent {
        constructor(q, H) {
          super(H), this.options = { path: void 0 }, this.proxy = typeof q == "string" ? new R.URL(q) : q, this.proxyHeaders = H?.headers ?? {}, D("Creating new HttpsProxyAgent instance: %o", this.proxy.href);
          let O = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""), F = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
          this.connectOpts = { ALPNProtocols: ["http/1.1"], ...H ? w(H, "headers") : null, host: O, port: F };
        }
        async connect(q, H) {
          let { proxy: O } = this;
          if (!H.host) throw new TypeError('No "host" provided');
          let F;
          if (O.protocol === "https:") {
            D("Creating `tls.Socket`: %o", this.connectOpts);
            let ie = this.connectOpts.servername || this.connectOpts.host;
            F = m.connect({ ...this.connectOpts, servername: ie });
          } else D("Creating `net.Socket`: %o", this.connectOpts), F = h.connect(this.connectOpts);
          let $ = typeof this.proxyHeaders == "function" ? this.proxyHeaders() : { ...this.proxyHeaders }, K = h.isIPv6(H.host) ? `[${H.host}]` : H.host, ee = `CONNECT ${K}:${H.port} HTTP/1.1\r
`;
          if (O.username || O.password) {
            let ie = `${decodeURIComponent(O.username)}:${decodeURIComponent(O.password)}`;
            $["Proxy-Authorization"] = `Basic ${Buffer.from(ie).toString("base64")}`;
          }
          $.Host = `${K}:${H.port}`, $["Proxy-Connection"] || ($["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close");
          for (let ie of Object.keys($)) ee += `${ie}: ${$[ie]}\r
`;
          let ce = (0, v.parseProxyResponse)(F);
          F.write(`${ee}\r
`);
          let { connect: ue, buffered: te } = await ce;
          if (q.emit("proxyConnect", ue), this.emit("proxyConnect", ue, q), ue.statusCode === 200) {
            if (q.once("socket", x), H.secureEndpoint) {
              D("Upgrading socket connection to TLS");
              let ie = H.servername || H.host;
              return m.connect({ ...w(H, "host", "path", "port"), socket: F, servername: ie });
            }
            return F;
          }
          F.destroy();
          let pe = new h.Socket({ writable: false });
          return pe.readable = true, q.once("socket", ((ie) => {
            D("Replaying proxy buffer for failed request"), (0, g.default)(ie.listenerCount("data") > 0), ie.push(te), ie.push(null);
          })), pe;
        }
      }
      function x(S) {
        S.resume();
      }
      function w(S, ...q) {
        let H = {}, O;
        for (O in S) q.includes(O) || (H[O] = S[O]);
        return H;
      }
      A.protocols = ["http", "https"], o.HttpsProxyAgent = A;
    }, 868: function(s, o, a) {
      "use strict";
      var c = this && this.__importDefault || function(d) {
        return d && d.__esModule ? d : { default: d };
      };
      Object.defineProperty(o, "__esModule", { value: true }), o.parseProxyResponse = void 0;
      let l = (0, c(a(150)).default)("https-proxy-agent:parse-proxy-response");
      o.parseProxyResponse = function(d) {
        return new Promise(((p, h) => {
          let m = 0, g = [];
          function y() {
            let D = d.read();
            D ? (function(A) {
              g.push(A), m += A.length;
              let x = Buffer.concat(g, m), w = x.indexOf(`\r
\r
`);
              if (w === -1) return l("have not received end of HTTP headers yet..."), void y();
              let S = x.slice(0, w).toString("ascii").split(`\r
`), q = S.shift();
              if (!q) return d.destroy(), h(new Error("No header received from proxy CONNECT response"));
              let H = q.split(" "), O = +H[1], F = H.slice(2).join(" "), $ = {};
              for (let K of S) {
                if (!K) continue;
                let ee = K.indexOf(":");
                if (ee === -1) return d.destroy(), h(new Error(`Invalid header from proxy CONNECT response: "${K}"`));
                let ce = K.slice(0, ee).toLowerCase(), ue = K.slice(ee + 1).trimStart(), te = $[ce];
                typeof te == "string" ? $[ce] = [te, ue] : Array.isArray(te) ? te.push(ue) : $[ce] = ue;
              }
              l("got proxy server response: %o %o", q, $), T(), p({ connect: { statusCode: O, statusText: F, headers: $ }, buffered: x });
            })(D) : d.once("readable", y);
          }
          function T() {
            d.removeListener("end", R), d.removeListener("error", v), d.removeListener("readable", y);
          }
          function R() {
            T(), l("onend"), h(new Error("Proxy connection ended before receiving CONNECT response"));
          }
          function v(D) {
            T(), l("onerror %o", D), h(D);
          }
          d.on("error", v), d.on("end", R), y();
        }));
      };
    }, 580: function(s, o, a) {
      "use strict";
      var c, l = this && this.__extends || (c = function(w, S) {
        return c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(q, H) {
          q.__proto__ = H;
        } || function(q, H) {
          for (var O in H) Object.prototype.hasOwnProperty.call(H, O) && (q[O] = H[O]);
        }, c(w, S);
      }, function(w, S) {
        if (typeof S != "function" && S !== null) throw new TypeError("Class extends value " + String(S) + " is not a constructor or null");
        function q() {
          this.constructor = w;
        }
        c(w, S), w.prototype = S === null ? Object.create(S) : (q.prototype = S.prototype, new q());
      }), d = this && this.__assign || function() {
        return d = Object.assign || function(w) {
          for (var S, q = 1, H = arguments.length; q < H; q++) for (var O in S = arguments[q]) Object.prototype.hasOwnProperty.call(S, O) && (w[O] = S[O]);
          return w;
        }, d.apply(this, arguments);
      };
      Object.defineProperty(o, "__esModule", { value: true }), o.xhr = o.configure = void 0, o.getErrorStatusDescription = function(w) {
        if (!(w < 400)) switch (w) {
          case 400:
            return g.t("Bad request. The request cannot be fulfilled due to bad syntax.");
          case 401:
            return g.t("Unauthorized. The server is refusing to respond.");
          case 403:
            return g.t("Forbidden. The server is refusing to respond.");
          case 404:
            return g.t("Not Found. The requested location could not be found.");
          case 405:
            return g.t("Method not allowed. A request was made using a request method not supported by that location.");
          case 406:
            return g.t("Not Acceptable. The server can only generate a response that is not accepted by the client.");
          case 407:
            return g.t("Proxy Authentication Required. The client must first authenticate itself with the proxy.");
          case 408:
            return g.t("Request Timeout. The server timed out waiting for the request.");
          case 409:
            return g.t("Conflict. The request could not be completed because of a conflict in the request.");
          case 410:
            return g.t("Gone. The requested page is no longer available.");
          case 411:
            return g.t('Length Required. The "Content-Length" is not defined.');
          case 412:
            return g.t("Precondition Failed. The precondition given in the request evaluated to false by the server.");
          case 413:
            return g.t("Request Entity Too Large. The server will not accept the request, because the request entity is too large.");
          case 414:
            return g.t("Request-URI Too Long. The server will not accept the request, because the URL is too long.");
          case 415:
            return g.t("Unsupported Media Type. The server will not accept the request, because the media type is not supported.");
          case 500:
            return g.t("Internal Server Error.");
          case 501:
            return g.t("Not Implemented. The server either does not recognize the request method, or it lacks the ability to fulfill the request.");
          case 502:
            return g.t("Bad Gateway. The upstream server did not respond.");
          case 503:
            return g.t("Service Unavailable. The server is currently unavailable (overloaded or down).");
          default:
            return g.t("HTTP status code {0}", w);
        }
      };
      var p = a(611), h = a(692), m = a(16), g = a(747), y = a(106), T = a(645), R = a(288), v = void 0, D = true;
      function A(w) {
        var S;
        return new Promise((function(q, H) {
          var O = (0, m.parse)(w.url), F = { hostname: O.hostname, agent: !!w.agent && w.agent, port: O.port ? parseInt(O.port) : O.protocol === "https:" ? 443 : 80, path: O.path, method: w.type || "GET", headers: w.headers, rejectUnauthorized: typeof w.strictSSL != "boolean" || w.strictSSL };
          w.user && w.password && (F.auth = w.user + ":" + w.password);
          var $ = function(K) {
            if (K.statusCode >= 300 && K.statusCode < 400 && w.followRedirects && w.followRedirects > 0 && K.headers.location) {
              var ee = K.headers.location;
              ee.startsWith("/") && (ee = (0, m.format)({ protocol: O.protocol, hostname: O.hostname, port: O.port, pathname: ee })), q(A((function(ce) {
                for (var ue = [], te = 1; te < arguments.length; te++) ue[te - 1] = arguments[te];
                return ue.forEach((function(pe) {
                  return Object.keys(pe).forEach((function(ie) {
                    return ce[ie] = pe[ie];
                  }));
                })), ce;
              })({}, w, { url: ee, followRedirects: w.followRedirects - 1 })));
            } else q({ req: S, res: K });
          };
          (S = O.protocol === "https:" ? h.request(F, $) : p.request(F, $)).on("error", H), w.timeout && S.setTimeout(w.timeout), w.data && S.write(w.data), S.end(), w.token && (w.token.isCancellationRequested && S.destroy(new x()), w.token.onCancellationRequested((function() {
            S.destroy(new x());
          })));
        }));
      }
      o.configure = function(w, S) {
        v = w, D = S;
      }, o.xhr = function(w) {
        return typeof (w = d({}, w)).strictSSL != "boolean" && (w.strictSSL = D), w.agent || (w.agent = (function(S, q) {
          var H;
          q === void 0 && (q = {});
          var O = (0, m.parse)(S), F = q.proxyUrl || (function($) {
            return $.protocol === "http:" ? process.env.HTTP_PROXY || process.env.http_proxy || null : $.protocol === "https:" && (process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy) || null;
          })(O);
          return F && /^https?:/.test(F) ? O.protocol === "http:" ? new T.HttpProxyAgent(F) : new R.HttpsProxyAgent(F, { rejectUnauthorized: (H = q.strictSSL) === null || H === void 0 || H }) : null;
        })(w.url, { proxyUrl: v, strictSSL: D })), typeof w.followRedirects != "number" && (w.followRedirects = 5), A(w).then((function(S) {
          return new Promise((function(q, H) {
            var O, F, $ = S.res, K = $, ee = false, ce = $.headers && $.headers["content-encoding"];
            if (ce && (O = w.type, F = S.res.statusCode, !(O === "HEAD" || F >= 100 && F < 200 || F === 204 || F === 304))) {
              var ue = { flush: y.constants.Z_SYNC_FLUSH, finishFlush: y.constants.Z_SYNC_FLUSH };
              if (ce === "gzip") {
                var te = y.createGunzip(ue);
                $.pipe(te), K = te;
              } else if (ce === "deflate") {
                var pe = y.createInflate(ue);
                $.pipe(pe), K = pe;
              }
            }
            var ie = [];
            K.on("data", (function(ft) {
              return ie.push(ft);
            })), K.on("end", (function() {
              if (!ee) {
                if (ee = true, w.followRedirects > 0 && ($.statusCode >= 300 && $.statusCode <= 303 || $.statusCode === 307)) {
                  var ft = $.headers.location;
                  if (ft.startsWith("/")) {
                    var ht = (0, m.parse)(w.url);
                    ft = (0, m.format)({ protocol: ht.protocol, hostname: ht.hostname, port: ht.port, pathname: ft });
                  }
                  if (ft) {
                    var hn = { type: w.type, url: ft, user: w.user, password: w.password, headers: w.headers, timeout: w.timeout, followRedirects: w.followRedirects - 1, data: w.data, token: w.token };
                    return void (0, o.xhr)(hn).then(q, H);
                  }
                }
                var $n = Buffer.concat(ie), pn = { responseText: $n.toString(), body: $n, status: $.statusCode, headers: $.headers || {} };
                $.statusCode >= 200 && $.statusCode < 300 || $.statusCode === 1223 ? q(pn) : H(pn);
              }
            })), K.on("error", (function(ft) {
              var ht;
              ht = x.is(ft) ? ft : { responseText: g.t("Unable to access {0}. Error: {1}", w.url, ft.message), body: Buffer.concat(ie), status: 500, headers: {} }, ee = true, H(ht);
            })), w.token && (w.token.isCancellationRequested && K.destroy(new x()), w.token.onCancellationRequested((function() {
              K.destroy(new x());
            })));
          }));
        }), (function(S) {
          var q;
          return q = x.is(S) ? S : { responseText: w.agent ? g.t("Unable to connect to {0} through a proxy. Error: {1}", w.url, S.message) : g.t("Unable to connect to {0}. Error: {1}", w.url, S.message), body: Buffer.concat([]), status: 404, headers: {} }, Promise.reject(q);
        }));
      };
      var x = (function(w) {
        function S() {
          var q = w.call(this, "The user aborted a request") || this;
          return q.name = "AbortError", Object.setPrototypeOf(q, S.prototype), q;
        }
        return l(S, w), S.is = function(q) {
          return q instanceof S;
        }, S;
      })(Error);
    }, 150: (s, o) => {
      function a() {
      }
      Object.defineProperty(o, "__esModule", { value: true }), o.default = function(c) {
        return a;
      };
    }, 613: (s) => {
      "use strict";
      s.exports = require("assert");
    }, 434: (s) => {
      "use strict";
      s.exports = require("events");
    }, 896: (s) => {
      "use strict";
      s.exports = require("fs");
    }, 943: (s) => {
      "use strict";
      s.exports = require("fs/promises");
    }, 611: (s) => {
      "use strict";
      s.exports = require("http");
    }, 692: (s) => {
      "use strict";
      s.exports = require("https");
    }, 278: (s) => {
      "use strict";
      s.exports = require("net");
    }, 756: (s) => {
      "use strict";
      s.exports = require("tls");
    }, 16: (s) => {
      "use strict";
      s.exports = require("url");
    }, 106: (s) => {
      "use strict";
      s.exports = require("zlib");
    } }, e = {}, t = (function s(o) {
      var a = e[o];
      if (a !== void 0) return a.exports;
      var c = e[o] = { exports: {} };
      return n[o].call(c.exports, c, c.exports, s), c.exports;
    })(580), r = Kb;
    for (var i in t) r[i] = t[i];
    t.__esModule && Object.defineProperty(r, "__esModule", { value: true });
  })();
});
var S0 = {};
Xa(S0, { activate: () => _0, deactivate: () => v0 });
module.exports = Zi(S0);
var gr = require("vscode");
var z = require("vscode"), Be = Yi(mh());
function Ea(n, e = 0) {
  switch (typeof n) {
    case "object":
      return n === null ? $r(349, e) : Array.isArray(n) ? gO(n, e) : mO(n, e);
    case "string":
      return wv(n, e);
    case "boolean":
      return pO(n, e);
    case "number":
      return $r(n, e);
    case "undefined":
      return 937 * 31;
    default:
      return $r(n, 617);
  }
}
function $r(n, e) {
  return (e << 5) - e + n | 0;
}
function pO(n, e) {
  return $r(n ? 433 : 863, e);
}
function wv(n, e) {
  e = $r(149417, e);
  for (let t = 0, r = n.length; t < r; t++) e = $r(n.charCodeAt(t), e);
  return e;
}
function gO(n, e) {
  return e = $r(104579, e), n.reduce((t, r) => Ea(r, t), e);
}
function mO(n, e) {
  return e = $r(181387, e), Object.keys(n).sort().reduce((t, r) => (t = wv(r, t), Ea(n[r], t)), e);
}
var G = require("vscode");
function yO() {
  let n = [];
  for (let e of G.extensions.all) {
    let t = e.packageJSON?.contributes?.jsonValidation;
    if (Array.isArray(t)) for (let r of t) {
      let i = r.url;
      typeof i == "string" && (i[0] === "." && i[1] === "/" && (i = G.Uri.joinPath(e.extensionUri, i).toString(false)), n.push({ fullUri: i, extension: e, label: r.url }));
    }
  }
  return { findExtension(e) {
    for (let t of n) if (t.fullUri === e) return { label: t.label, detail: G.l10n.t("Configured by extension: {0}", t.extension.id), uri: G.Uri.parse(t.fullUri), buttons: [{ iconPath: new G.ThemeIcon("extensions"), tooltip: G.l10n.t("Open Extension") }], buttonCommands: [() => G.commands.executeCommand("workbench.extensions.action.showExtensionsWithIds", [[t.extension.id]])] };
  } };
}
function _O(n) {
  let e = G.Uri.parse(n), t = G.workspace.getWorkspaceFolder(e), r = G.workspace.getConfiguration("json", e).inspect("schemas"), i = [], s = r?.workspaceFolderValue;
  if (t && Array.isArray(s)) for (let a of s) {
    let c = a.url;
    if (typeof c == "string") {
      let l = c;
      c[0] === "." && c[1] === "/" && (l = G.Uri.joinPath(t.uri, c).toString(false)), i.push({ fullUri: l, workspaceFolder: t, label: c });
    }
  }
  let o = r?.globalValue;
  if (Array.isArray(o)) for (let a of o) {
    let c = a.url;
    if (typeof c == "string") {
      let l = c;
      t && c[0] === "." && c[1] === "/" && (l = G.Uri.joinPath(t.uri, c).toString(false)), i.push({ fullUri: l, workspaceFolder: void 0, label: c });
    }
  }
  return { findSetting(a) {
    for (let c of i) if (c.fullUri === a) return { label: c.label, detail: c.workspaceFolder ? G.l10n.t("Configured in workspace settings") : G.l10n.t("Configured in user settings"), uri: G.Uri.parse(c.fullUri), buttons: [{ iconPath: new G.ThemeIcon("gear"), tooltip: G.l10n.t("Open Settings") }], buttonCommands: [() => G.commands.executeCommand(c.workspaceFolder ? "workbench.action.openWorkspaceSettingsFile" : "workbench.action.openSettingsJson", ["json.schemas"])] };
  } };
}
function vO(n) {
  let e = yO(), t = _O(n.uri), r = [], i = [], s = [];
  for (let c of n.schemas) {
    let l = e.findExtension(c);
    if (l) {
      r.push(l);
      continue;
    }
    let d = t.findSetting(c);
    if (d) {
      i.push(d);
      continue;
    }
    s.push({ label: c, uri: G.Uri.parse(c) });
  }
  let o = [...r, ...i, ...s];
  o.length === 0 && o.push({ label: G.l10n.t("No schema configured for this file"), buttons: [{ iconPath: new G.ThemeIcon("gear"), tooltip: G.l10n.t("Open Settings") }], buttonCommands: [() => G.commands.executeCommand("workbench.action.openSettingsJson", ["json.schemas"])] }), o.push({ label: "", kind: G.QuickPickItemKind.Separator }), o.push({ label: G.l10n.t("Learn more about JSON schema configuration..."), uri: G.Uri.parse("https://code.visualstudio.com/docs/languages/json#_json-schemas-and-settings") });
  let a = G.window.createQuickPick();
  a.placeholder = o.length ? G.l10n.t("Select the schema to use for {0}", n.uri) : void 0, a.items = o, a.show(), a.onDidAccept(() => {
    let c = a.selectedItems[0].uri;
    c && (G.commands.executeCommand("vscode.open", c), a.dispose());
  }), a.onDidTriggerItemButton((c) => {
    let l = c.item.buttons?.indexOf(c.button);
    l !== void 0 && l >= 0 && c.item.buttonCommands && c.item.buttonCommands[l] && c.item.buttonCommands[l]();
  });
}
function Sv(n, e) {
  let t = G.languages.createLanguageStatusItem("json.projectStatus", n);
  t.name = G.l10n.t("JSON Validation Status"), t.severity = G.LanguageStatusSeverity.Information;
  let r = G.commands.registerCommand("_json.showAssociatedSchemaList", vO), i = G.window.onDidChangeActiveTextEditor(() => {
    s();
  });
  async function s() {
    let o = G.window.activeTextEditor?.document;
    if (o) try {
      t.text = "$(loading~spin)", t.detail = G.l10n.t("Loading JSON info"), t.command = void 0;
      let a = (await e(o.uri.toString())).schemas;
      t.detail = void 0, a.length === 0 ? (t.text = G.l10n.t("No schema validation"), t.detail = G.l10n.t("no JSON schema configured")) : a.length === 1 ? (t.text = G.l10n.t("Schema validated"), t.detail = G.l10n.t("JSON schema configured")) : (t.text = G.l10n.t("Schema validated"), t.detail = G.l10n.t("multiple JSON schemas configured")), t.command = { command: "_json.showAssociatedSchemaList", title: G.l10n.t("Show Schemas"), arguments: [{ schemas: a, uri: o.uri.toString() }] };
    } catch (a) {
      t.text = G.l10n.t("Unable to compute used schemas: {0}", a.message), t.detail = void 0, t.command = void 0;
    }
    else t.text = G.l10n.t("Unable to compute used schemas: No document"), t.detail = void 0, t.command = void 0;
  }
  return s(), G.Disposable.from(t, i, r);
}
function Dv(n) {
  let e, t = /* @__PURE__ */ new Map(), r = [];
  r.push(G.window.onDidChangeActiveTextEditor((s) => {
    e?.dispose(), e = void 0;
    let o = s?.document;
    if (o) {
      let a = t.get(o);
      a !== void 0 && (e = n(a));
    }
  })), r.push(G.workspace.onDidCloseTextDocument((s) => {
    t.delete(s);
  }));
  function i(s, o) {
    o === false ? (t.delete(s), e && s === G.window.activeTextEditor?.document && (e.dispose(), e = void 0)) : (t.set(s, o), s === G.window.activeTextEditor?.document && (!e || o !== t.get(s)) && (e?.dispose(), e = n(o)));
  }
  return { update: i, dispose() {
    e?.dispose(), r.forEach((s) => s.dispose()), r.length = 0, e = void 0, t.clear();
  } };
}
var bO = "workbench.action.openSettings", CO = G.l10n.t("Configure");
function Pv(n, e, t) {
  let r = G.languages.createLanguageStatusItem("json.documentSymbolsStatus", n);
  return r.name = G.l10n.t("JSON Outline Status"), r.severity = G.LanguageStatusSeverity.Warning, r.text = G.l10n.t("Outline"), r.detail = G.l10n.t("only {0} document symbols shown for performance reasons", t), r.command = { command: bO, arguments: [e], title: CO }, G.Disposable.from(r);
}
var Us = require("vscode");
function Tv() {
  let n = new Us.EventEmitter(), e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set();
  function r() {
    let s = e, o = t;
    e = /* @__PURE__ */ new Set(), e.add("json"), e.add("jsonc"), e.add("snippets"), t = /* @__PURE__ */ new Set(), t.add("jsonc"), t.add("snippets");
    for (let a of Us.extensions.allAcrossExtensionHosts) {
      let c = a.packageJSON?.contributes?.jsonLanguageParticipants;
      if (Array.isArray(c)) for (let l of c) {
        let d = l.languageId;
        typeof d == "string" && (e.add(d), l.comments === true && t.add(d));
      }
    }
    return !Rv(e, s) || !Rv(t, o);
  }
  r();
  let i = Us.extensions.onDidChange((s) => {
    r() && n.fire();
  });
  return { onDidChange: n.event, get documentSelector() {
    return Array.from(e);
  }, hasLanguage(s) {
    return e.has(s);
  }, useComments(s) {
    return t.has(s);
  }, dispose: () => i.dispose() };
}
function Rv(n, e) {
  if (n.size !== e.size) return false;
  for (let t of n) if (!e.has(t)) return false;
  return true;
}
var Nv;
((e) => e.type = new Be.RequestType("vscode/content"))(Nv ||= {});
var xa;
((e) => e.type = new Be.NotificationType("json/schemaContent"))(xa ||= {});
var Fv;
((e) => e.type = new Be.RequestType("json/validate"))(Fv ||= {});
var Lv;
((e) => e.type = new Be.RequestType("json/languageStatus"))(Lv ||= {});
var Av;
((e) => e.type = new Be.RequestType("json/validateContent"))(Av ||= {});
var kv;
((e) => e.type = new Be.RequestType("json/sort"))(kv ||= {});
var qa;
((e) => e.type = new Be.NotificationType("json/schemaAssociations"))(qa ||= {});
var it;
((d) => (d.enableFormatter = "json.format.enable", d.enableKeepLines = "json.format.keepLines", d.enableValidation = "json.validate.enable", d.enableSchemaDownload = "json.schemaDownload.enable", d.maxItemsComputed = "json.maxItemsComputed", d.editorFoldingMaximumRegions = "editor.foldingMaximumRegions", d.editorColorDecoratorsLimit = "editor.colorDecoratorsLimit", d.editorSection = "editor", d.foldingMaximumRegions = "foldingMaximumRegions", d.colorDecoratorsLimit = "colorDecoratorsLimit"))(it ||= {});
var vh = z.l10n.t("JSON Language Server"), Ma = 5e3, Ov = 5e3, Ev = 5e3, xv = 5e3, qv = 5e3;
async function $v(n, e, t) {
  let r = Tv();
  n.subscriptions.push(r);
  let i = await Mv(n, r, e, t), s;
  return r.onDidChange(() => {
    s && s.dispose(), s = t.timer.setTimeout(async () => {
      if (i) {
        t.logOutputChannel.info("Extensions have changed, restarting JSON server..."), t.logOutputChannel.info("");
        let o = i;
        i = void 0, await o.dispose(), i = await Mv(n, r, e, t);
      }
    }, 2e3);
  }), { dispose: async () => {
    s?.dispose(), await i?.dispose();
  } };
}
async function Mv(n, e, t, r) {
  let i = [], s, o = e.documentSelector, a = z.window.createStatusBarItem("status.json.resolveError", z.StatusBarAlignment.Right, 0);
  a.name = z.l10n.t("JSON: Schema Resolution Error"), a.text = "$(alert)", i.push(a);
  let c = /* @__PURE__ */ new Map(), l = true, d = false, p = Dv((O) => Pv(o, it.maxItemsComputed, O));
  i.push(p), i.push(z.commands.registerCommand("json.clearCache", async () => {
    if (d && r.schemaRequests.clearCache) {
      let O = await r.schemaRequests.clearCache();
      await g.sendNotification(xa.type, O);
    }
    z.window.showInformationMessage(z.l10n.t("JSON schema cache cleared."));
  })), i.push(z.commands.registerCommand("json.validate", async (O, F) => (await g.sendRequest(Av.type, { schemaUri: O.toString(), content: F })).map(g.protocol2CodeConverter.asDiagnostic))), i.push(z.commands.registerCommand("json.sort", async () => {
    if (d) {
      let O = z.window.activeTextEditor;
      if (O) {
        let F = O.options, $ = await H(O.document, F.tabSize, F.insertSpaces);
        await O.edit((ee) => {
          for (let ce of $) ee.replace(g.protocol2CodeConverter.asRange(ce.range), ce.newText);
        }) || z.window.showErrorMessage(z.l10n.t("Failed to sort the JSONC document, please consider opening an issue."));
      }
    }
  }));
  function h(O, F) {
    let $ = F.findIndex(_h);
    if ($ !== -1) {
      let K = F[$];
      c.set(O.toString(), K.message), l || (F = F.filter((ee) => !_h(ee))), z.window.activeTextEditor && z.window.activeTextEditor.document.uri.toString() === O.toString() && a.show();
    }
    return F;
  }
  let m = { documentSelector: o, initializationOptions: { handledSchemaProtocols: ["file"], provideFormatter: false, customCapabilities: { rangeFormatting: { editLimit: 1e4 } } }, synchronize: { configurationSection: ["json", "http"], fileEvents: z.workspace.createFileSystemWatcher("**/*.json") }, middleware: { workspace: { didChangeConfiguration: () => g.sendNotification(Be.DidChangeConfigurationNotification.type, { settings: jv() }) }, provideDiagnostics: async (O, F, $, K) => {
    let ee = await K(O, F, $);
    if (ee && ee.kind === Be.DocumentDiagnosticReportKind.Full) {
      let ce = O instanceof z.Uri ? O : O.uri;
      ee.items = h(ce, ee.items);
    }
    return ee;
  }, handleDiagnostics: (O, F, $) => {
    F = h(O, F), $(O, F);
  }, provideCompletionItem(O, F, $, K, ee) {
    function ce(pe) {
      let ie = pe.range;
      ie instanceof z.Range && ie.end.isAfter(F) && ie.start.isBeforeOrEqual(F) && (pe.range = { inserting: new z.Range(ie.start, F), replacing: ie }), pe.documentation instanceof z.MarkdownString && (pe.documentation = Iv(pe.documentation));
    }
    function ue(pe) {
      return pe && (Array.isArray(pe) ? pe : pe.items).forEach(ce), pe;
    }
    let te = ee(O, F, $, K);
    return Ws(te) ? te.then(ue) : ue(te);
  }, provideHover(O, F, $, K) {
    function ee(ue) {
      return ue && Array.isArray(ue.contents) && (ue.contents = ue.contents.map((te) => te instanceof z.MarkdownString ? Iv(te) : te)), ue;
    }
    let ce = K(O, F, $);
    return Ws(ce) ? ce.then(ee) : ee(ce);
  }, provideFoldingRanges(O, F, $, K) {
    let ee = K(O, F, $);
    return Ws(ee), ee;
  }, provideDocumentColors(O, F, $) {
    let K = $(O, F);
    return Ws(K), K;
  }, provideDocumentSymbols(O, F, $) {
    function K(te) {
      return te.reduce((pe, ie) => pe + 1 + K(ie.children), 0);
    }
    function ee(te) {
      return te[0] instanceof z.DocumentSymbol;
    }
    function ce(te) {
      return Array.isArray(te) && (ee(te) ? K(te) : te.length) > Ma ? p.update(O, Ma) : p.update(O, false), te;
    }
    let ue = $(O, F);
    return Ws(ue) ? ue.then(ce) : ce(ue);
  } } };
  m.outputChannel = r.logOutputChannel;
  let g = t("json", vh, m);
  g.registerProposedFeatures();
  let y = {};
  g.onRequest(Nv.type, async (O) => {
    let F = z.Uri.parse(O), $ = F.toString();
    if (F.scheme === "untitled") throw new Be.ResponseError(3, z.l10n.t("Unable to load {0}", $));
    if (F.scheme === "vscode") try {
      r.logOutputChannel.info("read schema from vscode: " + $), A(F);
      let K = await z.workspace.fs.readFile(F);
      return new TextDecoder().decode(K);
    } catch (K) {
      throw new Be.ResponseError(5, K.toString(), K);
    }
    else if (F.scheme !== "http" && F.scheme !== "https") try {
      let K = await z.workspace.openTextDocument(F);
      return y[$] = true, K.getText();
    } catch (K) {
      throw new Be.ResponseError(2, K.toString(), K);
    }
    else if (l) {
      r.telemetry && F.authority === "schema.management.azure.com" && r.telemetry.sendTelemetryEvent("json.schema", { schemaURL: $ });
      try {
        return await r.schemaRequests.getContent($);
      } catch (K) {
        throw new Be.ResponseError(4, K.toString());
      }
    } else throw new Be.ResponseError(1, z.l10n.t("Downloading schemas is disabled through setting '{0}'", it.enableSchemaDownload));
  }), await g.start(), d = true;
  let T = (O) => y[O] ? (g.sendNotification(xa.type, O), true) : false, R = (O) => {
    if (!O) return;
    let F = O.document.uri.toString();
    F && c.has(F) ? a.show() : a.hide();
  }, v = (O) => {
    T(O) && delete y[O], c.delete(O);
  }, D = /* @__PURE__ */ new Map();
  i.push(new z.Disposable(() => {
    for (let O of D.values()) O.dispose();
  }));
  let A = (O) => {
    let F = O.toString();
    if (!D.has(F)) try {
      let $ = z.workspace.createFileSystemWatcher(new z.RelativePattern(O, "*")), K = (te) => {
        r.logOutputChannel.info("schema change detected " + te.toString()), g.sendNotification(xa.type, F);
      }, ee = $.onDidCreate(K), ce = $.onDidChange(K), ue = $.onDidDelete(() => {
        let te = D.get(F);
        te && (te.dispose(), D.delete(F));
      });
      D.set(F, z.Disposable.from($, ee, ce, ue));
    } catch {
      r.logOutputChannel.info("Problem installing a file system watcher for " + F);
    }
  };
  i.push(z.workspace.onDidChangeTextDocument((O) => T(O.document.uri.toString()))), i.push(z.workspace.onDidCloseTextDocument((O) => v(O.uri.toString()))), i.push(z.window.onDidChangeActiveTextEditor(R));
  let x = () => {
    if (z.window.activeTextEditor) {
      a.text = "$(watch)";
      let O = z.window.activeTextEditor.document.uri.toString();
      g.sendRequest(Fv.type, O).then((F) => {
        let $ = F.findIndex(_h);
        if ($ !== -1) {
          let K = F[$];
          c.set(O, K.message);
        } else a.hide();
        a.text = "$(alert)";
      });
    }
  };
  i.push(z.commands.registerCommand("_json.retryResolveSchema", x)), g.sendNotification(qa.type, await yh()), i.push(z.extensions.onDidChange(async (O) => {
    g.sendNotification(qa.type, await yh());
  }));
  let w = z.workspace.createFileSystemWatcher(new z.RelativePattern(z.Uri.parse("vscode://schemas-associations/"), "**/schemas-associations.json"));
  i.push(w), i.push(w.onDidChange(async (O) => {
    g.sendNotification(qa.type, await yh());
  })), S(), i.push({ dispose: () => s && s.dispose() }), q(), i.push(z.workspace.onDidChangeConfiguration((O) => {
    O.affectsConfiguration(it.enableFormatter) ? S() : O.affectsConfiguration(it.enableSchemaDownload) ? q() : (O.affectsConfiguration(it.editorFoldingMaximumRegions) || O.affectsConfiguration(it.editorColorDecoratorsLimit)) && g.sendNotification(Be.DidChangeConfigurationNotification.type, { settings: jv() });
  })), i.push(Sv(o, (O) => g.sendRequest(Lv.type, O)));
  function S() {
    let O = z.workspace.getConfiguration().get(it.enableFormatter);
    !O && s ? (s.dispose(), s = void 0) : O && !s && (s = z.languages.registerDocumentRangeFormattingEditProvider(o, { provideDocumentRangeFormattingEdits(F, $, K, ee) {
      let ce = z.workspace.getConfiguration("files", F), ue = { trimTrailingWhitespace: ce.get("trimTrailingWhitespace"), trimFinalNewlines: ce.get("trimFinalNewlines"), insertFinalNewline: ce.get("insertFinalNewline") }, te = { textDocument: g.code2ProtocolConverter.asTextDocumentIdentifier(F), range: g.code2ProtocolConverter.asRange($), options: g.code2ProtocolConverter.asFormattingOptions(K, ue) };
      return g.sendRequest(Be.DocumentRangeFormattingRequest.type, te, ee).then(g.protocol2CodeConverter.asTextEdits, (pe) => (g.handleFailedRequest(Be.DocumentRangeFormattingRequest.type, void 0, pe, []), Promise.resolve([])));
    } }));
  }
  function q() {
    l = z.workspace.getConfiguration().get(it.enableSchemaDownload) !== false, l ? (a.tooltip = z.l10n.t("Unable to resolve schema. Click to retry."), a.command = "_json.retryResolveSchema", x()) : (a.tooltip = z.l10n.t("Downloading schemas is disabled. Click to configure."), a.command = { command: "workbench.action.openSettings", arguments: [it.enableSchemaDownload], title: "" });
  }
  async function H(O, F = 4, $ = true) {
    let K = z.workspace.getConfiguration("files", O), ee = { tabSize: Number(F), insertSpaces: !!$, trimTrailingWhitespace: K.get("trimTrailingWhitespace"), trimFinalNewlines: K.get("trimFinalNewlines"), insertFinalNewline: K.get("insertFinalNewline") }, ce = { uri: O.uri.toString(), options: ee };
    return (await g.sendRequest(kv.type, ce)).map((te) => new z.TextEdit(new z.Range(te.range.start.line, te.range.start.character, te.range.end.line, te.range.end.character), te.newText));
  }
  return { dispose: async () => {
    await g.stop(), i.forEach((O) => O.dispose()), s?.dispose();
  } };
}
async function yh() {
  return wO().concat(await SO());
}
function wO() {
  let n = [];
  return z.extensions.allAcrossExtensionHosts.forEach((e) => {
    let t = e.packageJSON;
    if (t && t.contributes && t.contributes.jsonValidation) {
      let r = t.contributes.jsonValidation;
      Array.isArray(r) && r.forEach((i) => {
        let { fileMatch: s, url: o } = i;
        if (typeof s == "string" && (s = [s]), Array.isArray(s) && typeof o == "string") {
          let a = o;
          a[0] === "." && a[1] === "/" && (a = z.Uri.joinPath(e.extensionUri, a).toString()), s = s.map((c) => (c[0] === "%" ? (c = c.replace(/%APP_SETTINGS_HOME%/, "/User"), c = c.replace(/%MACHINE_SETTINGS_HOME%/, "/Machine"), c = c.replace(/%APP_WORKSPACES_HOME%/, "/Workspaces")) : c.match(/^(\w+:\/\/|\/|!)/) || (c = "/" + c), c)), n.push({ fileMatch: s, uri: a });
        }
      });
    }
  }), n;
}
async function SO() {
  let n = [];
  try {
    let e = await z.workspace.fs.readFile(z.Uri.parse("vscode://schemas-associations/schemas-associations.json")), t = new TextDecoder().decode(e), r = JSON.parse(t);
    for (let i of Object.keys(r)) n.push({ fileMatch: r[i], uri: i });
  } catch {
  }
  return n;
}
function jv() {
  let n = z.workspace.getConfiguration(), e = z.workspace.getConfiguration("http"), t = (d) => Math.trunc(Math.max(0, Number(d))) || 5e3;
  Ma = t(z.workspace.getConfiguration().get(it.maxItemsComputed));
  let r = z.workspace.getConfiguration(it.editorSection, { languageId: "json" }), i = z.workspace.getConfiguration(it.editorSection, { languageId: "jsonc" });
  Ov = t(r.get(it.foldingMaximumRegions)), Ev = t(i.get(it.foldingMaximumRegions)), xv = t(r.get(it.colorDecoratorsLimit)), qv = t(i.get(it.colorDecoratorsLimit));
  let s = [], o = { http: { proxy: e.get("proxy"), proxyStrictSSL: e.get("proxyStrictSSL") }, json: { validate: { enable: n.get(it.enableValidation) }, format: { enable: n.get(it.enableFormatter) }, keepLines: { enable: n.get(it.enableKeepLines) }, schemas: s, resultLimit: Ma + 1, jsonFoldingLimit: Ov + 1, jsoncFoldingLimit: Ev + 1, jsonColorDecoratorLimit: xv + 1, jsoncColorDecoratorLimit: qv + 1 } }, a = (d, p, h) => {
    if (d) for (let m of d) {
      let g = DO(m, h);
      if (g) {
        let y = { url: g, fileMatch: m.fileMatch, folderUri: p, schema: m.schema };
        s.push(y);
      }
    }
  }, c = z.workspace.workspaceFolders ?? [], l = z.workspace.getConfiguration("json", null).inspect("schemas");
  if (l) if (a(l.globalValue, void 0, void 0), z.workspace.workspaceFile) {
    if (l.workspaceValue) {
      let d = z.Uri.joinPath(z.workspace.workspaceFile, "..");
      a(l.workspaceValue, void 0, d);
    }
    for (let d of c) {
      let p = d.uri, h = z.workspace.getConfiguration("json", p).inspect("schemas");
      a(h?.workspaceFolderValue, p.toString(false), p);
    }
  } else l.workspaceValue && c.length === 1 && a(l.workspaceValue, void 0, c[0].uri);
  return o;
}
function DO(n, e) {
  let t = n.url;
  return t ? e && (t[0] === "." || t[0] === "/") && (t = z.Uri.joinPath(e, t).toString(false)) : n.schema && (t = n.schema.id || `vscode://schemas/custom/${encodeURIComponent(Ea(n.schema).toString(16))}`), t;
}
function Ws(n) {
  return n && n.then;
}
function Iv(n) {
  let e = new z.MarkdownString(n.value, true);
  return e.isTrusted = n.isTrusted, e;
}
function _h(n) {
  return n.code === 768;
}
var Qs = Yi(zb()), Qh = require("fs"), Xb = Yi(require("path")), Ka = Yi(Bb());
var g0 = { dispose: () => {
} }, m0 = (n, e, t) => g0, Xs = class {
  constructor(e, t) {
    this.telemetryLevel = "off";
    this.onDidChangeTelemetryLevel = m0;
  }
  sendTelemetryEvent(e, t, r) {
  }
  sendRawTelemetryEvent(e, t, r) {
  }
  sendDangerousTelemetryEvent(e, t, r) {
  }
  sendTelemetryErrorEvent(e, t, r) {
  }
  sendDangerousTelemetryErrorEvent(e, t, r) {
  }
  dispose() {
    return Promise.resolve();
  }
};
var Vi = require("fs"), Js = Yi(require("path")), Vb = require("crypto"), Gb = "json-schema-cache", Wa = class {
  constructor(e, t) {
    this.schemaCacheLocation = e;
    this.globalState = t;
    let r = t.get(Gb, {}), i = {};
    for (let s in r) {
      let { etag: o, fileName: a, updateTime: c } = r[s];
      typeof o == "string" && typeof a == "string" && typeof c == "number" && (i[s] = { etag: o, fileName: a, updateTime: c });
    }
    this.cacheInfo = i;
  }
  getETag(e) {
    return this.cacheInfo[e]?.etag;
  }
  getLastUpdatedInHours(e) {
    let t = this.cacheInfo[e]?.updateTime;
    if (t !== void 0) return ((/* @__PURE__ */ new Date()).getTime() - t) / 1e3 / 60 / 60;
  }
  async putSchema(e, t, r) {
    try {
      let i = y0(e);
      await Vi.promises.writeFile(Js.join(this.schemaCacheLocation, i), r);
      let s = { etag: t, fileName: i, updateTime: (/* @__PURE__ */ new Date()).getTime() };
      this.cacheInfo[e] = s;
    } catch {
      delete this.cacheInfo[e];
    } finally {
      await this.updateMemento();
    }
  }
  async getSchemaIfUpdatedSince(e, t) {
    let r = this.getLastUpdatedInHours(e);
    if (r !== void 0 && r < t) return this.loadSchemaFile(e, this.cacheInfo[e], false);
  }
  async getSchema(e, t, r) {
    let i = this.cacheInfo[e];
    if (i) {
      if (i.etag === t) return this.loadSchemaFile(e, i, r);
      this.deleteSchemaFile(e, i);
    }
  }
  async loadSchemaFile(e, t, r) {
    let i = Js.join(this.schemaCacheLocation, t.fileName);
    try {
      let s = (await Vi.promises.readFile(i)).toString();
      return r && (t.updateTime = (/* @__PURE__ */ new Date()).getTime()), s;
    } catch {
      delete this.cacheInfo[e];
      return;
    } finally {
      await this.updateMemento();
    }
  }
  async deleteSchemaFile(e, t) {
    let r = Js.join(this.schemaCacheLocation, t.fileName);
    delete this.cacheInfo[e], await this.updateMemento();
    try {
      await Vi.promises.rm(r);
    } catch {
    }
  }
  getCacheInfo() {
    return this.cacheInfo;
  }
  async updateMemento() {
    try {
      await this.globalState.update(Gb, this.cacheInfo);
    } catch {
    }
  }
  async clearCache() {
    let e = Object.keys(this.cacheInfo);
    try {
      let t = await Vi.promises.readdir(this.schemaCacheLocation);
      for (let r of t) try {
        await Vi.promises.unlink(Js.join(this.schemaCacheLocation, r));
      } catch {
      }
    } catch {
    } finally {
      this.cacheInfo = {}, await this.updateMemento();
    }
    return e;
  }
};
function y0(n) {
  return `${(0, Vb.createHash)("sha256").update(n).digest("hex")}.schema.json`;
}
var za;
async function _0(n) {
  let e = await b0(n), t = new Xs("");
  n.subscriptions.push(t);
  let r = gr.window.createOutputChannel(vh, { log: true });
  n.subscriptions.push(r);
  let i = `./server/${e.main.indexOf("/dist/") !== -1 ? "dist" : "out"}/node/jsonServerMain`, s = n.asAbsolutePath(i), o = { execArgv: ["--nolazy", "--inspect=" + (6e3 + Math.round(Math.random() * 999))] }, a = { run: { module: s, transport: Qs.TransportKind.ipc }, debug: { module: s, transport: Qs.TransportKind.ipc, options: o } }, c = (p, h, m) => new Qs.LanguageClient(p, h, a, m), l = { setTimeout(p, h, ...m) {
    let g = setTimeout(p, h, ...m);
    return { dispose: () => clearTimeout(g) };
  } };
  process.env.VSCODE_L10N_BUNDLE_LOCATION = gr.l10n.uri?.toString() ?? "";
  let d = await w0(n, r);
  za = await $v(n, c, { schemaRequests: d, telemetry: t, timer: l, logOutputChannel: r });
}
async function v0() {
  za && (await za.dispose(), za = void 0);
}
async function b0(n) {
  let e = n.asAbsolutePath("./package.json");
  try {
    return JSON.parse((await Qh.promises.readFile(e)).toString());
  } catch (t) {
    return console.log(`Problems reading ${e}: ${t}`), { name: "", version: "", main: "" };
  }
}
var C0 = 48;
async function w0(n, e) {
  let t, r = n.globalStorageUri, i;
  if (r.scheme === "file") {
    let a = Xb.join(r.fsPath, "json-schema-cache");
    await Qh.promises.mkdir(a, { recursive: true });
    let c = new Wa(a, n.globalState);
    e.trace(`[json schema cache] initial state: ${JSON.stringify(c.getCacheInfo(), null, " ")}`), t = c, i = async () => {
      let l = await c.clearCache();
      return e.trace(`[json schema cache] cache cleared. Previously cached schemas: ${l.join(", ")}`), l;
    };
  }
  let s = (a) => typeof a?.status == "number", o = async (a, c) => {
    let l = { "Accept-Encoding": "gzip, deflate", "User-Agent": `${gr.env.appName} (${gr.env.appHost})` };
    c && (l["If-None-Match"] = c);
    try {
      e.trace(`[json schema cache] Requesting schema ${a} etag ${c}...`);
      let d = await (0, Ka.xhr)({ url: a, followRedirects: 5, headers: l });
      if (t) {
        let p = d.headers.etag;
        typeof p == "string" ? (e.trace(`[json schema cache] Storing schema ${a} etag ${p} in cache`), await t.putSchema(a, p, d.responseText)) : e.trace(`[json schema cache] Response: schema ${a} no etag`);
      }
      return d.responseText;
    } catch (d) {
      if (s(d)) {
        if (d.status === 304 && c && t) {
          e.trace(`[json schema cache] Response: schema ${a} unchanged etag ${c}`);
          let h = await t.getSchema(a, c, true);
          return h ? (e.trace(`[json schema cache] Get schema ${a} etag ${c} from cache`), h) : o(a);
        }
        let p = (0, Ka.getErrorStatusDescription)(d.status);
        throw p && d.responseText && (p = `${p}
${d.responseText.substring(0, 200)}`), p || (p = d.toString()), e.trace(`[json schema cache] Respond schema ${a} error ${p}`), p;
      }
      throw d;
    }
  };
  return { getContent: async (a) => {
    if (t && /^https?:\/\/json\.schemastore\.org\//.test(a)) {
      let c = await t.getSchemaIfUpdatedSince(a, C0);
      if (c) return e.logLevel === gr.LogLevel.Trace && e.trace(`[json schema cache] Schema ${a} from cache without request (last accessed ${t.getLastUpdatedInHours(a)} hours ago)`), c;
    }
    return o(a, t?.getETag(a));
  }, clearCache: i };
}
