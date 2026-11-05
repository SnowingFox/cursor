// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 13405 range:876997..878865
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
13405: (e, t, r) => {
    "use strict";
    r(49038);
    const { Duplex: n } = r(2203);
    function s(e2) {
      e2.emit("close");
    }
    function o() {
      !this.destroyed && this._writableState.finished && this.destroy();
    }
    function i(e2) {
      this.removeListener("error", i), this.destroy(), 0 === this.listenerCount("error") && this.emit("error", e2);
    }
    e.exports = function(e2, t2) {
      let r2 = true;
      const a = new n({ ...t2, autoDestroy: false, emitClose: false, objectMode: false, writableObjectMode: false });
      return e2.on("message", function(t3, r3) {
        const n2 = !r3 && a._readableState.objectMode ? t3.toString() : t3;
        a.push(n2) || e2.pause();
      }), e2.once("error", function(e3) {
        a.destroyed || (r2 = false, a.destroy(e3));
      }), e2.once("close", function() {
        a.destroyed || a.push(null);
      }), a._destroy = function(t3, n2) {
        if (e2.readyState === e2.CLOSED) return n2(t3), void process.nextTick(s, a);
        let o2 = false;
        e2.once("error", function(e3) {
          o2 = true, n2(e3);
        }), e2.once("close", function() {
          o2 || n2(t3), process.nextTick(s, a);
        }), r2 && e2.terminate();
      }, a._final = function(t3) {
        e2.readyState !== e2.CONNECTING ? null !== e2._socket && (e2._socket._writableState.finished ? (t3(), a._readableState.endEmitted && a.destroy()) : (e2._socket.once("finish", function() {
          t3();
        }), e2.close())) : e2.once("open", function() {
          a._final(t3);
        });
      }, a._read = function() {
        e2.isPaused && e2.resume();
      }, a._write = function(t3, r3, n2) {
        e2.readyState !== e2.CONNECTING ? e2.send(t3, n2) : e2.once("open", function() {
          a._write(t3, r3, n2);
        });
      }, a.on("end", o), a.on("error", i), a;
    };
  }