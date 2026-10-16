"use strict";
var Xb = Object.create;
var eo = Object.defineProperty;
var Jb = Object.getOwnPropertyDescriptor;
var Qb = Object.getOwnPropertyNames;
var Yb = Object.getPrototypeOf, Zb = Object.prototype.hasOwnProperty;
var rp = (n2, e) => () => (n2 && (e = n2(n2 = 0)), e);
var R = (n2, e) => () => (e || n2((e = { exports: {} }).exports, e), e.exports), Ja = (n2, e) => {
  for (var t in e) eo(n2, t, { get: e[t], enumerable: true });
}, ip = (n2, e, t, r) => {
  if (e && typeof e == "object" || typeof e == "function") for (let i of Qb(e)) !Zb.call(n2, i) && i !== t && eo(n2, i, { get: () => e[i], enumerable: !(r = Jb(e, i)) || r.enumerable });
  return n2;
};
var gr = (n2, e, t) => (t = n2 != null ? Xb(Yb(n2)) : {}, ip(e || !n2 || !n2.__esModule ? eo(t, "default", { value: n2, enumerable: true }) : t, n2)), es = (n2) => ip(eo({}, "__esModule", { value: true }), n2);
var At = R((Lt) => {
  "use strict";
  Object.defineProperty(Lt, "__esModule", { value: true });
  Lt.boolean = eC;
  Lt.string = sp;
  Lt.number = tC;
  Lt.error = nC;
  Lt.func = op;
  Lt.array = ap;
  Lt.stringArray = rC;
  Lt.typedArray = iC;
  Lt.thenable = cp;
  Lt.asPromise = sC;
  function eC(n2) {
    return n2 === true || n2 === false;
  }
  function sp(n2) {
    return typeof n2 == "string" || n2 instanceof String;
  }
  function tC(n2) {
    return typeof n2 == "number" || n2 instanceof Number;
  }
  function nC(n2) {
    return n2 instanceof Error;
  }
  function op(n2) {
    return typeof n2 == "function";
  }
  function ap(n2) {
    return Array.isArray(n2);
  }
  function rC(n2) {
    return ap(n2) && n2.every((e) => sp(e));
  }
  function iC(n2, e) {
    return Array.isArray(n2) && n2.every(e);
  }
  function cp(n2) {
    return n2 && op(n2.then);
  }
  function sC(n2) {
    return n2 instanceof Promise ? n2 : cp(n2) ? new Promise((e, t) => {
      n2.then((r) => e(r), (r) => t(r));
    }) : Promise.resolve(n2);
  }
});
var hi = R((Ln) => {
  "use strict";
  Object.defineProperty(Ln, "__esModule", { value: true });
  Ln.boolean = oC;
  Ln.string = up;
  Ln.number = aC;
  Ln.error = cC;
  Ln.func = uC;
  Ln.array = lp;
  Ln.stringArray = lC;
  function oC(n2) {
    return n2 === true || n2 === false;
  }
  function up(n2) {
    return typeof n2 == "string" || n2 instanceof String;
  }
  function aC(n2) {
    return typeof n2 == "number" || n2 instanceof Number;
  }
  function cC(n2) {
    return n2 instanceof Error;
  }
  function uC(n2) {
    return typeof n2 == "function";
  }
  function lp(n2) {
    return Array.isArray(n2);
  }
  function lC(n2) {
    return lp(n2) && n2.every((e) => up(e));
  }
});
var Cc = R((W) => {
  "use strict";
  var dC = W && W.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), fC = W && W.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), hC = W && W.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && dC(t, e, r[i]);
      return fC(t, e), t;
    };
  })();
  Object.defineProperty(W, "__esModule", { value: true });
  W.Message = W.NotificationType9 = W.NotificationType8 = W.NotificationType7 = W.NotificationType6 = W.NotificationType5 = W.NotificationType4 = W.NotificationType3 = W.NotificationType2 = W.NotificationType1 = W.NotificationType0 = W.NotificationType = W.RequestType9 = W.RequestType8 = W.RequestType7 = W.RequestType6 = W.RequestType5 = W.RequestType4 = W.RequestType3 = W.RequestType2 = W.RequestType1 = W.RequestType = W.RequestType0 = W.AbstractMessageSignature = W.ParameterStructures = W.ResponseError = W.ErrorCodes = void 0;
  var $r = hC(hi()), Qa;
  (function(n2) {
    n2.ParseError = -32700, n2.InvalidRequest = -32600, n2.MethodNotFound = -32601, n2.InvalidParams = -32602, n2.InternalError = -32603, n2.jsonrpcReservedErrorRangeStart = -32099, n2.serverErrorStart = -32099, n2.MessageWriteError = -32099, n2.MessageReadError = -32098, n2.PendingResponseRejected = -32097, n2.ConnectionInactive = -32096, n2.ServerNotInitialized = -32002, n2.UnknownErrorCode = -32001, n2.jsonrpcReservedErrorRangeEnd = -32e3, n2.serverErrorEnd = -32e3;
  })(Qa || (W.ErrorCodes = Qa = {}));
  var Ya = class n2 extends Error {
    code;
    data;
    constructor(e, t, r) {
      super(t), this.code = $r.number(e) ? e : Qa.UnknownErrorCode, this.data = r, Object.setPrototypeOf(this, n2.prototype);
    }
    toJson() {
      let e = { code: this.code, message: this.message };
      return this.data !== void 0 && (e.data = this.data), e;
    }
  };
  W.ResponseError = Ya;
  var mr = class n2 {
    kind;
    static auto = new n2("auto");
    static byPosition = new n2("byPosition");
    static byName = new n2("byName");
    constructor(e) {
      this.kind = e;
    }
    static is(e) {
      return e === n2.auto || e === n2.byName || e === n2.byPosition;
    }
    toString() {
      return this.kind;
    }
  };
  W.ParameterStructures = mr;
  var Ce = class {
    method;
    numberOfParams;
    constructor(e, t) {
      this.method = e, this.numberOfParams = t;
    }
    get parameterStructures() {
      return mr.auto;
    }
  };
  W.AbstractMessageSignature = Ce;
  var Za = class extends Ce {
    _;
    constructor(e) {
      super(e, 0);
    }
  };
  W.RequestType0 = Za;
  var ec = class extends Ce {
    _parameterStructures;
    _;
    constructor(e, t = mr.auto) {
      super(e, 1), this._parameterStructures = t;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  };
  W.RequestType = ec;
  var tc = class extends Ce {
    _parameterStructures;
    _;
    constructor(e, t = mr.auto) {
      super(e, 1), this._parameterStructures = t;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  };
  W.RequestType1 = tc;
  var nc = class extends Ce {
    _;
    constructor(e) {
      super(e, 2);
    }
  };
  W.RequestType2 = nc;
  var rc = class extends Ce {
    _;
    constructor(e) {
      super(e, 3);
    }
  };
  W.RequestType3 = rc;
  var ic = class extends Ce {
    _;
    constructor(e) {
      super(e, 4);
    }
  };
  W.RequestType4 = ic;
  var sc = class extends Ce {
    _;
    constructor(e) {
      super(e, 5);
    }
  };
  W.RequestType5 = sc;
  var oc = class extends Ce {
    _;
    constructor(e) {
      super(e, 6);
    }
  };
  W.RequestType6 = oc;
  var ac = class extends Ce {
    _;
    constructor(e) {
      super(e, 7);
    }
  };
  W.RequestType7 = ac;
  var cc = class extends Ce {
    _;
    constructor(e) {
      super(e, 8);
    }
  };
  W.RequestType8 = cc;
  var uc = class extends Ce {
    _;
    constructor(e) {
      super(e, 9);
    }
  };
  W.RequestType9 = uc;
  var lc = class extends Ce {
    _parameterStructures;
    _;
    constructor(e, t = mr.auto) {
      super(e, 1), this._parameterStructures = t;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  };
  W.NotificationType = lc;
  var dc = class extends Ce {
    _;
    constructor(e) {
      super(e, 0);
    }
  };
  W.NotificationType0 = dc;
  var fc = class extends Ce {
    _parameterStructures;
    _;
    constructor(e, t = mr.auto) {
      super(e, 1), this._parameterStructures = t;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  };
  W.NotificationType1 = fc;
  var hc = class extends Ce {
    _;
    constructor(e) {
      super(e, 2);
    }
  };
  W.NotificationType2 = hc;
  var pc = class extends Ce {
    _;
    constructor(e) {
      super(e, 3);
    }
  };
  W.NotificationType3 = pc;
  var gc = class extends Ce {
    _;
    constructor(e) {
      super(e, 4);
    }
  };
  W.NotificationType4 = gc;
  var mc = class extends Ce {
    _;
    constructor(e) {
      super(e, 5);
    }
  };
  W.NotificationType5 = mc;
  var _c = class extends Ce {
    _;
    constructor(e) {
      super(e, 6);
    }
  };
  W.NotificationType6 = _c;
  var yc = class extends Ce {
    _;
    constructor(e) {
      super(e, 7);
    }
  };
  W.NotificationType7 = yc;
  var vc = class extends Ce {
    _;
    constructor(e) {
      super(e, 8);
    }
  };
  W.NotificationType8 = vc;
  var bc = class extends Ce {
    _;
    constructor(e) {
      super(e, 9);
    }
  };
  W.NotificationType9 = bc;
  var dp;
  (function(n2) {
    function e(i) {
      let s = i;
      return s && $r.string(s.method) && ($r.string(s.id) || $r.number(s.id));
    }
    n2.isRequest = e;
    function t(i) {
      let s = i;
      return s && $r.string(s.method) && i.id === void 0;
    }
    n2.isNotification = t;
    function r(i) {
      let s = i;
      return s && (s.result !== void 0 || !!s.error) && ($r.string(s.id) || $r.number(s.id) || s.id === null);
    }
    n2.isResponse = r;
  })(dp || (W.Message = dp = {}));
});
var Dc = R((_r) => {
  "use strict";
  Object.defineProperty(_r, "__esModule", { value: true });
  _r.LRUCache = _r.LinkedMap = _r.Touch = void 0;
  var st;
  (function(n2) {
    n2.None = 0, n2.First = 1, n2.AsOld = n2.First, n2.Last = 2, n2.AsNew = n2.Last;
  })(st || (_r.Touch = st = {}));
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
    get(e, t = st.None) {
      let r = this._map.get(e);
      if (r) return t !== st.None && this.touch(r, t), r.value;
    }
    set(e, t, r = st.None) {
      let i = this._map.get(e);
      if (i) i.value = t, r !== st.None && this.touch(i, r);
      else {
        switch (i = { key: e, value: t, next: void 0, previous: void 0 }, r) {
          case st.None:
            this.addItemLast(i);
            break;
          case st.First:
            this.addItemFirst(i);
            break;
          case st.Last:
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
      if (!(t !== st.First && t !== st.Last)) {
        if (t === st.First) {
          if (e === this._head) return;
          let r = e.next, i = e.previous;
          e === this._tail ? (i.next = void 0, this._tail = i) : (r.previous = i, i.next = r), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
        } else if (t === st.Last) {
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
  _r.LinkedMap = to;
  var wc = class extends to {
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
    get(e, t = st.AsNew) {
      return super.get(e, t);
    }
    peek(e) {
      return super.get(e, st.None);
    }
    set(e, t) {
      return super.set(e, t, st.Last), this.checkTrim(), this;
    }
    checkTrim() {
      this.size > this._limit && this.trimOld(Math.round(this._limit * this._ratio));
    }
  };
  _r.LRUCache = wc;
});
var hp = R((no) => {
  "use strict";
  Object.defineProperty(no, "__esModule", { value: true });
  no.Disposable = void 0;
  var fp;
  (function(n2) {
    function e(t) {
      return { dispose: t };
    }
    n2.create = e;
  })(fp || (no.Disposable = fp = {}));
});
var yr = R((Rc) => {
  "use strict";
  Object.defineProperty(Rc, "__esModule", { value: true });
  var Sc;
  function Pc() {
    if (Sc === void 0) throw new Error("No runtime abstraction layer installed");
    return Sc;
  }
  (function(n2) {
    function e(t) {
      if (t === void 0) throw new Error("No runtime abstraction layer provided");
      Sc = t;
    }
    n2.install = e;
  })(Pc || (Pc = {}));
  Rc.default = Pc;
});
var pi = R((vr) => {
  "use strict";
  var pC = vr && vr.__importDefault || function(n2) {
    return n2 && n2.__esModule ? n2 : { default: n2 };
  };
  Object.defineProperty(vr, "__esModule", { value: true });
  vr.Emitter = vr.Event = void 0;
  var gC = pC(yr()), pp;
  (function(n2) {
    let e = { dispose() {
    } };
    n2.None = function() {
      return e;
    };
  })(pp || (vr.Event = pp = {}));
  var Tc = class {
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
  }, Oc = class n2 {
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
        this._callbacks || (this._callbacks = new Tc()), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(e, t);
        let i = { dispose: () => {
          this._callbacks && (this._callbacks.remove(e, t), i.dispose = n2._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this));
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
  vr.Emitter = Oc;
});
var so = R((yt) => {
  "use strict";
  var mC = yt && yt.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), _C = yt && yt.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), yC = yt && yt.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && mC(t, e, r[i]);
      return _C(t, e), t;
    };
  })(), vC = yt && yt.__importDefault || function(n2) {
    return n2 && n2.__esModule ? n2 : { default: n2 };
  };
  Object.defineProperty(yt, "__esModule", { value: true });
  yt.CancellationTokenSource = yt.CancellationToken = void 0;
  var bC = vC(yr()), CC = yC(hi()), Ec = pi(), ro;
  (function(n2) {
    n2.None = Object.freeze({ isCancellationRequested: false, onCancellationRequested: Ec.Event.None }), n2.Cancelled = Object.freeze({ isCancellationRequested: true, onCancellationRequested: Ec.Event.None });
    function e(t) {
      let r = t;
      return r && (r === n2.None || r === n2.Cancelled || CC.boolean(r.isCancellationRequested) && !!r.onCancellationRequested);
    }
    n2.is = e;
  })(ro || (yt.CancellationToken = ro = {}));
  var wC = Object.freeze(function(n2, e) {
    let t = (0, bC.default)().timer.setTimeout(n2.bind(e), 0);
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
      return this._isCancelled ? wC : (this._emitter || (this._emitter = new Ec.Emitter()), this._emitter.event);
    }
    dispose() {
      this._emitter && (this._emitter.dispose(), this._emitter = void 0);
    }
  }, qc = class {
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
  yt.CancellationTokenSource = qc;
});
var gp = R((gi) => {
  "use strict";
  Object.defineProperty(gi, "__esModule", { value: true });
  gi.SharedArrayReceiverStrategy = gi.SharedArraySenderStrategy = void 0;
  var DC = so(), ts;
  (function(n2) {
    n2.Continue = 0, n2.Cancelled = 1;
  })(ts || (ts = {}));
  var xc = class {
    buffers;
    constructor() {
      this.buffers = /* @__PURE__ */ new Map();
    }
    enableCancellation(e) {
      if (e.id === null) return;
      let t = new SharedArrayBuffer(4), r = new Int32Array(t, 0, 1);
      r[0] = ts.Continue, this.buffers.set(e.id, t), e.$cancellationData = t;
    }
    async sendCancellation(e, t) {
      let r = this.buffers.get(t);
      if (r === void 0) return;
      let i = new Int32Array(r, 0, 1);
      Atomics.store(i, 0, ts.Cancelled);
    }
    cleanup(e) {
      this.buffers.delete(e);
    }
    dispose() {
      this.buffers.clear();
    }
  };
  gi.SharedArraySenderStrategy = xc;
  var Mc = class {
    data;
    constructor(e) {
      this.data = new Int32Array(e, 0, 1);
    }
    get isCancellationRequested() {
      return Atomics.load(this.data, 0) === ts.Cancelled;
    }
    get onCancellationRequested() {
      throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events");
    }
  }, Ic = class {
    token;
    constructor(e) {
      this.token = new Mc(e);
    }
    cancel() {
    }
    dispose() {
    }
  }, Nc = class {
    kind = "request";
    createCancellationTokenSource(e) {
      let t = e.$cancellationData;
      return t === void 0 ? new DC.CancellationTokenSource() : new Ic(t);
    }
  };
  gi.SharedArrayReceiverStrategy = Nc;
});
var Fc = R((mi) => {
  "use strict";
  var SC = mi && mi.__importDefault || function(n2) {
    return n2 && n2.__esModule ? n2 : { default: n2 };
  };
  Object.defineProperty(mi, "__esModule", { value: true });
  mi.Semaphore = void 0;
  var PC = SC(yr()), jc = class {
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
  mi.Semaphore = jc;
});
var _p = R((ot) => {
  "use strict";
  var RC = ot && ot.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), TC = ot && ot.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), OC = ot && ot.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && RC(t, e, r[i]);
      return TC(t, e), t;
    };
  })(), EC = ot && ot.__importDefault || function(n2) {
    return n2 && n2.__esModule ? n2 : { default: n2 };
  };
  Object.defineProperty(ot, "__esModule", { value: true });
  ot.ReadableStreamMessageReader = ot.AbstractMessageReader = ot.MessageReader = void 0;
  var Ac = EC(yr()), _i = OC(hi()), Lc = pi(), qC = Fc(), mp;
  (function(n2) {
    function e(t) {
      let r = t;
      return r && _i.func(r.listen) && _i.func(r.dispose) && _i.func(r.onError) && _i.func(r.onClose) && _i.func(r.onPartialMessage);
    }
    n2.is = e;
  })(mp || (ot.MessageReader = mp = {}));
  var oo = class {
    errorEmitter;
    closeEmitter;
    partialMessageEmitter;
    constructor() {
      this.errorEmitter = new Lc.Emitter(), this.closeEmitter = new Lc.Emitter(), this.partialMessageEmitter = new Lc.Emitter();
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
      return e instanceof Error ? e : new Error(`Reader received error. Reason: ${_i.string(e.message) ? e.message : "unknown"}`);
    }
  };
  ot.AbstractMessageReader = oo;
  var kc;
  (function(n2) {
    function e(t) {
      let r, i, s, o = /* @__PURE__ */ new Map(), a, c = /* @__PURE__ */ new Map();
      if (t === void 0 || typeof t == "string") r = t ?? "utf-8";
      else {
        if (r = t.charset ?? "utf-8", t.contentDecoder !== void 0 && (s = t.contentDecoder, o.set(s.name, s)), t.contentDecoders !== void 0) for (let l of t.contentDecoders) o.set(l.name, l);
        if (t.contentTypeDecoder !== void 0 && (a = t.contentTypeDecoder, c.set(a.name, a)), t.contentTypeDecoders !== void 0) for (let l of t.contentTypeDecoders) c.set(l.name, l);
      }
      return a === void 0 && (a = (0, Ac.default)().applicationJson.decoder, c.set(a.name, a)), { charset: r, contentDecoder: s, contentDecoders: o, contentTypeDecoder: a, contentTypeDecoders: c };
    }
    n2.fromOptions = e;
  })(kc || (kc = {}));
  var $c = class extends oo {
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
      super(), this.readable = e, this.options = kc.fromOptions(t), this.buffer = (0, Ac.default)().messageBuffer.create(this.options.charset), this._partialMessageTimeout = 1e4, this.nextMessageLength = -1, this.messageToken = 0, this.readSemaphore = new qC.Semaphore(1);
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
      this.clearPartialMessageTimer(), !(this._partialMessageTimeout <= 0) && (this.partialMessageTimer = (0, Ac.default)().timer.setTimeout((e, t) => {
        this.partialMessageTimer = void 0, e === this.messageToken && (this.firePartialMessage({ messageToken: e, waitingTime: t }), this.setPartialMessageTimer());
      }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout));
    }
  };
  ot.ReadableStreamMessageReader = $c;
});
var wp = R((at) => {
  "use strict";
  var xC = at && at.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), MC = at && at.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), IC = at && at.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && xC(t, e, r[i]);
      return MC(t, e), t;
    };
  })(), NC = at && at.__importDefault || function(n2) {
    return n2 && n2.__esModule ? n2 : { default: n2 };
  };
  Object.defineProperty(at, "__esModule", { value: true });
  at.WriteableStreamMessageWriter = at.AbstractMessageWriter = at.MessageWriter = void 0;
  var yp = NC(yr()), ns = IC(hi()), jC = Fc(), vp = pi(), FC = "Content-Length: ", bp = `\r
`, Cp;
  (function(n2) {
    function e(t) {
      let r = t;
      return r && ns.func(r.dispose) && ns.func(r.onClose) && ns.func(r.onError) && ns.func(r.write);
    }
    n2.is = e;
  })(Cp || (at.MessageWriter = Cp = {}));
  var ao = class {
    errorEmitter;
    closeEmitter;
    constructor() {
      this.errorEmitter = new vp.Emitter(), this.closeEmitter = new vp.Emitter();
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
      return e instanceof Error ? e : new Error(`Writer received error. Reason: ${ns.string(e.message) ? e.message : "unknown"}`);
    }
  };
  at.AbstractMessageWriter = ao;
  var Uc;
  (function(n2) {
    function e(t) {
      return t === void 0 || typeof t == "string" ? { charset: t ?? "utf-8", contentTypeEncoder: (0, yp.default)().applicationJson.encoder } : { charset: t.charset ?? "utf-8", contentEncoder: t.contentEncoder, contentTypeEncoder: t.contentTypeEncoder ?? (0, yp.default)().applicationJson.encoder };
    }
    n2.fromOptions = e;
  })(Uc || (Uc = {}));
  var Hc = class extends ao {
    writable;
    options;
    errorCount;
    writeSemaphore;
    constructor(e, t) {
      super(), this.writable = e, this.options = Uc.fromOptions(t), this.errorCount = 0, this.writeSemaphore = new jC.Semaphore(1), this.writable.onError((r) => this.fireError(r)), this.writable.onClose(() => this.fireClose());
    }
    async write(e) {
      return this.writeSemaphore.lock(async () => this.options.contentTypeEncoder.encode(e, this.options).then((r) => this.options.contentEncoder !== void 0 ? this.options.contentEncoder.encode(r) : r).then((r) => {
        let i = [];
        return i.push(FC, r.byteLength.toString(), bp), i.push(bp), this.doWrite(e, i, r);
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
  at.WriteableStreamMessageWriter = Hc;
});
var Dp = R((co) => {
  "use strict";
  Object.defineProperty(co, "__esModule", { value: true });
  co.AbstractMessageBuffer = void 0;
  var LC = 13, AC = 10, kC = `\r
`, Wc = class {
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
        s += l.byteLength, r++;
      }
      if (t !== 4) return;
      let o = this._read(s + i), a = /* @__PURE__ */ new Map(), c = this.toString(o, "ascii").split(kC);
      if (c.length < 2) return a;
      for (let l = 0; l < c.length - 2; l++) {
        let f = c[l], h = f.indexOf(":");
        if (h === -1) throw new Error(`Message header must separate key and value using ':'
${f}`);
        let p = f.substr(0, h), g = f.substr(h + 1).trim();
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
  co.AbstractMessageBuffer = Wc;
});
var Tp = R((K) => {
  "use strict";
  var $C = K && K.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), UC = K && K.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), HC = K && K.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && $C(t, e, r[i]);
      return UC(t, e), t;
    };
  })(), WC = K && K.__importDefault || function(n2) {
    return n2 && n2.__esModule ? n2 : { default: n2 };
  };
  Object.defineProperty(K, "__esModule", { value: true });
  K.ConnectionOptions = K.MessageStrategy = K.CancellationStrategy = K.CancellationSenderStrategy = K.CancellationReceiverStrategy = K.RequestCancellationReceiverStrategy = K.IdCancellationReceiverStrategy = K.ConnectionStrategy = K.ConnectionError = K.ConnectionErrors = K.LogTraceNotification = K.SetTraceNotification = K.TraceFormat = K.TraceValues = K.TraceValue = K.Trace = K.NullLogger = K.ProgressType = K.ProgressToken = void 0;
  K.createMessageConnection = zC;
  var Sp = WC(yr()), Me = HC(hi()), X = Cc(), Pp = Dc(), rs = pi(), zc = so(), os;
  (function(n2) {
    n2.type = new X.NotificationType("$/cancelRequest");
  })(os || (os = {}));
  var Kc;
  (function(n2) {
    function e(t) {
      return typeof t == "string" || typeof t == "number";
    }
    n2.is = e;
  })(Kc || (K.ProgressToken = Kc = {}));
  var is;
  (function(n2) {
    n2.type = new X.NotificationType("$/progress");
  })(is || (is = {}));
  var Bc = class {
    __;
    _pr;
    constructor() {
    }
  };
  K.ProgressType = Bc;
  var Vc;
  (function(n2) {
    function e(t) {
      return Me.func(t);
    }
    n2.is = e;
  })(Vc || (Vc = {}));
  K.NullLogger = Object.freeze({ error: () => {
  }, warn: () => {
  }, info: () => {
  }, log: () => {
  } });
  var le;
  (function(n2) {
    n2[n2.Off = 0] = "Off", n2[n2.Messages = 1] = "Messages", n2[n2.Compact = 2] = "Compact", n2[n2.Verbose = 3] = "Verbose";
  })(le || (K.Trace = le = {}));
  var Gc;
  (function(n2) {
    n2.Off = "off", n2.Messages = "messages", n2.Compact = "compact", n2.Verbose = "verbose";
  })(Gc || (K.TraceValue = Gc = {}));
  K.TraceValues = Gc;
  (function(n2) {
    function e(r) {
      if (!Me.string(r)) return n2.Off;
      switch (r = r.toLowerCase(), r) {
        case "off":
          return n2.Off;
        case "messages":
          return n2.Messages;
        case "compact":
          return n2.Compact;
        case "verbose":
          return n2.Verbose;
        default:
          return n2.Off;
      }
    }
    n2.fromString = e;
    function t(r) {
      switch (r) {
        case n2.Off:
          return "off";
        case n2.Messages:
          return "messages";
        case n2.Compact:
          return "compact";
        case n2.Verbose:
          return "verbose";
        default:
          return "off";
      }
    }
    n2.toString = t;
  })(le || (K.Trace = le = {}));
  var Rt;
  (function(n2) {
    n2.Text = "text", n2.JSON = "json";
  })(Rt || (K.TraceFormat = Rt = {}));
  (function(n2) {
    function e(t) {
      return Me.string(t) ? (t = t.toLowerCase(), t === "json" ? n2.JSON : n2.Text) : n2.Text;
    }
    n2.fromString = e;
  })(Rt || (K.TraceFormat = Rt = {}));
  var Xc;
  (function(n2) {
    n2.type = new X.NotificationType("$/setTrace");
  })(Xc || (K.SetTraceNotification = Xc = {}));
  var uo;
  (function(n2) {
    n2.type = new X.NotificationType("$/logTrace");
  })(uo || (K.LogTraceNotification = uo = {}));
  var ss;
  (function(n2) {
    n2[n2.Closed = 1] = "Closed", n2[n2.Disposed = 2] = "Disposed", n2[n2.AlreadyListening = 3] = "AlreadyListening";
  })(ss || (K.ConnectionErrors = ss = {}));
  var yi = class n2 extends Error {
    code;
    constructor(e, t) {
      super(t), this.code = e, Object.setPrototypeOf(this, n2.prototype);
    }
  };
  K.ConnectionError = yi;
  var Jc;
  (function(n2) {
    function e(t) {
      let r = t;
      return r && Me.func(r.cancelUndispatched);
    }
    n2.is = e;
  })(Jc || (K.ConnectionStrategy = Jc = {}));
  var lo;
  (function(n2) {
    function e(t) {
      let r = t;
      return r && (r.kind === void 0 || r.kind === "id") && Me.func(r.createCancellationTokenSource) && (r.dispose === void 0 || Me.func(r.dispose));
    }
    n2.is = e;
  })(lo || (K.IdCancellationReceiverStrategy = lo = {}));
  var Qc;
  (function(n2) {
    function e(t) {
      let r = t;
      return r && r.kind === "request" && Me.func(r.createCancellationTokenSource) && (r.dispose === void 0 || Me.func(r.dispose));
    }
    n2.is = e;
  })(Qc || (K.RequestCancellationReceiverStrategy = Qc = {}));
  var fo;
  (function(n2) {
    n2.Message = Object.freeze({ createCancellationTokenSource(t) {
      return new zc.CancellationTokenSource();
    } });
    function e(t) {
      return lo.is(t) || Qc.is(t);
    }
    n2.is = e;
  })(fo || (K.CancellationReceiverStrategy = fo = {}));
  var ho;
  (function(n2) {
    n2.Message = Object.freeze({ sendCancellation(t, r) {
      return t.sendNotification(os.type, { id: r });
    }, cleanup(t) {
    } });
    function e(t) {
      let r = t;
      return r && Me.func(r.sendCancellation) && Me.func(r.cleanup);
    }
    n2.is = e;
  })(ho || (K.CancellationSenderStrategy = ho = {}));
  var po;
  (function(n2) {
    n2.Message = Object.freeze({ receiver: fo.Message, sender: ho.Message });
    function e(t) {
      let r = t;
      return r && fo.is(r.receiver) && ho.is(r.sender);
    }
    n2.is = e;
  })(po || (K.CancellationStrategy = po = {}));
  var go;
  (function(n2) {
    function e(t) {
      let r = t;
      return r && Me.func(r.handleMessage);
    }
    n2.is = e;
  })(go || (K.MessageStrategy = go = {}));
  var Rp;
  (function(n2) {
    function e(t) {
      let r = t;
      return r && (po.is(r.cancellationStrategy) || Jc.is(r.connectionStrategy) || go.is(r.messageStrategy) || Me.number(r.maxParallelism));
    }
    n2.is = e;
  })(Rp || (K.ConnectionOptions = Rp = {}));
  var Kt;
  (function(n2) {
    n2[n2.New = 1] = "New", n2[n2.Listening = 2] = "Listening", n2[n2.Closed = 3] = "Closed", n2[n2.Disposed = 4] = "Disposed";
  })(Kt || (Kt = {}));
  function zC(n2, e, t, r) {
    let i = t !== void 0 ? t : K.NullLogger, s = 0, o = 0, a = 0, c = "2.0", l = r?.maxParallelism ?? -1, f = 0, h, p = /* @__PURE__ */ new Map(), g, _ = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), D, T = new Pp.LinkedMap(), w = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Set(), j = /* @__PURE__ */ new Map(), I = le.Off, Y = Rt.Text, re, Oe = Kt.New, En = new rs.Emitter(), ii = new rs.Emitter(), or = new rs.Emitter(), si = new rs.Emitter(), oi = new rs.Emitter(), It = r && r.cancellationStrategy ? r.cancellationStrategy : po.Message;
    function qn(v) {
    }
    function Nt() {
      return Oe === Kt.Listening;
    }
    function xn() {
      return Oe === Kt.Closed;
    }
    function Wt() {
      return Oe === Kt.Disposed;
    }
    function Ee() {
      (Oe === Kt.New || Oe === Kt.Listening) && (Oe = Kt.Closed, ii.fire(void 0));
    }
    function Ji(v) {
      En.fire([v, void 0, void 0]);
    }
    function nn(v) {
      En.fire(v);
    }
    n2.onClose(Ee), n2.onError(Ji), e.onClose(Ee), e.onError(nn);
    function ar(v) {
      if (v === null) throw new Error("Can't send requests with id null since the response can't be correlated.");
      return "req-" + v.toString();
    }
    function ai(v) {
      return v === null ? "res-unknown-" + (++a).toString() : "res-" + v.toString();
    }
    function Lr() {
      return "not-" + (++o).toString();
    }
    function rn(v, q) {
      X.Message.isRequest(q) ? v.set(ar(q.id), q) : X.Message.isResponse(q) ? l === -1 ? v.set(ai(q.id), q) : lr(q) : v.set(Lr(), q);
    }
    function Ar() {
      D || T.size === 0 || l !== -1 && f >= l || (D = (0, Sp.default)().timer.setImmediate(async () => {
        if (D = void 0, T.size === 0 || l !== -1 && f >= l) return;
        let v = T.shift(), q;
        try {
          f++;
          let N = r?.messageStrategy;
          go.is(N) ? q = N.handleMessage(v, ci) : q = ci(v);
        } catch (N) {
          i.error(`Processing message queue failed: ${N.toString()}`);
        } finally {
          q instanceof Promise ? q.then(() => {
            f--, Ar();
          }).catch((N) => {
            i.error(`Processing message queue failed: ${N.toString()}`);
          }) : f--, Ar();
        }
      }));
    }
    async function ci(v) {
      return X.Message.isRequest(v) ? ur(v) : X.Message.isNotification(v) ? Qi(v) : X.Message.isResponse(v) ? lr(v) : ui(v);
    }
    let cr = (v) => {
      try {
        if (X.Message.isNotification(v) && v.method === os.type.method) {
          let q = v.params.id, N = ar(q), U = T.get(N);
          if (X.Message.isRequest(U)) {
            let ce = r?.connectionStrategy, oe = ce && ce.cancelUndispatched ? ce.cancelUndispatched(U, qn) : void 0;
            if (oe && (oe.error !== void 0 || oe.result !== void 0)) {
              T.delete(N), j.delete(q), oe.id = U.id, dr(oe, v.method, Date.now()), e.write(oe).catch(() => i.error("Sending response for canceled message failed."));
              return;
            }
          }
          let te = j.get(q);
          if (te !== void 0) {
            te.cancel(), Mn(v);
            return;
          } else x.add(q);
        }
        rn(T, v);
      } finally {
        Ar();
      }
    };
    async function ur(v) {
      if (Wt()) return Promise.resolve();
      function q(qe, $e, ge) {
        let ve = { jsonrpc: c, id: v.id };
        return qe instanceof X.ResponseError ? ve.error = qe.toJson() : ve.result = qe === void 0 ? null : qe, dr(ve, $e, ge), e.write(ve);
      }
      function N(qe, $e, ge) {
        let ve = { jsonrpc: c, id: v.id, error: qe.toJson() };
        return dr(ve, $e, ge), e.write(ve);
      }
      fr(v);
      let U = p.get(v.method), te, ce;
      U && (te = U.type, ce = U.handler);
      let oe = Date.now();
      if (ce || h) {
        let qe = v.id ?? String(Date.now()), $e = lo.is(It.receiver) ? It.receiver.createCancellationTokenSource(qe) : It.receiver.createCancellationTokenSource(v);
        v.id !== null && x.has(v.id) && $e.cancel(), v.id !== null && j.set(qe, $e);
        try {
          let ge;
          if (ce) if (v.params === void 0) {
            if (te !== void 0 && te.numberOfParams !== 0) return N(new X.ResponseError(X.ErrorCodes.InvalidParams, `Request ${v.method} defines ${te.numberOfParams} params but received none.`), v.method, oe);
            ge = ce($e.token);
          } else if (Array.isArray(v.params)) {
            if (te !== void 0 && te.parameterStructures === X.ParameterStructures.byName) return N(new X.ResponseError(X.ErrorCodes.InvalidParams, `Request ${v.method} defines parameters by name but received parameters by position`), v.method, oe);
            ge = ce(...v.params, $e.token);
          } else {
            if (te !== void 0 && te.parameterStructures === X.ParameterStructures.byPosition) return N(new X.ResponseError(X.ErrorCodes.InvalidParams, `Request ${v.method} defines parameters by position but received parameters by name`), v.method, oe);
            ge = ce(v.params, $e.token);
          }
          else h && (ge = h(v.method, v.params, $e.token));
          let ve = await ge;
          await q(ve, v.method, oe);
        } catch (ge) {
          ge instanceof X.ResponseError ? await q(ge, v.method, oe) : ge && Me.string(ge.message) ? await N(new X.ResponseError(X.ErrorCodes.InternalError, `Request ${v.method} failed with message: ${ge.message}`), v.method, oe) : await N(new X.ResponseError(X.ErrorCodes.InternalError, `Request ${v.method} failed unexpectedly without providing any details.`), v.method, oe);
        } finally {
          j.delete(qe);
        }
      } else await N(new X.ResponseError(X.ErrorCodes.MethodNotFound, `Unhandled method ${v.method}`), v.method, oe);
    }
    function lr(v) {
      if (!Wt()) if (v.id === null) v.error ? i.error(`Received response message without id: Error is: 
${JSON.stringify(v.error, void 0, 4)}`) : i.error("Received response message without id. No further error information provided.");
      else {
        let q = v.id, N = w.get(q);
        if (li(v, N), N !== void 0) {
          w.delete(q);
          try {
            if (v.error) {
              let U = v.error;
              N.reject(new X.ResponseError(U.code, U.message, U.data));
            } else if (v.result !== void 0) N.resolve(v.result);
            else throw new Error("Should never happen.");
          } catch (U) {
            U.message ? i.error(`Response handler '${N.method}' failed with message: ${U.message}`) : i.error(`Response handler '${N.method}' failed unexpectedly.`);
          }
        }
      }
    }
    async function Qi(v) {
      if (Wt()) return;
      let q, N;
      if (v.method === os.type.method) {
        let U = v.params.id;
        x.delete(U), Mn(v);
        return;
      } else {
        let U = _.get(v.method);
        U && (N = U.handler, q = U.type);
      }
      if (N || g) try {
        if (Mn(v), N) if (v.params === void 0) q !== void 0 && q.numberOfParams !== 0 && q.parameterStructures !== X.ParameterStructures.byName && i.error(`Notification ${v.method} defines ${q.numberOfParams} params but received none.`), await N();
        else if (Array.isArray(v.params)) {
          let U = v.params;
          v.method === is.type.method && U.length === 2 && Kc.is(U[0]) ? await N({ token: U[0], value: U[1] }) : (q !== void 0 && (q.parameterStructures === X.ParameterStructures.byName && i.error(`Notification ${v.method} defines parameters by name but received parameters by position`), q.numberOfParams !== v.params.length && i.error(`Notification ${v.method} defines ${q.numberOfParams} params but received ${U.length} arguments`)), await N(...U));
        } else q !== void 0 && q.parameterStructures === X.ParameterStructures.byPosition && i.error(`Notification ${v.method} defines parameters by position but received parameters by name`), await N(v.params);
        else g && await g(v.method, v.params);
      } catch (U) {
        U.message ? i.error(`Notification handler '${v.method}' failed with message: ${U.message}`) : i.error(`Notification handler '${v.method}' failed unexpectedly.`);
      }
      else or.fire(v);
    }
    function ui(v) {
      if (!v) {
        i.error("Received empty message.");
        return;
      }
      i.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(v, null, 4)}`);
      let q = v;
      if (Me.string(q.id) || Me.number(q.id)) {
        let N = q.id, U = w.get(N);
        U && U.reject(new Error("The received response has neither a result nor an error property."));
      }
    }
    function St(v) {
      if (v != null) switch (I) {
        case le.Verbose:
          return JSON.stringify(v, null, 4);
        case le.Compact:
          return JSON.stringify(v);
        default:
          return;
      }
    }
    function Yi(v) {
      if (!(I === le.Off || !re)) if (Y === Rt.Text) {
        let q;
        (I === le.Verbose || I === le.Compact) && v.params && (q = `Params: ${St(v.params)}`), re.log(`Sending request '${v.method} - (${v.id})'.`, q);
      } else nt("send-request", v);
    }
    function sn(v) {
      if (!(I === le.Off || !re)) if (Y === Rt.Text) {
        let q;
        (I === le.Verbose || I === le.Compact) && (v.params ? q = `Params: ${St(v.params)}` : q = "No parameters provided."), re.log(`Sending notification '${v.method}'.`, q);
      } else nt("send-notification", v);
    }
    function dr(v, q, N) {
      if (!(I === le.Off || !re)) if (Y === Rt.Text) {
        let U;
        (I === le.Verbose || I === le.Compact) && (v.error && v.error.data ? U = `Error data: ${St(v.error.data)}` : v.result ? U = `Result: ${St(v.result)}` : v.error === void 0 && (U = "No result returned.")), re.log(`Sending response '${q} - (${v.id})'. Processing request took ${Date.now() - N}ms`, U);
      } else nt("send-response", v);
    }
    function fr(v) {
      if (!(I === le.Off || !re)) if (Y === Rt.Text) {
        let q;
        (I === le.Verbose || I === le.Compact) && v.params && (q = `Params: ${St(v.params)}`), re.log(`Received request '${v.method} - (${v.id})'.`, q);
      } else nt("receive-request", v);
    }
    function Mn(v) {
      if (!(I === le.Off || !re || v.method === uo.type.method)) if (Y === Rt.Text) {
        let q;
        (I === le.Verbose || I === le.Compact) && (v.params ? q = `Params: ${St(v.params)}` : q = "No parameters provided."), re.log(`Received notification '${v.method}'.`, q);
      } else nt("receive-notification", v);
    }
    function li(v, q) {
      if (!(I === le.Off || !re)) if (Y === Rt.Text) {
        let N;
        if ((I === le.Verbose || I === le.Compact) && (v.error && v.error.data ? N = `Error data: ${St(v.error.data)}` : v.result ? N = `Result: ${St(v.result)}` : v.error === void 0 && (N = "No result returned.")), q) {
          let U = v.error ? ` Request failed: ${v.error.message} (${v.error.code}).` : "";
          re.log(`Received response '${q.method} - (${v.id})' in ${Date.now() - q.timerStart}ms.${U}`, N);
        } else re.log(`Received response ${v.id} without active response promise.`, N);
      } else nt("receive-response", v);
    }
    function nt(v, q) {
      if (!re || I === le.Off) return;
      let N = { isLSPMessage: true, type: v, message: q, timestamp: Date.now() };
      re.log(N);
    }
    function zt() {
      if (xn()) throw new yi(ss.Closed, "Connection is closed.");
      if (Wt()) throw new yi(ss.Disposed, "Connection is disposed.");
    }
    function rt() {
      if (Nt()) throw new yi(ss.AlreadyListening, "Connection is already listening");
    }
    function Zi() {
      if (!Nt()) throw new Error("Call listen() first.");
    }
    function Ze(v) {
      return v === void 0 ? null : v;
    }
    function In(v) {
      if (v !== null) return v;
    }
    function di(v) {
      return v != null && !Array.isArray(v) && typeof v == "object";
    }
    function kr(v, q) {
      switch (v) {
        case X.ParameterStructures.auto:
          return di(q) ? In(q) : [Ze(q)];
        case X.ParameterStructures.byName:
          if (!di(q)) throw new Error("Received parameters by name but param is not an object literal.");
          return In(q);
        case X.ParameterStructures.byPosition:
          return [Ze(q)];
        default:
          throw new Error(`Unknown parameter structure ${v.toString()}`);
      }
    }
    function hr(v, q) {
      let N, U = v.numberOfParams;
      switch (U) {
        case 0:
          N = void 0;
          break;
        case 1:
          N = kr(v.parameterStructures, q[0]);
          break;
        default:
          N = [];
          for (let te = 0; te < q.length && te < U; te++) N.push(Ze(q[te]));
          if (q.length < U) for (let te = q.length; te < U; te++) N.push(null);
          break;
      }
      return N;
    }
    let jt = { sendNotification: (v, ...q) => {
      zt();
      let N, U;
      if (Me.string(v)) {
        N = v;
        let ce = q[0], oe = 0, qe = X.ParameterStructures.auto;
        X.ParameterStructures.is(ce) && (oe = 1, qe = ce);
        let $e = q.length, ge = $e - oe;
        switch (ge) {
          case 0:
            U = void 0;
            break;
          case 1:
            U = kr(qe, q[oe]);
            break;
          default:
            if (qe === X.ParameterStructures.byName) throw new Error(`Received ${ge} parameters for 'by Name' notification parameter structure.`);
            U = q.slice(oe, $e).map((ve) => Ze(ve));
            break;
        }
      } else {
        let ce = q;
        N = v.method, U = hr(v, ce);
      }
      let te = { jsonrpc: c, method: N, params: U };
      return sn(te), e.write(te).catch((ce) => {
        throw i.error("Sending notification failed."), ce;
      });
    }, onNotification: (v, q) => {
      zt();
      let N;
      return Me.func(v) ? g = v : q && (Me.string(v) ? (N = v, _.set(v, { type: void 0, handler: q })) : (N = v.method, _.set(v.method, { type: v, handler: q }))), { dispose: () => {
        N !== void 0 ? _.get(N)?.handler === q && _.delete(N) : g === v && (g = void 0);
      } };
    }, onProgress: (v, q, N) => {
      if (y.has(q)) throw new Error(`Progress handler for token ${q} already registered`);
      return y.set(q, N), { dispose: () => {
        y.get(q) === N && y.delete(q);
      } };
    }, sendProgress: (v, q, N) => jt.sendNotification(is.type, { token: q, value: N }), onUnhandledProgress: si.event, sendRequest: (v, ...q) => {
      zt(), Zi();
      function N(ve, it) {
        let gt = It.sender.sendCancellation(ve, it);
        gt === void 0 ? i.log(`Received no promise from cancellation strategy when cancelling id ${it}`) : gt.catch(() => {
          i.log(`Sending cancellation messages for id ${it} failed.`);
        });
      }
      let U, te, ce;
      if (Me.string(v)) {
        U = v;
        let ve = q[0], it = q[q.length - 1], gt = 0, Nn = X.ParameterStructures.auto;
        X.ParameterStructures.is(ve) && (gt = 1, Nn = ve);
        let Pt = q.length;
        zc.CancellationToken.is(it) && (Pt = Pt - 1, ce = it);
        let mt = Pt - gt;
        switch (mt) {
          case 0:
            te = void 0;
            break;
          case 1:
            te = kr(Nn, q[gt]);
            break;
          default:
            if (Nn === X.ParameterStructures.byName) throw new Error(`Received ${mt} parameters for 'by Name' request parameter structure.`);
            te = q.slice(gt, Pt).map((fi) => Ze(fi));
            break;
        }
      } else {
        let ve = q;
        U = v.method, te = hr(v, ve);
        let it = v.numberOfParams;
        ce = zc.CancellationToken.is(ve[it]) ? ve[it] : void 0;
      }
      let oe = s++, qe, $e = false;
      ce !== void 0 && (ce.isCancellationRequested ? $e = true : qe = ce.onCancellationRequested(() => {
        N(jt, oe);
      }));
      let ge = { jsonrpc: c, id: oe, method: U, params: te };
      return Yi(ge), typeof It.sender.enableCancellation == "function" && It.sender.enableCancellation(ge), new Promise(async (ve, it) => {
        let gt = (mt) => {
          ve(mt), It.sender.cleanup(oe), qe?.dispose();
        }, Nn = (mt) => {
          it(mt), It.sender.cleanup(oe), qe?.dispose();
        }, Pt = { method: U, timerStart: Date.now(), resolve: gt, reject: Nn };
        try {
          w.set(oe, Pt), await e.write(ge), $e && N(jt, oe);
        } catch (mt) {
          throw w.delete(oe), Pt.reject(new X.ResponseError(X.ErrorCodes.MessageWriteError, mt.message ? mt.message : "Unknown reason")), i.error("Sending request failed."), mt;
        }
      });
    }, onRequest: (v, q) => {
      zt();
      let N = null;
      return Vc.is(v) ? (N = void 0, h = v) : Me.string(v) ? (N = null, q !== void 0 && (N = v, p.set(v, { handler: q, type: void 0 }))) : q !== void 0 && (N = v.method, p.set(v.method, { type: v, handler: q })), { dispose: () => {
        N !== null && (N !== void 0 ? p.get(N)?.handler === q && p.delete(N) : h === v && (h = void 0));
      } };
    }, hasPendingResponse: () => w.size > 0, trace: async (v, q, N) => {
      let U = false, te = Rt.Text;
      N !== void 0 && (Me.boolean(N) ? U = N : (U = N.sendNotification || false, te = N.traceFormat || Rt.Text)), I = v, Y = te, I === le.Off ? re = void 0 : re = q, U && !xn() && !Wt() && await jt.sendNotification(Xc.type, { value: le.toString(v) });
    }, onError: En.event, onClose: ii.event, onUnhandledNotification: or.event, onDispose: oi.event, end: () => {
      e.end();
    }, dispose: () => {
      if (Wt()) return;
      Oe = Kt.Disposed, oi.fire(void 0);
      let v = new X.ResponseError(X.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
      for (let q of w.values()) q.reject(v);
      w = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Set(), T = new Pp.LinkedMap(), Me.func(e.dispose) && e.dispose(), Me.func(n2.dispose) && n2.dispose();
    }, listen: () => {
      zt(), rt(), Oe = Kt.Listening, n2.listen(cr);
    }, inspect: () => {
      (0, Sp.default)().console.log("inspect");
    } };
    return jt.onNotification(uo.type, (v) => {
      if (I === le.Off || !re) return;
      let q = I === le.Verbose || I === le.Compact;
      re.log(v.message, q ? v.verbose : void 0);
    }), jt.onNotification(is.type, async (v) => {
      let q = y.get(v.token);
      q ? await q(v.value) : si.fire(v);
    }), jt;
  }
});
var An = R((P) => {
  "use strict";
  var KC = P && P.__importDefault || function(n2) {
    return n2 && n2.__esModule ? n2 : { default: n2 };
  };
  Object.defineProperty(P, "__esModule", { value: true });
  P.ProgressType = P.ProgressToken = P.createMessageConnection = P.NullLogger = P.ConnectionOptions = P.ConnectionStrategy = P.AbstractMessageBuffer = P.WriteableStreamMessageWriter = P.AbstractMessageWriter = P.MessageWriter = P.ReadableStreamMessageReader = P.AbstractMessageReader = P.MessageReader = P.SharedArrayReceiverStrategy = P.SharedArraySenderStrategy = P.CancellationToken = P.CancellationTokenSource = P.Emitter = P.Event = P.Disposable = P.LRUCache = P.Touch = P.LinkedMap = P.ParameterStructures = P.NotificationType9 = P.NotificationType8 = P.NotificationType7 = P.NotificationType6 = P.NotificationType5 = P.NotificationType4 = P.NotificationType3 = P.NotificationType2 = P.NotificationType1 = P.NotificationType0 = P.NotificationType = P.ErrorCodes = P.ResponseError = P.RequestType9 = P.RequestType8 = P.RequestType7 = P.RequestType6 = P.RequestType5 = P.RequestType4 = P.RequestType3 = P.RequestType2 = P.RequestType1 = P.RequestType0 = P.RequestType = P.Message = P.RAL = void 0;
  P.MessageStrategy = P.CancellationStrategy = P.CancellationSenderStrategy = P.RequestCancellationReceiverStrategy = P.IdCancellationReceiverStrategy = P.CancellationReceiverStrategy = P.ConnectionError = P.ConnectionErrors = P.LogTraceNotification = P.SetTraceNotification = P.TraceFormat = P.TraceValues = P.TraceValue = P.Trace = void 0;
  var be = Cc();
  Object.defineProperty(P, "Message", { enumerable: true, get: function() {
    return be.Message;
  } });
  Object.defineProperty(P, "RequestType", { enumerable: true, get: function() {
    return be.RequestType;
  } });
  Object.defineProperty(P, "RequestType0", { enumerable: true, get: function() {
    return be.RequestType0;
  } });
  Object.defineProperty(P, "RequestType1", { enumerable: true, get: function() {
    return be.RequestType1;
  } });
  Object.defineProperty(P, "RequestType2", { enumerable: true, get: function() {
    return be.RequestType2;
  } });
  Object.defineProperty(P, "RequestType3", { enumerable: true, get: function() {
    return be.RequestType3;
  } });
  Object.defineProperty(P, "RequestType4", { enumerable: true, get: function() {
    return be.RequestType4;
  } });
  Object.defineProperty(P, "RequestType5", { enumerable: true, get: function() {
    return be.RequestType5;
  } });
  Object.defineProperty(P, "RequestType6", { enumerable: true, get: function() {
    return be.RequestType6;
  } });
  Object.defineProperty(P, "RequestType7", { enumerable: true, get: function() {
    return be.RequestType7;
  } });
  Object.defineProperty(P, "RequestType8", { enumerable: true, get: function() {
    return be.RequestType8;
  } });
  Object.defineProperty(P, "RequestType9", { enumerable: true, get: function() {
    return be.RequestType9;
  } });
  Object.defineProperty(P, "ResponseError", { enumerable: true, get: function() {
    return be.ResponseError;
  } });
  Object.defineProperty(P, "ErrorCodes", { enumerable: true, get: function() {
    return be.ErrorCodes;
  } });
  Object.defineProperty(P, "NotificationType", { enumerable: true, get: function() {
    return be.NotificationType;
  } });
  Object.defineProperty(P, "NotificationType0", { enumerable: true, get: function() {
    return be.NotificationType0;
  } });
  Object.defineProperty(P, "NotificationType1", { enumerable: true, get: function() {
    return be.NotificationType1;
  } });
  Object.defineProperty(P, "NotificationType2", { enumerable: true, get: function() {
    return be.NotificationType2;
  } });
  Object.defineProperty(P, "NotificationType3", { enumerable: true, get: function() {
    return be.NotificationType3;
  } });
  Object.defineProperty(P, "NotificationType4", { enumerable: true, get: function() {
    return be.NotificationType4;
  } });
  Object.defineProperty(P, "NotificationType5", { enumerable: true, get: function() {
    return be.NotificationType5;
  } });
  Object.defineProperty(P, "NotificationType6", { enumerable: true, get: function() {
    return be.NotificationType6;
  } });
  Object.defineProperty(P, "NotificationType7", { enumerable: true, get: function() {
    return be.NotificationType7;
  } });
  Object.defineProperty(P, "NotificationType8", { enumerable: true, get: function() {
    return be.NotificationType8;
  } });
  Object.defineProperty(P, "NotificationType9", { enumerable: true, get: function() {
    return be.NotificationType9;
  } });
  Object.defineProperty(P, "ParameterStructures", { enumerable: true, get: function() {
    return be.ParameterStructures;
  } });
  var Yc = Dc();
  Object.defineProperty(P, "LinkedMap", { enumerable: true, get: function() {
    return Yc.LinkedMap;
  } });
  Object.defineProperty(P, "LRUCache", { enumerable: true, get: function() {
    return Yc.LRUCache;
  } });
  Object.defineProperty(P, "Touch", { enumerable: true, get: function() {
    return Yc.Touch;
  } });
  var BC = hp();
  Object.defineProperty(P, "Disposable", { enumerable: true, get: function() {
    return BC.Disposable;
  } });
  var Op = pi();
  Object.defineProperty(P, "Event", { enumerable: true, get: function() {
    return Op.Event;
  } });
  Object.defineProperty(P, "Emitter", { enumerable: true, get: function() {
    return Op.Emitter;
  } });
  var Ep = so();
  Object.defineProperty(P, "CancellationTokenSource", { enumerable: true, get: function() {
    return Ep.CancellationTokenSource;
  } });
  Object.defineProperty(P, "CancellationToken", { enumerable: true, get: function() {
    return Ep.CancellationToken;
  } });
  var qp = gp();
  Object.defineProperty(P, "SharedArraySenderStrategy", { enumerable: true, get: function() {
    return qp.SharedArraySenderStrategy;
  } });
  Object.defineProperty(P, "SharedArrayReceiverStrategy", { enumerable: true, get: function() {
    return qp.SharedArrayReceiverStrategy;
  } });
  var Zc = _p();
  Object.defineProperty(P, "MessageReader", { enumerable: true, get: function() {
    return Zc.MessageReader;
  } });
  Object.defineProperty(P, "AbstractMessageReader", { enumerable: true, get: function() {
    return Zc.AbstractMessageReader;
  } });
  Object.defineProperty(P, "ReadableStreamMessageReader", { enumerable: true, get: function() {
    return Zc.ReadableStreamMessageReader;
  } });
  var eu = wp();
  Object.defineProperty(P, "MessageWriter", { enumerable: true, get: function() {
    return eu.MessageWriter;
  } });
  Object.defineProperty(P, "AbstractMessageWriter", { enumerable: true, get: function() {
    return eu.AbstractMessageWriter;
  } });
  Object.defineProperty(P, "WriteableStreamMessageWriter", { enumerable: true, get: function() {
    return eu.WriteableStreamMessageWriter;
  } });
  var VC = Dp();
  Object.defineProperty(P, "AbstractMessageBuffer", { enumerable: true, get: function() {
    return VC.AbstractMessageBuffer;
  } });
  var He = Tp();
  Object.defineProperty(P, "ConnectionStrategy", { enumerable: true, get: function() {
    return He.ConnectionStrategy;
  } });
  Object.defineProperty(P, "ConnectionOptions", { enumerable: true, get: function() {
    return He.ConnectionOptions;
  } });
  Object.defineProperty(P, "NullLogger", { enumerable: true, get: function() {
    return He.NullLogger;
  } });
  Object.defineProperty(P, "createMessageConnection", { enumerable: true, get: function() {
    return He.createMessageConnection;
  } });
  Object.defineProperty(P, "ProgressToken", { enumerable: true, get: function() {
    return He.ProgressToken;
  } });
  Object.defineProperty(P, "ProgressType", { enumerable: true, get: function() {
    return He.ProgressType;
  } });
  Object.defineProperty(P, "Trace", { enumerable: true, get: function() {
    return He.Trace;
  } });
  Object.defineProperty(P, "TraceValue", { enumerable: true, get: function() {
    return He.TraceValue;
  } });
  Object.defineProperty(P, "TraceFormat", { enumerable: true, get: function() {
    return He.TraceFormat;
  } });
  Object.defineProperty(P, "SetTraceNotification", { enumerable: true, get: function() {
    return He.SetTraceNotification;
  } });
  Object.defineProperty(P, "LogTraceNotification", { enumerable: true, get: function() {
    return He.LogTraceNotification;
  } });
  Object.defineProperty(P, "ConnectionErrors", { enumerable: true, get: function() {
    return He.ConnectionErrors;
  } });
  Object.defineProperty(P, "ConnectionError", { enumerable: true, get: function() {
    return He.ConnectionError;
  } });
  Object.defineProperty(P, "CancellationReceiverStrategy", { enumerable: true, get: function() {
    return He.CancellationReceiverStrategy;
  } });
  Object.defineProperty(P, "IdCancellationReceiverStrategy", { enumerable: true, get: function() {
    return He.IdCancellationReceiverStrategy;
  } });
  Object.defineProperty(P, "RequestCancellationReceiverStrategy", { enumerable: true, get: function() {
    return He.RequestCancellationReceiverStrategy;
  } });
  Object.defineProperty(P, "CancellationSenderStrategy", { enumerable: true, get: function() {
    return He.CancellationSenderStrategy;
  } });
  Object.defineProperty(P, "CancellationStrategy", { enumerable: true, get: function() {
    return He.CancellationStrategy;
  } });
  Object.defineProperty(P, "MessageStrategy", { enumerable: true, get: function() {
    return He.MessageStrategy;
  } });
  Object.defineProperty(P, "TraceValues", { enumerable: true, get: function() {
    return He.TraceValues;
  } });
  var GC = KC(yr());
  P.RAL = GC.default;
});
var Ro = {};
Ja(Ro, { AnnotatedTextEdit: () => kn, ApplyKind: () => wu, ChangeAnnotation: () => br, ChangeAnnotationIdentifier: () => Ve, CodeAction: () => Au, CodeActionContext: () => Lu, CodeActionKind: () => Fu, CodeActionTag: () => wo, CodeActionTriggerKind: () => hs, CodeDescription: () => lu, CodeLens: () => ku, Color: () => _o, ColorInformation: () => iu, ColorPresentation: () => su, Command: () => Ur, CompletionItem: () => Su, CompletionItemKind: () => _u, CompletionItemLabelDetails: () => Du, CompletionItemTag: () => vu, CompletionList: () => Pu, CreateFile: () => bi, DeleteFile: () => wi, Diagnostic: () => us, DiagnosticRelatedInformation: () => yo, DiagnosticSeverity: () => cu, DiagnosticTag: () => uu, DocumentHighlight: () => qu, DocumentHighlightKind: () => Eu, DocumentLink: () => Uu, DocumentSymbol: () => ju, DocumentUri: () => tu, EOL: () => XC, FoldingRange: () => au, FoldingRangeKind: () => ou, FormattingOptions: () => $u, Hover: () => Ru, InlayHint: () => Ju, InlayHintKind: () => Do, InlayHintLabelPart: () => So, InlineCompletionContext: () => tl, InlineCompletionItem: () => Qu, InlineCompletionList: () => Yu, InlineCompletionTriggerKind: () => Zu, InlineValueContext: () => Xu, InlineValueEvaluatableExpression: () => Gu, InlineValueText: () => Bu, InlineValueVariableLookup: () => Vu, InsertReplaceEdit: () => bu, InsertTextFormat: () => yu, InsertTextMode: () => Cu, LanguageKind: () => gu, Location: () => cs, LocationLink: () => ru, MarkedString: () => fs, MarkupContent: () => Cr, MarkupKind: () => Co, OptionalVersionedTextDocumentIdentifier: () => ds, ParameterInformation: () => Tu, Position: () => kt, Range: () => Ie, RenameFile: () => Ci, SelectedCompletionInfo: () => el, SelectionRange: () => Hu, SemanticTokenModifiers: () => zu, SemanticTokenTypes: () => Wu, SemanticTokens: () => Ku, SignatureInformation: () => Ou, SnippetTextEdit: () => du, StringValue: () => Po, SymbolInformation: () => Iu, SymbolKind: () => xu, SymbolTag: () => Mu, TextDocument: () => rl, TextDocumentEdit: () => ls, TextDocumentIdentifier: () => hu, TextDocumentItem: () => mu, TextEdit: () => on, URI: () => mo, VersionedTextDocumentIdentifier: () => pu, WorkspaceChange: () => fu, WorkspaceEdit: () => vo, WorkspaceFolder: () => nl, WorkspaceSymbol: () => Nu, integer: () => nu, uinteger: () => as });
var tu, mo, nu, as, kt, Ie, cs, ru, _o, iu, su, ou, au, yo, cu, uu, lu, us, Ur, on, br, Ve, kn, ls, bi, Ci, wi, vo, vi, du, bo, fu, hu, pu, ds, gu, mu, Co, Cr, _u, yu, vu, bu, Cu, wu, Du, Su, Pu, fs, Ru, Tu, Ou, Eu, qu, xu, Mu, Iu, Nu, ju, Fu, hs, Lu, wo, Au, ku, $u, Uu, Hu, Wu, zu, Ku, Bu, Vu, Gu, Xu, Do, So, Ju, Po, Qu, Yu, Zu, el, tl, nl, XC, rl, il, C, To = rp(() => {
  "use strict";
  (function(n2) {
    function e(t) {
      return typeof t == "string";
    }
    n2.is = e;
  })(tu || (tu = {}));
  (function(n2) {
    function e(t) {
      return typeof t == "string";
    }
    n2.is = e;
  })(mo || (mo = {}));
  (function(n2) {
    n2.MIN_VALUE = -2147483648, n2.MAX_VALUE = 2147483647;
    function e(t) {
      return typeof t == "number" && n2.MIN_VALUE <= t && t <= n2.MAX_VALUE;
    }
    n2.is = e;
  })(nu || (nu = {}));
  (function(n2) {
    n2.MIN_VALUE = 0, n2.MAX_VALUE = 2147483647;
    function e(t) {
      return typeof t == "number" && n2.MIN_VALUE <= t && t <= n2.MAX_VALUE;
    }
    n2.is = e;
  })(as || (as = {}));
  (function(n2) {
    function e(r, i) {
      return r === Number.MAX_VALUE && (r = as.MAX_VALUE), i === Number.MAX_VALUE && (i = as.MAX_VALUE), { line: r, character: i };
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.objectLiteral(i) && C.uinteger(i.line) && C.uinteger(i.character);
    }
    n2.is = t;
  })(kt || (kt = {}));
  (function(n2) {
    function e(r, i, s, o) {
      if (C.uinteger(r) && C.uinteger(i) && C.uinteger(s) && C.uinteger(o)) return { start: kt.create(r, i), end: kt.create(s, o) };
      if (kt.is(r) && kt.is(i)) return { start: r, end: i };
      throw new Error(`Range#create called with invalid arguments[${r}, ${i}, ${s}, ${o}]`);
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.objectLiteral(i) && kt.is(i.start) && kt.is(i.end);
    }
    n2.is = t;
  })(Ie || (Ie = {}));
  (function(n2) {
    function e(r, i) {
      return { uri: r, range: i };
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.objectLiteral(i) && Ie.is(i.range) && (C.string(i.uri) || C.undefined(i.uri));
    }
    n2.is = t;
  })(cs || (cs = {}));
  (function(n2) {
    function e(r, i, s, o) {
      return { targetUri: r, targetRange: i, targetSelectionRange: s, originSelectionRange: o };
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.objectLiteral(i) && Ie.is(i.targetRange) && C.string(i.targetUri) && Ie.is(i.targetSelectionRange) && (Ie.is(i.originSelectionRange) || C.undefined(i.originSelectionRange));
    }
    n2.is = t;
  })(ru || (ru = {}));
  (function(n2) {
    function e(r, i, s, o) {
      return { red: r, green: i, blue: s, alpha: o };
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.objectLiteral(i) && C.numberRange(i.red, 0, 1) && C.numberRange(i.green, 0, 1) && C.numberRange(i.blue, 0, 1) && C.numberRange(i.alpha, 0, 1);
    }
    n2.is = t;
  })(_o || (_o = {}));
  (function(n2) {
    function e(r, i) {
      return { range: r, color: i };
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.objectLiteral(i) && Ie.is(i.range) && _o.is(i.color);
    }
    n2.is = t;
  })(iu || (iu = {}));
  (function(n2) {
    function e(r, i, s) {
      return { label: r, textEdit: i, additionalTextEdits: s };
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.objectLiteral(i) && C.string(i.label) && (C.undefined(i.textEdit) || on.is(i)) && (C.undefined(i.additionalTextEdits) || C.typedArray(i.additionalTextEdits, on.is));
    }
    n2.is = t;
  })(su || (su = {}));
  (function(n2) {
    n2.Comment = "comment", n2.Imports = "imports", n2.Region = "region";
  })(ou || (ou = {}));
  (function(n2) {
    function e(r, i, s, o, a, c) {
      let l = { startLine: r, endLine: i };
      return C.defined(s) && (l.startCharacter = s), C.defined(o) && (l.endCharacter = o), C.defined(a) && (l.kind = a), C.defined(c) && (l.collapsedText = c), l;
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.objectLiteral(i) && C.uinteger(i.startLine) && C.uinteger(i.startLine) && (C.undefined(i.startCharacter) || C.uinteger(i.startCharacter)) && (C.undefined(i.endCharacter) || C.uinteger(i.endCharacter)) && (C.undefined(i.kind) || C.string(i.kind));
    }
    n2.is = t;
  })(au || (au = {}));
  (function(n2) {
    function e(r, i) {
      return { location: r, message: i };
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.defined(i) && cs.is(i.location) && C.string(i.message);
    }
    n2.is = t;
  })(yo || (yo = {}));
  (function(n2) {
    n2.Error = 1, n2.Warning = 2, n2.Information = 3, n2.Hint = 4;
  })(cu || (cu = {}));
  (function(n2) {
    n2.Unnecessary = 1, n2.Deprecated = 2;
  })(uu || (uu = {}));
  (function(n2) {
    function e(t) {
      let r = t;
      return C.objectLiteral(r) && C.string(r.href);
    }
    n2.is = e;
  })(lu || (lu = {}));
  (function(n2) {
    function e(s, o, a, c, l, f) {
      let h = { range: s, message: o };
      return C.defined(a) && (h.severity = a), C.defined(c) && (h.code = c), C.defined(l) && (h.source = l), C.defined(f) && (h.relatedInformation = f), h;
    }
    n2.create = e;
    function t(s) {
      var o;
      let a = s;
      return C.defined(a) && Ie.is(a.range) && (C.string(a.message) || Cr.is(a.message)) && (C.number(a.severity) || C.undefined(a.severity)) && (C.integer(a.code) || C.string(a.code) || C.undefined(a.code)) && (C.undefined(a.codeDescription) || C.string((o = a.codeDescription) === null || o === void 0 ? void 0 : o.href)) && (C.string(a.source) || C.undefined(a.source)) && (C.undefined(a.relatedInformation) || C.typedArray(a.relatedInformation, yo.is));
    }
    n2.is = t;
    function r(s) {
      return C.string(s.message);
    }
    n2.is3_17 = r;
    function i(s) {
      if (C.string(s.message)) return s.message;
      if (Cr.is(s.message)) return s.message.value;
      throw new Error(`Unknown message type ${typeof s.message}`);
    }
    n2.getMessageString = i;
  })(us || (us = {}));
  (function(n2) {
    function e(r, i, ...s) {
      let o = { title: r, command: i };
      return C.defined(s) && s.length > 0 && (o.arguments = s), o;
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.defined(i) && C.string(i.title) && (i.tooltip === void 0 || C.string(i.tooltip)) && C.string(i.command);
    }
    n2.is = t;
  })(Ur || (Ur = {}));
  (function(n2) {
    function e(s, o) {
      return { range: s, newText: o };
    }
    n2.replace = e;
    function t(s, o) {
      return { range: { start: s, end: s }, newText: o };
    }
    n2.insert = t;
    function r(s) {
      return { range: s, newText: "" };
    }
    n2.del = r;
    function i(s) {
      let o = s;
      return C.objectLiteral(o) && C.string(o.newText) && Ie.is(o.range);
    }
    n2.is = i;
  })(on || (on = {}));
  (function(n2) {
    function e(r, i, s) {
      let o = { label: r };
      return i !== void 0 && (o.needsConfirmation = i), s !== void 0 && (o.description = s), o;
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.objectLiteral(i) && C.string(i.label) && (C.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) && (C.string(i.description) || i.description === void 0);
    }
    n2.is = t;
  })(br || (br = {}));
  (function(n2) {
    function e(t) {
      let r = t;
      return C.string(r);
    }
    n2.is = e;
  })(Ve || (Ve = {}));
  (function(n2) {
    function e(s, o, a) {
      return { range: s, newText: o, annotationId: a };
    }
    n2.replace = e;
    function t(s, o, a) {
      return { range: { start: s, end: s }, newText: o, annotationId: a };
    }
    n2.insert = t;
    function r(s, o) {
      return { range: s, newText: "", annotationId: o };
    }
    n2.del = r;
    function i(s) {
      let o = s;
      return on.is(o) && (br.is(o.annotationId) || Ve.is(o.annotationId));
    }
    n2.is = i;
  })(kn || (kn = {}));
  (function(n2) {
    function e(r, i) {
      return { textDocument: r, edits: i };
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.defined(i) && ds.is(i.textDocument) && Array.isArray(i.edits);
    }
    n2.is = t;
  })(ls || (ls = {}));
  (function(n2) {
    function e(r, i, s) {
      let o = { kind: "create", uri: r };
      return i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (o.options = i), s !== void 0 && (o.annotationId = s), o;
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return i && i.kind === "create" && C.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || C.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || C.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Ve.is(i.annotationId));
    }
    n2.is = t;
  })(bi || (bi = {}));
  (function(n2) {
    function e(r, i, s, o) {
      let a = { kind: "rename", oldUri: r, newUri: i };
      return s !== void 0 && (s.overwrite !== void 0 || s.ignoreIfExists !== void 0) && (a.options = s), o !== void 0 && (a.annotationId = o), a;
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return i && i.kind === "rename" && C.string(i.oldUri) && C.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || C.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || C.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Ve.is(i.annotationId));
    }
    n2.is = t;
  })(Ci || (Ci = {}));
  (function(n2) {
    function e(r, i, s) {
      let o = { kind: "delete", uri: r };
      return i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (o.options = i), s !== void 0 && (o.annotationId = s), o;
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return i && i.kind === "delete" && C.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || C.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || C.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || Ve.is(i.annotationId));
    }
    n2.is = t;
  })(wi || (wi = {}));
  (function(n2) {
    function e(t) {
      let r = t;
      return r && (r.changes !== void 0 || r.documentChanges !== void 0) && (r.documentChanges === void 0 || r.documentChanges.every((i) => C.string(i.kind) ? bi.is(i) || Ci.is(i) || wi.is(i) : ls.is(i)));
    }
    n2.is = e;
  })(vo || (vo = {}));
  vi = class {
    constructor(e, t) {
      this.edits = e, this.changeAnnotations = t;
    }
    insert(e, t, r) {
      let i, s;
      if (r === void 0 ? i = on.insert(e, t) : Ve.is(r) ? (s = r, i = kn.insert(e, t, r)) : (this.assertChangeAnnotations(this.changeAnnotations), s = this.changeAnnotations.manage(r), i = kn.insert(e, t, s)), this.edits.push(i), s !== void 0) return s;
    }
    replace(e, t, r) {
      let i, s;
      if (r === void 0 ? i = on.replace(e, t) : Ve.is(r) ? (s = r, i = kn.replace(e, t, r)) : (this.assertChangeAnnotations(this.changeAnnotations), s = this.changeAnnotations.manage(r), i = kn.replace(e, t, s)), this.edits.push(i), s !== void 0) return s;
    }
    delete(e, t) {
      let r, i;
      if (t === void 0 ? r = on.del(e) : Ve.is(t) ? (i = t, r = kn.del(e, t)) : (this.assertChangeAnnotations(this.changeAnnotations), i = this.changeAnnotations.manage(t), r = kn.del(e, i)), this.edits.push(r), i !== void 0) return i;
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
  (function(n2) {
    function e(t) {
      let r = t;
      return C.objectLiteral(r) && Ie.is(r.range) && Po.isSnippet(r.snippet) && (r.annotationId === void 0 || br.is(r.annotationId) || Ve.is(r.annotationId));
    }
    n2.is = e;
  })(du || (du = {}));
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
      if (Ve.is(e) ? r = e : (r = this.nextId(), t = e), this._annotations[r] !== void 0) throw new Error(`Id ${r} is already in use.`);
      if (t === void 0) throw new Error(`No annotation provided for id ${r}`);
      return this._annotations[r] = t, this._size++, r;
    }
    nextId() {
      return this._counter++, this._counter.toString();
    }
  }, fu = class {
    constructor(e) {
      this._textEditChanges = /* @__PURE__ */ Object.create(null), e !== void 0 ? (this._workspaceEdit = e, e.documentChanges ? (this._changeAnnotations = new bo(e.changeAnnotations), e.changeAnnotations = this._changeAnnotations.all(), e.documentChanges.forEach((t) => {
        if (ls.is(t)) {
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
      if (ds.is(e)) {
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
      br.is(t) || Ve.is(t) ? i = t : r = t;
      let s, o;
      if (i === void 0 ? s = bi.create(e, r) : (o = Ve.is(i) ? i : this._changeAnnotations.manage(i), s = bi.create(e, r, o)), this._workspaceEdit.documentChanges.push(s), o !== void 0) return o;
    }
    renameFile(e, t, r, i) {
      if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
      let s;
      br.is(r) || Ve.is(r) ? s = r : i = r;
      let o, a;
      if (s === void 0 ? o = Ci.create(e, t, i) : (a = Ve.is(s) ? s : this._changeAnnotations.manage(s), o = Ci.create(e, t, i, a)), this._workspaceEdit.documentChanges.push(o), a !== void 0) return a;
    }
    deleteFile(e, t, r) {
      if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
      let i;
      br.is(t) || Ve.is(t) ? i = t : r = t;
      let s, o;
      if (i === void 0 ? s = wi.create(e, r) : (o = Ve.is(i) ? i : this._changeAnnotations.manage(i), s = wi.create(e, r, o)), this._workspaceEdit.documentChanges.push(s), o !== void 0) return o;
    }
  };
  (function(n2) {
    function e(r) {
      return { uri: r };
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.defined(i) && C.string(i.uri);
    }
    n2.is = t;
  })(hu || (hu = {}));
  (function(n2) {
    function e(r, i) {
      return { uri: r, version: i };
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.defined(i) && C.string(i.uri) && C.integer(i.version);
    }
    n2.is = t;
  })(pu || (pu = {}));
  (function(n2) {
    function e(r, i) {
      return { uri: r, version: i };
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.defined(i) && C.string(i.uri) && (i.version === null || C.integer(i.version));
    }
    n2.is = t;
  })(ds || (ds = {}));
  (function(n2) {
    n2.ABAP = "abap", n2.WindowsBat = "bat", n2.BibTeX = "bibtex", n2.Clojure = "clojure", n2.Coffeescript = "coffeescript", n2.C = "c", n2.CPP = "cpp", n2.CSharp = "csharp", n2.CSS = "css", n2.D = "d", n2.Delphi = "pascal", n2.Diff = "diff", n2.Dart = "dart", n2.Dockerfile = "dockerfile", n2.Elixir = "elixir", n2.Erlang = "erlang", n2.FSharp = "fsharp", n2.GitCommit = "git-commit", n2.GitRebase = "git-rebase", n2.Go = "go", n2.Groovy = "groovy", n2.Handlebars = "handlebars", n2.Haskell = "haskell", n2.HTML = "html", n2.Ini = "ini", n2.Java = "java", n2.JavaScript = "javascript", n2.JavaScriptReact = "javascriptreact", n2.JSON = "json", n2.LaTeX = "latex", n2.Less = "less", n2.Lua = "lua", n2.Makefile = "makefile", n2.Markdown = "markdown", n2.ObjectiveC = "objective-c", n2.ObjectiveCPP = "objective-cpp", n2.Pascal = "pascal", n2.Perl = "perl", n2.Perl6 = "perl6", n2.PHP = "php", n2.Plaintext = "plaintext", n2.Powershell = "powershell", n2.Pug = "jade", n2.Python = "python", n2.R = "r", n2.Razor = "razor", n2.Ruby = "ruby", n2.Rust = "rust", n2.SCSS = "scss", n2.SASS = "sass", n2.Scala = "scala", n2.ShaderLab = "shaderlab", n2.ShellScript = "shellscript", n2.SQL = "sql", n2.Swift = "swift", n2.TypeScript = "typescript", n2.TypeScriptReact = "typescriptreact", n2.TeX = "tex", n2.VisualBasic = "vb", n2.XML = "xml", n2.XSL = "xsl", n2.YAML = "yaml";
  })(gu || (gu = {}));
  (function(n2) {
    function e(r, i, s, o) {
      return { uri: r, languageId: i, version: s, text: o };
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.defined(i) && C.string(i.uri) && C.string(i.languageId) && C.integer(i.version) && C.string(i.text);
    }
    n2.is = t;
  })(mu || (mu = {}));
  (function(n2) {
    n2.PlainText = "plaintext", n2.Markdown = "markdown";
    function e(t) {
      let r = t;
      return r === n2.PlainText || r === n2.Markdown;
    }
    n2.is = e;
  })(Co || (Co = {}));
  (function(n2) {
    function e(t) {
      let r = t;
      return C.objectLiteral(t) && Co.is(r.kind) && C.string(r.value);
    }
    n2.is = e;
  })(Cr || (Cr = {}));
  (function(n2) {
    n2.Text = 1, n2.Method = 2, n2.Function = 3, n2.Constructor = 4, n2.Field = 5, n2.Variable = 6, n2.Class = 7, n2.Interface = 8, n2.Module = 9, n2.Property = 10, n2.Unit = 11, n2.Value = 12, n2.Enum = 13, n2.Keyword = 14, n2.Snippet = 15, n2.Color = 16, n2.File = 17, n2.Reference = 18, n2.Folder = 19, n2.EnumMember = 20, n2.Constant = 21, n2.Struct = 22, n2.Event = 23, n2.Operator = 24, n2.TypeParameter = 25;
  })(_u || (_u = {}));
  (function(n2) {
    n2.PlainText = 1, n2.Snippet = 2;
  })(yu || (yu = {}));
  (function(n2) {
    n2.Deprecated = 1;
  })(vu || (vu = {}));
  (function(n2) {
    function e(r, i, s) {
      return { newText: r, insert: i, replace: s };
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return i && C.string(i.newText) && Ie.is(i.insert) && Ie.is(i.replace);
    }
    n2.is = t;
  })(bu || (bu = {}));
  (function(n2) {
    n2.asIs = 1, n2.adjustIndentation = 2;
  })(Cu || (Cu = {}));
  (function(n2) {
    n2.Replace = 1, n2.Merge = 2;
  })(wu || (wu = {}));
  (function(n2) {
    function e(t) {
      let r = t;
      return r && (C.string(r.detail) || r.detail === void 0) && (C.string(r.description) || r.description === void 0);
    }
    n2.is = e;
  })(Du || (Du = {}));
  (function(n2) {
    function e(t) {
      return { label: t };
    }
    n2.create = e;
  })(Su || (Su = {}));
  (function(n2) {
    function e(t, r) {
      return { items: t || [], isIncomplete: !!r };
    }
    n2.create = e;
  })(Pu || (Pu = {}));
  (function(n2) {
    function e(r) {
      return r.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }
    n2.fromPlainText = e;
    function t(r) {
      let i = r;
      return C.string(i) || C.objectLiteral(i) && C.string(i.language) && C.string(i.value);
    }
    n2.is = t;
  })(fs || (fs = {}));
  (function(n2) {
    function e(t) {
      let r = t;
      return !!r && C.objectLiteral(r) && (Cr.is(r.contents) || fs.is(r.contents) || C.typedArray(r.contents, fs.is)) && (t.range === void 0 || Ie.is(t.range));
    }
    n2.is = e;
  })(Ru || (Ru = {}));
  (function(n2) {
    function e(t, r) {
      return r ? { label: t, documentation: r } : { label: t };
    }
    n2.create = e;
  })(Tu || (Tu = {}));
  (function(n2) {
    function e(t, r, ...i) {
      let s = { label: t };
      return C.defined(r) && (s.documentation = r), C.defined(i) ? s.parameters = i : s.parameters = [], s;
    }
    n2.create = e;
  })(Ou || (Ou = {}));
  (function(n2) {
    n2.Text = 1, n2.Read = 2, n2.Write = 3;
  })(Eu || (Eu = {}));
  (function(n2) {
    function e(t, r) {
      let i = { range: t };
      return C.number(r) && (i.kind = r), i;
    }
    n2.create = e;
  })(qu || (qu = {}));
  (function(n2) {
    n2.File = 1, n2.Module = 2, n2.Namespace = 3, n2.Package = 4, n2.Class = 5, n2.Method = 6, n2.Property = 7, n2.Field = 8, n2.Constructor = 9, n2.Enum = 10, n2.Interface = 11, n2.Function = 12, n2.Variable = 13, n2.Constant = 14, n2.String = 15, n2.Number = 16, n2.Boolean = 17, n2.Array = 18, n2.Object = 19, n2.Key = 20, n2.Null = 21, n2.EnumMember = 22, n2.Struct = 23, n2.Event = 24, n2.Operator = 25, n2.TypeParameter = 26;
  })(xu || (xu = {}));
  (function(n2) {
    n2.Deprecated = 1;
  })(Mu || (Mu = {}));
  (function(n2) {
    function e(t, r, i, s, o) {
      let a = { name: t, kind: r, location: { uri: s, range: i } };
      return o && (a.containerName = o), a;
    }
    n2.create = e;
  })(Iu || (Iu = {}));
  (function(n2) {
    function e(t, r, i, s) {
      return s !== void 0 ? { name: t, kind: r, location: { uri: i, range: s } } : { name: t, kind: r, location: { uri: i } };
    }
    n2.create = e;
  })(Nu || (Nu = {}));
  (function(n2) {
    function e(r, i, s, o, a, c) {
      let l = { name: r, detail: i, kind: s, range: o, selectionRange: a };
      return c !== void 0 && (l.children = c), l;
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return i && C.string(i.name) && C.number(i.kind) && Ie.is(i.range) && Ie.is(i.selectionRange) && (i.detail === void 0 || C.string(i.detail)) && (i.deprecated === void 0 || C.boolean(i.deprecated)) && (i.children === void 0 || Array.isArray(i.children)) && (i.tags === void 0 || Array.isArray(i.tags));
    }
    n2.is = t;
  })(ju || (ju = {}));
  (function(n2) {
    n2.Empty = "", n2.QuickFix = "quickfix", n2.Refactor = "refactor", n2.RefactorExtract = "refactor.extract", n2.RefactorInline = "refactor.inline", n2.RefactorMove = "refactor.move", n2.RefactorRewrite = "refactor.rewrite", n2.Source = "source", n2.SourceOrganizeImports = "source.organizeImports", n2.SourceFixAll = "source.fixAll", n2.Notebook = "notebook";
  })(Fu || (Fu = {}));
  (function(n2) {
    n2.Invoked = 1, n2.Automatic = 2;
  })(hs || (hs = {}));
  (function(n2) {
    function e(r, i, s) {
      let o = { diagnostics: r };
      return i != null && (o.only = i), s != null && (o.triggerKind = s), o;
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.defined(i) && C.typedArray(i.diagnostics, us.is) && (i.only === void 0 || C.typedArray(i.only, C.string)) && (i.triggerKind === void 0 || i.triggerKind === hs.Invoked || i.triggerKind === hs.Automatic);
    }
    n2.is = t;
  })(Lu || (Lu = {}));
  (function(n2) {
    n2.LLMGenerated = 1;
    function e(t) {
      return C.defined(t) && t === n2.LLMGenerated;
    }
    n2.is = e;
  })(wo || (wo = {}));
  (function(n2) {
    function e(r, i, s) {
      let o = { title: r }, a = true;
      return typeof i == "string" ? (a = false, o.kind = i) : Ur.is(i) ? o.command = i : o.edit = i, a && s !== void 0 && (o.kind = s), o;
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return i && C.string(i.title) && (i.diagnostics === void 0 || C.typedArray(i.diagnostics, us.is)) && (i.kind === void 0 || C.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || Ur.is(i.command)) && (i.isPreferred === void 0 || C.boolean(i.isPreferred)) && (i.edit === void 0 || vo.is(i.edit)) && (i.tags === void 0 || C.typedArray(i.tags, wo.is));
    }
    n2.is = t;
  })(Au || (Au = {}));
  (function(n2) {
    function e(r, i) {
      let s = { range: r };
      return C.defined(i) && (s.data = i), s;
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.defined(i) && Ie.is(i.range) && (C.undefined(i.command) || Ur.is(i.command));
    }
    n2.is = t;
  })(ku || (ku = {}));
  (function(n2) {
    function e(r, i) {
      return { tabSize: r, insertSpaces: i };
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.defined(i) && C.uinteger(i.tabSize) && C.boolean(i.insertSpaces);
    }
    n2.is = t;
  })($u || ($u = {}));
  (function(n2) {
    function e(r, i, s) {
      return { range: r, target: i, data: s };
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.defined(i) && Ie.is(i.range) && (C.undefined(i.target) || C.string(i.target));
    }
    n2.is = t;
  })(Uu || (Uu = {}));
  (function(n2) {
    function e(r, i) {
      return { range: r, parent: i };
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.objectLiteral(i) && Ie.is(i.range) && (i.parent === void 0 || n2.is(i.parent));
    }
    n2.is = t;
  })(Hu || (Hu = {}));
  (function(n2) {
    n2.namespace = "namespace", n2.type = "type", n2.class = "class", n2.enum = "enum", n2.interface = "interface", n2.struct = "struct", n2.typeParameter = "typeParameter", n2.parameter = "parameter", n2.variable = "variable", n2.property = "property", n2.enumMember = "enumMember", n2.event = "event", n2.function = "function", n2.method = "method", n2.macro = "macro", n2.keyword = "keyword", n2.modifier = "modifier", n2.comment = "comment", n2.string = "string", n2.number = "number", n2.regexp = "regexp", n2.operator = "operator", n2.decorator = "decorator", n2.label = "label";
  })(Wu || (Wu = {}));
  (function(n2) {
    n2.declaration = "declaration", n2.definition = "definition", n2.readonly = "readonly", n2.static = "static", n2.deprecated = "deprecated", n2.abstract = "abstract", n2.async = "async", n2.modification = "modification", n2.documentation = "documentation", n2.defaultLibrary = "defaultLibrary";
  })(zu || (zu = {}));
  (function(n2) {
    function e(t) {
      let r = t;
      return C.objectLiteral(r) && (r.resultId === void 0 || typeof r.resultId == "string") && Array.isArray(r.data) && (r.data.length === 0 || typeof r.data[0] == "number");
    }
    n2.is = e;
  })(Ku || (Ku = {}));
  (function(n2) {
    function e(r, i) {
      return { range: r, text: i };
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return i != null && Ie.is(i.range) && C.string(i.text);
    }
    n2.is = t;
  })(Bu || (Bu = {}));
  (function(n2) {
    function e(r, i, s) {
      return { range: r, variableName: i, caseSensitiveLookup: s };
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return i != null && Ie.is(i.range) && C.boolean(i.caseSensitiveLookup) && (C.string(i.variableName) || i.variableName === void 0);
    }
    n2.is = t;
  })(Vu || (Vu = {}));
  (function(n2) {
    function e(r, i) {
      return { range: r, expression: i };
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return i != null && Ie.is(i.range) && (C.string(i.expression) || i.expression === void 0);
    }
    n2.is = t;
  })(Gu || (Gu = {}));
  (function(n2) {
    function e(r, i) {
      return { frameId: r, stoppedLocation: i };
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.defined(i) && Ie.is(r.stoppedLocation);
    }
    n2.is = t;
  })(Xu || (Xu = {}));
  (function(n2) {
    n2.Type = 1, n2.Parameter = 2;
    function e(t) {
      return t === 1 || t === 2;
    }
    n2.is = e;
  })(Do || (Do = {}));
  (function(n2) {
    function e(r) {
      return { value: r };
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.objectLiteral(i) && (i.tooltip === void 0 || C.string(i.tooltip) || Cr.is(i.tooltip)) && (i.location === void 0 || cs.is(i.location)) && (i.command === void 0 || Ur.is(i.command));
    }
    n2.is = t;
  })(So || (So = {}));
  (function(n2) {
    function e(r, i, s) {
      let o = { position: r, label: i };
      return s !== void 0 && (o.kind = s), o;
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return C.objectLiteral(i) && kt.is(i.position) && (C.string(i.label) || C.typedArray(i.label, So.is)) && (i.kind === void 0 || Do.is(i.kind)) && i.textEdits === void 0 || C.typedArray(i.textEdits, on.is) && (i.tooltip === void 0 || C.string(i.tooltip) || Cr.is(i.tooltip)) && (i.paddingLeft === void 0 || C.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || C.boolean(i.paddingRight));
    }
    n2.is = t;
  })(Ju || (Ju = {}));
  (function(n2) {
    function e(r) {
      return { kind: "snippet", value: r };
    }
    n2.createSnippet = e;
    function t(r) {
      let i = r;
      return C.objectLiteral(i) && i.kind === "snippet" && C.string(i.value);
    }
    n2.isSnippet = t;
  })(Po || (Po = {}));
  (function(n2) {
    function e(t, r, i, s) {
      return { insertText: t, filterText: r, range: i, command: s };
    }
    n2.create = e;
  })(Qu || (Qu = {}));
  (function(n2) {
    function e(t) {
      return { items: t };
    }
    n2.create = e;
  })(Yu || (Yu = {}));
  (function(n2) {
    n2.Invoked = 1, n2.Automatic = 2;
  })(Zu || (Zu = {}));
  (function(n2) {
    function e(t, r) {
      return { range: t, text: r };
    }
    n2.create = e;
  })(el || (el = {}));
  (function(n2) {
    function e(t, r) {
      return { triggerKind: t, selectedCompletionInfo: r };
    }
    n2.create = e;
  })(tl || (tl = {}));
  (function(n2) {
    function e(t) {
      let r = t;
      return C.objectLiteral(r) && mo.is(r.uri) && C.string(r.name);
    }
    n2.is = e;
  })(nl || (nl = {}));
  XC = [`
`, `\r
`, "\r"];
  (function(n2) {
    function e(s, o, a, c) {
      return new il(s, o, a, c);
    }
    n2.create = e;
    function t(s) {
      let o = s;
      return !!(C.defined(o) && C.string(o.uri) && (C.undefined(o.languageId) || C.string(o.languageId)) && C.uinteger(o.lineCount) && C.func(o.getText) && C.func(o.positionAt) && C.func(o.offsetAt));
    }
    n2.is = t;
    function r(s, o) {
      let a = s.getText(), c = i(o, (f, h) => {
        let p = f.range.start.line - h.range.start.line;
        return p === 0 ? f.range.start.character - h.range.start.character : p;
      }), l = a.length;
      for (let f = c.length - 1; f >= 0; f--) {
        let h = c[f], p = s.offsetAt(h.range.start), g = s.offsetAt(h.range.end);
        if (g <= l) a = a.substring(0, p) + h.newText + a.substring(g, a.length);
        else throw new Error("Overlapping edit");
        l = p;
      }
      return a;
    }
    n2.applyEdits = r;
    function i(s, o) {
      if (s.length <= 1) return s;
      let a = s.length / 2 | 0, c = s.slice(0, a), l = s.slice(a);
      i(c, o), i(l, o);
      let f = 0, h = 0, p = 0;
      for (; f < c.length && h < l.length; ) o(c[f], l[h]) <= 0 ? s[p++] = c[f++] : s[p++] = l[h++];
      for (; f < c.length; ) s[p++] = c[f++];
      for (; h < l.length; ) s[p++] = l[h++];
      return s;
    }
  })(rl || (rl = {}));
  il = class {
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
      if (i === 0) return kt.create(0, e);
      for (; r < i; ) {
        let o = Math.floor((r + i) / 2);
        t[o] > e ? i = o : r = o + 1;
      }
      let s = r - 1;
      return kt.create(s, e - t[s]);
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
  (function(n2) {
    let e = Object.prototype.toString;
    function t(g) {
      return typeof g < "u";
    }
    n2.defined = t;
    function r(g) {
      return typeof g > "u";
    }
    n2.undefined = r;
    function i(g) {
      return g === true || g === false;
    }
    n2.boolean = i;
    function s(g) {
      return e.call(g) === "[object String]";
    }
    n2.string = s;
    function o(g) {
      return e.call(g) === "[object Number]";
    }
    n2.number = o;
    function a(g, _, y) {
      return e.call(g) === "[object Number]" && _ <= g && g <= y;
    }
    n2.numberRange = a;
    function c(g) {
      return e.call(g) === "[object Number]" && -2147483648 <= g && g <= 2147483647;
    }
    n2.integer = c;
    function l(g) {
      return e.call(g) === "[object Number]" && 0 <= g && g <= 2147483647;
    }
    n2.uinteger = l;
    function f(g) {
      return e.call(g) === "[object Function]";
    }
    n2.func = f;
    function h(g) {
      return g !== null && typeof g == "object";
    }
    n2.objectLiteral = h;
    function p(g, _) {
      return Array.isArray(g) && g.every(_);
    }
    n2.typedArray = p;
  })(C || (C = {}));
});
var we = R((ct) => {
  "use strict";
  Object.defineProperty(ct, "__esModule", { value: true });
  ct.CM = ct.ProtocolNotificationType = ct.ProtocolNotificationType0 = ct.ProtocolRequestType = ct.ProtocolRequestType0 = ct.RegistrationType = ct.MessageDirection = void 0;
  var Di = An(), xp;
  (function(n2) {
    n2.clientToServer = "clientToServer", n2.serverToClient = "serverToClient", n2.both = "both";
  })(xp || (ct.MessageDirection = xp = {}));
  var sl = class {
    ____;
    method;
    constructor(e) {
      this.method = e;
    }
  };
  ct.RegistrationType = sl;
  var ol = class extends Di.RequestType0 {
    __;
    ___;
    ____;
    _pr;
    constructor(e) {
      super(e);
    }
  };
  ct.ProtocolRequestType0 = ol;
  var al = class extends Di.RequestType {
    __;
    ___;
    ____;
    _pr;
    constructor(e) {
      super(e, Di.ParameterStructures.byName);
    }
  };
  ct.ProtocolRequestType = al;
  var cl = class extends Di.NotificationType0 {
    ___;
    ____;
    constructor(e) {
      super(e);
    }
  };
  ct.ProtocolNotificationType0 = cl;
  var ul = class extends Di.NotificationType {
    ___;
    ____;
    constructor(e) {
      super(e, Di.ParameterStructures.byName);
    }
  };
  ct.ProtocolNotificationType = ul;
  var Mp;
  (function(n2) {
    function e(t, r) {
      return { client: t, server: r };
    }
    n2.create = e;
  })(Mp || (ct.CM = Mp = {}));
});
var Oo = R((Bt) => {
  "use strict";
  Object.defineProperty(Bt, "__esModule", { value: true });
  Bt.boolean = JC;
  Bt.string = Ip;
  Bt.number = QC;
  Bt.error = YC;
  Bt.func = ZC;
  Bt.array = Np;
  Bt.stringArray = ew;
  Bt.typedArray = tw;
  Bt.objectLiteral = nw;
  function JC(n2) {
    return n2 === true || n2 === false;
  }
  function Ip(n2) {
    return typeof n2 == "string" || n2 instanceof String;
  }
  function QC(n2) {
    return typeof n2 == "number" || n2 instanceof Number;
  }
  function YC(n2) {
    return n2 instanceof Error;
  }
  function ZC(n2) {
    return typeof n2 == "function";
  }
  function Np(n2) {
    return Array.isArray(n2);
  }
  function ew(n2) {
    return Np(n2) && n2.every((e) => Ip(e));
  }
  function tw(n2, e) {
    return Array.isArray(n2) && n2.every(e);
  }
  function nw(n2) {
    return n2 !== null && typeof n2 == "object";
  }
});
var Fp = R((Eo) => {
  "use strict";
  Object.defineProperty(Eo, "__esModule", { value: true });
  Eo.ImplementationRequest = void 0;
  var ll = we(), jp;
  (function(n2) {
    n2.method = "textDocument/implementation", n2.messageDirection = ll.MessageDirection.clientToServer, n2.type = new ll.ProtocolRequestType(n2.method), n2.capabilities = ll.CM.create("textDocument.implementation", "implementationProvider");
  })(jp || (Eo.ImplementationRequest = jp = {}));
});
var Ap = R((qo) => {
  "use strict";
  Object.defineProperty(qo, "__esModule", { value: true });
  qo.TypeDefinitionRequest = void 0;
  var dl = we(), Lp;
  (function(n2) {
    n2.method = "textDocument/typeDefinition", n2.messageDirection = dl.MessageDirection.clientToServer, n2.type = new dl.ProtocolRequestType(n2.method), n2.capabilities = dl.CM.create("textDocument.typeDefinition", "typeDefinitionProvider");
  })(Lp || (qo.TypeDefinitionRequest = Lp = {}));
});
var Up = R((Pi) => {
  "use strict";
  Object.defineProperty(Pi, "__esModule", { value: true });
  Pi.DidChangeWorkspaceFoldersNotification = Pi.WorkspaceFoldersRequest = void 0;
  var Si = we(), kp;
  (function(n2) {
    n2.method = "workspace/workspaceFolders", n2.messageDirection = Si.MessageDirection.serverToClient, n2.type = new Si.ProtocolRequestType0(n2.method), n2.capabilities = Si.CM.create("workspace.workspaceFolders", "workspace.workspaceFolders");
  })(kp || (Pi.WorkspaceFoldersRequest = kp = {}));
  var $p;
  (function(n2) {
    n2.method = "workspace/didChangeWorkspaceFolders", n2.messageDirection = Si.MessageDirection.clientToServer, n2.type = new Si.ProtocolNotificationType(n2.method), n2.capabilities = Si.CM.create(void 0, "workspace.workspaceFolders.changeNotifications");
  })($p || (Pi.DidChangeWorkspaceFoldersNotification = $p = {}));
});
var Wp = R((xo) => {
  "use strict";
  Object.defineProperty(xo, "__esModule", { value: true });
  xo.ConfigurationRequest = void 0;
  var fl = we(), Hp;
  (function(n2) {
    n2.method = "workspace/configuration", n2.messageDirection = fl.MessageDirection.serverToClient, n2.type = new fl.ProtocolRequestType(n2.method), n2.capabilities = fl.CM.create("workspace.configuration", void 0);
  })(Hp || (xo.ConfigurationRequest = Hp = {}));
});
var Bp = R((Ti) => {
  "use strict";
  Object.defineProperty(Ti, "__esModule", { value: true });
  Ti.ColorPresentationRequest = Ti.DocumentColorRequest = void 0;
  var Ri = we(), zp;
  (function(n2) {
    n2.method = "textDocument/documentColor", n2.messageDirection = Ri.MessageDirection.clientToServer, n2.type = new Ri.ProtocolRequestType(n2.method), n2.capabilities = Ri.CM.create("textDocument.colorProvider", "colorProvider");
  })(zp || (Ti.DocumentColorRequest = zp = {}));
  var Kp;
  (function(n2) {
    n2.method = "textDocument/colorPresentation", n2.messageDirection = Ri.MessageDirection.clientToServer, n2.type = new Ri.ProtocolRequestType(n2.method), n2.capabilities = Ri.CM.create("textDocument.colorProvider", "colorProvider");
  })(Kp || (Ti.ColorPresentationRequest = Kp = {}));
});
var Xp = R((Ei) => {
  "use strict";
  Object.defineProperty(Ei, "__esModule", { value: true });
  Ei.FoldingRangeRefreshRequest = Ei.FoldingRangeRequest = void 0;
  var Oi = we(), Vp;
  (function(n2) {
    n2.method = "textDocument/foldingRange", n2.messageDirection = Oi.MessageDirection.clientToServer, n2.type = new Oi.ProtocolRequestType(n2.method), n2.capabilities = Oi.CM.create("textDocument.foldingRange", "foldingRangeProvider");
  })(Vp || (Ei.FoldingRangeRequest = Vp = {}));
  var Gp;
  (function(n2) {
    n2.method = "workspace/foldingRange/refresh", n2.messageDirection = Oi.MessageDirection.serverToClient, n2.type = new Oi.ProtocolRequestType0(n2.method), n2.capabilities = Oi.CM.create("workspace.foldingRange.refreshSupport", void 0);
  })(Gp || (Ei.FoldingRangeRefreshRequest = Gp = {}));
});
var Qp = R((Mo) => {
  "use strict";
  Object.defineProperty(Mo, "__esModule", { value: true });
  Mo.DeclarationRequest = void 0;
  var hl = we(), Jp;
  (function(n2) {
    n2.method = "textDocument/declaration", n2.messageDirection = hl.MessageDirection.clientToServer, n2.type = new hl.ProtocolRequestType(n2.method), n2.capabilities = hl.CM.create("textDocument.declaration", "declarationProvider");
  })(Jp || (Mo.DeclarationRequest = Jp = {}));
});
var Zp = R((Io) => {
  "use strict";
  Object.defineProperty(Io, "__esModule", { value: true });
  Io.SelectionRangeRequest = void 0;
  var pl = we(), Yp;
  (function(n2) {
    n2.method = "textDocument/selectionRange", n2.messageDirection = pl.MessageDirection.clientToServer, n2.type = new pl.ProtocolRequestType(n2.method), n2.capabilities = pl.CM.create("textDocument.selectionRange", "selectionRangeProvider");
  })(Yp || (Io.SelectionRangeRequest = Yp = {}));
});
var rg = R((wr) => {
  "use strict";
  Object.defineProperty(wr, "__esModule", { value: true });
  wr.WorkDoneProgressCancelNotification = wr.WorkDoneProgressCreateRequest = wr.WorkDoneProgress = void 0;
  var rw = An(), ps = we(), eg;
  (function(n2) {
    n2.type = new rw.ProgressType();
    function e(t) {
      return t === n2.type;
    }
    n2.is = e;
  })(eg || (wr.WorkDoneProgress = eg = {}));
  var tg;
  (function(n2) {
    n2.method = "window/workDoneProgress/create", n2.messageDirection = ps.MessageDirection.serverToClient, n2.type = new ps.ProtocolRequestType(n2.method), n2.capabilities = ps.CM.create("window.workDoneProgress", void 0);
  })(tg || (wr.WorkDoneProgressCreateRequest = tg = {}));
  var ng;
  (function(n2) {
    n2.method = "window/workDoneProgress/cancel", n2.messageDirection = ps.MessageDirection.clientToServer, n2.type = new ps.ProtocolNotificationType(n2.method);
  })(ng || (wr.WorkDoneProgressCancelNotification = ng = {}));
});
var ag = R((Dr) => {
  "use strict";
  Object.defineProperty(Dr, "__esModule", { value: true });
  Dr.CallHierarchyOutgoingCallsRequest = Dr.CallHierarchyIncomingCallsRequest = Dr.CallHierarchyPrepareRequest = void 0;
  var $n = we(), ig;
  (function(n2) {
    n2.method = "textDocument/prepareCallHierarchy", n2.messageDirection = $n.MessageDirection.clientToServer, n2.type = new $n.ProtocolRequestType(n2.method), n2.capabilities = $n.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
  })(ig || (Dr.CallHierarchyPrepareRequest = ig = {}));
  var sg;
  (function(n2) {
    n2.method = "callHierarchy/incomingCalls", n2.messageDirection = $n.MessageDirection.clientToServer, n2.type = new $n.ProtocolRequestType(n2.method), n2.capabilities = $n.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
  })(sg || (Dr.CallHierarchyIncomingCallsRequest = sg = {}));
  var og;
  (function(n2) {
    n2.method = "callHierarchy/outgoingCalls", n2.messageDirection = $n.MessageDirection.clientToServer, n2.type = new $n.ProtocolRequestType(n2.method), n2.capabilities = $n.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
  })(og || (Dr.CallHierarchyOutgoingCallsRequest = og = {}));
});
var hg = R((vt) => {
  "use strict";
  Object.defineProperty(vt, "__esModule", { value: true });
  vt.SemanticTokensRefreshRequest = vt.SemanticTokensRangeRequest = vt.SemanticTokensDeltaRequest = vt.SemanticTokensRequest = vt.SemanticTokensRegistrationType = vt.TokenFormat = void 0;
  var Tt = we(), cg;
  (function(n2) {
    n2.Relative = "relative";
  })(cg || (vt.TokenFormat = cg = {}));
  var gs;
  (function(n2) {
    n2.method = "textDocument/semanticTokens", n2.type = new Tt.RegistrationType(n2.method);
  })(gs || (vt.SemanticTokensRegistrationType = gs = {}));
  var ug;
  (function(n2) {
    n2.method = "textDocument/semanticTokens/full", n2.messageDirection = Tt.MessageDirection.clientToServer, n2.type = new Tt.ProtocolRequestType(n2.method), n2.registrationMethod = gs.method, n2.capabilities = Tt.CM.create("textDocument.semanticTokens", "semanticTokensProvider");
  })(ug || (vt.SemanticTokensRequest = ug = {}));
  var lg;
  (function(n2) {
    n2.method = "textDocument/semanticTokens/full/delta", n2.messageDirection = Tt.MessageDirection.clientToServer, n2.type = new Tt.ProtocolRequestType(n2.method), n2.registrationMethod = gs.method, n2.capabilities = Tt.CM.create("textDocument.semanticTokens.requests.full.delta", "semanticTokensProvider.full.delta");
  })(lg || (vt.SemanticTokensDeltaRequest = lg = {}));
  var dg;
  (function(n2) {
    n2.method = "textDocument/semanticTokens/range", n2.messageDirection = Tt.MessageDirection.clientToServer, n2.type = new Tt.ProtocolRequestType(n2.method), n2.registrationMethod = gs.method, n2.capabilities = Tt.CM.create("textDocument.semanticTokens.requests.range", "semanticTokensProvider.range");
  })(dg || (vt.SemanticTokensRangeRequest = dg = {}));
  var fg;
  (function(n2) {
    n2.method = "workspace/semanticTokens/refresh", n2.messageDirection = Tt.MessageDirection.serverToClient, n2.type = new Tt.ProtocolRequestType0(n2.method), n2.capabilities = Tt.CM.create("workspace.semanticTokens.refreshSupport", void 0);
  })(fg || (vt.SemanticTokensRefreshRequest = fg = {}));
});
var gg = R((No) => {
  "use strict";
  Object.defineProperty(No, "__esModule", { value: true });
  No.ShowDocumentRequest = void 0;
  var gl = we(), pg;
  (function(n2) {
    n2.method = "window/showDocument", n2.messageDirection = gl.MessageDirection.serverToClient, n2.type = new gl.ProtocolRequestType(n2.method), n2.capabilities = gl.CM.create("window.showDocument.support", void 0);
  })(pg || (No.ShowDocumentRequest = pg = {}));
});
var _g = R((jo) => {
  "use strict";
  Object.defineProperty(jo, "__esModule", { value: true });
  jo.LinkedEditingRangeRequest = void 0;
  var ml = we(), mg;
  (function(n2) {
    n2.method = "textDocument/linkedEditingRange", n2.messageDirection = ml.MessageDirection.clientToServer, n2.type = new ml.ProtocolRequestType(n2.method), n2.capabilities = ml.CM.create("textDocument.linkedEditingRange", "linkedEditingRangeProvider");
  })(mg || (jo.LinkedEditingRangeRequest = mg = {}));
});
var Pg = R((ut) => {
  "use strict";
  Object.defineProperty(ut, "__esModule", { value: true });
  ut.WillDeleteFilesRequest = ut.DidDeleteFilesNotification = ut.DidRenameFilesNotification = ut.WillRenameFilesRequest = ut.DidCreateFilesNotification = ut.WillCreateFilesRequest = ut.FileOperationPatternKind = void 0;
  var Ge = we(), yg;
  (function(n2) {
    n2.file = "file", n2.folder = "folder";
  })(yg || (ut.FileOperationPatternKind = yg = {}));
  var vg;
  (function(n2) {
    n2.method = "workspace/willCreateFiles", n2.messageDirection = Ge.MessageDirection.clientToServer, n2.type = new Ge.ProtocolRequestType(n2.method), n2.capabilities = Ge.CM.create("workspace.fileOperations.willCreate", "workspace.fileOperations.willCreate");
  })(vg || (ut.WillCreateFilesRequest = vg = {}));
  var bg;
  (function(n2) {
    n2.method = "workspace/didCreateFiles", n2.messageDirection = Ge.MessageDirection.clientToServer, n2.type = new Ge.ProtocolNotificationType(n2.method), n2.capabilities = Ge.CM.create("workspace.fileOperations.didCreate", "workspace.fileOperations.didCreate");
  })(bg || (ut.DidCreateFilesNotification = bg = {}));
  var Cg;
  (function(n2) {
    n2.method = "workspace/willRenameFiles", n2.messageDirection = Ge.MessageDirection.clientToServer, n2.type = new Ge.ProtocolRequestType(n2.method), n2.capabilities = Ge.CM.create("workspace.fileOperations.willRename", "workspace.fileOperations.willRename");
  })(Cg || (ut.WillRenameFilesRequest = Cg = {}));
  var wg;
  (function(n2) {
    n2.method = "workspace/didRenameFiles", n2.messageDirection = Ge.MessageDirection.clientToServer, n2.type = new Ge.ProtocolNotificationType(n2.method), n2.capabilities = Ge.CM.create("workspace.fileOperations.didRename", "workspace.fileOperations.didRename");
  })(wg || (ut.DidRenameFilesNotification = wg = {}));
  var Dg;
  (function(n2) {
    n2.method = "workspace/didDeleteFiles", n2.messageDirection = Ge.MessageDirection.clientToServer, n2.type = new Ge.ProtocolNotificationType(n2.method), n2.capabilities = Ge.CM.create("workspace.fileOperations.didDelete", "workspace.fileOperations.didDelete");
  })(Dg || (ut.DidDeleteFilesNotification = Dg = {}));
  var Sg;
  (function(n2) {
    n2.method = "workspace/willDeleteFiles", n2.messageDirection = Ge.MessageDirection.clientToServer, n2.type = new Ge.ProtocolRequestType(n2.method), n2.capabilities = Ge.CM.create("workspace.fileOperations.willDelete", "workspace.fileOperations.willDelete");
  })(Sg || (ut.WillDeleteFilesRequest = Sg = {}));
});
var Eg = R((Sr) => {
  "use strict";
  Object.defineProperty(Sr, "__esModule", { value: true });
  Sr.MonikerRequest = Sr.MonikerKind = Sr.UniquenessLevel = void 0;
  var _l = we(), Rg;
  (function(n2) {
    n2.document = "document", n2.project = "project", n2.group = "group", n2.scheme = "scheme", n2.global = "global";
  })(Rg || (Sr.UniquenessLevel = Rg = {}));
  var Tg;
  (function(n2) {
    n2.$import = "import", n2.$export = "export", n2.local = "local";
  })(Tg || (Sr.MonikerKind = Tg = {}));
  var Og;
  (function(n2) {
    n2.method = "textDocument/moniker", n2.messageDirection = _l.MessageDirection.clientToServer, n2.type = new _l.ProtocolRequestType(n2.method), n2.capabilities = _l.CM.create("textDocument.moniker", "monikerProvider");
  })(Og || (Sr.MonikerRequest = Og = {}));
});
var Ig = R((Pr) => {
  "use strict";
  Object.defineProperty(Pr, "__esModule", { value: true });
  Pr.TypeHierarchySubtypesRequest = Pr.TypeHierarchySupertypesRequest = Pr.TypeHierarchyPrepareRequest = void 0;
  var Hr = we(), qg;
  (function(n2) {
    n2.method = "textDocument/prepareTypeHierarchy", n2.messageDirection = Hr.MessageDirection.clientToServer, n2.type = new Hr.ProtocolRequestType(n2.method), n2.capabilities = Hr.CM.create("textDocument.typeHierarchy", "typeHierarchyProvider");
  })(qg || (Pr.TypeHierarchyPrepareRequest = qg = {}));
  var xg;
  (function(n2) {
    n2.method = "typeHierarchy/supertypes", n2.messageDirection = Hr.MessageDirection.clientToServer, n2.type = new Hr.ProtocolRequestType(n2.method);
  })(xg || (Pr.TypeHierarchySupertypesRequest = xg = {}));
  var Mg;
  (function(n2) {
    n2.method = "typeHierarchy/subtypes", n2.messageDirection = Hr.MessageDirection.clientToServer, n2.type = new Hr.ProtocolRequestType(n2.method);
  })(Mg || (Pr.TypeHierarchySubtypesRequest = Mg = {}));
});
var Fg = R((xi) => {
  "use strict";
  Object.defineProperty(xi, "__esModule", { value: true });
  xi.InlineValueRefreshRequest = xi.InlineValueRequest = void 0;
  var qi = we(), Ng;
  (function(n2) {
    n2.method = "textDocument/inlineValue", n2.messageDirection = qi.MessageDirection.clientToServer, n2.type = new qi.ProtocolRequestType(n2.method), n2.capabilities = qi.CM.create("textDocument.inlineValue", "inlineValueProvider");
  })(Ng || (xi.InlineValueRequest = Ng = {}));
  var jg;
  (function(n2) {
    n2.method = "workspace/inlineValue/refresh", n2.messageDirection = qi.MessageDirection.serverToClient, n2.type = new qi.ProtocolRequestType0(n2.method), n2.capabilities = qi.CM.create("workspace.inlineValue.refreshSupport", void 0);
  })(jg || (xi.InlineValueRefreshRequest = jg = {}));
});
var $g = R((Rr) => {
  "use strict";
  Object.defineProperty(Rr, "__esModule", { value: true });
  Rr.InlayHintRefreshRequest = Rr.InlayHintResolveRequest = Rr.InlayHintRequest = void 0;
  var Un = we(), Lg;
  (function(n2) {
    n2.method = "textDocument/inlayHint", n2.messageDirection = Un.MessageDirection.clientToServer, n2.type = new Un.ProtocolRequestType(n2.method), n2.capabilities = Un.CM.create("textDocument.inlayHint", "inlayHintProvider");
  })(Lg || (Rr.InlayHintRequest = Lg = {}));
  var Ag;
  (function(n2) {
    n2.method = "inlayHint/resolve", n2.messageDirection = Un.MessageDirection.clientToServer, n2.type = new Un.ProtocolRequestType(n2.method), n2.capabilities = Un.CM.create("textDocument.inlayHint.resolveSupport", "inlayHintProvider.resolveProvider");
  })(Ag || (Rr.InlayHintResolveRequest = Ag = {}));
  var kg;
  (function(n2) {
    n2.method = "workspace/inlayHint/refresh", n2.messageDirection = Un.MessageDirection.serverToClient, n2.type = new Un.ProtocolRequestType0(n2.method), n2.capabilities = Un.CM.create("workspace.inlayHint.refreshSupport", void 0);
  })(kg || (Rr.InlayHintRefreshRequest = kg = {}));
});
var Vg = R((Xe) => {
  "use strict";
  var iw = Xe && Xe.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), sw = Xe && Xe.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), ow = Xe && Xe.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && iw(t, e, r[i]);
      return sw(t, e), t;
    };
  })();
  Object.defineProperty(Xe, "__esModule", { value: true });
  Xe.DiagnosticRefreshRequest = Xe.WorkspaceDiagnosticRequest = Xe.DocumentDiagnosticRequest = Xe.DocumentDiagnosticReportKind = Xe.DiagnosticServerCancellationData = void 0;
  var Bg = An(), aw = ow(Oo()), Hn = we(), Ug;
  (function(n2) {
    function e(t) {
      let r = t;
      return r && aw.boolean(r.retriggerRequest);
    }
    n2.is = e;
  })(Ug || (Xe.DiagnosticServerCancellationData = Ug = {}));
  var Hg;
  (function(n2) {
    n2.Full = "full", n2.Unchanged = "unchanged";
  })(Hg || (Xe.DocumentDiagnosticReportKind = Hg = {}));
  var Wg;
  (function(n2) {
    n2.method = "textDocument/diagnostic", n2.messageDirection = Hn.MessageDirection.clientToServer, n2.type = new Hn.ProtocolRequestType(n2.method), n2.partialResult = new Bg.ProgressType(), n2.capabilities = Hn.CM.create("textDocument.diagnostic", "diagnosticProvider");
  })(Wg || (Xe.DocumentDiagnosticRequest = Wg = {}));
  var zg;
  (function(n2) {
    n2.method = "workspace/diagnostic", n2.messageDirection = Hn.MessageDirection.clientToServer, n2.type = new Hn.ProtocolRequestType(n2.method), n2.partialResult = new Bg.ProgressType(), n2.capabilities = Hn.CM.create("workspace.diagnostics", "diagnosticProvider.workspaceDiagnostics");
  })(zg || (Xe.WorkspaceDiagnosticRequest = zg = {}));
  var Kg;
  (function(n2) {
    n2.method = "workspace/diagnostic/refresh", n2.messageDirection = Hn.MessageDirection.serverToClient, n2.type = new Hn.ProtocolRequestType0(n2.method), n2.capabilities = Hn.CM.create("workspace.diagnostics.refreshSupport", void 0);
  })(Kg || (Xe.DiagnosticRefreshRequest = Kg = {}));
});
var em = R((fe) => {
  "use strict";
  var cw = fe && fe.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), uw = fe && fe.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), lw = fe && fe.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && cw(t, e, r[i]);
      return uw(t, e), t;
    };
  })();
  Object.defineProperty(fe, "__esModule", { value: true });
  fe.DidCloseNotebookDocumentNotification = fe.DidSaveNotebookDocumentNotification = fe.DidChangeNotebookDocumentNotification = fe.NotebookCellArrayChange = fe.DidOpenNotebookDocumentNotification = fe.NotebookDocumentSyncRegistrationType = fe.NotebookDocument = fe.NotebookCell = fe.ExecutionSummary = fe.NotebookCellKind = void 0;
  var ms = (To(), es(Ro)), Vt = lw(Oo()), an = we(), yl;
  (function(n2) {
    n2.Markup = 1, n2.Code = 2;
    function e(t) {
      return t === 1 || t === 2;
    }
    n2.is = e;
  })(yl || (fe.NotebookCellKind = yl = {}));
  var vl;
  (function(n2) {
    function e(i, s) {
      let o = { executionOrder: i };
      return (s === true || s === false) && (o.success = s), o;
    }
    n2.create = e;
    function t(i) {
      let s = i;
      return Vt.objectLiteral(s) && ms.uinteger.is(s.executionOrder) && (s.success === void 0 || Vt.boolean(s.success));
    }
    n2.is = t;
    function r(i, s) {
      return i === s ? true : i == null || s === null || s === void 0 ? false : i.executionOrder === s.executionOrder && i.success === s.success;
    }
    n2.equals = r;
  })(vl || (fe.ExecutionSummary = vl = {}));
  var Fo;
  (function(n2) {
    function e(s, o) {
      return { kind: s, document: o };
    }
    n2.create = e;
    function t(s) {
      let o = s;
      return Vt.objectLiteral(o) && yl.is(o.kind) && ms.DocumentUri.is(o.document) && (o.metadata === void 0 || Vt.objectLiteral(o.metadata));
    }
    n2.is = t;
    function r(s, o) {
      let a = /* @__PURE__ */ new Set();
      return s.document !== o.document && a.add("document"), s.kind !== o.kind && a.add("kind"), s.executionSummary !== o.executionSummary && a.add("executionSummary"), (s.metadata !== void 0 || o.metadata !== void 0) && !i(s.metadata, o.metadata) && a.add("metadata"), (s.executionSummary !== void 0 || o.executionSummary !== void 0) && !vl.equals(s.executionSummary, o.executionSummary) && a.add("executionSummary"), a;
    }
    n2.diff = r;
    function i(s, o) {
      if (s === o) return true;
      if (s == null || o === null || o === void 0 || typeof s != typeof o || typeof s != "object") return false;
      let a = Array.isArray(s), c = Array.isArray(o);
      if (a !== c) return false;
      if (a && c) {
        if (s.length !== o.length) return false;
        for (let l = 0; l < s.length; l++) if (!i(s[l], o[l])) return false;
      }
      if (Vt.objectLiteral(s) && Vt.objectLiteral(o)) {
        let l = Object.keys(s), f = Object.keys(o);
        if (l.length !== f.length || (l.sort(), f.sort(), !i(l, f))) return false;
        for (let h = 0; h < l.length; h++) {
          let p = l[h];
          if (!i(s[p], o[p])) return false;
        }
      }
      return true;
    }
  })(Fo || (fe.NotebookCell = Fo = {}));
  var Gg;
  (function(n2) {
    function e(r, i, s, o) {
      return { uri: r, notebookType: i, version: s, cells: o };
    }
    n2.create = e;
    function t(r) {
      let i = r;
      return Vt.objectLiteral(i) && Vt.string(i.uri) && ms.integer.is(i.version) && Vt.typedArray(i.cells, Fo.is);
    }
    n2.is = t;
  })(Gg || (fe.NotebookDocument = Gg = {}));
  var Mi;
  (function(n2) {
    n2.method = "notebookDocument/sync", n2.messageDirection = an.MessageDirection.clientToServer, n2.type = new an.RegistrationType(n2.method);
  })(Mi || (fe.NotebookDocumentSyncRegistrationType = Mi = {}));
  var Xg;
  (function(n2) {
    n2.method = "notebookDocument/didOpen", n2.messageDirection = an.MessageDirection.clientToServer, n2.type = new an.ProtocolNotificationType(n2.method), n2.registrationMethod = Mi.method;
  })(Xg || (fe.DidOpenNotebookDocumentNotification = Xg = {}));
  var Jg;
  (function(n2) {
    function e(r) {
      let i = r;
      return Vt.objectLiteral(i) && ms.uinteger.is(i.start) && ms.uinteger.is(i.deleteCount) && (i.cells === void 0 || Vt.typedArray(i.cells, Fo.is));
    }
    n2.is = e;
    function t(r, i, s) {
      let o = { start: r, deleteCount: i };
      return s !== void 0 && (o.cells = s), o;
    }
    n2.create = t;
  })(Jg || (fe.NotebookCellArrayChange = Jg = {}));
  var Qg;
  (function(n2) {
    n2.method = "notebookDocument/didChange", n2.messageDirection = an.MessageDirection.clientToServer, n2.type = new an.ProtocolNotificationType(n2.method), n2.registrationMethod = Mi.method;
  })(Qg || (fe.DidChangeNotebookDocumentNotification = Qg = {}));
  var Yg;
  (function(n2) {
    n2.method = "notebookDocument/didSave", n2.messageDirection = an.MessageDirection.clientToServer, n2.type = new an.ProtocolNotificationType(n2.method), n2.registrationMethod = Mi.method;
  })(Yg || (fe.DidSaveNotebookDocumentNotification = Yg = {}));
  var Zg;
  (function(n2) {
    n2.method = "notebookDocument/didClose", n2.messageDirection = an.MessageDirection.clientToServer, n2.type = new an.ProtocolNotificationType(n2.method), n2.registrationMethod = Mi.method;
  })(Zg || (fe.DidCloseNotebookDocumentNotification = Zg = {}));
});
var nm = R((Lo) => {
  "use strict";
  Object.defineProperty(Lo, "__esModule", { value: true });
  Lo.InlineCompletionRequest = void 0;
  var bl = we(), tm;
  (function(n2) {
    n2.method = "textDocument/inlineCompletion", n2.messageDirection = bl.MessageDirection.clientToServer, n2.type = new bl.ProtocolRequestType(n2.method), n2.capabilities = bl.CM.create("textDocument.inlineCompletion", "inlineCompletionProvider");
  })(tm || (Lo.InlineCompletionRequest = tm = {}));
});
var sm = R((Ii) => {
  "use strict";
  Object.defineProperty(Ii, "__esModule", { value: true });
  Ii.TextDocumentContentRefreshRequest = Ii.TextDocumentContentRequest = void 0;
  var _s = we(), rm;
  (function(n2) {
    n2.method = "workspace/textDocumentContent", n2.messageDirection = _s.MessageDirection.clientToServer, n2.type = new _s.ProtocolRequestType(n2.method), n2.capabilities = _s.CM.create("workspace.textDocumentContent", "workspace.textDocumentContent");
  })(rm || (Ii.TextDocumentContentRequest = rm = {}));
  var im;
  (function(n2) {
    n2.method = "workspace/textDocumentContent/refresh", n2.messageDirection = _s.MessageDirection.serverToClient, n2.type = new _s.ProtocolRequestType(n2.method);
  })(im || (Ii.TextDocumentContentRefreshRequest = im = {}));
});
var v_ = R((m) => {
  "use strict";
  var dw = m && m.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), fw = m && m.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), hw = m && m.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && dw(t, e, r[i]);
      return fw(t, e), t;
    };
  })();
  Object.defineProperty(m, "__esModule", { value: true });
  m.CodeActionRequest = m.DocumentSymbolRequest = m.DocumentHighlightRequest = m.ReferencesRequest = m.DefinitionRequest = m.SignatureHelpRequest = m.SignatureHelpTriggerKind = m.HoverRequest = m.CompletionResolveRequest = m.CompletionRequest = m.CompletionTriggerKind = m.PublishDiagnosticsNotification = m.WatchKind = m.GlobPattern = m.RelativePattern = m.FileChangeType = m.DidChangeWatchedFilesNotification = m.WillSaveTextDocumentWaitUntilRequest = m.WillSaveTextDocumentNotification = m.TextDocumentSaveReason = m.DidSaveTextDocumentNotification = m.DidCloseTextDocumentNotification = m.DidChangeTextDocumentNotification = m.TextDocumentContentChangeEvent = m.DidOpenTextDocumentNotification = m.TextDocumentSyncKind = m.TelemetryEventNotification = m.LogMessageNotification = m.ShowMessageRequest = m.ShowMessageNotification = m.MessageType = m.DidChangeConfigurationNotification = m.ExitNotification = m.ShutdownRequest = m.InitializedNotification = m.InitializeErrorCodes = m.InitializeRequest = m.WorkDoneProgressOptions = m.TextDocumentRegistrationOptions = m.StaticRegistrationOptions = m.PositionEncodingKind = m.RegularExpressionEngineKind = m.FailureHandlingKind = m.ResourceOperationKind = m.UnregistrationRequest = m.RegistrationRequest = m.DocumentSelector = m.NotebookCellTextDocumentFilter = m.NotebookDocumentFilter = m.TextDocumentFilter = void 0;
  m.UniquenessLevel = m.WillDeleteFilesRequest = m.DidDeleteFilesNotification = m.WillRenameFilesRequest = m.DidRenameFilesNotification = m.WillCreateFilesRequest = m.DidCreateFilesNotification = m.FileOperationPatternKind = m.LinkedEditingRangeRequest = m.ShowDocumentRequest = m.SemanticTokensRegistrationType = m.SemanticTokensRefreshRequest = m.SemanticTokensRangeRequest = m.SemanticTokensDeltaRequest = m.SemanticTokensRequest = m.TokenFormat = m.CallHierarchyPrepareRequest = m.CallHierarchyOutgoingCallsRequest = m.CallHierarchyIncomingCallsRequest = m.WorkDoneProgressCancelNotification = m.WorkDoneProgressCreateRequest = m.WorkDoneProgress = m.SelectionRangeRequest = m.DeclarationRequest = m.FoldingRangeRefreshRequest = m.FoldingRangeRequest = m.ColorPresentationRequest = m.DocumentColorRequest = m.ConfigurationRequest = m.DidChangeWorkspaceFoldersNotification = m.WorkspaceFoldersRequest = m.TypeDefinitionRequest = m.ImplementationRequest = m.ApplyWorkspaceEditRequest = m.ExecuteCommandRequest = m.PrepareRenameRequest = m.RenameRequest = m.PrepareSupportDefaultBehavior = m.DocumentOnTypeFormattingRequest = m.DocumentRangesFormattingRequest = m.DocumentRangeFormattingRequest = m.DocumentFormattingRequest = m.DocumentLinkResolveRequest = m.DocumentLinkRequest = m.CodeLensRefreshRequest = m.CodeLensResolveRequest = m.CodeLensRequest = m.WorkspaceSymbolResolveRequest = m.WorkspaceSymbolRequest = m.CodeActionResolveRequest = void 0;
  m.TextDocumentContentRefreshRequest = m.TextDocumentContentRequest = m.InlineCompletionRequest = m.DidCloseNotebookDocumentNotification = m.DidSaveNotebookDocumentNotification = m.DidChangeNotebookDocumentNotification = m.NotebookCellArrayChange = m.DidOpenNotebookDocumentNotification = m.NotebookDocumentSyncRegistrationType = m.NotebookDocument = m.NotebookCell = m.ExecutionSummary = m.NotebookCellKind = m.DiagnosticRefreshRequest = m.WorkspaceDiagnosticRequest = m.DocumentDiagnosticRequest = m.DocumentDiagnosticReportKind = m.DiagnosticServerCancellationData = m.InlayHintRefreshRequest = m.InlayHintResolveRequest = m.InlayHintRequest = m.InlineValueRefreshRequest = m.InlineValueRequest = m.TypeHierarchySupertypesRequest = m.TypeHierarchySubtypesRequest = m.TypeHierarchyPrepareRequest = m.MonikerRequest = m.MonikerKind = void 0;
  var E = we(), om = (To(), es(Ro)), Je = hw(Oo()), pw = Fp();
  Object.defineProperty(m, "ImplementationRequest", { enumerable: true, get: function() {
    return pw.ImplementationRequest;
  } });
  var gw = Ap();
  Object.defineProperty(m, "TypeDefinitionRequest", { enumerable: true, get: function() {
    return gw.TypeDefinitionRequest;
  } });
  var p_ = Up();
  Object.defineProperty(m, "WorkspaceFoldersRequest", { enumerable: true, get: function() {
    return p_.WorkspaceFoldersRequest;
  } });
  Object.defineProperty(m, "DidChangeWorkspaceFoldersNotification", { enumerable: true, get: function() {
    return p_.DidChangeWorkspaceFoldersNotification;
  } });
  var mw = Wp();
  Object.defineProperty(m, "ConfigurationRequest", { enumerable: true, get: function() {
    return mw.ConfigurationRequest;
  } });
  var g_ = Bp();
  Object.defineProperty(m, "DocumentColorRequest", { enumerable: true, get: function() {
    return g_.DocumentColorRequest;
  } });
  Object.defineProperty(m, "ColorPresentationRequest", { enumerable: true, get: function() {
    return g_.ColorPresentationRequest;
  } });
  var m_ = Xp();
  Object.defineProperty(m, "FoldingRangeRequest", { enumerable: true, get: function() {
    return m_.FoldingRangeRequest;
  } });
  Object.defineProperty(m, "FoldingRangeRefreshRequest", { enumerable: true, get: function() {
    return m_.FoldingRangeRefreshRequest;
  } });
  var _w = Qp();
  Object.defineProperty(m, "DeclarationRequest", { enumerable: true, get: function() {
    return _w.DeclarationRequest;
  } });
  var yw = Zp();
  Object.defineProperty(m, "SelectionRangeRequest", { enumerable: true, get: function() {
    return yw.SelectionRangeRequest;
  } });
  var Tl = rg();
  Object.defineProperty(m, "WorkDoneProgress", { enumerable: true, get: function() {
    return Tl.WorkDoneProgress;
  } });
  Object.defineProperty(m, "WorkDoneProgressCreateRequest", { enumerable: true, get: function() {
    return Tl.WorkDoneProgressCreateRequest;
  } });
  Object.defineProperty(m, "WorkDoneProgressCancelNotification", { enumerable: true, get: function() {
    return Tl.WorkDoneProgressCancelNotification;
  } });
  var Ol = ag();
  Object.defineProperty(m, "CallHierarchyIncomingCallsRequest", { enumerable: true, get: function() {
    return Ol.CallHierarchyIncomingCallsRequest;
  } });
  Object.defineProperty(m, "CallHierarchyOutgoingCallsRequest", { enumerable: true, get: function() {
    return Ol.CallHierarchyOutgoingCallsRequest;
  } });
  Object.defineProperty(m, "CallHierarchyPrepareRequest", { enumerable: true, get: function() {
    return Ol.CallHierarchyPrepareRequest;
  } });
  var Ni = hg();
  Object.defineProperty(m, "TokenFormat", { enumerable: true, get: function() {
    return Ni.TokenFormat;
  } });
  Object.defineProperty(m, "SemanticTokensRequest", { enumerable: true, get: function() {
    return Ni.SemanticTokensRequest;
  } });
  Object.defineProperty(m, "SemanticTokensDeltaRequest", { enumerable: true, get: function() {
    return Ni.SemanticTokensDeltaRequest;
  } });
  Object.defineProperty(m, "SemanticTokensRangeRequest", { enumerable: true, get: function() {
    return Ni.SemanticTokensRangeRequest;
  } });
  Object.defineProperty(m, "SemanticTokensRefreshRequest", { enumerable: true, get: function() {
    return Ni.SemanticTokensRefreshRequest;
  } });
  Object.defineProperty(m, "SemanticTokensRegistrationType", { enumerable: true, get: function() {
    return Ni.SemanticTokensRegistrationType;
  } });
  var vw = gg();
  Object.defineProperty(m, "ShowDocumentRequest", { enumerable: true, get: function() {
    return vw.ShowDocumentRequest;
  } });
  var bw = _g();
  Object.defineProperty(m, "LinkedEditingRangeRequest", { enumerable: true, get: function() {
    return bw.LinkedEditingRangeRequest;
  } });
  var Wr = Pg();
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
  var El = Eg();
  Object.defineProperty(m, "UniquenessLevel", { enumerable: true, get: function() {
    return El.UniquenessLevel;
  } });
  Object.defineProperty(m, "MonikerKind", { enumerable: true, get: function() {
    return El.MonikerKind;
  } });
  Object.defineProperty(m, "MonikerRequest", { enumerable: true, get: function() {
    return El.MonikerRequest;
  } });
  var ql = Ig();
  Object.defineProperty(m, "TypeHierarchyPrepareRequest", { enumerable: true, get: function() {
    return ql.TypeHierarchyPrepareRequest;
  } });
  Object.defineProperty(m, "TypeHierarchySubtypesRequest", { enumerable: true, get: function() {
    return ql.TypeHierarchySubtypesRequest;
  } });
  Object.defineProperty(m, "TypeHierarchySupertypesRequest", { enumerable: true, get: function() {
    return ql.TypeHierarchySupertypesRequest;
  } });
  var __ = Fg();
  Object.defineProperty(m, "InlineValueRequest", { enumerable: true, get: function() {
    return __.InlineValueRequest;
  } });
  Object.defineProperty(m, "InlineValueRefreshRequest", { enumerable: true, get: function() {
    return __.InlineValueRefreshRequest;
  } });
  var xl = $g();
  Object.defineProperty(m, "InlayHintRequest", { enumerable: true, get: function() {
    return xl.InlayHintRequest;
  } });
  Object.defineProperty(m, "InlayHintResolveRequest", { enumerable: true, get: function() {
    return xl.InlayHintResolveRequest;
  } });
  Object.defineProperty(m, "InlayHintRefreshRequest", { enumerable: true, get: function() {
    return xl.InlayHintRefreshRequest;
  } });
  var ys = Vg();
  Object.defineProperty(m, "DiagnosticServerCancellationData", { enumerable: true, get: function() {
    return ys.DiagnosticServerCancellationData;
  } });
  Object.defineProperty(m, "DocumentDiagnosticReportKind", { enumerable: true, get: function() {
    return ys.DocumentDiagnosticReportKind;
  } });
  Object.defineProperty(m, "DocumentDiagnosticRequest", { enumerable: true, get: function() {
    return ys.DocumentDiagnosticRequest;
  } });
  Object.defineProperty(m, "WorkspaceDiagnosticRequest", { enumerable: true, get: function() {
    return ys.WorkspaceDiagnosticRequest;
  } });
  Object.defineProperty(m, "DiagnosticRefreshRequest", { enumerable: true, get: function() {
    return ys.DiagnosticRefreshRequest;
  } });
  var cn = em();
  Object.defineProperty(m, "NotebookCellKind", { enumerable: true, get: function() {
    return cn.NotebookCellKind;
  } });
  Object.defineProperty(m, "ExecutionSummary", { enumerable: true, get: function() {
    return cn.ExecutionSummary;
  } });
  Object.defineProperty(m, "NotebookCell", { enumerable: true, get: function() {
    return cn.NotebookCell;
  } });
  Object.defineProperty(m, "NotebookDocument", { enumerable: true, get: function() {
    return cn.NotebookDocument;
  } });
  Object.defineProperty(m, "NotebookDocumentSyncRegistrationType", { enumerable: true, get: function() {
    return cn.NotebookDocumentSyncRegistrationType;
  } });
  Object.defineProperty(m, "DidOpenNotebookDocumentNotification", { enumerable: true, get: function() {
    return cn.DidOpenNotebookDocumentNotification;
  } });
  Object.defineProperty(m, "NotebookCellArrayChange", { enumerable: true, get: function() {
    return cn.NotebookCellArrayChange;
  } });
  Object.defineProperty(m, "DidChangeNotebookDocumentNotification", { enumerable: true, get: function() {
    return cn.DidChangeNotebookDocumentNotification;
  } });
  Object.defineProperty(m, "DidSaveNotebookDocumentNotification", { enumerable: true, get: function() {
    return cn.DidSaveNotebookDocumentNotification;
  } });
  Object.defineProperty(m, "DidCloseNotebookDocumentNotification", { enumerable: true, get: function() {
    return cn.DidCloseNotebookDocumentNotification;
  } });
  var Cw = nm();
  Object.defineProperty(m, "InlineCompletionRequest", { enumerable: true, get: function() {
    return Cw.InlineCompletionRequest;
  } });
  var y_ = sm();
  Object.defineProperty(m, "TextDocumentContentRequest", { enumerable: true, get: function() {
    return y_.TextDocumentContentRequest;
  } });
  Object.defineProperty(m, "TextDocumentContentRefreshRequest", { enumerable: true, get: function() {
    return y_.TextDocumentContentRefreshRequest;
  } });
  var Cl;
  (function(n2) {
    function e(t) {
      let r = t;
      return Je.string(r) || Je.string(r.language) || Je.string(r.scheme) || Rl.is(r.pattern);
    }
    n2.is = e;
  })(Cl || (m.TextDocumentFilter = Cl = {}));
  var wl;
  (function(n2) {
    function e(t) {
      let r = t;
      return Je.objectLiteral(r) && (Je.string(r.notebookType) || Je.string(r.scheme) || Je.string(r.pattern));
    }
    n2.is = e;
  })(wl || (m.NotebookDocumentFilter = wl = {}));
  var Dl;
  (function(n2) {
    function e(t) {
      let r = t;
      return Je.objectLiteral(r) && (Je.string(r.notebook) || wl.is(r.notebook)) && (r.language === void 0 || Je.string(r.language));
    }
    n2.is = e;
  })(Dl || (m.NotebookCellTextDocumentFilter = Dl = {}));
  var Sl;
  (function(n2) {
    function e(t) {
      if (!Array.isArray(t)) return false;
      for (let r of t) if (!Je.string(r) && !Cl.is(r) && !Dl.is(r)) return false;
      return true;
    }
    n2.is = e;
  })(Sl || (m.DocumentSelector = Sl = {}));
  var am;
  (function(n2) {
    n2.method = "client/registerCapability", n2.messageDirection = E.MessageDirection.serverToClient, n2.type = new E.ProtocolRequestType(n2.method);
  })(am || (m.RegistrationRequest = am = {}));
  var cm;
  (function(n2) {
    n2.method = "client/unregisterCapability", n2.messageDirection = E.MessageDirection.serverToClient, n2.type = new E.ProtocolRequestType(n2.method);
  })(cm || (m.UnregistrationRequest = cm = {}));
  var um;
  (function(n2) {
    n2.Create = "create", n2.Rename = "rename", n2.Delete = "delete";
  })(um || (m.ResourceOperationKind = um = {}));
  var lm;
  (function(n2) {
    n2.Abort = "abort", n2.Transactional = "transactional", n2.TextOnlyTransactional = "textOnlyTransactional", n2.Undo = "undo";
  })(lm || (m.FailureHandlingKind = lm = {}));
  var dm;
  (function(n2) {
    n2.ES2020 = "ES2020";
  })(dm || (m.RegularExpressionEngineKind = dm = {}));
  var fm;
  (function(n2) {
    n2.UTF8 = "utf-8", n2.UTF16 = "utf-16", n2.UTF32 = "utf-32";
  })(fm || (m.PositionEncodingKind = fm = {}));
  var hm;
  (function(n2) {
    function e(t) {
      let r = t;
      return r && Je.string(r.id) && r.id.length > 0;
    }
    n2.hasId = e;
  })(hm || (m.StaticRegistrationOptions = hm = {}));
  var pm;
  (function(n2) {
    function e(t) {
      let r = t;
      return r && (r.documentSelector === null || Sl.is(r.documentSelector));
    }
    n2.is = e;
  })(pm || (m.TextDocumentRegistrationOptions = pm = {}));
  var gm;
  (function(n2) {
    function e(r) {
      let i = r;
      return Je.objectLiteral(i) && (i.workDoneProgress === void 0 || Je.boolean(i.workDoneProgress));
    }
    n2.is = e;
    function t(r) {
      let i = r;
      return i && Je.boolean(i.workDoneProgress);
    }
    n2.hasWorkDoneProgress = t;
  })(gm || (m.WorkDoneProgressOptions = gm = {}));
  var mm;
  (function(n2) {
    n2.method = "initialize", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method);
  })(mm || (m.InitializeRequest = mm = {}));
  var _m;
  (function(n2) {
    n2.unknownProtocolVersion = 1;
  })(_m || (m.InitializeErrorCodes = _m = {}));
  var ym;
  (function(n2) {
    n2.method = "initialized", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolNotificationType(n2.method);
  })(ym || (m.InitializedNotification = ym = {}));
  var vm;
  (function(n2) {
    n2.method = "shutdown", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType0(n2.method);
  })(vm || (m.ShutdownRequest = vm = {}));
  var bm;
  (function(n2) {
    n2.method = "exit", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolNotificationType0(n2.method);
  })(bm || (m.ExitNotification = bm = {}));
  var Cm;
  (function(n2) {
    n2.method = "workspace/didChangeConfiguration", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolNotificationType(n2.method), n2.capabilities = E.CM.create("workspace.didChangeConfiguration", void 0);
  })(Cm || (m.DidChangeConfigurationNotification = Cm = {}));
  var wm;
  (function(n2) {
    n2.Error = 1, n2.Warning = 2, n2.Info = 3, n2.Log = 4, n2.Debug = 5;
  })(wm || (m.MessageType = wm = {}));
  var Dm;
  (function(n2) {
    n2.method = "window/showMessage", n2.messageDirection = E.MessageDirection.serverToClient, n2.type = new E.ProtocolNotificationType(n2.method), n2.capabilities = E.CM.create("window.showMessage", void 0);
  })(Dm || (m.ShowMessageNotification = Dm = {}));
  var Sm;
  (function(n2) {
    n2.method = "window/showMessageRequest", n2.messageDirection = E.MessageDirection.serverToClient, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("window.showMessage", void 0);
  })(Sm || (m.ShowMessageRequest = Sm = {}));
  var Pm;
  (function(n2) {
    n2.method = "window/logMessage", n2.messageDirection = E.MessageDirection.serverToClient, n2.type = new E.ProtocolNotificationType(n2.method);
  })(Pm || (m.LogMessageNotification = Pm = {}));
  var Rm;
  (function(n2) {
    n2.method = "telemetry/event", n2.messageDirection = E.MessageDirection.serverToClient, n2.type = new E.ProtocolNotificationType(n2.method);
  })(Rm || (m.TelemetryEventNotification = Rm = {}));
  var Tm;
  (function(n2) {
    n2.None = 0, n2.Full = 1, n2.Incremental = 2;
  })(Tm || (m.TextDocumentSyncKind = Tm = {}));
  var Om;
  (function(n2) {
    n2.method = "textDocument/didOpen", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolNotificationType(n2.method), n2.capabilities = E.CM.create("textDocument.synchronization", "textDocumentSync.openClose");
  })(Om || (m.DidOpenTextDocumentNotification = Om = {}));
  var Em;
  (function(n2) {
    function e(r) {
      let i = r;
      return i != null && typeof i.text == "string" && i.range !== void 0 && (i.rangeLength === void 0 || typeof i.rangeLength == "number");
    }
    n2.isIncremental = e;
    function t(r) {
      let i = r;
      return i != null && typeof i.text == "string" && i.range === void 0 && i.rangeLength === void 0;
    }
    n2.isFull = t;
  })(Em || (m.TextDocumentContentChangeEvent = Em = {}));
  var qm;
  (function(n2) {
    n2.method = "textDocument/didChange", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolNotificationType(n2.method), n2.capabilities = E.CM.create("textDocument.synchronization", "textDocumentSync");
  })(qm || (m.DidChangeTextDocumentNotification = qm = {}));
  var xm;
  (function(n2) {
    n2.method = "textDocument/didClose", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolNotificationType(n2.method), n2.capabilities = E.CM.create("textDocument.synchronization", "textDocumentSync.openClose");
  })(xm || (m.DidCloseTextDocumentNotification = xm = {}));
  var Mm;
  (function(n2) {
    n2.method = "textDocument/didSave", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolNotificationType(n2.method), n2.capabilities = E.CM.create("textDocument.synchronization.didSave", "textDocumentSync.save");
  })(Mm || (m.DidSaveTextDocumentNotification = Mm = {}));
  var Im;
  (function(n2) {
    n2.Manual = 1, n2.AfterDelay = 2, n2.FocusOut = 3;
  })(Im || (m.TextDocumentSaveReason = Im = {}));
  var Nm;
  (function(n2) {
    n2.method = "textDocument/willSave", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolNotificationType(n2.method), n2.capabilities = E.CM.create("textDocument.synchronization.willSave", "textDocumentSync.willSave");
  })(Nm || (m.WillSaveTextDocumentNotification = Nm = {}));
  var jm;
  (function(n2) {
    n2.method = "textDocument/willSaveWaitUntil", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("textDocument.synchronization.willSaveWaitUntil", "textDocumentSync.willSaveWaitUntil");
  })(jm || (m.WillSaveTextDocumentWaitUntilRequest = jm = {}));
  var Fm;
  (function(n2) {
    n2.method = "workspace/didChangeWatchedFiles", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolNotificationType(n2.method), n2.capabilities = E.CM.create("workspace.didChangeWatchedFiles", void 0);
  })(Fm || (m.DidChangeWatchedFilesNotification = Fm = {}));
  var Lm;
  (function(n2) {
    n2.Created = 1, n2.Changed = 2, n2.Deleted = 3;
  })(Lm || (m.FileChangeType = Lm = {}));
  var Pl;
  (function(n2) {
    function e(t) {
      let r = t;
      return Je.objectLiteral(r) && (om.URI.is(r.baseUri) || om.WorkspaceFolder.is(r.baseUri)) && Je.string(r.pattern);
    }
    n2.is = e;
  })(Pl || (m.RelativePattern = Pl = {}));
  var Rl;
  (function(n2) {
    function e(t) {
      let r = t;
      return Je.string(r) || Pl.is(r);
    }
    n2.is = e;
  })(Rl || (m.GlobPattern = Rl = {}));
  var Am;
  (function(n2) {
    n2.Create = 1, n2.Change = 2, n2.Delete = 4;
  })(Am || (m.WatchKind = Am = {}));
  var km;
  (function(n2) {
    n2.method = "textDocument/publishDiagnostics", n2.messageDirection = E.MessageDirection.serverToClient, n2.type = new E.ProtocolNotificationType(n2.method), n2.capabilities = E.CM.create("textDocument.publishDiagnostics", void 0);
  })(km || (m.PublishDiagnosticsNotification = km = {}));
  var $m;
  (function(n2) {
    n2.Invoked = 1, n2.TriggerCharacter = 2, n2.TriggerForIncompleteCompletions = 3;
  })($m || (m.CompletionTriggerKind = $m = {}));
  var Um;
  (function(n2) {
    n2.method = "textDocument/completion", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("textDocument.completion", "completionProvider");
  })(Um || (m.CompletionRequest = Um = {}));
  var Hm;
  (function(n2) {
    n2.method = "completionItem/resolve", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("textDocument.completion.completionItem.resolveSupport", "completionProvider.resolveProvider");
  })(Hm || (m.CompletionResolveRequest = Hm = {}));
  var Wm;
  (function(n2) {
    n2.method = "textDocument/hover", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("textDocument.hover", "hoverProvider");
  })(Wm || (m.HoverRequest = Wm = {}));
  var zm;
  (function(n2) {
    n2.Invoked = 1, n2.TriggerCharacter = 2, n2.ContentChange = 3;
  })(zm || (m.SignatureHelpTriggerKind = zm = {}));
  var Km;
  (function(n2) {
    n2.method = "textDocument/signatureHelp", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("textDocument.signatureHelp", "signatureHelpProvider");
  })(Km || (m.SignatureHelpRequest = Km = {}));
  var Bm;
  (function(n2) {
    n2.method = "textDocument/definition", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("textDocument.definition", "definitionProvider");
  })(Bm || (m.DefinitionRequest = Bm = {}));
  var Vm;
  (function(n2) {
    n2.method = "textDocument/references", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("textDocument.references", "referencesProvider");
  })(Vm || (m.ReferencesRequest = Vm = {}));
  var Gm;
  (function(n2) {
    n2.method = "textDocument/documentHighlight", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("textDocument.documentHighlight", "documentHighlightProvider");
  })(Gm || (m.DocumentHighlightRequest = Gm = {}));
  var Xm;
  (function(n2) {
    n2.method = "textDocument/documentSymbol", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("textDocument.documentSymbol", "documentSymbolProvider");
  })(Xm || (m.DocumentSymbolRequest = Xm = {}));
  var Jm;
  (function(n2) {
    n2.method = "textDocument/codeAction", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("textDocument.codeAction", "codeActionProvider");
  })(Jm || (m.CodeActionRequest = Jm = {}));
  var Qm;
  (function(n2) {
    n2.method = "codeAction/resolve", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("textDocument.codeAction.resolveSupport", "codeActionProvider.resolveProvider");
  })(Qm || (m.CodeActionResolveRequest = Qm = {}));
  var Ym;
  (function(n2) {
    n2.method = "workspace/symbol", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("workspace.symbol", "workspaceSymbolProvider");
  })(Ym || (m.WorkspaceSymbolRequest = Ym = {}));
  var Zm;
  (function(n2) {
    n2.method = "workspaceSymbol/resolve", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("workspace.symbol.resolveSupport", "workspaceSymbolProvider.resolveProvider");
  })(Zm || (m.WorkspaceSymbolResolveRequest = Zm = {}));
  var e_;
  (function(n2) {
    n2.method = "textDocument/codeLens", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("textDocument.codeLens", "codeLensProvider");
  })(e_ || (m.CodeLensRequest = e_ = {}));
  var t_;
  (function(n2) {
    n2.method = "codeLens/resolve", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("textDocument.codeLens.resolveSupport", "codeLensProvider.resolveProvider");
  })(t_ || (m.CodeLensResolveRequest = t_ = {}));
  var n_;
  (function(n2) {
    n2.method = "workspace/codeLens/refresh", n2.messageDirection = E.MessageDirection.serverToClient, n2.type = new E.ProtocolRequestType0(n2.method), n2.capabilities = E.CM.create("workspace.codeLens", void 0);
  })(n_ || (m.CodeLensRefreshRequest = n_ = {}));
  var r_;
  (function(n2) {
    n2.method = "textDocument/documentLink", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("textDocument.documentLink", "documentLinkProvider");
  })(r_ || (m.DocumentLinkRequest = r_ = {}));
  var i_;
  (function(n2) {
    n2.method = "documentLink/resolve", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("textDocument.documentLink", "documentLinkProvider.resolveProvider");
  })(i_ || (m.DocumentLinkResolveRequest = i_ = {}));
  var s_;
  (function(n2) {
    n2.method = "textDocument/formatting", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("textDocument.formatting", "documentFormattingProvider");
  })(s_ || (m.DocumentFormattingRequest = s_ = {}));
  var o_;
  (function(n2) {
    n2.method = "textDocument/rangeFormatting", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("textDocument.rangeFormatting", "documentRangeFormattingProvider");
  })(o_ || (m.DocumentRangeFormattingRequest = o_ = {}));
  var a_;
  (function(n2) {
    n2.method = "textDocument/rangesFormatting", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("textDocument.rangeFormatting.rangesSupport", "documentRangeFormattingProvider.rangesSupport");
  })(a_ || (m.DocumentRangesFormattingRequest = a_ = {}));
  var c_;
  (function(n2) {
    n2.method = "textDocument/onTypeFormatting", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("textDocument.onTypeFormatting", "documentOnTypeFormattingProvider");
  })(c_ || (m.DocumentOnTypeFormattingRequest = c_ = {}));
  var u_;
  (function(n2) {
    n2.Identifier = 1;
  })(u_ || (m.PrepareSupportDefaultBehavior = u_ = {}));
  var l_;
  (function(n2) {
    n2.method = "textDocument/rename", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("textDocument.rename", "renameProvider");
  })(l_ || (m.RenameRequest = l_ = {}));
  var d_;
  (function(n2) {
    n2.method = "textDocument/prepareRename", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("textDocument.rename.prepareSupport", "renameProvider.prepareProvider");
  })(d_ || (m.PrepareRenameRequest = d_ = {}));
  var f_;
  (function(n2) {
    n2.method = "workspace/executeCommand", n2.messageDirection = E.MessageDirection.clientToServer, n2.type = new E.ProtocolRequestType(n2.method), n2.capabilities = E.CM.create("workspace.executeCommand", "executeCommandProvider");
  })(f_ || (m.ExecuteCommandRequest = f_ = {}));
  var h_;
  (function(n2) {
    n2.method = "workspace/applyEdit", n2.messageDirection = E.MessageDirection.serverToClient, n2.type = new E.ProtocolRequestType("workspace/applyEdit"), n2.capabilities = E.CM.create("workspace.applyEdit", void 0);
  })(h_ || (m.ApplyWorkspaceEditRequest = h_ = {}));
});
var C_ = R((Ml) => {
  "use strict";
  Object.defineProperty(Ml, "__esModule", { value: true });
  Ml.createProtocolConnection = ww;
  var b_ = An();
  function ww(n2, e, t, r) {
    return b_.ConnectionStrategy.is(r) && (r = { connectionStrategy: r }), (0, b_.createMessageConnection)(n2, e, t, r);
  }
});
var G = R((bt) => {
  "use strict";
  var Dw = bt && bt.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), Ao = bt && bt.__exportStar || function(n2, e) {
    for (var t in n2) t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && Dw(e, n2, t);
  };
  Object.defineProperty(bt, "__esModule", { value: true });
  bt.LSPErrorCodes = bt.createProtocolConnection = void 0;
  Ao(An(), bt);
  Ao((To(), es(Ro)), bt);
  Ao(we(), bt);
  Ao(v_(), bt);
  var Sw = C_();
  Object.defineProperty(bt, "createProtocolConnection", { enumerable: true, get: function() {
    return Sw.createProtocolConnection;
  } });
  var w_;
  (function(n2) {
    n2.lspReservedErrorRangeStart = -32899, n2.RequestFailed = -32803, n2.ServerCancelled = -32802, n2.ContentModified = -32801, n2.RequestCancelled = -32800, n2.lspReservedErrorRangeEnd = -32800;
  })(w_ || (bt.LSPErrorCodes = w_ = {}));
});
var ko = R((Gt) => {
  "use strict";
  Object.defineProperty(Gt, "__esModule", { value: true });
  Gt.Semaphore = Gt.Delayer = void 0;
  Gt.setTestMode = Pw;
  Gt.clearTestMode = Rw;
  Gt.map = Tw;
  Gt.mapAsync = Ow;
  Gt.forEach = Ew;
  var bs = G(), Il = class {
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
      })), (t >= 0 || this.timeout === void 0) && (this.timeout = (0, bs.RAL)().timer.setTimeout(() => {
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
  Gt.Delayer = Il;
  var Nl = class {
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
      this._waiting.length === 0 || this._active === this._capacity || (0, bs.RAL)().timer.setImmediate(() => this.doRunNext());
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
  Gt.Semaphore = Nl;
  var jl = false;
  function Pw() {
    jl = true;
  }
  function Rw() {
    jl = false;
  }
  var D_ = 15, vs = class {
    yieldAfter;
    startTime;
    counter;
    total;
    counterInterval;
    constructor(e = D_) {
      this.yieldAfter = jl === true ? Math.max(e, 2) : Math.max(e, D_), this.startTime = Date.now(), this.counter = 0, this.total = 0, this.counterInterval = 1;
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
  async function Tw(n2, e, t, r) {
    if (n2.length === 0) return [];
    let i = new Array(n2.length), s = new vs(r?.yieldAfter);
    function o(c) {
      s.start();
      for (let l = c; l < n2.length; l++) if (i[l] = e(n2[l]), s.shouldYield()) return r?.yieldCallback && r.yieldCallback(), l + 1;
      return -1;
    }
    let a = o(0);
    for (; a !== -1 && !(t !== void 0 && t.isCancellationRequested); ) a = await new Promise((c) => {
      (0, bs.RAL)().timer.setImmediate(() => {
        t !== void 0 && t.isCancellationRequested ? c(-1) : c(o(a));
      });
    });
    return i;
  }
  async function Ow(n2, e, t, r) {
    if (n2.length === 0) return [];
    let i = new Array(n2.length), s = new vs(r?.yieldAfter);
    async function o(c) {
      s.start();
      for (let l = c; l < n2.length; l++) if (i[l] = await e(n2[l], t), s.shouldYield()) return r?.yieldCallback && r.yieldCallback(), l + 1;
      return -1;
    }
    let a = await o(0);
    for (; a !== -1 && !(t !== void 0 && t.isCancellationRequested); ) a = await new Promise((c) => {
      (0, bs.RAL)().timer.setImmediate(() => {
        t !== void 0 && t.isCancellationRequested ? c(-1) : c(o(a));
      });
    });
    return i;
  }
  async function Ew(n2, e, t, r) {
    if (n2.length === 0) return;
    let i = new vs(r?.yieldAfter);
    function s(a) {
      i.start();
      for (let c = a; c < n2.length; c++) if (e(n2[c]), i.shouldYield()) return r?.yieldCallback && r.yieldCallback(), c + 1;
      return -1;
    }
    let o = s(0);
    for (; o !== -1 && !(t !== void 0 && t.isCancellationRequested); ) o = await new Promise((a) => {
      (0, bs.RAL)().timer.setImmediate(() => {
        t !== void 0 && t.isCancellationRequested ? a(-1) : a(s(o));
      });
    });
  }
});
var Ll = R((Wn) => {
  "use strict";
  var qw = Wn && Wn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), xw = Wn && Wn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), Mw = Wn && Wn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && qw(t, e, r[i]);
      return xw(t, e), t;
    };
  })();
  Object.defineProperty(Wn, "__esModule", { value: true });
  var Iw = Mw(require("vscode")), Fl = class extends Iw.CompletionItem {
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
  Wn.default = Fl;
});
var kl = R((zn) => {
  "use strict";
  var Nw = zn && zn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), jw = zn && zn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), Fw = zn && zn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && Nw(t, e, r[i]);
      return jw(t, e), t;
    };
  })();
  Object.defineProperty(zn, "__esModule", { value: true });
  var Lw = Fw(require("vscode")), Al = class extends Lw.CodeLens {
    data;
    constructor(e) {
      super(e);
    }
  };
  zn.default = Al;
});
var Ul = R((Kn) => {
  "use strict";
  var Aw = Kn && Kn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), kw = Kn && Kn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), $w = Kn && Kn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && Aw(t, e, r[i]);
      return kw(t, e), t;
    };
  })();
  Object.defineProperty(Kn, "__esModule", { value: true });
  var Uw = $w(require("vscode")), $l = class extends Uw.DocumentLink {
    data;
    constructor(e, t) {
      super(e, t);
    }
  };
  Kn.default = $l;
});
var Wl = R((Bn) => {
  "use strict";
  var Hw = Bn && Bn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), Ww = Bn && Bn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), zw = Bn && Bn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && Hw(t, e, r[i]);
      return Ww(t, e), t;
    };
  })();
  Object.defineProperty(Bn, "__esModule", { value: true });
  var Kw = zw(require("vscode")), Hl = class extends Kw.CodeAction {
    data;
    constructor(e, t) {
      super(e), this.data = t;
    }
  };
  Bn.default = Hl;
});
var Bl = R(($t) => {
  "use strict";
  var Bw = $t && $t.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), Vw = $t && $t.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), P_ = $t && $t.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && Bw(t, e, r[i]);
      return Vw(t, e), t;
    };
  })();
  Object.defineProperty($t, "__esModule", { value: true });
  $t.ProtocolDiagnostic = $t.DiagnosticCode = void 0;
  var Gw = P_(require("vscode")), zl = P_(At()), S_;
  (function(n2) {
    function e(t) {
      let r = t;
      return r != null && (zl.number(r.value) || zl.string(r.value)) && zl.string(r.target);
    }
    n2.is = e;
  })(S_ || ($t.DiagnosticCode = S_ = {}));
  var Kl = class extends Gw.Diagnostic {
    data;
    hasDiagnosticCode;
    constructor(e, t, r, i) {
      super(e, t, r), this.data = i, this.hasDiagnosticCode = false;
    }
  };
  $t.ProtocolDiagnostic = Kl;
});
var Gl = R((Vn) => {
  "use strict";
  var Xw = Vn && Vn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), Jw = Vn && Vn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), Qw = Vn && Vn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && Xw(t, e, r[i]);
      return Jw(t, e), t;
    };
  })();
  Object.defineProperty(Vn, "__esModule", { value: true });
  var Yw = Qw(require("vscode")), Vl = class extends Yw.CallHierarchyItem {
    data;
    constructor(e, t, r, i, s, o, a) {
      super(e, t, r, i, s, o), a !== void 0 && (this.data = a);
    }
  };
  Vn.default = Vl;
});
var Jl = R((Gn) => {
  "use strict";
  var Zw = Gn && Gn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), eD = Gn && Gn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), tD = Gn && Gn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && Zw(t, e, r[i]);
      return eD(t, e), t;
    };
  })();
  Object.defineProperty(Gn, "__esModule", { value: true });
  var nD = tD(require("vscode")), Xl = class extends nD.TypeHierarchyItem {
    data;
    constructor(e, t, r, i, s, o, a) {
      super(e, t, r, i, s, o), a !== void 0 && (this.data = a);
    }
  };
  Gn.default = Xl;
});
var Yl = R((Xn) => {
  "use strict";
  var rD = Xn && Xn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), iD = Xn && Xn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), sD = Xn && Xn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && rD(t, e, r[i]);
      return iD(t, e), t;
    };
  })();
  Object.defineProperty(Xn, "__esModule", { value: true });
  var $o = sD(require("vscode")), Ql = class extends $o.SymbolInformation {
    data;
    hasRange;
    constructor(e, t, r, i, s) {
      let o = !(i instanceof $o.Uri);
      super(e, t, r, o ? i : new $o.Location(i, new $o.Range(0, 0, 0, 0))), this.hasRange = o, s !== void 0 && (this.data = s);
    }
  };
  Xn.default = Ql;
});
var ed = R((Jn) => {
  "use strict";
  var oD = Jn && Jn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), aD = Jn && Jn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), cD = Jn && Jn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && oD(t, e, r[i]);
      return aD(t, e), t;
    };
  })();
  Object.defineProperty(Jn, "__esModule", { value: true });
  var uD = cD(require("vscode")), Zl = class extends uD.InlayHint {
    data;
    constructor(e, t, r) {
      super(e, t, r);
    }
  };
  Jn.default = Zl;
});
var E_ = R((Xt) => {
  "use strict";
  var lD = Xt && Xt.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), dD = Xt && Xt.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), Uo = Xt && Xt.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && lD(t, e, r[i]);
      return dD(t, e), t;
    };
  })(), Tr = Xt && Xt.__importDefault || function(n2) {
    return n2 && n2.__esModule ? n2 : { default: n2 };
  };
  Object.defineProperty(Xt, "__esModule", { value: true });
  Xt.createConverter = vD;
  var Le = Uo(require("vscode")), B = Uo(G()), zr = Uo(At()), R_ = Uo(ko()), fD = Tr(Ll()), hD = Tr(kl()), pD = Tr(Ul()), T_ = Tr(Wl()), O_ = Bl(), gD = Tr(Gl()), mD = Tr(Jl()), _D = Tr(Yl()), yD = Tr(ed()), td;
  (function(n2) {
    function e(t) {
      let r = t;
      return r && !!r.inserting && !!r.replacing;
    }
    n2.is = e;
  })(td || (td = {}));
  function vD(n2) {
    let t = n2 || ((d) => d.toString());
    function r(d) {
      return t(d);
    }
    function i(d) {
      return { uri: t(d.uri) };
    }
    function s(d) {
      return { uri: t(d.uri), languageId: d.languageId, version: d.version, text: d.getText() };
    }
    function o(d) {
      return { uri: t(d.uri), version: d.version };
    }
    function a(d) {
      return { textDocument: s(d) };
    }
    function c(d) {
      let S = d;
      return !!S.document && !!S.contentChanges;
    }
    function l(d) {
      let S = d;
      return !!S.uri && !!S.version;
    }
    function f(d, S, $) {
      if (l(d)) return { textDocument: { uri: t(d.uri), version: d.version }, contentChanges: [{ text: d.getText() }] };
      if (c(d)) {
        let me = S, ue = $;
        return { textDocument: { uri: t(me), version: ue }, contentChanges: d.contentChanges.map((_t) => {
          let jn = _t.range;
          return { range: { start: { line: jn.start.line, character: jn.start.character }, end: { line: jn.end.line, character: jn.end.character } }, rangeLength: _t.rangeLength, text: _t.text };
        }) };
      } else throw Error("Unsupported text document change parameter");
    }
    function h(d) {
      return { textDocument: i(d) };
    }
    function p(d, S = false) {
      let $ = { textDocument: i(d) };
      return S && ($.text = d.getText()), $;
    }
    function g(d) {
      switch (d) {
        case Le.TextDocumentSaveReason.Manual:
          return B.TextDocumentSaveReason.Manual;
        case Le.TextDocumentSaveReason.AfterDelay:
          return B.TextDocumentSaveReason.AfterDelay;
        case Le.TextDocumentSaveReason.FocusOut:
          return B.TextDocumentSaveReason.FocusOut;
      }
      return B.TextDocumentSaveReason.Manual;
    }
    function _(d) {
      return { textDocument: i(d.document), reason: g(d.reason) };
    }
    function y(d) {
      return { files: d.files.map((S) => ({ uri: t(S) })) };
    }
    function D(d) {
      return { files: d.files.map((S) => ({ oldUri: t(S.oldUri), newUri: t(S.newUri) })) };
    }
    function T(d) {
      return { files: d.files.map((S) => ({ uri: t(S) })) };
    }
    function w(d) {
      return { files: d.files.map((S) => ({ uri: t(S) })) };
    }
    function x(d) {
      return { files: d.files.map((S) => ({ oldUri: t(S.oldUri), newUri: t(S.newUri) })) };
    }
    function j(d) {
      return { files: d.files.map((S) => ({ uri: t(S) })) };
    }
    function I(d, S) {
      return { textDocument: i(d), position: qn(S) };
    }
    function Y(d) {
      switch (d) {
        case Le.CompletionTriggerKind.TriggerCharacter:
          return B.CompletionTriggerKind.TriggerCharacter;
        case Le.CompletionTriggerKind.TriggerForIncompleteCompletions:
          return B.CompletionTriggerKind.TriggerForIncompleteCompletions;
        default:
          return B.CompletionTriggerKind.Invoked;
      }
    }
    function re(d, S, $) {
      return { textDocument: i(d), position: qn(S), context: { triggerKind: Y($.triggerKind), triggerCharacter: $.triggerCharacter } };
    }
    function Oe(d) {
      switch (d) {
        case Le.SignatureHelpTriggerKind.Invoke:
          return B.SignatureHelpTriggerKind.Invoked;
        case Le.SignatureHelpTriggerKind.TriggerCharacter:
          return B.SignatureHelpTriggerKind.TriggerCharacter;
        case Le.SignatureHelpTriggerKind.ContentChange:
          return B.SignatureHelpTriggerKind.ContentChange;
      }
    }
    function En(d) {
      return { label: d.label };
    }
    function ii(d) {
      return d.map(En);
    }
    function or(d) {
      return { label: d.label, parameters: ii(d.parameters) };
    }
    function si(d) {
      return d.map(or);
    }
    function oi(d) {
      return d === void 0 ? d : { signatures: si(d.signatures), activeSignature: d.activeSignature, activeParameter: d.activeParameter };
    }
    function It(d, S, $) {
      return { textDocument: i(d), position: qn(S), context: { isRetrigger: $.isRetrigger, triggerCharacter: $.triggerCharacter, triggerKind: Oe($.triggerKind), activeSignatureHelp: oi($.activeSignatureHelp) } };
    }
    function qn(d) {
      return { line: d.line, character: d.character };
    }
    function Nt(d) {
      return d == null ? d : { line: d.line > B.uinteger.MAX_VALUE ? B.uinteger.MAX_VALUE : d.line, character: d.character > B.uinteger.MAX_VALUE ? B.uinteger.MAX_VALUE : d.character };
    }
    function xn(d, S) {
      return R_.map(d, Nt, S);
    }
    function Wt(d) {
      return d.map(Nt);
    }
    function Ee(d) {
      return d == null ? d : { start: Nt(d.start), end: Nt(d.end) };
    }
    function Ji(d) {
      return d.map(Ee);
    }
    function nn(d) {
      return d == null ? d : B.Location.create(r(d.uri), Ee(d.range));
    }
    function ar(d) {
      switch (d) {
        case Le.DiagnosticSeverity.Error:
          return B.DiagnosticSeverity.Error;
        case Le.DiagnosticSeverity.Warning:
          return B.DiagnosticSeverity.Warning;
        case Le.DiagnosticSeverity.Information:
          return B.DiagnosticSeverity.Information;
        case Le.DiagnosticSeverity.Hint:
          return B.DiagnosticSeverity.Hint;
      }
    }
    function ai(d) {
      if (!d) return;
      let S = [];
      for (let $ of d) {
        let me = Lr($);
        me !== void 0 && S.push(me);
      }
      return S.length > 0 ? S : void 0;
    }
    function Lr(d) {
      switch (d) {
        case Le.DiagnosticTag.Unnecessary:
          return B.DiagnosticTag.Unnecessary;
        case Le.DiagnosticTag.Deprecated:
          return B.DiagnosticTag.Deprecated;
        default:
          return;
      }
    }
    function rn(d) {
      return { message: d.message, location: nn(d.location) };
    }
    function Ar(d) {
      return d.map(rn);
    }
    function ci(d) {
      if (d != null) return zr.number(d) || zr.string(d) ? d : { value: d.value, target: r(d.target) };
    }
    function cr(d) {
      let S = B.Diagnostic.create(Ee(d.range), d.message), $ = d instanceof O_.ProtocolDiagnostic ? d : void 0;
      $ !== void 0 && $.data !== void 0 && (S.data = $.data);
      let me = ci(d.code);
      return O_.DiagnosticCode.is(me) ? $ !== void 0 && $.hasDiagnosticCode ? S.code = me : (S.code = me.value, S.codeDescription = { href: me.target }) : S.code = me, zr.number(d.severity) && (S.severity = ar(d.severity)), Array.isArray(d.tags) && (S.tags = ai(d.tags)), d.relatedInformation && (S.relatedInformation = Ar(d.relatedInformation)), d.source && (S.source = d.source), S;
    }
    function ur(d, S) {
      return d == null ? d : R_.map(d, cr, S);
    }
    function lr(d) {
      return d == null ? d : d.map(cr);
    }
    function Qi(d, S) {
      switch (d) {
        case "$string":
          return S;
        case B.MarkupKind.PlainText:
          return { kind: d, value: S };
        case B.MarkupKind.Markdown:
          return { kind: d, value: S.value };
        default:
          return `Unsupported Markup content received. Kind is: ${d}`;
      }
    }
    function ui(d) {
      switch (d) {
        case Le.CompletionItemTag.Deprecated:
          return B.CompletionItemTag.Deprecated;
      }
    }
    function St(d) {
      if (d === void 0) return d;
      let S = [];
      for (let $ of d) {
        let me = ui($);
        me !== void 0 && S.push(me);
      }
      return S;
    }
    function Yi(d, S) {
      return S !== void 0 ? S : d + 1;
    }
    function sn(d, S = false) {
      let $, me;
      zr.string(d.label) ? $ = d.label : ($ = d.label.label, S && (d.label.detail !== void 0 || d.label.description !== void 0) && (me = { detail: d.label.detail, description: d.label.description }));
      let ue = { label: $ };
      me !== void 0 && (ue.labelDetails = me);
      let et = d instanceof fD.default ? d : void 0;
      d.detail && (ue.detail = d.detail), d.documentation && (!et || et.documentationFormat === "$string" ? ue.documentation = d.documentation : ue.documentation = Qi(et.documentationFormat, d.documentation)), d.filterText && (ue.filterText = d.filterText), dr(ue, d), zr.number(d.kind) && (ue.kind = Yi(d.kind, et && et.originalItemKind)), d.sortText && (ue.sortText = d.sortText), d.additionalTextEdits && (ue.additionalTextEdits = li(d.additionalTextEdits)), d.commitCharacters && (ue.commitCharacters = d.commitCharacters.slice()), d.command && (ue.command = ce(d.command)), (d.preselect === true || d.preselect === false) && (ue.preselect = d.preselect);
      let _t = St(d.tags);
      if (et) {
        if (et.data !== void 0 && (ue.data = et.data), et.deprecated === true || et.deprecated === false) {
          if (et.deprecated === true && _t !== void 0 && _t.length > 0) {
            let jn = _t.indexOf(Le.CompletionItemTag.Deprecated);
            jn !== -1 && _t.splice(jn, 1);
          }
          ue.deprecated = et.deprecated;
        }
        et.insertTextMode !== void 0 && (ue.insertTextMode = et.insertTextMode);
      }
      return _t !== void 0 && _t.length > 0 && (ue.tags = _t), ue.insertTextMode === void 0 && d.keepWhitespace === true && (ue.insertTextMode = B.InsertTextMode.adjustIndentation), ue;
    }
    function dr(d, S) {
      let $ = B.InsertTextFormat.PlainText, me, ue;
      S.textEdit ? (me = S.textEdit.newText, ue = S.textEdit.range) : S.insertText instanceof Le.SnippetString ? ($ = B.InsertTextFormat.Snippet, me = S.insertText.value) : me = S.insertText, S.range && (ue = S.range), d.insertTextFormat = $, S.fromEdit && me !== void 0 && ue !== void 0 ? d.textEdit = fr(me, ue) : d.insertText = me;
    }
    function fr(d, S) {
      return td.is(S) ? B.InsertReplaceEdit.create(d, Ee(S.inserting), Ee(S.replacing)) : { newText: d, range: Ee(S) };
    }
    function Mn(d) {
      return { range: Ee(d.range), newText: d.newText };
    }
    function li(d) {
      return d == null ? d : d.map(Mn);
    }
    function nt(d) {
      return d <= Le.SymbolKind.TypeParameter ? d + 1 : B.SymbolKind.Property;
    }
    function zt(d) {
      return d;
    }
    function rt(d) {
      return d.map(zt);
    }
    function Zi(d, S, $) {
      return { textDocument: i(d), position: qn(S), context: { includeDeclaration: $.includeDeclaration } };
    }
    async function Ze(d, S) {
      let $ = B.CodeAction.create(d.title);
      if (d instanceof T_.default && d.data !== void 0 && ($.data = d.data), d.kind !== void 0 && ($.kind = jt(d.kind)), d.diagnostics !== void 0 && ($.diagnostics = await ur(d.diagnostics, S)), d.edit !== void 0) throw new Error("VS Code code actions can only be converted to a protocol code action without an edit.");
      return d.command !== void 0 && ($.command = ce(d.command)), d.isPreferred !== void 0 && ($.isPreferred = d.isPreferred), d.disabled !== void 0 && ($.disabled = { reason: d.disabled.reason }), d.isAI && ($.tags ??= [], $.tags.push(B.CodeActionTag.LLMGenerated)), $;
    }
    function In(d) {
      let S = B.CodeAction.create(d.title);
      if (d instanceof T_.default && d.data !== void 0 && (S.data = d.data), d.kind !== void 0 && (S.kind = jt(d.kind)), d.diagnostics !== void 0 && (S.diagnostics = lr(d.diagnostics)), d.edit !== void 0) throw new Error("VS Code code actions can only be converted to a protocol code action without an edit.");
      return d.command !== void 0 && (S.command = ce(d.command)), d.isPreferred !== void 0 && (S.isPreferred = d.isPreferred), d.disabled !== void 0 && (S.disabled = { reason: d.disabled.reason }), d.isAI && (S.tags ??= [], S.tags.push(B.CodeActionTag.LLMGenerated)), S;
    }
    async function di(d, S) {
      if (d == null) return d;
      let $;
      return d.only && zr.string(d.only.value) && ($ = [d.only.value]), B.CodeActionContext.create(await ur(d.diagnostics, S), $, hr(d.triggerKind));
    }
    function kr(d) {
      if (d == null) return d;
      let S;
      return d.only && zr.string(d.only.value) && (S = [d.only.value]), B.CodeActionContext.create(lr(d.diagnostics), S, hr(d.triggerKind));
    }
    function hr(d) {
      switch (d) {
        case Le.CodeActionTriggerKind.Invoke:
          return B.CodeActionTriggerKind.Invoked;
        case Le.CodeActionTriggerKind.Automatic:
          return B.CodeActionTriggerKind.Automatic;
        default:
          return;
      }
    }
    function jt(d) {
      if (d != null) return d.value;
    }
    function v(d) {
      return B.InlineValueContext.create(d.frameId, Ee(d.stoppedLocation));
    }
    function q(d, S, $) {
      return { textDocument: i(d), position: Nt(S), context: N($) };
    }
    function N(d) {
      return { triggerKind: U(d.triggerKind), selectedCompletionInfo: te(d.selectedCompletionInfo) };
    }
    function U(d) {
      switch (d) {
        case Le.InlineCompletionTriggerKind.Invoke:
          return B.InlineCompletionTriggerKind.Invoked;
        case Le.InlineCompletionTriggerKind.Automatic:
          return B.InlineCompletionTriggerKind.Automatic;
      }
    }
    function te(d) {
      if (d != null) return { range: Ee(d.range), text: d.text };
    }
    function ce(d) {
      let S = B.Command.create(d.title, d.command);
      return d.tooltip && (S.tooltip = d.tooltip), d.arguments && (S.arguments = d.arguments), S;
    }
    function oe(d) {
      let S = B.CodeLens.create(Ee(d.range));
      return d.command && (S.command = ce(d.command)), d instanceof hD.default && d.data && (S.data = d.data), S;
    }
    function qe(d, S) {
      let $ = { tabSize: d.tabSize, insertSpaces: d.insertSpaces };
      return S.trimTrailingWhitespace && ($.trimTrailingWhitespace = true), S.trimFinalNewlines && ($.trimFinalNewlines = true), S.insertFinalNewline && ($.insertFinalNewline = true), $;
    }
    function $e(d) {
      return { textDocument: i(d) };
    }
    function ge(d) {
      return { textDocument: i(d) };
    }
    function ve(d) {
      let S = B.DocumentLink.create(Ee(d.range));
      d.target && (S.target = r(d.target)), d.tooltip !== void 0 && (S.tooltip = d.tooltip);
      let $ = d instanceof pD.default ? d : void 0;
      return $ && $.data && (S.data = $.data), S;
    }
    function it(d) {
      return { textDocument: i(d) };
    }
    function gt(d) {
      let S = { name: d.name, kind: nt(d.kind), uri: r(d.uri), range: Ee(d.range), selectionRange: Ee(d.selectionRange) };
      return d.detail !== void 0 && d.detail.length > 0 && (S.detail = d.detail), d.tags !== void 0 && (S.tags = rt(d.tags)), d instanceof gD.default && d.data !== void 0 && (S.data = d.data), S;
    }
    function Nn(d) {
      let S = { name: d.name, kind: nt(d.kind), uri: r(d.uri), range: Ee(d.range), selectionRange: Ee(d.selectionRange) };
      return d.detail !== void 0 && d.detail.length > 0 && (S.detail = d.detail), d.tags !== void 0 && (S.tags = rt(d.tags)), d instanceof mD.default && d.data !== void 0 && (S.data = d.data), S;
    }
    function Pt(d) {
      let S = d instanceof _D.default ? { name: d.name, kind: nt(d.kind), location: d.hasRange ? nn(d.location) : { uri: t(d.location.uri) }, data: d.data } : { name: d.name, kind: nt(d.kind), location: nn(d.location) };
      return d.tags !== void 0 && (S.tags = rt(d.tags)), d.containerName !== "" && (S.containerName = d.containerName), S;
    }
    function mt(d) {
      let S = typeof d.label == "string" ? d.label : d.label.map(fi), $ = B.InlayHint.create(Nt(d.position), S);
      return d.kind !== void 0 && ($.kind = d.kind), d.textEdits !== void 0 && ($.textEdits = li(d.textEdits)), d.tooltip !== void 0 && ($.tooltip = Ys(d.tooltip)), d.paddingLeft !== void 0 && ($.paddingLeft = d.paddingLeft), d.paddingRight !== void 0 && ($.paddingRight = d.paddingRight), d instanceof yD.default && d.data !== void 0 && ($.data = d.data), $;
    }
    function fi(d) {
      let S = B.InlayHintLabelPart.create(d.value);
      return d.location !== void 0 && (S.location = nn(d.location)), d.command !== void 0 && (S.command = ce(d.command)), d.tooltip !== void 0 && (S.tooltip = Ys(d.tooltip)), S;
    }
    function Ys(d) {
      return typeof d == "string" ? d : { kind: B.MarkupKind.Markdown, value: d.value };
    }
    return { asUri: r, asTextDocumentIdentifier: i, asTextDocumentItem: s, asVersionedTextDocumentIdentifier: o, asOpenTextDocumentParams: a, asChangeTextDocumentParams: f, asCloseTextDocumentParams: h, asSaveTextDocumentParams: p, asWillSaveTextDocumentParams: _, asDidCreateFilesParams: y, asDidRenameFilesParams: D, asDidDeleteFilesParams: T, asWillCreateFilesParams: w, asWillRenameFilesParams: x, asWillDeleteFilesParams: j, asTextDocumentPositionParams: I, asCompletionParams: re, asSignatureHelpParams: It, asWorkerPosition: qn, asRange: Ee, asRanges: Ji, asPosition: Nt, asPositions: xn, asPositionsSync: Wt, asLocation: nn, asDiagnosticSeverity: ar, asDiagnosticTag: Lr, asDiagnostic: cr, asDiagnostics: ur, asDiagnosticsSync: lr, asCompletionItem: sn, asTextEdit: Mn, asSymbolKind: nt, asSymbolTag: zt, asSymbolTags: rt, asReferenceParams: Zi, asCodeAction: Ze, asCodeActionSync: In, asCodeActionContext: di, asCodeActionContextSync: kr, asInlineValueContext: v, asCommand: ce, asCodeLens: oe, asFormattingOptions: qe, asDocumentSymbolParams: $e, asCodeLensParams: ge, asDocumentLink: ve, asDocumentLinkParams: it, asCallHierarchyItem: gt, asTypeHierarchyItem: Nn, asInlayHint: mt, asWorkspaceSymbol: Pt, asInlineCompletionParams: q, asInlineCompletionContext: N };
  }
});
var M_ = R((Jt) => {
  "use strict";
  var bD = Jt && Jt.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), CD = Jt && Jt.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), Wo = Jt && Jt.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && bD(t, e, r[i]);
      return CD(t, e), t;
    };
  })(), Or = Jt && Jt.__importDefault || function(n2) {
    return n2 && n2.__esModule ? n2 : { default: n2 };
  };
  Object.defineProperty(Jt, "__esModule", { value: true });
  Jt.createConverter = qD;
  var F = Wo(require("vscode")), z = Wo(G()), Ot = Wo(At()), ae = Wo(ko()), wD = Or(Ll()), DD = Or(kl()), SD = Or(Ul()), PD = Or(Wl()), q_ = Bl(), RD = Or(Gl()), TD = Or(Jl()), OD = Or(Yl()), ED = Or(ed()), x_ = G(), Ho;
  (function(n2) {
    function e(t) {
      let r = t;
      return r && Ot.string(r.language) && Ot.string(r.value);
    }
    n2.is = e;
  })(Ho || (Ho = {}));
  function qD(n2, e, t, r) {
    let s = n2 || ((u) => F.Uri.parse(u));
    function o(u) {
      return s(u);
    }
    function a(u) {
      let b = [];
      for (let O of u) if (typeof O == "string") b.push(O);
      else if (x_.NotebookCellTextDocumentFilter.is(O)) if (typeof O.notebook == "string") b.push({ notebookType: O.notebook, language: O.language });
      else {
        let L = O.notebook.notebookType ?? "*";
        b.push({ notebookType: L, scheme: O.notebook.scheme, pattern: Va(O.notebook.pattern), language: O.language });
      }
      else x_.TextDocumentFilter.is(O) && b.push({ language: O.language, scheme: O.scheme, pattern: Va(O.pattern) });
      return b;
    }
    async function c(u, b) {
      return ae.map(u, f, b);
    }
    function l(u) {
      let b = new Array(u.length);
      for (let O = 0; O < u.length; O++) b[O] = f(u[O]);
      return b;
    }
    function f(u) {
      let b = typeof u.message == "string" ? u.message : u.message.kind === "plaintext" ? u.message.value : "Received a markup diagnostic message but the client does not support it.", O = new q_.ProtocolDiagnostic(y(u.range), b, T(u.severity), u.data);
      if (u.code !== void 0) {
        if (typeof u.code == "string" || typeof u.code == "number") z.CodeDescription.is(u.codeDescription) ? O.code = { value: u.code, target: o(u.codeDescription.href) } : O.code = u.code;
        else if (q_.DiagnosticCode.is(u.code)) {
          O.hasDiagnosticCode = true;
          let L = u.code;
          O.code = { value: L.value, target: o(L.target) };
        }
      }
      return u.source && (O.source = u.source), u.relatedInformation && (O.relatedInformation = h(u.relatedInformation)), Array.isArray(u.tags) && (O.tags = p(u.tags)), O;
    }
    function h(u) {
      let b = new Array(u.length);
      for (let O = 0; O < u.length; O++) {
        let L = u[O];
        b[O] = new F.DiagnosticRelatedInformation(rn(L.location), L.message);
      }
      return b;
    }
    function p(u) {
      if (!u) return;
      let b = [];
      for (let O of u) {
        let L = g(O);
        L !== void 0 && b.push(L);
      }
      return b.length > 0 ? b : void 0;
    }
    function g(u) {
      switch (u) {
        case z.DiagnosticTag.Unnecessary:
          return F.DiagnosticTag.Unnecessary;
        case z.DiagnosticTag.Deprecated:
          return F.DiagnosticTag.Deprecated;
        default:
          return;
      }
    }
    function _(u) {
      return u ? new F.Position(u.line, u.character) : void 0;
    }
    function y(u) {
      return u ? new F.Range(u.start.line, u.start.character, u.end.line, u.end.character) : void 0;
    }
    async function D(u, b) {
      return ae.map(u, (O) => new F.Range(O.start.line, O.start.character, O.end.line, O.end.character), b);
    }
    function T(u) {
      if (u == null) return F.DiagnosticSeverity.Error;
      switch (u) {
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
    function w(u) {
      if (Ot.string(u)) return j(u);
      if (Ho.is(u)) return j().appendCodeblock(u.value, u.language);
      if (Array.isArray(u)) {
        let b = [];
        for (let O of u) {
          let L = j();
          Ho.is(O) ? L.appendCodeblock(O.value, O.language) : L.appendMarkdown(O), b.push(L);
        }
        return b;
      } else return j(u);
    }
    function x(u) {
      if (Ot.string(u)) return u;
      switch (u.kind) {
        case z.MarkupKind.Markdown:
          return j(u.value);
        case z.MarkupKind.PlainText:
          return u.value;
        default:
          return `Unsupported Markup content received. Kind is: ${u.kind}`;
      }
    }
    function j(u) {
      let b;
      if (u === void 0 || typeof u == "string") b = new F.MarkdownString(u);
      else switch (u.kind) {
        case z.MarkupKind.Markdown:
          b = new F.MarkdownString(u.value);
          break;
        case z.MarkupKind.PlainText:
          b = new F.MarkdownString(), b.appendText(u.value);
          break;
        default:
          b = new F.MarkdownString(), b.appendText(`Unsupported Markup content received. Kind is: ${u.kind}`);
          break;
      }
      return b.isTrusted = e, b.supportHtml = t, b.supportThemeIcons = r, b;
    }
    function I(u) {
      if (u) return new F.Hover(w(u.contents), y(u.range));
    }
    async function Y(u, b, O) {
      if (!u) return;
      if (Array.isArray(u)) return ae.map(u, (Fn) => or(Fn, b), O);
      let L = u, { defaultRange: xe, commitCharacters: Ae } = re(L, b), _e = await ae.map(L.items, (Fn) => or(Fn, Ae, L.applyKind?.commitCharacters, xe, L.itemDefaults?.insertTextMode, L.itemDefaults?.insertTextFormat, L.itemDefaults?.data, L.applyKind?.data), O);
      return new F.CompletionList(_e, L.isIncomplete);
    }
    function re(u, b) {
      let O = u.itemDefaults?.editRange, L = u.itemDefaults?.commitCharacters ?? b;
      return z.Range.is(O) ? { defaultRange: y(O), commitCharacters: L } : O !== void 0 ? { defaultRange: { inserting: y(O.insert), replacing: y(O.replace) }, commitCharacters: L } : { defaultRange: void 0, commitCharacters: L };
    }
    function Oe(u) {
      return z.CompletionItemKind.Text <= u && u <= z.CompletionItemKind.TypeParameter ? [u - 1, void 0] : [F.CompletionItemKind.Text, u];
    }
    function En(u) {
      switch (u) {
        case z.CompletionItemTag.Deprecated:
          return F.CompletionItemTag.Deprecated;
      }
    }
    function ii(u) {
      if (u == null) return [];
      let b = [];
      for (let O of u) {
        let L = En(O);
        L !== void 0 && b.push(L);
      }
      return b;
    }
    function or(u, b, O, L, xe, Ae, _e, Fn) {
      let pr = ii(u.tags), Ft = It(u), Ue = new wD.default(Ft);
      u.detail && (Ue.detail = u.detail), u.documentation && (Ue.documentation = x(u.documentation), Ue.documentationFormat = Ot.string(u.documentation) ? "$string" : u.documentation.kind), u.filterText && (Ue.filterText = u.filterText);
      let Zs = qn(u, L, Ae);
      if (Zs && (Ue.insertText = Zs.text, Ue.range = Zs.range, Ue.fromEdit = Zs.fromEdit), Ot.number(u.kind)) {
        let [Gb, np] = Oe(u.kind);
        Ue.kind = Gb, np && (Ue.originalItemKind = np);
      }
      u.sortText && (Ue.sortText = u.sortText), u.additionalTextEdits && (Ue.additionalTextEdits = Ee(u.additionalTextEdits));
      let ep = si(u, b, O);
      ep && (Ue.commitCharacters = ep.slice()), u.command && (Ue.command = rt(u.command)), (u.deprecated === true || u.deprecated === false) && (Ue.deprecated = u.deprecated, u.deprecated === true && pr.push(F.CompletionItemTag.Deprecated)), (u.preselect === true || u.preselect === false) && (Ue.preselect = u.preselect);
      let tp = oi(u, _e, Fn);
      tp !== void 0 && (Ue.data = tp), pr.length > 0 && (Ue.tags = pr);
      let Xa = u.insertTextMode ?? xe;
      return Xa !== void 0 && (Ue.insertTextMode = Xa, Xa === z.InsertTextMode.asIs && (Ue.keepWhitespace = true)), Ue;
    }
    function si(u, b, O) {
      if (O === z.ApplyKind.Merge) {
        if (!b && !u.commitCharacters) return;
        let L = /* @__PURE__ */ new Set();
        if (b) for (let xe of b) L.add(xe);
        if (Ot.stringArray(u.commitCharacters)) for (let xe of u.commitCharacters) L.add(xe);
        return Array.from(L);
      }
      return u.commitCharacters !== void 0 ? Ot.stringArray(u.commitCharacters) ? u.commitCharacters : void 0 : b;
    }
    function oi(u, b, O) {
      if (O === z.ApplyKind.Merge) {
        let L = { ...b };
        return u.data && Object.entries(u.data).forEach(([xe, Ae]) => {
          Ae != null && (L[xe] = Ae);
        }), L;
      }
      return u.data ?? b;
    }
    function It(u) {
      return z.CompletionItemLabelDetails.is(u.labelDetails) ? { label: u.label, detail: u.labelDetails.detail, description: u.labelDetails.description } : u.label;
    }
    function qn(u, b, O) {
      let L = u.insertTextFormat ?? O;
      if (u.textEdit !== void 0 || b !== void 0) {
        let [xe, Ae] = u.textEdit !== void 0 ? Nt(u.textEdit) : [b, u.textEditText ?? u.label];
        return L === z.InsertTextFormat.Snippet ? { text: new F.SnippetString(Ae), range: xe, fromEdit: true } : { text: Ae, range: xe, fromEdit: true };
      } else return u.insertText ? L === z.InsertTextFormat.Snippet ? { text: new F.SnippetString(u.insertText), fromEdit: false } : { text: u.insertText, fromEdit: false } : void 0;
    }
    function Nt(u) {
      return z.InsertReplaceEdit.is(u) ? [{ inserting: y(u.insert), replacing: y(u.replace) }, u.newText] : [y(u.range), u.newText];
    }
    function xn(u) {
      if (u) return new F.TextEdit(y(u.range), u.newText);
    }
    async function Wt(u, b) {
      if (u) return ae.map(u, xn, b);
    }
    function Ee(u) {
      if (!u) return;
      let b = new Array(u.length);
      for (let O = 0; O < u.length; O++) b[O] = xn(u[O]);
      return b;
    }
    async function Ji(u, b) {
      if (!u) return;
      let O = new F.SignatureHelp();
      return Ot.number(u.activeSignature) ? O.activeSignature = u.activeSignature : O.activeSignature = 0, Ot.number(u.activeParameter) ? O.activeParameter = u.activeParameter : u.activeParameter === null ? O.activeParameter = -1 : O.activeParameter = 0, u.signatures && (O.signatures = await nn(u.signatures, b)), O;
    }
    async function nn(u, b) {
      return ae.mapAsync(u, ar, b);
    }
    async function ar(u, b) {
      let O = new F.SignatureInformation(u.label);
      return u.documentation !== void 0 && (O.documentation = x(u.documentation)), u.parameters !== void 0 && (O.parameters = await ai(u.parameters, b)), u.activeParameter !== void 0 && (O.activeParameter = u.activeParameter ?? -1), O;
    }
    function ai(u, b) {
      return ae.map(u, Lr, b);
    }
    function Lr(u) {
      let b = new F.ParameterInformation(u.label);
      return u.documentation && (b.documentation = x(u.documentation)), b;
    }
    function rn(u) {
      return u ? new F.Location(s(u.uri), y(u.range)) : void 0;
    }
    async function Ar(u, b) {
      if (u) return ur(u, b);
    }
    async function ci(u, b) {
      if (u) return ur(u, b);
    }
    function cr(u) {
      if (!u) return;
      let b = { targetUri: s(u.targetUri), targetRange: y(u.targetRange), originSelectionRange: y(u.originSelectionRange), targetSelectionRange: y(u.targetSelectionRange) };
      if (!b.targetSelectionRange) throw new Error("targetSelectionRange must not be undefined or null");
      return b;
    }
    async function ur(u, b) {
      if (u) if (Ot.array(u)) {
        if (u.length === 0) return [];
        if (z.LocationLink.is(u[0])) {
          let O = u;
          return ae.map(O, cr, b);
        } else {
          let O = u;
          return ae.map(O, rn, b);
        }
      } else return z.LocationLink.is(u) ? [cr(u)] : rn(u);
    }
    async function lr(u, b) {
      if (u) return ae.map(u, rn, b);
    }
    async function Qi(u, b) {
      if (u) return ae.map(u, ui, b);
    }
    function ui(u) {
      let b = new F.DocumentHighlight(y(u.range));
      return Ot.number(u.kind) && (b.kind = St(u.kind)), b;
    }
    function St(u) {
      switch (u) {
        case z.DocumentHighlightKind.Text:
          return F.DocumentHighlightKind.Text;
        case z.DocumentHighlightKind.Read:
          return F.DocumentHighlightKind.Read;
        case z.DocumentHighlightKind.Write:
          return F.DocumentHighlightKind.Write;
      }
      return F.DocumentHighlightKind.Text;
    }
    async function Yi(u, b) {
      if (u) return ae.map(u, Mn, b);
    }
    function sn(u) {
      return u <= z.SymbolKind.TypeParameter ? u - 1 : F.SymbolKind.Property;
    }
    function dr(u) {
      switch (u) {
        case z.SymbolTag.Deprecated:
          return F.SymbolTag.Deprecated;
        default:
          return;
      }
    }
    function fr(u) {
      if (u == null) return;
      let b = [];
      for (let O of u) {
        let L = dr(O);
        L !== void 0 && b.push(L);
      }
      return b.length === 0 ? void 0 : b;
    }
    function Mn(u) {
      let b = u.data, O = u.location, L = O.range === void 0 || b !== void 0 ? new OD.default(u.name, sn(u.kind), u.containerName ?? "", O.range === void 0 ? s(O.uri) : new F.Location(s(u.location.uri), y(O.range)), b) : new F.SymbolInformation(u.name, sn(u.kind), u.containerName ?? "", new F.Location(s(u.location.uri), y(O.range)));
      return zt(L, u), L;
    }
    async function li(u, b) {
      if (u != null) return ae.map(u, nt, b);
    }
    function nt(u) {
      let b = new F.DocumentSymbol(u.name, u.detail || "", sn(u.kind), y(u.range), y(u.selectionRange));
      if (zt(b, u), u.children !== void 0 && u.children.length > 0) {
        let O = [];
        for (let L of u.children) O.push(nt(L));
        b.children = O;
      }
      return b;
    }
    function zt(u, b) {
      u.tags = fr(b.tags), b.deprecated && (u.tags ? u.tags.includes(F.SymbolTag.Deprecated) || (u.tags = u.tags.concat(F.SymbolTag.Deprecated)) : u.tags = [F.SymbolTag.Deprecated]);
    }
    function rt(u) {
      let b = { title: u.title, command: u.command };
      return u.tooltip && (b.tooltip = u.tooltip), u.arguments && (b.arguments = u.arguments), b;
    }
    async function Zi(u, b) {
      if (u) return ae.map(u, rt, b);
    }
    let Ze = /* @__PURE__ */ new Map();
    Ze.set(z.CodeActionKind.Empty, F.CodeActionKind.Empty), Ze.set(z.CodeActionKind.QuickFix, F.CodeActionKind.QuickFix), Ze.set(z.CodeActionKind.Refactor, F.CodeActionKind.Refactor), Ze.set(z.CodeActionKind.RefactorExtract, F.CodeActionKind.RefactorExtract), Ze.set(z.CodeActionKind.RefactorInline, F.CodeActionKind.RefactorInline), Ze.set(z.CodeActionKind.RefactorRewrite, F.CodeActionKind.RefactorRewrite), Ze.set(z.CodeActionKind.Source, F.CodeActionKind.Source), Ze.set(z.CodeActionKind.SourceOrganizeImports, F.CodeActionKind.SourceOrganizeImports);
    function In(u) {
      if (u == null) return;
      let b = Ze.get(u);
      if (b) return b;
      let O = u.split(".");
      b = F.CodeActionKind.Empty;
      for (let L of O) b = b.append(L);
      return b;
    }
    function di(u) {
      if (u != null) return u.map((b) => In(b));
    }
    function kr(u) {
      if (u != null) return u.map((b) => ({ kind: In(b.kind), command: rt(b.command) }));
    }
    async function hr(u, b) {
      if (u == null) return;
      let O = new PD.default(u.title, u.data);
      return u.kind !== void 0 && (O.kind = In(u.kind)), u.diagnostics !== void 0 && (O.diagnostics = l(u.diagnostics)), u.edit !== void 0 && (O.edit = await N(u.edit, b)), u.command !== void 0 && (O.command = rt(u.command)), u.isPreferred !== void 0 && (O.isPreferred = u.isPreferred), u.disabled !== void 0 && (O.disabled = { reason: u.disabled.reason }), u.tags?.includes(z.CodeActionTag.LLMGenerated) && (O.isAI = true), O;
    }
    function jt(u, b) {
      return ae.mapAsync(u, async (O) => z.Command.is(O) ? rt(O) : hr(O, b), b);
    }
    function v(u) {
      if (!u) return;
      let b = new DD.default(y(u.range));
      return u.command && (b.command = rt(u.command)), u.data !== void 0 && u.data !== null && (b.data = u.data), b;
    }
    async function q(u, b) {
      if (u) return ae.map(u, v, b);
    }
    async function N(u, b) {
      if (!u) return;
      let O = /* @__PURE__ */ new Map();
      if (u.changeAnnotations !== void 0) {
        let Ae = u.changeAnnotations;
        await ae.forEach(Object.keys(Ae), (_e) => {
          let Fn = U(Ae[_e]);
          O.set(_e, Fn);
        }, b);
      }
      let L = (Ae) => {
        if (Ae !== void 0) return O.get(Ae);
      }, xe = new F.WorkspaceEdit();
      if (u.documentChanges) {
        let Ae = u.documentChanges;
        await ae.forEach(Ae, (_e) => {
          if (z.CreateFile.is(_e)) xe.createFile(s(_e.uri), _e.options, L(_e.annotationId));
          else if (z.RenameFile.is(_e)) xe.renameFile(s(_e.oldUri), s(_e.newUri), _e.options, L(_e.annotationId));
          else if (z.DeleteFile.is(_e)) xe.deleteFile(s(_e.uri), _e.options, L(_e.annotationId));
          else if (z.TextDocumentEdit.is(_e)) {
            let Fn = s(_e.textDocument.uri), pr = [];
            for (let Ft of _e.edits) z.AnnotatedTextEdit.is(Ft) ? pr.push([new F.TextEdit(y(Ft.range), Ft.newText), L(Ft.annotationId)]) : z.SnippetTextEdit.is(Ft) ? pr.push([new F.SnippetTextEdit(y(Ft.range), new F.SnippetString(Ft.snippet.value)), L(Ft.annotationId)]) : pr.push([new F.TextEdit(y(Ft.range), Ft.newText), void 0]);
            xe.set(Fn, pr);
          } else throw new Error(`Unknown workspace edit change received:
${JSON.stringify(_e, void 0, 4)}`);
        }, b);
      } else if (u.changes) {
        let Ae = u.changes;
        await ae.forEach(Object.keys(Ae), (_e) => {
          xe.set(s(_e), Ee(Ae[_e]));
        }, b);
      }
      return xe;
    }
    function U(u) {
      if (u !== void 0) return { label: u.label, needsConfirmation: !!u.needsConfirmation, description: u.description };
    }
    function te(u) {
      let b = y(u.range), O = u.target ? o(u.target) : void 0, L = new SD.default(b, O);
      return u.tooltip !== void 0 && (L.tooltip = u.tooltip), u.data !== void 0 && u.data !== null && (L.data = u.data), L;
    }
    async function ce(u, b) {
      if (u) return ae.map(u, te, b);
    }
    function oe(u) {
      return new F.Color(u.red, u.green, u.blue, u.alpha);
    }
    function qe(u) {
      return new F.ColorInformation(y(u.range), oe(u.color));
    }
    async function $e(u, b) {
      if (u) return ae.map(u, qe, b);
    }
    function ge(u) {
      let b = new F.ColorPresentation(u.label);
      return b.additionalTextEdits = Ee(u.additionalTextEdits), u.textEdit && (b.textEdit = xn(u.textEdit)), b;
    }
    async function ve(u, b) {
      if (u) return ae.map(u, ge, b);
    }
    function it(u) {
      if (u) switch (u) {
        case z.FoldingRangeKind.Comment:
          return F.FoldingRangeKind.Comment;
        case z.FoldingRangeKind.Imports:
          return F.FoldingRangeKind.Imports;
        case z.FoldingRangeKind.Region:
          return F.FoldingRangeKind.Region;
      }
    }
    function gt(u) {
      return new F.FoldingRange(u.startLine, u.endLine, it(u.kind));
    }
    async function Nn(u, b) {
      if (u) return ae.map(u, gt, b);
    }
    function Pt(u) {
      return new F.SelectionRange(y(u.range), u.parent ? Pt(u.parent) : void 0);
    }
    async function mt(u, b) {
      return Array.isArray(u) ? ae.map(u, Pt, b) : [];
    }
    function fi(u) {
      return z.InlineValueText.is(u) ? new F.InlineValueText(y(u.range), u.text) : z.InlineValueVariableLookup.is(u) ? new F.InlineValueVariableLookup(y(u.range), u.variableName, u.caseSensitiveLookup) : new F.InlineValueEvaluatableExpression(y(u.range), u.expression);
    }
    async function Ys(u, b) {
      return Array.isArray(u) ? ae.map(u, fi, b) : [];
    }
    async function d(u, b) {
      let O = typeof u.label == "string" ? u.label : await ae.map(u.label, S, b), L = new ED.default(_(u.position), O);
      return u.kind !== void 0 && (L.kind = u.kind), u.textEdits !== void 0 && (L.textEdits = await Wt(u.textEdits, b)), u.tooltip !== void 0 && (L.tooltip = $(u.tooltip)), u.paddingLeft !== void 0 && (L.paddingLeft = u.paddingLeft), u.paddingRight !== void 0 && (L.paddingRight = u.paddingRight), u.data !== void 0 && (L.data = u.data), L;
    }
    function S(u) {
      let b = new F.InlayHintLabelPart(u.value);
      return u.location !== void 0 && (b.location = rn(u.location)), u.tooltip !== void 0 && (b.tooltip = $(u.tooltip)), u.command !== void 0 && (b.command = rt(u.command)), b;
    }
    function $(u) {
      return typeof u == "string" ? u : j(u);
    }
    async function me(u, b) {
      if (Array.isArray(u)) return ae.mapAsync(u, d, b);
    }
    function ue(u) {
      if (u === null) return;
      let b = new RD.default(sn(u.kind), u.name, u.detail || "", o(u.uri), y(u.range), y(u.selectionRange), u.data);
      return u.tags !== void 0 && (b.tags = fr(u.tags)), b;
    }
    async function et(u, b) {
      if (u !== null) return ae.map(u, ue, b);
    }
    async function _t(u, b) {
      return new F.CallHierarchyIncomingCall(ue(u.from), await D(u.fromRanges, b));
    }
    async function jn(u, b) {
      if (u !== null) return ae.mapAsync(u, _t, b);
    }
    async function Qh(u, b) {
      return new F.CallHierarchyOutgoingCall(ue(u.to), await D(u.fromRanges, b));
    }
    async function $b(u, b) {
      if (u !== null) return ae.mapAsync(u, Qh, b);
    }
    async function Ub(u, b) {
      if (u != null) return new F.SemanticTokens(new Uint32Array(u.data), u.resultId);
    }
    function Yh(u) {
      return new F.SemanticTokensEdit(u.start, u.deleteCount, u.data !== void 0 ? new Uint32Array(u.data) : void 0);
    }
    async function Hb(u, b) {
      if (u != null) return new F.SemanticTokensEdits(u.edits.map(Yh), u.resultId);
    }
    function Wb(u) {
      return u;
    }
    async function zb(u, b) {
      if (u != null) return new F.LinkedEditingRanges(await D(u.ranges, b), Kb(u.wordPattern));
    }
    function Kb(u) {
      if (u != null) return new RegExp(u);
    }
    function Zh(u) {
      if (u === null) return;
      let b = new TD.default(sn(u.kind), u.name, u.detail || "", o(u.uri), y(u.range), y(u.selectionRange), u.data);
      return u.tags !== void 0 && (b.tags = fr(u.tags)), b;
    }
    async function Bb(u, b) {
      if (u !== null) return ae.map(u, Zh, b);
    }
    function Va(u) {
      if (Ot.string(u)) return u;
      if (z.RelativePattern.is(u)) {
        if (z.URI.is(u.baseUri)) return new F.RelativePattern(o(u.baseUri), u.pattern);
        if (z.WorkspaceFolder.is(u.baseUri)) {
          let b = F.workspace.getWorkspaceFolder(o(u.baseUri.uri));
          return b !== void 0 ? new F.RelativePattern(b, u.pattern) : void 0;
        }
      }
    }
    async function Vb(u, b) {
      if (!u) return;
      if (Array.isArray(u)) return ae.map(u, (xe) => Ga(xe), b);
      let O = u, L = await ae.map(O.items, (xe) => Ga(xe), b);
      return new F.InlineCompletionList(L);
    }
    function Ga(u) {
      let b;
      typeof u.insertText == "string" ? b = u.insertText : b = new F.SnippetString(u.insertText.value);
      let O;
      u.command && (O = rt(u.command));
      let L = new F.InlineCompletionItem(b, y(u.range), O);
      return u.filterText && (L.filterText = u.filterText), L;
    }
    return { asUri: o, asDocumentSelector: a, asDiagnostics: c, asDiagnostic: f, asRange: y, asRanges: D, asPosition: _, asDiagnosticSeverity: T, asDiagnosticTag: g, asHover: I, asCompletionResult: Y, asCompletionItem: or, asTextEdit: xn, asTextEdits: Wt, asSignatureHelp: Ji, asSignatureInformations: nn, asSignatureInformation: ar, asParameterInformations: ai, asParameterInformation: Lr, asDeclarationResult: Ar, asDefinitionResult: ci, asLocation: rn, asReferences: lr, asDocumentHighlights: Qi, asDocumentHighlight: ui, asDocumentHighlightKind: St, asSymbolKind: sn, asSymbolTag: dr, asSymbolTags: fr, asSymbolInformations: Yi, asSymbolInformation: Mn, asDocumentSymbols: li, asDocumentSymbol: nt, asCommand: rt, asCommands: Zi, asCodeAction: hr, asCodeActionKind: In, asCodeActionKinds: di, asCodeActionDocumentations: kr, asCodeActionResult: jt, asCodeLens: v, asCodeLenses: q, asWorkspaceEdit: N, asDocumentLink: te, asDocumentLinks: ce, asFoldingRangeKind: it, asFoldingRange: gt, asFoldingRanges: Nn, asColor: oe, asColorInformation: qe, asColorInformations: $e, asColorPresentation: ge, asColorPresentations: ve, asSelectionRange: Pt, asSelectionRanges: mt, asInlineValue: fi, asInlineValues: Ys, asInlayHint: d, asInlayHints: me, asSemanticTokensLegend: Wb, asSemanticTokens: Ub, asSemanticTokensEdit: Yh, asSemanticTokensEdits: Hb, asCallHierarchyItem: ue, asCallHierarchyItems: et, asCallHierarchyIncomingCall: _t, asCallHierarchyIncomingCalls: jn, asCallHierarchyOutgoingCall: Qh, asCallHierarchyOutgoingCalls: $b, asLinkedEditingRanges: zb, asTypeHierarchyItem: Zh, asTypeHierarchyItems: Bb, asGlobPattern: Va, asInlineCompletionResult: Vb, asInlineCompletionItem: Ga };
  }
});
var De = R((Er) => {
  "use strict";
  Object.defineProperty(Er, "__esModule", { value: true });
  Er.empty = void 0;
  Er.v4 = I_;
  Er.isUUID = N_;
  Er.parse = MD;
  Er.generateUuid = ID;
  var Cs = class {
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
  }, nd = class n2 extends Cs {
    static _chars = ["0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    static _timeHighBits = ["8", "9", "a", "b"];
    static _oneOf(e) {
      return e[Math.floor(e.length * Math.random())];
    }
    static _randomHex() {
      return n2._oneOf(n2._chars);
    }
    constructor() {
      super([n2._randomHex(), n2._randomHex(), n2._randomHex(), n2._randomHex(), n2._randomHex(), n2._randomHex(), n2._randomHex(), n2._randomHex(), "-", n2._randomHex(), n2._randomHex(), n2._randomHex(), n2._randomHex(), "-", "4", n2._randomHex(), n2._randomHex(), n2._randomHex(), "-", n2._oneOf(n2._timeHighBits), n2._randomHex(), n2._randomHex(), n2._randomHex(), "-", n2._randomHex(), n2._randomHex(), n2._randomHex(), n2._randomHex(), n2._randomHex(), n2._randomHex(), n2._randomHex(), n2._randomHex(), n2._randomHex(), n2._randomHex(), n2._randomHex(), n2._randomHex()].join(""));
    }
  };
  Er.empty = new Cs("00000000-0000-0000-0000-000000000000");
  function I_() {
    return new nd();
  }
  var xD = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  function N_(n2) {
    return xD.test(n2);
  }
  function MD(n2) {
    if (!N_(n2)) throw new Error("invalid uuid");
    return new Cs(n2);
  }
  function ID() {
    return I_().asHex();
  }
});
var id = R((un) => {
  "use strict";
  var ND = un && un.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), jD = un && un.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), FD = un && un.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && ND(t, e, r[i]);
      return jD(t, e), t;
    };
  })();
  Object.defineProperty(un, "__esModule", { value: true });
  un.ProgressPart = void 0;
  var j_ = require("vscode"), F_ = G(), L_ = FD(At()), rd = class {
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
      this._client = e, this._token = t, this._reported = 0, this._infinite = false, this._lspProgressDisposable = this._client.onProgress(F_.WorkDoneProgress.type, this._token, (i) => {
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
      this._infinite = e.percentage === void 0, this._lspProgressDisposable !== void 0 && j_.window.withProgress({ location: j_.ProgressLocation.Window, cancellable: e.cancellable, title: e.title }, async (t, r) => {
        if (this._lspProgressDisposable !== void 0) return this._progress = t, this._cancellationToken = r, this._tokenDisposable = this._cancellationToken.onCancellationRequested(() => {
          this._client.sendNotification(F_.WorkDoneProgressCancelNotification.type, { token: this._token });
        }), this.report(e), new Promise((i, s) => {
          this._resolve = i, this._reject = s;
        });
      });
    }
    report(e) {
      if (this._infinite && L_.string(e.message)) this._progress !== void 0 && this._progress.report({ message: e.message });
      else if (L_.number(e.percentage)) {
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
  un.ProgressPart = rd;
});
var ie = R((ye) => {
  "use strict";
  var LD = ye && ye.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), AD = ye && ye.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), H_ = ye && ye.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && LD(t, e, r[i]);
      return AD(t, e), t;
    };
  })();
  Object.defineProperty(ye, "__esModule", { value: true });
  ye.DefaultDiagnosticCollectionProvider = ye.DiagnosticCollectionSource = ye.WorkspaceFeature = ye.TextDocumentLanguageFeature = ye.TextDocumentEventFeature = ye.DynamicDocumentFeature = ye.DynamicFeature = ye.StaticFeature = ye.LSPCancellationError = void 0;
  ye.ensure = kD;
  var Qt = require("vscode"), sd = G(), ht = H_(At()), A_ = H_(De()), od = class extends Qt.CancellationError {
    data;
    constructor(e) {
      super(), this.data = e;
    }
  };
  ye.LSPCancellationError = od;
  function kD(n2, e) {
    return n2[e] === void 0 && (n2[e] = {}), n2[e];
  }
  var k_;
  (function(n2) {
    function e(t) {
      let r = t;
      return r != null && ht.func(r.fillClientCapabilities) && ht.func(r.initialize) && ht.func(r.getState) && ht.func(r.clear) && (r.fillInitializeParams === void 0 || ht.func(r.fillInitializeParams));
    }
    n2.is = e;
  })(k_ || (ye.StaticFeature = k_ = {}));
  var $_;
  (function(n2) {
    function e(t) {
      let r = t;
      return r != null && ht.func(r.fillClientCapabilities) && ht.func(r.initialize) && ht.func(r.getState) && ht.func(r.clear) && (r.fillInitializeParams === void 0 || ht.func(r.fillInitializeParams)) && ht.func(r.register) && ht.func(r.unregister) && r.registrationType !== void 0;
    }
    n2.is = e;
  })($_ || (ye.DynamicFeature = $_ = {}));
  var ws = class {
    _client;
    constructor(e) {
      this._client = e;
    }
    getState() {
      let e = this.getDocumentSelectors(), t = 0;
      for (let i of e) {
        t++;
        for (let s of Qt.workspace.textDocuments) if (Qt.languages.match(i, s) > 0) return { kind: "document", id: this.registrationType.method, registrations: true, matches: true };
      }
      let r = t > 0;
      return { kind: "document", id: this.registrationType.method, registrations: r, matches: false };
    }
  };
  ye.DynamicDocumentFeature = ws;
  var ad = class extends ws {
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
      for (let r of e) if (Qt.languages.match(r, t) > 0) return true;
      return false;
    }
    constructor(e, t, r, i, s, o, a) {
      super(e), this._event = t, this._type = r, this._middleware = i, this._createParams = s, this._textDocument = o, this._selectorFilter = a, this._selectors = /* @__PURE__ */ new Map(), this._onAboutToSendNotification = new Qt.EventEmitter(), this._onNotificationSent = new Qt.EventEmitter();
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
      this._selectors.clear(), this._onNotificationSent.dispose(), this._onNotificationSent = new Qt.EventEmitter(), this._listener && (this._listener.dispose(), this._listener = void 0);
    }
    getProvider(e) {
      for (let t of this._selectors.values()) if (Qt.languages.match(t, e) > 0) return { send: (r) => this.callback(r) };
    }
  };
  ye.TextDocumentEventFeature = ad;
  var cd = class extends ws {
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
        if (sd.TextDocumentRegistrationOptions.is(t)) {
          let r = sd.StaticRegistrationOptions.hasId(t) ? t.id : A_.generateUuid(), i = t.documentSelector ?? e;
          if (i) return [r, Object.assign({}, t, { documentSelector: i })];
        } else if (ht.boolean(t) && t === true || sd.WorkDoneProgressOptions.is(t)) {
          if (!e) return [void 0, void 0];
          let r = ht.boolean(t) && t === true ? { documentSelector: e } : Object.assign({}, t, { documentSelector: e });
          return [A_.generateUuid(), r];
        }
      } else return [void 0, void 0];
      return [void 0, void 0];
    }
    getRegistrationOptions(e, t) {
      if (!(!e || !t)) return ht.boolean(t) && t === true ? { documentSelector: e } : Object.assign({}, t, { documentSelector: e });
    }
    getProvider(e) {
      for (let t of this._registrations.values()) {
        let r = t.data.registerOptions.documentSelector;
        if (r !== null && Qt.languages.match(this._client.protocol2CodeConverter.asDocumentSelector(r), e) > 0) return t.provider;
      }
    }
    getAllProviders() {
      let e = [];
      for (let t of this._registrations.values()) e.push(t.provider);
      return e;
    }
  };
  ye.TextDocumentLanguageFeature = cd;
  var ud = class {
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
  ye.WorkspaceFeature = ud;
  var U_;
  (function(n2) {
    n2.push = "push", n2.pull = "pull";
  })(U_ || (ye.DiagnosticCollectionSource = U_ = {}));
  var ld = class {
    create(e, t) {
      return e !== void 0 ? Qt.languages.createDiagnosticCollection(e) : Qt.languages.createDiagnosticCollection();
    }
    dispose(e, t) {
      e.dispose();
    }
  };
  ye.DefaultDiagnosticCollectionProvider = ld;
});
var z_ = R((Kr) => {
  "use strict";
  Object.defineProperty(Kr, "__esModule", { value: true });
  Kr.range = Kr.balanced = void 0;
  var $D = (n2, e, t) => {
    let r = n2 instanceof RegExp ? W_(n2, t) : n2, i = e instanceof RegExp ? W_(e, t) : e, s = r !== null && i != null && (0, Kr.range)(r, i, t);
    return s && { start: s[0], end: s[1], pre: t.slice(0, s[0]), body: t.slice(s[0] + r.length, s[1]), post: t.slice(s[1] + i.length) };
  };
  Kr.balanced = $D;
  var W_ = (n2, e) => {
    let t = e.match(n2);
    return t ? t[0] : null;
  }, UD = (n2, e, t) => {
    let r, i, s, o, a, c = t.indexOf(n2), l = t.indexOf(e, c + 1), f = c;
    if (c >= 0 && l > 0) {
      if (n2 === e) return [c, l];
      for (r = [], s = t.length; f >= 0 && !a; ) {
        if (f === c) r.push(f), c = t.indexOf(n2, f + 1);
        else if (r.length === 1) {
          let h = r.pop();
          h !== void 0 && (a = [h, l]);
        } else i = r.pop(), i !== void 0 && i < s && (s = i, o = l), l = t.indexOf(e, f + 1);
        f = c < l && c >= 0 ? c : l;
      }
      r.length && o !== void 0 && (a = [s, o]);
    }
    return a;
  };
  Kr.range = UD;
});
var Q_ = R((Qn) => {
  "use strict";
  Object.defineProperty(Qn, "__esModule", { value: true });
  Qn.EXPANSION_MAX_LENGTH = Qn.EXPANSION_MAX = void 0;
  Qn.expand = eS;
  var K_ = z_(), B_ = "\0SLASH" + Math.random() + "\0", V_ = "\0OPEN" + Math.random() + "\0", hd = "\0CLOSE" + Math.random() + "\0", G_ = "\0COMMA" + Math.random() + "\0", X_ = "\0PERIOD" + Math.random() + "\0", HD = new RegExp(B_, "g"), WD = new RegExp(V_, "g"), zD = new RegExp(hd, "g"), KD = new RegExp(G_, "g"), BD = new RegExp(X_, "g"), VD = /\\\\/g, GD = /\\{/g, XD = /\\}/g, JD = /\\,/g, QD = /\\\./g;
  Qn.EXPANSION_MAX = 1e5;
  Qn.EXPANSION_MAX_LENGTH = 4e6;
  function dd(n2) {
    return isNaN(n2) ? n2.charCodeAt(0) : parseInt(n2, 10);
  }
  function YD(n2) {
    return n2.replace(VD, B_).replace(GD, V_).replace(XD, hd).replace(JD, G_).replace(QD, X_);
  }
  function ZD(n2) {
    return n2.replace(HD, "\\").replace(WD, "{").replace(zD, "}").replace(KD, ",").replace(BD, ".");
  }
  function J_(n2) {
    if (!n2) return [""];
    let e = [], t = (0, K_.balanced)("{", "}", n2);
    if (!t) return n2.split(",");
    let { pre: r, body: i, post: s } = t, o = r.split(",");
    o[o.length - 1] += "{" + i + "}";
    let a = J_(s);
    return s.length && (o[o.length - 1] += a.shift(), o.push.apply(o, a)), e.push.apply(e, o), e;
  }
  function eS(n2, e = {}) {
    if (!n2) return [];
    let { max: t = Qn.EXPANSION_MAX, maxLength: r = Qn.EXPANSION_MAX_LENGTH } = e;
    return n2.slice(0, 2) === "{}" && (n2 = "\\{\\}" + n2.slice(2)), fd(YD(n2), t, r, true).map(ZD);
  }
  function tS(n2) {
    return "{" + n2 + "}";
  }
  function nS(n2) {
    return /^-?0\d/.test(n2);
  }
  function rS(n2, e) {
    return n2 <= e;
  }
  function iS(n2, e) {
    return n2 >= e;
  }
  function Ds(n2, e, t, r, i, s) {
    let o = [], a = 0;
    for (let c = 0; c < n2.length; c++) for (let l = 0; l < t.length; l++) {
      if (o.length >= r) return o;
      let f = n2[c] + e + t[l];
      if (!(s && !f)) {
        if (a + f.length > i) return o;
        o.push(f), a += f.length;
      }
    }
    return o;
  }
  function sS(n2, e, t, r) {
    let i = n2.split(/\.\./), s = [];
    if (i[0] === void 0 || i[1] === void 0) return s;
    let o = dd(i[0]), a = dd(i[1]), c = Math.max(i[0].length, i[1].length), l = i.length === 3 && i[2] !== void 0 ? Math.max(Math.abs(dd(i[2])), 1) : 1, f = rS;
    a < o && (l *= -1, f = iS);
    let p = i.some(nS), g = 0;
    for (let _ = o; f(_, a) && s.length < t; _ += l) {
      let y;
      if (e) y = String.fromCharCode(_), y === "\\" && (y = "");
      else if (y = String(_), p) {
        let D = c - y.length;
        if (D > 0) {
          let T = new Array(D + 1).join("0");
          _ < 0 ? y = "-" + T + y.slice(1) : y = T + y;
        }
      }
      if (g + y.length > r) break;
      s.push(y), g += y.length;
    }
    return s;
  }
  function fd(n2, e, t, r) {
    let i = [""], s = false, o = true;
    for (; ; ) {
      let a = (0, K_.balanced)("{", "}", n2);
      if (!a) return Ds(i, n2, [""], e, t, s);
      let c = a.pre;
      if (/\$$/.test(c)) {
        if (i = Ds(i, c + "{" + a.body + "}", [""], e, t, s && !a.post.length), o = false, !a.post.length) break;
        n2 = a.post;
        continue;
      }
      let l = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(a.body), f = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(a.body), h = l || f, p = a.body.indexOf(",") >= 0;
      if (!h && !p) {
        if (a.post.match(/,(?!,).*\}/)) {
          n2 = a.pre + "{" + a.body + hd + a.post, r = true;
          continue;
        }
        return Ds(i, c + "{" + a.body + "}" + a.post, [""], e, t, s);
      }
      o && (s = r && !h, o = false);
      let g;
      if (h) g = sS(a.body, f, e, t);
      else {
        let _ = J_(a.body);
        if (_.length === 1 && _[0] !== void 0 && (_ = fd(_[0], e, t, false).map(tS), _.length === 1)) {
          if (i = Ds(i, c + _[0], [""], e, t, s && !a.post.length), !a.post.length) break;
          n2 = a.post;
          continue;
        }
        let y = s && !a.post.length && !c;
        for (let T = 0; y && T < i.length; T++) i[T] && (y = false);
        g = [];
        let D = 0;
        e: for (let T = 0; T < _.length; T++) {
          let w = fd(_[T], e, t, false);
          for (let x = 0; x < w.length; x++) {
            let j = w[x];
            if (!(y && !j)) {
              if (g.length >= e || D + j.length > t) break e;
              g.push(j), D += j.length;
            }
          }
        }
      }
      if (i = Ds(i, c, g, e, t, s && !a.post.length), !a.post.length) break;
      n2 = a.post;
    }
    return i;
  }
});
var Y_ = R((zo) => {
  "use strict";
  Object.defineProperty(zo, "__esModule", { value: true });
  zo.assertValidPattern = void 0;
  var oS = 1024 * 64, aS = (n2) => {
    if (typeof n2 != "string") throw new TypeError("invalid pattern");
    if (n2.length > oS) throw new TypeError("pattern is too long");
  };
  zo.assertValidPattern = aS;
});
var ey = R((Ko) => {
  "use strict";
  Object.defineProperty(Ko, "__esModule", { value: true });
  Ko.parseClass = void 0;
  var cS = { "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", true], "[:alpha:]": ["\\p{L}\\p{Nl}", true], "[:ascii:]": ["\\x00-\\x7f", false], "[:blank:]": ["\\p{Zs}\\t", true], "[:cntrl:]": ["\\p{Cc}", true], "[:digit:]": ["\\p{Nd}", true], "[:graph:]": ["\\p{Z}\\p{C}", true, true], "[:lower:]": ["\\p{Ll}", true], "[:print:]": ["\\p{C}", true], "[:punct:]": ["\\p{P}", true], "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", true], "[:upper:]": ["\\p{Lu}", true], "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", true], "[:xdigit:]": ["A-Fa-f0-9", false] }, Ss = (n2) => n2.replace(/[[\]\\-]/g, "\\$&"), uS = (n2) => n2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Z_ = (n2) => n2.join(""), lS = (n2, e) => {
    let t = e;
    if (n2.charAt(t) !== "[") throw new Error("not in a brace expression");
    let r = [], i = [], s = t + 1, o = false, a = false, c = false, l = false, f = t, h = "";
    e: for (; s < n2.length; ) {
      let y = n2.charAt(s);
      if ((y === "!" || y === "^") && s === t + 1) {
        l = true, s++;
        continue;
      }
      if (y === "]" && o && !c) {
        f = s + 1;
        break;
      }
      if (o = true, y === "\\" && !c) {
        c = true, s++;
        continue;
      }
      if (y === "[" && !c) {
        for (let [D, [T, w, x]] of Object.entries(cS)) if (n2.startsWith(D, s)) {
          if (h) return ["$.", false, n2.length - t, true];
          s += D.length, x ? i.push(T) : r.push(T), a = a || w;
          continue e;
        }
      }
      if (c = false, h) {
        y > h ? r.push(Ss(h) + "-" + Ss(y)) : y === h && r.push(Ss(y)), h = "", s++;
        continue;
      }
      if (n2.startsWith("-]", s + 1)) {
        r.push(Ss(y + "-")), s += 2;
        continue;
      }
      if (n2.startsWith("-", s + 1)) {
        h = y, s += 2;
        continue;
      }
      r.push(Ss(y)), s++;
    }
    if (f < s) return ["", false, 0, false];
    if (!r.length && !i.length) return ["$.", false, n2.length - t, true];
    if (i.length === 0 && r.length === 1 && /^\\?.$/.test(r[0]) && !l) {
      let y = r[0].length === 2 ? r[0].slice(-1) : r[0];
      return [uS(y), false, f - t, false];
    }
    let p = "[" + (l ? "^" : "") + Z_(r) + "]", g = "[" + (l ? "" : "^") + Z_(i) + "]";
    return [r.length && i.length ? "(" + p + "|" + g + ")" : r.length ? p : g, a, f - t, true];
  };
  Ko.parseClass = lS;
});
var Vo = R((Bo) => {
  "use strict";
  Object.defineProperty(Bo, "__esModule", { value: true });
  Bo.unescape = void 0;
  var dS = (n2, { windowsPathsNoEscape: e = false, magicalBraces: t = true } = {}) => t ? e ? n2.replace(/\[([^/\\])\]/g, "$1") : n2.replace(/((?!\\).|^)\[([^/\\])\]/g, "$1$2").replace(/\\([^/])/g, "$1") : e ? n2.replace(/\[([^/\\{}])\]/g, "$1") : n2.replace(/((?!\\).|^)\[([^/\\{}])\]/g, "$1$2").replace(/\\([^/{}])/g, "$1");
  Bo.unescape = dS;
});
var md = R((Qo) => {
  "use strict";
  var Ct;
  Object.defineProperty(Qo, "__esModule", { value: true });
  Qo.AST = void 0;
  var fS = ey(), Go = Vo(), hS = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), pd = (n2) => hS.has(n2), ty = (n2) => pd(n2.type), pS = /* @__PURE__ */ new Map([["!", ["@"]], ["?", ["?", "@"]], ["@", ["@"]], ["*", ["*", "+", "?", "@"]], ["+", ["+", "@"]]]), gS = /* @__PURE__ */ new Map([["!", ["?"]], ["@", ["?"]], ["+", ["?", "*"]]]), mS = /* @__PURE__ */ new Map([["!", ["?", "@"]], ["?", ["?", "@"]], ["@", ["?", "@"]], ["*", ["*", "+", "?", "@"]], ["+", ["+", "@", "?", "*"]]]), ny = /* @__PURE__ */ new Map([["!", /* @__PURE__ */ new Map([["!", "@"]])], ["?", /* @__PURE__ */ new Map([["*", "*"], ["+", "*"]])], ["@", /* @__PURE__ */ new Map([["!", "!"], ["?", "?"], ["@", "@"], ["*", "*"], ["+", "+"]])], ["+", /* @__PURE__ */ new Map([["?", "*"], ["*", "*"]])]]), _S = "(?!(?:^|/)\\.\\.?(?:$|/))", Xo = "(?!\\.)", yS = /* @__PURE__ */ new Set(["[", "."]), vS = /* @__PURE__ */ new Set(["..", "."]), bS = new Set("().*{}+?[]^$\\!"), CS = (n2) => n2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), gd = "[^/]", ry = gd + "*?", iy = gd + "+?", wS = 0, Jo = class {
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
    id = ++wS;
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
    #_() {
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
        if (typeof t != "string" && !(t instanceof Ct && t.#t === this)) throw new Error("invalid part: " + t);
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
        if (!(r instanceof Ct && r.type === "!")) return false;
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
      let t = new Ct(this.type, e);
      for (let r of this.#e) t.copyIn(r);
      return t;
    }
    static #d(e, t, r, i, s) {
      let o = i.maxExtglobRecursion ?? 2, a = false, c = false, l = -1, f = false;
      if (t.type === null) {
        let y = r, D = "";
        for (; y < e.length; ) {
          let T = e.charAt(y++);
          if (a || T === "\\") {
            a = !a, D += T;
            continue;
          }
          if (c) {
            y === l + 1 ? (T === "^" || T === "!") && (f = true) : T === "]" && !(y === l + 2 && f) && (c = false), D += T;
            continue;
          } else if (T === "[") {
            c = true, l = y, f = false, D += T;
            continue;
          }
          if (!i.noext && pd(T) && e.charAt(y) === "(" && s <= o) {
            t.push(D), D = "";
            let x = new Ct(T, t);
            y = Ct.#d(e, x, y, i, s + 1), t.push(x);
            continue;
          }
          D += T;
        }
        return t.push(D), y;
      }
      let h = r + 1, p = new Ct(null, t), g = [], _ = "";
      for (; h < e.length; ) {
        let y = e.charAt(h++);
        if (a || y === "\\") {
          a = !a, _ += y;
          continue;
        }
        if (c) {
          h === l + 1 ? (y === "^" || y === "!") && (f = true) : y === "]" && !(h === l + 2 && f) && (c = false), _ += y;
          continue;
        } else if (y === "[") {
          c = true, l = h, f = false, _ += y;
          continue;
        }
        if (!i.noext && pd(y) && e.charAt(h) === "(" && (s <= o || t && t.#f(y))) {
          let T = t && t.#f(y) ? 0 : 1;
          p.push(_), _ = "";
          let w = new Ct(y, p);
          p.push(w), h = Ct.#d(e, w, h, i, s + T);
          continue;
        }
        if (y === "|") {
          p.push(_), _ = "", g.push(p), p = new Ct(null, t);
          continue;
        }
        if (y === ")") return _ === "" && t.#e.length === 0 && (t.#l = true), p.push(_), _ = "", t.push(...g, p), h;
        _ += y;
      }
      return t.type = null, t.#r = void 0, t.#e = [e.substring(r - 1)], h;
    }
    #y(e) {
      return this.#p(e, gS);
    }
    #p(e, t = pS) {
      if (!e || typeof e != "object" || e.type !== null || e.#e.length !== 1 || this.type === null) return false;
      let r = e.#e[0];
      return !r || typeof r != "object" || r.type === null ? false : this.#f(r.type, t);
    }
    #f(e, t = mS) {
      return !!t.get(this.type)?.includes(e);
    }
    #v(e, t) {
      let r = e.#e[0], i = new Ct(null, r, this.options);
      i.#e.push(""), r.push(i), this.#g(e, t);
    }
    #g(e, t) {
      let r = e.#e[0];
      this.#e.splice(t, 1, ...r.#e);
      for (let i of r.#e) typeof i == "object" && (i.#t = this);
      this.#o = void 0;
    }
    #b(e) {
      return !!ny.get(this.type)?.has(e);
    }
    #C(e) {
      if (!e || typeof e != "object" || e.type !== null || e.#e.length !== 1 || this.type === null || this.#e.length !== 1) return false;
      let t = e.#e[0];
      return !t || typeof t != "object" || t.type === null ? false : this.#b(t.type);
    }
    #w(e) {
      let t = ny.get(this.type), r = e.#e[0], i = t?.get(r.type);
      if (!i) return false;
      this.#e = r.#e;
      for (let s of this.#e) typeof s == "object" && (s.#t = this);
      this.type = i, this.#o = void 0, this.#l = false;
    }
    static fromGlob(e, t = {}) {
      let r = new Ct(null, void 0, t);
      return Ct.#d(e, r, 0, t, 0), r;
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
      if (this.#n === this && (this.#h(), this.#_()), !ty(this)) {
        let c = this.isStart() && this.isEnd() && !this.#e.some((g) => typeof g != "string"), l = this.#e.map((g) => {
          let [_, y, D, T] = typeof g == "string" ? Ct.#D(g, this.#r, c) : g.toRegExpSource(e);
          return this.#r = this.#r || D, this.#i = this.#i || T, _;
        }).join(""), f = "";
        if (this.isStart() && typeof this.#e[0] == "string" && !(this.#e.length === 1 && vS.has(this.#e[0]))) {
          let _ = yS, y = t && _.has(l.charAt(0)) || l.startsWith("\\.") && _.has(l.charAt(2)) || l.startsWith("\\.\\.") && _.has(l.charAt(4)), D = !t && !e && _.has(l.charAt(0));
          f = y ? _S : D ? Xo : "";
        }
        let h = "";
        return this.isEnd() && this.#n.#c && this.#t?.type === "!" && (h = "(?:$|\\/)"), [f + l + h, (0, Go.unescape)(l), this.#r = !!this.#r, this.#i];
      }
      let r = this.type === "*" || this.type === "+", i = this.type === "!" ? "(?:(?!(?:" : "(?:", s = this.#m(t);
      if (this.isStart() && this.isEnd() && !s && this.type !== "!") {
        let c = this.toString(), l = this;
        return l.#e = [c], l.type = null, l.#r = void 0, [c, (0, Go.unescape)(this.toString()), false, false];
      }
      let o = !r || e || t || !Xo ? "" : this.#m(true);
      o === s && (o = ""), o && (s = `(?:${s})(?:${o})*?`);
      let a = "";
      if (this.type === "!" && this.#l) a = (this.isStart() && !t ? Xo : "") + iy;
      else {
        let c = this.type === "!" ? "))" + (this.isStart() && !t && !e ? Xo : "") + ry + ")" : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && o ? ")" : this.type === "*" && o ? ")?" : `)${this.type}`;
        a = i + s + c;
      }
      return [a, (0, Go.unescape)(s), this.#r = !!this.#r, this.#i];
    }
    #h() {
      if (ty(this)) {
        let e = 0, t = false;
        do {
          t = true;
          for (let r = 0; r < this.#e.length; r++) {
            let i = this.#e[r];
            typeof i == "object" && (i.#h(), this.#p(i) ? (t = false, this.#g(i, r)) : this.#y(i) ? (t = false, this.#v(i, r)) : this.#C(i) && (t = false, this.#w(i)));
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
        let l = e.charAt(c);
        if (i) {
          i = false, s += (bS.has(l) ? "\\" : "") + l;
          continue;
        }
        if (l === "*") {
          if (a) continue;
          a = true, s += r && /^[*]+$/.test(e) ? iy : ry, t = true;
          continue;
        } else a = false;
        if (l === "\\") {
          c === e.length - 1 ? s += "\\\\" : i = true;
          continue;
        }
        if (l === "[") {
          let [f, h, p, g] = (0, fS.parseClass)(e, c);
          if (p) {
            s += f, o = o || h, c += p - 1, t = t || g;
            continue;
          }
        }
        if (l === "?") {
          s += gd, t = true;
          continue;
        }
        s += CS(l);
      }
      return [s, (0, Go.unescape)(e), !!t, o];
    }
  };
  Qo.AST = Jo;
  Ct = Jo;
});
var _d = R((Yo) => {
  "use strict";
  Object.defineProperty(Yo, "__esModule", { value: true });
  Yo.escape = void 0;
  var DS = (n2, { windowsPathsNoEscape: e = false, magicalBraces: t = false } = {}) => t ? e ? n2.replace(/[?*()[\]{}]/g, "[$&]") : n2.replace(/[?*()[\]\\{}]/g, "\\$&") : e ? n2.replace(/[?*()[\]]/g, "[$&]") : n2.replace(/[?*()[\]\\]/g, "\\$&");
  Yo.escape = DS;
});
var yd = R((H) => {
  "use strict";
  Object.defineProperty(H, "__esModule", { value: true });
  H.unescape = H.escape = H.AST = H.Minimatch = H.match = H.makeRe = H.braceExpand = H.defaults = H.filter = H.GLOBSTAR = H.sep = H.minimatch = void 0;
  var SS = Q_(), Zo = Y_(), ay = md(), PS = _d(), RS = Vo(), TS = (n2, e, t = {}) => ((0, Zo.assertValidPattern)(e), !t.nocomment && e.charAt(0) === "#" ? false : new Br(e, t).match(n2));
  H.minimatch = TS;
  var OS = /^\*+([^+@!?*[(]*)$/, ES = (n2) => (e) => !e.startsWith(".") && e.endsWith(n2), qS = (n2) => (e) => e.endsWith(n2), xS = (n2) => (n2 = n2.toLowerCase(), (e) => !e.startsWith(".") && e.toLowerCase().endsWith(n2)), MS = (n2) => (n2 = n2.toLowerCase(), (e) => e.toLowerCase().endsWith(n2)), IS = /^\*+\.\*+$/, NS = (n2) => !n2.startsWith(".") && n2.includes("."), jS = (n2) => n2 !== "." && n2 !== ".." && n2.includes("."), FS = /^\.\*+$/, LS = (n2) => n2 !== "." && n2 !== ".." && n2.startsWith("."), AS = /^\*+$/, kS = (n2) => n2.length !== 0 && !n2.startsWith("."), $S = (n2) => n2.length !== 0 && n2 !== "." && n2 !== "..", US = /^\?+([^+@!?*[(]*)?$/, HS = ([n2, e = ""]) => {
    let t = cy([n2]);
    return e ? (e = e.toLowerCase(), (r) => t(r) && r.toLowerCase().endsWith(e)) : t;
  }, WS = ([n2, e = ""]) => {
    let t = uy([n2]);
    return e ? (e = e.toLowerCase(), (r) => t(r) && r.toLowerCase().endsWith(e)) : t;
  }, zS = ([n2, e = ""]) => {
    let t = uy([n2]);
    return e ? (r) => t(r) && r.endsWith(e) : t;
  }, KS = ([n2, e = ""]) => {
    let t = cy([n2]);
    return e ? (r) => t(r) && r.endsWith(e) : t;
  }, cy = ([n2]) => {
    let e = n2.length;
    return (t) => t.length === e && !t.startsWith(".");
  }, uy = ([n2]) => {
    let e = n2.length;
    return (t) => t.length === e && t !== "." && t !== "..";
  }, ly = typeof process == "object" && process ? typeof process.env == "object" && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix", sy = { win32: { sep: "\\" }, posix: { sep: "/" } };
  H.sep = ly === "win32" ? sy.win32.sep : sy.posix.sep;
  H.minimatch.sep = H.sep;
  H.GLOBSTAR = /* @__PURE__ */ Symbol("globstar **");
  H.minimatch.GLOBSTAR = H.GLOBSTAR;
  var BS = "[^/]", VS = BS + "*?", GS = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", XS = "(?:(?!(?:\\/|^)\\.).)*?", JS = (n2, e = {}) => (t) => (0, H.minimatch)(t, n2, e);
  H.filter = JS;
  H.minimatch.filter = H.filter;
  var Ut = (n2, e = {}) => Object.assign({}, n2, e), QS = (n2) => {
    if (!n2 || typeof n2 != "object" || !Object.keys(n2).length) return H.minimatch;
    let e = H.minimatch;
    return Object.assign((r, i, s = {}) => e(r, i, Ut(n2, s)), { Minimatch: class extends e.Minimatch {
      constructor(i, s = {}) {
        super(i, Ut(n2, s));
      }
      static defaults(i) {
        return e.defaults(Ut(n2, i)).Minimatch;
      }
    }, AST: class extends e.AST {
      constructor(i, s, o = {}) {
        super(i, s, Ut(n2, o));
      }
      static fromGlob(i, s = {}) {
        return e.AST.fromGlob(i, Ut(n2, s));
      }
    }, unescape: (r, i = {}) => e.unescape(r, Ut(n2, i)), escape: (r, i = {}) => e.escape(r, Ut(n2, i)), filter: (r, i = {}) => e.filter(r, Ut(n2, i)), defaults: (r) => e.defaults(Ut(n2, r)), makeRe: (r, i = {}) => e.makeRe(r, Ut(n2, i)), braceExpand: (r, i = {}) => e.braceExpand(r, Ut(n2, i)), match: (r, i, s = {}) => e.match(r, i, Ut(n2, s)), sep: e.sep, GLOBSTAR: H.GLOBSTAR });
  };
  H.defaults = QS;
  H.minimatch.defaults = H.defaults;
  var YS = (n2, e = {}) => ((0, Zo.assertValidPattern)(n2), e.nobrace || !/\{(?:(?!\{).)*\}/.test(n2) ? [n2] : (0, SS.expand)(n2, { max: e.braceExpandMax }));
  H.braceExpand = YS;
  H.minimatch.braceExpand = H.braceExpand;
  var ZS = (n2, e = {}) => new Br(n2, e).makeRe();
  H.makeRe = ZS;
  H.minimatch.makeRe = H.makeRe;
  var eP = (n2, e, t = {}) => {
    let r = new Br(e, t);
    return n2 = n2.filter((i) => r.match(i)), r.options.nonull && !n2.length && n2.push(e), n2;
  };
  H.match = eP;
  H.minimatch.match = H.match;
  var oy = /[?*]|[+@!]\(.*?\)|\[|\]/, tP = (n2) => n2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Br = class {
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
      (0, Zo.assertValidPattern)(e), t = t || {}, this.options = t, this.maxGlobstarRecursion = t.maxGlobstarRecursion ?? 200, this.pattern = e, this.platform = t.platform || ly, this.isWindows = this.platform === "win32";
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
          let c = s[0] === "" && s[1] === "" && (s[2] === "?" || !oy.test(s[2])) && !oy.test(s[3]), l = /^[a-z]:/i.test(s[0]);
          if (c) return [...s.slice(0, 4), ...s.slice(4).map((f) => this.parse(f))];
          if (l) return [s[0], ...s.slice(1).map((f) => this.parse(f))];
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
            let f = r.slice(0);
            f[i] = "**", e.push(f), i--;
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
        let a = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]), c = !a && e[0] === "" && e[1] === "" && e[2] === "?" && /^[a-z]:$/i.test(e[3]), l = typeof t[0] == "string" && /^[a-z]:$/i.test(t[0]), f = !l && t[0] === "" && t[1] === "" && t[2] === "?" && typeof t[3] == "string" && /^[a-z]:$/i.test(t[3]), h = c ? 3 : a ? 0 : void 0, p = f ? 3 : l ? 0 : void 0;
        if (typeof h == "number" && typeof p == "number") {
          let [g, _] = [e[h], t[p]];
          g.toLowerCase() === _.toLowerCase() && (t[p] = g, s = p, i = h);
        }
      }
      let { optimizationLevel: o = 1 } = this.options;
      return o >= 2 && (e = this.levelTwoFileOptimize(e)), t.includes(H.GLOBSTAR) ? this.#n(e, t, r, i, s) : this.#i(e, t, r, i, s);
    }
    #n(e, t, r, i, s) {
      let o = t.indexOf(H.GLOBSTAR, s), a = t.lastIndexOf(H.GLOBSTAR), [c, l, f] = r ? [t.slice(s, o), t.slice(o + 1), []] : [t.slice(s, o), t.slice(o + 1, a), t.slice(a + 1)];
      if (c.length) {
        let w = e.slice(i, i + c.length);
        if (!this.#i(w, c, r, 0, 0)) return false;
        i += c.length, s += c.length;
      }
      let h = 0;
      if (f.length) {
        if (f.length + i > e.length) return false;
        let w = e.length - f.length;
        if (this.#i(e, f, r, w, 0)) h = f.length;
        else {
          if (e[e.length - 1] !== "" || i + f.length === e.length || (w--, !this.#i(e, f, r, w, 0))) return false;
          h = f.length + 1;
        }
      }
      if (!l.length) {
        let w = !!h;
        for (let x = i; x < e.length - h; x++) {
          let j = String(e[x]);
          if (w = true, j === "." || j === ".." || !this.options.dot && j.startsWith(".")) return false;
        }
        return r || w;
      }
      let p = [[[], 0]], g = p[0], _ = 0, y = [0];
      for (let w of l) w === H.GLOBSTAR ? (y.push(_), g = [[], 0], p.push(g)) : (g[0].push(w), _++);
      let D = p.length - 1, T = e.length - h;
      for (let w of p) w[1] = T - (y[D--] + w[0].length);
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
      let [l, f] = c;
      for (; r <= f; ) {
        if (this.#i(e.slice(0, r + l.length), l, s, r, 0) && o < this.maxGlobstarRecursion) {
          let g = this.#r(e, t, r + l.length, i + 1, s, o + 1, a);
          if (g !== false) return g;
        }
        let p = e[r];
        if (p === "." || p === ".." || !this.options.dot && p.startsWith(".")) return false;
        r++;
      }
      return s || null;
    }
    #i(e, t, r, i, s) {
      let o, a, c, l;
      for (o = i, a = s, l = e.length, c = t.length; o < l && a < c; o++, a++) {
        this.debug("matchOne loop");
        let f = t[a], h = e[o];
        if (this.debug(t, f, h), f === false || f === H.GLOBSTAR) return false;
        let p;
        if (typeof f == "string" ? (p = h === f, this.debug("string match", f, h, p)) : (p = f.test(h), this.debug("pattern match", f, h, p)), !p) return false;
      }
      if (o === l && a === c) return true;
      if (o === l) return r;
      if (a === c) return o === l - 1 && e[o] === "";
      throw new Error("wtf?");
    }
    braceExpand() {
      return (0, H.braceExpand)(this.pattern, this.options);
    }
    parse(e) {
      (0, Zo.assertValidPattern)(e);
      let t = this.options;
      if (e === "**") return H.GLOBSTAR;
      if (e === "") return "";
      let r, i = null;
      (r = e.match(AS)) ? i = t.dot ? $S : kS : (r = e.match(OS)) ? i = (t.nocase ? t.dot ? MS : xS : t.dot ? qS : ES)(r[1]) : (r = e.match(US)) ? i = (t.nocase ? t.dot ? WS : HS : t.dot ? zS : KS)(r) : (r = e.match(IS)) ? i = t.dot ? jS : NS : (r = e.match(FS)) && (i = LS);
      let s = ay.AST.fromGlob(e, this.options).toMMPattern();
      return i && typeof s == "object" && Reflect.defineProperty(s, "test", { value: i }), s;
    }
    makeRe() {
      if (this.regexp || this.regexp === false) return this.regexp;
      let e = this.set;
      if (!e.length) return this.regexp = false, this.regexp;
      let t = this.options, r = t.noglobstar ? VS : t.dot ? GS : XS, i = new Set(t.nocase ? ["i"] : []), s = e.map((c) => {
        let l = c.map((h) => {
          if (h instanceof RegExp) for (let p of h.flags.split("")) i.add(p);
          return typeof h == "string" ? tP(h) : h === H.GLOBSTAR ? H.GLOBSTAR : h._src;
        });
        l.forEach((h, p) => {
          let g = l[p + 1], _ = l[p - 1];
          h !== H.GLOBSTAR || _ === H.GLOBSTAR || (_ === void 0 ? g !== void 0 && g !== H.GLOBSTAR ? l[p + 1] = "(?:\\/|" + r + "\\/)?" + g : l[p] = r : g === void 0 ? l[p - 1] = _ + "(?:\\/|\\/" + r + ")?" : g !== H.GLOBSTAR && (l[p - 1] = _ + "(?:\\/|\\/" + r + "\\/)" + g, l[p + 1] = H.GLOBSTAR));
        });
        let f = l.filter((h) => h !== H.GLOBSTAR);
        if (this.partial && f.length >= 1) {
          let h = [];
          for (let p = 1; p <= f.length; p++) h.push(f.slice(0, p).join("/"));
          return "(?:" + h.join("|") + ")";
        }
        return f.join("/");
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
      return H.minimatch.defaults(e).Minimatch;
    }
  };
  H.Minimatch = Br;
  var nP = md();
  Object.defineProperty(H, "AST", { enumerable: true, get: function() {
    return nP.AST;
  } });
  var rP = _d();
  Object.defineProperty(H, "escape", { enumerable: true, get: function() {
    return rP.escape;
  } });
  var iP = Vo();
  Object.defineProperty(H, "unescape", { enumerable: true, get: function() {
    return iP.unescape;
  } });
  H.minimatch.AST = ay.AST;
  H.minimatch.Minimatch = Br;
  H.minimatch.escape = PS.escape;
  H.minimatch.unescape = RS.unescape;
});
var vd = R((Yn) => {
  "use strict";
  var sP = Yn && Yn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), oP = Yn && Yn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), aP = Yn && Yn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && sP(t, e, r[i]);
      return oP(t, e), t;
    };
  })();
  Object.defineProperty(Yn, "__esModule", { value: true });
  Yn.matchGlobPattern = lP;
  var cP = aP(yd()), uP = require("vscode");
  function lP(n2, e) {
    let t;
    if (typeof n2 == "string") t = n2.replace(/\\/g, "/");
    else try {
      let i = uP.Uri.parse(typeof n2.baseUri == "string" ? n2.baseUri : n2.baseUri.uri);
      t = i.with({ path: i.path + "/" + n2.pattern }).fsPath.replace(/\\/g, "/");
    } catch {
      return false;
    }
    let r = new cP.Minimatch(t, { noext: true });
    return r.makeRe() ? r.match(e.fsPath) : false;
  }
});
var Pd = R((qr) => {
  "use strict";
  Object.defineProperty(qr, "__esModule", { value: true });
  qr.DiagnosticFeature = qr.DiagnosticPullMode = qr.vsdiag = void 0;
  var Se = require("vscode"), Pe = G(), dP = De(), fP = vd(), Ps = ie();
  function ea(n2, e) {
    return n2[e] === void 0 && (n2[e] = {}), n2[e];
  }
  var Et;
  (function(n2) {
    let e;
    (function(t) {
      t.full = "full", t.unChanged = "unChanged";
    })(e = n2.DocumentDiagnosticReportKind || (n2.DocumentDiagnosticReportKind = {}));
  })(Et || (qr.vsdiag = Et = {}));
  var Rs;
  (function(n2) {
    n2.onType = "onType", n2.onSave = "onSave", n2.onFocus = "onFocus";
  })(Rs || (qr.DiagnosticPullMode = Rs = {}));
  var Qe;
  (function(n2) {
    n2.active = "open", n2.reschedule = "reschedule", n2.outDated = "drop";
  })(Qe || (Qe = {}));
  var We;
  (function(n2) {
    n2[n2.document = 1] = "document", n2[n2.workspace = 2] = "workspace";
  })(We || (We = {}));
  var ln;
  (function(n2) {
    function e(t) {
      return t instanceof Se.Uri ? t.toString() : t.uri.toString();
    }
    n2.asKey = e;
  })(ln || (ln = {}));
  var bd = class {
    documentPullStates;
    workspacePullStates;
    constructor() {
      this.documentPullStates = /* @__PURE__ */ new Map(), this.workspacePullStates = /* @__PURE__ */ new Map();
    }
    track(e, t, r) {
      let i = e === We.document ? this.documentPullStates : this.workspacePullStates, [s, o, a] = t instanceof Se.Uri ? [t.toString(), t, r] : [t.uri.toString(), t.uri, t.version], c = i.get(s);
      return c === void 0 && (c = { document: o, pulledVersion: a, resultId: void 0 }, i.set(s, c)), c;
    }
    update(e, t, r, i) {
      let s = e === We.document ? this.documentPullStates : this.workspacePullStates, [o, a, c, l] = t instanceof Se.Uri ? [t.toString(), t, r, i] : [t.uri.toString(), t.uri, t.version, r], f = s.get(o);
      f === void 0 ? (f = { document: a, pulledVersion: c, resultId: l }, s.set(o, f)) : (f.pulledVersion = c, f.resultId = l);
    }
    unTrack(e, t) {
      let r = ln.asKey(t);
      (e === We.document ? this.documentPullStates : this.workspacePullStates).delete(r);
    }
    tracks(e, t) {
      let r = ln.asKey(t);
      return (e === We.document ? this.documentPullStates : this.workspacePullStates).has(r);
    }
    tracksSameVersion(e, t) {
      let r = t.uri.toString(), s = (e === We.document ? this.documentPullStates : this.workspacePullStates).get(r);
      return s !== void 0 && s.pulledVersion === t.version;
    }
    getResultId(e, t) {
      let r = ln.asKey(t);
      return (e === We.document ? this.documentPullStates : this.workspacePullStates).get(r)?.resultId;
    }
    getAllResultIds() {
      let e = [];
      for (let [t, r] of this.workspacePullStates) this.documentPullStates.has(t) && (r = this.documentPullStates.get(t)), r.resultId !== void 0 && e.push({ uri: t, value: r.resultId });
      return e;
    }
  }, Cd = class {
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
      this.client = e, this.visibleDocuments = t, this.options = r, this.isDisposed = false, this.onDidChangeDiagnosticsEmitter = new Se.EventEmitter(), this.provider = this.createProvider(), this.diagnostics = this.createDiagnosticCollection(), this.openRequests = /* @__PURE__ */ new Map(), this.pendingDocumentForgets = /* @__PURE__ */ new Map(), this.documentStates = new bd(), this.workspaceErrorCounter = 0;
    }
    createDiagnosticCollection() {
      return this.client.clientOptions.diagnosticCollectionProvider === void 0 ? Se.languages.createDiagnosticCollection(this.options.identifier) : this.client.clientOptions.diagnosticCollectionProvider.create(this.options.identifier, Ps.DiagnosticCollectionSource.pull);
    }
    knows(e, t) {
      let r = t instanceof Se.Uri ? t : t.uri;
      return this.documentStates.tracks(e, t) || this.openRequests.has(r.toString());
    }
    knowsSameVersion(e, t) {
      let r = this.openRequests.get(t.uri.toString());
      return r === void 0 ? this.documentStates.tracksSameVersion(e, t) : r.state === Qe.reschedule ? true : r.state === Qe.outDated ? false : r.version === t.version;
    }
    forget(e, t) {
      this.documentStates.unTrack(e, t);
    }
    cancelPendingForget(e) {
      this.pendingDocumentForgets.delete(ln.asKey(e));
    }
    pull(e, t) {
      if (this.isDisposed) return;
      let r = e instanceof Se.Uri ? e : e.uri;
      this.pullAsync(e).then(() => {
        t && t();
      }, (i) => {
        this.client.error(`Document pull failed for text document ${r.toString()}`, i, false);
      });
    }
    async pullAsync(e, t) {
      if (this.isDisposed) return;
      let r = e instanceof Se.Uri, i = r ? e : e.uri, s = i.toString();
      t = r ? t : e.version;
      let o = this.openRequests.get(s), a = r ? this.documentStates.track(We.document, e, t) : this.documentStates.track(We.document, e);
      if (o === void 0) {
        let c = new Se.CancellationTokenSource();
        this.openRequests.set(s, { state: Qe.active, document: e, version: t, tokenSource: c });
        let l, f;
        try {
          l = await this.provider.provideDiagnostics(e, a.resultId, c.token) ?? { kind: Et.DocumentDiagnosticReportKind.full, items: [] };
        } catch (h) {
          if (h instanceof Ps.LSPCancellationError && Pe.DiagnosticServerCancellationData.is(h.data) && h.data.retriggerRequest === false && (f = { state: Qe.outDated, document: e }), f === void 0 && h instanceof Se.CancellationError) f = { state: Qe.reschedule, document: e };
          else throw h;
        }
        if (f = f ?? this.openRequests.get(s), f === void 0) {
          this.client.error(`Lost request state in diagnostic pull model. Clearing diagnostics for ${s}`), this.diagnostics.delete(i);
          return;
        }
        if (this.openRequests.delete(s), !this.visibleDocuments.isVisible(e)) {
          this.documentStates.unTrack(We.document, e);
          return;
        }
        if (f.state === Qe.outDated) return;
        l !== void 0 && (l.kind === Et.DocumentDiagnosticReportKind.full && this.diagnostics.set(i, l.items), a.pulledVersion = t, a.resultId = l.resultId), f.state === Qe.reschedule && this.pull(e);
      } else o.state === Qe.active ? (o.tokenSource.cancel(), this.openRequests.set(s, { state: Qe.reschedule, document: o.document })) : o.state === Qe.outDated && this.openRequests.set(s, { state: Qe.reschedule, document: o.document });
    }
    forgetDocument(e) {
      if (this.isDisposed) return;
      let t = e instanceof Se.Uri ? e : e.uri, r = t.toString(), i = this.openRequests.get(r);
      if (this.options.workspaceDiagnostics && t.scheme !== "untitled") {
        if (i !== void 0) this.openRequests.set(r, { state: Qe.reschedule, document: e });
        else {
          let s = /* @__PURE__ */ Symbol();
          this.pendingDocumentForgets.set(r, s), this.pull(e, () => {
            this.pendingDocumentForgets.get(r) === s && (this.pendingDocumentForgets.delete(r), this.forget(We.document, e));
          });
        }
        this.forget(We.workspace, e);
      } else i !== void 0 && (i.state === Qe.active && i.tokenSource.cancel(), this.openRequests.set(r, { state: Qe.outDated, document: e })), this.diagnostics.delete(t), this.forget(We.document, e);
    }
    pullWorkspace() {
      this.isDisposed || this.pullWorkspaceAsync().then(() => {
        this.workspaceTimeout = (0, Pe.RAL)().timer.setTimeout(() => {
          this.pullWorkspace();
        }, 2e3);
      }, (e) => {
        !(e instanceof Ps.LSPCancellationError) && !Pe.DiagnosticServerCancellationData.is(e.data) && (this.client.error("Workspace diagnostic pull failed.", e, false), this.workspaceErrorCounter++), this.workspaceErrorCounter <= 5 && (this.workspaceTimeout = (0, Pe.RAL)().timer.setTimeout(() => {
          this.pullWorkspace();
        }, 2e3));
      });
    }
    async pullWorkspaceAsync() {
      if (!this.provider.provideWorkspaceDiagnostics || this.isDisposed) return;
      this.workspaceCancellation !== void 0 && (this.workspaceCancellation.cancel(), this.workspaceCancellation = void 0), this.workspaceCancellation = new Se.CancellationTokenSource();
      let e = this.documentStates.getAllResultIds().map((t) => ({ uri: this.client.protocol2CodeConverter.asUri(t.uri), value: t.value }));
      await this.provider.provideWorkspaceDiagnostics(e, this.workspaceCancellation.token, (t) => {
        if (!(!t || this.isDisposed)) for (let r of t.items) r.kind === Et.DocumentDiagnosticReportKind.full && (this.documentStates.tracks(We.document, r.uri) || this.diagnostics.set(r.uri, r.items)), this.documentStates.update(We.workspace, r.uri, r.version ?? void 0, r.resultId);
      });
    }
    createProvider() {
      let e = { onDidChangeDiagnostics: this.onDidChangeDiagnosticsEmitter.event, provideDiagnostics: (t, r, i) => {
        let s = (a, c, l) => {
          let f = { identifier: this.options.identifier, textDocument: { uri: this.client.code2ProtocolConverter.asUri(a instanceof Se.Uri ? a : a.uri) }, previousResultId: c };
          return this.isDisposed === true || !this.client.isRunning() ? { kind: Et.DocumentDiagnosticReportKind.full, items: [] } : this.client.sendRequest(Pe.DocumentDiagnosticRequest.type, f, l).then(async (h) => {
            if (this.isDisposed) return { kind: Et.DocumentDiagnosticReportKind.full, items: [] };
            if (l.isCancellationRequested) throw new Se.CancellationError();
            return h == null ? { kind: Et.DocumentDiagnosticReportKind.full, items: [] } : h.kind === Pe.DocumentDiagnosticReportKind.Full ? { kind: Et.DocumentDiagnosticReportKind.full, resultId: h.resultId, items: await this.client.protocol2CodeConverter.asDiagnostics(h.items, l) } : { kind: Et.DocumentDiagnosticReportKind.unChanged, resultId: h.resultId };
          }, (h) => this.client.handleFailedRequest(Pe.DocumentDiagnosticRequest.type, l, h, { kind: Et.DocumentDiagnosticReportKind.full, items: [] }, true, true));
        }, o = this.client.middleware;
        return o.provideDiagnostics ? o.provideDiagnostics(t, r, i, s) : s(t, r, i);
      } };
      return this.options.workspaceDiagnostics && (e.provideWorkspaceDiagnostics = (t, r, i) => {
        let s = async (l) => l.kind === Pe.DocumentDiagnosticReportKind.Full ? { kind: Et.DocumentDiagnosticReportKind.full, uri: this.client.protocol2CodeConverter.asUri(l.uri), resultId: l.resultId, version: l.version, items: await this.client.protocol2CodeConverter.asDiagnostics(l.items, r) } : { kind: Et.DocumentDiagnosticReportKind.unChanged, uri: this.client.protocol2CodeConverter.asUri(l.uri), resultId: l.resultId, version: l.version }, o = (l) => {
          let f = [];
          for (let h of l) f.push({ uri: this.client.code2ProtocolConverter.asUri(h.uri), value: h.value });
          return f;
        }, a = (l, f, h) => {
          let p = (0, dP.generateUuid)(), g = this.client.onProgress(Pe.WorkspaceDiagnosticRequest.partialResult, p, async (y) => {
            if (y == null) {
              h(null);
              return;
            }
            let D = { items: [] };
            for (let T of y.items) try {
              D.items.push(await s(T));
            } catch (w) {
              this.client.error("Converting workspace diagnostics failed.", w);
            }
            h(D);
          }), _ = { identifier: this.options.identifier, previousResultIds: o(l), partialResultToken: p };
          return this.isDisposed === true || !this.client.isRunning() ? { items: [] } : this.client.sendRequest(Pe.WorkspaceDiagnosticRequest.type, _, f).then(async (y) => {
            if (f.isCancellationRequested) return { items: [] };
            let D = { items: [] };
            for (let T of y.items) D.items.push(await s(T));
            return g.dispose(), h(D), { items: [] };
          }, (y) => (g.dispose(), this.client.handleFailedRequest(Pe.DocumentDiagnosticRequest.type, f, y, { items: [] })));
        }, c = this.client.middleware;
        return c.provideWorkspaceDiagnostics ? c.provideWorkspaceDiagnostics(t, r, i, a) : a(t, r, i);
      }), e;
    }
    dispose() {
      this.isDisposed = true, this.workspaceCancellation?.cancel(), this.workspaceTimeout?.dispose();
      for (let [e, t] of this.openRequests) t.state === Qe.active && t.tokenSource.cancel(), this.openRequests.set(e, { state: Qe.outDated, document: t.document });
      this.client.clientOptions.diagnosticCollectionProvider !== void 0 ? this.client.clientOptions.diagnosticCollectionProvider.dispose(this.diagnostics, Ps.DiagnosticCollectionSource.pull) : this.diagnostics.dispose();
    }
  }, wd = class {
    client;
    diagnosticRequestor;
    lastDocumentToPull;
    documents;
    timeoutHandle;
    isDisposed;
    constructor(e, t) {
      this.client = e, this.diagnosticRequestor = t, this.documents = new Pe.LinkedMap(), this.isDisposed = false;
    }
    add(e) {
      if (this.isDisposed === true) return;
      let t = ln.asKey(e);
      this.documents.has(t) || (this.documents.set(t, e, Pe.Touch.Last), this.lastDocumentToPull = e);
    }
    remove(e) {
      let t = ln.asKey(e);
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
        this.lastDocumentToPull !== void 0 && this.timeoutHandle === void 0 && (this.timeoutHandle = (0, Pe.RAL)().timer.setTimeout(() => {
          let e = this.documents.first;
          if (e === void 0) return;
          let t = ln.asKey(e);
          this.diagnosticRequestor.pullAsync(e).catch((r) => {
            this.client.error(`Document pull failed for text document ${t}`, r, false);
          }).finally(() => {
            this.timeoutHandle = void 0, this.documents.set(t, e, Pe.Touch.Last), t !== this.lastDocumentToPullKey() && this.runLoop();
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
      return this.lastDocumentToPull !== void 0 ? ln.asKey(this.lastDocumentToPull) : void 0;
    }
  }, Dd = class {
    disposable;
    diagnosticRequestor;
    activeTextDocument;
    backgroundScheduler;
    constructor(e, t, r) {
      let i = Object.assign({ onChange: false, onSave: false, onFocus: false }, e.clientOptions.diagnosticPullOptions), s = e.protocol2CodeConverter.asDocumentSelector(r.documentSelector), o = [], a = (w, x) => !(typeof w == "string" || w.language !== void 0 && w.language !== "*" || w.scheme !== void 0 && w.scheme !== "*" && w.scheme !== x.scheme || w.pattern !== void 0 && !(0, fP.matchGlobPattern)(w.pattern, x)), c = (w) => {
        let x = r.documentSelector;
        if (i.match !== void 0) return i.match(x, w);
        for (let j of x) if (Pe.TextDocumentFilter.is(j) && a(j, w)) return true;
        return false;
      }, l = (w) => w instanceof Se.Uri ? c(w) : Se.languages.match(s, w) > 0 && t.isVisible(w), f = (w) => Se.languages.match(s, w.document) > 0 && t.isVisible(w.notebook.uri), h = (w) => w instanceof Se.Uri ? this.activeTextDocument?.uri.toString() === w.toString() : this.activeTextDocument === w;
      this.diagnosticRequestor = new Cd(e, t, r), this.backgroundScheduler = new wd(e, this.diagnosticRequestor);
      let p = (w) => {
        !l(w) || !r.interFileDependencies || h(w) || i.onChange === false || this.backgroundScheduler.add(w);
      }, g = (w, x) => (i.filter === void 0 || !i.filter(w, x)) && this.diagnosticRequestor.knows(We.document, w);
      this.activeTextDocument = Se.window.activeTextEditor?.document, o.push(Se.window.onDidChangeActiveTextEditor((w) => {
        let x = this.activeTextDocument;
        this.activeTextDocument = w?.document, x !== void 0 && p(x), this.activeTextDocument !== void 0 && (this.backgroundScheduler.remove(this.activeTextDocument), i.onFocus === true && l(this.activeTextDocument) && g(this.activeTextDocument, Rs.onFocus) && this.diagnosticRequestor.pull(this.activeTextDocument));
      }));
      let _ = e.getFeature(Pe.DidOpenTextDocumentNotification.method);
      o.push(_.onNotificationSent((w) => {
        let x = w.textDocument;
        if (l(x)) {
          if (this.diagnosticRequestor.cancelPendingForget(x), this.diagnosticRequestor.knowsSameVersion(We.document, x)) return;
          this.diagnosticRequestor.pull(x, () => {
            p(x);
          });
        }
      }));
      let y = e.getFeature(Pe.NotebookDocumentSyncRegistrationType.method);
      o.push(y.onOpenNotificationSent((w) => {
        for (let x of w.getCells()) f(x) && (this.diagnosticRequestor.cancelPendingForget(x.document), this.diagnosticRequestor.pull(x.document, () => {
          p(x.document);
        }));
      })), o.push(t.onOpen((w) => {
        for (let x of w) {
          if (this.diagnosticRequestor.knows(We.document, x)) continue;
          let j = x.toString(), I;
          for (let Y of Se.workspace.textDocuments) if (j === Y.uri.toString()) {
            I = Y;
            break;
          }
          I !== void 0 && l(I) && this.diagnosticRequestor.pull(I, () => {
            p(I);
          });
        }
      }));
      let D = /* @__PURE__ */ new Set();
      for (let w of Se.workspace.textDocuments) l(w) && (this.diagnosticRequestor.pull(w, () => {
        p(w);
      }), D.add(w.uri.toString()));
      for (let w of Se.workspace.notebookDocuments) for (let x of w.getCells()) f(x) && (this.diagnosticRequestor.pull(x.document, () => {
        p(x.document);
      }), D.add(x.document.uri.toString()));
      if (i.onTabs === true) for (let w of t.getResources()) !D.has(w.toString()) && l(w) && this.diagnosticRequestor.pull(w, () => {
        p(w);
      });
      if (i.onChange === true) {
        let w = e.getFeature(Pe.DidChangeTextDocumentNotification.method);
        o.push(w.onNotificationSent(async (x) => {
          let j = x.textDocument;
          g(j, Rs.onType) && this.diagnosticRequestor.pull(j, () => {
            this.backgroundScheduler.trigger();
          });
        })), o.push(y.onChangeNotificationSent(async (x) => {
          let I = (x.cells?.textContent || []).map((Oe) => x.notebook.getCells().find((En) => En.document.uri.toString() === Oe.document.uri.toString()));
          for (let Oe of I) Oe && f(Oe) && this.diagnosticRequestor.pull(Oe.document, () => {
            this.backgroundScheduler.trigger();
          });
          let Y = x.cells?.structure?.didClose || [];
          for (let Oe of Y) this.diagnosticRequestor.forgetDocument(Oe.document);
          let re = x.cells?.structure?.didOpen || [];
          for (let Oe of re) f(Oe) && this.diagnosticRequestor.pull(Oe.document, () => {
            this.backgroundScheduler.trigger();
          });
        }));
      }
      if (i.onSave === true) {
        let w = e.getFeature(Pe.DidSaveTextDocumentNotification.method);
        o.push(w.onNotificationSent((x) => {
          let j = x.textDocument;
          g(j, Rs.onSave) && this.diagnosticRequestor.pull(x.textDocument);
        })), o.push(y.onSaveNotificationSent((x) => {
          for (let j of x.getCells()) f(j) && this.diagnosticRequestor.pull(j.document);
        }));
      }
      let T = e.getFeature(Pe.DidCloseTextDocumentNotification.method);
      o.push(T.onAboutToSendNotification((w) => {
        this.cleanUpDocument(w.textDocument);
      })), o.push(y.onCloseNotificationSent((w) => {
        for (let x of w.getCells()) this.cleanUpDocument(x.document);
      })), o.push(t.onClose((w) => {
        for (let x of w) this.cleanUpDocument(x);
      })), this.diagnosticRequestor.onDidChangeDiagnosticsEmitter.event(() => {
        for (let w of Se.workspace.textDocuments) l(w) && this.diagnosticRequestor.pull(w);
      }), r.workspaceDiagnostics === true && r.identifier !== "da348dc5-c30a-4515-9d98-31ff3be38d14" && this.diagnosticRequestor.pullWorkspace(), this.disposable = Se.Disposable.from(...o, this.backgroundScheduler, this.diagnosticRequestor);
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
      this.backgroundScheduler.remove(e), this.diagnosticRequestor.knows(We.document, e) && this.diagnosticRequestor.forgetDocument(e);
    }
  }, Sd = class extends Ps.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Pe.DocumentDiagnosticRequest.type);
    }
    fillClientCapabilities(e) {
      let t = ea(ea(e, "textDocument"), "diagnostic");
      t.relatedInformation = true, t.tagSupport = { valueSet: [Pe.DiagnosticTag.Unnecessary, Pe.DiagnosticTag.Deprecated] }, t.codeDescriptionSupport = true, t.dataSupport = true, t.dynamicRegistration = true, t.relatedDocumentSupport = false, t.markupMessageSupport = false, ea(ea(e, "workspace"), "diagnostics").refreshSupport = true;
    }
    initialize(e, t) {
      this._client.onRequest(Pe.DiagnosticRefreshRequest.type, async () => {
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
      let t = new Dd(this._client, this._client.visibleDocuments, e);
      return [t.disposable, t];
    }
  };
  qr.DiagnosticFeature = Sd;
});
var hy = R((dn) => {
  "use strict";
  var hP = dn && dn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), pP = dn && dn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), ia = dn && dn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && hP(t, e, r[i]);
      return pP(t, e), t;
    };
  })();
  Object.defineProperty(dn, "__esModule", { value: true });
  dn.NotebookDocumentSyncFeature = void 0;
  var Te = ia(require("vscode")), Zn = ia(G()), gP = ia(De()), dy = ia(At()), mP = vd();
  function fy(n2, e) {
    return n2[e] === void 0 && (n2[e] = {}), n2[e];
  }
  var ji;
  (function(n2) {
    let e;
    (function(t) {
      function r(p, g) {
        return { version: p.version, uri: g.asUri(p.uri) };
      }
      t.asVersionedNotebookDocumentIdentifier = r;
      function i(p, g, _) {
        let y = Zn.NotebookDocument.create(_.asUri(p.uri), p.notebookType, p.version, s(g, _));
        return Object.keys(p.metadata).length > 0 && (y.metadata = o(p.metadata)), y;
      }
      t.asNotebookDocument = i;
      function s(p, g) {
        return p.map((_) => a(_, g));
      }
      t.asNotebookCells = s;
      function o(p) {
        return l(/* @__PURE__ */ new Set(), p);
      }
      t.asMetadata = o;
      function a(p, g) {
        let _ = Zn.NotebookCell.create(c(p.kind), g.asUri(p.document.uri));
        return Object.keys(p.metadata).length > 0 && (_.metadata = o(p.metadata)), p.executionSummary !== void 0 && dy.number(p.executionSummary.executionOrder) && dy.boolean(p.executionSummary.success) && (_.executionSummary = { executionOrder: p.executionSummary.executionOrder, success: p.executionSummary.success }), _;
      }
      t.asNotebookCell = a;
      function c(p) {
        switch (p) {
          case Te.NotebookCellKind.Markup:
            return Zn.NotebookCellKind.Markup;
          case Te.NotebookCellKind.Code:
            return Zn.NotebookCellKind.Code;
        }
      }
      function l(p, g) {
        if (p.has(g)) throw new Error("Can't deep copy cyclic structures.");
        if (Array.isArray(g)) {
          let _ = [];
          for (let y of g) if (y !== null && typeof y == "object" || Array.isArray(y)) _.push(l(p, y));
          else {
            if (y instanceof RegExp) throw new Error("Can't transfer regular expressions to the server");
            _.push(y);
          }
          return _;
        } else {
          let _ = Object.keys(g), y = /* @__PURE__ */ Object.create(null);
          for (let D of _) {
            let T = g[D];
            if (T !== null && typeof T == "object" || Array.isArray(T)) y[D] = l(p, T);
            else {
              if (T instanceof RegExp) throw new Error("Can't transfer regular expressions to the server");
              y[D] = T;
            }
          }
          return y;
        }
      }
      function f(p, g) {
        let _ = g.asChangeTextDocumentParams(p, p.document.uri, p.document.version);
        return { document: _.textDocument, changes: _.contentChanges };
      }
      t.asTextContentChange = f;
      function h(p, g) {
        let _ = /* @__PURE__ */ Object.create(null);
        if (p.metadata && (_.metadata = n2.c2p.asMetadata(p.metadata)), p.cells !== void 0) {
          let y = /* @__PURE__ */ Object.create(null), D = p.cells;
          D.structure && (y.structure = { array: { start: D.structure.array.start, deleteCount: D.structure.array.deleteCount, cells: D.structure.array.cells !== void 0 ? D.structure.array.cells.map((T) => n2.c2p.asNotebookCell(T, g)) : void 0 }, didOpen: D.structure.didOpen !== void 0 ? D.structure.didOpen.map((T) => g.asOpenTextDocumentParams(T.document).textDocument) : void 0, didClose: D.structure.didClose !== void 0 ? D.structure.didClose.map((T) => g.asCloseTextDocumentParams(T.document).textDocument) : void 0 }), D.data !== void 0 && (y.data = D.data.map((T) => n2.c2p.asNotebookCell(T, g))), D.textContent !== void 0 && (y.textContent = D.textContent.map((T) => n2.c2p.asTextContentChange(T, g))), Object.keys(y).length > 0 && (_.cells = y);
        }
        return _;
      }
      t.asNotebookDocumentChangeEvent = h;
    })(e = n2.c2p || (n2.c2p = {}));
  })(ji || (ji = {}));
  var Rd;
  (function(n2) {
    function e(a, c, l) {
      let f = a.length, h = c.length, p = 0;
      for (; p < h && p < f && t(a[p], c[p], l); ) p++;
      if (p < h && p < f) {
        let g = f - 1, _ = h - 1;
        for (; g >= 0 && _ >= 0 && t(a[g], c[_], l); ) g--, _--;
        let y = g + 1 - p, D = p === _ + 1 ? void 0 : c.slice(p, _ + 1);
        return D !== void 0 ? { start: p, deleteCount: y, cells: D } : { start: p, deleteCount: y };
      } else return p < h ? { start: p, deleteCount: 0, cells: c.slice(p) } : p < f ? { start: p, deleteCount: f - p } : void 0;
    }
    n2.computeDiff = e;
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
      let l = Array.isArray(a), f = Array.isArray(c);
      if (l !== f) return false;
      if (l && f) {
        if (a.length !== c.length) return false;
        for (let h = 0; h < a.length; h++) if (!s(a[h], c[h])) return false;
      }
      if (o(a) && o(c)) {
        let h = Object.keys(a), p = Object.keys(c);
        if (h.length !== p.length || (h.sort(), p.sort(), !s(h, p))) return false;
        for (let g = 0; g < h.length; g++) {
          let _ = h[g];
          if (!s(a[_], c[_])) return false;
        }
        return true;
      }
      return false;
    }
    function o(a) {
      return a !== null && typeof a == "object";
    }
    n2.isObjectLiteral = o;
  })(Rd || (Rd = {}));
  var ta;
  (function(n2) {
    function e(t, r) {
      if (typeof t == "string") return t === "*" || r.notebookType === t;
      if (t.notebookType !== void 0 && t.notebookType !== "*" && r.notebookType !== t.notebookType) return false;
      let i = r.uri;
      return !(t.scheme !== void 0 && t.scheme !== "*" && i.scheme !== t.scheme || t.pattern !== void 0 && !(0, mP.matchGlobPattern)(t.pattern, i));
    }
    n2.matchNotebook = e;
  })(ta || (ta = {}));
  var na;
  (function(n2) {
    function e(r) {
      let i = r.notebookSelector, s = [];
      for (let o of i) {
        let a = (typeof o.notebook == "string" ? o.notebook : o.notebook?.notebookType) ?? "*", c = typeof o.notebook == "string" ? void 0 : o.notebook?.scheme, l = typeof o.notebook == "string" ? void 0 : o.notebook?.pattern;
        if (o.cells !== void 0) for (let f of o.cells) s.push(t(a, c, l, f.language));
        else s.push(t(a, c, l, void 0));
      }
      return s;
    }
    n2.asDocumentSelector = e;
    function t(r, i, s, o) {
      return i === void 0 && s === void 0 ? { notebook: r, language: o } : { notebook: { notebookType: r, scheme: i, pattern: s }, language: o };
    }
  })(na || (na = {}));
  var ra;
  (function(n2) {
    function e(t) {
      return { cells: t, uris: new Set(t.map((r) => r.document.uri.toString())) };
    }
    n2.create = e;
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
      this.client = e, this.options = t, this.notebookSyncInfo = /* @__PURE__ */ new Map(), this.notebookDidOpen = /* @__PURE__ */ new Set(), this.disposables = [], this.selector = e.protocol2CodeConverter.asDocumentSelector(na.asDocumentSelector(t)), this.onChangeNotificationSent = r, this.onOpenNotificationSent = i, this.onCloseNotificationSent = s, this.onSaveNotificationSent = o, Te.workspace.onDidOpenNotebookDocument((a) => {
        this.notebookDidOpen.add(a.uri.toString()), this.didOpen(a);
      }, void 0, this.disposables);
      for (let a of Te.workspace.notebookDocuments) this.notebookDidOpen.add(a.uri.toString()), this.didOpen(a);
      Te.workspace.onDidChangeNotebookDocument((a) => this.didChangeNotebookDocument(a), void 0, this.disposables), this.options.save === true && Te.workspace.onDidSaveNotebookDocument((a) => this.didSave(a), void 0, this.disposables), Te.workspace.onDidCloseNotebookDocument((a) => {
        this.didClose(a), this.notebookDidOpen.delete(a.uri.toString());
      }, void 0, this.disposables);
    }
    getState() {
      for (let e of Te.workspace.notebookDocuments) if (this.getMatchingCellsConsideringSyncInfo(e) !== void 0) return { kind: "document", id: "$internal", registrations: true, matches: true };
      return { kind: "document", id: "$internal", registrations: true, matches: false };
    }
    get mode() {
      return "notebook";
    }
    handles(e) {
      if (Te.languages.match(this.selector, e) > 0) return true;
      let t = e.uri.toString();
      for (let r of this.notebookSyncInfo.values()) if (r.uris.has(t)) return true;
      return false;
    }
    didOpenNotebookCellTextDocument(e, t) {
      if (Te.languages.match(this.selector, t.document) === 0 || !this.notebookDidOpen.has(e.uri.toString())) return;
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
      if (Te.languages.match(this.selector, r.document) === 0) return;
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
          await this.client.sendNotification(Zn.DidOpenNotebookDocumentNotification.type, { notebookDocument: ji.c2p.asNotebookDocument(s, o, this.client.code2ProtocolConverter), cellTextDocuments: a }), this.onOpenNotificationSent.fire(s);
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
          await this.client.sendNotification(Zn.DidChangeNotebookDocumentNotification.type, { notebookDocument: ji.c2p.asVersionedNotebookDocumentIdentifier(s.notebook, this.client.code2ProtocolConverter), change: ji.c2p.asNotebookDocumentChangeEvent(s, this.client.code2ProtocolConverter) }), this.onChangeNotificationSent.fire(s);
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
          await this.client.sendNotification(Zn.DidSaveNotebookDocumentNotification.type, { notebookDocument: { uri: this.client.code2ProtocolConverter.asUri(i.uri) } }), this.onSaveNotificationSent.fire(i);
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
          await this.client.sendNotification(Zn.DidCloseNotebookDocumentNotification.type, { notebookDocument: { uri: this.client.code2ProtocolConverter.asUri(s.uri) }, cellTextDocuments: o.map((a) => this.client.code2ProtocolConverter.asTextDocumentIdentifier(a.document)) }), this.onCloseNotificationSent.fire(s);
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
      t?.metadata !== void 0 && (s.metadata = ji.c2p.asMetadata(t.metadata));
      let o;
      if (t?.cellChanges !== void 0 && t.cellChanges.length > 0) {
        let a = [];
        o = new Set(i.map((c) => c.document.uri.toString()));
        for (let c of t.cellChanges) o.has(c.cell.document.uri.toString()) && (c.executionSummary !== void 0 || c.metadata !== void 0) && a.push(c.cell);
        a.length > 0 && (s.cells = s.cells ?? {}, s.cells.data = a);
      }
      if ((t?.contentChanges !== void 0 && t.contentChanges.length > 0 || t === void 0) && r !== void 0 && i !== void 0) {
        let a = r.cells, c = i, l = Rd.computeDiff(a, c, false), f, h;
        if (l !== void 0) {
          f = l.cells === void 0 ? /* @__PURE__ */ new Map() : new Map(l.cells.map((_) => [_.document.uri.toString(), _])), h = l.deleteCount === 0 ? /* @__PURE__ */ new Map() : new Map(a.slice(l.start, l.start + l.deleteCount).map((_) => [_.document.uri.toString(), _]));
          for (let _ of Array.from(h.keys())) f.has(_) && (h.delete(_), f.delete(_));
          s.cells = s.cells ?? {};
          let p = [], g = [];
          if (f.size > 0 || h.size > 0) {
            for (let _ of f.values()) p.push(_);
            for (let _ of h.values()) g.push(_);
          }
          s.cells.structure = { array: l, didOpen: p, didClose: g };
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
        let c = r.cellChanges.map((f) => f.cell), l = this.filterCells(e, c, i.cells);
        if (l.length !== c.length) {
          s = new Set(t.uris);
          for (let f of c) s.delete(f.document.uri.toString());
          for (let f of l) s.add(f.document.uri.toString());
        }
      }
      if (r.contentChanges !== void 0 && r.contentChanges.length > 0) {
        s === void 0 && (s = new Set(t.uris));
        for (let c of r.contentChanges) {
          for (let f of c.removedCells) s.delete(f.document.uri.toString());
          let l = this.filterCells(e, new Array(...c.addedCells), i.cells);
          for (let f of l) s.add(f.document.uri.toString());
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
  }, Td = class n2 {
    static CellScheme = "vscode-notebook-cell";
    client;
    registrations;
    dedicatedChannel;
    _onChangeNotificationSent;
    _onOpenNotificationSent;
    _onCloseNotificationSent;
    _onSaveNotificationSent;
    constructor(e) {
      this.client = e, this.registrations = /* @__PURE__ */ new Map(), this.registrationType = Zn.NotebookDocumentSyncRegistrationType.type, this._onChangeNotificationSent = new Te.EventEmitter(), this._onOpenNotificationSent = new Te.EventEmitter(), this._onCloseNotificationSent = new Te.EventEmitter(), this._onSaveNotificationSent = new Te.EventEmitter(), Te.workspace.onDidOpenTextDocument((t) => {
        if (t.uri.scheme !== n2.CellScheme) return;
        let [r, i] = this.findNotebookDocumentAndCell(t);
        if (!(r === void 0 || i === void 0)) for (let s of this.registrations.values()) s instanceof Fi && s.didOpenNotebookCellTextDocument(r, i);
      }), Te.workspace.onDidChangeTextDocument((t) => {
        if (t.contentChanges.length === 0) return;
        let r = t.document;
        if (r.uri.scheme !== n2.CellScheme) return;
        let [i, s] = this.findNotebookDocumentAndCell(r);
        if (!(i === void 0 || s === void 0)) for (let o of this.registrations.values()) o instanceof Fi && o.didChangeNotebookCellTextDocument(i, s, t);
      }), Te.workspace.onDidCloseTextDocument((t) => {
        if (t.uri.scheme !== n2.CellScheme) return;
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
      let t = fy(fy(e, "notebookDocument"), "synchronization");
      t.dynamicRegistration = true, t.executionSummarySupport = true;
    }
    preInitialize(e) {
      let t = e.notebookDocumentSync;
      t !== void 0 && (this.dedicatedChannel = this.client.protocol2CodeConverter.asDocumentSelector(na.asDocumentSelector(t)));
    }
    initialize(e) {
      let t = e.notebookDocumentSync;
      if (t === void 0) return;
      let r = t.id ?? gP.generateUuid();
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
      this.registrations.clear(), this._onChangeNotificationSent.dispose(), this._onChangeNotificationSent = new Te.EventEmitter(), this._onOpenNotificationSent.dispose(), this._onOpenNotificationSent = new Te.EventEmitter(), this._onCloseNotificationSent.dispose(), this._onCloseNotificationSent = new Te.EventEmitter(), this._onSaveNotificationSent.dispose(), this._onSaveNotificationSent = new Te.EventEmitter();
    }
    handles(e) {
      if (e.uri.scheme !== n2.CellScheme) return false;
      if (this.dedicatedChannel !== void 0 && Te.languages.match(this.dedicatedChannel, e) > 0) return true;
      for (let t of this.registrations.values()) if (t.handles(e)) return true;
      return false;
    }
    getProvider(e) {
      for (let t of this.registrations.values()) if (t.handles(e.document)) return t;
    }
    findNotebookDocumentAndCell(e) {
      let t = e.uri.toString();
      for (let r of Te.workspace.notebookDocuments) for (let i of r.getCells()) if (i.document.uri.toString() === t) return [r, i];
      return [void 0, void 0];
    }
  };
  dn.NotebookDocumentSyncFeature = Td;
});
var my = R((qt) => {
  "use strict";
  var _P = qt && qt.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), yP = qt && qt.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), gy = qt && qt.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && _P(t, e, r[i]);
      return yP(t, e), t;
    };
  })();
  Object.defineProperty(qt, "__esModule", { value: true });
  qt.SyncConfigurationFeature = qt.ConfigurationFeature = void 0;
  qt.toJSONObject = Vr;
  var Li = require("vscode"), Ts = G(), vP = gy(At()), bP = gy(De()), py = ie(), Od = class {
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
      e.onRequest(Ts.ConfigurationRequest.type, (t, r) => {
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
        if (i === -1) r = Vr(Li.workspace.getConfiguration(void 0, e).get(t));
        else {
          let s = Li.workspace.getConfiguration(t.substr(0, i), e);
          s && (r = Vr(s.get(t.substr(i + 1))));
        }
      } else {
        let i = Li.workspace.getConfiguration(void 0, e);
        r = {};
        for (let s of Object.keys(i)) i.has(s) && (r[s] = Vr(i.get(s)));
      }
      return r === void 0 && (r = null), r;
    }
    clear() {
    }
  };
  qt.ConfigurationFeature = Od;
  function Vr(n2) {
    if (n2) {
      if (Array.isArray(n2)) return n2.map(Vr);
      if (typeof n2 == "object") {
        let e = /* @__PURE__ */ Object.create(null);
        for (let t in n2) Object.prototype.hasOwnProperty.call(n2, t) && (e[t] = Vr(n2[t]));
        return e;
      }
    }
    return n2;
  }
  var Ed = class {
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
      return Ts.DidChangeConfigurationNotification.type;
    }
    fillClientCapabilities(e) {
      (0, py.ensure)((0, py.ensure)(e, "workspace"), "didChangeConfiguration").dynamicRegistration = true;
    }
    initialize() {
      this.isCleared = false;
      let e = this._client.clientOptions.synchronize?.configurationSection;
      e !== void 0 && this.register({ id: bP.generateUuid(), registerOptions: { section: e } });
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
      if (vP.string(e) ? r = [e] : r = e, r !== void 0 && t !== void 0 && !r.some((a) => t.affectsConfiguration(a))) return;
      let i = async (o) => o === void 0 ? this._client.sendNotification(Ts.DidChangeConfigurationNotification.type, { settings: null }) : this._client.sendNotification(Ts.DidChangeConfigurationNotification.type, { settings: this.extractSettingsInformation(o) }), s = this._client.middleware.workspace?.didChangeConfiguration;
      (s ? s(r, i) : i(r)).catch((o) => {
        this._client.error(`Sending notification ${Ts.DidChangeConfigurationNotification.type.method} failed`, o);
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
          t(i, l)[l[l.length - 1]] = Vr(c);
        }
      }
      return i;
    }
  };
  qt.SyncConfigurationFeature = Ed;
});
var by = {};
Ja(by, { TextDocument: () => qd });
function xd(n2, e) {
  if (n2.length <= 1) return n2;
  let t = n2.length / 2 | 0, r = n2.slice(0, t), i = n2.slice(t);
  xd(r, e), xd(i, e);
  let s = 0, o = 0, a = 0;
  for (; s < r.length && o < i.length; ) e(r[s], i[o]) <= 0 ? n2[a++] = r[s++] : n2[a++] = i[o++];
  for (; s < r.length; ) n2[a++] = r[s++];
  for (; o < i.length; ) n2[a++] = i[o++];
  return n2;
}
function _y(n2, e, t = 0) {
  let r = e ? [t] : [];
  for (let i = 0; i < n2.length; i++) {
    let s = n2.charCodeAt(i);
    yy(s) && (s === 13 && i + 1 < n2.length && n2.charCodeAt(i + 1) === 10 && i++, r.push(t + i + 1));
  }
  return r;
}
function yy(n2) {
  return n2 === 13 || n2 === 10;
}
function vy(n2) {
  let e = n2.start, t = n2.end;
  return e.line > t.line || e.line === t.line && e.character > t.character ? { start: t, end: e } : n2;
}
function CP(n2) {
  let e = vy(n2.range);
  return e !== n2.range ? { newText: n2.newText, range: e } : n2;
}
var sa, qd, Cy = rp(() => {
  "use strict";
  sa = class n2 {
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
      for (let r of e) if (n2.isIncremental(r)) {
        let i = vy(r.range), s = this.offsetAt(i.start), o = this.offsetAt(i.end);
        this._content = this._content.substring(0, s) + r.text + this._content.substring(o, this._content.length);
        let a = Math.max(i.start.line, 0), c = Math.max(i.end.line, 0), l = this._lineOffsets, f = _y(r.text, false, s);
        if (c - a === f.length) for (let p = 0, g = f.length; p < g; p++) l[p + a + 1] = f[p];
        else f.length < 1e4 ? l.splice(a + 1, c - a, ...f) : this._lineOffsets = l = l.slice(0, a + 1).concat(f, l.slice(c + 1));
        let h = r.text.length - (o - s);
        if (h !== 0) for (let p = a + 1 + f.length, g = l.length; p < g; p++) l[p] = l[p] + h;
      } else if (n2.isFull(r)) this._content = r.text, this._lineOffsets = void 0;
      else throw new Error("Unknown change event received");
      this._version = t;
    }
    getLineOffsets() {
      return this._lineOffsets === void 0 && (this._lineOffsets = _y(this._content, true)), this._lineOffsets;
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
      for (; e > t && yy(this._content.charCodeAt(e - 1)); ) e--;
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
  (function(n2) {
    function e(i, s, o, a) {
      return new sa(i, s, o, a);
    }
    n2.create = e;
    function t(i, s, o) {
      if (i instanceof sa) return i.update(s, o), i;
      throw new Error("TextDocument.update: document must be created by TextDocument.create");
    }
    n2.update = t;
    function r(i, s) {
      let o = i.getText(), a = xd(s.map(CP), (f, h) => {
        let p = f.range.start.line - h.range.start.line;
        return p === 0 ? f.range.start.character - h.range.start.character : p;
      }), c = 0, l = [];
      for (let f of a) {
        let h = i.offsetAt(f.range.start);
        if (h < c) throw new Error("Overlapping edit");
        h > c && l.push(o.substring(c, h)), f.newText.length && l.push(f.newText), c = i.offsetAt(f.range.end);
      }
      return l.push(o.substr(c)), l.join("");
    }
    n2.applyEdits = r;
  })(qd || (qd = {}));
});
var wy = R((ze) => {
  "use strict";
  var wP = ze && ze.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), DP = ze && ze.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), SP = ze && ze.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && wP(t, e, r[i]);
      return DP(t, e), t;
    };
  })();
  Object.defineProperty(ze, "__esModule", { value: true });
  ze.DidSaveTextDocumentFeature = ze.WillSaveWaitUntilFeature = ze.WillSaveFeature = ze.DidChangeTextDocumentFeature = ze.DidCloseTextDocumentFeature = ze.DidOpenTextDocumentFeature = void 0;
  var ke = require("vscode"), he = G(), Ne = ie(), Ai = SP(De()), PP = (Cy(), es(by)), Md = class extends Ne.TextDocumentEventFeature {
    _syncedDocuments;
    _pendingOpenNotifications;
    _delayOpen;
    _pendingOpenListeners;
    constructor(e, t) {
      super(e, ke.workspace.onDidOpenTextDocument, he.DidOpenTextDocumentNotification.type, () => e.middleware.didOpen, (r) => e.code2ProtocolConverter.asOpenTextDocumentParams(r), (r) => r, Ne.TextDocumentEventFeature.textDocumentFilter), this._syncedDocuments = t, this._pendingOpenNotifications = /* @__PURE__ */ new Map(), this._delayOpen = e.clientOptions.textSynchronization?.delayOpenNotifications ?? false;
    }
    async callback(e) {
      if (this._delayOpen) {
        if (!this.matches(e)) return;
        if (this._client.visibleDocuments.isVisible(e)) return super.callback(e);
        {
          let r = new Ad(e);
          this._pendingOpenNotifications.set(r.uri.toString(), r);
        }
      } else return super.callback(e);
    }
    get openDocuments() {
      return this._syncedDocuments.values();
    }
    fillClientCapabilities(e) {
      (0, Ne.ensure)((0, Ne.ensure)(e, "textDocument"), "synchronization").dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = e.resolvedTextDocumentSync;
      t && r && r.openClose && this.register({ id: Ai.generateUuid(), registerOptions: { documentSelector: t } });
    }
    get registrationType() {
      return he.DidOpenTextDocumentNotification.type;
    }
    register(e) {
      if (super.register(e), !e.registerOptions.documentSelector) return;
      let t = this._client.protocol2CodeConverter.asDocumentSelector(e.registerOptions.documentSelector);
      if (ke.workspace.textDocuments.forEach((r) => {
        let i = r.uri.toString();
        if (!this._syncedDocuments.has(i) && ke.languages.match(t, r) > 0 && !this._client.hasDedicatedTextSynchronizationFeature(r)) if (this._client.visibleDocuments.isVisible(r)) {
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
        })), this._pendingOpenListeners.push(ke.workspace.onDidCloseTextDocument((i) => {
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
  ze.DidOpenTextDocumentFeature = Md;
  var Id = class extends Ne.TextDocumentEventFeature {
    _syncedDocuments;
    _pendingTextDocumentChanges;
    constructor(e, t, r) {
      super(e, ke.workspace.onDidCloseTextDocument, he.DidCloseTextDocumentNotification.type, () => e.middleware.didClose, (i) => e.code2ProtocolConverter.asCloseTextDocumentParams(i), (i) => i, Ne.TextDocumentEventFeature.textDocumentFilter), this._syncedDocuments = t, this._pendingTextDocumentChanges = r;
    }
    get registrationType() {
      return he.DidCloseTextDocumentNotification.type;
    }
    fillClientCapabilities(e) {
      (0, Ne.ensure)((0, Ne.ensure)(e, "textDocument"), "synchronization").dynamicRegistration = true;
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
        if (ke.languages.match(t, i) > 0 && !this._selectorFilter(r, i) && !this._client.hasDedicatedTextSynchronizationFeature(i)) {
          let s = this._client.middleware, o = (a) => this._client.sendNotification(this._type, this._createParams(a));
          this._syncedDocuments.delete(i.uri.toString()), (s.didClose ? s.didClose(i, o) : o(i)).catch((a) => {
            this._client.error(`Sending document notification ${this._type.method} failed`, a);
          });
        }
      });
    }
  };
  ze.DidCloseTextDocumentFeature = Id;
  var Nd = class extends Ne.DynamicDocumentFeature {
    _listener;
    _changeData;
    _onAboutToSendNotification;
    _onNotificationSent;
    _onPendingChangeAdded;
    _pendingTextDocumentChanges;
    _syncKind;
    constructor(e, t) {
      super(e), this._changeData = /* @__PURE__ */ new Map(), this._onAboutToSendNotification = new ke.EventEmitter(), this._onNotificationSent = new ke.EventEmitter(), this._onPendingChangeAdded = new ke.EventEmitter(), this._pendingTextDocumentChanges = t, this._syncKind = he.TextDocumentSyncKind.None;
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
      return he.DidChangeTextDocumentNotification.type;
    }
    fillClientCapabilities(e) {
      (0, Ne.ensure)((0, Ne.ensure)(e, "textDocument"), "synchronization").dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = e.resolvedTextDocumentSync;
      t && r && r.change !== void 0 && r.change !== he.TextDocumentSyncKind.None && this.register({ id: Ai.generateUuid(), registerOptions: Object.assign({}, { documentSelector: t }, { syncKind: r.change }) });
    }
    register(e) {
      e.registerOptions.documentSelector && (this._listener || (this._listener = ke.workspace.onDidChangeTextDocument(this.callback, this)), this._changeData.set(e.id, { syncKind: e.registerOptions.syncKind, documentSelector: this._client.protocol2CodeConverter.asDocumentSelector(e.registerOptions.documentSelector) }), this.updateSyncKind(e.registerOptions.syncKind));
    }
    *getDocumentSelectors() {
      for (let e of this._changeData.values()) yield e.documentSelector;
    }
    async callback(e) {
      if (e.contentChanges.length === 0) return;
      let t = e.document.uri, r = e.document.version, i = [];
      for (let s of this._changeData.values()) if (ke.languages.match(s.documentSelector, e.document) > 0 && !this._client.hasDedicatedTextSynchronizationFeature(e.document)) {
        let o = this._client.middleware;
        if (s.syncKind === he.TextDocumentSyncKind.Incremental) {
          let a = async (c) => {
            let l = this._client.code2ProtocolConverter.asChangeTextDocumentParams(c, t, r);
            this.aboutToSendNotification(c.document, he.DidChangeTextDocumentNotification.type, l), await this._client.sendNotification(he.DidChangeTextDocumentNotification.type, l), this.notificationSent(c.document, he.DidChangeTextDocumentNotification.type, l);
          };
          i.push(o.didChange ? o.didChange(e, (c) => a(c)) : a(e));
        } else if (s.syncKind === he.TextDocumentSyncKind.Full) {
          let a = async (c) => {
            let l = c.document.uri.toString();
            this._pendingTextDocumentChanges.set(l, c.document), this._onPendingChangeAdded.fire();
          };
          i.push(o.didChange ? o.didChange(e, (c) => a(c)) : a(e));
        }
      }
      return Promise.all(i).then(void 0, (s) => {
        throw this._client.error(`Sending document notification ${he.DidChangeTextDocumentNotification.type.method} failed`, s), s;
      });
    }
    aboutToSendNotification(e, t, r) {
      this._onAboutToSendNotification.fire({ textDocument: e, type: t, params: r });
    }
    notificationSent(e, t, r) {
      this._onNotificationSent.fire({ textDocument: e, type: t, params: r });
    }
    unregister(e) {
      if (this._changeData.delete(e), this._changeData.size === 0) this._listener && (this._listener.dispose(), this._listener = void 0), this._syncKind = he.TextDocumentSyncKind.None;
      else {
        this._syncKind = he.TextDocumentSyncKind.None;
        for (let t of this._changeData.values()) if (this.updateSyncKind(t.syncKind), this._syncKind === he.TextDocumentSyncKind.Full) break;
      }
    }
    clear() {
      this._pendingTextDocumentChanges.clear(), this._changeData.clear(), this._syncKind = he.TextDocumentSyncKind.None, this._listener && (this._listener.dispose(), this._listener = void 0);
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
      for (let t of this._changeData.values()) if (ke.languages.match(t.documentSelector, e) > 0) return { send: (r) => this.callback(r) };
    }
    updateSyncKind(e) {
      if (this._syncKind !== he.TextDocumentSyncKind.Full) switch (e) {
        case he.TextDocumentSyncKind.Full:
          this._syncKind = e;
          break;
        case he.TextDocumentSyncKind.Incremental:
          this._syncKind === he.TextDocumentSyncKind.None && (this._syncKind = he.TextDocumentSyncKind.Incremental);
          break;
      }
    }
  };
  ze.DidChangeTextDocumentFeature = Nd;
  var jd = class extends Ne.TextDocumentEventFeature {
    constructor(e) {
      super(e, ke.workspace.onWillSaveTextDocument, he.WillSaveTextDocumentNotification.type, () => e.middleware.willSave, (t) => e.code2ProtocolConverter.asWillSaveTextDocumentParams(t), (t) => t.document, (t, r) => Ne.TextDocumentEventFeature.textDocumentFilter(t, r.document));
    }
    get registrationType() {
      return he.WillSaveTextDocumentNotification.type;
    }
    fillClientCapabilities(e) {
      let t = (0, Ne.ensure)((0, Ne.ensure)(e, "textDocument"), "synchronization");
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
  ze.WillSaveFeature = jd;
  var Fd = class extends Ne.DynamicDocumentFeature {
    _listener;
    _selectors;
    constructor(e) {
      super(e), this._selectors = /* @__PURE__ */ new Map();
    }
    getDocumentSelectors() {
      return this._selectors.values();
    }
    get registrationType() {
      return he.WillSaveTextDocumentWaitUntilRequest.type;
    }
    fillClientCapabilities(e) {
      let t = (0, Ne.ensure)((0, Ne.ensure)(e, "textDocument"), "synchronization");
      t.willSaveWaitUntil = true;
    }
    initialize(e, t) {
      let r = e.resolvedTextDocumentSync;
      t && r && r.willSaveWaitUntil && this.register({ id: Ai.generateUuid(), registerOptions: { documentSelector: t } });
    }
    register(e) {
      e.registerOptions.documentSelector && (this._listener || (this._listener = ke.workspace.onWillSaveTextDocument(this.callback, this)), this._selectors.set(e.id, this._client.protocol2CodeConverter.asDocumentSelector(e.registerOptions.documentSelector)));
    }
    callback(e) {
      if (Ne.TextDocumentEventFeature.textDocumentFilter(this._selectors.values(), e.document) && !this._client.hasDedicatedTextSynchronizationFeature(e.document)) {
        let t = this._client.middleware, r = (i) => this._client.sendRequest(he.WillSaveTextDocumentWaitUntilRequest.type, this._client.code2ProtocolConverter.asWillSaveTextDocumentParams(i)).then(async (s) => {
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
  ze.WillSaveWaitUntilFeature = Fd;
  var Ld = class extends Ne.TextDocumentEventFeature {
    _includeText;
    constructor(e) {
      super(e, ke.workspace.onDidSaveTextDocument, he.DidSaveTextDocumentNotification.type, () => e.middleware.didSave, (t) => e.code2ProtocolConverter.asSaveTextDocumentParams(t, this._includeText), (t) => t, Ne.TextDocumentEventFeature.textDocumentFilter), this._includeText = false;
    }
    get registrationType() {
      return he.DidSaveTextDocumentNotification.type;
    }
    fillClientCapabilities(e) {
      (0, Ne.ensure)((0, Ne.ensure)(e, "textDocument"), "synchronization").didSave = true;
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
  ze.DidSaveTextDocumentFeature = Ld;
  var RP = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
  function TP(n2 = "") {
    let e = "(-?\\d*\\.\\d\\w*)|([^";
    for (let t of RP) n2.indexOf(t) >= 0 || (e += "\\" + t);
    return e += "\\s]+)", new RegExp(e, "g");
  }
  var OP = TP(), Ad = class n2 {
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
      this._extTextDocument = e, this._content = e.getText(), this._uri = e.uri, this._fileName = e.fileName, this._languageId = e.languageId, this._version = e.version, this._eol = e.eol, this._isUntitled = e.isUntitled, this._encoding = e.encoding, this._isDirty = e.isDirty, this._isClosed = e.isClosed, this._capturedTextDocument = PP.TextDocument.create(this._uri.toString(), this._languageId, this._version, this._content);
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
      return new ke.Position(t.line, t.character);
    }
    getText(e) {
      return this._capturedTextDocument.getText(e);
    }
    lineAt(e) {
      let t = typeof e == "number" ? e : this.validatePosition(e).line;
      if (t < 0 || t >= this.lineCount) throw new RangeError(`Illegal value for line: ${t}`);
      let r = this._capturedTextDocument.getLineRange(t), i = this._capturedTextDocument.getText(r), s = i.search(/\S/), o = new ke.Range(r.start.line, r.start.character, r.end.line, r.end.character), a = t + 1 < this.lineCount ? new ke.Range(o.start.line, o.start.character, t + 1, 0) : o;
      return { lineNumber: t, text: i, range: o, rangeIncludingLineBreak: a, firstNonWhitespaceCharacterIndex: s === -1 ? i.length : s, isEmptyOrWhitespace: s === -1 };
    }
    getWordRangeAtPosition(e, t) {
      let r = this.validatePosition(e).line, i = this.lineAt(r).text, s = n2.getWordRegExp(t), o;
      for (s.lastIndex = 0; (o = s.exec(i)) !== null; ) if (o.index <= e.character && s.lastIndex >= e.character) return new ke.Range(r, o.index, r, s.lastIndex);
    }
    validateRange(e) {
      let t = this.validatePosition(e.start), r = this.validatePosition(e.end);
      return t === e.start && r === e.end ? e : new ke.Range(t.line, t.character, r.line, r.character);
    }
    validatePosition(e) {
      let t = Math.min(Math.max(e.line, 0), this.lineCount - 1), r = this._capturedTextDocument.getLineRange(t), i = Math.min(Math.max(e.character, 0), r.end.character);
      return t === e.line && i === e.character ? e : new ke.Position(t, i);
    }
    static getWordRegExp(e) {
      let t = e ?? OP;
      if (t.flags.includes("g")) return t;
      let r = `${t.flags}g`;
      return new RegExp(t.source, r);
    }
  };
});
var Dy = R((fn) => {
  "use strict";
  var EP = fn && fn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), qP = fn && fn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), xP = fn && fn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && EP(t, e, r[i]);
      return qP(t, e), t;
    };
  })();
  Object.defineProperty(fn, "__esModule", { value: true });
  fn.CompletionItemFeature = void 0;
  var MP = require("vscode"), ne = G(), kd = ie(), IP = xP(De()), NP = [ne.CompletionItemKind.Text, ne.CompletionItemKind.Method, ne.CompletionItemKind.Function, ne.CompletionItemKind.Constructor, ne.CompletionItemKind.Field, ne.CompletionItemKind.Variable, ne.CompletionItemKind.Class, ne.CompletionItemKind.Interface, ne.CompletionItemKind.Module, ne.CompletionItemKind.Property, ne.CompletionItemKind.Unit, ne.CompletionItemKind.Value, ne.CompletionItemKind.Enum, ne.CompletionItemKind.Keyword, ne.CompletionItemKind.Snippet, ne.CompletionItemKind.Color, ne.CompletionItemKind.File, ne.CompletionItemKind.Reference, ne.CompletionItemKind.Folder, ne.CompletionItemKind.EnumMember, ne.CompletionItemKind.Constant, ne.CompletionItemKind.Struct, ne.CompletionItemKind.Event, ne.CompletionItemKind.Operator, ne.CompletionItemKind.TypeParameter], $d = class extends kd.TextDocumentLanguageFeature {
    labelDetailsSupport;
    constructor(e) {
      super(e, ne.CompletionRequest.type), this.labelDetailsSupport = /* @__PURE__ */ new Map();
    }
    fillClientCapabilities(e) {
      let t = (0, kd.ensure)((0, kd.ensure)(e, "textDocument"), "completion");
      t.dynamicRegistration = true, t.contextSupport = true, t.completionItem = { snippetSupport: true, commitCharactersSupport: true, documentationFormat: [ne.MarkupKind.Markdown, ne.MarkupKind.PlainText], deprecatedSupport: true, preselectSupport: true, tagSupport: { valueSet: [ne.CompletionItemTag.Deprecated] }, insertReplaceSupport: true, resolveSupport: { properties: ["documentation", "detail", "additionalTextEdits"] }, insertTextModeSupport: { valueSet: [ne.InsertTextMode.asIs, ne.InsertTextMode.adjustIndentation] }, labelDetailsSupport: true }, t.insertTextMode = ne.InsertTextMode.adjustIndentation, t.completionItemKind = { valueSet: NP }, t.completionList = { itemDefaults: ["commitCharacters", "editRange", "insertTextFormat", "insertTextMode", "data"], applyKindSupport: true };
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.completionProvider);
      r && this.register({ id: IP.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e, t) {
      this.labelDetailsSupport.set(t, !!e.completionItem?.labelDetailsSupport);
      let r = e.triggerCharacters ?? [], i = e.allCommitCharacters, s = e.documentSelector, o = { provideCompletionItems: (a, c, l, f) => {
        let h = this._client, p = this._client.middleware, g = (_, y, D, T) => h.sendRequest(ne.CompletionRequest.type, h.code2ProtocolConverter.asCompletionParams(_, y, D), T).then((w) => T.isCancellationRequested ? null : h.protocol2CodeConverter.asCompletionResult(w, i, T), (w) => h.handleFailedRequest(ne.CompletionRequest.type, T, w, null));
        return p.provideCompletionItem ? p.provideCompletionItem(a, c, f, l, g) : g(a, c, f, l);
      }, resolveCompletionItem: e.resolveProvider ? (a, c) => {
        let l = this._client, f = this._client.middleware, h = (p, g) => l.sendRequest(ne.CompletionResolveRequest.type, l.code2ProtocolConverter.asCompletionItem(p, !!this.labelDetailsSupport.get(t)), g).then((_) => g.isCancellationRequested ? null : l.protocol2CodeConverter.asCompletionItem(_), (_) => l.handleFailedRequest(ne.CompletionResolveRequest.type, g, _, p));
        return f.resolveCompletionItem ? f.resolveCompletionItem(a, c, h) : h(a, c);
      } : void 0 };
      return [MP.languages.registerCompletionItemProvider(this._client.protocol2CodeConverter.asDocumentSelector(s), o, ...r), o];
    }
  };
  fn.CompletionItemFeature = $d;
});
var Sy = R((hn) => {
  "use strict";
  var jP = hn && hn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), FP = hn && hn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), LP = hn && hn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && jP(t, e, r[i]);
      return FP(t, e), t;
    };
  })();
  Object.defineProperty(hn, "__esModule", { value: true });
  hn.HoverFeature = void 0;
  var AP = require("vscode"), Os = G(), Ud = ie(), kP = LP(De()), Hd = class extends Ud.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Os.HoverRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Ud.ensure)((0, Ud.ensure)(e, "textDocument"), "hover");
      t.dynamicRegistration = true, t.contentFormat = [Os.MarkupKind.Markdown, Os.MarkupKind.PlainText];
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.hoverProvider);
      r && this.register({ id: kP.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideHover: (i, s, o) => {
        let a = this._client, c = (f, h, p) => a.sendRequest(Os.HoverRequest.type, a.code2ProtocolConverter.asTextDocumentPositionParams(f, h), p).then((g) => p.isCancellationRequested ? null : a.protocol2CodeConverter.asHover(g), (g) => a.handleFailedRequest(Os.HoverRequest.type, p, g, null)), l = a.middleware;
        return l.provideHover ? l.provideHover(i, s, o, c) : c(i, s, o);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return AP.languages.registerHoverProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  hn.HoverFeature = Hd;
});
var Py = R((pn) => {
  "use strict";
  var $P = pn && pn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), UP = pn && pn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), HP = pn && pn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && $P(t, e, r[i]);
      return UP(t, e), t;
    };
  })();
  Object.defineProperty(pn, "__esModule", { value: true });
  pn.DefinitionFeature = void 0;
  var WP = require("vscode"), Wd = G(), zd = ie(), zP = HP(De()), Kd = class extends zd.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Wd.DefinitionRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, zd.ensure)((0, zd.ensure)(e, "textDocument"), "definition");
      t.dynamicRegistration = true, t.linkSupport = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.definitionProvider);
      r && this.register({ id: zP.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideDefinition: (i, s, o) => {
        let a = this._client, c = (f, h, p) => a.sendRequest(Wd.DefinitionRequest.type, a.code2ProtocolConverter.asTextDocumentPositionParams(f, h), p).then((g) => p.isCancellationRequested ? null : a.protocol2CodeConverter.asDefinitionResult(g, p), (g) => a.handleFailedRequest(Wd.DefinitionRequest.type, p, g, null)), l = a.middleware;
        return l.provideDefinition ? l.provideDefinition(i, s, o, c) : c(i, s, o);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return WP.languages.registerDefinitionProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  pn.DefinitionFeature = Kd;
});
var Ty = R((gn) => {
  "use strict";
  var KP = gn && gn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), BP = gn && gn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), VP = gn && gn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && KP(t, e, r[i]);
      return BP(t, e), t;
    };
  })();
  Object.defineProperty(gn, "__esModule", { value: true });
  gn.SignatureHelpFeature = void 0;
  var Ry = require("vscode"), Es = G(), Bd = ie(), GP = VP(De()), Vd = class extends Bd.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Es.SignatureHelpRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Bd.ensure)((0, Bd.ensure)(e, "textDocument"), "signatureHelp");
      t.dynamicRegistration = true, t.signatureInformation = { documentationFormat: [Es.MarkupKind.Markdown, Es.MarkupKind.PlainText] }, t.signatureInformation.parameterInformation = { labelOffsetSupport: true }, t.signatureInformation.activeParameterSupport = true, t.signatureInformation.noActiveParameterSupport = true, t.contextSupport = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.signatureHelpProvider);
      r && this.register({ id: GP.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = { provideSignatureHelp: (r, i, s, o) => {
        let a = this._client, c = (f, h, p, g) => a.sendRequest(Es.SignatureHelpRequest.type, a.code2ProtocolConverter.asSignatureHelpParams(f, h, p), g).then((_) => g.isCancellationRequested ? null : a.protocol2CodeConverter.asSignatureHelp(_, g), (_) => a.handleFailedRequest(Es.SignatureHelpRequest.type, g, _, null)), l = a.middleware;
        return l.provideSignatureHelp ? l.provideSignatureHelp(r, i, o, s, c) : c(r, i, o, s);
      } };
      return [this.registerProvider(e, t), t];
    }
    registerProvider(e, t) {
      let r = this._client.protocol2CodeConverter.asDocumentSelector(e.documentSelector);
      if (e.retriggerCharacters === void 0) {
        let i = e.triggerCharacters || [];
        return Ry.languages.registerSignatureHelpProvider(r, t, ...i);
      } else {
        let i = { triggerCharacters: e.triggerCharacters || [], retriggerCharacters: e.retriggerCharacters || [] };
        return Ry.languages.registerSignatureHelpProvider(r, t, i);
      }
    }
  };
  gn.SignatureHelpFeature = Vd;
});
var Oy = R((mn) => {
  "use strict";
  var XP = mn && mn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), JP = mn && mn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), QP = mn && mn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && XP(t, e, r[i]);
      return JP(t, e), t;
    };
  })();
  Object.defineProperty(mn, "__esModule", { value: true });
  mn.DocumentHighlightFeature = void 0;
  var YP = require("vscode"), Gd = G(), Xd = ie(), ZP = QP(De()), Jd = class extends Xd.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Gd.DocumentHighlightRequest.type);
    }
    fillClientCapabilities(e) {
      (0, Xd.ensure)((0, Xd.ensure)(e, "textDocument"), "documentHighlight").dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.documentHighlightProvider);
      r && this.register({ id: ZP.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideDocumentHighlights: (i, s, o) => {
        let a = this._client, c = (f, h, p) => a.sendRequest(Gd.DocumentHighlightRequest.type, a.code2ProtocolConverter.asTextDocumentPositionParams(f, h), p).then((g) => p.isCancellationRequested ? null : a.protocol2CodeConverter.asDocumentHighlights(g, p), (g) => a.handleFailedRequest(Gd.DocumentHighlightRequest.type, p, g, null)), l = a.middleware;
        return l.provideDocumentHighlights ? l.provideDocumentHighlights(i, s, o, c) : c(i, s, o);
      } };
      return [YP.languages.registerDocumentHighlightProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r), r];
    }
  };
  mn.DocumentHighlightFeature = Jd;
});
var Zd = R((lt) => {
  "use strict";
  var eR = lt && lt.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), tR = lt && lt.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), nR = lt && lt.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && eR(t, e, r[i]);
      return tR(t, e), t;
    };
  })();
  Object.defineProperty(lt, "__esModule", { value: true });
  lt.DocumentSymbolFeature = lt.SupportedSymbolTags = lt.SupportedSymbolKinds = void 0;
  var rR = require("vscode"), de = G(), Qd = ie(), iR = nR(De());
  lt.SupportedSymbolKinds = [de.SymbolKind.File, de.SymbolKind.Module, de.SymbolKind.Namespace, de.SymbolKind.Package, de.SymbolKind.Class, de.SymbolKind.Method, de.SymbolKind.Property, de.SymbolKind.Field, de.SymbolKind.Constructor, de.SymbolKind.Enum, de.SymbolKind.Interface, de.SymbolKind.Function, de.SymbolKind.Variable, de.SymbolKind.Constant, de.SymbolKind.String, de.SymbolKind.Number, de.SymbolKind.Boolean, de.SymbolKind.Array, de.SymbolKind.Object, de.SymbolKind.Key, de.SymbolKind.Null, de.SymbolKind.EnumMember, de.SymbolKind.Struct, de.SymbolKind.Event, de.SymbolKind.Operator, de.SymbolKind.TypeParameter];
  lt.SupportedSymbolTags = [de.SymbolTag.Deprecated];
  var Yd = class extends Qd.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, de.DocumentSymbolRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Qd.ensure)((0, Qd.ensure)(e, "textDocument"), "documentSymbol");
      t.dynamicRegistration = true, t.symbolKind = { valueSet: lt.SupportedSymbolKinds }, t.hierarchicalDocumentSymbolSupport = true, t.tagSupport = { valueSet: lt.SupportedSymbolTags }, t.labelSupport = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.documentSymbolProvider);
      r && this.register({ id: iR.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideDocumentSymbols: (s, o) => {
        let a = this._client, c = async (f, h) => {
          try {
            let p = await a.sendRequest(de.DocumentSymbolRequest.type, a.code2ProtocolConverter.asDocumentSymbolParams(f), h);
            if (h.isCancellationRequested || p === void 0 || p === null) return null;
            if (p.length === 0) return [];
            {
              let g = p[0];
              return de.DocumentSymbol.is(g) ? await a.protocol2CodeConverter.asDocumentSymbols(p, h) : await a.protocol2CodeConverter.asSymbolInformations(p, h);
            }
          } catch (p) {
            return a.handleFailedRequest(de.DocumentSymbolRequest.type, h, p, null);
          }
        }, l = a.middleware;
        return l.provideDocumentSymbols ? l.provideDocumentSymbols(s, o, c) : c(s, o);
      } }, i = e.label !== void 0 ? { label: e.label } : void 0;
      return [rR.languages.registerDocumentSymbolProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r, i), r];
    }
  };
  lt.DocumentSymbolFeature = Yd;
});
var qy = R((_n) => {
  "use strict";
  var sR = _n && _n.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), oR = _n && _n.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), aR = _n && _n.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && sR(t, e, r[i]);
      return oR(t, e), t;
    };
  })();
  Object.defineProperty(_n, "__esModule", { value: true });
  _n.WorkspaceSymbolFeature = void 0;
  var cR = require("vscode"), qs = G(), ef = ie(), Ey = Zd(), uR = aR(De()), tf = class extends ef.WorkspaceFeature {
    constructor(e) {
      super(e, qs.WorkspaceSymbolRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, ef.ensure)((0, ef.ensure)(e, "workspace"), "symbol");
      t.dynamicRegistration = true, t.symbolKind = { valueSet: Ey.SupportedSymbolKinds }, t.tagSupport = { valueSet: Ey.SupportedSymbolTags }, t.resolveSupport = { properties: ["location.range"] };
    }
    initialize(e) {
      e.workspaceSymbolProvider && this.register({ id: uR.generateUuid(), registerOptions: e.workspaceSymbolProvider === true ? { workDoneProgress: false } : e.workspaceSymbolProvider });
    }
    registerLanguageProvider(e) {
      let t = { provideWorkspaceSymbols: (r, i) => {
        let s = this._client, o = (c, l) => s.sendRequest(qs.WorkspaceSymbolRequest.type, { query: c }, l).then((f) => l.isCancellationRequested ? null : s.protocol2CodeConverter.asSymbolInformations(f, l), (f) => s.handleFailedRequest(qs.WorkspaceSymbolRequest.type, l, f, null)), a = s.middleware;
        return a.provideWorkspaceSymbols ? a.provideWorkspaceSymbols(r, i, o) : o(r, i);
      }, resolveWorkspaceSymbol: e.resolveProvider === true ? (r, i) => {
        let s = this._client, o = (c, l) => s.sendRequest(qs.WorkspaceSymbolResolveRequest.type, s.code2ProtocolConverter.asWorkspaceSymbol(c), l).then((f) => l.isCancellationRequested ? null : s.protocol2CodeConverter.asSymbolInformation(f), (f) => s.handleFailedRequest(qs.WorkspaceSymbolResolveRequest.type, l, f, null)), a = s.middleware;
        return a.resolveWorkspaceSymbol ? a.resolveWorkspaceSymbol(r, i, o) : o(r, i);
      } : void 0 };
      return [cR.languages.registerWorkspaceSymbolProvider(t), t];
    }
  };
  _n.WorkspaceSymbolFeature = tf;
});
var xy = R((yn) => {
  "use strict";
  var lR = yn && yn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), dR = yn && yn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), fR = yn && yn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && lR(t, e, r[i]);
      return dR(t, e), t;
    };
  })();
  Object.defineProperty(yn, "__esModule", { value: true });
  yn.ReferencesFeature = void 0;
  var hR = require("vscode"), nf = G(), rf = ie(), pR = fR(De()), sf = class extends rf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, nf.ReferencesRequest.type);
    }
    fillClientCapabilities(e) {
      (0, rf.ensure)((0, rf.ensure)(e, "textDocument"), "references").dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.referencesProvider);
      r && this.register({ id: pR.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideReferences: (i, s, o, a) => {
        let c = this._client, l = (h, p, g, _) => c.sendRequest(nf.ReferencesRequest.type, c.code2ProtocolConverter.asReferenceParams(h, p, g), _).then((y) => _.isCancellationRequested ? null : c.protocol2CodeConverter.asReferences(y, _), (y) => c.handleFailedRequest(nf.ReferencesRequest.type, _, y, null)), f = c.middleware;
        return f.provideReferences ? f.provideReferences(i, s, o, a, l) : l(i, s, o, a);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return hR.languages.registerReferenceProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  yn.ReferencesFeature = sf;
});
var My = R((oa) => {
  "use strict";
  Object.defineProperty(oa, "__esModule", { value: true });
  oa.TypeDefinitionFeature = void 0;
  var gR = require("vscode"), of = G(), xs = ie(), af = class extends xs.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, of.TypeDefinitionRequest.type);
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
        let a = this._client, c = (f, h, p) => a.sendRequest(of.TypeDefinitionRequest.type, a.code2ProtocolConverter.asTextDocumentPositionParams(f, h), p).then((g) => p.isCancellationRequested ? null : a.protocol2CodeConverter.asDefinitionResult(g, p), (g) => a.handleFailedRequest(of.TypeDefinitionRequest.type, p, g, null)), l = a.middleware;
        return l.provideTypeDefinition ? l.provideTypeDefinition(i, s, o, c) : c(i, s, o);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return gR.languages.registerTypeDefinitionProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  oa.TypeDefinitionFeature = af;
});
var Iy = R((aa) => {
  "use strict";
  Object.defineProperty(aa, "__esModule", { value: true });
  aa.ImplementationFeature = void 0;
  var mR = require("vscode"), cf = G(), uf = ie(), lf = class extends uf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, cf.ImplementationRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, uf.ensure)((0, uf.ensure)(e, "textDocument"), "implementation");
      t.dynamicRegistration = true, t.linkSupport = true;
    }
    initialize(e, t) {
      let [r, i] = this.getRegistration(t, e.implementationProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideImplementation: (i, s, o) => {
        let a = this._client, c = (f, h, p) => a.sendRequest(cf.ImplementationRequest.type, a.code2ProtocolConverter.asTextDocumentPositionParams(f, h), p).then((g) => p.isCancellationRequested ? null : a.protocol2CodeConverter.asDefinitionResult(g, p), (g) => a.handleFailedRequest(cf.ImplementationRequest.type, p, g, null)), l = a.middleware;
        return l.provideImplementation ? l.provideImplementation(i, s, o, c) : c(i, s, o);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return mR.languages.registerImplementationProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  aa.ImplementationFeature = lf;
});
var Ny = R((ca) => {
  "use strict";
  Object.defineProperty(ca, "__esModule", { value: true });
  ca.ColorProviderFeature = void 0;
  var _R = require("vscode"), Ms = G(), df = ie(), ff = class extends df.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Ms.DocumentColorRequest.type);
    }
    fillClientCapabilities(e) {
      (0, df.ensure)((0, df.ensure)(e, "textDocument"), "colorProvider").dynamicRegistration = true;
    }
    initialize(e, t) {
      let [r, i] = this.getRegistration(t, e.colorProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideColorPresentations: (i, s, o) => {
        let a = this._client, c = (f, h, p) => {
          let g = { color: f, textDocument: a.code2ProtocolConverter.asTextDocumentIdentifier(h.document), range: a.code2ProtocolConverter.asRange(h.range) };
          return a.sendRequest(Ms.ColorPresentationRequest.type, g, p).then((_) => p.isCancellationRequested ? null : this._client.protocol2CodeConverter.asColorPresentations(_, p), (_) => a.handleFailedRequest(Ms.ColorPresentationRequest.type, p, _, null));
        }, l = a.middleware;
        return l.provideColorPresentations ? l.provideColorPresentations(i, s, o, c) : c(i, s, o);
      }, provideDocumentColors: (i, s) => {
        let o = this._client, a = (l, f) => {
          let h = { textDocument: o.code2ProtocolConverter.asTextDocumentIdentifier(l) };
          return o.sendRequest(Ms.DocumentColorRequest.type, h, f).then((p) => f.isCancellationRequested ? null : this._client.protocol2CodeConverter.asColorInformations(p, f), (p) => o.handleFailedRequest(Ms.DocumentColorRequest.type, f, p, null));
        }, c = o.middleware;
        return c.provideDocumentColors ? c.provideDocumentColors(i, s, a) : a(i, s);
      } };
      return [_R.languages.registerColorProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r), r];
    }
  };
  ca.ColorProviderFeature = ff;
});
var jy = R((vn) => {
  "use strict";
  var yR = vn && vn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), vR = vn && vn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), bR = vn && vn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && yR(t, e, r[i]);
      return vR(t, e), t;
    };
  })();
  Object.defineProperty(vn, "__esModule", { value: true });
  vn.CodeActionFeature = void 0;
  var CR = require("vscode"), dt = G(), wR = bR(De()), hf = ie(), pf = class extends hf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, dt.CodeActionRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, hf.ensure)((0, hf.ensure)(e, "textDocument"), "codeAction");
      t.dynamicRegistration = true, t.isPreferredSupport = true, t.disabledSupport = true, t.dataSupport = true, t.resolveSupport = { properties: ["edit", "command"] }, t.codeActionLiteralSupport = { codeActionKind: { valueSet: [dt.CodeActionKind.Empty, dt.CodeActionKind.QuickFix, dt.CodeActionKind.Refactor, dt.CodeActionKind.RefactorExtract, dt.CodeActionKind.RefactorInline, dt.CodeActionKind.RefactorMove, dt.CodeActionKind.RefactorRewrite, dt.CodeActionKind.Source, dt.CodeActionKind.SourceOrganizeImports, dt.CodeActionKind.Notebook] } }, t.honorsChangeAnnotations = true, t.documentationSupport = true, t.tagSupport = { valueSet: [dt.CodeActionTag.LLMGenerated] };
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.codeActionProvider);
      r && this.register({ id: wR.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideCodeActions: (i, s, o, a) => {
        let c = this._client, l = async (h, p, g, _) => {
          let y = { textDocument: c.code2ProtocolConverter.asTextDocumentIdentifier(h), range: c.code2ProtocolConverter.asRange(p), context: c.code2ProtocolConverter.asCodeActionContextSync(g) };
          return c.sendRequest(dt.CodeActionRequest.type, y, _).then((D) => _.isCancellationRequested || D === null || D === void 0 ? null : c.protocol2CodeConverter.asCodeActionResult(D, _), (D) => c.handleFailedRequest(dt.CodeActionRequest.type, _, D, null));
        }, f = c.middleware;
        return f.provideCodeActions ? f.provideCodeActions(i, s, o, a, l) : l(i, s, o, a);
      }, resolveCodeAction: e.resolveProvider ? (i, s) => {
        let o = this._client, a = this._client.middleware, c = async (l, f) => o.sendRequest(dt.CodeActionResolveRequest.type, o.code2ProtocolConverter.asCodeActionSync(l), f).then((h) => f.isCancellationRequested ? l : o.protocol2CodeConverter.asCodeAction(h, f), (h) => o.handleFailedRequest(dt.CodeActionResolveRequest.type, f, h, l));
        return a.resolveCodeAction ? a.resolveCodeAction(i, s, c) : c(i, s);
      } : void 0 };
      return [CR.languages.registerCodeActionsProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r, this.getMetadata(e)), r];
    }
    getMetadata(e) {
      if (!(e.codeActionKinds === void 0 && e.documentation === void 0)) return { providedCodeActionKinds: this._client.protocol2CodeConverter.asCodeActionKinds(e.codeActionKinds), documentation: this._client.protocol2CodeConverter.asCodeActionDocumentations(e.documentation) };
    }
  };
  vn.CodeActionFeature = pf;
});
var Ly = R((bn) => {
  "use strict";
  var DR = bn && bn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), SR = bn && bn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), PR = bn && bn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && DR(t, e, r[i]);
      return SR(t, e), t;
    };
  })();
  Object.defineProperty(bn, "__esModule", { value: true });
  bn.CodeLensFeature = void 0;
  var Fy = require("vscode"), ki = G(), RR = PR(De()), Is = ie(), gf = class extends Is.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, ki.CodeLensRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Is.ensure)((0, Is.ensure)(e, "textDocument"), "codeLens");
      t.dynamicRegistration = true, t.resolveSupport = { properties: ["command"] }, (0, Is.ensure)((0, Is.ensure)(e, "workspace"), "codeLens").refreshSupport = true;
    }
    initialize(e, t) {
      this._client.onRequest(ki.CodeLensRefreshRequest.type, async () => {
        for (let s of this.getAllProviders()) s.onDidChangeCodeLensEmitter.fire();
      });
      let i = this.getRegistrationOptions(t, e.codeLensProvider);
      i && this.register({ id: RR.generateUuid(), registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = new Fy.EventEmitter(), i = { onDidChangeCodeLenses: r.event, provideCodeLenses: (s, o) => {
        let a = this._client, c = (f, h) => a.sendRequest(ki.CodeLensRequest.type, a.code2ProtocolConverter.asCodeLensParams(f), h).then((p) => h.isCancellationRequested ? null : a.protocol2CodeConverter.asCodeLenses(p, h), (p) => a.handleFailedRequest(ki.CodeLensRequest.type, h, p, null)), l = a.middleware;
        return l.provideCodeLenses ? l.provideCodeLenses(s, o, c) : c(s, o);
      }, resolveCodeLens: e.resolveProvider ? (s, o) => {
        let a = this._client, c = (f, h) => a.sendRequest(ki.CodeLensResolveRequest.type, a.code2ProtocolConverter.asCodeLens(f), h).then((p) => h.isCancellationRequested ? f : a.protocol2CodeConverter.asCodeLens(p), (p) => a.handleFailedRequest(ki.CodeLensResolveRequest.type, h, p, f)), l = a.middleware;
        return l.resolveCodeLens ? l.resolveCodeLens(s, o, c) : c(s, o);
      } : void 0 };
      return [Fy.languages.registerCodeLensProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), i), { provider: i, onDidChangeCodeLensEmitter: r }];
    }
  };
  bn.CodeLensFeature = gf;
});
var Ay = R((wt) => {
  "use strict";
  var TR = wt && wt.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), OR = wt && wt.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), ER = wt && wt.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && TR(t, e, r[i]);
      return OR(t, e), t;
    };
  })();
  Object.defineProperty(wt, "__esModule", { value: true });
  wt.DocumentOnTypeFormattingFeature = wt.DocumentRangeFormattingFeature = wt.DocumentFormattingFeature = void 0;
  var ua = require("vscode"), Yt = G(), vf = ER(De()), er = ie(), $i;
  (function(n2) {
    function e(t) {
      let r = ua.workspace.getConfiguration("files", t);
      return { trimTrailingWhitespace: r.get("trimTrailingWhitespace"), trimFinalNewlines: r.get("trimFinalNewlines"), insertFinalNewline: r.get("insertFinalNewline") };
    }
    n2.fromConfiguration = e;
  })($i || ($i = {}));
  var mf = class extends er.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Yt.DocumentFormattingRequest.type);
    }
    fillClientCapabilities(e) {
      (0, er.ensure)((0, er.ensure)(e, "textDocument"), "formatting").dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.documentFormattingProvider);
      r && this.register({ id: vf.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideDocumentFormattingEdits: (i, s, o) => {
        let a = this._client, c = (f, h, p) => {
          let g = { textDocument: a.code2ProtocolConverter.asTextDocumentIdentifier(f), options: a.code2ProtocolConverter.asFormattingOptions(h, $i.fromConfiguration(f)) };
          return a.sendRequest(Yt.DocumentFormattingRequest.type, g, p).then((_) => p.isCancellationRequested ? null : a.protocol2CodeConverter.asTextEdits(_, p), (_) => a.handleFailedRequest(Yt.DocumentFormattingRequest.type, p, _, null));
        }, l = a.middleware;
        return l.provideDocumentFormattingEdits ? l.provideDocumentFormattingEdits(i, s, o, c) : c(i, s, o);
      } };
      return [ua.languages.registerDocumentFormattingEditProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r), r];
    }
  };
  wt.DocumentFormattingFeature = mf;
  var _f = class extends er.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Yt.DocumentRangeFormattingRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, er.ensure)((0, er.ensure)(e, "textDocument"), "rangeFormatting");
      t.dynamicRegistration = true, t.rangesSupport = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.documentRangeFormattingProvider);
      r && this.register({ id: vf.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideDocumentRangeFormattingEdits: (i, s, o, a) => {
        let c = this._client, l = (h, p, g, _) => {
          let y = { textDocument: c.code2ProtocolConverter.asTextDocumentIdentifier(h), range: c.code2ProtocolConverter.asRange(p), options: c.code2ProtocolConverter.asFormattingOptions(g, $i.fromConfiguration(h)) };
          return c.sendRequest(Yt.DocumentRangeFormattingRequest.type, y, _).then((D) => _.isCancellationRequested ? null : c.protocol2CodeConverter.asTextEdits(D, _), (D) => c.handleFailedRequest(Yt.DocumentRangeFormattingRequest.type, _, D, null));
        }, f = c.middleware;
        return f.provideDocumentRangeFormattingEdits ? f.provideDocumentRangeFormattingEdits(i, s, o, a, l) : l(i, s, o, a);
      } };
      return e.rangesSupport && (r.provideDocumentRangesFormattingEdits = (i, s, o, a) => {
        let c = this._client, l = (h, p, g, _) => {
          let y = { textDocument: c.code2ProtocolConverter.asTextDocumentIdentifier(h), ranges: c.code2ProtocolConverter.asRanges(p), options: c.code2ProtocolConverter.asFormattingOptions(g, $i.fromConfiguration(h)) };
          return c.sendRequest(Yt.DocumentRangesFormattingRequest.type, y, _).then((D) => _.isCancellationRequested ? null : c.protocol2CodeConverter.asTextEdits(D, _), (D) => c.handleFailedRequest(Yt.DocumentRangesFormattingRequest.type, _, D, null));
        }, f = c.middleware;
        return f.provideDocumentRangesFormattingEdits ? f.provideDocumentRangesFormattingEdits(i, s, o, a, l) : l(i, s, o, a);
      }), [ua.languages.registerDocumentRangeFormattingEditProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r), r];
    }
  };
  wt.DocumentRangeFormattingFeature = _f;
  var yf = class extends er.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Yt.DocumentOnTypeFormattingRequest.type);
    }
    fillClientCapabilities(e) {
      (0, er.ensure)((0, er.ensure)(e, "textDocument"), "onTypeFormatting").dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.documentOnTypeFormattingProvider);
      r && this.register({ id: vf.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideOnTypeFormattingEdits: (s, o, a, c, l) => {
        let f = this._client, h = (g, _, y, D, T) => {
          let w = { textDocument: f.code2ProtocolConverter.asTextDocumentIdentifier(g), position: f.code2ProtocolConverter.asPosition(_), ch: y, options: f.code2ProtocolConverter.asFormattingOptions(D, $i.fromConfiguration(g)) };
          return f.sendRequest(Yt.DocumentOnTypeFormattingRequest.type, w, T).then((x) => T.isCancellationRequested ? null : f.protocol2CodeConverter.asTextEdits(x, T), (x) => f.handleFailedRequest(Yt.DocumentOnTypeFormattingRequest.type, T, x, null));
        }, p = f.middleware;
        return p.provideOnTypeFormattingEdits ? p.provideOnTypeFormattingEdits(s, o, a, c, l, h) : h(s, o, a, c, l);
      } }, i = e.moreTriggerCharacter || [];
      return [ua.languages.registerOnTypeFormattingEditProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r, e.firstTriggerCharacter, ...i), r];
    }
  };
  wt.DocumentOnTypeFormattingFeature = yf;
});
var Uy = R((Cn) => {
  "use strict";
  var qR = Cn && Cn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), xR = Cn && Cn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), $y = Cn && Cn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && qR(t, e, r[i]);
      return xR(t, e), t;
    };
  })();
  Object.defineProperty(Cn, "__esModule", { value: true });
  Cn.RenameFeature = void 0;
  var MR = require("vscode"), Gr = G(), IR = $y(De()), ky = $y(At()), bf = ie(), Cf = class extends bf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Gr.RenameRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, bf.ensure)((0, bf.ensure)(e, "textDocument"), "rename");
      t.dynamicRegistration = true, t.prepareSupport = true, t.prepareSupportDefaultBehavior = Gr.PrepareSupportDefaultBehavior.Identifier, t.honorsChangeAnnotations = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.renameProvider);
      r && (ky.boolean(e.renameProvider) && (r.prepareProvider = false), this.register({ id: IR.generateUuid(), registerOptions: r }));
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideRenameEdits: (i, s, o, a) => {
        let c = this._client, l = async (h, p, g, _) => {
          let y = { textDocument: c.code2ProtocolConverter.asTextDocumentIdentifier(h), position: c.code2ProtocolConverter.asPosition(p), newName: g }, D = null;
          try {
            D = await c.sendRequest(Gr.RenameRequest.type, y, _);
          } catch (w) {
            return c.handleFailedRequest(Gr.RenameRequest.type, _, w, null, false);
          }
          if (_.isCancellationRequested || D === null) return null;
          let T = await c.protocol2CodeConverter.asWorkspaceEdit(D, _);
          if (_.isCancellationRequested) return null;
          if (!c.validateWorkspaceEdit(D)) throw new Error("The rename edit returned from the server is not valid anymore and cannot be applied.");
          return T;
        }, f = c.middleware;
        return f.provideRenameEdits ? f.provideRenameEdits(i, s, o, a, l) : l(i, s, o, a);
      }, prepareRename: e.prepareProvider ? (i, s, o) => {
        let a = this._client, c = (f, h, p) => {
          let g = { textDocument: a.code2ProtocolConverter.asTextDocumentIdentifier(f), position: a.code2ProtocolConverter.asPosition(h) };
          return a.sendRequest(Gr.PrepareRenameRequest.type, g, p).then((_) => p.isCancellationRequested ? null : Gr.Range.is(_) ? a.protocol2CodeConverter.asRange(_) : this.isDefaultBehavior(_) ? _.defaultBehavior === true ? null : Promise.reject(new Error("The element can't be renamed.")) : _ && Gr.Range.is(_.range) ? { range: a.protocol2CodeConverter.asRange(_.range), placeholder: _.placeholder } : Promise.reject(new Error("The element can't be renamed.")), (_) => {
            throw typeof _.message == "string" ? new Error(_.message) : new Error("The element can't be renamed.");
          });
        }, l = a.middleware;
        return l.prepareRename ? l.prepareRename(i, s, o, c) : c(i, s, o);
      } : void 0 };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return MR.languages.registerRenameProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
    isDefaultBehavior(e) {
      let t = e;
      return t && ky.boolean(t.defaultBehavior);
    }
  };
  Cn.RenameFeature = Cf;
});
var Hy = R((wn) => {
  "use strict";
  var NR = wn && wn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), jR = wn && wn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), FR = wn && wn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && NR(t, e, r[i]);
      return jR(t, e), t;
    };
  })();
  Object.defineProperty(wn, "__esModule", { value: true });
  wn.DocumentLinkFeature = void 0;
  var LR = require("vscode"), Ns = G(), wf = ie(), AR = FR(De()), Df = class extends wf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Ns.DocumentLinkRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, wf.ensure)((0, wf.ensure)(e, "textDocument"), "documentLink");
      t.dynamicRegistration = true, t.tooltipSupport = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.documentLinkProvider);
      r && this.register({ id: AR.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideDocumentLinks: (i, s) => {
        let o = this._client, a = (l, f) => o.sendRequest(Ns.DocumentLinkRequest.type, o.code2ProtocolConverter.asDocumentLinkParams(l), f).then((h) => f.isCancellationRequested ? null : o.protocol2CodeConverter.asDocumentLinks(h, f), (h) => o.handleFailedRequest(Ns.DocumentLinkRequest.type, f, h, null)), c = o.middleware;
        return c.provideDocumentLinks ? c.provideDocumentLinks(i, s, a) : a(i, s);
      }, resolveDocumentLink: e.resolveProvider ? (i, s) => {
        let o = this._client, a = (l, f) => o.sendRequest(Ns.DocumentLinkResolveRequest.type, o.code2ProtocolConverter.asDocumentLink(l), f).then((h) => f.isCancellationRequested ? l : o.protocol2CodeConverter.asDocumentLink(h), (h) => o.handleFailedRequest(Ns.DocumentLinkResolveRequest.type, f, h, l)), c = o.middleware;
        return c.resolveDocumentLink ? c.resolveDocumentLink(i, s, a) : a(i, s);
      } : void 0 };
      return [LR.languages.registerDocumentLinkProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r), r];
    }
  };
  wn.DocumentLinkFeature = Df;
});
var zy = R((Dn) => {
  "use strict";
  var kR = Dn && Dn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), $R = Dn && Dn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), UR = Dn && Dn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && kR(t, e, r[i]);
      return $R(t, e), t;
    };
  })();
  Object.defineProperty(Dn, "__esModule", { value: true });
  Dn.ExecuteCommandFeature = void 0;
  var HR = require("vscode"), Sf = G(), WR = UR(De()), Wy = ie(), Pf = class {
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
      (0, Wy.ensure)((0, Wy.ensure)(e, "workspace"), "executeCommand").dynamicRegistration = true;
    }
    initialize(e) {
      e.executeCommandProvider && this.register({ id: WR.generateUuid(), registerOptions: Object.assign({}, e.executeCommandProvider) });
    }
    register(e) {
      let t = this._client, r = t.middleware, i = (s, o) => {
        let a = { command: s, arguments: o };
        return t.sendRequest(Sf.ExecuteCommandRequest.type, a).then(void 0, (c) => t.handleFailedRequest(Sf.ExecuteCommandRequest.type, void 0, c, void 0));
      };
      if (e.registerOptions.commands) {
        let s = [];
        for (let o of e.registerOptions.commands) s.push(HR.commands.registerCommand(o, (...a) => r.executeCommand ? r.executeCommand(o, a, i) : i(o, a)));
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
  Dn.ExecuteCommandFeature = Pf;
});
var By = R((la) => {
  "use strict";
  Object.defineProperty(la, "__esModule", { value: true });
  la.FoldingRangeFeature = void 0;
  var Ky = require("vscode"), Xr = G(), js = ie(), Rf = class extends js.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Xr.FoldingRangeRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, js.ensure)((0, js.ensure)(e, "textDocument"), "foldingRange");
      t.dynamicRegistration = true, t.rangeLimit = 5e3, t.lineFoldingOnly = true, t.foldingRangeKind = { valueSet: [Xr.FoldingRangeKind.Comment, Xr.FoldingRangeKind.Imports, Xr.FoldingRangeKind.Region] }, t.foldingRange = { collapsedText: false }, (0, js.ensure)((0, js.ensure)(e, "workspace"), "foldingRange").refreshSupport = true;
    }
    initialize(e, t) {
      this._client.onRequest(Xr.FoldingRangeRefreshRequest.type, async () => {
        for (let s of this.getAllProviders()) s.onDidChangeFoldingRange.fire();
      });
      let [r, i] = this.getRegistration(t, e.foldingRangeProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = new Ky.EventEmitter(), i = { onDidChangeFoldingRanges: r.event, provideFoldingRanges: (s, o, a) => {
        let c = this._client, l = (h, p, g) => {
          let _ = { textDocument: c.code2ProtocolConverter.asTextDocumentIdentifier(h) };
          return c.sendRequest(Xr.FoldingRangeRequest.type, _, g).then((y) => g.isCancellationRequested ? null : c.protocol2CodeConverter.asFoldingRanges(y, g), (y) => c.handleFailedRequest(Xr.FoldingRangeRequest.type, g, y, null));
        }, f = c.middleware;
        return f.provideFoldingRanges ? f.provideFoldingRanges(s, o, a, l) : l(s, o, a);
      } };
      return [Ky.languages.registerFoldingRangeProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), i), { provider: i, onDidChangeFoldingRange: r }];
    }
  };
  la.FoldingRangeFeature = Rf;
});
var Vy = R((da) => {
  "use strict";
  Object.defineProperty(da, "__esModule", { value: true });
  da.DeclarationFeature = void 0;
  var zR = require("vscode"), Tf = G(), Of = ie(), Ef = class extends Of.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Tf.DeclarationRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Of.ensure)((0, Of.ensure)(e, "textDocument"), "declaration");
      t.dynamicRegistration = true, t.linkSupport = true;
    }
    initialize(e, t) {
      let [r, i] = this.getRegistration(t, e.declarationProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideDeclaration: (i, s, o) => {
        let a = this._client, c = (f, h, p) => a.sendRequest(Tf.DeclarationRequest.type, a.code2ProtocolConverter.asTextDocumentPositionParams(f, h), p).then((g) => p.isCancellationRequested ? null : a.protocol2CodeConverter.asDeclarationResult(g, p), (g) => a.handleFailedRequest(Tf.DeclarationRequest.type, p, g, null)), l = a.middleware;
        return l.provideDeclaration ? l.provideDeclaration(i, s, o, c) : c(i, s, o);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return zR.languages.registerDeclarationProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  da.DeclarationFeature = Ef;
});
var Gy = R((fa) => {
  "use strict";
  Object.defineProperty(fa, "__esModule", { value: true });
  fa.SelectionRangeFeature = void 0;
  var KR = require("vscode"), qf = G(), xf = ie(), Mf = class extends xf.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, qf.SelectionRangeRequest.type);
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
        let a = this._client, c = async (f, h, p) => {
          let g = { textDocument: a.code2ProtocolConverter.asTextDocumentIdentifier(f), positions: a.code2ProtocolConverter.asPositionsSync(h, p) };
          return a.sendRequest(qf.SelectionRangeRequest.type, g, p).then((_) => p.isCancellationRequested ? null : a.protocol2CodeConverter.asSelectionRanges(_, p), (_) => a.handleFailedRequest(qf.SelectionRangeRequest.type, p, _, null));
        }, l = a.middleware;
        return l.provideSelectionRanges ? l.provideSelectionRanges(i, s, o, c) : c(i, s, o);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return KR.languages.registerSelectionRangeProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  fa.SelectionRangeFeature = Mf;
});
var Xy = R((ha) => {
  "use strict";
  Object.defineProperty(ha, "__esModule", { value: true });
  ha.CallHierarchyFeature = void 0;
  var BR = require("vscode"), Jr = G(), If = ie(), Nf = class {
    client;
    middleware;
    constructor(e) {
      this.client = e, this.middleware = e.middleware;
    }
    prepareCallHierarchy(e, t, r) {
      let i = this.client, s = this.middleware, o = (a, c, l) => {
        let f = i.code2ProtocolConverter.asTextDocumentPositionParams(a, c);
        return i.sendRequest(Jr.CallHierarchyPrepareRequest.type, f, l).then((h) => l.isCancellationRequested ? null : i.protocol2CodeConverter.asCallHierarchyItems(h, l), (h) => i.handleFailedRequest(Jr.CallHierarchyPrepareRequest.type, l, h, null));
      };
      return s.prepareCallHierarchy ? s.prepareCallHierarchy(e, t, r, o) : o(e, t, r);
    }
    provideCallHierarchyIncomingCalls(e, t) {
      let r = this.client, i = this.middleware, s = (o, a) => {
        let c = { item: r.code2ProtocolConverter.asCallHierarchyItem(o) };
        return r.sendRequest(Jr.CallHierarchyIncomingCallsRequest.type, c, a).then((l) => a.isCancellationRequested ? null : r.protocol2CodeConverter.asCallHierarchyIncomingCalls(l, a), (l) => r.handleFailedRequest(Jr.CallHierarchyIncomingCallsRequest.type, a, l, null));
      };
      return i.provideCallHierarchyIncomingCalls ? i.provideCallHierarchyIncomingCalls(e, t, s) : s(e, t);
    }
    provideCallHierarchyOutgoingCalls(e, t) {
      let r = this.client, i = this.middleware, s = (o, a) => {
        let c = { item: r.code2ProtocolConverter.asCallHierarchyItem(o) };
        return r.sendRequest(Jr.CallHierarchyOutgoingCallsRequest.type, c, a).then((l) => a.isCancellationRequested ? null : r.protocol2CodeConverter.asCallHierarchyOutgoingCalls(l, a), (l) => r.handleFailedRequest(Jr.CallHierarchyOutgoingCallsRequest.type, a, l, null));
      };
      return i.provideCallHierarchyOutgoingCalls ? i.provideCallHierarchyOutgoingCalls(e, t, s) : s(e, t);
    }
  }, jf = class extends If.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Jr.CallHierarchyPrepareRequest.type);
    }
    fillClientCapabilities(e) {
      let t = e, r = (0, If.ensure)((0, If.ensure)(t, "textDocument"), "callHierarchy");
      r.dynamicRegistration = true;
    }
    initialize(e, t) {
      let [r, i] = this.getRegistration(t, e.callHierarchyProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = this._client, r = new Nf(t);
      return [BR.languages.registerCallHierarchyProvider(this._client.protocol2CodeConverter.asDocumentSelector(e.documentSelector), r), r];
    }
  };
  ha.CallHierarchyFeature = jf;
});
var Qy = R((Sn) => {
  "use strict";
  var VR = Sn && Sn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), GR = Sn && Sn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), Jy = Sn && Sn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && VR(t, e, r[i]);
      return GR(t, e), t;
    };
  })();
  Object.defineProperty(Sn, "__esModule", { value: true });
  Sn.SemanticTokensFeature = void 0;
  var pa = Jy(require("vscode")), J = G(), Fs = ie(), XR = Jy(At()), Ff = class extends Fs.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, J.SemanticTokensRegistrationType.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Fs.ensure)((0, Fs.ensure)(e, "textDocument"), "semanticTokens");
      t.dynamicRegistration = true, t.tokenTypes = [J.SemanticTokenTypes.namespace, J.SemanticTokenTypes.type, J.SemanticTokenTypes.class, J.SemanticTokenTypes.enum, J.SemanticTokenTypes.interface, J.SemanticTokenTypes.struct, J.SemanticTokenTypes.typeParameter, J.SemanticTokenTypes.parameter, J.SemanticTokenTypes.variable, J.SemanticTokenTypes.property, J.SemanticTokenTypes.enumMember, J.SemanticTokenTypes.event, J.SemanticTokenTypes.function, J.SemanticTokenTypes.method, J.SemanticTokenTypes.macro, J.SemanticTokenTypes.keyword, J.SemanticTokenTypes.comment, J.SemanticTokenTypes.string, J.SemanticTokenTypes.number, J.SemanticTokenTypes.regexp, J.SemanticTokenTypes.operator, J.SemanticTokenTypes.decorator, J.SemanticTokenTypes.label], t.tokenModifiers = [J.SemanticTokenModifiers.declaration, J.SemanticTokenModifiers.definition, J.SemanticTokenModifiers.readonly, J.SemanticTokenModifiers.static, J.SemanticTokenModifiers.deprecated, J.SemanticTokenModifiers.abstract, J.SemanticTokenModifiers.async, J.SemanticTokenModifiers.modification, J.SemanticTokenModifiers.documentation, J.SemanticTokenModifiers.defaultLibrary], t.formats = [J.TokenFormat.Relative], t.requests = { range: true, full: { delta: true } }, t.multilineTokenSupport = false, t.overlappingTokenSupport = false, t.serverCancelSupport = true, t.augmentsSyntaxTokens = true, (0, Fs.ensure)((0, Fs.ensure)(e, "workspace"), "semanticTokens").refreshSupport = true;
    }
    initialize(e, t) {
      this._client.onRequest(J.SemanticTokensRefreshRequest.type, async () => {
        for (let o of this.getAllProviders()) o.onDidChangeSemanticTokensEmitter.fire();
      });
      let [i, s] = this.getRegistration(t, e.semanticTokensProvider);
      !i || !s || this.register({ id: i, registerOptions: s });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = XR.boolean(e.full) ? e.full : e.full !== void 0, i = e.full !== void 0 && typeof e.full != "boolean" && e.full.delta === true, s = new pa.EventEmitter(), o = r ? { onDidChangeSemanticTokens: s.event, provideDocumentSemanticTokens: (g, _) => {
        let y = this._client, D = y.middleware, T = (w, x) => {
          let j = { textDocument: y.code2ProtocolConverter.asTextDocumentIdentifier(w) };
          return y.sendRequest(J.SemanticTokensRequest.type, j, x).then((I) => x.isCancellationRequested ? null : y.protocol2CodeConverter.asSemanticTokens(I, x), (I) => y.handleFailedRequest(J.SemanticTokensRequest.type, x, I, null));
        };
        return D.provideDocumentSemanticTokens ? D.provideDocumentSemanticTokens(g, _, T) : T(g, _);
      }, provideDocumentSemanticTokensEdits: i ? (g, _, y) => {
        let D = this._client, T = D.middleware, w = (x, j, I) => {
          let Y = { textDocument: D.code2ProtocolConverter.asTextDocumentIdentifier(x), previousResultId: j };
          return D.sendRequest(J.SemanticTokensDeltaRequest.type, Y, I).then(async (re) => I.isCancellationRequested ? null : J.SemanticTokens.is(re) ? await D.protocol2CodeConverter.asSemanticTokens(re, I) : await D.protocol2CodeConverter.asSemanticTokensEdits(re, I), (re) => D.handleFailedRequest(J.SemanticTokensDeltaRequest.type, I, re, null));
        };
        return T.provideDocumentSemanticTokensEdits ? T.provideDocumentSemanticTokensEdits(g, _, y, w) : w(g, _, y);
      } : void 0 } : void 0, c = e.range === true ? { onDidChangeSemanticTokens: s.event, provideDocumentRangeSemanticTokens: (g, _, y) => {
        let D = this._client, T = D.middleware, w = (x, j, I) => {
          let Y = { textDocument: D.code2ProtocolConverter.asTextDocumentIdentifier(x), range: D.code2ProtocolConverter.asRange(j) };
          return D.sendRequest(J.SemanticTokensRangeRequest.type, Y, I).then((re) => I.isCancellationRequested ? null : D.protocol2CodeConverter.asSemanticTokens(re, I), (re) => D.handleFailedRequest(J.SemanticTokensRangeRequest.type, I, re, null));
        };
        return T.provideDocumentRangeSemanticTokens ? T.provideDocumentRangeSemanticTokens(g, _, y, w) : w(g, _, y);
      } } : void 0, l = [], f = this._client, h = f.protocol2CodeConverter.asSemanticTokensLegend(e.legend), p = f.protocol2CodeConverter.asDocumentSelector(t);
      return o !== void 0 && l.push(pa.languages.registerDocumentSemanticTokensProvider(p, o, h)), c !== void 0 && l.push(pa.languages.registerDocumentRangeSemanticTokensProvider(p, c, h)), [new pa.Disposable(() => l.forEach((g) => g.dispose())), { range: c, full: o, onDidChangeSemanticTokensEmitter: s }];
    }
  };
  Sn.SemanticTokensFeature = Ff;
});
var Zy = R((Pn) => {
  "use strict";
  var JR = Pn && Pn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), QR = Pn && Pn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), Yy = Pn && Pn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && JR(t, e, r[i]);
      return QR(t, e), t;
    };
  })();
  Object.defineProperty(Pn, "__esModule", { value: true });
  Pn.LinkedEditingFeature = void 0;
  var YR = Yy(require("vscode")), Lf = Yy(G()), Af = ie(), kf = class extends Af.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Lf.LinkedEditingRangeRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, Af.ensure)((0, Af.ensure)(e, "textDocument"), "linkedEditingRange");
      t.dynamicRegistration = true;
    }
    initialize(e, t) {
      let [r, i] = this.getRegistration(t, e.linkedEditingRangeProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideLinkedEditingRanges: (i, s, o) => {
        let a = this._client, c = (f, h, p) => a.sendRequest(Lf.LinkedEditingRangeRequest.type, a.code2ProtocolConverter.asTextDocumentPositionParams(f, h), p).then((g) => p.isCancellationRequested ? null : a.protocol2CodeConverter.asLinkedEditingRanges(g, p), (g) => a.handleFailedRequest(Lf.LinkedEditingRangeRequest.type, p, g, null)), l = a.middleware;
        return l.provideLinkedEditingRange ? l.provideLinkedEditingRange(i, s, o, c) : c(i, s, o);
      } };
      return [this.registerProvider(t, r), r];
    }
    registerProvider(e, t) {
      return YR.languages.registerLinkedEditingRangeProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  Pn.LinkedEditingFeature = kf;
});
var ev = R((ga) => {
  "use strict";
  Object.defineProperty(ga, "__esModule", { value: true });
  ga.TypeHierarchyFeature = void 0;
  var ZR = require("vscode"), Qr = G(), $f = ie(), Uf = class {
    client;
    middleware;
    constructor(e) {
      this.client = e, this.middleware = e.middleware;
    }
    prepareTypeHierarchy(e, t, r) {
      let i = this.client, s = this.middleware, o = (a, c, l) => {
        let f = i.code2ProtocolConverter.asTextDocumentPositionParams(a, c);
        return i.sendRequest(Qr.TypeHierarchyPrepareRequest.type, f, l).then((h) => l.isCancellationRequested ? null : i.protocol2CodeConverter.asTypeHierarchyItems(h, l), (h) => i.handleFailedRequest(Qr.TypeHierarchyPrepareRequest.type, l, h, null));
      };
      return s.prepareTypeHierarchy ? s.prepareTypeHierarchy(e, t, r, o) : o(e, t, r);
    }
    provideTypeHierarchySupertypes(e, t) {
      let r = this.client, i = this.middleware, s = (o, a) => {
        let c = { item: r.code2ProtocolConverter.asTypeHierarchyItem(o) };
        return r.sendRequest(Qr.TypeHierarchySupertypesRequest.type, c, a).then((l) => a.isCancellationRequested ? null : r.protocol2CodeConverter.asTypeHierarchyItems(l, a), (l) => r.handleFailedRequest(Qr.TypeHierarchySupertypesRequest.type, a, l, null));
      };
      return i.provideTypeHierarchySupertypes ? i.provideTypeHierarchySupertypes(e, t, s) : s(e, t);
    }
    provideTypeHierarchySubtypes(e, t) {
      let r = this.client, i = this.middleware, s = (o, a) => {
        let c = { item: r.code2ProtocolConverter.asTypeHierarchyItem(o) };
        return r.sendRequest(Qr.TypeHierarchySubtypesRequest.type, c, a).then((l) => a.isCancellationRequested ? null : r.protocol2CodeConverter.asTypeHierarchyItems(l, a), (l) => r.handleFailedRequest(Qr.TypeHierarchySubtypesRequest.type, a, l, null));
      };
      return i.provideTypeHierarchySubtypes ? i.provideTypeHierarchySubtypes(e, t, s) : s(e, t);
    }
  }, Hf = class extends $f.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Qr.TypeHierarchyPrepareRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, $f.ensure)((0, $f.ensure)(e, "textDocument"), "typeHierarchy");
      t.dynamicRegistration = true;
    }
    initialize(e, t) {
      let [r, i] = this.getRegistration(t, e.typeHierarchyProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = this._client, r = new Uf(t);
      return [ZR.languages.registerTypeHierarchyProvider(t.protocol2CodeConverter.asDocumentSelector(e.documentSelector), r), r];
    }
  };
  ga.TypeHierarchyFeature = Hf;
});
var nv = R((_a) => {
  "use strict";
  Object.defineProperty(_a, "__esModule", { value: true });
  _a.InlineValueFeature = void 0;
  var tv = require("vscode"), ma = G(), Ls = ie(), Wf = class extends Ls.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, ma.InlineValueRequest.type);
    }
    fillClientCapabilities(e) {
      (0, Ls.ensure)((0, Ls.ensure)(e, "textDocument"), "inlineValue").dynamicRegistration = true, (0, Ls.ensure)((0, Ls.ensure)(e, "workspace"), "inlineValue").refreshSupport = true;
    }
    initialize(e, t) {
      this._client.onRequest(ma.InlineValueRefreshRequest.type, async () => {
        for (let s of this.getAllProviders()) s.onDidChangeInlineValues.fire();
      });
      let [r, i] = this.getRegistration(t, e.inlineValueProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = new tv.EventEmitter(), i = { onDidChangeInlineValues: r.event, provideInlineValues: (s, o, a, c) => {
        let l = this._client, f = (p, g, _, y) => {
          let D = { textDocument: l.code2ProtocolConverter.asTextDocumentIdentifier(p), range: l.code2ProtocolConverter.asRange(g), context: l.code2ProtocolConverter.asInlineValueContext(_) };
          return l.sendRequest(ma.InlineValueRequest.type, D, y).then((T) => y.isCancellationRequested ? null : l.protocol2CodeConverter.asInlineValues(T, y), (T) => l.handleFailedRequest(ma.InlineValueRequest.type, y, T, null));
        }, h = l.middleware;
        return h.provideInlineValues ? h.provideInlineValues(s, o, a, c, f) : f(s, o, a, c);
      } };
      return [this.registerProvider(t, i), { provider: i, onDidChangeInlineValues: r }];
    }
    registerProvider(e, t) {
      return tv.languages.registerInlineValuesProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  _a.InlineValueFeature = Wf;
});
var iv = R((ya) => {
  "use strict";
  Object.defineProperty(ya, "__esModule", { value: true });
  ya.InlayHintsFeature = void 0;
  var rv = require("vscode"), Ui = G(), As = ie(), zf = class extends As.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, Ui.InlayHintRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, As.ensure)((0, As.ensure)(e, "textDocument"), "inlayHint");
      t.dynamicRegistration = true, t.resolveSupport = { properties: ["tooltip", "textEdits", "label.tooltip", "label.location", "label.command"] }, (0, As.ensure)((0, As.ensure)(e, "workspace"), "inlayHint").refreshSupport = true;
    }
    initialize(e, t) {
      this._client.onRequest(Ui.InlayHintRefreshRequest.type, async () => {
        for (let s of this.getAllProviders()) s.onDidChangeInlayHints.fire();
      });
      let [r, i] = this.getRegistration(t, e.inlayHintProvider);
      !r || !i || this.register({ id: r, registerOptions: i });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = new rv.EventEmitter(), i = { onDidChangeInlayHints: r.event, provideInlayHints: (s, o, a) => {
        let c = this._client, l = async (h, p, g) => {
          let _ = { textDocument: c.code2ProtocolConverter.asTextDocumentIdentifier(h), range: c.code2ProtocolConverter.asRange(p) };
          try {
            let y = await c.sendRequest(Ui.InlayHintRequest.type, _, g);
            return g.isCancellationRequested ? null : c.protocol2CodeConverter.asInlayHints(y, g);
          } catch (y) {
            return c.handleFailedRequest(Ui.InlayHintRequest.type, g, y, null);
          }
        }, f = c.middleware;
        return f.provideInlayHints ? f.provideInlayHints(s, o, a, l) : l(s, o, a);
      } };
      return i.resolveInlayHint = e.resolveProvider === true ? (s, o) => {
        let a = this._client, c = async (f, h) => {
          try {
            let p = await a.sendRequest(Ui.InlayHintResolveRequest.type, a.code2ProtocolConverter.asInlayHint(f), h);
            if (h.isCancellationRequested) return null;
            let g = a.protocol2CodeConverter.asInlayHint(p, h);
            return h.isCancellationRequested ? null : g;
          } catch (p) {
            return a.handleFailedRequest(Ui.InlayHintResolveRequest.type, h, p, null);
          }
        }, l = a.middleware;
        return l.resolveInlayHint ? l.resolveInlayHint(s, o, c) : c(s, o);
      } : void 0, [this.registerProvider(t, i), { provider: i, onDidChangeInlayHints: r }];
    }
    registerProvider(e, t) {
      return rv.languages.registerInlayHintsProvider(this._client.protocol2CodeConverter.asDocumentSelector(e), t);
    }
  };
  ya.InlayHintsFeature = zf;
});
var sv = R((Zt) => {
  "use strict";
  var eT = Zt && Zt.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), tT = Zt && Zt.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), nT = Zt && Zt.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && eT(t, e, r[i]);
      return tT(t, e), t;
    };
  })();
  Object.defineProperty(Zt, "__esModule", { value: true });
  Zt.WorkspaceFoldersFeature = void 0;
  Zt.arrayDiff = Bf;
  var rT = nT(De()), va = require("vscode"), ks = G();
  function Kf(n2, e) {
    if (n2 != null) return n2[e];
  }
  function Bf(n2, e) {
    return n2.filter((t) => e.indexOf(t) < 0);
  }
  var Vf = class {
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
      return ks.DidChangeWorkspaceFoldersNotification.type;
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
      t.onRequest(ks.WorkspaceFoldersRequest.type, (s) => {
        let o = () => {
          let c = va.workspace.workspaceFolders;
          return c === void 0 ? null : c.map((f) => this.asProtocol(f));
        }, a = t.middleware.workspace;
        return a && a.workspaceFolders ? a.workspaceFolders(s, o) : o(s);
      });
      let r = Kf(Kf(Kf(e, "workspace"), "workspaceFolders"), "changeNotifications"), i;
      typeof r == "string" ? i = r : r === true && (i = rT.generateUuid()), i && this.register({ id: i, registerOptions: void 0 });
    }
    sendInitialEvent(e) {
      let t;
      if (this._initialFolders && e) {
        let r = Bf(this._initialFolders, e), i = Bf(e, this._initialFolders);
        (i.length > 0 || r.length > 0) && (t = this.doSendEvent(i, r));
      } else this._initialFolders ? t = this.doSendEvent([], this._initialFolders) : e && (t = this.doSendEvent(e, []));
      t !== void 0 && t.catch((r) => {
        this._client.error(`Sending notification ${ks.DidChangeWorkspaceFoldersNotification.type.method} failed`, r);
      });
    }
    doSendEvent(e, t) {
      let r = { event: { added: e.map((i) => this.asProtocol(i)), removed: t.map((i) => this.asProtocol(i)) } };
      return this._client.sendNotification(ks.DidChangeWorkspaceFoldersNotification.type, r);
    }
    register(e) {
      let t = e.id, r = this._client, i = va.workspace.onDidChangeWorkspaceFolders((s) => {
        let o = (l) => this.doSendEvent(l.added, l.removed), a = r.middleware.workspace;
        (a && a.didChangeWorkspaceFolders ? a.didChangeWorkspaceFolders(s, o) : o(s)).catch((l) => {
          this._client.error(`Sending notification ${ks.DidChangeWorkspaceFoldersNotification.type.method} failed`, l);
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
  Zt.WorkspaceFoldersFeature = Vf;
});
var cv = R((Ke) => {
  "use strict";
  var iT = Ke && Ke.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), sT = Ke && Ke.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), wa = Ke && Ke.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && iT(t, e, r[i]);
      return sT(t, e), t;
    };
  })();
  Object.defineProperty(Ke, "__esModule", { value: true });
  Ke.WillDeleteFilesFeature = Ke.WillRenameFilesFeature = Ke.WillCreateFilesFeature = Ke.DidDeleteFilesFeature = Ke.DidRenameFilesFeature = Ke.DidCreateFilesFeature = void 0;
  var Ht = wa(require("vscode")), oT = wa(yd()), tr = wa(G()), aT = wa(De());
  function ov(n2, e) {
    return n2[e] === void 0 && (n2[e] = {}), n2[e];
  }
  function cT(n2, e) {
    return n2[e];
  }
  function av(n2, e, t) {
    n2[e] = t;
  }
  var $s = class n2 {
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
      let t = ov(ov(e, "workspace"), "fileOperations");
      av(t, "dynamicRegistration", true), av(t, this._clientCapability, true);
    }
    initialize(e) {
      let t = e.workspace?.fileOperations, r = t !== void 0 ? cT(t, this._serverCapability) : void 0;
      if (r?.filters !== void 0) try {
        this.register({ id: aT.generateUuid(), registerOptions: { filters: r.filters } });
      } catch (i) {
        this._client.warn(`Ignoring invalid glob pattern for ${this._serverCapability} registration: ${i}`);
      }
    }
    register(e) {
      this._listener || (this._listener = this._event(this.send, this));
      let t = e.registerOptions.filters.map((r) => {
        let i = new oT.Minimatch(r.pattern.glob, n2.asMinimatchOptions(r.pattern.options));
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
      return n2.getFileType(e);
    }
    async filter(e, t) {
      let r = await Promise.all(e.files.map(async (s) => {
        let o = t(s), a = o.fsPath.replace(/\\/g, "/");
        for (let c of this._filters.values()) for (let l of c) if (!(l.scheme !== void 0 && l.scheme !== o.scheme)) {
          if (l.matcher.match(a)) {
            if (l.kind === void 0) return true;
            let f = await this.getFileType(o);
            if (f === void 0) return this._client.info(`Unable to determine file type for ${o.toString()}. Treating as a match.`), true;
            if (f === Ht.FileType.File && l.kind === tr.FileOperationPatternKind.file || f === Ht.FileType.Directory && l.kind === tr.FileOperationPatternKind.folder) return true;
          } else if (l.kind === tr.FileOperationPatternKind.folder && await n2.getFileType(o) === Ht.FileType.Directory && l.matcher.match(`${a}/`)) return true;
        }
        return false;
      })), i = e.files.filter((s, o) => r[o]);
      return { ...e, files: i };
    }
    static async getFileType(e) {
      try {
        return (await Ht.workspace.fs.stat(e)).type;
      } catch {
        return;
      }
    }
    static asMinimatchOptions(e) {
      let t = { dot: true };
      return e?.ignoreCase === true && (t.nocase = true), t;
    }
  }, ba = class extends $s {
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
      let r = await $s.getFileType(e);
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
      super(e, Ht.workspace.onDidCreateFiles, tr.DidCreateFilesNotification.type, "didCreate", "didCreate", (t) => t, e.code2ProtocolConverter.asDidCreateFilesParams);
    }
    doSend(e, t) {
      let r = this._client.middleware.workspace;
      return r?.didCreateFiles ? r.didCreateFiles(e, t) : t(e);
    }
  };
  Ke.DidCreateFilesFeature = Gf;
  var Xf = class extends Ca {
    constructor(e) {
      super(e, Ht.workspace.onDidRenameFiles, tr.DidRenameFilesNotification.type, "didRename", "didRename", (t) => t.oldUri, e.code2ProtocolConverter.asDidRenameFilesParams);
    }
    register(e) {
      this._willListener || (this._willListener = Ht.workspace.onWillRenameFiles(this.willRename, this)), super.register(e);
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
  Ke.DidRenameFilesFeature = Xf;
  var Jf = class extends Ca {
    constructor(e) {
      super(e, Ht.workspace.onDidDeleteFiles, tr.DidDeleteFilesNotification.type, "didDelete", "didDelete", (t) => t, e.code2ProtocolConverter.asDidDeleteFilesParams);
    }
    register(e) {
      this._willListener || (this._willListener = Ht.workspace.onWillDeleteFiles(this.willDelete, this)), super.register(e);
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
  Ke.DidDeleteFilesFeature = Jf;
  var Us = class extends $s {
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
  }, Qf = class extends Us {
    constructor(e) {
      super(e, Ht.workspace.onWillCreateFiles, tr.WillCreateFilesRequest.type, "willCreate", "willCreate", (t) => t, e.code2ProtocolConverter.asWillCreateFilesParams);
    }
    doSend(e, t) {
      let r = this._client.middleware.workspace;
      return r?.willCreateFiles ? r.willCreateFiles(e, t) : t(e);
    }
  };
  Ke.WillCreateFilesFeature = Qf;
  var Yf = class extends Us {
    constructor(e) {
      super(e, Ht.workspace.onWillRenameFiles, tr.WillRenameFilesRequest.type, "willRename", "willRename", (t) => t.oldUri, e.code2ProtocolConverter.asWillRenameFilesParams);
    }
    doSend(e, t) {
      let r = this._client.middleware.workspace;
      return r?.willRenameFiles ? r.willRenameFiles(e, t) : t(e);
    }
  };
  Ke.WillRenameFilesFeature = Yf;
  var Zf = class extends Us {
    constructor(e) {
      super(e, Ht.workspace.onWillDeleteFiles, tr.WillDeleteFilesRequest.type, "willDelete", "willDelete", (t) => t, e.code2ProtocolConverter.asWillDeleteFilesParams);
    }
    doSend(e, t) {
      let r = this._client.middleware.workspace;
      return r?.willDeleteFiles ? r.willDeleteFiles(e, t) : t(e);
    }
  };
  Ke.WillDeleteFilesFeature = Zf;
});
var uv = R((Rn) => {
  "use strict";
  var uT = Rn && Rn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), lT = Rn && Rn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), dT = Rn && Rn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && uT(t, e, r[i]);
      return lT(t, e), t;
    };
  })();
  Object.defineProperty(Rn, "__esModule", { value: true });
  Rn.InlineCompletionItemFeature = void 0;
  var fT = require("vscode"), eh = G(), th = ie(), hT = dT(De()), nh = class extends th.TextDocumentLanguageFeature {
    constructor(e) {
      super(e, eh.InlineCompletionRequest.type);
    }
    fillClientCapabilities(e) {
      let t = (0, th.ensure)((0, th.ensure)(e, "textDocument"), "inlineCompletion");
      t.dynamicRegistration = true;
    }
    initialize(e, t) {
      let r = this.getRegistrationOptions(t, e.inlineCompletionProvider);
      r && this.register({ id: hT.generateUuid(), registerOptions: r });
    }
    registerLanguageProvider(e) {
      let t = e.documentSelector, r = { provideInlineCompletionItems: (i, s, o, a) => {
        let c = this._client, l = this._client.middleware, f = (h, p, g, _) => c.sendRequest(eh.InlineCompletionRequest.type, c.code2ProtocolConverter.asInlineCompletionParams(h, p, g), _).then((y) => _.isCancellationRequested ? null : c.protocol2CodeConverter.asInlineCompletionResult(y, _), (y) => c.handleFailedRequest(eh.InlineCompletionRequest.type, _, y, null));
        return l.provideInlineCompletionItems ? l.provideInlineCompletionItems(i, s, o, a, f) : f(i, s, o, a);
      } };
      return [fT.languages.registerInlineCompletionItemProvider(this._client.protocol2CodeConverter.asDocumentSelector(t), r), r];
    }
  };
  Rn.InlineCompletionItemFeature = nh;
});
var fv = R((Tn) => {
  "use strict";
  var pT = Tn && Tn.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), gT = Tn && Tn.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), dv = Tn && Tn.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && pT(t, e, r[i]);
      return gT(t, e), t;
    };
  })();
  Object.defineProperty(Tn, "__esModule", { value: true });
  Tn.TextDocumentContentFeature = void 0;
  var rh = dv(require("vscode")), Hi = G(), lv = ie(), mT = dv(De()), ih = class {
    _client;
    _registrations = /* @__PURE__ */ new Map();
    constructor(e) {
      this._client = e;
    }
    getState() {
      let e = this._registrations.size > 0;
      return { kind: "workspace", id: Hi.TextDocumentContentRequest.method, registrations: e };
    }
    get registrationType() {
      return Hi.TextDocumentContentRequest.type;
    }
    getProviders() {
      let e = [];
      for (let t of this._registrations.values()) e.push(...t.providers);
      return e;
    }
    fillClientCapabilities(e) {
      let t = (0, lv.ensure)((0, lv.ensure)(e, "workspace"), "textDocumentContent");
      t.dynamicRegistration = true;
    }
    initialize(e) {
      let t = this._client;
      if (t.onRequest(Hi.TextDocumentContentRefreshRequest.type, async (s) => {
        let o = t.protocol2CodeConverter.asUri(s.uri);
        for (let a of this._registrations.values()) for (let c of a.providers) c.scheme === o.scheme && c.onDidChangeEmitter.fire(o);
      }), !e?.workspace?.textDocumentContent) return;
      let r = e.workspace.textDocumentContent, i = Hi.StaticRegistrationOptions.hasId(r) ? r.id : mT.generateUuid();
      this.register({ id: i, registerOptions: r });
    }
    register(e) {
      let t = [], r = [];
      for (let i of e.registerOptions.schemes) {
        let [s, o] = this.registerTextDocumentContentProvider(i);
        t.push(o), r.push(s);
      }
      this._registrations.set(e.id, { disposable: rh.Disposable.from(...r), providers: t });
    }
    registerTextDocumentContentProvider(e) {
      let t = new rh.EventEmitter(), r = { onDidChange: t.event, provideTextDocumentContent: (i, s) => {
        let o = this._client, a = (l, f) => {
          let h = { uri: o.code2ProtocolConverter.asUri(l) };
          return o.sendRequest(Hi.TextDocumentContentRequest.type, h, f).then((p) => f.isCancellationRequested ? null : p.text, (p) => o.handleFailedRequest(Hi.TextDocumentContentRequest.type, f, p, null));
        }, c = o.middleware;
        return c.provideTextDocumentContent ? c.provideTextDocumentContent(i, s, a) : a(i, s);
      } };
      return [rh.workspace.registerTextDocumentContentProvider(e, r), { scheme: e, onDidChangeEmitter: t, provider: r }];
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
  Tn.TextDocumentContentFeature = ih;
});
var hv = R((Sa) => {
  "use strict";
  Object.defineProperty(Sa, "__esModule", { value: true });
  Sa.FileSystemWatcherFeature = void 0;
  var _T = require("vscode"), Yr = G(), Da = ie(), sh = class {
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
      (0, Da.ensure)((0, Da.ensure)(e, "workspace"), "didChangeWatchedFiles").dynamicRegistration = true, (0, Da.ensure)((0, Da.ensure)(e, "workspace"), "didChangeWatchedFiles").relativePatternSupport = true;
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
        let c = _T.workspace.createFileSystemWatcher(i, !s, !o, !a);
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
  Sa.FileSystemWatcherFeature = sh;
});
var gv = R((Pa) => {
  "use strict";
  Object.defineProperty(Pa, "__esModule", { value: true });
  Pa.ProgressFeature = void 0;
  var pv = G(), yT = id();
  function vT(n2, e) {
    return n2[e] === void 0 && (n2[e] = /* @__PURE__ */ Object.create(null)), n2[e];
  }
  var oh = class {
    _client;
    activeParts;
    constructor(e) {
      this._client = e, this.activeParts = /* @__PURE__ */ new Set();
    }
    getState() {
      return { kind: "window", id: pv.WorkDoneProgressCreateRequest.method, registrations: this.activeParts.size > 0 };
    }
    fillClientCapabilities(e) {
      vT(e, "window").workDoneProgress = true;
    }
    initialize() {
      let e = this._client, t = (i) => {
        this.activeParts.delete(i);
      }, r = (i) => {
        this.activeParts.add(new yT.ProgressPart(this._client, i.token, t));
      };
      e.onRequest(pv.WorkDoneProgressCreateRequest.type, r);
    }
    clear() {
      for (let e of this.activeParts) e.done();
      this.activeParts.clear();
    }
  };
  Pa.ProgressFeature = oh;
});
var gh = R((pe) => {
  "use strict";
  var bT = pe && pe.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), CT = pe && pe.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), Oa = pe && pe.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && bT(t, e, r[i]);
      return CT(t, e), t;
    };
  })();
  Object.defineProperty(pe, "__esModule", { value: true });
  pe.ProposedFeatures = pe.LanguageClient = pe.BaseLanguageClient = pe.ShutdownMode = pe.MessageTransports = pe.SuspendMode = pe.State = pe.CloseAction = pe.ErrorAction = pe.RevealOutputChannelOn = void 0;
  var V = require("vscode"), M = G(), wT = Oa(E_()), DT = Oa(M_()), en = Oa(At()), Ra = ko(), mv = Oa(De()), ST = id(), ft = ie(), PT = Pd(), ch = hy(), _v = my(), Wi = wy(), RT = Dy(), TT = Sy(), OT = Py(), ET = Ty(), qT = Oy(), xT = Zd(), MT = qy(), IT = xy(), NT = My(), jT = Iy(), FT = Ny(), LT = jy(), AT = Ly(), ah = Ay(), kT = Uy(), $T = Hy(), UT = zy(), HT = By(), WT = Vy(), zT = Gy(), KT = Xy(), BT = Qy(), VT = Zy(), GT = ev(), XT = nv(), JT = iv(), QT = sv(), zi = cv(), YT = uv(), ZT = fv(), eO = hv(), tO = gv(), Zr;
  (function(n2) {
    n2[n2.Debug = 0] = "Debug", n2[n2.Info = 1] = "Info", n2[n2.Warn = 2] = "Warn", n2[n2.Error = 3] = "Error", n2[n2.Never = 4] = "Never";
  })(Zr || (pe.RevealOutputChannelOn = Zr = {}));
  var Hs;
  (function(n2) {
    n2[n2.Continue = 1] = "Continue", n2[n2.Shutdown = 2] = "Shutdown";
  })(Hs || (pe.ErrorAction = Hs = {}));
  var Mr;
  (function(n2) {
    n2[n2.DoNotRestart = 1] = "DoNotRestart", n2[n2.Restart = 2] = "Restart";
  })(Mr || (pe.CloseAction = Mr = {}));
  var Ki;
  (function(n2) {
    n2[n2.Stopped = 1] = "Stopped", n2[n2.Starting = 3] = "Starting", n2[n2.StartFailed = 4] = "StartFailed", n2[n2.Running = 2] = "Running";
  })(Ki || (pe.State = Ki = {}));
  var yv;
  (function(n2) {
    n2.off = "off", n2.on = "on";
  })(yv || (pe.SuspendMode = yv = {}));
  var uh;
  (function(n2) {
    function e(t) {
      return t == null ? false : typeof t == "boolean" || typeof t == "object" && t !== null && en.stringArray(t.enabledCommands) ? t : false;
    }
    n2.sanitizeIsTrusted = e;
  })(uh || (uh = {}));
  var lh = class {
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
      return this.restarts.push(Date.now()), this.restarts.length <= this.maxRestartCount ? { action: Mr.Restart } : this.restarts[this.restarts.length - 1] - this.restarts[0] <= 180 * 1e3 ? { action: Mr.DoNotRestart, message: `The ${this.client.name} server crashed ${this.maxRestartCount + 1} times in the last 3 minutes. The server will not be restarted. See the output for more information.` } : (this.restarts.shift(), { action: Mr.Restart });
    }
  }, Z;
  (function(n2) {
    n2.Initial = "initial", n2.Starting = "starting", n2.StartFailed = "startFailed", n2.Running = "running", n2.Stopping = "stopping", n2.Stopped = "stopped";
  })(Z || (Z = {}));
  var vv;
  (function(n2) {
    function e(t) {
      return t && M.MessageReader.is(t.reader) && M.MessageWriter.is(t.writer);
    }
    n2.is = e;
  })(vv || (pe.MessageTransports = vv = {}));
  var xr;
  (function(n2) {
    n2.Restart = "restart", n2.Stop = "stop";
  })(xr || (pe.ShutdownMode = xr = {}));
  var dh = class n2 {
    open;
    _onOpen;
    _onClose;
    disposables;
    constructor() {
      this.disposables = [], this.open = /* @__PURE__ */ new Set(), this._onOpen = new V.EventEmitter(), this._onClose = new V.EventEmitter(), n2.fillVisibleResources(this.open);
      let e = () => {
        let t = this.open, r = /* @__PURE__ */ new Set();
        n2.fillVisibleResources(r);
        let i = /* @__PURE__ */ new Set(), s = new Set(r);
        for (let o of t.values()) r.has(o) ? s.delete(o) : i.add(o);
        if (this.open = r, i.size > 0) {
          let o = /* @__PURE__ */ new Set();
          for (let a of i) o.add(V.Uri.parse(a));
          this._onClose.fire(o);
        }
        if (s.size > 0) {
          let o = /* @__PURE__ */ new Set();
          for (let a of s) o.add(V.Uri.parse(a));
          this._onOpen.fire(o);
        }
      };
      this.disposables.push(V.window.tabGroups.onDidChangeTabs((t) => {
        t.closed.length === 0 && t.opened.length === 0 || e();
      })), this.disposables.push(V.window.onDidChangeVisibleTextEditors((t) => {
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
      return e instanceof V.Uri ? V.window.activeTextEditor?.document.uri === e : V.window.activeTextEditor?.document === e;
    }
    isVisible(e) {
      let t = e instanceof V.Uri ? e : e.uri;
      return t.scheme === ch.NotebookDocumentSyncFeature.CellScheme ? V.workspace.notebookDocuments.some((r) => this.open.has(r.uri.toString()) ? r.getCells().find((s) => s.document.uri.toString() === t.toString()) !== void 0 : false) : this.open.has(t.toString());
    }
    getResources() {
      let e = /* @__PURE__ */ new Set();
      return n2.fillVisibleResources(/* @__PURE__ */ new Set(), e), e;
    }
    static fillVisibleResources(e, t) {
      let r = e ?? /* @__PURE__ */ new Set();
      for (let i of V.window.tabGroups.all) for (let s of i.tabs) {
        let o = s.input, a;
        o instanceof V.TabInputText ? a = o.uri : o instanceof V.TabInputTextDiff ? a = o.modified : (o instanceof V.TabInputCustom || o instanceof V.TabInputNotebook) && (a = o.uri), a !== void 0 && !r.has(a.toString()) && (r.add(a.toString()), t !== void 0 && t.add(a));
      }
      for (let i of V.window.visibleTextEditors) {
        let s = i.document.uri;
        r.has(s.toString()) || (r.add(s.toString()), t !== void 0 && t.add(s));
      }
    }
  }, Ta = class n2 {
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
      r.markdown !== void 0 && (i.isTrusted = uh.sanitizeIsTrusted(r.markdown.isTrusted), i.supportHtml = r.markdown.supportHtml === true, i.supportThemeIcons = r.markdown.supportThemeIcons === true), this._clientOptions = { documentSelector: r.documentSelector ?? [], synchronize: r.synchronize ?? {}, diagnosticCollectionName: r.diagnosticCollectionName, outputChannelName: r.outputChannelName ?? this._name, revealOutputChannelOn: r.revealOutputChannelOn ?? Zr.Error, stdioEncoding: r.stdioEncoding ?? "utf8", initializationOptions: r.initializationOptions, initializationFailedHandler: r.initializationFailedHandler, progressOnInitialization: !!r.progressOnInitialization, errorHandler: r.errorHandler ?? this.createDefaultErrorHandler(r.connectionOptions?.maxRestartCount), middleware: r.middleware ?? {}, uriConverters: r.uriConverters, workspaceFolder: r.workspaceFolder, connectionOptions: r.connectionOptions, markdown: i, diagnosticPullOptions: r.diagnosticPullOptions ?? { onChange: true, onSave: false }, diagnosticCollectionProvider: r.diagnosticCollectionProvider ?? new ft.DefaultDiagnosticCollectionProvider(), notebookDocumentOptions: r.notebookDocumentOptions ?? {}, textSynchronization: this.createTextSynchronizationOptions(r.textSynchronization) }, this._clientOptions.synchronize = this._clientOptions.synchronize || {}, this._state = Z.Initial, this._ignoredRegistrations = /* @__PURE__ */ new Set(), this._listeners = [], this._notificationHandlers = /* @__PURE__ */ new Map(), this._pendingNotificationHandlers = /* @__PURE__ */ new Map(), this._notificationDisposables = /* @__PURE__ */ new Map(), this._requestHandlers = /* @__PURE__ */ new Map(), this._pendingRequestHandlers = /* @__PURE__ */ new Map(), this._requestDisposables = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this._pendingProgressHandlers = /* @__PURE__ */ new Map(), this._progressDisposables = /* @__PURE__ */ new Map(), this._connection = void 0, this._initializeResult = void 0, r.outputChannel ? (this._outputChannel = r.outputChannel, this._disposeOutputChannel = false, this._traceLogLevel = this._outputChannel.logLevel) : (this._outputChannel = void 0, this._disposeOutputChannel = true, this._traceLogLevel = V.LogLevel.Info), this._traceOutputChannel = r.traceOutputChannel, this._traceOutputChannel !== void 0 && (this._traceLogLevel = this._traceOutputChannel.logLevel), this._diagnostics = void 0, this._inFlightOpenNotifications = /* @__PURE__ */ new Set(), this._pendingChangeSemaphore = new Ra.Semaphore(1), this._pendingChangeDelayer = new Ra.Delayer(250), this._fileEvents = [], this._fileEventDelayer = new Ra.Delayer(250), this._onStop = void 0, this._telemetryEmitter = new M.Emitter(), this._stateChangeEmitter = new M.Emitter(), this._trace = M.Trace.Off, this._tracer = { log: (s, o) => {
        en.string(s) ? this.trace(s, o) : this.traceObject(s);
      } }, this._c2p = wT.createConverter(r.uriConverters ? r.uriConverters.code2Protocol : void 0), this._p2c = DT.createConverter(r.uriConverters ? r.uriConverters.protocol2Code : void 0, this._clientOptions.markdown.isTrusted, this._clientOptions.markdown.supportHtml, this._clientOptions.markdown.supportThemeIcons), this._syncedDocuments = /* @__PURE__ */ new Map(), this.registerBuiltinFeatures();
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
      return this._visibleDocuments === void 0 && (this._visibleDocuments = new dh()), this._visibleDocuments;
    }
    get onTelemetry() {
      return this._telemetryEmitter.event;
    }
    get onDidChangeState() {
      return this._stateChangeEmitter.event;
    }
    get outputChannel() {
      return this._outputChannel || (this._outputChannel = V.window.createOutputChannel(this._clientOptions.outputChannelName ? this._clientOptions.outputChannelName : this._name, { log: true }), this._traceOutputChannel === void 0 && (this._traceLogLevel = this._outputChannel.logLevel)), this._outputChannel;
    }
    get traceOutputChannel() {
      return this._traceOutputChannel ? this._traceOutputChannel : this.outputChannel;
    }
    get diagnostics() {
      if (this._diagnostics !== null) return this._diagnostics === void 0 && (this._diagnostics = this._clientOptions.diagnosticCollectionProvider.create(this._clientOptions.diagnosticCollectionName ?? this._id, ft.DiagnosticCollectionSource.push)), this._diagnostics;
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
        case Z.Starting:
          return Ki.Starting;
        case Z.Running:
          return Ki.Running;
        case Z.StartFailed:
          return Ki.StartFailed;
        default:
          return Ki.Stopped;
      }
    }
    get initializeResult() {
      return this._initializeResult;
    }
    async sendRequest(e, ...t) {
      if (this.$state === Z.StartFailed || this.$state === Z.Stopping || this.$state === Z.Stopped) return Promise.reject(new M.ResponseError(M.ErrorCodes.ConnectionInactive, "Client is not running"));
      let r = await this.$start();
      await this._didOpenTextDocumentFeature.sendPendingOpenNotifications(), this._didChangeTextDocumentFeature.syncKind === M.TextDocumentSyncKind.Full && await this.sendPendingFullTextDocumentChanges(r);
      let i, s;
      if (t.length === 1 ? M.CancellationToken.is(t[0]) ? s = t[0] : i = t[0] : t.length === 2 && (i = t[0], s = t[1]), s !== void 0 && s.isCancellationRequested) return Promise.reject(new M.ResponseError(M.LSPErrorCodes.RequestCancelled, "Request got cancelled"));
      let o = this._clientOptions.middleware?.sendRequest;
      return o !== void 0 ? o(e, i, s, (a, c, l) => {
        let f = [];
        return c !== void 0 && f.push(c), l !== void 0 && f.push(l), r.sendRequest(a, ...f);
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
      if (this.$state === Z.StartFailed || this.$state === Z.Stopping || this.$state === Z.Stopped) return Promise.reject(new M.ResponseError(M.ErrorCodes.ConnectionInactive, "Client is not running"));
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
      if (this.$state === Z.StartFailed || this.$state === Z.Stopping || this.$state === Z.Stopped) return Promise.reject(new M.ResponseError(M.ErrorCodes.ConnectionInactive, "Client is not running"));
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
      return new lh(this, e ?? 4);
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
      return e instanceof Error ? en.string(e.stack) ? e.stack : e.message : en.string(e) ? e : e.toString();
    }
    shouldLogToOutputChannel() {
      return this.$state !== Z.Stopped ? true : this._outputChannel !== void 0;
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
` + this.data2String(r)), (e === M.MessageType.Error ? V.window.showErrorMessage : e === M.MessageType.Warning ? V.window.showWarningMessage : V.window.showInformationMessage)(t, "Go to output").then((s) => {
        s !== void 0 && this.outputChannel.show(true);
      });
    }
    getLogMessage(e, t) {
      return t != null ? `${e}
${this.data2String(t)}` : e;
    }
    needsStart() {
      return this.$state === Z.Initial || this.$state === Z.Stopping || this.$state === Z.Stopped;
    }
    needsStop() {
      return this.$state === Z.Starting || this.$state === Z.Running;
    }
    activeConnection() {
      return this.$state === Z.Running && this._connection !== void 0 ? this._connection : void 0;
    }
    isRunning() {
      return this.$state === Z.Running;
    }
    async start() {
      if (this._disposed === "disposing" || this._disposed === "disposed") throw new Error("Client got disposed and can't be restarted.");
      if (this.$state === Z.Stopping) throw new Error("Client is currently stopping. Can only restart a full stopped client");
      if (this._onStart !== void 0) return this._onStart;
      let [e, t, r] = this.createOnStartPromise();
      this._onStart = e, this._diagnostics = void 0;
      for (let [i, s] of this._notificationHandlers) this._pendingNotificationHandlers.has(i) || this._pendingNotificationHandlers.set(i, s);
      for (let [i, s] of this._requestHandlers) this._pendingRequestHandlers.has(i) || this._pendingRequestHandlers.set(i, s);
      for (let [i, s] of this._progressHandlers) this._pendingProgressHandlers.has(i) || this._pendingProgressHandlers.set(i, s);
      this.$state = Z.Starting;
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
              V.window.showErrorMessage(s.message);
              break;
            case M.MessageType.Warning:
              V.window.showWarningMessage(s.message);
              break;
            case M.MessageType.Info:
              V.window.showInformationMessage(s.message);
              break;
            default:
              V.window.showInformationMessage(s.message);
          }
        }), i.onRequest(M.ShowMessageRequest.type, (s) => {
          let o;
          switch (s.type) {
            case M.MessageType.Error:
              o = V.window.showErrorMessage;
              break;
            case M.MessageType.Warning:
              o = V.window.showWarningMessage;
              break;
            case M.MessageType.Info:
              o = V.window.showInformationMessage;
              break;
            default:
              o = V.window.showInformationMessage;
          }
          let a = s.actions || [];
          return o(s.message, ...a);
        }), i.onNotification(M.TelemetryEventNotification.type, (s) => {
          this._telemetryEmitter.fire(s);
        }), i.onRequest(M.ShowDocumentRequest.type, async (s, o) => {
          let a = async (l) => {
            let f = this.protocol2CodeConverter.asUri(l.uri);
            try {
              if (l.external === true) return { success: await V.env.openExternal(f) };
              {
                let h = {};
                return l.selection !== void 0 && (h.selection = this.protocol2CodeConverter.asRange(l.selection)), l.takeFocus === void 0 || l.takeFocus === false ? h.preserveFocus = true : l.takeFocus === true && (h.preserveFocus = false), await V.window.showTextDocument(f, h), { success: true };
              }
            } catch {
              return { success: false };
            }
          }, c = this._clientOptions.middleware.window?.showDocument;
          return c !== void 0 ? c(s, o, a) : a(s);
        }), i.listen(), await this.initialize(i), t();
      } catch (i) {
        this.$state = Z.StartFailed, this.error(`${this._name} client: couldn't create connection to server.`, i, "force"), r(i);
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
      let t = this._clientOptions.initializationOptions, [r, i] = this._clientOptions.workspaceFolder !== void 0 ? [this._clientOptions.workspaceFolder.uri.fsPath, [{ uri: this._c2p.asUri(this._clientOptions.workspaceFolder.uri), name: this._clientOptions.workspaceFolder.name }]] : [this._clientGetRootPath(), null], s = { processId: null, clientInfo: { name: V.env.appName, version: V.version }, locale: this.getLocale(), rootPath: r || null, rootUri: r ? this._c2p.asUri(V.Uri.file(r)) : null, capabilities: this.computeClientCapabilities(), initializationOptions: en.func(t) ? t() : t, trace: M.Trace.toString(this._trace), workspaceFolders: i };
      if (this.fillInitializeParams(s), this._clientOptions.progressOnInitialization) {
        let o = mv.generateUuid(), a = new ST.ProgressPart(e, o);
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
        this._initializeResult = r, this.$state = Z.Running;
        let i;
        en.number(r.capabilities.textDocumentSync) ? r.capabilities.textDocumentSync === M.TextDocumentSyncKind.None ? i = { openClose: false, change: M.TextDocumentSyncKind.None, save: void 0 } : i = { openClose: true, change: r.capabilities.textDocumentSync, save: { includeText: false } } : r.capabilities.textDocumentSync !== void 0 && r.capabilities.textDocumentSync !== null && (i = r.capabilities.textDocumentSync), this._capabilities = Object.assign({}, r.capabilities, { resolvedTextDocumentSync: i }), e.onNotification(M.PublishDiagnosticsNotification.type, (s) => this.handleDiagnostics(s)), e.onRequest(M.RegistrationRequest.type, (s) => this.handleRegistrationRequest(s)), e.onRequest("client/registerFeature", (s) => this.handleRegistrationRequest(s)), e.onRequest(M.UnregistrationRequest.type, (s) => this.handleUnregistrationRequest(s)), e.onRequest("client/unregisterFeature", (s) => this.handleUnregistrationRequest(s)), e.onRequest(M.ApplyWorkspaceEditRequest.type, (s) => this.handleApplyWorkspaceEdit(s));
        for (let [s, o] of this._pendingNotificationHandlers) this._notificationDisposables.set(s, e.onNotification(s, o));
        this._pendingNotificationHandlers.clear();
        for (let [s, o] of this._pendingRequestHandlers) this._requestDisposables.set(s, e.onRequest(s, o));
        this._pendingRequestHandlers.clear();
        for (let [s, o] of this._pendingProgressHandlers) this._progressDisposables.set(s, e.onProgress(o.type, s, o.handler));
        return this._pendingProgressHandlers.clear(), await e.sendNotification(M.InitializedNotification.type, {}), this.hookFileEvents(e), this.hookLogLevelChanged(e), this.hookConfigurationChanged(e), this.initializeFeatures(e), r;
      } catch (r) {
        throw this._clientOptions.initializationFailedHandler ? this._clientOptions.initializationFailedHandler(r) ? this.initialize(e) : this.stop() : r instanceof M.ResponseError && r.data && r.data.retry ? V.window.showErrorMessage(r.message, { title: "Retry", id: "retry" }).then((i) => {
          i && i.id === "retry" ? this.initialize(e) : this.stop();
        }) : (r && r.message && V.window.showErrorMessage(r.message), this.error("Server initialization failed.", r), this.stop()), r;
      }
    }
    _clientGetRootPath() {
      let e = V.workspace.workspaceFolders;
      if (!e || e.length === 0) return;
      let t = e[0];
      if (t.uri.scheme === "file") return t.uri.fsPath;
    }
    stop(e = 2e3) {
      return this.shutdown(xr.Stop, e);
    }
    dispose(e = 2e3) {
      try {
        return this._disposed = "disposing", this.stop(e);
      } finally {
        this._disposed = "disposed";
      }
    }
    async shutdown(e, t = 2e3) {
      if (this.$state === Z.Stopped || this.$state === Z.Initial) return;
      if (this.$state === Z.Stopping) {
        if (this._onStop !== void 0) return this._onStop;
        throw new Error("Client is stopping but no stop promise available.");
      }
      let r = this.activeConnection();
      if (r === void 0 || this.$state !== Z.Running) throw new Error(`Client is not running and can't be stopped. It's current state is: ${this.$state}`);
      this._initializeResult = void 0, this.$state = Z.Stopping, this.cleanUp(e);
      let i = new Promise((o) => {
        (0, M.RAL)().timer.setTimeout(o, t);
      }), s = (async (o) => (await o.shutdown(), await o.exit(), o))(r);
      return this._onStop = Promise.race([i, s]).then((o) => {
        if (o !== void 0) o.end(), o.dispose();
        else throw this.error("Stopping server timed out", void 0, false), new Error("Stopping the server timed out");
      }, (o) => {
        throw this.error("Stopping server failed", o, false), o;
      }).finally(() => {
        this.$state = Z.Stopped, e === xr.Stop && this.cleanUpChannel(), this._onStart = void 0, this._onStop = void 0, this._connection = void 0, this._ignoredRegistrations.clear();
      });
    }
    cleanUp(e) {
      this._fileEvents = [], this._fileEventDelayer.cancel();
      let t = this._listeners.splice(0, this._listeners.length);
      for (let r of t) r.dispose();
      this._syncedDocuments && this._syncedDocuments.clear();
      for (let r of Array.from(this._features.entries()).map((i) => i[1]).reverse()) r.clear();
      (e === xr.Stop || e === xr.Restart) && (this._diagnostics === void 0 && (this._diagnostics = null), this._diagnostics !== null && (this._clientOptions.diagnosticCollectionProvider.dispose(this._diagnostics, ft.DiagnosticCollectionSource.push), this._diagnostics = null)), this._idleInterval !== void 0 && (this._idleInterval.dispose(), this._idleInterval = void 0);
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
      let i = new V.CancellationTokenSource();
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
      return V.env.language;
    }
    async $start() {
      if (this.$state === Z.StartFailed) throw new Error("Previous start failed. Can't restart server.");
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
      return this._connection = nO(r.reader, r.writer, e, t, this._clientOptions.connectionOptions), this._connection;
    }
    async handleConnectionClosed() {
      if (this.$state === Z.Stopped) return;
      try {
        this._connection !== void 0 && this._connection.dispose();
      } catch {
      }
      let e = { action: Mr.DoNotRestart };
      if (this.$state !== Z.Stopping) try {
        e = await this._clientOptions.errorHandler.closed();
      } catch {
      }
      this._connection = void 0, e.action === Mr.DoNotRestart ? (this.error(e.message ?? "Connection to server got closed. Server will not be restarted.", void 0, e.handled === true ? false : "force"), this.cleanUp(xr.Stop), this.$state === Z.Starting ? this.$state = Z.StartFailed : this.$state = Z.Stopped, this._onStop = Promise.resolve(), this._onStart = void 0) : e.action === Mr.Restart && (this.info(e.message ?? "Connection to server got closed. Server will restart.", void 0, !e.handled), this.cleanUp(xr.Restart), this.$state = Z.Initial, this._onStop = Promise.resolve(), this._onStart = void 0, this.start().catch((t) => this.error("Restarting server failed", t, "force")));
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
      this._listeners.push(V.workspace.onDidChangeConfiguration(() => {
        this.refreshTrace(e, true);
      }));
    }
    hookLogLevelChanged(e) {
      this._listeners.push(this.traceOutputChannel.onDidChangeLogLevel((t) => {
        this._traceLogLevel = t, this.refreshTrace(e, true);
      }));
    }
    refreshTrace(e, t = false) {
      let r = V.workspace.getConfiguration(this._id), i = this._traceLogLevel !== V.LogLevel.Trace ? M.Trace.Off : M.Trace.Messages, s = M.TraceFormat.Text;
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
      en.array(t) ? r = t : r = [t], r && this._dynamicFeatures.get(M.DidChangeWatchedFilesNotification.type.method).registerRaw(mv.generateUuid(), r);
    }
    _features = [];
    _dynamicFeatures = /* @__PURE__ */ new Map();
    registerFeatures(e) {
      for (let t of e) this.registerFeature(t);
    }
    registerFeature(e) {
      if (this._features.push(e), ft.DynamicFeature.is(e)) {
        let t = e.registrationType;
        this._dynamicFeatures.set(t.method, e);
      }
    }
    getFeature(e) {
      return this._dynamicFeatures.get(e);
    }
    hasDedicatedTextSynchronizationFeature(e) {
      let t = this.getFeature(M.NotebookDocumentSyncRegistrationType.method);
      return t === void 0 || !(t instanceof ch.NotebookDocumentSyncFeature) ? false : t.handles(e);
    }
    registerBuiltinFeatures() {
      let e = /* @__PURE__ */ new Map();
      this.registerFeature(new _v.ConfigurationFeature(this)), this._didOpenTextDocumentFeature = new Wi.DidOpenTextDocumentFeature(this, this._syncedDocuments), this.registerFeature(this._didOpenTextDocumentFeature), this._didChangeTextDocumentFeature = new Wi.DidChangeTextDocumentFeature(this, e), this._didChangeTextDocumentFeature.onPendingChangeAdded(() => {
        this.triggerPendingChangeDelivery();
      }), this.registerFeature(this._didChangeTextDocumentFeature), this.registerFeature(new Wi.WillSaveFeature(this)), this.registerFeature(new Wi.WillSaveWaitUntilFeature(this)), this.registerFeature(new Wi.DidSaveTextDocumentFeature(this)), this.registerFeature(new Wi.DidCloseTextDocumentFeature(this, this._syncedDocuments, e)), this.registerFeature(new eO.FileSystemWatcherFeature(this, (t) => this.notifyFileEvent(t))), this.registerFeature(new RT.CompletionItemFeature(this)), this.registerFeature(new TT.HoverFeature(this)), this.registerFeature(new ET.SignatureHelpFeature(this)), this.registerFeature(new OT.DefinitionFeature(this)), this.registerFeature(new IT.ReferencesFeature(this)), this.registerFeature(new qT.DocumentHighlightFeature(this)), this.registerFeature(new xT.DocumentSymbolFeature(this)), this.registerFeature(new MT.WorkspaceSymbolFeature(this)), this.registerFeature(new LT.CodeActionFeature(this)), this.registerFeature(new AT.CodeLensFeature(this)), this.registerFeature(new ah.DocumentFormattingFeature(this)), this.registerFeature(new ah.DocumentRangeFormattingFeature(this)), this.registerFeature(new ah.DocumentOnTypeFormattingFeature(this)), this.registerFeature(new kT.RenameFeature(this)), this.registerFeature(new $T.DocumentLinkFeature(this)), this.registerFeature(new UT.ExecuteCommandFeature(this)), this.registerFeature(new _v.SyncConfigurationFeature(this)), this.registerFeature(new NT.TypeDefinitionFeature(this)), this.registerFeature(new jT.ImplementationFeature(this)), this.registerFeature(new FT.ColorProviderFeature(this)), this.clientOptions.workspaceFolder === void 0 && this.registerFeature(new QT.WorkspaceFoldersFeature(this)), this.registerFeature(new HT.FoldingRangeFeature(this)), this.registerFeature(new WT.DeclarationFeature(this)), this.registerFeature(new zT.SelectionRangeFeature(this)), this.registerFeature(new tO.ProgressFeature(this)), this.registerFeature(new KT.CallHierarchyFeature(this)), this.registerFeature(new BT.SemanticTokensFeature(this)), this.registerFeature(new VT.LinkedEditingFeature(this)), this.registerFeature(new zi.DidCreateFilesFeature(this)), this.registerFeature(new zi.DidRenameFilesFeature(this)), this.registerFeature(new zi.DidDeleteFilesFeature(this)), this.registerFeature(new zi.WillCreateFilesFeature(this)), this.registerFeature(new zi.WillRenameFilesFeature(this)), this.registerFeature(new zi.WillDeleteFilesFeature(this)), this.registerFeature(new GT.TypeHierarchyFeature(this)), this.registerFeature(new XT.InlineValueFeature(this)), this.registerFeature(new JT.InlayHintsFeature(this)), this.registerFeature(new PT.DiagnosticFeature(this)), this.registerFeature(new ch.NotebookDocumentSyncFeature(this)), this.registerFeature(new YT.InlineCompletionItemFeature(this)), this.registerFeature(new ZT.TextDocumentContentFeature(this));
    }
    registerProposedFeatures() {
      this.registerFeatures(ph.createAll(this));
    }
    fillInitializeParams(e) {
      for (let t of this._features) en.func(t.fillInitializeParams) && t.fillInitializeParams(e);
    }
    computeClientCapabilities() {
      let e = {};
      (0, ft.ensure)(e, "workspace").applyEdit = true;
      let t = (0, ft.ensure)((0, ft.ensure)(e, "workspace"), "workspaceEdit");
      t.documentChanges = true, t.resourceOperations = [M.ResourceOperationKind.Create, M.ResourceOperationKind.Rename, M.ResourceOperationKind.Delete], t.failureHandling = M.FailureHandlingKind.TextOnlyTransactional, t.normalizesLineEndings = true, t.changeAnnotationSupport = { groupsOnLabel: true }, t.metadataSupport = true, t.snippetEditSupport = true;
      let r = (0, ft.ensure)((0, ft.ensure)(e, "textDocument"), "publishDiagnostics");
      r.relatedInformation = true, r.versionSupport = false, r.tagSupport = { valueSet: [M.DiagnosticTag.Unnecessary, M.DiagnosticTag.Deprecated] }, r.codeDescriptionSupport = true, r.dataSupport = true;
      let i = (0, ft.ensure)((0, ft.ensure)(e, "textDocument"), "filters");
      i.relativePatternSupport = true;
      let s = (0, ft.ensure)(e, "window"), o = (0, ft.ensure)(s, "showMessage");
      o.messageActionItem = { additionalPropertiesSupport: true };
      let a = (0, ft.ensure)(s, "showDocument");
      a.support = true;
      let c = (0, ft.ensure)(e, "general");
      c.staleRequestSupport = { cancel: true, retryOnContentModified: Array.from(n2.RequestsToCancelOnContentModified) }, c.regularExpressions = { engine: "ECMAScript", version: "ES2020" }, c.markdown = { parser: "marked", version: "1.1.0" }, c.positionEncodings = ["utf-16"], this._clientOptions.markdown.supportHtml && (c.markdown.allowedTags = ["ul", "li", "p", "code", "blockquote", "ol", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "em", "pre", "table", "thead", "tbody", "tr", "th", "td", "div", "del", "a", "strong", "br", "img", "span"]);
      for (let l of this._features) l.fillClientCapabilities(e);
      return e;
    }
    initializeFeatures(e) {
      let t = this._clientOptions.documentSelector;
      for (let r of this._features) en.func(r.preInitialize) && r.preInitialize(this._capabilities, t);
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
    workspaceEditLock = new Ra.Semaphore(1);
    async doHandleApplyWorkspaceEdit(e) {
      let t = e.edit, r = await this.workspaceEditLock.lock(() => this._p2c.asWorkspaceEdit(t));
      return this.validateWorkspaceEdit(t) ? en.asPromise(V.workspace.applyEdit(r, { isRefactoring: e.metadata?.isRefactoring }).then((s) => ({ applied: s }))) : Promise.resolve({ applied: false });
    }
    validateWorkspaceEdit(e) {
      let t = /* @__PURE__ */ new Map();
      if (V.workspace.textDocuments.forEach((r) => t.set(r.uri.toString(), r)), e.documentChanges) {
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
          throw r.data !== void 0 ? new ft.LSPCancellationError(r.data) : new V.CancellationError();
        } else if (r.code === M.LSPErrorCodes.ContentModified) {
          if (n2.RequestsToCancelOnContentModified.has(e.method) || n2.CancellableResolveCalls.has(e.method)) throw new V.CancellationError();
          return i;
        }
      }
      throw this.error(`Request ${e.method} failed.`, r, s), r;
    }
  };
  pe.BaseLanguageClient = Ta;
  var fh = class extends Ta {
    serverOptions;
    constructor(e, t, r, i) {
      super(e, t, i), this.serverOptions = r;
    }
    async createMessageTransports(e) {
      return this.serverOptions();
    }
  };
  pe.LanguageClient = fh;
  var hh = class {
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
  function nO(n2, e, t, r, i) {
    let s = new hh(), o = (0, M.createProtocolConnection)(n2, e, s, i);
    return o.onError((c) => {
      t(c[0], c[1], c[2]);
    }), o.onClose(r), { listen: () => o.listen(), sendRequest: o.sendRequest, onRequest: o.onRequest, hasPendingResponse: o.hasPendingResponse, sendNotification: o.sendNotification, onNotification: o.onNotification, onProgress: o.onProgress, sendProgress: o.sendProgress, trace: (c, l, f) => {
      let h = { sendNotification: false, traceFormat: M.TraceFormat.Text };
      return f === void 0 ? o.trace(c, l, h) : (en.boolean(f), o.trace(c, l, f));
    }, initialize: (c) => o.sendRequest(M.InitializeRequest.type, c), shutdown: () => o.sendRequest(M.ShutdownRequest.type, void 0), exit: () => o.sendNotification(M.ExitNotification.type), end: () => o.end(), dispose: () => o.dispose() };
  }
  var ph;
  (function(n2) {
    function e(t) {
      return [];
    }
    n2.createAll = e;
  })(ph || (pe.ProposedFeatures = ph = {}));
});
var Cv = R((nr) => {
  "use strict";
  var rO = nr && nr.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), iO = nr && nr.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), sO = nr && nr.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && rO(t, e, r[i]);
      return iO(t, e), t;
    };
  })();
  Object.defineProperty(nr, "__esModule", { value: true });
  nr.terminate = uO;
  var bv = sO(require("child_process")), oO = process.platform === "win32", aO = process.platform === "darwin", cO = process.platform === "linux";
  function uO(n2, e) {
    if (oO) try {
      let t = { stdio: ["pipe", "pipe", "ignore"] };
      return e && (t.cwd = e), bv.execFileSync("taskkill", ["/T", "/F", "/PID", n2.pid.toString()], t), true;
    } catch {
      return false;
    }
    else if (cO || aO) try {
      let t = n2.pid.toString();
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
      return !bv.spawnSync("/bin/sh", [], { input: r, stdio: ["pipe", "inherit", "inherit"] }).error;
    } catch {
      return false;
    }
    else return n2.kill("SIGKILL"), true;
  }
});
var Sv = R((bh) => {
  "use strict";
  Object.defineProperty(bh, "__esModule", { value: true });
  var wv = require("util"), rr = An(), mh = class n2 extends rr.AbstractMessageBuffer {
    static emptyBuffer = Buffer.allocUnsafe(0);
    constructor(e = "utf-8") {
      super(e);
    }
    emptyBuffer() {
      return n2.emptyBuffer;
    }
    fromString(e, t) {
      return Buffer.from(e, t);
    }
    toString(e, t) {
      return e instanceof Buffer ? e.toString(t) : new wv.TextDecoder(t).decode(e);
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
      return this.stream.on("close", e), rr.Disposable.create(() => this.stream.off("close", e));
    }
    onError(e) {
      return this.stream.on("error", e), rr.Disposable.create(() => this.stream.off("error", e));
    }
    onEnd(e) {
      return this.stream.on("end", e), rr.Disposable.create(() => this.stream.off("end", e));
    }
    onData(e) {
      return this.stream.on("data", e), rr.Disposable.create(() => this.stream.off("data", e));
    }
  }, yh = class {
    stream;
    constructor(e) {
      this.stream = e;
    }
    onClose(e) {
      return this.stream.on("close", e), rr.Disposable.create(() => this.stream.off("close", e));
    }
    onError(e) {
      return this.stream.on("error", e), rr.Disposable.create(() => this.stream.off("error", e));
    }
    onEnd(e) {
      return this.stream.on("end", e), rr.Disposable.create(() => this.stream.off("end", e));
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
  }, Dv = Object.freeze({ messageBuffer: Object.freeze({ create: (n2) => new mh(n2) }), applicationJson: Object.freeze({ encoder: Object.freeze({ name: "application/json", encode: (n2, e) => {
    try {
      return Promise.resolve(Buffer.from(JSON.stringify(n2, void 0, 0), e.charset));
    } catch (t) {
      return Promise.reject(t);
    }
  } }), decoder: Object.freeze({ name: "application/json", decode: (n2, e) => {
    try {
      return n2 instanceof Buffer ? Promise.resolve(JSON.parse(n2.toString(e.charset))) : Promise.resolve(JSON.parse(new wv.TextDecoder(e.charset).decode(n2)));
    } catch (t) {
      return Promise.reject(t);
    }
  } }) }), stream: Object.freeze({ asReadableStream: (n2) => new _h(n2), asWritableStream: (n2) => new yh(n2) }), console, timer: Object.freeze({ setTimeout(n2, e, ...t) {
    let r = setTimeout(n2, e, ...t);
    return { dispose: () => clearTimeout(r) };
  }, setImmediate(n2, ...e) {
    let t = setImmediate(n2, ...e);
    return { dispose: () => clearImmediate(t) };
  }, setInterval(n2, e, ...t) {
    let r = setInterval(n2, e, ...t);
    return { dispose: () => clearInterval(r) };
  } }) });
  function vh() {
    return Dv;
  }
  (function(n2) {
    function e() {
      rr.RAL.install(Dv);
    }
    n2.install = e;
  })(vh || (vh = {}));
  bh.default = vh;
});
var Rh = R((se) => {
  "use strict";
  var Rv = se && se.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), lO = se && se.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), Ph = se && se.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && Rv(t, e, r[i]);
      return lO(t, e), t;
    };
  })(), dO = se && se.__exportStar || function(n2, e) {
    for (var t in n2) t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && Rv(e, n2, t);
  }, fO = se && se.__importDefault || function(n2) {
    return n2 && n2.__esModule ? n2 : { default: n2 };
  };
  Object.defineProperty(se, "__esModule", { value: true });
  se.StreamMessageWriter = se.StreamMessageReader = se.SocketMessageWriter = se.SocketMessageReader = se.PortMessageWriter = se.PortMessageReader = se.IPCMessageWriter = se.IPCMessageReader = void 0;
  se.generateRandomPipeName = yO;
  se.createClientPipeTransport = vO;
  se.createServerPipeTransport = bO;
  se.createClientSocketTransport = CO;
  se.createServerSocketTransport = wO;
  se.createMessageConnection = PO;
  var Ws = fO(Sv());
  Ws.default.install();
  var hO = Ph(require("path")), pO = Ph(require("os")), gO = Ph(require("fs")), Pv = require("crypto"), xa = require("net"), xt = An();
  dO(An(), se);
  var Ch = class extends xt.AbstractMessageReader {
    process;
    constructor(e) {
      super(), this.process = e;
      let t = this.process;
      t.on("error", (r) => this.fireError(r)), t.on("close", () => this.fireClose());
    }
    listen(e) {
      return this.process.on("message", e), xt.Disposable.create(() => this.process.off("message", e));
    }
  };
  se.IPCMessageReader = Ch;
  var wh = class extends xt.AbstractMessageWriter {
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
  se.IPCMessageWriter = wh;
  var Dh = class extends xt.AbstractMessageReader {
    onData;
    constructor(e) {
      super(), this.onData = new xt.Emitter(), e.on("close", () => this.fireClose), e.on("error", (t) => this.fireError(t)), e.on("message", (t) => {
        this.onData.fire(t);
      });
    }
    listen(e) {
      return this.onData.event(e);
    }
  };
  se.PortMessageReader = Dh;
  var Sh = class extends xt.AbstractMessageWriter {
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
  se.PortMessageWriter = Sh;
  var ei = class extends xt.ReadableStreamMessageReader {
    constructor(e, t = "utf-8") {
      super((0, Ws.default)().stream.asReadableStream(e), t);
    }
  };
  se.SocketMessageReader = ei;
  var ti = class extends xt.WriteableStreamMessageWriter {
    socket;
    constructor(e, t) {
      super((0, Ws.default)().stream.asWritableStream(e), t), this.socket = e;
    }
    dispose() {
      super.dispose(), this.socket.destroy();
    }
  };
  se.SocketMessageWriter = ti;
  var Ea = class extends xt.ReadableStreamMessageReader {
    constructor(e, t) {
      super((0, Ws.default)().stream.asReadableStream(e), t);
    }
  };
  se.StreamMessageReader = Ea;
  var qa = class extends xt.WriteableStreamMessageWriter {
    constructor(e, t) {
      super((0, Ws.default)().stream.asWritableStream(e), t);
    }
  };
  se.StreamMessageWriter = qa;
  var mO = process.env.XDG_RUNTIME_DIR, _O = /* @__PURE__ */ new Map([["linux", 107], ["darwin", 102]]);
  function yO() {
    if (process.platform === "win32") return `\\\\.\\pipe\\lsp-${(0, Pv.randomBytes)(16).toString("hex")}-sock`;
    let n2 = 32, e = 10, t = gO.realpathSync(mO ?? pO.tmpdir()), r = _O.get(process.platform);
    if (r !== void 0 && (n2 = Math.min(r - t.length - e, n2)), n2 < 16) throw new Error(`Unable to generate a random pipe name with ${n2} characters.`);
    let i = (0, Pv.randomBytes)(Math.floor(n2 / 2)).toString("hex");
    return hO.join(t, `lsp-${i}.sock`);
  }
  function vO(n2, e = "utf-8") {
    let t, r = new Promise((i, s) => {
      t = i;
    });
    return new Promise((i, s) => {
      let o = (0, xa.createServer)((a) => {
        o.close(), t([new ei(a, e), new ti(a, e)]);
      });
      o.on("error", s), o.listen(n2, () => {
        o.removeListener("error", s), i({ onConnected: () => r });
      });
    });
  }
  function bO(n2, e = "utf-8") {
    let t = (0, xa.createConnection)(n2);
    return [new ei(t, e), new ti(t, e)];
  }
  function CO(n2, e = "utf-8") {
    let t, r = new Promise((i, s) => {
      t = i;
    });
    return new Promise((i, s) => {
      let o = (0, xa.createServer)((a) => {
        o.close(), t([new ei(a, e), new ti(a, e)]);
      });
      o.on("error", s), o.listen(n2, "127.0.0.1", () => {
        o.removeListener("error", s), i({ onConnected: () => r });
      });
    });
  }
  function wO(n2, e = "utf-8") {
    let t = (0, xa.createConnection)(n2, "127.0.0.1");
    return [new ei(t, e), new ti(t, e)];
  }
  function DO(n2) {
    let e = n2;
    return e.read !== void 0 && e.addListener !== void 0;
  }
  function SO(n2) {
    let e = n2;
    return e.write !== void 0 && e.addListener !== void 0;
  }
  function PO(n2, e, t, r) {
    t || (t = xt.NullLogger);
    let i = DO(n2) ? new Ea(n2) : n2, s = SO(e) ? new qa(e) : e;
    return xt.ConnectionStrategy.is(r) && (r = { connectionStrategy: r }), (0, xt.createMessageConnection)(i, s, t, r);
  }
});
var Th = R((ir) => {
  "use strict";
  var RO = ir && ir.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), Tv = ir && ir.__exportStar || function(n2, e) {
    for (var t in n2) t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && RO(e, n2, t);
  };
  Object.defineProperty(ir, "__esModule", { value: true });
  ir.createProtocolConnection = OO;
  var TO = Rh();
  Tv(Rh(), ir);
  Tv(G(), ir);
  function OO(n2, e, t, r) {
    return (0, TO.createMessageConnection)(n2, e, t, r);
  }
});
var zs = R((ox, Ov) => {
  "use strict";
  var EO = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...n2) => console.error("SEMVER", ...n2) : () => {
  };
  Ov.exports = EO;
});
var Ma = R((ax, Ev) => {
  "use strict";
  var qO = "2.0.0", xO = Number.MAX_SAFE_INTEGER || 9007199254740991, MO = 16, IO = 250, NO = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
  Ev.exports = { MAX_LENGTH: 256, MAX_SAFE_COMPONENT_LENGTH: MO, MAX_SAFE_BUILD_LENGTH: IO, MAX_SAFE_INTEGER: xO, RELEASE_TYPES: NO, SEMVER_SPEC_VERSION: qO, FLAG_INCLUDE_PRERELEASE: 1, FLAG_LOOSE: 2 };
});
var Ia = R((On, qv) => {
  "use strict";
  var { MAX_SAFE_COMPONENT_LENGTH: Oh, MAX_SAFE_BUILD_LENGTH: jO, MAX_LENGTH: FO } = Ma(), LO = zs();
  On = qv.exports = {};
  var AO = On.re = [], kO = On.safeRe = [], A = On.src = [], $O = On.safeSrc = [], k = On.t = {}, UO = 0, Eh = "[a-zA-Z0-9-]", HO = [["\\s", 1], ["\\d", FO], [Eh, jO]], WO = (n2) => {
    for (let [e, t] of HO) n2 = n2.split(`${e}*`).join(`${e}{0,${t}}`).split(`${e}+`).join(`${e}{1,${t}}`);
    return n2;
  }, Q = (n2, e, t) => {
    let r = WO(e), i = UO++;
    LO(n2, i, e), k[n2] = i, A[i] = e, $O[i] = r, AO[i] = new RegExp(e, t ? "g" : void 0), kO[i] = new RegExp(r, t ? "g" : void 0);
  };
  Q("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  Q("NUMERICIDENTIFIERLOOSE", "\\d+");
  Q("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${Eh}*`);
  Q("MAINVERSION", `(${A[k.NUMERICIDENTIFIER]})\\.(${A[k.NUMERICIDENTIFIER]})\\.(${A[k.NUMERICIDENTIFIER]})`);
  Q("MAINVERSIONLOOSE", `(${A[k.NUMERICIDENTIFIERLOOSE]})\\.(${A[k.NUMERICIDENTIFIERLOOSE]})\\.(${A[k.NUMERICIDENTIFIERLOOSE]})`);
  Q("PRERELEASEIDENTIFIER", `(?:${A[k.NONNUMERICIDENTIFIER]}|${A[k.NUMERICIDENTIFIER]})`);
  Q("PRERELEASEIDENTIFIERLOOSE", `(?:${A[k.NONNUMERICIDENTIFIER]}|${A[k.NUMERICIDENTIFIERLOOSE]})`);
  Q("PRERELEASE", `(?:-(${A[k.PRERELEASEIDENTIFIER]}(?:\\.${A[k.PRERELEASEIDENTIFIER]})*))`);
  Q("PRERELEASELOOSE", `(?:-?(${A[k.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${A[k.PRERELEASEIDENTIFIERLOOSE]})*))`);
  Q("BUILDIDENTIFIER", `${Eh}+`);
  Q("BUILD", `(?:\\+(${A[k.BUILDIDENTIFIER]}(?:\\.${A[k.BUILDIDENTIFIER]})*))`);
  Q("FULLPLAIN", `v?${A[k.MAINVERSION]}${A[k.PRERELEASE]}?${A[k.BUILD]}?`);
  Q("FULL", `^${A[k.FULLPLAIN]}$`);
  Q("LOOSEPLAIN", `[v=\\s]*${A[k.MAINVERSIONLOOSE]}${A[k.PRERELEASELOOSE]}?${A[k.BUILD]}?`);
  Q("LOOSE", `^${A[k.LOOSEPLAIN]}$`);
  Q("GTLT", "((?:<|>)?=?)");
  Q("XRANGEIDENTIFIERLOOSE", `${A[k.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  Q("XRANGEIDENTIFIER", `${A[k.NUMERICIDENTIFIER]}|x|X|\\*`);
  Q("XRANGEPLAIN", `[v=\\s]*(${A[k.XRANGEIDENTIFIER]})(?:\\.(${A[k.XRANGEIDENTIFIER]})(?:\\.(${A[k.XRANGEIDENTIFIER]})(?:${A[k.PRERELEASE]})?${A[k.BUILD]}?)?)?`);
  Q("XRANGEPLAINLOOSE", `[v=\\s]*(${A[k.XRANGEIDENTIFIERLOOSE]})(?:\\.(${A[k.XRANGEIDENTIFIERLOOSE]})(?:\\.(${A[k.XRANGEIDENTIFIERLOOSE]})(?:${A[k.PRERELEASELOOSE]})?${A[k.BUILD]}?)?)?`);
  Q("XRANGE", `^${A[k.GTLT]}\\s*${A[k.XRANGEPLAIN]}$`);
  Q("XRANGELOOSE", `^${A[k.GTLT]}\\s*${A[k.XRANGEPLAINLOOSE]}$`);
  Q("COERCEPLAIN", `(^|[^\\d])(\\d{1,${Oh}})(?:\\.(\\d{1,${Oh}}))?(?:\\.(\\d{1,${Oh}}))?`);
  Q("COERCE", `${A[k.COERCEPLAIN]}(?:$|[^\\d])`);
  Q("COERCEFULL", A[k.COERCEPLAIN] + `(?:${A[k.PRERELEASE]})?(?:${A[k.BUILD]})?(?:$|[^\\d])`);
  Q("COERCERTL", A[k.COERCE], true);
  Q("COERCERTLFULL", A[k.COERCEFULL], true);
  Q("LONETILDE", "(?:~>?)");
  Q("TILDETRIM", `(\\s*)${A[k.LONETILDE]}\\s+`, true);
  On.tildeTrimReplace = "$1~";
  Q("TILDE", `^${A[k.LONETILDE]}${A[k.XRANGEPLAIN]}$`);
  Q("TILDELOOSE", `^${A[k.LONETILDE]}${A[k.XRANGEPLAINLOOSE]}$`);
  Q("LONECARET", "(?:\\^)");
  Q("CARETTRIM", `(\\s*)${A[k.LONECARET]}\\s+`, true);
  On.caretTrimReplace = "$1^";
  Q("CARET", `^${A[k.LONECARET]}${A[k.XRANGEPLAIN]}$`);
  Q("CARETLOOSE", `^${A[k.LONECARET]}${A[k.XRANGEPLAINLOOSE]}$`);
  Q("COMPARATORLOOSE", `^${A[k.GTLT]}\\s*(${A[k.LOOSEPLAIN]})$|^$`);
  Q("COMPARATOR", `^${A[k.GTLT]}\\s*(${A[k.FULLPLAIN]})$|^$`);
  Q("COMPARATORTRIM", `(\\s*)${A[k.GTLT]}\\s*(${A[k.LOOSEPLAIN]}|${A[k.XRANGEPLAIN]})`, true);
  On.comparatorTrimReplace = "$1$2$3";
  Q("HYPHENRANGE", `^\\s*(${A[k.XRANGEPLAIN]})\\s+-\\s+(${A[k.XRANGEPLAIN]})\\s*$`);
  Q("HYPHENRANGELOOSE", `^\\s*(${A[k.XRANGEPLAINLOOSE]})\\s+-\\s+(${A[k.XRANGEPLAINLOOSE]})\\s*$`);
  Q("STAR", "(<|>)?=?\\s*\\*");
  Q("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  Q("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
});
var Na = R((cx, xv) => {
  "use strict";
  var zO = Object.freeze({ loose: true }), KO = Object.freeze({}), BO = (n2) => n2 ? typeof n2 != "object" ? zO : n2 : KO;
  xv.exports = BO;
});
var jv = R((ux, Nv) => {
  "use strict";
  var Mv = /^[0-9]+$/, Iv = (n2, e) => {
    if (typeof n2 == "number" && typeof e == "number") return n2 === e ? 0 : n2 < e ? -1 : 1;
    let t = Mv.test(n2), r = Mv.test(e);
    return t && r && (n2 = +n2, e = +e), n2 === e ? 0 : t && !r ? -1 : r && !t ? 1 : n2 < e ? -1 : 1;
  }, VO = (n2, e) => Iv(e, n2);
  Nv.exports = { compareIdentifiers: Iv, rcompareIdentifiers: VO };
});
var Ks = R((lx, Lv) => {
  "use strict";
  var ja = zs(), { MAX_LENGTH: Fv, MAX_SAFE_INTEGER: Fa } = Ma(), { safeRe: La, t: Aa } = Ia(), GO = Na(), { compareIdentifiers: qh } = jv(), XO = (n2, e) => {
    let t = e.split(".");
    if (t.length > n2.length) return false;
    for (let r = 0; r < t.length; r++) if (qh(n2[r], t[r]) !== 0) return false;
    return true;
  }, xh = class n2 {
    constructor(e, t) {
      if (t = GO(t), e instanceof n2) {
        if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;
        e = e.version;
      } else if (typeof e != "string") throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
      if (e.length > Fv) throw new TypeError(`version is longer than ${Fv} characters`);
      ja("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
      let r = e.trim().match(t.loose ? La[Aa.LOOSE] : La[Aa.FULL]);
      if (!r) throw new TypeError(`Invalid Version: ${e}`);
      if (this.raw = e, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > Fa || this.major < 0) throw new TypeError("Invalid major version");
      if (this.minor > Fa || this.minor < 0) throw new TypeError("Invalid minor version");
      if (this.patch > Fa || this.patch < 0) throw new TypeError("Invalid patch version");
      r[4] ? this.prerelease = r[4].split(".").map((i) => {
        if (/^[0-9]+$/.test(i)) {
          let s = +i;
          if (s >= 0 && s < Fa) return s;
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
      if (ja("SemVer.compare", this.version, this.options, e), !(e instanceof n2)) {
        if (typeof e == "string" && e === this.version) return 0;
        e = new n2(e, this.options);
      }
      return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
    }
    compareMain(e) {
      return e instanceof n2 || (e = new n2(e, this.options)), this.major < e.major ? -1 : this.major > e.major ? 1 : this.minor < e.minor ? -1 : this.minor > e.minor ? 1 : this.patch < e.patch ? -1 : this.patch > e.patch ? 1 : 0;
    }
    comparePre(e) {
      if (e instanceof n2 || (e = new n2(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
      if (!this.prerelease.length && e.prerelease.length) return 1;
      if (!this.prerelease.length && !e.prerelease.length) return 0;
      let t = 0;
      do {
        let r = this.prerelease[t], i = e.prerelease[t];
        if (ja("prerelease compare", t, r, i), r === void 0 && i === void 0) return 0;
        if (i === void 0) return 1;
        if (r === void 0) return -1;
        if (r === i) continue;
        return qh(r, i);
      } while (++t);
    }
    compareBuild(e) {
      e instanceof n2 || (e = new n2(e, this.options));
      let t = 0;
      do {
        let r = this.build[t], i = e.build[t];
        if (ja("build compare", t, r, i), r === void 0 && i === void 0) return 0;
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
          let i = `-${t}`.match(this.options.loose ? La[Aa.PRERELEASELOOSE] : La[Aa.PRERELEASE]);
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
            if (r === false && (s = [t]), XO(this.prerelease, t)) {
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
  Lv.exports = xh;
});
var $v = R((dx, kv) => {
  "use strict";
  var Av = Ks(), JO = (n2, e, t = false) => {
    if (n2 instanceof Av) return n2;
    try {
      return new Av(n2, e);
    } catch (r) {
      if (!t) return null;
      throw r;
    }
  };
  kv.exports = JO;
});
var Hv = R((fx, Uv) => {
  "use strict";
  var Mh = class {
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
  Uv.exports = Mh;
});
var ni = R((hx, zv) => {
  "use strict";
  var Wv = Ks(), QO = (n2, e, t) => new Wv(n2, t).compare(new Wv(e, t));
  zv.exports = QO;
});
var Bv = R((px, Kv) => {
  "use strict";
  var YO = ni(), ZO = (n2, e, t) => YO(n2, e, t) === 0;
  Kv.exports = ZO;
});
var Gv = R((gx, Vv) => {
  "use strict";
  var eE = ni(), tE = (n2, e, t) => eE(n2, e, t) !== 0;
  Vv.exports = tE;
});
var Jv = R((mx, Xv) => {
  "use strict";
  var nE = ni(), rE = (n2, e, t) => nE(n2, e, t) > 0;
  Xv.exports = rE;
});
var Yv = R((_x, Qv) => {
  "use strict";
  var iE = ni(), sE = (n2, e, t) => iE(n2, e, t) >= 0;
  Qv.exports = sE;
});
var eb = R((yx, Zv) => {
  "use strict";
  var oE = ni(), aE = (n2, e, t) => oE(n2, e, t) < 0;
  Zv.exports = aE;
});
var nb = R((vx, tb) => {
  "use strict";
  var cE = ni(), uE = (n2, e, t) => cE(n2, e, t) <= 0;
  tb.exports = uE;
});
var ib = R((bx, rb) => {
  "use strict";
  var lE = Bv(), dE = Gv(), fE = Jv(), hE = Yv(), pE = eb(), gE = nb(), mE = (n2, e, t, r) => {
    switch (e) {
      case "===":
        return typeof n2 == "object" && (n2 = n2.version), typeof t == "object" && (t = t.version), n2 === t;
      case "!==":
        return typeof n2 == "object" && (n2 = n2.version), typeof t == "object" && (t = t.version), n2 !== t;
      case "":
      case "=":
      case "==":
        return lE(n2, t, r);
      case "!=":
        return dE(n2, t, r);
      case ">":
        return fE(n2, t, r);
      case ">=":
        return hE(n2, t, r);
      case "<":
        return pE(n2, t, r);
      case "<=":
        return gE(n2, t, r);
      default:
        throw new TypeError(`Invalid operator: ${e}`);
    }
  };
  rb.exports = mE;
});
var db = R((Cx, lb) => {
  "use strict";
  var Bs = /* @__PURE__ */ Symbol("SemVer ANY"), jh = class n2 {
    static get ANY() {
      return Bs;
    }
    constructor(e, t) {
      if (t = sb(t), e instanceof n2) {
        if (e.loose === !!t.loose) return e;
        e = e.value;
      }
      e = e.trim().split(/\s+/).join(" "), Nh("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === Bs ? this.value = "" : this.value = this.operator + this.semver.version, Nh("comp", this);
    }
    parse(e) {
      let t = this.options.loose ? ob[ab.COMPARATORLOOSE] : ob[ab.COMPARATOR], r = e.match(t);
      if (!r) throw new TypeError(`Invalid comparator: ${e}`);
      this.operator = r[1] !== void 0 ? r[1] : "", this.operator === "=" && (this.operator = ""), r[2] ? this.semver = new cb(r[2], this.options.loose) : this.semver = Bs;
    }
    toString() {
      return this.value;
    }
    test(e) {
      if (Nh("Comparator.test", e, this.options.loose), this.semver === Bs || e === Bs) return true;
      if (typeof e == "string") try {
        e = new cb(e, this.options);
      } catch {
        return false;
      }
      return Ih(e, this.operator, this.semver, this.options);
    }
    intersects(e, t) {
      if (!(e instanceof n2)) throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? true : new ub(e.value, t).test(this.value) : e.operator === "" ? e.value === "" ? true : new ub(this.value, t).test(e.semver) : (t = sb(t), t.includePrerelease && (this.value === "<0.0.0-0" || e.value === "<0.0.0-0") || !t.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0")) ? false : !!(this.operator.startsWith(">") && e.operator.startsWith(">") || this.operator.startsWith("<") && e.operator.startsWith("<") || this.semver.version === e.semver.version && this.operator.includes("=") && e.operator.includes("=") || Ih(this.semver, "<", e.semver, t) && this.operator.startsWith(">") && e.operator.startsWith("<") || Ih(this.semver, ">", e.semver, t) && this.operator.startsWith("<") && e.operator.startsWith(">")));
    }
  };
  lb.exports = jh;
  var sb = Na(), { safeRe: ob, t: ab } = Ia(), Ih = ib(), Nh = zs(), cb = Ks(), ub = Fh();
});
var Fh = R((wx, gb) => {
  "use strict";
  var _E = /\s+/g, Lh = class n2 {
    constructor(e, t) {
      if (t = vE(t), e instanceof n2) return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new n2(e.raw, t);
      if (e instanceof Ah) return this.raw = e.value, this.set = [[e]], this.formatted = void 0, this;
      if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e.trim().replace(_E, " "), this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((r) => r.length), !this.set.length) throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        let r = this.set[0];
        if (this.set = this.set.filter((i) => !hb(i[0])), this.set.length === 0) this.set = [r];
        else if (this.set.length > 1) {
          for (let i of this.set) if (i.length === 1 && OE(i[0])) {
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
      e = e.replace(TE, "");
      let r = ((this.options.includePrerelease && PE) | (this.options.loose && RE)) + ":" + e, i = fb.get(r);
      if (i) return i;
      let s = this.options.loose, o = s ? pt[tt.HYPHENRANGELOOSE] : pt[tt.HYPHENRANGE];
      e = e.replace(o, kE(this.options.includePrerelease)), Re("hyphen replace", e), e = e.replace(pt[tt.COMPARATORTRIM], wE), Re("comparator trim", e), e = e.replace(pt[tt.TILDETRIM], DE), Re("tilde trim", e), e = e.replace(pt[tt.CARETTRIM], SE), Re("caret trim", e);
      let a = e.split(" ").map((h) => EE(h, this.options)).join(" ").split(/\s+/).map((h) => AE(h, this.options));
      s && (a = a.filter((h) => (Re("loose invalid filter", h, this.options), !!h.match(pt[tt.COMPARATORLOOSE])))), Re("range list", a);
      let c = /* @__PURE__ */ new Map(), l = a.map((h) => new Ah(h, this.options));
      for (let h of l) {
        if (hb(h)) return [h];
        c.set(h.value, h);
      }
      c.size > 1 && c.has("") && c.delete("");
      let f = [...c.values()];
      return fb.set(r, f), f;
    }
    intersects(e, t) {
      if (!(e instanceof n2)) throw new TypeError("a Range is required");
      return this.set.some((r) => pb(r, t) && e.set.some((i) => pb(i, t) && r.every((s) => i.every((o) => s.intersects(o, t)))));
    }
    test(e) {
      if (!e) return false;
      if (typeof e == "string") try {
        e = new bE(e, this.options);
      } catch {
        return false;
      }
      for (let t = 0; t < this.set.length; t++) if ($E(this.set[t], e, this.options)) return true;
      return false;
    }
  };
  gb.exports = Lh;
  var yE = Hv(), fb = new yE(), vE = Na(), Ah = db(), Re = zs(), bE = Ks(), { safeRe: pt, src: CE, t: tt, comparatorTrimReplace: wE, tildeTrimReplace: DE, caretTrimReplace: SE } = Ia(), { FLAG_INCLUDE_PRERELEASE: PE, FLAG_LOOSE: RE } = Ma(), TE = new RegExp(CE[tt.BUILD], "g"), hb = (n2) => n2.value === "<0.0.0-0", OE = (n2) => n2.value === "", pb = (n2, e) => {
    let t = true, r = n2.slice(), i = r.pop();
    for (; t && r.length; ) t = r.every((s) => i.intersects(s, e)), i = r.pop();
    return t;
  }, EE = (n2, e) => (n2 = n2.replace(pt[tt.BUILD], ""), Re("comp", n2, e), n2 = IE(n2, e), Re("caret", n2), n2 = xE(n2, e), Re("tildes", n2), n2 = jE(n2, e), Re("xrange", n2), n2 = LE(n2, e), Re("stars", n2), n2), Be = (n2) => !n2 || n2.toLowerCase() === "x" || n2 === "*", qE = (n2, e, t) => Be(n2) && !Be(e) || Be(e) && t && !Be(t), xE = (n2, e) => n2.trim().split(/\s+/).map((t) => ME(t, e)).join(" "), ME = (n2, e) => {
    let t = e.loose ? pt[tt.TILDELOOSE] : pt[tt.TILDE], r = e.includePrerelease ? "-0" : "";
    return n2.replace(t, (i, s, o, a, c) => {
      Re("tilde", n2, i, s, o, a, c);
      let l;
      return Be(s) ? l = "" : Be(o) ? l = `>=${s}.0.0${r} <${+s + 1}.0.0-0` : Be(a) ? l = `>=${s}.${o}.0${r} <${s}.${+o + 1}.0-0` : c ? (Re("replaceTilde pr", c), l = `>=${s}.${o}.${a}-${c} <${s}.${+o + 1}.0-0`) : l = `>=${s}.${o}.${a} <${s}.${+o + 1}.0-0`, Re("tilde return", l), l;
    });
  }, IE = (n2, e) => n2.trim().split(/\s+/).map((t) => NE(t, e)).join(" "), NE = (n2, e) => {
    Re("caret", n2, e);
    let t = e.loose ? pt[tt.CARETLOOSE] : pt[tt.CARET], r = e.includePrerelease ? "-0" : "";
    return n2.replace(t, (i, s, o, a, c) => {
      Re("caret", n2, i, s, o, a, c);
      let l;
      return Be(s) ? l = "" : Be(o) ? l = `>=${s}.0.0${r} <${+s + 1}.0.0-0` : Be(a) ? s === "0" ? l = `>=${s}.${o}.0${r} <${s}.${+o + 1}.0-0` : l = `>=${s}.${o}.0${r} <${+s + 1}.0.0-0` : c ? (Re("replaceCaret pr", c), s === "0" ? o === "0" ? l = `>=${s}.${o}.${a}-${c} <${s}.${o}.${+a + 1}-0` : l = `>=${s}.${o}.${a}-${c} <${s}.${+o + 1}.0-0` : l = `>=${s}.${o}.${a}-${c} <${+s + 1}.0.0-0`) : (Re("no pr"), s === "0" ? o === "0" ? l = `>=${s}.${o}.${a} <${s}.${o}.${+a + 1}-0` : l = `>=${s}.${o}.${a} <${s}.${+o + 1}.0-0` : l = `>=${s}.${o}.${a} <${+s + 1}.0.0-0`), Re("caret return", l), l;
    });
  }, jE = (n2, e) => (Re("replaceXRanges", n2, e), n2.split(/\s+/).map((t) => FE(t, e)).join(" ")), FE = (n2, e) => {
    n2 = n2.trim();
    let t = e.loose ? pt[tt.XRANGELOOSE] : pt[tt.XRANGE];
    return n2.replace(t, (r, i, s, o, a, c) => {
      if (Re("xRange", n2, r, i, s, o, a, c), qE(s, o, a)) return n2;
      let l = Be(s), f = l || Be(o), h = f || Be(a), p = h;
      return i === "=" && p && (i = ""), c = e.includePrerelease ? "-0" : "", l ? i === ">" || i === "<" ? r = "<0.0.0-0" : r = "*" : i && p ? (f && (o = 0), a = 0, i === ">" ? (i = ">=", f ? (s = +s + 1, o = 0, a = 0) : (o = +o + 1, a = 0)) : i === "<=" && (i = "<", f ? s = +s + 1 : o = +o + 1), i === "<" && (c = "-0"), r = `${i + s}.${o}.${a}${c}`) : f ? r = `>=${s}.0.0${c} <${+s + 1}.0.0-0` : h && (r = `>=${s}.${o}.0${c} <${s}.${+o + 1}.0-0`), Re("xRange return", r), r;
    });
  }, LE = (n2, e) => (Re("replaceStars", n2, e), n2.trim().replace(pt[tt.STAR], "")), AE = (n2, e) => (Re("replaceGTE0", n2, e), n2.trim().replace(pt[e.includePrerelease ? tt.GTE0PRE : tt.GTE0], "")), kE = (n2) => (e, t, r, i, s, o, a, c, l, f, h, p) => (Be(r) ? t = "" : Be(i) ? t = `>=${r}.0.0${n2 ? "-0" : ""}` : Be(s) ? t = `>=${r}.${i}.0${n2 ? "-0" : ""}` : o ? t = `>=${t}` : t = `>=${t}${n2 ? "-0" : ""}`, Be(l) ? c = "" : Be(f) ? c = `<${+l + 1}.0.0-0` : Be(h) ? c = `<${l}.${+f + 1}.0-0` : p ? c = `<=${l}.${f}.${h}-${p}` : n2 ? c = `<${l}.${f}.${+h + 1}-0` : c = `<=${c}`, `${t} ${c}`.trim()), $E = (n2, e, t) => {
    for (let r = 0; r < n2.length; r++) if (!n2[r].test(e)) return false;
    if (e.prerelease.length && !t.includePrerelease) {
      for (let r = 0; r < n2.length; r++) if (Re(n2[r].semver), n2[r].semver !== Ah.ANY && n2[r].semver.prerelease.length > 0) {
        let i = n2[r].semver;
        if (i.major === e.major && i.minor === e.minor && i.patch === e.patch) return true;
      }
      return false;
    }
    return true;
  };
});
var _b = R((Dx, mb) => {
  "use strict";
  var UE = Fh(), HE = (n2, e, t) => {
    try {
      e = new UE(e, t);
    } catch {
      return false;
    }
    return e.test(n2);
  };
  mb.exports = HE;
});
var ka = R((Mt) => {
  "use strict";
  var WE = Mt && Mt.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), kh = Mt && Mt.__exportStar || function(n2, e) {
    for (var t in n2) t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && WE(e, n2, t);
  };
  Object.defineProperty(Mt, "__esModule", { value: true });
  Mt.DiagnosticPullMode = Mt.vsdiag = void 0;
  kh(G(), Mt);
  kh(ie(), Mt);
  var yb = Pd();
  Object.defineProperty(Mt, "vsdiag", { enumerable: true, get: function() {
    return yb.vsdiag;
  } });
  Object.defineProperty(Mt, "DiagnosticPullMode", { enumerable: true, get: function() {
    return yb.DiagnosticPullMode;
  } });
  kh(gh(), Mt);
});
var Sb = R((Ye) => {
  "use strict";
  var wb = Ye && Ye.__createBinding || (Object.create ? (function(n2, e, t, r) {
    r === void 0 && (r = t);
    var i = Object.getOwnPropertyDescriptor(e, t);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return e[t];
    } }), Object.defineProperty(n2, r, i);
  }) : (function(n2, e, t, r) {
    r === void 0 && (r = t), n2[r] = e[t];
  })), zE = Ye && Ye.__setModuleDefault || (Object.create ? (function(n2, e) {
    Object.defineProperty(n2, "default", { enumerable: true, value: e });
  }) : function(n2, e) {
    n2.default = e;
  }), Vs = Ye && Ye.__importStar || /* @__PURE__ */ (function() {
    var n2 = function(e) {
      return n2 = Object.getOwnPropertyNames || function(t) {
        var r = [];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[r.length] = i);
        return r;
      }, n2(e);
    };
    return function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null) for (var r = n2(e), i = 0; i < r.length; i++) r[i] !== "default" && wb(t, e, r[i]);
      return zE(t, e), t;
    };
  })(), Db = Ye && Ye.__exportStar || function(n2, e) {
    for (var t in n2) t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && wb(e, n2, t);
  };
  Object.defineProperty(Ye, "__esModule", { value: true });
  Ye.SettingMonitor = Ye.LanguageClient = Ye.TransportKind = void 0;
  var sr = Vs(require("child_process")), $h = Vs(require("fs")), Uh = Vs(require("path")), vb = Vs(require("readline")), Nr = require("vscode"), Vi = Vs(At()), bb = gh(), KE = Cv(), je = Th(), BE = $v(), VE = _b();
  Db(Th(), Ye);
  Db(ka(), Ye);
  var Cb = "^1.91.0", Fe;
  (function(n2) {
    n2[n2.stdio = 0] = "stdio", n2[n2.ipc = 1] = "ipc", n2[n2.pipe = 2] = "pipe", n2[n2.socket = 3] = "socket";
  })(Fe || (Ye.TransportKind = Fe = {}));
  var Ir;
  (function(n2) {
    function e(t) {
      let r = t;
      return r && r.kind === Fe.socket && Vi.number(r.port);
    }
    n2.isSocket = e;
  })(Ir || (Ir = {}));
  var Hh;
  (function(n2) {
    function e(t) {
      return Vi.string(t.command);
    }
    n2.is = e;
  })(Hh || (Hh = {}));
  var Wh;
  (function(n2) {
    function e(t) {
      return Vi.string(t.module);
    }
    n2.is = e;
  })(Wh || (Wh = {}));
  var zh;
  (function(n2) {
    function e(t) {
      let r = t;
      return r && r.writer !== void 0 && r.reader !== void 0;
    }
    n2.is = e;
  })(zh || (zh = {}));
  var Kh;
  (function(n2) {
    function e(t) {
      let r = t;
      return r && r.process !== void 0 && typeof r.detached == "boolean";
    }
    n2.is = e;
  })(Kh || (Kh = {}));
  var Bh = class extends bb.BaseLanguageClient {
    _serverOptions;
    _stdioOptions;
    _forceDebug;
    _serverProcess;
    _isDetached;
    _isInDebugMode;
    constructor(e, t, r, i, s) {
      let o, a, c, l, f;
      Vi.string(t) ? (o = e, a = t, c = r, l = i, f = !!s) : (o = e.toLowerCase(), a = e, c = t, l = r, f = i), f === void 0 && (f = false), super(o, a, l), this._serverOptions = c, this._stdioOptions = l.stdioOptions ?? { stdout: (h, p) => {
        vb.createInterface({ input: h, crlfDelay: 1 / 0, terminal: false, historySize: 0 }).on("line", (g) => p.info(g));
      }, stderr: (h, p) => {
        vb.createInterface({ input: h, crlfDelay: 1 / 0, terminal: false, historySize: 0 }).on("line", (g) => p.error(g));
      } }, this._forceDebug = f, this._isInDebugMode = f;
      try {
        this.checkVersion();
      } catch (h) {
        throw Vi.string(h.message) && this.outputChannel.appendLine(h.message), h;
      }
    }
    checkVersion() {
      let e = BE(Nr.version);
      if (!e) throw new Error(`No valid VS Code version detected. Version string is: ${Nr.version}`);
      if (e.prerelease && e.prerelease.length > 0 && (e.prerelease = []), !VE(e, Cb)) throw new Error(`The language client requires VS Code version ${Cb} but received version ${Nr.version}`);
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
          e.pid !== void 0 && (process.kill(e.pid, 0), (0, KE.terminate)(e));
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
        let _ = /* @__PURE__ */ Object.create(null);
        return Object.keys(process.env).forEach((y) => _[y] = process.env[y]), g && (_.ELECTRON_RUN_AS_NODE = "1", _.ELECTRON_NO_ASAR = "1"), p && Object.keys(p).forEach((y) => _[y] = p[y]), _;
      }
      let r = ["--debug=", "--debug-brk=", "--inspect=", "--inspect-brk="], i = ["--debug", "--debug-brk", "--inspect", "--inspect-brk"];
      function s() {
        let p = process.execArgv;
        return p ? p.some((g) => r.some((_) => g.startsWith(_)) || i.some((_) => g === _)) : false;
      }
      function o(p) {
        if (p.stdin === null || p.stdout === null || p.stderr === null) throw new Error("Process created without stdio streams");
      }
      let a = this._stdioOptions.stdout, c = this._stdioOptions.stderr, l = this._serverOptions;
      if (Vi.func(l)) return l().then((p) => {
        if (bb.MessageTransports.is(p)) return this._isDetached = !!p.detached, p;
        if (zh.is(p)) return this._isDetached = !!p.detached, { reader: new je.StreamMessageReader(p.reader), writer: new je.StreamMessageWriter(p.writer) };
        {
          let g;
          return Kh.is(p) ? (g = p.process, this._isDetached = p.detached) : (g = p, this._isDetached = false), c(g.stderr, this.outputChannel), { reader: new je.StreamMessageReader(g.stdout), writer: new je.StreamMessageWriter(g.stdin) };
        }
      });
      let f, h = l;
      return h.run || h.debug ? this._forceDebug || s() ? (f = h.debug, this._isInDebugMode = true) : (f = h.run, this._isInDebugMode = false) : f = l, this._getServerWorkingDir(f.options).then((p) => {
        if (Wh.is(f) && f.module) {
          let g = f, _ = g.transport || Fe.stdio;
          if (g.runtime) {
            let y = [], D = g.options ?? /* @__PURE__ */ Object.create(null);
            D.execArgv && D.execArgv.forEach((j) => y.push(j)), y.push(g.module), g.args && g.args.forEach((j) => y.push(j));
            let T = /* @__PURE__ */ Object.create(null);
            T.cwd = p, T.env = t(D.env, false);
            let w = this._getRuntimePath(g.runtime, p), x;
            if (_ === Fe.ipc ? (T.stdio = [null, null, null, "ipc"], y.push("--node-ipc")) : _ === Fe.stdio ? y.push("--stdio") : _ === Fe.pipe ? (x = (0, je.generateRandomPipeName)(), y.push(`--pipe=${x}`)) : Ir.isSocket(_) && y.push(`--socket=${_.port}`), y.push(`--clientProcessId=${process.pid.toString()}`), _ === Fe.ipc || _ === Fe.stdio) {
              let j = sr.spawn(w, y, T);
              return !j || !j.pid ? Bi(j, `Launching server using runtime ${w} failed.`) : (this._serverProcess = j, c(j.stderr, this.outputChannel), _ === Fe.ipc ? (a(j.stdout, this.outputChannel), Promise.resolve({ reader: new je.IPCMessageReader(j), writer: new je.IPCMessageWriter(j) })) : Promise.resolve({ reader: new je.StreamMessageReader(j.stdout), writer: new je.StreamMessageWriter(j.stdin) }));
            } else {
              if (_ === Fe.pipe) return (0, je.createClientPipeTransport)(x).then((j) => {
                let I = sr.spawn(w, y, T);
                return !I || !I.pid ? Bi(I, `Launching server using runtime ${w} failed.`) : (this._serverProcess = I, c(I.stderr, this.outputChannel), a(I.stdout, this.outputChannel), j.onConnected().then((Y) => ({ reader: Y[0], writer: Y[1] })));
              });
              if (Ir.isSocket(_)) return (0, je.createClientSocketTransport)(_.port).then((j) => {
                let I = sr.spawn(w, y, T);
                return !I || !I.pid ? Bi(I, `Launching server using runtime ${w} failed.`) : (this._serverProcess = I, c(I.stderr, this.outputChannel), a(I.stdout, this.outputChannel), j.onConnected().then((Y) => ({ reader: Y[0], writer: Y[1] })));
              });
            }
          } else {
            let y;
            return new Promise((D, T) => {
              let w = (g.args && g.args.slice()) ?? [];
              _ === Fe.ipc ? w.push("--node-ipc") : _ === Fe.stdio ? w.push("--stdio") : _ === Fe.pipe ? (y = (0, je.generateRandomPipeName)(), w.push(`--pipe=${y}`)) : Ir.isSocket(_) && w.push(`--socket=${_.port}`), w.push(`--clientProcessId=${process.pid.toString()}`);
              let x = g.options ? { ...g.options } : /* @__PURE__ */ Object.create(null);
              if (x.env = t(x.env, true), x.execArgv = x.execArgv || [], x.cwd = p, x.silent = true, _ === Fe.ipc || _ === Fe.stdio) {
                let j = sr.fork(g.module, w || [], x);
                o(j), this._serverProcess = j, c(j.stderr, this.outputChannel), _ === Fe.ipc ? (a(j.stdout, this.outputChannel), D({ reader: new je.IPCMessageReader(this._serverProcess), writer: new je.IPCMessageWriter(this._serverProcess) })) : D({ reader: new je.StreamMessageReader(j.stdout), writer: new je.StreamMessageWriter(j.stdin) });
              } else _ === Fe.pipe ? (0, je.createClientPipeTransport)(y).then((j) => {
                let I = sr.fork(g.module, w || [], x);
                o(I), this._serverProcess = I, c(I.stderr, this.outputChannel), a(I.stdout, this.outputChannel), j.onConnected().then((Y) => {
                  D({ reader: Y[0], writer: Y[1] });
                }, T);
              }, T) : Ir.isSocket(_) && (0, je.createClientSocketTransport)(_.port).then((j) => {
                let I = sr.fork(g.module, w || [], x);
                o(I), this._serverProcess = I, c(I.stderr, this.outputChannel), a(I.stdout, this.outputChannel), j.onConnected().then((Y) => {
                  D({ reader: Y[0], writer: Y[1] });
                }, T);
              }, T);
            });
          }
        } else if (Hh.is(f) && f.command) {
          let g = f, _ = f.args !== void 0 ? f.args.slice(0) : [], y, D = f.transport;
          if (D === Fe.stdio) _.push("--stdio");
          else if (D === Fe.pipe) y = (0, je.generateRandomPipeName)(), _.push(`--pipe=${y}`);
          else if (Ir.isSocket(D)) _.push(`--socket=${D.port}`);
          else if (D === Fe.ipc) throw new Error("Transport kind ipc is not support for command executable");
          let T = Object.assign({}, g.options);
          if (T.cwd = T.cwd || p, D === void 0 || D === Fe.stdio) {
            let w = sr.spawn(g.command, _, T);
            return !w || !w.pid ? Bi(w, `Launching server using command ${g.command} failed.`) : (c(w.stderr, this.outputChannel), this._serverProcess = w, this._isDetached = !!T.detached, Promise.resolve({ reader: new je.StreamMessageReader(w.stdout), writer: new je.StreamMessageWriter(w.stdin) }));
          } else {
            if (D === Fe.pipe) return (0, je.createClientPipeTransport)(y).then((w) => {
              let x = sr.spawn(g.command, _, T);
              return !x || !x.pid ? Bi(x, `Launching server using command ${g.command} failed.`) : (this._serverProcess = x, this._isDetached = !!T.detached, c(x.stderr, this.outputChannel), a(x.stdout, this.outputChannel), w.onConnected().then((j) => ({ reader: j[0], writer: j[1] })));
            });
            if (Ir.isSocket(D)) return (0, je.createClientSocketTransport)(D.port).then((w) => {
              let x = sr.spawn(g.command, _, T);
              return !x || !x.pid ? Bi(x, `Launching server using command ${g.command} failed.`) : (this._serverProcess = x, this._isDetached = !!T.detached, c(x.stderr, this.outputChannel), a(x.stdout, this.outputChannel), w.onConnected().then((j) => ({ reader: j[0], writer: j[1] })));
            });
          }
        }
        return Promise.reject(new Error("Unsupported server configuration " + JSON.stringify(l, null, 4)));
      }).finally(() => {
        this._serverProcess !== void 0 && this._serverProcess.on("exit", (p, g) => {
          p === 0 ? this.info("Server process exited successfully", void 0, false) : p !== null && this.error(`Server process exited with code ${p}.`, void 0, false), g !== null && this.error(`Server process exited with signal ${g}.`, void 0, false);
        });
      });
    }
    _getRuntimePath(e, t) {
      if (Uh.isAbsolute(e)) return e;
      let r = this._mainGetRootPath();
      if (r !== void 0) {
        let i = Uh.join(r, e);
        if ($h.existsSync(i)) return i;
      }
      if (t !== void 0) {
        let i = Uh.join(t, e);
        if ($h.existsSync(i)) return i;
      }
      return e;
    }
    _mainGetRootPath() {
      let e = Nr.workspace.workspaceFolders;
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
  Ye.LanguageClient = Bh;
  var Vh = class {
    _client;
    _setting;
    _listeners;
    constructor(e, t) {
      this._client = e, this._setting = t, this._listeners = [];
    }
    start() {
      return Nr.workspace.onDidChangeConfiguration(this.onDidChangeConfiguration, this, this._listeners), this.onDidChangeConfiguration(), new Nr.Disposable(() => {
        this._client.needsStop() && this._client.stop();
      });
    }
    onDidChangeConfiguration() {
      let e = this._setting.indexOf("."), t = e >= 0 ? this._setting.substr(0, e) : this._setting, r = e >= 0 ? this._setting.substr(e + 1) : void 0, i = r ? Nr.workspace.getConfiguration(t).get(r, false) : Nr.workspace.getConfiguration(t);
      i && this._client.needsStart() ? this._client.start().catch((s) => this._client.error("Start failed after configuration change", s, "force")) : !i && this._client.needsStop() && this._client.stop().catch((s) => this._client.error("Stop failed after configuration change", s, "force"));
    }
  };
  Ye.SettingMonitor = Vh;
  function Bi(n2, e) {
    return n2 === null ? Promise.reject(e) : new Promise((t, r) => {
      n2.on("error", (i) => {
        r(`${e} ${i}`);
      }), setImmediate(() => r(e));
    });
  }
});
var r0 = {};
Ja(r0, { activate: () => t0, deactivate: () => n0 });
module.exports = es(r0);
var Ba = require("vscode"), Qs = gr(Sb());
var ee = require("vscode"), Xs = gr(ka());
var tn = require("vscode");
var GE = { 975(n2) {
  function e(i) {
    if (typeof i != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(i));
  }
  function t(i, s) {
    for (var o, a = "", c = 0, l = -1, f = 0, h = 0; h <= i.length; ++h) {
      if (h < i.length) o = i.charCodeAt(h);
      else {
        if (o === 47) break;
        o = 47;
      }
      if (o === 47) {
        if (!(l === h - 1 || f === 1)) if (l !== h - 1 && f === 2) {
          if (a.length < 2 || c !== 2 || a.charCodeAt(a.length - 1) !== 46 || a.charCodeAt(a.length - 2) !== 46) {
            if (a.length > 2) {
              var p = a.lastIndexOf("/");
              if (p !== a.length - 1) {
                p === -1 ? (a = "", c = 0) : c = (a = a.slice(0, p)).length - 1 - a.lastIndexOf("/"), l = h, f = 0;
                continue;
              }
            } else if (a.length === 2 || a.length === 1) {
              a = "", c = 0, l = h, f = 0;
              continue;
            }
          }
          s && (a.length > 0 ? a += "/.." : a = "..", c = 2);
        } else a.length > 0 ? a += "/" + i.slice(l + 1, h) : a = i.slice(l + 1, h), c = h - l - 1;
        l = h, f = 0;
      } else o === 46 && f !== -1 ? ++f : f = -1;
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
    for (var a = i.length, c = a - o, l = 1; l < s.length && s.charCodeAt(l) === 47; ++l) ;
    for (var f = s.length - l, h = c < f ? c : f, p = -1, g = 0; g <= h; ++g) {
      if (g === h) {
        if (f > h) {
          if (s.charCodeAt(l + g) === 47) return s.slice(l + g + 1);
          if (g === 0) return s.slice(l + g);
        } else c > h && (i.charCodeAt(o + g) === 47 ? p = g : g === 0 && (p = 0));
        break;
      }
      var _ = i.charCodeAt(o + g);
      if (_ !== s.charCodeAt(l + g)) break;
      _ === 47 && (p = g);
    }
    var y = "";
    for (g = o + p + 1; g <= a; ++g) g !== a && i.charCodeAt(g) !== 47 || (y.length === 0 ? y += ".." : y += "/..");
    return y.length > 0 ? y + s.slice(l + p) : (l += p, s.charCodeAt(l) === 47 && ++l, s.slice(l));
  }, _makeLong: function(i) {
    return i;
  }, dirname: function(i) {
    if (e(i), i.length === 0) return ".";
    for (var s = i.charCodeAt(0), o = s === 47, a = -1, c = true, l = i.length - 1; l >= 1; --l) if ((s = i.charCodeAt(l)) === 47) {
      if (!c) {
        a = l;
        break;
      }
    } else c = false;
    return a === -1 ? o ? "/" : "." : o && a === 1 ? "//" : i.slice(0, a);
  }, basename: function(i, s) {
    if (s !== void 0 && typeof s != "string") throw new TypeError('"ext" argument must be a string');
    e(i);
    var o, a = 0, c = -1, l = true;
    if (s !== void 0 && s.length > 0 && s.length <= i.length) {
      if (s.length === i.length && s === i) return "";
      var f = s.length - 1, h = -1;
      for (o = i.length - 1; o >= 0; --o) {
        var p = i.charCodeAt(o);
        if (p === 47) {
          if (!l) {
            a = o + 1;
            break;
          }
        } else h === -1 && (l = false, h = o + 1), f >= 0 && (p === s.charCodeAt(f) ? --f === -1 && (c = o) : (f = -1, c = h));
      }
      return a === c ? c = h : c === -1 && (c = i.length), i.slice(a, c);
    }
    for (o = i.length - 1; o >= 0; --o) if (i.charCodeAt(o) === 47) {
      if (!l) {
        a = o + 1;
        break;
      }
    } else c === -1 && (l = false, c = o + 1);
    return c === -1 ? "" : i.slice(a, c);
  }, extname: function(i) {
    e(i);
    for (var s = -1, o = 0, a = -1, c = true, l = 0, f = i.length - 1; f >= 0; --f) {
      var h = i.charCodeAt(f);
      if (h !== 47) a === -1 && (c = false, a = f + 1), h === 46 ? s === -1 ? s = f : l !== 1 && (l = 1) : s !== -1 && (l = -1);
      else if (!c) {
        o = f + 1;
        break;
      }
    }
    return s === -1 || a === -1 || l === 0 || l === 1 && s === a - 1 && s === o + 1 ? "" : i.slice(s, a);
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
    for (var l = -1, f = 0, h = -1, p = true, g = i.length - 1, _ = 0; g >= o; --g) if ((a = i.charCodeAt(g)) !== 47) h === -1 && (p = false, h = g + 1), a === 46 ? l === -1 ? l = g : _ !== 1 && (_ = 1) : l !== -1 && (_ = -1);
    else if (!p) {
      f = g + 1;
      break;
    }
    return l === -1 || h === -1 || _ === 0 || _ === 1 && l === h - 1 && l === f + 1 ? h !== -1 && (s.base = s.name = f === 0 && c ? i.slice(1, h) : i.slice(f, h)) : (f === 0 && c ? (s.name = i.slice(1, l), s.base = i.slice(1, h)) : (s.name = i.slice(f, l), s.base = i.slice(f, h)), s.ext = i.slice(l, h)), f > 0 ? s.dir = i.slice(0, f - 1) : c && (s.dir = "/"), s;
  }, sep: "/", delimiter: ":", win32: null, posix: null };
  r.posix = r, n2.exports = r;
} }, Pb = {};
function Gi(n2) {
  var e = Pb[n2];
  if (e !== void 0) return e.exports;
  var t = Pb[n2] = { exports: {} };
  return GE[n2](t, t.exports, Gi), t.exports;
}
var Rb;
Gi.d = (n2, e) => {
  for (var t in e) Gi.o(e, t) && !Gi.o(n2, t) && Object.defineProperty(n2, t, { enumerable: true, get: e[t] });
}, Gi.o = (n2, e) => Object.prototype.hasOwnProperty.call(n2, e), typeof process == "object" ? Rb = process.platform === "win32" : typeof navigator == "object" && (Rb = navigator.userAgent.indexOf("Windows") >= 0);
var Tb = Gi(975), Gs = Tb.posix || Tb, $a = "/", ri;
(function(n2) {
  n2.joinPath = function(e, ...t) {
    return e.with({ path: Gs.join(e.path, ...t) });
  }, n2.resolvePath = function(e, ...t) {
    let r = e.path, i = false;
    r[0] !== $a && (r = $a + r, i = true);
    let s = Gs.resolve(r, ...t);
    return i && s[0] === $a && !e.authority && (s = s.substring(1)), e.with({ path: s });
  }, n2.dirname = function(e) {
    if (e.path.length === 0 || e.path === $a) return e;
    let t = Gs.dirname(e.path);
    return t.length === 1 && t.charCodeAt(0) === 46 && (t = ""), e.with({ path: t });
  }, n2.basename = function(e) {
    return Gs.basename(e.path);
  }, n2.extname = function(e) {
    return Gs.extname(e.path);
  };
})(ri || (ri = {}));
function qb(n2) {
  let e = Ob(), t = Eb(), r = new tn.EventEmitter();
  return n2.push(tn.extensions.onDidChange((i) => {
    let s = Eb();
    (s.length !== t.length || !s.every((o, a) => o === t[a])) && (t = s, r.fire());
  })), n2.push(tn.workspace.onDidChangeConfiguration((i) => {
    i.affectsConfiguration("css.customData") && (e = Ob(), r.fire());
  })), { get uris() {
    return e.concat(t);
  }, get onDidChange() {
    return r.event;
  } };
}
function Ob() {
  let n2 = tn.workspace.workspaceFolders, e = [];
  if (!n2) return e;
  let t = (r, i) => {
    if (Array.isArray(r)) for (let s of r) typeof s == "string" && e.push(ri.resolvePath(i, s).toString());
  };
  for (let r = 0; r < n2.length; r++) {
    let i = n2[r].uri, o = tn.workspace.getConfiguration("css", i).inspect("customData");
    o && (t(o.workspaceFolderValue, i), r === 0 && (tn.workspace.workspaceFile && t(o.workspaceValue, tn.workspace.workspaceFile), t(o.globalValue, i)));
  }
  return e;
}
function Eb() {
  let n2 = [];
  for (let e of tn.extensions.all) {
    let t = e.packageJSON?.contributes?.css?.customData;
    if (Array.isArray(t)) for (let r of t) n2.push(ri.joinPath(e.extensionUri, r).toString());
  }
  return n2;
}
var jr = require("vscode"), Ua = gr(ka()), xb;
((e) => e.type = new Ua.RequestType("fs/content"))(xb ||= {});
var Mb;
((e) => e.type = new Ua.RequestType("fs/stat"))(Mb ||= {});
var Ib;
((e) => e.type = new Ua.RequestType("fs/readDir"))(Ib ||= {});
function Nb(n2, e) {
  n2.onRequest(xb.type, (t) => {
    let r = jr.Uri.parse(t.uri);
    return r.scheme === "file" && e.fs ? e.fs.getContent(t.uri) : jr.workspace.fs.readFile(r).then((i) => new e.TextDecoder(t.encoding).decode(i));
  }), n2.onRequest(Ib.type, (t) => {
    let r = jr.Uri.parse(t);
    return r.scheme === "file" && e.fs ? e.fs.readDirectory(t) : jr.workspace.fs.readDirectory(r);
  }), n2.onRequest(Mb.type, (t) => {
    let r = jr.Uri.parse(t);
    return r.scheme === "file" && e.fs ? e.fs.stat(t) : jr.workspace.fs.stat(r);
  });
}
var Gh;
((e) => e.type = new Xs.NotificationType("css/customDataChanged"))(Gh ||= {});
var XE = ["newlineBetweenSelectors", "newlineBetweenRules", "spaceAroundSelectorSeparator", "braceStyle", "preserveNewLines", "maxPreserveNewLines"];
async function jb(n2, e, t) {
  let r = qb(n2.subscriptions), i = ["css", "scss", "less"], s = i.map((h) => ({ languageId: h, settingId: `${h}.format.enable`, provider: void 0 })), o = { documentSelector: i, synchronize: { configurationSection: ["css", "scss", "less"] }, initializationOptions: { handledSchemas: ["file"], provideFormatter: false, customCapabilities: { rangeFormatting: { editLimit: 1e4 } } }, middleware: { provideCompletionItem(h, p, g, _, y) {
    function D(I) {
      let Y = I.range;
      Y instanceof ee.Range && Y.end.isAfter(p) && Y.start.isBeforeOrEqual(p) && (I.range = { inserting: new ee.Range(Y.start, p), replacing: Y });
    }
    function T(I) {
      I.kind === ee.CompletionItemKind.Color && (I.label = { label: I.label, description: I.documentation });
    }
    function w(I) {
      return I && ((Array.isArray(I) ? I : I.items).forEach(D), (Array.isArray(I) ? I : I.items).forEach(T)), I;
    }
    let x = (I) => I && I.then, j = y(h, p, g, _);
    return x(j) ? j.then(w) : w(j);
  } } }, a = e("css", ee.l10n.t("CSS Language Server"), o);
  a.registerProposedFeatures(), await a.start(), a.sendNotification(Gh.type, r.uris), r.onDidChange(() => {
    a.sendNotification(Gh.type, r.uris);
  });
  for (let h of s) f(h), n2.subscriptions.push({ dispose: () => h.provider?.dispose() }), n2.subscriptions.push(ee.workspace.onDidChangeConfiguration((p) => p.affectsConfiguration(h.settingId) && f(h)));
  Nb(a, t), n2.subscriptions.push(c());
  function c() {
    let h = /^(\s*)(\/(\*\s*(#\w*)?)?)?$/;
    return ee.languages.registerCompletionItemProvider(i, { provideCompletionItems(p, g) {
      let y = p.getText(new ee.Range(new ee.Position(g.line, 0), g)).match(h);
      if (y) {
        let D = new ee.Range(new ee.Position(g.line, y[1].length), g), T = new ee.CompletionItem("#region", ee.CompletionItemKind.Snippet);
        T.range = D, ee.TextEdit.replace(D, "/* #region */"), T.insertText = new ee.SnippetString("/* #region $1*/"), T.documentation = ee.l10n.t("Folding Region Start"), T.filterText = y[2], T.sortText = "za";
        let w = new ee.CompletionItem("#endregion", ee.CompletionItemKind.Snippet);
        return w.range = D, w.insertText = "/* #endregion */", w.documentation = ee.l10n.t("Folding Region End"), w.sortText = "zb", w.filterText = y[2], [T, w];
      }
      return null;
    } });
  }
  ee.commands.registerCommand("_css.applyCodeAction", l);
  function l(h, p, g) {
    let _ = ee.window.activeTextEditor;
    _ && _.document.uri.toString() === h && (_.document.version !== p && ee.window.showInformationMessage(ee.l10n.t("CSS fix is outdated and can't be applied to the document.")), _.edit((y) => {
      for (let D of g) y.replace(a.protocol2CodeConverter.asRange(D.range), D.newText);
    }).then((y) => {
      y || ee.window.showErrorMessage(ee.l10n.t("Failed to apply CSS fix to the document. Please consider opening an issue with steps to reproduce."));
    }));
  }
  function f(h) {
    let p = ee.workspace.getConfiguration().get(h.settingId);
    !p && h.provider ? (h.provider.dispose(), h.provider = void 0) : p && !h.provider && (h.provider = ee.languages.registerDocumentRangeFormattingEditProvider(h.languageId, { provideDocumentRangeFormattingEdits(g, _, y, D) {
      let T = ee.workspace.getConfiguration("files", g), w = { trimTrailingWhitespace: T.get("trimTrailingWhitespace"), trimFinalNewlines: T.get("trimFinalNewlines"), insertFinalNewline: T.get("insertFinalNewline") }, x = { textDocument: a.code2ProtocolConverter.asTextDocumentIdentifier(g), range: a.code2ProtocolConverter.asRange(_), options: a.code2ProtocolConverter.asFormattingOptions(y, w) }, j = ee.workspace.getConfiguration(h.languageId, g).get("format");
      if (j) for (let I of XE) {
        let Y = j[I];
        Y != null && (x.options[I] = Y);
      }
      return a.sendRequest(Xs.DocumentRangeFormattingRequest.type, x, D).then(a.protocol2CodeConverter.asTextEdits, (I) => (a.handleFailedRequest(Xs.DocumentRangeFormattingRequest.type, void 0, I, []), Promise.resolve([])));
    } }));
  }
  return a;
}
var Xi = gr(require("fs")), Ha = require("vscode");
function Fb() {
  function n2(e) {
    if (!e.startsWith("file://")) throw new Error("fileRequestService can only handle file URLs");
  }
  return { getContent(e, t) {
    return n2(e), new Promise((r, i) => {
      let s = Ha.Uri.parse(e);
      Xi.readFile(s.fsPath, t, (o, a) => {
        if (o) return i(o);
        r(a.toString());
      });
    });
  }, stat(e) {
    return n2(e), new Promise((t, r) => {
      let i = Ha.Uri.parse(e);
      Xi.stat(i.fsPath, (s, o) => {
        if (s) return s.code === "ENOENT" ? t({ type: 0, ctime: -1, mtime: -1, size: -1 }) : r(s);
        let a = 0;
        o.isFile() ? a = 1 : o.isDirectory() ? a = 2 : o.isSymbolicLink() && (a = 64), t({ type: a, ctime: o.ctime.getTime(), mtime: o.mtime.getTime(), size: o.size });
      });
    });
  }, readDirectory(e) {
    return n2(e), new Promise((t, r) => {
      let i = Ha.Uri.parse(e).fsPath;
      Xi.readdir(i, { withFileTypes: true }, (s, o) => {
        if (s) return r(s);
        t(o.map((a) => a.isSymbolicLink() ? [a.name, 64] : a.isDirectory() ? [a.name, 2] : a.isFile() ? [a.name, 1] : [a.name, 0]));
      });
    });
  } };
}
var Fr = gr(require("path")), Dt = gr(require("vscode"));
var Xh = gr(require("vscode"));
var Wa = Object.freeze({ file: "file", notebookCell: "vscode-notebook-cell", untitled: "untitled" }), za = Object.freeze({ plain: "text/plain", uriList: "text/uri-list" });
function Lb(n2) {
  let e = JE(n2);
  return e.scheme === Wa.untitled ? Xh.workspace.workspaceFolders?.[0]?.uri : ri.dirname(e);
}
function JE(n2) {
  if (n2.scheme === Wa.notebookCell) {
    for (let e of Xh.workspace.notebookDocuments) for (let t of e.getCells()) if (t.document.uri.toString() === n2.toString()) return e.uri;
  }
  return n2;
}
var Ab = gr(require("vscode"));
function QE(n2) {
  return n2.split(`\r
`);
}
function YE(n2) {
  return QE(n2).filter((e) => !e.startsWith("#")).map((e) => e.trim());
}
var Js = class n {
  constructor(e) {
    this.entries = e;
  }
  static from(e) {
    return new n(ZE(YE(e).map((t) => {
      try {
        return { uri: Ab.Uri.parse(t), str: t };
      } catch {
        return;
      }
    })));
  }
};
function ZE(n2) {
  return n2.filter((e) => !!e);
}
var Jh = class {
  constructor() {
    this.kind = Dt.DocumentDropOrPasteEditKind.Empty.append("css", "link", "url");
  }
  async provideDocumentDropEdits(e, t, r, i) {
    let s = await this.getUriList(r);
    if (!s.entries.length || i.isCancellationRequested) return;
    let o = await this.createUriListSnippet(e.uri, s);
    if (!(!o || i.isCancellationRequested)) return { kind: this.kind, title: o.label, insertText: o.snippet.value, yieldTo: this.pasteAsCssUrlByDefault(e, t) ? [] : [Dt.DocumentDropOrPasteEditKind.Empty.append("uri")] };
  }
  async provideDocumentPasteEdits(e, t, r, i, s) {
    let o = await this.getUriList(r);
    if (!o.entries.length || s.isCancellationRequested) return;
    let a = await this.createUriListSnippet(e.uri, o);
    if (!(!a || s.isCancellationRequested)) return [{ kind: this.kind, title: a.label, insertText: a.snippet.value, yieldTo: this.pasteAsCssUrlByDefault(e, t[0].start) ? [] : [Dt.DocumentDropOrPasteEditKind.Empty.append("uri")] }];
  }
  async getUriList(e) {
    let t = await e.get(za.uriList)?.asString();
    if (t) return Js.from(t);
    let r = [];
    for (let [i, s] of e) {
      let o = s.asFile();
      o?.uri && r.push(o.uri);
    }
    return new Js(r.map((i) => ({ uri: i, str: i.toString(true) })));
  }
  async createUriListSnippet(e, t) {
    if (!t.entries.length) return;
    let r = new Dt.SnippetString();
    for (let i = 0; i < t.entries.length; i++) {
      let s = t.entries[i], a = e0(Lb(e), s.uri) ?? s.str;
      r.appendText(`url(${a})`), i !== t.entries.length - 1 && r.appendText(" ");
    }
    return { snippet: r, label: t.entries.length > 1 ? Dt.l10n.t("Insert url() Functions") : Dt.l10n.t("Insert url() Function") };
  }
  pasteAsCssUrlByDefault(e, t) {
    let r = /url\(.+?\)/gi;
    for (let i of Array.from(e.lineAt(t.line).text.matchAll(r))) if (t.character > i.index && t.character < i.index + i[0].length) return false;
    return true;
  }
};
function e0(n2, e) {
  if (n2 && n2.scheme === e.scheme && n2.authority === e.authority) {
    if (e.scheme === Wa.file) {
      let t = Fr.relative(n2.fsPath, e.fsPath);
      return Fr.posix.normalize(t.split(Fr.sep).join(Fr.posix.sep));
    }
    return Fr.posix.relative(n2.path, e.path);
  }
}
function kb(n2) {
  let e = new Jh();
  return Dt.Disposable.from(Dt.languages.registerDocumentDropEditProvider(n2, e, { providedDropEditKinds: [e.kind], dropMimeTypes: [za.uriList, "files"] }), Dt.languages.registerDocumentPasteEditProvider(n2, e, { providedPasteEditKinds: [e.kind], pasteMimeTypes: [za.uriList, "files"] }));
}
var Ka;
async function t0(n2) {
  let t = `./server/${(Ba.extensions.getExtension("vscode.css-language-features")?.packageJSON?.main || "").indexOf("/dist/") !== -1 ? "dist" : "out"}/node/cssServerMain`, r = n2.asAbsolutePath(t), i = { execArgv: ["--nolazy", "--inspect=" + (7e3 + Math.round(Math.random() * 999))] }, s = { run: { module: r, transport: Qs.TransportKind.ipc }, debug: { module: r, transport: Qs.TransportKind.ipc, options: i } }, o = (a, c, l) => new Qs.LanguageClient(a, c, s, l);
  process.env.VSCODE_L10N_BUNDLE_LOCATION = Ba.l10n.uri?.toString() ?? "", Ka = await jb(n2, o, { fs: Fb(), TextDecoder }), n2.subscriptions.push(kb({ language: "css", scheme: "*" }));
}
async function n0() {
  Ka && (await Ka.stop(), Ka = void 0);
}
