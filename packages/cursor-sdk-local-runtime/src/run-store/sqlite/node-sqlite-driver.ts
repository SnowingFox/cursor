// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/343.js sha256:0a6ac0e8fc20e5070a9076b34d58d9578eb93f8f991bcd30e34c542936946968
// module: "../cursor-sdk-local-runtime/dist/run-store/sqlite/node-sqlite-driver.js" range:193..795
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
// warnings: async-module-wrapper:unwrapped+dropped-catch
import * as __dep0 from "node:sqlite";
var n = __dep0,
  a = [n],
  c = a.then ? (await a)() : a;
n = c[0];
class i {
  constructor(e) {
    this.db = e, this.statements = new Map();
  }
  exec(e) {
    this.db.exec(e);
  }
  run(e, t = []) {
    const s = this.prepare(e).run(...t);
    return {
      changes: Number(s.changes)
    };
  }
  get(e, t = []) {
    return this.prepare(e).get(...t);
  }
  all(e, t = []) {
    return this.prepare(e).all(...t);
  }
  close() {
    this.statements.clear(), this.db.close();
  }
  prepare(e) {
    let t = this.statements.get(e);
    return t || (t = this.db.prepare(e), this.statements.set(e, t)), t;
  }
}
function o(e) {
  return new i(new n.DatabaseSync(e));
}
export { o as openNodeSqliteDriver };
