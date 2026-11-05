// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/656.js sha256:4293e5c525b1bdc74992b398a4163c333d16a2d76c20911fb11f2b2c1adaa26f
// module: "../cursor-sdk-local-runtime/dist/run-store/sqlite-run-event-store.js" range:190..3741
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
import * as __dep0 from "node:fs";
import * as __dep1 from "node:path";
import * as __dep2 from "./sqlite/open-sqlite-driver";
var r = __dep0,
  s = __dep1,
  i = __dep2;
function o(e) {
  return {
    runId: e.run_id,
    seq: e.seq,
    offset: e.offset,
    eventType: e.event_type,
    payload: e.payload_json ? JSON.parse(e.payload_json) : null,
    payloadRef: e.payload_ref,
    idempotencyKey: e.idempotency_key,
    createdAt: new Date(e.created_at)
  };
}
class a {
  static async open(e) {
    const t = new a(e);
    return await t.getDriver(), t;
  }
  constructor(e) {
    this.options = e, this.disposed = !1;
  }
  get dbPath() {
    return (0, s.join)(this.options.stateRoot, "index.db");
  }
  async appendRunEvent(e) {
    const t = await this.getDriver();
    t.exec("BEGIN IMMEDIATE");
    try {
      const n = e.idempotencyKey ?? null;
      if (n) {
        const r = t.get("SELECT *\n            FROM run_events\n            WHERE run_id = ? AND idempotency_key = ?\n            LIMIT 1", [e.runId, n]);
        if (r) return t.exec("COMMIT"), o(r);
      }
      const r = t.get("SELECT MAX(seq) as max_seq FROM run_events WHERE run_id = ?", [e.runId]),
        s = (r?.max_seq ?? 0) + 1,
        i = String(s),
        a = new Date().toISOString();
      return t.run("INSERT INTO run_events (\n          run_id, seq, offset, event_type, payload_json, payload_ref, idempotency_key, created_at\n        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [e.runId, s, i, e.eventType, JSON.stringify(e.payload ?? null), e.payloadRef ?? null, n, a]), t.exec("COMMIT"), {
        runId: e.runId,
        seq: s,
        offset: i,
        eventType: e.eventType,
        payload: e.payload ?? null,
        payloadRef: e.payloadRef ?? null,
        idempotencyKey: n,
        createdAt: new Date(a)
      };
    } catch (e) {
      try {
        t.exec("ROLLBACK");
      } catch {}
      throw e;
    }
  }
  async listRunEvents(e) {
    const t = await this.getDriver(),
      n = function (e) {
        if (!e) return 0;
        if (!/^\d+$/.test(e)) throw new Error(`Invalid run event offset ${e}`);
        const t = Number.parseInt(e, 10);
        if (!Number.isFinite(t) || t < 0) throw new Error(`Invalid run event offset ${e}`);
        return t;
      }(e.afterOffset),
      r = e.limit ?? 100,
      s = t.all("SELECT *\n        FROM run_events\n        WHERE run_id = ? AND seq > ?\n        ORDER BY seq ASC\n        LIMIT ?", [e.runId, n, r + 1]),
      i = s.length > r,
      a = s.slice(0, r).map(o);
    return {
      events: a,
      ...(i && a.length > 0 ? {
        nextOffset: a[a.length - 1]?.offset
      } : {})
    };
  }
  async deleteRunEvents(e) {
    (await this.getDriver()).run("DELETE FROM run_events WHERE run_id = ?", [e.runId]);
  }
  async dispose() {
    if (this.disposed = !0, !this.driverPromise) return;
    const e = await this.driverPromise.catch(() => {});
    e && e.close(), this.driverPromise = void 0;
  }
  async getDriver() {
    if (this.disposed) throw new Error("SqliteRunEventStore has been disposed");
    if (this.driverPromise) return this.driverPromise;
    const e = (async () => {
      const e = (0, s.dirname)(this.dbPath);
      (0, r.existsSync)(e) || (0, r.mkdirSync)(e, {
        recursive: !0
      });
      const t = await (0, i.d)(this.dbPath);
      try {
        !function (e) {
          e.exec("PRAGMA journal_mode = WAL;\n     PRAGMA synchronous = NORMAL;\n     PRAGMA busy_timeout = 5000;\n     PRAGMA foreign_keys = ON;\n     CREATE TABLE IF NOT EXISTS run_events (\n       run_id TEXT NOT NULL,\n       seq INTEGER NOT NULL,\n       offset TEXT NOT NULL,\n       event_type TEXT NOT NULL,\n       payload_json TEXT,\n       payload_ref TEXT,\n       idempotency_key TEXT,\n       created_at TEXT NOT NULL,\n       PRIMARY KEY (run_id, seq),\n       UNIQUE(run_id, offset)\n     );");
          e.all("PRAGMA table_info(run_events)").some(e => "idempotency_key" === e.name) || e.exec("ALTER TABLE run_events ADD COLUMN idempotency_key TEXT"), e.exec("CREATE UNIQUE INDEX IF NOT EXISTS run_events_idempotency_key_idx\n      ON run_events (run_id, idempotency_key)\n      WHERE idempotency_key IS NOT NULL");
        }(t);
      } catch (e) {
        throw t.close(), e;
      }
      return t;
    })().catch(t => {
      throw this.driverPromise === e && (this.driverPromise = void 0), t;
    });
    return this.driverPromise = e, e;
  }
}
export { a as SqliteRunEventStore };
