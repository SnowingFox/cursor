// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 26746 range:1263696..1266195
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
26746: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.createNoopMeter = t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t.NOOP_OBSERVABLE_GAUGE_METRIC = t.NOOP_OBSERVABLE_COUNTER_METRIC = t.NOOP_UP_DOWN_COUNTER_METRIC = t.NOOP_HISTOGRAM_METRIC = t.NOOP_GAUGE_METRIC = t.NOOP_COUNTER_METRIC = t.NOOP_METER = t.NoopObservableUpDownCounterMetric = t.NoopObservableGaugeMetric = t.NoopObservableCounterMetric = t.NoopObservableMetric = t.NoopHistogramMetric = t.NoopGaugeMetric = t.NoopUpDownCounterMetric = t.NoopCounterMetric = t.NoopMetric = t.NoopMeter = void 0;
    class r {
      constructor() {
      }
      createGauge(e2, r2) {
        return t.NOOP_GAUGE_METRIC;
      }
      createHistogram(e2, r2) {
        return t.NOOP_HISTOGRAM_METRIC;
      }
      createCounter(e2, r2) {
        return t.NOOP_COUNTER_METRIC;
      }
      createUpDownCounter(e2, r2) {
        return t.NOOP_UP_DOWN_COUNTER_METRIC;
      }
      createObservableGauge(e2, r2) {
        return t.NOOP_OBSERVABLE_GAUGE_METRIC;
      }
      createObservableCounter(e2, r2) {
        return t.NOOP_OBSERVABLE_COUNTER_METRIC;
      }
      createObservableUpDownCounter(e2, r2) {
        return t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
      }
      addBatchObservableCallback(e2, t2) {
      }
      removeBatchObservableCallback(e2) {
      }
    }
    t.NoopMeter = r;
    class n {
    }
    t.NoopMetric = n;
    class s extends n {
      add(e2, t2) {
      }
    }
    t.NoopCounterMetric = s;
    class o extends n {
      add(e2, t2) {
      }
    }
    t.NoopUpDownCounterMetric = o;
    class i extends n {
      record(e2, t2) {
      }
    }
    t.NoopGaugeMetric = i;
    class a extends n {
      record(e2, t2) {
      }
    }
    t.NoopHistogramMetric = a;
    class c {
      addCallback(e2) {
      }
      removeCallback(e2) {
      }
    }
    t.NoopObservableMetric = c;
    class l extends c {
    }
    t.NoopObservableCounterMetric = l;
    class u extends c {
    }
    t.NoopObservableGaugeMetric = u;
    class d extends c {
    }
    t.NoopObservableUpDownCounterMetric = d, t.NOOP_METER = new r(), t.NOOP_COUNTER_METRIC = new s(), t.NOOP_GAUGE_METRIC = new i(), t.NOOP_HISTOGRAM_METRIC = new a(), t.NOOP_UP_DOWN_COUNTER_METRIC = new o(), t.NOOP_OBSERVABLE_COUNTER_METRIC = new l(), t.NOOP_OBSERVABLE_GAUGE_METRIC = new u(), t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new d(), t.createNoopMeter = function() {
      return t.NOOP_METER;
    };
  }