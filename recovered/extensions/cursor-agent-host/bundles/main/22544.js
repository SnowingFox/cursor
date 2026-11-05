// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 22544 range:4450194..4460275
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
22544: (e, t, r) => {
    "use strict";
    r.d(t, { Zg: () => E, C8: () => f, df: () => g, CA: () => p, Ze: () => y, Is: () => w, rD: () => m });
    var n = r(73024), s = r(76760);
    const o = "PRAGMA auto_vacuum = INCREMENTAL;", i = "PRAGMA user_version = 1;", a = "PRAGMA journal_mode = WAL;", c = "PRAGMA synchronous = NORMAL;", l = "PRAGMA wal_autocheckpoint = 1000;", u = ["CREATE TABLE IF NOT EXISTS ItemTable (key TEXT UNIQUE ON CONFLICT REPLACE, value BLOB);", "CREATE TABLE IF NOT EXISTS cursorDiskKV (key TEXT UNIQUE ON CONFLICT REPLACE, value BLOB);"];
    function d() {
      return process.getBuiltinModule("node:sqlite");
    }
    function p(e2) {
      if (!(e2 instanceof Error)) return {};
      const t2 = "code" in e2 ? e2.code : void 0, r2 = "errcode" in e2 ? e2.errcode : void 0;
      return { code: "string" == typeof t2 ? t2 : void 0, sqliteErrcode: "number" == typeof r2 ? r2 : void 0 };
    }
    function m(e2, t2) {
      const { code: r2 } = p(e2);
      return void 0 === r2 ? e2 : Object.assign(new Error(`${r2} on ${t2}`), { code: r2 });
    }
    function h(e2, t2) {
      return e2.prepare(`PRAGMA ${t2}`).get()?.[t2];
    }
    class f extends Error {
      constructor(e2) {
        super(`${e2} exists but holds no store yet`), this.name = "AgentHostStoreEmptyError";
      }
    }
    class g extends Error {
      constructor(e2) {
        super(`${e2} exists and is not a regular file`), this.name = "AgentHostStoreNotAFileError";
      }
    }
    function y(e2) {
      try {
        return n.lstatSync(e2).isFile();
      } catch {
        return false;
      }
    }
    function w(e2) {
      try {
        return n.lstatSync(e2), true;
      } catch (e3) {
        const { code: t2 } = p(e3);
        return "ENOENT" !== t2 && "ENOTDIR" !== t2;
      }
    }
    function v(e2) {
      const t2 = Array.from(e2, (e3) => e3.codePointAt(0) ?? 0);
      for (; t2.length > 0; ) {
        const e3 = t2[t2.length - 1];
        if (e3 < 1114111) {
          const r2 = e3 + 1;
          return t2[t2.length - 1] = r2 >= 55296 && r2 <= 57343 ? 57344 : r2, String.fromCodePoint(...t2);
        }
        t2.pop();
      }
      return new Uint8Array(0);
    }
    function _(e2) {
      if (e2.includes("\0") || !e2.isWellFormed()) throw new TypeError(`Key must be well-formed text without NUL: ${JSON.stringify(e2)}`);
    }
    class A {
      constructor(e2, t2, r2) {
        this.guard = r2, this.getStmt = e2.prepare(`SELECT value FROM ${t2} WHERE key = ?`), this.setStmt = e2.prepare((function(e3) {
          return (function(e4) {
            return `INSERT INTO ${e4} (key, value) VALUES (?, ?) ON CONFLICT (key) DO UPDATE SET value = excluded.value WHERE value IS NOT excluded.value`;
          })(e3).replace("VALUES (?, ?)", "VALUES (?, COALESCE(?, X''))");
        })(t2)), this.deleteStmt = e2.prepare(`DELETE FROM ${t2} WHERE key = ?`);
        const n2 = "WHERE key >= ? AND key < ? AND value IS NOT NULL ORDER BY key";
        this.keysStmt = e2.prepare(`SELECT key FROM ${t2} ${n2}`), this.entriesStmt = e2.prepare(`SELECT key, value FROM ${t2} ${n2}`);
      }
      get(e2) {
        return _(e2), this.guard(() => this.getStmt.get(e2)?.value ?? void 0);
      }
      set(e2, t2) {
        _(e2), this.guard(() => this.setStmt.run(e2, t2));
      }
      delete(e2) {
        _(e2), this.guard(() => this.deleteStmt.run(e2));
      }
      keys(e2) {
        return _(e2), this.guard(() => this.keysStmt.all(e2, v(e2)).map((e3) => String(e3.key)));
      }
      entries(e2) {
        return _(e2), this.guard(() => this.entriesStmt.all(e2, v(e2)).map((e3) => ({ key: String(e3.key), value: e3.value })));
      }
    }
    class S {
      constructor(e2) {
        this.raw = e2;
      }
      get(e2) {
        const t2 = this.raw.get(e2);
        return void 0 === t2 ? void 0 : this.parse(t2, e2);
      }
      set(e2, t2) {
        null == t2 ? this.raw.delete(e2) : this.raw.set(e2, JSON.stringify(t2));
      }
      delete(e2) {
        this.raw.delete(e2);
      }
      keys(e2 = "") {
        return this.raw.keys(e2);
      }
      entries(e2 = "") {
        return this.raw.entries(e2).map(({ key: e3, value: t2 }) => ({ key: e3, value: this.parse(t2, e3) }));
      }
      parse(e2, t2) {
        const r2 = e2 instanceof Uint8Array ? new TextDecoder().decode(e2) : e2;
        if ("string" != typeof r2) throw new Error(`Unexpected column type for key ${t2}`);
        try {
          return JSON.parse(r2);
        } catch (e3) {
          throw new Error(`Value at key ${t2} is not valid JSON`, { cause: e3 });
        }
      }
    }
    class b {
      constructor(e2) {
        this.raw = e2;
      }
      get(e2) {
        const t2 = this.raw.get(e2);
        return void 0 === t2 ? void 0 : this.bytes(t2, e2);
      }
      set(e2, t2) {
        if (!(t2 instanceof Uint8Array)) throw new TypeError(`Blob for key ${e2} must be a Uint8Array`);
        this.raw.set(e2, t2);
      }
      delete(e2) {
        this.raw.delete(e2);
      }
      keys(e2 = "") {
        return this.raw.keys(e2);
      }
      entries(e2 = "") {
        return this.raw.entries(e2).map(({ key: e3, value: t2 }) => ({ key: e3, value: this.bytes(t2, e3) }));
      }
      bytes(e2, t2) {
        if (e2 instanceof Uint8Array) return e2;
        if ("string" == typeof e2) return new TextEncoder().encode(e2);
        throw new Error(`Unexpected column type for key ${t2}`);
      }
    }
    class E {
      constructor(e2, t2, r2, n2, s2) {
        this.db = e2, this.path = t2, this.relPath = r2, this.created = n2, this.emit = s2, this.closed = false;
        const o2 = (e3) => this.guard(e3);
        this.items = new S(new A(e2, "ItemTable", o2)), this.blobs = new b(new A(e2, "cursorDiskKV", o2));
      }
      static open(e2, t2) {
        return E.openWith(e2, t2, false);
      }
      static openReadOnly(e2, t2) {
        return E.openWith(e2, t2, true);
      }
      static openWith(e2, t2, r2) {
        const v2 = t2?.relPath ?? s.basename(e2), { store: _2, observer: A2 } = t2 ?? {}, S2 = void 0 !== _2 && void 0 !== A2 ? (e3) => A2({ ...e3, store: _2, relPath: v2 }) : () => {
        }, b2 = performance.now();
        let I, C = false;
        try {
          r2 || (C = (function(e3, t4) {
            try {
              n.mkdirSync(s.dirname(e3), { recursive: true, mode: 448 });
              let r3 = true;
              try {
                n.writeFileSync(e3, new Uint8Array(), { mode: 384, flag: "wx" });
              } catch (e4) {
                if ("EEXIST" !== p(e4).code) throw e4;
                r3 = false;
              }
              if (!y(e3)) throw new g(t4);
              return r3;
            } catch (e4) {
              throw m(e4, t4);
            }
          })(e2, v2));
          const t3 = r2 ? (function(e3, t4) {
            if (w(e3) && !y(e3)) throw new g(t4);
            const r3 = new (d()).DatabaseSync(e3, { readOnly: true, enableForeignKeyConstraints: false });
            try {
              r3.exec("PRAGMA busy_timeout = 5000;");
              if (0 === ("object" == typeof (n2 = r3.prepare("SELECT count(*) AS n FROM sqlite_master WHERE name = 'ItemTable'").get()) && null !== n2 && "n" in n2 && "number" == typeof n2.n ? n2.n : 0)) throw new f(t4);
              return r3;
            } catch (e4) {
              throw r3.close(), e4;
            }
            var n2;
          })(e2, v2) : (function(e3) {
            const t4 = new (d()).DatabaseSync(e3, { enableForeignKeyConstraints: false });
            try {
              return t4.exec("PRAGMA busy_timeout = 5000;"), 2 !== h(t4, "auto_vacuum") && t4.exec(o), 1 !== h(t4, "user_version") && t4.exec(i), t4.exec(a + c + l + u.join("")), t4;
            } catch (e4) {
              throw t4.close(), e4;
            }
          })(e2);
          try {
            I = new E(t3, e2, v2, C, S2);
          } catch (e3) {
            throw t3.close(), e3;
          }
        } catch (e3) {
          throw S2({ kind: "open_failed", durationMs: performance.now() - b2, error: e3, ...p(e3) }), e3;
        }
        try {
          S2({ kind: "opened", created: C, durationMs: performance.now() - b2 });
        } catch (e3) {
          throw I.close(), e3;
        }
        return I;
      }
      transaction(e2) {
        return this.guard(() => this.runTransaction(e2));
      }
      dataVersion() {
        const e2 = this.guard(() => h(this.db, "data_version"));
        if ("number" == typeof e2) return e2;
        if ("bigint" == typeof e2) return Number(e2);
        throw new Error(`Unexpected data_version for ${this.relPath}`);
      }
      runTransaction(e2) {
        const t2 = performance.now();
        let r2;
        try {
          this.db.exec("BEGIN IMMEDIATE");
          const t3 = e2();
          if (("object" == typeof (n2 = t3) || "function" == typeof n2) && null !== n2 && "then" in n2 && "function" == typeof n2.then) throw new TypeError(`Transaction on ${this.relPath} needs a synchronous callback; it returned a promise`);
          return this.guard(() => this.db.exec("COMMIT")), t3;
        } catch (e3) {
          if (r2 = { outcome: "rolled_back", error: e3 }, !this.closed) try {
            this.db.exec("ROLLBACK");
          } catch (t3) {
            if (!(t3 instanceof Error && t3.message.includes("no transaction is active"))) throw r2 = { outcome: "rollback_failed", error: t3 }, new AggregateError([e3, t3], `Transaction on ${this.relPath} failed and could not roll back`);
          }
          throw e3;
        } finally {
          this.emit({ kind: "transaction", durationMs: performance.now() - t2, outcome: r2?.outcome ?? "committed", ...p(r2?.error) });
        }
        var n2;
      }
      get isClosed() {
        return this.closed;
      }
      close() {
        this.closed || (this.closed = true, this.db.close());
      }
      guard(e2) {
        if (this.closed) throw this.emit({ kind: "closed_store_use" }), new Error(`Agent host store ${this.relPath} is closed`);
        return e2();
      }
    }
  }