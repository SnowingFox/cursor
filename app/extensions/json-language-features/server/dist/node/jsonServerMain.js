import { createRequire } from "module";
const require = createRequire(import.meta.url);
var Ym = Object.create;
var Kr = Object.defineProperty;
var Km = Object.getOwnPropertyDescriptor;
var eg = Object.getOwnPropertyNames;
var tg = Object.getPrototypeOf, ng = Object.prototype.hasOwnProperty;
var fe = ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (t, n) => (typeof require < "u" ? require : t)[n] }) : e)(function(e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var Z = (e, t) => () => (e && (t = e(e = 0)), t);
var F = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), rg = (e, t) => {
  for (var n in t) Kr(e, n, { get: t[n], enumerable: true });
}, Iu = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (let i of eg(t)) !ng.call(e, i) && i !== n && Kr(e, i, { get: () => t[i], enumerable: !(r = Km(t, i)) || r.enumerable });
  return e;
};
var ze = (e, t, n) => (n = e != null ? Ym(tg(e)) : {}, Iu(t || !e || !e.__esModule ? Kr(n, "default", { value: e, enumerable: true }) : n, e)), is = (e) => Iu(Kr({}, "__esModule", { value: true }), e);
var vt = F((f_, Vu) => {
  "use strict";
  var os = Object.defineProperty, ig = Object.getOwnPropertyDescriptor, og = Object.getOwnPropertyNames, sg = Object.prototype.hasOwnProperty, ag = (e, t) => {
    for (var n in t) os(e, n, { get: t[n], enumerable: true });
  }, cg = (e, t, n, r) => {
    if (t && typeof t == "object" || typeof t == "function") for (let i of og(t)) !sg.call(e, i) && i !== n && os(e, i, { get: () => t[i], enumerable: !(r = ig(t, i)) || r.enumerable });
    return e;
  }, ug = (e) => cg(os({}, "__esModule", { value: true }), e), Fu = {};
  ag(Fu, { config: () => hg, t: () => $u });
  Vu.exports = ug(Fu);
  var lg = fe("fs"), fg = fe("fs/promises");
  async function dg(e) {
    if (e.protocol === "file:") return await (0, fg.readFile)(e, "utf8");
    if (e.protocol === "http:" || e.protocol === "https:") {
      let t = await fetch(e.toString(), { headers: { "Accept-Encoding": "gzip, deflate", Accept: "application/json" }, redirect: "follow" });
      if (!t.ok) {
        let r = `Unexpected ${t.status} response while trying to read ${e}`;
        try {
          r += `: ${await t.text()}`;
        } catch {
        }
        throw new Error(r);
      }
      return await t.text();
    }
    throw new Error("Unsupported protocol");
  }
  function pg(e) {
    return (0, lg.readFileSync)(e, "utf8");
  }
  var mr;
  function hg(e) {
    if ("contents" in e) {
      typeof e.contents == "string" ? mr = JSON.parse(e.contents) : mr = e.contents;
      return;
    }
    if ("fsPath" in e) {
      let t = pg(e.fsPath), n = JSON.parse(t);
      mr = Lu(n) ? n.contents.bundle : n;
      return;
    }
    if (e.uri) {
      let t = e.uri;
      return typeof e.uri == "string" && (t = new URL(e.uri)), new Promise((n, r) => {
        dg(t).then((i) => {
          try {
            let o = JSON.parse(i);
            mr = Lu(o) ? o.contents.bundle : o, n();
          } catch (o) {
            r(o);
          }
        }).catch((i) => {
          r(i);
        });
      });
    }
  }
  function $u(...e) {
    let t = e[0], n, r, i;
    if (typeof t == "string") n = t, r = t, e.splice(0, 1), i = !e || typeof e[0] != "object" ? e : e[0];
    else if (t instanceof Array) {
      let s = e.slice(1);
      if (t.length !== s.length + 1) throw new Error("expected a string as the first argument to l10n.t");
      let a = t[0];
      for (let u = 1; u < t.length; u++) a += `{${u - 1}}` + t[u];
      return $u(a, ...s);
    } else r = t.message, n = r, t.comment && t.comment.length > 0 && (n += `/${Array.isArray(t.comment) ? t.comment.join("") : t.comment}`), i = t.args ?? {};
    let o = mr?.[n];
    return o ? typeof o == "string" ? ei(o, i) : o.comment ? ei(o.message, i) : ei(r, i) : ei(r, i);
  }
  var mg = /{([^}]+)}/g;
  function ei(e, t) {
    return Object.keys(t).length === 0 ? e : e.replace(mg, (n, r) => t[r] ?? n);
  }
  function Lu(e) {
    return typeof e?.contents?.bundle == "object" && typeof e?.version == "string";
  }
});
var ti = F((ft) => {
  "use strict";
  Object.defineProperty(ft, "__esModule", { value: true });
  ft.boolean = gg;
  ft.string = Wu;
  ft.number = yg;
  ft.error = bg;
  ft.func = Uu;
  ft.array = Hu;
  ft.stringArray = vg;
  ft.typedArray = _g;
  ft.thenable = wg;
  function gg(e) {
    return e === true || e === false;
  }
  function Wu(e) {
    return typeof e == "string" || e instanceof String;
  }
  function yg(e) {
    return typeof e == "number" || e instanceof Number;
  }
  function bg(e) {
    return e instanceof Error;
  }
  function Uu(e) {
    return typeof e == "function";
  }
  function Hu(e) {
    return Array.isArray(e);
  }
  function vg(e) {
    return Hu(e) && e.every((t) => Wu(t));
  }
  function _g(e, t) {
    return Array.isArray(e) && e.every(t);
  }
  function wg(e) {
    return e && Uu(e.then);
  }
});
var xn = F((Ot) => {
  "use strict";
  Object.defineProperty(Ot, "__esModule", { value: true });
  Ot.boolean = Dg;
  Ot.string = Bu;
  Ot.number = Sg;
  Ot.error = Pg;
  Ot.func = xg;
  Ot.array = zu;
  Ot.stringArray = Tg;
  function Dg(e) {
    return e === true || e === false;
  }
  function Bu(e) {
    return typeof e == "string" || e instanceof String;
  }
  function Sg(e) {
    return typeof e == "number" || e instanceof Number;
  }
  function Pg(e) {
    return e instanceof Error;
  }
  function xg(e) {
    return typeof e == "function";
  }
  function zu(e) {
    return Array.isArray(e);
  }
  function Tg(e) {
    return zu(e) && e.every((t) => Bu(t));
  }
});
var Ms = F((V) => {
  "use strict";
  var kg = V && V.__createBinding || (Object.create ? (function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[n];
    } }), Object.defineProperty(e, r, i);
  }) : (function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  })), Og = V && V.__setModuleDefault || (Object.create ? (function(e, t) {
    Object.defineProperty(e, "default", { enumerable: true, value: t });
  }) : function(e, t) {
    e.default = t;
  }), Rg = V && V.__importStar || /* @__PURE__ */ (function() {
    var e = function(t) {
      return e = Object.getOwnPropertyNames || function(n) {
        var r = [];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[r.length] = i);
        return r;
      }, e(t);
    };
    return function(t) {
      if (t && t.__esModule) return t;
      var n = {};
      if (t != null) for (var r = e(t), i = 0; i < r.length; i++) r[i] !== "default" && kg(n, t, r[i]);
      return Og(n, t), n;
    };
  })();
  Object.defineProperty(V, "__esModule", { value: true });
  V.Message = V.NotificationType9 = V.NotificationType8 = V.NotificationType7 = V.NotificationType6 = V.NotificationType5 = V.NotificationType4 = V.NotificationType3 = V.NotificationType2 = V.NotificationType1 = V.NotificationType0 = V.NotificationType = V.RequestType9 = V.RequestType8 = V.RequestType7 = V.RequestType6 = V.RequestType5 = V.RequestType4 = V.RequestType3 = V.RequestType2 = V.RequestType1 = V.RequestType = V.RequestType0 = V.AbstractMessageSignature = V.ParameterStructures = V.ResponseError = V.ErrorCodes = void 0;
  var fn = Rg(xn()), ss;
  (function(e) {
    e.ParseError = -32700, e.InvalidRequest = -32600, e.MethodNotFound = -32601, e.InvalidParams = -32602, e.InternalError = -32603, e.jsonrpcReservedErrorRangeStart = -32099, e.serverErrorStart = -32099, e.MessageWriteError = -32099, e.MessageReadError = -32098, e.PendingResponseRejected = -32097, e.ConnectionInactive = -32096, e.ServerNotInitialized = -32002, e.UnknownErrorCode = -32001, e.jsonrpcReservedErrorRangeEnd = -32e3, e.serverErrorEnd = -32e3;
  })(ss || (V.ErrorCodes = ss = {}));
  var as = class e extends Error {
    code;
    data;
    constructor(t, n, r) {
      super(n), this.code = fn.number(t) ? t : ss.UnknownErrorCode, this.data = r, Object.setPrototypeOf(this, e.prototype);
    }
    toJson() {
      let t = { code: this.code, message: this.message };
      return this.data !== void 0 && (t.data = this.data), t;
    }
  };
  V.ResponseError = as;
  var Wt = class e {
    kind;
    static auto = new e("auto");
    static byPosition = new e("byPosition");
    static byName = new e("byName");
    constructor(t) {
      this.kind = t;
    }
    static is(t) {
      return t === e.auto || t === e.byName || t === e.byPosition;
    }
    toString() {
      return this.kind;
    }
  };
  V.ParameterStructures = Wt;
  var ae = class {
    method;
    numberOfParams;
    constructor(t, n) {
      this.method = t, this.numberOfParams = n;
    }
    get parameterStructures() {
      return Wt.auto;
    }
  };
  V.AbstractMessageSignature = ae;
  var cs = class extends ae {
    _;
    constructor(t) {
      super(t, 0);
    }
  };
  V.RequestType0 = cs;
  var us = class extends ae {
    _parameterStructures;
    _;
    constructor(t, n = Wt.auto) {
      super(t, 1), this._parameterStructures = n;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  };
  V.RequestType = us;
  var ls = class extends ae {
    _parameterStructures;
    _;
    constructor(t, n = Wt.auto) {
      super(t, 1), this._parameterStructures = n;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  };
  V.RequestType1 = ls;
  var fs = class extends ae {
    _;
    constructor(t) {
      super(t, 2);
    }
  };
  V.RequestType2 = fs;
  var ds = class extends ae {
    _;
    constructor(t) {
      super(t, 3);
    }
  };
  V.RequestType3 = ds;
  var ps = class extends ae {
    _;
    constructor(t) {
      super(t, 4);
    }
  };
  V.RequestType4 = ps;
  var hs = class extends ae {
    _;
    constructor(t) {
      super(t, 5);
    }
  };
  V.RequestType5 = hs;
  var ms = class extends ae {
    _;
    constructor(t) {
      super(t, 6);
    }
  };
  V.RequestType6 = ms;
  var gs = class extends ae {
    _;
    constructor(t) {
      super(t, 7);
    }
  };
  V.RequestType7 = gs;
  var ys = class extends ae {
    _;
    constructor(t) {
      super(t, 8);
    }
  };
  V.RequestType8 = ys;
  var bs = class extends ae {
    _;
    constructor(t) {
      super(t, 9);
    }
  };
  V.RequestType9 = bs;
  var vs = class extends ae {
    _parameterStructures;
    _;
    constructor(t, n = Wt.auto) {
      super(t, 1), this._parameterStructures = n;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  };
  V.NotificationType = vs;
  var _s = class extends ae {
    _;
    constructor(t) {
      super(t, 0);
    }
  };
  V.NotificationType0 = _s;
  var ws = class extends ae {
    _parameterStructures;
    _;
    constructor(t, n = Wt.auto) {
      super(t, 1), this._parameterStructures = n;
    }
    get parameterStructures() {
      return this._parameterStructures;
    }
  };
  V.NotificationType1 = ws;
  var Ds = class extends ae {
    _;
    constructor(t) {
      super(t, 2);
    }
  };
  V.NotificationType2 = Ds;
  var Ss = class extends ae {
    _;
    constructor(t) {
      super(t, 3);
    }
  };
  V.NotificationType3 = Ss;
  var Ps = class extends ae {
    _;
    constructor(t) {
      super(t, 4);
    }
  };
  V.NotificationType4 = Ps;
  var xs = class extends ae {
    _;
    constructor(t) {
      super(t, 5);
    }
  };
  V.NotificationType5 = xs;
  var Ts = class extends ae {
    _;
    constructor(t) {
      super(t, 6);
    }
  };
  V.NotificationType6 = Ts;
  var ks = class extends ae {
    _;
    constructor(t) {
      super(t, 7);
    }
  };
  V.NotificationType7 = ks;
  var Os = class extends ae {
    _;
    constructor(t) {
      super(t, 8);
    }
  };
  V.NotificationType8 = Os;
  var Rs = class extends ae {
    _;
    constructor(t) {
      super(t, 9);
    }
  };
  V.NotificationType9 = Rs;
  var Ju;
  (function(e) {
    function t(i) {
      let o = i;
      return o && fn.string(o.method) && (fn.string(o.id) || fn.number(o.id));
    }
    e.isRequest = t;
    function n(i) {
      let o = i;
      return o && fn.string(o.method) && i.id === void 0;
    }
    e.isNotification = n;
    function r(i) {
      let o = i;
      return o && (o.result !== void 0 || !!o.error) && (fn.string(o.id) || fn.number(o.id) || o.id === null);
    }
    e.isResponse = r;
  })(Ju || (V.Message = Ju = {}));
});
var Cs = F((Ut) => {
  "use strict";
  Object.defineProperty(Ut, "__esModule", { value: true });
  Ut.LRUCache = Ut.LinkedMap = Ut.Touch = void 0;
  var Ie;
  (function(e) {
    e.None = 0, e.First = 1, e.AsOld = e.First, e.Last = 2, e.AsNew = e.Last;
  })(Ie || (Ut.Touch = Ie = {}));
  var ni = class {
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
    before(t) {
      let n = this._map.get(t);
      return n ? n.previous?.value : void 0;
    }
    after(t) {
      let n = this._map.get(t);
      return n ? n.next?.value : void 0;
    }
    has(t) {
      return this._map.has(t);
    }
    get(t, n = Ie.None) {
      let r = this._map.get(t);
      if (r) return n !== Ie.None && this.touch(r, n), r.value;
    }
    set(t, n, r = Ie.None) {
      let i = this._map.get(t);
      if (i) i.value = n, r !== Ie.None && this.touch(i, r);
      else {
        switch (i = { key: t, value: n, next: void 0, previous: void 0 }, r) {
          case Ie.None:
            this.addItemLast(i);
            break;
          case Ie.First:
            this.addItemFirst(i);
            break;
          case Ie.Last:
            this.addItemLast(i);
            break;
          default:
            this.addItemLast(i);
            break;
        }
        this._map.set(t, i), this._size++;
      }
      return this;
    }
    delete(t) {
      return !!this.remove(t);
    }
    remove(t) {
      let n = this._map.get(t);
      if (n) return this._map.delete(t), this.removeItem(n), this._size--, n.value;
    }
    shift() {
      if (!this._head && !this._tail) return;
      if (!this._head || !this._tail) throw new Error("Invalid list");
      let t = this._head;
      return this._map.delete(t.key), this.removeItem(t), this._size--, t.value;
    }
    forEach(t, n) {
      let r = this._state, i = this._head;
      for (; i; ) {
        if (n ? t.bind(n)(i.value, i.key, this) : t(i.value, i.key, this), this._state !== r) throw new Error("LinkedMap got modified during iteration.");
        i = i.next;
      }
    }
    keys() {
      let t = this._state, n = this._head, r = { [Symbol.iterator]: () => r, next: () => {
        if (this._state !== t) throw new Error("LinkedMap got modified during iteration.");
        if (n) {
          let i = { value: n.key, done: false };
          return n = n.next, i;
        } else return { value: void 0, done: true };
      } };
      return r;
    }
    values() {
      let t = this._state, n = this._head, r = { [Symbol.iterator]: () => r, next: () => {
        if (this._state !== t) throw new Error("LinkedMap got modified during iteration.");
        if (n) {
          let i = { value: n.value, done: false };
          return n = n.next, i;
        } else return { value: void 0, done: true };
      } };
      return r;
    }
    entries() {
      let t = this._state, n = this._head, r = { [Symbol.iterator]: () => r, next: () => {
        if (this._state !== t) throw new Error("LinkedMap got modified during iteration.");
        if (n) {
          let i = { value: [n.key, n.value], done: false };
          return n = n.next, i;
        } else return { value: void 0, done: true };
      } };
      return r;
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    trimOld(t) {
      if (t >= this.size) return;
      if (t === 0) {
        this.clear();
        return;
      }
      let n = this._head, r = this.size;
      for (; n && r > t; ) this._map.delete(n.key), n = n.next, r--;
      this._head = n, this._size = r, n && (n.previous = void 0), this._state++;
    }
    addItemFirst(t) {
      if (!this._head && !this._tail) this._tail = t;
      else if (this._head) t.next = this._head, this._head.previous = t;
      else throw new Error("Invalid list");
      this._head = t, this._state++;
    }
    addItemLast(t) {
      if (!this._head && !this._tail) this._head = t;
      else if (this._tail) t.previous = this._tail, this._tail.next = t;
      else throw new Error("Invalid list");
      this._tail = t, this._state++;
    }
    removeItem(t) {
      if (t === this._head && t === this._tail) this._head = void 0, this._tail = void 0;
      else if (t === this._head) {
        if (!t.next) throw new Error("Invalid list");
        t.next.previous = void 0, this._head = t.next;
      } else if (t === this._tail) {
        if (!t.previous) throw new Error("Invalid list");
        t.previous.next = void 0, this._tail = t.previous;
      } else {
        let n = t.next, r = t.previous;
        if (!n || !r) throw new Error("Invalid list");
        n.previous = r, r.next = n;
      }
      t.next = void 0, t.previous = void 0, this._state++;
    }
    touch(t, n) {
      if (!this._head || !this._tail) throw new Error("Invalid list");
      if (!(n !== Ie.First && n !== Ie.Last)) {
        if (n === Ie.First) {
          if (t === this._head) return;
          let r = t.next, i = t.previous;
          t === this._tail ? (i.next = void 0, this._tail = i) : (r.previous = i, i.next = r), t.previous = void 0, t.next = this._head, this._head.previous = t, this._head = t, this._state++;
        } else if (n === Ie.Last) {
          if (t === this._tail) return;
          let r = t.next, i = t.previous;
          t === this._head ? (r.previous = void 0, this._head = r) : (r.previous = i, i.next = r), t.next = void 0, t.previous = this._tail, this._tail.next = t, this._tail = t, this._state++;
        }
      }
    }
    toJSON() {
      let t = [];
      return this.forEach((n, r) => {
        t.push([r, n]);
      }), t;
    }
    fromJSON(t) {
      this.clear();
      for (let [n, r] of t) this.set(n, r);
    }
  };
  Ut.LinkedMap = ni;
  var Ns = class extends ni {
    _limit;
    _ratio;
    constructor(t, n = 1) {
      super(), this._limit = t, this._ratio = Math.min(Math.max(0, n), 1);
    }
    get limit() {
      return this._limit;
    }
    set limit(t) {
      this._limit = t, this.checkTrim();
    }
    get ratio() {
      return this._ratio;
    }
    set ratio(t) {
      this._ratio = Math.min(Math.max(0, t), 1), this.checkTrim();
    }
    get(t, n = Ie.AsNew) {
      return super.get(t, n);
    }
    peek(t) {
      return super.get(t, Ie.None);
    }
    set(t, n) {
      return super.set(t, n, Ie.Last), this.checkTrim(), this;
    }
    checkTrim() {
      this.size > this._limit && this.trimOld(Math.round(this._limit * this._ratio));
    }
  };
  Ut.LRUCache = Ns;
});
var Xu = F((ri) => {
  "use strict";
  Object.defineProperty(ri, "__esModule", { value: true });
  ri.Disposable = void 0;
  var Gu;
  (function(e) {
    function t(n) {
      return { dispose: n };
    }
    e.create = t;
  })(Gu || (ri.Disposable = Gu = {}));
});
var Ht = F((As) => {
  "use strict";
  Object.defineProperty(As, "__esModule", { value: true });
  var js;
  function Es() {
    if (js === void 0) throw new Error("No runtime abstraction layer installed");
    return js;
  }
  (function(e) {
    function t(n) {
      if (n === void 0) throw new Error("No runtime abstraction layer provided");
      js = n;
    }
    e.install = t;
  })(Es || (Es = {}));
  As.default = Es;
});
var Tn = F((Bt) => {
  "use strict";
  var Mg = Bt && Bt.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(Bt, "__esModule", { value: true });
  Bt.Emitter = Bt.Event = void 0;
  var Ng = Mg(Ht()), Zu;
  (function(e) {
    let t = { dispose() {
    } };
    e.None = function() {
      return t;
    };
  })(Zu || (Bt.Event = Zu = {}));
  var qs = class {
    _callbacks;
    _contexts;
    add(t, n = null, r) {
      this._callbacks || (this._callbacks = [], this._contexts = []), this._callbacks.push(t), this._contexts.push(n), Array.isArray(r) && r.push({ dispose: () => this.remove(t, n) });
    }
    remove(t, n = null) {
      if (!this._callbacks) return;
      let r = false;
      for (let i = 0, o = this._callbacks.length; i < o; i++) if (this._callbacks[i] === t) if (this._contexts[i] === n) {
        this._callbacks.splice(i, 1), this._contexts.splice(i, 1);
        return;
      } else r = true;
      if (r) throw new Error("When adding a listener with a context, you should remove it with the same context");
    }
    invoke(...t) {
      if (!this._callbacks) return [];
      let n = [], r = this._callbacks.slice(0), i = this._contexts.slice(0);
      for (let o = 0, s = r.length; o < s; o++) try {
        n.push(r[o].apply(i[o], t));
      } catch (a) {
        (0, Ng.default)().console.error(a);
      }
      return n;
    }
    isEmpty() {
      return !this._callbacks || this._callbacks.length === 0;
    }
    dispose() {
      this._callbacks = void 0, this._contexts = void 0;
    }
  }, Is = class e {
    _options;
    static _noop = function() {
    };
    _event;
    _callbacks;
    constructor(t) {
      this._options = t;
    }
    get event() {
      return this._event || (this._event = (t, n, r) => {
        this._callbacks || (this._callbacks = new qs()), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(t, n);
        let i = { dispose: () => {
          this._callbacks && (this._callbacks.remove(t, n), i.dispose = e._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this));
        } };
        return Array.isArray(r) && r.push(i), i;
      }), this._event;
    }
    fire(t) {
      this._callbacks && this._callbacks.invoke.call(this._callbacks, t);
    }
    dispose() {
      this._callbacks && (this._callbacks.dispose(), this._callbacks = void 0);
    }
  };
  Bt.Emitter = Is;
});
var si = F((Je) => {
  "use strict";
  var Cg = Je && Je.__createBinding || (Object.create ? (function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[n];
    } }), Object.defineProperty(e, r, i);
  }) : (function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  })), jg = Je && Je.__setModuleDefault || (Object.create ? (function(e, t) {
    Object.defineProperty(e, "default", { enumerable: true, value: t });
  }) : function(e, t) {
    e.default = t;
  }), Eg = Je && Je.__importStar || /* @__PURE__ */ (function() {
    var e = function(t) {
      return e = Object.getOwnPropertyNames || function(n) {
        var r = [];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[r.length] = i);
        return r;
      }, e(t);
    };
    return function(t) {
      if (t && t.__esModule) return t;
      var n = {};
      if (t != null) for (var r = e(t), i = 0; i < r.length; i++) r[i] !== "default" && Cg(n, t, r[i]);
      return jg(n, t), n;
    };
  })(), Ag = Je && Je.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(Je, "__esModule", { value: true });
  Je.CancellationTokenSource = Je.CancellationToken = void 0;
  var qg = Ag(Ht()), Ig = Eg(xn()), Ls = Tn(), ii;
  (function(e) {
    e.None = Object.freeze({ isCancellationRequested: false, onCancellationRequested: Ls.Event.None }), e.Cancelled = Object.freeze({ isCancellationRequested: true, onCancellationRequested: Ls.Event.None });
    function t(n) {
      let r = n;
      return r && (r === e.None || r === e.Cancelled || Ig.boolean(r.isCancellationRequested) && !!r.onCancellationRequested);
    }
    e.is = t;
  })(ii || (Je.CancellationToken = ii = {}));
  var Lg = Object.freeze(function(e, t) {
    let n = (0, qg.default)().timer.setTimeout(e.bind(t), 0);
    return { dispose() {
      n.dispose();
    } };
  }), oi = class {
    _isCancelled = false;
    _emitter;
    cancel() {
      this._isCancelled || (this._isCancelled = true, this._emitter && (this._emitter.fire(void 0), this.dispose()));
    }
    get isCancellationRequested() {
      return this._isCancelled;
    }
    get onCancellationRequested() {
      return this._isCancelled ? Lg : (this._emitter || (this._emitter = new Ls.Emitter()), this._emitter.event);
    }
    dispose() {
      this._emitter && (this._emitter.dispose(), this._emitter = void 0);
    }
  }, Fs = class {
    _token;
    get token() {
      return this._token || (this._token = new oi()), this._token;
    }
    cancel() {
      this._token ? this._token.cancel() : this._token = ii.Cancelled;
    }
    dispose() {
      this._token ? this._token instanceof oi && this._token.dispose() : this._token = ii.None;
    }
  };
  Je.CancellationTokenSource = Fs;
});
var Qu = F((kn) => {
  "use strict";
  Object.defineProperty(kn, "__esModule", { value: true });
  kn.SharedArrayReceiverStrategy = kn.SharedArraySenderStrategy = void 0;
  var Fg = si(), gr;
  (function(e) {
    e.Continue = 0, e.Cancelled = 1;
  })(gr || (gr = {}));
  var $s = class {
    buffers;
    constructor() {
      this.buffers = /* @__PURE__ */ new Map();
    }
    enableCancellation(t) {
      if (t.id === null) return;
      let n = new SharedArrayBuffer(4), r = new Int32Array(n, 0, 1);
      r[0] = gr.Continue, this.buffers.set(t.id, n), t.$cancellationData = n;
    }
    async sendCancellation(t, n) {
      let r = this.buffers.get(n);
      if (r === void 0) return;
      let i = new Int32Array(r, 0, 1);
      Atomics.store(i, 0, gr.Cancelled);
    }
    cleanup(t) {
      this.buffers.delete(t);
    }
    dispose() {
      this.buffers.clear();
    }
  };
  kn.SharedArraySenderStrategy = $s;
  var Vs = class {
    data;
    constructor(t) {
      this.data = new Int32Array(t, 0, 1);
    }
    get isCancellationRequested() {
      return Atomics.load(this.data, 0) === gr.Cancelled;
    }
    get onCancellationRequested() {
      throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events");
    }
  }, Ws = class {
    token;
    constructor(t) {
      this.token = new Vs(t);
    }
    cancel() {
    }
    dispose() {
    }
  }, Us = class {
    kind = "request";
    createCancellationTokenSource(t) {
      let n = t.$cancellationData;
      return n === void 0 ? new Fg.CancellationTokenSource() : new Ws(n);
    }
  };
  kn.SharedArrayReceiverStrategy = Us;
});
var Bs = F((On) => {
  "use strict";
  var $g = On && On.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(On, "__esModule", { value: true });
  On.Semaphore = void 0;
  var Vg = $g(Ht()), Hs = class {
    _capacity;
    _active;
    _waiting;
    constructor(t = 1) {
      if (t <= 0) throw new Error("Capacity must be greater than 0");
      this._capacity = t, this._active = 0, this._waiting = [];
    }
    lock(t) {
      return new Promise((n, r) => {
        this._waiting.push({ thunk: t, resolve: n, reject: r }), this.runNext();
      });
    }
    get active() {
      return this._active;
    }
    runNext() {
      this._waiting.length === 0 || this._active === this._capacity || (0, Vg.default)().timer.setImmediate(() => this.doRunNext());
    }
    doRunNext() {
      if (this._waiting.length === 0 || this._active === this._capacity) return;
      let t = this._waiting.shift();
      if (this._active++, this._active > this._capacity) throw new Error("Too many thunks active");
      try {
        let n = t.thunk();
        n instanceof Promise ? n.then((r) => {
          this._active--, t.resolve(r), this.runNext();
        }, (r) => {
          this._active--, t.reject(r), this.runNext();
        }) : (this._active--, t.resolve(n), this.runNext());
      } catch (n) {
        this._active--, t.reject(n), this.runNext();
      }
    }
  };
  On.Semaphore = Hs;
});
var Ku = F((Le) => {
  "use strict";
  var Wg = Le && Le.__createBinding || (Object.create ? (function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[n];
    } }), Object.defineProperty(e, r, i);
  }) : (function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  })), Ug = Le && Le.__setModuleDefault || (Object.create ? (function(e, t) {
    Object.defineProperty(e, "default", { enumerable: true, value: t });
  }) : function(e, t) {
    e.default = t;
  }), Hg = Le && Le.__importStar || /* @__PURE__ */ (function() {
    var e = function(t) {
      return e = Object.getOwnPropertyNames || function(n) {
        var r = [];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[r.length] = i);
        return r;
      }, e(t);
    };
    return function(t) {
      if (t && t.__esModule) return t;
      var n = {};
      if (t != null) for (var r = e(t), i = 0; i < r.length; i++) r[i] !== "default" && Wg(n, t, r[i]);
      return Ug(n, t), n;
    };
  })(), Bg = Le && Le.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(Le, "__esModule", { value: true });
  Le.ReadableStreamMessageReader = Le.AbstractMessageReader = Le.MessageReader = void 0;
  var Js = Bg(Ht()), Rn = Hg(xn()), zs = Tn(), zg = Bs(), Yu;
  (function(e) {
    function t(n) {
      let r = n;
      return r && Rn.func(r.listen) && Rn.func(r.dispose) && Rn.func(r.onError) && Rn.func(r.onClose) && Rn.func(r.onPartialMessage);
    }
    e.is = t;
  })(Yu || (Le.MessageReader = Yu = {}));
  var ai = class {
    errorEmitter;
    closeEmitter;
    partialMessageEmitter;
    constructor() {
      this.errorEmitter = new zs.Emitter(), this.closeEmitter = new zs.Emitter(), this.partialMessageEmitter = new zs.Emitter();
    }
    dispose() {
      this.errorEmitter.dispose(), this.closeEmitter.dispose(), this.partialMessageEmitter.dispose();
    }
    get onError() {
      return this.errorEmitter.event;
    }
    fireError(t) {
      this.errorEmitter.fire(this.asError(t));
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
    firePartialMessage(t) {
      this.partialMessageEmitter.fire(t);
    }
    asError(t) {
      return t instanceof Error ? t : new Error(`Reader received error. Reason: ${Rn.string(t.message) ? t.message : "unknown"}`);
    }
  };
  Le.AbstractMessageReader = ai;
  var Gs;
  (function(e) {
    function t(n) {
      let r, i, o, s = /* @__PURE__ */ new Map(), a, u = /* @__PURE__ */ new Map();
      if (n === void 0 || typeof n == "string") r = n ?? "utf-8";
      else {
        if (r = n.charset ?? "utf-8", n.contentDecoder !== void 0 && (o = n.contentDecoder, s.set(o.name, o)), n.contentDecoders !== void 0) for (let c of n.contentDecoders) s.set(c.name, c);
        if (n.contentTypeDecoder !== void 0 && (a = n.contentTypeDecoder, u.set(a.name, a)), n.contentTypeDecoders !== void 0) for (let c of n.contentTypeDecoders) u.set(c.name, c);
      }
      return a === void 0 && (a = (0, Js.default)().applicationJson.decoder, u.set(a.name, a)), { charset: r, contentDecoder: o, contentDecoders: s, contentTypeDecoder: a, contentTypeDecoders: u };
    }
    e.fromOptions = t;
  })(Gs || (Gs = {}));
  var Xs = class extends ai {
    readable;
    options;
    callback;
    nextMessageLength;
    messageToken;
    buffer;
    partialMessageTimer;
    _partialMessageTimeout;
    readSemaphore;
    constructor(t, n) {
      super(), this.readable = t, this.options = Gs.fromOptions(n), this.buffer = (0, Js.default)().messageBuffer.create(this.options.charset), this._partialMessageTimeout = 1e4, this.nextMessageLength = -1, this.messageToken = 0, this.readSemaphore = new zg.Semaphore(1);
    }
    set partialMessageTimeout(t) {
      this._partialMessageTimeout = t;
    }
    get partialMessageTimeout() {
      return this._partialMessageTimeout;
    }
    listen(t) {
      this.nextMessageLength = -1, this.messageToken = 0, this.partialMessageTimer = void 0, this.callback = t;
      let n = this.readable.onData((r) => {
        this.onData(r);
      });
      return this.readable.onError((r) => this.fireError(r)), this.readable.onClose(() => this.fireClose()), n;
    }
    onData(t) {
      try {
        for (this.buffer.append(t); ; ) {
          if (this.nextMessageLength === -1) {
            let r = this.buffer.tryReadHeaders(true);
            if (!r) return;
            let i = r.get("content-length");
            if (!i) {
              this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(r))}`));
              return;
            }
            let o = parseInt(i);
            if (isNaN(o)) {
              this.fireError(new Error(`Content-Length value must be a number. Got ${i}`));
              return;
            }
            this.nextMessageLength = o;
          }
          let n = this.buffer.tryReadBody(this.nextMessageLength);
          if (n === void 0) {
            this.setPartialMessageTimer();
            return;
          }
          this.clearPartialMessageTimer(), this.nextMessageLength = -1, this.readSemaphore.lock(async () => {
            let r = this.options.contentDecoder !== void 0 ? await this.options.contentDecoder.decode(n) : n, i = await this.options.contentTypeDecoder.decode(r, this.options);
            this.callback(i);
          }).catch((r) => {
            this.fireError(r);
          });
        }
      } catch (n) {
        this.fireError(n);
      }
    }
    clearPartialMessageTimer() {
      this.partialMessageTimer && (this.partialMessageTimer.dispose(), this.partialMessageTimer = void 0);
    }
    setPartialMessageTimer() {
      this.clearPartialMessageTimer(), !(this._partialMessageTimeout <= 0) && (this.partialMessageTimer = (0, Js.default)().timer.setTimeout((t, n) => {
        this.partialMessageTimer = void 0, t === this.messageToken && (this.firePartialMessage({ messageToken: t, waitingTime: n }), this.setPartialMessageTimer());
      }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout));
    }
  };
  Le.ReadableStreamMessageReader = Xs;
});
var il = F((Fe) => {
  "use strict";
  var Jg = Fe && Fe.__createBinding || (Object.create ? (function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[n];
    } }), Object.defineProperty(e, r, i);
  }) : (function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  })), Gg = Fe && Fe.__setModuleDefault || (Object.create ? (function(e, t) {
    Object.defineProperty(e, "default", { enumerable: true, value: t });
  }) : function(e, t) {
    e.default = t;
  }), Xg = Fe && Fe.__importStar || /* @__PURE__ */ (function() {
    var e = function(t) {
      return e = Object.getOwnPropertyNames || function(n) {
        var r = [];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[r.length] = i);
        return r;
      }, e(t);
    };
    return function(t) {
      if (t && t.__esModule) return t;
      var n = {};
      if (t != null) for (var r = e(t), i = 0; i < r.length; i++) r[i] !== "default" && Jg(n, t, r[i]);
      return Gg(n, t), n;
    };
  })(), Zg = Fe && Fe.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(Fe, "__esModule", { value: true });
  Fe.WriteableStreamMessageWriter = Fe.AbstractMessageWriter = Fe.MessageWriter = void 0;
  var el = Zg(Ht()), yr = Xg(xn()), Qg = Bs(), tl = Tn(), Yg = "Content-Length: ", nl = `\r
`, rl;
  (function(e) {
    function t(n) {
      let r = n;
      return r && yr.func(r.dispose) && yr.func(r.onClose) && yr.func(r.onError) && yr.func(r.write);
    }
    e.is = t;
  })(rl || (Fe.MessageWriter = rl = {}));
  var ci = class {
    errorEmitter;
    closeEmitter;
    constructor() {
      this.errorEmitter = new tl.Emitter(), this.closeEmitter = new tl.Emitter();
    }
    dispose() {
      this.errorEmitter.dispose(), this.closeEmitter.dispose();
    }
    get onError() {
      return this.errorEmitter.event;
    }
    fireError(t, n, r) {
      this.errorEmitter.fire([this.asError(t), n, r]);
    }
    get onClose() {
      return this.closeEmitter.event;
    }
    fireClose() {
      this.closeEmitter.fire(void 0);
    }
    asError(t) {
      return t instanceof Error ? t : new Error(`Writer received error. Reason: ${yr.string(t.message) ? t.message : "unknown"}`);
    }
  };
  Fe.AbstractMessageWriter = ci;
  var Zs;
  (function(e) {
    function t(n) {
      return n === void 0 || typeof n == "string" ? { charset: n ?? "utf-8", contentTypeEncoder: (0, el.default)().applicationJson.encoder } : { charset: n.charset ?? "utf-8", contentEncoder: n.contentEncoder, contentTypeEncoder: n.contentTypeEncoder ?? (0, el.default)().applicationJson.encoder };
    }
    e.fromOptions = t;
  })(Zs || (Zs = {}));
  var Qs = class extends ci {
    writable;
    options;
    errorCount;
    writeSemaphore;
    constructor(t, n) {
      super(), this.writable = t, this.options = Zs.fromOptions(n), this.errorCount = 0, this.writeSemaphore = new Qg.Semaphore(1), this.writable.onError((r) => this.fireError(r)), this.writable.onClose(() => this.fireClose());
    }
    async write(t) {
      return this.writeSemaphore.lock(async () => this.options.contentTypeEncoder.encode(t, this.options).then((r) => this.options.contentEncoder !== void 0 ? this.options.contentEncoder.encode(r) : r).then((r) => {
        let i = [];
        return i.push(Yg, r.byteLength.toString(), nl), i.push(nl), this.doWrite(t, i, r);
      }, (r) => {
        throw this.fireError(r), r;
      }));
    }
    async doWrite(t, n, r) {
      try {
        return await this.writable.write(n.join(""), "ascii"), this.writable.write(r);
      } catch (i) {
        return this.handleError(i, t), Promise.reject(i);
      }
    }
    handleError(t, n) {
      this.errorCount++, this.fireError(t, n, this.errorCount);
    }
    end() {
      this.writable.end();
    }
  };
  Fe.WriteableStreamMessageWriter = Qs;
});
var ol = F((ui) => {
  "use strict";
  Object.defineProperty(ui, "__esModule", { value: true });
  ui.AbstractMessageBuffer = void 0;
  var Kg = 13, ey = 10, ty = `\r
`, Ys = class {
    _encoding;
    _chunks;
    _totalLength;
    constructor(t = "utf-8") {
      this._encoding = t, this._chunks = [], this._totalLength = 0;
    }
    get encoding() {
      return this._encoding;
    }
    append(t) {
      let n = typeof t == "string" ? this.fromString(t, this._encoding) : t;
      this._chunks.push(n), this._totalLength += n.byteLength;
    }
    tryReadHeaders(t = false) {
      if (this._chunks.length === 0) return;
      let n = 0, r = 0, i = 0, o = 0;
      e: for (; r < this._chunks.length; ) {
        let c = this._chunks[r];
        for (i = 0; i < c.length; ) {
          switch (c[i]) {
            case Kg:
              switch (n) {
                case 0:
                  n = 1;
                  break;
                case 2:
                  n = 3;
                  break;
                default:
                  n = 0;
              }
              break;
            case ey:
              switch (n) {
                case 1:
                  n = 2;
                  break;
                case 3:
                  n = 4, i++;
                  break e;
                default:
                  n = 0;
              }
              break;
            default:
              n = 0;
          }
          i++;
        }
        o += c.byteLength, r++;
      }
      if (n !== 4) return;
      let s = this._read(o + i), a = /* @__PURE__ */ new Map(), u = this.toString(s, "ascii").split(ty);
      if (u.length < 2) return a;
      for (let c = 0; c < u.length - 2; c++) {
        let f = u[c], v = f.indexOf(":");
        if (v === -1) throw new Error(`Message header must separate key and value using ':'
${f}`);
        let d = f.substr(0, v), g = f.substr(v + 1).trim();
        a.set(t ? d.toLowerCase() : d, g);
      }
      return a;
    }
    tryReadBody(t) {
      if (!(this._totalLength < t)) return this._read(t);
    }
    get numberOfBytes() {
      return this._totalLength;
    }
    _read(t) {
      if (t === 0) return this.emptyBuffer();
      if (t > this._totalLength) throw new Error("Cannot read so many bytes!");
      if (this._chunks[0].byteLength === t) {
        let o = this._chunks[0];
        return this._chunks.shift(), this._totalLength -= t, this.asNative(o);
      }
      if (this._chunks[0].byteLength > t) {
        let o = this._chunks[0], s = this.asNative(o, t);
        return this._chunks[0] = o.slice(t), this._totalLength -= t, s;
      }
      let n = this.allocNative(t), r = 0, i = 0;
      for (; t > 0; ) {
        let o = this._chunks[i];
        if (o.byteLength > t) {
          let s = o.slice(0, t);
          n.set(s, r), r += t, this._chunks[i] = o.slice(t), this._totalLength -= t, t -= t;
        } else n.set(o, r), r += o.byteLength, this._chunks.shift(), this._totalLength -= o.byteLength, t -= o.byteLength;
      }
      return n;
    }
  };
  ui.AbstractMessageBuffer = Ys;
});
var ul = F((H) => {
  "use strict";
  var ny = H && H.__createBinding || (Object.create ? (function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[n];
    } }), Object.defineProperty(e, r, i);
  }) : (function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  })), ry = H && H.__setModuleDefault || (Object.create ? (function(e, t) {
    Object.defineProperty(e, "default", { enumerable: true, value: t });
  }) : function(e, t) {
    e.default = t;
  }), iy = H && H.__importStar || /* @__PURE__ */ (function() {
    var e = function(t) {
      return e = Object.getOwnPropertyNames || function(n) {
        var r = [];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[r.length] = i);
        return r;
      }, e(t);
    };
    return function(t) {
      if (t && t.__esModule) return t;
      var n = {};
      if (t != null) for (var r = e(t), i = 0; i < r.length; i++) r[i] !== "default" && ny(n, t, r[i]);
      return ry(n, t), n;
    };
  })(), oy = H && H.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(H, "__esModule", { value: true });
  H.ConnectionOptions = H.MessageStrategy = H.CancellationStrategy = H.CancellationSenderStrategy = H.CancellationReceiverStrategy = H.RequestCancellationReceiverStrategy = H.IdCancellationReceiverStrategy = H.ConnectionStrategy = H.ConnectionError = H.ConnectionErrors = H.LogTraceNotification = H.SetTraceNotification = H.TraceFormat = H.TraceValues = H.TraceValue = H.Trace = H.NullLogger = H.ProgressType = H.ProgressToken = void 0;
  H.createMessageConnection = sy;
  var sl = oy(Ht()), de = iy(xn()), G = Ms(), al = Cs(), br = Tn(), Ks = si(), wr;
  (function(e) {
    e.type = new G.NotificationType("$/cancelRequest");
  })(wr || (wr = {}));
  var ea;
  (function(e) {
    function t(n) {
      return typeof n == "string" || typeof n == "number";
    }
    e.is = t;
  })(ea || (H.ProgressToken = ea = {}));
  var vr;
  (function(e) {
    e.type = new G.NotificationType("$/progress");
  })(vr || (vr = {}));
  var ta = class {
    __;
    _pr;
    constructor() {
    }
  };
  H.ProgressType = ta;
  var na;
  (function(e) {
    function t(n) {
      return de.func(n);
    }
    e.is = t;
  })(na || (na = {}));
  H.NullLogger = Object.freeze({ error: () => {
  }, warn: () => {
  }, info: () => {
  }, log: () => {
  } });
  var K;
  (function(e) {
    e[e.Off = 0] = "Off", e[e.Messages = 1] = "Messages", e[e.Compact = 2] = "Compact", e[e.Verbose = 3] = "Verbose";
  })(K || (H.Trace = K = {}));
  var ra;
  (function(e) {
    e.Off = "off", e.Messages = "messages", e.Compact = "compact", e.Verbose = "verbose";
  })(ra || (H.TraceValue = ra = {}));
  H.TraceValues = ra;
  (function(e) {
    function t(r) {
      if (!de.string(r)) return e.Off;
      switch (r = r.toLowerCase(), r) {
        case "off":
          return e.Off;
        case "messages":
          return e.Messages;
        case "compact":
          return e.Compact;
        case "verbose":
          return e.Verbose;
        default:
          return e.Off;
      }
    }
    e.fromString = t;
    function n(r) {
      switch (r) {
        case e.Off:
          return "off";
        case e.Messages:
          return "messages";
        case e.Compact:
          return "compact";
        case e.Verbose:
          return "verbose";
        default:
          return "off";
      }
    }
    e.toString = n;
  })(K || (H.Trace = K = {}));
  var Qe;
  (function(e) {
    e.Text = "text", e.JSON = "json";
  })(Qe || (H.TraceFormat = Qe = {}));
  (function(e) {
    function t(n) {
      return de.string(n) ? (n = n.toLowerCase(), n === "json" ? e.JSON : e.Text) : e.Text;
    }
    e.fromString = t;
  })(Qe || (H.TraceFormat = Qe = {}));
  var ia;
  (function(e) {
    e.type = new G.NotificationType("$/setTrace");
  })(ia || (H.SetTraceNotification = ia = {}));
  var li;
  (function(e) {
    e.type = new G.NotificationType("$/logTrace");
  })(li || (H.LogTraceNotification = li = {}));
  var _r;
  (function(e) {
    e[e.Closed = 1] = "Closed", e[e.Disposed = 2] = "Disposed", e[e.AlreadyListening = 3] = "AlreadyListening";
  })(_r || (H.ConnectionErrors = _r = {}));
  var Mn = class e extends Error {
    code;
    constructor(t, n) {
      super(n), this.code = t, Object.setPrototypeOf(this, e.prototype);
    }
  };
  H.ConnectionError = Mn;
  var oa;
  (function(e) {
    function t(n) {
      let r = n;
      return r && de.func(r.cancelUndispatched);
    }
    e.is = t;
  })(oa || (H.ConnectionStrategy = oa = {}));
  var fi;
  (function(e) {
    function t(n) {
      let r = n;
      return r && (r.kind === void 0 || r.kind === "id") && de.func(r.createCancellationTokenSource) && (r.dispose === void 0 || de.func(r.dispose));
    }
    e.is = t;
  })(fi || (H.IdCancellationReceiverStrategy = fi = {}));
  var sa;
  (function(e) {
    function t(n) {
      let r = n;
      return r && r.kind === "request" && de.func(r.createCancellationTokenSource) && (r.dispose === void 0 || de.func(r.dispose));
    }
    e.is = t;
  })(sa || (H.RequestCancellationReceiverStrategy = sa = {}));
  var di;
  (function(e) {
    e.Message = Object.freeze({ createCancellationTokenSource(n) {
      return new Ks.CancellationTokenSource();
    } });
    function t(n) {
      return fi.is(n) || sa.is(n);
    }
    e.is = t;
  })(di || (H.CancellationReceiverStrategy = di = {}));
  var pi;
  (function(e) {
    e.Message = Object.freeze({ sendCancellation(n, r) {
      return n.sendNotification(wr.type, { id: r });
    }, cleanup(n) {
    } });
    function t(n) {
      let r = n;
      return r && de.func(r.sendCancellation) && de.func(r.cleanup);
    }
    e.is = t;
  })(pi || (H.CancellationSenderStrategy = pi = {}));
  var hi;
  (function(e) {
    e.Message = Object.freeze({ receiver: di.Message, sender: pi.Message });
    function t(n) {
      let r = n;
      return r && di.is(r.receiver) && pi.is(r.sender);
    }
    e.is = t;
  })(hi || (H.CancellationStrategy = hi = {}));
  var mi;
  (function(e) {
    function t(n) {
      let r = n;
      return r && de.func(r.handleMessage);
    }
    e.is = t;
  })(mi || (H.MessageStrategy = mi = {}));
  var cl;
  (function(e) {
    function t(n) {
      let r = n;
      return r && (hi.is(r.cancellationStrategy) || oa.is(r.connectionStrategy) || mi.is(r.messageStrategy) || de.number(r.maxParallelism));
    }
    e.is = t;
  })(cl || (H.ConnectionOptions = cl = {}));
  var dt;
  (function(e) {
    e[e.New = 1] = "New", e[e.Listening = 2] = "Listening", e[e.Closed = 3] = "Closed", e[e.Disposed = 4] = "Disposed";
  })(dt || (dt = {}));
  function sy(e, t, n, r) {
    let i = n !== void 0 ? n : H.NullLogger, o = 0, s = 0, a = 0, u = "2.0", c = r?.maxParallelism ?? -1, f = 0, v, d = /* @__PURE__ */ new Map(), g, y = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), S, P = new al.LinkedMap(), h = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Map(), D = K.Off, m = Qe.Text, p, k = dt.New, N = new br.Emitter(), T = new br.Emitter(), M = new br.Emitter(), O = new br.Emitter(), A = new br.Emitter(), q = r && r.cancellationStrategy ? r.cancellationStrategy : hi.Message;
    function X(x) {
    }
    function be() {
      return k === dt.Listening;
    }
    function ue() {
      return k === dt.Closed;
    }
    function De() {
      return k === dt.Disposed;
    }
    function te() {
      (k === dt.New || k === dt.Listening) && (k = dt.Closed, T.fire(void 0));
    }
    function Pe(x) {
      N.fire([x, void 0, void 0]);
    }
    function $t(x) {
      N.fire(x);
    }
    e.onClose(te), e.onError(Pe), t.onClose(te), t.onError($t);
    function Zr(x) {
      if (x === null) throw new Error("Can't send requests with id null since the response can't be correlated.");
      return "req-" + x.toString();
    }
    function Qr(x) {
      return x === null ? "res-unknown-" + (++a).toString() : "res-" + x.toString();
    }
    function Yr() {
      return "not-" + (++s).toString();
    }
    function $m(x, E) {
      G.Message.isRequest(E) ? x.set(Zr(E.id), E) : G.Message.isResponse(E) ? c === -1 ? x.set(Qr(E.id), E) : ju(E) : x.set(Yr(), E);
    }
    function es() {
      S || P.size === 0 || c !== -1 && f >= c || (S = (0, sl.default)().timer.setImmediate(async () => {
        if (S = void 0, P.size === 0 || c !== -1 && f >= c) return;
        let x = P.shift(), E;
        try {
          f++;
          let I = r?.messageStrategy;
          mi.is(I) ? E = I.handleMessage(x, Cu) : E = Cu(x);
        } catch (I) {
          i.error(`Processing message queue failed: ${I.toString()}`);
        } finally {
          E instanceof Promise ? E.then(() => {
            f--, es();
          }).catch((I) => {
            i.error(`Processing message queue failed: ${I.toString()}`);
          }) : f--, es();
        }
      }));
    }
    async function Cu(x) {
      return G.Message.isRequest(x) ? Wm(x) : G.Message.isNotification(x) ? Um(x) : G.Message.isResponse(x) ? ju(x) : Hm(x);
    }
    let Vm = (x) => {
      try {
        if (G.Message.isNotification(x) && x.method === wr.type.method) {
          let E = x.params.id, I = Zr(E), W = P.get(I);
          if (G.Message.isRequest(W)) {
            let le = r?.connectionStrategy, ne = le && le.cancelUndispatched ? le.cancelUndispatched(W, X) : void 0;
            if (ne && (ne.error !== void 0 || ne.result !== void 0)) {
              P.delete(I), _.delete(E), ne.id = W.id, ts(ne, x.method, Date.now()), t.write(ne).catch(() => i.error("Sending response for canceled message failed."));
              return;
            }
          }
          let Y = _.get(E);
          if (Y !== void 0) {
            Y.cancel(), ns(x);
            return;
          } else l.add(E);
        }
        $m(P, x);
      } finally {
        es();
      }
    };
    async function Wm(x) {
      if (De()) return Promise.resolve();
      function E(xe, qe, me) {
        let ge = { jsonrpc: u, id: x.id };
        return xe instanceof G.ResponseError ? ge.error = xe.toJson() : ge.result = xe === void 0 ? null : xe, ts(ge, qe, me), t.write(ge);
      }
      function I(xe, qe, me) {
        let ge = { jsonrpc: u, id: x.id, error: xe.toJson() };
        return ts(ge, qe, me), t.write(ge);
      }
      Jm(x);
      let W = d.get(x.method), Y, le;
      W && (Y = W.type, le = W.handler);
      let ne = Date.now();
      if (le || v) {
        let xe = x.id ?? String(Date.now()), qe = fi.is(q.receiver) ? q.receiver.createCancellationTokenSource(xe) : q.receiver.createCancellationTokenSource(x);
        x.id !== null && l.has(x.id) && qe.cancel(), x.id !== null && _.set(xe, qe);
        try {
          let me;
          if (le) if (x.params === void 0) {
            if (Y !== void 0 && Y.numberOfParams !== 0) return I(new G.ResponseError(G.ErrorCodes.InvalidParams, `Request ${x.method} defines ${Y.numberOfParams} params but received none.`), x.method, ne);
            me = le(qe.token);
          } else if (Array.isArray(x.params)) {
            if (Y !== void 0 && Y.parameterStructures === G.ParameterStructures.byName) return I(new G.ResponseError(G.ErrorCodes.InvalidParams, `Request ${x.method} defines parameters by name but received parameters by position`), x.method, ne);
            me = le(...x.params, qe.token);
          } else {
            if (Y !== void 0 && Y.parameterStructures === G.ParameterStructures.byPosition) return I(new G.ResponseError(G.ErrorCodes.InvalidParams, `Request ${x.method} defines parameters by position but received parameters by name`), x.method, ne);
            me = le(x.params, qe.token);
          }
          else v && (me = v(x.method, x.params, qe.token));
          let ge = await me;
          await E(ge, x.method, ne);
        } catch (me) {
          me instanceof G.ResponseError ? await E(me, x.method, ne) : me && de.string(me.message) ? await I(new G.ResponseError(G.ErrorCodes.InternalError, `Request ${x.method} failed with message: ${me.message}`), x.method, ne) : await I(new G.ResponseError(G.ErrorCodes.InternalError, `Request ${x.method} failed unexpectedly without providing any details.`), x.method, ne);
        } finally {
          _.delete(xe);
        }
      } else await I(new G.ResponseError(G.ErrorCodes.MethodNotFound, `Unhandled method ${x.method}`), x.method, ne);
    }
    function ju(x) {
      if (!De()) if (x.id === null) x.error ? i.error(`Received response message without id: Error is: 
${JSON.stringify(x.error, void 0, 4)}`) : i.error("Received response message without id. No further error information provided.");
      else {
        let E = x.id, I = h.get(E);
        if (Gm(x, I), I !== void 0) {
          h.delete(E);
          try {
            if (x.error) {
              let W = x.error;
              I.reject(new G.ResponseError(W.code, W.message, W.data));
            } else if (x.result !== void 0) I.resolve(x.result);
            else throw new Error("Should never happen.");
          } catch (W) {
            W.message ? i.error(`Response handler '${I.method}' failed with message: ${W.message}`) : i.error(`Response handler '${I.method}' failed unexpectedly.`);
          }
        }
      }
    }
    async function Um(x) {
      if (De()) return;
      let E, I;
      if (x.method === wr.type.method) {
        let W = x.params.id;
        l.delete(W), ns(x);
        return;
      } else {
        let W = y.get(x.method);
        W && (I = W.handler, E = W.type);
      }
      if (I || g) try {
        if (ns(x), I) if (x.params === void 0) E !== void 0 && E.numberOfParams !== 0 && E.parameterStructures !== G.ParameterStructures.byName && i.error(`Notification ${x.method} defines ${E.numberOfParams} params but received none.`), await I();
        else if (Array.isArray(x.params)) {
          let W = x.params;
          x.method === vr.type.method && W.length === 2 && ea.is(W[0]) ? await I({ token: W[0], value: W[1] }) : (E !== void 0 && (E.parameterStructures === G.ParameterStructures.byName && i.error(`Notification ${x.method} defines parameters by name but received parameters by position`), E.numberOfParams !== x.params.length && i.error(`Notification ${x.method} defines ${E.numberOfParams} params but received ${W.length} arguments`)), await I(...W));
        } else E !== void 0 && E.parameterStructures === G.ParameterStructures.byPosition && i.error(`Notification ${x.method} defines parameters by position but received parameters by name`), await I(x.params);
        else g && await g(x.method, x.params);
      } catch (W) {
        W.message ? i.error(`Notification handler '${x.method}' failed with message: ${W.message}`) : i.error(`Notification handler '${x.method}' failed unexpectedly.`);
      }
      else M.fire(x);
    }
    function Hm(x) {
      if (!x) {
        i.error("Received empty message.");
        return;
      }
      i.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(x, null, 4)}`);
      let E = x;
      if (de.string(E.id) || de.number(E.id)) {
        let I = E.id, W = h.get(I);
        W && W.reject(new Error("The received response has neither a result nor an error property."));
      }
    }
    function Vt(x) {
      if (x != null) switch (D) {
        case K.Verbose:
          return JSON.stringify(x, null, 4);
        case K.Compact:
          return JSON.stringify(x);
        default:
          return;
      }
    }
    function Bm(x) {
      if (!(D === K.Off || !p)) if (m === Qe.Text) {
        let E;
        (D === K.Verbose || D === K.Compact) && x.params && (E = `Params: ${Vt(x.params)}`), p.log(`Sending request '${x.method} - (${x.id})'.`, E);
      } else Pn("send-request", x);
    }
    function zm(x) {
      if (!(D === K.Off || !p)) if (m === Qe.Text) {
        let E;
        (D === K.Verbose || D === K.Compact) && (x.params ? E = `Params: ${Vt(x.params)}` : E = "No parameters provided."), p.log(`Sending notification '${x.method}'.`, E);
      } else Pn("send-notification", x);
    }
    function ts(x, E, I) {
      if (!(D === K.Off || !p)) if (m === Qe.Text) {
        let W;
        (D === K.Verbose || D === K.Compact) && (x.error && x.error.data ? W = `Error data: ${Vt(x.error.data)}` : x.result ? W = `Result: ${Vt(x.result)}` : x.error === void 0 && (W = "No result returned.")), p.log(`Sending response '${E} - (${x.id})'. Processing request took ${Date.now() - I}ms`, W);
      } else Pn("send-response", x);
    }
    function Jm(x) {
      if (!(D === K.Off || !p)) if (m === Qe.Text) {
        let E;
        (D === K.Verbose || D === K.Compact) && x.params && (E = `Params: ${Vt(x.params)}`), p.log(`Received request '${x.method} - (${x.id})'.`, E);
      } else Pn("receive-request", x);
    }
    function ns(x) {
      if (!(D === K.Off || !p || x.method === li.type.method)) if (m === Qe.Text) {
        let E;
        (D === K.Verbose || D === K.Compact) && (x.params ? E = `Params: ${Vt(x.params)}` : E = "No parameters provided."), p.log(`Received notification '${x.method}'.`, E);
      } else Pn("receive-notification", x);
    }
    function Gm(x, E) {
      if (!(D === K.Off || !p)) if (m === Qe.Text) {
        let I;
        if ((D === K.Verbose || D === K.Compact) && (x.error && x.error.data ? I = `Error data: ${Vt(x.error.data)}` : x.result ? I = `Result: ${Vt(x.result)}` : x.error === void 0 && (I = "No result returned.")), E) {
          let W = x.error ? ` Request failed: ${x.error.message} (${x.error.code}).` : "";
          p.log(`Received response '${E.method} - (${x.id})' in ${Date.now() - E.timerStart}ms.${W}`, I);
        } else p.log(`Received response ${x.id} without active response promise.`, I);
      } else Pn("receive-response", x);
    }
    function Pn(x, E) {
      if (!p || D === K.Off) return;
      let I = { isLSPMessage: true, type: x, message: E, timestamp: Date.now() };
      p.log(I);
    }
    function dr() {
      if (ue()) throw new Mn(_r.Closed, "Connection is closed.");
      if (De()) throw new Mn(_r.Disposed, "Connection is disposed.");
    }
    function Xm() {
      if (be()) throw new Mn(_r.AlreadyListening, "Connection is already listening");
    }
    function Zm() {
      if (!be()) throw new Error("Call listen() first.");
    }
    function pr(x) {
      return x === void 0 ? null : x;
    }
    function Eu(x) {
      if (x !== null) return x;
    }
    function Au(x) {
      return x != null && !Array.isArray(x) && typeof x == "object";
    }
    function rs(x, E) {
      switch (x) {
        case G.ParameterStructures.auto:
          return Au(E) ? Eu(E) : [pr(E)];
        case G.ParameterStructures.byName:
          if (!Au(E)) throw new Error("Received parameters by name but param is not an object literal.");
          return Eu(E);
        case G.ParameterStructures.byPosition:
          return [pr(E)];
        default:
          throw new Error(`Unknown parameter structure ${x.toString()}`);
      }
    }
    function qu(x, E) {
      let I, W = x.numberOfParams;
      switch (W) {
        case 0:
          I = void 0;
          break;
        case 1:
          I = rs(x.parameterStructures, E[0]);
          break;
        default:
          I = [];
          for (let Y = 0; Y < E.length && Y < W; Y++) I.push(pr(E[Y]));
          if (E.length < W) for (let Y = E.length; Y < W; Y++) I.push(null);
          break;
      }
      return I;
    }
    let un = { sendNotification: (x, ...E) => {
      dr();
      let I, W;
      if (de.string(x)) {
        I = x;
        let le = E[0], ne = 0, xe = G.ParameterStructures.auto;
        G.ParameterStructures.is(le) && (ne = 1, xe = le);
        let qe = E.length, me = qe - ne;
        switch (me) {
          case 0:
            W = void 0;
            break;
          case 1:
            W = rs(xe, E[ne]);
            break;
          default:
            if (xe === G.ParameterStructures.byName) throw new Error(`Received ${me} parameters for 'by Name' notification parameter structure.`);
            W = E.slice(ne, qe).map((ge) => pr(ge));
            break;
        }
      } else {
        let le = E;
        I = x.method, W = qu(x, le);
      }
      let Y = { jsonrpc: u, method: I, params: W };
      return zm(Y), t.write(Y).catch((le) => {
        throw i.error("Sending notification failed."), le;
      });
    }, onNotification: (x, E) => {
      dr();
      let I;
      return de.func(x) ? g = x : E && (de.string(x) ? (I = x, y.set(x, { type: void 0, handler: E })) : (I = x.method, y.set(x.method, { type: x, handler: E }))), { dispose: () => {
        I !== void 0 ? y.get(I)?.handler === E && y.delete(I) : g === x && (g = void 0);
      } };
    }, onProgress: (x, E, I) => {
      if (w.has(E)) throw new Error(`Progress handler for token ${E} already registered`);
      return w.set(E, I), { dispose: () => {
        w.get(E) === I && w.delete(E);
      } };
    }, sendProgress: (x, E, I) => un.sendNotification(vr.type, { token: E, value: I }), onUnhandledProgress: O.event, sendRequest: (x, ...E) => {
      dr(), Zm();
      function I(ge, lt) {
        let kt = q.sender.sendCancellation(ge, lt);
        kt === void 0 ? i.log(`Received no promise from cancellation strategy when cancelling id ${lt}`) : kt.catch(() => {
          i.log(`Sending cancellation messages for id ${lt} failed.`);
        });
      }
      let W, Y, le;
      if (de.string(x)) {
        W = x;
        let ge = E[0], lt = E[E.length - 1], kt = 0, hr = G.ParameterStructures.auto;
        G.ParameterStructures.is(ge) && (kt = 1, hr = ge);
        let ln = E.length;
        Ks.CancellationToken.is(lt) && (ln = ln - 1, le = lt);
        let bt = ln - kt;
        switch (bt) {
          case 0:
            Y = void 0;
            break;
          case 1:
            Y = rs(hr, E[kt]);
            break;
          default:
            if (hr === G.ParameterStructures.byName) throw new Error(`Received ${bt} parameters for 'by Name' request parameter structure.`);
            Y = E.slice(kt, ln).map((Qm) => pr(Qm));
            break;
        }
      } else {
        let ge = E;
        W = x.method, Y = qu(x, ge);
        let lt = x.numberOfParams;
        le = Ks.CancellationToken.is(ge[lt]) ? ge[lt] : void 0;
      }
      let ne = o++, xe, qe = false;
      le !== void 0 && (le.isCancellationRequested ? qe = true : xe = le.onCancellationRequested(() => {
        I(un, ne);
      }));
      let me = { jsonrpc: u, id: ne, method: W, params: Y };
      return Bm(me), typeof q.sender.enableCancellation == "function" && q.sender.enableCancellation(me), new Promise(async (ge, lt) => {
        let kt = (bt) => {
          ge(bt), q.sender.cleanup(ne), xe?.dispose();
        }, hr = (bt) => {
          lt(bt), q.sender.cleanup(ne), xe?.dispose();
        }, ln = { method: W, timerStart: Date.now(), resolve: kt, reject: hr };
        try {
          h.set(ne, ln), await t.write(me), qe && I(un, ne);
        } catch (bt) {
          throw h.delete(ne), ln.reject(new G.ResponseError(G.ErrorCodes.MessageWriteError, bt.message ? bt.message : "Unknown reason")), i.error("Sending request failed."), bt;
        }
      });
    }, onRequest: (x, E) => {
      dr();
      let I = null;
      return na.is(x) ? (I = void 0, v = x) : de.string(x) ? (I = null, E !== void 0 && (I = x, d.set(x, { handler: E, type: void 0 }))) : E !== void 0 && (I = x.method, d.set(x.method, { type: x, handler: E })), { dispose: () => {
        I !== null && (I !== void 0 ? d.get(I)?.handler === E && d.delete(I) : v === x && (v = void 0));
      } };
    }, hasPendingResponse: () => h.size > 0, trace: async (x, E, I) => {
      let W = false, Y = Qe.Text;
      I !== void 0 && (de.boolean(I) ? W = I : (W = I.sendNotification || false, Y = I.traceFormat || Qe.Text)), D = x, m = Y, D === K.Off ? p = void 0 : p = E, W && !ue() && !De() && await un.sendNotification(ia.type, { value: K.toString(x) });
    }, onError: N.event, onClose: T.event, onUnhandledNotification: M.event, onDispose: A.event, end: () => {
      t.end();
    }, dispose: () => {
      if (De()) return;
      k = dt.Disposed, A.fire(void 0);
      let x = new G.ResponseError(G.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
      for (let E of h.values()) E.reject(x);
      h = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Set(), P = new al.LinkedMap(), de.func(t.dispose) && t.dispose(), de.func(e.dispose) && e.dispose();
    }, listen: () => {
      dr(), Xm(), k = dt.Listening, e.listen(Vm);
    }, inspect: () => {
      (0, sl.default)().console.log("inspect");
    } };
    return un.onNotification(li.type, (x) => {
      if (D === K.Off || !p) return;
      let E = D === K.Verbose || D === K.Compact;
      p.log(x.message, E ? x.verbose : void 0);
    }), un.onNotification(vr.type, async (x) => {
      let E = w.get(x.token);
      E ? await E(x.value) : O.fire(x);
    }), un;
  }
});
var Rt = F((C) => {
  "use strict";
  var ay = C && C.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(C, "__esModule", { value: true });
  C.ProgressType = C.ProgressToken = C.createMessageConnection = C.NullLogger = C.ConnectionOptions = C.ConnectionStrategy = C.AbstractMessageBuffer = C.WriteableStreamMessageWriter = C.AbstractMessageWriter = C.MessageWriter = C.ReadableStreamMessageReader = C.AbstractMessageReader = C.MessageReader = C.SharedArrayReceiverStrategy = C.SharedArraySenderStrategy = C.CancellationToken = C.CancellationTokenSource = C.Emitter = C.Event = C.Disposable = C.LRUCache = C.Touch = C.LinkedMap = C.ParameterStructures = C.NotificationType9 = C.NotificationType8 = C.NotificationType7 = C.NotificationType6 = C.NotificationType5 = C.NotificationType4 = C.NotificationType3 = C.NotificationType2 = C.NotificationType1 = C.NotificationType0 = C.NotificationType = C.ErrorCodes = C.ResponseError = C.RequestType9 = C.RequestType8 = C.RequestType7 = C.RequestType6 = C.RequestType5 = C.RequestType4 = C.RequestType3 = C.RequestType2 = C.RequestType1 = C.RequestType0 = C.RequestType = C.Message = C.RAL = void 0;
  C.MessageStrategy = C.CancellationStrategy = C.CancellationSenderStrategy = C.RequestCancellationReceiverStrategy = C.IdCancellationReceiverStrategy = C.CancellationReceiverStrategy = C.ConnectionError = C.ConnectionErrors = C.LogTraceNotification = C.SetTraceNotification = C.TraceFormat = C.TraceValues = C.TraceValue = C.Trace = void 0;
  var se = Ms();
  Object.defineProperty(C, "Message", { enumerable: true, get: function() {
    return se.Message;
  } });
  Object.defineProperty(C, "RequestType", { enumerable: true, get: function() {
    return se.RequestType;
  } });
  Object.defineProperty(C, "RequestType0", { enumerable: true, get: function() {
    return se.RequestType0;
  } });
  Object.defineProperty(C, "RequestType1", { enumerable: true, get: function() {
    return se.RequestType1;
  } });
  Object.defineProperty(C, "RequestType2", { enumerable: true, get: function() {
    return se.RequestType2;
  } });
  Object.defineProperty(C, "RequestType3", { enumerable: true, get: function() {
    return se.RequestType3;
  } });
  Object.defineProperty(C, "RequestType4", { enumerable: true, get: function() {
    return se.RequestType4;
  } });
  Object.defineProperty(C, "RequestType5", { enumerable: true, get: function() {
    return se.RequestType5;
  } });
  Object.defineProperty(C, "RequestType6", { enumerable: true, get: function() {
    return se.RequestType6;
  } });
  Object.defineProperty(C, "RequestType7", { enumerable: true, get: function() {
    return se.RequestType7;
  } });
  Object.defineProperty(C, "RequestType8", { enumerable: true, get: function() {
    return se.RequestType8;
  } });
  Object.defineProperty(C, "RequestType9", { enumerable: true, get: function() {
    return se.RequestType9;
  } });
  Object.defineProperty(C, "ResponseError", { enumerable: true, get: function() {
    return se.ResponseError;
  } });
  Object.defineProperty(C, "ErrorCodes", { enumerable: true, get: function() {
    return se.ErrorCodes;
  } });
  Object.defineProperty(C, "NotificationType", { enumerable: true, get: function() {
    return se.NotificationType;
  } });
  Object.defineProperty(C, "NotificationType0", { enumerable: true, get: function() {
    return se.NotificationType0;
  } });
  Object.defineProperty(C, "NotificationType1", { enumerable: true, get: function() {
    return se.NotificationType1;
  } });
  Object.defineProperty(C, "NotificationType2", { enumerable: true, get: function() {
    return se.NotificationType2;
  } });
  Object.defineProperty(C, "NotificationType3", { enumerable: true, get: function() {
    return se.NotificationType3;
  } });
  Object.defineProperty(C, "NotificationType4", { enumerable: true, get: function() {
    return se.NotificationType4;
  } });
  Object.defineProperty(C, "NotificationType5", { enumerable: true, get: function() {
    return se.NotificationType5;
  } });
  Object.defineProperty(C, "NotificationType6", { enumerable: true, get: function() {
    return se.NotificationType6;
  } });
  Object.defineProperty(C, "NotificationType7", { enumerable: true, get: function() {
    return se.NotificationType7;
  } });
  Object.defineProperty(C, "NotificationType8", { enumerable: true, get: function() {
    return se.NotificationType8;
  } });
  Object.defineProperty(C, "NotificationType9", { enumerable: true, get: function() {
    return se.NotificationType9;
  } });
  Object.defineProperty(C, "ParameterStructures", { enumerable: true, get: function() {
    return se.ParameterStructures;
  } });
  var aa = Cs();
  Object.defineProperty(C, "LinkedMap", { enumerable: true, get: function() {
    return aa.LinkedMap;
  } });
  Object.defineProperty(C, "LRUCache", { enumerable: true, get: function() {
    return aa.LRUCache;
  } });
  Object.defineProperty(C, "Touch", { enumerable: true, get: function() {
    return aa.Touch;
  } });
  var cy = Xu();
  Object.defineProperty(C, "Disposable", { enumerable: true, get: function() {
    return cy.Disposable;
  } });
  var ll = Tn();
  Object.defineProperty(C, "Event", { enumerable: true, get: function() {
    return ll.Event;
  } });
  Object.defineProperty(C, "Emitter", { enumerable: true, get: function() {
    return ll.Emitter;
  } });
  var fl = si();
  Object.defineProperty(C, "CancellationTokenSource", { enumerable: true, get: function() {
    return fl.CancellationTokenSource;
  } });
  Object.defineProperty(C, "CancellationToken", { enumerable: true, get: function() {
    return fl.CancellationToken;
  } });
  var dl = Qu();
  Object.defineProperty(C, "SharedArraySenderStrategy", { enumerable: true, get: function() {
    return dl.SharedArraySenderStrategy;
  } });
  Object.defineProperty(C, "SharedArrayReceiverStrategy", { enumerable: true, get: function() {
    return dl.SharedArrayReceiverStrategy;
  } });
  var ca = Ku();
  Object.defineProperty(C, "MessageReader", { enumerable: true, get: function() {
    return ca.MessageReader;
  } });
  Object.defineProperty(C, "AbstractMessageReader", { enumerable: true, get: function() {
    return ca.AbstractMessageReader;
  } });
  Object.defineProperty(C, "ReadableStreamMessageReader", { enumerable: true, get: function() {
    return ca.ReadableStreamMessageReader;
  } });
  var ua = il();
  Object.defineProperty(C, "MessageWriter", { enumerable: true, get: function() {
    return ua.MessageWriter;
  } });
  Object.defineProperty(C, "AbstractMessageWriter", { enumerable: true, get: function() {
    return ua.AbstractMessageWriter;
  } });
  Object.defineProperty(C, "WriteableStreamMessageWriter", { enumerable: true, get: function() {
    return ua.WriteableStreamMessageWriter;
  } });
  var uy = ol();
  Object.defineProperty(C, "AbstractMessageBuffer", { enumerable: true, get: function() {
    return uy.AbstractMessageBuffer;
  } });
  var we = ul();
  Object.defineProperty(C, "ConnectionStrategy", { enumerable: true, get: function() {
    return we.ConnectionStrategy;
  } });
  Object.defineProperty(C, "ConnectionOptions", { enumerable: true, get: function() {
    return we.ConnectionOptions;
  } });
  Object.defineProperty(C, "NullLogger", { enumerable: true, get: function() {
    return we.NullLogger;
  } });
  Object.defineProperty(C, "createMessageConnection", { enumerable: true, get: function() {
    return we.createMessageConnection;
  } });
  Object.defineProperty(C, "ProgressToken", { enumerable: true, get: function() {
    return we.ProgressToken;
  } });
  Object.defineProperty(C, "ProgressType", { enumerable: true, get: function() {
    return we.ProgressType;
  } });
  Object.defineProperty(C, "Trace", { enumerable: true, get: function() {
    return we.Trace;
  } });
  Object.defineProperty(C, "TraceValue", { enumerable: true, get: function() {
    return we.TraceValue;
  } });
  Object.defineProperty(C, "TraceFormat", { enumerable: true, get: function() {
    return we.TraceFormat;
  } });
  Object.defineProperty(C, "SetTraceNotification", { enumerable: true, get: function() {
    return we.SetTraceNotification;
  } });
  Object.defineProperty(C, "LogTraceNotification", { enumerable: true, get: function() {
    return we.LogTraceNotification;
  } });
  Object.defineProperty(C, "ConnectionErrors", { enumerable: true, get: function() {
    return we.ConnectionErrors;
  } });
  Object.defineProperty(C, "ConnectionError", { enumerable: true, get: function() {
    return we.ConnectionError;
  } });
  Object.defineProperty(C, "CancellationReceiverStrategy", { enumerable: true, get: function() {
    return we.CancellationReceiverStrategy;
  } });
  Object.defineProperty(C, "IdCancellationReceiverStrategy", { enumerable: true, get: function() {
    return we.IdCancellationReceiverStrategy;
  } });
  Object.defineProperty(C, "RequestCancellationReceiverStrategy", { enumerable: true, get: function() {
    return we.RequestCancellationReceiverStrategy;
  } });
  Object.defineProperty(C, "CancellationSenderStrategy", { enumerable: true, get: function() {
    return we.CancellationSenderStrategy;
  } });
  Object.defineProperty(C, "CancellationStrategy", { enumerable: true, get: function() {
    return we.CancellationStrategy;
  } });
  Object.defineProperty(C, "MessageStrategy", { enumerable: true, get: function() {
    return we.MessageStrategy;
  } });
  Object.defineProperty(C, "TraceValues", { enumerable: true, get: function() {
    return we.TraceValues;
  } });
  var ly = ay(Ht());
  C.RAL = ly.default;
});
var Fi = {};
rg(Fi, { AnnotatedTextEdit: () => Mt, ApplyKind: () => wa, ChangeAnnotation: () => zt, ChangeAnnotationIdentifier: () => Te, CodeAction: () => Ei, CodeActionContext: () => Ci, CodeActionKind: () => Ni, CodeActionTag: () => ji, CodeActionTriggerKind: () => Tr, CodeDescription: () => pa, CodeLens: () => ka, Color: () => Sr, ColorInformation: () => bi, ColorPresentation: () => vi, Command: () => Gt, CompletionItem: () => qn, CompletionItemKind: () => je, CompletionItemLabelDetails: () => Da, CompletionItemTag: () => Pi, CompletionList: () => xi, CreateFile: () => jn, DeleteFile: () => An, Diagnostic: () => Ye, DiagnosticRelatedInformation: () => wi, DiagnosticSeverity: () => Ce, DiagnosticTag: () => da, DocumentHighlight: () => Oi, DocumentHighlightKind: () => ki, DocumentLink: () => Ai, DocumentSymbol: () => Mi, DocumentUri: () => gi, EOL: () => fy, FoldingRange: () => _i, FoldingRangeKind: () => Jt, FormattingOptions: () => Oa, Hover: () => Ti, InlayHint: () => qa, InlayHintKind: () => qi, InlayHintLabelPart: () => Ii, InlineCompletionContext: () => Va, InlineCompletionItem: () => Ia, InlineCompletionList: () => La, InlineCompletionTriggerKind: () => Fa, InlineValueContext: () => Aa, InlineValueEvaluatableExpression: () => Ea, InlineValueText: () => Ca, InlineValueVariableLookup: () => ja, InsertReplaceEdit: () => va, InsertTextFormat: () => pe, InsertTextMode: () => _a, LanguageKind: () => ya, Location: () => Nt, LocationLink: () => fa, MarkedString: () => In, MarkupContent: () => Ct, MarkupKind: () => _t, OptionalVersionedTextDocumentIdentifier: () => xr, ParameterInformation: () => Sa, Position: () => ee, Range: () => U, RenameFile: () => En, SelectedCompletionInfo: () => $a, SelectionRange: () => dn, SemanticTokenModifiers: () => Ma, SemanticTokenTypes: () => Ra, SemanticTokens: () => Na, SignatureInformation: () => Pa, SnippetTextEdit: () => ha, StringValue: () => Li, SymbolInformation: () => Ri, SymbolKind: () => Ke, SymbolTag: () => xa, TextDocument: () => Ua, TextDocumentEdit: () => Cn, TextDocumentIdentifier: () => ga, TextDocumentItem: () => ba, TextEdit: () => Se, URI: () => yi, VersionedTextDocumentIdentifier: () => Si, WorkspaceChange: () => ma, WorkspaceEdit: () => Pr, WorkspaceFolder: () => Wa, WorkspaceSymbol: () => Ta, integer: () => la, uinteger: () => Dr });
var gi, yi, la, Dr, ee, U, Nt, fa, Sr, bi, vi, Jt, _i, wi, Ce, da, pa, Ye, Gt, Se, zt, Te, Mt, Cn, jn, En, An, Pr, Nn, ha, Di, ma, ga, Si, xr, ya, ba, _t, Ct, je, pe, Pi, va, _a, wa, Da, qn, xi, In, Ti, Sa, Pa, ki, Oi, Ke, xa, Ri, Ta, Mi, Ni, Tr, Ci, ji, Ei, ka, Oa, Ai, dn, Ra, Ma, Na, Ca, ja, Ea, Aa, qi, Ii, qa, Li, Ia, La, Fa, $a, Va, Wa, fy, Ua, Ha, R, Ln = Z(() => {
  "use strict";
  (function(e) {
    function t(n) {
      return typeof n == "string";
    }
    e.is = t;
  })(gi || (gi = {}));
  (function(e) {
    function t(n) {
      return typeof n == "string";
    }
    e.is = t;
  })(yi || (yi = {}));
  (function(e) {
    e.MIN_VALUE = -2147483648, e.MAX_VALUE = 2147483647;
    function t(n) {
      return typeof n == "number" && e.MIN_VALUE <= n && n <= e.MAX_VALUE;
    }
    e.is = t;
  })(la || (la = {}));
  (function(e) {
    e.MIN_VALUE = 0, e.MAX_VALUE = 2147483647;
    function t(n) {
      return typeof n == "number" && e.MIN_VALUE <= n && n <= e.MAX_VALUE;
    }
    e.is = t;
  })(Dr || (Dr = {}));
  (function(e) {
    function t(r, i) {
      return r === Number.MAX_VALUE && (r = Dr.MAX_VALUE), i === Number.MAX_VALUE && (i = Dr.MAX_VALUE), { line: r, character: i };
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.objectLiteral(i) && R.uinteger(i.line) && R.uinteger(i.character);
    }
    e.is = n;
  })(ee || (ee = {}));
  (function(e) {
    function t(r, i, o, s) {
      if (R.uinteger(r) && R.uinteger(i) && R.uinteger(o) && R.uinteger(s)) return { start: ee.create(r, i), end: ee.create(o, s) };
      if (ee.is(r) && ee.is(i)) return { start: r, end: i };
      throw new Error(`Range#create called with invalid arguments[${r}, ${i}, ${o}, ${s}]`);
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.objectLiteral(i) && ee.is(i.start) && ee.is(i.end);
    }
    e.is = n;
  })(U || (U = {}));
  (function(e) {
    function t(r, i) {
      return { uri: r, range: i };
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.objectLiteral(i) && U.is(i.range) && (R.string(i.uri) || R.undefined(i.uri));
    }
    e.is = n;
  })(Nt || (Nt = {}));
  (function(e) {
    function t(r, i, o, s) {
      return { targetUri: r, targetRange: i, targetSelectionRange: o, originSelectionRange: s };
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.objectLiteral(i) && U.is(i.targetRange) && R.string(i.targetUri) && U.is(i.targetSelectionRange) && (U.is(i.originSelectionRange) || R.undefined(i.originSelectionRange));
    }
    e.is = n;
  })(fa || (fa = {}));
  (function(e) {
    function t(r, i, o, s) {
      return { red: r, green: i, blue: o, alpha: s };
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.objectLiteral(i) && R.numberRange(i.red, 0, 1) && R.numberRange(i.green, 0, 1) && R.numberRange(i.blue, 0, 1) && R.numberRange(i.alpha, 0, 1);
    }
    e.is = n;
  })(Sr || (Sr = {}));
  (function(e) {
    function t(r, i) {
      return { range: r, color: i };
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.objectLiteral(i) && U.is(i.range) && Sr.is(i.color);
    }
    e.is = n;
  })(bi || (bi = {}));
  (function(e) {
    function t(r, i, o) {
      return { label: r, textEdit: i, additionalTextEdits: o };
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.objectLiteral(i) && R.string(i.label) && (R.undefined(i.textEdit) || Se.is(i)) && (R.undefined(i.additionalTextEdits) || R.typedArray(i.additionalTextEdits, Se.is));
    }
    e.is = n;
  })(vi || (vi = {}));
  (function(e) {
    e.Comment = "comment", e.Imports = "imports", e.Region = "region";
  })(Jt || (Jt = {}));
  (function(e) {
    function t(r, i, o, s, a, u) {
      let c = { startLine: r, endLine: i };
      return R.defined(o) && (c.startCharacter = o), R.defined(s) && (c.endCharacter = s), R.defined(a) && (c.kind = a), R.defined(u) && (c.collapsedText = u), c;
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.objectLiteral(i) && R.uinteger(i.startLine) && R.uinteger(i.startLine) && (R.undefined(i.startCharacter) || R.uinteger(i.startCharacter)) && (R.undefined(i.endCharacter) || R.uinteger(i.endCharacter)) && (R.undefined(i.kind) || R.string(i.kind));
    }
    e.is = n;
  })(_i || (_i = {}));
  (function(e) {
    function t(r, i) {
      return { location: r, message: i };
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.defined(i) && Nt.is(i.location) && R.string(i.message);
    }
    e.is = n;
  })(wi || (wi = {}));
  (function(e) {
    e.Error = 1, e.Warning = 2, e.Information = 3, e.Hint = 4;
  })(Ce || (Ce = {}));
  (function(e) {
    e.Unnecessary = 1, e.Deprecated = 2;
  })(da || (da = {}));
  (function(e) {
    function t(n) {
      let r = n;
      return R.objectLiteral(r) && R.string(r.href);
    }
    e.is = t;
  })(pa || (pa = {}));
  (function(e) {
    function t(o, s, a, u, c, f) {
      let v = { range: o, message: s };
      return R.defined(a) && (v.severity = a), R.defined(u) && (v.code = u), R.defined(c) && (v.source = c), R.defined(f) && (v.relatedInformation = f), v;
    }
    e.create = t;
    function n(o) {
      var s;
      let a = o;
      return R.defined(a) && U.is(a.range) && (R.string(a.message) || Ct.is(a.message)) && (R.number(a.severity) || R.undefined(a.severity)) && (R.integer(a.code) || R.string(a.code) || R.undefined(a.code)) && (R.undefined(a.codeDescription) || R.string((s = a.codeDescription) === null || s === void 0 ? void 0 : s.href)) && (R.string(a.source) || R.undefined(a.source)) && (R.undefined(a.relatedInformation) || R.typedArray(a.relatedInformation, wi.is));
    }
    e.is = n;
    function r(o) {
      return R.string(o.message);
    }
    e.is3_17 = r;
    function i(o) {
      if (R.string(o.message)) return o.message;
      if (Ct.is(o.message)) return o.message.value;
      throw new Error(`Unknown message type ${typeof o.message}`);
    }
    e.getMessageString = i;
  })(Ye || (Ye = {}));
  (function(e) {
    function t(r, i, ...o) {
      let s = { title: r, command: i };
      return R.defined(o) && o.length > 0 && (s.arguments = o), s;
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.defined(i) && R.string(i.title) && (i.tooltip === void 0 || R.string(i.tooltip)) && R.string(i.command);
    }
    e.is = n;
  })(Gt || (Gt = {}));
  (function(e) {
    function t(o, s) {
      return { range: o, newText: s };
    }
    e.replace = t;
    function n(o, s) {
      return { range: { start: o, end: o }, newText: s };
    }
    e.insert = n;
    function r(o) {
      return { range: o, newText: "" };
    }
    e.del = r;
    function i(o) {
      let s = o;
      return R.objectLiteral(s) && R.string(s.newText) && U.is(s.range);
    }
    e.is = i;
  })(Se || (Se = {}));
  (function(e) {
    function t(r, i, o) {
      let s = { label: r };
      return i !== void 0 && (s.needsConfirmation = i), o !== void 0 && (s.description = o), s;
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.objectLiteral(i) && R.string(i.label) && (R.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) && (R.string(i.description) || i.description === void 0);
    }
    e.is = n;
  })(zt || (zt = {}));
  (function(e) {
    function t(n) {
      let r = n;
      return R.string(r);
    }
    e.is = t;
  })(Te || (Te = {}));
  (function(e) {
    function t(o, s, a) {
      return { range: o, newText: s, annotationId: a };
    }
    e.replace = t;
    function n(o, s, a) {
      return { range: { start: o, end: o }, newText: s, annotationId: a };
    }
    e.insert = n;
    function r(o, s) {
      return { range: o, newText: "", annotationId: s };
    }
    e.del = r;
    function i(o) {
      let s = o;
      return Se.is(s) && (zt.is(s.annotationId) || Te.is(s.annotationId));
    }
    e.is = i;
  })(Mt || (Mt = {}));
  (function(e) {
    function t(r, i) {
      return { textDocument: r, edits: i };
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.defined(i) && xr.is(i.textDocument) && Array.isArray(i.edits);
    }
    e.is = n;
  })(Cn || (Cn = {}));
  (function(e) {
    function t(r, i, o) {
      let s = { kind: "create", uri: r };
      return i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (s.options = i), o !== void 0 && (s.annotationId = o), s;
    }
    e.create = t;
    function n(r) {
      let i = r;
      return i && i.kind === "create" && R.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || R.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || R.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Te.is(i.annotationId));
    }
    e.is = n;
  })(jn || (jn = {}));
  (function(e) {
    function t(r, i, o, s) {
      let a = { kind: "rename", oldUri: r, newUri: i };
      return o !== void 0 && (o.overwrite !== void 0 || o.ignoreIfExists !== void 0) && (a.options = o), s !== void 0 && (a.annotationId = s), a;
    }
    e.create = t;
    function n(r) {
      let i = r;
      return i && i.kind === "rename" && R.string(i.oldUri) && R.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || R.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || R.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Te.is(i.annotationId));
    }
    e.is = n;
  })(En || (En = {}));
  (function(e) {
    function t(r, i, o) {
      let s = { kind: "delete", uri: r };
      return i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (s.options = i), o !== void 0 && (s.annotationId = o), s;
    }
    e.create = t;
    function n(r) {
      let i = r;
      return i && i.kind === "delete" && R.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || R.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || R.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || Te.is(i.annotationId));
    }
    e.is = n;
  })(An || (An = {}));
  (function(e) {
    function t(n) {
      let r = n;
      return r && (r.changes !== void 0 || r.documentChanges !== void 0) && (r.documentChanges === void 0 || r.documentChanges.every((i) => R.string(i.kind) ? jn.is(i) || En.is(i) || An.is(i) : Cn.is(i)));
    }
    e.is = t;
  })(Pr || (Pr = {}));
  Nn = class {
    constructor(t, n) {
      this.edits = t, this.changeAnnotations = n;
    }
    insert(t, n, r) {
      let i, o;
      if (r === void 0 ? i = Se.insert(t, n) : Te.is(r) ? (o = r, i = Mt.insert(t, n, r)) : (this.assertChangeAnnotations(this.changeAnnotations), o = this.changeAnnotations.manage(r), i = Mt.insert(t, n, o)), this.edits.push(i), o !== void 0) return o;
    }
    replace(t, n, r) {
      let i, o;
      if (r === void 0 ? i = Se.replace(t, n) : Te.is(r) ? (o = r, i = Mt.replace(t, n, r)) : (this.assertChangeAnnotations(this.changeAnnotations), o = this.changeAnnotations.manage(r), i = Mt.replace(t, n, o)), this.edits.push(i), o !== void 0) return o;
    }
    delete(t, n) {
      let r, i;
      if (n === void 0 ? r = Se.del(t) : Te.is(n) ? (i = n, r = Mt.del(t, n)) : (this.assertChangeAnnotations(this.changeAnnotations), i = this.changeAnnotations.manage(n), r = Mt.del(t, i)), this.edits.push(r), i !== void 0) return i;
    }
    add(t) {
      this.edits.push(t);
    }
    all() {
      return this.edits;
    }
    clear() {
      this.edits.splice(0, this.edits.length);
    }
    assertChangeAnnotations(t) {
      if (t === void 0) throw new Error("Text edit change is not configured to manage change annotations.");
    }
  };
  (function(e) {
    function t(n) {
      let r = n;
      return R.objectLiteral(r) && U.is(r.range) && Li.isSnippet(r.snippet) && (r.annotationId === void 0 || zt.is(r.annotationId) || Te.is(r.annotationId));
    }
    e.is = t;
  })(ha || (ha = {}));
  Di = class {
    constructor(t) {
      this._annotations = t === void 0 ? /* @__PURE__ */ Object.create(null) : t, this._counter = 0, this._size = 0;
    }
    all() {
      return this._annotations;
    }
    get size() {
      return this._size;
    }
    manage(t, n) {
      let r;
      if (Te.is(t) ? r = t : (r = this.nextId(), n = t), this._annotations[r] !== void 0) throw new Error(`Id ${r} is already in use.`);
      if (n === void 0) throw new Error(`No annotation provided for id ${r}`);
      return this._annotations[r] = n, this._size++, r;
    }
    nextId() {
      return this._counter++, this._counter.toString();
    }
  }, ma = class {
    constructor(t) {
      this._textEditChanges = /* @__PURE__ */ Object.create(null), t !== void 0 ? (this._workspaceEdit = t, t.documentChanges ? (this._changeAnnotations = new Di(t.changeAnnotations), t.changeAnnotations = this._changeAnnotations.all(), t.documentChanges.forEach((n) => {
        if (Cn.is(n)) {
          let r = new Nn(n.edits, this._changeAnnotations);
          this._textEditChanges[n.textDocument.uri] = r;
        }
      })) : t.changes && Object.keys(t.changes).forEach((n) => {
        let r = new Nn(t.changes[n]);
        this._textEditChanges[n] = r;
      })) : this._workspaceEdit = {};
    }
    get edit() {
      return this.initDocumentChanges(), this._changeAnnotations !== void 0 && (this._changeAnnotations.size === 0 ? this._workspaceEdit.changeAnnotations = void 0 : this._workspaceEdit.changeAnnotations = this._changeAnnotations.all()), this._workspaceEdit;
    }
    getTextEditChange(t) {
      if (xr.is(t)) {
        if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
        let n = { uri: t.uri, version: t.version }, r = this._textEditChanges[n.uri];
        if (!r) {
          let i = [], o = { textDocument: n, edits: i };
          this._workspaceEdit.documentChanges.push(o), r = new Nn(i, this._changeAnnotations), this._textEditChanges[n.uri] = r;
        }
        return r;
      } else {
        if (this.initChanges(), this._workspaceEdit.changes === void 0) throw new Error("Workspace edit is not configured for normal text edit changes.");
        let n = this._textEditChanges[t];
        if (!n) {
          let r = [];
          this._workspaceEdit.changes[t] = r, n = new Nn(r), this._textEditChanges[t] = n;
        }
        return n;
      }
    }
    initDocumentChanges() {
      this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._changeAnnotations = new Di(), this._workspaceEdit.documentChanges = [], this._workspaceEdit.changeAnnotations = this._changeAnnotations.all());
    }
    initChanges() {
      this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null));
    }
    createFile(t, n, r) {
      if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
      let i;
      zt.is(n) || Te.is(n) ? i = n : r = n;
      let o, s;
      if (i === void 0 ? o = jn.create(t, r) : (s = Te.is(i) ? i : this._changeAnnotations.manage(i), o = jn.create(t, r, s)), this._workspaceEdit.documentChanges.push(o), s !== void 0) return s;
    }
    renameFile(t, n, r, i) {
      if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
      let o;
      zt.is(r) || Te.is(r) ? o = r : i = r;
      let s, a;
      if (o === void 0 ? s = En.create(t, n, i) : (a = Te.is(o) ? o : this._changeAnnotations.manage(o), s = En.create(t, n, i, a)), this._workspaceEdit.documentChanges.push(s), a !== void 0) return a;
    }
    deleteFile(t, n, r) {
      if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
      let i;
      zt.is(n) || Te.is(n) ? i = n : r = n;
      let o, s;
      if (i === void 0 ? o = An.create(t, r) : (s = Te.is(i) ? i : this._changeAnnotations.manage(i), o = An.create(t, r, s)), this._workspaceEdit.documentChanges.push(o), s !== void 0) return s;
    }
  };
  (function(e) {
    function t(r) {
      return { uri: r };
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.defined(i) && R.string(i.uri);
    }
    e.is = n;
  })(ga || (ga = {}));
  (function(e) {
    function t(r, i) {
      return { uri: r, version: i };
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.defined(i) && R.string(i.uri) && R.integer(i.version);
    }
    e.is = n;
  })(Si || (Si = {}));
  (function(e) {
    function t(r, i) {
      return { uri: r, version: i };
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.defined(i) && R.string(i.uri) && (i.version === null || R.integer(i.version));
    }
    e.is = n;
  })(xr || (xr = {}));
  (function(e) {
    e.ABAP = "abap", e.WindowsBat = "bat", e.BibTeX = "bibtex", e.Clojure = "clojure", e.Coffeescript = "coffeescript", e.C = "c", e.CPP = "cpp", e.CSharp = "csharp", e.CSS = "css", e.D = "d", e.Delphi = "pascal", e.Diff = "diff", e.Dart = "dart", e.Dockerfile = "dockerfile", e.Elixir = "elixir", e.Erlang = "erlang", e.FSharp = "fsharp", e.GitCommit = "git-commit", e.GitRebase = "git-rebase", e.Go = "go", e.Groovy = "groovy", e.Handlebars = "handlebars", e.Haskell = "haskell", e.HTML = "html", e.Ini = "ini", e.Java = "java", e.JavaScript = "javascript", e.JavaScriptReact = "javascriptreact", e.JSON = "json", e.LaTeX = "latex", e.Less = "less", e.Lua = "lua", e.Makefile = "makefile", e.Markdown = "markdown", e.ObjectiveC = "objective-c", e.ObjectiveCPP = "objective-cpp", e.Pascal = "pascal", e.Perl = "perl", e.Perl6 = "perl6", e.PHP = "php", e.Plaintext = "plaintext", e.Powershell = "powershell", e.Pug = "jade", e.Python = "python", e.R = "r", e.Razor = "razor", e.Ruby = "ruby", e.Rust = "rust", e.SCSS = "scss", e.SASS = "sass", e.Scala = "scala", e.ShaderLab = "shaderlab", e.ShellScript = "shellscript", e.SQL = "sql", e.Swift = "swift", e.TypeScript = "typescript", e.TypeScriptReact = "typescriptreact", e.TeX = "tex", e.VisualBasic = "vb", e.XML = "xml", e.XSL = "xsl", e.YAML = "yaml";
  })(ya || (ya = {}));
  (function(e) {
    function t(r, i, o, s) {
      return { uri: r, languageId: i, version: o, text: s };
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.defined(i) && R.string(i.uri) && R.string(i.languageId) && R.integer(i.version) && R.string(i.text);
    }
    e.is = n;
  })(ba || (ba = {}));
  (function(e) {
    e.PlainText = "plaintext", e.Markdown = "markdown";
    function t(n) {
      let r = n;
      return r === e.PlainText || r === e.Markdown;
    }
    e.is = t;
  })(_t || (_t = {}));
  (function(e) {
    function t(n) {
      let r = n;
      return R.objectLiteral(n) && _t.is(r.kind) && R.string(r.value);
    }
    e.is = t;
  })(Ct || (Ct = {}));
  (function(e) {
    e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
  })(je || (je = {}));
  (function(e) {
    e.PlainText = 1, e.Snippet = 2;
  })(pe || (pe = {}));
  (function(e) {
    e.Deprecated = 1;
  })(Pi || (Pi = {}));
  (function(e) {
    function t(r, i, o) {
      return { newText: r, insert: i, replace: o };
    }
    e.create = t;
    function n(r) {
      let i = r;
      return i && R.string(i.newText) && U.is(i.insert) && U.is(i.replace);
    }
    e.is = n;
  })(va || (va = {}));
  (function(e) {
    e.asIs = 1, e.adjustIndentation = 2;
  })(_a || (_a = {}));
  (function(e) {
    e.Replace = 1, e.Merge = 2;
  })(wa || (wa = {}));
  (function(e) {
    function t(n) {
      let r = n;
      return r && (R.string(r.detail) || r.detail === void 0) && (R.string(r.description) || r.description === void 0);
    }
    e.is = t;
  })(Da || (Da = {}));
  (function(e) {
    function t(n) {
      return { label: n };
    }
    e.create = t;
  })(qn || (qn = {}));
  (function(e) {
    function t(n, r) {
      return { items: n || [], isIncomplete: !!r };
    }
    e.create = t;
  })(xi || (xi = {}));
  (function(e) {
    function t(r) {
      return r.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }
    e.fromPlainText = t;
    function n(r) {
      let i = r;
      return R.string(i) || R.objectLiteral(i) && R.string(i.language) && R.string(i.value);
    }
    e.is = n;
  })(In || (In = {}));
  (function(e) {
    function t(n) {
      let r = n;
      return !!r && R.objectLiteral(r) && (Ct.is(r.contents) || In.is(r.contents) || R.typedArray(r.contents, In.is)) && (n.range === void 0 || U.is(n.range));
    }
    e.is = t;
  })(Ti || (Ti = {}));
  (function(e) {
    function t(n, r) {
      return r ? { label: n, documentation: r } : { label: n };
    }
    e.create = t;
  })(Sa || (Sa = {}));
  (function(e) {
    function t(n, r, ...i) {
      let o = { label: n };
      return R.defined(r) && (o.documentation = r), R.defined(i) ? o.parameters = i : o.parameters = [], o;
    }
    e.create = t;
  })(Pa || (Pa = {}));
  (function(e) {
    e.Text = 1, e.Read = 2, e.Write = 3;
  })(ki || (ki = {}));
  (function(e) {
    function t(n, r) {
      let i = { range: n };
      return R.number(r) && (i.kind = r), i;
    }
    e.create = t;
  })(Oi || (Oi = {}));
  (function(e) {
    e.File = 1, e.Module = 2, e.Namespace = 3, e.Package = 4, e.Class = 5, e.Method = 6, e.Property = 7, e.Field = 8, e.Constructor = 9, e.Enum = 10, e.Interface = 11, e.Function = 12, e.Variable = 13, e.Constant = 14, e.String = 15, e.Number = 16, e.Boolean = 17, e.Array = 18, e.Object = 19, e.Key = 20, e.Null = 21, e.EnumMember = 22, e.Struct = 23, e.Event = 24, e.Operator = 25, e.TypeParameter = 26;
  })(Ke || (Ke = {}));
  (function(e) {
    e.Deprecated = 1;
  })(xa || (xa = {}));
  (function(e) {
    function t(n, r, i, o, s) {
      let a = { name: n, kind: r, location: { uri: o, range: i } };
      return s && (a.containerName = s), a;
    }
    e.create = t;
  })(Ri || (Ri = {}));
  (function(e) {
    function t(n, r, i, o) {
      return o !== void 0 ? { name: n, kind: r, location: { uri: i, range: o } } : { name: n, kind: r, location: { uri: i } };
    }
    e.create = t;
  })(Ta || (Ta = {}));
  (function(e) {
    function t(r, i, o, s, a, u) {
      let c = { name: r, detail: i, kind: o, range: s, selectionRange: a };
      return u !== void 0 && (c.children = u), c;
    }
    e.create = t;
    function n(r) {
      let i = r;
      return i && R.string(i.name) && R.number(i.kind) && U.is(i.range) && U.is(i.selectionRange) && (i.detail === void 0 || R.string(i.detail)) && (i.deprecated === void 0 || R.boolean(i.deprecated)) && (i.children === void 0 || Array.isArray(i.children)) && (i.tags === void 0 || Array.isArray(i.tags));
    }
    e.is = n;
  })(Mi || (Mi = {}));
  (function(e) {
    e.Empty = "", e.QuickFix = "quickfix", e.Refactor = "refactor", e.RefactorExtract = "refactor.extract", e.RefactorInline = "refactor.inline", e.RefactorMove = "refactor.move", e.RefactorRewrite = "refactor.rewrite", e.Source = "source", e.SourceOrganizeImports = "source.organizeImports", e.SourceFixAll = "source.fixAll", e.Notebook = "notebook";
  })(Ni || (Ni = {}));
  (function(e) {
    e.Invoked = 1, e.Automatic = 2;
  })(Tr || (Tr = {}));
  (function(e) {
    function t(r, i, o) {
      let s = { diagnostics: r };
      return i != null && (s.only = i), o != null && (s.triggerKind = o), s;
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.defined(i) && R.typedArray(i.diagnostics, Ye.is) && (i.only === void 0 || R.typedArray(i.only, R.string)) && (i.triggerKind === void 0 || i.triggerKind === Tr.Invoked || i.triggerKind === Tr.Automatic);
    }
    e.is = n;
  })(Ci || (Ci = {}));
  (function(e) {
    e.LLMGenerated = 1;
    function t(n) {
      return R.defined(n) && n === e.LLMGenerated;
    }
    e.is = t;
  })(ji || (ji = {}));
  (function(e) {
    function t(r, i, o) {
      let s = { title: r }, a = true;
      return typeof i == "string" ? (a = false, s.kind = i) : Gt.is(i) ? s.command = i : s.edit = i, a && o !== void 0 && (s.kind = o), s;
    }
    e.create = t;
    function n(r) {
      let i = r;
      return i && R.string(i.title) && (i.diagnostics === void 0 || R.typedArray(i.diagnostics, Ye.is)) && (i.kind === void 0 || R.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || Gt.is(i.command)) && (i.isPreferred === void 0 || R.boolean(i.isPreferred)) && (i.edit === void 0 || Pr.is(i.edit)) && (i.tags === void 0 || R.typedArray(i.tags, ji.is));
    }
    e.is = n;
  })(Ei || (Ei = {}));
  (function(e) {
    function t(r, i) {
      let o = { range: r };
      return R.defined(i) && (o.data = i), o;
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.defined(i) && U.is(i.range) && (R.undefined(i.command) || Gt.is(i.command));
    }
    e.is = n;
  })(ka || (ka = {}));
  (function(e) {
    function t(r, i) {
      return { tabSize: r, insertSpaces: i };
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.defined(i) && R.uinteger(i.tabSize) && R.boolean(i.insertSpaces);
    }
    e.is = n;
  })(Oa || (Oa = {}));
  (function(e) {
    function t(r, i, o) {
      return { range: r, target: i, data: o };
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.defined(i) && U.is(i.range) && (R.undefined(i.target) || R.string(i.target));
    }
    e.is = n;
  })(Ai || (Ai = {}));
  (function(e) {
    function t(r, i) {
      return { range: r, parent: i };
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.objectLiteral(i) && U.is(i.range) && (i.parent === void 0 || e.is(i.parent));
    }
    e.is = n;
  })(dn || (dn = {}));
  (function(e) {
    e.namespace = "namespace", e.type = "type", e.class = "class", e.enum = "enum", e.interface = "interface", e.struct = "struct", e.typeParameter = "typeParameter", e.parameter = "parameter", e.variable = "variable", e.property = "property", e.enumMember = "enumMember", e.event = "event", e.function = "function", e.method = "method", e.macro = "macro", e.keyword = "keyword", e.modifier = "modifier", e.comment = "comment", e.string = "string", e.number = "number", e.regexp = "regexp", e.operator = "operator", e.decorator = "decorator", e.label = "label";
  })(Ra || (Ra = {}));
  (function(e) {
    e.declaration = "declaration", e.definition = "definition", e.readonly = "readonly", e.static = "static", e.deprecated = "deprecated", e.abstract = "abstract", e.async = "async", e.modification = "modification", e.documentation = "documentation", e.defaultLibrary = "defaultLibrary";
  })(Ma || (Ma = {}));
  (function(e) {
    function t(n) {
      let r = n;
      return R.objectLiteral(r) && (r.resultId === void 0 || typeof r.resultId == "string") && Array.isArray(r.data) && (r.data.length === 0 || typeof r.data[0] == "number");
    }
    e.is = t;
  })(Na || (Na = {}));
  (function(e) {
    function t(r, i) {
      return { range: r, text: i };
    }
    e.create = t;
    function n(r) {
      let i = r;
      return i != null && U.is(i.range) && R.string(i.text);
    }
    e.is = n;
  })(Ca || (Ca = {}));
  (function(e) {
    function t(r, i, o) {
      return { range: r, variableName: i, caseSensitiveLookup: o };
    }
    e.create = t;
    function n(r) {
      let i = r;
      return i != null && U.is(i.range) && R.boolean(i.caseSensitiveLookup) && (R.string(i.variableName) || i.variableName === void 0);
    }
    e.is = n;
  })(ja || (ja = {}));
  (function(e) {
    function t(r, i) {
      return { range: r, expression: i };
    }
    e.create = t;
    function n(r) {
      let i = r;
      return i != null && U.is(i.range) && (R.string(i.expression) || i.expression === void 0);
    }
    e.is = n;
  })(Ea || (Ea = {}));
  (function(e) {
    function t(r, i) {
      return { frameId: r, stoppedLocation: i };
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.defined(i) && U.is(r.stoppedLocation);
    }
    e.is = n;
  })(Aa || (Aa = {}));
  (function(e) {
    e.Type = 1, e.Parameter = 2;
    function t(n) {
      return n === 1 || n === 2;
    }
    e.is = t;
  })(qi || (qi = {}));
  (function(e) {
    function t(r) {
      return { value: r };
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.objectLiteral(i) && (i.tooltip === void 0 || R.string(i.tooltip) || Ct.is(i.tooltip)) && (i.location === void 0 || Nt.is(i.location)) && (i.command === void 0 || Gt.is(i.command));
    }
    e.is = n;
  })(Ii || (Ii = {}));
  (function(e) {
    function t(r, i, o) {
      let s = { position: r, label: i };
      return o !== void 0 && (s.kind = o), s;
    }
    e.create = t;
    function n(r) {
      let i = r;
      return R.objectLiteral(i) && ee.is(i.position) && (R.string(i.label) || R.typedArray(i.label, Ii.is)) && (i.kind === void 0 || qi.is(i.kind)) && i.textEdits === void 0 || R.typedArray(i.textEdits, Se.is) && (i.tooltip === void 0 || R.string(i.tooltip) || Ct.is(i.tooltip)) && (i.paddingLeft === void 0 || R.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || R.boolean(i.paddingRight));
    }
    e.is = n;
  })(qa || (qa = {}));
  (function(e) {
    function t(r) {
      return { kind: "snippet", value: r };
    }
    e.createSnippet = t;
    function n(r) {
      let i = r;
      return R.objectLiteral(i) && i.kind === "snippet" && R.string(i.value);
    }
    e.isSnippet = n;
  })(Li || (Li = {}));
  (function(e) {
    function t(n, r, i, o) {
      return { insertText: n, filterText: r, range: i, command: o };
    }
    e.create = t;
  })(Ia || (Ia = {}));
  (function(e) {
    function t(n) {
      return { items: n };
    }
    e.create = t;
  })(La || (La = {}));
  (function(e) {
    e.Invoked = 1, e.Automatic = 2;
  })(Fa || (Fa = {}));
  (function(e) {
    function t(n, r) {
      return { range: n, text: r };
    }
    e.create = t;
  })($a || ($a = {}));
  (function(e) {
    function t(n, r) {
      return { triggerKind: n, selectedCompletionInfo: r };
    }
    e.create = t;
  })(Va || (Va = {}));
  (function(e) {
    function t(n) {
      let r = n;
      return R.objectLiteral(r) && yi.is(r.uri) && R.string(r.name);
    }
    e.is = t;
  })(Wa || (Wa = {}));
  fy = [`
`, `\r
`, "\r"];
  (function(e) {
    function t(o, s, a, u) {
      return new Ha(o, s, a, u);
    }
    e.create = t;
    function n(o) {
      let s = o;
      return !!(R.defined(s) && R.string(s.uri) && (R.undefined(s.languageId) || R.string(s.languageId)) && R.uinteger(s.lineCount) && R.func(s.getText) && R.func(s.positionAt) && R.func(s.offsetAt));
    }
    e.is = n;
    function r(o, s) {
      let a = o.getText(), u = i(s, (f, v) => {
        let d = f.range.start.line - v.range.start.line;
        return d === 0 ? f.range.start.character - v.range.start.character : d;
      }), c = a.length;
      for (let f = u.length - 1; f >= 0; f--) {
        let v = u[f], d = o.offsetAt(v.range.start), g = o.offsetAt(v.range.end);
        if (g <= c) a = a.substring(0, d) + v.newText + a.substring(g, a.length);
        else throw new Error("Overlapping edit");
        c = d;
      }
      return a;
    }
    e.applyEdits = r;
    function i(o, s) {
      if (o.length <= 1) return o;
      let a = o.length / 2 | 0, u = o.slice(0, a), c = o.slice(a);
      i(u, s), i(c, s);
      let f = 0, v = 0, d = 0;
      for (; f < u.length && v < c.length; ) s(u[f], c[v]) <= 0 ? o[d++] = u[f++] : o[d++] = c[v++];
      for (; f < u.length; ) o[d++] = u[f++];
      for (; v < c.length; ) o[d++] = c[v++];
      return o;
    }
  })(Ua || (Ua = {}));
  Ha = class {
    constructor(t, n, r, i) {
      this._uri = t, this._languageId = n, this._version = r, this._content = i, this._lineOffsets = void 0;
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
    getText(t) {
      if (t) {
        let n = this.offsetAt(t.start), r = this.offsetAt(t.end);
        return this._content.substring(n, r);
      }
      return this._content;
    }
    update(t, n) {
      this._content = t.text, this._version = n, this._lineOffsets = void 0;
    }
    getLineOffsets() {
      if (this._lineOffsets === void 0) {
        let t = [], n = this._content, r = true;
        for (let i = 0; i < n.length; i++) {
          r && (t.push(i), r = false);
          let o = n.charAt(i);
          r = o === "\r" || o === `
`, o === "\r" && i + 1 < n.length && n.charAt(i + 1) === `
` && i++;
        }
        r && n.length > 0 && t.push(n.length), this._lineOffsets = t;
      }
      return this._lineOffsets;
    }
    positionAt(t) {
      t = Math.max(Math.min(t, this._content.length), 0);
      let n = this.getLineOffsets(), r = 0, i = n.length;
      if (i === 0) return ee.create(0, t);
      for (; r < i; ) {
        let s = Math.floor((r + i) / 2);
        n[s] > t ? i = s : r = s + 1;
      }
      let o = r - 1;
      return ee.create(o, t - n[o]);
    }
    offsetAt(t) {
      let n = this.getLineOffsets();
      if (t.line >= n.length) return this._content.length;
      if (t.line < 0) return 0;
      let r = n[t.line], i = t.line + 1 < n.length ? n[t.line + 1] : this._content.length;
      return Math.max(Math.min(r + t.character, i), r);
    }
    get lineCount() {
      return this.getLineOffsets().length;
    }
  };
  (function(e) {
    let t = Object.prototype.toString;
    function n(g) {
      return typeof g < "u";
    }
    e.defined = n;
    function r(g) {
      return typeof g > "u";
    }
    e.undefined = r;
    function i(g) {
      return g === true || g === false;
    }
    e.boolean = i;
    function o(g) {
      return t.call(g) === "[object String]";
    }
    e.string = o;
    function s(g) {
      return t.call(g) === "[object Number]";
    }
    e.number = s;
    function a(g, y, w) {
      return t.call(g) === "[object Number]" && y <= g && g <= w;
    }
    e.numberRange = a;
    function u(g) {
      return t.call(g) === "[object Number]" && -2147483648 <= g && g <= 2147483647;
    }
    e.integer = u;
    function c(g) {
      return t.call(g) === "[object Number]" && 0 <= g && g <= 2147483647;
    }
    e.uinteger = c;
    function f(g) {
      return t.call(g) === "[object Function]";
    }
    e.func = f;
    function v(g) {
      return g !== null && typeof g == "object";
    }
    e.objectLiteral = v;
    function d(g, y) {
      return Array.isArray(g) && g.every(y);
    }
    e.typedArray = d;
  })(R || (R = {}));
});
var ce = F(($e) => {
  "use strict";
  Object.defineProperty($e, "__esModule", { value: true });
  $e.CM = $e.ProtocolNotificationType = $e.ProtocolNotificationType0 = $e.ProtocolRequestType = $e.ProtocolRequestType0 = $e.RegistrationType = $e.MessageDirection = void 0;
  var Fn = Rt(), pl;
  (function(e) {
    e.clientToServer = "clientToServer", e.serverToClient = "serverToClient", e.both = "both";
  })(pl || ($e.MessageDirection = pl = {}));
  var Ba = class {
    ____;
    method;
    constructor(t) {
      this.method = t;
    }
  };
  $e.RegistrationType = Ba;
  var za = class extends Fn.RequestType0 {
    __;
    ___;
    ____;
    _pr;
    constructor(t) {
      super(t);
    }
  };
  $e.ProtocolRequestType0 = za;
  var Ja = class extends Fn.RequestType {
    __;
    ___;
    ____;
    _pr;
    constructor(t) {
      super(t, Fn.ParameterStructures.byName);
    }
  };
  $e.ProtocolRequestType = Ja;
  var Ga = class extends Fn.NotificationType0 {
    ___;
    ____;
    constructor(t) {
      super(t);
    }
  };
  $e.ProtocolNotificationType0 = Ga;
  var Xa = class extends Fn.NotificationType {
    ___;
    ____;
    constructor(t) {
      super(t, Fn.ParameterStructures.byName);
    }
  };
  $e.ProtocolNotificationType = Xa;
  var hl;
  (function(e) {
    function t(n, r) {
      return { client: n, server: r };
    }
    e.create = t;
  })(hl || ($e.CM = hl = {}));
});
var $i = F((pt) => {
  "use strict";
  Object.defineProperty(pt, "__esModule", { value: true });
  pt.boolean = dy;
  pt.string = ml;
  pt.number = py;
  pt.error = hy;
  pt.func = my;
  pt.array = gl;
  pt.stringArray = gy;
  pt.typedArray = yy;
  pt.objectLiteral = by;
  function dy(e) {
    return e === true || e === false;
  }
  function ml(e) {
    return typeof e == "string" || e instanceof String;
  }
  function py(e) {
    return typeof e == "number" || e instanceof Number;
  }
  function hy(e) {
    return e instanceof Error;
  }
  function my(e) {
    return typeof e == "function";
  }
  function gl(e) {
    return Array.isArray(e);
  }
  function gy(e) {
    return gl(e) && e.every((t) => ml(t));
  }
  function yy(e, t) {
    return Array.isArray(e) && e.every(t);
  }
  function by(e) {
    return e !== null && typeof e == "object";
  }
});
var bl = F((Vi) => {
  "use strict";
  Object.defineProperty(Vi, "__esModule", { value: true });
  Vi.ImplementationRequest = void 0;
  var Za = ce(), yl;
  (function(e) {
    e.method = "textDocument/implementation", e.messageDirection = Za.MessageDirection.clientToServer, e.type = new Za.ProtocolRequestType(e.method), e.capabilities = Za.CM.create("textDocument.implementation", "implementationProvider");
  })(yl || (Vi.ImplementationRequest = yl = {}));
});
var _l = F((Wi) => {
  "use strict";
  Object.defineProperty(Wi, "__esModule", { value: true });
  Wi.TypeDefinitionRequest = void 0;
  var Qa = ce(), vl;
  (function(e) {
    e.method = "textDocument/typeDefinition", e.messageDirection = Qa.MessageDirection.clientToServer, e.type = new Qa.ProtocolRequestType(e.method), e.capabilities = Qa.CM.create("textDocument.typeDefinition", "typeDefinitionProvider");
  })(vl || (Wi.TypeDefinitionRequest = vl = {}));
});
var Sl = F((Vn) => {
  "use strict";
  Object.defineProperty(Vn, "__esModule", { value: true });
  Vn.DidChangeWorkspaceFoldersNotification = Vn.WorkspaceFoldersRequest = void 0;
  var $n = ce(), wl;
  (function(e) {
    e.method = "workspace/workspaceFolders", e.messageDirection = $n.MessageDirection.serverToClient, e.type = new $n.ProtocolRequestType0(e.method), e.capabilities = $n.CM.create("workspace.workspaceFolders", "workspace.workspaceFolders");
  })(wl || (Vn.WorkspaceFoldersRequest = wl = {}));
  var Dl;
  (function(e) {
    e.method = "workspace/didChangeWorkspaceFolders", e.messageDirection = $n.MessageDirection.clientToServer, e.type = new $n.ProtocolNotificationType(e.method), e.capabilities = $n.CM.create(void 0, "workspace.workspaceFolders.changeNotifications");
  })(Dl || (Vn.DidChangeWorkspaceFoldersNotification = Dl = {}));
});
var xl = F((Ui) => {
  "use strict";
  Object.defineProperty(Ui, "__esModule", { value: true });
  Ui.ConfigurationRequest = void 0;
  var Ya = ce(), Pl;
  (function(e) {
    e.method = "workspace/configuration", e.messageDirection = Ya.MessageDirection.serverToClient, e.type = new Ya.ProtocolRequestType(e.method), e.capabilities = Ya.CM.create("workspace.configuration", void 0);
  })(Pl || (Ui.ConfigurationRequest = Pl = {}));
});
var Ol = F((Un) => {
  "use strict";
  Object.defineProperty(Un, "__esModule", { value: true });
  Un.ColorPresentationRequest = Un.DocumentColorRequest = void 0;
  var Wn = ce(), Tl;
  (function(e) {
    e.method = "textDocument/documentColor", e.messageDirection = Wn.MessageDirection.clientToServer, e.type = new Wn.ProtocolRequestType(e.method), e.capabilities = Wn.CM.create("textDocument.colorProvider", "colorProvider");
  })(Tl || (Un.DocumentColorRequest = Tl = {}));
  var kl;
  (function(e) {
    e.method = "textDocument/colorPresentation", e.messageDirection = Wn.MessageDirection.clientToServer, e.type = new Wn.ProtocolRequestType(e.method), e.capabilities = Wn.CM.create("textDocument.colorProvider", "colorProvider");
  })(kl || (Un.ColorPresentationRequest = kl = {}));
});
var Nl = F((Bn) => {
  "use strict";
  Object.defineProperty(Bn, "__esModule", { value: true });
  Bn.FoldingRangeRefreshRequest = Bn.FoldingRangeRequest = void 0;
  var Hn = ce(), Rl;
  (function(e) {
    e.method = "textDocument/foldingRange", e.messageDirection = Hn.MessageDirection.clientToServer, e.type = new Hn.ProtocolRequestType(e.method), e.capabilities = Hn.CM.create("textDocument.foldingRange", "foldingRangeProvider");
  })(Rl || (Bn.FoldingRangeRequest = Rl = {}));
  var Ml;
  (function(e) {
    e.method = "workspace/foldingRange/refresh", e.messageDirection = Hn.MessageDirection.serverToClient, e.type = new Hn.ProtocolRequestType0(e.method), e.capabilities = Hn.CM.create("workspace.foldingRange.refreshSupport", void 0);
  })(Ml || (Bn.FoldingRangeRefreshRequest = Ml = {}));
});
var jl = F((Hi) => {
  "use strict";
  Object.defineProperty(Hi, "__esModule", { value: true });
  Hi.DeclarationRequest = void 0;
  var Ka = ce(), Cl;
  (function(e) {
    e.method = "textDocument/declaration", e.messageDirection = Ka.MessageDirection.clientToServer, e.type = new Ka.ProtocolRequestType(e.method), e.capabilities = Ka.CM.create("textDocument.declaration", "declarationProvider");
  })(Cl || (Hi.DeclarationRequest = Cl = {}));
});
var Al = F((Bi) => {
  "use strict";
  Object.defineProperty(Bi, "__esModule", { value: true });
  Bi.SelectionRangeRequest = void 0;
  var ec = ce(), El;
  (function(e) {
    e.method = "textDocument/selectionRange", e.messageDirection = ec.MessageDirection.clientToServer, e.type = new ec.ProtocolRequestType(e.method), e.capabilities = ec.CM.create("textDocument.selectionRange", "selectionRangeProvider");
  })(El || (Bi.SelectionRangeRequest = El = {}));
});
var Fl = F((Xt) => {
  "use strict";
  Object.defineProperty(Xt, "__esModule", { value: true });
  Xt.WorkDoneProgressCancelNotification = Xt.WorkDoneProgressCreateRequest = Xt.WorkDoneProgress = void 0;
  var vy = Rt(), kr = ce(), ql;
  (function(e) {
    e.type = new vy.ProgressType();
    function t(n) {
      return n === e.type;
    }
    e.is = t;
  })(ql || (Xt.WorkDoneProgress = ql = {}));
  var Il;
  (function(e) {
    e.method = "window/workDoneProgress/create", e.messageDirection = kr.MessageDirection.serverToClient, e.type = new kr.ProtocolRequestType(e.method), e.capabilities = kr.CM.create("window.workDoneProgress", void 0);
  })(Il || (Xt.WorkDoneProgressCreateRequest = Il = {}));
  var Ll;
  (function(e) {
    e.method = "window/workDoneProgress/cancel", e.messageDirection = kr.MessageDirection.clientToServer, e.type = new kr.ProtocolNotificationType(e.method);
  })(Ll || (Xt.WorkDoneProgressCancelNotification = Ll = {}));
});
var Ul = F((Zt) => {
  "use strict";
  Object.defineProperty(Zt, "__esModule", { value: true });
  Zt.CallHierarchyOutgoingCallsRequest = Zt.CallHierarchyIncomingCallsRequest = Zt.CallHierarchyPrepareRequest = void 0;
  var jt = ce(), $l;
  (function(e) {
    e.method = "textDocument/prepareCallHierarchy", e.messageDirection = jt.MessageDirection.clientToServer, e.type = new jt.ProtocolRequestType(e.method), e.capabilities = jt.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
  })($l || (Zt.CallHierarchyPrepareRequest = $l = {}));
  var Vl;
  (function(e) {
    e.method = "callHierarchy/incomingCalls", e.messageDirection = jt.MessageDirection.clientToServer, e.type = new jt.ProtocolRequestType(e.method), e.capabilities = jt.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
  })(Vl || (Zt.CallHierarchyIncomingCallsRequest = Vl = {}));
  var Wl;
  (function(e) {
    e.method = "callHierarchy/outgoingCalls", e.messageDirection = jt.MessageDirection.clientToServer, e.type = new jt.ProtocolRequestType(e.method), e.capabilities = jt.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
  })(Wl || (Zt.CallHierarchyOutgoingCallsRequest = Wl = {}));
});
var Xl = F((Ge) => {
  "use strict";
  Object.defineProperty(Ge, "__esModule", { value: true });
  Ge.SemanticTokensRefreshRequest = Ge.SemanticTokensRangeRequest = Ge.SemanticTokensDeltaRequest = Ge.SemanticTokensRequest = Ge.SemanticTokensRegistrationType = Ge.TokenFormat = void 0;
  var et = ce(), Hl;
  (function(e) {
    e.Relative = "relative";
  })(Hl || (Ge.TokenFormat = Hl = {}));
  var Or;
  (function(e) {
    e.method = "textDocument/semanticTokens", e.type = new et.RegistrationType(e.method);
  })(Or || (Ge.SemanticTokensRegistrationType = Or = {}));
  var Bl;
  (function(e) {
    e.method = "textDocument/semanticTokens/full", e.messageDirection = et.MessageDirection.clientToServer, e.type = new et.ProtocolRequestType(e.method), e.registrationMethod = Or.method, e.capabilities = et.CM.create("textDocument.semanticTokens", "semanticTokensProvider");
  })(Bl || (Ge.SemanticTokensRequest = Bl = {}));
  var zl;
  (function(e) {
    e.method = "textDocument/semanticTokens/full/delta", e.messageDirection = et.MessageDirection.clientToServer, e.type = new et.ProtocolRequestType(e.method), e.registrationMethod = Or.method, e.capabilities = et.CM.create("textDocument.semanticTokens.requests.full.delta", "semanticTokensProvider.full.delta");
  })(zl || (Ge.SemanticTokensDeltaRequest = zl = {}));
  var Jl;
  (function(e) {
    e.method = "textDocument/semanticTokens/range", e.messageDirection = et.MessageDirection.clientToServer, e.type = new et.ProtocolRequestType(e.method), e.registrationMethod = Or.method, e.capabilities = et.CM.create("textDocument.semanticTokens.requests.range", "semanticTokensProvider.range");
  })(Jl || (Ge.SemanticTokensRangeRequest = Jl = {}));
  var Gl;
  (function(e) {
    e.method = "workspace/semanticTokens/refresh", e.messageDirection = et.MessageDirection.serverToClient, e.type = new et.ProtocolRequestType0(e.method), e.capabilities = et.CM.create("workspace.semanticTokens.refreshSupport", void 0);
  })(Gl || (Ge.SemanticTokensRefreshRequest = Gl = {}));
});
var Ql = F((zi) => {
  "use strict";
  Object.defineProperty(zi, "__esModule", { value: true });
  zi.ShowDocumentRequest = void 0;
  var tc = ce(), Zl;
  (function(e) {
    e.method = "window/showDocument", e.messageDirection = tc.MessageDirection.serverToClient, e.type = new tc.ProtocolRequestType(e.method), e.capabilities = tc.CM.create("window.showDocument.support", void 0);
  })(Zl || (zi.ShowDocumentRequest = Zl = {}));
});
var Kl = F((Ji) => {
  "use strict";
  Object.defineProperty(Ji, "__esModule", { value: true });
  Ji.LinkedEditingRangeRequest = void 0;
  var nc = ce(), Yl;
  (function(e) {
    e.method = "textDocument/linkedEditingRange", e.messageDirection = nc.MessageDirection.clientToServer, e.type = new nc.ProtocolRequestType(e.method), e.capabilities = nc.CM.create("textDocument.linkedEditingRange", "linkedEditingRangeProvider");
  })(Yl || (Ji.LinkedEditingRangeRequest = Yl = {}));
});
var cf = F((Ve) => {
  "use strict";
  Object.defineProperty(Ve, "__esModule", { value: true });
  Ve.WillDeleteFilesRequest = Ve.DidDeleteFilesNotification = Ve.DidRenameFilesNotification = Ve.WillRenameFilesRequest = Ve.DidCreateFilesNotification = Ve.WillCreateFilesRequest = Ve.FileOperationPatternKind = void 0;
  var ke = ce(), ef;
  (function(e) {
    e.file = "file", e.folder = "folder";
  })(ef || (Ve.FileOperationPatternKind = ef = {}));
  var tf;
  (function(e) {
    e.method = "workspace/willCreateFiles", e.messageDirection = ke.MessageDirection.clientToServer, e.type = new ke.ProtocolRequestType(e.method), e.capabilities = ke.CM.create("workspace.fileOperations.willCreate", "workspace.fileOperations.willCreate");
  })(tf || (Ve.WillCreateFilesRequest = tf = {}));
  var nf;
  (function(e) {
    e.method = "workspace/didCreateFiles", e.messageDirection = ke.MessageDirection.clientToServer, e.type = new ke.ProtocolNotificationType(e.method), e.capabilities = ke.CM.create("workspace.fileOperations.didCreate", "workspace.fileOperations.didCreate");
  })(nf || (Ve.DidCreateFilesNotification = nf = {}));
  var rf;
  (function(e) {
    e.method = "workspace/willRenameFiles", e.messageDirection = ke.MessageDirection.clientToServer, e.type = new ke.ProtocolRequestType(e.method), e.capabilities = ke.CM.create("workspace.fileOperations.willRename", "workspace.fileOperations.willRename");
  })(rf || (Ve.WillRenameFilesRequest = rf = {}));
  var of;
  (function(e) {
    e.method = "workspace/didRenameFiles", e.messageDirection = ke.MessageDirection.clientToServer, e.type = new ke.ProtocolNotificationType(e.method), e.capabilities = ke.CM.create("workspace.fileOperations.didRename", "workspace.fileOperations.didRename");
  })(of || (Ve.DidRenameFilesNotification = of = {}));
  var sf;
  (function(e) {
    e.method = "workspace/didDeleteFiles", e.messageDirection = ke.MessageDirection.clientToServer, e.type = new ke.ProtocolNotificationType(e.method), e.capabilities = ke.CM.create("workspace.fileOperations.didDelete", "workspace.fileOperations.didDelete");
  })(sf || (Ve.DidDeleteFilesNotification = sf = {}));
  var af;
  (function(e) {
    e.method = "workspace/willDeleteFiles", e.messageDirection = ke.MessageDirection.clientToServer, e.type = new ke.ProtocolRequestType(e.method), e.capabilities = ke.CM.create("workspace.fileOperations.willDelete", "workspace.fileOperations.willDelete");
  })(af || (Ve.WillDeleteFilesRequest = af = {}));
});
var df = F((Qt) => {
  "use strict";
  Object.defineProperty(Qt, "__esModule", { value: true });
  Qt.MonikerRequest = Qt.MonikerKind = Qt.UniquenessLevel = void 0;
  var rc = ce(), uf;
  (function(e) {
    e.document = "document", e.project = "project", e.group = "group", e.scheme = "scheme", e.global = "global";
  })(uf || (Qt.UniquenessLevel = uf = {}));
  var lf;
  (function(e) {
    e.$import = "import", e.$export = "export", e.local = "local";
  })(lf || (Qt.MonikerKind = lf = {}));
  var ff;
  (function(e) {
    e.method = "textDocument/moniker", e.messageDirection = rc.MessageDirection.clientToServer, e.type = new rc.ProtocolRequestType(e.method), e.capabilities = rc.CM.create("textDocument.moniker", "monikerProvider");
  })(ff || (Qt.MonikerRequest = ff = {}));
});
var gf = F((Yt) => {
  "use strict";
  Object.defineProperty(Yt, "__esModule", { value: true });
  Yt.TypeHierarchySubtypesRequest = Yt.TypeHierarchySupertypesRequest = Yt.TypeHierarchyPrepareRequest = void 0;
  var pn = ce(), pf;
  (function(e) {
    e.method = "textDocument/prepareTypeHierarchy", e.messageDirection = pn.MessageDirection.clientToServer, e.type = new pn.ProtocolRequestType(e.method), e.capabilities = pn.CM.create("textDocument.typeHierarchy", "typeHierarchyProvider");
  })(pf || (Yt.TypeHierarchyPrepareRequest = pf = {}));
  var hf;
  (function(e) {
    e.method = "typeHierarchy/supertypes", e.messageDirection = pn.MessageDirection.clientToServer, e.type = new pn.ProtocolRequestType(e.method);
  })(hf || (Yt.TypeHierarchySupertypesRequest = hf = {}));
  var mf;
  (function(e) {
    e.method = "typeHierarchy/subtypes", e.messageDirection = pn.MessageDirection.clientToServer, e.type = new pn.ProtocolRequestType(e.method);
  })(mf || (Yt.TypeHierarchySubtypesRequest = mf = {}));
});
var vf = F((Jn) => {
  "use strict";
  Object.defineProperty(Jn, "__esModule", { value: true });
  Jn.InlineValueRefreshRequest = Jn.InlineValueRequest = void 0;
  var zn = ce(), yf;
  (function(e) {
    e.method = "textDocument/inlineValue", e.messageDirection = zn.MessageDirection.clientToServer, e.type = new zn.ProtocolRequestType(e.method), e.capabilities = zn.CM.create("textDocument.inlineValue", "inlineValueProvider");
  })(yf || (Jn.InlineValueRequest = yf = {}));
  var bf;
  (function(e) {
    e.method = "workspace/inlineValue/refresh", e.messageDirection = zn.MessageDirection.serverToClient, e.type = new zn.ProtocolRequestType0(e.method), e.capabilities = zn.CM.create("workspace.inlineValue.refreshSupport", void 0);
  })(bf || (Jn.InlineValueRefreshRequest = bf = {}));
});
var Sf = F((Kt) => {
  "use strict";
  Object.defineProperty(Kt, "__esModule", { value: true });
  Kt.InlayHintRefreshRequest = Kt.InlayHintResolveRequest = Kt.InlayHintRequest = void 0;
  var Et = ce(), _f;
  (function(e) {
    e.method = "textDocument/inlayHint", e.messageDirection = Et.MessageDirection.clientToServer, e.type = new Et.ProtocolRequestType(e.method), e.capabilities = Et.CM.create("textDocument.inlayHint", "inlayHintProvider");
  })(_f || (Kt.InlayHintRequest = _f = {}));
  var wf;
  (function(e) {
    e.method = "inlayHint/resolve", e.messageDirection = Et.MessageDirection.clientToServer, e.type = new Et.ProtocolRequestType(e.method), e.capabilities = Et.CM.create("textDocument.inlayHint.resolveSupport", "inlayHintProvider.resolveProvider");
  })(wf || (Kt.InlayHintResolveRequest = wf = {}));
  var Df;
  (function(e) {
    e.method = "workspace/inlayHint/refresh", e.messageDirection = Et.MessageDirection.serverToClient, e.type = new Et.ProtocolRequestType0(e.method), e.capabilities = Et.CM.create("workspace.inlayHint.refreshSupport", void 0);
  })(Df || (Kt.InlayHintRefreshRequest = Df = {}));
});
var Mf = F((Oe) => {
  "use strict";
  var _y = Oe && Oe.__createBinding || (Object.create ? (function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[n];
    } }), Object.defineProperty(e, r, i);
  }) : (function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  })), wy = Oe && Oe.__setModuleDefault || (Object.create ? (function(e, t) {
    Object.defineProperty(e, "default", { enumerable: true, value: t });
  }) : function(e, t) {
    e.default = t;
  }), Dy = Oe && Oe.__importStar || /* @__PURE__ */ (function() {
    var e = function(t) {
      return e = Object.getOwnPropertyNames || function(n) {
        var r = [];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[r.length] = i);
        return r;
      }, e(t);
    };
    return function(t) {
      if (t && t.__esModule) return t;
      var n = {};
      if (t != null) for (var r = e(t), i = 0; i < r.length; i++) r[i] !== "default" && _y(n, t, r[i]);
      return wy(n, t), n;
    };
  })();
  Object.defineProperty(Oe, "__esModule", { value: true });
  Oe.DiagnosticRefreshRequest = Oe.WorkspaceDiagnosticRequest = Oe.DocumentDiagnosticRequest = Oe.DocumentDiagnosticReportKind = Oe.DiagnosticServerCancellationData = void 0;
  var Rf = Rt(), Sy = Dy($i()), At = ce(), Pf;
  (function(e) {
    function t(n) {
      let r = n;
      return r && Sy.boolean(r.retriggerRequest);
    }
    e.is = t;
  })(Pf || (Oe.DiagnosticServerCancellationData = Pf = {}));
  var xf;
  (function(e) {
    e.Full = "full", e.Unchanged = "unchanged";
  })(xf || (Oe.DocumentDiagnosticReportKind = xf = {}));
  var Tf;
  (function(e) {
    e.method = "textDocument/diagnostic", e.messageDirection = At.MessageDirection.clientToServer, e.type = new At.ProtocolRequestType(e.method), e.partialResult = new Rf.ProgressType(), e.capabilities = At.CM.create("textDocument.diagnostic", "diagnosticProvider");
  })(Tf || (Oe.DocumentDiagnosticRequest = Tf = {}));
  var kf;
  (function(e) {
    e.method = "workspace/diagnostic", e.messageDirection = At.MessageDirection.clientToServer, e.type = new At.ProtocolRequestType(e.method), e.partialResult = new Rf.ProgressType(), e.capabilities = At.CM.create("workspace.diagnostics", "diagnosticProvider.workspaceDiagnostics");
  })(kf || (Oe.WorkspaceDiagnosticRequest = kf = {}));
  var Of;
  (function(e) {
    e.method = "workspace/diagnostic/refresh", e.messageDirection = At.MessageDirection.serverToClient, e.type = new At.ProtocolRequestType0(e.method), e.capabilities = At.CM.create("workspace.diagnostics.refreshSupport", void 0);
  })(Of || (Oe.DiagnosticRefreshRequest = Of = {}));
});
var If = F((re) => {
  "use strict";
  var Py = re && re.__createBinding || (Object.create ? (function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[n];
    } }), Object.defineProperty(e, r, i);
  }) : (function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  })), xy = re && re.__setModuleDefault || (Object.create ? (function(e, t) {
    Object.defineProperty(e, "default", { enumerable: true, value: t });
  }) : function(e, t) {
    e.default = t;
  }), Ty = re && re.__importStar || /* @__PURE__ */ (function() {
    var e = function(t) {
      return e = Object.getOwnPropertyNames || function(n) {
        var r = [];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[r.length] = i);
        return r;
      }, e(t);
    };
    return function(t) {
      if (t && t.__esModule) return t;
      var n = {};
      if (t != null) for (var r = e(t), i = 0; i < r.length; i++) r[i] !== "default" && Py(n, t, r[i]);
      return xy(n, t), n;
    };
  })();
  Object.defineProperty(re, "__esModule", { value: true });
  re.DidCloseNotebookDocumentNotification = re.DidSaveNotebookDocumentNotification = re.DidChangeNotebookDocumentNotification = re.NotebookCellArrayChange = re.DidOpenNotebookDocumentNotification = re.NotebookDocumentSyncRegistrationType = re.NotebookDocument = re.NotebookCell = re.ExecutionSummary = re.NotebookCellKind = void 0;
  var Rr = (Ln(), is(Fi)), ht = Ty($i()), wt = ce(), ic;
  (function(e) {
    e.Markup = 1, e.Code = 2;
    function t(n) {
      return n === 1 || n === 2;
    }
    e.is = t;
  })(ic || (re.NotebookCellKind = ic = {}));
  var oc;
  (function(e) {
    function t(i, o) {
      let s = { executionOrder: i };
      return (o === true || o === false) && (s.success = o), s;
    }
    e.create = t;
    function n(i) {
      let o = i;
      return ht.objectLiteral(o) && Rr.uinteger.is(o.executionOrder) && (o.success === void 0 || ht.boolean(o.success));
    }
    e.is = n;
    function r(i, o) {
      return i === o ? true : i == null || o === null || o === void 0 ? false : i.executionOrder === o.executionOrder && i.success === o.success;
    }
    e.equals = r;
  })(oc || (re.ExecutionSummary = oc = {}));
  var Gi;
  (function(e) {
    function t(o, s) {
      return { kind: o, document: s };
    }
    e.create = t;
    function n(o) {
      let s = o;
      return ht.objectLiteral(s) && ic.is(s.kind) && Rr.DocumentUri.is(s.document) && (s.metadata === void 0 || ht.objectLiteral(s.metadata));
    }
    e.is = n;
    function r(o, s) {
      let a = /* @__PURE__ */ new Set();
      return o.document !== s.document && a.add("document"), o.kind !== s.kind && a.add("kind"), o.executionSummary !== s.executionSummary && a.add("executionSummary"), (o.metadata !== void 0 || s.metadata !== void 0) && !i(o.metadata, s.metadata) && a.add("metadata"), (o.executionSummary !== void 0 || s.executionSummary !== void 0) && !oc.equals(o.executionSummary, s.executionSummary) && a.add("executionSummary"), a;
    }
    e.diff = r;
    function i(o, s) {
      if (o === s) return true;
      if (o == null || s === null || s === void 0 || typeof o != typeof s || typeof o != "object") return false;
      let a = Array.isArray(o), u = Array.isArray(s);
      if (a !== u) return false;
      if (a && u) {
        if (o.length !== s.length) return false;
        for (let c = 0; c < o.length; c++) if (!i(o[c], s[c])) return false;
      }
      if (ht.objectLiteral(o) && ht.objectLiteral(s)) {
        let c = Object.keys(o), f = Object.keys(s);
        if (c.length !== f.length || (c.sort(), f.sort(), !i(c, f))) return false;
        for (let v = 0; v < c.length; v++) {
          let d = c[v];
          if (!i(o[d], s[d])) return false;
        }
      }
      return true;
    }
  })(Gi || (re.NotebookCell = Gi = {}));
  var Nf;
  (function(e) {
    function t(r, i, o, s) {
      return { uri: r, notebookType: i, version: o, cells: s };
    }
    e.create = t;
    function n(r) {
      let i = r;
      return ht.objectLiteral(i) && ht.string(i.uri) && Rr.integer.is(i.version) && ht.typedArray(i.cells, Gi.is);
    }
    e.is = n;
  })(Nf || (re.NotebookDocument = Nf = {}));
  var Gn;
  (function(e) {
    e.method = "notebookDocument/sync", e.messageDirection = wt.MessageDirection.clientToServer, e.type = new wt.RegistrationType(e.method);
  })(Gn || (re.NotebookDocumentSyncRegistrationType = Gn = {}));
  var Cf;
  (function(e) {
    e.method = "notebookDocument/didOpen", e.messageDirection = wt.MessageDirection.clientToServer, e.type = new wt.ProtocolNotificationType(e.method), e.registrationMethod = Gn.method;
  })(Cf || (re.DidOpenNotebookDocumentNotification = Cf = {}));
  var jf;
  (function(e) {
    function t(r) {
      let i = r;
      return ht.objectLiteral(i) && Rr.uinteger.is(i.start) && Rr.uinteger.is(i.deleteCount) && (i.cells === void 0 || ht.typedArray(i.cells, Gi.is));
    }
    e.is = t;
    function n(r, i, o) {
      let s = { start: r, deleteCount: i };
      return o !== void 0 && (s.cells = o), s;
    }
    e.create = n;
  })(jf || (re.NotebookCellArrayChange = jf = {}));
  var Ef;
  (function(e) {
    e.method = "notebookDocument/didChange", e.messageDirection = wt.MessageDirection.clientToServer, e.type = new wt.ProtocolNotificationType(e.method), e.registrationMethod = Gn.method;
  })(Ef || (re.DidChangeNotebookDocumentNotification = Ef = {}));
  var Af;
  (function(e) {
    e.method = "notebookDocument/didSave", e.messageDirection = wt.MessageDirection.clientToServer, e.type = new wt.ProtocolNotificationType(e.method), e.registrationMethod = Gn.method;
  })(Af || (re.DidSaveNotebookDocumentNotification = Af = {}));
  var qf;
  (function(e) {
    e.method = "notebookDocument/didClose", e.messageDirection = wt.MessageDirection.clientToServer, e.type = new wt.ProtocolNotificationType(e.method), e.registrationMethod = Gn.method;
  })(qf || (re.DidCloseNotebookDocumentNotification = qf = {}));
});
var Ff = F((Xi) => {
  "use strict";
  Object.defineProperty(Xi, "__esModule", { value: true });
  Xi.InlineCompletionRequest = void 0;
  var sc = ce(), Lf;
  (function(e) {
    e.method = "textDocument/inlineCompletion", e.messageDirection = sc.MessageDirection.clientToServer, e.type = new sc.ProtocolRequestType(e.method), e.capabilities = sc.CM.create("textDocument.inlineCompletion", "inlineCompletionProvider");
  })(Lf || (Xi.InlineCompletionRequest = Lf = {}));
});
var Wf = F((Xn) => {
  "use strict";
  Object.defineProperty(Xn, "__esModule", { value: true });
  Xn.TextDocumentContentRefreshRequest = Xn.TextDocumentContentRequest = void 0;
  var Mr = ce(), $f;
  (function(e) {
    e.method = "workspace/textDocumentContent", e.messageDirection = Mr.MessageDirection.clientToServer, e.type = new Mr.ProtocolRequestType(e.method), e.capabilities = Mr.CM.create("workspace.textDocumentContent", "workspace.textDocumentContent");
  })($f || (Xn.TextDocumentContentRequest = $f = {}));
  var Vf;
  (function(e) {
    e.method = "workspace/textDocumentContent/refresh", e.messageDirection = Mr.MessageDirection.serverToClient, e.type = new Mr.ProtocolRequestType(e.method);
  })(Vf || (Xn.TextDocumentContentRefreshRequest = Vf = {}));
});
var np = F((b) => {
  "use strict";
  var ky = b && b.__createBinding || (Object.create ? (function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[n];
    } }), Object.defineProperty(e, r, i);
  }) : (function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  })), Oy = b && b.__setModuleDefault || (Object.create ? (function(e, t) {
    Object.defineProperty(e, "default", { enumerable: true, value: t });
  }) : function(e, t) {
    e.default = t;
  }), Ry = b && b.__importStar || /* @__PURE__ */ (function() {
    var e = function(t) {
      return e = Object.getOwnPropertyNames || function(n) {
        var r = [];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[r.length] = i);
        return r;
      }, e(t);
    };
    return function(t) {
      if (t && t.__esModule) return t;
      var n = {};
      if (t != null) for (var r = e(t), i = 0; i < r.length; i++) r[i] !== "default" && ky(n, t, r[i]);
      return Oy(n, t), n;
    };
  })();
  Object.defineProperty(b, "__esModule", { value: true });
  b.CodeActionRequest = b.DocumentSymbolRequest = b.DocumentHighlightRequest = b.ReferencesRequest = b.DefinitionRequest = b.SignatureHelpRequest = b.SignatureHelpTriggerKind = b.HoverRequest = b.CompletionResolveRequest = b.CompletionRequest = b.CompletionTriggerKind = b.PublishDiagnosticsNotification = b.WatchKind = b.GlobPattern = b.RelativePattern = b.FileChangeType = b.DidChangeWatchedFilesNotification = b.WillSaveTextDocumentWaitUntilRequest = b.WillSaveTextDocumentNotification = b.TextDocumentSaveReason = b.DidSaveTextDocumentNotification = b.DidCloseTextDocumentNotification = b.DidChangeTextDocumentNotification = b.TextDocumentContentChangeEvent = b.DidOpenTextDocumentNotification = b.TextDocumentSyncKind = b.TelemetryEventNotification = b.LogMessageNotification = b.ShowMessageRequest = b.ShowMessageNotification = b.MessageType = b.DidChangeConfigurationNotification = b.ExitNotification = b.ShutdownRequest = b.InitializedNotification = b.InitializeErrorCodes = b.InitializeRequest = b.WorkDoneProgressOptions = b.TextDocumentRegistrationOptions = b.StaticRegistrationOptions = b.PositionEncodingKind = b.RegularExpressionEngineKind = b.FailureHandlingKind = b.ResourceOperationKind = b.UnregistrationRequest = b.RegistrationRequest = b.DocumentSelector = b.NotebookCellTextDocumentFilter = b.NotebookDocumentFilter = b.TextDocumentFilter = void 0;
  b.UniquenessLevel = b.WillDeleteFilesRequest = b.DidDeleteFilesNotification = b.WillRenameFilesRequest = b.DidRenameFilesNotification = b.WillCreateFilesRequest = b.DidCreateFilesNotification = b.FileOperationPatternKind = b.LinkedEditingRangeRequest = b.ShowDocumentRequest = b.SemanticTokensRegistrationType = b.SemanticTokensRefreshRequest = b.SemanticTokensRangeRequest = b.SemanticTokensDeltaRequest = b.SemanticTokensRequest = b.TokenFormat = b.CallHierarchyPrepareRequest = b.CallHierarchyOutgoingCallsRequest = b.CallHierarchyIncomingCallsRequest = b.WorkDoneProgressCancelNotification = b.WorkDoneProgressCreateRequest = b.WorkDoneProgress = b.SelectionRangeRequest = b.DeclarationRequest = b.FoldingRangeRefreshRequest = b.FoldingRangeRequest = b.ColorPresentationRequest = b.DocumentColorRequest = b.ConfigurationRequest = b.DidChangeWorkspaceFoldersNotification = b.WorkspaceFoldersRequest = b.TypeDefinitionRequest = b.ImplementationRequest = b.ApplyWorkspaceEditRequest = b.ExecuteCommandRequest = b.PrepareRenameRequest = b.RenameRequest = b.PrepareSupportDefaultBehavior = b.DocumentOnTypeFormattingRequest = b.DocumentRangesFormattingRequest = b.DocumentRangeFormattingRequest = b.DocumentFormattingRequest = b.DocumentLinkResolveRequest = b.DocumentLinkRequest = b.CodeLensRefreshRequest = b.CodeLensResolveRequest = b.CodeLensRequest = b.WorkspaceSymbolResolveRequest = b.WorkspaceSymbolRequest = b.CodeActionResolveRequest = void 0;
  b.TextDocumentContentRefreshRequest = b.TextDocumentContentRequest = b.InlineCompletionRequest = b.DidCloseNotebookDocumentNotification = b.DidSaveNotebookDocumentNotification = b.DidChangeNotebookDocumentNotification = b.NotebookCellArrayChange = b.DidOpenNotebookDocumentNotification = b.NotebookDocumentSyncRegistrationType = b.NotebookDocument = b.NotebookCell = b.ExecutionSummary = b.NotebookCellKind = b.DiagnosticRefreshRequest = b.WorkspaceDiagnosticRequest = b.DocumentDiagnosticRequest = b.DocumentDiagnosticReportKind = b.DiagnosticServerCancellationData = b.InlayHintRefreshRequest = b.InlayHintResolveRequest = b.InlayHintRequest = b.InlineValueRefreshRequest = b.InlineValueRequest = b.TypeHierarchySupertypesRequest = b.TypeHierarchySubtypesRequest = b.TypeHierarchyPrepareRequest = b.MonikerRequest = b.MonikerKind = void 0;
  var j = ce(), Uf = (Ln(), is(Fi)), Re = Ry($i()), My = bl();
  Object.defineProperty(b, "ImplementationRequest", { enumerable: true, get: function() {
    return My.ImplementationRequest;
  } });
  var Ny = _l();
  Object.defineProperty(b, "TypeDefinitionRequest", { enumerable: true, get: function() {
    return Ny.TypeDefinitionRequest;
  } });
  var Qd = Sl();
  Object.defineProperty(b, "WorkspaceFoldersRequest", { enumerable: true, get: function() {
    return Qd.WorkspaceFoldersRequest;
  } });
  Object.defineProperty(b, "DidChangeWorkspaceFoldersNotification", { enumerable: true, get: function() {
    return Qd.DidChangeWorkspaceFoldersNotification;
  } });
  var Cy = xl();
  Object.defineProperty(b, "ConfigurationRequest", { enumerable: true, get: function() {
    return Cy.ConfigurationRequest;
  } });
  var Yd = Ol();
  Object.defineProperty(b, "DocumentColorRequest", { enumerable: true, get: function() {
    return Yd.DocumentColorRequest;
  } });
  Object.defineProperty(b, "ColorPresentationRequest", { enumerable: true, get: function() {
    return Yd.ColorPresentationRequest;
  } });
  var Kd = Nl();
  Object.defineProperty(b, "FoldingRangeRequest", { enumerable: true, get: function() {
    return Kd.FoldingRangeRequest;
  } });
  Object.defineProperty(b, "FoldingRangeRefreshRequest", { enumerable: true, get: function() {
    return Kd.FoldingRangeRefreshRequest;
  } });
  var jy = jl();
  Object.defineProperty(b, "DeclarationRequest", { enumerable: true, get: function() {
    return jy.DeclarationRequest;
  } });
  var Ey = Al();
  Object.defineProperty(b, "SelectionRangeRequest", { enumerable: true, get: function() {
    return Ey.SelectionRangeRequest;
  } });
  var pc = Fl();
  Object.defineProperty(b, "WorkDoneProgress", { enumerable: true, get: function() {
    return pc.WorkDoneProgress;
  } });
  Object.defineProperty(b, "WorkDoneProgressCreateRequest", { enumerable: true, get: function() {
    return pc.WorkDoneProgressCreateRequest;
  } });
  Object.defineProperty(b, "WorkDoneProgressCancelNotification", { enumerable: true, get: function() {
    return pc.WorkDoneProgressCancelNotification;
  } });
  var hc = Ul();
  Object.defineProperty(b, "CallHierarchyIncomingCallsRequest", { enumerable: true, get: function() {
    return hc.CallHierarchyIncomingCallsRequest;
  } });
  Object.defineProperty(b, "CallHierarchyOutgoingCallsRequest", { enumerable: true, get: function() {
    return hc.CallHierarchyOutgoingCallsRequest;
  } });
  Object.defineProperty(b, "CallHierarchyPrepareRequest", { enumerable: true, get: function() {
    return hc.CallHierarchyPrepareRequest;
  } });
  var Zn = Xl();
  Object.defineProperty(b, "TokenFormat", { enumerable: true, get: function() {
    return Zn.TokenFormat;
  } });
  Object.defineProperty(b, "SemanticTokensRequest", { enumerable: true, get: function() {
    return Zn.SemanticTokensRequest;
  } });
  Object.defineProperty(b, "SemanticTokensDeltaRequest", { enumerable: true, get: function() {
    return Zn.SemanticTokensDeltaRequest;
  } });
  Object.defineProperty(b, "SemanticTokensRangeRequest", { enumerable: true, get: function() {
    return Zn.SemanticTokensRangeRequest;
  } });
  Object.defineProperty(b, "SemanticTokensRefreshRequest", { enumerable: true, get: function() {
    return Zn.SemanticTokensRefreshRequest;
  } });
  Object.defineProperty(b, "SemanticTokensRegistrationType", { enumerable: true, get: function() {
    return Zn.SemanticTokensRegistrationType;
  } });
  var Ay = Ql();
  Object.defineProperty(b, "ShowDocumentRequest", { enumerable: true, get: function() {
    return Ay.ShowDocumentRequest;
  } });
  var qy = Kl();
  Object.defineProperty(b, "LinkedEditingRangeRequest", { enumerable: true, get: function() {
    return qy.LinkedEditingRangeRequest;
  } });
  var hn = cf();
  Object.defineProperty(b, "FileOperationPatternKind", { enumerable: true, get: function() {
    return hn.FileOperationPatternKind;
  } });
  Object.defineProperty(b, "DidCreateFilesNotification", { enumerable: true, get: function() {
    return hn.DidCreateFilesNotification;
  } });
  Object.defineProperty(b, "WillCreateFilesRequest", { enumerable: true, get: function() {
    return hn.WillCreateFilesRequest;
  } });
  Object.defineProperty(b, "DidRenameFilesNotification", { enumerable: true, get: function() {
    return hn.DidRenameFilesNotification;
  } });
  Object.defineProperty(b, "WillRenameFilesRequest", { enumerable: true, get: function() {
    return hn.WillRenameFilesRequest;
  } });
  Object.defineProperty(b, "DidDeleteFilesNotification", { enumerable: true, get: function() {
    return hn.DidDeleteFilesNotification;
  } });
  Object.defineProperty(b, "WillDeleteFilesRequest", { enumerable: true, get: function() {
    return hn.WillDeleteFilesRequest;
  } });
  var mc = df();
  Object.defineProperty(b, "UniquenessLevel", { enumerable: true, get: function() {
    return mc.UniquenessLevel;
  } });
  Object.defineProperty(b, "MonikerKind", { enumerable: true, get: function() {
    return mc.MonikerKind;
  } });
  Object.defineProperty(b, "MonikerRequest", { enumerable: true, get: function() {
    return mc.MonikerRequest;
  } });
  var gc = gf();
  Object.defineProperty(b, "TypeHierarchyPrepareRequest", { enumerable: true, get: function() {
    return gc.TypeHierarchyPrepareRequest;
  } });
  Object.defineProperty(b, "TypeHierarchySubtypesRequest", { enumerable: true, get: function() {
    return gc.TypeHierarchySubtypesRequest;
  } });
  Object.defineProperty(b, "TypeHierarchySupertypesRequest", { enumerable: true, get: function() {
    return gc.TypeHierarchySupertypesRequest;
  } });
  var ep = vf();
  Object.defineProperty(b, "InlineValueRequest", { enumerable: true, get: function() {
    return ep.InlineValueRequest;
  } });
  Object.defineProperty(b, "InlineValueRefreshRequest", { enumerable: true, get: function() {
    return ep.InlineValueRefreshRequest;
  } });
  var yc = Sf();
  Object.defineProperty(b, "InlayHintRequest", { enumerable: true, get: function() {
    return yc.InlayHintRequest;
  } });
  Object.defineProperty(b, "InlayHintResolveRequest", { enumerable: true, get: function() {
    return yc.InlayHintResolveRequest;
  } });
  Object.defineProperty(b, "InlayHintRefreshRequest", { enumerable: true, get: function() {
    return yc.InlayHintRefreshRequest;
  } });
  var Nr = Mf();
  Object.defineProperty(b, "DiagnosticServerCancellationData", { enumerable: true, get: function() {
    return Nr.DiagnosticServerCancellationData;
  } });
  Object.defineProperty(b, "DocumentDiagnosticReportKind", { enumerable: true, get: function() {
    return Nr.DocumentDiagnosticReportKind;
  } });
  Object.defineProperty(b, "DocumentDiagnosticRequest", { enumerable: true, get: function() {
    return Nr.DocumentDiagnosticRequest;
  } });
  Object.defineProperty(b, "WorkspaceDiagnosticRequest", { enumerable: true, get: function() {
    return Nr.WorkspaceDiagnosticRequest;
  } });
  Object.defineProperty(b, "DiagnosticRefreshRequest", { enumerable: true, get: function() {
    return Nr.DiagnosticRefreshRequest;
  } });
  var Dt = If();
  Object.defineProperty(b, "NotebookCellKind", { enumerable: true, get: function() {
    return Dt.NotebookCellKind;
  } });
  Object.defineProperty(b, "ExecutionSummary", { enumerable: true, get: function() {
    return Dt.ExecutionSummary;
  } });
  Object.defineProperty(b, "NotebookCell", { enumerable: true, get: function() {
    return Dt.NotebookCell;
  } });
  Object.defineProperty(b, "NotebookDocument", { enumerable: true, get: function() {
    return Dt.NotebookDocument;
  } });
  Object.defineProperty(b, "NotebookDocumentSyncRegistrationType", { enumerable: true, get: function() {
    return Dt.NotebookDocumentSyncRegistrationType;
  } });
  Object.defineProperty(b, "DidOpenNotebookDocumentNotification", { enumerable: true, get: function() {
    return Dt.DidOpenNotebookDocumentNotification;
  } });
  Object.defineProperty(b, "NotebookCellArrayChange", { enumerable: true, get: function() {
    return Dt.NotebookCellArrayChange;
  } });
  Object.defineProperty(b, "DidChangeNotebookDocumentNotification", { enumerable: true, get: function() {
    return Dt.DidChangeNotebookDocumentNotification;
  } });
  Object.defineProperty(b, "DidSaveNotebookDocumentNotification", { enumerable: true, get: function() {
    return Dt.DidSaveNotebookDocumentNotification;
  } });
  Object.defineProperty(b, "DidCloseNotebookDocumentNotification", { enumerable: true, get: function() {
    return Dt.DidCloseNotebookDocumentNotification;
  } });
  var Iy = Ff();
  Object.defineProperty(b, "InlineCompletionRequest", { enumerable: true, get: function() {
    return Iy.InlineCompletionRequest;
  } });
  var tp = Wf();
  Object.defineProperty(b, "TextDocumentContentRequest", { enumerable: true, get: function() {
    return tp.TextDocumentContentRequest;
  } });
  Object.defineProperty(b, "TextDocumentContentRefreshRequest", { enumerable: true, get: function() {
    return tp.TextDocumentContentRefreshRequest;
  } });
  var ac;
  (function(e) {
    function t(n) {
      let r = n;
      return Re.string(r) || Re.string(r.language) || Re.string(r.scheme) || dc.is(r.pattern);
    }
    e.is = t;
  })(ac || (b.TextDocumentFilter = ac = {}));
  var cc;
  (function(e) {
    function t(n) {
      let r = n;
      return Re.objectLiteral(r) && (Re.string(r.notebookType) || Re.string(r.scheme) || Re.string(r.pattern));
    }
    e.is = t;
  })(cc || (b.NotebookDocumentFilter = cc = {}));
  var uc;
  (function(e) {
    function t(n) {
      let r = n;
      return Re.objectLiteral(r) && (Re.string(r.notebook) || cc.is(r.notebook)) && (r.language === void 0 || Re.string(r.language));
    }
    e.is = t;
  })(uc || (b.NotebookCellTextDocumentFilter = uc = {}));
  var lc;
  (function(e) {
    function t(n) {
      if (!Array.isArray(n)) return false;
      for (let r of n) if (!Re.string(r) && !ac.is(r) && !uc.is(r)) return false;
      return true;
    }
    e.is = t;
  })(lc || (b.DocumentSelector = lc = {}));
  var Hf;
  (function(e) {
    e.method = "client/registerCapability", e.messageDirection = j.MessageDirection.serverToClient, e.type = new j.ProtocolRequestType(e.method);
  })(Hf || (b.RegistrationRequest = Hf = {}));
  var Bf;
  (function(e) {
    e.method = "client/unregisterCapability", e.messageDirection = j.MessageDirection.serverToClient, e.type = new j.ProtocolRequestType(e.method);
  })(Bf || (b.UnregistrationRequest = Bf = {}));
  var zf;
  (function(e) {
    e.Create = "create", e.Rename = "rename", e.Delete = "delete";
  })(zf || (b.ResourceOperationKind = zf = {}));
  var Jf;
  (function(e) {
    e.Abort = "abort", e.Transactional = "transactional", e.TextOnlyTransactional = "textOnlyTransactional", e.Undo = "undo";
  })(Jf || (b.FailureHandlingKind = Jf = {}));
  var Gf;
  (function(e) {
    e.ES2020 = "ES2020";
  })(Gf || (b.RegularExpressionEngineKind = Gf = {}));
  var Xf;
  (function(e) {
    e.UTF8 = "utf-8", e.UTF16 = "utf-16", e.UTF32 = "utf-32";
  })(Xf || (b.PositionEncodingKind = Xf = {}));
  var Zf;
  (function(e) {
    function t(n) {
      let r = n;
      return r && Re.string(r.id) && r.id.length > 0;
    }
    e.hasId = t;
  })(Zf || (b.StaticRegistrationOptions = Zf = {}));
  var Qf;
  (function(e) {
    function t(n) {
      let r = n;
      return r && (r.documentSelector === null || lc.is(r.documentSelector));
    }
    e.is = t;
  })(Qf || (b.TextDocumentRegistrationOptions = Qf = {}));
  var Yf;
  (function(e) {
    function t(r) {
      let i = r;
      return Re.objectLiteral(i) && (i.workDoneProgress === void 0 || Re.boolean(i.workDoneProgress));
    }
    e.is = t;
    function n(r) {
      let i = r;
      return i && Re.boolean(i.workDoneProgress);
    }
    e.hasWorkDoneProgress = n;
  })(Yf || (b.WorkDoneProgressOptions = Yf = {}));
  var Kf;
  (function(e) {
    e.method = "initialize", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method);
  })(Kf || (b.InitializeRequest = Kf = {}));
  var ed;
  (function(e) {
    e.unknownProtocolVersion = 1;
  })(ed || (b.InitializeErrorCodes = ed = {}));
  var td;
  (function(e) {
    e.method = "initialized", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolNotificationType(e.method);
  })(td || (b.InitializedNotification = td = {}));
  var nd;
  (function(e) {
    e.method = "shutdown", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType0(e.method);
  })(nd || (b.ShutdownRequest = nd = {}));
  var rd;
  (function(e) {
    e.method = "exit", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolNotificationType0(e.method);
  })(rd || (b.ExitNotification = rd = {}));
  var id;
  (function(e) {
    e.method = "workspace/didChangeConfiguration", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolNotificationType(e.method), e.capabilities = j.CM.create("workspace.didChangeConfiguration", void 0);
  })(id || (b.DidChangeConfigurationNotification = id = {}));
  var od;
  (function(e) {
    e.Error = 1, e.Warning = 2, e.Info = 3, e.Log = 4, e.Debug = 5;
  })(od || (b.MessageType = od = {}));
  var sd;
  (function(e) {
    e.method = "window/showMessage", e.messageDirection = j.MessageDirection.serverToClient, e.type = new j.ProtocolNotificationType(e.method), e.capabilities = j.CM.create("window.showMessage", void 0);
  })(sd || (b.ShowMessageNotification = sd = {}));
  var ad;
  (function(e) {
    e.method = "window/showMessageRequest", e.messageDirection = j.MessageDirection.serverToClient, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("window.showMessage", void 0);
  })(ad || (b.ShowMessageRequest = ad = {}));
  var cd;
  (function(e) {
    e.method = "window/logMessage", e.messageDirection = j.MessageDirection.serverToClient, e.type = new j.ProtocolNotificationType(e.method);
  })(cd || (b.LogMessageNotification = cd = {}));
  var ud;
  (function(e) {
    e.method = "telemetry/event", e.messageDirection = j.MessageDirection.serverToClient, e.type = new j.ProtocolNotificationType(e.method);
  })(ud || (b.TelemetryEventNotification = ud = {}));
  var ld;
  (function(e) {
    e.None = 0, e.Full = 1, e.Incremental = 2;
  })(ld || (b.TextDocumentSyncKind = ld = {}));
  var fd;
  (function(e) {
    e.method = "textDocument/didOpen", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolNotificationType(e.method), e.capabilities = j.CM.create("textDocument.synchronization", "textDocumentSync.openClose");
  })(fd || (b.DidOpenTextDocumentNotification = fd = {}));
  var dd;
  (function(e) {
    function t(r) {
      let i = r;
      return i != null && typeof i.text == "string" && i.range !== void 0 && (i.rangeLength === void 0 || typeof i.rangeLength == "number");
    }
    e.isIncremental = t;
    function n(r) {
      let i = r;
      return i != null && typeof i.text == "string" && i.range === void 0 && i.rangeLength === void 0;
    }
    e.isFull = n;
  })(dd || (b.TextDocumentContentChangeEvent = dd = {}));
  var pd;
  (function(e) {
    e.method = "textDocument/didChange", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolNotificationType(e.method), e.capabilities = j.CM.create("textDocument.synchronization", "textDocumentSync");
  })(pd || (b.DidChangeTextDocumentNotification = pd = {}));
  var hd;
  (function(e) {
    e.method = "textDocument/didClose", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolNotificationType(e.method), e.capabilities = j.CM.create("textDocument.synchronization", "textDocumentSync.openClose");
  })(hd || (b.DidCloseTextDocumentNotification = hd = {}));
  var md;
  (function(e) {
    e.method = "textDocument/didSave", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolNotificationType(e.method), e.capabilities = j.CM.create("textDocument.synchronization.didSave", "textDocumentSync.save");
  })(md || (b.DidSaveTextDocumentNotification = md = {}));
  var gd;
  (function(e) {
    e.Manual = 1, e.AfterDelay = 2, e.FocusOut = 3;
  })(gd || (b.TextDocumentSaveReason = gd = {}));
  var yd;
  (function(e) {
    e.method = "textDocument/willSave", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolNotificationType(e.method), e.capabilities = j.CM.create("textDocument.synchronization.willSave", "textDocumentSync.willSave");
  })(yd || (b.WillSaveTextDocumentNotification = yd = {}));
  var bd;
  (function(e) {
    e.method = "textDocument/willSaveWaitUntil", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("textDocument.synchronization.willSaveWaitUntil", "textDocumentSync.willSaveWaitUntil");
  })(bd || (b.WillSaveTextDocumentWaitUntilRequest = bd = {}));
  var vd;
  (function(e) {
    e.method = "workspace/didChangeWatchedFiles", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolNotificationType(e.method), e.capabilities = j.CM.create("workspace.didChangeWatchedFiles", void 0);
  })(vd || (b.DidChangeWatchedFilesNotification = vd = {}));
  var _d;
  (function(e) {
    e.Created = 1, e.Changed = 2, e.Deleted = 3;
  })(_d || (b.FileChangeType = _d = {}));
  var fc;
  (function(e) {
    function t(n) {
      let r = n;
      return Re.objectLiteral(r) && (Uf.URI.is(r.baseUri) || Uf.WorkspaceFolder.is(r.baseUri)) && Re.string(r.pattern);
    }
    e.is = t;
  })(fc || (b.RelativePattern = fc = {}));
  var dc;
  (function(e) {
    function t(n) {
      let r = n;
      return Re.string(r) || fc.is(r);
    }
    e.is = t;
  })(dc || (b.GlobPattern = dc = {}));
  var wd;
  (function(e) {
    e.Create = 1, e.Change = 2, e.Delete = 4;
  })(wd || (b.WatchKind = wd = {}));
  var Dd;
  (function(e) {
    e.method = "textDocument/publishDiagnostics", e.messageDirection = j.MessageDirection.serverToClient, e.type = new j.ProtocolNotificationType(e.method), e.capabilities = j.CM.create("textDocument.publishDiagnostics", void 0);
  })(Dd || (b.PublishDiagnosticsNotification = Dd = {}));
  var Sd;
  (function(e) {
    e.Invoked = 1, e.TriggerCharacter = 2, e.TriggerForIncompleteCompletions = 3;
  })(Sd || (b.CompletionTriggerKind = Sd = {}));
  var Pd;
  (function(e) {
    e.method = "textDocument/completion", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("textDocument.completion", "completionProvider");
  })(Pd || (b.CompletionRequest = Pd = {}));
  var xd;
  (function(e) {
    e.method = "completionItem/resolve", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("textDocument.completion.completionItem.resolveSupport", "completionProvider.resolveProvider");
  })(xd || (b.CompletionResolveRequest = xd = {}));
  var Td;
  (function(e) {
    e.method = "textDocument/hover", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("textDocument.hover", "hoverProvider");
  })(Td || (b.HoverRequest = Td = {}));
  var kd;
  (function(e) {
    e.Invoked = 1, e.TriggerCharacter = 2, e.ContentChange = 3;
  })(kd || (b.SignatureHelpTriggerKind = kd = {}));
  var Od;
  (function(e) {
    e.method = "textDocument/signatureHelp", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("textDocument.signatureHelp", "signatureHelpProvider");
  })(Od || (b.SignatureHelpRequest = Od = {}));
  var Rd;
  (function(e) {
    e.method = "textDocument/definition", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("textDocument.definition", "definitionProvider");
  })(Rd || (b.DefinitionRequest = Rd = {}));
  var Md;
  (function(e) {
    e.method = "textDocument/references", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("textDocument.references", "referencesProvider");
  })(Md || (b.ReferencesRequest = Md = {}));
  var Nd;
  (function(e) {
    e.method = "textDocument/documentHighlight", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("textDocument.documentHighlight", "documentHighlightProvider");
  })(Nd || (b.DocumentHighlightRequest = Nd = {}));
  var Cd;
  (function(e) {
    e.method = "textDocument/documentSymbol", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("textDocument.documentSymbol", "documentSymbolProvider");
  })(Cd || (b.DocumentSymbolRequest = Cd = {}));
  var jd;
  (function(e) {
    e.method = "textDocument/codeAction", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("textDocument.codeAction", "codeActionProvider");
  })(jd || (b.CodeActionRequest = jd = {}));
  var Ed;
  (function(e) {
    e.method = "codeAction/resolve", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("textDocument.codeAction.resolveSupport", "codeActionProvider.resolveProvider");
  })(Ed || (b.CodeActionResolveRequest = Ed = {}));
  var Ad;
  (function(e) {
    e.method = "workspace/symbol", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("workspace.symbol", "workspaceSymbolProvider");
  })(Ad || (b.WorkspaceSymbolRequest = Ad = {}));
  var qd;
  (function(e) {
    e.method = "workspaceSymbol/resolve", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("workspace.symbol.resolveSupport", "workspaceSymbolProvider.resolveProvider");
  })(qd || (b.WorkspaceSymbolResolveRequest = qd = {}));
  var Id;
  (function(e) {
    e.method = "textDocument/codeLens", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("textDocument.codeLens", "codeLensProvider");
  })(Id || (b.CodeLensRequest = Id = {}));
  var Ld;
  (function(e) {
    e.method = "codeLens/resolve", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("textDocument.codeLens.resolveSupport", "codeLensProvider.resolveProvider");
  })(Ld || (b.CodeLensResolveRequest = Ld = {}));
  var Fd;
  (function(e) {
    e.method = "workspace/codeLens/refresh", e.messageDirection = j.MessageDirection.serverToClient, e.type = new j.ProtocolRequestType0(e.method), e.capabilities = j.CM.create("workspace.codeLens", void 0);
  })(Fd || (b.CodeLensRefreshRequest = Fd = {}));
  var $d;
  (function(e) {
    e.method = "textDocument/documentLink", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("textDocument.documentLink", "documentLinkProvider");
  })($d || (b.DocumentLinkRequest = $d = {}));
  var Vd;
  (function(e) {
    e.method = "documentLink/resolve", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("textDocument.documentLink", "documentLinkProvider.resolveProvider");
  })(Vd || (b.DocumentLinkResolveRequest = Vd = {}));
  var Wd;
  (function(e) {
    e.method = "textDocument/formatting", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("textDocument.formatting", "documentFormattingProvider");
  })(Wd || (b.DocumentFormattingRequest = Wd = {}));
  var Ud;
  (function(e) {
    e.method = "textDocument/rangeFormatting", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("textDocument.rangeFormatting", "documentRangeFormattingProvider");
  })(Ud || (b.DocumentRangeFormattingRequest = Ud = {}));
  var Hd;
  (function(e) {
    e.method = "textDocument/rangesFormatting", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("textDocument.rangeFormatting.rangesSupport", "documentRangeFormattingProvider.rangesSupport");
  })(Hd || (b.DocumentRangesFormattingRequest = Hd = {}));
  var Bd;
  (function(e) {
    e.method = "textDocument/onTypeFormatting", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("textDocument.onTypeFormatting", "documentOnTypeFormattingProvider");
  })(Bd || (b.DocumentOnTypeFormattingRequest = Bd = {}));
  var zd;
  (function(e) {
    e.Identifier = 1;
  })(zd || (b.PrepareSupportDefaultBehavior = zd = {}));
  var Jd;
  (function(e) {
    e.method = "textDocument/rename", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("textDocument.rename", "renameProvider");
  })(Jd || (b.RenameRequest = Jd = {}));
  var Gd;
  (function(e) {
    e.method = "textDocument/prepareRename", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("textDocument.rename.prepareSupport", "renameProvider.prepareProvider");
  })(Gd || (b.PrepareRenameRequest = Gd = {}));
  var Xd;
  (function(e) {
    e.method = "workspace/executeCommand", e.messageDirection = j.MessageDirection.clientToServer, e.type = new j.ProtocolRequestType(e.method), e.capabilities = j.CM.create("workspace.executeCommand", "executeCommandProvider");
  })(Xd || (b.ExecuteCommandRequest = Xd = {}));
  var Zd;
  (function(e) {
    e.method = "workspace/applyEdit", e.messageDirection = j.MessageDirection.serverToClient, e.type = new j.ProtocolRequestType("workspace/applyEdit"), e.capabilities = j.CM.create("workspace.applyEdit", void 0);
  })(Zd || (b.ApplyWorkspaceEditRequest = Zd = {}));
});
var ip = F((bc) => {
  "use strict";
  Object.defineProperty(bc, "__esModule", { value: true });
  bc.createProtocolConnection = Ly;
  var rp = Rt();
  function Ly(e, t, n, r) {
    return rp.ConnectionStrategy.is(r) && (r = { connectionStrategy: r }), (0, rp.createMessageConnection)(e, t, n, r);
  }
});
var ye = F((Xe) => {
  "use strict";
  var Fy = Xe && Xe.__createBinding || (Object.create ? (function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[n];
    } }), Object.defineProperty(e, r, i);
  }) : (function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  })), Zi = Xe && Xe.__exportStar || function(e, t) {
    for (var n in e) n !== "default" && !Object.prototype.hasOwnProperty.call(t, n) && Fy(t, e, n);
  };
  Object.defineProperty(Xe, "__esModule", { value: true });
  Xe.LSPErrorCodes = Xe.createProtocolConnection = void 0;
  Zi(Rt(), Xe);
  Zi((Ln(), is(Fi)), Xe);
  Zi(ce(), Xe);
  Zi(np(), Xe);
  var $y = ip();
  Object.defineProperty(Xe, "createProtocolConnection", { enumerable: true, get: function() {
    return $y.createProtocolConnection;
  } });
  var op;
  (function(e) {
    e.lspReservedErrorRangeStart = -32899, e.RequestFailed = -32803, e.ServerCancelled = -32802, e.ContentModified = -32801, e.RequestCancelled = -32800, e.lspReservedErrorRangeEnd = -32800;
  })(op || (Xe.LSPErrorCodes = op = {}));
});
var _c = F((en) => {
  "use strict";
  Object.defineProperty(en, "__esModule", { value: true });
  en.empty = void 0;
  en.v4 = sp;
  en.isUUID = ap;
  en.parse = Wy;
  en.generateUuid = Uy;
  var Cr = class {
    _value;
    constructor(t) {
      this._value = t;
    }
    asHex() {
      return this._value;
    }
    equals(t) {
      return this.asHex() === t.asHex();
    }
  }, vc = class e extends Cr {
    static _chars = ["0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    static _timeHighBits = ["8", "9", "a", "b"];
    static _oneOf(t) {
      return t[Math.floor(t.length * Math.random())];
    }
    static _randomHex() {
      return e._oneOf(e._chars);
    }
    constructor() {
      super([e._randomHex(), e._randomHex(), e._randomHex(), e._randomHex(), e._randomHex(), e._randomHex(), e._randomHex(), e._randomHex(), "-", e._randomHex(), e._randomHex(), e._randomHex(), e._randomHex(), "-", "4", e._randomHex(), e._randomHex(), e._randomHex(), "-", e._oneOf(e._timeHighBits), e._randomHex(), e._randomHex(), e._randomHex(), "-", e._randomHex(), e._randomHex(), e._randomHex(), e._randomHex(), e._randomHex(), e._randomHex(), e._randomHex(), e._randomHex(), e._randomHex(), e._randomHex(), e._randomHex(), e._randomHex()].join(""));
    }
  };
  en.empty = new Cr("00000000-0000-0000-0000-000000000000");
  function sp() {
    return new vc();
  }
  var Vy = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  function ap(e) {
    return Vy.test(e);
  }
  function Wy(e) {
    if (!ap(e)) throw new Error("invalid uuid");
    return new Cr(e);
  }
  function Uy() {
    return sp().asHex();
  }
});
var cp = F((Yn) => {
  "use strict";
  Object.defineProperty(Yn, "__esModule", { value: true });
  Yn.ProgressFeature = void 0;
  Yn.attachWorkDone = By;
  Yn.attachPartialResult = Jy;
  var tn = ye(), Hy = _c(), Qn = class e {
    _connection;
    _token;
    static Instances = /* @__PURE__ */ new Map();
    constructor(t, n) {
      this._connection = t, this._token = n, e.Instances.set(this._token, this);
    }
    begin(t, n, r, i) {
      let o = { kind: "begin", title: t, message: r, cancellable: i };
      typeof n == "number" && (o.percentage = Math.round(n)), this._connection.sendProgress(tn.WorkDoneProgress.type, this._token, o);
    }
    report(t, n) {
      let r = { kind: "report" };
      typeof t == "number" ? (r.percentage = Math.round(t), n !== void 0 && (r.message = n)) : r.message = t, this._connection.sendProgress(tn.WorkDoneProgress.type, this._token, r);
    }
    done() {
      e.Instances.delete(this._token), this._connection.sendProgress(tn.WorkDoneProgress.type, this._token, { kind: "end" });
    }
  }, Qi = class extends Qn {
    _source;
    constructor(t, n) {
      super(t, n), this._source = new tn.CancellationTokenSource();
    }
    get token() {
      return this._source.token;
    }
    done() {
      this._source.dispose(), super.done();
    }
    cancel() {
      this._source.cancel();
    }
  }, jr = class {
    constructor() {
    }
    begin() {
    }
    report() {
    }
    done() {
    }
  }, Yi = class extends jr {
    _source;
    constructor() {
      super(), this._source = new tn.CancellationTokenSource();
    }
    get token() {
      return this._source.token;
    }
    done() {
      this._source.dispose();
    }
    cancel() {
      this._source.cancel();
    }
  };
  function By(e, t) {
    if (t === void 0 || t.workDoneToken === void 0) return new jr();
    let n = t.workDoneToken;
    return delete t.workDoneToken, new Qn(e, n);
  }
  var zy = (e) => class extends e {
    _progressSupported;
    constructor() {
      super(), this._progressSupported = false;
    }
    initialize(t) {
      super.initialize(t), t?.window?.workDoneProgress === true && (this._progressSupported = true, this.connection.onNotification(tn.WorkDoneProgressCancelNotification.type, (n) => {
        let r = Qn.Instances.get(n.token);
        (r instanceof Qi || r instanceof Yi) && r.cancel();
      }));
    }
    attachWorkDoneProgress(t) {
      return t === void 0 ? new jr() : new Qn(this.connection, t);
    }
    createWorkDoneProgress() {
      if (this._progressSupported) {
        let t = (0, Hy.generateUuid)();
        return this.connection.sendRequest(tn.WorkDoneProgressCreateRequest.type, { token: t }).then(() => new Qi(this.connection, t));
      } else return Promise.resolve(new Yi());
    }
  };
  Yn.ProgressFeature = zy;
  var wc;
  (function(e) {
    e.type = new tn.ProgressType();
  })(wc || (wc = {}));
  var Dc = class {
    _connection;
    _token;
    constructor(t, n) {
      this._connection = t, this._token = n;
    }
    report(t) {
      this._connection.sendProgress(wc.type, this._token, t);
    }
  };
  function Jy(e, t) {
    if (t === void 0 || t.partialResultToken === void 0) return;
    let n = t.partialResultToken;
    return delete t.partialResultToken, new Dc(e, n);
  }
});
var up = F((St) => {
  "use strict";
  var Gy = St && St.__createBinding || (Object.create ? (function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[n];
    } }), Object.defineProperty(e, r, i);
  }) : (function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  })), Xy = St && St.__setModuleDefault || (Object.create ? (function(e, t) {
    Object.defineProperty(e, "default", { enumerable: true, value: t });
  }) : function(e, t) {
    e.default = t;
  }), Zy = St && St.__importStar || /* @__PURE__ */ (function() {
    var e = function(t) {
      return e = Object.getOwnPropertyNames || function(n) {
        var r = [];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[r.length] = i);
        return r;
      }, e(t);
    };
    return function(t) {
      if (t && t.__esModule) return t;
      var n = {};
      if (t != null) for (var r = e(t), i = 0; i < r.length; i++) r[i] !== "default" && Gy(n, t, r[i]);
      return Xy(n, t), n;
    };
  })();
  Object.defineProperty(St, "__esModule", { value: true });
  St.ConfigurationFeature = void 0;
  var Qy = ye(), Yy = Zy(ti()), Ky = (e) => class extends e {
    getConfiguration(t) {
      return t ? Yy.string(t) ? this._getConfiguration({ section: t }) : this._getConfiguration(t) : this._getConfiguration({});
    }
    _getConfiguration(t) {
      let n = { items: Array.isArray(t) ? t : [t] };
      return this.connection.sendRequest(Qy.ConfigurationRequest.type, n).then((r) => Array.isArray(r) ? Array.isArray(t) ? r : r[0] : Array.isArray(t) ? [] : null);
    }
  };
  St.ConfigurationFeature = Ky;
});
var lp = F((eo) => {
  "use strict";
  Object.defineProperty(eo, "__esModule", { value: true });
  eo.WorkspaceFoldersFeature = void 0;
  var Ki = ye(), eb = (e) => class extends e {
    _onDidChangeWorkspaceFolders;
    _unregistration;
    _notificationIsAutoRegistered;
    constructor() {
      super(), this._notificationIsAutoRegistered = false;
    }
    initialize(t) {
      super.initialize(t);
      let n = t.workspace;
      n && n.workspaceFolders && (this._onDidChangeWorkspaceFolders = new Ki.Emitter(), this.connection.onNotification(Ki.DidChangeWorkspaceFoldersNotification.type, (r) => {
        this._onDidChangeWorkspaceFolders.fire(r.event);
      }));
    }
    fillServerCapabilities(t) {
      super.fillServerCapabilities(t);
      let n = t.workspace?.workspaceFolders?.changeNotifications;
      this._notificationIsAutoRegistered = n === true || typeof n == "string";
    }
    getWorkspaceFolders() {
      return this.connection.sendRequest(Ki.WorkspaceFoldersRequest.type);
    }
    get onDidChangeWorkspaceFolders() {
      if (!this._onDidChangeWorkspaceFolders) throw new Error("Client doesn't support sending workspace folder change events.");
      return !this._notificationIsAutoRegistered && !this._unregistration && (this._unregistration = this.connection.client.register(Ki.DidChangeWorkspaceFoldersNotification.type)), this._onDidChangeWorkspaceFolders.event;
    }
  };
  eo.WorkspaceFoldersFeature = eb;
});
var fp = F((to) => {
  "use strict";
  Object.defineProperty(to, "__esModule", { value: true });
  to.CallHierarchyFeature = void 0;
  var Sc = ye(), tb = (e) => class extends e {
    get callHierarchy() {
      return { onPrepare: (t) => this.connection.onRequest(Sc.CallHierarchyPrepareRequest.type, (n, r) => t(n, r, this.attachWorkDoneProgress(n), void 0)), onIncomingCalls: (t) => {
        let n = Sc.CallHierarchyIncomingCallsRequest.type;
        return this.connection.onRequest(n, (r, i) => t(r, i, this.attachWorkDoneProgress(r), this.attachPartialResultProgress(n, r)));
      }, onOutgoingCalls: (t) => {
        let n = Sc.CallHierarchyOutgoingCallsRequest.type;
        return this.connection.onRequest(n, (r, i) => t(r, i, this.attachWorkDoneProgress(r), this.attachPartialResultProgress(n, r)));
      } };
    }
  };
  to.CallHierarchyFeature = tb;
});
var xc = F((nn) => {
  "use strict";
  Object.defineProperty(nn, "__esModule", { value: true });
  nn.SemanticTokensBuilder = nn.SemanticTokensDiff = nn.SemanticTokensFeature = void 0;
  var no = ye(), nb = (e) => class extends e {
    get semanticTokens() {
      return { refresh: () => this.connection.sendRequest(no.SemanticTokensRefreshRequest.type), on: (t) => {
        let n = no.SemanticTokensRequest.type;
        return this.connection.onRequest(n, (r, i) => t(r, i, this.attachWorkDoneProgress(r), this.attachPartialResultProgress(n, r)));
      }, onDelta: (t) => {
        let n = no.SemanticTokensDeltaRequest.type;
        return this.connection.onRequest(n, (r, i) => t(r, i, this.attachWorkDoneProgress(r), this.attachPartialResultProgress(n, r)));
      }, onRange: (t) => {
        let n = no.SemanticTokensRangeRequest.type;
        return this.connection.onRequest(n, (r, i) => t(r, i, this.attachWorkDoneProgress(r), this.attachPartialResultProgress(n, r)));
      } };
    }
  };
  nn.SemanticTokensFeature = nb;
  var ro = class {
    originalSequence;
    modifiedSequence;
    constructor(t, n) {
      this.originalSequence = t, this.modifiedSequence = n;
    }
    computeDiff() {
      let t = this.originalSequence.length, n = this.modifiedSequence.length, r = 0;
      for (; r < n && r < t && this.originalSequence[r] === this.modifiedSequence[r]; ) r++;
      if (r < n && r < t) {
        let i = t - 1, o = n - 1;
        for (; i >= r && o >= r && this.originalSequence[i] === this.modifiedSequence[o]; ) i--, o--;
        (i < r || o < r) && (i++, o++);
        let s = i - r + 1, a = this.modifiedSequence.slice(r, o + 1);
        return a.length === 1 && a[0] === this.originalSequence[i] ? [{ start: r, deleteCount: s - 1 }] : [{ start: r, deleteCount: s, data: a }];
      } else return r < n ? [{ start: r, deleteCount: 0, data: this.modifiedSequence.slice(r) }] : r < t ? [{ start: r, deleteCount: t - r }] : [];
    }
  };
  nn.SemanticTokensDiff = ro;
  var Pc = class e {
    _id;
    _prevLine;
    _prevChar;
    _dataIsSortedAndDeltaEncoded;
    _data;
    _dataNonDelta;
    _dataLen;
    _prevData;
    constructor() {
      this._prevData = void 0, this.initialize();
    }
    initialize() {
      this._id = Date.now(), this._prevLine = 0, this._prevChar = 0, this._data = [], this._dataNonDelta = [], this._dataLen = 0, this._dataIsSortedAndDeltaEncoded = true;
    }
    push(t, n, r, i, o) {
      this._dataIsSortedAndDeltaEncoded && (t < this._prevLine || t === this._prevLine && n < this._prevChar) && (this._dataIsSortedAndDeltaEncoded = false, this._dataNonDelta = e._deltaDecode(this._data));
      let s = t, a = n;
      this._dataIsSortedAndDeltaEncoded && this._dataLen > 0 && (s -= this._prevLine, s === 0 && (a -= this._prevChar));
      let u = this._dataIsSortedAndDeltaEncoded ? this._data : this._dataNonDelta;
      u[this._dataLen++] = s, u[this._dataLen++] = a, u[this._dataLen++] = r, u[this._dataLen++] = i, u[this._dataLen++] = o, this._prevLine = t, this._prevChar = n;
    }
    get id() {
      return this._id.toString();
    }
    static _deltaDecode(t) {
      let n = t.length / 5 | 0, r = 0, i = 0, o = [];
      for (let s = 0; s < n; s++) {
        let a = 5 * s, u = t[a], c = t[a + 1];
        u === 0 ? (u = r, c += i) : u += r;
        let f = t[a + 2], v = t[a + 3], d = t[a + 4];
        o[a + 0] = u, o[a + 1] = c, o[a + 2] = f, o[a + 3] = v, o[a + 4] = d, r = u, i = c;
      }
      return o;
    }
    static _sortAndDeltaEncode(t) {
      let n = [], r = t.length / 5 | 0;
      for (let a = 0; a < r; a++) n[a] = a;
      n.sort((a, u) => {
        let c = t[5 * a], f = t[5 * u];
        if (c === f) {
          let v = t[5 * a + 1], d = t[5 * u + 1];
          return v - d;
        }
        return c - f;
      });
      let i = [], o = 0, s = 0;
      for (let a = 0; a < r; a++) {
        let u = 5 * n[a], c = t[u + 0], f = t[u + 1], v = t[u + 2], d = t[u + 3], g = t[u + 4], y = c - o, w = y === 0 ? f - s : f, S = 5 * a;
        i[S + 0] = y, i[S + 1] = w, i[S + 2] = v, i[S + 3] = d, i[S + 4] = g, o = c, s = f;
      }
      return i;
    }
    getFinalDataDelta() {
      return this._dataIsSortedAndDeltaEncoded ? this._data : e._sortAndDeltaEncode(this._dataNonDelta);
    }
    previousResult(t) {
      this.id === t && (this._prevData = this.getFinalDataDelta()), this.initialize();
    }
    build() {
      return this._prevData = void 0, { resultId: this.id, data: this.getFinalDataDelta() };
    }
    canBuildEdits() {
      return this._prevData !== void 0;
    }
    buildEdits() {
      return this._prevData !== void 0 ? { resultId: this.id, edits: new ro(this._prevData, this.getFinalDataDelta()).computeDiff() } : this.build();
    }
  };
  nn.SemanticTokensBuilder = Pc;
});
var dp = F((io) => {
  "use strict";
  Object.defineProperty(io, "__esModule", { value: true });
  io.ShowDocumentFeature = void 0;
  var rb = ye(), ib = (e) => class extends e {
    showDocument(t) {
      return this.connection.sendRequest(rb.ShowDocumentRequest.type, t);
    }
  };
  io.ShowDocumentFeature = ib;
});
var pp = F((oo) => {
  "use strict";
  Object.defineProperty(oo, "__esModule", { value: true });
  oo.FileOperationsFeature = void 0;
  var Kn = ye(), ob = (e) => class extends e {
    onDidCreateFiles(t) {
      return this.connection.onNotification(Kn.DidCreateFilesNotification.type, (n) => t(n));
    }
    onDidRenameFiles(t) {
      return this.connection.onNotification(Kn.DidRenameFilesNotification.type, (n) => t(n));
    }
    onDidDeleteFiles(t) {
      return this.connection.onNotification(Kn.DidDeleteFilesNotification.type, (n) => t(n));
    }
    onWillCreateFiles(t) {
      return this.connection.onRequest(Kn.WillCreateFilesRequest.type, (n, r) => t(n, r));
    }
    onWillRenameFiles(t) {
      return this.connection.onRequest(Kn.WillRenameFilesRequest.type, (n, r) => t(n, r));
    }
    onWillDeleteFiles(t) {
      return this.connection.onRequest(Kn.WillDeleteFilesRequest.type, (n, r) => t(n, r));
    }
  };
  oo.FileOperationsFeature = ob;
});
var hp = F((so) => {
  "use strict";
  Object.defineProperty(so, "__esModule", { value: true });
  so.LinkedEditingRangeFeature = void 0;
  var sb = ye(), ab = (e) => class extends e {
    onLinkedEditingRange(t) {
      return this.connection.onRequest(sb.LinkedEditingRangeRequest.type, (n, r) => t(n, r, this.attachWorkDoneProgress(n), void 0));
    }
  };
  so.LinkedEditingRangeFeature = ab;
});
var mp = F((ao) => {
  "use strict";
  Object.defineProperty(ao, "__esModule", { value: true });
  ao.TypeHierarchyFeature = void 0;
  var Tc = ye(), cb = (e) => class extends e {
    get typeHierarchy() {
      return { onPrepare: (t) => this.connection.onRequest(Tc.TypeHierarchyPrepareRequest.type, (n, r) => t(n, r, this.attachWorkDoneProgress(n), void 0)), onSupertypes: (t) => {
        let n = Tc.TypeHierarchySupertypesRequest.type;
        return this.connection.onRequest(n, (r, i) => t(r, i, this.attachWorkDoneProgress(r), this.attachPartialResultProgress(n, r)));
      }, onSubtypes: (t) => {
        let n = Tc.TypeHierarchySubtypesRequest.type;
        return this.connection.onRequest(n, (r, i) => t(r, i, this.attachWorkDoneProgress(r), this.attachPartialResultProgress(n, r)));
      } };
    }
  };
  ao.TypeHierarchyFeature = cb;
});
var yp = F((co) => {
  "use strict";
  Object.defineProperty(co, "__esModule", { value: true });
  co.InlineValueFeature = void 0;
  var gp = ye(), ub = (e) => class extends e {
    get inlineValue() {
      return { refresh: () => this.connection.sendRequest(gp.InlineValueRefreshRequest.type), on: (t) => this.connection.onRequest(gp.InlineValueRequest.type, (n, r) => t(n, r, this.attachWorkDoneProgress(n))) };
    }
  };
  co.InlineValueFeature = ub;
});
var vp = F((uo) => {
  "use strict";
  Object.defineProperty(uo, "__esModule", { value: true });
  uo.FoldingRangeFeature = void 0;
  var bp = ye(), lb = (e) => class extends e {
    get foldingRange() {
      return { refresh: () => this.connection.sendRequest(bp.FoldingRangeRefreshRequest.type), on: (t) => {
        let n = bp.FoldingRangeRequest.type;
        return this.connection.onRequest(n, (r, i) => t(r, i, this.attachWorkDoneProgress(r), this.attachPartialResultProgress(n, r)));
      } };
    }
  };
  uo.FoldingRangeFeature = lb;
});
var _p = F((lo) => {
  "use strict";
  Object.defineProperty(lo, "__esModule", { value: true });
  lo.InlayHintFeature = void 0;
  var kc = ye(), fb = (e) => class extends e {
    get inlayHint() {
      return { refresh: () => this.connection.sendRequest(kc.InlayHintRefreshRequest.type), on: (t) => this.connection.onRequest(kc.InlayHintRequest.type, (n, r) => t(n, r, this.attachWorkDoneProgress(n))), resolve: (t) => this.connection.onRequest(kc.InlayHintResolveRequest.type, (n, r) => t(n, r)) };
    }
  };
  lo.InlayHintFeature = fb;
});
var wp = F((fo) => {
  "use strict";
  Object.defineProperty(fo, "__esModule", { value: true });
  fo.DiagnosticFeature = void 0;
  var Er = ye(), db = (e) => class extends e {
    get diagnostics() {
      return { refresh: () => this.connection.sendRequest(Er.DiagnosticRefreshRequest.type), on: (t) => this.connection.onRequest(Er.DocumentDiagnosticRequest.type, (n, r) => t(n, r, this.attachWorkDoneProgress(n), this.attachPartialResultProgress(Er.DocumentDiagnosticRequest.partialResult, n))), onWorkspace: (t) => this.connection.onRequest(Er.WorkspaceDiagnosticRequest.type, (n, r) => t(n, r, this.attachWorkDoneProgress(n), this.attachPartialResultProgress(Er.WorkspaceDiagnosticRequest.partialResult, n))) };
    }
  };
  fo.DiagnosticFeature = db;
});
var Rc = F((po) => {
  "use strict";
  Object.defineProperty(po, "__esModule", { value: true });
  po.TextDocuments = void 0;
  var mn = ye(), Oc = class {
    _configuration;
    _syncedDocuments;
    _onDidChangeContent;
    _onDidOpen;
    _onDidClose;
    _onDidSave;
    _onWillSave;
    _willSaveWaitUntil;
    constructor(t) {
      this._configuration = t, this._syncedDocuments = /* @__PURE__ */ new Map(), this._onDidChangeContent = new mn.Emitter(), this._onDidOpen = new mn.Emitter(), this._onDidClose = new mn.Emitter(), this._onDidSave = new mn.Emitter(), this._onWillSave = new mn.Emitter();
    }
    get onDidOpen() {
      return this._onDidOpen.event;
    }
    get onDidChangeContent() {
      return this._onDidChangeContent.event;
    }
    get onWillSave() {
      return this._onWillSave.event;
    }
    onWillSaveWaitUntil(t) {
      this._willSaveWaitUntil = t;
    }
    get onDidSave() {
      return this._onDidSave.event;
    }
    get onDidClose() {
      return this._onDidClose.event;
    }
    get(t) {
      return this._syncedDocuments.get(t);
    }
    all() {
      return Array.from(this._syncedDocuments.values());
    }
    keys() {
      return Array.from(this._syncedDocuments.keys());
    }
    listen(t) {
      t.__textDocumentSync = mn.TextDocumentSyncKind.Incremental;
      let n = [];
      return n.push(t.onDidOpenTextDocument((r) => {
        let i = r.textDocument, o = this._configuration.create(i.uri, i.languageId, i.version, i.text);
        this._syncedDocuments.set(i.uri, o);
        let s = Object.freeze({ document: o });
        this._onDidOpen.fire(s), this._onDidChangeContent.fire(s);
      })), n.push(t.onDidChangeTextDocument((r) => {
        let i = r.textDocument, o = r.contentChanges;
        if (o.length === 0) return;
        let { version: s } = i;
        if (s == null) throw new Error(`Received document change event for ${i.uri} without valid version identifier`);
        let a = this._syncedDocuments.get(i.uri);
        a !== void 0 && (a = this._configuration.update(a, o, s), this._syncedDocuments.set(i.uri, a), this._onDidChangeContent.fire(Object.freeze({ document: a })));
      })), n.push(t.onDidCloseTextDocument((r) => {
        let i = this._syncedDocuments.get(r.textDocument.uri);
        i !== void 0 && (this._syncedDocuments.delete(r.textDocument.uri), this._onDidClose.fire(Object.freeze({ document: i })));
      })), n.push(t.onWillSaveTextDocument((r) => {
        let i = this._syncedDocuments.get(r.textDocument.uri);
        i !== void 0 && this._onWillSave.fire(Object.freeze({ document: i, reason: r.reason }));
      })), n.push(t.onWillSaveTextDocumentWaitUntil((r, i) => {
        let o = this._syncedDocuments.get(r.textDocument.uri);
        return o !== void 0 && this._willSaveWaitUntil ? this._willSaveWaitUntil(Object.freeze({ document: o, reason: r.reason }), i) : [];
      })), n.push(t.onDidSaveTextDocument((r) => {
        let i = this._syncedDocuments.get(r.textDocument.uri);
        i !== void 0 && this._onDidSave.fire(Object.freeze({ document: i }));
      })), mn.Disposable.create(() => {
        n.forEach((r) => r.dispose());
      });
    }
  };
  po.TextDocuments = Oc;
});
var Cc = F((er) => {
  "use strict";
  Object.defineProperty(er, "__esModule", { value: true });
  er.NotebookDocuments = er.NotebookSyncFeature = void 0;
  var st = ye(), Dp = Rc(), pb = (e) => class extends e {
    get synchronization() {
      return { onDidOpenNotebookDocument: (t) => this.connection.onNotification(st.DidOpenNotebookDocumentNotification.type, (n) => t(n)), onDidChangeNotebookDocument: (t) => this.connection.onNotification(st.DidChangeNotebookDocumentNotification.type, (n) => t(n)), onDidSaveNotebookDocument: (t) => this.connection.onNotification(st.DidSaveNotebookDocumentNotification.type, (n) => t(n)), onDidCloseNotebookDocument: (t) => this.connection.onNotification(st.DidCloseNotebookDocumentNotification.type, (n) => t(n)) };
    }
  };
  er.NotebookSyncFeature = pb;
  var Mc = class e {
    static NULL_DISPOSE = Object.freeze({ dispose: () => {
    } });
    openHandler;
    changeHandler;
    closeHandler;
    onDidOpenTextDocument(t) {
      return this.openHandler = t, st.Disposable.create(() => {
        this.openHandler = void 0;
      });
    }
    openTextDocument(t) {
      return this.openHandler && this.openHandler(t);
    }
    onDidChangeTextDocument(t) {
      return this.changeHandler = t, st.Disposable.create(() => {
        this.changeHandler = t;
      });
    }
    changeTextDocument(t) {
      return this.changeHandler && this.changeHandler(t);
    }
    onDidCloseTextDocument(t) {
      return this.closeHandler = t, st.Disposable.create(() => {
        this.closeHandler = void 0;
      });
    }
    closeTextDocument(t) {
      return this.closeHandler && this.closeHandler(t);
    }
    onWillSaveTextDocument() {
      return e.NULL_DISPOSE;
    }
    onWillSaveTextDocumentWaitUntil() {
      return e.NULL_DISPOSE;
    }
    onDidSaveTextDocument() {
      return e.NULL_DISPOSE;
    }
  }, Nc = class {
    notebookDocuments;
    notebookCellMap;
    _onDidOpen;
    _onDidSave;
    _onDidChange;
    _onDidClose;
    _cellTextDocuments;
    constructor(t) {
      t instanceof Dp.TextDocuments ? this._cellTextDocuments = t : this._cellTextDocuments = new Dp.TextDocuments(t), this.notebookDocuments = /* @__PURE__ */ new Map(), this.notebookCellMap = /* @__PURE__ */ new Map(), this._onDidOpen = new st.Emitter(), this._onDidChange = new st.Emitter(), this._onDidSave = new st.Emitter(), this._onDidClose = new st.Emitter();
    }
    get cellTextDocuments() {
      return this._cellTextDocuments;
    }
    getCellTextDocument(t) {
      return this._cellTextDocuments.get(t.document);
    }
    getNotebookDocument(t) {
      return this.notebookDocuments.get(t);
    }
    getNotebookCell(t) {
      let n = this.notebookCellMap.get(t);
      return n && n[0];
    }
    findNotebookDocumentForCell(t) {
      let n = typeof t == "string" ? t : t.document, r = this.notebookCellMap.get(n);
      return r && r[1];
    }
    get onDidOpen() {
      return this._onDidOpen.event;
    }
    get onDidSave() {
      return this._onDidSave.event;
    }
    get onDidChange() {
      return this._onDidChange.event;
    }
    get onDidClose() {
      return this._onDidClose.event;
    }
    listen(t) {
      let n = new Mc(), r = [];
      return r.push(this.cellTextDocuments.listen(n)), r.push(t.notebooks.synchronization.onDidOpenNotebookDocument(async (i) => {
        this.notebookDocuments.set(i.notebookDocument.uri, i.notebookDocument);
        for (let o of i.cellTextDocuments) await n.openTextDocument({ textDocument: o });
        this.updateCellMap(i.notebookDocument), this._onDidOpen.fire(i.notebookDocument);
      })), r.push(t.notebooks.synchronization.onDidChangeNotebookDocument(async (i) => {
        let o = this.notebookDocuments.get(i.notebookDocument.uri);
        if (o === void 0) return;
        o.version = i.notebookDocument.version;
        let s = o.metadata, a = false, u = i.change;
        u.metadata !== void 0 && (a = true, o.metadata = u.metadata);
        let c = [], f = [], v = [], d = [];
        if (u.cells !== void 0) {
          let P = u.cells;
          if (P.structure !== void 0) {
            let h = P.structure.array;
            if (o.cells.splice(h.start, h.deleteCount, ...h.cells !== void 0 ? h.cells : []), P.structure.didOpen !== void 0) for (let l of P.structure.didOpen) await n.openTextDocument({ textDocument: l }), c.push(l.uri);
            if (P.structure.didClose) for (let l of P.structure.didClose) await n.closeTextDocument({ textDocument: l }), f.push(l.uri);
          }
          if (P.data !== void 0) {
            let h = new Map(P.data.map((l) => [l.document, l]));
            for (let l = 0; l <= o.cells.length; l++) {
              let _ = h.get(o.cells[l].document);
              if (_ !== void 0) {
                let D = o.cells.splice(l, 1, _);
                if (v.push({ old: D[0], new: _ }), h.delete(_.document), h.size === 0) break;
              }
            }
          }
          if (P.textContent !== void 0) for (let h of P.textContent) await n.changeTextDocument({ textDocument: h.document, contentChanges: h.changes }), d.push(h.document.uri);
        }
        this.updateCellMap(o);
        let g = { notebookDocument: o };
        a && (g.metadata = { old: s, new: o.metadata });
        let y = [];
        for (let P of c) y.push(this.getNotebookCell(P));
        let w = [];
        for (let P of f) w.push(this.getNotebookCell(P));
        let S = [];
        for (let P of d) S.push(this.getNotebookCell(P));
        (y.length > 0 || w.length > 0 || v.length > 0 || S.length > 0) && (g.cells = { added: y, removed: w, changed: { data: v, textContent: S } }), (g.metadata !== void 0 || g.cells !== void 0) && this._onDidChange.fire(g);
      })), r.push(t.notebooks.synchronization.onDidSaveNotebookDocument((i) => {
        let o = this.notebookDocuments.get(i.notebookDocument.uri);
        o !== void 0 && this._onDidSave.fire(o);
      })), r.push(t.notebooks.synchronization.onDidCloseNotebookDocument(async (i) => {
        let o = this.notebookDocuments.get(i.notebookDocument.uri);
        if (o !== void 0) {
          this._onDidClose.fire(o);
          for (let s of i.cellTextDocuments) await n.closeTextDocument({ textDocument: s });
          this.notebookDocuments.delete(i.notebookDocument.uri);
          for (let s of o.cells) this.notebookCellMap.delete(s.document);
        }
      })), st.Disposable.create(() => {
        r.forEach((i) => i.dispose());
      });
    }
    updateCellMap(t) {
      for (let n of t.cells) this.notebookCellMap.set(n.document, [n, t]);
    }
  };
  er.NotebookDocuments = Nc;
});
var Sp = F((ho) => {
  "use strict";
  Object.defineProperty(ho, "__esModule", { value: true });
  ho.MonikerFeature = void 0;
  var hb = ye(), mb = (e) => class extends e {
    get moniker() {
      return { on: (t) => {
        let n = hb.MonikerRequest.type;
        return this.connection.onRequest(n, (r, i) => t(r, i, this.attachWorkDoneProgress(r), this.attachPartialResultProgress(n, r)));
      } };
    }
  };
  ho.MonikerFeature = mb;
});
var Pp = F((mo) => {
  "use strict";
  Object.defineProperty(mo, "__esModule", { value: true });
  mo.InlineCompletionFeature = void 0;
  var gb = ye(), yb = (e) => class extends e {
    get inlineCompletion() {
      return { on: (t) => this.connection.onRequest(gb.InlineCompletionRequest.type, (n, r) => t(n, r, this.attachWorkDoneProgress(n))) };
    }
  };
  mo.InlineCompletionFeature = yb;
});
var Tp = F((go) => {
  "use strict";
  Object.defineProperty(go, "__esModule", { value: true });
  go.TextDocumentContentFeature = void 0;
  var xp = ye(), bb = (e) => class extends e {
    get textDocumentContent() {
      return { refresh: (t) => this.connection.sendRequest(xp.TextDocumentContentRefreshRequest.type, { uri: t }), on: (t) => this.connection.onRequest(xp.TextDocumentContentRequest.type, (n, r) => t(n, r)) };
    }
  };
  go.TextDocumentContentFeature = bb;
});
var Lc = F((ie) => {
  "use strict";
  var vb = ie && ie.__createBinding || (Object.create ? (function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[n];
    } }), Object.defineProperty(e, r, i);
  }) : (function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  })), _b = ie && ie.__setModuleDefault || (Object.create ? (function(e, t) {
    Object.defineProperty(e, "default", { enumerable: true, value: t });
  }) : function(e, t) {
    e.default = t;
  }), jp = ie && ie.__importStar || /* @__PURE__ */ (function() {
    var e = function(t) {
      return e = Object.getOwnPropertyNames || function(n) {
        var r = [];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[r.length] = i);
        return r;
      }, e(t);
    };
    return function(t) {
      if (t && t.__esModule) return t;
      var n = {};
      if (t != null) for (var r = e(t), i = 0; i < r.length; i++) r[i] !== "default" && vb(n, t, r[i]);
      return _b(n, t), n;
    };
  })();
  Object.defineProperty(ie, "__esModule", { value: true });
  ie._NotebooksImpl = ie._LanguagesImpl = ie.BulkUnregistration = ie.BulkRegistration = ie.ErrorMessageTracker = void 0;
  ie.combineConsoleFeatures = Ep;
  ie.combineTelemetryFeatures = Ap;
  ie.combineTracerFeatures = qp;
  ie.combineClientFeatures = Ip;
  ie.combineWindowFeatures = Lp;
  ie.combineWorkspaceFeatures = Fp;
  ie.combineLanguagesFeatures = $p;
  ie.combineNotebooksFeatures = Vp;
  ie.combineFeatures = Ib;
  ie.createConnection = Lb;
  var L = ye(), at = jp(ti()), Ec = jp(_c()), z = cp(), wb = up(), Db = lp(), Sb = fp(), Pb = xc(), xb = dp(), Tb = pp(), kb = hp(), Ob = mp(), Rb = yp(), Mb = vp(), Nb = _p(), Cb = wp(), jb = Cc(), Eb = Sp(), Ab = Pp(), qb = Tp();
  function jc(e) {
    if (e !== null) return e;
  }
  var Ac = class {
    _messages;
    constructor() {
      this._messages = /* @__PURE__ */ Object.create(null);
    }
    add(t) {
      let n = this._messages[t];
      n || (n = 0), n++, this._messages[t] = n;
    }
    sendErrors(t) {
      Object.keys(this._messages).forEach((n) => {
        t.window.showErrorMessage(n);
      });
    }
  };
  ie.ErrorMessageTracker = Ac;
  var yo = class {
    _rawConnection;
    _connection;
    constructor() {
    }
    rawAttach(t) {
      this._rawConnection = t;
    }
    attach(t) {
      this._connection = t;
    }
    get connection() {
      if (!this._connection) throw new Error("Remote is not attached to a connection yet.");
      return this._connection;
    }
    fillServerCapabilities(t) {
    }
    initialize(t) {
    }
    error(t) {
      this.send(L.MessageType.Error, t);
    }
    warn(t) {
      this.send(L.MessageType.Warning, t);
    }
    info(t) {
      this.send(L.MessageType.Info, t);
    }
    log(t) {
      this.send(L.MessageType.Log, t);
    }
    debug(t) {
      this.send(L.MessageType.Debug, t);
    }
    send(t, n) {
      this._rawConnection && this._rawConnection.sendNotification(L.LogMessageNotification.type, { type: t, message: n }).catch(() => {
        (0, L.RAL)().console.error("Sending log message failed");
      });
    }
  }, qc = class {
    _connection;
    constructor() {
    }
    attach(t) {
      this._connection = t;
    }
    get connection() {
      if (!this._connection) throw new Error("Remote is not attached to a connection yet.");
      return this._connection;
    }
    initialize(t) {
    }
    fillServerCapabilities(t) {
    }
    showErrorMessage(t, ...n) {
      let r = { type: L.MessageType.Error, message: t, actions: n };
      return this.connection.sendRequest(L.ShowMessageRequest.type, r).then(jc);
    }
    showWarningMessage(t, ...n) {
      let r = { type: L.MessageType.Warning, message: t, actions: n };
      return this.connection.sendRequest(L.ShowMessageRequest.type, r).then(jc);
    }
    showInformationMessage(t, ...n) {
      let r = { type: L.MessageType.Info, message: t, actions: n };
      return this.connection.sendRequest(L.ShowMessageRequest.type, r).then(jc);
    }
  }, kp = (0, xb.ShowDocumentFeature)((0, z.ProgressFeature)(qc)), Op;
  (function(e) {
    function t() {
      return new bo();
    }
    e.create = t;
  })(Op || (ie.BulkRegistration = Op = {}));
  var bo = class {
    _registrations = [];
    _registered = /* @__PURE__ */ new Set();
    add(t, n) {
      let r = at.string(t) ? t : t.method;
      if (this._registered.has(r)) throw new Error(`${r} is already added to this registration`);
      let i = Ec.generateUuid();
      this._registrations.push({ id: i, method: r, registerOptions: n || {} }), this._registered.add(r);
    }
    asRegistrationParams() {
      return { registrations: this._registrations };
    }
  }, Rp;
  (function(e) {
    function t() {
      return new Ar(void 0, []);
    }
    e.create = t;
  })(Rp || (ie.BulkUnregistration = Rp = {}));
  var Ar = class {
    _connection;
    _unregistrations = /* @__PURE__ */ new Map();
    constructor(t, n) {
      this._connection = t, n.forEach((r) => {
        this._unregistrations.set(r.method, r);
      });
    }
    get isAttached() {
      return !!this._connection;
    }
    attach(t) {
      this._connection = t;
    }
    add(t) {
      this._unregistrations.set(t.method, t);
    }
    dispose() {
      let t = [];
      for (let r of this._unregistrations.values()) t.push(r);
      let n = { unregisterations: t };
      this._connection.sendRequest(L.UnregistrationRequest.type, n).catch(() => {
        this._connection.console.info("Bulk unregistration failed.");
      });
    }
    disposeSingle(t) {
      let n = at.string(t) ? t : t.method, r = this._unregistrations.get(n);
      if (!r) return false;
      let i = { unregisterations: [r] };
      return this._connection.sendRequest(L.UnregistrationRequest.type, i).then(() => {
        this._unregistrations.delete(n);
      }, (o) => {
        this._connection.console.info(`Un-registering request handler for ${r.id} failed.`);
      }), true;
    }
  }, vo = class {
    _connection;
    attach(t) {
      this._connection = t;
    }
    get connection() {
      if (!this._connection) throw new Error("Remote is not attached to a connection yet.");
      return this._connection;
    }
    initialize(t) {
    }
    fillServerCapabilities(t) {
    }
    register(t, n, r) {
      return t instanceof bo ? this.registerMany(t) : t instanceof Ar ? this.registerSingle1(t, n, r) : this.registerSingle2(t, n);
    }
    registerSingle1(t, n, r) {
      let i = at.string(n) ? n : n.method, o = Ec.generateUuid(), s = { registrations: [{ id: o, method: i, registerOptions: r || {} }] };
      return t.isAttached || t.attach(this.connection), this.connection.sendRequest(L.RegistrationRequest.type, s).then((a) => (t.add({ id: o, method: i }), t), (a) => (this.connection.console.info(`Registering request handler for ${i} failed.`), Promise.reject(a)));
    }
    registerSingle2(t, n) {
      let r = at.string(t) ? t : t.method, i = Ec.generateUuid(), o = { registrations: [{ id: i, method: r, registerOptions: n || {} }] };
      return this.connection.sendRequest(L.RegistrationRequest.type, o).then((s) => L.Disposable.create(() => {
        this.unregisterSingle(i, r).catch(() => {
          this.connection.console.info(`Un-registering capability with id ${i} failed.`);
        });
      }), (s) => (this.connection.console.info(`Registering request handler for ${r} failed.`), Promise.reject(s)));
    }
    unregisterSingle(t, n) {
      let r = { unregisterations: [{ id: t, method: n }] };
      return this.connection.sendRequest(L.UnregistrationRequest.type, r).catch(() => {
        this.connection.console.info(`Un-registering request handler for ${t} failed.`);
      });
    }
    registerMany(t) {
      let n = t.asRegistrationParams();
      return this.connection.sendRequest(L.RegistrationRequest.type, n).then(() => new Ar(this._connection, n.registrations.map((r) => ({ id: r.id, method: r.method }))), (r) => (this.connection.console.info("Bulk registration failed."), Promise.reject(r)));
    }
  }, Ic = class {
    _connection;
    constructor() {
    }
    attach(t) {
      this._connection = t;
    }
    get connection() {
      if (!this._connection) throw new Error("Remote is not attached to a connection yet.");
      return this._connection;
    }
    initialize(t) {
    }
    fillServerCapabilities(t) {
    }
    applyEdit(t) {
      function n(i) {
        return i && !!i.edit;
      }
      let r = n(t) ? t : { edit: t };
      return this.connection.sendRequest(L.ApplyWorkspaceEditRequest.type, r);
    }
  }, Mp = (0, qb.TextDocumentContentFeature)((0, Tb.FileOperationsFeature)((0, Db.WorkspaceFoldersFeature)((0, wb.ConfigurationFeature)(Ic)))), _o = class {
    _trace;
    _connection;
    constructor() {
      this._trace = L.Trace.Off;
    }
    attach(t) {
      this._connection = t;
    }
    get connection() {
      if (!this._connection) throw new Error("Remote is not attached to a connection yet.");
      return this._connection;
    }
    initialize(t) {
    }
    fillServerCapabilities(t) {
    }
    set trace(t) {
      this._trace = t;
    }
    log(t, n) {
      this._trace !== L.Trace.Off && this.connection.sendNotification(L.LogTraceNotification.type, { message: t, verbose: this._trace === L.Trace.Verbose ? n : void 0 }).catch(() => {
      });
    }
  }, wo = class {
    _connection;
    constructor() {
    }
    attach(t) {
      this._connection = t;
    }
    get connection() {
      if (!this._connection) throw new Error("Remote is not attached to a connection yet.");
      return this._connection;
    }
    initialize(t) {
    }
    fillServerCapabilities(t) {
    }
    logEvent(t) {
      this.connection.sendNotification(L.TelemetryEventNotification.type, t).catch(() => {
        this.connection.console.log("Sending TelemetryEventNotification failed");
      });
    }
  }, Do = class {
    _connection;
    constructor() {
    }
    attach(t) {
      this._connection = t;
    }
    get connection() {
      if (!this._connection) throw new Error("Remote is not attached to a connection yet.");
      return this._connection;
    }
    initialize(t) {
    }
    fillServerCapabilities(t) {
    }
    attachWorkDoneProgress(t) {
      return (0, z.attachWorkDone)(this.connection, t);
    }
    attachPartialResultProgress(t, n) {
      return (0, z.attachPartialResult)(this.connection, n);
    }
  };
  ie._LanguagesImpl = Do;
  var Np = (0, Ab.InlineCompletionFeature)((0, Mb.FoldingRangeFeature)((0, Eb.MonikerFeature)((0, Cb.DiagnosticFeature)((0, Nb.InlayHintFeature)((0, Rb.InlineValueFeature)((0, Ob.TypeHierarchyFeature)((0, kb.LinkedEditingRangeFeature)((0, Pb.SemanticTokensFeature)((0, Sb.CallHierarchyFeature)(Do)))))))))), So = class {
    _connection;
    constructor() {
    }
    attach(t) {
      this._connection = t;
    }
    get connection() {
      if (!this._connection) throw new Error("Remote is not attached to a connection yet.");
      return this._connection;
    }
    initialize(t) {
    }
    fillServerCapabilities(t) {
    }
    attachWorkDoneProgress(t) {
      return (0, z.attachWorkDone)(this.connection, t);
    }
    attachPartialResultProgress(t, n) {
      return (0, z.attachPartialResult)(this.connection, n);
    }
  };
  ie._NotebooksImpl = So;
  var Cp = (0, jb.NotebookSyncFeature)(So);
  function Ep(e, t) {
    return function(n) {
      return t(e(n));
    };
  }
  function Ap(e, t) {
    return function(n) {
      return t(e(n));
    };
  }
  function qp(e, t) {
    return function(n) {
      return t(e(n));
    };
  }
  function Ip(e, t) {
    return function(n) {
      return t(e(n));
    };
  }
  function Lp(e, t) {
    return function(n) {
      return t(e(n));
    };
  }
  function Fp(e, t) {
    return function(n) {
      return t(e(n));
    };
  }
  function $p(e, t) {
    return function(n) {
      return t(e(n));
    };
  }
  function Vp(e, t) {
    return function(n) {
      return t(e(n));
    };
  }
  function Ib(e, t) {
    function n(i, o, s) {
      return i && o ? s(i, o) : i || o;
    }
    return { __brand: "features", console: n(e.console, t.console, Ep), tracer: n(e.tracer, t.tracer, qp), telemetry: n(e.telemetry, t.telemetry, Ap), client: n(e.client, t.client, Ip), window: n(e.window, t.window, Lp), workspace: n(e.workspace, t.workspace, Fp), languages: n(e.languages, t.languages, $p), notebooks: n(e.notebooks, t.notebooks, Vp) };
  }
  function Lb(e, t, n) {
    let r = n && n.console ? new (n.console(yo))() : new yo(), i = e(r);
    r.rawAttach(i);
    let o = n && n.tracer ? new (n.tracer(_o))() : new _o(), s = n && n.telemetry ? new (n.telemetry(wo))() : new wo(), a = n && n.client ? new (n.client(vo))() : new vo(), u = n && n.window ? new (n.window(kp))() : new kp(), c = n && n.workspace ? new (n.workspace(Mp))() : new Mp(), f = n && n.languages ? new (n.languages(Np))() : new Np(), v = n && n.notebooks ? new (n.notebooks(Cp))() : new Cp(), d = [r, o, s, a, u, c, f, v];
    function g(h) {
      return h instanceof Promise ? h : at.thenable(h) ? new Promise((l, _) => {
        h.then((D) => l(D), (D) => _(D));
      }) : Promise.resolve(h);
    }
    let y, w, S, P = { listen: () => i.listen(), sendRequest: (h, ...l) => i.sendRequest(at.string(h) ? h : h.method, ...l), onRequest: (h, l) => i.onRequest(h, l), sendNotification: (h, l) => {
      let _ = at.string(h) ? h : h.method;
      return i.sendNotification(_, l);
    }, onNotification: (h, l) => i.onNotification(h, l), onProgress: i.onProgress, sendProgress: i.sendProgress, onInitialize: (h) => (w = h, { dispose: () => {
      w = void 0;
    } }), onInitialized: (h) => i.onNotification(L.InitializedNotification.type, h), onShutdown: (h) => (y = h, { dispose: () => {
      y = void 0;
    } }), onExit: (h) => (S = h, { dispose: () => {
      S = void 0;
    } }), get console() {
      return r;
    }, get telemetry() {
      return s;
    }, get tracer() {
      return o;
    }, get client() {
      return a;
    }, get window() {
      return u;
    }, get workspace() {
      return c;
    }, get languages() {
      return f;
    }, get notebooks() {
      return v;
    }, onDidChangeConfiguration: (h) => i.onNotification(L.DidChangeConfigurationNotification.type, h), onDidChangeWatchedFiles: (h) => i.onNotification(L.DidChangeWatchedFilesNotification.type, h), __textDocumentSync: void 0, onDidOpenTextDocument: (h) => i.onNotification(L.DidOpenTextDocumentNotification.type, h), onDidChangeTextDocument: (h) => i.onNotification(L.DidChangeTextDocumentNotification.type, h), onDidCloseTextDocument: (h) => i.onNotification(L.DidCloseTextDocumentNotification.type, h), onWillSaveTextDocument: (h) => i.onNotification(L.WillSaveTextDocumentNotification.type, h), onWillSaveTextDocumentWaitUntil: (h) => i.onRequest(L.WillSaveTextDocumentWaitUntilRequest.type, h), onDidSaveTextDocument: (h) => i.onNotification(L.DidSaveTextDocumentNotification.type, h), sendDiagnostics: (h) => i.sendNotification(L.PublishDiagnosticsNotification.type, h), onHover: (h) => i.onRequest(L.HoverRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), void 0)), onCompletion: (h) => i.onRequest(L.CompletionRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), (0, z.attachPartialResult)(i, l))), onCompletionResolve: (h) => i.onRequest(L.CompletionResolveRequest.type, h), onSignatureHelp: (h) => i.onRequest(L.SignatureHelpRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), void 0)), onDeclaration: (h) => i.onRequest(L.DeclarationRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), (0, z.attachPartialResult)(i, l))), onDefinition: (h) => i.onRequest(L.DefinitionRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), (0, z.attachPartialResult)(i, l))), onTypeDefinition: (h) => i.onRequest(L.TypeDefinitionRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), (0, z.attachPartialResult)(i, l))), onImplementation: (h) => i.onRequest(L.ImplementationRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), (0, z.attachPartialResult)(i, l))), onReferences: (h) => i.onRequest(L.ReferencesRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), (0, z.attachPartialResult)(i, l))), onDocumentHighlight: (h) => i.onRequest(L.DocumentHighlightRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), (0, z.attachPartialResult)(i, l))), onDocumentSymbol: (h) => i.onRequest(L.DocumentSymbolRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), (0, z.attachPartialResult)(i, l))), onWorkspaceSymbol: (h) => i.onRequest(L.WorkspaceSymbolRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), (0, z.attachPartialResult)(i, l))), onWorkspaceSymbolResolve: (h) => i.onRequest(L.WorkspaceSymbolResolveRequest.type, h), onCodeAction: (h) => i.onRequest(L.CodeActionRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), (0, z.attachPartialResult)(i, l))), onCodeActionResolve: (h) => i.onRequest(L.CodeActionResolveRequest.type, (l, _) => h(l, _)), onCodeLens: (h) => i.onRequest(L.CodeLensRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), (0, z.attachPartialResult)(i, l))), onCodeLensResolve: (h) => i.onRequest(L.CodeLensResolveRequest.type, (l, _) => h(l, _)), onDocumentFormatting: (h) => i.onRequest(L.DocumentFormattingRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), void 0)), onDocumentRangeFormatting: (h) => i.onRequest(L.DocumentRangeFormattingRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), void 0)), onDocumentRangesFormatting: (h) => i.onRequest(L.DocumentRangesFormattingRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), void 0)), onDocumentOnTypeFormatting: (h) => i.onRequest(L.DocumentOnTypeFormattingRequest.type, (l, _) => h(l, _)), onRenameRequest: (h) => i.onRequest(L.RenameRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), void 0)), onPrepareRename: (h) => i.onRequest(L.PrepareRenameRequest.type, (l, _) => h(l, _)), onDocumentLinks: (h) => i.onRequest(L.DocumentLinkRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), (0, z.attachPartialResult)(i, l))), onDocumentLinkResolve: (h) => i.onRequest(L.DocumentLinkResolveRequest.type, (l, _) => h(l, _)), onDocumentColor: (h) => i.onRequest(L.DocumentColorRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), (0, z.attachPartialResult)(i, l))), onColorPresentation: (h) => i.onRequest(L.ColorPresentationRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), (0, z.attachPartialResult)(i, l))), onFoldingRanges: (h) => i.onRequest(L.FoldingRangeRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), (0, z.attachPartialResult)(i, l))), onSelectionRanges: (h) => i.onRequest(L.SelectionRangeRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), (0, z.attachPartialResult)(i, l))), onExecuteCommand: (h) => i.onRequest(L.ExecuteCommandRequest.type, (l, _) => h(l, _, (0, z.attachWorkDone)(i, l), void 0)), dispose: () => i.dispose() };
    for (let h of d) h.attach(P);
    return i.onRequest(L.InitializeRequest.type, (h) => {
      t.initialize(h), at.string(h.trace) && (o.trace = L.Trace.fromString(h.trace));
      for (let l of d) l.initialize(h.capabilities);
      if (w) {
        let l = w(h, new L.CancellationTokenSource().token, (0, z.attachWorkDone)(i, h), void 0);
        return g(l).then((_) => {
          if (_ instanceof L.ResponseError) return _;
          let D = _;
          D || (D = { capabilities: {} });
          let m = D.capabilities;
          m || (m = {}, D.capabilities = m), m.textDocumentSync === void 0 || m.textDocumentSync === null ? m.textDocumentSync = at.number(P.__textDocumentSync) ? P.__textDocumentSync : L.TextDocumentSyncKind.None : !at.number(m.textDocumentSync) && !at.number(m.textDocumentSync.change) && (m.textDocumentSync.change = at.number(P.__textDocumentSync) ? P.__textDocumentSync : L.TextDocumentSyncKind.None);
          for (let p of d) p.fillServerCapabilities(m);
          return D;
        });
      } else {
        let l = { capabilities: { textDocumentSync: L.TextDocumentSyncKind.None } };
        for (let _ of d) _.fillServerCapabilities(l.capabilities);
        return l;
      }
    }), i.onRequest(L.ShutdownRequest.type, () => {
      if (t.shutdownReceived = true, y) return y(new L.CancellationTokenSource().token);
    }), i.onNotification(L.ExitNotification.type, () => {
      try {
        if (S) return S();
      } finally {
        t.shutdownReceived ? t.exit(0) : t.exit(1);
      }
    }), i.onNotification(L.SetTraceNotification.type, (h) => {
      o.trace = L.Trace.fromString(h.value);
    }), P;
  }
});
var Wp = F((He) => {
  "use strict";
  var Fb = He && He.__createBinding || (Object.create ? (function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[n];
    } }), Object.defineProperty(e, r, i);
  }) : (function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  })), $b = He && He.__setModuleDefault || (Object.create ? (function(e, t) {
    Object.defineProperty(e, "default", { enumerable: true, value: t });
  }) : function(e, t) {
    e.default = t;
  }), Uc = He && He.__importStar || /* @__PURE__ */ (function() {
    var e = function(t) {
      return e = Object.getOwnPropertyNames || function(n) {
        var r = [];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[r.length] = i);
        return r;
      }, e(t);
    };
    return function(t) {
      if (t && t.__esModule) return t;
      var n = {};
      if (t != null) for (var r = e(t), i = 0; i < r.length; i++) r[i] !== "default" && Fb(n, t, r[i]);
      return $b(n, t), n;
    };
  })();
  Object.defineProperty(He, "__esModule", { value: true });
  He.FileSystem = void 0;
  He.uriToFilePath = Wb;
  He.resolve = Po;
  He.resolveGlobalNodePath = Vc;
  He.resolveGlobalYarnPath = Ub;
  He.resolveModulePath = Hb;
  var Vb = Uc(fe("url")), mt = Uc(fe("path")), Fc = Uc(fe("fs")), Hc = fe("child_process");
  function Wb(e) {
    let t = Vb.parse(e);
    if (t.protocol !== "file:" || !t.path) return;
    let n = t.path.split("/");
    for (let r = 0, i = n.length; r < i; r++) n[r] = decodeURIComponent(n[r]);
    if (process.platform === "win32" && n.length > 1) {
      let r = n[0], i = n[1];
      r.length === 0 && i.length > 1 && i[1] === ":" && n.shift();
    }
    return mt.normalize(n.join("/"));
  }
  function $c() {
    return process.platform === "win32";
  }
  function Po(e, t, n, r) {
    let i = "NODE_PATH", o = ["var p = process;", "p.on('message',function(m){", "if(m.c==='e'){", "p.exit(0);", "}", "else if(m.c==='rs'){", "try{", "var r=require.resolve(m.a);", "p.send({c:'r',s:true,r:r});", "}", "catch(err){", "p.send({c:'r',s:false});", "}", "}", "});"].join("");
    return new Promise((s, a) => {
      let u = process.env, c = /* @__PURE__ */ Object.create(null);
      Object.keys(u).forEach((f) => c[f] = u[f]), t && Fc.existsSync(t) && (c[i] ? c[i] = t + mt.delimiter + c[i] : c[i] = t, r && r(`NODE_PATH value is: ${c[i]}`)), c.ELECTRON_RUN_AS_NODE = "1";
      try {
        let f = (0, Hc.fork)("", [], { cwd: n, env: c, execArgv: ["-e", o] });
        if (f.pid === void 0) {
          a(new Error(`Starting process to resolve node module  ${e} failed`));
          return;
        }
        f.on("error", (d) => {
          a(d);
        }), f.on("message", (d) => {
          d.c === "r" && (f.send({ c: "e" }), d.s ? s(d.r) : a(new Error(`Failed to resolve module: ${e}`)));
        });
        let v = { c: "rs", a: e };
        f.send(v);
      } catch (f) {
        a(f);
      }
    });
  }
  function Vc(e) {
    let t = "npm", n = /* @__PURE__ */ Object.create(null);
    Object.keys(process.env).forEach((o) => n[o] = process.env[o]), n.NO_UPDATE_NOTIFIER = "true";
    let r = { encoding: "utf8", env: n };
    $c() && (t = "npm.cmd", r.shell = true);
    let i = () => {
    };
    try {
      process.on("SIGPIPE", i);
      let o = (0, Hc.spawnSync)(t, ["config", "get", "prefix"], r).stdout;
      if (!o) {
        e && e("'npm config get prefix' didn't return a value.");
        return;
      }
      let s = o.trim();
      return e && e(`'npm config get prefix' value is: ${s}`), s.length > 0 ? $c() ? mt.join(s, "node_modules") : mt.join(s, "lib", "node_modules") : void 0;
    } catch {
      return;
    } finally {
      process.removeListener("SIGPIPE", i);
    }
  }
  function Ub(e) {
    let t = "yarn", n = { encoding: "utf8" };
    $c() && (t = "yarn.cmd", n.shell = true);
    let r = () => {
    };
    try {
      process.on("SIGPIPE", r);
      let i = (0, Hc.spawnSync)(t, ["global", "dir", "--json"], n), o = i.stdout;
      if (!o) {
        e && (e("'yarn global dir' didn't return a value."), i.stderr && e(i.stderr));
        return;
      }
      let s = o.trim().split(/\r?\n/);
      for (let a of s) try {
        let u = JSON.parse(a);
        if (u.type === "log") return mt.join(u.data, "node_modules");
      } catch {
      }
      return;
    } catch {
      return;
    } finally {
      process.removeListener("SIGPIPE", r);
    }
  }
  var Wc;
  (function(e) {
    let t;
    function n() {
      return t !== void 0 || (process.platform === "win32" ? t = false : t = !Fc.existsSync(__filename.toUpperCase()) || !Fc.existsSync(__filename.toLowerCase())), t;
    }
    e.isCaseSensitive = n;
    function r(i, o) {
      return n() ? mt.normalize(o).indexOf(mt.normalize(i)) === 0 : mt.normalize(o).toLowerCase().indexOf(mt.normalize(i).toLowerCase()) === 0;
    }
    e.isParent = r;
  })(Wc || (He.FileSystem = Wc = {}));
  function Hb(e, t, n, r) {
    return n ? (mt.isAbsolute(n) || (n = mt.join(e, n)), Po(t, n, n, r).then((i) => Wc.isParent(n, i) ? i : Promise.reject(new Error(`Failed to load ${t} from node path location.`))).then(void 0, (i) => Po(t, Vc(r), e, r))) : Po(t, Vc(r), e, r);
  }
});
var Bp = F((Xc) => {
  "use strict";
  Object.defineProperty(Xc, "__esModule", { value: true });
  var Up = fe("util"), qt = Rt(), Bc = class e extends qt.AbstractMessageBuffer {
    static emptyBuffer = Buffer.allocUnsafe(0);
    constructor(t = "utf-8") {
      super(t);
    }
    emptyBuffer() {
      return e.emptyBuffer;
    }
    fromString(t, n) {
      return Buffer.from(t, n);
    }
    toString(t, n) {
      return t instanceof Buffer ? t.toString(n) : new Up.TextDecoder(n).decode(t);
    }
    asNative(t, n) {
      return n === void 0 ? t instanceof Buffer ? t : Buffer.from(t) : t instanceof Buffer ? t.slice(0, n) : Buffer.from(t, 0, n);
    }
    allocNative(t) {
      return Buffer.allocUnsafe(t);
    }
  }, zc = class {
    stream;
    constructor(t) {
      this.stream = t;
    }
    onClose(t) {
      return this.stream.on("close", t), qt.Disposable.create(() => this.stream.off("close", t));
    }
    onError(t) {
      return this.stream.on("error", t), qt.Disposable.create(() => this.stream.off("error", t));
    }
    onEnd(t) {
      return this.stream.on("end", t), qt.Disposable.create(() => this.stream.off("end", t));
    }
    onData(t) {
      return this.stream.on("data", t), qt.Disposable.create(() => this.stream.off("data", t));
    }
  }, Jc = class {
    stream;
    constructor(t) {
      this.stream = t;
    }
    onClose(t) {
      return this.stream.on("close", t), qt.Disposable.create(() => this.stream.off("close", t));
    }
    onError(t) {
      return this.stream.on("error", t), qt.Disposable.create(() => this.stream.off("error", t));
    }
    onEnd(t) {
      return this.stream.on("end", t), qt.Disposable.create(() => this.stream.off("end", t));
    }
    write(t, n) {
      return new Promise((r, i) => {
        let o = (s) => {
          s == null ? r() : i(s);
        };
        typeof t == "string" ? this.stream.write(t, n, o) : this.stream.write(t, o);
      });
    }
    end() {
      this.stream.end();
    }
  }, Hp = Object.freeze({ messageBuffer: Object.freeze({ create: (e) => new Bc(e) }), applicationJson: Object.freeze({ encoder: Object.freeze({ name: "application/json", encode: (e, t) => {
    try {
      return Promise.resolve(Buffer.from(JSON.stringify(e, void 0, 0), t.charset));
    } catch (n) {
      return Promise.reject(n);
    }
  } }), decoder: Object.freeze({ name: "application/json", decode: (e, t) => {
    try {
      return e instanceof Buffer ? Promise.resolve(JSON.parse(e.toString(t.charset))) : Promise.resolve(JSON.parse(new Up.TextDecoder(t.charset).decode(e)));
    } catch (n) {
      return Promise.reject(n);
    }
  } }) }), stream: Object.freeze({ asReadableStream: (e) => new zc(e), asWritableStream: (e) => new Jc(e) }), console, timer: Object.freeze({ setTimeout(e, t, ...n) {
    let r = setTimeout(e, t, ...n);
    return { dispose: () => clearTimeout(r) };
  }, setImmediate(e, ...t) {
    let n = setImmediate(e, ...t);
    return { dispose: () => clearImmediate(n) };
  }, setInterval(e, t, ...n) {
    let r = setInterval(e, t, ...n);
    return { dispose: () => clearInterval(r) };
  } }) });
  function Gc() {
    return Hp;
  }
  (function(e) {
    function t() {
      qt.RAL.install(Hp);
    }
    e.install = t;
  })(Gc || (Gc = {}));
  Xc.default = Gc;
});
var tu = F((Q) => {
  "use strict";
  var Jp = Q && Q.__createBinding || (Object.create ? (function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[n];
    } }), Object.defineProperty(e, r, i);
  }) : (function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  })), Bb = Q && Q.__setModuleDefault || (Object.create ? (function(e, t) {
    Object.defineProperty(e, "default", { enumerable: true, value: t });
  }) : function(e, t) {
    e.default = t;
  }), eu = Q && Q.__importStar || /* @__PURE__ */ (function() {
    var e = function(t) {
      return e = Object.getOwnPropertyNames || function(n) {
        var r = [];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[r.length] = i);
        return r;
      }, e(t);
    };
    return function(t) {
      if (t && t.__esModule) return t;
      var n = {};
      if (t != null) for (var r = e(t), i = 0; i < r.length; i++) r[i] !== "default" && Jp(n, t, r[i]);
      return Bb(n, t), n;
    };
  })(), zb = Q && Q.__exportStar || function(e, t) {
    for (var n in e) n !== "default" && !Object.prototype.hasOwnProperty.call(t, n) && Jp(t, e, n);
  }, Jb = Q && Q.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(Q, "__esModule", { value: true });
  Q.StreamMessageWriter = Q.StreamMessageReader = Q.SocketMessageWriter = Q.SocketMessageReader = Q.PortMessageWriter = Q.PortMessageReader = Q.IPCMessageWriter = Q.IPCMessageReader = void 0;
  Q.generateRandomPipeName = Kb;
  Q.createClientPipeTransport = ev;
  Q.createServerPipeTransport = tv;
  Q.createClientSocketTransport = nv;
  Q.createServerSocketTransport = rv;
  Q.createMessageConnection = sv;
  var qr = Jb(Bp());
  qr.default.install();
  var Gb = eu(fe("path")), Xb = eu(fe("os")), Zb = eu(fe("fs")), zp = fe("crypto"), ko = fe("net"), tt = Rt();
  zb(Rt(), Q);
  var Zc = class extends tt.AbstractMessageReader {
    process;
    constructor(t) {
      super(), this.process = t;
      let n = this.process;
      n.on("error", (r) => this.fireError(r)), n.on("close", () => this.fireClose());
    }
    listen(t) {
      return this.process.on("message", t), tt.Disposable.create(() => this.process.off("message", t));
    }
  };
  Q.IPCMessageReader = Zc;
  var Qc = class extends tt.AbstractMessageWriter {
    process;
    errorCount;
    constructor(t) {
      super(), this.process = t, this.errorCount = 0;
      let n = this.process;
      n.on("error", (r) => this.fireError(r)), n.on("close", () => this.fireClose);
    }
    write(t) {
      try {
        return typeof this.process.send == "function" && this.process.send(t, void 0, void 0, (n) => {
          n ? (this.errorCount++, this.handleError(n, t)) : this.errorCount = 0;
        }), Promise.resolve();
      } catch (n) {
        return this.handleError(n, t), Promise.reject(n);
      }
    }
    handleError(t, n) {
      this.errorCount++, this.fireError(t, n, this.errorCount);
    }
    end() {
    }
  };
  Q.IPCMessageWriter = Qc;
  var Yc = class extends tt.AbstractMessageReader {
    onData;
    constructor(t) {
      super(), this.onData = new tt.Emitter(), t.on("close", () => this.fireClose), t.on("error", (n) => this.fireError(n)), t.on("message", (n) => {
        this.onData.fire(n);
      });
    }
    listen(t) {
      return this.onData.event(t);
    }
  };
  Q.PortMessageReader = Yc;
  var Kc = class extends tt.AbstractMessageWriter {
    port;
    errorCount;
    constructor(t) {
      super(), this.port = t, this.errorCount = 0, t.on("close", () => this.fireClose()), t.on("error", (n) => this.fireError(n));
    }
    write(t) {
      try {
        return this.port.postMessage(t), Promise.resolve();
      } catch (n) {
        return this.handleError(n, t), Promise.reject(n);
      }
    }
    handleError(t, n) {
      this.errorCount++, this.fireError(t, n, this.errorCount);
    }
    end() {
    }
  };
  Q.PortMessageWriter = Kc;
  var gn = class extends tt.ReadableStreamMessageReader {
    constructor(t, n = "utf-8") {
      super((0, qr.default)().stream.asReadableStream(t), n);
    }
  };
  Q.SocketMessageReader = gn;
  var yn = class extends tt.WriteableStreamMessageWriter {
    socket;
    constructor(t, n) {
      super((0, qr.default)().stream.asWritableStream(t), n), this.socket = t;
    }
    dispose() {
      super.dispose(), this.socket.destroy();
    }
  };
  Q.SocketMessageWriter = yn;
  var xo = class extends tt.ReadableStreamMessageReader {
    constructor(t, n) {
      super((0, qr.default)().stream.asReadableStream(t), n);
    }
  };
  Q.StreamMessageReader = xo;
  var To = class extends tt.WriteableStreamMessageWriter {
    constructor(t, n) {
      super((0, qr.default)().stream.asWritableStream(t), n);
    }
  };
  Q.StreamMessageWriter = To;
  var Qb = process.env.XDG_RUNTIME_DIR, Yb = /* @__PURE__ */ new Map([["linux", 107], ["darwin", 102]]);
  function Kb() {
    if (process.platform === "win32") return `\\\\.\\pipe\\lsp-${(0, zp.randomBytes)(16).toString("hex")}-sock`;
    let e = 32, t = 10, n = Zb.realpathSync(Qb ?? Xb.tmpdir()), r = Yb.get(process.platform);
    if (r !== void 0 && (e = Math.min(r - n.length - t, e)), e < 16) throw new Error(`Unable to generate a random pipe name with ${e} characters.`);
    let i = (0, zp.randomBytes)(Math.floor(e / 2)).toString("hex");
    return Gb.join(n, `lsp-${i}.sock`);
  }
  function ev(e, t = "utf-8") {
    let n, r = new Promise((i, o) => {
      n = i;
    });
    return new Promise((i, o) => {
      let s = (0, ko.createServer)((a) => {
        s.close(), n([new gn(a, t), new yn(a, t)]);
      });
      s.on("error", o), s.listen(e, () => {
        s.removeListener("error", o), i({ onConnected: () => r });
      });
    });
  }
  function tv(e, t = "utf-8") {
    let n = (0, ko.createConnection)(e);
    return [new gn(n, t), new yn(n, t)];
  }
  function nv(e, t = "utf-8") {
    let n, r = new Promise((i, o) => {
      n = i;
    });
    return new Promise((i, o) => {
      let s = (0, ko.createServer)((a) => {
        s.close(), n([new gn(a, t), new yn(a, t)]);
      });
      s.on("error", o), s.listen(e, "127.0.0.1", () => {
        s.removeListener("error", o), i({ onConnected: () => r });
      });
    });
  }
  function rv(e, t = "utf-8") {
    let n = (0, ko.createConnection)(e, "127.0.0.1");
    return [new gn(n, t), new yn(n, t)];
  }
  function iv(e) {
    let t = e;
    return t.read !== void 0 && t.addListener !== void 0;
  }
  function ov(e) {
    let t = e;
    return t.write !== void 0 && t.addListener !== void 0;
  }
  function sv(e, t, n, r) {
    n || (n = tt.NullLogger);
    let i = iv(e) ? new xo(e) : e, o = ov(t) ? new To(t) : t;
    return tt.ConnectionStrategy.is(r) && (r = { connectionStrategy: r }), (0, tt.createMessageConnection)(i, o, n, r);
  }
});
var nu = F((It) => {
  "use strict";
  var av = It && It.__createBinding || (Object.create ? (function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[n];
    } }), Object.defineProperty(e, r, i);
  }) : (function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  })), Gp = It && It.__exportStar || function(e, t) {
    for (var n in e) n !== "default" && !Object.prototype.hasOwnProperty.call(t, n) && av(t, e, n);
  };
  Object.defineProperty(It, "__esModule", { value: true });
  It.createProtocolConnection = uv;
  var cv = tu();
  Gp(tu(), It);
  Gp(ye(), It);
  function uv(e, t, n, r) {
    return (0, cv.createMessageConnection)(e, t, n, r);
  }
});
var Ir = F((We) => {
  "use strict";
  var lv = We && We.__createBinding || (Object.create ? (function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[n];
    } }), Object.defineProperty(e, r, i);
  }) : (function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  })), Zp = We && We.__exportStar || function(e, t) {
    for (var n in e) n !== "default" && !Object.prototype.hasOwnProperty.call(t, n) && lv(t, e, n);
  };
  Object.defineProperty(We, "__esModule", { value: true });
  We.ProposedFeatures = We.NotebookDocuments = We.TextDocuments = We.SemanticTokensBuilder = void 0;
  var fv = xc();
  Object.defineProperty(We, "SemanticTokensBuilder", { enumerable: true, get: function() {
    return fv.SemanticTokensBuilder;
  } });
  Zp(ye(), We);
  var dv = Rc();
  Object.defineProperty(We, "TextDocuments", { enumerable: true, get: function() {
    return dv.TextDocuments;
  } });
  var pv = Cc();
  Object.defineProperty(We, "NotebookDocuments", { enumerable: true, get: function() {
    return pv.NotebookDocuments;
  } });
  Zp(Lc(), We);
  var Xp;
  (function(e) {
    e.all = { __brand: "features" };
  })(Xp || (We.ProposedFeatures = Xp = {}));
});
var ih = F((Be) => {
  "use strict";
  var eh = Be && Be.__createBinding || (Object.create ? (function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[n];
    } }), Object.defineProperty(e, r, i);
  }) : (function(e, t, n, r) {
    r === void 0 && (r = n), e[r] = t[n];
  })), hv = Be && Be.__setModuleDefault || (Object.create ? (function(e, t) {
    Object.defineProperty(e, "default", { enumerable: true, value: t });
  }) : function(e, t) {
    e.default = t;
  }), th = Be && Be.__importStar || /* @__PURE__ */ (function() {
    var e = function(t) {
      return e = Object.getOwnPropertyNames || function(n) {
        var r = [];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[r.length] = i);
        return r;
      }, e(t);
    };
    return function(t) {
      if (t && t.__esModule) return t;
      var n = {};
      if (t != null) for (var r = e(t), i = 0; i < r.length; i++) r[i] !== "default" && eh(n, t, r[i]);
      return hv(n, t), n;
    };
  })(), nh = Be && Be.__exportStar || function(e, t) {
    for (var n in e) n !== "default" && !Object.prototype.hasOwnProperty.call(t, n) && eh(t, e, n);
  };
  Object.defineProperty(Be, "__esModule", { value: true });
  Be.Files = void 0;
  Be.createConnection = bv;
  var Qp = fe("node:util"), ru = th(ti()), mv = Lc(), Lr = th(Wp()), bn = nu();
  nh(nu(), Be);
  nh(Ir(), Be);
  var Yp;
  (function(e) {
    e.uriToFilePath = Lr.uriToFilePath, e.resolveGlobalNodePath = Lr.resolveGlobalNodePath, e.resolveGlobalYarnPath = Lr.resolveGlobalYarnPath, e.resolve = Lr.resolve, e.resolveModulePath = Lr.resolveModulePath;
  })(Yp || (Be.Files = Yp = {}));
  var Kp;
  function Oo() {
    if (Kp !== void 0) try {
      Kp.end();
    } catch {
    }
  }
  var tr = false, rh;
  function gv() {
    let e = "--clientProcessId";
    function t(n) {
      try {
        let r = parseInt(n);
        isNaN(r) || (rh = setInterval(() => {
          try {
            process.kill(r, 0);
          } catch {
            Oo(), process.exit(tr ? 0 : 1);
          }
        }, 3e3));
      } catch {
      }
    }
    for (let n = 2; n < process.argv.length; n++) {
      let r = process.argv[n];
      if (r === e && n + 1 < process.argv.length) {
        t(process.argv[n + 1]);
        return;
      } else {
        let i = r.split("=");
        i[0] === e && t(i[1]);
      }
    }
  }
  gv();
  var yv = { initialize: (e) => {
    let t = e.processId;
    ru.number(t) && rh === void 0 && setInterval(() => {
      try {
        process.kill(t, 0);
      } catch {
        process.exit(tr ? 0 : 1);
      }
    }, 3e3);
  }, get shutdownReceived() {
    return tr;
  }, set shutdownReceived(e) {
    tr = e;
  }, exit: (e) => {
    Oo(), process.exit(e);
  } };
  function bv(e, t, n, r) {
    let i, o, s, a;
    return e !== void 0 && e.__brand === "features" && (i = e, e = t, t = n, n = r), bn.ConnectionStrategy.is(e) || bn.ConnectionOptions.is(e) ? a = e : (o = e, s = t, a = n), vv(o, s, a, i);
  }
  function vv(e, t, n, r) {
    let i = false;
    if (!e && !t && process.argv.length > 2) {
      let a, u, c = process.argv.slice(2);
      for (let f = 0; f < c.length; f++) {
        let v = c[f];
        if (v === "--node-ipc") {
          e = new bn.IPCMessageReader(process), t = new bn.IPCMessageWriter(process);
          break;
        } else if (v === "--stdio") {
          i = true, e = process.stdin, t = process.stdout;
          break;
        } else if (v === "--socket") {
          a = parseInt(c[f + 1]);
          break;
        } else if (v === "--pipe") {
          u = c[f + 1];
          break;
        } else {
          let d = v.split("=");
          if (d[0] === "--socket") {
            a = parseInt(d[1]);
            break;
          } else if (d[0] === "--pipe") {
            u = d[1];
            break;
          }
        }
      }
      if (a) {
        let f = (0, bn.createServerSocketTransport)(a);
        e = f[0], t = f[1];
      } else if (u) {
        let f = (0, bn.createServerPipeTransport)(u);
        e = f[0], t = f[1];
      }
    }
    let o = "Use arguments of createConnection or set command line parameters: '--node-ipc', '--stdio' or '--socket={number}'";
    if (!e) throw new Error("Connection input stream is not set. " + o);
    if (!t) throw new Error("Connection output stream is not set. " + o);
    if (ru.func(e.read) && ru.func(e.on)) {
      let a = e;
      a.on("end", () => {
        Oo(), process.exit(tr ? 0 : 1);
      }), a.on("close", () => {
        Oo(), process.exit(tr ? 0 : 1);
      });
    }
    let s = (a) => {
      let u = (0, bn.createProtocolConnection)(e, t, a, n);
      return i && _v(a), u;
    };
    return (0, mv.createConnection)(s, yv, r);
  }
  function _v(e) {
    function t(r) {
      return r.map((i) => typeof i == "string" ? i : (0, Qp.inspect)(i)).join(" ");
    }
    let n = /* @__PURE__ */ new Map();
    console.assert = function(i, ...o) {
      if (!i) if (o.length === 0) e.error("Assertion failed");
      else {
        let [s, ...a] = o;
        e.error(`Assertion failed: ${s} ${t(a)}`);
      }
    }, console.count = function(i = "default") {
      let o = String(i), s = n.get(o) ?? 0;
      s += 1, n.set(o, s), e.log(`${o}: ${o}`);
    }, console.countReset = function(i) {
      i === void 0 ? n.clear() : n.delete(String(i));
    }, console.debug = function(...i) {
      e.log(t(i));
    }, console.dir = function(i, o) {
      e.log((0, Qp.inspect)(i, o));
    }, console.log = function(...i) {
      e.log(t(i));
    }, console.error = function(...i) {
      e.error(t(i));
    }, console.trace = function(...i) {
      let o = new Error().stack.replace(/(.+\n){2}/, ""), s = "Trace";
      i.length !== 0 && (s += `: ${t(i)}`), e.log(`${s}
${o}`);
    }, console.warn = function(...i) {
      e.warn(t(i));
    };
  }
});
function nr(e, t) {
  if (t instanceof Error) {
    let n = t;
    return `${e}: ${n.message}
${n.stack}`;
  } else {
    if (typeof t == "string") return `${e}: ${t}`;
    if (t) return `${e}: ${t.toString()}`;
  }
  return e;
}
function rn(e, t, n, r, i) {
  return new Promise((o) => {
    e.timer.setImmediate(() => {
      if (i.isCancellationRequested) {
        o(Ro());
        return;
      }
      return t().then((s) => {
        if (i.isCancellationRequested) {
          o(Ro());
          return;
        } else o(s);
      }, (s) => {
        console.error(nr(r, s)), o(n);
      });
    });
  });
}
function vn(e, t, n, r, i) {
  return new Promise((o) => {
    e.timer.setImmediate(() => {
      if (i.isCancellationRequested) o(Ro());
      else try {
        let s = t();
        if (i.isCancellationRequested) {
          o(Ro());
          return;
        } else o(s);
      } catch (s) {
        console.error(nr(r, s)), o(n);
      }
    });
  });
}
function Ro() {
  return console.log("cancelled"), new Mo.ResponseError(Mo.LSPErrorCodes.RequestCancelled, "Request cancelled");
}
var Mo, No = Z(() => {
  "use strict";
  Mo = ze(Ir());
});
function sh(e, t, n, r) {
  let i = {}, s = [];
  e.onDidChangeContent((c) => {
    u(c.document);
  }, void 0, s), e.onDidClose((c) => {
    a(c.document), t.sendDiagnostics({ uri: c.document.uri, diagnostics: [] });
  }, void 0, s);
  function a(c) {
    let f = i[c.uri];
    f && (f.dispose(), delete i[c.uri]);
  }
  function u(c) {
    a(c);
    let f = i[c.uri] = n.timer.setTimeout(async () => {
      if (f === i[c.uri]) try {
        let v = await r(c);
        f === i[c.uri] && t.sendDiagnostics({ uri: c.uri, diagnostics: v }), delete i[c.uri];
      } catch (v) {
        t.console.error(nr(`Error while validating ${c.uri}`, v));
      }
    }, 500);
  }
  return { requestRefresh: () => {
    e.all().forEach(u);
  }, dispose: () => {
    s.forEach((f) => f.dispose()), s.length = 0;
    let c = Object.keys(i);
    for (let f of c) i[f].dispose(), delete i[f];
  } };
}
function ah(e, t, n, r) {
  function i(a) {
    return { kind: oh.DocumentDiagnosticReportKind.Full, items: a };
  }
  let o = t.languages.diagnostics.on(async (a, u) => rn(n, async () => {
    let c = e.get(a.textDocument.uri);
    return i(c ? await r(c) : []);
  }, i([]), `Error while computing diagnostics for ${a.textDocument.uri}`, u));
  function s() {
    t.languages.diagnostics.refresh();
  }
  return { requestRefresh: s, dispose: () => {
    o.dispose();
  } };
}
var oh, ch = Z(() => {
  "use strict";
  oh = ze(Ir());
  No();
});
function ir(e, t = false) {
  let n = e.length, r = 0, i = "", o = 0, s = 16, a = 0, u = 0, c = 0, f = 0, v = 0;
  function d(l, _) {
    let D = 0, m = 0;
    for (; D < l || !_; ) {
      let p = e.charCodeAt(r);
      if (p >= 48 && p <= 57) m = m * 16 + p - 48;
      else if (p >= 65 && p <= 70) m = m * 16 + p - 65 + 10;
      else if (p >= 97 && p <= 102) m = m * 16 + p - 97 + 10;
      else break;
      r++, D++;
    }
    return D < l && (m = -1), m;
  }
  function g(l) {
    r = l, i = "", o = 0, s = 16, v = 0;
  }
  function y() {
    let l = r;
    if (e.charCodeAt(r) === 48) r++;
    else for (r++; r < e.length && rr(e.charCodeAt(r)); ) r++;
    if (r < e.length && e.charCodeAt(r) === 46) if (r++, r < e.length && rr(e.charCodeAt(r))) for (r++; r < e.length && rr(e.charCodeAt(r)); ) r++;
    else return v = 3, e.substring(l, r);
    let _ = r;
    if (r < e.length && (e.charCodeAt(r) === 69 || e.charCodeAt(r) === 101)) if (r++, (r < e.length && e.charCodeAt(r) === 43 || e.charCodeAt(r) === 45) && r++, r < e.length && rr(e.charCodeAt(r))) {
      for (r++; r < e.length && rr(e.charCodeAt(r)); ) r++;
      _ = r;
    } else v = 3;
    return e.substring(l, _);
  }
  function w() {
    let l = "", _ = r;
    for (; ; ) {
      if (r >= n) {
        l += e.substring(_, r), v = 2;
        break;
      }
      let D = e.charCodeAt(r);
      if (D === 34) {
        l += e.substring(_, r), r++;
        break;
      }
      if (D === 92) {
        if (l += e.substring(_, r), r++, r >= n) {
          v = 2;
          break;
        }
        switch (e.charCodeAt(r++)) {
          case 34:
            l += '"';
            break;
          case 92:
            l += "\\";
            break;
          case 47:
            l += "/";
            break;
          case 98:
            l += "\b";
            break;
          case 102:
            l += "\f";
            break;
          case 110:
            l += `
`;
            break;
          case 114:
            l += "\r";
            break;
          case 116:
            l += "	";
            break;
          case 117:
            let p = d(4, true);
            p >= 0 ? l += String.fromCharCode(p) : v = 4;
            break;
          default:
            v = 5;
        }
        _ = r;
        continue;
      }
      if (D >= 0 && D <= 31) if (Fr(D)) {
        l += e.substring(_, r), v = 2;
        break;
      } else v = 6;
      r++;
    }
    return l;
  }
  function S() {
    if (i = "", v = 0, o = r, u = a, f = c, r >= n) return o = n, s = 17;
    let l = e.charCodeAt(r);
    if (iu(l)) {
      do
        r++, i += String.fromCharCode(l), l = e.charCodeAt(r);
      while (iu(l));
      return s = 15;
    }
    if (Fr(l)) return r++, i += String.fromCharCode(l), l === 13 && e.charCodeAt(r) === 10 && (r++, i += `
`), a++, c = r, s = 14;
    switch (l) {
      case 123:
        return r++, s = 1;
      case 125:
        return r++, s = 2;
      case 91:
        return r++, s = 3;
      case 93:
        return r++, s = 4;
      case 58:
        return r++, s = 6;
      case 44:
        return r++, s = 5;
      case 34:
        return r++, i = w(), s = 10;
      case 47:
        let _ = r - 1;
        if (e.charCodeAt(r + 1) === 47) {
          for (r += 2; r < n && !Fr(e.charCodeAt(r)); ) r++;
          return i = e.substring(_, r), s = 12;
        }
        if (e.charCodeAt(r + 1) === 42) {
          r += 2;
          let D = n - 1, m = false;
          for (; r < D; ) {
            let p = e.charCodeAt(r);
            if (p === 42 && e.charCodeAt(r + 1) === 47) {
              r += 2, m = true;
              break;
            }
            r++, Fr(p) && (p === 13 && e.charCodeAt(r) === 10 && r++, a++, c = r);
          }
          return m || (r++, v = 1), i = e.substring(_, r), s = 13;
        }
        return i += String.fromCharCode(l), r++, s = 16;
      case 45:
        if (i += String.fromCharCode(l), r++, r === n || !rr(e.charCodeAt(r))) return s = 16;
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return i += y(), s = 11;
      default:
        for (; r < n && P(l); ) r++, l = e.charCodeAt(r);
        if (o !== r) {
          switch (i = e.substring(o, r), i) {
            case "true":
              return s = 8;
            case "false":
              return s = 9;
            case "null":
              return s = 7;
          }
          return s = 16;
        }
        return i += String.fromCharCode(l), r++, s = 16;
    }
  }
  function P(l) {
    if (iu(l) || Fr(l)) return false;
    switch (l) {
      case 125:
      case 93:
      case 123:
      case 91:
      case 34:
      case 58:
      case 44:
      case 47:
        return false;
    }
    return true;
  }
  function h() {
    let l;
    do
      l = S();
    while (l >= 12 && l <= 15);
    return l;
  }
  return { setPosition: g, getPosition: () => r, scan: t ? h : S, getToken: () => s, getTokenValue: () => i, getTokenOffset: () => o, getTokenLength: () => r - o, getTokenStartLine: () => u, getTokenStartCharacter: () => o - f, getTokenError: () => v };
}
function iu(e) {
  return e === 32 || e === 9;
}
function Fr(e) {
  return e === 10 || e === 13;
}
function rr(e) {
  return e >= 48 && e <= 57;
}
var uh, Co = Z(() => {
  "use strict";
  (function(e) {
    e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.space = 32] = "space", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.asterisk = 42] = "asterisk", e[e.backslash = 92] = "backslash", e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", e[e.plus = 43] = "plus", e[e.slash = 47] = "slash", e[e.formFeed = 12] = "formFeed", e[e.tab = 9] = "tab";
  })(uh || (uh = {}));
});
var nt, or, ou, lh, fh = Z(() => {
  "use strict";
  nt = new Array(20).fill(0).map((e, t) => " ".repeat(t)), or = 200, ou = { " ": { "\n": new Array(or).fill(0).map((e, t) => `
` + " ".repeat(t)), "\r": new Array(or).fill(0).map((e, t) => "\r" + " ".repeat(t)), "\r\n": new Array(or).fill(0).map((e, t) => `\r
` + " ".repeat(t)) }, "	": { "\n": new Array(or).fill(0).map((e, t) => `
` + "	".repeat(t)), "\r": new Array(or).fill(0).map((e, t) => "\r" + "	".repeat(t)), "\r\n": new Array(or).fill(0).map((e, t) => `\r
` + "	".repeat(t)) } }, lh = [`
`, "\r", `\r
`];
});
function au(e, t, n) {
  let r, i, o, s, a;
  if (t) {
    for (s = t.offset, a = s + t.length, o = s; o > 0 && !su(e, o - 1); ) o--;
    let D = a;
    for (; D < e.length && !su(e, D); ) D++;
    i = e.substring(o, D), r = Dv(i, n);
  } else i = e, r = 0, o = 0, s = 0, a = e.length;
  let u = Sv(n, e), c = lh.includes(u), f = 0, v = 0, d;
  n.insertSpaces ? d = nt[n.tabSize || 4] ?? sr(nt[1], n.tabSize || 4) : d = "	";
  let g = d === "	" ? "	" : " ", y = ir(i, false), w = false;
  function S() {
    if (f > 1) return sr(u, f) + sr(d, r + v);
    let D = d.length * (r + v);
    return !c || D > ou[g][u].length ? u + sr(d, r + v) : D <= 0 ? u : ou[g][u][D];
  }
  function P() {
    let D = y.scan();
    for (f = 0; D === 15 || D === 14; ) D === 14 && n.keepLines ? f += 1 : D === 14 && (f = 1), D = y.scan();
    return w = D === 16 || y.getTokenError() !== 0, D;
  }
  let h = [];
  function l(D, m, p) {
    !w && (!t || m < a && p > s) && e.substring(m, p) !== D && h.push({ offset: m, length: p - m, content: D });
  }
  let _ = P();
  if (n.keepLines && f > 0 && l(sr(u, f), 0, 0), _ !== 17) {
    let D = y.getTokenOffset() + o, m = d.length * r < 20 && n.insertSpaces ? nt[d.length * r] : sr(d, r);
    l(m, o, D);
  }
  for (; _ !== 17; ) {
    let D = y.getTokenOffset() + y.getTokenLength() + o, m = P(), p = "", k = false;
    for (; f === 0 && (m === 12 || m === 13); ) {
      let T = y.getTokenOffset() + o;
      l(nt[1], D, T), D = y.getTokenOffset() + y.getTokenLength() + o, k = m === 12, p = k ? S() : "", m = P();
    }
    if (m === 2) _ !== 1 && v--, n.keepLines && f > 0 || !n.keepLines && _ !== 1 ? p = S() : n.keepLines && (p = nt[1]);
    else if (m === 4) _ !== 3 && v--, n.keepLines && f > 0 || !n.keepLines && _ !== 3 ? p = S() : n.keepLines && (p = nt[1]);
    else {
      switch (_) {
        case 3:
        case 1:
          v++, n.keepLines && f > 0 || !n.keepLines ? p = S() : p = nt[1];
          break;
        case 5:
          n.keepLines && f > 0 || !n.keepLines ? p = S() : p = nt[1];
          break;
        case 12:
          p = S();
          break;
        case 13:
          f > 0 ? p = S() : k || (p = nt[1]);
          break;
        case 6:
          n.keepLines && f > 0 ? p = S() : k || (p = nt[1]);
          break;
        case 10:
          n.keepLines && f > 0 ? p = S() : m === 6 && !k && (p = "");
          break;
        case 7:
        case 8:
        case 9:
        case 11:
        case 2:
        case 4:
          n.keepLines && f > 0 ? p = S() : (m === 12 || m === 13) && !k ? p = nt[1] : m !== 5 && m !== 17 && (w = true);
          break;
        case 16:
          w = true;
          break;
      }
      f > 0 && (m === 12 || m === 13) && (p = S());
    }
    m === 17 && (n.keepLines && f > 0 ? p = S() : p = n.insertFinalNewline ? u : "");
    let N = y.getTokenOffset() + o;
    l(p, D, N), _ = m;
  }
  return h;
}
function sr(e, t) {
  let n = "";
  for (let r = 0; r < t; r++) n += e;
  return n;
}
function Dv(e, t) {
  let n = 0, r = 0, i = t.tabSize || 4;
  for (; n < e.length; ) {
    let o = e.charAt(n);
    if (o === nt[1]) r++;
    else if (o === "	") r += i;
    else break;
    n++;
  }
  return Math.floor(r / i);
}
function Sv(e, t) {
  for (let n = 0; n < t.length; n++) {
    let r = t.charAt(n);
    if (r === "\r") return n + 1 < t.length && t.charAt(n + 1) === `
` ? `\r
` : "\r";
    if (r === `
`) return `
`;
  }
  return e && e.eol || `
`;
}
function su(e, t) {
  return `\r
`.indexOf(e.charAt(t)) !== -1;
}
var cu = Z(() => {
  "use strict";
  Co();
  fh();
});
function dh(e, t = [], n = jo.DEFAULT) {
  let r = null, i = [], o = [];
  function s(u) {
    Array.isArray(i) ? i.push(u) : r !== null && (i[r] = u);
  }
  return ph(e, { onObjectBegin: () => {
    let u = {};
    s(u), o.push(i), i = u, r = null;
  }, onObjectProperty: (u) => {
    r = u;
  }, onObjectEnd: () => {
    i = o.pop();
  }, onArrayBegin: () => {
    let u = [];
    s(u), o.push(i), i = u, r = null;
  }, onArrayEnd: () => {
    i = o.pop();
  }, onLiteralValue: s, onError: (u, c, f) => {
    t.push({ error: u, offset: c, length: f });
  } }, n), i[0];
}
function uu(e) {
  if (!e.parent || !e.parent.children) return [];
  let t = uu(e.parent);
  if (e.parent.type === "property") {
    let n = e.parent.children[0].value;
    t.push(n);
  } else if (e.parent.type === "array") {
    let n = e.parent.children.indexOf(e);
    n !== -1 && t.push(n);
  }
  return t;
}
function Eo(e) {
  switch (e.type) {
    case "array":
      return e.children.map(Eo);
    case "object":
      let t = /* @__PURE__ */ Object.create(null);
      for (let n of e.children) {
        let r = n.children[1];
        r && (t[n.children[0].value] = Eo(r));
      }
      return t;
    case "null":
    case "string":
    case "number":
    case "boolean":
      return e.value;
    default:
      return;
  }
}
function xv(e, t, n = false) {
  return t >= e.offset && t < e.offset + e.length || n && t === e.offset + e.length;
}
function lu(e, t, n = false) {
  if (xv(e, t, n)) {
    let r = e.children;
    if (Array.isArray(r)) for (let i = 0; i < r.length && r[i].offset <= t; i++) {
      let o = lu(r[i], t, n);
      if (o) return o;
    }
    return e;
  }
}
function ph(e, t, n = jo.DEFAULT) {
  let r = ir(e, false), i = [], o = 0;
  function s(q) {
    return q ? () => o === 0 && q(r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter()) : () => true;
  }
  function a(q) {
    return q ? (X) => o === 0 && q(X, r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter()) : () => true;
  }
  function u(q) {
    return q ? (X) => o === 0 && q(X, r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter(), () => i.slice()) : () => true;
  }
  function c(q) {
    return q ? () => {
      o > 0 ? o++ : q(r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter(), () => i.slice()) === false && (o = 1);
    } : () => true;
  }
  function f(q) {
    return q ? () => {
      o > 0 && o--, o === 0 && q(r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter());
    } : () => true;
  }
  let v = c(t.onObjectBegin), d = u(t.onObjectProperty), g = f(t.onObjectEnd), y = c(t.onArrayBegin), w = f(t.onArrayEnd), S = u(t.onLiteralValue), P = a(t.onSeparator), h = s(t.onComment), l = a(t.onError), _ = n && n.disallowComments, D = n && n.allowTrailingComma;
  function m() {
    for (; ; ) {
      let q = r.scan();
      switch (r.getTokenError()) {
        case 4:
          p(14);
          break;
        case 5:
          p(15);
          break;
        case 3:
          p(13);
          break;
        case 1:
          _ || p(11);
          break;
        case 2:
          p(12);
          break;
        case 6:
          p(16);
          break;
      }
      switch (q) {
        case 12:
        case 13:
          _ ? p(10) : h();
          break;
        case 16:
          p(1);
          break;
        case 15:
        case 14:
          break;
        default:
          return q;
      }
    }
  }
  function p(q, X = [], be = []) {
    if (l(q), X.length + be.length > 0) {
      let ue = r.getToken();
      for (; ue !== 17; ) {
        if (X.indexOf(ue) !== -1) {
          m();
          break;
        } else if (be.indexOf(ue) !== -1) break;
        ue = m();
      }
    }
  }
  function k(q) {
    let X = r.getTokenValue();
    return q ? S(X) : (d(X), i.push(X)), m(), true;
  }
  function N() {
    switch (r.getToken()) {
      case 11:
        let q = r.getTokenValue(), X = Number(q);
        isNaN(X) && (p(2), X = 0), S(X);
        break;
      case 7:
        S(null);
        break;
      case 8:
        S(true);
        break;
      case 9:
        S(false);
        break;
      default:
        return false;
    }
    return m(), true;
  }
  function T() {
    return r.getToken() !== 10 ? (p(3, [], [2, 5]), false) : (k(false), r.getToken() === 6 ? (P(":"), m(), A() || p(4, [], [2, 5])) : p(5, [], [2, 5]), i.pop(), true);
  }
  function M() {
    v(), m();
    let q = false;
    for (; r.getToken() !== 2 && r.getToken() !== 17; ) {
      if (r.getToken() === 5) {
        if (q || p(4, [], []), P(","), m(), r.getToken() === 2 && D) break;
      } else q && p(6, [], []);
      T() || p(4, [], [2, 5]), q = true;
    }
    return g(), r.getToken() !== 2 ? p(7, [2], []) : m(), true;
  }
  function O() {
    y(), m();
    let q = true, X = false;
    for (; r.getToken() !== 4 && r.getToken() !== 17; ) {
      if (r.getToken() === 5) {
        if (X || p(4, [], []), P(","), m(), r.getToken() === 4 && D) break;
      } else X && p(6, [], []);
      q ? (i.push(0), q = false) : i[i.length - 1]++, A() || p(4, [], [4, 5]), X = true;
    }
    return w(), q || i.pop(), r.getToken() !== 4 ? p(8, [4], []) : m(), true;
  }
  function A() {
    switch (r.getToken()) {
      case 3:
        return O();
      case 1:
        return M();
      case 10:
        return k(true);
      default:
        return N();
    }
  }
  return m(), r.getToken() === 17 ? n.allowEmptyContent ? true : (p(4, [], []), false) : A() ? (r.getToken() !== 17 && p(9, [], []), true) : (p(4, [], []), false);
}
var jo, fu = Z(() => {
  "use strict";
  Co();
  (function(e) {
    e.DEFAULT = { allowTrailingComma: false };
  })(jo || (jo = {}));
});
var hh = Z(() => {
  "use strict";
  cu();
  fu();
});
function Dh(e, t, n) {
  return au(e, t, n);
}
var ct, mh, gh, bh, vh, _h, wh, yh, on = Z(() => {
  "use strict";
  cu();
  hh();
  Co();
  fu();
  ct = ir;
  (function(e) {
    e[e.None = 0] = "None", e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 6] = "InvalidCharacter";
  })(mh || (mh = {}));
  (function(e) {
    e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.Unknown = 16] = "Unknown", e[e.EOF = 17] = "EOF";
  })(gh || (gh = {}));
  bh = dh, vh = lu, _h = uu, wh = Eo;
  (function(e) {
    e[e.InvalidSymbol = 1] = "InvalidSymbol", e[e.InvalidNumberFormat = 2] = "InvalidNumberFormat", e[e.PropertyNameExpected = 3] = "PropertyNameExpected", e[e.ValueExpected = 4] = "ValueExpected", e[e.ColonExpected = 5] = "ColonExpected", e[e.CommaExpected = 6] = "CommaExpected", e[e.CloseBraceExpected = 7] = "CloseBraceExpected", e[e.CloseBracketExpected = 8] = "CloseBracketExpected", e[e.EndOfFileExpected = 9] = "EndOfFileExpected", e[e.InvalidCommentToken = 10] = "InvalidCommentToken", e[e.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 14] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 16] = "InvalidCharacter";
  })(yh || (yh = {}));
});
function _n(e, t) {
  if (e === t) return true;
  if (e == null || t === null || t === void 0 || typeof e != typeof t || typeof e != "object" || Array.isArray(e) !== Array.isArray(t)) return false;
  let n, r;
  if (Array.isArray(e)) {
    if (e.length !== t.length) return false;
    for (n = 0; n < e.length; n++) if (!_n(e[n], t[n])) return false;
  } else {
    let i = [];
    for (r in e) i.push(r);
    i.sort();
    let o = [];
    for (r in t) o.push(r);
    if (o.sort(), !_n(i, o)) return false;
    for (n = 0; n < i.length; n++) if (!_n(e[i[n]], t[i[n]])) return false;
  }
  return true;
}
function Ee(e) {
  return typeof e == "number";
}
function rt(e) {
  return typeof e < "u";
}
function ut(e) {
  return typeof e == "boolean";
}
function Ao(e) {
  return typeof e == "string";
}
function Pt(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
var $r = Z(() => {
  "use strict";
});
function Mv(e, t) {
  if (e.length < t.length) return false;
  for (let n = 0; n < t.length; n++) if (e[n] !== t[n]) return false;
  return true;
}
function sn(e, t) {
  let n = e.length - t.length;
  return n > 0 ? e.lastIndexOf(t) === n : n === 0 ? e === t : false;
}
function wn(e) {
  let t = "";
  Mv(e, "(?i)") && (e = e.substring(4), t = "i");
  try {
    return new RegExp(e, t + "u");
  } catch {
    try {
      return new RegExp(e, t);
    } catch {
      return;
    }
  }
}
function pu(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    t++;
    let r = e.charCodeAt(n);
    55296 <= r && r <= 56319 && n++;
  }
  return t;
}
var Vr = Z(() => {
  "use strict";
});
function hu(e, t) {
  if (e.length <= 1) return e;
  let n = e.length / 2 | 0, r = e.slice(0, n), i = e.slice(n);
  hu(r, t), hu(i, t);
  let o = 0, s = 0, a = 0;
  for (; o < r.length && s < i.length; ) t(r[o], i[s]) <= 0 ? e[a++] = r[o++] : e[a++] = i[s++];
  for (; o < r.length; ) e[a++] = r[o++];
  for (; s < i.length; ) e[a++] = i[s++];
  return e;
}
function Ph(e, t, n = 0) {
  let r = t ? [n] : [];
  for (let i = 0; i < e.length; i++) {
    let o = e.charCodeAt(i);
    xh(o) && (o === 13 && i + 1 < e.length && e.charCodeAt(i + 1) === 10 && i++, r.push(n + i + 1));
  }
  return r;
}
function xh(e) {
  return e === 13 || e === 10;
}
function Th(e) {
  let t = e.start, n = e.end;
  return t.line > n.line || t.line === n.line && t.character > n.character ? { start: n, end: t } : e;
}
function Nv(e) {
  let t = Th(e.range);
  return t !== e.range ? { newText: e.newText, range: t } : e;
}
var qo, Ue, kh = Z(() => {
  "use strict";
  qo = class e {
    constructor(t, n, r, i) {
      this._uri = t, this._languageId = n, this._version = r, this._content = i, this._lineOffsets = void 0;
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
    getText(t) {
      if (t) {
        let n = this.offsetAt(t.start), r = this.offsetAt(t.end);
        return this._content.substring(n, r);
      }
      return this._content;
    }
    update(t, n) {
      for (let r of t) if (e.isIncremental(r)) {
        let i = Th(r.range), o = this.offsetAt(i.start), s = this.offsetAt(i.end);
        this._content = this._content.substring(0, o) + r.text + this._content.substring(s, this._content.length);
        let a = Math.max(i.start.line, 0), u = Math.max(i.end.line, 0), c = this._lineOffsets, f = Ph(r.text, false, o);
        if (u - a === f.length) for (let d = 0, g = f.length; d < g; d++) c[d + a + 1] = f[d];
        else f.length < 1e4 ? c.splice(a + 1, u - a, ...f) : this._lineOffsets = c = c.slice(0, a + 1).concat(f, c.slice(u + 1));
        let v = r.text.length - (s - o);
        if (v !== 0) for (let d = a + 1 + f.length, g = c.length; d < g; d++) c[d] = c[d] + v;
      } else if (e.isFull(r)) this._content = r.text, this._lineOffsets = void 0;
      else throw new Error("Unknown change event received");
      this._version = n;
    }
    getLineOffsets() {
      return this._lineOffsets === void 0 && (this._lineOffsets = Ph(this._content, true)), this._lineOffsets;
    }
    positionAt(t) {
      t = Math.max(Math.min(t, this._content.length), 0);
      let n = this.getLineOffsets(), r = 0, i = n.length;
      if (i === 0) return { line: 0, character: t };
      for (; r < i; ) {
        let s = Math.floor((r + i) / 2);
        n[s] > t ? i = s : r = s + 1;
      }
      let o = r - 1;
      return t = this.ensureBeforeEOL(t, n[o]), { line: o, character: t - n[o] };
    }
    offsetAt(t) {
      let n = this.getLineOffsets();
      if (t.line >= n.length) return this._content.length;
      if (t.line < 0) return 0;
      let r = n[t.line];
      if (t.character <= 0) return r;
      let i = t.line + 1 < n.length ? n[t.line + 1] : this._content.length, o = Math.min(r + t.character, i);
      return this.ensureBeforeEOL(o, r);
    }
    getLineRange(t) {
      let n = this.getLineOffsets();
      if (t >= n.length) {
        let s = n.length - 1;
        return { start: { line: s, character: 0 }, end: { line: s, character: this._content.length - n[s] } };
      } else if (t < 0) return { start: { line: 0, character: 0 }, end: { line: 0, character: 0 } };
      let r = n[t], i = t + 1 < n.length ? n[t + 1] : this._content.length, o = this.ensureBeforeEOL(i, r);
      return { start: { line: t, character: 0 }, end: { line: t, character: o - r } };
    }
    getEOLCharacters(t) {
      let n = this.getLineOffsets();
      if (t >= n.length) return "";
      if (t < 0) return "";
      let r = t + 1 < n.length ? n[t + 1] : this._content.length, i = this.ensureBeforeEOL(r, n[t]);
      return this._content.substring(i, r);
    }
    ensureBeforeEOL(t, n) {
      for (; t > n && xh(this._content.charCodeAt(t - 1)); ) t--;
      return t;
    }
    get lineCount() {
      return this.getLineOffsets().length;
    }
    static isIncremental(t) {
      let n = t;
      return n != null && typeof n.text == "string" && n.range !== void 0 && (n.rangeLength === void 0 || typeof n.rangeLength == "number");
    }
    static isFull(t) {
      let n = t;
      return n != null && typeof n.text == "string" && n.range === void 0 && n.rangeLength === void 0;
    }
  };
  (function(e) {
    function t(i, o, s, a) {
      return new qo(i, o, s, a);
    }
    e.create = t;
    function n(i, o, s) {
      if (i instanceof qo) return i.update(o, s), i;
      throw new Error("TextDocument.update: document must be created by TextDocument.create");
    }
    e.update = n;
    function r(i, o) {
      let s = i.getText(), a = hu(o.map(Nv), (f, v) => {
        let d = f.range.start.line - v.range.start.line;
        return d === 0 ? f.range.start.character - v.range.start.character : d;
      }), u = 0, c = [];
      for (let f of a) {
        let v = i.offsetAt(f.range.start);
        if (v < u) throw new Error("Overlapping edit");
        v > u && c.push(s.substring(u, v)), f.newText.length && c.push(f.newText), u = i.offsetAt(f.range.end);
      }
      return c.push(s.substr(u)), c.join("");
    }
    e.applyEdits = r;
  })(Ue || (Ue = {}));
});
var J, Ze, Io, it = Z(() => {
  "use strict";
  Ln();
  kh();
  (function(e) {
    e[e.Undefined = 0] = "Undefined", e[e.EnumValueMismatch = 1] = "EnumValueMismatch", e[e.Deprecated = 2] = "Deprecated", e[e.UnexpectedEndOfComment = 257] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 258] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 259] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 260] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 261] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 262] = "InvalidCharacter", e[e.PropertyExpected = 513] = "PropertyExpected", e[e.CommaExpected = 514] = "CommaExpected", e[e.ColonExpected = 515] = "ColonExpected", e[e.ValueExpected = 516] = "ValueExpected", e[e.CommaOrCloseBacketExpected = 517] = "CommaOrCloseBacketExpected", e[e.CommaOrCloseBraceExpected = 518] = "CommaOrCloseBraceExpected", e[e.TrailingComma = 519] = "TrailingComma", e[e.DuplicateKey = 520] = "DuplicateKey", e[e.CommentNotPermitted = 521] = "CommentNotPermitted", e[e.PropertyKeysMustBeDoublequoted = 528] = "PropertyKeysMustBeDoublequoted", e[e.SchemaUnsupportedFeature = 769] = "SchemaUnsupportedFeature", e[e.SchemaResolveError = 65536] = "SchemaResolveError";
  })(J || (J = {}));
  (function(e) {
    e[e.v3 = 3] = "v3", e[e.v4 = 4] = "v4", e[e.v6 = 6] = "v6", e[e.v7 = 7] = "v7", e[e.v2019_09 = 19] = "v2019_09", e[e.v2020_12 = 20] = "v2020_12";
  })(Ze || (Ze = {}));
  (function(e) {
    e.LATEST = { textDocument: { completion: { completionItem: { documentationFormat: [_t.Markdown, _t.PlainText], commitCharactersSupport: true, labelDetailsSupport: true } } } };
  })(Io || (Io = {}));
});
function ar(e) {
  var t = Oh[e];
  if (t !== void 0) return t.exports;
  var n = Oh[e] = { exports: {} };
  return Cv[e](n, n.exports, ar), n.exports;
}
function Rh(e, t) {
  if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
  if (e.scheme && !jv.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
  if (e.path) {
    if (e.authority) {
      if (!Ev.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
    } else if (Av.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
  }
}
function Mh(e, t, n) {
  let r, i = -1;
  for (let o = 0; o < e.length; o++) {
    let s = e.charCodeAt(o);
    if (s >= 97 && s <= 122 || s >= 65 && s <= 90 || s >= 48 && s <= 57 || s === 45 || s === 46 || s === 95 || s === 126 || t && s === 47 || n && s === 91 || n && s === 93 || n && s === 58) i !== -1 && (r += encodeURIComponent(e.substring(i, o)), i = -1), r !== void 0 && (r += e.charAt(o));
    else {
      r === void 0 && (r = e.substr(0, o));
      let a = Eh[s];
      a !== void 0 ? (i !== -1 && (r += encodeURIComponent(e.substring(i, o)), i = -1), r += a) : i === -1 && (i = o);
    }
  }
  return i !== -1 && (r += encodeURIComponent(e.substring(i))), r !== void 0 ? r : e;
}
function Iv(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    r === 35 || r === 63 ? (t === void 0 && (t = e.substr(0, n)), t += Eh[r]) : t !== void 0 && (t += e[n]);
  }
  return t !== void 0 ? t : e;
}
function Ah(e, t) {
  let n;
  return n = e.authority && e.path.length > 1 && e.scheme === "file" ? `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? e.path.substr(1) : e.path[1].toLowerCase() + e.path.substr(2) : e.path, Ur && (n = n.replace(/\//g, "\\")), n;
}
function mu(e, t) {
  let n = t ? Iv : Mh, r = "", { scheme: i, authority: o, path: s, query: a, fragment: u } = e;
  if (i && (r += i, r += ":"), (o || i === "file") && (r += gt, r += gt), o) {
    let c = o.indexOf("@");
    if (c !== -1) {
      let f = o.substr(0, c);
      o = o.substr(c + 1), c = f.lastIndexOf(":"), c === -1 ? r += n(f, false, false) : (r += n(f.substr(0, c), false, false), r += ":", r += n(f.substr(c + 1), false, true)), r += "@";
    }
    o = o.toLowerCase(), c = o.lastIndexOf(":"), c === -1 ? r += n(o, false, true) : (r += n(o.substr(0, c), false, true), r += o.substr(c));
  }
  if (s) {
    if (s.length >= 3 && s.charCodeAt(0) === 47 && s.charCodeAt(2) === 58) {
      let c = s.charCodeAt(1);
      c >= 65 && c <= 90 && (s = `/${String.fromCharCode(c + 32)}:${s.substr(3)}`);
    } else if (s.length >= 2 && s.charCodeAt(1) === 58) {
      let c = s.charCodeAt(0);
      c >= 65 && c <= 90 && (s = `${String.fromCharCode(c + 32)}:${s.substr(2)}`);
    }
    r += n(s, true, false);
  }
  return a && (r += "?", r += n(a, false, false)), u && (r += "#", r += t ? u : Mh(u, false, false)), r;
}
function qh(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.length > 3 ? e.substr(0, 3) + qh(e.substr(3)) : e;
  }
}
function Lo(e) {
  return e.match(Nh) ? e.replace(Nh, (t) => qh(t)) : e;
}
var Cv, Oh, Ur, jv, Ev, Av, oe, gt, qv, ot, jh, an, Eh, Nh, Ch, Wr, Fo, $o, Hr = Z(() => {
  "use strict";
  Cv = { 975(e) {
    function t(i) {
      if (typeof i != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(i));
    }
    function n(i, o) {
      for (var s, a = "", u = 0, c = -1, f = 0, v = 0; v <= i.length; ++v) {
        if (v < i.length) s = i.charCodeAt(v);
        else {
          if (s === 47) break;
          s = 47;
        }
        if (s === 47) {
          if (!(c === v - 1 || f === 1)) if (c !== v - 1 && f === 2) {
            if (a.length < 2 || u !== 2 || a.charCodeAt(a.length - 1) !== 46 || a.charCodeAt(a.length - 2) !== 46) {
              if (a.length > 2) {
                var d = a.lastIndexOf("/");
                if (d !== a.length - 1) {
                  d === -1 ? (a = "", u = 0) : u = (a = a.slice(0, d)).length - 1 - a.lastIndexOf("/"), c = v, f = 0;
                  continue;
                }
              } else if (a.length === 2 || a.length === 1) {
                a = "", u = 0, c = v, f = 0;
                continue;
              }
            }
            o && (a.length > 0 ? a += "/.." : a = "..", u = 2);
          } else a.length > 0 ? a += "/" + i.slice(c + 1, v) : a = i.slice(c + 1, v), u = v - c - 1;
          c = v, f = 0;
        } else s === 46 && f !== -1 ? ++f : f = -1;
      }
      return a;
    }
    var r = { resolve: function() {
      for (var i, o = "", s = false, a = arguments.length - 1; a >= -1 && !s; a--) {
        var u;
        a >= 0 ? u = arguments[a] : (i === void 0 && (i = process.cwd()), u = i), t(u), u.length !== 0 && (o = u + "/" + o, s = u.charCodeAt(0) === 47);
      }
      return o = n(o, !s), s ? o.length > 0 ? "/" + o : "/" : o.length > 0 ? o : ".";
    }, normalize: function(i) {
      if (t(i), i.length === 0) return ".";
      var o = i.charCodeAt(0) === 47, s = i.charCodeAt(i.length - 1) === 47;
      return (i = n(i, !o)).length !== 0 || o || (i = "."), i.length > 0 && s && (i += "/"), o ? "/" + i : i;
    }, isAbsolute: function(i) {
      return t(i), i.length > 0 && i.charCodeAt(0) === 47;
    }, join: function() {
      if (arguments.length === 0) return ".";
      for (var i, o = 0; o < arguments.length; ++o) {
        var s = arguments[o];
        t(s), s.length > 0 && (i === void 0 ? i = s : i += "/" + s);
      }
      return i === void 0 ? "." : r.normalize(i);
    }, relative: function(i, o) {
      if (t(i), t(o), i === o || (i = r.resolve(i)) === (o = r.resolve(o))) return "";
      for (var s = 1; s < i.length && i.charCodeAt(s) === 47; ++s) ;
      for (var a = i.length, u = a - s, c = 1; c < o.length && o.charCodeAt(c) === 47; ++c) ;
      for (var f = o.length - c, v = u < f ? u : f, d = -1, g = 0; g <= v; ++g) {
        if (g === v) {
          if (f > v) {
            if (o.charCodeAt(c + g) === 47) return o.slice(c + g + 1);
            if (g === 0) return o.slice(c + g);
          } else u > v && (i.charCodeAt(s + g) === 47 ? d = g : g === 0 && (d = 0));
          break;
        }
        var y = i.charCodeAt(s + g);
        if (y !== o.charCodeAt(c + g)) break;
        y === 47 && (d = g);
      }
      var w = "";
      for (g = s + d + 1; g <= a; ++g) g !== a && i.charCodeAt(g) !== 47 || (w.length === 0 ? w += ".." : w += "/..");
      return w.length > 0 ? w + o.slice(c + d) : (c += d, o.charCodeAt(c) === 47 && ++c, o.slice(c));
    }, _makeLong: function(i) {
      return i;
    }, dirname: function(i) {
      if (t(i), i.length === 0) return ".";
      for (var o = i.charCodeAt(0), s = o === 47, a = -1, u = true, c = i.length - 1; c >= 1; --c) if ((o = i.charCodeAt(c)) === 47) {
        if (!u) {
          a = c;
          break;
        }
      } else u = false;
      return a === -1 ? s ? "/" : "." : s && a === 1 ? "//" : i.slice(0, a);
    }, basename: function(i, o) {
      if (o !== void 0 && typeof o != "string") throw new TypeError('"ext" argument must be a string');
      t(i);
      var s, a = 0, u = -1, c = true;
      if (o !== void 0 && o.length > 0 && o.length <= i.length) {
        if (o.length === i.length && o === i) return "";
        var f = o.length - 1, v = -1;
        for (s = i.length - 1; s >= 0; --s) {
          var d = i.charCodeAt(s);
          if (d === 47) {
            if (!c) {
              a = s + 1;
              break;
            }
          } else v === -1 && (c = false, v = s + 1), f >= 0 && (d === o.charCodeAt(f) ? --f === -1 && (u = s) : (f = -1, u = v));
        }
        return a === u ? u = v : u === -1 && (u = i.length), i.slice(a, u);
      }
      for (s = i.length - 1; s >= 0; --s) if (i.charCodeAt(s) === 47) {
        if (!c) {
          a = s + 1;
          break;
        }
      } else u === -1 && (c = false, u = s + 1);
      return u === -1 ? "" : i.slice(a, u);
    }, extname: function(i) {
      t(i);
      for (var o = -1, s = 0, a = -1, u = true, c = 0, f = i.length - 1; f >= 0; --f) {
        var v = i.charCodeAt(f);
        if (v !== 47) a === -1 && (u = false, a = f + 1), v === 46 ? o === -1 ? o = f : c !== 1 && (c = 1) : o !== -1 && (c = -1);
        else if (!u) {
          s = f + 1;
          break;
        }
      }
      return o === -1 || a === -1 || c === 0 || c === 1 && o === a - 1 && o === s + 1 ? "" : i.slice(o, a);
    }, format: function(i) {
      if (i === null || typeof i != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof i);
      return (function(o, s) {
        var a = s.dir || s.root, u = s.base || (s.name || "") + (s.ext || "");
        return a ? a === s.root ? a + u : a + "/" + u : u;
      })(0, i);
    }, parse: function(i) {
      t(i);
      var o = { root: "", dir: "", base: "", ext: "", name: "" };
      if (i.length === 0) return o;
      var s, a = i.charCodeAt(0), u = a === 47;
      u ? (o.root = "/", s = 1) : s = 0;
      for (var c = -1, f = 0, v = -1, d = true, g = i.length - 1, y = 0; g >= s; --g) if ((a = i.charCodeAt(g)) !== 47) v === -1 && (d = false, v = g + 1), a === 46 ? c === -1 ? c = g : y !== 1 && (y = 1) : c !== -1 && (y = -1);
      else if (!d) {
        f = g + 1;
        break;
      }
      return c === -1 || v === -1 || y === 0 || y === 1 && c === v - 1 && c === f + 1 ? v !== -1 && (o.base = o.name = f === 0 && u ? i.slice(1, v) : i.slice(f, v)) : (f === 0 && u ? (o.name = i.slice(1, c), o.base = i.slice(1, v)) : (o.name = i.slice(f, c), o.base = i.slice(f, v)), o.ext = i.slice(c, v)), f > 0 ? o.dir = i.slice(0, f - 1) : u && (o.dir = "/"), o;
    }, sep: "/", delimiter: ":", win32: null, posix: null };
    r.posix = r, e.exports = r;
  } }, Oh = {};
  ar.d = (e, t) => {
    for (var n in t) ar.o(t, n) && !ar.o(e, n) && Object.defineProperty(e, n, { enumerable: true, get: t[n] });
  }, ar.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), typeof process == "object" ? Ur = process.platform === "win32" : typeof navigator == "object" && (Ur = navigator.userAgent.indexOf("Windows") >= 0);
  jv = /^\w[\w\d+.-]*$/, Ev = /^\//, Av = /^\/\//;
  oe = "", gt = "/", qv = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, ot = class e {
    static isUri(t) {
      return t instanceof e || !!t && typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function";
    }
    scheme;
    authority;
    path;
    query;
    fragment;
    constructor(t, n, r, i, o, s = false) {
      typeof t == "object" ? (this.scheme = t.scheme || oe, this.authority = t.authority || oe, this.path = t.path || oe, this.query = t.query || oe, this.fragment = t.fragment || oe) : (this.scheme = /* @__PURE__ */ (function(a, u) {
        return a || u ? a : "file";
      })(t, s), this.authority = n || oe, this.path = (function(a, u) {
        switch (a) {
          case "https":
          case "http":
          case "file":
            u ? u[0] !== gt && (u = gt + u) : u = gt;
        }
        return u;
      })(this.scheme, r || oe), this.query = i || oe, this.fragment = o || oe, Rh(this, s));
    }
    get fsPath() {
      return Ah(this, false);
    }
    with(t) {
      if (!t) return this;
      let { scheme: n, authority: r, path: i, query: o, fragment: s } = t;
      return n === void 0 ? n = this.scheme : n === null && (n = oe), r === void 0 ? r = this.authority : r === null && (r = oe), i === void 0 ? i = this.path : i === null && (i = oe), o === void 0 ? o = this.query : o === null && (o = oe), s === void 0 ? s = this.fragment : s === null && (s = oe), n === this.scheme && r === this.authority && i === this.path && o === this.query && s === this.fragment ? this : new an(n, r, i, o, s);
    }
    static parse(t, n = false) {
      let r = qv.exec(t);
      return r ? new an(r[2] || oe, Lo(r[4] || oe), Lo(r[5] || oe), Lo(r[7] || oe), Lo(r[9] || oe), n) : new an(oe, oe, oe, oe, oe);
    }
    static file(t) {
      let n = oe;
      if (Ur && (t = t.replace(/\\/g, gt)), t[0] === gt && t[1] === gt) {
        let r = t.indexOf(gt, 2);
        r === -1 ? (n = t.substring(2), t = gt) : (n = t.substring(2, r), t = t.substring(r) || gt);
      }
      return new an("file", n, t, oe, oe);
    }
    static from(t) {
      let n = new an(t.scheme, t.authority, t.path, t.query, t.fragment);
      return Rh(n, true), n;
    }
    toString(t = false) {
      return mu(this, t);
    }
    toJSON() {
      return this;
    }
    static revive(t) {
      if (t) {
        if (t instanceof e) return t;
        {
          let n = new an(t);
          return n._formatted = t.external, n._fsPath = t._sep === jh ? t.fsPath : null, n;
        }
      }
      return t;
    }
  }, jh = Ur ? 1 : void 0, an = class extends ot {
    _formatted = null;
    _fsPath = null;
    get fsPath() {
      return this._fsPath || (this._fsPath = Ah(this, false)), this._fsPath;
    }
    toString(t = false) {
      return t ? mu(this, true) : (this._formatted || (this._formatted = mu(this, false)), this._formatted);
    }
    toJSON() {
      let t = { $mid: 1 };
      return this._fsPath && (t.fsPath = this._fsPath, t._sep = jh), this._formatted && (t.external = this._formatted), this.path && (t.path = this.path), this.scheme && (t.scheme = this.scheme), this.authority && (t.authority = this.authority), this.query && (t.query = this.query), this.fragment && (t.fragment = this.fragment), t;
    }
  }, Eh = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
  Nh = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
  Ch = ar(975), Wr = Ch.posix || Ch, Fo = "/";
  (function(e) {
    e.joinPath = function(t, ...n) {
      return t.with({ path: Wr.join(t.path, ...n) });
    }, e.resolvePath = function(t, ...n) {
      let r = t.path, i = false;
      r[0] !== Fo && (r = Fo + r, i = true);
      let o = Wr.resolve(r, ...n);
      return i && o[0] === Fo && !t.authority && (o = o.substring(1)), t.with({ path: o });
    }, e.dirname = function(t) {
      if (t.path.length === 0 || t.path === Fo) return t;
      let n = Wr.dirname(t.path);
      return n.length === 1 && n.charCodeAt(0) === 46 && (n = ""), t.with({ path: n });
    }, e.basename = function(t) {
      return Wr.basename(t.path);
    }, e.extname = function(t) {
      return Wr.extname(t.path);
    };
  })($o || ($o = {}));
});
function Ae(e) {
  return ut(e) ? e ? {} : { not: {} } : e;
}
function Ft(e) {
  e.startsWith(Lh) && (e = Fv + e.substring(Lh.length));
  try {
    return ot.parse(e).toString(true);
  } catch {
    return e;
  }
}
function Du(e) {
  return $v[Ft(e)] ?? void 0;
}
function $h(e, t = [], n = []) {
  return new Uo(e, t, n);
}
function xt(e) {
  return wh(e);
}
function zr(e) {
  return _h(e);
}
function Su(e, t, n = false) {
  return t >= e.offset && t < e.offset + e.length || n && t === e.offset + e.length;
}
function Fh(e, t = Ze.v2020_12) {
  let n = e.$schema;
  return n ? Du(n) ?? t : t;
}
function Me(e, t, n, r, i) {
  if (!e || !r.include(e)) return;
  if (e.type === "property") return Me(e.valueNode, t, n, r, i);
  let o = e;
  switch (s(), o.type) {
    case "object":
      v(o);
      break;
    case "array":
      f(o);
      break;
    case "string":
      c(o);
      break;
    case "number":
      u(o);
      break;
  }
  r.add({ node: o, schema: t });
  function s() {
    function d(l) {
      return o.type === l || l === "integer" && o.type === "number" && o.isInteger;
    }
    if (Array.isArray(t.type) ? t.type.some(d) || n.problems.push({ location: { offset: o.offset, length: o.length }, message: t.errorMessage || $.t("Incorrect type. Expected one of {0}.", t.type.join(", ")) }) : t.type && (d(t.type) || n.problems.push({ location: { offset: o.offset, length: o.length }, message: t.errorMessage || $.t('Incorrect type. Expected "{0}".', t.type) })), Array.isArray(t.allOf)) for (let l of t.allOf) {
      let _ = new Ne(), D = r.newSub();
      Me(o, Ae(l), _, D, i), n.merge(_), r.merge(D);
    }
    let g = Ae(t.not);
    if (g) {
      let l = new Ne(), _ = r.newSub();
      Me(o, g, l, _, i), l.hasProblems() || n.problems.push({ location: { offset: o.offset, length: o.length }, message: t.errorMessage || $.t("Matches a schema that is not allowed.") });
      for (let D of _.schemas) D.inverted = !D.inverted, r.add(D);
    }
    let y = (l, _) => {
      let D = [], m = a(l) ?? l, p;
      for (let k of m) {
        let N = Ae(k), T = new Ne(), M = r.newSub();
        if (Me(o, N, T, M, i), T.hasProblems() || D.push(N), !p) p = { schema: N, validationResult: T, matchingSchemas: M };
        else if (!_ && !T.hasProblems() && !p.validationResult.hasProblems()) p.matchingSchemas.merge(M), p.validationResult.propertiesMatches += T.propertiesMatches, p.validationResult.propertiesValueMatches += T.propertiesValueMatches, p.validationResult.mergeProcessedProperties(T);
        else {
          let O = T.compare(p.validationResult);
          O > 0 ? p = { schema: N, validationResult: T, matchingSchemas: M } : O === 0 && (p.matchingSchemas.merge(M), p.validationResult.mergeEnumValues(T));
        }
      }
      return D.length > 1 && _ && n.problems.push({ location: { offset: o.offset, length: 1 }, message: $.t("Matches multiple schemas when only one must validate.") }), p && (p.validationResult.updateEnumMismatchProblemMessages(), n.merge(p.validationResult), r.merge(p.matchingSchemas)), D.length;
    };
    Array.isArray(t.anyOf) && y(t.anyOf, false), Array.isArray(t.oneOf) && y(t.oneOf, true);
    let w = (l) => {
      let _ = new Ne(), D = r.newSub();
      Me(o, Ae(l), _, D, i), n.merge(_), r.merge(D);
    }, S = (l, _, D) => {
      let m = Ae(l), p = new Ne(), k = r.newSub();
      Me(o, m, p, k, i), r.merge(k), n.mergeProcessedProperties(p), p.hasProblems() ? D && w(D) : _ && w(_);
    }, P = Ae(t.if);
    if (P && S(P, Ae(t.then), Ae(t.else)), Array.isArray(t.enum)) {
      let l = xt(o), _ = false;
      for (let D of t.enum) if (_n(l, D)) {
        _ = true;
        break;
      }
      n.enumValues = t.enum, n.enumValueMatch = _, _ || n.problems.push({ location: { offset: o.offset, length: o.length }, code: J.EnumValueMismatch, message: t.errorMessage || $.t("Value is not accepted. Valid values: {0}.", t.enum.map((D) => JSON.stringify(D)).join(", ")) });
    }
    if (rt(t.const)) {
      let l = xt(o);
      _n(l, t.const) ? n.enumValueMatch = true : (n.problems.push({ location: { offset: o.offset, length: o.length }, code: J.EnumValueMismatch, message: t.errorMessage || $.t("Value must be {0}.", JSON.stringify(t.const)) }), n.enumValueMatch = false), n.enumValues = [t.const];
    }
    let h = t.deprecationMessage;
    if (h || t.deprecated) {
      h = h || $.t("Value is deprecated");
      let l = o.parent?.type === "property" ? o.parent : o;
      n.problems.push({ location: { offset: l.offset, length: l.length }, severity: Ce.Warning, message: h, code: J.Deprecated });
    }
  }
  function a(d) {
    if (d.length < 2) return;
    let g = (w) => {
      let S = /* @__PURE__ */ new Map();
      for (let P = 0; P < d.length; P++) {
        let h = w(Ae(d[P]), P);
        if (!h) return;
        h.forEach(([l, _]) => {
          if (_.const !== void 0) {
            S.has(l) || S.set(l, /* @__PURE__ */ new Map());
            let D = S.get(l);
            D.has(_.const) || D.set(_.const, []), D.get(_.const).push(P);
          }
        });
      }
      return S;
    }, y = (w, S) => {
      for (let [P, h] of w) {
        let l = /* @__PURE__ */ new Set();
        if (h.forEach((_) => _.forEach((D) => l.add(D))), l.size === d.length) {
          let _ = S(P), D = h.get(_);
          if (D?.length) return D.map((m) => d[m]);
          break;
        }
      }
    };
    if (o.type === "object" && o.properties?.length) {
      let w = g((S) => S.properties ? Object.entries(S.properties).map(([P, h]) => [P, Ae(h)]) : void 0);
      if (w) return y(w, (S) => {
        let P = o.properties.find((h) => h.keyNode.value === S);
        return P?.valueNode?.type === "string" ? P.valueNode.value : void 0;
      });
    } else if (o.type === "array" && o.items?.length) {
      let w = g((S) => {
        let P = S.prefixItems || (Array.isArray(S.items) ? S.items : void 0);
        return P ? P.map((h, l) => [l, Ae(h)]) : void 0;
      });
      if (w) return y(w, (S) => {
        let P = o.items[S];
        return P?.type === "string" ? P.value : void 0;
      });
    }
  }
  function u(d) {
    let g = d.value;
    function y(D) {
      let m = /^(-?\d+)(?:\.(\d+))?(?:e([-+]\d+))?$/.exec(D.toString());
      return m && { value: Number(m[1] + (m[2] || "")), multiplier: (m[2]?.length || 0) - (parseInt(m[3]) || 0) };
    }
    if (Ee(t.multipleOf)) {
      let D = -1;
      if (Number.isInteger(t.multipleOf)) D = g % t.multipleOf;
      else {
        let m = y(t.multipleOf), p = y(g);
        if (m && p) {
          let k = 10 ** Math.abs(p.multiplier - m.multiplier);
          p.multiplier < m.multiplier ? p.value *= k : m.value *= k, D = p.value % m.value;
        }
      }
      D !== 0 && n.problems.push({ location: { offset: d.offset, length: d.length }, message: $.t("Value is not divisible by {0}.", t.multipleOf) });
    }
    function w(D, m) {
      if (Ee(m)) return m;
      if (ut(m) && m) return D;
    }
    function S(D, m) {
      if (!ut(m) || !m) return D;
    }
    let P = w(t.minimum, t.exclusiveMinimum);
    Ee(P) && g <= P && n.problems.push({ location: { offset: d.offset, length: d.length }, message: $.t("Value is below the exclusive minimum of {0}.", P) });
    let h = w(t.maximum, t.exclusiveMaximum);
    Ee(h) && g >= h && n.problems.push({ location: { offset: d.offset, length: d.length }, message: $.t("Value is above the exclusive maximum of {0}.", h) });
    let l = S(t.minimum, t.exclusiveMinimum);
    Ee(l) && g < l && n.problems.push({ location: { offset: d.offset, length: d.length }, message: $.t("Value is below the minimum of {0}.", l) });
    let _ = S(t.maximum, t.exclusiveMaximum);
    Ee(_) && g > _ && n.problems.push({ location: { offset: d.offset, length: d.length }, message: $.t("Value is above the maximum of {0}.", _) });
  }
  function c(d) {
    if (Ee(t.minLength) && pu(d.value) < t.minLength && n.problems.push({ location: { offset: d.offset, length: d.length }, message: $.t("String is shorter than the minimum length of {0}.", t.minLength) }), Ee(t.maxLength) && pu(d.value) > t.maxLength && n.problems.push({ location: { offset: d.offset, length: d.length }, message: $.t("String is longer than the maximum length of {0}.", t.maxLength) }), Ao(t.pattern)) {
      let g = wn(t.pattern);
      g && !g.test(d.value) && n.problems.push({ location: { offset: d.offset, length: d.length }, message: t.patternErrorMessage || t.errorMessage || $.t('String does not match the pattern of "{0}".', t.pattern) });
    }
    if (t.format) switch (t.format) {
      case "uri":
      case "uri-reference":
        {
          let y;
          if (!d.value) y = $.t("URI expected.");
          else {
            let w = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/.exec(d.value);
            w ? !w[2] && t.format === "uri" && (y = $.t("URI with a scheme is expected.")) : y = $.t("URI is expected.");
          }
          y && n.problems.push({ location: { offset: d.offset, length: d.length }, message: t.patternErrorMessage || t.errorMessage || $.t("String is not a URI: {0}", y) });
        }
        break;
      case "color-hex":
      case "date-time":
      case "date":
      case "time":
      case "email":
      case "hostname":
      case "ipv4":
      case "ipv6":
        let g = Lv[t.format];
        (!d.value || !g.pattern.exec(d.value)) && n.problems.push({ location: { offset: d.offset, length: d.length }, message: t.patternErrorMessage || t.errorMessage || g.errorMessage });
      default:
    }
  }
  function f(d) {
    let g, y;
    i.schemaDraft >= Ze.v2020_12 ? (g = t.prefixItems, y = Array.isArray(t.items) ? void 0 : t.items) : (g = Array.isArray(t.items) ? t.items : void 0, y = Array.isArray(t.items) ? t.additionalItems : t.items);
    let w = 0;
    if (g !== void 0) {
      let l = Math.min(g.length, d.items.length);
      for (; w < l; w++) {
        let _ = g[w], D = Ae(_), m = new Ne(), p = d.items[w];
        p && (Me(p, D, m, r, i), n.mergePropertyMatch(m)), n.processedProperties.add(String(w));
      }
    }
    if (y !== void 0 && w < d.items.length) if (typeof y == "boolean") for (y === false && n.problems.push({ location: { offset: d.offset, length: d.length }, message: $.t("Array has too many items according to schema. Expected {0} or fewer.", w) }); w < d.items.length; w++) n.processedProperties.add(String(w)), n.propertiesValueMatches++;
    else for (; w < d.items.length; w++) {
      let l = new Ne();
      Me(d.items[w], y, l, r, i), n.mergePropertyMatch(l), n.processedProperties.add(String(w));
    }
    let S = Ae(t.contains);
    if (S) {
      let l = 0;
      for (let _ = 0; _ < d.items.length; _++) {
        let D = d.items[_], m = new Ne();
        Me(D, S, m, cr.instance, i), m.hasProblems() || (l++, i.schemaDraft >= Ze.v2020_12 && n.processedProperties.add(String(_)));
      }
      l === 0 && !Ee(t.minContains) && n.problems.push({ location: { offset: d.offset, length: d.length }, message: t.errorMessage || $.t("Array does not contain required item.") }), Ee(t.minContains) && l < t.minContains && n.problems.push({ location: { offset: d.offset, length: d.length }, message: t.errorMessage || $.t("Array has too few items that match the contains contraint. Expected {0} or more.", t.minContains) }), Ee(t.maxContains) && l > t.maxContains && n.problems.push({ location: { offset: d.offset, length: d.length }, message: t.errorMessage || $.t("Array has too many items that match the contains contraint. Expected {0} or less.", t.maxContains) });
    }
    let P = t.unevaluatedItems;
    if (P !== void 0) for (let l = 0; l < d.items.length; l++) {
      if (!n.processedProperties.has(String(l))) if (P === false) n.problems.push({ location: { offset: d.offset, length: d.length }, message: $.t("Item does not match any validation rule from the array.") });
      else {
        let _ = new Ne();
        Me(d.items[l], t.unevaluatedItems, _, r, i), n.mergePropertyMatch(_);
      }
      n.processedProperties.add(String(l)), n.propertiesValueMatches++;
    }
    if (Ee(t.minItems) && d.items.length < t.minItems && n.problems.push({ location: { offset: d.offset, length: d.length }, message: $.t("Array has too few items. Expected {0} or more.", t.minItems) }), Ee(t.maxItems) && d.items.length > t.maxItems && n.problems.push({ location: { offset: d.offset, length: d.length }, message: $.t("Array has too many items. Expected {0} or fewer.", t.maxItems) }), t.uniqueItems === true) {
      let _ = function() {
        for (let D = 0; D < l.length - 1; D++) {
          let m = l[D];
          for (let p = D + 1; p < l.length; p++) if (_n(m, l[p])) return true;
        }
        return false;
      };
      var h = _;
      let l = xt(d);
      _() && n.problems.push({ location: { offset: d.offset, length: d.length }, message: $.t("Array has duplicate items.") });
    }
  }
  function v(d) {
    let g = /* @__PURE__ */ Object.create(null), y = /* @__PURE__ */ new Set();
    for (let _ of d.properties) {
      let D = _.keyNode.value;
      g[D] = _.valueNode, y.add(D);
    }
    if (Array.isArray(t.required)) {
      for (let _ of t.required) if (!g[_]) {
        let D = d.parent && d.parent.type === "property" && d.parent.keyNode, m = D ? { offset: D.offset, length: D.length } : { offset: d.offset, length: 1 };
        n.problems.push({ location: m, message: $.t('Missing property "{0}".', _) });
      }
    }
    let w = (_) => {
      y.delete(_), n.processedProperties.add(_);
    };
    if (t.properties) for (let _ of Object.keys(t.properties)) {
      w(_);
      let D = t.properties[_], m = g[_];
      if (m) if (ut(D)) if (D) n.propertiesMatches++, n.propertiesValueMatches++;
      else {
        let p = m.parent;
        n.problems.push({ location: { offset: p.keyNode.offset, length: p.keyNode.length }, message: t.errorMessage || $.t("Property {0} is not allowed.", _) });
      }
      else {
        let p = new Ne();
        Me(m, D, p, r, i), n.mergePropertyMatch(p);
      }
    }
    if (t.patternProperties) for (let _ of Object.keys(t.patternProperties)) {
      let D = wn(_);
      if (D) {
        let m = [];
        for (let p of y) if (D.test(p)) {
          m.push(p);
          let k = g[p];
          if (k) {
            let N = t.patternProperties[_];
            if (ut(N)) if (N) n.propertiesMatches++, n.propertiesValueMatches++;
            else {
              let T = k.parent;
              n.problems.push({ location: { offset: T.keyNode.offset, length: T.keyNode.length }, message: t.errorMessage || $.t("Property {0} is not allowed.", p) });
            }
            else {
              let T = new Ne();
              Me(k, N, T, r, i), n.mergePropertyMatch(T);
            }
          }
        }
        m.forEach(w);
      }
    }
    let S = t.additionalProperties;
    if (S !== void 0) for (let _ of y) {
      w(_);
      let D = g[_];
      if (D) {
        if (S === false) {
          let m = D.parent;
          n.problems.push({ location: { offset: m.keyNode.offset, length: m.keyNode.length }, message: t.errorMessage || $.t("Property {0} is not allowed.", _) });
        } else if (S !== true) {
          let m = new Ne();
          Me(D, S, m, r, i), n.mergePropertyMatch(m);
        }
      }
    }
    let P = t.unevaluatedProperties;
    if (P !== void 0) {
      let _ = [];
      for (let D of y) if (!n.processedProperties.has(D)) {
        _.push(D);
        let m = g[D];
        if (m) {
          if (P === false) {
            let p = m.parent;
            n.problems.push({ location: { offset: p.keyNode.offset, length: p.keyNode.length }, message: t.errorMessage || $.t("Property {0} is not allowed.", D) });
          } else if (P !== true) {
            let p = new Ne();
            Me(m, P, p, r, i), n.mergePropertyMatch(p);
          }
        }
      }
      _.forEach(w);
    }
    if (Ee(t.maxProperties) && d.properties.length > t.maxProperties && n.problems.push({ location: { offset: d.offset, length: d.length }, message: $.t("Object has more properties than limit of {0}.", t.maxProperties) }), Ee(t.minProperties) && d.properties.length < t.minProperties && n.problems.push({ location: { offset: d.offset, length: d.length }, message: $.t("Object has fewer properties than the required number of {0}", t.minProperties) }), t.dependentRequired) for (let _ in t.dependentRequired) {
      let D = g[_], m = t.dependentRequired[_];
      D && Array.isArray(m) && l(_, m);
    }
    if (t.dependentSchemas) for (let _ in t.dependentSchemas) {
      let D = g[_], m = t.dependentSchemas[_];
      D && Pt(m) && l(_, m);
    }
    if (t.dependencies) for (let _ in t.dependencies) g[_] && l(_, t.dependencies[_]);
    let h = Ae(t.propertyNames);
    if (h) for (let _ of d.properties) {
      let D = _.keyNode;
      D && Me(D, h, n, r, i);
    }
    function l(_, D) {
      if (Array.isArray(D)) for (let m of D) g[m] ? n.propertiesValueMatches++ : n.problems.push({ location: { offset: d.offset, length: d.length }, message: $.t("Object is missing property {0} required by property {1}.", m, _) });
      else {
        let m = Ae(D);
        if (m) {
          let p = new Ne();
          Me(d, m, p, r, i), n.mergePropertyMatch(p);
        }
      }
    }
  }
}
function Vh(e, t) {
  let n = [], r = -1, i = e.getText(), o = ct(i, false), s = t && t.collectComments ? [] : void 0;
  function a() {
    for (; ; ) {
      let p = o.scan();
      switch (v(), p) {
        case 12:
        case 13:
          Array.isArray(s) && s.push(U.create(e.positionAt(o.getTokenOffset()), e.positionAt(o.getTokenOffset() + o.getTokenLength())));
          break;
        case 15:
        case 14:
          break;
        default:
          return p;
      }
    }
  }
  function u(p) {
    return o.getToken() === p ? (a(), true) : false;
  }
  function c(p, k, N, T, M = Ce.Error) {
    if (n.length === 0 || N !== r) {
      let O = U.create(e.positionAt(N), e.positionAt(T));
      n.push(Ye.create(O, p, M, k, e.languageId)), r = N;
    }
  }
  function f(p, k, N = void 0, T = [], M = []) {
    let O = o.getTokenOffset(), A = o.getTokenOffset() + o.getTokenLength();
    if (O === A && O > 0) {
      for (O--; O > 0 && /\s/.test(i.charAt(O)); ) O--;
      A = O + 1;
    }
    if (c(p, k, O, A), N && d(N, false), T.length + M.length > 0) {
      let q = o.getToken();
      for (; q !== 17; ) {
        if (T.indexOf(q) !== -1) {
          a();
          break;
        } else if (M.indexOf(q) !== -1) break;
        q = a();
      }
    }
    return N;
  }
  function v() {
    switch (o.getTokenError()) {
      case 4:
        return f($.t("Invalid unicode sequence in string."), J.InvalidUnicode), true;
      case 5:
        return f($.t("Invalid escape character in string."), J.InvalidEscapeCharacter), true;
      case 3:
        return f($.t("Unexpected end of number."), J.UnexpectedEndOfNumber), true;
      case 1:
        return f($.t("Unexpected end of comment."), J.UnexpectedEndOfComment), true;
      case 2:
        return f($.t("Unexpected end of string."), J.UnexpectedEndOfString), true;
      case 6:
        return f($.t("Invalid characters in string. Control characters must be escaped."), J.InvalidCharacter), true;
    }
    return false;
  }
  function d(p, k) {
    return p.length = o.getTokenOffset() + o.getTokenLength() - p.offset, k && a(), p;
  }
  function g(p) {
    if (o.getToken() !== 3) return;
    let k = new yu(p, o.getTokenOffset());
    a();
    let N = 0, T = false;
    for (; o.getToken() !== 4 && o.getToken() !== 17; ) {
      if (o.getToken() === 5) {
        T || f($.t("Value expected"), J.ValueExpected);
        let O = o.getTokenOffset();
        if (a(), o.getToken() === 4) {
          T && c($.t("Trailing comma"), J.TrailingComma, O, O + 1);
          continue;
        }
      } else T && f($.t("Expected comma"), J.CommaExpected);
      let M = _(k);
      M ? k.items.push(M) : f($.t("Value expected"), J.ValueExpected, void 0, [], [4, 5]), T = true;
    }
    return o.getToken() !== 4 ? f($.t("Expected comma or closing bracket"), J.CommaOrCloseBacketExpected, k) : d(k, true);
  }
  let y = new Br(void 0, 0, 0);
  function w(p, k) {
    let N = new vu(p, o.getTokenOffset(), y), T = P(N);
    if (!T) if (o.getToken() === 16) {
      f($.t("Property keys must be doublequoted"), J.PropertyKeysMustBeDoublequoted);
      let O = new Br(N, o.getTokenOffset(), o.getTokenLength());
      O.value = o.getTokenValue(), T = O, a();
    } else return;
    if (N.keyNode = T, T.value !== "//") {
      let O = k[T.value];
      O ? (c($.t("Duplicate object key"), J.DuplicateKey, N.keyNode.offset, N.keyNode.offset + N.keyNode.length, Ce.Warning), Pt(O) && c($.t("Duplicate object key"), J.DuplicateKey, O.keyNode.offset, O.keyNode.offset + O.keyNode.length, Ce.Warning), k[T.value] = true) : k[T.value] = N;
    }
    if (o.getToken() === 6) N.colonOffset = o.getTokenOffset(), a();
    else if (f($.t("Colon expected"), J.ColonExpected), o.getToken() === 10 && e.positionAt(T.offset + T.length).line < e.positionAt(o.getTokenOffset()).line) return N.length = T.length, N;
    let M = _(N);
    return M ? (N.valueNode = M, N.length = M.offset + M.length - N.offset, N) : f($.t("Value expected"), J.ValueExpected, N, [], [2, 5]);
  }
  function S(p) {
    if (o.getToken() !== 1) return;
    let k = new _u(p, o.getTokenOffset()), N = /* @__PURE__ */ Object.create(null);
    a();
    let T = false;
    for (; o.getToken() !== 2 && o.getToken() !== 17; ) {
      if (o.getToken() === 5) {
        T || f($.t("Property expected"), J.PropertyExpected);
        let O = o.getTokenOffset();
        if (a(), o.getToken() === 2) {
          T && c($.t("Trailing comma"), J.TrailingComma, O, O + 1);
          continue;
        }
      } else T && f($.t("Expected comma"), J.CommaExpected);
      let M = w(k, N);
      M ? k.properties.push(M) : f($.t("Property expected"), J.PropertyExpected, void 0, [], [2, 5]), T = true;
    }
    return o.getToken() !== 2 ? f($.t("Expected comma or closing brace"), J.CommaOrCloseBraceExpected, k) : d(k, true);
  }
  function P(p) {
    if (o.getToken() !== 10) return;
    let k = new Br(p, o.getTokenOffset());
    return k.value = o.getTokenValue(), d(k, true);
  }
  function h(p) {
    if (o.getToken() !== 11) return;
    let k = new bu(p, o.getTokenOffset());
    if (o.getTokenError() === 0) {
      let N = o.getTokenValue();
      try {
        let T = JSON.parse(N);
        if (!Ee(T)) return f($.t("Invalid number format."), J.Undefined, k);
        k.value = T;
      } catch {
        return f($.t("Invalid number format."), J.Undefined, k);
      }
      k.isInteger = N.indexOf(".") === -1;
    }
    return d(k, true);
  }
  function l(p) {
    let k;
    switch (o.getToken()) {
      case 7:
        return d(new gu(p, o.getTokenOffset()), true);
      case 8:
        return d(new Vo(p, true, o.getTokenOffset()), true);
      case 9:
        return d(new Vo(p, false, o.getTokenOffset()), true);
      default:
        return;
    }
  }
  function _(p) {
    return g(p) || S(p) || P(p) || h(p) || l(p);
  }
  let D;
  return a() !== 17 && (D = _(D), D ? o.getToken() !== 17 && f($.t("End of file expected."), J.Undefined) : f($.t("Expected a JSON object, array or literal."), J.Undefined)), new Uo(D, n, s);
}
var $, Lv, Lt, gu, Vo, yu, bu, Br, vu, _u, Ih, Lh, Fv, $v, Wo, wu, cr, Ne, Uo, ur = Z(() => {
  "use strict";
  on();
  $r();
  Vr();
  it();
  Hr();
  $ = ze(vt()), Lv = { "color-hex": { errorMessage: $.t("Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA."), pattern: /^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/ }, "date-time": { errorMessage: $.t("String is not a RFC3339 date-time."), pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i }, date: { errorMessage: $.t("String is not a RFC3339 date."), pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/i }, time: { errorMessage: $.t("String is not a RFC3339 time."), pattern: /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i }, email: { errorMessage: $.t("String is not an e-mail address."), pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/ }, hostname: { errorMessage: $.t("String is not a hostname."), pattern: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i }, ipv4: { errorMessage: $.t("String is not an IPv4 address."), pattern: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/ }, ipv6: { errorMessage: $.t("String is not an IPv6 address."), pattern: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i } }, Lt = class {
    constructor(t, n, r = 0) {
      this.offset = n, this.length = r, this.parent = t;
    }
    get children() {
      return [];
    }
    toString() {
      return "type: " + this.type + " (" + this.offset + "/" + this.length + ")" + (this.parent ? " parent: {" + this.parent.toString() + "}" : "");
    }
  }, gu = class extends Lt {
    constructor(t, n) {
      super(t, n), this.type = "null", this.value = null;
    }
  }, Vo = class extends Lt {
    constructor(t, n, r) {
      super(t, r), this.type = "boolean", this.value = n;
    }
  }, yu = class extends Lt {
    constructor(t, n) {
      super(t, n), this.type = "array", this.items = [];
    }
    get children() {
      return this.items;
    }
  }, bu = class extends Lt {
    constructor(t, n) {
      super(t, n), this.type = "number", this.isInteger = true, this.value = Number.NaN;
    }
  }, Br = class extends Lt {
    constructor(t, n, r) {
      super(t, n, r), this.type = "string", this.value = "";
    }
  }, vu = class extends Lt {
    constructor(t, n, r) {
      super(t, n), this.type = "property", this.colonOffset = -1, this.keyNode = r;
    }
    get children() {
      return this.valueNode ? [this.keyNode, this.valueNode] : [this.keyNode];
    }
  }, _u = class extends Lt {
    constructor(t, n) {
      super(t, n), this.type = "object", this.properties = [];
    }
    get children() {
      return this.properties;
    }
  };
  (function(e) {
    e[e.Key = 0] = "Key", e[e.Enum = 1] = "Enum";
  })(Ih || (Ih = {}));
  Lh = "http://json-schema.org/", Fv = "https://json-schema.org/";
  $v = { "https://json-schema.org/draft-03/schema": Ze.v3, "https://json-schema.org/draft-04/schema": Ze.v4, "https://json-schema.org/draft-06/schema": Ze.v6, "https://json-schema.org/draft-07/schema": Ze.v7, "https://json-schema.org/draft/2019-09/schema": Ze.v2019_09, "https://json-schema.org/draft/2020-12/schema": Ze.v2020_12 }, Wo = class {
    constructor(t) {
      this.schemaDraft = t;
    }
  }, wu = class e {
    constructor(t = -1, n) {
      this.focusOffset = t, this.exclude = n, this.schemas = [];
    }
    add(t) {
      this.schemas.push(t);
    }
    merge(t) {
      Array.prototype.push.apply(this.schemas, t.schemas);
    }
    include(t) {
      return (this.focusOffset === -1 || Su(t, this.focusOffset)) && t !== this.exclude;
    }
    newSub() {
      return new e(-1, this.exclude);
    }
  }, cr = class {
    constructor() {
    }
    get schemas() {
      return [];
    }
    add(t) {
    }
    merge(t) {
    }
    include(t) {
      return true;
    }
    newSub() {
      return this;
    }
  };
  cr.instance = new cr();
  Ne = class {
    constructor() {
      this.problems = [], this.propertiesMatches = 0, this.processedProperties = /* @__PURE__ */ new Set(), this.propertiesValueMatches = 0, this.primaryValueMatches = 0, this.enumValueMatch = false, this.enumValues = void 0;
    }
    hasProblems() {
      return !!this.problems.length;
    }
    merge(t) {
      this.problems = this.problems.concat(t.problems), this.propertiesMatches += t.propertiesMatches, this.propertiesValueMatches += t.propertiesValueMatches, this.mergeProcessedProperties(t);
    }
    mergeEnumValues(t) {
      !this.enumValueMatch && !t.enumValueMatch && this.enumValues && t.enumValues && (this.enumValues = this.enumValues.concat(t.enumValues));
    }
    updateEnumMismatchProblemMessages() {
      if (!this.enumValueMatch && this.enumValues) for (let t of this.problems) t.code === J.EnumValueMismatch && (t.message = $.t("Value is not accepted. Valid values: {0}.", this.enumValues.map((n) => JSON.stringify(n)).join(", ")));
    }
    mergePropertyMatch(t) {
      this.problems = this.problems.concat(t.problems), this.propertiesMatches++, (t.enumValueMatch || !t.hasProblems() && t.propertiesMatches) && this.propertiesValueMatches++, t.enumValueMatch && t.enumValues && t.enumValues.length === 1 && this.primaryValueMatches++;
    }
    mergeProcessedProperties(t) {
      t.processedProperties.forEach((n) => this.processedProperties.add(n));
    }
    compare(t) {
      let n = this.hasProblems();
      return n !== t.hasProblems() ? n ? -1 : 1 : this.enumValueMatch !== t.enumValueMatch ? t.enumValueMatch ? -1 : 1 : this.primaryValueMatches !== t.primaryValueMatches ? this.primaryValueMatches - t.primaryValueMatches : this.propertiesValueMatches !== t.propertiesValueMatches ? this.propertiesValueMatches - t.propertiesValueMatches : this.propertiesMatches - t.propertiesMatches;
    }
  };
  Uo = class {
    constructor(t, n = [], r = []) {
      this.root = t, this.syntaxErrors = n, this.comments = r;
    }
    getNodeFromOffset(t, n = false) {
      if (this.root) return vh(this.root, t, n);
    }
    visit(t) {
      if (this.root) {
        let n = (r) => {
          let i = t(r), o = r.children;
          if (Array.isArray(o)) for (let s = 0; s < o.length && i; s++) i = n(o[s]);
          return i;
        };
        n(this.root);
      }
    }
    validate(t, n, r = Ce.Warning, i) {
      if (this.root && n) {
        let o = new Ne();
        return Me(this.root, n, o, cr.instance, new Wo(i ?? Fh(n))), o.problems.map((s) => {
          let a = U.create(t.positionAt(s.location.offset), t.positionAt(s.location.offset + s.location.length));
          return Ye.create(a, s.message, s.severity ?? r, s.code);
        });
      }
    }
    getMatchingSchemas(t, n = -1, r) {
      if (this.root && t) {
        let i = new wu(n, r), o = Fh(t), s = new Wo(o);
        return Me(this.root, t, new Ne(), i, s), i.schemas;
      }
      return [];
    }
  };
});
function Ho(e, t, n) {
  if (e !== null && typeof e == "object") {
    let r = t + "	";
    if (Array.isArray(e)) {
      if (e.length === 0) return "[]";
      let i = `[
`;
      for (let o = 0; o < e.length; o++) i += r + Ho(e[o], r, n), o < e.length - 1 && (i += ","), i += `
`;
      return i += t + "]", i;
    } else {
      let i = Object.keys(e);
      if (i.length === 0) return "{}";
      let o = `{
`;
      for (let s = 0; s < i.length; s++) {
        let a = i[s];
        o += r + JSON.stringify(a) + ": " + Ho(e[a], r, n), s < i.length - 1 && (o += ","), o += `
`;
      }
      return o += t + "}", o;
    }
  }
  return n(e);
}
var Wh = Z(() => {
  "use strict";
});
var Jr, Vv, Wv, Bo, Uh = Z(() => {
  "use strict";
  ur();
  on();
  Wh();
  Vr();
  $r();
  it();
  Jr = ze(vt()), Vv = [",", "}", "]"], Wv = [":"], Bo = class {
    constructor(t, n = [], r = Promise, i = {}) {
      this.schemaService = t, this.contributions = n, this.promiseConstructor = r, this.clientCapabilities = i;
    }
    doResolve(t) {
      for (let n = this.contributions.length - 1; n >= 0; n--) {
        let r = this.contributions[n].resolveCompletion;
        if (r) {
          let i = r(t);
          if (i) return i;
        }
      }
      return this.promiseConstructor.resolve(t);
    }
    doComplete(t, n, r) {
      let i = { items: [], isIncomplete: false }, o = t.getText(), s = t.offsetAt(n), a = r.getNodeFromOffset(s, true);
      if (this.isInComment(t, a ? a.offset : 0, s)) return Promise.resolve(i);
      if (a && s === a.offset + a.length && s > 0) {
        let g = o[s - 1];
        (a.type === "object" && g === "}" || a.type === "array" && g === "]") && (a = a.parent);
      }
      let u = this.getCurrentWord(t, s), c;
      if (a && (a.type === "string" || a.type === "number" || a.type === "boolean" || a.type === "null")) c = U.create(t.positionAt(a.offset), t.positionAt(a.offset + a.length));
      else {
        let g = s - u.length;
        g > 0 && o[g - 1] === '"' && g--, c = U.create(t.positionAt(g), n);
      }
      let f = false, v = /* @__PURE__ */ new Map(), d = { add: (g) => {
        let y = g.label, w = v.get(y);
        if (w) w.documentation || (w.documentation = g.documentation), w.detail || (w.detail = g.detail), w.labelDetails || (w.labelDetails = g.labelDetails);
        else {
          if (y = y.replace(/[\n]/g, "↵"), y.length > 60) {
            let S = y.substr(0, 57).trim() + "...";
            v.has(S) || (y = S);
          }
          g.textEdit = Se.replace(c, g.insertText), f && (g.commitCharacters = g.kind === je.Property ? Wv : Vv), g.label = y, v.set(y, g), i.items.push(g);
        }
      }, setAsIncomplete: () => {
        i.isIncomplete = true;
      }, error: (g) => {
        console.error(g);
      }, getNumberOfProposals: () => i.items.length };
      return this.schemaService.getSchemaForResource(t.uri, r).then((g) => {
        let y = [], w = true, S = "", P;
        if (a && a.type === "string") {
          let l = a.parent;
          l && l.type === "property" && l.keyNode === a && (w = !l.valueNode, P = l, S = o.substr(a.offset + 1, a.length - 2), l && (a = l.parent));
        }
        if (a && a.type === "object") {
          if (a.offset === s) return i;
          a.properties.forEach((m) => {
            (!P || P !== m) && v.set(m.keyNode.value, qn.create("__"));
          });
          let _ = "";
          w && (_ = this.evaluateSeparatorAfter(t, t.offsetAt(c.end))), g ? this.getPropertyCompletions(g, r, a, w, _, d) : this.getSchemaLessPropertyCompletions(r, a, S, d);
          let D = zr(a);
          this.contributions.forEach((m) => {
            let p = m.collectPropertyCompletions(t.uri, D, u, w, _ === "", d);
            p && y.push(p);
          }), !g && u.length > 0 && o.charAt(s - u.length - 1) !== '"' && (d.add({ kind: je.Property, label: this.getLabelForValue(u), insertText: this.getInsertTextForProperty(u, void 0, false, _), insertTextFormat: pe.Snippet, documentation: "" }), d.setAsIncomplete());
        }
        let h = {};
        return g ? this.getValueCompletions(g, r, a, s, t, d, h) : this.getSchemaLessValueCompletions(r, a, s, t, d), this.contributions.length > 0 && this.getContributedValueCompletions(r, a, s, t, d, y), this.promiseConstructor.all(y).then(() => {
          if (d.getNumberOfProposals() === 0) {
            let l = s;
            a && (a.type === "string" || a.type === "number" || a.type === "boolean" || a.type === "null") && (l = a.offset + a.length);
            let _ = this.evaluateSeparatorAfter(t, l);
            this.addFillerValueCompletions(h, _, d);
          }
          return i;
        });
      });
    }
    getPropertyCompletions(t, n, r, i, o, s) {
      n.getMatchingSchemas(t.schema, r.offset).forEach((u) => {
        if (u.node === r && !u.inverted) {
          let c = u.schema.properties;
          c && Object.keys(c).forEach((v) => {
            let d = c[v];
            if (typeof d == "object" && !d.deprecationMessage && !d.doNotSuggest) {
              let g = { kind: je.Property, label: v, insertText: this.getInsertTextForProperty(v, d, i, o), insertTextFormat: pe.Snippet, filterText: this.getFilterTextForValue(v), documentation: this.fromMarkup(d.markdownDescription) || d.description || "" };
              d.completionDetail !== void 0 && (g.detail = d.completionDetail), d.suggestSortText !== void 0 && (g.sortText = d.suggestSortText), g.insertText && sn(g.insertText, `$1${o}`) && (g.command = { title: "Suggest", command: "editor.action.triggerSuggest" }), s.add(g);
            }
          });
          let f = u.schema.propertyNames;
          if (typeof f == "object" && !f.deprecationMessage && !f.doNotSuggest) {
            let v = (d, g, y, w) => {
              let S = { kind: je.Property, label: d, insertText: this.getInsertTextForProperty(d, void 0, i, o), insertTextFormat: pe.Snippet, filterText: this.getFilterTextForValue(d), documentation: g || this.fromMarkup(f.markdownDescription) || f.description || "", sortText: w, detail: y };
              S.insertText && sn(S.insertText, `$1${o}`) && (S.command = { title: "Suggest", command: "editor.action.triggerSuggest" }), s.add(S);
            };
            if (f.enum) for (let d = 0; d < f.enum.length; d++) {
              let g;
              f.markdownEnumDescriptions && d < f.markdownEnumDescriptions.length ? g = this.fromMarkup(f.markdownEnumDescriptions[d]) : f.enumDescriptions && d < f.enumDescriptions.length && (g = f.enumDescriptions[d]);
              let y = f.enumSortTexts?.[d], w = f.enumDetails?.[d];
              v(f.enum[d], g, w, y);
            }
            if (f.examples) for (let d = 0; d < f.examples.length; d++) v(f.examples[d], void 0, void 0, void 0);
            f.const && v(f.const, void 0, f.completionDetail, f.suggestSortText);
          }
        }
      });
    }
    getSchemaLessPropertyCompletions(t, n, r, i) {
      let o = (s) => {
        s.properties.forEach((a) => {
          let u = a.keyNode.value;
          i.add({ kind: je.Property, label: u, insertText: this.getInsertTextForValue(u, ""), insertTextFormat: pe.Snippet, filterText: this.getFilterTextForValue(u), documentation: "" });
        });
      };
      if (n.parent) if (n.parent.type === "property") {
        let s = n.parent.keyNode.value;
        t.visit((a) => (a.type === "property" && a !== n.parent && a.keyNode.value === s && a.valueNode && a.valueNode.type === "object" && o(a.valueNode), true));
      } else n.parent.type === "array" && n.parent.items.forEach((s) => {
        s.type === "object" && s !== n && o(s);
      });
      else n.type === "object" && i.add({ kind: je.Property, label: "$schema", insertText: this.getInsertTextForProperty("$schema", void 0, true, ""), insertTextFormat: pe.Snippet, documentation: "", filterText: this.getFilterTextForValue("$schema") });
    }
    getSchemaLessValueCompletions(t, n, r, i, o) {
      let s = r;
      if (n && (n.type === "string" || n.type === "number" || n.type === "boolean" || n.type === "null") && (s = n.offset + n.length, n = n.parent), !n) {
        o.add({ kind: this.getSuggestionKind("object"), label: "Empty object", insertText: this.getInsertTextForValue({}, ""), insertTextFormat: pe.Snippet, documentation: "" }), o.add({ kind: this.getSuggestionKind("array"), label: "Empty array", insertText: this.getInsertTextForValue([], ""), insertTextFormat: pe.Snippet, documentation: "" });
        return;
      }
      let a = this.evaluateSeparatorAfter(i, s), u = (c) => {
        c.parent && !Su(c.parent, r, true) && o.add({ kind: this.getSuggestionKind(c.type), label: this.getLabelTextForMatchingNode(c, i), insertText: this.getInsertTextForMatchingNode(c, i, a), insertTextFormat: pe.Snippet, documentation: "" }), c.type === "boolean" && this.addBooleanValueCompletion(!c.value, a, o);
      };
      if (n.type === "property" && r > (n.colonOffset || 0)) {
        let c = n.valueNode;
        if (c && (r > c.offset + c.length || c.type === "object" || c.type === "array")) return;
        let f = n.keyNode.value;
        t.visit((v) => (v.type === "property" && v.keyNode.value === f && v.valueNode && u(v.valueNode), true)), f === "$schema" && n.parent && !n.parent.parent && this.addDollarSchemaCompletions(a, o);
      }
      if (n.type === "array") if (n.parent && n.parent.type === "property") {
        let c = n.parent.keyNode.value;
        t.visit((f) => (f.type === "property" && f.keyNode.value === c && f.valueNode && f.valueNode.type === "array" && f.valueNode.items.forEach(u), true));
      } else n.items.forEach(u);
    }
    getValueCompletions(t, n, r, i, o, s, a) {
      let u = i, c, f;
      if (r && (r.type === "string" || r.type === "number" || r.type === "boolean" || r.type === "null") && (u = r.offset + r.length, f = r, r = r.parent), !r) {
        this.addSchemaValueCompletions(t.schema, "", s, a);
        return;
      }
      if (r.type === "property" && i > (r.colonOffset || 0)) {
        let v = r.valueNode;
        if (v && i > v.offset + v.length) return;
        c = r.keyNode.value, r = r.parent;
      }
      if (r && (c !== void 0 || r.type === "array")) {
        let v = this.evaluateSeparatorAfter(o, u), d = n.getMatchingSchemas(t.schema, r.offset, f);
        for (let g of d) if (g.node === r && !g.inverted && g.schema) {
          if (r.type === "array" && g.schema.items) {
            let y = s;
            if (g.schema.uniqueItems) {
              let w = /* @__PURE__ */ new Set();
              r.children.forEach((S) => {
                S.type !== "array" && S.type !== "object" && w.add(this.getLabelForValue(xt(S)));
              }), y = { ...s, add(S) {
                w.has(S.label) || s.add(S);
              } };
            }
            if (Array.isArray(g.schema.items)) {
              let w = this.findItemAtOffset(r, o, i);
              w < g.schema.items.length && this.addSchemaValueCompletions(g.schema.items[w], v, y, a);
            } else this.addSchemaValueCompletions(g.schema.items, v, y, a);
          }
          if (c !== void 0) {
            let y = false;
            if (g.schema.properties) {
              let w = g.schema.properties[c];
              w && (y = true, this.addSchemaValueCompletions(w, v, s, a));
            }
            if (g.schema.patternProperties && !y) {
              for (let w of Object.keys(g.schema.patternProperties)) if (wn(w)?.test(c)) {
                y = true;
                let P = g.schema.patternProperties[w];
                this.addSchemaValueCompletions(P, v, s, a);
              }
            }
            if (g.schema.additionalProperties && !y) {
              let w = g.schema.additionalProperties;
              this.addSchemaValueCompletions(w, v, s, a);
            }
          }
        }
        c === "$schema" && !r.parent && this.addDollarSchemaCompletions(v, s), a.boolean && (this.addBooleanValueCompletion(true, v, s), this.addBooleanValueCompletion(false, v, s)), a.null && this.addNullValueCompletion(v, s);
      }
    }
    getContributedValueCompletions(t, n, r, i, o, s) {
      if (!n) this.contributions.forEach((a) => {
        let u = a.collectDefaultCompletions(i.uri, o);
        u && s.push(u);
      });
      else if ((n.type === "string" || n.type === "number" || n.type === "boolean" || n.type === "null") && (n = n.parent), n && n.type === "property" && r > (n.colonOffset || 0)) {
        let a = n.keyNode.value, u = n.valueNode;
        if ((!u || r <= u.offset + u.length) && n.parent) {
          let c = zr(n.parent);
          this.contributions.forEach((f) => {
            let v = f.collectValueCompletions(i.uri, c, a, o);
            v && s.push(v);
          });
        }
      }
    }
    addSchemaValueCompletions(t, n, r, i) {
      typeof t == "object" && (this.addEnumValueCompletions(t, n, r), this.addDefaultValueCompletions(t, n, r), this.collectTypes(t, i), Array.isArray(t.allOf) && t.allOf.forEach((o) => this.addSchemaValueCompletions(o, n, r, i)), Array.isArray(t.anyOf) && t.anyOf.forEach((o) => this.addSchemaValueCompletions(o, n, r, i)), Array.isArray(t.oneOf) && t.oneOf.forEach((o) => this.addSchemaValueCompletions(o, n, r, i)));
    }
    addDefaultValueCompletions(t, n, r, i = 0) {
      let o = false;
      if (rt(t.default)) {
        let s = t.type, a = t.default;
        for (let c = i; c > 0; c--) a = [a], s = "array";
        let u = { kind: this.getSuggestionKind(s), label: this.getLabelForValue(a), insertText: this.getInsertTextForValue(a, n), insertTextFormat: pe.Snippet };
        this.doesSupportsLabelDetails() ? u.labelDetails = { description: Jr.t("Default value") } : u.detail = Jr.t("Default value"), r.add(u), o = true;
      }
      Array.isArray(t.examples) && t.examples.forEach((s) => {
        let a = t.type, u = s;
        for (let c = i; c > 0; c--) u = [u], a = "array";
        r.add({ kind: this.getSuggestionKind(a), label: this.getLabelForValue(u), insertText: this.getInsertTextForValue(u, n), insertTextFormat: pe.Snippet }), o = true;
      }), Array.isArray(t.defaultSnippets) && t.defaultSnippets.forEach((s) => {
        let a = t.type, u = s.body, c = s.label, f, v;
        if (rt(u)) {
          let d = t.type;
          for (let g = i; g > 0; g--) u = [u], d = "array";
          f = this.getInsertTextForSnippetValue(u, n), v = this.getFilterTextForSnippetValue(u), c = c || this.getLabelForSnippetValue(u);
        } else if (typeof s.bodyText == "string") {
          let d = "", g = "", y = "";
          for (let w = i; w > 0; w--) d = d + y + `[
`, g = g + `
` + y + "]", y += "	", a = "array";
          f = d + y + s.bodyText.split(`
`).join(`
` + y) + g + n, c = c || f, v = f.replace(/[\n]/g, "");
        } else return;
        r.add({ kind: this.getSuggestionKind(a), label: c, documentation: this.fromMarkup(s.markdownDescription) || s.description, insertText: f, insertTextFormat: pe.Snippet, filterText: v }), o = true;
      }), !o && typeof t.items == "object" && !Array.isArray(t.items) && i < 5 && this.addDefaultValueCompletions(t.items, n, r, i + 1);
    }
    addEnumValueCompletions(t, n, r) {
      if (rt(t.const) && r.add({ kind: this.getSuggestionKind(t.type), label: this.getLabelForValue(t.const), insertText: this.getInsertTextForValue(t.const, n), insertTextFormat: pe.Snippet, documentation: this.fromMarkup(t.markdownDescription) || t.description }), Array.isArray(t.enum)) for (let i = 0, o = t.enum.length; i < o; i++) {
        let s = t.enum[i], a = this.fromMarkup(t.markdownDescription) || t.description;
        t.markdownEnumDescriptions && i < t.markdownEnumDescriptions.length && this.doesSupportMarkdown() ? a = this.fromMarkup(t.markdownEnumDescriptions[i]) : t.enumDescriptions && i < t.enumDescriptions.length && (a = t.enumDescriptions[i]), r.add({ kind: this.getSuggestionKind(t.type), label: this.getLabelForValue(s), insertText: this.getInsertTextForValue(s, n), insertTextFormat: pe.Snippet, sortText: t.enumSortTexts?.[i], detail: t.enumDetails?.[i], documentation: a });
      }
    }
    collectTypes(t, n) {
      if (Array.isArray(t.enum) || rt(t.const)) return;
      let r = t.type;
      Array.isArray(r) ? r.forEach((i) => n[i] = true) : r && (n[r] = true);
    }
    addFillerValueCompletions(t, n, r) {
      t.object && r.add({ kind: this.getSuggestionKind("object"), label: "{}", insertText: this.getInsertTextForGuessedValue({}, n), insertTextFormat: pe.Snippet, detail: Jr.t("New object"), documentation: "" }), t.array && r.add({ kind: this.getSuggestionKind("array"), label: "[]", insertText: this.getInsertTextForGuessedValue([], n), insertTextFormat: pe.Snippet, detail: Jr.t("New array"), documentation: "" });
    }
    addBooleanValueCompletion(t, n, r) {
      r.add({ kind: this.getSuggestionKind("boolean"), label: t ? "true" : "false", insertText: this.getInsertTextForValue(t, n), insertTextFormat: pe.Snippet, documentation: "" });
    }
    addNullValueCompletion(t, n) {
      n.add({ kind: this.getSuggestionKind("null"), label: "null", insertText: "null" + t, insertTextFormat: pe.Snippet, documentation: "" });
    }
    addDollarSchemaCompletions(t, n) {
      this.schemaService.getRegisteredSchemaIds((i) => i === "http" || i === "https").forEach((i) => {
        i.startsWith("https://json-schema.org/draft-") && (i = i + "#"), n.add({ kind: je.Module, label: this.getLabelForValue(i), filterText: this.getFilterTextForValue(i), insertText: this.getInsertTextForValue(i, t), insertTextFormat: pe.Snippet, documentation: "" });
      });
    }
    getLabelForValue(t) {
      return JSON.stringify(t);
    }
    getValueFromLabel(t) {
      return JSON.parse(t);
    }
    getFilterTextForValue(t) {
      return JSON.stringify(t);
    }
    getFilterTextForSnippetValue(t) {
      return JSON.stringify(t).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1");
    }
    getLabelForSnippetValue(t) {
      return JSON.stringify(t).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1");
    }
    getInsertTextForPlainText(t) {
      return t.replace(/[\\\$\}]/g, "\\$&");
    }
    getInsertTextForValue(t, n) {
      let r = JSON.stringify(t, null, "	");
      return r === "{}" ? "{$1}" + n : r === "[]" ? "[$1]" + n : this.getInsertTextForPlainText(r + n);
    }
    getInsertTextForSnippetValue(t, n) {
      return Ho(t, "", (i) => typeof i == "string" && i[0] === "^" ? i.substr(1) : JSON.stringify(i)) + n;
    }
    getInsertTextForGuessedValue(t, n) {
      switch (typeof t) {
        case "object":
          return t === null ? "${1:null}" + n : this.getInsertTextForValue(t, n);
        case "string":
          let r = JSON.stringify(t);
          return r = r.substr(1, r.length - 2), r = this.getInsertTextForPlainText(r), '"${1:' + r + '}"' + n;
        case "number":
        case "boolean":
          return "${1:" + JSON.stringify(t) + "}" + n;
      }
      return this.getInsertTextForValue(t, n);
    }
    getSuggestionKind(t) {
      if (Array.isArray(t)) {
        let n = t;
        t = n.length > 0 ? n[0] : void 0;
      }
      if (!t) return je.Value;
      switch (t) {
        case "string":
          return je.Value;
        case "object":
          return je.Module;
        case "property":
          return je.Property;
        default:
          return je.Value;
      }
    }
    getLabelTextForMatchingNode(t, n) {
      switch (t.type) {
        case "array":
          return "[]";
        case "object":
          return "{}";
        default:
          return n.getText().substr(t.offset, t.length);
      }
    }
    getInsertTextForMatchingNode(t, n, r) {
      switch (t.type) {
        case "array":
          return this.getInsertTextForValue([], r);
        case "object":
          return this.getInsertTextForValue({}, r);
        default:
          let i = n.getText().substr(t.offset, t.length) + r;
          return this.getInsertTextForPlainText(i);
      }
    }
    getInsertTextForProperty(t, n, r, i) {
      let o = this.getInsertTextForValue(t, "");
      if (!r) return o;
      let s = o + ": ", a, u = 0;
      if (n) {
        if (Array.isArray(n.defaultSnippets)) {
          if (n.defaultSnippets.length === 1) {
            let c = n.defaultSnippets[0].body;
            rt(c) && (a = this.getInsertTextForSnippetValue(c, ""));
          }
          u += n.defaultSnippets.length;
        }
        if (n.enum && (!a && n.enum.length === 1 && (a = this.getInsertTextForGuessedValue(n.enum[0], "")), u += n.enum.length), rt(n.const) && (a || (a = this.getInsertTextForGuessedValue(n.const, "")), u++), rt(n.default) && (a || (a = this.getInsertTextForGuessedValue(n.default, "")), u++), Array.isArray(n.examples) && n.examples.length && (a || (a = this.getInsertTextForGuessedValue(n.examples[0], "")), u += n.examples.length), u === 0) {
          let c = Array.isArray(n.type) ? n.type[0] : n.type;
          switch (c || (n.properties ? c = "object" : n.items && (c = "array")), c) {
            case "boolean":
              a = "$1";
              break;
            case "string":
              a = '"$1"';
              break;
            case "object":
              a = "{$1}";
              break;
            case "array":
              a = "[$1]";
              break;
            case "number":
            case "integer":
              a = "${1:0}";
              break;
            case "null":
              a = "${1:null}";
              break;
            default:
              return o;
          }
        }
      }
      return (!a || u > 1) && (a = "$1"), s + a + i;
    }
    getCurrentWord(t, n) {
      let r = n - 1, i = t.getText();
      for (; r >= 0 && ` 	
\r\v":{[,]}`.indexOf(i.charAt(r)) === -1; ) r--;
      return i.substring(r + 1, n);
    }
    evaluateSeparatorAfter(t, n) {
      let r = ct(t.getText(), true);
      switch (r.setPosition(n), r.scan()) {
        case 5:
        case 2:
        case 4:
        case 17:
          return "";
        default:
          return ",";
      }
    }
    findItemAtOffset(t, n, r) {
      let i = ct(n.getText(), true), o = t.items;
      for (let s = o.length - 1; s >= 0; s--) {
        let a = o[s];
        if (r > a.offset + a.length) return i.setPosition(a.offset + a.length), i.scan() === 5 && r >= i.getTokenOffset() + i.getTokenLength() ? s + 1 : s;
        if (r >= a.offset) return s;
      }
      return 0;
    }
    isInComment(t, n, r) {
      let i = ct(t.getText(), false);
      i.setPosition(n);
      let o = i.scan();
      for (; o !== 17 && i.getTokenOffset() + i.getTokenLength() < r; ) o = i.scan();
      return (o === 12 || o === 13) && i.getTokenOffset() <= r;
    }
    fromMarkup(t) {
      if (t && this.doesSupportMarkdown()) return { kind: _t.Markdown, value: t };
    }
    doesSupportMarkdown() {
      if (!rt(this.supportsMarkdown)) {
        let t = this.clientCapabilities.textDocument?.completion?.completionItem?.documentationFormat;
        this.supportsMarkdown = Array.isArray(t) && t.indexOf(_t.Markdown) !== -1;
      }
      return this.supportsMarkdown;
    }
    doesSupportsCommitCharacters() {
      return rt(this.supportsCommitCharacters) || (this.labelDetailsSupport = this.clientCapabilities.textDocument?.completion?.completionItem?.commitCharactersSupport), this.supportsCommitCharacters;
    }
    doesSupportsLabelDetails() {
      return rt(this.labelDetailsSupport) || (this.labelDetailsSupport = this.clientCapabilities.textDocument?.completion?.completionItem?.labelDetailsSupport), this.labelDetailsSupport;
    }
  };
});
function xu(e) {
  if (e) return e.trim().replace(/[\\`*_{}[\]()<>#+\-.!]/g, "\\$&").replace(/(^ +)/mg, (t, n) => "&nbsp;".repeat(n.length)).replace(/( {2,})/g, (t, n) => " " + "&nbsp;".repeat(n.length - 1)).replace(/(\t+)/g, (t, n) => "&nbsp;".repeat(n.length * 4)).replace(/\n/g, `\\
`);
}
function Uv(e) {
  return e.indexOf("`") !== -1 ? "`` " + e + " ``" : e;
}
var zo, Hh = Z(() => {
  "use strict";
  ur();
  it();
  zo = class {
    constructor(t, n = [], r) {
      this.schemaService = t, this.contributions = n, this.promise = r || Promise;
    }
    doHover(t, n, r) {
      let i = t.offsetAt(n), o = r.getNodeFromOffset(i);
      if (!o || (o.type === "object" || o.type === "array") && i > o.offset + 1 && i < o.offset + o.length - 1) return this.promise.resolve(null);
      let s = o;
      if (o.type === "string") {
        let f = o.parent;
        if (f && f.type === "property" && f.keyNode === o && (o = f.valueNode, !o)) return this.promise.resolve(null);
      }
      let a = U.create(t.positionAt(s.offset), t.positionAt(s.offset + s.length)), u = (f) => ({ contents: f, range: a }), c = zr(o);
      for (let f = this.contributions.length - 1; f >= 0; f--) {
        let d = this.contributions[f].getInfoContribution(t.uri, c);
        if (d) return d.then((g) => u(g));
      }
      return this.schemaService.getSchemaForResource(t.uri, r).then((f) => {
        if (!f) return null;
        let v, d, g, y, w = r.getMatchingSchemas(f.schema, o.offset).filter((P) => P.node === o && !P.inverted).map((P) => P.schema);
        for (let P of w) if (v = v || P.title, d = d || P.markdownDescription || xu(P.description), P.enum) {
          let h = P.enum.indexOf(xt(o));
          P.markdownEnumDescriptions ? g = P.markdownEnumDescriptions[h] : P.enumDescriptions && (g = xu(P.enumDescriptions[h])), g && (y = P.enum[h], typeof y != "string" && (y = JSON.stringify(y)));
        }
        let S = "";
        return v && (S = xu(v)), d && (S.length > 0 && (S += `

`), S += d), g && (S.length > 0 && (S += `

`), S += `\`${Uv(y)}\`: ${g}`), u([S]);
      });
    }
  };
});
function zh(e) {
  if (e && typeof e == "object") {
    if (ut(e.allowComments)) return e.allowComments;
    if (e.allOf) for (let t of e.allOf) {
      let n = zh(t);
      if (ut(n)) return n;
    }
  }
}
function Jh(e) {
  if (e && typeof e == "object") {
    if (ut(e.allowTrailingCommas)) return e.allowTrailingCommas;
    let t = e;
    if (ut(t.allowsTrailingCommas)) return t.allowsTrailingCommas;
    if (e.allOf) for (let n of e.allOf) {
      let r = Jh(n);
      if (ut(r)) return r;
    }
  }
}
function Jo(e) {
  switch (e) {
    case "error":
      return Ce.Error;
    case "warning":
      return Ce.Warning;
    case "ignore":
      return;
  }
}
var Bh, Go, Hv, Gh = Z(() => {
  "use strict";
  it();
  Bh = ze(vt());
  $r();
  Go = class {
    constructor(t, n) {
      this.jsonSchemaService = t, this.promise = n, this.validationEnabled = true;
    }
    configure(t) {
      t && (this.validationEnabled = t.validate !== false, this.commentSeverity = t.allowComments ? void 0 : Ce.Error);
    }
    doValidation(t, n, r, i) {
      if (!this.validationEnabled) return this.promise.resolve([]);
      let o = [], s = {}, a = (c) => {
        let f = c.range.start.line + " " + c.range.start.character + " " + c.message;
        s[f] || (s[f] = true, o.push(c));
      }, u = (c) => {
        let f = r?.trailingCommas ? Jo(r.trailingCommas) : Ce.Error, v = r?.comments ? Jo(r.comments) : this.commentSeverity, d = r?.schemaValidation ? Jo(r.schemaValidation) : Ce.Warning, g = r?.schemaRequest ? Jo(r.schemaRequest) : Ce.Warning;
        if (c) {
          let y = (w, S, P) => {
            if (n.root && g) {
              let h = n.root, l = h.type === "object" ? h.properties[0] : void 0;
              if (l && l.keyNode.value === "$schema") {
                let _ = l.valueNode || l, D = U.create(t.positionAt(_.offset), t.positionAt(_.offset + _.length));
                a(Ye.create(D, w, g, S, "json", P));
              } else {
                let _ = U.create(t.positionAt(h.offset), t.positionAt(h.offset + 1));
                a(Ye.create(_, w, g, S, "json", P));
              }
            }
          };
          if (c.errors.length) {
            let w = c.errors[0];
            y(w.message, w.code, w.relatedInformation);
          } else if (d) {
            for (let S of c.warnings) y(S.message, S.code, S.relatedInformation);
            let w = n.validate(t, c.schema, d, r?.schemaDraft);
            w && w.forEach(a);
          }
          zh(c.schema) && (v = void 0), Jh(c.schema) && (f = void 0);
        }
        for (let y of n.syntaxErrors) {
          if (y.code === J.TrailingComma) {
            if (typeof f != "number") continue;
            y.severity = f;
          }
          a(y);
        }
        if (typeof v == "number") {
          let y = Bh.t("Comments are not permitted in JSON.");
          n.comments.forEach((w) => {
            a(Ye.create(w, y, v, J.CommentNotPermitted));
          });
        }
        return o;
      };
      if (i) {
        let c = i.id || "schemaservice://untitled/" + Hv++;
        return this.jsonSchemaService.registerExternalSchema({ uri: c, schema: i }).getResolvedSchema().then((v) => u(v));
      }
      return this.jsonSchemaService.getSchemaForResource(t.uri, n).then((c) => u(c));
    }
    getLanguageStatus(t, n) {
      return { schemas: this.jsonSchemaService.getSchemaURIsForResource(t.uri, n) };
    }
  }, Hv = 0;
});
function ve(e) {
  return e < 48 ? 0 : e <= 57 ? e - 48 : (e < 97 && (e += 32), e >= 97 && e <= 102 ? e - 97 + 10 : 0);
}
function Xh(e) {
  if (e[0] === "#") switch (e.length) {
    case 4:
      return { red: ve(e.charCodeAt(1)) * 17 / 255, green: ve(e.charCodeAt(2)) * 17 / 255, blue: ve(e.charCodeAt(3)) * 17 / 255, alpha: 1 };
    case 5:
      return { red: ve(e.charCodeAt(1)) * 17 / 255, green: ve(e.charCodeAt(2)) * 17 / 255, blue: ve(e.charCodeAt(3)) * 17 / 255, alpha: ve(e.charCodeAt(4)) * 17 / 255 };
    case 7:
      return { red: (ve(e.charCodeAt(1)) * 16 + ve(e.charCodeAt(2))) / 255, green: (ve(e.charCodeAt(3)) * 16 + ve(e.charCodeAt(4))) / 255, blue: (ve(e.charCodeAt(5)) * 16 + ve(e.charCodeAt(6))) / 255, alpha: 1 };
    case 9:
      return { red: (ve(e.charCodeAt(1)) * 16 + ve(e.charCodeAt(2))) / 255, green: (ve(e.charCodeAt(3)) * 16 + ve(e.charCodeAt(4))) / 255, blue: (ve(e.charCodeAt(5)) * 16 + ve(e.charCodeAt(6))) / 255, alpha: (ve(e.charCodeAt(7)) * 16 + ve(e.charCodeAt(8))) / 255 };
  }
}
var Zh = Z(() => {
  "use strict";
});
function cn(e, t) {
  return U.create(e.positionAt(t.offset), e.positionAt(t.offset + t.length));
}
function Qh(e) {
  return xt(e) || Yh.t("<empty>");
}
var Yh, Xo, Kh = Z(() => {
  "use strict";
  ur();
  Vr();
  Zh();
  Yh = ze(vt());
  it();
  Xo = class {
    constructor(t) {
      this.schemaService = t;
    }
    findDocumentSymbols(t, n, r = { resultLimit: Number.MAX_VALUE }) {
      let i = n.root;
      if (!i) return [];
      let o = r.resultLimit || Number.MAX_VALUE, s = t.uri;
      if ((s === "vscode://defaultsettings/keybindings.json" || sn(s.toLowerCase(), "/user/keybindings.json")) && i.type === "array") {
        let d = [];
        for (let g of i.items) if (g.type === "object") {
          for (let y of g.properties) if (y.keyNode.value === "key" && y.valueNode) {
            let w = Nt.create(t.uri, cn(t, g));
            if (d.push({ name: Qh(y.valueNode), kind: Ke.Function, location: w }), o--, o <= 0) return r && r.onResultLimitExceeded && r.onResultLimitExceeded(s), d;
          }
        }
        return d;
      }
      let a = [{ node: i, containerName: "" }], u = 0, c = false, f = [], v = (d, g) => {
        d.type === "array" ? d.items.forEach((y) => {
          y && a.push({ node: y, containerName: g });
        }) : d.type === "object" && d.properties.forEach((y) => {
          let w = y.valueNode;
          if (w) if (o > 0) {
            o--;
            let S = Nt.create(t.uri, cn(t, y)), P = g ? g + "." + y.keyNode.value : y.keyNode.value;
            f.push({ name: this.getKeyLabel(y), kind: this.getSymbolKind(w.type), location: S, containerName: g }), a.push({ node: w, containerName: P });
          } else c = true;
        });
      };
      for (; u < a.length; ) {
        let d = a[u++];
        v(d.node, d.containerName);
      }
      return c && r && r.onResultLimitExceeded && r.onResultLimitExceeded(s), f;
    }
    findDocumentSymbols2(t, n, r = { resultLimit: Number.MAX_VALUE }) {
      let i = n.root;
      if (!i) return [];
      let o = r.resultLimit || Number.MAX_VALUE, s = t.uri;
      if ((s === "vscode://defaultsettings/keybindings.json" || sn(s.toLowerCase(), "/user/keybindings.json")) && i.type === "array") {
        let d = [];
        for (let g of i.items) if (g.type === "object") {
          for (let y of g.properties) if (y.keyNode.value === "key" && y.valueNode) {
            let w = cn(t, g), S = cn(t, y.keyNode);
            if (d.push({ name: Qh(y.valueNode), kind: Ke.Function, range: w, selectionRange: S }), o--, o <= 0) return r && r.onResultLimitExceeded && r.onResultLimitExceeded(s), d;
          }
        }
        return d;
      }
      let a = [], u = [{ node: i, result: a }], c = 0, f = false, v = (d, g) => {
        d.type === "array" ? d.items.forEach((y, w) => {
          if (y) if (o > 0) {
            o--;
            let S = cn(t, y), P = S, l = { name: String(w), kind: this.getSymbolKind(y.type), range: S, selectionRange: P, children: [] };
            g.push(l), u.push({ result: l.children, node: y });
          } else f = true;
        }) : d.type === "object" && d.properties.forEach((y) => {
          let w = y.valueNode;
          if (w) if (o > 0) {
            o--;
            let S = cn(t, y), P = cn(t, y.keyNode), h = [], l = { name: this.getKeyLabel(y), kind: this.getSymbolKind(w.type), range: S, selectionRange: P, children: h, detail: this.getDetail(w) };
            g.push(l), u.push({ result: h, node: w });
          } else f = true;
        });
      };
      for (; c < u.length; ) {
        let d = u[c++];
        v(d.node, d.result);
      }
      return f && r && r.onResultLimitExceeded && r.onResultLimitExceeded(s), a;
    }
    getSymbolKind(t) {
      switch (t) {
        case "object":
          return Ke.Module;
        case "string":
          return Ke.String;
        case "number":
          return Ke.Number;
        case "array":
          return Ke.Array;
        case "boolean":
          return Ke.Boolean;
        default:
          return Ke.Variable;
      }
    }
    getKeyLabel(t) {
      let n = t.keyNode.value;
      return n && (n = n.replace(/[\n]/g, "↵")), n && n.trim() ? n : `"${n}"`;
    }
    getDetail(t) {
      if (t) {
        if (t.type === "boolean" || t.type === "number" || t.type === "null" || t.type === "string") return String(t.value);
        if (t.type === "array") return t.children.length ? void 0 : "[]";
        if (t.type === "object") return t.children.length ? void 0 : "{}";
      }
    }
    findDocumentColors(t, n, r) {
      return this.schemaService.getSchemaForResource(t.uri, n).then((i) => {
        let o = [];
        if (i) {
          let s = r && typeof r.resultLimit == "number" ? r.resultLimit : Number.MAX_VALUE, a = n.getMatchingSchemas(i.schema), u = {};
          for (let c of a) if (!c.inverted && c.schema && (c.schema.format === "color" || c.schema.format === "color-hex") && c.node && c.node.type === "string") {
            let f = String(c.node.offset);
            if (!u[f]) {
              let v = Xh(xt(c.node));
              if (v) {
                let d = cn(t, c.node);
                o.push({ color: v, range: d });
              }
              if (u[f] = true, s--, s <= 0) return r && r.onResultLimitExceeded && r.onResultLimitExceeded(t.uri), o;
            }
          }
        }
        return o;
      });
    }
    getColorPresentations(t, n, r, i) {
      let o = [], s = Math.round(r.red * 255), a = Math.round(r.green * 255), u = Math.round(r.blue * 255);
      function c(v) {
        let d = v.toString(16);
        return d.length !== 2 ? "0" + d : d;
      }
      let f;
      return r.alpha === 1 ? f = `#${c(s)}${c(a)}${c(u)}` : f = `#${c(s)}${c(a)}${c(u)}${c(Math.round(r.alpha * 255))}`, o.push({ label: f, textEdit: Se.replace(i, JSON.stringify(f)) }), o;
    }
  };
});
var em, tm = Z(() => {
  "use strict";
  em = { $id: "https://json-schema.org/draft/2019-09/schema", $schema: "https://json-schema.org/draft/2019-09/schema", title: "(Flattened static) Core and Validation specifications meta-schema", type: ["object", "boolean"], properties: { definitions: { $comment: "While no longer an official keyword as it is replaced by $defs, this keyword is retained in the meta-schema to prevent incompatible extensions as it remains in common use.", type: "object", additionalProperties: { $ref: "#" }, default: {} }, dependencies: { $comment: '"dependencies" is no longer a keyword, but schema authors should avoid redefining it to facilitate a smooth transition to "dependentSchemas" and "dependentRequired"', type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/$defs/stringArray" }] } }, $id: { type: "string", format: "uri-reference", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { type: "string", format: "uri" }, $anchor: { type: "string", pattern: "^[A-Za-z][-A-Za-z0-9.:_]*$" }, $ref: { type: "string", format: "uri-reference" }, $recursiveAnchor: { type: "boolean", default: false }, $vocabulary: { type: "object", propertyNames: { type: "string", format: "uri" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, additionalItems: { $ref: "#" }, unevaluatedItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/$defs/schemaArray" }] }, contains: { $ref: "#" }, additionalProperties: { $ref: "#" }, unevaluatedProperties: { $ref: "#" }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $ref: "#" } }, propertyNames: { $ref: "#" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $ref: "#" }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: false }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } }, const: true, enum: { type: "array", items: true }, type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: true }] }, title: { type: "string" }, description: { type: "string" }, default: true, deprecated: { type: "boolean", default: false }, readOnly: { type: "boolean", default: false }, writeOnly: { type: "boolean", default: false }, examples: { type: "array", items: true }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, contentSchema: { $ref: "#" } }, $defs: { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: true, default: [] } } };
});
var nm, rm = Z(() => {
  "use strict";
  nm = { $id: "https://json-schema.org/draft/2020-12/schema", $schema: "https://json-schema.org/draft/2020-12/schema", title: "(Flattened static) Core and Validation specifications meta-schema", type: ["object", "boolean"], properties: { definitions: { $comment: "While no longer an official keyword as it is replaced by $defs, this keyword is retained in the meta-schema to prevent incompatible extensions as it remains in common use.", type: "object", additionalProperties: { $ref: "#" }, default: {} }, dependencies: { $comment: '"dependencies" is no longer a keyword, but schema authors should avoid redefining it to facilitate a smooth transition to "dependentSchemas" and "dependentRequired"', type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/$defs/stringArray" }] } }, $id: { type: "string", format: "uri-reference", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { type: "string", format: "uri" }, $anchor: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, $ref: { type: "string", format: "uri-reference" }, $dynamicRef: { type: "string", format: "uri-reference" }, $vocabulary: { type: "object", propertyNames: { type: "string", format: "uri" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $ref: "#" }, contains: { $ref: "#" }, additionalProperties: { $ref: "#" }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $ref: "#" } }, propertyNames: { $ref: "#" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $ref: "#" }, unevaluatedItems: { $ref: "#" }, unevaluatedProperties: { $ref: "#" }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: false }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } }, const: true, enum: { type: "array", items: true }, type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: true }] }, title: { type: "string" }, description: { type: "string" }, default: true, deprecated: { type: "boolean", default: false }, readOnly: { type: "boolean", default: false }, writeOnly: { type: "boolean", default: false }, examples: { type: "array", items: true }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, contentSchema: { $ref: "#" } }, $defs: { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: true, default: [] } } };
});
var B, Zo, Bv, im = Z(() => {
  "use strict";
  tm();
  rm();
  B = ze(vt()), Zo = { schemaAssociations: [], schemas: { "https://json-schema.org/draft-04/schema": { definitions: { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, positiveInteger: { type: "integer", minimum: 0 }, positiveIntegerDefault0: { allOf: [{ $ref: "#/definitions/positiveInteger" }, { default: 0 }] }, simpleTypes: { type: "string", enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, minItems: 1, uniqueItems: true } }, type: "object", properties: { id: { type: "string", format: "uri" }, $schema: { type: "string", format: "uri" }, title: { type: "string" }, description: { type: "string" }, default: {}, multipleOf: { type: "number", minimum: 0, exclusiveMinimum: true }, maximum: { type: "number" }, exclusiveMaximum: { type: "boolean", default: false }, minimum: { type: "number" }, exclusiveMinimum: { type: "boolean", default: false }, maxLength: { allOf: [{ $ref: "#/definitions/positiveInteger" }] }, minLength: { allOf: [{ $ref: "#/definitions/positiveIntegerDefault0" }] }, pattern: { type: "string", format: "regex" }, additionalItems: { anyOf: [{ type: "boolean" }, { $ref: "#" }], default: {} }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: {} }, maxItems: { allOf: [{ $ref: "#/definitions/positiveInteger" }] }, minItems: { allOf: [{ $ref: "#/definitions/positiveIntegerDefault0" }] }, uniqueItems: { type: "boolean", default: false }, maxProperties: { allOf: [{ $ref: "#/definitions/positiveInteger" }] }, minProperties: { allOf: [{ $ref: "#/definitions/positiveIntegerDefault0" }] }, required: { allOf: [{ $ref: "#/definitions/stringArray" }] }, additionalProperties: { anyOf: [{ type: "boolean" }, { $ref: "#" }], default: {} }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, enum: { type: "array", minItems: 1, uniqueItems: true }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: true }] }, format: { anyOf: [{ type: "string", enum: ["date-time", "uri", "email", "hostname", "ipv4", "ipv6", "regex"] }, { type: "string" }] }, allOf: { allOf: [{ $ref: "#/definitions/schemaArray" }] }, anyOf: { allOf: [{ $ref: "#/definitions/schemaArray" }] }, oneOf: { allOf: [{ $ref: "#/definitions/schemaArray" }] }, not: { allOf: [{ $ref: "#" }] } }, dependencies: { exclusiveMaximum: ["maximum"], exclusiveMinimum: ["minimum"] }, default: {} }, "https://json-schema.org/draft-07/schema": { definitions: { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: true, default: [] } }, type: ["object", "boolean"], properties: { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: true, readOnly: { type: "boolean", default: false }, examples: { type: "array", items: true }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: true }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: false }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: true, enum: { type: "array", items: true, minItems: 1, uniqueItems: true }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: true }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, default: true }, "https://json-schema.org/draft/2020-12/schema": nm, "https://json-schema.org/draft/2019-09/schema": em } }, Bv = { id: B.t("A unique identifier for the schema."), $schema: B.t("The schema to verify this document against."), title: B.t("A descriptive title of the schema."), description: B.t("A long description of the schema. Used in hover menus and suggestions."), default: B.t("A default value. Used by suggestions."), multipleOf: B.t("A number that should cleanly divide the current value (i.e. have no remainder)."), maximum: B.t("The maximum numerical value, inclusive by default."), exclusiveMaximum: B.t("Makes the maximum property exclusive."), minimum: B.t("The minimum numerical value, inclusive by default."), exclusiveMinimum: B.t("Makes the minimum property exclusive."), maxLength: B.t("The maximum length of a string."), minLength: B.t("The minimum length of a string."), pattern: B.t("A regular expression to match the string against. It is not implicitly anchored."), additionalItems: B.t("For arrays, only when items is set as an array. If items are a schema, this schema validates items after the ones specified by the items schema. If false, additional items will cause validation to fail."), items: B.t("For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on."), maxItems: B.t("The maximum number of items that can be inside an array. Inclusive."), minItems: B.t("The minimum number of items that can be inside an array. Inclusive."), uniqueItems: B.t("If all of the items in the array must be unique. Defaults to false."), maxProperties: B.t("The maximum number of properties an object can have. Inclusive."), minProperties: B.t("The minimum number of properties an object can have. Inclusive."), required: B.t("An array of strings that lists the names of all properties required on this object."), additionalProperties: B.t("Either a schema or a boolean. If a schema, used to validate all properties not matched by 'properties', 'propertyNames', or 'patternProperties'. If false, any properties not defined by the adjacent keywords will cause this schema to fail."), definitions: B.t("Not used for validation. Place subschemas here that you wish to reference inline with $ref."), properties: B.t("A map of property names to schemas for each property."), patternProperties: B.t("A map of regular expressions on property names to schemas for matching properties."), dependencies: B.t("A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object."), enum: B.t("The set of literal values that are valid."), type: B.t("Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types."), format: B.t("Describes the format expected for the value. By default, not used for validation"), allOf: B.t("An array of schemas, all of which must match."), anyOf: B.t("An array of schemas, where at least one must match."), oneOf: B.t("An array of schemas, exactly one of which must match."), not: B.t("A schema which must not match."), $id: B.t("A unique identifier for the schema."), $ref: B.t("Reference a definition hosted on any location."), $comment: B.t("Comments from schema authors to readers or maintainers of the schema."), readOnly: B.t("Indicates that the value of the instance is managed exclusively by the owning authority."), examples: B.t("Sample JSON values associated with a particular schema, for the purpose of illustrating usage."), contains: B.t('An array instance is valid against "contains" if at least one of its elements is valid against the given schema.'), propertyNames: B.t("If the instance is an object, this keyword validates if every property name in the instance validates against the provided schema."), const: B.t("An instance validates successfully against this keyword if its value is equal to the value of the keyword."), contentMediaType: B.t("Describes the media type of a string property."), contentEncoding: B.t("Describes the content encoding of a string property."), if: B.t('The validation outcome of the "if" subschema controls which of the "then" or "else" keywords are evaluated.'), then: B.t('The "then" subschema is used for validation when the "if" subschema succeeds.'), else: B.t('The "else" subschema is used for validation when the "if" subschema fails.') };
  for (let e in Zo.schemas) {
    let t = Zo.schemas[e];
    for (let n in t.properties) {
      let r = t.properties[n];
      typeof r == "boolean" && (r = t.properties[n] = {});
      let i = Bv[n];
      i && (r.description = i);
    }
  }
});
function om(e, t) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  let n = String(e), r = "", i = t ? !!t.extended : false, o = t ? !!t.globstar : false, s = false, a = t && typeof t.flags == "string" ? t.flags : "", u;
  for (let c = 0, f = n.length; c < f; c++) switch (u = n[c], u) {
    case "/":
    case "$":
    case "^":
    case "+":
    case ".":
    case "(":
    case ")":
    case "=":
    case "!":
    case "|":
      r += "\\" + u;
      break;
    case "?":
      if (i) {
        r += ".";
        break;
      }
    case "[":
    case "]":
      if (i) {
        r += u;
        break;
      }
    case "{":
      if (i) {
        s = true, r += "(";
        break;
      }
    case "}":
      if (i) {
        s = false, r += ")";
        break;
      }
    case ",":
      if (s) {
        r += "|";
        break;
      }
      r += "\\" + u;
      break;
    case "*":
      let v = n[c - 1], d = 1;
      for (; n[c + 1] === "*"; ) d++, c++;
      let g = n[c + 1];
      o ? d > 1 && (v === "/" || v === void 0 || v === "{" || v === ",") && (g === "/" || g === void 0 || g === "," || g === "}") ? (g === "/" ? c++ : v === "/" && r.endsWith("\\/") && (r = r.substr(0, r.length - 2)), r += "((?:[^/]*(?:/|$))*)") : r += "([^/]*)" : r += ".*";
      break;
    default:
      r += u;
  }
  return (!a || !~a.indexOf("g")) && (r = "^" + r + "$"), new RegExp(r, a);
}
var sm = Z(() => {
  "use strict";
});
function Tt(e, t, n) {
  let r = n ? [{ location: { uri: n, range: U.create(0, 0, 0, 0) }, message: e }] : void 0;
  return { message: e, code: t, relatedInformation: r };
}
function am(e) {
  try {
    return ot.parse(e).with({ fragment: null, query: null }).toString(true);
  } catch {
    return e;
  }
}
function Gr(e) {
  try {
    let t = ot.parse(e);
    if (t.scheme === "file") return t.fsPath;
  } catch {
  }
  return e;
}
var yt, zv, Jv, Tu, ku, Dn, Qo, Yo, Gv, cm = Z(() => {
  "use strict";
  on();
  Hr();
  Vr();
  ur();
  it();
  yt = ze(vt());
  sm();
  $r();
  Ln();
  zv = "!", Jv = "/", Tu = class {
    constructor(t, n, r) {
      this.folderUri = n, this.uris = r, this.globWrappers = [];
      try {
        for (let i of t) {
          let o = i[0] !== zv;
          o || (i = i.substring(1)), i.length > 0 && (i[0] === Jv && (i = i.substring(1)), this.globWrappers.push({ regexp: om("**/" + i, { extended: true, globstar: true }), include: o }));
        }
        n && (n = am(n), n.endsWith("/") || (n = n + "/"), this.folderUri = n);
      } catch {
        this.globWrappers.length = 0, this.uris = [];
      }
    }
    matchesPattern(t) {
      if (this.folderUri && !t.startsWith(this.folderUri)) return false;
      let n = false;
      for (let { regexp: r, include: i } of this.globWrappers) r.test(t) && (n = i);
      return n;
    }
    getURIs() {
      return this.uris;
    }
  }, ku = class {
    constructor(t, n, r) {
      this.service = t, this.uri = n, this.dependencies = /* @__PURE__ */ new Set(), this.anchors = void 0, r && (this.unresolvedSchema = this.service.promise.resolve(new Dn(r)));
    }
    getUnresolvedSchema() {
      return this.unresolvedSchema || (this.unresolvedSchema = this.service.loadSchema(this.uri)), this.unresolvedSchema;
    }
    getResolvedSchema() {
      return this.resolvedSchema || (this.resolvedSchema = this.getUnresolvedSchema().then((t) => this.service.resolveSchemaContent(t, this))), this.resolvedSchema;
    }
    clearSchema() {
      let t = !!this.unresolvedSchema;
      return this.resolvedSchema = void 0, this.unresolvedSchema = void 0, this.dependencies.clear(), this.anchors = void 0, t;
    }
  }, Dn = class {
    constructor(t, n = []) {
      this.schema = t, this.errors = n;
    }
  };
  Qo = class {
    constructor(t, n = [], r = [], i) {
      this.schema = t, this.errors = n, this.warnings = r, this.schemaDraft = i;
    }
    getSection(t) {
      let n = this.getSectionRecursive(t, this.schema);
      if (n) return Ae(n);
    }
    getSectionRecursive(t, n) {
      if (!n || typeof n == "boolean" || t.length === 0) return n;
      let r = t.shift();
      if (n.properties && typeof n.properties[r]) return this.getSectionRecursive(t, n.properties[r]);
      if (n.patternProperties) {
        for (let i of Object.keys(n.patternProperties)) if (wn(i)?.test(r)) return this.getSectionRecursive(t, n.patternProperties[i]);
      } else {
        if (typeof n.additionalProperties == "object") return this.getSectionRecursive(t, n.additionalProperties);
        if (r.match("[0-9]+")) {
          if (Array.isArray(n.items)) {
            let i = parseInt(r, 10);
            if (!isNaN(i) && n.items[i]) return this.getSectionRecursive(t, n.items[i]);
          } else if (n.items) return this.getSectionRecursive(t, n.items);
        }
      }
    }
  }, Yo = class {
    constructor(t, n, r) {
      this.contextService = n, this.requestService = t, this.promiseConstructor = r || Promise, this.callOnDispose = [], this.contributionSchemas = {}, this.contributionAssociations = [], this.schemasById = {}, this.filePatternAssociations = [], this.registeredSchemasIds = {};
    }
    getRegisteredSchemaIds(t) {
      return Object.keys(this.registeredSchemasIds).filter((n) => {
        let r = ot.parse(n).scheme;
        return r !== "schemaservice" && (!t || t(r));
      });
    }
    get promise() {
      return this.promiseConstructor;
    }
    dispose() {
      for (; this.callOnDispose.length > 0; ) this.callOnDispose.pop()();
    }
    onResourceChange(t) {
      this.cachedSchemaForResource = void 0;
      let n = false;
      t = Ft(t);
      let r = [t], i = Object.keys(this.schemasById).map((o) => this.schemasById[o]);
      for (; r.length; ) {
        let o = r.pop();
        for (let s = 0; s < i.length; s++) {
          let a = i[s];
          a && (a.uri === o || a.dependencies.has(o)) && (a.uri !== o && r.push(a.uri), a.clearSchema() && (n = true), i[s] = void 0);
        }
      }
      return n;
    }
    setSchemaContributions(t) {
      if (t.schemas) {
        let n = t.schemas;
        for (let r in n) {
          let i = Ft(r);
          this.contributionSchemas[i] = this.addSchemaHandle(i, n[r]);
        }
      }
      if (Array.isArray(t.schemaAssociations)) {
        let n = t.schemaAssociations;
        for (let r of n) {
          let i = r.uris.map(Ft), o = this.addFilePatternAssociation(r.pattern, r.folderUri, i);
          this.contributionAssociations.push(o);
        }
      }
    }
    addSchemaHandle(t, n) {
      let r = new ku(this, t, n);
      return this.schemasById[t] = r, r;
    }
    getOrAddSchemaHandle(t, n) {
      return this.schemasById[t] || this.addSchemaHandle(t, n);
    }
    addFilePatternAssociation(t, n, r) {
      let i = new Tu(t, n, r);
      return this.filePatternAssociations.push(i), i;
    }
    registerExternalSchema(t) {
      let n = Ft(t.uri);
      return this.registeredSchemasIds[n] = true, this.cachedSchemaForResource = void 0, t.fileMatch && t.fileMatch.length && this.addFilePatternAssociation(t.fileMatch, t.folderUri, [n]), t.schema ? this.addSchemaHandle(n, t.schema) : this.getOrAddSchemaHandle(n);
    }
    clearExternalSchemas() {
      this.schemasById = {}, this.filePatternAssociations = [], this.registeredSchemasIds = {}, this.cachedSchemaForResource = void 0;
      for (let t in this.contributionSchemas) this.schemasById[t] = this.contributionSchemas[t], this.registeredSchemasIds[t] = true;
      for (let t of this.contributionAssociations) this.filePatternAssociations.push(t);
    }
    getResolvedSchema(t) {
      let n = Ft(t), r = this.schemasById[n];
      return r ? r.getResolvedSchema() : this.promise.resolve(void 0);
    }
    loadSchema(t) {
      if (!this.requestService) {
        let n = yt.t("Unable to load schema from '{0}'. No schema request service available", Gr(t));
        return this.promise.resolve(new Dn({}, [Tt(n, J.SchemaResolveError, t)]));
      }
      return this.requestService(t).then((n) => {
        if (!n) {
          let s = yt.t("Unable to load schema from '{0}': No content.", Gr(t));
          return new Dn({}, [Tt(s, J.SchemaResolveError, t)]);
        }
        let r = [];
        n.charCodeAt(0) === 65279 && (r.push(Tt(yt.t("Problem reading content from '{0}': UTF-8 with BOM detected, only UTF 8 is allowed.", Gr(t)), J.SchemaResolveError, t)), n = n.trimStart());
        let i = {}, o = [];
        return i = bh(n, o), o.length && r.push(Tt(yt.t("Unable to parse content from '{0}': Parse error at offset {1}.", Gr(t), o[0].offset), J.SchemaResolveError, t)), new Dn(i, r);
      }, (n) => {
        let { message: r, code: i } = n;
        if (typeof r != "string") {
          let a = n.toString(), u = n.toString().split("Error: ");
          u.length > 1 && (a = u[1]), sn(a, ".") && (a = a.substr(0, a.length - 1)), r = a;
        }
        let o = J.SchemaResolveError;
        typeof i == "number" && i < 65536 && (o += i);
        let s = yt.t("Unable to load schema from '{0}': {1}.", Gr(t), r);
        return new Dn({}, [Tt(s, o, t)]);
      });
    }
    resolveSchemaContent(t, n) {
      let r = t.errors.slice(0), i = t.schema, o = i.$schema ? Du(i.$schema) : void 0;
      if (o === Ze.v3) return this.promise.resolve(new Qo({}, [Tt(yt.t("Draft-03 schemas are not supported."), J.SchemaUnsupportedFeature)], [], o));
      let s = /* @__PURE__ */ new Set(), a = this.contextService, u = (w, S) => {
        S = decodeURIComponent(S);
        let P = w;
        return S[0] === "/" && (S = S.substring(1)), S.split("/").some((h) => (h = h.replace(/~1/g, "/").replace(/~0/g, "~"), P = P[h], !P)), P;
      }, c = (w, S, P) => (S.anchors || (S.anchors = y(w)), S.anchors.get(P)), f = (w, S) => {
        for (let P in S) S.hasOwnProperty(P) && P !== "id" && P !== "$id" && (w[P] = S[P]);
      }, v = (w, S, P, h) => {
        let l;
        if (h === void 0 || h.length === 0 ? l = S : h.charAt(0) === "/" ? l = u(S, h) : l = c(S, P, h), l) f(w, l);
        else {
          let _ = yt.t("$ref '{0}' in '{1}' can not be resolved.", h || "", P.uri);
          r.push(Tt(_, J.SchemaResolveError));
        }
      }, d = (w, S, P, h) => {
        a && !/^[A-Za-z][A-Za-z0-9+\-.+]*:\/.*/.test(S) && (S = a.resolveRelativePath(S, h.uri)), S = Ft(S);
        let l = this.getOrAddSchemaHandle(S);
        return l.getUnresolvedSchema().then((_) => {
          if (h.dependencies.add(S), _.errors.length) {
            let D = _.errors[0], m = P ? S + "#" + P : S, p = P ? yt.t("Problems loading reference '{0}': {1}", P, D.message) : D.message;
            r.push(Tt(p, D.code, S));
          }
          return v(w, _.schema, l, P), g(w, _.schema, l);
        });
      }, g = (w, S, P) => {
        let h = [];
        return this.traverseNodes(w, (l) => {
          let _ = /* @__PURE__ */ new Set();
          for (; l.$ref; ) {
            let D = l.$ref, m = D.split("#", 2);
            if (delete l.$ref, m[0].length > 0) {
              h.push(d(l, m[0], m[1], P));
              return;
            } else if (!_.has(D)) {
              let p = m[1];
              v(l, S, P, p), _.add(D);
            }
          }
          l.$recursiveRef && s.add("$recursiveRef"), l.$dynamicRef && s.add("$dynamicRef");
        }), this.promise.all(h);
      }, y = (w) => {
        let S = /* @__PURE__ */ new Map();
        return this.traverseNodes(w, (P) => {
          let h = P.$id || P.id, l = Ao(h) && h.charAt(0) === "#" ? h.substring(1) : P.$anchor;
          l && (S.has(l) ? r.push(Tt(yt.t("Duplicate anchor declaration: '{0}'", l), J.SchemaResolveError)) : S.set(l, P)), P.$recursiveAnchor && s.add("$recursiveAnchor"), P.$dynamicAnchor && s.add("$dynamicAnchor");
        }), S;
      };
      return g(i, i, n).then((w) => {
        let S = [];
        return s.size && S.push(Tt(yt.t("The schema uses meta-schema features ({0}) that are not yet supported by the validator.", Array.from(s.keys()).join(", ")), J.SchemaUnsupportedFeature)), new Qo(i, r, S, o);
      });
    }
    traverseNodes(t, n) {
      if (!t || typeof t != "object") return Promise.resolve(null);
      let r = /* @__PURE__ */ new Set(), i = (...f) => {
        for (let v of f) Pt(v) && u.push(v);
      }, o = (...f) => {
        for (let v of f) if (Pt(v)) for (let d in v) {
          let y = v[d];
          Pt(y) && u.push(y);
        }
      }, s = (...f) => {
        for (let v of f) if (Array.isArray(v)) for (let d of v) Pt(d) && u.push(d);
      }, a = (f) => {
        if (Array.isArray(f)) for (let v of f) Pt(v) && u.push(v);
        else Pt(f) && u.push(f);
      }, u = [t], c = u.pop();
      for (; c; ) r.has(c) || (r.add(c), n(c), i(c.additionalItems, c.additionalProperties, c.not, c.contains, c.propertyNames, c.if, c.then, c.else, c.unevaluatedItems, c.unevaluatedProperties), o(c.definitions, c.$defs, c.properties, c.patternProperties, c.dependencies, c.dependentSchemas), s(c.anyOf, c.allOf, c.oneOf, c.prefixItems), a(c.items)), c = u.pop();
    }
    getSchemaFromProperty(t, n) {
      if (n.root?.type === "object") {
        for (let r of n.root.properties) if (r.keyNode.value === "$schema" && r.valueNode?.type === "string") {
          let i = r.valueNode.value;
          return this.contextService && !/^\w[\w\d+.-]*:/.test(i) && (i = this.contextService.resolveRelativePath(i, t)), i;
        }
      }
    }
    getAssociatedSchemas(t) {
      let n = /* @__PURE__ */ Object.create(null), r = [], i = am(t);
      for (let o of this.filePatternAssociations) if (o.matchesPattern(i)) for (let s of o.getURIs()) n[s] || (r.push(s), n[s] = true);
      return r;
    }
    getSchemaURIsForResource(t, n) {
      let r = n && this.getSchemaFromProperty(t, n);
      return r ? [r] : this.getAssociatedSchemas(t);
    }
    getSchemaForResource(t, n) {
      if (n) {
        let o = this.getSchemaFromProperty(t, n);
        if (o) {
          let s = Ft(o);
          return this.getOrAddSchemaHandle(s).getResolvedSchema();
        }
      }
      if (this.cachedSchemaForResource && this.cachedSchemaForResource.resource === t) return this.cachedSchemaForResource.resolvedSchema;
      let r = this.getAssociatedSchemas(t), i = r.length > 0 ? this.createCombinedSchema(t, r).getResolvedSchema() : this.promise.resolve(void 0);
      return this.cachedSchemaForResource = { resource: t, resolvedSchema: i }, i;
    }
    createCombinedSchema(t, n) {
      if (n.length === 1) return this.getOrAddSchemaHandle(n[0]);
      {
        let r = "schemaservice://combinedSchema/" + encodeURIComponent(t), i = { allOf: n.map((o) => ({ $ref: o })) };
        return this.addSchemaHandle(r, i);
      }
    }
    getMatchingSchemas(t, n, r) {
      if (r) {
        let i = r.id || "schemaservice://untitled/matchingSchemas/" + Gv++;
        return this.addSchemaHandle(i, r).getResolvedSchema().then((s) => n.getMatchingSchemas(s.schema).filter((a) => !a.inverted));
      }
      return this.getSchemaForResource(t.uri, n).then((i) => i ? n.getMatchingSchemas(i.schema).filter((o) => !o.inverted) : []);
    }
  }, Gv = 0;
});
function um(e, t) {
  let n = [], r = [], i = [], o = -1, s = ct(e.getText(), false), a = s.scan();
  function u(y) {
    n.push(y), r.push(i.length);
  }
  for (; a !== 17; ) {
    switch (a) {
      case 1:
      case 3: {
        let y = e.positionAt(s.getTokenOffset()).line, w = { startLine: y, endLine: y, kind: a === 1 ? "object" : "array" };
        i.push(w);
        break;
      }
      case 2:
      case 4: {
        let y = a === 2 ? "object" : "array";
        if (i.length > 0 && i[i.length - 1].kind === y) {
          let w = i.pop(), S = e.positionAt(s.getTokenOffset()).line;
          w && S > w.startLine + 1 && o !== w.startLine && (w.endLine = S - 1, u(w), o = w.startLine);
        }
        break;
      }
      case 13: {
        let y = e.positionAt(s.getTokenOffset()).line, w = e.positionAt(s.getTokenOffset() + s.getTokenLength()).line;
        s.getTokenError() === 1 && y + 1 < e.lineCount ? s.setPosition(e.offsetAt(ee.create(y + 1, 0))) : y < w && (u({ startLine: y, endLine: w, kind: Jt.Comment }), o = y);
        break;
      }
      case 12: {
        let w = e.getText().substr(s.getTokenOffset(), s.getTokenLength()).match(/^\/\/\s*#(region\b)|(endregion\b)/);
        if (w) {
          let S = e.positionAt(s.getTokenOffset()).line;
          if (w[1]) {
            let P = { startLine: S, endLine: S, kind: Jt.Region };
            i.push(P);
          } else {
            let P = i.length - 1;
            for (; P >= 0 && i[P].kind !== Jt.Region; ) P--;
            if (P >= 0) {
              let h = i[P];
              i.length = P, S > h.startLine && o !== h.startLine && (h.endLine = S, u(h), o = h.startLine);
            }
          }
        }
        break;
      }
    }
    a = s.scan();
  }
  let c = t && t.rangeLimit;
  if (typeof c != "number" || n.length <= c) return n;
  t && t.onRangeLimitExceeded && t.onRangeLimitExceeded(e.uri);
  let f = [];
  for (let y of r) y < 30 && (f[y] = (f[y] || 0) + 1);
  let v = 0, d = 0;
  for (let y = 0; y < f.length; y++) {
    let w = f[y];
    if (w) {
      if (w + v > c) {
        d = y;
        break;
      }
      v += w;
    }
  }
  let g = [];
  for (let y = 0; y < n.length; y++) {
    let w = r[y];
    typeof w == "number" && (w < d || w === d && v++ < c) && g.push(n[y]);
  }
  return g;
}
var lm = Z(() => {
  "use strict";
  on();
  it();
});
function fm(e, t, n) {
  function r(a) {
    let u = e.offsetAt(a), c = n.getNodeFromOffset(u, true), f = [];
    for (; c; ) {
      switch (c.type) {
        case "string":
        case "object":
        case "array":
          let d = c.offset + 1, g = c.offset + c.length - 1;
          d < g && u >= d && u <= g && f.push(i(d, g)), f.push(i(c.offset, c.offset + c.length));
          break;
        case "number":
        case "boolean":
        case "null":
        case "property":
          f.push(i(c.offset, c.offset + c.length));
          break;
      }
      if (c.type === "property" || c.parent && c.parent.type === "array") {
        let d = s(c.offset + c.length, 5);
        d !== -1 && f.push(i(c.offset, d));
      }
      c = c.parent;
    }
    let v;
    for (let d = f.length - 1; d >= 0; d--) v = dn.create(f[d], v);
    return v || (v = dn.create(U.create(a, a))), v;
  }
  function i(a, u) {
    return U.create(e.positionAt(a), e.positionAt(u));
  }
  let o = ct(e.getText(), true);
  function s(a, u) {
    return o.setPosition(a), o.scan() === u ? o.getTokenOffset() + o.getTokenLength() : -1;
  }
  return t.map(r);
}
var dm = Z(() => {
  "use strict";
  it();
  on();
});
function Xr(e, t, n) {
  let r;
  if (n) {
    let o = e.offsetAt(n.start), s = e.offsetAt(n.end) - o;
    r = { offset: o, length: s };
  }
  let i = { tabSize: t ? t.tabSize : 4, insertSpaces: t?.insertSpaces === true, insertFinalNewline: t?.insertFinalNewline === true, eol: `
`, keepLines: t?.keepLines === true };
  return Dh(e.getText(), r, i).map((o) => Se.replace(U.create(e.positionAt(o.offset), e.positionAt(o.offset + o.length)), o.content));
}
var Ou = Z(() => {
  "use strict";
  on();
  it();
});
function Xv(e, t) {
  let n = e.propertyName.toLowerCase(), r = t.propertyName.toLowerCase();
  return n < r ? -1 : n > r ? 1 : 0;
}
function Zv(e, t, n) {
  let r = t.propertyName.toLowerCase(), i = e[0].propertyName.toLowerCase(), o = e[e.length - 1].propertyName.toLowerCase();
  if (r < i) return 0;
  if (r > o) return e.length;
  let s = 0, a = e.length - 1;
  for (; s <= a; ) {
    let u = a + s >> 1, c = n(t, e[u]);
    if (c > 0) s = u + 1;
    else if (c < 0) a = u - 1;
    else return u;
  }
  return -s - 1;
}
var _e, Sn, pm = Z(() => {
  "use strict";
  (function(e) {
    e[e.Object = 0] = "Object", e[e.Array = 1] = "Array";
  })(_e || (_e = {}));
  Sn = class {
    constructor(t, n) {
      this.propertyName = t ?? "", this.beginningLineNumber = n, this.childrenProperties = [], this.lastProperty = false, this.noKeyName = false;
    }
    addChildProperty(t) {
      if (t.parent = this, this.childrenProperties.length > 0) {
        let n = 0;
        t.noKeyName ? n = this.childrenProperties.length : n = Zv(this.childrenProperties, t, Xv), n < 0 && (n = n * -1 - 1), this.childrenProperties.splice(n, 0, t);
      } else this.childrenProperties.push(t);
      return t;
    }
  };
});
function mm(e, t) {
  let n = { ...t, keepLines: false }, r = Ue.applyEdits(e, Xr(e, n, void 0)), i = Ue.create("test://test.json", "json", 0, r), o = Qv(i), s = Yv(i, o), a = Xr(s, n, void 0), u = Ue.applyEdits(s, a);
  return [Se.replace(U.create(ee.create(0, 0), e.positionAt(e.getText().length)), u)];
}
function Qv(e) {
  let t = e.getText(), n = ct(t, false), r = new Sn(), i = r, o = r, s = r, a, u = 0, c = 0, f, v, d = -1, g = -1, y = 0, w = 0, S = [], P = false, h = false;
  for (; (a = n.scan()) !== 17; ) {
    if (P === true && a !== 14 && a !== 15 && a !== 12 && a !== 13 && o.endLineNumber === void 0) {
      let l = n.getTokenStartLine();
      v === 2 || v === 4 ? s.endLineNumber = l - 1 : o.endLineNumber = l - 1, y = l, P = false;
    }
    if (h === true && a !== 14 && a !== 15 && a !== 12 && a !== 13 && (y = n.getTokenStartLine(), h = false), n.getTokenStartLine() !== u) {
      for (let l = u; l < n.getTokenStartLine(); l++) {
        let _ = e.getText(U.create(ee.create(l, 0), ee.create(l + 1, 0))).length;
        c = c + _;
      }
      u = n.getTokenStartLine();
    }
    switch (a) {
      case 10: {
        if (f === void 0 || f === 1 || f === 5 && S[S.length - 1] === _e.Object) {
          let l = new Sn(n.getTokenValue(), y);
          s = o, o = i.addChildProperty(l);
        }
        break;
      }
      case 3: {
        if (r.beginningLineNumber === void 0 && (r.beginningLineNumber = n.getTokenStartLine()), S[S.length - 1] === _e.Object) i = o;
        else if (S[S.length - 1] === _e.Array) {
          let l = new Sn(n.getTokenValue(), y);
          l.noKeyName = true, s = o, o = i.addChildProperty(l), i = o;
        }
        S.push(_e.Array), o.type = _e.Array, y = n.getTokenStartLine(), y++;
        break;
      }
      case 1: {
        if (r.beginningLineNumber === void 0) r.beginningLineNumber = n.getTokenStartLine();
        else if (S[S.length - 1] === _e.Array) {
          let l = new Sn(n.getTokenValue(), y);
          l.noKeyName = true, s = o, o = i.addChildProperty(l);
        }
        o.type = _e.Object, S.push(_e.Object), i = o, y = n.getTokenStartLine(), y++;
        break;
      }
      case 4: {
        w = n.getTokenStartLine(), S.pop(), o.endLineNumber === void 0 && (f === 2 || f === 4) && (o.endLineNumber = w - 1, o.lastProperty = true, o.lineWhereToAddComma = d, o.indexWhereToAddComa = g, s = o, o = o ? o.parent : void 0, i = o), r.endLineNumber = w, y = w + 1;
        break;
      }
      case 2: {
        w = n.getTokenStartLine(), S.pop(), f !== 1 && (o.endLineNumber === void 0 && (o.endLineNumber = w - 1, o.lastProperty = true, o.lineWhereToAddComma = d, o.indexWhereToAddComa = g), s = o, o = o ? o.parent : void 0, i = o), r.endLineNumber = n.getTokenStartLine(), y = w + 1;
        break;
      }
      case 5: {
        w = n.getTokenStartLine(), o.endLineNumber === void 0 && (S[S.length - 1] === _e.Object || S[S.length - 1] === _e.Array && (f === 2 || f === 4)) && (o.endLineNumber = w, o.commaIndex = n.getTokenOffset() - c, o.commaLine = w), (f === 2 || f === 4) && (s = o, o = o ? o.parent : void 0, i = o), y = w + 1;
        break;
      }
      case 13: {
        f === 5 && d === n.getTokenStartLine() && (S[S.length - 1] === _e.Array && (v === 2 || v === 4) || S[S.length - 1] === _e.Object) && (S[S.length - 1] === _e.Array && (v === 2 || v === 4) || S[S.length - 1] === _e.Object) && (o.endLineNumber = void 0, P = true), (f === 1 || f === 3) && d === n.getTokenStartLine() && (h = true);
        break;
      }
    }
    a !== 14 && a !== 13 && a !== 12 && a !== 15 && (v = f, f = a, d = n.getTokenStartLine(), g = n.getTokenOffset() + n.getTokenLength() - c);
  }
  return r;
}
function Yv(e, t) {
  if (t.childrenProperties.length === 0) return e;
  let n = Ue.create("test://test.json", "json", 0, e.getText()), r = [];
  for (hm(r, t, t.beginningLineNumber); r.length > 0; ) {
    let i = r.shift(), o = i.propertyTreeArray, s = i.beginningLineNumber;
    for (let a = 0; a < o.length; a++) {
      let u = o[a], c = U.create(ee.create(u.beginningLineNumber, 0), ee.create(u.endLineNumber + 1, 0)), f = e.getText(c), v = Ue.create("test://test.json", "json", 0, f);
      if (u.lastProperty === true && a !== o.length - 1) {
        let y = u.lineWhereToAddComma - u.beginningLineNumber, w = u.indexWhereToAddComa, S = { range: U.create(ee.create(y, w), ee.create(y, w)), text: "," };
        Ue.update(v, [S], 1);
      } else if (u.lastProperty === false && a === o.length - 1) {
        let y = u.commaIndex, S = u.commaLine - u.beginningLineNumber, P = { range: U.create(ee.create(S, y), ee.create(S, y + 1)), text: "" };
        Ue.update(v, [P], 1);
      }
      let d = u.endLineNumber - u.beginningLineNumber + 1, g = { range: U.create(ee.create(s, 0), ee.create(s + d, 0)), text: v.getText() };
      Ue.update(n, [g], 1), hm(r, u, s), s = s + d;
    }
  }
  return n;
}
function Kv(e) {
  e.sort((t, n) => t.propertyName.localeCompare(n.propertyName));
}
function hm(e, t, n) {
  if (t.childrenProperties.length !== 0) if (t.type === _e.Object) {
    let r = 1 / 0;
    for (let o of t.childrenProperties) o.beginningLineNumber < r && (r = o.beginningLineNumber);
    let i = r - t.beginningLineNumber;
    n = n + i, Kv(t.childrenProperties), e.push(new Ko(n, t.childrenProperties));
  } else t.type === _e.Array && gm(e, t, n);
}
function gm(e, t, n) {
  for (let r of t.childrenProperties) {
    if (r.type === _e.Object) {
      let i = 1 / 0;
      for (let s of r.childrenProperties) s.beginningLineNumber < i && (i = s.beginningLineNumber);
      let o = i - r.beginningLineNumber;
      e.push(new Ko(n + r.beginningLineNumber - t.beginningLineNumber + o, r.childrenProperties));
    }
    r.type === _e.Array && gm(e, r, n + r.beginningLineNumber - t.beginningLineNumber);
  }
}
var Ko, ym = Z(() => {
  "use strict";
  on();
  it();
  Ou();
  pm();
  Ko = class {
    constructor(t, n) {
      this.beginningLineNumber = t, this.propertyTreeArray = n;
    }
  };
});
function bm(e, t) {
  let n = [];
  return t.visit((r) => {
    if (r.type === "property" && r.keyNode.value === "$ref" && r.valueNode?.type === "string") {
      let i = r.valueNode.value, o = t_(t, i);
      if (o) {
        let s = e.positionAt(o.offset);
        n.push({ target: `${e.uri}#${s.line + 1},${s.character + 1}`, range: e_(e, r.valueNode) });
      }
    }
    return true;
  }), Promise.resolve(n);
}
function e_(e, t) {
  return U.create(e.positionAt(t.offset + 1), e.positionAt(t.offset + t.length - 1));
}
function t_(e, t) {
  let n = n_(t);
  return n ? Ru(n, e.root) : null;
}
function Ru(e, t) {
  if (!t) return null;
  if (e.length === 0) return t;
  let n = e.shift();
  if (t && t.type === "object") {
    let r = t.properties.find((i) => i.keyNode.value === n);
    return r ? Ru(e, r.valueNode) : null;
  } else if (t && t.type === "array" && n.match(/^(0|[1-9][0-9]*)$/)) {
    let r = Number.parseInt(n), i = t.items[r];
    return i ? Ru(e, i) : null;
  }
  return null;
}
function n_(e) {
  return e === "#" ? [] : e[0] !== "#" || e[1] !== "/" ? null : e.substring(2).split(/\//).map(r_);
}
function r_(e) {
  return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
var vm = Z(() => {
  "use strict";
  it();
});
function Mu(e) {
  let t = e.promiseConstructor || Promise, n = new Yo(e.schemaRequestService, e.workspaceContext, t);
  n.setSchemaContributions(Zo);
  let r = new Bo(n, e.contributions, t, e.clientCapabilities), i = new zo(n, e.contributions, t), o = new Xo(n), s = new Go(n, t);
  return { configure: (a) => {
    n.clearExternalSchemas(), a.schemas?.forEach(n.registerExternalSchema.bind(n)), s.configure(a);
  }, resetSchema: (a) => n.onResourceChange(a), doValidation: s.doValidation.bind(s), getLanguageStatus: s.getLanguageStatus.bind(s), parseJSONDocument: (a) => Vh(a, { collectComments: true }), newJSONDocument: (a, u, c) => $h(a, u, c), getMatchingSchemas: n.getMatchingSchemas.bind(n), doResolve: r.doResolve.bind(r), doComplete: r.doComplete.bind(r), findDocumentSymbols: o.findDocumentSymbols.bind(o), findDocumentSymbols2: o.findDocumentSymbols2.bind(o), findDocumentColors: o.findDocumentColors.bind(o), getColorPresentations: o.getColorPresentations.bind(o), doHover: i.doHover.bind(i), getFoldingRanges: um, getSelectionRanges: fm, findDefinition: () => Promise.resolve([]), findLinks: bm, format: (a, u, c) => Xr(a, c, u), sort: (a, u) => mm(a, u) };
}
var _m = Z(() => {
  "use strict";
  Uh();
  Hh();
  Gh();
  Kh();
  ur();
  im();
  cm();
  lm();
  dm();
  ym();
  Ou();
  vm();
  it();
});
function wm(e, t, n) {
  let r = {}, i = 0, o;
  return t > 0 && (o = setInterval(() => {
    let s = Date.now() - t * 1e3, a = Object.keys(r);
    for (let u of a) r[u].cTime < s && (delete r[u], i--);
  }, t * 1e3)), { get(s) {
    let a = s.version, u = s.languageId, c = r[s.uri];
    if (c && c.version === a && c.languageId === u) return c.cTime = Date.now(), c.languageModel;
    let f = n(s);
    if (r[s.uri] = { languageModel: f, version: a, languageId: u, cTime: Date.now() }, c || i++, i === e) {
      let v = Number.MAX_VALUE, d = null;
      for (let g in r) {
        let y = r[g];
        y.cTime < v && (d = g, v = y.cTime);
      }
      d && (delete r[d], i--);
    }
    return f;
  }, onDocumentRemoved(s) {
    let a = s.uri;
    r[a] && (delete r[a], i--);
  }, dispose() {
    typeof o < "u" && (clearInterval(o), o = void 0, r = {}, i = 0);
  } };
}
var Dm = Z(() => {
  "use strict";
});
function jm(e, t) {
  function n(T = ["https", "http", "file"]) {
    let M = {};
    for (let O of T) O === "file" ? M[O] = t.file : (O === "http" || O === "https") && (M[O] = t.http);
    return (O) => {
      let A = O.substr(0, O.indexOf(":")), q = M[A];
      return q ? q.getContent(O) : e.sendRequest(km.type, O).then((X) => X, (X) => Promise.reject(X.message));
    };
  }
  let r = Mu({ workspaceContext: Sm, contributions: [], clientCapabilities: Io.LATEST }), i = new he.TextDocuments(Ue);
  i.listen(e);
  let o = false, s = false, a = false, u = Number.MAX_VALUE, c = Number.MAX_VALUE, f = Number.MAX_VALUE, v = Number.MAX_VALUE, d = Number.MAX_VALUE, g = Number.MAX_VALUE, y = Number.MAX_VALUE, w;
  e.onInitialize((T) => {
    let M = T.initializationOptions || {}, O = M?.handledSchemaProtocols;
    r = Mu({ schemaRequestService: n(O), workspaceContext: Sm, contributions: [], clientCapabilities: T.capabilities });
    function A(be, ue) {
      let De = be.split("."), te = T.capabilities;
      for (let Pe = 0; te && Pe < De.length; Pe++) {
        if (!te.hasOwnProperty(De[Pe])) return ue;
        te = te[De[Pe]];
      }
      return te;
    }
    return o = A("textDocument.completion.completionItem.snippetSupport", false), s = A("textDocument.rangeFormatting.dynamicRegistration", false) && typeof M.provideFormatter != "boolean", u = A("textDocument.foldingRange.rangeLimit", Number.MAX_VALUE), a = A("textDocument.documentSymbol.hierarchicalDocumentSymbolSupport", false), y = M.customCapabilities?.rangeFormatting?.editLimit || Number.MAX_VALUE, A("textDocument.diagnostic", void 0) === void 0 ? w = sh(i, e, t, m) : w = ah(i, e, t, m), { capabilities: { textDocumentSync: he.TextDocumentSyncKind.Incremental, completionProvider: o ? { resolveProvider: false, triggerCharacters: ['"', ":"] } : void 0, hoverProvider: true, documentSymbolProvider: true, documentRangeFormattingProvider: M.provideFormatter === true, documentFormattingProvider: M.provideFormatter === true, colorProvider: {}, foldingRangeProvider: true, selectionRangeProvider: true, documentLinkProvider: {}, diagnosticProvider: { documentSelector: null, interFileDependencies: false, workspaceDiagnostics: false }, codeActionProvider: true } };
  });
  let S, P, h = null, l = true, _ = false;
  e.onDidChangeConfiguration((T) => {
    let M = T.settings;
    t.configureHttpRequests?.(M?.http?.proxy, !!M.http?.proxyStrictSSL), S = M.json?.schemas, l = !!M.json?.validate?.enable, _ = M.json?.keepLines?.enable || false, D();
    let O = (A) => Math.trunc(Math.max(A, 0));
    if (c = O(M.json?.resultLimit || Number.MAX_VALUE), f = O(M.json?.jsonFoldingLimit || u), v = O(M.json?.jsoncFoldingLimit || u), d = O(M.json?.jsonColorDecoratorLimit || Number.MAX_VALUE), g = O(M.json?.jsoncColorDecoratorLimit || Number.MAX_VALUE), s) if (M.json?.format?.enable) {
      if (!h) {
        let q = [{ language: "json" }, { language: "jsonc" }];
        h = [e.client.register(he.DocumentRangeFormattingRequest.type, { documentSelector: q }), e.client.register(he.DocumentFormattingRequest.type, { documentSelector: q })];
      }
    } else h && (h.forEach((q) => q.then((X) => X.dispose())), h = null);
  }), e.onNotification(Tm.type, (T) => {
    P = T, D();
  }), e.onNotification(Om.type, (T) => {
    let M = false;
    if (Array.isArray(T)) for (let O of T) r.resetSchema(O) && (M = true);
    else M = r.resetSchema(T);
    M && w?.requestRefresh();
  }), e.onRequest(Rm.type, async (T) => {
    let M = i.get(T);
    return M ? (D(), await m(M)) : [];
  }), e.onRequest(Nm.type, async ({ schemaUri: T, content: M }) => {
    let O = "vscode://schemas/temp/" + (/* @__PURE__ */ new Date()).getTime(), A = Ue.create(O, "json", 1, M);
    return D([{ uri: T, fileMatch: [O] }]), await m(A);
  }), e.onRequest(Mm.type, async (T) => {
    let M = i.get(T);
    if (M) {
      let O = k(M);
      return r.getLanguageStatus(M, O);
    } else return { schemas: [] };
  }), e.onRequest(Cm.type, async (T) => {
    let M = T.uri, O = T.options, A = i.get(M);
    return A ? r.sort(A, O) : [];
  });
  function D(T) {
    let M = { validate: l, allowComments: true, schemas: new Array() };
    if (P) if (Array.isArray(P)) Array.prototype.push.apply(M.schemas, P);
    else for (let O in P) {
      let A = P[O];
      Array.isArray(A) && A.forEach((q) => {
        M.schemas.push({ uri: q, fileMatch: [O] });
      });
    }
    S && S.forEach((O, A) => {
      let q = O.url;
      !q && O.schema && (q = O.schema.id || `vscode://schemas/custom/${A}`), q && M.schemas.push({ uri: q, fileMatch: O.fileMatch, schema: O.schema, folderUri: O.folderUri });
    }), T && M.schemas.push(...T), r.configure(M), w?.requestRefresh();
  }
  async function m(T) {
    if (T.getText().length === 0) return [];
    let M = k(T), O = T.languageId === "jsonc" ? { comments: "ignore", trailingCommas: "warning" } : { comments: "error", trailingCommas: "error" };
    return await r.doValidation(T, M, O);
  }
  e.onDidChangeWatchedFiles((T) => {
    let M = false;
    T.changes.forEach((O) => {
      r.resetSchema(O.uri) && (M = true);
    }), M && w?.requestRefresh();
  });
  let p = wm(10, 60, (T) => r.parseJSONDocument(T));
  i.onDidClose((T) => {
    p.onDocumentRemoved(T.document);
  }), e.onShutdown(() => {
    p.dispose();
  });
  function k(T) {
    return p.get(T);
  }
  e.onCompletion((T, M) => rn(t, async () => {
    let O = i.get(T.textDocument.uri);
    if (O) {
      let A = k(O);
      return r.doComplete(O, T.position, A);
    }
    return null;
  }, null, `Error while computing completions for ${T.textDocument.uri}`, M)), e.onHover((T, M) => rn(t, async () => {
    let O = i.get(T.textDocument.uri);
    if (O) {
      let A = k(O);
      return r.doHover(O, T.position, A);
    }
    return null;
  }, null, `Error while computing hover for ${T.textDocument.uri}`, M)), e.onDocumentSymbol((T, M) => vn(t, () => {
    let O = i.get(T.textDocument.uri);
    if (O) {
      let A = k(O);
      return a ? r.findDocumentSymbols2(O, A, { resultLimit: c }) : r.findDocumentSymbols(O, A, { resultLimit: c });
    }
    return [];
  }, [], `Error while computing document symbols for ${T.textDocument.uri}`, M)), e.onCodeAction((T, M) => rn(t, async () => {
    if (i.get(T.textDocument.uri)) {
      let A = he.CodeAction.create("Sort JSON", he.CodeActionKind.Source.concat(".sort", ".json"));
      return A.command = { command: "json.sort", title: xm.t("Sort JSON") }, [A];
    }
    return [];
  }, [], `Error while computing code actions for ${T.textDocument.uri}`, M));
  function N(T, M, O) {
    O.keepLines = _;
    let A = i.get(T.uri);
    if (A) {
      let q = r.format(A, M ?? Pm(A), O);
      if (q.length > y) {
        let X = Ue.applyEdits(A, q);
        return [he.TextEdit.replace(Pm(A), X)];
      }
      return q;
    }
    return [];
  }
  e.onDocumentRangeFormatting((T, M) => vn(t, () => N(T.textDocument, T.range, T.options), [], `Error while formatting range for ${T.textDocument.uri}`, M)), e.onDocumentFormatting((T, M) => vn(t, () => N(T.textDocument, void 0, T.options), [], `Error while formatting ${T.textDocument.uri}`, M)), e.onDocumentColor((T, M) => rn(t, async () => {
    let O = i.get(T.textDocument.uri);
    if (O) {
      let A = k(O), q = O.languageId === "jsonc" ? g : d;
      return r.findDocumentColors(O, A, { resultLimit: q });
    }
    return [];
  }, [], `Error while computing document colors for ${T.textDocument.uri}`, M)), e.onColorPresentation((T, M) => vn(t, () => {
    let O = i.get(T.textDocument.uri);
    if (O) {
      let A = k(O);
      return r.getColorPresentations(O, A, T.color, T.range);
    }
    return [];
  }, [], `Error while computing color presentations for ${T.textDocument.uri}`, M)), e.onFoldingRanges((T, M) => vn(t, () => {
    let O = i.get(T.textDocument.uri);
    if (O) {
      let A = O.languageId === "jsonc" ? v : f;
      return r.getFoldingRanges(O, { rangeLimit: A });
    }
    return null;
  }, null, `Error while computing folding ranges for ${T.textDocument.uri}`, M)), e.onSelectionRanges((T, M) => vn(t, () => {
    let O = i.get(T.textDocument.uri);
    if (O) {
      let A = k(O);
      return r.getSelectionRanges(O, T.positions, A);
    }
    return [];
  }, [], `Error while computing selection ranges for ${T.textDocument.uri}`, M)), e.onDocumentLinks((T, M) => rn(t, async () => {
    let O = i.get(T.textDocument.uri);
    if (O) {
      let A = k(O);
      return r.findLinks(O, A);
    }
    return [];
  }, [], `Error while computing links for ${T.textDocument.uri}`, M)), e.listen();
}
function Pm(e) {
  return U.create(ee.create(0, 0), e.positionAt(e.getText().length));
}
var he, xm, Tm, km, Om, Rm, Mm, Nm, Cm, Sm, Em = Z(() => {
  "use strict";
  he = ze(Ir());
  No();
  ch();
  _m();
  Dm();
  Hr();
  xm = ze(vt());
  ((t) => t.type = new he.NotificationType("json/schemaAssociations"))(Tm ||= {});
  ((t) => t.type = new he.RequestType("vscode/content"))(km ||= {});
  ((t) => t.type = new he.NotificationType("json/schemaContent"))(Om ||= {});
  ((t) => t.type = new he.RequestType("json/validate"))(Rm ||= {});
  ((t) => t.type = new he.RequestType("json/languageStatus"))(Mm ||= {});
  ((t) => t.type = new he.RequestType("json/validateContent"))(Nm ||= {});
  ((t) => t.type = new he.RequestType("json/sort"))(Cm ||= {});
  Sm = { resolveRelativePath: (e, t) => {
    let n = t.substring(0, t.lastIndexOf("/") + 1);
    return $o.resolvePath(ot.parse(n), e).toString();
  } };
});
var qm = F((Am) => {
  "use strict";
  (() => {
    var e = { 747: (o, s, a) => {
      "use strict";
      var u, c = Object.defineProperty, f = Object.getOwnPropertyDescriptor, v = Object.getOwnPropertyNames, d = Object.prototype.hasOwnProperty, g = {};
      ((m, p) => {
        for (var k in p) c(m, k, { get: p[k], enumerable: true });
      })(g, { config: () => P, t: () => h }), o.exports = (u = g, ((m, p, k, N) => {
        if (p && typeof p == "object" || typeof p == "function") for (let T of v(p)) d.call(m, T) || T === void 0 || c(m, T, { get: () => p[T], enumerable: !(N = f(p, T)) || N.enumerable });
        return m;
      })(c({}, "__esModule", { value: true }), u));
      var y, w = a(896), S = a(943);
      function P(m) {
        if ("contents" in m) y = typeof m.contents == "string" ? JSON.parse(m.contents) : m.contents;
        else if ("fsPath" in m) {
          let k = (p = m.fsPath, (0, w.readFileSync)(p, "utf8")), N = JSON.parse(k);
          y = D(N) ? N.contents.bundle : N;
        } else {
          var p;
          if (m.uri) {
            let k = m.uri;
            return typeof m.uri == "string" && (k = new URL(m.uri)), new Promise(((N, T) => {
              (async function(M) {
                if (M.protocol === "file:") return await (0, S.readFile)(M, "utf8");
                if (M.protocol === "http:" || M.protocol === "https:") {
                  let O = await fetch(M.toString(), { headers: { "Accept-Encoding": "gzip, deflate", Accept: "application/json" }, redirect: "follow" });
                  if (!O.ok) {
                    let A = `Unexpected ${O.status} response while trying to read ${M}`;
                    try {
                      A += `: ${await O.text()}`;
                    } catch {
                    }
                    throw new Error(A);
                  }
                  return await O.text();
                }
                throw new Error("Unsupported protocol");
              })(k).then(((M) => {
                try {
                  let O = JSON.parse(M);
                  y = D(O) ? O.contents.bundle : O, N();
                } catch (O) {
                  T(O);
                }
              })).catch(((M) => {
                T(M);
              }));
            }));
          }
        }
      }
      function h(...m) {
        let p = m[0], k, N, T;
        if (typeof p == "string") k = p, N = p, m.splice(0, 1), T = m && typeof m[0] == "object" ? m[0] : m;
        else {
          if (p instanceof Array) {
            let O = m.slice(1);
            if (p.length !== O.length + 1) throw new Error("expected a string as the first argument to l10n.t");
            let A = p[0];
            for (let q = 1; q < p.length; q++) A += `{${q - 1}}` + p[q];
            return h(A, ...O);
          }
          N = p.message, k = N, p.comment && p.comment.length > 0 && (k += `/${Array.isArray(p.comment) ? p.comment.join("") : p.comment}`), T = p.args ?? {};
        }
        let M = y?.[k];
        return M ? typeof M == "string" ? _(M, T) : M.comment ? _(M.message, T) : _(N, T) : _(N, T);
      }
      var l = /{([^}]+)}/g;
      function _(m, p) {
        return Object.keys(p).length === 0 ? m : m.replace(l, ((k, N) => p[N] ?? k));
      }
      function D(m) {
        return !(typeof m?.contents?.bundle != "object" || typeof m?.version != "string");
      }
    }, 544: function(o, s, a) {
      "use strict";
      var u = this && this.__createBinding || (Object.create ? function(y, w, S, P) {
        P === void 0 && (P = S);
        var h = Object.getOwnPropertyDescriptor(w, S);
        h && !("get" in h ? !w.__esModule : h.writable || h.configurable) || (h = { enumerable: true, get: function() {
          return w[S];
        } }), Object.defineProperty(y, P, h);
      } : function(y, w, S, P) {
        P === void 0 && (P = S), y[P] = w[S];
      }), c = this && this.__setModuleDefault || (Object.create ? function(y, w) {
        Object.defineProperty(y, "default", { enumerable: true, value: w });
      } : function(y, w) {
        y.default = w;
      }), f = this && this.__importStar || function(y) {
        if (y && y.__esModule) return y;
        var w = {};
        if (y != null) for (var S in y) S !== "default" && Object.prototype.hasOwnProperty.call(y, S) && u(w, y, S);
        return c(w, y), w;
      };
      Object.defineProperty(s, "__esModule", { value: true }), s.req = s.json = s.toBuffer = void 0;
      let v = f(a(611)), d = f(a(692));
      async function g(y) {
        let w = 0, S = [];
        for await (let P of y) w += P.length, S.push(P);
        return Buffer.concat(S, w);
      }
      s.toBuffer = g, s.json = async function(y) {
        let w = (await g(y)).toString("utf8");
        try {
          return JSON.parse(w);
        } catch (S) {
          let P = S;
          throw P.message += ` (input: ${w})`, P;
        }
      }, s.req = function(y, w = {}) {
        let S = ((typeof y == "string" ? y : y.href).startsWith("https:") ? d : v).request(y, w), P = new Promise(((h, l) => {
          S.once("response", h).once("error", l).end();
        }));
        return S.then = P.then.bind(P), S;
      };
    }, 917: function(o, s, a) {
      "use strict";
      var u = this && this.__createBinding || (Object.create ? function(P, h, l, _) {
        _ === void 0 && (_ = l);
        var D = Object.getOwnPropertyDescriptor(h, l);
        D && !("get" in D ? !h.__esModule : D.writable || D.configurable) || (D = { enumerable: true, get: function() {
          return h[l];
        } }), Object.defineProperty(P, _, D);
      } : function(P, h, l, _) {
        _ === void 0 && (_ = l), P[_] = h[l];
      }), c = this && this.__setModuleDefault || (Object.create ? function(P, h) {
        Object.defineProperty(P, "default", { enumerable: true, value: h });
      } : function(P, h) {
        P.default = h;
      }), f = this && this.__importStar || function(P) {
        if (P && P.__esModule) return P;
        var h = {};
        if (P != null) for (var l in P) l !== "default" && Object.prototype.hasOwnProperty.call(P, l) && u(h, P, l);
        return c(h, P), h;
      }, v = this && this.__exportStar || function(P, h) {
        for (var l in P) l === "default" || Object.prototype.hasOwnProperty.call(h, l) || u(h, P, l);
      };
      Object.defineProperty(s, "__esModule", { value: true }), s.Agent = void 0;
      let d = f(a(278)), g = f(a(611)), y = a(692);
      v(a(544), s);
      let w = /* @__PURE__ */ Symbol("AgentBaseInternalState");
      class S extends g.Agent {
        constructor(h) {
          super(h), this[w] = {};
        }
        isSecureEndpoint(h) {
          if (h) {
            if (typeof h.secureEndpoint == "boolean") return h.secureEndpoint;
            if (typeof h.protocol == "string") return h.protocol === "https:";
          }
          let { stack: l } = new Error();
          return typeof l == "string" && l.split(`
`).some(((_) => _.indexOf("(https.js:") !== -1 || _.indexOf("node:https:") !== -1));
        }
        incrementSockets(h) {
          if (this.maxSockets === 1 / 0 && this.maxTotalSockets === 1 / 0) return null;
          this.sockets[h] || (this.sockets[h] = []);
          let l = new d.Socket({ writable: false });
          return this.sockets[h].push(l), this.totalSocketCount++, l;
        }
        decrementSockets(h, l) {
          if (!this.sockets[h] || l === null) return;
          let _ = this.sockets[h], D = _.indexOf(l);
          D !== -1 && (_.splice(D, 1), this.totalSocketCount--, _.length === 0 && delete this.sockets[h]);
        }
        getName(h) {
          return (typeof h.secureEndpoint == "boolean" ? h.secureEndpoint : this.isSecureEndpoint(h)) ? y.Agent.prototype.getName.call(this, h) : super.getName(h);
        }
        createSocket(h, l, _) {
          let D = { ...l, secureEndpoint: this.isSecureEndpoint(l) }, m = this.getName(D), p = this.incrementSockets(m);
          Promise.resolve().then((() => this.connect(h, D))).then(((k) => {
            if (this.decrementSockets(m, p), k instanceof g.Agent) return k.addRequest(h, D);
            this[w].currentSocket = k, super.createSocket(h, l, _);
          }), ((k) => {
            this.decrementSockets(m, p), _(k);
          }));
        }
        createConnection() {
          let h = this[w].currentSocket;
          if (this[w].currentSocket = void 0, !h) throw new Error("No socket was returned in the `connect()` function");
          return h;
        }
        get defaultPort() {
          return this[w].defaultPort ?? (this.protocol === "https:" ? 443 : 80);
        }
        set defaultPort(h) {
          this[w] && (this[w].defaultPort = h);
        }
        get protocol() {
          return this[w].protocol ?? (this.isSecureEndpoint() ? "https:" : "http:");
        }
        set protocol(h) {
          this[w] && (this[w].protocol = h);
        }
      }
      s.Agent = S;
    }, 645: function(o, s, a) {
      "use strict";
      var u = this && this.__createBinding || (Object.create ? function(D, m, p, k) {
        k === void 0 && (k = p);
        var N = Object.getOwnPropertyDescriptor(m, p);
        N && !("get" in N ? !m.__esModule : N.writable || N.configurable) || (N = { enumerable: true, get: function() {
          return m[p];
        } }), Object.defineProperty(D, k, N);
      } : function(D, m, p, k) {
        k === void 0 && (k = p), D[k] = m[p];
      }), c = this && this.__setModuleDefault || (Object.create ? function(D, m) {
        Object.defineProperty(D, "default", { enumerable: true, value: m });
      } : function(D, m) {
        D.default = m;
      }), f = this && this.__importStar || function(D) {
        if (D && D.__esModule) return D;
        var m = {};
        if (D != null) for (var p in D) p !== "default" && Object.prototype.hasOwnProperty.call(D, p) && u(m, D, p);
        return c(m, D), m;
      }, v = this && this.__importDefault || function(D) {
        return D && D.__esModule ? D : { default: D };
      };
      Object.defineProperty(s, "__esModule", { value: true }), s.HttpProxyAgent = void 0;
      let d = f(a(278)), g = f(a(756)), y = v(a(150)), w = a(434), S = a(917), P = a(16), h = (0, y.default)("http-proxy-agent");
      class l extends S.Agent {
        constructor(m, p) {
          super(p), this.proxy = typeof m == "string" ? new P.URL(m) : m, this.proxyHeaders = p?.headers ?? {}, h("Creating new HttpProxyAgent instance: %o", this.proxy.href);
          let k = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""), N = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
          this.connectOpts = { ...p ? _(p, "headers") : null, host: k, port: N };
        }
        addRequest(m, p) {
          m._header = null, this.setRequestProps(m, p), super.addRequest(m, p);
        }
        setRequestProps(m, p) {
          let { proxy: k } = this, N = `${p.secureEndpoint ? "https:" : "http:"}//${m.getHeader("host") || "localhost"}`, T = new P.URL(m.path, N);
          p.port !== 80 && (T.port = String(p.port)), m.path = String(T);
          let M = typeof this.proxyHeaders == "function" ? this.proxyHeaders() : { ...this.proxyHeaders };
          if (k.username || k.password) {
            let O = `${decodeURIComponent(k.username)}:${decodeURIComponent(k.password)}`;
            M["Proxy-Authorization"] = `Basic ${Buffer.from(O).toString("base64")}`;
          }
          M["Proxy-Connection"] || (M["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close");
          for (let O of Object.keys(M)) {
            let A = M[O];
            A && m.setHeader(O, A);
          }
        }
        async connect(m, p) {
          let k, N, T;
          return m._header = null, m.path.includes("://") || this.setRequestProps(m, p), h("Regenerating stored HTTP header string for request"), m._implicitHeader(), m.outputData && m.outputData.length > 0 && (h("Patching connection write() output buffer with updated header"), k = m.outputData[0].data, N = k.indexOf(`\r
\r
`) + 4, m.outputData[0].data = m._header + k.substring(N), h("Output buffer: %o", m.outputData[0].data)), this.proxy.protocol === "https:" ? (h("Creating `tls.Socket`: %o", this.connectOpts), T = g.connect(this.connectOpts)) : (h("Creating `net.Socket`: %o", this.connectOpts), T = d.connect(this.connectOpts)), await (0, w.once)(T, "connect"), T;
        }
      }
      function _(D, ...m) {
        let p = {}, k;
        for (k in D) m.includes(k) || (p[k] = D[k]);
        return p;
      }
      l.protocols = ["http", "https"], s.HttpProxyAgent = l;
    }, 288: function(o, s, a) {
      "use strict";
      var u = this && this.__createBinding || (Object.create ? function(p, k, N, T) {
        T === void 0 && (T = N);
        var M = Object.getOwnPropertyDescriptor(k, N);
        M && !("get" in M ? !k.__esModule : M.writable || M.configurable) || (M = { enumerable: true, get: function() {
          return k[N];
        } }), Object.defineProperty(p, T, M);
      } : function(p, k, N, T) {
        T === void 0 && (T = N), p[T] = k[N];
      }), c = this && this.__setModuleDefault || (Object.create ? function(p, k) {
        Object.defineProperty(p, "default", { enumerable: true, value: k });
      } : function(p, k) {
        p.default = k;
      }), f = this && this.__importStar || function(p) {
        if (p && p.__esModule) return p;
        var k = {};
        if (p != null) for (var N in p) N !== "default" && Object.prototype.hasOwnProperty.call(p, N) && u(k, p, N);
        return c(k, p), k;
      }, v = this && this.__importDefault || function(p) {
        return p && p.__esModule ? p : { default: p };
      };
      Object.defineProperty(s, "__esModule", { value: true }), s.HttpsProxyAgent = void 0;
      let d = f(a(278)), g = f(a(756)), y = v(a(613)), w = v(a(150)), S = a(917), P = a(16), h = a(868), l = (0, w.default)("https-proxy-agent");
      class _ extends S.Agent {
        constructor(k, N) {
          super(N), this.options = { path: void 0 }, this.proxy = typeof k == "string" ? new P.URL(k) : k, this.proxyHeaders = N?.headers ?? {}, l("Creating new HttpsProxyAgent instance: %o", this.proxy.href);
          let T = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""), M = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
          this.connectOpts = { ALPNProtocols: ["http/1.1"], ...N ? m(N, "headers") : null, host: T, port: M };
        }
        async connect(k, N) {
          let { proxy: T } = this;
          if (!N.host) throw new TypeError('No "host" provided');
          let M;
          if (T.protocol === "https:") {
            l("Creating `tls.Socket`: %o", this.connectOpts);
            let te = this.connectOpts.servername || this.connectOpts.host;
            M = g.connect({ ...this.connectOpts, servername: te });
          } else l("Creating `net.Socket`: %o", this.connectOpts), M = d.connect(this.connectOpts);
          let O = typeof this.proxyHeaders == "function" ? this.proxyHeaders() : { ...this.proxyHeaders }, A = d.isIPv6(N.host) ? `[${N.host}]` : N.host, q = `CONNECT ${A}:${N.port} HTTP/1.1\r
`;
          if (T.username || T.password) {
            let te = `${decodeURIComponent(T.username)}:${decodeURIComponent(T.password)}`;
            O["Proxy-Authorization"] = `Basic ${Buffer.from(te).toString("base64")}`;
          }
          O.Host = `${A}:${N.port}`, O["Proxy-Connection"] || (O["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close");
          for (let te of Object.keys(O)) q += `${te}: ${O[te]}\r
`;
          let X = (0, h.parseProxyResponse)(M);
          M.write(`${q}\r
`);
          let { connect: be, buffered: ue } = await X;
          if (k.emit("proxyConnect", be), this.emit("proxyConnect", be, k), be.statusCode === 200) {
            if (k.once("socket", D), N.secureEndpoint) {
              l("Upgrading socket connection to TLS");
              let te = N.servername || N.host;
              return g.connect({ ...m(N, "host", "path", "port"), socket: M, servername: te });
            }
            return M;
          }
          M.destroy();
          let De = new d.Socket({ writable: false });
          return De.readable = true, k.once("socket", ((te) => {
            l("Replaying proxy buffer for failed request"), (0, y.default)(te.listenerCount("data") > 0), te.push(ue), te.push(null);
          })), De;
        }
      }
      function D(p) {
        p.resume();
      }
      function m(p, ...k) {
        let N = {}, T;
        for (T in p) k.includes(T) || (N[T] = p[T]);
        return N;
      }
      _.protocols = ["http", "https"], s.HttpsProxyAgent = _;
    }, 868: function(o, s, a) {
      "use strict";
      var u = this && this.__importDefault || function(f) {
        return f && f.__esModule ? f : { default: f };
      };
      Object.defineProperty(s, "__esModule", { value: true }), s.parseProxyResponse = void 0;
      let c = (0, u(a(150)).default)("https-proxy-agent:parse-proxy-response");
      s.parseProxyResponse = function(f) {
        return new Promise(((v, d) => {
          let g = 0, y = [];
          function w() {
            let l = f.read();
            l ? (function(_) {
              y.push(_), g += _.length;
              let D = Buffer.concat(y, g), m = D.indexOf(`\r
\r
`);
              if (m === -1) return c("have not received end of HTTP headers yet..."), void w();
              let p = D.slice(0, m).toString("ascii").split(`\r
`), k = p.shift();
              if (!k) return f.destroy(), d(new Error("No header received from proxy CONNECT response"));
              let N = k.split(" "), T = +N[1], M = N.slice(2).join(" "), O = {};
              for (let A of p) {
                if (!A) continue;
                let q = A.indexOf(":");
                if (q === -1) return f.destroy(), d(new Error(`Invalid header from proxy CONNECT response: "${A}"`));
                let X = A.slice(0, q).toLowerCase(), be = A.slice(q + 1).trimStart(), ue = O[X];
                typeof ue == "string" ? O[X] = [ue, be] : Array.isArray(ue) ? ue.push(be) : O[X] = be;
              }
              c("got proxy server response: %o %o", k, O), S(), v({ connect: { statusCode: T, statusText: M, headers: O }, buffered: D });
            })(l) : f.once("readable", w);
          }
          function S() {
            f.removeListener("end", P), f.removeListener("error", h), f.removeListener("readable", w);
          }
          function P() {
            S(), c("onend"), d(new Error("Proxy connection ended before receiving CONNECT response"));
          }
          function h(l) {
            S(), c("onerror %o", l), d(l);
          }
          f.on("error", h), f.on("end", P), w();
        }));
      };
    }, 580: function(o, s, a) {
      "use strict";
      var u, c = this && this.__extends || (u = function(m, p) {
        return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(k, N) {
          k.__proto__ = N;
        } || function(k, N) {
          for (var T in N) Object.prototype.hasOwnProperty.call(N, T) && (k[T] = N[T]);
        }, u(m, p);
      }, function(m, p) {
        if (typeof p != "function" && p !== null) throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
        function k() {
          this.constructor = m;
        }
        u(m, p), m.prototype = p === null ? Object.create(p) : (k.prototype = p.prototype, new k());
      }), f = this && this.__assign || function() {
        return f = Object.assign || function(m) {
          for (var p, k = 1, N = arguments.length; k < N; k++) for (var T in p = arguments[k]) Object.prototype.hasOwnProperty.call(p, T) && (m[T] = p[T]);
          return m;
        }, f.apply(this, arguments);
      };
      Object.defineProperty(s, "__esModule", { value: true }), s.xhr = s.configure = void 0, s.getErrorStatusDescription = function(m) {
        if (!(m < 400)) switch (m) {
          case 400:
            return y.t("Bad request. The request cannot be fulfilled due to bad syntax.");
          case 401:
            return y.t("Unauthorized. The server is refusing to respond.");
          case 403:
            return y.t("Forbidden. The server is refusing to respond.");
          case 404:
            return y.t("Not Found. The requested location could not be found.");
          case 405:
            return y.t("Method not allowed. A request was made using a request method not supported by that location.");
          case 406:
            return y.t("Not Acceptable. The server can only generate a response that is not accepted by the client.");
          case 407:
            return y.t("Proxy Authentication Required. The client must first authenticate itself with the proxy.");
          case 408:
            return y.t("Request Timeout. The server timed out waiting for the request.");
          case 409:
            return y.t("Conflict. The request could not be completed because of a conflict in the request.");
          case 410:
            return y.t("Gone. The requested page is no longer available.");
          case 411:
            return y.t('Length Required. The "Content-Length" is not defined.');
          case 412:
            return y.t("Precondition Failed. The precondition given in the request evaluated to false by the server.");
          case 413:
            return y.t("Request Entity Too Large. The server will not accept the request, because the request entity is too large.");
          case 414:
            return y.t("Request-URI Too Long. The server will not accept the request, because the URL is too long.");
          case 415:
            return y.t("Unsupported Media Type. The server will not accept the request, because the media type is not supported.");
          case 500:
            return y.t("Internal Server Error.");
          case 501:
            return y.t("Not Implemented. The server either does not recognize the request method, or it lacks the ability to fulfill the request.");
          case 502:
            return y.t("Bad Gateway. The upstream server did not respond.");
          case 503:
            return y.t("Service Unavailable. The server is currently unavailable (overloaded or down).");
          default:
            return y.t("HTTP status code {0}", m);
        }
      };
      var v = a(611), d = a(692), g = a(16), y = a(747), w = a(106), S = a(645), P = a(288), h = void 0, l = true;
      function _(m) {
        var p;
        return new Promise((function(k, N) {
          var T = (0, g.parse)(m.url), M = { hostname: T.hostname, agent: !!m.agent && m.agent, port: T.port ? parseInt(T.port) : T.protocol === "https:" ? 443 : 80, path: T.path, method: m.type || "GET", headers: m.headers, rejectUnauthorized: typeof m.strictSSL != "boolean" || m.strictSSL };
          m.user && m.password && (M.auth = m.user + ":" + m.password);
          var O = function(A) {
            if (A.statusCode >= 300 && A.statusCode < 400 && m.followRedirects && m.followRedirects > 0 && A.headers.location) {
              var q = A.headers.location;
              q.startsWith("/") && (q = (0, g.format)({ protocol: T.protocol, hostname: T.hostname, port: T.port, pathname: q })), k(_((function(X) {
                for (var be = [], ue = 1; ue < arguments.length; ue++) be[ue - 1] = arguments[ue];
                return be.forEach((function(De) {
                  return Object.keys(De).forEach((function(te) {
                    return X[te] = De[te];
                  }));
                })), X;
              })({}, m, { url: q, followRedirects: m.followRedirects - 1 })));
            } else k({ req: p, res: A });
          };
          (p = T.protocol === "https:" ? d.request(M, O) : v.request(M, O)).on("error", N), m.timeout && p.setTimeout(m.timeout), m.data && p.write(m.data), p.end(), m.token && (m.token.isCancellationRequested && p.destroy(new D()), m.token.onCancellationRequested((function() {
            p.destroy(new D());
          })));
        }));
      }
      s.configure = function(m, p) {
        h = m, l = p;
      }, s.xhr = function(m) {
        return typeof (m = f({}, m)).strictSSL != "boolean" && (m.strictSSL = l), m.agent || (m.agent = (function(p, k) {
          var N;
          k === void 0 && (k = {});
          var T = (0, g.parse)(p), M = k.proxyUrl || (function(O) {
            return O.protocol === "http:" ? process.env.HTTP_PROXY || process.env.http_proxy || null : O.protocol === "https:" && (process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy) || null;
          })(T);
          return M && /^https?:/.test(M) ? T.protocol === "http:" ? new S.HttpProxyAgent(M) : new P.HttpsProxyAgent(M, { rejectUnauthorized: (N = k.strictSSL) === null || N === void 0 || N }) : null;
        })(m.url, { proxyUrl: h, strictSSL: l })), typeof m.followRedirects != "number" && (m.followRedirects = 5), _(m).then((function(p) {
          return new Promise((function(k, N) {
            var T, M, O = p.res, A = O, q = false, X = O.headers && O.headers["content-encoding"];
            if (X && (T = m.type, M = p.res.statusCode, !(T === "HEAD" || M >= 100 && M < 200 || M === 204 || M === 304))) {
              var be = { flush: w.constants.Z_SYNC_FLUSH, finishFlush: w.constants.Z_SYNC_FLUSH };
              if (X === "gzip") {
                var ue = w.createGunzip(be);
                O.pipe(ue), A = ue;
              } else if (X === "deflate") {
                var De = w.createInflate(be);
                O.pipe(De), A = De;
              }
            }
            var te = [];
            A.on("data", (function(Pe) {
              return te.push(Pe);
            })), A.on("end", (function() {
              if (!q) {
                if (q = true, m.followRedirects > 0 && (O.statusCode >= 300 && O.statusCode <= 303 || O.statusCode === 307)) {
                  var Pe = O.headers.location;
                  if (Pe.startsWith("/")) {
                    var $t = (0, g.parse)(m.url);
                    Pe = (0, g.format)({ protocol: $t.protocol, hostname: $t.hostname, port: $t.port, pathname: Pe });
                  }
                  if (Pe) {
                    var Zr = { type: m.type, url: Pe, user: m.user, password: m.password, headers: m.headers, timeout: m.timeout, followRedirects: m.followRedirects - 1, data: m.data, token: m.token };
                    return void (0, s.xhr)(Zr).then(k, N);
                  }
                }
                var Qr = Buffer.concat(te), Yr = { responseText: Qr.toString(), body: Qr, status: O.statusCode, headers: O.headers || {} };
                O.statusCode >= 200 && O.statusCode < 300 || O.statusCode === 1223 ? k(Yr) : N(Yr);
              }
            })), A.on("error", (function(Pe) {
              var $t;
              $t = D.is(Pe) ? Pe : { responseText: y.t("Unable to access {0}. Error: {1}", m.url, Pe.message), body: Buffer.concat(te), status: 500, headers: {} }, q = true, N($t);
            })), m.token && (m.token.isCancellationRequested && A.destroy(new D()), m.token.onCancellationRequested((function() {
              A.destroy(new D());
            })));
          }));
        }), (function(p) {
          var k;
          return k = D.is(p) ? p : { responseText: m.agent ? y.t("Unable to connect to {0} through a proxy. Error: {1}", m.url, p.message) : y.t("Unable to connect to {0}. Error: {1}", m.url, p.message), body: Buffer.concat([]), status: 404, headers: {} }, Promise.reject(k);
        }));
      };
      var D = (function(m) {
        function p() {
          var k = m.call(this, "The user aborted a request") || this;
          return k.name = "AbortError", Object.setPrototypeOf(k, p.prototype), k;
        }
        return c(p, m), p.is = function(k) {
          return k instanceof p;
        }, p;
      })(Error);
    }, 150: (o, s) => {
      function a() {
      }
      Object.defineProperty(s, "__esModule", { value: true }), s.default = function(u) {
        return a;
      };
    }, 613: (o) => {
      "use strict";
      o.exports = fe("assert");
    }, 434: (o) => {
      "use strict";
      o.exports = fe("events");
    }, 896: (o) => {
      "use strict";
      o.exports = fe("fs");
    }, 943: (o) => {
      "use strict";
      o.exports = fe("fs/promises");
    }, 611: (o) => {
      "use strict";
      o.exports = fe("http");
    }, 692: (o) => {
      "use strict";
      o.exports = fe("https");
    }, 278: (o) => {
      "use strict";
      o.exports = fe("net");
    }, 756: (o) => {
      "use strict";
      o.exports = fe("tls");
    }, 16: (o) => {
      "use strict";
      o.exports = fe("url");
    }, 106: (o) => {
      "use strict";
      o.exports = fe("zlib");
    } }, t = {}, n = (function o(s) {
      var a = t[s];
      if (a !== void 0) return a.exports;
      var u = t[s] = { exports: {} };
      return e[s].call(u.exports, u, u.exports, o), u.exports;
    })(580), r = Am;
    for (var i in n) r[i] = n[i];
    n.__esModule && Object.defineProperty(r, "__esModule", { value: true });
  })();
});
var c_ = {};
import { promises as i_ } from "fs";
function o_() {
  return { getContent(e, t) {
    return (0, fr.xhr)({ url: e, followRedirects: 5, headers: { "Accept-Encoding": "gzip, deflate" } }).then((r) => r.responseText, (r) => Promise.reject(r.responseText || (0, fr.getErrorStatusDescription)(r.status) || r.toString()));
  } };
}
function s_() {
  return { async getContent(e, t) {
    try {
      let n = ot.parse(e);
      return (await i_.readFile(n.fsPath, t)).toString();
    } catch (n) {
      throw n.code === "ENOENT" ? new Error(Nu.t("Schema not found: {0}", e)) : n.code === "EISDIR" ? new Error(Nu.t("{0} is a directory, not a file", e)) : n;
    }
  } };
}
var Im, fr, Nu, lr, a_, Lm = Z(() => {
  "use strict";
  Im = ze(ih());
  No();
  Em();
  fr = ze(qm());
  Hr();
  Nu = ze(vt()), lr = (0, Im.createConnection)();
  console.log = lr.console.log.bind(lr.console);
  console.error = lr.console.error.bind(lr.console);
  process.on("unhandledRejection", (e) => {
    lr.console.error(nr("Unhandled exception", e));
  });
  a_ = { timer: { setImmediate(e, ...t) {
    let n = setImmediate(e, ...t);
    return { dispose: () => clearImmediate(n) };
  }, setTimeout(e, t, ...n) {
    let r = setTimeout(e, t, ...n);
    return { dispose: () => clearTimeout(r) };
  } }, file: s_(), http: o_(), configureHttpRequests: fr.configure };
  jm(lr, a_);
});
var Fm = ze(vt());
async function u_() {
  let e = [], t = process.env.VSCODE_L10N_BUNDLE_LOCATION;
  if (t) try {
    await Fm.config({ uri: t }), e.push(`l10n: Configured to ${t.toString()}`);
  } catch (n) {
    e.push(`l10n: Problems loading ${t.toString()} : ${n}`);
  }
  await Promise.resolve().then(() => (Lm(), c_)), e.forEach(console.log);
}
u_();
