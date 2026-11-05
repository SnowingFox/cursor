// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 4209 range:1066309..1070682
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4209: function(t2, e2, r2) {
    "use strict";
    var n2, s2 = this && this.__extends || (n2 = function(t3, e3) {
      return n2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t4, e4) {
        t4.__proto__ = e4;
      } || function(t4, e4) {
        for (var r3 in e4) e4.hasOwnProperty(r3) && (t4[r3] = e4[r3]);
      }, n2(t3, e3);
    }, function(t3, e3) {
      function r3() {
        this.constructor = t3;
      }
      n2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (r3.prototype = e3.prototype, new r3());
    }), i2 = this && this.__awaiter || function(t3, e3, r3, n3) {
      return new (r3 || (r3 = Promise))(function(s3, i3) {
        function o3(t4) {
          try {
            u(n3.next(t4));
          } catch (t5) {
            i3(t5);
          }
        }
        function a2(t4) {
          try {
            u(n3.throw(t4));
          } catch (t5) {
            i3(t5);
          }
        }
        function u(t4) {
          var e4;
          t4.done ? s3(t4.value) : (e4 = t4.value, e4 instanceof r3 ? e4 : new r3(function(t5) {
            t5(e4);
          })).then(o3, a2);
        }
        u((n3 = n3.apply(t3, e3 || [])).next());
      });
    }, o2 = this && this.__generator || function(t3, e3) {
      var r3, n3, s3, i3, o3 = { label: 0, sent: function() {
        if (1 & s3[0]) throw s3[1];
        return s3[1];
      }, trys: [], ops: [] };
      return i3 = { next: a2(0), throw: a2(1), return: a2(2) }, "function" == typeof Symbol && (i3[Symbol.iterator] = function() {
        return this;
      }), i3;
      function a2(i4) {
        return function(a3) {
          return (function(i5) {
            if (r3) throw new TypeError("Generator is already executing.");
            for (; o3; ) try {
              if (r3 = 1, n3 && (s3 = 2 & i5[0] ? n3.return : i5[0] ? n3.throw || ((s3 = n3.return) && s3.call(n3), 0) : n3.next) && !(s3 = s3.call(n3, i5[1])).done) return s3;
              switch (n3 = 0, s3 && (i5 = [2 & i5[0], s3.value]), i5[0]) {
                case 0:
                case 1:
                  s3 = i5;
                  break;
                case 4:
                  return o3.label++, { value: i5[1], done: false };
                case 5:
                  o3.label++, n3 = i5[1], i5 = [0];
                  continue;
                case 7:
                  i5 = o3.ops.pop(), o3.trys.pop();
                  continue;
                default:
                  if (!(s3 = o3.trys, (s3 = s3.length > 0 && s3[s3.length - 1]) || 6 !== i5[0] && 2 !== i5[0])) {
                    o3 = 0;
                    continue;
                  }
                  if (3 === i5[0] && (!s3 || i5[1] > s3[0] && i5[1] < s3[3])) {
                    o3.label = i5[1];
                    break;
                  }
                  if (6 === i5[0] && o3.label < s3[1]) {
                    o3.label = s3[1], s3 = i5;
                    break;
                  }
                  if (s3 && o3.label < s3[2]) {
                    o3.label = s3[2], o3.ops.push(i5);
                    break;
                  }
                  s3[2] && o3.ops.pop(), o3.trys.pop();
                  continue;
              }
              i5 = e3.call(t3, o3);
            } catch (t4) {
              i5 = [6, t4], n3 = 0;
            } finally {
              r3 = s3 = 0;
            }
            if (5 & i5[0]) throw i5[1];
            return { value: i5[0] ? i5[1] : void 0, done: true };
          })([i4, a3]);
        };
      }
    };
    Object.defineProperty(e2, "__esModule", { value: true });
    var a = (function(t3) {
      function e3() {
        return null !== t3 && t3.apply(this, arguments) || this;
      }
      return s2(e3, t3), e3.prototype.apply = function() {
        return i2(this, void 0, void 0, function() {
          return o2(this, function(e4) {
            return [2, !!this.isFirstAttempt || t3.prototype.apply.call(this)];
          });
        });
      }, Object.defineProperty(e3.prototype, "isFirstAttempt", { get: function() {
        return 0 === this.attempt;
      }, enumerable: true, configurable: true }), Object.defineProperty(e3.prototype, "numOfDelayedAttempts", { get: function() {
        return this.attempt - 1;
      }, enumerable: true, configurable: true }), e3;
    })(r2(9687).Delay);
    e2.SkipFirstDelay = a;
  }