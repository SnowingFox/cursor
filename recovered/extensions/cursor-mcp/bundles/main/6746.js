// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6746 range:572261..574829
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6746: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.createNoopMeter = t2.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t2.NOOP_OBSERVABLE_GAUGE_METRIC = t2.NOOP_OBSERVABLE_COUNTER_METRIC = t2.NOOP_UP_DOWN_COUNTER_METRIC = t2.NOOP_HISTOGRAM_METRIC = t2.NOOP_GAUGE_METRIC = t2.NOOP_COUNTER_METRIC = t2.NOOP_METER = t2.NoopObservableUpDownCounterMetric = t2.NoopObservableGaugeMetric = t2.NoopObservableCounterMetric = t2.NoopObservableMetric = t2.NoopHistogramMetric = t2.NoopGaugeMetric = t2.NoopUpDownCounterMetric = t2.NoopCounterMetric = t2.NoopMetric = t2.NoopMeter = void 0;
    class r2 {
      constructor() {
      }
      createGauge(e3, r3) {
        return t2.NOOP_GAUGE_METRIC;
      }
      createHistogram(e3, r3) {
        return t2.NOOP_HISTOGRAM_METRIC;
      }
      createCounter(e3, r3) {
        return t2.NOOP_COUNTER_METRIC;
      }
      createUpDownCounter(e3, r3) {
        return t2.NOOP_UP_DOWN_COUNTER_METRIC;
      }
      createObservableGauge(e3, r3) {
        return t2.NOOP_OBSERVABLE_GAUGE_METRIC;
      }
      createObservableCounter(e3, r3) {
        return t2.NOOP_OBSERVABLE_COUNTER_METRIC;
      }
      createObservableUpDownCounter(e3, r3) {
        return t2.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
      }
      addBatchObservableCallback(e3, t3) {
      }
      removeBatchObservableCallback(e3) {
      }
    }
    t2.NoopMeter = r2;
    class n2 {
    }
    t2.NoopMetric = n2;
    class o2 extends n2 {
      add(e3, t3) {
      }
    }
    t2.NoopCounterMetric = o2;
    class s2 extends n2 {
      add(e3, t3) {
      }
    }
    t2.NoopUpDownCounterMetric = s2;
    class i2 extends n2 {
      record(e3, t3) {
      }
    }
    t2.NoopGaugeMetric = i2;
    class a2 extends n2 {
      record(e3, t3) {
      }
    }
    t2.NoopHistogramMetric = a2;
    class c {
      addCallback(e3) {
      }
      removeCallback(e3) {
      }
    }
    t2.NoopObservableMetric = c;
    class u extends c {
    }
    t2.NoopObservableCounterMetric = u;
    class l extends c {
    }
    t2.NoopObservableGaugeMetric = l;
    class d extends c {
    }
    t2.NoopObservableUpDownCounterMetric = d, t2.NOOP_METER = new r2(), t2.NOOP_COUNTER_METRIC = new o2(), t2.NOOP_GAUGE_METRIC = new i2(), t2.NOOP_HISTOGRAM_METRIC = new a2(), t2.NOOP_UP_DOWN_COUNTER_METRIC = new s2(), t2.NOOP_OBSERVABLE_COUNTER_METRIC = new u(), t2.NOOP_OBSERVABLE_GAUGE_METRIC = new l(), t2.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new d(), t2.createNoopMeter = function() {
      return t2.NOOP_METER;
    };
  }