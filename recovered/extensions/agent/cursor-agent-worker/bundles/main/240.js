// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 240 range:2538..3335
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
240: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.raceInit = a10.race = void 0;
    const s10 = n10(1078), o10 = n10(9031);
    function r10(e11) {
      return (a11) => {
        let n11 = [];
        for (let o11 = 0; n11 && !a11.closed && o11 < e11.length; o11++) n11.push((0, s10.from)(e11[o11]).subscribe((0, s10.operate)({ destination: a11, next: (e12) => {
          if (n11) {
            for (let e13 = 0; e13 < n11.length; e13++) e13 !== o11 && n11[e13].unsubscribe();
            n11 = null;
          }
          a11.next(e12);
        } })));
      };
    }
    a10.race = function(...e11) {
      return 1 === (e11 = (0, o10.argsOrArgArray)(e11)).length ? (0, s10.from)(e11[0]) : new s10.Observable(r10(e11));
    }, a10.raceInit = r10;
  }