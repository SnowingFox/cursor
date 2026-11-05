// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 4267 range:86159..90666
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4267: (t2, r2, e2) => {
    var n2, o2, i2, a2, u2 = e2(5613), s2 = e2(1942), c = e2(3940), f = e2(9117), h = e2(9120), l = e2(9944), p = e2(7509), v = e2(5054), d = e2(3754), g = e2(3900), y = e2(4977), w = e2(4188), x = e2(831), m = e2(286), b = e2(7964), S = e2(3474).set, O = e2(1982), E = e2(3306), R = e2(6042), P = e2(8648), j = e2(3086), k = e2(6453), I = e2(7301), T = e2(9444), A = "Promise", L = I.CONSTRUCTOR, N = I.REJECTION_EVENT, U = I.SUBCLASSING, C = j.getterFor(A), F = j.set, B = k && k.prototype, D = k, M = B, z = f.TypeError, _ = f.document, H = f.process, J = T.f, q = J, G = !!(_ && _.createEvent && f.dispatchEvent), V = "unhandledrejection", W = function(t3) {
      var r3;
      return !(!x(t3) || !w(r3 = t3.then)) && r3;
    }, $ = function(t3, r3) {
      var e3, n3, o3, i3 = r3.value, a3 = 1 === r3.state, u3 = a3 ? t3.ok : t3.fail, s3 = t3.resolve, c2 = t3.reject, f2 = t3.domain;
      try {
        u3 ? (a3 || (2 === r3.rejection && Z(r3), r3.rejection = 1), true === u3 ? e3 = i3 : (f2 && f2.enter(), e3 = u3(i3), f2 && (f2.exit(), o3 = true)), e3 === t3.promise ? c2(new z("Promise-chain cycle")) : (n3 = W(e3)) ? l(n3, e3, s3, c2) : s3(e3)) : c2(i3);
      } catch (t4) {
        f2 && !o3 && f2.exit(), c2(t4);
      }
    }, K = function(t3, r3) {
      t3.notified || (t3.notified = true, O(function() {
        for (var e3, n3 = t3.reactions; e3 = n3.get(); ) $(e3, t3);
        t3.notified = false, r3 && !t3.rejection && Q(t3);
      }));
    }, Y = function(t3, r3, e3) {
      var n3, o3;
      G ? ((n3 = _.createEvent("Event")).promise = r3, n3.reason = e3, n3.initEvent(t3, false, true), f.dispatchEvent(n3)) : n3 = { promise: r3, reason: e3 }, !N && (o3 = f["on" + t3]) ? o3(n3) : t3 === V && E("Unhandled promise rejection", e3);
    }, Q = function(t3) {
      l(S, f, function() {
        var r3, e3 = t3.facade, n3 = t3.value;
        if (X(t3) && (r3 = R(function() {
          c ? H.emit("unhandledRejection", n3, e3) : Y(V, e3, n3);
        }), t3.rejection = c || X(t3) ? 2 : 1, r3.error)) throw r3.value;
      });
    }, X = function(t3) {
      return 1 !== t3.rejection && !t3.parent;
    }, Z = function(t3) {
      l(S, f, function() {
        var r3 = t3.facade;
        c ? H.emit("rejectionHandled", r3) : Y("rejectionhandled", r3, t3.value);
      });
    }, tt = function(t3, r3, e3) {
      return function(n3) {
        t3(r3, n3, e3);
      };
    }, rt = function(t3, r3, e3) {
      t3.done || (t3.done = true, e3 && (t3 = e3), t3.value = r3, t3.state = 2, K(t3, true));
    }, et = function(t3, r3, e3) {
      if (!t3.done) {
        t3.done = true, e3 && (t3 = e3);
        try {
          if (t3.facade === r3) throw new z("Promise can't be resolved itself");
          var n3 = W(r3);
          n3 ? O(function() {
            var e4 = { done: false };
            try {
              l(n3, r3, tt(et, e4, t3), tt(rt, e4, t3));
            } catch (r4) {
              rt(e4, r4, t3);
            }
          }) : (t3.value = r3, t3.state = 1, K(t3, false));
        } catch (r4) {
          rt({ done: false }, r4, t3);
        }
      }
    };
    if (L && (M = (D = function(t3) {
      m(this, M), y(t3), l(n2, this);
      var r3 = C(this);
      try {
        t3(tt(et, r3), tt(rt, r3));
      } catch (t4) {
        rt(r3, t4);
      }
    }).prototype, (n2 = function(t3) {
      F(this, { type: A, done: false, notified: false, parent: false, reactions: new P(), rejection: false, state: 0, value: null });
    }).prototype = p(M, "then", function(t3, r3) {
      var e3 = C(this), n3 = J(b(this, D));
      return e3.parent = true, n3.ok = !w(t3) || t3, n3.fail = w(r3) && r3, n3.domain = c ? H.domain : void 0, 0 === e3.state ? e3.reactions.add(n3) : O(function() {
        $(n3, e3);
      }), n3.promise;
    }), o2 = function() {
      var t3 = new n2(), r3 = C(t3);
      this.promise = t3, this.resolve = tt(et, r3), this.reject = tt(rt, r3);
    }, T.f = J = function(t3) {
      return t3 === D || t3 === i2 ? new o2(t3) : q(t3);
    }, !s2 && w(k) && B !== Object.prototype)) {
      a2 = B.then, U || p(B, "then", function(t3, r3) {
        var e3 = this;
        return new D(function(t4, r4) {
          l(a2, e3, t4, r4);
        }).then(t3, r3);
      }, { unsafe: true });
      try {
        delete B.constructor;
      } catch (t3) {
      }
      v && v(B, M);
    }
    u2({ global: true, constructor: true, wrap: true, forced: L }, { Promise: D }), i2 = h.Promise, d(D, A, false, true), g(A);
  }