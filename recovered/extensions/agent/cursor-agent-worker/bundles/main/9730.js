// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 9730 range:361742..362406
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9730: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.createFind = a10.find = void 0;
    const s10 = n10(1078);
    function o10(e11, a11, n11, o11) {
      const r10 = "index" === a11;
      let t10 = 0;
      n11.subscribe((0, s10.operate)({ destination: o11, next: (a12) => {
        const s11 = t10++;
        e11(a12, s11, n11) && (o11.next(r10 ? s11 : a12), o11.complete());
      }, complete: () => {
        o11.next(r10 ? -1 : void 0), o11.complete();
      } }));
    }
    a10.find = function(e11) {
      return (a11) => new s10.Observable((n11) => o10(e11, "value", a11, n11));
    }, a10.createFind = o10;
  }