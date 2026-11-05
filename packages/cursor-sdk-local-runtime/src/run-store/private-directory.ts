// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/730.js sha256:8fa1b87cee2239edd9d4d7d2c9bb6c0db69d84f688b355f33bee61bab50b557f
// module: "../cursor-sdk-local-runtime/dist/run-store/private-directory.js" range:2502..2653
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
import * as __dep0 from "node:fs";
var o = __dep0;
function r(t) {
  (0, o.existsSync)(t) || (0, o.mkdirSync)(t, {
    recursive: !0,
    mode: 448
  });
  try {
    (0, o.chmodSync)(t, 448);
  } catch {}
}
export { r as V };
