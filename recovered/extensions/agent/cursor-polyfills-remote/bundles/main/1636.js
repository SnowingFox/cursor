// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 1636 range:47611..49627
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1636: (t2, r2, e2) => {
    var n2 = e2(9944), o2 = e2(4977), i2 = e2(3770), a2 = e2(831), u2 = e2(2197), s2 = e2(5604), c = e2(4417), f = e2(4224), h = e2(6002), l = e2(7731), p = function(t3) {
      var r3 = 0 === t3, e3 = 1 === t3, p2 = 2 === t3, v = 3 === t3;
      return function(t4, d, g) {
        i2(t4);
        var y = void 0 !== d;
        !y && r3 || o2(d);
        var w = h(t4), x = s2("Promise"), m = w.iterator, b = w.next, S = 0;
        return new x(function(t5, o3) {
          var s3 = function(t6) {
            l(m, o3, t6, o3);
          }, h2 = function() {
            try {
              try {
                u2(S);
              } catch (t6) {
                return s3(t6);
              }
              x.resolve(i2(n2(b, m))).then(function(n3) {
                try {
                  if (i2(n3).done) r3 ? (f(g, S), t5(g)) : t5(!v && (p2 || void 0));
                  else {
                    var u3 = n3.value;
                    try {
                      if (y) {
                        var w2 = S++, b2 = d(u3, w2), O = function(n4) {
                          if (e3) h2();
                          else if (p2) n4 ? h2() : l(m, t5, false, o3);
                          else if (r3) try {
                            c(g, w2, n4), h2();
                          } catch (t6) {
                            s3(t6);
                          }
                          else n4 ? l(m, t5, v || u3, o3) : h2();
                        };
                        a2(b2) ? x.resolve(b2).then(O, s3) : O(b2);
                      } else c(g, S++, u3), h2();
                    } catch (t6) {
                      s3(t6);
                    }
                  }
                } catch (t6) {
                  o3(t6);
                }
              }, o3);
            } catch (t6) {
              o3(t6);
            }
          };
          h2();
        });
      };
    };
    t2.exports = { toArray: p(0), forEach: p(1), every: p(2), some: p(3), find: p(4) };
  }