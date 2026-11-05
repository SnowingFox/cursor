// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: UrlConfiguration.js range:632682..633433
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.189Z
// wrapper: eJu deps:6 [E, Ydn, lgr, getUrl, getChecksum, sort]
// declarations: (none in segment) (segment truncated)
// anchors: (none)
// group: third-party-statsig
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
eJu = L({ "UrlConfiguration.js"() {
  "use strict";
  E(), Ydn(), lgr(), JQu = { [Dke._initialize]: "i", [Dke._rgstr]: "e", [Dke._download_config_specs]: "d" }, nEo = class {
    constructor(t, e, n, i) {
      this.customUrl = null, this.fallbackUrls = null, this.endpoint = t, this.endpointDnsKey = JQu[t], e && (this.customUrl = e), !e && n && (this.customUrl = n.endsWith("/") ? `${n}${t}` : `${n}/${t}`), i && (this.fallbackUrls = i);
      const r = WQu[t];
      this.defaultUrl = `${r}/${t}`;
    }
    getUrl() {
      return this.customUrl ?? this.defaultUrl;
    }
    getChecksum() {
      const t = (this.fallbackUrls ?? []).sort().join(",");
      return s_t(this.customUrl + t);
    }
  };
} }), fgr, vgr, iEo, rEo, _gr, PZn, tJu, MZn,
