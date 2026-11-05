// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:86cacbdcba6cefe8315ceac7b60f0915500dbe94175aebe3d62f2abf4f716a87
// module: "../utils/dist/promise-extras.js" range:2481267..2483516
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
import * as __dep0 from "rxjs";
var n = __dep0;
function s(t, r, e) {
  const {
      max: s = 4
    } = e ?? {},
    i = (0, n.from)(t).pipe((0, n.map)(t => (0, n.defer)(() => (0, n.from)(r(t)).pipe((0, n.map)(r => ({
      k: t,
      v: r
    }))))), (0, n.mergeAll)(s), (0, n.reduce)((t, r) => (t.set(r.k, r.v), t), new Map()));
  return (0, n.firstValueFrom)(i);
}
async function i(t, r, e) {
  const {
      max: s = 4
    } = e ?? {},
    i = (0, n.from)(t.map((t, r) => r)).pipe((0, n.map)(e => (0, n.defer)(() => (0, n.from)(r(t[e])).pipe((0, n.map)(t => ({
      idx: e,
      v: t
    }))))), (0, n.mergeAll)(s), (0, n.reduce)((t, r) => (t[r.idx] = r.v, t), []));
  return (0, n.firstValueFrom)(i);
}
function o(t) {
  return new Promise(r => {
    setTimeout(r, t);
  });
}
function a(t, r) {
  return new Promise(e => {
    if (r.aborted) return void e();
    const n = () => {
        clearTimeout(s), e();
      },
      s = setTimeout(() => {
        r.removeEventListener("abort", n), e();
      }, t);
    r.addEventListener("abort", n, {
      once: !0
    });
  });
}
class u extends Error {
  constructor(t) {
    super(t), this.name = "TimeoutError";
  }
}
function c(t, r, e) {
  return (0, n.firstValueFrom)((0, n.from)(t).pipe((0, n.timeout)({
    first: r,
    with: () => (0, n.throwError)(() => new u(e ?? `Promise timed out after ${r}ms`))
  })));
}
function l(t, r = 3) {
  const e = (0, n.defer)(() => (0, n.from)(t())).pipe((0, n.retry)(r));
  return (0, n.firstValueFrom)(e);
}
class m {
  constructor(t) {
    this.opQueue = new n.Subject(), this.nextOperation = 1;
    const {
      max: r = 4
    } = t ?? {};
    this.opResultStream = this.opQueue.pipe((0, n.mergeAll)(r), (0, n.share)()), this.dispose = this.opResultStream.subscribe();
  }
  enqueue(t) {
    const r = this.nextOperation++,
      e = (0, n.defer)(() => (0, n.from)(t()).pipe((0, n.map)(t => ({
        id: r,
        result: t
      })), (0, n.catchError)(t => (0, n.of)({
        id: r,
        error: t
      })))),
      s = (0, n.firstValueFrom)(this.opResultStream.pipe((0, n.filter)(t => t.id === r))).then(t => t.error ? Promise.reject(t.error) : Promise.resolve(t.result));
    return this.opQueue.next(e), s;
  }
  enqueueList(t, r) {
    return 0 === t.length ? Promise.resolve(new Map()) : (0, n.firstValueFrom)((0, n.from)(t).pipe((0, n.mergeMap)(t => this.enqueue(() => r(t)).then(r => ({
      key: t,
      value: r
    }))), (0, n.reduce)((t, r) => (t.set(r.key, r.value), t), new Map())));
  }
  close() {
    this.opQueue.complete();
    const t = (0, n.lastValueFrom)(this.opResultStream.pipe((0, n.materialize)(), (0, n.map)(() => {})));
    return this.dispose.unsubscribe(), t;
  }
}
export { u as MU, l as O$, i as PH, m as TJ, o as cb, a as st, c as wj, s as xb };
