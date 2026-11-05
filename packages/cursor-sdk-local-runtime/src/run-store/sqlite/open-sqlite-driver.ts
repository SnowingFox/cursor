// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/18.js sha256:86cee3320431e02f4c1bc3d7e72db7daffcef204b79bf1b91e78216d8f2f654e
// module: "../cursor-sdk-local-runtime/dist/run-store/sqlite/open-sqlite-driver.js" range:6798..7875
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
import * as __dep0 from "node:path";
import * as __dep1 from "./bun-sqlite-driver";
import * as __dep2 from "./node-sqlite-driver";
class i extends Error {
  constructor(e, t) {
    super(e, t), this.name = "NoSqliteDriverError";
  }
}
var r = __dep0;
async function n(e) {
  const t = function (e, t = process.platform) {
    if ("win32" !== t) return e;
    const s = r.win32.resolve(e);
    return e.length + 8 > 259 || s.length + 8 > 259 ? r.win32.toNamespacedPath(s) : e;
  }(e);
  if ("Bun" in globalThis) return (await import("./bun-sqlite-driver")).openBunSqliteDriver(t);
  let n;
  try {
    n = await import("./node-sqlite-driver");
  } catch (e) {
    if (function (e) {
      return "ERR_UNKNOWN_BUILTIN_MODULE" === ("object" == typeof e && null !== e && "code" in e && "string" == typeof e.code ? e.code : void 0) || (e instanceof Error ? e.message.toLowerCase() : String(e).toLowerCase()).includes("node:sqlite");
    }(e)) throw new i("node:sqlite is not available in this runtime. The default local agent store requires Node >= 22.13 (or another runtime that implements node:sqlite). Configure a JsonlLocalAgentStore instead.", {
      cause: e
    });
    throw e;
  }
  return n.openNodeSqliteDriver(t);
}
export { n as d };
