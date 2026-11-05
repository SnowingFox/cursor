// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/730.js sha256:8fa1b87cee2239edd9d4d7d2c9bb6c0db69d84f688b355f33bee61bab50b557f
// module: "../cursor-sdk-local-runtime/dist/run-store/agent-checkpoint-store.js" range:190..2429
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
import * as __dep0 from "node:crypto";
import * as __dep1 from "node:fs/promises";
import * as __dep2 from "node:path";
import * as __dep3 from "@anysphere/agent-kv/index";
import * as __dep4 from "@anysphere/context/core";
import * as __dep5 from "./private-directory";
import * as __dep6 from "./sqlite-blob-store";
var o = __dep0,
  r = __dep1,
  a = __dep2,
  i = __dep3,
  n = __dep4,
  c = __dep5;
class l {
  constructor(t) {
    this.options = t, this.stores = new Map();
  }
  async loadLatest(t) {
    const {
        agentStore: e
      } = await this.getOrCreate(t),
      s = e.getMetadata("latestRootBlobId");
    return s && 0 !== s.length ? (await e.resetFromDb((0, n.q6)()), e.getConversationStateStructure()) : null;
  }
  async saveCheckpoint(t, e) {
    const {
      agentStore: s
    } = await this.getOrCreate(t);
    return await s.handleCheckpoint((0, n.q6)(), e), {
      blobId: (0, i.nj)(s.getMetadata("latestRootBlobId")),
      storeKind: "local-sqlite"
    };
  }
  async getBlobStore(t) {
    return (await this.getOrCreate(t)).sqliteStore;
  }
  async listCheckpointBlobIds(t) {
    const {
      sqliteStore: e
    } = await this.getOrCreate(t);
    return e.listBlobIds();
  }
  async getFullConversation(t) {
    const {
      agentStore: e
    } = await this.getOrCreate(t);
    return await e.resetFromDb((0, n.q6)()), e.getFullConversation((0, n.q6)());
  }
  async dispose() {
    const t = [...this.stores.values()];
    this.stores.clear();
    const e = await Promise.allSettled(t);
    await Promise.all(e.filter(t => "fulfilled" === t.status).map(t => t.value.sqliteStore.dispose()));
  }
  async deleteAgent(t) {
    const e = this.stores.get(t);
    if (e) {
      this.stores.delete(t);
      const s = await e.catch(() => {});
      s && (await s.sqliteStore.dispose().catch(() => {}));
    }
    const s = (0, a.join)(this.options.stateRoot, "agents", d(t));
    await (0, r.rm)(s, {
      recursive: !0,
      force: !0
    });
  }
  async getOrCreate(t) {
    const e = this.stores.get(t);
    if (e) return e;
    let s;
    return s = this.createEntry(t).catch(e => {
      throw this.stores.get(t) === s && this.stores.delete(t), e;
    }), this.stores.set(t, s), s;
  }
  async createEntry(t) {
    const e = (0, a.join)(this.options.stateRoot, "agents"),
      o = (0, a.join)(e, d(t));
    (0, c.V)(this.options.stateRoot), (0, c.V)(e), (0, c.V)(o);
    const {
        SQLiteBlobStoreWithMetadata: r
      } = await import("./sqlite-blob-store"),
      l = await r.initAndLoad((0, a.join)(o, "store.db"));
    try {
      l.set("agentId", t);
      const e = new i.pH(l, l);
      return await e.resetFromDb((0, n.q6)()), {
        sqliteStore: l,
        agentStore: e
      };
    } catch (t) {
      throw await l.dispose().catch(() => {}), t;
    }
  }
}
function d(t) {
  return `agent-${(0, o.createHash)("sha256").update(t).digest("hex")}`;
}
export { l as LocalAgentCheckpointStore };
