// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 27498 range:4825204..4827970
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
27498: (e, t, r) => {
    "use strict";
    r.d(t, { cK: () => c });
    var n = r(98875), s = r(66058), o = function(e2, t2, r2) {
      if (null != t2) {
        if ("object" != typeof t2 && "function" != typeof t2) throw new TypeError("Object expected.");
        var n2, s2;
        if (r2) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          n2 = t2[Symbol.asyncDispose];
        }
        if (void 0 === n2) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          n2 = t2[Symbol.dispose], r2 && (s2 = n2);
        }
        if ("function" != typeof n2) throw new TypeError("Object not disposable.");
        s2 && (n2 = function() {
          try {
            s2.call(this);
          } catch (e3) {
            return Promise.reject(e3);
          }
        }), e2.stack.push({ value: t2, dispose: n2, async: r2 });
      } else r2 && e2.stack.push({ async: true });
      return t2;
    }, i = /* @__PURE__ */ (function(e2) {
      return function(t2) {
        function r2(r3) {
          t2.error = t2.hasError ? new e2(r3, t2.error, "An error was suppressed during disposal.") : r3, t2.hasError = true;
        }
        var n2, s2 = 0;
        return (function e3() {
          for (; n2 = t2.stack.pop(); ) try {
            if (!n2.async && 1 === s2) return s2 = 0, t2.stack.push(n2), Promise.resolve().then(e3);
            if (n2.dispose) {
              var o2 = n2.dispose.call(n2.value);
              if (n2.async) return s2 |= 2, Promise.resolve(o2).then(e3, function(t3) {
                return r2(t3), e3();
              });
            } else s2 |= 1;
          } catch (e4) {
            r2(e4);
          }
          if (1 === s2) return t2.hasError ? Promise.reject(t2.error) : Promise.resolve();
          if (t2.hasError) throw t2.error;
        })();
      };
    })("function" == typeof SuppressedError ? SuppressedError : function(e2, t2, r2) {
      var n2 = new Error(r2);
      return n2.name = "SuppressedError", n2.error = e2, n2.suppressed = t2, n2;
    });
    class a {
      async exec(e2, t2, r2, a2) {
        const c2 = { stack: [], error: void 0, hasError: false };
        try {
          o(c2, (0, n.VI)(e2.withName("LocalGitExecutor.exec"), { attributes: { "git.cwd": t2, "git.args": r2, "git.caller": a2?.caller } }), false);
          const { stdout: i2, stderr: l } = await (0, s.uM)("git", r2, { cwd: t2, timeout: a2?.timeout });
          return { exitCode: 0, stdout: i2.toString(), stderr: l.toString() };
        } catch (e3) {
          c2.error = e3, c2.hasError = true;
        } finally {
          i(c2);
        }
      }
    }
    function c(e2 = {}) {
      return e2.gitExecutor ?? new a();
    }
  }