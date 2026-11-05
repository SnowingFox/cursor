// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 2744 range:107104..107687
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2744: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.materialize = void 0;
    const s10 = n10(1078);
    a10.materialize = function() {
      return (e11) => new s10.Observable((a11) => {
        e11.subscribe((0, s10.operate)({ destination: a11, next: (e12) => {
          a11.next((0, s10.nextNotification)(e12));
        }, error: (e12) => {
          a11.next((0, s10.errorNotification)(e12)), a11.complete();
        }, complete: () => {
          a11.next(s10.COMPLETE_NOTIFICATION), a11.complete();
        } }));
      });
    };
  }