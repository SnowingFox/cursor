"use strict";
var tC = Object.create;
var Ys = Object.defineProperty;
var nC = Object.getOwnPropertyDescriptor;
var rC = Object.getOwnPropertyNames;
var iC = Object.getPrototypeOf, sC = Object.prototype.hasOwnProperty;
var ep = (n, e) => () => (n && (e = n(n = 0)), e);
var O = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports), Ba = (n, e) => {
  for (var t in e) Ys(n, t, { get: e[t], enumerable: true });
}, tp = (n, e, t, r) => {
  if (e && typeof e == "object" || typeof e == "function") for (let i of rC(e)) !sC.call(n, i) && i !== t && Ys(n, i, { get: () => e[i], enumerable: !(r = nC(e, i)) || r.enumerable });
  return n;
};
var Qi = (n, e, t) => (t = n != null ? tC(iC(n)) : {}, tp(e || !n || !n.__esModule ? Ys(t, "default", { value: n, enumerable: true }) : t, n)), Yi = (n) => tp(Ys({}, "__esModule", { value: true }), n);
var di = O(($n) => {
  "use strict";
  Object.defineProperty($n, "__esModule", { value: true });
  $n.boolean = oC;
  $n.string = np;
  $n.number = aC;
  $n.error = cC;
  $n.func = uC;
  $n.array = rp;
  $n.stringArray = lC;
  function oC(n) {
    return n === true || n === false;
  }
  function np(n) {
    return typeof n == "string" || n instanceof String;
  }
  function aC(n) {
    return typeof n == "number" || n instanceof Number;
  }
  function cC(n) {
    return n instanceof Error;
  }
  function uC(n) {
    return typeof n == "function";
  }
  function rp(n) {
    return Array.isArray(n);
  }
  function lC(n) {
    return rp(n) && n.every((e) => np(e));
  }
});
var yc = O((W) => {
  "use strict";
  var dC = W && W.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), fC = W && W.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), hC = W && W.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && dC(t, e, r[i]);
      return fC(t, e), t;
    };
  })();
  Object.defineProperty(W, "__esModule", { value: true });
  W.Message = W.NotificationType9 = W.NotificationType8 = W.NotificationType7 = W.NotificationType6 = W.NotificationType5 = W.NotificationType4 = W.NotificationType3 = W.NotificationType2 = W.NotificationType1 = W.NotificationType0 = W.NotificationType = W.RequestType9 = W.RequestType8 = W.RequestType7 = W.RequestType6 = W.RequestType5 = W.RequestType4 = W.RequestType3 = W.RequestType2 = W.RequestType1 = W.RequestType = W.RequestType0 = W.AbstractMessageSignature = W.ParameterStructures = W.ResponseError = W.ErrorCodes = void 0;
  var $r = hC(di()), Va;
  (function(n) {
    n.ParseError = -32700, n.InvalidRequest = -32600, n.MethodNotFound = -32601, n.InvalidParams = -32602, n.InternalError = -32603, n.jsonrpcReservedErrorRangeStart = -32099, n.serverErrorStart = -32099, n.MessageWriteError = -32099, n.MessageReadError = -32098, n.PendingResponseRejected = -32097, n.ConnectionInactive = -32096, n.ServerNotInitialized = -32002, n.UnknownErrorCode = -32001, n.jsonrpcReservedErrorRangeEnd = -32e3, n.serverErrorEnd = -32e3;
  })(Va || (W.ErrorCodes = Va = {}));
  var Ga = class n extends Error {
    code;
    data;
    constructor(e, t, r) {
      super(t), this.code = $r.number(e) ? e : Va.UnknownErrorCode, this.data = r, Object.setPrototypeOf(this, n.prototype);
    }
    toJson() {
      let e = { code: this.code, message: this.message };
      return this.data !== void 0 && (e.data = this.data), e;
    }
  };
  W.ResponseError = Ga;
  var yr = class n {
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
  W.ParameterStructures = yr;
  var we = class {
    method;
    numberOfParams;
    constructor(e, t) {
      this.method = e, this.numberOfParams = t;
    }
    get parameterStructures() {
      return yr.auto;
    }
  };
  W.AbstractMessageSignature = we;
  var Xa = class extends we {
    _;
    constructor(e) {
      super(e, 0);
    }
  };
  W.RequestType0 = Xa;
  var Ja = class extends we {
    _parameterStructures;
    _;
    constructor(e, t = yr.auto) {
      super(e, 1), this._parameterStructures = t;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  };
  W.RequestType = Ja;
  var Qa = class extends we {
    _parameterStructures;
    _;
    constructor(e, t = yr.auto) {
      super(e, 1), this._parameterStructures = t;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  };
  W.RequestType1 = Qa;
  var Ya = class extends we {
    _;
    constructor(e) {
      super(e, 2);
    }
  };
  W.RequestType2 = Ya;
  var Za = class extends we {
    _;
    constructor(e) {
      super(e, 3);
    }
  };
  W.RequestType3 = Za;
  var ec = class extends we {
    _;
    constructor(e) {
      super(e, 4);
    }
  };
  W.RequestType4 = ec;
  var tc = class extends we {
    _;
    constructor(e) {
      super(e, 5);
    }
  };
  W.RequestType5 = tc;
  var nc = class extends we {
    _;
    constructor(e) {
      super(e, 6);
    }
  };
  W.RequestType6 = nc;
  var rc = class extends we {
    _;
    constructor(e) {
      super(e, 7);
    }
  };
  W.RequestType7 = rc;
  var ic = class extends we {
    _;
    constructor(e) {
      super(e, 8);
    }
  };
  W.RequestType8 = ic;
  var sc = class extends we {
    _;
    constructor(e) {
      super(e, 9);
    }
  };
  W.RequestType9 = sc;
  var oc = class extends we {
    _parameterStructures;
    _;
    constructor(e, t = yr.auto) {
      super(e, 1), this._parameterStructures = t;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  };
  W.NotificationType = oc;
  var ac = class extends we {
    _;
    constructor(e) {
      super(e, 0);
    }
  };
  W.NotificationType0 = ac;
  var cc = class extends we {
    _parameterStructures;
    _;
    constructor(e, t = yr.auto) {
      super(e, 1), this._parameterStructures = t;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  };
  W.NotificationType1 = cc;
  var uc = class extends we {
    _;
    constructor(e) {
      super(e, 2);
    }
  };
  W.NotificationType2 = uc;
  var lc = class extends we {
    _;
    constructor(e) {
      super(e, 3);
    }
  };
  W.NotificationType3 = lc;
  var dc = class extends we {
    _;
    constructor(e) {
      super(e, 4);
    }
  };
  W.NotificationType4 = dc;
  var fc = class extends we {
    _;
    constructor(e) {
      super(e, 5);
    }
  };
  W.NotificationType5 = fc;
  var hc = class extends we {
    _;
    constructor(e) {
      super(e, 6);
    }
  };
  W.NotificationType6 = hc;
  var pc = class extends we {
    _;
    constructor(e) {
      super(e, 7);
    }
  };
  W.NotificationType7 = pc;
  var gc = class extends we {
    _;
    constructor(e) {
      super(e, 8);
    }
  };
  W.NotificationType8 = gc;
  var mc = class extends we {
    _;
    constructor(e) {
      super(e, 9);
    }
  };
  W.NotificationType9 = mc;
  var ip;
  (function(n) {
    function e(i) {
      let s = i;
      return s && $r.string(s.method) && ($r.string(s.id) || $r.number(s.id));
    }
    n.isRequest = e;
    function t(i) {
      let s = i;
      return s && $r.string(s.method) && i.id === void 0;
    }
    n.isNotification = t;
    function r(i) {
      let s = i;
      return s && (s.result !== void 0 || !!s.error) && ($r.string(s.id) || $r.number(s.id) || s.id === null);
    }
    n.isResponse = r;
  })(ip || (W.Message = ip = {}));
});
var vc = O((_r) => {
  "use strict";
  Object.defineProperty(_r, "__esModule", { value: true });
  _r.LRUCache = _r.LinkedMap = _r.Touch = void 0;
  var ut;
  (function(n) {
    n.None = 0, n.First = 1, n.AsOld = n.First, n.Last = 2, n.AsNew = n.Last;
  })(ut || (_r.Touch = ut = {}));
  var Zs = class {
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
    get(e, t = ut.None) {
      let r = this._map.get(e);
      if (r) return t !== ut.None && this.touch(r, t), r.value;
    }
    set(e, t, r = ut.None) {
      let i = this._map.get(e);
      if (i) i.value = t, r !== ut.None && this.touch(i, r);
      else {
        switch (i = { key: e, value: t, next: void 0, previous: void 0 }, r) {
          case ut.None:
            this.addItemLast(i);
            break;
          case ut.First:
            this.addItemFirst(i);
            break;
          case ut.Last:
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
      if (!(t !== ut.First && t !== ut.Last)) {
        if (t === ut.First) {
          if (e === this._head) return;
          let r = e.next, i = e.previous;
          e === this._tail ? (i.next = void 0, this._tail = i) : (r.previous = i, i.next = r), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
        } else if (t === ut.Last) {
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
  _r.LinkedMap = Zs;
  var _c = class extends Zs {
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
    get(e, t = ut.AsNew) {
      return super.get(e, t);
    }
    peek(e) {
      return super.get(e, ut.None);
    }
    set(e, t) {
      return super.set(e, t, ut.Last), this.checkTrim(), this;
    }
    checkTrim() {
      this.size > this._limit && this.trimOld(Math.round(this._limit * this._ratio));
    }
  };
  _r.LRUCache = _c;
});
var op = O((eo) => {
  "use strict";
  Object.defineProperty(eo, "__esModule", { value: true });
  eo.Disposable = void 0;
  var sp;
  (function(n) {
    function e(t) {
      return { dispose: t };
    }
    n.create = e;
  })(sp || (eo.Disposable = sp = {}));
});
var vr = O((wc) => {
  "use strict";
  Object.defineProperty(wc, "__esModule", { value: true });
  var bc;
  function Cc() {
    if (bc === void 0) throw new Error("No runtime abstraction layer installed");
    return bc;
  }
  (function(n) {
    function e(t) {
      if (t === void 0) throw new Error("No runtime abstraction layer provided");
      bc = t;
    }
    n.install = e;
  })(Cc || (Cc = {}));
  wc.default = Cc;
});
var fi = O((br) => {
  "use strict";
  var pC = br && br.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(br, "__esModule", { value: true });
  br.Emitter = br.Event = void 0;
  var gC = pC(vr()), ap;
  (function(n) {
    let e = { dispose() {
    } };
    n.None = function() {
      return e;
    };
  })(ap || (br.Event = ap = {}));
  var Dc = class {
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
        (0, gC.default)().console.error(a);
      }
      return t;
    }
    isEmpty() {
      return !this._callbacks || this._callbacks.length === 0;
    }
    dispose() {
      this._callbacks = void 0, this._contexts = void 0;
    }
  }, Sc = class n {
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
        this._callbacks || (this._callbacks = new Dc()), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(e, t);
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
  br.Emitter = Sc;
});
var ro = O((Dt) => {
  "use strict";
  var mC = Dt && Dt.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), yC = Dt && Dt.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), _C = Dt && Dt.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && mC(t, e, r[i]);
      return yC(t, e), t;
    };
  })(), vC = Dt && Dt.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(Dt, "__esModule", { value: true });
  Dt.CancellationTokenSource = Dt.CancellationToken = void 0;
  var bC = vC(vr()), CC = _C(di()), Pc = fi(), to;
  (function(n) {
    n.None = Object.freeze({ isCancellationRequested: false, onCancellationRequested: Pc.Event.None }), n.Cancelled = Object.freeze({ isCancellationRequested: true, onCancellationRequested: Pc.Event.None });
    function e(t) {
      let r = t;
      return r && (r === n.None || r === n.Cancelled || CC.boolean(r.isCancellationRequested) && !!r.onCancellationRequested);
    }
    n.is = e;
  })(to || (Dt.CancellationToken = to = {}));
  var wC = Object.freeze(function(n, e) {
    let t = (0, bC.default)().timer.setTimeout(n.bind(e), 0);
    return { dispose() {
      t.dispose();
    } };
  }), no = class {
    _isCancelled = false;
    _emitter;
    cancel() {
      this._isCancelled || (this._isCancelled = true, this._emitter && (this._emitter.fire(void 0), this.dispose()));
    }
    get isCancellationRequested() {
      return this._isCancelled;
    }
    get onCancellationRequested() {
      return this._isCancelled ? wC : (this._emitter || (this._emitter = new Pc.Emitter()), this._emitter.event);
    }
    dispose() {
      this._emitter && (this._emitter.dispose(), this._emitter = void 0);
    }
  }, Rc = class {
    _token;
    get token() {
      return this._token || (this._token = new no()), this._token;
    }
    cancel() {
      this._token ? this._token.cancel() : this._token = to.Cancelled;
    }
    dispose() {
      this._token ? this._token instanceof no && this._token.dispose() : this._token = to.None;
    }
  };
  Dt.CancellationTokenSource = Rc;
});
var cp = O((hi) => {
  "use strict";
  Object.defineProperty(hi, "__esModule", { value: true });
  hi.SharedArrayReceiverStrategy = hi.SharedArraySenderStrategy = void 0;
  var DC = ro(), Zi;
  (function(n) {
    n.Continue = 0, n.Cancelled = 1;
  })(Zi || (Zi = {}));
  var Tc = class {
    buffers;
    constructor() {
      this.buffers = /* @__PURE__ */ new Map();
    }
    enableCancellation(e) {
      if (e.id === null) return;
      let t = new SharedArrayBuffer(4), r = new Int32Array(t, 0, 1);
      r[0] = Zi.Continue, this.buffers.set(e.id, t), e.$cancellationData = t;
    }
    async sendCancellation(e, t) {
      let r = this.buffers.get(t);
      if (r === void 0) return;
      let i = new Int32Array(r, 0, 1);
      Atomics.store(i, 0, Zi.Cancelled);
    }
    cleanup(e) {
      this.buffers.delete(e);
    }
    dispose() {
      this.buffers.clear();
    }
  };
  hi.SharedArraySenderStrategy = Tc;
  var Oc = class {
    data;
    constructor(e) {
      this.data = new Int32Array(e, 0, 1);
    }
    get isCancellationRequested() {
      return Atomics.load(this.data, 0) === Zi.Cancelled;
    }
    get onCancellationRequested() {
      throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events");
    }
  }, Ec = class {
    token;
    constructor(e) {
      this.token = new Oc(e);
    }
    cancel() {
    }
    dispose() {
    }
  }, xc = class {
    kind = "request";
    createCancellationTokenSource(e) {
      let t = e.$cancellationData;
      return t === void 0 ? new DC.CancellationTokenSource() : new Ec(t);
    }
  };
  hi.SharedArrayReceiverStrategy = xc;
});
var Mc = O((pi) => {
  "use strict";
  var SC = pi && pi.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(pi, "__esModule", { value: true });
  pi.Semaphore = void 0;
  var PC = SC(vr()), qc = class {
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
      this._waiting.length === 0 || this._active === this._capacity || (0, PC.default)().timer.setImmediate(() => this.doRunNext());
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
  pi.Semaphore = qc;
});
var lp = O((lt) => {
  "use strict";
  var RC = lt && lt.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), TC = lt && lt.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), OC = lt && lt.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && RC(t, e, r[i]);
      return TC(t, e), t;
    };
  })(), EC = lt && lt.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(lt, "__esModule", { value: true });
  lt.ReadableStreamMessageReader = lt.AbstractMessageReader = lt.MessageReader = void 0;
  var Nc = EC(vr()), gi = OC(di()), Ic = fi(), xC = Mc(), up;
  (function(n) {
    function e(t) {
      let r = t;
      return r && gi.func(r.listen) && gi.func(r.dispose) && gi.func(r.onError) && gi.func(r.onClose) && gi.func(r.onPartialMessage);
    }
    n.is = e;
  })(up || (lt.MessageReader = up = {}));
  var io = class {
    errorEmitter;
    closeEmitter;
    partialMessageEmitter;
    constructor() {
      this.errorEmitter = new Ic.Emitter(), this.closeEmitter = new Ic.Emitter(), this.partialMessageEmitter = new Ic.Emitter();
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
      return e instanceof Error ? e : new Error(`Reader received error. Reason: ${gi.string(e.message) ? e.message : "unknown"}`);
    }
  };
  lt.AbstractMessageReader = io;
  var jc;
  (function(n) {
    function e(t) {
      let r, i, s, o = /* @__PURE__ */ new Map(), a, c = /* @__PURE__ */ new Map();
      if (t === void 0 || typeof t == "string") r = t ?? "utf-8";
      else {
        if (r = t.charset ?? "utf-8", t.contentDecoder !== void 0 && (s = t.contentDecoder, o.set(s.name, s)), t.contentDecoders !== void 0) for (let u of t.contentDecoders) o.set(u.name, u);
        if (t.contentTypeDecoder !== void 0 && (a = t.contentTypeDecoder, c.set(a.name, a)), t.contentTypeDecoders !== void 0) for (let u of t.contentTypeDecoders) c.set(u.name, u);
      }
      return a === void 0 && (a = (0, Nc.default)().applicationJson.decoder, c.set(a.name, a)), { charset: r, contentDecoder: s, contentDecoders: o, contentTypeDecoder: a, contentTypeDecoders: c };
    }
    n.fromOptions = e;
  })(jc || (jc = {}));
  var Fc = class extends io {
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
      super(), this.readable = e, this.options = jc.fromOptions(t), this.buffer = (0, Nc.default)().messageBuffer.create(this.options.charset), this._partialMessageTimeout = 1e4, this.nextMessageLength = -1, this.messageToken = 0, this.readSemaphore = new xC.Semaphore(1);
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
      this.clearPartialMessageTimer(), !(this._partialMessageTimeout <= 0) && (this.partialMessageTimer = (0, Nc.default)().timer.setTimeout((e, t) => {
        this.partialMessageTimer = void 0, e === this.messageToken && (this.firePartialMessage({ messageToken: e, waitingTime: t }), this.setPartialMessageTimer());
      }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout));
    }
  };
  lt.ReadableStreamMessageReader = Fc;
});
var gp = O((dt) => {
  "use strict";
  var qC = dt && dt.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), MC = dt && dt.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), IC = dt && dt.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && qC(t, e, r[i]);
      return MC(t, e), t;
    };
  })(), NC = dt && dt.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(dt, "__esModule", { value: true });
  dt.WriteableStreamMessageWriter = dt.AbstractMessageWriter = dt.MessageWriter = void 0;
  var dp = NC(vr()), es = IC(di()), jC = Mc(), fp = fi(), FC = "Content-Length: ", hp = `\r
`, pp;
  (function(n) {
    function e(t) {
      let r = t;
      return r && es.func(r.dispose) && es.func(r.onClose) && es.func(r.onError) && es.func(r.write);
    }
    n.is = e;
  })(pp || (dt.MessageWriter = pp = {}));
  var so = class {
    errorEmitter;
    closeEmitter;
    constructor() {
      this.errorEmitter = new fp.Emitter(), this.closeEmitter = new fp.Emitter();
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
      return e instanceof Error ? e : new Error(`Writer received error. Reason: ${es.string(e.message) ? e.message : "unknown"}`);
    }
  };
  dt.AbstractMessageWriter = so;
  var Lc;
  (function(n) {
    function e(t) {
      return t === void 0 || typeof t == "string" ? { charset: t ?? "utf-8", contentTypeEncoder: (0, dp.default)().applicationJson.encoder } : { charset: t.charset ?? "utf-8", contentEncoder: t.contentEncoder, contentTypeEncoder: t.contentTypeEncoder ?? (0, dp.default)().applicationJson.encoder };
    }
    n.fromOptions = e;
  })(Lc || (Lc = {}));
  var Ac = class extends so {
    writable;
    options;
    errorCount;
    writeSemaphore;
    constructor(e, t) {
      super(), this.writable = e, this.options = Lc.fromOptions(t), this.errorCount = 0, this.writeSemaphore = new jC.Semaphore(1), this.writable.onError((r) => this.fireError(r)), this.writable.onClose(() => this.fireClose());
    }
    async write(e) {
      return this.writeSemaphore.lock(async () => this.options.contentTypeEncoder.encode(e, this.options).then((r) => this.options.contentEncoder !== void 0 ? this.options.contentEncoder.encode(r) : r).then((r) => {
        let i = [];
        return i.push(FC, r.byteLength.toString(), hp), i.push(hp), this.doWrite(e, i, r);
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
  dt.WriteableStreamMessageWriter = Ac;
});
var mp = O((oo) => {
  "use strict";
  Object.defineProperty(oo, "__esModule", { value: true });
  oo.AbstractMessageBuffer = void 0;
  var LC = 13, AC = 10, kC = `\r
`, kc = class {
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
        let u = this._chunks[r];
        for (i = 0; i < u.length; ) {
          switch (u[i]) {
            case LC:
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
            case AC:
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
        s += u.byteLength, r++;
      }
      if (t !== 4) return;
      let o = this._read(s + i), a = /* @__PURE__ */ new Map(), c = this.toString(o, "ascii").split(kC);
      if (c.length < 2) return a;
      for (let u = 0; u < c.length - 2; u++) {
        let d = c[u], h = d.indexOf(":");
        if (h === -1) throw new Error(`Message header must separate key and value using ':'
${d}`);
        let p = d.substr(0, h), g = d.substr(h + 1).trim();
        a.set(e ? p.toLowerCase() : p, g);
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
  oo.AbstractMessageBuffer = kc;
});
var bp = O((B) => {
  "use strict";
  var $C = B && B.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), HC = B && B.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), UC = B && B.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && $C(t, e, r[i]);
      return HC(t, e), t;
    };
  })(), WC = B && B.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(B, "__esModule", { value: true });
  B.ConnectionOptions = B.MessageStrategy = B.CancellationStrategy = B.CancellationSenderStrategy = B.CancellationReceiverStrategy = B.RequestCancellationReceiverStrategy = B.IdCancellationReceiverStrategy = B.ConnectionStrategy = B.ConnectionError = B.ConnectionErrors = B.LogTraceNotification = B.SetTraceNotification = B.TraceFormat = B.TraceValues = B.TraceValue = B.Trace = B.NullLogger = B.ProgressType = B.ProgressToken = void 0;
  B.createMessageConnection = zC;
  var yp = WC(vr()), Ie = UC(di()), Y = yc(), _p = vc(), ts = fi(), $c = ro(), is;
  (function(n) {
    n.type = new Y.NotificationType("$/cancelRequest");
  })(is || (is = {}));
  var Hc;
  (function(n) {
    function e(t) {
      return typeof t == "string" || typeof t == "number";
    }
    n.is = e;
  })(Hc || (B.ProgressToken = Hc = {}));
  var ns;
  (function(n) {
    n.type = new Y.NotificationType("$/progress");
  })(ns || (ns = {}));
  var Uc = class {
    __;
    _pr;
    constructor() {
    }
  };
  B.ProgressType = Uc;
  var Wc;
  (function(n) {
    function e(t) {
      return Ie.func(t);
    }
    n.is = e;
  })(Wc || (Wc = {}));
  B.NullLogger = Object.freeze({ error: () => {
  }, warn: () => {
  }, info: () => {
  }, log: () => {
  } });
  var de;
  (function(n) {
    n[n.Off = 0] = "Off", n[n.Messages = 1] = "Messages", n[n.Compact = 2] = "Compact", n[n.Verbose = 3] = "Verbose";
  })(de || (B.Trace = de = {}));
  var zc;
  (function(n) {
    n.Off = "off", n.Messages = "messages", n.Compact = "compact", n.Verbose = "verbose";
  })(zc || (B.TraceValue = zc = {}));
  B.TraceValues = zc;
  (function(n) {
    function e(r) {
      if (!Ie.string(r)) return n.Off;
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
  })(de || (B.Trace = de = {}));
  var xt;
  (function(n) {
    n.Text = "text", n.JSON = "json";
  })(xt || (B.TraceFormat = xt = {}));
  (function(n) {
    function e(t) {
      return Ie.string(t) ? (t = t.toLowerCase(), t === "json" ? n.JSON : n.Text) : n.Text;
    }
    n.fromString = e;
  })(xt || (B.TraceFormat = xt = {}));
  var Kc;
  (function(n) {
    n.type = new Y.NotificationType("$/setTrace");
  })(Kc || (B.SetTraceNotification = Kc = {}));
  var ao;
  (function(n) {
    n.type = new Y.NotificationType("$/logTrace");
  })(ao || (B.LogTraceNotification = ao = {}));
  var rs;
  (function(n) {
    n[n.Closed = 1] = "Closed", n[n.Disposed = 2] = "Disposed", n[n.AlreadyListening = 3] = "AlreadyListening";
  })(rs || (B.ConnectionErrors = rs = {}));
  var mi = class n extends Error {
    code;
    constructor(e, t) {
      super(t), this.code = e, Object.setPrototypeOf(this, n.prototype);
    }
  };
  B.ConnectionError = mi;
  var Bc;
  (function(n) {
    function e(t) {
      let r = t;
      return r && Ie.func(r.cancelUndispatched);
    }
    n.is = e;
  })(Bc || (B.ConnectionStrategy = Bc = {}));
  var co;
  (function(n) {
    function e(t) {
      let r = t;
      return r && (r.kind === void 0 || r.kind === "id") && Ie.func(r.createCancellationTokenSource) && (r.dispose === void 0 || Ie.func(r.dispose));
    }
    n.is = e;
  })(co || (B.IdCancellationReceiverStrategy = co = {}));
  var Vc;
  (function(n) {
    function e(t) {
      let r = t;
      return r && r.kind === "request" && Ie.func(r.createCancellationTokenSource) && (r.dispose === void 0 || Ie.func(r.dispose));
    }
    n.is = e;
  })(Vc || (B.RequestCancellationReceiverStrategy = Vc = {}));
  var uo;
  (function(n) {
    n.Message = Object.freeze({ createCancellationTokenSource(t) {
      return new $c.CancellationTokenSource();
    } });
    function e(t) {
      return co.is(t) || Vc.is(t);
    }
    n.is = e;
  })(uo || (B.CancellationReceiverStrategy = uo = {}));
  var lo;
  (function(n) {
    n.Message = Object.freeze({ sendCancellation(t, r) {
      return t.sendNotification(is.type, { id: r });
    }, cleanup(t) {
    } });
    function e(t) {
      let r = t;
      return r && Ie.func(r.sendCancellation) && Ie.func(r.cleanup);
    }
    n.is = e;
  })(lo || (B.CancellationSenderStrategy = lo = {}));
  var fo;
  (function(n) {
    n.Message = Object.freeze({ receiver: uo.Message, sender: lo.Message });
    function e(t) {
      let r = t;
      return r && uo.is(r.receiver) && lo.is(r.sender);
    }
    n.is = e;
  })(fo || (B.CancellationStrategy = fo = {}));
  var ho;
  (function(n) {
    function e(t) {
      let r = t;
      return r && Ie.func(r.handleMessage);
    }
    n.is = e;
  })(ho || (B.MessageStrategy = ho = {}));
  var vp;
  (function(n) {
    function e(t) {
      let r = t;
      return r && (fo.is(r.cancellationStrategy) || Bc.is(r.connectionStrategy) || ho.is(r.messageStrategy) || Ie.number(r.maxParallelism));
    }
    n.is = e;
  })(vp || (B.ConnectionOptions = vp = {}));
  var Xt;
  (function(n) {
    n[n.New = 1] = "New", n[n.Listening = 2] = "Listening", n[n.Closed = 3] = "Closed", n[n.Disposed = 4] = "Disposed";
  })(Xt || (Xt = {}));
  function zC(n, e, t, r) {
    let i = t !== void 0 ? t : B.NullLogger, s = 0, o = 0, a = 0, c = "2.0", u = r?.maxParallelism ?? -1, d = 0, h, p = /* @__PURE__ */ new Map(), g, y = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), D, S = new _p.LinkedMap(), C = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Map(), N = de.Off, J = xt.Text, Q, te = Xt.New, Oe = new ts.Emitter(), Xe = new ts.Emitter(), vt = new ts.Emitter(), ri = new ts.Emitter(), ii = new ts.Emitter(), Lt = r && r.cancellationStrategy ? r.cancellationStrategy : fo.Message;
    function In(v) {
    }
    function At() {
      return te === Xt.Listening;
    }
    function Nn() {
      return te === Xt.Closed;
    }
    function Vt() {
      return te === Xt.Disposed;
    }
    function xe() {
      (te === Xt.New || te === Xt.Listening) && (te = Xt.Closed, Xe.fire(void 0));
    }
    function Vi(v) {
      Oe.fire([v, void 0, void 0]);
    }
    function an(v) {
      Oe.fire(v);
    }
    n.onClose(xe), n.onError(Vi), e.onClose(xe), e.onError(an);
    function ur(v) {
      if (v === null) throw new Error("Can't send requests with id null since the response can't be correlated.");
      return "req-" + v.toString();
    }
    function si(v) {
      return v === null ? "res-unknown-" + (++a).toString() : "res-" + v.toString();
    }
    function Lr() {
      return "not-" + (++o).toString();
    }
    function cn(v, q) {
      Y.Message.isRequest(q) ? v.set(ur(q.id), q) : Y.Message.isResponse(q) ? u === -1 ? v.set(si(q.id), q) : fr(q) : v.set(Lr(), q);
    }
    function Ar() {
      D || S.size === 0 || u !== -1 && d >= u || (D = (0, yp.default)().timer.setImmediate(async () => {
        if (D = void 0, S.size === 0 || u !== -1 && d >= u) return;
        let v = S.shift(), q;
        try {
          d++;
          let j = r?.messageStrategy;
          ho.is(j) ? q = j.handleMessage(v, oi) : q = oi(v);
        } catch (j) {
          i.error(`Processing message queue failed: ${j.toString()}`);
        } finally {
          q instanceof Promise ? q.then(() => {
            d--, Ar();
          }).catch((j) => {
            i.error(`Processing message queue failed: ${j.toString()}`);
          }) : d--, Ar();
        }
      }));
    }
    async function oi(v) {
      return Y.Message.isRequest(v) ? dr(v) : Y.Message.isNotification(v) ? Gi(v) : Y.Message.isResponse(v) ? fr(v) : ai(v);
    }
    let lr = (v) => {
      try {
        if (Y.Message.isNotification(v) && v.method === is.type.method) {
          let q = v.params.id, j = ur(q), H = S.get(j);
          if (Y.Message.isRequest(H)) {
            let ue = r?.connectionStrategy, ae = ue && ue.cancelUndispatched ? ue.cancelUndispatched(H, In) : void 0;
            if (ae && (ae.error !== void 0 || ae.result !== void 0)) {
              S.delete(j), I.delete(q), ae.id = H.id, hr(ae, v.method, Date.now()), e.write(ae).catch(() => i.error("Sending response for canceled message failed."));
              return;
            }
          }
          let re = I.get(q);
          if (re !== void 0) {
            re.cancel(), jn(v);
            return;
          } else T.add(q);
        }
        cn(S, v);
      } finally {
        Ar();
      }
    };
    async function dr(v) {
      if (Vt()) return Promise.resolve();
      function q(qe, He, me) {
        let be = { jsonrpc: c, id: v.id };
        return qe instanceof Y.ResponseError ? be.error = qe.toJson() : be.result = qe === void 0 ? null : qe, hr(be, He, me), e.write(be);
      }
      function j(qe, He, me) {
        let be = { jsonrpc: c, id: v.id, error: qe.toJson() };
        return hr(be, He, me), e.write(be);
      }
      pr(v);
      let H = p.get(v.method), re, ue;
      H && (re = H.type, ue = H.handler);
      let ae = Date.now();
      if (ue || h) {
        let qe = v.id ?? String(Date.now()), He = co.is(Lt.receiver) ? Lt.receiver.createCancellationTokenSource(qe) : Lt.receiver.createCancellationTokenSource(v);
        v.id !== null && T.has(v.id) && He.cancel(), v.id !== null && I.set(qe, He);
        try {
          let me;
          if (ue) if (v.params === void 0) {
            if (re !== void 0 && re.numberOfParams !== 0) return j(new Y.ResponseError(Y.ErrorCodes.InvalidParams, `Request ${v.method} defines ${re.numberOfParams} params but received none.`), v.method, ae);
            me = ue(He.token);
          } else if (Array.isArray(v.params)) {
            if (re !== void 0 && re.parameterStructures === Y.ParameterStructures.byName) return j(new Y.ResponseError(Y.ErrorCodes.InvalidParams, `Request ${v.method} defines parameters by name but received parameters by position`), v.method, ae);
            me = ue(...v.params, He.token);
          } else {
            if (re !== void 0 && re.parameterStructures === Y.ParameterStructures.byPosition) return j(new Y.ResponseError(Y.ErrorCodes.InvalidParams, `Request ${v.method} defines parameters by position but received parameters by name`), v.method, ae);
            me = ue(v.params, He.token);
          }
          else h && (me = h(v.method, v.params, He.token));
          let be = await me;
          await q(be, v.method, ae);
        } catch (me) {
          me instanceof Y.ResponseError ? await q(me, v.method, ae) : me && Ie.string(me.message) ? await j(new Y.ResponseError(Y.ErrorCodes.InternalError, `Request ${v.method} failed with message: ${me.message}`), v.method, ae) : await j(new Y.ResponseError(Y.ErrorCodes.InternalError, `Request ${v.method} failed unexpectedly without providing any details.`), v.method, ae);
        } finally {
          I.delete(qe);
        }
      } else await j(new Y.ResponseError(Y.ErrorCodes.MethodNotFound, `Unhandled method ${v.method}`), v.method, ae);
    }
    function fr(v) {
      if (!Vt()) if (v.id === null) v.error ? i.error(`Received response message without id: Error is: 
${JSON.stringify(v.error, void 0, 4)}`) : i.error("Received response message without id. No further error information provided.");
      else {
        let q = v.id, j = C.get(q);
        if (ci(v, j), j !== void 0) {
          C.delete(q);
          try {
            if (v.error) {
              let H = v.error;
              j.reject(new Y.ResponseError(H.code, H.message, H.data));
            } else if (v.result !== void 0) j.resolve(v.result);
            else throw new Error("Should never happen.");
          } catch (H) {
            H.message ? i.error(`Response handler '${j.method}' failed with message: ${H.message}`) : i.error(`Response handler '${j.method}' failed unexpectedly.`);
          }
        }
      }
    }
    async function Gi(v) {
      if (Vt()) return;
      let q, j;
      if (v.method === is.type.method) {
        let H = v.params.id;
        T.delete(H), jn(v);
        return;
      } else {
        let H = y.get(v.method);
        H && (j = H.handler, q = H.type);
      }
      if (j || g) try {
        if (jn(v), j) if (v.params === void 0) q !== void 0 && q.numberOfParams !== 0 && q.parameterStructures !== Y.ParameterStructures.byName && i.error(`Notification ${v.method} defines ${q.numberOfParams} params but received none.`), await j();
        else if (Array.isArray(v.params)) {
          let H = v.params;
          v.method === ns.type.method && H.length === 2 && Hc.is(H[0]) ? await j({ token: H[0], value: H[1] }) : (q !== void 0 && (q.parameterStructures === Y.ParameterStructures.byName && i.error(`Notification ${v.method} defines parameters by name but received parameters by position`), q.numberOfParams !== v.params.length && i.error(`Notification ${v.method} defines ${q.numberOfParams} params but received ${H.length} arguments`)), await j(...H));
        } else q !== void 0 && q.parameterStructures === Y.ParameterStructures.byPosition && i.error(`Notification ${v.method} defines parameters by position but received parameters by name`), await j(v.params);
        else g && await g(v.method, v.params);
      } catch (H) {
        H.message ? i.error(`Notification handler '${v.method}' failed with message: ${H.message}`) : i.error(`Notification handler '${v.method}' failed unexpectedly.`);
      }
      else vt.fire(v);
    }
    function ai(v) {
      if (!v) {
        i.error("Received empty message.");
        return;
      }
      i.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(v, null, 4)}`);
      let q = v;
      if (Ie.string(q.id) || Ie.number(q.id)) {
        let j = q.id, H = C.get(j);
        H && H.reject(new Error("The received response has neither a result nor an error property."));
      }
    }
    function Ot(v) {
      if (v != null) switch (N) {
        case de.Verbose:
          return JSON.stringify(v, null, 4);
        case de.Compact:
          return JSON.stringify(v);
        default:
          return;
      }
    }
    function Xi(v) {
      if (!(N === de.Off || !Q)) if (J === xt.Text) {
        let q;
        (N === de.Verbose || N === de.Compact) && v.params && (q = `Params: ${Ot(v.params)}`), Q.log(`Sending request '${v.method} - (${v.id})'.`, q);
      } else ot("send-request", v);
    }
    function un(v) {
      if (!(N === de.Off || !Q)) if (J === xt.Text) {
        let q;
        (N === de.Verbose || N === de.Compact) && (v.params ? q = `Params: ${Ot(v.params)}` : q = "No parameters provided."), Q.log(`Sending notification '${v.method}'.`, q);
      } else ot("send-notification", v);
    }
    function hr(v, q, j) {
      if (!(N === de.Off || !Q)) if (J === xt.Text) {
        let H;
        (N === de.Verbose || N === de.Compact) && (v.error && v.error.data ? H = `Error data: ${Ot(v.error.data)}` : v.result ? H = `Result: ${Ot(v.result)}` : v.error === void 0 && (H = "No result returned.")), Q.log(`Sending response '${q} - (${v.id})'. Processing request took ${Date.now() - j}ms`, H);
      } else ot("send-response", v);
    }
    function pr(v) {
      if (!(N === de.Off || !Q)) if (J === xt.Text) {
        let q;
        (N === de.Verbose || N === de.Compact) && v.params && (q = `Params: ${Ot(v.params)}`), Q.log(`Received request '${v.method} - (${v.id})'.`, q);
      } else ot("receive-request", v);
    }
    function jn(v) {
      if (!(N === de.Off || !Q || v.method === ao.type.method)) if (J === xt.Text) {
        let q;
        (N === de.Verbose || N === de.Compact) && (v.params ? q = `Params: ${Ot(v.params)}` : q = "No parameters provided."), Q.log(`Received notification '${v.method}'.`, q);
      } else ot("receive-notification", v);
    }
    function ci(v, q) {
      if (!(N === de.Off || !Q)) if (J === xt.Text) {
        let j;
        if ((N === de.Verbose || N === de.Compact) && (v.error && v.error.data ? j = `Error data: ${Ot(v.error.data)}` : v.result ? j = `Result: ${Ot(v.result)}` : v.error === void 0 && (j = "No result returned.")), q) {
          let H = v.error ? ` Request failed: ${v.error.message} (${v.error.code}).` : "";
          Q.log(`Received response '${q.method} - (${v.id})' in ${Date.now() - q.timerStart}ms.${H}`, j);
        } else Q.log(`Received response ${v.id} without active response promise.`, j);
      } else ot("receive-response", v);
    }
    function ot(v, q) {
      if (!Q || N === de.Off) return;
      let j = { isLSPMessage: true, type: v, message: q, timestamp: Date.now() };
      Q.log(j);
    }
    function Gt() {
      if (Nn()) throw new mi(rs.Closed, "Connection is closed.");
      if (Vt()) throw new mi(rs.Disposed, "Connection is disposed.");
    }
    function at() {
      if (At()) throw new mi(rs.AlreadyListening, "Connection is already listening");
    }
    function Ji() {
      if (!At()) throw new Error("Call listen() first.");
    }
    function nt(v) {
      return v === void 0 ? null : v;
    }
    function Fn(v) {
      if (v !== null) return v;
    }
    function ui(v) {
      return v != null && !Array.isArray(v) && typeof v == "object";
    }
    function kr(v, q) {
      switch (v) {
        case Y.ParameterStructures.auto:
          return ui(q) ? Fn(q) : [nt(q)];
        case Y.ParameterStructures.byName:
          if (!ui(q)) throw new Error("Received parameters by name but param is not an object literal.");
          return Fn(q);
        case Y.ParameterStructures.byPosition:
          return [nt(q)];
        default:
          throw new Error(`Unknown parameter structure ${v.toString()}`);
      }
    }
    function gr(v, q) {
      let j, H = v.numberOfParams;
      switch (H) {
        case 0:
          j = void 0;
          break;
        case 1:
          j = kr(v.parameterStructures, q[0]);
          break;
        default:
          j = [];
          for (let re = 0; re < q.length && re < H; re++) j.push(nt(q[re]));
          if (q.length < H) for (let re = q.length; re < H; re++) j.push(null);
          break;
      }
      return j;
    }
    let kt = { sendNotification: (v, ...q) => {
      Gt();
      let j, H;
      if (Ie.string(v)) {
        j = v;
        let ue = q[0], ae = 0, qe = Y.ParameterStructures.auto;
        Y.ParameterStructures.is(ue) && (ae = 1, qe = ue);
        let He = q.length, me = He - ae;
        switch (me) {
          case 0:
            H = void 0;
            break;
          case 1:
            H = kr(qe, q[ae]);
            break;
          default:
            if (qe === Y.ParameterStructures.byName) throw new Error(`Received ${me} parameters for 'by Name' notification parameter structure.`);
            H = q.slice(ae, He).map((be) => nt(be));
            break;
        }
      } else {
        let ue = q;
        j = v.method, H = gr(v, ue);
      }
      let re = { jsonrpc: c, method: j, params: H };
      return un(re), e.write(re).catch((ue) => {
        throw i.error("Sending notification failed."), ue;
      });
    }, onNotification: (v, q) => {
      Gt();
      let j;
      return Ie.func(v) ? g = v : q && (Ie.string(v) ? (j = v, y.set(v, { type: void 0, handler: q })) : (j = v.method, y.set(v.method, { type: v, handler: q }))), { dispose: () => {
        j !== void 0 ? y.get(j)?.handler === q && y.delete(j) : g === v && (g = void 0);
      } };
    }, onProgress: (v, q, j) => {
      if (_.has(q)) throw new Error(`Progress handler for token ${q} already registered`);
      return _.set(q, j), { dispose: () => {
        _.get(q) === j && _.delete(q);
      } };
    }, sendProgress: (v, q, j) => kt.sendNotification(ns.type, { token: q, value: j }), onUnhandledProgress: ri.event, sendRequest: (v, ...q) => {
      Gt(), Ji();
      function j(be, ct) {
        let bt = Lt.sender.sendCancellation(be, ct);
        bt === void 0 ? i.log(`Received no promise from cancellation strategy when cancelling id ${ct}`) : bt.catch(() => {
          i.log(`Sending cancellation messages for id ${ct} failed.`);
        });
      }
      let H, re, ue;
      if (Ie.string(v)) {
        H = v;
        let be = q[0], ct = q[q.length - 1], bt = 0, Ln = Y.ParameterStructures.auto;
        Y.ParameterStructures.is(be) && (bt = 1, Ln = be);
        let Et = q.length;
        $c.CancellationToken.is(ct) && (Et = Et - 1, ue = ct);
        let Ct = Et - bt;
        switch (Ct) {
          case 0:
            re = void 0;
            break;
          case 1:
            re = kr(Ln, q[bt]);
            break;
          default:
            if (Ln === Y.ParameterStructures.byName) throw new Error(`Received ${Ct} parameters for 'by Name' request parameter structure.`);
            re = q.slice(bt, Et).map((li) => nt(li));
            break;
        }
      } else {
        let be = q;
        H = v.method, re = gr(v, be);
        let ct = v.numberOfParams;
        ue = $c.CancellationToken.is(be[ct]) ? be[ct] : void 0;
      }
      let ae = s++, qe, He = false;
      ue !== void 0 && (ue.isCancellationRequested ? He = true : qe = ue.onCancellationRequested(() => {
        j(kt, ae);
      }));
      let me = { jsonrpc: c, id: ae, method: H, params: re };
      return Xi(me), typeof Lt.sender.enableCancellation == "function" && Lt.sender.enableCancellation(me), new Promise(async (be, ct) => {
        let bt = (Ct) => {
          be(Ct), Lt.sender.cleanup(ae), qe?.dispose();
        }, Ln = (Ct) => {
          ct(Ct), Lt.sender.cleanup(ae), qe?.dispose();
        }, Et = { method: H, timerStart: Date.now(), resolve: bt, reject: Ln };
        try {
          C.set(ae, Et), await e.write(me), He && j(kt, ae);
        } catch (Ct) {
          throw C.delete(ae), Et.reject(new Y.ResponseError(Y.ErrorCodes.MessageWriteError, Ct.message ? Ct.message : "Unknown reason")), i.error("Sending request failed."), Ct;
        }
      });
    }, onRequest: (v, q) => {
      Gt();
      let j = null;
      return Wc.is(v) ? (j = void 0, h = v) : Ie.string(v) ? (j = null, q !== void 0 && (j = v, p.set(v, { handler: q, type: void 0 }))) : q !== void 0 && (j = v.method, p.set(v.method, { type: v, handler: q })), { dispose: () => {
        j !== null && (j !== void 0 ? p.get(j)?.handler === q && p.delete(j) : h === v && (h = void 0));
      } };
    }, hasPendingResponse: () => C.size > 0, trace: async (v, q, j) => {
      let H = false, re = xt.Text;
      j !== void 0 && (Ie.boolean(j) ? H = j : (H = j.sendNotification || false, re = j.traceFormat || xt.Text)), N = v, J = re, N === de.Off ? Q = void 0 : Q = q, H && !Nn() && !Vt() && await kt.sendNotification(Kc.type, { value: de.toString(v) });
    }, onError: Oe.event, onClose: Xe.event, onUnhandledNotification: vt.event, onDispose: ii.event, end: () => {
      e.end();
    }, dispose: () => {
      if (Vt()) return;
      te = Xt.Disposed, ii.fire(void 0);
      let v = new Y.ResponseError(Y.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
      for (let q of C.values()) q.reject(v);
      C = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Set(), S = new _p.LinkedMap(), Ie.func(e.dispose) && e.dispose(), Ie.func(n.dispose) && n.dispose();
    }, listen: () => {
      Gt(), at(), te = Xt.Listening, n.listen(lr);
    }, inspect: () => {
      (0, yp.default)().console.log("inspect");
    } };
    return kt.onNotification(ao.type, (v) => {
      if (N === de.Off || !Q) return;
      let q = N === de.Verbose || N === de.Compact;
      Q.log(v.message, q ? v.verbose : void 0);
    }), kt.onNotification(ns.type, async (v) => {
      let q = _.get(v.token);
      q ? await q(v.value) : ri.fire(v);
    }), kt;
  }
});
var Hn = O((R) => {
  "use strict";
  var KC = R && R.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(R, "__esModule", { value: true });
  R.ProgressType = R.ProgressToken = R.createMessageConnection = R.NullLogger = R.ConnectionOptions = R.ConnectionStrategy = R.AbstractMessageBuffer = R.WriteableStreamMessageWriter = R.AbstractMessageWriter = R.MessageWriter = R.ReadableStreamMessageReader = R.AbstractMessageReader = R.MessageReader = R.SharedArrayReceiverStrategy = R.SharedArraySenderStrategy = R.CancellationToken = R.CancellationTokenSource = R.Emitter = R.Event = R.Disposable = R.LRUCache = R.Touch = R.LinkedMap = R.ParameterStructures = R.NotificationType9 = R.NotificationType8 = R.NotificationType7 = R.NotificationType6 = R.NotificationType5 = R.NotificationType4 = R.NotificationType3 = R.NotificationType2 = R.NotificationType1 = R.NotificationType0 = R.NotificationType = R.ErrorCodes = R.ResponseError = R.RequestType9 = R.RequestType8 = R.RequestType7 = R.RequestType6 = R.RequestType5 = R.RequestType4 = R.RequestType3 = R.RequestType2 = R.RequestType1 = R.RequestType0 = R.RequestType = R.Message = R.RAL = void 0;
  R.MessageStrategy = R.CancellationStrategy = R.CancellationSenderStrategy = R.RequestCancellationReceiverStrategy = R.IdCancellationReceiverStrategy = R.CancellationReceiverStrategy = R.ConnectionError = R.ConnectionErrors = R.LogTraceNotification = R.SetTraceNotification = R.TraceFormat = R.TraceValues = R.TraceValue = R.Trace = void 0;
  var Ce = yc();
  Object.defineProperty(R, "Message", { enumerable: true, get: function() {
    return Ce.Message;
  } });
  Object.defineProperty(R, "RequestType", { enumerable: true, get: function() {
    return Ce.RequestType;
  } });
  Object.defineProperty(R, "RequestType0", { enumerable: true, get: function() {
    return Ce.RequestType0;
  } });
  Object.defineProperty(R, "RequestType1", { enumerable: true, get: function() {
    return Ce.RequestType1;
  } });
  Object.defineProperty(R, "RequestType2", { enumerable: true, get: function() {
    return Ce.RequestType2;
  } });
  Object.defineProperty(R, "RequestType3", { enumerable: true, get: function() {
    return Ce.RequestType3;
  } });
  Object.defineProperty(R, "RequestType4", { enumerable: true, get: function() {
    return Ce.RequestType4;
  } });
  Object.defineProperty(R, "RequestType5", { enumerable: true, get: function() {
    return Ce.RequestType5;
  } });
  Object.defineProperty(R, "RequestType6", { enumerable: true, get: function() {
    return Ce.RequestType6;
  } });
  Object.defineProperty(R, "RequestType7", { enumerable: true, get: function() {
    return Ce.RequestType7;
  } });
  Object.defineProperty(R, "RequestType8", { enumerable: true, get: function() {
    return Ce.RequestType8;
  } });
  Object.defineProperty(R, "RequestType9", { enumerable: true, get: function() {
    return Ce.RequestType9;
  } });
  Object.defineProperty(R, "ResponseError", { enumerable: true, get: function() {
    return Ce.ResponseError;
  } });
  Object.defineProperty(R, "ErrorCodes", { enumerable: true, get: function() {
    return Ce.ErrorCodes;
  } });
  Object.defineProperty(R, "NotificationType", { enumerable: true, get: function() {
    return Ce.NotificationType;
  } });
  Object.defineProperty(R, "NotificationType0", { enumerable: true, get: function() {
    return Ce.NotificationType0;
  } });
  Object.defineProperty(R, "NotificationType1", { enumerable: true, get: function() {
    return Ce.NotificationType1;
  } });
  Object.defineProperty(R, "NotificationType2", { enumerable: true, get: function() {
    return Ce.NotificationType2;
  } });
  Object.defineProperty(R, "NotificationType3", { enumerable: true, get: function() {
    return Ce.NotificationType3;
  } });
  Object.defineProperty(R, "NotificationType4", { enumerable: true, get: function() {
    return Ce.NotificationType4;
  } });
  Object.defineProperty(R, "NotificationType5", { enumerable: true, get: function() {
    return Ce.NotificationType5;
  } });
  Object.defineProperty(R, "NotificationType6", { enumerable: true, get: function() {
    return Ce.NotificationType6;
  } });
  Object.defineProperty(R, "NotificationType7", { enumerable: true, get: function() {
    return Ce.NotificationType7;
  } });
  Object.defineProperty(R, "NotificationType8", { enumerable: true, get: function() {
    return Ce.NotificationType8;
  } });
  Object.defineProperty(R, "NotificationType9", { enumerable: true, get: function() {
    return Ce.NotificationType9;
  } });
  Object.defineProperty(R, "ParameterStructures", { enumerable: true, get: function() {
    return Ce.ParameterStructures;
  } });
  var Gc = vc();
  Object.defineProperty(R, "LinkedMap", { enumerable: true, get: function() {
    return Gc.LinkedMap;
  } });
  Object.defineProperty(R, "LRUCache", { enumerable: true, get: function() {
    return Gc.LRUCache;
  } });
  Object.defineProperty(R, "Touch", { enumerable: true, get: function() {
    return Gc.Touch;
  } });
  var BC = op();
  Object.defineProperty(R, "Disposable", { enumerable: true, get: function() {
    return BC.Disposable;
  } });
  var Cp = fi();
  Object.defineProperty(R, "Event", { enumerable: true, get: function() {
    return Cp.Event;
  } });
  Object.defineProperty(R, "Emitter", { enumerable: true, get: function() {
    return Cp.Emitter;
  } });
  var wp = ro();
  Object.defineProperty(R, "CancellationTokenSource", { enumerable: true, get: function() {
    return wp.CancellationTokenSource;
  } });
  Object.defineProperty(R, "CancellationToken", { enumerable: true, get: function() {
    return wp.CancellationToken;
  } });
  var Dp = cp();
  Object.defineProperty(R, "SharedArraySenderStrategy", { enumerable: true, get: function() {
    return Dp.SharedArraySenderStrategy;
  } });
  Object.defineProperty(R, "SharedArrayReceiverStrategy", { enumerable: true, get: function() {
    return Dp.SharedArrayReceiverStrategy;
  } });
  var Xc = lp();
  Object.defineProperty(R, "MessageReader", { enumerable: true, get: function() {
    return Xc.MessageReader;
  } });
  Object.defineProperty(R, "AbstractMessageReader", { enumerable: true, get: function() {
    return Xc.AbstractMessageReader;
  } });
  Object.defineProperty(R, "ReadableStreamMessageReader", { enumerable: true, get: function() {
    return Xc.ReadableStreamMessageReader;
  } });
  var Jc = gp();
  Object.defineProperty(R, "MessageWriter", { enumerable: true, get: function() {
    return Jc.MessageWriter;
  } });
  Object.defineProperty(R, "AbstractMessageWriter", { enumerable: true, get: function() {
    return Jc.AbstractMessageWriter;
  } });
  Object.defineProperty(R, "WriteableStreamMessageWriter", { enumerable: true, get: function() {
    return Jc.WriteableStreamMessageWriter;
  } });
  var VC = mp();
  Object.defineProperty(R, "AbstractMessageBuffer", { enumerable: true, get: function() {
    return VC.AbstractMessageBuffer;
  } });
  var We = bp();
  Object.defineProperty(R, "ConnectionStrategy", { enumerable: true, get: function() {
    return We.ConnectionStrategy;
  } });
  Object.defineProperty(R, "ConnectionOptions", { enumerable: true, get: function() {
    return We.ConnectionOptions;
  } });
  Object.defineProperty(R, "NullLogger", { enumerable: true, get: function() {
    return We.NullLogger;
  } });
  Object.defineProperty(R, "createMessageConnection", { enumerable: true, get: function() {
    return We.createMessageConnection;
  } });
  Object.defineProperty(R, "ProgressToken", { enumerable: true, get: function() {
    return We.ProgressToken;
  } });
  Object.defineProperty(R, "ProgressType", { enumerable: true, get: function() {
    return We.ProgressType;
  } });
  Object.defineProperty(R, "Trace", { enumerable: true, get: function() {
    return We.Trace;
  } });
  Object.defineProperty(R, "TraceValue", { enumerable: true, get: function() {
    return We.TraceValue;
  } });
  Object.defineProperty(R, "TraceFormat", { enumerable: true, get: function() {
    return We.TraceFormat;
  } });
  Object.defineProperty(R, "SetTraceNotification", { enumerable: true, get: function() {
    return We.SetTraceNotification;
  } });
  Object.defineProperty(R, "LogTraceNotification", { enumerable: true, get: function() {
    return We.LogTraceNotification;
  } });
  Object.defineProperty(R, "ConnectionErrors", { enumerable: true, get: function() {
    return We.ConnectionErrors;
  } });
  Object.defineProperty(R, "ConnectionError", { enumerable: true, get: function() {
    return We.ConnectionError;
  } });
  Object.defineProperty(R, "CancellationReceiverStrategy", { enumerable: true, get: function() {
    return We.CancellationReceiverStrategy;
  } });
  Object.defineProperty(R, "IdCancellationReceiverStrategy", { enumerable: true, get: function() {
    return We.IdCancellationReceiverStrategy;
  } });
  Object.defineProperty(R, "RequestCancellationReceiverStrategy", { enumerable: true, get: function() {
    return We.RequestCancellationReceiverStrategy;
  } });
  Object.defineProperty(R, "CancellationSenderStrategy", { enumerable: true, get: function() {
    return We.CancellationSenderStrategy;
  } });
  Object.defineProperty(R, "CancellationStrategy", { enumerable: true, get: function() {
    return We.CancellationStrategy;
  } });
  Object.defineProperty(R, "MessageStrategy", { enumerable: true, get: function() {
    return We.MessageStrategy;
  } });
  Object.defineProperty(R, "TraceValues", { enumerable: true, get: function() {
    return We.TraceValues;
  } });
  var GC = KC(vr());
  R.RAL = GC.default;
});
var So = {};
Ba(So, { AnnotatedTextEdit: () => Un, ApplyKind: () => _u, ChangeAnnotation: () => Cr, ChangeAnnotationIdentifier: () => Je, CodeAction: () => Nu, CodeActionContext: () => Iu, CodeActionKind: () => Mu, CodeActionTag: () => bo, CodeActionTriggerKind: () => ds, CodeDescription: () => ou, CodeLens: () => ju, Color: () => go, ColorInformation: () => eu, ColorPresentation: () => tu, Command: () => Hr, CompletionItem: () => bu, CompletionItemKind: () => hu, CompletionItemLabelDetails: () => vu, CompletionItemTag: () => gu, CompletionList: () => Cu, CreateFile: () => _i, DeleteFile: () => bi, Diagnostic: () => as, DiagnosticRelatedInformation: () => mo, DiagnosticSeverity: () => iu, DiagnosticTag: () => su, DocumentHighlight: () => Ru, DocumentHighlightKind: () => Pu, DocumentLink: () => Lu, DocumentSymbol: () => qu, DocumentUri: () => Qc, EOL: () => XC, FoldingRange: () => ru, FoldingRangeKind: () => nu, FormattingOptions: () => Fu, Hover: () => wu, InlayHint: () => Bu, InlayHintKind: () => Co, InlayHintLabelPart: () => wo, InlineCompletionContext: () => Qu, InlineCompletionItem: () => Vu, InlineCompletionList: () => Gu, InlineCompletionTriggerKind: () => Xu, InlineValueContext: () => Ku, InlineValueEvaluatableExpression: () => zu, InlineValueText: () => Uu, InlineValueVariableLookup: () => Wu, InsertReplaceEdit: () => mu, InsertTextFormat: () => pu, InsertTextMode: () => yu, LanguageKind: () => du, Location: () => os, LocationLink: () => Zc, MarkedString: () => ls, MarkupContent: () => wr, MarkupKind: () => vo, OptionalVersionedTextDocumentIdentifier: () => us, ParameterInformation: () => Du, Position: () => Ht, Range: () => Ne, RenameFile: () => vi, SelectedCompletionInfo: () => Ju, SelectionRange: () => Au, SemanticTokenModifiers: () => $u, SemanticTokenTypes: () => ku, SemanticTokens: () => Hu, SignatureInformation: () => Su, SnippetTextEdit: () => au, StringValue: () => Do, SymbolInformation: () => Eu, SymbolKind: () => Tu, SymbolTag: () => Ou, TextDocument: () => Zu, TextDocumentEdit: () => cs, TextDocumentIdentifier: () => uu, TextDocumentItem: () => fu, TextEdit: () => ln, URI: () => po, VersionedTextDocumentIdentifier: () => lu, WorkspaceChange: () => cu, WorkspaceEdit: () => yo, WorkspaceFolder: () => Yu, WorkspaceSymbol: () => xu, integer: () => Yc, uinteger: () => ss });
var Qc, po, Yc, ss, Ht, Ne, os, Zc, go, eu, tu, nu, ru, mo, iu, su, ou, as, Hr, ln, Cr, Je, Un, cs, _i, vi, bi, yo, yi, au, _o, cu, uu, lu, us, du, fu, vo, wr, hu, pu, gu, mu, yu, _u, vu, bu, Cu, ls, wu, Du, Su, Pu, Ru, Tu, Ou, Eu, xu, qu, Mu, ds, Iu, bo, Nu, ju, Fu, Lu, Au, ku, $u, Hu, Uu, Wu, zu, Ku, Co, wo, Bu, Do, Vu, Gu, Xu, Ju, Qu, Yu, XC, Zu, el, w, Po = ep(() => {
  "use strict";
  (function(n) {
    function e(t) {
      return typeof t == "string";
    }
    n.is = e;
  })(Qc || (Qc = {}));
  (function(n) {
    function e(t) {
      return typeof t == "string";
    }
    n.is = e;
  })(po || (po = {}));
  (function(n) {
    n.MIN_VALUE = -2147483648, n.MAX_VALUE = 2147483647;
    function e(t) {
      return typeof t == "number" && n.MIN_VALUE <= t && t <= n.MAX_VALUE;
    }
    n.is = e;
  })(Yc || (Yc = {}));
  (function(n) {
    n.MIN_VALUE = 0, n.MAX_VALUE = 2147483647;
    function e(t) {
      return typeof t == "number" && n.MIN_VALUE <= t && t <= n.MAX_VALUE;
    }
    n.is = e;
  })(ss || (ss = {}));
  (function(n) {
    function e(r, i) {
      return r === Number.MAX_VALUE && (r = ss.MAX_VALUE), i === Number.MAX_VALUE && (i = ss.MAX_VALUE), { line: r, character: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.objectLiteral(i) && w.uinteger(i.line) && w.uinteger(i.character);
    }
    n.is = t;
  })(Ht || (Ht = {}));
  (function(n) {
    function e(r, i, s, o) {
      if (w.uinteger(r) && w.uinteger(i) && w.uinteger(s) && w.uinteger(o)) return { start: Ht.create(r, i), end: Ht.create(s, o) };
      if (Ht.is(r) && Ht.is(i)) return { start: r, end: i };
      throw new Error(`Range#create called with invalid arguments[${r}, ${i}, ${s}, ${o}]`);
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.objectLiteral(i) && Ht.is(i.start) && Ht.is(i.end);
    }
    n.is = t;
  })(Ne || (Ne = {}));
  (function(n) {
    function e(r, i) {
      return { uri: r, range: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.objectLiteral(i) && Ne.is(i.range) && (w.string(i.uri) || w.undefined(i.uri));
    }
    n.is = t;
  })(os || (os = {}));
  (function(n) {
    function e(r, i, s, o) {
      return { targetUri: r, targetRange: i, targetSelectionRange: s, originSelectionRange: o };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.objectLiteral(i) && Ne.is(i.targetRange) && w.string(i.targetUri) && Ne.is(i.targetSelectionRange) && (Ne.is(i.originSelectionRange) || w.undefined(i.originSelectionRange));
    }
    n.is = t;
  })(Zc || (Zc = {}));
  (function(n) {
    function e(r, i, s, o) {
      return { red: r, green: i, blue: s, alpha: o };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.objectLiteral(i) && w.numberRange(i.red, 0, 1) && w.numberRange(i.green, 0, 1) && w.numberRange(i.blue, 0, 1) && w.numberRange(i.alpha, 0, 1);
    }
    n.is = t;
  })(go || (go = {}));
  (function(n) {
    function e(r, i) {
      return { range: r, color: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.objectLiteral(i) && Ne.is(i.range) && go.is(i.color);
    }
    n.is = t;
  })(eu || (eu = {}));
  (function(n) {
    function e(r, i, s) {
      return { label: r, textEdit: i, additionalTextEdits: s };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.objectLiteral(i) && w.string(i.label) && (w.undefined(i.textEdit) || ln.is(i)) && (w.undefined(i.additionalTextEdits) || w.typedArray(i.additionalTextEdits, ln.is));
    }
    n.is = t;
  })(tu || (tu = {}));
  (function(n) {
    n.Comment = "comment", n.Imports = "imports", n.Region = "region";
  })(nu || (nu = {}));
  (function(n) {
    function e(r, i, s, o, a, c) {
      let u = { startLine: r, endLine: i };
      return w.defined(s) && (u.startCharacter = s), w.defined(o) && (u.endCharacter = o), w.defined(a) && (u.kind = a), w.defined(c) && (u.collapsedText = c), u;
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.objectLiteral(i) && w.uinteger(i.startLine) && w.uinteger(i.startLine) && (w.undefined(i.startCharacter) || w.uinteger(i.startCharacter)) && (w.undefined(i.endCharacter) || w.uinteger(i.endCharacter)) && (w.undefined(i.kind) || w.string(i.kind));
    }
    n.is = t;
  })(ru || (ru = {}));
  (function(n) {
    function e(r, i) {
      return { location: r, message: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.defined(i) && os.is(i.location) && w.string(i.message);
    }
    n.is = t;
  })(mo || (mo = {}));
  (function(n) {
    n.Error = 1, n.Warning = 2, n.Information = 3, n.Hint = 4;
  })(iu || (iu = {}));
  (function(n) {
    n.Unnecessary = 1, n.Deprecated = 2;
  })(su || (su = {}));
  (function(n) {
    function e(t) {
      let r = t;
      return w.objectLiteral(r) && w.string(r.href);
    }
    n.is = e;
  })(ou || (ou = {}));
  (function(n) {
    function e(s, o, a, c, u, d) {
      let h = { range: s, message: o };
      return w.defined(a) && (h.severity = a), w.defined(c) && (h.code = c), w.defined(u) && (h.source = u), w.defined(d) && (h.relatedInformation = d), h;
    }
    n.create = e;
    function t(s) {
      var o;
      let a = s;
      return w.defined(a) && Ne.is(a.range) && (w.string(a.message) || wr.is(a.message)) && (w.number(a.severity) || w.undefined(a.severity)) && (w.integer(a.code) || w.string(a.code) || w.undefined(a.code)) && (w.undefined(a.codeDescription) || w.string((o = a.codeDescription) === null || o === void 0 ? void 0 : o.href)) && (w.string(a.source) || w.undefined(a.source)) && (w.undefined(a.relatedInformation) || w.typedArray(a.relatedInformation, mo.is));
    }
    n.is = t;
    function r(s) {
      return w.string(s.message);
    }
    n.is3_17 = r;
    function i(s) {
      if (w.string(s.message)) return s.message;
      if (wr.is(s.message)) return s.message.value;
      throw new Error(`Unknown message type ${typeof s.message}`);
    }
    n.getMessageString = i;
  })(as || (as = {}));
  (function(n) {
    function e(r, i, ...s) {
      let o = { title: r, command: i };
      return w.defined(s) && s.length > 0 && (o.arguments = s), o;
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.defined(i) && w.string(i.title) && (i.tooltip === void 0 || w.string(i.tooltip)) && w.string(i.command);
    }
    n.is = t;
  })(Hr || (Hr = {}));
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
      return w.objectLiteral(o) && w.string(o.newText) && Ne.is(o.range);
    }
    n.is = i;
  })(ln || (ln = {}));
  (function(n) {
    function e(r, i, s) {
      let o = { label: r };
      return i !== void 0 && (o.needsConfirmation = i), s !== void 0 && (o.description = s), o;
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.objectLiteral(i) && w.string(i.label) && (w.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) && (w.string(i.description) || i.description === void 0);
    }
    n.is = t;
  })(Cr || (Cr = {}));
  (function(n) {
    function e(t) {
      let r = t;
      return w.string(r);
    }
    n.is = e;
  })(Je || (Je = {}));
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
      return ln.is(o) && (Cr.is(o.annotationId) || Je.is(o.annotationId));
    }
    n.is = i;
  })(Un || (Un = {}));
  (function(n) {
    function e(r, i) {
      return { textDocument: r, edits: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.defined(i) && us.is(i.textDocument) && Array.isArray(i.edits);
    }
    n.is = t;
  })(cs || (cs = {}));
  (function(n) {
    function e(r, i, s) {
      let o = { kind: "create", uri: r };
      return i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (o.options = i), s !== void 0 && (o.annotationId = s), o;
    }
    n.create = e;
    function t(r) {
      let i = r;
      return i && i.kind === "create" && w.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || w.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || w.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Je.is(i.annotationId));
    }
    n.is = t;
  })(_i || (_i = {}));
  (function(n) {
    function e(r, i, s, o) {
      let a = { kind: "rename", oldUri: r, newUri: i };
      return s !== void 0 && (s.overwrite !== void 0 || s.ignoreIfExists !== void 0) && (a.options = s), o !== void 0 && (a.annotationId = o), a;
    }
    n.create = e;
    function t(r) {
      let i = r;
      return i && i.kind === "rename" && w.string(i.oldUri) && w.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || w.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || w.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Je.is(i.annotationId));
    }
    n.is = t;
  })(vi || (vi = {}));
  (function(n) {
    function e(r, i, s) {
      let o = { kind: "delete", uri: r };
      return i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (o.options = i), s !== void 0 && (o.annotationId = s), o;
    }
    n.create = e;
    function t(r) {
      let i = r;
      return i && i.kind === "delete" && w.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || w.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || w.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || Je.is(i.annotationId));
    }
    n.is = t;
  })(bi || (bi = {}));
  (function(n) {
    function e(t) {
      let r = t;
      return r && (r.changes !== void 0 || r.documentChanges !== void 0) && (r.documentChanges === void 0 || r.documentChanges.every((i) => w.string(i.kind) ? _i.is(i) || vi.is(i) || bi.is(i) : cs.is(i)));
    }
    n.is = e;
  })(yo || (yo = {}));
  yi = class {
    constructor(e, t) {
      this.edits = e, this.changeAnnotations = t;
    }
    insert(e, t, r) {
      let i, s;
      if (r === void 0 ? i = ln.insert(e, t) : Je.is(r) ? (s = r, i = Un.insert(e, t, r)) : (this.assertChangeAnnotations(this.changeAnnotations), s = this.changeAnnotations.manage(r), i = Un.insert(e, t, s)), this.edits.push(i), s !== void 0) return s;
    }
    replace(e, t, r) {
      let i, s;
      if (r === void 0 ? i = ln.replace(e, t) : Je.is(r) ? (s = r, i = Un.replace(e, t, r)) : (this.assertChangeAnnotations(this.changeAnnotations), s = this.changeAnnotations.manage(r), i = Un.replace(e, t, s)), this.edits.push(i), s !== void 0) return s;
    }
    delete(e, t) {
      let r, i;
      if (t === void 0 ? r = ln.del(e) : Je.is(t) ? (i = t, r = Un.del(e, t)) : (this.assertChangeAnnotations(this.changeAnnotations), i = this.changeAnnotations.manage(t), r = Un.del(e, i)), this.edits.push(r), i !== void 0) return i;
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
      return w.objectLiteral(r) && Ne.is(r.range) && Do.isSnippet(r.snippet) && (r.annotationId === void 0 || Cr.is(r.annotationId) || Je.is(r.annotationId));
    }
    n.is = e;
  })(au || (au = {}));
  _o = class {
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
      if (Je.is(e) ? r = e : (r = this.nextId(), t = e), this._annotations[r] !== void 0) throw new Error(`Id ${r} is already in use.`);
      if (t === void 0) throw new Error(`No annotation provided for id ${r}`);
      return this._annotations[r] = t, this._size++, r;
    }
    nextId() {
      return this._counter++, this._counter.toString();
    }
  }, cu = class {
    constructor(e) {
      this._textEditChanges = /* @__PURE__ */ Object.create(null), e !== void 0 ? (this._workspaceEdit = e, e.documentChanges ? (this._changeAnnotations = new _o(e.changeAnnotations), e.changeAnnotations = this._changeAnnotations.all(), e.documentChanges.forEach((t) => {
        if (cs.is(t)) {
          let r = new yi(t.edits, this._changeAnnotations);
          this._textEditChanges[t.textDocument.uri] = r;
        }
      })) : e.changes && Object.keys(e.changes).forEach((t) => {
        let r = new yi(e.changes[t]);
        this._textEditChanges[t] = r;
      })) : this._workspaceEdit = {};
    }
    get edit() {
      return this.initDocumentChanges(), this._changeAnnotations !== void 0 && (this._changeAnnotations.size === 0 ? this._workspaceEdit.changeAnnotations = void 0 : this._workspaceEdit.changeAnnotations = this._changeAnnotations.all()), this._workspaceEdit;
    }
    getTextEditChange(e) {
      if (us.is(e)) {
        if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
        let t = { uri: e.uri, version: e.version }, r = this._textEditChanges[t.uri];
        if (!r) {
          let i = [], s = { textDocument: t, edits: i };
          this._workspaceEdit.documentChanges.push(s), r = new yi(i, this._changeAnnotations), this._textEditChanges[t.uri] = r;
        }
        return r;
      } else {
        if (this.initChanges(), this._workspaceEdit.changes === void 0) throw new Error("Workspace edit is not configured for normal text edit changes.");
        let t = this._textEditChanges[e];
        if (!t) {
          let r = [];
          this._workspaceEdit.changes[e] = r, t = new yi(r), this._textEditChanges[e] = t;
        }
        return t;
      }
    }
    initDocumentChanges() {
      this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._changeAnnotations = new _o(), this._workspaceEdit.documentChanges = [], this._workspaceEdit.changeAnnotations = this._changeAnnotations.all());
    }
    initChanges() {
      this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null));
    }
    createFile(e, t, r) {
      if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
      let i;
      Cr.is(t) || Je.is(t) ? i = t : r = t;
      let s, o;
      if (i === void 0 ? s = _i.create(e, r) : (o = Je.is(i) ? i : this._changeAnnotations.manage(i), s = _i.create(e, r, o)), this._workspaceEdit.documentChanges.push(s), o !== void 0) return o;
    }
    renameFile(e, t, r, i) {
      if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
      let s;
      Cr.is(r) || Je.is(r) ? s = r : i = r;
      let o, a;
      if (s === void 0 ? o = vi.create(e, t, i) : (a = Je.is(s) ? s : this._changeAnnotations.manage(s), o = vi.create(e, t, i, a)), this._workspaceEdit.documentChanges.push(o), a !== void 0) return a;
    }
    deleteFile(e, t, r) {
      if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
      let i;
      Cr.is(t) || Je.is(t) ? i = t : r = t;
      let s, o;
      if (i === void 0 ? s = bi.create(e, r) : (o = Je.is(i) ? i : this._changeAnnotations.manage(i), s = bi.create(e, r, o)), this._workspaceEdit.documentChanges.push(s), o !== void 0) return o;
    }
  };
  (function(n) {
    function e(r) {
      return { uri: r };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.defined(i) && w.string(i.uri);
    }
    n.is = t;
  })(uu || (uu = {}));
  (function(n) {
    function e(r, i) {
      return { uri: r, version: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.defined(i) && w.string(i.uri) && w.integer(i.version);
    }
    n.is = t;
  })(lu || (lu = {}));
  (function(n) {
    function e(r, i) {
      return { uri: r, version: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.defined(i) && w.string(i.uri) && (i.version === null || w.integer(i.version));
    }
    n.is = t;
  })(us || (us = {}));
  (function(n) {
    n.ABAP = "abap", n.WindowsBat = "bat", n.BibTeX = "bibtex", n.Clojure = "clojure", n.Coffeescript = "coffeescript", n.C = "c", n.CPP = "cpp", n.CSharp = "csharp", n.CSS = "css", n.D = "d", n.Delphi = "pascal", n.Diff = "diff", n.Dart = "dart", n.Dockerfile = "dockerfile", n.Elixir = "elixir", n.Erlang = "erlang", n.FSharp = "fsharp", n.GitCommit = "git-commit", n.GitRebase = "git-rebase", n.Go = "go", n.Groovy = "groovy", n.Handlebars = "handlebars", n.Haskell = "haskell", n.HTML = "html", n.Ini = "ini", n.Java = "java", n.JavaScript = "javascript", n.JavaScriptReact = "javascriptreact", n.JSON = "json", n.LaTeX = "latex", n.Less = "less", n.Lua = "lua", n.Makefile = "makefile", n.Markdown = "markdown", n.ObjectiveC = "objective-c", n.ObjectiveCPP = "objective-cpp", n.Pascal = "pascal", n.Perl = "perl", n.Perl6 = "perl6", n.PHP = "php", n.Plaintext = "plaintext", n.Powershell = "powershell", n.Pug = "jade", n.Python = "python", n.R = "r", n.Razor = "razor", n.Ruby = "ruby", n.Rust = "rust", n.SCSS = "scss", n.SASS = "sass", n.Scala = "scala", n.ShaderLab = "shaderlab", n.ShellScript = "shellscript", n.SQL = "sql", n.Swift = "swift", n.TypeScript = "typescript", n.TypeScriptReact = "typescriptreact", n.TeX = "tex", n.VisualBasic = "vb", n.XML = "xml", n.XSL = "xsl", n.YAML = "yaml";
  })(du || (du = {}));
  (function(n) {
    function e(r, i, s, o) {
      return { uri: r, languageId: i, version: s, text: o };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.defined(i) && w.string(i.uri) && w.string(i.languageId) && w.integer(i.version) && w.string(i.text);
    }
    n.is = t;
  })(fu || (fu = {}));
  (function(n) {
    n.PlainText = "plaintext", n.Markdown = "markdown";
    function e(t) {
      let r = t;
      return r === n.PlainText || r === n.Markdown;
    }
    n.is = e;
  })(vo || (vo = {}));
  (function(n) {
    function e(t) {
      let r = t;
      return w.objectLiteral(t) && vo.is(r.kind) && w.string(r.value);
    }
    n.is = e;
  })(wr || (wr = {}));
  (function(n) {
    n.Text = 1, n.Method = 2, n.Function = 3, n.Constructor = 4, n.Field = 5, n.Variable = 6, n.Class = 7, n.Interface = 8, n.Module = 9, n.Property = 10, n.Unit = 11, n.Value = 12, n.Enum = 13, n.Keyword = 14, n.Snippet = 15, n.Color = 16, n.File = 17, n.Reference = 18, n.Folder = 19, n.EnumMember = 20, n.Constant = 21, n.Struct = 22, n.Event = 23, n.Operator = 24, n.TypeParameter = 25;
  })(hu || (hu = {}));
  (function(n) {
    n.PlainText = 1, n.Snippet = 2;
  })(pu || (pu = {}));
  (function(n) {
    n.Deprecated = 1;
  })(gu || (gu = {}));
  (function(n) {
    function e(r, i, s) {
      return { newText: r, insert: i, replace: s };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return i && w.string(i.newText) && Ne.is(i.insert) && Ne.is(i.replace);
    }
    n.is = t;
  })(mu || (mu = {}));
  (function(n) {
    n.asIs = 1, n.adjustIndentation = 2;
  })(yu || (yu = {}));
  (function(n) {
    n.Replace = 1, n.Merge = 2;
  })(_u || (_u = {}));
  (function(n) {
    function e(t) {
      let r = t;
      return r && (w.string(r.detail) || r.detail === void 0) && (w.string(r.description) || r.description === void 0);
    }
    n.is = e;
  })(vu || (vu = {}));
  (function(n) {
    function e(t) {
      return { label: t };
    }
    n.create = e;
  })(bu || (bu = {}));
  (function(n) {
    function e(t, r) {
      return { items: t || [], isIncomplete: !!r };
    }
    n.create = e;
  })(Cu || (Cu = {}));
  (function(n) {
    function e(r) {
      return r.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }
    n.fromPlainText = e;
    function t(r) {
      let i = r;
      return w.string(i) || w.objectLiteral(i) && w.string(i.language) && w.string(i.value);
    }
    n.is = t;
  })(ls || (ls = {}));
  (function(n) {
    function e(t) {
      let r = t;
      return !!r && w.objectLiteral(r) && (wr.is(r.contents) || ls.is(r.contents) || w.typedArray(r.contents, ls.is)) && (t.range === void 0 || Ne.is(t.range));
    }
    n.is = e;
  })(wu || (wu = {}));
  (function(n) {
    function e(t, r) {
      return r ? { label: t, documentation: r } : { label: t };
    }
    n.create = e;
  })(Du || (Du = {}));
  (function(n) {
    function e(t, r, ...i) {
      let s = { label: t };
      return w.defined(r) && (s.documentation = r), w.defined(i) ? s.parameters = i : s.parameters = [], s;
    }
    n.create = e;
  })(Su || (Su = {}));
  (function(n) {
    n.Text = 1, n.Read = 2, n.Write = 3;
  })(Pu || (Pu = {}));
  (function(n) {
    function e(t, r) {
      let i = { range: t };
      return w.number(r) && (i.kind = r), i;
    }
    n.create = e;
  })(Ru || (Ru = {}));
  (function(n) {
    n.File = 1, n.Module = 2, n.Namespace = 3, n.Package = 4, n.Class = 5, n.Method = 6, n.Property = 7, n.Field = 8, n.Constructor = 9, n.Enum = 10, n.Interface = 11, n.Function = 12, n.Variable = 13, n.Constant = 14, n.String = 15, n.Number = 16, n.Boolean = 17, n.Array = 18, n.Object = 19, n.Key = 20, n.Null = 21, n.EnumMember = 22, n.Struct = 23, n.Event = 24, n.Operator = 25, n.TypeParameter = 26;
  })(Tu || (Tu = {}));
  (function(n) {
    n.Deprecated = 1;
  })(Ou || (Ou = {}));
  (function(n) {
    function e(t, r, i, s, o) {
      let a = { name: t, kind: r, location: { uri: s, range: i } };
      return o && (a.containerName = o), a;
    }
    n.create = e;
  })(Eu || (Eu = {}));
  (function(n) {
    function e(t, r, i, s) {
      return s !== void 0 ? { name: t, kind: r, location: { uri: i, range: s } } : { name: t, kind: r, location: { uri: i } };
    }
    n.create = e;
  })(xu || (xu = {}));
  (function(n) {
    function e(r, i, s, o, a, c) {
      let u = { name: r, detail: i, kind: s, range: o, selectionRange: a };
      return c !== void 0 && (u.children = c), u;
    }
    n.create = e;
    function t(r) {
      let i = r;
      return i && w.string(i.name) && w.number(i.kind) && Ne.is(i.range) && Ne.is(i.selectionRange) && (i.detail === void 0 || w.string(i.detail)) && (i.deprecated === void 0 || w.boolean(i.deprecated)) && (i.children === void 0 || Array.isArray(i.children)) && (i.tags === void 0 || Array.isArray(i.tags));
    }
    n.is = t;
  })(qu || (qu = {}));
  (function(n) {
    n.Empty = "", n.QuickFix = "quickfix", n.Refactor = "refactor", n.RefactorExtract = "refactor.extract", n.RefactorInline = "refactor.inline", n.RefactorMove = "refactor.move", n.RefactorRewrite = "refactor.rewrite", n.Source = "source", n.SourceOrganizeImports = "source.organizeImports", n.SourceFixAll = "source.fixAll", n.Notebook = "notebook";
  })(Mu || (Mu = {}));
  (function(n) {
    n.Invoked = 1, n.Automatic = 2;
  })(ds || (ds = {}));
  (function(n) {
    function e(r, i, s) {
      let o = { diagnostics: r };
      return i != null && (o.only = i), s != null && (o.triggerKind = s), o;
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.defined(i) && w.typedArray(i.diagnostics, as.is) && (i.only === void 0 || w.typedArray(i.only, w.string)) && (i.triggerKind === void 0 || i.triggerKind === ds.Invoked || i.triggerKind === ds.Automatic);
    }
    n.is = t;
  })(Iu || (Iu = {}));
  (function(n) {
    n.LLMGenerated = 1;
    function e(t) {
      return w.defined(t) && t === n.LLMGenerated;
    }
    n.is = e;
  })(bo || (bo = {}));
  (function(n) {
    function e(r, i, s) {
      let o = { title: r }, a = true;
      return typeof i == "string" ? (a = false, o.kind = i) : Hr.is(i) ? o.command = i : o.edit = i, a && s !== void 0 && (o.kind = s), o;
    }
    n.create = e;
    function t(r) {
      let i = r;
      return i && w.string(i.title) && (i.diagnostics === void 0 || w.typedArray(i.diagnostics, as.is)) && (i.kind === void 0 || w.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || Hr.is(i.command)) && (i.isPreferred === void 0 || w.boolean(i.isPreferred)) && (i.edit === void 0 || yo.is(i.edit)) && (i.tags === void 0 || w.typedArray(i.tags, bo.is));
    }
    n.is = t;
  })(Nu || (Nu = {}));
  (function(n) {
    function e(r, i) {
      let s = { range: r };
      return w.defined(i) && (s.data = i), s;
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.defined(i) && Ne.is(i.range) && (w.undefined(i.command) || Hr.is(i.command));
    }
    n.is = t;
  })(ju || (ju = {}));
  (function(n) {
    function e(r, i) {
      return { tabSize: r, insertSpaces: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.defined(i) && w.uinteger(i.tabSize) && w.boolean(i.insertSpaces);
    }
    n.is = t;
  })(Fu || (Fu = {}));
  (function(n) {
    function e(r, i, s) {
      return { range: r, target: i, data: s };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.defined(i) && Ne.is(i.range) && (w.undefined(i.target) || w.string(i.target));
    }
    n.is = t;
  })(Lu || (Lu = {}));
  (function(n) {
    function e(r, i) {
      return { range: r, parent: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.objectLiteral(i) && Ne.is(i.range) && (i.parent === void 0 || n.is(i.parent));
    }
    n.is = t;
  })(Au || (Au = {}));
  (function(n) {
    n.namespace = "namespace", n.type = "type", n.class = "class", n.enum = "enum", n.interface = "interface", n.struct = "struct", n.typeParameter = "typeParameter", n.parameter = "parameter", n.variable = "variable", n.property = "property", n.enumMember = "enumMember", n.event = "event", n.function = "function", n.method = "method", n.macro = "macro", n.keyword = "keyword", n.modifier = "modifier", n.comment = "comment", n.string = "string", n.number = "number", n.regexp = "regexp", n.operator = "operator", n.decorator = "decorator", n.label = "label";
  })(ku || (ku = {}));
  (function(n) {
    n.declaration = "declaration", n.definition = "definition", n.readonly = "readonly", n.static = "static", n.deprecated = "deprecated", n.abstract = "abstract", n.async = "async", n.modification = "modification", n.documentation = "documentation", n.defaultLibrary = "defaultLibrary";
  })($u || ($u = {}));
  (function(n) {
    function e(t) {
      let r = t;
      return w.objectLiteral(r) && (r.resultId === void 0 || typeof r.resultId == "string") && Array.isArray(r.data) && (r.data.length === 0 || typeof r.data[0] == "number");
    }
    n.is = e;
  })(Hu || (Hu = {}));
  (function(n) {
    function e(r, i) {
      return { range: r, text: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return i != null && Ne.is(i.range) && w.string(i.text);
    }
    n.is = t;
  })(Uu || (Uu = {}));
  (function(n) {
    function e(r, i, s) {
      return { range: r, variableName: i, caseSensitiveLookup: s };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return i != null && Ne.is(i.range) && w.boolean(i.caseSensitiveLookup) && (w.string(i.variableName) || i.variableName === void 0);
    }
    n.is = t;
  })(Wu || (Wu = {}));
  (function(n) {
    function e(r, i) {
      return { range: r, expression: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return i != null && Ne.is(i.range) && (w.string(i.expression) || i.expression === void 0);
    }
    n.is = t;
  })(zu || (zu = {}));
  (function(n) {
    function e(r, i) {
      return { frameId: r, stoppedLocation: i };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.defined(i) && Ne.is(r.stoppedLocation);
    }
    n.is = t;
  })(Ku || (Ku = {}));
  (function(n) {
    n.Type = 1, n.Parameter = 2;
    function e(t) {
      return t === 1 || t === 2;
    }
    n.is = e;
  })(Co || (Co = {}));
  (function(n) {
    function e(r) {
      return { value: r };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.objectLiteral(i) && (i.tooltip === void 0 || w.string(i.tooltip) || wr.is(i.tooltip)) && (i.location === void 0 || os.is(i.location)) && (i.command === void 0 || Hr.is(i.command));
    }
    n.is = t;
  })(wo || (wo = {}));
  (function(n) {
    function e(r, i, s) {
      let o = { position: r, label: i };
      return s !== void 0 && (o.kind = s), o;
    }
    n.create = e;
    function t(r) {
      let i = r;
      return w.objectLiteral(i) && Ht.is(i.position) && (w.string(i.label) || w.typedArray(i.label, wo.is)) && (i.kind === void 0 || Co.is(i.kind)) && i.textEdits === void 0 || w.typedArray(i.textEdits, ln.is) && (i.tooltip === void 0 || w.string(i.tooltip) || wr.is(i.tooltip)) && (i.paddingLeft === void 0 || w.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || w.boolean(i.paddingRight));
    }
    n.is = t;
  })(Bu || (Bu = {}));
  (function(n) {
    function e(r) {
      return { kind: "snippet", value: r };
    }
    n.createSnippet = e;
    function t(r) {
      let i = r;
      return w.objectLiteral(i) && i.kind === "snippet" && w.string(i.value);
    }
    n.isSnippet = t;
  })(Do || (Do = {}));
  (function(n) {
    function e(t, r, i, s) {
      return { insertText: t, filterText: r, range: i, command: s };
    }
    n.create = e;
  })(Vu || (Vu = {}));
  (function(n) {
    function e(t) {
      return { items: t };
    }
    n.create = e;
  })(Gu || (Gu = {}));
  (function(n) {
    n.Invoked = 1, n.Automatic = 2;
  })(Xu || (Xu = {}));
  (function(n) {
    function e(t, r) {
      return { range: t, text: r };
    }
    n.create = e;
  })(Ju || (Ju = {}));
  (function(n) {
    function e(t, r) {
      return { triggerKind: t, selectedCompletionInfo: r };
    }
    n.create = e;
  })(Qu || (Qu = {}));
  (function(n) {
    function e(t) {
      let r = t;
      return w.objectLiteral(r) && po.is(r.uri) && w.string(r.name);
    }
    n.is = e;
  })(Yu || (Yu = {}));
  XC = [`
`, `\r
`, "\r"];
  (function(n) {
    function e(s, o, a, c) {
      return new el(s, o, a, c);
    }
    n.create = e;
    function t(s) {
      let o = s;
      return !!(w.defined(o) && w.string(o.uri) && (w.undefined(o.languageId) || w.string(o.languageId)) && w.uinteger(o.lineCount) && w.func(o.getText) && w.func(o.positionAt) && w.func(o.offsetAt));
    }
    n.is = t;
    function r(s, o) {
      let a = s.getText(), c = i(o, (d, h) => {
        let p = d.range.start.line - h.range.start.line;
        return p === 0 ? d.range.start.character - h.range.start.character : p;
      }), u = a.length;
      for (let d = c.length - 1; d >= 0; d--) {
        let h = c[d], p = s.offsetAt(h.range.start), g = s.offsetAt(h.range.end);
        if (g <= u) a = a.substring(0, p) + h.newText + a.substring(g, a.length);
        else throw new Error("Overlapping edit");
        u = p;
      }
      return a;
    }
    n.applyEdits = r;
    function i(s, o) {
      if (s.length <= 1) return s;
      let a = s.length / 2 | 0, c = s.slice(0, a), u = s.slice(a);
      i(c, o), i(u, o);
      let d = 0, h = 0, p = 0;
      for (; d < c.length && h < u.length; ) o(c[d], u[h]) <= 0 ? s[p++] = c[d++] : s[p++] = u[h++];
      for (; d < c.length; ) s[p++] = c[d++];
      for (; h < u.length; ) s[p++] = u[h++];
      return s;
    }
  })(Zu || (Zu = {}));
  el = class {
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
      if (i === 0) return Ht.create(0, e);
      for (; r < i; ) {
        let o = Math.floor((r + i) / 2);
        t[o] > e ? i = o : r = o + 1;
      }
      let s = r - 1;
      return Ht.create(s, e - t[s]);
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
    function t(g) {
      return typeof g < "u";
    }
    n.defined = t;
    function r(g) {
      return typeof g > "u";
    }
    n.undefined = r;
    function i(g) {
      return g === true || g === false;
    }
    n.boolean = i;
    function s(g) {
      return e.call(g) === "[object String]";
    }
    n.string = s;
    function o(g) {
      return e.call(g) === "[object Number]";
    }
    n.number = o;
    function a(g, y, _) {
      return e.call(g) === "[object Number]" && y <= g && g <= _;
    }
    n.numberRange = a;
    function c(g) {
      return e.call(g) === "[object Number]" && -2147483648 <= g && g <= 2147483647;
    }
    n.integer = c;
    function u(g) {
      return e.call(g) === "[object Number]" && 0 <= g && g <= 2147483647;
    }
    n.uinteger = u;
    function d(g) {
      return e.call(g) === "[object Function]";
    }
    n.func = d;
    function h(g) {
      return g !== null && typeof g == "object";
    }
    n.objectLiteral = h;
    function p(g, y) {
      return Array.isArray(g) && g.every(y);
    }
    n.typedArray = p;
  })(w || (w = {}));
});
var De = O((ft) => {
  "use strict";
  Object.defineProperty(ft, "__esModule", { value: true });
  ft.CM = ft.ProtocolNotificationType = ft.ProtocolNotificationType0 = ft.ProtocolRequestType = ft.ProtocolRequestType0 = ft.RegistrationType = ft.MessageDirection = void 0;
  var Ci = Hn(), Sp;
  (function(n) {
    n.clientToServer = "clientToServer", n.serverToClient = "serverToClient", n.both = "both";
  })(Sp || (ft.MessageDirection = Sp = {}));
  var tl = class {
    ____;
    method;
    constructor(e) {
      this.method = e;
    }
  };
  ft.RegistrationType = tl;
  var nl = class extends Ci.RequestType0 {
    __;
    ___;
    ____;
    _pr;
    constructor(e) {
      super(e);
    }
  };
  ft.ProtocolRequestType0 = nl;
  var rl = class extends Ci.RequestType {
    __;
    ___;
    ____;
    _pr;
    constructor(e) {
      super(e, Ci.ParameterStructures.byName);
    }
  };
  ft.ProtocolRequestType = rl;
  var il = class extends Ci.NotificationType0 {
    ___;
    ____;
    constructor(e) {
      super(e);
    }
  };
  ft.ProtocolNotificationType0 = il;
  var sl = class extends Ci.NotificationType {
    ___;
    ____;
    constructor(e) {
      super(e, Ci.ParameterStructures.byName);
    }
  };
  ft.ProtocolNotificationType = sl;
  var Pp;
  (function(n) {
    function e(t, r) {
      return { client: t, server: r };
    }
    n.create = e;
  })(Pp || (ft.CM = Pp = {}));
});
var Ro = O((Jt) => {
  "use strict";
  Object.defineProperty(Jt, "__esModule", { value: true });
  Jt.boolean = JC;
  Jt.string = Rp;
  Jt.number = QC;
  Jt.error = YC;
  Jt.func = ZC;
  Jt.array = Tp;
  Jt.stringArray = ew;
  Jt.typedArray = tw;
  Jt.objectLiteral = nw;
  function JC(n) {
    return n === true || n === false;
  }
  function Rp(n) {
    return typeof n == "string" || n instanceof String;
  }
  function QC(n) {
    return typeof n == "number" || n instanceof Number;
  }
  function YC(n) {
    return n instanceof Error;
  }
  function ZC(n) {
    return typeof n == "function";
  }
  function Tp(n) {
    return Array.isArray(n);
  }
  function ew(n) {
    return Tp(n) && n.every((e) => Rp(e));
  }
  function tw(n, e) {
    return Array.isArray(n) && n.every(e);
  }
  function nw(n) {
    return n !== null && typeof n == "object";
  }
});
var Ep = O((To) => {
  "use strict";
  Object.defineProperty(To, "__esModule", { value: true });
  To.ImplementationRequest = void 0;
  var ol = De(), Op;
  (function(n) {
    n.method = "textDocument/implementation", n.messageDirection = ol.MessageDirection.clientToServer, n.type = new ol.ProtocolRequestType(n.method), n.capabilities = ol.CM.create("textDocument.implementation", "implementationProvider");
  })(Op || (To.ImplementationRequest = Op = {}));
});
var qp = O((Oo) => {
  "use strict";
  Object.defineProperty(Oo, "__esModule", { value: true });
  Oo.TypeDefinitionRequest = void 0;
  var al = De(), xp;
  (function(n) {
    n.method = "textDocument/typeDefinition", n.messageDirection = al.MessageDirection.clientToServer, n.type = new al.ProtocolRequestType(n.method), n.capabilities = al.CM.create("textDocument.typeDefinition", "typeDefinitionProvider");
  })(xp || (Oo.TypeDefinitionRequest = xp = {}));
});
var Np = O((Di) => {
  "use strict";
  Object.defineProperty(Di, "__esModule", { value: true });
  Di.DidChangeWorkspaceFoldersNotification = Di.WorkspaceFoldersRequest = void 0;
  var wi = De(), Mp;
  (function(n) {
    n.method = "workspace/workspaceFolders", n.messageDirection = wi.MessageDirection.serverToClient, n.type = new wi.ProtocolRequestType0(n.method), n.capabilities = wi.CM.create("workspace.workspaceFolders", "workspace.workspaceFolders");
  })(Mp || (Di.WorkspaceFoldersRequest = Mp = {}));
  var Ip;
  (function(n) {
    n.method = "workspace/didChangeWorkspaceFolders", n.messageDirection = wi.MessageDirection.clientToServer, n.type = new wi.ProtocolNotificationType(n.method), n.capabilities = wi.CM.create(void 0, "workspace.workspaceFolders.changeNotifications");
  })(Ip || (Di.DidChangeWorkspaceFoldersNotification = Ip = {}));
});
var Fp = O((Eo) => {
  "use strict";
  Object.defineProperty(Eo, "__esModule", { value: true });
  Eo.ConfigurationRequest = void 0;
  var cl = De(), jp;
  (function(n) {
    n.method = "workspace/configuration", n.messageDirection = cl.MessageDirection.serverToClient, n.type = new cl.ProtocolRequestType(n.method), n.capabilities = cl.CM.create("workspace.configuration", void 0);
  })(jp || (Eo.ConfigurationRequest = jp = {}));
});
var kp = O((Pi) => {
  "use strict";
  Object.defineProperty(Pi, "__esModule", { value: true });
  Pi.ColorPresentationRequest = Pi.DocumentColorRequest = void 0;
  var Si = De(), Lp;
  (function(n) {
    n.method = "textDocument/documentColor", n.messageDirection = Si.MessageDirection.clientToServer, n.type = new Si.ProtocolRequestType(n.method), n.capabilities = Si.CM.create("textDocument.colorProvider", "colorProvider");
  })(Lp || (Pi.DocumentColorRequest = Lp = {}));
  var Ap;
  (function(n) {
    n.method = "textDocument/colorPresentation", n.messageDirection = Si.MessageDirection.clientToServer, n.type = new Si.ProtocolRequestType(n.method), n.capabilities = Si.CM.create("textDocument.colorProvider", "colorProvider");
  })(Ap || (Pi.ColorPresentationRequest = Ap = {}));
});
var Up = O((Ti) => {
  "use strict";
  Object.defineProperty(Ti, "__esModule", { value: true });
  Ti.FoldingRangeRefreshRequest = Ti.FoldingRangeRequest = void 0;
  var Ri = De(), $p;
  (function(n) {
    n.method = "textDocument/foldingRange", n.messageDirection = Ri.MessageDirection.clientToServer, n.type = new Ri.ProtocolRequestType(n.method), n.capabilities = Ri.CM.create("textDocument.foldingRange", "foldingRangeProvider");
  })($p || (Ti.FoldingRangeRequest = $p = {}));
  var Hp;
  (function(n) {
    n.method = "workspace/foldingRange/refresh", n.messageDirection = Ri.MessageDirection.serverToClient, n.type = new Ri.ProtocolRequestType0(n.method), n.capabilities = Ri.CM.create("workspace.foldingRange.refreshSupport", void 0);
  })(Hp || (Ti.FoldingRangeRefreshRequest = Hp = {}));
});
var zp = O((xo) => {
  "use strict";
  Object.defineProperty(xo, "__esModule", { value: true });
  xo.DeclarationRequest = void 0;
  var ul = De(), Wp;
  (function(n) {
    n.method = "textDocument/declaration", n.messageDirection = ul.MessageDirection.clientToServer, n.type = new ul.ProtocolRequestType(n.method), n.capabilities = ul.CM.create("textDocument.declaration", "declarationProvider");
  })(Wp || (xo.DeclarationRequest = Wp = {}));
});
var Bp = O((qo) => {
  "use strict";
  Object.defineProperty(qo, "__esModule", { value: true });
  qo.SelectionRangeRequest = void 0;
  var ll = De(), Kp;
  (function(n) {
    n.method = "textDocument/selectionRange", n.messageDirection = ll.MessageDirection.clientToServer, n.type = new ll.ProtocolRequestType(n.method), n.capabilities = ll.CM.create("textDocument.selectionRange", "selectionRangeProvider");
  })(Kp || (qo.SelectionRangeRequest = Kp = {}));
});
var Jp = O((Dr) => {
  "use strict";
  Object.defineProperty(Dr, "__esModule", { value: true });
  Dr.WorkDoneProgressCancelNotification = Dr.WorkDoneProgressCreateRequest = Dr.WorkDoneProgress = void 0;
  var rw = Hn(), fs = De(), Vp;
  (function(n) {
    n.type = new rw.ProgressType();
    function e(t) {
      return t === n.type;
    }
    n.is = e;
  })(Vp || (Dr.WorkDoneProgress = Vp = {}));
  var Gp;
  (function(n) {
    n.method = "window/workDoneProgress/create", n.messageDirection = fs.MessageDirection.serverToClient, n.type = new fs.ProtocolRequestType(n.method), n.capabilities = fs.CM.create("window.workDoneProgress", void 0);
  })(Gp || (Dr.WorkDoneProgressCreateRequest = Gp = {}));
  var Xp;
  (function(n) {
    n.method = "window/workDoneProgress/cancel", n.messageDirection = fs.MessageDirection.clientToServer, n.type = new fs.ProtocolNotificationType(n.method);
  })(Xp || (Dr.WorkDoneProgressCancelNotification = Xp = {}));
});
var eg = O((Sr) => {
  "use strict";
  Object.defineProperty(Sr, "__esModule", { value: true });
  Sr.CallHierarchyOutgoingCallsRequest = Sr.CallHierarchyIncomingCallsRequest = Sr.CallHierarchyPrepareRequest = void 0;
  var Wn = De(), Qp;
  (function(n) {
    n.method = "textDocument/prepareCallHierarchy", n.messageDirection = Wn.MessageDirection.clientToServer, n.type = new Wn.ProtocolRequestType(n.method), n.capabilities = Wn.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
  })(Qp || (Sr.CallHierarchyPrepareRequest = Qp = {}));
  var Yp;
  (function(n) {
    n.method = "callHierarchy/incomingCalls", n.messageDirection = Wn.MessageDirection.clientToServer, n.type = new Wn.ProtocolRequestType(n.method), n.capabilities = Wn.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
  })(Yp || (Sr.CallHierarchyIncomingCallsRequest = Yp = {}));
  var Zp;
  (function(n) {
    n.method = "callHierarchy/outgoingCalls", n.messageDirection = Wn.MessageDirection.clientToServer, n.type = new Wn.ProtocolRequestType(n.method), n.capabilities = Wn.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
  })(Zp || (Sr.CallHierarchyOutgoingCallsRequest = Zp = {}));
});
var og = O((St) => {
  "use strict";
  Object.defineProperty(St, "__esModule", { value: true });
  St.SemanticTokensRefreshRequest = St.SemanticTokensRangeRequest = St.SemanticTokensDeltaRequest = St.SemanticTokensRequest = St.SemanticTokensRegistrationType = St.TokenFormat = void 0;
  var qt = De(), tg;
  (function(n) {
    n.Relative = "relative";
  })(tg || (St.TokenFormat = tg = {}));
  var hs;
  (function(n) {
    n.method = "textDocument/semanticTokens", n.type = new qt.RegistrationType(n.method);
  })(hs || (St.SemanticTokensRegistrationType = hs = {}));
  var ng;
  (function(n) {
    n.method = "textDocument/semanticTokens/full", n.messageDirection = qt.MessageDirection.clientToServer, n.type = new qt.ProtocolRequestType(n.method), n.registrationMethod = hs.method, n.capabilities = qt.CM.create("textDocument.semanticTokens", "semanticTokensProvider");
  })(ng || (St.SemanticTokensRequest = ng = {}));
  var rg;
  (function(n) {
    n.method = "textDocument/semanticTokens/full/delta", n.messageDirection = qt.MessageDirection.clientToServer, n.type = new qt.ProtocolRequestType(n.method), n.registrationMethod = hs.method, n.capabilities = qt.CM.create("textDocument.semanticTokens.requests.full.delta", "semanticTokensProvider.full.delta");
  })(rg || (St.SemanticTokensDeltaRequest = rg = {}));
  var ig;
  (function(n) {
    n.method = "textDocument/semanticTokens/range", n.messageDirection = qt.MessageDirection.clientToServer, n.type = new qt.ProtocolRequestType(n.method), n.registrationMethod = hs.method, n.capabilities = qt.CM.create("textDocument.semanticTokens.requests.range", "semanticTokensProvider.range");
  })(ig || (St.SemanticTokensRangeRequest = ig = {}));
  var sg;
  (function(n) {
    n.method = "workspace/semanticTokens/refresh", n.messageDirection = qt.MessageDirection.serverToClient, n.type = new qt.ProtocolRequestType0(n.method), n.capabilities = qt.CM.create("workspace.semanticTokens.refreshSupport", void 0);
  })(sg || (St.SemanticTokensRefreshRequest = sg = {}));
});
var cg = O((Mo) => {
  "use strict";
  Object.defineProperty(Mo, "__esModule", { value: true });
  Mo.ShowDocumentRequest = void 0;
  var dl = De(), ag;
  (function(n) {
    n.method = "window/showDocument", n.messageDirection = dl.MessageDirection.serverToClient, n.type = new dl.ProtocolRequestType(n.method), n.capabilities = dl.CM.create("window.showDocument.support", void 0);
  })(ag || (Mo.ShowDocumentRequest = ag = {}));
});
var lg = O((Io) => {
  "use strict";
  Object.defineProperty(Io, "__esModule", { value: true });
  Io.LinkedEditingRangeRequest = void 0;
  var fl = De(), ug;
  (function(n) {
    n.method = "textDocument/linkedEditingRange", n.messageDirection = fl.MessageDirection.clientToServer, n.type = new fl.ProtocolRequestType(n.method), n.capabilities = fl.CM.create("textDocument.linkedEditingRange", "linkedEditingRangeProvider");
  })(ug || (Io.LinkedEditingRangeRequest = ug = {}));
});
var _g = O((ht) => {
  "use strict";
  Object.defineProperty(ht, "__esModule", { value: true });
  ht.WillDeleteFilesRequest = ht.DidDeleteFilesNotification = ht.DidRenameFilesNotification = ht.WillRenameFilesRequest = ht.DidCreateFilesNotification = ht.WillCreateFilesRequest = ht.FileOperationPatternKind = void 0;
  var Qe = De(), dg;
  (function(n) {
    n.file = "file", n.folder = "folder";
  })(dg || (ht.FileOperationPatternKind = dg = {}));
  var fg;
  (function(n) {
    n.method = "workspace/willCreateFiles", n.messageDirection = Qe.MessageDirection.clientToServer, n.type = new Qe.ProtocolRequestType(n.method), n.capabilities = Qe.CM.create("workspace.fileOperations.willCreate", "workspace.fileOperations.willCreate");
  })(fg || (ht.WillCreateFilesRequest = fg = {}));
  var hg;
  (function(n) {
    n.method = "workspace/didCreateFiles", n.messageDirection = Qe.MessageDirection.clientToServer, n.type = new Qe.ProtocolNotificationType(n.method), n.capabilities = Qe.CM.create("workspace.fileOperations.didCreate", "workspace.fileOperations.didCreate");
  })(hg || (ht.DidCreateFilesNotification = hg = {}));
  var pg;
  (function(n) {
    n.method = "workspace/willRenameFiles", n.messageDirection = Qe.MessageDirection.clientToServer, n.type = new Qe.ProtocolRequestType(n.method), n.capabilities = Qe.CM.create("workspace.fileOperations.willRename", "workspace.fileOperations.willRename");
  })(pg || (ht.WillRenameFilesRequest = pg = {}));
  var gg;
  (function(n) {
    n.method = "workspace/didRenameFiles", n.messageDirection = Qe.MessageDirection.clientToServer, n.type = new Qe.ProtocolNotificationType(n.method), n.capabilities = Qe.CM.create("workspace.fileOperations.didRename", "workspace.fileOperations.didRename");
  })(gg || (ht.DidRenameFilesNotification = gg = {}));
  var mg;
  (function(n) {
    n.method = "workspace/didDeleteFiles", n.messageDirection = Qe.MessageDirection.clientToServer, n.type = new Qe.ProtocolNotificationType(n.method), n.capabilities = Qe.CM.create("workspace.fileOperations.didDelete", "workspace.fileOperations.didDelete");
  })(mg || (ht.DidDeleteFilesNotification = mg = {}));
  var yg;
  (function(n) {
    n.method = "workspace/willDeleteFiles", n.messageDirection = Qe.MessageDirection.clientToServer, n.type = new Qe.ProtocolRequestType(n.method), n.capabilities = Qe.CM.create("workspace.fileOperations.willDelete", "workspace.fileOperations.willDelete");
  })(yg || (ht.WillDeleteFilesRequest = yg = {}));
});
var wg = O((Pr) => {
  "use strict";
  Object.defineProperty(Pr, "__esModule", { value: true });
  Pr.MonikerRequest = Pr.MonikerKind = Pr.UniquenessLevel = void 0;
  var hl = De(), vg;
  (function(n) {
    n.document = "document", n.project = "project", n.group = "group", n.scheme = "scheme", n.global = "global";
  })(vg || (Pr.UniquenessLevel = vg = {}));
  var bg;
  (function(n) {
    n.$import = "import", n.$export = "export", n.local = "local";
  })(bg || (Pr.MonikerKind = bg = {}));
  var Cg;
  (function(n) {
    n.method = "textDocument/moniker", n.messageDirection = hl.MessageDirection.clientToServer, n.type = new hl.ProtocolRequestType(n.method), n.capabilities = hl.CM.create("textDocument.moniker", "monikerProvider");
  })(Cg || (Pr.MonikerRequest = Cg = {}));
});
var Rg = O((Rr) => {
  "use strict";
  Object.defineProperty(Rr, "__esModule", { value: true });
  Rr.TypeHierarchySubtypesRequest = Rr.TypeHierarchySupertypesRequest = Rr.TypeHierarchyPrepareRequest = void 0;
  var Ur = De(), Dg;
  (function(n) {
    n.method = "textDocument/prepareTypeHierarchy", n.messageDirection = Ur.MessageDirection.clientToServer, n.type = new Ur.ProtocolRequestType(n.method), n.capabilities = Ur.CM.create("textDocument.typeHierarchy", "typeHierarchyProvider");
  })(Dg || (Rr.TypeHierarchyPrepareRequest = Dg = {}));
  var Sg;
  (function(n) {
    n.method = "typeHierarchy/supertypes", n.messageDirection = Ur.MessageDirection.clientToServer, n.type = new Ur.ProtocolRequestType(n.method);
  })(Sg || (Rr.TypeHierarchySupertypesRequest = Sg = {}));
  var Pg;
  (function(n) {
    n.method = "typeHierarchy/subtypes", n.messageDirection = Ur.MessageDirection.clientToServer, n.type = new Ur.ProtocolRequestType(n.method);
  })(Pg || (Rr.TypeHierarchySubtypesRequest = Pg = {}));
});
var Eg = O((Ei) => {
  "use strict";
  Object.defineProperty(Ei, "__esModule", { value: true });
  Ei.InlineValueRefreshRequest = Ei.InlineValueRequest = void 0;
  var Oi = De(), Tg;
  (function(n) {
    n.method = "textDocument/inlineValue", n.messageDirection = Oi.MessageDirection.clientToServer, n.type = new Oi.ProtocolRequestType(n.method), n.capabilities = Oi.CM.create("textDocument.inlineValue", "inlineValueProvider");
  })(Tg || (Ei.InlineValueRequest = Tg = {}));
  var Og;
  (function(n) {
    n.method = "workspace/inlineValue/refresh", n.messageDirection = Oi.MessageDirection.serverToClient, n.type = new Oi.ProtocolRequestType0(n.method), n.capabilities = Oi.CM.create("workspace.inlineValue.refreshSupport", void 0);
  })(Og || (Ei.InlineValueRefreshRequest = Og = {}));
});
var Ig = O((Tr) => {
  "use strict";
  Object.defineProperty(Tr, "__esModule", { value: true });
  Tr.InlayHintRefreshRequest = Tr.InlayHintResolveRequest = Tr.InlayHintRequest = void 0;
  var zn = De(), xg;
  (function(n) {
    n.method = "textDocument/inlayHint", n.messageDirection = zn.MessageDirection.clientToServer, n.type = new zn.ProtocolRequestType(n.method), n.capabilities = zn.CM.create("textDocument.inlayHint", "inlayHintProvider");
  })(xg || (Tr.InlayHintRequest = xg = {}));
  var qg;
  (function(n) {
    n.method = "inlayHint/resolve", n.messageDirection = zn.MessageDirection.clientToServer, n.type = new zn.ProtocolRequestType(n.method), n.capabilities = zn.CM.create("textDocument.inlayHint.resolveSupport", "inlayHintProvider.resolveProvider");
  })(qg || (Tr.InlayHintResolveRequest = qg = {}));
  var Mg;
  (function(n) {
    n.method = "workspace/inlayHint/refresh", n.messageDirection = zn.MessageDirection.serverToClient, n.type = new zn.ProtocolRequestType0(n.method), n.capabilities = zn.CM.create("workspace.inlayHint.refreshSupport", void 0);
  })(Mg || (Tr.InlayHintRefreshRequest = Mg = {}));
});
var $g = O((Ye) => {
  "use strict";
  var iw = Ye && Ye.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), sw = Ye && Ye.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), ow = Ye && Ye.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && iw(t, e, r[i]);
      return sw(t, e), t;
    };
  })();
  Object.defineProperty(Ye, "__esModule", { value: true });
  Ye.DiagnosticRefreshRequest = Ye.WorkspaceDiagnosticRequest = Ye.DocumentDiagnosticRequest = Ye.DocumentDiagnosticReportKind = Ye.DiagnosticServerCancellationData = void 0;
  var kg = Hn(), aw = ow(Ro()), Kn = De(), Ng;
  (function(n) {
    function e(t) {
      let r = t;
      return r && aw.boolean(r.retriggerRequest);
    }
    n.is = e;
  })(Ng || (Ye.DiagnosticServerCancellationData = Ng = {}));
  var jg;
  (function(n) {
    n.Full = "full", n.Unchanged = "unchanged";
  })(jg || (Ye.DocumentDiagnosticReportKind = jg = {}));
  var Fg;
  (function(n) {
    n.method = "textDocument/diagnostic", n.messageDirection = Kn.MessageDirection.clientToServer, n.type = new Kn.ProtocolRequestType(n.method), n.partialResult = new kg.ProgressType(), n.capabilities = Kn.CM.create("textDocument.diagnostic", "diagnosticProvider");
  })(Fg || (Ye.DocumentDiagnosticRequest = Fg = {}));
  var Lg;
  (function(n) {
    n.method = "workspace/diagnostic", n.messageDirection = Kn.MessageDirection.clientToServer, n.type = new Kn.ProtocolRequestType(n.method), n.partialResult = new kg.ProgressType(), n.capabilities = Kn.CM.create("workspace.diagnostics", "diagnosticProvider.workspaceDiagnostics");
  })(Lg || (Ye.WorkspaceDiagnosticRequest = Lg = {}));
  var Ag;
  (function(n) {
    n.method = "workspace/diagnostic/refresh", n.messageDirection = Kn.MessageDirection.serverToClient, n.type = new Kn.ProtocolRequestType0(n.method), n.capabilities = Kn.CM.create("workspace.diagnostics.refreshSupport", void 0);
  })(Ag || (Ye.DiagnosticRefreshRequest = Ag = {}));
});
var Vg = O((he) => {
  "use strict";
  var cw = he && he.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), uw = he && he.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), lw = he && he.__importStar || /* @__PURE__ */ (function() {
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
  Object.defineProperty(he, "__esModule", { value: true });
  he.DidCloseNotebookDocumentNotification = he.DidSaveNotebookDocumentNotification = he.DidChangeNotebookDocumentNotification = he.NotebookCellArrayChange = he.DidOpenNotebookDocumentNotification = he.NotebookDocumentSyncRegistrationType = he.NotebookDocument = he.NotebookCell = he.ExecutionSummary = he.NotebookCellKind = void 0;
  var ps = (Po(), Yi(So)), Qt = lw(Ro()), dn = De(), pl;
  (function(n) {
    n.Markup = 1, n.Code = 2;
    function e(t) {
      return t === 1 || t === 2;
    }
    n.is = e;
  })(pl || (he.NotebookCellKind = pl = {}));
  var gl;
  (function(n) {
    function e(i, s) {
      let o = { executionOrder: i };
      return (s === true || s === false) && (o.success = s), o;
    }
    n.create = e;
    function t(i) {
      let s = i;
      return Qt.objectLiteral(s) && ps.uinteger.is(s.executionOrder) && (s.success === void 0 || Qt.boolean(s.success));
    }
    n.is = t;
    function r(i, s) {
      return i === s ? true : i == null || s === null || s === void 0 ? false : i.executionOrder === s.executionOrder && i.success === s.success;
    }
    n.equals = r;
  })(gl || (he.ExecutionSummary = gl = {}));
  var No;
  (function(n) {
    function e(s, o) {
      return { kind: s, document: o };
    }
    n.create = e;
    function t(s) {
      let o = s;
      return Qt.objectLiteral(o) && pl.is(o.kind) && ps.DocumentUri.is(o.document) && (o.metadata === void 0 || Qt.objectLiteral(o.metadata));
    }
    n.is = t;
    function r(s, o) {
      let a = /* @__PURE__ */ new Set();
      return s.document !== o.document && a.add("document"), s.kind !== o.kind && a.add("kind"), s.executionSummary !== o.executionSummary && a.add("executionSummary"), (s.metadata !== void 0 || o.metadata !== void 0) && !i(s.metadata, o.metadata) && a.add("metadata"), (s.executionSummary !== void 0 || o.executionSummary !== void 0) && !gl.equals(s.executionSummary, o.executionSummary) && a.add("executionSummary"), a;
    }
    n.diff = r;
    function i(s, o) {
      if (s === o) return true;
      if (s == null || o === null || o === void 0 || typeof s != typeof o || typeof s != "object") return false;
      let a = Array.isArray(s), c = Array.isArray(o);
      if (a !== c) return false;
      if (a && c) {
        if (s.length !== o.length) return false;
        for (let u = 0; u < s.length; u++) if (!i(s[u], o[u])) return false;
      }
      if (Qt.objectLiteral(s) && Qt.objectLiteral(o)) {
        let u = Object.keys(s), d = Object.keys(o);
        if (u.length !== d.length || (u.sort(), d.sort(), !i(u, d))) return false;
        for (let h = 0; h < u.length; h++) {
          let p = u[h];
          if (!i(s[p], o[p])) return false;
        }
      }
      return true;
    }
  })(No || (he.NotebookCell = No = {}));
  var Hg;
  (function(n) {
    function e(r, i, s, o) {
      return { uri: r, notebookType: i, version: s, cells: o };
    }
    n.create = e;
    function t(r) {
      let i = r;
      return Qt.objectLiteral(i) && Qt.string(i.uri) && ps.integer.is(i.version) && Qt.typedArray(i.cells, No.is);
    }
    n.is = t;
  })(Hg || (he.NotebookDocument = Hg = {}));
  var xi;
  (function(n) {
    n.method = "notebookDocument/sync", n.messageDirection = dn.MessageDirection.clientToServer, n.type = new dn.RegistrationType(n.method);
  })(xi || (he.NotebookDocumentSyncRegistrationType = xi = {}));
  var Ug;
  (function(n) {
    n.method = "notebookDocument/didOpen", n.messageDirection = dn.MessageDirection.clientToServer, n.type = new dn.ProtocolNotificationType(n.method), n.registrationMethod = xi.method;
  })(Ug || (he.DidOpenNotebookDocumentNotification = Ug = {}));
  var Wg;
  (function(n) {
    function e(r) {
      let i = r;
      return Qt.objectLiteral(i) && ps.uinteger.is(i.start) && ps.uinteger.is(i.deleteCount) && (i.cells === void 0 || Qt.typedArray(i.cells, No.is));
    }
    n.is = e;
    function t(r, i, s) {
      let o = { start: r, deleteCount: i };
      return s !== void 0 && (o.cells = s), o;
    }
    n.create = t;
  })(Wg || (he.NotebookCellArrayChange = Wg = {}));
  var zg;
  (function(n) {
    n.method = "notebookDocument/didChange", n.messageDirection = dn.MessageDirection.clientToServer, n.type = new dn.ProtocolNotificationType(n.method), n.registrationMethod = xi.method;
  })(zg || (he.DidChangeNotebookDocumentNotification = zg = {}));
  var Kg;
  (function(n) {
    n.method = "notebookDocument/didSave", n.messageDirection = dn.MessageDirection.clientToServer, n.type = new dn.ProtocolNotificationType(n.method), n.registrationMethod = xi.method;
  })(Kg || (he.DidSaveNotebookDocumentNotification = Kg = {}));
  var Bg;
  (function(n) {
    n.method = "notebookDocument/didClose", n.messageDirection = dn.MessageDirection.clientToServer, n.type = new dn.ProtocolNotificationType(n.method), n.registrationMethod = xi.method;
  })(Bg || (he.DidCloseNotebookDocumentNotification = Bg = {}));
});
var Xg = O((jo) => {
  "use strict";
  Object.defineProperty(jo, "__esModule", { value: true });
  jo.InlineCompletionRequest = void 0;
  var ml = De(), Gg;
  (function(n) {
    n.method = "textDocument/inlineCompletion", n.messageDirection = ml.MessageDirection.clientToServer, n.type = new ml.ProtocolRequestType(n.method), n.capabilities = ml.CM.create("textDocument.inlineCompletion", "inlineCompletionProvider");
  })(Gg || (jo.InlineCompletionRequest = Gg = {}));
});
var Yg = O((qi) => {
  "use strict";
  Object.defineProperty(qi, "__esModule", { value: true });
  qi.TextDocumentContentRefreshRequest = qi.TextDocumentContentRequest = void 0;
  var gs = De(), Jg;
  (function(n) {
    n.method = "workspace/textDocumentContent", n.messageDirection = gs.MessageDirection.clientToServer, n.type = new gs.ProtocolRequestType(n.method), n.capabilities = gs.CM.create("workspace.textDocumentContent", "workspace.textDocumentContent");
  })(Jg || (qi.TextDocumentContentRequest = Jg = {}));
  var Qg;
  (function(n) {
    n.method = "workspace/textDocumentContent/refresh", n.messageDirection = gs.MessageDirection.serverToClient, n.type = new gs.ProtocolRequestType(n.method);
  })(Qg || (qi.TextDocumentContentRefreshRequest = Qg = {}));
});
var fy = O((m) => {
  "use strict";
  var dw = m && m.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), fw = m && m.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), hw = m && m.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && dw(t, e, r[i]);
      return fw(t, e), t;
    };
  })();
  Object.defineProperty(m, "__esModule", { value: true });
  m.CodeActionRequest = m.DocumentSymbolRequest = m.DocumentHighlightRequest = m.ReferencesRequest = m.DefinitionRequest = m.SignatureHelpRequest = m.SignatureHelpTriggerKind = m.HoverRequest = m.CompletionResolveRequest = m.CompletionRequest = m.CompletionTriggerKind = m.PublishDiagnosticsNotification = m.WatchKind = m.GlobPattern = m.RelativePattern = m.FileChangeType = m.DidChangeWatchedFilesNotification = m.WillSaveTextDocumentWaitUntilRequest = m.WillSaveTextDocumentNotification = m.TextDocumentSaveReason = m.DidSaveTextDocumentNotification = m.DidCloseTextDocumentNotification = m.DidChangeTextDocumentNotification = m.TextDocumentContentChangeEvent = m.DidOpenTextDocumentNotification = m.TextDocumentSyncKind = m.TelemetryEventNotification = m.LogMessageNotification = m.ShowMessageRequest = m.ShowMessageNotification = m.MessageType = m.DidChangeConfigurationNotification = m.ExitNotification = m.ShutdownRequest = m.InitializedNotification = m.InitializeErrorCodes = m.InitializeRequest = m.WorkDoneProgressOptions = m.TextDocumentRegistrationOptions = m.StaticRegistrationOptions = m.PositionEncodingKind = m.RegularExpressionEngineKind = m.FailureHandlingKind = m.ResourceOperationKind = m.UnregistrationRequest = m.RegistrationRequest = m.DocumentSelector = m.NotebookCellTextDocumentFilter = m.NotebookDocumentFilter = m.TextDocumentFilter = void 0;
  m.UniquenessLevel = m.WillDeleteFilesRequest = m.DidDeleteFilesNotification = m.WillRenameFilesRequest = m.DidRenameFilesNotification = m.WillCreateFilesRequest = m.DidCreateFilesNotification = m.FileOperationPatternKind = m.LinkedEditingRangeRequest = m.ShowDocumentRequest = m.SemanticTokensRegistrationType = m.SemanticTokensRefreshRequest = m.SemanticTokensRangeRequest = m.SemanticTokensDeltaRequest = m.SemanticTokensRequest = m.TokenFormat = m.CallHierarchyPrepareRequest = m.CallHierarchyOutgoingCallsRequest = m.CallHierarchyIncomingCallsRequest = m.WorkDoneProgressCancelNotification = m.WorkDoneProgressCreateRequest = m.WorkDoneProgress = m.SelectionRangeRequest = m.DeclarationRequest = m.FoldingRangeRefreshRequest = m.FoldingRangeRequest = m.ColorPresentationRequest = m.DocumentColorRequest = m.ConfigurationRequest = m.DidChangeWorkspaceFoldersNotification = m.WorkspaceFoldersRequest = m.TypeDefinitionRequest = m.ImplementationRequest = m.ApplyWorkspaceEditRequest = m.ExecuteCommandRequest = m.PrepareRenameRequest = m.RenameRequest = m.PrepareSupportDefaultBehavior = m.DocumentOnTypeFormattingRequest = m.DocumentRangesFormattingRequest = m.DocumentRangeFormattingRequest = m.DocumentFormattingRequest = m.DocumentLinkResolveRequest = m.DocumentLinkRequest = m.CodeLensRefreshRequest = m.CodeLensResolveRequest = m.CodeLensRequest = m.WorkspaceSymbolResolveRequest = m.WorkspaceSymbolRequest = m.CodeActionResolveRequest = void 0;
  m.TextDocumentContentRefreshRequest = m.TextDocumentContentRequest = m.InlineCompletionRequest = m.DidCloseNotebookDocumentNotification = m.DidSaveNotebookDocumentNotification = m.DidChangeNotebookDocumentNotification = m.NotebookCellArrayChange = m.DidOpenNotebookDocumentNotification = m.NotebookDocumentSyncRegistrationType = m.NotebookDocument = m.NotebookCell = m.ExecutionSummary = m.NotebookCellKind = m.DiagnosticRefreshRequest = m.WorkspaceDiagnosticRequest = m.DocumentDiagnosticRequest = m.DocumentDiagnosticReportKind = m.DiagnosticServerCancellationData = m.InlayHintRefreshRequest = m.InlayHintResolveRequest = m.InlayHintRequest = m.InlineValueRefreshRequest = m.InlineValueRequest = m.TypeHierarchySupertypesRequest = m.TypeHierarchySubtypesRequest = m.TypeHierarchyPrepareRequest = m.MonikerRequest = m.MonikerKind = void 0;
  var x = De(), Zg = (Po(), Yi(So)), Ze = hw(Ro()), pw = Ep();
  Object.defineProperty(m, "ImplementationRequest", { enumerable: true, get: function() {
    return pw.ImplementationRequest;
  } });
  var gw = qp();
  Object.defineProperty(m, "TypeDefinitionRequest", { enumerable: true, get: function() {
    return gw.TypeDefinitionRequest;
  } });
  var ay = Np();
  Object.defineProperty(m, "WorkspaceFoldersRequest", { enumerable: true, get: function() {
    return ay.WorkspaceFoldersRequest;
  } });
  Object.defineProperty(m, "DidChangeWorkspaceFoldersNotification", { enumerable: true, get: function() {
    return ay.DidChangeWorkspaceFoldersNotification;
  } });
  var mw = Fp();
  Object.defineProperty(m, "ConfigurationRequest", { enumerable: true, get: function() {
    return mw.ConfigurationRequest;
  } });
  var cy = kp();
  Object.defineProperty(m, "DocumentColorRequest", { enumerable: true, get: function() {
    return cy.DocumentColorRequest;
  } });
  Object.defineProperty(m, "ColorPresentationRequest", { enumerable: true, get: function() {
    return cy.ColorPresentationRequest;
  } });
  var uy = Up();
  Object.defineProperty(m, "FoldingRangeRequest", { enumerable: true, get: function() {
    return uy.FoldingRangeRequest;
  } });
  Object.defineProperty(m, "FoldingRangeRefreshRequest", { enumerable: true, get: function() {
    return uy.FoldingRangeRefreshRequest;
  } });
  var yw = zp();
  Object.defineProperty(m, "DeclarationRequest", { enumerable: true, get: function() {
    return yw.DeclarationRequest;
  } });
  var _w = Bp();
  Object.defineProperty(m, "SelectionRangeRequest", { enumerable: true, get: function() {
    return _w.SelectionRangeRequest;
  } });
  var Dl = Jp();
  Object.defineProperty(m, "WorkDoneProgress", { enumerable: true, get: function() {
    return Dl.WorkDoneProgress;
  } });
  Object.defineProperty(m, "WorkDoneProgressCreateRequest", { enumerable: true, get: function() {
    return Dl.WorkDoneProgressCreateRequest;
  } });
  Object.defineProperty(m, "WorkDoneProgressCancelNotification", { enumerable: true, get: function() {
    return Dl.WorkDoneProgressCancelNotification;
  } });
  var Sl = eg();
  Object.defineProperty(m, "CallHierarchyIncomingCallsRequest", { enumerable: true, get: function() {
    return Sl.CallHierarchyIncomingCallsRequest;
  } });
  Object.defineProperty(m, "CallHierarchyOutgoingCallsRequest", { enumerable: true, get: function() {
    return Sl.CallHierarchyOutgoingCallsRequest;
  } });
  Object.defineProperty(m, "CallHierarchyPrepareRequest", { enumerable: true, get: function() {
    return Sl.CallHierarchyPrepareRequest;
  } });
  var Mi = og();
  Object.defineProperty(m, "TokenFormat", { enumerable: true, get: function() {
    return Mi.TokenFormat;
  } });
  Object.defineProperty(m, "SemanticTokensRequest", { enumerable: true, get: function() {
    return Mi.SemanticTokensRequest;
  } });
  Object.defineProperty(m, "SemanticTokensDeltaRequest", { enumerable: true, get: function() {
    return Mi.SemanticTokensDeltaRequest;
  } });
  Object.defineProperty(m, "SemanticTokensRangeRequest", { enumerable: true, get: function() {
    return Mi.SemanticTokensRangeRequest;
  } });
  Object.defineProperty(m, "SemanticTokensRefreshRequest", { enumerable: true, get: function() {
    return Mi.SemanticTokensRefreshRequest;
  } });
  Object.defineProperty(m, "SemanticTokensRegistrationType", { enumerable: true, get: function() {
    return Mi.SemanticTokensRegistrationType;
  } });
  var vw = cg();
  Object.defineProperty(m, "ShowDocumentRequest", { enumerable: true, get: function() {
    return vw.ShowDocumentRequest;
  } });
  var bw = lg();
  Object.defineProperty(m, "LinkedEditingRangeRequest", { enumerable: true, get: function() {
    return bw.LinkedEditingRangeRequest;
  } });
  var Wr = _g();
  Object.defineProperty(m, "FileOperationPatternKind", { enumerable: true, get: function() {
    return Wr.FileOperationPatternKind;
  } });
  Object.defineProperty(m, "DidCreateFilesNotification", { enumerable: true, get: function() {
    return Wr.DidCreateFilesNotification;
  } });
  Object.defineProperty(m, "WillCreateFilesRequest", { enumerable: true, get: function() {
    return Wr.WillCreateFilesRequest;
  } });
  Object.defineProperty(m, "DidRenameFilesNotification", { enumerable: true, get: function() {
    return Wr.DidRenameFilesNotification;
  } });
  Object.defineProperty(m, "WillRenameFilesRequest", { enumerable: true, get: function() {
    return Wr.WillRenameFilesRequest;
  } });
  Object.defineProperty(m, "DidDeleteFilesNotification", { enumerable: true, get: function() {
    return Wr.DidDeleteFilesNotification;
  } });
  Object.defineProperty(m, "WillDeleteFilesRequest", { enumerable: true, get: function() {
    return Wr.WillDeleteFilesRequest;
  } });
  var Pl = wg();
  Object.defineProperty(m, "UniquenessLevel", { enumerable: true, get: function() {
    return Pl.UniquenessLevel;
  } });
  Object.defineProperty(m, "MonikerKind", { enumerable: true, get: function() {
    return Pl.MonikerKind;
  } });
  Object.defineProperty(m, "MonikerRequest", { enumerable: true, get: function() {
    return Pl.MonikerRequest;
  } });
  var Rl = Rg();
  Object.defineProperty(m, "TypeHierarchyPrepareRequest", { enumerable: true, get: function() {
    return Rl.TypeHierarchyPrepareRequest;
  } });
  Object.defineProperty(m, "TypeHierarchySubtypesRequest", { enumerable: true, get: function() {
    return Rl.TypeHierarchySubtypesRequest;
  } });
  Object.defineProperty(m, "TypeHierarchySupertypesRequest", { enumerable: true, get: function() {
    return Rl.TypeHierarchySupertypesRequest;
  } });
  var ly = Eg();
  Object.defineProperty(m, "InlineValueRequest", { enumerable: true, get: function() {
    return ly.InlineValueRequest;
  } });
  Object.defineProperty(m, "InlineValueRefreshRequest", { enumerable: true, get: function() {
    return ly.InlineValueRefreshRequest;
  } });
  var Tl = Ig();
  Object.defineProperty(m, "InlayHintRequest", { enumerable: true, get: function() {
    return Tl.InlayHintRequest;
  } });
  Object.defineProperty(m, "InlayHintResolveRequest", { enumerable: true, get: function() {
    return Tl.InlayHintResolveRequest;
  } });
  Object.defineProperty(m, "InlayHintRefreshRequest", { enumerable: true, get: function() {
    return Tl.InlayHintRefreshRequest;
  } });
  var ms = $g();
  Object.defineProperty(m, "DiagnosticServerCancellationData", { enumerable: true, get: function() {
    return ms.DiagnosticServerCancellationData;
  } });
  Object.defineProperty(m, "DocumentDiagnosticReportKind", { enumerable: true, get: function() {
    return ms.DocumentDiagnosticReportKind;
  } });
  Object.defineProperty(m, "DocumentDiagnosticRequest", { enumerable: true, get: function() {
    return ms.DocumentDiagnosticRequest;
  } });
  Object.defineProperty(m, "WorkspaceDiagnosticRequest", { enumerable: true, get: function() {
    return ms.WorkspaceDiagnosticRequest;
  } });
  Object.defineProperty(m, "DiagnosticRefreshRequest", { enumerable: true, get: function() {
    return ms.DiagnosticRefreshRequest;
  } });
  var fn = Vg();
  Object.defineProperty(m, "NotebookCellKind", { enumerable: true, get: function() {
    return fn.NotebookCellKind;
  } });
  Object.defineProperty(m, "ExecutionSummary", { enumerable: true, get: function() {
    return fn.ExecutionSummary;
  } });
  Object.defineProperty(m, "NotebookCell", { enumerable: true, get: function() {
    return fn.NotebookCell;
  } });
  Object.defineProperty(m, "NotebookDocument", { enumerable: true, get: function() {
    return fn.NotebookDocument;
  } });
  Object.defineProperty(m, "NotebookDocumentSyncRegistrationType", { enumerable: true, get: function() {
    return fn.NotebookDocumentSyncRegistrationType;
  } });
  Object.defineProperty(m, "DidOpenNotebookDocumentNotification", { enumerable: true, get: function() {
    return fn.DidOpenNotebookDocumentNotification;
  } });
  Object.defineProperty(m, "NotebookCellArrayChange", { enumerable: true, get: function() {
    return fn.NotebookCellArrayChange;
  } });
  Object.defineProperty(m, "DidChangeNotebookDocumentNotification", { enumerable: true, get: function() {
    return fn.DidChangeNotebookDocumentNotification;
  } });
  Object.defineProperty(m, "DidSaveNotebookDocumentNotification", { enumerable: true, get: function() {
    return fn.DidSaveNotebookDocumentNotification;
  } });
  Object.defineProperty(m, "DidCloseNotebookDocumentNotification", { enumerable: true, get: function() {
    return fn.DidCloseNotebookDocumentNotification;
  } });
  var Cw = Xg();
  Object.defineProperty(m, "InlineCompletionRequest", { enumerable: true, get: function() {
    return Cw.InlineCompletionRequest;
  } });
  var dy = Yg();
  Object.defineProperty(m, "TextDocumentContentRequest", { enumerable: true, get: function() {
    return dy.TextDocumentContentRequest;
  } });
  Object.defineProperty(m, "TextDocumentContentRefreshRequest", { enumerable: true, get: function() {
    return dy.TextDocumentContentRefreshRequest;
  } });
  var yl;
  (function(n) {
    function e(t) {
      let r = t;
      return Ze.string(r) || Ze.string(r.language) || Ze.string(r.scheme) || wl.is(r.pattern);
    }
    n.is = e;
  })(yl || (m.TextDocumentFilter = yl = {}));
  var _l;
  (function(n) {
    function e(t) {
      let r = t;
      return Ze.objectLiteral(r) && (Ze.string(r.notebookType) || Ze.string(r.scheme) || Ze.string(r.pattern));
    }
    n.is = e;
  })(_l || (m.NotebookDocumentFilter = _l = {}));
  var vl;
  (function(n) {
    function e(t) {
      let r = t;
      return Ze.objectLiteral(r) && (Ze.string(r.notebook) || _l.is(r.notebook)) && (r.language === void 0 || Ze.string(r.language));
    }
    n.is = e;
  })(vl || (m.NotebookCellTextDocumentFilter = vl = {}));
  var bl;
  (function(n) {
    function e(t) {
      if (!Array.isArray(t)) return false;
      for (let r of t) if (!Ze.string(r) && !yl.is(r) && !vl.is(r)) return false;
      return true;
    }
    n.is = e;
  })(bl || (m.DocumentSelector = bl = {}));
  var em;
  (function(n) {
    n.method = "client/registerCapability", n.messageDirection = x.MessageDirection.serverToClient, n.type = new x.ProtocolRequestType(n.method);
  })(em || (m.RegistrationRequest = em = {}));
  var tm;
  (function(n) {
    n.method = "client/unregisterCapability", n.messageDirection = x.MessageDirection.serverToClient, n.type = new x.ProtocolRequestType(n.method);
  })(tm || (m.UnregistrationRequest = tm = {}));
  var nm;
  (function(n) {
    n.Create = "create", n.Rename = "rename", n.Delete = "delete";
  })(nm || (m.ResourceOperationKind = nm = {}));
  var rm;
  (function(n) {
    n.Abort = "abort", n.Transactional = "transactional", n.TextOnlyTransactional = "textOnlyTransactional", n.Undo = "undo";
  })(rm || (m.FailureHandlingKind = rm = {}));
  var im;
  (function(n) {
    n.ES2020 = "ES2020";
  })(im || (m.RegularExpressionEngineKind = im = {}));
  var sm;
  (function(n) {
    n.UTF8 = "utf-8", n.UTF16 = "utf-16", n.UTF32 = "utf-32";
  })(sm || (m.PositionEncodingKind = sm = {}));
  var om;
  (function(n) {
    function e(t) {
      let r = t;
      return r && Ze.string(r.id) && r.id.length > 0;
    }
    n.hasId = e;
  })(om || (m.StaticRegistrationOptions = om = {}));
  var am;
  (function(n) {
    function e(t) {
      let r = t;
      return r && (r.documentSelector === null || bl.is(r.documentSelector));
    }
    n.is = e;
  })(am || (m.TextDocumentRegistrationOptions = am = {}));
  var cm;
  (function(n) {
    function e(r) {
      let i = r;
      return Ze.objectLiteral(i) && (i.workDoneProgress === void 0 || Ze.boolean(i.workDoneProgress));
    }
    n.is = e;
    function t(r) {
      let i = r;
      return i && Ze.boolean(i.workDoneProgress);
    }
    n.hasWorkDoneProgress = t;
  })(cm || (m.WorkDoneProgressOptions = cm = {}));
  var um;
  (function(n) {
    n.method = "initialize", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method);
  })(um || (m.InitializeRequest = um = {}));
  var lm;
  (function(n) {
    n.unknownProtocolVersion = 1;
  })(lm || (m.InitializeErrorCodes = lm = {}));
  var dm;
  (function(n) {
    n.method = "initialized", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolNotificationType(n.method);
  })(dm || (m.InitializedNotification = dm = {}));
  var fm;
  (function(n) {
    n.method = "shutdown", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType0(n.method);
  })(fm || (m.ShutdownRequest = fm = {}));
  var hm;
  (function(n) {
    n.method = "exit", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolNotificationType0(n.method);
  })(hm || (m.ExitNotification = hm = {}));
  var pm;
  (function(n) {
    n.method = "workspace/didChangeConfiguration", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolNotificationType(n.method), n.capabilities = x.CM.create("workspace.didChangeConfiguration", void 0);
  })(pm || (m.DidChangeConfigurationNotification = pm = {}));
  var gm;
  (function(n) {
    n.Error = 1, n.Warning = 2, n.Info = 3, n.Log = 4, n.Debug = 5;
  })(gm || (m.MessageType = gm = {}));
  var mm;
  (function(n) {
    n.method = "window/showMessage", n.messageDirection = x.MessageDirection.serverToClient, n.type = new x.ProtocolNotificationType(n.method), n.capabilities = x.CM.create("window.showMessage", void 0);
  })(mm || (m.ShowMessageNotification = mm = {}));
  var ym;
  (function(n) {
    n.method = "window/showMessageRequest", n.messageDirection = x.MessageDirection.serverToClient, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("window.showMessage", void 0);
  })(ym || (m.ShowMessageRequest = ym = {}));
  var _m;
  (function(n) {
    n.method = "window/logMessage", n.messageDirection = x.MessageDirection.serverToClient, n.type = new x.ProtocolNotificationType(n.method);
  })(_m || (m.LogMessageNotification = _m = {}));
  var vm;
  (function(n) {
    n.method = "telemetry/event", n.messageDirection = x.MessageDirection.serverToClient, n.type = new x.ProtocolNotificationType(n.method);
  })(vm || (m.TelemetryEventNotification = vm = {}));
  var bm;
  (function(n) {
    n.None = 0, n.Full = 1, n.Incremental = 2;
  })(bm || (m.TextDocumentSyncKind = bm = {}));
  var Cm;
  (function(n) {
    n.method = "textDocument/didOpen", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolNotificationType(n.method), n.capabilities = x.CM.create("textDocument.synchronization", "textDocumentSync.openClose");
  })(Cm || (m.DidOpenTextDocumentNotification = Cm = {}));
  var wm;
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
  })(wm || (m.TextDocumentContentChangeEvent = wm = {}));
  var Dm;
  (function(n) {
    n.method = "textDocument/didChange", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolNotificationType(n.method), n.capabilities = x.CM.create("textDocument.synchronization", "textDocumentSync");
  })(Dm || (m.DidChangeTextDocumentNotification = Dm = {}));
  var Sm;
  (function(n) {
    n.method = "textDocument/didClose", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolNotificationType(n.method), n.capabilities = x.CM.create("textDocument.synchronization", "textDocumentSync.openClose");
  })(Sm || (m.DidCloseTextDocumentNotification = Sm = {}));
  var Pm;
  (function(n) {
    n.method = "textDocument/didSave", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolNotificationType(n.method), n.capabilities = x.CM.create("textDocument.synchronization.didSave", "textDocumentSync.save");
  })(Pm || (m.DidSaveTextDocumentNotification = Pm = {}));
  var Rm;
  (function(n) {
    n.Manual = 1, n.AfterDelay = 2, n.FocusOut = 3;
  })(Rm || (m.TextDocumentSaveReason = Rm = {}));
  var Tm;
  (function(n) {
    n.method = "textDocument/willSave", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolNotificationType(n.method), n.capabilities = x.CM.create("textDocument.synchronization.willSave", "textDocumentSync.willSave");
  })(Tm || (m.WillSaveTextDocumentNotification = Tm = {}));
  var Om;
  (function(n) {
    n.method = "textDocument/willSaveWaitUntil", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("textDocument.synchronization.willSaveWaitUntil", "textDocumentSync.willSaveWaitUntil");
  })(Om || (m.WillSaveTextDocumentWaitUntilRequest = Om = {}));
  var Em;
  (function(n) {
    n.method = "workspace/didChangeWatchedFiles", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolNotificationType(n.method), n.capabilities = x.CM.create("workspace.didChangeWatchedFiles", void 0);
  })(Em || (m.DidChangeWatchedFilesNotification = Em = {}));
  var xm;
  (function(n) {
    n.Created = 1, n.Changed = 2, n.Deleted = 3;
  })(xm || (m.FileChangeType = xm = {}));
  var Cl;
  (function(n) {
    function e(t) {
      let r = t;
      return Ze.objectLiteral(r) && (Zg.URI.is(r.baseUri) || Zg.WorkspaceFolder.is(r.baseUri)) && Ze.string(r.pattern);
    }
    n.is = e;
  })(Cl || (m.RelativePattern = Cl = {}));
  var wl;
  (function(n) {
    function e(t) {
      let r = t;
      return Ze.string(r) || Cl.is(r);
    }
    n.is = e;
  })(wl || (m.GlobPattern = wl = {}));
  var qm;
  (function(n) {
    n.Create = 1, n.Change = 2, n.Delete = 4;
  })(qm || (m.WatchKind = qm = {}));
  var Mm;
  (function(n) {
    n.method = "textDocument/publishDiagnostics", n.messageDirection = x.MessageDirection.serverToClient, n.type = new x.ProtocolNotificationType(n.method), n.capabilities = x.CM.create("textDocument.publishDiagnostics", void 0);
  })(Mm || (m.PublishDiagnosticsNotification = Mm = {}));
  var Im;
  (function(n) {
    n.Invoked = 1, n.TriggerCharacter = 2, n.TriggerForIncompleteCompletions = 3;
  })(Im || (m.CompletionTriggerKind = Im = {}));
  var Nm;
  (function(n) {
    n.method = "textDocument/completion", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("textDocument.completion", "completionProvider");
  })(Nm || (m.CompletionRequest = Nm = {}));
  var jm;
  (function(n) {
    n.method = "completionItem/resolve", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("textDocument.completion.completionItem.resolveSupport", "completionProvider.resolveProvider");
  })(jm || (m.CompletionResolveRequest = jm = {}));
  var Fm;
  (function(n) {
    n.method = "textDocument/hover", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("textDocument.hover", "hoverProvider");
  })(Fm || (m.HoverRequest = Fm = {}));
  var Lm;
  (function(n) {
    n.Invoked = 1, n.TriggerCharacter = 2, n.ContentChange = 3;
  })(Lm || (m.SignatureHelpTriggerKind = Lm = {}));
  var Am;
  (function(n) {
    n.method = "textDocument/signatureHelp", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("textDocument.signatureHelp", "signatureHelpProvider");
  })(Am || (m.SignatureHelpRequest = Am = {}));
  var km;
  (function(n) {
    n.method = "textDocument/definition", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("textDocument.definition", "definitionProvider");
  })(km || (m.DefinitionRequest = km = {}));
  var $m;
  (function(n) {
    n.method = "textDocument/references", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("textDocument.references", "referencesProvider");
  })($m || (m.ReferencesRequest = $m = {}));
  var Hm;
  (function(n) {
    n.method = "textDocument/documentHighlight", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("textDocument.documentHighlight", "documentHighlightProvider");
  })(Hm || (m.DocumentHighlightRequest = Hm = {}));
  var Um;
  (function(n) {
    n.method = "textDocument/documentSymbol", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("textDocument.documentSymbol", "documentSymbolProvider");
  })(Um || (m.DocumentSymbolRequest = Um = {}));
  var Wm;
  (function(n) {
    n.method = "textDocument/codeAction", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("textDocument.codeAction", "codeActionProvider");
  })(Wm || (m.CodeActionRequest = Wm = {}));
  var zm;
  (function(n) {
    n.method = "codeAction/resolve", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("textDocument.codeAction.resolveSupport", "codeActionProvider.resolveProvider");
  })(zm || (m.CodeActionResolveRequest = zm = {}));
  var Km;
  (function(n) {
    n.method = "workspace/symbol", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("workspace.symbol", "workspaceSymbolProvider");
  })(Km || (m.WorkspaceSymbolRequest = Km = {}));
  var Bm;
  (function(n) {
    n.method = "workspaceSymbol/resolve", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("workspace.symbol.resolveSupport", "workspaceSymbolProvider.resolveProvider");
  })(Bm || (m.WorkspaceSymbolResolveRequest = Bm = {}));
  var Vm;
  (function(n) {
    n.method = "textDocument/codeLens", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("textDocument.codeLens", "codeLensProvider");
  })(Vm || (m.CodeLensRequest = Vm = {}));
  var Gm;
  (function(n) {
    n.method = "codeLens/resolve", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("textDocument.codeLens.resolveSupport", "codeLensProvider.resolveProvider");
  })(Gm || (m.CodeLensResolveRequest = Gm = {}));
  var Xm;
  (function(n) {
    n.method = "workspace/codeLens/refresh", n.messageDirection = x.MessageDirection.serverToClient, n.type = new x.ProtocolRequestType0(n.method), n.capabilities = x.CM.create("workspace.codeLens", void 0);
  })(Xm || (m.CodeLensRefreshRequest = Xm = {}));
  var Jm;
  (function(n) {
    n.method = "textDocument/documentLink", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("textDocument.documentLink", "documentLinkProvider");
  })(Jm || (m.DocumentLinkRequest = Jm = {}));
  var Qm;
  (function(n) {
    n.method = "documentLink/resolve", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("textDocument.documentLink", "documentLinkProvider.resolveProvider");
  })(Qm || (m.DocumentLinkResolveRequest = Qm = {}));
  var Ym;
  (function(n) {
    n.method = "textDocument/formatting", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("textDocument.formatting", "documentFormattingProvider");
  })(Ym || (m.DocumentFormattingRequest = Ym = {}));
  var Zm;
  (function(n) {
    n.method = "textDocument/rangeFormatting", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("textDocument.rangeFormatting", "documentRangeFormattingProvider");
  })(Zm || (m.DocumentRangeFormattingRequest = Zm = {}));
  var ey;
  (function(n) {
    n.method = "textDocument/rangesFormatting", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("textDocument.rangeFormatting.rangesSupport", "documentRangeFormattingProvider.rangesSupport");
  })(ey || (m.DocumentRangesFormattingRequest = ey = {}));
  var ty;
  (function(n) {
    n.method = "textDocument/onTypeFormatting", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("textDocument.onTypeFormatting", "documentOnTypeFormattingProvider");
  })(ty || (m.DocumentOnTypeFormattingRequest = ty = {}));
  var ny;
  (function(n) {
    n.Identifier = 1;
  })(ny || (m.PrepareSupportDefaultBehavior = ny = {}));
  var ry;
  (function(n) {
    n.method = "textDocument/rename", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("textDocument.rename", "renameProvider");
  })(ry || (m.RenameRequest = ry = {}));
  var iy;
  (function(n) {
    n.method = "textDocument/prepareRename", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("textDocument.rename.prepareSupport", "renameProvider.prepareProvider");
  })(iy || (m.PrepareRenameRequest = iy = {}));
  var sy;
  (function(n) {
    n.method = "workspace/executeCommand", n.messageDirection = x.MessageDirection.clientToServer, n.type = new x.ProtocolRequestType(n.method), n.capabilities = x.CM.create("workspace.executeCommand", "executeCommandProvider");
  })(sy || (m.ExecuteCommandRequest = sy = {}));
  var oy;
  (function(n) {
    n.method = "workspace/applyEdit", n.messageDirection = x.MessageDirection.serverToClient, n.type = new x.ProtocolRequestType("workspace/applyEdit"), n.capabilities = x.CM.create("workspace.applyEdit", void 0);
  })(oy || (m.ApplyWorkspaceEditRequest = oy = {}));
});
var py = O((Ol) => {
  "use strict";
  Object.defineProperty(Ol, "__esModule", { value: true });
  Ol.createProtocolConnection = ww;
  var hy = Hn();
  function ww(n, e, t, r) {
    return hy.ConnectionStrategy.is(r) && (r = { connectionStrategy: r }), (0, hy.createMessageConnection)(n, e, t, r);
  }
});
var X = O((Pt) => {
  "use strict";
  var Dw = Pt && Pt.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), Fo = Pt && Pt.__exportStar || function(n, e) {
    for (var t in n) t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && Dw(e, n, t);
  };
  Object.defineProperty(Pt, "__esModule", { value: true });
  Pt.LSPErrorCodes = Pt.createProtocolConnection = void 0;
  Fo(Hn(), Pt);
  Fo((Po(), Yi(So)), Pt);
  Fo(De(), Pt);
  Fo(fy(), Pt);
  var Sw = py();
  Object.defineProperty(Pt, "createProtocolConnection", { enumerable: true, get: function() {
    return Sw.createProtocolConnection;
  } });
  var gy;
  (function(n) {
    n.lspReservedErrorRangeStart = -32899, n.RequestFailed = -32803, n.ServerCancelled = -32802, n.ContentModified = -32801, n.RequestCancelled = -32800, n.lspReservedErrorRangeEnd = -32800;
  })(gy || (Pt.LSPErrorCodes = gy = {}));
});
var Wt = O((Ut) => {
  "use strict";
  Object.defineProperty(Ut, "__esModule", { value: true });
  Ut.boolean = Pw;
  Ut.string = my;
  Ut.number = Rw;
  Ut.error = Tw;
  Ut.func = yy;
  Ut.array = _y;
  Ut.stringArray = Ow;
  Ut.typedArray = Ew;
  Ut.thenable = vy;
  Ut.asPromise = xw;
  function Pw(n) {
    return n === true || n === false;
  }
  function my(n) {
    return typeof n == "string" || n instanceof String;
  }
  function Rw(n) {
    return typeof n == "number" || n instanceof Number;
  }
  function Tw(n) {
    return n instanceof Error;
  }
  function yy(n) {
    return typeof n == "function";
  }
  function _y(n) {
    return Array.isArray(n);
  }
  function Ow(n) {
    return _y(n) && n.every((e) => my(e));
  }
  function Ew(n, e) {
    return Array.isArray(n) && n.every(e);
  }
  function vy(n) {
    return n && yy(n.then);
  }
  function xw(n) {
    return n instanceof Promise ? n : vy(n) ? new Promise((e, t) => {
      n.then((r) => e(r), (r) => t(r));
    }) : Promise.resolve(n);
  }
});
var Se = O((Or) => {
  "use strict";
  Object.defineProperty(Or, "__esModule", { value: true });
  Or.empty = void 0;
  Or.v4 = by;
  Or.isUUID = Cy;
  Or.parse = Mw;
  Or.generateUuid = Iw;
  var ys = class {
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
  }, El = class n extends ys {
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
  Or.empty = new ys("00000000-0000-0000-0000-000000000000");
  function by() {
    return new El();
  }
  var qw = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  function Cy(n) {
    return qw.test(n);
  }
  function Mw(n) {
    if (!Cy(n)) throw new Error("invalid uuid");
    return new ys(n);
  }
  function Iw() {
    return by().asHex();
  }
});
var se = O((ve) => {
  "use strict";
  var Nw = ve && ve.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), jw = ve && ve.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), Ry = ve && ve.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && Nw(t, e, r[i]);
      return jw(t, e), t;
    };
  })();
  Object.defineProperty(ve, "__esModule", { value: true });
  ve.DefaultDiagnosticCollectionProvider = ve.DiagnosticCollectionSource = ve.WorkspaceFeature = ve.TextDocumentLanguageFeature = ve.TextDocumentEventFeature = ve.DynamicDocumentFeature = ve.DynamicFeature = ve.StaticFeature = ve.LSPCancellationError = void 0;
  ve.ensure = Fw;
  var Yt = require("vscode"), xl = X(), yt = Ry(Wt()), wy = Ry(Se()), ql = class extends Yt.CancellationError {
    data;
    constructor(e) {
      super(), this.data = e;
    }
  };
  ve.LSPCancellationError = ql;
  function Fw(n, e) {
    return n[e] === void 0 && (n[e] = {}), n[e];
  }
  var Dy;
  (function(n) {
    function e(t) {
      let r = t;
      return r != null && yt.func(r.fillClientCapabilities) && yt.func(r.initialize) && yt.func(r.getState) && yt.func(r.clear) && (r.fillInitializeParams === void 0 || yt.func(r.fillInitializeParams));
    }
    n.is = e;
  })(Dy || (ve.StaticFeature = Dy = {}));
  var Sy;
  (function(n) {
    function e(t) {
      let r = t;
      return r != null && yt.func(r.fillClientCapabilities) && yt.func(r.initialize) && yt.func(r.getState) && yt.func(r.clear) && (r.fillInitializeParams === void 0 || yt.func(r.fillInitializeParams)) && yt.func(r.register) && yt.func(r.unregister) && r.registrationType !== void 0;
    }
    n.is = e;
  })(Sy || (ve.DynamicFeature = Sy = {}));
  var _s = class {
    _client;
    constructor(e) {
      this._client = e;
    }
    getState() {
      let e = this.getDocumentSelectors(), t = 0;
      for (let i of e) {
        t++;
        for (let s of Yt.workspace.textDocuments) if (Yt.languages.match(i, s) > 0) return { kind: "document", id: this.registrationType.method, registrations: true, matches: true };
      }
      let r = t > 0;
      return { kind: "document", id: this.registrationType.method, registrations: r, matches: false };
    }
  };
  ve.DynamicDocumentFeature = _s;
  var Ml = class extends _s {
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
      for (let r of e) if (Yt.languages.match(r, t) > 0) return true;
      return false;
    }
    constructor(e, t, r, i, s, o, a) {
      super(e), this._event = t, this._type = r, this._middleware = i, this._createParams = s, this._textDocument = o, this._selectorFilter = a, this._selectors = /* @__PURE__ */ new Map(), this._onAboutToSendNotification = new Yt.EventEmitter(), this._onNotificationSent = new Yt.EventEmitter();
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
      this._selectors.clear(), this._onNotificationSent.dispose(), this._onNotificationSent = new Yt.EventEmitter(), this._listener && (this._listener.dispose(), this._listener = void 0);
    }
    getProvider(e) {
      for (let t of this._selectors.values()) if (Yt.languages.match(t, e) > 0) return { send: (r) => this.callback(r) };
    }
  };
  ve.TextDocumentEventFeature = Ml;
  var Il = class extends _s {
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
        if (xl.TextDocumentRegistrationOptions.is(t)) {
          let r = xl.StaticRegistrationOptions.hasId(t) ? t.id : wy.generateUuid(), i = t.documentSelector ?? e;
          if (i) return [r, Object.assign({}, t, { documentSelector: i })];
        } else if (yt.boolean(t) && t === true || xl.WorkDoneProgressOptions.is(t)) {
          if (!e) return [void 0, void 0];
          let r = yt.boolean(t) && t === true ? { documentSelector: e } : Object.assign({}, t, { documentSelector: e });
          return [wy.generateUuid(), r];
        }
      } else return [void 0, void 0];
      return [void 0, void 0];
    }
    getRegistrationOptions(e, t) {
      if (!(!e || !t)) return yt.boolean(t) && t === true ? { documentSelector: e } : Object.assign({}, t, { documentSelector: e });
    }
    getProvider(e) {
      for (let t of this._registrations.values()) {
        let r = t.data.registerOptions.documentSelector;
        if (r !== null && Yt.languages.match(this._client.protocol2CodeConverter.asDocumentSelector(r), e) > 0) return t.provider;
      }
    }
    getAllProviders() {
      let e = [];
      for (let t of this._registrations.values()) e.push(t.provider);
      return e;
    }
  };
  ve.TextDocumentLanguageFeature = Il;
  var Nl = class {
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
  ve.WorkspaceFeature = Nl;
  var Py;
  (function(n) {
    n.push = "push", n.pull = "pull";
  })(Py || (ve.DiagnosticCollectionSource = Py = {}));
  var jl = class {
    create(e, t) {
      return e !== void 0 ? Yt.languages.createDiagnosticCollection(e) : Yt.languages.createDiagnosticCollection();
    }
    dispose(e, t) {
      e.dispose();
    }
  };
  ve.DefaultDiagnosticCollectionProvider = jl;
});
var Oy = O((zr) => {
  "use strict";
  Object.defineProperty(zr, "__esModule", { value: true });
  zr.range = zr.balanced = void 0;
  var Lw = (n, e, t) => {
    let r = n instanceof RegExp ? Ty(n, t) : n, i = e instanceof RegExp ? Ty(e, t) : e, s = r !== null && i != null && (0, zr.range)(r, i, t);
    return s && { start: s[0], end: s[1], pre: t.slice(0, s[0]), body: t.slice(s[0] + r.length, s[1]), post: t.slice(s[1] + i.length) };
  };
  zr.balanced = Lw;
  var Ty = (n, e) => {
    let t = e.match(n);
    return t ? t[0] : null;
  }, Aw = (n, e, t) => {
    let r, i, s, o, a, c = t.indexOf(n), u = t.indexOf(e, c + 1), d = c;
    if (c >= 0 && u > 0) {
      if (n === e) return [c, u];
      for (r = [], s = t.length; d >= 0 && !a; ) {
        if (d === c) r.push(d), c = t.indexOf(n, d + 1);
        else if (r.length === 1) {
          let h = r.pop();
          h !== void 0 && (a = [h, u]);
        } else i = r.pop(), i !== void 0 && i < s && (s = i, o = u), u = t.indexOf(e, d + 1);
        d = c < u && c >= 0 ? c : u;
      }
      r.length && o !== void 0 && (a = [s, o]);
    }
    return a;
  };
  zr.range = Aw;
});
var jy = O((Bn) => {
  "use strict";
  Object.defineProperty(Bn, "__esModule", { value: true });
  Bn.EXPANSION_MAX_LENGTH = Bn.EXPANSION_MAX = void 0;
  Bn.expand = Qw;
  var Ey = Oy(), xy = "\0SLASH" + Math.random() + "\0", qy = "\0OPEN" + Math.random() + "\0", Al = "\0CLOSE" + Math.random() + "\0", My = "\0COMMA" + Math.random() + "\0", Iy = "\0PERIOD" + Math.random() + "\0", kw = new RegExp(xy, "g"), $w = new RegExp(qy, "g"), Hw = new RegExp(Al, "g"), Uw = new RegExp(My, "g"), Ww = new RegExp(Iy, "g"), zw = /\\\\/g, Kw = /\\{/g, Bw = /\\}/g, Vw = /\\,/g, Gw = /\\\./g;
  Bn.EXPANSION_MAX = 1e5;
  Bn.EXPANSION_MAX_LENGTH = 4e6;
  function Fl(n) {
    return isNaN(n) ? n.charCodeAt(0) : parseInt(n, 10);
  }
  function Xw(n) {
    return n.replace(zw, xy).replace(Kw, qy).replace(Bw, Al).replace(Vw, My).replace(Gw, Iy);
  }
  function Jw(n) {
    return n.replace(kw, "\\").replace($w, "{").replace(Hw, "}").replace(Uw, ",").replace(Ww, ".");
  }
  function Ny(n) {
    if (!n) return [""];
    let e = [], t = (0, Ey.balanced)("{", "}", n);
    if (!t) return n.split(",");
    let { pre: r, body: i, post: s } = t, o = r.split(",");
    o[o.length - 1] += "{" + i + "}";
    let a = Ny(s);
    return s.length && (o[o.length - 1] += a.shift(), o.push.apply(o, a)), e.push.apply(e, o), e;
  }
  function Qw(n, e = {}) {
    if (!n) return [];
    let { max: t = Bn.EXPANSION_MAX, maxLength: r = Bn.EXPANSION_MAX_LENGTH } = e;
    return n.slice(0, 2) === "{}" && (n = "\\{\\}" + n.slice(2)), Ll(Xw(n), t, r, true).map(Jw);
  }
  function Yw(n) {
    return "{" + n + "}";
  }
  function Zw(n) {
    return /^-?0\d/.test(n);
  }
  function eD(n, e) {
    return n <= e;
  }
  function tD(n, e) {
    return n >= e;
  }
  function vs(n, e, t, r, i, s) {
    let o = [], a = 0;
    for (let c = 0; c < n.length; c++) for (let u = 0; u < t.length; u++) {
      if (o.length >= r) return o;
      let d = n[c] + e + t[u];
      if (!(s && !d)) {
        if (a + d.length > i) return o;
        o.push(d), a += d.length;
      }
    }
    return o;
  }
  function nD(n, e, t, r) {
    let i = n.split(/\.\./), s = [];
    if (i[0] === void 0 || i[1] === void 0) return s;
    let o = Fl(i[0]), a = Fl(i[1]), c = Math.max(i[0].length, i[1].length), u = i.length === 3 && i[2] !== void 0 ? Math.max(Math.abs(Fl(i[2])), 1) : 1, d = eD;
    a < o && (u *= -1, d = tD);
    let p = i.some(Zw), g = 0;
    for (let y = o; d(y, a) && s.length < t; y += u) {
      let _;
      if (e) _ = String.fromCharCode(y), _ === "\\" && (_ = "");
      else if (_ = String(y), p) {
        let D = c - _.length;
        if (D > 0) {
          let S = new Array(D + 1).join("0");
          y < 0 ? _ = "-" + S + _.slice(1) : _ = S + _;
        }
      }
      if (g + _.length > r) break;
      s.push(_), g += _.length;
    }
    return s;
  }
  function Ll(n, e, t, r) {
    let i = [""], s = false, o = true;
    for (; ; ) {
      let a = (0, Ey.balanced)("{", "}", n);
      if (!a) return vs(i, n, [""], e, t, s);
      let c = a.pre;
      if (/\$$/.test(c)) {
        if (i = vs(i, c + "{" + a.body + "}", [""], e, t, s && !a.post.length), o = false, !a.post.length) break;
        n = a.post;
        continue;
      }
      let u = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(a.body), d = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(a.body), h = u || d, p = a.body.indexOf(",") >= 0;
      if (!h && !p) {
        if (a.post.match(/,(?!,).*\}/)) {
          n = a.pre + "{" + a.body + Al + a.post, r = true;
          continue;
        }
        return vs(i, c + "{" + a.body + "}" + a.post, [""], e, t, s);
      }
      o && (s = r && !h, o = false);
      let g;
      if (h) g = nD(a.body, d, e, t);
      else {
        let y = Ny(a.body);
        if (y.length === 1 && y[0] !== void 0 && (y = Ll(y[0], e, t, false).map(Yw), y.length === 1)) {
          if (i = vs(i, c + y[0], [""], e, t, s && !a.post.length), !a.post.length) break;
          n = a.post;
          continue;
        }
        let _ = s && !a.post.length && !c;
        for (let S = 0; _ && S < i.length; S++) i[S] && (_ = false);
        g = [];
        let D = 0;
        e: for (let S = 0; S < y.length; S++) {
          let C = Ll(y[S], e, t, false);
          for (let T = 0; T < C.length; T++) {
            let I = C[T];
            if (!(_ && !I)) {
              if (g.length >= e || D + I.length > t) break e;
              g.push(I), D += I.length;
            }
          }
        }
      }
      if (i = vs(i, c, g, e, t, s && !a.post.length), !a.post.length) break;
      n = a.post;
    }
    return i;
  }
});
var Fy = O((Lo) => {
  "use strict";
  Object.defineProperty(Lo, "__esModule", { value: true });
  Lo.assertValidPattern = void 0;
  var rD = 1024 * 64, iD = (n) => {
    if (typeof n != "string") throw new TypeError("invalid pattern");
    if (n.length > rD) throw new TypeError("pattern is too long");
  };
  Lo.assertValidPattern = iD;
});
var Ay = O((Ao) => {
  "use strict";
  Object.defineProperty(Ao, "__esModule", { value: true });
  Ao.parseClass = void 0;
  var sD = { "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", true], "[:alpha:]": ["\\p{L}\\p{Nl}", true], "[:ascii:]": ["\\x00-\\x7f", false], "[:blank:]": ["\\p{Zs}\\t", true], "[:cntrl:]": ["\\p{Cc}", true], "[:digit:]": ["\\p{Nd}", true], "[:graph:]": ["\\p{Z}\\p{C}", true, true], "[:lower:]": ["\\p{Ll}", true], "[:print:]": ["\\p{C}", true], "[:punct:]": ["\\p{P}", true], "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", true], "[:upper:]": ["\\p{Lu}", true], "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", true], "[:xdigit:]": ["A-Fa-f0-9", false] }, bs = (n) => n.replace(/[[\]\\-]/g, "\\$&"), oD = (n) => n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Ly = (n) => n.join(""), aD = (n, e) => {
    let t = e;
    if (n.charAt(t) !== "[") throw new Error("not in a brace expression");
    let r = [], i = [], s = t + 1, o = false, a = false, c = false, u = false, d = t, h = "";
    e: for (; s < n.length; ) {
      let _ = n.charAt(s);
      if ((_ === "!" || _ === "^") && s === t + 1) {
        u = true, s++;
        continue;
      }
      if (_ === "]" && o && !c) {
        d = s + 1;
        break;
      }
      if (o = true, _ === "\\" && !c) {
        c = true, s++;
        continue;
      }
      if (_ === "[" && !c) {
        for (let [D, [S, C, T]] of Object.entries(sD)) if (n.startsWith(D, s)) {
          if (h) return ["$.", false, n.length - t, true];
          s += D.length, T ? i.push(S) : r.push(S), a = a || C;
          continue e;
        }
      }
      if (c = false, h) {
        _ > h ? r.push(bs(h) + "-" + bs(_)) : _ === h && r.push(bs(_)), h = "", s++;
        continue;
      }
      if (n.startsWith("-]", s + 1)) {
        r.push(bs(_ + "-")), s += 2;
        continue;
      }
      if (n.startsWith("-", s + 1)) {
        h = _, s += 2;
        continue;
      }
      r.push(bs(_)), s++;
    }
    if (d < s) return ["", false, 0, false];
    if (!r.length && !i.length) return ["$.", false, n.length - t, true];
    if (i.length === 0 && r.length === 1 && /^\\?.$/.test(r[0]) && !u) {
      let _ = r[0].length === 2 ? r[0].slice(-1) : r[0];
      return [oD(_), false, d - t, false];
    }
    let p = "[" + (u ? "^" : "") + Ly(r) + "]", g = "[" + (u ? "" : "^") + Ly(i) + "]";
    return [r.length && i.length ? "(" + p + "|" + g + ")" : r.length ? p : g, a, d - t, true];
  };
  Ao.parseClass = aD;
});
var $o = O((ko) => {
  "use strict";
  Object.defineProperty(ko, "__esModule", { value: true });
  ko.unescape = void 0;
  var cD = (n, { windowsPathsNoEscape: e = false, magicalBraces: t = true } = {}) => t ? e ? n.replace(/\[([^/\\])\]/g, "$1") : n.replace(/((?!\\).|^)\[([^/\\])\]/g, "$1$2").replace(/\\([^/])/g, "$1") : e ? n.replace(/\[([^/\\{}])\]/g, "$1") : n.replace(/((?!\\).|^)\[([^/\\{}])\]/g, "$1$2").replace(/\\([^/{}])/g, "$1");
  ko.unescape = cD;
});
var Hl = O((zo) => {
  "use strict";
  var Rt;
  Object.defineProperty(zo, "__esModule", { value: true });
  zo.AST = void 0;
  var uD = Ay(), Ho = $o(), lD = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), kl = (n) => lD.has(n), ky = (n) => kl(n.type), dD = /* @__PURE__ */ new Map([["!", ["@"]], ["?", ["?", "@"]], ["@", ["@"]], ["*", ["*", "+", "?", "@"]], ["+", ["+", "@"]]]), fD = /* @__PURE__ */ new Map([["!", ["?"]], ["@", ["?"]], ["+", ["?", "*"]]]), hD = /* @__PURE__ */ new Map([["!", ["?", "@"]], ["?", ["?", "@"]], ["@", ["?", "@"]], ["*", ["*", "+", "?", "@"]], ["+", ["+", "@", "?", "*"]]]), $y = /* @__PURE__ */ new Map([["!", /* @__PURE__ */ new Map([["!", "@"]])], ["?", /* @__PURE__ */ new Map([["*", "*"], ["+", "*"]])], ["@", /* @__PURE__ */ new Map([["!", "!"], ["?", "?"], ["@", "@"], ["*", "*"], ["+", "+"]])], ["+", /* @__PURE__ */ new Map([["?", "*"], ["*", "*"]])]]), pD = "(?!(?:^|/)\\.\\.?(?:$|/))", Uo = "(?!\\.)", gD = /* @__PURE__ */ new Set(["[", "."]), mD = /* @__PURE__ */ new Set(["..", "."]), yD = new Set("().*{}+?[]^$\\!"), _D = (n) => n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), $l = "[^/]", Hy = $l + "*?", Uy = $l + "+?", vD = 0, Wo = class {
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
    id = ++vD;
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
        if (typeof t != "string" && !(t instanceof Rt && t.#t === this)) throw new Error("invalid part: " + t);
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
        if (!(r instanceof Rt && r.type === "!")) return false;
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
      let t = new Rt(this.type, e);
      for (let r of this.#e) t.copyIn(r);
      return t;
    }
    static #d(e, t, r, i, s) {
      let o = i.maxExtglobRecursion ?? 2, a = false, c = false, u = -1, d = false;
      if (t.type === null) {
        let _ = r, D = "";
        for (; _ < e.length; ) {
          let S = e.charAt(_++);
          if (a || S === "\\") {
            a = !a, D += S;
            continue;
          }
          if (c) {
            _ === u + 1 ? (S === "^" || S === "!") && (d = true) : S === "]" && !(_ === u + 2 && d) && (c = false), D += S;
            continue;
          } else if (S === "[") {
            c = true, u = _, d = false, D += S;
            continue;
          }
          if (!i.noext && kl(S) && e.charAt(_) === "(" && s <= o) {
            t.push(D), D = "";
            let T = new Rt(S, t);
            _ = Rt.#d(e, T, _, i, s + 1), t.push(T);
            continue;
          }
          D += S;
        }
        return t.push(D), _;
      }
      let h = r + 1, p = new Rt(null, t), g = [], y = "";
      for (; h < e.length; ) {
        let _ = e.charAt(h++);
        if (a || _ === "\\") {
          a = !a, y += _;
          continue;
        }
        if (c) {
          h === u + 1 ? (_ === "^" || _ === "!") && (d = true) : _ === "]" && !(h === u + 2 && d) && (c = false), y += _;
          continue;
        } else if (_ === "[") {
          c = true, u = h, d = false, y += _;
          continue;
        }
        if (!i.noext && kl(_) && e.charAt(h) === "(" && (s <= o || t && t.#f(_))) {
          let S = t && t.#f(_) ? 0 : 1;
          p.push(y), y = "";
          let C = new Rt(_, p);
          p.push(C), h = Rt.#d(e, C, h, i, s + S);
          continue;
        }
        if (_ === "|") {
          p.push(y), y = "", g.push(p), p = new Rt(null, t);
          continue;
        }
        if (_ === ")") return y === "" && t.#e.length === 0 && (t.#l = true), p.push(y), y = "", t.push(...g, p), h;
        y += _;
      }
      return t.type = null, t.#r = void 0, t.#e = [e.substring(r - 1)], h;
    }
    #_(e) {
      return this.#p(e, fD);
    }
    #p(e, t = dD) {
      if (!e || typeof e != "object" || e.type !== null || e.#e.length !== 1 || this.type === null) return false;
      let r = e.#e[0];
      return !r || typeof r != "object" || r.type === null ? false : this.#f(r.type, t);
    }
    #f(e, t = hD) {
      return !!t.get(this.type)?.includes(e);
    }
    #v(e, t) {
      let r = e.#e[0], i = new Rt(null, r, this.options);
      i.#e.push(""), r.push(i), this.#g(e, t);
    }
    #g(e, t) {
      let r = e.#e[0];
      this.#e.splice(t, 1, ...r.#e);
      for (let i of r.#e) typeof i == "object" && (i.#t = this);
      this.#o = void 0;
    }
    #b(e) {
      return !!$y.get(this.type)?.has(e);
    }
    #C(e) {
      if (!e || typeof e != "object" || e.type !== null || e.#e.length !== 1 || this.type === null || this.#e.length !== 1) return false;
      let t = e.#e[0];
      return !t || typeof t != "object" || t.type === null ? false : this.#b(t.type);
    }
    #w(e) {
      let t = $y.get(this.type), r = e.#e[0], i = t?.get(r.type);
      if (!i) return false;
      this.#e = r.#e;
      for (let s of this.#e) typeof s == "object" && (s.#t = this);
      this.type = i, this.#o = void 0, this.#l = false;
    }
    static fromGlob(e, t = {}) {
      let r = new Rt(null, void 0, t);
      return Rt.#d(e, r, 0, t, 0), r;
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
      if (this.#n === this && (this.#h(), this.#y()), !ky(this)) {
        let c = this.isStart() && this.isEnd() && !this.#e.some((g) => typeof g != "string"), u = this.#e.map((g) => {
          let [y, _, D, S] = typeof g == "string" ? Rt.#D(g, this.#r, c) : g.toRegExpSource(e);
          return this.#r = this.#r || D, this.#i = this.#i || S, y;
        }).join(""), d = "";
        if (this.isStart() && typeof this.#e[0] == "string" && !(this.#e.length === 1 && mD.has(this.#e[0]))) {
          let y = gD, _ = t && y.has(u.charAt(0)) || u.startsWith("\\.") && y.has(u.charAt(2)) || u.startsWith("\\.\\.") && y.has(u.charAt(4)), D = !t && !e && y.has(u.charAt(0));
          d = _ ? pD : D ? Uo : "";
        }
        let h = "";
        return this.isEnd() && this.#n.#c && this.#t?.type === "!" && (h = "(?:$|\\/)"), [d + u + h, (0, Ho.unescape)(u), this.#r = !!this.#r, this.#i];
      }
      let r = this.type === "*" || this.type === "+", i = this.type === "!" ? "(?:(?!(?:" : "(?:", s = this.#m(t);
      if (this.isStart() && this.isEnd() && !s && this.type !== "!") {
        let c = this.toString(), u = this;
        return u.#e = [c], u.type = null, u.#r = void 0, [c, (0, Ho.unescape)(this.toString()), false, false];
      }
      let o = !r || e || t || !Uo ? "" : this.#m(true);
      o === s && (o = ""), o && (s = `(?:${s})(?:${o})*?`);
      let a = "";
      if (this.type === "!" && this.#l) a = (this.isStart() && !t ? Uo : "") + Uy;
      else {
        let c = this.type === "!" ? "))" + (this.isStart() && !t && !e ? Uo : "") + Hy + ")" : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && o ? ")" : this.type === "*" && o ? ")?" : `)${this.type}`;
        a = i + s + c;
      }
      return [a, (0, Ho.unescape)(s), this.#r = !!this.#r, this.#i];
    }
    #h() {
      if (ky(this)) {
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
    static #D(e, t, r = false) {
      let i = false, s = "", o = false, a = false;
      for (let c = 0; c < e.length; c++) {
        let u = e.charAt(c);
        if (i) {
          i = false, s += (yD.has(u) ? "\\" : "") + u;
          continue;
        }
        if (u === "*") {
          if (a) continue;
          a = true, s += r && /^[*]+$/.test(e) ? Uy : Hy, t = true;
          continue;
        } else a = false;
        if (u === "\\") {
          c === e.length - 1 ? s += "\\\\" : i = true;
          continue;
        }
        if (u === "[") {
          let [d, h, p, g] = (0, uD.parseClass)(e, c);
          if (p) {
            s += d, o = o || h, c += p - 1, t = t || g;
            continue;
          }
        }
        if (u === "?") {
          s += $l, t = true;
          continue;
        }
        s += _D(u);
      }
      return [s, (0, Ho.unescape)(e), !!t, o];
    }
  };
  zo.AST = Wo;
  Rt = Wo;
});
var Ul = O((Ko) => {
  "use strict";
  Object.defineProperty(Ko, "__esModule", { value: true });
  Ko.escape = void 0;
  var bD = (n, { windowsPathsNoEscape: e = false, magicalBraces: t = false } = {}) => t ? e ? n.replace(/[?*()[\]{}]/g, "[$&]") : n.replace(/[?*()[\]\\{}]/g, "\\$&") : e ? n.replace(/[?*()[\]]/g, "[$&]") : n.replace(/[?*()[\]\\]/g, "\\$&");
  Ko.escape = bD;
});
var Wl = O((U) => {
  "use strict";
  Object.defineProperty(U, "__esModule", { value: true });
  U.unescape = U.escape = U.AST = U.Minimatch = U.match = U.makeRe = U.braceExpand = U.defaults = U.filter = U.GLOBSTAR = U.sep = U.minimatch = void 0;
  var CD = jy(), Bo = Fy(), Ky = Hl(), wD = Ul(), DD = $o(), SD = (n, e, t = {}) => ((0, Bo.assertValidPattern)(e), !t.nocomment && e.charAt(0) === "#" ? false : new Kr(e, t).match(n));
  U.minimatch = SD;
  var PD = /^\*+([^+@!?*[(]*)$/, RD = (n) => (e) => !e.startsWith(".") && e.endsWith(n), TD = (n) => (e) => e.endsWith(n), OD = (n) => (n = n.toLowerCase(), (e) => !e.startsWith(".") && e.toLowerCase().endsWith(n)), ED = (n) => (n = n.toLowerCase(), (e) => e.toLowerCase().endsWith(n)), xD = /^\*+\.\*+$/, qD = (n) => !n.startsWith(".") && n.includes("."), MD = (n) => n !== "." && n !== ".." && n.includes("."), ID = /^\.\*+$/, ND = (n) => n !== "." && n !== ".." && n.startsWith("."), jD = /^\*+$/, FD = (n) => n.length !== 0 && !n.startsWith("."), LD = (n) => n.length !== 0 && n !== "." && n !== "..", AD = /^\?+([^+@!?*[(]*)?$/, kD = ([n, e = ""]) => {
    let t = By([n]);
    return e ? (e = e.toLowerCase(), (r) => t(r) && r.toLowerCase().endsWith(e)) : t;
  }, $D = ([n, e = ""]) => {
    let t = Vy([n]);
    return e ? (e = e.toLowerCase(), (r) => t(r) && r.toLowerCase().endsWith(e)) : t;
  }, HD = ([n, e = ""]) => {
    let t = Vy([n]);
    return e ? (r) => t(r) && r.endsWith(e) : t;
  }, UD = ([n, e = ""]) => {
    let t = By([n]);
    return e ? (r) => t(r) && r.endsWith(e) : t;
  }, By = ([n]) => {
    let e = n.length;
    return (t) => t.length === e && !t.startsWith(".");
  }, Vy = ([n]) => {
    let e = n.length;
    return (t) => t.length === e && t !== "." && t !== "..";
  }, Gy = typeof process == "object" && process ? typeof process.env == "object" && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix", Wy = { win32: { sep: "\\" }, posix: { sep: "/" } };
  U.sep = Gy === "win32" ? Wy.win32.sep : Wy.posix.sep;
  U.minimatch.sep = U.sep;
  U.GLOBSTAR = /* @__PURE__ */ Symbol("globstar **");
  U.minimatch.GLOBSTAR = U.GLOBSTAR;
  var WD = "[^/]", zD = WD + "*?", KD = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", BD = "(?:(?!(?:\\/|^)\\.).)*?", VD = (n, e = {}) => (t) => (0, U.minimatch)(t, n, e);
  U.filter = VD;
  U.minimatch.filter = U.filter;
  var zt = (n, e = {}) => Object.assign({}, n, e), GD = (n) => {
    if (!n || typeof n != "object" || !Object.keys(n).length) return U.minimatch;
    let e = U.minimatch;
    return Object.assign((r, i, s = {}) => e(r, i, zt(n, s)), { Minimatch: class extends e.Minimatch {
      constructor(i, s = {}) {
        super(i, zt(n, s));
      }
      static defaults(i) {
        return e.defaults(zt(n, i)).Minimatch;
      }
    }, AST: class extends e.AST {
      constructor(i, s, o = {}) {
        super(i, s, zt(n, o));
      }
      static fromGlob(i, s = {}) {
        return e.AST.fromGlob(i, zt(n, s));
      }
    }, unescape: (r, i = {}) => e.unescape(r, zt(n, i)), escape: (r, i = {}) => e.escape(r, zt(n, i)), filter: (r, i = {}) => e.filter(r, zt(n, i)), defaults: (r) => e.defaults(zt(n, r)), makeRe: (r, i = {}) => e.makeRe(r, zt(n, i)), braceExpand: (r, i = {}) => e.braceExpand(r, zt(n, i)), match: (r, i, s = {}) => e.match(r, i, zt(n, s)), sep: e.sep, GLOBSTAR: U.GLOBSTAR });
  };
  U.defaults = GD;
  U.minimatch.defaults = U.defaults;
  var XD = (n, e = {}) => ((0, Bo.assertValidPattern)(n), e.nobrace || !/\{(?:(?!\{).)*\}/.test(n) ? [n] : (0, CD.expand)(n, { max: e.braceExpandMax }));
  U.braceExpand = XD;
  U.minimatch.braceExpand = U.braceExpand;
  var JD = (n, e = {}) => new Kr(n, e).makeRe();
  U.makeRe = JD;
  U.minimatch.makeRe = U.makeRe;
  var QD = (n, e, t = {}) => {
    let r = new Kr(e, t);
    return n = n.filter((i) => r.match(i)), r.options.nonull && !n.length && n.push(e), n;
  };
  U.match = QD;
  U.minimatch.match = U.match;
  var zy = /[?*]|[+@!]\(.*?\)|\[|\]/, YD = (n) => n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Kr = class {
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
      (0, Bo.assertValidPattern)(e), t = t || {}, this.options = t, this.maxGlobstarRecursion = t.maxGlobstarRecursion ?? 200, this.pattern = e, this.platform = t.platform || Gy, this.isWindows = this.platform === "win32";
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
          let c = s[0] === "" && s[1] === "" && (s[2] === "?" || !zy.test(s[2])) && !zy.test(s[3]), u = /^[a-z]:/i.test(s[0]);
          if (c) return [...s.slice(0, 4), ...s.slice(4).map((d) => this.parse(d))];
          if (u) return [s[0], ...s.slice(1).map((d) => this.parse(d))];
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
            let a = r[i + 1], c = r[i + 2], u = r[i + 3];
            if (a !== ".." || !c || c === "." || c === ".." || !u || u === "." || u === "..") continue;
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
        let a = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]), c = !a && e[0] === "" && e[1] === "" && e[2] === "?" && /^[a-z]:$/i.test(e[3]), u = typeof t[0] == "string" && /^[a-z]:$/i.test(t[0]), d = !u && t[0] === "" && t[1] === "" && t[2] === "?" && typeof t[3] == "string" && /^[a-z]:$/i.test(t[3]), h = c ? 3 : a ? 0 : void 0, p = d ? 3 : u ? 0 : void 0;
        if (typeof h == "number" && typeof p == "number") {
          let [g, y] = [e[h], t[p]];
          g.toLowerCase() === y.toLowerCase() && (t[p] = g, s = p, i = h);
        }
      }
      let { optimizationLevel: o = 1 } = this.options;
      return o >= 2 && (e = this.levelTwoFileOptimize(e)), t.includes(U.GLOBSTAR) ? this.#n(e, t, r, i, s) : this.#i(e, t, r, i, s);
    }
    #n(e, t, r, i, s) {
      let o = t.indexOf(U.GLOBSTAR, s), a = t.lastIndexOf(U.GLOBSTAR), [c, u, d] = r ? [t.slice(s, o), t.slice(o + 1), []] : [t.slice(s, o), t.slice(o + 1, a), t.slice(a + 1)];
      if (c.length) {
        let C = e.slice(i, i + c.length);
        if (!this.#i(C, c, r, 0, 0)) return false;
        i += c.length, s += c.length;
      }
      let h = 0;
      if (d.length) {
        if (d.length + i > e.length) return false;
        let C = e.length - d.length;
        if (this.#i(e, d, r, C, 0)) h = d.length;
        else {
          if (e[e.length - 1] !== "" || i + d.length === e.length || (C--, !this.#i(e, d, r, C, 0))) return false;
          h = d.length + 1;
        }
      }
      if (!u.length) {
        let C = !!h;
        for (let T = i; T < e.length - h; T++) {
          let I = String(e[T]);
          if (C = true, I === "." || I === ".." || !this.options.dot && I.startsWith(".")) return false;
        }
        return r || C;
      }
      let p = [[[], 0]], g = p[0], y = 0, _ = [0];
      for (let C of u) C === U.GLOBSTAR ? (_.push(y), g = [[], 0], p.push(g)) : (g[0].push(C), y++);
      let D = p.length - 1, S = e.length - h;
      for (let C of p) C[1] = S - (_[D--] + C[0].length);
      return !!this.#r(e, p, i, 0, r, 0, !!h);
    }
    #r(e, t, r, i, s, o, a) {
      let c = t[i];
      if (!c) {
        for (let h = r; h < e.length; h++) {
          a = true;
          let p = e[h];
          if (p === "." || p === ".." || !this.options.dot && p.startsWith(".")) return false;
        }
        return a;
      }
      let [u, d] = c;
      for (; r <= d; ) {
        if (this.#i(e.slice(0, r + u.length), u, s, r, 0) && o < this.maxGlobstarRecursion) {
          let g = this.#r(e, t, r + u.length, i + 1, s, o + 1, a);
          if (g !== false) return g;
        }
        let p = e[r];
        if (p === "." || p === ".." || !this.options.dot && p.startsWith(".")) return false;
        r++;
      }
      return s || null;
    }
    #i(e, t, r, i, s) {
      let o, a, c, u;
      for (o = i, a = s, u = e.length, c = t.length; o < u && a < c; o++, a++) {
        this.debug("matchOne loop");
        let d = t[a], h = e[o];
        if (this.debug(t, d, h), d === false || d === U.GLOBSTAR) return false;
        let p;
        if (typeof d == "string" ? (p = h === d, this.debug("string match", d, h, p)) : (p = d.test(h), this.debug("pattern match", d, h, p)), !p) return false;
      }
      if (o === u && a === c) return true;
      if (o === u) return r;
      if (a === c) return o === u - 1 && e[o] === "";
      throw new Error("wtf?");
    }
    braceExpand() {
      return (0, U.braceExpand)(this.pattern, this.options);
    }
    parse(e) {
      (0, Bo.assertValidPattern)(e);
      let t = this.options;
      if (e === "**") return U.GLOBSTAR;
      if (e === "") return "";
      let r, i = null;
      (r = e.match(jD)) ? i = t.dot ? LD : FD : (r = e.match(PD)) ? i = (t.nocase ? t.dot ? ED : OD : t.dot ? TD : RD)(r[1]) : (r = e.match(AD)) ? i = (t.nocase ? t.dot ? $D : kD : t.dot ? HD : UD)(r) : (r = e.match(xD)) ? i = t.dot ? MD : qD : (r = e.match(ID)) && (i = ND);
      let s = Ky.AST.fromGlob(e, this.options).toMMPattern();
      return i && typeof s == "object" && Reflect.defineProperty(s, "test", { value: i }), s;
    }
    makeRe() {
      if (this.regexp || this.regexp === false) return this.regexp;
      let e = this.set;
      if (!e.length) return this.regexp = false, this.regexp;
      let t = this.options, r = t.noglobstar ? zD : t.dot ? KD : BD, i = new Set(t.nocase ? ["i"] : []), s = e.map((c) => {
        let u = c.map((h) => {
          if (h instanceof RegExp) for (let p of h.flags.split("")) i.add(p);
          return typeof h == "string" ? YD(h) : h === U.GLOBSTAR ? U.GLOBSTAR : h._src;
        });
        u.forEach((h, p) => {
          let g = u[p + 1], y = u[p - 1];
          h !== U.GLOBSTAR || y === U.GLOBSTAR || (y === void 0 ? g !== void 0 && g !== U.GLOBSTAR ? u[p + 1] = "(?:\\/|" + r + "\\/)?" + g : u[p] = r : g === void 0 ? u[p - 1] = y + "(?:\\/|\\/" + r + ")?" : g !== U.GLOBSTAR && (u[p - 1] = y + "(?:\\/|\\/" + r + "\\/)" + g, u[p + 1] = U.GLOBSTAR));
        });
        let d = u.filter((h) => h !== U.GLOBSTAR);
        if (this.partial && d.length >= 1) {
          let h = [];
          for (let p = 1; p <= d.length; p++) h.push(d.slice(0, p).join("/"));
          return "(?:" + h.join("|") + ")";
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
      return U.minimatch.defaults(e).Minimatch;
    }
  };
  U.Minimatch = Kr;
  var ZD = Hl();
  Object.defineProperty(U, "AST", { enumerable: true, get: function() {
    return ZD.AST;
  } });
  var eS = Ul();
  Object.defineProperty(U, "escape", { enumerable: true, get: function() {
    return eS.escape;
  } });
  var tS = $o();
  Object.defineProperty(U, "unescape", { enumerable: true, get: function() {
    return tS.unescape;
  } });
  U.minimatch.AST = Ky.AST;
  U.minimatch.Minimatch = Kr;
  U.minimatch.escape = wD.escape;
  U.minimatch.unescape = DD.unescape;
});
var zl = O((Vn) => {
  "use strict";
  var nS = Vn && Vn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), rS = Vn && Vn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), iS = Vn && Vn.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && nS(t, e, r[i]);
      return rS(t, e), t;
    };
  })();
  Object.defineProperty(Vn, "__esModule", { value: true });
  Vn.matchGlobPattern = aS;
  var sS = iS(Wl()), oS = require("vscode");
  function aS(n, e) {
    let t;
    if (typeof n == "string") t = n.replace(/\\/g, "/");
    else try {
      let i = oS.Uri.parse(typeof n.baseUri == "string" ? n.baseUri : n.baseUri.uri);
      t = i.with({ path: i.path + "/" + n.pattern }).fsPath.replace(/\\/g, "/");
    } catch {
      return false;
    }
    let r = new sS.Minimatch(t, { noext: true });
    return r.makeRe() ? r.match(e.fsPath) : false;
  }
});
var Jl = O((Er) => {
  "use strict";
  Object.defineProperty(Er, "__esModule", { value: true });
  Er.DiagnosticFeature = Er.DiagnosticPullMode = Er.vsdiag = void 0;
  var Pe = require("vscode"), Re = X(), cS = Se(), uS = zl(), Cs = se();
  function Vo(n, e) {
    return n[e] === void 0 && (n[e] = {}), n[e];
  }
  var Mt;
  (function(n) {
    let e;
    (function(t) {
      t.full = "full", t.unChanged = "unChanged";
    })(e = n.DocumentDiagnosticReportKind || (n.DocumentDiagnosticReportKind = {}));
  })(Mt || (Er.vsdiag = Mt = {}));
  var ws;
  (function(n) {
    n.onType = "onType", n.onSave = "onSave", n.onFocus = "onFocus";
  })(ws || (Er.DiagnosticPullMode = ws = {}));
  var et;
  (function(n) {
    n.active = "open", n.reschedule = "reschedule", n.outDated = "drop";
  })(et || (et = {}));
  var ze;
  (function(n) {
    n[n.document = 1] = "document", n[n.workspace = 2] = "workspace";
  })(ze || (ze = {}));
  var hn;
  (function(n) {
    function e(t) {
      return t instanceof Pe.Uri ? t.toString() : t.uri.toString();
    }
    n.asKey = e;
  })(hn || (hn = {}));
  var Kl = class {
    documentPullStates;
    workspacePullStates;
    constructor() {
      this.documentPullStates = /* @__PURE__ */ new Map(), this.workspacePullStates = /* @__PURE__ */ new Map();
    }
    track(e, t, r) {
      let i = e === ze.document ? this.documentPullStates : this.workspacePullStates, [s, o, a] = t instanceof Pe.Uri ? [t.toString(), t, r] : [t.uri.toString(), t.uri, t.version], c = i.get(s);
      return c === void 0 && (c = { document: o, pulledVersion: a, resultId: void 0 }, i.set(s, c)), c;
    }
    update(e, t, r, i) {
      let s = e === ze.document ? this.documentPullStates : this.workspacePullStates, [o, a, c, u] = t instanceof Pe.Uri ? [t.toString(), t, r, i] : [t.uri.toString(), t.uri, t.version, r], d = s.get(o);
      d === void 0 ? (d = { document: a, pulledVersion: c, resultId: u }, s.set(o, d)) : (d.pulledVersion = c, d.resultId = u);
    }
    unTrack(e, t) {
      let r = hn.asKey(t);
      (e === ze.document ? this.documentPullStates : this.workspacePullStates).delete(r);
    }
    tracks(e, t) {
      let r = hn.asKey(t);
      return (e === ze.document ? this.documentPullStates : this.workspacePullStates).has(r);
    }
    tracksSameVersion(e, t) {
      let r = t.uri.toString(), s = (e === ze.document ? this.documentPullStates : this.workspacePullStates).get(r);
      return s !== void 0 && s.pulledVersion === t.version;
    }
    getResultId(e, t) {
      let r = hn.asKey(t);
      return (e === ze.document ? this.documentPullStates : this.workspacePullStates).get(r)?.resultId;
    }
    getAllResultIds() {
      let e = [];
      for (let [t, r] of this.workspacePullStates) this.documentPullStates.has(t) && (r = this.documentPullStates.get(t)), r.resultId !== void 0 && e.push({ uri: t, value: r.resultId });
      return e;
    }
  }, Bl = class {
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
      this.client = e, this.visibleDocuments = t, this.options = r, this.isDisposed = false, this.onDidChangeDiagnosticsEmitter = new Pe.EventEmitter(), this.provider = this.createProvider(), this.diagnostics = this.createDiagnosticCollection(), this.openRequests = /* @__PURE__ */ new Map(), this.pendingDocumentForgets = /* @__PURE__ */ new Map(), this.documentStates = new Kl(), this.workspaceErrorCounter = 0;
    }
    createDiagnosticCollection() {
      return this.client.clientOptions.diagnosticCollectionProvider === void 0 ? Pe.languages.createDiagnosticCollection(this.options.identifier) : this.client.clientOptions.diagnosticCollectionProvider.create(this.options.identifier, Cs.DiagnosticCollectionSource.pull);
    }
    knows(e, t) {
      let r = t instanceof Pe.Uri ? t : t.uri;
      return this.documentStates.tracks(e, t) || this.openRequests.has(r.toString());
    }
    knowsSameVersion(e, t) {
      let r = this.openRequests.get(t.uri.toString());
      return r === void 0 ? this.documentStates.tracksSameVersion(e, t) : r.state === et.reschedule ? true : r.state === et.outDated ? false : r.version === t.version;
    }
    forget(e, t) {
      this.documentStates.unTrack(e, t);
    }
    cancelPendingForget(e) {
      this.pendingDocumentForgets.delete(hn.asKey(e));
    }
    pull(e, t) {
      if (this.isDisposed) return;
      let r = e instanceof Pe.Uri ? e : e.uri;
      this.pullAsync(e).then(() => {
        t && t();
      }, (i) => {
        this.client.error(`Document pull failed for text document ${r.toString()}`, i, false);
      });
    }
    async pullAsync(e, t) {
      if (this.isDisposed) return;
      let r = e instanceof Pe.Uri, i = r ? e : e.uri, s = i.toString();
      t = r ? t : e.version;
      let o = this.openRequests.get(s), a = r ? this.documentStates.track(ze.document, e, t) : this.documentStates.track(ze.document, e);
      if (o === void 0) {
        let c = new Pe.CancellationTokenSource();
        this.openRequests.set(s, { state: et.active, document: e, version: t, tokenSource: c });
        let u, d;
        try {
          u = await this.provider.provideDiagnostics(e, a.resultId, c.token) ?? { kind: Mt.DocumentDiagnosticReportKind.full, items: [] };
        } catch (h) {
          if (h instanceof Cs.LSPCancellationError && Re.DiagnosticServerCancellationData.is(h.data) && h.data.retriggerRequest === false && (d = { state: et.outDated, document: e }), d === void 0 && h instanceof Pe.CancellationError) d = { state: et.reschedule, document: e };
          else throw h;
        }
        if (d = d ?? this.openRequests.get(s), d === void 0) {
          this.client.error(`Lost request state in diagnostic pull model. Clearing diagnostics for ${s}`), this.diagnostics.delete(i);
          return;
        }
        if (this.openRequests.delete(s), !this.visibleDocuments.isVisible(e)) {
          this.documentStates.unTrack(ze.document, e);
          return;
        }
        if (d.state === et.outDated) return;
        u !== void 0 && (u.kind === Mt.DocumentDiagnosticReportKind.full && this.diagnostics.set(i, u.items), a.pulledVersion = t, a.resultId = u.resultId), d.state === et.reschedule && this.pull(e);
      } else o.state === et.active ? (o.tokenSource.cancel(), this.openRequests.set(s, { state: et.reschedule, document: o.document })) : o.state === et.outDated && this.openRequests.set(s, { state: et.reschedule, document: o.document });
    }
    forgetDocument(e) {
      if (this.isDisposed) return;
      let t = e instanceof Pe.Uri ? e : e.uri, r = t.toString(), i = this.openRequests.get(r);
      if (this.options.workspaceDiagnostics && t.scheme !== "untitled") {
        if (i !== void 0) this.openRequests.set(r, { state: et.reschedule, document: e });
        else {
          let s = /* @__PURE__ */ Symbol();
          this.pendingDocumentForgets.set(r, s), this.pull(e, () => {
            this.pendingDocumentForgets.get(r) === s && (this.pendingDocumentForgets.delete(r), this.forget(ze.document, e));
          });
        }
        this.forget(ze.workspace, e);
      } else i !== void 0 && (i.state === et.active && i.tokenSource.cancel(), this.openRequests.set(r, { state: et.outDated, document: e })), this.diagnostics.delete(t), this.forget(ze.document, e);
    }
    pullWorkspace() {
      this.isDisposed || this.pullWorkspaceAsync().then(() => {
        this.workspaceTimeout = (0, Re.RAL)().timer.setTimeout(() => {
          this.pullWorkspace();
        }, 2e3);
      }, (e) => {
        !(e instanceof Cs.LSPCancellationError) && !Re.DiagnosticServerCancellationData.is(e.data) && (this.client.error("Workspace diagnostic pull failed.", e, false), this.workspaceErrorCounter++), this.workspaceErrorCounter <= 5 && (this.workspaceTimeout = (0, Re.RAL)().timer.setTimeout(() => {
          this.pullWorkspace();
        }, 2e3));
      });
    }
    async pullWorkspaceAsync() {
      if (!this.provider.provideWorkspaceDiagnostics || this.isDisposed) return;
      this.workspaceCancellation !== void 0 && (this.workspaceCancellation.cancel(), this.workspaceCancellation = void 0), this.workspaceCancellation = new Pe.CancellationTokenSource();
      let e = this.documentStates.getAllResultIds().map((t) => ({ uri: this.client.protocol2CodeConverter.asUri(t.uri), value: t.value }));
      await this.provider.provideWorkspaceDiagnostics(e, this.workspaceCancellation.token, (t) => {
        if (!(!t || this.isDisposed)) for (let r of t.items) r.kind === Mt.DocumentDiagnosticReportKind.full && (this.documentStates.tracks(ze.document, r.uri) || this.diagnostics.set(r.uri, r.items)), this.documentStates.update(ze.workspace, r.uri, r.version ?? void 0, r.resultId);
      });
    }
    createProvider() {
      let e = { onDidChangeDiagnostics: this.onDidChangeDiagnosticsEmitter.event, provideDiagnostics: (t, r, i) => {
        let s = (a, c, u) => {
          let d = { identifier: this.options.identifier, textDocument: { uri: this.client.code2ProtocolConverter.asUri(a instanceof Pe.Uri ? a : a.uri) }, previousResultId: c };
          return this.isDisposed === true || !this.client.isRunning() ? { kind: Mt.DocumentDiagnosticReportKind.full, items: [] } : this.client.sendRequest(Re.DocumentDiagnosticRequest.type, d, u).then(async (h) => {
            if (this.isDisposed) return { kind: Mt.DocumentDiagnosticReportKind.full, items: [] };
            if (u.isCancellationRequested) throw new Pe.CancellationError();
            return h == null ? { kind: Mt.DocumentDiagnosticReportKind.full, items: [] } : h.kind === Re.DocumentDiagnosticReportKind.Full ? { kind: Mt.DocumentDiagnosticReportKind.full, resultId: h.resultId, items: await this.client.protocol2CodeConverter.asDiagnostics(h.items, u) } : { kind: Mt.DocumentDiagnosticReportKind.unChanged, resultId: h.resultId };
          }, (h) => this.client.handleFailedRequest(Re.DocumentDiagnosticRequest.type, u, h, { kind: Mt.DocumentDiagnosticReportKind.full, items: [] }, true, true));
        }, o = this.client.middleware;
        return o.provideDiagnostics ? o.provideDiagnostics(t, r, i, s) : s(t, r, i);
      } };
      return this.options.workspaceDiagnostics && (e.provideWorkspaceDiagnostics = (t, r, i) => {
        let s = async (u) => u.kind === Re.DocumentDiagnosticReportKind.Full ? { kind: Mt.DocumentDiagnosticReportKind.full, uri: this.client.protocol2CodeConverter.asUri(u.uri), resultId: u.resultId, version: u.version, items: await this.client.protocol2CodeConverter.asDiagnostics(u.items, r) } : { kind: Mt.DocumentDiagnosticReportKind.unChanged, uri: this.client.protocol2CodeConverter.asUri(u.uri), resultId: u.resultId, version: u.version }, o = (u) => {
          let d = [];
          for (let h of u) d.push({ uri: this.client.code2ProtocolConverter.asUri(h.uri), value: h.value });
          return d;
        }, a = (u, d, h) => {
          let p = (0, cS.generateUuid)(), g = this.client.onProgress(Re.WorkspaceDiagnosticRequest.partialResult, p, async (_) => {
            if (_ == null) {
              h(null);
              return;
            }
            let D = { items: [] };
            for (let S of _.items) try {
              D.items.push(await s(S));
            } catch (C) {
              this.client.error("Converting workspace diagnostics failed.", C);
            }
            h(D);
          }), y = { identifier: this.options.identifier, previousResultIds: o(u), partialResultToken: p };
          return this.isDisposed === true || !this.client.isRunning() ? { items: [] } : this.client.sendRequest(Re.WorkspaceDiagnosticRequest.type, y, d).then(async (_) => {
            if (d.isCancellationRequested) return { items: [] };
            let D = { items: [] };
            for (let S of _.items) D.items.push(await s(S));
            return g.dispose(), h(D), { items: [] };
          }, (_) => (g.dispose(), this.client.handleFailedRequest(Re.DocumentDiagnosticRequest.type, d, _, { items: [] })));
        }, c = this.client.middleware;
        return c.provideWorkspaceDiagnostics ? c.provideWorkspaceDiagnostics(t, r, i, a) : a(t, r, i);
      }), e;
    }
    dispose() {
      this.isDisposed = true, this.workspaceCancellation?.cancel(), this.workspaceTimeout?.dispose();
      for (let [e, t] of this.openRequests) t.state === et.active && t.tokenSource.cancel(), this.openRequests.set(e, { state: et.outDated, document: t.document });
      this.client.clientOptions.diagnosticCollectionProvider !== void 0 ? this.client.clientOptions.diagnosticCollectionProvider.dispose(this.diagnostics, Cs.DiagnosticCollectionSource.pull) : this.diagnostics.dispose();
    }
  }, Vl = class {
    client;
    diagnosticRequestor;
    lastDocumentToPull;
    documents;
    timeoutHandle;
    isDisposed;
    constructor(e, t) {
      this.client = e, this.diagnosticRequestor = t, this.documents = new Re.LinkedMap(), this.isDisposed = false;
    }
    add(e) {
      if (this.isDisposed === true) return;
      let t = hn.asKey(e);
      this.documents.has(t) || (this.documents.set(t, e, Re.Touch.Last), this.lastDocumentToPull = e);
    }
    remove(e) {
      let t = hn.asKey(e);
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
        this.lastDocumentToPull !== void 0 && this.timeoutHandle === void 0 && (this.timeoutHandle = (0, Re.RAL)().timer.setTimeout(() => {
          let e = this.documents.first;
          if (e === void 0) return;
          let t = hn.asKey(e);
          this.diagnosticRequestor.pullAsync(e).catch((r) => {
            this.client.error(`Document pull failed for text document ${t}`, r, false);
          }).finally(() => {
            this.timeoutHandle = void 0, this.documents.set(t, e, Re.Touch.Last), t !== this.lastDocumentToPullKey() && this.runLoop();
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
      return this.lastDocumentToPull !== void 0 ? hn.asKey(this.lastDocumentToPull) : void 0;
    }
  }, Gl = class {
    disposable;
    diagnosticRequestor;
    activeTextDocument;
    backgroundScheduler;
    constructor(e, t, r) {
      let i = Object.assign({ onChange: false, onSave: false, onFocus: false }, e.clientOptions.diagnosticPullOptions), s = e.protocol2CodeConverter.asDocumentSelector(r.documentSelector), o = [], a = (C, T) => !(typeof C == "string" || C.language !== void 0 && C.language !== "*" || C.scheme !== void 0 && C.scheme !== "*" && C.scheme !== T.scheme || C.pattern !== void 0 && !(0, uS.matchGlobPattern)(C.pattern, T)), c = (C) => {
        let T = r.documentSelector;
        if (i.match !== void 0) return i.match(T, C);
        for (let I of T) if (Re.TextDocumentFilter.is(I) && a(I, C)) return true;
        return false;
      }, u = (C) => C instanceof Pe.Uri ? c(C) : Pe.languages.match(s, C) > 0 && t.isVisible(C), d = (C) => Pe.languages.match(s, C.document) > 0 && t.isVisible(C.notebook.uri), h = (C) => C instanceof Pe.Uri ? this.activeTextDocument?.uri.toString() === C.toString() : this.activeTextDocument === C;
      this.diagnosticRequestor = new Bl(e, t, r), this.backgroundScheduler = new Vl(e, this.diagnosticRequestor);
      let p = (C) => {
        !u(C) || !r.interFileDependencies || h(C) || i.onChange === false || this.backgroundScheduler.add(C);
      }, g = (C, T) => (i.filter === void 0 || !i.filter(C, T)) && this.diagnosticRequestor.knows(ze.document, C);
      this.activeTextDocument = Pe.window.activeTextEditor?.document, o.push(Pe.window.onDidChangeActiveTextEditor((C) => {
        let T = this.activeTextDocument;
        this.activeTextDocument = C?.document, T !== void 0 && p(T), this.activeTextDocument !== void 0 && (this.backgroundScheduler.remove(this.activeTextDocument), i.onFocus === true && u(this.activeTextDocument) && g(this.activeTextDocument, ws.onFocus) && this.diagnosticRequestor.pull(this.activeTextDocument));
      }));
      let y = e.getFeature(Re.DidOpenTextDocumentNotification.method);
      o.push(y.onNotificationSent((C) => {
        let T = C.textDocument;
        if (u(T)) {
          if (this.diagnosticRequestor.cancelPendingForget(T), this.diagnosticRequestor.knowsSameVersion(ze.document, T)) return;
          this.diagnosticRequestor.pull(T, () => {
            p(T);
          });
        }
      }));
      let _ = e.getFeature(Re.NotebookDocumentSyncRegistrationType.method);
      o.push(_.onOpenNotificationSent((C) => {
        for (let T of C.getCells()) d(T) && (this.diagnosticRequestor.cancelPendingForget(T.document), this.diagnosticRequestor.pull(T.document, () => {
          p(T.document);
        }));
      })), o.push(t.onOpen((C) => {
        for (let T of C) {
          if (this.diagnosticRequestor.knows(ze.document, T)) continue;
          let I = T.toString(), N;
          for (let J of Pe.workspace.textDocuments) if (I === J.uri.toString()) {
            N = J;
            break;
          }
          N !== void 0 && u(N) && this.diagnosticRequestor.pull(N, () => {
            p(N);
          });
        }
      }));
      let D = /* @__PURE__ */ new Set();
      for (let C of Pe.workspace.textDocuments) u(C) && (this.diagnosticRequestor.pull(C, () => {
        p(C);
      }), D.add(C.uri.toString()));
      for (let C of Pe.workspace.notebookDocuments) for (let T of C.getCells()) d(T) && (this.diagnosticRequestor.pull(T.document, () => {
        p(T.document);
      }), D.add(T.document.uri.toString()));
      if (i.onTabs === true) for (let C of t.getResources()) !D.has(C.toString()) && u(C) && this.diagnosticRequestor.pull(C, () => {
        p(C);
      });
      if (i.onChange === true) {
        let C = e.getFeature(Re.DidChangeTextDocumentNotification.method);
        o.push(C.onNotificationSent(async (T) => {
          let I = T.textDocument;
          g(I, ws.onType) && this.diagnosticRequestor.pull(I, () => {
            this.backgroundScheduler.trigger();
          });
        })), o.push(_.onChangeNotificationSent(async (T) => {
          let N = (T.cells?.textContent || []).map((te) => T.notebook.getCells().find((Oe) => Oe.document.uri.toString() === te.document.uri.toString()));
          for (let te of N) te && d(te) && this.diagnosticRequestor.pull(te.document, () => {
            this.backgroundScheduler.trigger();
          });
          let J = T.cells?.structure?.didClose || [];
          for (let te of J) this.diagnosticRequestor.forgetDocument(te.document);
          let Q = T.cells?.structure?.didOpen || [];
          for (let te of Q) d(te) && this.diagnosticRequestor.pull(te.document, () => {
            this.backgroundScheduler.trigger();
          });
        }));
      }
      if (i.onSave === true) {
        let C = e.getFeature(Re.DidSaveTextDocumentNotification.method);
        o.push(C.onNotificationSent((T) => {
          let I = T.textDocument;
          g(I, ws.onSave) && this.diagnosticRequestor.pull(T.textDocument);
        })), o.push(_.onSaveNotificationSent((T) => {
          for (let I of T.getCells()) d(I) && this.diagnosticRequestor.pull(I.document);
        }));
      }
      let S = e.getFeature(Re.DidCloseTextDocumentNotification.method);
      o.push(S.onAboutToSendNotification((C) => {
        this.cleanUpDocument(C.textDocument);
      })), o.push(_.onCloseNotificationSent((C) => {
        for (let T of C.getCells()) this.cleanUpDocument(T.document);
      })), o.push(t.onClose((C) => {
        for (let T of C) this.cleanUpDocument(T);
      })), this.diagnosticRequestor.onDidChangeDiagnosticsEmitter.event(() => {
        for (let C of Pe.workspace.textDocuments) u(C) && this.diagnosticRequestor.pull(C);
      }), r.workspaceDiagnostics === true && r.identifier !== "da348dc5-c30a-4515-9d98-31ff3be38d14" && this.diagnosticRequestor.pullWorkspace(), this.disposable = Pe.Disposable.from(...o, this.backgroundScheduler, this.diagnosticRequestor);
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
      this.backgroundScheduler.remove(e), this.diagnosticRequestor.knows(ze.document, e) && this.diagnosticRequestor.forgetDocument(e);
    }
  }, Xl = class extends Cs.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Re.DocumentDiagnosticRequest.type);
    }
    fillClientCapabilities(e) {
      let t = Vo(Vo(e, "textDocument"), "diagnostic");
      t.relatedInformation = true, t.tagSupport = { valueSet: [Re.DiagnosticTag.Unnecessary, Re.DiagnosticTag.Deprecated] }, t.codeDescriptionSupport = true, t.dataSupport = true, t.dynamicRegistration = true, t.relatedDocumentSupport = false, t.markupMessageSupport = false, Vo(Vo(e, "workspace"), "diagnostics").refreshSupport = true;
    }
    initialize(e, t) {
      this._client.onRequest(Re.DiagnosticRefreshRequest.type, async () => {
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
      let t = new Gl(this._client, this._client.visibleDocuments, e);
      return [t.disposable, t];
    }
  };
  Er.DiagnosticFeature = Xl;
});
var Go = O((Zt) => {
  "use strict";
  Object.defineProperty(Zt, "__esModule", { value: true });
  Zt.Semaphore = Zt.Delayer = void 0;
  Zt.setTestMode = lS;
  Zt.clearTestMode = dS;
  Zt.map = fS;
  Zt.mapAsync = hS;
  Zt.forEach = pS;
  var Ss = X(), Ql = class {
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
      })), (t >= 0 || this.timeout === void 0) && (this.timeout = (0, Ss.RAL)().timer.setTimeout(() => {
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
  Zt.Delayer = Ql;
  var Yl = class {
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
      this._waiting.length === 0 || this._active === this._capacity || (0, Ss.RAL)().timer.setImmediate(() => this.doRunNext());
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
  Zt.Semaphore = Yl;
  var Zl = false;
  function lS() {
    Zl = true;
  }
  function dS() {
    Zl = false;
  }
  var Xy = 15, Ds = class {
    yieldAfter;
    startTime;
    counter;
    total;
    counterInterval;
    constructor(e = Xy) {
      this.yieldAfter = Zl === true ? Math.max(e, 2) : Math.max(e, Xy), this.startTime = Date.now(), this.counter = 0, this.total = 0, this.counterInterval = 1;
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
  async function fS(n, e, t, r) {
    if (n.length === 0) return [];
    let i = new Array(n.length), s = new Ds(r?.yieldAfter);
    function o(c) {
      s.start();
      for (let u = c; u < n.length; u++) if (i[u] = e(n[u]), s.shouldYield()) return r?.yieldCallback && r.yieldCallback(), u + 1;
      return -1;
    }
    let a = o(0);
    for (; a !== -1 && !(t !== void 0 && t.isCancellationRequested); ) a = await new Promise((c) => {
      (0, Ss.RAL)().timer.setImmediate(() => {
        t !== void 0 && t.isCancellationRequested ? c(-1) : c(o(a));
      });
    });
    return i;
  }
  async function hS(n, e, t, r) {
    if (n.length === 0) return [];
    let i = new Array(n.length), s = new Ds(r?.yieldAfter);
    async function o(c) {
      s.start();
      for (let u = c; u < n.length; u++) if (i[u] = await e(n[u], t), s.shouldYield()) return r?.yieldCallback && r.yieldCallback(), u + 1;
      return -1;
    }
    let a = await o(0);
    for (; a !== -1 && !(t !== void 0 && t.isCancellationRequested); ) a = await new Promise((c) => {
      (0, Ss.RAL)().timer.setImmediate(() => {
        t !== void 0 && t.isCancellationRequested ? c(-1) : c(o(a));
      });
    });
    return i;
  }
  async function pS(n, e, t, r) {
    if (n.length === 0) return;
    let i = new Ds(r?.yieldAfter);
    function s(a) {
      i.start();
      for (let c = a; c < n.length; c++) if (e(n[c]), i.shouldYield()) return r?.yieldCallback && r.yieldCallback(), c + 1;
      return -1;
    }
    let o = s(0);
    for (; o !== -1 && !(t !== void 0 && t.isCancellationRequested); ) o = await new Promise((a) => {
      (0, Ss.RAL)().timer.setImmediate(() => {
        t !== void 0 && t.isCancellationRequested ? a(-1) : a(s(o));
      });
    });
  }
});
var td = O((Gn) => {
  "use strict";
  var gS = Gn && Gn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), mS = Gn && Gn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), yS = Gn && Gn.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && gS(t, e, r[i]);
      return mS(t, e), t;
    };
  })();
  Object.defineProperty(Gn, "__esModule", { value: true });
  var _S = yS(require("vscode")), ed = class extends _S.CompletionItem {
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
  Gn.default = ed;
});
var rd = O((Xn) => {
  "use strict";
  var vS = Xn && Xn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), bS = Xn && Xn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), CS = Xn && Xn.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && vS(t, e, r[i]);
      return bS(t, e), t;
    };
  })();
  Object.defineProperty(Xn, "__esModule", { value: true });
  var wS = CS(require("vscode")), nd = class extends wS.CodeLens {
    data;
    constructor(e) {
      super(e);
    }
  };
  Xn.default = nd;
});
var sd = O((Jn) => {
  "use strict";
  var DS = Jn && Jn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), SS = Jn && Jn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), PS = Jn && Jn.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && DS(t, e, r[i]);
      return SS(t, e), t;
    };
  })();
  Object.defineProperty(Jn, "__esModule", { value: true });
  var RS = PS(require("vscode")), id = class extends RS.DocumentLink {
    data;
    constructor(e, t) {
      super(e, t);
    }
  };
  Jn.default = id;
});
var ad = O((Qn) => {
  "use strict";
  var TS = Qn && Qn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), OS = Qn && Qn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), ES = Qn && Qn.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && TS(t, e, r[i]);
      return OS(t, e), t;
    };
  })();
  Object.defineProperty(Qn, "__esModule", { value: true });
  var xS = ES(require("vscode")), od = class extends xS.CodeAction {
    data;
    constructor(e, t) {
      super(e), this.data = t;
    }
  };
  Qn.default = od;
});
var ld = O((Kt) => {
  "use strict";
  var qS = Kt && Kt.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), MS = Kt && Kt.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), Qy = Kt && Kt.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && qS(t, e, r[i]);
      return MS(t, e), t;
    };
  })();
  Object.defineProperty(Kt, "__esModule", { value: true });
  Kt.ProtocolDiagnostic = Kt.DiagnosticCode = void 0;
  var IS = Qy(require("vscode")), cd = Qy(Wt()), Jy;
  (function(n) {
    function e(t) {
      let r = t;
      return r != null && (cd.number(r.value) || cd.string(r.value)) && cd.string(r.target);
    }
    n.is = e;
  })(Jy || (Kt.DiagnosticCode = Jy = {}));
  var ud = class extends IS.Diagnostic {
    data;
    hasDiagnosticCode;
    constructor(e, t, r, i) {
      super(e, t, r), this.data = i, this.hasDiagnosticCode = false;
    }
  };
  Kt.ProtocolDiagnostic = ud;
});
var fd = O((Yn) => {
  "use strict";
  var NS = Yn && Yn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), jS = Yn && Yn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), FS = Yn && Yn.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && NS(t, e, r[i]);
      return jS(t, e), t;
    };
  })();
  Object.defineProperty(Yn, "__esModule", { value: true });
  var LS = FS(require("vscode")), dd = class extends LS.CallHierarchyItem {
    data;
    constructor(e, t, r, i, s, o, a) {
      super(e, t, r, i, s, o), a !== void 0 && (this.data = a);
    }
  };
  Yn.default = dd;
});
var pd = O((Zn) => {
  "use strict";
  var AS = Zn && Zn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), kS = Zn && Zn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), $S = Zn && Zn.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && AS(t, e, r[i]);
      return kS(t, e), t;
    };
  })();
  Object.defineProperty(Zn, "__esModule", { value: true });
  var HS = $S(require("vscode")), hd = class extends HS.TypeHierarchyItem {
    data;
    constructor(e, t, r, i, s, o, a) {
      super(e, t, r, i, s, o), a !== void 0 && (this.data = a);
    }
  };
  Zn.default = hd;
});
var md = O((er) => {
  "use strict";
  var US = er && er.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), WS = er && er.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), zS = er && er.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && US(t, e, r[i]);
      return WS(t, e), t;
    };
  })();
  Object.defineProperty(er, "__esModule", { value: true });
  var Xo = zS(require("vscode")), gd = class extends Xo.SymbolInformation {
    data;
    hasRange;
    constructor(e, t, r, i, s) {
      let o = !(i instanceof Xo.Uri);
      super(e, t, r, o ? i : new Xo.Location(i, new Xo.Range(0, 0, 0, 0))), this.hasRange = o, s !== void 0 && (this.data = s);
    }
  };
  er.default = gd;
});
var _d = O((tr) => {
  "use strict";
  var KS = tr && tr.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), BS = tr && tr.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), VS = tr && tr.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && KS(t, e, r[i]);
      return BS(t, e), t;
    };
  })();
  Object.defineProperty(tr, "__esModule", { value: true });
  var GS = VS(require("vscode")), yd = class extends GS.InlayHint {
    data;
    constructor(e, t, r) {
      super(e, t, r);
    }
  };
  tr.default = yd;
});
var t_ = O((en) => {
  "use strict";
  var XS = en && en.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), JS = en && en.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), Jo = en && en.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && XS(t, e, r[i]);
      return JS(t, e), t;
    };
  })(), xr = en && en.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(en, "__esModule", { value: true });
  en.createConverter = iP;
  var Ae = Jo(require("vscode")), V = Jo(X()), Br = Jo(Wt()), Yy = Jo(Go()), QS = xr(td()), YS = xr(rd()), ZS = xr(sd()), Zy = xr(ad()), e_ = ld(), eP = xr(fd()), tP = xr(pd()), nP = xr(md()), rP = xr(_d()), vd;
  (function(n) {
    function e(t) {
      let r = t;
      return r && !!r.inserting && !!r.replacing;
    }
    n.is = e;
  })(vd || (vd = {}));
  function iP(n) {
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
      let P = f;
      return !!P.document && !!P.contentChanges;
    }
    function u(f) {
      let P = f;
      return !!P.uri && !!P.version;
    }
    function d(f, P, $) {
      if (u(f)) return { textDocument: { uri: t(f.uri), version: f.version }, contentChanges: [{ text: f.getText() }] };
      if (c(f)) {
        let ye = P, le = $;
        return { textDocument: { uri: t(ye), version: le }, contentChanges: f.contentChanges.map((wt) => {
          let An = wt.range;
          return { range: { start: { line: An.start.line, character: An.start.character }, end: { line: An.end.line, character: An.end.character } }, rangeLength: wt.rangeLength, text: wt.text };
        }) };
      } else throw Error("Unsupported text document change parameter");
    }
    function h(f) {
      return { textDocument: i(f) };
    }
    function p(f, P = false) {
      let $ = { textDocument: i(f) };
      return P && ($.text = f.getText()), $;
    }
    function g(f) {
      switch (f) {
        case Ae.TextDocumentSaveReason.Manual:
          return V.TextDocumentSaveReason.Manual;
        case Ae.TextDocumentSaveReason.AfterDelay:
          return V.TextDocumentSaveReason.AfterDelay;
        case Ae.TextDocumentSaveReason.FocusOut:
          return V.TextDocumentSaveReason.FocusOut;
      }
      return V.TextDocumentSaveReason.Manual;
    }
    function y(f) {
      return { textDocument: i(f.document), reason: g(f.reason) };
    }
    function _(f) {
      return { files: f.files.map((P) => ({ uri: t(P) })) };
    }
    function D(f) {
      return { files: f.files.map((P) => ({ oldUri: t(P.oldUri), newUri: t(P.newUri) })) };
    }
    function S(f) {
      return { files: f.files.map((P) => ({ uri: t(P) })) };
    }
    function C(f) {
      return { files: f.files.map((P) => ({ uri: t(P) })) };
    }
    function T(f) {
      return { files: f.files.map((P) => ({ oldUri: t(P.oldUri), newUri: t(P.newUri) })) };
    }
    function I(f) {
      return { files: f.files.map((P) => ({ uri: t(P) })) };
    }
    function N(f, P) {
      return { textDocument: i(f), position: In(P) };
    }
    function J(f) {
      switch (f) {
        case Ae.CompletionTriggerKind.TriggerCharacter:
          return V.CompletionTriggerKind.TriggerCharacter;
        case Ae.CompletionTriggerKind.TriggerForIncompleteCompletions:
          return V.CompletionTriggerKind.TriggerForIncompleteCompletions;
        default:
          return V.CompletionTriggerKind.Invoked;
      }
    }
    function Q(f, P, $) {
      return { textDocument: i(f), position: In(P), context: { triggerKind: J($.triggerKind), triggerCharacter: $.triggerCharacter } };
    }
    function te(f) {
      switch (f) {
        case Ae.SignatureHelpTriggerKind.Invoke:
          return V.SignatureHelpTriggerKind.Invoked;
        case Ae.SignatureHelpTriggerKind.TriggerCharacter:
          return V.SignatureHelpTriggerKind.TriggerCharacter;
        case Ae.SignatureHelpTriggerKind.ContentChange:
          return V.SignatureHelpTriggerKind.ContentChange;
      }
    }
    function Oe(f) {
      return { label: f.label };
    }
    function Xe(f) {
      return f.map(Oe);
    }
    function vt(f) {
      return { label: f.label, parameters: Xe(f.parameters) };
    }
    function ri(f) {
      return f.map(vt);
    }
    function ii(f) {
      return f === void 0 ? f : { signatures: ri(f.signatures), activeSignature: f.activeSignature, activeParameter: f.activeParameter };
    }
    function Lt(f, P, $) {
      return { textDocument: i(f), position: In(P), context: { isRetrigger: $.isRetrigger, triggerCharacter: $.triggerCharacter, triggerKind: te($.triggerKind), activeSignatureHelp: ii($.activeSignatureHelp) } };
    }
    function In(f) {
      return { line: f.line, character: f.character };
    }
    function At(f) {
      return f == null ? f : { line: f.line > V.uinteger.MAX_VALUE ? V.uinteger.MAX_VALUE : f.line, character: f.character > V.uinteger.MAX_VALUE ? V.uinteger.MAX_VALUE : f.character };
    }
    function Nn(f, P) {
      return Yy.map(f, At, P);
    }
    function Vt(f) {
      return f.map(At);
    }
    function xe(f) {
      return f == null ? f : { start: At(f.start), end: At(f.end) };
    }
    function Vi(f) {
      return f.map(xe);
    }
    function an(f) {
      return f == null ? f : V.Location.create(r(f.uri), xe(f.range));
    }
    function ur(f) {
      switch (f) {
        case Ae.DiagnosticSeverity.Error:
          return V.DiagnosticSeverity.Error;
        case Ae.DiagnosticSeverity.Warning:
          return V.DiagnosticSeverity.Warning;
        case Ae.DiagnosticSeverity.Information:
          return V.DiagnosticSeverity.Information;
        case Ae.DiagnosticSeverity.Hint:
          return V.DiagnosticSeverity.Hint;
      }
    }
    function si(f) {
      if (!f) return;
      let P = [];
      for (let $ of f) {
        let ye = Lr($);
        ye !== void 0 && P.push(ye);
      }
      return P.length > 0 ? P : void 0;
    }
    function Lr(f) {
      switch (f) {
        case Ae.DiagnosticTag.Unnecessary:
          return V.DiagnosticTag.Unnecessary;
        case Ae.DiagnosticTag.Deprecated:
          return V.DiagnosticTag.Deprecated;
        default:
          return;
      }
    }
    function cn(f) {
      return { message: f.message, location: an(f.location) };
    }
    function Ar(f) {
      return f.map(cn);
    }
    function oi(f) {
      if (f != null) return Br.number(f) || Br.string(f) ? f : { value: f.value, target: r(f.target) };
    }
    function lr(f) {
      let P = V.Diagnostic.create(xe(f.range), f.message), $ = f instanceof e_.ProtocolDiagnostic ? f : void 0;
      $ !== void 0 && $.data !== void 0 && (P.data = $.data);
      let ye = oi(f.code);
      return e_.DiagnosticCode.is(ye) ? $ !== void 0 && $.hasDiagnosticCode ? P.code = ye : (P.code = ye.value, P.codeDescription = { href: ye.target }) : P.code = ye, Br.number(f.severity) && (P.severity = ur(f.severity)), Array.isArray(f.tags) && (P.tags = si(f.tags)), f.relatedInformation && (P.relatedInformation = Ar(f.relatedInformation)), f.source && (P.source = f.source), P;
    }
    function dr(f, P) {
      return f == null ? f : Yy.map(f, lr, P);
    }
    function fr(f) {
      return f == null ? f : f.map(lr);
    }
    function Gi(f, P) {
      switch (f) {
        case "$string":
          return P;
        case V.MarkupKind.PlainText:
          return { kind: f, value: P };
        case V.MarkupKind.Markdown:
          return { kind: f, value: P.value };
        default:
          return `Unsupported Markup content received. Kind is: ${f}`;
      }
    }
    function ai(f) {
      switch (f) {
        case Ae.CompletionItemTag.Deprecated:
          return V.CompletionItemTag.Deprecated;
      }
    }
    function Ot(f) {
      if (f === void 0) return f;
      let P = [];
      for (let $ of f) {
        let ye = ai($);
        ye !== void 0 && P.push(ye);
      }
      return P;
    }
    function Xi(f, P) {
      return P !== void 0 ? P : f + 1;
    }
    function un(f, P = false) {
      let $, ye;
      Br.string(f.label) ? $ = f.label : ($ = f.label.label, P && (f.label.detail !== void 0 || f.label.description !== void 0) && (ye = { detail: f.label.detail, description: f.label.description }));
      let le = { label: $ };
      ye !== void 0 && (le.labelDetails = ye);
      let rt = f instanceof QS.default ? f : void 0;
      f.detail && (le.detail = f.detail), f.documentation && (!rt || rt.documentationFormat === "$string" ? le.documentation = f.documentation : le.documentation = Gi(rt.documentationFormat, f.documentation)), f.filterText && (le.filterText = f.filterText), hr(le, f), Br.number(f.kind) && (le.kind = Xi(f.kind, rt && rt.originalItemKind)), f.sortText && (le.sortText = f.sortText), f.additionalTextEdits && (le.additionalTextEdits = ci(f.additionalTextEdits)), f.commitCharacters && (le.commitCharacters = f.commitCharacters.slice()), f.command && (le.command = ue(f.command)), (f.preselect === true || f.preselect === false) && (le.preselect = f.preselect);
      let wt = Ot(f.tags);
      if (rt) {
        if (rt.data !== void 0 && (le.data = rt.data), rt.deprecated === true || rt.deprecated === false) {
          if (rt.deprecated === true && wt !== void 0 && wt.length > 0) {
            let An = wt.indexOf(Ae.CompletionItemTag.Deprecated);
            An !== -1 && wt.splice(An, 1);
          }
          le.deprecated = rt.deprecated;
        }
        rt.insertTextMode !== void 0 && (le.insertTextMode = rt.insertTextMode);
      }
      return wt !== void 0 && wt.length > 0 && (le.tags = wt), le.insertTextMode === void 0 && f.keepWhitespace === true && (le.insertTextMode = V.InsertTextMode.adjustIndentation), le;
    }
    function hr(f, P) {
      let $ = V.InsertTextFormat.PlainText, ye, le;
      P.textEdit ? (ye = P.textEdit.newText, le = P.textEdit.range) : P.insertText instanceof Ae.SnippetString ? ($ = V.InsertTextFormat.Snippet, ye = P.insertText.value) : ye = P.insertText, P.range && (le = P.range), f.insertTextFormat = $, P.fromEdit && ye !== void 0 && le !== void 0 ? f.textEdit = pr(ye, le) : f.insertText = ye;
    }
    function pr(f, P) {
      return vd.is(P) ? V.InsertReplaceEdit.create(f, xe(P.inserting), xe(P.replacing)) : { newText: f, range: xe(P) };
    }
    function jn(f) {
      return { range: xe(f.range), newText: f.newText };
    }
    function ci(f) {
      return f == null ? f : f.map(jn);
    }
    function ot(f) {
      return f <= Ae.SymbolKind.TypeParameter ? f + 1 : V.SymbolKind.Property;
    }
    function Gt(f) {
      return f;
    }
    function at(f) {
      return f.map(Gt);
    }
    function Ji(f, P, $) {
      return { textDocument: i(f), position: In(P), context: { includeDeclaration: $.includeDeclaration } };
    }
    async function nt(f, P) {
      let $ = V.CodeAction.create(f.title);
      if (f instanceof Zy.default && f.data !== void 0 && ($.data = f.data), f.kind !== void 0 && ($.kind = kt(f.kind)), f.diagnostics !== void 0 && ($.diagnostics = await dr(f.diagnostics, P)), f.edit !== void 0) throw new Error("VS Code code actions can only be converted to a protocol code action without an edit.");
      return f.command !== void 0 && ($.command = ue(f.command)), f.isPreferred !== void 0 && ($.isPreferred = f.isPreferred), f.disabled !== void 0 && ($.disabled = { reason: f.disabled.reason }), f.isAI && ($.tags ??= [], $.tags.push(V.CodeActionTag.LLMGenerated)), $;
    }
    function Fn(f) {
      let P = V.CodeAction.create(f.title);
      if (f instanceof Zy.default && f.data !== void 0 && (P.data = f.data), f.kind !== void 0 && (P.kind = kt(f.kind)), f.diagnostics !== void 0 && (P.diagnostics = fr(f.diagnostics)), f.edit !== void 0) throw new Error("VS Code code actions can only be converted to a protocol code action without an edit.");
      return f.command !== void 0 && (P.command = ue(f.command)), f.isPreferred !== void 0 && (P.isPreferred = f.isPreferred), f.disabled !== void 0 && (P.disabled = { reason: f.disabled.reason }), f.isAI && (P.tags ??= [], P.tags.push(V.CodeActionTag.LLMGenerated)), P;
    }
    async function ui(f, P) {
      if (f == null) return f;
      let $;
      return f.only && Br.string(f.only.value) && ($ = [f.only.value]), V.CodeActionContext.create(await dr(f.diagnostics, P), $, gr(f.triggerKind));
    }
    function kr(f) {
      if (f == null) return f;
      let P;
      return f.only && Br.string(f.only.value) && (P = [f.only.value]), V.CodeActionContext.create(fr(f.diagnostics), P, gr(f.triggerKind));
    }
    function gr(f) {
      switch (f) {
        case Ae.CodeActionTriggerKind.Invoke:
          return V.CodeActionTriggerKind.Invoked;
        case Ae.CodeActionTriggerKind.Automatic:
          return V.CodeActionTriggerKind.Automatic;
        default:
          return;
      }
    }
    function kt(f) {
      if (f != null) return f.value;
    }
    function v(f) {
      return V.InlineValueContext.create(f.frameId, xe(f.stoppedLocation));
    }
    function q(f, P, $) {
      return { textDocument: i(f), position: At(P), context: j($) };
    }
    function j(f) {
      return { triggerKind: H(f.triggerKind), selectedCompletionInfo: re(f.selectedCompletionInfo) };
    }
    function H(f) {
      switch (f) {
        case Ae.InlineCompletionTriggerKind.Invoke:
          return V.InlineCompletionTriggerKind.Invoked;
        case Ae.InlineCompletionTriggerKind.Automatic:
          return V.InlineCompletionTriggerKind.Automatic;
      }
    }
    function re(f) {
      if (f != null) return { range: xe(f.range), text: f.text };
    }
    function ue(f) {
      let P = V.Command.create(f.title, f.command);
      return f.tooltip && (P.tooltip = f.tooltip), f.arguments && (P.arguments = f.arguments), P;
    }
    function ae(f) {
      let P = V.CodeLens.create(xe(f.range));
      return f.command && (P.command = ue(f.command)), f instanceof YS.default && f.data && (P.data = f.data), P;
    }
    function qe(f, P) {
      let $ = { tabSize: f.tabSize, insertSpaces: f.insertSpaces };
      return P.trimTrailingWhitespace && ($.trimTrailingWhitespace = true), P.trimFinalNewlines && ($.trimFinalNewlines = true), P.insertFinalNewline && ($.insertFinalNewline = true), $;
    }
    function He(f) {
      return { textDocument: i(f) };
    }
    function me(f) {
      return { textDocument: i(f) };
    }
    function be(f) {
      let P = V.DocumentLink.create(xe(f.range));
      f.target && (P.target = r(f.target)), f.tooltip !== void 0 && (P.tooltip = f.tooltip);
      let $ = f instanceof ZS.default ? f : void 0;
      return $ && $.data && (P.data = $.data), P;
    }
    function ct(f) {
      return { textDocument: i(f) };
    }
    function bt(f) {
      let P = { name: f.name, kind: ot(f.kind), uri: r(f.uri), range: xe(f.range), selectionRange: xe(f.selectionRange) };
      return f.detail !== void 0 && f.detail.length > 0 && (P.detail = f.detail), f.tags !== void 0 && (P.tags = at(f.tags)), f instanceof eP.default && f.data !== void 0 && (P.data = f.data), P;
    }
    function Ln(f) {
      let P = { name: f.name, kind: ot(f.kind), uri: r(f.uri), range: xe(f.range), selectionRange: xe(f.selectionRange) };
      return f.detail !== void 0 && f.detail.length > 0 && (P.detail = f.detail), f.tags !== void 0 && (P.tags = at(f.tags)), f instanceof tP.default && f.data !== void 0 && (P.data = f.data), P;
    }
    function Et(f) {
      let P = f instanceof nP.default ? { name: f.name, kind: ot(f.kind), location: f.hasRange ? an(f.location) : { uri: t(f.location.uri) }, data: f.data } : { name: f.name, kind: ot(f.kind), location: an(f.location) };
      return f.tags !== void 0 && (P.tags = at(f.tags)), f.containerName !== "" && (P.containerName = f.containerName), P;
    }
    function Ct(f) {
      let P = typeof f.label == "string" ? f.label : f.label.map(li), $ = V.InlayHint.create(At(f.position), P);
      return f.kind !== void 0 && ($.kind = f.kind), f.textEdits !== void 0 && ($.textEdits = ci(f.textEdits)), f.tooltip !== void 0 && ($.tooltip = Js(f.tooltip)), f.paddingLeft !== void 0 && ($.paddingLeft = f.paddingLeft), f.paddingRight !== void 0 && ($.paddingRight = f.paddingRight), f instanceof rP.default && f.data !== void 0 && ($.data = f.data), $;
    }
    function li(f) {
      let P = V.InlayHintLabelPart.create(f.value);
      return f.location !== void 0 && (P.location = an(f.location)), f.command !== void 0 && (P.command = ue(f.command)), f.tooltip !== void 0 && (P.tooltip = Js(f.tooltip)), P;
    }
    function Js(f) {
      return typeof f == "string" ? f : { kind: V.MarkupKind.Markdown, value: f.value };
    }
    return { asUri: r, asTextDocumentIdentifier: i, asTextDocumentItem: s, asVersionedTextDocumentIdentifier: o, asOpenTextDocumentParams: a, asChangeTextDocumentParams: d, asCloseTextDocumentParams: h, asSaveTextDocumentParams: p, asWillSaveTextDocumentParams: y, asDidCreateFilesParams: _, asDidRenameFilesParams: D, asDidDeleteFilesParams: S, asWillCreateFilesParams: C, asWillRenameFilesParams: T, asWillDeleteFilesParams: I, asTextDocumentPositionParams: N, asCompletionParams: Q, asSignatureHelpParams: Lt, asWorkerPosition: In, asRange: xe, asRanges: Vi, asPosition: At, asPositions: Nn, asPositionsSync: Vt, asLocation: an, asDiagnosticSeverity: ur, asDiagnosticTag: Lr, asDiagnostic: lr, asDiagnostics: dr, asDiagnosticsSync: fr, asCompletionItem: un, asTextEdit: jn, asSymbolKind: ot, asSymbolTag: Gt, asSymbolTags: at, asReferenceParams: Ji, asCodeAction: nt, asCodeActionSync: Fn, asCodeActionContext: ui, asCodeActionContextSync: kr, asInlineValueContext: v, asCommand: ue, asCodeLens: ae, asFormattingOptions: qe, asDocumentSymbolParams: He, asCodeLensParams: me, asDocumentLink: be, asDocumentLinkParams: ct, asCallHierarchyItem: bt, asTypeHierarchyItem: Ln, asInlayHint: Ct, asWorkspaceSymbol: Et, asInlineCompletionParams: q, asInlineCompletionContext: j };
  }
});
var i_ = O((tn) => {
  "use strict";
  var sP = tn && tn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), oP = tn && tn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), Yo = tn && tn.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && sP(t, e, r[i]);
      return oP(t, e), t;
    };
  })(), qr = tn && tn.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(tn, "__esModule", { value: true });
  tn.createConverter = gP;
  var F = Yo(require("vscode")), z = Yo(X()), It = Yo(Wt()), ce = Yo(Go()), aP = qr(td()), cP = qr(rd()), uP = qr(sd()), lP = qr(ad()), n_ = ld(), dP = qr(fd()), fP = qr(pd()), hP = qr(md()), pP = qr(_d()), r_ = X(), Qo;
  (function(n) {
    function e(t) {
      let r = t;
      return r && It.string(r.language) && It.string(r.value);
    }
    n.is = e;
  })(Qo || (Qo = {}));
  function gP(n, e, t, r) {
    let s = n || ((l) => F.Uri.parse(l));
    function o(l) {
      return s(l);
    }
    function a(l) {
      let b = [];
      for (let E of l) if (typeof E == "string") b.push(E);
      else if (r_.NotebookCellTextDocumentFilter.is(E)) if (typeof E.notebook == "string") b.push({ notebookType: E.notebook, language: E.language });
      else {
        let L = E.notebook.notebookType ?? "*";
        b.push({ notebookType: L, scheme: E.notebook.scheme, pattern: Wa(E.notebook.pattern), language: E.language });
      }
      else r_.TextDocumentFilter.is(E) && b.push({ language: E.language, scheme: E.scheme, pattern: Wa(E.pattern) });
      return b;
    }
    async function c(l, b) {
      return ce.map(l, d, b);
    }
    function u(l) {
      let b = new Array(l.length);
      for (let E = 0; E < l.length; E++) b[E] = d(l[E]);
      return b;
    }
    function d(l) {
      let b = typeof l.message == "string" ? l.message : l.message.kind === "plaintext" ? l.message.value : "Received a markup diagnostic message but the client does not support it.", E = new n_.ProtocolDiagnostic(_(l.range), b, S(l.severity), l.data);
      if (l.code !== void 0) {
        if (typeof l.code == "string" || typeof l.code == "number") z.CodeDescription.is(l.codeDescription) ? E.code = { value: l.code, target: o(l.codeDescription.href) } : E.code = l.code;
        else if (n_.DiagnosticCode.is(l.code)) {
          E.hasDiagnosticCode = true;
          let L = l.code;
          E.code = { value: L.value, target: o(L.target) };
        }
      }
      return l.source && (E.source = l.source), l.relatedInformation && (E.relatedInformation = h(l.relatedInformation)), Array.isArray(l.tags) && (E.tags = p(l.tags)), E;
    }
    function h(l) {
      let b = new Array(l.length);
      for (let E = 0; E < l.length; E++) {
        let L = l[E];
        b[E] = new F.DiagnosticRelatedInformation(cn(L.location), L.message);
      }
      return b;
    }
    function p(l) {
      if (!l) return;
      let b = [];
      for (let E of l) {
        let L = g(E);
        L !== void 0 && b.push(L);
      }
      return b.length > 0 ? b : void 0;
    }
    function g(l) {
      switch (l) {
        case z.DiagnosticTag.Unnecessary:
          return F.DiagnosticTag.Unnecessary;
        case z.DiagnosticTag.Deprecated:
          return F.DiagnosticTag.Deprecated;
        default:
          return;
      }
    }
    function y(l) {
      return l ? new F.Position(l.line, l.character) : void 0;
    }
    function _(l) {
      return l ? new F.Range(l.start.line, l.start.character, l.end.line, l.end.character) : void 0;
    }
    async function D(l, b) {
      return ce.map(l, (E) => new F.Range(E.start.line, E.start.character, E.end.line, E.end.character), b);
    }
    function S(l) {
      if (l == null) return F.DiagnosticSeverity.Error;
      switch (l) {
        case z.DiagnosticSeverity.Error:
          return F.DiagnosticSeverity.Error;
        case z.DiagnosticSeverity.Warning:
          return F.DiagnosticSeverity.Warning;
        case z.DiagnosticSeverity.Information:
          return F.DiagnosticSeverity.Information;
        case z.DiagnosticSeverity.Hint:
          return F.DiagnosticSeverity.Hint;
      }
      return F.DiagnosticSeverity.Error;
    }
    function C(l) {
      if (It.string(l)) return I(l);
      if (Qo.is(l)) return I().appendCodeblock(l.value, l.language);
      if (Array.isArray(l)) {
        let b = [];
        for (let E of l) {
          let L = I();
          Qo.is(E) ? L.appendCodeblock(E.value, E.language) : L.appendMarkdown(E), b.push(L);
        }
        return b;
      } else return I(l);
    }
    function T(l) {
      if (It.string(l)) return l;
      switch (l.kind) {
        case z.MarkupKind.Markdown:
          return I(l.value);
        case z.MarkupKind.PlainText:
          return l.value;
        default:
          return `Unsupported Markup content received. Kind is: ${l.kind}`;
      }
    }
    function I(l) {
      let b;
      if (l === void 0 || typeof l == "string") b = new F.MarkdownString(l);
      else switch (l.kind) {
        case z.MarkupKind.Markdown:
          b = new F.MarkdownString(l.value);
          break;
        case z.MarkupKind.PlainText:
          b = new F.MarkdownString(), b.appendText(l.value);
          break;
        default:
          b = new F.MarkdownString(), b.appendText(`Unsupported Markup content received. Kind is: ${l.kind}`);
          break;
      }
      return b.isTrusted = e, b.supportHtml = t, b.supportThemeIcons = r, b;
    }
    function N(l) {
      if (l) return new F.Hover(C(l.contents), _(l.range));
    }
    async function J(l, b, E) {
      if (!l) return;
      if (Array.isArray(l)) return ce.map(l, (kn) => vt(kn, b), E);
      let L = l, { defaultRange: Me, commitCharacters: ke } = Q(L, b), _e = await ce.map(L.items, (kn) => vt(kn, ke, L.applyKind?.commitCharacters, Me, L.itemDefaults?.insertTextMode, L.itemDefaults?.insertTextFormat, L.itemDefaults?.data, L.applyKind?.data), E);
      return new F.CompletionList(_e, L.isIncomplete);
    }
    function Q(l, b) {
      let E = l.itemDefaults?.editRange, L = l.itemDefaults?.commitCharacters ?? b;
      return z.Range.is(E) ? { defaultRange: _(E), commitCharacters: L } : E !== void 0 ? { defaultRange: { inserting: _(E.insert), replacing: _(E.replace) }, commitCharacters: L } : { defaultRange: void 0, commitCharacters: L };
    }
    function te(l) {
      return z.CompletionItemKind.Text <= l && l <= z.CompletionItemKind.TypeParameter ? [l - 1, void 0] : [F.CompletionItemKind.Text, l];
    }
    function Oe(l) {
      switch (l) {
        case z.CompletionItemTag.Deprecated:
          return F.CompletionItemTag.Deprecated;
      }
    }
    function Xe(l) {
      if (l == null) return [];
      let b = [];
      for (let E of l) {
        let L = Oe(E);
        L !== void 0 && b.push(L);
      }
      return b;
    }
    function vt(l, b, E, L, Me, ke, _e, kn) {
      let mr = Xe(l.tags), $t = Lt(l), Ue = new aP.default($t);
      l.detail && (Ue.detail = l.detail), l.documentation && (Ue.documentation = T(l.documentation), Ue.documentationFormat = It.string(l.documentation) ? "$string" : l.documentation.kind), l.filterText && (Ue.filterText = l.filterText);
      let Qs = In(l, L, ke);
      if (Qs && (Ue.insertText = Qs.text, Ue.range = Qs.range, Ue.fromEdit = Qs.fromEdit), It.number(l.kind)) {
        let [eC, Zh] = te(l.kind);
        Ue.kind = eC, Zh && (Ue.originalItemKind = Zh);
      }
      l.sortText && (Ue.sortText = l.sortText), l.additionalTextEdits && (Ue.additionalTextEdits = xe(l.additionalTextEdits));
      let Qh = ri(l, b, E);
      Qh && (Ue.commitCharacters = Qh.slice()), l.command && (Ue.command = at(l.command)), (l.deprecated === true || l.deprecated === false) && (Ue.deprecated = l.deprecated, l.deprecated === true && mr.push(F.CompletionItemTag.Deprecated)), (l.preselect === true || l.preselect === false) && (Ue.preselect = l.preselect);
      let Yh = ii(l, _e, kn);
      Yh !== void 0 && (Ue.data = Yh), mr.length > 0 && (Ue.tags = mr);
      let Ka = l.insertTextMode ?? Me;
      return Ka !== void 0 && (Ue.insertTextMode = Ka, Ka === z.InsertTextMode.asIs && (Ue.keepWhitespace = true)), Ue;
    }
    function ri(l, b, E) {
      if (E === z.ApplyKind.Merge) {
        if (!b && !l.commitCharacters) return;
        let L = /* @__PURE__ */ new Set();
        if (b) for (let Me of b) L.add(Me);
        if (It.stringArray(l.commitCharacters)) for (let Me of l.commitCharacters) L.add(Me);
        return Array.from(L);
      }
      return l.commitCharacters !== void 0 ? It.stringArray(l.commitCharacters) ? l.commitCharacters : void 0 : b;
    }
    function ii(l, b, E) {
      if (E === z.ApplyKind.Merge) {
        let L = { ...b };
        return l.data && Object.entries(l.data).forEach(([Me, ke]) => {
          ke != null && (L[Me] = ke);
        }), L;
      }
      return l.data ?? b;
    }
    function Lt(l) {
      return z.CompletionItemLabelDetails.is(l.labelDetails) ? { label: l.label, detail: l.labelDetails.detail, description: l.labelDetails.description } : l.label;
    }
    function In(l, b, E) {
      let L = l.insertTextFormat ?? E;
      if (l.textEdit !== void 0 || b !== void 0) {
        let [Me, ke] = l.textEdit !== void 0 ? At(l.textEdit) : [b, l.textEditText ?? l.label];
        return L === z.InsertTextFormat.Snippet ? { text: new F.SnippetString(ke), range: Me, fromEdit: true } : { text: ke, range: Me, fromEdit: true };
      } else return l.insertText ? L === z.InsertTextFormat.Snippet ? { text: new F.SnippetString(l.insertText), fromEdit: false } : { text: l.insertText, fromEdit: false } : void 0;
    }
    function At(l) {
      return z.InsertReplaceEdit.is(l) ? [{ inserting: _(l.insert), replacing: _(l.replace) }, l.newText] : [_(l.range), l.newText];
    }
    function Nn(l) {
      if (l) return new F.TextEdit(_(l.range), l.newText);
    }
    async function Vt(l, b) {
      if (l) return ce.map(l, Nn, b);
    }
    function xe(l) {
      if (!l) return;
      let b = new Array(l.length);
      for (let E = 0; E < l.length; E++) b[E] = Nn(l[E]);
      return b;
    }
    async function Vi(l, b) {
      if (!l) return;
      let E = new F.SignatureHelp();
      return It.number(l.activeSignature) ? E.activeSignature = l.activeSignature : E.activeSignature = 0, It.number(l.activeParameter) ? E.activeParameter = l.activeParameter : l.activeParameter === null ? E.activeParameter = -1 : E.activeParameter = 0, l.signatures && (E.signatures = await an(l.signatures, b)), E;
    }
    async function an(l, b) {
      return ce.mapAsync(l, ur, b);
    }
    async function ur(l, b) {
      let E = new F.SignatureInformation(l.label);
      return l.documentation !== void 0 && (E.documentation = T(l.documentation)), l.parameters !== void 0 && (E.parameters = await si(l.parameters, b)), l.activeParameter !== void 0 && (E.activeParameter = l.activeParameter ?? -1), E;
    }
    function si(l, b) {
      return ce.map(l, Lr, b);
    }
    function Lr(l) {
      let b = new F.ParameterInformation(l.label);
      return l.documentation && (b.documentation = T(l.documentation)), b;
    }
    function cn(l) {
      return l ? new F.Location(s(l.uri), _(l.range)) : void 0;
    }
    async function Ar(l, b) {
      if (l) return dr(l, b);
    }
    async function oi(l, b) {
      if (l) return dr(l, b);
    }
    function lr(l) {
      if (!l) return;
      let b = { targetUri: s(l.targetUri), targetRange: _(l.targetRange), originSelectionRange: _(l.originSelectionRange), targetSelectionRange: _(l.targetSelectionRange) };
      if (!b.targetSelectionRange) throw new Error("targetSelectionRange must not be undefined or null");
      return b;
    }
    async function dr(l, b) {
      if (l) if (It.array(l)) {
        if (l.length === 0) return [];
        if (z.LocationLink.is(l[0])) {
          let E = l;
          return ce.map(E, lr, b);
        } else {
          let E = l;
          return ce.map(E, cn, b);
        }
      } else return z.LocationLink.is(l) ? [lr(l)] : cn(l);
    }
    async function fr(l, b) {
      if (l) return ce.map(l, cn, b);
    }
    async function Gi(l, b) {
      if (l) return ce.map(l, ai, b);
    }
    function ai(l) {
      let b = new F.DocumentHighlight(_(l.range));
      return It.number(l.kind) && (b.kind = Ot(l.kind)), b;
    }
    function Ot(l) {
      switch (l) {
        case z.DocumentHighlightKind.Text:
          return F.DocumentHighlightKind.Text;
        case z.DocumentHighlightKind.Read:
          return F.DocumentHighlightKind.Read;
        case z.DocumentHighlightKind.Write:
          return F.DocumentHighlightKind.Write;
      }
      return F.DocumentHighlightKind.Text;
    }
    async function Xi(l, b) {
      if (l) return ce.map(l, jn, b);
    }
    function un(l) {
      return l <= z.SymbolKind.TypeParameter ? l - 1 : F.SymbolKind.Property;
    }
    function hr(l) {
      switch (l) {
        case z.SymbolTag.Deprecated:
          return F.SymbolTag.Deprecated;
        default:
          return;
      }
    }
    function pr(l) {
      if (l == null) return;
      let b = [];
      for (let E of l) {
        let L = hr(E);
        L !== void 0 && b.push(L);
      }
      return b.length === 0 ? void 0 : b;
    }
    function jn(l) {
      let b = l.data, E = l.location, L = E.range === void 0 || b !== void 0 ? new hP.default(l.name, un(l.kind), l.containerName ?? "", E.range === void 0 ? s(E.uri) : new F.Location(s(l.location.uri), _(E.range)), b) : new F.SymbolInformation(l.name, un(l.kind), l.containerName ?? "", new F.Location(s(l.location.uri), _(E.range)));
      return Gt(L, l), L;
    }
    async function ci(l, b) {
      if (l != null) return ce.map(l, ot, b);
    }
    function ot(l) {
      let b = new F.DocumentSymbol(l.name, l.detail || "", un(l.kind), _(l.range), _(l.selectionRange));
      if (Gt(b, l), l.children !== void 0 && l.children.length > 0) {
        let E = [];
        for (let L of l.children) E.push(ot(L));
        b.children = E;
      }
      return b;
    }
    function Gt(l, b) {
      l.tags = pr(b.tags), b.deprecated && (l.tags ? l.tags.includes(F.SymbolTag.Deprecated) || (l.tags = l.tags.concat(F.SymbolTag.Deprecated)) : l.tags = [F.SymbolTag.Deprecated]);
    }
    function at(l) {
      let b = { title: l.title, command: l.command };
      return l.tooltip && (b.tooltip = l.tooltip), l.arguments && (b.arguments = l.arguments), b;
    }
    async function Ji(l, b) {
      if (l) return ce.map(l, at, b);
    }
    let nt = /* @__PURE__ */ new Map();
    nt.set(z.CodeActionKind.Empty, F.CodeActionKind.Empty), nt.set(z.CodeActionKind.QuickFix, F.CodeActionKind.QuickFix), nt.set(z.CodeActionKind.Refactor, F.CodeActionKind.Refactor), nt.set(z.CodeActionKind.RefactorExtract, F.CodeActionKind.RefactorExtract), nt.set(z.CodeActionKind.RefactorInline, F.CodeActionKind.RefactorInline), nt.set(z.CodeActionKind.RefactorRewrite, F.CodeActionKind.RefactorRewrite), nt.set(z.CodeActionKind.Source, F.CodeActionKind.Source), nt.set(z.CodeActionKind.SourceOrganizeImports, F.CodeActionKind.SourceOrganizeImports);
    function Fn(l) {
      if (l == null) return;
      let b = nt.get(l);
      if (b) return b;
      let E = l.split(".");
      b = F.CodeActionKind.Empty;
      for (let L of E) b = b.append(L);
      return b;
    }
    function ui(l) {
      if (l != null) return l.map((b) => Fn(b));
    }
    function kr(l) {
      if (l != null) return l.map((b) => ({ kind: Fn(b.kind), command: at(b.command) }));
    }
    async function gr(l, b) {
      if (l == null) return;
      let E = new lP.default(l.title, l.data);
      return l.kind !== void 0 && (E.kind = Fn(l.kind)), l.diagnostics !== void 0 && (E.diagnostics = u(l.diagnostics)), l.edit !== void 0 && (E.edit = await j(l.edit, b)), l.command !== void 0 && (E.command = at(l.command)), l.isPreferred !== void 0 && (E.isPreferred = l.isPreferred), l.disabled !== void 0 && (E.disabled = { reason: l.disabled.reason }), l.tags?.includes(z.CodeActionTag.LLMGenerated) && (E.isAI = true), E;
    }
    function kt(l, b) {
      return ce.mapAsync(l, async (E) => z.Command.is(E) ? at(E) : gr(E, b), b);
    }
    function v(l) {
      if (!l) return;
      let b = new cP.default(_(l.range));
      return l.command && (b.command = at(l.command)), l.data !== void 0 && l.data !== null && (b.data = l.data), b;
    }
    async function q(l, b) {
      if (l) return ce.map(l, v, b);
    }
    async function j(l, b) {
      if (!l) return;
      let E = /* @__PURE__ */ new Map();
      if (l.changeAnnotations !== void 0) {
        let ke = l.changeAnnotations;
        await ce.forEach(Object.keys(ke), (_e) => {
          let kn = H(ke[_e]);
          E.set(_e, kn);
        }, b);
      }
      let L = (ke) => {
        if (ke !== void 0) return E.get(ke);
      }, Me = new F.WorkspaceEdit();
      if (l.documentChanges) {
        let ke = l.documentChanges;
        await ce.forEach(ke, (_e) => {
          if (z.CreateFile.is(_e)) Me.createFile(s(_e.uri), _e.options, L(_e.annotationId));
          else if (z.RenameFile.is(_e)) Me.renameFile(s(_e.oldUri), s(_e.newUri), _e.options, L(_e.annotationId));
          else if (z.DeleteFile.is(_e)) Me.deleteFile(s(_e.uri), _e.options, L(_e.annotationId));
          else if (z.TextDocumentEdit.is(_e)) {
            let kn = s(_e.textDocument.uri), mr = [];
            for (let $t of _e.edits) z.AnnotatedTextEdit.is($t) ? mr.push([new F.TextEdit(_($t.range), $t.newText), L($t.annotationId)]) : z.SnippetTextEdit.is($t) ? mr.push([new F.SnippetTextEdit(_($t.range), new F.SnippetString($t.snippet.value)), L($t.annotationId)]) : mr.push([new F.TextEdit(_($t.range), $t.newText), void 0]);
            Me.set(kn, mr);
          } else throw new Error(`Unknown workspace edit change received:
${JSON.stringify(_e, void 0, 4)}`);
        }, b);
      } else if (l.changes) {
        let ke = l.changes;
        await ce.forEach(Object.keys(ke), (_e) => {
          Me.set(s(_e), xe(ke[_e]));
        }, b);
      }
      return Me;
    }
    function H(l) {
      if (l !== void 0) return { label: l.label, needsConfirmation: !!l.needsConfirmation, description: l.description };
    }
    function re(l) {
      let b = _(l.range), E = l.target ? o(l.target) : void 0, L = new uP.default(b, E);
      return l.tooltip !== void 0 && (L.tooltip = l.tooltip), l.data !== void 0 && l.data !== null && (L.data = l.data), L;
    }
    async function ue(l, b) {
      if (l) return ce.map(l, re, b);
    }
    function ae(l) {
      return new F.Color(l.red, l.green, l.blue, l.alpha);
    }
    function qe(l) {
      return new F.ColorInformation(_(l.range), ae(l.color));
    }
    async function He(l, b) {
      if (l) return ce.map(l, qe, b);
    }
    function me(l) {
      let b = new F.ColorPresentation(l.label);
      return b.additionalTextEdits = xe(l.additionalTextEdits), l.textEdit && (b.textEdit = Nn(l.textEdit)), b;
    }
    async function be(l, b) {
      if (l) return ce.map(l, me, b);
    }
    function ct(l) {
      if (l) switch (l) {
        case z.FoldingRangeKind.Comment:
          return F.FoldingRangeKind.Comment;
        case z.FoldingRangeKind.Imports:
          return F.FoldingRangeKind.Imports;
        case z.FoldingRangeKind.Region:
          return F.FoldingRangeKind.Region;
      }
    }
    function bt(l) {
      return new F.FoldingRange(l.startLine, l.endLine, ct(l.kind));
    }
    async function Ln(l, b) {
      if (l) return ce.map(l, bt, b);
    }
    function Et(l) {
      return new F.SelectionRange(_(l.range), l.parent ? Et(l.parent) : void 0);
    }
    async function Ct(l, b) {
      return Array.isArray(l) ? ce.map(l, Et, b) : [];
    }
    function li(l) {
      return z.InlineValueText.is(l) ? new F.InlineValueText(_(l.range), l.text) : z.InlineValueVariableLookup.is(l) ? new F.InlineValueVariableLookup(_(l.range), l.variableName, l.caseSensitiveLookup) : new F.InlineValueEvaluatableExpression(_(l.range), l.expression);
    }
    async function Js(l, b) {
      return Array.isArray(l) ? ce.map(l, li, b) : [];
    }
    async function f(l, b) {
      let E = typeof l.label == "string" ? l.label : await ce.map(l.label, P, b), L = new pP.default(y(l.position), E);
      return l.kind !== void 0 && (L.kind = l.kind), l.textEdits !== void 0 && (L.textEdits = await Vt(l.textEdits, b)), l.tooltip !== void 0 && (L.tooltip = $(l.tooltip)), l.paddingLeft !== void 0 && (L.paddingLeft = l.paddingLeft), l.paddingRight !== void 0 && (L.paddingRight = l.paddingRight), l.data !== void 0 && (L.data = l.data), L;
    }
    function P(l) {
      let b = new F.InlayHintLabelPart(l.value);
      return l.location !== void 0 && (b.location = cn(l.location)), l.tooltip !== void 0 && (b.tooltip = $(l.tooltip)), l.command !== void 0 && (b.command = at(l.command)), b;
    }
    function $(l) {
      return typeof l == "string" ? l : I(l);
    }
    async function ye(l, b) {
      if (Array.isArray(l)) return ce.mapAsync(l, f, b);
    }
    function le(l) {
      if (l === null) return;
      let b = new dP.default(un(l.kind), l.name, l.detail || "", o(l.uri), _(l.range), _(l.selectionRange), l.data);
      return l.tags !== void 0 && (b.tags = pr(l.tags)), b;
    }
    async function rt(l, b) {
      if (l !== null) return ce.map(l, le, b);
    }
    async function wt(l, b) {
      return new F.CallHierarchyIncomingCall(le(l.from), await D(l.fromRanges, b));
    }
    async function An(l, b) {
      if (l !== null) return ce.mapAsync(l, wt, b);
    }
    async function Gh(l, b) {
      return new F.CallHierarchyOutgoingCall(le(l.to), await D(l.fromRanges, b));
    }
    async function Bb(l, b) {
      if (l !== null) return ce.mapAsync(l, Gh, b);
    }
    async function Vb(l, b) {
      if (l != null) return new F.SemanticTokens(new Uint32Array(l.data), l.resultId);
    }
    function Xh(l) {
      return new F.SemanticTokensEdit(l.start, l.deleteCount, l.data !== void 0 ? new Uint32Array(l.data) : void 0);
    }
    async function Gb(l, b) {
      if (l != null) return new F.SemanticTokensEdits(l.edits.map(Xh), l.resultId);
    }
    function Xb(l) {
      return l;
    }
    async function Jb(l, b) {
      if (l != null) return new F.LinkedEditingRanges(await D(l.ranges, b), Qb(l.wordPattern));
    }
    function Qb(l) {
      if (l != null) return new RegExp(l);
    }
    function Jh(l) {
      if (l === null) return;
      let b = new fP.default(un(l.kind), l.name, l.detail || "", o(l.uri), _(l.range), _(l.selectionRange), l.data);
      return l.tags !== void 0 && (b.tags = pr(l.tags)), b;
    }
    async function Yb(l, b) {
      if (l !== null) return ce.map(l, Jh, b);
    }
    function Wa(l) {
      if (It.string(l)) return l;
      if (z.RelativePattern.is(l)) {
        if (z.URI.is(l.baseUri)) return new F.RelativePattern(o(l.baseUri), l.pattern);
        if (z.WorkspaceFolder.is(l.baseUri)) {
          let b = F.workspace.getWorkspaceFolder(o(l.baseUri.uri));
          return b !== void 0 ? new F.RelativePattern(b, l.pattern) : void 0;
        }
      }
    }
    async function Zb(l, b) {
      if (!l) return;
      if (Array.isArray(l)) return ce.map(l, (Me) => za(Me), b);
      let E = l, L = await ce.map(E.items, (Me) => za(Me), b);
      return new F.InlineCompletionList(L);
    }
    function za(l) {
      let b;
      typeof l.insertText == "string" ? b = l.insertText : b = new F.SnippetString(l.insertText.value);
      let E;
      l.command && (E = at(l.command));
      let L = new F.InlineCompletionItem(b, _(l.range), E);
      return l.filterText && (L.filterText = l.filterText), L;
    }
    return { asUri: o, asDocumentSelector: a, asDiagnostics: c, asDiagnostic: d, asRange: _, asRanges: D, asPosition: y, asDiagnosticSeverity: S, asDiagnosticTag: g, asHover: N, asCompletionResult: J, asCompletionItem: vt, asTextEdit: Nn, asTextEdits: Vt, asSignatureHelp: Vi, asSignatureInformations: an, asSignatureInformation: ur, asParameterInformations: si, asParameterInformation: Lr, asDeclarationResult: Ar, asDefinitionResult: oi, asLocation: cn, asReferences: fr, asDocumentHighlights: Gi, asDocumentHighlight: ai, asDocumentHighlightKind: Ot, asSymbolKind: un, asSymbolTag: hr, asSymbolTags: pr, asSymbolInformations: Xi, asSymbolInformation: jn, asDocumentSymbols: ci, asDocumentSymbol: ot, asCommand: at, asCommands: Ji, asCodeAction: gr, asCodeActionKind: Fn, asCodeActionKinds: ui, asCodeActionDocumentations: kr, asCodeActionResult: kt, asCodeLens: v, asCodeLenses: q, asWorkspaceEdit: j, asDocumentLink: re, asDocumentLinks: ue, asFoldingRangeKind: ct, asFoldingRange: bt, asFoldingRanges: Ln, asColor: ae, asColorInformation: qe, asColorInformations: He, asColorPresentation: me, asColorPresentations: be, asSelectionRange: Et, asSelectionRanges: Ct, asInlineValue: li, asInlineValues: Js, asInlayHint: f, asInlayHints: ye, asSemanticTokensLegend: Xb, asSemanticTokens: Vb, asSemanticTokensEdit: Xh, asSemanticTokensEdits: Gb, asCallHierarchyItem: le, asCallHierarchyItems: rt, asCallHierarchyIncomingCall: wt, asCallHierarchyIncomingCalls: An, asCallHierarchyOutgoingCall: Gh, asCallHierarchyOutgoingCalls: Bb, asLinkedEditingRanges: Jb, asTypeHierarchyItem: Jh, asTypeHierarchyItems: Yb, asGlobPattern: Wa, asInlineCompletionResult: Zb, asInlineCompletionItem: za };
  }
});
var Cd = O((pn) => {
  "use strict";
  var mP = pn && pn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), yP = pn && pn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), _P = pn && pn.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && mP(t, e, r[i]);
      return yP(t, e), t;
    };
  })();
  Object.defineProperty(pn, "__esModule", { value: true });
  pn.ProgressPart = void 0;
  var s_ = require("vscode"), o_ = X(), a_ = _P(Wt()), bd = class {
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
      this._client = e, this._token = t, this._reported = 0, this._infinite = false, this._lspProgressDisposable = this._client.onProgress(o_.WorkDoneProgress.type, this._token, (i) => {
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
      this._infinite = e.percentage === void 0, this._lspProgressDisposable !== void 0 && s_.window.withProgress({ location: s_.ProgressLocation.Window, cancellable: e.cancellable, title: e.title }, async (t, r) => {
        if (this._lspProgressDisposable !== void 0) return this._progress = t, this._cancellationToken = r, this._tokenDisposable = this._cancellationToken.onCancellationRequested(() => {
          this._client.sendNotification(o_.WorkDoneProgressCancelNotification.type, { token: this._token });
        }), this.report(e), new Promise((i, s) => {
          this._resolve = i, this._reject = s;
        });
      });
    }
    report(e) {
      if (this._infinite && a_.string(e.message)) this._progress !== void 0 && this._progress.report({ message: e.message });
      else if (a_.number(e.percentage)) {
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
  pn.ProgressPart = bd;
});
var l_ = O((gn) => {
  "use strict";
  var vP = gn && gn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), bP = gn && gn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), na = gn && gn.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && vP(t, e, r[i]);
      return bP(t, e), t;
    };
  })();
  Object.defineProperty(gn, "__esModule", { value: true });
  gn.NotebookDocumentSyncFeature = void 0;
  var Ee = na(require("vscode")), nr = na(X()), CP = na(Se()), c_ = na(Wt()), wP = zl();
  function u_(n, e) {
    return n[e] === void 0 && (n[e] = {}), n[e];
  }
  var Ii;
  (function(n) {
    let e;
    (function(t) {
      function r(p, g) {
        return { version: p.version, uri: g.asUri(p.uri) };
      }
      t.asVersionedNotebookDocumentIdentifier = r;
      function i(p, g, y) {
        let _ = nr.NotebookDocument.create(y.asUri(p.uri), p.notebookType, p.version, s(g, y));
        return Object.keys(p.metadata).length > 0 && (_.metadata = o(p.metadata)), _;
      }
      t.asNotebookDocument = i;
      function s(p, g) {
        return p.map((y) => a(y, g));
      }
      t.asNotebookCells = s;
      function o(p) {
        return u(/* @__PURE__ */ new Set(), p);
      }
      t.asMetadata = o;
      function a(p, g) {
        let y = nr.NotebookCell.create(c(p.kind), g.asUri(p.document.uri));
        return Object.keys(p.metadata).length > 0 && (y.metadata = o(p.metadata)), p.executionSummary !== void 0 && c_.number(p.executionSummary.executionOrder) && c_.boolean(p.executionSummary.success) && (y.executionSummary = { executionOrder: p.executionSummary.executionOrder, success: p.executionSummary.success }), y;
      }
      t.asNotebookCell = a;
      function c(p) {
        switch (p) {
          case Ee.NotebookCellKind.Markup:
            return nr.NotebookCellKind.Markup;
          case Ee.NotebookCellKind.Code:
            return nr.NotebookCellKind.Code;
        }
      }
      function u(p, g) {
        if (p.has(g)) throw new Error("Can't deep copy cyclic structures.");
        if (Array.isArray(g)) {
          let y = [];
          for (let _ of g) if (_ !== null && typeof _ == "object" || Array.isArray(_)) y.push(u(p, _));
          else {
            if (_ instanceof RegExp) throw new Error("Can't transfer regular expressions to the server");
            y.push(_);
          }
          return y;
        } else {
          let y = Object.keys(g), _ = /* @__PURE__ */ Object.create(null);
          for (let D of y) {
            let S = g[D];
            if (S !== null && typeof S == "object" || Array.isArray(S)) _[D] = u(p, S);
            else {
              if (S instanceof RegExp) throw new Error("Can't transfer regular expressions to the server");
              _[D] = S;
            }
          }
          return _;
        }
      }
      function d(p, g) {
        let y = g.asChangeTextDocumentParams(p, p.document.uri, p.document.version);
        return { document: y.textDocument, changes: y.contentChanges };
      }
      t.asTextContentChange = d;
      function h(p, g) {
        let y = /* @__PURE__ */ Object.create(null);
        if (p.metadata && (y.metadata = n.c2p.asMetadata(p.metadata)), p.cells !== void 0) {
          let _ = /* @__PURE__ */ Object.create(null), D = p.cells;
          D.structure && (_.structure = { array: { start: D.structure.array.start, deleteCount: D.structure.array.deleteCount, cells: D.structure.array.cells !== void 0 ? D.structure.array.cells.map((S) => n.c2p.asNotebookCell(S, g)) : void 0 }, didOpen: D.structure.didOpen !== void 0 ? D.structure.didOpen.map((S) => g.asOpenTextDocumentParams(S.document).textDocument) : void 0, didClose: D.structure.didClose !== void 0 ? D.structure.didClose.map((S) => g.asCloseTextDocumentParams(S.document).textDocument) : void 0 }), D.data !== void 0 && (_.data = D.data.map((S) => n.c2p.asNotebookCell(S, g))), D.textContent !== void 0 && (_.textContent = D.textContent.map((S) => n.c2p.asTextContentChange(S, g))), Object.keys(_).length > 0 && (y.cells = _);
        }
        return y;
      }
      t.asNotebookDocumentChangeEvent = h;
    })(e = n.c2p || (n.c2p = {}));
  })(Ii || (Ii = {}));
  var wd;
  (function(n) {
    function e(a, c, u) {
      let d = a.length, h = c.length, p = 0;
      for (; p < h && p < d && t(a[p], c[p], u); ) p++;
      if (p < h && p < d) {
        let g = d - 1, y = h - 1;
        for (; g >= 0 && y >= 0 && t(a[g], c[y], u); ) g--, y--;
        let _ = g + 1 - p, D = p === y + 1 ? void 0 : c.slice(p, y + 1);
        return D !== void 0 ? { start: p, deleteCount: _, cells: D } : { start: p, deleteCount: _ };
      } else return p < h ? { start: p, deleteCount: 0, cells: c.slice(p) } : p < d ? { start: p, deleteCount: d - p } : void 0;
    }
    n.computeDiff = e;
    function t(a, c, u = true) {
      return a.kind !== c.kind || a.document.uri.toString() !== c.document.uri.toString() || a.document.languageId !== c.document.languageId || !r(a.executionSummary, c.executionSummary) ? false : !u || u && s(a.metadata, c.metadata);
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
      let u = Array.isArray(a), d = Array.isArray(c);
      if (u !== d) return false;
      if (u && d) {
        if (a.length !== c.length) return false;
        for (let h = 0; h < a.length; h++) if (!s(a[h], c[h])) return false;
      }
      if (o(a) && o(c)) {
        let h = Object.keys(a), p = Object.keys(c);
        if (h.length !== p.length || (h.sort(), p.sort(), !s(h, p))) return false;
        for (let g = 0; g < h.length; g++) {
          let y = h[g];
          if (!s(a[y], c[y])) return false;
        }
        return true;
      }
      return false;
    }
    function o(a) {
      return a !== null && typeof a == "object";
    }
    n.isObjectLiteral = o;
  })(wd || (wd = {}));
  var Zo;
  (function(n) {
    function e(t, r) {
      if (typeof t == "string") return t === "*" || r.notebookType === t;
      if (t.notebookType !== void 0 && t.notebookType !== "*" && r.notebookType !== t.notebookType) return false;
      let i = r.uri;
      return !(t.scheme !== void 0 && t.scheme !== "*" && i.scheme !== t.scheme || t.pattern !== void 0 && !(0, wP.matchGlobPattern)(t.pattern, i));
    }
    n.matchNotebook = e;
  })(Zo || (Zo = {}));
  var ea;
  (function(n) {
    function e(r) {
      let i = r.notebookSelector, s = [];
      for (let o of i) {
        let a = (typeof o.notebook == "string" ? o.notebook : o.notebook?.notebookType) ?? "*", c = typeof o.notebook == "string" ? void 0 : o.notebook?.scheme, u = typeof o.notebook == "string" ? void 0 : o.notebook?.pattern;
        if (o.cells !== void 0) for (let d of o.cells) s.push(t(a, c, u, d.language));
        else s.push(t(a, c, u, void 0));
      }
      return s;
    }
    n.asDocumentSelector = e;
    function t(r, i, s, o) {
      return i === void 0 && s === void 0 ? { notebook: r, language: o } : { notebook: { notebookType: r, scheme: i, pattern: s }, language: o };
    }
  })(ea || (ea = {}));
  var ta;
  (function(n) {
    function e(t) {
      return { cells: t, uris: new Set(t.map((r) => r.document.uri.toString())) };
    }
    n.create = e;
  })(ta || (ta = {}));
  var Ni = class {
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
      this.client = e, this.options = t, this.notebookSyncInfo = /* @__PURE__ */ new Map(), this.notebookDidOpen = /* @__PURE__ */ new Set(), this.disposables = [], this.selector = e.protocol2CodeConverter.asDocumentSelector(ea.asDocumentSelector(t)), this.onChangeNotificationSent = r, this.onOpenNotificationSent = i, this.onCloseNotificationSent = s, this.onSaveNotificationSent = o, Ee.workspace.onDidOpenNotebookDocument((a) => {
        this.notebookDidOpen.add(a.uri.toString()), this.didOpen(a);
      }, void 0, this.disposables);
      for (let a of Ee.workspace.notebookDocuments) this.notebookDidOpen.add(a.uri.toString()), this.didOpen(a);
      Ee.workspace.onDidChangeNotebookDocument((a) => this.didChangeNotebookDocument(a), void 0, this.disposables), this.options.save === true && Ee.workspace.onDidSaveNotebookDocument((a) => this.didSave(a), void 0, this.disposables), Ee.workspace.onDidCloseNotebookDocument((a) => {
        this.didClose(a), this.notebookDidOpen.delete(a.uri.toString());
      }, void 0, this.disposables);
    }
    getState() {
      for (let e of Ee.workspace.notebookDocuments) if (this.getMatchingCellsConsideringSyncInfo(e) !== void 0) return { kind: "document", id: "$internal", registrations: true, matches: true };
      return { kind: "document", id: "$internal", registrations: true, matches: false };
    }
    get mode() {
      return "notebook";
    }
    handles(e) {
      if (Ee.languages.match(this.selector, e) > 0) return true;
      let t = e.uri.toString();
      for (let r of this.notebookSyncInfo.values()) if (r.uris.has(t)) return true;
      return false;
    }
    didOpenNotebookCellTextDocument(e, t) {
      if (Ee.languages.match(this.selector, t.document) === 0 || !this.notebookDidOpen.has(e.uri.toString())) return;
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
      if (Ee.languages.match(this.selector, r.document) === 0) return;
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
          await this.client.sendNotification(nr.DidOpenNotebookDocumentNotification.type, { notebookDocument: Ii.c2p.asNotebookDocument(s, o, this.client.code2ProtocolConverter), cellTextDocuments: a }), this.onOpenNotificationSent.fire(s);
        } catch (c) {
          throw this.client.error("Sending DidOpenNotebookDocumentNotification failed", c), c;
        }
      }, i = this.client.middleware?.notebooks;
      return this.notebookSyncInfo.set(e.uri.toString(), ta.create(t)), i?.didOpen !== void 0 ? i.didOpen(e, t, r) : r(e, t);
    }
    async sendDidChangeNotebookDocument(e) {
      let t = this.getMatchingCellsFromSyncInfo(e.notebook);
      if (t === void 0) throw new Error(`Received changed event for un-synced notebook ${e.notebook.uri.toString()}`);
      return this.doSendChange(e, t);
    }
    async doSendChange(e, t) {
      let r = async (s) => {
        try {
          await this.client.sendNotification(nr.DidChangeNotebookDocumentNotification.type, { notebookDocument: Ii.c2p.asVersionedNotebookDocumentIdentifier(s.notebook, this.client.code2ProtocolConverter), change: Ii.c2p.asNotebookDocumentChangeEvent(s, this.client.code2ProtocolConverter) }), this.onChangeNotificationSent.fire(s);
        } catch (o) {
          throw this.client.error("Sending DidChangeNotebookDocumentNotification failed", o), o;
        }
      }, i = this.client.middleware?.notebooks;
      return e.cells?.structure !== void 0 && this.notebookSyncInfo.set(e.notebook.uri.toString(), ta.create(t)), i?.didChange !== void 0 ? i?.didChange(e, r) : r(e);
    }
    async sendDidSaveNotebookDocument(e) {
      return this.doSendSave(e);
    }
    async doSendSave(e) {
      let t = async (i) => {
        try {
          await this.client.sendNotification(nr.DidSaveNotebookDocumentNotification.type, { notebookDocument: { uri: this.client.code2ProtocolConverter.asUri(i.uri) } }), this.onSaveNotificationSent.fire(i);
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
          await this.client.sendNotification(nr.DidCloseNotebookDocumentNotification.type, { notebookDocument: { uri: this.client.code2ProtocolConverter.asUri(s.uri) }, cellTextDocuments: o.map((a) => this.client.code2ProtocolConverter.asTextDocumentIdentifier(a.document)) }), this.onCloseNotificationSent.fire(s);
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
      t?.metadata !== void 0 && (s.metadata = Ii.c2p.asMetadata(t.metadata));
      let o;
      if (t?.cellChanges !== void 0 && t.cellChanges.length > 0) {
        let a = [];
        o = new Set(i.map((c) => c.document.uri.toString()));
        for (let c of t.cellChanges) o.has(c.cell.document.uri.toString()) && (c.executionSummary !== void 0 || c.metadata !== void 0) && a.push(c.cell);
        a.length > 0 && (s.cells = s.cells ?? {}, s.cells.data = a);
      }
      if ((t?.contentChanges !== void 0 && t.contentChanges.length > 0 || t === void 0) && r !== void 0 && i !== void 0) {
        let a = r.cells, c = i, u = wd.computeDiff(a, c, false), d, h;
        if (u !== void 0) {
          d = u.cells === void 0 ? /* @__PURE__ */ new Map() : new Map(u.cells.map((y) => [y.document.uri.toString(), y])), h = u.deleteCount === 0 ? /* @__PURE__ */ new Map() : new Map(a.slice(u.start, u.start + u.deleteCount).map((y) => [y.document.uri.toString(), y]));
          for (let y of Array.from(h.keys())) d.has(y) && (h.delete(y), d.delete(y));
          s.cells = s.cells ?? {};
          let p = [], g = [];
          if (d.size > 0 || h.size > 0) {
            for (let y of d.values()) p.push(y);
            for (let y of h.values()) g.push(y);
          }
          s.cells.structure = { array: u, didOpen: p, didClose: g };
        }
      }
      return Object.keys(s).length > 1 ? s : void 0;
    }
    getMatchingCells(e, t = e.getCells()) {
      if (this.options.notebookSelector !== void 0) {
        for (let r of this.options.notebookSelector) if (r.notebook === void 0 || Zo.matchNotebook(r.notebook, e)) {
          let i = this.filterCells(e, t, r.cells);
          return i.length === 0 ? void 0 : i;
        }
      }
    }
    getMatchingCellsFromEvent(e, t, r) {
      if (this.options.notebookSelector === void 0) return;
      let i;
      for (let c of this.options.notebookSelector) if (c.notebook === void 0 || Zo.matchNotebook(c.notebook, e)) {
        i = c;
        break;
      }
      if (i === void 0) return;
      if ((r.cellChanges === void 0 || r.cellChanges.length === 0) && (r.contentChanges === void 0 || r.contentChanges.length === 0)) return t.cells;
      let s;
      if (r.cellChanges !== void 0 && r.cellChanges.length > 0) {
        let c = r.cellChanges.map((d) => d.cell), u = this.filterCells(e, c, i.cells);
        if (u.length !== c.length) {
          s = new Set(t.uris);
          for (let d of c) s.delete(d.document.uri.toString());
          for (let d of u) s.add(d.document.uri.toString());
        }
      }
      if (r.contentChanges !== void 0 && r.contentChanges.length > 0) {
        s === void 0 && (s = new Set(t.uris));
        for (let c of r.contentChanges) {
          for (let d of c.removedCells) s.delete(d.document.uri.toString());
          let u = this.filterCells(e, new Array(...c.addedCells), i.cells);
          for (let d of u) s.add(d.document.uri.toString());
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
  }, Dd = class n {
    static CellScheme = "vscode-notebook-cell";
    client;
    registrations;
    dedicatedChannel;
    _onChangeNotificationSent;
    _onOpenNotificationSent;
    _onCloseNotificationSent;
    _onSaveNotificationSent;
    constructor(e) {
      this.client = e, this.registrations = /* @__PURE__ */ new Map(), this.registrationType = nr.NotebookDocumentSyncRegistrationType.type, this._onChangeNotificationSent = new Ee.EventEmitter(), this._onOpenNotificationSent = new Ee.EventEmitter(), this._onCloseNotificationSent = new Ee.EventEmitter(), this._onSaveNotificationSent = new Ee.EventEmitter(), Ee.workspace.onDidOpenTextDocument((t) => {
        if (t.uri.scheme !== n.CellScheme) return;
        let [r, i] = this.findNotebookDocumentAndCell(t);
        if (!(r === void 0 || i === void 0)) for (let s of this.registrations.values()) s instanceof Ni && s.didOpenNotebookCellTextDocument(r, i);
      }), Ee.workspace.onDidChangeTextDocument((t) => {
        if (t.contentChanges.length === 0) return;
        let r = t.document;
        if (r.uri.scheme !== n.CellScheme) return;
        let [i, s] = this.findNotebookDocumentAndCell(r);
        if (!(i === void 0 || s === void 0)) for (let o of this.registrations.values()) o instanceof Ni && o.didChangeNotebookCellTextDocument(i, s, t);
      }), Ee.workspace.onDidCloseTextDocument((t) => {
        if (t.uri.scheme !== n.CellScheme) return;
        let [r, i] = this.findNotebookDocumentAndCell(t);
        if (!(r === void 0 || i === void 0)) for (let s of this.registrations.values()) s instanceof Ni && s.didCloseNotebookCellTextDocument(r, i);
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
      let t = u_(u_(e, "notebookDocument"), "synchronization");
      t.dynamicRegistration = true, t.executionSummarySupport = true;
    }
    preInitialize(e) {
      let t = e.notebookDocumentSync;
      t !== void 0 && (this.dedicatedChannel = this.client.protocol2CodeConverter.asDocumentSelector(ea.asDocumentSelector(t)));
    }
    initialize(e) {
      let t = e.notebookDocumentSync;
      if (t === void 0) return;
      let r = t.id ?? CP.generateUuid();
      this.register({ id: r, registerOptions: t });
    }
    register(e) {
      let t = new Ni(this.client, e.registerOptions, this._onChangeNotificationSent, this._onOpenNotificationSent, this._onCloseNotificationSent, this._onSaveNotificationSent);
      this.registrations.set(e.id, t);
    }
    unregister(e) {
      let t = this.registrations.get(e);
      t !== void 0 && (this.registrations.delete(e), t.dispose());
    }
    clear() {
      for (let e of this.registrations.values()) e.dispose();
      this.registrations.clear(), this._onChangeNotificationSent.dispose(), this._onChangeNotificationSent = new Ee.EventEmitter(), this._onOpenNotificationSent.dispose(), this._onOpenNotificationSent = new Ee.EventEmitter(), this._onCloseNotificationSent.dispose(), this._onCloseNotificationSent = new Ee.EventEmitter(), this._onSaveNotificationSent.dispose(), this._onSaveNotificationSent = new Ee.EventEmitter();
    }
    handles(e) {
      if (e.uri.scheme !== n.CellScheme) return false;
      if (this.dedicatedChannel !== void 0 && Ee.languages.match(this.dedicatedChannel, e) > 0) return true;
      for (let t of this.registrations.values()) if (t.handles(e)) return true;
      return false;
    }
    getProvider(e) {
      for (let t of this.registrations.values()) if (t.handles(e.document)) return t;
    }
    findNotebookDocumentAndCell(e) {
      let t = e.uri.toString();
      for (let r of Ee.workspace.notebookDocuments) for (let i of r.getCells()) if (i.document.uri.toString() === t) return [r, i];
      return [void 0, void 0];
    }
  };
  gn.NotebookDocumentSyncFeature = Dd;
});
var h_ = O((Nt) => {
  "use strict";
  var DP = Nt && Nt.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), SP = Nt && Nt.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), f_ = Nt && Nt.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && DP(t, e, r[i]);
      return SP(t, e), t;
    };
  })();
  Object.defineProperty(Nt, "__esModule", { value: true });
  Nt.SyncConfigurationFeature = Nt.ConfigurationFeature = void 0;
  Nt.toJSONObject = Vr;
  var ji = require("vscode"), Ps = X(), PP = f_(Wt()), RP = f_(Se()), d_ = se(), Sd = class {
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
      e.onRequest(Ps.ConfigurationRequest.type, (t, r) => {
        let i = (o) => {
          let a = [];
          for (let c of o.items) {
            let u = c.scopeUri !== void 0 && c.scopeUri !== null ? this._client.protocol2CodeConverter.asUri(c.scopeUri) : void 0;
            a.push(this.getConfiguration(u, c.section !== null ? c.section : void 0));
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
        if (i === -1) r = Vr(ji.workspace.getConfiguration(void 0, e).get(t));
        else {
          let s = ji.workspace.getConfiguration(t.substr(0, i), e);
          s && (r = Vr(s.get(t.substr(i + 1))));
        }
      } else {
        let i = ji.workspace.getConfiguration(void 0, e);
        r = {};
        for (let s of Object.keys(i)) i.has(s) && (r[s] = Vr(i.get(s)));
      }
      return r === void 0 && (r = null), r;
    }
    clear() {
    }
  };
  Nt.ConfigurationFeature = Sd;
  function Vr(n) {
    if (n) {
      if (Array.isArray(n)) return n.map(Vr);
      if (typeof n == "object") {
        let e = /* @__PURE__ */ Object.create(null);
        for (let t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = Vr(n[t]));
        return e;
      }
    }
    return n;
  }
  var Pd = class {
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
      return Ps.DidChangeConfigurationNotification.type;
    }
    fillClientCapabilities(e) {
      (0, d_.ensure)((0, d_.ensure)(e, "workspace"), "didChangeConfiguration").dynamicRegistration = true;
    }
    initialize() {
      this.isCleared = false;
      let e = this._client.clientOptions.synchronize?.configurationSection;
      e !== void 0 && this.register({ id: RP.generateUuid(), registerOptions: { section: e } });
    }
    register(e) {
      let t = ji.workspace.onDidChangeConfiguration((r) => {
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
      if (PP.string(e) ? r = [e] : r = e, r !== void 0 && t !== void 0 && !r.some((a) => t.affectsConfiguration(a))) return;
      let i = async (o) => o === void 0 ? this._client.sendNotification(Ps.DidChangeConfigurationNotification.type, { settings: null }) : this._client.sendNotification(Ps.DidChangeConfigurationNotification.type, { settings: this.extractSettingsInformation(o) }), s = this._client.middleware.workspace?.didChangeConfiguration;
      (s ? s(r, i) : i(r)).catch((o) => {
        this._client.error(`Sending notification ${Ps.DidChangeConfigurationNotification.type.method} failed`, o);
      });
    }
    extractSettingsInformation(e) {
      function t(s, o) {
        let a = s;
        for (let c = 0; c < o.length - 1; c++) {
          let u = a[o[c]];
          u || (u = /* @__PURE__ */ Object.create(null), a[o[c]] = u), a = u;
        }
        return a;
      }
      let r = this._client.clientOptions.workspaceFolder ? this._client.clientOptions.workspaceFolder.uri : void 0, i = /* @__PURE__ */ Object.create(null);
      for (let s = 0; s < e.length; s++) {
        let o = e[s], a = o.indexOf("."), c = null;
        if (a >= 0 ? c = ji.workspace.getConfiguration(o.substr(0, a), r).get(o.substr(a + 1)) : c = ji.workspace.getConfiguration(void 0, r).get(o), c) {
          let u = e[s].split(".");
          t(i, u)[u[u.length - 1]] = Vr(c);
        }
      }
      return i;
    }
  };
  Nt.SyncConfigurationFeature = Pd;
});
var y_ = {};
Ba(y_, { TextDocument: () => Rd });
function Td(n, e) {
  if (n.length <= 1) return n;
  let t = n.length / 2 | 0, r = n.slice(0, t), i = n.slice(t);
  Td(r, e), Td(i, e);
  let s = 0, o = 0, a = 0;
  for (; s < r.length && o < i.length; ) e(r[s], i[o]) <= 0 ? n[a++] = r[s++] : n[a++] = i[o++];
  for (; s < r.length; ) n[a++] = r[s++];
  for (; o < i.length; ) n[a++] = i[o++];
  return n;
}
function p_(n, e, t = 0) {
  let r = e ? [t] : [];
  for (let i = 0; i < n.length; i++) {
    let s = n.charCodeAt(i);
    g_(s) && (s === 13 && i + 1 < n.length && n.charCodeAt(i + 1) === 10 && i++, r.push(t + i + 1));
  }
  return r;
}
function g_(n) {
  return n === 13 || n === 10;
}
function m_(n) {
  let e = n.start, t = n.end;
  return e.line > t.line || e.line === t.line && e.character > t.character ? { start: t, end: e } : n;
}
function TP(n) {
  let e = m_(n.range);
  return e !== n.range ? { newText: n.newText, range: e } : n;
}
var ra, Rd, __ = ep(() => {
  "use strict";
  ra = class n {
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
        let i = m_(r.range), s = this.offsetAt(i.start), o = this.offsetAt(i.end);
        this._content = this._content.substring(0, s) + r.text + this._content.substring(o, this._content.length);
        let a = Math.max(i.start.line, 0), c = Math.max(i.end.line, 0), u = this._lineOffsets, d = p_(r.text, false, s);
        if (c - a === d.length) for (let p = 0, g = d.length; p < g; p++) u[p + a + 1] = d[p];
        else d.length < 1e4 ? u.splice(a + 1, c - a, ...d) : this._lineOffsets = u = u.slice(0, a + 1).concat(d, u.slice(c + 1));
        let h = r.text.length - (o - s);
        if (h !== 0) for (let p = a + 1 + d.length, g = u.length; p < g; p++) u[p] = u[p] + h;
      } else if (n.isFull(r)) this._content = r.text, this._lineOffsets = void 0;
      else throw new Error("Unknown change event received");
      this._version = t;
    }
    getLineOffsets() {
      return this._lineOffsets === void 0 && (this._lineOffsets = p_(this._content, true)), this._lineOffsets;
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
      for (; e > t && g_(this._content.charCodeAt(e - 1)); ) e--;
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
      return new ra(i, s, o, a);
    }
    n.create = e;
    function t(i, s, o) {
      if (i instanceof ra) return i.update(s, o), i;
      throw new Error("TextDocument.update: document must be created by TextDocument.create");
    }
    n.update = t;
    function r(i, s) {
      let o = i.getText(), a = Td(s.map(TP), (d, h) => {
        let p = d.range.start.line - h.range.start.line;
        return p === 0 ? d.range.start.character - h.range.start.character : p;
      }), c = 0, u = [];
      for (let d of a) {
        let h = i.offsetAt(d.range.start);
        if (h < c) throw new Error("Overlapping edit");
        h > c && u.push(o.substring(c, h)), d.newText.length && u.push(d.newText), c = i.offsetAt(d.range.end);
      }
      return u.push(o.substr(c)), u.join("");
    }
    n.applyEdits = r;
  })(Rd || (Rd = {}));
});
var v_ = O((Ke) => {
  "use strict";
  var OP = Ke && Ke.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), EP = Ke && Ke.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), xP = Ke && Ke.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && OP(t, e, r[i]);
      return EP(t, e), t;
    };
  })();
  Object.defineProperty(Ke, "__esModule", { value: true });
  Ke.DidSaveTextDocumentFeature = Ke.WillSaveWaitUntilFeature = Ke.WillSaveFeature = Ke.DidChangeTextDocumentFeature = Ke.DidCloseTextDocumentFeature = Ke.DidOpenTextDocumentFeature = void 0;
  var $e = require("vscode"), pe = X(), je = se(), Fi = xP(Se()), qP = (__(), Yi(y_)), Od = class extends je.TextDocumentEventFeature {
    _syncedDocuments;
    _pendingOpenNotifications;
    _delayOpen;
    _pendingOpenListeners;
    constructor(e, t) {
      super(e, $e.workspace.onDidOpenTextDocument, pe.DidOpenTextDocumentNotification.type, () => e.middleware.didOpen, (r) => e.code2ProtocolConverter.asOpenTextDocumentParams(r), (r) => r, je.TextDocumentEventFeature.textDocumentFilter), this._syncedDocuments = t, this._pendingOpenNotifications = /* @__PURE__ */ new Map(), this._delayOpen = e.clientOptions.textSynchronization?.delayOpenNotifications ?? false;
    }
    async callback(e) {
      if (this._delayOpen) {
        if (!this.matches(e)) return;
        if (this._client.visibleDocuments.isVisible(e)) return super.callback(e);
        {
          let r = new Nd(e);
          this._pendingOpenNotifications.set(r.uri.toString(), r);
        }
      } else return super.callback(e);
    }
    get openDocuments() {
      return this._syncedDocuments.values();
    }
    fillClientCapabilities(e) {
      (0, je.ensure)((0, je.ensure)(e, "textDocument"), "synchronization").dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = e.resolvedTextDocumentSync;
      t && r && r.openClose && this.register({ id: Fi.generateUuid(), registerOptions: { documentSelector: t } });
    }
    get registrationType() {
      return pe.DidOpenTextDocumentNotification.type;
    }
    register(e) {
      if (super.register(e), !e.registerOptions.documentSelector) return;
      let t = this._client.protocol2CodeConverter.asDocumentSelector(e.registerOptions.documentSelector);
      if ($e.workspace.textDocuments.forEach((r) => {
        let i = r.uri.toString();
        if (!this._syncedDocuments.has(i) && $e.languages.match(t, r) > 0 && !this._client.hasDedicatedTextSynchronizationFeature(r)) if (this._client.visibleDocuments.isVisible(r)) {
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
        })), this._pendingOpenListeners.push($e.workspace.onDidCloseTextDocument((i) => {
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
  Ke.DidOpenTextDocumentFeature = Od;
  var Ed = class extends je.TextDocumentEventFeature {
    _syncedDocuments;
    _pendingTextDocumentChanges;
    constructor(e, t, r) {
      super(e, $e.workspace.onDidCloseTextDocument, pe.DidCloseTextDocumentNotification.type, () => e.middleware.didClose, (i) => e.code2ProtocolConverter.asCloseTextDocumentParams(i), (i) => i, je.TextDocumentEventFeature.textDocumentFilter), this._syncedDocuments = t, this._pendingTextDocumentChanges = r;
    }
    get registrationType() {
      return pe.DidCloseTextDocumentNotification.type;
    }
    fillClientCapabilities(e) {
      (0, je.ensure)((0, je.ensure)(e, "textDocument"), "synchronization").dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = e.resolvedTextDocumentSync;
      t && r && r.openClose && this.register({ id: Fi.generateUuid(), registerOptions: { documentSelector: t } });
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
        if ($e.languages.match(t, i) > 0 && !this._selectorFilter(r, i) && !this._client.hasDedicatedTextSynchronizationFeature(i)) {
          let s = this._client.middleware, o = (a) => this._client.sendNotification(this._type, this._createParams(a));
          this._syncedDocuments.delete(i.uri.toString()), (s.didClose ? s.didClose(i, o) : o(i)).catch((a) => {
            this._client.error(`Sending document notification ${this._type.method} failed`, a);
          });
        }
      });
    }
  };
  Ke.DidCloseTextDocumentFeature = Ed;
  var xd = class extends je.DynamicDocumentFeature {
    _listener;
    _changeData;
    _onAboutToSendNotification;
    _onNotificationSent;
    _onPendingChangeAdded;
    _pendingTextDocumentChanges;
    _syncKind;
    constructor(e, t) {
      super(e), this._changeData = /* @__PURE__ */ new Map(), this._onAboutToSendNotification = new $e.EventEmitter(), this._onNotificationSent = new $e.EventEmitter(), this._onPendingChangeAdded = new $e.EventEmitter(), this._pendingTextDocumentChanges = t, this._syncKind = pe.TextDocumentSyncKind.None;
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
      return pe.DidChangeTextDocumentNotification.type;
    }
    fillClientCapabilities(e) {
      (0, je.ensure)((0, je.ensure)(e, "textDocument"), "synchronization").dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = e.resolvedTextDocumentSync;
      t && r && r.change !== void 0 && r.change !== pe.TextDocumentSyncKind.None && this.register({ id: Fi.generateUuid(), registerOptions: Object.assign({}, { documentSelector: t }, { syncKind: r.change }) });
    }
    register(e) {
      e.registerOptions.documentSelector && (this._listener || (this._listener = $e.workspace.onDidChangeTextDocument(this.callback, this)), this._changeData.set(e.id, { syncKind: e.registerOptions.syncKind, documentSelector: this._client.protocol2CodeConverter.asDocumentSelector(e.registerOptions.documentSelector) }), this.updateSyncKind(e.registerOptions.syncKind));
    }
    *getDocumentSelectors() {
      for (let e of this._changeData.values()) yield e.documentSelector;
    }
    async callback(e) {
      if (e.contentChanges.length === 0) return;
      let t = e.document.uri, r = e.document.version, i = [];
      for (let s of this._changeData.values()) if ($e.languages.match(s.documentSelector, e.document) > 0 && !this._client.hasDedicatedTextSynchronizationFeature(e.document)) {
        let o = this._client.middleware;
        if (s.syncKind === pe.TextDocumentSyncKind.Incremental) {
          let a = async (c) => {
            let u = this._client.code2ProtocolConverter.asChangeTextDocumentParams(c, t, r);
            this.aboutToSendNotification(c.document, pe.DidChangeTextDocumentNotification.type, u), await this._client.sendNotification(pe.DidChangeTextDocumentNotification.type, u), this.notificationSent(c.document, pe.DidChangeTextDocumentNotification.type, u);
          };
          i.push(o.didChange ? o.didChange(e, (c) => a(c)) : a(e));
        } else if (s.syncKind === pe.TextDocumentSyncKind.Full) {
          let a = async (c) => {
            let u = c.document.uri.toString();
            this._pendingTextDocumentChanges.set(u, c.document), this._onPendingChangeAdded.fire();
          };
          i.push(o.didChange ? o.didChange(e, (c) => a(c)) : a(e));
        }
      }
      return Promise.all(i).then(void 0, (s) => {
        throw this._client.error(`Sending document notification ${pe.DidChangeTextDocumentNotification.type.method} failed`, s), s;
      });
    }
    aboutToSendNotification(e, t, r) {
      this._onAboutToSendNotification.fire({ textDocument: e, type: t, params: r });
    }
    notificationSent(e, t, r) {
      this._onNotificationSent.fire({ textDocument: e, type: t, params: r });
    }
    unregister(e) {
      if (this._changeData.delete(e), this._changeData.size === 0) this._listener && (this._listener.dispose(), this._listener = void 0), this._syncKind = pe.TextDocumentSyncKind.None;
      else {
        this._syncKind = pe.TextDocumentSyncKind.None;
        for (let t of this._changeData.values()) if (this.updateSyncKind(t.syncKind), this._syncKind === pe.TextDocumentSyncKind.Full) break;
      }
    }
    clear() {
      this._pendingTextDocumentChanges.clear(), this._changeData.clear(), this._syncKind = pe.TextDocumentSyncKind.None, this._listener && (this._listener.dispose(), this._listener = void 0);
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
      for (let t of this._changeData.values()) if ($e.languages.match(t.documentSelector, e) > 0) return { send: (r) => this.callback(r) };
    }
    updateSyncKind(e) {
      if (this._syncKind !== pe.TextDocumentSyncKind.Full) switch (e) {
        case pe.TextDocumentSyncKind.Full:
          this._syncKind = e;
          break;
        case pe.TextDocumentSyncKind.Incremental:
          this._syncKind === pe.TextDocumentSyncKind.None && (this._syncKind = pe.TextDocumentSyncKind.Incremental);
          break;
      }
    }
  };
  Ke.DidChangeTextDocumentFeature = xd;
  var qd = class extends je.TextDocumentEventFeature {
    constructor(e) {
      super(e, $e.workspace.onWillSaveTextDocument, pe.WillSaveTextDocumentNotification.type, () => e.middleware.willSave, (t) => e.code2ProtocolConverter.asWillSaveTextDocumentParams(t), (t) => t.document, (t, r) => je.TextDocumentEventFeature.textDocumentFilter(t, r.document));
    }
    get registrationType() {
      return pe.WillSaveTextDocumentNotification.type;
    }
    fillClientCapabilities(e) {
      let t = (0, je.ensure)((0, je.ensure)(e, "textDocument"), "synchronization");
      t.willSave = true;
    }
    initialize(e, t) {
      let r = e.resolvedTextDocumentSync;
      t && r && r.willSave && this.register({ id: Fi.generateUuid(), registerOptions: { documentSelector: t } });
    }
    getTextDocument(e) {
      return e.document;
    }
  };
  Ke.WillSaveFeature = qd;
  var Md = class extends je.DynamicDocumentFeature {
    _listener;
    _selectors;
    constructor(e) {
      super(e), this._selectors = /* @__PURE__ */ new Map();
    }
    getDocumentSelectors() {
      return this._selectors.values();
    }
    get registrationType() {
      return pe.WillSaveTextDocumentWaitUntilRequest.type;
    }
    fillClientCapabilities(e) {
      let t = (0, je.ensure)((0, je.ensure)(e, "textDocument"), "synchronization");
      t.willSaveWaitUntil = true;
    }
    initialize(e, t) {
      let r = e.resolvedTextDocumentSync;
      t && r && r.willSaveWaitUntil && this.register({ id: Fi.generateUuid(), registerOptions: { documentSelector: t } });
    }
    register(e) {
      e.registerOptions.documentSelector && (this._listener || (this._listener = $e.workspace.onWillSaveTextDocument(this.callback, this)), this._selectors.set(e.id, this._client.protocol2CodeConverter.asDocumentSelector(e.registerOptions.documentSelector)));
    }
    callback(e) {
      if (je.TextDocumentEventFeature.textDocumentFilter(this._selectors.values(), e.document) && !this._client.hasDedicatedTextSynchronizationFeature(e.document)) {
        let t = this._client.middleware, r = (i) => this._client.sendRequest(pe.WillSaveTextDocumentWaitUntilRequest.type, this._client.code2ProtocolConverter.asWillSaveTextDocumentParams(i)).then(async (s) => {
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
  Ke.WillSaveWaitUntilFeature = Md;
  var Id = class extends je.TextDocumentEventFeature {
    _includeText;
    constructor(e) {
      super(e, $e.workspace.onDidSaveTextDocument, pe.DidSaveTextDocumentNotification.type, () => e.middleware.didSave, (t) => e.code2ProtocolConverter.asSaveTextDocumentParams(t, this._includeText), (t) => t, je.TextDocumentEventFeature.textDocumentFilter), this._includeText = false;
    }
    get registrationType() {
      return pe.DidSaveTextDocumentNotification.type;
    }
    fillClientCapabilities(e) {
      (0, je.ensure)((0, je.ensure)(e, "textDocument"), "synchronization").didSave = true;
    }
    initialize(e, t) {
      let r = e.resolvedTextDocumentSync;
      if (t && r && r.save) {
        let i = typeof r.save == "boolean" ? { includeText: false } : { includeText: !!r.save.includeText };
        this.register({ id: Fi.generateUuid(), registerOptions: Object.assign({}, { documentSelector: t }, i) });
      }
    }
    register(e) {
      this._includeText = !!e.registerOptions.includeText, super.register(e);
    }
    getTextDocument(e) {
      return e;
    }
  };
  Ke.DidSaveTextDocumentFeature = Id;
  var MP = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
  function IP(n = "") {
    let e = "(-?\\d*\\.\\d\\w*)|([^";
    for (let t of MP) n.indexOf(t) >= 0 || (e += "\\" + t);
    return e += "\\s]+)", new RegExp(e, "g");
  }
  var NP = IP(), Nd = class n {
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
      this._extTextDocument = e, this._content = e.getText(), this._uri = e.uri, this._fileName = e.fileName, this._languageId = e.languageId, this._version = e.version, this._eol = e.eol, this._isUntitled = e.isUntitled, this._encoding = e.encoding, this._isDirty = e.isDirty, this._isClosed = e.isClosed, this._capturedTextDocument = qP.TextDocument.create(this._uri.toString(), this._languageId, this._version, this._content);
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
      return new $e.Position(t.line, t.character);
    }
    getText(e) {
      return this._capturedTextDocument.getText(e);
    }
    lineAt(e) {
      let t = typeof e == "number" ? e : this.validatePosition(e).line;
      if (t < 0 || t >= this.lineCount) throw new RangeError(`Illegal value for line: ${t}`);
      let r = this._capturedTextDocument.getLineRange(t), i = this._capturedTextDocument.getText(r), s = i.search(/\S/), o = new $e.Range(r.start.line, r.start.character, r.end.line, r.end.character), a = t + 1 < this.lineCount ? new $e.Range(o.start.line, o.start.character, t + 1, 0) : o;
      return { lineNumber: t, text: i, range: o, rangeIncludingLineBreak: a, firstNonWhitespaceCharacterIndex: s === -1 ? i.length : s, isEmptyOrWhitespace: s === -1 };
    }
    getWordRangeAtPosition(e, t) {
      let r = this.validatePosition(e).line, i = this.lineAt(r).text, s = n.getWordRegExp(t), o;
      for (s.lastIndex = 0; (o = s.exec(i)) !== null; ) if (o.index <= e.character && s.lastIndex >= e.character) return new $e.Range(r, o.index, r, s.lastIndex);
    }
    validateRange(e) {
      let t = this.validatePosition(e.start), r = this.validatePosition(e.end);
      return t === e.start && r === e.end ? e : new $e.Range(t.line, t.character, r.line, r.character);
    }
    validatePosition(e) {
      let t = Math.min(Math.max(e.line, 0), this.lineCount - 1), r = this._capturedTextDocument.getLineRange(t), i = Math.min(Math.max(e.character, 0), r.end.character);
      return t === e.line && i === e.character ? e : new $e.Position(t, i);
    }
    static getWordRegExp(e) {
      let t = e ?? NP;
      if (t.flags.includes("g")) return t;
      let r = `${t.flags}g`;
      return new RegExp(t.source, r);
    }
  };
});
var b_ = O((mn) => {
  "use strict";
  var jP = mn && mn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), FP = mn && mn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), LP = mn && mn.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && jP(t, e, r[i]);
      return FP(t, e), t;
    };
  })();
  Object.defineProperty(mn, "__esModule", { value: true });
  mn.CompletionItemFeature = void 0;
  var AP = require("vscode"), ie = X(), jd = se(), kP = LP(Se()), $P = [ie.CompletionItemKind.Text, ie.CompletionItemKind.Method, ie.CompletionItemKind.Function, ie.CompletionItemKind.Constructor, ie.CompletionItemKind.Field, ie.CompletionItemKind.Variable, ie.CompletionItemKind.Class, ie.CompletionItemKind.Interface, ie.CompletionItemKind.Module, ie.CompletionItemKind.Property, ie.CompletionItemKind.Unit, ie.CompletionItemKind.Value, ie.CompletionItemKind.Enum, ie.CompletionItemKind.Keyword, ie.CompletionItemKind.Snippet, ie.CompletionItemKind.Color, ie.CompletionItemKind.File, ie.CompletionItemKind.Reference, ie.CompletionItemKind.Folder, ie.CompletionItemKind.EnumMember, ie.CompletionItemKind.Constant, ie.CompletionItemKind.Struct, ie.CompletionItemKind.Event, ie.CompletionItemKind.Operator, ie.CompletionItemKind.TypeParameter], Fd = class extends jd.TextDocumentLanguageFeature {
    labelDetailsSupport;
    constructor(e) {
      super(e, ie.CompletionRequest.type), this.labelDetailsSupport = /* @__PURE__ */ new Map();
    }
    fillClientCapabilities(e) {
      let t = (0, jd.ensure)((0, jd.ensure)(e, "textDocument"), "completion");
      t.dynamicRegistration = true, t.contextSupport = true, t.completionItem = { snippetSupport: true, commitCharactersSupport: true, documentationFormat: [ie.MarkupKind.Markdown, ie.MarkupKind.PlainText], deprecatedSupport: true, preselectSupport: true, tagSupport: { valueSet: [ie.CompletionItemTag.Deprecated] }, insertReplaceSupport: true, resolveSupport: { properties: ["documentation", "detail", "additionalTextEdits"] }, insertTextModeSupport: { valueSet: [ie.InsertTextMode.asIs, ie.InsertTextMode.adjustIndentation] }, labelDetailsSupport: true }, t.insertTextMode = ie.InsertTextMode.adjustIndentation, t.completionItemKind = { valueSet: $P }, t.completionList = { itemDefaults: ["commitCharacters", "editRange", "insertTextFormat", "insertTextMode", "data"], applyKindSupport: true };
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.completionProvider);
      r && this.register({ id: kP.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e, t) {
      this.labelDetailsSupport.set(t, !!e.completionItem?.labelDetailsSupport);
      let r = e.triggerCharacters ?? [], i = e.allCommitCharacters, s = e.documentSelector, o = { provideCompletionItems: (a, c, u, d) => {
        let h = this._client, p = this._client.middleware, g = (y, _, D, S) => h.sendRequest(ie.CompletionRequest.type, h.code2ProtocolConverter.asCompletionParams(y, _, D), S).then((C) => S.isCancellationRequested ? null : h.protocol2CodeConverter.asCompletionResult(C, i, S), (C) => h.handleFailedRequest(ie.CompletionRequest.type, S, C, null));
        return p.provideCompletionItem ? p.provideCompletionItem(a, c, d, u, g) : g(a, c, d, u);
      }, resolveCompletionItem: e.resolveProvider ? (a, c) => {
        let u = this._client, d = this._client.middleware, h = (p, g) => u.sendRequest(ie.CompletionResolveRequest.type, u.code2ProtocolConverter.asCompletionItem(p, !!this.labelDetailsSupport.get(t)), g).then((y) => g.isCancellationRequested ? null : u.protocol2CodeConverter.asCompletionItem(y), (y) => u.handleFailedRequest(ie.CompletionResolveRequest.type, g, y, p));
        return d.resolveCompletionItem ? d.resolveCompletionItem(a, c, h) : h(a, c);
      } : void 0 };
      return [AP.languages.registerCompletionItemProvider(this._client.protocol2CodeConverter.asDocumentSelector(s), o, ...r), o];
    }
  };
  mn.CompletionItemFeature = Fd;
});
var C_ = O((yn) => {
  "use strict";
  var HP = yn && yn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), UP = yn && yn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), WP = yn && yn.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && HP(t, e, r[i]);
      return UP(t, e), t;
    };
  })();
  Object.defineProperty(yn, "__esModule", { value: true });
  yn.HoverFeature = void 0;
  var zP = require("vscode"), Rs = X(), Ld = se(), KP = WP(Se()), Ad = class extends Ld.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Rs.HoverRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Ld.ensure)((0, Ld.ensure)(e, "textDocument"), "hover");
      t.dynamicRegistration = true, t.contentFormat = [Rs.MarkupKind.Markdown, Rs.MarkupKind.PlainText];
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.hoverProvider);
      r && this.register({ id: KP.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideHover: (i, s, o) => {
        let a = this._client, c = (d, h, p) => a.sendRequest(Rs.HoverRequest.type, a.code2ProtocolConverter.asTextDocumentPositionParams(d, h), p).then((g) => p.isCancellationRequested ? null : a.protocol2CodeConverter.asHover(g), (g) => a.handleFailedRequest(Rs.HoverRequest.type, p, g, null)), u = a.middleware;
        return u.provideHover ? u.provideHover(i, s, o, c) : c(i, s, o);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return zP.languages.registerHoverProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  yn.HoverFeature = Ad;
});
var w_ = O((_n) => {
  "use strict";
  var BP = _n && _n.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), VP = _n && _n.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), GP = _n && _n.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && BP(t, e, r[i]);
      return VP(t, e), t;
    };
  })();
  Object.defineProperty(_n, "__esModule", { value: true });
  _n.DefinitionFeature = void 0;
  var XP = require("vscode"), kd = X(), $d = se(), JP = GP(Se()), Hd = class extends $d.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, kd.DefinitionRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, $d.ensure)((0, $d.ensure)(e, "textDocument"), "definition");
      t.dynamicRegistration = true, t.linkSupport = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.definitionProvider);
      r && this.register({ id: JP.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideDefinition: (i, s, o) => {
        let a = this._client, c = (d, h, p) => a.sendRequest(kd.DefinitionRequest.type, a.code2ProtocolConverter.asTextDocumentPositionParams(d, h), p).then((g) => p.isCancellationRequested ? null : a.protocol2CodeConverter.asDefinitionResult(g, p), (g) => a.handleFailedRequest(kd.DefinitionRequest.type, p, g, null)), u = a.middleware;
        return u.provideDefinition ? u.provideDefinition(i, s, o, c) : c(i, s, o);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return XP.languages.registerDefinitionProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  _n.DefinitionFeature = Hd;
});
var S_ = O((vn) => {
  "use strict";
  var QP = vn && vn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), YP = vn && vn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), ZP = vn && vn.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && QP(t, e, r[i]);
      return YP(t, e), t;
    };
  })();
  Object.defineProperty(vn, "__esModule", { value: true });
  vn.SignatureHelpFeature = void 0;
  var D_ = require("vscode"), Ts = X(), Ud = se(), eR = ZP(Se()), Wd = class extends Ud.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Ts.SignatureHelpRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Ud.ensure)((0, Ud.ensure)(e, "textDocument"), "signatureHelp");
      t.dynamicRegistration = true, t.signatureInformation = { documentationFormat: [Ts.MarkupKind.Markdown, Ts.MarkupKind.PlainText] }, t.signatureInformation.parameterInformation = { labelOffsetSupport: true }, t.signatureInformation.activeParameterSupport = true, t.signatureInformation.noActiveParameterSupport = true, t.contextSupport = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.signatureHelpProvider);
      r && this.register({ id: eR.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = { provideSignatureHelp: (r, i, s, o) => {
        let a = this._client, c = (d, h, p, g) => a.sendRequest(Ts.SignatureHelpRequest.type, a.code2ProtocolConverter.asSignatureHelpParams(d, h, p), g).then((y) => g.isCancellationRequested ? null : a.protocol2CodeConverter.asSignatureHelp(y, g), (y) => a.handleFailedRequest(Ts.SignatureHelpRequest.type, g, y, null)), u = a.middleware;
        return u.provideSignatureHelp ? u.provideSignatureHelp(r, i, o, s, c) : c(r, i, o, s);
      } };
      return [this.registerProvider(e, t), t];
    }
    registerProvider(e, t) {
      let r = this._client.protocol2CodeConverter.asDocumentSelector(e.documentSelector);
      if (e.retriggerCharacters === void 0) {
        let i = e.triggerCharacters || [];
        return D_.languages.registerSignatureHelpProvider(r, t, ...i);
      } else {
        let i = { triggerCharacters: e.triggerCharacters || [], retriggerCharacters: e.retriggerCharacters || [] };
        return D_.languages.registerSignatureHelpProvider(r, t, i);
      }
    }
  };
  vn.SignatureHelpFeature = Wd;
});
var P_ = O((bn) => {
  "use strict";
  var tR = bn && bn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), nR = bn && bn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), rR = bn && bn.__importStar || /* @__PURE__ */ (function() {
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
  Object.defineProperty(bn, "__esModule", { value: true });
  bn.DocumentHighlightFeature = void 0;
  var iR = require("vscode"), zd = X(), Kd = se(), sR = rR(Se()), Bd = class extends Kd.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, zd.DocumentHighlightRequest.type);
    }
    fillClientCapabilities(e) {
      (0, Kd.ensure)((0, Kd.ensure)(e, "textDocument"), "documentHighlight").dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.documentHighlightProvider);
      r && this.register({ id: sR.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideDocumentHighlights: (i, s, o) => {
        let a = this._client, c = (d, h, p) => a.sendRequest(zd.DocumentHighlightRequest.type, a.code2ProtocolConverter.asTextDocumentPositionParams(d, h), p).then((g) => p.isCancellationRequested ? null : a.protocol2CodeConverter.asDocumentHighlights(g, p), (g) => a.handleFailedRequest(zd.DocumentHighlightRequest.type, p, g, null)), u = a.middleware;
        return u.provideDocumentHighlights ? u.provideDocumentHighlights(i, s, o, c) : c(i, s, o);
      } };
      return [iR.languages.registerDocumentHighlightProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r), r];
    }
  };
  bn.DocumentHighlightFeature = Bd;
});
var Xd = O((pt) => {
  "use strict";
  var oR = pt && pt.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), aR = pt && pt.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), cR = pt && pt.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && oR(t, e, r[i]);
      return aR(t, e), t;
    };
  })();
  Object.defineProperty(pt, "__esModule", { value: true });
  pt.DocumentSymbolFeature = pt.SupportedSymbolTags = pt.SupportedSymbolKinds = void 0;
  var uR = require("vscode"), fe = X(), Vd = se(), lR = cR(Se());
  pt.SupportedSymbolKinds = [fe.SymbolKind.File, fe.SymbolKind.Module, fe.SymbolKind.Namespace, fe.SymbolKind.Package, fe.SymbolKind.Class, fe.SymbolKind.Method, fe.SymbolKind.Property, fe.SymbolKind.Field, fe.SymbolKind.Constructor, fe.SymbolKind.Enum, fe.SymbolKind.Interface, fe.SymbolKind.Function, fe.SymbolKind.Variable, fe.SymbolKind.Constant, fe.SymbolKind.String, fe.SymbolKind.Number, fe.SymbolKind.Boolean, fe.SymbolKind.Array, fe.SymbolKind.Object, fe.SymbolKind.Key, fe.SymbolKind.Null, fe.SymbolKind.EnumMember, fe.SymbolKind.Struct, fe.SymbolKind.Event, fe.SymbolKind.Operator, fe.SymbolKind.TypeParameter];
  pt.SupportedSymbolTags = [fe.SymbolTag.Deprecated];
  var Gd = class extends Vd.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, fe.DocumentSymbolRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Vd.ensure)((0, Vd.ensure)(e, "textDocument"), "documentSymbol");
      t.dynamicRegistration = true, t.symbolKind = { valueSet: pt.SupportedSymbolKinds }, t.hierarchicalDocumentSymbolSupport = true, t.tagSupport = { valueSet: pt.SupportedSymbolTags }, t.labelSupport = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.documentSymbolProvider);
      r && this.register({ id: lR.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideDocumentSymbols: (s, o) => {
        let a = this._client, c = async (d, h) => {
          try {
            let p = await a.sendRequest(fe.DocumentSymbolRequest.type, a.code2ProtocolConverter.asDocumentSymbolParams(d), h);
            if (h.isCancellationRequested || p === void 0 || p === null) return null;
            if (p.length === 0) return [];
            {
              let g = p[0];
              return fe.DocumentSymbol.is(g) ? await a.protocol2CodeConverter.asDocumentSymbols(p, h) : await a.protocol2CodeConverter.asSymbolInformations(p, h);
            }
          } catch (p) {
            return a.handleFailedRequest(fe.DocumentSymbolRequest.type, h, p, null);
          }
        }, u = a.middleware;
        return u.provideDocumentSymbols ? u.provideDocumentSymbols(s, o, c) : c(s, o);
      } }, i = e.label !== void 0 ? { label: e.label } : void 0;
      return [uR.languages.registerDocumentSymbolProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r, i), r];
    }
  };
  pt.DocumentSymbolFeature = Gd;
});
var T_ = O((Cn) => {
  "use strict";
  var dR = Cn && Cn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), fR = Cn && Cn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), hR = Cn && Cn.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && dR(t, e, r[i]);
      return fR(t, e), t;
    };
  })();
  Object.defineProperty(Cn, "__esModule", { value: true });
  Cn.WorkspaceSymbolFeature = void 0;
  var pR = require("vscode"), Os = X(), Jd = se(), R_ = Xd(), gR = hR(Se()), Qd = class extends Jd.WorkspaceFeature {
    constructor(e) {
      super(e, Os.WorkspaceSymbolRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Jd.ensure)((0, Jd.ensure)(e, "workspace"), "symbol");
      t.dynamicRegistration = true, t.symbolKind = { valueSet: R_.SupportedSymbolKinds }, t.tagSupport = { valueSet: R_.SupportedSymbolTags }, t.resolveSupport = { properties: ["location.range"] };
    }
    initialize(e) {
      e.workspaceSymbolProvider && this.register({ id: gR.generateUuid(), registerOptions: e.workspaceSymbolProvider === true ? { workDoneProgress: false } : e.workspaceSymbolProvider });
    }
    registerLanguageProvider(e) {
      let t = { provideWorkspaceSymbols: (r, i) => {
        let s = this._client, o = (c, u) => s.sendRequest(Os.WorkspaceSymbolRequest.type, { query: c }, u).then((d) => u.isCancellationRequested ? null : s.protocol2CodeConverter.asSymbolInformations(d, u), (d) => s.handleFailedRequest(Os.WorkspaceSymbolRequest.type, u, d, null)), a = s.middleware;
        return a.provideWorkspaceSymbols ? a.provideWorkspaceSymbols(r, i, o) : o(r, i);
      }, resolveWorkspaceSymbol: e.resolveProvider === true ? (r, i) => {
        let s = this._client, o = (c, u) => s.sendRequest(Os.WorkspaceSymbolResolveRequest.type, s.code2ProtocolConverter.asWorkspaceSymbol(c), u).then((d) => u.isCancellationRequested ? null : s.protocol2CodeConverter.asSymbolInformation(d), (d) => s.handleFailedRequest(Os.WorkspaceSymbolResolveRequest.type, u, d, null)), a = s.middleware;
        return a.resolveWorkspaceSymbol ? a.resolveWorkspaceSymbol(r, i, o) : o(r, i);
      } : void 0 };
      return [pR.languages.registerWorkspaceSymbolProvider(t), t];
    }
  };
  Cn.WorkspaceSymbolFeature = Qd;
});
var O_ = O((wn) => {
  "use strict";
  var mR = wn && wn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), yR = wn && wn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), _R = wn && wn.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && mR(t, e, r[i]);
      return yR(t, e), t;
    };
  })();
  Object.defineProperty(wn, "__esModule", { value: true });
  wn.ReferencesFeature = void 0;
  var vR = require("vscode"), Yd = X(), Zd = se(), bR = _R(Se()), ef = class extends Zd.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Yd.ReferencesRequest.type);
    }
    fillClientCapabilities(e) {
      (0, Zd.ensure)((0, Zd.ensure)(e, "textDocument"), "references").dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.referencesProvider);
      r && this.register({ id: bR.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideReferences: (i, s, o, a) => {
        let c = this._client, u = (h, p, g, y) => c.sendRequest(Yd.ReferencesRequest.type, c.code2ProtocolConverter.asReferenceParams(h, p, g), y).then((_) => y.isCancellationRequested ? null : c.protocol2CodeConverter.asReferences(_, y), (_) => c.handleFailedRequest(Yd.ReferencesRequest.type, y, _, null)), d = c.middleware;
        return d.provideReferences ? d.provideReferences(i, s, o, a, u) : u(i, s, o, a);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return vR.languages.registerReferenceProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  wn.ReferencesFeature = ef;
});
var E_ = O((ia) => {
  "use strict";
  Object.defineProperty(ia, "__esModule", { value: true });
  ia.TypeDefinitionFeature = void 0;
  var CR = require("vscode"), tf = X(), Es = se(), nf = class extends Es.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, tf.TypeDefinitionRequest.type);
    }
    fillClientCapabilities(e) {
      (0, Es.ensure)((0, Es.ensure)(e, "textDocument"), "typeDefinition").dynamicRegistration = true;
      let t = (0, Es.ensure)((0, Es.ensure)(e, "textDocument"), "typeDefinition");
      t.dynamicRegistration = true, t.linkSupport = true;
    }
    initialize(e, t) {
      let [r, i] = this.getRegistration(t, e.typeDefinitionProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideTypeDefinition: (i, s, o) => {
        let a = this._client, c = (d, h, p) => a.sendRequest(tf.TypeDefinitionRequest.type, a.code2ProtocolConverter.asTextDocumentPositionParams(d, h), p).then((g) => p.isCancellationRequested ? null : a.protocol2CodeConverter.asDefinitionResult(g, p), (g) => a.handleFailedRequest(tf.TypeDefinitionRequest.type, p, g, null)), u = a.middleware;
        return u.provideTypeDefinition ? u.provideTypeDefinition(i, s, o, c) : c(i, s, o);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return CR.languages.registerTypeDefinitionProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  ia.TypeDefinitionFeature = nf;
});
var x_ = O((sa) => {
  "use strict";
  Object.defineProperty(sa, "__esModule", { value: true });
  sa.ImplementationFeature = void 0;
  var wR = require("vscode"), rf = X(), sf = se(), of = class extends sf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, rf.ImplementationRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, sf.ensure)((0, sf.ensure)(e, "textDocument"), "implementation");
      t.dynamicRegistration = true, t.linkSupport = true;
    }
    initialize(e, t) {
      let [r, i] = this.getRegistration(t, e.implementationProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideImplementation: (i, s, o) => {
        let a = this._client, c = (d, h, p) => a.sendRequest(rf.ImplementationRequest.type, a.code2ProtocolConverter.asTextDocumentPositionParams(d, h), p).then((g) => p.isCancellationRequested ? null : a.protocol2CodeConverter.asDefinitionResult(g, p), (g) => a.handleFailedRequest(rf.ImplementationRequest.type, p, g, null)), u = a.middleware;
        return u.provideImplementation ? u.provideImplementation(i, s, o, c) : c(i, s, o);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return wR.languages.registerImplementationProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  sa.ImplementationFeature = of;
});
var q_ = O((oa) => {
  "use strict";
  Object.defineProperty(oa, "__esModule", { value: true });
  oa.ColorProviderFeature = void 0;
  var DR = require("vscode"), xs = X(), af = se(), cf = class extends af.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, xs.DocumentColorRequest.type);
    }
    fillClientCapabilities(e) {
      (0, af.ensure)((0, af.ensure)(e, "textDocument"), "colorProvider").dynamicRegistration = true;
    }
    initialize(e, t) {
      let [r, i] = this.getRegistration(t, e.colorProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideColorPresentations: (i, s, o) => {
        let a = this._client, c = (d, h, p) => {
          let g = { color: d, textDocument: a.code2ProtocolConverter.asTextDocumentIdentifier(h.document), range: a.code2ProtocolConverter.asRange(h.range) };
          return a.sendRequest(xs.ColorPresentationRequest.type, g, p).then((y) => p.isCancellationRequested ? null : this._client.protocol2CodeConverter.asColorPresentations(y, p), (y) => a.handleFailedRequest(xs.ColorPresentationRequest.type, p, y, null));
        }, u = a.middleware;
        return u.provideColorPresentations ? u.provideColorPresentations(i, s, o, c) : c(i, s, o);
      }, provideDocumentColors: (i, s) => {
        let o = this._client, a = (u, d) => {
          let h = { textDocument: o.code2ProtocolConverter.asTextDocumentIdentifier(u) };
          return o.sendRequest(xs.DocumentColorRequest.type, h, d).then((p) => d.isCancellationRequested ? null : this._client.protocol2CodeConverter.asColorInformations(p, d), (p) => o.handleFailedRequest(xs.DocumentColorRequest.type, d, p, null));
        }, c = o.middleware;
        return c.provideDocumentColors ? c.provideDocumentColors(i, s, a) : a(i, s);
      } };
      return [DR.languages.registerColorProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r), r];
    }
  };
  oa.ColorProviderFeature = cf;
});
var M_ = O((Dn) => {
  "use strict";
  var SR = Dn && Dn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), PR = Dn && Dn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), RR = Dn && Dn.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && SR(t, e, r[i]);
      return PR(t, e), t;
    };
  })();
  Object.defineProperty(Dn, "__esModule", { value: true });
  Dn.CodeActionFeature = void 0;
  var TR = require("vscode"), gt = X(), OR = RR(Se()), uf = se(), lf = class extends uf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, gt.CodeActionRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, uf.ensure)((0, uf.ensure)(e, "textDocument"), "codeAction");
      t.dynamicRegistration = true, t.isPreferredSupport = true, t.disabledSupport = true, t.dataSupport = true, t.resolveSupport = { properties: ["edit", "command"] }, t.codeActionLiteralSupport = { codeActionKind: { valueSet: [gt.CodeActionKind.Empty, gt.CodeActionKind.QuickFix, gt.CodeActionKind.Refactor, gt.CodeActionKind.RefactorExtract, gt.CodeActionKind.RefactorInline, gt.CodeActionKind.RefactorMove, gt.CodeActionKind.RefactorRewrite, gt.CodeActionKind.Source, gt.CodeActionKind.SourceOrganizeImports, gt.CodeActionKind.Notebook] } }, t.honorsChangeAnnotations = true, t.documentationSupport = true, t.tagSupport = { valueSet: [gt.CodeActionTag.LLMGenerated] };
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.codeActionProvider);
      r && this.register({ id: OR.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideCodeActions: (i, s, o, a) => {
        let c = this._client, u = async (h, p, g, y) => {
          let _ = { textDocument: c.code2ProtocolConverter.asTextDocumentIdentifier(h), range: c.code2ProtocolConverter.asRange(p), context: c.code2ProtocolConverter.asCodeActionContextSync(g) };
          return c.sendRequest(gt.CodeActionRequest.type, _, y).then((D) => y.isCancellationRequested || D === null || D === void 0 ? null : c.protocol2CodeConverter.asCodeActionResult(D, y), (D) => c.handleFailedRequest(gt.CodeActionRequest.type, y, D, null));
        }, d = c.middleware;
        return d.provideCodeActions ? d.provideCodeActions(i, s, o, a, u) : u(i, s, o, a);
      }, resolveCodeAction: e.resolveProvider ? (i, s) => {
        let o = this._client, a = this._client.middleware, c = async (u, d) => o.sendRequest(gt.CodeActionResolveRequest.type, o.code2ProtocolConverter.asCodeActionSync(u), d).then((h) => d.isCancellationRequested ? u : o.protocol2CodeConverter.asCodeAction(h, d), (h) => o.handleFailedRequest(gt.CodeActionResolveRequest.type, d, h, u));
        return a.resolveCodeAction ? a.resolveCodeAction(i, s, c) : c(i, s);
      } : void 0 };
      return [TR.languages.registerCodeActionsProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r, this.getMetadata(e)), r];
    }
    getMetadata(e) {
      if (!(e.codeActionKinds === void 0 && e.documentation === void 0)) return { providedCodeActionKinds: this._client.protocol2CodeConverter.asCodeActionKinds(e.codeActionKinds), documentation: this._client.protocol2CodeConverter.asCodeActionDocumentations(e.documentation) };
    }
  };
  Dn.CodeActionFeature = lf;
});
var N_ = O((Sn) => {
  "use strict";
  var ER = Sn && Sn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), xR = Sn && Sn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), qR = Sn && Sn.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && ER(t, e, r[i]);
      return xR(t, e), t;
    };
  })();
  Object.defineProperty(Sn, "__esModule", { value: true });
  Sn.CodeLensFeature = void 0;
  var I_ = require("vscode"), Li = X(), MR = qR(Se()), qs = se(), df = class extends qs.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Li.CodeLensRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, qs.ensure)((0, qs.ensure)(e, "textDocument"), "codeLens");
      t.dynamicRegistration = true, t.resolveSupport = { properties: ["command"] }, (0, qs.ensure)((0, qs.ensure)(e, "workspace"), "codeLens").refreshSupport = true;
    }
    initialize(e, t) {
      this._client.onRequest(Li.CodeLensRefreshRequest.type, async () => {
        for (let s of this.getAllProviders()) s.onDidChangeCodeLensEmitter.fire();
      });
      let i = this.getRegistrationOptions(t, e.codeLensProvider);
      i && this.register({ id: MR.generateUuid(), registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = new I_.EventEmitter(), i = { onDidChangeCodeLenses: r.event, provideCodeLenses: (s, o) => {
        let a = this._client, c = (d, h) => a.sendRequest(Li.CodeLensRequest.type, a.code2ProtocolConverter.asCodeLensParams(d), h).then((p) => h.isCancellationRequested ? null : a.protocol2CodeConverter.asCodeLenses(p, h), (p) => a.handleFailedRequest(Li.CodeLensRequest.type, h, p, null)), u = a.middleware;
        return u.provideCodeLenses ? u.provideCodeLenses(s, o, c) : c(s, o);
      }, resolveCodeLens: e.resolveProvider ? (s, o) => {
        let a = this._client, c = (d, h) => a.sendRequest(Li.CodeLensResolveRequest.type, a.code2ProtocolConverter.asCodeLens(d), h).then((p) => h.isCancellationRequested ? d : a.protocol2CodeConverter.asCodeLens(p), (p) => a.handleFailedRequest(Li.CodeLensResolveRequest.type, h, p, d)), u = a.middleware;
        return u.resolveCodeLens ? u.resolveCodeLens(s, o, c) : c(s, o);
      } : void 0 };
      return [I_.languages.registerCodeLensProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), i), { provider: i, onDidChangeCodeLensEmitter: r }];
    }
  };
  Sn.CodeLensFeature = df;
});
var j_ = O((Tt) => {
  "use strict";
  var IR = Tt && Tt.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), NR = Tt && Tt.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), jR = Tt && Tt.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && IR(t, e, r[i]);
      return NR(t, e), t;
    };
  })();
  Object.defineProperty(Tt, "__esModule", { value: true });
  Tt.DocumentOnTypeFormattingFeature = Tt.DocumentRangeFormattingFeature = Tt.DocumentFormattingFeature = void 0;
  var aa = require("vscode"), nn = X(), gf = jR(Se()), rr = se(), Ai;
  (function(n) {
    function e(t) {
      let r = aa.workspace.getConfiguration("files", t);
      return { trimTrailingWhitespace: r.get("trimTrailingWhitespace"), trimFinalNewlines: r.get("trimFinalNewlines"), insertFinalNewline: r.get("insertFinalNewline") };
    }
    n.fromConfiguration = e;
  })(Ai || (Ai = {}));
  var ff = class extends rr.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, nn.DocumentFormattingRequest.type);
    }
    fillClientCapabilities(e) {
      (0, rr.ensure)((0, rr.ensure)(e, "textDocument"), "formatting").dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.documentFormattingProvider);
      r && this.register({ id: gf.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideDocumentFormattingEdits: (i, s, o) => {
        let a = this._client, c = (d, h, p) => {
          let g = { textDocument: a.code2ProtocolConverter.asTextDocumentIdentifier(d), options: a.code2ProtocolConverter.asFormattingOptions(h, Ai.fromConfiguration(d)) };
          return a.sendRequest(nn.DocumentFormattingRequest.type, g, p).then((y) => p.isCancellationRequested ? null : a.protocol2CodeConverter.asTextEdits(y, p), (y) => a.handleFailedRequest(nn.DocumentFormattingRequest.type, p, y, null));
        }, u = a.middleware;
        return u.provideDocumentFormattingEdits ? u.provideDocumentFormattingEdits(i, s, o, c) : c(i, s, o);
      } };
      return [aa.languages.registerDocumentFormattingEditProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r), r];
    }
  };
  Tt.DocumentFormattingFeature = ff;
  var hf = class extends rr.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, nn.DocumentRangeFormattingRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, rr.ensure)((0, rr.ensure)(e, "textDocument"), "rangeFormatting");
      t.dynamicRegistration = true, t.rangesSupport = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.documentRangeFormattingProvider);
      r && this.register({ id: gf.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideDocumentRangeFormattingEdits: (i, s, o, a) => {
        let c = this._client, u = (h, p, g, y) => {
          let _ = { textDocument: c.code2ProtocolConverter.asTextDocumentIdentifier(h), range: c.code2ProtocolConverter.asRange(p), options: c.code2ProtocolConverter.asFormattingOptions(g, Ai.fromConfiguration(h)) };
          return c.sendRequest(nn.DocumentRangeFormattingRequest.type, _, y).then((D) => y.isCancellationRequested ? null : c.protocol2CodeConverter.asTextEdits(D, y), (D) => c.handleFailedRequest(nn.DocumentRangeFormattingRequest.type, y, D, null));
        }, d = c.middleware;
        return d.provideDocumentRangeFormattingEdits ? d.provideDocumentRangeFormattingEdits(i, s, o, a, u) : u(i, s, o, a);
      } };
      return e.rangesSupport && (r.provideDocumentRangesFormattingEdits = (i, s, o, a) => {
        let c = this._client, u = (h, p, g, y) => {
          let _ = { textDocument: c.code2ProtocolConverter.asTextDocumentIdentifier(h), ranges: c.code2ProtocolConverter.asRanges(p), options: c.code2ProtocolConverter.asFormattingOptions(g, Ai.fromConfiguration(h)) };
          return c.sendRequest(nn.DocumentRangesFormattingRequest.type, _, y).then((D) => y.isCancellationRequested ? null : c.protocol2CodeConverter.asTextEdits(D, y), (D) => c.handleFailedRequest(nn.DocumentRangesFormattingRequest.type, y, D, null));
        }, d = c.middleware;
        return d.provideDocumentRangesFormattingEdits ? d.provideDocumentRangesFormattingEdits(i, s, o, a, u) : u(i, s, o, a);
      }), [aa.languages.registerDocumentRangeFormattingEditProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r), r];
    }
  };
  Tt.DocumentRangeFormattingFeature = hf;
  var pf = class extends rr.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, nn.DocumentOnTypeFormattingRequest.type);
    }
    fillClientCapabilities(e) {
      (0, rr.ensure)((0, rr.ensure)(e, "textDocument"), "onTypeFormatting").dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.documentOnTypeFormattingProvider);
      r && this.register({ id: gf.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideOnTypeFormattingEdits: (s, o, a, c, u) => {
        let d = this._client, h = (g, y, _, D, S) => {
          let C = { textDocument: d.code2ProtocolConverter.asTextDocumentIdentifier(g), position: d.code2ProtocolConverter.asPosition(y), ch: _, options: d.code2ProtocolConverter.asFormattingOptions(D, Ai.fromConfiguration(g)) };
          return d.sendRequest(nn.DocumentOnTypeFormattingRequest.type, C, S).then((T) => S.isCancellationRequested ? null : d.protocol2CodeConverter.asTextEdits(T, S), (T) => d.handleFailedRequest(nn.DocumentOnTypeFormattingRequest.type, S, T, null));
        }, p = d.middleware;
        return p.provideOnTypeFormattingEdits ? p.provideOnTypeFormattingEdits(s, o, a, c, u, h) : h(s, o, a, c, u);
      } }, i = e.moreTriggerCharacter || [];
      return [aa.languages.registerOnTypeFormattingEditProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r, e.firstTriggerCharacter, ...i), r];
    }
  };
  Tt.DocumentOnTypeFormattingFeature = pf;
});
var A_ = O((Pn) => {
  "use strict";
  var FR = Pn && Pn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), LR = Pn && Pn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), L_ = Pn && Pn.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && FR(t, e, r[i]);
      return LR(t, e), t;
    };
  })();
  Object.defineProperty(Pn, "__esModule", { value: true });
  Pn.RenameFeature = void 0;
  var AR = require("vscode"), Gr = X(), kR = L_(Se()), F_ = L_(Wt()), mf = se(), yf = class extends mf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Gr.RenameRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, mf.ensure)((0, mf.ensure)(e, "textDocument"), "rename");
      t.dynamicRegistration = true, t.prepareSupport = true, t.prepareSupportDefaultBehavior = Gr.PrepareSupportDefaultBehavior.Identifier, t.honorsChangeAnnotations = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.renameProvider);
      r && (F_.boolean(e.renameProvider) && (r.prepareProvider = false), this.register({ id: kR.generateUuid(), registerOptions: r }));
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideRenameEdits: (i, s, o, a) => {
        let c = this._client, u = async (h, p, g, y) => {
          let _ = { textDocument: c.code2ProtocolConverter.asTextDocumentIdentifier(h), position: c.code2ProtocolConverter.asPosition(p), newName: g }, D = null;
          try {
            D = await c.sendRequest(Gr.RenameRequest.type, _, y);
          } catch (C) {
            return c.handleFailedRequest(Gr.RenameRequest.type, y, C, null, false);
          }
          if (y.isCancellationRequested || D === null) return null;
          let S = await c.protocol2CodeConverter.asWorkspaceEdit(D, y);
          if (y.isCancellationRequested) return null;
          if (!c.validateWorkspaceEdit(D)) throw new Error("The rename edit returned from the server is not valid anymore and cannot be applied.");
          return S;
        }, d = c.middleware;
        return d.provideRenameEdits ? d.provideRenameEdits(i, s, o, a, u) : u(i, s, o, a);
      }, prepareRename: e.prepareProvider ? (i, s, o) => {
        let a = this._client, c = (d, h, p) => {
          let g = { textDocument: a.code2ProtocolConverter.asTextDocumentIdentifier(d), position: a.code2ProtocolConverter.asPosition(h) };
          return a.sendRequest(Gr.PrepareRenameRequest.type, g, p).then((y) => p.isCancellationRequested ? null : Gr.Range.is(y) ? a.protocol2CodeConverter.asRange(y) : this.isDefaultBehavior(y) ? y.defaultBehavior === true ? null : Promise.reject(new Error("The element can't be renamed.")) : y && Gr.Range.is(y.range) ? { range: a.protocol2CodeConverter.asRange(y.range), placeholder: y.placeholder } : Promise.reject(new Error("The element can't be renamed.")), (y) => {
            throw typeof y.message == "string" ? new Error(y.message) : new Error("The element can't be renamed.");
          });
        }, u = a.middleware;
        return u.prepareRename ? u.prepareRename(i, s, o, c) : c(i, s, o);
      } : void 0 };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return AR.languages.registerRenameProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
    isDefaultBehavior(e) {
      let t = e;
      return t && F_.boolean(t.defaultBehavior);
    }
  };
  Pn.RenameFeature = yf;
});
var k_ = O((Rn) => {
  "use strict";
  var $R = Rn && Rn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), HR = Rn && Rn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), UR = Rn && Rn.__importStar || /* @__PURE__ */ (function() {
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
  Object.defineProperty(Rn, "__esModule", { value: true });
  Rn.DocumentLinkFeature = void 0;
  var WR = require("vscode"), Ms = X(), _f = se(), zR = UR(Se()), vf = class extends _f.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Ms.DocumentLinkRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, _f.ensure)((0, _f.ensure)(e, "textDocument"), "documentLink");
      t.dynamicRegistration = true, t.tooltipSupport = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.documentLinkProvider);
      r && this.register({ id: zR.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideDocumentLinks: (i, s) => {
        let o = this._client, a = (u, d) => o.sendRequest(Ms.DocumentLinkRequest.type, o.code2ProtocolConverter.asDocumentLinkParams(u), d).then((h) => d.isCancellationRequested ? null : o.protocol2CodeConverter.asDocumentLinks(h, d), (h) => o.handleFailedRequest(Ms.DocumentLinkRequest.type, d, h, null)), c = o.middleware;
        return c.provideDocumentLinks ? c.provideDocumentLinks(i, s, a) : a(i, s);
      }, resolveDocumentLink: e.resolveProvider ? (i, s) => {
        let o = this._client, a = (u, d) => o.sendRequest(Ms.DocumentLinkResolveRequest.type, o.code2ProtocolConverter.asDocumentLink(u), d).then((h) => d.isCancellationRequested ? u : o.protocol2CodeConverter.asDocumentLink(h), (h) => o.handleFailedRequest(Ms.DocumentLinkResolveRequest.type, d, h, u)), c = o.middleware;
        return c.resolveDocumentLink ? c.resolveDocumentLink(i, s, a) : a(i, s);
      } : void 0 };
      return [WR.languages.registerDocumentLinkProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r), r];
    }
  };
  Rn.DocumentLinkFeature = vf;
});
var H_ = O((Tn) => {
  "use strict";
  var KR = Tn && Tn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), BR = Tn && Tn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), VR = Tn && Tn.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && KR(t, e, r[i]);
      return BR(t, e), t;
    };
  })();
  Object.defineProperty(Tn, "__esModule", { value: true });
  Tn.ExecuteCommandFeature = void 0;
  var GR = require("vscode"), bf = X(), XR = VR(Se()), $_ = se(), Cf = class {
    _client;
    _commands;
    constructor(e) {
      this._client = e, this._commands = /* @__PURE__ */ new Map();
    }
    getState() {
      return { kind: "workspace", id: this.registrationType.method, registrations: this._commands.size > 0 };
    }
    get registrationType() {
      return bf.ExecuteCommandRequest.type;
    }
    fillClientCapabilities(e) {
      (0, $_.ensure)((0, $_.ensure)(e, "workspace"), "executeCommand").dynamicRegistration = true;
    }
    initialize(e) {
      e.executeCommandProvider && this.register({ id: XR.generateUuid(), registerOptions: Object.assign({}, e.executeCommandProvider) });
    }
    register(e) {
      let t = this._client, r = t.middleware, i = (s, o) => {
        let a = { command: s, arguments: o };
        return t.sendRequest(bf.ExecuteCommandRequest.type, a).then(void 0, (c) => t.handleFailedRequest(bf.ExecuteCommandRequest.type, void 0, c, void 0));
      };
      if (e.registerOptions.commands) {
        let s = [];
        for (let o of e.registerOptions.commands) s.push(GR.commands.registerCommand(o, (...a) => r.executeCommand ? r.executeCommand(o, a, i) : i(o, a)));
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
  Tn.ExecuteCommandFeature = Cf;
});
var W_ = O((ca) => {
  "use strict";
  Object.defineProperty(ca, "__esModule", { value: true });
  ca.FoldingRangeFeature = void 0;
  var U_ = require("vscode"), Xr = X(), Is = se(), wf = class extends Is.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Xr.FoldingRangeRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Is.ensure)((0, Is.ensure)(e, "textDocument"), "foldingRange");
      t.dynamicRegistration = true, t.rangeLimit = 5e3, t.lineFoldingOnly = true, t.foldingRangeKind = { valueSet: [Xr.FoldingRangeKind.Comment, Xr.FoldingRangeKind.Imports, Xr.FoldingRangeKind.Region] }, t.foldingRange = { collapsedText: false }, (0, Is.ensure)((0, Is.ensure)(e, "workspace"), "foldingRange").refreshSupport = true;
    }
    initialize(e, t) {
      this._client.onRequest(Xr.FoldingRangeRefreshRequest.type, async () => {
        for (let s of this.getAllProviders()) s.onDidChangeFoldingRange.fire();
      });
      let [r, i] = this.getRegistration(t, e.foldingRangeProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = new U_.EventEmitter(), i = { onDidChangeFoldingRanges: r.event, provideFoldingRanges: (s, o, a) => {
        let c = this._client, u = (h, p, g) => {
          let y = { textDocument: c.code2ProtocolConverter.asTextDocumentIdentifier(h) };
          return c.sendRequest(Xr.FoldingRangeRequest.type, y, g).then((_) => g.isCancellationRequested ? null : c.protocol2CodeConverter.asFoldingRanges(_, g), (_) => c.handleFailedRequest(Xr.FoldingRangeRequest.type, g, _, null));
        }, d = c.middleware;
        return d.provideFoldingRanges ? d.provideFoldingRanges(s, o, a, u) : u(s, o, a);
      } };
      return [U_.languages.registerFoldingRangeProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), i), { provider: i, onDidChangeFoldingRange: r }];
    }
  };
  ca.FoldingRangeFeature = wf;
});
var z_ = O((ua) => {
  "use strict";
  Object.defineProperty(ua, "__esModule", { value: true });
  ua.DeclarationFeature = void 0;
  var JR = require("vscode"), Df = X(), Sf = se(), Pf = class extends Sf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Df.DeclarationRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Sf.ensure)((0, Sf.ensure)(e, "textDocument"), "declaration");
      t.dynamicRegistration = true, t.linkSupport = true;
    }
    initialize(e, t) {
      let [r, i] = this.getRegistration(t, e.declarationProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideDeclaration: (i, s, o) => {
        let a = this._client, c = (d, h, p) => a.sendRequest(Df.DeclarationRequest.type, a.code2ProtocolConverter.asTextDocumentPositionParams(d, h), p).then((g) => p.isCancellationRequested ? null : a.protocol2CodeConverter.asDeclarationResult(g, p), (g) => a.handleFailedRequest(Df.DeclarationRequest.type, p, g, null)), u = a.middleware;
        return u.provideDeclaration ? u.provideDeclaration(i, s, o, c) : c(i, s, o);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return JR.languages.registerDeclarationProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  ua.DeclarationFeature = Pf;
});
var K_ = O((la) => {
  "use strict";
  Object.defineProperty(la, "__esModule", { value: true });
  la.SelectionRangeFeature = void 0;
  var QR = require("vscode"), Rf = X(), Tf = se(), Of = class extends Tf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Rf.SelectionRangeRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Tf.ensure)((0, Tf.ensure)(e, "textDocument"), "selectionRange");
      t.dynamicRegistration = true;
    }
    initialize(e, t) {
      let [r, i] = this.getRegistration(t, e.selectionRangeProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideSelectionRanges: (i, s, o) => {
        let a = this._client, c = async (d, h, p) => {
          let g = { textDocument: a.code2ProtocolConverter.asTextDocumentIdentifier(d), positions: a.code2ProtocolConverter.asPositionsSync(h, p) };
          return a.sendRequest(Rf.SelectionRangeRequest.type, g, p).then((y) => p.isCancellationRequested ? null : a.protocol2CodeConverter.asSelectionRanges(y, p), (y) => a.handleFailedRequest(Rf.SelectionRangeRequest.type, p, y, null));
        }, u = a.middleware;
        return u.provideSelectionRanges ? u.provideSelectionRanges(i, s, o, c) : c(i, s, o);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return QR.languages.registerSelectionRangeProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  la.SelectionRangeFeature = Of;
});
var B_ = O((da) => {
  "use strict";
  Object.defineProperty(da, "__esModule", { value: true });
  da.CallHierarchyFeature = void 0;
  var YR = require("vscode"), Jr = X(), Ef = se(), xf = class {
    client;
    middleware;
    constructor(e) {
      this.client = e, this.middleware = e.middleware;
    }
    prepareCallHierarchy(e, t, r) {
      let i = this.client, s = this.middleware, o = (a, c, u) => {
        let d = i.code2ProtocolConverter.asTextDocumentPositionParams(a, c);
        return i.sendRequest(Jr.CallHierarchyPrepareRequest.type, d, u).then((h) => u.isCancellationRequested ? null : i.protocol2CodeConverter.asCallHierarchyItems(h, u), (h) => i.handleFailedRequest(Jr.CallHierarchyPrepareRequest.type, u, h, null));
      };
      return s.prepareCallHierarchy ? s.prepareCallHierarchy(e, t, r, o) : o(e, t, r);
    }
    provideCallHierarchyIncomingCalls(e, t) {
      let r = this.client, i = this.middleware, s = (o, a) => {
        let c = { item: r.code2ProtocolConverter.asCallHierarchyItem(o) };
        return r.sendRequest(Jr.CallHierarchyIncomingCallsRequest.type, c, a).then((u) => a.isCancellationRequested ? null : r.protocol2CodeConverter.asCallHierarchyIncomingCalls(u, a), (u) => r.handleFailedRequest(Jr.CallHierarchyIncomingCallsRequest.type, a, u, null));
      };
      return i.provideCallHierarchyIncomingCalls ? i.provideCallHierarchyIncomingCalls(e, t, s) : s(e, t);
    }
    provideCallHierarchyOutgoingCalls(e, t) {
      let r = this.client, i = this.middleware, s = (o, a) => {
        let c = { item: r.code2ProtocolConverter.asCallHierarchyItem(o) };
        return r.sendRequest(Jr.CallHierarchyOutgoingCallsRequest.type, c, a).then((u) => a.isCancellationRequested ? null : r.protocol2CodeConverter.asCallHierarchyOutgoingCalls(u, a), (u) => r.handleFailedRequest(Jr.CallHierarchyOutgoingCallsRequest.type, a, u, null));
      };
      return i.provideCallHierarchyOutgoingCalls ? i.provideCallHierarchyOutgoingCalls(e, t, s) : s(e, t);
    }
  }, qf = class extends Ef.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Jr.CallHierarchyPrepareRequest.type);
    }
    fillClientCapabilities(e) {
      let t = e, r = (0, Ef.ensure)((0, Ef.ensure)(t, "textDocument"), "callHierarchy");
      r.dynamicRegistration = true;
    }
    initialize(e, t) {
      let [r, i] = this.getRegistration(t, e.callHierarchyProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = this._client, r = new xf(t);
      return [YR.languages.registerCallHierarchyProvider(this._client.protocol2CodeConverter.asDocumentSelector(e.documentSelector), r), r];
    }
  };
  da.CallHierarchyFeature = qf;
});
var G_ = O((On) => {
  "use strict";
  var ZR = On && On.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), eT = On && On.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), V_ = On && On.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && ZR(t, e, r[i]);
      return eT(t, e), t;
    };
  })();
  Object.defineProperty(On, "__esModule", { value: true });
  On.SemanticTokensFeature = void 0;
  var fa = V_(require("vscode")), Z = X(), Ns = se(), tT = V_(Wt()), Mf = class extends Ns.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Z.SemanticTokensRegistrationType.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Ns.ensure)((0, Ns.ensure)(e, "textDocument"), "semanticTokens");
      t.dynamicRegistration = true, t.tokenTypes = [Z.SemanticTokenTypes.namespace, Z.SemanticTokenTypes.type, Z.SemanticTokenTypes.class, Z.SemanticTokenTypes.enum, Z.SemanticTokenTypes.interface, Z.SemanticTokenTypes.struct, Z.SemanticTokenTypes.typeParameter, Z.SemanticTokenTypes.parameter, Z.SemanticTokenTypes.variable, Z.SemanticTokenTypes.property, Z.SemanticTokenTypes.enumMember, Z.SemanticTokenTypes.event, Z.SemanticTokenTypes.function, Z.SemanticTokenTypes.method, Z.SemanticTokenTypes.macro, Z.SemanticTokenTypes.keyword, Z.SemanticTokenTypes.comment, Z.SemanticTokenTypes.string, Z.SemanticTokenTypes.number, Z.SemanticTokenTypes.regexp, Z.SemanticTokenTypes.operator, Z.SemanticTokenTypes.decorator, Z.SemanticTokenTypes.label], t.tokenModifiers = [Z.SemanticTokenModifiers.declaration, Z.SemanticTokenModifiers.definition, Z.SemanticTokenModifiers.readonly, Z.SemanticTokenModifiers.static, Z.SemanticTokenModifiers.deprecated, Z.SemanticTokenModifiers.abstract, Z.SemanticTokenModifiers.async, Z.SemanticTokenModifiers.modification, Z.SemanticTokenModifiers.documentation, Z.SemanticTokenModifiers.defaultLibrary], t.formats = [Z.TokenFormat.Relative], t.requests = { range: true, full: { delta: true } }, t.multilineTokenSupport = false, t.overlappingTokenSupport = false, t.serverCancelSupport = true, t.augmentsSyntaxTokens = true, (0, Ns.ensure)((0, Ns.ensure)(e, "workspace"), "semanticTokens").refreshSupport = true;
    }
    initialize(e, t) {
      this._client.onRequest(Z.SemanticTokensRefreshRequest.type, async () => {
        for (let o of this.getAllProviders()) o.onDidChangeSemanticTokensEmitter.fire();
      });
      let [i, s] = this.getRegistration(t, e.semanticTokensProvider);
      !i || !s || this.register({ id: i, registerOptions: s });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = tT.boolean(e.full) ? e.full : e.full !== void 0, i = e.full !== void 0 && typeof e.full != "boolean" && e.full.delta === true, s = new fa.EventEmitter(), o = r ? { onDidChangeSemanticTokens: s.event, provideDocumentSemanticTokens: (g, y) => {
        let _ = this._client, D = _.middleware, S = (C, T) => {
          let I = { textDocument: _.code2ProtocolConverter.asTextDocumentIdentifier(C) };
          return _.sendRequest(Z.SemanticTokensRequest.type, I, T).then((N) => T.isCancellationRequested ? null : _.protocol2CodeConverter.asSemanticTokens(N, T), (N) => _.handleFailedRequest(Z.SemanticTokensRequest.type, T, N, null));
        };
        return D.provideDocumentSemanticTokens ? D.provideDocumentSemanticTokens(g, y, S) : S(g, y);
      }, provideDocumentSemanticTokensEdits: i ? (g, y, _) => {
        let D = this._client, S = D.middleware, C = (T, I, N) => {
          let J = { textDocument: D.code2ProtocolConverter.asTextDocumentIdentifier(T), previousResultId: I };
          return D.sendRequest(Z.SemanticTokensDeltaRequest.type, J, N).then(async (Q) => N.isCancellationRequested ? null : Z.SemanticTokens.is(Q) ? await D.protocol2CodeConverter.asSemanticTokens(Q, N) : await D.protocol2CodeConverter.asSemanticTokensEdits(Q, N), (Q) => D.handleFailedRequest(Z.SemanticTokensDeltaRequest.type, N, Q, null));
        };
        return S.provideDocumentSemanticTokensEdits ? S.provideDocumentSemanticTokensEdits(g, y, _, C) : C(g, y, _);
      } : void 0 } : void 0, c = e.range === true ? { onDidChangeSemanticTokens: s.event, provideDocumentRangeSemanticTokens: (g, y, _) => {
        let D = this._client, S = D.middleware, C = (T, I, N) => {
          let J = { textDocument: D.code2ProtocolConverter.asTextDocumentIdentifier(T), range: D.code2ProtocolConverter.asRange(I) };
          return D.sendRequest(Z.SemanticTokensRangeRequest.type, J, N).then((Q) => N.isCancellationRequested ? null : D.protocol2CodeConverter.asSemanticTokens(Q, N), (Q) => D.handleFailedRequest(Z.SemanticTokensRangeRequest.type, N, Q, null));
        };
        return S.provideDocumentRangeSemanticTokens ? S.provideDocumentRangeSemanticTokens(g, y, _, C) : C(g, y, _);
      } } : void 0, u = [], d = this._client, h = d.protocol2CodeConverter.asSemanticTokensLegend(e.legend), p = d.protocol2CodeConverter.asDocumentSelector(t);
      return o !== void 0 && u.push(fa.languages.registerDocumentSemanticTokensProvider(p, o, h)), c !== void 0 && u.push(fa.languages.registerDocumentRangeSemanticTokensProvider(p, c, h)), [new fa.Disposable(() => u.forEach((g) => g.dispose())), { range: c, full: o, onDidChangeSemanticTokensEmitter: s }];
    }
  };
  On.SemanticTokensFeature = Mf;
});
var J_ = O((En) => {
  "use strict";
  var nT = En && En.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), rT = En && En.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), X_ = En && En.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && nT(t, e, r[i]);
      return rT(t, e), t;
    };
  })();
  Object.defineProperty(En, "__esModule", { value: true });
  En.LinkedEditingFeature = void 0;
  var iT = X_(require("vscode")), If = X_(X()), Nf = se(), jf = class extends Nf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, If.LinkedEditingRangeRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Nf.ensure)((0, Nf.ensure)(e, "textDocument"), "linkedEditingRange");
      t.dynamicRegistration = true;
    }
    initialize(e, t) {
      let [r, i] = this.getRegistration(t, e.linkedEditingRangeProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideLinkedEditingRanges: (i, s, o) => {
        let a = this._client, c = (d, h, p) => a.sendRequest(If.LinkedEditingRangeRequest.type, a.code2ProtocolConverter.asTextDocumentPositionParams(d, h), p).then((g) => p.isCancellationRequested ? null : a.protocol2CodeConverter.asLinkedEditingRanges(g, p), (g) => a.handleFailedRequest(If.LinkedEditingRangeRequest.type, p, g, null)), u = a.middleware;
        return u.provideLinkedEditingRange ? u.provideLinkedEditingRange(i, s, o, c) : c(i, s, o);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return iT.languages.registerLinkedEditingRangeProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  En.LinkedEditingFeature = jf;
});
var Q_ = O((ha) => {
  "use strict";
  Object.defineProperty(ha, "__esModule", { value: true });
  ha.TypeHierarchyFeature = void 0;
  var sT = require("vscode"), Qr = X(), Ff = se(), Lf = class {
    client;
    middleware;
    constructor(e) {
      this.client = e, this.middleware = e.middleware;
    }
    prepareTypeHierarchy(e, t, r) {
      let i = this.client, s = this.middleware, o = (a, c, u) => {
        let d = i.code2ProtocolConverter.asTextDocumentPositionParams(a, c);
        return i.sendRequest(Qr.TypeHierarchyPrepareRequest.type, d, u).then((h) => u.isCancellationRequested ? null : i.protocol2CodeConverter.asTypeHierarchyItems(h, u), (h) => i.handleFailedRequest(Qr.TypeHierarchyPrepareRequest.type, u, h, null));
      };
      return s.prepareTypeHierarchy ? s.prepareTypeHierarchy(e, t, r, o) : o(e, t, r);
    }
    provideTypeHierarchySupertypes(e, t) {
      let r = this.client, i = this.middleware, s = (o, a) => {
        let c = { item: r.code2ProtocolConverter.asTypeHierarchyItem(o) };
        return r.sendRequest(Qr.TypeHierarchySupertypesRequest.type, c, a).then((u) => a.isCancellationRequested ? null : r.protocol2CodeConverter.asTypeHierarchyItems(u, a), (u) => r.handleFailedRequest(Qr.TypeHierarchySupertypesRequest.type, a, u, null));
      };
      return i.provideTypeHierarchySupertypes ? i.provideTypeHierarchySupertypes(e, t, s) : s(e, t);
    }
    provideTypeHierarchySubtypes(e, t) {
      let r = this.client, i = this.middleware, s = (o, a) => {
        let c = { item: r.code2ProtocolConverter.asTypeHierarchyItem(o) };
        return r.sendRequest(Qr.TypeHierarchySubtypesRequest.type, c, a).then((u) => a.isCancellationRequested ? null : r.protocol2CodeConverter.asTypeHierarchyItems(u, a), (u) => r.handleFailedRequest(Qr.TypeHierarchySubtypesRequest.type, a, u, null));
      };
      return i.provideTypeHierarchySubtypes ? i.provideTypeHierarchySubtypes(e, t, s) : s(e, t);
    }
  }, Af = class extends Ff.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Qr.TypeHierarchyPrepareRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Ff.ensure)((0, Ff.ensure)(e, "textDocument"), "typeHierarchy");
      t.dynamicRegistration = true;
    }
    initialize(e, t) {
      let [r, i] = this.getRegistration(t, e.typeHierarchyProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = this._client, r = new Lf(t);
      return [sT.languages.registerTypeHierarchyProvider(t.protocol2CodeConverter.asDocumentSelector(e.documentSelector), r), r];
    }
  };
  ha.TypeHierarchyFeature = Af;
});
var Z_ = O((ga) => {
  "use strict";
  Object.defineProperty(ga, "__esModule", { value: true });
  ga.InlineValueFeature = void 0;
  var Y_ = require("vscode"), pa = X(), js = se(), kf = class extends js.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, pa.InlineValueRequest.type);
    }
    fillClientCapabilities(e) {
      (0, js.ensure)((0, js.ensure)(e, "textDocument"), "inlineValue").dynamicRegistration = true, (0, js.ensure)((0, js.ensure)(e, "workspace"), "inlineValue").refreshSupport = true;
    }
    initialize(e, t) {
      this._client.onRequest(pa.InlineValueRefreshRequest.type, async () => {
        for (let s of this.getAllProviders()) s.onDidChangeInlineValues.fire();
      });
      let [r, i] = this.getRegistration(t, e.inlineValueProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = new Y_.EventEmitter(), i = { onDidChangeInlineValues: r.event, provideInlineValues: (s, o, a, c) => {
        let u = this._client, d = (p, g, y, _) => {
          let D = { textDocument: u.code2ProtocolConverter.asTextDocumentIdentifier(p), range: u.code2ProtocolConverter.asRange(g), context: u.code2ProtocolConverter.asInlineValueContext(y) };
          return u.sendRequest(pa.InlineValueRequest.type, D, _).then((S) => _.isCancellationRequested ? null : u.protocol2CodeConverter.asInlineValues(S, _), (S) => u.handleFailedRequest(pa.InlineValueRequest.type, _, S, null));
        }, h = u.middleware;
        return h.provideInlineValues ? h.provideInlineValues(s, o, a, c, d) : d(s, o, a, c);
      } };
      return [this.registerProvider(t, i), { provider: i, onDidChangeInlineValues: r }];
    }
    registerProvider(e, t) {
      return Y_.languages.registerInlineValuesProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  ga.InlineValueFeature = kf;
});
var tv = O((ma) => {
  "use strict";
  Object.defineProperty(ma, "__esModule", { value: true });
  ma.InlayHintsFeature = void 0;
  var ev = require("vscode"), ki = X(), Fs = se(), $f = class extends Fs.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, ki.InlayHintRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Fs.ensure)((0, Fs.ensure)(e, "textDocument"), "inlayHint");
      t.dynamicRegistration = true, t.resolveSupport = { properties: ["tooltip", "textEdits", "label.tooltip", "label.location", "label.command"] }, (0, Fs.ensure)((0, Fs.ensure)(e, "workspace"), "inlayHint").refreshSupport = true;
    }
    initialize(e, t) {
      this._client.onRequest(ki.InlayHintRefreshRequest.type, async () => {
        for (let s of this.getAllProviders()) s.onDidChangeInlayHints.fire();
      });
      let [r, i] = this.getRegistration(t, e.inlayHintProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = new ev.EventEmitter(), i = { onDidChangeInlayHints: r.event, provideInlayHints: (s, o, a) => {
        let c = this._client, u = async (h, p, g) => {
          let y = { textDocument: c.code2ProtocolConverter.asTextDocumentIdentifier(h), range: c.code2ProtocolConverter.asRange(p) };
          try {
            let _ = await c.sendRequest(ki.InlayHintRequest.type, y, g);
            return g.isCancellationRequested ? null : c.protocol2CodeConverter.asInlayHints(_, g);
          } catch (_) {
            return c.handleFailedRequest(ki.InlayHintRequest.type, g, _, null);
          }
        }, d = c.middleware;
        return d.provideInlayHints ? d.provideInlayHints(s, o, a, u) : u(s, o, a);
      } };
      return i.resolveInlayHint = e.resolveProvider === true ? (s, o) => {
        let a = this._client, c = async (d, h) => {
          try {
            let p = await a.sendRequest(ki.InlayHintResolveRequest.type, a.code2ProtocolConverter.asInlayHint(d), h);
            if (h.isCancellationRequested) return null;
            let g = a.protocol2CodeConverter.asInlayHint(p, h);
            return h.isCancellationRequested ? null : g;
          } catch (p) {
            return a.handleFailedRequest(ki.InlayHintResolveRequest.type, h, p, null);
          }
        }, u = a.middleware;
        return u.resolveInlayHint ? u.resolveInlayHint(s, o, c) : c(s, o);
      } : void 0, [this.registerProvider(t, i), { provider: i, onDidChangeInlayHints: r }];
    }
    registerProvider(e, t) {
      return ev.languages.registerInlayHintsProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  ma.InlayHintsFeature = $f;
});
var nv = O((rn) => {
  "use strict";
  var oT = rn && rn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), aT = rn && rn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), cT = rn && rn.__importStar || /* @__PURE__ */ (function() {
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
  Object.defineProperty(rn, "__esModule", { value: true });
  rn.WorkspaceFoldersFeature = void 0;
  rn.arrayDiff = Uf;
  var uT = cT(Se()), ya = require("vscode"), Ls = X();
  function Hf(n, e) {
    if (n != null) return n[e];
  }
  function Uf(n, e) {
    return n.filter((t) => e.indexOf(t) < 0);
  }
  var Wf = class {
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
      return Ls.DidChangeWorkspaceFoldersNotification.type;
    }
    fillInitializeParams(e) {
      let t = ya.workspace.workspaceFolders;
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
      t.onRequest(Ls.WorkspaceFoldersRequest.type, (s) => {
        let o = () => {
          let c = ya.workspace.workspaceFolders;
          return c === void 0 ? null : c.map((d) => this.asProtocol(d));
        }, a = t.middleware.workspace;
        return a && a.workspaceFolders ? a.workspaceFolders(s, o) : o(s);
      });
      let r = Hf(Hf(Hf(e, "workspace"), "workspaceFolders"), "changeNotifications"), i;
      typeof r == "string" ? i = r : r === true && (i = uT.generateUuid()), i && this.register({ id: i, registerOptions: void 0 });
    }
    sendInitialEvent(e) {
      let t;
      if (this._initialFolders && e) {
        let r = Uf(this._initialFolders, e), i = Uf(e, this._initialFolders);
        (i.length > 0 || r.length > 0) && (t = this.doSendEvent(i, r));
      } else this._initialFolders ? t = this.doSendEvent([], this._initialFolders) : e && (t = this.doSendEvent(e, []));
      t !== void 0 && t.catch((r) => {
        this._client.error(`Sending notification ${Ls.DidChangeWorkspaceFoldersNotification.type.method} failed`, r);
      });
    }
    doSendEvent(e, t) {
      let r = { event: { added: e.map((i) => this.asProtocol(i)), removed: t.map((i) => this.asProtocol(i)) } };
      return this._client.sendNotification(Ls.DidChangeWorkspaceFoldersNotification.type, r);
    }
    register(e) {
      let t = e.id, r = this._client, i = ya.workspace.onDidChangeWorkspaceFolders((s) => {
        let o = (u) => this.doSendEvent(u.added, u.removed), a = r.middleware.workspace;
        (a && a.didChangeWorkspaceFolders ? a.didChangeWorkspaceFolders(s, o) : o(s)).catch((u) => {
          this._client.error(`Sending notification ${Ls.DidChangeWorkspaceFoldersNotification.type.method} failed`, u);
        });
      });
      this._listeners.set(t, i), this.sendInitialEvent(ya.workspace.workspaceFolders);
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
  rn.WorkspaceFoldersFeature = Wf;
});
var sv = O((Be) => {
  "use strict";
  var lT = Be && Be.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), dT = Be && Be.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), ba = Be && Be.__importStar || /* @__PURE__ */ (function() {
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
  Object.defineProperty(Be, "__esModule", { value: true });
  Be.WillDeleteFilesFeature = Be.WillRenameFilesFeature = Be.WillCreateFilesFeature = Be.DidDeleteFilesFeature = Be.DidRenameFilesFeature = Be.DidCreateFilesFeature = void 0;
  var Bt = ba(require("vscode")), fT = ba(Wl()), ir = ba(X()), hT = ba(Se());
  function rv(n, e) {
    return n[e] === void 0 && (n[e] = {}), n[e];
  }
  function pT(n, e) {
    return n[e];
  }
  function iv(n, e, t) {
    n[e] = t;
  }
  var As = class n {
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
      let t = rv(rv(e, "workspace"), "fileOperations");
      iv(t, "dynamicRegistration", true), iv(t, this._clientCapability, true);
    }
    initialize(e) {
      let t = e.workspace?.fileOperations, r = t !== void 0 ? pT(t, this._serverCapability) : void 0;
      if (r?.filters !== void 0) try {
        this.register({ id: hT.generateUuid(), registerOptions: { filters: r.filters } });
      } catch (i) {
        this._client.warn(`Ignoring invalid glob pattern for ${this._serverCapability} registration: ${i}`);
      }
    }
    register(e) {
      this._listener || (this._listener = this._event(this.send, this));
      let t = e.registerOptions.filters.map((r) => {
        let i = new fT.Minimatch(r.pattern.glob, n.asMinimatchOptions(r.pattern.options));
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
        for (let c of this._filters.values()) for (let u of c) if (!(u.scheme !== void 0 && u.scheme !== o.scheme)) {
          if (u.matcher.match(a)) {
            if (u.kind === void 0) return true;
            let d = await this.getFileType(o);
            if (d === void 0) return this._client.info(`Unable to determine file type for ${o.toString()}. Treating as a match.`), true;
            if (d === Bt.FileType.File && u.kind === ir.FileOperationPatternKind.file || d === Bt.FileType.Directory && u.kind === ir.FileOperationPatternKind.folder) return true;
          } else if (u.kind === ir.FileOperationPatternKind.folder && await n.getFileType(o) === Bt.FileType.Directory && u.matcher.match(`${a}/`)) return true;
        }
        return false;
      })), i = e.files.filter((s, o) => r[o]);
      return { ...e, files: i };
    }
    static async getFileType(e) {
      try {
        return (await Bt.workspace.fs.stat(e)).type;
      } catch {
        return;
      }
    }
    static asMinimatchOptions(e) {
      let t = { dot: true };
      return e?.ignoreCase === true && (t.nocase = true), t;
    }
  }, _a = class extends As {
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
  }, va = class extends _a {
    _willListener;
    _fsPathFileTypes = /* @__PURE__ */ new Map();
    async getFileType(e) {
      let t = e.fsPath;
      if (this._fsPathFileTypes.has(t)) return this._fsPathFileTypes.get(t);
      let r = await As.getFileType(e);
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
  }, zf = class extends _a {
    constructor(e) {
      super(e, Bt.workspace.onDidCreateFiles, ir.DidCreateFilesNotification.type, "didCreate", "didCreate", (t) => t, e.code2ProtocolConverter.asDidCreateFilesParams);
    }
    doSend(e, t) {
      let r = this._client.middleware.workspace;
      return r?.didCreateFiles ? r.didCreateFiles(e, t) : t(e);
    }
  };
  Be.DidCreateFilesFeature = zf;
  var Kf = class extends va {
    constructor(e) {
      super(e, Bt.workspace.onDidRenameFiles, ir.DidRenameFilesNotification.type, "didRename", "didRename", (t) => t.oldUri, e.code2ProtocolConverter.asDidRenameFilesParams);
    }
    register(e) {
      this._willListener || (this._willListener = Bt.workspace.onWillRenameFiles(this.willRename, this)), super.register(e);
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
  Be.DidRenameFilesFeature = Kf;
  var Bf = class extends va {
    constructor(e) {
      super(e, Bt.workspace.onDidDeleteFiles, ir.DidDeleteFilesNotification.type, "didDelete", "didDelete", (t) => t, e.code2ProtocolConverter.asDidDeleteFilesParams);
    }
    register(e) {
      this._willListener || (this._willListener = Bt.workspace.onWillDeleteFiles(this.willDelete, this)), super.register(e);
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
  Be.DidDeleteFilesFeature = Bf;
  var ks = class extends As {
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
  }, Vf = class extends ks {
    constructor(e) {
      super(e, Bt.workspace.onWillCreateFiles, ir.WillCreateFilesRequest.type, "willCreate", "willCreate", (t) => t, e.code2ProtocolConverter.asWillCreateFilesParams);
    }
    doSend(e, t) {
      let r = this._client.middleware.workspace;
      return r?.willCreateFiles ? r.willCreateFiles(e, t) : t(e);
    }
  };
  Be.WillCreateFilesFeature = Vf;
  var Gf = class extends ks {
    constructor(e) {
      super(e, Bt.workspace.onWillRenameFiles, ir.WillRenameFilesRequest.type, "willRename", "willRename", (t) => t.oldUri, e.code2ProtocolConverter.asWillRenameFilesParams);
    }
    doSend(e, t) {
      let r = this._client.middleware.workspace;
      return r?.willRenameFiles ? r.willRenameFiles(e, t) : t(e);
    }
  };
  Be.WillRenameFilesFeature = Gf;
  var Xf = class extends ks {
    constructor(e) {
      super(e, Bt.workspace.onWillDeleteFiles, ir.WillDeleteFilesRequest.type, "willDelete", "willDelete", (t) => t, e.code2ProtocolConverter.asWillDeleteFilesParams);
    }
    doSend(e, t) {
      let r = this._client.middleware.workspace;
      return r?.willDeleteFiles ? r.willDeleteFiles(e, t) : t(e);
    }
  };
  Be.WillDeleteFilesFeature = Xf;
});
var ov = O((xn) => {
  "use strict";
  var gT = xn && xn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), mT = xn && xn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), yT = xn && xn.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && gT(t, e, r[i]);
      return mT(t, e), t;
    };
  })();
  Object.defineProperty(xn, "__esModule", { value: true });
  xn.InlineCompletionItemFeature = void 0;
  var _T = require("vscode"), Jf = X(), Qf = se(), vT = yT(Se()), Yf = class extends Qf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Jf.InlineCompletionRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Qf.ensure)((0, Qf.ensure)(e, "textDocument"), "inlineCompletion");
      t.dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.inlineCompletionProvider);
      r && this.register({ id: vT.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideInlineCompletionItems: (i, s, o, a) => {
        let c = this._client, u = this._client.middleware, d = (h, p, g, y) => c.sendRequest(Jf.InlineCompletionRequest.type, c.code2ProtocolConverter.asInlineCompletionParams(h, p, g), y).then((_) => y.isCancellationRequested ? null : c.protocol2CodeConverter.asInlineCompletionResult(_, y), (_) => c.handleFailedRequest(Jf.InlineCompletionRequest.type, y, _, null));
        return u.provideInlineCompletionItems ? u.provideInlineCompletionItems(i, s, o, a, d) : d(i, s, o, a);
      } };
      return [_T.languages.registerInlineCompletionItemProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r), r];
    }
  };
  xn.InlineCompletionItemFeature = Yf;
});
var uv = O((qn) => {
  "use strict";
  var bT = qn && qn.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), CT = qn && qn.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), cv = qn && qn.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && bT(t, e, r[i]);
      return CT(t, e), t;
    };
  })();
  Object.defineProperty(qn, "__esModule", { value: true });
  qn.TextDocumentContentFeature = void 0;
  var Zf = cv(require("vscode")), $i = X(), av = se(), wT = cv(Se()), eh = class {
    _client;
    _registrations = /* @__PURE__ */ new Map();
    constructor(e) {
      this._client = e;
    }
    getState() {
      let e = this._registrations.size > 0;
      return { kind: "workspace", id: $i.TextDocumentContentRequest.method, registrations: e };
    }
    get registrationType() {
      return $i.TextDocumentContentRequest.type;
    }
    getProviders() {
      let e = [];
      for (let t of this._registrations.values()) e.push(...t.providers);
      return e;
    }
    fillClientCapabilities(e) {
      let t = (0, av.ensure)((0, av.ensure)(e, "workspace"), "textDocumentContent");
      t.dynamicRegistration = true;
    }
    initialize(e) {
      let t = this._client;
      if (t.onRequest($i.TextDocumentContentRefreshRequest.type, async (s) => {
        let o = t.protocol2CodeConverter.asUri(s.uri);
        for (let a of this._registrations.values()) for (let c of a.providers) c.scheme === o.scheme && c.onDidChangeEmitter.fire(o);
      }), !e?.workspace?.textDocumentContent) return;
      let r = e.workspace.textDocumentContent, i = $i.StaticRegistrationOptions.hasId(r) ? r.id : wT.generateUuid();
      this.register({ id: i, registerOptions: r });
    }
    register(e) {
      let t = [], r = [];
      for (let i of e.registerOptions.schemes) {
        let [s, o] = this.registerTextDocumentContentProvider(i);
        t.push(o), r.push(s);
      }
      this._registrations.set(e.id, { disposable: Zf.Disposable.from(...r), providers: t });
    }
    registerTextDocumentContentProvider(e) {
      let t = new Zf.EventEmitter(), r = { onDidChange: t.event, provideTextDocumentContent: (i, s) => {
        let o = this._client, a = (u, d) => {
          let h = { uri: o.code2ProtocolConverter.asUri(u) };
          return o.sendRequest($i.TextDocumentContentRequest.type, h, d).then((p) => d.isCancellationRequested ? null : p.text, (p) => o.handleFailedRequest($i.TextDocumentContentRequest.type, d, p, null));
        }, c = o.middleware;
        return c.provideTextDocumentContent ? c.provideTextDocumentContent(i, s, a) : a(i, s);
      } };
      return [Zf.workspace.registerTextDocumentContentProvider(e, r), { scheme: e, onDidChangeEmitter: t, provider: r }];
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
  qn.TextDocumentContentFeature = eh;
});
var lv = O((wa) => {
  "use strict";
  Object.defineProperty(wa, "__esModule", { value: true });
  wa.FileSystemWatcherFeature = void 0;
  var DT = require("vscode"), Yr = X(), Ca = se(), th = class {
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
      return Yr.DidChangeWatchedFilesNotification.type;
    }
    fillClientCapabilities(e) {
      (0, Ca.ensure)((0, Ca.ensure)(e, "workspace"), "didChangeWatchedFiles").dynamicRegistration = true, (0, Ca.ensure)((0, Ca.ensure)(e, "workspace"), "didChangeWatchedFiles").relativePatternSupport = true;
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
        r.kind !== void 0 && r.kind !== null && (s = (r.kind & Yr.WatchKind.Create) !== 0, o = (r.kind & Yr.WatchKind.Change) !== 0, a = (r.kind & Yr.WatchKind.Delete) !== 0);
        let c = DT.workspace.createFileSystemWatcher(i, !s, !o, !a);
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
      t && e.onDidCreate((o) => this._notifyFileEvent({ uri: this._client.code2ProtocolConverter.asUri(o), type: Yr.FileChangeType.Created }), null, s), r && e.onDidChange((o) => this._notifyFileEvent({ uri: this._client.code2ProtocolConverter.asUri(o), type: Yr.FileChangeType.Changed }), null, s), i && e.onDidDelete((o) => this._notifyFileEvent({ uri: this._client.code2ProtocolConverter.asUri(o), type: Yr.FileChangeType.Deleted }), null, s);
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
  wa.FileSystemWatcherFeature = th;
});
var fv = O((Da) => {
  "use strict";
  Object.defineProperty(Da, "__esModule", { value: true });
  Da.ProgressFeature = void 0;
  var dv = X(), ST = Cd();
  function PT(n, e) {
    return n[e] === void 0 && (n[e] = /* @__PURE__ */ Object.create(null)), n[e];
  }
  var nh = class {
    _client;
    activeParts;
    constructor(e) {
      this._client = e, this.activeParts = /* @__PURE__ */ new Set();
    }
    getState() {
      return { kind: "window", id: dv.WorkDoneProgressCreateRequest.method, registrations: this.activeParts.size > 0 };
    }
    fillClientCapabilities(e) {
      PT(e, "window").workDoneProgress = true;
    }
    initialize() {
      let e = this._client, t = (i) => {
        this.activeParts.delete(i);
      }, r = (i) => {
        this.activeParts.add(new ST.ProgressPart(this._client, i.token, t));
      };
      e.onRequest(dv.WorkDoneProgressCreateRequest.type, r);
    }
    clear() {
      for (let e of this.activeParts) e.done();
      this.activeParts.clear();
    }
  };
  Da.ProgressFeature = nh;
});
var dh = O((ge) => {
  "use strict";
  var RT = ge && ge.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), TT = ge && ge.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), Ra = ge && ge.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && RT(t, e, r[i]);
      return TT(t, e), t;
    };
  })();
  Object.defineProperty(ge, "__esModule", { value: true });
  ge.ProposedFeatures = ge.LanguageClient = ge.BaseLanguageClient = ge.ShutdownMode = ge.MessageTransports = ge.SuspendMode = ge.State = ge.CloseAction = ge.ErrorAction = ge.RevealOutputChannelOn = void 0;
  var G = require("vscode"), M = X(), OT = Ra(t_()), ET = Ra(i_()), sn = Ra(Wt()), Sa = Go(), hv = Ra(Se()), xT = Cd(), mt = se(), qT = Jl(), ih = l_(), pv = h_(), Hi = v_(), MT = b_(), IT = C_(), NT = w_(), jT = S_(), FT = P_(), LT = Xd(), AT = T_(), kT = O_(), $T = E_(), HT = x_(), UT = q_(), WT = M_(), zT = N_(), rh = j_(), KT = A_(), BT = k_(), VT = H_(), GT = W_(), XT = z_(), JT = K_(), QT = B_(), YT = G_(), ZT = J_(), eO = Q_(), tO = Z_(), nO = tv(), rO = nv(), Ui = sv(), iO = ov(), sO = uv(), oO = lv(), aO = fv(), Zr;
  (function(n) {
    n[n.Debug = 0] = "Debug", n[n.Info = 1] = "Info", n[n.Warn = 2] = "Warn", n[n.Error = 3] = "Error", n[n.Never = 4] = "Never";
  })(Zr || (ge.RevealOutputChannelOn = Zr = {}));
  var $s;
  (function(n) {
    n[n.Continue = 1] = "Continue", n[n.Shutdown = 2] = "Shutdown";
  })($s || (ge.ErrorAction = $s = {}));
  var Ir;
  (function(n) {
    n[n.DoNotRestart = 1] = "DoNotRestart", n[n.Restart = 2] = "Restart";
  })(Ir || (ge.CloseAction = Ir = {}));
  var Wi;
  (function(n) {
    n[n.Stopped = 1] = "Stopped", n[n.Starting = 3] = "Starting", n[n.StartFailed = 4] = "StartFailed", n[n.Running = 2] = "Running";
  })(Wi || (ge.State = Wi = {}));
  var gv;
  (function(n) {
    n.off = "off", n.on = "on";
  })(gv || (ge.SuspendMode = gv = {}));
  var sh;
  (function(n) {
    function e(t) {
      return t == null ? false : typeof t == "boolean" || typeof t == "object" && t !== null && sn.stringArray(t.enabledCommands) ? t : false;
    }
    n.sanitizeIsTrusted = e;
  })(sh || (sh = {}));
  var oh = class {
    client;
    maxRestartCount;
    restarts;
    constructor(e, t) {
      this.client = e, this.maxRestartCount = t, this.restarts = [];
    }
    error(e, t, r) {
      return r && r <= 3 ? { action: $s.Continue } : { action: $s.Shutdown };
    }
    closed() {
      return this.restarts.push(Date.now()), this.restarts.length <= this.maxRestartCount ? { action: Ir.Restart } : this.restarts[this.restarts.length - 1] - this.restarts[0] <= 180 * 1e3 ? { action: Ir.DoNotRestart, message: `The ${this.client.name} server crashed ${this.maxRestartCount + 1} times in the last 3 minutes. The server will not be restarted. See the output for more information.` } : (this.restarts.shift(), { action: Ir.Restart });
    }
  }, ne;
  (function(n) {
    n.Initial = "initial", n.Starting = "starting", n.StartFailed = "startFailed", n.Running = "running", n.Stopping = "stopping", n.Stopped = "stopped";
  })(ne || (ne = {}));
  var mv;
  (function(n) {
    function e(t) {
      return t && M.MessageReader.is(t.reader) && M.MessageWriter.is(t.writer);
    }
    n.is = e;
  })(mv || (ge.MessageTransports = mv = {}));
  var Mr;
  (function(n) {
    n.Restart = "restart", n.Stop = "stop";
  })(Mr || (ge.ShutdownMode = Mr = {}));
  var ah = class n {
    open;
    _onOpen;
    _onClose;
    disposables;
    constructor() {
      this.disposables = [], this.open = /* @__PURE__ */ new Set(), this._onOpen = new G.EventEmitter(), this._onClose = new G.EventEmitter(), n.fillVisibleResources(this.open);
      let e = () => {
        let t = this.open, r = /* @__PURE__ */ new Set();
        n.fillVisibleResources(r);
        let i = /* @__PURE__ */ new Set(), s = new Set(r);
        for (let o of t.values()) r.has(o) ? s.delete(o) : i.add(o);
        if (this.open = r, i.size > 0) {
          let o = /* @__PURE__ */ new Set();
          for (let a of i) o.add(G.Uri.parse(a));
          this._onClose.fire(o);
        }
        if (s.size > 0) {
          let o = /* @__PURE__ */ new Set();
          for (let a of s) o.add(G.Uri.parse(a));
          this._onOpen.fire(o);
        }
      };
      this.disposables.push(G.window.tabGroups.onDidChangeTabs((t) => {
        t.closed.length === 0 && t.opened.length === 0 || e();
      })), this.disposables.push(G.window.onDidChangeVisibleTextEditors((t) => {
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
      return e instanceof G.Uri ? G.window.activeTextEditor?.document.uri === e : G.window.activeTextEditor?.document === e;
    }
    isVisible(e) {
      let t = e instanceof G.Uri ? e : e.uri;
      return t.scheme === ih.NotebookDocumentSyncFeature.CellScheme ? G.workspace.notebookDocuments.some((r) => this.open.has(r.uri.toString()) ? r.getCells().find((s) => s.document.uri.toString() === t.toString()) !== void 0 : false) : this.open.has(t.toString());
    }
    getResources() {
      let e = /* @__PURE__ */ new Set();
      return n.fillVisibleResources(/* @__PURE__ */ new Set(), e), e;
    }
    static fillVisibleResources(e, t) {
      let r = e ?? /* @__PURE__ */ new Set();
      for (let i of G.window.tabGroups.all) for (let s of i.tabs) {
        let o = s.input, a;
        o instanceof G.TabInputText ? a = o.uri : o instanceof G.TabInputTextDiff ? a = o.modified : (o instanceof G.TabInputCustom || o instanceof G.TabInputNotebook) && (a = o.uri), a !== void 0 && !r.has(a.toString()) && (r.add(a.toString()), t !== void 0 && t.add(a));
      }
      for (let i of G.window.visibleTextEditors) {
        let s = i.document.uri;
        r.has(s.toString()) || (r.add(s.toString()), t !== void 0 && t.add(s));
      }
    }
  }, Pa = class n {
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
    _traceFormat = M.TraceFormat.Text;
    _tracer;
    _c2p;
    _p2c;
    _visibleDocuments;
    constructor(e, t, r) {
      this._id = e, this._name = t, r = r || {};
      let i = { isTrusted: false, supportHtml: false, supportThemeIcons: false };
      r.markdown !== void 0 && (i.isTrusted = sh.sanitizeIsTrusted(r.markdown.isTrusted), i.supportHtml = r.markdown.supportHtml === true, i.supportThemeIcons = r.markdown.supportThemeIcons === true), this._clientOptions = { documentSelector: r.documentSelector ?? [], synchronize: r.synchronize ?? {}, diagnosticCollectionName: r.diagnosticCollectionName, outputChannelName: r.outputChannelName ?? this._name, revealOutputChannelOn: r.revealOutputChannelOn ?? Zr.Error, stdioEncoding: r.stdioEncoding ?? "utf8", initializationOptions: r.initializationOptions, initializationFailedHandler: r.initializationFailedHandler, progressOnInitialization: !!r.progressOnInitialization, errorHandler: r.errorHandler ?? this.createDefaultErrorHandler(r.connectionOptions?.maxRestartCount), middleware: r.middleware ?? {}, uriConverters: r.uriConverters, workspaceFolder: r.workspaceFolder, connectionOptions: r.connectionOptions, markdown: i, diagnosticPullOptions: r.diagnosticPullOptions ?? { onChange: true, onSave: false }, diagnosticCollectionProvider: r.diagnosticCollectionProvider ?? new mt.DefaultDiagnosticCollectionProvider(), notebookDocumentOptions: r.notebookDocumentOptions ?? {}, textSynchronization: this.createTextSynchronizationOptions(r.textSynchronization) }, this._clientOptions.synchronize = this._clientOptions.synchronize || {}, this._state = ne.Initial, this._ignoredRegistrations = /* @__PURE__ */ new Set(), this._listeners = [], this._notificationHandlers = /* @__PURE__ */ new Map(), this._pendingNotificationHandlers = /* @__PURE__ */ new Map(), this._notificationDisposables = /* @__PURE__ */ new Map(), this._requestHandlers = /* @__PURE__ */ new Map(), this._pendingRequestHandlers = /* @__PURE__ */ new Map(), this._requestDisposables = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this._pendingProgressHandlers = /* @__PURE__ */ new Map(), this._progressDisposables = /* @__PURE__ */ new Map(), this._connection = void 0, this._initializeResult = void 0, r.outputChannel ? (this._outputChannel = r.outputChannel, this._disposeOutputChannel = false, this._traceLogLevel = this._outputChannel.logLevel) : (this._outputChannel = void 0, this._disposeOutputChannel = true, this._traceLogLevel = G.LogLevel.Info), this._traceOutputChannel = r.traceOutputChannel, this._traceOutputChannel !== void 0 && (this._traceLogLevel = this._traceOutputChannel.logLevel), this._diagnostics = void 0, this._inFlightOpenNotifications = /* @__PURE__ */ new Set(), this._pendingChangeSemaphore = new Sa.Semaphore(1), this._pendingChangeDelayer = new Sa.Delayer(250), this._fileEvents = [], this._fileEventDelayer = new Sa.Delayer(250), this._onStop = void 0, this._telemetryEmitter = new M.Emitter(), this._stateChangeEmitter = new M.Emitter(), this._trace = M.Trace.Off, this._tracer = { log: (s, o) => {
        sn.string(s) ? this.trace(s, o) : this.traceObject(s);
      } }, this._c2p = OT.createConverter(r.uriConverters ? r.uriConverters.code2Protocol : void 0), this._p2c = ET.createConverter(r.uriConverters ? r.uriConverters.protocol2Code : void 0, this._clientOptions.markdown.isTrusted, this._clientOptions.markdown.supportHtml, this._clientOptions.markdown.supportThemeIcons), this._syncedDocuments = /* @__PURE__ */ new Map(), this.registerBuiltinFeatures();
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
      return this._visibleDocuments === void 0 && (this._visibleDocuments = new ah()), this._visibleDocuments;
    }
    get onTelemetry() {
      return this._telemetryEmitter.event;
    }
    get onDidChangeState() {
      return this._stateChangeEmitter.event;
    }
    get outputChannel() {
      return this._outputChannel || (this._outputChannel = G.window.createOutputChannel(this._clientOptions.outputChannelName ? this._clientOptions.outputChannelName : this._name, { log: true }), this._traceOutputChannel === void 0 && (this._traceLogLevel = this._outputChannel.logLevel)), this._outputChannel;
    }
    get traceOutputChannel() {
      return this._traceOutputChannel ? this._traceOutputChannel : this.outputChannel;
    }
    get diagnostics() {
      if (this._diagnostics !== null) return this._diagnostics === void 0 && (this._diagnostics = this._clientOptions.diagnosticCollectionProvider.create(this._clientOptions.diagnosticCollectionName ?? this._id, mt.DiagnosticCollectionSource.push)), this._diagnostics;
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
        case ne.Starting:
          return Wi.Starting;
        case ne.Running:
          return Wi.Running;
        case ne.StartFailed:
          return Wi.StartFailed;
        default:
          return Wi.Stopped;
      }
    }
    get initializeResult() {
      return this._initializeResult;
    }
    async sendRequest(e, ...t) {
      if (this.$state === ne.StartFailed || this.$state === ne.Stopping || this.$state === ne.Stopped) return Promise.reject(new M.ResponseError(M.ErrorCodes.ConnectionInactive, "Client is not running"));
      let r = await this.$start();
      await this._didOpenTextDocumentFeature.sendPendingOpenNotifications(), this._didChangeTextDocumentFeature.syncKind === M.TextDocumentSyncKind.Full && await this.sendPendingFullTextDocumentChanges(r);
      let i, s;
      if (t.length === 1 ? M.CancellationToken.is(t[0]) ? s = t[0] : i = t[0] : t.length === 2 && (i = t[0], s = t[1]), s !== void 0 && s.isCancellationRequested) return Promise.reject(new M.ResponseError(M.LSPErrorCodes.RequestCancelled, "Request got cancelled"));
      let o = this._clientOptions.middleware?.sendRequest;
      return o !== void 0 ? o(e, i, s, (a, c, u) => {
        let d = [];
        return c !== void 0 && d.push(c), u !== void 0 && d.push(u), r.sendRequest(a, ...d);
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
      if (this.$state === ne.StartFailed || this.$state === ne.Stopping || this.$state === ne.Stopped) return Promise.reject(new M.ResponseError(M.ErrorCodes.ConnectionInactive, "Client is not running"));
      let r = this._didChangeTextDocumentFeature.syncKind === M.TextDocumentSyncKind.Full, i;
      r && typeof e != "string" && e.method === M.DidOpenTextDocumentNotification.method && (i = t?.textDocument.uri, this._inFlightOpenNotifications.add(i));
      let s;
      typeof e != "string" && e.method === M.DidCloseTextDocumentNotification.method && (s = t.textDocument.uri);
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
      if (this.$state === ne.StartFailed || this.$state === ne.Stopping || this.$state === ne.Stopped) return Promise.reject(new M.ResponseError(M.ErrorCodes.ConnectionInactive, "Client is not running"));
      try {
        return (await this.$start()).sendProgress(e, t, r);
      } catch (i) {
        throw this.error(`Sending progress for token ${t} failed.`, i), i;
      }
    }
    onProgress(e, t, r) {
      this._progressHandlers.set(t, { type: e, handler: r });
      let i = this.activeConnection(), s, o = this._clientOptions.middleware?.handleWorkDoneProgress, a = M.WorkDoneProgress.is(e) && o !== void 0 ? (c) => {
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
      return new oh(this, e ?? 4);
    }
    async setTrace(e) {
      this._trace = e;
      let t = this.activeConnection();
      t !== void 0 && await t.trace(this._trace, this._tracer, { sendNotification: false, traceFormat: this._traceFormat });
    }
    data2String(e) {
      if (e instanceof M.ResponseError) {
        let t = e;
        return `  Message: ${t.message}
  Code: ${t.code} ${t.data ? `
` + t.data.toString() : ""}`;
      }
      return e instanceof Error ? sn.string(e.stack) ? e.stack : e.message : sn.string(e) ? e : e.toString();
    }
    shouldLogToOutputChannel() {
      return this.$state !== ne.Stopped ? true : this._outputChannel !== void 0;
    }
    error(e, t, r = true) {
      this.shouldLogToOutputChannel() && this.outputChannel.error(this.getLogMessage(e, t)), (r === "force" || r && this._clientOptions.revealOutputChannelOn <= Zr.Error) && this.showNotificationMessage(M.MessageType.Error, e, t);
    }
    warn(e, t, r = true) {
      this.shouldLogToOutputChannel() && this.outputChannel.warn(this.getLogMessage(e, t)), r && this._clientOptions.revealOutputChannelOn <= Zr.Warn && this.showNotificationMessage(M.MessageType.Warning, e, t);
    }
    info(e, t, r = true) {
      this.shouldLogToOutputChannel() && this.outputChannel.info(this.getLogMessage(e, t)), r && this._clientOptions.revealOutputChannelOn <= Zr.Info && this.showNotificationMessage(M.MessageType.Info, e, t);
    }
    debug(e, t, r = true) {
      this.shouldLogToOutputChannel() && this.outputChannel.debug(this.getLogMessage(e, t)), r && this._clientOptions.revealOutputChannelOn <= Zr.Debug && this.showNotificationMessage(M.MessageType.Debug, e, t);
    }
    trace(e, t) {
      this.traceOutputChannel.trace(this.getLogMessage(e, t));
    }
    traceObject(e) {
      this.traceOutputChannel.trace(JSON.stringify(e));
    }
    showNotificationMessage(e, t, r) {
      t = t ?? "A request has failed. See the output for more information.", r && (t += `
` + this.data2String(r)), (e === M.MessageType.Error ? G.window.showErrorMessage : e === M.MessageType.Warning ? G.window.showWarningMessage : G.window.showInformationMessage)(t, "Go to output").then((s) => {
        s !== void 0 && this.outputChannel.show(true);
      });
    }
    getLogMessage(e, t) {
      return t != null ? `${e}
${this.data2String(t)}` : e;
    }
    needsStart() {
      return this.$state === ne.Initial || this.$state === ne.Stopping || this.$state === ne.Stopped;
    }
    needsStop() {
      return this.$state === ne.Starting || this.$state === ne.Running;
    }
    activeConnection() {
      return this.$state === ne.Running && this._connection !== void 0 ? this._connection : void 0;
    }
    isRunning() {
      return this.$state === ne.Running;
    }
    async start() {
      if (this._disposed === "disposing" || this._disposed === "disposed") throw new Error("Client got disposed and can't be restarted.");
      if (this.$state === ne.Stopping) throw new Error("Client is currently stopping. Can only restart a full stopped client");
      if (this._onStart !== void 0) return this._onStart;
      let [e, t, r] = this.createOnStartPromise();
      this._onStart = e, this._diagnostics = void 0;
      for (let [i, s] of this._notificationHandlers) this._pendingNotificationHandlers.has(i) || this._pendingNotificationHandlers.set(i, s);
      for (let [i, s] of this._requestHandlers) this._pendingRequestHandlers.has(i) || this._pendingRequestHandlers.set(i, s);
      for (let [i, s] of this._progressHandlers) this._pendingProgressHandlers.has(i) || this._pendingProgressHandlers.set(i, s);
      this.$state = ne.Starting;
      try {
        let i = await this.createConnection();
        i.onNotification(M.LogMessageNotification.type, (s) => {
          switch (s.type) {
            case M.MessageType.Error:
              this.error(s.message, void 0, false);
              break;
            case M.MessageType.Warning:
              this.warn(s.message, void 0, false);
              break;
            case M.MessageType.Info:
              this.info(s.message, void 0, false);
              break;
            case M.MessageType.Debug:
              this.debug(s.message, void 0, false);
              break;
            default:
              this.outputChannel.appendLine(s.message);
          }
        }), i.onNotification(M.ShowMessageNotification.type, (s) => {
          switch (s.type) {
            case M.MessageType.Error:
              G.window.showErrorMessage(s.message);
              break;
            case M.MessageType.Warning:
              G.window.showWarningMessage(s.message);
              break;
            case M.MessageType.Info:
              G.window.showInformationMessage(s.message);
              break;
            default:
              G.window.showInformationMessage(s.message);
          }
        }), i.onRequest(M.ShowMessageRequest.type, (s) => {
          let o;
          switch (s.type) {
            case M.MessageType.Error:
              o = G.window.showErrorMessage;
              break;
            case M.MessageType.Warning:
              o = G.window.showWarningMessage;
              break;
            case M.MessageType.Info:
              o = G.window.showInformationMessage;
              break;
            default:
              o = G.window.showInformationMessage;
          }
          let a = s.actions || [];
          return o(s.message, ...a);
        }), i.onNotification(M.TelemetryEventNotification.type, (s) => {
          this._telemetryEmitter.fire(s);
        }), i.onRequest(M.ShowDocumentRequest.type, async (s, o) => {
          let a = async (u) => {
            let d = this.protocol2CodeConverter.asUri(u.uri);
            try {
              if (u.external === true) return { success: await G.env.openExternal(d) };
              {
                let h = {};
                return u.selection !== void 0 && (h.selection = this.protocol2CodeConverter.asRange(u.selection)), u.takeFocus === void 0 || u.takeFocus === false ? h.preserveFocus = true : u.takeFocus === true && (h.preserveFocus = false), await G.window.showTextDocument(d, h), { success: true };
              }
            } catch {
              return { success: false };
            }
          }, c = this._clientOptions.middleware.window?.showDocument;
          return c !== void 0 ? c(s, o, a) : a(s);
        }), i.listen(), await this.initialize(i), t();
      } catch (i) {
        this.$state = ne.StartFailed, this.error(`${this._name} client: couldn't create connection to server.`, i, "force"), r(i);
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
      let t = this._clientOptions.initializationOptions, [r, i] = this._clientOptions.workspaceFolder !== void 0 ? [this._clientOptions.workspaceFolder.uri.fsPath, [{ uri: this._c2p.asUri(this._clientOptions.workspaceFolder.uri), name: this._clientOptions.workspaceFolder.name }]] : [this._clientGetRootPath(), null], s = { processId: null, clientInfo: { name: G.env.appName, version: G.version }, locale: this.getLocale(), rootPath: r || null, rootUri: r ? this._c2p.asUri(G.Uri.file(r)) : null, capabilities: this.computeClientCapabilities(), initializationOptions: sn.func(t) ? t() : t, trace: M.Trace.toString(this._trace), workspaceFolders: i };
      if (this.fillInitializeParams(s), this._clientOptions.progressOnInitialization) {
        let o = hv.generateUuid(), a = new xT.ProgressPart(e, o);
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
        if (r.capabilities.positionEncoding !== void 0 && r.capabilities.positionEncoding !== M.PositionEncodingKind.UTF16) throw new Error(`Unsupported position encoding (${r.capabilities.positionEncoding}) received from server ${this.name}`);
        this._initializeResult = r, this.$state = ne.Running;
        let i;
        sn.number(r.capabilities.textDocumentSync) ? r.capabilities.textDocumentSync === M.TextDocumentSyncKind.None ? i = { openClose: false, change: M.TextDocumentSyncKind.None, save: void 0 } : i = { openClose: true, change: r.capabilities.textDocumentSync, save: { includeText: false } } : r.capabilities.textDocumentSync !== void 0 && r.capabilities.textDocumentSync !== null && (i = r.capabilities.textDocumentSync), this._capabilities = Object.assign({}, r.capabilities, { resolvedTextDocumentSync: i }), e.onNotification(M.PublishDiagnosticsNotification.type, (s) => this.handleDiagnostics(s)), e.onRequest(M.RegistrationRequest.type, (s) => this.handleRegistrationRequest(s)), e.onRequest("client/registerFeature", (s) => this.handleRegistrationRequest(s)), e.onRequest(M.UnregistrationRequest.type, (s) => this.handleUnregistrationRequest(s)), e.onRequest("client/unregisterFeature", (s) => this.handleUnregistrationRequest(s)), e.onRequest(M.ApplyWorkspaceEditRequest.type, (s) => this.handleApplyWorkspaceEdit(s));
        for (let [s, o] of this._pendingNotificationHandlers) this._notificationDisposables.set(s, e.onNotification(s, o));
        this._pendingNotificationHandlers.clear();
        for (let [s, o] of this._pendingRequestHandlers) this._requestDisposables.set(s, e.onRequest(s, o));
        this._pendingRequestHandlers.clear();
        for (let [s, o] of this._pendingProgressHandlers) this._progressDisposables.set(s, e.onProgress(o.type, s, o.handler));
        return this._pendingProgressHandlers.clear(), await e.sendNotification(M.InitializedNotification.type, {}), this.hookFileEvents(e), this.hookLogLevelChanged(e), this.hookConfigurationChanged(e), this.initializeFeatures(e), r;
      } catch (r) {
        throw this._clientOptions.initializationFailedHandler ? this._clientOptions.initializationFailedHandler(r) ? this.initialize(e) : this.stop() : r instanceof M.ResponseError && r.data && r.data.retry ? G.window.showErrorMessage(r.message, { title: "Retry", id: "retry" }).then((i) => {
          i && i.id === "retry" ? this.initialize(e) : this.stop();
        }) : (r && r.message && G.window.showErrorMessage(r.message), this.error("Server initialization failed.", r), this.stop()), r;
      }
    }
    _clientGetRootPath() {
      let e = G.workspace.workspaceFolders;
      if (!e || e.length === 0) return;
      let t = e[0];
      if (t.uri.scheme === "file") return t.uri.fsPath;
    }
    stop(e = 2e3) {
      return this.shutdown(Mr.Stop, e);
    }
    dispose(e = 2e3) {
      try {
        return this._disposed = "disposing", this.stop(e);
      } finally {
        this._disposed = "disposed";
      }
    }
    async shutdown(e, t = 2e3) {
      if (this.$state === ne.Stopped || this.$state === ne.Initial) return;
      if (this.$state === ne.Stopping) {
        if (this._onStop !== void 0) return this._onStop;
        throw new Error("Client is stopping but no stop promise available.");
      }
      let r = this.activeConnection();
      if (r === void 0 || this.$state !== ne.Running) throw new Error(`Client is not running and can't be stopped. It's current state is: ${this.$state}`);
      this._initializeResult = void 0, this.$state = ne.Stopping, this.cleanUp(e);
      let i = new Promise((o) => {
        (0, M.RAL)().timer.setTimeout(o, t);
      }), s = (async (o) => (await o.shutdown(), await o.exit(), o))(r);
      return this._onStop = Promise.race([i, s]).then((o) => {
        if (o !== void 0) o.end(), o.dispose();
        else throw this.error("Stopping server timed out", void 0, false), new Error("Stopping the server timed out");
      }, (o) => {
        throw this.error("Stopping server failed", o, false), o;
      }).finally(() => {
        this.$state = ne.Stopped, e === Mr.Stop && this.cleanUpChannel(), this._onStart = void 0, this._onStop = void 0, this._connection = void 0, this._ignoredRegistrations.clear();
      });
    }
    cleanUp(e) {
      this._fileEvents = [], this._fileEventDelayer.cancel();
      let t = this._listeners.splice(0, this._listeners.length);
      for (let r of t) r.dispose();
      this._syncedDocuments && this._syncedDocuments.clear();
      for (let r of Array.from(this._features.entries()).map((i) => i[1]).reverse()) r.clear();
      (e === Mr.Stop || e === Mr.Restart) && (this._diagnostics === void 0 && (this._diagnostics = null), this._diagnostics !== null && (this._clientOptions.diagnosticCollectionProvider.dispose(this._diagnostics, mt.DiagnosticCollectionSource.push), this._diagnostics = null)), this._idleInterval !== void 0 && (this._idleInterval.dispose(), this._idleInterval = void 0);
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
            await t.sendNotification(M.DidChangeWatchedFilesNotification.type, { changes: o });
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
            this._didChangeTextDocumentFeature.aboutToSendNotification(r, M.DidChangeTextDocumentNotification.type, i), await e.sendNotification(M.DidChangeTextDocumentNotification.type, i), this._didChangeTextDocumentFeature.notificationSent(r, M.DidChangeTextDocumentNotification.type, i);
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
      (0, M.RAL)().timer.setImmediate(() => {
        this.workDiagnosticQueue();
      });
    }
    workDiagnosticQueue() {
      if (this._diagnosticQueueState.state === "busy") return;
      let e = this._diagnosticQueue.entries().next();
      if (e.done === true) return;
      let [t, r] = e.value;
      this._diagnosticQueue.delete(t);
      let i = new G.CancellationTokenSource();
      this._diagnosticQueueState = { state: "busy", document: t, tokenSource: i }, this._p2c.asDiagnostics(r, i.token).then((s) => {
        if (!i.token.isCancellationRequested) {
          let o = this._p2c.asUri(t), a = this.clientOptions.middleware;
          a.handleDiagnostics ? a.handleDiagnostics(o, s, (c, u) => this.setDiagnostics(c, u)) : this.setDiagnostics(o, s);
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
      return G.env.language;
    }
    async $start() {
      if (this.$state === ne.StartFailed) throw new Error("Previous start failed. Can't restart server.");
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
      return this._connection = cO(r.reader, r.writer, e, t, this._clientOptions.connectionOptions), this._connection;
    }
    async handleConnectionClosed() {
      if (this.$state === ne.Stopped) return;
      try {
        this._connection !== void 0 && this._connection.dispose();
      } catch {
      }
      let e = { action: Ir.DoNotRestart };
      if (this.$state !== ne.Stopping) try {
        e = await this._clientOptions.errorHandler.closed();
      } catch {
      }
      this._connection = void 0, e.action === Ir.DoNotRestart ? (this.error(e.message ?? "Connection to server got closed. Server will not be restarted.", void 0, e.handled === true ? false : "force"), this.cleanUp(Mr.Stop), this.$state === ne.Starting ? this.$state = ne.StartFailed : this.$state = ne.Stopped, this._onStop = Promise.resolve(), this._onStart = void 0) : e.action === Ir.Restart && (this.info(e.message ?? "Connection to server got closed. Server will restart.", void 0, !e.handled), this.cleanUp(Mr.Restart), this.$state = ne.Initial, this._onStop = Promise.resolve(), this._onStart = void 0, this.start().catch((t) => this.error("Restarting server failed", t, "force")));
    }
    async handleConnectionError(e, t, r) {
      let i = await this._clientOptions.errorHandler.error(e, t, r);
      i.action === $s.Shutdown ? (this.error(i.message ?? `Client ${this._name}: connection to server is erroring.
${e.message}
Shutting down server.`, void 0, i.handled === true ? false : "force"), this.stop().catch((s) => {
        this.error("Stopping server failed", s, false);
      })) : this.error(i.message ?? `Client ${this._name}: connection to server is erroring.
${e.message}`, void 0, i.handled === true ? false : "force");
    }
    hookConfigurationChanged(e) {
      this._listeners.push(G.workspace.onDidChangeConfiguration(() => {
        this.refreshTrace(e, true);
      }));
    }
    hookLogLevelChanged(e) {
      this._listeners.push(this.traceOutputChannel.onDidChangeLogLevel((t) => {
        this._traceLogLevel = t, this.refreshTrace(e, true);
      }));
    }
    refreshTrace(e, t = false) {
      let r = G.workspace.getConfiguration(this._id), i = this._traceLogLevel !== G.LogLevel.Trace ? M.Trace.Off : M.Trace.Messages, s = M.TraceFormat.Text;
      if (r && i !== M.Trace.Off) {
        let o = r.get("trace.server", "messages");
        typeof o == "string" ? (i = M.Trace.fromString(o), i === M.Trace.Off && (i = M.Trace.Messages)) : (i = M.Trace.fromString(r.get("trace.server.verbosity", "messages")), i === M.Trace.Off && (i = M.Trace.Messages), s = M.TraceFormat.fromString(r.get("trace.server.format", "text")));
      }
      this._trace = i, this._traceFormat = s, e.trace(this._trace, this._tracer, { sendNotification: t, traceFormat: this._traceFormat }).catch((o) => {
        this.error("Updating trace failed with error", o, false);
      });
    }
    hookFileEvents(e) {
      let t = this._clientOptions.synchronize.fileEvents;
      if (!t) return;
      let r;
      sn.array(t) ? r = t : r = [t], r && this._dynamicFeatures.get(M.DidChangeWatchedFilesNotification.type.method).registerRaw(hv.generateUuid(), r);
    }
    _features = [];
    _dynamicFeatures = /* @__PURE__ */ new Map();
    registerFeatures(e) {
      for (let t of e) this.registerFeature(t);
    }
    registerFeature(e) {
      if (this._features.push(e), mt.DynamicFeature.is(e)) {
        let t = e.registrationType;
        this._dynamicFeatures.set(t.method, e);
      }
    }
    getFeature(e) {
      return this._dynamicFeatures.get(e);
    }
    hasDedicatedTextSynchronizationFeature(e) {
      let t = this.getFeature(M.NotebookDocumentSyncRegistrationType.method);
      return t === void 0 || !(t instanceof ih.NotebookDocumentSyncFeature) ? false : t.handles(e);
    }
    registerBuiltinFeatures() {
      let e = /* @__PURE__ */ new Map();
      this.registerFeature(new pv.ConfigurationFeature(this)), this._didOpenTextDocumentFeature = new Hi.DidOpenTextDocumentFeature(this, this._syncedDocuments), this.registerFeature(this._didOpenTextDocumentFeature), this._didChangeTextDocumentFeature = new Hi.DidChangeTextDocumentFeature(this, e), this._didChangeTextDocumentFeature.onPendingChangeAdded(() => {
        this.triggerPendingChangeDelivery();
      }), this.registerFeature(this._didChangeTextDocumentFeature), this.registerFeature(new Hi.WillSaveFeature(this)), this.registerFeature(new Hi.WillSaveWaitUntilFeature(this)), this.registerFeature(new Hi.DidSaveTextDocumentFeature(this)), this.registerFeature(new Hi.DidCloseTextDocumentFeature(this, this._syncedDocuments, e)), this.registerFeature(new oO.FileSystemWatcherFeature(this, (t) => this.notifyFileEvent(t))), this.registerFeature(new MT.CompletionItemFeature(this)), this.registerFeature(new IT.HoverFeature(this)), this.registerFeature(new jT.SignatureHelpFeature(this)), this.registerFeature(new NT.DefinitionFeature(this)), this.registerFeature(new kT.ReferencesFeature(this)), this.registerFeature(new FT.DocumentHighlightFeature(this)), this.registerFeature(new LT.DocumentSymbolFeature(this)), this.registerFeature(new AT.WorkspaceSymbolFeature(this)), this.registerFeature(new WT.CodeActionFeature(this)), this.registerFeature(new zT.CodeLensFeature(this)), this.registerFeature(new rh.DocumentFormattingFeature(this)), this.registerFeature(new rh.DocumentRangeFormattingFeature(this)), this.registerFeature(new rh.DocumentOnTypeFormattingFeature(this)), this.registerFeature(new KT.RenameFeature(this)), this.registerFeature(new BT.DocumentLinkFeature(this)), this.registerFeature(new VT.ExecuteCommandFeature(this)), this.registerFeature(new pv.SyncConfigurationFeature(this)), this.registerFeature(new $T.TypeDefinitionFeature(this)), this.registerFeature(new HT.ImplementationFeature(this)), this.registerFeature(new UT.ColorProviderFeature(this)), this.clientOptions.workspaceFolder === void 0 && this.registerFeature(new rO.WorkspaceFoldersFeature(this)), this.registerFeature(new GT.FoldingRangeFeature(this)), this.registerFeature(new XT.DeclarationFeature(this)), this.registerFeature(new JT.SelectionRangeFeature(this)), this.registerFeature(new aO.ProgressFeature(this)), this.registerFeature(new QT.CallHierarchyFeature(this)), this.registerFeature(new YT.SemanticTokensFeature(this)), this.registerFeature(new ZT.LinkedEditingFeature(this)), this.registerFeature(new Ui.DidCreateFilesFeature(this)), this.registerFeature(new Ui.DidRenameFilesFeature(this)), this.registerFeature(new Ui.DidDeleteFilesFeature(this)), this.registerFeature(new Ui.WillCreateFilesFeature(this)), this.registerFeature(new Ui.WillRenameFilesFeature(this)), this.registerFeature(new Ui.WillDeleteFilesFeature(this)), this.registerFeature(new eO.TypeHierarchyFeature(this)), this.registerFeature(new tO.InlineValueFeature(this)), this.registerFeature(new nO.InlayHintsFeature(this)), this.registerFeature(new qT.DiagnosticFeature(this)), this.registerFeature(new ih.NotebookDocumentSyncFeature(this)), this.registerFeature(new iO.InlineCompletionItemFeature(this)), this.registerFeature(new sO.TextDocumentContentFeature(this));
    }
    registerProposedFeatures() {
      this.registerFeatures(lh.createAll(this));
    }
    fillInitializeParams(e) {
      for (let t of this._features) sn.func(t.fillInitializeParams) && t.fillInitializeParams(e);
    }
    computeClientCapabilities() {
      let e = {};
      (0, mt.ensure)(e, "workspace").applyEdit = true;
      let t = (0, mt.ensure)((0, mt.ensure)(e, "workspace"), "workspaceEdit");
      t.documentChanges = true, t.resourceOperations = [M.ResourceOperationKind.Create, M.ResourceOperationKind.Rename, M.ResourceOperationKind.Delete], t.failureHandling = M.FailureHandlingKind.TextOnlyTransactional, t.normalizesLineEndings = true, t.changeAnnotationSupport = { groupsOnLabel: true }, t.metadataSupport = true, t.snippetEditSupport = true;
      let r = (0, mt.ensure)((0, mt.ensure)(e, "textDocument"), "publishDiagnostics");
      r.relatedInformation = true, r.versionSupport = false, r.tagSupport = { valueSet: [M.DiagnosticTag.Unnecessary, M.DiagnosticTag.Deprecated] }, r.codeDescriptionSupport = true, r.dataSupport = true;
      let i = (0, mt.ensure)((0, mt.ensure)(e, "textDocument"), "filters");
      i.relativePatternSupport = true;
      let s = (0, mt.ensure)(e, "window"), o = (0, mt.ensure)(s, "showMessage");
      o.messageActionItem = { additionalPropertiesSupport: true };
      let a = (0, mt.ensure)(s, "showDocument");
      a.support = true;
      let c = (0, mt.ensure)(e, "general");
      c.staleRequestSupport = { cancel: true, retryOnContentModified: Array.from(n.RequestsToCancelOnContentModified) }, c.regularExpressions = { engine: "ECMAScript", version: "ES2020" }, c.markdown = { parser: "marked", version: "1.1.0" }, c.positionEncodings = ["utf-16"], this._clientOptions.markdown.supportHtml && (c.markdown.allowedTags = ["ul", "li", "p", "code", "blockquote", "ol", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "em", "pre", "table", "thead", "tbody", "tr", "th", "td", "div", "del", "a", "strong", "br", "img", "span"]);
      for (let u of this._features) u.fillClientCapabilities(e);
      return e;
    }
    initializeFeatures(e) {
      let t = this._clientOptions.documentSelector;
      for (let r of this._features) sn.func(r.preInitialize) && r.preInitialize(this._capabilities, t);
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
        return r instanceof M.ResponseError ? Promise.reject(r) : r;
      } else return this.doHandleApplyWorkspaceEdit(e);
    }
    workspaceEditLock = new Sa.Semaphore(1);
    async doHandleApplyWorkspaceEdit(e) {
      let t = e.edit, r = await this.workspaceEditLock.lock(() => this._p2c.asWorkspaceEdit(t));
      return this.validateWorkspaceEdit(t) ? sn.asPromise(G.workspace.applyEdit(r, { isRefactoring: e.metadata?.isRefactoring }).then((s) => ({ applied: s }))) : Promise.resolve({ applied: false });
    }
    validateWorkspaceEdit(e) {
      let t = /* @__PURE__ */ new Map();
      if (G.workspace.textDocuments.forEach((r) => t.set(r.uri.toString(), r)), e.documentChanges) {
        for (let r of e.documentChanges) if (M.TextDocumentEdit.is(r) && r.textDocument.version !== null && r.textDocument.version >= 0) {
          let i = this._p2c.asUri(r.textDocument.uri).toString(), s = t.get(i);
          if (s && s.version !== r.textDocument.version) return false;
        }
      }
      return true;
    }
    static RequestsToCancelOnContentModified = /* @__PURE__ */ new Set([M.SemanticTokensRequest.method, M.SemanticTokensRangeRequest.method, M.SemanticTokensDeltaRequest.method]);
    static CancellableResolveCalls = /* @__PURE__ */ new Set([M.CompletionResolveRequest.method, M.CodeLensResolveRequest.method, M.CodeActionResolveRequest.method, M.InlayHintResolveRequest.method, M.DocumentLinkResolveRequest.method, M.WorkspaceSymbolResolveRequest.method]);
    handleFailedRequest(e, t, r, i, s = true, o = false) {
      if (r instanceof M.ResponseError) {
        if (r.code === M.ErrorCodes.PendingResponseRejected || r.code === M.ErrorCodes.ConnectionInactive) return i;
        if (r.code === M.LSPErrorCodes.RequestCancelled || r.code === M.LSPErrorCodes.ServerCancelled) {
          if (t !== void 0 && t.isCancellationRequested && !o) return i;
          throw r.data !== void 0 ? new mt.LSPCancellationError(r.data) : new G.CancellationError();
        } else if (r.code === M.LSPErrorCodes.ContentModified) {
          if (n.RequestsToCancelOnContentModified.has(e.method) || n.CancellableResolveCalls.has(e.method)) throw new G.CancellationError();
          return i;
        }
      }
      throw this.error(`Request ${e.method} failed.`, r, s), r;
    }
  };
  ge.BaseLanguageClient = Pa;
  var ch = class extends Pa {
    serverOptions;
    constructor(e, t, r, i) {
      super(e, t, i), this.serverOptions = r;
    }
    async createMessageTransports(e) {
      return this.serverOptions();
    }
  };
  ge.LanguageClient = ch;
  var uh = class {
    error(e) {
      (0, M.RAL)().console.error(e);
    }
    warn(e) {
      (0, M.RAL)().console.warn(e);
    }
    info(e) {
      (0, M.RAL)().console.info(e);
    }
    log(e) {
      (0, M.RAL)().console.log(e);
    }
  };
  function cO(n, e, t, r, i) {
    let s = new uh(), o = (0, M.createProtocolConnection)(n, e, s, i);
    return o.onError((c) => {
      t(c[0], c[1], c[2]);
    }), o.onClose(r), { listen: () => o.listen(), sendRequest: o.sendRequest, onRequest: o.onRequest, hasPendingResponse: o.hasPendingResponse, sendNotification: o.sendNotification, onNotification: o.onNotification, onProgress: o.onProgress, sendProgress: o.sendProgress, trace: (c, u, d) => {
      let h = { sendNotification: false, traceFormat: M.TraceFormat.Text };
      return d === void 0 ? o.trace(c, u, h) : (sn.boolean(d), o.trace(c, u, d));
    }, initialize: (c) => o.sendRequest(M.InitializeRequest.type, c), shutdown: () => o.sendRequest(M.ShutdownRequest.type, void 0), exit: () => o.sendNotification(M.ExitNotification.type), end: () => o.end(), dispose: () => o.dispose() };
  }
  var lh;
  (function(n) {
    function e(t) {
      return [];
    }
    n.createAll = e;
  })(lh || (ge.ProposedFeatures = lh = {}));
});
var Ta = O((jt) => {
  "use strict";
  var uO = jt && jt.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), fh = jt && jt.__exportStar || function(n, e) {
    for (var t in n) t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && uO(e, n, t);
  };
  Object.defineProperty(jt, "__esModule", { value: true });
  jt.DiagnosticPullMode = jt.vsdiag = void 0;
  fh(X(), jt);
  fh(se(), jt);
  var yv = Jl();
  Object.defineProperty(jt, "vsdiag", { enumerable: true, get: function() {
    return yv.vsdiag;
  } });
  Object.defineProperty(jt, "DiagnosticPullMode", { enumerable: true, get: function() {
    return yv.DiagnosticPullMode;
  } });
  fh(dh(), jt);
});
var $v = O((sr) => {
  "use strict";
  var dO = sr && sr.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), fO = sr && sr.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), hO = sr && sr.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && dO(t, e, r[i]);
      return fO(t, e), t;
    };
  })();
  Object.defineProperty(sr, "__esModule", { value: true });
  sr.terminate = yO;
  var kv = hO(require("child_process")), pO = process.platform === "win32", gO = process.platform === "darwin", mO = process.platform === "linux";
  function yO(n, e) {
    if (pO) try {
      let t = { stdio: ["pipe", "pipe", "ignore"] };
      return e && (t.cwd = e), kv.execFileSync("taskkill", ["/T", "/F", "/PID", n.pid.toString()], t), true;
    } catch {
      return false;
    }
    else if (mO || gO) try {
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
      return !kv.spawnSync("/bin/sh", [], { input: r, stdio: ["pipe", "inherit", "inherit"] }).error;
    } catch {
      return false;
    }
    else return n.kill("SIGKILL"), true;
  }
});
var Wv = O((Ch) => {
  "use strict";
  Object.defineProperty(Ch, "__esModule", { value: true });
  var Hv = require("util"), or = Hn(), yh = class n extends or.AbstractMessageBuffer {
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
      return e instanceof Buffer ? e.toString(t) : new Hv.TextDecoder(t).decode(e);
    }
    asNative(e, t) {
      return t === void 0 ? e instanceof Buffer ? e : Buffer.from(e) : e instanceof Buffer ? e.slice(0, t) : Buffer.from(e, 0, t);
    }
    allocNative(e) {
      return Buffer.allocUnsafe(e);
    }
  }, _h = class {
    stream;
    constructor(e) {
      this.stream = e;
    }
    onClose(e) {
      return this.stream.on("close", e), or.Disposable.create(() => this.stream.off("close", e));
    }
    onError(e) {
      return this.stream.on("error", e), or.Disposable.create(() => this.stream.off("error", e));
    }
    onEnd(e) {
      return this.stream.on("end", e), or.Disposable.create(() => this.stream.off("end", e));
    }
    onData(e) {
      return this.stream.on("data", e), or.Disposable.create(() => this.stream.off("data", e));
    }
  }, vh = class {
    stream;
    constructor(e) {
      this.stream = e;
    }
    onClose(e) {
      return this.stream.on("close", e), or.Disposable.create(() => this.stream.off("close", e));
    }
    onError(e) {
      return this.stream.on("error", e), or.Disposable.create(() => this.stream.off("error", e));
    }
    onEnd(e) {
      return this.stream.on("end", e), or.Disposable.create(() => this.stream.off("end", e));
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
  }, Uv = Object.freeze({ messageBuffer: Object.freeze({ create: (n) => new yh(n) }), applicationJson: Object.freeze({ encoder: Object.freeze({ name: "application/json", encode: (n, e) => {
    try {
      return Promise.resolve(Buffer.from(JSON.stringify(n, void 0, 0), e.charset));
    } catch (t) {
      return Promise.reject(t);
    }
  } }), decoder: Object.freeze({ name: "application/json", decode: (n, e) => {
    try {
      return n instanceof Buffer ? Promise.resolve(JSON.parse(n.toString(e.charset))) : Promise.resolve(JSON.parse(new Hv.TextDecoder(e.charset).decode(n)));
    } catch (t) {
      return Promise.reject(t);
    }
  } }) }), stream: Object.freeze({ asReadableStream: (n) => new _h(n), asWritableStream: (n) => new vh(n) }), console, timer: Object.freeze({ setTimeout(n, e, ...t) {
    let r = setTimeout(n, e, ...t);
    return { dispose: () => clearTimeout(r) };
  }, setImmediate(n, ...e) {
    let t = setImmediate(n, ...e);
    return { dispose: () => clearImmediate(t) };
  }, setInterval(n, e, ...t) {
    let r = setInterval(n, e, ...t);
    return { dispose: () => clearInterval(r) };
  } }) });
  function bh() {
    return Uv;
  }
  (function(n) {
    function e() {
      or.RAL.install(Uv);
    }
    n.install = e;
  })(bh || (bh = {}));
  Ch.default = bh;
});
var Th = O((oe) => {
  "use strict";
  var Kv = oe && oe.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), _O = oe && oe.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), Rh = oe && oe.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && Kv(t, e, r[i]);
      return _O(t, e), t;
    };
  })(), vO = oe && oe.__exportStar || function(n, e) {
    for (var t in n) t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && Kv(e, n, t);
  }, bO = oe && oe.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(oe, "__esModule", { value: true });
  oe.StreamMessageWriter = oe.StreamMessageReader = oe.SocketMessageWriter = oe.SocketMessageReader = oe.PortMessageWriter = oe.PortMessageReader = oe.IPCMessageWriter = oe.IPCMessageReader = void 0;
  oe.generateRandomPipeName = RO;
  oe.createClientPipeTransport = TO;
  oe.createServerPipeTransport = OO;
  oe.createClientSocketTransport = EO;
  oe.createServerSocketTransport = xO;
  oe.createMessageConnection = IO;
  var Ws = bO(Wv());
  Ws.default.install();
  var CO = Rh(require("path")), wO = Rh(require("os")), DO = Rh(require("fs")), zv = require("crypto"), Na = require("net"), Ft = Hn();
  vO(Hn(), oe);
  var wh = class extends Ft.AbstractMessageReader {
    process;
    constructor(e) {
      super(), this.process = e;
      let t = this.process;
      t.on("error", (r) => this.fireError(r)), t.on("close", () => this.fireClose());
    }
    listen(e) {
      return this.process.on("message", e), Ft.Disposable.create(() => this.process.off("message", e));
    }
  };
  oe.IPCMessageReader = wh;
  var Dh = class extends Ft.AbstractMessageWriter {
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
  oe.IPCMessageWriter = Dh;
  var Sh = class extends Ft.AbstractMessageReader {
    onData;
    constructor(e) {
      super(), this.onData = new Ft.Emitter(), e.on("close", () => this.fireClose), e.on("error", (t) => this.fireError(t)), e.on("message", (t) => {
        this.onData.fire(t);
      });
    }
    listen(e) {
      return this.onData.event(e);
    }
  };
  oe.PortMessageReader = Sh;
  var Ph = class extends Ft.AbstractMessageWriter {
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
  oe.PortMessageWriter = Ph;
  var ei = class extends Ft.ReadableStreamMessageReader {
    constructor(e, t = "utf-8") {
      super((0, Ws.default)().stream.asReadableStream(e), t);
    }
  };
  oe.SocketMessageReader = ei;
  var ti = class extends Ft.WriteableStreamMessageWriter {
    socket;
    constructor(e, t) {
      super((0, Ws.default)().stream.asWritableStream(e), t), this.socket = e;
    }
    dispose() {
      super.dispose(), this.socket.destroy();
    }
  };
  oe.SocketMessageWriter = ti;
  var Ma = class extends Ft.ReadableStreamMessageReader {
    constructor(e, t) {
      super((0, Ws.default)().stream.asReadableStream(e), t);
    }
  };
  oe.StreamMessageReader = Ma;
  var Ia = class extends Ft.WriteableStreamMessageWriter {
    constructor(e, t) {
      super((0, Ws.default)().stream.asWritableStream(e), t);
    }
  };
  oe.StreamMessageWriter = Ia;
  var SO = process.env.XDG_RUNTIME_DIR, PO = /* @__PURE__ */ new Map([["linux", 107], ["darwin", 102]]);
  function RO() {
    if (process.platform === "win32") return `\\\\.\\pipe\\lsp-${(0, zv.randomBytes)(16).toString("hex")}-sock`;
    let n = 32, e = 10, t = DO.realpathSync(SO ?? wO.tmpdir()), r = PO.get(process.platform);
    if (r !== void 0 && (n = Math.min(r - t.length - e, n)), n < 16) throw new Error(`Unable to generate a random pipe name with ${n} characters.`);
    let i = (0, zv.randomBytes)(Math.floor(n / 2)).toString("hex");
    return CO.join(t, `lsp-${i}.sock`);
  }
  function TO(n, e = "utf-8") {
    let t, r = new Promise((i, s) => {
      t = i;
    });
    return new Promise((i, s) => {
      let o = (0, Na.createServer)((a) => {
        o.close(), t([new ei(a, e), new ti(a, e)]);
      });
      o.on("error", s), o.listen(n, () => {
        o.removeListener("error", s), i({ onConnected: () => r });
      });
    });
  }
  function OO(n, e = "utf-8") {
    let t = (0, Na.createConnection)(n);
    return [new ei(t, e), new ti(t, e)];
  }
  function EO(n, e = "utf-8") {
    let t, r = new Promise((i, s) => {
      t = i;
    });
    return new Promise((i, s) => {
      let o = (0, Na.createServer)((a) => {
        o.close(), t([new ei(a, e), new ti(a, e)]);
      });
      o.on("error", s), o.listen(n, "127.0.0.1", () => {
        o.removeListener("error", s), i({ onConnected: () => r });
      });
    });
  }
  function xO(n, e = "utf-8") {
    let t = (0, Na.createConnection)(n, "127.0.0.1");
    return [new ei(t, e), new ti(t, e)];
  }
  function qO(n) {
    let e = n;
    return e.read !== void 0 && e.addListener !== void 0;
  }
  function MO(n) {
    let e = n;
    return e.write !== void 0 && e.addListener !== void 0;
  }
  function IO(n, e, t, r) {
    t || (t = Ft.NullLogger);
    let i = qO(n) ? new Ma(n) : n, s = MO(e) ? new Ia(e) : e;
    return Ft.ConnectionStrategy.is(r) && (r = { connectionStrategy: r }), (0, Ft.createMessageConnection)(i, s, t, r);
  }
});
var Oh = O((ar) => {
  "use strict";
  var NO = ar && ar.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), Bv = ar && ar.__exportStar || function(n, e) {
    for (var t in n) t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && NO(e, n, t);
  };
  Object.defineProperty(ar, "__esModule", { value: true });
  ar.createProtocolConnection = FO;
  var jO = Th();
  Bv(Th(), ar);
  Bv(X(), ar);
  function FO(n, e, t, r) {
    return (0, jO.createMessageConnection)(n, e, t, r);
  }
});
var zs = O((Yq, Vv) => {
  "use strict";
  var LO = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  };
  Vv.exports = LO;
});
var ja = O((Zq, Gv) => {
  "use strict";
  var AO = "2.0.0", kO = Number.MAX_SAFE_INTEGER || 9007199254740991, $O = 16, HO = 250, UO = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
  Gv.exports = { MAX_LENGTH: 256, MAX_SAFE_COMPONENT_LENGTH: $O, MAX_SAFE_BUILD_LENGTH: HO, MAX_SAFE_INTEGER: kO, RELEASE_TYPES: UO, SEMVER_SPEC_VERSION: AO, FLAG_INCLUDE_PRERELEASE: 1, FLAG_LOOSE: 2 };
});
var Fa = O((Mn, Xv) => {
  "use strict";
  var { MAX_SAFE_COMPONENT_LENGTH: Eh, MAX_SAFE_BUILD_LENGTH: WO, MAX_LENGTH: zO } = ja(), KO = zs();
  Mn = Xv.exports = {};
  var BO = Mn.re = [], VO = Mn.safeRe = [], A = Mn.src = [], GO = Mn.safeSrc = [], k = Mn.t = {}, XO = 0, xh = "[a-zA-Z0-9-]", JO = [["\\s", 1], ["\\d", zO], [xh, WO]], QO = (n) => {
    for (let [e, t] of JO) n = n.split(`${e}*`).join(`${e}{0,${t}}`).split(`${e}+`).join(`${e}{1,${t}}`);
    return n;
  }, ee = (n, e, t) => {
    let r = QO(e), i = XO++;
    KO(n, i, e), k[n] = i, A[i] = e, GO[i] = r, BO[i] = new RegExp(e, t ? "g" : void 0), VO[i] = new RegExp(r, t ? "g" : void 0);
  };
  ee("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  ee("NUMERICIDENTIFIERLOOSE", "\\d+");
  ee("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${xh}*`);
  ee("MAINVERSION", `(${A[k.NUMERICIDENTIFIER]})\\.(${A[k.NUMERICIDENTIFIER]})\\.(${A[k.NUMERICIDENTIFIER]})`);
  ee("MAINVERSIONLOOSE", `(${A[k.NUMERICIDENTIFIERLOOSE]})\\.(${A[k.NUMERICIDENTIFIERLOOSE]})\\.(${A[k.NUMERICIDENTIFIERLOOSE]})`);
  ee("PRERELEASEIDENTIFIER", `(?:${A[k.NONNUMERICIDENTIFIER]}|${A[k.NUMERICIDENTIFIER]})`);
  ee("PRERELEASEIDENTIFIERLOOSE", `(?:${A[k.NONNUMERICIDENTIFIER]}|${A[k.NUMERICIDENTIFIERLOOSE]})`);
  ee("PRERELEASE", `(?:-(${A[k.PRERELEASEIDENTIFIER]}(?:\\.${A[k.PRERELEASEIDENTIFIER]})*))`);
  ee("PRERELEASELOOSE", `(?:-?(${A[k.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${A[k.PRERELEASEIDENTIFIERLOOSE]})*))`);
  ee("BUILDIDENTIFIER", `${xh}+`);
  ee("BUILD", `(?:\\+(${A[k.BUILDIDENTIFIER]}(?:\\.${A[k.BUILDIDENTIFIER]})*))`);
  ee("FULLPLAIN", `v?${A[k.MAINVERSION]}${A[k.PRERELEASE]}?${A[k.BUILD]}?`);
  ee("FULL", `^${A[k.FULLPLAIN]}$`);
  ee("LOOSEPLAIN", `[v=\\s]*${A[k.MAINVERSIONLOOSE]}${A[k.PRERELEASELOOSE]}?${A[k.BUILD]}?`);
  ee("LOOSE", `^${A[k.LOOSEPLAIN]}$`);
  ee("GTLT", "((?:<|>)?=?)");
  ee("XRANGEIDENTIFIERLOOSE", `${A[k.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  ee("XRANGEIDENTIFIER", `${A[k.NUMERICIDENTIFIER]}|x|X|\\*`);
  ee("XRANGEPLAIN", `[v=\\s]*(${A[k.XRANGEIDENTIFIER]})(?:\\.(${A[k.XRANGEIDENTIFIER]})(?:\\.(${A[k.XRANGEIDENTIFIER]})(?:${A[k.PRERELEASE]})?${A[k.BUILD]}?)?)?`);
  ee("XRANGEPLAINLOOSE", `[v=\\s]*(${A[k.XRANGEIDENTIFIERLOOSE]})(?:\\.(${A[k.XRANGEIDENTIFIERLOOSE]})(?:\\.(${A[k.XRANGEIDENTIFIERLOOSE]})(?:${A[k.PRERELEASELOOSE]})?${A[k.BUILD]}?)?)?`);
  ee("XRANGE", `^${A[k.GTLT]}\\s*${A[k.XRANGEPLAIN]}$`);
  ee("XRANGELOOSE", `^${A[k.GTLT]}\\s*${A[k.XRANGEPLAINLOOSE]}$`);
  ee("COERCEPLAIN", `(^|[^\\d])(\\d{1,${Eh}})(?:\\.(\\d{1,${Eh}}))?(?:\\.(\\d{1,${Eh}}))?`);
  ee("COERCE", `${A[k.COERCEPLAIN]}(?:$|[^\\d])`);
  ee("COERCEFULL", A[k.COERCEPLAIN] + `(?:${A[k.PRERELEASE]})?(?:${A[k.BUILD]})?(?:$|[^\\d])`);
  ee("COERCERTL", A[k.COERCE], true);
  ee("COERCERTLFULL", A[k.COERCEFULL], true);
  ee("LONETILDE", "(?:~>?)");
  ee("TILDETRIM", `(\\s*)${A[k.LONETILDE]}\\s+`, true);
  Mn.tildeTrimReplace = "$1~";
  ee("TILDE", `^${A[k.LONETILDE]}${A[k.XRANGEPLAIN]}$`);
  ee("TILDELOOSE", `^${A[k.LONETILDE]}${A[k.XRANGEPLAINLOOSE]}$`);
  ee("LONECARET", "(?:\\^)");
  ee("CARETTRIM", `(\\s*)${A[k.LONECARET]}\\s+`, true);
  Mn.caretTrimReplace = "$1^";
  ee("CARET", `^${A[k.LONECARET]}${A[k.XRANGEPLAIN]}$`);
  ee("CARETLOOSE", `^${A[k.LONECARET]}${A[k.XRANGEPLAINLOOSE]}$`);
  ee("COMPARATORLOOSE", `^${A[k.GTLT]}\\s*(${A[k.LOOSEPLAIN]})$|^$`);
  ee("COMPARATOR", `^${A[k.GTLT]}\\s*(${A[k.FULLPLAIN]})$|^$`);
  ee("COMPARATORTRIM", `(\\s*)${A[k.GTLT]}\\s*(${A[k.LOOSEPLAIN]}|${A[k.XRANGEPLAIN]})`, true);
  Mn.comparatorTrimReplace = "$1$2$3";
  ee("HYPHENRANGE", `^\\s*(${A[k.XRANGEPLAIN]})\\s+-\\s+(${A[k.XRANGEPLAIN]})\\s*$`);
  ee("HYPHENRANGELOOSE", `^\\s*(${A[k.XRANGEPLAINLOOSE]})\\s+-\\s+(${A[k.XRANGEPLAINLOOSE]})\\s*$`);
  ee("STAR", "(<|>)?=?\\s*\\*");
  ee("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  ee("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
});
var La = O((eM, Jv) => {
  "use strict";
  var YO = Object.freeze({ loose: true }), ZO = Object.freeze({}), eE = (n) => n ? typeof n != "object" ? YO : n : ZO;
  Jv.exports = eE;
});
var eb = O((tM, Zv) => {
  "use strict";
  var Qv = /^[0-9]+$/, Yv = (n, e) => {
    if (typeof n == "number" && typeof e == "number") return n === e ? 0 : n < e ? -1 : 1;
    let t = Qv.test(n), r = Qv.test(e);
    return t && r && (n = +n, e = +e), n === e ? 0 : t && !r ? -1 : r && !t ? 1 : n < e ? -1 : 1;
  }, tE = (n, e) => Yv(e, n);
  Zv.exports = { compareIdentifiers: Yv, rcompareIdentifiers: tE };
});
var Ks = O((nM, nb) => {
  "use strict";
  var Aa = zs(), { MAX_LENGTH: tb, MAX_SAFE_INTEGER: ka } = ja(), { safeRe: $a, t: Ha } = Fa(), nE = La(), { compareIdentifiers: qh } = eb(), rE = (n, e) => {
    let t = e.split(".");
    if (t.length > n.length) return false;
    for (let r = 0; r < t.length; r++) if (qh(n[r], t[r]) !== 0) return false;
    return true;
  }, Mh = class n {
    constructor(e, t) {
      if (t = nE(t), e instanceof n) {
        if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;
        e = e.version;
      } else if (typeof e != "string") throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
      if (e.length > tb) throw new TypeError(`version is longer than ${tb} characters`);
      Aa("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
      let r = e.trim().match(t.loose ? $a[Ha.LOOSE] : $a[Ha.FULL]);
      if (!r) throw new TypeError(`Invalid Version: ${e}`);
      if (this.raw = e, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > ka || this.major < 0) throw new TypeError("Invalid major version");
      if (this.minor > ka || this.minor < 0) throw new TypeError("Invalid minor version");
      if (this.patch > ka || this.patch < 0) throw new TypeError("Invalid patch version");
      r[4] ? this.prerelease = r[4].split(".").map((i) => {
        if (/^[0-9]+$/.test(i)) {
          let s = +i;
          if (s >= 0 && s < ka) return s;
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
      if (Aa("SemVer.compare", this.version, this.options, e), !(e instanceof n)) {
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
        if (Aa("prerelease compare", t, r, i), r === void 0 && i === void 0) return 0;
        if (i === void 0) return 1;
        if (r === void 0) return -1;
        if (r === i) continue;
        return qh(r, i);
      } while (++t);
    }
    compareBuild(e) {
      e instanceof n || (e = new n(e, this.options));
      let t = 0;
      do {
        let r = this.build[t], i = e.build[t];
        if (Aa("build compare", t, r, i), r === void 0 && i === void 0) return 0;
        if (i === void 0) return 1;
        if (r === void 0) return -1;
        if (r === i) continue;
        return qh(r, i);
      } while (++t);
    }
    inc(e, t, r) {
      if (e.startsWith("pre")) {
        if (!t && r === false) throw new Error("invalid increment argument: identifier is empty");
        if (t) {
          let i = `-${t}`.match(this.options.loose ? $a[Ha.PRERELEASELOOSE] : $a[Ha.PRERELEASE]);
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
            if (r === false && (s = [t]), rE(this.prerelease, t)) {
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
  nb.exports = Mh;
});
var sb = O((rM, ib) => {
  "use strict";
  var rb = Ks(), iE = (n, e, t = false) => {
    if (n instanceof rb) return n;
    try {
      return new rb(n, e);
    } catch (r) {
      if (!t) return null;
      throw r;
    }
  };
  ib.exports = iE;
});
var ab = O((iM, ob) => {
  "use strict";
  var Ih = class {
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
  ob.exports = Ih;
});
var ni = O((sM, ub) => {
  "use strict";
  var cb = Ks(), sE = (n, e, t) => new cb(n, t).compare(new cb(e, t));
  ub.exports = sE;
});
var db = O((oM, lb) => {
  "use strict";
  var oE = ni(), aE = (n, e, t) => oE(n, e, t) === 0;
  lb.exports = aE;
});
var hb = O((aM, fb) => {
  "use strict";
  var cE = ni(), uE = (n, e, t) => cE(n, e, t) !== 0;
  fb.exports = uE;
});
var gb = O((cM, pb) => {
  "use strict";
  var lE = ni(), dE = (n, e, t) => lE(n, e, t) > 0;
  pb.exports = dE;
});
var yb = O((uM, mb) => {
  "use strict";
  var fE = ni(), hE = (n, e, t) => fE(n, e, t) >= 0;
  mb.exports = hE;
});
var vb = O((lM, _b) => {
  "use strict";
  var pE = ni(), gE = (n, e, t) => pE(n, e, t) < 0;
  _b.exports = gE;
});
var Cb = O((dM, bb) => {
  "use strict";
  var mE = ni(), yE = (n, e, t) => mE(n, e, t) <= 0;
  bb.exports = yE;
});
var Db = O((fM, wb) => {
  "use strict";
  var _E = db(), vE = hb(), bE = gb(), CE = yb(), wE = vb(), DE = Cb(), SE = (n, e, t, r) => {
    switch (e) {
      case "===":
        return typeof n == "object" && (n = n.version), typeof t == "object" && (t = t.version), n === t;
      case "!==":
        return typeof n == "object" && (n = n.version), typeof t == "object" && (t = t.version), n !== t;
      case "":
      case "=":
      case "==":
        return _E(n, t, r);
      case "!=":
        return vE(n, t, r);
      case ">":
        return bE(n, t, r);
      case ">=":
        return CE(n, t, r);
      case "<":
        return wE(n, t, r);
      case "<=":
        return DE(n, t, r);
      default:
        throw new TypeError(`Invalid operator: ${e}`);
    }
  };
  wb.exports = SE;
});
var xb = O((hM, Eb) => {
  "use strict";
  var Bs = /* @__PURE__ */ Symbol("SemVer ANY"), Fh = class n {
    static get ANY() {
      return Bs;
    }
    constructor(e, t) {
      if (t = Sb(t), e instanceof n) {
        if (e.loose === !!t.loose) return e;
        e = e.value;
      }
      e = e.trim().split(/\s+/).join(" "), jh("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === Bs ? this.value = "" : this.value = this.operator + this.semver.version, jh("comp", this);
    }
    parse(e) {
      let t = this.options.loose ? Pb[Rb.COMPARATORLOOSE] : Pb[Rb.COMPARATOR], r = e.match(t);
      if (!r) throw new TypeError(`Invalid comparator: ${e}`);
      this.operator = r[1] !== void 0 ? r[1] : "", this.operator === "=" && (this.operator = ""), r[2] ? this.semver = new Tb(r[2], this.options.loose) : this.semver = Bs;
    }
    toString() {
      return this.value;
    }
    test(e) {
      if (jh("Comparator.test", e, this.options.loose), this.semver === Bs || e === Bs) return true;
      if (typeof e == "string") try {
        e = new Tb(e, this.options);
      } catch {
        return false;
      }
      return Nh(e, this.operator, this.semver, this.options);
    }
    intersects(e, t) {
      if (!(e instanceof n)) throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? true : new Ob(e.value, t).test(this.value) : e.operator === "" ? e.value === "" ? true : new Ob(this.value, t).test(e.semver) : (t = Sb(t), t.includePrerelease && (this.value === "<0.0.0-0" || e.value === "<0.0.0-0") || !t.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0")) ? false : !!(this.operator.startsWith(">") && e.operator.startsWith(">") || this.operator.startsWith("<") && e.operator.startsWith("<") || this.semver.version === e.semver.version && this.operator.includes("=") && e.operator.includes("=") || Nh(this.semver, "<", e.semver, t) && this.operator.startsWith(">") && e.operator.startsWith("<") || Nh(this.semver, ">", e.semver, t) && this.operator.startsWith("<") && e.operator.startsWith(">")));
    }
  };
  Eb.exports = Fh;
  var Sb = La(), { safeRe: Pb, t: Rb } = Fa(), Nh = Db(), jh = zs(), Tb = Ks(), Ob = Lh();
});
var Lh = O((pM, Nb) => {
  "use strict";
  var PE = /\s+/g, Ah = class n {
    constructor(e, t) {
      if (t = TE(t), e instanceof n) return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new n(e.raw, t);
      if (e instanceof kh) return this.raw = e.value, this.set = [[e]], this.formatted = void 0, this;
      if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e.trim().replace(PE, " "), this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((r) => r.length), !this.set.length) throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        let r = this.set[0];
        if (this.set = this.set.filter((i) => !Mb(i[0])), this.set.length === 0) this.set = [r];
        else if (this.set.length > 1) {
          for (let i of this.set) if (i.length === 1 && FE(i[0])) {
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
      e = e.replace(jE, "");
      let r = ((this.options.includePrerelease && IE) | (this.options.loose && NE)) + ":" + e, i = qb.get(r);
      if (i) return i;
      let s = this.options.loose, o = s ? _t[st.HYPHENRANGELOOSE] : _t[st.HYPHENRANGE];
      e = e.replace(o, VE(this.options.includePrerelease)), Te("hyphen replace", e), e = e.replace(_t[st.COMPARATORTRIM], xE), Te("comparator trim", e), e = e.replace(_t[st.TILDETRIM], qE), Te("tilde trim", e), e = e.replace(_t[st.CARETTRIM], ME), Te("caret trim", e);
      let a = e.split(" ").map((h) => LE(h, this.options)).join(" ").split(/\s+/).map((h) => BE(h, this.options));
      s && (a = a.filter((h) => (Te("loose invalid filter", h, this.options), !!h.match(_t[st.COMPARATORLOOSE])))), Te("range list", a);
      let c = /* @__PURE__ */ new Map(), u = a.map((h) => new kh(h, this.options));
      for (let h of u) {
        if (Mb(h)) return [h];
        c.set(h.value, h);
      }
      c.size > 1 && c.has("") && c.delete("");
      let d = [...c.values()];
      return qb.set(r, d), d;
    }
    intersects(e, t) {
      if (!(e instanceof n)) throw new TypeError("a Range is required");
      return this.set.some((r) => Ib(r, t) && e.set.some((i) => Ib(i, t) && r.every((s) => i.every((o) => s.intersects(o, t)))));
    }
    test(e) {
      if (!e) return false;
      if (typeof e == "string") try {
        e = new OE(e, this.options);
      } catch {
        return false;
      }
      for (let t = 0; t < this.set.length; t++) if (GE(this.set[t], e, this.options)) return true;
      return false;
    }
  };
  Nb.exports = Ah;
  var RE = ab(), qb = new RE(), TE = La(), kh = xb(), Te = zs(), OE = Ks(), { safeRe: _t, src: EE, t: st, comparatorTrimReplace: xE, tildeTrimReplace: qE, caretTrimReplace: ME } = Fa(), { FLAG_INCLUDE_PRERELEASE: IE, FLAG_LOOSE: NE } = ja(), jE = new RegExp(EE[st.BUILD], "g"), Mb = (n) => n.value === "<0.0.0-0", FE = (n) => n.value === "", Ib = (n, e) => {
    let t = true, r = n.slice(), i = r.pop();
    for (; t && r.length; ) t = r.every((s) => i.intersects(s, e)), i = r.pop();
    return t;
  }, LE = (n, e) => (n = n.replace(_t[st.BUILD], ""), Te("comp", n, e), n = HE(n, e), Te("caret", n), n = kE(n, e), Te("tildes", n), n = WE(n, e), Te("xrange", n), n = KE(n, e), Te("stars", n), n), Ge = (n) => !n || n.toLowerCase() === "x" || n === "*", AE = (n, e, t) => Ge(n) && !Ge(e) || Ge(e) && t && !Ge(t), kE = (n, e) => n.trim().split(/\s+/).map((t) => $E(t, e)).join(" "), $E = (n, e) => {
    let t = e.loose ? _t[st.TILDELOOSE] : _t[st.TILDE], r = e.includePrerelease ? "-0" : "";
    return n.replace(t, (i, s, o, a, c) => {
      Te("tilde", n, i, s, o, a, c);
      let u;
      return Ge(s) ? u = "" : Ge(o) ? u = `>=${s}.0.0${r} <${+s + 1}.0.0-0` : Ge(a) ? u = `>=${s}.${o}.0${r} <${s}.${+o + 1}.0-0` : c ? (Te("replaceTilde pr", c), u = `>=${s}.${o}.${a}-${c} <${s}.${+o + 1}.0-0`) : u = `>=${s}.${o}.${a} <${s}.${+o + 1}.0-0`, Te("tilde return", u), u;
    });
  }, HE = (n, e) => n.trim().split(/\s+/).map((t) => UE(t, e)).join(" "), UE = (n, e) => {
    Te("caret", n, e);
    let t = e.loose ? _t[st.CARETLOOSE] : _t[st.CARET], r = e.includePrerelease ? "-0" : "";
    return n.replace(t, (i, s, o, a, c) => {
      Te("caret", n, i, s, o, a, c);
      let u;
      return Ge(s) ? u = "" : Ge(o) ? u = `>=${s}.0.0${r} <${+s + 1}.0.0-0` : Ge(a) ? s === "0" ? u = `>=${s}.${o}.0${r} <${s}.${+o + 1}.0-0` : u = `>=${s}.${o}.0${r} <${+s + 1}.0.0-0` : c ? (Te("replaceCaret pr", c), s === "0" ? o === "0" ? u = `>=${s}.${o}.${a}-${c} <${s}.${o}.${+a + 1}-0` : u = `>=${s}.${o}.${a}-${c} <${s}.${+o + 1}.0-0` : u = `>=${s}.${o}.${a}-${c} <${+s + 1}.0.0-0`) : (Te("no pr"), s === "0" ? o === "0" ? u = `>=${s}.${o}.${a} <${s}.${o}.${+a + 1}-0` : u = `>=${s}.${o}.${a} <${s}.${+o + 1}.0-0` : u = `>=${s}.${o}.${a} <${+s + 1}.0.0-0`), Te("caret return", u), u;
    });
  }, WE = (n, e) => (Te("replaceXRanges", n, e), n.split(/\s+/).map((t) => zE(t, e)).join(" ")), zE = (n, e) => {
    n = n.trim();
    let t = e.loose ? _t[st.XRANGELOOSE] : _t[st.XRANGE];
    return n.replace(t, (r, i, s, o, a, c) => {
      if (Te("xRange", n, r, i, s, o, a, c), AE(s, o, a)) return n;
      let u = Ge(s), d = u || Ge(o), h = d || Ge(a), p = h;
      return i === "=" && p && (i = ""), c = e.includePrerelease ? "-0" : "", u ? i === ">" || i === "<" ? r = "<0.0.0-0" : r = "*" : i && p ? (d && (o = 0), a = 0, i === ">" ? (i = ">=", d ? (s = +s + 1, o = 0, a = 0) : (o = +o + 1, a = 0)) : i === "<=" && (i = "<", d ? s = +s + 1 : o = +o + 1), i === "<" && (c = "-0"), r = `${i + s}.${o}.${a}${c}`) : d ? r = `>=${s}.0.0${c} <${+s + 1}.0.0-0` : h && (r = `>=${s}.${o}.0${c} <${s}.${+o + 1}.0-0`), Te("xRange return", r), r;
    });
  }, KE = (n, e) => (Te("replaceStars", n, e), n.trim().replace(_t[st.STAR], "")), BE = (n, e) => (Te("replaceGTE0", n, e), n.trim().replace(_t[e.includePrerelease ? st.GTE0PRE : st.GTE0], "")), VE = (n) => (e, t, r, i, s, o, a, c, u, d, h, p) => (Ge(r) ? t = "" : Ge(i) ? t = `>=${r}.0.0${n ? "-0" : ""}` : Ge(s) ? t = `>=${r}.${i}.0${n ? "-0" : ""}` : o ? t = `>=${t}` : t = `>=${t}${n ? "-0" : ""}`, Ge(u) ? c = "" : Ge(d) ? c = `<${+u + 1}.0.0-0` : Ge(h) ? c = `<${u}.${+d + 1}.0-0` : p ? c = `<=${u}.${d}.${h}-${p}` : n ? c = `<${u}.${d}.${+h + 1}-0` : c = `<=${c}`, `${t} ${c}`.trim()), GE = (n, e, t) => {
    for (let r = 0; r < n.length; r++) if (!n[r].test(e)) return false;
    if (e.prerelease.length && !t.includePrerelease) {
      for (let r = 0; r < n.length; r++) if (Te(n[r].semver), n[r].semver !== kh.ANY && n[r].semver.prerelease.length > 0) {
        let i = n[r].semver;
        if (i.major === e.major && i.minor === e.minor && i.patch === e.patch) return true;
      }
      return false;
    }
    return true;
  };
});
var Fb = O((gM, jb) => {
  "use strict";
  var XE = Lh(), JE = (n, e, t) => {
    try {
      e = new XE(e, t);
    } catch {
      return false;
    }
    return e.test(n);
  };
  jb.exports = JE;
});
var Ub = O((tt) => {
  "use strict";
  var $b = tt && tt.__createBinding || (Object.create ? (function(n, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n, r, i);
  }) : (function(n, e, t, r) {
    r === void 0 && (r = t), n[r] = e[t];
  })), QE = tt && tt.__setModuleDefault || (Object.create ? (function(n, e) {
    Object.defineProperty(n, "default", { enumerable: true, value: e });
  }) : function(n, e) {
    n.default = e;
  }), Vs = tt && tt.__importStar || /* @__PURE__ */ (function() {
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
      if (e != null) for (var r = n(e), i = 0; i < r.length; i++) r[i] !== "default" && $b(t, e, r[i]);
      return QE(t, e), t;
    };
  })(), Hb = tt && tt.__exportStar || function(n, e) {
    for (var t in n) t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && $b(e, n, t);
  };
  Object.defineProperty(tt, "__esModule", { value: true });
  tt.SettingMonitor = tt.LanguageClient = tt.TransportKind = void 0;
  var cr = Vs(require("child_process")), $h = Vs(require("fs")), Hh = Vs(require("path")), Lb = Vs(require("readline")), Fr = require("vscode"), Bi = Vs(Wt()), Ab = dh(), YE = $v(), Fe = Oh(), ZE = sb(), e0 = Fb();
  Hb(Oh(), tt);
  Hb(Ta(), tt);
  var kb = "^1.91.0", Le;
  (function(n) {
    n[n.stdio = 0] = "stdio", n[n.ipc = 1] = "ipc", n[n.pipe = 2] = "pipe", n[n.socket = 3] = "socket";
  })(Le || (tt.TransportKind = Le = {}));
  var jr;
  (function(n) {
    function e(t) {
      let r = t;
      return r && r.kind === Le.socket && Bi.number(r.port);
    }
    n.isSocket = e;
  })(jr || (jr = {}));
  var Uh;
  (function(n) {
    function e(t) {
      return Bi.string(t.command);
    }
    n.is = e;
  })(Uh || (Uh = {}));
  var Wh;
  (function(n) {
    function e(t) {
      return Bi.string(t.module);
    }
    n.is = e;
  })(Wh || (Wh = {}));
  var zh;
  (function(n) {
    function e(t) {
      let r = t;
      return r && r.writer !== void 0 && r.reader !== void 0;
    }
    n.is = e;
  })(zh || (zh = {}));
  var Kh;
  (function(n) {
    function e(t) {
      let r = t;
      return r && r.process !== void 0 && typeof r.detached == "boolean";
    }
    n.is = e;
  })(Kh || (Kh = {}));
  var Bh = class extends Ab.BaseLanguageClient {
    _serverOptions;
    _stdioOptions;
    _forceDebug;
    _serverProcess;
    _isDetached;
    _isInDebugMode;
    constructor(e, t, r, i, s) {
      let o, a, c, u, d;
      Bi.string(t) ? (o = e, a = t, c = r, u = i, d = !!s) : (o = e.toLowerCase(), a = e, c = t, u = r, d = i), d === void 0 && (d = false), super(o, a, u), this._serverOptions = c, this._stdioOptions = u.stdioOptions ?? { stdout: (h, p) => {
        Lb.createInterface({ input: h, crlfDelay: 1 / 0, terminal: false, historySize: 0 }).on("line", (g) => p.info(g));
      }, stderr: (h, p) => {
        Lb.createInterface({ input: h, crlfDelay: 1 / 0, terminal: false, historySize: 0 }).on("line", (g) => p.error(g));
      } }, this._forceDebug = d, this._isInDebugMode = d;
      try {
        this.checkVersion();
      } catch (h) {
        throw Bi.string(h.message) && this.outputChannel.appendLine(h.message), h;
      }
    }
    checkVersion() {
      let e = ZE(Fr.version);
      if (!e) throw new Error(`No valid VS Code version detected. Version string is: ${Fr.version}`);
      if (e.prerelease && e.prerelease.length > 0 && (e.prerelease = []), !e0(e, kb)) throw new Error(`The language client requires VS Code version ${kb} but received version ${Fr.version}`);
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
          e.pid !== void 0 && (process.kill(e.pid, 0), (0, YE.terminate)(e));
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
      function t(p, g) {
        if (!p && !g) return;
        let y = /* @__PURE__ */ Object.create(null);
        return Object.keys(process.env).forEach((_) => y[_] = process.env[_]), g && (y.ELECTRON_RUN_AS_NODE = "1", y.ELECTRON_NO_ASAR = "1"), p && Object.keys(p).forEach((_) => y[_] = p[_]), y;
      }
      let r = ["--debug=", "--debug-brk=", "--inspect=", "--inspect-brk="], i = ["--debug", "--debug-brk", "--inspect", "--inspect-brk"];
      function s() {
        let p = process.execArgv;
        return p ? p.some((g) => r.some((y) => g.startsWith(y)) || i.some((y) => g === y)) : false;
      }
      function o(p) {
        if (p.stdin === null || p.stdout === null || p.stderr === null) throw new Error("Process created without stdio streams");
      }
      let a = this._stdioOptions.stdout, c = this._stdioOptions.stderr, u = this._serverOptions;
      if (Bi.func(u)) return u().then((p) => {
        if (Ab.MessageTransports.is(p)) return this._isDetached = !!p.detached, p;
        if (zh.is(p)) return this._isDetached = !!p.detached, { reader: new Fe.StreamMessageReader(p.reader), writer: new Fe.StreamMessageWriter(p.writer) };
        {
          let g;
          return Kh.is(p) ? (g = p.process, this._isDetached = p.detached) : (g = p, this._isDetached = false), c(g.stderr, this.outputChannel), { reader: new Fe.StreamMessageReader(g.stdout), writer: new Fe.StreamMessageWriter(g.stdin) };
        }
      });
      let d, h = u;
      return h.run || h.debug ? this._forceDebug || s() ? (d = h.debug, this._isInDebugMode = true) : (d = h.run, this._isInDebugMode = false) : d = u, this._getServerWorkingDir(d.options).then((p) => {
        if (Wh.is(d) && d.module) {
          let g = d, y = g.transport || Le.stdio;
          if (g.runtime) {
            let _ = [], D = g.options ?? /* @__PURE__ */ Object.create(null);
            D.execArgv && D.execArgv.forEach((I) => _.push(I)), _.push(g.module), g.args && g.args.forEach((I) => _.push(I));
            let S = /* @__PURE__ */ Object.create(null);
            S.cwd = p, S.env = t(D.env, false);
            let C = this._getRuntimePath(g.runtime, p), T;
            if (y === Le.ipc ? (S.stdio = [null, null, null, "ipc"], _.push("--node-ipc")) : y === Le.stdio ? _.push("--stdio") : y === Le.pipe ? (T = (0, Fe.generateRandomPipeName)(), _.push(`--pipe=${T}`)) : jr.isSocket(y) && _.push(`--socket=${y.port}`), _.push(`--clientProcessId=${process.pid.toString()}`), y === Le.ipc || y === Le.stdio) {
              let I = cr.spawn(C, _, S);
              return !I || !I.pid ? Ki(I, `Launching server using runtime ${C} failed.`) : (this._serverProcess = I, c(I.stderr, this.outputChannel), y === Le.ipc ? (a(I.stdout, this.outputChannel), Promise.resolve({ reader: new Fe.IPCMessageReader(I), writer: new Fe.IPCMessageWriter(I) })) : Promise.resolve({ reader: new Fe.StreamMessageReader(I.stdout), writer: new Fe.StreamMessageWriter(I.stdin) }));
            } else {
              if (y === Le.pipe) return (0, Fe.createClientPipeTransport)(T).then((I) => {
                let N = cr.spawn(C, _, S);
                return !N || !N.pid ? Ki(N, `Launching server using runtime ${C} failed.`) : (this._serverProcess = N, c(N.stderr, this.outputChannel), a(N.stdout, this.outputChannel), I.onConnected().then((J) => ({ reader: J[0], writer: J[1] })));
              });
              if (jr.isSocket(y)) return (0, Fe.createClientSocketTransport)(y.port).then((I) => {
                let N = cr.spawn(C, _, S);
                return !N || !N.pid ? Ki(N, `Launching server using runtime ${C} failed.`) : (this._serverProcess = N, c(N.stderr, this.outputChannel), a(N.stdout, this.outputChannel), I.onConnected().then((J) => ({ reader: J[0], writer: J[1] })));
              });
            }
          } else {
            let _;
            return new Promise((D, S) => {
              let C = (g.args && g.args.slice()) ?? [];
              y === Le.ipc ? C.push("--node-ipc") : y === Le.stdio ? C.push("--stdio") : y === Le.pipe ? (_ = (0, Fe.generateRandomPipeName)(), C.push(`--pipe=${_}`)) : jr.isSocket(y) && C.push(`--socket=${y.port}`), C.push(`--clientProcessId=${process.pid.toString()}`);
              let T = g.options ? { ...g.options } : /* @__PURE__ */ Object.create(null);
              if (T.env = t(T.env, true), T.execArgv = T.execArgv || [], T.cwd = p, T.silent = true, y === Le.ipc || y === Le.stdio) {
                let I = cr.fork(g.module, C || [], T);
                o(I), this._serverProcess = I, c(I.stderr, this.outputChannel), y === Le.ipc ? (a(I.stdout, this.outputChannel), D({ reader: new Fe.IPCMessageReader(this._serverProcess), writer: new Fe.IPCMessageWriter(this._serverProcess) })) : D({ reader: new Fe.StreamMessageReader(I.stdout), writer: new Fe.StreamMessageWriter(I.stdin) });
              } else y === Le.pipe ? (0, Fe.createClientPipeTransport)(_).then((I) => {
                let N = cr.fork(g.module, C || [], T);
                o(N), this._serverProcess = N, c(N.stderr, this.outputChannel), a(N.stdout, this.outputChannel), I.onConnected().then((J) => {
                  D({ reader: J[0], writer: J[1] });
                }, S);
              }, S) : jr.isSocket(y) && (0, Fe.createClientSocketTransport)(y.port).then((I) => {
                let N = cr.fork(g.module, C || [], T);
                o(N), this._serverProcess = N, c(N.stderr, this.outputChannel), a(N.stdout, this.outputChannel), I.onConnected().then((J) => {
                  D({ reader: J[0], writer: J[1] });
                }, S);
              }, S);
            });
          }
        } else if (Uh.is(d) && d.command) {
          let g = d, y = d.args !== void 0 ? d.args.slice(0) : [], _, D = d.transport;
          if (D === Le.stdio) y.push("--stdio");
          else if (D === Le.pipe) _ = (0, Fe.generateRandomPipeName)(), y.push(`--pipe=${_}`);
          else if (jr.isSocket(D)) y.push(`--socket=${D.port}`);
          else if (D === Le.ipc) throw new Error("Transport kind ipc is not support for command executable");
          let S = Object.assign({}, g.options);
          if (S.cwd = S.cwd || p, D === void 0 || D === Le.stdio) {
            let C = cr.spawn(g.command, y, S);
            return !C || !C.pid ? Ki(C, `Launching server using command ${g.command} failed.`) : (c(C.stderr, this.outputChannel), this._serverProcess = C, this._isDetached = !!S.detached, Promise.resolve({ reader: new Fe.StreamMessageReader(C.stdout), writer: new Fe.StreamMessageWriter(C.stdin) }));
          } else {
            if (D === Le.pipe) return (0, Fe.createClientPipeTransport)(_).then((C) => {
              let T = cr.spawn(g.command, y, S);
              return !T || !T.pid ? Ki(T, `Launching server using command ${g.command} failed.`) : (this._serverProcess = T, this._isDetached = !!S.detached, c(T.stderr, this.outputChannel), a(T.stdout, this.outputChannel), C.onConnected().then((I) => ({ reader: I[0], writer: I[1] })));
            });
            if (jr.isSocket(D)) return (0, Fe.createClientSocketTransport)(D.port).then((C) => {
              let T = cr.spawn(g.command, y, S);
              return !T || !T.pid ? Ki(T, `Launching server using command ${g.command} failed.`) : (this._serverProcess = T, this._isDetached = !!S.detached, c(T.stderr, this.outputChannel), a(T.stdout, this.outputChannel), C.onConnected().then((I) => ({ reader: I[0], writer: I[1] })));
            });
          }
        }
        return Promise.reject(new Error("Unsupported server configuration " + JSON.stringify(u, null, 4)));
      }).finally(() => {
        this._serverProcess !== void 0 && this._serverProcess.on("exit", (p, g) => {
          p === 0 ? this.info("Server process exited successfully", void 0, false) : p !== null && this.error(`Server process exited with code ${p}.`, void 0, false), g !== null && this.error(`Server process exited with signal ${g}.`, void 0, false);
        });
      });
    }
    _getRuntimePath(e, t) {
      if (Hh.isAbsolute(e)) return e;
      let r = this._mainGetRootPath();
      if (r !== void 0) {
        let i = Hh.join(r, e);
        if ($h.existsSync(i)) return i;
      }
      if (t !== void 0) {
        let i = Hh.join(t, e);
        if ($h.existsSync(i)) return i;
      }
      return e;
    }
    _mainGetRootPath() {
      let e = Fr.workspace.workspaceFolders;
      if (!e || e.length === 0) return;
      let t = e[0];
      if (t.uri.scheme === "file") return t.uri.fsPath;
    }
    _getServerWorkingDir(e) {
      let t = e && e.cwd;
      return t || (t = this.clientOptions.workspaceFolder ? this.clientOptions.workspaceFolder.uri.fsPath : this._mainGetRootPath()), t ? new Promise((r) => {
        $h.lstat(t, (i, s) => {
          r(!i && s.isDirectory() ? t : void 0);
        });
      }) : Promise.resolve(void 0);
    }
  };
  tt.LanguageClient = Bh;
  var Vh = class {
    _client;
    _setting;
    _listeners;
    constructor(e, t) {
      this._client = e, this._setting = t, this._listeners = [];
    }
    start() {
      return Fr.workspace.onDidChangeConfiguration(this.onDidChangeConfiguration, this, this._listeners), this.onDidChangeConfiguration(), new Fr.Disposable(() => {
        this._client.needsStop() && this._client.stop();
      });
    }
    onDidChangeConfiguration() {
      let e = this._setting.indexOf("."), t = e >= 0 ? this._setting.substr(0, e) : this._setting, r = e >= 0 ? this._setting.substr(e + 1) : void 0, i = r ? Fr.workspace.getConfiguration(t).get(r, false) : Fr.workspace.getConfiguration(t);
      i && this._client.needsStart() ? this._client.start().catch((s) => this._client.error("Start failed after configuration change", s, "force")) : !i && this._client.needsStop() && this._client.stop().catch((s) => this._client.error("Stop failed after configuration change", s, "force"));
    }
  };
  tt.SettingMonitor = Vh;
  function Ki(n, e) {
    return n === null ? Promise.reject(e) : new Promise((t, r) => {
      n.on("error", (i) => {
        r(`${e} ${i}`);
      }), setImmediate(() => r(e));
    });
  }
});
var o0 = {};
Ba(o0, { activate: () => r0, deactivate: () => i0 });
module.exports = Yi(o0);
var Oa = Qi(require("fs")), ph = require("vscode");
var Nr = require("vscode"), hh = Qi(Ta()), _v;
((e) => e.type = new hh.RequestType("fs/stat"))(_v ||= {});
var vv;
((e) => e.type = new hh.RequestType("fs/readDir"))(vv ||= {});
function bv(n, e) {
  let t = [];
  return t.push(n.onRequest(vv.type, (r) => {
    let i = Nr.Uri.parse(r);
    return i.scheme === "file" && e.fileFs ? e.fileFs.readDirectory(r) : Nr.workspace.fs.readDirectory(i);
  })), t.push(n.onRequest(_v.type, (r) => {
    let i = Nr.Uri.parse(r);
    return i.scheme === "file" && e.fileFs ? e.fileFs.stat(r) : Nr.workspace.fs.stat(i);
  })), Nr.Disposable.from(...t);
}
function Cv() {
  function n(e) {
    if (!e.startsWith("file:")) throw new Error("fileRequestService can only handle file URLs");
  }
  return { stat(e) {
    return n(e), new Promise((t, r) => {
      let i = ph.Uri.parse(e);
      Oa.stat(i.fsPath, (s, o) => {
        if (s) return s.code === "ENOENT" ? t({ type: 0, ctime: -1, mtime: -1, size: -1 }) : r(s);
        let a = 0;
        o.isFile() ? a = 1 : o.isDirectory() ? a = 2 : o.isSymbolicLink() && (a = 64), t({ type: a, ctime: o.ctime.getTime(), mtime: o.mtime.getTime(), size: o.size });
      });
    });
  }, readDirectory(e) {
    return n(e), new Promise((t, r) => {
      let i = ph.Uri.parse(e).fsPath;
      Oa.readdir(i, { withFileTypes: true }, (s, o) => {
        if (s) return r(s);
        t(o.map((a) => a.isSymbolicLink() ? [a.name, 64] : a.isDirectory() ? [a.name, 2] : a.isFile() ? [a.name, 1] : [a.name, 0]));
      });
    });
  } };
}
var zb = require("vscode");
var K = require("vscode"), on = Qi(Ta());
var it = require("vscode");
var lO = { 975(n) {
  function e(i) {
    if (typeof i != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(i));
  }
  function t(i, s) {
    for (var o, a = "", c = 0, u = -1, d = 0, h = 0; h <= i.length; ++h) {
      if (h < i.length) o = i.charCodeAt(h);
      else {
        if (o === 47) break;
        o = 47;
      }
      if (o === 47) {
        if (!(u === h - 1 || d === 1)) if (u !== h - 1 && d === 2) {
          if (a.length < 2 || c !== 2 || a.charCodeAt(a.length - 1) !== 46 || a.charCodeAt(a.length - 2) !== 46) {
            if (a.length > 2) {
              var p = a.lastIndexOf("/");
              if (p !== a.length - 1) {
                p === -1 ? (a = "", c = 0) : c = (a = a.slice(0, p)).length - 1 - a.lastIndexOf("/"), u = h, d = 0;
                continue;
              }
            } else if (a.length === 2 || a.length === 1) {
              a = "", c = 0, u = h, d = 0;
              continue;
            }
          }
          s && (a.length > 0 ? a += "/.." : a = "..", c = 2);
        } else a.length > 0 ? a += "/" + i.slice(u + 1, h) : a = i.slice(u + 1, h), c = h - u - 1;
        u = h, d = 0;
      } else o === 46 && d !== -1 ? ++d : d = -1;
    }
    return a;
  }
  var r = { resolve: function() {
    for (var i, s = "", o = false, a = arguments.length - 1; a >= -1 && !o; a--) {
      var c;
      a >= 0 ? c = arguments[a] : (i === void 0 && (i = process.cwd()), c = i), e(c), c.length !== 0 && (s = c + "/" + s, o = c.charCodeAt(0) === 47);
    }
    return s = t(s, !o), o ? s.length > 0 ? "/" + s : "/" : s.length > 0 ? s : ".";
  }, normalize: function(i) {
    if (e(i), i.length === 0) return ".";
    var s = i.charCodeAt(0) === 47, o = i.charCodeAt(i.length - 1) === 47;
    return (i = t(i, !s)).length !== 0 || s || (i = "."), i.length > 0 && o && (i += "/"), s ? "/" + i : i;
  }, isAbsolute: function(i) {
    return e(i), i.length > 0 && i.charCodeAt(0) === 47;
  }, join: function() {
    if (arguments.length === 0) return ".";
    for (var i, s = 0; s < arguments.length; ++s) {
      var o = arguments[s];
      e(o), o.length > 0 && (i === void 0 ? i = o : i += "/" + o);
    }
    return i === void 0 ? "." : r.normalize(i);
  }, relative: function(i, s) {
    if (e(i), e(s), i === s || (i = r.resolve(i)) === (s = r.resolve(s))) return "";
    for (var o = 1; o < i.length && i.charCodeAt(o) === 47; ++o) ;
    for (var a = i.length, c = a - o, u = 1; u < s.length && s.charCodeAt(u) === 47; ++u) ;
    for (var d = s.length - u, h = c < d ? c : d, p = -1, g = 0; g <= h; ++g) {
      if (g === h) {
        if (d > h) {
          if (s.charCodeAt(u + g) === 47) return s.slice(u + g + 1);
          if (g === 0) return s.slice(u + g);
        } else c > h && (i.charCodeAt(o + g) === 47 ? p = g : g === 0 && (p = 0));
        break;
      }
      var y = i.charCodeAt(o + g);
      if (y !== s.charCodeAt(u + g)) break;
      y === 47 && (p = g);
    }
    var _ = "";
    for (g = o + p + 1; g <= a; ++g) g !== a && i.charCodeAt(g) !== 47 || (_.length === 0 ? _ += ".." : _ += "/..");
    return _.length > 0 ? _ + s.slice(u + p) : (u += p, s.charCodeAt(u) === 47 && ++u, s.slice(u));
  }, _makeLong: function(i) {
    return i;
  }, dirname: function(i) {
    if (e(i), i.length === 0) return ".";
    for (var s = i.charCodeAt(0), o = s === 47, a = -1, c = true, u = i.length - 1; u >= 1; --u) if ((s = i.charCodeAt(u)) === 47) {
      if (!c) {
        a = u;
        break;
      }
    } else c = false;
    return a === -1 ? o ? "/" : "." : o && a === 1 ? "//" : i.slice(0, a);
  }, basename: function(i, s) {
    if (s !== void 0 && typeof s != "string") throw new TypeError('"ext" argument must be a string');
    e(i);
    var o, a = 0, c = -1, u = true;
    if (s !== void 0 && s.length > 0 && s.length <= i.length) {
      if (s.length === i.length && s === i) return "";
      var d = s.length - 1, h = -1;
      for (o = i.length - 1; o >= 0; --o) {
        var p = i.charCodeAt(o);
        if (p === 47) {
          if (!u) {
            a = o + 1;
            break;
          }
        } else h === -1 && (u = false, h = o + 1), d >= 0 && (p === s.charCodeAt(d) ? --d === -1 && (c = o) : (d = -1, c = h));
      }
      return a === c ? c = h : c === -1 && (c = i.length), i.slice(a, c);
    }
    for (o = i.length - 1; o >= 0; --o) if (i.charCodeAt(o) === 47) {
      if (!u) {
        a = o + 1;
        break;
      }
    } else c === -1 && (u = false, c = o + 1);
    return c === -1 ? "" : i.slice(a, c);
  }, extname: function(i) {
    e(i);
    for (var s = -1, o = 0, a = -1, c = true, u = 0, d = i.length - 1; d >= 0; --d) {
      var h = i.charCodeAt(d);
      if (h !== 47) a === -1 && (c = false, a = d + 1), h === 46 ? s === -1 ? s = d : u !== 1 && (u = 1) : s !== -1 && (u = -1);
      else if (!c) {
        o = d + 1;
        break;
      }
    }
    return s === -1 || a === -1 || u === 0 || u === 1 && s === a - 1 && s === o + 1 ? "" : i.slice(s, a);
  }, format: function(i) {
    if (i === null || typeof i != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof i);
    return (function(s, o) {
      var a = o.dir || o.root, c = o.base || (o.name || "") + (o.ext || "");
      return a ? a === o.root ? a + c : a + "/" + c : c;
    })(0, i);
  }, parse: function(i) {
    e(i);
    var s = { root: "", dir: "", base: "", ext: "", name: "" };
    if (i.length === 0) return s;
    var o, a = i.charCodeAt(0), c = a === 47;
    c ? (s.root = "/", o = 1) : o = 0;
    for (var u = -1, d = 0, h = -1, p = true, g = i.length - 1, y = 0; g >= o; --g) if ((a = i.charCodeAt(g)) !== 47) h === -1 && (p = false, h = g + 1), a === 46 ? u === -1 ? u = g : y !== 1 && (y = 1) : u !== -1 && (y = -1);
    else if (!p) {
      d = g + 1;
      break;
    }
    return u === -1 || h === -1 || y === 0 || y === 1 && u === h - 1 && u === d + 1 ? h !== -1 && (s.base = s.name = d === 0 && c ? i.slice(1, h) : i.slice(d, h)) : (d === 0 && c ? (s.name = i.slice(1, u), s.base = i.slice(1, h)) : (s.name = i.slice(d, u), s.base = i.slice(d, h)), s.ext = i.slice(u, h)), d > 0 ? s.dir = i.slice(0, d - 1) : c && (s.dir = "/"), s;
  }, sep: "/", delimiter: ":", win32: null, posix: null };
  r.posix = r, n.exports = r;
} }, wv = {};
function zi(n) {
  var e = wv[n];
  if (e !== void 0) return e.exports;
  var t = wv[n] = { exports: {} };
  return lO[n](t, t.exports, zi), t.exports;
}
var Dv;
zi.d = (n, e) => {
  for (var t in e) zi.o(e, t) && !zi.o(n, t) && Object.defineProperty(n, t, { enumerable: true, get: e[t] });
}, zi.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e), typeof process == "object" ? Dv = process.platform === "win32" : typeof navigator == "object" && (Dv = navigator.userAgent.indexOf("Windows") >= 0);
var Sv = zi(975), Hs = Sv.posix || Sv, Ea = "/", xa;
(function(n) {
  n.joinPath = function(e, ...t) {
    return e.with({ path: Hs.join(e.path, ...t) });
  }, n.resolvePath = function(e, ...t) {
    let r = e.path, i = false;
    r[0] !== Ea && (r = Ea + r, i = true);
    let s = Hs.resolve(r, ...t);
    return i && s[0] === Ea && !e.authority && (s = s.substring(1)), e.with({ path: s });
  }, n.dirname = function(e) {
    if (e.path.length === 0 || e.path === Ea) return e;
    let t = Hs.dirname(e.path);
    return t.length === 1 && t.charCodeAt(0) === 46 && (t = ""), e.with({ path: t });
  }, n.basename = function(e) {
    return Hs.basename(e.path);
  }, n.extname = function(e) {
    return Hs.extname(e.path);
  };
})(xa || (xa = {}));
function Ov(n, e) {
  let t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
  Rv(i), Tv(t, r);
  let s = new it.EventEmitter();
  return e.push(it.extensions.onDidChange((o) => {
    let a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
    Tv(a, c), (Pv(a, t) || Pv(c, r)) && (t = a, r = c, s.fire());
  })), e.push(it.workspace.onDidChangeConfiguration((o) => {
    o.affectsConfiguration("html.customData") && (i.clear(), Rv(i), s.fire());
  })), e.push(it.workspace.onDidChangeTextDocument((o) => {
    let a = o.document.uri.toString();
    (r.has(a) || i.has(a)) && s.fire();
  })), { get uris() {
    return [...t].concat([...r], [...i]);
  }, get onDidChange() {
    return s.event;
  }, getContent(o) {
    let a = it.Uri.parse(o);
    return t.has(o) ? it.workspace.fs.readFile(a).then((c) => new n.TextDecoder().decode(c)) : it.workspace.openTextDocument(a).then((c) => c.getText());
  } };
}
function Pv(n, e) {
  if (n.size !== e.size) return true;
  for (let t of n) if (!e.has(t)) return true;
  return false;
}
function Ev(n) {
  return /^(?<scheme>\w[\w\d+.-]*):/.test(n);
}
function Rv(n) {
  let e = it.workspace.workspaceFolders, t = /* @__PURE__ */ new Set();
  if (!e) return t;
  let r = (i, s) => {
    if (Array.isArray(i)) for (let o of i) typeof o == "string" && (Ev(o) ? n.add(o) : n.add(xa.resolvePath(s, o).toString()));
  };
  for (let i = 0; i < e.length; i++) {
    let s = e[i].uri, a = it.workspace.getConfiguration("html", s).inspect("customData");
    a && (r(a.workspaceFolderValue, s), i === 0 && (it.workspace.workspaceFile && r(a.workspaceValue, it.workspace.workspaceFile), r(a.globalValue, s)));
  }
  return t;
}
function Tv(n, e) {
  for (let t of it.extensions.allAcrossExtensionHosts) {
    let r = t.packageJSON?.contributes?.html?.customData;
    if (Array.isArray(r)) for (let i of r) Ev(i) ? e.add(i) : n.add(it.Uri.joinPath(t.extensionUri, i).toString());
  }
}
var Ve = require("vscode");
function xv(n, e, t) {
  let r = [];
  Ve.workspace.onDidChangeTextDocument(c, null, r);
  let i = false, s = { autoQuote: false, autoClose: false };
  a(), Ve.window.onDidChangeActiveTextEditor(a, null, r);
  let o;
  r.push({ dispose: () => {
    o?.dispose();
  } });
  function a() {
    i = false;
    let h = Ve.window.activeTextEditor;
    if (!h) return;
    let p = h.document;
    if (!e.useAutoInsert(p.languageId)) return;
    let g = Ve.workspace.getConfiguration(void 0, p.uri);
    s.autoQuote = g.get("html.autoCreateQuotes") ?? false, s.autoClose = g.get("html.autoClosingTags") ?? false, i = s.autoQuote || s.autoClose;
  }
  function c({ document: h, contentChanges: p, reason: g }) {
    if (!i || p.length === 0 || g === Ve.TextDocumentChangeReason.Undo || g === Ve.TextDocumentChangeReason.Redo) return;
    let y = Ve.window.activeTextEditor && Ve.window.activeTextEditor.document;
    if (h !== y) return;
    o && o.dispose();
    let _ = p[p.length - 1];
    if (_.rangeLength === 0 && u(_.text)) {
      let D = _.text[_.text.length - 1];
      s.autoQuote && D === "=" ? d("autoQuote", h, _) : s.autoClose && (D === ">" || D === "/") && d("autoClose", h, _);
    }
  }
  function u(h) {
    return !/\n/.test(h);
  }
  function d(h, p, g) {
    let y = g.range.start, _ = p.version;
    o = t.timer.setTimeout(() => {
      let D = new Ve.Position(y.line, y.character + g.text.length);
      n(h, p, D).then((S) => {
        if (S && s[h]) {
          let C = Ve.window.activeTextEditor;
          if (C) {
            let T = C.document;
            if (p === T && T.version === _) {
              let I = C.selections;
              I.length && I.some((N) => N.active.isEqual(D)) ? C.insertSnippet(new Ve.SnippetString(S), I.map((N) => N.active)) : C.insertSnippet(new Ve.SnippetString(S), D);
            }
          }
        }
      }), o = void 0;
    }, 100);
  }
  return Ve.Disposable.from(...r);
}
var Us = require("vscode");
function Mv() {
  let n = new Us.EventEmitter(), e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set();
  function r() {
    let s = e, o = t;
    e = /* @__PURE__ */ new Set(), e.add("html"), t = /* @__PURE__ */ new Set(), t.add("html");
    for (let a of Us.extensions.allAcrossExtensionHosts) {
      let c = a.packageJSON?.contributes?.htmlLanguageParticipants;
      if (Array.isArray(c)) for (let u of c) {
        let d = u.languageId;
        typeof d == "string" && (e.add(d), u.autoInsert !== false && t.add(d));
      }
    }
    return !qv(e, s) || !qv(t, o);
  }
  r();
  let i = Us.extensions.onDidChange((s) => {
    r() && n.fire();
  });
  return { onDidChange: n.event, get documentSelector() {
    return Array.from(e);
  }, hasLanguage(s) {
    return e.has(s);
  }, useAutoInsert(s) {
    return t.has(s);
  }, dispose: () => i.dispose() };
}
function qv(n, e) {
  if (n.size !== e.size) return false;
  for (let t of n) if (!e.has(t)) return false;
  return true;
}
var gh;
((e) => e.type = new on.NotificationType("html/customDataChanged"))(gh ||= {});
var Nv;
((e) => e.type = new on.RequestType("html/customDataContent"))(Nv ||= {});
var jv;
((e) => e.type = new on.RequestType("html/autoInsert"))(jv ||= {});
var mh;
((e) => e.type = new on.RequestType("html/semanticTokens"))(mh ||= {});
var Fv;
((e) => e.type = new on.RequestType0("html/semanticTokenLegend"))(Fv ||= {});
var qa;
((t) => (t.linkedEditing = "editor.linkedEditing", t.formatEnable = "html.format.enable"))(qa ||= {});
var Lv = K.l10n.t("HTML Language Server");
async function Av(n, e, t) {
  let r = K.window.createOutputChannel(Lv, { log: true }), i = Mv();
  n.subscriptions.push(i);
  let s = await Iv(i, e, r, t), o = "html.promptForLinkedEditing";
  if (K.extensions.getExtension("formulahendry.auto-rename-tag") !== void 0 && n.globalState.get(o) !== false) {
    let c = K.workspace.getConfiguration("editor", { languageId: "html" });
    if (!c.get("linkedEditing") && !c.get("renameOnType")) {
      let u = K.window.onDidChangeActiveTextEditor(async (d) => {
        if (d && i.hasLanguage(d.document.languageId)) {
          n.globalState.update(o, false), u.dispose();
          let h = K.l10n.t("Configure");
          await K.window.showInformationMessage(K.l10n.t("VS Code now has built-in support for auto-renaming tags. Do you want to enable it?"), h) === h && K.commands.executeCommand("workbench.action.openSettings", qa.linkedEditing);
        }
      });
      n.subscriptions.push(u);
    }
  }
  let a;
  return i.onDidChange(() => {
    a && a.dispose(), a = t.timer.setTimeout(async () => {
      if (s) {
        r.appendLine("Extensions have changed, restarting HTML server..."), r.appendLine("");
        let c = s;
        s = void 0, await c.dispose(), s = await Iv(i, e, r, t);
      }
    }, 2e3);
  }), { dispose: async () => {
    a?.dispose(), await s?.dispose(), r.dispose();
  } };
}
async function Iv(n, e, t, r) {
  let i = [], s = n.documentSelector, o = { css: true, javascript: true }, a, c = { documentSelector: s, synchronize: { configurationSection: ["html", "css", "javascript", "js/ts"] }, initializationOptions: { embeddedLanguages: o, handledSchemas: ["file"], provideFormatter: false, customCapabilities: { rangeFormatting: { editLimit: 1e4 } } }, middleware: { provideCompletionItem(S, C, T, I, N) {
    function J(Xe) {
      let vt = Xe.range;
      vt instanceof K.Range && vt.end.isAfter(C) && vt.start.isBeforeOrEqual(C) && (Xe.range = { inserting: new K.Range(vt.start, C), replacing: vt });
    }
    function Q(Xe) {
      return Xe && (Array.isArray(Xe) ? Xe : Xe.items).forEach(J), Xe;
    }
    let te = (Xe) => Xe && Xe.then, Oe = N(S, C, T, I);
    return te(Oe) ? Oe.then(Q) : Q(Oe);
  } } };
  c.outputChannel = t;
  let u = e("html", Lv, c);
  u.registerProposedFeatures(), await u.start(), i.push(bv(u, r));
  let d = Ov(r, i);
  u.sendNotification(gh.type, d.uris), d.onDidChange(() => {
    u.sendNotification(gh.type, d.uris);
  }, void 0, i), i.push(u.onRequest(Nv.type, d.getContent));
  let p = xv((S, C, T) => {
    let I = { kind: S, textDocument: u.code2ProtocolConverter.asTextDocumentIdentifier(C), position: u.code2ProtocolConverter.asPosition(T) };
    return u.sendRequest(jv.type, I);
  }, n, r);
  i.push(p);
  let g = u.onTelemetry((S) => {
    r.telemetry?.sendTelemetryEvent(S.key, S.data);
  });
  i.push(g), y(), i.push({ dispose: () => a && a.dispose() }), i.push(K.workspace.onDidChangeConfiguration((S) => S.affectsConfiguration(qa.formatEnable) && y())), u.sendRequest(Fv.type).then((S) => {
    if (S) {
      let C = { provideDocumentSemanticTokens(T) {
        let I = { textDocument: u.code2ProtocolConverter.asTextDocumentIdentifier(T) };
        return u.sendRequest(mh.type, I).then((N) => N && new K.SemanticTokens(new Uint32Array(N)));
      }, provideDocumentRangeSemanticTokens(T, I) {
        let N = { textDocument: u.code2ProtocolConverter.asTextDocumentIdentifier(T), ranges: [u.code2ProtocolConverter.asRange(I)] };
        return u.sendRequest(mh.type, N).then((J) => J && new K.SemanticTokens(new Uint32Array(J)));
      } };
      i.push(K.languages.registerDocumentSemanticTokensProvider(s, C, new K.SemanticTokensLegend(S.types, S.modifiers)));
    }
  });
  function y() {
    let S = K.workspace.getConfiguration().get(qa.formatEnable);
    !S && a ? (a.dispose(), a = void 0) : S && !a && (a = K.languages.registerDocumentRangeFormattingEditProvider(s, { provideDocumentRangeFormattingEdits(C, T, I, N) {
      let J = K.workspace.getConfiguration("files", C), Q = { trimTrailingWhitespace: J.get("trimTrailingWhitespace"), trimFinalNewlines: J.get("trimFinalNewlines"), insertFinalNewline: J.get("insertFinalNewline") }, te = { textDocument: u.code2ProtocolConverter.asTextDocumentIdentifier(C), range: u.code2ProtocolConverter.asRange(T), options: u.code2ProtocolConverter.asFormattingOptions(I, Q) };
      return u.sendRequest(on.DocumentRangeFormattingRequest.type, te, N).then(u.protocol2CodeConverter.asTextEdits, (Oe) => (u.handleFailedRequest(on.DocumentRangeFormattingRequest.type, void 0, Oe, []), Promise.resolve([])));
    } }));
  }
  let _ = /^(\s*)(<(!(-(-\s*(#\w*)?)?)?)?)?$/, D = /^(\s*)(<(h(t(m(l)?)?)?)?)?$/;
  return i.push(K.languages.registerCompletionItemProvider(s, { provideCompletionItems(S, C) {
    let T = [], I = S.getText(new K.Range(new K.Position(C.line, 0), C)), N = I.match(_);
    if (N) {
      let Q = new K.Range(new K.Position(C.line, N[1].length), C), te = new K.CompletionItem("#region", K.CompletionItemKind.Snippet);
      te.range = Q, te.insertText = new K.SnippetString("<!-- #region $1-->"), te.documentation = K.l10n.t("Folding Region Start"), te.filterText = N[2], te.sortText = "za", T.push(te);
      let Oe = new K.CompletionItem("#endregion", K.CompletionItemKind.Snippet);
      Oe.range = Q, Oe.insertText = new K.SnippetString("<!-- #endregion -->"), Oe.documentation = K.l10n.t("Folding Region End"), Oe.filterText = N[2], Oe.sortText = "zb", T.push(Oe);
    }
    let J = I.match(D);
    if (J && S.getText(new K.Range(new K.Position(0, 0), C)).match(D)) {
      let Q = new K.Range(new K.Position(C.line, J[1].length), C), te = new K.CompletionItem("HTML sample", K.CompletionItemKind.Snippet);
      te.range = Q;
      let Oe = ["<!DOCTYPE html>", "<html>", "<head>", "	<meta charset='utf-8'>", "	<meta http-equiv='X-UA-Compatible' content='IE=edge'>", "	<title>${1:Page Title}</title>", "	<meta name='viewport' content='width=device-width, initial-scale=1'>", "	<link rel='stylesheet' type='text/css' media='screen' href='${2:main.css}'>", "	<script src='${3:main.js}'><\/script>", "</head>", "<body>", "	$0", "</body>", "</html>"].join(`
`);
      te.insertText = new K.SnippetString(Oe), te.documentation = K.l10n.t("Simple HTML5 starting point"), te.filterText = J[2], te.sortText = "za", T.push(te);
    }
    return T;
  } })), { dispose: async () => {
    await u.stop(), i.forEach((S) => S.dispose()), a?.dispose();
  } };
}
var Xs = Qi(Ub()), Kb = Qi(require("fs"));
var t0 = { dispose: () => {
} }, n0 = (n, e, t) => t0, Gs = class {
  constructor(e, t) {
    this.telemetryLevel = "off";
    this.onDidChangeTelemetryLevel = n0;
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
var Wb, Ua;
async function r0(n) {
  let e = s0(n);
  Wb = new Gs("");
  let t = `./server/${e.main.indexOf("/dist/") !== -1 ? "dist" : "out"}/node/htmlServerMain`, r = n.asAbsolutePath(t), i = { execArgv: ["--nolazy", "--inspect=" + (8e3 + Math.round(Math.random() * 999))] }, s = { run: { module: r, transport: Xs.TransportKind.ipc }, debug: { module: r, transport: Xs.TransportKind.ipc, options: i } }, o = (c, u, d) => new Xs.LanguageClient(c, u, s, d), a = { setTimeout(c, u, ...d) {
    let h = setTimeout(c, u, ...d);
    return { dispose: () => clearTimeout(h) };
  } };
  process.env.VSCODE_L10N_BUNDLE_LOCATION = zb.l10n.uri?.toString() ?? "", Ua = await Av(n, o, { fileFs: Cv(), TextDecoder, telemetry: Wb, timer: a });
}
async function i0() {
  Ua && (await Ua.dispose(), Ua = void 0);
}
function s0(n) {
  let e = n.asAbsolutePath("./package.json");
  try {
    return JSON.parse(Kb.readFileSync(e).toString());
  } catch (t) {
    return console.log(`Problems reading ${e}: ${t}`), { name: "", version: "", main: "" };
  }
}
