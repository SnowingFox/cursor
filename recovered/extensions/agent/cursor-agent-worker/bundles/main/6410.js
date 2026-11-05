// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 6410 range:187518..188221
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6410: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.generate = void 0;
    const s10 = n10(4896), o10 = n10(2901), r10 = n10(3737), t10 = n10(7096);
    a10.generate = function(e11, a11, n11, i10, m10) {
      let l10, d10;
      function* c10() {
        for (let e12 = d10; !a11 || a11(e12); e12 = n11(e12)) yield l10(e12);
      }
      return 1 === arguments.length ? { initialState: d10, condition: a11, iterate: n11, resultSelector: l10 = s10.identity, scheduler: m10 } = e11 : (d10 = e11, !i10 || (0, o10.isScheduler)(i10) ? (l10 = s10.identity, m10 = i10) : l10 = i10), (0, r10.defer)(m10 ? () => (0, t10.scheduleIterable)(c10(), m10) : c10);
    };
  }