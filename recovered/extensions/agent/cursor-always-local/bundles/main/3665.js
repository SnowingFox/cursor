// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3665 range:988028..993262
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3665: function(t2, e2, r2) {
    "use strict";
    var n2 = this && this.__awaiter || function(t3, e3, r3, n3) {
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
    }, s2 = this && this.__generator || function(t3, e3) {
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
    var i2 = r2(3851), o2 = r2(2918);
    e2.backOff = function(t3, e3) {
      return void 0 === e3 && (e3 = {}), n2(this, void 0, void 0, function() {
        var r3;
        return s2(this, function(n3) {
          switch (n3.label) {
            case 0:
              return r3 = i2.getSanitizedOptions(e3), [4, new a(t3, r3).execute()];
            case 1:
              return [2, n3.sent()];
          }
        });
      });
    };
    var a = (function() {
      function t3(t4, e3) {
        this.request = t4, this.options = e3, this.attemptNumber = 0;
      }
      return t3.prototype.execute = function() {
        return n2(this, void 0, void 0, function() {
          var t4;
          return s2(this, function(e3) {
            switch (e3.label) {
              case 0:
                if (this.attemptLimitReached) return [3, 7];
                e3.label = 1;
              case 1:
                return e3.trys.push([1, 4, , 6]), [4, this.applyDelay()];
              case 2:
                return e3.sent(), [4, this.request()];
              case 3:
                return [2, e3.sent()];
              case 4:
                return t4 = e3.sent(), this.attemptNumber++, [4, this.options.retry(t4, this.attemptNumber)];
              case 5:
                if (!e3.sent() || this.attemptLimitReached) throw t4;
                return [3, 6];
              case 6:
                return [3, 0];
              case 7:
                throw new Error("Something went wrong.");
            }
          });
        });
      }, Object.defineProperty(t3.prototype, "attemptLimitReached", { get: function() {
        return this.attemptNumber >= this.options.numOfAttempts;
      }, enumerable: true, configurable: true }), t3.prototype.applyDelay = function() {
        return n2(this, void 0, void 0, function() {
          return s2(this, function(t4) {
            switch (t4.label) {
              case 0:
                return [4, o2.DelayFactory(this.options, this.attemptNumber).apply()];
              case 1:
                return t4.sent(), [2];
            }
          });
        });
      }, t3;
    })();
  }