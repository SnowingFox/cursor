// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 23404 range:1059908..1078986
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
23404: (e, t) => {
    var r, n, s, o, i, a, c, l, u, d, p, m, h, f, g, y, w, v, _, b, S, k, x, E, I, T, C, P, A, R, M, J, O;
    !(function() {
      var B = "object" == typeof global ? global : "object" == typeof self ? self : "object" == typeof this ? this : {};
      function D(e2, t2) {
        return e2 !== B && ("function" == typeof Object.create ? Object.defineProperty(e2, "__esModule", { value: true }) : e2.__esModule = true), function(r2, n2) {
          return e2[r2] = t2 ? t2(r2, n2) : n2;
        };
      }
      r = function(e2) {
        !(function(e3) {
          var t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t3) {
            e4.__proto__ = t3;
          } || function(e4, t3) {
            for (var r3 in t3) Object.prototype.hasOwnProperty.call(t3, r3) && (e4[r3] = t3[r3]);
          };
          n = function(e4, r3) {
            if ("function" != typeof r3 && null !== r3) throw new TypeError("Class extends value " + String(r3) + " is not a constructor or null");
            function n2() {
              this.constructor = e4;
            }
            t2(e4, r3), e4.prototype = null === r3 ? Object.create(r3) : (n2.prototype = r3.prototype, new n2());
          }, s = Object.assign || function(e4) {
            for (var t3, r3 = 1, n2 = arguments.length; r3 < n2; r3++) for (var s2 in t3 = arguments[r3]) Object.prototype.hasOwnProperty.call(t3, s2) && (e4[s2] = t3[s2]);
            return e4;
          }, o = function(e4, t3) {
            var r3 = {};
            for (var n2 in e4) Object.prototype.hasOwnProperty.call(e4, n2) && t3.indexOf(n2) < 0 && (r3[n2] = e4[n2]);
            if (null != e4 && "function" == typeof Object.getOwnPropertySymbols) {
              var s2 = 0;
              for (n2 = Object.getOwnPropertySymbols(e4); s2 < n2.length; s2++) t3.indexOf(n2[s2]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, n2[s2]) && (r3[n2[s2]] = e4[n2[s2]]);
            }
            return r3;
          }, i = function(e4, t3, r3, n2) {
            var s2, o2 = arguments.length, i2 = o2 < 3 ? t3 : null === n2 ? n2 = Object.getOwnPropertyDescriptor(t3, r3) : n2;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i2 = Reflect.decorate(e4, t3, r3, n2);
            else for (var a2 = e4.length - 1; a2 >= 0; a2--) (s2 = e4[a2]) && (i2 = (o2 < 3 ? s2(i2) : o2 > 3 ? s2(t3, r3, i2) : s2(t3, r3)) || i2);
            return o2 > 3 && i2 && Object.defineProperty(t3, r3, i2), i2;
          }, a = function(e4, t3) {
            return function(r3, n2) {
              t3(r3, n2, e4);
            };
          }, c = function(e4, t3, r3, n2, s2, o2) {
            function i2(e5) {
              if (void 0 !== e5 && "function" != typeof e5) throw new TypeError("Function expected");
              return e5;
            }
            for (var a2, c2 = n2.kind, l2 = "getter" === c2 ? "get" : "setter" === c2 ? "set" : "value", u2 = !t3 && e4 ? n2.static ? e4 : e4.prototype : null, d2 = t3 || (u2 ? Object.getOwnPropertyDescriptor(u2, n2.name) : {}), p2 = false, m2 = r3.length - 1; m2 >= 0; m2--) {
              var h2 = {};
              for (var f2 in n2) h2[f2] = "access" === f2 ? {} : n2[f2];
              for (var f2 in n2.access) h2.access[f2] = n2.access[f2];
              h2.addInitializer = function(e5) {
                if (p2) throw new TypeError("Cannot add initializers after decoration has completed");
                o2.push(i2(e5 || null));
              };
              var g2 = (0, r3[m2])("accessor" === c2 ? { get: d2.get, set: d2.set } : d2[l2], h2);
              if ("accessor" === c2) {
                if (void 0 === g2) continue;
                if (null === g2 || "object" != typeof g2) throw new TypeError("Object expected");
                (a2 = i2(g2.get)) && (d2.get = a2), (a2 = i2(g2.set)) && (d2.set = a2), (a2 = i2(g2.init)) && s2.unshift(a2);
              } else (a2 = i2(g2)) && ("field" === c2 ? s2.unshift(a2) : d2[l2] = a2);
            }
            u2 && Object.defineProperty(u2, n2.name, d2), p2 = true;
          }, l = function(e4, t3, r3) {
            for (var n2 = arguments.length > 2, s2 = 0; s2 < t3.length; s2++) r3 = n2 ? t3[s2].call(e4, r3) : t3[s2].call(e4);
            return n2 ? r3 : void 0;
          }, u = function(e4) {
            return "symbol" == typeof e4 ? e4 : "".concat(e4);
          }, d = function(e4, t3, r3) {
            return "symbol" == typeof t3 && (t3 = t3.description ? "[".concat(t3.description, "]") : ""), Object.defineProperty(e4, "name", { configurable: true, value: r3 ? "".concat(r3, " ", t3) : t3 });
          }, p = function(e4, t3) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e4, t3);
          }, m = function(e4, t3, r3, n2) {
            function s2(e5) {
              return e5 instanceof r3 ? e5 : new r3(function(t4) {
                t4(e5);
              });
            }
            return new (r3 || (r3 = Promise))(function(r4, o2) {
              function i2(e5) {
                try {
                  c2(n2.next(e5));
                } catch (e6) {
                  o2(e6);
                }
              }
              function a2(e5) {
                try {
                  c2(n2.throw(e5));
                } catch (e6) {
                  o2(e6);
                }
              }
              function c2(e5) {
                e5.done ? r4(e5.value) : s2(e5.value).then(i2, a2);
              }
              c2((n2 = n2.apply(e4, t3 || [])).next());
            });
          }, h = function(e4, t3) {
            var r3, n2, s2, o2 = { label: 0, sent: function() {
              if (1 & s2[0]) throw s2[1];
              return s2[1];
            }, trys: [], ops: [] }, i2 = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
            return i2.next = a2(0), i2.throw = a2(1), i2.return = a2(2), "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function a2(e5) {
              return function(t4) {
                return c2([e5, t4]);
              };
            }
            function c2(a3) {
              if (r3) throw new TypeError("Generator is already executing.");
              for (; i2 && (i2 = 0, a3[0] && (o2 = 0)), o2; ) try {
                if (r3 = 1, n2 && (s2 = 2 & a3[0] ? n2.return : a3[0] ? n2.throw || ((s2 = n2.return) && s2.call(n2), 0) : n2.next) && !(s2 = s2.call(n2, a3[1])).done) return s2;
                switch (n2 = 0, s2 && (a3 = [2 & a3[0], s2.value]), a3[0]) {
                  case 0:
                  case 1:
                    s2 = a3;
                    break;
                  case 4:
                    return o2.label++, { value: a3[1], done: false };
                  case 5:
                    o2.label++, n2 = a3[1], a3 = [0];
                    continue;
                  case 7:
                    a3 = o2.ops.pop(), o2.trys.pop();
                    continue;
                  default:
                    if (!(s2 = o2.trys, (s2 = s2.length > 0 && s2[s2.length - 1]) || 6 !== a3[0] && 2 !== a3[0])) {
                      o2 = 0;
                      continue;
                    }
                    if (3 === a3[0] && (!s2 || a3[1] > s2[0] && a3[1] < s2[3])) {
                      o2.label = a3[1];
                      break;
                    }
                    if (6 === a3[0] && o2.label < s2[1]) {
                      o2.label = s2[1], s2 = a3;
                      break;
                    }
                    if (s2 && o2.label < s2[2]) {
                      o2.label = s2[2], o2.ops.push(a3);
                      break;
                    }
                    s2[2] && o2.ops.pop(), o2.trys.pop();
                    continue;
                }
                a3 = t3.call(e4, o2);
              } catch (e5) {
                a3 = [6, e5], n2 = 0;
              } finally {
                r3 = s2 = 0;
              }
              if (5 & a3[0]) throw a3[1];
              return { value: a3[0] ? a3[1] : void 0, done: true };
            }
          }, f = function(e4, t3) {
            for (var r3 in e4) "default" === r3 || Object.prototype.hasOwnProperty.call(t3, r3) || R(t3, e4, r3);
          }, R = Object.create ? function(e4, t3, r3, n2) {
            void 0 === n2 && (n2 = r3);
            var s2 = Object.getOwnPropertyDescriptor(t3, r3);
            s2 && !("get" in s2 ? !t3.__esModule : s2.writable || s2.configurable) || (s2 = { enumerable: true, get: function() {
              return t3[r3];
            } }), Object.defineProperty(e4, n2, s2);
          } : function(e4, t3, r3, n2) {
            void 0 === n2 && (n2 = r3), e4[n2] = t3[r3];
          }, g = function(e4) {
            var t3 = "function" == typeof Symbol && Symbol.iterator, r3 = t3 && e4[t3], n2 = 0;
            if (r3) return r3.call(e4);
            if (e4 && "number" == typeof e4.length) return { next: function() {
              return e4 && n2 >= e4.length && (e4 = void 0), { value: e4 && e4[n2++], done: !e4 };
            } };
            throw new TypeError(t3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }, y = function(e4, t3) {
            var r3 = "function" == typeof Symbol && e4[Symbol.iterator];
            if (!r3) return e4;
            var n2, s2, o2 = r3.call(e4), i2 = [];
            try {
              for (; (void 0 === t3 || t3-- > 0) && !(n2 = o2.next()).done; ) i2.push(n2.value);
            } catch (e5) {
              s2 = { error: e5 };
            } finally {
              try {
                n2 && !n2.done && (r3 = o2.return) && r3.call(o2);
              } finally {
                if (s2) throw s2.error;
              }
            }
            return i2;
          }, w = function() {
            for (var e4 = [], t3 = 0; t3 < arguments.length; t3++) e4 = e4.concat(y(arguments[t3]));
            return e4;
          }, v = function() {
            for (var e4 = 0, t3 = 0, r3 = arguments.length; t3 < r3; t3++) e4 += arguments[t3].length;
            var n2 = Array(e4), s2 = 0;
            for (t3 = 0; t3 < r3; t3++) for (var o2 = arguments[t3], i2 = 0, a2 = o2.length; i2 < a2; i2++, s2++) n2[s2] = o2[i2];
            return n2;
          }, _ = function(e4, t3, r3) {
            if (r3 || 2 === arguments.length) for (var n2, s2 = 0, o2 = t3.length; s2 < o2; s2++) !n2 && s2 in t3 || (n2 || (n2 = Array.prototype.slice.call(t3, 0, s2)), n2[s2] = t3[s2]);
            return e4.concat(n2 || Array.prototype.slice.call(t3));
          }, b = function(e4) {
            return this instanceof b ? (this.v = e4, this) : new b(e4);
          }, S = function(e4, t3, r3) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var n2, s2 = r3.apply(e4, t3 || []), o2 = [];
            return n2 = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), a2("next"), a2("throw"), a2("return", i2), n2[Symbol.asyncIterator] = function() {
              return this;
            }, n2;
            function i2(e5) {
              return function(t4) {
                return Promise.resolve(t4).then(e5, d2);
              };
            }
            function a2(e5, t4) {
              s2[e5] && (n2[e5] = function(t5) {
                return new Promise(function(r4, n3) {
                  o2.push([e5, t5, r4, n3]) > 1 || c2(e5, t5);
                });
              }, t4 && (n2[e5] = t4(n2[e5])));
            }
            function c2(e5, t4) {
              try {
                l2(s2[e5](t4));
              } catch (e6) {
                p2(o2[0][3], e6);
              }
            }
            function l2(e5) {
              e5.value instanceof b ? Promise.resolve(e5.value.v).then(u2, d2) : p2(o2[0][2], e5);
            }
            function u2(e5) {
              c2("next", e5);
            }
            function d2(e5) {
              c2("throw", e5);
            }
            function p2(e5, t4) {
              e5(t4), o2.shift(), o2.length && c2(o2[0][0], o2[0][1]);
            }
          }, k = function(e4) {
            var t3, r3;
            return t3 = {}, n2("next"), n2("throw", function(e5) {
              throw e5;
            }), n2("return"), t3[Symbol.iterator] = function() {
              return this;
            }, t3;
            function n2(n3, s2) {
              t3[n3] = e4[n3] ? function(t4) {
                return (r3 = !r3) ? { value: b(e4[n3](t4)), done: false } : s2 ? s2(t4) : t4;
              } : s2;
            }
          }, x = function(e4) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var t3, r3 = e4[Symbol.asyncIterator];
            return r3 ? r3.call(e4) : (e4 = g(e4), t3 = {}, n2("next"), n2("throw"), n2("return"), t3[Symbol.asyncIterator] = function() {
              return this;
            }, t3);
            function n2(r4) {
              t3[r4] = e4[r4] && function(t4) {
                return new Promise(function(n3, o2) {
                  s2(n3, o2, (t4 = e4[r4](t4)).done, t4.value);
                });
              };
            }
            function s2(e5, t4, r4, n3) {
              Promise.resolve(n3).then(function(t5) {
                e5({ value: t5, done: r4 });
              }, t4);
            }
          }, E = function(e4, t3) {
            return Object.defineProperty ? Object.defineProperty(e4, "raw", { value: t3 }) : e4.raw = t3, e4;
          };
          var r2 = Object.create ? function(e4, t3) {
            Object.defineProperty(e4, "default", { enumerable: true, value: t3 });
          } : function(e4, t3) {
            e4.default = t3;
          }, B2 = function(e4) {
            return B2 = Object.getOwnPropertyNames || function(e5) {
              var t3 = [];
              for (var r3 in e5) Object.prototype.hasOwnProperty.call(e5, r3) && (t3[t3.length] = r3);
              return t3;
            }, B2(e4);
          };
          I = function(e4) {
            if (e4 && e4.__esModule) return e4;
            var t3 = {};
            if (null != e4) for (var n2 = B2(e4), s2 = 0; s2 < n2.length; s2++) "default" !== n2[s2] && R(t3, e4, n2[s2]);
            return r2(t3, e4), t3;
          }, T = function(e4) {
            return e4 && e4.__esModule ? e4 : { default: e4 };
          }, C = function(e4, t3, r3, n2) {
            if ("a" === r3 && !n2) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t3 ? e4 !== t3 || !n2 : !t3.has(e4)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === r3 ? n2 : "a" === r3 ? n2.call(e4) : n2 ? n2.value : t3.get(e4);
          }, P = function(e4, t3, r3, n2, s2) {
            if ("m" === n2) throw new TypeError("Private method is not writable");
            if ("a" === n2 && !s2) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t3 ? e4 !== t3 || !s2 : !t3.has(e4)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === n2 ? s2.call(e4, r3) : s2 ? s2.value = r3 : t3.set(e4, r3), r3;
          }, A = function(e4, t3) {
            if (null === t3 || "object" != typeof t3 && "function" != typeof t3) throw new TypeError("Cannot use 'in' operator on non-object");
            return "function" == typeof e4 ? t3 === e4 : e4.has(t3);
          }, M = function(e4, t3, r3) {
            if (null != t3) {
              if ("object" != typeof t3 && "function" != typeof t3) throw new TypeError("Object expected.");
              var n2, s2;
              if (r3) {
                if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
                n2 = t3[Symbol.asyncDispose];
              }
              if (void 0 === n2) {
                if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
                n2 = t3[Symbol.dispose], r3 && (s2 = n2);
              }
              if ("function" != typeof n2) throw new TypeError("Object not disposable.");
              s2 && (n2 = function() {
                try {
                  s2.call(this);
                } catch (e5) {
                  return Promise.reject(e5);
                }
              }), e4.stack.push({ value: t3, dispose: n2, async: r3 });
            } else r3 && e4.stack.push({ async: true });
            return t3;
          };
          var D2 = "function" == typeof SuppressedError ? SuppressedError : function(e4, t3, r3) {
            var n2 = new Error(r3);
            return n2.name = "SuppressedError", n2.error = e4, n2.suppressed = t3, n2;
          };
          J = function(e4) {
            function t3(t4) {
              e4.error = e4.hasError ? new D2(t4, e4.error, "An error was suppressed during disposal.") : t4, e4.hasError = true;
            }
            var r3, n2 = 0;
            function s2() {
              for (; r3 = e4.stack.pop(); ) try {
                if (!r3.async && 1 === n2) return n2 = 0, e4.stack.push(r3), Promise.resolve().then(s2);
                if (r3.dispose) {
                  var o2 = r3.dispose.call(r3.value);
                  if (r3.async) return n2 |= 2, Promise.resolve(o2).then(s2, function(e5) {
                    return t3(e5), s2();
                  });
                } else n2 |= 1;
              } catch (e5) {
                t3(e5);
              }
              if (1 === n2) return e4.hasError ? Promise.reject(e4.error) : Promise.resolve();
              if (e4.hasError) throw e4.error;
            }
            return s2();
          }, O = function(e4, t3) {
            return "string" == typeof e4 && /^\.\.?\//.test(e4) ? e4.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e5, r3, n2, s2, o2) {
              return r3 ? t3 ? ".jsx" : ".js" : !n2 || s2 && o2 ? n2 + s2 + "." + o2.toLowerCase() + "js" : e5;
            }) : e4;
          }, e3("__extends", n), e3("__assign", s), e3("__rest", o), e3("__decorate", i), e3("__param", a), e3("__esDecorate", c), e3("__runInitializers", l), e3("__propKey", u), e3("__setFunctionName", d), e3("__metadata", p), e3("__awaiter", m), e3("__generator", h), e3("__exportStar", f), e3("__createBinding", R), e3("__values", g), e3("__read", y), e3("__spread", w), e3("__spreadArrays", v), e3("__spreadArray", _), e3("__await", b), e3("__asyncGenerator", S), e3("__asyncDelegator", k), e3("__asyncValues", x), e3("__makeTemplateObject", E), e3("__importStar", I), e3("__importDefault", T), e3("__classPrivateFieldGet", C), e3("__classPrivateFieldSet", P), e3("__classPrivateFieldIn", A), e3("__addDisposableResource", M), e3("__disposeResources", J), e3("__rewriteRelativeImportExtension", O);
        })(D(B, D(e2)));
      }.apply(t, [t]), void 0 === r || (e.exports = r);
    })();
  }