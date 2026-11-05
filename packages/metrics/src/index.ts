// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../metrics/dist/index.js" range:417841..418613
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
import * as __dep0 from "@anysphere/context/core";
const n = (0, __dep0.cF)(Symbol("metricsBackend"), {
  record: () => {},
  increment: () => {},
  gauge: () => {},
  histogram: () => {}
});
function s(t) {
  return t.get(n);
}
function i(t, r) {
  const e = {
    name: t,
    type: "counter",
    description: r?.description,
    labelNames: r?.labelNames
  };
  return {
    increment: (t, r, n) => {
      s(t).increment(t, e, r ?? 1, n);
    },
    record: (t, r, n) => {
      s(t).record(t, e, r, n);
    }
  };
}
function o(t, r) {
  const e = {
    name: t,
    type: "gauge",
    description: r?.description,
    labelNames: r?.labelNames
  };
  return {
    gauge: (t, r, n) => {
      s(t).gauge(t, e, r, n);
    },
    record: (t, r, n) => {
      s(t).record(t, e, r, n);
    }
  };
}
function a(t, r) {
  const e = {
    name: t,
    type: "histogram",
    description: r?.description,
    labelNames: r?.labelNames
  };
  return {
    histogram: (t, r, n) => {
      s(t).histogram(t, e, r, n);
    },
    record: (t, r, n) => {
      s(t).record(t, e, r, n);
    }
  };
}
export { i as Pu, a as v5, o as wt };
