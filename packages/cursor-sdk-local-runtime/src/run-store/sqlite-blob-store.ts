// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/18.js sha256:86cee3320431e02f4c1bc3d7e72db7daffcef204b79bf1b91e78216d8f2f654e
// module: "../cursor-sdk-local-runtime/dist/run-store/sqlite-blob-store.js" range:183..6717
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
import * as __dep0 from "node:fs";
import * as __dep1 from "node:path";
import * as __dep2 from "@anysphere/agent-kv/index";
import * as __dep3 from "@anysphere/utils/disposable";
import * as __dep4 from "../utils/logger";
import * as __dep5 from "./sqlite/open-sqlite-driver";
var i = __dep0,
  r = __dep1,
  n = __dep2,
  o = __dep3,
  a = __dep4,
  d = __dep5;
const l = new n.aY(),
  c = "Local agent storage could not open its database, so this run is continuing in memory. Its checkpoint may be unavailable after the process exits.",
  h = "unable to open database file";
function u(e) {
  const t = new Set();
  let s = e;
  for (; null != s && !t.has(s);) {
    if (t.add(s), "object" != typeof s) return "string" == typeof s && s.toLowerCase().includes(h);
    const e = s;
    if ("SQLITE_CANTOPEN" === e.code) return !0;
    if ("ERR_SQLITE_ERROR" === e.code && "number" == typeof e.errcode && 14 == (255 & e.errcode)) return !0;
    if ("string" == typeof e.message && e.message.toLowerCase().includes(h)) return !0;
    s = e.cause;
  }
  return !1;
}
function m(e, t) {
  const s = e;
  return "function" != typeof s.onLocalStoreDegraded ? () => {} : s.onLocalStoreDegraded(t);
}
class v extends o.j {
  static async initAndLoad(e) {
    const t = new v(e);
    return await t.getDriver(), t;
  }
  constructor(e, t) {
    super(), this.dbPath = e, this.openDisabled = !1, this.memoryBlobs = new Map(), this.deletedBlobIds = new Set(), this.degradationListeners = new Set(), this.listeners = {
      agentId: new Set(),
      latestRootBlobId: new Set(),
      name: new Set(),
      createdAt: new Set(),
      mode: new Set(),
      isRunEverything: new Set(),
      approvalMode: new Set(),
      lastUsedModel: new Set(),
      lastDebugServerPort: new Set(),
      currentPlanUri: new Set(),
      subagentInfo: new Set()
    }, this.persistScheduled = !1, this.isDisposing = !1, this.openDriver = t?.openDriver ?? d.d;
    const s = (0, r.basename)((0, r.dirname)(this.dbPath));
    this.metadata = (0, n.sh)(s);
  }
  onLocalStoreDegraded(e) {
    return this.degradationListeners.add(e), void 0 !== this.degradationWarning && this.notifyDegradationListener(e, this.degradationWarning), () => {
      this.degradationListeners.delete(e);
    };
  }
  async getDriver() {
    if (!this.openDisabled) {
      if (this.driver) return this.driver;
      if (!this.driverPromise) {
        const e = (async () => {
          const e = (0, r.dirname)(this.dbPath);
          (0, i.existsSync)(e) || (0, i.mkdirSync)(e, {
            recursive: !0
          });
          const t = await this.openDriver(this.dbPath);
          try {
            this.initializeDriver(t);
          } catch (e) {
            throw t.close(), e;
          }
          return this.driver = t, t;
        })().catch(t => {
          throw this.driverPromise === e && (this.driverPromise = void 0), t;
        });
        this.driverPromise = e;
      }
      try {
        return await this.driverPromise;
      } catch (e) {
        if (u(e)) return this.openDisabled = !0, void this.degrade(e);
        throw e;
      }
    }
  }
  degrade(e) {
    if (void 0 === this.degradationWarning) {
      this.degradationWarning = c, a.Jz.warn(c, e instanceof Error ? e.message : String(e));
      for (const e of this.degradationListeners) this.notifyDegradationListener(e, this.degradationWarning);
    }
  }
  notifyDegradationListener(e, t) {
    try {
      e(t);
    } catch {}
  }
  rememberBlob(e, t) {
    this.memoryBlobs.set(e, Uint8Array.from(t));
  }
  readRememberedBlob(e) {
    const t = this.memoryBlobs.get(e);
    return void 0 === t ? void 0 : Uint8Array.from(t);
  }
  async withDriver(e, t) {
    try {
      const s = await this.getDriver();
      return s ? t(s) : e();
    } catch (t) {
      if (!u(t)) throw t;
      return this.degrade(t), e();
    }
  }
  initializeDriver(e) {
    e.exec("PRAGMA journal_mode = WAL;\n       PRAGMA synchronous = NORMAL;\n       PRAGMA busy_timeout = 5000;\n       PRAGMA user_version = 1;\n       CREATE TABLE IF NOT EXISTS blobs (id TEXT PRIMARY KEY, data BLOB);\n       CREATE TABLE IF NOT EXISTS meta (key TEXT PRIMARY KEY, value TEXT);");
    const t = e.get("SELECT value FROM meta WHERE key = ?", ["0"]);
    if (t?.value) {
      const e = (0, n.aD)(t.value);
      return void (this.metadata = l.deserialize(e));
    }
    const s = l.serialize(this.metadata);
    e.run("INSERT OR REPLACE INTO meta (key, value) VALUES (?, ?)", ["0", (0, n.nj)(s)]);
  }
  async getBlob(e, t) {
    if (this.isDisposing) return;
    const s = (0, n.nj)(t);
    if (this.deletedBlobIds.has(s)) return;
    const i = this.readRememberedBlob(s);
    return void 0 !== i ? i : this.withDriver(() => {}, e => {
      const t = e.get("SELECT data FROM blobs WHERE id = ?", [s]);
      return null == t?.data ? void 0 : new Uint8Array(t.data);
    });
  }
  async listBlobIds() {
    if (this.isDisposing) return [];
    const e = new Set(this.memoryBlobs.keys()),
      t = await this.withDriver(() => [], e => e.all("SELECT id FROM blobs ORDER BY id ASC").map(e => e.id));
    for (const s of t) e.add(s);
    return [...e].filter(e => !this.deletedBlobIds.has(e)).sort();
  }
  async deleteBlob(e) {
    this.isDisposing || (this.memoryBlobs.delete(e), await this.withDriver(() => {
      this.deletedBlobIds.add(e);
    }, t => {
      t.run("DELETE FROM blobs WHERE id = ?", [e]), this.deletedBlobIds.delete(e);
    }));
  }
  async setBlob(e, t, s) {
    if (this.isDisposing) return;
    const i = (0, n.nj)(t);
    await this.withDriver(() => {
      this.deletedBlobIds.delete(i), this.rememberBlob(i, s);
    }, e => {
      e.run("INSERT OR REPLACE INTO blobs (id, data) VALUES (?, ?)", [i, Buffer.from(s)]), this.memoryBlobs.delete(i), this.deletedBlobIds.delete(i);
    });
  }
  async setBlobLocallyOnly(e, t, s) {
    return Promise.resolve();
  }
  async flush(e) {
    return Promise.resolve();
  }
  get(e) {
    return this.metadata[e];
  }
  valuesEqual(e, t, s) {
    if ("latestRootBlobId" === e) {
      if (!(t instanceof Uint8Array && s instanceof Uint8Array)) return t === s;
      const e = t,
        i = s;
      if (e === i) return !0;
      if (!e || !i) return !1;
      if (e.length !== i.length) return !1;
      for (let t = 0; t < e.length; t++) if (e[t] !== i[t]) return !1;
      return !0;
    }
    return t === s;
  }
  schedulePersist() {
    !this.isDisposing && this.driver && (this.persistScheduled || (this.persistScheduled = !0, queueMicrotask(() => {
      this.persistScheduled = !1, !this.isDisposing && this.driver && this.persistMetadata();
    })));
  }
  set(e, t) {
    const s = this.metadata[e];
    if (this.valuesEqual(e, s, t)) return;
    this.metadata = {
      ...this.metadata,
      [e]: t
    }, this.driver && this.schedulePersist();
    const i = this.listeners[e];
    i && i.size > 0 && queueMicrotask(() => {
      i.forEach(e => {
        e();
      });
    });
  }
  persistMetadata() {
    const e = this.driver;
    if (!e) return;
    const t = l.serialize(this.metadata);
    try {
      e.run("INSERT OR REPLACE INTO meta (key, value) VALUES (?, ?)", ["0", (0, n.nj)(t)]);
    } catch (e) {
      if (!u(e)) throw e;
      this.degrade(e);
    }
  }
  subscribe(e, t) {
    const s = this.listeners[e];
    return s ? (s.add(t), () => s.delete(t)) : () => {};
  }
  async dispose() {
    return this.disposePromise ? this.disposePromise : this.driverPromise ? (this.disposePromise = this.cleanup().then(() => {
      this.driverPromise = void 0, this.driver = void 0;
    }), this.disposePromise) : void 0;
  }
  async cleanup() {
    if (!this.driverPromise) return;
    const e = await this.driverPromise.catch(() => {});
    if (!e) return this.driverPromise = void 0, void (this.driver = void 0);
    this.persistScheduled = !1, this.persistMetadata(), this.isDisposing = !0;
    const t = e.get("SELECT value FROM meta WHERE key = ?", ["0"]);
    let s = 0;
    if (t?.value) {
      const e = (0, n.aD)(t.value);
      s = l.deserialize(e).latestRootBlobId.length;
    }
    const o = e.get("SELECT COUNT(*) AS count FROM blobs"),
      a = o?.count ?? 0;
    if (e.close(), 0 === s && 0 === a) {
      this.driverPromise = void 0, this.driver = void 0;
      const e = (0, r.dirname)(this.dbPath);
      try {
        (0, i.rmSync)(e, {
          recursive: !0,
          force: !0
        });
      } catch {}
    }
  }
}
export { m as B_, v as SQLiteBlobStoreWithMetadata, u as hI, c as rZ };
