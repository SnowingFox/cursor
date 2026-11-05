// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/856.js sha256:4a6c73b759eb6a699b18b7e494fa9c2e6190ad828d01e708a56886d2a67055c2
// module: "../cursor-sdk-local-runtime/dist/run-store/sqlite-agent-run-store.js" range:664..15058
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
import * as __dep0 from "node:path";
import * as __dep1 from "./id";
import * as __dep2 from "./private-directory";
import * as __dep3 from "./sqlite/open-sqlite-driver";
import * as __dep4 from "./status";
var r = __dep0,
  s = __dep1,
  a = __dep2,
  i = __dep3,
  o = __dep4;
function u(t) {
  if (0 === t.length) return [];
  const e = [];
  for (let n = 0; n < t.length; n += 100) e.push(t.slice(n, n + 100));
  return e;
}
function d() {
  return new Date().toISOString();
}
function c(t) {
  return t ? new Date(t) : null;
}
function l(t, e) {
  return t ? JSON.parse(t) : e;
}
function _(t) {
  return JSON.stringify(t);
}
function E(t) {
  return t ? _(t) : null;
}
function g(t) {
  const e = t?.params;
  return e && e.length > 0 ? _(e) : null;
}
function h(t) {
  return {
    agentId: t.agent_id,
    workspaceRef: t.workspace_ref,
    status: t.status,
    activeRunId: t.active_run_id,
    latestCheckpointRef: l(t.latest_checkpoint_ref_json, null),
    name: t.name,
    createdAt: new Date(t.created_at),
    updatedAt: new Date(t.updated_at),
    metadata: l(t.metadata_json, {})
  };
}
function T(t) {
  return {
    runId: t.run_id,
    requestId: t.request_id,
    agentId: t.agent_id,
    turnNumber: t.turn_number,
    status: t.status,
    model: (e = t.model, n = t.model_params_json, null === e ? null : null === n ? {
      id: e
    } : {
      id: e,
      params: l(n, [])
    }),
    startCheckpointRef: l(t.start_checkpoint_ref_json, null),
    latestCheckpointRef: l(t.latest_checkpoint_ref_json, null),
    errorCode: t.error_code,
    usageRef: t.usage_ref,
    usage: l(t.usage_json ?? null, null),
    result: t.result,
    createdAt: new Date(t.created_at),
    updatedAt: new Date(t.updated_at),
    startedAt: c(t.started_at),
    finishedAt: c(t.finished_at),
    cancelledAt: c(t.cancelled_at),
    expiredAt: c(t.expired_at)
  };
  var e, n;
}
function f(t) {
  const e = t?.limit ?? 50,
    n = t?.cursor ? Number.parseInt(t.cursor, 10) : 0;
  return {
    limit: e,
    offset: Number.isFinite(n) && n > 0 ? n : 0
  };
}
class m {
  static async open(t) {
    const e = new m(t);
    return await e.getDriver(), e;
  }
  constructor(t) {
    this.options = t, this.disposed = !1;
  }
  get stateRoot() {
    return this.options.stateRoot;
  }
  get dbPath() {
    return (0, r.join)(this.options.stateRoot, "index.db");
  }
  async createAgent(t) {
    const e = await this.getDriver();
    return R(e, () => {
      const n = t.agentId ?? (0, s.WQ)(),
        r = (0, s.nq)(),
        a = d();
      e.run("INSERT INTO agents (\n          agent_id, workspace_ref, status, active_run_id,\n          latest_checkpoint_ref_json, name,\n          metadata_json, created_at, updated_at\n        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [n, t.workspaceRef, "IDLE", r, null, t.name ?? null, _(t.metadata ?? {}), a, a]), e.run("INSERT INTO runs (\n          run_id, request_id, agent_id, turn_number, status, model, model_params_json,\n          start_checkpoint_ref_json, latest_checkpoint_ref_json,\n          error_code, usage_ref, usage_json, result,\n          created_at, updated_at, started_at, finished_at,\n          cancelled_at, expired_at\n        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [r, t.requestId ?? null, n, 1, "QUEUED", t.model?.id ?? null, g(t.model), null, null, null, null, null, null, a, a, null, null, null, null]);
      const i = this.getAgentFromDb(e, n),
        o = this.getRunFromDb(e, n, r);
      if (!i || !o) throw new Error(`Failed to create agent ${n}`);
      return {
        agent: i,
        run: o
      };
    });
  }
  async createFollowUpRun(t, e) {
    const n = await this.getDriver();
    return R(n, () => {
      const r = this.getAgentFromDb(n, t);
      if (!r) throw new Error(`Agent ${t} not found`);
      if ("ARCHIVED" === r.status) throw new Error(`Cannot create follow-up run on archived agent ${t}. Unarchive it first.`);
      if (r.activeRunId) {
        const e = this.getRunFromDb(n, t, r.activeRunId);
        if (e && !(0, o.Qb)(e.status)) throw new Error(`Agent ${t} already has active run`);
      }
      const a = n.get("SELECT COUNT(*) as count FROM runs WHERE agent_id = ?", [t]),
        i = (0, s.nq)(),
        u = d();
      n.run("INSERT INTO runs (\n          run_id, request_id, agent_id, turn_number, status, model, model_params_json,\n          start_checkpoint_ref_json, latest_checkpoint_ref_json,\n          error_code, usage_ref, usage_json, result,\n          created_at, updated_at, started_at, finished_at,\n          cancelled_at, expired_at\n        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [i, e.requestId ?? null, t, (a?.count ?? 0) + 1, "QUEUED", e.model?.id ?? null, g(e.model), E(r.latestCheckpointRef), r.latestCheckpointRef ? E(r.latestCheckpointRef) : null, null, null, null, null, u, u, null, null, null, null]), n.run("UPDATE agents SET active_run_id = ?, status = ?, metadata_json = ?, updated_at = ? WHERE agent_id = ?", [i, "IDLE", _({
        ...r.metadata,
        ...e.metadata
      }), u, t]);
      const c = this.getRunFromDb(n, t, i);
      if (!c) throw new Error(`Failed to create run ${i}`);
      return c;
    });
  }
  async listAgents(t) {
    const e = await this.getDriver(),
      {
        limit: n,
        offset: r
      } = f(t),
      s = e.all("SELECT * FROM agents ORDER BY updated_at DESC LIMIT ? OFFSET ?", [n + 1, r]),
      a = s.slice(0, n),
      i = s.length > n ? String(r + n) : void 0;
    return {
      items: a.map(h),
      ...(i ? {
        nextCursor: i
      } : {})
    };
  }
  async getAgent(t) {
    const e = await this.getDriver();
    return this.getAgentFromDb(e, t);
  }
  async listRuns(t, e) {
    const n = await this.getDriver(),
      {
        limit: r,
        offset: s
      } = f(e),
      a = n.all("SELECT * FROM runs WHERE agent_id = ? ORDER BY turn_number ASC LIMIT ? OFFSET ?", [t, r + 1, s]),
      i = a.slice(0, r),
      o = a.length > r ? String(s + r) : void 0;
    return {
      items: i.map(T),
      ...(o ? {
        nextCursor: o
      } : {})
    };
  }
  async getRun(t, e) {
    const n = await this.getDriver();
    return this.getRunFromDb(n, t, e);
  }
  async markRunStarting(t, e, n) {
    const r = await this.getDriver();
    R(r, () => {
      const s = this.requireRunFromDb(r, t, e);
      if ((0, o.Qb)(s.status)) throw new Error(`Cannot start terminal run ${e}`);
      const a = d();
      r.run("UPDATE runs SET request_id = COALESCE(?, request_id), status = ?, started_at = COALESCE(started_at, ?), updated_at = ? WHERE run_id = ? AND agent_id = ?", [n?.requestId ?? null, "RUNNING", a, a, e, t]), r.run("UPDATE agents\n          SET active_run_id = ?,\n              status = CASE\n                WHEN status = 'ARCHIVED' THEN status\n                ELSE 'RUNNING'\n              END,\n              updated_at = ?\n          WHERE agent_id = ?", [e, a, t]);
    });
  }
  async patchCheckpoint(t, e, n) {
    const r = await this.getDriver();
    R(r, () => {
      this.requireRunFromDb(r, t, e);
      const s = d();
      r.run("UPDATE runs\n          SET latest_checkpoint_ref_json = ?,\n              updated_at = ?\n          WHERE run_id = ? AND agent_id = ?", [E(n), s, e, t]), r.run("UPDATE agents\n          SET latest_checkpoint_ref_json = ?,\n              updated_at = ?\n          WHERE agent_id = ?", [E(n), s, t]);
    });
  }
  async markRunTerminal(t, e, n) {
    const r = await this.getDriver();
    R(r, () => {
      const s = this.requireRunFromDb(r, t, e);
      if ((0, o.Qb)(s.status)) {
        if (void 0 !== n.usage && (null === s.usage || void 0 === s.usage)) {
          const s = null === n.usage ? null : JSON.stringify(n.usage);
          r.run("UPDATE runs SET usage_json = ? WHERE run_id = ? AND agent_id = ?", [s, e, t]);
        }
        return;
      }
      const a = d(),
        i = void 0 !== n.usage ? n.usage : s.usage ?? null,
        u = null == i ? null : JSON.stringify(i);
      r.run("UPDATE runs\n          SET status = ?,\n              error_code = COALESCE(?, error_code),\n              usage_ref = COALESCE(?, usage_ref),\n              usage_json = ?,\n              result = COALESCE(?, result),\n              updated_at = ?,\n              finished_at = CASE WHEN ? = 'FINISHED' THEN ? ELSE finished_at END,\n              cancelled_at = CASE WHEN ? = 'CANCELLED' THEN ? ELSE cancelled_at END,\n              expired_at = CASE WHEN ? = 'EXPIRED' THEN ? ELSE expired_at END\n          WHERE run_id = ? AND agent_id = ?", [n.status, n.errorCode ?? null, n.usageRef ?? null, u, n.result ?? null, a, n.status, a, n.status, a, n.status, a, e, t]), r.run("UPDATE agents\n          SET active_run_id = NULL,\n              status = CASE\n                WHEN status = 'ARCHIVED' THEN status\n                WHEN ? = 'ERROR' THEN 'ERROR'\n                ELSE 'IDLE'\n              END,\n              updated_at = ?\n          WHERE agent_id = ?", [n.status, a, t]);
    });
  }
  async cancelRun(t, e) {
    await this.markRunTerminal(t, e, {
      status: "CANCELLED"
    });
  }
  async archiveAgent(t) {
    const e = await this.getDriver();
    R(e, () => {
      if (!this.getAgentFromDb(e, t)) throw new Error(`Agent ${t} not found`);
      const n = d();
      e.run("UPDATE agents SET status = 'ARCHIVED', updated_at = ? WHERE agent_id = ?", [n, t]);
    });
  }
  async unarchiveAgent(t) {
    const e = await this.getDriver();
    R(e, () => {
      if (!this.getAgentFromDb(e, t)) throw new Error(`Agent ${t} not found`);
      const n = d();
      e.run("UPDATE agents SET status = 'IDLE', updated_at = ? WHERE agent_id = ?", [n, t]);
    });
  }
  async deleteAgent(t) {
    const e = await this.getDriver();
    R(e, () => {
      const n = this.getAgentFromDb(e, t);
      if (!n) throw new Error(`Agent ${t} not found`);
      if (n.activeRunId) {
        const r = this.getRunFromDb(e, t, n.activeRunId);
        if (r && !(0, o.Qb)(r.status)) throw new Error(`Cannot delete agent ${t}: active run ${n.activeRunId} is not terminal. Call run.cancel() first.`);
      }
      e.run("DELETE FROM runs WHERE agent_id = ?", [t]), e.run("DELETE FROM agents WHERE agent_id = ?", [t]);
    });
  }
  async upsertAgentRecord(t) {
    const e = await this.getDriver();
    R(e, () => {
      const n = this.getAgentFromDb(e, t.agentId),
        r = t.createdAt.toISOString(),
        s = t.updatedAt.toISOString();
      n ? e.run("UPDATE agents SET\n            workspace_ref = ?,\n            status = ?,\n            active_run_id = ?,\n            latest_checkpoint_ref_json = ?,\n            name = ?,\n            metadata_json = ?,\n            updated_at = ?\n          WHERE agent_id = ?", [t.workspaceRef, t.status, t.activeRunId, E(t.latestCheckpointRef), t.name, _(t.metadata), s, t.agentId]) : e.run("INSERT INTO agents (\n          agent_id, workspace_ref, status, active_run_id,\n          latest_checkpoint_ref_json, name,\n          metadata_json, created_at, updated_at\n        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [t.agentId, t.workspaceRef, t.status, t.activeRunId, E(t.latestCheckpointRef), t.name, _(t.metadata), r, s]);
    });
  }
  async upsertRunRecord(t) {
    const e = await this.getDriver();
    R(e, () => {
      const n = this.getRunFromDb(e, t.agentId, t.runId),
        r = t.createdAt.toISOString(),
        s = t.updatedAt.toISOString(),
        a = t.startedAt?.toISOString() ?? null,
        i = t.finishedAt?.toISOString() ?? null,
        o = t.cancelledAt?.toISOString() ?? null,
        u = t.expiredAt?.toISOString() ?? null,
        d = null === t.usage || void 0 === t.usage ? null : JSON.stringify(t.usage),
        c = [t.requestId ?? null, t.turnNumber, t.status, t.model?.id ?? null, g(t.model), E(t.startCheckpointRef), E(t.latestCheckpointRef), t.errorCode, t.usageRef, d, t.result, s, a, i, o, u];
      n ? e.run("UPDATE runs SET\n            request_id = ?,\n            turn_number = ?,\n            status = ?,\n            model = ?,\n            model_params_json = ?,\n            start_checkpoint_ref_json = ?,\n            latest_checkpoint_ref_json = ?,\n            error_code = ?,\n            usage_ref = ?,\n            usage_json = ?,\n            result = ?,\n            updated_at = ?,\n            started_at = ?,\n            finished_at = ?,\n            cancelled_at = ?,\n            expired_at = ?\n          WHERE run_id = ? AND agent_id = ?", [...c, t.runId, t.agentId]) : e.run("INSERT INTO runs (\n          run_id, request_id, agent_id, turn_number, status, model, model_params_json,\n          start_checkpoint_ref_json, latest_checkpoint_ref_json,\n          error_code, usage_ref, usage_json, result,\n          created_at, updated_at, started_at, finished_at,\n          cancelled_at, expired_at\n        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [t.runId, ...c.slice(0, 1), t.agentId, ...c.slice(1, 11), r, ...c.slice(11)]);
    });
  }
  async listAllAgentRecords() {
    return (await this.getDriver()).all("SELECT * FROM agents", []).map(h);
  }
  async listAllRunRecords(t) {
    const e = await this.getDriver();
    if (t && t.length > 0) {
      const n = [];
      for (const r of u(t)) {
        const t = r.map(() => "?").join(", "),
          s = e.all(`SELECT * FROM runs WHERE agent_id IN (${t})`, [...r]);
        n.push(...s.map(T));
      }
      return n;
    }
    return e.all("SELECT * FROM runs", []).map(T);
  }
  async deleteRunRecordsForAgents(t) {
    if (0 === t.length) return;
    const e = await this.getDriver();
    R(e, () => {
      for (const n of u(t)) {
        const t = n.map(() => "?").join(", ");
        e.run(`DELETE FROM runs WHERE agent_id IN (${t})`, [...n]);
      }
    });
  }
  async deleteRunRecordsByKeys(t) {
    if (0 === t.length) return;
    const e = await this.getDriver();
    R(e, () => {
      for (const {
        agentId: n,
        runId: r
      } of t) e.run("DELETE FROM runs WHERE agent_id = ? AND run_id = ?", [n, r]);
    });
  }
  async dispose() {
    if (this.disposed = !0, !this.driverPromise) return;
    const t = await this.driverPromise.catch(() => {});
    t && t.close(), this.driverPromise = void 0;
  }
  async getDriver() {
    if (this.disposed) throw new Error("SqliteAgentRunStore has been disposed");
    if (this.driverPromise) return this.driverPromise;
    const t = (async () => {
      const t = (0, r.dirname)(this.dbPath);
      (0, a.V)(t);
      const e = await (0, i.d)(this.dbPath);
      try {
        !function (t) {
          t.exec("PRAGMA journal_mode = WAL;\n     PRAGMA synchronous = NORMAL;\n     PRAGMA busy_timeout = 5000;\n     PRAGMA foreign_keys = ON;\n     CREATE TABLE IF NOT EXISTS agents (\n       agent_id TEXT PRIMARY KEY,\n       workspace_ref TEXT NOT NULL,\n       status TEXT NOT NULL,\n       active_run_id TEXT,\n       latest_checkpoint_ref_json TEXT,\n       name TEXT,\n       metadata_json TEXT NOT NULL DEFAULT '{}',\n       created_at TEXT NOT NULL,\n       updated_at TEXT NOT NULL\n     );\n     CREATE TABLE IF NOT EXISTS runs (\n       run_id TEXT PRIMARY KEY,\n       request_id TEXT,\n       agent_id TEXT NOT NULL REFERENCES agents(agent_id),\n       turn_number INTEGER NOT NULL,\n       status TEXT NOT NULL,\n       model TEXT,\n       model_params_json TEXT,\n       start_checkpoint_ref_json TEXT,\n       latest_checkpoint_ref_json TEXT,\n       error_code TEXT,\n       usage_ref TEXT,\n       usage_json TEXT,\n       result TEXT,\n       created_at TEXT NOT NULL,\n       updated_at TEXT NOT NULL,\n       started_at TEXT,\n       finished_at TEXT,\n       cancelled_at TEXT,\n       expired_at TEXT,\n       UNIQUE(agent_id, turn_number)\n     );");
          const e = t.all("PRAGMA table_info(runs)");
          e.some(t => "request_id" === t.name) || t.exec("ALTER TABLE runs ADD COLUMN request_id TEXT"), e.some(t => "model_params_json" === t.name) || t.exec("ALTER TABLE runs ADD COLUMN model_params_json TEXT"), e.some(t => "result" === t.name) || t.exec("ALTER TABLE runs ADD COLUMN result TEXT"), e.some(t => "usage_json" === t.name) || t.exec("ALTER TABLE runs ADD COLUMN usage_json TEXT");
        }(e);
      } catch (t) {
        throw e.close(), t;
      }
      return e;
    })().catch(e => {
      throw this.driverPromise === t && (this.driverPromise = void 0), e;
    });
    return this.driverPromise = t, t;
  }
  getAgentFromDb(t, e) {
    const n = t.get("SELECT * FROM agents WHERE agent_id = ?", [e]);
    return n ? h(n) : null;
  }
  getRunFromDb(t, e, n) {
    const r = t.get("SELECT * FROM runs WHERE run_id = ? AND agent_id = ?", [n, e]);
    return r ? T(r) : null;
  }
  requireRunFromDb(t, e, n) {
    const r = this.getRunFromDb(t, e, n);
    if (!r) throw new Error(`Run ${n} not found for agent ${e}`);
    return r;
  }
}
function R(t, e) {
  t.exec("BEGIN IMMEDIATE");
  try {
    const n = e();
    return t.exec("COMMIT"), n;
  } catch (e) {
    try {
      t.exec("ROLLBACK");
    } catch {}
    throw e;
  }
}
export { m as SqliteAgentRunStore };
