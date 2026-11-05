// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3405 range:926888..928770
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3405: (t2, e2, r2) => {
    "use strict";
    r2(9038);
    const { Duplex: n2 } = r2(2203);
    function s2(t3) {
      t3.emit("close");
    }
    function i2() {
      !this.destroyed && this._writableState.finished && this.destroy();
    }
    function o2(t3) {
      this.removeListener("error", o2), this.destroy(), 0 === this.listenerCount("error") && this.emit("error", t3);
    }
    t2.exports = function(t3, e3) {
      let r3 = true;
      const a = new n2({ ...e3, autoDestroy: false, emitClose: false, objectMode: false, writableObjectMode: false });
      return t3.on("message", function(e4, r4) {
        const n3 = !r4 && a._readableState.objectMode ? e4.toString() : e4;
        a.push(n3) || t3.pause();
      }), t3.once("error", function(t4) {
        a.destroyed || (r3 = false, a.destroy(t4));
      }), t3.once("close", function() {
        a.destroyed || a.push(null);
      }), a._destroy = function(e4, n3) {
        if (t3.readyState === t3.CLOSED) return n3(e4), void process.nextTick(s2, a);
        let i3 = false;
        t3.once("error", function(t4) {
          i3 = true, n3(t4);
        }), t3.once("close", function() {
          i3 || n3(e4), process.nextTick(s2, a);
        }), r3 && t3.terminate();
      }, a._final = function(e4) {
        t3.readyState !== t3.CONNECTING ? null !== t3._socket && (t3._socket._writableState.finished ? (e4(), a._readableState.endEmitted && a.destroy()) : (t3._socket.once("finish", function() {
          e4();
        }), t3.close())) : t3.once("open", function() {
          a._final(e4);
        });
      }, a._read = function() {
        t3.isPaused && t3.resume();
      }, a._write = function(e4, r4, n3) {
        t3.readyState !== t3.CONNECTING ? t3.send(e4, n3) : t3.once("open", function() {
          a._write(e4, r4, n3);
        });
      }, a.on("end", i2), a.on("error", o2), a;
    };
  }