// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 8898 range:3466970..3469054
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8898: (e, t, r) => {
    "use strict";
    r.d(t, { DH: () => c });
    var n = r(73024), s = r(76760), o = r(77314), i = r(22544);
    const a = "session.sqlite";
    class c {
      constructor(e2, t2) {
        if (this.storageDir = e2, this.observer = t2, 0 === e2.length) throw new Error("Agent host storage needs a non-empty storageDir");
        this.sessionsDir = s.join(e2, "sessions"), this.globalDbPath = s.join(e2, "data.sqlite");
      }
      openGlobalStore() {
        return this.open("global", this.globalDbPath);
      }
      sessionDir(e2) {
        return (0, o.M)(e2), s.join(this.sessionsDir, e2);
      }
      sessionDbPath(e2) {
        return s.join(this.sessionDir(e2), a);
      }
      sessionDbRelPath(e2) {
        return this.relPath(this.sessionDbPath(e2));
      }
      hasSessionStore(e2) {
        return (0, i.Is)(this.sessionDbPath(e2));
      }
      openSessionStore(e2) {
        return this.open("session", this.sessionDbPath(e2));
      }
      readSessionStore(e2) {
        const t2 = this.sessionDbPath(e2);
        return i.Zg.openReadOnly(t2, { store: "session", relPath: this.relPath(t2), observer: this.observer });
      }
      open(e2, t2) {
        return i.Zg.open(t2, { store: e2, relPath: this.relPath(t2), observer: this.observer });
      }
      deleteSessionDir(e2) {
        const t2 = this.sessionDir(e2);
        try {
          n.rmSync(t2, { recursive: true, force: true });
        } catch (e3) {
          throw (0, i.rD)(e3, this.relPath(t2));
        }
      }
      relPath(e2) {
        return s.relative(this.storageDir, e2).split(s.sep).join("/");
      }
      listSessionIds() {
        let e2;
        try {
          e2 = n.readdirSync(this.sessionsDir, { withFileTypes: true });
        } catch (e3) {
          if ("ENOENT" === (0, i.CA)(e3).code) return [];
          throw (0, i.rD)(e3, this.relPath(this.sessionsDir));
        }
        return e2.filter((e3) => e3.isDirectory() && (0, o._)(e3.name) && (0, i.Ze)(s.join(this.sessionsDir, e3.name, a))).map((e3) => e3.name).sort();
      }
    }
  }