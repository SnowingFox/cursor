// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 4215 range:30337..30809
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4215: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(2839), r2 = i2(2195), a2 = function(t3) {
      return n2.slice(0, t3.length) === t3;
    };
    t2.exports = a2("Bun/") ? "BUN" : a2("Cloudflare-Workers") ? "CLOUDFLARE" : a2("Deno/") ? "DENO" : a2("Node.js/") ? "NODE" : s2.Bun && "string" == typeof Bun.version ? "BUN" : s2.Deno && "object" == typeof Deno.version ? "DENO" : "process" === r2(s2.process) ? "NODE" : s2.window && s2.document ? "BROWSER" : "REST";
  }