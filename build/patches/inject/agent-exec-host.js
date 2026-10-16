  // [cursor-re local mode] Custom provider support, implemented in
  // extensions/cursor-agent-exec/src/localMode.ts and built next to this file.
  // Under `bun run dev` (CURSOR_LOCAL_MODE_DEV) it is reloaded whenever the
  // build changes, without restarting the extension host.
  const __lcpExt = (() => {
    const file = require("path").join(__dirname, "localMode.js");
    let mod = require(file);
    if (process.env.CURSOR_LOCAL_MODE_DEV) {
      require("fs").watchFile(file, { interval: 300 }, () => {
        try {
          delete require.cache[file];
          mod = require(file);
          console.log("[local mode] reloaded", file);
        } catch (e) {
          console.error("[local mode] reload failed", e);
        }
      });
    }
    return new Proxy({}, { get: (_, name) => mod[name] });
  })();
