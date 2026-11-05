// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 1078 range:38239..38711
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1078: (t2, r2, e2) => {
    var n2 = e2(9117), o2 = e2(8060), i2 = e2(8689), a2 = function(t3) {
      return o2.slice(0, t3.length) === t3;
    };
    t2.exports = a2("Bun/") ? "BUN" : a2("Cloudflare-Workers") ? "CLOUDFLARE" : a2("Deno/") ? "DENO" : a2("Node.js/") ? "NODE" : n2.Bun && "string" == typeof Bun.version ? "BUN" : n2.Deno && "object" == typeof Deno.version ? "DENO" : "process" === i2(n2.process) ? "NODE" : n2.window && n2.document ? "BROWSER" : "REST";
  }