// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8718 range:5321398..5329627
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8718: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.AggregatingMetricsProvider = e2.SHARED_METRICS_BEARER_TOKEN = void 0, e2.createMetricsBearerTokenInterceptor = c, e2.createMetricsAddHeadersInterceptor = l;
    const n2 = r2(2670), s2 = r2(1840), i2 = r2(8394), o2 = r2(4384), a = r2(6982), u = "x-cursor-team-id";
    function c(t3) {
      return (r3) => async (n3) => {
        const s3 = t3.getCursorAuthToken();
        return void 0 !== s3 ? n3.header.set("Authorization", `Bearer ${s3}`) : n3.header.set("Authorization", `Bearer ${e2.SHARED_METRICS_BEARER_TOKEN}`), await r3(n3);
      };
    }
    function l(t3) {
      return (e3) => async (r3) => {
        t3.applyRequestHeaders(r3, (0, a.randomUUID)());
        const n3 = t3.getTeamId();
        return void 0 !== n3 && r3.header.set(u, n3.toString()), await e3(r3);
      };
    }
    e2.SHARED_METRICS_BEARER_TOKEN = ["g", "g", "H", "r"].slice().reverse().join("") + "iuZiWjUfGNs8z4HHTLHuMD8CccAumgjzjpLmDsDX6c3Eaj7nvzCJMNoVAv3P";
    const m = 5e3;
    function d(t3, e3) {
      if (!e3) return t3;
      const r3 = Object.keys(e3);
      if (0 === r3.length) return t3;
      if (1 === r3.length) {
        const n4 = r3[0];
        return t3 + "|" + n4 + ":" + e3[n4];
      }
      r3.sort();
      let n3 = t3 + "|" + r3[0] + ":" + e3[r3[0]];
      for (let t4 = 1; t4 < r3.length; t4++) n3 += "," + r3[t4] + ":" + e3[r3[t4]];
      return n3;
    }
    function f(t3, e3) {
      if (t3.observed += 1, t3.samples.length < 100) return void t3.samples.push(e3);
      const r3 = Math.floor(Math.random() * t3.observed);
      r3 < 100 && (t3.samples[r3] = e3);
    }
    class p {
      constructor(t3) {
        this.metricsUrl = "https://api3.cursor.sh", this.metricsClient = void 0, this.incrementBuffer = /* @__PURE__ */ new Map(), this.gaugeBuffer = /* @__PURE__ */ new Map(), this.distributionBuffer = /* @__PURE__ */ new Map(), this.cardinalityOverflowLogged = false, this.distributionFlushInFlight = false, this.inFlightSends = /* @__PURE__ */ new Set(), this._logError = (t4) => this._host.debugLog.error(t4), this._host = t3, this.flushTimer = setInterval(() => this.flush(), 3e4);
      }
      static withClient(t3, e3) {
        const r3 = new p(t3);
        return r3.metricsClient = e3, r3;
      }
      dispose() {
        clearInterval(this.flushTimer), this.flush(false);
      }
      async disposeAndWait() {
        this.dispose();
        let t3, e3 = false;
        const r3 = new Promise((r4) => {
          t3 = setTimeout(() => {
            e3 = true, r4();
          }, 2e3).unref();
        });
        try {
          await Promise.race([this.drain(() => e3), r3]);
        } finally {
          clearTimeout(t3);
        }
      }
      async drain(t3) {
        for (; this.inFlightSends.size > 0; ) {
          if (await Promise.race(this.inFlightSends), t3()) return;
          this.flush(false);
        }
      }
      increment(t3, e3, r3) {
        const n3 = d(t3, r3), s3 = this.incrementBuffer.get(n3);
        if (s3) s3.value += e3;
        else {
          if (this.incrementBuffer.size >= m) return void this.logCardinalityOverflow("increment");
          this.incrementBuffer.set(n3, { name: t3, tags: r3, value: e3 });
        }
      }
      gauge(t3, e3, r3) {
        const n3 = d(t3, r3), s3 = this.gaugeBuffer.get(n3);
        if (s3) s3.value = e3;
        else {
          if (this.gaugeBuffer.size >= m) return void this.logCardinalityOverflow("gauge");
          this.gaugeBuffer.set(n3, { name: t3, tags: r3, value: e3 });
        }
      }
      distribution(t3, e3, r3) {
        const n3 = d(t3, r3), s3 = this.distributionBuffer.get(n3);
        if (s3) f(s3, e3);
        else {
          if (this.distributionBuffer.size >= m) return void this.logCardinalityOverflow("distribution");
          this.distributionBuffer.set(n3, { name: t3, tags: r3, samples: [e3], observed: 1 });
        }
      }
      distributionSamples(t3, e3, r3) {
        if (0 === e3.length) return;
        const n3 = d(t3, r3);
        let s3 = this.distributionBuffer.get(n3);
        if (!s3) {
          if (this.distributionBuffer.size >= m) return void this.logCardinalityOverflow("distribution");
          s3 = { name: t3, tags: r3, samples: [], observed: 0 }, this.distributionBuffer.set(n3, s3);
        }
        for (let t4 = 0; t4 < e3.length; t4++) f(s3, e3[t4]);
      }
      async flushAndWait() {
        const t3 = this.getOrCreateClient();
        if (!t3) return;
        const e3 = [...this.flushNamedMetrics(this.incrementBuffer, (e4) => t3.reportIncrement(e4)), ...this.flushNamedMetrics(this.gaugeBuffer, (e4) => t3.reportGauge(e4))];
        for (; this.distributionFlushInFlight; ) await new Promise((t4) => setTimeout(t4, 0));
        e3.push(...await this.expandDistributions(t3, true)), await Promise.all(e3);
      }
      flush(t3 = true) {
        this.flushIncrements(), this.flushGauges(), this.flushDistributions(t3), this.cardinalityOverflowLogged = false;
      }
      flushIncrements() {
        if (0 === this.incrementBuffer.size) return;
        const t3 = this.getOrCreateClient();
        t3 && this.flushNamedMetrics(this.incrementBuffer, (e3) => t3.reportIncrement(e3));
      }
      flushGauges() {
        if (0 === this.gaugeBuffer.size) return;
        const t3 = this.getOrCreateClient();
        t3 && this.flushNamedMetrics(this.gaugeBuffer, (e3) => t3.reportGauge(e3));
      }
      flushNamedMetrics(t3, e3) {
        const r3 = [];
        let n3 = [];
        for (const i3 of t3.values()) n3.push(new s2.ReportMetricsRequest_NamedMetric({ name: i3.name, value: i3.value, tags: i3.tags })), n3.length >= 1e3 && (r3.push(this.track(e3(new s2.ReportMetricsRequest({ metricsList: n3 })))), n3 = []);
        return t3.clear(), n3.length > 0 && r3.push(this.track(e3(new s2.ReportMetricsRequest({ metricsList: n3 })))), r3;
      }
      track(t3) {
        const e3 = t3.then(() => {
        }, this._logError);
        return this.inFlightSends.add(e3), e3.finally(() => this.inFlightSends.delete(e3)), e3;
      }
      flushDistributions(t3) {
        if (this.distributionFlushInFlight || 0 === this.distributionBuffer.size) return;
        const e3 = this.getOrCreateClient();
        e3 && this.expandDistributions(e3, t3);
      }
      expandDistributions(t3, e3) {
        const r3 = Array.from(this.distributionBuffer.values());
        this.distributionBuffer.clear(), this.distributionFlushInFlight = true;
        const n3 = this.sendDistributionEntries(t3, r3, e3).finally(() => {
          this.distributionFlushInFlight = false;
        });
        return this.track(n3), n3.catch(() => []);
      }
      async sendDistributionEntries(t3, e3, r3) {
        const n3 = [];
        let i3 = [];
        for (let o3 = 0; o3 < e3.length; o3++) {
          r3 && o3 > 0 && o3 % 100 == 0 && await new Promise((t4) => setTimeout(t4, 0));
          const a2 = e3[o3];
          for (const t4 of a2.samples) i3.push(new s2.ReportMetricsRequest_NamedMetric({ name: a2.name, value: t4, tags: a2.tags }));
          i3.length >= 1e4 && (n3.push(this.track(t3.reportDistribution(new s2.ReportMetricsRequest({ metricsList: i3 })))), i3 = []);
        }
        return i3.length > 0 && n3.push(this.track(t3.reportDistribution(new s2.ReportMetricsRequest({ metricsList: i3 })))), n3;
      }
      logCardinalityOverflow(t3) {
        this.cardinalityOverflowLogged || (this.cardinalityOverflowLogged = true, this._host.debugLog.error(`AggregatingMetricsProvider: ${t3} buffer exceeded cardinality limit of 5000. Dropping new metric keys.`));
      }
      getOrCreateClient() {
        if (void 0 !== this.metricsClient) return this.metricsClient;
        const t3 = (0, o2.createConnectTransport)({ httpVersion: "2", baseUrl: this.metricsUrl, interceptors: [c(this._host), l(this._host)], useBinaryFormat: true, jsonOptions: { ignoreUnknownFields: true }, sendCompression: o2.compressionGzip, acceptCompression: [o2.compressionGzip] });
        return this.metricsClient = (0, i2.createPromiseClient)(n2.MetricsService, t3), this.metricsClient;
      }
    }
    e2.AggregatingMetricsProvider = p;
  }