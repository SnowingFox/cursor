// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 28718 range:4858301..4866504
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
28718: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.AggregatingMetricsProvider = t.SHARED_METRICS_BEARER_TOKEN = void 0, t.createMetricsBearerTokenInterceptor = l, t.createMetricsAddHeadersInterceptor = u;
    const n = r(22670), s = r(1840), o = r(22712), i = r(54384), a = r(76982), c = "x-cursor-team-id";
    function l(e2) {
      return (r2) => async (n2) => {
        const s2 = e2.getCursorAuthToken();
        return void 0 !== s2 ? n2.header.set("Authorization", `Bearer ${s2}`) : n2.header.set("Authorization", `Bearer ${t.SHARED_METRICS_BEARER_TOKEN}`), await r2(n2);
      };
    }
    function u(e2) {
      return (t2) => async (r2) => {
        e2.applyRequestHeaders(r2, (0, a.randomUUID)());
        const n2 = e2.getTeamId();
        return void 0 !== n2 && r2.header.set(c, n2.toString()), await t2(r2);
      };
    }
    t.SHARED_METRICS_BEARER_TOKEN = ["g", "g", "H", "r"].slice().reverse().join("") + "iuZiWjUfGNs8z4HHTLHuMD8CccAumgjzjpLmDsDX6c3Eaj7nvzCJMNoVAv3P";
    const d = 5e3;
    function p(e2, t2) {
      if (!t2) return e2;
      const r2 = Object.keys(t2);
      if (0 === r2.length) return e2;
      if (1 === r2.length) {
        const n3 = r2[0];
        return e2 + "|" + n3 + ":" + t2[n3];
      }
      r2.sort();
      let n2 = e2 + "|" + r2[0] + ":" + t2[r2[0]];
      for (let e3 = 1; e3 < r2.length; e3++) n2 += "," + r2[e3] + ":" + t2[r2[e3]];
      return n2;
    }
    function m(e2, t2) {
      if (e2.observed += 1, e2.samples.length < 100) return void e2.samples.push(t2);
      const r2 = Math.floor(Math.random() * e2.observed);
      r2 < 100 && (e2.samples[r2] = t2);
    }
    class h {
      constructor(e2) {
        this.metricsUrl = "https://api3.cursor.sh", this.metricsClient = void 0, this.incrementBuffer = /* @__PURE__ */ new Map(), this.gaugeBuffer = /* @__PURE__ */ new Map(), this.distributionBuffer = /* @__PURE__ */ new Map(), this.cardinalityOverflowLogged = false, this.distributionFlushInFlight = false, this.inFlightSends = /* @__PURE__ */ new Set(), this._logError = (e3) => this._host.debugLog.error(e3), this._host = e2, this.flushTimer = setInterval(() => this.flush(), 3e4);
      }
      static withClient(e2, t2) {
        const r2 = new h(e2);
        return r2.metricsClient = t2, r2;
      }
      dispose() {
        clearInterval(this.flushTimer), this.flush(false);
      }
      async disposeAndWait() {
        this.dispose();
        let e2, t2 = false;
        const r2 = new Promise((r3) => {
          e2 = setTimeout(() => {
            t2 = true, r3();
          }, 2e3).unref();
        });
        try {
          await Promise.race([this.drain(() => t2), r2]);
        } finally {
          clearTimeout(e2);
        }
      }
      async drain(e2) {
        for (; this.inFlightSends.size > 0; ) {
          if (await Promise.race(this.inFlightSends), e2()) return;
          this.flush(false);
        }
      }
      increment(e2, t2, r2) {
        const n2 = p(e2, r2), s2 = this.incrementBuffer.get(n2);
        if (s2) s2.value += t2;
        else {
          if (this.incrementBuffer.size >= d) return void this.logCardinalityOverflow("increment");
          this.incrementBuffer.set(n2, { name: e2, tags: r2, value: t2 });
        }
      }
      gauge(e2, t2, r2) {
        const n2 = p(e2, r2), s2 = this.gaugeBuffer.get(n2);
        if (s2) s2.value = t2;
        else {
          if (this.gaugeBuffer.size >= d) return void this.logCardinalityOverflow("gauge");
          this.gaugeBuffer.set(n2, { name: e2, tags: r2, value: t2 });
        }
      }
      distribution(e2, t2, r2) {
        const n2 = p(e2, r2), s2 = this.distributionBuffer.get(n2);
        if (s2) m(s2, t2);
        else {
          if (this.distributionBuffer.size >= d) return void this.logCardinalityOverflow("distribution");
          this.distributionBuffer.set(n2, { name: e2, tags: r2, samples: [t2], observed: 1 });
        }
      }
      distributionSamples(e2, t2, r2) {
        if (0 === t2.length) return;
        const n2 = p(e2, r2);
        let s2 = this.distributionBuffer.get(n2);
        if (!s2) {
          if (this.distributionBuffer.size >= d) return void this.logCardinalityOverflow("distribution");
          s2 = { name: e2, tags: r2, samples: [], observed: 0 }, this.distributionBuffer.set(n2, s2);
        }
        for (let e3 = 0; e3 < t2.length; e3++) m(s2, t2[e3]);
      }
      async flushAndWait() {
        const e2 = this.getOrCreateClient();
        if (!e2) return;
        const t2 = [...this.flushNamedMetrics(this.incrementBuffer, (t3) => e2.reportIncrement(t3)), ...this.flushNamedMetrics(this.gaugeBuffer, (t3) => e2.reportGauge(t3))];
        for (; this.distributionFlushInFlight; ) await new Promise((e3) => setTimeout(e3, 0));
        t2.push(...await this.expandDistributions(e2, true)), await Promise.all(t2);
      }
      flush(e2 = true) {
        this.flushIncrements(), this.flushGauges(), this.flushDistributions(e2), this.cardinalityOverflowLogged = false;
      }
      flushIncrements() {
        if (0 === this.incrementBuffer.size) return;
        const e2 = this.getOrCreateClient();
        e2 && this.flushNamedMetrics(this.incrementBuffer, (t2) => e2.reportIncrement(t2));
      }
      flushGauges() {
        if (0 === this.gaugeBuffer.size) return;
        const e2 = this.getOrCreateClient();
        e2 && this.flushNamedMetrics(this.gaugeBuffer, (t2) => e2.reportGauge(t2));
      }
      flushNamedMetrics(e2, t2) {
        const r2 = [];
        let n2 = [];
        for (const o2 of e2.values()) n2.push(new s.ReportMetricsRequest_NamedMetric({ name: o2.name, value: o2.value, tags: o2.tags })), n2.length >= 1e3 && (r2.push(this.track(t2(new s.ReportMetricsRequest({ metricsList: n2 })))), n2 = []);
        return e2.clear(), n2.length > 0 && r2.push(this.track(t2(new s.ReportMetricsRequest({ metricsList: n2 })))), r2;
      }
      track(e2) {
        const t2 = e2.then(() => {
        }, this._logError);
        return this.inFlightSends.add(t2), t2.finally(() => this.inFlightSends.delete(t2)), t2;
      }
      flushDistributions(e2) {
        if (this.distributionFlushInFlight || 0 === this.distributionBuffer.size) return;
        const t2 = this.getOrCreateClient();
        t2 && this.expandDistributions(t2, e2);
      }
      expandDistributions(e2, t2) {
        const r2 = Array.from(this.distributionBuffer.values());
        this.distributionBuffer.clear(), this.distributionFlushInFlight = true;
        const n2 = this.sendDistributionEntries(e2, r2, t2).finally(() => {
          this.distributionFlushInFlight = false;
        });
        return this.track(n2), n2.catch(() => []);
      }
      async sendDistributionEntries(e2, t2, r2) {
        const n2 = [];
        let o2 = [];
        for (let i2 = 0; i2 < t2.length; i2++) {
          r2 && i2 > 0 && i2 % 100 == 0 && await new Promise((e3) => setTimeout(e3, 0));
          const a2 = t2[i2];
          for (const e3 of a2.samples) o2.push(new s.ReportMetricsRequest_NamedMetric({ name: a2.name, value: e3, tags: a2.tags }));
          o2.length >= 1e4 && (n2.push(this.track(e2.reportDistribution(new s.ReportMetricsRequest({ metricsList: o2 })))), o2 = []);
        }
        return o2.length > 0 && n2.push(this.track(e2.reportDistribution(new s.ReportMetricsRequest({ metricsList: o2 })))), n2;
      }
      logCardinalityOverflow(e2) {
        this.cardinalityOverflowLogged || (this.cardinalityOverflowLogged = true, this._host.debugLog.error(`AggregatingMetricsProvider: ${e2} buffer exceeded cardinality limit of 5000. Dropping new metric keys.`));
      }
      getOrCreateClient() {
        if (void 0 !== this.metricsClient) return this.metricsClient;
        const e2 = (0, i.createConnectTransport)({ httpVersion: "2", baseUrl: this.metricsUrl, interceptors: [l(this._host), u(this._host)], useBinaryFormat: true, jsonOptions: { ignoreUnknownFields: true }, sendCompression: i.compressionGzip, acceptCompression: [i.compressionGzip] });
        return this.metricsClient = (0, o.createPromiseClient)(n.MetricsService, e2), this.metricsClient;
      }
    }
    t.AggregatingMetricsProvider = h;
  }