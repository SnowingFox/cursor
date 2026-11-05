// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/914.js sha256:897966a30a3ef0cd66decf9d89961f7d471a55a1332fb17dfffd31a1abfedc7e
// module: "../cursor-sdk-local-runtime/dist/run-store/sqlite/bun-sqlite-driver.js" range:192..793
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
// warnings: async-module-wrapper:unwrapped+dropped-catch
import * as __dep0 from "bun:sqlite";
var n = __dep0,
  a = [n],
  i = a.then ? (await a)() : a;
n = i[0];
class c {
  constructor(e) {
    this.db = e, this.statements = new Map();
  }
  exec(e) {
    this.db.run(e);
  }
  run(e, t = []) {
    const {
      changes: s
    } = this.prepare(e).run(...t);
    return {
      changes: s
    };
  }
  get(e, t = []) {
    return this.prepare(e).get(...t) ?? void 0;
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
  return new c(new n.Database(e, {
    create: !0
  }));
}
export { o as openBunSqliteDriver };
